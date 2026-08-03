# P3 알림톡 문구 원천 inventory — 2026-08-03

## 목적

출결·수업일지·숙제보충·결석보강·재시험·공지·특강·일정 변경·당일 11시 reminder의 문구가 어디서 만들어지고, 어떤 값을 교사가 편집하며, 어떤 provider template으로 전달되는지 구분한다. 이 문서는 읽기 전용 대조 결과다. 운영 알림 발송·예약·취소는 실행하지 않았다.

알림 한 건은 다음 네 층으로 나눠 본다.

1. provider contract: Solapi template ID와 승인 변수
2. OS composition: 고정 문장·블록 순서·변수 치환
3. human final: 교사가 편집하고 원천 row/job에 저장한 최종 문구
4. transport: 즉시 발송 또는 예약 job

## 현재 원천 지도

| 제품 경로 | OS composition 원천 | 사람 편집·저장 원천 | provider contract | 현재 판단 |
| --- | --- | --- | --- | --- |
| 출결 | `notificationMessageRenderer.js`의 `buildAttendanceBody` | 없음. 출결 record 값만 입력 | `SOLAPI_ATTENDANCE_TEMPLATE_ID`, `#{학원명}/#{학생명}/#{출결본문}` | App 미리보기와 server live body가 같은 pure renderer 사용 |
| 수업일지 학생·학부모 | `notificationMessageRenderer.js`의 `buildLessonNotificationBody` | 학생/학부모 코멘트·수업 기록, 숙제 확인 fragment 2개는 `app_state.aiSettings.notificationTemplates` | 학부모 daily report 또는 학생 comment template | App preview·발송 직전 preview·route live body 동일성 고정 |
| 숙제보충 | `homeworkMakeupStudentReminder` | 교사 최종 `makeup_tasks.notificationDraft` | 학생 comment template | 설정 원천 연결 완료 |
| 결석보강 | `absenceMakeupStudentReminder` | 교사 최종 `makeup_tasks.notificationDraft` | 학생 comment template | 설정 원천 연결 완료 |
| 보충 일정 확정·변경 | `supplementScheduleConfirmNotice`, `supplementScheduleChangeNotice` | 학생·학부모별 schedule draft를 `makeup_tasks`에 저장 | 학생 comment 또는 학부모 daily report template | 설정 원천 연결 완료 |
| 당일 학생 11시 reminder | 숙제/결석보강 reminder template | `makeup_tasks.notificationDraft` 최종본 | 학생 comment template | 설정 원천 연결 완료. 실제 예약은 별도 행동 |
| 재시험 | App의 `createNotificationDraft` fallback과 수업 리포트의 schedule line | 보충 task draft는 저장되지만 독립 11시 reminder 대상은 아님 | 현재 수업 comment 경로 | 코드 고정이며 실제 transport 범위를 먼저 확정해야 함 |
| 일반 공지 | `notificationCenterConfig.js`의 교재/보강/공지 preset | 공지 composer local draft가 job의 `noticeText`로 저장 | 학생 comment 또는 학부모 daily report template | preset 3개가 Settings 밖 코드 고정 |
| 특강 | `buildSpecialLectureNoticeText`와 특강 preset | guide에서 만든 문구를 공지 composer에서 편집 후 job 저장 | 설정 시 `SOLAPI_SPECIAL_LECTURE_TEMPLATE_ID`, 미설정이면 대상별 comment template fallback | guide builder와 preset이 Settings 밖 코드 고정 |

## 이미 설정에서 관리하는 6개 key

- `lessonNextHomeworkFollowup`
- `lessonStayAfterHomeworkFollowup`
- `absenceMakeupStudentReminder`
- `homeworkMakeupStudentReminder`
- `supplementScheduleConfirmNotice`
- `supplementScheduleChangeNotice`

모두 `Supabase app_state.aiSettings.notificationTemplates`를 읽는다. 보충 문구는 template로 초안을 만든 뒤 교사가 고친 최종본을 `makeup_tasks`에 저장하고, 예약 job은 그 최종본을 `reminderBody` 또는 `message`로 전달한다. 설정 변경이 이미 저장된 교사 최종본을 덮어쓰면 안 된다.

## provider template 4개

- `SOLAPI_ATTENDANCE_TEMPLATE_ID`
- `SOLAPI_DAILY_REPORT_TEMPLATE_ID`
- `SOLAPI_SPECIAL_LECTURE_TEMPLATE_ID`
- `SOLAPI_STUDENT_COMMENT_TEMPLATE_ID`

이 값은 카카오 승인 형식 선택자다. OS 편집 문구와 같은 저장 원천이 아니며 Settings에서 문구를 바꾼다고 provider 변수명이나 template ID를 자동 변경하지 않는다.

## 발견한 경계와 위험

1. P3-2에서 출결의 사용되지 않던 `createAttendanceNotificationText`를 제거하고 App·server가 같은 `buildAttendanceBody`를 사용하도록 정리했다.
2. P3-2에서 수업일지 client preview, 발송 직전 server preview, Solapi route live body를 `buildLessonNotificationBody`에 연결했다. provider 변수명과 template ID 선택은 route 경계에 그대로 남는다.
3. 재시험 task는 hard-coded draft가 있으나 숙제·결석보강과 같은 독립 11시 job 대상은 아니다. 설정 항목을 먼저 노출하면 실제로 발송되는 것처럼 오해할 수 있다.
4. 공지 preset과 특강 guide 문구는 code-owned seed다. 교사가 작성한 현재 composer draft와 이미 저장된 notification job은 catalog 변경으로 재생성하지 않는다.

## P3 실행 순서

1. P3-1 catalog 경계: 기존 6개 default·변수 metadata·normalize를 notification domain의 pure catalog로 이동하고 문자열을 문자 단위로 보존한다.
2. P3-2 preview/live 경계: 출결과 수업일지의 shared renderer·fixture를 먼저 만들고 server 실제 변수와 client preview가 같은 결과를 쓰게 한다. provider 행동은 실행하지 않는다.
3. P3-3 설정 확장: 공지 preset·특강 guide·재시험의 실제 transport 범위를 확정한 뒤 숨은 hard-code를 catalog/Settings에 연결한다. 기존 human final은 보존한다.
4. P3-4 closeout: 9개 제품 경로의 seed→draft→persisted final→provider variables를 가상 fixture와 safe browser로 대조한다. 실제 발송·예약·취소는 사람 gate다.

자동 기준선은 `npm run test:notification-template-inventory`다.

## 진행 상태

- P3-1 완료: 기존 6개 default, Settings metadata, legacy schedule template 변환, normalize를 `src/domains/notifications/notificationTemplateCatalog.js`로 옮겼다. App과 server의 숙제 follow-up 기본값이 같은 pure catalog를 읽으며 저장 key·문구·빈 사용자 값·legacy migration 결과는 그대로다.
- P3-2 완료: `notificationMessageRenderer.js`가 출결 body와 수업일지 body의 공통 normalize/line/block/attendance 조립을 소유한다. App preview와 server live 결과를 학부모·학생 fixture로 직접 대조하며 공지 human final override도 보존한다.
- 다음 P3-3은 공지 preset·특강 guide·재시험의 실제 transport 범위를 확정한 뒤 code-owned seed를 catalog/Settings에 연결한다. 실제 provider 행동은 실행하지 않는다.
