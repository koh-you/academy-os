# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 과거 handoff md를 일일이 첨부하지 않아도 되도록, 현재 이어받기에 필요한 내용과 참조 경로를 이 파일에 모았습니다.

## 운영 규칙

- 사용자가 "다음 세션에 넘길 자료", "handoff", "인수인계 자료"를 요청하면 이 `docs/next-session/README.md`를 최신 작업 상태, 최신 커밋, 검증 결과, 다음 작업 후보 기준으로 새로 업데이트한다.
- 다음 세션에는 원칙적으로 이 폴더 하나만 넘기면 되도록 유지한다.
- 작업 시작 시 `AGENTS.md`, `docs/current-worklog.md`, 이 파일을 먼저 읽는다.

## 다음 세션 시작 문장

아래 문장을 새 세션 첫 메시지에 붙여 넣으세요.

```text
E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, 시험분석 문항별 분류표 MVP 이후 작업을 이어가주세요.
```

## 현재 상태

- 브랜치: `main`
- 최신 푸시 커밋:
  - `24454d8` - `Switch exam analysis to classification table MVP`
- 오늘 주요 검증:
  - `npm run test:production` 통과, total 231, failed 0
  - `npm run build` 통과
  - `node --check api/routes/examAnalysis.js` 통과
  - `node --check api/server.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
- 작업 트리:
  - `git status --short` 기준 깨끗한 상태에서 handoff 갱신 시작
- 최종 시험분석 MVP 저장 경로:
  - `examAnalyses[].questionClassifications`
  - 서버 AI 응답 배열명은 `classificationRows`
- 오늘 마지막 시험분석 작업에는 새 Supabase SQL 없음:
  - `questionClassifications`는 기존 `app_state`의 `examAnalyses` 문서 안에 저장된다.

## 오늘 작업 요약

### 시험분석 MVP 방향 전환

- 기존 `questionItems`/문항카드 중심 흐름을 새 MVP의 중심에서 제외했다.
- 보이는 문항 검수 화면을 `문항별 분류표 MVP`로 교체했다.
- 사람이 최종 수정해야 하는 대상은 카드가 아니라 표 행이다.
- AI는 시험지 원본, OCR/텍스트, 쎈 유형 기준표를 보고 문항별 분류표 초안을 채운다.

### 새 문항별 분류표 흐름

1. 시험지 PDF/이미지 업로드
2. 첫 장 문항 메타데이터 확인
3. `확인 후 분류표 행 생성`
4. `AI 분류표 생성`
5. 사람이 표에서 단원, 쎈 주유형/보조유형, 난이도, 배점, 역할, 검수 메모 확인
6. 분류표 기반으로 단원별 출제표, 쎈 유형별 분류표, 대비전략 요약 생성
7. 산출물 작성/최종 편집본으로 연결

### 새 API

- 추가 endpoint:
  - `POST /api/ai/exam-question-classification`
- 새 서버 함수:
  - `runExamQuestionClassification`
  - `buildQuestionClassificationPrompt`
  - `normalizeClassificationRowsFromAi`
  - `extractClassificationRowsFromParsed`
  - `normalizeQuestionClassificationResult`
  - `runOpenAiQuestionClassification`
  - `runAnthropicQuestionClassification`
- 요청 payload 핵심:
  - `classificationRows`
  - `questionClassifications`
  - `classificationTargetCount`
  - `pageImages`
  - `rawExamText`
  - `examPrepContext`
- 응답 핵심:
  - `fields.classificationRows`
  - `fields.questionClassifications`
  - `classificationRowCount`
  - `pageImageCount`
  - `warning`

### 프론트 변경

- `문항 검수` 단계의 보이는 UI:
  - `문항별 분류표 MVP`
  - `현재 시험지/연도`
  - `첫 장 기준 문항 수`
  - `확인 후 분류표 행 생성`
  - `AI 분류표 생성`
  - `문항 행 추가`
  - `PDF·이미지 원본 추가`
- 표에서 직접 수정하는 필드:
  - 문항
  - 페이지
  - 배점
  - 형식
  - 단원
  - 쎈 주유형
  - 쎈 보조유형
  - 난이도
  - 역할
  - 검수 메모
- 새 프론트 helper:
  - `createExamQuestionClassificationRow`
  - `normalizeExamQuestionClassificationRows`
  - `createExamQuestionClassificationRowsFromCount`
  - `mergeExamQuestionClassificationDrafts`
  - `classificationRowsToInsightItems`
  - `buildClassificationPageImages`
  - `requestExamQuestionClassificationDraft`

## 반드시 알아야 할 판단

- `questionItems`는 새 MVP의 중심 데이터가 아니다.
- 레거시 `questionItems` 함수와 숨겨진 크롭/문항카드 JSX 일부는 빌드 안정성을 위해 아직 남아 있다.
- 보이는 UI와 새 AI 경로는 `questionClassifications`/`classificationRows` 중심이다.
- 다음 정리 작업에서 실제 호출되지 않는 레거시 문항카드/크롭 코드를 단계적으로 삭제할 수 있다.
- 쎈 유형 기준은 `api/data/ssenTypeIndex.json`을 사용한다.
- 앱에는 원문 문제 본문을 대량 저장하지 않고, 단원/유형/풀이행동/태그/검수 포인트 메타데이터 중심으로 저장한다.

## 오늘 같이 처리한 다른 큰 흐름

### 쎈 유형 기준표

- 여러 쎈 PDF에서 유형명을 추출해 CSV/JSON 기준표로 연결했다.
- 시험분석 AI 프롬프트가 쎈 유형표를 참고해 `단원 + 쎈 주유형 + 보조유형 1~2개`를 매칭하도록 방향을 잡았다.
- 장기 목표:
  - 단원별 쎈 유형 노드맵
  - 학생별 유형 이해/미완성/망각/실수 체크
  - 유형별 영상/교재/헷갈리는 문항 묶음 연결

### 알림관리

- 개별 발송에서 반 선택 후 학생 목록이 뜨지 않던 문제를 수정했다.
- `선택`, `전체`, `학부모`, `학생` 모드에서도 학생을 직접 고를 수 있게 했다.
- 공지 예약 실패/로딩/과거 예약 상태를 정리했다.
- 21:00 공지 예약 8건이 발송 큐에 들어가지 않던 원인을 보정했다.

### 장기 평가 자동화 지침

- 누적테스트뿐 아니라 단원테스트, 주간테스트, 재시험까지 포함하는 방향을 작업 지침에 반영했다.
- 장기 데이터 축:
  - 학생별
  - 단원별
  - 쎈 유형별
  - 오답 주제별
  - 재시험/재채점 이력

## 다음 작업 후보

1. 운영 배포 반영 후 실제 시험지 PDF로 `문항별 분류표 MVP` 클릭 검수
2. `AI 분류표 생성`이 실제 PDF 페이지 이미지와 OCR 텍스트를 잘 보내는지 운영 API 로그 확인
3. AI 응답이 `classificationRows`를 충분히 채우는지 확인하고 프롬프트 조정
4. 보이는 UI에서 문항카드/크롭 관련 레거시 흔적 추가 제거
5. `questionItems` 레거시 함수 중 실제 호출 경로 없는 부분 삭제
6. 최종 편집본 빌더가 `questionClassifications` 기반 표/차트/흐름도를 더 잘 쓰도록 개선
7. 예시 분석지처럼 A4 분석지 레이아웃, 인스타 카드뉴스 레이아웃을 실제 출력물 수준으로 다듬기
8. 쎈 유형 노드맵 학습 화면 설계 시작

## 다음 세션에서 주로 볼 코드

- `src/app/App.jsx`
  - `ExamAnalysisCenter`
  - `createExamQuestionClassificationRow`
  - `normalizeExamQuestionClassificationRows`
  - `createExamQuestionClassificationRowsFromCount`
  - `mergeExamQuestionClassificationDrafts`
  - `classificationRowsToInsightItems`
  - `buildClassificationPageImages`
  - `requestExamQuestionClassificationDraft`
  - `ExamQuestionInsightTables`
  - `createExamFinalDocumentFromAnalysis`
- `src/app/App.css`
  - `.tableInlineInput`
  - `.tableInlineTextarea`
  - `.analysisQuestionStage`
  - `.analysisQuestionSummaryPanel`
- `api/routes/examAnalysis.js`
  - `buildQuestionClassificationPrompt`
  - `runExamQuestionClassification`
  - `normalizeClassificationRowsFromAi`
  - `extractClassificationRowsFromParsed`
  - `normalizeQuestionClassificationResult`
  - `buildSsenTypePromptSection`
- `api/server.js`
  - `/api/ai/exam-question-classification`
- `scripts/scenario-tests-production.cjs`
  - `35i`
  - `35i-2`
  - `35i-4`

## 필요할 때만 읽는 상세 문서

상세 추적용:

- `docs/current-worklog.md`

시험분석 관련:

- `docs/exam-analysis-api.md`
- `docs/session-handoff-2026-06-27-exam-analysis-final-editor.md`
- `docs/session-handoff-2026-06-26-final.md`
- `docs/session-handoff-2026-06-26-alimtalk.md`

프로젝트/운영 참고:

- `docs/home-codex-setup.md`
- `docs/architecture.md`
- `docs/data-model.md`
- `docs/responsive-layout-principles.md`
- `docs/ai-api-setup.md`

## 검증 명령

```powershell
npm run test:production
npm run build
```

문법 확인:

```powershell
node --check api/routes/examAnalysis.js
node --check api/server.js
node --check scripts/scenario-tests-production.cjs
```

상태 확인:

```powershell
git status --short
git log -1 --pretty=format:"%h %ad %s" --date=local
```
