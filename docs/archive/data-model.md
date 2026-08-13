# Data Model Draft

## 0. What Day 2 Means

데이터모델을 구체화한다는 것은 앱이 저장해야 할 데이터를 더 또렷하게 정하는 일입니다.

예를 들어 `학생`이라고만 쓰면 부족합니다. 실제 앱을 만들려면 아래처럼 정해야 합니다.

| 질문 | 예시 답 |
| --- | --- |
| 어떤 이름으로 저장할까? | `studentId`, `name`, `grade` |
| 값의 종류는 무엇일까? | 글자, 날짜, 숫자, 목록, 상태값 |
| 꼭 입력해야 할까? | 필수 또는 선택 |
| 누가 볼 수 있을까? | 내부 전용, 학생 공개, 학부모 공개, 강사 공개 |
| 예시는 어떤 모습일까? | JSON 예시 |

JSON은 데이터를 표현하는 약속된 형식입니다. 사람도 읽고 컴퓨터도 읽을 수 있습니다.

```json
{
  "studentId": "student_001",
  "name": "김도윤",
  "grade": "고1"
}
```

위 예시는 `studentId`는 `student_001`, `name`은 `김도윤`, `grade`는 `고1`이라는 뜻입니다.

## 1. MVP Context

첫 파일럿 반은 `월수금 4-7반 (고1 내신)`입니다.

Day 2 데이터 모델은 이 반에서 실제로 필요한 흐름을 기준으로 구체화합니다.

```text
날짜
-> 월수금 4-7반 수업
-> 반 학생 목록
-> 학생별 출결/숙제상태/강사코멘트
-> 학생 숙제 완료 체크
-> 리포트 초안
-> 시험 후 self-check 설문
```

아직 앱 코드는 만들지 않습니다. 실제 발송, 삭제, 초기화, 외부 연동도 만들지 않습니다.

## 2. Type and Visibility Rules

### Types

| 타입 | 의미 | 예시 |
| --- | --- | --- |
| string | 글자 | `"월수금 4-7반"` |
| number | 숫자 | `7` |
| boolean | 참/거짓 | `true` |
| date | 날짜 | `"2026-06-02"` |
| time | 시간 | `"16:00"` |
| datetime | 날짜+시간 | `"2026-06-02T16:00:00+09:00"` |
| enum | 정해진 선택값 | `"present"`, `"absent"` |
| string[] | 글자 목록 | `["student_001", "student_002"]` |
| object | 묶음 데이터 | `{ "score": 80 }` |

### Visibility

| 공개 범위 | 의미 |
| --- | --- |
| internal | 원장/강사 내부용 |
| student | 학생 본인에게 공개 |
| parent | 학부모에게 공개 가능 |
| teacher | 담당 강사에게 공개 |
| owner | 원장에게 공개 |
| ai_input | AI 초안/요약에 입력 가능 |

민감한 내부 상담 메모, 검수 전 AI 초안, 다른 학생 정보는 학생/학부모에게 공개하지 않습니다.

## 3. Common ID Rules

모든 기능은 아래 공통 ID로 연결합니다.

| ID | 예시 | 설명 |
| --- | --- | --- |
| StudentId | `student_001` | 학생 원장 기준 ID |
| LessonId | `lesson_2026-06-03_mwf-4-7` | 날짜별 수업 ID |
| LessonStudentRecordId | `lsr_2026-06-03_mwf-4-7_student_001` | 한 수업 안의 학생별 기록 ID |
| HomeworkId | `homework_2026-06-03_001` | 숙제 배정 ID |
| HomeworkSubmissionId | `submission_homework_2026-06-03_001_student_001` | 학생의 숙제 제출/체크 ID |
| ProblemId | `problem_textbook-jungsuk-common1_0019` | 교재/시험 문항 원본 ID |
| ExamId | `exam_2026-high1-midterm-math-01` | 시험/평가 ID |
| ReportId | `report_2026-06-03_student_001` | 리포트 초안 또는 스냅샷 ID |
| MakeupTaskId | `makeup_2026-06-03_student_001_001` | 보강/재시험/숙제보충 ID |
| SelfCheckId | `selfcheck_exam_2026-high1-midterm-math-01_student_001` | 시험 후 self-check ID |
| NoticeId | `notice_selfcheck_2026-high1-midterm-math-01` | 공지/설문 ID |
| ExternalFormId | `tally_selfcheck_2026-high1-midterm-math-01` | 외부 설문 연결 ID |
| AIDraftId | `ai_draft_report_2026-06-03_student_001` | AI 생성 초안 ID |

