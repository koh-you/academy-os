# Session Handoff - 2026-06-26 Final

이 문서는 다음 Codex 세션이 Academy OS 전체 작업을 이어받기 위한 종합 인수인계입니다.

## Read First

1. `docs/current-worklog.md`
2. `docs/session-handoff-2026-06-26-final.md`
3. 알림톡 상세가 필요하면 `docs/session-handoff-2026-06-26-alimtalk.md`
4. 프로젝트 지침: `AGENTS.md`

## Must Follow

- 커밋/푸시는 자동 진행한다.
  - 사용자가 따로 말하지 않아도 AI가 할 수 있는 변경, 검수, 커밋, 푸시는 작업 완료 즉시 진행한다.
  - GitHub `main` 푸시 후 Vercel/Render 자동 배포가 이어지는 흐름이 기본이다.
- SQL edit 자동화는 하지 않는다.
  - 운영 Supabase SQL Editor 작업은 사용자가 직접 한다.
  - SQL 파일이 필요하면 `supabase/<file>.sql`을 만들고 목적/적용 방법만 명확히 남긴다.
- 운영 데이터는 Supabase 또는 `app_state` 저장을 우선 확인한다.
  - 새로고침/재로그인/다른 기기에서 사라지는 front-only 상태는 기능 확장보다 먼저 저장 경로를 보강한다.
- 운영 흐름 변경 후 기본 검수:
  - `npm run test:production`
  - `npm run build`
  - 코드 파일은 가능하면 `node --check`도 실행한다.
- 비밀값은 출력하거나 커밋하지 않는다.
  - `.env`, PDF, HWP/HWPX, ZIP, 대용량 자료는 commit하지 않는다.

## Current Production State

- Frontend: `https://academy-os-blue.vercel.app`
- Backend API: `https://koh-you-math-academy-os-api.onrender.com`
- GitHub: `https://github.com/koh-you/academy-os`
- 최신 확인 main 커밋:
  - `7d46fe0 Add Alimtalk session handoff`
- 최신 코드 배포 확인 커밋:
  - Render API live: `18c4d17 Tighten Alimtalk readiness checks`
  - handoff 문서 커밋 `7d46fe0`은 문서-only라 Render 코드 동작에는 영향 없음.
- 마지막 코드 검수:
  - `npm run test:production` 189개 통과
  - `npm run build` 통과
  - Vite chunk size warning은 기존 비차단 경고

## Recent Key Commits

- `7d46fe0 Add Alimtalk session handoff`
- `18c4d17 Tighten Alimtalk readiness checks`
- `475bfb7 Preserve structured lesson comment Alimtalk body`
- `314a907 Suppress duplicate attendance Alimtalk sends`
- `ba05114 Add internal notification dispatch loop`
- `0547215 Harden scheduled notification dispatch`
- `f2f012b Show missing checkout in lesson journal`
- `69958ad Include attendance detail in Alimtalk messages`
- `5b2e953 Add exam analysis deletion controls`
- `6cb2a2c Improve school calendar month event layout`
- `df5cb65 Simplify exam analysis source step`
- `80aeebd Make exam analysis PDF upload obvious`
- `dec416d Add exam analysis PDF source upload`
- `ee2aeb2 Clarify exam analysis workflow`
- `250e040 Improve school calendar month readability`

## Completed Work Summary

### 1. 알림톡 MVP 안정화

상세 문서: `docs/session-handoff-2026-06-26-alimtalk.md`

완료 내용:

- 출결 알림톡 지각/결석 상세 문구 보강
  - 지각: `지각 (사유: ... · 등원 HH:mm)`
  - 결석/인정결석: `결석 (사유: ... · 처리 HH:mm)`
- 김재연 출결 알림톡 중복 발송 원인 확인 및 방지
  - 2026-06-26 15:38:58에 동일 출결 알림톡 2건 발송된 것 확인.
  - 서버 `sendAttendanceAlimtalkOnce`와 프론트 `attendanceNotificationLocksRef`로 2분 내 중복 차단.
- 학생 알림톡 코멘트 단문 발송 버그 수정
  - `commentBodyOverride`를 전체 본문 대체가 아니라 `💬 코멘트` 내용으로만 사용.
  - 수업일지 알림톡은 항상 `출결 -> 과제 상태 -> 강의 교재 -> 강의 내용 -> 지난 과제 -> 다음 과제 -> 코멘트` 구조 유지.
