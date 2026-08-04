# Academy OS Current Worklog

이 파일은 최근 작업만 유지한다. 2026-07-31 이전의 전체 이력은 `docs/archive/current-worklog-through-2026-07-31.md`에 있다.

## 2026-08-05 App/API 4차 리팩터링 4-1f attendance check

- `/api/attendance/check`의 수동·키오스크 공용 요청과 원천 저장 결과 응답을 7번째 contract로 고정했다. optional field는 `undefined`를 제외한 canonical key만 보내고 `lateMinutes`의 기존 number/string 입력은 모두 보존하며, server는 미지 field·잘못된 type을 출결 저장 전에 field 포함 400으로 차단한다.
- 응답은 `record/action/mode/alimtalk`을 확인한 뒤 기존 controller가 App 원천을 교체한다. `lesson_student_records`·연속 방문 두 행 저장, attendance event, 수동 결석 Solapi 예약·키오스크 queue, provider 부분 실패 안내의 owner와 순서는 이동하지 않았다.
- 검증: contract `7 routes`, attendance API·manual controller, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·main `942.62 kB`·lazy `12/12`, 격리 집중 browser `1/1` 통과.

## 2026-08-05 App/API 4차 리팩터링 4-1e supplement schedule

- `/api/supplement-schedules/save`의 `auditId/lessonChange/taskChange`와 verified response를 공통 contract에 연결했다. client action은 전송 직전 canonical plan을 만들고 server는 atomic persistence 전에 invalid top-level field/type을 차단한다.
- stable logical task key, 결과 불명 원 plan 회수→최신 draft rebase 3요청, lessons·makeup_tasks CAS/readback/rollback은 그대로다. source 성공 뒤 provider 실패는 기존 `notificationFailed`·`notificationRetryScope: provider`로 분리돼 전체 저장 실패로 오표시하지 않는다.
- 검증: contract/schedule atomic CAS·rollback·latest-draft fixture, supplement `10/10`, lint, scenario·production `827/827`, build `416 modules`·main `942.27 kB`·lazy `12/12`, 집중 browser `1/1` 통과.

## 2026-08-05 App/API 4차 리팩터링 4-1d lesson makeup

- `/api/lesson-journal/makeup-tasks/save`의 canonical `makeupTasks` payload와 선언된 legacy `tasks` alias, verified response를 공통 contract에 연결했다. server는 persistence 전에 invalid top-level field/type을 차단한다.
- 첫 구현은 정적 makeup helper가 contract registry를 initial main에 포함해 948.34 kB로 945 kB 예산을 넘었다. 저장 시점 dynamic import로 교정해 main 942.27 kB를 회복하고 contract/helper는 별도 0.96/5.95 kB chunk에 유지했다.
- stable task ID, insert-only/CAS/readback, 결과 불명 재시도, rows 저장 후 makeup 실패의 부분 저장·draft 보존은 그대로다. 검증: contract/bulk/CAS/controller, lesson `20/20`, lint, scenario·production `827/827`, build `416 modules`·lazy `12/12`, 집중 browser `1/1` 통과.

## 2026-08-05 App/API 4차 리팩터링 4-1c lesson history

- `/api/lesson-journal/history-action`의 client outbound/server inbound와 client verified response를 공통 contract에 연결했다. `action/auditId/homeworkChanges/lessonChange` 외의 field와 잘못된 top-level type은 persistence 전에 차단한다.
- 복사 결과 불명 뒤 같은 lesson/homework ID로 재시도하는 pending plan, 취소·복사 undo stack, Supabase CAS/readback/rollback, 성공 뒤 App 목록 반영 순서는 그대로다. contract 실패도 기존 failed 상태를 사용하고 pending copy를 지우지 않는다.
- 검증: contract/history fixture, lesson domain `20/20`, runtime lint, scenario `827/827`, production `827/827`, build `416 modules`·main `942.31 kB`·lazy `12/12`, 집중 browser `2/2` 통과.

## 2026-08-05 App/API 4차 리팩터링 4-1b lesson journal rows

- `/api/lesson-journal/rows/save` 한 경계에 4-1a 공통 contract를 연결했다. client action은 전송 직전 canonical `auditId/homeworkChanges/recordChanges`만 만들고 응답의 `source/verified/auditId` type을 확인하며, server는 persistence 호출 전에 미지 field·잘못된 top-level type을 400 `INVALID_API_PAYLOAD`로 차단한다.
- record/homework local draft, `lesson_student_records`·`homeworks` CAS/readback/rollback, App의 성공 후 원천 교체와 실패 시 draft 보존은 이동하지 않았다. 알림·Storage·AI provider 동작도 없다.
- 검증: contract fixture, rows CAS fixture, 교사 숙제 확인, lesson domain `20/20`, runtime lint, scenario `827/827`, production `827/827`, build `416 modules`·main `942.25 kB`·lazy `12/12`, 집중 browser `3/3` 통과.

## 2026-08-05 App/API 4차 리팩터링 4-1a

- 6개 직접 versioned write route의 request field·명시 legacy alias·authoritative source·verified response를 frozen registry로 고정하고, 잘못된 object/field type·미지 field·canonical+alias 동시 입력을 공통 400 contract error로 판정하는 pure helper를 추가했다.
- 이번 단위는 registry와 fixture만 추가해 `api/server.js`, client request, Supabase 저장·재조회, provider 동작을 변경하지 않았다. 다음 4-1b부터 lesson journal·supplement·attendance 경계에 한 route씩 적용한다.
- 첫 exact-head CI에서 2026-08-05를 미래 날짜로 가정한 safe fixture 2건이 실제 날짜 경계를 넘어 실패했다. 해당 테스트만 2026-08-03 한국 시간으로 고정하고 공용 fixture의 다른 수업 개수와 무관하게 대상 17시 수업 2건을 검증하도록 교정했다.
- 검증: contract fixture, domain all `62/62`, runtime lint, scenario `827/827`, production `827/827`, build `414 modules`·main `942.25 kB`·lazy `12/12`, 집중 browser `2/2`, 전체 browser `47/47` 통과.

## 2026-08-04 App/API 4차 리팩터링 4-0

- 두 선행 작업의 final을 확인하고 학생 월간 제출 main `4d351314`의 Production checks·Vercel 성공과 열린 PR 0건을 대조한 뒤 최신 main에서 4차를 시작했다.
- App 10,903줄·직접 request 73회, server 7,806줄·직접 route 120개, coreData row mapper 44개, App.css 21,727줄, safe browser 47개를 기준선으로 고정했다.
- 검증 시간은 lint 4.45초, domain all 62/62 1.63초, scenario 827/827 3.25초, build 4.28초, production 80.88초, browser 47/47 114.80초다. 제품 runtime과 운영 side effect는 변경하지 않았다.
- `docs/app-refactor-fourth-pass-plan.md`에 소유권·회귀 inventory, 정량 종료 목표와 4-1~4-8의 20~25개 예상 안전 단위를 기록했다. 다음은 4-1a API contract foundation이다.

## 2026-08-04 학생별 월간 제출 미리보기

- 학생 프로필의 선택 월을 기준으로 예정 수업·실제 출결·변동사항을 분리해 보여 주는 읽기 전용 제출 미리보기를 추가했다. 개별 요일에서 제외된 정규수업은 빠지고, 보강·특강·휴강·취소·다른 반·개별 시간은 변동사항에 남는다.
- 학부모용 간단본은 내부 반·개별 스케줄 세부를 줄이고, 원장님용 상세본은 학교·학년·개별 스케줄·출결 집계·반 이름을 함께 보여 준다. 같은 미리보기에서 제출 내용 복사와 PDF 인쇄를 실행하며 전달 메모는 저장하지 않는다.
- 운영 데이터 저장과 실제 카카오톡·알림 발송은 연결하지 않았다. 검증: 전용 모델, student domain `15/15`, runtime lint, production·scenario `827/827`, build `414 modules`·main `942.25 kB`·lazy `12/12`, focused safe browser `1/1` 통과.

## 2026-08-04 개별 스케줄 요일 우선 적용

- 기본 반은 장기 소속으로 유지하고, 학생 프로필의 개별 스케줄에 선택한 요일이 있으면 같은 반 정규수업·휴강의 실제 명단과 출결 기준에서 우선하도록 했다. 강민준처럼 월수금 앞반 소속이면서 개별 월금 17:00~19:00이면 수요일 정규 명단에서는 제외된다.
- 보강·시험대비·특강 등 직접 정한 명단은 개별 정규 스케줄로 제거하지 않는다. 학생 포털, 수업일지, 출결 kiosk, 알림 발송 직전 확인, 이전/다음 숙제 연결, 정산도 같은 판정을 사용한다.
- 개별 스케줄을 저장하면 학생 원천과 미래 정규 명단을 기존 versioned 반 명단 plan으로 함께 저장·재조회한다. 적용 시작일은 추가하지 않았고, 월금→월수금 변경은 사용자가 학생 메모를 보고 나중에 직접 수정한다.
- 검증: student `13/13`, lesson `20/20`, settlement `7/7`, notification `11/11`, scenario `827/827`, production `827/827`, build `412 modules`·main `942.07 kB`·lazy `12/12`, focused safe browser `1/1` 통과. 운영 데이터·알림·SQL은 변경하지 않았다.

## 2026-08-04 달력 특수수업 우선 정렬과 저장 커서 교정

- 월간 수업 달력은 시간순을 유지하면서 같은 시작시각 안에서는 특강·클리닉, 시험 계열, 보충, 휴강, 정규 순으로 표시한다. 같은 유형은 이름과 수업 ID로 결정적으로 정렬해 결석보강 사이에 클리닉이 끼지 않는다.
- 강민준 프로필의 `월금 17:00-19:00`은 운영 학생 원천에 이미 저장되어 있고 화면도 기본정보 변경 없음으로 판정했다. 저장이 계속되는 것처럼 보인 원인은 모든 비활성 `.saveButton`에 `cursor: wait`를 적용한 CSS였다. 변경 없음은 `not-allowed`, 실제 `stickySaveBar-saving`만 `wait`를 사용한다.
- 운영 원천은 읽기 전용으로만 대조했고 프로필·수업·알림 데이터는 변경하지 않았다. 당시 제안한 학생별 월간 일정/출결 제출 기능은 후속 단위에서 구현했다.
- 검증: lesson `20/20`, 전용 달력 모델 fixture, runtime lint, production `827/827`, build `412 modules`·main `944.72 kB`·lazy `12/12`, focused safe browser `2/2`에서 같은 시각 클리닉→가나다순 결석보강 및 비활성/실제 저장 중 커서를 확인했다.

## 2026-08-04 열린 탭 수업일지 저장 실패

- 운영 Chrome 로그에서 이전 main `main-wtA76djX.js`가 배포 뒤 사라진 `lessonJournalRowsSaveAction-DZ2rCAwK.js`를 저장 순간 동적 import해 실패한 것을 확인했다. API 요청 전 실패라 수업기록·숙제 원천은 바뀌지 않았고 화면의 수정본 1건은 유지됐다.
- 수업일지 행 저장 모듈을 앱 시작 시 선행 요청하고 저장 handler는 같은 promise를 사용한다. 배포 교체 전 이미 열린 탭도 모듈을 브라우저에 확보하므로 이후 hash 교체에 영향을 받지 않는다.
- draft가 남은 실패 상태에서도 기존 상세 오류와 변경 건수를 하단 바에 함께 표시한다.
- 검증: lesson domain 20/20, 전용 outcome/view-model fixture, runtime lint, build main 944.72kB·lazy 12/12, safe browser의 저장 모듈 선행 요청→저장 중 후속 수정→재저장·재조회 동선이 통과했다. 첫 Vercel 빌드는 Node 24.15에서 번들 상한을 35바이트 넘어 실패했으며 진단 문구 중복을 걷어 여유를 확보했다.

## 2026-08-04 2학기 중간 누락 보완과 시험정보 행 정리

- 운영 학생 학교·학년과 원본 수기 메모를 대조해 근거가 있으나 빈칸이던 선덕중 중3 `2026-10-14~10-16`, 창북중 중3 `2026-10-19~10-21`을 CAS 저장했다. 활성 재학생 행이 없던 창동고 고1은 같은 학교 학사일정 `2026-10-07~10-14`로 생성했다. 세 행 모두 Supabase 재조회로 확인했고 별도 수학 시험일은 입력하지 않았다.
- 신도봉중·창동중·창일중의 중간 기록은 원본상 중1·2 대상이라 중3에 전용하지 않았고, 용화여고·정의여고는 확인된 기록이 없어 빈칸으로 유지했다.
- 시험정보 표의 `시험 후 총평`과 `관리` 두 열을 `상세` 한 열로 합쳤다. 행에는 `상세 관리` 버튼 하나만 두고, 상세 모달의 하단에서 총평 작성/보기·삭제·닫기를 수행한다.
- 운영 재학생의 `선덕중학교·창동고등학교·창일중학교` 7건을 짧은 이름으로 CAS 저장했다. 시험정보 긴 이름 8행은 같은 고사·학년의 기존 짧은 행과 내용 충돌이 없음을 확인한 뒤 4개 canonical 행에 보존·통합하고 별칭 행을 감사 삭제했다. 재조회 결과 학생·시험정보의 긴 이름은 각각 0건이다.
- 검증: 학생 persistence, 시험정보 전용 fixture, runtime lint, 가상 브라우저에서 반복 열 제거→상세 모달→총평 모달 이동을 확인했다.

## 2026-08-04 보충 상태 안내 하단 고정 바

- 보충관리 학생 상세의 `supplementFeedbackPopup`을 화면 하단 12px·safe-area 기준 고정 바로 바꿨다. 성공·저장 중·실패 상태와 기존 닫기 버튼은 같은 원천을 유지한다.
- 최대 폭은 모달 본문 1120px, 모바일은 좌우 16px이며 긴 문구는 최대 36dvh 안에서 스크롤한다. 중첩 확인 모달보다 아래 z-index에 두어 확인 행동을 가리지 않는다.
- 검증: supplement task action, runtime lint, production `827/827`, build `411 modules`·main `944.80 kB`·lazy `12/12`, 가상 브라우저에서 데스크톱과 390×844 모바일의 fixed 위치·가로 경계를 통과했다.

## 2026-08-04 시험정보 재학생 행 보존과 미확인 날짜 분리

- 시험관리 `시험정보`의 `전체 반`은 활성 학생의 학교·학년 행을 반 구분 없이 보여 준다. 반·고사를 바꿀 때 누락된 재학생 학교 행을 다시 만들도록 연결을 복구했다.
- 학생 DB에서 행을 만들 때 시험기간을 기본 고사 기간으로 채우지 않으며, 빈 시험기간을 나중에 일괄 보정하던 effect도 제거했다. 행의 존재와 확인된 시험 날짜를 분리한다.
- 앞선 정리에서 날짜만 비워야 할 미확인 자동생성 행 12건을 잘못 삭제한 사실을 사용자 확인으로 바로잡았다. 같은 ID·학교·학년·고사 행을 복구하고 시험기간·수학 시험일만 빈칸으로 유지하며, 확인된 일정 11건은 보존한다.
- 검증: 시험정보 전용 fixture, runtime lint, production `827/827`, build `411 modules`·main `944.80 kB`·lazy `12/12`, 가상 브라우저에서 `전체 반 → 재학생 중학교 행 표시 → 미입력 날짜 유지 → API 재조회`를 통과했다.

