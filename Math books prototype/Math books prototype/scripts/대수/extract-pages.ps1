<#
.SYNOPSIS
  마플시너지 PDF 참고자료에서 페이지 범위를 PNG로 추출.

.DESCRIPTION
  pdftoppm을 300 DPI로 호출하여 추출/페이지/{Source}/p{NNN}.png 생성.

.PARAMETER Source
  book | answer | mock — 참고자료 PDF 선택자.

.PARAMETER First
  추출 시작 페이지 (1-based, 1 이상)

.PARAMETER Last
  추출 끝 페이지 (포함)

.PARAMETER DPI
  해상도 (기본 300)

.EXAMPLE
  .\scripts\extract-pages.ps1 -Source book -First 34 -Last 58
#>
param(
  [Parameter(Mandatory=$true)][ValidateSet('book','answer','mock')]
  [string]$Source,
  [Parameter(Mandatory=$true)][int]$First,
  [Parameter(Mandatory=$true)][int]$Last,
  [int]$DPI = 300
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$refDir = Join-Path $root '참고자료\마플시너지 공통수학1 2025'

$pdfMap = @{
  'book'   = '마플시너지 공통수학1 2025.pdf'
  'answer' = '마플시너지 공통수학1 2025 답.pdf'
  'mock'   = '마플시너지 공통수학1 모고.pdf'
}

$pdfPath = Join-Path $refDir $pdfMap[$Source]
if (-not (Test-Path $pdfPath)) {
  Write-Error "PDF not found: $pdfPath"
}

$outDir = Join-Path $root "추출\페이지\$Source"
if (-not (Test-Path $outDir)) {
  New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$outPrefix = Join-Path $outDir 'p'

Write-Host "Extracting pages $First..$Last from $Source at $DPI DPI"
Write-Host "  Source: $pdfPath"
Write-Host "  Output: $outDir\p{NNN}.png"

& pdftoppm -png -r $DPI -f $First -l $Last $pdfPath $outPrefix

if ($LASTEXITCODE -ne 0) {
  Write-Error "pdftoppm failed with exit code $LASTEXITCODE"
}

# pdftoppm은 p-NNN.png (대시) 형식으로 저장 → p{NNN}.png 로 통일
Get-ChildItem -Path $outDir -Filter 'p-*.png' | ForEach-Object {
  $newName = $_.Name -replace '^p-', 'p'
  Rename-Item -Path $_.FullName -NewName $newName -Force
}

$count = (Get-ChildItem -Path $outDir -Filter 'p*.png' |
  Where-Object { $_.Name -match "^p0*[$First-$Last]" -or $_.Name -match '^p\d{3}\.png$' }).Count

Write-Host "Done. $count files in $outDir"
