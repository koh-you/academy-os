# Session Handoff - 2026-06-27 Exam Analysis Final Editor

## 다음 세션에서 먼저 읽을 파일

1. `AGENTS.md`
2. `docs/current-worklog.md`
3. `docs/session-handoff-2026-06-27-exam-analysis-final-editor.md`
4. `docs/exam-analysis-api.md`
5. 관련 코드: `src/app/App.jsx`, `src/app/App.css`, `api/routes/examAnalysis.js`, `scripts/scenario-tests-production.cjs`

## 현재 상태 요약

- 브랜치: `main`
- 최신 푸시 커밋:
  - `f2e4c75` - `Add editable final exam analysis document builder`
  - `73b01c3` - `Add similar problem metadata to exam question items`
- 빌드/검증:
  - `npm run build` 통과
  - `npm run test:production` 통과, total 219, failed 0
- SQL 변경 없음:
  - 이번 작업은 기존 `examAnalyses` app_state 문서 안에 `questionItems` 필드 확장과 `finalDocument` 필드 추가로 처리했다.

## 이번 세션 핵심 구현

### 1. 문항별 유사문항 메타데이터

유사문항 본문 전체를 웹앱에 저장하지 않고, 문항별 `questionItems`에 다음 메타데이터만 저장하도록 구현했다.

- `similarProblemNeeded`: `확인 필요`, `필요`, `불필요`
- `similarProblemSource`: 유사문항 출처 메모
- `similarProblemRelation`: `확인 필요`, `숫자변형`, `조건변형`, `유사유형`, `기타`

반영 위치:

- 문항별 인사이트 폼에서 직접 수정 가능
- AI 문항 초안 응답/서버 정규화/프론트 병합 로직에 반영
- `부교재·유사문항 활용` 표와 문항별 강사 코멘트 텍스트에 반영
- 프롬프트에 “유사문항 본문이 아니라 메타데이터만 넣는다”는 규칙 추가

### 2. 최종 편집본 빌더

시험분석 `산출물 작성` 단계에 `최종 편집본` 빌더를 추가했다.

저장 구조:

```js
finalDocument: {
  version: 1,
  generatedAt: "...",
  updatedAt: "...",
  blocks: [
    { type: "cover", ... },
    { type: "text", ... },
    { type: "table", ... },
    { type: "chart", ... },
    { type: "flow", ... },
    { type: "questionSlots", ... }
  ]
}
```

편집 가능 항목:

- 글 문단: textarea로 직접 수정
- 표: 셀 수정, 행 추가, 열 추가, 행 삭제
- 차트: 항목/값/비고 수정 시 막대 차트 자동 재렌더링
- 흐름도: 노드 제목/상세 수정, 노드 추가/삭제
- 문항 삽입 슬롯: 원문항 슬롯, 유사문항 슬롯, 유사문항 필요 여부/출처/변형 구분, 문항 코멘트 수정

출력 방식:

- `finalDocument`가 있으면 `최종 보고서 미리보기`와 `PDF로 저장/인쇄`가 편집본 기준으로 렌더링된다.
- `finalDocument`가 없으면 기존 자동 리포트로 fallback된다.

## 현재 한계와 다음 구현 후보

### 1. 최종 편집본의 시각 디자인 고도화

현재 빌더는 기능 중심 MVP다. 다음 세션에서는 사용자가 예시로 보여준 인스타/A4 분석지처럼 다음을 다듬는 것이 좋다.

- A4 세로 분석지 레이아웃
- 인스타 카드뉴스 1080x1350 레이아웃
- 표/차트 색상과 간격
- 문항 슬롯의 실제 출력 크기
- 페이지 단위 분리
- 표지/하단 `TEACHER's COMMENT` 디자인

### 2. 문항 크롭 이미지와 최종 슬롯 연결

현재 문항 슬롯은 “원문항 삽입 영역”, “유사문항 삽입 영역” 텍스트 슬롯 중심이다.

다음 단계 후보:

- `questionItems.cropBox`와 PDF/image 원본을 이용해 최종 편집본에 실제 원문항 크롭 이미지 렌더링
- 문항 슬롯에서 원문항 이미지 표시/숨김 선택
- 유사문항은 공백 유지, 이미지 업로드, 또는 외부 HWP/PDF에서 수동 삽입할 수 있는 슬롯 제공

### 3. 편집본 저장 검수

현재 `finalDocument`는 기존 app_state 흐름을 타도록 구현했다. 다음 세션에서 실제 운영 검수 필요:

- 새로고침 후 편집본 유지 확인
- 다른 기기/재로그인 후 유지 확인
- `편집본 다시 생성` 시 기존 편집본 덮어쓰기 확인창 동작 확인
- 최종 보고서 PDF 인쇄 결과 확인

### 4. AI 초안 품질 개선

문항 수/문항 구성/문항별 배점·단원·난이도는 AI 초안과 사람 검수의 분리 구조가 잡혀 있다.

다음 단계 후보:

- 실제 학교별 PDF 1개년/3개년으로 프롬프트 품질 테스트
- `questionComposition`과 `questionItems` 불일치 케이스 확인
- 문항별 유사문항 메타데이터가 AI에서 충분히 채워지는지 확인
- “원문항 비교”와 “유사문항 필요 여부”를 AI가 과하게 판단하지 않도록 보수화

## 다음 세션 추천 작업 순서

1. 로컬 또는 배포 URL에서 시험분석 `산출물 작성` 화면을 열고 최종 편집본 UI를 실제로 클릭 검수한다.
2. 표 셀 수정, 차트 데이터 수정, 흐름도 노드 수정, 문항 슬롯 수정 후 새로고침해 저장 유지 여부를 확인한다.
3. `최종 보고서 미리보기`와 `PDF로 저장/인쇄` 결과를 확인한다.
4. 시각 디자인을 예시 분석지 기준으로 조정한다.
5. 문항 크롭 이미지를 최종 문항 슬롯에 실제로 렌더링하는 작업으로 넘어간다.

## 검증 명령

```powershell
npm run build
npm run test:production
```

필요 시 문법 확인:

```powershell
node --check api/routes/examAnalysis.js
node --check scripts/scenario-tests-production.cjs
```

## MD 파일 모음

필수:

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/session-handoff-2026-06-27-exam-analysis-final-editor.md`
- `docs/home-codex-setup.md`

시험분석 관련:

- `docs/exam-analysis-api.md`
- `docs/session-handoff-2026-06-26-final.md`
- `docs/session-handoff-2026-06-26-alimtalk.md`

운영/검수 참고:

- `docs/architecture.md`
- `docs/data-model.md`
- `docs/responsive-layout-principles.md`
- `docs/ai-api-setup.md`
