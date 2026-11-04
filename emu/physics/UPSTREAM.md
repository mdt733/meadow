# Headless EMU physics — pinned upstream contracts

The physical policy and observation/controller algorithms are derived from
the EMU browser simulator at `mdt733/emu`, commit
`4e3e1f45b98945c9729aab4d5c68d9ee122a6876`.

The **old Three.js viewer is intentionally gone**. We do not maintain two
graphics engines or a hidden 2×2 WebGL canvas just to simulate footsteps.

## Runtime skeleton

| File | Purpose |
| --- | --- |
| `../champion.emupolicy` | Original 260,046,848-step champion's robot XML, contract and 360→256→256→6 network |
| `../policy.js` | Single shared policy parser and neural forward pass (no duplicate vendor policy) |
| `src/index.js` | Meadow coordinate transform, 257×257 heightfield sampling and body/servo position adapter |
| `src/physical-sim.js` | Headless MuJoCo 3.17 lifecycle, six-joint actuator delay, PPO actor observations/history, control stepping and fall/reset |
| `src/sensors.js` | Champion-specific 4×4 ToF, occlusion, optical-flow, IMU, plane fit and observation sample/delay/noise |
| `src/terrain.js` | Only the signed MuJoCo heightfield XML injection and measured slope; no training-course/viewer geometry |
| `src/dynamics.js` | Original cadence-at-birth, heading P controller and measured torso attitude |
| `dist/emu-physics.js` | Prebuilt optional browser module containing the small physics adapter and MuJoCo JS interface |
| `dist/assets/*.wasm` | Upstream MuJoCo 3.17 WASM binary, loaded strictly on user opt-in |

There are no `vendor/` source files, no Three.js dependency, and no viewer
renderer, texture, camera, path-trail, inspector or DOM control machinery.
The actual six-servo XML and the physical sensor/actuator contract **remain
unaltered**. Every policy call still produces the next delayed physical motor
targets; there is no scripted root translation or walking animation.

## Extraction boundary

The retained code comes from upstream viewer modules `sim.js`,
`sensor.js`, `terrain.js`, `cadence.js`, `attitude.js`, and `controls.js`.
`physical-sim.js` keeps the original policy stepping, observation fields
and timing but removes viewer-only methods and the initial throwaway flat
MuJoCo model. `sensors.js` retains only the schema-9 360-input actor's
sensor model; unused legacy tripod and debug-ray rendering are removed.
`terrain.js` retains the identical hfield row ordering, normalisation,
surface friction and z-offset. The telemetry slope calculation is also
retained, but other viewer terrain courses are omitted.

The 31m physical heightfield is fixed around the robot's birth location.
Ornamental Meadow rocks and tree trunks are **not** yet separate MuJoCo
collision objects, and walking outside the heightfield is not supported.

## Rebuilding

```bash
cd emu/physics
npm install --no-audit --no-fund
npm run build
```

The feature-branch GitHub build action checks in the compiled module and
WASM. It **automatically syncs the exact runtime JS byte length** into the
`../emu.js` opt-in download manifest. If you rebuild manually, also update
that manifest or the byte-exact downloader will reject the changed file.
The runtime load is verified in headless Chromium with a real policy and
MuJoCo stepping, not just an ES-module syntax check.

No npm, Python, GPU, JAX or backend runtime is necessary on a visitor's
browser or on the Windows/nginx web host after these static files are built.
