# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 이 파일을 먼저 읽고, 이어서 `AGENTS.md`, `docs/current-worklog.md`, `git status --short`, `git log -1 --oneline`을 확인한 뒤 이어가세요.

## 바로 붙여넣을 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

오늘까지의 핵심 작업은 출결/수업일지 알림톡 안정화입니다.

최신 커밋은 `c048e58 Align attendance notification layout`입니다.
직전 핵심 커밋은 다음과 같습니다.
- `fdbf61d Simplify attendance kiosk confirmation`
- `8442bfa Use latest lesson journal for scheduled notifications`
- `d60d524 Fix zero-student lesson notification loop`
- `ef5064e Add attendance kiosk confirmation preview`

현재 결론:
1. 출결알림톡은 기존 알림관리 전체와 분리된 저장-우선 흐름으로 재구현했습니다.
2. 키오스크/수동 출결 모두 `lesson_student_records` 저장 성공 후에만 출결 알림톡을 발송합니다.
3. 출결 확인 모달은 학생/수업/시간만 보여주고 `확인` 하나만 누릅니다. 저장 성공 후 결과 모달 없이 바로 키패드로 돌아갑니다.
4. 출결 알림톡 본문은 등원/지각/하원 모두 같은 구조입니다.
   - `🏫 출결 : 등원/지각/하원`
   - `📘 수업 : 수업명`
   - `🕒 시간 : HH:MM`
5. 수업일지 예약 알림톡은 예약 당시 payload snapshot을 원본으로 보지 않습니다. 발송 직전 서버가 최신 `lessons`, `lesson_student_records`, `students`, `homeworks`, `makeup_tasks`를 다시 읽어 문구를 재구성합니다.
6. 수업에서 학생을 삭제하거나 수업을 삭제하면 해당 수업의 미발송 예약 job은 취소됩니다.
7. 0명 수업 선택 시 예약 갱신 loop로 웹앱이 먹통이 되던 문제를 막았습니다.

중요한 운영 판단:
- Render Free web service는 15분 무트래픽이면 sleep 될 수 있습니다.
- 그래서 서버 내부 interval만으로는 정확히 22:30 발송을 보장하기 어렵습니다.
- 이번 구현은 “늦게 발송되더라도 마지막 저장 수업일지 원본으로 발송”되게 한 것입니다.
- 정확한 22:30 발송 보장을 원하면 Render Cron Job 또는 외부 scheduler 전환이 필요합니다. Render Cron Job은 공식 문서 기준 cron job service당 최소 월 $1 과금이 있습니다.

다음 세션의 첫 작업은 코딩보다 운영 검수입니다.

우선순위 1. 배포/운영 검수
1. Vercel/Render에 최신 커밋 `c048e58`이 반영됐는지 확인합니다.
2. `/attendance`에서 테스트 학생으로 등원/하원을 각각 찍습니다.
3. 확인 모달에 중앙 상태와 `학생`, `수업`, `시간`, `확인` 버튼만 보이는지 확인합니다.
4. 카카오 알림톡 본문이 등원/하원 모두 `출결`, `수업`, `시간` 순서인지 확인합니다.
5. 수업일지 새로고침 후 실제 등원/하원 시간이 표시되는지 확인합니다.

우선순위 2. 예약 수업일지 알림톡 검수
1. 테스트 수업에 학생 2명을 넣고 기본 예약을 만듭니다.
2. 한 학생을 수업에서 삭제하고 저장합니다.
3. 남은 학생의 수업일지 내용을 수정/저장합니다.
4. 알림관리 또는 `/api/notification-jobs?includeResult=true`에서 삭제 학생의 미발송 job이 취소됐는지 확인합니다.
5. 발송 시 남은 학생에게 마지막 저장 수업일지 기준 문구만 나가는지 확인합니다.

우선순위 3. 예약발송기 결정
코딩 전에 다음을 먼저 결정합니다.
- 22:30 정시 발송이 필수인지
- 월 $1 Render Cron Job을 사용할지
- 아니면 GitHub Actions cron / Supabase scheduled function / 외부 uptime ping 중 어떤 scheduler를 쓸지
- scheduler가 호출할 API는 기존 `/api/notification-jobs/dispatch-due` 흐름을 유지할지

그 다음 원래 큰 방향인 시험분석 Canva 중심 MVP로 돌아갑니다.

Canva 중심 MVP 현재 결론:
- Canva = 최종 카드뉴스 디자인 편집기
- 웹앱 = 시험분석 원본/AI 초안/선생님 저장본/Canva 재료 export/블로그·인스타 문구 관리
- JS/CSS 렌더러 = 최종 제작기가 아니라 카드 구조 검수, Canva 재료 미리보기, 문구 길이 확인, 차트/이미지 재료 생성, 장기 Puppeteer PNG 자동화 후보

반드시 지킬 원칙:
`AI 초안 -> 선생님 검수/수정 -> 선생님 저장본 원본화`

Canva에서 고친 최종 문구가 있으면 웹앱 선생님 저장본에도 다시 반영해야 합니다.

