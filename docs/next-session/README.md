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

현재 실제 최신 커밋은 반드시 `git log -1 --oneline`으로 확인해주세요.
이 handoff 작성 직전 기능 기준 최신 커밋은 `1ecf56b9 Add special lecture management source`입니다.
handoff 문서 갱신 커밋이 그 뒤에 있을 수 있으므로, 실제 최신 커밋은 `git log -1 --oneline` 결과를 우선하세요.

현재 미추적 로컬 항목:
- `.codex-temp/`
- 이 폴더는 Git에 올리지 말고 임시 산출물로만 봅니다.

오늘 완료된 핵심 작업:
1. 특강 안내문 구조 정리
   - 알림관리 상단 탭을 `공지 발송`, `특강 안내문`으로 변경했습니다.
   - `특강 안내문`은 신청자 관리가 아니라 안내문 작성/저장/발송 준비 화면입니다.
   - 이후 `운영 > 특강관리`가 별도 상위 메뉴로 추가됐고, 특강 안내문과 특강 신청자 원천을 한 화면에서 확인하는 구조가 됐습니다.

2. 특강 안내문 버튼 정리
   - 남은 버튼: `안내문 저장`, `알림톡 발송 준비`, `링크 복사`
   - 제거한 버튼/영역: `복사 옵션`, `알림톡 본문 복사`
   - `안내문 저장`은 Supabase `app_state.specialLectureGuides`에 저장합니다.
   - `알림톡 발송 준비`는 공지 발송 화면으로 제목/본문/특강 안내문 링크를 넘길 뿐, 실제 발송/예약은 하지 않습니다.
   - `링크 복사`는 공개 안내문 URL만 클립보드에 복사합니다.

3. 특강 안내문 입력 단순화
   - `학습 목표`만 남기고 `안내문 요약`, `핵심 안내` 입력칸은 제거했습니다.
   - `학습 목표`는 기본 정보 바로 아래, `일정 계산` 위로 이동했습니다.
   - 공개 안내문 미리보기의 `수업 방향` 섹션도 제거했습니다.
   - 기존 저장본 호환을 위해 `summary/highlights` normalize는 남아 있지만 화면 원천으로 쓰지 않습니다.

4. 특강 일정/회차 입력 흐름
   - `기간 시작/기간 종료`는 기본 정보 영역에서 제거하고 `일정 계산` 안으로 옮겼습니다.
   - `일정 계산`과 `회차별 일정`은 접기/펼치기 구조입니다.
   - 회차는 textarea 문법 입력이 아니라 회차 카드로 날짜/시작/종료/주제를 수정합니다.
   - 왼쪽 입력은 오른쪽 공개 안내문 미리보기에 즉시 반영됩니다.
   - 실제 공개 링크 저장본은 반드시 `안내문 저장` 후 반영됩니다.

5. 학사일정 / 월간 학사 개요
   - 시험기간은 달력 셀에 길게 깔지 않고 월간 개요 카드로 모읍니다.
   - 달력에는 수학시험 날짜와 방학/개학/학교행사 등 실제 날짜 확인이 필요한 일정만 표시합니다.
   - 시험기간 카드는 클릭하면 해당 학교/시험기간 수정 모달이 열립니다.
   - 시험기간 카드 전체 배경의 파스텔/그라데이션은 제거했습니다.
   - 학교별 팔레트는 카드 왼쪽 선, 수학시험 날짜 chip의 작은 점, 달력 일정 pill에만 씁니다.
   - 원본:
     - 시험기간: Supabase `exam_prep_rows.exam_period`
     - 수학시험 날짜: Supabase `exam_prep_rows.math_exam_dates/math_exam_date`
     - 수동 학사일정: Supabase `school_events`

6. 공지 발송 UI
   - 공지 삭제/발송 상태 문구가 상단과 하단에 중복 표시되던 문제를 정리했습니다.
   - 상태 문구는 공지 작성 패널 내부의 잘 보이는 위치에만 표시합니다.
   - 공지 발송 기록은 기본 접힘 구조로 바꿨습니다.

7. 보충관리 / 수업일지 / Solapi 근처 작업
   - 보충 완료 처리 후 화면 피드백을 보강했습니다.
   - 보충 알림톡 초안은 연도를 빼고 `7/17(금) 16:00`처럼 짧게 정리했습니다.
   - 수업일지 Solapi 예약 업데이트 필요가 반복되는 원인을 서버의 보충 일정 필터 차이로 확인하고 수정했습니다.
   - 보충/결석보강은 원 수업일지와 보충 수업일지를 분리해 처리하는 방향을 유지합니다.

