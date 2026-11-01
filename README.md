# Meadow 🌿

A small, living WebGL landscape: rolling grassland, a procedural apple tree and rope swing, butterflies, a wandering lizard, and a hidden aerial racing game. Built in plain JavaScript, HTML and WebGL—no framework, build system, accounts, backend or external asset downloads.

![Meadow homepage](assets/meadow-homepage.png)

## What it does

- Procedural hillside, flowers, shrubs, rocks, moss, pollen and falling leaves.
- Apple tree with fruit, fairy door, swing and butterfly perches.
- Background butterflies exploring flowers and canopy perches.
- Ground lizard with articulated movement and hunting behaviour.
- Playable butterfly flight with flapping, gliding, nectar, landing and perching.
- Hidden stone arch leading to three aerial race circuits with boosts, time penalties and local best-times.
- Mobile controls including a thumbstick, optional phone tilt steering and fullscreen support where the browser allows it.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Simple entry point for GitHub Pages and static hosting. |
| `meadow.html` | Main WebGL scene, procedural world, flight, racing and HUD. |
| `ground-lizard.js` | Standalone lizard simulation, loaded by relative path. |
| `skybox.png` | Local sky panorama, loaded by relative path. |

## Running it

### GitHub Pages

If this repository is published with GitHub Pages, just open the site URL.

### Local use

For best results, serve the folder through a small local web server instead of opening the HTML directly from a ZIP or `file://` URL.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Opening `meadow.html` directly may still work, but some browsers restrict WebGL textures from local file URLs.

## Controls

| | Keyboard / mouse | Phone / tablet |
| --- | --- | --- |
| Explore | Drag to orbit, wheel to zoom | Drag to orbit |
| Start flying | **Fly a butterfly** or `F` | **Fly a butterfly** |
| Fly | `W/S` pitch, `A/D` bank, `Space` flap | Thumbstick + **Flap**, or optional tilt |
| Perch | Approach surfaces gently | Same |
| Look around while perched | Drag | Drag |
| Leave flight | `Esc` or **Exit** | **Exit** |

On mobile, **Recenter** makes the current phone angle neutral. Motion sensing requires HTTPS or localhost and may require permission.

## Hidden race

Find the small stone arch beyond the tree. Passing through it reveals green, orange and red course choices ahead of you. Each course follows a looping 3D route over the meadow and returns to the arch. Skipping one checkpoint costs five seconds, while a 30-second gap without progress ends the attempt. Personal bests are stored only in the browser with `localStorage`.

## Notes

This public version is just the meadow itself. It does not include the private homepage system, PHP link manager, server monitors, passwords or home-server URLs.
