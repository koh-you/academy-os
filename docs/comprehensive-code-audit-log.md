# 전체 코드베이스 통독 감사 로그

## 다음 세션 시작 프롬프트 (그대로 복사해서 새 세션 첫 메시지로 사용)

```
E:\academy-os 프로젝트의 전체 코드베이스 통독 감사를 이어서 진행해줘.
docs/comprehensive-code-audit-log.md 파일을 먼저 읽고, "진행 상태" 표에서
"다음 시작 지점"에 표시된 파일/줄부터 이어서 읽어. 발췌나 grep이 아니라
실제로 offset을 옮기며 끝까지 다 읽고, 읽으면서 (a) 무엇을 하는 코드인지
(b) 중복/비대화 지점 (c) 소유권이 얽힌 지점 (d) 압축·재설계 후보를
같은 로그 파일에 계속 누적 기록해줘. 결론은 해당 파일을 다 읽은 뒤에만 내려줘.
기능 유지만 전제로 하고 화면/저장 로직/코드 구조는 자유롭게 재설계해도 된다는
승인은 이미 받은 상태야. 진행 상황은 한국말로 중간중간 업데이트해줘.
```

## 목적

4차 리팩터링까지 반복된 "부분만 보고 phase를 닫는" 패턴을 끊기 위해, 핵심 파일을 처음부터 끝까지 실제로 읽고 분석한다. 세션/토큰 리젠 주기에 걸쳐 이어서 진행하므로, 이 문서가 유일한 진행 상태 기록이다. 새 세션은 이 문서의 "진행 상태" 표를 먼저 읽고 "다음 시작 지점"부터 이어간다.

기능 유지만 전제로 하고, 화면/저장 로직/코드 구조는 자유롭게 재설계 가능 — 사용자 승인됨(2026-08-16).

## 진행 상태

| 파일/영역 | 총 줄 수 | 상태 | 다음 시작 지점 |
| --- | ---: | --- | --- |
| `src/app/App.jsx` | 10,723 | **완독** | 발견 기록 참조. 압축 후보 약 3,350줄 |
| `api/server.js` | 7,255 | **완독** | 발견 기록 참조. 압축 후보 약 1,650줄+ |
| `api/routes/coreData.js` | 4,907 | **완독** | 발견 기록 참조. 압축 후보 약 2,000줄+ (단일 구조적 패턴) |
| `src/app/App.css` | 22,609 | 미시작 | 1 |
| `src/domains/**` (약 259개 파일) | - | 미시작 | 목록화 필요 |
| `src/shared/**` | - | 미시작 | 목록화 필요 |

## 읽기 원칙

- 발췌·grep이 아니라 실제로 offset을 이동하며 끝까지 읽는다.
- 읽으면서 즉시 기록: (a) 무엇을 하는 코드인지, (b) 중복/비대화 지점, (c) 소유권이 얽힌 지점, (d) 압축·재설계 후보.
- 결론은 해당 파일을 다 읽은 뒤에만 내린다 — 부분 추정 금지.

## 발견 기록

### `src/app/App.jsx` — 완독 (10,723/10,723줄)

**1~475줄 (import, 356줄)**
- `domains/lessons`에서만 80개 넘는 개별 함수를 각각 다른 파일에서 import. 함수 하나당 파일 하나(`lessonReservationPayloadFingerprint.js`, `lessonReservationPayloadSnapshot.js` 등)인 경우가 많음 — 압축과 정반대 방향의 파편화.

**476~2103줄 (모듈 최상위 순수 함수 다수)**
- 코멘트/알림 텍스트 포맷팅, 과제 상태 판정, 알림톡 안전도 판정 등 순수 함수 다수. React state 없음, 위치만 잘못됨.
- **얇은 wrapper 함수 패턴 발견**: `buildLessonReservationPayloadSnapshot`, `getLessonReservationPayloadFingerprint`, `getNotificationJobProviderReference` 등은 로직이 이미 domain 모듈로 옮겨졌는데 App.jsx에 이름만 같은 재호출 함수가 남음 — 즉시 삭제 가능한 죽은 무게.