8. 운영 > 특강관리 / 특강 신청자 원천
   - 사이드바 상위 그룹명을 `시스템`에서 `운영`으로 바꿨습니다.
   - `운영 > 특강관리` 메뉴를 추가했습니다.
   - 기존 `알림관리`는 공지 발송 중심으로 남겼습니다.
   - `특강관리` 안에 `특강 안내문`과 `특강 신청자` 패널을 두었습니다.
   - 특강 신청자는 신입생 상담 접수와 섞지 않고 새 Supabase 원천 `special_lecture_applications`로 분리합니다.
   - 새 API:
     - `GET /api/special-lecture-applications`
     - `POST /api/special-lecture-applications`
     - `POST /api/special-lecture-applications/tally`
   - 새 SQL 파일:
     - `supabase/20260715_special_lecture_applications.sql`

Tally 현재 상태:
- 공개 특강 안내문에는 Tally 신청폼 URL이 들어갑니다.
- URL에는 `source=os_guide`, `specialLectureId`, `guideId`, `campaign` query가 붙습니다.
- OS 코드에는 `특강 신청자` 전용 목록/상태 저장 구조가 들어갔습니다.
- 단, 운영 Supabase에는 아직 SQL을 사용자가 직접 적용해야 합니다.
- 현재 `/api/intake/tally` 웹훅은 그대로 Supabase `student_intake_applicants`에 저장하는 신입생/상담 접수 후보 흐름입니다.
- 특강 신청자는 새 웹훅 `POST /api/special-lecture-applications/tally`로 보내야 합니다.
- 새 Tally 웹훅 URL:
  - `https://koh-you-math-academy-os-api.onrender.com/api/special-lecture-applications/tally`

사람이 직접 해야 하는 작업:
1. Supabase SQL editor에서 아래 파일 내용을 직접 실행합니다.
   - `supabase/20260715_special_lecture_applications.sql`
   - 목적: `special_lecture_applications` 테이블과 인덱스 생성
   - SQL 자동 적용 금지. Codex가 운영 SQL을 대신 실행하지 않습니다.
2. Tally 특강 신청폼 Webhook에 아래 URL을 직접 연결합니다.
   - `https://koh-you-math-academy-os-api.onrender.com/api/special-lecture-applications/tally`
   - 기존 신입생/상담용 `/api/intake/tally`와 혼동하지 않습니다.
3. Tally 테스트 제출을 1건 넣고, `운영 > 특강관리 > 특강 신청자`에 카드가 생기는지 확인합니다.

다음 세션 최우선 추천:
1. 운영 배포 반영 확인
   - 운영 프론트: https://academy-os-blue.vercel.app
   - 운영 API: https://koh-you-math-academy-os-api.onrender.com
   - 실제 최신 커밋은 `git log -1 --oneline`으로 확인합니다.
   - 운영 화면이 이전 상태면 코드 문제와 배포/캐시 지연을 먼저 구분합니다.

2. SQL 적용 / Tally 연결 검수
   - Supabase SQL editor에서 `supabase/20260715_special_lecture_applications.sql` 실행 여부를 확인
   - Tally Webhook이 `/api/special-lecture-applications/tally`로 연결됐는지 확인
   - 테스트 제출 1건이 `special_lecture_applications`에 저장되는지 확인
   - `student_intake_applicants`에 특강 신청자가 섞이면 중단

3. 특강관리 사람 검수
   - `운영 > 특강관리` 진입
   - `특강 신청자` 패널이 보이는지 확인
   - `Tally 웹훅 복사` 버튼이 보이는지 확인
   - 신청자 카드에서 상태를 `접수 -> 확정` 등으로 바꾸고 새로고침 후 유지되는지 확인
   - `특강 안내문`에서 버튼이 `안내문 저장`, `알림톡 발송 준비`, `링크 복사`만 보이는지 확인
   - `알림톡 발송 준비` 클릭 시 공지 발송 화면으로 넘어가되 실제 발송/예약이 생기지 않는지 확인

4. 학사일정 사람 검수
   - `월간 학사 개요` 상단 숫자 카드와 시험기간 카드가 흰 배경인지 확인
   - 학교별 색상은 왼쪽 선/작은 점/달력 pill에만 보이는지 확인
   - 시험기간 카드 클릭 시 수정 모달이 열리는지 확인
   - 저장/삭제 후 새로고침해도 `exam_prep_rows` 원천 기준으로 유지되는지 확인

5. 남은 운영 검수
   - Solapi 예약 첫 클릭/null 오류 재발 여부
   - 예약 시각 지난 수업의 `솔라피 발송결과` 버튼 노출
   - 보충 완료 처리 후 active 목록/새로고침 재등장 여부
   - 결석보강 완료 시 과거 숙제 상태가 자동 완료로 바뀌지 않는지

