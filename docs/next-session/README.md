# Next Session Handoff

이 폴더 하나만 다음 Codex 프로젝트 세션에 넘기면 됩니다. 새 세션은 `AGENTS.md`와 이 파일을 먼저 읽고, `git status --short`, `git log -1 --oneline`, `docs/current-worklog.md`를 확인한 뒤 이어가면 됩니다.

## 시작 프롬프트

```text
E:\academy-os 프로젝트 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, git status와 최신 worklog를 확인해 주세요.

최근 작업에서 기존 시험분석 탭과 관련 AI/PDF 분석 기능, app_state 저장 데이터 경로를 제거했습니다. 이후 사용자는 시험분석을 v2 파이프라인으로 새로 만들기로 했습니다. 옛 코드를 복구하지 말고 `PDF -> 문항 수 판독 -> 선생님 확인 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 재요청` 순서로 이어가 주세요.

현재 새 v2 구조의 SQL, 백엔드 run/PDF 업로드 API, 첫 UI(학교/학년/고사/분석 카드형 목록, 기본정보 저장, PDF 업로드, 상태 확인)는 들어가 있습니다. 다음 작업은 AI 호출이 아니라 PDF 텍스트/페이지 추출 단계입니다.
```

## 현재 기준

- 브랜치: `main`
- 최신 커밋: 다음 세션 시작 시 `git log -1 --oneline`으로 확인
- 마지막 확인 시 작업트리: 이번 삭제 작업 완료 후 clean이어야 함
- 검증:
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
  - `npm run test:production` 통과: total 231, failed 0
  - `npm run build` 통과, 기존 Vite chunk size warning만 있음
- 운영 Supabase에서 즉시 기존 시험분석 저장 데이터를 지우려면 `supabase/20260703_remove_exam_analysis_app_state.sql`을 SQL editor에 적용한다. 앱/API에서는 `examAnalyses`, `examAnalysisFolders`를 deprecated app_state 키로 숨기고 다음 app_state 저장 때 삭제한다. SQL은 제거된 시험분석 `app_state`와 `exam-analysis-sources` Storage 객체/버킷만 지우며, 시험 후 제출용 `exam-submissions` 같은 활성 Storage는 건드리지 않는다.
- 사용자는 새 시험분석 v2 저장 구조용 `supabase/20260703_exam_analysis_pipeline.sql`을 SQL editor에 적용했다고 알려줬다. 새 bucket은 `exam-analysis-pipeline-sources`다.

## 이번 삭제 기준

- 사이드바의 `시험분석` 탭과 `ExamAnalysisCenter`를 제거했다.
- 프론트의 `examAnalyses`, `examAnalysisFolders` 상태, 로드, 저장, 자동저장 UI를 제거했다.
- `/api/ai/exam-analysis`, `/api/ai/exam-question-*`, `/api/exam-analysis-sources` API를 제거했다.
- PDF 분석 의존성 `pdf-parse`, `pdfjs-dist`를 제거했다.
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
- PDF 원본 목록의 `파일 200KB` 같은 값은 업로드 파일 크기다. 아직 텍스트 추출량이 아니며, 다음 단계에서 `extracted_text`와 추출 상태를 별도로 채운다.
- 아직 PDF 텍스트 추출, 문항 수 판독, 1~N 행 생성, AI 행 채움은 붙이지 않았다.

## 다음 세션 우선순위

1. 기존 시험분석 기능을 복구하지 않는다.
2. 운영 Supabase에서 새 v2 테이블과 `exam-analysis-pipeline-sources` Storage bucket이 정상인지 확인한다.
3. 다음 구현은 PDF 텍스트/페이지 추출이다. 업로드된 source를 입력으로 받고, 추출 결과를 `exam_analysis_sources.extracted_text`, `page_text_ranges`, `page_image_manifest`, `extraction_status`에 저장한다.
4. 문항 수 판독과 AI 행 채움은 추출 단계 검증 후 별도 단계로 나눈다.

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