**2103~2456줄 (도메인 로직이 App.jsx에 남음)**
- 시험관리(exam prep) 행 중복제거·대표행 선택(`dedupeExamPrepRowsForDisplay`, `chooseRepresentativeExamPrepRow`), 수학시험 날짜 정규화, 학사일정 이벤트 파생(`buildExamCalendarEvents`), 문제집/테스트지 헬퍼가 전부 App.jsx 최상위에 존재.
- `domains/exams/`, `domains/schoolCalendar/`, `domains/tests/` 폴더가 이미 있고 관련 다른 함수는 이미 거기 있음 — **같은 도메인 로직이 절반은 domain 폴더, 절반은 App.jsx에 흩어짐**. "덕지덕지"의 핵심 증거. 전부 순수 함수라 이동 위험 낮음.

**2500~2750줄 ("runtime" 객체 10개 — 17개 화면 callback 조립의 실체)**
- `examAnalysisPipelineRuntime`, `examPrepCenterRuntime`, `settingsCenterRuntime`, `learningSupportRuntime`, `planningToolRuntime`, `notificationCenterRuntime`, `lessonJournalTransport`, `academyReminderPanelRuntime`, `lessonNestedPanelRuntime`, `lessonJournalRuntime`, `teacherLessonHubRuntime` — 각 domain 화면에 넘길 함수/상수 묶음을 `Object.freeze`로 수동 조립.
- 2026-08-01 감사에서 "17개 teacher 화면 callback 조립"으로 명명된 문제가 정확히 이것. 새 화면 기능을 추가할 때마다 이 조립부와 App.jsx 양쪽을 계속 건드려야 하는 구조.

**2751줄~ (`App()` 컴포넌트 본문 시작, 나머지 8000줄 가까이가 전부 이 함수 하나)**
- 2752~2930줄: `useState` 약 40개, `useRef` 약 20개가 한 함수 안에 선형으로 나열.
- 2944~3388줄: 초기 데이터 로딩 `useEffect` 하나가 350줄 이상 — attendance-only/portal/teacher 세 가지 모드 분기, 15개 API 병렬 fetch, 각각의 정규화·CAS snapshot 설정을 한 블록에서 처리.
- 3430줄~: `handle*` 함수들이 시작됨 (persistProblemBooksNow, handleSaveSpecialLectureGuides, handleSaveMonthlySettlementMonth, handleUpdateSpecialLectureApplication 등) — 116개 `handle*` 함수 대부분이 이 컴포넌트 하나 안에 존재.

**3601~8209줄 (`App()` 함수 본문 나머지 — 5,458줄이 함수 하나)**
- `handle*`/`persist*`/`save*` 함수 100개 이상이 이 안에 선형으로 나열됨.
- **반복되는 CRUD 트리오 패턴 발견**: `persistScoreRecords`/`handleSaveScoreRecord`/`handleDeleteScoreRecord`, `persistAcademyTests`/`handleSaveAcademyTest`/`handleDeleteAcademyTest`, `persistStudentConsultations`/`handleSaveStudentConsultation`/`handleDeleteStudentConsultation` — 세 트리오가 필드명만 다르고 구조가 완전히 동일함(각 ~50줄). 제네릭 `createAppStateListPersistence(key, idField)` 팩토리 하나로 교체하면 150~250줄 절감 가능, 동작 변경 없음.
- **6836~7037줄 (`teacherViewAdapters = createTeacherViewAdapters({...})`)**: models 필드 약 90개 + actions 참조 약 110개를 한 객체 리터럴로 조립해 `TeacherViewOutlet`에 넘김. 이게 2500~2750줄의 runtime 객체들과 합쳐 "17개 화면 callback 조립" 문제의 실제 코드 형태 — 새 화면 기능을 추가하려면 이 조립부, 상단 import, handler 정의, 이 객체 리터럴 4곳을 전부 건드려야 함. 재설계(사용자 승인됨: 화면 유지하며 로직만 옮길 필요 없음)가 가장 필요한 지점.
- render JSX 자체(7039~7229줄)는 190줄 정도로 작음 — `App()`이 실제로는 "화면 컴포넌트"가 아니라 "주문 조립 + 핸들러 저장소" 역할을 하고 있음.

