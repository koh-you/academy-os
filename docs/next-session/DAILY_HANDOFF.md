# Daily Development Handoff

업데이트: 2026-08-03

## 2026-08-03 개별 학생 저장 신뢰성

- 신규 수동/Tally/특강 학생은 insert-only, 기존 목록 행·프로필·Tally/특강 반영·퇴원 취소는 `updated_at` CAS와 Supabase 재조회 일치 뒤에만 완료한다. 중복 ID/로그인, 다른 화면 변경·삭제, 결과 불명 응답은 현재 입력을 보존한 채 실패한다.
- 목록 행과 프로필은 저장 중 후속 입력을 새 서버 버전으로 재기준화하고 재저장을 안내한다. 신규 학생은 실패 시 모달 form을 유지하며 저장 확인 전 닫기나 탭 전환이 차단된다.
- 검증: student `12/12`, runtime lint, scenario/production `823/823`, build `384 modules`·lazy `12/12`, safe browser `25/25`. 운영 데이터·실제 알림·SQL·유료 호출은 사용하지 않았다.
- 다음 단위는 반 명단 저장 gate다. 학생 추가·반 이동·반관리·퇴원에서 미래 수업 명단과 학생 반 필드가 함께 바뀌는 ordered persistence와 부분실패 복구를 별도로 점검한다.

## 2026-08-03 Tally 후보 입력 저장 신뢰성

- Tally 신규생 후보 입력은 후보별 요청 직렬화·최신 draft coalesce·`updated_at` CAS·Supabase 재조회 확인을 거쳐 저장 완료로 처리한다. 첫 저장 중 후속 입력은 성공 응답의 새 버전으로 재기준화해 최신값을 이어서 저장한다.
- 다중 탭·기기 충돌, 삭제, 결과 불명 실패는 자동 병합·재전송하지 않고 현재 입력과 실패 상태를 유지한다. 정식 학생 등록은 후보 입력 저장 완료를 기다리며 진행 중 입력을 잠근다.
- 전용 API/controller와 Supabase REST 모형, 안전 브라우저의 빠른 연속 입력·충돌 입력 보존을 확인했다. 검증은 student `11/11`, runtime lint, `check:fast`, production `823/823`, build `382 modules`·lazy `12/12`, safe browser `22/22`다.
- 학생 원천 저장·미래 수업 명단 로직은 변경하지 않았다. 다음 단위는 학생 저장 gate이며 이후 반 명단 저장 gate를 별도로 점검한다.

## 2026-08-03 시험정보 저장 신뢰성 후속

- 시험정보 행 저장은 브라우저 직렬화·최신값 coalesce에 더해 행별 `updated_at` CAS와 Supabase 저장 후 재조회를 완료했다. 성공 응답 중 들어온 최신 입력은 새 버전만 합쳐 보존하며, 충돌 시 자동 병합·재전송하지 않고 화면 입력과 실패 상태를 유지한다.
- 일반 자동저장은 삭제된 기존 행을 재생성하지 않는다. 시험정보 삭제 orchestration의 감사 rollback만 `allowRestore`를 명시해 복구할 수 있다.
- Supabase REST 모형과 안전 브라우저에서 정상 CAS, 구버전 차단, 삭제 행 차단/감사 복구, 빠른 후속 입력 재기준화, 충돌 입력 보존을 확인했다.
- 첫 Vercel preview가 새 `api/domain` helper까지 서버리스 함수로 집계해 Hobby 12개 제한으로 실패한 것을 확인하고, 순수 helper를 `src/domains/exams`로 이동해 API runtime 파일을 12개로 복원했다.
- 검증: 전용 fixture, runtime lint, `check:fast`, production `822/822`, build `380 modules`·lazy `12/12`, 격리 safe browser `20/20`. 운영 side effect는 실행하지 않았다.
- 다음 단위는 학생 신규/Tally 후보 입력 경쟁 방지다. 그 뒤 학생 저장과 반 명단 저장 gate를 별도 단위로 진행한다.

