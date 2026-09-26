<#
.SYNOPSIS
  공통수학1 교재를 xelatex으로 컴파일.

.PARAMETER Chapter
  단일 챕터만 빌드 (예: -Chapter 01). 생략 시 main.tex 전체.

.PARAMETER Solutions
  해설지 빌드 (showanswers true)

.PARAMETER Draft
  시안 모드 — 1회 컴파일만, 빠르게.

.EXAMPLE
  .\scripts\build-pdf.ps1
  .\scripts\build-pdf.ps1 -Chapter 01
  .\scripts\build-pdf.ps1 -Solutions
#>
param(
  [string]$Chapter,
  [switch]$Solutions,
  [switch]$Draft
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$design = Join-Path $root '디자인'
$out = Join-Path $root '산출물'

if (-not (Test-Path $out)) {
  New-Item -ItemType Directory -Path $out -Force | Out-Null
}

# 마스터 .tex 결정
if ($Chapter) {
  # 단일 챕터 stub
  $chapterDir = Join-Path $root "작업물\$Chapter*"
  $stub = Get-ChildItem -Path $chapterDir -Filter "*-stub.tex" -ErrorAction SilentlyContinue | Select-Object -First 1
  if (-not $stub) {
    Write-Error "Chapter stub not found for '$Chapter'. Expected 작업물\$Chapter*\*-stub.tex"
  }
  $master = $stub.FullName
} elseif ($Solutions) {
  $master = Join-Path $design 'solutions.tex'
  if (-not (Test-Path $master)) {
    Write-Error "solutions.tex not found. Create 디자인\solutions.tex first."
  }
} else {
  $master = Join-Path $design 'main.tex'
}

Write-Host "Building: $master"
Write-Host "Output: $out"

$xelatexArgs = @(
  '-interaction=nonstopmode',
  "-output-directory=$out",
  $master
)

# 1차 컴파일
& xelatex @xelatexArgs
$exit1 = $LASTEXITCODE

# Draft 모드면 1회만
if (-not $Draft) {
  # 2차 컴파일 (목차/참조)
  & xelatex @xelatexArgs
  $exit1 = $LASTEXITCODE
}

# 결과 PDF 경로
$baseName = [IO.Path]::GetFileNameWithoutExtension($master)
$pdfPath = Join-Path $out "$baseName.pdf"

if (Test-Path $pdfPath) {
  $info = Get-Item $pdfPath
  Write-Host ""
  Write-Host "BUILD OK"
  Write-Host "  PDF: $pdfPath"
  Write-Host "  Size: $([Math]::Round($info.Length/1KB,1)) KB"
  Write-Host "  Modified: $($info.LastWriteTime)"
} else {
  Write-Warning "PDF not produced. Check $out\$baseName.log"
  exit 1
}

if ($exit1 -ne 0) {
  Write-Warning "xelatex exit code: $exit1 (PDF still may be usable; check .log)"
}