**8209줄 (`App()` 함수 종료) ~ 10,723줄 (파일 끝) — 약 2,500줄**
- **정상적으로 분리된 컴포넌트 함수 6개**(파일 안에서지만 최소한 독립 함수로는 분리됨): `MonthlyRegularLessonOpenModal`, `ExamPrepLessonDetail`, `LessonJournalFallback`, `CommentComposerModal`, `StudentPortalV2`(~150줄), `StudentModal`(~450줄, Tally 접수 UI 포함) — 총 약 900줄. domain 폴더로 옮기면 위험 없음.
- **죽은 코드 확인됨(grep으로 App.jsx 밖 참조 0건 확인)**: `ReportCenter`(9244~9322줄, ~80줄) — 렌더 트리 어디서도 사용 안 됨(reports 화면은 `EvaluationCenter` 사용). `getHomeworkBundle`(10099~10123줄, ~24줄)도 마찬가지로 미사용. 즉시 삭제 가능, 위험 0.
- 나머지 ~1,800줄은 알림 문구 생성, 보충 안내문 빌더, 숙제 완료율 계산, 날짜/시간 포맷팅 등 순수 유틸 함수 — 전부 React state 없이 매개변수만 사용. `domains/notifications/`, `domains/supplements/`, `domains/lessons/`로 옮길 수 있는 후보.

### App.jsx 종합 소견 (10,723/10,723줄 완독)

**압축 후보 (기계적, 위험 거의 없음)**
| 항목 | 절감 예상 | 근거 |
| --- | ---: | --- |
| 죽은 코드 삭제 (`ReportCenter`, `getHomeworkBundle`) | ~104줄 | grep으로 미사용 확인 |
| 얇은 wrapper 함수 제거 (`buildLessonReservationPayloadSnapshot` 등) | ~50줄 | 이미 domain 모듈로 옮겨진 로직을 재호출만 함 |
| CRUD 트리오 제네릭화 (scoreRecords/academyTests/studentConsultations 등) | ~150~250줄 | 구조 100% 동일, 필드명만 다름 |
| 시험관리/학사일정/테스트지 순수 함수를 기존 domain 폴더로 이동 | ~350줄 | domain 폴더 이미 존재, React state 없음 |
| 파일 하단 순수 유틸(알림 문구/보충 안내문/날짜 포맷) 이동 | ~1,800줄 | 전부 순수 함수 |
| 6개 프레젠테이션 컴포넌트를 각자 파일로 분리 | ~900줄 | 이미 독립 함수, 위험 낮음 |
| **합계** | **약 3,350~3,450줄 (10,723 → 약 7,300~7,400줄, ~32% 감소)** | 핵심 상태/핸들러 로직은 안 건드림 |

**재설계가 필요한 핵심 (위험 있음, 사용자 승인된 "화면 유지·로직 재설계" 대상)**
- 2500~2750줄 + 6836~7037줄의 "runtime 객체 10개 + teacherViewAdapters 조립" 구조 자체가 원래 진단의 "17개 화면 callback 조립" 문제입니다. 이건 단순 이동으로 안 풀리고, `TeacherViewOutlet`이 props 객체를 통째로 받는 대신 context/provider 패턴이나 화면별 독립 훅으로 데이터를 가져가는 구조로 바꿔야 근본적으로 해소됩니다. 다음 코드 통독(api/server.js, coreData.js) 이후 종합 설계안에서 다룰 부분.
- App() 함수 자체(5,458줄)의 116개 handler는 상태(useState 40개)와 강하게 얽혀 있어 "옮기기만" 해서는 안 되고, 어떤 handler가 어떤 화면 전용인지 재분류한 뒤 도메인별 custom hook(예: `useLessonJournalHandlers(state, deps)`)으로 묶어야 실질적 분해가 됩니다.

**다음 시작 지점**: `api/server.js` (7,255줄) 처음부터.