## 2026-08-03 자동 작업

- 자동화 설정은 실행 시작 시 서울 날짜 제목을 우선 적용하고 실패/응답 부재 때 한 번 재시도하도록 고정했다. 1~3번 작업은 사람 Gate가 없고 main 불변·동시 owner 없음·exact-head green·fast-forward 조건을 모두 만족하면 AI가 main CI·배포·안전 smoke까지 자동 완료한다.
- main 변경·충돌·동시 통합 징후가 있으면 자동 rebase/force 없이 branch에서 멈춘다. 4번 사람 Gate와 운영 side effect는 기존처럼 자동 실행하지 않는다.
- 3번 기능·개선으로 시험정보 행 자동저장 요청을 브라우저 전체에서 직렬화했다. 진행 중 같은 행의 후속 입력은 최신 row만 남겨 다음 bulk 요청으로 보내며, 최신 입력이 끝날 때까지 행 상태를 `저장 중`으로 유지한다.
- 전용 controller fixture는 중복값 생략, bulk 내부 최신 row 선택, 요청 비중첩, 진행 중 coalesce, 실패 중 최신 입력 보존과 최종 실패 상태를 검증한다.
- 안전 API에 시험정보 row·bulk 저장 fixture를 추가하고, 첫 요청 지연 중 3회 입력 후 마지막 값만 두 번째 요청으로 저장되는 브라우저 경로를 확인했다.
- 다음 저장 신뢰성 단위는 시험정보 row의 `updated_at` CAS와 저장 뒤 Supabase 재조회다. Tally 후보 입력 경쟁 방지는 그와 분리한다.
- 운영 Supabase 쓰기, 알림 발송·예약·취소, Storage, 유료 AI, 운영 SQL은 실행하지 않았다.
- 검증: controller·API 전용 fixture, runtime lint, scenario·production `821/821`, build `380 modules`·lazy chunk `12/12`, 격리 safe browser `19/19` 통과.

## 어제까지 완료

- 개발 canonical 경로와 중복 clone 경고를 자동 진단한다.
- 안전한 가상 로컬 실행, runtime lint, client error reporter, browser smoke, 요약형 production test를 추가했다.
- 장문 지침은 archive하고 현재 상태·큐·계약 문서로 분리했다.
- 매일 오전 9시 독립 자동 task를 등록했다. 자동 작업은 전용 clone과 날짜별 `codex/` branch만 사용한다.

## 오늘 자동 작업