- 자동발송 구조 보강
  - Render cron 생성은 `402 Payment information is required`로 실패.
  - 대안으로 Render web service 내부 루프 60초마다 dispatch.
  - GitHub Actions 5분 주기 fallback.
  - dispatch token 및 job claim으로 중복 발송 위험 감소.
- production dry-run 완료
  - 출결, 학부모 수업 알림톡, 학생 수업 알림톡, 학생 공지, daily report, schedule reminder 모두 `forceDryRun:true`에서 정상.
  - Solapi 인증 `getBalance()` 조회 성공.
- readiness-check 보정
  - 코멘트 없음 false-positive 제거.
  - 학생용도 학부모용처럼 `강의 교재`, `강의 내용`, `과제 상태` 누락 점검.

현재 주의:

- production readiness-check 기준 박지현 2026-06-26 22:30 예정 학부모/학생 알림톡 2건은 `강의 내용` 누락.
- 발송은 가능하지만 `강의 내용` 줄이 빠진 채 나갈 수 있다.

### 2. 출결 태블릿 / 출결 화면 정리

완료 내용:

- 좌측 Lesson Hub의 중복 `출결체크` 탭 제거.
- 출결 태블릿은 `/attendance` 별도 흐름으로 유지.
- 태블릿 출결은 학생 전화번호 뒤 4자리 기준으로 매칭하고 오늘 수업과 연결.
- 등원/하원 라벨 및 시각 표시 보강.
- 수동 출결 변경 시 확인 모달과 알림톡 발송 선택 흐름 정리.
- 하원 미체크 학생 표시:
  - 수업일지 상단 발송 전 점검 영역.
  - 학생별 출결 배지.

주의:

- 출결 즉시 알림톡은 `notification_jobs`에 남지 않는다.
- 실제 발송 여부는 Solapi 조회가 가장 정확하다.

### 3. 학생관리 / 반관리 데이터 정합성

완료 내용:

- 학생 삭제 후 반관리 잔존 문제 조사.
- inactive 학생은 반관리/직전수업 명단에서 제외되도록 보정.
- 테스트 학생 `고태영` 운영 데이터 hard delete 처리.
- 반관리 명단은 활성 학생 기준으로 보이도록 정리.

주의:

- 향후 학생 삭제/퇴원/반 이동은 과거 기록 보존과 미래 수업명단 반영을 구분해서 처리해야 한다.
- 퇴원 학생은 `status=paused`, `withdrawnAt` 기반으로 숨기는 흐름을 유지한다.

### 4. 직전수업 / 시험관리 자동수업 안정화

완료 내용:

- 가상 직전수업 렌더링을 제거하고 실제 lesson으로 자동 저장하는 방향으로 안정화.
- 시험관리에서 자동 계산한 직전수업이 수업일지에 실제 수업처럼 표시되도록 보정.
- 정의여고 6/30 직전수업 클릭 시 7/6 다른 수업이 열리던 ID 충돌 보정.
- 직전수업/시험보강 자동 lesson id 충돌 방지.
- inactive 학생 제외.
- 특수 자동수업은 잘못된 class template FK를 넣지 않도록 보정.

주의:

- 시험관리 원천 데이터와 학사일정 이벤트가 연결된다.
- 가상수업을 다시 도입하지 말고, 실제 lesson 저장/수정/삭제 흐름을 유지하는 것이 안정적이다.

### 5. 숙제현황 / 보충관리 기준 통일

완료 내용:

- 보충관리 데이터가 맞고 숙제현황 데이터가 맞지 않다는 사용자 판단 반영.
- 숙제현황의 보충 대상 기준을 보충관리와 같은 원천으로 통일.
- 핵심 함수:
  - `isHomeworkMakeupCandidate(homework, records, lessons)`
  - `dedupeActionableHomeworks(homeworks)`
- 수업일지 과제 상태가 숙제보충 원천으로 동기화되도록 보정.

주의:

- “가장 근원 데이터”는 수업일지의 과제 상태와 homework record 연결이다.
- 숙제현황은 별도 후보 계산을 만들기보다 보충관리 후보 원천을 따라가야 한다.

### 6. 학사일정 캘린더 표현 개선

완료 내용:

