# Academy OS Session Handoff - 2026-06-22

이 문서는 2026-06-23 이후 새 Codex/AI 세션에서 이어받기 위한 작업 검수와 다음 작업 큐입니다.

## 1. 새 세션 시작 프롬프트

```text
academy-os 작업입니다.

반드시 먼저 아래 파일을 읽고 시작하세요.
- AGENTS.md
- docs/current-worklog.md
- docs/home-codex-setup.md
- docs/deployment-handoff-prompt.md
- docs/ai-deployment-responsibility-2026-06-21.md
- docs/session-handoff-2026-06-22.md

AI가 할 수 있는 일은 AI가 끝까지 해주세요. 코드/문서 수정 후 사용자가 명시적으로 막지 않았다면 로컬 확인에서 멈추지 말고, npm run build, 필요 시 npm run test:production, docs/current-worklog.md 갱신, git commit, git push origin main까지 진행하세요. GitHub main push가 Vercel/Render 자동 배포 트리거입니다.

push 후 가능한 범위에서 운영 URL도 확인하세요.
- Frontend: https://academy-os-blue.vercel.app
- Backend health: https://koh-you-math-academy-os-api.onrender.com/health
- Integration status: https://koh-you-math-academy-os-api.onrender.com/api/integrations/status

Supabase SQL migration은 자동 적용된다고 가정하지 마세요. DB 컬럼/테이블/RPC/RLS/trigger 변경이 필요하면 SQL 파일을 만들고, 사람이 Supabase SQL Editor에서 실행해야 할 파일명과 순서를 초보자 기준으로 안내하세요. SQL이 필요 없으면 “SQL Editor 작업 필요 없음”이라고 명확히 말하세요.

비밀키와 .env 값은 절대 출력하거나 commit하지 마세요.
```

## 2. 오늘 완료한 작업

### 알림톡 실제 발송 준비

- 학생 실제번호 발송 스위치를 학부모와 분리했다.
- Render 운영 환경변수는 사용자가 직접 변경했고, 현재 운영 API 기준:
  - `dryRun: false`
  - `allowRealStudentRecipients: true`
  - `allowRealParentRecipients: true`
  - `solapiConfigured: true`
  - 누락 환경변수 없음
- 노션 `학생 DB`에서 현재 활성 학생 12명의 학생 번호와 학부모 번호를 가져와 운영 Supabase `students`에 반영했다.
- 운영 `/api/students` 기준:
  - 활성 학생 12명
  - 학생 번호 누락 0건
  - 학부모 번호 누락 0건
  - 테스트 학부모 번호 잔존 0건

### 수업일지 저장/점검 UX

- 수업일지 행 자동저장을 구현했다.
  - 입력 후 1초 뒤 `/api/lesson-records` 저장
  - 같은 행을 계속 수정하면 이전 저장 예약 취소
  - 늦게 끝난 저장이 최신 화면 상태를 덮어쓰지 않도록 `updatedAt` 기준 보호
- 메인 수업일지 표의 수동 저장 열/버튼을 제거했다.
- `발송 전 점검` 버튼을 추가했다.
  - 누르면 필수 데이터가 비어 있는 학생 행만 노란색 표시
  - 강사 코멘트/알림톡 문구는 필수값에서 제외

### 알림톡 예약/즉시발송 UX

- 발송 전 점검 박스에 수업별 알림톡 발송 계획을 추가했다.
  - 기본 예약
  - 30분 지연
  - 알림톡 없음
- 기본 예약 시간:
  - 평일 22:30
  - 토요일 18:30
- 알림톡 문구 모달에서는 예약 선택 버튼을 제거했다.
  - 모달은 문구 확인/수정과 수동 `즉시 발송`만 담당
  - 현재 수업 발송 계획은 읽기 전용으로 표시
- 즉시발송 안전판을 학생 전용 기준이 아니라 현재 대상(학생/학부모)의 실제번호 허용값으로 판단하도록 수정했다.

### 공통 UI

- 공통 `Modal`에 ESC 닫기 기능을 추가했다.
- 설정 화면에 선생님 계정 설정을 추가했다.
  - 현재는 기존 앱 구조에 맞춰 `app_state`에 저장된다.
  - 아이디와 비밀번호 변경 가능
  - 새 비밀번호를 비워두면 아이디만 변경
  - 현재 비밀번호 확인 후 저장

## 3. 오늘 검수 결과

### 통과 확인