- 3차 리팩터링 3-0 기준선을 최신 main에서 측정하고 5개 핵심 도메인의 10초 이내 fast fixture 경로와 검증 정책을 추가했다.
- 3-1 첫 단위로 Notification Center top-level 화면을 도메인 파일로 옮겼다. 저장·발송 handler와 특강 panel owner는 유지하고 App runtime binding을 teacher view adapter로 명시했다.
- 3-1 두 번째 단위로 Teacher Lesson Hub 화면 조립을 lesson 도메인 파일로 옮겼다. 달력 local state만 화면이 소유하고 수업일지 저장·알림 side-effect callback 및 상세 화면 owner는 App에 유지했다.
- 3-1 세 번째 단위로 Lesson Journal Detail 화면을 lesson 도메인 파일로 옮겼다. 화면 local draft·overlay·예약 표시 상태만 새 파일에서 조립하고, 저장·삭제·알림 side effect callback과 OS 예약 조회 transport는 App에 유지했다.
- 3-2 첫 단위로 수업일지 record·homework·makeup local draft와 성공/실패 전이를 전용 controller hook으로 묶었다. App 저장·Supabase 재조회 owner는 유지한다. 저장 중 후속 입력은 revision guard로 보존하고 재저장을 안내하며, 실패·부분저장 수정본 보존과 다른 수업 응답 격리를 TARGET/CONTROL 및 지연 API 안전 브라우저 동선으로 확인했다.
- 3-2 두 번째 단위로 수업일지 persistence 10개와 provider/transport 7개 callback을 순수 effect adapter 계약으로 묶었다. 독립 검토에서 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용의 분류를 바로잡아 provider 표면으로 옮겼다. App의 실제 저장·삭제·AI·Solapi·재조회 owner는 유지하고 Hub는 adapter 하나만 상세 화면에 전달한다.
- 3-2 세 번째 단위로 수업 등록·수정 모달의 local draft·validation·저장 표시 controller를 lesson 도메인 파일로 옮겼다. App의 bulk 저장·Supabase 재조회·휴강 preflight callback은 유지했고 이전 controller 본문과 문자 단위로 대조했다.
- 3-3에서 기존 보충 draft·일정·취소·알림 제어 controller 분리를 재대조하고, 화면에 낱개로 전달되던 8개 effect callback을 persistence 3개·provider 2개·orchestration 3개 adapter 표면으로 묶었다. 실제 저장·Supabase 재조회·Solapi effect는 App owner를 유지한다.
- 3-4 첫 단위로 학생관리의 16개 callback을 draft·persistence·deletion·lifecycle·audit adapter 표면으로 묶었다. 실제 학생 저장·Supabase 재조회·퇴원·복구·영구 삭제·오류 복구는 App owner를 유지한다.
- 3-4 두 번째 단위로 학생 프로필 화면·오류 경계·전용 helper를 `StudentProfileModal.jsx`로 물리 분리했다. 프로필 본문은 기준 commit과 동일하고 callback 저장 의미도 유지한다. `StudentManager.jsx`는 994줄로 줄었다.
- 3-4 세 번째 단위로 퇴원 확인·인계 PDF·단일/일괄 영구삭제 overlay를 `StudentLifecycleOverlays.jsx`로 물리 분리했다. 11,029자 JSX는 기존과 동일하고 audit·복원·삭제·PDF controller는 Manager owner를 유지한다.
- 3-4 마지막 단위로 퇴원생 목록·정렬·선택 toolbar를 `StudentWithdrawnList.jsx`로 물리 분리했다. 20개 prop identity와 local dirty/선택/lifecycle controller owner를 유지하며 3-4 Student 경계를 닫았다.
- 3-5 첫 단위로 Notification Center 두 진입 경로의 flat callback 13개를 history provider/transport와 특강 persistence/deletion/orchestration/navigation effect 표면으로 묶었다. 두 refresh identity와 App의 실제 저장·재조회·Solapi effect owner, 화면 내부 공지 draft/request controller는 유지한다.
- 3-5 두 번째 단위로 공지 수신자·작성·이력·취소·reconcile 조립을 `useNotificationNoticeController`로 이동했다. `NotificationCenter`는 144줄 render owner가 됐고 이력 탭·local draft 미리보기·특강관리 이동 safe browser를 추가해 Notification 경계를 닫았다.
- 3-6 첫 단위로 월별 정산 선택 월·local recovery draft·계산 selector·교사 확정값 저장 조립을 `useMonthlySettlementController`로 이동했다. App의 Supabase 저장·재조회 owner와 정산 계산 규칙은 유지하고, 저장 중 후속 입력을 month/revision guard와 지연 safe browser로 보존했다.
- 3-6 closeout으로 월별 출결·수업 달력과 정규 정산 표를 순수 view component로 분리했다. 기준 main JSX와 문자 단위 동일하고 기존 controller·callback·App Supabase owner를 유지한다. Panel은 184줄 조립 owner가 되어 Settlement 경계를 닫았다.
- 3-7 첫 단위로 이미 분리된 Lesson·Supplement·Student·Notification·Settlement 5개 화면을 lazy component로 연결했다. main JS는 1,656.92→1,379.15 kB, gzip은 427.24→351.03 kB로 줄었고 build가 1.50 MB 예산과 5개 chunk를 고정한다. safe browser는 chunk 지연 로딩과 1회 실패→오류 번호→안전 새로고침 복구를 포함해 12/12 통과했다.
- 3-7 두 번째 단위로 시험분석 helper·화면 4,612줄을 도메인 파일로 분리해 여섯 번째 lazy chunk로 연결했다. 13개 request owner는 App에 유지했다. main JS는 1,181.41 kB, gzip은 296.06 kB로 줄었고 build는 1.25 MB 예산·6/6 chunk를 검사한다. 유료 행동 없는 시험분석 지연 진입을 포함해 safe browser 13/13을 통과했다.
- 3-7 세 번째 단위로 오답관리·시험지관리·자료함·숙제현황 4개 화면 1,335줄을 39.49 kB shared lazy chunk로 분리했다. App runtime 10개와 저장 callback owner를 유지했고 main JS는 1,142.78 kB, gzip은 285.71 kB다. 안전한 지연 진입을 포함해 browser 14/14를 통과했다.
- 3-7 네 번째 단위로 학사일정·반관리·수업연구·AI 도구 4개 화면 1,509줄을 51.98 kB shared lazy chunk로 분리했다. App runtime 24개와 저장 callback owner를 유지했고 main JS는 1,092.41 kB, gzip은 272.16 kB다. 안전한 지연 진입을 포함해 browser 15/15를 통과했다.
- 3-7 다섯 번째 단위로 특강 안내문과 첫 화면·수업일지 운영 알림 화면 1,029줄을 94.24 kB shared lazy chunk로 분리했다. App runtime 15개와 저장·삭제 callback owner를 유지했고 main JS는 999.16 kB, gzip은 248.14 kB다. lazy element type guard 회귀를 safe browser에서 발견해 최소 교정했고 지연 진입을 포함해 browser 16/16을 통과했다.
- 3-7 여섯 번째 단위로 시험 대비·설정 화면을 각각 lazy chunk로 분리했다. helper/설정 transport App owner와 화면 본문을 보존했고 main JS는 956.13 kB, gzip은 237.03 kB, App은 507,358 bytes다. Babel의 App 500 KB 경고가 사라졌고 부작용 없는 지연 진입을 포함해 browser 17/17을 통과했다.
- 3-7 마지막 단위로 보충 전용 수업 상세와 수업 준비 메모를 22.40 kB shared nested lazy chunk로 분리했다. pure helper 13개와 실제 저장·알림 callback owner를 유지했고 main JS는 934.69 kB, gzip은 231.48 kB다. 3-0 대비 main 43.1%·gzip 45.3% 감소와 App Babel 경고 제거를 수치로 고정했으며 production 821/821·safe browser 18/18로 3-7을 닫는다.
- 3-8에서 도메인별 상태 owner·저장 원천·외부 side effect·오류 복구와 의도적 transport 예외를 `docs/app-refactor-third-pass-closeout.md` 및 전용 fixture로 고정했다. 3차 리팩터링 3-0~3-8은 완료 상태로 닫고 자동 재개하지 않는다.
- 종료 검증은 runtime lint, 도메인 fast 39/39, teacher/closeout 경계, scenario·production 821/821, build 380 modules·lazy chunk 12/12, 격리 safe browser 18/18을 통과했다. 운영 side effect는 실행하지 않았다.
- 로컬 browser smoke의 Worktree 격리 runner를 기본 명령으로 사용한다. 다음 작업은 deferred queue의 제품·저장 신뢰성 우선순위에서 별도로 선택한다.

