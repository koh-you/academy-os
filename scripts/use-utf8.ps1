$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[Console]::InputEncoding = $utf8NoBom
[Console]::OutputEncoding = $utf8NoBom
$OutputEncoding = $utf8NoBom
chcp 65001 > $null

Write-Host "PowerShell encoding is set to UTF-8 for this session."
Write-Host "Run project commands in this same terminal window."
