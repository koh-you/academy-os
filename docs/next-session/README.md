# Next Session Handoff

이 폴더 하나만 다음 Codex 프로젝트 세션에 넘기면 됩니다. 새 세션은 `docs/next-session/` 폴더 안의 이 파일과 `2026-07-04-ai-collaboration-retrospective.md`를 먼저 읽고, 이어서 `AGENTS.md`, `git status --short`, `git log -1 --oneline`, `docs/current-worklog.md`를 확인한 뒤 이어가면 됩니다.

## 폴더 전체 읽기용 프롬프트

다음 세션에서 사용자가 한 줄만 붙여넣고 싶으면 아래 프롬프트를 사용합니다.

```text
E:\academy-os 작업을 이어가겠습니다.
다음 인수인계 폴더의 파일을 먼저 읽어주세요: docs/next-session/
특히 docs/next-session/README.md와 docs/next-session/2026-07-04-ai-collaboration-retrospective.md를 읽고, 이어서 AGENTS.md와 docs/current-worklog.md, git status, 최신 커밋을 확인해주세요.
그 후 지금 해야 할 다음 작업 후보와 검토 절차를 요약한 뒤, 바로 이어갈 수 있는 가장 작은 다음 작업을 제안해주세요.
```

## 시작 프롬프트

```text
E:\academy-os 프로젝트 작업을 이어가겠습니다. 먼저 docs/next-session/ 폴더 안의 README.md와 2026-07-04-ai-collaboration-retrospective.md를 읽고, 이어서 AGENTS.md, docs/current-worklog.md, git status와 최신 커밋을 확인해 주세요.

최근 작업에서 기존 시험분석 탭과 관련 AI/PDF 분석 기능, app_state 저장 데이터 경로를 제거했습니다. 이후 사용자는 시험분석을 v2 파이프라인으로 새로 만들기로 했습니다. 옛 코드를 복구하지 말고 `PDF -> 텍스트 후보 추출 -> Claude 원본 검증 -> 문항 수 판독 -> 선생님 확인 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 재요청` 순서로 이어가 주세요.

사용자는 `데이터 원천 중복/덧대기 전수조사`는 내일 하겠다고 했습니다. 지금 흐름에서는 시험분석 v2 파이프라인을 계속 이어가되, 필터/정규화/우선순위 보정을 여러 겹 덧대어 오류를 숨기지 마세요. 시험분석 테스트 데이터가 손상됐으면 삭제 후 처음부터 다시 올리는 방향을 우선 검토하고, 보정 로직이 2겹 이상 필요해 보이면 사용자에게 확인한 뒤 진행하세요.

작업을 완료할 때마다 최종 답변에는 반드시 `사람 검토 절차`를 포함해 주세요. 최신 커밋/검토 화면, 사용할 테스트 데이터, 사용자가 누를 순서, 기대 결과, 저장 원천, 실패 시 중단 조건, 다음 단계 통과 기준을 순서대로 적어야 합니다.

또한 AI 스스로 `전체 맥락`, `사용자 의도`, `변경 이유`, `저장 원천`, `사용자 편집본 보호`, `검토 가능성`, `중단 조건`에 답할 수 있어야 합니다. 기능/API/UI/저장 변경의 최종 답변에는 짧은 `AI 자기검토`를 포함하고, 이 질문에 답할 수 없으면 완료로 보지 말고 더 읽거나 사용자에게 확인하세요.

큰 개발방향: Academy OS의 AI/자동화 기능은 `AI 초안 -> 사람이 보기 쉬운 편집 화면 -> 사람 수정/검수 -> 검수본 원본화 -> 산출물/누적데이터 반영` 흐름으로 만드세요. AI가 먼저 데이터를 구조화하고, 화면은 그 데이터를 사람이 검수하기 쉽게 보여주며, 사용자가 수정/저장한 값이 이후 새 원본이 됩니다. 새 기능을 만들 때는 `ai_fields`, `local draft`, `teacher_fields/human_fields`, `final_fields` 같은 레이어를 먼저 정하고, 새로고침 후에도 사람 편집본이 AI 초안보다 우선해야 합니다.

중요: AI 초안, 템플릿 초안, DB/다른 필드 매핑값은 최초 seed 또는 명시적 재생성에서만 편집 상태로 들어오게 하세요. 사용자가 textarea/input을 한 번이라도 수정한 뒤에는 로컬 draft/저장된 사용자 편집본이 원본입니다. 렌더마다 파생값을 다시 계산해 `value`를 덮어쓰는 구조, 엔터/커서 위치를 깨뜨리는 구조, AI/템플릿 초안이 사용자 편집본을 새로고침 후 다시 덮는 구조는 금지입니다.

시험분석 탭, 시험분석 API, PDF 처리, Supabase v2 테이블, 분석 저장/삭제를 건드린 작업은 시험분석 탭 전용 검토 절차도 포함해야 합니다. 최소한 `학교 -> 학년 -> 고사 -> 분석` 카드 확인, PDF 업로드, 텍스트 후보 추출, 비용 허용 시 AI 원본 검증, Supabase/Storage 저장 확인, 새로고침 유지, 테스트 분석 삭제 확인, 중단 조건을 순서대로 안내하세요.

현재 새 v2 구조의 SQL, 백엔드 run/PDF 업로드/삭제 API, 첫 UI(학교/학년/고사/분석 카드형 목록, 기본정보 저장, PDF 업로드, 상태 확인), PDF 텍스트 후보 추출, Claude 우선 원본 검증, 문항 수 선생님 확인, 1~N 빈 행 생성, 문항 경계 탐지 1단계, AI 행 채움 1단계, 엑셀식 AI 결과 검수/선생님 확정 UI, 쎈 기준표 연결, 재확인 문항 AI 2차 수정, 저장된 검수본 기준 앱 안 최종 미리보기 1차까지 들어가 있습니다. 사용자는 실제 화면에서 AI 2차 검수 후 새로고침 저장 유지를 확인했습니다. 테스트 단계에서는 3문항만 AI 2차 검수 상태로 두고, 나머지 문항의 쎈 유형 반영은 전체 품질 통과로 보지 않습니다. 현재 분석 데이터는 테스트 데이터이므로 보존/보정 대상이 아니라, 필요하면 삭제 후 PDF 업로드부터 처음 다시 돌립니다. 다음 작은 단계는 최종 미리보기 실제 화면 검수, AI 주요문항 추천/선생님 선택 저장, 블로그/인스타/PPT/Canva 이미지 슬롯 설계입니다.
```