## 2026-08-04 학생별 오답 명시 저장

- `wrongProblems`를 공용 `app_state` 500ms 자동저장 11개 key에서 분리했다. 오답관리에서 local draft를 수정한 뒤 `학생별 오답 저장`을 눌러야 `updated_at` CAS와 Supabase 재조회 대조를 수행하며, 충돌·실패 입력은 화면에 유지한다.
- 저장 요청 중 들어온 후속 수정은 첫 저장 완료로 덮지 않고 `변경됨`으로 되돌려 두 번째 명시 저장을 요구한다. 가상 API/browser가 자동저장 부재, 첫 snapshot 분리, 후속 저장, 새로고침 지속성을 검증한다.
- 검증: runtime lint, 명시 저장·app_state·teacher boundary, scenario·production `827/827`, build `410 modules`·main `944.86 kB`·lazy `12/12`, Worktree 격리 safe browser `42/42` 통과. 운영 데이터·알림·SQL·유료 AI는 사용하지 않았다.

## 2026-08-04 P3-4 알림톡 template 종료 감사

- `test-notification-template-closeout.mjs`가 출결·수업일지·숙제보충·결석보강·일정 확정/변경·당일 11시·재시험·일반 공지·특강 9개 경로의 seed→draft→persisted human final→provider 변수 계약을 실제 pure builder와 source boundary로 대조한다.
- 설정 key 10개와 provider template 4개를 exact set으로 고정했다. 숙제/결석보강만 독립 11시 job 대상이고 재시험은 연결 수업의 schedule line만 사용하는 현재 범위를 유지한다. 런타임 코드·실제 알림 행동은 변경하지 않았다.
- 검증: runtime lint, notification `11/11`, closeout, `check:fast` scenario `827/827`, production `827/827`, build `410 modules`·main `943.65 kB`·lazy `12/12`, Worktree 격리 safe browser `41/41` 통과. P3를 닫고 4차 리팩터링은 자동 시작하지 않는다.

## 2026-08-03 P3-3b 알림톡 Settings seed 확장

- 일반 공지 preset 3개와 특강 guide seed를 기존 `app_state.aiSettings.notificationTemplates`에 연결했다. 설정값은 preset 선택·guide preview/발송 준비 시 새 local draft에만 복사되며 현재 composer draft·기존 notification job·`makeup_tasks` 교사 최종본을 재생성하지 않는다.
- 재시험 11시 항목은 만들지 않았고 provider template ID·승인 변수·실제 발송/예약 callback은 변경하지 않았다. Settings 전용 10개 행 metadata를 lazy Settings chunk로 분리해 main budget을 상향하지 않았다. safe API의 `app_state` 모형도 key별 `updated_at` CAS·재조회 응답을 갖춰 설정 저장과 새로고침 지속성을 실제 계약대로 검증한다.
- 검증: runtime lint, notification `10/10`, teacher runtime 경계, `check:fast` scenario `827/827`, production `827/827`, build `410 modules`·main `943.65 kB`·lazy `12/12`, Worktree 격리 safe browser `41/41` 통과. 운영 데이터·실제 알림 발송/예약/취소는 사용하지 않았다.
- 다음 독립 단위는 9개 제품 경로의 seed→draft→persisted final→provider variables를 P3-4 fixture·safe browser로 종료 감사한다.

## 2026-08-03 P3-3a 알림톡 template transport 계약

- 일반 공지 preset 4개와 특강 guide는 composer local draft의 seed이며, 즉시/예약 행동 시점의 교사 최종 `noticeText`가 notification job의 `commentBodyOverride/message/previewBody`와 live renderer 원천이 됨을 동작 fixture로 고정했다.
- 특강은 전용 provider template 설정 시 이를 사용하고 미설정이면 학생 comment·학부모 daily report template으로 fallback한다. provider ID·변수와 OS seed는 별도 원천으로 유지한다.
- 재시험은 `makeup_tasks.notificationDraft`로 저장할 수 있지만 숙제·결석보강과 달리 독립 학생 11시 job 대상이 아니며, 연결 수업의 수업일지 schedule line으로만 전달된다. 실제 transport가 생기기 전에 재시험 11시 Settings 항목을 노출하지 않는다.
- 검증: runtime lint, notification `10/10`, 전용 transport fixture, `check:fast` scenario `827/827`, build `409 modules`·main `944.94 kB`·lazy `12/12`, production `827/827`을 통과했다. 실제 API·알림 발송·예약·취소·운영 데이터는 사용하지 않았다.
- 다음 독립 단위는 일반 공지 preset 3개와 특강 guide seed만 catalog/Settings에 연결하고 기존 local/persisted human final을 보존한다.

## 2026-08-03 P3-2 알림톡 preview/live renderer 경계

- 출결 `buildAttendanceBody`와 수업일지 `buildLessonNotificationBody`를 import 없는 pure notification domain에 두고 App 설정·수업일지 미리보기, 발송 직전 server 미리보기, Solapi route 실제 body가 같은 renderer를 사용하게 했다. 사용되지 않던 App 출결 formatter는 제거했다.
- provider template ID·수신자·예약/즉시발송 callback은 이동하지 않았다. API route는 raw 과제 상태와 server 전용 미완료·재시험 블록만 기존 의미로 조립하고, persisted 교사 코멘트·공지 human final override는 계속 우선한다.
- build 예산 초과를 상향으로 덮지 않고 App의 중복 normalize/line/block/attendance helper를 renderer로 합쳤다. 전용 fixture는 출결 2종, 학부모·학생 preview/live 동일성, 미기재 숙제 생략, 공지 human final 보존을 고정한다.
- 검증: runtime lint, lesson `20/20`, notification `9/9`, scenario·production `827/827`, build `409 modules`·main `944.94 kB`·lazy `12/12`, Worktree 격리 safe browser `40/40`을 통과했다. 운영 데이터·실제 알림 발송/예약/취소는 사용하지 않았다.

## 2026-08-03 P3-1 알림톡 template catalog 경계

- App 내부의 알림 default 6개, Settings metadata, legacy 일정 문구 변환, normalize를 import 없는 `notificationTemplateCatalog.js`로 옮겼다. 문자열과 key 순서는 그대로다.
- Settings runtime surface는 같은 함수 identity를 계속 주입한다. API server의 수업일지 숙제 follow-up 두 기본값도 중복 문자열 대신 catalog 값을 읽으며, configured `app_state.aiSettings.notificationTemplates` 우선순위는 유지한다.
- 전용 fixture는 default 6개, legacy 변환 2개, 빈 교사 입력 보존, 알 수 없는 key 제외를 고정한다. persisted `makeup_tasks` 최종본·notification job·provider callback은 변경하지 않았고 실제 발송·예약·취소는 실행하지 않았다.
- 검증: runtime lint, notification `8/8`, teacher runtime 경계, catalog·inventory, `check:fast` scenario `827/827`, build `408 modules`·main `944.35 kB`·lazy `12/12`, production `827/827`을 통과했다.

## 2026-08-03 P3-0 알림톡 문구 원천 inventory

- 출결·수업일지·숙제보충·결석보강·재시험·공지·특강·일정 변경·당일 11시 reminder를 provider contract, OS composition, human final, transport로 나눠 대조했다.
- 현재 Settings가 관리하는 key는 6개이며 숙제/결석보강 11시와 일정 확정·변경은 교사 최종본 저장 뒤 job에 전달된다. 출결·수업 리포트 구조·공지 preset·특강 guide·재시험 fallback은 코드에 남아 있다.
- 수업일지 client preview/server live 조립 분리와 재시험 독립 reminder 미연결을 먼저 고정했다. 다음 P3-1은 기존 6개 catalog만 pure domain으로 이동하며 실제 발송·예약·취소는 실행하지 않는다.
- 검증: runtime lint, notification `7/7`, inventory, `check:fast` scenario `827/827`, build `407 modules`·main `944.34 kB`·lazy `12/12`, production `827/827`을 통과했다. 런타임 UI와 provider 행동은 변경하지 않았다.

## 2026-08-03 P2-4 modal 저장 상태 감사

- dialog 41개의 DB/API 저장 표시를 `idle/dirty/saving/verifying/saved/failed`와 대조했다. 공통 상태를 잘못 전달하는 표면은 없어 런타임 동작은 변경하지 않았다.
- Solapi provider orchestration, 보충 일정의 source/provider 복합 결과, 시험분석 process 결과는 DB 저장 완료와 의미가 달라 기존 분리 표시를 유지한다.
- 자동 감사는 공통 상태·복합 예외 3종·본문 작업 바 2개를 고정한다. P2는 공통 shell 41/41, bespoke 0, 공통 footer 15개로 닫고 다음 P3 알림톡 문구 원천 inventory로 이동한다. 실제 발송·예약은 실행하지 않는다.
- 검증: runtime lint, domain `56/56`, modal inventory, modal 상태 감사, `check:fast` scenario `827/827`, build `407 modules`·main `944.34 kB`·lazy `12/12`, production `827/827`을 통과했다. 런타임 UI 변경이 없어 전체 safe browser는 exact-head CI gate에서 실행한다.

## 2026-08-03 P2-3d 월 정규수업 열기 footer

- `MonthlyRegularLessonOpenModal`의 `닫기`·월 정규수업 열기 wrapper만 공통 `ModalFooter`로 옮겼다. `isSaving` 잠금, `canOpen`, callback과 문구는 그대로다.
- App의 additive bulk 생성, 45초 timeout, 응답 불명 뒤 Supabase 재조회, 기존 회차·출결·숙제·알림 미복사 계약은 변경하지 않았다.
- 안전 브라우저는 빈 다음 달 확인창을 열고 닫기만 하며 수업 생성은 실행하지 않는다.
- 공통 footer 15개다. 남은 action wrapper 2개는 보충 상세 내부 작업 바로 유지하며 P2-3을 닫고 P2-4 저장 상태 대조로 이동한다.

## 2026-08-03 P2-3c 수업일지 내부 보충 완료 확인 footer

- `LessonNestedPanels`의 보충 완료/추가 보충 확인창 버튼 wrapper만 공통 `ModalFooter`로 옮겼다.
- 취소와 `confirmPassTask` callback, local 진행 메모·추가 계획 payload, `isPassSaving` 버튼/닫기 잠금, 성공·실패 후 draft 상태는 변경하지 않았다.
- 전용 nested panel 경계 검사가 footer·두 callback과 App-owned persistence 주입을 함께 고정한다. safe 전체 browser는 운영 동작 없이 실행한다.
- 현재 공통 footer 14개, 기존 action wrapper 3개다. 다음은 월 정규수업 열기 footer다.

## 2026-08-03 P2-3b 보충 일정 변경 확인 footer

- `SupplementScheduleChangeConfirmModal`의 `취소`·`일정만 저장`·`다음 정각 예약 및 11시 갱신` wrapper만 공통 `ModalFooter`로 옮겼다.
- local 변경 내용/사유 draft 생성과 두 확인 callback의 patch payload, `isBusy` 잠금, 문구·순서는 변경하지 않았다. 일정 원천 저장과 provider 결과 분리도 기존 controller/App owner에 남아 있다.
- 안전 브라우저는 가상 일정의 최신 원천 저장을 먼저 검증한 뒤 변경 확인창을 열고 `취소`만 실행하며, 추가 저장·알림 예약은 호출하지 않는다.
- 현재 공통 footer 13개, 기존 action wrapper 4개다. 다음은 수업일지 내부 보충 완료 확인 footer다.

## 2026-08-03 P2-3a 보충 완료 확인 footer

- `SupplementPassConfirmModal`의 `취소`·`보충 완료 처리` wrapper만 공통 `ModalFooter`로 옮겼다. 버튼 순서·문구·`isBusy` 잠금과 두 callback identity는 그대로다.
- 확인 callback은 App에서 보충 항목을 저장한 뒤 학생 11시 Solapi 예약 취소까지 조립하므로 shell에 상태나 side effect를 새로 넣지 않았다.
- 안전 브라우저는 연결 원천이 깨진 가상 fixture에서 확인창을 열고 공통 footer의 `취소`만 실행한다. 실제 보충 저장·알림 예약 취소는 실행하지 않았다.
- 현재 공통 footer 12개, 기존 action wrapper 5개다. 다음은 보충 일정 변경 확인 footer를 별도 단위로 검토한다.

## 2026-08-03 P2-2 Solapi 제어창 공통 shell

- 유일한 bespoke dialog였던 `SupplementNotificationControlModal`을 공통 `Modal`/`ModalFooter`로 옮겼다. 공통 shell에 기본 `창 닫기`를 유지하는 opt-in `closeAriaLabel`을 추가해 기존 `알림 제어 닫기` 이름을 보존했다.
- `isBusy`는 공통 X/Escape와 footer/카드 버튼을 계속 잠근다. 3개 카드, Academy OS/Solapi 참조 대조, 개별 예약, 취소 가능 예약 일괄 취소 callback identity와 feedback 순서는 변경하지 않았다.
- custom wide/max-height/safe-area CSS class는 같은 element에 유지했다. 안전 브라우저는 연결 원천이 깨져 provider 행동이 차단된 fixture에서 390×844 안에 dialog가 들어오고 하단 닫기로 종료되는 경로만 실행한다.
- 현재 dialog는 공통 shell 41/41, 공통 footer 11개, 기존 action wrapper 6개다. 실제 Solapi 예약·취소는 실행하지 않았다.

## 2026-08-03 P2-1 ReportModal footer

- `ReportModal`의 `스냅샷 저장`·`모의 발송` 버튼 wrapper만 공통 `ModalFooter`로 교체했다. 버튼 DOM 순서·문구·saving disabled·callback identity와 전용 인증/CAS/재조회 action은 변경하지 않았다.
- 실제 알림은 없고 `모의 발송`도 `mock_sent` snapshot만 저장한다. 공통 footer는 10개, 기존 `modalActions` wrapper는 7개가 됐다.
- 다음 P2-2는 Solapi 제어창의 bespoke dialog shell만 다룬다. 실제 예약·취소 callback과 provider 결과 상태는 그대로 둔다.

## 2026-08-03 P2 modal follow-up inventory

- 최신 main의 dialog 41개를 다시 대조했다. 공통 `Modal` 직접 사용 34개와 App→TeacherViewOutlet 주입 6개는 같은 shell이며, bespoke `role=dialog` 예외는 보충 Solapi 예약·취소 제어창 1개다.
- 공통 `ModalFooter`는 9개, 기존 `modalActions` wrapper는 8개다. 8개 중 `SupplementTaskActionBar`와 보충 상세 split action은 본문 문맥의 다중 행동이므로 footer로 일괄 치환하지 않는다. 저장·재조회·provider 결과가 결합된 확인창도 한 화면씩 분리한다.
- 공통 상태는 `idle/dirty/saving/verifying/saved/failed` 여섯 개다. source 저장 성공+provider 실패처럼 복합 결과는 단일 실패 상태로 축약하지 않는 원칙을 유지한다. 전용 inventory fixture가 shell 예외·주입 identity·상태 vocabulary·Solapi 화면 callback-only 경계를 고정한다.
- P2-1은 실제 알림이 없는 `ReportModal` action wrapper의 footer 공통화다. P2-2에서만 Solapi 제어창의 bespoke shell을 바꾸며 실제 예약·취소는 실행하지 않는다.

