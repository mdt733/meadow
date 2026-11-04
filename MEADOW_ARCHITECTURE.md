# Meadow architecture: what earns its place

This document records the purpose of each live subsystem and the boundaries
worth preserving. The goal is a small **mental model**, not the smallest
possible character count. Meadow is a real interactive world with several
independent behaviours; deleting those behaviours to improve a diff would be
a regression.

## Single-page skeleton

```text
index.html                   standalone static-hosting redirect ONLY
meadow.html                  small markup/HUD shell; embeds & responsive page
assets/meadow.css            styles, media queries, HUD layout
assets/meadow.js             one WebGL renderer, world generation and gameplay
assets/flight-physics.js     pure player + ambient butterfly aerodynamic forces
ground-lizard.js             articulated IK, ground navigation, hunting
skybox.png                   local, full-quality sky texture
emu/emu.js                   lazy downloaded actor/runtime/WASM with real bytes
emu/policy.js                one neural inference implementation
emu/physics/src/            headless real MuJoCo, ToF/flow, terrain, controls
emu/physics/dist/           pre-built static physics runtime + MuJoCo WASM
```

There is **no build step** for the Meadow site. The scene is an ordinary
browser ES module; the aerodynamic module is a normal local import.
The ground lizard's script is imported **only after** the scene has published
its world/projection bridge, rather than relying on competing script tags.
EMU stays strictly opt-in.

## Source ownership

| Subsystem | Where | Why it stays |
| --- | --- | --- |
| Terrain and landscape | `assets/meadow.js` | Smooth shared height surface for rendered ground and real MuJoCo hfield; scenery changes its appearance |
| Sky, light and shadow | `assets/meadow.js` + `skybox.png` | One WebGL scene; preserve the high-resolution panorama and fallback sky |
| Apple tree, fairy door, rocks, swing | `assets/meadow.js` | Procedural meshes, shading, swing mechanics and physically matched butterfly landing sites |
| Butterflies | `assets/meadow.js` | Autonomous 3D wildlife, forage, canopy tours, perch/landing and social steering |
| Flight forces | `assets/flight-physics.js` | **One tested lift/drag kernel** for both playable and ambient butterflies |
| Aerial race | `assets/meadow.js` | Three real 3D race circuits, physical crossing detection, boosters and browser-local best times |
| Pilot input / chase camera | `assets/meadow.js` | Keyboard/touch/tilt and drag/pinch/scroll view without steering the actor |
| Lizard | `ground-lizard.js` | Head-led locomotion/limb IK; world-space stroked mesh and real butterfly pursuit |
| EMU | `emu/` | Actual 260M-step neural actor + real MuJoCo joints and physical contacts; no scripted gait |
| UI / saved preferences | `meadow.html`, CSS and scene | Accessible controls; retains existing localStorage keys for returning visitors |

### Deliberately retained relationships

- The scene's procedural meshes, race rings, lizard strokes and butterfly wings
  share **one WebGL context** and common GPU buffers/shaders. Breaking every
  function into a different class would increase cross-module mutable state.
- Only the flight-force algorithm is isolated as a pure module today; it can
  be tested independently of rendering or browser timing.
- Lizard behavioural state and IK remain independent of the renderer. The
  world bridge supplies height, projection, paused/piloting state and prey.
- Camera orbit owns viewing state only; EMU's sensors and neural policy
  never receive the camera pose.
- The robot's heavy physics assets are never downloaded merely because
  a visitor opens Meadow or chooses only the butterfly.
- Saved `meadow-*-v14` settings and one-time trial fallbacks are preserved
  intentionally for backwards compatibility, **not** an active old editor.

## What the cleanup found and changed

- Removed the **141 KB inline HTML/CSS/JavaScript mixture** in favour of
  a small standalone HTML shell, a stylesheet and a scene module.
- Removed an orphaned `.fly-action` CSS rule left by retired HUD work.
- Coalesced camera preference writes: once per completed drag or scroll
  gesture instead of continuously during pointer movement.
- Removed a redundant `world.butterflyCount()` scan immediately after
  obtaining the same candidate list from `world.bugs()`.
- Prevented orbiting the butterfly/robot camera from redirecting the lizard.
- Stopped rebuilding the same lizard stroke geometry every animation frame
  while the world is paused or reduced-motion is in effect.
- Extracted the common, physically motivated lift/drag routine and tuned
  flight coefficients into one small testable module. No flight shortcuts.
- Kept the existing functional procedural meshes and full-quality assets;
  there is no evidence that removing them would improve maintainability.

## Regression and deployment contract

The GitHub browser workflow exercises the ordinary website **without** a
robot download, butterfly flight and landing, actual mobile pinch controls,
camera persistence, lizard input isolation, optional EMU/WASM downloads,
one visible WebGL context, genuine servo stepping and **250 control frames**
of physical walking. The pure flight module has its own small numerical test.

A production Windows nginx server needs the static assets listed in
`DEPLOY_WINDOWS_NGINX.md`. In particular, the HTML now depends on both
`assets/meadow.js` and `assets/meadow.css`, and the scene module imports
`assets/flight-physics.js`. **Never overwrite the private `index.php`
homepage**, or existing `hangar/` applications, with the public repo.

## Known, intentional limits

- The physical EMU hfield is a fixed 31m patch, not an endless world.
- Decorative rocks and the apple tree are visual; they do not currently
  create separate MuJoCo colliders for EMU.
- The browser-visible neural actor is not the full training system.
- Large sky imagery and the real ~10.9 MB MuJoCo WASM have meaningful
  visual/physical purposes. They are not disposable source-code baggage.

If a future feature forces `assets/meadow.js` to depend on many unrelated
state systems, split that **feature with an explicit API and tests**.
Avoid repeating the old trap of copying entire viewer frameworks or
creating dozens of one-function wrapper files.