### `api/server.js` — 완독 (7,255/7,255줄)

**1~360줄 (import + registry 초기화)**
- route registry 17개(`createSystemRouteRegistry` 등)를 여기서 초기화·조립. import 구조 자체는 4차 리팩터링 결과가 반영돼 비교적 정리됨.

**368~1200줄 (알림/출결 핵심 로직)**
- `handleAttendanceCheck` 함수 하나가 약 400줄(735~1146줄) — kiosk/manual 출결 체크인/체크아웃/상태변경을 한 함수가 다 처리. 연속출결(consecutiveAttendanceVisit) 연동까지 포함.
- **App.jsx와 완전 동일한 함수 중복 확인**: `normalizeGradeLabel`(392줄, App.jsx와 동일), `schoolNamesMatch`(1190줄, App.jsx와 동일). 클라이언트-서버 경계를 넘는 순수 로직 중복.

**1200~2400줄 (Tally 웹훅 파싱, 인증, 포털 mutation, 알림 문구 재생성)**
- Tally 폼 응답 파싱(`getTallyFieldText`, `getTallyPayloadValue` 등) — server 전용, 중복 없음.
- 인증/포털 CAS 로직(`authenticateTeacher`, `mutatePortalQuestion`, `savePortalExamPostSubmission`) — 저장 후 재조회로 검증하는 패턴이 일관되게 적용됨(좋은 패턴).
- **핵심 발견 — 알림 문구 생성 로직 대규모 중복**: `formatSupplementScheduleLineForNotification`, `getStudentSupplementSchedulesForNotification`, `formatTestAttemptLineForNotification`, `getStudentTestResultLinesForNotification`, `getPreparationNoticeForNotification`, `supplementMethodLabelForNotification`, `followUpTypeLabelForNotification`, `getLessonHomeworkForNotification`, `getAssignmentStatusForNotification`, `createEmptyNotificationRecord`, `normalizeNotificationText`/`getNotificationTextKey`/`compactDuplicateNotificationBlocks`/`joinNotificationBlocks` (2104~2400줄, 약 300줄) — App.jsx의 `formatSupplementScheduleLine`, `getStudentSupplementSchedules`, `getPreparationNoticeForTarget`, `supplementMethodLabel`, `followUpTypeLabel`, `getLessonHomework`, `getAssignmentStatusForMessage`, `createEmptyRecord`, `normalizeMessageText`/`getMessageDedupeKey`/`compactDuplicateMessageBlocks`/`joinMessageBlocks`와 **함수 단위로 대응하는 거의 동일한 재구현**. client에서 미리보기 렌더링용으로, server에서 실제 발송 렌더링용으로 각각 따로 작성됨.
  - **영향**: 알림톡 문구 포맷을 하나 고치면 두 곳(App.jsx, server.js)을 다 고쳐야 함. 안 고치면 "화면에서 본 미리보기"와 "실제 발송된 문구"가 미묘하게 달라질 수 있음 — 이게 사용자가 느끼는 "저장 로직이 불편하다"는 감각과 직접 연결될 가능성이 높은 지점.
  - **압축 방향**: 이 로직을 `src/domains/notifications/`의 공유 순수 모듈로 통합하고 client/server가 같은 모듈을 import하도록 재구성. Node 서버가 ESM이라 client 코드를 그대로 import 가능한 구조(이미 `src/domains/...`를 server.js가 import하는 사례가 있음 — 예: `assignmentStatus.js`, `studentSchedule.js`). 선례가 있으므로 안전하게 통합 가능.

