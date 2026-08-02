# App 3차 리팩터링 계획

업데이트: 2026-08-02

## 목표

현재 기능은 구현되어 있지만 `App.jsx`가 화면 정의, 상태, 저장 handler, 외부 side effect 조립을 함께 담아 작은 유지보수에도 탐색·검증 범위가 크다. 3차 리팩터링은 기능을 다시 구현하지 않고 도메인별 변경 반경과 초기 번들 크기를 줄여 유의미한 개발 속도 변화를 만드는 단계에서 닫는다.

사람 확인이 꼭 필요하지 않은 발견은 queue/worklog에 남기고 AI 검수와 다음 안전 단위를 연쇄 진행한다. 운영 데이터 쓰기, 실제 알림, 운영 SQL, 유료 호출, 새 로그인·관리자 승인이 필요한 순간만 사람 gate로 남긴다.

## 3-0 기준선

- 기준 commit: `16f8c4ca` (`origin/main`, 2026-08-02 측정)
- `src/app/App.jsx`: 22,912줄, 1,011,179 bytes
- `App()` 시작: 5,175줄
- App hook/API 단순 계수: `useState` 218, `useEffect` 52, `useMemo` 23, `useRef` 39, API 호출 형태 83
- production main JS: 1,642.41 kB, gzip 422.81 kB
- production CSS: 344.98 kB, gzip 55.08 kB
- 경고: `App.jsx > 500 KB`, chunk `> 500 kB`
- 기준 시간: runtime lint 4.71초, scenario 811/811 3.44초, build 5.33초, 전체 production 86.19초, 격리 browser smoke 8/8 16.62초
- 전체 production의 주 병목은 정적 scenario가 아니라 많은 `npm run test:*` child process를 직렬 실행하는 구조다.

## 3-0 소유권 지도

| 영역 | 현재 화면·상태 owner | 저장 원천·side effect owner | 3차 목표 |
| --- | --- | --- | --- |
| session | `src/app/useAppSession.js` | 로그인·로그아웃·초기 저장소 판독도 같은 hook | 유지. 다른 도메인과 재결합하지 않음 |
| 교사 화면 routing | `src/app/TeacherViewOutlet.js` | 실제 저장·삭제·발송 handler는 `App` | adapter 계약을 유지하고 각 화면을 lazy 경계에 연결 |
| lesson | `TeacherLessonHubV2`와 `LessonJournalDetail`은 `src/domains/lessons`가 소유 | 수업·수업일지 저장 handler와 예약 조회 transport는 `App` | draft/persisted 경계와 callback 표면을 3-2에서 검수 |
| supplement | `src/domains/supplements/SupplementCenter.jsx`와 하위 모델 | 저장·취소·알림 handler 일부는 `App` callback | 화면 owner는 유지하고 side effect callback 표면을 줄임 |
| student | `src/domains/students/StudentManager.jsx` | 학생 저장·퇴원·삭제 handler는 `App` | 원천 merge, 선택 상태, 저장 행동을 분명한 adapter로 연결 |
| notification | `App.jsx`의 `NotificationCenter`와 `src/domains/notifications`가 혼재 | 저장·reconcile·발송 handler는 `App` | top-level 화면을 도메인으로 이동하고 draft/persisted/provider 상태를 분리 |
| settlement | `src/domains/settlements/SettlementWorkspace.jsx` | 계산 입력·교사 확정 저장 handler는 `App` | 계산 selector와 저장 callback 계약을 고정한 뒤 조립 경계를 축소 |

`App`은 3-0 시점에 최상위 상태와 서버 저장·삭제·예약·취소·발송·재대조 handler의 최종 owner다. 이후 단계는 이 owner를 암묵적으로 옮기지 않으며, owner 이동이 필요하면 전용 fixture와 오류 복구 계약을 먼저 고정한다.

## 단계

### 3-1 App 물리적 화면 분리

- `App.jsx`에 남은 큰 화면 정의를 도메인 파일로 옮긴다.
- 우선순위는 Notification Center, Teacher Lesson Hub, Lesson Journal Detail이다.
- 상태 owner와 저장·발송 handler 계약은 바꾸지 않고 props/callback 조립만 이동한다.
- 진행: Notification Center top-level 1차 단위는 `src/domains/notifications/NotificationCenter.jsx`로 이동했다. App 전용 날짜·표시 helper는 명시적 `runtimeBindings`로 주입하고, 특강 panel은 다음 notification 단위까지 App 정의를 유지한다.
- 진행: Teacher Lesson Hub는 `src/domains/lessons/TeacherLessonHubV2.jsx`로 이동했다. 달력의 local filter·focus·keyboard 상태만 화면이 소유하며, 상세 화면과 저장·예약·취소·발송·reconcile callback은 `teacherLessonHubRuntime`과 teacher view adapter를 통해 App owner를 유지한다.
- 진행: Lesson Journal Detail은 `src/domains/lessons/LessonJournalDetail.jsx`로 이동했다. 화면 local draft·overlay·예약 표시 hook은 새 파일에서 조립하고, 저장·삭제·알림 provider 행동은 기존 callback으로, OS 예약 조회는 App transport 주입으로 유지한다. 3-1의 우선 화면 세 단위를 완료했다.

### 3-2 Lesson 경계

