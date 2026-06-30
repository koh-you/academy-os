# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 과거 handoff md를 일일이 첨부하지 않아도 되도록, 현재 이어받기에 필요한 내용과 참조 경로를 이 파일에 모았습니다.

## 운영 규칙

- 작업 시작 시 `AGENTS.md`, `docs/current-worklog.md`, 이 파일을 먼저 읽는다.
- 사용자가 "다음 세션에 넘길 자료", "handoff", "인수인계 자료"를 요청하면 이 파일을 최신 작업 상태, 최신 커밋, 검증 결과, 다음 작업 후보 기준으로 다시 업데이트한다.
- 다음 세션에는 원칙적으로 이 폴더 하나만 넘기면 되도록 유지한다.
- Supabase 저장 경로를 먼저 확인한다. 프론트-only/localStorage-only 운영 데이터가 있으면 기능 확장보다 저장 경로를 먼저 보강한다.
- 작업 완료 후 검수, `docs/current-worklog.md` 반영, 커밋/푸시까지 진행한다.

## 다음 세션 시작 문장

아래 문장을 새 세션 첫 메시지에 붙여 넣으세요.

```text
E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, 시험분석 문항별 분류표와 수업일지 출결 안정화 이후 작업을 이어가주세요.
```

## 현재 상태

- 브랜치: `main`
- 최신 푸시 커밋:
  - `6482869` - `Improve exam classification table readability`
- 직전 핵심 커밋:
  - `f2370ee` - `Improve exam classification parse diagnostics`
  - `5453869` - `Prevent attendance from attaching to future lessons`
- 최신 작업 트리:
  - 이 handoff 갱신 전 `git status --short` 기준 깨끗한 상태였다.
- 배포 대상:
  - Frontend: https://academy-os-blue.vercel.app
  - Backend API: https://koh-you-math-academy-os-api.onrender.com
- 이번 작업에는 새 Supabase SQL 없음:
  - 시험분석 분류표는 기존 `app_state`의 `examAnalyses[].questionClassifications`에 저장된다.
  - 수업일지 출결 보정도 기존 수업/출결 저장 흐름을 사용했다.

## 최신 검증 기록

- `6482869` 기준:
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
  - `npm run test:production` 통과, total 235, failed 0
  - `npm run build` 통과
- `f2370ee` 기준:
  - `node --check api/routes/examAnalysis.js` 통과
  - `node --check scripts/scenario-tests-production.cjs` 통과
  - `git diff --check` 통과
  - `npm run test:production` 통과, total 234, failed 0
  - `npm run build` 통과
- `5453869` 기준:
  - `npm run test:production` 통과, total 234, failed 0
  - `npm run build` 통과

## 시험분석 문항별 분류표 현황

### 현재 중심 흐름

- 현재 MVP의 중심 데이터는 `questionItems`가 아니라 `examAnalyses[].questionClassifications`다.
- 서버 AI 응답 배열명은 `classificationRows`다.
- 화면의 검수 대상도 문항카드가 아니라 문항별 분류표 행이다.
- 원문 문제 본문을 대량 저장/노출하지 않고, 단원, 쎈 주유형, 보조유형, 난이도, 배점, 역할, 검수 메모 중심으로 저장한다.

### 최근 원인 분석과 수정

- 사용자가 "AI 분류표 생성"을 눌렀을 때 0/22행으로 보이던 원인은 AI가 `classificationRows` 배열 대신 `classificationSummary` 요약 JSON으로 시작하거나, JSON을 끝까지 닫지 못한 응답을 반환한 것이었다.
- 기존 진단은 이 상황을 `AI 원문: 0자`처럼 보여 원인을 가렸다.
- 현재는 실패 시 다음 정보를 화면에 노출한다.
  - JSON 파싱 가능 여부
  - AI 원문 길이
  - 이미지 입력 장수
  - 상위 키
  - 행 배열 키 감지 여부
  - JSON 형태
  - 분류 후보 경로
  - 부분 행 복구 여부
  - summary-only 또는 truncated 판단
  - 원문 시작부
- 서버는 불완전한 `classificationRows: [` 블록에서도 가능한 행을 부분 복구하도록 보강했다.
- 마지막 실제 테스트에서는 22문항 중 20행이 생성되었다. 21~22번은 AI가 응답하지 않아 기본 뼈대 행으로 남았고, 화면에는 `20/22` 경고가 표시되었다.

