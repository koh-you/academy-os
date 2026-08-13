# Permissions Draft

## 0. Day 3 Goal

Day 3의 목표는 학생, 학부모, 원장/강사 운영자 역할별 권한을 명확히 정하는 것입니다.

권한은 두 단계로 나눕니다.

1. 프론트엔드: 화면에서 버튼과 메뉴를 숨깁니다.
2. 백엔드: 숨김과 별개로 서버에서 반드시 다시 막습니다.

프론트엔드 숨김은 사용성을 위한 장치이고, 실제 보안 기준은 백엔드 검증입니다.

## 1. Core Principles

- 학부모는 오직 데이터 열람만 가능합니다.
- 학생은 본인 숙제 완료 체크와 공개된 self-check 설문 응답만 입력할 수 있습니다.
- 현재 MVP에서는 강사와 원장을 분리하지 않습니다. 사용자인 원장이 직접 강사 역할까지 수행합니다.
- 원장/강사 운영자는 달력에서 특정 일자의 수업을 선택하고, 그 수업에 포함된 반 학생 기록을 작성합니다.
- 원장/강사 운영자는 전체 데이터를 볼 수 있지만 실제 삭제, 초기화, 외부 발송은 아직 만들지 않습니다.
- 프로그램이 커지면 여러 강사를 포괄하는 메타강사/원장 역할을 별도로 둡니다.
- AI 초안은 검수 전까지 학생/학부모에게 공개하지 않습니다.
- 모든 요청은 `StudentId`, `LessonId`, `HomeworkId`, `ExamId`, `ReportId` 기준으로 권한을 확인합니다.

## 2. Roles

| 역할 | 설명 | MVP 기본 권한 |
| --- | --- | --- |
| Student | 학생 본인 | 본인 데이터 조회, 숙제 완료 체크, 공개된 self-check 설문 응답 |
| Parent | 연결된 학생의 학부모 | 자녀 데이터 조회만 가능 |
| InstructorOwner | 원장/강사 운영자 | 수업 운영, 학생 기록 작성, 숙제 확인, 리포트 초안 작성, 전체 조회 |

향후 확장 역할:

| 역할 | 설명 | 도입 시점 |
| --- | --- | --- |
| Teacher | 개별 수업 담당 강사 | 여러 강사가 생겼을 때 |
| Owner | 여러 강사를 포괄하는 메타강사/원장 | 강사별 담당 범위와 관리자 권한 분리가 필요할 때 |

## 3. Permission Matrix

범례:

- R: 읽기
- C: 생성
- U: 수정
- D: 삭제
- Own: 본인 데이터
- Child: 연결된 자녀 데이터
- Lesson: 선택한 수업에 포함된 학생 데이터
- All: 전체 데이터
- No: 불가

| 데이터 | Student | Parent | InstructorOwner |
| --- | --- | --- | --- |
| Student | R Own | R Child | R/C/U All |
| Lesson | R Own schedule | R Child schedule | R/C/U All |
| LessonStudentRecord | R Own limited | R Child summary | R/C/U All |
| Homework | R Own | R Child | R/C/U All |
| HomeworkSubmission | C/U Own student fields | R Child | R/C/U All |
| Report | R approved Own | R approved Child | R/C/U All |
| Exam | R Own summary | R Child summary | R/C/U All |
| Problem | R assigned only | R Child assigned summary | R/C/U All |
| ProblemStatus | R Own limited | R Child summary | R/C/U All |
| MakeupTask | R Own | R Child summary | R/C/U All |
| Notice | R published Own | R published Child | R/C/U All |
| SelfCheck | C/R Own when published | R approved Child summary | R/C/U All |
| Counseling | No by default | R approved summary only | R/C/U All |
| AI Draft | No | No | R/C/U All |
| Notification | R Own mock logs | R Child mock logs | R/C/U All |

Day 3 기준 실제 삭제 권한은 어떤 역할에도 구현하지 않습니다. 위 표의 D는 MVP 이후 감사 로그, 복구 정책, 2단 확인, 권한 승인 절차가 정해진 뒤 다시 설계합니다.

## 4. Student Rules

학생이 할 수 있는 일:

- 본인 오늘 숙제 조회
- 본인 밀린 숙제 조회
- 본인 숙제 완료 체크
- 공개된 self-check 공지를 열고 설문 응답
- 본인 승인 리포트 조회
- 본인 평가 요약 조회

학생이 할 수 없는 일:

- 출결 수정
- 강사 코멘트 수정
- 숙제 검수 상태 수정
- 보강/재시험 여부 수정
- 다른 학생 데이터 조회
- 검수 전 AI 초안 조회
- 리포트 발송 또는 삭제

## 5. Parent Rules

학부모는 오직 데이터 열람만 가능합니다.

학부모가 볼 수 있는 일:

- 자녀의 승인된 리포트
- 자녀의 숙제 목록, 밀린 숙제, 완료율
- 자녀의 출결 요약
- 자녀의 커리큘럼/진도 요약
- 자녀의 평가 요약
- 학부모에게 공개된 공지