**2401~5680줄 (알림 발송 실행부, Solapi 예약/취소/재조회, 시험분석 AI 파이프라인, PDF 처리)**
- `refreshLessonCommentJobBeforeSend`, `reserveNotificationJobInSolapi`, `reconcileSolapiNotificationJobs`, `dispatchDueNotificationJobs` 등 — 알림톡 발송/예약/취소/재조회 전체 흐름. 상태 기계가 복잡하지만(scheduled/dry_run/sent/failed/canceled/send_unconfirmed) 한 파일 안에 일관되게 있어 추적은 가능함.
- 시험분석 AI 파이프라인(3624~5390줄, 약 1,750줄): 쎈 유형 매칭, PDF vision 검증, 문항 경계 탐지, AI 행 채움, 블로그/인스타 콘텐츠 생성 프롬프트 빌더. 이 블록은 사실상 독립적인 "시험분석 서브시스템"이고 App.jsx나 다른 곳과 중복 없음 — 프롬프트 엔지니어링이라 로직이 원래 길고 구체적임. 압축보다는 있는 그대로 `api/routes/` 하위 전용 모듈로 물리 분리하는 게 맞는 영역(현재도 `api/routes/examAnalysisPipeline.js`가 일부 담당 중이나 프롬프트 빌더 자체는 server.js에 남아있음).
- 자잘한 중복 재확인: `getKoreaDateString`(5519줄)이 이미 457줄의 `getKoreaDateStringForAttendance`와 거의 동일 — 같은 파일 안에서도 중복.

**5680~7255줄 (HTTP 라우트 직접 디스패치 체인) — 4-3 감사에서 예고된 "92개 미이관 route"의 실체**
- `http.createServer` 핸들러 안에 `if (request.method === "..." && requestUrl.pathname === "...") { try { ... } catch { ... } return; }` 블록이 약 80개 이상 연속으로 나열됨(5901~7245줄, 약 1,350줄).
- 거의 모든 블록이 동일한 6~8줄 템플릿: payload 파싱 → coreData 함수 호출 → `sendJson` 성공 응답 / catch에서 `error.code`·`error.field`·`error.audit` 유무에 따라 조건부로 필드 추가한 에러 응답.
- **압축 방향**: `{ method, pathname, handler, errorFields }` 형태의 선언적 라우트 테이블 + 공통 dispatcher 함수 하나로 대체 가능. 기존 17개 route registry와 같은 패턴을 여기 82개에도 적용하면 이 구간만 1,350줄 → 300줄 안팎으로 줄어들 것으로 추정. 이게 정확히 4-3 종료 감사가 "다음 단계로 넘긴다"고 명시했던 미완료 작업.

### `api/server.js` 종합 소견 (7,255/7,255줄 완독)

| 항목 | 상태 |
| --- | --- |
| App.jsx와의 알림 문구 생성 로직 중복 | 약 300줄, 함수 단위 대응 — 통합 시급 후보 1순위 |
| 같은 파일 내 `getKoreaDateString` 계열 중복 | 소규모지만 존재 |
| 직접 dispatch route 82개 (선언적 테이블화 가능) | 약 1,350줄 → 압축 시 대폭 축소 가능, 4-3에서 이미 예고된 작업 |
| 시험분석 AI 파이프라인 1,750줄 | 압축 대상 아님, 물리적 위치만 조정 후보 |
| 출결/알림 핵심 로직(`handleAttendanceCheck` 등) | 복잡하지만 응집도 높음, 재설계보다 현행 유지가 안전 |

### `api/routes/coreData.js` — 완독 (4,907/4,907줄)

**1~434줄 (import, 헬퍼, 학생 삭제 감사 로직)**
- 도메인별 persistence 헬퍼(`studentPersistence.js`, `examPrepRowPersistence.js`, `schoolEventPersistence.js` 등 15개 이상)를 각각 import — App.jsx의 "함수 하나당 파일 하나" 파편화와 같은 패턴이 여기도 존재.
- `deleteWithdrawnStudent`/`auditWithdrawnStudentDeletion`: 학생 삭제 시 13개 테이블에 걸친 참조를 찾아 정리하는 로직. 응집도 높고 위험한 영역이라 재설계보다 현행 유지 권장.