## 2026-08-03 보고서 snapshot 명시 저장 신뢰성

- 보고서 snapshot을 11개 공용 `app_state` 자동저장 묶음에서 분리했다. 전용 API는 교사 bearer를 확인하고 최신 `reportSnapshots`와 row version을 읽어 CAS append한 뒤 Supabase 재조회에서 신규 snapshot과 기존 ID 보존을 모두 확인한다. 서버 확인 전에는 App 목록과 완료 표시를 바꾸지 않는다.
- 저장 요청은 student·lesson·status별 single-flight와 stable report ID를 사용한다. 응답 유실 뒤 같은 내용 재시도는 이미 저장된 한 건을 회수하고, 같은 ID의 다른 내용·CAS 충돌·재조회 불일치에서는 modal draft를 유지한 채 실패를 표시한다. 저장 중 닫기·중복 행동은 잠그며 `모의 발송`은 실제 알림 없이 `mock_sent` snapshot만 저장한다.
- 모달과 저장 action을 필요할 때만 동적 로드해 main chunk 예산을 유지했다. 안전 fixture는 무인증 401, 최초 저장, 동일 ID 복구, app-state 재조회를 검증한다. 검증: lesson `20/20`, runtime lint, `check:fast`, production `827/827`, build `407 modules`·main `944.35 kB`·lazy `12/12`, 전체 safe browser `40/40`. 운영 Supabase·실제 알림·SQL·유료 호출은 사용하지 않았다.
- P1 저장 신뢰성 목록을 닫고 다음 독립 단계는 P2 modal inventory다. inventory에서는 화면 조립만 분류하고 저장·출결·알림 원천 변경을 섞지 않는다.

## 2026-08-03 자료함 private Storage 저장 신뢰성

- 선택한 PDF·이미지·문서 파일은 20MB 제한을 확인한 뒤 private `resource-materials` bucket의 `stable material ID / createdAt token / content hash` 경로에 저장한다. DB에는 직접 공개 URL이 아니라 Storage 참조만 기록하며, 같은 응답 유실 재시도는 같은 객체·row로 수렴하고 파일 내용 변경은 새 해시 경로로 분리된다.
- 파일 업로드 뒤 메타데이터 row 저장이 실패하면 새 객체를 삭제한다. 자료 삭제는 현재 파일을 메모리에 백업하고 Storage 객체를 지운 뒤 `updated_at` CAS로 row를 삭제하며, CAS 충돌·row 실패에서는 같은 경로·content type으로 파일을 복구한다. 복구마저 실패하는 경우에는 자동 성공으로 숨기지 않고 전용 부분실패 코드와 관리자 확인 문구를 반환한다.
- 파일 열기는 교사 bearer 또는 해당 학생·학부모 bearer를 서버에서 검증하고 자료 공개 범위·개별 학생·반 범위를 다시 확인한 뒤에만 서명 URL을 발급한다. 학생/학부모 portal payload도 같은 범위로 서버에서 제한하며 외부 링크 역시 인증된 open endpoint를 거친다.
- Vercel Preview에서 신규 `api/domain` 파일이 Hobby의 Serverless Function 12개 한도를 넘기는 문제를 확인했다. 순수 저장 조립을 `src/domains/resources/resourceMaterialStorageOperation.js`로 옮기고 `api/**/*.js` 개수를 12 이하로 고정하는 production inventory를 추가했다.
- 검증: Storage 전용 upload/cleanup/delete rollback/access fixture, lesson `19/19`, runtime lint, teacher owner audit, `check:fast`, scenario·production `827/827`, build `403 modules`·main `945.00 kB 이하`·lazy `12/12`, 집중 browser `2/2`, 전체 safe browser `39/39`. 운영 Supabase·Storage·실제 알림·SQL·유료 호출은 사용하지 않았다.

## 2026-08-03 자료함 메타데이터 저장 신뢰성

- 자료 등록 시 UI가 먼저 행을 추가하던 경계를 제거했다. 화면 초안에서 stable `materialId`와 `createdAt` 생성 토큰을 만들고 서버는 신규 행만 insert한다. 응답 유실 뒤 같은 초안을 수정해 재시도하면 저장된 첫 행을 생성 토큰으로 회수하고 그 `updated_at`에 최신 초안을 CAS 반영한다. 생성 토큰이 다른 중복 ID는 409로 막는다.
- 삭제는 현재 `updated_at`을 기대 버전으로 보내 CAS 삭제한다. 등록·삭제 모두 API 내부 readback과 App의 전체 목록 재조회를 통과한 뒤에만 화면 원천을 교체하며, 저장 중에는 폼과 삭제를 잠그고 실패·충돌에서는 초안과 기존 행을 유지한다.
- 새 초안은 `변경됨`, 서버 확인 중·완료·실패는 각각 별도 상태로 표시한다. 현재 파일 선택은 이름만 메타데이터로 저장하고 파일 내용은 업로드하지 않는다는 안내를 추가해 다음 Storage 단위와 제품 의미를 분리했다. 실제 알림은 실행하지 않는다.
- 초기 main 번들이 945,000 byte 예산을 165 byte 넘은 것을 확인해 save/delete 조립을 `resourceMaterialAction` 동적 경계로 옮겼다. 예산을 올리지 않고 build를 `402 modules`·main `944.43 kB`·lazy `12/12`로 회복했다.
- 검증: 전용 insert-only/CAS/readback/최신 초안 수렴 fixture, lesson `18/18`, runtime lint, scenario·production `826/826`, build, 집중 browser `1/1`, 전체 safe browser `38/38`. 브라우저는 첫 저장을 서버에 반영한 뒤 응답만 유실시키고 초안을 수정해 같은 ID 한 행의 최신값으로 수렴하는 경로를 포함한다. 운영 데이터·실제 알림·Storage·SQL·유료 호출은 사용하지 않았다.

## 2026-08-03 결석보강·정규수업 연속 출결

- 같은 학생·같은 날짜에 결석보강 바로 다음 정규수업이 30분 이내로 이어질 때 하나의 실제 방문으로 묶는다. 중간에 다른 수업이 있거나 31분 이상 떨어진 일정, 숙제보충·특강은 자동으로 묶지 않는다.
- 보강 등원 한 번으로 두 `lesson_student_records`를 기존 versioned rows plan에 함께 저장하고 Supabase 재조회가 두 행 모두 일치해야 완료한다. 같은 등원시각을 사용하되 보강/정규 시작시각별 지각 상태는 따로 계산한다. 마지막 정규수업 하원 한 번으로 두 행의 최종 하원시각을 함께 저장하며 출결 이벤트·알림 큐는 최초 등원과 최종 하원 각각 한 건만 만든다.
- 키오스크 확인 모달은 묶이는 두 수업과 알림 처리 방식을 미리 표시한다. 가상 브라우저는 두 일지의 등원·하원시각, 보강 지각/정규 출석, 이벤트 `checkin` 1건 뒤 `checkout` 1건 누적을 검증한다. 운영 데이터와 실제 알림은 사용하지 않았다.
- 검증: lesson `17/17`, 출결 전용 fixture 전체, runtime lint, `check:fast`, scenario·production `825/825`, build `399 modules`·main `943.52 kB`·lazy `12/12`, 집중 browser `2/2`, 전체 safe browser `37/37`.

## 2026-08-03 교사 숙제 확인 상태 versioned 저장

- `숙제현황`의 교사 확인 select가 App state를 먼저 바꾸고 `/api/homeworks` 실패를 console에만 남기던 경계를 제거했다. 기존 `/api/lesson-journal/rows/save` 계획을 재사용해 현재 숙제 행을 before로 캡처하고 `updated_at` CAS·Supabase 재조회가 일치한 뒤에만 `homeworks` 원천을 교체한다.
- 행별 single-flight와 saving/saved/failed 상태를 표시한다. 응답 전에는 select가 이전 원천값을 유지하며, 409·검증 실패에서도 그 값을 보존해 교사가 다시 저장할 수 있다. 성공 결과는 새로고침 뒤에도 같은 서버 원천에서 복구된다.
- 학생 포털의 숙제 완료·질문·시험 제출은 기존 학생 인증 범위와 서버 readback 계약을 재확인해 변경하지 않았다. 사용자가 직접 해결한 `확인할 숙제` 요청의 닫힌 PR #54는 중복 통합하지 않는다. 다음 독립 단위는 자료함과 보고서 저장 계약이다.
- 검증: lesson `16/16`, 전용 TARGET/CONTROL fixture, runtime lint, `check:fast`, scenario·production `824/824`, build `399 modules`·main `943.16 kB`·lazy `12/12`, 전체 safe browser `36/36`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.

## 2026-08-03 결석보강 수업일지 통일 + 보충 일정 versioned 저장

- 결석보강 연결 수업을 별도 2열 `결석 보강 일정` 상세 대신 일반 `수업일지` shell과 `LessonJournalDetail`로 연다. 출결·교재·수업내용·지난/새 숙제·코멘트·수정/저장·알림 표시 방식은 일반 수업과 동일하고, 헤더 아래에 원 결석 수업의 날짜·반·시간·결석 사유만 읽기 전용 notice로 추가한다. 숙제보충 전용 상세는 유지한다.

- 보충 일정 생성·변경의 `lessons`와 `makeup_tasks` 저장을 `/api/supplement-schedules/save` 단일 계획으로 묶었다. 신규는 insert-only, 기존은 각 `updated_at` CAS를 사용하고 두 원천을 Supabase에서 다시 읽어 모두 일치한 뒤에만 App state를 갱신한다.
- 첫 원천 저장 뒤 두 번째 원천이 실패하면 정확한 저장 version으로 역순 보상한다. 보상 중 더 최신 변경을 만나면 덮어쓰지 않고 `SUPPLEMENT_SCHEDULE_PARTIAL_FAILURE`와 audit를 반환한다. 브라우저 또는 Supabase 응답 유실 뒤 같은 logical task의 날짜·시간·메모가 바뀌면 최초 audit를 먼저 회수하고, 확인된 새 version을 before로 최신 draft를 후속 CAS 저장한다.
- 원천 대조·계획 생성·재시도 action과 저장 성공 뒤 알림 적용은 실제 보충 일정 저장 때만 동적 로드한다. provider가 throw하거나 실패 상태를 반환하면 lesson/task는 `saved`, 알림만 `failed`, 재시도 범위는 `provider`로 표시해 전체 일정 저장 실패로 오인하지 않는다. 첫 exact preview에서 Vercel Node의 초기 main이 예산을 52 bytes 초과한 것을 확인해 알림 적용만 별도 lazy chunk로 옮겼고 예산은 올리지 않았다.
- 최신 main 결합 검증: lesson `15/15`, supplement `10/10`, runtime lint, production `823/823`, build `398 modules`·main `942.19 kB`·lazy `12/12`, 집중 browser `1/1`, 전체 safe browser `35/35`. 저장 callback 응답 유실·후속 CAS·provider 실패 분리와 결석보강 일반 수업일지 표시를 같은 branch에서 확인했다. 실제 Solapi 행동은 실행하지 않았다.

## 2026-08-03 보충·알림 다중 원천 읽기/판정 reconcile

- `makeup_tasks`의 정방향 `linkedLessonId`, `lessons`의 역방향 `sourceMakeupTaskId`, 연결 일정, 해당 task의 미발송 `notification_jobs`를 한 pure model에서 판정한다. 정상·기존 ID 연결·일정 변경 대기와 수업 누락·task 링크 누락/오래됨·중복 수업·다른 원천·예상 밖 일정 불일치·이전 일정 예약 잔존을 구분한다.
- 기존에는 연결 ID 문자열만 있으면 실제 수업 행이 없어도 `수업일지 반영 완료`와 일정 변경/알림 예약 행동을 노출했다. 이제 목록·상세에서 원인을 표시하고 불일치 상태의 일정 저장과 새 예약을 차단한다. 기존 예약 조회·취소는 사람이 상태를 확인할 수 있도록 유지하며 자동 수업/보충 수정과 Solapi 행동은 추가하지 않았다.
- 검증: reconcile/card/control fixture, supplement `8/8`, notification `7/7`, runtime lint, `check:fast`, scenario·production `823/823`, build `394 modules`·main `944.45 kB`·lazy `12/12`, Worktree 격리 safe browser 재실행 `33/33`. 첫 전체 브라우저의 기존 Tally 앱 기동 전 흰 화면 timeout은 단독·전체 재실행에서 재현되지 않았다.
- 다음 독립 단위는 검증된 원천 판정을 입력으로 `lessons`와 `makeup_tasks` 일정 저장을 versioned CAS·재조회·중간 실패 복구로 묶고, 저장 성공 뒤 provider 단계와 명확히 분리하는 것이다. 실제 알림 예약·취소·발송은 테스트하지 않는다.

## 2026-08-03 수업일지 등원보충 stable request identity gate

- 수업일지에서 새 등원보충 초안을 저장할 때 클릭 시각으로 매번 새 ID를 만들던 경계를 학생·원 숙제·task 유형 기반의 stable ID로 바꿨다. 전용 `/api/lesson-journal/makeup-tasks/save`는 신규 task를 insert-only, 기존 task를 `updated_at` CAS로 저장하고 Supabase 재조회 내용이 일치해야 `verified` 완료를 반환한다.
- 서버 반영 뒤 응답만 유실되면 같은 논리 요청과 ID를 재조회해 추가 쓰기 없이 성공으로 회수한다. 기존 task 변경 응답 유실도 재조회로 복구하고, 다른 화면의 더 최신 내용이나 같은 ID의 다른 원천은 409로 차단해 수업일지 전체 draft를 유지한다. 수업기록·숙제 row gate와 보충 stage의 분리는 유지했다.
- 검증: stable ID/insert/CAS/응답 유실/충돌 Supabase REST fixture, lesson `15/15`, runtime lint, `check:fast`, scenario·production `823/823`, build `393 modules`·main `944.45 kB`·lazy `12/12`, Worktree 격리 safe browser `32/32`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 독립 단위는 `makeup_tasks`·연결 `lessons`·`notification_jobs`의 읽기/판정 reconcile과 미연결·오작동 버튼 inventory다. 실제 Solapi 행동은 계속 사람 gate다.

## 2026-08-03 수업일지 기록·숙제 다중 행 저장 gate

- 수업일지 변경 저장에서 따로 실행되던 숙제 bulk와 수업기록 bulk를 `/api/lesson-journal/rows/save`의 한 versioned plan으로 묶었다. 화면의 현재 Supabase 행을 `before` 버전으로 캡처하고 기존 행은 `updated_at` CAS, 신규 행은 insert-only로 저장하며, 모든 행을 재조회해 내용과 새 버전을 확인한 뒤에만 App ref·화면·로컬 기록 cache를 갱신한다.
- 같은 저장의 응답만 유실된 재시도는 원하는 값이 이미 같으면 mutation 없이 성공한다. 중간 충돌·검증 실패는 이미 반영한 기록과 숙제를 역순으로 원래 값·timestamp까지 보상한다. 보상 전에 다른 화면이 더 최신 행을 썼으면 그 행을 덮지 않고 `LESSON_JOURNAL_ROWS_PARTIAL_FAILURE`로 남긴다.
- 저장 중 후속 입력과 409 충돌에서는 현재 draft를 유지한다. 기록·숙제 저장이 끝난 뒤 별도 등원보충 저장만 실패한 경우 이미 검증된 수업기록 save state를 실패로 되돌리지 않는다. 등원보충 요청 ID의 결과 불명 재시도는 다음 독립 단위에서 다룬다.
- 검증: 전용 pure/action/Supabase REST·rollback fixture, lesson `14/14`, runtime lint, `check:fast`, production `823/823`, build `392 modules`·main `944.10 kB`·lazy `12/12`, 격리 safe browser `31/31`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.