중단 조건:
- `.env`, API key, Slack webhook URL, Supabase service role key, Solapi key/secret, Tally API key가 Git diff/문서/로그에 평문으로 남음
- `알림톡 발송 준비` 클릭만으로 실제 발송/예약이 생성됨
- 특강 안내문 저장만으로 `notification_jobs`나 Tally API 호출이 발생함
- Tally 신청자가 신입생 접수 후보와 특강 신청자로 구분 없이 섞임
- `안내문 저장` 전 공개 링크 저장본이 바뀐 것처럼 동작함
- 시험기간 카드 전체가 다시 학교색/파스텔톤으로 칠해짐
- 수업일지 저장이 Solapi 예약/취소를 자동으로 건드림
- 같은 학생/같은 대상/같은 예약시각의 Solapi 예약이 2건 이상 생김
- 선생님 저장본이 AI/템플릿/자동 매핑값으로 덮어써짐

작업 원칙:
- 한 번에 하나의 우선순위 작업만 구현합니다.
- 구현 전 저장 원천을 먼저 확인합니다.
- UI 변경 전 원본 row, 파생 표시값, local draft, 저장본을 구분합니다.
- 특강 안내문은 `local draft -> 안내문 저장 -> app_state.specialLectureGuides -> 공개 링크/공지 발송 준비` 흐름입니다.
- Tally 특강 신청자는 새 저장 원천 설계 전까지 기존 신입생 접수 후보에 섞지 않습니다.
- 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 반드시 포함합니다.
- 가능한 변경은 검증 후 커밋/푸시까지 진행합니다.
```

## 현재 최신 기준

- 작성일: 2026-07-15
- handoff 작성 직전 기능 기준 최신 커밋: `1ecf56b9 Add special lecture management source`
- 실제 최신 커밋: `git log -1 --oneline` 결과를 우선
- 브랜치: `main`
- 운영 프론트: https://academy-os-blue.vercel.app
- 운영 API: https://koh-you-math-academy-os-api.onrender.com
- 최근 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check api/routes/notifications.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 289개 통과, `npm run build`, `git diff --check`

## 오늘 작업 요약

- `시스템` 상위 메뉴를 `운영`으로 바꾸고 `운영 > 특강관리`를 추가했습니다.
- 특강 신청자 전용 Supabase 원천 `special_lecture_applications`를 코드/API/SQL로 추가했습니다.
- 특강 신청자 Tally 웹훅 경로를 `/api/special-lecture-applications/tally`로 분리했습니다.
- 특강 안내문 편집 화면을 단순화했습니다.
- 특강 일정 계산/회차 입력은 접힘 구조와 카드 입력으로 정리했습니다.
- 특강 안내문 발송 관련 버튼을 저장/발송 준비/링크 복사로 줄였습니다.
- 알림관리 탭명을 `공지 발송`, `특강 안내문`으로 바꿨습니다.
- 학사일정 월간 개요의 시험기간 카드 표시 방식을 정리했습니다.
- 공지 발송 기록/상태 문구 중복과 과한 표시를 줄였습니다.
- 운영 SQL은 자동 적용하지 않았습니다. 사용자가 Supabase SQL editor에서 `supabase/20260715_special_lecture_applications.sql`을 직접 실행해야 합니다.

## 저장 원천 요약

- 특강 안내문: Supabase `app_state.specialLectureGuides`
- 특강 공개 안내문: `/special-lecture?guide=...`가 저장본을 읽음
- 공지 발송/예약: Supabase `notification_jobs` + Solapi
- 신입생/상담 Tally 접수: Supabase `student_intake_applicants`
- 특강 신청자: Supabase `special_lecture_applications`
- 시험기간: Supabase `exam_prep_rows.exam_period`
- 수학시험 날짜: Supabase `exam_prep_rows.math_exam_dates/math_exam_date`
- 수동 학사일정: Supabase `school_events`
- 보충관리 task: Supabase `makeup_tasks`
- 수업일지/알림톡 최종 문구: Supabase `lesson_student_records`

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/app/App.css`
- `api/server.js`
- `api/routes/coreData.js`
- `api/routes/notifications.js`
- `scripts/scenario-tests-production.cjs`
- `supabase/20260624_student_intake_applicants.sql`
- `supabase/20260715_special_lecture_applications.sql`

## 자주 쓰는 명령

```powershell
git status --short
git log -1 --oneline
git log --oneline -8
node --check api/server.js
node --check api/routes/coreData.js
node --check api/routes/notifications.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
git diff --check
```
