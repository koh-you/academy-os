# Next Session Handoff

이 폴더 하나만 다음 Codex 프로젝트 세션에 넘기면 됩니다. 새 세션은 `AGENTS.md`와 이 파일을 먼저 읽고, `git status --short`, `git log -1 --oneline`, `docs/current-worklog.md`를 확인한 뒤 이어가면 됩니다.

## 시작 프롬프트

```text
E:\academy-os 프로젝트 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, git status와 최신 worklog를 확인해 주세요.

최근 작업에서 기존 시험분석 탭과 관련 AI/PDF 분석 기능, app_state 저장 데이터 경로를 제거했습니다. 이후 사용자는 시험분석을 v2 파이프라인으로 새로 만들기로 했습니다. 옛 코드를 복구하지 말고 `PDF -> 텍스트 후보 추출 -> Claude 원본 검증 -> 문항 수 판독 -> 선생님 확인 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 재요청` 순서로 이어가 주세요.

단, 다음 세션의 첫 작업은 시험분석 구현을 바로 이어가기 전에 `데이터 원천 중복/덧대기 전수조사`입니다. `fallback`, `sampleData`, `mock`, `default`, `infer*`, `normalize*`, `dedupe*`, `duplicate`, `legacy`, `deprecated`, `hiddenAppState`, `app_state`, `localStorage`, `override` 키워드로 후보를 표로 만들고, 원천 삭제/마이그레이션이 필요한 구조와 정상 파생 표시를 구분해 주세요. 필터/정규화/우선순위 보정을 여러 겹 덧대어 오류를 숨기지 말고, 시험분석 테스트 데이터가 손상됐으면 삭제 후 처음부터 다시 올리는 방향을 우선 검토하세요. 보정 로직이 2겹 이상 필요해 보이면 사용자에게 확인한 뒤 진행하세요.

작업을 완료할 때마다 최종 답변에는 반드시 `사람 검토 절차`를 포함해 주세요. 최신 커밋/검토 화면, 사용할 테스트 데이터, 사용자가 누를 순서, 기대 결과, 저장 원천, 실패 시 중단 조건, 다음 단계 통과 기준을 순서대로 적어야 합니다.

시험분석 탭, 시험분석 API, PDF 처리, Supabase v2 테이블, 분석 저장/삭제를 건드린 작업은 시험분석 탭 전용 검토 절차도 포함해야 합니다. 최소한 `학교 -> 학년 -> 고사 -> 분석` 카드 확인, PDF 업로드, 텍스트 후보 추출, 비용 허용 시 AI 원본 검증, Supabase/Storage 저장 확인, 새로고침 유지, 테스트 분석 삭제 확인, 중단 조건을 순서대로 안내하세요.

현재 새 v2 구조의 SQL, 백엔드 run/PDF 업로드/삭제 API, 첫 UI(학교/학년/고사/분석 카드형 목록, 기본정보 저장, PDF 업로드, 상태 확인), PDF 텍스트 후보 추출, Claude 우선 원본 검증, 문항 수 선생님 확인, 1~N 빈 행 생성, 문항 경계 탐지 1단계까지 들어가 있습니다. 전수조사 전에는 시험분석 파이프라인의 다음 작은 단계인 경계 검수/AI 행 채움 설계로 이어가면 됩니다.
```

## 현재 기준

