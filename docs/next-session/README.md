# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 아래 프롬프트를 붙여넣은 뒤, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 사용자에게 요약해야 합니다.

## 바로 붙여넣을 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

중요:
코드를 바로 수정하지 말고, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 읽은 뒤 현재 미룬 작업과 새 요청의 우선순위를 짧게 정리해서 세션에 보여주세요.
다음 세션용 프롬프트에 일부 항목이 빠져 있어도, `AGENTS.md`와 `docs/current-worklog.md`의 큐에 있으면 계속 살아 있는 작업으로 취급해주세요.

현재 미룬 작업 우선순위:
1. 운영 OS 저장 신뢰성 보강
   - `docs/save-persistence-audit-2026-07-20.md` 전수조사 결과를 먼저 읽습니다.
   - 저장 로직과 UI를 함께 통일합니다. 공통 흐름은 `편집 중(미저장) -> 저장 중 -> 서버 반영 확인 중 -> 저장 완료/저장 실패`입니다.
   - API 성공과 필요한 Supabase 재조회 대조 전에는 `저장 완료`를 표시하지 않습니다. 실패 시 draft와 모달을 유지하고, 저장 버튼·상태 문구·중복 클릭 방지를 같은 형태로 적용합니다.
   - 새로고침·재로그인·다른 브라우저·Supabase 원본까지 일치해야 한 단위를 완료로 봅니다. 로직만 또는 UI만 바꾼 작업은 완료로 처리하지 않습니다.
   - 직접 저장 원천뿐 아니라 수업일지·달력·명단·포털 등 사용자가 버튼 문구로 기대하는 연결 결과까지 `저장·반영 계약`에 포함합니다. 연결 결과가 옛 값이면 원천 저장만 성공해도 완료가 아닙니다.
   - 첫 단위는 특강 회차 계획 저장과 안전한 미래 수업일지 명단 반영 통합입니다. enrollment와 lesson을 각각 저장·재조회하고 `원천 저장 중 -> 연결 반영 중 -> 반영 검증 중 -> 완료/부분 실패`를 같은 모달에 표시합니다.
   - 다음 단위는 수업 생성/수정/복사/취소 저장 gate입니다. API 완료 전에 모달/화면을 확정하지 않고 실패 시 draft를 유지합니다.
   - 이후 학생/반/Tally, app_state key별/version, examPrep/Tally 입력 경쟁, 숙제/포털/자료함/보고서, 보충/알림 reconcile, 비연결 버튼 순서입니다.
   - 실제 알림 발송, 운영 삭제, 출결/수업일지 원천 변경이 섞이면 중단하고 별도 사람 gate로 나눕니다.
2. 모달 통일 작업
   - 수업 생성/수업 상세/수업일지 관련 모달을 공통 구조로 정리합니다.
   - 숙제보충 등원보충 모달 1차 UI 정리, 결석보강 생성/상세 모달 1차 맥락 정리, 결석보강 알림톡 제목/본문 seed 정리, 실제 보강 수업 상세 화면과 생성 모달 문구 통일은 완료됐습니다.
   - 다음은 전체 모달 inventory와 공통 구조 통일 범위를 다시 정합니다.
   - 착수 전에 현재 모달 inventory, 저장 원천, 알림톡/Solapi/notification_jobs side effect, 수업일지/숙제/출결 연결을 먼저 표로 정리합니다.
   - 숙제보충/결석보충/정규수업/시험대비/특강의 맥락이 섞이면 안 됩니다.
   - 알림톡 예약/발송, 출결 저장, 수업일지 기록 원천이 같이 바뀌면 즉시 중단하고 별도 gate로 나눕니다.