- 수업 달력, 수업 모달, 수업일지의 화면 조립과 draft/persisted state 경계를 분리한다.
- 저장 성공은 API 성공과 서버 재조회 대조를 기준으로 유지한다.
- 진행: 수업일지의 record·homework·makeup local draft 조작과 저장 결과 전이를 `useLessonJournalDraftController`로 이동했다. hook은 App 저장 callback을 주입받고 요청 lesson·draft revision이 그대로인 성공 응답에서만 draft를 비운다. 저장 중 생긴 후속 입력과 다른 수업의 draft는 보존하며, App의 ordered persistence·Supabase 재조회·오류 상태 갱신은 이동하지 않았다.
- 진행: 수업일지 상세에 전달되던 저장·삭제·보충 mutation 10개와 알림·AI·예약 조회 provider 7개를 `lessonJournalEffectAdapter`의 `persistence`/`provider` 표면으로 고정했다. 실제 Solapi 예약·취소까지 조정하는 알림 계획 적용은 provider 표면에 분류했다. adapter는 함수 참조만 조립하고 API·Storage·React state를 소유하지 않으며, 실제 effect owner는 App에 유지한다.
- 완료: 수업 등록·수정 `LessonModal`의 local draft·validation·저장 표시와 controlled component 조립을 lesson 도메인 파일로 이동했다. App의 bulk 저장·Supabase 재조회 대조·휴강 preflight handler는 주입된 `onSubmit` owner로 유지했다. 달력은 `TeacherLessonHubV2`, 수업일지는 전용 화면·draft controller, 모달은 `LessonModal`로 경계를 대조해 3-2를 닫는다.

### 3-3 Supplement 경계

- 보충 task draft, 일정, 취소, 알림 제어를 화면에서 분리한다.
- 저장과 실제 알림 발송·예약·취소 행동을 결합하지 않는다.
- 완료: 기존 보충 draft·일정·취소·알림 제어 controller 분리를 재대조하고, `TeacherViewOutlet`에서 `SupplementCenter`로 전달되던 8개 callback을 `supplementEffectAdapter` 하나로 묶었다. 순수 저장 3개는 `persistence`, 실제 알림 예약·취소 2개는 `provider`, 저장과 provider 행동을 함께 조정하는 3개는 `orchestration`으로 명시했다. adapter는 함수 참조만 조립하며 실제 API·Supabase 재조회·Solapi effect owner는 App에 유지한다. 전용 exact-key/identity fixture와 기존 보충 controller·browser cancellation 동선으로 3-3을 닫는다.

### 3-4 Student 경계

- 학생 목록·프로필·퇴원·인계 보고서 조립을 분리한다.
- 학생 원천 merge와 선택·표시 파생값을 구분한다.
- 진행: App에서 `StudentManager`로 전달되던 16개 상태 변경 callback을 `studentEffectAdapter`로 묶었다. 화면 local edit 1개는 `draft`, 저장 7개는 `persistence`, 삭제 5개는 `deletion`, 퇴원·복구 2개는 `lifecycle`, 영구 삭제 전 읽기 점검 1개는 `audit`으로 명시한다. adapter는 함수 참조만 조립하고 App의 API·Supabase 재조회·오류 복구 owner는 유지한다.
- 진행: 2,168줄 `StudentManager`에 함께 있던 학생 프로필 화면·오류 경계·profile 전용 draft/표시 helper를 `StudentProfileModal.jsx`로 물리 분리했다. 이전 프로필 본문과 문자 단위로 동일하며, 새 화면은 주입 callback만 소비하고 API·Supabase·localStorage를 소유하지 않는다. 다음 단위는 목록에 남은 퇴원·복구·영구삭제 및 인계 보고서 화면 조립을 분리한다.

### 3-5 Notification 경계

- 알림 목록·편집·reconcile UI를 도메인 component/hook으로 옮긴다.
- local draft, persisted final text, provider 상태, 발송 side effect를 별도 경계로 유지한다.

### 3-6 Settlement 경계

- 월별 정산 화면 조립과 계산 selector, 교사 확정값 저장을 분리한다.
- 금액·횟수 규칙은 fixture를 먼저 고정하고 물리 이동만 한 단위씩 수행한다.

### 3-7 Lazy loading과 chunk 분리

- 교사 화면의 진입 빈도와 의존성을 기준으로 route/view 단위 lazy loading을 적용한다.
- 저장 handler 이동과 같은 commit에 섞지 않고 로딩·오류 복구 UI를 안전 브라우저로 확인한다.

### 3-8 종료 감사

- 상태 owner, 저장 원천, 외부 side effect, 오류 복구를 도메인별로 재대조한다.
- source-string 위주의 검사는 관련 동작 fixture로 점진 교체한다.
- 문서·queue를 정리하고 전체 production, build, safe browser, exact-head/main CI를 통과한다.

## 종료 기준

- 일반 기능 변경의 80% 이상이 `App.jsx`를 수정하지 않고 가능하다.
- 한 도메인 변경의 일반 반경이 3~5개 파일 안에 머문다.
- 5개 핵심 도메인 fast 검사가 각각 10초 이내다.
- Babel의 `App.jsx > 500 KB` 경고가 사라진다.
- 초기 main JS를 700~900 kB 범위까지 줄이거나, 동일한 체감 효과를 수치로 입증한다.
- 화면 동작, 저장 원천, 외부 side effect, 오류 복구 계약의 회귀가 없다.

각 단계는 최신 main 기반 별도 branch/Worktree에서 하나씩 진행하고 전체 검증·AI 리뷰·CI가 끝난 뒤 다음 단계로 넘어간다.