- `app_state` 자동저장 12개 key의 500ms debounce, request ID, API upsert, `updated_at` 경계를 inventory했다.
- 역순 도착 시 오래된 요청이 최신값을 덮는 fixture를 추가하고 Production checks에 연결했다.
- 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다.
- 운영 쓰기·발송·예약·취소·유료 호출·SQL 적용은 없었다.

## 사용자 후속 수정

- 월별 정산은 서울 기준 1~2일에 지난달, 3일부터 이번 달을 기본 선택하며, 정산월·저장 상태·PDF 버튼은 한 반응형 카드에 표시한다.
- 월별 정산 표의 `월별 스케줄`, `정산 처리` 열은 제거했다. 기존 저장 원천·계산은 보존하고, PDF에서는 학생별 최종 정규 횟수만 남기며 그 횟수의 합산은 제거했다.
- 최종 정규 횟수 상세 모달에는 명시적 저장·Supabase 재조회 확인만 둔다. 저장 후 모달을 닫고 바깥 `횟수·금액 PDF`를 열며, 보고서의 `인쇄하기` 버튼으로 브라우저 인쇄를 실행한다. 안전 브라우저에서 입력·저장·모달 닫기·PDF 값·인쇄 버튼까지 검증했다.
- 후속 UI 요청도 별도 기능·개선 단위로 완료했다. 수업 등록 행동은 월 이동 박스 안 오른쪽으로 이동했고, 월별 출결·수업 모달은 데스크톱 최대 1320px로 넓혀 1280px 안전 화면에서 달력 가로 스크롤이 없음을 검증했다.

