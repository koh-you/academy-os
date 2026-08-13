# UI-3C 필터 인벤토리 — 2026-07-29

## 분류

| 단위 | 유형 | 대표 화면 | 계약 |
| --- | --- | --- | --- |
| UI-3C-1 | 단일 선택 button filter | 학사일정 표시 항목, 수업일지 일정 종류, 수업연구 과목 | 완료 — filter id·setter·결과 건수 불변 |
| UI-3C-2 | select/chip 복합 filter | 알림 대상 반, 시험·학생 반, 시험 고사, 오답 학년·학생, 학사 학교 | 완료 — option value·setter·대상 집합 불변 |
| UI-3C-3 | 날짜/month filter | 정산월, 수업·학사 달력월 | 완료 — 날짜 계산·월 경계·setter 불변 |

검색어 입력과 0건 결과는 UI-3D에서 다룬다. 탭별 조건부 렌더는 UI-3A/3B에서 완료했다.

## UI-3C-1 적용

| 화면 | 선택 원천 | setter | 결과 계약 |
| --- | --- | --- | --- |
| 학사일정 달력 표시 | `calendarFilter` | `onChange(filter.id)` | 기존 `calendarDisplayEvents` 계산 유지 |
| 수업일지 일정 종류 | `lessonTypeFilter` | `setLessonTypeFilter(option.id)` | `visibleLessons`, 선택 월 `visibleLessonCount` 유지 |
| 수업연구 과목 | `selectedSubject` | `setSelectedSubject(subject)` | 과목 변경 시 `setSelectedItemId("")` 유지, 과목별 건수 유지 |

## 공통 button filter 규칙

- `FilterBar`가 `role=group`, 화면별 label, 선택 option, 결과/행동 aside를 같은 구조로 제공한다.
- option은 `aria-pressed`와 기존 active 계산을 함께 사용한다.
- 모바일에서는 option을 줄바꿈해 찌그러뜨리지 않고 필터 바 내부만 가로 스크롤한다.
- 필터 변경은 로컬 선택만 바꾸며 저장·발송·삭제·외부 원천을 호출하지 않는다.

## UI-3C-2 적용

| 화면 | 선택 원천 | setter | 결과·행동 계약 |
| --- | --- | --- | --- |
| 알림 개별 발송 | `classFilter`, `searchText` | `setClassFilter`, `setSearchText` | 기존 수신 대상 계산 유지, 실제 발송 미실행 |
| 시험관리 | `selectedClassTemplateId`, `selectedExamCycle` | `changeClassTemplate`, `changeExamCycle` | 시험정보·학생 건수와 저장 상태 표시 유지 |
| 학생관리 | `selectedClassTemplateId` | `setSelectedClassTemplateId` | 반 변경 시 선택 학생 초기화 유지 |
| 오답관리 | `gradeFilter`, `selectedStudentId` | `setGradeFilter`, `setSelectedStudentId` | 연결 교재·문제 건수 유지, 업로드/보기 actions 분리 |
| 학사일정 | `schoolFilter` | `onSchoolFilterChange` | 학교별 event 집합 유지, 일정 등록 action 분리 |

- `filterBarField`는 label과 select/input을 같은 필드 규칙으로 묶고 390px에서 44px 터치 높이와 내부 가로 스크롤을 사용한다.
- option value, 검색 normalization, 결과 계산은 옮기지 않았다. PDF 업로드, 일정 등록, 선택 문제 열기는 기존 callback과 disabled 조건을 그대로 유지했다.

## UI-3C-3 적용

| 화면 | 선택 원천 | setter | 경계 계약 |
| --- | --- | --- | --- |
| 수업 달력 | `selectedDate` | `onMoveDate(-30/30)` | 기존 `formatMonthTitle`·`buildMonthDays` 유지, UI-2C 공통 탐색 기준 재사용 |
| 학사일정 달력 | `selectedMonth` | `onShiftMonth(-1/1)` | 기존 월 증감 계산과 선택일 유지, 공통 `NavigationHeader` 사용 |
| 월별 정산 | `selectedMonth` | `setSelectedMonth` | `YYYY-MM` input 값과 `getMonthRange`·로컬 draft key·Supabase 저장 월 유지 |

시험기간 시작일·종료일과 수학시험 날짜는 결과를 거르는 필터가 아니라 저장되는 시험정보 입력값이다. UI-3C에서 이관하지 않고 UI-7D 입력 폼 단위로 남겼으며 `updateDateRangeField` callback을 그대로 유지했다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 학사일정 표시 항목·학교·이전/다음 달, 수업일지 종류·이전/다음 달, 수업연구 과목, 알림 대상 반, 시험·학생 반, 시험 고사, 오답 학년·학생, 월별 정산월을 전환해 결과와 건수·월 경계가 기존대로 바뀌는지 확인한다. 390px에서는 필터 바만 좌우로 스크롤되고 페이지 전체가 넘치지 않으면 통과다. 실제 저장·발송·업로드·일정 등록은 누르지 않는다.