- 월간 캘린더에서 시험기간/수학시험 표시 가독성 개선.
- 시험기간 긴 bar와 수학시험 pill을 요약/그룹화.
- 사용자 예시 이미지처럼 시험기간은 줄/bar, 수학시험은 작은 pill 중심으로 읽히도록 방향 정리.

주의:

- 현재 가독성은 개선됐지만, 사용자가 제공한 모바일 캘린더 예시와 완전히 동일한 UX는 아니다.
- 다음에 학사일정 작업을 이어가면 모바일/데스크톱 둘 다 캘린더 셀에서 텍스트 겹침을 다시 확인해야 한다.

### 7. 시험분석 탭 정리 / PDF Storage

완료 내용:

- 시험분석 탭의 의도 정리:
  - PDF 업로드
  - Storage 저장
  - 텍스트 추출
  - AI 1차 분석
  - 강사 검토
  - 산출물 작성
- 분석 목록 데이터 저장 위치 확인:
  - `app_state.examAnalyses`
- 수정/삭제 보강:
  - 분석 목록 삭제 버튼과 app_state 반영.
- PDF Storage/텍스트 추출 연결:
  - `exam-analysis-sources` bucket 흐름.
  - PDF 업로드와 텍스트 추출 상태 표시.
- 레이아웃 단순화:
  - 원본 입력 UI를 과도한 2열 복잡 구조에서 더 단순하게 정리.

주의:

- 실제 OCR 품질은 PDF 텍스트 추출 가능한 파일에 의존한다.
- 이미지 기반 PDF OCR은 별도 고도화가 필요할 수 있다.
- 분석 목록의 한글 깨짐처럼 보이는 `용��여고`류는 기존 저장 데이터/인코딩 원인 가능성이 있다.

### 8. 시험 후 제출 / 학생 제출 흐름

완료 내용:

- 시험 후 제출 대상 선택 체크박스 가독성 보정.
- 학생별 대상 선택을 `app_state.examPostTargetStudentIds`에 저장.
- 학생 제출 결과는 `examPostSubmissions` 흐름으로 유지.
- Tally 탭 제거/시험 후 제출 중심으로 정리.

다음 검수:

- 시험관리 `시험 후 제출`에서 체크한 학생에게만 학생 웹앱 제출 카드가 보이는지 확인.
- 여러 과목/미적/확통이 있어도 학생 1명당 제출 카드가 중복되지 않는지 확인.

### 9. SQL / Supabase 운영 원칙 정리

완료 내용:

- SQL edit 자동화 철회.
- 사용자가 SQL edit은 직접 하기로 결정.
- 이전 세션에서 물어본 DB URL/DB password/access token을 다시 묻지 않도록 작업 원칙에 반영.
- Supabase DB URL/프로젝트 ref 관련 정보는 문서에 비밀값을 남기지 않는다.

주의:

- 채팅/이미지로 DB password가 노출된 이력이 있으므로 장기적으로 Supabase DB password reset 권장.
- SQL 파일이 필요한 경우 파일만 만들고 적용 필요성을 명확히 안내한다.

## Current Priority Queue For Next Session

### P0. 박지현 22:30 알림톡 강의 내용 누락 처리

- production readiness-check가 잡은 현재 누락:
  - 박지현
  - `월수금 7-10반`
  - `parent_comment`, `student_comment`
  - missing: `강의 내용`
- 다음 세션에서 수업일지에서 해당 학생 record의 `lessonContent`를 채우거나 사용자의 판단을 받아야 한다.

### P0. 학생별 알림톡 제외 운영 검수

확인할 것:

- 특정 학생 학부모 알림톡 제외.
- 특정 학생 학생 알림톡 제외.
- 예약 확인 모달에서 제외 상태 표시.
- 기본예약/30분 지연을 다시 눌러도 제외 대상 예약이 재생성되지 않는지.
- 제외 해제 후 예약이 다시 생기는지.

저장 위치:

- `lesson_student_records.notification_muted_parent`
- `lesson_student_records.notification_muted_student`
- `lesson_student_records.notification_muted_reason`
- 예약 job은 `notification_jobs`

### P0. 2026-06-26 22:30 이후 실제 발송 대조

알림톡이 MVP 최우선이므로 다음 세션 첫 운영 확인 후보:

