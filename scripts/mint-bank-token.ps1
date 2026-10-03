# 문제은행 등록용 장기 토큰 한 번에 발급하기.
#
#   교사 세션 토큰은 몇 시간이면 만료돼 등록·점검을 할 때마다 F12 로 다시 꺼내야 한다.
#   이 스크립트는 `bank-write` 범위(문제은행 API 밖은 전부 거부)의 90일 토큰을 발급해
#   C:\Users\PC\.academy-token.txt 에 저장한다. 90일에 한 번만 돌리면 된다.
#
# 쓰는 법 (PowerShell 에서):
#   1) Render 대시보드 → academy-os API → Environment → OPS_TOKEN_SIGNING_SECRET 값 복사
#   2) 이 폴더에서:  .\scripts\mint-bank-token.ps1
#   3) 비밀값을 물어보면 붙여넣기 (화면에 안 보이게 입력된다)
#
# 비밀값은 이 프로세스 안에서만 쓰고 파일·로그·화면 어디에도 남기지 않는다.
# 발급된 토큰도 화면에 찍지 않고 파일로만 떨어진다.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$tokenPath = Join-Path $env:USERPROFILE ".academy-token.txt"

if (-not (Test-Path (Join-Path $root "scripts\ops-mint-token.mjs"))) {
  Write-Error "저장소 루트에서 실행해 주세요 (scripts\ops-mint-token.mjs 를 찾지 못했습니다)."
}

Write-Host ""
Write-Host "Render 대시보드 → academy-os API → Environment → OPS_TOKEN_SIGNING_SECRET 값을 붙여넣어 주세요."
Write-Host "(입력한 글자는 화면에 보이지 않습니다)"
$secure = Read-Host -AsSecureString "OPS_TOKEN_SIGNING_SECRET"
$plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure))

if ([string]::IsNullOrWhiteSpace($plain)) { Write-Error "값이 비어 있습니다." }

try {
  $env:OPS_TOKEN_SIGNING_SECRET = $plain
  Push-Location $root
  # --scope bank-write : /api/problem-bank/* 밖은 전부 403. --ttl 2160h : 90일.
  $token = & node scripts/ops-mint-token.mjs --scope bank-write --tenant tenant_default --ttl 2160h --label academy-problem-bank
  if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($token)) { Write-Error "토큰 발급에 실패했습니다." }
  Set-Content -Path $tokenPath -Value $token.Trim() -NoNewline -Encoding ascii
  $until = (Get-Date).AddDays(90).ToString("yyyy-MM-dd")
  Write-Host ""
  Write-Host "완료 — $tokenPath 에 저장했습니다. $until 까지 쓸 수 있습니다."
  Write-Host "범위는 bank-write 라 문제은행 등록 말고는 아무것도 못 합니다."
} finally {
  Pop-Location -ErrorAction SilentlyContinue
  Remove-Item Env:OPS_TOKEN_SIGNING_SECRET -ErrorAction SilentlyContinue
  Remove-Variable plain, token, secure -ErrorAction SilentlyContinue
  [GC]::Collect()
}