- 특강 정산 탭은 수강 계획과 실제 특강 수업일지를 대조해 출결과 일지 누락을 표시하고, 학생 프로파일은 월별 정규·특강 출결을 함께 보여준다.
- 횟수·시수 달력 모달에서 시스템 계산 횟수와 교사 확정 최종 정규 횟수를 대조한다. 확정값은 수업일지가 없는 경우에도 신입·퇴원 금액과 PDF에 사용하고 월정액 금액은 유지하며, 요청 차감·추가 입력 열은 제거했다.
- 월별 정산 보고서는 `이름·최종 정규 횟수·금액` 및 합계만 PDF 인쇄하며 세부 출결·필터는 제외한다.
- 보강 시간은 정규 프로필 스케줄 대신 실제 보강 수업일지 시간을 사용하도록 교정했다. 최신 Phase 5 main 통합 뒤 정산·teacher-view 전용 fixture, runtime lint, scenario `810/810`, production `810/810`, build `352 modules`, 격리 safe browser `8/8`을 통과했고 운영 쓰기는 없었다.
- 7월 정산 운영 원천을 읽기 전용으로 분석해 신규생 회차제의 예정 시간표 의존과 해당 월 퇴원생의 고정 요금 유지가 원인임을 확인했다.
- 신규생은 수업일지의 정산 인정 정규 회차를 사용한다. 휴강은 보강 전에도 1회로 포함하고 연결 보강은 중복 계산하지 않으며, 기존 퇴원생은 교사 override가 없으면 자동 퇴원 비례로 계산한다. 출결 달력은 출석·결석·지각·공결·대기를 서로 다른 색으로 구분하고 대기는 미확정 상태로 표시한다.
- 학생별 행과 상세에는 휴강 포함, 연결 보강 추가 계산 제외, 대기 출결 미확정의 적용 회수를 별도 표기한다.
- 재계산 예상: 이채빈 5회·187,500원, 김형준 11회·412,500원, 이윤채 11회·385,000원, 김예나 13/14·417,857원.
- 정산 전용 fixture, runtime lint, production `810/810`, build `349 modules`, safe browser `5/5` 통과. 운영 snapshot은 저장하지 않았으므로 배포 뒤 사용자가 7월 화면을 확인하고 `월별 정산 저장`을 눌러야 한다.
- 첫 화면 운영 알림을 입력 폼과 별도로 접고 펼칠 수 있다.
- 보충관리 목록에 요일별·이름 가나다별 정렬을 추가했다.
- 보충 시간은 시/분 선택으로 분리했고 시를 고르면 `00분`이 기본이다.
- 결석보강 알림톡 3종은 한 화면에서 편집·일괄 저장한다. 학생 문구 수정은 학부모·당일 학생 문구에도 연동되어 3종 최종본으로 저장된다.
- Solapi 확인 모달은 학생·학부모·당일 학생 3종을 함께 보여 주고, 취소 가능한 예약을 한 번에 일괄 취소한다. 실제 취소·예약은 수행하지 않았다.
- 저장 상태 3종과 주요 행동은 결석보강 모달 하단 고정바에서 스크롤 위치와 무관하게 확인한다.
- 위 5개 사용자 수정은 정산 수정이 포함된 최신 main에 재배치해 관련 전용 테스트, notification/app_state 경계, production `810/810`, build `349 modules`, Worktree 격리 safe browser `7/7`을 통과했다.
- 숨겨진 달력 toolbar 안에 남아 사라졌던 `+ 수업 등록`과 조건부 `정규수업 열기`를 별도 표시 action bar로 긴급 복구했다.
- 숨겨진 달력 제어줄과 분리해 수업일지의 이전·다음 달 탐색을 복구했고 실제 월 단위 이동·말일 보정을 적용했다.
- 8월 1일 수업일지의 빈 교재·강의 내용 원인을 운영 원천에서 확인하고, 같은 반의 최신 비어 있지 않은 과거 기록을 필드별로 월 경계 너머까지 승계하도록 수정했다. 특강 기록은 분리된다.
- safe browser에 월 이동 왕복 회귀를 추가했다.
- safe browser에 직전 빈 기록을 건너뛰는 7월→8월 수업기록 승계 회귀를 추가했다.
- 매일 자동 task는 시작 시 서울 기준 날짜를 제목 앞에 붙이도록 자동화 프롬프트를 갱신했다.
- 최신 검증: 관련 전용 테스트, scenario `809/809`, runtime lint, build `346 modules`, safe browser 사용성 확인, production 전체 묶음 통과.
- 별도 `codex/app-high-risk-boundaries-phase1` worktree에서 App 고위험 5개 경계 inventory와 auth/session hook 분리를 완료했다. main에는 merge하지 않았으며, notification polling 중복/stale 응답과 hydration 전환 fixture가 남은 통합 위험이다.