권장 규칙:

- ID는 사람이 읽을 수 있는 접두어를 둡니다.
- 날짜는 `YYYY-MM-DD`를 사용합니다.
- 시간대는 한국 시간 `Asia/Seoul` 기준입니다.
- 실제 DB가 바뀌어도 이 문서의 ID 관계는 유지합니다.

## 4. Student

학생 장기 누적 데이터의 기준입니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| studentId | string | 예 | internal, teacher, owner | 공통 StudentId |
| name | string | 예 | student, parent, teacher, owner | 학생 이름 |
| displayName | string | 아니오 | student, parent, teacher, owner | 화면 표시명 |
| status | enum | 예 | internal, teacher, owner | `active`, `paused`, `graduated` |
| schoolName | string | 아니오 | parent, teacher, owner | 학교 |
| grade | string | 예 | student, parent, teacher, owner | 학년 |
| pilotClassId | string | 아니오 | internal, teacher, owner | 파일럿 반 연결 |
| parentIds | string[] | 아니오 | internal, owner | 연결 학부모 계정 |
| assignedTeacherIds | string[] | 아니오 | internal, owner | 담당 강사 |
| textbook | string | 아니오 | student, parent, teacher, owner | 현재 교과서 |
| specialNote | string | 아니오 | teacher, owner, ai_input | 수업 운영 특이사항 |
| createdAt | datetime | 예 | internal, owner | 생성일 |
| updatedAt | datetime | 예 | internal, owner | 수정일 |

```json
{
  "studentId": "student_001",
  "name": "김도윤",
  "displayName": "김도윤",
  "status": "active",
  "schoolName": "예시고",
  "grade": "고1",
  "textbook": "수학의 정석 공통수학1",
  "specialNote": "계산 실수 반복, 풀이 과정 점검 필요",
  "pilotClassId": "class_mwf-4-7_high1",
  "parentIds": ["parent_001"],
  "assignedTeacherIds": ["teacher_001"],
  "createdAt": "2026-06-02T10:00:00+09:00",
  "updatedAt": "2026-06-02T10:00:00+09:00"
}
```

## 5. Lesson

날짜별 수업 단위입니다. 강사는 달력에서 날짜를 보고, 해당 날짜의 수업 카드 중 하나를 클릭해 반 학생 목록으로 들어갑니다.

Day 8 이후 수업은 두 층으로 나눕니다.

- `ClassTemplate`: 월수금 4-7반처럼 반복되는 큰 수업 틀
- `Lesson`: 특정 날짜에 실제로 열린 수업

기본 큰 수업 틀:

| classTemplateId | 이름 | 요일/시간 |
| --- | --- | --- |
| `template_mwf_4_7` | 월수금 4-7반 | 월/수/금 16:00-19:00 |
| `template_mwf_7_10` | 월수금 7-10반 | 월/수/금 19:00-22:00 |
| `template_tt_sat_front` | 화목 4-7 / 토 10-1반 | 화/목 16:00-19:00, 토 10:00-13:00 |
| `template_tt_sat_back` | 화목 7-10 / 토 1-4반 | 화/목 19:00-22:00, 토 13:00-16:00 |

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| lessonId | string | 예 | internal, teacher, owner | 공통 LessonId |
| classTemplateId | string | 예 | internal, teacher, owner | 큰 수업 틀 ID |
| className | string | 예 | student, parent, teacher, owner | 반/수업명 |
| date | date | 예 | student, parent, teacher, owner | 수업 날짜 |
| dayOfWeek | enum | 예 | teacher, owner | `mon`, `wed`, `fri` 등 |
| startTime | time | 예 | student, parent, teacher, owner | 시작 시간 |
| endTime | time | 예 | student, parent, teacher, owner | 종료 시간 |
| teacherId | string | 예 | internal, teacher, owner | 담당 강사 |
| studentIds | string[] | 예 | internal, teacher, owner | 수업 참여 학생 |
| status | enum | 예 | teacher, owner | `scheduled`, `completed`, `canceled` |
| createdAt | datetime | 예 | internal, owner | 생성일 |
| updatedAt | datetime | 예 | internal, owner | 수정일 |

