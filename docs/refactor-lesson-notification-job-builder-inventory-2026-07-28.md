# Lesson Notification Job Builder Inventory — 2026-07-28

## 범위와 중단선

- 대상은 `App.jsx`의 `buildLessonNotificationJob` 한 함수다.
- 이 단계는 원천·출력·시계·호출자 경계만 기록한다. 코드 이동, Supabase 변경, `notification_jobs` 저장, Solapi 예약·취소·결과 조회는 수행하지 않는다.
- 다음 이동 후보도 실제 API를 호출하지 않는 순수 builder로만 제한한다. 외부 action을 함께 옮겨야 하면 중단하고 기존 사람 gate를 다시 연다.

## 현재 입력 원천

| 구분 | 현재 원천·helper | builder가 읽는 값 |
| --- | --- | --- |
| 직접 인자 | `lesson`, `student`, `target`, `scheduledDate`, `mode` | 수업/학생 identity, 대상, 예약시각, 예약 모드 |
| 수업기록 | `recordsRef.current` → `getLessonStudentRecord` | 출결, comment, 알림 제외, 수업 내용·교재 |
| 숙제 | `homeworks`, `lessons` → `getLessonHomework` | 이전 숙제, 다음 숙제 |
| 보충 | `makeupTasks` → `getStudentSupplementSchedules` | 학생별 확정 보충 일정 문구 배열 |
| 시험 | `testSessions`, `testAttempts` → `getLessonTestResultLines` | 시험 결과 문구 배열 |
| 설정 | `aiSettings.notificationTemplates`, `academyBrandName` | 알림 template, 학원명 |
| 순수 조합 | `buildLessonReservationPayloadSnapshot`, `getLessonReservationPayloadFingerprint` | 발송 snapshot과 예약 동일성 fingerprint |
| 문구 | 과제 상태 message helper 4개, `buildCommentPreviewText` | payload 상태 문구와 preview |
| identity | `createLessonStudentRecordId`, `getLessonNotificationJobId` | record/job deterministic ID |
| 시계 | `new Date().toISOString()` | job `createdAt` |

## 조기 종료와 대상 분기

- `notificationMutedStudent`/`notificationMutedParent`가 대상에 맞게 켜져 있으면 `null`을 반환한다.
- `target === "student"`만 학생 audience·학생 번호·`student_comment`를 사용하고, 나머지는 학부모 audience·학부모 번호·`parent_comment`를 사용한다.
- 상위 `buildLessonNotificationJobs`가 학생마다 학부모→학생 순서로 호출한 뒤 `null`을 제거한다.

## 반환 계약

### notification job

`notificationJobId`, `notificationType`, `studentId`, `lessonId`, `lessonStudentRecordId`, `target`, `recipient`, `scheduledAt`, `payload`, `previewBody`, `status`, `provider`, `result`, `error`, `createdAt`을 반환한다.

- 고정값: `status="scheduled"`, `provider="academy-os-reserving"`, `result.reservationPending=true`, `error=""`.
- `createdAt`만 현재시각 의존이다. 순수 분리 시 `nowIso`로 외부 주입한다.

### payload

학원명, 과제 상태·대상별 문구, 출결 6필드, comment·보충 안내, 수업 내용·교재, 수업 identity, 이전/다음 숙제, 예약 fingerprint·시각·모드, 학생 identity·전화, 보충 일정, 시험 결과, 대상과 `osScheduled/sendMode`를 포함한다.

## side effect 경계

- builder 내부에는 `fetch`, API, Supabase, Solapi, React setter, localStorage, persist callback이 없다.
- 실제 side effect는 상위 `reserveLessonNotificationJobs`, `persistCanceledNotificationJob`, `applyLessonNotificationPlan`과 수업일지의 예약 audit/취소/반영 action에 남아 있다.

## 다음 분리 계획

1. `17K-2` 완료: 조회가 끝난 record/homework/schedule/test 입력과 고정 `nowIso`를 받는 최종 job builder를 `lessonNotificationJobBuilder.js`로 분리했다.
2. `17K-3` 완료: App의 원천 조회·알림 제외 guard·helper 주입 wrapper와 외부 action 경계를 closeout audit으로 고정했다.
3. `17L-1` 완료: 휴강 short-circuit와 학생별 학부모→학생 job 조합을 `lessonNotificationJobBatch.js` 순수 model로 분리했다.
4. `17L-2` 완료: record의 학생/학부모 알림 제외 flag 선택을 `lessonNotificationJobSelectors.js` 순수 selector로 분리했다.
5. `17L-3` 완료: 현재 record는 React render snapshot이 아니라 `recordsRef.current`에서 찾고 nullish일 때만 빈 record를 만드는 경계임을 inventory했다.
6. 실제 reserve/cancel/reconcile orchestration은 사람 gate 없이 이동하지 않는다.