블로그 이모티콘/형광펜 규칙은 카드뉴스 디자인용이 아니라 블로그 글 작성용입니다.
- 인사말 끝: 😊
- 주요문항 시작: 📌
- 핵심 포인트/자주 틀리는 지점: ✅
- CTA/신청 안내: ⬇️⬇️
- 위치: 📍
- 전화번호: ☎
- 형광펜/강조/줄바꿈은 모바일 블로그 가독성 기준

작업 완료 시에는 반드시 `사람 검토 절차`와 `AI 자기검토`를 포함하고, 가능한 변경은 검증 후 커밋/푸시까지 진행하세요.
```

## 최신 구현/검증 상태

- 최신 커밋: `c048e58 Align attendance notification layout`
- 직전 커밋:
  - `fdbf61d Simplify attendance kiosk confirmation`
  - `8442bfa Use latest lesson journal for scheduled notifications`
  - `d60d524 Fix zero-student lesson notification loop`
  - `ef5064e Add attendance kiosk confirmation preview`
- 마지막 검증:
  - `node --check api/routes/notifications.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `npm run build` 통과
  - `npm run test:production` 통과, 242 checks
  - `git diff --check` 통과, CRLF 경고만 있음
- 현재 작업트리에는 `.codex-temp/` 미추적 폴더가 있을 수 있습니다. 커밋하지 마세요.

## 오늘 완료한 내용 요약

### 1. 출결 저장-우선 재구현

- `POST /api/attendance/check`가 출결 처리의 중심입니다.
- 키오스크/수동 출결 모두 서버가 학생, 오늘 수업, 기존 record를 찾습니다.
- `lesson_student_records` 저장 성공 후에만 출결 알림톡을 발송합니다.
- 저장 실패 시 알림톡으로 넘어가지 않습니다.
- 수동 등원 저장 후 키오스크를 다시 찍으면 기존 등원 기록을 인식하고 하원으로 처리합니다.
- 수동으로 실제 등원 시각을 입력하면 발송 시각이 아니라 입력한 등원 시각 기준으로 저장/발송합니다.

### 2. 키오스크 확인 모달

- 번호 4자리 입력 직후 바로 저장/발송하지 않습니다.
- 먼저 학생명, 수업명, 처리 상태, 시간을 확인합니다.
- 확인 모달은 `확인` 버튼 하나만 보여줍니다.
- 닫기 X, `다시 입력`, `저장하고 알림톡 발송`, 하단 안내문구는 제거했습니다.
- 저장 중에는 모달이 유지되고 `저장 중...`으로 표시됩니다.
- 저장 성공 후에는 결과 모달 없이 키패드로 바로 돌아갑니다.
- 실패하면 오류 모달을 보여줍니다.

### 3. 출결 알림톡 구조

실제 출결 알림톡은 등원/지각/하원 모두 아래 구조로 통일했습니다.

```text
🏫 출결 : 하원
📘 수업 : 화목 4-7 / 토 10-1반
🕒 시간 : 16:30
```

- 등원/지각도 시간은 `출결` 옆에 붙지 않습니다.
- 지각/결석 사유가 있으면 출결 줄에 사유만 붙이고 시간은 `시간` 줄에 둡니다.
- 알림톡 설정의 출결 템플릿 테스트 미리보기도 같은 구조입니다.

### 4. 수업일지 예약 알림톡 원본 최신화

- 예약 job의 payload snapshot은 최종 발송 원본이 아닙니다.
- 발송 직전 서버가 최신 수업/수업기록/학생/숙제/보충 데이터를 다시 읽습니다.
- 최신 데이터로 `payload`와 `previewBody`를 재구성한 뒤 Solapi로 발송합니다.
- 학생이 수업 명단에서 빠졌거나, 수업이 삭제/취소됐거나, 알림 제외 상태면 발송하지 않고 job을 `canceled`로 남깁니다.
- 수업 저장/upsert 시 명단에서 빠진 학생의 미발송 예약 job을 취소합니다.
- 수업 삭제 시 해당 수업의 미발송 예약 job을 취소합니다.

### 5. 0명 수업 loop 방지

- 학생을 다른 반으로 옮겨 0명 수업이 된 경우 자동 예약 갱신 effect가 계속 돌던 문제를 막았습니다.
- 0명 수업은 자동 예약 갱신을 중단하고 기존 미발송 예약만 `수업 학생 없음`으로 취소합니다.

## 남은 운영 확인

### 필수 검수

1. `/attendance`에서 테스트 학생 등원
2. 수업일지 새로고침 후 실제 등원 시각 표시
3. 같은 학생 키오스크 재입력 후 하원 처리
4. 하원 알림톡 본문이 `출결/수업/시간` 구조인지 확인
5. 지각 등원 시 알림톡 본문이 `출결 : 지각`, `수업`, `시간` 구조인지 확인
6. 확인 모달에 `처리` 박스가 없는지 확인

### 중단 조건