```json
{
  "lessonId": "lesson_2026-06-03_mwf-4-7",
  "classTemplateId": "template_mwf_4_7",
  "className": "월수금 4-7반",
  "date": "2026-06-03",
  "dayOfWeek": "wed",
  "startTime": "16:00",
  "endTime": "19:00",
  "teacherId": "teacher_001",
  "studentIds": ["student_001", "student_002", "student_003"],
  "status": "scheduled",
  "createdAt": "2026-06-02T10:00:00+09:00",
  "updatedAt": "2026-06-02T10:00:00+09:00"
}
```

## 5-1. StudentEnrollment and Schedule Override

학생은 기본 수업 틀에 배정되지만, 학생별 개별 스케줄 예외가 있을 수 있습니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| studentId | string | 예 | internal, teacher, owner | 학생 ID |
| defaultClassTemplateId | string | 예 | internal, teacher, owner | 기본 수업 틀 |
| scheduleOverride | string | 아니오 | internal, teacher, owner | 개별 스케줄 메모 |

```json
{
  "studentId": "student_002",
  "defaultClassTemplateId": "template_mwf_4_7",
  "scheduleOverride": "수요일만 7-10반으로 이동 가능"
}
```

## 6. LessonStudentRecord

Lesson Hub의 핵심 테이블입니다. 수업 안에서 학생마다 다른 값을 저장합니다. 학생이 직접 수정하는 테이블이 아니라, 강사가 수업 화면에서 입력하는 기록입니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| lessonStudentRecordId | string | 예 | internal, teacher, owner | 공통 LessonStudentRecordId |
| lessonId | string | 예 | internal, teacher, owner | 연결 수업 |
| studentId | string | 예 | internal, teacher, owner | 연결 학생 |
| attendanceStatus | enum | 예 | parent, teacher, owner | `present`, `late`, `absent`, `excused` |
| homeworkStatus | enum | 아니오 | student, parent, teacher, owner | `assigned`, `submitted`, `verified`, `partial`, `missing`, `overdue` |
| teacherComment | string | 아니오 | parent, teacher, owner, ai_input | 강사 코멘트 |
| studentComment | string | 아니오 | teacher, owner, ai_input | 강사가 기록한 학생 반응/학생 코멘트 |
| needsMakeup | boolean | 예 | teacher, owner | 보강 필요 여부 |
| needsRetest | boolean | 예 | teacher, owner | 재시험 필요 여부 |
| reportId | string | 아니오 | internal, teacher, owner | 생성된 리포트 |
| followUpTaskIds | string[] | 아니오 | internal, teacher, owner | 보충/보강 등 후속조치 |
| updatedBy | string | 예 | internal, owner | 마지막 수정자 |
| updatedAt | datetime | 예 | internal, owner | 수정일 |

```json
{
  "lessonStudentRecordId": "lsr_2026-06-03_mwf-4-7_student_001",
  "lessonId": "lesson_2026-06-03_mwf-4-7",
  "studentId": "student_001",
  "attendanceStatus": "present",
  "homeworkStatus": "partial",
  "teacherComment": "개념 이해는 좋으나 계산 실수가 반복됨.",
  "studentComment": "문제 23번 풀이에서 시간이 오래 걸림.",
  "needsMakeup": false,
  "needsRetest": false,
  "reportId": "report_2026-06-03_student_001",
  "followUpTaskIds": ["makeup_2026-06-03_student_001_001"],
  "updatedBy": "teacher_001",
  "updatedAt": "2026-06-03T19:10:00+09:00"
}
```

## 7. Homework

숙제 배정 원장입니다. 학생 화면의 오늘 숙제, 밀린 숙제, 전체 숙제 탭의 원천입니다.

수업 상세 화면에서는 학생별로 `지난 숙제`와 `오늘 나가는 숙제`가 함께 보여야 합니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| homeworkId | string | 예 | internal, teacher, owner | 공통 HomeworkId |
| lessonId | string | 아니오 | internal, teacher, owner | 배정 원천 수업 |
| classId | string | 아니오 | internal, teacher, owner | 대상 반 |
| studentIds | string[] | 예 | internal, teacher, owner | 대상 학생 |
| title | string | 예 | student, parent, teacher, owner | 숙제 제목 |
| curriculumLabel | string | 아니오 | student, parent, teacher, owner | 교재/단원 표시 |
| description | string | 아니오 | student, parent, teacher, owner | 범위/설명 |
| dueDate | date | 예 | student, parent, teacher, owner | 마감일 |
| assignedDate | date | 예 | student, parent, teacher, owner | 배정일 |
| status | enum | 예 | teacher, owner | `assigned`, `closed` |
| createdBy | string | 예 | internal, owner | 생성자 |
| createdAt | datetime | 예 | internal, owner | 생성일 |

