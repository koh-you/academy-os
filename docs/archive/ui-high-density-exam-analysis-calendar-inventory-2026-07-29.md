# UI-8G 시험·시험분석·학사일정 inventory — 2026-07-29

## 범위와 금지선

- 대상: `시험관리`, `시험분석`, `학사일정`의 페이지 머리말·단계 탭·필터·표·달력·모달·상태·모바일 화면이다.
- 이번 UI 묶음은 표시 shell과 접근성만 다룬다.
- 시험정보 저장·삭제, 시험 후 제출 확인, PDF 업로드·삭제·추출, Vision/AI 분석, 문항·산출물 저장, 학사일정 저장·삭제, 시험정보 연동, 직전수업 동기화는 실행하거나 변경하지 않는다.

## 원천·callback·side effect

| 화면 | 읽는 원천 | 저장·삭제 callback | 외부 또는 연결 side effect | UI 작업에서 보존할 경계 |
| --- | --- | --- | --- | --- |
| 시험관리 | `examPrepRows`, 학생·반, 시험 후 Tally 제출 | `handleUpdateExamPrepRow`, `persistExamPrepRows`, `handleDeleteExamPrepRow`, `handleConfirmExamPostSubmission` | 시험정보 row 저장/재조회, 연결 시험대비 수업 삭제 audit, 학생 제출 파일 열기 | 표·수정 modal을 정리해도 onChange 자동저장·삭제·교사 확인을 합치거나 실행하지 않는다. |
| 시험분석 | `/api/exam-analysis-runs`, source files, 문항 경계·AI 행·교사 검수·산출물 | 분석 저장/삭제, source 업로드/삭제/추출, 문항 수·검수·산출물 저장 | Storage, PDF 추출, Vision/AI, ZIP/TXT 생성 | 작업 단계와 긴 목록만 정리하고 API 호출·파일 선택·AI 실행·다운로드를 누르지 않는다. |
| 학사일정 | `schoolEvents`와 `examPrepRows`에서 파생한 시험기간·수학시험 | `postSchoolEvent`, `deleteSchoolEventFromApi`, `onUpdateExamPrepRow` | 시험기간·수학시험은 시험관리 원천 갱신, 수학시험 날짜는 직전수업 후보 동기화 가능 | 수동 일정과 시험관리 연동 일정을 구분하고 저장·삭제·직전수업 동기화를 합치거나 실행하지 않는다. |

## 현재 공통 기반

- 세 화면 모두 공통 `PageHeader`, `SectionHeader`, `FilterBar`, 상태 badge/notice를 사용한다.
- 시험관리 표와 시험분석 문항 검수 표는 이미 이름 있는 `DataTableShell` 안에서 가로 scroll된다.
- 시험분석은 작업 단계 `WorkspaceTabs`와 학교→학년→고사→분석 4열 library를 사용한다.
- 학사일정은 학교/표시 필터, 월 탐색, 시험기간 요약 카드, 7열 달력, 날짜 상세와 일정 등록/수정 modal을 사용한다.

## 확인된 표시·모바일 예외

1. 시험관리 하위 탭은 `inline-flex / width: fit-content`이고 좁은 화면의 touch overscroll·선택 가시성 계약이 없다.
2. 시험정보 수정 modal은 긴 입력 폼이지만 공통 scrollable modal을 사용하지 않는다.
3. 시험분석 작업 단계는 가로 scroll되지만 touch overscroll·scroll padding 계약이 없고, 4개 `examAnalysisColumnList`는 이름·keyboard focus·touch scroll 경계가 없다.
4. 학사일정 7열 달력은 `overflow: hidden`이며 이름 있는 내부 가로 scroll 영역이 아니다. 모바일에서 날짜·일정이 지나치게 좁아질 수 있다.
5. 학사일정 날짜 상세와 일정 등록/수정 modal은 긴 입력·학교 그룹을 포함하지만 공통 scrollable modal을 사용하지 않는다.
6. 위 예외는 모두 표시 문제다. 실제 저장 상태 모델과 callback을 바꾸지 않고 해결할 수 있다.

## 연쇄 구현

1. `UI-8G-1`: 시험관리·시험분석 단계 탭에 touch scroll 경계를 적용하고 시험분석 4열 library 목록을 이름 있는 focus·touch scroll 영역으로 만든다.
2. `UI-8G-2`: 시험정보 수정·학사일정 날짜 상세·일정 등록/수정 modal을 공통 scrollable shell로 전환하고, 7열 학사 달력을 이름 있는 내부 가로 scroll grid로 정리한다.
3. `UI-8G-3`: 시험정보·시험분석·학사일정 저장/삭제/AI/파일/연동 callback 분리를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체에는 사람 gate가 없다. 구현 뒤 desktop과 390px에서 단계 탭·library 목록·시험정보 modal·학사 달력·학사 modal의 제목·focus·내부 scroll만 확인한다. 시험정보 입력/저장/삭제, 시험 후 교사 확인, PDF/AI/Storage, 학사일정 등록/수정/삭제와 직전수업 연동은 실행하지 않는다.

## 진행 갱신

- UI-8G-1: 시험관리 하위 탭과 시험분석 작업 단계 탭을 내부 가로 touch scroll 영역으로 제한했다.
- 시험분석 학교·학년·고사·분석본 네 목록에 업무 이름·keyboard focus·내부 세로 touch scroll 경계를 추가했다.
- 단계와 분류 선택 callback, 시험정보·시험분석 저장/삭제/AI/파일 원천은 변경하지 않았다.
- UI-8G-2: 시험정보 수정·학사일정 날짜 상세·일정 등록/수정 modal을 공통 scrollable shell로 전환했다.
- 7열 학사 달력은 이름 있는 focus 영역 안의 최소 840px grid로 유지하고 달력 내부에서만 가로 touch scroll되게 했다.
- 날짜 선택과 시험정보·학사일정 저장/삭제·시험정보 연동·직전수업 동기화 callback은 변경하지 않았다.
- UI-8G-3: 세 화면의 responsive shell과 시험정보·시험분석·학사일정 저장/삭제/AI/파일/연동 callback 분리를 통합 fixture로 고정했다.
- desktop/390px 사람 시각 확인은 `docs/next-session/README.md`에 독립 절차로 누적했으며 UI-8H를 막지 않는다.
