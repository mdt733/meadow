# EMU Butterfly Rider — actual neural policy + MuJoCo WASM physics

**Walk the robot (12.5 MB download)** appears alongside **Fly a butterfly**
in ordinary Meadow. The **butterfly-only experience downloads no robot physics,
neural network, or WebAssembly files**. The special teal-and-gold rock near
x=7,z=9.1 is now half its original size. Land there to see a separately
labelled **Wake EMU (12.5 MB download)** option; landing alone does not download
anything. `?emu-demo=1` starts already perched on that rock.

Clicking either Walk or Wake shows a byte-accurate progress bar with an MB count
and percentage for the champion model, browser runtime and 10.9 MB MuJoCo WASM
binary. **Only a deliberate click starts the download.** After those bytes
arrive, the UI says that the engine is starting; it does not fake progress
during physics initialization. The downloaded WASM bytes are reused directly
for engine initialization instead of silently downloading the binary twice.
A second ride in the same tab reuses the loaded engine without another download.

## What actually runs

- Real **v5032 Pinnacle 260,046,848-step champion** `champion.emupolicy`
  (360 observation inputs, two 256-neuron hidden layers, six motor outputs).
- EMU's own browser actor / sensor / control / MuJoCo simulation code,
  imported from the pinned EMU repository commit. This includes the real
  *robot.xml*, actuated servos, passive shin springs, foot contacts and
  gravity. Per-frame network actions are **actually passed to MuJoCo**.
- **Google DeepMind `@mujoco/mujoco@3.17.0` compiled into WASM**. The
  robot-specific first-ride download is **12.5 MB total**: 0.89 MB neural
  actor, 0.71 MB JavaScript runtime, and 10.93 MB WASM. No heavy robot assets
  are fetched for ordinary Meadow visitors or butterfly-only flight.
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

- W/S: forward/back. Full W now requests **+0.56 m/s** (formerly
  +0.27 m/s), within the pinned champion's **+0.669 m/s** command limit;
  reverse is capped at -0.34 m/s. Requested speed is a goal for the real
  neural walker, not a forced animation or guaranteed actual speed.
- A/D and horizontal mobile joystick: positive rider turn command for D,
  negative for A. Meadow's right-handed chase camera looks down world +Z;
  **world -X projects to screen-right**. This is why matching a numeric yaw
  sign to the original EMU viewer was not a valid steering test.
- The MuJoCo-to-Meadow transform mirrors the physical lateral axis
  (MuJoCo +Y is left). The camera has its own screen-space handedness; the
  browser test now checks projected screen-right and actual body rotation,
  rather than the yaw command alone.
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
