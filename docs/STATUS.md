# Academy OS Current Status

업데이트: 2026-08-05

## 2026-08-05 신규 체크박스 크기 정규화

- 수업일정표의 상세/PDF 포함 옵션과 신입생 보강 알림 옵션이 전역 `input` 크기를 상속하지 않도록 해당 화면 범위에서 `16×16px`로 정규화했다.
- 저장·API·알림 동작 변경은 없다. 관련 전용 테스트, CSS hygiene, runtime lint, build와 격리 safe browser `2/2`를 통과했다.

## 2026-08-05 신입생 보강 등록·알림

- 8월 운영 수업일지 78건을 읽기 전용으로 대조해 `makeup / 신입생 보강 / 학생 1명 / 결석보강 원천 없음`인 기존 수업 3건을 확인했다.
- 수업 등록에 `신입생 보강` 탭을 추가했다. 학생은 빈 명단에서 직접 선택하며 저장 원천은 기존 패턴과 호환되는 `lessonType=makeup`, `lessonTopic=신입생 보강`이다.
- 선택적으로 학부모·학생 알림톡을 수업 저장·Supabase 재확인 뒤 다음 정각에 예약한다. 수업·학생·대상별 고정 job ID로 재시도 중복을 막으며 실제 운영 예약·발송은 실행하지 않았다.
- lesson `21/21`, notification domain, runtime lint, build `421 modules`·main `928.62 kB`, production `827/827`, 집중 safe browser `1/1` 통과.

## 4차 리팩터링 현재 단위

- 4-3n은 test session POST/DELETE의 canonical·legacy payload alias, delete selector와 source action 응답을 `src/shared/server/testSessionWriteRouteRegistry.js`로 옮겼다. DB 저장·재조회/삭제 owner는 core data에 유지한다.
- 4-3m main `6bb35e06`의 GitHub Production checks는 성공했지만 Vercel은 24시간 build rate limit로 production 배포가 보류됐다. 4-3n은 exact-head 검증·push까지 진행하되 Vercel green 전 main 병합하지 않는다.
- 다음 4-3o는 4-3n 배포 gate 해소 뒤 최신 main에서 integrations status read 경계를 분리한다.
- 4-3m은 test session/attempt GET 두 개의 query alias/filter, source response와 실패 응답을 `src/shared/server/testSessionReadRouteRegistry.js`로 옮겼다. Supabase read owner는 기존 `listTestSessions/listTestAttempts`에 유지한다.
- 4-3l은 teacher-authenticated report snapshot POST의 guard, versioned parser와 report persistence service 조립을 `src/shared/server/reportSnapshotRouteRegistry.js`로 옮겼다. AppState CAS/readback·재시도 검증은 기존 domain/server owner에 유지한다.
- 4-3k는 app-state POST의 versioned parser, 보호 key 제외, `expectedUpdatedAt` CAS option과 오류 응답을 `src/shared/server/appStateWriteRouteRegistry.js`로 옮겼다. Supabase write/readback owner는 server의 `upsertAppState`에 유지한다.
- 4-3j는 app-state와 특강 guide GET 두 개의 source summary, 선택적 `stateRows`, guide 존재/fallback 응답을 `src/shared/server/appCoreReadRouteRegistry.js`로 옮겼다. Supabase read owner는 server의 `listAppState`에 유지한다.
- 4-3i는 교사 시험 후 제출 확인 POST의 teacher guard, body→action mapping과 statusCode 오류를 `src/shared/server/examPostConfirmRouteRegistry.js`로 옮겼다. AppState 저장·재조회와 mutation lock owner는 server action에 유지한다.
- 4-3h는 portal-state, 숙제 완료, 질문 CRUD, 시험 후 제출 4개 POST의 portal guard, body→action mapping과 기존 500/statusCode 오류를 `src/shared/server/portalWriteRouteRegistry.js`로 옮겼다. Supabase 저장·재조회와 mutation lock owner는 server action에 유지한다.
- 4-3g는 `GET /api/portal-data`의 portal session guard, scoped source read, role 응답과 401/404/500을 `src/shared/server/portalReadRouteRegistry.js`로 옮겼다. source filtering owner는 server의 `getPortalData`에 유지한다.
- 4-3f는 `POST /api/auth/teacher-account`의 Supabase 설정 gate, 현재 credential 확인, 입력 검증과 계정 저장 응답을 `src/shared/server/teacherAccountRouteRegistry.js`로 옮겼다. password hash와 teacher_accounts DB action은 server owner로 유지한다.
- 4-3e는 `POST /api/auth/login`의 role 검증, credential action 선택, session token/account 응답을 `src/shared/server/authLoginRouteRegistry.js`로 옮겼다. teacher/student/parent credential DB 함수와 HMAC token owner는 그대로 주입한다.
- 4-3d는 OPTIONS와 side-effect 없는 health/core status, 제한된 client runtime error 수집을 `src/shared/server/systemRouteRegistry.js`의 첫 route registry로 옮겼다. 전역 120-route 순서 hash는 registry 3개 + server 직접 117개로 동일하다.
- 4-3c는 HMAC session token 생성·만료·검증, Authorization token 추출과 teacher/portal/mixed request guard를 `src/shared/server/sessionRouteGuard.js`로 옮겼다. 13개 session route의 guard 종류·선행 순서와 credential DB owner는 그대로다.
- 4-3b는 header lookup, JSON body 2 MB/default·개별 limit, CORS origin, JSON response/preflight를 `src/shared/server/httpRouteAdapter.js`로 옮겼다. route 120개와 auth/session·DB/provider owner는 그대로다.
- 4-3a는 `api/server.js` 7,941줄·직접 route 120개(GET 31/POST 76/DELETE 13)의 method/path/order와 9개 family, session/credential 15개·dispatch token 2개 guard 의미를 기준선 fixture로 고정했다. 제품 runtime은 바꾸지 않았다.
- 4-1 API payload 계약은 공통 contract 24개와 종료 감사까지 main 반영 완료다.
- 4-2a row mapper 기준선은 `coreData` 36개(18쌍), 시험분석 9개, 합계 45개를 exact inventory로 고정했다.
- 4-2b는 Student/ClassTemplate/Lesson 6개와 특강 학생별 시간 helper를 `src/shared/persistence/coreIdentityRowMappers.js`로 옮겼다. null/default, schema fallback, special lecture legacy alias, `updated_at` token과 unknown-field drop을 동작 fixture로 고정했고 DB·provider owner는 바꾸지 않았다.
- 4-2c는 StudentIntakeApplicant/SpecialLectureApplication/SpecialLectureEnrollment 6개와 ID/status/session 정규화 helper를 `src/shared/persistence/intakeSpecialLectureRowMappers.js`로 옮겼다. Tally 조립·Supabase 저장·재조회 owner는 그대로다.
- 4-2d는 LessonRecord/Homework/MakeupTask/AttendanceEvent 8개와 JSON/status helper를 `src/shared/persistence/lessonActivityRowMappers.js`로 옮겼다. 수업일지·숙제·보충·출결 source write/CAS/readback와 알림 owner는 그대로다.
- 4-2e는 TestSession/TestAttempt/ExamPrep/SchoolEvent/AcademyReminder 10개와 순수 normalize helper를 `src/shared/persistence/learningCalendarRowMappers.js`로 옮겼다. 시험·학사일정 source write/CAS/readback·파생 일정·Slack owner는 그대로다.
- 4-2f는 AppState/ResourceMaterial/NotificationJob 6개와 자료 visibility helper를 `src/shared/persistence/platformSourceRowMappers.js`로 옮겼다. `coreData`의 36개 mapper는 모두 import 없는 module로 분리됐고 DB·Storage·provider owner는 그대로다.
- 4-2g는 시험분석 pipeline 9개 mapper와 로컬 ID helper를 `src/shared/persistence/examAnalysisPipelineRowMappers.js`로 옮겼다. DB RPC·Storage·유료 AI owner는 route/server에 유지했고 row mapper 45/45 추출 감사로 4-2를 닫았다.
- 4-2는 row mapper 45/45 추출 감사로 종료했다.

