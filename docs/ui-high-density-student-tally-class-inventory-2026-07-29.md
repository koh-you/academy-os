# UI-8F 학생·Tally·반관리 고밀도 화면 inventory — 2026-07-29

## 범위

현재 `activeView === "students"`의 `StudentManager`·학생 프로파일·퇴원 관리, 전역 `StudentModal`의 한 명/일괄/Tally 접수, `activeView === "classes"`의 `ClassManager`·반 명단 modal을 읽기 전용으로 조사했다. 학생·프로파일·운영메모·상담·성적·테스트 저장, Tally 등록·병합·덮어쓰기, 반 명단 저장, 퇴원·복원·영구삭제는 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. 학생관리
   - 전체 학생 목록 / 반별 학생 목록 / 퇴원생 목록
   - 재원 학생 12열 편집 표와 행 저장·퇴원
   - 퇴원생 11열 표, 이름순/퇴원일순, 선택 저장·복원·인수인계 PDF·영구삭제
2. 학생 프로파일
   - 기본정보와 학생 Tally 제출 원천
   - 강사 운영메모와 개별 시간표
   - 학생별 운영 알림, 상담, 성적, 학원 테스트
   - 각 원천의 별도 저장 상태와 하단 기본정보 저장
3. 학생 추가
   - 한 명씩, 엑셀 일괄 등록, Tally 접수
   - Tally 후보 수정, 기존 학생 보강 또는 기본정보 완전 덮어쓰기, 신규 생성
   - 등록완료 후보의 학생 원천 미반영 복구
4. 반관리
   - 반 선택과 현재 학생 카드
   - 명단 modal에서 학생 checkbox 초안 후 명단 저장
5. 퇴원
   - 퇴원 사유·코멘트 확인
   - 퇴원 취소
   - 연결 원천 audit·확인 입력·강제 확인이 있는 단건/다건 영구삭제

## 원천·callback·side effect 보존 계약

| 영역 | 직접 원천 | 유지할 callback | UI-8F에서 실행 금지 |
| --- | --- | --- | --- |
| 재원·퇴원 학생 | Supabase `students` | `onSaveStudent`, `onDeleteStudent`, `onRestoreStudent` | 학생 저장·퇴원·복원 |
| 학생 프로파일 | `students`, teacher memo·consultation·score·test 원천 | 각 `onSave*`·`onDelete*` | 기본정보·메모·상담·성적·테스트 저장/삭제 |
| Tally 접수 | `student_intake_applicants`, Supabase `students`, 미래 정규수업 명단 | 후보 수정, `registerApplicant`의 보강/덮어쓰기/신규 | 후보 저장·학생 병합/생성·미래 명단 반영 |
| 반 명단 | `students.defaultClassTemplateId`, class templates | `onUpdateClassRoster` | 반 배정 bulk 저장 |
| 영구삭제 | 연결 원천 audit 결과 | `onAuditWithdrawnStudentDeletion`, `onPermanentlyDeleteWithdrawnStudent` | audit 이후 단건/다건 삭제 |

Tally의 `빈칸 유지 보강`과 `기존 기본정보를 Tally 제출값으로 교체`는 계속 다른 행동으로 유지한다. 교체해도 학생 ID·로그인·PIN·개별 시간표와 과거 수업·출결은 보존한다. 영구삭제는 연결 원천 audit, 확인 입력, 강제 확인을 건너뛰지 않는다.

## 확인된 UI 예외

- 학생 목록 표는 공통 named `DataTableShell` 내부 가로 scroll을 이미 사용한다.
- 학생 프로파일은 여러 긴 접힘 section과 하단 저장 bar가 있지만 `wideModal`이 공통 `scrollable` shell을 쓰지 않아 제목·닫기가 본문과 함께 움직인다.
- 퇴원생 선택 toolbar는 desktop sidebar 좌표를 기준으로 fixed 배치되고 모바일 safe-area·가용 높이·내부 scroll 보정이 없다.
- 학생 추가 modal은 Tally 후보 카드가 많을 수 있지만 공통 `scrollable` shell을 쓰지 않는다. 내부 `studentIntakeList`만 최대 520px scroll이다.
- 반 명단 modal도 공통 scrollable shell을 쓰지 않고 `classRosterList`만 최대 520px scroll이다.
- Tally 후보 목록과 반 명단 목록은 이름·keyboard focus·touch overscroll 경계가 없다.
- 학생관리 3개 탭과 반 필터는 공통 탭·필터 shell을 사용하고, 학생 프로파일의 Tally 제출 데이터는 기본정보 section 안에서 별도 접힘으로 이미 분리되어 있다.

## 연쇄 구현

1. `UI-8F-1`: 학생 프로파일을 공통 scrollable modal로 전환하고 모바일 퇴원 선택 toolbar를 safe-area 안의 제한된 한 열 작업 영역으로 정리한다.
2. `UI-8F-2`: 학생 추가/Tally와 반 명단 modal을 공통 scrollable shell로 전환하고 두 내부 목록을 named focus·touch scroll 영역으로 만든다.
3. `UI-8F-3`: 학생 기본정보·Tally 원본·운영메모·반·퇴원/복원/영구삭제 callback 분리를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체는 중단 gate가 없다. 구현 뒤 desktop과 390px에서 학생 목록 표, 기존 학생 프로파일, 학생 추가의 Tally 탭, 반 명단 modal, 퇴원생 선택 toolbar의 제목·scroll·focus·행동 순서만 확인한다. 탭·필터·정렬·modal 열기/닫기·Tally 제출 원천 접기/펼치기 외 학생/메모/상담/성적/테스트 저장, 등록·병합·덮어쓰기, 반 저장, 퇴원·복원·영구삭제는 누르지 않는다.