## 2026-08-03 수업 복사·취소·되돌리기 저장 gate

- 달력의 복사·취소·복구·복사 되돌리기를 각각 독립 fire-and-forget 요청과 낙관적 UI 변경으로 처리하던 흐름을 하나의 `/api/lesson-journal/history-action` plan으로 바꿨다. 서버의 CAS/insert-only·행별 Supabase 재조회가 모두 확인된 뒤에만 달력·숙제·undo stack을 갱신한다.
- 복사 중 응답만 유실돼도 동적 action 모듈이 최초 lesson ID와 숙제 계획을 보존해 같은 계획으로 재시도한다. 중간 실패는 생성/삭제 순서의 반대로 직접 원천을 보상하고 원래 timestamp까지 대조한다. 복사 후 새 record·예상 밖 homework·notification job이 생겼으면 undo를 차단한다.
- 취소 실패에서는 확인 모달과 원본을 유지한다. 취소 복구는 기존 bundle을 서버에 다시 쓰지 않고 현재 Supabase의 연결 record·homework를 재조회해 화면만 복원하므로, 취소 기간 중 다른 원천 변경을 덮어쓰지 않는다. 실제 알림 예약·취소는 이 행동에 추가하지 않았다.
- 검증: 전용 pure/action/Supabase REST·rollback fixture, lesson `13/13`, runtime lint, `check:fast`, scenario·production `823/823`, build `392 modules`·main `944.90 kB`·lazy `12/12`, Worktree 격리 safe browser `30/30`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 독립 단위는 수업일지 record·homework 다중 행 저장의 행별 CAS·부분성공 복구다.

## 2026-08-03 학사일정 파생 시험행·직전수업 저장 gate

- 시험관리에서 파생되는 시험기간·수학시험 생성/수정/삭제를 기존 다중 fire-and-forget 요청 대신 `exam_prep_rows`와 연결 `preExam lessons`의 단일 versioned plan으로 바꿨다. 브라우저는 하나의 callback만 기다리고 Supabase verified 응답 전에는 모달·draft를 유지한다.
- 서버는 시험행과 직전수업에 `updated_at` CAS·insert-only·변경 직후 재조회를 적용한다. 중간 실패는 이미 반영된 직접 원천을 역순 보상해 원래 내용과 timestamp를 다시 대조하며, 응답 유실 뒤 같은 audit 요청은 중복 mutation 없이 verified 성공으로 복구한다.
- 수동 보호·자동생성 제외 수업의 자동 변경을 차단하고, 연결 record·homework·notification job이 있는 수업 삭제와 연결 원천이 있는 학생 명단 제거를 막았다. 실제 provider 취소나 알림 예약은 이 행동에서 실행하지 않는다.
- 검증: 전용 pure/action/Supabase REST·rollback fixture, lesson `12/12`, runtime lint, `check:fast`, scenario·production `823/823`, build `390 modules`·main `944.84 kB`·lazy `12/12`, Worktree 격리 safe browser `28/28`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 독립 단위는 수업일지 다중 행·복사·되돌리기의 `lessons`·학생 기록·숙제 원천 저장 계약이다.

## 2026-08-03 수동 학사일정 저장·삭제 gate

- 수동 `school_events` 신규 저장은 고정 ID insert-only, 수정·삭제는 일정별 `updated_at` CAS로 바꿨다. 서버는 저장/삭제 직후 Supabase 단일 행을 재조회하고, App도 전체 일정 원천을 no-store GET으로 다시 대조한 뒤에만 화면 목록을 교체한다.
- 저장 응답이 유실돼도 같은 form ID와 입력으로 재시도하면 이미 저장된 동일 행을 verified 성공으로 복구한다. 다른 내용의 같은 ID, 다른 화면의 선변경·삭제는 409로 막고 자동 병합하지 않는다. 저장 중 form·날짜 모달 입력과 닫기를 잠그며 실패·충돌에서는 draft와 모달을 유지한다.
- 학사일정 저장 모듈은 행동 시점에 lazy load해 3-7 초기 main 예산을 유지했다. 검증: lesson `11/11`, runtime lint, `check:fast`, scenario·production `823/823`, build `388 modules`·main `944.93 kB`·lazy `12/12`, Worktree 격리 safe browser `27/27`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 시험관리 연동 일정의 `exam_prep_rows`+파생 `lessons` orchestration은 변경하지 않았다. 다음 독립 단위에서 version·재조회·부분실패 복구를 함께 다룬다.

## 2026-08-03 학생 반 배정·미래 수업 명단 저장 gate

- 학생 추가·목록/프로필 반 이동·Tally 등록·반관리·퇴원이 함께 바꾸는 `students.default_class_template_id/status`와 미래 `lessons.student_ids`를 하나의 명시적 save plan으로 묶었다. 각 기존 행은 `updated_at` CAS, 신규 학생은 insert-only를 사용하고 두 원천을 Supabase에서 다시 읽어 계획과 일치할 때만 화면 상태를 교체한다.
- 직접 원천 저장 중 충돌·검증 실패가 나면 이미 반영된 수업과 학생을 역순 보상하고 원래 timestamp까지 재조회한다. 결과 불명·cleanup 실패는 입력과 모달을 유지하며 동일 audit 흐름으로 안전하게 재시도할 수 있다. 새 학생 모달은 첫 시도 ID를 고정해 timeout 재시도가 중복 학생을 만들지 않는다.
- 미래 수업 명단 계산은 변경 학생의 이전/다음 반에만 적용하고 과거 수업, 취소 수업, 변경 대상 밖 수동 명단을 보존한다. 학생명 가나다 정렬은 실제로 변경한 수업에만 적용한다.
- 검증: class-roster Supabase REST/rollback fixture, student domain `13/13`, runtime lint, `check:fast`, scenario·production `823/823`, build `386 modules`·main `944.91 kB`·lazy `12/12`, Worktree 격리 safe browser `26/26`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 독립 단위는 학사일정 파생 저장과 수업일지 다중 행·복사·되돌리기 저장 gate다.

## 2026-08-03 개별 학생 저장 CAS·Supabase 재조회

- `students.updated_at`을 화면 모델에 노출하고 신규 학생은 insert-only, 기존 학생은 ID+기대 버전 PATCH로 저장한다. 신규 수동 등록·특강 전용 등록·Tally 신규 등록은 중복 ID/로그인을 409로 막고, 목록 행·프로필·Tally/특강 기존 학생 반영·퇴원 취소는 오래된 화면 버전의 덮어쓰기를 차단한다.
- API는 저장 직후 해당 학생을 Supabase에서 다시 읽어 전체 persisted 필드와 새 timestamp가 일치할 때만 `verified: true`를 반환한다. local sample이나 결과 불명 응답은 완료로 처리하지 않는다.
- 목록 행과 프로필은 저장 중 후속 입력 revision을 감지한다. `A 저장 -> 요청 중 B 입력 -> A 성공`이면 A의 새 `updated_at`만 B에 재기준화하고 B draft·편집 모드를 유지해 두 번째 저장을 요구한다. 신규 저장 실패·충돌은 모달과 form을 유지하고 저장 중 닫기·탭 전환을 막는다.
- Supabase REST 모형과 안전 API/browser에서 정상 CAS, 구버전 차단, 삭제/중복 차단, 신규 충돌 후 재시도, 목록·프로필 후속 입력 보존과 두 번째 CAS를 확인했다. 검증은 student `12/12`, runtime lint, `check:fast`·scenario `823/823`, production `823/823`, build `384 modules`·lazy `12/12`, safe browser `25/25`다.
- 학생 저장 후 미래 수업 명단 반영, 반관리 bulk, 퇴원의 학생+수업 ordered 저장은 변경하지 않았다. 다음 독립 단위인 반 명단 저장 gate에서 부분실패·재조회·복구를 함께 다룬다.

## 2026-08-03 Tally 신규생 후보 입력 경쟁 방지

- 후보 입력마다 겹쳐 실행되던 `student_intake_applicants` 저장을 후보별 직렬 controller로 바꿨다. 첫 요청 중 같은 후보의 여러 변경은 최신 draft만 남기고, 성공 응답의 새 `updated_at`으로 재기준화한 뒤 다음 요청을 보낸다.
- API는 UI 편집 요청에 기대 `updated_at` CAS를 적용하고, PATCH 결과를 Supabase에서 다시 읽어 후보 필드와 새 timestamp가 일치한 뒤에만 `verified: true`를 반환한다. 다른 화면의 변경·삭제와 결과 불명 실패는 자동 병합·재전송하지 않으며 화면의 최신 입력과 `저장 실패`를 유지한다.
- 정식 학생 등록은 해당 후보 입력 controller가 idle이 될 때까지 기다린다. 등록 진행 중에는 후보 기본정보·Tally 질문·반영 대상 입력을 잠가 후보 저장과 등록 완료 CAS가 겹치지 않게 했으며, 학생 저장·미래 수업 명단 구현은 이번 단위에서 변경하지 않았다.
- 검증: Tally merge+신규 API/controller fixture, student domain `11/11`, runtime lint, `check:fast`, scenario·production `823/823`, build `382 modules`·lazy chunk `12/12`, Worktree 격리 safe browser `22/22` 통과. 안전 fixture만 사용했고 운영 데이터·실제 알림·Storage·유료 AI·SQL은 실행하지 않았다.
- 다음 독립 단위는 학생 저장 gate이며, 반 명단 저장 gate와 분리한다.

## 2026-08-03 시험정보 행 CAS·Supabase 재조회

- P1 저장 신뢰성의 두 번째 시험정보 단위로 `exam_prep_rows` bulk 저장을 행별 `updated_at` CAS로 바꿨다. 기존 행은 ID+기대 버전 PATCH, 신규 행은 충돌 감지 INSERT를 사용하며 삭제된 기존 행을 일반 자동저장이 되살리지 못하게 했다. 삭제 감사 rollback만 `allowRestore`를 명시해 복구한다.
- 성공 행은 Supabase에서 다시 읽어 요청 필드와 새 timestamp를 대조한 뒤에만 `저장 완료`로 처리한다. 여러 행 중 일부 성공·충돌도 행별로 구분하고, 저장 중 후속 입력은 성공 응답의 새 버전만 합쳐 최신 화면 draft를 보존한다. 충돌·결과 불명 실패는 자동 재전송하지 않고 입력과 `저장 실패`를 유지한다.
- 안전 API와 브라우저 fixture는 첫 요청 중 최신 입력 coalesce→새 버전 재기준화→두 번째 CAS 저장→API 최신값 확인, 외부 충돌 응답→현재 입력 보존을 검증한다. Supabase REST 모형은 정상 PATCH, 구버전 덮어쓰기 차단, 삭제 행 무단 재생성 차단, 감사 복구 허용을 직접 실행한다.
- 첫 PR preview에서 순수 helper를 `api/domain` 새 파일로 둔 탓에 Vercel Hobby의 서버리스 함수 12개 제한을 넘긴 것을 확인했다. helper를 기존 frontend/backend 공용 `src/domains/exams` 경계로 옮겨 API runtime 파일을 다시 12개로 유지했으며 기능 diff 없이 build를 재검증했다.
- 검증: 전용 controller/API·Supabase REST fixture, runtime lint, `check:fast`, scenario·production `822/822`, build `380 modules`·lazy chunk `12/12`, Worktree 격리 safe browser `20/20` 통과. 운영 데이터·실제 알림·Storage·유료 AI·SQL은 사용하지 않았다.
- 다음 독립 단위는 학생 신규/Tally 후보 입력 경쟁 방지다. 학생 저장·반 명단 저장 gate와 섞지 않는다.

## 2026-08-03 매일 자동 task 제목·main 통합 정책

- 매일 9시 자동 task는 서울 날짜를 계산해 다른 작업보다 먼저 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 제목을 바꾸며, 도구 실패나 완료 응답 부재 시 한 번 재시도하고 결과에 확인 여부를 남긴다.
- 1~3번 작업은 사람 Gate가 없고 시작 기준 main 불변, 동시 통합 owner 없음, exact-head 원격 검사 통과, fast-forward 가능 조건을 모두 만족하면 AI가 main push·main CI·배포 commit 대조·안전한 smoke까지 완료한다.
- 조건이 깨지면 자동 rebase·충돌 해결·force push를 하지 않고 branch 상태에서 보고한다. 4번 사람 Gate와 운영 데이터·알림·유료 AI·SQL side effect는 계속 자동 실행하지 않는다.
- 전날 자동 task는 결과와 main/branch 상태가 남아 있으면 보관해도 된다. 진행 중이거나 사람 Gate·통합 대기 결정을 놓치지 않도록 현재 task는 완료 전에 보관하지 않는다.

## 2026-08-03 시험정보 행 자동저장 직렬화

- 분류는 3번 기능·개선이다. 운영 회귀 발생을 확인한 것은 아니지만, 입력마다 실행되는 `exam_prep_rows` bulk 요청이 역순 도착하면 최신값을 덮을 수 있는 P1 저장 위험을 한 단위로 줄였다.
- 시험정보 저장 controller는 브라우저 전체에서 요청을 하나씩 처리한다. 진행 중 같은 행에 들어온 여러 변경은 row ID별 최신값만 보존해 다음 bulk 요청으로 보내고, 이전 요청 성공·실패가 최신 입력의 `저장 중` 상태를 덮지 않는다.
- 안전 API fixture에 시험정보 row와 bulk 저장 원천을 추가했다. Playwright에서 첫 요청을 지연한 채 같은 행을 세 번 편집해 동시 요청이 없고 마지막 값만 후속 저장되며 `저장 완료`가 표시되는지 확인한다.
- 범위 밖인 다중 탭·기기 `updated_at` CAS와 저장 뒤 Supabase 재조회는 다음 독립 단위로 남긴다. 운영 Supabase·알림·Storage·유료 AI·SQL side effect는 실행하지 않았다.
- 검증: controller·API 전용 fixture, runtime lint, scenario·production `821/821`, build `380 modules`·lazy chunk `12/12`, Worktree 격리 safe browser `19/19` 통과.

## 2026-08-02 App 3차 리팩터링 3-8 종료 감사