- 최종 코드 변경 후 `npm run build` 통과.
- 최종 코드 변경 후 `npm run test:production` 106개 통과.
- 실제발송 전환 후 추가 검수:
  - `node --check api/routes/notifications.js` 통과
  - `node --check api/server.js` 통과
  - `node --check api/routes/coreData.js` 통과
  - 운영 학생/학부모 알림톡 API를 각각 `forceDryRun:true`, `forceTestRecipient:true`로 호출해 성공 확인
  - 두 호출 모두 실제 학생/학부모 번호로 발송하지 않고 테스트 수신자 redirect 및 `dryRun:true` 응답 확인
- 운영 프론트 asset 확인:
  - `teacherAccountSettings` 포함
  - ESC keydown handler 포함
  - `현재 수업 발송 계획` 포함
- 운영 백엔드 health 정상:
  - `{"ok":true,"service":"academy-os-api"}`
- 운영 알림톡 상태 정상:
  - dry-run 꺼짐
  - 학생/학부모 실제번호 발송 허용 켜짐
  - Solapi 설정 정상
  - 누락 환경변수 없음

### 남은 리스크

- 선생님 계정 설정은 아직 서버 인증이 아니다.
  - 현재는 기존 앱의 `app_state` 저장 흐름을 이용한다.
  - 비밀번호가 해시 저장되는 구조가 아니므로 장기 운영 보안에는 부족하다.
  - 내일 P0로 서버 인증 방식 전환이 필요하다.
- 실제 알림톡 발송이 열려 있다.
  - 학생/학부모 실제번호가 모두 활성화된 상태다.
  - 대량 발송 전에는 `발송 전 점검`으로 누락 행을 확인해야 한다.
  - 실수 방지를 위해 dry-run 코드는 삭제하지 말고 안전 스위치로 유지한다.
- 수업별 `알림톡 없음` 계획은 현재 앱 상태 저장 기반이다.
  - 운영 사용 전, 예약 발송 배치/크론 흐름이 이 계획을 실제로 어떻게 소비할지 다음 단계에서 추가 확인이 필요하다.
- 추가 시나리오에서 기존 안정화 이슈가 재확인됐다.
  - `node scripts/scenario-tests-stability.cjs`는 `window.alert/confirm` 잔존 기준에서 실패
  - `node scripts/scenario-tests-day23.cjs`는 기존 학생 포털 타인 데이터 접근 가능성, 밀린 숙제 샘플 부족, 저장 실패 표시 부족 등을 보고
  - 오늘 알림톡 실제발송 연결과 직접 관련된 실패는 아니지만 내일 안정화 큐에 포함 권장

## 4. 내일 작업 큐

### P0. 서버 인증 방식 전환

목표:
- 선생님 계정을 프론트/app_state가 아니라 서버 인증으로 관리한다.
- 비밀번호는 평문 저장하지 않고 해시로 저장한다.
- 설정 화면의 계정 변경도 서버 API로 처리한다.

권장 설계:
- Supabase에 `teacher_accounts` 또는 `auth_users` 성격의 테이블 추가
  - `teacher_id`
  - `login_id`
  - `password_hash`
  - `display_name`
  - `created_at`
  - `updated_at`
- API 추가
  - `POST /api/auth/login`
  - `POST /api/auth/change-password`
  - 필요 시 `GET /api/auth/me`
- 프론트 변경
  - `handleLogin`이 서버 API를 호출
  - 설정 화면 계정 저장도 서버 API 호출
  - 로그인 실패/성공 메시지 정리

SQL 필요 가능성:
- 제대로 구현하려면 새 테이블이 필요하므로 SQL Editor 작업이 필요할 가능성이 높다.
- AI가 해야 할 일:
  - SQL 파일 작성
  - 실행 순서 안내
  - 기존 기본 계정 seed 방법 안내
  - SQL 필요 사항을 `docs/current-worklog.md`에 기록
- 사람이 해야 할 일:
  - Supabase SQL Editor에서 SQL 실행
  - 필요 secrets/환경변수 설정

검수 포인트:
- 기본 계정이 프론트 bundle에 노출되지 않아야 한다.
- 비밀번호 평문이 DB/API 응답/로그에 나오면 안 된다.
- 기존 설정 화면에서 비밀번호 변경 가능해야 한다.
- 비밀번호만 변경, 아이디만 변경, 둘 다 변경 케이스를 모두 확인한다.

### P1. 태블릿 출결화면 키오스크 UX 정리