## 현재 기준

- 브랜치: `main`
- 최신 커밋: 다음 세션 시작 시 `git log -1 --oneline`으로 확인
- 마지막 확인 시 작업트리: 이번 작업 완료 후 clean이어야 함
- 검증:
  - `node --check api/routes/examAnalysisPipeline.js` 통과
  - `node --check api/server.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
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
- `POST /api/exam-analysis-runs/fill-question-rows`는 확정 행과 경계 정보를 기준으로 AI 초안을 채운다. 결과는 `exam_analysis_questions.unit_name`, `main_type`, `sub_types`, `difficulty`, `ai_fields`, `ai_provider`, `ai_model`, `ai_filled_at`에 저장한다. 선생님이 이미 수정/확정한 행은 덮어쓰지 않고, `teacher_fields`/`final_fields`는 건드리지 않는다.
- 화면에는 `AI 행 채움` 카드와 `AI 행 채움(과금)` 버튼이 있다. 완료 후 각 문항 카드에 단원, 유형, 난이도 초안이 보인다. 확실하지 않은 문항은 `missing`/재확인 대상으로 남는다.
- `POST /api/exam-analysis-runs/save-question-reviews`는 선생님이 수정/확정한 검수 결과를 저장한다. 저장값은 기존 `exam_analysis_questions.teacher_fields`, `final_fields`, `teacher_override`, `manual_edit_count`, `teacher_edited_at`, `confirmed_at`, `row_status`를 사용하므로 새 SQL edit은 필요 없다.
- 화면에는 `AI 결과 검수` 패널이 있다. 카드형이 아니라 엑셀식 테이블이며, 각 문항은 한 행으로 `#`, `확정`, `단원`, `쎈 주유형`, `쎈 보조유형`, `난이도`, `검수 메모`, `상태` 열에서 편집한다. `AI 2차 수정(과금)`, `모두 확정`, `검수 저장` 버튼과 `시험분석 · AI 2차 수정 중/완료`, `시험분석 · 검수 저장 중/완료/실패` 상태가 같은 패널 안에 표시된다.
- 선생님이 입력한 값은 이후 화면/새로고침의 기준이다. AI 초안이나 자동 매핑이 검수본을 다시 덮어쓰면 안 된다. 모든 문항이 확정되면 `workflow_status=completed`, 일부만 확정되면 `workflow_status=teacher_review`가 된다.
- 쎈 기준표는 `api/data/ssenTypeIndex.json`에 남아 있다. 쎈 6권 통합 유형 메타데이터 883개이며, 현재 운영 PDF처럼 `공통수학1`이 감지되면 공통수학1 유형 179개를 AI 행 채움/2차 수정 프롬프트의 실제 후보 목록으로 넣는다. AI는 `방정식`, `행렬` 같은 대분류가 아니라 후보의 `typeName`을 주유형/보조유형으로 써야 한다.
- `POST /api/exam-analysis-runs/refine-question-rows`는 미확정/재확인 문항만 PDF 원본을 다시 보고 2차 수정한다. 선생님이 수정/확정한 행은 덮어쓰지 않는다.
- 실제 화면 검증: 사용자가 AI 2차 검수를 실행했고, 새로고침 후에도 저장되는 것을 확인했다. 현재는 3문항만 AI 2차 검수 상태로 보존하고 다음 단계로 넘어간다. 나머지 문항의 쎈 유형 반영이 아직 대분류 수준인 문제는 기록만 남기며, 테스트 데이터이므로 필요하면 삭제 후 처음부터 다시 돌린다.
- `src/domains/exams/finalPreview.js`는 저장된 검수본 기준 최종 미리보기 모델이다. `final_fields`/`teacher_fields`에서 단원별 출제 비중, 난이도 분포, 주요 유형, 주요문항 후보, 상세 표를 계산한다. AI가 숫자를 다시 만들지 않는다.
- 화면 `최종 미리보기` 패널은 도넛 차트, 막대 차트, 문항 흐름, 주요문항 후보, 상세 표를 보여준다. 최종 미리보기는 읽기 전용 확인 화면이며 난이도 select나 저장 버튼을 두지 않는다. 난이도 수정과 저장은 위 `AI 결과 검수` 표에서만 진행한다. 앱 안 미리보기 1차는 수학 수식/그래프/시험지 원문을 재렌더링하지 않는다.
- 최종 미리보기 헤더는 `24문항 · 선생님 검수 저장본 기준`처럼 전체 문항 수만 보인다. `0/24` 같은 확정 카운트는 저장 여부로 오해되므로 이 화면에서는 숨기고, 확정 진행률은 `AI 결과 검수` 패널에서만 본다.
- 팔레트는 채도를 한 단계 더 높인 광고형 톤으로 조정했다. 단원 색상과 난이도 색상은 `src/domains/exams/finalPreview.js`의 `examAnalysisPreviewPalette`에 모여 있으며, 테스트 후 고정 색상코드로 확정한다.
- 공개 산출물 방향은 수정됐다. 블로그/인스타는 원문 이미지를 배제하지 않는다. 오히려 사용자가 제시한 네이버 블로그 예시처럼 대표 이미지, 시험지 페이지, 문항 캡처를 섞은 이미지 중심 구조를 후속 설계한다.
- 사용자가 제시한 예시 `https://blog.naver.com/skills_in_math4/224333485311`은 인사말, 한 줄 총평, 변별 문항별 출제 의도/변별 포인트/교재 유사 유형, 다수 이미지로 구성된 포스트다. v2 블로그 산출물은 이 구조를 통일 템플릿으로 가져간다.
- PPT는 내부 편집/이미지 배치/인쇄용 중간 매체로 유용할 수 있다. 인스타는 Canva 같은 템플릿 기반 카드뉴스를 우선 검증하고, 색상코드/범례/이미지 슬롯을 고정한 뒤 내용만 바꾸는 방향이다.
- HWP/HWPX 원문 복사/붙여넣기는 수식/그래프 보존이 불안정할 수 있다. HWPX 파싱, HWP/PDF 내보내기, 직접 이미지 슬롯, Canva/PPT 삽입 중 어느 경로가 좋은지 별도 검증한다.
- 내부 누적데이터 방향: 시험분석 run과 문항번호가 고정되면, 이후 학생 시험지/오답 제출은 `학생 + 분석 run + 문항번호`로 연결해 학생별 단원/주요 유형/난이도/오답 원인을 누적할 수 있다. 이 설계는 산출물과 분리해 후속 개발한다.
- 자동 초안 편집 UI의 기본 구조는 `seed -> local draft -> save -> persisted user/teacher fields`다. JSX 렌더 본문에서 `value={deriveDraft(...)}`처럼 파생값을 직접 연결해 사용자의 타이핑/엔터/커서 위치를 방해하지 않는다.
- 새 AI/자동화 기능의 기본 구조는 `AI 초안 -> local draft -> 사람 검수 저장 -> final/source-of-truth`다. AI는 숨겨진 최종값을 만드는 존재가 아니라 사람이 검수할 초안을 만든다. 저장 후 산출물, 차트, 누적데이터, 새로고침 화면은 사람 검수본을 우선 읽어야 한다.
- 실제 운영 PDF `[자운고] 2026 1-1 기말 공통수학1.pdf` 검증 결과: 텍스트 추출은 `5쪽`, `52,792 bytes`, 문항번호 후보 `1~24`가 잡혔지만 PDF 텍스트 레이어 잡음이 감지됐다. Claude `claude-sonnet-4-5` 원본 검증은 `readable=true`, `pageCount=5`, `subject=공통수학1`, `questionCountCandidate=24`, 누락 번호 없음, 빠른 정답 감지로 성공했다.
- 시험분석 v2 저장 경계에서 과목 `기하`는 빈 값으로 정리한다. 파일명/원본 검증이 `공통수학1`을 명확히 말하면 그 값을 사용한다.
- 아직 누락 검수/재요청은 붙이지 않았다. AI 초안은 `ai_fields`일 뿐이며, 선생님 검수 저장 후에는 `teacher_fields`/`final_fields`를 기준으로 다음 단계를 진행한다.