```json
{
  "homeworkId": "homework_2026-06-03_001",
  "lessonId": "lesson_2026-06-03_mwf-4-7",
  "classId": "class_mwf-4-7_high1",
  "studentIds": ["student_001", "student_002", "student_003"],
  "title": "수학의 정석 19~24번",
  "curriculumLabel": "공통수학1",
  "description": "오늘은 19~24번, 총 6문제",
  "dueDate": "2026-06-05",
  "assignedDate": "2026-06-03",
  "status": "assigned",
  "createdBy": "teacher_001",
  "createdAt": "2026-06-03T18:50:00+09:00"
}
```

## 8. HomeworkSubmission

학생의 완료 체크와 강사의 확인을 분리합니다. 학생이 직접 입력하는 기본 항목은 `studentStatus`와 `checkedAt`입니다.

Day 14-16 기준으로 학생 화면과 원장/강사 화면은 같은 숙제 상태를 봅니다.

- 학생: `studentStatus`를 `checked_done`으로 바꿀 수 있습니다.
- 원장/강사 운영자: `teacherStatus`를 `verified`, `partial`, `missing`으로 확인합니다.
- 밀린 숙제 목록: `dueDate`가 지났고 `teacherStatus`가 `verified`가 아닌 항목을 우선 표시합니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| homeworkSubmissionId | string | 예 | internal, teacher, owner | 공통 HomeworkSubmissionId |
| homeworkId | string | 예 | internal, teacher, owner | 연결 숙제 |
| studentId | string | 예 | internal, teacher, owner | 제출 학생 |
| studentStatus | enum | 예 | student, parent, teacher, owner | `not_started`, `checked_done`, `need_help` |
| teacherStatus | enum | 예 | student, parent, teacher, owner | `unverified`, `verified`, `partial`, `missing` |
| studentComment | string | 아니오 | student, teacher, owner | 학생 메모 |
| teacherComment | string | 아니오 | parent, teacher, owner, ai_input | 강사 확인 메모 |
| checkedAt | datetime | 아니오 | student, teacher, owner | 학생 체크 시각 |
| verifiedAt | datetime | 아니오 | teacher, owner | 강사 확인 시각 |
| isOverdue | boolean | 예 | student, parent, teacher, owner | 밀린 숙제 여부 |

```json
{
  "homeworkSubmissionId": "submission_homework_2026-06-03_001_student_001",
  "homeworkId": "homework_2026-06-03_001",
  "studentId": "student_001",
  "studentStatus": "checked_done",
  "teacherStatus": "unverified",
  "studentComment": "",
  "teacherComment": "",
  "checkedAt": "2026-06-04T21:20:00+09:00",
  "verifiedAt": null,
  "isOverdue": false
}
```

## 9. Report

수업 기록에서 생성되는 리포트 초안 또는 스냅샷입니다. 학부모 공개 범위는 BTLmath 학부모 화면 확인 후 확정합니다.

Day 10-12 기준으로 리포트는 세 단계입니다.

1. `ReportTemplate`: 문장 틀
2. `Report Draft`: 수업 기록을 넣어 만든 초안
3. `Report Snapshot`: 검수/저장된 시점의 본문 보관

향후 실제 구현에서는 기본 데이터를 바탕으로 AI API를 호출해 보고서 초안을 작성합니다. 현재 MVP 화면에서는 실제 AI API 호출과 실제 발송 대신 모의 초안과 모의 발송 상태만 둡니다.

AI API 입력 후보:

- 학생 이름, 학교, 학년, 교과서, 특이사항
- 수업 날짜, 수업명, 시간
- 출결/등하원 데이터
- 지난 숙제, 오늘 나간 숙제
- 데일리 코멘트
- 행동태그, 획득 XP/CP

