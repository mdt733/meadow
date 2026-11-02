# EMU butterfly rider (experimental)

EMU is available directly from the **🤖 Walk the robot** button next to
**🦋 Fly a butterfly** on the standalone Meadow page. No rock hunt required.

The Easter egg remains: fly to the unmistakable **square teal rock with the
golden diamond on top** near (x=7,z=9.1), land and choose **Wake the little
robot**. It is a real collidable rock, not an invisible click target.

The ordinary homepage does not fetch any EMU scripts, runtime or policy
until either option is deliberately selected.

- The 886,002-byte `champion.emupolicy` is copied from `mdt733/emu`,
  v5032 Pinnacle, 260,046,848 training steps. It includes the 360-input
  observation contract, 256×256 network, six outputs, and normalization.
- `policy.js` is reused from EMU's own browser viewer (with no ML library).
  A trained policy actually produces all six joint commands every 20 ms.
- `emu.js` assembles four observation history frames and an approximate 4×4
  Meadow heightfield scan, updates servos, and exposes articulated joints.
- Meadow's own WebGL renderer draws the 6-DoF robot with proper scene depth,
  and the same butterfly is attached to the robot's head while riding.
- W/S or the virtual stick move, A/D turn, SPACE / Fly away launches the
  butterfly; normal Exit returns to the homepage with EMU following the lizard.
  Landing on the same special rock again offers another ride.
- Only a small JavaScript controller is added before activation; the policy
  arrives on-demand with an actual download progress bar and HTTP caching.

## Major limitation, on purpose

**This is a garden prototype, NOT a physical accuracy demonstration.** The
browser controller uses a lightweight six-joint kinematic/contact proxy and
explicit, small navigation assistance instead of the original MuJoCo/MJX
rigid-body engine. Its IMU, optical flow and ToF observations approximate the
required contract; they do not replicate the training sensor timing, contact
physics, or self-occlusion. It should never be scored as an EMU physical exam
or described as MuJoCo-equivalent walking. Policy inference, however, is the
real champion actor and is not replaced by canned gait animations.

Future version: lazily load official MuJoCo WebAssembly and drive its
`robot.xml` on a collision heightfield sampled from Meadow, then validate
joint trajectories against EMU's reference browser viewer before calling it
physics-faithful.

## Run / test

Serve the repo with a real HTTP server (ES modules and fetch cannot run from
`file://`):

```bash
python3 -m http.server 8000
# http://localhost:8000/meadow.html
node tests/check-inline.mjs
node --test tests/emu-rider.test.mjs
```

Choose **Walk the robot** from the regular Meadow homepage; loading then
automatically puts the butterfly on EMU's head. The alternate discovery path
uses the square rock. For a shortcut straight to the rock landing, open
`http://localhost:8000/meadow.html?emu-demo=1`.

On mobile, use the touch stick to pilot and **Fly away** to dismount. On
embedded Meadow pages the buttons remain hidden, like the existing butterfly
button; the parent can request a robot ride via the same-origin
`postMessage({type:'meadow-emu-start'}, location.origin)` event.

**This entire feature lives on `feature/emu-butterfly-rider`; `main` is unchanged.**