## 다음 세션 우선순위

1. 시험분석 다음 작업은 최종 미리보기 실제 화면 검수다. 선생님이 이미 수정/확정한 `teacher_fields`/`final_fields`는 덮어쓰지 않는다.
2. 그 다음은 AI 주요문항 추천과 선생님 선택 저장 구조다. 주요문항은 특이 문항/변별 문항 중심이며, `주유형 TOP` 같은 지표로 대체하지 않는다.
3. 블로그/인스타/PPT/Canva 산출물은 이미지 슬롯 중심으로 설계한다. 공개용 이미지 사용은 사용자가 직접 crop하거나, HWP/HWPX/PDF/Canva 경로를 검증한 뒤 정한다.
4. 쎈 유형 품질 개선은 후속 작업으로 분리한다. 2차 수정 후에도 대분류가 나오면 프롬프트를 덧대기보다 원인부터 확인한다. 쎈 후보 과목이 공통수학1로 잡혔는지, 프롬프트에 후보 목록이 들어갔는지, AI 응답이 후보 밖 이름을 냈는지 구분한다.
5. 현재 테스트 데이터는 3문항만 AI 2차 검수 상태로 두고 넘어간다. 나머지 쎈 유형 세밀도 부족을 지금 필터/정규화로 보정하지 않으며, 필요하면 분석 삭제 후 PDF 업로드부터 재실행한다.
6. 이전처럼 문항별 크롭/비전 분석으로 바로 가지 말고, 비용과 실패 지점을 작게 쪼개서 설계한다.
7. 데이터 원천 중복/덧대기 전수조사는 사용자가 다시 요청하면 진행한다. 후보를 `원천 데이터`, `파생 표시`, `일시 override`, `마이그레이션/삭제 대상`, `정상 fallback`으로 분류하고, 바로 고치기 전에 목록과 우선순위를 확정한다.
8. 필터/정규화/우선순위 보정을 여러 겹 덧대어 오류를 숨기지 않는다. 테스트 단계 데이터가 손상됐으면 삭제 후 재업로드/재분석을 우선 검토하고, 보정 로직이 2겹 이상 필요해 보이면 사용자에게 확인한다.
9. 작업 완료 답변에는 반드시 사람 검토 절차를 포함한다. 검토 절차는 최신 커밋, 데이터 준비, 화면 조작 순서, 기대 결과, 저장 원천, 실패/중단 조건, 통과 기준을 포함해야 한다.
10. 작업 완료 답변에는 짧은 AI 자기검토를 포함한다. 전체 맥락, 사용자 의도, 변경 이유, 저장 원천, 사용자 편집본 보호, 검토 가능성, 중단 조건에 답할 수 있어야 한다.
11. 시험분석을 건드린 작업은 시험분석 탭 전용 검토 절차를 추가로 포함한다.
12. 기존 시험분석 기능을 복구하지 않는다.
13. 운영 Supabase에서 새 v2 테이블과 `exam-analysis-pipeline-sources` Storage bucket이 정상인지 확인한다.

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/app/App.css`
- `src/domains/exams/finalPreview.js`
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