등하원 시간은 추후 별도 출결앱을 만들어 연동합니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| reportId | string | 예 | internal, teacher, owner | 공통 ReportId |
| studentId | string | 예 | internal, teacher, owner | 대상 학생 |
| lessonId | string | 아니오 | internal, teacher, owner | 원천 수업 |
| sourceRecordIds | string[] | 예 | internal, teacher, owner | 원천 기록 |
| audience | enum | 예 | internal, teacher, owner | `parent`, `student`, `internal` |
| status | enum | 예 | teacher, owner | `draft`, `reviewed`, `approved`, `mock_sent`, `archived` |
| title | string | 예 | parent, teacher, owner | 리포트 제목 |
| body | string | 예 | parent, teacher, owner | 리포트 본문 |
| aiDraftId | string | 아니오 | internal, teacher, owner | AI 초안 연결 |
| reviewedBy | string | 아니오 | internal, owner | 검수자 |
| createdAt | datetime | 예 | internal, owner | 생성일 |

```json
{
  "reportId": "report_2026-06-03_student_001",
  "studentId": "student_001",
  "lessonId": "lesson_2026-06-03_mwf-4-7",
  "sourceRecordIds": ["lsr_2026-06-03_mwf-4-7_student_001"],
  "audience": "parent",
  "status": "draft",
  "title": "2026-06-03 수업 리포트",
  "body": "오늘은 공통수학1 19~24번을 학습했습니다. 개념 이해는 좋으나 계산 실수가 반복되어 다음 수업에서 확인 예정입니다.",
  "aiDraftId": "ai_draft_report_2026-06-03_student_001",
  "reviewedBy": null,
  "createdAt": "2026-06-03T19:20:00+09:00"
}
```

## 10. MakeupTask

보강, 재시험, 숙제보충 같은 후속조치입니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| makeupTaskId | string | 예 | internal, teacher, owner | 후속조치 ID |
| type | enum | 예 | student, parent, teacher, owner | `homework_makeup`, `absence_makeup`, `retest` |
| studentId | string | 예 | internal, teacher, owner | 대상 학생 |
| sourceLessonId | string | 아니오 | internal, teacher, owner | 원천 수업 |
| sourceHomeworkId | string | 아니오 | internal, teacher, owner | 원천 숙제 |
| sourceExamId | string | 아니오 | internal, teacher, owner | 원천 시험 |
| dueDate | date | 아니오 | student, parent, teacher, owner | 마감/예정일 |
| status | enum | 예 | student, parent, teacher, owner | `open`, `scheduled`, `resolved`, `canceled` |
| note | string | 아니오 | teacher, owner, ai_input | 내부 메모 |
| createdAt | datetime | 예 | internal, owner | 생성일 |

```json
{
  "makeupTaskId": "makeup_2026-06-03_student_001_001",
  "type": "homework_makeup",
  "studentId": "student_001",
  "sourceLessonId": "lesson_2026-06-03_mwf-4-7",
  "sourceHomeworkId": "homework_2026-06-03_001",
  "sourceExamId": null,
  "dueDate": "2026-06-05",
  "status": "open",
  "note": "19~24번 중 23번 풀이를 다시 확인",
  "createdAt": "2026-06-03T19:15:00+09:00"
}
```

## 11. Exam

시험/평가 단위입니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| examId | string | 예 | internal, teacher, owner | 공통 ExamId |
| classId | string | 아니오 | internal, teacher, owner | 대상 반 |
| name | string | 예 | student, parent, teacher, owner | 시험명 |
| date | date | 예 | student, parent, teacher, owner | 시험일 |
| studentIds | string[] | 예 | internal, teacher, owner | 응시 대상 |
| problemIds | string[] | 아니오 | internal, teacher, owner | 문항 목록 |
| status | enum | 예 | teacher, owner | `planned`, `graded`, `reviewed` |
| createdAt | datetime | 예 | internal, owner | 생성일 |

```json
{
  "examId": "exam_2026-high1-midterm-math-01",
  "classId": "class_mwf-4-7_high1",
  "name": "고1 내신 대비 1회 평가",
  "date": "2026-06-10",
  "studentIds": ["student_001", "student_002", "student_003"],
  "problemIds": ["problem_textbook-jungsuk-common1_0019", "problem_textbook-jungsuk-common1_0020"],
  "status": "planned",
  "createdAt": "2026-06-02T10:00:00+09:00"
}
```

## 12. ProblemStatus