- `notification_jobs`에서 22:30 예정 job 상태 확인.
- Solapi 실제 발송내역과 대조.
- 같은 학생/같은 수업/같은 대상 중복이 없는지 확인.
- 학생용 본문이 구조화되어 나갔는지 확인.

### P1. 시험 후 제출 운영 검수

- 대상 체크 저장/새로고침 유지.
- 학생 웹앱 카드 노출.
- 제출 결과 저장.
- 여러 과목 중복 카드 방지.

### P1. 알림관리 개별 발송 운영 검수

- 수신 범위: 선택/전체/학부모/학생.
- 템플릿: 교재문자/보강문자/공지문자.
- AI 수정 프롬프트는 설정 화면 중심으로 유지.
- 즉시/예약 발송 기록이 `notification_jobs`에 저장되는지 확인.

### P1. 새 기능 전 저장 누락 점검

항상 먼저 볼 것:

- 학생 오늘 탭
- 숙제현황
- 보충관리 상세 메모
- 알림톡 미리보기/실제 문구 일치
- 시험 후 제출 사진 업로드 확장

## Known Operational Caveats

- Render cron service는 결제 정보가 없어 생성되지 않았다.
  - 현재는 Render web internal loop + GitHub Actions fallback.
- GitHub Actions cron은 정확히 5분마다 실행된다고 보장하기 어렵다.
  - 서버가 깨어 있는 동안 internal loop가 더 중요하다.
- 운영 dispatch에 인증된 `forceDryRun=true`를 잘못 쓰면 예약 job 상태를 `dry_run`으로 바꿀 수 있다.
  - production 검증은 직접 발송 API dry-run과 readiness-check 위주로 한다.
- 출결 즉시 알림톡은 `notification_jobs`에 남지 않는다.
  - Solapi actual logs가 권위 있다.
- 로컬 `.env`의 `SOLAPI_API_SECRET`은 Render 운영값과 다르다.
  - 로컬 값으로 Solapi 조회하면 `SignatureDoesNotMatch`.
  - 필요하면 Render 환경변수 값을 메모리에서만 사용하고 출력하지 않는다.
- `SOLAPI_FROM`은 Render에 없지만 현재 ATA 발송은 정상 동작 중이다.

## Useful Commands

```powershell
npm run test:production
npm run build
node --check api/server.js
node --check api/routes/notifications.js
node --check scripts/scenario-tests-production.cjs
git status --short
git log --oneline -10
```

Production health:

```powershell
@'
(async()=> {
  const res = await fetch("https://koh-you-math-academy-os-api.onrender.com/health");
  console.log(res.status, await res.text());
})();
'@ | node -
```

Production notification status:

```powershell
@'
(async()=> {
  const res = await fetch("https://koh-you-math-academy-os-api.onrender.com/api/integrations/status");
  console.log(JSON.stringify(await res.json(), null, 2));
})();
'@ | node -
```

Readiness check:

```powershell
@'
(async()=> {
  const res = await fetch("https://koh-you-math-academy-os-api.onrender.com/api/notification-jobs/readiness-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ windowMinutes: 1440, notifySlack: false })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
})();
'@ | node -
```

## Files Most Likely To Touch Next

- `src/app/App.jsx`
  - main UI, 수업일지, 시험분석, 학사일정, 알림관리.
- `api/server.js`
  - API routes, dispatch, readiness check, storage upload.
- `api/routes/notifications.js`
  - Solapi body composition and actual send wrappers.
- `api/routes/coreData.js`
  - Supabase table mapping and persistence.
- `scripts/scenario-tests-production.cjs`
  - production behavior guardrails.
- `docs/current-worklog.md`
  - must update after work.
- `docs/session-handoff-2026-06-26-alimtalk.md`
  - detailed Alimtalk-only context.

## Suggested First Message For Next Session

```text
E:\academy-os에서 작업합니다.
먼저 docs/current-worklog.md, docs/session-handoff-2026-06-26-final.md, docs/session-handoff-2026-06-26-alimtalk.md를 읽고 이어가주세요.
알림톡은 MVP 최우선입니다. 우선 2026-06-26 22:30 이후 notification_jobs와 Solapi 실제 발송내역을 대조하고, 박지현 강의 내용 누락 건부터 확인해주세요.
SQL edit 자동화는 하지 말고, 코드 변경 후 npm run test:production / npm run build 통과 시 자동 커밋/푸시해주세요.
```
