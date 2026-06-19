# Home Codex Setup

집 컴퓨터나 새 Codex 세션에서 `academy-os` 작업을 이어가기 위한 절차입니다.

## 1. 필요한 프로그램

- Git for Windows
- Node.js LTS 20 이상
- Chrome 또는 Edge
- Codex desktop app

## 2. 프로젝트 가져오기

집 컴퓨터 PowerShell에서 실행합니다.

```powershell
cd $HOME\Desktop
git clone https://github.com/koh-you/academy-os.git
cd academy-os
npm install
```

이미 clone한 폴더가 있다면 새로 clone하지 말고 최신 코드만 받습니다.

```powershell
cd $HOME\Desktop\academy-os
git pull origin main
npm install
```

## 3. 로컬 실행

프론트엔드만 확인할 때:

```powershell
npm run dev
```

브라우저에서 Vite가 알려주는 주소를 엽니다.
보통 아래 주소입니다.

```text
http://127.0.0.1:5173
```

백엔드를 로컬로 띄울 때:

```powershell
npm run api
```

운영 백엔드는 Render에 배포되어 있습니다.

```text
https://koh-you-math-academy-os-api.onrender.com
```

## 4. 작업 전 체크

항상 작업 전에 최신 상태로 맞춥니다.

```powershell
git pull origin main
git status
```

`git status`에 내가 모르는 변경 파일이 많으면 바로 수정하지 말고 먼저 새 세션에 알려주세요.

## 5. 작업 후 체크

```powershell
npm run build
git status
```

운영 시나리오를 돌릴 필요가 있는 변경이면 아래도 실행합니다.

```powershell
npm run test:production
```

## 6. 배포 흐름

- GitHub `main`에 push하면 Vercel 프론트엔드가 자동 배포됩니다.
- Render 백엔드는 API 코드 또는 환경변수 변경 후 Render에서 재배포가 필요할 수 있습니다.
- Supabase SQL 변경은 Supabase SQL Editor에서 직접 실행해야 합니다.

## 7. 비밀값 관리

아래 값들은 절대 Git에 올리지 않습니다.

- OpenAI API key
- Anthropic API key
- Solapi API key/secret
- Solapi template id
- Supabase service role key
- Render API key
- Vercel token

`.env`, `.env.*`, PDF, ZIP, HWP, HWPX는 `.gitignore`에 포함되어 있습니다.

## 8. PowerShell 한글 깨짐 방지

새 PowerShell에서 한글 로그가 깨질 때 먼저 실행합니다.

```powershell
chcp 65001
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()
$OutputEncoding = [System.Text.UTF8Encoding]::new()
```

그래도 일부 외부 프로그램 출력은 깨질 수 있습니다.
검수용 테스트 이름은 가능하면 영어/ASCII로 두는 편이 안전합니다.

## 9. 집 컴퓨터에서 바로 안 보일 수 있는 것

- 학원 컴퓨터 바탕화면의 PDF, 이미지, PageSnap 결과물
- 다운로드 폴더의 CSV
- 메모장에 저장한 API 키
- Git에 올라가지 않은 `tools/` 폴더

집에서도 써야 하는 자료는 추후 Supabase Storage 또는 별도 Drive에 올리는 방식으로 정리합니다.