문제:
- 태블릿에서 출결화면을 켜고 위로 스크롤하면 내부 화면이 보이는 느낌이 있다.
- 브라우저 overscroll/bounce와 앱 루트 스크롤이 섞인 문제로 보인다.

권장 구현:
- `/attendance` 라우트 진입 시 `document.body.classList.add("attendanceOnlyBody")`
- 라우트 이탈/컴포넌트 unmount 시 class 제거
- CSS:
  - `html`, `body`, 앱 루트 높이 고정
  - `overflow: hidden`
  - `overscroll-behavior: none`
  - 출결 화면은 `height: 100dvh`
- 내부에 필요한 긴 목록이 있으면 해당 영역만 별도 스크롤 허용

관리자 탈출 방식:
- 출결 입력창에 관리자 번호/PIN을 입력하면 출결 처리 대신 관리자모드 탈출 흐름으로 이동한다.
- 추천 흐름:
  - 설정에 `출결 관리자 번호` 추가
  - 학생 번호 뒤 4자리와 겹치면 경고 표시
  - 관리자 번호 입력 시 바로 관리화면 진입하지 말고 선생님 로그인 화면으로 이동
  - 서버 인증 전환 후에는 관리자 번호가 맞아도 실제 권한은 선생님 로그인으로 한 번 더 확인

검수 포인트:
- 학생이 일반 전화번호 뒤 4자리를 입력하면 기존 출결 체크가 정상 작동한다.
- 관리자 번호는 출결로 기록되지 않는다.
- 관리자 번호 입력 후 선생님 로그인 화면으로 빠져나갈 수 있다.
- iPad/Android 태블릿에서 위/아래 overscroll 시 내부 화면이 보이지 않는다.

### P2. 알림톡 실제 발송 운영 QA

현재 상태:
- 학생/학부모 실제 발송 모두 활성화되어 있다.
- 학생/학부모 번호 누락은 0건이다.

다음 확인:
- 학부모 알림톡 즉시발송 1건을 실제 번호로 검수
- 학생 알림톡 즉시발송 1건 검수
- 발송 후 `notification_logs`와 수업일지 버튼 상태가 기대대로 바뀌는지 확인
- 실패 시 문구 수정 후 상태가 `작성됨 · 발송 전`으로 돌아오는지 확인

주의:
- 테스트 중 실제 발송 과금이 발생할 수 있다.
- dry-run 코드는 삭제하지 말고 운영 스위치로 유지한다.

### P3. 기존 안정화 시나리오 실패 정리

오늘 추가로 돌린 시나리오에서 아래 기존 리스크가 재확인됐다.

- `window.alert/confirm` 잔존 제거
  - 자동 수업 저장 실패 alert
  - 시험정보 삭제 confirm/alert
  - 일요시험보강 마지막 블록 삭제 alert
- 학생 포털에서 타 학생 데이터 접근 가능성 점검
- 저장 실패가 사용자에게 명확히 표시되지 않는 흐름 점검
- 샘플 데이터에 missing 숙제가 없어 일부 보충관리 검수 시나리오가 실패하는 문제 정리

권장:
- P0/P1 완료 후 별도 안정화 작업으로 진행한다.
- 실제 운영 알림톡 발송과 직접 연결된 문제는 아니므로, 내일 서버 인증/출결 키오스크보다 우선순위는 낮다.

## 5. 자동 배포 원칙

다음 세션에서 코드나 문서를 수정하면 사용자가 명시적으로 막지 않는 한 AI가 아래를 직접 수행한다.

1. `git status --short --branch`
2. 코드 변경이면 `npm run build`
3. 운영 흐름 영향이 있으면 `npm run test:production`
4. `docs/current-worklog.md` 갱신
5. 필요한 파일만 `git add`
6. 의미 있는 commit 생성
7. `git push origin main`
8. 가능한 범위에서 운영 확인
   - Frontend asset 반영
   - Backend health
   - 필요한 API 상태

단, 다음은 사람이 해야 한다.
- Supabase SQL Editor 실행
- GitHub/Vercel/Render/Supabase secrets 입력
- Render/Vercel 대시보드 권한이 필요한 수동 승인

## 6. 마지막 확인 상태

- 마지막 확인 기준 commit: `7581cbf`
- Git 상태: `main...origin/main`, clean
- Frontend: `https://academy-os-blue.vercel.app`
- Backend: `https://koh-you-math-academy-os-api.onrender.com`
- SQL Editor 작업 대기: 없음
