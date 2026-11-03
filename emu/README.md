# EMU Butterfly Rider — actual neural policy + MuJoCo WASM physics

**Walk the robot** appears alongside **Fly a butterfly** in ordinary Meadow.
Alternatively, land on the square teal-and-gold rock near x=7,z=9.1 to wake
EMU as an Easter egg. `?emu-demo=1` starts already perched on that rock.

## What actually runs

- Real **v5032 Pinnacle 260,046,848-step champion** `champion.emupolicy`
  (360 observation inputs, two 256-neuron hidden layers, six motor outputs).
- EMU's own browser actor / sensor / control / MuJoCo simulation code,
  imported from the pinned EMU repository commit. This includes the real
  *robot.xml*, actuated servos, passive shin springs, foot contacts and
  gravity. Per-frame network actions are **actually passed to MuJoCo**.
- **Google DeepMind `@mujoco/mujoco@3.17.0` compiled into WASM**. The
  physics engine and its 10.9MB binary are fetched only on first robot ride;
  this is an explicit tradeoff for accurate dynamics rather than toy physics.
- Real physics terrain: a **257×257 collision heightfield**, covering 31m
  edge-to-edge, sampled from Meadow's existing procedural `height(x,z)`.
  The rendered robot pose, leg link endpoints, butterfly perch and navigation
  use MuJoCo's actual body positions. A broad **9m-wide flat central clearing** near
  x=22,z=7, beyond the main hill, makes a much easier starting patch; both
  the visual mesh and physical heightfield sample that exact same shape.
  The edge blends gradually back into the natural meadow over 2.5m.
- The simulation and neural policy run entirely in the visitor's browser,
  without JAX, Python or a running GPU training server.

There is **no kinematic movement assist**, scripted gait, teleport-forward
navigation or second fake servo model. The previous lightweight proxy has
been deleted. Joystick and lizard-follow mode send desired velocity/yaw
commands to the same original EMU policy control path; whether EMU manages
to walk, stumble or fall depends on MuJoCo dynamics and the learned actor.

**Important scope:** The 31m hfield currently covers the central garden,
but the ornamental 3D tree trunks, rocks and butterfly are not yet separately
added as MuJoCo collision obstacles. A fixed hfield does not extend infinitely.
The browser viewer's sensor model is inherited from EMU and the physical
heightfield approximation is close but not perfectly identical to the
high-resolution rendered mesh. This is physics-based interaction, not
an official EMU physical evaluation result.


## Rider controls and camera

- W/S: forward/back; A/D and horizontal mobile joystick: physically correct
  left/right yaw, matched to EMU's official viewer (-yaw for right).
- The MuJoCo-to-Meadow conversion correctly mirrors the **lateral axis**
  (MuJoCo +Y means **left**); the robot, camera, terrain hfield and autonomous
  heading calculations all use the same convention.
- Third-person camera orientation and target follow independent,
  frame-rate-aware exponential smoothing; its vertical target is taken from
  **ground plus 21cm**, not the moving torso or butterfly. This deliberately
  smooths the picture without modifying physical motion, policies or sensors.
- Space/Fly away: dismount; Exit: leave robot following the lizard.

## Local playtest

```bash
cd ~/meadow-emu-playtest
git pull --ff-only origin feature/emu-butterfly-rider
python3 -m http.server 8000 --bind 0.0.0.0
```

Open `http://localhost:8000/meadow.html`, click **Walk the robot**, and
allow the additional engine download. W/S drive speed, A/D yaw; touch stick
also works. SPACE or Fly away releases the butterfly; Exit returns to the
homepage and leaves EMU trying to follow the lizard.

For branch developers, `emu/physics/UPSTREAM.md` documents the pinned
upstream source and Vite-based build. Rebuild with:

```bash
cd emu/physics
npm install
npm run build
```

A GitHub Actions build commits the prebuilt WASM and JS to this branch so
**WSL playtesting does not require npm**. Separate CI drives the interface in
Chromium to verify the actual actor and servo motion.

`main` is frozen; this stays on `feature/emu-butterfly-rider` until approved.