학생별 문항 상태입니다. Problem 원본과 학생별 결과를 분리합니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| problemStatusId | string | 예 | internal, teacher, owner | 상태 ID |
| problemId | string | 예 | internal, teacher, owner | 문항 원본 |
| studentId | string | 예 | internal, teacher, owner | 학생 |
| examId | string | 아니오 | internal, teacher, owner | 연결 시험 |
| status | enum | 예 | student, parent, teacher, owner | `correct`, `wrong`, `skipped`, `retry_needed`, `resolved` |
| wrongReason | string | 아니오 | teacher, owner, ai_input | 오답 원인 |
| retryTaskId | string | 아니오 | internal, teacher, owner | 재시험/복습 과제 |
| updatedAt | datetime | 예 | internal, owner | 수정일 |

```json
{
  "problemStatusId": "problem_status_exam_2026-high1-midterm-math-01_student_001_0019",
  "problemId": "problem_textbook-jungsuk-common1_0019",
  "studentId": "student_001",
  "examId": "exam_2026-high1-midterm-math-01",
  "status": "retry_needed",
  "wrongReason": "부호 처리 실수",
  "retryTaskId": "makeup_2026-06-10_student_001_retest",
  "updatedAt": "2026-06-10T20:00:00+09:00"
}
```

## 13. Notice

학생과 학부모에게 보여주는 공지입니다. MVP에서는 시험 후 self-check 설문 진입점으로 우선 사용합니다. self-check는 항상 있는 메뉴가 아니라 원장이 필요할 때 공지로 띄우는 이벤트성 설문입니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| noticeId | string | 예 | internal, teacher, owner | 공지 ID |
| type | enum | 예 | student, parent, teacher, owner | `self_check_survey`, `general`, `homework_notice`, `parent_notice` |
| title | string | 예 | student, teacher, owner | 공지 제목 |
| body | string | 아니오 | student, teacher, owner | 공지 내용 |
| targetStudentIds | string[] | 예 | internal, teacher, owner | 대상 학생 |
| audience | enum | 예 | internal, teacher, owner | `student`, `parent`, `both`, `internal` |
| examId | string | 아니오 | internal, teacher, owner | 연결 시험 |
| surveyMode | enum | 아니오 | internal, teacher, owner | `internal_form`, `external_link`, `none` |
| externalUrl | string | 아니오 | student, teacher, owner | Tally 등 외부 설문 링크 |
| externalFormId | string | 아니오 | internal, teacher, owner | 외부 설문 식별자 |
| surveySchema | object | 아니오 | student, teacher, owner | self-check 질문 구조 |
| status | enum | 예 | teacher, owner | `draft`, `published_mock`, `closed` |
| createdBy | string | 예 | internal, owner | 작성자 |
| createdAt | datetime | 예 | internal, owner | 작성일 |

```json
{
  "noticeId": "notice_selfcheck_2026-high1-midterm-math-01",
  "type": "self_check_survey",
  "title": "고1 내신 대비 1회 평가 self-check",
  "body": "시험 후 느낀 점과 어려웠던 문항을 작성해주세요.",
  "targetStudentIds": ["student_001", "student_002", "student_003"],
  "audience": "student",
  "examId": "exam_2026-high1-midterm-math-01",
  "surveyMode": "external_link",
  "externalUrl": "https://tally.so/r/example",
  "externalFormId": "tally_selfcheck_2026-high1-midterm-math-01",
  "surveySchema": {
    "questions": [
      { "key": "difficulty", "label": "가장 어려웠던 부분은?", "type": "text" },
      { "key": "mistakePattern", "label": "실수 유형은?", "type": "text" },
      { "key": "confidence", "label": "체감 자신감", "type": "scale_1_5" }
    ]
  },
  "status": "published_mock",
  "createdBy": "teacher_001",
  "createdAt": "2026-06-10T18:00:00+09:00"
}
```

## 14. SelfCheck

시험 후 학생 자기 점검입니다. 학생이 공지를 클릭해 설문을 작성하면 원문 답변이 저장되고, AI가 표준화된 형태로 가공해 강사 화면에 보여줍니다. 외부 Tally 링크를 쓰는 경우에도 최종적으로는 SelfCheck 형태로 가져와 저장하는 것을 목표로 합니다.

