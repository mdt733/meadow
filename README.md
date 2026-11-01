# Meadow 🌿

A small, living WebGL landscape: rolling grassland, an apple tree and rope swing, butterflies, a wandering lizard, and a hidden aerial racing game. Built in plain JavaScript, HTML and WebGL—no framework, build system, accounts, backend or external asset downloads.

**Play:** open `index.html` on GitHub Pages. To run a downloaded copy, serve this folder locally with a simple static web server (instructions below).

## What's here

- Procedural hillside, trees, shrubs, flowers, rocks, moss, falling leaves and windblown pollen.
- An apple tree with foliage, fruit, a swinging seat and places for butterflies to perch.
- Background butterflies exploring flowers and branches; a ground lizard with articulated legs and hunting behaviour.
- Playable butterfly flight with flapping, gliding, nectar, landing, perching, and camera orbit while resting.
- Hidden stone arch leading to three aerial courses with 3D checkpoints, pollen boosts, time penalties and locally saved personal bests.
- Mobile thumbstick or optional phone tilt steering, with landscape/fullscreen controls where the browser supports them.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Simple entry point, redirects to `meadow.html` while preserving query parameters. |
| `meadow.html` | WebGL renderer, procedural world, flight, perching, racing and HUD. |
| `ground-lizard.js` | Separate articulated lizard simulation, loaded by relative path. |
| `skybox.png` | Bundled local sky panorama, loaded by relative path. |

## The skybox

`skybox.png` is a local panorama loaded with a relative URL. A landscape PNG with roughly 2:1 aspect ratio works best. If the file is unavailable, the renderer uses a procedural atmospheric sky instead. No home-server URL is embedded.

Only distribute assets you have the rights to share.

## Controls

| | Keyboard/mouse | Phone/tablet |
| --- | --- | --- |
| Explore | Drag to orbit, wheel to zoom | Drag to orbit |
| Start flying | **Fly a butterfly** (or `F`) | **Fly a butterfly** |
| Fly | `W/S` pitch, `A/D` bank, `Space` flap | Analogue thumbstick and **Flap**, or optional tilt |
| Perch | Approach surfaces gently | Same |
| Look around while perched | Drag | Drag |
| Leave flight | `Esc` or **Exit** | **Exit** |

On mobile, **Recenter** makes the current phone angle neutral. Motion sensing requires HTTPS or localhost and may require permission. Browser fullscreen and orientation locking vary, especially on iPhone; touch steering is always available as a fallback.

### The hidden race

Find the small stone arch beyond the tree. Passing through it reveals green, orange and red course choices ahead of you. Courses follow looping 3D routes over the meadow and return to the arch. Skipping one checkpoint costs five seconds, while a 30-second gap without progress ends the attempt. Personal bests are stored only in the browser, using `localStorage`.

## Run locally

Download or clone the repository, then start a small static HTTP server from its folder:

```sh
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. On macOS or Linux, the command may be `python3 -m http.server 8000` instead. A Python installation is only needed for this local server, not for the meadow itself. You can also use any other static file server.

The files use relative paths, so the same directory works on GitHub Pages or any static web host. Double-clicking `index.html` directly from a `file://` URL may fail to load image textures in some browsers because of local-file restrictions.

## Host it on GitHub Pages

In the repository, open **Settings → Pages → Deploy from a branch** and select **main / (root)**. The resulting URL will look like `https://YOUR-ACCOUNT.github.io/meadow/`.

## Embed elsewhere

You can reuse the meadow as a same-origin iframe from another site:

```html
<iframe src="meadow.html?embed=1" title="Interactive meadow"
  allow="fullscreen; accelerometer; gyroscope" allowfullscreen></iframe>
```

The `?pilot=1` query parameter starts directly in flight mode. The existing homepage can send the `meadow-flight-start` message to start flight in the iframe. The public release contains **no** PHP homepage, link database, passwords, server monitors, email addresses or home-server URLs.

## Development and distribution

This project deliberately keeps the runtime small: plain HTML, JavaScript, WebGL and a single local image. No build step, framework or external JavaScript packages are needed. The interactive flight, racing and mobile motion controls should still be tested in a real browser, particularly on phones.

A public repository makes the files downloadable but does **not** automatically grant a software reuse licence; none has been chosen. You can add one later if you want to permit reuse under specific terms.