- `docs/app-refactor-third-pass-closeout.md`에 session과 6개 핵심 도메인, exam/settings의 화면·local draft·authoritative 저장 원천·provider side effect·오류 복구 owner를 재대조했다.
- 정산 `localStorage` recovery, notification controller의 공지 API 조립, 시험분석 도메인 request, 설정 transport 주입을 의도적 예외로 명시했다. 네 effect adapter가 function identity 외 API·Storage·React state를 소유하지 않고 21개 lazy 화면과 App의 고위험 handler owner가 유지되는지 `test:third-pass-closeout`으로 고정했다.
- 3-0 대비 App source bytes 52.9%, production main 43.1%, gzip 45.3% 감소와 App Babel 500 KB 경고 제거를 종료 근거로 확정했다. CSS/API server/type/safe E2E는 별도 투자 후보이며 4차 리팩터링을 자동 시작하지 않는다.
- 검증: `git diff --check`, runtime lint, 5도메인 fast 39/39, teacher/closeout 경계, scenario·production 821/821, `check:fast`, build 380 modules·lazy physical chunk 12/12, Worktree 격리 safe browser 18/18을 통과했다. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 중첩 수업 화면 lazy loading closeout

- `App.jsx`의 `SupplementMakeupLessonDetail`과 `PreparationMemoModal`을 `src/domains/lessons/LessonNestedPanels.jsx`로 옮겨, 이미 lazy인 수업 화면 내부에서 필요할 때만 내려받는 22.40 kB shared chunk로 연결했다. runtime 주입을 제거한 두 함수 본문 22,026자·6,236자는 기준 main과 문자 단위로 동일하다.
- 화면이 쓰는 pure helper 13개는 frozen `lessonNestedPanelRuntime`으로 App owner를 유지한다. 일정 저장·다음 정각/11시 알림 예약·보충 완료와 수업메모 저장은 기존 callback을 직접 호출하며 새 화면은 API·Storage·Supabase·Solapi transport를 소유하지 않는다.
- production main JS는 `956.13 kB / gzip 237.03 kB`에서 `934.69 kB / gzip 231.48 kB`로 줄었다. 3-0 대비 main 43.1%, gzip 45.3% 감소, 12개 물리 lazy chunk·21개 lazy component 경로, App 전용 Babel 500 KB 경고 제거를 종료 근거로 고정한다. App은 11,000줄·476,602 bytes다.
- 검증: 두 함수 exact 대조, runtime lint, teacher/nested 경계, 5도메인 fast 39/39, scenario·production 821/821, `check:fast`, build 380 modules·lazy physical chunk 12/12, Worktree 격리 safe browser 18/18. 이동으로 드러난 lesson inventory·준비 메모 모델/뷰의 App 위치 결합 3곳은 새 화면 source를 읽도록만 교정했다. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.
- 학생 로그인 화면과 핵심 학생 modal의 추가 지연화는 초기 main 34.69 kB 절감을 위해 사용자 핵심 경로를 복잡하게 만드는 위험이 더 커 이번 범위에 포함하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-7 시험 대비·설정 화면 lazy loading

- `App.jsx`의 `ExamPrepCenter`, `SettingsCenter`, `NotificationSettingsSection`, `StatusDot`을 도메인 파일로 옮기고, 함께 있던 `EvaluationCenter`·`StudentSelect`는 교사 화면 파일로 분리했다. runtime 주입을 제거한 6개 함수 본문은 기준 main과 문자 단위로 동일하다.
- 시험 계산·표시 helper 22개와 설정 원천·정규화·API transport 12개는 frozen runtime으로 App owner를 유지한다. 설정의 알림 템플릿 테스트와 계정 저장은 기존 `postJson` 주입 경계를 유지하며 안전 브라우저에서는 버튼을 실행하지 않았다.
- 두 top-level 화면은 별도 lazy chunk로 연결했다. production main JS는 `999.16 kB / gzip 248.14 kB`에서 `956.13 kB / gzip 237.03 kB`로 줄었고 시험 대비 26.47 kB, 설정 18.33 kB chunk가 생겼다. App은 10,855줄·507,358 bytes가 되어 Babel의 App 500 KB 경고가 사라졌다.
- 검증: 원문 함수 6개 exact 대조, runtime lint, teacher/core/lazy 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 379 modules·lazy physical chunk 11/11, Worktree 격리 safe browser 17/17. 운영 데이터·실제 알림·유료 AI·SQL은 사용하지 않았다.
- 초기 main의 일반 500 kB 경고와 700~900 kB 종료 목표 상단 초과는 남아 있다. 다음 최신 main 단위에서 저빈도 중첩 화면의 안전한 lazy 분리를 검토한다.

## 2026-08-02 App 3차 리팩터링 3-7 보조 대시보드 화면 lazy loading

- `App.jsx`의 특강 안내문과 첫 화면·수업일지 운영 알림 목록/편집 화면 1,029줄을 `src/domains/teacher/DashboardAuxiliaryPanels.jsx`로 물리 분리했다. export와 운영 알림 runtime 주입을 제거한 화면 본문 42,078자는 기준 main과 문자 단위로 동일하다.
- 운영 알림 selector·표시 helper 15개는 frozen `academyReminderPanelRuntime`으로 App owner를 유지하고, 저장·삭제·특강 학생/안내문 callback은 기존 App→Outlet→화면 identity를 보존한다. 새 화면은 API·Storage·Solapi owner가 없다.
- `React.lazy` binding은 함수가 아닌 React element type이어서 기존 Notification Center의 함수형 guard가 정상 화면을 거부하는 문제를 safe browser가 발견했다. binding 존재 여부를 검사하는 최소 수정과 전용 fixture로 알림·특강 화면 전환을 복구했다.
- production main JS는 `1,092.41 kB / gzip 272.16 kB`에서 `999.16 kB / gzip 248.14 kB`로 줄었고 shared chunk는 `94.24 kB / gzip 24.63 kB`다. App은 11,836줄·551,722 bytes로 줄었으나 Babel 500 KB와 main 500 kB 경고는 남아 있다.
- 검증: runtime lint, teacher/dashboard 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 376 modules·lazy physical chunk 9/9, Worktree 격리 safe browser 16/16. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 계획 도구 화면 lazy loading

- `App.jsx`의 학사일정과 반관리·수업연구·AI 도구 화면 1,509줄을 `src/domains/teacher/PlanningToolCenters.jsx`로 물리 분리했다. 서로 떨어진 두 원본 구간을 합친 62,963자는 export/runtime 주입을 제거하고 기준 main과 줄바꿈 정규화 후 문자 단위로 동일하다.
- 화면이 사용하던 학사일정 selector·시험행 동기화 helper·수업연구 catalog·기준일 등 24개 binding은 frozen `planningToolRuntime`으로 App owner를 유지한다. 일정 저장/삭제·시험행 갱신·반 명단·수업연구 callback identity는 `TeacherViewOutlet`에서 그대로 전달한다. 새 화면에는 fetch/API/Storage/Supabase/Solapi owner가 없고 AI 도구의 기존 local 파일 읽기·blob 다운로드만 유지한다.
- production main JS는 `1,142.78 kB / gzip 285.71 kB`에서 `1,092.41 kB / gzip 272.16 kB`로 줄었고 shared chunk는 `51.98 kB / gzip 15.10 kB`다. App은 595,886 bytes로 줄었으나 dev Babel 500 KB와 main 500 kB 경고는 남아 있다.
- safe browser는 계획 도구 module을 400ms 지연해 학사일정 로딩→화면 진입→수업연구 전환을 확인하며 일정 등록·명단 저장·AI 파일 행동은 실행하지 않는다. 검증: runtime lint, teacher/planning 경계, 5도메인 fast 38/38, scenario·production 821/821, build 375 modules·lazy physical chunk 8/8, Worktree 격리 safe browser 15/15. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 학습지원 화면 lazy loading

- `App.jsx`의 오답관리·시험지관리·자료함·숙제현황 화면과 전용 하위 view 1,335줄을 `src/domains/teacher/LearningSupportCenters.jsx`로 물리 분리했다. 기준 main의 화면 본문 53,378자와 문제 상태 pure model 977자를 줄바꿈 정규화 뒤 문자 단위로 대조했다.
- 4개 화면은 함께 쓰이는 저빈도 학습지원 shared chunk로 lazy 연결했다. 학생 화면 component, 숙제 판정 helper, 날짜·과목 원천 등 10개 binding은 frozen `learningSupportRuntime`으로 App owner를 유지하며, 저장·삭제·교사 확인 callback identity도 `TeacherViewOutlet`에서 그대로 전달한다. 새 화면에는 fetch/API/Storage/Supabase/Solapi owner가 없다.
- production main JS는 `1,181.41 kB / gzip 296.06 kB`에서 `1,142.78 kB / gzip 285.71 kB`로 줄었고 shared chunk는 `39.49 kB / gzip 11.66 kB`다. App은 15,176줄·663,337 bytes로 줄었으나 dev Babel 500 KB와 main 500 kB 경고는 남아 있다.
- safe browser는 학습지원 module 응답을 400ms 지연해 오답관리 로딩→화면 진입→같은 chunk의 자료함 이동을 확인하며 등록·저장·삭제는 실행하지 않는다. 검증: runtime lint, teacher/learning-support 경계, 5도메인 fast 38/38, scenario·production 821/821, build 374 modules·lazy chunk 7/7, Worktree 격리 safe browser 14/14. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 시험분석 화면 lazy loading

- `App.jsx`에 남아 있던 시험분석 helper와 `ExamAnalysisPipelineCenter` 4,612줄을 `src/domains/exams/ExamAnalysisPipelineCenter.jsx`로 물리 분리해 여섯 번째 teacher lazy chunk로 연결했다. 추출 전후 helper 91,259자와 화면 104,145자를 줄바꿈 정규화 뒤 문자 단위로 대조했다.
- 시험분석 source 조회·추출·문항 탐지·검수 저장·최종 초안 저장 등 13개 request 함수는 `examAnalysisPipelineRuntime`으로 직접 주입하며 App owner를 유지한다. 새 화면은 request 구현을 소유하거나 App/Outlet을 역참조하지 않는다.
- production main JS는 `1,379.15 kB / gzip 351.03 kB`에서 `1,181.41 kB / gzip 296.06 kB`로 줄었고 시험분석은 `198.00 kB / gzip 54.94 kB` 별도 chunk가 됐다. build 예산을 1.25 MB와 6/6 lazy chunk로 강화했다. `App.jsx`는 16,513줄·721,795 bytes로 줄었지만 Babel 500 KB 경고와 main 500 kB 경고는 남아 있다.
- safe browser는 Vite 시험분석 module 응답을 지연해 로딩 표시와 화면 진입·선생님 검수 탭을 확인하며 유료 AI·파일 업로드·저장 행동은 실행하지 않는다. 검증: runtime lint, teacher/exam 경계, 5도메인 fast 38/38, scenario·production 821/821, `check:fast`, build 372 modules, Worktree 격리 safe browser 13/13. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-7 교사 화면 lazy loading 1차

- 이미 물리 분리된 수업일지·보충관리·학생관리·알림관리·정산 5개 top-level 화면을 `lazyTeacherViewComponents`의 동적 import로 연결했다. `App`의 상태와 저장·삭제·Supabase 재조회·Solapi callback 조립은 바꾸지 않고 component 참조만 lazy component로 교체했다.
- `TeacherViewOutlet`에 Suspense 로딩 상태와 view별 오류 경계를 추가했다. chunk 실패는 기존 client runtime error reporter로 오류 번호를 남기며, 운영 입력을 변경하지 않았다는 안내와 안전 새로고침 복구를 제공한다. `apiClient`의 Vite env 판독은 Node 전용 boundary fixture에서도 안전하도록 optional access로 좁게 보강했다.
- production main JS는 `1,656.92 kB / gzip 427.24 kB`에서 `1,379.15 kB / gzip 351.03 kB`로 각각 16.8%·17.8% 줄었다. 5개 view는 38.62~66.30 kB 별도 chunk로 분리됐고 1.50 MB 초기 main 예산과 5/5 chunk 존재 검사를 모든 build에 연결했다.
- safe browser는 첫 lesson chunk를 500ms 지연해 로딩 안내를 확인하고, StudentManager chunk를 1회 실패시켜 오류 기록→안전 새로고침→학생관리 재진입을 검증한다. 검증: runtime lint, 5도메인 fast 38/38, teacher lazy/boundary, scenario·production 821/821, `check:fast`, build 371 modules, Worktree 격리 safe browser 12/12. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.
- App source 자체의 Babel 500 KB 경고와 1.38 MB main chunk는 남아 있다. 3-7 다음 단위는 App에 남은 저빈도 teacher 화면을 물리 분리·lazy 연결해 700~900 kB 종료 목표에 접근한다.

## 2026-08-02 App 3차 리팩터링 3-6 정산 view closeout

- `MonthlySettlementPanel.jsx`의 출결·수업 달력/최종 횟수 편집을 `MonthlySettlementCalendar.jsx`, 정규 정산 표/제외 행 복원을 `MonthlySettlementRegularTable.jsx`로 물리 분리했다. 원본 JSX를 줄바꿈 정규화 후 직접 대조해 달력 6,304자와 표 9,847자가 각각 문자 단위로 동일함을 확인했다.
- Panel은 controller 반환값과 header·규칙·summary·save bar를 조립하는 184줄·8,027 bytes owner가 됐다. 새 달력은 161줄·7,343 bytes, 표는 232줄·11,544 bytes이며 둘 다 React state/effect·API·Storage를 소유하지 않고 기존 callback identity를 직접 전달받는다.
- view exact-prop·callback·금지 의존성과 App의 app_state/Supabase 저장·재조회 owner를 확인하는 전용 fixture를 settlement fast 및 production에 연결했다. 검증: runtime lint, settlement fast 7/7, scenario/production 821/821, `check:fast`, build 368 modules, 지연 저장·응답 전 월 이동·초안 복구·PDF를 포함한 Worktree 격리 safe browser 10/10. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.
- 월별 화면 조립·계산 selector·교사 확정값 저장 경계를 대조해 3-6을 닫는다. 다음 단계는 별도 최신 main branch의 3-7 lazy loading/chunk 분리다.

## 2026-08-02 App 3차 리팩터링 3-6 월별 정산 controller 경계

- `MonthlySettlementPanel.jsx`의 선택 월, localStorage recovery draft, 학생 설정 변경, 계산 row/summary, PDF model 호출과 교사 확정값 저장 조립을 `useMonthlySettlementController.js`로 이동했다. 화면은 달력과 정산 표 render를 유지하며 787줄·35,527 bytes에서 541줄·26,442 bytes로 줄었다.
- App의 `handleSaveMonthlySettlementMonth`가 기존대로 현재 app_state 조회, Supabase 저장, 재조회 snapshot 대조와 App 상태 반영을 소유한다. 금액·횟수·신입·퇴원·휴강·연결 보강 계산 함수는 변경하지 않았다.
- 저장 중에도 입력 가능한 기존 화면에서 오래된 성공 응답이 후속 수정본을 지우는 회귀를 확인했다. 요청 월과 draft revision이 같은 성공만 persisted 값으로 교체하고, 이후 변경은 local draft와 dirty 상태를 보존해 `저장 완료 · 이후 변경 저장 필요`로 재저장을 안내한다. 서버 기준시각이 갱신되면 최신 후속 draft를 그 기준으로 local recovery에 다시 기록하며, 다른 월 응답과 오래된 실패도 활성 draft/local recovery에 적용하지 않는다.
- 전용 TARGET/CONTROL fixture를 settlement fast와 production에 연결하고, 안전 API의 app_state 응답을 지연시켜 `4회 저장 → 저장 중 5회 수정 → 응답 전 8월 이동 → 7월 복귀 시 5회 복구 → 재저장 → PDF 5회`를 브라우저에서 확인했다. 검증: runtime lint, settlement fast 6/6, scenario/production 821/821, `check:fast`, build 366 modules, Worktree 격리 safe browser 10/10. 운영 데이터·실제 알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-5 알림 controller 경계

