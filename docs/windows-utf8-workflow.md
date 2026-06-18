# Windows UTF-8 Workflow

Academy OS uses Korean labels in UI, documentation, and notification text.
Windows PowerShell can display Korean incorrectly when the terminal session is not using UTF-8.

## Recommended Rule

- Keep automated test names and machine-readable logs in ASCII English.
- Keep UI text, notification text, and human-facing docs in Korean.
- Before running Korean-heavy scripts in PowerShell, run:

```powershell
.\scripts\use-utf8.ps1
```

Then run commands in the same terminal window:

```powershell
npm run build
npm run test:production
npm run check:encoding
```

## Encoding Check

`npm run check:encoding` scans project text files for common mojibake markers.
It is not a full proofreader, but it catches the common broken Korean patterns seen in PowerShell logs and script files.

## Why Not Change the Whole Computer?

Changing global Windows language or code-page settings can affect unrelated programs.
The project-local script is safer: it only changes the current PowerShell session.
