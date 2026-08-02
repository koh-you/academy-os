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
| lesson | `App.jsx`의 `TeacherLessonHubV2`, `LessonJournalDetail`과 `src/domains/lessons`가 혼재 | 수업·수업일지 저장 handler는 주로 `App` | 화면 조립부터 `src/domains/lessons`로 이동하고 draft/persisted 경계는 별도 단계로 검수 |
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

### 3-2 Lesson 경계

- 수업 달력, 수업 모달, 수업일지의 화면 조립과 draft/persisted state 경계를 분리한다.
- 저장 성공은 API 성공과 서버 재조회 대조를 기준으로 유지한다.

### 3-3 Supplement 경계

- 보충 task draft, 일정, 취소, 알림 제어를 화면에서 분리한다.
- 저장과 실제 알림 발송·예약·취소 행동을 결합하지 않는다.

### 3-4 Student 경계

- 학생 목록·프로필·퇴원·인계 보고서 조립을 분리한다.
- 학생 원천 merge와 선택·표시 파생값을 구분한다.

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
