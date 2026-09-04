# 시험지관리 탭 — 시험지 목록(라이브러리) 설계

관련: `docs/unit-eval-system-plan.md`
브랜치: `codex/unit-eval-system-20260903`

## 목적

현재 `시험지관리` 탭에 **시험지 목록(라이브러리)** 서브탭을 추가한다. 미리 만든 단원별 평가
시험지를 등록·관리하고, `응시 기록`이 그 목록에서 시험지를 골라 세션에 연결한다.

## 현재 구조 (as-is)

- 메뉴: Lesson Hub > `시험지관리` (id `materials`) → `MaterialManager`
  (`src/domains/teacher/LearningSupportCenters.jsx:850`)
- 서브탭 2개: `응시 기록`(attempts), `학생 이력`(history) — `TestManagerTabs`
  (`src/domains/tests/TestManagerPanels.jsx`)
- `응시 기록`: 테스트명·과목·단원·총문항·통과기준정답수를 직접 입력 → `test_sessions` +
  `test_attempts` 저장 (`/api/test-sessions`). `testSession.problemBookId`는 `""`로
  하드코딩되어 시험지와의 링크가 없다 (`LearningSupportCenters.jsx:1038`).
- 통과/미통과: `getTestAttemptPassStatus(attempt, session)`가 정답수 ≥ passCorrectCount로
  계산할 수 있으나, 저장 시점 판정은 학생별 `retestNeeded` 체크박스에 의존한다.
- `problemBooks` (app_state key `academy-os.problemBooks.v1`): 리치한 shape가 이미 있으나
  현재는 `오답관리(FollowUpCenter)`의 picked-problem 소스로만 쓰이고 전용 관리 UI가 없다.

## 데이터 모델 (to-be)

신규 app_state key **`academy-os.testPaperLibrary.v1`** (배열)을 도입한다. 기존 `problemBooks`는
오답관리 의미와 얽혀 있어 그대로 재사용하면 경계가 흐려진다.

항목 필드 — `src/domains/tests/testPaperLibraryModel.js`에 구현됨:

| 필드 | 설명 |
| --- | --- |
| `testPaperId` | `tp_<과목>_<종류>_<단원NN>_d<난이도>` 결정적 ID |
| `subject` | 6과목 |
| `testKind` | `daily` / `unit` (기존 `testPaperKindOptions` id와 정렬) |
| `unitNo` `unitName` `partName` | 쎈 목차 중단원 |
| `difficulty` | 1 / 2 |
| `source` | 개념원리 / 베이직쎈 단원마무리 / 쎈B 단원마무리 |
| `totalQuestions` `passCorrectCount` | 총 문항 수, 통과 기준 정답 수 (총문항 확정 시에만 인정) |
| `status` | `draft`/`ready`/`active`/`hold` (준비중/준비완료/사용중/보류) |
| `questionFileUrl` `answerFileUrl` | 문제·정답 파일 링크 |
| `watermarked` | 워터마크 삽입 완료 여부 |
| `folderPath` | `공통수학1/단원테스트/01. 다항식의 연산/난이도2 (쎈B 단원마무리)` |
| `note` `createdAt` `updatedAt` | |

모델 함수: `buildExpectedPaperCatalog(ssenTypeIndex)`(예정 208건), `normalizeTestPaperEntry`,
`normalizeTestPaperLibrary`(ID 중복 제거), `buildLibraryCoverage(catalog, library)`(준비 현황),
`selectPapersForSession`(응시 기록 필터), `selectRetestPaperCandidates`(재시험지 후보).

## 저장 계약

- app_state key `academy-os.testPaperLibrary.v1`, 배열.
- AGENTS.md 저장 원칙: `local draft → 명시적 저장 또는 안전한 debounce → API 성공 →
  Supabase 재조회·대조 → 저장 완료 표시`. 낙관적 UI 금지.
- App.jsx는 `testPaperLibrary` state + hydration + `persistTestPaperLibraryNow`(requestId
  경쟁 방지, `postAppState` 성공 시에만 state·저장상태 갱신)만 소유한다. `models.testPaperLibrary`,
  `models.testPaperLibrarySaveState`, `actions.handleSaveTestPaperLibrary`로 노출한다.
