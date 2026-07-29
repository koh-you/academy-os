# UI-3C 필터 인벤토리 — 2026-07-29

## 분류

| 단위 | 유형 | 대표 화면 | 계약 |
| --- | --- | --- | --- |
| UI-3C-1 | 단일 선택 button filter | 학사일정 표시 항목, 수업일지 일정 종류, 수업연구 과목 | 완료 — filter id·setter·결과 건수 불변 |
| UI-3C-2 | select/chip 복합 filter | 알림 대상 반, 시험 반·고사, 오답 학년·학생, 학사 학교 | 다음 — option value·normalization·대상 집합 불변 |
| UI-3C-3 | 날짜/month filter | 정산월, 달력월, 시험일 범위 | 다음 — 날짜 계산·경계 불변 |

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

## 사람 검수

필수 중단 gate는 없다. 배포 후 학사일정 표시 항목, 수업일지 수업 종류, 수업연구 과목을 전환해 결과와 건수가 기존대로 바뀌는지 확인한다. 390px에서는 필터 바만 좌우로 스크롤되고 페이지 전체가 넘치지 않으면 통과다.
