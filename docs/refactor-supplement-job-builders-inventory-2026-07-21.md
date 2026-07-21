# Supplement Job Builders Refactoring Inventory — 2026-07-21

## 결론

- 10번 `student-parent portals`의 표시 구조 분리는 완료로 닫는다. 현재 `StudentPortalV2`는 학생 선택, 탭 상태, Supabase 범위 데이터 파생, 쓰기 권한과 callback을 소유하고 `StudentPortalShell`은 렌더만 담당한다.
- 학생 숙제 완료, 질문 CRUD, 시험 후 제출의 사람 검수는 보류 상태이며 통과가 아니다.
- 교사 bearer session과 시험지 Storage 열람 권한은 포털 표시 리팩터링과 분리된 고위험 보안 gate로 유지한다.
- 11번 `supplement job builders`의 첫 구현 범위는 네트워크 호출이 없는 순수 문구·시각·ID·payload builder만이다. `notification_jobs` 저장, Solapi 예약/취소, 화면 상태 갱신은 이동하지 않는다.

## 현재 원천과 레이어

| 레이어 | 현재 코드 | 입력 원천 | 저장/외부 영향 | 분리 판단 |
| --- | --- | --- | --- | --- |
| 보충 task 원본 | `makeup_tasks`, `lessons`, 학생 정보 | Supabase `makeup_tasks`, `lessons`, `students` | 원본 저장은 기존 보충관리 API | 이번 builder 분리에서 변경 금지 |
| 문구 템플릿 | `normalizeNotificationTemplates`, `createNotificationDraft`, `buildSupplementScheduleNoticeBody` | Supabase `app_state.aiSettings.notificationTemplates` | 없음 | 순수 helper 후보 |
| 시간/ID | `getSupplementStudentReminderJobId`, `getSupplementStudentReminderScheduledAt`, `getNextHourlyAlimtalkReservationAt` | task, 명시적 기준 시각 | 없음 | 순수 helper 후보. 현재 시각은 인자로 주입 |
| job payload | `buildSupplementStudentReminderJob`, `buildSupplementScheduleNoticeJob` | task, student, scheduledAt, template | 없음. 객체만 생성 | 첫 추출 대상 |
| 현재 job 선택/표시 | `getSupplementStudentReminderJob`, `getSupplementScheduleNoticeJob`, `getSupplementNotificationControlJob`, 상태 helper | 화면이 읽은 `notificationJobs` | 없음 | 순수 selector 후보 |
| 프론트 예약 orchestration | `reserveNotificationJob`, `reserveSupplementStudentReminder`, `reserveSupplementScheduleNoticeJob`, `reserveSupplementScheduleNotices`, `handleReserveSupplementNotificationControl` | builder 결과, 현재 job 목록 | `/api/notification-jobs/reserve`, React 상태 변경 | 고위험. 첫 추출에서 제외 |
| 프론트 취소/실패 기록 | `handleCancelSupplementNotificationControl`, `persistSupplementScheduleNoticeFailure`, `cancelSupplementStudentReminder`, `persistCanceledNotificationJob` | 기존 job, 교사 동작 | 예약 취소 API 또는 Supabase 실패/취소 row | 고위험. 별도 gate |
| 서버 예약 orchestration | `reserveNotificationJobInSolapi`, fingerprint/pending reuse, `sendScheduledNotificationJobToSolapi` | 예약 요청 job | Supabase claim/upsert, 기존 Solapi 그룹 취소, 새 Solapi 예약 | 매우 높음. 이동 금지 |
| 영속 원천 | `getNotificationJob`, `upsertNotificationJob`, `cancelNotificationJob`, `deleteNotificationJob` | job ID/status | Supabase `notification_jobs` | `api/routes/coreData.js` 유지 |

## 현재 job 계약

### 당일 학생 11시 알림톡

- 유형: `student_reminder`
- 고정 ID: `supplement_student_reminder_<task>_<student>`
- 시각: 보충일 `11:00 +09:00`
- 수신자: `student.studentPhone`
- 본문: 선생님이 저장한 `task.notificationDraft`; 빈 선생님 최종본은 예약 차단
- 템플릿: `absenceMakeupStudentReminder` 또는 `homeworkMakeupStudentReminder`

### 학생 보충 일정 안내

- 유형: `schedule_reminder`
- 시각: 다음 정각, 최소 lead time 보호
- 수신자: `student.studentPhone`
- 본문: `studentScheduleNotificationDraft` 선생님 수정본 우선, 없으면 설정 템플릿 seed
- 확정/변경: `previousScheduleText` 유무로 `supplement_schedule_confirm` 또는 `supplement_schedule_change`

