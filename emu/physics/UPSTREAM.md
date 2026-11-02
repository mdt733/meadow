# Pinned real EMU browser physics

This folder uses the published physics viewer from **mdt733/emu**, pinned to
main SHA `4e3e1f45b98945c9729aab4d5c68d9ee122a6876`.

The `vendor/` files are source copies, not handwritten imitations. Revisions
are deliberately local and tiny:
- `vendor/sim.js`: optional `this.meadowPark` terrain provider in the existing
  `loadModel()` hook.
- `vendor/terrain.js`: hfield geom applies optional `park.zOffset` so Meadow's
  real hills can go below the spawn elevation without clamping.

The rest of the actor history, velocity estimator, IMU, 4×4 ToF,
one-frame actuator delay, joint and force dynamics, MuJoCo substeps,
falls/reset, yaw controller and neural inference stay in the upstream viewer
implementation.

`@mujoco/mujoco@3.17.0` (Google DeepMind, Apache-2.0) plus
`three@0.180.0` are used **only after clicking Walk the robot / waking rock**.
The physics-only hidden Three canvas exists to let the vetted upstream viewer
simulate; **Meadow's own WebGL canvas renders the robot**, using MuJoCo's actual
body positions and orientations.

Build offline assets with `cd emu/physics && npm install && npm run build`.
A GitHub Actions workflow publishes the resulting `dist/` bundle and the
WASM binary back to this feature branch so the final page works when served
from plain `python3 -m http.server` on WSL; npm is not needed for playtesting.

Real physical terrain: a 257×257 MuJoCo heightfield spanning ±15.5m centered
on the robot's spawn, sampled from Meadow's *same* procedural `height(x,z)`.
Normal gameplay uses no kinematic root movement or contact proxy. The patch
is fixed on load; walking beyond its edges is not supported yet.

Future option: trim the unused Three renderer from the upstream viewer and
instead instantiate only its physics core, to reduce the downloaded JS.
