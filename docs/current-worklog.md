# Academy OS Current Worklog

## 상시 최우선 운영 원칙

- 커밋/푸시 최우선: AI가 할 수 있는 변경 검수, 커밋, 푸시는 사용자가 따로 말하지 않아도 작업 완료 즉시 자동으로 진행한다. GitHub `main` 푸시로 Vercel/Render 자동 배포가 이어지는 흐름을 기본값으로 둔다.
- Supabase 저장 최우선: 새 기능이나 화면 수정 전후로 데이터가 Supabase 테이블 또는 `app_state`에 저장되는지 먼저 확인한다. 새로고침, 재로그인, 다른 기기 접속 후 사라질 수 있는 프론트-only/localStorage-only 운영 데이터가 있으면 기능 확장보다 저장 경로를 우선 보강한다.
- SQL 적용 기본값: DB 스키마 변경이 필요하면 `supabase/<file>.sql` 파일을 만들고, 적용이 필요한 SQL 파일명과 목적을 작업 결과에 명확히 남긴다. 운영 Supabase SQL edit 적용은 사용자가 직접 한다.
- SQL 자동화 철회: SQL edit 자동화는 사용하지 않는다. 이전에 로컬에 저장했던 SQL 자동 적용 자격은 제거했다. 다음 세션에서 SQL 자동화를 위해 DB URL, DB password, access token을 다시 묻지 않는다.
- 검수 기본값: 운영 흐름에 영향이 있으면 `npm run test:production`과 `npm run build`를 실행하고, 통과 후 커밋/푸시한다. 비밀값과 `.env`는 절대 커밋하지 않는다.
- 큰 개발방향: Academy OS의 AI/자동화 기능은 `AI 초안 -> 사람이 보기 쉬운 편집 화면 -> 사람 수정/검수 -> 검수본 원본화 -> 산출물/누적데이터 반영` 흐름을 기본값으로 둔다. AI는 숨겨진 최종값이 아니라 사람이 검수할 초안을 만들고, 사용자가 수정/저장한 값이 이후 새 원본이다.
- 자동 초안 편집 원칙: AI 초안, 템플릿 초안, DB/다른 필드 매핑값은 최초 seed 또는 명시적 재생성에서만 편집 상태로 들어와야 한다. 사용자가 입력을 시작한 뒤에는 로컬 draft/저장된 사용자 편집본이 원본이며, 렌더마다 파생값을 다시 계산해 textarea/input 값을 덮어쓰는 구조는 금지한다.
- 자동 초안 구현 기준: 새 편집 UI는 `seed -> local draft -> save -> persisted user/teacher fields` 흐름을 먼저 설계한다. 저장 성공 후에는 서버가 돌려준 사용자 편집본으로 draft를 갱신하고, 새로고침 후에도 사용자 편집본이 AI/템플릿 초안보다 우선해야 한다.
- AI 자기검토 기본값: 완료 답변에는 사용자가 검토할 절차뿐 아니라 AI가 스스로 답한 전체 맥락/사용자 의도/변경 이유/저장 원천/사용자 편집본 보호/중단 조건을 포함한다. 단계별 버튼 안내가 맞아도 이 질문에 답할 수 없으면 작업 완료로 보지 않는다.

## 현재 다음 작업 큐 - 2026-06-25 최종 정리

### 2026-07-04 P0. 시험분석 쎈 기준표 선택 gate와 대단원 차트 연결

- 상태: 완료
- 사용자 요청: 쎈 기준표의 `partName/unitName/typeName`을 각각 대단원/중단원/주유형 원천으로 쓰고, 선생님이 검수 표에서 범위 내 쎈 유형을 직접 골라 저장한 뒤 최종 미리보기 차트를 대단원/중단원 기준으로 바꾼다.
- 이번 작업 결과: `GET /api/exam-analysis-ssen-types`를 추가했다. 원천은 기존 `api/data/ssenTypeIndex.json` 하나이며, 과목/범위 문자열을 받아 범위에 명시적으로 매칭된 후보가 있으면 그 후보를, 없으면 `scope_not_matched` 상태와 함께 과목 전체 후보를 내려준다.
- 범위 매칭 보강: 범위 문자열은 쉼표/슬래시 단위 조각으로 먼저 나눈다. `~`/`부터`/`까지` 범위 확장은 같은 조각 안에서만 적용하고, 범위 끝점은 `typeName`보다 `partName/unitName`을 우선한다. 확인 샘플: `행렬 / 경우의 수`는 공통수학1 09·10단원, `~이차방정식, 경우의 수`는 01~04단원과 09단원, `교과서 ~p.73, p.93,94 (1~3, 5~9번), 이차방정식과 이차함수`는 05단원으로 좁혀진다.
- 검수 UI: `AI 결과 검수` 표에 `쎈 기준표` gate를 추가했다. 단원 select는 `partName · unitName` 기준이고, 주유형/보조유형은 해당 단원 안의 `typeName` 후보에서 선택한다. 주유형 선택 시 `mainTypeCode`, `partName`, `unitNo`, `unitName`, `typeName`이 local draft에 함께 들어간다.
- 저장 원천: `POST /api/exam-analysis-runs/save-question-reviews`가 `mainTypeCode`, `subTypeCodes`, `ssenMeta`를 받아 기존 `exam_analysis_questions.teacher_fields`/`final_fields` JSON에 저장한다. 새 SQL edit은 필요 없다.
- 최종 미리보기: 저장본의 `ssenMeta.mainType.partName`을 대단원 원천으로 사용한다. `단원별 출제 비중`은 `대단원별 출제 비중 + 중단원 breakdown`으로 바꿨고, 너무 세분화되던 `주요 유형` 차트는 `대단원별 난이도`로 대체했다.
- 검증: `node --check api/server.js`, `node --check api/routes/examAnalysisPipeline.js`, `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check` 통과. `npm run test:production` 통과(total 235, failed 0). `npm run build` 통과. Vite 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 검수 표 2차 수정 대상 표시 보강

- 상태: 완료
- 사용자 요청: `AI 결과 검수` 표의 `쎈 주유형/쎈 보조유형` 표기를 `주유형/보조유형`으로 줄이고, 확정 체크가 되어 있어도 AI 2차 수정 대상인 행은 초록색 확정 행처럼 보이지 않게 한다. 최종 미리보기의 단원/유형 차트는 원천 데이터를 먼저 확인한다.
- 이번 작업 결과: 검수 표 헤더와 주유형 placeholder에서 `쎈` 접두어를 제거했다. `AI 2차 수정` 버튼의 대상 계산과 같은 기준을 쓰는 `isExamAnalysisQuestionAiReviewTarget`/`isExamAnalysisQuestionRefineTarget` 판정을 분리했고, `needsReview`가 남은 행은 확정 체크가 있어도 `2차 수정 필요` 상태와 주황색 강조가 먼저 보인다.
- 저장 원천: 저장 구조는 바꾸지 않았다. AI 초안은 기존 `exam_analysis_questions.ai_fields`, 선생님 저장본은 기존 `teacher_fields`/`final_fields`가 원본이다. 새 SQL edit은 필요 없다.
- 단원 원천 확인: `api/data/ssenTypeIndex.json`에는 `partName`(대단원에 가까운 묶음), `unitNo`, `unitName`(쎈 중단원), `typeName`(주유형 후보)이 있다. 현재 문항 row에는 `unit_name/main_type/sub_types`와 `ai_fields.mainTypeCode/subTypeCodes`가 저장되며, 대단원/중단원 메타를 확정 저장본으로 쓰려면 코드 메타를 teacher/final source에 연결하는 별도 gate가 필요하다.
- 차트 판단: 현재 `단원별 출제 비중`은 검수 저장본의 `unitName` 기준이라 쎈 중단원 집계에 가깝다. `주요 유형` 차트는 너무 세분화될 수 있으므로 다음 단계에서 대단원/중단원/난이도/주요문항 중 무엇을 산출물 지표로 쓸지 정한 뒤 바꾼다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check` 통과. `npm run test:production` 통과(total 233, failed 0). `npm run build` 통과. Vite 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 재테스트 전 업로드/검수 UX 정리

- 상태: 완료
- 사용자 요청: 블로그/인스타/PPT/Canva 이미지 슬롯 설계 전에 테스트 PDF를 처음부터 다시 돌릴 예정이므로, 작동하지 않는 추가 버튼 제거, PDF 드래그 앤 드롭, 카드 크기 축소, `(과금)` 문구 제거, AI 행 채움 직후 검수 표 반영 문제를 정리한다. 문항별 crop 팝업은 구현 전 가능 여부만 확인한다.
- 이번 작업 결과: 학교/분석 컬럼의 `추가` 버튼을 제거했다. 분석은 `PDF 업로드` 또는 드래그 앤 드롭 업로드로 현재 선택한 학교/학년/고사 기준 run이 생성되는 흐름으로 정리했다.
- 업로드 UX: PDF 업로드 패널에 드롭존을 추가했다. PDF가 아닌 파일을 드롭하면 같은 작업 패널 안에 실패 상태가 표시된다.
- 화면 밀도: 시험분석 보드/컬럼/카드/기본정보 입력 패딩과 높이를 줄여 테스트 화면에서 카드가 더 작게 보이도록 조정했다.
- 버튼 문구: AI 실행 버튼의 괄호 과금 표현을 제거했다. AI가 들어간 버튼은 여전히 토큰 사용 가능성이 있는 수동 실행 버튼이다.
- 검수 반영: 빈 1~N 행에서 만들어진 `reviewDrafts`가 AI 행 채움 이후에도 사용자 편집본처럼 보존되던 원인을 수정했다. 이전 seed 그대로인 draft만 새 원본 row로 갱신하고, 사용자가 실제로 수정한 local draft는 보존한다.
- 문항 crop 확인: 현재 저장된 `source_evidence.boundary`는 pageStart/pageEnd와 positionHint 중심이라 정확한 bounding box crop에는 부족하다. 실제 crop 팝업을 만들려면 PDF 페이지 렌더 이미지와 문항별 좌표를 별도 저장하는 gate가 먼저 필요하다.
- SQL 주의: 기존 저장 구조와 JSON 필드만 사용하므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check` 통과. `npm run test:production` 통과(total 232, failed 0). `npm run build` 통과. Vite 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 주요문항 선생님 체크 저장

- 상태: 완료
- 사용자 요청: AI 추천문항은 받지 않고, `AI 결과 검수` 표에서 선생님이 직접 주요문항을 체크할 수 있게 한다.
- 이번 작업 결과: `AI 결과 검수` 표의 `확정` 옆에 `주요` 체크 열을 추가했다. 체크값은 편집 중 `reviewDrafts` local draft에 머물다가 `검수 저장`을 누르면 기존 `POST /api/exam-analysis-runs/save-question-reviews` payload로 함께 저장된다.
- 저장 원천: 새 SQL edit 없이 기존 `exam_analysis_questions.teacher_fields`/`final_fields`에 `isImportantQuestion`을 저장한다. 선생님 체크값이 원본이며, AI 추천/자동 후보/난이도 기반 추정값이 이를 덮어쓰지 않는다.
- 최종 미리보기: 기존 난이도/메모 기반 자동 `주요문항 후보` 계산을 제거하고, 선생님이 체크한 문항만 `주요문항 · 선생님 체크 저장본`으로 표시한다. 상세 표에도 읽기 전용 `주요` 열을 추가해 새로고침 후 유지 여부를 확인할 수 있게 했다.
- 테스트 보강: 프로덕션 시나리오 테스트의 최종 미리보기 기대 문구를 `주요문항 후보`/`AI 추천 다음 단계`에서 선생님 체크 저장본 기준으로 갱신했다.
- 사람 검수: 사용자가 실제 화면에서 주요문항을 확정하고, 새로고침 후에도 체크 저장값이 유지되는 것을 확인했다.
- SQL 주의: 기존 JSON 필드 저장만 사용하므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check` 통과. `npm run test:production` 통과(total 232, failed 0). `npm run build` 통과. Vite 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 효과가 컸던 작업 방식을 프로젝트 필수 지침으로 반영

- 상태: 완료
- 사용자 요청: 오늘 효과가 컸던 작업 방식을 회고에만 두지 말고, 프로젝트 지침 목록의 필수 요소로 반영한다.
- 이번 작업 결과: `AGENTS.md`에 `Project Essential Practices - Required` 섹션을 추가했다. 테스트 단계 기능은 계속 보정하기보다 삭제 후 재생성/마이그레이션/재구성을 검토하는 기준, 원본 row/파생 표시/AI 초안/local draft/사용자 저장본/최종 산출물 구분, 작은 검증 gate, 사람 확정 구조 우선, 저장 상태 표시, 운영 번들 확인, 과금/삭제 자동 실행 금지, 성공한 것과 미룬 것 구분, 효과적이었던 사용자 프롬프트 대응 방식을 필수 운영 패턴으로 올렸다.
- 적용 범위: 시험분석뿐 아니라 AI 초안 기반 편집, PDF/AI/저장 파이프라인, 블로그/인스타/PPT/Canva 산출물, 학생 누적 데이터 입력 화면에도 공통 적용한다.
- 검증: 문서 변경만 있으므로 `git diff --check`로 whitespace/patch 오류를 확인한다. 앱 코드, API, SQL 변경은 없다.

### 2026-07-04 P0. 다음 세션 인수인계와 AI 협업 회고

- 상태: 완료
- 사용자 요청: 오늘 작업한 내용을 요약하고, 다음 세션에 넘길 프롬프트를 제공한다. 특히 오늘 문제 해결 과정에서 병목을 어떻게 해결했는지, AI와 어떤 대화 방식이 효율적이었는지 AI 관점의 별도 글로 남긴다.
- 이번 작업 결과: `docs/next-session/2026-07-04-ai-collaboration-retrospective.md`를 추가했다. 오늘 시험분석 v2 재구성 요약, 삭제 후 재구성 판단 기준, PDF/문항 수/사용자 편집본/저장 상태/운영 반영 병목과 해결 방식, AI 입장에서 효율적이었던 프롬프트, 다음 작업 후보, 다음 세션 시작 프롬프트를 정리했다.
- 인수인계 보강: `docs/next-session/README.md` 상단에 `docs/next-session/` 폴더 전체를 먼저 읽게 하는 짧은 프롬프트를 추가했다. 다음 세션은 README와 회고 파일을 먼저 읽고, 이어서 `AGENTS.md`, `docs/current-worklog.md`, git status, 최신 커밋을 확인한다.
- 핵심 교훈: 시험분석처럼 아직 테스트 단계인 기능은 3일 이상 꼬인 구조에 필터/정규화/우선순위 보정을 덧대기보다, 원천 데이터 삭제/재업로드/재구성을 검토하는 편이 더 빠르고 안전할 수 있다. 단, 운영 데이터가 섞이면 삭제 전 사용자 확인과 백업 기준이 먼저다.
- 다음 우선순위: 시험분석 v2의 `주요문항 추천/선생님 선택 저장`이다. 주요문항은 특이 문항/변별 문항/설명 가치가 큰 문항이며, AI 추천은 초안이고 선생님 선택값이 원본이다.
- 검증: 문서 변경만 있으므로 `git diff --check`로 whitespace/patch 오류를 확인한다. 앱 코드, API, SQL 변경은 없다.

### 2026-07-04 P0. 최종 미리보기 운영 반영 확인과 팔레트 재상향

- 상태: 완료
- 사용자 요청: 색이 밝아진 것 같지 않고, 최종 미리보기의 난이도 수정 버튼도 여전히 보인다.
- 확인: 로컬 소스와 로컬 dev 서버에는 `난이도 수정 저장` 버튼이 이미 제거되어 있었다. 운영 Vercel URL을 직접 확인하니 최신 `6141f05`가 아니라 직전 번들 일부가 내려오고 있어 버튼이 계속 보이는 상태였다.
- 이번 작업 결과: 새 배포를 트리거하기 위해 팔레트를 한 번 더 밝고 선명하게 조정했다. 기존 진한 블루/그린보다 더 밝은 광고형 블루, 민트, 오렌지, 핑크, 바이올렛, 라임, 옐로, 시안 계열로 바꿨다.
- 검증: 앱 코드에서 `난이도 수정 저장`, `시험분석 · 난이도 저장 완료`, `examAnalysisPreviewDifficultySelect`가 사라졌는지 확인했다. `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 최종 미리보기 난이도 수정 제거

- 상태: 완료
- 사용자 요청: 난이도 수정은 위의 `AI 결과 검수` 표에서 하며, 굳이 최종 미리보기 탭에서 하지 않아도 된다.
- 이번 작업 결과: `최종 미리보기` 패널의 난이도 select와 `난이도 수정 저장` 버튼을 제거했다. 상세표의 난이도 칸은 읽기 전용 텍스트로 표시한다.
- 역할 분리: 문항별 단원/쎈 유형/난이도 수정과 저장은 `AI 결과 검수` 표에서만 한다. 최종 미리보기는 저장된 검수본과 현재 draft를 차트/표로 확인하는 읽기 전용 화면이다.
- 저장 UX: `시험분석 · 수정됨 · 저장 필요`, `시험분석 · 검수 저장 중/완료` 배지는 위 `AI 결과 검수` 패널에서만 보인다. 최종 미리보기에는 별도 저장 버튼이나 저장 상태를 두지 않는다.
- 검증: `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 최종 미리보기 채도 상향과 확정 카운트 숨김

- 상태: 완료
- 사용자 요청: 최종 미리보기 팔레트 채도를 한 단계 더 높여 더 밝게 하고, 헤더의 `0/24`가 무엇인지 확인한다. 난이도 저장은 실제 화면에서 저장됨을 확인했다.
- 확인: `0/24`는 `확정 체크된 문항 수 / 전체 문항 수`였다. 하지만 최종 미리보기 헤더와 난이도 저장 완료 배지에 노출되면 저장 여부처럼 보이므로 혼동이 크다.
- 이번 작업 결과: 최종 미리보기 헤더를 `24문항 · 선생님 검수 저장본 기준`처럼 전체 문항 수만 보이게 바꿨다. 확정 진행률은 `AI 결과 검수` 패널 안에서만 유지한다.
- 저장 UX: 최종 미리보기의 `난이도 수정 저장`은 `시험분석 · 난이도 저장 중` -> `시험분석 · 난이도 저장 완료`로 표시한다. 검수 저장 버튼은 기존처럼 확정 수를 보여준다.
- 팔레트: 단원/난이도 색상을 한 단계 더 선명한 광고형 색으로 올렸다. 색상은 `src/domains/exams/finalPreview.js`의 `examAnalysisPreviewPalette`에 고정했다.
- 검증: `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 최종 미리보기 화사한 팔레트와 난이도 수동 저장 상태

- 상태: 완료
- 사용자 요청: 최종 미리보기 색상이 마음에 들지 않아 더 화사한 광고 톤으로 바꾸고, 난이도 수정 시 차트는 바뀌지만 새로고침 후 저장되지 않는 문제를 고친다. 저장은 실시간 자동저장이 아니라 저장 버튼 또는 `저장 중/저장 완료` 같은 표현으로 처리한다.
- 이번 작업 결과: `src/domains/exams/finalPreview.js`의 단원/난이도 팔레트를 밝은 브랜드형 색상으로 다시 조정했다. 단원은 블루, 틸, 오렌지, 핑크, 바이올렛, 그린, 옐로, 시안 계열을 쓰고, 난이도는 하늘색/초록/노랑/오렌지/빨강으로 구분한다.
- 화면 톤: 최종 미리보기 카드, 범례, 테이블, 주요문항 후보 배경을 더 밝은 광고형 톤으로 조정했다.
- 저장 UX: 난이도 select를 바꾸면 차트에는 즉시 반영되지만 서버에는 실시간 저장하지 않는다. 같은 패널에 `시험분석 · 수정됨 · 저장 필요` 배지를 띄우고, `난이도 수정 저장` 버튼을 누르면 `시험분석 · 검수 저장 중` -> `시험분석 · 검수 저장 완료`로 바뀐다.
- 저장 보강: 최종 미리보기 난이도 수정 payload가 기존 `final_fields`/`teacher_fields` 값을 seed로 삼도록 보강해 단원/유형/확정 상태를 잃지 않게 했다. 저장 원천은 기존 `exam_analysis_questions.teacher_fields`/`final_fields`와 `save-question-reviews` API다. 새 SQL edit은 없다.
- 검증: `node --check src/domains/exams/finalPreview.js`, `node --check api/routes/examAnalysisPipeline.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. AI 초안 -> 사람 검수 -> 검수본 원본화 개발 방향

- 상태: 완료
- 사용자 요청: AI가 먼저 데이터를 만들고 가시적으로 보기 쉽게 만든 뒤, 사람이 데이터를 수정하면 기존 초안이 수정되어 그 수정본이 원본이 되는 개발 방식을 큰 개발방향으로 작업지침에 남긴다.
- 이번 작업 결과: `AGENTS.md`에 `Core Development Direction - AI Draft To Human Source` 섹션을 추가했다. 시험분석, 수업일지 코멘트, 알림톡/문자, 블로그/인스타/PPT/Canva 산출물, 학생 누적 데이터 입력 화면에 공통 적용한다.
- 핵심 구조: 새 AI/자동화 기능은 `ai_fields` 같은 AI 초안, 편집 중 `localDraft`, 저장된 `teacher_fields`/`human_fields`, 확정된 `final_fields` 레이어를 먼저 설계한다. 사용자가 수정/저장한 뒤에는 `final_fields > teacher_fields/human_fields > ai_fields > 기본값` 순서로 읽는다.
- 사용자 편집본 보호: 편집 중에는 `localDraft`가 우선이며, 렌더 중 파생값 재계산으로 input/textarea를 덮어쓰면 안 된다. AI 재생성/자동 매핑/템플릿 재적용은 빈 값, 명시적 재생성/초기화, 사용자 동의가 있을 때만 허용한다.
- 피드백 원칙: 버튼, 자동저장, AI 생성처럼 실패 가능한 동작은 현재 작업 영역 안에 저장/생성 진행, 완료, 실패 상태를 표시한다.
- 인수인계 반영: `docs/next-session/README.md` 시작 프롬프트와 새 v2 구현 기준에도 같은 개발 방향을 추가했다.
- 검증: 문서 변경만 있었으므로 `git diff --check`로 whitespace/patch 오류를 확인했다. 앱 코드, API, SQL 변경은 없다.

### 2026-07-04 P0. 시험분석 최종 미리보기 팔레트와 난이도 수정

- 상태: 완료
- 사용자 요청: 최종 미리보기 팔레트 색상이 더 전문가적인 느낌이어야 한다. 문항 난이도는 AI가 잘 못 잡는 것 같으므로 선생님이 수정할 수 있어야 한다. 이전 단계에서 난이도 수정이 가능했는지도 확인이 필요했다.
- 확인: 이전 `AI 결과 검수` 표에도 난이도 select가 있어 수정 가능했다. 다만 최종 미리보기 화면에서는 읽기 전용으로 보여 수정 경로가 잘 보이지 않았다.
- 이번 작업 결과: `src/domains/exams/finalPreview.js`의 단원/난이도 팔레트를 더 차분한 전문가 톤으로 바꿨다. 원색 계열을 줄이고 네이비, 틸, 옥커, 버건디, 플럼, 올리브 계열로 조정했다.
- 화면: 최종 미리보기 상세표의 난이도 칸을 select로 바꾸고, 패널 상단에 `난이도 수정 저장` 버튼을 추가했다. select 변경은 즉시 미리보기 차트에 반영되고, 저장 버튼은 기존 `save-question-reviews` 검수 저장 API를 사용한다.
- 저장 원칙: 새 SQL edit 없음. 난이도 수정은 별도 저장소를 만들지 않고 기존 `teacher_fields`/`final_fields` 검수본 저장 경로를 사용한다. 사용자 편집본이 AI 초안보다 우선한다.
- 검증: `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0. 시험분석 v2 최종 미리보기 1차와 산출물 방향 정리

- 상태: 완료
- 사용자 요청: 최종 미리보기 데이터 모델과 앱 화면 렌더링부터 만들되, 유형 표현은 `주요 쎈 유형 수`나 `주유형 TOP`이 아니라 `주요 유형`으로 둔다. 이 시험지에서 특이하거나 변별력을 준 `주요문항`은 AI 추천을 받고 선생님이 고르는 방향이어야 한다. 내부 누적데이터, 네이버 블로그형 글, 인스타/Canva 카드뉴스 방향도 다음 작업에 이어갈 수 있게 정리한다.
- 이번 작업 결과: `src/domains/exams/finalPreview.js`를 추가했다. 저장된 `exam_analysis_questions`의 `final_fields`/`teacher_fields`를 원천으로 단원별 출제 비중, 난이도 분포, 주요 유형, 주요문항 후보, 문항 상세표 모델을 만든다. AI가 숫자를 다시 만들지 않는다.
- 화면: 시험분석 v2 작업 화면에 `최종 미리보기` 패널을 추가했다. 단원별 도넛, 난이도 막대, 주요 유형 막대, 난이도 색상 기반 문항 흐름, 주요문항 후보, 상세 표를 읽기 전용으로 보여준다.
- 원문/이미지 원칙: 앱 안 최종 미리보기 1차는 시험지 원문 수식/그래프를 재렌더링하지 않고 분석 결과를 시각화한다. 단, 블로그/인스타 공개 산출물은 이미지가 핵심이므로 선별 원문 이미지 슬롯을 전제로 후속 설계한다. 사용자가 PDF 원본 crop이 필요하면 직접 할 수 있다고 확인했다.
- 블로그 예시 확인: `https://blog.naver.com/skills_in_math4/224333485311`에 접근해 구조를 확인했다. 인사말, 한 줄 총평, 변별 문항별 출제 의도/변별 포인트/교재 유사 유형, 대표 이미지와 시험지/문항 이미지가 섞인 이미지 중심 포스트다. v2 블로그 산출물은 이 구조를 통일 템플릿으로 가져가되 더 잘 만드는 방향이다.
- PPT/Canva 판단: PPT는 내부 편집, 이미지 배치, 인쇄용 중간 매체로 유용할 수 있다. 인스타 공개용은 Canva 같은 템플릿 기반 카드뉴스를 테스트하고 색상코드/범례/이미지 슬롯을 확정한 뒤 내용만 바꿔 반복 제작하는 방향을 문서화했다.
- 내부 누적데이터: 시험분석 run과 문항번호가 고정되면, 이후 학생 시험지/오답 제출은 `학생 + 분석 run + 문항번호`로 연결해 학생별 단원/주요 유형/난이도/오답 원인을 누적할 수 있다. 이 설계는 산출물과 분리해 후속 개발한다.
- 저장 주의: 새 SQL edit 없음. 이번 단계는 저장된 검수본을 읽는 프론트 미리보기와 문서 정리다. 주요문항 AI 추천/선생님 선택 저장은 아직 구현하지 않았다.
- 검증: `node --check src/domains/exams/finalPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 검수 테이블, 쎈 기준표 연결, AI 2차 수정

- 상태: 완료
- 사용자 요청: 문항 검수 화면은 카드가 아니라 엑셀처럼 한 문항당 한 행으로 보여야 한다. 주유형/보조유형은 쎈 유형 기준이어야 하며, 수정이 필요한 문항은 AI가 한 번 더 자세히 보거나 풀어보는 방식으로 2차 수정할 수 있어야 한다.
- 쎈 기준표 확인: `api/data/ssenTypeIndex.json`이 남아 있다. 이 파일은 쎈 6권 통합 유형 메타데이터 883개를 담고 있으며, 현재 운영 PDF처럼 `공통수학1`이 감지되면 공통수학1 유형 179개를 AI 프롬프트의 실제 후보 목록으로 넣는다.
- 백엔드: `POST /api/exam-analysis-runs/refine-question-rows`를 추가했다. 대상 문항 번호만 PDF 원본을 다시 읽고, 필요하면 짧게 풀이 방향을 따져 쎈 기준 유형을 더 정확히 고친다. 단, 문제 본문/정답/상세 풀이는 저장하지 않는다.
- 프롬프트 보강: v2 AI 행 채움/2차 수정 프롬프트에 실제 쎈 유형 후보를 넣고, `main_type`/`sub_types`는 후보의 `typeName`을 그대로 쓰게 했다. `방정식`, `행렬`, `부등식` 같은 대분류만 쓰면 안 된다고 명시했다. 선택한 `typeCode`는 `ai_fields` 안에 메타데이터로 저장한다.
- 사용자 편집본 보호: AI 2차 수정은 미확정/재확인 문항을 대상으로 하며, 이미 선생님이 수정/확정한 `teacher_override`, `teacher_fields`, `final_fields`는 덮어쓰지 않는다.
- 화면: `AI 결과 검수`를 카드형 그리드에서 엑셀식 테이블로 바꿨다. 각 문항은 한 행이며 `#`, `확정`, `단원`, `쎈 주유형`, `쎈 보조유형`, `난이도`, `검수 메모`, `상태` 열로 편집한다. 같은 패널 안에 `AI 2차 수정(과금)`, `모두 확정`, `검수 저장` 버튼과 저장/수정 상태가 보인다.
- 사용자 검증: 실제 화면에서 AI 2차 검수를 실행했고, 새로고침 후에도 저장값이 유지되는 것을 확인했다. 테스트 단계에서는 3문항만 AI 2차 검수 상태로 두고 다음 단계로 넘어간다.
- 테스트 데이터 주의: 3문항을 제외한 나머지 문항의 쎈 유형 반영은 아직 전체 품질 통과로 보지 않는다. 다만 현재는 테스트 중이므로 이 데이터를 보존/보정 대상으로 붙잡지 않고, 필요하면 분석을 삭제한 뒤 PDF 업로드부터 처음 다시 돌린다.
- 저장 주의: 새 SQL edit은 필요 없다. 기존 `exam_analysis_questions`의 top-level 유형 필드와 `ai_fields`, `teacher_fields`, `final_fields`, run의 `audit_summary.rowRefine`을 사용한다.
- 검증: `node --check api/server.js`, `node --check api/routes/examAnalysisPipeline.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. AI 자기검토 질문과 맥락 중심 검토 지침

- 상태: 완료
- 사용자 요청: 작업마다 검토 가능한 절차를 남기되, AI 스스로도 그 질문에 답할 수 있어야 한다. 단계별 절차도 중요하지만 개발하려는 전체 맥락과 의도가 가장 중요하다.
- 작업지침 반영: `AGENTS.md` Workflow와 `AI Self-Check - Required` 섹션에 필수 자기검토 질문을 추가했다. AI는 전체 맥락, 사용자 의도, 변경 이유, 저장 원천, 사용자 편집본 보호, 검토 가능성, 중단 조건에 답할 수 있어야 한다.
- 운영 원칙: 기능/API/UI/저장 변경의 최종 답변에는 `사람 검토 절차`와 함께 짧은 `AI 자기검토`를 포함한다. 답할 수 없으면 더 읽거나 검증하고, 불명확하면 사용자에게 확인한다.

### 2026-07-03 P0. 시험분석 v2 AI 결과 검수/선생님 확정

- 상태: 완료
- 사용자 확인: `AI 행 채움` 결과가 24/24개로 보이고, 새로고침 후에도 저장된 행 초안이 유지되는 것을 화면에서 확인했다.
- 이번 작업 범위: AI가 채운 `단원`, `쎈 주유형`, `보조유형`, `난이도` 초안을 선생님이 행별로 수정하고 확정할 수 있는 `AI 결과 검수` 단계를 추가했다.
- 백엔드: `POST /api/exam-analysis-runs/save-question-reviews`를 추가했다. 저장값은 기존 `exam_analysis_questions.teacher_fields`, `final_fields`, `teacher_override`, `manual_edit_count`, `teacher_edited_at`, `confirmed_at`, `row_status`를 사용한다. 새 SQL edit은 필요 없다.
- 저장 원칙: 선생님이 입력한 값은 top-level `unit_name`, `main_type`, `sub_types`, `difficulty`와 `teacher_fields`에 저장되어 이후 화면/새로고침의 기준이 된다. 확정 체크된 행은 `final_fields`와 `row_status=confirmed`로 저장하고, 미확정 행은 `row_status=teacher_edited`로 남긴다.
- 화면: `AI 행 채움` 아래에 `AI 결과 검수` 패널을 추가했다. 각 문항 카드에서 단원/주유형/보조유형/난이도/검수 메모를 수정하고 `확정` 체크를 할 수 있다. `모두 확정`과 `검수 저장` 버튼을 제공하며, 같은 패널 안에 `시험분석 · 검수 저장 중/완료/실패` 상태가 표시된다.
- 진행 상태: 모든 문항이 확정되면 run의 `workflow_status=completed`, 일부만 확정되면 `workflow_status=teacher_review`로 저장한다. `audit_summary.teacherReview`에는 확정 수, 미확정 번호, 저장 시각을 남긴다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 AI 행 채움 1단계

- 상태: 완료
- 사용자 확인: 문항 경계 탐지가 24/24로 완료되어 다음 파이프라인 단계로 진행했다.
- 이번 작업 범위: 확정된 문항 행과 문항 경계 정보를 기준으로 AI가 `단원`, `쎈 주유형/대표 유형`, `보조유형`, `난이도`, 짧은 판별 근거를 채우는 1단계를 추가했다. 문제 본문 대량 저장, 정답 추론, 상세 풀이 저장은 하지 않는다.
- 백엔드: `POST /api/exam-analysis-runs/fill-question-rows`를 추가했다. Anthropic API key가 있으면 Claude PDF `document` 입력을 우선 사용하고, 없으면 OpenAI PDF 입력을 예비 경로로 둔다. 결과는 각 `exam_analysis_questions` 행의 `unit_name`, `main_type`, `sub_types`, `difficulty`, `ai_fields`, `ai_provider`, `ai_model`, `ai_filled_at`에 저장한다.
- 보호 장치: 선생님이 이미 수정/확정한 행은 덮어쓰지 않는다. AI 행 채움은 `ai_fields` 초안만 만들고 `teacher_fields`/`final_fields`는 건드리지 않는다. 확실하지 않은 문항은 `row_status=missing`, `audit_summary.rowFill.needsReviewNumbers`로 넘긴다.
- 화면: 시험분석 작업 패널에 `AI 행 채움` 카드를 추가했다. `AI 행 채움(과금)` 버튼은 수동 실행이며, `시험분석 · AI 행 채움 중/완료/실패` 상태를 표시한다. 완료 후 각 문항 카드에 단원, 유형, 난이도 초안이 보인다.
- 저장 주의: 새 SQL edit은 필요 없다. 기존 `exam_analysis_questions`와 `exam_analysis_runs.audit_summary`를 사용한다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 문항 경계 탐지 1단계

- 상태: 완료
- 사용자 확인: 문항 수 24문항 확정과 1~24행 생성은 화면에서 확인됐다. 우하단 저장 이벤트 시간 표시는 원문 ISO 문자열을 자르는 방식이라 어색하게 보여 한국 시간 짧은 라벨로 보정했다.
- 이번 작업 범위: 확정된 1~N 행에 대해 PDF 원본에서 각 문항의 시작 페이지, 끝 페이지, 대략 위치만 찾는 `문항 경계 탐지` 단계를 추가했다. 문제 풀이, 정답 추론, 단원/유형 분류, 본문 대량 저장은 하지 않는다.
- 백엔드: `POST /api/exam-analysis-runs/detect-question-boundaries`를 추가했다. Anthropic API key가 있으면 Claude PDF `document` 입력을 우선 사용하고, 없으면 OpenAI PDF 입력을 예비 경로로 둔다. 결과는 각 `exam_analysis_questions` 행의 `source_page`, `source_evidence.boundary`에 저장하고, run의 `audit_summary.boundaryDetection`에 전체 탐지 요약을 저장한다.
- 화면: 시험분석 작업 패널에 `문항 경계 탐지` 카드를 추가했다. `경계 탐지(과금)` 버튼으로 수동 실행하며, `시험분석 · 문항 경계 탐지 중/완료/실패` 상태를 표시한다. 완료 후 각 문항 번호 카드에 `1p` 또는 `2~3p` 같은 페이지 범위와 위치 힌트가 보인다.
- 저장 원칙: 새 SQL edit은 필요 없다. 기존 `exam_analysis_questions.source_page`, `source_evidence`, `exam_analysis_runs.audit_summary`를 사용한다. `workflow_status` 체크 제약을 바꾸지 않기 위해 DB 상태값은 `rows_created`를 유지하고, 화면 단계만 `audit_summary.boundaryDetection` 존재 여부로 `문항 경계`를 켠다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 문항 수 확정과 1~N 행 생성

- 상태: 완료
- 사용자 흐름: PDF 업로드, 텍스트 후보 추출, Claude 원본 검증까지 끝난 화면에서 다음 단계가 필요했다. 이번 작업은 `문항 수 판독 -> 선생님 확인 -> 1~N 행 고정` 중 선생님 확인과 행 생성을 붙였다.
- 이번 작업 결과: `POST /api/exam-analysis-runs/confirm-question-count`를 추가했다. API는 선생님 확정 문항 수를 받아 Supabase RPC `ensure_exam_analysis_question_rows`를 호출하고, `confirmed_question_count`, `question_count_status=teacher_confirmed`, `workflow_status=rows_created`, `rows_locked=true`, `detected_question_evidence`, `missing_question_numbers`를 저장한다.
- 행 생성 기준: 확정 N보다 큰 기존 문항 행이 비어 있으면 정리하고, 이미 AI/선생님 내용이 들어간 행을 줄이려 하면 삭제 후 재생성을 요구하는 오류를 낸다. 테스트 단계 데이터가 꼬였을 때 필터를 덧대지 않고 원천 분석 삭제/재생성을 우선하게 하기 위한 보호장치다.
- 화면 변경: 시험분석 작업 패널에 `문항 수 확인` 카드를 추가했다. AI 원본 검증 또는 텍스트 검증에서 나온 후보 문항 수와 근거를 보여주고, `선생님 확정 문항 수` 입력 후 `n문항 확정` 버튼을 누르면 `시험분석 · 문항 수 확정 중/완료/실패` 상태가 같은 패널과 상단 상태바에 표시된다.
- 검증 UI: 확정 후 `고정 문항 행` 영역에 `1~N번 · N행`과 번호 칩이 표시된다. 다음 단계 AI 행 채움은 이 고정 행을 기준으로만 진행해야 한다.
- 상세 갱신 보정: PDF 업로드, 텍스트 추출, AI 원본 검증, 문항 수 확정 후 목록뿐 아니라 상세도 즉시 다시 불러오도록 했다. 이전 상세 데이터가 화면에 남아 후보/행이 늦게 보이는 흐름을 줄였다.
- 저장 주의: 새 SQL edit은 필요 없다. 기존 `supabase/20260703_exam_analysis_pipeline.sql`의 `ensure_exam_analysis_question_rows` 함수를 사용한다.
- 검증: `node --check api/lib/supabaseRest.js`, `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-04 P0 예정. 작업 완료 후 사람 검토 절차 필수화

- 상태: 예정
- 사용자 요청: 작업이 끝나면 사람이 무엇을 어떤 순서로 검토해야 하는지 반드시 알려주고, 검증 가능한 절차를 만들며 단계적으로 넘어갈 수 있게 한다.
- 작업지침 반영: `AGENTS.md` Workflow에 작업 완료 답변에는 반드시 `사람 검토 절차`를 포함하도록 추가했다. 절차에는 버전 확인, 데이터 준비, 기본 흐름 검토, 저장 원천 검토, 실패/중단 조건, 회귀 확인, 통과 기준이 들어가야 한다.
- 시험분석 탭 반영: `AGENTS.md`에 시험분석 탭 전용 검토 절차를 추가했다. 시험분석 UI/API/PDF/저장/삭제를 건드린 작업은 `학교 -> 학년 -> 고사 -> 분석` 카드 확인, PDF 업로드, 텍스트 후보 추출, 비용 허용 시 AI 원본 검증, Supabase/Storage 저장 확인, 새로고침 유지, 테스트 분석 삭제 확인, 중단 조건을 최종 답변에 포함해야 한다.
- 운영 원칙: 자동 테스트 통과만으로 완료로 보지 않는다. 사람 검토 절차의 기대값이 실제 화면/데이터와 맞아야 다음 단계로 넘어간다. 애매하거나 데이터 원천이 흔들리면 멈추고 사용자 확인 후 진행한다.

### 2026-07-04 P0 예정. 데이터 원천 중복/덧대기 전수조사

- 상태: 예정
- 사용자 요청: 데이터가 중복되거나 틀렸을 때 원천을 끊지 않고 화면/저장 직전에 덧대어 보정하는 구조가 또 남아 있는지 확인하고, 다음 작업 최우선순위로 전수조사해 정리한다.
- 문제의식: 오늘 시험분석 v2에서 과목 `기하`가 원천 데이터에 섞였는데, 처음에는 저장 경계/화면 표시에서 우선순위를 바꾸는 식으로 보정하려 했다. 이런 방식은 원천 오류를 숨겨 나중에 다시 반복될 수 있으므로, 데이터 원천과 파생/표시/override의 책임을 명확히 나눠야 한다.
- 전수조사 기준: `fallback`, `sampleData`, `mock`, `default`, `infer*`, `normalize*`, `dedupe*`, `duplicate`, `legacy`, `deprecated`, `hiddenAppState`, `app_state`, `localStorage`, `override` 키워드를 기준으로 코드와 문서를 훑는다. 각 후보는 `원천 데이터`, `파생 표시`, `일시 override`, `마이그레이션/삭제 대상`, `정상 fallback`으로 분류한다.
- 1차 스캔 후보: `api/routes/coreData.js`의 `fallbackSource`/`sampleData` 반환, `src/app/App.jsx`의 `useStoredState(... sampleData ...)` 초기값, `dedupeExamPrepRowsForDisplay`, `inferExamCycleFromPrepId`, `app_state.generatedLessonControls`, `app_state.examPostTargetStudentIds`, `deprecatedAppStateKeys`/`hiddenAppStateKeys`, 수업일지 저장 직후 `localStorage` 직접 갱신 구간, 시험관리 중복 정리 API와 화면 dedupe 관계.
- 내일 산출물: 후보별 표를 만들고, 운영 데이터에 영향이 큰 순서대로 `원천 삭제/마이그레이션`, `정상 파생으로 문서화`, `화면 덧대기 제거`, `테스트 추가` 중 하나로 결론을 낸다. 바로 고치기보다 먼저 목록과 우선순위를 확정한다.
- 주의: 모든 fallback이 나쁜 것은 아니다. Supabase 미설정 로컬 개발용 fallback, 명시적 app_state override, 표시 전용 dedupe는 역할이 명확하면 유지 가능하다. 다만 운영 Supabase 원천과 충돌하거나 잘못된 값을 숨기는 fallback/보정은 정리 대상이다.
- 추가 지침: 필터/정규화/우선순위 보정을 여러 겹 덧대어 오류를 숨기지 않는다. 특히 시험분석 v2는 테스트 단계이므로 손상된 테스트 데이터는 보존보다 삭제 후 재업로드/재분석을 우선 검토한다. 원천 오류를 바로 끊을 수 없거나 보정 로직이 2겹 이상 필요해 보이면 작업을 멈추고 사용자에게 확인한다.

### 2026-07-03 P0. 시험분석 v2 PDF 텍스트 후보 추출과 Claude 원본 검증

- 상태: 완료
- 사용자 질문: PDF 텍스트 추출이 안 되는 것인지, 프리뷰에만 인코딩 잡음이 보이는 것인지 확인이 필요했다. 이전 문항별 크롭/비전 분석은 비용이 높고 효율이 낮았으므로, Claude 비전 체크가 같은 방식인지도 검토했다.
- 검증 결론: PDF 텍스트 추출은 된다. 실제 운영 source `[자운고] 2026 1-1 기말 공통수학1.pdf`에서 `5쪽`, `52,792 bytes`, 문항번호 후보 `1~24`를 추출했다. 다만 `page_text_ranges.preview`는 `extracted_text`의 앞부분과 완전히 같은 문자열이므로, 프리뷰만 깨진 것이 아니라 전체 추출 텍스트 자체에 PDF 텍스트 레이어 잡음이 섞여 있다.
- 이번 작업 결과: `pdfjs-dist` 기반 `POST /api/exam-analysis-source-files/extract`를 추가해 PDF source의 `extracted_text`, `page_text_ranges`, `page_image_manifest`, `extraction_status`를 저장한다. 텍스트 원문을 정제 필터로 덕지덕지 고치지 않고, 문항번호 후보/누락 후보/페이지별 길이/텍스트 레이어 잡음만 품질 지표로 산출한다.
- 화면 기준: PDF 카드에는 원문 프리뷰를 노출하지 않고 `문항번호 후보 1~N`, 누락 후보, 페이지별 추출 길이, `PDF 텍스트 레이어 잡음 감지: AI 원본 검증이 필요합니다.` 같은 검증 지표만 보여준다.
- Claude 원본 검증: `POST /api/exam-analysis-source-files/vision-check`를 추가했다. Anthropic API key가 있으면 Claude Messages API의 PDF `document` 입력을 먼저 사용하고, Anthropic 키가 없을 때만 OpenAI Responses PDF 입력을 예비 경로로 둔다. 이 검증은 문항별 크롭/유형분류가 아니라 `읽을 수 있는가`, `쪽수`, `과목`, `문항번호 후보`, `문항 수 후보`, `누락 번호`, `빠른 정답 감지`만 확인하는 얕은 게이트다.
- 실제 Claude 검증: 같은 운영 PDF를 Anthropic `claude-sonnet-4-5`로 확인했고 `readable=true`, `pageCount=5`, `subject=공통수학1`, `questionCountCandidate=24`, `questionNumberCandidates=1~24`, `missingQuestionNumbers=[]`, `answerKeyDetected=true`를 받았다.
- 비용/운영 원칙: Claude/OpenAI PDF 원본 검증은 API 과금 대상이므로 자동 호출하지 않고 버튼으로 수동 실행한다. 이전처럼 문항별 크롭/문항별 비전 분석으로 바로 확장하지 않는다. 다음 단계는 문항 수 후보를 선생님 확인 화면으로 넘기고, 확인된 N 기준으로 1~N 빈 행을 고정 생성하는 것이다. 그 다음 AI 행 채움 전에 각 문항이 PDF 어느 페이지/영역에서 시작하고 끝나는지 찾는 `문항 경계 탐지` 단계를 별도로 둔다. 문항 경계 탐지는 문제 풀이/유형분류가 아니라 page/대략 위치/다음 문항 전까지의 범위만 JSON으로 받는 얕은 단계로 설계한다.
- 데이터 보정: 시험분석 v2 저장 경계에서 과목 `기하`는 빈 값으로 정리한다. 파일명/원본 검증이 `공통수학1`을 명확히 말하면 그 값을 사용한다. 기존 운영 run은 `자운고 고1 1학기 기말고사 시험분석`, 과목 `공통수학1`로 복구/확인했다.
- 저장 주의: 새 SQL edit은 필요 없다. 기존 `supabase/20260703_exam_analysis_pipeline.sql`의 v2 테이블과 `exam-analysis-pipeline-sources` bucket을 사용한다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 PDF 저장 확인과 삭제/학교추가 보강

- 상태: 완료
- 사용자 확인: PDF 업로드/저장이 되는지 확인이 필요했고, 잘못 올린 분석을 삭제할 수 없었다. 학교 컬럼에는 추가 버튼이 필요하며, 분석은 연도별로 카드가 쌓여야 하고, `200KB` 표시가 텍스트 추출량처럼 보이는 것도 의심된다고 했다.
- 운영 확인: Render API `GET /api/exam-analysis-runs?limit=5`에서 Supabase source로 `자운고 고1 1학기 중간/기말` run 2건이 조회됐다. 상세 조회에서 `[자운고] 2026 1-1 기말 공통수학1.pdf`가 `exam-analysis-pipeline-sources` Storage 경로와 `exam_analysis_sources` row로 저장되어 있고 `source_uploaded` 이벤트가 남은 것을 확인했다. 표시된 `200KB`는 PDF 텍스트 추출량이 아니라 `sizeBytes=204668` 파일 크기다.
- 이번 작업 결과: 분석 run 삭제 API를 추가했다. `DELETE /api/exam-analysis-runs?id=...`는 연결된 PDF Storage 객체 삭제를 먼저 시도하고, `exam_analysis_runs` row를 삭제해 cascade로 source/question/job/event row를 정리한다.
- UI 보강: 학교 컬럼에 `추가` 버튼을 되살려 기본 5개 외 직접 입력 학교도 분석 저장 후 카드로 쌓이게 했다. 분석 컬럼에는 선택 분석 `삭제` 버튼과 `시험분석 · 삭제 중/완료/실패` 상태 배지를 추가했다. 분석 기본 제목에는 현재 연도를 포함하고, 분석 카드에는 생성연도를 표시한다.
- 표시 보정: PDF 원본 목록은 `PDF 저장 완료 · 파일 200KB · 텍스트 추출 전`처럼 파일 크기와 텍스트 추출 상태를 구분해 보여준다. 실제 텍스트 추출은 아직 다음 단계다.
- 저장 주의: 새 SQL edit은 필요 없다. 기존 v2 테이블과 `exam-analysis-pipeline-sources` Storage를 사용한다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 학교/학년/고사/분석 4열 보드

- 상태: 완료
- 사용자 요청: 시험분석 CSS 구성을 `학교 -> 학년 -> 고사 -> 분석`으로 바꾸고, 학교는 `상계고`, `자운고`, `창동고`, `용화여고`, `정의여고`, 학년은 `고1`, `고2`, `고3`, 고사는 `1학기 중간`, `1학기 기말`, `2학기 중간`, `2학기 기말`로 고정한다.
- 이번 작업 결과: 시험분석 v2 목록 보드를 4열로 바꿨다. 학교/학년/고사는 고정 카드로 표시하고, 기존 데이터의 `1학년`, `고1`, `1학기 기말고사`처럼 섞인 표현은 같은 카드로 묶어 보이도록 정규화했다. 분석 카드는 선택한 학교/학년/고사에 해당하는 run만 보여준다.
- UI 기준: 보드가 화면 폭을 먼저 쓰도록 작업 패널을 아래로 내렸다. 선택 카드는 네이비 배경으로 표시하고, 학교 카드는 `3학년 · 4고사 · n건`, 학년 카드는 `4고사 · n건`, 고사 카드는 `n건`을 표시한다.
- 저장 주의: 저장 테이블과 PDF 업로드 경로는 그대로 사용한다. 새 SQL edit은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 카드형 목록 CSS 보정

- 상태: 완료
- 사용자 요청: 시험분석 화면 CSS 구성을 학교/학년 카드 컬럼처럼 만들고, 사용자가 직접 검증할 방법을 알려달라고 했다.
- 이번 작업 결과: `ExamAnalysisPipelineCenter`의 목록 영역을 `학교 -> 학년 -> 분석` 3열 카드 보드로 바꿨다. 학교/학년은 `examPrepRows`와 `analysisRuns`에서 파생해 보여주고, 선택한 카드가 오른쪽 기본정보/PDF 업로드 패널 draft에 바로 반영된다.
- UI 기준: 컬럼 헤더에는 이름과 개수를 표시하고, 각 카드에는 `3학년 · 1고사 · 1건`, `0고사 · 0건`처럼 검증 가능한 카운트를 보여준다. 선택 카드는 네이비 배경으로 표시한다. 모바일에서는 3열을 1열로 쌓아 텍스트가 찌그러지지 않게 했다.
- 저장 주의: 화면 선택/표시 구조와 CSS만 변경했다. 저장 경로는 기존 v2 `exam_analysis_runs`, `exam_analysis_sources`, `exam-analysis-pipeline-sources` 그대로이며 새 SQL edit은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 첫 UI/PDF 업로드 화면

- 상태: 완료
- 사용자 진행: 운영 Supabase에 `supabase/20260703_exam_analysis_pipeline.sql`을 SQL edit 적용했다.
- 이번 작업 범위: 옛 시험분석 기능을 복구하지 않고, 새 v2 파이프라인의 목록/기본정보 저장/PDF 원본 업로드/상태 확인 화면만 붙인다. 텍스트 추출, 문항 수 판독, AI 호출은 다음 단계로 남긴다.
- 이번 작업 결과: 사이드바에 새 `examAnalysisPipeline` 기반 `시험분석` 탭을 추가하고 `ExamAnalysisPipelineCenter`를 만들었다. 화면은 분석 목록, 기본정보, PDF 원본, 진행 단계, 저장 이벤트를 보여준다.
- 저장 흐름: `GET/POST /api/exam-analysis-runs`로 run을 조회/저장하고, `POST /api/exam-analysis-source-files`로 PDF를 `exam-analysis-pipeline-sources` bucket에 업로드한다. 저장/불러오기/PDF 업로드는 작업 화면 안의 `시험분석 · 저장 중/완료/실패`, `시험분석 PDF · 업로드 중/완료/실패` 배지로 표시한다.
- UI 보정: 저장된 분석을 클릭하면 입력 draft가 해당 run으로 동기화되고, `직접 입력` 선택이 시험정보 첫 항목으로 되돌아가지 않게 했다. 상세 조회가 끝나기 전에는 이전 run의 PDF/이벤트가 섞여 보이지 않게 했다.
- 회귀 방지: 운영 시나리오 테스트에 새 v2 프론트가 목록/생성/PDF 업로드/상태 표시만 제공하고 `/api/ai/exam-analysis`를 되살리지 않는지 확인하는 체크를 추가했다.
- 저장 주의: 기존 `supabase/20260703_exam_analysis_pipeline.sql` 구조를 사용한다. 이번 작업으로 새 SQL edit은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 231, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 백엔드 run/PDF 업로드 API

- 상태: 완료
- 사용자 진행: 운영 Supabase에 `supabase/20260703_exam_analysis_pipeline.sql`을 SQL edit 적용했다.
- 이번 작업 범위: AI 호출 없이 새 v2 저장 구조에 맞춘 백엔드 run CRUD와 PDF 업로드 API만 구현한다.
- 이번 작업 결과: `api/routes/examAnalysisPipeline.js`를 추가해 `exam_analysis_runs`, `exam_analysis_sources`, `exam_analysis_questions`, `exam_analysis_ai_jobs`, `exam_analysis_events`를 camelCase로 조회/저장하는 route helper를 만들었다. `api/server.js`에는 `GET/POST /api/exam-analysis-runs`, `POST /api/exam-analysis-source-files`, `GET /api/exam-analysis-source-files/open`을 연결했다.
- 저장 흐름: PDF 업로드 시 `exam-analysis-pipeline-sources` bucket에 저장하고, `exam_analysis_sources`에 source row를 만들며, run의 `workflow_status`를 `source_uploaded`로 갱신하고 `exam_analysis_events`에 `source_uploaded` 이벤트를 남긴다. 아직 텍스트 추출, 문항 수 판독, AI 호출은 수행하지 않는다.
- 회귀 방지: 운영 시나리오 테스트에 v2 route가 run CRUD/PDF 업로드만 제공하고 `/api/ai/exam-analysis`를 되살리지 않았는지 확인하는 체크를 추가했다.
- 검증: `node --check api/routes/examAnalysisPipeline.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 230, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 v2 저장 파이프라인 1단계

- 상태: 완료
- 사용자 요청: 삭제한 시험분석을 옛 구조로 복구하지 말고, `PDF -> 문항 수 판독 -> 선생님 확인 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 재요청` 순서의 검증 가능한 작은 단위로 새로 진행한다.
- 이번 작업 범위: 전체 화면을 한 번에 만들지 않고 1단계 저장 구조부터 구현한다.
- 이번 작업 결과: `supabase/20260703_exam_analysis_pipeline.sql`을 추가했다. 새 구조는 `exam_analysis_runs`, `exam_analysis_sources`, `exam_analysis_questions`, `exam_analysis_ai_jobs`, `exam_analysis_events`로 분리된다. `ensure_exam_analysis_question_rows(run_id, count)` 함수가 선생님 확정 N 기준으로 1~N 빈 행을 만들고, `(analysis_run_id, question_number)` unique 제약으로 행 재번호/중복을 막는다.
- 저장 주의: 운영 Supabase SQL editor에 `supabase/20260703_exam_analysis_pipeline.sql` 적용이 필요하다. 새 bucket은 `exam-analysis-pipeline-sources`이며, 삭제된 옛 `exam-analysis-sources`와 구분한다. 아직 UI/API는 붙이지 않았으므로 SQL 적용 전후 기존 운영 화면에는 변화가 없다.
- 회귀 방지: 운영 시나리오 테스트에 v2 스키마가 문항 수 판독, 선생님 확정, 고정 행, AI job, 선생님 수정본 보존 필드를 분리했는지 확인하는 체크를 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 229, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P0. 시험분석 기능과 저장 데이터 경로 제거

- 상태: 완료
- 사용자 요청: 시험분석 탭뿐 아니라 데이터 삭제를 포함해 시험분석 관련 기능을 완전히 지우고, DB 연결된 저장소만 남긴다.
- 이번 작업 결과: 사이드바 `시험분석` 진입, `ExamAnalysisCenter`, 프론트 `examAnalyses`/`examAnalysisFolders` 상태·로드·저장, 시험분석 AI/문항분류/문항크롭 API, PDF 업로드/열기 API, PDF 분석 의존성, 시험분석 전용 도메인 파일과 CSS를 제거했다. 수업일지, 시험관리, 시험 후 총평 맞춤법 AI, 시험 후 제출 자기점검 흐름은 유지했다.
- 서버 정리: `api/routes/examAnalysis.js`를 삭제하고 수업일지/시험 후 총평 맞춤법 AI만 담당하는 `api/routes/commentPolish.js`를 남겼다. `/api/ai/comment-polish`와 `/api/integrations/status`의 AI 상태는 계속 동작한다.
- 데이터 정리: `api/routes/coreData.js`에서 `examAnalyses`, `examAnalysisFolders`를 deprecated app_state 키로 숨기고 다음 app_state 저장 때 삭제되게 했다. 운영 Supabase에서 즉시 지우려면 `supabase/20260703_remove_exam_analysis_app_state.sql`을 SQL editor에 적용한다. 이 SQL은 제거된 시험분석 `app_state`와 `exam-analysis-sources` Storage 객체/버킷만 지우며, 시험 후 제출용 `exam-submissions` 같은 활성 Storage는 건드리지 않는다.
- 문서 정리: 시험분석 API 문서와 env 예시의 시험분석 전용 모델 변수를 제거했고, `docs/next-session/README.md`도 시험분석 파이프라인 재개가 아니라 삭제 완료 기준으로 갱신했다.
- 검증: `node --check api/routes/commentPolish.js`, `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 227, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 문항분류가 저장된 mock 5문항에 묶이는 문제 수정

- 상태: 완료
- 사용자 제보: 같은 PDF를 올렸는데 문항별 분류표 화면에서 계속 `mock 분석: 현재 문항 카드 수 기준`과 5문항으로 잡힌다.
- 원인: 기존 저장 분석지에 남아 있던 mock `questionComposition.total=5`와 기존 분류행 5개가 PDF 원본보다 먼저 문항 수 기준으로 사용됐다. 그래서 실제 PDF 원문과 이미지가 있어도 문항분류 AI 요청의 목표 문항 수가 5로 제한될 수 있었다.
- 이번 작업 결과: 숫자 24를 고정값으로 넣지 않았다. PDF마다 추출 텍스트에서 `1번~N번` 또는 `1. ... N.`처럼 연속 문항번호를 감지해 해당 시험지의 동적 목표 문항 수로 사용한다. 이 PDF는 로컬 추출 기준 1~24번이 감지될 뿐이며, 다른 시험지는 감지된 N값을 사용한다.
- 프론트 보강: mock 근거의 `questionComposition`은 PDF 원문 감지값보다 우선하지 않게 했다. 문항 수 입력, 누락 후보, AI 분류표 생성 목표 수가 기존 5행보다 PDF 원문 감지값을 먼저 보도록 순서를 바꿨다.
- 서버 보강: 프론트에서 오래된 5문항 값이 넘어오더라도 `/api/ai/exam-analysis`, `/api/ai/exam-question-info-text`, `/api/ai/exam-question-classification`에서 PDF 추출 텍스트의 연속 문항번호가 더 크면 그 값을 목표 문항 수로 확장한다. AI 프롬프트도 1~N번 전체 행을 요구한다.
- 저장 주의: 기존 `app_state.examAnalyses` 저장 구조 안의 값 해석/갱신만 변경했다. 새 Supabase SQL edit 없음.
- 검증: 제보 PDF 로컬 텍스트 추출에서 1~24번 연속 문항번호 감지 확인. `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 245, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 AI 요청 진행 로그 표시

- 상태: 완료
- 사용자 제보: 원본 입력의 `AI 분석 시작` 후 계속 로딩 중으로만 보인다. 실제 AI가 PDF를 분석 중일 수 있으므로 요청을 강제로 끊으면 안 되고, 사람이 중간 과정을 확인할 수 있어야 한다.
- 이번 작업 결과: 시험분석 요청에는 프론트 타임아웃이나 수동 대기 해제 버튼을 넣지 않았다. 대신 분석지에 `aiProgressLog`를 저장해 원본 확인, PDF/이미지 준비 완료 또는 실패, 서버 분석 요청, AI 응답 반영, AI 응답 실패 단계를 기록한다.
- 화면 보강: 원본 입력 화면의 `AI 분석 시작` 버튼 아래에 `AI 분석 진행` 패널을 추가했다. 분석 중에는 사용 모델, 이미지 포함 페이지 수, 요청 유지 상태, 경과 시간, 서버 상태 확인 메시지를 같은 화면에서 확인할 수 있다.
- 저장 주의: 진행 로그는 기존 `app_state.examAnalyses` 안의 분석지 데이터에 함께 저장한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 245, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. AI 프롬프트 설정과 실제 호출 매핑 정리

- 상태: 완료
- 사용자 요청: 설정에 있는 AI 프롬프트와 실제 AI 호출 시 작동되는 프롬프트가 매핑되어야 한다. 설정 화면의 시험분석 프롬프트가 깨진 문자로 보이는 문제도 확인이 필요하다.
- 이번 작업 결과: 설정 > AI 프롬프트 목록을 실제 호출이 있는 프롬프트만 남기도록 정리했다. 각 프롬프트 편집 영역에 `설정 키`, `실제 호출`, `API / 서버 빌더`, `호출 시 추가 데이터`, 필요 시 `호출 모드`를 표시해 설정값이 어느 버튼과 서버 프롬프트 빌더로 들어가는지 바로 확인할 수 있게 했다.
- 정리한 매핑: 코멘트 AI는 수업일지 학생별 코멘트 `AI 수정` -> `/api/ai/comment-polish` -> `buildCommentPrompt`, 시험 후 총평 맞춤법 AI는 시험관리 총평 모달 `AI 수정` -> `/api/ai/comment-polish` -> `buildCommentPrompt` + `polishMode: spellingOnly`, 수업메모 AI는 수업 준비 메모 AI 정제 -> `/api/ai/comment-polish` -> `buildCommentPrompt`, 알림관리 공지 AI는 공지 작성 AI 수정 -> `/api/ai/comment-polish` -> `buildCommentPrompt`, 시험분석 AI는 원본 입력 `AI 분석 시작` -> `/api/ai/exam-analysis` -> `buildExamAnalysisPrompt`이다.
- 깨진 프롬프트 방지: 저장된 시험분석 프롬프트에 문자 인코딩 깨짐 흔적이 있으면 기본 시험분석 프롬프트로 자동 복구한다. 예전에 있던 미연결 `AI 변형문항` 프롬프트/모델 설정은 설정 화면과 기본 설정에서 제거했고, 저장된 오래된 프롬프트 키도 기본 키 기준 정규화 과정에서 다시 섞이지 않게 했다.
- 저장 주의: 설정 데이터의 정규화/UI 표시만 변경했다. 기존 `app_state.aiSettings` 저장 경로를 그대로 사용하며 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 245, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 첫 AI 호출 PDF 이미지 입력 연결

- 상태: 완료
- 사용자 제보: 텍스트로 읽을 수 있는 PDF를 올렸는데 문항별 분류표에서 `mock 분석: 현재 문항 카드 수 기준`과 5문항 응답이 나온다. 임시 문항 수 추정이 아니라, 대화 세션에 PDF를 넣었을 때처럼 API 호출에서도 AI가 PDF를 읽어야 한다.
- 원인: 문항별 분류 API는 이미 PDF 페이지를 이미지로 렌더링해 OpenAI/Claude 멀티모달 입력에 포함했지만, 첫 `AI 분석 시작` API는 추출 텍스트 프롬프트만 전송했다. 또한 `/api/ai/exam-analysis` 요청 바디 한도가 기본 2MB라 PDF 페이지 이미지를 실어 보낼 수 없었고, 테스트 모드(mock) 설정이면 실제 PDF 분석 대신 5문항 mock 분석이 저장될 수 있었다.
- 이번 작업 결과: 원본 입력의 `AI 분석 시작` 클릭 시 PDF/이미지 원본을 최대 8페이지까지 렌더링해 `pageImages`로 함께 전송한다. 서버는 시험분석 프롬프트와 함께 첨부 페이지 이미지를 OpenAI/Claude 멀티모달 요청에 넣고, 프롬프트에 첨부 이미지가 있으면 실제 지면의 문항번호/수식/보기/도형 배치를 OCR보다 우선하라고 명시했다. `/api/ai/exam-analysis` 바디 한도는 18MB로 확장했다.
- mock 오작동 방지: 업로드 원본, OCR 텍스트, 페이지 이미지가 있는 시험분석 요청은 테스트 모드로 가짜 분석을 만들지 않고, Claude 또는 OpenAI 제공자를 선택하라는 명확한 오류를 반환한다.
- 실제 PDF 확인: 제보 PDF는 로컬 추출 기준 5페이지이며 빠른 정답에서 24번까지 확인된다. 새 구조에서는 숫자만 보정하지 않고 PDF 렌더링 이미지와 추출 텍스트를 함께 AI에 전달한다.
- 회귀 방지: 운영 시나리오 테스트에 첫 시험분석 호출의 PDF 페이지 이미지 준비, 서버 이미지 멀티모달 호출, 18MB 요청 한도, mock PDF 분석 차단 조건을 추가했다.
- 저장 주의: API 호출 입력과 UI 요청 준비 흐름만 변경했다. 기존 `app_state.examAnalyses` 저장 구조와 Supabase SQL edit 변경 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 244, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P2. 시험분석 원본 입력 분석 중 버튼 크기 조정

- 상태: 완료
- 사용자 요청: 시험분석 원본 입력의 `분석 중...` 버튼이 작아 보인다.
- 이번 작업 결과: 원본 입력 다음 단계 버튼에 `sourceAnalysisButton` 전용 클래스를 추가했다. 버튼 최소 폭과 높이, 패딩을 키우고 `white-space: nowrap`을 적용해 `분석 중...` 문구가 두 줄로 쪼개지지 않도록 했다. 작은 화면에서는 버튼이 카드 폭에 맞춰 100%로 펼쳐진다.
- 회귀 방지: 운영 시나리오 테스트가 원본 입력 AI 분석 버튼 전용 클래스와 줄바꿈 방지 CSS를 확인하도록 보강했다.
- 저장 주의: CSS/UI 표시만 변경했다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 원본 업로드 ReferenceError 수정

- 상태: 완료
- 사용자 제보: 시험분석 원본 입력에서 파일 업로드 후 `업로드 실패 · removeFailedAttachmentBlocks is not defined` 오류가 표시된다.
- 원인: 실패 첨부 블록 제거 함수는 `analysisState.js`에 export되어 있었지만, 원본 업로드 처리 함수 `attachSourceFiles`가 있는 `App.jsx` import 목록에 빠져 있었다. 파일 업로드 후 해당 함수 호출 시점에만 런타임 ReferenceError가 발생했다.
- 이번 작업 결과: `removeFailedAttachmentBlocks`를 `App.jsx`에 명시 import해 원본 업로드 후 기존 `[첨부 실패]` 블록을 정리하고 새 추출 노트를 붙이는 흐름이 정상 실행되도록 했다.
- 회귀 방지: 운영 시나리오 테스트 35b-2가 함수 정의뿐 아니라 `App.jsx` import와 `attachSourceFiles` 호출부까지 확인하도록 보강했다.
- 저장 주의: 프론트 런타임 연결 수정만 변경했다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 학년 추가 시 학교 선택 흔들림 수정

- 상태: 완료
- 사용자 제보: 자운고에서 학년을 추가할 때 학교 선택이 잠깐 상계고로 바뀌는 것처럼 보인다.
- 원인: 학년/고사 저장 후 선택 학교를 학교명으로 `createExamAnalysisSchoolId` 재계산해 지정했다. 기존 저장된 학교 folderId와 재계산 id가 순간적으로 어긋나면 트리 선택 보정 effect가 첫 학교로 fallback할 수 있었다.
- 이번 작업 결과: 학년/고사/분석 생성 및 이동 후에는 학교명으로 id를 다시 만들지 않고, 현재 트리에 있는 실제 학교 `folderId`를 우선 사용하도록 `getAnalysisSchoolFolderIdByName`을 추가했다. 학년/고사 draft에는 현재 학교의 `schoolFolderId`를 담아 저장 후에도 같은 학교 선택을 유지한다.
- 회귀 방지: 운영 시나리오 테스트에 `schoolFolderId`, `getAnalysisSchoolFolderIdByName`, `setSelectedSchoolId(createExamAnalysisSchoolId...)` 직접 사용 금지 조건을 추가했다.
- 저장 주의: 선택 상태 보정만 변경했다. 기존 `app_state.examAnalysisFolders`, `app_state.examAnalyses` 저장 경로를 그대로 사용하며 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 컬럼별 추가 버튼과 통합 수정/삭제 액션

- 상태: 완료
- 사용자 요청: 분석 목록의 `+ 학교`, `+ 학년`, `+ 고사`, `+ 분석지` 추가 버튼을 각 박스 안으로 옮기고, 학교/고사/분석별로 나뉜 수정·삭제 버튼을 하나의 `수정`, `삭제` 기능으로 통일한다.
- 이번 작업 결과: 학교/학년/고사/분석지 각 컬럼 헤더 안에 `추가` 버튼을 배치했다. 상단 액션 바는 마지막으로 클릭한 상자를 기준으로 `선택: 유형 · 이름`을 보여주고, 공통 `수정`, `삭제` 버튼만 제공한다. 분석지 선택 후 `수정`을 누르면 분석 작업 화면으로 열린다.
- 학년 관리 보강: 통합 수정/삭제 대상에 학년도 포함했다. 학년 수정 시 이전 학년명 아래의 고사 폴더와 분석지가 새 학년명으로 함께 따라가도록 `previousGrade` 동기화를 추가했다.
- CSS 정리: 기존 `analysisActionGroup` 스타일을 제거하고 `analysisSelectionSummary`, `analysisSelectionActions`, `analysisColumnAddButton` 스타일로 교체했다.
- 회귀 방지: 운영 시나리오 테스트를 새 구조에 맞게 갱신해 컬럼별 `추가`, 공통 `수정/삭제`, 개별 삭제 버튼 제거 조건을 확인한다.
- 저장 주의: 기존 `app_state.examAnalysisFolders`, `app_state.examAnalyses` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check src/domains/exams/library.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 중복 액션 버튼 제거와 CSS 정리

- 상태: 완료
- 사용자 요청: 시험분석 화면에 중복되는 버튼들이 있으므로 중복 버튼을 지우고 CSS를 정리한다.
- 이번 작업 결과: 시험분석 상단 헤더의 `+ 학교`, `+ 학년`, `+ 고사`, `+ 분석 문서` 버튼을 제거했다. 생성/수정/삭제/열기 액션은 `분석 목록` 카드 안의 액션 바 한 곳으로 통합했다. 상단 헤더에는 `시험분석 자동저장` 상태와 작업 화면에서의 `← 분석 목록` 버튼만 남긴다.
- CSS 정리: `analysisTopActions`를 저장 상태/뒤로가기 전용 flex 영역으로 간소화하고 불필요한 wrap 설정을 제거했다.
- 회귀 방지: 운영 시나리오 테스트에 `+ 분석지`가 목록 액션에 남아 있고, 상단용 `+ 분석 문서` 버튼이 다시 생기지 않는 조건을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 학년 추가와 비활성 버튼 로딩 표시 수정

- 상태: 완료
- 사용자 요청: 시험분석 분석 목록에서 `고사 수정`, `고사 삭제`, `분석 열기`, `분석 삭제`가 무한로딩처럼 보이며, 학년 추가 버튼이 필요하다.
- 원인: 분석 목록의 폴더 구조가 `학교`와 `고사`만 저장하고 `학년`은 고사 폴더의 파생값으로만 만들었다. 그래서 학교만 있는 상태에서는 학년 컬럼이 비어 중간 단계가 없었고, 선택 대상이 없는 액션 버튼은 disabled 상태인데 전역 CSS가 disabled 버튼 커서를 `wait`로 표시해 무한로딩처럼 보였다.
- 이번 작업 결과: `folderType: "grade"` 학년 폴더를 추가해 학교 아래에 학년을 먼저 저장할 수 있게 했다. 분석 목록 상단과 액션 바에 `+ 학년` 버튼을 추가했고, 학교 저장 후 학년 추가, 학년 저장 후 고사 추가, 고사 저장 후 분석 추가 흐름으로 모달을 정리했다.
- 액션 피드백: 고사/분석지 액션은 대상이 없으면 안내 문구를 표시하고, 저장/삭제/열기 완료 시 분석 목록 액션 바에 상태 문구를 표시한다. 대상이 없는 버튼은 비활성화되며 전역 disabled 커서를 `not-allowed`로 변경해 로딩처럼 보이지 않게 했다.
- 저장 주의: 기존 `app_state.examAnalysisFolders`, `app_state.examAnalyses` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 회귀 방지: 운영 시나리오 테스트에 학년 폴더 정규화, `+ 학년`, `학년 저장`, 액션 상태 표시, disabled 커서 조건을 추가했다.
- 검증: `node --check src/domains/exams/library.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 버튼 작동 피드백 전수조사와 산출물 복사 보강

- 상태: 완료
- 사용자 요청: 버튼을 만들 때에는 항상 작동 여부 표시가 있어야 하므로, 표시가 없는 버튼이 있는지 전수조사한다.
- 전수조사 기준: `src` 내 JSX 버튼 326개를 추출해 저장/삭제/복사/발송/생성/가져오기/내보내기/AI 실행류 action 버튼을 확인했다. 탭, 필터, 선택, 열기/닫기처럼 화면 상태가 즉시 바뀌는 버튼은 시각적 변화 자체를 피드백으로 보고, 복사/비동기 저장/발송/AI처럼 결과가 화면에 남지 않거나 실패할 수 있는 버튼은 상태 문구가 필요한 것으로 분류했다.
- 이번 작업 결과: 시험분석 산출물 미리보기 카드의 `복사` 버튼과 크게 보기 모달의 `복사` 버튼에 `복사되었습니다.` 또는 `복사할 내용을 확인해 주세요.` 상태 표시를 추가했다. 모달/카드 전환 또는 일정 시간 후에는 상태 문구가 초기화된다.
- 기존 피드백 확인: 수업일지 저장/알림톡, 시험관리 행 저장/AI 총평, 시험분석 AI/분류표/최종편집본 자동저장, 교재/오답/학생 성적 영역 등 주요 저장·생성 흐름은 이미 버튼 주변 또는 현재 패널 안에 진행/완료/실패 상태가 있었다. 새 행 추가/모달 열기/목록 삭제처럼 결과가 즉시 화면에 반영되는 버튼은 별도 완료 문구 없이 화면 변화로 작동 여부가 확인되는 유형으로 분류했다.
- 작업지침 보강: `AGENTS.md` Product Rules에 action 버튼은 진행/성공/실패 피드백을 작업 영역 안에 표시해야 한다는 기준을 추가했다.
- 회귀 방지: 운영 시나리오 테스트에 시험분석 산출물 복사 버튼의 copy feedback 상태(`copyFeedbackStatus`, `outputPreviewCopyStatus`, `복사되었습니다.`)를 확인하는 체크를 추가했다.
- 저장 주의: UI 상태 표시와 문서 지침만 변경했다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 243, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다. `.jsx` 파일에 대한 `node --check` 직접 실행은 Node가 `.jsx` 확장자를 지원하지 않아 도구 한계로 생략하고, Vite 빌드로 문법을 확인했다.

### 2026-07-03 P1. 시험 후 총평 수정본 복사 완료 표시

- 상태: 완료
- 사용자 요청: 시험 후 총평 모달에서 `수정본 복사`를 누르면 `복사되었습니다.` 같은 표시가 보여야 한다.
- 이번 작업 결과: 수정본 복사 버튼 클릭 시 클립보드 복사 성공 여부를 받아 모달 안에 `복사되었습니다.` 상태 문구를 1.8초 동안 표시한다. 복사할 내용이 없거나 실패한 경우에는 안내 문구를 표시한다.
- 복사 helper 보강: `copyTextToClipboard`가 복사 성공 여부를 반환하는 async helper가 되도록 정리했다. 기존 호출부는 그대로 동작하고, 필요한 화면에서는 성공 상태를 UI에 반영할 수 있다.
- 회귀 방지: 운영 시나리오 테스트에 `reviewCopyStatus`, `복사되었습니다.`, `copyTextToClipboard` async/fallback 조건을 추가했다.
- 저장 주의: 저장 경로 변경 없음. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 242, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 수정본 미리보기 제거와 복사 기능

- 상태: 완료
- 사용자 요청: 시험 후 총평 모달의 미리보기는 필요 없고, 수정본을 클립보드에 복사해 붙여넣기할 수 있어야 한다.
- 이번 작업 결과: 시험 후 총평 모달 오른쪽의 `시험 총평 미리보기` 카드를 제거했다. REVISED 헤더에 `수정본 복사` 버튼을 추가했고, 수정본 textarea에 내용이 있을 때만 활성화되도록 했다.
- 복사 보강: 기존 `copyTextToClipboard` 공용 helper를 개선해 Clipboard API가 실패하거나 지원되지 않는 환경에서도 임시 textarea와 `document.execCommand("copy")`로 복사를 시도한다. 그래도 실패하면 기존처럼 원문 alert로 확인할 수 있게 했다.
- 회귀 방지: 운영 시나리오 테스트에 시험 후 총평 수정본 복사 버튼, 클립보드 fallback, 미리보기 제거 조건을 추가했다.
- 저장 주의: 기존 `exam_prep_rows.revised_review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 242, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 모달 상단 정렬과 맞춤법 전용 AI 수정

- 상태: 완료
- 사용자 요청: 시험 후 총평 모달에서 ORIGINAL/REVISED 윗부분을 맞추고, 이 모달의 AI 수정은 맞춤법만 고치게 한다.
- 이번 작업 결과: 시험 후 총평 모달에 `examReviewComposerModal` 전용 클래스를 추가하고 양쪽 패널을 상단 정렬했다. 헤더 최소 높이를 맞춰 ORIGINAL/REVISED 영역이 같은 높이에서 시작되도록 CSS를 보강했다.
- AI 수정 변경: 시험 후 총평 모달은 기존 코멘트 다듬기 프롬프트 대신 `examReviewSpelling` 전용 프롬프트와 `polishMode: "spellingOnly"`를 사용한다. 서버 프롬프트도 이 모드에서는 맞춤법, 띄어쓰기, 명백한 오탈자만 고치고 문장 구조/말투/번호/줄바꿈/사실을 유지하도록 분기했다.
- 회귀 방지: 운영 시나리오 테스트에 총평 AI가 맞춤법 전용 프롬프트와 상단 정렬 CSS를 사용하는지 확인하는 조건을 추가했다.
- 저장 주의: 기존 `exam_prep_rows.review`, `revised_review`, `review_ai_status` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 242, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 자동저장 중 Enter 입력 방해 수정

- 상태: 완료
- 사용자 제보: 자동저장된 시험 후 총평 항목에서 Enter가 먹지 않고 줄바꿈이 되지 않는다.
- 원인: 이전 수정으로 총평 textarea는 로컬 상태를 쓰게 했지만, 입력마다 즉시 `onUpdateRow`를 호출해 부모 `exam_prep_rows` 상태와 저장 상태를 계속 갱신했다. 자동저장된 행에서는 이 부모 갱신이 입력 중 textarea를 흔들어 Enter 같은 줄바꿈 입력을 방해할 수 있었다.
- 이번 작업 결과: 시험 후 총평 textarea 입력과 Supabase 저장 요청을 분리했다. 사용자가 입력하면 textarea 로컬 상태에는 즉시 반영하고, `exam_prep_rows.review` 저장 요청은 500ms debounce 후 실행한다. blur 또는 모달 닫기 시에는 pending 입력을 즉시 flush해 최신 내용이 저장되게 했다.
- 회귀 방지: 운영 시나리오 테스트에 총평 composer가 수동 편집 중 즉시 부모 저장 호출을 하지 않고, debounce/blur/close flush를 사용하는지 확인하는 조건을 추가했다.
- 저장 주의: 기존 `exam_prep_rows.review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 241, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 작업지침에 수동 초안 우선/저장상태 표시 원칙 추가

- 상태: 완료
- 사용자 요청: 자동 매핑으로 초안을 가져오더라도 사용자가 수정한 이후에는 그 수정본을 초안으로 삼고, `저장 중`, `저장 완료` 같은 상태 표시가 잘 보이도록 작업지침에 남긴다.
- 이번 작업 결과: `AGENTS.md` Product Rules에 자동 매핑/AI/템플릿 초안 원칙을 추가했다. 빈 값에는 초안을 채우되, 사용자가 textarea/input을 수정한 뒤에는 그 값이 새 초안이자 원본이며 렌더/자동저장/정규화가 덮어쓰지 않도록 명시했다.
- UI 지침: 자동저장 화면은 작업 영역 가까이에 `저장 중`, `저장 완료`, `저장 실패` 상태와 저장 대상 라벨을 함께 보여주도록 추가했다. 우상단처럼 시야에서 떨어진 위치에만 표시하지 않는다는 기준도 남겼다.
- 검증: 문서 변경만 있으므로 빌드/운영 시나리오 테스트는 생략했다. `git diff --check`로 문서 diff를 확인했다.

### 2026-07-03 P1. 시험 후 총평 수동 편집 커서/자동덮어쓰기 수정

- 상태: 완료
- 사용자 제보: 시험 후 총평 초안에서 커서 위치에 Enter가 되지 않고 수정이 잘 되지 않는다. 초안 양식은 자동으로 불러오되, 사용자가 수정한 순간부터는 그 수정본이 초안이 되어야 한다.
- 원인: 총평 textarea의 값이 `row.review`에서 매 렌더마다 자동 동기화 함수로 다시 계산됐다. 그래서 사용자가 중간에 줄바꿈/수정을 해도 다음 렌더에서 범위/부교재 기반 자동 양식이 다시 덮어써 커서 입력을 방해했다.
- 이번 작업 결과: 시험 후 총평 모달은 열릴 때만 비어 있는 총평에 기본 양식을 만들고, 이후 textarea는 로컬 입력 상태로 움직이도록 변경했다. 사용자가 입력하면 즉시 로컬 상태와 `exam_prep_rows.review` 저장 요청에 반영되며, 자동 양식이 다시 덮어쓰지 않는다.
- 기존 데이터 정리: 앱 로딩 정규화는 학교명 제목 보정과 연속 중복 줄 정리만 수행하고, 사용자가 직접 쓴 `시험 범위`, `문항 출처` 내용은 더 이상 row의 scope/subTextbook 값으로 덮어쓰지 않는다.
- 저장 주의: 기존 `exam_prep_rows.review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 241, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 제목 학교명 표시

- 상태: 완료
- 사용자 요청: 시험지 총평 제목에 각 학교 이름을 넣어, 정의여고는 `[정의여고 시험지 총평]`처럼 보이게 한다.
- 이번 작업 결과: 시험 후 총평 기본 양식 제목을 학교명 기반으로 생성하도록 변경했다. 학교명이 있으면 `[학교명 시험지 총평]`, 학교명이 없으면 기존 `[시험지 총평]`을 사용한다.
- 기존 데이터 정리: 기존 `[시험지 총평]` 양식도 총평 모달을 열거나 앱 로딩 정규화가 실행될 때 해당 행의 학교명 제목으로 바뀐다. 자유문 총평은 기존처럼 건드리지 않는다.
- 저장 주의: 기존 `exam_prep_rows.review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 240, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 범위/부교재 반복 저장 방지

- 상태: 완료
- 사용자 제보: 상계고, 자운고 같은 학교에서 `교과서 p.p 74~141` 같은 문구가 계속 반복 저장되는 것처럼 보인다.
- 원인: 시험 후 총평 양식에 `시험 범위` 또는 `문항 출처` 값이 여러 줄로 들어오면, 기존 동기화가 해당 번호 줄 하나만 교체하고 그 아래 남은 줄은 그대로 두었다. 그래서 다음 자동저장 때 같은 줄이 다시 붙어 총평 초안이 계속 길어질 수 있었다.
- 이번 작업 결과: 총평 양식의 `시험 범위`, `문항 출처`는 번호 항목 블록 전체를 교체하도록 바꿨다. 같은 줄이 연속 반복된 범위/부교재 값은 총평 초안에 넣을 때 한 번 압축한다.
- 기존 데이터 정리: 앱 로딩 시 `exam_prep_rows` 정규화 흐름에서 양식형 총평을 한 번 정리하도록 연결했다. 자유문으로 직접 작성한 총평은 건드리지 않는다.
- 저장 보강: 시험정보 행 업데이트에서 값이 실제로 바뀌지 않은 경우에는 상태 갱신/저장을 건너뛰도록 해 불필요한 저장 렌더를 줄였다.
- 저장 주의: 기존 `exam_prep_rows.review`, `scope`, `sub_textbook` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 통과(total 240, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험관리 저장 상태 현재 고사 바 표시

- 상태: 완료
- 사용자 요청: 시험관리 저장 상태가 우상단에 있어 잘 보이지 않으므로, 수업일지처럼 작업 중인 영역 안에서 보이게 한다.
- 이번 작업 결과: 시험관리 `시험정보` 탭의 자동저장 상태 라벨을 상단 검색 영역 오른쪽에서 `현재 고사` 선택 바 안으로 이동했다. 이제 `2개 시험정보 · 5명` 같은 현재 고사 요약 옆에 `시험정보 · 저장 중/저장 완료/저장 실패`가 표시된다.
- UI 보강: 현재 고사 바가 좁은 화면에서도 저장 상태 라벨을 감싸 표시할 수 있도록 wrap을 허용하고, 저장 상태 라벨 크기를 바 안에서 읽기 좋게 조정했다.
- 저장 주의: 기존 `exam_prep_rows` 저장 상태 추적과 Supabase 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 범위/부교재 직접 입력과 총평 초안 연동

- 상태: 완료
- 사용자 요청: 시험관리 목록에서 `시험 범위`, `부교재`를 입력할 수 있게 하고, 입력된 값이 시험 후 총평 초안에 자동 연동되게 한다.
- 이번 작업 결과: 시험관리 표의 `시험 범위`, `부교재` 칸을 읽기 전용 텍스트에서 바로 입력 가능한 textarea로 변경했다. 입력 시 기존 `exam_prep_rows` 저장 흐름과 저장 상태 표시를 그대로 사용한다.
- 총평 연동: 시험 후 총평이 비어 있으면 기본 양식에 시험 범위, 부교재(문항 출처), 특이사항을 채워 넣는다. 이미 양식 형태로 작성된 총평은 `시험 범위`, `문항 출처` 줄만 현재 입력값으로 갱신하고, 난이도/특이사항/대비 방법 등 사용자가 적은 다른 줄은 유지한다. 완전히 직접 작성한 자유문 총평은 덮어쓰지 않는다.
- 저장 주의: 기존 `exam_prep_rows.scope`, `exam_prep_rows.sub_textbook`, `exam_prep_rows.review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `git diff --check` 통과, `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험 후 총평 기본 작성 양식 자동 표시

- 상태: 완료
- 사용자 요청: 시험지 총평 작성 칸에 `[시험지 총평]`, 시험 범위, 난이도, 문항 출처, 특이사항, 대비 방법 항목을 자동으로 띄워 옆에 바로 작성할 수 있게 한다.
- 이번 작업 결과: 시험관리의 `시험 후 총평` 모달에서 기존 총평이 비어 있으면 기본 양식을 자동으로 입력하고 저장 흐름에 태우도록 했다. 기존에 작성된 총평은 덮어쓰지 않는다. AI 수정 요청과 오른쪽 미리보기에도 같은 기본 초안이 반영된다.
- 저장 주의: 기존 `exam_prep_rows.review` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `git diff --check` 통과, `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 주요 편집 화면 자동저장 상태 표시

- 상태: 완료
- 사용자 요청: 수업일지처럼 저장 버튼이 없어도 `저장 중`, `저장 완료`, `저장 실패` 표시가 보이도록, 저장 상태가 불분명한 편집 화면들을 수정한다.
- 이번 작업 결과: `app_state` 자동저장에 공통 저장 상태를 추가하고, 설정, 시험분석, 시험분석 최종편집본, 교재 관리, 오답관리, 수업연구, 학생 프로파일 성적/테스트 영역에 자동저장 상태 라벨을 표시했다. 시험관리 행 저장도 상태 추적 wrapper를 추가해 시험정보 수정 모달과 시험 후 총평 모달, 시험관리 목록에서 `시험정보 · 저장 중/저장 완료/저장 실패`를 볼 수 있게 했다.
- 추가 보강: 학생 프로파일 기본정보 자동저장과 Tally 접수 후보 수정은 각각 학생/접수 후보별 저장 요청 상태를 추적해 마지막 수정 기준으로 `저장 중/저장 완료/저장 실패`가 표시된다. 시험정보 수정 모달 하단의 `저장 완료` 버튼 문구는 실제 저장 버튼으로 오해되지 않도록 `닫기`로 변경했다.
- 저장 주의: 기존 Supabase 저장 경로를 그대로 사용한다. `exam_prep_rows`, `students`, `student_intake_applicants`, `/api/app-state` 저장 피드백만 추가했으며 새 Supabase SQL edit 없음.
- 검증: `git diff --check` 통과, `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-03 P1. 시험분석 학교 추가 2개 제한 오류 수정

- 상태: 완료
- 사용자 요청: 시험분석 `분석 목록`에서 학교 추가가 2개까지만 되는 문제를 수정한다.
- 원인/판단: `+ 학교`로 새 학교 모달을 열 때 빈 학교명 기준의 `folderId`가 먼저 만들어지고, 사용자가 학교명을 입력해도 같은 placeholder `folderId`가 유지됐다. 그 결과 새 학교를 여러 번 저장해도 같은 학교 폴더 ID를 덮어써서 수동 추가 학교가 1개처럼 보일 수 있었다.
- 이번 작업 결과: 새 학교 생성 draft는 `folderId`를 비워 두고, 저장 시점의 학교명으로 `createExamAnalysisSchoolId`가 실행되도록 수정했다. 이제 3번째 이후 학교도 별도 폴더로 저장된다.
- 저장 주의: 기존 `app_state.examAnalysisFolders` 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-01 P1. 퇴원생 목록 연락처 표시와 정보 보관 보강

- 상태: 완료
- 사용자 요청: 퇴원한 학생의 정보는 모두 보관하고, 퇴원생 목록에서 아이디는 지우며 학생/학부모 전화번호 같은 정보는 보이게 한다.
- 이번 작업 결과: 퇴원생 목록의 `아이디` 표시 컬럼을 제거하고 `반`, `학생전화번호`, `학부모전화번호`, `출생연도` 컬럼을 추가했다. 퇴원 사유/코멘트 저장 흐름은 유지했다.
- 저장 보강: 퇴원 처리 시 `defaultClassTemplateId`를 비우지 않도록 바꿔 퇴원 당시 반 정보를 보존한다. 반별 명단 편집 시에도 비활성 학생의 기존 반 정보가 덮이지 않게 했다. 활성 반 명단과 미래 수업 명단에서는 기존처럼 퇴원생이 제외된다.
- SQL 주의: 기존 `students` 컬럼만 사용하므로 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 239, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-01 P1. StudentManager 도메인 구조분리

- 상태: 완료
- 사용자 요청: `App.jsx`에 남은 `StudentManager`를 우선순위로 구조분리하고, 운영 Supabase에 적용한 `supabase/20260701_student_withdrawal_reason.sql`이 맞는지도 확인한다.
- 이번 작업 결과: `StudentManager`와 학생 프로파일 모달을 `src/domains/students/StudentManager.jsx`로 분리했다. `App.jsx`는 학생 관리 화면에서 새 도메인 컴포넌트를 import하고 공용 `Modal`만 주입하도록 정리했다.
- 저장 경로 확인: 퇴원 사유/코멘트는 기존처럼 학생 저장 API를 통해 `students.withdrawal_reason`, `students.withdrawal_comment`에 저장된다. SQL 파일은 두 컬럼을 `add column if not exists`로 추가하는 내용이라 운영 SQL Editor에서 재실행해도 안전한 형태다.
- SQL 확인 메모: 사용자가 운영 Supabase SQL edit를 실행했다고 보고했다. 저장소 기준으로 SQL 파일명/컬럼명/서버 매핑/시나리오 테스트는 모두 일치한다. 운영 DB에 실제 반영됐는지는 별도 쓰기 테스트 없이 직접 확인하지 않았다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 238, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-07-01 P1. 퇴원생 목록/퇴원 사유 관리

- 상태: 완료
- 사용자 요청: 학생 목록의 `반별 학생 목록` 옆에 `퇴원생 목록`을 추가하고, 퇴원 사유를 `졸업`, `반이동`, `기타` 드롭다운으로 남기며 옆에 코멘트 입력 칸도 둔다.
- 이번 작업 결과: 학생 목록 탭을 `전체 학생 목록`, `반별 학생 목록`, `퇴원생 목록` 3개로 확장했다. 퇴원 처리 확인 모달에 퇴원 사유와 코멘트 입력을 추가했고, 퇴원생 목록에서는 퇴원일, 사유 드롭다운, 코멘트, 저장 버튼을 한 줄에서 수정할 수 있게 했다.
- 저장 보강: 학생 API의 Supabase 매핑에 `withdrawal_reason`, `withdrawal_comment`를 추가했다. 기존 수동 저장 흐름(`학생 저장`)과 같은 방식으로 퇴원 사유/코멘트가 저장된다.
- SQL 적용 필요: 운영 Supabase SQL Editor에서 `supabase/20260701_student_withdrawal_reason.sql`을 실행해야 새 필드가 영구 저장된다. 목적은 `students.withdrawal_reason`, `students.withdrawal_comment` 컬럼 추가다.
- 검증: `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 238, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 자동 수업 저장 Failed to fetch 알림창 제거

- 상태: 완료
- 사용자 요청: 간헐적으로 `자동 수업 저장 실패: Failed to fetch` 브라우저 알림창이 뜬다.
- 원인/판단: 시험관리 자동 수업 저장은 백그라운드로 `/api/lessons/bulk`를 호출하는데, 네트워크 순간 실패나 API 응답 지연 시 `window.alert`를 띄워 사용자의 작업을 막고 있었다. 자동 수업은 화면에 먼저 반영되는 낙관 저장 구조라 실패 후 재시도 버튼도 필요했다.
- 이번 작업 결과: 자동 수업 저장 경로를 `postJsonWithTimeout`으로 바꾸고, 실패 시 브라우저 알림창 대신 `시험관리 자동 수업` 패널 안에 `자동 수업 저장 실패 · ...` 배너를 표시한다. 실패한 수업 목록을 상태에 보관해 `다시 저장` 버튼으로 같은 묶음을 재시도할 수 있게 했다. 저장 중/저장 완료 상태도 같은 패널에 표시한다.
- 저장 주의: 기존 `lessons` 저장 API와 Supabase 스키마를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 알림톡 없음/알림 제외 상태 표시 강화

- 상태: 완료
- 사용자 요청: `알림톡 없음` 또는 학생별 `알림 제외`를 눌렀을 때 알림톡이 발송되지 않는 상태가 버튼색으로 분명하게 보이고, 저장 흐름도 `저장 중...` 이후 `저장 완료`로 돌아오게 한다.
- 이번 작업 결과: 상단 `알림톡 없음` 활성 버튼을 빨강 계열로 강화했다. 수업 전체 발송 계획이 `알림톡 없음`이면 각 학생의 학부모/학생 알림톡 버튼도 무발송 상태 색으로 표시하고, 개별 `알림 제외` 버튼은 점선 빨강 계열로 표시한다. 개별 제외 상태는 기존처럼 `제외 해제` 버튼으로 구분된다.
- 저장 보강: `기본 예약`, `30분 지연`, `알림톡 없음` 계획 변경 시 관련 학생 `lesson_student_records`의 알림 상태 저장을 `saveStates`와 연결했다. 따라서 상단 저장 표시가 `저장 중...`을 거쳐 `저장 완료` 또는 `저장 실패`로 돌아온다. 기존 `lessonNotificationPlans` app_state 즉시 저장은 유지했다.
- 저장 주의: 기존 `app_state.lessonNotificationPlans`, `notification_jobs`, `lesson_student_records` 저장 경로를 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 자동저장 상태 상단 표시

- 상태: 완료
- 사용자 요청: 수업일지에서 내용을 수정하면 자동저장이 호출되지만 시간이 걸려 저장 중인지 완료됐는지 알 수 없으므로, 상단 회색 안내 위치에 `저장 중...`, `저장 완료` 같은 상태를 표시한다.
- 이번 작업 결과: 수업일지 상단 `발송 전 점검` 옆 회색 안내 영역이 현재 수업의 학생별 저장 상태를 집계해 `저장 대기...`, `저장 중...`, `저장 완료`, `저장 실패`를 표시하도록 했다. 아직 수정이 없으면 기존처럼 기본 알림톡 예약 시간을 보여준다. 상태 문구 폭을 고정해 저장 상태가 바뀌어도 옆 버튼들이 크게 흔들리지 않게 했다.
- 저장 주의: 기존 `lesson_student_records` 자동저장 흐름과 `saveStates` UI 상태를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 알림톡 없음 계획 즉시 저장

- 상태: 완료
- 사용자 요청: 수업일지에서 상단 `알림톡 없음`을 눌러도 저장되지 않는 문제를 고친다.
- 원인/판단: 수업별 발송 계획은 `lessonNotificationPlans` app_state에 저장되는 값인데, 버튼 클릭 시 로컬 상태와 예약 job/record 상태만 즉시 바꾸고 Supabase `app_state` 저장은 자동 effect에 의존했다. 이 때문에 새로고침/화면 전환/다른 기기에서 `알림톡 없음` 계획이 사라질 수 있었다.
- 이번 작업 결과: `handleUpdateLessonNotificationPlan`에서 `기본 예약`, `30분 지연`, `알림톡 없음` 선택 시 `lessonNotificationPlans`를 즉시 `postAppState`로 저장하도록 했다. 수동 `오늘 14:00 일괄예약`도 같은 즉시 저장 경로를 사용한다. 기존 예약 job 취소와 `lesson_student_records`의 `알림톡 없음` 상태 저장 흐름은 유지했다.
- 저장 주의: 기존 `app_state.lessonNotificationPlans`, `notification_jobs`, `lesson_student_records` 저장 경로를 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종편집본 출처/산출물 연결 안내

- 상태: 완료
- 사용자 요청: 최종편집본 항목들이 산출물과 어떻게 연결되는지, AI가 채우는 부분과 강사 인사이트가 들어가는 부분이 어디인지 화면에서 알 수 있게 한다.
- 이번 작업 결과: `getExamFinalDocumentBlockGuide`를 추가해 최종편집본 블록별 출처와 역할을 안내한다. 각 블록 헤더에 `AI 초안`, `문항분류표`, `자동 계산`, `AI+강사`, `강사 인사이트`, `수동 편집`, `기본정보` 배지를 표시하고, 블록 설명과 연결 산출물 한 줄을 함께 보여준다.
- 산출물 연결 안내: 산출물 작성 단계 상단에 `최종편집본`, `AI 초안`, `강사 인사이트`, `별도 산출물` 관계 안내 밴드를 추가했다. 최종편집본은 강사용 최종 보고서/PDF 원본이고, 학생 분석지·블로그·인스타는 아래 산출물 미리보기의 별도 초안이라는 점을 명확히 했다.
- 저장 주의: 새로 생성되는 finalDocument block에는 선택적 `sourceKind`를 붙이고, 기존 저장본은 제목 기반으로 안내를 추론한다. 기존 `examAnalyses[].finalDocument` app_state 저장 경로를 그대로 사용하며 새 Supabase SQL edit 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 산출물 미리보기 렌더링 보강

- 상태: 완료
- 사용자 요청: 산출물 미리보기 렌더링이 약해 보여 블로그 초안/인스타 카드뉴스가 한눈에 들어오도록 개선한다.
- 이번 작업 결과: `outputPreview.js`에 `parseReadablePreviewDocument`를 추가해 JSON/마크다운/번호 제목/목록/표를 구조화한 뒤, `ExamAnalysisReadablePreview`가 문서 헤더와 섹션 카드로 렌더링하도록 바꿨다. 블로그 초안은 단순 줄글 대신 제목, 핵심 문단, 섹션, 목록, 표 형태로 보인다.
- 인스타 미리보기: `parseInstagramSlides`가 JSON `slides/cards`와 느슨한 텍스트 슬라이드를 모두 처리하도록 보강했다. `ExamAnalysisInstagramPreview`는 슬라이드 번호, 표지/분석/CTA 구분, 본문 카드, 브랜드 footer를 가진 카드뉴스형 덱으로 렌더링한다.
- 저장 주의: 렌더링/파싱 UI만 변경했다. 기존 `examAnalyses[].blogDraft`, `instagramDraft`, `studentAnalysisDraft` 저장 구조와 Supabase SQL 변경 없음.
- 검증: `node --check src/domains/exams/outputPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종편집본 블록 버튼 단순화

- 상태: 완료
- 사용자 요청: 최종편집본 블록 헤더의 `위`/`아래` 버튼을 제거하고, 여전히 동작하지 않는 `펼치기` 버튼을 안정화한다.
- 이번 작업 결과: 최종편집본 블록 헤더에서 순서 이동용 `위`/`아래` 버튼과 관련 `moveBlock` 로직을 제거했다. 헤더 제목은 더 이상 클릭 버튼이 아니며, 우측의 큰 `펼치기/접기` 버튼만 블록 토글을 담당한다.
- 토글 안정화: 블록의 열림/닫힘 상태를 화면 state가 아니라 각 finalDocument block의 `collapsed` 값으로 저장/정규화한다. `normalizeExamFinalDocument`가 `collapsed`를 보존하므로 버튼 클릭 후 저장/렌더가 다시 돌아도 바로 닫히는 현상이 반복되지 않게 했다.
- 저장 주의: 기존 `examAnalyses[].finalDocument.blocks[]`에 선택적 `collapsed` boolean만 보존한다. 새 Supabase SQL edit 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 산출물 레이아웃 접힘/최종편집본 토글 안정화

- 상태: 완료
- 사용자 요청: 산출물별 레이아웃 선택지는 이미 결정했으니 기본 접힘으로 두고, 추후 수정용으로만 남긴다. 최종편집본에서 `펼치기`가 잘 안 되거나 열자마자 다시 닫히는 문제를 안정화한다.
- 이번 작업 결과: 산출물 작성 단계의 `레이아웃 선택` 섹션은 기본 접힘으로 변경하고, 안내 문구를 `추후 수정용 · 기본값 확정`으로 정리했다. `최종 편집본` 큰 섹션은 `defaultOpen`으로만 초기 열림을 주어 사용자가 접거나 펼친 상태를 브라우저가 강제로 되돌리지 않게 했다.
- 토글 안정화: 최종편집본 내부 블록은 `details/summary` 네이티브 토글에서 `section + 실제 펼치기/접기 버튼` 구조로 변경했다. 블록별 open 상태는 `blockOpenById`로 보존하고, 아직 저장된 최종문서가 없을 때 생성되는 fallback 문서는 `useMemo`로 고정해 새 id 생성으로 토글이 흔들리지 않게 했다.
- 저장 주의: UI 토글 상태는 화면 상태이며 Supabase 저장 구조는 바꾸지 않았다. 기존 `examAnalyses[].finalDocument`와 `outputLayoutChoices` app_state 저장 경로 그대로, 새 Supabase SQL edit 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 산출물 레이아웃 기본값/최종편집본 본문 안정화

- 상태: 완료
- 사용자 요청: 산출물별 레이아웃 기본 선택을 강사 리포트형, 학생 분석지 필요 없음, 블로그 홍보형, 인스타 분석형으로 맞춘다. 최종편집본 본문이 JSON 조각처럼 복잡하게 보이지 않게 하고, 블록 `펼치기`를 누르면 바로 다시 닫히는 문제를 고친다.
- 이번 작업 결과: `defaultExamOutputLayoutChoices`를 강사 C(리포트형), 학생 X(필요 없음), 블로그 A(홍보형 글 구조), 인스타 B(7장 분석형)로 변경했다. 기존에 모든 산출물이 A안으로 저장된 레거시 값은 새 기본값으로 보정되게 했다. 학생 분석지에는 `필요 없음` 선택지와 미사용 와이어프레임을 추가했다.
- UI 보정: 최종편집본 블록의 `details`를 controlled `open` 상태가 아니라 `defaultOpen` 기반으로 바꿔 펼치기 직후 다시 닫히는 문제를 막았다. AI 응답이 본문에 JSON 필드를 함께 섞어 넣어도 `cleanFinalDocumentText`가 문단 본문만 남기도록 정리했다.
- 저장 주의: 기존 `examAnalyses[].finalDocument`와 `examAnalyses[].outputLayoutChoices` app_state 저장 구조를 그대로 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종편집본 블록 접힘 보정

- 상태: 완료
- 사용자 요청: 최종편집본에서 AI가 작성하는 범위를 설명하고, 최종편집본 하단이 너무 길어지지 않게 펼치기/접기로 볼 수 있게 한다.
- 이번 작업 결과: 최종편집본은 AI가 직접 PDF 한 장을 새로 쓰는 구조가 아니라, 저장된 AI 분석 필드(`oneLineSummary`, `examStructure`, `aiOverview`, `unitDistribution`, `typeClassification`, `killerProblems`, `studentAnalysisDraft` 등), 강사 인사이트, 문항분류표를 `createExamFinalDocumentFromAnalysis`가 표지/문단/표/차트/흐름도/문항 슬롯 블록으로 조립하는 구조임을 확인했다. 사용자는 이 블록을 최종 편집본에서 직접 수정한다.
- UI 보정: `ExamFinalDocumentBlockEditor`를 `details/summary` 기반 접힘 블록으로 전환했다. 표지와 첫 핵심 분석 블록만 기본으로 열고, 문항별 분류표 원본, 차트 데이터, 쎈 유형별 분류, 난이도 분석, 유사문항 표, 흐름도, 문항 삽입 슬롯 등 하단 블록은 기본 접힘 상태로 둔다. 각 블록 우측에 큰 `펼치기/접기` 텍스트를 표시하고, 위/아래/삭제 버튼은 접힘 토글과 충돌하지 않게 했다.
- 저장 주의: UI 편집 구조만 바꿨다. 기존 `examAnalyses[].finalDocument.blocks` app_state 저장 구조와 Supabase SQL 변경 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 문항검수 UI 고정과 Opus 분석 재작성

- 상태: 완료
- 사용자 요청: 문항별 분류표 MVP 상단 버튼들이 누락 후보/원본 선택에 따라 움직이지 않게 고정한다. 접힘 패널의 별도 펼치기 버튼 느낌을 없애고 우측 끝 큰 `펼치기/접기` 텍스트로 열고 닫게 한다. 분석 검토 단계에서는 Opus를 이용해 문항 검수 결과와 강사 인사이트를 합쳐 AI 분석결과를 다시 API 호출로 작성하고, 결과는 textarea 모달이 아니라 PDF 저장 가능한 한눈에 보는 보고서 형식으로 보여준다.
- 이번 작업 결과: 문항검수 상단 컨트롤을 `classificationSetupFields`와 `classificationSetupButtonRow`로 분리하고, 누락 후보 배지를 고정 슬롯으로 배치해 후보 번호가 달라져도 버튼 위치가 흔들리지 않게 했다. `details` 요약 패널은 `countBadge`식 버튼을 제거하고 우측 끝의 큰 `펼치기/접기` 텍스트와 선택적 메타 텍스트로 정리했다.
- Opus 재작성 흐름: 분석 검토 카드에 `Opus로 분석 결과 재작성`과 `보고서 보기`를 추가했다. 재작성 버튼은 현재 문항별 분류표 검수값, 강사 인사이트, 시험관리 컨텍스트를 묶어 기존 시험분석 API를 다시 호출한다. 완료 후 textarea 편집 모달이 아니라 `최종 보고서 미리보기`를 열어 PDF 저장/인쇄 가능한 형태로 확인한다.
- 서버 프롬프트 보강: `api/routes/examAnalysis.js`에 `formatClassificationRowsForPrompt`/`formatTeacherInsightsForPrompt`를 추가하고, 시험분석 프롬프트에 `[문항 검수 확정 데이터]`, `[강사 인사이트]`, `[검수 후 재작성 모드]`를 넣었다. 재작성 모드에서는 OCR보다 검수표와 강사 인사이트를 우선하도록 지시한다.
- 저장 주의: 새 Supabase SQL edit 없음. 기존 `examAnalyses` app_state 저장 경로를 사용하며, 재작성 시 기존 확정 문항분류표가 빈 AI 응답으로 덮이지 않도록 보존했다. 재작성 결과는 분석 필드에 저장되고 기존 최종 편집본은 비워 보고서 미리보기가 최신 AI 재작성 내용을 보여주게 했다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 237, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다. 로컬 확인용 Vite dev server는 `http://127.0.0.1:5173`에서 실행 중이다.

### 2026-06-30 P1. 시험분석 AI 모델 선택 설정 분리와 Opus 선택 허용

- 상태: 완료
- 사용자 요청: AI 모델 선택은 각 기능 화면이 아니라 설정에서 관리한다. 문항분류/누락보정 기본값은 Sonnet으로 두되, 서버가 Opus를 강제로 막지 않고 사용자가 설정에서 선택할 수 있게 한다. 3개년 종합 총평/최종 인사이트 단계는 Opus 기본값을 유지한다.
- 이번 작업 결과: `defaultAiSettings`에 `questionClassificationProvider`/`questionClassificationModel`을 추가하고, 설정 화면에 `문항분류·누락보정 AI` 행을 별도로 추가했다. 이 행은 Claude Sonnet을 기본 선택으로 두며, 필요하면 Claude Opus도 직접 선택할 수 있다. 기존 `시험분석 AI` 행은 3개년 종합 총평/최종 인사이트용 Opus 기본값 설명으로 정리했다.
- 서버 정책 변경: `api/routes/examAnalysis.js`에서 문항분류 요청의 Opus 강제 차단 로직을 제거했다. 이제 `server-default`일 때만 `ANTHROPIC_EXAM_CLASSIFICATION_MODEL`/`OPENAI_EXAM_CLASSIFICATION_MODEL` 기본값을 사용하고, 설정에서 명시 선택한 모델은 Opus 포함 그대로 통과한다.
- 호출 경로 정리: 문항별 분류표 생성, 누락 문항 재요청, 문항 크롭 보조 호출은 새 `questionClassification` 설정값을 사용한다. 숨은 문항정보 전용 분석 분기도 전체 시험분석 Opus가 아니라 문항분류 설정 기본값을 쓰도록 보정했다.
- 저장 주의: AI 설정은 기존 `app_state`의 `aiSettings` 저장 경로를 확장해서 사용한다. 새 Supabase SQL edit 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 236, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 쎈 유형별 분류 코드 오름차순 정렬

- 상태: 완료
- 사용자 요청: `쎈 유형별 분류` 표는 출제 빈도순이 아니라 쎈 유형 기준 코드 오름차순으로 정렬한다. 예: `03-01`이 `04-09`보다 위에 와야 한다.
- 이번 작업 결과: `summarizeQuestionSsenTypes` 정렬 기준을 기존 `출제 빈도 높은 순`에서 `쎈 유형 코드 숫자 오름차순`으로 변경했다. `SSEN-PROB-STAT-03-06`처럼 긴 코드가 들어와도 표시/정렬용 compact code인 `03-06`을 기준으로 비교한다. 코드가 없는 유형은 코드 있는 유형 뒤에서 한글 라벨순으로 정렬한다.
- 저장 주의: 표시/정렬 로직만 변경했다. 기존 `examAnalyses[].questionClassifications` 저장값과 Supabase 스키마 변경 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 분류표 누락 재요청/모델 제한/요약 UI 보정

- 상태: 완료
- 사용자 요청: 문항별 분류표에서 누락 문항만 재요청할 수 있게 하고, Opus는 3개년 종합 총평/최종 인사이트 단계에만 쓰게 제한한다. 모든 문항 페이지가 1p로 보이는 문제를 보정하고, 분류표 기반 요약을 상단으로 올리며, 긴 데이터는 접힘으로 볼 수 있게 한다. 쎈 유형 표시는 `SSEN-PROB-STAT-04-09`처럼 긴 공통 접두어 대신 `04-09` 중심으로 줄바꿈해 가독성을 높인다.
- 이번 작업 결과: 문항분류 API에 `missingQuestionNumbers`/`repairOnly` 모드를 추가해 비어 있는 번호만 재요청할 수 있게 했다. 프론트에는 `누락 문항만 재요청` 버튼과 누락 후보 표시를 추가했고, 재요청 시 PDF 전체 8장이 아니라 후보/마지막 페이지 위주 최대 4장만 보낸다. AI 이미지 입력 앞에 실제 원본 페이지 번호 텍스트를 함께 넣어 page 판단 근거를 강화했다.
- 페이지 보정: 기존 골격 행의 기본 page=1이 AI가 반환한 실제 page 값을 막는 병합 문제가 있었다. `mergeExamQuestionClassificationDrafts`에서 기존 page가 1이고 AI page가 2 이상이면 AI page를 반영하도록 수정했다.
- 모델 제한: `ANTHROPIC_EXAM_CLASSIFICATION_MODEL`/`OPENAI_EXAM_CLASSIFICATION_MODEL` 분류 전용 환경변수를 추가하고, 문항분류/누락 재요청/문항정보/크롭 보조 작업은 Opus 요청이 들어와도 Sonnet 계열 기본 모델로 대체한다. `examAnalysisModel`의 Opus는 3개년 종합 총평과 최종 인사이트용으로만 남겼다.
- UI 보정: 문항 검수 단계에서 `분류표 기반 요약`을 문항별 분류표 위로 올렸다. 요약과 큰 분류표는 `details` 접힘 패널로 전환했다. 쎈 유형 표시는 저장값은 유지하되 화면/최종문서에서 `04-09` + 유형명 줄바꿈 형태로 축약 표시한다.
- 저장 주의: 새 Supabase SQL edit 없음. 기존 `examAnalyses[].questionClassifications` app_state 저장 경로를 그대로 사용한다. `.env.example`에 분류 전용 AI 모델 환경변수 예시만 추가했다.
- 검증: `node --check src/domains/exams/questionClassification.js`, `node --check src/domains/exams/sourceMedia.js`, `node --check src/domains/exams/finalDocument.js`, `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 문항별 분류표 MVP 서술형 꼬리 문항 누락 보정

- 상태: 완료
- 사용자 요청: 문항별분류표 MVP에서 3개년 모두 마지막 서술형 2~4문항이 인식되지 않고, AI 요청 비용이 건당 약 0.32달러씩 빠지는 상황이라 Sonnet 사용 가능 여부와 추가 수정점을 확인한다.
- 판단: 분류표 UI/파서가 완전히 깨진 것이 아니라 AI 응답이 20~21/22행처럼 마지막 문항 일부를 생략하는 패턴이었다. 원인은 PDF 분류 입력이 앞쪽 8페이지만 보내는 구조라 긴 원본의 마지막 서술형 페이지가 빠질 수 있었고, 서버 프롬프트 JSON 예시도 요약 필드를 먼저 두어 토큰 부족 시 `classificationRows` 후반부가 잘리는 쪽으로 유도될 위험이 있었다.
- 이번 작업 결과: `src/domains/exams/sourceMedia.js`에 `getQuestionClassificationPageNumbers`를 추가해 8장 이미지 한도는 유지하되 긴 PDF에서는 앞쪽 페이지와 마지막 3페이지를 함께 보내도록 했다. `src/app/App.jsx`의 `buildClassificationPageImages`가 이 페이지 번호 선택을 사용한다. `api/routes/examAnalysis.js`의 문항분류 프롬프트는 `classificationRows`를 JSON 맨 앞에 두고, 출력 예산이 부족하면 요약 필드를 비우더라도 행 수는 줄이지 않도록 지시한다. 또한 첨부 페이지 번호와 마지막 2~4개 서술형/단답형 확인 지시를 프롬프트에 넣었다.
- 진단 보강: AI가 일부 번호를 빠뜨리면 `missingRowNumbers`를 서버 진단과 경고 문구에 포함한다. 프론트 진단 포맷도 누락 문항 번호를 표시해, 다음 재현 시 21/22 같은 상태가 어떤 번호 누락인지 바로 확인할 수 있다.
- 비용 판단: 문항별 분류표 MVP는 고급 추론보다 PDF/이미지 기반 구조화와 누락 없는 행 생성이 핵심이므로 Opus보다 Sonnet 계열로 운영하는 편이 적절하다. Opus는 최종 인사이트/3개년 종합 판단처럼 해석 품질이 더 중요한 단계에만 제한적으로 쓰는 방향이 좋다.
- 저장 주의: 새 Supabase SQL edit 없음. 기존 시험분석 저장 경로인 `examAnalyses[].questionClassifications`/`classificationRows` app_state 구조를 그대로 사용한다.
- 검증: `node --check src/domains/exams/sourceMedia.js`, `node --check src/domains/exams/questionClassification.js`, `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종문서 편집/수업일지 출결 helper 21차 모듈 분리

- 상태: 완료
- 사용자 요청: 구조분리/리팩터링을 이어가되, `App.jsx`에 남은 시험분석 최종문서 편집 영역과 수업일지 주변 도메인 로직을 우선순위로 본다.
- 판단: 시험분석 최종문서 생성/정규화 순수 로직은 이미 `src/domains/exams/finalDocument.js`에 있었지만, 최종 편집본 빌더/인쇄 JSX가 `App.jsx`에 남아 있었다. 또한 수업일지 출결 날짜 불일치 방어와 수동 출결 시간 보정 helper는 화면 JSX가 아니라 lesson 도메인 규칙이므로 분리 대상이었다.
- 이번 작업 결과: `src/domains/exams/finalDocumentEditor.jsx`를 추가해 `ExamFinalDocumentBuilder`, `ExamFinalDocumentPrint`, 내부 block/table/chart/flow/question slot editor를 이동했다. `App.jsx`는 최종문서 생성 wrapper와 저장 콜백만 들고, 빌더에는 `createDocumentFromAnalysis` prop으로 프로젝트별 제목/메타/크롭 이미지 주입을 넘긴다. `src/domains/lessons/attendance.js`를 추가해 `getAttendanceDateMismatch`, `clearAttendanceFields`, `getAttendanceDisplay`, `hasMissingCheckOut`, 수동 등원/하원 시간 보정 helper를 이동했다. `App.jsx` 크기는 약 20,569줄에서 20,003줄로 줄었다.
- 테스트 보정: 정적 운영 테스트가 새 `finalDocumentEditor.jsx`와 `lessons/attendance.js`를 함께 읽도록 `scripts/scenario-tests-production.cjs`를 보정했다. 출결 관련 검사는 helper 원천은 lesson 도메인 소스에서, 화면 연결은 App.jsx에서 확인하도록 나눴다.
- 저장 주의: 순수 프론트 구조 분리만 수행했다. 시험분석은 기존 `examAnalyses[].finalDocument`/`questionClassifications` app_state 저장 경로를 그대로 쓰고, 수업일지 출결은 기존 `lesson_student_records` 저장 흐름을 그대로 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check src/domains/lessons/attendance.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). `.jsx` 파일 직접 `node --check`는 Node가 `.jsx` 확장자를 알 수 없어 사용하지 않고 Vite 빌드로 JSX 문법을 검증했다. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 error boundary 20차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: `LessonJournalErrorBoundary`는 수업일지 렌더 오류를 잡는 독립 React class 컴포넌트이며, `App.jsx`의 상태/저장 로직과 직접 결합되어 있지 않다. 수업일지 화면 본문과 오류 경계 책임을 분리하기 위해 별도 lesson 도메인 컴포넌트로 이동했다.
- 이번 작업 결과: `src/domains/lessons/LessonJournalErrorBoundary.jsx`를 추가하고 `LessonJournalErrorBoundary`를 이동했다. `src/app/App.jsx`는 해당 컴포넌트 import만 사용하도록 정리했고, React `Component` import를 제거했다. 파일 크기는 약 20,590줄에서 20,569줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 수업/과제 프론트 소스를 집계할 때 `src/domains/lessons/LessonJournalErrorBoundary.jsx`도 함께 읽도록 보정했다. `92d lesson journal render errors show a fallback instead of a blank modal` 검사는 분리된 error boundary 파일과 기존 fallback 화면을 함께 확인한다.
- 저장 주의: 순수 프론트 컴포넌트 구조 분리만 수행했다. Supabase 저장 경로와 수업일지 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). `.jsx` 파일 직접 `node --check`는 Node가 `.jsx` 확장자를 알 수 없어 사용하지 않고 Vite 빌드로 JSX 문법을 검증했다. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 basic labels 19차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 요일 라벨, 출결 라벨, 숙제 상태 라벨은 수업일지 화면 전역에서 쓰는 정적 표시 규칙이다. `App.jsx`에 남겨두면 출결/숙제 UI 수정 시 화면 코드와 라벨 원천을 함께 뒤져야 하므로 `lessons` 도메인 라벨 파일로 분리했다.
- 이번 작업 결과: `src/domains/lessons/labels.js`를 추가하고 `dayLabels`, `attendanceLabels`, `homeworkLabels`를 이동했다. `src/app/App.jsx`는 해당 라벨 import만 사용하도록 정리했고, 파일 크기는 약 20,619줄에서 20,590줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 수업/과제 프론트 소스를 집계할 때 `src/domains/lessons/labels.js`도 함께 읽도록 보정했다. 출결 알림톡 라벨 검사는 이동된 라벨 원천까지 확인하도록 수정했다.
- 저장 주의: 순수 프론트 정적 라벨 구조 분리만 수행했다. Supabase 저장 경로와 출결/숙제 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/lessons/labels.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 수업일지 assignment status helper 18차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 과제 상태 옵션, 라벨, 별칭, 학부모/학생용 문구, 정규화 helper는 수업일지 화면 JSX와 직접 결합된 상태가 아니라 여러 알림/숙제 흐름에서 공유되는 도메인 규칙이다. `getAssignmentStatusForMessage`는 `getHomeworkAssignmentStatus` fallback에 의존하므로 `App.jsx`에 남기고, 순수 규칙만 먼저 분리했다.
- 이번 작업 결과: `src/domains/lessons/assignmentStatus.js`를 추가하고 `assignmentStatusOptions`, `assignmentStatusLabels`, `assignmentStatusParentMessages`, `assignmentStatusStudentMessages`, `normalizeAssignmentStatusValue`, `getAssignmentStatusParentMessage`, `getAssignmentStatusStudentMessage`, `getAssignmentStatusMessage`, `getHomeworkStatusFromAssignmentStatus`, `isAssignmentStatusHomeworkMakeupCandidate`를 이동했다. `src/app/App.jsx`는 해당 helper import만 사용하도록 정리했고, 파일 크기는 약 20,709줄에서 20,619줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 수업/과제 프론트 소스를 집계할 때 `src/domains/lessons/assignmentStatus.js`도 함께 읽도록 보정했다. `22g`, `41c`, `53` 검사는 화면 흐름과 분리된 문구/상태 helper를 함께 확인하도록 수정했다.
- 저장 주의: 순수 프론트 도메인 helper 구조 분리만 수행했다. Supabase 저장 경로와 `lesson_student_records`, `homeworks` 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/lessons/assignmentStatus.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험 후 제출 self-check options 17차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 시험 후 제출 자기점검 폼의 감정/점수/아쉬운 이유/공부 어려움/학원 도움 보기 목록은 화면 상태나 저장 로직이 아니라 정적 옵션 데이터다. `App.jsx` 상단에서 제거해 학생 제출 폼 JSX와 폼 옵션 원천을 분리했다.
- 이번 작업 결과: `src/domains/exams/postSubmissionOptions.js`를 추가하고 `examPostFeelingOptions`, `examPostScaleOptions`, `examPostRegretReasonOptions`, `examPostStudyDifficultyOptions`, `examPostAcademyHelpOptions`를 이동했다. `src/app/App.jsx`는 기존 변수명을 import해서 동일하게 사용하도록 유지했다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석/시험 제출 프론트 소스를 집계할 때 `src/domains/exams/postSubmissionOptions.js`도 함께 읽도록 보정했고, `22k exam post form includes all Tally self-check fields` 검사를 분리된 소스 기준으로 변경했다.
- 저장 주의: 순수 프론트 정적 옵션 구조 분리만 수행했다. Supabase 저장 경로와 `examPostSubmissions` 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/postSubmissionOptions.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 final question crop view 16차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 최종문서 문항 슬롯에서 쓰는 원문항 크롭 이미지 표시 컴포넌트는 cropBox 정규화와 렌더링만 담당해 최종문서 편집 상태와 분리하기 쉽다. 이후 최종문서 builder/print 컴포넌트 분리의 전 단계로 떼어냈다.
- 이번 작업 결과: `src/domains/exams/questionCropView.jsx`를 추가하고 `FinalQuestionCropImage`를 이동했다. `src/app/App.jsx`는 해당 컴포넌트 import만 사용하도록 정리했고, 파일 크기는 약 19,553줄에서 19,533줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/questionCropView.jsx`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 컴포넌트 구조 분리만 수행했다. Supabase 저장 경로와 cropBox/finalDocument 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 detail section config 15차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 시험분석 상세 편집 모달의 섹션/필드 정의는 화면 상태나 저장 로직이 아니라 정적 설정값이다. `ExamAnalysisCenter` 내부에서 제거해 이후 모달 본문 분리와 검토 필드 관리가 쉬워지도록 했다.
- 이번 작업 결과: `src/domains/exams/detailSections.js`를 추가하고 `examAnalysisDetailSections`를 이동했다. `src/app/App.jsx`는 해당 설정 import만 사용하도록 정리했고, 파일 크기는 약 19,577줄에서 19,553줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/detailSections.js`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 설정값 구조 분리만 수행했다. Supabase 저장 경로와 분석 상세 필드 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/detailSections.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 question insight table component 14차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 문항분석표, 단원별 출제표, 쎈 유형별 분류표, 부교재·유사문항 활용표, 학생 대비전략표 렌더링은 `ExamAnalysisCenter`의 저장/AI 실행 상태와 분리된 표시 계층이다. 문항별 분류표 오류 추적 시 표 렌더링과 데이터 조립을 구분하기 위해 별도 JSX 모듈로 이동했다.
- 이번 작업 결과: `src/domains/exams/questionInsight.jsx`를 추가하고 `ExamQuestionInsightTables`, `ExamStrategyFlow`를 이동했다. `src/app/App.jsx`는 해당 컴포넌트 import만 사용하도록 정리했고, 파일 크기는 약 19,815줄에서 19,577줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/questionInsight.jsx`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 컴포넌트 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].questionItems`, `questionClassifications`, `finalDocument` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 report preview component 13차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 산출물 미리보기 파서를 분리한 뒤에도 초기 AI 초안 보기, 리포트 텍스트 렌더링, 읽기용 미리보기, 인스타 카드뉴스 미리보기, 프리뷰 카드 UI가 `App.jsx`에 남아 있었다. 이 UI는 저장/AI 실행 상태와 분리되어 있어 독립 JSX 모듈로 옮겨도 위험이 낮다.
- 이번 작업 결과: `src/domains/exams/reportPreview.jsx`를 추가하고 `ExamAnalysisInitialView`, `ExamAnalysisReportSection`, `ExamAnalysisReportText`, `ExamAnalysisReadablePreview`, `ExamAnalysisInstagramPreview`, `AnalysisOutputPreviewCard`를 이동했다. `copyTextToClipboard`는 `src/domains/exams/outputPreview.js` 공용 helper로 이동했다. `src/app/App.jsx`는 해당 컴포넌트 import만 사용하도록 정리했고, 파일 크기는 약 19,959줄에서 19,815줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 report preview JSX 모듈까지 함께 읽고, 미리보기 컴포넌트 존재 여부를 `App.jsx` 단일 파일이 아니라 시험분석 프론트 전체에서 확인하도록 보정했다.
- 저장 주의: 순수 프론트 컴포넌트 구조 분리만 수행했다. Supabase 저장 경로와 최종 산출물 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/outputPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 output preview parser 12차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 산출물 미리보기 컴포넌트 안에 마크다운 표 파싱, 텍스트 정리, 인스타 카드뉴스 슬라이드 파싱 helper가 함께 있어 출력 화면 수정 시 파서와 JSX를 동시에 읽어야 했다. 컴포넌트 이동 전 단계로 순수 문자열 파서만 먼저 분리했다.
- 이번 작업 결과: `src/domains/exams/outputPreview.js`를 추가하고 `cleanPreviewText`, `isMarkdownTableLine`, `isMarkdownTableDivider`, `parseMarkdownTableRow`, `parseInstagramSlides`를 이동했다. `src/app/App.jsx`는 해당 helper import만 사용하도록 정리했고, 파일 크기는 약 19,994줄에서 19,959줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/outputPreview.js`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 문자열 파서 구조 분리만 수행했다. Supabase 저장 경로와 최종 산출물 저장 구조는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/outputPreview.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 output layout component 11차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 시험분석 산출물 레이아웃 선택 UI는 `value/onChange`만 받는 독립 컴포넌트라 `ExamAnalysisCenter` 상태/저장 로직과 분리해도 위험이 낮다. 최종 산출물 UI 분리의 첫 단계로 레이아웃 선택 컴포넌트부터 떼어냈다.
- 이번 작업 결과: `src/domains/exams/outputLayouts.jsx`를 추가하고 `examOutputLayoutOptions`, `ExamOutputLayoutPlanner`, 내부 wireframe 컴포넌트를 이동했다. `src/app/App.jsx`는 `ExamOutputLayoutPlanner` import만 사용하도록 정리했고, 파일 크기는 약 20,089줄에서 19,994줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/outputLayouts.jsx`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 컴포넌트 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].outputLayoutChoices` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 기본값/default prompt 10차 모듈 분리

- 상태: 완료
- 사용자 요청: 2026-06-30 오후 4시까지 구조분리 및 리팩터링을 계속 진행한다.
- 판단: 시험분석 `App.jsx` 상단에 긴 기본 프롬프트와 신규 분석 객체 생성 로직이 남아 있어, 화면 코드에서 실제 UI/상태 흐름을 읽는 데 방해가 됐다. 동작을 바꾸지 않고 학원명과 시험 주기 라벨만 주입하는 defaults 경계로 분리했다.
- 이번 작업 결과: `src/domains/exams/defaults.js`를 추가하고 `createDefaultExamAnalysisPrompt`, `createDefaultExamAnalysis`를 이동했다. `src/app/App.jsx`에는 기존 함수명 wrapper만 남겼고, 파일 크기는 약 20,233줄에서 20,089줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 기본 프롬프트 문자열과 신규 분석 기본값을 `src/domains/exams/defaults.js`까지 함께 검사하도록 보정했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses`, `examAnalysisFolders`, `app_state` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/defaults.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 문항정보/OCR helper 9차 모듈 분리

- 상태: 완료
- 사용자 요청: 사용자가 자리를 비워도 구조분리를 계속 진행하고 커밋/푸시한다.
- 판단: 시험분석 문항별 분류표 MVP 이후 오류 원인을 좁히려면 `ExamAnalysisCenter` 안에 남아 있던 문항 생성, AI 초안 병합, OCR 스니펫 기반 배점/형식 추론 로직을 화면 코드에서 분리해야 한다. AI 재호출 구조는 건드리지 않고 이미 돌아가는 프론트 보정 로직만 도메인 모듈로 옮겼다.
- 이번 작업 결과: `src/domains/exams/questionItems.js`를 추가하고 `normalizeAiQuestionDrafts`, `mergeAiQuestionDrafts`, `createExamQuestionItemsFromCount`, 문항 번호 누락 확인 helper, OCR 텍스트 스니펫 추출/점수화, `applyHeuristicQuestionInfoDrafts`, `buildQuestionInsightText`를 이동했다. `src/app/App.jsx`는 새 모듈 import만 사용하도록 정리했고, 파일 크기는 약 21,726줄에서 20,233줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 프론트 소스를 집계할 때 `src/domains/exams/questionItems.js`도 함께 읽도록 보정했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].questionItems`, `questionTargetCount`, `questionCompositionsBySource`, `questionClassifications` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/questionItems.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 vision media/file helper 8차 모듈 분리

- 상태: 완료
- 사용자 요청: 다음 우선순위대로 구조분리를 계속 진행한다.
- 판단: 시험분석 분류표/크롭 실행은 PDF 페이지와 이미지 원본을 AI 입력용 JPEG data URL로 만드는 browser media helper를 공통으로 사용한다. API helper 분리 다음 단계로 이 변환 경계를 분리해 `ExamAnalysisCenter` action hook으로 옮길 준비를 했다.
- 이번 작업 결과: `src/shared/utils/file.js`를 추가하고 `readFileAsDataUrl`을 이동했다. `src/domains/exams/sourceMedia.js`에 `canvasToVisionImageDataUrl`, `renderPdfPageToVisionImageDataUrl`, `imageElementToVisionImageDataUrl`, `imageUrlToVisionImageDataUrl`를 이동했다. `src/app/App.jsx`는 import만 사용하도록 정리했고, 파일 크기는 약 21,804줄에서 21,726줄로 줄었다.
- 저장 주의: browser helper 위치만 변경했다. Supabase 저장 경로, API endpoint, PDF/이미지 업로드 흐름은 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/sourceMedia.js`, `node --check src/shared/utils/file.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 API helper 7차 모듈 분리

- 상태: 완료
- 사용자 요청: 다음 우선순위대로 구조분리를 계속 진행한다.
- 판단: `ExamAnalysisCenter` 실행/저장 action hook을 만들기 전에 API endpoint와 payload 조립 경계를 먼저 분리해야 한다. 호출부 함수명은 유지하고 실제 시험분석 원본 업로드, 문항 크롭/문항정보/분류표 AI 요청, 원본 open/render URL 생성 helper를 도메인 API 모듈로 이동했다.
- 이번 작업 결과: `src/domains/exams/api.js`를 추가하고 `uploadExamAnalysisSourceFile`, `requestExamQuestionCropDraft`, `requestExamQuestionInfoTextDraft`, `requestExamQuestionClassificationDraft`, `getExamAnalysisSourceOpenUrl`, `getExamAnalysisSourceRenderUrl`를 이동했다. `src/app/App.jsx`에는 기존 함수명 wrapper만 남겼고, 다음 단계에서 `useExamAnalysisActions`로 묶을 API 경계가 더 선명해졌다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 API endpoint 문자열과 helper 이름을 새 도메인 모듈까지 함께 검사하도록 보정했다.
- 저장 주의: API 호출 wrapper 분리만 수행했다. Supabase 저장 경로와 서버 endpoint는 기존 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/api.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 AI 상태/파싱 helper 6차 모듈 분리

- 상태: 완료
- 사용자 요청: 구조분리를 사용자가 매번 지시하지 않아도, 전체 코드 우선순위를 보며 연쇄적으로 계속 진행한다.
- 판단: 시험분석 분류표/AI 응답 문제를 추적하려면 화면 컴포넌트와 AI 응답 파싱·대기 상태·초기 필드 보존 로직이 분리되어 있어야 한다. 이번에는 `ExamAnalysisCenter` 내부 JSX를 건드리기 전에 AI 상태/파싱 helper만 도메인 모듈로 이동했다.
- 이번 작업 결과: `src/domains/exams/analysisState.js`를 추가하고 `normalizeExamAnalysisAiFields`, `parseStructuredAnalysisText`, `parseLooseStructuredAnalysisText`, `cleanAnalysisFieldText`, `removeFailedAttachmentBlocks`, `inferExamAnalysisMetadataFromFileName`, `repairDisconnectedExamAnalysisRuns`, `normalizeExamAnalysisForDisplay`, AI 대기 상태/리포트 메타/초기 필드 helper를 이동했다. `src/app/App.jsx`에는 런타임 세션 ID와 학원명, 기본 프롬프트를 주입하는 작은 wrapper만 남겼고, 파일 크기는 약 22,071줄에서 21,804줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 AI 분석 상태/파싱 helper를 새 도메인 모듈까지 함께 검사하도록 보정했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses`, `aiInitialFields`, `questionClassifications`, `app_state` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/analysisState.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 라이브러리/ID helper 5차 모듈 분리

- 상태: 완료
- 사용자 요청: 구조분리를 사용자가 매번 지시하지 않아도, 전체 코드 우선순위를 보며 연쇄적으로 계속 진행한다.
- 판단: `ExamAnalysisCenter`를 직접 쪼개기 전에 학교/학년/고사 폴더 트리와 ID 생성 helper를 먼저 분리해야 화면 JSX, 저장 핸들러, 라이브러리 트리 로직의 경계가 선명해진다. `safeIdPart`, `shortStableHash`는 시험분석 외 시험대비/학교일정/문제집 ID에도 쓰이므로 공용 util로 분리했다.
- 이번 작업 결과: `src/shared/utils/id.js`를 추가하고 `safeIdPart`, `shortStableHash`를 이동했다. `src/domains/exams/library.js`를 추가하고 시험분석 폴더/학교 트리 helper(`createExamAnalysisFolderId`, `normalizeExamAnalysisFolder`, `buildExamAnalysisFolderList`, `buildExamAnalysisLibraryTree` 등)를 이동했다. `src/app/App.jsx`에는 현재 시험 주기 라벨을 주입하는 `createExamAnalysisFolderDraft` wrapper만 남겼고, 파일 크기는 약 22,350줄에서 22,071줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 시험분석 라이브러리 helper와 공용 ID helper를 새 모듈까지 함께 검사하도록 보정했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses`, `examAnalysisFolders`, `app_state` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/shared/utils/id.js`, `node --check src/domains/exams/library.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 원본/크롭 helper 4차 모듈 분리

- 상태: 완료
- 사용자 요청: 시험분석 구조 분리를 이어서 진행한다.
- 판단: 최종문서 생성 분리 이후 `App.jsx`에 남아 있던 원본 파일 판별, PDF/이미지 source context, cropBox 정규화, 휴리스틱 크롭 초안 생성, 분류표 파싱 진단 formatter는 화면 이벤트보다 도메인 helper 성격이 강하다. 동작을 바꾸지 않고 작은 단위로 이동해 이후 오류 원인 추적 범위를 줄였다.
- 이번 작업 결과: `src/domains/exams/sourceMedia.js`를 추가하고 `getExamAnalysisSourceFileId`, `isImageExamAnalysisSource`, `isPdfExamAnalysisSource`, `getExamAnalysisQuestionSourceContext`, `normalizeCropBox`, `buildHeuristicQuestionCropBoxes`를 이동했다. `formatQuestionClassificationParseDiagnostics`는 `src/domains/exams/questionClassification.js`로 이동했다. `src/app/App.jsx`는 기존 함수명을 유지하는 얇은 wrapper/import 구조로 바뀌었고, 파일 크기는 약 22,469줄에서 22,350줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 원본/크롭 helper와 파싱 진단 formatter를 `App.jsx` 안에서만 찾지 않고 시험분석 도메인 모듈까지 함께 검사하도록 보정했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].sourceFiles`, `questionClassifications`, `questionItems`, `finalDocument` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/sourceMedia.js`, `node --check src/domains/exams/questionClassification.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종문서 생성 로직 3차 모듈 분리

- 상태: 완료
- 사용자 요청: 시험분석 구조 분리를 계속 진행한다.
- 판단: 2차 분리에서 남겨둔 `createExamFinalDocumentFromAnalysis`는 최종 편집본 생성의 큰 본문이지만, 원본 이미지 URL과 리포트 제목/메타는 App 쪽 helper에 의존한다. 동작을 바꾸지 않기 위해 생성 본문은 도메인 모듈로 옮기고, App에는 기존 함수명 wrapper를 남겨 필요한 helper를 옵션으로 주입했다.
- 이번 작업 결과: `src/domains/exams/finalDocument.js`에 `createExamFinalDocumentFromAnalysis(analysis, options)`를 추가했다. `src/app/App.jsx`의 기존 함수는 `createExamFinalDocumentFromAnalysisBase`를 호출하는 얇은 wrapper로 축소했다. 구조 분리 후 정적 시나리오 테스트가 App 파일 하나만 보던 최종문서/분류표 문자열 검사를 시험분석 도메인 모듈까지 보도록 보정했다. `src/app/App.jsx`는 약 22,604줄에서 22,469줄로 줄었다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].finalDocument`, `examAnalyses[].questionClassifications` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check src/domains/exams/questionClassification.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 최종문서 helper 2차 모듈 분리

- 상태: 완료
- 사용자 요청: 이전 구조 분리에 이어 다음 구조 분리를 진행한다.
- 판단: `createExamFinalDocumentFromAnalysis` 전체를 바로 옮기면 원본 이미지 URL, cropBox, 리포트 제목/메타 등 화면 helper와 얽힌 범위가 커진다. 우선 동작 보존이 쉬운 순수 helper인 문항 구성 정규화, 점수 계산, 단원/쎈유형 요약, 최종문서 블록 정규화, 기존 분류표 압축 로직을 별도 모듈로 분리했다.
- 이번 작업 결과: `src/domains/exams/finalDocument.js`를 추가하고 `normalizeExamOutputLayoutChoices`, `normalizeExamQuestionComposition`, `parseExamScoreValue`, `formatQuestionScoreWithWeight`, `summarizeQuestionUnits`, `summarizeQuestionSsenTypes`, `createFinalDocumentId`, `getExamStrategyFlowNodes`, `createExamFinalClassificationTableRows`, `normalizeExamFinalDocument`, `compactFinalClassificationTableBlock`를 이동했다. `normalizeExamQuestionItems`는 `src/domains/exams/questionClassification.js`로 이동했다. `src/app/App.jsx`는 약 22,901줄에서 22,604줄로 줄었다.
- 테스트 보정: 구조 분리 후 정적 시나리오 테스트가 `defaultExamOutputLayoutChoices`를 `App.jsx` 안에서만 찾던 문제를 수정해 시험분석 도메인 모듈 소스까지 함께 검사하도록 했다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].questionClassifications`와 `finalDocument` 그대로이며 새 SQL edit 필요 없음.
- 검증: `node --check src/domains/exams/finalDocument.js`, `node --check src/domains/exams/questionClassification.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 시험분석 분류표 helper 1차 모듈 분리

- 상태: 완료
- 사용자 요청: 큰 파일 때문에 오류 원인 추적이 어려우므로 추천 순서대로 코드 분리를 진행한다.
- 판단: 동작을 바꾸기 전에 `src/app/App.jsx`에서 시험분석 분류표의 순수 helper부터 분리하는 것이 가장 안전하다. AI 호출, 저장, 화면 이벤트는 그대로 두고, 옵션/태그/쎈 유형/분류 행 생성·정규화·병합 함수만 별도 모듈로 옮겼다.
- 이번 작업 결과: `src/domains/exams/questionClassification.js`를 추가하고 시험문항 옵션, 태그 정규화, 쎈 유형 태그 처리, `createExamQuestionItem`, `createExamQuestionClassificationRow`, `normalizeExamQuestionClassificationRows`, `mergeExamQuestionClassificationDrafts`, `classificationRowsToInsightItems`를 이동했다. `src/app/App.jsx`는 같은 이름들을 import해서 쓰도록 바꿨고, 파일 크기는 약 23,263줄에서 22,901줄로 줄었다.
- 저장 주의: 순수 프론트 코드 구조 분리만 수행했다. Supabase 저장 경로는 기존 `examAnalyses[].questionClassifications` 그대로이며 새 SQL edit 필요 없음.
- 검증: `git diff --check`, `npm run build`, `npm run test:production` 통과(total 236, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P1. 배포 반영 확인과 공개 메타 브랜드명 정리

- 상태: 완료
- 사용자 요청: `AGENTS.md`와 `docs/next-session/README.md`를 읽고 시험분석 문항별 분류표와 수업일지 출결 안정화 이후 작업을 이어간다.
- 확인 결과: 운영 프론트 `https://academy-os-blue.vercel.app`와 출결 전용 경로 `/attendance`가 200으로 응답했고, 운영 번들에 `미래 수업에는 출결을 기록하지 않습니다.`, `AI가 분류표 행 없이 요약 JSON만 반환했습니다`, `classificationReviewTable`, `단원 / 쎈 유형`, `난이도 / 역할` 등 최근 시험분석/출결 안정화 문자열이 포함되어 최신 기능 배포 반영을 확인했다. 운영 API `/health`, `/api/core/status`, `/api/integrations/status`도 정상 응답했고 AI/알림톡 설정은 구성 완료 상태였다.
- 이번 작업 결과: 공개 HTML title/OG/Twitter title에 남아 있던 `koh_you_math os`, `koh_you_math_attendance`를 각각 `으뜸수학 고태영T Academy OS`, `으뜸수학 고태영T 출결`로 바꿨다. `koh_you_math`는 내부 식별자/URL/환경변수에만 남긴다는 제품 규칙에 맞춘 변경이다. 같은 회귀가 반복되지 않도록 `scripts/scenario-tests-production.cjs`에 공개 페이지 메타가 학원 브랜드명으로 유지되는지 검사하는 항목을 추가했다.
- 저장 주의: HTML 메타와 테스트 변경만 있으므로 Supabase 저장 경로 또는 SQL edit 필요 없음. 시험분석 분류표는 계속 기존 `app_state.examAnalyses[].questionClassifications`, 출결은 기존 `lesson_student_records` 흐름을 사용한다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 236, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-30 P2. 다음 세션 인수인계 문서 최신화

- 상태: 완료
- 사용자 요청: 다음 대화 세션에 넘길 파일을 준비한다.
- 이번 작업 결과: `docs/next-session/README.md`를 최신 기능 푸시 커밋 `6482869`, 직전 핵심 커밋 `f2370ee`/`5453869`, 검증 기록, 시험분석 문항별 분류표 원인 분석/확인 기준, 수업일지 출결 오기록 원인/확인 기준 중심으로 갱신했다. 다음 세션 시작 문장도 시험분석 분류표와 수업일지 출결 안정화 이후 작업을 함께 이어받도록 수정했다.
- 저장 주의: 문서만 변경했다. 새 Supabase SQL edit 필요 없음.
- 검증: `git diff --check` 통과. 코드/운영 흐름 변경이 아니므로 `npm run test:production`과 `npm run build`는 이번 문서-only 커밋에서 재실행하지 않았고, 최신 기능 검증 결과는 handoff 문서에 유지했다.

### 2026-06-29 P1. 시험분석 분류표/문항분석표 가독성 보정

- 상태: 완료
- 사용자 확인: AI 분류표 생성은 `AI 응답 20개 · 분류 20개`까지 성공했지만, 검수표의 쎈 유형 입력칸이 잘리고 최종 문항분석표가 8~10컬럼을 좁은 폭에 넣어 글자가 한 글자씩 세로로 떨어졌다.
- 판단: 이번 문제는 파싱 실패가 아니라 표 렌더링 문제다. 같은 `analysisPreviewTable`을 검수용 대형 입력표, 화면 요약표, 최종 보고서 표가 공용으로 쓰면서 각 사용처에 맞는 컬럼 폭과 요약 구조가 없었다.
- 이번 작업 결과: 문항 검수표에 `classificationReviewTable` 전용 폭을 적용하고 쎈 주유형/보조유형 입력을 2줄 textarea로 바꿨다. 문항분석표는 `문항/배점/단원·쎈유형/난이도·역할/검수 메모` 5컬럼으로 압축했다. 최종 편집본의 `문항별 분류표 원본`은 새로 생성할 때 6컬럼 요약형으로 만들고, 기존 10컬럼 편집본도 출력 시 자동 압축한다. 표 셀에는 `word-break: keep-all`, `pre-line`, 전용 min-width를 적용해 한글이 세로로 찢어지지 않게 했다.
- 저장 주의: 기존 `examAnalyses[].questionClassifications`와 `finalDocument` 구조를 사용한다. 기존에 저장된 10컬럼 최종 편집본도 출력 시 압축하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 235, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-29 P1. 시험분석 분류표 AI 요약-only 응답 원인 노출과 부분 행 복구

- 상태: 완료
- 사용자 확인: `AI 분류표 파싱 실패 · 분류 행 0/22개` 진단에서 원문 시작은 `{ "classificationSummary": ... }` 형태로 보였지만 `AI 원문: 0자`, `상위 키: 없음`, `분류 후보 경로: 없음`으로 표시되어 정확한 실패 원인이 충분히 드러나지 않았다.
- 원인/판단: 이번 응답은 이미지 입력이 완전히 빠진 문제가 아니라, AI가 `classificationRows` 배열보다 `classificationSummary` 요약을 먼저 생성했고 표 행 배열을 누락했거나 JSON 응답이 끝까지 닫히지 않은 상태로 보인다. 기존 파서는 JSON 전체 파싱이 실패하면 top-level key와 `classificationRows` 키 존재 여부를 감지하지 못했고, 프론트는 raw preview가 있어도 `rawTextLength`가 없으면 0자로 표시했다.
- 이번 작업 결과: 문항별 분류 프롬프트에서 `classificationRows 1~목표문항수` 전 행 반환을 최우선 조건으로 올리고, 요약만 반환하면 실패라고 명시했다. 서버 파서에는 JSON 키 감지, 중괄호/배열 balance, `classificationRows`/`questionClassifications` 키 존재 여부, 잘림 가능성 진단을 추가했다. JSON 전체가 깨져도 `classificationRows: [` 안에 완성된 row 객체가 있으면 부분 행을 복구한다. 프론트 진단에는 `행 배열 키`, `JSON 형태`, `감지 키`, `부분 행 복구`, `요약 JSON만 반환/응답 잘림` 판정을 표시한다.
- 저장 주의: 기존 `examAnalyses[].aiInitialFields.questionClassificationDebug` 저장 경로만 사용한다. 새 Supabase SQL edit 필요 없음.
- 다음 확인: 배포 반영 후 같은 PDF로 한 번 더 실행하면, 행이 여전히 0개일 때 `행 배열 키 없음`이면 AI가 요약만 반환한 것이고, `classificationRows 있음 + 부분 행 복구 0행 + bracket/brace 양수`이면 응답 잘림 또는 행 객체 미완성으로 볼 수 있다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 234, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-29 P1. 수업일지 출결 날짜 불일치 표시와 키오스크 미래수업 오기록 방지

- 상태: 완료
- 사용자 요청: 오늘자 출결을 찍지 않았는데 2026-06-29 창동고 직전수업 수업일지에 등원/하원 출결이 보이는 문제를 확인한다.
- 원인/판단: 운영 Supabase `lesson_student_records` 확인 결과, 2026-06-29 수업 레코드에 `checkInAt/checkOutAt`이 2026-06-27인 출결이 저장되어 있었다. 직접 원인은 출결 키오스크가 오늘 수업을 찾지 못할 때 학생이 포함된 전체 수업을 날짜 내림차순으로 정렬해 미래 수업까지 fallback으로 잡던 로직이다. 이 때문에 6/27 출결이 6/29 직전수업 및 7/10 정규수업 레코드에 붙을 수 있었다.
- 이번 작업 결과: 출결 키오스크는 더 이상 미래/최근 수업 fallback을 사용하지 않고, 오늘 학생 배정 수업 또는 오늘 기본반 수업이 없으면 `오늘 수업 일정이 없습니다. 미래 수업에는 출결을 기록하지 않습니다.`로 중단한다. 수업일지 표와 출결 모달은 수업 날짜와 `checkInAt/checkOutAt`의 한국 날짜가 다르면 초록 출결로 보이지 않고 `일자 불일치` 경고로 표시한다. 불일치 기록을 수동 저장하거나 수업일지 행을 다시 저장할 때는 출결 필드를 비운 뒤 저장해 오염값이 계속 퍼지지 않게 했다.
- 운영 데이터 조치: 운영 API 기준 날짜 불일치 출결 4건을 확인했고, 출결 필드만 `pending`/빈 시간으로 정리했다. 대상은 2026-06-29 창동고 고1 직전수업 김룡기/최선호, 2026-07-10 월수금 4-7반 김예나/조윤빈이다. 정리 후 날짜 불일치 출결은 0건으로 확인했다.
- 저장 주의: 기존 `lesson_student_records` 출결 필드만 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 234, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-29 P1. 시험분석 AI 분류표 0행 파싱 진단 노출

- 상태: 완료
- 사용자 요청: `AI 분류표 생성`이 계속 0행으로 보이므로, AI를 다시 호출하는 복구가 아니라 현재 한 번의 호출에서 무엇이 잘못됐는지 드러나게 한다.
- 판단: 반복 문제의 핵심은 AI 응답 파싱 결과가 0행이어도 서버가 기존 분류표 골격을 fallback으로 반환하고, 프론트가 이를 `생성 완료`처럼 표시하던 점이다. 이 상태에서는 JSON 파싱 실패, 응답 경로 불일치, 응답 잘림, 이미지 미전송 여부를 구분할 수 없다.
- 이번 작업 결과: `/api/ai/exam-question-classification` 응답에 `parseDiagnostics`와 `rawTextPreview`를 추가했다. 진단에는 JSON 파싱 방식/오류, 원문 길이와 시작부, 상위 키, 후보 경로별 배열/객체 존재 여부, 이미지 입력 장수, seed row 수가 포함된다. 프론트는 `classificationRowCount === 0`이면 더 이상 `문항별 분류표 생성 완료`로 처리하지 않고 `AI 분류표 파싱 실패`를 표시하며, 진단 내용을 `aiInitialFields.questionClassificationDebug`에 저장한다.
- 저장 주의: 기존 `examAnalyses[].aiInitialFields` app_state 문서 안에 짧은 진단 preview만 저장한다. 새 Supabase SQL edit 필요 없음.
- 다음 확인: 배포 반영 후 같은 PDF로 `AI 분류표 생성`을 한 번 더 누르고, 화면에 표시되는 `JSON 파싱`, `상위 키`, `분류 후보 경로`, `원문 시작`을 확인해 실제 원인이 `fields.classificationRows` 경로 불일치인지, JSON 잘림인지, 이미지 입력 누락인지 판별한다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 233, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-29 P1. 시험분석 최종 편집본 분류표 원본 반영

- 상태: 완료
- 사용자 요청: 시험분석 문항별 분류표 MVP 이후 작업을 이어간다.
- 판단: 실제 PDF 클릭 검수와 운영 API 로그 확인은 시험지 원본/운영 배포 상태가 필요하므로, 코드에서 바로 이어갈 수 있고 산출물 품질에 직접 영향이 있는 `최종 편집본` 연결을 먼저 보강했다. MVP에서 사람이 확정하는 원본 데이터는 `questionClassifications` 분류표이므로, 최종 편집본에도 단원/쎈 주유형/쎈 보조유형/난이도/역할/검수 메모가 원본 표로 남아야 한다.
- 이번 작업 결과: `createExamFinalDocumentFromAnalysis`가 `questionClassifications`를 정규화한 뒤 `문항별 분류표 원본` 표 블록을 자동 생성한다. 표 컬럼은 문항, 페이지, 배점, 형식, 단원, 쎈 주유형, 쎈 보조유형, 난이도, 역할, 검수 메모이며, 기존 단원별 출제 차트와 쎈 유형별 분류표 앞에 원본 검수표가 들어간다.
- 저장 주의: 기존 `examAnalyses[].questionClassifications` app_state 저장 경로만 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production` 통과(total 232, failed 0), `npm run build` 통과. Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 문항카드 UI 제거와 분류표 MVP 전환

- 상태: 완료
- 사용자 요청: `questionItems`와 문항카드 중심 UI를 버리고, 시험분석 MVP를 문항별 분류표 중심으로 다시 집중한다.
- 판단: 현재 목표는 문항카드 편집이 아니라 시험지 전체 개요를 빠르게 얻고, 문항별 단원/쎈 유형/난이도/배점 분류표를 만든 뒤 강사 인사이트와 산출물로 연결하는 것이다. 따라서 보이는 문항 검수 화면은 원문 크롭/카드/상세 코멘트 UI가 아니라 `questionClassifications` 분류표를 직접 편집하는 화면이어야 한다.
- 이번 작업 결과: 문항 검수 단계의 보이는 UI를 `문항별 분류표 MVP`로 교체했다. `확인 후 분류표 행 생성`으로 행 골격을 만들고, `AI 분류표 생성`은 PDF/이미지 앞쪽 페이지(최대 8쪽)와 현재 원본 텍스트, 쎈 유형 기준표를 함께 서버에 보내 `classificationRows`를 받는다. 화면에서는 문항번호, 페이지, 배점, 형식, 단원, 쎈 주유형/보조유형, 난이도, 역할, 검수 메모를 표에서 바로 수정한다.
- 서버 변경: `/api/ai/exam-question-classification`을 추가했다. 새 경로의 프롬프트와 응답 파서는 `classificationRows`/`questionClassifications`만 사용하며, 새 MVP 요청에서는 `questionItems`를 보내지 않는다. AI가 분류 행을 일부만 반환하면 기존 분류표 골격을 유지하고 경고를 남긴다.
- 저장 주의: 새 데이터는 기존 `examAnalyses` app_state 문서 안의 `questionClassifications` 배열에 저장한다. 새 Supabase SQL edit 필요 없음.
- 남은 정리: 레거시 `questionItems` 기반 함수와 숨겨진 크롭/문항카드 JSX는 빌드 안정성을 위해 이번 커밋에서 보존했다. 다음 정리 작업에서 실제 호출 경로가 없는 레거시 코드를 단계적으로 삭제할 수 있다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 231, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 문항정보 Claude Opus 진단과 제공자 실패 fallback

- 상태: 완료
- 사용자 요청: 현재 설정은 Claude Opus(`claude-opus-4-8`)인데도 문항정보 채우기 결과가 `AI 응답 문항정보 0/20개`로 나온다.
- 원인/판단: 운영 API에 `claude-opus-4-8`로 1문항 테스트와 20문항 synthetic OCR 테스트를 직접 보내면 각각 `aiItemCount: 1`, `aiItemCount: 20`으로 정상 반환된다. 따라서 Claude Opus 모델명/연결 자체가 원인은 아니다. 스크린샷의 화면 문구는 최신 프론트의 `AI 응답 n개` 문구가 빠진 이전 번들 형태라, 강력 새로고침 전 실행 결과일 가능성이 있다. 그래도 provider 장애/쿼터/일시 오류가 섞일 때 조용히 OCR 기본 카드만 남는 상황을 줄일 필요가 있다.
- 이번 작업 결과: 문항정보 텍스트 보강 API에서 선택 제공자가 quota/rate limit/model/timeout류 오류를 내면 사용 가능한 다른 제공자로 한 번 자동 전환하고, 전환 사유를 warning에 남긴다. mock 경로에도 `aiItemCount: 0`, `repaired: false`를 함께 내려 프론트 상태 문구가 일관되게 보이도록 했다.
- 저장 주의: 기존 `examAnalyses.questionItems`, `aiInitialFields.questionItems` app_state 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: 운영 API 직접 호출로 Claude Opus 1문항 `aiItemCount: 1`, 20문항 synthetic OCR `aiItemCount: 20` 확인. `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 231, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 문항정보 AI 응답 복구 보강

- 상태: 완료
- 사용자 요청: `AI 문항정보 채우기` 후 배점은 일부 채워졌지만 단원, 난이도, 쎈 유형은 그대로 비어 있고 화면에 `AI 응답 문항정보가 0/20개`로 표시된다.
- 원인/판단: OCR 기반 기본 카드는 저장됐지만 서버가 AI 응답에서 `questionItems` JSON 배열을 파싱하지 못하면 바로 0개로 처리했다. AI가 JSON을 조금 다르게 감싸거나 표/설명 형태로 반환하면 보강 데이터가 있어도 병합되지 않을 수 있다.
- 이번 작업 결과: AI 응답 파서를 더 넓히고, `questionItems`를 못 찾으면 같은 응답을 순수 JSON으로 복구하는 재시도를 한 번 수행한다. OpenAI 응답 텍스트 추출도 복수 output/content 블록을 모두 읽도록 보강했다. 복구 성공 여부와 실제 AI 파싱 문항 수를 프론트 상태 문구에 표시한다.
- 저장 주의: 기존 `examAnalyses.questionItems`, `aiInitialFields.questionItems` app_state 저장 경로를 그대로 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 231, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 문항정보 OCR 우선 하이브리드 채우기

- 상태: 완료
- 사용자 요청: 문항정보 채우기를 전 문항 이미지 vision으로 처리하면 토큰이 많이 들고 비효율적일 수 있으니 다른 방법으로 진행한다.
- 판단: 사람은 문항카드 최종 검수와 크롭 확정을 담당하므로, 앱이 문항 수에 맞춰 카드 뼈대를 만들고 OCR/첫 장 메타데이터로 배점·문항형식·문항별 짧은 텍스트 조각을 먼저 채운 뒤, AI는 짧은 텍스트 기반으로 단원·난이도·쎈 유형만 보강하는 흐름이 효율적이다. vision은 추후 OCR 판별 실패/저신뢰 문항에만 선택적으로 쓰는 것이 맞다.
- 이번 작업 결과: `AI 문항정보 채우기` 버튼을 전체 분석 API의 `questionInfoOnly` 호출에서 분리하고, OCR 우선 로컬 기본 채움 + `/api/ai/exam-question-info-text` 텍스트 보강 API + 기존 문항카드 병합 흐름으로 바꿨다. 배점·문항형식·OCR 조각은 먼저 저장되고, AI는 짧은 OCR 조각과 쎈 기준표로 단원·난이도·쎈 유형을 보강한다. AI 응답이 비거나 일부 문항만 돌아와도 OCR 기반 기본 카드는 유지하고 경고 문구를 표시한다.
- 저장 주의: 기존 `examAnalyses.questionItems`, `questionTargetCountsBySource`, `aiInitialFields.questionItems` app_state 저장 경로를 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 231, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 공지 21:00 예약 발송 큐 진입 누락 수정

- 상태: 완료
- 사용자 요청: 알림관리에서 21:00 공지 예약 8건이 `예약됨` 상태로 남아 있고 발송되지 않는다.
- 원인/판단: 운영 `notification_jobs`의 해당 공지 8건은 `scheduledAt`이 한국시간 21:00으로 저장되어 있었지만 `payload.osScheduled`가 비어 있었다. 서버 예약 발송 처리기는 기존에 `payload.osScheduled === true`인 job만 due 대상으로 처리하므로, 공지 예약은 저장만 되고 발송 큐에서 제외됐다. 수업 알림 예약은 이미 `osScheduled: true`가 들어가 정상 대상이었다.
- 이번 작업 결과: 앞으로 공지 예약 저장 시 `payload.osScheduled: true`를 함께 저장한다. 서버 dispatch는 기존에 저장된 공지 예약처럼 `osScheduled`가 빠져 있어도 `notice_parent`/`notice_student` + `provider: academy-os` + `sendMode: scheduled`이면 발송 대상으로 인식한다. 화면의 공지 이력도 예약 시간이 지난 예약을 `예약 시각 지남 · 확인 필요`로 표시/분류한다.
- 저장 주의: 기존 `notification_jobs.payload` JSON 필드만 사용한다. 새 Supabase SQL edit 필요 없음.
- 운영 조치: 2026-06-28 21:00 KST 공지 예약 8건은 운영 API로 `payload.osScheduled`를 보정한 뒤 `/api/notification-jobs/dispatch-due`를 호출했다. 결과는 `processedCount: 8`, `dryRun: false`였고, 재조회 시 8건 모두 `status: sent`, `provider: solapi`, Solapi 그룹 상태 `SENDING`으로 확인했다.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 231, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 문항정보 채우기 전용 AI 프롬프트

- 상태: 완료
- 사용자 요청: `AI 문항정보 채우기`를 실행했지만 문항카드의 배점, 단원, 난이도, 쎈 유형 등이 아무것도 채워지지 않는다.
- 원인/판단: 운영 분석 기록은 AI 요청이 `완료`로 저장됐지만 `aiInitialFields.questionItems`가 0개였다. 기존 전체 시험분석 프롬프트는 총평/전략/재가공 메시지까지 함께 요구하므로 AI가 문항 배열을 비워도 프론트가 성공 처리했고, 빈 배열 병합 결과 화면에는 아무 변화가 없었다.
- 이번 작업 결과: `AI 문항정보 채우기`는 `questionInfoOnly` 모드로 서버에 전달하고, 서버는 문항정보 전용 프롬프트를 사용해 1번부터 목표 문항 수까지의 `questionItems` 반환을 강제한다. mock 모드에서는 조용히 빈 카드로 되돌리지 않고 실제 AI 제공자 필요 오류를 띄우며, 실제 AI가 `questionItems`를 반환하지 않으면 실패로 표시한다. 전용 실행 결과는 문항카드와 원본별 문항 구성만 반영하고 총평/블로그/인스타 같은 전체 분석 필드는 덮어쓰지 않는다.
- 저장 주의: 기존 `examAnalyses.questionItems`, `questionCompositionsBySource`, `questionTargetCountsBySource` app_state 저장 흐름을 그대로 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 230, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 공지 예약 실패 기록 표시와 notice 타입 DB 제약 보강

- 상태: 완료
- 사용자 요청: 공지 예약을 눌렀더니 실패 8건이 나오고, 실패 버튼을 눌러도 실패 기록이 열리지 않는다.
- 원인/판단: `notification_jobs.status` 제약은 풀었지만 `notification_jobs.notification_type` 체크 제약이 기존 수업 알림 타입만 허용하고 있었다. 알림관리 공지 예약은 `notice_parent`, `notice_student` 타입을 저장하므로 운영 DB에서 `notification_jobs_notification_type_check`에 막혀 8건 모두 실패했다. 프론트도 예약 저장 실패를 카운트만 하고 실패 job을 목록에 남기지 않아 실패 필터가 0건으로 보였다.
- 이번 작업 결과: `notice_parent`, `notice_student`와 서버가 이미 처리하는 `daily_report`, `student_reminder` 타입을 schema와 migration에 추가했다. 예약 저장 실패 시에도 로컬 실패 기록을 생성해 `실패` 필터에서 즉시 오류 원인을 볼 수 있게 했다.
- 저장 주의: `supabase/20260628_notification_job_notice_types.sql`을 운영 Supabase SQL editor에서 적용해야 공지 예약이 DB에 정상 저장된다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 229, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 알림 과거 예약 로딩 표시 해제와 이력 조회 보호

- 상태: 완료
- 사용자 요청: 앱 재시작 후에도 알림이 여전히 로딩 중으로 보인다.
- 원인/판단: 운영 `lesson_student_records`에는 과거 수업의 `예약 중 · 06.xx 22:30/23:00` 상태가 29개 남아 있었다. 이는 현재 발송 중인 요청이 아니라 이미 예약 시각이 지난 기록인데, 프론트가 `예약 중` 문자열을 무조건 pending으로 해석해 계속 로딩처럼 보였다. 알림관리 이력 조회도 timeout/실패 표시가 없어 조회 지연과 발송 대기가 구분되지 않았다.
- 이번 작업 결과: 예약 시각이 지난 알림톡 상태는 `예약 시각 지남 · 확인 필요`로 표시하고 pending 버튼 상태에서 제외한다. `/api/notification-jobs` 목록 조회는 최근 300건 기본 조회로 제한하고, 프론트는 12초를 넘으면 발송 UI는 그대로 두고 이력 조회만 재시도 안내를 표시한다.
- 운영 데이터 조치: 과거 `예약 중`으로 남아 있던 lesson record 25건을 `예약 시각 지남 · 확인 필요` 문구로 바꿨다. 남은 `예약 중` 4건은 2026-06-29/2026-07-10 미래 예약이라 유지했다.
- 저장 주의: `notification_jobs.status` 체크 제약이 `send_unconfirmed`, `dry_run`을 허용하지 않아 `supabase/20260628_notification_job_statuses.sql`을 추가했다. 운영 Supabase SQL editor에서 적용해야 응답 지연/테스트 기록 상태가 DB에 정상 저장된다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 228, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 재시작 후 남는 시험분석 로딩 상태 해제

- 상태: 완료
- 사용자 요청: 앱 종료 후 재시작해도 시험분석과 알림이 여전히 로딩 중이다.
- 원인/판단: 운영 `app_state.examAnalyses`에 `aiStatus: "분석 중"`이 저장되어 있었다. 브라우저를 종료하면 기존 AI fetch 결과를 받을 경로가 사라지므로, 재시작 후 남아 있는 `분석 중`은 실제 진행 중이 아니라 끊긴 이전 세션 상태로 봐야 한다. 알림 기록 목록은 Solapi 원문 `result.response`가 커서 알림 화면 로딩을 무겁게 만들 수 있었다.
- 이번 작업 결과: AI 분석 실행 시 현재 브라우저 세션 ID와 요청 ID를 저장하고, 앱 재시작 후 다른 세션의 `분석 중` 상태가 보이면 자동으로 실패 상태로 풀어 다시 실행할 수 있게 했다. 늦게 도착한 이전 요청 결과가 새 요청 결과를 덮어쓰지 않도록 요청 ID도 비교한다.
- 알림 기록 경량화: `/api/notification-jobs` 목록 응답에서 무거운 Solapi 원문 응답을 요약해 내려주도록 했다. `includeResult=true`를 붙이면 원문 포함 조회도 가능하다.
- 운영 데이터 조치: 현재 운영 app_state에 남아 있던 `exam_analysis_1782548946259_jdefc`의 `분석 중` 상태를 `실패`로 해제했다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 227, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 장기 AI 대기 진단과 알림 발송 확인 상태

- 상태: 완료
- 사용자 요청: 시험분석과 알림이 계속 로딩 중이라 기다려야 하는지 고장인지 알 수 없다. 단, AI 응답은 오래 걸려도 제대로 된 결과가 나오면 기다려야 하므로 강제로 종료하지 않는다.
- 원인/판단: 시험분석 AI는 외부 AI가 오래 걸릴 수 있는 정상 장기 작업이다. 따라서 요청을 timeout으로 끊지 않고, 경과 시간과 서버 상태 확인 신호를 보여주는 방식이 맞다. 알림톡은 외부 발송 요청이 오래 걸리면 실제 발송 여부가 애매할 수 있어, 실패로 단정하지 않고 확인 필요 상태로 분리해야 한다.
- 이번 작업 결과: 시험분석 상태 영역에 경과 시간, 장기 대기 안내, 90초 이후 서버 상태 자동 확인 메시지를 추가했다. 서버가 응답하면 `AI 제공자 응답 대기`, 상태 확인이 실패하면 `네트워크/API 문제 가능성`을 표시한다. AI 분석/vision 요청은 강제 종료하지 않는다.
- 알림관리 결과 표시: 공지 즉시 발송/예약/테스트 버튼 주변에 진행·완료·실패 메시지를 표시한다. 알림톡 발송 요청이 45초 이상 응답하지 않으면 `send_unconfirmed`로 기록하고, 화면에는 `확인 필요` 필터와 배지로 보여준다. 이는 발송 실패가 아니라 실제 발송 여부 확인이 필요한 상태다.
- 저장 주의: 새 DB 스키마는 없다. 알림 기록은 기존 `notification_jobs`의 status 값으로 `send_unconfirmed`를 사용할 수 있게 한 프론트 변경이다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 226, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 AI 요청 지연 완화

- 상태: 완료
- 사용자 요청: 시험분석 AI 분석이 너무 오래 걸리고 있다.
- 원인/판단: `AI 문항정보 채우기`에서 현재 선택한 PDF 원문에 분석지 전체 OCR 원문을 다시 덧붙여 보내고 있었다. 여러 PDF가 업로드된 상태에서는 프롬프트가 불필요하게 커졌다. 또한 쎈 유형 자동매칭 보강 후 과목/범위를 좁히지 못하면 전체 쎈 기준표 883개가 그대로 들어갈 수 있었다.
- 이번 작업 결과: 현재 PDF 문항정보 AI 실행 시 현재 원본 텍스트만 우선 보내고, 전체 OCR은 현재 원본 텍스트가 없을 때만 fallback으로 사용한다. 서버는 OCR/원문 메모를 16,000자까지 제한하고, 쎈 기준표는 고1/학기 단서로 공통수학1/2를 먼저 좁히며, 불가피한 전체 fallback도 420개 후보로 제한한다.
- 저장 주의: 데이터 저장 구조 변경은 없고 AI 요청 payload/프롬프트 크기만 줄였다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production`, `npm run build` 통과(total 225, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 알림관리 수신 모드별 학생 선택 복구

- 상태: 완료
- 사용자 요청: 알림관리 `개별 발송`에서 학생검색/선택이 막혀 있다. 한 반 전체에만 보내는 것이 아니라, 반 안에서 사람을 고르거나 선택할 수 있어야 한다.
- 원인: 직전 수정에서 `전체`, `학부모`, `학생` 모드의 명단을 읽기 전용으로 바꿔, 수신 대상 종류를 고른 뒤 학생을 체크하는 운영 흐름이 막혔다.
- 이번 작업 결과: 모든 수신 모드에서 학생 목록을 체크박스 선택형으로 통일했다. `전체`는 선택한 학생의 학부모+학생, `학부모`는 선택한 학생의 학부모, `학생`은 선택한 학생에게만 발송한다. `보이는 학생 전체`로 반 전체 선택도 가능하고, 검색어를 바꿔도 이미 선택한 학생은 같은 반 안에서는 유지된다.
- 저장 주의: 데이터 저장 구조 변경은 없고 프론트 대상 선택/표시 로직만 수정했다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 224, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 PDF별 문항 메타데이터와 쎈 유형 자동 매칭 보강

- 상태: 완료
- 사용자 요청: PDF마다 문항 메타데이터를 다르게 가져가야 하는데 여전히 총합 문항 수로 나타난다. 쎈 유형은 사람이 고르는 것이 아니라 AI가 자동으로 찾아서 매칭해야 한다.
- 원인: 문항 검수 화면에서 현재 PDF의 `questionCompositionsBySource`가 없으면 전체 `questionComposition`을 fallback으로 사용해, 여러 PDF 중 한 원본을 선택해도 총합 문항 수가 표시될 수 있었다. 또한 쎈 유형 기준표를 과목/범위로 좁히지 못하면 서버 프롬프트가 `ssenTypeTags`를 빈 배열로 두라고 안내할 수 있었다.
- 이번 작업 결과: 원본이 2개 이상이면 현재 PDF의 원본별 메타데이터 또는 원본별 문항카드 수를 우선 표시하고, 전체 문항 수 fallback은 사용하지 않도록 수정했다. 현재 원본에 이미 22개 문항카드가 있으면 상단 메타데이터와 문항 수 입력도 22 기준으로 잡힌다.
- 쎈 유형 AI 매칭: 서버가 과목/범위를 좁히지 못해도 전체 쎈 유형 기준표를 제공하고, AI가 문항 조건·단원명·풀이 행동을 비교해 `questionItems.ssenTypeTags`의 주유형/보조유형 후보를 자동 매칭하도록 프롬프트를 강화했다. 확신이 낮으면 빈칸이 아니라 confidence를 낮추고 reason에 확인 포인트를 남긴다.
- 저장 주의: 기존 `examAnalyses` app_state 안의 `questionCompositionsBySource`, `questionTargetCountsBySource`, `questionItems.ssenTypeTags`를 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run test:production`, `npm run build` 통과(total 224, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 알림관리 전체·학부모·학생 모드 명단 표시

- 상태: 완료
- 사용자 요청: 알림관리 `개별 발송`에서 `전체`, `학부모`, `학생` 수신 방식을 선택하면 대상 학생/수신 건수는 계산되지만 명단이 뜨지 않는다.
- 원인: 수신 대상 계산은 모든 모드에 적용됐지만, 학생 명단 UI가 `선택` 모드에서만 렌더링되도록 조건 처리되어 있었다.
- 이번 작업 결과: `선택` 모드는 기존처럼 체크박스 명단과 전체선택/해제를 유지하고, `전체`, `학부모`, `학생` 모드는 같은 반/검색 필터 기준의 읽기용 수신 명단을 표시하도록 수정했다. 각 학생 행에는 학부모/학생 번호 등록 여부도 작은 배지로 표시한다.
- 저장 주의: 데이터 저장 구조 변경은 없고 프론트 표시 로직만 수정했다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 223, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 원본/OCR/프롬프트 세부 데이터 숨김

- 상태: 완료
- 사용자 요청: 시험분석 원본 입력 화면의 `원본 링크 · OCR 원문 · 프롬프트 보기` 데이터는 사람이 볼 필요가 없다. 프롬프트는 설정에서 관리한다.
- 이번 작업 결과: 원본 입력 화면에서 원본 링크, OCR 원문, AI 분석 프롬프트를 펼쳐 보는 세부 영역을 제거했다. 업로드 드롭존, Storage 저장, OCR 추출, 원본 파일 목록, AI 분석 시작 흐름은 유지했다.
- 프롬프트 정책: 시험분석 AI 실행 시 개별 분석지 `aiPrompt`를 우선하지 않고, 설정 화면의 `시험분석 AI` 프롬프트를 실제 요청 프롬프트로 사용하도록 되돌렸다. 실행 당시 프롬프트는 기존 호환을 위해 분석지 필드에도 저장되지만, 화면에서는 설정에서만 관리한다.
- 저장 주의: 기존 `examAnalyses` app_state 저장 구조와 Supabase Storage 업로드 흐름을 그대로 사용한다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `git diff --check`, `npm run build`, `npm run test:production` 통과(total 222, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 알림관리 개별발송 반 필터 매칭 수정

- 상태: 완료
- 사용자 요청: 알림관리 `개별 발송`에서 반을 선택하면 학생들이 매칭되지 않아 대상 학생/수신 건수가 0으로 표시된다.
- 원인: 개별발송 반 필터가 학생의 `classTemplateId`만 확인했다. 현재 학생 기본 반은 주로 `defaultClassTemplateId`에 저장되므로, 반 선택 시 실제 재원생이 필터에서 탈락했다.
- 이번 작업 결과: 개별발송 학생 필터를 `defaultClassTemplateId`, `classTemplateId`, `classId`, 반 이름 fallback까지 확인하도록 보강했다. 선택한 반의 학생들이 다시 `대상 학생`, 학부모/학생 수신 건수, 선택 목록에 나타난다.
- 저장 주의: 데이터 저장 구조 변경은 없고 프론트 매칭 로직만 수정했다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 통과(total 222, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 시험분석 프롬프트 단일화와 원본별 문항 메타데이터 분리

- 상태: 완료
- 사용자 요청: 첫 장 기준 메타데이터는 잡히지만 시험지가 2개 이상이면 각각 전체 문항을 따로 잡아야 한다. AI가 처음 분석할 때 문항, 페이지, 배점, 쎈 기준 유형, 난이도, 단원을 작성해야 한다. 설정 프롬프트와 시험분석 탭 프롬프트 차이로 문제가 생기는지 확인한다.
- 원인/판단: 일부는 프롬프트 우선순위 문제였다. 기존 실행 흐름은 설정의 시험분석 프롬프트가 개별 분석지 화면 프롬프트보다 우선될 수 있어, 화면에서 보는 프롬프트와 실제 실행 프롬프트가 달라질 여지가 있었다.
- 이번 작업 결과: AI 실행 시 시험분석 탭에 보이는 개별 분석지 `aiPrompt`를 실제 요청 프롬프트로 사용하고, 설정 프롬프트는 새 분석지 기본값 역할로 정리했다. 실행 시 실제 사용한 프롬프트도 분석지에 저장되게 했다.
- 원본별 메타데이터: `questionCompositionsBySource`, `questionTargetCountsBySource`를 추가해 PDF/이미지 원본이 2개 이상일 때 sourceId별 첫 장 문항 구성과 목표 문항 수를 따로 저장한다. 서버 프롬프트/정규화는 `sourceCompositions`를 받아 원본별 메타데이터를 반영한다.
- 쎈 유형 UI: 쎈 유형은 883개라 전체 드롭다운으로 만들지 않는다. 문항 형식은 `문항 형식`으로 라벨을 바꾸고, 쎈 기준 유형은 `쎈 유형 검색` 입력 + 단원/과목/입력어 기반 `쎈 유형 추천` 버튼으로 선택하게 했다.
- 저장 주의: 기존 `examAnalyses` app_state 문서 안에 필드가 추가되는 방식이므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 통과(total 221, failed 0). Vite 빌드에서는 쎈 기준표 JSON 포함으로 메인 청크가 커졌고 기존 chunk size warning이 발생했다.

### 2026-06-28 P1. 쎈 6권 유형 인덱스 병합 및 시험분석 AI 초안 연결

- 상태: 완료
- 사용자 요청: 공통수학1 179개 유형을 기존 쎈 통합 CSV에 병합하고, 시험분석 웹앱 AI 프롬프트에서 이 분류표를 기준으로 문항별 쎈 유형 분류 초안을 만들 수 있게 한다.
- 이번 작업 결과: 로컬 산출물 `output/ssen/ssen_all_type_index.*`, `ssen_6books_type_index.*`, 기존 요청 파일명인 `ssen_5books_type_index.*`를 모두 6권 통합본으로 갱신했다. 통합 기준표는 공통수학1 179개, 공통수학2 187개, 대수 175개, 미적분1 148개, 확률과 통계 92개, 기하 102개로 총 883개다.
- 앱 반영: 배포 코드에서 사용할 메타데이터 범위만 `api/data/ssenTypeIndex.json`에 추가했다. 시험분석 API는 과목/범위에 맞는 쎈 교재 유형표만 프롬프트에 넣고, `questionItems.ssenTypeTags`에 `primary` 주유형과 `secondary` 보조유형 1~2개를 반환하도록 지시한다.
- 문항카드 반영: 문항 검수 화면에 `쎈 주유형`, `쎈 보조유형` 입력칸을 추가했다. AI 초안 병합, 기존 문항카드 정규화, 최종 편집본 생성, 문항분석표/쎈 유형별 분류표에 `ssenTypeTags`가 연결된다.
- 저장 주의: `questionItems` 안에 필드가 추가되는 방식이므로 기존 `examAnalyses` app_state 저장 구조를 그대로 사용한다. 새 Supabase SQL edit 필요 없음. 교재 원문/해설/문항 이미지는 포함하지 않고 유형코드·교재·단원·유형명 메타데이터만 저장했다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs`, `node -e "import('./api/routes/examAnalysis.js')"`, `npm run build`, `npm run test:production` 통과(total 221, failed 0). Vite 빌드에서는 기존 chunk size warning만 발생했다.

### 2026-06-28 P1. 쎈 5권 유형 인덱스 추가 추출

- 상태: 완료
- 사용자 요청: `22개정 쎈수학 기하.pdf`, `쎈 - 확률과 통계 - 문제.pdf`, `쎈 미적분1 학생용.pdf`, `쎈수학 대수 (2022개정).pdf`, `쎈 공통수학2.pdf` 5개 파일에서도 유형명만 추출한다. 미적분1 앞 유형은 추가로 지정한 문제 PDF에서 확인한다.
- 이번 작업 결과: 각 PDF의 유형 모음 페이지를 렌더링/OCR한 뒤 육안 검수로 유형명 메타데이터만 정리했다. 미적분1은 기존 학생용 PDF 앞쪽에 유형 모음 페이지가 빠져 있어, 추가 확인한 미적분1 문제 PDF 7쪽의 `함수의 극한과 연속` 유형 모음으로 01~02단원을 확정했다.
- 산출물: 로컬 산출물은 `output/ssen/ssen_geometry_2022_type_index.*`, `output/ssen/ssen_probability_statistics_type_index.*`, `output/ssen/ssen_calculus1_type_index.*`, `output/ssen/ssen_algebra_2022_type_index.*`, `output/ssen/ssen_common_math2_type_index.*`, 통합본 `output/ssen/ssen_5books_type_index.*`에 저장했다. 각 산출물은 CSV/JSON/Markdown 형식이다.
- 검증: 책별 유형 수는 기하 102개, 확률과 통계 92개, 미적분1 148개, 대수 175개, 공통수학2 187개로 합계 704개다. 원문 문제 본문, 해설, 문항 이미지는 포함하지 않고 단원명/유형번호/유형명/확인 페이지 메타데이터만 담았다. 산출물은 `output/ssen/` 아래에 있어 저장소 커밋 대상에서 제외된다.
- 테스트: 앱 코드 변경은 없어 `npm run build`와 `npm run test:production`은 생략했다.

### 2026-06-28 P1. 쎈 공통수학1 179개 유형 인덱스 추출

- 상태: 완료
- 사용자 요청: `쎈 공통수학1 본문.pdf`에서 총 10개 단원, 179개 유형을 추출해 정리한다. 한 번에 읽기 어려우면 단원별 또는 적절한 묶음으로 나누어 추출한다.
- 이번 작업 결과: 스캔 PDF라 일반 텍스트 추출이 되지 않아 페이지 이미지 렌더링, Windows OCR, 주요 유형 목차 페이지 육안 검수로 유형명만 추출했다. 단원별 유형 수는 `12, 26, 13, 20, 11, 18, 13, 22, 27, 17`이고 합계 179개로 검증했다.
- 산출물: 로컬 산출물은 `output/ssen/ssen_common_math1_type_index.csv`, `output/ssen/ssen_common_math1_type_index.json`, `output/ssen/ssen_common_math1_type_index.md`에 저장했다. 원문 문제 본문, 해설, 문항 이미지는 포함하지 않고 단원명/유형번호/유형명/확인 페이지 메타데이터만 담았다.
- 저장 주의: 교재 원문 기반 파생 산출물이므로 `output/ssen/`은 `.gitignore`에 추가해 저장소 커밋 대상에서 제외했다. 이후 앱 기준표로 쓰려면 저작권 이슈가 적은 메타데이터 범위와 Supabase 저장 구조를 별도 확정한다.
- 검증: 파일 생성 스크립트에서 총 179개와 단원별 개수를 assertion으로 검증했다. 앱 코드 변경은 없어 `npm run build`와 `npm run test:production`은 생략했다.

### 2026-06-28 P1 예정. 누적·단원·주간테스트 자동화와 오답/재시험 흐름

- 상태: 예정
- 사용자 요청: 누적테스트 형식의 테스트 설계를 꼼꼼하게 만들고, 학생들이 풀고 채점한 뒤 오답지를 받는 과정을 자동화한다. 꼭 누적테스트가 아니어도 단원테스트, 주간테스트 등 다양한 형식을 지원하고, OMR 제출 또는 자동채점 방법을 찾아 데이터화와 재시험까지 이어지게 한다.
- 제품 방향: 테스트 운영은 `출제 설계 → 응시/제출 → 채점 → 결과 데이터화 → 오답지 생성 → 재시험 배정 → 재채점/완료 기록` 흐름으로 본다. 누적테스트, 단원테스트, 주간테스트, 재시험은 같은 평가 엔진의 다른 템플릿으로 다룬다.
- 채점 방식 후보: 1) 학생이 OMR 형태로 답안을 제출하고 자동 채점, 2) 객관식/단답형은 웹 입력으로 즉시 자동채점, 3) 서술형은 강사 검토 후 부분점수 입력, 4) 사진 제출은 OCR/AI 보조 채점 후보로 둔다.
- 저장 데이터: 테스트 템플릿, 문항 구성, 정답/배점, 학생 답안, 채점 결과, 오답 문항, 오답 원인, 재시험 필요 여부, 재시험 회차, 최종 통과 여부를 지속 저장한다. 학생별·단원별·쎈 유형별·주제별 성취도와 연결할 수 있어야 한다.
- 시험분석/유형맵 연결: 테스트 문항도 `단원`, `쎈 유형`, `보조유형`, `오답 주제`, `실수 태그`를 가질 수 있게 한다. 채점 결과는 학생 유형 노드맵의 `완료/헷갈림/미학습/재시험 필요` 상태와 연결한다.
- 산출물: 학생에게는 자동 오답지와 재시험지를 제공하고, 강사에게는 반별/학생별 취약 유형, 재시험 대상, 다시 설명할 주제를 보여준다. 학부모 안내가 필요할 경우 실제 채점 데이터 기반 요약으로 만든다.
- 추천 구현 순서: 1) 평가 데이터 모델 설계, 2) 단원테스트 1종 수동 입력 MVP, 3) 웹 답안 입력/OMR형 제출 화면, 4) 자동채점과 오답지 생성, 5) 재시험 배정/완료 상태, 6) 쎈 유형 노드맵 및 보충관리 연결, 7) OCR/AI 채점 보조 검토.
- 저장 주의: 학생 답안과 성적/오답 기록은 운영 핵심 데이터이므로 localStorage-only로 두지 않는다. MVP부터 Supabase 테이블 설계 또는 최소한 `app_state` 지속 저장 경로를 먼저 확정한다.

### 2026-06-28 P1 예정. 쎈 기준 단원별 유형맵과 시험문항 유형 분류

- 상태: 예정
- 사용자 요청: 쎈 유형별분석표를 AI가 기준으로 삼아 시험문제를 단원별/유형별로 분류하고, 복잡한 문항은 두세 가지 쎈 유형의 결합물로 표시할 수 있게 한다. 각 교과·단원별 유형을 노드형으로 렌더링해 학생이 전체 유형을 한눈에 보고, 할 수 있는 유형과 잊어버린 기본유형을 스스로 체크하게 한다.
- 제품 방향: 쎈을 장기 유형 기준으로 삼되, 원문 문제 본문을 앱에 대량 저장/노출하지 않는다. 저장 대상은 `교과`, `학년/학기`, `단원`, `쎈 유형코드`, `유형명`, `판별 기준`, `대표 풀이 행동`, `필수 개념`, `자주 나는 실수`, `연결 유형` 같은 메타데이터 중심으로 둔다.
- 시험분석 연결: `questionItems`에 `ssenTypeTags` 같은 필드를 추가해 `주유형(primary)`과 `보조유형(secondary)` 1~2개를 저장한다. AI가 문항 이미지/OCR을 보고 유형 후보와 근거/확신도를 초안으로 만들고, 사람은 문항카드에서 확정한다.
- 학생 학습 화면: 단원별 유형을 노드맵으로 렌더링한다. 예를 들어 `이차함수와 이차방정식`에 17개 유형이 있으면, 학생은 각 노드에서 `완료`, `헷갈림`, `다시보기`, `실수주의`, `미학습` 같은 상태를 체크한다. 전체 유형 중 빈 기본유형이 보이게 해서 망각 점검용으로 사용한다.
- 장기 확장: 각 쎈 유형 노드는 선생님이 녹화한 유형별 풀이 영상, 주제별 교재, 학생들이 자주 잊거나 실수하는 문항 묶음과 연결한다. 시험문항별로도 주제/오답유형을 태깅해 나중에 주제별 교재와 영상 제작 재료로 쌓는다.
- 추천 구현 순서: 1) 쎈 유형 기준표 데이터 구조 설계, 2) 샘플 단원 1개 유형 10~20개 수동 등록, 3) 시험문항 카드에 쎈 유형 태그 필드 추가, 4) AI 프롬프트/정규화에서 주유형·보조유형 후보 생성, 5) 학생용 유형 노드맵 MVP, 6) 영상/교재 링크 필드 연결.
- 저장 주의: 본 작업은 기준표와 학생별 유형 상태를 지속 저장해야 하므로 Supabase 테이블 또는 `app_state` 저장 경로를 먼저 정한다. 장기적으로는 여러 교과/단원/학생 누적 상태가 필요하므로 별도 Supabase SQL 설계 가능성이 높다.

### 2026-06-28 P1. 시험분석 산출물 UI 검수 반영

- 상태: 완료
- 사용자 요청: 시험분석 화면의 버튼 기능, 중복, 데이터 연결, UI 피로도를 검수하고 문항카드 재생성 필요성에 답변한 뒤 나머지 문제를 수정한다.
- 문항카드 재생성 판단: 문항카드 재생성은 초기 카드 만들기 또는 첫 장 메타데이터를 잘못 읽어 문항 수를 다시 맞출 때만 필요하다. 사람이 최종 수정하는 운영에서는 검토가 시작된 뒤 누르면 기존 태그, 크롭, 코멘트가 사라질 수 있으므로 이번 수정 범위에서는 기능 변경하지 않고 운영상 주의 대상으로 둔다.
- 이번 작업 결과: 산출물별 레이아웃 A/B/C 예시를 실제 선택 버튼으로 바꾸고 `outputLayoutChoices`를 `examAnalyses` app_state 문서와 `finalDocument` 메타데이터에 저장하도록 연결했다. 산출물 작성 화면은 `레이아웃 선택`, `최종 편집본`, `산출물 미리보기` 접힘 섹션으로 나누어 화면 피로도를 낮췄다.
- 버튼 정리: 산출물 상단의 중복 `편집본 다시 생성` 버튼을 제거하고, 편집본이 없을 때만 `최종 편집본 만들기`를 표시한다. 재생성 위험 버튼은 최종 편집본 빌더 안의 확인창 있는 `현재 데이터로 다시 생성`만 남겼다. 문항 검수 단계의 `이미지 원본 추가`는 실제 동작에 맞게 `PDF·이미지 원본 추가`로 바꿨다.
- 저장 주의: 기존 `examAnalyses` app_state 저장 구조에 선택값을 추가하는 변경이므로 새 Supabase SQL edit 필요 없음.
- 검증: `npm run build` 통과(Vite chunk size warning만 있음). `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 221, failed 0).

### 2026-06-28 P1. 시험분석 산출물별 레이아웃 선택안 웹앱 반영

- 상태: 완료
- 사용자 요청: 텍스트형 레이아웃이 아니라 PDF나 노션에 업데이트할지, 웹앱 업데이트와 노션 업데이트 중 무엇이 나은지 확인한다.
- 판단: 시험분석 MVP에서는 노션/PDF보다 웹앱 업데이트가 낫다. 레이아웃 선택안이 실제 최종편집본 생성 규칙과 연결되어야 하므로, 산출물 작성 화면 안에서 먼저 확인하고 고정하는 편이 운영 흐름에 맞다.
- 이번 작업 결과: 시험분석 `산출물 작성` 단계에 `산출물별 레이아웃 선택안` 패널을 추가했다. 강사용 분석지, 학생 분석지, 블로그 초안, 인스타 카드뉴스 각각에 A/B/C 와이어프레임을 내용 없이 보여준다.
- 저장 주의: 레이아웃 예시 패널은 현재 UI 표시용이며 새 Supabase SQL edit 필요 없음. 다음 단계에서 선택 상태를 `finalDocument` 생성 규칙에 연결할 수 있다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 221, failed 0).

### 2026-06-28 P1. 시험분석 MVP 산출물·문항카드 흐름 정리

- 상태: 완료
- 사용자 요청: 시험지 분석 MVP에서 문항수는 첫 장 메타데이터 AI 판독 후 사람이 확인하는 흐름으로 정리하고, 유사문항 분석지/교과서/부교재/EBS/모의고사 메타데이터를 문항카드 태그로 기록한다. 실수 패턴과 학부모 안내문은 삭제한다. 산출물별 레이아웃은 내용 없이 선택안으로 다시 제시한다.
- 이번 작업 결과: 시험분석 새 저장 구조에서 `mistakePatterns`, `parentNoticeDraft`, `sourceCompareComment` 사용을 제거했다. 문항별 변형 관계 메모는 `variationRelationComment`로 바꾸고, 화면 라벨도 `이 문항 변형 관계 분석`으로 정리했다. 산출물은 `강사용 분석지`, `학생 분석지`, `블로그 초안`, `인스타 카드뉴스` 4종으로 정리했다.
- 문항카드 보강: `숫자변형문항`, `조건변형문항`, `유사유형문항`, `교과서 연계`, `부교재 연계`, `EBS 연계`, `모의고사 연계` 태그를 추가했다. 출처/유사문항 메타데이터가 저장되면 태그도 자동 파생되도록 프론트와 서버 정규화를 보강했다.
- 배점 보강: 문항분석표에 `배점/비중`을 표시해, 문항 수나 총점 구성이 달라질 때 같은 배점의 상대적 의미를 함께 볼 수 있게 했다.
- 저장 주의: 기존 app_state 구조를 다시 테스트할 예정이므로 삭제된 시험분석 필드는 새 분석 데이터에서 만들지 않는다. 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 220, failed 0).

### 2026-06-27 P1. 다음 세션 자료 요청 시 handoff 폴더 갱신 규칙 추가

- 상태: 완료
- 사용자 요청: 앞으로 다음 세션에 넘길 자료를 달라고 하면 `docs/next-session` 폴더를 오늘처럼 새로 업데이트하도록 작업 지침에 넣는다.
- 이번 작업 결과: `AGENTS.md` Workflow에 다음 세션 자료/handoff/인수인계 자료 요청 시 `docs/next-session/README.md`를 최신 커밋, 검증 결과, 다음 작업 후보 기준으로 갱신한다는 규칙을 추가했다. `docs/next-session/README.md`에도 같은 운영 규칙을 적어 다음 세션이 폴더 하나만 받아도 흐름을 이어갈 수 있게 했다.
- 검증: 문서 전용 변경이라 빌드/운영 테스트는 생략.

### 2026-06-27 P1. 시험분석 최종 문항 슬롯 이미지 크롭 연결

- 상태: 완료
- 사용자 요청: 시험분석 최종 편집본 빌더 이후 작업을 이어간다.
- 이번 작업 결과: 최종 편집본의 `questionSlots` 항목에 이미지 원본 문항 크롭 정보를 `originalImage`로 저장하고, 최종 보고서 미리보기/PDF 출력 영역에서 `questionItems.cropBox` 기반 원문항 크롭 미리보기를 렌더링하도록 연결했다. 편집 화면에서도 이미지 원본 크롭이 있는 슬롯은 미리보기를 확인할 수 있다.
- 범위 제한: 이번 단계는 이미지 원본(`png/jpg/webp/gif`) 크롭을 우선 지원한다. PDF 원본은 기존처럼 슬롯 텍스트 fallback을 유지하며, PDF 페이지를 이미지로 렌더링해 최종 슬롯에 저장하는 작업은 후속 후보로 남긴다.
- 저장 주의: 기존 `examAnalyses.finalDocument` app_state 문서 안의 슬롯 항목 확장이므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 220, failed 0).

### 2026-06-27 P1. 다음 세션 단일 handoff 폴더 생성

- 상태: 완료
- 사용자 요청: 다음 세션에 여러 md 파일을 하나씩 넘기지 않고, 폴더 하나만 넘길 수 있는 구조로 정리한다.
- 이번 작업 결과: `docs/next-session/README.md`를 추가했다. 다음 세션은 `AGENTS.md`와 이 README만 먼저 읽으면 되고, 과거 handoff 문서는 필요할 때만 참조하도록 경로를 모았다.
- 사용법: 새 세션 첫 메시지에 `E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, 시험분석 최종 편집본 빌더 이후 작업을 이어가주세요.`라고 전달하면 된다.
- 검증: 문서 전용 변경. 빌드/운영 테스트는 직전 구현 커밋 `f2e4c75`에서 `npm run build`, `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 최종 편집본 빌더 구현

- 상태: 완료
- 사용자 요청: 최종 렌더링 화면 자체를 편집 화면으로 만들고, 글·표·차트·다이어그램·문항 삽입 슬롯을 사람이 수정해 최종본을 만들 수 있게 한다.
- 이번 작업 결과: 시험분석 산출물 작성 단계에 `최종 편집본` 빌더를 추가했다. AI/문항 데이터에서 `finalDocument.blocks` 초안을 만들고, 문단, 표, 차트 데이터, 흐름도 노드, 문항 삽입 슬롯을 웹앱에서 직접 수정할 수 있다.
- 편집 방식: 글은 textarea로 수정하고, 표는 셀 단위로 수정하며, 차트는 항목/값/비고 데이터 수정 시 막대 렌더링이 함께 바뀐다. 흐름도는 노드 문구와 상세를 수정하고, 문항 슬롯은 원문항/유사문항 삽입 영역과 유사문항 메타데이터를 수정한다.
- 출력 반영: `finalDocument`가 저장된 분석지는 최종 보고서 미리보기와 PDF 저장/인쇄에서 편집본 기준으로 렌더링된다. 편집본이 없으면 기존 자동 리포트로 fallback된다.
- 저장 주의: 기존 `examAnalyses` app_state 문서 안에 `finalDocument` 필드가 추가되는 방식이므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 문항별 유사문항 메타데이터 추가

- 상태: 완료
- 사용자 요청: 유사문항 본문을 웹앱에 넣기보다, 문항 `questionItems`에 `유사문항 필요 여부`, `유사문항 출처`, `숫자변형/조건변형/유사유형 구분` 같은 메타데이터를 넣을 수 있게 한다.
- 이번 작업 결과: 문항별 데이터 모델에 `similarProblemNeeded`, `similarProblemSource`, `similarProblemRelation`을 추가했다. 문항별 인사이트 폼에서 선생님이 직접 수정할 수 있고, AI 문항 초안/서버 정규화/병합 로직에서도 해당 값을 받아 빈 값에 채우도록 했다.
- 산출 반영: 문항별 강사 코멘트 텍스트와 `부교재·유사문항 활용` 표에 유사문항 필요 여부, 출처, 변형 구분이 함께 정리되게 했다. 프롬프트에는 유사문항 본문 전체가 아니라 메타데이터만 `questionItems`에 넣도록 명시했다.
- 저장 주의: 기존 `examAnalyses.questionItems` app_state 구조 안에 필드가 추가되는 방식이므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 문항 구성 AI 초안·사람 확인 흐름 재정리

- 상태: 완료
- 사용자 요청: 문항 수 확정은 AI가 첫 페이지 문항 구성표를 읽고 사람이 확인하면 되는 단순한 작업이다. 기존 테스트 크롭 보존은 필요 없으니 처음부터 제대로 된 흐름으로 다시 만든다.
- 이번 작업 결과: AI 시험분석 응답에 `questionComposition` 구조를 추가했다. AI는 시험지 첫 페이지/상단 문항 구성표를 읽어 총 문항 수, 선택형/서술형 구간, 배점, 총점, 근거 문구를 별도 초안으로 반환한다.
- UI 변경: 문항 검수 단계에 `AI 문항 구성 초안` 박스를 추가했다. `AI 제안 입력`으로 문항 수 입력칸에 반영하고, 선생님이 수정한 뒤 `문항 수 확정`을 누르면 현재 원본 기준 문항 카드가 새로 생성된다.
- 로직 정리: `questionItems` 배열 길이를 문항 수 확정값처럼 쓰지 않고, `questionComposition.total`은 AI 추천/검수값, `questionTargetCount`는 사람이 확정한 값으로 분리했다.
- 표/다이어그램 위치: 문항 수 확정 → 문항별 배점/단원/난이도/태그 검수 → 크롭/코멘트 작업 이후, 확정된 `questionItems`를 재료로 문항분석표·단원별 출제표·대비전략 흐름도를 렌더링하는 후속 단계로 둔다.
- 저장 주의: 기존 `examAnalyses` app_state 구조 안에 `questionComposition` 필드만 추가하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 문항 수 자동 추론 제거·수동 확정 우선

- 상태: 완료
- 사용자 요청: 20문항 시험이 36문항으로 늘었다. 전체 문항 수는 AI가 초안 검수하거나 사용자가 직접 보면서 정하겠다.
- 원인 정리: PDF 원본 텍스트에서 문항 수를 자동 추론하는 로직이 헤더 반복 또는 선택형/서술형 표기를 중복 집계하면서 20문항 시험을 36문항으로 잘못 확정했다. 문항 수는 자동 확정값으로 쓰면 안 된다.
- 이번 작업 결과: 현재 원본 목표 문항 수 계산에서 원본 텍스트 자동 추론과 AI 반환 문항 배열 길이를 제거했다. `문항 수` 입력값은 사용자가 `문항 카드 만들기` 또는 `AI 문항정보 채우기`를 실행할 때만 목표 문항 수로 사용한다.
- AI 병합 제한: AI가 20문항 시험에 36개 문항 초안을 반환하더라도 목표 문항 수가 확정되지 않았으면 카드로 추가하지 않고, 목표 문항 수가 있으면 그 범위 안의 문항번호만 병합한다.
- 자동 보정 범위 축소: 자동 보정은 `1, 3, 4...`처럼 현재 존재하는 최대 문항번호 안에서 빠진 중간 번호를 메우는 용도로만 제한했다. 더 큰 번호를 자동 생성하거나 자동 삭제하지 않는다.
- 운영 원칙: 전체 문항 수는 사용자가 직접 입력해 확정하거나, AI 분석/검수 결과를 보고 사용자가 입력 후 `문항 카드 만들기`로 반영한다.
- 저장 주의: 기존 `examAnalyses.questionItems` 구조만 사용하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 20문항 시험 목표 수 보정·크롭 이후 흐름 정리

- 상태: 완료
- 사용자 요청: 2025 1-1 기말고사는 20문항인데 전체가 22문항으로 세팅되어 있다. 크롭을 다 하면 이후 워크플로우가 어떻게 되는지 확인.
- 원인 정리: `문항 수` 입력값 기본값 22가 현재 원본 목표 문항 수 계산에 계속 섞였다. 이미 20문항 세트가 있거나 원본에서 20문항으로 추론되는 경우에도 기본 22가 우선되어 빈 21/22번이 생길 수 있었다.
- 이번 작업 결과: 현재 원본 목표 문항 수는 `문항 수` 입력값이 아니라 원본 텍스트/파일명에서 추론한 문항 수, 현재 원본 최대번호, 현재 원본 카드 수를 기준으로 계산한다. `문항 수` 입력값은 새 카드 만들기 또는 AI 문항정보 채우기 실행용으로만 동기화한다.
- 추가 보정: 원본 텍스트에서 `총 20문항`뿐 아니라 `선택형 1번~16번 + 서술형 1번~4번` 같은 범위 표기를 합산해 20문항으로 추론한다. 목표 문항 수보다 큰 번호의 빈 placeholder 카드는 자동 제거한다.
- 크롭 이후 운영 흐름: 크롭 완료 → 문항별 배점/단원/난이도/태그 검수 → 주요문항 상세 인사이트 작성 → 분석 검토의 전체 인사이트 입력 → 표/흐름도 확인 → 최종 산출물 작성 순서로 진행한다.
- 저장 주의: 기존 `examAnalyses.questionItems` 안의 빈 문항 카드 정리와 source 묶음 보정만 사용하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 현재 원본 목표 문항 수·분리 문항 재배치 보정

- 상태: 완료
- 사용자 요청: 2번은 생겼으나 2023 창동고 테스트에서 서술형 4번에 해당하는 22번이 없다. 우상단 번호 표기도 `현재 21문항 / 전체 23문항`처럼 이상하다.
- 원인 정리: 이전 보정은 현재 원본 안의 최대 문항번호까지만 연속성을 확인했다. 따라서 현재 원본이 21번까지만 있으면 목표 문항 수가 22여도 22번을 만들 근거가 부족했다. 또 전체 저장 문항 수는 다른 원본/미분류 문항까지 섞인 값이라 문항 검수 화면의 현재 원본 기준과 맞지 않았다.
- 이번 작업 결과: 현재 원본 목표 문항 수를 `문항 수 입력값`, 현재 원본 최대번호, 현재 원본 카드 수를 함께 보고 계산한다. 현재 원본에서 빠진 번호가 있으면 새 카드를 만들기 전에 전체 저장 목록에서 같은 번호의 분리된 문항 카드를 찾아 현재 원본으로 재배치한다.
- UI 보정: 우상단 배지는 `현재 원본 n/목표문항` 한 줄로만 표시한다. `전체 n문항`처럼 source가 섞이는 숫자는 문항 검수 단계에서 제거했다.
- 저장 주의: 기존 `examAnalyses.questionItems`의 source 묶음만 보정하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 문항번호 공백 자동 보정

- 상태: 완료
- 사용자 요청: 2023 창동고 데이터 테스트 중 현재 2번 문항이 문항번호순에서 빠진다.
- 원인 정리: 문항 카드를 목표 문항 수로 다시 만들 때 기존 문항을 `문항번호`가 아니라 배열 인덱스 순서로 재사용하고 있었다. 따라서 기존 데이터가 `1, 3, 4...`처럼 2번이 빠진 상태이면 2번 빈 카드를 만들지 못하고 누락 상태가 유지될 수 있었다.
- 이번 작업 결과: `createExamQuestionItemsFromCount`를 문항번호 기준 병합으로 바꿨다. 1번부터 목표 문항 수까지 번호별로 기존 카드를 찾아 붙이고, 없는 번호는 빈 카드로 생성한다.
- 추가 보정: 현재 선택한 시험지/연도 안에서 내부 번호 공백이 감지되면 화면 진입 중 자동으로 빈 문항 카드를 끼워 넣는다. AI 문항정보 채우기와 AI 병합도 번호 공백을 메우도록 `hasExamQuestionNumberSequence` 검사를 추가했다.
- 저장 주의: 기존 `examAnalyses.questionItems` 안에서 빈 문항 카드가 추가되는 방식이라 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 문항 수·AI 문항정보·주요문항 인사이트 접힘 보강

- 상태: 완료
- 사용자 요청: 문항별 인사이트의 전체 문제 수와 우측 문제 수가 다르다. 사진 속 배점/단원/난이도 같은 문항 정보도 사람이 전부 입력하지 않고 AI가 먼저 적었으면 좋겠다. 강사코멘트/원문항비교/대비전략은 모든 문항이 아니라 주요문항에만 입력하려 하므로 항상 열려 있으면 피로도가 크다.
- 원인 정리: 일부는 프롬프트 문제이고, 일부는 원본/연도별 문항 세트 병합 문제였다. 기존 프롬프트는 여러 해 시험지가 함께 들어오면 `선택된 시험명 또는 최신 1회분`이라고만 되어 있어 AI가 일부 문항만 반환할 수 있었다. 또한 AI 결과 병합이 문항 번호 중심이라 현재 선택한 원본/연도에 붙는 기준이 약했다.
- 이번 작업 결과: AI 문항 초안 병합을 `questionSourceId/questionSourceUrl/questionTargetCount` 기준으로 보강했다. 현재 선택한 시험지/연도에 AI 결과가 붙고, AI가 일부 문항만 반환해도 목표 문항 수 기준으로 빈 문항 카드를 보강한다.
- UI 보강: 문항 검수 단계에 `AI 문항정보 채우기` 버튼을 추가했다. 현재 선택한 PDF/이미지 원본 1개를 기준으로 배점, 단원, 난이도, 유형, 역할, 출처, 태그 초안을 다시 채울 수 있다. 우측 문항별 인사이트 헤더에는 `현재 n문항 / 전체 n문항`을 함께 표시한다.
- 인사이트 입력 피로도 개선: `이 문항 강사 코멘트`, `이 문항 원문항 비교`, `이 문항 대비 전략`은 기본으로 접힌 `주요문항 상세 인사이트` 안으로 옮겼다. `주요문항`, `1등급 변별문항`, `2등급 변별문항` 또는 준킬러/킬러/상 난이도 문항은 목록에서 강조하고 상세 입력 권장으로 표시한다.
- 프롬프트 보정: 웹앱 기본 프롬프트와 서버 fallback 프롬프트 모두 `현재 선택한 시험지/연도 1회분의 전체 문항 수만큼 questionItems 작성`, `일부 페이지만 보고 일부 문항만 반환하지 않기`를 명시했다.
- 저장 주의: 기존 `examAnalyses.questionItems` 구조에 원본/연도 기준 필드를 활용해 저장하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0). `.jsx`는 Node 직접 check 대상이 아니어서 Vite build로 검증했다.

### 2026-06-27 P1. 시험분석 연도별 문항 세트·태그·문항 인사이트 UI 정리

- 상태: 완료
- 사용자 요청: 원문항 시험지를 다른 연도로 바꿨을 때 우측 문항별 코멘트가 연도를 따라오지 않는다. 문항태그를 `기본문항/실수문항/주요문항/1등급 변별문항/2등급 변별문항`으로 바꾼다. `OCR/문항 텍스트` 입력칸은 제거한다. 강사코멘트/원문항비교/대비전략이 문항별인지 시험지 전체인지 명확히 한다.
- 이번 작업 결과: 문항 검수 화면의 원본 선택을 `현재 시험지/연도` 선택으로 바꾸고, 선택한 원본 파일 기준으로 오른쪽 문항 목록과 입력 폼이 전환되게 했다. 새 연도 원본에 아직 문항 카드가 없으면 현재 세트의 문항 번호/페이지를 기준으로 빈 문항 세트를 만들어 연도별 메모가 섞이지 않게 했다.
- 태그 정리: 문항 태그 버튼은 `기본문항`, `실수문항`, `주요문항`, `1등급 변별문항`, `2등급 변별문항` 5개만 노출한다. 기존 데이터의 예전 태그(`기본 문항`, `분석 필요`, `디벨럽 가능`, `실수 유도`, `변별 문항` 등)는 새 태그로 자동 정규화한다.
- UI 정리: `OCR/문항 텍스트` 입력칸은 문항 검수 화면에서 제거했다. `강사 코멘트`, `원문항 비교`, `대비 전략`은 각각 `이 문항 강사 코멘트`, `이 문항 원문항 비교`, `이 문항 대비 전략`으로 바꾸어 문항별 입력임을 명확히 했다. 시험지 전체 인사이트는 기존 `분석 검토 > 인사이트` 영역에서 입력한다.
- 저장 주의: 기존 `examAnalyses.questionItems` 안의 `cropSourceId/cropSourceUrl` 기준으로 연도별 문항 세트를 나누므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 AI 1차 문항분석표 초안 자동 채움

- 상태: 완료
- 사용자 요청: 문항분석표의 배점, 단원분류, 난이도는 AI가 1차 초안에서 채울 수 있게 한다. 3개년 파일을 올렸을 때 3개년 분석이 문항분류 이후 작업인지 확인한다.
- 답변/설계 결론: 3개년 분석은 AI 1차에서 반복/증감/변화 후보를 잡을 수 있지만, 정확한 비교 분석은 연도별 문항분류가 쌓인 뒤 더 강해진다. 현재 `questionItems` 표는 한 시험지의 문항 검수표이므로, 여러 해 시험지가 함께 들어오면 AI는 선택된 시험명 또는 최신 시험지 1회분의 문항표 초안을 만들고 3개년 비교는 텍스트 분석 필드에 정리한다.
- 이번 작업 결과: 시험분석 API 프롬프트 JSON 스키마에 `questionItems` 배열을 추가하고, 문항별 `number/page/score/questionType/unit/difficulty/role/source/correctRate/ocrText/strategyComment/tags`를 반환하도록 했다.
- 프론트 반영: AI 분석 완료 시 `questionItems`를 기존 문항 카드와 병합한다. 기존 크롭, 선생님 코멘트, 직접 입력값은 보존하고, 비어 있거나 `확인 필요`인 배점/단원/난이도/유형/역할/출처/태그 초안만 채운다.
- 저장 주의: 기존 `examAnalyses.questionItems` app_state 구조에 저장되므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 전체 페이지 AI 크롭 초안 적용

- 상태: 완료
- 사용자 요청: AI 크롭 초안을 PDF의 모든 페이지에 일괄 적용할 수 없는지 확인.
- 이번 작업 결과: 문항 검수 원문항 화면의 버튼을 `현재 페이지 AI 크롭`과 `전체 페이지 AI 크롭`으로 분리했다. 전체 페이지 버튼은 PDF 전체를 페이지별로 임시 렌더링하고 vision API를 순차 호출해 문항별 cropBox/page를 한 번에 반영한다.
- 보완 흐름: vision이 특정 페이지에서 실패하거나 일부 문항을 찾지 못하면 해당 페이지의 문항 수 기준 자동 배치 초안으로 보완한다. 진행 중에는 버튼을 잠그고 `n/전체 페이지 처리 중` 상태 메시지를 보여준다.
- 저장 주의: 크롭 좌표와 페이지는 기존 `examAnalyses.questionItems` 안에 저장되므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 PDF 페이지 넘기기 컨트롤 보강

- 상태: 완료
- 사용자 요청: 문항 검수의 원문항 화면에서 PDF 페이지를 넘기는 곳이 보이지 않는다.
- 원인 확인: PDF 페이지는 숫자 입력으로만 바꿀 수 있었고, 선택 문항의 저장 페이지와 현재 PDF 뷰어 페이지가 같은 값으로 묶여 있어 사용자가 페이지 탐색 기능을 찾기 어려웠다.
- 이번 작업 결과: PDF 뷰어 전용 `cropViewerPage` 상태를 추가하고, 원문항 화면 상단에 이전/다음 버튼, `현재/전체` 페이지 표시, 직접 페이지 입력을 배치했다.
- 저장 흐름: 페이지를 넘기는 것만으로는 문항 데이터가 바뀌지 않으며, `현재 페이지를 선택 문항에 저장` 버튼 또는 크롭 저장 시에만 해당 문항의 page/cropBox가 저장된다. AI 크롭 초안도 현재 보고 있는 PDF 페이지를 기준으로 요청한다.
- SQL 주의: 기존 `examAnalyses.questionItems` 저장 구조만 사용하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 AI 문항 크롭 초안·드래그 표시 보강

- 상태: 완료
- 사용자 요청: PDF/이미지 원본 위에서 드래그해도 크롭 영역 색이나 점선이 잘 보이지 않는다. AI가 먼저 1차적으로 크롭 영역을 만들어오고 사람이 수정만 하면 좋겠다. vision을 쓰거나 더 나은 방법이 있으면 적용한다.
- 이번 작업 결과: 문항 검수 화면에 `AI 크롭 초안` 버튼을 추가했다. 현재 PDF 페이지 또는 이미지 원본을 vision API에 보내 문항별 crop box 초안을 받아오고, 문항 카드의 `cropBox/page/cropSourceId/cropSourceUrl`에 반영한다.
- fallback: vision API가 실패하거나 문항 영역을 못 찾으면 문항 수와 PDF 페이지 수 기준의 자동 배치 초안을 적용한다. 운영 중 API 키/모델 문제가 있어도 크롭 작업이 멈추지 않게 했다.
- 시각 보강: 드래그 중/저장 후 크롭 박스를 주황 점선, 반투명 영역, 어두운 외곽 마스크, `크롭` 라벨, pulse 효과로 더 확실히 보이게 했다.
- API 보강: `/api/ai/exam-question-crops`를 추가했다. OpenAI vision 또는 Claude vision을 사용해 이미지 좌표를 퍼센트 단위 JSON으로 반환한다.
- 저장 주의: 크롭 좌표는 기존 `examAnalyses.questionItems` 안에 저장되므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 기본 프롬프트 1개년/3개년 분기 반영

- 상태: 완료
- 사용자 요청: 3개년 기출일 때와 1개년 기출일 때 프롬프트를 다르게 써야 하며, 오늘 논의한 의도가 선명하게 드러나는 프롬프트를 웹앱에 넣는다. 웹앱 프롬프트를 바탕으로 API가 호출되는지도 확인한다.
- 확인 결과: 시험분석 실행 시 프론트는 `getAiPrompt(..., "examAnalysis") || analysis.aiPrompt` 값을 `/api/ai/exam-analysis` payload의 `aiPrompt`로 보낸다. 서버 `buildExamAnalysisPrompt`는 이 `payload.aiPrompt`를 맨 앞에 넣고, 시험 기본정보/시험관리 탭 데이터/OCR 원문/JSON 반환 규칙을 뒤에 추가한다. 즉 웹앱 시험분석 프롬프트가 실제 API 호출의 바탕이 맞다.
- 이번 작업 결과: 새 분석지 기본 `aiPrompt`, 설정 화면 `시험분석 AI` 기본 프롬프트, 서버 fallback 프롬프트를 모두 1개년/3개년 분기형 워크플로우 프롬프트로 교체했다.
- 프롬프트 의도: 웹앱의 차별점은 GPT 단발 대화가 아니라 학교별·학년별·고사별 분석 누적, AI 1차 분석, 강사 검수, 문항별 코멘트, 표/다이어그램, 최종 산출물 흐름이라는 점을 명시했다.
- 보정: 기존 저장 설정에 예전 기본 시험분석 프롬프트가 남아 있으면 새 기본 프롬프트로 읽히도록 `normalizeAiPrompts` 보정을 추가했다. 직접 커스텀한 프롬프트는 무조건 덮어쓰지 않는다.
- SQL 주의: 프론트 기본값/API fallback/test 변경만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 219, failed 0).

### 2026-06-27 P1. 시험분석 PDF 문항별 렌더링·태그 보강

- 상태: 완료
- 사용자 요청: PDF를 업로드했을 때 문항별로 잘라서 렌더링할 수 있게 하고, 문항별로 `기본 문항`, `분석 필요`, `디벨럽 가능` 등 태그를 붙일 수 있게 한다.
- 이번 작업 결과: 브라우저 PDF 렌더링용 `pdfjs-dist@4.10.38`을 추가했다. 문항 검수 화면에서 업로드된 PDF 원본을 선택하고 페이지 번호를 지정하면 해당 페이지가 캔버스로 렌더링되며, 렌더링 화면 위에서 드래그한 영역이 문항별 크롭 좌표로 저장된다.
- API 보강: 기존 signed URL 리다이렉트와 별도로 `/api/exam-analysis-sources/file` 바이너리 프록시를 추가했다. PDF.js가 CORS 문제 없이 PDF를 가져올 수 있게 Render API가 Storage 파일을 내려준다.
- 문항 태그: 문항별 `tags` 배열에 `기본 문항`, `분석 필요`, `디벨럽 가능`, `실수 유도`, `변별 문항`, `출처 비교`, `수업 확장` 태그를 저장한다. 문항분석표와 강사용 문항별 코멘트에도 태그가 표시된다.
- 저장 주의: PDF 페이지, 크롭 좌표, 태그는 기존 `examAnalyses.questionItems` 안에 저장되므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음, PDF.js는 동적 chunk로 분리). `npm run test:production` 통과(total 218, failed 0).

### 2026-06-27 P1. 시험분석 문항별 검수·크롭·강사 코멘트 워크플로우

- 상태: 완료
- 사용자 요청: 시험분석은 AI가 한 번에 글을 쓰는 방식이 아니라, 시험관리 탭의 특이사항/시험범위/부교재 데이터를 활용하고, 문항분석표 검수 과정에서 단원 수정과 문항별 코멘트를 남기며, 문항 원본을 화면에 띄워 수동 크롭 후 문항 옆 코멘트를 작성할 수 있어야 한다. 상대배점 차트는 필요 없고, 3개년 문항 수 변화에 따른 배점 의미 변화는 내부 판단/문장 분석으로만 쓰면 된다.
- 이번 작업 결과: 시험분석 워크플로우를 `원본 입력 → 문항 검수 → 분석 검토 → 산출물 작성` 4단계로 세분화했다. AI 분석 완료 후 자동으로 `문항 검수` 단계로 이동한다.
- 문항 검수 UI: 문항 수를 입력해 문항 카드를 만들고, 문항별로 배점/유형/단원/난이도/역할/출처/정답률 체감/OCR 텍스트/강사 코멘트/원문항 비교/대비 전략을 입력할 수 있게 했다. `앞번호인데 어려움`, `실수 많음`, `정답률 낮음`, `변별 문항` 같은 빠른 태그도 코멘트에 남길 수 있다.
- 수동 크롭: 시험분석 원본 업로드가 PDF뿐 아니라 이미지 파일도 받는다. 이미지 원본을 문항 검수 화면에 띄우고 드래그한 영역을 문항별 크롭 좌표로 저장한다. PDF는 기존처럼 업로드/텍스트 추출/원본 열기에 사용되며, 브라우저 안 PDF 페이지 렌더링 기반 크롭은 별도 pdf.js 도입 과제로 남겼다.
- 표/다이어그램: 문항 카드 데이터를 기반으로 문항분석표, 단원별 출제표, 부교재·모의고사 반영표, 학생 대비전략표, 대비전략 흐름도를 웹앱에서 렌더링한다. 내부 저장은 분석지 객체의 `questionItems` 배열이며, 선생님 화면에는 표와 카드 UI로만 보인다.
- 시험관리 연동: 연결된 `exam_prep_rows`가 있으면 AI 분석 요청에 시험기간, 수학시험 일정, 특이사항, 시험 범위, 부교재, 시험 후 총평을 함께 보낸다. 연결 데이터가 없으면 기존처럼 메타데이터와 업로드 원본만 기준으로 분석한다.
- 저장 주의: 새 문항별 데이터는 기존 `examAnalyses` app_state 문서 안에 저장되므로 새 Supabase SQL edit 필요 없음. Storage bucket `exam-analysis-sources`는 PDF와 이미지 MIME을 허용하도록 API 허용 목록을 확장했다.
- 검증: `node --check api/routes/examAnalysis.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run build` 통과(Vite chunk size warning만 있음). `npm run test:production` 통과(total 217, failed 0).

### 2026-06-27 P0. 시험관리 날짜 새로고침 유실 복구

- 상태: 완료
- 사용자 제보: 시험관리에서 정의여고/창동고 두 학교의 날짜 데이터만 새로고침 후 지워지는 것처럼 보인다. 수업일지의 직전수업은 잘 남아 있다.
- 원인 확인: 운영 API 기준 `exam_prep_rows`의 `정의여고 고1`, `창동고 고1` 2026 1학기 기말 행은 `mathExamDate/mathExamDates`가 비어 있었지만, 수업일지에는 해당 행에서 파생된 직전수업이 남아 있었다. 즉 시험관리 원본 날짜는 비었고, 파생 수업만 별도 저장되어 있었다.
- 이번 작업 결과: 교사 화면 로딩 후 시험관리 행의 수학시험 날짜가 비어 있는데 연결된 직전수업이 남아 있으면, 직전수업 날짜 + 1일을 원본 수학시험 날짜로 자동 복구하고 `exam_prep_rows`에 저장하도록 했다. 또한 API 저장 직전에도 기존 DB에 시험기간/수학시험 날짜가 있는데 새 payload가 빈 값이면 기존 날짜를 보존해 오래된 빈 요청이 날짜를 덮어쓰지 못하게 했다.
- 운영 데이터 복구: 직전수업 기준으로 `정의여고 고1` 수학시험 날짜는 `2026-07-06`, `창동고 고1` 수학시험 날짜는 `2026-06-30`으로 운영 `exam_prep_rows`에 즉시 복구했다.
- SQL 주의: 기존 `exam_prep_rows.math_exam_date/math_exam_dates` 컬럼을 사용하므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/coreData.js` 통과. `npm run test:production` 통과(total 216, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P0. 알림톡 운영 확인 결과 반영

- 상태: 완료
- 사용자 확인: 박지현 2026-06-26 금요일 수업 알림톡은 알림톡 제외 버튼을 눌렀으므로 발송하지 않는다.
- 사용자 확인: 2026-06-26 알림톡 발송 결과는 Solapi 실제 발송내역과 맞다.
- 사용자 확인: 학생별 알림톡 제외 기능 운영 검수는 완료됐다.
- 후속 메모: 박지현 `강의 내용` 누락 건은 발송 보정 대상이 아니라 제외 처리된 운영 건으로 본다. 다음 작업은 남은 P1 검수 또는 새로 제보된 운영 이슈부터 진행한다.
- SQL 주의: 운영 확인 결과 문서 반영만 했으므로 Supabase SQL edit 필요 없음.

### 2026-06-27 P0. 출결 태블릿 날짜 변경 재동기화 보강

- 상태: 완료
- 사용자 제보: 2026-06-27 문윤슬/김민영은 실제로 10:03/10:06에 태블릿 출결을 찍었고 Solapi 출결 알림톡 발송내역에도 남아 있지만, 웹앱 6/27 수업일지에는 등원 반영이 안 됐다.
- 원인 확인: 운영 DB에서 문윤슬/김민영의 6/27 수업 record는 없고, 대신 6/25 수업 record가 각각 2026-06-27 10:03/10:06 KST에 업데이트되어 있었다. 태블릿 `/attendance` 화면이 오래 켜진 상태에서 날짜가 바뀌어도 서버 수업/record 데이터를 다시 불러오지 않아, stale 로컬 수업 목록의 6/25 수업으로 출결이 들어간 것으로 판단했다.
- 이번 작업 결과: `/attendance` 전용 화면은 서버 데이터 로딩 성공 날짜를 기억한다. 날짜가 바뀌거나 화면 focus/visibility가 돌아오면 출결 데이터를 다시 불러오고, 재동기화 전에는 번호 입력을 막는다. API 동기화 실패 시에는 오래된 localStorage 데이터로 출결 입력을 받지 않도록 로딩 상태를 유지한다.
- 운영 복구 메모: 이미 잘못 반영된 문윤슬/김민영 6/27 등원은 수업일지에서 각각 10:03/10:06으로 수동 보정이 필요하다.
- SQL 주의: 프론트 출결 전용 화면 재동기화 보강만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 208, failed 0). `npm run build` 통과(Vite chunk size warning만 있음). `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 검사하지 못해 `ERR_UNKNOWN_FILE_EXTENSION`로 실행 불가.

### 2026-06-27 P0. 수동 출결 저장 버튼 단일화

- 상태: 완료
- 사용자 제보: 수동 출결 모달에 `출결 저장`과 `저장 후 출결 알림톡 발송` 버튼이 나뉘어 있는데, `출결 저장` 버튼이 잘 작동하지 않는 것처럼 보이고 버튼은 하나만 두되 눌렀을 때 저장/알림톡 발송 분기를 묻는 방식이 좋겠다.
- 이번 작업 결과: 수동 출결 모달 하단 버튼을 `출결 저장` 하나로 줄였다. 버튼을 누르면 `저장만` 또는 `저장 후 출결 알림톡 발송`을 고르는 확인 패널이 뜬다. 태블릿 출결 기록을 수동 변경하는 경우에는 기존처럼 먼저 변경 확인을 거친 뒤 같은 저장 방식 선택 패널로 이어진다.
- SQL 주의: 프론트 수동 출결 모달 UI/분기 변경만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 208, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P0. 수동 출결 저장만 버튼 저장 결과 대기

- 상태: 완료
- 사용자 제보: 수동 출결 모달의 저장 방식 선택 패널에서 `저장만` 버튼이 작동하지 않는다.
- 원인: 수동 출결 저장은 화면 state를 먼저 바꾸고 `/api/lesson-records` 저장 요청을 시작했지만, 실제 Supabase 저장 결과를 기다리지 않고 모달을 닫는 구조였다. 저장 실패/지연이 생기면 사용자 입장에서는 버튼이 반응하지 않거나 저장 여부가 불명확하게 보일 수 있었다.
- 이번 작업 결과: 수동 출결 저장은 `handleSaveRecord` 결과를 기다린 뒤 성공할 때만 모달을 닫는다. `저장만`과 `저장 후 출결 알림톡 발송` 버튼은 저장 중 `저장 중...`으로 잠기며, 저장 실패 시 모달 안에 실패 메시지를 표시한다.
- SQL 주의: 프론트 저장 흐름/피드백 보강만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 209, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 검토 화면 문구/레이아웃/프롬프트 보강

- 상태: 완료
- 사용자 요청: 분석 검토 화면의 `AI가 먼저 본 내용`은 `AI 분석 결과`로, `선생님이 추가할 내용`은 `인사이트`로 바꾸고, 노란 안내 박스는 제거한다. 레이아웃이 복잡하고 AI 분석 결과가 조촐해 보이는 원인이 프롬프트 문제인지 확인한다.
- 원인 확인: 화면은 상단 hero, 좌우 카드 8개, 노란 안내 박스, 하단 액션이 한 화면에 몰려 복잡했다. AI 결과가 조촐한 것은 카드 미리보기가 짧게 잘리는 UI 영향도 있지만, 기본/서버 프롬프트가 JSON 필드명 위주라 문항번호, 배점, 단원명, 유형, 실수 포인트를 충분히 요구하지 않은 영향도 있었다.
- 이번 작업 결과: 검토 화면 섹션명을 `AI 분석 결과`/`인사이트`로 바꾸고, 관련 버튼/모달 문구도 같은 용어로 정리했다. 노란 `강사 인사이트 필수` 박스와 CSS를 제거하고, 카드 높이와 간격을 줄여 화면 밀도를 낮췄다.
- 프롬프트 보강: 기본 시험분석 프롬프트와 서버 프롬프트 모두 문항번호, 배점, 단원명, 유형, 핵심 함정, 예상 오답, 수업 포인트를 더 구체적으로 요구하도록 보강했다. 없는 정보는 추정하지 않고 `확인 필요`로 쓰도록 했다.
- SQL 주의: 프론트 UI와 AI 프롬프트 변경만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 209, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P0. 신규 수동 출결 저장 null record 오류 보정

- 상태: 완료
- 사용자 제보: 수동 출결 저장에서 `Cannot read properties of null (reading 'checkInAt')` 오류가 뜨며 저장되지 않는다.
- 원인: 해당 수업/학생의 기존 `lesson_student_records`가 아직 없는 신규 수동 출결 케이스에서 `applyManualAttendanceTimeFields`가 `existingRecord.checkInAt`을 바로 읽었다. 기본 인자는 `{}`였지만 호출자가 `null`을 넘기면 기본 인자가 적용되지 않았다.
- 이번 작업 결과: `applyManualAttendanceTimeFields` 시작 시 `existingRecord = existingRecord ?? {}`로 정규화해 기존 record가 없는 학생도 등원/지각/하원 수동 저장이 가능하게 했다.
- SQL 주의: 프론트 null-safe 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 210, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 전용 고성능 AI 모델 설정

- 상태: 완료
- 사용자 요청: 현재 API는 Claude Sonnet을 호출하지만, 시험지 분석은 Claude Opus 4.8을 호출하고 싶다. 필요하면 GPT API 결제도 고려한다.
- 원인 확인: `.env.example`에는 `ANTHROPIC_EXAM_ANALYSIS_MODEL`이 있었지만 서버 `selectedModel`은 시험분석 전용 env를 읽지 않고 공통 `ANTHROPIC_MODEL`/`OPENAI_MODEL`만 사용했다. 따라서 시험분석만 Sonnet에서 Opus로 분리하는 설정이 실제 호출에 반영되지 않았다.
- 이번 작업 결과: 시험분석 요청은 `ANTHROPIC_EXAM_ANALYSIS_MODEL` 또는 `OPENAI_EXAM_ANALYSIS_MODEL`을 우선 사용한다. 기본 시험분석 모델은 Claude `claude-opus-4-8`로 잡고, OpenAI 전환 선택지로 `gpt-5.5`를 추가했다. `auto` 제공자 상태에서도 모델명이 `claude-`면 Claude, `gpt-`면 OpenAI로 보내도록 보호했다.
- 운영 배포 주의: Render 환경변수에 `ANTHROPIC_EXAM_ANALYSIS_MODEL=claude-opus-4-8`을 넣으면 시험분석 server-default도 Opus를 사용한다. GPT로 전환할 경우 `OPENAI_API_KEY`와 `OPENAI_EXAM_ANALYSIS_MODEL=gpt-5.5`가 필요하다.
- SQL 주의: API/env/UI 설정 변경만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 211, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P0. 대기 학생 수동 출결 저장 화면 반영 보정

- 상태: 완료
- 사용자 제보: 김민영 출결 모달에서 저장만 버튼을 누르면 1초 정도 저장 중으로 보이고 모달은 닫히지만, 수업일지 프론트 행은 `대기`에서 바뀌지 않는다.
- 원인: 기존 출결 상태가 `pending`인 학생을 열면 모달 내부 `attendanceStatus`도 `pending`으로 유지됐다. 모달에는 `대기` 탭이 없어서 등원 저장처럼 보였지만, 저장 로직은 `pending` 상태로 보고 등원 시각을 비우며 저장했다.
- 이번 작업 결과: 수동 출결 모달은 기존 상태가 `pending`이면 기본값을 `present`로 시작한다. 이미 하원 시간이 있는 기록은 `checkout`으로 시작하고, 결석/지각/하원 등 명시 상태는 그대로 유지한다.
- SQL 주의: 프론트 모달 초기값 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 212, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 검토 화면 버튼 단순화

- 상태: 완료
- 사용자 제보: 분석 검토 화면이 카드와 미리보기 텍스트 때문에 깨져 보이고, 어떤 버튼을 눌러도 결국 수정 모달로 이어지므로 상세 내용은 닫아두고 `AI 분석 결과`, `인사이트` 버튼만 있으면 된다.
- 원인: 분석 검토 단계가 AI 결과 4개 카드와 인사이트 4개 카드를 모두 펼쳐 보여 OCR/AI 응답의 깨진 문자와 긴 텍스트 미리보기가 화면에 그대로 노출됐다.
- 이번 작업 결과: 분석 검토 단계에서 상세 카드와 미리보기 문구를 제거하고, `AI 분석 결과`와 `인사이트` 두 개의 큰 버튼만 남겼다. 각 버튼은 기존 수정 모달을 열어 내용을 확인하고 바로 수정할 수 있다.
- SQL 주의: 프론트 레이아웃 변경만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 212, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 탭 판단형 분석·문서형 미리보기 강화

- 상태: 완료
- 사용자 요청: Notion에 정리한 시험분석 탭 방향, AI 분석 글의 독자별 니즈, 블로그/인스타 재가공 문제를 종합해 실제 웹앱에 구현한다.
- 이번 작업 결과: 시험분석 AI 필드에 `oneLineSummary`, `examStructure`, `typeClassification`, `fiveCorePatterns`, `sourceCheckNotes`를 추가했다. 인사이트 필드도 실제 학생 오답(`insightStudentErrors`)과 다음 시험 예측(`insightPrediction`)까지 확장했다.
- 프롬프트 보강: 기본 프롬프트와 서버 프롬프트 모두 “시험지 요약”이 아니라 “사실 근거 → 점수 영향 → 다음 학습 행동”으로 분석하도록 바꿨다. OCR 깨짐, 문항번호/배점 불확실성은 `sourceCheckNotes`에 모으고, 블로그는 7단락, 인스타는 7장 카드뉴스 구조로 쓰도록 강제했다.
- UI 보강: 산출물 작성 단계의 긴 textarea를 문서형 미리보기로 교체했다. 블로그/학생/학부모/강사용 분석지는 제목·표·목록을 읽기 좋게 렌더링하고, 인스타 원고는 카드뉴스 장별 미리보기로 표시한다. 각 산출물에는 복사와 수정 버튼을 제공한다.
- 저장 주의: 기존 `examAnalyses` app_state 문서에 필드를 추가 저장하는 방식이므로 새 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/examAnalysis.js` 통과. `npm run test:production` 통과(total 213, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 산출물 클릭 미리보기 보강

- 상태: 완료
- 사용자 제보: 산출물 작성 단계에서 `블로그 초안`이나 `인스타 카드뉴스`가 카드 형태로 보이지만 클릭해서 크게 열어볼 수 없다.
- 원인: 산출물 카드는 문서형/카드뉴스형 미리보기와 복사/수정 버튼만 렌더링했고, 카드 본문 클릭 또는 `보기` 버튼이 연결된 산출물 전용 모달이 없었다.
- 이번 작업 결과: 강사용 분석지, 학생 분석지, 학부모 안내문, 블로그 초안, 인스타 카드뉴스 카드에 `보기` 버튼과 본문 클릭 동작을 추가했다. 클릭하면 넓은 미리보기 모달이 열리고, 모달 안에서 바로 복사하거나 해당 산출물 수정 모달로 이동할 수 있다.
- 저장 주의: UI 동작 보강만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 213, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 학교·고사별 폴더 구조 보강

- 상태: 완료
- 사용자 요청: 실제 업무 활용을 위해 분석 목록에 학교별·고사별로 분석지를 누적할 수 있는 폴더 구조를 만들고, 저장/삭제/수정 기능이 동작해야 한다.
- 이번 작업 결과: 시험분석 목록을 `폴더 목록 → 폴더 안 분석지 목록` 구조로 바꿨다. 폴더는 학교, 학년, 고사 구분, 과목, 표시 고사명을 가진다. 기존 분석지는 `analysisFolderId`가 없어도 학교·학년·고사명 기준으로 자동 폴더화되어 보인다.
- CRUD 동작: `+ 폴더`로 빈 폴더를 저장할 수 있고, 폴더 수정 시 해당 폴더 안 분석지의 학교/학년/과목/고사명도 함께 맞춘다. 폴더 안에서 `+ 분석` 또는 상단 `+ 분석 문서`로 분석지를 누적할 수 있다. 폴더 삭제는 폴더 안 분석지까지 함께 삭제한다는 확인 문구를 띄운 뒤 처리한다.
- 저장 주의: 새 `examAnalysisFolders` app_state 키를 추가했다. 분석지 배열 `examAnalyses`와 함께 `/api/app-state`에 자동 저장되므로 새로고침/다른 기기에서도 폴더 구조가 복원된다. 새 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 214, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 폴더 트리 학교→학년→고사 구조 정정

- 상태: 완료
- 사용자 정정: 폴더 구조는 `상계고 · 학년 · 고사`가 한 카드로 보이는 방식이 아니라, 학교를 먼저 클릭하고 그 아래 학년, 그 아래 1년에 4번 있는 고사, 그 하위에 분석지가 나타나는 구조여야 한다.
- 이번 작업 결과: 시험분석 목록을 `학교 → 학년 → 고사 → 분석지` 트리로 바꿨다. `+ 학교`로 창동고/용화여고/정의여고 같은 학교 폴더를 만들고, 선택한 학교 아래에서 `+ 고사`로 학년과 고사 구분을 저장한다. 고사 구분은 해당 연도 1학기 중간/기말, 2학기 중간/기말 4개가 기본으로 뜬다.
- CRUD 동작: 학교 수정/삭제, 고사 수정/삭제, 고사 하위 분석지 추가/삭제가 동작한다. 학교명을 수정하면 하위 고사와 분석지의 학교명도 같이 따라간다. 학교 삭제는 그 학교 아래 고사와 분석지를 함께 삭제한다는 확인 문구를 띄운다.
- 저장 주의: 기존 `examAnalysisFolders` app_state를 유지하되 `folderType: school`과 `folderType: exam`을 구분해 저장한다. 기존 합쳐진 폴더 데이터도 자동으로 학교 트리 안에 흡수되므로 새 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 214, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-27 P1. 시험분석 라이브러리 전체 화면 분리

- 상태: 완료
- 사용자 정정: 좌측 트리 구조가 너무 복잡하고 우측 빈 작업영역이 크게 보인다. 트리 구조는 화면 전체에 보이고, 분석지 만들기/수정은 별도 화면으로 분리해야 한다. 분석/수정/삭제 버튼도 각 컴포넌트마다 반복하지 말고 효율적으로 모아야 한다.
- 이번 작업 결과: 시험분석 기본 화면을 전체 폭 라이브러리로 바꿨다. 화면에는 `학교 → 학년 → 고사 → 분석지` 4열 트리만 보이고, 분석지는 선택 후 `분석 열기`로 별도 작업 화면에 들어간다. 새 분석지를 만들면 바로 분석 작업 화면으로 전환되며, 작업 화면 상단 `← 분석 목록`으로 돌아올 수 있다.
- UI 정리: 학교/고사/분석지 카드 내부의 반복 액션 버튼을 제거하고, 생성 액션(`+ 학교`, `+ 고사`, `+ 분석지`)과 관리 액션(`학교 수정/삭제`, `고사 수정/삭제`, `분석 열기/삭제`)을 라이브러리 상단에 모았다.
- 저장 주의: 기존 `examAnalysisFolders`/`examAnalyses` app_state 저장 구조를 그대로 사용하므로 새 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 214, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수동 하원 알림톡 발송 지원

- 상태: 완료
- 사용자 요청: 학생이 태블릿에서 하원을 찍지 못한 경우, 강사가 수동으로 하원 시각을 입력하고 하원 알림톡도 발송할 수 있어야 한다.
- 이번 작업 결과: 수동 출결 모달에 `하원` 상태와 `하원 시각` 입력을 추가했다. 저장 시 `lesson_student_records.check_out_at/check_out_time`에 실제 하원 시각을 저장하고, `저장 후 출결 알림톡 발송`을 누르면 `attendanceStatus: "checkout"`과 하원 시각을 사용해 학부모 하원 알림톡을 보낸다.
- 추가 보강: 기존 등원/지각 수동 알림톡은 등원 시각을 그대로 쓰고, 하원 수동 알림톡은 하원 시각을 `시간` 줄에 표시하도록 분기했다. 태블릿 출결 수정 확인/재발송 흐름에도 하원 시각 변경 감지를 포함했다.
- SQL 주의: 기존 `check_out_at/check_out_time` 컬럼을 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 207, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 최종 알림톡 문구 입력 끊김 보정

- 상태: 완료
- 사용자 제보: 학부모/학생 알림톡 작성 모달의 `최종 알림톡 문구` textarea에서 글자 수정과 타이핑이 잘 되지 않는다.
- 원인: textarea가 입력할 때마다 `onChangeRecord`를 직접 호출해 부모 records 상태와 자동저장/미리보기 갱신 흐름이 동시에 움직였다. 이 구조는 한글 조합 중간 입력이 부모 record 재계산으로 덮일 수 있어 타이핑이 끊기는 문제가 생길 수 있었다.
- 이번 작업 결과: 알림톡 작성 모달은 입력 중에는 내부 `draftComment` state만 갱신한다. 닫기, AI 수정, 발송 버튼을 누를 때 현재 draft를 record에 반영한다. 미리보기와 발송 payload도 이 draft 기준으로 생성한다.
- SQL 주의: 프론트 입력 상태 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 206, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수업메모 알림톡 반영 위치 정정

- 상태: 완료
- 사용자 정정: 수업메모는 알림톡의 별도 `수업메모` 항목으로 들어가면 안 된다. 체크한 대상에게 보낼 때는 무조건 `강사코멘트`/`코멘트` 항목으로 들어가야 하며, 특히 학생 알림톡에서는 강사코멘트로 보여야 한다.
- 원인: 직전 보강에서 수업메모를 `preparationNotice` 구조화 필드로 보내고, 프론트 미리보기와 서버 본문에 `📝 수업메모` 블록으로 표시하도록 만들었다. 이는 운영 의도와 달랐다.
- 이번 작업 결과: 프론트 예약발송/즉시발송/수동재발송 모두 체크된 수업메모를 최종 코멘트 본문에 합쳐 보낸다. `preparationNotice`는 새 payload에서 빈 값으로 보내며, 미리보기에서도 별도 `📝 수업메모` 블록을 제거했다. 서버는 과거 예약 payload에 `preparationNotice`가 남아 있어도 별도 블록으로 표시하지 않고 `💬 코멘트` 안으로 합친다.
- 중복 방지: 기존 강사코멘트에 같은 수업메모 문구가 이미 들어 있으면 다시 붙이지 않는다.
- SQL 주의: 기존 `lesson_student_records.preparation_memo/prep_student_visible/prep_parent_visible` 저장값만 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 205, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 알림톡 발송 완료 후 수업일지 버튼 색상 반영

- 상태: 완료
- 사용자 제보: `알림톡 예약 확인` 모달에서는 학부모/학생 알림톡이 `발송 완료`로 보이지만, 수업일지 우측의 학부모/학생 알림톡 버튼은 여전히 예약 중 색상으로 남아 있다.
- 원인: 예약 확인 모달은 실제 서버 발송 대기열인 `notification_jobs.status`를 기준으로 표시했지만, 수업일지 행 버튼은 `lesson_student_records.teacherCommentSendStatus/studentCommentSendStatus` 문자열을 기준으로 표시했다. 예약 dispatch가 job 상태를 `sent`로 바꿔도 학생 record의 이전 `예약 중` 문자열이 남으면 버튼 색이 바뀌지 않았다.
- 이번 작업 결과: 수업일지 행의 학부모/학생 알림톡 버튼 색상과 상태 문구는 같은 학생/수업의 `notification_jobs` 상태를 우선 사용한다. job이 없을 때만 기존 record 상태 문자열로 fallback 한다. 따라서 예약 확인 모달에서 `발송 완료`인 경우 우측 버튼도 성공 색상과 `발송 완료` 문구로 맞춰진다.
- SQL 주의: 기존 `notification_jobs`와 `lesson_student_records` 조회값만 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 205, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수업메모 문구 실제 알림톡 반영 확인

- 상태: 완료
- 사용자 확인 요청: 수업메모 모달의 문구가 `학생 알림톡 초안에 포함`/`학부모 알림톡 초안에 포함` 체크 상태에 맞춰 실제 알림톡에도 반영되는지 확인한다.
- 확인 결과: 서버 알림톡 본문에는 `📝 수업메모` 항목이 있었지만, 프론트 즉시발송 payload의 `preparationNotice`가 비어 있어 수업메모가 실제 구조화 본문에 안정적으로 들어간다고 보기 어려웠다. 예약발송도 같은 값을 명시적으로 넘기지 않았다.
- 이번 작업 결과: 학생 체크가 켜진 경우 학생 알림톡의 `📝 수업메모` 항목으로, 학부모 체크가 켜진 경우 학부모 알림톡의 `📝 수업메모` 항목으로 수업메모 문구를 보낸다. 체크하지 않은 대상에는 보내지 않는다. 즉시발송/수동재발송/예약발송 미리보기와 payload를 같은 규칙으로 맞췄고, 코멘트 본문에는 같은 문구가 중복으로 들어가지 않게 제거한다.
- SQL 주의: 기존 `lesson_student_records.preparation_memo/prep_student_visible/prep_parent_visible` 저장값과 기존 알림 payload 구조를 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 204, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수업메모 저장 상태/화면 반영 보정

- 상태: 완료
- 사용자 제보: 수업메모 모달에서 메모를 입력하고 저장해도 저장이 잘 되지 않고 `다시 저장` 상태가 보인다.
- 원인: 수업메모 모달은 입력 중 자동저장을 피하기 위해 local draft를 저장 버튼에서 `recordOverride`로 넘긴다. 그런데 저장 성공 후 로컬 record의 `updatedAt`이 저장한 draft보다 오래된 경우에도 최신 record가 아니라고 오판해 화면/저장상태 반영을 건너뛸 수 있었다. 또한 실패한 저장도 마지막 저장 snapshot으로 먼저 기록될 수 있었다.
- 이번 작업 결과: 명시 저장 record가 로컬 record보다 최신이면 저장 성공 후 로컬 records/localStorage/saveState를 갱신하도록 했다. 저장 실패 시에는 마지막 저장 snapshot을 갱신하지 않아 `다시 저장`이 같은 내용으로 정상 재시도된다.
- SQL 주의: 기존 `lesson_student_records.preparation_memo/prep_*` 저장 경로만 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 203, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 시험분석 AI 최초 초안 확인 동선 보강

- 상태: 완료
- 사용자 제보: 강사 인사이트를 추가하려면 AI가 처음 분석한 시험분석 개요를 보고 참고해야 하는데, 어디에서 어떻게 봐야 하는지 흐름이 명확하지 않다.
- 이번 작업 결과: AI 분석 실행 결과를 `aiInitialFields`와 `aiInitialGeneratedAt`으로 스냅샷 저장한다. 이후 AI 필드를 수정해도 최초 AI 초안을 별도로 열람할 수 있다.
- UI 보강: 분석 검토 화면을 `AI가 먼저 본 내용`과 `선생님이 추가할 내용` 두 영역으로 나눴다. `AI 최초 분석 보기` 모달에서 시험 개요, 단원 분포, 킬러/준킬러, 실수 패턴, 학생/학부모/홍보 초안을 한 번에 볼 수 있고 바로 강사 인사이트 입력으로 이동할 수 있다.
- SQL 주의: 기존 `examAnalyses` app_state 문서에 필드를 추가 저장하는 방식이므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 202, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 시험분석 최종 산출물 워크플로우 보강

- 상태: 완료
- 사용자 의도 확인: 시험분석 탭은 PDF 1개 또는 여러 개를 업로드할 수 있어야 하며, AI 분석만 보여주는 화면이 아니라 강사 현장 인사이트를 반드시 섞어 강사용 분석지, 학생/학부모 전달물, 블로그/인스타 홍보용 산출물을 모두 1순위로 만드는 도구여야 한다.
- 이번 작업 결과: 시험분석 원본 입력에서 PDF 다중 선택/드롭을 지원한다. 여러 PDF를 순차 업로드하고 각 파일의 텍스트 추출 결과를 같은 분석 문서 원문에 누적한다.
- UI 보강: 분석 검토 단계에 `강사 인사이트 필수` 안내를 추가하고, 산출물 작성 단계에 `최종 산출물 3종` 패널을 추가했다. 강사용 분석지, 학생 분석지, 학부모 안내문, 블로그 초안, 인스타 카드뉴스를 같은 단계에서 편집/확인한다.
- 최종 보고서: `최종 보고서 미리보기` 모달을 추가했다. 현재 편집 상태를 A4형 보고서 형태로 미리보고 브라우저 인쇄에서 PDF로 저장할 수 있다. 서버 PDF 렌더링 의존성 추가 없이 운영 배포에서 바로 사용할 수 있는 방식이다.
- SQL 주의: 기존 `examAnalyses` app_state 저장 구조를 그대로 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 통과(total 201, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 시험분석 완료 상태와 JSON 표시 보정

- 상태: 완료
- 사용자 제보: 시험분석이 완료됐는지 아닌지 화면에서 알기 어렵고, 분석 검토 화면에 여전히 JSON 조각이 그대로 보인다. 화면 안에 세부 내용이 다 들어오기 어렵다면 전체 개요를 한눈에 보여주고 세부 확인/수정/저장은 별도 모달로 여는 편이 좋겠다.
- 원인: `aiStatus`는 저장됐지만 목록/기본정보 화면에서 상태 배지로 강조되지 않았다. AI 응답이 JSON 코드블록이 아니라 필드 안에 JSON 조각 형태로 잘려 들어온 경우 기존 정규화가 충분히 분해하지 못했다. 분석 검토 화면도 긴 textarea를 한 번에 펼쳐 전체 개요 파악이 어려웠다.
- 이번 작업 결과: 분석 상태를 `원본 대기/분석 전/분석 중/분석 완료/분석 실패` 배지와 상태 줄로 표시한다. JSON 조각 파서를 보강해 필드 안에 섞인 `"unitDistribution"` 같은 키를 다시 분해하고, 각 필드에 남은 JSON 꼬리를 제거한다.
- UI 보강: 분석 검토 단계는 요약 카드형 개요 화면으로 바꾸고, AI 구조화 필드/강사 검토/산출물 초안은 별도 모달에서 넓게 수정하도록 했다.
- SQL 주의: app_state 저장 구조는 그대로 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 200, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수업메모 저장 로딩 지연 보정

- 상태: 완료
- 사용자 제보: 수업메모 모달에서 `저장 중` 상태가 너무 오래 지속된다.
- 원인: 수업메모 입력 중 `onChangeRecord`가 매 입력마다 자동저장을 예약하고, 저장 버튼도 다시 전체 수업기록 저장을 실행했다. 이 경로는 관련 숙제 bulk 저장과 알림 예약 갱신까지 기다려 수업메모 단일 저장에는 과했다.
- 이번 작업 결과: 수업메모 모달은 입력 중에는 local draft만 갱신하고, 저장/닫기 때 한 번만 저장한다. 수업메모 저장은 관련 숙제 bulk 저장과 알림 예약 재생성을 건너뛰는 경량 저장 옵션을 사용한다.
- 추가 보강: 같은 draft를 저장 버튼과 닫기에서 중복 저장하지 않도록 마지막 저장 snapshot을 기억한다.
- SQL 주의: 기존 `lesson_student_records.preparation_memo/prep_*` 저장 경로만 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 199, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수동 보강 수업 빈 화면 보정

- 상태: 완료
- 사용자 제보: 캘린더에서 보강 수업을 하나 생성했는데, 해당 보강 pill을 누르면 빈 화면이 보인다.
- 원인: `lessonType: "makeup"` 수업 중 `숙제보충` 문자열이 포함된 경우 연결된 보충 task가 없어도 숙제보충 전용 상세 화면으로 분기할 수 있었다. 또한 수업 허브에 선택 수업의 학생/기록만 내려보내는 구조라, 수동 보강처럼 클릭 직후 selectedLesson이 바뀌는 케이스에서 상세가 학생을 안정적으로 해석하지 못할 수 있었다.
- 운영 확인: 2026-06-26 수동 보강 `lesson_2026-06-26_보강_1782472846571`은 `sourceMakeupTaskId`가 비어 있고 학생 1명(`student_mwf710_008`)이 active 상태였다. 시간은 DB time 형식으로 `16:00:00` 저장되어 있었다.
- 이번 작업 결과: 숙제보충 전용 상세 화면은 실제 `homework_makeup` task에 연결된 보강 수업일 때만 열리게 했다. 수동 생성 보강/결석보강/재시험 보강 등은 일반 수업일지 화면으로 열린다. 수업일지 상세는 전체 학생/기록을 받은 뒤 내부에서 `lesson.studentIds` 기준으로 현재 수업 학생만 필터링한다.
- 추가 보강: 기존 DB의 `16:00:00` 같은 time 값을 수업 수정 모달에서는 `HH:mm`으로 정규화해 입력 필드가 깨지지 않게 했다.
- 후속 보강: 수업일지 상세 렌더 중 예외가 나도 빈 모달로 끝나지 않게 오류 경계를 추가했다. 오류가 발생해도 수업명, 시간, 학생 목록, 수업 수정 버튼과 오류 메시지가 표시된다.
- 추가 제보: fallback 화면에 `Cannot read properties of null (reading 'attendanceStatus')`가 표시됐다. `hasMissingCheckOut`와 출결 표시 함수가 null record도 안전하게 처리하도록 보정하고, fallback 화면에도 `수업 취소 처리` 버튼을 추가했다.
- SQL 주의: 프론트 상세 화면 분기 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 198, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수동 출결 등원시각 저장 기준 통일

- 상태: 완료
- 사용자 제보: 오늘 실제 등원 시각이 18:50이라 수업일지 출결 모달에서 해당 시각으로 바꾸고 `저장만` 하려고 했으나 화면/저장이 바뀌지 않는다.
- 원인: 화면 표시 쪽은 현재 수업+학생 기준으로 record를 찾도록 보정했지만, 일부 수동 저장/자동저장/상태 갱신 경로는 아직 `lessonStudentRecordId` 단독 기준으로 기존 record를 찾거나 교체했다. 운영 데이터에 기존 id와 `lessonId + studentId` 기준이 어긋난 record가 있으면 수동 저장이 같은 수업 학생 record를 정확히 덮어쓰지 못할 수 있었다.
- 이번 작업 결과: 태블릿 출결, 수동 출결, 수업일지 필드 변경, 알림 제외 상태, 저장 완료 후 record 반영을 모두 `lessonStudentRecordId` 우선 + `lessonId + studentId` 보조 기준으로 통일했다. 같은 수업/학생 record가 중복으로 붙지 않도록 전용 upsert 헬퍼로 교체한다.
- 추가 보강: 하원 상태 등 기존 등원시각이 있는 record에서도 수동으로 입력한 `등원 시각`이 기존 `checkInTime`보다 우선 저장되도록 했다.
- SQL 주의: 프론트 record 식별/교체 로직 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 195, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P1. 수업 등록 학생 그룹 전체 해제 버튼 추가

- 상태: 완료
- 사용자 요청: 수업 등록/수정 모달에서 학년별 `전체 선택`은 있으나 잘못 선택했을 때 한 번에 해제하는 버튼도 필요하다.
- 이번 작업 결과: 학년별 학생 그룹 헤더에 `전체 해제` 버튼을 추가했다. 클릭 시 해당 학년/그룹 학생만 현재 선택 목록에서 제거한다.
- SQL 주의: 프론트 선택 UI만 변경하므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 194, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수동 출결 저장 후 화면 표시 미갱신 보정

- 상태: 완료
- 사용자 제보: 수동 출결에서 저장을 눌렀으나 수업일지 화면 표시가 바뀌지 않는다.
- 원인: 수동 저장은 `lessonStudentRecordId` 기준으로 정상 갱신하고 있었지만, 수업일지 화면 일부는 현재 수업의 레코드가 아니라 `studentId`만으로 records 배열의 첫 번째 항목을 찾았다. 같은 학생의 다른 날짜/다른 수업 기록이 앞에 있으면 저장 후에도 화면이 이전 기록을 계속 표시할 수 있었다.
- 이번 작업 결과: 수업일지/예약상태/하원 미체크/기존 상세 테이블의 record 조회를 `lessonStudentRecordId` 우선, `lessonId + studentId` 보조 기준으로 통일했다.
- SQL 주의: 화면 조회 로직 보정만 있으므로 Supabase SQL edit 필요 없음.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 193, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수동 출결 과거 등원시각과 알림톡 시간 보정

- 상태: 완료
- 사용자 제보: 학생이 태블릿 출결을 찍지 않고 등원한 경우 강사가 수동으로 출결 알림톡을 보내야 한다. 지각 15분은 월수금 7-10 수업 기준 19:15 등원으로 처리되지만, 지각이 아닌 정상 등원을 나중에 수동 체크하면 현재 시각이 알림톡에 찍힌다.
- 원인: 수동 출결 모달에 실제 등원시각 입력 필드가 없고, 정상 등원 수동 저장은 `nowIso` 기준으로 `checkInAt/checkInTime`을 채웠다. 알림톡 발송도 저장된 출결 시간이 아니라 현재 시각을 기본값으로 사용했다.
- 이번 작업 결과: 수동 출결 모달에 `등원 시각` 입력을 추가했다. 정상 등원/지각/등원 상태는 입력한 과거 시각을 `checkInAt/checkInTime`에 저장하고, 알림톡도 같은 시각을 사용한다. 지각은 직접 시각을 비워도 기존 운영처럼 `수업 시작시각 + 지각분`으로 등원 시각을 계산한다.
- 알림톡 보강: 출결 알림톡의 정상 등원 `시간` 줄은 ISO/현재 문자열 대신 `HH:mm`으로 정리해 표시한다. 태블릿 출결도 저장된 등원/하원 시각을 payload에 포함한다.
- SQL 주의: 기존 `lesson_student_records.check_in_at/check_in_time` 컬럼을 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `node --check api/routes/notifications.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 통과(total 192, failed 0). `npm run build` 통과(Vite chunk size warning만 있음).

### 2026-06-26 P0. 수업 명단/수업일지 저장 Failed to fetch 보정

- 상태: 완료
- 사용자 제보: 2026-06-26 수업에서 김예나 학생이 월수금 4-7 대신 7-10에 오기로 해서 해당 날짜 수업 명단만 조정하려고 했으나 `자동 수업 저장 실패: Failed to fetch` 알림이 뜨고 저장이 안 되는 것처럼 보인다.
- 확인 결과: 운영 API `GET /api/lesson-records`와 `/health`는 정상이나, `POST /api/lesson-records` 등 Supabase 쓰기 경로가 10초 이상 응답하지 않아 브라우저에서 fetch 실패처럼 보일 수 있었다. 로컬에서 같은 Supabase REST에 `PATCH`를 직접 실행하면 정상 속도로 처리됐다.
- 이번 작업 결과: Supabase REST 쓰기 요청에 12초 타임아웃을 추가해 무한 대기 대신 명확한 오류를 반환하게 했다. `lessons`, `lesson_student_records`, `homeworks` upsert에 `on_conflict` 기준을 명확히 지정해 수업 저장, 하루 명단 수정, 수업일지 자동저장, 숙제 저장의 충돌 처리를 안정화했다.
- 프론트 보강: 수업 추가/수정과 수업 명단 일괄 저장 실패가 콘솔에만 남지 않고 `수업 저장 실패`/`수업 명단 저장 실패`로 사용자에게 보이게 했다.
- 운영 메모: 진단용으로 생성된 `diagnostic_noop_record_20260626` 레코드는 확인 후 삭제했다. 실제 사용자 데이터는 삭제하지 않았다.
- SQL 주의: 기존 unique 제약과 REST upsert 옵션을 활용하는 코드 변경이므로 Supabase SQL edit 필요 없음.
- 검증: 로컬에서 운영 Supabase 대상 `upsertLesson`, `upsertLessonStudentRecord` 직접 호출 성공. `node --check api/lib/supabaseRest.js`, `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 191개 통과, `npm run build` 통과.

### 2026-06-26 P0. 시험분석 AI 결과 프론트 표시 보정

- 상태: 완료
- 사용자 제보: 상계고1 공통수학1 2026 1학기 중간고사 PDF 업로드와 AI 산출물 생성은 확인되지만, 프론트 화면에서 AI 결과가 JSON 코드블록/깨진 원문처럼 보여 검토하기 어렵다.
- 확인 결과: 운영 `app_state.examAnalyses`에는 PDF 업로드, Storage 경로, 텍스트 추출 약 25,004자, AI 분석 완료 상태와 산출물 초안이 저장되어 있었다. 다만 `aiOverview`에 AI JSON 코드블록 전체가 들어가고, `rawExamText` 앞부분에 이전 업로드 실패 로그(`Bucket not found`, `Invalid key`)가 누적되어 있었다. 학교/학년/과목/시험명 메타데이터도 비어 있었다.
- 이번 작업 결과: AI 응답이 JSON 코드블록으로 들어와도 `aiOverview`, `unitDistribution`, `killerProblems`, `mistakePatterns`, 학생/학부모/블로그/인스타 초안 필드로 자동 분해해 화면에 표시한다. 기존 저장 데이터도 화면에서 읽을 때 자동 보정된다.
- 추가 보강: PDF 업로드 실패 메시지는 더 이상 `rawExamText`에 누적하지 않고 상태 메시지로만 표시한다. 성공 업로드 시 기존 실패 로그 블록은 제거하고, 파일명에서 학교/학년/과목/시험명을 가능한 범위에서 추론해 빈 기본정보를 채운다.
- SQL 주의: app_state 표시/정규화 로직 변경이며 스키마 변경 없음.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 190개 통과, `npm run build` 통과.

### 2026-06-26 P0. 시험분석 PDF 업로드 Bucket not found 보정

- 상태: 완료
- 사용자 제보: 시험분석 `원본 입력` 단계에서 PDF 업로드 시 `업로드 실패 · Bucket not found`가 표시된다.
- 원인: 시험분석 PDF 업로드는 Supabase Storage `exam-analysis-sources` 버킷을 사용한다. 서버에 버킷 자동 생성 코드가 있었지만, Supabase Storage가 버킷 없음 오류를 404가 아니라 `Bucket not found` 메시지로 반환하는 경우를 자동 생성 대상으로 보지 못해 업로드가 실패할 수 있었다.
- 이번 작업 결과: Storage 버킷 없음 판정을 `404`뿐 아니라 `Bucket not found`/유사 메시지까지 포함하도록 보강했다. 업로드 직전에도 같은 오류가 나오면 버킷 생성 후 한 번 재시도한다. 시험분석 버킷은 PDF 전용 `exam-analysis-sources`로 자동 생성된다.
- 추가 보강: 버킷 생성 후 한글 파일명이 포함된 PDF에서 `Invalid key`가 발생했다. Supabase Storage object key에는 ASCII 안전 파일명을 사용하고, 화면 표시/분석 기록용 `fileName`은 원본 한글 파일명을 그대로 보존하도록 경로 생성 로직을 분리했다.
- SQL 주의: 서버가 service role로 Storage 버킷을 자동 생성하도록 보강했으므로 Supabase SQL edit은 필요 없다. 만약 운영 Supabase 권한/정책상 자동 생성이 막히면 Supabase Dashboard Storage에서 `exam-analysis-sources` 비공개 버킷을 수동 생성하면 된다.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 189개 통과, `npm run build` 통과.

### 2026-06-26 P0. 예약 시간 지난 학생/학부모 알림톡 수동 재발송

- 상태: 완료
- 사용자 요청: 2026-06-25 학생 알림톡 실제 발송 본문 오류 검수 후, 이미 예약 시간이 지난 수업일지 알림톡 모달에서도 한두 건을 수동 재발송할 수 있게 한다.
- 이번 작업 결과: 학생/학부모 알림톡 작성 모달에서 기본/30분 지연 예약 시간이 이미 지난 경우 기존 `예약 시간 지남` 비활성 버튼 대신 `수동 재발송` 버튼을 노출하고, 클릭 시 현재 미리보기 구조 그대로 즉시 발송한다. 기존 `sent` 예약 기록은 되돌리지 않고 새 즉시 발송 기록을 남긴다.
- 추가 보강: 현재 수업 발송 계획이 `알림톡 없음`인 과거 수업도 같은 버튼 자리에서 `수동 재발송`할 수 있게 했다. 단, 개별 학생/대상의 `알림 제외` 상태는 계속 발송 차단한다.
- 기록 보강: 수동 재발송 payload에 `manualResend`, `resendReason: "예약 시간 경과 후 수동 재발송"`을 남기고, `notification_jobs.previewBody`에는 모달 오른쪽의 구조화 미리보기 본문을 저장해 실제 발송 문구 대조가 쉬워지게 했다.
- SQL 주의: 기존 `notification_jobs` payload/preview_body 저장 흐름만 사용하므로 Supabase SQL edit 필요 없음.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 189개 통과, `npm run build` 통과. `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 syntax-check하지 못해 적용 불가.

### 2026-06-26 P0. 김재연 출결 알림톡 중복 발송 확인 및 방지

- 상태: 완료
- 사용자 확인 요청: 2026-06-26 15:28 전후 김재연 학생 출결 알림톡이 2번 발송됐는지 확인하고, 2026-06-25 학생 알림톡이 강사코멘트와 합쳐지지 않고 두 번 간 것 같은 현상을 점검한다.
- 확인 결과: Solapi 실제 발송내역 기준 2026-06-26 15:20~15:35에는 김재연 출결 알림톡이 없었고, 15:38:58에 학부모 번호로 동일한 출결 알림톡 2건이 발송 완료됐다. 2026-06-25 김재연 수업 안내는 학부모용 1건, 학생용 1건으로 각각 다른 번호에 발송된 정상 분리 발송이었다.
- 원인: 출결 알림톡 즉시 발송 경로(`/api/notifications/attendance-alimtalk`)는 `notification_jobs` 예약 테이블을 사용하지 않고 바로 Solapi에 보내며, 같은 학생/수업/상태 호출이 짧은 시간에 중복으로 들어오는 경우 서버에서 중복 억제를 하지 않았다.
- 이번 작업 결과: 프론트에 `attendanceNotificationLocksRef`를 추가해 같은 학생/수업/출결상태 발송 요청을 잠그고, 서버에 `sendAttendanceAlimtalkOnce` 중복 억제 레이어를 추가했다. 동일 학부모 번호+학생+수업+출결상태 조합이 2분 안에 다시 들어오면 Solapi 재발송 없이 `duplicateSuppressed`로 응답한다.
- 운영 주의: 로컬 `.env`의 `SOLAPI_API_SECRET`은 Render 운영값과 달라 Solapi 조회에 실패했다. 조회는 Render 환경변수 값을 메모리에서만 사용해 수행했으며 비밀값은 출력/커밋하지 않았다.
- SQL 주의: 코드 레벨 중복 억제이므로 Supabase SQL edit 필요 없음.
- 검증: `npm run test:production` 188개 통과, `npm run build` 통과.

### 2026-06-26 P0. 학생 알림톡 코멘트 단문 발송 원인 수정

- 상태: 완료
- 사용자 확인 요청: 2026-06-25 22:30 이후 학생 알림톡 중 강사코멘트 중심 문장만 들어간 발송이 있었는지 확인하고, 로직 문제가 있으면 수정한다.
- 확인 결과: 2026-06-25 22:30 이후 실제 Solapi 발송은 학생용 15건, 학부모용 15건이었다. 학생용 15건 중 8건은 `commentBodyOverride`가 있는 학생이라 실제 발송 본문이 출결/과제/교재/강의내용 구조 없이 코멘트 문장 중심으로 나갔다. 반면 `notification_jobs.preview_body`에는 15건 모두 구조화 항목이 있어, 미리보기와 실제 발송이 어긋난 상태였다.
- 원인: 서버 `sendLessonCommentAlimtalk`가 `commentBodyOverride`를 “코멘트 문장”이 아니라 “전체 본문 대체값”으로 해석했다. 그래서 학생 코멘트가 입력된 경우 구조화 본문 생성을 건너뛰었다.
- 이번 작업 결과: 수업일지 context(`lessonId`, 출결/과제/교재/숙제 등)가 있는 payload는 `commentBodyOverride`를 전체 본문 대체가 아니라 `💬 코멘트` 내용으로만 넣도록 `resolveLessonCommentBody`를 추가했다. 공지문자처럼 수업일지 context가 없는 override는 기존처럼 그대로 발송된다.
- 검증: dry-run으로 수업일지 학생 알림톡은 `🏫 출결`~`💬 코멘트` 구조가 유지되고, 공지문자는 override 본문만 유지되는 것을 확인했다. `npm run test:production` 188개 통과, `npm run build` 통과.
- SQL 주의: 서버 본문 조립 로직 변경만 있으므로 Supabase SQL edit 필요 없음.

### 2026-06-26 P0. 알림톡 전체 로직 점검과 production dry-run

- 상태: 완료
- 사용자 요청: 알림톡 전체 로직을 검사하고 워크플로우를 요약하며, dry-run으로 실제 발송 가능 상태를 확인한다.
- 운영 설정 확인: Render 기준 `ALIMTALK_DRY_RUN=false`, 학부모/학생 실제번호 발송 허용, Solapi API key/secret/PFID와 템플릿 3종 모두 존재, `NOTIFICATION_DISPATCH_TOKEN` 존재, production `/api/integrations/status`의 `notifications.missing=[]` 확인. Solapi `getBalance()` 조회도 성공해 인증 조합이 유효함을 확인했다.
- production dry-run 결과: `attendance`, `parent_comment`, `student_comment`, `notice_student`, `daily_report`, `schedule_reminder` 6개 API를 `forceDryRun:true`로 호출했다. 모두 `ok=true`, `provider=solapi`, `dryRun=true`였고, 실제 발송은 하지 않았다. live 설정상 dry-run이 아니면 등록 번호로 발송될 상태이며, dry-run에서는 `requestedTo`와 `sentTo`가 실제 대상 번호로 해석되고 `isTestRedirected=false`였다.
- 본문 검증: 수업일지 학부모/학생/데일리 리포트는 `출결 → 과제 상태 → 강의 교재 → 강의 내용 → 지난 과제 → 다음 과제 → 코멘트` 구조가 유지됐다. 공지 학생 알림톡은 공지 본문만 유지되고, 일정 리마인더는 중요 일정 안내 본문으로 조립됐다.
- 추가 발견/수정: readiness-check가 수업일지 알림톡의 코멘트를 필수 본문처럼 판단해 `본문/코멘트` false-positive를 만들었다. 코멘트 없이도 구조화 본문이 있으면 본문 있음으로 보도록 수정했고, 학생용도 학부모용과 같이 `강의 교재`, `강의 내용`, `과제 상태` 누락을 점검하도록 보강했다.
- 현재 예약 주의: 2026-06-26 22:30 예정 박지현 학부모/학생 알림톡 2건은 발송 실패 상태는 아니지만 `강의 내용`이 비어 있다. 수정 후 readiness-check에서는 이 항목만 정확히 누락으로 잡히는 것이 의도다.
- 안전 주의: 운영 `dispatch-due`에 `forceDryRun`을 걸면 due job 상태를 `dry_run`으로 바꿀 수 있어 실제 예약을 훼손할 수 있다. 그래서 production에서는 직접 발송 API dry-run과 readiness-check만 실행했고, 인증 없는 dispatch dry-run은 401로 차단되는 것을 확인했다.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 189개 통과, `npm run build` 통과.
- SQL 주의: readiness 점검 로직 변경만 있으므로 Supabase SQL edit 필요 없음.

### P0. 수업일지 학생별 알림톡 제외 운영 검수

- 상태: 대기
- 목표: 최신 기능인 학생별 `학부모 알림톡`/`학생 알림톡` 제외가 실제 운영 예약 흐름에서 의도대로 동작하는지 확인한다.
- 확인 순서:
  - 운영 사이트에서 수업일지를 열고 특정 학생의 학부모 또는 학생 알림톡 `알림 제외`를 클릭한다.
  - `예약 확인` 모달에서 해당 학생의 해당 대상자가 `알림 제외`로 보이는지 확인한다.
  - `기본예약` 또는 `30분 지연`을 다시 눌러도 제외 학생의 해당 알림톡 예약이 재생성되지 않는지 확인한다.
  - `제외 해제` 후 현재 수업 발송 계획에 맞춰 예약이 다시 생기는지 확인한다.
- 저장 확인: 제외 상태는 `lesson_student_records.notification_muted_parent`, `notification_muted_student`, `notification_muted_reason`에 저장되고, 예약 취소/재생성은 `notification_jobs`에 반영되어야 한다.
- SQL 주의: 운영 DB에는 `supabase/20260625_lesson_notification_muting.sql` 적용 및 컬럼 존재 확인이 끝났다. 추가 스키마 변경이 없다면 SQL edit은 필요 없다.

### P0. 2026-06-25 배포 반영 확인

- 상태: 대기
- 목표: 최신 `main` 커밋과 운영 DB SQL 적용분이 Vercel/Render 운영 흐름에 정상 반영됐는지 확인한다.
- 확인 순서:
  - 운영 프론트엔드 `https://academy-os-blue.vercel.app`에서 로그인 후 수업일지, 알림관리, 시험관리 화면이 최신 UI로 보이는지 확인한다.
  - Render API가 최신 커밋 기준으로 동작하는지 알림 제외/시험 후 제출 대상 조회/공지 발송 화면에서 확인한다.
  - 운영 테스트가 필요하면 `npm run test:production`을 먼저 실행하고, 화면 수정이 있으면 `npm run build`도 실행한다.
- 주의: 오늘 DB password가 채팅/이미지로 노출된 이력이 있으므로 장기적으로 Supabase DB password reset을 권장한다.

### P1. 시험 후 제출 실제 운영 검수

- 상태: 대기
- 목표: `시험 후 제출` 탭에서 체크한 학생에게만 학생 웹앱 제출 카드가 보이고, 미적/확통처럼 여러 과목이 있어도 학생 1명당 제출 1건으로 유지되는지 확인한다.
- 확인 순서:
  - 시험관리 `시험 후 제출` 탭에서 학교/학년별 대상 학생 체크/해제를 확인한다.
  - 체크 상태가 새로고침 후에도 유지되는지 확인한다.
  - 학생 웹앱에서 체크된 학생에게만 `시험 후 제출` 카드가 보이는지 확인한다.
  - 여러 수학 시험 항목이 있는 학생은 과목명이 한 카드에 묶이고 제출 대상이 중복 생성되지 않는지 확인한다.
- 저장 확인: 대상 선택은 `app_state.examPostTargetStudentIds`, 학생 제출 결과는 기존 `examPostSubmissions` 흐름에 저장된다.

### P1. 알림관리 개별 발송 운영 검수

- 상태: 대기
- 목표: 알림관리가 `개별 발송` 단일 화면으로 정리된 뒤 실제 수신 범위, 템플릿, AI 수정, 예약/즉시 발송 흐름이 깨지지 않았는지 확인한다.
- 확인 순서:
  - 수신 범위 `선택`, `전체`, `학부모`, `학생` 전환 시 대상자 수와 미리보기가 의도대로 바뀌는지 확인한다.
  - `교재문자`, `보강문자`, `공지문자` 템플릿 선택 시 제목/본문 초안이 채워지는지 확인한다.
  - `AI 수정`이 설정 화면의 `알림관리 공지 AI` 프롬프트를 사용하고, 알림관리 화면에는 모델/프롬프트 설정이 반복 노출되지 않는지 확인한다.
  - 테스트 발송, 즉시 발송, 예약 발송 기록이 `notification_jobs`에 공지 타입으로 저장되는지 확인한다.

### P1. 새 기능 전 Supabase 저장 누락 점검

- 상태: 상시
- 목표: 다음 기능 확장 전에 해당 화면의 운영 데이터가 Supabase 테이블 또는 `app_state`에 저장되는지 먼저 확인한다.
- 우선 기준: 새로고침, 재로그인, 다른 기기 접속 후 사라질 수 있는 `localStorage` 전용 데이터나 컴포넌트 state 전용 운영 데이터를 찾으면 기능 확장보다 저장 경로를 먼저 보강한다.
- 우선 점검 후보: 학생 오늘 탭, 숙제현황, 보충관리 상세 메모, 알림톡 미리보기/실제 발송 문구 일치, 시험 후 제출 사진 업로드 확장.

### P2. 운영 안정화 후 기능 후보

- 상태: 보류
- 후보:
  - 시험 후 제출 사진/PDF 업로드를 Supabase Storage 기반으로 정규화한다.
  - 고속스캐너 파일 자동 분류는 사진 제출 운영이 안정된 뒤 별도 설계로 진행한다.
  - 학생 화면은 태블릿 우선, 학부모 화면은 모바일 우선으로 실제 기기 레이아웃을 계속 보강한다.
  - API 모델 선택과 프롬프트 설정은 각 기능 화면에 반복 노출하지 않고 설정 화면 중심으로 유지한다.

## 2026-06-25 시험 후 제출 대상 체크박스 가독성 보정

- 상태: 완료
- 사용자 요청: 시험 후 제출 대상 선택 영역의 체크박스를 작게 만들고, 학생 이름 가독성을 높여달라고 했다.
- 조치: `시험 후 제출` 대상 학생 pill을 좁은 원형에서 가로형 사각 pill로 바꾸고, 해당 영역 체크박스만 16px로 제한했다. 학생 이름은 한 줄로 표시되게 해 세로로 쪼개지는 문제를 줄였다.
- 저장 확인: CSS 표시 변경만 있으므로 Supabase 저장 경로 또는 SQL 변경은 필요 없다.
- 검증: `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 출결 알림톡 지각/결석 상세 문구 보강

- 상태: 완료
- 사용자 요청: 출결이 `지각` 또는 `결석`인 경우 알림톡의 `출결` 옆 괄호 안에 사유와 시간을 함께 표시해달라고 했다. 예시 확인 후 `출결: 지각 (사유: 교통 지연 · 등원 19:18)` 형식으로 진행했다.
- 조치: 서버 실제 발송 문구(`api/routes/notifications.js`)에 `attendanceLabelWithDetail`을 추가해 지각/결석/인정결석일 때만 괄호 상세를 붙인다. 지각은 `사유`, `등원 HH:mm`, 결석/인정결석은 `사유`, `처리 HH:mm`을 표시하고 빈 값은 생략한다.
- 조치: 프론트 미리보기/예약 payload(`src/app/App.jsx`)도 같은 규칙의 `formatAttendanceForMessage`를 사용하게 했다. 예약 알림 payload에 `attendanceReason`, `checkInTime`, `checkedAt`, `lateMinutes`를 포함해 예약 발송 시에도 같은 문구가 생성되게 했다.
- 저장 확인: 기존 `lesson_student_records.attendance_reason`, `check_in_time`, `late_minutes`, `updated_at` 값을 사용하는 표시 변경이다. SQL 변경은 없다.
- 검증: `npm run test:production` 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 수업일지 하원 미체크 표시

- 상태: 완료
- 사용자 요청: 태블릿에서 하원을 찍지 않고 귀가한 학생을 어디에 표시하면 좋을지 논의한 뒤, 수업일지에 표시해달라고 했다.
- 조치: `checkInAt/checkInTime`은 있지만 `checkOutAt/checkOutTime`이 없고 출결 상태가 `present`, `late`, `checkin`인 기록을 `하원 미체크`로 파생 판정하는 `hasMissingCheckOut`을 추가했다.
- 조치: 수업일지 상단 발송 전 점검 영역에 `하원 미체크 n명` 요약을 표시하고, 학생별 출결 배지에도 `하원 미체크` 문구를 붙였다. 요약 chip의 title에는 대상 학생 이름 목록이 보인다.
- 저장 확인: 기존 `lesson_student_records.check_in_at`, `check_in_time`, `check_out_at`, `check_out_time`, `attendance_status`를 읽어 표시만 추가했다. SQL 변경은 없다.
- 검증: `npm run test:production` 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림톡 예약 자동발송 안정화

- 상태: 완료
- 장애 확인: 2026-06-25 22:30 기본예약 30건이 `scheduled`로 남아 있었다. 수동으로 `/api/notification-jobs/dispatch-due`를 실행해 오늘 전체 56건을 `sent`로 처리했다.
- 원인: `render.yaml`에는 `koh-you-math-academy-os-notification-dispatch` cron 정의가 있었지만, Render 실제 서비스 목록에는 웹 서비스만 존재했다. Render API로 cron 생성을 시도했으나 `402 Payment information is required`로 실패했다. 즉 코드 문제가 아니라 Render 계정 결제 정보가 없어 cron 서비스 생성이 막힌 상태다.
- 조치: Render 웹 서비스에 `NOTIFICATION_DISPATCH_TOKEN` 환경변수를 설정했다. 값은 저장소에 남기지 않는다.
- 조치: `/api/notification-jobs/dispatch-due`는 토큰이 맞을 때만 `now`/dry-run 같은 민감 override를 허용한다. 토큰 없는 호출은 서버 현재시각 기준 due job만 처리한다.
- 조치: dispatch 전에 `notification_jobs.provider`를 `academy-os-dispatching`으로 조건부 선점해, Render cron/GitHub Actions/수동 호출이 겹쳐도 같은 예약을 중복 발송할 위험을 줄였다. 오래된 선점은 10분 후 재시도 가능하다.
- 조치: Render cron 등록이 결제 정보 때문에 막힌 동안의 백업으로 GitHub Actions `.github/workflows/dispatch-notifications.yml`을 추가했다. 5분마다 운영 API를 호출하며, `NOTIFICATION_DISPATCH_TOKEN` secret이 있으면 토큰을 전송한다.
- 남은 운영 조건: Render 자체 cron 서비스를 반드시 쓰려면 Render Billing에 결제 정보를 추가해야 한다. 결제 정보가 추가되면 기존 `render.yaml`의 cron 정의 또는 Render API로 `koh-you-math-academy-os-notification-dispatch`를 생성하면 된다.
- 검증: `node --check api/server.js`, `node --check scripts/dispatch-due-notifications.cjs`, `npm run test:production`, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-26 알림톡 자동발송 실제성 재점검

- 상태: 완료
- 확인: GitHub Actions `Dispatch due Alimtalk notifications` workflow는 `active`이고 성공 실행 기록이 있으나, 실제 schedule 실행 간격이 5분 보장이 아니라 수십 분~수 시간까지 밀린 기록이 확인됐다. 따라서 GitHub Actions 단독으로는 `22:30 전후 자동발송` MVP 신뢰도가 부족하다.
- 조치: 운영 API 서버 내부에 1분 주기 `runInternalNotificationDispatch` 루프를 추가했다. 서버가 깨어 있는 동안 due 된 `payload.osScheduled: true` 예약을 자체적으로 처리한다.
- 안전장치: 기존 조건부 선점(`provider=academy-os-dispatching`)을 그대로 사용하므로 서버 내부 루프, GitHub Actions, 수동 dispatch가 겹쳐도 동일 job 중복 발송 위험을 낮춘다.
- 운영 구조: Render 결제 등록 전에는 `서버 내부 1분 루프 + GitHub Actions 외부 깨우기`가 함께 동작한다. Render 웹 서비스가 sleep 상태면 GitHub Actions/사용자 접속이 깨우는 역할을 하고, 깨어 있는 동안은 서버가 1분마다 처리한다.
- 검증: `node --check api/server.js`, `npm run test:production`, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 학사일정 월간 캘린더 표현 개선

- 상태: 완료
- 사용자 요청: 첨부 이미지처럼 학사일정 탭에서 시험일은 짧은 pill로 쌓고, 시험기간은 주차를 가로지르는 얇은 선으로 보이면 좋겠다고 했다.
- 조치: 월간 셀에서 수학시험 pill을 최대 5개까지 촘촘히 표시하고, 시험기간 묶음은 최대 3줄의 얇은 주차선으로 표시하도록 변경했다. 기간선 라벨은 `시험기간` 반복 대신 학교명 묶음으로 표시한다.
- 조치: 기간선은 시작/끝 셀에 화살표 느낌의 표시를 붙이고, 셀 경계까지 이어지도록 좌우 여백을 줄였다. 일반 일정은 하단으로 내려 시험 pill/기간선과 덜 겹치게 했다.
- 저장 확인: 표시 방식 변경만이며 기존 `examPrepRows`, `schoolEvents`, `app_state` 저장 흐름은 그대로 유지한다. SQL 변경은 없다.
- 검증: `npm run test:production` 184개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험분석 PDF 기반 분석 문서 워크플로우 정리

- 상태: 완료
- 사용자 요청: 올해 내신시험 기출 PDF를 업로드했을 때 `PDF 업로드 -> OCR 추출 -> AI 1차 분석 -> 강사 검토 -> 분석 확정 -> 학생/학부모/블로그/인스타 산출물 생성 -> 다음 시험 대비 자료로 재사용` 의도가 시험분석 탭에서 잘 드러나게 정리해달라고 했다.
- 조치: 시험분석 파이프라인을 `원본 입력`, `분석 검토`, `산출물 작성` 3단계로 재구성했다. 원본 입력 단계에는 PDF/링크 기록, OCR/문항 메모 입력, AI 1차 분석 흐름을 명시했다. 분석 검토 단계에는 AI 구조화 필드와 강사 검토 필드를 같은 화면에서 비교/수정할 수 있게 배치했다. 산출물 작성 단계에는 학생 분석지, 학부모 안내문, 블로그 초안, 인스타 카드뉴스를 한 흐름으로 정리했다.
- 데이터 확인: 시험분석 데이터는 기존 `app_state.examAnalyses` 문서 구조로 저장된다. `parentNoticeDraft` 필드를 기본값과 AI/mock 응답 정규화에 추가했으며, DB 스키마 변경은 필요 없다.
- 호환성: 기존 저장 데이터의 `1차 AI 가안`, `강사 인사이트 추가`, `최종 편집`, `발행 완료` 단계명은 새 단계명으로 표시되도록 alias 처리했다.
- 후속 반영: 아래 `시험분석 PDF Storage 저장 및 텍스트 추출` 작업에서 실제 PDF 업로드와 텍스트형 PDF 자동 추출을 추가했다.
- 검증: `npm run test:production` 183개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험분석 목록 저장 위치 및 삭제 보강

- 상태: 완료
- 사용자 요청: 시험분석 `분석 목록`의 데이터가 어디 저장되는지 물었고, 수정/삭제가 되지 않는다고 했다.
- 확인: 분석 문서 목록은 별도 DB 테이블이 아니라 공용 `app_state.examAnalyses`에 저장된다. PDF 원본 파일만 Supabase Storage `exam-analysis-sources`에 저장된다.
- 조치: 분석 목록 카드에 `삭제` 버튼을 추가했다. 삭제 시 확인창을 띄우고, 삭제된 분석 문서는 `examAnalyses` 배열에서 제거되어 다음 `postAppState(sharedAppState)` 자동 저장 주기에 `app_state`에 반영된다.
- 조치: 삭제한 문서가 현재 선택 문서였을 때 남은 첫 분석 문서로 선택이 보정되도록 처리했다. 기본정보 수정은 기존처럼 오른쪽 `시험 기본정보` 필드에서 즉시 수정되고 `app_state.examAnalyses`에 자동 저장된다.
- SQL: `app_state` 문서 배열 변경이므로 SQL edit은 필요 없다.
- 검증: `npm run test:production` 185개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험분석 PDF Storage 저장 및 텍스트 추출

- 상태: 완료
- 사용자 요청: 위 워크플로우의 남은 과제였던 실제 PDF OCR/Storage 작업도 진행해달라고 했다.
- 조치: 시험분석 원본 입력 드롭존을 실제 파일 선택/드롭 업로드로 연결했다. PDF는 서버 `/api/exam-analysis-sources`를 통해 Supabase Storage `exam-analysis-sources` 버킷에 저장되고, 저장된 파일은 서명 URL로 다시 열 수 있다. 업로드 결과는 `sourceFiles`, `sourceFileUrl`, `sourceUploadStatus`, `rawExamText`에 반영된다.
- 텍스트 추출: 서버에 `pdf-parse` 기반 PDF 텍스트 추출을 추가했다. 텍스트형 PDF는 추출 결과가 `rawExamText`에 자동으로 붙고, 이미지 스캔형 PDF처럼 추출 텍스트가 없는 경우에는 수동 OCR/메모 입력 안내를 남긴다.
- 저장 확인: 분석 문서 자체는 기존처럼 `app_state.examAnalyses`에 저장된다. 파일 원본은 Supabase Storage에 저장된다. DB 스키마 변경은 없으며 SQL edit은 필요 없다.
- 주의: 이번 구현은 텍스트 레이어가 있는 PDF 자동 추출이다. 완전한 이미지 OCR, 페이지별 이미지 렌더링, 문항 단위 자동 분리는 별도 고도화 과제다.
- 검증: `node --check api/server.js` 통과, `pdf-parse/lib/pdf-parse.js` import 확인, `npm run test:production` 184개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험분석 PDF 업로드 UI 발견성 보강

- 상태: 완료
- 사용자 요청: 배포 화면을 봤을 때 이전 화면과 거의 같아 보여 실제 PDF 업로드 기능이 추가된 것이 잘 드러나지 않는다고 했다.
- 조치: 시험분석 원본 입력 드롭존을 더 큰 파란 점선 영역으로 바꾸고, `기출 PDF 드래그 앤 드롭 / 선택 업로드`, `PDF 파일 선택` 액션을 명확히 표시했다. 업로드 전에도 `대기 · 여기를 클릭하거나 PDF를 드롭하면 Storage 저장과 텍스트 추출을 시작합니다.` 상태 문구가 보이도록 했다.
- 저장 확인: UI 발견성 보강만이며 기존 `exam-analysis-sources` Storage 업로드와 `app_state.examAnalyses` 저장 흐름은 그대로 유지한다. SQL 변경은 없다.
- 검증: `npm run test:production` 184개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험분석 원본 입력 레이아웃 단순화

- 상태: 완료
- 사용자 요청: 시험분석 원본 입력 화면이 여전히 복잡하므로 더 단순한 운영 흐름으로 정리해달라고 했다.
- 조치: `원본 입력` 단계에서 오른쪽 AI 결과 편집 패널을 제거하고, PDF 업로드 박스와 `AI 분석 시작` 액션만 보이게 정리했다. AI 결과 확인/수정은 `분석 검토` 단계에서만 하도록 화면 역할을 분리했다.
- 조치: `PDF 원본 파일/링크`, `OCR 텍스트 / 문항 메모`, `AI 분석 프롬프트`는 기본 노출하지 않고 `원본 링크 · OCR 원문 · 프롬프트 보기` 접이식 영역으로 이동했다.
- 저장 확인: 기존 `exam-analysis-sources` Storage 업로드와 `app_state.examAnalyses` 저장 흐름을 그대로 사용한다. SQL 변경은 없다.
- 검증: `npm run test:production` 184개 통과, `npm run build` 통과. 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 학생 삭제 후 반관리 잔존 보정

- 상태: 완료
- 사용자 보고: 학생관리에서 테스트용 `고태영` 학생을 삭제했는데 반관리 `월수금 4-7반` 명단에는 계속 남아 있었다.
- 원인: 학생 삭제는 과거 기록 보존을 위해 DB hard delete가 아니라 `status: "paused"`로 저장하는 방식이다. 그런데 반관리 화면은 `defaultClassTemplateId`만 보고 학생을 집계/표시해, `paused` 학생도 반 명단에 남아 보였다.
- 조치: 학생 삭제 처리 시 `defaultClassTemplateId`를 함께 비워 앞으로 삭제/퇴원 학생이 반 배정값을 유지하지 않게 했다.
- 조치: 반관리 카드 인원수, 상세 명단, 명단 수정 모달은 `status === "active"` 학생만 기준으로 표시하게 했다. 이미 운영 DB에 `paused + defaultClassTemplateId`로 남아 있는 학생도 화면에는 더 이상 나오지 않는다.
- SQL 파일: 기존 운영 데이터 정리용 `supabase/20260625_clear_inactive_student_class_assignment.sql`을 추가했다. 이 SQL은 `paused` 또는 `withdrawn` 학생의 `default_class_template_id`를 `null`로 비운다.
- SQL 적용: 운영 Supabase SQL edit은 사용자가 직접 진행한다.
- 검증: `npm run test:production` 179개 통과, `npm run build` 통과. `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 처리하지 못해 실패했고, Vite build로 JSX 문법 검증을 대체했다. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 좌측 출결체크 탭 제거

- 상태: 완료
- 사용자 요청: 출결 태블릿은 `/attendance` 전용 화면으로 별도 관리하므로 좌측 `출결체크` 탭을 삭제해달라고 했다.
- 조치: 사이드바의 `출결체크` 메뉴 항목과 교사용 앱 내부 `attendanceKiosk` 화면 렌더링을 제거했다.
- 유지: `/attendance` 전용 태블릿 출결 화면, 수업일지 학생별 수동 출결 수정 모달, 출결 알림톡 API, 설정 화면의 출결 URL/지각 기준 설정은 그대로 유지했다.
- 저장 확인: 메뉴/렌더링 정리만 있으므로 Supabase SQL 변경은 필요 없다.
- 검증: `npm run test:production` 180개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 직전수업 가상 명단 inactive 학생 제외

- 상태: 완료
- 사용자 보고: 학생관리/반관리에서는 삭제한 테스트용 `고태영` 학생이 빠졌지만, `창동고 고1 수학 직전수업` 수업일지에는 계속 보였다.
- 확인: 운영 API 기준 `students` 테이블에는 `고태영` row가 과거 기록 보존용 `status: "paused"` 상태로 남아 있다. `lessons` 테이블의 2026-06-29 저장 수업 row에는 고태영 studentId가 없고 3명만 저장되어 있었다.
- 원인: 시험관리/학사일정 기반으로 프론트에서 만든 가상 직전수업 명단 생성 함수가 학교/학년만 보고 학생을 매칭하면서 `paused` 학생을 제외하지 않았다.
- 조치: `getStudentsForSchoolCalendarEvent`에서 `status !== "active"` 학생을 제외했다. 저장된 수업의 `studentIds`에 비활성 학생 ID가 남아 있는 경우에도 수업일지 표시 명단과 알림톡 예약 대상에서 제외하도록 보강했다.
- 저장 확인: 화면/예약 대상 필터 로직 변경이며 새 SQL은 필요 없다. `고태영` row 자체는 과거 기록 보존을 위해 `students` 테이블에 `paused` 상태로 남는다.
- 검증: `npm run test:production` 182개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 정의여고 직전수업 클릭 ID 충돌 보정

- 상태: 완료
- 사용자 보고: 수업일지에서 2026-06-30 `정의여고 고3 직전수업` pill을 누르면 2026-07-06 `정의여고 고1 직전수업` 일지가 열렸다.
- 확인: 2026-06-30 정의여고 고3 직전수업은 시험관리 데이터에서 만든 가상 lesson이고, 2026-07-05/07-06 정의여고 고1 직전수업은 이미 저장된 lesson이다.
- 원인: 가상 직전수업 `lessonId`가 `sourceId` 앞 40자만 사용했다. 정의여고 고1/고3 시험관리 source id가 긴 공통 prefix를 공유해 둘 다 `lesson_pre_exam_derived_math_exam_prep_2026-1-final_정의여고`로 잘렸고, 클릭 시 같은 ID를 가진 기존 저장 수업이 먼저 선택됐다.
- 조치: 직전수업 생성 ID에 `sourceId` 전체값 기반의 짧은 안정 해시를 suffix로 붙였다. 기존 저장 lesson은 `sourceSchoolEventId`/호환 key로 계속 매칭하고, 새 가상 lesson끼리는 잘린 prefix가 같아도 서로 다른 ID를 가진다.
- 저장 확인: 프론트 생성 ID 보정만 있으므로 Supabase SQL edit은 필요 없다.
- 검증: `npm run test:production` 183개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 테스트 학생 고태영 운영 데이터 hard delete

- 상태: 완료
- 사용자 요청: 테스트용 학생 `고태영` 데이터를 soft delete/paused 보존이 아니라 hard delete 처리한다.
- 삭제 대상 확인: 운영 Supabase 기준 `students`에 `student_1782278942831`, 이름 `고태영`, 창동고 고1, `status: "paused"` 1건이 남아 있었다.
- 연결 데이터 확인: 같은 studentId가 `lesson_student_records` 1건(`lsr_2026-06-24_월수금-4-7반_1781949067465_student_1782278942831`)에만 남아 있었고, `homeworks`, `makeup_tasks`, `notification_jobs`, `lessons.student_ids`, `resource_materials.student_ids`, `app_state`에는 남아 있지 않았다.
- 조치: Supabase REST service role 경로로 `lesson_student_records`의 해당 1건을 먼저 삭제한 뒤 `students`의 해당 1건을 hard delete했다. SQL edit 자동화는 사용하지 않았다.
- 검증: 삭제 후 `students`를 studentId/name 기준으로 재조회했고 0건, 연결 테이블 및 JSON 상태 조회도 모두 0건 또는 미포함으로 확인했다.

## 2026-06-25 직전수업 가상 렌더링 제거 및 실제 수업 자동저장

- 상태: 완료
- 사용자 판단: 시험관리에서 직전수업을 자동계산하되, 수업일지에 들어가는 순간부터는 실제 수업이어야 한다. 수업일지에서는 수정/삭제만 가능하면 된다.
- 원인 정리: 기존 수업일지 달력은 `lessons` 저장 row와 시험관리 기반 가상 직전수업 후보를 섞어 표시했다. 이 때문에 저장 전 후보, 저장된 lesson, legacy ID, `sourceSchoolEventId` 호환 매칭이 한 화면에서 섞여 클릭/명단/수정 기준이 흔들렸다.
- 조치: 교사용 앱 로딩 후 시험관리 기반 직전수업 후보 중 생성/갱신 대상은 `lessons`에 자동 저장하도록 변경했다. 저장 필드가 이미 같으면 `synced` 상태로 판정해 반복 저장 루프를 막는다.
- 조치: 수업일지 달력의 자동 표시 목록에서는 `lessonType: "preExam"` 후보를 제외했다. 이제 직전수업은 저장된 실제 `lessons` row로만 수업일지에 표시된다. 일요시험보강 블록 가상 표시 로직은 이번 범위에서 유지했다.
- 조치: 학사일정에서 수학시험 일정을 직접 등록/수정할 때도 기존 직전수업을 `sourceSchoolEventId`, `lessonId`, `학교+학년+시험일` 호환키로 찾아 이어받게 해 중복 생성을 줄였다.
- 저장 확인: 기존 `lessons` 테이블을 사용하며 새 SQL edit은 필요 없다.
- 검증: `npm run test:production` 183개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 숙제현황 기준을 보충관리 데이터로 통일

- 상태: 완료
- 사용자 판단: 보충관리 데이터가 맞고, 숙제현황 데이터는 맞지 않는다. 숙제현황도 보충관리의 데이터만 보이게 한다.
- 원인 정리: 숙제현황은 `dedupeActionableHomeworks(homeworks)`를 바로 사용해 `homeworkType: "next"` 다음숙제 원본까지 미완료/밀림에 포함했다. 보충관리는 `isHomeworkMakeupCandidate(homework, records, lessons)`로 수업일지 검사 결과 보충이 필요한 `previous` 숙제만 보므로 숫자가 달랐다.
- 조치: 숙제현황의 원천을 `homeworks.filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons))`로 좁힌 뒤 중복 제거하도록 변경했다. 전체 탭도 전체 학생이 아니라 보충 대상 학생만 보여준다.
- 조치: 화면 문구를 `전체 학생/숙제 등록 학생/오늘 미완료/밀린 학생`에서 `보충 대상 전체/보충 대상 학생/오늘 기준 보충/지연 보충 학생`으로 바꿔 운영 의미를 명확히 했다.
- 저장 확인: 화면 필터/집계 로직 변경만 있으므로 Supabase SQL edit은 필요 없다.
- 검증: `npm run test:production` 183개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 학사일정 월간 캘린더 가독성 보정

- 상태: 완료
- 사용자 요청: 학사일정 월간 캘린더에서 시험기간/수학시험 표시가 겹치고 잘려 가독성이 떨어진다.
- 조치: 월간 셀의 시험기간 긴 문구를 `시험기간` 짧은 표식으로 줄이고, 상세 학교/기간 정보는 기존처럼 날짜 클릭 모달에서 확인하는 구조로 유지했다.
- 조치: 수학시험 pill은 셀 상단 한 줄 flex 배치로 바꾸고 높이를 줄였다. 시험기간 bar는 배경성 얇은 띠로 낮추고, 숨김 카운트는 작은 pill로 정리해 서로 겹치지 않게 했다.
- 저장 확인: 화면 표시 로직/CSS 변경만 있으므로 Supabase SQL edit은 필요 없다.
- 검증: `npm run test:production` 183개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 SQL edit 자동화 철회

- 상태: 완료
- 사용자 요청: SQL edit은 사용자가 직접 하며 자동화하지 않겠다고 했다. SQL 자동화 관련 정보와 도구를 모두 삭제하고, 커밋/푸시/배포 등 AI가 할 수 있는 나머지 작업은 이전처럼 자동 진행하라고 했다.
- 조치: 로컬 `.env`에서 SQL 자동 적용 자격을 제거했다.
- 조치: `scripts/apply-supabase-sql.cjs`, `docs/supabase-cli-sql.md`, npm SQL 적용 스크립트, 로컬 Supabase CLI dev dependency를 제거했다.
- 조치: `AGENTS.md`와 `docs/current-worklog.md`의 운영 원칙을 “SQL 파일 작성 및 안내는 AI가 하고, 운영 Supabase SQL edit 적용은 사용자가 직접 한다”로 되돌렸다.
- 유지: 검수, 문서 갱신, 커밋, 푸시는 사용자가 따로 말하지 않아도 AI가 자동 진행한다.

## 2026-06-25 수업일지 학생별 알림톡 제외

- 상태: 완료
- 사용자 요청: 조모상 등으로 결석을 미리 알린 학생은 수업일지에 결석은 체크하되, 해당 학생에게는 학부모/학생 알림톡을 보내지 않도록 특정 개인 알림톡 취소 기능을 구현해달라고 했다. SQL 변경이 더 깔끔하면 SQL edit을 해도 된다고 했다.
- 조치: `lesson_student_records`에 `notification_muted_parent`, `notification_muted_student`, `notification_muted_reason` 컬럼을 추가하는 migration `supabase/20260625_lesson_notification_muting.sql`을 만들고, 기준 스키마와 API 저장/조회 매핑을 갱신했다.
- 조치: 수업일지 학생 행의 학부모/학생 알림톡 영역에 `알림 제외`/`제외 해제` 버튼을 추가했다. 학부모와 학생을 각각 따로 제외할 수 있다.
- 조치: 개별 제외를 누르면 해당 수업+학생+대상자의 아직 발송 전 `notification_jobs`를 `canceled`로 바꾸고, 수업기록의 발송 상태를 `알림 제외`로 저장한다. 다시 해제하면 현재 수업 발송 계획에 맞춰 예약을 재생성한다.
- 조치: 기본예약, 30분 지연, 수동 재예약을 다시 실행해도 제외된 학생/대상자는 예약 작업을 만들지 않게 했다. 수동 알림톡 작성 모달에서도 제외 상태면 발송 버튼이 막힌다.
- 저장 확인: 학생별 제외 상태는 Supabase `lesson_student_records` 컬럼에 저장된다. 예약/취소 상태는 기존 `notification_jobs`를 사용한다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 178개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림관리 단일 개별 발송 화면 정리

- 상태: 완료
- 사용자 요청: 알림관리는 기본적으로 개별 발송 탭 하나만 남기고, 수신인은 전체/학부모/학생/선택으로 고를 수 있게 해달라고 했다. 교재문자, 보강문자, 공지문자 템플릿을 선택할 수 있고, AI 수정은 가능하되 프롬프트 같은 설정성 내용은 설정 화면에 몰아달라고 했다.
- 조치: 알림관리 상단의 `전체/학부모/학생/개별` 탭 구조를 제거하고 `개별 발송` 작성 화면 하나로 정리했다. 화면 안에서 수신 범위를 `선택`, `전체`, `학부모`, `학생`으로 바꾸게 했다.
- 조치: 교재문자, 보강문자, 공지문자 기본 템플릿을 추가했다. 템플릿을 선택하면 제목과 본문 초안이 즉시 채워진다.
- 조치: 알림관리 본문에 `AI 수정` 버튼을 추가했다. AI 모델/프롬프트 선택은 화면에 노출하지 않고 설정 화면의 `알림관리 공지 AI` 프롬프트를 사용한다.
- 저장 확인: 공지 예약/발송 기록은 기존 Supabase `notification_jobs`를 사용한다. AI 프롬프트 설정은 기존 `app_state.aiSettings.prompts.noticeMessage`에 저장된다. 새 SQL은 필요 없다.
- 검증: `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 176개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 시험 후 제출 대상 선택 및 탈리 탭 제거

- 상태: 완료
- 사용자 요청: 시험관리의 `탈리` 탭은 학생화면의 시험 후 제출 기능과 중복되므로 제거하고, `시험 후 제출` 탭에서 셀프체크를 받을 학생 명단을 체크할 수 있게 해달라고 했다. 또한 창동고3처럼 미적/확통 두 과목을 보더라도 학생 1명당 셀프체크는 1건만 제출하면 된다고 했다.
- 조치: 시험관리 하위 탭에서 `탈리` 탭을 제거했다. 운영 흐름은 `시험 후 제출` 탭과 학생 웹앱 제출 폼으로 통일했다.
- 조치: `시험 후 제출` 탭에 학교/학년별 셀프체크 대상자 체크 영역을 추가했다. 전체 선택/전체 해제로 명단을 관리할 수 있고, 체크 상태는 `app_state.examPostTargetStudentIds`에 저장된다.
- 조치: 학생 화면 제출 대상 생성 로직을 과목별이 아니라 학생별 1건으로 변경했다. 여러 수학 시험 항목이 있으면 과목명은 한 카드에 묶어 표시하고, 마감일은 마지막 수학 시험일 다음날로 계산한다.
- 조치: 학생/학부모 포털 API가 `examPostTargetStudentIds`를 함께 내려주게 해서, 체크된 학생의 웹앱에만 `시험 후 제출` 카드가 표시되게 했다.
- 저장 확인: 새 SQL 없이 기존 `app_state`와 `examPostSubmissions` 저장 흐름을 사용한다. 학생 제출 결과는 기존처럼 `examPostSubmissions`에 저장된다.
- 검증: `node --check api/server.js`, `npm run test:production` 175개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림관리 공지 발송센터 전환

- 상태: 완료
- 사용자 요청: 데일리 수업 알림톡은 수업일지 화면에서 충분히 처리 가능하므로, 알림관리 화면은 수업일지 외 연락이 필요할 때 쓰는 `전체메시지`, `학부모메시지`, `학생메시지`, `개별메시지` 중심으로 재구성해달라고 했다.
- 조치: 알림관리 화면을 `공지 발송센터`로 전환했다. 상단 탭은 `전체`, `학부모`, `학생`, `개별`이며, 반 필터/학생 검색/개별 선택으로 수신 대상을 좁힐 수 있다.
- 조치: 제목/본문 작성, 미리보기, 테스트 발송, 즉시 발송, 예약 발송을 한 화면에 배치했다. 전체 탭은 학부모+학생 모두에게, 학부모/학생 탭은 해당 대상에게만, 개별 탭은 선택 학생과 선택 수신자 유형에만 보낸다.
- 조치: 공지 발송 작업은 `notice_parent`, `notice_student` 타입으로 저장해 수업일지 데일리 알림톡(`parent_comment`, `student_comment`)과 기록을 분리했다. 알림관리의 발송 기록도 공지 타입만 보여, 예전 수업일지 실패/테스트 기록이 기본 화면을 어지럽히지 않는다.
- 조치: 예약 공지가 자동 발송될 때 학생 공지는 학생 템플릿/학생 번호, 학부모 공지는 학부모 템플릿/학부모 번호로 라우팅되게 서버 발송 로직을 보강했다.
- 저장 확인: 기존 Supabase `notification_jobs`를 사용하며 새 SQL은 필요 없다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `npm run test:production` 175개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림관리 미발송 기록 삭제

- 상태: 완료
- 사용자 요청: 알림관리의 실패, 테스트/초안 등 실제 문자를 보내지 않은 기록을 삭제할 수 있게 해달라고 했다.
- 조치: 알림관리 대기열 표에 `관리` 열을 추가하고, `failed`, `draft`, `dry_run`, `canceled` 상태 기록에만 `삭제` 버튼을 표시하게 했다. `sent`, `scheduled` 등 실제 발송 완료/예약 기록은 보관으로 표시하고 삭제 버튼을 숨긴다.
- 조치: `DELETE /api/notification-jobs?id=...` API를 추가했다. 서버에서도 `failed,draft,dry_run,canceled` 상태만 삭제하도록 제한해, 프론트 실수나 직접 호출로도 발송 완료 기록은 삭제되지 않게 했다.
- 저장 확인: 기존 Supabase `notification_jobs` 행 삭제 흐름을 사용한다. 새 SQL은 필요 없다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `npm run test:production` 174개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림관리 운영 화면 정리 및 설정 이동

- 상태: 완료
- 사용자 요청: 알림관리 안에 있던 설정성 내용을 설정 하위 영역으로 옮기고, 알림관리 자체는 돌발 상황에서 예약된 알림톡을 확인하고 재예약할 수 있게 정리해달라고 했다.
- 조치: 알림관리 화면에서 솔라피/AI 연동 상태, 실제번호 잠금, 템플릿 테스트 영역을 제거하고 설정 화면의 `알림톡 설정` 섹션으로 이동했다.
- 조치: 알림관리 화면을 `수업별 예약 관리` 중심으로 재구성했다. 날짜별 수업을 선택하면 실제 `notification_jobs` 기준으로 학부모 예약, 학생 예약, 발송 완료, 취소/실패 건수를 한눈에 확인할 수 있다.
- 조치: 선택한 수업 여러 개를 지정 날짜/시간으로 `선택 수업 예약/재예약`할 수 있고, 필요하면 `선택 수업 알림톡 없음`으로 일괄 변경할 수 있게 했다. 처리 중 중복 클릭 방지와 모바일 1열 레이아웃도 추가했다.
- 운영 확인: 2026-06-24 `월수금 4-7반`, `월수금 7-10반` 알림톡 26건은 2026-06-25 14:00 KST에 예약 발송 점검 API를 수동 호출해 실발송 처리했다. 최종 확인 기준 4-7반 학부모 5건/학생 5건, 7-10반 학부모 8건/학생 8건 모두 `sent` 상태다.
- 저장 확인: 기존 `notification_jobs`, `lesson_student_records`, `app_state.lessonNotificationPlans` 흐름을 사용한다. 새 SQL은 필요 없다.
- 검증: `npm run test:production` 173개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 알림톡 예약 확인 버튼 및 6/24 수업 14:00 재예약

- 상태: 완료
- 사용자 요청: 기본예약은 기본 발송 상태로 두되, 퇴근 전 버튼을 눌러 학생/학부모에게 예약된 알림톡이 누구에게 몇 건 있는지 한눈에 확인하고 싶다고 했다. 또한 2026-06-24 `월수금 4-7반`, `월수금 7-10반`에 보내지 못한 학생/학부모 알림톡을 오늘 14:00에 일괄 예약발송하고 싶다고 했다.
- 조치: 수업일지 상단 예약 버튼 옆에 `예약 확인` 버튼을 추가했다. 모달에서 실제 `notification_jobs` 기준으로 학부모 예약, 학생 예약, 발송 완료, 취소/실패 건수를 보여주고 학생별 학부모/학생 알림톡 상태를 표시한다.
- 조치: 과거 수업의 예약 확인 모달에는 `오늘 14:00 일괄예약` 버튼을 제공한다. 이 버튼은 해당 수업의 학부모/학생 알림톡 작업을 지정 시각으로 새로 생성/갱신한다.
- 운영 조치: 운영 서버에 2026-06-24 `월수금 4-7반` 10건, `월수금 7-10반` 16건, 총 26건을 2026-06-25 14:00 KST 예약 상태로 직접 등록했다.
- 저장 확인: 기존 `notification_jobs` 저장 흐름을 사용한다. 새 SQL은 필요 없다.
- 검증: `npm run test:production` 172개 통과, `npm run build` 통과. `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 처리하지 못해 사용할 수 없었고, Vite build로 JSX 문법 검증을 대체했다. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 기본예약 파란불 실제 예약 상태 보장

- 상태: 완료
- 사용자 요청: 수업일지에서 `기본예약`에 파란불이 들어와 있으면 항상 22:30 자동 예약발송 상태로 이해하고 싶다고 했다. `30분 지연` 또는 `알림톡 없음`을 누를 때만 해당 수업의 발송 계획이 바뀌어야 한다.
- 원인: 기존 UI는 명시 계획이 없어도 `기본예약`을 기본 선택값처럼 활성 표시했지만, 실제 `notification_jobs`는 버튼을 눌렀을 때만 생성됐다. 따라서 파란불과 실제 서버 예약 상태가 어긋났다.
- 조치: 교사로 수업일지를 열 때 해당 수업에 별도 알림톡 계획이 없고 기본 예약 시간이 아직 지나지 않았으면, 즉시 `default` 계획을 저장하고 학부모/학생 알림톡 예약 작업을 생성한다.
- 조치: 수업일지 기록이 자동저장될 때 현재 계획이 `default` 또는 `delay30`이면 예약 작업을 다시 생성/갱신해, 발송 payload가 최신 수업일지 내용으로 유지되게 했다. `알림톡 없음` 상태에서는 갱신하지 않는다.
- 조치: 이미 파란불인 `기본예약` 또는 `30분 지연` 버튼도 다시 누르면 같은 계획으로 예약 작업을 재확인/갱신한다. 과거 수업은 기존처럼 `예약 시간 지남`으로 막는다.
- 저장 확인: 기존 `notification_jobs`, `lesson_student_records`, `app_state.lessonNotificationPlans`를 사용한다. 새 SQL은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 171개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-25 과거 수업 알림톡 기본예약 1분 뒤 표시 방지

- 상태: 완료
- 사용자 보고: 2026-06-24 수업을 22:30 자동발송으로 예상했으나 발송되지 않았고, 이후 집/학원에서 다시 접속할 때마다 기본예약 시간이 현재 시각 기준 1분 뒤로 다시 잡힌 것처럼 보인다고 했다.
- 원인: 알림톡 예약 시간 계산 함수가 과거 시간이면 안전 보정으로 `현재+1분`을 반환했다. 이 함수가 실제 예약 생성뿐 아니라 수업일지 안내 문구와 모달의 현재 발송 계획 표시에도 함께 쓰여, 과거 수업을 열 때마다 `기본 예약 1분 뒤`처럼 보였다.
- 조치: 기본 예약 원시 시간 계산과 과거 시간 보정 계산을 분리했다. 수업일지 안내/모달 표시는 원래 예약 시각을 기준으로 `예약 시간 지남`을 보여주고, 과거 수업의 `기본 예약`/`30분 지연` 버튼은 비활성화한다.
- 조치: 과거 수업에서 일괄 예약을 호출하더라도 새 예약 작업을 만들지 않고 기록 상태를 `예약 시간 지남`으로 처리하게 했다. `알림톡 없음`은 기존처럼 사용할 수 있다.
- 저장 확인: 새 테이블 없이 기존 `notification_jobs`, `lesson_student_records`, `app_state.lessonNotificationPlans` 흐름을 사용한다. 이번 변경은 과거 수업의 잘못된 예약 재표시/재예약 방지 로직이다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 171개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 수업메모 직전/참고 메모 분리

- 상태: 완료
- 사용자 요청: 수업메모 버튼이 강조되어 있는데 실제로는 바로 직전 수업이 아니라 더 과거인 6/19 메모가 보여 혼란스럽다고 했다. 직전 수업메모와 과거 참고 메모를 깔끔하게 구분하는 방식을 요청했다.
- 조치: 수업메모 조회 로직을 `진짜 직전 수업 기록`과 `최근 참고 메모 기록`으로 분리했다. 직전 수업에 메모가 없으면 모달의 직전 수업메모 영역은 `직전 수업메모가 없습니다`로 표시하고, 더 과거 메모는 별도 `최근 참고 메모` 섹션에 표시한다.
- 조치: 수업메모 버튼 강조도 분리했다. 바로 직전 수업메모가 있으면 기존 주황 강조와 `직전 메모 있음`, 직전에는 없지만 과거 참고 메모가 있으면 파란 강조와 `참고 메모 있음`으로 표시한다.
- 저장 확인: 기존 `lesson_student_records.preparation_memo` 데이터와 저장 흐름은 그대로 사용하므로 새 SQL은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 171개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 직전수업 레거시 ID 중복 표시 방지

- 상태: 완료
- 사용자 보고: 2026-07-05 정의여고 직전수업이 2개 생긴 이유를 물었고, 내부 원인은 과거 `_textbook` placeholder 기반으로 저장된 직전수업과 현재 `공통수학1` 기준 시험관리 자동수업의 연결키가 달라 같은 수업으로 병합되지 않는 것이었다.
- 조치: 직전수업 병합 기준에 `학교+학년+수학시험일` 호환키를 추가했다. 이제 과거 placeholder ID로 저장된 직전수업과 현재 시험관리 자동 직전수업의 `sourceSchoolEventId`가 달라도 같은 학교/학년/시험일이면 같은 수업으로 인식한다.
- 조치: 자동수업 후보 계산과 수업일지/달력 표시 병합 모두 같은 호환키를 사용해, 저장된 레거시 수업과 새 자동수업이 나란히 중복 표시되지 않게 했다.
- 저장 확인: 표시/병합 기준 보정만 했으며 기존 `lessons` 데이터 삭제나 SQL 변경은 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 171개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 시험관리 자동수업 수업일지 직접 표시

- 상태: 완료
- 사용자 요청: 자동수업 후보/반영/보호 흐름이 복잡하므로, 시험관리를 본데이터로 두고 수업일지와 학사일정에는 시험관리 데이터 기반 수업이 바로 나타나며 필요하면 수업일지에서 수정하는 방식으로 바꾸고 싶다고 요청했다.
- 조치: 시험관리에서 계산한 직전수업/일요시험보강 중 아직 실제 `lessons`로 저장되지 않은 항목도 수업일지/달력의 `calendarLessons`에 가상 자동수업으로 바로 섞어 표시하게 했다. 저장된 자동수업이 있고 시험관리 원본이 바뀌면, 수동수정 보호 전에는 시험관리 계산값을 우선 표시한다.
- 조치: 가상 자동수업에서 수업기록/출결/메모를 저장하면 먼저 해당 수업을 실제 `lessons`에 저장한 뒤 `lesson_student_records`를 저장해 Supabase FK 흐름이 깨지지 않게 했다. 수업 자체를 수정하면 실제 수업으로 저장되고 수동수정 상태가 된다.
- 조치: 자동수업 삭제는 실제 삭제 대신 해당 시험관리 자동수업 숨김 처리로 동작한다. 학사일정의 복잡한 후보 반영 버튼 UI는 제거하고, 자동표시/저장됨/수정됨/숨김 요약과 안내 문구만 남겼다.
- 저장 확인: 새 테이블 없이 기존 `lessons`, `lesson_student_records`, `app_state.generatedLessonControls`를 사용한다. 새 SQL은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 170개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 학사일정 시험기간/수학시험 월간 표시 요약

- 상태: 완료
- 사용자 요청: 시험관리에 입력한 시험기간과 수학시험 날짜가 학사일정 캘린더 월간 화면에 중복 표시되어 보기 불편하므로, 시험기간은 요약하고 날짜별 상세는 모달에서 확인하는 방식으로 구현해달라고 요청했다.
- 조치: 월간 캘린더 렌더링 전용으로 시험기간 이벤트를 `고사+기간` 기준으로 묶어 `시험기간 · N개 학교` 형태의 단일 bar로 표시하게 했다. 원본 이벤트는 유지하므로 날짜 상세 모달에서는 기존처럼 학교별 시험기간과 수학시험을 모두 확인하고 수정할 수 있다.
- 조치: 월간 칸의 수학시험 pill은 최대 2개까지만 표시하고, 숨겨진 시험/일정은 `+N` pill로 요약한다. 일반 일정도 월간 칸에서는 최대 2개까지만 보여 캘린더 밀도를 낮췄다.
- 저장 확인: 표시 레이어만 보정했으며, `exam_prep_rows`, `school_events`, `app_state` 저장 구조는 변경하지 않았다. 새 SQL은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 169개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 수학시험 과목별 직전수업 후보 표시 보정

- 상태: 완료
- 사용자 보고: 시험관리에서 수학시험 날짜를 입력해도 직전수업 후보가 잘 나타나지 않는다. 예: 창동고3은 `6/29 미적`, `7/2 확통`이라 각각 전날 직전수업이 나타나야 한다.
- 원인: 시험관리의 수학시험 입력행은 여러 개를 저장할 수 있지만, 달력/자동수업 후보로 파생되는 수학시험 이벤트가 각 입력행의 표시명/학년보다 행 기본값에 더 의존했다. 이 때문에 미적/확통처럼 한 학교·학년에 여러 과목이 있는 경우 후보 이름과 분리가 불명확했다.
- 조치: 수학시험 이벤트 파생 시 입력행의 `학년`과 `표시명`을 우선 사용하게 했다. 이제 `미적`, `확통`을 각각 입력하면 자동 수업 후보에 과목별 직전수업이 별도 항목으로 표시된다.
- 저장 확인: 기존 `exam_prep_rows.math_exam_dates` 기반 파생 로직만 보정했으므로 새 SQL은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 168개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 시험관리 수학시험 추가 입력행 유지 보정

- 상태: 완료
- 사용자 요청: 시험관리 수정 모달에서 `+ 수학시험 추가`를 누르면 아래에 추가 입력행이 생기고, 입력한 수학시험 일정이 달력에 반영되어야 한다. 예: 창동고3은 미적/확통 두 과목을 모두 입력해야 한다.
- 원인: 새 수학시험 행은 처음에 날짜/표시명이 비어 있는데, 기존 정규화 함수가 빈 항목을 표시용으로 걸러서 추가 직후 편집 화면에서도 사라졌다.
- 조치: 수학시험 일정 정규화에 `includeBlank` 옵션을 추가했다. 편집 모달은 빈 행까지 유지해 추가 입력이 가능하고, 시험관리 표/학교일정 달력은 기존처럼 날짜가 있는 항목만 표시·파생한다.
- 저장 확인: 기존 `exam_prep_rows.math_exam_dates` 저장 흐름을 그대로 사용하므로 새 SQL은 필요 없다. 날짜를 입력한 미적/확통 항목은 각각 별도 수학시험 일정으로 달력에 파생된다.
- 검증: `node --check scripts/scenario-tests-production.cjs`, `npm run test:production` 167개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 시험관리 반별 학교/학년 필터 보정

- 상태: 완료
- 사용자 보고: 시험관리 탭에서 선택한 반에 없는 학교/학년 시험정보가 보인다. 예를 들어 `월수금 7-10`에 고3 학생이 없는데 고3 시험정보가 표시된다.
- 원인: 시험관리 화면 필터가 선택 반 학생들의 `학교명`만 비교해서, 같은 학교의 다른 학년 시험정보가 함께 보일 수 있었다.
- 조치: 시험관리 표시 기준을 정규화된 `학교명+학년` 조합으로 변경했다. 자동 생성 기준도 활성 학생만 사용하도록 맞췄고, 수정/총평 모달도 현재 반에 표시되는 행만 대상으로 열리게 했다.
- SQL 주의: 화면 필터와 자동 생성 입력 보정만 있으므로 Supabase SQL Editor 작업은 필요 없다.
- 검증: `npm run test:production` 166개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 현재 로컬 작업 경로 - 2026-06-24 갱신

- 상태: 완료
- 사용자 요청: 기존 바탕화면 `academy-os` 폴더를 `E:\academy-os`로 옮겼고, 이후 작업 기준을 확인해달라고 요청했다.
- 확인: `E:\academy-os`는 정상 Git 저장소이며 `main`과 `origin/main`이 최신 커밋 `993bbbb Add downloadable Tally QR photo`로 동기화되어 있다.
- 조치: 누락된 QR JPG 파일을 새 위치에서 Git 기준으로 복원했고, 작업트리가 깨끗한 상태임을 확인했다.
- 정리: 기존 `C:\Users\force\Desktop\academy-os` 폴더는 삭제 완료했다. 앞으로 Codex와 터미널 작업 기준 폴더는 `E:\academy-os`다.
- 주의: `.env`, `node_modules`, QR 산출물은 새 위치에 존재한다. 새 세션에서는 `E:\academy-os`를 작업 폴더로 열어야 한다.
- 추가 조치: 새 Codex 세션에 붙여넣을 프롬프트와 작업 경로 이전 안내를 `docs/session-handoff-2026-06-24-workspace-move.md`에 작성했다.

## 현재 다음 작업 큐 - 2026-06-24 정리

### P0. 배포 반영 및 로그인 유지 운영 확인

- 목표: 마지막 푸시 커밋 `a03e154 Use late label in attendance messages`가 Vercel/Render 운영에 반영됐는지 먼저 확인한다.
- 확인 순서: 운영 프론트 `https://academy-os-blue.vercel.app` 접속 → 선생님 로그인 → 새로고침 → 로그인 상태 유지 여부 확인.
- 추가 확인: 계속 재로그인이 발생하면 배포 최신 여부, 브라우저 `localStorage/sessionStorage/cookie`의 `academy-os.teacherSession.v1` 저장 여부, 쿠키 차단/시크릿 모드 여부를 먼저 본다.
- 판단: 배포가 아직 과거 커밋이면 코드 수정 전에 자동배포 상태를 먼저 해결한다.

### P0. 출결 태블릿 실제 운영 검수

- 목표: `/attendance` 전용 화면에서 실제 학생 전화번호 뒤 4자리 기준 등원/하원 흐름이 수업일지와 Supabase에 안정적으로 남는지 확인한다.
- 확인 순서: 첫 스캔 등원 → 수업일지 출결 칸 `등원 HH:MM` 표시 → 두 번째 스캔 하원 → `하원 HH:MM` 표시 → 세 번째 이후 스캔은 안내만 표시되고 알림톡 미발송 확인.
- DB 확인: `lesson_student_records`의 `attendance_status`, `check_in_time/check_in_at`, `check_out_time/check_out_at`, `attendance_source`가 의도대로 들어가는지 본다.
- 문구 확인: 화면과 알림톡에서 `출석` 대신 `등원`, 지각 등원은 `지각`, 하원은 `하원` 기준으로 보이는지 확인한다.

### P0. 새 기능 전 Supabase 저장 누락 검토

- 목표: 다음 기능 확장 전에 해당 화면의 입력/수정/확인 데이터가 Supabase 테이블 또는 `app_state`에 저장되는지 먼저 확인한다.
- 우선 기준: 새로고침, 재로그인, 다른 기기 접속 후 사라질 수 있는 `localStorage` 전용 데이터나 컴포넌트 state 전용 운영 데이터를 찾으면 기능 확장보다 저장 경로를 먼저 보강한다.
- 최근 보강 필드: `students.withdrawn_at`, `lesson_student_records.behavior_tag/homework_status/needs_makeup/needs_retest/check_in_time/check_out_time`, `homeworks` 보조 필드, `tallySubmissions/tallySummaries`, `student_intake_applicants`.
- SQL 확인: 2026-06-24 기준 사용자가 관련 SQL을 운영 Supabase에 실행했고 컬럼 조회까지 확인했으므로, 문제 발생 시 코드 매핑/배포/저장 payload를 먼저 본다.

### P1. Tally 접수 운영 재확인

- 목표: 새 Tally 제출이 `student_intake_applicants`에 들어오고, 학생 추가 화면에서 질문별 답변이 분리되어 보이는지 확인한다.
- 확인 순서: 공개 Tally 폼 제출 → 웹훅 수신 → 학생 추가 > Tally 접수 카드 확인 → 반 미배정 정식 등록 → 학생 목록 `미배정` 탭 노출 확인.
- 등록 완료 확인: 등록 완료된 후보도 `등록 완료 후보` 목록에 이름과 주요 답변이 남는지 본다.
- 주의: 실제 Tally 폼에 없는 `희망반` 필드는 다시 매핑하지 않는다.

### P1. 수업일지 수동 출결 변경 검수

- 목표: 태블릿으로 들어온 출결을 수업일지에서 사람이 바꿀 때 실수 방지 모달과 알림톡 재발송 선택이 안정적으로 동작하는지 확인한다.
- 확인 순서: 태블릿 기록이 있는 학생 출결 변경 → `변경하시겠습니까?` 확인 → `저장만` 선택 저장 확인 → 다시 변경 후 `저장 후 재발송` 선택 → 알림톡 문구와 기록 확인.
- 저장 확인: 수동으로 `등원` 또는 `지각` 저장 시 기존 등원 시간이 없으면 현재 시간이 저장되고, `결석/대기`는 등하원 시간이 비워지는지 본다.

### P2. 운영 안정화 후 기능 후보

- 학생/학부모 화면의 태블릿·모바일 실제 기기 QA를 이어서 진행한다.
- 시험 후 제출 사진 업로드는 Supabase Storage 버킷/정책/파일 메타데이터 설계를 먼저 확정한 뒤 구현한다.
- 학생 오늘 탭, 숙제현황, 알림톡 미리보기는 실제 운영 데이터 기준으로 저장 누락과 문구 불일치를 우선 점검한다.

## 2026-06-24 Tally 접수 QR 생성

- 상태: 완료
- 사용자 요청: 학생이 QR을 찍고 Tally 접수 폼에 바로 들어갈 수 있도록 QR 연결 작업을 직접 해달라고 요청했다.
- 조치: Tally 접수 링크 `https://tally.so/r/dWNk2A`를 가리키는 QR 이미지를 `output/qr/tally-intake-qr.png`로 생성했다. 인쇄용 안내 HTML `output/qr/tally-intake-qr-print.html`도 함께 추가했다.
- 추가 조치: 휴대폰 사진/카톡 공유용 JPG 파일 `output/qr/tally-intake-qr-photo.jpg`도 생성했다.
- 검증: QR PNG가 1024x1024 이미지로 생성됐고, 로컬에서 이미지를 열어 육안 확인했다.
- SQL 주의: QR/인쇄물 산출물만 추가했으므로 Supabase SQL Editor 작업은 필요 없다.

## 2026-06-24 태블릿 결과 메시지 단순화

- 상태: 완료
- 사용자 요청: 태블릿 출결 결과 메시지는 그냥 `등원`/`하원`만 표시해달라고 요청했다.
- 조치: 태블릿 결과 모달 제목을 `등원 체크 완료`/`하원 체크 완료`가 아니라 `등원`/`하원`으로 표시하게 했다. 결과 메시지도 지각 여부와 관계없이 등원 스캔은 `등원`, 하원 스캔은 `하원`만 보여주도록 단순화했다.
- 검증: `npm run test:production` 165개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 출결 등원/하원 라벨 및 시간 표시 보강

- 상태: 완료
- 사용자 보고: 태블릿 출결 또는 수동 출결 후 수업일지 출결 칸에 등하원 시간이 보이지 않고, `출석` 표기가 남아 있다고 보고했다.
- 확인: 운영 DB의 최근 `present/late` 수업기록 다수에서 `check_in_time/check_in_at`이 비어 있었다. 기존 배포/수동 저장 기록은 상태만 저장되고 시간 필드가 비어 있어 화면에 시간이 표시되지 않았다.
- 조치: 전역 출결 라벨의 `present`를 `등원`, `late`를 `지각`으로 바꿨다. 수업일지 출결 표시가 `checkIn/checkOut` 시간이 없을 때도 `updatedAt`을 fallback으로 사용해 `등원 HH:MM`을 작게 표시하도록 했다.
- 조치: 수업일지에서 수동으로 `등원/지각`을 저장할 때 기존 등원 시간이 없으면 현재 시각을 `checkInAt/checkInTime`에 기록하게 했다. 결석/대기는 등하원 시간을 비워 상태와 시간이 충돌하지 않게 했다.
- 조치: API가 `lesson_student_records.updated_at`을 프론트 `updatedAt`으로 반환하도록 했다.
- 검증: `node --check api/routes/coreData.js`, `node --check api/routes/notifications.js`, `node --check api/server.js`, `npm run test:production` 165개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 선생님 세션 새로고침 복원 보강

- 상태: 완료
- 사용자 보고: 새로고침할 때마다 다시 로그인해야 한다고 보고했다.
- 조치: 선생님 로그인 세션 저장을 `localStorage`만 보지 않고 쿠키에도 함께 저장/복원하도록 보강했다. 저장 값은 기존과 같이 `role/actorId/name`만 포함하며 비밀번호는 저장하지 않는다. 로그아웃 시 `localStorage`와 쿠키를 모두 삭제한다.
- 추가 보강: 사용 환경에 따라 `localStorage` 접근이 실패하면 쿠키 저장까지 건너뛰는 문제가 생길 수 있어, `localStorage`/`sessionStorage`/쿠키를 각각 독립적으로 저장·복원하도록 바꿨다. 세 저장소 중 하나만 살아 있어도 새로고침 후 선생님 세션을 복원한다.
- 검증: `npm run test:production` 165개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 시험대비 일정 수정 Supabase 저장 확인

- 상태: 완료
- 사용자 요청: `OS > 시험대비 > 일정 수정`에서 수정한 정보가 새로고침하면 사라지는 것 같으니 Supabase 저장 여부를 확인해달라고 요청했다.
- 확인: 시험대비 화면의 시험기간/수학시험 날짜 수정은 `handleUpdateExamPrepRow`를 통해 `/api/exam-prep-rows/bulk`로 저장되며, API는 `exam_prep_rows.exam_period`, `math_exam_date`, `math_exam_dates`, `exam_cycle`에 매핑한다. 학교일정 달력의 수동 일정 수정은 `school_events`로 저장되고, 시험대비에서 파생된 일정 수정은 다시 `exam_prep_rows`로 반영된다.
- 보강: 기준 스키마 `supabase/schema.sql`에 기존 마이그레이션 `supabase/20260620_exam_calendar_supabase_state.sql`의 시험대비/학교일정 확장 컬럼을 반영했다. 운영 Supabase에 해당 마이그레이션이 빠져 있으면 `math_exam_dates` 등 확장 일정 정보가 저장되지 않을 수 있다.
- 검증: `npm run test:production` 165개 통과, `npm run build` 통과. 빌드 시 기존 Vite 청크 크기 경고만 확인됨.

## 2026-06-24 선생님 로그인 세션 새로고침 유지

- 상태: 완료
- 사용자 요청: 배포 확인이나 Tally 접수 확인을 위해 새로고침할 때마다 다시 로그인하지 않도록, 선생님 로그인 성공 시 세션을 localStorage에 저장하고 앱 시작 시 복원하며 로그아웃 시 삭제하는 방식으로 구현해달라고 요청했다.
- 조치: 선생님 세션만 `academy-os.teacherSession.v1`에 저장/복원하도록 했다. 저장 값은 `role/actorId/name`만 포함하고 비밀번호는 저장하지 않는다. 학생/학부모 세션은 우선 보존하지 않는다.
- 검증: `npm run test:production` 163개 통과, `npm run build` 통과.

## 2026-06-24 Tally 질문별 접수 정보 분리 저장

- 상태: 완료
- 사용자 요청: `재원생 여부`, `현재 학습하고 있는 과정`, `직전학기 내신 성적`, `특이사항`을 접수 메모 한 칸으로 합치지 말고 Tally에 있는 모든 질문을 따로 기록해 달라고 요청했다.
- 조치: Tally 웹훅 파서가 `enrollmentStatus/currentLearningProcess/previousSemesterScore/specialNote`를 별도 필드로 만들도록 바꿨다. `student_intake_applicants` 테이블 매핑과 SQL에 `enrollment_status/current_learning_process/previous_semester_score/special_note` 컬럼을 추가했다.
- 화면 조치: 학생 추가 > Tally 접수 카드에서 해당 질문들을 각각 별도 입력으로 보여주고, 등록 완료 후보 카드에도 질문별 답변 목록을 분리 표시한다. `rawPayload` 원본은 계속 보존한다.
- DB 준비: `supabase/20260624_student_intake_applicants.sql`에 새 컬럼 `alter table`을 추가했다. 운영 Supabase SQL Editor에서 실행해야 기존 테이블에도 컬럼이 생긴다.
- 검증: `node --check api/server.js`, `node --check api/routes/coreData.js`, `npm run test:production` 162개 통과, `npm run build` 통과.

## 2026-06-24 Tally 반 미배정 등록 표시 보정

- 상태: 완료
- 사용자 보고: Tally 후보를 반배정 없이 등록완료 처리했을 때 학생명단에 포함되지 않는 것처럼 보이고, 등록완료 버튼을 눌러도 누가 등록 완료됐는지 화면에서 보이지 않는다고 보고했다.
- 원인: Tally 후보가 `registered` 상태가 되면 확인 필요 목록에서 빠지지만 등록 완료 목록은 카운트만 보여주고 실제 카드가 없었다. 또한 학생 목록의 반별 탭에는 기존 반 탭만 있고 `미배정` 탭이 없어 반 없이 등록된 학생이 반별 보기에서 보이지 않았다.
- 조치: Tally 접수 탭에 `등록 완료 후보` 목록을 추가해 등록 완료된 후보의 이름/학교/학년/미배정 여부를 계속 볼 수 있게 했다. 학생 목록의 반별 탭에는 `미배정` 탭을 추가해 반 없이 등록된 active 학생도 확인할 수 있게 했다. 정식 학생 등록 후에는 학생 추가 모달을 닫아 학생 목록에서 바로 확인되게 했다.
- 검증: `npm run test:production` 162개 통과, `npm run build` 통과.

## 운영 우선순위: 새로고침 후 데이터 보존

- 최우선 원칙: 다음 개발부터 새 기능/화면을 만들기 전에 데이터 흐름을 먼저 확인한다. 프론트 상태, localStorage, 컴포넌트 내부 state에만 저장되고 Supabase 테이블 또는 `app_state`에 저장되지 않는 값이 있으면 기능 확장보다 먼저 저장 경로를 보강한다.
- 검토 기준: 사용자가 입력/수정/업로드/확인한 운영 데이터는 새로고침, 재로그인, 다른 기기 접속 후에도 유지되어야 한다.
- 우선 조치 대상: `homeworks` 보조 필드, `lesson_student_records.behaviorTag/needsRetest`, `students.withdrawnAt`, `tallySubmissions/tallySummaries`.

## 2026-06-24 프론트 전용 상태 Supabase 저장 보강

- 상태: 완료
- 사용자 요청: 기존 전수조사에서 나온 `homeworks` 보조 필드, `lesson_student_records.behaviorTag/needsRetest`, `students.withdrawnAt`, `tallySubmissions/tallySummaries`를 모두 보강하고, 앞으로 새로고침 시 자료가 날아가지 않도록 Supabase 저장 누락 검토를 우선순위에 기록해달라고 요청했다.
- 조치: `students.withdrawnAt`을 `students.withdrawn_at`에 매핑했다. `lesson_student_records`에는 `behavior_tag/homework_status/needs_makeup/needs_retest`를 매핑했다. `homeworks`에는 `status/total_problems/assignment_status/incomplete_homework/checked_at/verified_at/linked_from_lesson_id/linked_from_date`를 매핑했다.
- 조치: 시험관리 Tally CSV import 상태인 `tallySubmissions/tallySummaries`를 App 최상위 상태로 올리고 Supabase `app_state` 저장/복원 흐름에 포함했다.
- DB 준비: `supabase/20260624_persist_frontend_fields.sql`을 추가했다. 운영 Supabase SQL Editor에서 실행해야 새 컬럼에 영구 저장된다.
- 검증: `node --check api/routes/coreData.js`, `npm run test:production` 160개 통과, `npm run build` 통과.

## 2026-06-24 출결 알림톡 등원/하원 라벨 보정

- 상태: 완료
- 사용자 요청: 화면의 출결 표기처럼 출결 알림톡에서도 `출석` 대신 `등원`/`하원`으로 나오게 해달라고 요청했다.
- 조치: 서버 알림톡 라벨에서 `present`를 `출석`이 아니라 `등원`으로 변환하도록 바꿨다. 프론트의 출결 알림톡 로그/미리보기 문구도 `present`를 `등원`으로 표시하도록 맞췄다. 태블릿 하원은 기존처럼 `checkout -> 하원`으로 유지된다.
- 검증: `node --check api/routes/notifications.js`, `npm run test:production` 156개 통과, `npm run build` 통과.

## 2026-06-24 Tally 실제 질문명 기반 신입생 매핑 보정

- 상태: 완료
- 사용자 요청: Tally 웹훅 URL은 기존 주소로 연결되어 있으나, 실제 Tally 본문에는 `희망반` 같은 질문이 없으므로 실제 질문명을 확인해서 매핑을 수정해 달라고 요청했다.
- 확인: 공개 Tally 폼의 실제 질문은 `재원생 여부`, `학생 이름`, `학교 이름`, `학생 학년`, `학생 전화번호`, `학부모님 전화번호`, `현재 학습하고 있는 과정 (선행 정도)`, `직전학기 내신 성적(등급과 점수를 함께 적어주세요)`, `특이사항...`이었다.
- 조치: 웹훅 파서에서 없는 `희망반` 매핑을 제거하고, 재원생 여부/현재 학습 과정/직전학기 내신 성적/특이사항을 접수 메모에 줄 단위로 보존하도록 했다. 학생 추가 모달의 Tally 후보 입력 라벨도 `접수 메모`로 정리했다.
- 검증: `node --check api/server.js`, `npm run test:production` 155개 통과, `npm run build` 통과.

## 2026-06-24 태블릿 출결 수동 수정 확인 모달

- 상태: 완료
- 사용자 요청: 태블릿/출결 모달로 들어온 출결 정보를 수업일지에서 수동 변경할 때 실수 방지를 위해 `변경하시겠습니까` 확인 모달을 띄우고, 변경 후에는 출결 알림톡을 재발송할지 다시 물어봐 달라고 요청했다.
- 조치: 태블릿 등하원 시각 또는 `attendance_kiosk` 기록이 있는 수업일지 출결을 수동으로 바꾸면 저장 전에 변경 확인 단계를 보여주고, 확인 후 `저장만` 또는 `저장 후 재발송`을 선택하도록 했다.
- 검증: `npm run test:production` 154개 통과, `npm run build` 통과.

## 2026-06-24 수업일지 등하원 시각 표시

- 상태: 완료
- 사용자 요청: 수업일지 출결 칸이 `출석`만 보여서 실제 몇 분에 등원했는지 알 수 없고, 하원 시에도 몇 분에 찍고 하원했는지 보이게 해달라고 요청했다.
- 조치: 수업일지 출결 뱃지에 태블릿 기록 기준으로 `출석` 대신 `등원` 또는 `하원`을 표시하고, 함께 `등원 HH:MM`, `하원 HH:MM` 시각을 표시하도록 했다. 학생 수업 기록 카드의 출결 정보에도 같은 등하원 시각을 함께 표시한다.
- 저장 보정: 태블릿 출결에서 생성되는 `checkInAt/checkInTime/checkOutAt/checkOutTime`을 `lesson_student_records` API 매핑에 추가했다. Supabase 컬럼이 아직 없는 운영 상태에서도 저장 실패가 나지 않도록 fallback을 넣었다.
- DB 준비: 새 컬럼 영구 저장을 위해 `supabase/20260624_lesson_attendance_times.sql`을 추가했다. Supabase SQL Editor에서 실행해야 새로고침 뒤에도 등하원 시간이 유지된다.
- 검증: `node --check api/routes/coreData.js`, `npm run test:production` 153개 통과, `npm run build` 통과.

## 2026-06-24 태블릿 출결 하원 알림톡 및 카운트다운 보정

- 상태: 완료
- 사용자 보고: 태블릿 출결 결과 모달의 `3초 후 자동으로 닫힙니다` 문구를 `3, 2, 1`처럼 카운트다운으로 보여달라고 요청했다. 또한 `2748`로 3번 출결을 찍었는데 알림톡이 모두 `출석`으로 왔다고 보고했다.
- 원인: 태블릿 화면은 두 번째 스캔을 `하원`으로 판정하고 있었지만, 알림톡 발송 payload에는 기존 수업 출결 상태인 `present`를 그대로 넘겨 서버가 계속 `출석` 알림톡을 생성했다.
- 조치: 태블릿 출결 알림톡 payload를 첫 등원은 `checkin`, 하원은 `checkout`, 지각 등원은 `late`로 보내도록 분리했다. 이미 등원/하원이 모두 기록된 상태에서 추가 스캔하면 담당 선생님께 따로 말씀해 달라는 안내만 보여주고 추가 알림톡은 보내지 않게 막았다.
- UI 조치: 결과 모달 자동 닫힘 문구를 `3초`, `2초`, `1초` 카운트다운으로 표시하게 했다.
- 검증: `npm run test:production` 152개 통과, `npm run build` 통과.

## 2026-06-24 링크 미리보기 제목 분리

- 상태: 완료
- 사용자 요청: 카카오톡/메신저 링크 미리보기 제목만 기본 앱은 `koh_you_math os`, 출결 전용 링크는 `koh_you_math_attendance`로 바꿔달라고 요청했다.
- 조치: 기본 `index.html`의 title/OG/Twitter title을 `koh_you_math os`로 바꿨다. 출결 전용 `attendance.html`을 추가하고 title/OG/Twitter title을 `koh_you_math_attendance`로 지정했다.
- 배포 설정: Vercel rewrite에서 `/attendance`를 `/attendance.html`로 먼저 보내고, 나머지 경로는 기존처럼 `/index.html`로 보내게 했다. Vite 빌드 입력에 `attendance.html`을 추가해 실제 배포 산출물에 포함되도록 했다.
- 검증: `npm run build`에서 `dist/attendance.html` 생성 확인, `npm run test:production` 151개 통과.

## 2026-06-24 로그인 화면 출결 체크 버튼 제거

- 상태: 완료
- 사용자 요청: 로그인 화면의 출결 체크 버튼은 없애고, 출결 전용 화면 링크만 다시 보내달라고 요청했다.
- 원인: 로그인 화면 안의 출결 모달은 `/attendance` 전용 화면과 달리 운영 API 학생/수업 데이터를 강제로 불러오지 않아 localStorage/샘플 데이터 기준으로 학생을 찾을 수 있었다. 이 때문에 운영 DB에는 있는 학생전화번호 `2748`을 못 찾는 혼동이 생겼다.
- 조치: 로그인 화면의 `출결 체크` 버튼과 `showAttendanceKiosk` 모달 분기를 제거했다. 출결 태블릿 운영은 `/attendance` 전용 화면만 사용하도록 정리했다.
- 검증: `npm run test:production` 151개 통과, `npm run build` 통과.

## 2026-06-24 출결 태블릿 학생번호 매칭 및 오늘 반 수업 연결 보정

- 상태: 완료
- 사용자 정정: 출결 태블릿은 4자리 입력 후 자동 체크하지 말고 `확인` 버튼으로 체크해야 하며, 학부모전화번호가 아니라 학생전화번호 뒤 4자리만 보게 해달라고 요청했다.
- 확인: 운영 DB에서 `2748` 학생은 active이고 학생전화번호도 `01057882748`이 맞았다. 다만 해당 학생이 오늘 `월수금 4-7반` 수업 명단(`studentIds`)에는 들어 있지 않아 출결 처리 대상 수업을 찾지 못하는 상태였다.
- 조치: 출결 PIN 매칭을 active 학생의 `학생전화번호`만 보도록 되돌렸다. 안내 문구도 `학생 휴대폰 번호 뒤 4자리`로 정리했다.
- 조치: 자동 제출 로직을 제거해 4자리 입력 후 `확인` 버튼을 눌러야 체크되게 했다.
- 조치: 학생은 찾았지만 오늘 수업 명단에 빠져 있는 경우, 학생의 기본 반(`defaultClassTemplateId`)과 일치하는 오늘 수업을 찾아 그 수업 명단에 학생을 추가한 뒤 출결 기록을 저장하도록 보정했다.
- 검증: `npm run test:production` 150개 통과, `npm run build` 통과.

## 2026-06-24 출결 태블릿 4자리 자동 체크 및 학부모 번호 매칭

- 상태: 정정됨
- 정정: 이후 사용자 요청에 따라 자동 체크와 학부모 번호 매칭은 제거했다. 현재 운영 기준은 `확인` 버튼 제출, `학생전화번호` 뒤 4자리 매칭이다.
- 사용자 보고: 출결 태블릿 모달 테스트에서 선생님 번호 뒤 4자리 `2748`을 눌렀는데 아무 응답이 없다고 보고했다. 어제 제거한 관리자 번호 탈출 흐름의 잔여 기록 때문인지 확인을 요청했다.
- 확인: 코드상 `attendanceOnlyUnlocked`, `adminPin`, `onAdminExit` 잔여 흐름은 제거된 상태였다. 실제 원인은 키패드에서 4자리를 눌러도 `확인` 버튼을 눌러야 제출되는 UX였고, 출결 매칭도 `학생전화번호`만 보고 있어 학부모 번호를 선생님 번호로 바꾼 테스트에는 맞지 않았다.
- 조치: 출결 키패드는 4자리 입력이 완료되면 0.16초 뒤 자동으로 체크되게 했다. 실패/성공 후 PIN을 비워 다음 입력을 바로 받을 수 있게 했다.
- 조치: 출결 PIN 매칭 대상을 active 학생의 `학생전화번호`와 `학부모전화번호` 둘 다로 확장했다. 화면 안내도 `학생/학부모 휴대폰 번호 뒤 4자리`로 바꿨다.
- 운영 확인: 운영 DB 기준 `2748`로 매칭되는 active 학생은 1명이라 중복 충돌은 없었다.
- 검증: `npm run test:production` 150개 통과, `npm run build` 통과.

## 2026-06-24 신입/퇴원 학생 수업일지 명단 자동 반영

- 상태: 완료
- 사용자 요청: 신입생을 추가하면 오늘 수업부터 해당 반의 수업일지 명단에 넣고, 학생이 퇴원하면 오늘까지의 기록은 보존하되 내일 이후 수업 명단에서 제외되게 해달라고 요청했다.
- 조치: 학생 수기 추가와 Tally 후보 정식 등록 시 학생의 기본 반(`defaultClassTemplateId`) 기준으로 오늘 포함 미래 수업의 `studentIds`에 자동 추가되도록 했다. 이미 개설된 오늘 이후 수업일지도 `/api/lessons/bulk`로 즉시 저장한다.
- 퇴원 처리: 기존 `숨김` 흐름을 `퇴원 처리`로 정리했다. 학생은 DB에서 삭제하지 않고 `status: paused`로 저장하며, 학생 목록에서는 active 학생만 보이게 했다. 수업일지는 오늘까지의 기록과 학생 이름 매핑을 보존하고, 내일 이후 수업 명단에서만 제외한다.
- 반 변경 처리: 학생 목록에서 반을 바꾼 뒤 `저장`하면 기존 반의 오늘 포함 미래 수업 명단에서는 제거하고, 새 반의 오늘 포함 미래 수업 명단에는 추가한다.
- 데이터 보존: 서버 학생 목록 조회는 퇴원생도 함께 내려받도록 바꿔 과거 수업일지에서 퇴원생 이름을 계속 표시할 수 있게 했다. 로그인 인증은 기존처럼 active 학생만 허용한다.
- 검증: `node --check api/routes/coreData.js`, `npm run test:production` 149개 통과, `npm run build` 통과.

## 2026-06-24 학생 추가 수기 입력 필드 및 저장 버튼 표시 보정

- 상태: 완료
- 사용자 요청: 학생 목록 저장 버튼이 버튼처럼 보이지 않고, 학생 추가 시에도 저장 버튼과 학생전화번호/학부모전화번호 등을 수기로 입력할 수 있어야 한다고 요청했다.
- 조치: 학생 목록 행 저장 버튼의 기본 문구를 `저장`으로 바꿔 저장 동작이 명확히 보이도록 했다. 학생 추가 모달의 `한 명씩` 탭에 `학생전화번호`, `학부모전화번호`, `반`, `특이사항` 입력을 추가하고 하단 버튼 문구를 `학생 저장`으로 바꿨다.
- 검증: `npm run test:production` 148개 통과, `npm run build` 통과.

## 2026-06-24 Tally 신입생 접수 후보 연동

- 상태: 완료
- 사용자 요청: 신입생에게 바로 웹앱 가입을 요구하기 어렵기 때문에 기존 Tally 폼으로 받은 정보를 Academy OS와 연결하고, 다니겠다고 했다가 안 다니는 경우도 관리할 수 있게 해달라고 요청했다.
- 설계: Tally 제출을 바로 정식 학생으로 넣지 않고 `입학 후보`로 먼저 저장한 뒤, 학생 추가 모달의 `Tally 접수` 탭에서 상태를 확인하고 `정식 학생 등록`을 눌러 학생 목록으로 승격하는 흐름으로 정리했다.
- 서버 조치: `POST /api/intake/tally` 웹훅 수신 API를 추가했다. Tally 제출 JSON에서 이름/출생연도/학년/학교/학생전화/학부모전화/희망반/메모를 최대한 매핑하고, `TALLY_WEBHOOK_SIGNING_SECRET`이 설정되어 있으면 `Tally-Signature`를 검증한다. 후보 목록/저장은 `/api/student-intake-applicants`에서 처리한다.
- 화면 조치: 학생 추가 모달에 `Tally 접수` 탭을 추가했다. 후보 상태는 `문의접수`, `상담중`, `체험예정`, `등록확정`, `등록취소`, `보류`, `연락두절`로 관리할 수 있고, 정식 등록 시 기존 학생 생성 흐름을 사용한다.
- DB 준비: `supabase/20260624_student_intake_applicants.sql`을 추가했다. 운영 반영 전 Supabase SQL Editor에서 실행해야 한다.
- Tally 설정: Tally 폼 Integrations > Webhooks에 `https://koh-you-math-academy-os-api.onrender.com/api/intake/tally`를 연결한다.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs` 통과. `npm run test:production` 147개 통과, `npm run build` 통과.

## 2026-06-24 학생 목록 명시 저장 버튼 추가

- 상태: 완료
- 사용자 요청: 학생 목록에서 반, 아이디, PIN, 학년, 학교, 전화번호, 출생연도 등 데이터를 수정했을 때 저장 버튼이 있어야 한다고 요청했다.
- 원인: 기존 학생 목록 표 입력은 값 변경 즉시 `/api/students` 저장 요청을 보내는 구조라 저장 시점이 화면에 보이지 않았다.
- 조치: 학생 목록 행 편집은 우선 화면 상태만 바꾸고, 해당 행의 `저장` 버튼을 눌러야 `/api/students`에 반영되도록 분리했다. 변경된 행은 배경으로 표시하고, 저장 버튼은 `저장`, `저장 중`, `저장됨`, `재시도` 상태를 보여준다.
- 범위: 학생 목록 표의 명시 저장 흐름만 바꿨고, 학생 프로필 모달 등 기존 편집 흐름은 영향이 커지지 않도록 유지했다.
- 검증: `npm run test:production` 146개 통과, `npm run build` 통과.

## 2026-06-24 세션 검토 및 내일 작업 큐 문서화

- 상태: 완료
- 사용자 요청: 오늘 수업/작업 내용을 요약하고, 내일 작업할 큐를 정리한 md 파일을 만들며, 특히 자동배포 관련 내용을 강하게 남겨달라고 요청했다.
- 조치: `docs/session-review-2026-06-24.md`를 새로 만들었다. 오늘 작업 요약, 검증 결과, 내일 P0/P1/P2/P3 큐, 출결 태블릿 실제 학생 테스트 절차, 자동배포 운영 원칙을 정리했다.
- 자동배포 원칙: 앞으로 코드 수정 후 `build/test → commit → push`에서 끝내지 않고, Vercel/Render 자동배포 성공 여부까지 확인하고 보고해야 한다는 규칙을 문서에 강조했다.

## 2026-06-24 출결 태블릿 고정 모드 및 더미 데이터 제거

- 상태: 완료
- 사용자 정정: 실제 학생의 학부모 전화번호를 임시로 선생님 번호로 바꿔 태블릿 출결 알림톡을 확인할 예정이므로, 더미 데이터 관련 흐름은 모두 지우고 `2748` 관리자 화면 복귀도 삭제해달라고 요청했다. 태블릿은 출결모드 고정으로 운영한다.
- 조치: `/attendance` 전용 화면에서 관리자 PIN/관리자 탈출 흐름을 제거했다. `attendanceOnlyUnlocked`, `adminPin`, `onAdminExit` 경로와 설정 화면의 `출결 관리자 번호` 입력을 삭제했다.
- 데이터 로딩 보정: 출결 전용 화면은 더 이상 큰 `/api/app-state` 전체를 기다리지 않고 `/api/students`, `/api/lessons`, `/api/lesson-records`만 불러온 뒤 바로 키패드를 활성화한다.
- 알림톡 흐름: 태블릿에서 실제 학생 출결을 체크하면 출결 기록을 Supabase에 저장하고 `handleSendAttendanceAlimtalk()`을 호출해 학부모 번호 기준 출결 알림톡 발송 요청을 남긴다.
- 더미 제거: 운영 Supabase에서 `student_attendance_test_20260623` 더미 학생과 `lesson_attendance_test_2026-06-23` 더미 수업을 hard delete했고, 남은 건 0건임을 확인했다.
- 검증: `npm run test:production` 146개 통과, `npm run build` 통과.

## 2026-06-24 학생 목록 표 레이아웃 및 반 수정 보정

- 상태: 완료
- 사용자 요청: 학생 목록에서 `현행평가`, `추가1평가`, `추가2평가`, `오답수정` 열을 지우고, `상태`, `퇴원`, `삭제`가 무엇인지 헷갈리지 않게 레이아웃을 정리하며, 같은 화면에서 반도 수정할 수 있게 해달라고 요청했다.
- 조치: 학생 목록 표에서 평가 3개 열과 오답수정 열을 제거했다. 미구현 상태였던 `퇴원` 버튼과 상단 `퇴원 0`, `전체 확정`, `전체 미확정`, 미연결 필터들을 제거해 화면을 단순화했다.
- 상태 정리: 기존 `상태` 열은 의미를 분명히 하기 위해 `정보확정`으로 바꿨다. 기존 삭제 동작은 실제 DB 삭제가 아니라 보류/숨김 처리이므로 `숨김`으로 표시하고, 안내 문구도 `DB 보류 상태로 보존`으로 맞췄다.
- 반 수정: 학생 목록 표에 `반` 선택 열을 추가했다. 여기서 학생의 `defaultClassTemplateId`를 바로 수정할 수 있고, 학생 프로파일 모달의 반 표시도 실제 학생의 반 이름을 기준으로 보여주게 했다.
- 레이아웃: 평가 열 제거 후 표 가로폭을 줄이고, 상태/숨김 버튼을 pill 형태로 정리했다.
- 검증: `npm run test:production` 146개 통과, `npm run build` 통과.

## 2026-06-24 알림관리 현황 카드 버튼 동작 보정

- 상태: 완료
- 사용자 보고: 알림관리 상단의 `예약 대기`, `내부 대기`, `테스트/초안`, `실패`, `발송 보호` 카드 버튼들이 작동하지 않는다고 보고했다.
- 원인: 해당 UI가 버튼처럼 보였지만 실제 마크업은 클릭 이벤트가 없는 `article` 카드였다. 따라서 상태별 목록 필터나 설정 위치 이동이 전혀 연결되지 않았다.
- 조치: 네 가지 상태 카드는 실제 `button`으로 바꾸고, 클릭하면 아래 `알림톡 예약/기록` 목록이 해당 상태만 보여주도록 필터링했다. `발송 보호` 카드는 발송/AI 연동 상태 영역으로 스크롤되게 연결했다.
- UI 보정: hover/focus/선택 상태를 추가해 클릭 가능한 카드임을 명확히 보이게 했다. 필터가 적용된 경우 목록 헤더에 현재 필터명과 건수를 보여주고 `전체 보기`로 돌아갈 수 있게 했다.
- 회귀 방지: 운영 시나리오 테스트에 알림관리 현황 카드 필터 동작 구조 검사를 추가했다.
- 검증: `npm run test:production` 145개 통과, `npm run build` 통과.

## 2026-06-24 웹앱 로그인 화면 차단 보정

- 상태: 완료
- 사용자 보고: 웹앱 로그인 화면 자체가 막혔다고 보고했다.
- 원인: `/attendance` 출결 전용 화면 보정 과정에서 `attendanceOnlyMode` 값을 선언하기 전에 첫 데이터 로딩 `useEffect`의 조건과 의존성에서 먼저 참조하는 구조가 되었다. 이 경우 앱 첫 렌더링 중 `Cannot access 'attendanceOnlyMode' before initialization` 런타임 오류가 발생해 로그인 카드까지 렌더링되지 않을 수 있었다.
- 조치: `attendanceOnlyMode` 선언을 앱 상태/훅 흐름의 첫 사용보다 앞으로 이동해 로그인 화면 렌더링 전에 값이 항상 준비되도록 했다.
- 회귀 방지: 운영 시나리오 테스트에 `attendanceOnlyMode` 선언이 훅 사용보다 앞에 있는지 확인하는 항목을 추가했다.
- 검증: `npm run test:production` 144개 통과, `npm run build` 통과.

## 2026-06-23 태블릿 출결 관리자 PIN 종료 보정

- 상태: 완료
- 사용자 보고: `/attendance` 태블릿 화면에서 관리자 번호 `2748` 입력 후 `관리자 모드로 이동합니다` 메시지는 뜨지만 확인/대기 후에도 관리자 화면으로 돌아가지 않는다고 보고했다.
- 원인: 관리자 PIN 성공 후에도 URL이 `/attendance`에 남아 있어 출결 전용 화면 분기와 로그인 화면 전환이 꼬일 수 있었다. 또한 종료 콜백이 250ms 타이머에 의존했다.
- 조치: 관리자 PIN이 맞으면 즉시 `onAdminExit`를 호출하고, 출결 전용 화면의 주소를 `/`로 바꾼 뒤 선생님 로그인 화면으로 전환되게 했다.
- 테스트 보강: 운영 시나리오 테스트에 관리자 PIN이 `/attendance` 전용 경로에서 즉시 빠져나가는지 확인하는 항목을 추가했다.

## 2026-06-23 태블릿 출결 전용 화면 서버 데이터 로딩 보정

- 상태: 완료
- 사용자 보고: 태블릿 출결 화면에서 테스트 번호 `7848`을 입력해도 더미 학생이 나오지 않는다고 보고했다.
- 원인: `/attendance` 전용 화면은 로그인 세션이 없는 상태로 열리는데, 기존 데이터 로딩 로직은 세션이 없으면 API 동기화를 중단했다. 따라서 운영 Supabase에는 `출결테스트학생`이 있어도 태블릿 화면은 로컬에 남아 있던 예전 학생 목록만 보고 있었다.
- 조치: 출결 전용 모드에서는 세션이 없어도 `/api/students`, `/api/lessons`, `/api/lesson-records` 등 서버 데이터를 불러오도록 변경했다.
- UI 보정: 서버 데이터 로딩이 끝나기 전에는 태블릿 번호 입력과 키패드를 비활성화하고 `출결 데이터를 불러오는 중입니다.` 안내를 보여준다.
- 테스트 보강: 운영 시나리오 테스트에 출결 전용 화면이 서버 데이터 로딩 후 번호 입력을 받는지 확인하는 항목을 추가했다.

## 2026-06-23 태블릿 출결 더미 입력 자동발송 테스트 허용

- 상태: 완료
- 사용자 요청: 태블릿 출결 테스트에서 더미 학생을 입력했을 때 선생님 번호로 출결 알림톡이 자동 발송되게 해달라고 요청했다.
- 조치: `출결테스트학생` (`student_attendance_test_20260623`) 또는 `출결 테스트 더미 수업` (`lesson_attendance_test_2026-06-23`, `lessonType: attendanceTest`)에 한해서 태블릿 출결 입력 시 `handleSendAttendanceAlimtalk()`을 자동 호출하도록 했다.
- 안전장치: 일반 학생의 태블릿 출결은 기존대로 Supabase 저장만 하고 알림톡 자동발송은 하지 않는다. 더미 학생은 학부모 번호가 선생님 수신번호 `01057882748`로 설정되어 있어 해당 번호로 수신 확인할 수 있다.
- 태블릿 테스트 번호: `7848`

## 2026-06-23 태블릿 출결 알림톡 테스트용 더미 데이터 생성

- 상태: 완료
- 사용자 요청: 태블릿 출결 흐름에서 가짜 학생을 넣고, 학부모 번호를 선생님 수신번호로 설정해 출결 알림톡이 올바른 수신인에게 가는지 확인하고 싶다고 요청했다.
- 운영 데이터 생성: Supabase에 `출결테스트학생` (`student_attendance_test_20260623`)을 추가했다. 학생 휴대폰은 `01000007848`이므로 태블릿 출결 입력 번호는 `7848`이다. 학부모 번호는 선생님 테스트 수신번호 `01057882748`로 설정했다.
- 테스트 수업 생성: `2026-06-23` 날짜에 `출결 테스트 더미 수업` (`lesson_attendance_test_2026-06-23`)을 만들고 해당 더미 학생 1명을 연결했다.
- 주의: 현재 설계상 태블릿 출결 체크는 Supabase 출결 저장만 수행하고 알림톡을 자동 발송하지 않는다. 실제 출결 알림톡 수신 테스트는 수업일지의 해당 학생 출결 모달에서 `저장 후 출결 알림톡 발송`을 눌러 확인한다.

## 2026-06-23 알림톡 30분 지연에서 기본 예약 복귀 허용

- 상태: 완료
- 사용자 정정: `30분 지연`을 눌렀더라도 수업일지가 22:30 전에 마무리되면 `기본 예약`으로 되돌릴 수 있어야 한다. 평일이면 다시 22:30 발송 예약으로 바뀌어야 한다.
- 조치: 같은 예약 상태를 이미 명시적으로 적용한 경우만 재클릭을 막고, 초기 `기본 예약` 클릭과 `30분 지연 -> 기본 예약` 전환은 허용하도록 바꿨다.
- 예약 저장: `기본 예약`도 명시적인 계획으로 저장한다. 따라서 지연 상태에서 기본 예약으로 바꾸면 기존 학부모/학생 알림톡 예약 job이 같은 ID로 다시 upsert되며, `delayMinutes = 0` 기준의 기본 발송 시각으로 덮어쓴다.
- 테스트 보강: 운영 시나리오 테스트에 `30분 지연` 상태에서 `기본 예약`으로 되돌릴 수 있고 기본 발송 시각 계산을 다시 타는지 검사하는 항목을 추가했다.

## 2026-06-23 수기/태블릿 출결 저장과 출결 알림톡 분리 보정

- 상태: 완료
- 사용자 요청: 태블릿 출결모드와 수업일지 수기 출결 저장 연결을 확인하고, 수기 입력이 필요한 상황에도 출결 알림톡을 보낼 수 있게 유지해야 한다고 정정했다. 출결 알림톡은 수업 알림톡 일괄 예약 대상에서 제외되는 것이 맞다고 확인했다.
- 태블릿 출결 저장: `/attendance` 태블릿 출결 체크가 화면 상태만 바꾸지 않고 `handleSaveRecord()`를 통해 Supabase 수업기록 저장 흐름까지 타도록 연결했다. 태블릿 체크는 알림톡을 자동 발송하지 않고 `checked_not_sent` 로그만 남긴다.
- 수기 출결 모달: 수업일지 출결 모달에 `출결 저장`과 `저장 후 출결 알림톡 발송`을 분리했다. 저장 버튼은 저장만 수행하고, 알림톡 버튼을 명시적으로 누른 경우에만 `/api/notifications/attendance-alimtalk`을 호출한다.
- 테스트 더미: 알림관리 화면의 출결 테스트를 `출결테스트 더미학생` / `출결 테스트 더미 수업` payload로 명확히 바꾸고, `forceTestRecipient: true`와 `notificationStatus.testRecipient`를 사용해 선생님 테스트 수신번호로만 보내도록 유지했다.
- 예약 제외: 수업 알림톡 전체 예약은 계속 학부모/학생 코멘트 알림톡만 생성하며, 출결 알림톡 job은 만들지 않는다.

## 2026-06-23 알림톡 30분 지연 중복 클릭 방지

- 상태: 완료
- 사용자 정정: `30분 지연`은 누를 때마다 다시 30분씩 밀거나 예약을 다시 만드는 기능이 아니라, 해당 수업의 알림톡 전체를 한 번만 지연 예약하는 버튼이다. 평일 기준 기본 22:30, 30분 지연 시 23:00 일괄 발송이면 된다.
- 조치: 수업 알림톡 계획이 이미 같은 상태이면 `handleUpdateLessonNotificationPlan()`이 즉시 반환하도록 막았다. 따라서 `30분 지연` 상태에서 같은 버튼을 다시 눌러도 예약 시간/내용을 다시 저장하지 않는다.
- UI 보정: 현재 선택된 `기본 예약`, `30분 지연`, `알림톡 없음` 버튼은 비활성화해 재클릭을 막는다. 공통 disabled 버튼의 대기 커서가 예약 버튼에는 적용되지 않도록 별도 CSS를 추가했다.
- 테스트 보강: 운영 시나리오 테스트에 active 예약 버튼의 idempotent 동작과 disabled 표시 검사를 추가했다.

## 2026-06-23 수업 알림톡 전체 예약 및 출결 자동발송 분리

- 상태: 완료
- 사용자 요청: `기본 예약`, `30분 지연`, `알림톡 없음` 7가지 구현을 진행해달라고 요청했다. 버튼 문구는 변경하지 않기로 했다.
- 원인 정리: `30분 지연`은 선생님 운영 의도상 해당 수업의 학부모+학생 알림톡 전체를 30분 늦춰 일괄 예약하고 자동 발송하는 버튼이어야 했다. 기존 구현은 수업별 계획 상태만 저장하고, 개별 알림톡 모달 발송에 의존했다.
- 전체 예약: `기본 예약` 또는 `30분 지연`을 누르면 해당 수업 학생 전체에 대해 학부모 알림톡 1건 + 학생 알림톡 1건씩 `notification_jobs`에 예약 생성한다. 같은 수업/학생/대상 조합은 결정적 ID로 upsert해 중복 생성하지 않고 업데이트한다.
- 예약 시간: 평일 기본은 `22:30`, 토요일 기본은 `18:30`을 사용하고, `30분 지연`은 각각 30분 뒤로 예약한다. 시간이 이미 지난 경우 최소 미래 시각으로 보정한다.
- 알림톡 없음: `알림톡 없음`을 누르면 아직 발송 전인 해당 수업의 학생/학부모 예약 작업을 `canceled`로 바꾸고, 수업일지 상태도 `알림톡 없음`으로 표시한다.
- 출결 분리: 수업일지에서 출결을 수기로 저장해도 더 이상 출결 알림톡을 자동 발송하지 않는다. 출결 알림톡 API와 수동 발송 함수는 남겨두되, 수업일지 저장 흐름에서는 호출하지 않는다.
- 자동 발송: Academy OS가 만든 예약에는 `payload.osScheduled: true`를 붙이고, 서버 디스패처가 해당 예약만 due 시점에 발송하도록 했다. Render cron `koh-you-math-academy-os-notification-dispatch`를 추가해 5분마다 `/api/notification-jobs/dispatch-due`를 호출한다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 수기 출결 저장 자동발송 차단, 전체 학생 학부모+학생 예약 job 생성, 예약 취소, Render cron 연결 검사를 추가했다.
- 검증: `node --check api/server.js` 통과, `node --check scripts/dispatch-due-notifications.cjs` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 136개 통과.

## 2026-06-23 알림톡 30분 지연 예약 발송 누락 보정

- 상태: 완료
- 사용자 요청: 수업일지에서 `30분 지연` 버튼을 누르고 알림톡 문구를 수정했는데, 실제 발송 내역이 즉시 발송처럼 처리된 문제를 제보했다.
- 원인: 수업 화면의 발송 계획은 `기본 예약/30분 지연/알림톡 없음`으로 저장됐지만, 알림톡 작성 모달 내부의 발송 옵션이 `sendTiming = "now"`로 고정돼 있었다. 그래서 모달에서 발송 버튼을 누르면 현재 수업 발송 계획과 무관하게 `scheduledDate`가 빈 값으로 전달되어 즉시 발송될 수 있었다.
- 조치: 알림톡 작성 모달의 발송 버튼이 현재 수업 발송 계획을 그대로 따르도록 변경했다. `기본 예약`은 예약 발송, `30분 지연`은 30분 지연 예약, `알림톡 없음`은 발송 버튼 비활성화로 처리한다.
- 안전 보정: 예약 시간이 이미 지난 경우 즉시 발송으로 밀리지 않도록 `getLessonAlimtalkScheduledDate()`가 최소 미래 시각으로 보정하게 했다.
- 서버 방어: `/api/notifications/comment-alimtalk`에 `sendMode: "scheduled"`인데 `scheduledDate`가 비어 있으면 발송 전에 오류를 내도록 검사를 추가했다.
- 화면 문구: 모달 안내 문구를 `이 모달에서는 문구 확인과 수동 즉시발송만 합니다`에서 `발송 버튼은 현재 수업 발송 계획대로 예약합니다`로 바꿨고, 버튼 라벨도 `예약 발송`/`30분 지연 예약`으로 조정했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 고정 즉시발송 값이 다시 들어오지 않도록 검사하고, 예약 요청에 `scheduledDate`가 필수인지 확인하는 항목을 추가했다.
- 검증: `node --check api/server.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 134개 통과.

## 2026-06-23 시험관리 수정 입력 모달 분리

- 상태: 완료
- 사용자 요청: 시험관리 행을 수정할 때 입력칸과 위 카테고리 헤더가 잘 맞지 않으므로 별도의 모달로 빼달라고 요청했다.
- 원인: 기존 시험관리 `수정`은 테이블 행 자체를 넓은 편집 그리드로 바꾸는 방식이었다. 수학 시험 일정처럼 여러 입력이 들어가는 칸이 생기면서 헤더와 입력 필드가 시각적으로 어긋나고, 가로 스크롤이 지나치게 길어졌다.
- 조치: 시험관리 목록 행은 읽기 전용 테이블로 유지하고, `수정` 버튼을 누르면 `ExamPrepEditModal`이 열리도록 분리했다. 모달에는 `기본 정보`, `시험 일정`, `시험 내용` 섹션을 두고 각 입력에 라벨을 붙였다.
- 입력 범위: 학교명, 학년, 과목, 출판사, 시험기간 시작/종료일, 수학시험 일정 묶음, 특이사항, 시험 범위, 부교재를 모달에서 수정할 수 있게 했다. 기존처럼 입력 즉시 `onUpdateRow`를 통해 저장 흐름을 탄다.
- 화면 보정: 모달 폭과 입력 그리드 CSS를 추가했고, 좁은 화면에서는 입력이 한 줄씩 쌓이도록 반응형을 넣었다. 시험관리 목록 헤더/값 정렬은 기존 컴팩트 행 기준으로 유지했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`의 시험관리 편집 검사를 “행 내부 편집”에서 “라벨이 있는 별도 모달 편집” 기준으로 업데이트했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 133개 통과.

## 2026-06-23 시험관리 학교명 매핑 정규화 보정

- 상태: 완료
- 사용자 요청: 시험 관리 탭에 가져온 학교별 정보가 Notion 쪽 정보와 잘 매핑되지 않는 것 같다고 확인을 요청했다.
- 원인 추정: 현재 코드에는 직접적인 Notion API 동기화 흐름은 없고, Notion/수동 입력/학생DB에서 넘어온 학교별 정보가 `exam_prep_rows`, `school_events`, 학생 정보와 매칭된다. 이때 일부 경로가 `학교명 === 학교명`으로 비교해 `자운고`와 `자운고등학교`, `정의여고`와 `정의여자고등학교`처럼 표기가 다르면 시험관리/학사일정/학생 포털 매칭이 빠질 수 있었다.
- 조치: 프론트에 `normalizeSchoolName()`과 `schoolNamesMatch()`를 추가해 공백, 구분기호, `고등학교/여자고등학교/남자고등학교/중학교` 표기를 비교용으로 정규화했다. 시험관리 논리키, 출판사 동기화 키, 학사일정 수동 입력 → 시험관리 행 동기화, 직전수업 학생 매칭, 학생 상단 D-day/시험 후 제출 대상 매칭에 적용했다.
- 서버 스코프: `/api/portal-data`에서도 같은 학교명/학년 정규화를 사용해 학생 로그인 후 내려받는 시험정보와 학교일정이 긴 학교명 표기 때문에 누락되지 않게 했다.
- DB 중복 정리: `api/routes/coreData.js`의 시험관리 중복 논리키에도 학교명 정규화를 적용해 같은 학교가 표기 차이로 별도 행처럼 취급되는 위험을 줄였다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 Notion식 학교명 표기 정규화 매칭 검사를 추가했다.
- 검증: `node --check api/server.js` 통과, `node --check api/routes/coreData.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 133개 통과. `node --check src/app/App.jsx`는 Node 24가 `.jsx` 확장자를 직접 문법 검사하지 못해 `ERR_UNKNOWN_FILE_EXTENSION`으로 실행 불가였고, 프론트 문법은 Vite 빌드로 확인했다.

## 2026-06-23 과제상태 알림문구 최종안 반영

- 상태: 완료
- 사용자 요청: 과제상태 드롭다운별 학부모/학생 알림문구 최종안을 확정해 반영해달라고 요청했다.
- 학부모 문구: `80%완료`, `50%완료`, `아는 것만 풂`, `미완료`, `미검사`의 표현을 사용자가 제시한 말투에 맞춰 수정했다. `추가 등원보충` 대신 학부모 문구에서는 `추가 보충`으로 정리했다.
- 학생 문구: `완료`는 칭찬 톤으로 `과제를 꼼꼼하게 잘 해왔어. 열심히 하느라 수고했어~!`로 변경했다. `80%완료`, `아는 것만 풂`, `난이도 높음`, `풀이 재확인`, `미완료`도 최종 합의 문구로 반영했다.
- 서버 발송: 프론트 미리보기와 실제 `/api/notifications/comment-alimtalk` 서버 fallback 문구를 동일한 최종안으로 맞췄다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`의 과제상태 문구 검사를 최종 문구 기준으로 업데이트했다.
- 검증: `node --check api/routes/notifications.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 132개 통과.

## 2026-06-23 과제상태 학생/학부모 알림문구 분리 및 톤 수정

- 상태: 완료
- 사용자 요청: 과제상태 드롭다운에 따른 학부모 알림말과 학생 알림말을 나눠 정리하고, `80%`, `50%`, `아는 것만 풂`, `난이도 높음`, `미완료`의 학부모 문구 뉘앙스를 수정해달라고 요청했다. 학생 문구도 그에 맞춰 조정하길 원했다.
- 학부모 문구: `80%완료`는 남은 부분을 다음 시간에 함께 확인, `50%완료`와 `미완료`는 필요 시 추가 등원보충 관리, `아는 것만 풂`은 쉬운 문항 위주로 풀어온 상태, `난이도 높음`은 과제 난이도 조정으로 안내하도록 바꿨다.
- 학생 문구: 학부모 문구와 같은 의미를 유지하되 학생에게 직접 전달되는 말투로 분리했다. 예를 들어 `80%완료`는 `남은 부분은 다음 시간에 같이 확인하자`, `50%완료/미완료`는 필요 시 추가 등원보충으로 마무리하자는 톤으로 정리했다.
- 구현: 프론트에는 `assignmentStatusParentMessages`, `assignmentStatusStudentMessages`, `getAssignmentStatusMessage()`를 두고, 미리보기/AI 수정 payload/실제 발송 payload가 대상별 문구를 쓰도록 했다. 서버 `/api/notifications/comment-alimtalk`에도 학부모/학생 문구 맵을 분리해 direct API fallback도 대상별로 맞췄다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 학부모/학생 과제상태 문구 분리, 출결 다음 과제상태 표시, 최신 문구 톤을 확인하는 항목을 추가했다.
- 검증: `node --check api/routes/notifications.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 132개 통과.

## 2026-06-23 학생/학부모 알림톡 과제 상태 위치 통일

- 상태: 완료
- 사용자 요청: 학부모 알림톡에서 `출결` 다음에 `과제 상태`를 보여주고, 학생 알림톡에도 `과제 상태`를 보여달라고 요청했다.
- 조치: 알림톡 미리보기 본문 순서를 `출결 → 과제 상태 → 강의 교재 → 강의 내용 → 지난 과제 → 다음 과제 → 코멘트`로 정리했다. 기존에는 학부모에게만 과제 상태가 보였지만, 학생 알림톡 미리보기와 템플릿 미리보기에도 같은 과제 상태 줄이 나오도록 바꿨다.
- 서버 발송: `/api/notifications/comment-alimtalk` 실제 발송 본문 생성에서도 학생/학부모 모두 `assignmentStatusMessage`를 사용하게 하고, 과제 상태 줄을 출결 바로 아래에 배치했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 학생/학부모 알림톡 모두 과제 상태가 포함되고 서버 본문에서도 출결 다음에 과제 상태가 오는지 확인하는 항목을 추가했다.
- 검증: `node --check api/routes/notifications.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 131개 통과.

## 2026-06-23 수업메모 모달 닫기 시 즉시 저장 보강

- 상태: 완료
- 사용자 요청: 수업메모를 작성하고 `학생 알림톡 초안에 포함` 체크 후 저장 완료를 기다려야 하는지, 모달을 바로 닫아도 자동 저장되는지 문의했다.
- 확인: 기존에도 체크/입력 변경 시 부모 수업일지 상태가 즉시 바뀌고 1초 뒤 자동저장이 예약되며, 모달을 닫는 것만으로 예약 타이머가 취소되지는 않는다. 다만 저장 완료 전에 새로고침/탭 종료를 하면 위험할 수 있었다.
- 조치: `PreparationMemoModal`의 닫기 동작을 보강해 닫기 버튼 또는 `Esc`로 모달을 닫을 때 `saveMemo()`를 한 번 즉시 호출한 뒤 닫히게 했다. 이제 체크하고 바로 닫아도 저장 요청이 즉시 들어간다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 수업메모 모달 닫기 시 저장이 호출되는지 확인하는 항목을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 130개 통과.

## 2026-06-23 학부모 알림톡 과제 완료 여부 fallback 보정

- 상태: 완료
- 사용자 요청: 오늘 수업일지에 등록한 `화목 4-7 / 토 10-1반` 학부모 알림톡 미리보기에서 숙제완료여부가 나타나지 않는 이유를 문의했다.
- 원인: 알림톡 미리보기의 `과제 상태` 줄은 학부모용에서만 표시되며, 기존에는 현재 수업일지 학생별 기록의 `assignmentStatus`만 기준으로 삼았다. 그래서 지난 과제 제목은 연결된 숙제 데이터에서 잘 가져오더라도, 수업일지 record 쪽 과제 상태가 비어 있으면 `과제 상태` 줄이 통째로 생략될 수 있었다.
- 조치: 메시지용 과제 상태 계산 함수를 추가해 `수업일지 record 상태 → 연결된 지난 숙제 assignmentStatus/incompleteHomework → 숙제 teacherStatus/status` 순서로 fallback 하도록 했다. 미리보기, 원본 메모 보기, 실제 알림톡 발송 payload, 발송 전 점검 모두 같은 기준을 쓰게 맞췄다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 학부모 알림톡 과제 상태가 연결된 지난 숙제 검사 결과로 fallback 되는지 확인하는 항목을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 129개 통과.

## 2026-06-23 알림톡 실발송 문구 확정형 보정

- 상태: 완료
- 사용자 요청: 수업일지 알림톡 발송 영역의 `실발송 가능: 등록된 실제 번호로 발송될 수 있습니다` 문구가 어색하고, 현재는 실발송되는 상태가 맞지 않느냐고 확인했다.
- 조치: 실제 번호 발송 모드에서는 `실발송 모드: 등록된 실제 번호로 발송됩니다`로 확정형 안내가 나오도록 바꿨다. 알림톡 관리 카드의 상태명도 `실발송 가능`에서 `실발송 모드`로 변경하고, 즉시 발송 안내 문구도 `즉시 발송 수신`으로 간결하게 정리했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 실발송 안내가 확정형 문구를 쓰고 `발송될 수 있습니다` 표현이 남지 않도록 검사하는 항목을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 128개 통과.

## 2026-06-23 수업일지 hover 표시 및 ESC 모달 닫기 보정

- 상태: 완료
- 사용자 요청: 수업일지 화면에서 각 수업 위에 마우스를 올렸을 때 표시가 약해 복사/붙여넣기 작업이 불편하고, 일반 수업일지 모달에서 `Esc`로 뒤로가기가 되지 않는 문제를 수정해달라고 요청했다. `Esc` 동작은 모든 모달에 적용되기를 원했다.
- 조치: 일반 수업일지 상세 화면을 직접 만든 modal backdrop 대신 공통 `Modal` 컴포넌트로 연결했다. 기존 화면 구조를 유지하기 위해 `hideHeader` 옵션을 추가했고, 이 경로도 공통 `Escape` 키 닫기 로직을 타도록 했다.
- 표시 개선: 월간 캘린더 수업 pill과 날짜별 수업 카드에 hover/focus 표시를 강화했다. 선택 대상이 더 잘 보이도록 outline, shadow, 밝기, 살짝 올라오는 효과를 넣고, title/aria-label을 추가해 수업 이름과 시간을 더 쉽게 확인할 수 있게 했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 일반 수업일지 모달이 공통 ESC 닫기 모달을 쓰는지, 수업 pill/card hover/focus 스타일이 유지되는지 확인하는 검사를 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 127개 통과.

## 2026-06-23 학생/학부모 포털 데이터 스코프 분리 및 로그인 로딩 보정

- 상태: 완료
- 사용자 요청: 비밀번호가 틀렸을 때 로그인 로딩이 계속 도는 문제를 고치고, 학생 로그인 후 자기 데이터만 내려받는 API 스코프 분리를 진행해달라고 요청했다.
- 로그인 보정: 학생/학부모/교사 로그인 제출 함수에 `try/finally`를 적용해 인증 실패 또는 서버 오류가 나도 `확인 중` 상태가 반드시 해제되게 했다.
- 읽기 스코프: 서버에 학생/학부모 세션 토큰을 발급하는 흐름과 `/api/portal-data`를 추가했다. 학생/학부모는 토큰의 `studentId` 기준으로 학생 1명, 해당 수업/수업기록/숙제/보충/시험정보/학교일정/성적/시험 후 제출/질문만 내려받는다.
- 저장 스코프: `/api/portal-state`를 추가해 학생 질문과 시험 후 제출 기록을 토큰의 `studentId` 범위 안에서만 `app_state`에 병합 저장하게 했다.
- 프론트 동기화: 로그인 전에는 전체 API 동기화를 하지 않고, 교사는 기존 전체 동기화, 학생/학부모는 `/api/portal-data`만 사용하도록 분리했다. 교사용 전체 `app_state` 저장은 교사 세션에서만 동작한다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 포털 데이터 스코프, 포털 상태 저장 스코프, 로그인 실패 로딩 해제 검수 항목을 추가했다.
- 검증: `node --check api/server.js` 통과, `node --check api/routes/coreData.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 125개 통과.

## 2026-06-23 계정 정보 저장 정리 및 학생 계정 서버 인증 전환

- 상태: 완료
- 사용자 요청: `app_state`에 남은 계정 정보를 정리하고, 학생들에게 아이디를 부여해 웹앱을 나눠줄 준비를 요청했다.
- 보안 조치: 교사 계정 설정을 더 이상 `app_state`에 저장하거나 복원하지 않도록 제거했다. 브라우저 로컬에 남아 있을 수 있는 기존 `academy-os.teacherAccountSettings.v1` 키도 앱 시작 시 삭제한다.
- 서버 조치: `/api/app-state` 읽기/쓰기에서 `teacherAccountSettings`를 민감 키로 필터링하고, 저장 시 기존 행을 삭제하도록 했다. 교사 로그인은 서버 `teacher_accounts` 인증만 사용하고 로컬 비밀번호 fallback을 제거했다.
- 학생/학부모 로그인: `/api/auth/login`이 `student`, `parent`, `teacher` 역할을 모두 처리하게 확장했다. 학생은 `students.login_id + pin`, 학부모는 `parent-{student.login_id} + pin`으로 서버에서 인증한다.
- 운영 메모: 학생에게 배포할 기본 계정은 학생 관리 화면의 `아이디`, `PIN` 값을 기준으로 안내하면 된다. 학부모 계정은 같은 PIN을 사용하되 아이디 앞에 `parent-`를 붙인다.
- 검증: `node --check api/server.js` 통과, `node --check api/routes/coreData.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 122개 통과.

## 2026-06-23 시험 후 제출 빈칸 제출 차단

- 상태: 완료
- 사용자 요청: 시험 후 제출의 각 항목에 blank가 있으면 제출되지 않고 반드시 채워서 제출하게 해달라고 요청했다.
- 조치: 학생 시험 후 제출 폼에 필수 입력 검증을 추가했다. 점수/등급, 드롭다운, 모든 서술형 문항, 시험지 제출 메모는 `required`로 처리하고, 복수 선택 문항과 시험지 사진/PDF는 제출 함수에서 별도로 검사한다.
- 사용자 안내: 누락 항목이 있으면 제출을 중단하고 `아직 작성하지 않은 항목이 있습니다` 메시지와 함께 빠진 항목 목록을 보여준다. 학생이 값을 입력하거나 파일을 선택하면 경고가 초기화된다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 시험 후 제출 필수 입력 검수 항목 `22m`을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 120개 통과.

## 2026-06-23 학생/학부모 모바일 친화 및 시험 후 제출 가독성 강화

- 상태: 완료
- 사용자 요청: 학생과 학부모 화면은 모바일, 태블릿 친화적으로 만들고, 시험 후 제출 폼의 가독성을 더 높여달라고 요청했다.
- 조치: 시험 후 제출 폼의 각 문항을 질문 블록처럼 보이도록 배경, 테두리, 왼쪽 강조선, 여백, 행간을 조정했다. 입력칸과 textarea의 글자 크기, focus 상태, 최소 높이를 정리해 학생이 모바일에서 긴 답변을 쓰기 쉽게 했다.
- 모바일/태블릿 대응: 태블릿에서는 자동 매핑 정보와 상단 입력 그리드를 2열로 정리하고, 모바일에서는 1열로 전환했다. 모바일 복수 선택지는 한 줄씩 충분한 터치 높이를 갖도록 바꿨다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 시험 후 제출 폼 모바일/태블릿 가독성 검수 항목 `22l`을 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 119개 통과.

## 2026-06-23 시험 후 제출 폼 가독성 보정

- 상태: 완료
- 사용자 요청: 시험 후 제출 폼의 체크박스가 너무 크고, 질문을 볼드체로 해서 가독성을 높여달라고 요청했다.
- 조치: 시험 후 제출 폼 질문 라벨의 색상/굵기/행간을 강화하고, 복수 선택 그룹 질문도 굵게 표시했다. 체크박스는 14px 크기로 고정하고 선택지 pill의 패딩과 글자 굵기를 줄여 과하게 커 보이지 않게 조정했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 118개 통과.

## 2026-06-23 시험 후 제출 Tally 전체 문항 반영

- 상태: 완료
- 사용자 요청: 시험 후 제출 폼에 Tally에 있던 항목 전부를 넣고, 기본정보는 학생정보와 시험정보에서 자동 매핑하며, 드롭다운 문항은 드롭다운으로 만들라고 요청했다.
- 조치: 학생 `시험 후 제출` 폼 상단에 이름, 학년, 학교, 시험, 과목, 시험일 자동 매핑 정보를 표시했다. 전체 소감, 난이도 0~10, 준비 충분도 0~10, 학원 수업/자료 도움 정도는 선택형으로 구성했다.
- 추가 문항: 잘 준비한 부분, 실력을 발휘한 문제 유형/단원, 아쉬웠던 이유, 다른 이유, 더 준비할 부분, 시험장에서 아쉬웠던 순간, 수학 공부과정에서 힘들었던 것, 수업/자료 피드백, 다음 시험 목표, 다음 시험을 위해 바꾸고 싶은 것, 선생님께 도움받고 싶은 부분, 건의사항을 추가했다.
- 저장/관리: `examPostSubmissions` payload에 Tally 세부 답변 필드를 저장하고, 강사 `시험 후 제출 관리` 화면에서 제출 답변 전체를 확인할 수 있게 했다. 복수 선택 문항은 체크박스로 저장하고 관리 화면에서는 한 줄 요약으로 표시한다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 Tally 전체 문항 포함 검수 항목 `22k`를 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 118개 통과.

## 2026-06-23 개발 중 시험 후 제출 폼 상시 노출

- 상태: 완료
- 사용자 요청: 현재는 개발 중이므로 기간과 관계없이 시험 후 제출 폼이 나타나게 해달라고 요청했다.
- 조치: 학생별 시험 후 제출 대상 계산에서 `시험 7일 전부터` 필터를 제거했다. 이제 시험관리 row가 학생의 학교/학년과 매칭되고 시험일이 있으면 날짜가 멀어도 학생 화면에 시험 후 제출 카드와 폼이 표시된다.
- 표시 조치: 개발 중 검수를 위해 대상은 항상 `isOpen: true`로 처리해 `시험 후 제출 필요` 폼이 바로 열린다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 117개 통과.

## 2026-06-23 학생 숙제 통계/시험 후 제출 카드 노출 보정

- 상태: 완료
- 사용자 요청: 학생 마이페이지의 숙제 이행률이 잘 반영되지 않고, 학생 화면에 시험 후 제출 폼이 보이지 않는다고 제보했다.
- 숙제 통계 조치: 숙제 이행률 계산을 단순 완료 개수에서 검사 결과 기반 점수로 변경했다. `완료`는 1, `80%완료`는 0.8, `50%완료`와 일부 완료성 상태는 0.5, `미완료/미검사`는 0으로 반영한다. 화면의 `n/총개수` 표기도 소수 이행량을 표시할 수 있게 했다.
- 시험 후 제출 조치: 학생 학교명 매칭을 공백/`고등학교` 표기 차이에 강하게 보정했다. 시험 후 제출 카드는 시험일 이후에만 뜨던 조건을 완화해 시험 7일 전부터 `시험 후 제출 예정`으로 보이게 하고, 시험 당일/이후에는 `시험 후 제출 필요`로 표시한다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 117개 통과.

## 2026-06-23 P1 사진 제출 운영 정리 및 다음 큐 문서화

- 상태: 완료
- 사용자 요청: 고속스캐너 자동화는 한참 나중에 하고, 당장은 사진 제출로 진행하기로 했으므로 여기까지 md 파일로 정리하고 다음 작업 큐를 알려달라고 요청했다.
- 조치: `docs/p1-exam-post-photo-submission-summary-2026-06-23.md`를 새로 작성했다. 현재 구현된 사진 제출 범위, 운영 검수 항목, SQL Editor 필요 여부, 고속스캐너 보류 메모, 다음 작업 큐를 정리했다.
- 결정: 당장은 학생 사진/PDF 제출 흐름을 운영 검수한다. 고속스캐너 자동화는 보류하되, 향후 QR 표지/OCR/스캔 수신함으로 확장하는 방향만 문서에 남겼다.
- 다음 우선순위: 사진 제출 실제 운영 검수, 시험 후 제출 정규 테이블 저장 안정화, 시험 후 제출 UI/알림톡 고도화, 학생 오늘 탭 운영 검수, 이전 handoff의 운영 안정화 큐 순서로 진행한다.
- 검증: 문서 작업만 수행했으므로 빌드는 생략했다.

## 2026-06-23 P1 시험 후 제출 사진 업로드 및 스캐너 확장 설계

- 상태: 완료
- 사용자 요청: P1 다음 단계로 당장은 학생이 시험지를 사진으로 찍어 제출하고, 나중에는 고속스캐너로 스캔한 파일을 학생 이름 기준으로 자동 분류해 학생 스토리지에 저장하고 OS에 기록/표시되게 하고 싶다고 요청했다.
- 학생 제출 조치: 학생 `시험 후 제출` 폼에 사진/PDF 파일 선택을 추가했다. 모바일에서는 카메라 촬영 흐름을 유도하고, 여러 장 첨부를 지원한다.
- 서버 업로드 조치: `/api/exam-post-files` 업로드 API를 추가했다. 서버가 Supabase service role로 `exam-submissions` 비공개 Storage 버킷을 확인/생성하고, 파일을 `exam-post/{examCycle}/{school}/{grade}/{student}/{targetId}/...` 경로에 저장한다.
- 파일 열람 조치: 제출 기록에는 파일 원본이 아니라 `bucketId`, `storagePath`, `fileName`, `fileType`, `fileSize`, `source` 메타데이터만 저장한다. 학생/강사 화면의 `파일 보기`는 `/api/exam-post-files/open`을 통해 signed URL을 받아 연다.
- 실패 안전장치: Storage 업로드가 실패해도 시험 후 제출 자체는 사라지지 않고, 해당 파일은 `업로드 실패` 상태로 제출 기록에 남아 강사가 확인할 수 있다.
- 고속스캐너 확장 설계: `supabase/20260623_exam_submission_files.sql`을 추가했다. 향후 스캐너 자동화에서는 스캔 배치 ID, 감지된 학생명, 매칭 상태(`matched/needs_review/unmatched`)를 기록하고 같은 Storage 경로 체계를 사용한다.
- SQL Editor 참고: 현재 사진 업로드 MVP는 서버가 Storage 버킷을 자동 생성하므로 새 SQL 실행 없이도 시도 가능하다. 다만 스캐너 자동분류/파일 메타데이터 정규 테이블까지 운영 DB에 올릴 때는 `supabase/20260623_exam_submission_files.sql` 실행이 필요하다.
- 검증: `node --check api/server.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 115개 통과.

## 2026-06-23 학생 숙제 검사 결과 라벨 표시

- 상태: 완료
- 사용자 요청: 선생님이 숙제 검사 결과로 남긴 `80프로`, `50프로`, `미검사` 같은 상태도 학생 앱에서 볼 수 있게 해달라고 요청했다.
- 조치: 학생 숙제 카드에 `완료`, `80%완료`, `50%완료`, `미완료`, `미검사` 등을 표시하는 검사 결과 배지를 추가했다. `80프로`, `50프로`, `80%`, `50%` 입력도 기존 선택값과 같은 라벨로 정규화한다.
- 연결 숙제 보정: 수업일지에서 지난 숙제 검사 결과를 바꾸면 숨겨진 `previous` 숙제뿐 아니라 학생에게 보이는 원본 `next` 숙제에도 검사 상태가 같이 반영되도록 동기화했다. 이미 저장된 연결 숙제도 학생 화면 렌더링 시 숨겨진 `previous` 기록과 수업일지 `assignmentStatus`를 읽어 표시한다.
- 적용 화면: 학생 오늘 숙제 카드, 학생 전체 숙제 카드, 학부모 숙제 카드의 강사 확인 표시를 한국어 상태 배지로 바꿨다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 114개 통과.

## 2026-06-23 학생 숙제 완료 반영 및 시험 후 제출함 MVP

- 상태: 완료
- 사용자 요청: 박수빈 학생의 2026-06-19, 2026-06-22 숙제를 선생님이 완료 처리했지만 학생 앱에서는 미완료로 보이는 문제를 수정하고, 학생이 숙제를 등록하거나 자동 재분배하는 기능을 삭제해달라고 요청했다. 이어서 P1 시험 후 제출함 MVP 진행을 요청했다.
- 숙제 조치: 학생 화면의 숙제 완료 판단을 `isHomeworkResolved()` 기준으로 통일했다. 이제 선생님이 `teacherStatus: verified`로 확인한 숙제도 학생 앱에서 완료로 표시된다.
- 학생 기능 정리: 학생 화면의 숙제 등록 탭, 학생 숙제 수정/삭제 UI, 자동 재분배 안내 문구, 학생 직접 숙제 생성/수정/삭제 핸들러를 제거했다. 학생은 선생님이 등록한 숙제를 확인하고 완료 체크만 할 수 있다.
- P1 조치: `examPostSubmissions` app_state 기반 MVP를 추가했다. 시험관리 DB의 학교/학년/수학 시험일을 기준으로 학생별 시험 후 제출 대상을 자동 계산하고, 학생 오늘 탭에서 시험 후 제출 폼을 작성할 수 있게 했다.
- 강사 관리: 시험관리 화면에 `시험 후 제출` 탭을 추가했다. 강사는 제출/미제출 현황, 점수, 체감 난이도, 준비도, 학생 메모를 확인하고 확인 완료 토글을 할 수 있다.
- 파일 업로드 범위: 이번 MVP는 파일 메모/제출 방식 메모만 지원한다. 실제 사진/PDF 업로드는 Supabase Storage 버킷, 정책, 파일 메타데이터 설계가 필요한 다음 단계로 분리한다.
- SQL Editor 작업 필요 없음: 이번 작업은 기존 `app_state`, `exam_prep_rows`, `homeworks` 흐름을 활용한 프론트/API 상태 저장 MVP라서 추가 SQL 실행은 필요 없다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 113개 통과.

## 2026-06-23 학생 숙제 탭 중복 표시 보정

- 상태: 완료
- 사용자 요청: 학생 탭에 같은 숙제가 2개씩 등록되어 보인다.
- 원인: 수업일지에서 `다음 숙제`를 저장하면 다음 수업의 확인용 `previous` 숙제가 자동 생성된다. 이 연결용 `previous` 레코드는 수업일지/수업 브리핑에서 지난 숙제를 보여주기 위한 데이터인데, 학생 `전체 숙제` 탭도 모든 숙제를 그대로 보여줘 같은 제목이 두 장으로 보였다.
- 조치: 학생 화면에서 실제 수행 대상 숙제만 보이도록 `homeworkType: "previous"` 레코드를 숨기는 `isStudentVisibleHomework()` 필터를 추가했다. 이제 학생 `오늘 할 숙제`, `밀린 숙제`, `전체 숙제`, 숙제 통계는 연결용 지난 숙제를 제외하고 표시한다. 수업 브리핑의 지난 숙제 매핑에는 기존 `previous` 레코드를 계속 사용한다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 학생 숙제 목록이 연결용 지난 숙제 중복을 숨기는지 확인하는 체크를 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 110개 통과.
- SQL Editor 작업 필요 없음: 기존 homework 데이터를 삭제하지 않고 학생 화면 표시 필터만 보정했다.

## 2026-06-23 학생 수업 브리핑 수업일지 매핑 보정

- 상태: 완료
- 사용자 요청: 박수빈 학생의 2026-06-22 수업 브리핑에서 수업일지에 적은 정보들이 제대로 매핑되지 않는 것 같다고 했다.
- 원인: 학생 `오늘` 탭의 수업 기록 캘린더가 `lesson_student_records`의 직접 필드만 읽고 있었다. 실제 수업일지 화면은 강의 내용을 `lessonProgress/progress`로 다루고, 지난 숙제/다음 숙제는 별도 `homeworks` 데이터에서 `getLessonHomework()`로 계산해 표시한다. 그래서 학생 브리핑에서 강의 내용, 지난 숙제, 다음 숙제가 `기록 전`으로 보일 수 있었다.
- 조치: 학생 수업 기록 캘린더에도 수업일지와 동일한 매핑을 적용했다. 강의 내용은 `getLessonContent()`를 사용하고, 이 함수가 `lessonContent` 필드도 fallback으로 읽도록 보완했다. 지난 숙제/다음 숙제는 `getLessonHomework(homeworks, lesson, selectedStudent, ...)`로 계산해 표시한다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 학생 수업 브리핑이 수업일지 강의 내용과 숙제 데이터를 매핑하는지 확인하는 체크를 추가했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 109개 통과.
- SQL Editor 작업 필요 없음: 기존 `lesson_student_records`와 `homeworks` 데이터를 읽는 프론트 매핑 보정이다.

## 2026-06-23 교사 계정 변경 후 로그인 실패 복구

- 상태: 완료
- 사용자 요청: SQL Editor 실행 후 설정에서 아이디/비밀번호를 바꿨는데 로그인이 되지 않는다.
- 원인: 서버 계정 저장 성공 후 프론트의 로컬 fallback 계정 비밀번호가 새 비밀번호로 갱신되지 않고 이전 값 또는 빈 값으로 남을 수 있었다. 또한 서버 `/api/auth/login`이 정상 응답이지만 `authenticated:false`를 반환하는 경우에는 로컬 fallback 검증을 시도하지 않아, SQL/서버 인증 전환 과정에서 계정이 잠기는 상황이 생길 수 있었다.
- 조치: 선생님 로그인에서 서버 인증이 실패 응답을 돌려도 기존 앱 설정 계정과 일치하면 임시 로컬 fallback으로 로그인되게 했다. 서버 계정 저장 성공 후에도 로컬 fallback 계정을 새 아이디와 새 비밀번호 기준으로 동기화하도록 수정했다.
- 회귀 방지: `scripts/scenario-tests-production.cjs`에 서버 인증 전환 중 로컬 fallback 로그인과 계정 저장 후 비밀번호 동기화 체크를 추가했다.
- 검증: `node --check api/server.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 108개 통과.
- SQL Editor 추가 작업 필요 없음: 기존 `teacher_accounts` 테이블을 그대로 사용한다.

## 2026-06-23 SQL Editor 실행 후 서버 인증 종합검토

- 상태: 완료
- 사용자 요청: `supabase/20260623_teacher_accounts.sql`을 SQL Editor에서 실행했으므로 종합검토한다.
- 확인 내용: 운영 `/api/auth/login`에 잘못된 선생님 로그인 요청을 보내 테이블/권한 오류 없이 `authenticated:false`가 반환되는 것을 확인했다. 운영 `/api/auth/teacher-account`도 잘못된 현재 계정에 대해 401을 반환해 Supabase service role 접근과 `teacher_accounts` 테이블 연결은 정상으로 판단했다.
- 발견 이슈: 운영 서버에서 기본 계정 `teacher / 1234`가 아직 인증되었다. 기존 코드가 `teacher_accounts`에서 해당 login_id를 찾지 못하면 기본 계정 fallback을 허용했기 때문에, 서버 계정을 새로 저장한 뒤에도 `teacher` login_id가 없으면 기본 계정이 계속 살아남을 수 있었다.
- 조치: `api/server.js`에 활성 `teacher_accounts` 존재 여부 확인을 추가했다. 이제 서버 계정이 1개라도 있으면 기본 계정 fallback은 더 이상 허용되지 않고, 기본 계정은 최초 서버 계정 bootstrap 전용으로만 동작한다.
- 운영 절차: 배포 반영 후 설정 화면에서 선생님 계정을 한 번 저장해야 `teacher_accounts`에 활성 계정이 생긴다. 그 이후 기본 계정 fallback은 차단된다.
- 검증: `node --check api/server.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 107개 통과.
- SQL Editor 추가 작업 필요 없음: 이미 실행한 `supabase/20260623_teacher_accounts.sql` 테이블을 그대로 사용하며 추가 SQL은 없다.

## 2026-06-23 세션 자동 커밋/푸시 원칙 문서화

- 상태: 완료
- 사용자 요청: 매 대화세션마다 AI가 커밋/푸시할 수 있는 것은 알아서 하라고 요청했는데 반복적으로 누락되므로, 오늘 md 파일에 반드시 남겨달라고 했다.
- 작업 내용: `docs/session-handoff-2026-06-23.md`에 세션 운영 원칙을 별도 섹션으로 추가했다. 사용자가 명시적으로 막지 않으면 Codex/AI가 구현, 검증, `docs/current-worklog.md` 갱신, `git add`, `git commit`, `git push origin main`, 운영 URL 확인까지 진행해야 한다고 명확히 적었다.
- 다음 세션 프롬프트에도 같은 원칙을 강화했다. "계획만", "검토만", "커밋하지 마세요"처럼 사용자가 범위를 제한한 경우가 아니면 질문으로 멈추지 말고 가능한 범위의 커밋/푸시까지 자동 진행하도록 남겼다.
- 최신 상태 반영: `87067ec Build student portal briefing MVP`가 `origin/main`에 push되었고, 학생 포털 오늘 MVP/마이페이지 통계/출결 키오스크/서버 인증 1차 전환이 반영된 상태임을 handoff에 추가했다.
- SQL Editor 주의: `supabase/20260623_teacher_accounts.sql`은 AI가 자동 적용했다고 가정하지 않고, 사용자가 Supabase SQL Editor에서 실행해야 하는 작업으로 계속 표시한다.
- 검증: 문서 변경만 수행했으므로 앱 빌드는 생략한다. 변경 후 git commit/push는 진행한다.

## 2026-06-23 학생 홈 오늘 MVP 구현

- 상태: 완료
- 사용자 요청: 최근수업카드는 강사가 입력한 수업일지를 학생이 캘린더에서 눌러 그날 무엇을 했는지 확인하는 방식으로 만들고, 내신 D-day는 별도 카드가 아니라 화면 상단 알림으로 표시한다. 학생 질문 리스트를 정리해서 수업 준비 책임감을 높일 수 있게 하고, 보충/재시험 같은 특이일정도 상단 D-day 알림과 함께 보이게 한다. 학생 화면의 `등록`, `커리큘럼` 탭은 삭제하지 말고 맨 뒤로 보낸다.
- 작업 내용: 학생 포털 `오늘` 탭 상단에 D-day/특이일정 알림 바를 추가했다. 학생의 학교/학년과 매칭되는 `examPrepRows.mathExamDate`를 우선 표시하고, 없으면 보충/재시험 일정, 학사일정 순으로 가까운 미래 일정을 표시한다.
- 수업 기록 캘린더: 학생의 `lesson_student_records`와 수업일지를 날짜별로 묶어 달력에 표시하고, 날짜를 누르면 출결, 강의 교재, 강의 내용, 지난 숙제, 다음 숙제, 과제 상태, 학생용 코멘트, 학생 공개 준비 메모를 확인할 수 있게 했다.
- 질문 리스트: `studentQuestions` 상태를 추가해 학생이 수업 전에 질문을 적고, 해결 체크/다시 질문/삭제를 할 수 있게 했다. 이 상태는 기존 `app_state` 저장 흐름에 포함된다.
- 특이일정: 학생별 보충/재시험 일정이 있으면 오늘 탭에 최대 3개까지 표시한다.
- 탭 정리: 학생 화면 탭 순서를 `오늘`, `전체`, `자료함`, `평가`, `마이 페이지`, `등록`, `커리큘럼`으로 바꿔 미구현 성격의 `등록`, `커리큘럼`을 맨 뒤로 보냈다.
- SQL Editor 작업 필요 없음: 기존 `app_state`, `exam_prep_rows`, `school_events`, `makeup_tasks`, `lesson_student_records` 데이터를 사용하며 새 DB 스키마 변경은 없다.
- 검증: `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 106개 통과.

## 2026-06-23 학생 마이페이지 통계/출결 키오스크/서버 인증 1차 전환

- 상태: 완료
- 사용자 요청: P0부터 진행하되, 마이페이지 통계에 숙제통계/출결통계를 추가하고 최근 수업카드는 더 기획한 뒤 제작한다. P1 태블릿 출결화면 정리를 진행하고 관리자 번호는 `2748`로 한다. P2 서버 인증 방식 정리를 진행한다. P3는 기존 Tally 시험 후 self-check 질문을 기준으로 자동화 가능 항목과 학생 입력 항목을 나누어 학생 웹앱 제출함 설계에 반영한다.
- P0 작업 내용: 학생 마이페이지 `통계` 안에 `숙제통계`/`출결통계` 하위 탭을 추가했다. 숙제통계는 전체 이행률, 완벽한 날, 등록 숙제, 숙제 이행률, 숙제 이행 달력을 표시한다. 출결통계는 출석/지각/결석/무단결석 카운트, 출석률, 상태별 비율, 출결 달력을 표시한다.
- P0 기획 메모: 최근 수업카드는 바로 구현하지 않고 학생이 앱을 열었을 때 실제로 보고 싶어할 정보(오늘 해야 할 일, 다음 수업 준비물, 지난 수업 요약, 질문/오답, 보충/재시험 일정, 시험 임박 알림, 선생님 코멘트)를 먼저 정리한 뒤 별도 구현한다.
- P1 작업 내용: `/attendance` 전용 화면 진입 시 body에 `attendanceOnlyBody` 클래스를 붙여 화면 높이와 overflow를 고정했다. 출결 관리자 번호 기본값을 `2748`로 추가했고, 출결 화면에서 이 번호를 입력하면 출결 기록을 남기지 않고 선생님 로그인 화면으로 이동한다. 설정 화면에서 `출결 관리자 번호`를 4자리 숫자로 수정할 수 있게 했다.
- P2 작업 내용: 선생님 로그인 검증을 먼저 서버 `/api/auth/login`으로 시도하도록 변경했다. 서버에는 `teacher_accounts` 테이블의 PBKDF2-SHA256 해시를 검증하는 로직을 추가했다. 설정 화면의 계정 저장은 `/api/auth/teacher-account`를 통해 서버 해시 저장을 시도하고, SQL 미적용/서버 실패 시 기존 로컬 app_state 방식으로 임시 fallback한다.
- P2 SQL Editor 작업 필요: `supabase/20260623_teacher_accounts.sql`을 Supabase SQL Editor에서 실행해야 서버 해시 계정 저장이 완전히 동작한다. 실행 전에는 기존 로컬 계정 fallback이 유지된다. SQL 실행 후 설정 화면에서 현재 계정 비밀번호를 입력하고 계정 저장을 한 번 수행하면 `teacher_accounts`에 해시 계정이 생성된다.
- P3 작업 내용: `docs/exam-post-submission-student-webapp-plan.md`에 Tally 폼(`https://tally.so/r/D40XWq`)과 CSV 24건/22컬럼 기준 질문 매핑을 추가했다. 이름/학년/학교/시험/과목/시험일/마감/제출시각/미제출 상태는 자동화하고, 시험 소감/난이도/준비도/잘된 점/아쉬운 점/다음 목표/도움 요청/자유 메모는 학생 입력으로 분리했다.
- 검증: `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 106개 통과.

## 2026-06-23 시험 후 제출함 학생 웹앱 계획 문서화

- 상태: 완료
- 사용자 요청: Tally로 취합하던 시험 후 점수, 셀프체크리스트, 시험지 제출 업무를 학생 웹앱에서 간소화할 수 있는지 논의한 내용을 다른 대화 세션에서 개발할 수 있도록 md 파일로 정리한다.
- 작업 내용: `docs/exam-post-submission-student-webapp-plan.md`를 새로 작성했다. 문서에는 시험 이후 조건부 오픈 UX, 학생 홈 카드, 학생 제출 항목, 강사 `시험 후 제출 관리` 화면, 데이터 모델 초안, 파일 업로드 저장 방식, 알림 흐름, 구현 단계, 주의사항을 정리했다.
- 범위 제외: 재시험/보충 후보는 이미 별도 탭이 있으므로 새 탭을 만들지 않고 기존 흐름으로 연결만 하는 방향으로 정리했다.
- SQL Editor 작업 필요: 이번 작업은 문서 작성만 했으므로 현재 즉시 적용할 SQL은 없다. 실제 구현 시 `exam_post_submissions`, `exam_submission_files`, Supabase Storage 정책 설계가 필요할 수 있다.
- 검증: 문서 추가 작업이라 `npm run build`는 실행하지 않았다.

## 2026-06-23 세션 handoff 문서 정리

- 상태: 완료
- 사용자 요청: 오늘 한 내용을 다시 정리하고 새 md 파일로 만들어 다음 세션에서 알아보기 쉽게 남겨달라고 했다.
- 작업 내용: `docs/session-handoff-2026-06-23.md`를 새로 작성했다. 오늘 완료한 화목토 2개 반/학생 15명 운영 반영, 검증 결과, 커밋/배포 상태, SQL Editor 필요 여부, 다음 P0 학생화면 수업일지 반영 구조 정리, 태블릿 출결화면/서버 인증 후속 큐, 다음 세션 시작 프롬프트를 포함했다.
- SQL Editor 작업 필요 없음: 문서 정리 작업이며 DB 스키마 변경은 없다.

## 2026-06-23 화목토 2개 반 학생 운영 반영

- 상태: 완료
- 사용자 요청: 노션에 있는 화목 4-7/토 10-1반과 화목 7-10/토 1-4반을 웹앱으로 가져오고, 수업일지는 사용자가 직접 만들 예정이므로 만들지 말라고 했다.
- 기준 정리: 조윤빈은 화목토가 아니라 월수금 4-7로 유지, 한주원은 화목토 뒷반으로 반영, 퇴원생은 제외했다. 박주원/박상원의 동일 학부모 번호는 사용자 확인 후 그대로 반영했다.
- 작업 내용: 운영 API `/api/classes`에서 `template_tt_sat_front`, `template_tt_sat_back` 두 클래스가 이미 활성 상태임을 확인했다. 운영 `/api/students/bulk`를 통해 신규 재원생 15명을 Supabase 학생 데이터에 반영했다.
- 반영 인원: `template_tt_sat_front` 7명(홍지은, 김해란, 문윤슬, 우솔아, 김민영, 이혜민, 박소정), `template_tt_sat_back` 8명(유준영, 정해연, 박주원, 박상원, 안찬호, 손호진, 한재승, 한주원).
- 검증: 운영 `/api/students` 재조회 기준 신규 15명 모두 `source:supabase`에서 확인했다. 앞반 7명, 뒷반 8명 반 배정 정상, 학생/학부모 전화번호 누락 0건, 조윤빈은 기존 `template_mwf_4_7` 유지 확인.
- 수업일지/lesson 생성 여부: 생성하지 않음. 사용자가 내일 직접 생성 예정.
- SQL Editor 작업 필요 없음: 기존 `students`와 `class_templates` 테이블 및 운영 API만 사용했고 DB 스키마 변경은 없다.

## 2026-06-22 실제발송 전환 후 추가 시나리오 검수

- 상태: 완료
- 사용자 요청: 오늘 실제 알림톡 발송 연결이 큰 변경이므로 시나리오를 충분히 돌린다.
- 검증 통과: `npm run build`, `npm run test:production` 106개 통과, `node --check api/routes/notifications.js`, `node --check api/server.js`, `node --check api/routes/coreData.js`.
- 운영 데이터 확인: `/api/integrations/status` 기준 `dryRun:false`, 학생/학부모 실제번호 허용 `true`, Solapi 설정 정상, 누락 환경변수 0건. `/api/students` 기준 활성 학생 12명, 학생/학부모 번호 누락 0건, 테스트 학부모 번호 잔존 0건.
- 알림톡 API 안전 호출: 운영 `/api/notifications/comment-alimtalk`를 학생/학부모 각각 `forceDryRun:true`, `forceTestRecipient:true`로 호출해 성공 응답을 확인했다. 두 호출 모두 `dryRun:true`, 테스트 수신자 redirect, 템플릿 변수 생성 정상으로 실제 학생/학부모 번호 발송 없이 검수했다.
- 추가 시나리오 결과: `node scripts/scenario-tests-day23.cjs`는 기존 미해결 3건/보류 1건을 다시 확인했다. `node scripts/scenario-tests-stability.cjs`는 기존 `window.alert/confirm` 잔존 기준에서 실패했다. 오늘 알림톡 실제발송 연결과 직접 관련된 실패는 아니다.
- 후속 권장: 내일 안정화 큐에 레거시 `alert/confirm` 제거, 학생 포털 타인 데이터 접근 가능성, 저장 실패 사용자 표시를 넣는다.
- SQL Editor 작업 필요 없음: 검수와 문서 기록만 수행했으며 DB 스키마 변경은 없다.

## 2026-06-22 오늘 작업 검수 및 다음 세션 handoff

- 상태: 완료
- 사용자 요청: 오늘 한 작업을 모두 검수/검토하고, 내일 작업할 내용을 정리하며, 다른 세션에서 AI가 자동 배포 가능한 일은 자동 배포할 수 있게 md 파일로 남긴다.
- 작업 내용: 오늘 커밋/운영 상태/알림톡 상태/학생 번호 데이터/프론트 asset 반영을 재확인하고 `docs/session-handoff-2026-06-22.md`를 작성했다. 새 세션 시작 프롬프트, 오늘 검수 결과, 내일 P0/P1/P2 작업 큐, SQL 필요 가능성, 자동 배포 원칙을 포함했다.
- 운영 확인: 알림톡 `dryRun:false`, 학생/학부모 실제번호 허용 `true`, 번호 누락 0건, 테스트 학부모 번호 잔존 0건, 프론트 최신 기능 asset 반영 확인.
- SQL Editor 작업 필요 없음: 문서 정리 작업이며 DB 스키마 변경은 없다.

## 2026-06-22 설정 화면 선생님 계정 변경

- 상태: 완료
- 사용자 요청: 설정에서 선생님 로그인 아이디와 비밀번호를 변경할 수 있게 한다. 비밀번호만 변경 가능한지도 확인한다.
- 확인 내용: 기존 선생님 계정은 코드 기본값 `teacher / 1234`로 고정되어 있었다. 비밀번호만 변경도 가능하지만, 운영 편의를 위해 설정 화면에서 아이디와 비밀번호를 함께 관리하도록 한다.
- 작업 내용: `teacherAccountSettings`를 추가해 기존 Supabase app_state 흐름으로 저장/로드되게 하고, 로그인 검증이 저장된 계정 설정을 보도록 변경했다. 설정 화면에 현재 비밀번호 확인, 아이디, 새 비밀번호, 새 비밀번호 확인 입력을 추가했다. 새 비밀번호를 비워두면 아이디만 변경된다.
- 검증: `npm run build` 통과, `npm run test:production` 106개 통과.
- SQL Editor 작업 필요 없음: 기존 app_state JSON 저장 흐름을 사용하며 DB 스키마 변경은 없다.

## 2026-06-22 모달 ESC 닫기 지원

- 상태: 완료
- 사용자 요청: 모달이 열렸을 때 ESC 키를 눌러 모달을 닫을 수 있게 한다.
- 작업 내용: 공통 `Modal` 컴포넌트에 `keydown` 이벤트 리스너를 추가해 `Escape` 입력 시 `onClose`를 호출하도록 했다.
- 검증: `npm run build` 통과, `npm run test:production` 105개 통과.
- SQL Editor 작업 필요 없음: 프론트 UI 동작 변경이며 DB 스키마 변경은 없다.

## 2026-06-22 노션 학생/학부모 번호 운영 반영

- 상태: 완료
- 사용자 요청: 노션에 등록된 현재 재원 12명의 학생 전화번호와 학부모 전화번호를 가져와 Academy OS 운영 데이터에 저장한다.
- 작업 내용: 노션 `학생 DB`의 현재 앱 활성 학생 12명 레코드를 이름 기준으로 매칭하고, `학생 전화번호`와 `모 전화번호` 값을 운영 `/api/students/bulk`를 통해 Supabase `students.student_phone`, `students.parent_phone`에 반영했다. `모 전화번호`가 있는 경우 학부모 번호로 사용했다.
- 검증: 운영 `/api/students` 재조회 기준 활성 학생 12명 모두 매칭, 학생/학부모 번호 누락 0건, 기존 테스트 학부모 번호 잔존 0건.
- SQL Editor 작업 필요 없음: 기존 학생 테이블과 운영 API를 사용했으며 DB 스키마 변경은 없다.

## 2026-06-22 알림톡 모달 즉시발송 단순화 및 학부모 실발송 연결

- 상태: 완료
- 사용자 요청: 학생 알림톡 모달에서는 예약/지연/알림톡 없음 버튼을 제거하고 즉시발송만 남긴다. 추천 변경안처럼 현재 수업 발송 계획은 읽기 전용으로 보여준다. 학부모 알림톡도 실제발송으로 연결한다.
- 작업 내용: 알림톡 모달의 발송 시각 선택 버튼 묶음을 제거하고 `현재 수업 발송 계획` 표시 영역으로 바꿨다. 모달 발송 버튼은 수동 `즉시 발송`만 수행한다.
- 학부모 실발송: 즉시발송 안전판을 학생 전용 기준이 아니라 현재 대상(학생/학부모)의 실제번호 허용값으로 판단하도록 수정했다. Render Blueprint의 `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS` 기본값을 `true`로 변경했다.
- 검증: `npm run build` 통과, `npm run test:production` 104개 통과.
- 운영 확인: 프론트 새 asset 반영은 확인했다. 운영 API `/api/integrations/status`는 `dryRun:false`, `allowRealStudentRecipients:true`, `allowRealParentRecipients:false`로 응답해 아직 학부모 실제번호 발송은 열리지 않았다. Render 대시보드 환경변수에서 `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true` 저장/재배포가 필요하다.
- SQL Editor 작업 필요 없음: UI와 환경 스위치 변경이며 DB 스키마 변경은 없다.

## 2026-06-22 수업별 알림톡 발송 계획 버튼

- 상태: 완료
- 사용자 요청: 발송 전 점검 박스에 기본 예약 시간을 흐린 글씨로 표시하고, `30분 지연`을 수업 전체에 일괄 적용하며, `알림톡 없음` 버튼으로 해당 수업일 알림톡 예약을 막는다. 기존 `테스트 발송`은 `즉시 발송`으로 바꿔 수동 발송에 사용한다.
- 작업 내용: 수업별 `lessonNotificationPlans` 상태를 추가해 Supabase app_state에 저장되도록 했다. 발송 전 점검 영역에 기본 예약 시간, 기본 예약, 30분 지연, 알림톡 없음 버튼을 추가했다. 알림톡 모달은 수업별 계획을 기본 선택값으로 사용한다.
- 예약 기준: 평일 기본 예약은 22:30, 토요일 기본 예약은 18:30으로 조정했다. `30분 지연` 선택 시 각 기본 시간에서 30분 뒤로 예약한다.
- 알림톡 없음: 모달에서 예약 발송 버튼을 비활성화하고 선택된 발송 시각을 `알림톡 없음`으로 표시한다. 즉시 발송은 수동 발송 용도로 별도 선택 가능하다.
- 검증: `npm run build` 통과, `npm run test:production` 104개 통과.
- SQL Editor 작업 필요 없음: app_state JSON과 기존 알림톡 발송 API를 사용하며 DB 스키마 변경은 없다.

## 2026-06-22 수업일지 행 자동저장

- 상태: 완료
- 사용자 요청: 한 행을 수정한 뒤 일일이 저장 버튼을 누르지 않아도 자동저장되게 한다.
- 작업 내용: 수업일지 행의 출결/교재/내용/과제상태/알림톡 문구 등 `lesson_student_records` 변경은 입력 후 1초 뒤 자동으로 `/api/lesson-records`에 저장되도록 했다. 같은 행을 계속 수정하면 이전 저장 예약은 취소되고 마지막 입력만 저장한다.
- UI 변경: 메인 수업일지 표의 `저장` 열과 행별 저장 버튼을 제거했다. 발송 전 점검 버튼은 유지한다.
- 안정장치: 이전 자동저장이 늦게 끝나도 더 최신 입력을 화면 상태에서 덮어쓰지 않도록 `updatedAt` 기준으로 화면 갱신을 제한했다.
- 검증: `npm run build` 통과, `npm run test:production` 103개 통과.
- SQL Editor 작업 필요 없음: 기존 `/api/lesson-records`와 `lesson_student_records` 컬럼을 사용하며 DB 스키마 변경은 없다.

## 2026-06-22 수업일지 발송 전 점검 버튼

- 상태: 완료
- 사용자 요청: 저장 상태 박스 대신 `발송 전 점검` 버튼만 두고, 버튼을 누르면 한 행의 필수 데이터가 비어 있는 학생 행만 노란색으로 표시한다. 알림톡 문구/강사 코멘트는 필수값에서 제외한다.
- 점검 기준: 출결 상태가 대기/비어 있음, 강의 교재 비어 있음, 강의 내용 비어 있음, 지난 숙제 비어 있음, 다음 숙제 비어 있음, 과제 상태 미선택.
- 작업 내용: 수업일지 상단 박스를 `발송 전 점검` 영역으로 바꾸고, 버튼 토글 시 누락 행에 `preSendMissing` 클래스를 붙여 노란색으로 강조한다.
- 검증: `npm run build` 통과, `npm run test:production` 102개 통과.
- SQL Editor 작업 필요 없음: UI 점검 로직과 CSS 변경만 있으며 DB 스키마 변경은 없다.

## 2026-06-22 학생 8명 실제 알림톡 발송 스위치 전환

- 상태: 완료
- 사용자 요청: 학생 전화번호가 있는 8명만 실제 학생용 알림톡 발송을 진행한다.
- 작업 내용: Render Blueprint `render.yaml`에서 `ALIMTALK_DRY_RUN=false`, `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=true`, `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`로 설정했다. 학부모/출결 계열 실제번호 발송은 계속 잠그고, 학생 코멘트/학생 일정 리마인더만 `studentPhone` 실제번호를 사용한다.
- 적용 방식: Render API 토큰/CLI 로그인은 현재 세션에 없으므로 대시보드 직접 변경은 불가하다. 대신 GitHub `main` push로 Render 자동 배포/Blueprint 반영 경로를 사용한다.
- 검증: `npm run build` 통과, `npm run test:production` 101개 통과. `render.yaml` 변경 후 `main`에 push했지만 운영 `/api/integrations/status`는 약 4분간 재확인해도 `dryRun=true`, `allowRealStudentRecipients=false`, `allowRealParentRecipients=false`로 유지됐다.
- 남은 조치: 현재 Render API 토큰/CLI 로그인이 없어 대시보드 환경변수를 직접 변경하지 못했다. Render 대시보드에서 `ALIMTALK_DRY_RUN=false`, `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=true`, `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`를 직접 저장해야 실제 발송이 열린다.
- SQL Editor 작업 필요 없음: 환경 스위치 변경이며 DB 스키마 변경은 없다.

## 2026-06-22 학생용 알림톡 실제번호 활성화 준비

- 상태: 완료
- 사용자 요청: 학생용 알림톡을 실제 학생에게 보내도록 활성화하고, 실제 학생 번호로 매칭한다.
- 현재 운영 상태 확인: `/api/integrations/status` 기준 `dryRun: true`, `allowRealRecipients: false`, `liveTestSendEnabled: true`, Solapi/API/PFID/학생 템플릿 설정은 준비됨. 따라서 현재는 실제 학생 번호로 발송되지 않는다.
- 학생 번호 매칭 확인: 운영 Supabase 학생 12명 중 학생 전화번호가 있는 학생은 8명, 학생 전화번호가 비어 있는 학생은 4명이다. 학생용 알림톡 payload는 `student.studentPhone`을 `studentPhone`으로 보내고, 학생 대상이면 이 번호를 수신번호로 사용한다.
- 작업 내용: 학생 실제번호 허용과 학부모 실제번호 허용을 분리했다. 새 환경변수 `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS`를 추가하고, 학생 코멘트/학생 일정 리마인더는 학생 허용값을, 출결/학부모 리포트/학부모 코멘트는 학부모 허용값을 보게 했다. 프론트 알림톡 모달과 알림관리 화면도 학생/학부모 실제번호 잠금을 따로 표시한다.
- 검증: `npm run build` 통과, `npm run test:production` 101개 통과, `node --check api/routes/notifications.js`, `node --check api/server.js` 통과.
- 사람이 해야 할 Render 환경변수 변경 예정: 학생 실제 발송 전 Render에서 `ALIMTALK_DRY_RUN=false`, `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=true`, `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`를 설정해야 한다. `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`를 유지하면 학부모 번호는 계속 잠긴다.
- SQL Editor 작업 필요 없음: 기존 학생 `studentPhone` 필드와 알림톡 환경변수만 사용하며 DB 스키마 변경은 없다.

## 2026-06-21 수업 일정 색상 저장/숙제보충 기존 색상 보정

- 상태: 완료
- 사용자 제보: 숙제보충 일정이 남색으로 바뀌지 않았고, 다른 수업 일정 색상을 바꿔도 저장되지 않는 것처럼 보인다.
- 원인 확인: 운영 프론트 asset에는 `homework_makeup` + `#172554` 코드가 반영되어 있어 배포 누락은 아니었다. 다만 운영 DB의 기존 숙제보충 lesson 2건은 여전히 `#7c3aed`로 저장되어 있었다. 또한 수업 수정 저장 시 빈/특수 템플릿 일정에서 `classTemplateId: "custom"`이 들어가면 Supabase `class_templates` FK에 걸려 저장 실패 후 로컬 상태만 바뀐 것처럼 보일 수 있었다.
- 작업 내용: 앱 로딩 시 기존 숙제보충 linked lesson 색상을 `#172554`로 보정하고 API로 다시 저장하도록 했다. 수업 등록/수정 payload는 실제 존재하는 class template일 때만 `classTemplateId`를 보내고, 직접 입력/보충/자동생성 일정은 빈 값으로 보내 DB에는 `null`로 저장되게 했다. 수업 수정 모달에 `직접 입력 일정` 옵션을 추가했다.
- 운영 데이터 보정: 운영 API로 기존 숙제보충 lesson 2건의 `color`를 `#172554`로 갱신했고 재조회로 확인했다.
- 검증: `npm run build` 통과, `npm run test:production` 100개 통과.
- SQL Editor 작업 필요 없음: 기존 `lessons.color`/`class_template_id` 컬럼을 사용하며 DB 스키마 변경은 없다.

## 2026-06-21 숙제보충 일정 색상 기본값 복원

- 상태: 완료
- 사용자 요청: 수업일지의 숙제보충 일정 색상을 이전의 어두운 색상 계열로 되돌린다.
- 작업 내용: 보충관리에서 `homework_makeup` 일정을 생성할 때 기본 캘린더 색상을 기존 `makeupLessonPill` 계열의 어두운 남색 `#172554`로 지정했다. 재시험은 빨강, 결석보강 등 다른 보충 일정은 기존 보라색을 유지한다.
- 검증: `npm run build` 통과, `npm run test:production` 98개 통과.
- SQL Editor 작업 필요 없음: 일정 생성 기본 색상과 회귀 테스트만 변경하며 DB 스키마 변경은 없다.

## 2026-06-21 오늘 작업 큐 분류 - UI/UX 안정화

- 상태: 대기
- 기준 문서: `docs/ui-ux-stabilization-plan-2026-06-21.md`, `docs/session-handoff-2026-06-21.md`
- 오늘 방향: 새 기능 추가보다 운영 흐름의 의미를 안정화한다. 같은 상태는 같은 색, 같은 버튼은 같은 의미, 저장/작성/예약/발송/삭제는 화면에서 분리해 보이게 한다.

### P0. 운영 리스크 검수

1. 배포 반영 확인
   - GitHub `main` 최신 커밋이 Vercel/Render에 반영됐는지 확인한다.
   - Render 백엔드에 알림톡 `compact is not defined` 수정 이후 코드가 반영됐는지 확인한다.
2. 알림톡 실제 흐름 QA
   - 학생/학부모 알림톡이 같은 상태 색상 규칙을 따르는지 확인한다.
   - 기본예약은 `예약 중`, 즉시 테스트는 `테스트 발송 기록됨`, 실패는 `발송 실패`로 분리되는지 확인한다.
   - 문구 수정 후 발송완료/실패 상태가 `작성됨 · 발송 전`으로 돌아가는지 확인한다.
   - 수업메모/보충메모/보충일정이 알림톡 초안에 중복 삽입되지 않는지 확인한다.

#### P0 확인 결과 - 2026-06-21

- 프론트 배포 확인: `https://academy-os-blue.vercel.app` 응답 200, `Academy OS` 타이틀과 Vite asset `/assets/index-DuvxH6sp.js` 로딩 확인.
- 프론트 최신 흐름 확인: 운영 asset에 `저장 및 수업일지 반영`, `예약 중`, `테스트 발송 기록됨` 문구가 포함되어 있어 최근 보충관리/알림톡 상태 변경이 반영된 것으로 확인.
- 백엔드 배포 확인: `https://koh-you-math-academy-os-api.onrender.com/health` 응답 200, `/api/integrations/status` 응답 정상.
- 알림톡 안전 상태: 운영 API 기준 `dryRun: true`, `allowRealRecipients: false`, `solapiConfigured: true`, `studentComment/dailyReport/attendance` 템플릿 설정 정상.
- 알림톡 오류 재발 확인: `/api/notifications/comment-alimtalk`를 `forceDryRun: true`, `forceTestRecipient: true`로 호출해 성공 응답을 받았다. `compact is not defined` 오류는 재발하지 않았다.
- 검증: `npm run test:production` 96개 통과.
- SQL Editor 작업 필요 없음: 운영 확인과 dry-run 호출만 진행했으며 DB 스키마 변경은 없다.

### P1. 오늘 구현 우선 후보

1. 상태 색상 시스템 정리
   - 알림톡 상태 색상 기준을 상수화한다.
   - 학생/학부모 알림톡 버튼이 같은 함수와 같은 CSS class를 쓰게 한다.
   - 보충관리, 수업일지의 저장/완료/실패 색상도 같은 계열로 맞춘다.
   - 진행 상태: 완료. 공통 CSS 상태 토큰을 만들고, 알림톡/수업일지/알림관리/보충관리/자동수업 후보의 핵심 상태 클래스가 같은 색상 의미를 공유하도록 정리했다.
   - 작업 결과: `neutral`, `info`, `pending`, `success`, `danger`, `destructive` 토큰을 추가했다. 미작성/미확정은 회색, 작성됨/저장 중/반영 완료는 파랑, 예약 중/변경됨/재반영 필요는 주황, 완료/통과는 초록, 실패는 빨강, 삭제/위험 동작은 별도 destructive 빨강으로 맞췄다.
   - 검증: `npm run build` 통과, `npm run test:production` 96개 통과.
   - SQL Editor 작업 필요 없음: CSS 상태 토큰과 화면 색상 클래스만 정리했으며 DB 스키마 변경은 없다.
2. 버튼 역할과 문구 정리
   - `저장`, `저장 및 반영`, `알림톡 작성`, `예약`, `테스트 발송`, `삭제`, `취소 처리`, `자동생성 제외`의 의미를 화면별로 맞춘다.
   - 보충관리 통합 버튼 문구는 `저장하고 일정 반영` 계열로 더 쉬운지 검토한다.
   - 진행 상태: 완료. 데이터 흐름은 유지하고 보충관리, 수업 취소/삭제, 자동생성 후보, 수업메모 알림톡 포함 안내 문구를 먼저 정리했다.
   - 작업 결과: 보충관리 저장 버튼을 `저장하고 일정 반영`/`수정 저장하고 일정 반영`/`내용만 저장`으로 바꾸고, 보충 완료/복귀 문구를 `보충 완료 처리`/`보충관리로 복귀`로 정리했다. 실제 7일 보관 흐름인 수업 삭제 버튼은 `수업 취소 처리`로 맞췄고, 자동수업 후보의 `삭제로 건너뜀`/`보호 해제`/`제외 해제`는 `자동생성 제외됨`/`수동수정 보호 해제`/`자동생성 제외 해제`로 명확히 바꿨다. 수업메모 체크박스는 `알림톡 초안에 포함` 기준으로 정리했다.
   - 검증: `npm run build` 통과, `npm run test:production` 96개 통과.
   - SQL Editor 작업 필요 없음: 화면 문구와 시나리오 테스트 기대값만 변경했으며 DB 스키마 변경은 없다.
3. 보충관리 통합 저장 QA
   - 보충할 숙제 내역, 보충 메모, 보충 방식, 배정일/시간 수정 후 알림톡 초안과 수업일지 보충수업이 함께 갱신되는지 확인한다.
   - 새로고침 후 `makeup_tasks`와 `lessons` 데이터가 유지되는지 확인한다.
4. 수업메모/직전 메모 QA
   - 6월 19일 수업메모가 6월 22일 직전 수업메모로 보이는지 확인한다.
   - 수업메모 저장 여부와 알림톡 반영 여부가 화면에서 분리되어 보이는지 확인한다.

### 2026-06-21 P1. 수업일지 수업색상 변경 미반영 수정

- 상태: 완료
- 사용자 보고: 수업일지에서 수업색상을 바꿨는데 달력 표시 색상이 바뀌지 않는 것 같다.
- 원인: 수업 수정 모달은 `color` 값을 저장하고 달력 pill도 `lesson.color`를 inline background로 넘기고 있었지만, 보강/직전수업/일요보강 pill CSS에 `background: ... !important`가 있어 사용자가 고른 색상을 덮어썼다.
- 작업 결과: 특수 수업 pill의 고정 background override를 제거했다. 수업 유형 구분은 기존처럼 왼쪽 border 색상으로 남기고, 실제 배경색은 저장된 `lesson.color`가 보이도록 했다.
- 회귀 테스트: 특수 수업 pill이 사용자 선택 색상을 유지하는지 확인하는 운영 시나리오 테스트를 추가했다.
- 검증: `npm run build` 통과, `npm run test:production` 97개 통과.
- SQL Editor 작업 필요 없음: CSS 표시와 회귀 테스트만 변경했으며 DB 스키마 변경은 없다.

### P2. 안정화 후속 후보

1. 시험관리/일요시험보강 표시 안정화
   - 실제 `lessons`에 저장된 일요시험보강과 화면용 가상 블록을 상세 모달에서 구분한다.
   - 학교별 블록 이동/삭제 후 새로고침해도 `app_state.generatedLessonControls.sundayMakeupBlocks` 저장이 유지되는지 확인한다.
   - 실제 Supabase `lessons`에 학교별 블록이 중복 저장되지 않는지 확인한다.
2. 목록/표/모달 간격 정리
   - 시험정보 탭, 보충관리 목록, 최근 한 달 보충내역, 수업일지 학생별 상세, 알림톡 상태 열, 학사일정 캘린더 pill을 점검한다.
   - 운영툴답게 비교 가능한 촘촘한 밀도와 입력칸 가독성을 우선한다.
3. 삭제/복구 UX 문구 정리
   - DB 행 제거는 `삭제`, 일정 기간 보관은 `취소 처리`, 자동 후보 숨김은 `자동생성 제외`, 완료 되돌리기는 `보충관리로 복귀`, 중복 제거는 `중복 삭제`로 분리한다.
   - 확인 문구에는 실제 DB 삭제 여부와 되돌릴 수 있는지 여부를 적는다.
4. 운영 체크리스트 문서화
   - 수업일지 저장, 알림톡 예약/테스트/실패, 보충관리 통과/복귀, 시험관리 행 삭제/일요보강 연동, SQL Editor 필요 여부를 체크리스트로 정리한다.

### 오늘의 권장 진행 순서

1. P0 배포/알림톡 QA를 먼저 확인한다.
2. 문제가 재발하면 해당 버그를 최우선 수정한다.
3. 재발이 없으면 P1-1 `상태 색상 시스템 정리`부터 구현한다.
4. 구현 후 `npm run build`를 실행한다.
5. 알림톡/보충관리/수업일지 운영 흐름을 건드리면 `npm run test:production`도 실행한다.
6. 완료 결과와 SQL Editor 필요 여부를 이 문서에 다시 기록한다.

## 2026-06-20 P1. 보충관리 저장/알림톡/수업일지 반영 통합

- 상태: 완료
- 사용자 요청: `알림톡 문구 작성`과 `수업일지 수정 반영`을 합쳐, 모달 수정 후 저장하면 같은 내용이 알림톡 초안과 수업일지 일정에 함께 반영되게 한다.
- 작업 결과: 보충관리 상세 모달의 두 버튼을 `저장 및 수업일지 반영` 계열 단일 버튼으로 통합했다. 버튼을 누르면 최신 보충할 숙제 내역, 보충 메모, 보충 방식, 배정일/시간으로 알림톡 초안을 갱신하고, 배정일/시간이 있으면 같은 최신 데이터로 수업일지 캘린더 보충수업도 생성/수정한다.
- 추가 보강: 기존 알림톡 초안 생성에 빠져 있던 `보충 메모`도 초안 문구에 포함되도록 했다.
- 검증: `npm run build` 통과, `npm run test:production` 96개 통과.
- SQL Editor 작업 필요 없음: 기존 `makeup_tasks`와 `lessons` 저장 흐름만 사용하며 DB 스키마 변경은 없다.

## 2026-06-20 P1. 보충관리 상세 입력 필드 가독성 개선

- 상태: 완료
- 사용자 요청: 보충할 숙제 내역, 보충 메모, 보충 방식, 배정일, 알림톡 문구의 가독성을 높인다.
- 작업 결과: 보충관리 상세 모달의 핵심 필드를 읽기 쉬운 섹션 카드로 분리했다. 숙제 내역/보충 메모는 줄간격과 입력 높이를 키웠고, 보충 방식과 배정일/시간은 별도 일정 패널로 묶었다. 알림톡 문구 초안은 더 큰 입력 영역으로 바꿔 긴 문구를 확인하기 쉽게 했다.
- 검증: `npm run build` 통과, `npm run test:production` 94개 통과.
- SQL Editor 작업 필요 없음: UI 구조와 CSS만 수정했다.

## 2026-06-20 P1. 알림톡 기본예약 상태 표시 우선순위 수정

- 상태: 완료
- 사용자 보고: 학부모 알림톡에서 `기본 예약`을 눌렀는데 `테스트 발송 기록됨` 초록색으로 표시된다.
- 원인: 발송 결과 상태를 만들 때 `dryRun` 여부를 예약 여부보다 먼저 판단했다. Render가 테스트 보호 상태이면 기본예약도 dry-run 응답을 받기 때문에 예약 상태가 아니라 테스트 발송 기록으로 표시됐다.
- 작업 결과: 예약 시간이 있는 알림톡은 dry-run 여부와 무관하게 `예약 중 · 시간` 상태를 유지한다. 즉시 테스트 발송일 때만 `테스트 발송 기록됨`으로 표시된다.
- 검증: `npm run build` 통과, `npm run test:production` 93개 통과.
- SQL Editor 작업 필요 없음: 프론트 상태 표시 로직만 수정했다.

## 2026-06-20 P1. 수업메모 알림톡 중복 삽입 방지

- 상태: 완료
- 사용자 보고: 수업메모를 알림톡에 반영하면 같은 수업메모/보충일정이 4번 중복되어 들어간다.
- 데이터 흐름 확인: 수업메모 자체가 Supabase에 4개 저장되는 문제가 아니라, 알림톡 작성 모달을 열 때 `수업메모 + 보충일정 + 기존 알림톡 문구`를 매번 다시 합치면서 기존 문구 안에 이미 포함된 수업메모/보충일정을 또 붙이는 프론트 초안 생성 문제였다.
- 작업 결과: 알림톡 초안 생성 시 기존 문구에 같은 수업메모나 보충일정이 이미 있으면 다시 붙이지 않는다. 기존에 같은 블록이 여러 번 쌓인 문구는 모달을 다시 열 때 중복 블록을 한 번으로 정리한다.
- 검증: `npm run build` 통과, `npm run test:production` 92개 통과.
- SQL Editor 작업 필요 없음: 기존 알림톡 문구 생성 로직만 수정했으며 DB 스키마 변경은 없다.

## 2026-06-20 P1. 학부모/학생 알림톡 색상 상태 일치

- 상태: 완료
- 사용자 요청: 학부모 알림톡도 학생 알림톡과 같은 색상 표시 규칙을 따르게 한다.
- 작업 결과: 학부모/학생 알림톡 문구를 수정하면 기존 발송 성공/실패 상태를 초기화한다. 따라서 이미 발송했던 알림톡을 다시 수정하면 두 버튼 모두 `작성됨 · 발송 전` 파란색으로 돌아가고, 이후 발송 성공은 초록색, 실패는 빨간색 규칙을 동일하게 적용한다.
- 검증: `npm run build` 통과, `npm run test:production` 91개 통과.
- SQL Editor 작업 필요 없음: 기존 발송 상태 컬럼을 그대로 사용하며 DB 스키마 변경은 없다.

## 2026-06-20 P1. 알림톡 발송 오류 복구 및 상태 색상 분리

- 상태: 완료
- 사용자 보고: 알림톡 테스트 발송이 `compact is not defined` 오류로 실패했다. 또한 `저장 완료`와 `알림톡 작성됨`이 모두 초록색이라 상태 구분이 어렵다.
- 원인: `api/routes/notifications.js`의 코멘트 알림톡 발송 경로에서 존재하지 않는 `compact()` 헬퍼를 호출했다. 이 때문에 수업 알림톡 발송 API가 본문 override 처리 단계에서 실패했다.
- 작업 결과: 코멘트 알림톡 본문 override는 기존 `normalizeText()`로 정리하도록 수정했다. 수업일지 알림톡 버튼은 `작성됨 · 발송 전` 파란색, `발송/예약 중` 주황색, `발송 완료/테스트 기록됨` 초록색, `발송 실패` 빨간색으로 구분했다. 발송 성공/실패 상태는 `lesson_student_records`에도 저장해 새로고침 후 상태가 유지되도록 보강했다.
- 검증: `npm run build` 통과, `npm run test:production` 91개 통과, `node --check api/routes/notifications.js`, `node --check api/server.js` 통과, `sendLessonCommentAlimtalk` dry-run 직접 호출 통과.
- SQL Editor 작업 필요 없음: 기존 `teacher_comment_send_status`, `student_comment_send_status` 컬럼을 사용하며 DB 스키마 변경은 없다.

## 2026-06-20 P1. 직전 수업메모 좌측 읽기 영역 확대

- 상태: 완료
- 사용자 요청: 수업메모 모달 좌측열의 직전 수업메모 표시 영역을 더 크게 보이게 한다.
- 작업 결과: 수업메모 모달의 좌측 직전 메모 열 비율을 넓히고, 직전 메모 카드와 실제 메모 텍스트 영역에 최소 높이를 부여해 긴 메모를 더 편하게 읽을 수 있게 했다.
- 검증: `npm run build` 통과, `npm run test:production` 89개 통과.
- SQL Editor 작업 필요 없음: CSS 레이아웃만 수정했다.

## 2026-06-20 P1. 6월 22일 직전 수업메모 표시 보강

- 상태: 완료
- 사용자 보고: 6월 19일 김룡기 수업메모를 남겼지만 6월 22일 수업메모 모달에 직전 메모로 나타나지 않았다.
- 확인 결과: 운영 API 기준 김룡기 6월 19일 수업메모는 Supabase `lesson_student_records.preparation_memo`에 저장되어 있었다. 따라서 저장 실패가 아니라 6월 22일 화면에서 직전 기록을 찾는 프론트 연결 로직 문제로 판단했다.
- 원인 보강: 수업메모/알림톡 모달의 현재 기록 조회를 `studentId`만으로 찾던 부분을 `lessonStudentRecordId` 기준으로 고정했다. 또한 직전 수업 명단/수업 연결이 어긋나도 같은 학생의 이전 저장 메모를 날짜순으로 fallback 검색해 보여주도록 했다.
- 검증: `npm run build` 통과, `npm run test:production` 88개 통과.
- SQL Editor 작업 필요 없음: 기존 `preparation_memo` 저장 컬럼과 API 데이터를 그대로 사용하며 DB 스키마 변경은 없다.

## 2026-06-20 P1. 수업메모 저장 완료 중복 문구 제거

- 상태: 완료
- 사용자 요청: 수업메모 모달 저장 버튼 옆에 `저장 완료` 안내문구가 중복되므로 버튼만 남긴다.
- 작업 결과: 수업메모 모달의 저장 바에서 버튼 왼쪽 상태 텍스트를 제거했다. 수업일지 행의 저장 상태 표시는 그대로 유지한다.
- 검증: `npm run build` 통과, `npm run test:production` 86개 통과.
- SQL Editor 작업 필요 없음: 화면 표시만 수정했다.

## 2026-06-20 P1. 일요시험보강 블록 저장 상태 및 버튼 정리

- 상태: 완료
- 사용자 요청: 일요시험보강 블록 메모를 작성했을 때 저장 여부를 알기 어렵고, 버튼별 색/크기가 달라 조잡해 보인다. 해당 데이터가 로컬이 아니라 Supabase에 안전하게 저장되는지도 확인한다.
- 저장 흐름 확인: 일요시험보강 학교별 블록 메모/날짜/시간은 `generatedLessonControls.sundayMakeupBlocks`에 저장되고, `sharedAppState` 변경 감지 후 `/api/app-state`를 통해 Supabase `app_state`에 저장된다. 로컬 전용 데이터가 아니다.
- 작업 결과: 블록을 수정/삭제하면 하단 저장 바에 `변경됨 · 블록 저장 필요`가 표시된다. `블록 저장`을 누르면 `저장됨 · Supabase 자동 반영` 상태가 보인다. 자동값 복구/블록 저장은 하단 저장 바에 모으고, 일정 수정/일정 삭제는 상단 일정 관리 버튼으로 분리했다. 일요보강 모달 내부 버튼 높이/라운드/간격을 통일했다.
- 검증: `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 86개 통과.
- SQL Editor 작업 필요 없음: 기존 Supabase `app_state` 저장 구조를 사용한다.

## 2026-06-20 P1. 직전 수업메모 2열 표시 및 학생 알림톡 포함값 저장

- 상태: 완료
- 사용자 요청: 수업메모가 길어질 수 있으므로 강의교재/강의내용처럼 placeholder로 넣지 말고, 수업메모 모달을 2열로 나눠 직전 수업메모를 보여준다. 다음 수업시간에 직전 수업메모가 있으면 수업메모 버튼 색을 다르게 표시한다. 학생 알림톡 포함 여부도 DB에 안전하게 저장한다.
- 작업 결과: 수업일지 학생별 `수업메모` 버튼에서 직전 수업메모가 있으면 주황 계열로 표시하고 `직전 메모 있음` 안내를 붙였다. 수업메모 모달은 왼쪽 `직전 수업메모`, 오른쪽 `오늘 강사용 메모` 2열 구조로 바뀌었다. 직전 메모는 읽기 전용이며 오늘 메모와 섞이지 않는다.
- 저장 보강: `lesson_student_records.prep_student_visible` 컬럼을 추가하는 SQL을 만들고, API 저장/읽기 매핑에 `prepStudentVisible`을 연결했다. 이제 `학생 알림톡에 포함` 체크도 Supabase에 저장된다.
- SQL Editor 작업 필요: Supabase SQL Editor에서 `supabase/20260620_lesson_prep_student_visible.sql`을 실행해야 한다. 이미 기존 migration을 다시 실행하는 대신 이 파일 하나만 실행하면 된다. 실행 후 학생별 수업메모 저장을 다시 테스트한다.
- 검증: `node --check api/routes/coreData.js` 통과, `node --check scripts/scenario-tests-production.cjs` 통과, `npm run build` 통과, `npm run test:production` 85개 통과.

## 2026-06-20 P1. 수업일지 단축키 안내 표시 제거

- 상태: 완료
- 사용자 요청: 수업일지 상단에 보이는 `↑↓←→ · Enter · Del · Ctrl+C/V/Z` 안내 표시를 삭제한다.
- 작업 결과: 수업일지/캘린더 상단의 키보드 단축키 안내 문구를 제거했다. 수업 상세에서 제목처럼 쓰이는 일반 텍스트는 유지했다.
- 검증: `npm run build` 통과, `npm run test:production` 83개 통과.
- SQL Editor 작업 필요 없음: 화면 표시 문구와 회귀 테스트만 수정했다.

## 2026-06-20 P1. 일요시험보강 상세 모달 블록 표시 보정

- 상태: 완료
- 사용자 보고: 일요시험보강을 보면 6월 20일과 6월 21일에 여전히 창동고를 포함한 모든 학교가 포함되어 보인다.
- 원인: 달력 pill 라벨은 날짜별 남은 블록 기준으로 보정했지만, 일요시험보강 상세 모달은 원본 lesson의 전체 `sundayMakeupBlocks`를 그대로 렌더링했다. 그래서 이동된 가상 블록을 열어도 원본 전체 학교가 함께 보였다.
- 작업 결과: 이동된 가상 블록을 열면 해당 블록 1개만 표시하고, 원본 일요보강을 열면 원본 날짜에 남아 있는 블록만 표시하도록 상세 모달 렌더링을 분리했다. 저장 데이터는 전체 블록 배열을 유지하므로 숨겨진 다른 날짜 블록이 사라지지 않는다.
- 검증: `npm run build` 통과, `npm run test:production` 82개 통과.
- SQL Editor 작업 필요 없음: 기존 `app_state.generatedLessonControls.sundayMakeupBlocks` 표시 로직만 수정했다.

## 2026-06-20 P1. 수업 수정 모달 고3 학생 누락 수정

- 상태: 완료
- 사용자 요청: 고3 학생들을 추가했는데 수업 수정 모달의 포함 학생 명단에 보이지 않는다.
- 원인: 학생 검색/전체 카운트에는 고3 학생이 포함됐지만, 렌더링 그룹 목록이 `고1`, `고2`, `중1`, `중2`, `중3`으로 하드코딩되어 `고3` 그룹이 화면에 나오지 않았다.
- 작업 결과: 수업 등록/수정 모달의 학년 그룹 순서를 `고3`, `고2`, `고1`, `중3`, `중2`, `중1`로 정리하고, 이 목록에 없는 학년값도 별도 그룹으로 표시되게 했다.
- 검증: `npm run build` 통과, `npm run test:production` 81개 통과.
- SQL Editor 작업 필요 없음: 프론트엔드 렌더링 로직만 수정했다.

## 2026-06-20 P1. 시험관리 시험정보 조회 표 간격 축소

- 상태: 완료
- 사용자 요청: 시험관리 `시험정보` 탭에서 열간 간격이 너무 멀어 조회가 불편하다.
- 작업 결과: 일반 조회 행의 grid 폭과 gap을 줄였다. 수정 행은 입력칸이 부족하지 않도록 기존 넓은 grid를 별도로 유지한다.
- 검증: `npm run build` 통과, `npm run test:production` 80개 통과.
- SQL Editor 작업 필요 없음: CSS와 회귀 테스트만 수정했다.

## 2026-06-20 P1. 일요시험보강 이동 블록 원위치 표시 보정

- 상태: 완료
- 사용자 요청: 창동고 블록을 6월 20일 토요일로 빼내면 토요일에는 창동고만 있어야 하고, 6월 21일 일요일 원래 일요보강 자리에는 창동고를 제외한 나머지만 보여야 한다.
- 작업 결과: 일요시험보강 원본 pill은 `sundayMakeupBlocks` override 기준으로 원래 날짜에 남아 있는 블록만 표시한다. 원래 날짜에 남은 블록이 0개이면 빈 원본 pill을 숨긴다. 날짜가 달라진 블록은 기존처럼 해당 날짜에 가상 lesson으로 단독 표시된다.
- 검증: `npm run build` 통과, `npm run test:production` 80개 통과.
- SQL Editor 작업 필요 없음: 기존 `app_state.generatedLessonControls.sundayMakeupBlocks` 표시 로직만 보정했다.

## 2026-06-20 P1. 일요시험보강 내부 블록 삭제

- 상태: 완료
- 사용자 요청: 일요보강 내부에서 특정 학교 블록만 삭제하고 싶다. 예: 7월 5일 일요보강에서는 정의여고만 남기고 다른 학교 블록은 삭제해야 한다.
- 작업 결과: 일요시험보강 상세 모달의 학교별 블록마다 `블록 삭제` 버튼을 추가했다. 삭제 후 `블록 저장`을 누르면 기존 `generatedLessonControls.sundayMakeupBlocks` override에 남은 블록만 저장된다. 마지막 1개 블록은 전체 일정 삭제와 구분하기 위해 삭제를 막고 안내 문구를 표시한다.
- 화면 표시: 같은 날짜의 원본 일요시험보강 pill도 저장된 블록 override를 기준으로 남은 학교명만 표시하도록 조정했다. 날짜가 다른 블록만 별도 가상 일정으로 파생되는 기존 흐름은 유지했다.
- 검증: `npm run build` 통과, `npm run test:production` 79개 통과.
- SQL Editor 작업 필요 없음: 기존 `app_state` JSON 저장 구조를 사용하므로 새 Supabase 컬럼/테이블/정책 변경이 없다.

이 문서는 새 Codex 세션이 가장 먼저 읽는 현재 작업 인수인계 문서입니다.
작업은 항상 `작업 큐 정리 -> 구현 -> 검수 -> 문서 갱신` 순서로 진행합니다.

## 현재 배포 상태

- GitHub: https://github.com/koh-you/academy-os
- Frontend: https://academy-os-blue.vercel.app
- Backend API: https://koh-you-math-academy-os-api.onrender.com
- Main branch: `main`
- 로컬 기준 폴더: `C:\Users\force\Desktop\academy-os`

## 작업 원칙

1. 구현 전에 이 문서의 작업 큐를 먼저 갱신한다.
2. 한 번에 하나의 우선 작업만 진행한다.
3. 기존 화면 흐름을 직접 확인하고, 불필요한 대규모 리팩터링은 피한다.
4. UI 문구는 기본적으로 한국어로 작성한다.
5. 학원명 표시 원칙은 `으뜸수학 고태영T`이다.
6. API 키, Solapi 키, Supabase 키, Render/Vercel 환경변수는 Git에 올리지 않는다.
7. `.env`, PDF, HWPX, HWP, ZIP, 대용량 원본 자료는 로컬 또는 별도 스토리지로 관리한다.
8. 동작 변경 후에는 최소 `npm run build`를 실행한다.
9. 시나리오 검수 로그는 PowerShell 한글 깨짐을 줄이기 위해 테스트 이름을 ASCII로 둔다.
10. Supabase SQL migration이 필요한 작업은 사용자에게 별도로 알리고, 적용해야 할 SQL 파일명과 순서를 이 문서에 반드시 남긴다. 자동 배포는 GitHub main push 기준이지만 SQL Editor 적용은 사용자가 수동으로 진행해야 하므로, 완료 후 운영 API로 적용 여부를 확인한다.

## 현재 핵심 작업

### 다음 세션 인수인계 프롬프트

새 대화세션에서는 아래 문장으로 시작하면 된다.

```text
이 프로젝트는 academy-os입니다.
먼저 AGENTS.md, docs/current-worklog.md, docs/home-codex-setup.md를 읽고 현재 작업 큐를 확인해주세요.

작업 방식:
1. 구현 전에 docs/current-worklog.md의 작업 큐를 갱신합니다.
2. 한 번에 하나의 작업만 진행합니다.
3. 구현 후 npm run build로 확인합니다.
4. 운영 흐름에 영향을 주는 변경이면 npm run test:production도 실행합니다.
5. 완료한 내용과 남은 작업을 docs/current-worklog.md에 반영합니다.
6. 필요한 경우 GitHub main에 commit/push합니다.

현재 상태:
- 2026-06-20 작업분은 main에 push되어 있습니다.
- 마지막 검수는 npm run build 통과, npm run test:production 60개 통과입니다.
- 학원명 표시는 으뜸수학 고태영T입니다.
- koh_you_math는 내부 식별자/URL/환경변수에만 남길 수 있습니다.
- Supabase SQL migration이 필요한 작업은 반드시 사용자에게 SQL Editor 수동 적용 파일과 순서를 안내하고, worklog에도 남깁니다.

내일 우선순위:
1. 실제 배포 환경에서 수업메모 저장이 Supabase에 남는지 확인합니다. 저장 실패가 뜨면 Supabase SQL Editor에서 supabase/20260617_lesson_prep_resources_notifications.sql migration이 적용됐는지 확인합니다.
2. 학사일정 -> 시험관리 -> 수업일지 직전수업 자동 생성 흐름을 실제 데이터로 end-to-end 점검합니다.
3. 보충관리 숙제보충 후보가 6월 19일 기준 실제 미완료/일부완료 지난 숙제만 남는지 재확인합니다.
4. 알림톡 작성 화면에서 원본 메모 -> AI 수정 -> 최종 문구 -> preview -> 예약/테스트 발송까지 문구 중복이 없는지 확인합니다.
```

### 2026-06-20 P1. 학사일정/알림톡/보충 슬랙 정리

- 상태: 완료
- 사용자 요청: 현재 기간은 `1학기 기말고사`이며 학사일정과 시험관리가 기말고사 기준으로 연동되어야 한다. 학사일정에서 내신기간과 수학시험일정을 함께 입력하면 학사일정에 수동 일정과 시험관리 연동 일정이 2개 표시되는 중복을 제거해야 한다. 수업메모는 강사용 기록으로 두고, 학생/학부모 알림톡에는 수업메모·보충일정·강사코멘트가 최종 코멘트 문장 안에 정리되어 나가야 한다. 보충일정은 매일 오전 10시에 강사 슬랙으로 요약 알림이 와야 한다.
- 이번 작업 결과: 현재 고사 기본값을 `2026-1-final`로 변경하고, 앱 시작 시 월수금 7-10반 기준 기말고사 시험관리 행을 자동 보장하도록 했다. 학사일정 모달의 시험기간/수학시험 입력은 `schoolEvents` 수동 이벤트로 남기지 않고 시험관리 행만 갱신하며, 학사일정 화면은 시험관리 파생 일정만 표시한다. 기존 로컬에 남아 있던 수동 시험 이벤트도 화면 표시에서 제외해 중복 pill이 사라지게 했다.
- 알림톡 변경: 학생/학부모 알림톡 작성 화면을 열면 수업메모, 보충일정, 기존 강사코멘트를 하나의 최종 초안으로 합친다. 단, `수업메모`는 발송 미리보기/서버 payload에서 별도 항목으로 만들지 않고 최종 코멘트 문장 안에만 들어가도록 정리했다.
- 슬랙 변경: 백엔드에 `POST /api/notifications/slack-today-schedule`을 추가해 당일 보충/재시험 수업을 슬랙으로 요약한다. `npm run slack:daily-schedule` 스크립트와 Render cron `0 1 * * *`(KST 10:00)을 추가했다.
- DB 주의: 운영 Supabase에는 `supabase/20260620_lesson_schedule_metadata.sql` migration 적용이 필요하다. 이 migration은 lessons에 `lesson_type`, `lesson_topic`, `source_makeup_task_id`, `source_school_event_id`, `source_label`을 추가해 보충/직전수업 메타데이터를 저장한다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 내신기간 기본 프리셋 반영

- 상태: 완료
- 사용자 입력: 1학기 중간고사는 4월 말~5월 초, 1학기 기말고사는 6월 말~7월 초, 2학기 중간고사는 9월 말~10월 초, 2학기 기말고사는 12월 중~말을 기본 내신기간으로 본다.
- 이번 작업 결과: 고사 구분별 기본 내신기간을 프리셋으로 추가했다. `2026-1-mid`는 `2026-04-27 ~ 2026-05-08`, `2026-1-final`은 `2026-06-29 ~ 2026-07-03`, `2026-2-mid`는 `2026-09-28 ~ 2026-10-02`, `2026-2-final`은 `2026-12-14 ~ 2026-12-24`를 기본값으로 사용한다. 시험관리 신규 행과 빈 시험기간 행에는 기본값을 채우고, 학사일정 시험기간 모달에서도 시험 구분을 고르면 시작/종료일이 자동 세팅된다. 학교별 실제 확정일은 기존 날짜 입력으로 수정 가능하다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충관리 숙제 후보 기준 축소

- 상태: 완료
- 사용자 요청: 6월 17일 배정 후 19일 검사한 숙제가 모두 보충관리 목록에 올라온다. 검사 결과가 `미완료`, `80%`, `50%`, `미검사`인 숙제만 보충관리 목록에 올라와야 한다.
- 이번 작업 결과: 수업일지 과제상태를 숙제 상태로 동기화할 때 `80%`, `50%`만 `partial`로 보고, `아는 것만 풂`, `난이도 높음`, `풀이 재확인`은 보충관리 후보에서 제외되도록 했다. 보충관리 후보 판정도 `not_done`, `partial_80`, `partial_50`, `not_checked` 네 가지로 제한했다. 목록 표시 사유에 `미검사 숙제`도 따로 표시한다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충 통과 처리와 최근 한 달 내역 모달

- 상태: 완료
- 사용자 요청: 보충관리 상단의 `n개 진행` 표시는 의미가 없으므로 버튼으로 바꾸고, 실제로 보충을 해서 통과된 내역이나 50%/80% 중 학원에서 해결한 숙제를 `보충 통과`로 체크할 수 있어야 한다. 상단에서는 지난 한 달 보충관리 내역을 팝업 모달로 보고, 학생별 검색 같은 편의기능이 필요하다.
- 이번 작업 결과: 보충관리 상단 배지를 `최근 한 달 보충 내역` 버튼으로 바꿨고, 버튼 클릭 시 최근 30일 보충관리 내역 모달을 연다. 모달에는 학생/학교/학년/보충유형/원본 항목/상태를 표시하고 학생명·학교·항목명 검색을 지원한다. 보충 후보 행과 학생별 보충 상세 모달에 `보충 통과` 버튼을 추가했다. 숙제보충 통과 처리 시 해당 보충 task는 `done`으로 남기고 원본 숙제도 `verified`로 갱신해 다시 후보 목록에 뜨지 않게 했다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충 통과 취소

- 상태: 완료
- 사용자 요청: 최근 한 달 보충내역에서 실수로 `보충 통과`를 누른 학생을 다시 보충관리로 가지고 올 수 있어야 한다.
- 이번 작업 결과: 최근 한 달 보충관리 내역 모달의 완료 항목에 `통과 취소` 버튼을 추가했다. 취소하면 보충 task의 `done` 상태와 완료 시각을 해제하고, 일정이 있으면 `scheduled`, 없으면 `draft`로 되돌린다. 숙제보충 항목은 원본 숙제의 `verified` 상태도 다시 `missing` 또는 `partial`로 되돌려 보충관리 후보 목록에 재등장하도록 했다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 운영 데이터 Supabase 전환 1차 - 보충관리

- 상태: 완료
- 사용자 요청: 운영 데이터가 localStorage와 Supabase에 섞여 있어 반복 오류가 나므로 운영 데이터는 순서대로 모두 Supabase로 옮긴다.
- 이번 작업 결과: 보충관리 `makeupTasks`를 Supabase `makeup_tasks` 테이블로 읽고 쓰는 API를 추가했다. 앱 시작 시 Supabase 보충 task를 불러오고, 서버가 비어 있고 브라우저에 기존 보충 task가 있으면 bulk 저장으로 한 번 이전한다. 보충 생성, 보충 숙제 배정, 일정 반영, 통과, 통과 취소, 상태/시간/문구 수정은 모두 `/api/makeup-tasks`에 즉시 저장한다. 보충수업 lesson 저장 실패 원인이던 없는 반 ID `supplement` 참조도 제거해 `classTemplateId`를 비워 저장하도록 했다.
- SQL 주의: 이번 1차는 기존 `makeup_tasks` 테이블을 사용하므로 새 SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/coreData.js` 통과, `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 운영 데이터 Supabase 전환 2차 - 시험관리/학사일정

- 상태: 완료
- 사용자 요청: 시험관리와 학사일정도 localStorage 중심이라 오류가 반복되므로 Supabase로 옮긴다.
- 이번 작업 결과: `/api/exam-prep-rows`, `/api/school-events` API를 추가하고, 앱 시작 시 Supabase 시험관리/학사일정 데이터를 불러오도록 연결했다. 서버가 비어 있고 브라우저에 기존 데이터가 있으면 bulk 저장으로 이전한다. 시험관리 행 생성/수정, 학사일정 수동 이벤트 생성/수정/삭제도 Supabase 저장을 호출한다.
- SQL 주의: 운영 Supabase에 `supabase/20260620_exam_calendar_supabase_state.sql` 적용이 필요하다. 이 파일은 시험관리의 `math_exam_dates`, `exam_cycle` 등 앱 필드와 학사일정의 `event_payload`, `color`, `grade`, `exam_subject` 등을 저장하기 위한 컬럼을 추가한다. SQL 적용 전에는 화면이 localStorage fallback으로 버티지만, 새 API 저장은 실패할 수 있다.
- 검증: `node --check api/routes/coreData.js` 통과, `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 운영 데이터 Supabase 전환 3차 - 공용 app state

- 상태: 완료
- 사용자 요청: 남은 운영 데이터도 브라우저 localStorage에만 남지 않도록 Supabase로 옮긴다.
- 이번 작업 결과: `app_state` 공용 JSON 저장소와 `/api/app-state` API를 추가했다. 앱 시작 시 `academyTests`, `scoreRecords`, `wrongProblems`, `problemBooks`, `examAnalyses`, `lessonResearchItems`, `notificationLogs`, `reportSnapshots`, `aiSettings`, `attendanceSettings`, `deletedLessonBundles`를 Supabase에서 불러오고, 서버가 비어 있으면 현재 브라우저 데이터를 초기 저장한다. 이후 해당 상태가 바뀌면 Supabase `app_state`에 저장한다.
- SQL 주의: 운영 Supabase에 `supabase/20260620_app_state_store.sql` 적용이 필요하다. SQL 적용 전에는 기존 localStorage fallback으로 동작하지만, 공용 app state 저장은 실패할 수 있다.
- 검증: `node --check api/routes/coreData.js` 통과, `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충관리/학사일정 초기화 준비

- 상태: 완료
- 사용자 요청: 수업일지-보충관리 내역부터 다시 확인하기 위해 보충/결석이 필요한 관리 항목과 학사일정에 저장된 내용을 모두 삭제하고, 이후 보충일정은 6월 19일 숙제가 안 된 사항부터 다시 진행한다.
- 이번 작업 결과: Supabase가 빈 배열을 반환할 때 브라우저 localStorage의 예전 보충관리/시험관리/학사일정 데이터가 다시 업로드되지 않도록 앱 초기 동기화 로직을 수정했다. 보충관리 항목을 운영 API에서 삭제할 수 있도록 `DELETE /api/makeup-tasks?id=...`와 `DELETE /api/makeup-tasks?all=true`를 추가했다.
- SQL 주의: 새 SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/coreData.js` 통과, `node --check api/server.js` 통과, `npm run build` 통과, `npm run test:production` 60개 통과.

### 오늘 작업 요약 및 최종 확인

- 상태: 완료
- 오늘 완료: 숙제보충 후보 기준 보정, 알림톡 최종 문구 편집 구조, 6월 19일 이전 수업/숙제 삭제 및 undo 보관, 보충 방식 옵션 정리, 학사일정 등록/수정 UX 및 시험관리 연동, 수업메모 직접 저장 흐름을 처리했다.
- 코드 정리: 더 이상 사용하지 않는 `CommentOpenCell`, `CommentActionCell` 컴포넌트와 예전 수업메모/코멘트 UI 잔여 CSS를 제거했다.
- 최종 검수: `npm run build` 통과, `npm run test:production` 60개 통과.
- 남은 주의점: 수업메모/강의내용 저장은 Supabase `lesson_student_records` 확장 컬럼이 필요하다. 운영 DB에 migration이 빠져 있으면 저장 실패로 표시되므로 `supabase/20260617_lesson_prep_resources_notifications.sql` 적용 여부를 확인해야 한다.

### P1. 내일 실제 데이터 운영 검수

- 상태: 대기
- 목표: 오늘 수정한 핵심 흐름이 로컬 코드 검수뿐 아니라 실제 배포/DB 데이터에서도 같은 결과로 동작하는지 확인한다.
- 확인 항목: 수업메모 저장, 강의 내용 저장, 학사일정 수학시험 수정 후 시험관리 연동, 직전수업 자동 생성, 보충관리 후보 수, 알림톡 최종 문구 중복 여부.
- 검수 기준: 실제 데이터 1개 반/학생 1~2명으로 입력-저장-새로고침-재조회까지 확인한다.

### P1. 수업메모 저장 누락 점검

- 상태: 완료
- 사용자 요청: 수업일지에서 작성한 수업메모가 저장되지 않는 것 같다.
- 원인: 수업메모 모달 안에 직접 저장 버튼이 없어, 메모 작성 후 모달을 닫고 학생 행의 `저장` 버튼을 따로 눌러야 DB에 반영되는 흐름이었다. 또한 강의 내용 입력은 `lessonProgress`로 바뀌었지만 서버 저장 매핑은 예전 `progress` 필드만 보고 있어 DB 저장 시 누락될 수 있었다. Supabase 확장 컬럼 migration이 빠진 환경에서는 서버가 확장 필드를 빼고 재시도해 수업메모가 조용히 저장되지 않는 위험도 있었다.
- 이번 작업 결과: 수업메모 모달 안에 저장 버튼과 저장 상태를 추가해 작성 화면에서 바로 DB 저장할 수 있게 했다. 저장 함수가 모달의 최신 메모/알림톡 포함 여부 값을 직접 받아 저장하도록 보강했고, 서버 매핑은 `lessonProgress ?? progress`를 `progress_note`에 저장하고 다시 `lessonProgress`로 읽어오도록 수정했다. 수업메모/알림톡 포함 확장 컬럼이 누락된 DB에서는 조용히 성공 처리하지 않고 migration 필요 오류로 저장 실패를 표시하게 했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 일정등록 위치 및 날짜 수정 UX 개선

- 상태: 완료
- 사용자 요청: 학사일정의 `일정 등록` 탭/버튼을 더 잘 보이는 곳으로 옮기고, 30일 날짜의 CSS 이상을 수정한다. 날짜를 눌렀을 때 해당 날짜 일정을 수정할 수 있어야 한다.
- 이번 작업 결과: 학사일정 상단 버튼과 월간 캘린더 제목 영역에 `+ 일정 등록` CTA를 같이 배치해 등록 진입점을 더 잘 보이게 했다. 날짜 셀 선택 스타일은 굵은 파란 테두리 대신 연한 배경/얇은 inset으로 조정해 시험기간 막대와 수학시험 탭이 끊겨 보이지 않게 했다. 날짜 클릭 모달에는 `이 날짜에 일정 등록` 버튼을 추가했고, 시험관리 연동 수학시험 일정도 날짜와 과목을 학사일정 모달에서 수정하면 `mathExamDates/mathExamDate`에 즉시 반영되게 했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 숙제보충 후보가 다음 숙제까지 잡히는 문제 수정

- 상태: 완료
- 사용자 요청: 6월 19일 수업에서 지난 숙제(17일 숙제)를 미완료/50% 완료로 체크한 것인데, 6월 19일에 새로 낸 다음 숙제까지 숙제보충 후보로 잡히는 것 같다. 현재 숙제보충이 6건 생긴다.
- 원인: 보충관리 후보 필터가 같은 수업기록의 과제 상태를 `previous` 숙제뿐 아니라 같은 수업의 `next` 숙제에도 적용했다. 그래서 6월 19일에 검사한 지난 숙제의 미완료/일부완료 상태가 6월 19일에 새로 낸 다음 숙제 후보에도 번졌다.
- 이번 작업 결과: 숙제보충 후보는 `homeworkType === "previous"`인 지난 숙제만 대상으로 삼도록 제한했다. 새로 낸 `next` 숙제는 해당 수업일의 과제 상태 때문에 보충 후보에 오르지 않는다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 알림톡 작성 화면 2칸 구조 및 원본 접기

- 상태: 완료
- 사용자 요청: 수업메모나 보충일정을 알림톡 화면으로 보낸 뒤 수신인에 따라 AI 수정을 일괄 적용하고, AI 말투가 강한 경우 최종 문구를 직접 다듬고 싶다. 3칸 구조 대신 `최종 문구 편집 + 원본 접기 + 읽기 전용 preview` 구조로 진행한다.
- 이번 작업 결과: 알림톡 작성 모달을 `최종 알림톡 문구` 편집칸 중심으로 정리했다. 수업메모/출결/교재/과제 등 원본 정보는 `원본 메모 보기` 접이식 영역에서 확인하고, AI 수정 결과와 직접 수정은 최종 문구 칸에 남는다. 오른쪽 preview는 최종 문구가 실제 템플릿에 들어간 결과를 읽기 전용으로 보여준다. 최종 문구가 있으면 발송 시 원본 수업메모를 다시 덧붙이지 않아 중복을 막는다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 6월 19일 이전 수업 삭제 및 숙제보충 8건 잔존 원인 수정

- 상태: 완료
- 사용자 요청: 6월 19일 이전 수업을 모두 삭제하고, 삭제가 숨김 처리처럼 보이지 않게 한다. 삭제 직후에는 잠깐 보관되어 `Ctrl+Z`로 되돌릴 수 있고, 하루 정도 지난 뒤에는 삭제되어도 된다. 6월 19일 이전 일정을 삭제한 뒤에도 숙제보충 일정이 8건 생기는 원인을 확인한다.
- 원인: 기존 수업 삭제는 서버에 `status: canceled`로 저장하는 숨김 방식이었고, 연결 숙제는 삭제하지 않고 `lessonId: ""`로 분리했다. 이 때문에 6월 19일 이전 수업/숙제가 API 동기화나 보충관리 후보 계산에 다시 남을 수 있었다.
- 이번 작업 결과: 6월 19일 이전 수업/기록/숙제는 앱 로드 시 활성 데이터에서 제외하고, 서버에도 `DELETE /api/lessons?before=2026-06-19` 정리 요청을 보내도록 했다. 개별 수업 삭제는 수업/수업기록/숙제를 한 묶음으로 24시간 보관함에 넣고 화면 데이터에서는 제거한다. `Ctrl+Z`는 보관된 묶음을 복원하고, 보충관리 후보는 실제 활성 수업에 연결된 숙제만 대상으로 삼도록 막았다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 보충관리 유형별 보충 방식 옵션 정리

- 상태: 완료
- 사용자 요청: 숙제를 안했을 경우 보충 방식은 `남아서 하고가기`, `등원보충`, `다음시간까지` 3가지가 있어야 하고, 결석했을 경우는 `현장보강`, `녹강보강` 2가지가 있어야 한다.
- 이번 작업 결과: 숙제보충 방식 옵션을 `남아서 하고가기`, `등원보충`, `다음시간까지` 순서로 정리하고, 새 숙제보충 생성 기본값을 `남아서 하고가기`로 맞췄다. 결석보강 방식 옵션은 `현장보강`, `녹강보강` 순서로 정리하고, 새 결석보강 생성 기본값을 `현장보강`으로 맞췄다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 보충관리 숙제보충 후보 8건 과다 표시 원인 수정

- 상태: 완료
- 사용자 요청: 숙제보충 화면에 6월 19일 기준 `교과서 프린트`가 8건 모두 보충일정 후보로 나타나는 이유를 확인한다.
- 원인: 보충관리 후보 기준에 `dueDate < today`가 포함되어 있어, 2026-06-20 기준으로 2026-06-19 숙제가 단순 미확인/미검사 상태여도 모두 숙제보충 후보가 될 수 있었다. 사용자는 19일 숙제를 모두 확인했으므로, 보충관리는 날짜 경과가 아니라 실제 확인 결과가 미완료/일부완료인 경우만 잡아야 한다.
- 이번 작업 결과: 숙제보충 후보를 `기한 지남` 기준에서 제외하고, 수업일지의 과제 상태 또는 숙제의 강사 확인 상태가 명시적으로 미완료/일부완료인 경우만 표시하도록 좁혔다. 보충관리 문구도 `미완료 숙제`, `일부 완료 숙제`로 표시되게 했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 알림톡 미리보기 발송 전 직접 수정

- 상태: 완료
- 사용자 요청: 수업 메모를 학생 알림톡에 체크하고 AI 수정한 뒤 오른쪽 알림톡 preview에 반영되지만, 발송 전에 preview 문구를 직접 수정할 수 없다. preview도 직접 수정 가능해야 한다.
- 이번 작업 결과: 알림톡 작성 모달의 preview 영역을 직접 편집 가능한 입력칸으로 바꿨다. 왼쪽 직접 작성/AI 수정 결과가 바뀌면 preview도 자동 갱신되고, preview를 직접 수정한 경우에는 `원문 복원`으로 되돌릴 수 있다. 예약/테스트 발송 시에는 preview의 `#{코멘트}:` 또는 `#{리포트본문}:` 아래 본문을 실제 알림톡 본문 override로 사용해 발송 전 수정 내용이 반영된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 보충관리 6월 19일 최선호 미완료 숙제 후보 재점검

- 상태: 완료
- 사용자 요청: 여전히 6월 19일 숙제를 안 한 최선호 학생의 보충일정이 보충관리 숙제보충에 나타나지 않는다.
- 원인: 수업일지의 `과제 상태` 셀은 `records.assignmentStatus/incompleteHomework`만 바꾸고, 보충관리 후보가 참조하는 `homeworks.teacherStatus`와 동기화되지 않았다. 그래서 수업일지에서는 미완료로 보이지만 보충관리에서는 해당 숙제가 여전히 `unverified`로 남아 후보에서 제외될 수 있었다.
- 이번 작업 결과: 수업일지에서 과제 상태를 바꾸면 같은 행의 `지난 숙제` homework 상태도 함께 갱신되게 했다. `미완료`는 `teacherStatus: missing`, 일부/난이도/풀이확인 계열은 `partial`, 완료는 `verified`로 반영되어 보충관리 후보/자동 제외 기준과 연결된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 등록 폼 모달화 및 입력 순서 수정

- 상태: 완료
- 사용자 요청: 학사일정 일정등록 CSS가 여전히 불편하므로 전체적으로 팝업 모달로 표현하는 방식을 검토한다. 시험구분 드롭다운은 연도 없이 `1학기 중간고사/기말고사/2학기...`로 보이고, 입력 유형이 더 중요하므로 상단으로 이동한다. 입력 유형이 시험기간이면 시험구분과 학년은 필요 없다.
- 이번 작업 결과: 학사일정 등록 패널을 `+ 일정 등록` 버튼으로 여는 모달형 입력으로 정리했다. 입력 유형을 최상단으로 이동했고, 시험구분 드롭다운은 연도 없이 `1학기 중간고사`, `1학기 기말고사`, `2학기 중간고사`, `2학기 기말고사`로 표시되게 했다. 입력 유형이 시험기간이면 시험구분과 학년 필드는 숨기고, 수학시험 입력일 때만 학년/과목 정보를 입력하도록 했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 보충관리 미완료 숙제 후보 누락 수정

- 상태: 완료
- 사용자 요청: 6월 19일 최선호 학생의 숙제가 미완료인데 보충관리에서 숙제보충 후보가 생기지 않는다.
- 이번 작업 결과: 보충관리의 숙제보충 후보 기준을 기한 지난 숙제뿐 아니라 강사가 `미완료` 또는 `일부 완료`로 표시한 숙제까지 포함하도록 확장했다. 후보 문구도 `미완료 숙제` 기준으로 조정했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 등록 탭 학년/과목 선택 UI 수정

- 상태: 완료
- 사용자 요청: 학사일정 일정등록 CSS가 불편하고, 학년 드롭다운은 `중3`, `고1`, `고2`, `고3`, 과목 드롭다운은 `공통수학1`, `공통수학2`, `대수`, `미적분1`, `확률과통계`, `미적분2`, `기하`로 고정되어야 한다.
- 이번 작업 결과: 학사일정 등록 탭과 날짜 수정 모달의 학년/과목 선택지를 고정 목록으로 정리했다. 좌측 등록 패널 폭, 입력 높이, 수학시험 행 간격을 조정해 큰 입력 박스가 답답하게 쌓이는 느낌을 줄였다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 시험일정 등록 UI 개편

- 상태: 완료
- 사용자 요청: 시험기간 안에 학년별/과목별 수학시험 날짜를 별도로 여러 개 입력할 수 있어야 한다. 한 학교 시험기간 안에 여러 학년 시험이 있고, 같은 학년에도 선택과목이 여러 개일 수 있다.
- 이번 작업 결과: 학사일정 일정등록 탭을 `시험기간 1개 + 수학시험 여러 개` 구조로 개편했다. 시험 구분을 추가하고, 각 수학시험 행마다 학년·과목·시험 날짜·메모를 입력할 수 있게 했으며, 시험관리 연동 기준을 학교·시험구분·학년·과목으로 보강했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 입력값 시험관리 자동 연동

- 상태: 완료
- 사용자 요청: 학사일정에 학교별 시험기간과 수학시험 날짜를 적으면 시험기간은 긴 막대, 수학시험은 인덱스 탭처럼 보이고, 같은 학교/같은 학년의 시험관리 데이터에 시험기간과 수학시험 날짜가 자동 연동되어야 한다.
- 이번 작업 결과: 학사일정 등록 폼에 학년 선택을 추가하고, 수동으로 입력한 시험기간/수학시험 날짜가 같은 학교·학년 시험관리 행의 `examPeriod`, `mathExamDate/mathExamDates`에 자동 반영되도록 연결했다. 날짜 모달에서 수동 일정을 수정해도 같은 기준으로 다시 동기화된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 학사일정 기반 직전수업 자동 생성

- 상태: 완료
- 사용자 요청: 학사일정에 시험 정보를 적으면 수업일지에 직전시간표가 자동 등록되어야 하며, 시간은 나중에 수정할 수 있어야 한다.
- 이번 작업 결과: 학사일정에서 수학시험 날짜를 등록/수정하면 같은 학교·학년 학생 기준으로 시험 전날 `직전수업` 일정이 수업일지 캘린더에 자동 생성된다. 기본 시간은 19:00-21:00이며, 기존 수업 수정 모달에서 시간과 내용을 나중에 수정할 수 있다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업일지 일정 종류 필터 버튼

- 상태: 완료
- 사용자 요청: 수업일지에서 기존 수업 외 직전수업, 보충수업을 별도로 모아 볼 수 있게 우상단 버튼으로 필터링한다. 예: 6월 보충수업만 보기.
- 이번 작업 결과: 수업일지 캘린더 상단에 `전체`, `정규수업`, `직전수업`, `보충수업` 필터 버튼을 추가했다. 필터를 누르면 월간 캘린더 pill 목록이 해당 일정 종류만 남도록 바뀌며, 직전수업/보충수업 pill은 색상으로도 구분된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 보충관리 반영 완료 팝업

- 상태: 완료
- 사용자 요청: 보충관리에서 `알림톡 문구 작성`, `수업일지 반영/수정 반영` 버튼을 눌렀을 때 실제 반영 여부를 알기 어렵다. 반영이 되면 완료 알림 팝업이 나와야 한다.
- 이번 작업 결과: `알림톡 문구 작성` 버튼은 초안 반영 완료 팝업과 초안 반영 배지를 표시하고, `수업일지 반영/수정 반영` 버튼은 캘린더 반영 완료 팝업을 표시하도록 수정했다. 기존 수업일지 반영 완료 배지도 함께 유지된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 숙제보충 일정 수업일지 전용 모달

- 상태: 완료
- 사용자 요청: 숙제보충 일정을 잡으면 수업일지 캘린더에 표시되어야 하며, 클릭 시 기존 수업일지 행이 아니라 별도 모달로 언제 안 한 숙제인지, 안 한 숙제 내용, 확정 일자를 보여야 한다.
- 이번 작업 결과: 숙제보충 일정은 캘린더에 보충 전용 pill로 구분 표시하고, 클릭 시 일반 수업일지 모달 대신 `숙제보충 일정` 전용 모달을 열도록 수정했다. 모달 상단에는 대상 학생, 해야 했던 날짜, 안 한 숙제 내용, 보충 확정 일정과 확정 처리 시각을 표시한다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 숙제현황 중복/완료 항목 노출 수정

- 상태: 완료
- 사용자 요청: 숙제현황에서 동일 숙제가 `학생 체크 대기`와 `숙제보충 필요`로 2개 보이며, 6월 19일 숙제는 오늘 낸 숙제이므로 밀린 숙제로 보이면 안 된다. 확인완료 또는 학생 체크 완료 숙제는 자동으로 숨겨져야 한다.
- 이번 작업 결과: 숙제현황에서 강사 확인 완료, 상태 완료, 학생 체크 완료 숙제는 자동 제외되도록 공통 판정을 추가했다. 마감일이 비어 있는 숙제는 밀린 숙제로 계산하지 않게 수정하고, 같은 학생/같은 제목/같은 배정일 항목은 마감일이 있는 항목을 우선 표시해 중복 노출을 줄였다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 숙제현황 버튼 동작 수정

- 상태: 완료
- 사용자 요청: 숙제현황에서 `학생화면`, `전체학생` 버튼이 동작하지 않는다.
- 이번 작업 결과: `전체 학생` 버튼은 전체 학생 범위의 숙제 목록으로 돌아가도록 수정하고, 학생 카드 선택은 해당 학생 상세로 전환되게 정리했다. `학생화면` 버튼은 선택 학생의 학생 포털 미리보기 모달을 열도록 연결했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업일지 이전 수업 리마인드 placeholder

- 상태: 완료
- 사용자 요청: 6월 22일 수업일지를 열었을 때, 6월 19일에 작성한 강의 교재와 강의 내용이 있으면 현재의 회색 흐린 글씨체로 빈 칸에 보여서 지난 시간 내용을 리마인드할 수 있게 한다.
- 이번 작업 결과: 학생별 직전 수업 기록에서 강의 교재/내용을 찾아 현재 수업일지의 빈 강의 교재/강의 내용 카드 placeholder로 표시한다. 현재 칸에 직접 입력한 값이 있으면 기존 값이 우선 표시된다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 설정 화면 AI 프롬프트 관리

- 상태: 완료
- 사용자 요청: 웹앱에서 AI 호출이 있는 기능들을 설정에서 확인하고, 각각의 프롬프트를 설정 창에서 수정할 수 있게 한다.
- 이번 작업 결과: 설정 화면에 `AI 프롬프트` 섹션을 추가해 코멘트 AI, 수업메모 AI, 시험분석 AI, AI 변형문항 지시문을 탭처럼 선택/수정할 수 있게 했다. 코멘트/수업메모/시험분석 AI 호출에는 설정된 프롬프트가 payload로 전달되며, 백엔드 코멘트 AI도 사용자 설정 프롬프트를 실제 프롬프트에 반영한다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업 안내 알림톡 항목 한 줄 표기

- 상태: 완료
- 사용자 요청: 테스트 발송 문구에서 `🏫 출결` 다음 줄 `출석`으로 나뉘는 대신 `🏫 출결 : 출석`처럼 항목명과 값을 한 줄로 표시한다. 문장 간 간격은 현재처럼 유지한다.
- 이번 작업 결과: 출결/강의 교재/강의 내용/지난 과제/다음 과제/과제 상태 등 짧은 항목은 `라벨 : 값` 한 줄로 표시하고, 코멘트 같은 긴 본문 블록은 기존 줄간격을 유지하도록 미리보기와 API 실제 발송 본문을 함께 수정했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업일정 메모칸 읽기/편집 모드

- 상태: 완료
- 사용자 요청: 카드형 메모칸에서 우측 스크롤 바 없이 2줄 이상 내용은 자연스럽게 행 높이가 늘어나도록 하고, 추천안 2인 읽기모드 + 클릭하면 편집 방식을 적용한다.
- 이번 작업 결과: 수업일지 직접 입력 칸을 평소에는 읽기 카드로 보여주고 클릭 시 자동 높이 textarea로 전환하도록 수정했다. 편집 textarea는 내부 스크롤/수동 리사이즈 없이 내용 높이에 맞춰 행이 자연스럽게 늘어난다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업일정 입력칸 카드형 메모 UI

- 상태: 완료
- 사용자 선택: 수업일정/수업일지에서 직접 적는 강의 교재, 강의 내용, 지난 숙제, 다음 숙제 입력칸을 카드형 메모칸 느낌으로 정리한다.
- 이번 작업 결과: 표 구조는 유지하되 직접 작성 textarea에 전용 클래스를 붙이고, 글자 굵기/여백/배경/포커스 상태를 카드형으로 조정했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P1. 수업일정 캘린더 수업 클릭 빈 화면

- 상태: 완료
- 사용자 증상: 수업일정 캘린더에서 수업을 눌러 들어가면 수업 모달/상세가 나오지 않고 빈 화면이 보인다.
- 원인: 수업일지 상세 모달 렌더링 시 `TeacherLessonHubV2` 내부에서 `makeupTasks`를 참조하지만, App 호출부와 컴포넌트 props에 전달되지 않아 런타임 오류가 날 수 있었다.
- 이번 작업 결과: App의 `makeupTasks` 상태를 `TeacherLessonHubV2`에 전달하고, 컴포넌트 기본값을 추가해 수업 클릭 시 상세 모달이 정상 렌더링되도록 수정했다.
- 검수: `npm run build`, `npm run test:production` 통과.

### P0. 새 세션 / 집 컴퓨터 인수인계

- 상태: 진행 중
- 목표: 새 Codex 세션과 집 컴퓨터에서 바로 이어 작업할 수 있게 문서와 GitHub 상태를 정리한다.
- 완료 조건:
  - `docs/current-worklog.md` 작성
  - `docs/home-codex-setup.md` 작성
  - `docs/codex-handoff-prompt.md` 작성
  - `AGENTS.md` 작성
  - GitHub `main`에 push

### P1. 학사일정 캘린더

- 상태: 완료
- 이번 작업 결과: 시험기간 막대 레이어와 수학시험 탭 레이어를 분리해, 기간 막대는 연속으로 유지하고 수학시험 날짜만 막대 위 탭처럼 표시되도록 조정했다.
- 검수: `npm run build`, `npm run test:production` 통과.

사용자 요청:

```text
시험기간 막대는 유지하고, 수학시험 날짜만 위로 튀어나온 탭처럼 표시.
현재는 막대가 끊겨 보임.
```

구현 방향:

- 학교별 시험기간은 얇고 긴 연속 막대로 표현한다.
- 기간 막대는 날짜 셀 사이에서 끊겨 보이지 않아야 한다.
- 수학시험 날짜만 막대 위에 붙은 파일철 인덱스 탭처럼 표시한다.
- 예: 6월 29일~7월 3일 창동고 시험기간 막대 유지, 6월 29일 창동고3 미적, 6월 30일 창동고1, 7월 2일 창동고3 확통 탭 표시.
- 학사일정 달력에서는 항목 필터가 가능해야 한다.
  - 내신기간
  - 수학시험날짜
  - 방학/개학
  - 직전일정
- 입력 구조가 복잡해졌다면, 부분 수정에 매달리지 말고 학사일정 입력 모델을 먼저 단순화한다.

주의할 점:

- `시험기간`일 때만 시작일/종료일/기간 막대/날짜별 수학시험 입력이 필요하다.
- 시험기간이 아닌 일정은 단일 날짜 일정으로 입력한다.
- 시험관리의 시험기간과 학사일정의 시험기간은 서로 연동되어야 한다.
- 교과서 출판사는 같은 학교/학년/학기/중간-기말 범위에서 일괄 반영되어야 한다.

## 다음 작업 큐

### P1. 시험관리

- 좌측 탭 이름은 `시험관리`로 통일한다.
- 상단 하위 탭은 보기 좋게 정리한다.
  - 시험정보
  - 탈리
  - 기출문제
- 시험정보 표는 기본적으로 읽기 전용 형태로 보여준다.
- 수정 버튼을 눌렀을 때만 입력 필드가 나타나게 한다.
- 시험관리 DB 연결 드롭다운은 당장 필요하지 않으면 제거하거나 설정/내부 데이터 연결로 숨긴다.

### P1. 보충관리

- 숙제보충 방식:
  - 다음시간까지
  - 등원보충
  - 남아서 하고 가기
- 결석보강 방식:
  - 녹강보강
  - 현장보강
- 결석보강에는 학생별 결석사유가 같이 보여야 한다.
- `일정 미확정 / 일정 확정 / 보충 완료`는 드롭다운보다 segmented button 형태가 적합하다.
- 숙제보충 탭은 숙제보충 일정만 입력한다.
- 결석보강 탭은 결석보강 일정만 입력한다.
- 수업일지에 추가된 숙제보충은 일반 수업일지 모달이 아니라 별도 보충 모달로 열려야 한다.
  - 어떤 숙제를 보충하는지
  - 어떤 수업일자와 연결된 보충인지
  - 배정일/시간/상태
  - 알림톡 문구

### P1. 수업일지 / 알림톡 문구

- `수업준비`, `준비메모` 버튼명은 `수업메모`로 통일한다.
- 수업메모에서 학생/학부모 알림톡 미리보기는 굳이 표시하지 않는다.
- 학생 알림톡 포함 여부, 학부모 알림톡 포함 여부만 체크한다.
- 강사용 메모는 알림톡 작성 화면의 직접 작성란에 그대로 복사되어야 한다.
- 이후 `AI 수정`을 누르면 학생/학부모 수신인에 맞게 문장이 다듬어진다.
- 출결 항목은 수업메모 바로 옆으로 이동한다.
- 알림톡 상단 학원명은 `으뜸수학 고태영T`로 표시한다.
- 코멘트 문장은 한 줄 엔터를 넣어 가독성을 높인다.

### P1. 숙제현황

- 상단 4개 카드 버튼이 실제 필터/화면 전환으로 동작해야 한다.
- 카드 예:
  - 전체 학생
  - 숙제 등록 학생
  - 오늘 미완료
  - 밀린 학생
- 눌렀을 때 색만 바뀌지 않고 상세 목록도 바뀌어야 한다.

### P1. 과제상태 드롭다운

드롭다운 표시 후보:

- 완료
- 80% 완료
- 50% 완료
- 아는 것만 풂
- 난이도 높음
- 풀이 확인 필요
- 미완료
- 미검사

학부모 알림톡 문구는 드롭다운 문구를 그대로 쓰지 말고 정중한 문장으로 변환한다.

### P2. 시험분석

- 분석 추가 시 특정 학교/학년이 고정으로 들어가면 안 된다.
- 빈 분석지가 추가되어야 한다.
- AI 분석 결과가 긴 Markdown/JSON 그대로 보이면 읽기 어렵다.
- 웹앱에서는 카드/섹션 형태로 구조화한다.
  - 시험 개요
  - 단원별 분포
  - 킬러/준킬러
  - 실수 패턴
  - 학생용 총평
  - 블로그/인스타용 초안
- 4단계 버튼은 실제 화면 전환으로 작동해야 한다.
  - 1차 AI 가안
  - 강사 인사이트 추가
  - 최종 편집
  - 발행 완료

### P2. AI 도구

- 좌측 메뉴명은 `AI 도구`로 둔다.
- 상단 탭은 우선 `변형문항`만 둔다.
- `변형문제 생성`, `AI 모델` 제목/영역은 불필요하면 제거한다.
- AI 모델은 설정에서 관리하므로 개별 화면에서는 숨긴다.
- 입력 옵션이 너무 아래에 있지 않도록 상단/좌측 패널에 압축 배치한다.
- 원본은 드래그 앤 드롭으로 업로드할 수 있어야 한다.
- HWPX 내보내기는 추후 기능으로 유지한다.

### P2. 자료함

- 자료 첨부는 드래그 앤 드롭을 지원한다.
- 개별 학생은 이름 나열 대신 반별 그룹으로 접는다.
- 반별 전체 선택/전체 해제가 가능해야 한다.
- 여러 학생 동시 선택이 가능해야 한다.

### P2. 학생/학부모 화면 반응형

- 학생 화면은 태블릿 우선, 그다음 모바일.
- 학부모 화면은 모바일 우선.

## 사람 판단이 필요한 항목

- 학사일정 색상 규칙 최종 결정
- 수학시험 탭에 표시할 문구 길이 규칙
- 과제상태별 학부모 알림톡 문구 최종 승인
- 보충관리 상태명 최종 문구
- 시험분석 결과를 블로그/인스타로 보낼 때 공개 범위

## 로컬 전용 파일 / 집 컴퓨터 주의

- 현재 Git에 올라가지 않은 로컬 파일:
  - `tools/update-render-ai-env.ps1`
- 이 파일은 집 컴퓨터에서는 보이지 않는다.
- 실제로 계속 쓸 도구라면 내용을 검토한 뒤 Git에 올릴지 결정한다.
- 민감 정보가 들어간 경우 절대 Git에 올리지 않는다.

## 새 세션 첫 프롬프트 예시

```text
AGENTS.md와 docs/current-worklog.md를 먼저 읽고 작업 큐를 확인해주세요.
그다음 현재 P1 작업인 학사일정 캘린더 개선부터 진행해주세요.

[다음]
학사일정 캘린더:
시험기간 막대는 유지하고, 수학시험 날짜만 위로 튀어나온 탭처럼 표시.
현재는 막대가 끊겨 보임.
```

### 2026-06-20 P1. 보충관리 목록 CSS와 보충 통과 확인 모달
- 상태: 완료
- 사용자 요청: 보충관리 숙제보충 목록의 CSS를 정돈하고, `보충 통과` 버튼을 누를 때 바로 처리하지 말고 확인 문구 모달을 추가한다.
- 이번 작업 결과: 보충관리 후보 목록 행을 학생/항목 정보, 보충 관리, 보충 통과 3열 구조로 정리하고 모바일에서는 1열로 자연스럽게 접히도록 수정했다. 목록과 학생별 보충 상세 모달의 `보충 통과` 버튼은 모두 `보충 통과 확인` 모달을 거친 뒤 처리되도록 변경했다.
- SQL 주의: 이번 작업은 프론트 UI와 확인 흐름 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충관리 숙제보충 내역 편집
- 상태: 완료
- 사용자 요청: 보충관리 학생 상세 모달에서 화면상 `교과서 프린트`로 보이는 숙제보충 내역을 수정할 수 있게 한다. 수업일지의 숙제 완료 여부는 그대로 수업일지 드롭다운에서 관리하고, 미완료된 숙제 내역은 보충일지에서 별도로 수정한다.
- 이번 작업 결과: 숙제보충 task에 `supplementHomeworkNote` 보충 전용 필드를 추가했다. 새 보충 생성 시 지난 숙제명을 기본값으로 가져오고, 보충관리 상세 모달에서 수정할 수 있다. 수정값은 보충일지 표시와 알림톡 초안 생성에만 사용하며 수업일지 원본 숙제명/완료 여부에는 반영하지 않는다.
- SQL 주의: 기존 `makeup_tasks.note` JSON 메타데이터에 저장되는 프론트 필드 추가이므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충 알림톡 초안의 미완료숙제 반영
- 상태: 완료
- 사용자 요청: 숙제보충 모달에서 작성한 미완료숙제 내용을 바탕으로 알림톡 초안을 만든다.
- 이번 작업 결과: 보충 알림톡 초안 작성 버튼이 클릭 시점의 보충 task에서 초안을 직접 생성하도록 정리했다. 수업메모/학생·학부모 알림톡의 보충일정 요약도 `supplementHomeworkNote`를 우선 사용하도록 바꿔, 보충모달에서 수정한 미완료숙제 내역이 알림톡 재료에 반영된다.
- SQL 주의: 기존 `makeup_tasks.note` JSON 메타데이터를 사용하는 로직 변경이므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 수업일지 보충 상세 창의 수정 숙제명 반영
- 상태: 완료
- 사용자 요청: 보충관리에서 숙제보충 내역을 수정한 사항이 수업일지에서 보충 일정을 눌렀을 때 나오는 창에도 반영되게 한다.
- 이번 작업 결과: 수업일지의 숙제보충 전용 상세 창(`HomeworkMakeupLessonDetail`)에서 보충 대상 숙제명을 `supplementHomeworkNote` 우선으로 표시하도록 수정했다. 원본 수업일지 숙제명과 보충관리 수정값이 다를 경우, 보조 문구로 원본 숙제명도 함께 보여준다.
- SQL 주의: 기존 보충 task JSON 메타데이터를 읽어 표시하는 UI 변경이므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충관리 목록 버튼명 변경
- 상태: 완료
- 사용자 요청: 보충관리 후보 목록의 `일정 관리` 버튼명을 숙제 내역과 알림톡 문구 수정까지 포괄하는 이름으로 바꾼다.
- 이번 작업 결과: 기존 `일정 관리` 버튼명을 `보충 관리`로 변경했다.
- SQL 주의: 화면 문구 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과.

### 2026-06-20 P1. 숙제보충 수업일지 보충 처리 기록화
- 상태: 완료
- 사용자 요청: 수업일지 숙제보충 상세 창의 일정 메모, 보충 진행 체크가 불분명하므로 추천안대로 보충 처리 영역으로 바꾸고, 보충이 다 끝나지 않았을 때의 진행 메모와 추가 보충 내용을 기록/추적할 수 있게 한다.
- 이번 작업 결과: 숙제보충 전용 상세 창에서 기존 체크박스 영역을 제거하고 보충 처리 패널로 교체했다. 진행 중, 추가 보충 필요, 보충 완료 상태를 선택할 수 있고, 보충 진행 메모와 추가 보충 내용을 보충 task에 저장한다. 추가 보충 필요로 기록은 보충 항목을 진행 상태로 남기고, 보충 완료 처리는 확인 모달을 거쳐 완료 처리한다.
- SQL 주의: 기존 makeup_tasks.note JSON 메타데이터에 프론트 필드를 저장하는 방식이라 Supabase SQL Editor 적용은 필요 없다.
- 검증: npm run build 통과, npm run test:production 60개 통과.

### 2026-06-20 P1. 보충 메모 노출과 숙제보충 모달 압축
- 상태: 완료
- 사용자 요청: 보충관리 상세 모달에 보충 메모를 적을 수 있게 하고, 목록의 `보충 관리` 버튼을 `보충 메모`로 바꾸며, 해당 메모가 목록에 표시되게 한다. 수업일지 숙제보충 상세 모달이 너무 길어 보충 처리 영역을 가로 배치로 정리한다.
- 이번 작업 결과: 보충관리 상세 카드에 `보충 메모` 입력란을 추가하고 기존 수업일지 보충 처리의 `supplementProgressMemo`와 같은 필드로 저장되게 했다. 보충관리 목록 버튼명을 `보충 메모`로 바꾸고, 저장된 메모가 있으면 목록 행에 한 줄 미리보기로 표시한다. 수업일지 숙제보충 상세 창은 보충 대상/보충 처리 영역 비율과 textarea 높이를 줄이고, 보충 진행 메모와 추가 보충 내용을 가로 배치했다.
- SQL 주의: 기존 `makeup_tasks.note` JSON 메타데이터 필드를 사용하는 UI/저장 흐름 변경이므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 시험 일정 기반 자동 수업 후보와 중복 방지
- 상태: 완료
- 사용자 요청: 시험관리/학사일정에서 파생되는 직전수업과 일요시험보강 자동생성에 대해 generatedKey, 수동수정 보호, 삭제 후 재생성 방지, 자동 반영 미리보기 구조를 구현한다.
- 이번 작업 결과: 학사일정 화면에 `자동 수업 후보` 패널을 추가해 시험관리 원본 기준의 직전수업/일요시험보강 후보를 생성, 갱신, 수동보호, 삭제건너뜀 상태로 보여준다. 후보 반영 버튼은 생성/갱신 대상만 수업일지에 저장한다. 자동 파생 수업에는 sourceSchoolEventId 기반 generatedKey를 사용해 중복 생성을 막고, 사용자가 수업을 수정하면 manualOverrideKeys로 보호하며, 삭제하면 suppressedKeys에 기록해 다시 생성되지 않게 했다. 일요시험보강은 날짜별 단일 수업으로 생성되며 sourceLabel에 해당 학교 시험기간 묶음을 표시한다.
- SQL 주의: 기존 lessons 컬럼과 app_state JSON을 사용하는 방식이라 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 자동 수업 후보 개별 제어와 일요시험보강 블록 편집
- 상태: 완료
- 사용자 요청: 다음 작업 순서를 list로 만들고 순차적으로 진행한다. 우선 시험기간 기반 자동생성 수업이 중복되지 않게 관리하고, 일요시험보강은 날짜별 단일 수업 안에서 학교별 타임테이블을 확인/수정할 수 있게 한다.
- 이번 작업 결과: 학사일정의 `자동 수업 후보` 패널에서 후보별로 `이 항목 반영`, `자동생성 제외`, `제외 해제`, `보호 해제`를 할 수 있게 했다. 수업일지에서 `일요시험보강`을 열면 일반 수업일지가 아니라 전용 모달이 뜨고, 자동 생성된 학교별 블록을 날짜/시작시간/종료시간/보강명/메모 단위로 수정해 저장할 수 있다. 저장값은 `generatedLessonControls.sundayMakeupBlocks`에 보관해 자동 생성 원본과 수동 수정값을 분리한다.
- 남은 정리: 특정 학교 블록 하나만 토요일 등 다른 달력 날짜로 완전히 분리해 표시하는 것은 2차 구조다. 현재는 일요시험보강 단일 수업 안의 블록 날짜/시간/메모 저장까지 구현했다. 블록을 별도 lesson으로 쪼개 달력에 따로 표시하려면 `app_state` 확장만으로 갈지, 별도 Supabase 테이블/migration으로 갈지 결정이 필요하다.
- SQL 주의: 기존 lessons 컬럼과 app_state JSON을 사용하는 방식이라 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 시험관리 화면 정리
- 상태: 완료
- 사용자 요청: 다음 작업 큐를 순차적으로 진행한다. 시험관리의 좌측 탭 이름을 `시험관리`로 통일하고, 상단 하위 탭은 `시험정보`, `탈리`, `기출문제`로 보기 좋게 정리하며, 시험정보 표는 기본 읽기 전용으로 보이고 수정 버튼을 눌렀을 때만 입력 필드가 나오게 한다. 시험관리 DB 연결 드롭다운은 당장 필요 없으면 숨긴다.
- 이번 작업 결과: 시험관리 상단 설명을 현재 반/고사 맥락 중심으로 줄이고, 하위 탭을 큰 카드형 설명 버튼에서 compact segmented button으로 정리했다. 검색창은 시험정보 탭에서만 보이게 했고, 시험정보 행이 없을 때 빈 상태를 표시한다. 시험분석 화면의 `시험관리 DB 연결` 드롭다운 표현은 `연결된 시험정보` 읽기 박스로 바꿔 DB를 직접 선택하는 느낌을 줄였다.
- SQL 주의: 화면 구조와 문구/CSS 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P1. 보충관리 방식 옵션 순서 정리
- 상태: 완료
- 사용자 요청: 다음 작업 큐를 순차적으로 진행한다. 보충관리에서 숙제보충 방식은 `남아서 하고 가기`, `다음시간까지`, `등원보충` 순서로, 결석보강 방식은 `녹강보강`, `현장보강` 순서로 정리한다.
- 이번 작업 결과: 보충관리 상세 모달의 방식 segmented button 표시 순서를 요청 순서로 변경했다. 기존 보충 생성 기본값은 숙제보충 `남아서 하고 가기`, 결석보강 `현장보강`으로 유지되도록 `supplementDefaultMethod`를 명시했다. 운영 테스트의 방식 라벨 검증도 새 띄어쓰기 기준으로 갱신했다.
- SQL 주의: 프론트 옵션 표시 순서와 테스트 기대값 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P2. 시험분석 빈 분석지 생성
- 상태: 완료
- 사용자 요청: 다음 작업 큐를 순차적으로 진행한다. 시험분석에서 분석 추가 시 특정 학교/학년이 고정으로 들어가면 안 되고, 빈 분석지가 추가되어야 한다.
- 이번 작업 결과: `createDefaultExamAnalysis`의 기본 학교/학년/과목/시험명/시험일 고정값을 제거했다. 시험분석의 `+ 분석 추가` 버튼도 첫 시험관리 행을 자동으로 넘기지 않고 빈 분석지를 생성한다. 목록에서는 실제 필드값은 비워둔 채 `새 분석`, `기본정보 미입력`으로만 표시한다.
- SQL 주의: 프론트 기본값 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P2. AI 도구 원본 파일 입력 연결
- 상태: 완료
- 사용자 요청: 다음 작업 큐를 순차적으로 진행한다. AI 도구의 변형문항 화면에서 원본은 드래그 앤 드롭으로 업로드할 수 있어야 한다.
- 이번 작업 결과: 변형문항 입력 카드의 파일 선택/드래그 영역을 실제 입력 흐름에 연결했다. 파일을 선택하거나 드래그하면 원본 문항 입력란에 파일명/크기 메타데이터가 추가되고, 텍스트 계열 파일은 내용까지 함께 붙여 넣는다. 숨김 파일 input 공용 스타일도 추가했다.
- SQL 주의: 프론트 입력 UX 변경만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.

### 2026-06-20 P2. 학생/학부모 화면 모바일 보강
- 상태: 완료
- 사용자 요청: 다음 작업 큐를 순차적으로 진행한다. 학생 화면은 태블릿 우선, 그다음 모바일이고, 학부모 화면은 모바일 우선으로 정리한다.
- 이번 작업 결과: 767px 이하 화면에서 학생/학부모 포털의 헤더, 액션 버튼, 탭, 지표 카드가 한 줄에 억지로 끼지 않도록 정리했다. 모바일에서는 헤더 액션이 1열로 내려가고, 탭은 2열로 접히며, 지표 카드는 높이와 글자 크기를 낮춰 태블릿/모바일에서 겹침을 줄였다. 숙제현황 활성 카드의 배지 문구도 `선택`으로 간결하게 정리했다.
- SQL 주의: CSS 반응형 보강만 있어 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.
### 2026-06-20 P1. 일요시험보강 학교별 블록 달력 분리 표시
- 상태: 완료
- 사용자 요청: 시험기간 기반 일요시험보강에서 학교별 블록을 세부 수정했을 때, 특정 학교 블록을 다른 날짜/시간으로 옮기면 수업일지 달력에서도 그 이동된 날짜에 확인할 수 있게 한다.
- 이번 작업 결과: `generatedLessonControls.sundayMakeupBlocks`에 저장된 학교별 블록 수정값을 읽어, 원래 일요시험보강 날짜/시간과 달라진 블록을 달력 표시용 가상 수업으로 파생한다. 원본 자동 수업은 그대로 두고, 이동된 블록은 달력에서 별도 pill로 표시되며 클릭 시 같은 일요시험보강 모달을 열고 해당 블록을 강조한다. 수정/삭제 동작은 원본 일요시험보강 수업을 기준으로 처리해 실제 `lessons` 중복 저장을 피한다.
- SQL 주의: 기존 `app_state` JSON(`generatedLessonControls.sundayMakeupBlocks`)만 사용하는 UI/파생 표시 변경이라 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 60개 통과.
### 2026-06-20 P1. 일요시험보강 이동 블록 회귀 시나리오 테스트 추가
- 상태: 완료
- 사용자 요청: 위에서 우려했던 부분들이 잘 통과됐는지 시나리오 테스트로 확인한다.
- 이번 작업 결과: 운영 시나리오 테스트에 61~64번 체크를 추가했다. 이동된 일요시험보강 학교별 블록이 달력용 수업으로 파생되는지, 원본 수업과 `sourceLessonId`로 연결되는지, 클릭 시 원본 모달과 `focusBlockId`로 이어지는지, 이동 블록 pill/강조 CSS가 존재하는지를 확인한다.
- SQL 주의: 테스트 스크립트와 작업 기록만 변경했으므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run test:production` 64개 통과, `npm run build` 통과.

### 2026-06-20 P1. 시험관리 수정 행 CSS 보정
- 상태: 완료
- 사용자 요청: 시험관리에서 시험정보 수정 모드의 CSS가 맞지 않아 날짜/수학시험/총평/저장 버튼 영역이 한 줄에서 어색하게 밀리는 문제를 수정한다.
- 이번 작업 결과: 시험관리 수정 행에만 별도 12컬럼 grid를 적용해 기본정보, 시험기간, 총평, 저장/닫기 버튼을 첫 줄에 정리하고 특이사항, 수학시험 항목, 시험범위/부교재 입력을 아래 줄로 안정적으로 배치했다. 수학시험 항목 내부 입력 grid도 부모 폭 안에 들어오도록 조정했다.
- SQL 주의: CSS 레이아웃 변경만 있으므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build` 통과, `npm run test:production` 64개 통과.

### 2026-06-20 P1. 1학기 기말고사 시험관리 데이터 초기화 보정
- 상태: 완료
- 사용자 요청: `2026 1학기 기말` 시험관리 화면에 1학기 중간고사 범위/총평 데이터가 들어와 있으므로, 기말고사는 앞으로 입력할 수 있게 깨끗해야 한다.
- 이번 작업 결과: 중간고사 seed 행에 `examCycle: "2026-1-mid"`를 명시했다. 앱과 API 모두 `exam_prep_*_2026_mid_*` 형태의 레거시 행을 중간고사로 정규화하므로, 이미 잘못 `2026-1-final`로 저장된 중간고사 행도 로드 시 중간고사로 되돌아가고 기말 탭에서는 빠진다. 새 기말 행은 학생 DB 기반으로 생성되며 시험범위/부교재/총평은 빈 상태로 시작한다.
- SQL 주의: 기존 컬럼만 쓰는 데이터 정규화 로직이므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 65개 통과.

### 2026-06-20 P1. 시험관리 API 기본 고사 자동 전환
- 상태: 완료
- 사용자 요청: API 매핑 기본값을 시기별 고사 흐름에 따라 자동으로 바뀌게 한다. 4월말~5월초는 1학기 중간, 6월말~7월초는 1학기 기말, 9월말~10월초는 2학기 중간, 12월 중순은 2학기 기말 기준이다.
- 이번 작업 결과: 앱과 API에 `getDefaultExamCycleForDate`를 추가해 현재 날짜 기준 기본 고사를 계산한다. 1~5월은 `YYYY-1-mid`, 6~7월은 `YYYY-1-final`, 8~10월은 `YYYY-2-mid`, 11~12월은 `YYYY-2-final`로 기본값이 바뀐다. 기본 시험기간도 같은 연도 기준으로 4/27~5/8, 6/29~7/3, 9/28~10/2, 12/14~12/24를 자동 생성한다.
- SQL 주의: API/프론트 기본값 계산 로직 변경만 있으므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/coreData.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 66개 통과.

### 2026-06-20 P1. 시험관리 수정 칸 폭 보정과 중복 원인 확인
- 상태: 완료
- 사용자 요청: 시험관리 수정 칸에서 과목과 출판사를 분리하고, 입력 칸 폭이 부족한 문제를 수정한다. 데이터가 2개씩 생긴 원인은 우선 조사만 한다.
- 이번 작업 결과: 시험관리 행 전체 컬럼 폭을 넓히고 수정 모드도 헤더/읽기 모드와 같은 컬럼 배치를 쓰도록 조정했다. 과목과 출판사는 각각 별도 고정 컬럼에 배치되고, 수학 시험 일정/시험 범위/부교재 칸 폭을 크게 늘렸다.
- 중복 원인 조사: 운영 API에서 같은 학교/학년/과목/고사에 대해 `exam_prep_2026-1-final_상계고_고1_textbook` 같은 초기 자동생성 행과 `exam_prep_2026-1-final_상계고_고1_천재홍` 같은 교재명 기반 자동생성 행이 함께 존재함을 확인했다. 자동생성 ID가 `student.textbook || "textbook"`에 의존하고, 이후 학생 교재/출판사 값이 채워지면서 다른 ID가 생성되어 `mergeById`가 같은 논리 행으로 보지 못한 것이 중복의 직접 원인이다. 이번 작업에서는 사용자가 입력한 기말 데이터를 보호하기 위해 삭제/병합은 하지 않았다.
- 학사일정 추천 메모: 캘린더는 시험기간 bar와 수학시험 pill을 분리 유지하되, 학교명/학년/과목을 pill 라벨에 짧게 포함하고, 색상은 학교 단위보다 이벤트 타입별로 유지하는 편이 중복 오해가 적다. 날짜 모달 상세에서 학교별 시험기간과 과목별 수학시험을 그룹으로 보여주는 방향이 좋다.
- SQL 주의: CSS 레이아웃 변경과 원인 조사만 있으므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build`, `npm run test:production` 66개 통과.

### 2026-06-20 P1. 시험관리 중복 표시 방지와 학사일정 학교별 상세
- 상태: 완료
- 사용자 요청: 추천 최종 방향대로 시험관리 중복 표시를 막고, 학사일정 캘린더는 월간 요약과 날짜 상세 학교별 구분으로 정리한다.
- 이번 작업 결과: 새 시험정보 자동생성 ID를 `고사+학교+학년+과목` 기준으로 고정해 교재/출판사 변경으로 새 행이 생기지 않게 했다. 기존 중복 데이터는 삭제하지 않고, 화면 표시와 학사일정 파생 이벤트에서 같은 `examCycle/schoolName/grade/subject` 묶음의 대표 행만 사용한다. 대표 행은 입력값이 더 많은 행, 비어 있는 `_textbook` placeholder가 아닌 행, 최신 수정 행 순서로 고른다. 월간 캘린더 pill 라벨은 학교/학년/과목 요약으로 표시하고, 날짜 상세 모달은 학교별 그룹으로 묶어 시험기간과 수학시험을 구분해 보여준다.
- SQL 주의: 기존 데이터는 삭제/병합하지 않고 앱 표시/파생 로직만 바꾸므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `npm run build`, `npm run test:production` 67개 통과.

### 2026-06-20 P1. 숨김 시험관리 중복 데이터 삭제 준비와 표 간격 축소
- 상태: 완료
- 사용자 요청: 숨김 처리된 시험관리 중복 데이터를 삭제하고, 시험관리 화면 칸 간격이 너무 넓은 문제를 줄인다. 학사일정 6/30 창동고1 시험 데이터 2개 원인은 분석만 한다.
- 이번 작업 결과: 시험정보 중복 삭제용 `DELETE /api/exam-prep-rows?duplicates=true&confirm=true` API를 추가했다. 서버가 화면 표시와 같은 대표 행 선택 기준으로 삭제 후보를 계산하며, `confirm=true` 없이는 동작하지 않는다. 시험관리 표 컬럼 폭과 gap을 줄여 과하게 넓어진 간격을 낮췄다.
- 운영 처리: 배포 후 삭제 API를 호출해 숨김 중복 행 10개를 삭제했다. 삭제된 행은 상계고/용화여고/자운고/정의여고/창동고 기말의 빈 자동생성 중복 후보이며, 사용자가 입력한 수학시험 날짜가 있는 대표 행은 남겼다.
- 원인 분석: 운영 API 기준 창동고 6/30은 수동 학사일정이 아니라 시험관리 파생 중복이다. `2026-1-final_창동고_고1_textbook` 행과 `2026-1-mid_창동고_고1_textbook` 행이 모두 `mathExamDate: 2026-06-30`을 가지고 있고, 학사일정은 전체 시험관리 행에서 파생 이벤트를 만들기 때문에 같은 날짜에 두 개가 표시됐다.
- SQL 주의: 기존 `exam_prep_rows` 테이블의 행 삭제 API만 추가했으며 DB 스키마 변경은 없으므로 Supabase SQL Editor 적용은 필요 없다.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `npm run build`, `npm run test:production` 68개 통과.
### 2026-06-20 P1. 수업 취소 7일 보관과 undo 복구
- 상태: 완료
- 사용자 요청: 수업 취소가 DB에서 단순 숨김으로 끝나지 않고 7일 보관 후 자동 삭제되게 하고, undo 기능이 동작해야 한다.
- 이번 작업 결과: 수업 취소 버튼은 더 이상 `/api/lessons` hard delete를 호출하지 않고, 해당 lesson을 `status: "canceled"`로 저장한다. 달력과 수업일지 목록에서는 기존처럼 취소 수업을 숨기되, DB에는 취소 상태로 남아 undo가 가능하다. undo 시 같은 수업의 취소 저장 요청이 먼저 끝난 뒤 복구 저장을 보내도록 보강해 빠른 취소/되돌리기에서도 순서가 꼬이지 않게 했다.
- 자동삭제: API가 lessons 목록을 조회할 때 `status=canceled`이고 `updated_at`이 7일보다 오래된 수업을 실제 삭제한다. 이때 기존 hard delete 함수가 연결된 lesson records/homeworks까지 함께 정리한다.
- SQL 주의: 기존 `lessons.status`, `updated_at` 컬럼을 사용하므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 68개 통과.

### 2026-06-20 P1. 직전수업 Supabase 저장 실패 원인 보정
- 상태: 완료
- 사용자 확인 요청: 직전수업 4개를 추가했는데 Supabase에 잘 저장됐는지 확인한다.
- 확인 결과: 운영 API `/api/lessons` 기준 총 수업 7개 중 `lessonType: "preExam"` 직전수업은 0개였다. 시험관리 원본의 수학시험 날짜와 학생 매칭은 정상이라 후보 생성 조건은 살아 있었다.
- 원인: 직전수업 생성 payload가 `classTemplateId: "pre_exam"`을 사용했지만, Supabase `lessons.class_template_id`는 `class_templates` 외래키를 가진다. 운영 반 목록에는 `pre_exam` 템플릿이 없어 upsert가 실패할 수 있었다. 일요시험보강도 같은 특수 템플릿 ID를 쓰고 있어 함께 보정했다.
- 이번 작업 결과: 직전수업과 일요시험보강 같은 특수 자동수업은 실제 반 템플릿 ID를 넣지 않고 `classTemplateId`를 비워 저장하도록 변경했다. 저장 시 DB에는 `class_template_id = null`로 들어가 외래키 오류를 피한다.
- SQL 주의: 기존 `lessons.class_template_id` nullable 구조를 그대로 사용하므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 69개 통과.

### 2026-06-20 P1. 자동 수업 후보 전체 표시와 시험기간 내 일요보강 포함
- 상태: 완료
- 사용자 요청: 자동 수업 후보가 8개까지만 보여 6/28 일요보강을 개별 반영할 수 없으므로 전체 후보를 확인할 수 있게 하고, 시험기간이 주말을 끼면 그 주말 일요일까지 일요보강 후보에 포함한다.
- 이번 작업 결과: `generatedLessonPlan.slice(0, 8)` 표시 제한을 제거하고, 후보 목록은 패널 내부 스크롤 영역으로 바꿨다. 이제 후보가 8개를 넘어도 모든 항목의 `이 항목 반영`/`자동생성 제외` 버튼을 확인할 수 있다.
- 일요보강 생성 변경: 기존 시험 종료일 기준 직전 4개 일요일에 더해, 시험기간 시작일~종료일 사이에 포함된 일요일도 후보에 합친다. 정의여고처럼 시험기간이 6/30~7/7이면 6/14, 6/21, 6/28, 7/5 후보가 유지되고, 다른 학교의 6/7 후보와 함께 화면에서 총 5회까지 확인/반영할 수 있다.
- SQL 주의: UI 표시와 프론트 후보 계산 로직 변경만 있으므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 71개 통과.

### 2026-06-20 P1. 일요보강 후보 현재 고사 필터와 저장 실패 표시
- 상태: 완료
- 사용자 요청: 일요보강 데이터가 Supabase에 저장되지 않고 다시 사라지는 것 같으며, 자동 수업 후보에 표시되는 4월 중간고사 일요보강 4항목은 없어야 한다.
- 원인: 자동 수업 후보가 전체 `examPrepRows`를 입력으로 사용해 현재 고사인 `2026-1-final`뿐 아니라 `2026-1-mid` 행까지 함께 계산했다. 그래서 4/12, 4/19, 4/26, 5/3 중간고사 일요보강 후보가 기말고사 작업 중에도 노출됐다.
- 이번 작업 결과: 자동 수업 후보 생성 입력을 현재 고사(`currentExamCycle`) 행으로 제한했다. 기말고사 기간에는 1학기 기말 행만 직전수업/일요보강 후보로 계산된다. 또한 자동 수업 bulk 저장 실패가 콘솔에만 남지 않고 화면 alert로 표시되도록 해, 저장 실패 후 새로고침 때 사라지는 상황을 바로 알 수 있게 했다.
- SQL 주의: 프론트 후보 필터와 저장 실패 표시 변경만 있으므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 73개 통과.

### 2026-06-20 P1. 6/7·6/14 일요보강 삭제 원인 제거
- 상태: 완료
- 사용자 제보: 6/7, 6/14 일요보강 데이터가 다시 삭제됐다.
- 원인: 앱 시작 시 남아 있던 레거시 정리 코드가 `/api/lessons?before=2026-06-19` DELETE를 호출해 6/19 이전 수업을 hard delete했다. 6/7, 6/14 일요보강은 정상 시험대비 수업이지만 날짜가 6/19 이전이라 이 정리 로직에 걸려 삭제됐다. 또한 화면 필터도 `academyOperationalStartDate` 이전 수업을 숨기는 조건이 있어, 저장돼도 일요보강이 숨겨질 수 있었다.
- 이번 작업 결과: 앱 시작 시 과거 수업 hard delete 호출을 제거했다. `preExam`, `examSundayMakeup` 자동 시험 수업은 6/19 이전 날짜여도 활성 수업으로 표시되도록 보정했다.
- SQL 주의: 프론트 삭제 호출/필터 변경만 있으므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 74개 통과.
### 2026-06-20 P1. 6/19 이전 시험수업 처리 정정
- 상태: 완료
- 사용자 정정: 6/19 이전 시험수업을 별도로 표시한다/안 한다는 코드가 필요 없다. 6/19 이전 수업은 운영 DB에서 삭제하면 된다.
- 이번 작업 결과: 직전 변경에서 넣었던 6/19 이전 시험수업 예외 표시/후보 제한 코드를 제거했다. 운영 Supabase에는 `DELETE /api/lessons?before=2026-06-19`를 직접 실행해 6/7, 6/14 일요보강 2건을 삭제했다.
- SQL 주의: 기존 DELETE API 호출과 프론트 코드 정리만 있으므로 Supabase SQL Editor 작업 필요 없음.
### 2026-06-20 P1. 시험관리 행 삭제와 수정 레이아웃 보강
- 상태: 완료
- 사용자 요청: 중간고사 시험일정을 시험관리 탭에서 삭제할 수 있어야 하며, 시험관리 수정 CSS가 1학기 기말고사뿐 아니라 1학기 중간/2학기 고사에서도 동일하게 맞아야 한다.
- 이번 작업 결과: 시험관리 행의 관리 칸에 `삭제` 버튼을 추가했다. 삭제 전 확인창을 띄우고, 확인 시 `DELETE /api/exam-prep-rows?id=...&confirm=true`로 Supabase 행을 삭제한다. 실패하면 로컬 행을 복구하고 화면 alert로 오류를 표시한다.
- 수정 레이아웃: 시험관리 표 컬럼 폭과 전체 min-width를 늘리고, 수학시험 일정 입력 grid 폭을 넓혀 고사 구분과 무관하게 같은 수정 UI가 적용되도록 보강했다.
- SQL 주의: 기존 삭제 API와 `exam_prep_rows` 테이블을 사용하므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 75개 통과.
### 2026-06-20 P1. 시험관리 삭제와 저장된 일요보강 연동
- 상태: 완료
- 사용자 요청: 시험관리에서 중간고사 일정을 삭제했는데, 기존 저장된 6/21 일요보강에 중간고사 데이터가 남아 있다. 시험관리 행 삭제 시 저장된 일요보강 일정도 함께 정리되어야 한다.
- 이번 작업 결과: 시험관리 행 삭제 후 남은 시험관리 행 기준으로 기존 `examSundayMakeup` lesson을 재계산한다. 같은 날짜의 일요보강 근거가 남아 있으면 `sourceLabel`을 갱신하고, 더 이상 근거가 없으면 해당 일요보강 lesson을 삭제한다.
- 운영 처리: Supabase의 `lesson_exam_sunday_makeup_2026-06-21` sourceLabel에서 1학기 중간고사 문구를 제거하고, 현재 남은 1학기 기말고사 학교 목록만 남기도록 갱신했다.
- SQL 주의: 기존 lessons/exam_prep_rows API를 사용하므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 76개 통과.
### 2026-06-20 P1. 일요보강 학교별 블록 시간 입력칸 확대
- 상태: 완료
- 사용자 요청: 일요보강에서 창동고 블록만 토요일로 옮기려는데 시간 입력칸이 작아 값이 제대로 보이지 않는다.
- 이번 작업 결과: 일요보강 학교별 블록 편집 영역의 왼쪽 날짜/시간 칸을 넓히고, 시작/종료 시간 input 최소폭과 높이를 늘렸다. 모바일/좁은 화면에서는 기존처럼 세로 배치가 유지된다.
- SQL 주의: CSS 변경만 있으므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 77개 통과.
### 2026-06-20 P1. 일요보강 블록 캘린더 파생 표시 조건 정리
- 상태: 완료
- 사용자 요청: 블록 저장 후 날짜가 달라진 학교 블록만 별도 캘린더 일정으로 표시하고, 나머지 같은 날짜 블록은 기존 일요시험보강 하나의 행으로 표현한다.
- 이번 작업 결과: `createExamSundayMakeupBlockLessons`의 파생 조건을 날짜 변경 기준으로 단순화했다. 같은 날짜에서 시간/메모만 수정한 블록은 별도 캘린더 pill로 만들지 않고 원본 일요시험보강 pill 안에 남긴다. 날짜가 다른 블록만 별도 가상 lesson으로 파생 표시된다.
- SQL 주의: 프론트 파생 표시 조건 변경만 있으므로 Supabase SQL Editor 작업 필요 없음.
- 검증: `node --check api/routes/coreData.js`, `node --check api/server.js`, `node --check scripts/scenario-tests-production.cjs`, `npm run build`, `npm run test:production` 78개 통과.

### 2026-06-20 P0. 다음 세션 인수인계 문서 생성
- 상태: 완료
- 사용자 요청: 오늘까지 작업한 내용을 검토하고, 내일 할 작업 목록과 다음 대화세션에 추가할 md 파일을 만든다.
- 이번 작업 결과: `docs/session-handoff-2026-06-21.md`를 추가했다. 문서에는 오늘 오류가 많았던 수업메모/알림톡/보충관리/시험관리-일요보강 흐름, 내일 작업 큐, 배포 및 SQL Editor 유의점을 정리했다.
- 내일 우선 확인: Render/Vercel 배포 반영, 알림톡 `compact is not defined` 재발 여부, 보충관리 통합 저장, 알림톡 상태 색상, 수업메모 중복 반영, 직전 수업메모 표시, 일요보강 블록 이동/삭제 지속성.
- SQL 주의: 문서 정리만 했으므로 Supabase SQL Editor 작업 필요 없음.

### 2026-06-20 P2. UI/UX 안정화 전체 작업 계획 문서화
- 상태: 완료
- 사용자 요청: 내일 우선작업 외에 전체 맥락에서 추가로 해야 할 UI/UX 안정화 작업을 Markdown과 PDF로 정리한다.
- 이번 작업 결과: `docs/ui-ux-stabilization-plan-2026-06-21.md`를 추가했다. 같은 내용을 로컬 산출물 `output/pdf/ui-ux-stabilization-plan-2026-06-21.pdf`로 생성하고 PDF 렌더링 PNG를 확인했다.
- Git 주의: repo 규칙상 PDF는 commit하지 않고 로컬 산출물로만 보관한다.
- SQL 주의: 문서 생성만 했으므로 Supabase SQL Editor 작업 필요 없음.
