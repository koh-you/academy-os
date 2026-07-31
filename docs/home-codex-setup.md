# Academy OS 개발환경 복원

## 표준 위치와 버전

- 프로젝트: `C:\Dev\academy-os`
- Node.js: 24.x (`.nvmrc`와 `package.json` 기준)
- Git, VS Code, Chrome 또는 Edge, Codex desktop app

바탕화면·문서 폴더에 별도 clone을 만들지 않는다. 다른 컴퓨터에서도 같은 표준 위치를 권장한다.

## 처음 가져오기

```powershell
New-Item -ItemType Directory -Force C:\Dev
Set-Location C:\Dev
git clone https://github.com/koh-you/academy-os.git
Set-Location C:\Dev\academy-os
npm ci
npm run doctor
```

이미 clone되어 있으면 해당 폴더에서 아래만 실행한다.

```powershell
git pull --ff-only origin main
npm ci
npm run doctor
```

## 안전한 로컬 실행

VS Code에서 `실행 및 디버그` → `Academy OS: 안전한 로컬 실행` → `F5`를 누른다. 가상 API와 가상 데이터만 사용하고 운영 Supabase·Storage·Solapi에는 연결하지 않는다. 로그인은 아무 테스트 값을 입력해도 된다.

터미널에서는:

```powershell
npm run dev:safe
```

운영 환경변수가 필요한 실제 로컬 API 진단은 별도 작업이다. `.env` 값이나 API key를 화면·로그·Git에 출력하지 않는다.

## 작업 전후

```powershell
npm run doctor
git status --short
npm run check:fast
```

운영 흐름을 바꾸면 `npm run test:production`과 관련 브라우저 smoke test도 실행한다. main push 후 GitHub Actions 결과를 확인한다.

## 비밀값과 비Git 자료

- `.env`, API key, PDF/HWP/HWPX/ZIP, 운영 export는 Git에 올리지 않는다.
- 코드와 문맥 문서는 GitHub가 동기화 원천이다.
- Git에 둘 수 없는 개인 자료만 Google Drive 또는 별도 암호화 백업을 사용한다.
- USB는 필수 동기화 원천이 아니라 재해 복구용 선택 백업이다.

## 중복 폴더

`npm run doctor`가 canonical 경로 밖의 clone을 알리면 용도를 확인한다. 현재 `C:\Users\PC\Documents\academy os`는 오전 9시 자동 작업 전용이라 유지하며 사람이 수정하지 않는다. 그 외 accidental clone은 clean·ahead/behind를 확인한 뒤에만 `C:\Dev\_archive`로 이동한다. 강제 삭제하지 않는다.
