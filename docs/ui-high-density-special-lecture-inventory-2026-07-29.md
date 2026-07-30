# UI-8E 특강관리 고밀도 화면 inventory — 2026-07-29

## 범위

현재 `activeView === "specialLectureManagement"`에서 `NotificationCenter`의 특강 전용 경로로 연결되는 `SpecialLectureNoticePanel`, `SpecialLectureApplicationPanel`, 안내문 편집과 학생별 회차·수업일지 반영 modal을 읽기 전용으로 조사했다. 안내문·enrollment·lessons 저장, Tally 학생 연결/교체, 수업일지 생성·명단 반영, 취소·삭제, 알림톡 준비·발송은 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. `특강관리`와 `특강 수업 / 특강 안내문` 상위 탭
2. 진행·예정 특강 선택과 지난/보관 특강 접힘
3. 특강 수업
   - 상태 알림과 Tally·학생 연결 복구 행동
   - 확정 명단·학생별 회차 관리 접힘
   - 학생 수동 접수, 신청 학생 연결, Tally 기본정보 교체
   - 학생별 회차·시간 화면 초안
   - `Supabase enrollment 저장 + 안전한 미래 수업일지 반영 + 두 원천 재조회`
   - 취소·오입력 기록과 학생별 진행 조회
   - 특강 수업일지 반영 접힘, 신규/미래 변경/잠금/빈 회차 상태
4. 특강 안내문
   - 안내문 편집, 링크 설정, 일정 계산, 회차별 일정, 알림톡 미리보기
   - 새 특강, 보관·복원·삭제, 안내문 저장
   - 저장 뒤 개별 발송 작성 화면으로 내용 준비

## 원천·callback·side effect 보존 계약

| 영역 | 직접 원천 | 유지할 callback | UI-8E에서 실행 금지 |
| --- | --- | --- | --- |
| 안내문 | `app_state.specialLectureGuides`, local draft | `onSaveGuides`, 보관·복원·삭제, `onApplyToNotice` | app_state 저장·삭제, 알림 작성 준비 |
| 신청·학생 연결 | `special_lecture_applications`, `students` | `onUpdateApplication`, `onCreateStudent`, `onReplaceStudent`, `onDeleteApplication` | Tally 연결·학생 생성/교체·신청 삭제 |
| 확정 명단·회차 | `special_lecture_enrollments`, local `enrollmentDrafts` | `onSaveEnrollment`, `onSaveEnrollments` | enrollment 저장·취소 |
| 수업일지 반영 | `lessons`, `lesson_student_records`, `notificationJobs` 보호 상태 | `onCreateSpecialLectureLessons`, `onSyncSpecialLectureStudentSchedules`, `onOpenLesson` | lesson 생성·명단/시간 변경·수업일지 열기 |

회차 화면의 `1단계 화면 초안`은 저장이 아니다. 하단 `2단계`가 enrollment 저장, 안전한 미래 수업일지 반영과 두 원천 재조회를 모두 끝낸 뒤에만 완료되는 현재 계약을 유지한다. 오늘/과거·완료 수업, 해당 학생 기록과 대기 알림은 보호한다.

## 확인된 UI 예외

- 상위 특강 탭과 안내문 하위 탭은 공통 `WorkspaceTabs`로 가로 scroll되지만 특강 전용 touch overscroll 경계가 없다.
- `특강 명단 · 학생별 회차 관리`와 `특강 수업일지 반영` header는 모바일에서도 설명과 여러 상태 pill을 좌우 flex로 유지해 본문 폭이 과도하게 좁아진다.
- 학생 연결·학생 수동 접수·회차·진행 관리의 긴 modal 3개는 공통 `scrollable` shell을 쓰지 않아 제목·닫기가 본문과 함께 움직인다. 읽기 전용 진행 modal만 이미 공통 scrollable shell이다.
- 학생 선택 목록은 내부 scroll이지만 연결/수동 접수 구분 이름·keyboard focus·touch overscroll 경계가 없다.
- 회차 modal의 sticky save bar는 모바일에서도 닫기와 긴 실제 저장 버튼을 두 열로 유지한다.
- 명단 카드, 회차 grid, 공통 시간, 진행 row는 980px 이하 한 열 전환이 이미 적용되어 있다.

## 연쇄 구현

1. `UI-8E-1`: 상·하위 탭 touch 경계를 보강하고 두 gate header·상태·펼치기 행동을 모바일 한 열로 정리한다.
2. `UI-8E-2`: 학생 연결·수동 접수·회차 편집 modal을 공통 scrollable shell로 전환하고 두 학생 목록을 named focus region으로 만든다. 모바일 실제 저장 bar도 문서 순서대로 한 열 배치한다.
3. `UI-8E-3`: 안내문·신청·명단·회차·수업일지 반영과 저장·삭제·수업 생성 callback 분리를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체는 중단 gate가 없다. 구현 뒤 desktop과 390px에서 특강 선택, 두 gate의 접기/펼치기, 학생 연결·수동 접수·기존 학생 회차·진행 modal의 제목·내부 scroll·행동 순서만 확인한다. 검색·선택 전환·modal 열기/닫기 외 안내문 저장, 학생 연결/교체/등록, 회차 저장, 수업일지 생성·반영·열기, 취소·삭제, 알림톡 준비는 누르지 않는다.