3. 발송 알림톡 템플릿 설정 관리
   - 실제 발송/예약되는 모든 알림톡 템플릿과 문구 원천을 `설정 > 알림톡`에서 확인하고 수정할 수 있게 합니다.
   - 보충관리의 결석보강 학생 11시 리마인더, 숙제보충 학생 11시 리마인더, 보충 일정 확정 안내/변경 안내 문구는 `app_state.aiSettings.notificationTemplates` 원천으로 `설정 > 알림톡`에 노출 완료됐습니다.
   - 다음 후속으로 수업 알림톡/데일리 리포트의 `⭐ 보충/확인 안내` 블록 문구를 수정해야 합니다.
   - 착수 전에 현재 문구 후보, 프론트 미리보기 경로, 서버 발송 직전 refresh 경로, 설정 화면 노출 여부를 먼저 표로 정리합니다.
   - 출결, 수업일지, 숙제보충, 결석보강, 재시험, 공지, 특강, 일정 변경, 학생 11시 리마인더 등 Solapi 경로를 inventory로 정리합니다.
   - 실제 발송 문구가 설정 화면 미리보기/편집값과 다르거나 코드 상수만 수정해야 하는 구조면 즉시 중단하고 별도 gate로 나눕니다.
4. App.jsx 리팩터링 연속 작업
   - 한 번에 하나의 의미 단위만 진행합니다.
   - 순서는 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> AI 검수 결과 + 사람이 확인할 것 gate -> 커밋/푸시`입니다.
   - 기능 변경과 리팩터링 범위를 섞지 않습니다.
   - 아래 18개 기준 로드맵을 공통 후보 목록으로 사용합니다.
   - 9번 `test manager`와 10번 `student-parent portals`의 읽기 전용 표시는 완료됐습니다. 첫 쓰기 단위인 학생 숙제 완료 체크도 학생 bearer session 소유권, Supabase `homeworks` 저장 후 재조회 대조, 카드 내부 상태 UI, 카드/API client 분리와 AI 검증 344개까지 완료했습니다.
   - 실제 학생 사람 gate는 2026-07-21 사용자 지시로 결과 보류했습니다. 테스트 학생 1건의 저장 중/완료 표시, 새로고침·재로그인 유지, 강사 미리보기 쓰기 차단은 미통과가 아니라 미실시 상태로 계속 기록합니다.
   - 다음 단위는 질문 추가·상태변경·삭제입니다. `local draft -> 학생 범위 명시 API -> Supabase app_state 저장 -> 서버 재조회 -> 완료/실패` 계약 inventory를 먼저 제안합니다.
5. Solapi 특강 템플릿 검수 후 연결
   - 새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 먼저 확인합니다.
   - 검수 완료 전에는 임시 특강 알림톡 구조를 유지합니다.
   - 검수 완료 확인 후에만 템플릿 ID/변수 연결, 테스트 데이터 발송, 링크/문구 검수를 진행합니다.

App.jsx 리팩터링 18개 기준 로드맵:
1. `specialLecture helpers/config` - 특강 안내문 계산, URL, 회차 normalize, Tally query helper.
2. `shared UI primitives` - `InlineSaveStatus`, `MetricCard`, `Modal`, `EmptyState`, 단순 카드/상태 표시 컴포넌트.
3. `API client wrappers` - `fetchJson`, `getJsonWithTimeout`, `postJsonWithTimeout`, 공통 API 에러/timeout 처리.
4. `storageKeys/config/constants` - storage key, view id, option list, 상수/설정 묶음.
5. `specialLecture preview/public` - 특강 공개 안내문 미리보기, 공개 URL 렌더링, 복사 문구.
6. `specialLecture management` - 운영 > 특강관리 편집 화면, 신청자 연결, 특강 수업 생성 gate.
7. `school calendar helpers` - 학사일정/시험기간 날짜 계산, 표시 색상, 월간 요약 helper.
8. `school calendar components` - 학사일정 카드/달력/모달 UI.
9. `test manager` - 시험지관리, 테스트 회차, 학생별 테스트 결과 입력/조회.
10. `student-parent portals` - 학생/학부모 포털, 공개 링크, 모바일 표시 컴포넌트.
11. `supplement job builders` - 숙제보충/결석보강 11시 예약, 일정 변경 알림, `notification_jobs` payload 생성.
12. `supplement center/modals` - 보충관리 화면, 숙제보충/결석보강 상세, 완료 처리.
13. `notification center` - 일반공지, 알림톡 관리, Solapi 발송/예약/결과 확인 UI.
14. `exam prep center` - 시험관리, 직전수업/시험대비 후보, 실제 수업 반영 gate.
15. `lesson hub/calendar` - 수업 달력, 수업 생성/수정/상세 모달, 자동 후보 표시.
16. `attendance` - 출결 입력, 태블릿/수업일지 출결 패널, 등하원 알림톡 연결.
17. `LessonJournalDetail` - 수업일지 상세, 학생별 기록, 숙제/코멘트/알림톡 미리보기.
18. `App shell/hooks/context` - App 초기화, activeView 라우팅, 전역 상태/context/hooks 분리.

현재 리팩터링 이어받을 지점:
- 9번 `test manager`는 완료됐습니다. 10번 `student-parent portals` 저위험 표시 영역, 학생/학부모 숙제 탭, 학생 마이페이지 분리까지 완료했습니다.
- 6번 `specialLecture management` 분리 완료.
- 7번 `school calendar helpers` 분리 완료.
- 8번 `school calendar components` 분리 완료.
- 9번 `test manager` 완료: `src/domains/tests/testManagerUtils.js`와 `TestManagerPanels.jsx`에 탭/header/form grid/meta/table/action/recent session list/student history panel 분리 완료.
- 확인된 후속 이슈: 학생 포털 `비밀번호 변경`은 callback/API 없는 기존 미연결 UI입니다. 이번 리팩터링에서는 보존했고 오작동 버튼 정리에서 별도 결정합니다.
- 실제 최신 커밋은 새 세션에서 반드시 `git log -1 --oneline`으로 다시 확인하세요.

오늘/최근 완료된 작업:
1. 특강 선개설·Tally/수동 명단·학생별 회차/진행 모달
   - 특강관리 페이지 제목 바로 아래의 상위 탭을 `특강 수업`과 `특강 안내문`으로 분리했고, `특강 수업`을 첫 탭이자 기본 진입 화면으로 둬 안내문 편집기와 운영 명단이 한 페이지에 길게 이어지지 않음.
   - 공통수학2 카드를 선택할 때만 발생하던 `getSpecialLectureGuideSlug is not defined` 빈 화면 오류는 누락 import를 연결해 수정함. 첫 특강의 확정 명단 조건이 단축 평가되어 자동 테스트에서 숨었던 경로이므로 두 번째 카드 운영 클릭을 별도 gate로 유지함.
   - Tally 자동 매칭 실패는 더 이상 곧바로 오류로 보지 않음. 전체 반 학생 검색에서 직접 연결할 수 있고, Academy OS 학생 원천에 없는 외부/다른 반 신청자는 명시적 버튼으로 미배정 `특강 전용 학생` 등록 후 연결함. 확정 연결 원천은 `special_lecture_enrollments.application_id + student_id`이며 정규반 수업에는 자동 추가하지 않음.
   - 특강 공식 회차 lesson을 학생 없이 먼저 개설하고, 이후 Tally 또는 수동 체크 접수 학생을 미래 회차 명단에 반영할 수 있음.
   - Tally 확정과 수동 접수는 같은 학생별 회차 설정 모달을 사용하며, 미확정 학생은 lesson 명단에 들어가지 않음.
   - 학생별 `진행 보기` 모달은 특강관리 안에서 회차별 출결/진도/과제를 기존 `lesson_student_records`로 조회하고 실제 수정은 해당 특강 수업일지로 연결함.
   - 학생별 회차 설정 모달은 하단에서 `변경됨 -> 저장 중 -> 저장 완료/실패`를 직접 표시함. POST 응답만으로 완료하지 않고 Supabase 명단을 `no-store` 재조회해 회차/시간/상태/메모가 수정본과 일치할 때만 `새로고침 후에도 유지됩니다`로 완료 처리함.
   - 오늘/과거·완료·기록 존재·대기 알림 예약 존재 회차는 자동 명단 변경을 잠그고, `남은 회차 제외`는 과거 이력을 보존함.
   - 새 SQL 없음. 최신 특강 선택/상위 탭 회귀 검증은 `npm run test:production` 320개, `npm run build`, 두 번째 특강 카드 클릭 직접 검증, `git diff --check`를 통과.
2. 특강 학생별 회차/시간 확정과 회차별 단일 수업일지
   - 공식 날짜는 옮기지 않고 학생마다 수강 회차와 실제 시간을 수정·저장할 수 있음.
   - 같은 공식 회차는 수업일지 하나를 사용하며, 그 회차 수강 학생만 명단에 표시하고 시간 조정 학생은 개별 시간을 표시함.
   - 다른 정규반 학생도 전체 학생 원천에서 매칭 가능함. 반 소속으로 제한하지 않음.
   - 사용자가 `supabase/20260718_special_lecture_enrollment_session_plans.sql`, `supabase/20260718_special_lecture_tally_session_requests.sql`을 운영 SQL Editor에 적용 완료함.
   - 최종 수업일지 반영은 특강별 인원, 학생별 수업 시수/시간, 최종 반 구성이 모두 확정된 뒤 한 번에 진행함. 그전에는 신규 특강 수업을 생성하지 않음.
   - 커밋: `e643b7cf`, `6e06629a`, `1d15240b`
3. Tally 신청 원천과 교사 확정 gate
   - 고정 폼은 `https://tally.so/forms/eql9aJ/edit` / 공개 폼 `https://tally.so/r/eql9aJ`.
   - Tally 회차/시간은 신청 초안이며, 특강관리에서 교사가 최종 수정·저장한 `special_lecture_enrollments.session_plans`가 수업 생성 원천임.
   - 신청 카드에서 잘못 연결된 특강을 `연결 특강 -> 연결 수정 저장`으로 고칠 수 있음. 이미 확정 명단이 있으면 자동 이동을 차단함.
   - `status=canceled` 신청은 화면/건수/미매칭/확정 gate에서 숨기되 Supabase row는 이력으로 보존함.
   - 커밋: `8cb22d7c`, `0f59364b`