## 다음 자동 실행 단위

- App 2차 리팩터링의 단계·검수·지연 보고 기준은 `docs/app-refactor-second-pass-plan.md`를 따른다.
- Phase 1 auth/session과 Phase 2 출결 polling·동기화는 main 통합 완료다.
- Phase 2에서 kiosk 날짜 rollover lifecycle을 출결 hook으로 이동하고 전용 fixture를 추가했다. safe browser가 TDZ 배치 오류를 발견해 최소 수정했으며 재실행 4/4가 통과했다.
- Phase 3는 PR #4로 main 통합 및 CI/배포 성공했다. Phase 4 app_state 동일 key 직렬화·`updated_at` CAS·Supabase 재조회 완료 판정을 구현하고 전체 자동검증을 통과했다.
- Phase 4와 사용자 수업일지·보충관리 수정은 main 통합과 CI·Vercel 배포가 완료됐다. Phase 5도 17개 teacher 화면 callback 조립을 `TeacherViewOutlet` adapter로 분리해 PR #9, merge commit `254cd0b1`로 main 통합했고 main CI·Vercel production이 성공했다.
- main 병합은 의미 변경·운영 side effect 없이 AI 리뷰와 전체 검사·PR CI·배포가 성공하면 AI가 판단해 진행한다.

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 오늘 branch의 GitHub Actions 결과를 확인한다.
3. App 2차 리팩터링 Phase 1~5는 완료 상태로 유지하고 자동 재개하지 않는다.
4. App 3차 리팩터링 3-0~3-8은 완료 상태를 유지한다. 별도 제품 근거 없이 4차 리팩터링이나 남은 App 화면 분리를 자동 시작하지 않는다.
5. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.
