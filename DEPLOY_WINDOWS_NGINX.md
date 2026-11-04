# Deploy Meadow + optional EMU to the existing Windows nginx server

This repository's public `index.html` is **only** for standalone hosting / GitHub Pages.
The existing private live homepage is `C:\nginx\html\index.php`. **Do not deploy
`index.html` to the live web root, and do not replace `index.php`, PHP link-manager
files, `private/`, or `hangar/`.**

Deployment is just static files. MuJoCo 3.17 WASM and the 260M neural policy run
in the **visitor's browser**, not on the Windows server. No GPU, JAX, Node,
npm, Python daemon or running EMU process is required to host the site.

## Live files and URLs

All files below retain their **exact relative paths**:

```text
C:\nginx\html\
  index.php                               EXISTING private homepage; leave intact
  meadow.html                             Small markup shell
  assets\
    meadow.css                             Scene UI and responsive styles
    meadow.js                              WebGL scene ES module and controllers
    flight-physics.js                     Shared butterfly lift/drag model
  ground-lizard.js                        Script referenced by meadow.html
  skybox.png                              Image referenced by meadow.html
  emu\
    champion.emupolicy                    886,002 bytes; public actor weights
    emu.js                                 On-demand loader
    policy.js                              Neural inference
    physics\dist\
      emu-physics.js                      prebuilt JS (size synced automatically)
      assets\mujoco-CGsuVDfV.wasm        10,927,842 bytes; pre-built WASM
  hangar\                                 Existing other apps; leave intact
```

After deployment:
- `https://mdt733.ddns.net/meadow.html`
- `https://mdt733.ddns.net/assets/meadow.js`
- `https://mdt733.ddns.net/assets/flight-physics.js`
- `https://mdt733.ddns.net/assets/meadow.css`
- `https://mdt733.ddns.net/emu/champion.emupolicy`
- `https://mdt733.ddns.net/emu/physics/dist/emu-physics.js`
- `https://mdt733.ddns.net/emu/physics/dist/assets/mujoco-CGsuVDfV.wasm`

The `.emupolicy` file is intended to be publicly downloadable: it is already
included in this public GitHub repository. It is an inference actor, not a
training checkpoint, credential or private configuration.

The existing PHP homepage should continue embedding or linking to
`/meadow.html`. Relative paths in that page resolve `./emu/emu.js` and the
other files under the same root. Visitors who never select **Walk the robot**
or **Wake EMU** don't fetch the heavy actor and WASM files.

## Safe PowerShell deployment (run on the Windows nginx server)

**Merge and approve the relevant cleanup PR before deploying from `main`.**
The new static asset paths are introduced by draft PR #3. The existing
server's private PHP homepage must not be overwritten.

The script below requires PowerShell and outbound HTTPS but **not Git** on
the server. It downloads a specific set of committed static files to a staging
directory, validates the three heavy binary sizes, backs up any files that
will be replaced to a directory OUTSIDE the public website, then copies only
those files into the existing web root.

```powershell
$ErrorActionPreference = 'Stop'

$branch = 'main'
$base = "https://raw.githubusercontent.com/mdt733/meadow/$branch"
$root = 'C:\nginx\html'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$stage = Join-Path $env:TEMP "meadow-stage-$stamp"
$backup = Join-Path 'C:\nginx\meadow-backups' $stamp

$files = @(
  'meadow.html',
  'assets/meadow.css',
  'assets/meadow.js',
  'assets/flight-physics.js',
  'ground-lizard.js',
  'skybox.png',
  'emu/champion.emupolicy',
  'emu/emu.js',
  'emu/policy.js',
  'emu/physics/dist/emu-physics.js',
  'emu/physics/dist/assets/mujoco-CGsuVDfV.wasm'
)

# Download EVERYTHING before changing any live files.
foreach ($rel in $files) {
  $dest = Join-Path $stage $rel
  New-Item -ItemType Directory -Force -Path (Split-Path $dest -Parent) | Out-Null
  Invoke-WebRequest -Uri "$base/$rel" -OutFile $dest
}

$expected = @{
  'emu/champion.emupolicy' = 886002

  'emu/physics/dist/assets/mujoco-CGsuVDfV.wasm' = 10927842
}
# The build workflow updates this size automatically when source changes.
$loader = Get-Content -Raw (Join-Path $stage 'emu/emu.js')
$runtimeMatch = [regex]::Match($loader, "name:'runtime',path:'[^']+',bytes:(\d+)")
if (-not $runtimeMatch.Success) { throw 'Runtime byte manifest missing from emu.js' }
$expected['emu/physics/dist/emu-physics.js'] = [int]$runtimeMatch.Groups[1].Value

foreach ($rel in $expected.Keys) {
  $actual = (Get-Item -LiteralPath (Join-Path $stage $rel)).Length
  if ($actual -ne $expected[$rel]) {
    throw "Refusing deployment: $rel is $actual bytes (expected $($expected[$rel]))."
  }
}

# Back up, then replace ONLY these eleven files. The PHP homepage is untouched.
foreach ($rel in $files) {
  $live = Join-Path $root $rel
  if (Test-Path -LiteralPath $live) {
    $saved = Join-Path $backup $rel
    New-Item -ItemType Directory -Force -Path (Split-Path $saved -Parent) | Out-Null
    Copy-Item -LiteralPath $live -Destination $saved -Force
  }
  New-Item -ItemType Directory -Force -Path (Split-Path $live -Parent) | Out-Null
  Copy-Item -LiteralPath (Join-Path $stage $rel) -Destination $live -Force
}
Write-Host "Meadow deployed from $branch. Previous files backed up in $backup"
Write-Host 'Test https://mdt733.ddns.net/meadow.html'
```

A plain nginx static-file deployment needs **no nginx restart**, assuming its
current static-file routes are functioning. An unknown `.emupolicy` MIME type
can be sent as `application/octet-stream`; JavaScript reads the response
bytes. WebAssembly is also fetched as bytes and passed into the MuJoCo loader,
so the exact MIME type is not required for streaming compilation.

## Before merging / publishing

- The original EMU PR #1 and headless cleanup PR #2 are already merged.
  This scene architecture cleanup remains **draft PR #3**, awaiting approval.
- Run the repository's browser checks (optional downloads, butterfly-only
  zero robot downloads, real policy/MuJoCo controls, rock entry, camera).
- Make sure the committed `emu/physics/dist/` bundle and WASM are present:
  the feature-branch build workflow creates these **in Git**, not on the server.
- Review the public model exposure and front-page integration.
- The release should update the public top-level README. Do **not** publish
  private PHP homepage files from the public Meadow repo.
- Verify the stylesheet and both JS modules load from `assets/` (200 responses), and
  that the lizard and ordinary meadow render before any robot download.
- Smoke-test live `meadow.html`, then click **Walk the robot** and verify the
  ~12 MB progress bar and walking. Verify existing homepage and `/hangar/`
  links still work. A hard browser refresh may be necessary after deployment.

The feature-only build workflow intentionally must not start pushing generated
files automatically to the protected `main` branch. Rebuild on a feature
branch, review the bundle and asset sizes, and merge the validated outputs.
