# 문제은행 등록용 장기 토큰 한 번에 발급하기.
#
#   교사 세션 토큰은 몇 시간이면 만료돼 등록·점검을 할 때마다 F12 로 다시 꺼내야 한다.
#   이 스크립트는 `bank-write` 범위(문제은행 API 밖은 전부 거부)의 90일 토큰을 발급해
#   C:\Users\PC\.academy-token.txt 에 저장한다. 90일에 한 번만 돌리면 된다.
#
# 쓰는 법 (PowerShell 에서):
#   1) Render 대시보드 → academy-os API → Environment 를 연다.
#      - `OPS_TOKEN_SIGNING_SECRET` 이 있으면 그 값을 복사한다.
#      - **없으면 `APP_SESSION_SECRET` 값을 복사한다.** 서버가 그쪽으로 넘어가기 때문이다
#        (api/server.js: OPS_TOKEN_SIGNING_SECRET || APP_SESSION_SECRET).
#   2) 이 폴더에서:  powershell -NoProfile -ExecutionPolicy Bypass -File scripts\mint-bank-token.ps1
#   3) 비밀값을 물어보면 붙여넣기 (화면에 안 보이게 입력된다)
#
# 비밀값은 이 프로세스 안에서만 쓰고 파일·로그·화면 어디에도 남기지 않는다.
# 발급된 토큰도 화면에 찍지 않고 파일로만 떨어진다.
#
# 발급 뒤 **운영 서버에 실제로 통하는지 확인**한다. 전에는 서명이 안 맞아도 「완료」라고만 찍어서,
# 한참 뒤 등록할 때 401 로 알게 됐다(2026-10-03).

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$tokenPath = Join-Path $env:USERPROFILE ".academy-token.txt"
$apiBase = if ($env:ACADEMY_API_BASE) { $env:ACADEMY_API_BASE } else { "https://koh-you-math-academy-os-api.onrender.com" }

if (-not (Test-Path (Join-Path $root "scripts\ops-mint-token.mjs"))) {
  Write-Error "저장소 루트에서 실행해 주세요 (scripts\ops-mint-token.mjs 를 찾지 못했습니다)."
}

Write-Host ""
Write-Host "Render 대시보드 → academy-os API → Environment 에서 값을 복사해 붙여넣어 주세요."
Write-Host "  OPS_TOKEN_SIGNING_SECRET 이 있으면 그 값을,"
Write-Host "  없으면 APP_SESSION_SECRET 값을 넣습니다(서버가 그쪽으로 넘어갑니다)."
Write-Host "(입력한 글자는 화면에 보이지 않습니다)"
$secure = Read-Host -AsSecureString "서명 비밀값"
$plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR(
  [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure))

# 붙여넣을 때 앞뒤에 딸려 오는 공백·줄바꿈을 지운다 — 한 글자만 달라도 서명이 안 맞는다.
if ($plain) { $plain = $plain.Trim() }
if ([string]::IsNullOrWhiteSpace($plain)) { Write-Error "값이 비어 있습니다." }

try {
  $env:OPS_TOKEN_SIGNING_SECRET = $plain
  Push-Location $root
  # --scope bank-write : /api/problem-bank/* 밖은 전부 403. --ttl 2160h : 90일.
  $token = & node scripts/ops-mint-token.mjs --scope bank-write --tenant tenant_default --ttl 2160h --label academy-problem-bank
  if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($token)) { Write-Error "토큰 발급에 실패했습니다." }
  $token = $token.Trim()

  # 운영 서버에 실제로 통하는지 확인한다. 통하지 않으면 저장하지 않는다 —
  # 안 통하는 토큰을 저장해 두면 나중에 등록할 때까지 모른다.
  Write-Host ""
  Write-Host "운영 서버에 확인하는 중…"
  $status = 0
  try {
    $response = Invoke-WebRequest -Uri "$apiBase/api/problem-bank/books" -Headers @{ Authorization = "Bearer $token" } -Method Get -UseBasicParsing -TimeoutSec 60
    $status = $response.StatusCode
  } catch {
    $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 0 }
  }

  if ($status -ne 200) {
    Write-Host ""
    Write-Host "확인 실패 — 서버가 이 토큰을 받지 않습니다 (HTTP $status). 저장하지 않았습니다." -ForegroundColor Red
    if ($status -eq 401) {
      Write-Host "  서명 비밀값이 서버의 것과 다릅니다. Render → academy-os API → Environment 에서"
      Write-Host "  OPS_TOKEN_SIGNING_SECRET 이 **있는지** 먼저 보고, 없으면 APP_SESSION_SECRET 값을 넣어 주세요."
      Write-Host "  (서버는 OPS_TOKEN_SIGNING_SECRET 이 없으면 APP_SESSION_SECRET 으로 검증합니다)"
    } elseif ($status -eq 0) {
      Write-Host "  서버에 닿지 못했습니다. 잠시 뒤 다시 시도해 주세요(Render 가 깨어나는 중일 수 있습니다)."
    }
    Write-Error "토큰을 저장하지 않았습니다."
  }

  Set-Content -Path $tokenPath -Value $token -NoNewline -Encoding ascii
  $until = (Get-Date).AddDays(90).ToString("yyyy-MM-dd")
  Write-Host ""
  Write-Host "완료 — 서버 확인까지 통과했습니다. $tokenPath 에 저장했고 $until 까지 쓸 수 있습니다."
  Write-Host "범위는 bank-write 라 문제은행 등록 말고는 아무것도 못 합니다."
} finally {
  Pop-Location -ErrorAction SilentlyContinue
  Remove-Item Env:OPS_TOKEN_SIGNING_SECRET -ErrorAction SilentlyContinue
  Remove-Variable plain, token, secure -ErrorAction SilentlyContinue
  [GC]::Collect()
}
