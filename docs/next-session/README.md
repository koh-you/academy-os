# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 과거 handoff md를 일일이 첨부하지 않아도 되도록, 현재 이어받기에 필요한 내용과 참조 경로를 이 파일에 모았습니다.

## 운영 규칙

- 사용자가 "다음 세션에 넘길 자료", "handoff", "인수인계 자료"를 요청하면 이 `docs/next-session/README.md`를 최신 작업 상태, 최신 커밋, 검증 결과, 다음 작업 후보 기준으로 새로 업데이트한다.
- 다음 세션에는 원칙적으로 이 폴더 하나만 넘기면 되도록 유지한다.

## 다음 세션 시작 문장

아래 문장을 새 세션 첫 메시지에 붙여 넣으세요.

```text
E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, 시험분석 최종 편집본 빌더 이후 작업을 이어가주세요.
```

## 현재 상태

- 브랜치: `main`
- 최신 푸시 커밋:
  - `2aa858c` - `Add exam analysis final editor handoff`
  - `f2e4c75` - `Add editable final exam analysis document builder`
  - `73b01c3` - `Add similar problem metadata to exam question items`
- 검증 완료:
  - `npm run build` 통과
  - `npm run test:production` 통과, total 219, failed 0
- 새 SQL 없음:
  - 이번 시험분석 작업은 기존 `examAnalyses` app_state 문서 안에 저장된다.

## 반드시 알아야 할 구현 요약

### 문항별 유사문항 메타데이터

`questionItems`에 아래 필드를 추가했다.

- `similarProblemNeeded`: `확인 필요`, `필요`, `불필요`
- `similarProblemSource`: 유사문항 출처
- `similarProblemRelation`: `확인 필요`, `숫자변형`, `조건변형`, `유사유형`, `기타`

유사문항 본문 전체는 웹앱에 넣지 않는다. 웹앱에는 유사문항 필요 여부, 출처, 변형 구분 같은 메타데이터만 넣는다.

### 최종 편집본 빌더

시험분석 `산출물 작성` 단계에 `최종 편집본` 빌더를 추가했다.

저장 구조:

```js
finalDocument: {
  version: 1,
  generatedAt: "...",
  updatedAt: "...",
  blocks: [
    { type: "cover" },
    { type: "text" },
    { type: "table" },
    { type: "chart" },
    { type: "flow" },
    { type: "questionSlots" }
  ]
}
```

편집 가능 항목:

- 글 문단 직접 수정
- 표 셀 수정, 행/열 추가
- 차트 데이터 수정 후 막대 그래프 자동 렌더링
- 흐름도 노드 수정/추가/삭제
- 문항별 원문항/유사문항 삽입 슬롯 수정

출력:

- `finalDocument`가 있으면 최종 보고서 미리보기와 PDF 저장/인쇄가 편집본 기준으로 렌더링된다.
- 없으면 기존 자동 리포트로 fallback된다.

## 다음 작업 후보

1. 배포 또는 로컬에서 시험분석 `산출물 작성` 화면을 실제 클릭 검수한다.
2. 최종 편집본의 표 셀, 차트 데이터, 흐름도 노드, 문항 슬롯 수정 후 새로고침 유지 여부를 확인한다.
3. PDF 저장/인쇄 결과를 확인한다.
4. 예시 분석지처럼 A4/인스타 카드뉴스 시각 디자인을 고도화한다.
5. 문항 슬롯에 실제 `questionItems.cropBox` 기반 원문항 크롭 이미지를 렌더링한다.

## 다음 세션에서 주로 볼 코드

- `src/app/App.jsx`
  - `createExamFinalDocumentFromAnalysis`
  - `normalizeExamFinalDocument`
  - `ExamFinalDocumentBuilder`
  - `ExamFinalDocumentPrint`
  - `ExamAnalysisFinalReport`
  - `createExamQuestionItem`
  - `normalizeAiQuestionDrafts`
  - `mergeAiQuestionDrafts`
- `src/app/App.css`
  - `.analysisFinalDocumentBuilder`
  - `.finalDocumentBlock`
  - `.finalDocumentChart`
  - `.finalQuestionSlotCard`
  - print rules under `@media print`
- `api/routes/examAnalysis.js`
  - 시험분석 프롬프트
  - `normalizeQuestionItemsFromAi`
- `scripts/scenario-tests-production.cjs`
  - `35d`, `35i`, `35j`, `35k` 체크

## 필요할 때만 읽는 상세 문서

상세 추적용:

- `docs/current-worklog.md`
- `docs/session-handoff-2026-06-27-exam-analysis-final-editor.md`

시험분석 관련:

- `docs/exam-analysis-api.md`
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
npm run build
npm run test:production
```

문법 확인:

```powershell
node --check api/routes/examAnalysis.js
node --check scripts/scenario-tests-production.cjs
```
