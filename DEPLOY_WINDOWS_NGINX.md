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
    race-course.js                        3-D figure-eight course generator
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
- `https://mdt733.ddns.net/assets/race-course.js`
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

## Test draft PR #4 without replacing your live Meadow

**Important:** PR #4 has **not** been merged into `main`. The post-merge
deployment recipe below deliberately downloads `main`, so running it now
gets the OLD race and NO robot arch. The new `assets/race-course.js` does not
exist on `main`; an attempted 12-file deployment from `main` fails during
staging and leaves the previous site alone.

To playtest the actual feature branch on your Windows/nginx server, use the
following **preview-only** PowerShell paste. It places all 12 relative-path
assets in `C:\nginx\html\meadow-preview\`, including EMU physics;
it does not change `index.php`, `meadow.html`, existing `assets/`,
or `hangar/` at the web root.

```powershell
$ErrorActionPreference = 'Stop'
$branch = 'feature/robot-arch-figure-eight-races'
$build = 'wide-eight-20261105'
$base = "https://raw.githubusercontent.com/mdt733/meadow/$branch"
$root = 'C:\nginx\html\meadow-preview'
$stage = Join-Path $env:TEMP ('meadow-pr4-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
$files = @(
  'meadow.html',
  'assets/meadow.css',
  'assets/meadow.js',
  'assets/flight-physics.js',
  'assets/race-course.js',
  'ground-lizard.js',
  'skybox.png',
  'emu/champion.emupolicy',
  'emu/emu.js',
  'emu/policy.js',
  'emu/physics/dist/emu-physics.js',
  'emu/physics/dist/assets/mujoco-CGsuVDfV.wasm'
)

# Always stage the complete feature branch; nothing live changes on error.
foreach ($rel in $files) {
  $dest = Join-Path $stage $rel
  New-Item -ItemType Directory -Force (Split-Path $dest -Parent) | Out-Null
  Invoke-WebRequest -UseBasicParsing -Uri "$base/$rel" -OutFile $dest
}
$html = Get-Content -Raw (Join-Path $stage 'meadow.html')
$scene = Get-Content -Raw (Join-Path $stage 'assets/meadow.js')
$course = Get-Content -Raw (Join-Path $stage 'assets/race-course.js')
$physics = Get-Content -Raw (Join-Path $stage 'assets/flight-physics.js')
if (-not $html.Contains("meadow-build`" content=`"$build")) {
  throw 'Wrong Meadow HTML version: refusing to install old scene.'
}
if (-not $scene.Contains("window.__meadowBuild='$build'") -or
    -not $scene.Contains('buildRobotArch()') -or
    -not $scene.Contains('makeFigureEightCourse') -or
    -not $course.Contains('export function raceFigurePoint') -or
    -not $physics.Contains('export const RACE_FLY')) {
  throw 'Missing robot arch, figure eight or race flight physics: refusing install.'
}
$expected = @{
  'emu/champion.emupolicy' = 886002
  'emu/physics/dist/assets/mujoco-CGsuVDfV.wasm' = 10927842
}
$loader = Get-Content -Raw (Join-Path $stage 'emu/emu.js')
$runtimeMatch = [regex]::Match($loader, "name:'runtime',path:'[^']+',bytes:(\d+)")
if (-not $runtimeMatch.Success) { throw 'Runtime size manifest missing' }
$expected['emu/physics/dist/emu-physics.js'] = [int]$runtimeMatch.Groups[1].Value
foreach ($rel in $expected.Keys) {
  if ((Get-Item -LiteralPath (Join-Path $stage $rel)).Length -ne $expected[$rel]) {
    throw "Download incomplete: $rel"
  }
}

# Only replace the isolated preview folder after all files are verified.
foreach ($rel in $files) {
  $target = Join-Path $root $rel
  New-Item -ItemType Directory -Force (Split-Path $target -Parent) | Out-Null
  Copy-Item -LiteralPath (Join-Path $stage $rel) -Destination $target -Force
}
Write-Host "Preview build $build installed from $branch (not main)."
Write-Host 'Open https://mdt733.ddns.net/meadow-preview/meadow.html?emu-arch-flight-demo=forward'
Write-Host 'Or https://mdt733.ddns.net/meadow-preview/meadow.html?race-demo=red'
```

Use these **standalone preview links** rather than your PHP homepage:

- **EMU arch:** `https://mdt733.ddns.net/meadow-preview/meadow.html?emu-arch-flight-demo=forward`
- **Red figure eight:** `https://mdt733.ddns.net/meadow-preview/meadow.html?race-demo=red`
- **Normal Meadow:** `https://mdt733.ddns.net/meadow-preview/meadow.html`

The first fly-through should display **You found EMU!**; Red should say
**Red figure eight**. In the browser developer console,
`window.__meadowBuild` must print `wide-eight-20261105`. If it is
`undefined`, you are still loading the old scene. The build stamp and
versioned module/CSS URLs prevent a cached older JS module from silently
surviving a new HTML fetch. The version query itself is part of the
test links; no homepage modification is required.

### Local WSL playtest (no Windows deployment)

```bash
git clone --branch feature/robot-arch-figure-eight-races --single-branch \
  https://github.com/mdt733/meadow.git ~/meadow-pr4-preview
cd ~/meadow-pr4-preview
git log -1 --format='%h %s'
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000/meadow.html?emu-arch-flight-demo=forward`
or `http://localhost:8000/meadow.html?race-demo=red`. For an existing
checkout, use `git fetch origin` and explicitly switch to the feature
branch; `git pull` while on `main` **will not** bring the draft in.

## Post-merge production deployment (run on the Windows nginx server)

**Only run this production recipe AFTER PR #4 is merged into `main`.**
For draft testing use the separate preview recipe above. This production
recipe intentionally reads `main`, which still holds the old scene until
merge. The figure-eight flight code is introduced by draft PR #4. The existing
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
  'assets/race-course.js',
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

# Back up, then replace ONLY these twelve files. The PHP homepage is untouched.
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
  The new robot arch and race update remain **draft PR #4**, awaiting approval.
- Run the repository's browser checks (optional downloads, butterfly-only
  zero robot downloads, real policy/MuJoCo controls, rock entry, camera).
- Make sure the committed `emu/physics/dist/` bundle and WASM are present:
  the feature-branch build workflow creates these **in Git**, not on the server.
- Review the public model exposure and front-page integration.
- The release should update the public top-level README. Do **not** publish
  private PHP homepage files from the public Meadow repo.
- Verify the stylesheet and all three JS modules load from `assets/` (200 responses), and
  that the lizard and ordinary meadow render before any robot download.
- Smoke-test live `meadow.html`, then click **Walk the robot** and verify the
  ~12 MB progress bar and walking. Verify existing homepage and `/hangar/`
  links still work. A hard browser refresh may be necessary after deployment.

The feature-only build workflow intentionally must not start pushing generated
files automatically to the protected `main` branch. Rebuild on a feature
branch, review the bundle and asset sizes, and merge the validated outputs.
