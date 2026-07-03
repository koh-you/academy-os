# Next Session Handoff

이 폴더 하나만 다음 Codex 프로젝트 세션에 넘기면 됩니다. 새 세션은 `AGENTS.md`와 이 파일을 먼저 읽고, `git status --short`, `git log -1 --oneline`, `docs/current-worklog.md`를 확인한 뒤 이어가면 됩니다.

## 시작 프롬프트

```text
E:\academy-os 프로젝트 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, git status와 최신 worklog를 확인해 주세요.

이번 이어받을 핵심은 시험분석 PDF AI 파이프라인입니다. 사용자는 "대화세션에 PDF를 넣으면 분석이 되는데, 웹앱 API 호출에서는 왜 계속 5문항/로딩/부정확한 분석이 나오는가"를 문제 삼았습니다. 단발 API 호출이 아니라 대화세션처럼 PDF 텍스트, 렌더링 이미지, 문항 수 판독, 누락 검수, 재요청이 단계별로 보이는 구조로 바꾸는 것이 다음 목표입니다.
```

## 현재 기준

- 브랜치: `main`
- 최신 커밋: `f85c270 Use PDF question count for classification`
- 이전 관련 커밋:
  - `146ef5b Show exam analysis AI progress`
  - `25f5727 Map AI prompt settings to call sites`
  - `e3da5db Send exam analysis PDFs to AI vision`
