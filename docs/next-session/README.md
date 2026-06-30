# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 `AGENTS.md`와 이 파일을 먼저 읽고 이어가면 됩니다.

## 시작 문장

```text
E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, 구조분리/리팩터링을 이어가주세요. 특히 App.jsx에 남은 시험분석 최종문서 편집 영역과 수업일지 주변 도메인 로직을 우선순위로 봐주세요.
```

## 현재 기준

- 브랜치: `main`
- 최신 기능 커밋: `bf05a3b` - `Extract lesson journal error boundary`
- 이 문서 갱신 후 HEAD는 달라질 수 있으니 `git log -1 --oneline`으로 확인한다.
- 마지막 확인 시 작업트리: clean
- 새 Supabase SQL: 없음
- 주요 검증: `npm run build`, `npm run test:production` 통과
- 운영 시나리오: total 236, failed 0
- `src/app/App.jsx` 크기: 약 20,569줄까지 축소

## 최근 완료한 구조분리

시험분석 쪽:

- `src/domains/exams/questionItems.js`
- `src/domains/exams/defaults.js`
- `src/domains/exams/outputLayouts.jsx`
- `src/domains/exams/outputPreview.js`
- `src/domains/exams/reportPreview.jsx`
- `src/domains/exams/questionInsight.jsx`
- `src/domains/exams/detailSections.js`
- `src/domains/exams/questionCropView.jsx`
- `src/domains/exams/postSubmissionOptions.js`

수업일지/수업 도메인 쪽:

- `src/domains/lessons/assignmentStatus.js`
- `src/domains/lessons/labels.js`
- `src/domains/lessons/LessonJournalErrorBoundary.jsx`

정적 운영 테스트도 새 모듈들을 함께 읽도록 `scripts/scenario-tests-production.cjs`를 보정했다.

## 꼭 기억할 문제 맥락

시험분석 문항별 분류표:

- 중심 데이터는 `questionItems`가 아니라 `examAnalyses[].questionClassifications`.
- AI가 `classificationRows` 대신 요약 JSON만 주거나 일부 행만 반환하면 진단 박스에서 원인 확인 가능.
- 마지막 안정화 후 0행 파싱 실패 원인은 숨기지 않고 `JSON 파싱`, `행 배열 키`, `부분 행 복구`, `원문 시작` 등으로 드러나게 되어 있다.

수업일지 출결:

- 과거/다른 날짜 출결이 오늘 수업일지에 붙어 보이는 문제를 막는 날짜 mismatch 방어가 들어가 있다.
- 오늘 출결을 찍지 않았는데 등원/하원으로 보이면 `getAttendanceDateMismatch`, `findLessonStudentRecord`, 키오스크 오늘 수업 fallback 금지를 우선 확인한다.

## 다음 우선순위

1. 큰 작업 전 항상 `git status --short`로 clean 확인.
2. `App.jsx`에 남은 시험분석 최종문서 편집/인쇄 컴포넌트 분리 검토.
   - 후보: `ExamFinalDocumentPrint`, `ExamFinalDocumentBuilder`, 관련 block/table/chart/slot editor.
   - 주의: `createExamFinalDocumentFromAnalysis`는 App wrapper가 title/meta/crop payload를 주입하므로, 분리 시 콜백 prop으로 넘기는 편이 안전하다.
3. 수업일지 주변에서 정적 옵션/표시 규칙/작은 helper를 계속 분리.
4. 한 단위마다 `npm run build`, `npm run test:production` 실행.
5. `docs/current-worklog.md` 갱신 후 커밋/푸시.

## 자주 쓰는 명령

```powershell
git status --short
npm run build
npm run test:production
git log --oneline -8
```

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `scripts/scenario-tests-production.cjs`
- `api/routes/examAnalysis.js`