### 학부모 보충 일정 안내

- 유형: `notice_parent`
- 시각: 학생 안내와 같은 다음 정각
- 수신자: `student.parentPhone`
- 본문: `parentScheduleNotificationDraft` 선생님 수정본 우선, 없으면 설정 템플릿 seed
- 서버 발송: 일반 학생 일정 route가 아니라 학부모 알림톡 target 계약을 사용

## 첫 안전 추출 단위 — 11A

목표 파일 후보: `src/domains/notifications/supplementJobBuilders.js`

1. 순수 입력만 받는다: `task`, `student`, `scheduledAt`, `notificationTemplates`, `academyName`, 명시적 `now`.
2. `Date.now()`와 암묵적 전역 `academyBrandName`은 인자로 바꿔 fixture가 같은 결과를 재현하게 한다.
3. `fetch`, `postJson`, Supabase, Solapi, React state, 예약/취소 함수는 새 파일에 들어가면 안 된다.
4. 기존 선생님 수정본 우선순위와 빈 최종본 의미를 바꾸지 않는다.
5. 기존 job의 `notificationType`, `target`, `recipient`, `scheduledAt`, `payload`, `previewBody`, `provider`, `status`, `result` 구조를 그대로 유지한다.
6. 기존 App 호출부는 builder import로만 교체한다. 예약/취소 orchestration은 기존 위치에 둔다.

### 11A 첫 단위 구현 결과

- 완료: 예약시각, deterministic ID, 학생 11시 job payload, 학생·학부모 일정 안내 job payload를 `src/domains/notifications/supplementJobBuilders.js`로 분리했다.
- 입력 경계: `academyName`, `now`, 완성된 `scheduleTitle`과 `reminderBody`를 명시적으로 받는다. 템플릿 seed와 선생님 수정본 우선순위는 `App.jsx`가 계속 소유한다.
- 자동검증: `scripts/test-supplement-job-builders.mjs`를 `npm run test:production`에 연결했다. fixture는 실제 API와 Solapi를 호출하지 않는다.
- 완료: 현재 `notificationJobs` 배열의 우선순위와 학생 11시·학생 일정·학부모 일정 job 선택을 `src/domains/notifications/notificationJobSelectors.js`로 11A-2 분리했다. 일정·유형·대상·상태 우선순위 fixture를 같은 deterministic 테스트에 추가했다.
- 다음 경계: 순수 builder/selector 분리는 완료했다. 다음은 예약·취소·상태 저장이 포함되는 11B이므로 아래 사람 gate 전에는 코드 이동을 시작하지 않는다.

## AI 자동검증 범위

- 결석보강 11시, 숙제보충 11시, 학생 확정/변경, 학부모 확정/변경 fixture의 old contract를 정적/동적 assertion으로 고정한다.
- deterministic `now`를 주입해 ID와 `createdAt`을 검증한다.
- 선생님이 문구를 빈 문자열로 저장한 경우 자동 seed가 되살아나지 않는지 확인한다.
- 대상별 번호와 `notificationType`이 섞이지 않는지 확인한다.
- `npm run test:production`, `npm run build`, `git diff --check`를 실행한다.
- 테스트 중 `/api/notification-jobs/reserve`, `/cancel`, Solapi를 호출하지 않는다.

## 사람 gate — 11B 이후에만

11A 순수 builder 추출 자체는 외부 발송을 만들지 않는다. 실제 예약 orchestration을 이동하거나 수정하는 11B부터 다음을 사람이 확인해야 한다.

1. 삭제해도 되는 테스트 보충 task를 사용한다.
2. 학생 일정, 학부모 일정, 당일 학생 11시 버튼을 각각 열어 대상·시각·문구를 확인한다.
3. 한 종류만 예약했을 때 다른 대상 job이 생성되지 않는지 확인한다.
4. `notification_jobs` row와 Solapi 그룹의 상태·시각·수신번호가 일치하는지 확인한다.
5. 취소 후 OS만 꺼지거나 Solapi만 남지 않는지 확인한다.

## 즉시 중단 조건

- builder 추출에 `/api/notification-jobs/*`, `setNotificationJobs`, Solapi 호출이 함께 이동함.
- 학생/학부모 번호 또는 `notificationType`이 바뀜.
- 선생님 수정본보다 설정 템플릿/자동 seed가 우선함.
- 같은 fingerprint 예약 재사용이나 canceled-during-reserve 보호가 달라짐.
- Supabase row만 바뀌고 실제 Solapi 그룹이 달라지는 경로를 건드려야 함.
- 테스트를 통과시키기 위해 기존 side-effect 기대값을 삭제하거나 낮춰야 함.
