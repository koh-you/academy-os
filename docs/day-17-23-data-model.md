# Day 17-23 Data Model Addendum

## StudentHomeworkRegistration

학생이 직접 등록한 숙제입니다. 현재는 localStorage 목업이며, 강사 확인 전 상태로 저장됩니다.

| Field | Type | Required | Scope | Example |
| --- | --- | --- | --- | --- |
| homeworkId | string | yes | internal, teacher | `homework_student_1717650000000` |
| studentId | string | yes | internal, teacher | `student_004` |
| lessonId | string | no | internal, teacher | `lesson_2026-06-06_tt_sat_back` |
| title | string | yes | student, teacher | `수학의 정석` |
| subject | string | yes | student, teacher | `공통수학1` |
| homeworkType | enum | yes | student, teacher | `current`, `extra1`, `extra2` |
| totalProblems | number | no | student, teacher | `30` |
| assignedDate | date | yes | student, teacher | `2026-06-06` |
| dueDate | date | yes | student, teacher | `2026-06-10` |
| studentStatus | enum | yes | student, teacher | `not_started`, `checked_done` |
| teacherStatus | enum | yes | teacher | `unverified`, `verified`, `partial`, `missing` |
| createdByRole | enum | yes | internal, teacher | `student` |

## MakeupTask

밀린 숙제, 결석, 재시험 필요 상태에서 생성되는 후속조치 단위입니다.

| Field | Type | Required | Scope | Example |
| --- | --- | --- | --- | --- |
| makeupTaskId | string | yes | internal, teacher | `makeup_1717650000000_student_004` |
| taskType | enum | yes | teacher | `homework_makeup`, `absence_makeup`, `retest` |
| studentId | string | yes | internal, teacher | `student_004` |
| sourceId | string | yes | internal, teacher | `homework_overdue_student_004_001` |
| sourceLabel | string | yes | teacher | `수학의 정석 13~18번` |
| reason | string | yes | teacher | `밀린 숙제` |
| scheduledDate | date | yes | teacher | `2026-06-06` |
| scheduledTime | time | no | teacher | `19:00` |
| status | enum | yes | teacher | `draft`, `scheduled`, `done` |
| notificationDraft | string | no | teacher | `TestS12 숙제보충 안내입니다...` |

## NotificationLog

실제 발송 기록이 아니라 MVP의 모의 로그입니다.

| Field | Type | Required | Scope | Example |
| --- | --- | --- | --- | --- |
| notificationLogId | string | yes | internal, teacher | `notification_1717650000000_makeup_001` |
| makeupTaskId | string | yes | internal, teacher | `makeup_1717650000000_student_004` |
| studentId | string | yes | internal, teacher | `student_004` |
| channel | enum | yes | internal, teacher | `mock` |
| status | enum | yes | teacher | `draft_logged` |
| message | string | yes | teacher | `TestS12 숙제보충 안내입니다...` |
| createdAt | datetime | yes | internal, teacher | `2026-06-06T20:00:00+09:00` |