### 최근 가독성 수정

- 검수 표는 넓은 테이블로 유지하고 가로 스크롤을 허용했다.
- 쎈 주유형/보조유형 칸은 긴 코드가 잘리지 않도록 2줄 입력 영역으로 바꿨다.
- 최종 분석지의 문항별 분류표는 10열 원본 표 대신 6열 압축 표로 생성한다.
- 기존 저장된 10열 최종 편집본도 렌더/인쇄 시 압축 표로 자동 변환되도록 했다.
- CSS는 `word-break: keep-all` 중심으로 바꿔 한글이 한 글자씩 세로로 찢어지는 문제를 줄였다.

### 다음 세션 시험분석 확인 기준

- Vercel/Render 배포가 최신 커밋까지 반영됐는지 먼저 확인한다.
- 같은 PDF로 다시 테스트한다.
  - 22행 모두 생성되면 행별 단원/쎈 유형/배점/난이도/역할을 검수한다.
  - 다시 20/22가 나오면 파싱 실패가 아니라 AI가 20행만 반환한 상태인지 진단 박스의 `부분 행 복구`, `행 배열 키`, `원문 시작`을 확인한다.
  - 21~22번이 비어 있으면 사람이 직접 채우거나, 반복 발생 시 프롬프트/모델 응답 길이 제한을 추가 조정한다.
- 페이지 번호가 모두 1로 잡히거나 배점이 추정값처럼 보이면 원본 PDF 기준으로 수동 검수한다.
- 최종 편집본에서 아직 오래된 표가 보이면 `최종 편집본 만들기`를 다시 누른다. 기존 저장 문서도 렌더 단계에서 압축 변환되지만, 새 생성본이 가장 확실하다.
- 장기적으로는 legacy `questionItems`/문항카드 코드를 줄이고 분류표 중심 데이터 흐름으로 정리할 수 있다.

## 수업일지 출결 현황

### 원인

- 출결 키오스크에서 오늘 수업이 없을 때 미래/최근 수업으로 fallback하는 흐름이 있었다.
- 그 결과 사용자가 오늘 출결을 찍지 않았는데도 2026-06-27 출결이 2026-06-29 또는 2026-07-10 수업일지에 붙어 보였다.

### 수정

- 오늘 수업이 없으면 키오스크가 미래 수업에 출결을 붙이지 않도록 막았다.
- 수업일지 저장 시 출결 timestamp 날짜와 수업 날짜가 다르면 경고하고, 저장 과정에서 해당 mismatch 출결을 pending으로 정리한다.
- 운영 데이터에서 확인된 mismatch 4건을 정리했다.
  - 2026-06-29 창동고 직전수업: 김룡기, 최선호
  - 2026-07-10 월수금 4-7반: 김예나, 조윤빈
- 정리 후 mismatch count 0을 확인했다.

### 다음 세션 수업일지 확인 기준

- 오늘 날짜 수업일지에서 출결을 새로 찍지 않은 학생이 `하원/등원`으로 보이지 않는지 확인한다.
- 출결 키오스크에서 오늘 수업이 없는 반/학생을 선택했을 때 미래 수업에 출결이 붙지 않는지 확인한다.
- 날짜가 다른 출결이 다시 보이면 화면 경고와 저장 후 정리 동작을 우선 확인한다.

## 주요 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `api/routes/examAnalysis.js`
- `public/app.js`
- `public/styles.css`
- `scripts/scenario-tests-production.cjs`

## 이어받을 우선순위

1. 최신 배포 반영 확인 후 시험분석 문항별 분류표를 같은 PDF로 재테스트한다.
2. 분류 행이 22/22인지, 아니면 AI 응답 자체가 20/22인지 진단 박스로 구분한다.
3. 최종 분석지/인쇄 화면에서 문항별 분류표가 읽을 수 있는 압축 표로 보이는지 확인한다.
4. 수업일지에서 오늘 출결 미입력 학생이 과거 출결 때문에 등원/하원으로 보이지 않는지 확인한다.
5. 이후에도 반복되는 문제만 좁혀서 프롬프트, 파서, 저장 경로 순으로 수정한다.