4. 학부모 수업 알림톡의 보충 안내를 발생 수업 당일로 제한
   - 원인: `linkedLessonId`가 존재하는 보충 task가 학생의 이후 모든 수업 알림톡에 반복 포함됨.
   - 수정: 프론트 미리보기와 서버 발송 직전 refresh 모두 `task.sourceLessonId === lesson.lessonId`일 때만 `⭐ 보충/확인 안내`를 포함함.
   - 예: 7월 16일 발생한 7월 17일 등원보충 안내는 7월 16일 수업 알림톡에만 나타나고 17일 보충수업/18일 이후 정규수업에는 나타나지 않음.
   - 7월 18일 김한영 운영 예약은 확인 시 `payload.supplementSchedule=""`, 기존 문구가 `previewBody`에 없음. 다만 OS status는 과거 시각인데도 `scheduled`로 남아 있어 필요하면 알림관리 `Solapi 결과 확인`으로 실제 결과를 대조함.
   - 문구 템플릿, `notification_jobs` 예약 자체, Solapi 예약/발송, 출결 저장은 변경하지 않음.
   - 기능 커밋: `e114a9ea`; 기록 커밋: `4692f7d6`
5. 계속 유효한 최근 운영 수정
   - 운영 프론트 API base fallback 복구: `ae49ea74`
   - 보충 생성 모달 결석 처리 취소: `db047b39`
   - 운영 알림 반 대상 추가: `888d5c41`
   - 알림관리 Solapi 발송결과 직접 대조, 공지 테스트 발송 제거, 보충 최초 확정/변경 안내 분리는 `docs/current-worklog.md` 상세 기록을 따름.