- **정규화(`normalizeTestPaperLibrary`)는 App.jsx가 아니라 이를 소비하는 lazy 컴포넌트에서
  적용한다.** App.jsx가 모델을 import하면 main 청크가 `check-teacher-view-chunks` 예산
  (946 KB)을 넘는다. hydration은 raw 배열을 그대로 담고, 화면이 로드·저장 시 정규화한다.
- 파일 업로드는 저장과 **별도 행동**. 저장 위치(TBD: Drive / Supabase Storage) 확정 후 별도 단위.

## UI

`TestManagerTabs`에 서브탭 `시험지 목록` 1개 추가.

1. **준비 현황 요약** — `buildLibraryCoverage`: 전체 208 / 준비완료 n / 진행중 n / 미등록 n,
   과목별 막대.
2. **필터** — 과목, 종류(데일리/단원), 난이도, 상태.
3. **목록** — 예정 카탈로그 행 + 등록 항목을 병합 표시. 행: 과목·단원·종류·난이도·출처·문항수·
   상태·파일유무·워터마크. 클릭 → 편집 패널.
4. **편집 패널** — 총문항 / 통과기준 / 상태 / 파일 링크 / 워터마크 / 메모. 명시적 저장 버튼.
5. **폴더 경로 복사** — `folderPath`를 클립보드로 (매쓰플랫/수학비서에서 만든 PDF를 그 폴더에 배치).

## 연동

### 응시 기록 → 시험지 선택
- `TestAttemptFormGrid`에 `시험지 선택` 드롭다운 추가. 과목+종류+단원 선택 시
  `selectPapersForSession(library, { subject, testKind, unitNo })` 결과를 노출.
- 선택 시 테스트명·총문항·통과기준·과목·단원을 자동 채우고 `testSession.problemBookId ← testPaperId`.
- 직접 입력(현행 방식)도 유지 — 시험지 미선택 허용.

### 점수 → 재시험 판정
- 저장 시 `getTestAttemptPassStatus`로 `passStatus` 자동 계산(정답수 < passCorrectCount → failed).
  학생별 수동 override 유지.
- `passStatus === "failed"` → `record.needsRetest` 연결 (기존 보충관리 retest 체인 입력).
- 컷라인: 시험지의 `passCorrectCount` 우선, 없으면 세션 입력값. 기본 정답률은 TBD.

### 재시험 → 시험지
- 보충관리 `retest` 태스크에서 `selectRetestPaperCandidates(library, sourcePaper)`로 재시험지 지정
  (같은 과목·단원, 다른/같은 난이도).
- "재시험 안내" 알림톡 문구에 시험지명·범위 포함 (기존 문구 빌더 확장).

## 단계별 구현 (안전 단위)

1. **[완료]** 순수 모델 `testPaperLibraryModel.js` + 결정적 테스트
   `scripts/test-test-paper-library-model.mjs`.
2. **[완료]** 폴더 스캐폴드 생성기 `scripts/build-test-paper-folders.mjs`.
3. **[완료]** app_state key `testPaperLibrary` state + hydration + `persistTestPaperLibraryNow`,
   `models`/`actions` 노출 (`appConfig.js`, `App.jsx`). 화면 없음.
4. `시험지 목록` 서브탭 UI (읽기 + 메타 편집·저장). `MaterialManager`(lazy)에서 모델 import·정규화.
   `TeacherViewOutlet` `materials` props에 `testPaperLibrary` / `testPaperLibrarySaveState` /
   `onSaveTestPaperLibrary` 추가. 파일 업로드 제외.
5. `응시 기록`에 시험지 선택 드롭다운 + 자동 채움 + `problemBookId` 연결.
6. `passStatus` 자동 계산 → `needsRetest` 연결.
7. 파일 업로드 / 워터마크 파이프라인 (저장 위치 확정 후).
8. 재시험지 지정 + 알림톡 문구 확장.

각 단계: `npm run lint:runtime`, 전용 테스트, `npm run build`. 4~7은 운영 저장·발송 경계라 사람 확인.
