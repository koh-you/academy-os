# Academy OS 섹션 머리말·작업 바 인벤토리 — 2026-07-29

## 조사 결과

- JSX `sectionHeader` 참조: 59개
- 밀도 변형: 기본 18개, `slim` 36개, `compact` 5개
- 별도 `*Toolbar`/`*Actions` 클래스: 71종
- 가장 큰 집중 파일: `src/app/App.jsx` 39개
- 도메인 파일 참조: 시험관리 3개, 학사일정 3개, 시험분석 미리보기 2개, 정산 4개, 특강관리 2개, 학생 포털 4개, 학부모 응대 1개, 학생 프로파일 1개

## 위험도별 이관 단위

| 단위 | 범위 | 보존 계약 | 사람 gate |
| --- | --- | --- | --- |
| UI-2E-1 | 읽기 전용 요약, 설명, 건수 badge | 완료 — 표시 문자열, 집계값, row 선택 callback | 없음. 배포 후 시각 검수 누적 |
| UI-2E-2 | 검색, 필터, 탭 인접 선택·보기 도구 | 완료 — state setter, normalization, 결과 집합 | 없음. 결과 건수 정적 대조 |
| UI-2E-3A | 저장 전 로컬 draft, 접힘, 모달 열기 행동 | 로컬 state setter와 draft 보존 | 없음. 실제 저장 실행 안 함 |
| UI-2E-3B | 저장, 삭제, 취소, 발송 행동 작업 바 | callback 인자·disabled·상태·외부 side effect 분리 | 실제 행동은 실행하지 않음. 구조 검수로 부족한 항목만 독립 gate |

현재 원시 JSX `sectionHeader` 잔여 수는 40개다.

## 파일별 전수 목록

| 파일 | 참조 수 | 화면군 | 분류 |
| --- | ---: | --- | --- |
| `src/app/App.jsx` | 39 | 알림, 시험분석 단계, 리마인더, 수업/수업일지, 시험 후 제출, 반관리, 수업연구, AI 도구, 보충, 오답, 자료/보고서 | UI-2E-1~3으로 callback 위험도에 따라 분리 |
| `src/domains/tests/TestManagerPanels.jsx` | 3 | 응시 기록, 최근 회차, 학생 이력 | 최근 회차는 2E-1, 나머지는 2E-2/3 |
| `src/domains/schoolCalendar/SchoolCalendarComponents.jsx` | 3 | 월간 학사 개요, 일정 입력 묶음 | 개요는 2E-1, 입력 행동은 2E-3 |
| `src/domains/exams/ExamAnalysisFinalPreviewPanel.jsx` | 2 | 빈/정상 최종 미리보기 | 2E-1 |
| `src/domains/settlements/MonthlySettlementPanel.jsx` | 2 | 월별 정산, 제외 학생 | 2E-2/3 |
| `src/domains/settlements/SpecialLectureSettlementPanel.jsx` | 2 | 특강 정산, 과정별 묶음 | 2E-2/3 |
| `src/domains/specialLectures/SpecialLectureManagementPanel.jsx` | 2 | 계산기, 회차 계획 | 2E-2/3 |
| `src/domains/portals/StudentTodayTab.jsx` | 1 | 오늘 숙제 | 2E-1 |
| `src/domains/portals/StudentLessonHistoryCalendar.jsx` | 1 | 수업 기록 캘린더 | 2E-1 |
| `src/domains/portals/StudentQuestionPanel.jsx` | 1 | 질문 작성/저장 | 2E-3 |
| `src/domains/portals/StudentExamPostSubmissionPanel.jsx` | 1 | 시험 후 제출 | 2E-3 |
| `src/domains/notifications/ParentResponseContextPanel.jsx` | 1 | 학부모 응대 발신 원문 | 2E-1 |
| `src/domains/students/StudentManager.jsx` | 1 | 학생 프로파일 상세 | 2E-2/3 |

## 공통 구조

`SectionHeader`는 `eyebrow -> title -> description` 복사 영역과 `meta -> actions` 보조 영역을 분리한다. `default`·`slim`·`compact` 밀도는 기존 CSS 의미를 유지한다. UI-2E에서는 데이터 원천이나 callback을 공통 컴포넌트 안으로 옮기지 않고 이미 계산된 JSX만 slot으로 전달한다.