6. `⭐ 보충/확인 안내` 문구 수정 후속은 여전히 미완료
   - 이번에 고친 것은 포함되는 수업 범위이며 실제 문구/템플릿은 바꾸지 않았음.
   - 다음 착수 전 프론트 미리보기, 서버 발송 직전 refresh, Solapi route body 원천과 설정 화면 노출 여부를 표로 정리해야 함.

최신 검증 결과:
- `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check api/routes/notifications.js`, `node --check scripts/scenario-tests-production.cjs` 통과
- 보충 안내 source lesson fixture 직접 assertion 통과
- `node scripts/scenario-tests-production.cjs` 통과, 317개
- `npm run test:production` 통과, 317개
- `npm run build` 통과, 기존 Vite chunk size 경고만 남음
- `git diff --check` 통과
- 참고: `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 검사하지 못해 도구 한계로 실패할 수 있음. JSX 검사는 Vite build로 확인.

다음 세션 주의사항:
- 사용자가 명시적으로 요청하기 전까지 새 시험대비 수업을 생성/반영하지 마세요. 아직 시험대비를 시작하지 않았습니다.
- 나중에 시험대비를 실제로 시작할 때는 `시험관리/학사일정`의 자동 수업 후보에서 필요한 항목만 반영합니다.
- 이미 수동삭제한 시험대비 후보가 필요해지면 `제외 해제` 가능 여부를 먼저 확인합니다.
- 저장 전 자동 후보가 실제 수업처럼 달력에 보여 헷갈리는 문제가 계속되면 `시험대비 자동 후보와 실제 저장 수업 표시 분리`를 별도 UI 개선 작업으로 제안하세요.
- `.codex-temp/`, `.env`, PDF/HWP/HWPX/ZIP/대용량 자료, Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값은 커밋하지 마세요.
- 운영 Supabase SQL edit 적용은 사용자가 직접 합니다. SQL 자동 적용을 위해 DB URL, DB password, access token을 묻지 않습니다.
- 특강 SQL 2개는 이미 적용 완료됐으므로 재적용을 요청하지 마세요.
- 최종 특강 수업일지 생성은 인원/회차/시간/최종 반이 모두 확정됐다는 사용자 확인 전에는 실행하지 마세요.
- 작업 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 포함합니다.
```