- 학생이 찍었는데 `lesson_student_records`에 저장되지 않음
- 하원 스캔이 등원으로 발송됨
- `updatedAt`이 등원 시각처럼 보임
- 알림톡 상태 저장 후 출결 시각이 사라짐
- 확인 모달에 `처리`, `다시 입력`, `저장하고 알림톡 발송`이 다시 보임
- 등원/지각 알림톡에서 시간이 `출결` 줄 안에 다시 붙음
- 학생 삭제 후에도 예약 job이 `scheduled`로 남음
- 수업 삭제 후에도 예약 job이 남음

## SQL / 운영 주의

- `supabase/20260706_attendance_events.sql`은 이전 작업에서 추가된 SQL입니다.
- `attendance_events`는 checkin/checkout/status/completed 이벤트, 저장 전후 record, 알림톡 결과/실패를 감사 로그로 남깁니다.
- 운영 Supabase SQL Editor 적용 필요 여부를 확인하세요.
- 이 테이블이 없어도 출결 record 저장은 동작하지만 이벤트 감사 로그는 남지 않습니다.
- 이후 작업에서 새 SQL이 필요하면 운영 SQL Editor 적용은 사용자가 직접 합니다.

## 예약발송기 판단 메모

현재 구조:
- 웹앱/서버는 `notification_jobs`에 예약 job을 저장합니다.
- 서버 dispatch가 due job을 claim한 뒤 발송합니다.
- 발송 직전에 최신 수업일지를 다시 읽습니다.

문제:
- Render Free web service는 sleep 될 수 있으므로 내부 interval만으로 정시성을 보장하기 어렵습니다.

선택지:
1. Render Cron Job
   - 가장 직접적입니다.
   - 최소 월 $1 과금이 있습니다.
   - `/api/notification-jobs/dispatch-due`를 주기 호출하면 됩니다.
2. GitHub Actions cron
   - repo 기반으로 운영 가능하지만 secret/토큰 관리와 지연 가능성을 고려해야 합니다.
3. Supabase scheduled function
   - Supabase 중심 구조로 묶을 수 있지만 현재 dispatch API와 중복 설계가 생길 수 있습니다.
4. 외부 uptime ping
   - 서버 sleep 방지에는 도움이 되지만 정식 scheduler로 보기는 어렵습니다.

다음 세션에서 정시 발송이 정말 필수인지 먼저 확인한 뒤 구현하세요.

## Canva 중심 MVP 요약

출결 운영 검수 후 다시 돌아갈 큰 제품 방향입니다.

### 역할 분리

- Canva: 최종 카드뉴스 디자인 편집기
- 웹앱: 시험분석 원본, AI 초안, 선생님 저장본, Canva 재료 export, 블로그/인스타 문구 관리
- JS/CSS 렌더러: 카드 구조 검수, 문구 길이 확인, 차트/이미지 재료 생성, 장기 Puppeteer PNG 자동화 후보
- AI: 문장 다듬기, 블로그 이모티콘/형광펜/줄나눔, 카드 문구 압축
- 선생님: 원본 사실 확정, 주요문항 crop, 최종 검수/공개 승인

### 10장 카드 기준

1. 표지
2. 시험 구조
3. 총평 정리
4. 주요문항 1 살펴보기
5. 주요문항 1 손풀이
6. 주요문항 2 살펴보기
7. 주요문항 2 손풀이
8. 주요문항 3 살펴보기
9. 주요문항 3 손풀이
10. 다음 시험 대비 / 블로그 유입 CTA

### Canva에 넘길 재료

- 학교명, 학년, 고사명, 과목
- 객관식/서술형 문항 수, 만점, 시행일, 출판사
- 시험 범위
- 단원별 출제 비중 차트 PNG
- 난이도 분포 또는 체감 난도 요약
- 총평 4개 박스 문구
- 주요문항 문제 crop 이미지
- 주요문항 손풀이 crop 이미지
- 핵심 개념 / 자주 틀리는 포인트 / 추천 복습 문구
- 마지막 CTA 문구
- 인스타 캡션과 블로그 유입 문구

### 다음 Canva 작업 후보

1. 산출물 패널 문구를 `Canva 재료 미리보기/구조 검수`로 재명명
2. 카드별 Canva 재료 보드 추가
3. ZIP export를 `texts/canva-card-*.txt`, `texts/crop-file-guide.txt`, 차트 PNG로 세분화
4. Canva 최종 문구를 웹앱 선생님 저장본으로 역반영하는 UI 설계
5. 블로그 AI 초안에 이모티콘/형광펜/줄나눔 규칙 반영

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `docs/exam-analysis-canva-workflow.md`
- `api/server.js`
- `api/routes/coreData.js`
- `api/routes/notifications.js`
- `src/app/App.jsx`
- `src/app/App.css`
- `scripts/scenario-tests-production.cjs`

## 자주 쓰는 명령

```powershell
git status --short
git log --oneline -8
node --check api/server.js
node --check api/routes/coreData.js
node --check api/routes/notifications.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check
```