| 필드 | 타입 | 필수 | 공개 범위 | 설명 |
| --- | --- | --- | --- | --- |
| selfCheckId | string | 예 | internal, teacher, owner | self-check ID |
| noticeId | string | 예 | internal, teacher, owner | self-check 설문 공지 ID |
| studentId | string | 예 | internal, teacher, owner | 학생 |
| examId | string | 아니오 | internal, teacher, owner | 연결 시험 |
| sourceType | enum | 예 | internal, teacher, owner | `internal_form`, `external_tally`, `manual_import` |
| externalResponseId | string | 아니오 | internal, teacher, owner | 외부 설문 응답 ID |
| rawAnswers | object | 예 | student, teacher, owner, ai_input | 학생 원문 답변 |
| normalizedSummary | object | 아니오 | teacher, owner | AI 표준화 요약 |
| aiDraftId | string | 아니오 | internal, teacher, owner | AI 가공 초안 |
| reviewStatus | enum | 예 | teacher, owner | `needs_review`, `reviewed`, `hidden` |
| createdAt | datetime | 예 | internal, owner | 작성일 |

```json
{
  "selfCheckId": "selfcheck_exam_2026-high1-midterm-math-01_student_001",
  "noticeId": "notice_selfcheck_2026-high1-midterm-math-01",
  "studentId": "student_001",
  "examId": "exam_2026-high1-midterm-math-01",
  "sourceType": "external_tally",
  "externalResponseId": "tally_response_abc123",
  "rawAnswers": {
    "difficulty": "문제 조건을 식으로 바꾸는 게 어려웠어요.",
    "mistakePattern": "계산 과정에서 부호를 자주 틀렸어요.",
    "confidence": 3
  },
  "normalizedSummary": {
    "difficultyArea": "조건 해석",
    "mistakePattern": "부호 실수",
    "confidenceLevel": "medium",
    "recommendedAction": "조건 해석 문제 3개와 부호 점검 루틴 추가"
  },
  "aiDraftId": "ai_draft_selfcheck_student_001_2026-high1-midterm-math-01",
  "reviewStatus": "needs_review",
  "createdAt": "2026-06-10T21:30:00+09:00"
}
```

## 15. Status Values

| 영역 | 상태값 |
| --- | --- |
| 출결 | `present`, `late`, `absent`, `excused` |
| 수업 | `scheduled`, `completed`, `canceled` |
| 숙제 배정 | `assigned`, `closed` |
| 학생 숙제 체크 | `not_started`, `checked_done`, `need_help` |
| 강사 숙제 확인 | `unverified`, `verified`, `partial`, `missing` |
| 리포트 | `draft`, `reviewed`, `approved`, `mock_sent`, `archived` |
| 후속조치 | `open`, `scheduled`, `resolved`, `canceled` |
| 시험 | `planned`, `graded`, `reviewed` |
| 문항 상태 | `correct`, `wrong`, `skipped`, `retry_needed`, `resolved` |
| 공지 | `draft`, `published_mock`, `closed` |
| self-check 검수 | `needs_review`, `reviewed`, `hidden` |
| self-check 설문 방식 | `internal_form`, `external_link`, `none` |
| self-check 응답 출처 | `internal_form`, `external_tally`, `manual_import` |
| AI 검수 | `draft`, `needs_review`, `approved`, `rejected`, `published` |

## 16. Data Flow Rules

- LessonStudentRecord는 리포트, 보강, 상담의 원천입니다.
- HomeworkSubmission은 학생 완료 체크와 강사 확인을 모두 저장합니다.
- 학생이 직접 체크하는 기본 항목은 HomeworkSubmission의 숙제 완료 체크입니다.
- Day 16의 밀린 숙제 목록은 Homework/HomeworkSubmission 상태에서 파생됩니다.
- 시험 후 self-check는 상시 메뉴가 아니라 필요할 때 Notice를 통해 열립니다.
- self-check 설문은 웹앱 내부 설문 또는 Tally 같은 외부 링크 방식 모두 허용합니다.
- 외부 설문을 쓰더라도 최종 강사 화면에는 SelfCheck의 표준화 결과로 표시합니다.
- Report는 원천 기록을 복사하지 않고 `sourceRecordIds`로 연결하되, 최종 발송 시점에는 스냅샷을 남깁니다.
- Problem은 문항 원본이고 ProblemStatus는 학생별 상태입니다.
- Notification은 발송 결과가 아니라 발송 시도와 로그입니다. Day 2에서는 모의 로그만 허용합니다.
- 실제 발송, 삭제, 초기화, 외부 연동은 데이터 모델에만 방향을 남기고 구현하지 않습니다.