- `NotificationCenter.jsx`에 남아 있던 공지 수신자 선택, local 작성 draft, 이력 필터·삭제, Solapi 취소/reconcile, API request binding과 compose/history/tab prop 조립을 `useNotificationNoticeController.js`로 물리 이동했다. 화면은 특강 callback 조립과 render만 소유한다.
- 기존 `useNotificationRecipientState`·`useNotificationComposerState`·`useNotificationHistoryState`, 순수 action/API adapter, 15/45초 timeout, 확인창·오류 문구·refresh 순서와 두 App effect identity는 바꾸지 않았다. 새 controller는 App·Storage·JSX를 역참조하지 않으며 `NotificationCenter.jsx`는 469줄·17,234 bytes에서 144줄·5,324 bytes로 줄었다.
- source-string fixture는 새 controller source를 화면 경계에 합성하고 inline object 표기 대신 반환 prop 계약을 확인하도록 교정했다. 전용 fixture는 화면의 API/controller owner 제거, controller의 세 hook·request·취소/reconcile owner, render prop 연결을 고정한다.
- 검증: runtime lint, notification fast 7/7, notice action/effect/controller·refresh/reconcile·teacher 전용 fixture, scenario/production 821/821, `check:fast`, build 365 modules, 이력 탭 전환·local draft 미리보기·특강관리 이동을 포함한 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 알림 발송/예약/취소·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-5 알림 effect 경계

- App→`TeacherViewOutlet`→`NotificationCenter` 두 진입 경로에 낱개로 전달되던 callback 13개를 동결된 `notificationEffectAdapter`로 교체했다. 이력 취소·reconcile 2개는 `historyProvider`, route별 재조회 1개는 `historyTransport`, 특강 저장 7개·삭제 1개·수업 저장 뒤 선택적 화면 이동까지 조정하는 orchestration 1개·화면 이동 1개는 각각 명시적 표면으로 분류했다.
- 알림 이력의 `handleRefreshNotificationHistory`와 특강관리의 `handleRefreshActiveNotificationJobs` identity는 각각 유지한다. adapter는 API·Storage·React state를 소유하지 않으며 실제 저장·Supabase 재조회·Solapi 예약/취소/reconcile 함수는 App에, 공지 local draft·발송/예약/삭제 request 조립은 기존 Notification Center 도메인 hook/action에 그대로 남는다.
- 기존 reconcile inventory가 `TeacherViewOutlet`의 flat callback 출현 횟수에 결합돼 전체 production 첫 실행에서 중단됐다. 새 notification/lesson effect adapter 두 표면을 직접 확인하도록 4개 fixture와 scenario 위치 계약만 교정했고, 전용 재실행으로 의미 보존을 확인했다.
- 검증: runtime lint, notification fast 6/6, teacher/effect/reconcile 전용 fixture, scenario·production 821/821, `check:fast`, build 364 modules, 알림관리·특강관리 경로가 포함된 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 알림 발송/예약/취소·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-4 퇴원생 목록 경계

- 퇴원생 표·정렬·선택 toolbar JSX와 날짜 표시 helper를 `src/domains/students/StudentWithdrawnList.jsx`로 물리 이동했다. 기준 commit의 목록 본문 5,273자를 직접 대조해 문자 단위 동일함을 확인했다.
- 호출부·시그니처의 20개 prop은 모두 `prop={prop}` 직접 전달이다. dirty row, 선택 집합, 선택 저장, 퇴원 취소, 인계 PDF, 단일/일괄 영구삭제 controller는 `StudentManager`가 계속 소유하며 새 목록은 API·Storage·React state/effect를 갖지 않는다.
- scenario inventory는 Manager/profile/lifecycle overlay/withdrawn list source를 합성해 기존 사용자 계약을 유지하고, SelectionToolbar import 검사는 실제 새 raw source를 읽도록 위치 결합만 교정했다. 전용 exact-prop fixture를 student fast와 production 학생 묶음에 연결했다.
- 구조 결과: `StudentManager.jsx`는 826줄·40,802 bytes에서 755줄·36,371 bytes, 새 `StudentWithdrawnList.jsx`는 121줄·6,485 bytes다. profile·퇴원 목록·lifecycle overlay/인계 화면이 분리되고 App effect owner가 유지되어 3-4를 닫는다.
- 검증: runtime lint, student fast 9/9, scenario/production 820/820, build 363 modules, 퇴원생 표·선택 toolbar를 직접 여는 Worktree 격리 safe browser 10/10을 통과했다. 운영 데이터·실제 삭제·알림·AI 호출·SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-4 학생 lifecycle overlay 경계

- 퇴원 확인, 읽기 전용 인수인계 PDF, 단일 영구삭제, 일괄 영구삭제 4개 overlay를 `src/domains/students/StudentLifecycleOverlays.jsx`로 물리 이동했다. 기준 commit의 조건부 JSX 11,029자를 직접 대조해 문자 단위 동일함을 확인했다.
- 새 overlay는 draft setter와 Manager controller만 주입받는다. 퇴원·복원, 영구삭제 전 audit, fingerprint 재확인, 단일/일괄 삭제 순서, PDF model 생성·인쇄는 기존 `StudentManager` 함수에 그대로 있고 App의 실제 저장·Supabase 재조회 callback도 이동하지 않았다.
- 기존 footer·삭제 확인 source 검사는 새 raw overlay source를 직접 보도록 위치 결합만 교정했다. 전용 fixture는 4개 overlay 문구·busy close gate·controller 주입과 API/Storage/React state 부재를 student fast 및 production 학생 묶음에서 확인한다.
- 구조 결과: `StudentManager.jsx`는 994줄·51,334 bytes에서 826줄·40,802 bytes, 새 `StudentLifecycleOverlays.jsx`는 244줄·13,689 bytes다. 다음 단위는 퇴원생 목록과 선택 toolbar 조립을 분리한다.

## 2026-08-02 App 3차 리팩터링 3-4 학생 프로필 화면 경계

- `StudentManager.jsx` 후반에 있던 `StudentProfileModal`, 프로필 오류 경계, 기본정보·시간표·상담·성적·테스트·운영알림 local draft/표시 helper를 `src/domains/students/StudentProfileModal.jsx`로 물리 이동했다. 기존 프로필 component 본문은 기준 commit과 문자 단위로 동일하다.
- `StudentManager`는 선택 학생과 조회 모델을 조립해 기존 callback 10개를 새 화면에 직접 주입한다. 새 화면에는 fetch·API client·Supabase·localStorage가 없으며, 학생 기본정보 저장·교사 메모·상담·성적·테스트·운영알림 저장/삭제 및 재조회·오류 복구 owner는 App에 그대로 남는다.
- scenario source inventory는 목록 shell과 프로필 화면을 명시적으로 합성하되 import 선언은 중복 파싱하지 않도록 조정했다. 전용 physical-boundary fixture를 student fast와 production 학생 묶음에 연결했다.
- 구조 결과: `StudentManager.jsx` 2,168줄·112,396 bytes에서 994줄·51,334 bytes, 새 `StudentProfileModal.jsx` 1,180줄·59,491 bytes로 분리됐다. lazy loading은 3-7까지 적용하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-4 학생관리 effect 경계

- App→`TeacherViewOutlet`→`StudentManager`에 평면 전달되던 16개 상태 변경 callback을 동결된 `studentEffectAdapter` 하나로 교체했다. 화면 local row edit 1개는 `draft`, 저장 7개는 `persistence`, 삭제 5개는 `deletion`, 퇴원·복구 2개는 `lifecycle`, 영구 삭제 전 Supabase 읽기 점검 1개는 `audit`으로 구분했다.
- adapter는 직접 함수 identity만 보존하며 API·Storage·React state를 사용하지 않는다. App의 학생 기본정보 저장·Supabase 재조회, 성적·테스트·상담·운영알림 저장, 퇴원 roster 반영, 복구 재조회, 영구 삭제 감사·재조회 및 기존 오류 복구 순서는 이동하지 않았다.
- exact key·identity·동결·금지 의존성을 확인하는 전용 fixture를 student fast와 production withdrawal 묶음에 연결했다. Teacher adapter와 scenario도 새 경계를 직접 읽으며, `StudentManager` 내부 callback 이름과 프로필·퇴원 controller 연결은 유지한다.
- 검증: runtime lint, student fast 6/6, effect adapter·teacher boundary 전용 fixture, scenario 817/817, `check:fast`, production 817/817 79.7초, build 360 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-3 보충관리 effect 경계

- 기존 보충관리에는 task draft, 내용 저장, 일정 적용, 결석보강 취소, 완료 처리, 알림 3종 제어 controller가 이미 도메인 파일로 분리되어 있었다. 남아 있던 App→`TeacherViewOutlet`→`SupplementCenter`의 flat side-effect callback 8개를 동결된 `supplementEffectAdapter` 한 개로 교체했다.
- `handleSaveMakeupTask` 등 순수 저장 3개는 `persistence`, 실제 알림 예약·취소 2개는 `provider`, 수업·task 저장과 provider 취소·예약을 함께 조정하는 취소·완료·일정 행동 3개는 `orchestration`으로 분류했다. 실제 함수 identity와 실행 순서는 바꾸지 않았고 API·Supabase 재조회·Solapi owner는 App에 유지한다.
- exact key·App action identity·동결 여부·금지된 API/Storage/React state 부재를 확인하는 전용 fixture를 supplement fast와 production 묶음에 연결했다. 교사 화면 adapter와 scenario도 새 경계를 직접 읽으며, 화면 내부의 기존 callback 이름과 controller 연결은 유지한다.
- 검증: runtime lint, supplement fast 7/7, effect adapter·teacher boundary·notification orchestration·task actions·modal action 전용 fixture, scenario 816/816, `check:fast`, production 816/816 83.4초, build 359 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업 등록·수정 모달 경계

- App 내부의 수업 등록·수정 `LessonModal` local controller 328줄을 `src/domains/lessons/LessonModal.jsx`로 물리 이동했다. 모달은 draft·validation·저장 진행 표시와 하위 controlled component 조립만 소유한다.
- App은 순수 날짜·시간·색상 resolver를 동결 runtime으로 주입하고, 실제 `/api/lessons/bulk` 저장·Supabase 재조회 대조·휴강 preflight·상태 반영은 기존 `handleAddLesson`/`handleUpdateLesson`/`saveLessonModalLessons` owner를 유지한다.
- 이전 App controller와 새 controller의 runtime destructuring 이후 본문을 문자 단위로 대조해 동일함을 확인했다. 위치에 결합된 7개 boundary fixture와 scenario는 App의 단일 import, 새 local owner, App persistence owner를 각각 직접 검사하도록 교정했다.
- `App.jsx`는 21,116줄·938,765 bytes로 줄었고 새 `LessonModal.jsx`는 379줄·12,709 bytes다. lazy loading 전이라 main JS는 1,649.42 kB, gzip 424.93 kB로 유지되어 chunk 절감은 3-7 대상이다.
- 검증: runtime lint, lesson fast 9/9, 수업 모달 전용 14개와 저장·명단·정규수업 전용 fixture, scenario 816/816, `check:fast`, production 816/816 82.0초, build 358 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업일지 effect adapter 경계

- Teacher Lesson Hub에서 Lesson Journal Detail로 낱개 전달되던 persistence callback 10개와 provider/transport callback 7개를 `lessonJournalEffectAdapter`의 `persistence`·`provider` 두 표면으로 묶었다. 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용은 provider 표면에 분류했다. Hub의 직접 callback 표면은 11개 줄었고 25줄 순수 adapter 한 개로 대체됐다.
- App의 `handleSaveLessonJournalDrafts`, record/homework/makeup 저장, 수업 삭제, AI 코멘트, Solapi 예약·취소·reconcile 구현은 이동하거나 다시 작성하지 않았다. 12초 OS 예약 조회 transport도 App이 소유한 `lessonJournalTransport`에서 기존 함수 참조만 adapter에 주입한다.
- 독립 검토에서 알림 계획 적용이 저장만 하는 동작이 아니라 실제 Solapi 예약·취소까지 조정한다는 분류 오류를 찾았다. 함수 identity와 실행 흐름은 그대로 두고 해당 callback만 provider 표면으로 옮겨 persistence 10개/provider·transport 7개 계약으로 교정했다.
- exact key·App handler identity·transport identity·동결 여부를 확인하는 전용 fixture를 lesson fast와 production lifecycle에 연결했다. Teacher adapter와 scenario도 새 경계를 직접 읽도록 갱신했다.
- 검증: lesson fast 9/9, notification fast 5/5, 수업일지 전용 60/60, teacher boundary, runtime lint, scenario 815/815, `check:fast`, production 815/815 84.2초, build 357 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·AI 호출·운영 SQL은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-2 수업일지 draft/persisted 경계

- `LessonJournalDetail`에 남아 있던 record·homework·makeup local draft 조작, 편집 상태, 저장 결과 처리를 `useLessonJournalDraftController`로 이동했다. 상세 화면은 948줄에서 775줄로 줄었고 revision guard를 포함한 새 controller는 320줄이다.
- controller는 API·Supabase·localStorage를 직접 사용하지 않고 App의 `handleSaveLessonJournalDrafts`를 주입받는다. App은 ordered persistence와 서버 재조회 대조를 계속 소유한다.
- 독립 검토에서 `A 저장 요청 -> 요청 중 B 입력 -> A 성공` 순서일 때 오래된 성공 handler가 B까지 비우는 회귀를 발견했다. 요청 lesson과 draft revision을 캡처해 같은 revision의 성공만 비우고, 후속 입력은 편집 모드와 함께 유지해 `저장 완료 · 이후 변경 저장 필요`로 재저장을 안내한다. 다른 수업으로 이동한 뒤 도착한 응답도 활성 draft에 적용하지 않는다.
- 순수 save transition·in-flight resolution TARGET/CONTROL fixture를 lesson fast에 연결했다. 위치 결합 closeout은 상세 화면, draft controller, App persistence owner를 각각 직접 읽도록 바꿨다.
- 안전 브라우저의 가상 lesson record bulk API를 지연시켜 `A 입력 -> 저장 -> 저장 중 B 입력 -> B 보존 안내 -> B 재저장 -> 저장 완료`를 재현했다.
- 검증: lesson fast 8/8, 수업일지 전용 59/59, runtime lint, scenario 814/814, `check:fast`, production 814/814 84.9초, build 356 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-1 Lesson Journal Detail 화면 분리