**435~4907줄 — 파일 전체를 관통하는 단일 구조적 패턴 발견 (핵심 발견)**
- `upsertStudent`, `persistClassRosterStudentChange`/`persistLessonRosterChange`(반 명단), `persistDerivedExamPrepChange`/`persistDerivedLessonChange`(파생 학사일정), `persistLessonJournalHistoryLessonChange`/`persistLessonJournalHistoryHomeworkChange`(수업 복사·되돌리기), `persistLessonJournalRowsHomeworkChange`/`persistLessonJournalRowsRecordChange`(수업기록·숙제), `persistLessonJournalMakeupTask`(등원보충), `persistSupplementScheduleLessonChange`/`persistSupplementScheduleTaskChange`(보충 일정), `upsertExamPrepRows`, `upsertSchoolEvent`, `upsertResourceMaterial` — **최소 12개 도메인**이 다음 6단계를 거의 동일한 코드로 각각 재구현:
  1. 현재 행 재조회 (`getXxx`)
  2. before/after 동등성 비교 (`areXxxEqual`) — 변경 없으면 조기 반환
  3. 낙관적 동시성 버전 충돌 감지 (`updated_at` 불일치 시 conflict 에러 생성, 코드/메시지만 도메인별로 다름)
  4. 버전 필터로 patch/insert (`createXxxVersionFilter`)
  5. 저장 직후 재조회로 검증 (`verifyXxxSave` / `areXxxTimestampsEqual`)
  6. 실패 시 롤백 (`rollbackXxx`) — 여러 변경을 묶어 저장하는 `saveXxxPlan` 함수들(`saveClassRosterPlan`, `saveDerivedSchoolCalendarPlan`, `saveLessonJournalHistoryPlan`, `saveLessonJournalRowsPlan`, `saveSupplementSchedulePlan`)은 추가로 역순 롤백 오케스트레이션(성공한 변경을 역순으로 되돌리고 검증)까지 도메인마다 새로 작성.
- 도메인마다 함수 이름(`throwStudentConflict`/`createClassRosterConflict`/`createDerivedSchoolCalendarConflict`/`createLessonJournalHistoryConflict`/`createLessonJournalRowsConflict`/`createSupplementScheduleConflict`)과 에러 코드만 바뀌고 로직 골격은 완전히 동일 — App.jsx의 CRUD 트리오 중복(65행 참조)보다 훨씬 크고 훨씬 일관된 패턴. `saveXxxPlan` 계열 5개 함수의 롤백 오케스트레이션 부분만 대략 900~1,000줄이 구조적으로 동일.
- **왜 이렇게 됐는지**: `docs/testing-policy.md`의 "저장 후 반드시 재조회로 검증" 원칙과 4차 리팩터링의 "안전 단위"식 접근(도메인 하나씩 독립 브랜치로 처리) 때문에, 매번 새 도메인을 다룰 때마다 이 패턴을 처음부터 다시 타이핑한 것으로 보임. 도구(`check:duplication`)가 이걸 못 잡는 이유: 변수명·에러 메시지·테이블명이 매번 달라 jscpd의 토큰 매칭 임계값을 넘지 못함.

**압축 재설계 방향 (사용자 승인 범위: 저장 로직 자유 재설계 가능)**
- 제네릭 헬퍼 하나로 통합 가능: `createOptimisticSavePlan({ table, idColumns, toRow, fromRow, areEqual, areTimestampsEqual, createNextUpdatedAt, conflictCode })` 형태로 만들면, 위 12개 도메인의 개별 `persistXxx`/`rollbackXxx` 쌍(각 40~120줄)을 도메인별 설정 객체(각 10~15줄)로 대체 가능. `saveXxxPlan` 5개의 롤백 오케스트레이션도 "여러 변경을 순서대로 적용하고 실패 시 역순 롤백"이라는 동일 골격을 제네릭 `runReversiblePlan(steps)` 러너 하나로 통합 가능.
- 예상 절감: 약 2,000~2,400줄(파일의 45~50%) — App.jsx/server.js보다 압축 잠재력이 훨씬 큼. 단, 실제 저장 경로(Supabase 쓰기)를 직접 건드리므로 App.jsx 죽은 코드 삭제와 달리 **고위험** — 도메인 하나씩 별도 안전 단위로 전환하고 각 단위마다 해당 도메인의 저장/충돌/롤백 시나리오 테스트를 직접 실행해 확인해야 함.