- 마지막 확인 시 작업트리: clean
- 검증:
  - `node --check api/routes/examAnalysis.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
  - `npm run test:production` 통과: total 245, failed 0
  - `npm run build` 통과, 기존 Vite chunk size warning만 있음
- 이번 시험분석 작업에 새 Supabase SQL edit 없음. 기존 `app_state.examAnalyses` 저장 구조 안에서 해석/표시/요청값을 보강했다.

## 사용자 의도

사용자는 단순히 "24문항으로 숫자 보정"을 원하는 것이 아니다.

원하는 것은 다음이다.

- 대화세션에 PDF를 넣었을 때처럼 웹앱 API도 실제 PDF를 읽고 분석해야 한다.
- AI가 실제로 분석 중이면 끊으면 안 된다.
- 사람이 중간 과정을 확인할 수 있어야 한다.
- 설정 화면의 AI 프롬프트와 실제 호출 프롬프트가 매핑되어야 한다.
- 기존 mock 값이나 오래된 5문항 카드가 실제 PDF보다 우선하면 안 된다.

중요: `24`는 고정 기준값이 아니다. 제보 PDF에서 로컬 텍스트 추출상 1~24번 문항번호가 감지된 결과일 뿐이다. 다른 PDF는 각 파일에서 감지되는 `1~N`의 `N`을 사용해야 한다.

## 왜 대화세션에서는 되고 웹앱 API에서는 안 됐나

대화세션은 사람이 보는 작업 환경에 가깝다.

- 첨부 PDF를 직접 읽는다.
- 텍스트 추출이 깨지면 페이지 이미지를 다시 본다.
- 문항 수가 이상하면 다시 확인한다.
- 누락 문항이 보이면 재검토한다.
- 중간 판단을 사람이 교정할 수 있다.

반면 웹앱 API는 기존에 사실상 단발 호출이었다.

- PDF 추출 텍스트, 일부 이미지, 기존 카드, 기존 mock 값, 설정 프롬프트를 한 번에 보냈다.
- 기존 저장값에 `mock 분석: 현재 문항 카드 수 기준`과 5문항이 남아 있으면 그 값이 PDF 원본보다 강하게 작동했다.
- AI가 5문항 기준으로 요청을 받으면 PDF가 24문항이어도 5문항만 처리하는 흐름이 생겼다.
- API에는 대화세션처럼 "문항 수 판독 -> 누락 확인 -> 재요청"의 루프가 부족했다.

따라서 문제는 프로젝트 여부가 아니라 AI 작업 파이프라인 설계 문제다.

## 이번 세션에서 고친 것

### 1. PDF 이미지를 첫 시험분석 AI 호출에 포함

- 원본 입력의 `AI 분석 시작` 클릭 시 PDF/이미지 원본을 최대 8페이지까지 렌더링해 `pageImages`로 `/api/ai/exam-analysis`에 보낸다.
- 서버는 OpenAI/Claude 멀티모달 입력에 페이지 이미지를 포함한다.
- `/api/ai/exam-analysis` body limit을 18MB로 확장했다.
- 업로드 원본이 있는 요청은 mock provider로 가짜 분석을 만들지 않고 실제 AI 제공자 선택 오류를 반환한다.

### 2. AI 프롬프트 설정과 실제 호출 매핑

설정 > AI 프롬프트에서 각 프롬프트가 어느 실제 버튼/API/server prompt builder로 들어가는지 표시한다.

- 코멘트 AI: 수업일지 학생별 코멘트 `AI 수정` -> `/api/ai/comment-polish` -> `buildCommentPrompt`
- 시험 후 총평 맞춤법 AI: 시험관리 총평 모달 `AI 수정` -> `/api/ai/comment-polish` -> `buildCommentPrompt` + `polishMode: spellingOnly`
- 수업메모 AI: 수업 준비 메모 AI 정제 -> `/api/ai/comment-polish` -> `buildCommentPrompt`
- 알림관리 공지 AI: 공지 작성 AI 수정 -> `/api/ai/comment-polish` -> `buildCommentPrompt`
- 시험분석 AI: 원본 입력 `AI 분석 시작` -> `/api/ai/exam-analysis` -> `buildExamAnalysisPrompt`

미연결 `AI 변형문항` 프롬프트/모델 설정은 제거했고, 저장된 오래된 키도 기본 키 기준 정규화에서 빠지게 했다. 깨진 시험분석 프롬프트는 기본값으로 자동 복구한다.

### 3. 분석 중 진행 로그 표시

타임아웃으로 요청을 끊지 않았다.

대신 분석지에 `aiProgressLog`를 저장하고 원본 입력 화면에 `AI 분석 진행` 패널을 추가했다.

표시되는 단계:

- 원본 확인
- PDF/이미지 준비 완료 또는 실패
- 서버 분석 요청
- 사용 AI 제공자/모델
- 이미지 포함 페이지 수
- AI 제공자 응답 대기
- 경과 시간
- 서버 상태 확인 메시지
- AI 응답 반영 또는 실패

### 4. 저장된 mock 5문항에 묶이는 문제 수정

원인: 저장 분석지에 남아 있던 mock `questionComposition.total=5`와 기존 분류행 5개가 PDF 원본보다 먼저 문항 수 기준으로 사용됐다.

수정:

- 프론트에서 mock 근거의 `questionComposition`은 PDF 원문 감지값보다 우선하지 않게 했다.
- PDF 추출 텍스트에서 `1번~N번`, `1. ... N.` 같은 연속 문항번호를 감지해 해당 시험지의 동적 목표 문항 수로 사용한다.
- 문항 수 입력, 누락 후보, AI 분류표 생성 목표 수가 기존 5행보다 PDF 원문 감지값을 먼저 보도록 순서를 바꿨다.
- 서버도 오래된 `questionTargetCount=5`가 넘어와도 PDF 추출 텍스트에서 더 큰 `N`이 감지되면 `/api/ai/exam-analysis`, `/api/ai/exam-question-info-text`, `/api/ai/exam-question-classification`에서 목표 문항 수를 `N`으로 확장한다.

제보 PDF `C:\Users\force\Desktop\[자운고] 2026 1-1 기말 공통수학1.pdf`는 로컬 추출 기준 5페이지, 문항번호 1~24가 감지됐다. 하지만 24는 이 파일의 결과일 뿐 코드 기준값이 아니다.

## 다음 세션의 핵심 작업

다음 목표는 시험분석 API를 "단발 호출"에서 "대화세션 같은 단계별 분석 작업"으로 바꾸는 것이다.

우선순위:

1. 문항 수 판독 단계를 독립 API/단계로 분리
   - 입력: PDF 텍스트 + PDF 렌더링 이미지
   - 출력: 감지 문항 수, 근거, 페이지별 문항 범위, 신뢰도
   - 화면: 사람이 문항 수와 근거를 확인하고 수정 가능

2. 문항별 분류표 생성은 확정된 `N`을 기준으로 실행
   - `1~N번` 분류행 골격을 먼저 만든다.
   - AI는 골격을 채우되, 번호를 줄이거나 재번호 매기지 못하게 한다.

3. 누락 문항 자동 검수와 재요청
   - AI 응답에서 빠진 번호를 자동 계산한다.
   - 누락 번호만 `/api/ai/exam-question-classification`에 재요청한다.
   - 재요청 결과와 실패 사유를 화면에 남긴다.

4. PDF 이미지 처리 상태를 더 명확히 표시
   - 어떤 페이지 이미지가 AI에 들어갔는지
   - 몇 페이지까지 렌더링됐는지
   - 이미지 준비 실패 시 텍스트만으로 진행 중인지

5. 기존 저장 분석지 정리 UX
   - mock 근거가 남은 분석지는 화면에서 "이전 mock 기준값이 무시됨" 또는 "PDF 기준으로 다시 판독 필요" 표시
   - 필요하면 "문항 수 재판독" 버튼 추가

## 주의할 점

- 사용자는 임시 숫자 보정이나 강제 타임아웃을 원하지 않는다.
- AI가 실제로 분석 중이면 요청을 끊으면 안 된다.
- 진행 상태를 보여주고, 중간 근거를 사람이 확인할 수 있어야 한다.
- PDF 텍스트 추출은 수식/폰트 때문에 깨질 수 있다. 이미지 렌더링 판독이 반드시 같이 필요하다.
- 기존 카드 수, mock 값, 오래된 저장값은 원본 PDF보다 우선하면 안 된다.
- 프롬프트 설정 화면에 보이는 프롬프트와 실제 API 호출 프롬프트 매핑이 계속 유지되어야 한다.

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/app/App.css`
- `api/routes/examAnalysis.js`
- `api/server.js`
- `src/domains/exams/analysisState.js`
- `src/domains/exams/defaults.js`
- `src/domains/exams/sourceMedia.js`
- `src/domains/exams/questionClassification.js`
- `scripts/scenario-tests-production.cjs`

## 자주 쓰는 명령

```powershell
git status --short
git log --oneline -8
node --check api/routes/examAnalysis.js
node --check scripts/scenario-tests-production.cjs
npm run test:production
npm run build
```