- `App.jsx` 내부의 수업일지 상세 화면 846줄을 `src/domains/lessons/LessonJournalDetail.jsx`로 이동했다. 상세 화면은 기존 draft·overlay·예약 표시 hook과 파생 view model만 조립하며 API·localStorage를 직접 사용하지 않는다.
- 수업일지 저장·수업 삭제·알림 예약/취소/발송/reconcile callback은 기존 App/teacher adapter owner를 유지했다. 화면 안에 있던 OS 예약 기록 GET만 `loadLessonJournalReservationAudit` App transport로 옮겨 주입했다.
- `App.jsx`는 22,251줄·985,836 bytes에서 21,455줄·950,993 bytes로 줄었다. 새 상세 화면은 948줄·39,995 bytes다. lazy loading 전이라 main JS는 1,646.67 kB, gzip 424.14 kB로 유지되어 chunk 절감은 3-7 대상이다.
- 구현 위치에 결합된 수업일지 source fixture는 공통 소스 helper로 연결하고, 새 화면의 물리 분리·App transport·저장/알림 callback 계약을 scenario에 추가했다. 과거 구조를 우연히 통과하던 closeout 문구도 새 경계를 직접 검사하도록 교정했다.
- 검증: lesson fast 7/7, 수업일지 관련 전용 fixture, teacher view boundary, runtime lint, scenario 814/814, `check:fast`, production 814/814 84.3초, build 355 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 App 3차 리팩터링 3-1 Teacher Lesson Hub 화면 분리

- `App.jsx` 내부의 Teacher Lesson Hub 화면 조립 260줄을 `src/domains/lessons/TeacherLessonHubV2.jsx`로 이동했다. 달력 filter·focus·keyboard navigation은 화면 local state로 유지하고, 수업일지 상세·보충 상세·시험대비 상세와 날짜 helper는 명시적 `teacherLessonHubRuntime`으로 주입한다.
- App과 `TeacherViewOutlet`은 수업일지 저장, 수업 삭제, 알림 예약·취소·발송·reconcile callback의 기존 owner를 유지한다. 새 화면에는 API·localStorage 직접 접근이 없으며 저장 완료·오류 복구 의미를 바꾸지 않았다.
- `App.jsx`는 22,497줄·995,166 bytes에서 22,251줄·985,836 bytes로 줄었다. 새 화면은 285줄·10,189 bytes이며 lazy loading 전이라 main JS는 1,644.17 kB, gzip 423.00 kB로 실질적으로 유지된다.
- 기존 전용 fixture 3건이 구현 위치를 App에 고정하고 있어, 활성 허브 1개·달력 view 계약·keyboard 연결이라는 사용자 동작 계약을 새 파일 경계에서 검사하도록 갱신했다.
- 검증: lesson fast 7/7, teacher view adapter, lesson hub/calendar/keyboard 전용 fixture, runtime lint, scenario 813/813, `check:fast`, production 813/813 85.0초, build 354 modules, Worktree 격리 safe browser 9/9를 통과했다. 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않았다.

## 2026-08-02 browser smoke Worktree 격리 기본화

- `npm run test:browser-smoke`가 Worktree 경로에서 안정적으로 파생한 가용 frontend/API 포트를 선택하고 기존 preview를 재사용하지 않도록 격리 runner를 추가했다.
- 명시 포트, 포트 범위, Worktree path hash 계약을 fixture로 확인한다. 직접 Playwright 실행은 runner 진단용 `test:browser-smoke:direct`로 남겼다.
- 검증: runner contract, `check:fast` scenario 812/812·build 353 modules, 기본 명령의 자동 격리 포트 safe browser 9/9를 통과했다. 단순 test tooling 변경의 로컬 full production 반복은 정책대로 생략하고 exact-head/main CI에서 확인한다.
- 운영 데이터·실제 알림·운영 SQL·유료 호출은 사용하지 않는다.

## 2026-08-02 App 3차 리팩터링 3-1 Notification Center 화면 분리

- `App.jsx` 내부의 Notification Center top-level 405줄을 `src/domains/notifications/NotificationCenter.jsx`로 이동했다. App은 명시적 `runtimeBindings`로 기존 날짜·표시 helper와 특강 panel을 주입하며 저장·예약·취소·reconcile 계약은 바꾸지 않았다.
- `App.jsx`는 22,912줄·1,011,179 bytes에서 22,497줄·995,166 bytes로 줄었다. 새 도메인 component는 456줄·16,909 bytes다. 아직 lazy loading 전이므로 main JS 크기는 약 1.64 MB로 유지된다.
- 검증: notification fast 5/5, teacher view adapter, runtime lint, scenario 812/812, `check:fast`, production 812/812 84.3초, build 353 modules, Notification Center·특강관리 동선을 추가한 Worktree 격리 safe browser 9/9를 통과했다. 기본 5173 포트의 기존 preview를 재사용한 최초 smoke는 오래된 bundle 때문에 4건 실패했고 새 격리 포트 재실행으로 코드 회귀가 아님을 확인했다.
- 운영 데이터 쓰기·실제 알림 발송/예약/취소·운영 SQL·유료 호출은 없다.

## 2026-08-02 App 3차 리팩터링 3-0 기준선·검증 경로

- 최신 main `16f8c4ca`에서 `App.jsx` 22,912줄·1,011,179 bytes, main JS 1,642.41 kB, 전체 production 86.19초를 기준선으로 측정했다.
- lesson·supplement·student·notification·settlement 대표 pure fixture를 npm 중첩 없이 병렬 실행하는 `test:domain:*` 명령을 추가했다. 기존 `check:fast`와 전체 `test:production`의 의미는 보존한다.
- 검증 source of truth는 `docs/testing-policy.md`, 3차 단계와 종료 기준은 `docs/app-refactor-third-pass-plan.md`다.
- 검증: runner contract, 5개 domain 각 0.62초 이하·통합 27/27 0.94초, runtime lint, `check:fast` scenario 811/811, build 352 modules, 전체 production 811/811 84.3초를 통과했다. UI 동작 변경이 없어 브라우저 재실행은 생략했고 같은 기준 commit의 격리 smoke 8/8을 기준선에 기록했다.
- 운영 데이터 쓰기·실제 알림·운영 SQL·유료 호출은 없다.

## 2026-08-02 정산 기본월·상단 컨트롤 정리

- 서울 기준 매월 1~2일에는 지난달, 3일부터는 이번 달을 월별 정산 기본월로 선택한다. 초기 진입에만 적용하며 사용자가 직접 선택한 월은 바꾸지 않는다.
- 분리되어 있던 정산월, 저장 상태, `횟수·금액 PDF`를 하나의 반응형 컨트롤 카드에 배치했다. 좁은 화면에서는 월 입력과 상태·PDF 행동을 두 줄로 정돈한다.
- 날짜 경계 fixture는 1일·2일·3일과 1월→전년 12월 전환을 포함한다.
- 검증: runtime lint, 정산 전용 fixture, production scenario `811/811`, build `352 modules`, 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 월별 정산 표·PDF 항목 간소화

- 월별 정산 표에서 `월별 스케줄`, `정산 처리` 열과 새 제외 버튼을 제거했다. 기존 스케줄·제외 저장값과 계산 원천은 삭제하지 않으며, 과거 제외 행은 복원할 수 있다.
- PDF는 학생별 `최종 정규 횟수`를 유지하되 상단·합계행의 최종 정규 횟수 합산을 제거하고 총 금액만 합산한다.
- 검증: runtime lint, 정산 전용 fixture, production scenario `810/810`, build `352 modules`, 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 월별 정산 PDF 인쇄 복구

- 운영에서 월별 정산 모달의 PDF 버튼이 비활성화되어 있던 동선과 보고서 창의 자동 인쇄만 의존하던 경계를 확인했다.
- 사용자 확정 동선에 맞춰 모달은 최종 정규 횟수 저장·재조회만 담당하고, 저장 후 모달을 닫아 바깥 `횟수·금액 PDF`에서 보고서를 연다. 보고서에는 자동 인쇄가 동작하지 않아도 누를 수 있는 `인쇄하기` 버튼을 추가했다.
- 안전 브라우저에서 `4회 입력 -> 저장 완료 -> 모달 닫기 -> 바깥 PDF -> 4회 유지 -> 인쇄하기 노출`을 검증했다.
- 검증: runtime lint, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과.

## 2026-08-02 수업 등록 배치·월별 출결 달력 가독성

