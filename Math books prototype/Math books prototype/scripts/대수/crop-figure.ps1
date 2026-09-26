<#
.SYNOPSIS
  페이지 PNG에서 사각 영역을 크롭하여 별도 PNG로 저장.

.PARAMETER Page
  원본 페이지 PNG 경로

.PARAMETER X
  좌상단 X (픽셀)

.PARAMETER Y
  좌상단 Y (픽셀)

.PARAMETER W
  크롭 폭

.PARAMETER H
  크롭 높이

.PARAMETER Out
  출력 PNG 경로

.EXAMPLE
  .\scripts\crop-figure.ps1 -Page "추출\페이지\book\p045.png" -X 120 -Y 800 -W 640 -H 480 -Out "추출\그림\01\fig-삼각형.png"
#>
param(
  [Parameter(Mandatory=$true)][string]$Page,
  [Parameter(Mandatory=$true)][int]$X,
  [Parameter(Mandatory=$true)][int]$Y,
  [Parameter(Mandatory=$true)][int]$W,
  [Parameter(Mandatory=$true)][int]$H,
  [Parameter(Mandatory=$true)][string]$Out
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path $Page)) {
  Write-Error "Page image not found: $Page"
}

$outDir = Split-Path -Parent $Out
if ($outDir -and -not (Test-Path $outDir)) {
  New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile((Resolve-Path $Page).Path)
try {
  if ($X -lt 0 -or $Y -lt 0 -or ($X + $W) -gt $src.Width -or ($Y + $H) -gt $src.Height) {
    Write-Error "Crop region out of bounds: src=$($src.Width)x$($src.Height), crop=$W x$H at ($X,$Y)"
  }

  $rect = New-Object System.Drawing.Rectangle($X, $Y, $W, $H)
  $bmp = New-Object System.Drawing.Bitmap($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  try {
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $W, $H)), $rect,
                 [System.Drawing.GraphicsUnit]::Pixel)
    $absOut = [IO.Path]::GetFullPath((Join-Path (Get-Location) $Out))
    $bmp.Save($absOut, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "Cropped $W x$H from ($X,$Y) → $absOut"
  } finally {
    $g.Dispose()
    $bmp.Dispose()
  }
} finally {
  $src.Dispose()
}
