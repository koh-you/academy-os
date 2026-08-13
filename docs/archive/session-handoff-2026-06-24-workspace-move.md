# 2026-06-24 새 Codex 세션 시작용 인수인계

## 새 세션에서 먼저 붙여넣을 프롬프트

```text
작업 폴더는 E:\academy-os 입니다.

먼저 아래 파일을 순서대로 읽어주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/session-review-2026-06-24.md
4. docs/session-handoff-2026-06-24-workspace-move.md

이전 작업 폴더 C:\Users\force\Desktop\academy-os 는 삭제되었고, 현재 기준 폴더는 E:\academy-os 입니다.
새 기능을 시작하기 전에 git status, git log -1, npm run test:production, npm run build 기준으로 상태를 확인해주세요.
작업 완료 후에는 문서 갱신, 커밋, 푸시까지 자동으로 진행해주세요.
```

## 현재 로컬 작업 경로

- 현재 기준 폴더: `E:\academy-os`
- 이전 폴더: `C:\Users\force\Desktop\academy-os`
- 이전 폴더 상태: 삭제 완료
- 새 폴더 상태: 정상 Git 저장소
- 최신 확인 커밋: `1bff2d3 Document local workspace relocation`
- Git 상태 확인 당시: `main`과 `origin/main` 동기화 완료

## 왜 이전 세션에 경고가 떴는가

기존 Codex 세션은 작업 디렉터리를 `C:\Users\force\Desktop\academy-os`로 기억하고 있었다.
해당 폴더를 `E:\academy-os`로 옮기고 기존 폴더를 삭제했기 때문에, 기존 세션에는 `현재 작업 디렉터리가 없습니다` 경고가 표시됐다.

이 문제는 코드나 GitHub 문제가 아니다. 새 Codex 세션을 만들 때 작업 폴더를 `E:\academy-os`로 선택하면 된다.

## 최근 완료 작업

- Tally 접수 QR 생성
  - PNG: `output/qr/tally-intake-qr.png`
  - JPG 사진: `output/qr/tally-intake-qr-photo.jpg`
  - 인쇄용 HTML: `output/qr/tally-intake-qr-print.html`
  - 연결 링크: `https://tally.so/r/dWNk2A`
- 태블릿 출결 결과 메시지 단순화
  - 결과 모달 제목/메시지는 `등원` 또는 `하원` 중심으로 표시
- 작업 경로 이전 기록
  - `docs/current-worklog.md` 상단에 새 기준 경로 기록 완료

## 다음 작업 우선순위

### P0. 배포 반영 및 로그인 유지 확인

- 운영 사이트: `https://academy-os-blue.vercel.app`
- 확인 순서: 선생님 로그인 후 새로고침해도 로그인 상태가 유지되는지 확인한다.
- 계속 로그인이 풀리면 배포 최신 여부와 브라우저 저장소 값을 먼저 확인한다.

### P0. 출결 태블릿 실제 운영 검수

- 출결 링크: `https://academy-os-blue.vercel.app/attendance`
- 실제 학생 전화번호 뒤 4자리로 등원/하원을 확인한다.
- 수업일지에 `등원 HH:MM`, `하원 HH:MM`이 보이는지 확인한다.
- 세 번째 이후 스캔은 안내만 뜨고 알림톡이 추가 발송되지 않아야 한다.

### P0. Supabase 저장 누락 우선 검토

- 새 기능 전에 해당 화면 데이터가 Supabase 테이블 또는 `app_state`에 저장되는지 먼저 확인한다.
- 새로고침, 재로그인, 다른 기기 접속 후 사라질 수 있는 데이터는 기능 확장보다 저장 경로 보강을 먼저 한다.

### P1. Tally 접수 운영 재확인

- 새 Tally 제출이 `student_intake_applicants`에 들어오는지 확인한다.
- 학생 추가 > Tally 접수에서 질문별 답변이 분리되어 보이는지 확인한다.
- 반 미배정 등록 후 학생 목록 `미배정` 탭에 보이는지 확인한다.

### P1. 수업일지 수동 출결 변경 확인

- 태블릿 출결 기록을 수업일지에서 변경할 때 확인 모달이 뜨는지 확인한다.
- `저장만`, `저장 후 재발송` 동작을 확인한다.

## 검증 기준

운영 흐름에 영향을 주는 코드 변경 후에는 기본적으로 아래를 실행한다.

```powershell
npm run test:production
npm run build
```

필요하면 아래 문법 검사도 같이 실행한다.

```powershell
node --check api/server.js
node --check api/routes/coreData.js
node --check api/routes/notifications.js
npm run check:encoding
```

## 중요 운영 원칙

- 커밋/푸시는 사용자가 따로 말하지 않아도 작업 완료 즉시 진행한다.
- Supabase 저장을 최우선으로 본다.
- `.env`, 비밀값, PDF, ZIP, HWP, HWPX, 대용량 자료는 Git에 올리지 않는다.
- 학원명 화면 표기는 `으뜸수학 고태영T` 원칙을 유지한다.
- `koh_you_math`는 내부 식별자, URL, 환경변수 이름에만 사용 가능하다.