## 현재 기준

- canonical repo: `C:\Dev\academy-os`, `main`, `origin/main`
- 최신 commit은 `git log -1 --oneline`을 source of truth로 사용한다.
- 시험관리 `시험정보`는 반별 필터와 별도로 `전체 반` 조회를 지원한다. 반·고사 필터를 바꾸면 활성 학생의 학교·학년 행은 생성하되 시험기간과 수학 시험일은 확인된 원천이 없으면 빈칸으로 유지한다.
- 2026년 2학기 운영 시험정보 정리 중 잘못 삭제한 미확인 자동생성 행 12건은 같은 ID·학교·학년·고사로 복구하고 날짜만 비웠다. 대화에서 확인된 일정 11건은 변경하지 않는다.
- 2학기 중간 원본 메모와 재학생 학교를 재대조해 선덕중 중3 `10/14~10/16`, 창북중 중3 `10/19~10/21`, 창동고 고1 `10/7~10/14`를 운영 원천에 보완했다. 학년 근거가 없는 중학교 일정과 기록 없는 학교는 빈칸으로 둔다.
- 시험정보 표의 반복 `시험 후 총평`·`관리` 열은 `상세` 한 열로 합쳤다. 행에서는 `상세 관리`만 열고 수정·총평·삭제는 상세 모달 안에서 수행한다.
- 운영 재학생 7명과 시험정보 긴 이름 8행을 감사 정리해 선덕중·창동고·창일중으로 합쳤고, 긴 이름 잔존은 두 원천 모두 0건이다.
- 보충관리 상세의 저장·일정·알림 처리 상태 안내는 모달 상단 흐름을 밀지 않고 화면 하단 안전영역에 고정한다. 성공·진행·실패 문구와 닫기 행동은 기존과 같다.
- UI 통일 UI-0~UI-9와 기존 안전범위 App 리팩터링은 main 통합 완료다.
- 퇴원생 결석보강 `보강만 취소`, 수업일지 끝 공백 입력, 보충 상세 null 오류는 수정·운영 확인 완료다.
- 수업일지 달력은 숨겨진 제어줄과 분리된 이전·다음 달 탐색줄을 다시 표시하며 실제 월 단위로 이동한다.
- 수업일지의 `+ 수업 등록`과 조건부 `정규수업 열기`는 월 이동 하단 박스 안 오른쪽에 표시한다.
- 첫 화면 운영 알림은 입력 폼과 별도로 전체 목록을 접고 펼칠 수 있다.
- 보충관리는 요일별 또는 이름 가나다별 정렬을 지원하고, 시간은 시 선택 시 `00분`으로 시작해 분을 별도로 바꾼다.
- 결석보강 알림톡은 3종을 동시에 편집·확인하며 학생 문구 수정본을 학부모·당일 문구에 연동해 최종본으로 저장한다. 취소 가능한 Solapi 예약은 한 번에 취소하고 저장 상태·행동은 모달 하단 고정바에서 확인한다.
- 달력에서 결석보강 수업을 열면 일반 수업일지와 같은 헤더·출결·교재·수업내용·숙제·코멘트·저장·알림 구조를 사용한다. 차이는 헤더 아래에 원 결석 수업의 날짜·반·시간·결석 사유를 읽기 전용으로 한 줄 추가하는 것뿐이며, 숙제보충 전용 상세는 유지한다.
- 같은 학생의 결석보강 종료 뒤 정규수업이 30분 이내에 바로 이어지면 키오스크는 이를 한 번의 방문으로 처리한다. 보강 등원 때 두 수업일지에 같은 실제 등원시각을 저장하고 수업별 지각 여부는 따로 계산하며, 마지막 정규수업 하원 때 두 일지에 같은 최종 하원시각을 저장한다. 출결 알림 이벤트는 최초 등원과 최종 하원에만 각각 한 건 생성한다.
- 출결 키오스크는 수업이 하나로 확정된 미리보기를 5초 뒤 기존 확인 경로로 자동 처리한다. 같은 날 수업이 여러 개면 학생이 수업을 선택하기 전에는 자동 처리하지 않으며, 수동 확인과 타이머가 겹쳐도 저장은 한 번만 실행한다.
- 수업일지의 교재·강의 내용은 같은 반 과거 기록을 역순으로 확인해 필드별 최신 비어 있지 않은 값을 월 경계 너머에서도 이어받으며, 특강 기록은 정규반에 섞지 않는다.
- 월별 정산의 신규생 회차제는 예정 시간표가 아니라 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 추가 회차로 중복 계산하지 않는다. 퇴원일이 해당 월에 있으면 교사 고정 override가 없는 한 자동 퇴원 정산하며, 출결 달력은 출석·결석·지각·대기를 서로 다른 색으로 구분한다.
- 학생별 정산 행과 출결·수업 상세에는 `휴강 n회 · 정규 회차 포함`, `연결 보강 n회 · 추가 계산 없음`, `대기 n회 · 출결 미확정`처럼 예외 적용 근거를 별도 표기한다.
- 특강 정산은 확정 수강 계획과 실제 특강 수업일지 출결을 분리해 `계획/일지/출결/일지 누락`을 함께 표시한다. 학생 프로파일에서는 선택 월의 정규·특강 출결을 한 화면에서 확인한다.
- 학생 프로파일의 선택 월에서 `수업일정표`를 열고 상세 정보 표시 여부를 선택한 뒤 제출 문구를 복사하거나 PDF로 인쇄한다. 전달 메모는 이번 미리보기와 출력에만 포함되고 저장되지 않으며 실제 발송은 하지 않는다.
- 수업일정표는 월간 달력과 하단 수업·출결 표, 변동사항을 한 화면에 표시한다. 상단 대상별 명칭은 제거하고 상세 정보만 선택하며, PDF에는 달력·표·변동사항을 각각 포함하거나 제외할 수 있다.
- 월별 정산의 횟수 버튼을 열면 시스템 계산 횟수를 대조하고 `최종 정규 횟수`를 교사가 확정할 수 있다. 확정 횟수는 수업일지 유무와 관계없이 신입·퇴원 계산과 PDF에 반영되며 월정액 금액은 유지한다. 조정금액 입력 열은 제거했다.
- 최종 정규 횟수 상세 모달에는 Supabase 저장·재조회 확인 버튼이 있다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`에서 확정값을 출력하며, 보고서 창에는 브라우저 자동 인쇄와 별도로 `인쇄하기` 버튼이 있다.
- 학생 신규 저장은 중복 ID/로그인을 덮어쓰지 않는 insert-only이고, 목록 행·프로필·Tally/특강 반영·퇴원 취소는 학생별 `updated_at` CAS 뒤 Supabase 재조회까지 일치해야 완료한다. 저장 중 후속 입력과 충돌 입력은 화면에 남겨 새 서버 버전으로 다시 저장하며 신규 모달은 확인 전 닫히지 않는다.
- 학생 추가·반 이동·반관리·퇴원은 학생 반 필드와 미래 수업 `studentIds`를 하나의 versioned save plan으로 저장한다. 중간 충돌은 이미 반영한 직접 원천을 역순 보상하고 원래 버전까지 재조회하며, 성공도 두 원천의 Supabase 재조회가 모두 일치해야 화면에 반영한다. 과거 수업과 변경 대상 밖 수동 명단은 보존한다.
- 수동 학사일정 등록·수정·삭제는 일정별 `updated_at` CAS·insert-only·Supabase 재조회 대조 뒤에만 화면 목록을 교체한다. 결과 불명 신규 저장은 같은 ID로 안전하게 재시도하고, 충돌·실패에서는 모달 입력을 유지하며 저장 중 편집·닫기를 잠근다.
- 시험관리에서 파생된 시험기간·수학시험 일정은 `exam_prep_rows`와 연결 `preExam lessons`를 한 versioned plan으로 저장한다. 행·수업별 CAS와 Supabase 재조회, 동일 요청 재시도, 중간 실패의 역순 보상 뒤에만 화면을 교체하며 수동 보호·자동생성 제외 수업과 연결 기록·알림 작업은 자동 덮어쓰기·삭제하지 않는다.
- 수업 달력의 복사·취소·되돌리기는 하나의 versioned history action으로 `lessons`와 복사 숙제를 저장한다. 행별 CAS/insert-only·Supabase 재조회·중간 실패 역순 보상 뒤에만 UI와 undo stack을 바꾸며, 결과 불명 복사는 같은 수업 ID와 계획으로 재시도한다. 복사 뒤 새 기록·숙제·알림 작업이 연결되면 자동 되돌리기를 막고, 취소 복구는 현재 서버 기록·숙제를 다시 읽어 화면에 반영한다.
- 수업일지의 `lesson_student_records`와 숙제 다중 행은 하나의 versioned save plan으로 저장한다. 기존 행은 `updated_at` CAS, 신규 행은 insert-only를 사용하고 모든 행의 Supabase 재조회가 일치해야 화면 원천을 갱신한다. 동일 저장 재시도는 추가 쓰기 없이 성공하며 중간 실패는 역순 보상한다. 보상 중 더 최신 행이 발견되면 덮지 않고 부분 실패로 표시하며, 충돌·실패와 저장 중 후속 입력의 draft를 유지한다.
- 수업일지 핵심 저장 모듈은 앱 시작 때 미리 받아 둔다. 열린 탭 사이에 Vercel 배포가 교체되어도 저장 시점에 사라진 이전 hash chunk를 새로 요청하지 않으며, 실패가 나면 하단 바에 원인 상세와 보존 중인 변경 건수를 함께 표시한다.
- 수업일지 월간 달력은 시작시각을 우선 유지하되 같은 시각에는 특강·클리닉을 보충수업과 정규수업보다 먼저, 같은 유형은 이름순으로 표시한다. 비활성 저장 버튼은 대기 커서가 아니라 사용 불가 커서를 사용하고 실제 저장 중에만 대기 커서를 표시한다.
- 학생 개별 스케줄에 요일이 있으면 같은 기본 반의 정규수업·휴강 명단, 출결 선택, 학생 포털, 알림 발송 직전 확인, 정산에서 기본 반 요일보다 우선한다. 보강·시험대비·특강처럼 직접 정한 명단은 유지하며, 프로필 저장 시 미래 정규수업 명단도 기존 CAS·Supabase 재조회 절차로 맞춘다.
- 학생 개별 요일 판정은 실행 서버 시간대와 무관하게 수업의 서울 달력 날짜 그대로 계산한다. Render UTC에서 화요일 수업을 월요일로 오판해 Solapi 예약을 명단 제외 처리하던 회귀를 교정했다.
- 교사 `숙제현황`의 확인 상태는 더 이상 화면에 먼저 반영한 뒤 실패를 console로만 남기지 않는다. 기존 versioned 숙제 행 저장을 사용해 `updated_at` CAS와 Supabase 재조회가 확인된 뒤에만 App 원천을 교체하며, 저장 중 행을 잠그고 충돌·실패에서는 이전 상태와 행별 실패 표시를 유지한다.
- 자료함은 stable ID·생성 토큰의 insert-only/CAS 메타데이터 row와 private Storage 파일을 함께 관리한다. 파일은 생성 토큰·내용 해시 경로에 업로드하고 row 저장 실패 시 새 객체를 정리한다. 삭제는 파일 백업·Storage 삭제 뒤 row CAS를 실행하며 충돌 시 정확한 경로로 파일을 복구한다. 교사 또는 해당 학생·학부모 bearer를 서버에서 다시 확인한 뒤에만 외부 링크나 서명 URL을 발급하고, 포털 초기 payload도 공개 범위로 제한한다. 성공은 Supabase 목록 재조회 뒤에만 화면에 반영한다.
- 보고서 snapshot은 공용 `app_state` 자동저장에서 분리했다. 교사 bearer가 필요한 전용 API가 최신 `reportSnapshots`와 `updated_at`을 읽고 CAS append한 뒤 Supabase 재조회가 일치해야 화면에 완료를 표시한다. 결과 불명 재시도는 같은 stable report ID를 회수해 중복을 만들지 않으며, `모의 발송`은 실제 알림 없이 저장 상태만 기록한다.
- 학생별 오답 `wrongProblems`는 공용 `app_state` 자동저장에서 분리했다. 오답관리의 명시 저장 버튼이 해당 key의 `updated_at` CAS와 Supabase 재조회 일치를 확인한 뒤에만 저장 완료를 표시하며, 저장 중 후속 수정과 충돌·실패 입력은 local draft에 유지한다.
- 수업일지에서 만드는 등원보충 초안은 학생·원 숙제·task 유형으로 고정한 요청 ID를 사용한다. 신규 `makeup_tasks`는 insert-only, 기존 항목은 `updated_at` CAS로 저장하고 Supabase 재조회가 일치해야 완료한다. 저장 응답만 유실된 재시도는 같은 항목 한 건으로 회수하며 다른 화면의 최신 수정은 덮지 않고 수업일지 draft를 유지한다.
- 보충관리 상세는 `makeup_tasks.linkedLessonId`, `lessons.sourceMakeupTaskId`, 실제 일정, 미발송 `notification_jobs`를 함께 대조한다. 연결 수업 누락·역연결 ID 불일치·중복·다른 원천·예상 밖 일정 차이에서는 더 이상 반영 완료로 표시하지 않고 일정 저장과 새 알림 예약을 막는다. 기존 예약 확인·취소 화면은 원인 확인을 위해 유지하며 자동 복구나 provider 행동은 실행하지 않는다.
- 보충 일정 생성·변경은 연결 `lessons`와 `makeup_tasks`를 하나의 versioned save plan으로 저장한다. 신규 insert-only·기존 `updated_at` CAS·Supabase 재조회가 모두 일치해야 화면 원천을 갱신하고 그 뒤에만 기존 알림 orchestration을 호출한다. 결과 불명 뒤 날짜·시간·메모가 바뀌어도 logical task의 최초 audit를 먼저 회수하고 확인된 새 버전에 최신 draft를 CAS 저장한다. provider 실패는 원천 저장 실패로 되돌리지 않고 `일정 저장 완료 · 알림 예약 실패`와 provider-only 재시도 범위로 분리한다. 두 번째 원천 실패의 역순 보상과 최신 변경 보호도 유지한다.
- 월별 출결·수업 모달은 데스크톱에서 최대 1320px까지 넓어져 달력 7열을 가로 스크롤 없이 한눈에 확인한다.
- 월별 정산 표에서는 `월별 스케줄`, `정산 처리` 열을 표시하지 않는다. 기존 스케줄·제외 저장 원천과 금액 계산은 보존한다.
- 월별 정산 기본월은 서울 기준 매월 1~2일에는 지난달, 3일부터는 이번 달이다. 정산월·저장 상태·PDF 행동은 한 컨트롤 카드에서 표시한다.
- 월별 정산 PDF는 정산 제외 학생을 뺀 `이름·최종 정규 횟수·금액`을 출력하되 최종 정규 횟수 합계는 표시하지 않고 총 금액만 합산한다. 보강 달력 시간은 학생 정규 스케줄이 아니라 실제 보강 수업일지 시간을 사용한다.
- 2026년 7월 운영 원천을 읽기 전용으로 재계산한 교정 예상은 이채빈 정규 5회, 김형준 11회, 이윤채 11회, 김예나 퇴원 비례 13/14다. 운영 정산 snapshot 저장은 사람 확인 뒤 실행한다.
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Node 24 기준, `npm ci` 사용.
- Vercel Hobby 배포를 위해 `api/**/*.js` Serverless Function 후보는 12개 이하로 유지하며 production inventory가 초과를 차단한다.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
- 로컬 browser smoke는 Worktree별 가용 frontend/API 포트를 자동 선택하고 기존 preview를 재사용하지 않는다.
- GitHub Actions는 lint, production test, build, browser smoke를 실행하는 것이 목표다.
- `app_state` 자동저장 10개 key의 요청 역전·CAS/재조회 경계를 검사하는 inventory가 Production checks에 연결됐다. 보고서 snapshot과 학생별 오답은 전용 명시 저장 계약을 사용한다.
- 시험정보 행 자동저장은 같은 브라우저에서 요청을 하나씩 직렬 처리하고 행별 `updated_at` CAS 뒤 Supabase 재조회가 일치해야 저장 완료로 처리한다. 저장 중 들어온 최신 입력은 첫 성공 행의 새 버전으로 재기준화해 보존하고, 다중 탭·기기 충돌은 자동 병합하지 않은 채 현재 입력과 `저장 실패` 상태를 유지한다. 삭제 감사 rollback만 명시적 `allowRestore`로 행 재생성을 허용한다.
- Tally 신규생 후보 입력은 후보별로 요청을 직렬 처리하고 `updated_at` CAS와 Supabase 재조회가 일치해야 저장 완료로 처리한다. 저장 중 후속 입력은 첫 성공 버전으로 재기준화해 최신값만 이어서 저장하며, 충돌·결과 불명 실패는 자동 재전송하지 않고 현재 입력과 실패 상태를 유지한다. 정식 등록은 해당 후보 입력 저장이 끝난 뒤 시작한다.
- App 2차 리팩터링 Phase 1 auth/session은 PR #2로 main 통합됐다. session state·초기 저장소 판독·login/logout·teacher 저장 cleanup은 `useAppSession`이 소유하며 전용 fixture가 Production checks에 연결됐다.
- Phase 2~5와 AI 연쇄 검수·지연 보고·사람 gate 원칙은 `docs/app-refactor-second-pass-plan.md`가 기준이다.
- Phase 2 branch에서 출결 kiosk 날짜 rollover의 ref·reload key·interval/listener를 출결 hook 경계로 이동하고 cleanup·동일 날짜 hydration 실패 재시도 fixture를 추가했다.
- Phase 2는 PR #3으로 main 통합됐고 main Production checks·Vercel이 성공했다.
- Phase 3 notification refresh/reconcile은 PR #4, merge commit `7fb366f9`로 main 통합됐고 main Production checks·Vercel이 성공했다.
- Phase 4 app_state persistence는 변경 key를 브라우저에서 직렬화하고 기존 `updated_at` CAS와 Supabase 재조회가 일치한 뒤에만 저장 완료로 판정한다. 충돌 시 입력을 유지하고 자동 반복하지 않으며 전체 자동검증을 통과했다.
- 수업일지 생성 action, 첫 화면 알림 접기, 보충 정렬·시간 입력·알림톡 3종 통합 수정은 최신 main 위에서 재검증했다. safe browser는 Worktree별 격리 포트를 지원해 다른 작업의 미리보기를 재사용하지 않는다.
- Phase 5는 PR #9, merge commit `254cd0b1`로 main 통합됐다. 17개 교사 화면의 component/props/callback 조립은 `TeacherViewOutlet` adapter가 담당하고, `App`은 상태와 저장·삭제·예약·취소·발송·재대조 handler를 계속 소유한다. main Production checks와 Vercel production 배포가 성공했다.
- App 3차 리팩터링 3-0은 `docs/app-refactor-third-pass-plan.md`의 크기·시간 기준선을 사용한다. 검증 선택은 `docs/testing-policy.md`가 기준이며 lesson·supplement·student·notification·settlement fast 묶음을 제공한다.
- 3-1 첫 단위에서 Notification Center top-level 화면을 notification 도메인 파일로 물리 분리했다. App-level 알림 조회·취소·reconcile callback과 특강 panel binding은 유지하고, 화면의 기존 공지 발송·예약·삭제 request binding도 의미 변경 없이 함께 이동했다.
- 3-1 두 번째 단위에서 Teacher Lesson Hub 화면 조립을 `src/domains/lessons/TeacherLessonHubV2.jsx`로 물리 분리했다. 달력 local filter·focus·키보드 navigation은 새 화면이 소유하고, 수업일지 저장·알림 예약/취소/발송/reconcile handler와 상세 화면은 App runtime binding을 통해 기존 owner를 유지한다.
- 3-1 세 번째 단위에서 Lesson Journal Detail 화면을 `src/domains/lessons/LessonJournalDetail.jsx`로 물리 분리했다. 화면 local draft·overlay·예약 표시 상태는 도메인 화면에 두고, 저장·삭제·알림 예약/취소/발송/reconcile callback과 OS 예약 조회 transport는 App owner를 유지한다.
- 3-2 첫 단위에서 수업일지 record·homework·makeup local draft 조작과 저장 성공/실패 전이를 `useLessonJournalDraftController`로 묶었다. App의 Supabase 저장·재조회 callback은 유지한다. 성공 때도 요청 중 후속 입력이 있으면 최신 draft와 편집 모드를 보존해 재저장을 안내하고, 실패·부분저장 때도 수정본을 유지한다.
- 3-2 두 번째 단위에서 수업일지의 persistence callback 10개와 provider/transport callback 7개를 `lessonJournalEffectAdapter` 계약으로 묶었다. 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용은 provider 표면에 두고, App의 실제 저장·삭제·AI·Solapi·재대조 함수는 이동하지 않았다. Teacher Lesson Hub는 개별 고위험 callback 대신 adapter 하나를 상세 화면에 전달한다.
- 3-2 세 번째 단위에서 수업 등록·수정 `LessonModal` local controller를 lesson 도메인 파일로 옮겼다. local draft·validation·저장 표시는 새 화면이 소유하고, 실제 bulk 저장·Supabase 재조회·휴강 preflight·상태 반영은 App callback owner를 유지한다. 달력·수업일지·수업 모달 경계를 모두 대조해 3-2를 닫는다.
- 3-3에서 보충관리의 기존 draft·일정·취소·알림 제어 controller 분리를 재대조하고, App에서 화면으로 전달하던 8개 callback을 `supplementEffectAdapter`의 persistence 3개·provider 2개·orchestration 3개 표면으로 묶었다. 실제 저장·Supabase 재조회·Solapi 예약·취소 owner는 App에 유지하며 3-3을 닫는다.
- 3-4 첫 단위에서 학생관리의 16개 변경 callback을 `studentEffectAdapter`의 draft 1개·persistence 7개·deletion 5개·lifecycle 2개·audit 1개 표면으로 묶었다. App의 학생 저장·재조회·퇴원·복구·영구 삭제 구현은 그대로 유지하며 다음 학생 프로필 물리 분리의 고정 계약으로 사용한다.
- 3-4 두 번째 단위에서 `StudentManager` 후반의 학생 프로필 화면·오류 경계·전용 helper를 `StudentProfileModal.jsx`로 옮겼다. 기존 프로필 본문과 callback 10개의 의미는 그대로이며, 실제 저장·Supabase 재조회·오류 복구는 App owner를 유지한다. `StudentManager.jsx`는 2,168줄에서 994줄로 줄었다.
- 3-4 세 번째 단위에서 퇴원 확인·인계 PDF·단일/일괄 영구삭제 4개 overlay를 `StudentLifecycleOverlays.jsx`로 옮겼다. 화면 JSX 11,029자는 기준 commit과 동일하며, audit·복원·삭제 controller 및 App의 Supabase 재조회 owner는 이동하지 않았다. `StudentManager.jsx`는 826줄로 줄었다.
- 3-4 마지막 단위에서 퇴원생 목록·정렬·선택 toolbar를 `StudentWithdrawnList.jsx`로 옮겼다. 20개 prop은 직접 identity를 유지하고 local dirty/선택 및 lifecycle controller는 Manager에 남겼다. `StudentManager.jsx`는 755줄로 줄었으며 profile·퇴원 목록·lifecycle overlay 경계를 대조해 3-4를 닫는다.
- 3-5 첫 단위에서 알림 이력·특강관리 화면에 전달되던 13개 callback을 `notificationEffectAdapter`의 history provider/transport와 특강 persistence/deletion/orchestration/navigation 표면으로 묶었다. 두 화면의 refresh identity와 App의 저장·재조회·Solapi effect owner, Notification Center 내부 공지 draft/request controller는 유지한다.
- 3-5 두 번째 단위에서 공지 수신자·작성·이력·취소·reconcile 조립을 `useNotificationNoticeController`로 옮겼다. `NotificationCenter`는 469줄에서 144줄 render owner가 됐으며 local draft, 저장된 알림 이력, provider 상태와 실제 발송/예약/취소 경계를 유지한 채 3-5를 닫는다.
- 3-6 첫 단위에서 월별 정산의 선택 월, local recovery draft, row/summary selector와 교사 확정값 저장 조립을 `useMonthlySettlementController`로 옮겼다. `MonthlySettlementPanel`은 787줄에서 541줄로 줄었고 App의 app_state 저장·Supabase 재조회 대조 owner는 유지한다. 저장 중 후속 입력은 month/revision guard로 보존해 재저장을 안내한다.
- 3-6 closeout에서 월별 출결·수업 달력과 정규 정산 표를 `MonthlySettlementCalendar`·`MonthlySettlementRegularTable`로 분리했다. 두 JSX 본문은 기준 main과 문자 단위로 같고 state/effect/API/Storage가 없다. `MonthlySettlementPanel`은 184줄 화면 조립 owner가 됐으며 계산 controller와 App 저장·재조회 owner를 분리한 상태로 Settlement 경계를 닫는다.
- 3-7 첫 단위에서 이미 분리된 Lesson·Supplement·Student·Notification·Settlement top-level 화면을 동적 import로 연결했다. 초기 main JS는 1,656.92 kB에서 1,379.15 kB, gzip은 427.24 kB에서 351.03 kB로 줄었고, 5개 화면은 별도 chunk다. 로딩 표시와 chunk 실패 오류 번호·안전 새로고침은 safe browser로 검증했다.
- 3-7 두 번째 단위에서 `App.jsx` 안의 시험분석 helper·화면 4,612줄을 `ExamAnalysisPipelineCenter.jsx`로 물리 분리하고 여섯 번째 lazy 화면으로 연결했다. 13개 API request owner는 App runtime에 유지했다. 초기 main JS는 1,181.41 kB, gzip 296.06 kB로 줄었고 유료 AI·업로드·저장은 실행하지 않은 안전 브라우저로 chunk 진입을 검증했다.
- 3-7 세 번째 단위에서 오답관리·시험지관리·자료함·숙제현황 4개 화면 1,335줄을 `LearningSupportCenters.jsx`로 분리해 하나의 저빈도 shared lazy chunk로 연결했다. 저장·삭제·교사 확인 callback과 학생 화면 owner는 App runtime에 유지했다. 초기 main JS는 1,142.78 kB, gzip 285.71 kB이며 App은 15,176줄·663,337 bytes다.
- 3-7 네 번째 단위에서 학사일정·반관리·수업연구·AI 도구 화면 1,509줄을 `PlanningToolCenters.jsx`로 분리해 shared lazy chunk로 연결했다. 일정 저장·시험행 동기화·반 명단·수업연구 callback은 App owner를 유지했다. 초기 main JS는 1,092.41 kB, gzip 272.16 kB이며 App은 595,886 bytes다.
- 3-7 다섯 번째 단위에서 첫 화면·수업일지 운영 알림과 특강 안내문 보조 화면 3개를 `DashboardAuxiliaryPanels.jsx`로 분리해 shared lazy chunk로 연결했다. 화면 본문 42,078자는 runtime 주입을 제외하면 기준 main과 동일하고, 알림 저장·삭제와 특강 저장·삭제 callback owner는 유지했다. 초기 main JS는 999.16 kB, gzip 248.14 kB이며 App은 11,836줄·551,722 bytes다.
- 3-7 여섯 번째 단위에서 시험 대비와 설정 화면을 각각 `ExamPrepCenter.jsx`, `SettingsCenter.jsx`로 분리해 별도 lazy chunk로 연결했다. helper와 설정 transport는 frozen runtime으로 App owner를 유지하며 화면 본문 6개 함수는 기준 main과 문자 단위로 동일하다. 초기 main JS는 956.13 kB, gzip 237.03 kB이며 App은 10,855줄·507,358 bytes로 줄어 Babel의 App 500 KB 경고가 사라졌다.
- 3-7 마지막 단위에서 보충 전용 수업 상세와 수업 준비 메모를 `LessonNestedPanels.jsx`의 22.40 kB shared nested lazy chunk로 분리했다. 두 함수 본문은 runtime 주입을 제외하면 기준 main과 문자 단위로 동일하고 실제 일정 저장·알림 예약·보충 완료·메모 저장 callback owner는 유지했다. 초기 main은 934.69 kB, gzip 231.48 kB다. 3-0 대비 각각 43.1%·45.3% 감소하고 12개 물리 chunk·21개 lazy component 경로와 App Babel 경고 제거를 고정해 3-7을 닫는다.
- 3-8 종료 감사에서 session·lesson·supplement·student·notification·settlement·exam/settings의 화면/draft owner, authoritative 저장 원천, provider side effect와 오류 복구를 재대조했다. 정산 local recovery, notification/exam transport 예외, effect adapter 순수성을 전용 fixture로 고정하고 3차 리팩터링 3-0~3-8을 완료 상태로 닫는다.
- App/API 4차 리팩터링은 사용자의 명시적 승인으로 `docs/app-refactor-fourth-pass-plan.md`의 4-0~4-8 범위에서 시작한다. 4-0 기준은 main `4d351314`이며 App 10,903줄, server 7,806줄·직접 route 120개, coreData 5,798줄·row mapper 44개, App.css 21,727줄, safe browser 47개다. local fast 1.63~4.45초, full production 80.88초, full browser 114.80초를 비교 기준으로 사용한다.
- 4-1a는 6개 직접 versioned write route의 pure payload/response contract와 route inventory를 추가했다. canonical field, 명시한 legacy alias, 400 오류 shape, 공통 `source/verified/auditId` 응답을 1초 미만 fixture로 검증하며 실제 server/client 연결과 저장 동작은 바꾸지 않았다.
- 4-1b 첫 단위는 `/api/lesson-journal/rows/save`의 client/server가 같은 contract를 사용한다. 미지 field와 잘못된 top-level type은 DB action 전에 400으로 차단하고, client는 Supabase verified response shape를 확인한 뒤에만 기존 readback 대조와 App 원천 교체를 진행한다.
- 4-1c는 `/api/lesson-journal/history-action`의 복사·취소·되돌리기 payload와 verified response를 같은 contract에 연결했다. stable pending copy와 undo stack, Supabase CAS/readback/rollback 및 실패 복구는 기존 owner에 유지한다.
- 4-1d는 `/api/lesson-journal/makeup-tasks/save`의 canonical/legacy payload와 verified response를 같은 contract에 연결했다. initial bundle 예산 회귀는 저장 시점 dynamic import로 해소했고 stable task ID·CAS/readback·부분 저장 draft 복구는 유지한다.
- 4-1e는 `/api/supplement-schedules/save`의 atomic lesson/task plan과 verified response를 같은 contract에 연결했다. 결과 불명 최신 draft 수렴, CAS/readback/rollback, source saved/provider failed 재시도 범위는 유지한다.
- 4-1f는 `/api/attendance/check`의 수동·키오스크 공용 request와 `record/action/mode/alimtalk` response를 같은 contract에 연결했다. 연속 방문 원천 저장, attendance event, 수동 결석 Solapi 예약과 키오스크 queue는 기존 server owner에 남고 provider 실패와 원천 저장 결과의 구분을 유지한다.
- 4-1g는 `/api/class-rosters/save`의 학생·미래 수업 변경 request와 verified response를 같은 contract에 연결했다. 학생/수업 CAS·Supabase 재조회·중간 실패 rollback·cleanup과 실패 시 화면 draft 보존은 기존 owner에 유지한다.
- 4-1h는 `/api/school-calendar/derived-save`의 시험정보·연결 직전수업 변경 request와 verified response를 같은 contract에 연결했다. 두 source의 CAS·Supabase 재조회·동일 요청 재시도·중간 실패 rollback과 수동 보호는 기존 owner에 유지한다.
- 4-1i는 `/api/app-state`의 canonical `{ states, expectedUpdatedAt? }` request와 `{ source, states }` response를 같은 contract에 연결했다. key별 local draft·직렬 저장·CAS·Supabase 재조회와 충돌·후속 입력 보존은 기존 controller owner에 유지한다.
- 4-1j는 teacher auth가 필요한 `/api/report-snapshots`의 canonical snapshot request와 recovered/readback response를 같은 contract에 연결했다. stable ID 재시도, `app_state.reportSnapshots` CAS·Supabase 재조회와 실패 draft 보존은 기존 action/persistence owner에 유지한다.
- 4-1k는 파일 없는 `/api/resource-materials` POST의 canonical metadata request와 verified row response를 같은 contract에 연결했다. stable ID·insert-only/CAS·결과 불명 최신 draft 수렴·Supabase 목록 재조회와 실패 form/list 보존은 기존 API/action owner에 유지한다.
- 4-1l은 teacher auth가 필요한 `/api/resource-material-files` POST/DELETE의 canonical file/material request와 Storage+row verified response를 같은 contract에 연결했다. stable path·upload rollback·delete backup/restore·CAS/readback과 UI 보존은 기존 operation/API/action owner에 유지한다.
- 4-1m은 provider 실행이 없는 `POST /api/notification-jobs`의 canonical `{ notificationJob }` request와 `{ source, notificationJob }` response를 같은 contract에 연결했다. App·공지·실패 기록은 공통 source helper를 사용하며 Solapi 예약·취소·reconcile route와 실행 owner는 변경하지 않았다.
- 4-1n은 `POST /api/notification-jobs/reserve`의 canonical job/reason/dry-run request와 source/job/reserved response를 같은 contract에 연결했다. 예약 pending source 저장, 같은 예약 재사용, 기존 group 취소, 교사 취소 경합 보호와 실패 source 기록은 유지하고 실제 Solapi는 호출하지 않았다.
- 4-1o는 `POST /api/notification-jobs/cancel`의 canonical job ID/reason/provider flag와 source/job response를 같은 contract에 연결했다. 기존 `id` alias와 nullable provider 취소 결과는 보존하고, safe API에서는 source 취소만 검증해 실제 Solapi를 호출하지 않았다.
- 4-1p는 `POST /api/notification-jobs/reconcile-solapi`의 date/lesson/job ID/range selector와 provider checked/source job/record response를 같은 contract에 연결했다. 90초 single-flight와 App merge owner는 유지하고 safe API에서는 source를 바꾸지 않는 provider read만 검증했다.
- 4-1q는 `POST /api/notification-jobs/reserve-bulk`의 canonical jobs/concurrency/dry-run/reason과 per-job/count response를 같은 contract에 연결했다. 기존 `jobs` alias, 부분 실패·재사용·App batch merge를 보존하고 safe API에서는 모든 job을 dry-run으로만 기록했다.
- 4-1r은 `POST /api/notification-jobs/readiness-check`의 window/clock/Slack flag와 source issue response를 같은 contract에 연결했다. source read와 누락 판정은 유지하고 safe API는 `notifySlack:true`를 거부해 외부 side effect 없이 점검 결과만 검증한다.
- 4-1s는 `POST /api/notification-jobs/dispatch-due`의 token/dry-run/limit/clock과 processed/source/reconcile response를 같은 contract에 연결했다. 인증 판단은 payload 정규화 전에 유지하고 safe API는 0건 처리·source job 보존과 민감 override 401만 검증해 실제 Solapi를 호출하지 않는다.
- 4-1t는 유료 실행이 없는 `POST /api/exam-analysis-runs` metadata 저장의 canonical run과 source response를 같은 contract에 연결했다. 기존 `{ run }`·root 직접 legacy 입력은 명시적으로 보존하고 safe API에서 가상 row 저장·재조회·화면 reload 지속성만 검증한다.
- 4-1u는 `POST /api/exam-analysis-runs/confirm-question-count`의 교사 확정 문항 수·판독 근거 request와 run/question rows/event response를 같은 contract에 연결했다. 1~200 정수는 DB 쓰기 전에 검증하고 safe API에서 1~N 가상 행·확정 event·reload 지속성만 확인해 유료 AI를 호출하지 않는다.
- 4-1v는 `POST /api/exam-analysis-runs/save-question-reviews`의 교사 문항별 검수 request와 run/question rows/event/teacher review response를 같은 contract에 연결했다. 빈 목록·잘못된 문항 번호·중복 번호는 DB 쓰기 전에 400으로 차단하며 safe API에서 교사 메모·확정·주요문항 저장, API 재조회와 reload 지속성을 확인해 유료 AI를 호출하지 않는다.
- 4-1w는 `POST /api/exam-analysis-runs/save-prompt-studio`의 analysis run·expected revision·교사 작업본 request와 authoritative run/draft/verification response를 같은 contract에 연결했다. 음수·소수 revision과 미지 field는 쓰기 전에 400으로 차단하고 stale revision은 409로 현재 source를 보존하며, safe API에서 명시 저장·재조회·reload를 확인해 AI·Storage를 실행하지 않는다.
- 4-1x는 `POST /api/exam-analysis-runs/save-output-drafts`의 analysis run·산출물 입력·블로그/인스타 교사 수정본 request와 authoritative run/event/source response를 같은 contract에 연결했다. 실제 audit summary 병합·정규화·Supabase 재조회 owner는 유지하고 safe API에서 명시 저장·재조회·reload만 확인해 AI 생성·Storage를 실행하지 않는다.
- 4-1 종료 감사는 공통 contract 24개와 server 직접 mutation route 89개를 대조했다. 남은 65개는 4-2/4-3 row·route 경계 42개와 4-5 Storage·Tally·AI·provider·seed 경계 23개로 분류하며, 새 route는 분류 없이 추가할 수 없다.

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. App 2차 Phase 1~5와 3차 3-0~3-8, P1 운영 저장 신뢰성, P2 modal 통일 후속, P3 알림톡 설정 관리는 완료됐다. P3 closeout은 제품 경로 9개, 설정 key 10개, Solapi provider template 4개의 seed→draft→persisted final→provider 변수 연결과 재시험 독립 11시 transport 부재를 자동 검증한다. 공지 preset 3개·특강 guide seed는 새 초안에만 적용하며 현재 draft·기존 job·보충 교사 최종본과 provider contract를 보존한다.
2. App 3차 리팩터링 3-0~3-8은 production main 43.1%·gzip 45.3% 감소, 12개 물리 lazy chunk, App Babel 500 KB 경고 제거와 종료 소유권 감사까지 완료했다.
3. App/API 4차는 4-0 기준선과 4-1a~4-1x, 4-1 종료 감사까지 완료했다. 다음은 4-2 DB row/domain model 변환 기준선을 시작하며 Storage·Tally·유료 AI·실제 provider route는 4-5 대상으로 남긴다.
4. `app_state`에서 독립성이 큰 데이터는 명시 저장 도메인으로 계속 분리한다.
   - 학생별 오답 `wrongProblems`는 명시 저장 전환을 완료했다. 다음 후보는 별도 저장 의미가 분명한 `lessonResearchItems`이며 새 작업에서 범위를 다시 확인한다.
   - 즉시 사람 판단이 필요하지 않은 발견은 queue/worklog에 남기고 AI 검수와 다음 단계를 연쇄 진행한다.

## 자동 작업

- 매일 오전 9시에 독립 task가 열린다.
- 자동 task 제목은 실행 시작 시 다른 작업보다 먼저 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾸고, 실패하거나 완료 응답이 없으면 한 번 재시도해 결과에 확인 여부를 남긴다.
- 자동 작업 전용 clone에서 최신 `origin/main`을 기준으로 날짜별 `codex/` branch를 만들고, 안전한 한 단위만 commit/push한다.
- 1~3번 작업은 사람 Gate가 없고 시작 기준 main 불변·동시 통합 owner 없음·exact-head 원격 검사 통과·fast-forward 가능 조건을 모두 만족할 때 AI가 main 통합, main CI, 배포 commit 대조와 안전한 smoke까지 수행한다.
- main이 바뀌었거나 충돌·동시 통합 징후가 있으면 자동 rebase나 force push 없이 중단한다. 4번 사람 Gate와 운영 삭제·발송·유료 호출·SQL 적용은 자동 수행하지 않는다.

## 빠른 확인

```powershell
npm run doctor
npm run check:fast
npm run test:browser-smoke
```

세부 검증 선택은 `docs/testing-policy.md`를 따른다.