## Handoff Notes

- 미룬 작업 큐의 source of truth는 `AGENTS.md` 최상단과 `docs/current-worklog.md` 최상단입니다.
- App.jsx 리팩터링 18개 기준 로드맵은 `AGENTS.md`, `docs/current-worklog.md`, 이 README에 함께 기록되어 있습니다.
- 다음 리팩터링 시작점은 `StudentTodayTab` 쓰기 기능의 저장 신뢰성 선행 여부 확인입니다. 현재 숙제 체크는 `/api/homeworks` 실패를 콘솔에만 남기고, 질문/시험 제출은 두 배열을 전역 `/api/portal-state` effect로 함께 저장하며 실패 UI/read-after-write가 없습니다. 시험 제출은 업로드 후 draft도 지웁니다. 권장 방향은 세 쓰기 기능의 저장 계약을 먼저 보강한 뒤 컴포넌트를 분리하는 것입니다.
- 최신 기능 커밋은 `e114a9ea Limit supplement notices to source lesson`, 현재 최신 기록 커밋은 `4692f7d6 Document stale supplement reservation check`입니다. handoff 문서 갱신 커밋이 뒤에 오므로 새 세션에서 반드시 `git log -1 --oneline`으로 실제 최신 커밋을 다시 확인하세요.
- 현재 로컬에 남을 수 있는 미추적 항목: `.codex-temp/`. 커밋하지 않습니다.