- 브랜치: `main`
- 최신 커밋: 다음 세션 시작 시 `git log -1 --oneline`으로 확인
- 마지막 확인 시 작업트리: 이번 작업 완료 후 clean이어야 함
- 검증:
  - `node --check api/routes/examAnalysisPipeline.js` 통과
  - `node --check api/server.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
  - `npm run test:production` 통과: total 231, failed 0
  - `npm run build` 통과. 기존 Vite chunk size warning은 무시 가능한 알려진 경고다.
- 운영 Supabase에서 즉시 기존 시험분석 저장 데이터를 지우려면 `supabase/20260703_remove_exam_analysis_app_state.sql`을 SQL editor에 적용한다. 앱/API에서는 `examAnalyses`, `examAnalysisFolders`를 deprecated app_state 키로 숨기고 다음 app_state 저장 때 삭제한다. SQL은 제거된 시험분석 `app_state`와 `exam-analysis-sources` Storage 객체/버킷만 지우며, 시험 후 제출용 `exam-submissions` 같은 활성 Storage는 건드리지 않는다.
- 사용자는 새 시험분석 v2 저장 구조용 `supabase/20260703_exam_analysis_pipeline.sql`을 SQL editor에 적용했다고 알려줬다. 새 bucket은 `exam-analysis-pipeline-sources`다.

## 이번 삭제 기준

- 사이드바의 `시험분석` 탭과 `ExamAnalysisCenter`를 제거했다.
- 프론트의 `examAnalyses`, `examAnalysisFolders` 상태, 로드, 저장, 자동저장 UI를 제거했다.
- `/api/ai/exam-analysis`, `/api/ai/exam-question-*`, `/api/exam-analysis-sources` API를 제거했다.
- 레거시 PDF 분석 의존성과 API는 제거했다. 이후 v2의 텍스트 후보 추출용으로 `pdfjs-dist`만 다시 추가했다. 이 추출은 원문 분석 엔진이 아니라 문항번호 후보/품질 점검용이다.
- 시험분석 전용 도메인 파일과 CSS를 제거했다.
- `api/routes/examAnalysis.js`는 삭제하고, 수업일지/시험 후 총평 맞춤법 AI만 담당하는 `api/routes/commentPolish.js`를 남겼다.
- 시험관리, 시험 후 총평 맞춤법 AI, 시험 후 제출 자기점검, 수업일지 저장/알림톡 흐름은 유지했다.
- 제거된 시험분석 PDF Storage(`exam-analysis-sources`)는 삭제 SQL 대상이다. 학생 시험 후 제출용 `exam-submissions` 같은 활성 DB 연결 Storage는 유지한다.

## 새 v2 구현 기준

- 사이드바에 새 `examAnalysisPipeline` 기반 `시험분석` 탭을 추가했다. 옛 `examAnalysis` 탭과 `ExamAnalysisCenter`는 복구하지 않는다.
- `ExamAnalysisPipelineCenter`는 `학교 -> 학년 -> 고사 -> 분석` 카드형 컬럼 목록, 기본정보 저장, PDF 원본 업로드, 진행 단계, 저장 이벤트를 보여준다.
- 학교 카드는 `상계고`, `자운고`, `창동고`, `용화여고`, `정의여고` 고정이다. 학년 카드는 `고1`, `고2`, `고3` 고정이고, 고사 카드는 `1학기 중간`, `1학기 기말`, `2학기 중간`, `2학기 기말` 고정이다.
- 프론트는 `GET/POST/DELETE /api/exam-analysis-runs`, `POST /api/exam-analysis-source-files`, `GET /api/exam-analysis-source-files/open`을 사용한다.
- 저장/불러오기/PDF 업로드/삭제 상태는 작업 화면 안의 `시험분석 · 저장 중/완료/실패`, `시험분석 PDF · 업로드 중/완료/실패`, `시험분석 · 삭제 중/완료/실패` 배지로 표시한다.
- 학교/학년/고사/분석 목록은 밝은 컬럼 안의 큰 카드로 표시하고, 선택 카드는 네이비 배경으로 표시한다.
- 학교 컬럼에는 `추가` 버튼이 있다. 분석 컬럼에는 선택 분석 `삭제` 버튼이 있으며, 삭제 시 연결 PDF Storage 객체와 run row를 함께 정리한다.
- PDF 원본 목록의 `파일 200KB` 같은 값은 업로드 파일 크기다. 텍스트 추출 후에는 `추출 nKB`, `n쪽`, 문항번호 후보, 누락 후보, 텍스트 레이어 잡음 경고가 별도로 보인다.
- `POST /api/exam-analysis-source-files/extract`는 PDF source를 Supabase Storage에서 내려받아 `exam_analysis_sources.extracted_text`, `page_text_ranges`, `page_image_manifest`, `extraction_status`를 채운다. 원문 텍스트 필터링으로 잡음을 제거하지 않고, 문항번호 후보/누락 후보/잡음 여부만 품질 지표로 저장한다.
- `POST /api/exam-analysis-source-files/vision-check`는 Anthropic API key가 있으면 Claude Messages API PDF `document` 입력을 우선 사용한다. Anthropic 키가 없을 때만 OpenAI Responses PDF 입력을 예비 경로로 둔다. 이 버튼은 API 과금 대상이므로 자동 실행하지 않는다.
- Claude 비전 체크는 이전 문항별 크롭/문항별 분석과 다르다. 지금 단계의 목적은 `readable`, `pageCount`, `subject`, `questionNumberCandidates`, `questionCountCandidate`, `missingQuestionNumbers`, `answerKeyDetected`만 확인하는 얕은 원본 검증이다. 문항별 본문/유형분류/크롭은 아직 붙이지 않는다.
- `POST /api/exam-analysis-runs/confirm-question-count`는 선생님이 확정한 문항 수를 저장하고, Supabase RPC `ensure_exam_analysis_question_rows(run_id, count)`로 1~N 빈 행을 생성한다. 화면에는 `문항 수 확인` 카드, `선생님 확정 문항 수` 입력, `n문항 확정` 버튼, `시험분석 · 문항 수 확정 중/완료/실패` 상태, `고정 문항 행` 번호 칩이 있다.
- 문항 수를 줄일 때 N보다 큰 기존 행이 비어 있으면 정리하지만, 이미 AI/선생님 내용이 들어간 행이면 오류를 내고 테스트 분석 삭제 후 재생성을 요구한다. 필터/우선순위 보정을 덧대어 화면만 맞추는 방식으로 처리하지 않는다.
- `POST /api/exam-analysis-runs/detect-question-boundaries`는 확정된 1~N 행 기준으로 PDF 원본에서 각 문항의 시작 페이지, 끝 페이지, 대략 위치만 찾는다. 결과는 `exam_analysis_questions.source_page`, `source_evidence.boundary`, `exam_analysis_runs.audit_summary.boundaryDetection`에 저장한다. 새 SQL edit은 필요 없다.
- 화면에는 `문항 경계 탐지` 카드와 `경계 탐지(과금)` 버튼이 있다. 버튼은 자동 실행하지 않는다. 완료 후 각 문항 카드에 `1p`, `2~3p` 같은 페이지 범위와 위치 힌트가 보인다. 저장 이벤트 시간은 `MM.DD HH:mm` 한국 시간 라벨로 표시한다.
- 실제 운영 PDF `[자운고] 2026 1-1 기말 공통수학1.pdf` 검증 결과: 텍스트 추출은 `5쪽`, `52,792 bytes`, 문항번호 후보 `1~24`가 잡혔지만 PDF 텍스트 레이어 잡음이 감지됐다. Claude `claude-sonnet-4-5` 원본 검증은 `readable=true`, `pageCount=5`, `subject=공통수학1`, `questionCountCandidate=24`, 누락 번호 없음, 빠른 정답 감지로 성공했다.
- 시험분석 v2 저장 경계에서 과목 `기하`는 빈 값으로 정리한다. 파일명/원본 검증이 `공통수학1`을 명확히 말하면 그 값을 사용한다.
- 아직 문항 경계 결과의 사람 검수 UI, AI 행 채움, 누락 검수/재요청은 붙이지 않았다. AI 행 채움은 `source_evidence.boundary`가 사람이 보기에도 맞는지 확인한 뒤 진행한다.

## 다음 세션 우선순위

1. 데이터 원천 중복/덧대기 전수조사를 먼저 한다. 후보를 `원천 데이터`, `파생 표시`, `일시 override`, `마이그레이션/삭제 대상`, `정상 fallback`으로 분류하고, 바로 고치기 전에 목록과 우선순위를 확정한다.
2. 1차 스캔 후보: `api/routes/coreData.js`의 `fallbackSource`/`sampleData` 반환, `src/app/App.jsx`의 `useStoredState(... sampleData ...)` 초기값, `dedupeExamPrepRowsForDisplay`, `inferExamCycleFromPrepId`, `app_state.generatedLessonControls`, `app_state.examPostTargetStudentIds`, `deprecatedAppStateKeys`/`hiddenAppStateKeys`, 수업일지 저장 직후 `localStorage` 직접 갱신 구간, 시험관리 중복 정리 API와 화면 dedupe 관계.
3. 필터/정규화/우선순위 보정을 여러 겹 덧대어 오류를 숨기지 않는다. 테스트 단계 데이터가 손상됐으면 삭제 후 재업로드/재분석을 우선 검토하고, 보정 로직이 2겹 이상 필요해 보이면 사용자에게 확인한다.
4. 작업 완료 답변에는 반드시 사람 검토 절차를 포함한다. 검토 절차는 최신 커밋, 데이터 준비, 화면 조작 순서, 기대 결과, 저장 원천, 실패/중단 조건, 통과 기준을 포함해야 한다.
5. 시험분석을 건드린 작업은 시험분석 탭 전용 검토 절차를 추가로 포함한다.
6. 기존 시험분석 기능을 복구하지 않는다.
7. 운영 Supabase에서 새 v2 테이블과 `exam-analysis-pipeline-sources` Storage bucket이 정상인지 확인한다.
8. 시험분석 다음 구현은 `문항 경계 검수`다. 경계 탐지 결과에서 누락/재확인/겹침 경고를 사람이 확인하고, 필요하면 문항별 page/position을 수동 수정할 수 있게 한다.
9. 그 다음은 AI 행 채움이다. 문제 본문을 대량 저장하지 말고, 경계 정보와 PDF 원본을 근거로 단원, 쎈 주유형, 보조유형, 난이도, 짧은 판별 근거만 채우는 단계로 설계한다.
10. 이전처럼 문항별 크롭/비전 분석으로 바로 가지 말고, 비용과 실패 지점을 작게 쪼개서 설계한다.

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/app/App.css`
- `api/routes/commentPolish.js`
- `api/routes/examAnalysisPipeline.js`
- `api/server.js`
- `scripts/scenario-tests-production.cjs`
- `supabase/20260703_remove_exam_analysis_app_state.sql`
- `supabase/20260703_exam_analysis_pipeline.sql`
- `docs/exam-analysis-pipeline-v2.md`

## 자주 쓰는 명령

```powershell
git status --short
git log --oneline -8
node --check api/routes/commentPolish.js
node --check api/server.js
node --check api/routes/coreData.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
```
