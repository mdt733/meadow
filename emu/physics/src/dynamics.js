// Exact pinned EMU cadence, measured attitude, and yaw-heading controller.
// These are PHYSICAL actor-control functions, not the removed viewer's
// joystick/camera/navigation UI. Kept together to avoid tiny vendor fragments.
// Training draws cadence ONCE per episode from [0.85,1.20] Hz plus
// the birth-command speed gain. It does not retune cadence at every turn.
export function sampleEpisodeCadence({vx, vy}, control, rng=Math.random) {
  const base = 0.85 + 0.35 * rng();
  const ref = Math.max(0.05, Number(control.phase_speed_reference_mps ?? 0.6));
  const speed = Math.hypot(Number(vx) || 0, Number(vy) || 0);
  const speedFraction = Math.max(0, Math.min(1.5, speed / ref));
  return Math.min(Number(control.phase_rate_max_hz ?? 2.6),
                  base + Number(control.phase_speed_gain ?? 0.75) * speedFraction);
}

// Two different geometric questions. The IMU is rigidly attached to the torso;
// whole-robot lean also depends on where the feet are relative to that torso.
export function measuredAttitude(torsoRotation, torsoPosition, rightFoot, leftFoot) {
  if (torsoRotation.length !== 9) throw new Error('expected MuJoCo 3x3 torso rotation');
  const [tx, ty, tz] = torsoPosition;
  const fx = (rightFoot[0] + leftFoot[0]) / 2;
  const fy = (rightFoot[1] + leftFoot[1]) / 2;
  const fz = (rightFoot[2] + leftFoot[2]) / 2;
  const dx = tx - fx, dy = ty - fy, dz = tz - fz;
  // Project body-forward (local +X) into the horizontal plane. Yaw is allowed;
  // roll and chassis pitch must not redefine the gravity-vertical reference.
  const hx = torsoRotation[0], hy = torsoRotation[3];
  const hnorm = Math.hypot(hx, hy);
  const fore = hnorm > 1e-6 ? (dx * hx + dy * hy) / hnorm : 0;
  // Positive lean is chassis-centre displacement in the facing direction.
  const robotLean = Math.atan2(fore, dz);
  // Same gravity-projected chassis-pitch convention as environment.py:
  // atan2(projected_gravity_x, -projected_gravity_z).
  // MuJoCo xmat is row-major. Positive pitch tips local +X downward.
  const chassisPitch = Math.atan2(-torsoRotation[6], torsoRotation[8]);
  return { robotLean, chassisPitch };
}

const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
export const wrapRadians = radians => Math.atan2(Math.sin(radians), Math.cos(radians));

// A heading setpoint is an angle in world coordinates; the robot's neural
// actor expects a YAW RATE command in radians/s. A pure outer-loop P controller
// translates heading error to that rate, then clamps to the actor's taught
// yaw envelope. No direct-stick feedforward and no integral wind-up.
export const MAX_HEADING_ERROR_RAD = 1.0; // cap target lead at ~57° during a fall

export function headingHoldRate(requestedRate, headingTarget, actualHeading, kp, maxRate) {
  if (!Number.isFinite(actualHeading) || !Number.isFinite(headingTarget))
    return clamp(requestedRate, -maxRate, maxRate);
  const error = clamp(wrapRadians(headingTarget - actualHeading),
                      -MAX_HEADING_ERROR_RAD, MAX_HEADING_ERROR_RAD);
  return clamp(kp * error, -maxRate, maxRate);
}

/**
 * Integrate the operator's requested rotation into a world heading SETPOINT,
 * never the P-corrected yaw output. Releasing the stick holds the target.
 * With P disabled, the original direct yaw-rate steering is unchanged.
 */
export function nextYawCommand(requestedYaw, targetYaw, headingTarget,
                               actualHeading, dt, headingHold, kp, maxRate) {
  const maximumStep=Math.max(0,4*Math.min(Math.max(dt,0),.1));
  const difference=targetYaw-requestedYaw;
  // A heading *setpoint* must stop moving immediately when the stick is
  // released. Only direct-rate steering needs the old rate slew limiter.
  const request=headingHold
    ? clamp(targetYaw,-maxRate,maxRate)
    : clamp(requestedYaw+clamp(difference,-maximumStep,maximumStep),
            -maxRate,maxRate);
  if(!headingHold || !Number.isFinite(actualHeading)) {
    return {requestedYaw:request,appliedYaw:request,
            headingTarget:Number.isFinite(actualHeading)?wrapRadians(actualHeading):headingTarget};
  }
  // Keep the desired compass heading near the actual robot when it cannot
  // turn quickly enough; otherwise commands bank up an impossible full turn.
  const desired=wrapRadians(headingTarget+request*Math.max(0,dt));
  const boundedError=clamp(wrapRadians(desired-actualHeading),
                           -MAX_HEADING_ERROR_RAD,MAX_HEADING_ERROR_RAD);
  const target=wrapRadians(actualHeading+boundedError);
  return {requestedYaw:request,headingTarget:target,
          appliedYaw:headingHoldRate(request,target,actualHeading,kp,maxRate)};
}