### `api/routes/coreData.js` 종합 소견 (4,907/4,907줄 완독)

| 항목 | 상태 |
| --- | --- |
| 낙관적 동시성 저장+검증+롤백 패턴의 12-도메인 재구현 | 약 2,000~2,400줄, 제네릭 헬퍼 1~2개로 통합 가능 — **압축 최우선 후보** |
| 학생 삭제 감사(`auditWithdrawnStudentDeletion` 등) | 응집도 높음, 현행 유지 권장 |
| import 파편화 (persistence 헬퍼 15개+ 개별 파일) | App.jsx와 동일 패턴, 낮은 우선순위 |

## 자동 도구 발견 (통독과 병행, 2026-08-16)

읽기만으로는 커버 범위가 느려서 결정론적 도구 2개를 프로젝트에 추가했다(`npm run check:duplication`, `npm run check:orphans`). 매 세션 전체 통독을 반복하지 않고도 최신 상태를 몇 초 만에 재확인할 수 있다.

**`npm run check:duplication` (jscpd)**: `api/server.js` 5680~7245줄의 82개 직접 dispatch 블록 중복을 213ms 만에 정확한 줄 범위로 확인 — 위 "압축 방향"과 정확히 일치. 단, App.jsx-server.js 알림 문구 중복(변수명이 달라 리터럴 매칭 안 됨)은 못 잡았다 — 이런 "이름만 바꾼 재구현"은 도구가 아니라 읽기로만 찾을 수 있다는 걸 확인.

**`npm run check:orphans` (dependency-cruiser)**: 어디서도 import 안 되는 고아 모듈 5개 발견 (457개 모듈, 918개 의존관계 분석에 몇 초):
- `src/shared/server/routeRegistryTypes.js`
- `src/shared/contracts/providerResultContract.js` — **주의**: 4-5e에서 의도적으로 아직 실제 orchestrator에 안 붙인 pure fixture 모듈. 죽은 코드 아님, 고아로 뜨는 게 정상.
- `src/domains/supplements/useSupplementNotificationDraftSelectionState.js`
- `src/domains/lessons/lessonJournalRecordBulkApi.js`
- `src/domains/lessons/lessonJournalHomeworkBulkApi.js`

**2026-08-17 후속 확인 결과**:
- `src/shared/server/routeRegistryTypes.js` — **오탐**. JSDoc `@typedef {import("./routeRegistryTypes.js").X}` 타입 전용 참조로 route registry 파일 15개 이상이 실제로 사용 중. dependency-cruiser는 주석 안의 타입 참조를 못 잡아서 orphan으로 오판함. 삭제하면 안 됨.
- `src/domains/lessons/lessonJournalRecordBulkApi.js`, `src/domains/lessons/lessonJournalHomeworkBulkApi.js`, `src/domains/supplements/useSupplementNotificationDraftSelectionState.js` — 셋 다 **"만들었지만 실제 코드에 통합 안 됨"** 카테고리. App.jsx/server.js 어디서도 안 쓰이는 건 맞지만, `scripts/test-lesson-journal-record-bulk-api.mjs`, `scripts/test-lesson-journal-homework-bulk-api.mjs`, `scripts/test-supplement-notification-draft-selection-state.mjs`가 각각 전용으로 검증하고 `scenario-tests-production.cjs`에 물려 있어서 test:production을 통과시키는 상태. 지우면 이 3개 테스트가 import 에러로 깨짐 — ReportCenter처럼 즉시 삭제 가능한 게 아니라, (a) 왜 통합이 안 됐는지 git blame/history 확인 (b) 실제로 통합해서 살릴지, 테스트와 함께 정리해서 지울지 결정하는 별도 안전 단위가 필요함. 이번 세션에서는 처리 안 함, 다음 세션 후보로 남김.

**다음 시작 지점**: `src/app/App.css` (22,609줄) 처음부터. (`api/routes/coreData.js` 2026-08-17 완독 — 12-도메인 낙관적 저장/롤백 중복 패턴 발견, 아래 참조)