- `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 상단 줄에서 월 이동 박스 안 오른쪽으로 옮겼다. 작은 화면에서는 월 이동과 생성 행동을 두 줄로 쌓는다.
- 공통 모달의 720px 규칙에 덮이던 월별 출결·수업 전용 폭을 높은 우선순위로 교정하고 최대 폭을 1320px로 늘렸다. 1280px 안전 화면에서 달력 7열이 가로 스크롤 없이 표시된다.
- 검증: runtime lint, 수업 달력 view boundary, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과.

## 2026-08-02 최종 정규 횟수 모달 저장·PDF 출력 복구

- 상세 모달에서 숫자는 초안에 반영되지만 실제 저장 버튼이 배경 화면에만 있어 저장할 수 없던 동선을 확인했다.
- 모달 하단에 `최종 정규 횟수 저장 및 확인`을 추가해 Supabase 저장·재조회 완료를 바로 표시한다. 저장 뒤 모달을 유지해 확정값을 대조한다.
- 안전 브라우저에서 `4회 입력 -> 저장 완료 -> 닫고 다시 열어 4회 유지`를 검증했다.
- 검증: runtime lint, 정산 전용 fixture, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과. 운영 데이터 쓰기·알림 side effect는 없다.

## 2026-08-02 정산 특강 출결·학생 통합 출결·간결 PDF·보강 시간 교정

- 특강 정산의 확정 계획 회차와 실제 특강 수업일지를 대조해 학생별 일지 수, 출석·지각·결석·대기, 일지 누락 수를 표시한다. 금액 계산 원천은 기존 확정 수강 계획을 유지한다.
- 학생 프로파일에 월 선택형 정규·특강 출결 요약을 추가했다.
- 횟수·시수 버튼의 달력 모달에서 시스템 계산 횟수와 교사 확정 `최종 정규 횟수`를 함께 보여 준다. 확정값은 월별 정산 원천에 저장해 신입 회당·퇴원 비례 계산 및 PDF에 사용하고, 월정액 학생은 금액을 유지한다.
- 표의 요청 차감·추가 입력 열을 제거했다. 기존 저장 조정값은 유실하지 않고 금액에만 계속 반영한다.
- 월별 정산 PDF는 필터나 출결 세부내역 없이 정산 제외 행의 `이름·최종 정규 횟수·금액`과 합계만 출력한다.
- 보강·휴강 보충은 학생의 정규 프로필 시간표로 시간을 덮지 않고 실제 수업일지 시작·종료 시간을 사용한다. 이윤채 7월 30일 보강과 같은 14:00 수업이 16:00으로 보이던 원인을 이 경계에서 차단했다.
- 최신 main의 Phase 5 adapter와 통합하면서 정적 시나리오 충돌은 새 outlet 계약을 유지하고 정산 항목만 합쳤다. AI 리뷰에서 수업일지 0건일 때 교사 확정 횟수가 금액 계산을 통과하지 못하는 경계를 발견해, 자동 계산 0원 규칙은 유지하고 명시적 확정값만 계산하도록 최소 보정했다.
- 검증: 정산 전용 fixture, Phase 5 전용 fixture, runtime lint, `check:fast` scenario `810/810`, production `810/810`, build `352 modules`, Worktree 격리 safe browser `8/8` 통과. 운영 쓰기·알림 side effect는 없다.

## 2026-08-02 App 2차 리팩터링 Phase 5 — teacher view callback·화면 조립

- 17개 교사 화면의 component/props/callback 조립을 `src/app/TeacherViewOutlet.js`의 명시적 contract와 adapter로 옮겼다. `App`은 상태, local draft, API 저장·삭제, 알림 예약·취소·발송·재대조 handler를 계속 소유한다.
- outlet은 active view 하나만 렌더하며 네트워크/API/Storage를 직접 호출하지 않는다. 학생 포털과 보고서 화면은 기존 별도 경계를 유지한다.
- 기존 17개 JSX의 component와 prop 이름 inventory가 새 adapter와 정확히 같은지 자동 대조했다. 저장·삭제·예약·취소·발송·재대조 고위험 callback과 App 주입 누락을 확인하는 전용 fixture를 Production checks에 연결했다.
- AI 리뷰에서 새 모달 표시 callback이 기존 월 정규수업 Supabase 저장 함수와 같은 이름을 사용한 중복 선언을 발견했다. 모달 표시 callback 이름만 분리하고 App-owned 함수 선언 179개에 다른 중복이 없음을 확인했다.
- 정적 시나리오와 notification/lesson 전용 검사는 JSX 파일 위치 대신 새 adapter 계약을 확인하도록 갱신했다. 기능·저장 원천·오류 복구 의미는 바꾸지 않았다.
- 검증: runtime lint, Phase 5 전용 fixture, 17개 기존 prop inventory 대조, `check:fast` scenario `810/810`, production `810/810`, 독립 build `350 modules`, Worktree 격리 safe browser `7/7` 통과. 운영 데이터 쓰기·실제 알림 발송/예약/취소·운영 SQL·유료 호출은 없었다.
- production JS chunk 약 1.63 MB와 Babel의 `App.jsx >500KB` 경고는 남아 있다. 다음 대형 단위는 화면 정의의 실제 파일 분리와 lazy loading/code splitting이다.
- commit `ce73d37e`, PR #9를 merge commit `254cd0b1`로 main에 통합했다. exact-head와 main Production checks, Vercel preview·production 배포가 모두 성공했다.

## 2026-08-02 수업일지·보충관리 최신 main 통합 검증

- 수업 생성 action, 운영 알림 접기, 보충 정렬·시간 입력, 결석보강 알림톡 3종 편집·저장·취소 UI의 5개 커밋을 정산 수정이 포함된 최신 main 위에 순서대로 재배치했다. 코드 충돌은 없었고 문서 충돌은 두 작업 기록을 모두 보존했다.
- Phase 3 notification refresh/reconcile controller와 Phase 4 app_state 직렬화·CAS·재조회 전용 검사를 함께 통과해 겹친 lifecycle·저장 경계가 유지됨을 확인했다.
- AI 리뷰에서 modal이 열린 뒤 task가 사라질 때 3종 selector가 null task를 읽을 수 있는 경계를 발견해 빈 controls로 닫히는 guard와 fixture를 추가했다.
- Windows CRLF checkout에서도 app_state CAS 정적 계약을 확인하도록 전용 assertion을 줄바꿈 독립적으로 바꿨다. Playwright·Vite·safe API는 Worktree별 격리 포트를 공유해 다른 작업의 기존 preview를 재사용하지 않는다.
- 검증: 관련 전용 테스트, runtime lint, `check:fast`, production `810/810`, 독립 build `349 modules`, 격리 safe browser `7/7` 통과. 운영 데이터 쓰기와 실제 알림 발송·예약·취소는 실행하지 않았다.

## 2026-08-02 보충관리·첫 화면 사용성 보강

- 첫 화면 운영 알림에 독립적인 `알림 접기/펼치기`를 추가했다.
- 보충관리 목록에 월요일 우선 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간 입력을 시/분 선택으로 분리해 시를 고르면 `00분`으로 시작하고, 분은 5분 단위로 따로 변경한다.
- 결석보강 알림톡 3종을 한 화면에서 편집·일괄 저장하도록 바꾸고, 학생 문구 수정 시 학부모·당일 학생 문구에 연동해 3종을 선생님 최종본으로 고정한다.
- Solapi 예약 확인 모달은 학생·학부모·당일 학생 상태를 동시에 보여 주며 취소 가능한 예약만 한 번에 일괄 취소한다. 실제 예약·취소는 실행하지 않았다.
- 보충 내용·수업일지 일정·알림톡 저장 상태와 주요 행동을 모달 하단 고정바에 배치했다.
- 검증: 보충 전용 모델·controller, runtime lint, production `809/809`, build `346 modules`, safe browser에서 정렬·`14:00` 기본 분·3종 연동·통합 확인·고정 상태바를 통과했다.

## 2026-08-02 수업일지 생성 버튼 긴급 복구

- 점멸 방지 목적으로 숨긴 기존 달력 toolbar 안에 `+ 수업 등록`과 조건부 `정규수업 열기`가 함께 남아 화면에서 사라진 회귀를 확인했다.
- 숨김 toolbar는 유지하고 두 생성 action만 별도의 표시 bar로 분리했다. 태블릿·모바일에서는 버튼이 세로 전체 너비로 보인다.
- safe browser에서 생성 action 표시와 `수업 등록` 모달 진입을 확인했다.
- 검증: 달력 view boundary, runtime lint, production `809/809`, build `346 modules`, safe browser `5/5` 통과.

## 2026-08-02 7월 월별 정산 회차·퇴원·출결 색상 교정

- 운영 API를 읽기 전용으로 대조해 신규생 정산이 수업일지 회차와 예정 시간표 회차를 섞는 원인을 확인했다. 김형준은 실제 정규 10회와 보강 예정 휴강 1회, 이윤채는 저장 시간표 밖 첫 수업을 포함한 실제 정규 11회가 정산 근거다.
- 신규생 회차제는 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결된 `휴강 보충`은 추가 회차로 중복 계산하지 않는다. 이채빈은 정규 4회+휴강 1회로 5회이며 연결 보강은 금액을 추가하지 않는다.
- 해당 월 퇴원일이 있고 교사가 고정 요금을 명시하지 않은 기존생은 자동 퇴원 비례로 바꿨다. 김예나는 7/29 퇴원 기준 13/14 비례이며 교사 override는 유지된다.
- 월별 출결·수업 달력에 출석·결석·지각·공결·대기 색상을 적용했다. 대기는 수업일지는 있으나 출결이 확정되지 않은 상태로 파란색 표시하며, 휴강과 연결 보강은 점선 테두리로 구분했다.
- 학생별 행과 상세 요약에 휴강 포함 회수, 연결 보강의 추가 계산 제외, 대기 출결 미확정 근거를 각각 별도 문구로 표시한다.
- 운영 원천 재계산: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원. 운영 snapshot 저장은 하지 않았다.
- 검증: 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 쓰기·알림 발송·예약·취소는 0건이다.

## 2026-08-02 App 2차 리팩터링 Phase 4 — app_state 저장·복구·재조회

- Phase 3를 PR #4, merge commit `7fb366f9`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- 공통 app_state 12개 key는 500ms debounce 뒤 controller가 key별로 직렬 저장한다. 진행 중 같은 값은 중복 제거하고 새 값은 이전 저장·재조회가 끝난 다음 저장한다.
- 서버는 기존 `updated_at`을 예상 version으로 조건부 PATCH하고, 없는 row는 충돌 감지 INSERT한다. 다른 탭/기기 선저장으로 version이 달라지면 409로 중단하며 클라이언트 입력은 유지한다. 운영 SQL이나 스키마 변경은 없다.
- POST 성공만으로 완료하지 않고 `includeRows=true` GET으로 Supabase 값과 새 `updated_at`을 재조회한 뒤에만 persisted snapshot과 저장 완료 상태를 갱신한다. `lessonNotificationPlans`의 즉시 저장도 같은 controller를 사용한다.
- 검증: app_state inventory/controller 전용 fixture, runtime lint, `check:fast` scenario `809/809`, production 전체 `809/809`, 독립 build `349 modules`, safe browser smoke `4/4` 통과. 운영 데이터 쓰기·실제 알림·운영 SQL·유료 호출은 없었다.
- AI 코드 리뷰에서 local draft 보존, 같은 key 직렬화, CAS 신규/기존 row 분기, 재조회 완료 판정, session cleanup을 확인했고 병합을 막는 발견은 없었다. 기존 1.6 MB chunk와 Babel `App.jsx >500KB` 경고는 후속 분할 부채다.

## 2026-08-02 App 2차 리팩터링 Phase 3 — notification refresh/reconcile

- Phase 2를 PR #3, merge commit `a20c10cd`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- main 병합은 AI 코드 리뷰·전체 자동검증·PR CI·배포가 성공하고 의미 변경/운영 side effect가 없으면 AI가 판단해 진행하도록 공통 지침을 갱신했다.
- notification refresh의 겹친 초기/interval/focus 요청, lesson/history 전환 stale 응답, reconcile 동일 요청 double-click을 Phase 3 자동검증 대상으로 잡았다. 실제 Solapi 조회·예약·취소·발송은 실행하지 않는다.
- refresh는 scope별 latest request와 exact-query single-flight를 소유하는 controller로, reconcile은 동일 payload single-flight controller로 분리했다. React state·record 저장 반영은 App adapter에 남겼다.
- 검증: 알림 API 전용 묶음, Phase 3 controller fixture, runtime lint, `check:fast` scenario `809/809`, production 전체 `809/809`, 독립 build `348 modules`, safe browser smoke `4/4` 통과. 실제 Solapi·운영 데이터·운영 side effect는 사용하지 않았다.
- AI 코드 리뷰에서 상태 owner, stale 응답, cleanup, 오류 복구, 조회와 예약/취소/발송 분리를 확인했고 병합을 막는 발견은 없었다. 기존 1.6 MB production chunk 경고는 후속 번들 분리 부채로 유지한다.

## 2026-08-02 App 2차 리팩터링 연쇄 진행 기준

- Phase 1 auth/session을 PR #2, merge commit `28519782`로 main에 통합했고 main Production checks와 Vercel 배포가 성공했다.
- Phase 1~5를 2차 리팩터링으로 묶고 사용자 의도, 단계 순서, AI 검수, 지연 보고, 사람 gate 기준을 `docs/app-refactor-second-pass-plan.md`에 고정했다.
- 즉시 사람 판단이 필요하지 않은 발견은 queue/worklog에 남긴 채 자동검증·AI 리뷰·다음 단계 검수를 이어간다. main 병합과 운영 side effect만 필요한 순간에 중단한다.
- Phase 2는 최신 main의 별도 `codex/app-refactor-phase2-attendance` Worktree에서 시작한다.

## 2026-08-02 App 2차 리팩터링 Phase 2 — 출결 polling·동기화

- 기존 7초 출결 record sync hook/controller는 그대로 유지하고 `App.jsx`에 남아 있던 kiosk 날짜 rollover의 loaded-date ref, reload key, 30초 interval, focus/visibility listener를 `useAttendanceDateRollover`로 이동했다.
- 날짜 변경 시 hydration reload, 같은 날짜 hydration 실패 후 재시도, cleanup 뒤 무실행, kiosk preview/check의 날짜 변경 차단을 전용 fixture와 scenario에 고정했다. 저장 중 `dirty/saving/failed` record를 polling이 덮지 않는 기존 계약도 재검증했다.
- 첫 safe browser에서 hook 호출이 route mode 선언보다 앞서 TDZ 오류가 발생한 것을 발견했다. 호출 위치만 최소 수정했고 재실행 4/4가 통과했다. 정적검사만으로 닫지 않고 safe browser까지 수행해야 한다는 연쇄 검수 원칙의 근거로 남긴다.
- 운영 출결 입력, Supabase 쓰기, 알림 발송·예약·취소는 실행하지 않았다.

## 2026-08-01 App 고위험 경계 phase 1

- hydration/persistence, auth/session, attendance polling, notification_jobs/Solapi reconcile, 17개 teacher 화면 callback 조립의 owner·원천·draft·lifecycle·side effect·재시도·중복 위험을 inventory했다.
- session state, mount 1회 teacher 저장소 판독, 역할별 auth 결과, teacher 3채널 저장과 logout cleanup을 `useAppSession`으로 분리했다. App은 session 전환 뒤 화면 ready/active view만 조정한다.
- 저장 source 우선순위·저장 필드 제한·teacher/student/parent 로그인·실패·logout cleanup fixture를 추가하고 Production checks에 연결했다. 기존 출결 polling fixture의 in-flight 차단과 cleanup도 대조했다.
- notification refresh의 in-flight/stale 응답 보호 부재와 app_state CAS 부재는 원인을 숨기지 않고 후속 위험으로 남겼다. 운영 로그인·출결·알림 발송/예약/취소·SQL·유료 AI는 실행하지 않았다.
- 검증: auth/session·surface·security·attendance lifecycle 전용 검사, runtime lint, check:fast, production `809/809`, build `346 modules`, safe browser `4/4` 통과.

## 2026-08-01 수업일지 과거 기록 월 경계 연동 복구

- 운영 원천을 읽기 전용으로 대조해 8월 1일 수업과 7월 수업의 반 식별자·학생 명단·지난 숙제 연결은 정상임을 확인했다.
- 실제 원인은 7월 30일 교재·강의 내용이 빈 기록인데 화면이 그 직전 기록에서 탐색을 멈춰, 값이 남은 7월 28일까지 되짚지 못한 것이었다.
- 같은 정규반의 과거 기록을 최신순으로 보며 교재와 강의 내용을 각각 가장 최근의 비어 있지 않은 값으로 승계한다. 직전 기록의 메모·숙제 후속처리 의미는 유지하고 특강 기록은 제외한다.
- 월 경계 빈 기록 fixture와 safe browser 회귀를 추가했다. 운영 Supabase 쓰기, 알림 예약·발송·취소는 실행하지 않았다.
- 검증: 전용 연속성/selector 테스트, runtime lint, production `809/809`, build `345 modules`, safe browser `4/4` 통과.

## 2026-08-01 수업일지 월 이동 복구·자동 task 날짜 제목

- 7월 28일 점멸 방지 목적으로 전체 숨김 처리된 달력 상단 제어줄 안에 월 이동 버튼도 함께 사라진 원인을 확인했다.
- 기존 제어줄은 숨김 상태로 유지하고 달력 바로 위에 월 제목·이전 달·다음 달만 독립 탐색줄로 복구했다.
- ±30일 이동 대신 실제 월 이동으로 바꾸고 31일에서 짧은 달로 이동할 때 해당 달 말일로 보정한다.
- safe browser에 다음 달 이동 후 이전 달로 복귀하는 회귀 검사를 추가했다. 수업·출결·알림 원천 저장과 Solapi side effect는 없다.
- 오전 9시 자동화는 실행 시작 시 현재 task 제목을 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾸도록 갱신했다.
- 검증: 달력 model/view 전용 테스트, scenario `809/809`, runtime lint, build `345 modules`, safe browser smoke `3/3`, 전체 production 묶음을 통과했다.

## 2026-08-01 app_state 자동저장 경쟁 조건 inventory

- 공통 자동저장 대상 12개 key, 500ms 변경-key debounce, API upsert, 선택적 row metadata 경계를 정적 대조했다.
- 클라이언트 request ID가 UI 상태만 보호하고 DB 요청 역전, CAS, 저장 후 재조회는 보호하지 않는다는 점을 deterministic fixture로 재현했다.
- 전용 `test:app-state-autosave-inventory`를 추가하고 GitHub Actions Production checks에 연결했다.
- 운영 Supabase·Storage·notification_jobs·Solapi 쓰기, 실제 발송, SQL 적용은 0건이다.
- 검증: 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다. 브라우저와 build 첫 병렬 실행에서는 cold Vite 변환이 10초를 넘어 로그인 smoke 1건이 실패했으나 단독 재실행에서 2/2 통과했다.
- 다음 단위는 같은 브라우저 동일 key 저장 직렬화이며, key별 `updated_at` CAS와 재조회는 그 다음 단위로 분리한다.

## 2026-07-31 개발환경·자동검증 보강

- 표준 경로를 `C:\Dev\academy-os`로 고정하고 통합 완료된 refactor clone을 recoverable archive로 이동했다.
- Documents clone은 최신 main·clean 상태로 맞추고, Codex 오전 9시 자동 작업 전용으로 격리했다. 사람은 canonical repo만 사용한다.
- VS Code F5를 운영 원천에 연결하지 않는 안전한 가상 API/fixture 실행으로 변경했다.
- Node 24 기준 `.nvmrc`, `npm run doctor`, VS Code 경로 표시를 추가했다.
- ESLint runtime 규칙을 도입해 실제 잠복 `no-undef` 5건을 발견하고 수정했다.
- 브라우저 blank screen 대신 오류 ID를 보여주는 error boundary와 민감정보 없는 client runtime error 보고를 추가했다.
- Playwright smoke가 로그인과 `퇴원생 결석보강 -> 보강만 취소`를 가상 데이터로 자동 검사한다.
- scenario 출력은 실패와 총계만 보여주는 요약 runner를 추가했다.
- 전체 production test도 기본 출력은 `scenario 809/809`와 소요시간만 남기고, 실패할 때만 원인 주변 로그를 보여준다.
- 장문 지침과 worklog/handoff는 archive로 옮기고 현재 상태·큐·개발 계약으로 분리했다.
- 매일 오전 9시 독립 task가 전날 handoff를 읽고 안전한 한 단위를 날짜별 `codex/` branch에 commit/push하도록 등록했다.
- 운영 Supabase·Storage·notification_jobs·Solapi 쓰기와 실제 발송은 0건이다.
- 검증: runtime lint, client error contract, scenario `809/809`, production 전체 묶음, build 345 modules, browser smoke 2/2, production dependency audit 0건을 통과했다. 강제 downgrade가 필요한 개발 전용 audit 경고는 적용하지 않았다.

## 최근 완료 기준

- 퇴원생 결석보강 보강만 취소: 운영 사람 gate 완료.
- 수업일지 끝 공백 입력: 수정·전체 회귀 완료.
- 보충 상세 null provider 오류: 수정·전체 회귀 완료.
- UI-0~UI-9와 App 안전범위 1~18: main 통합 완료.

## 다음 기록 규칙

- 이 파일은 최근 10개 작업 또는 약 200줄 이내로 유지한다.
- 오래된 완료 항목은 월별 archive로 이동한다.
- 미룬 작업은 여기 복제하지 않고 `docs/deferred-work-queue.md`만 갱신한다.

## 2026-08-04 Solapi 4-7반 예약 명단 오판 긴급 수정

- 운영 원천에서 4-7반 8건이 모두 `학생이 현재 수업 명단에서 제외`로 취소된 것을 확인했다. 학생·수업 명단과 화목/토 개별 스케줄은 정상이다.
- Render UTC에서 `2026-08-04T00:00:00+09:00`의 로컬 요일을 읽어 화요일을 월요일로 오판한 것이 원인이었다. 날짜 구성요소를 UTC 달력값으로 검증·계산해 실행 서버 시간대 영향을 제거했다.
- 실제 Solapi 재예약은 사람 Gate로 남긴다. 배포 후 4-7반에서 `Solapi 예약 업데이트`를 한 번 누르고 8건을 확인한다.