학부모가 할 수 없는 일:

- 어떤 데이터든 생성
- 어떤 데이터든 수정
- 어떤 데이터든 삭제
- 숙제 재분배
- 숙제 수정
- 숙제 삭제
- 리포트 작성/수정/발송
- 출결 수정
- self-check 응답 작성 또는 수정
- 내부 상담 메모 원문 조회
- 검수 전 AI 초안 조회

학부모 화면에는 다음 버튼을 표시하지 않습니다.

- 재분배
- 수정
- 삭제
- 발송
- 초기화
- 저장
- 승인

## 6. InstructorOwner Rules

현재 MVP에서는 원장이 곧 강사입니다. 따라서 `InstructorOwner`는 달력에서 날짜를 선택하고, 해당 날짜에 개설된 수업 중 하나를 클릭해 그 반 학생 목록으로 들어갑니다.

원장/강사 운영자가 할 수 있는 일:

- 전체 수업 조회
- 수업별 학생 목록 조회
- 해당 수업의 `LessonStudentRecord` 작성
- 출결, 숙제 상태, 강사 코멘트 입력
- 학생 코멘트/학생 반응 기록
- 숙제 배정
- 숙제 제출 상태 확인
- 보강, 재시험, 숙제보충 필요 여부 작성
- 리포트 초안 작성
- self-check 공지/설문 생성
- self-check 응답과 AI 표준화 요약 조회
- 반/수업 생성과 수정
- 리포트 검수와 승인

원장/강사 운영자가 아직 할 수 없는 일:

- 학부모/학생에게 검수 전 AI 초안 공개
- 실제 외부 발송
- 실제 삭제
- 전체 초기화

## 7. Future Owner/Teacher Split

프로그램이 커져 여러 강사를 관리해야 할 때 `InstructorOwner`를 `Owner`와 `Teacher`로 나눕니다.

분리 후 예상 원칙:

- Teacher는 담당 수업과 담당 학생만 봅니다.
- Owner는 전체 데이터와 강사별 담당 범위를 관리합니다.
- Owner는 리포트 공개, AI 초안 승인, 운영 설정을 관리합니다.
- 삭제, 초기화, 실제 발송은 여전히 별도 보호 장치가 필요합니다.

## 8. Frontend Visibility

프론트엔드에서 숨길 항목:

- 학생/학부모에게 내부 상담 메모 원문
- 학생/학부모에게 검수 전 AI 초안
- 학생/학부모에게 다른 학생 이름, 성적, 숙제 상태
- 학부모에게 모든 데이터 변경 버튼
- 향후 Teacher 역할이 생기면 담당 외 수업과 학생
- 발송, 삭제, 초기화 버튼
- 외부 서비스 토큰과 설정값

프론트엔드에서 보여도 되는 항목:

- 학생: 본인 숙제, 본인 리포트, 공개된 self-check 공지
- 학부모: 자녀의 승인된 요약 정보
- 원장/강사 운영자: 전체 운영 화면과 수업별 학생 입력 화면

## 9. Backend Enforcement

서버에서 반드시 막아야 할 요청:

- Student가 본인 외 `StudentId`에 접근하는 요청
- Parent가 연결되지 않은 자녀 `StudentId`에 접근하는 요청
- Parent가 어떤 데이터든 생성, 수정, 삭제하려는 요청
- 향후 Teacher 역할이 생긴 뒤, Teacher가 담당하지 않는 `LessonId`를 조회/수정하는 요청
- 향후 Teacher 역할이 생긴 뒤, Teacher가 선택한 수업에 포함되지 않은 학생의 `LessonStudentRecord`를 수정하는 요청
- 검수되지 않은 `Report` 또는 `AI Draft`가 학생/학부모에게 공개되는 요청
- 닫힌 self-check 공지에 학생이 새 응답을 제출하는 요청
- 외부 설문 응답을 `StudentId`, `ExamId` 매핑 없이 저장하는 요청
- 실제 발송 요청
- 실제 삭제 또는 초기화 요청
- 외부 서비스 토큰을 클라이언트에 노출하는 요청

## 10. Human Review Gates

사람 검수가 필요한 항목:

- 학부모에게 공개할 리포트 문구
- 민감한 상담 표현
- 성적 해석과 학습 판단
- 보강/재시험 일정 확정
- AI 변형문항 정답과 난이도
- self-check AI 표준화 요약
- 알림 발송 여부와 톤

## 11. MVP Defaults

Day 3 기준 기본값:

- 학부모는 조회만 가능합니다.
- 학생은 본인 숙제 완료 체크와 공개된 self-check 설문 응답만 입력합니다.
- 현재는 강사/원장 분리 없이 원장/강사 운영자가 전체 운영과 수업 입력을 담당합니다.
- 여러 강사가 생기면 Teacher와 Owner를 분리합니다.
- 삭제, 초기화, 실제 발송, 실제 외부 연동은 MVP 이후 별도 설계합니다.
