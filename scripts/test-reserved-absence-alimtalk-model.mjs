import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createReservedAbsenceAlimtalkSummary,
  createReservedAbsenceAlimtalkWarningText,
  isManualAbsenceAlimtalkJob,
  isReservedAbsenceAlimtalkJob,
  selectReservedAbsenceAlimtalkJobs,
  shouldWarnAboutReservedAbsenceAlimtalk
} from "../src/domains/lessons/reservedAbsenceAlimtalkModel.js";

const source = await readFile(
  new URL("../src/domains/lessons/reservedAbsenceAlimtalkModel.js", import.meta.url),
  "utf8"
);

// api/server.js buildManualAbsenceAttendanceJob 이 실제로 만드는 모양.
function createScheduledAbsenceJob(overrides = {}) {
  return {
    notificationJobId: "attendance_absence_record-1_2026092521",
    notificationType: "attendance",
    lessonId: "lesson-1",
    studentId: "student-1",
    target: "parent",
    scheduledAt: "2026-09-25T12:00:00.000Z",
    status: "scheduled",
    provider: "academy-os-reserving",
    result: { attendanceSource: "manual_journal", reservationPending: true },
    ...overrides
  };
}

assert.equal(isManualAbsenceAlimtalkJob(createScheduledAbsenceJob()), true);
assert.equal(
  isManualAbsenceAlimtalkJob({
    notificationJobId: "other-id",
    notificationType: "attendance",
    result: { attendanceSource: "manual_journal" }
  }),
  true,
  "job id 규칙이 바뀌어도 수동 결석 알림톡은 attendanceSource 로 알아본다"
);
assert.equal(isManualAbsenceAlimtalkJob({ notificationJobId: "lesson_comment_l1_s1_parent" }), false);
assert.equal(isManualAbsenceAlimtalkJob({ notificationType: "attendance" }), false, "키오스크 출결 알림은 대상이 아니다");
assert.equal(isManualAbsenceAlimtalkJob(), false);

// 남아 있는 예약으로 세는 상태.
for (const status of ["scheduled", "queued", "pending_send", "dry_run"]) {
  assert.equal(
    isReservedAbsenceAlimtalkJob(createScheduledAbsenceJob({ status })),
    true,
    `${status} 는 아직 남아 있는 결석 알림톡 예약이다`
  );
}
// 이미 정리된 예약은 경고 대상이 아니다.
for (const status of ["sent", "canceled", "failed"]) {
  assert.equal(
    isReservedAbsenceAlimtalkJob(createScheduledAbsenceJob({ result: {}, status })),
    false,
    `${status} 는 더 취소할 것이 없다`
  );
}
// 예약 확정 전(reservationPending)이라 상태 문자열이 낯설어도 남은 예약으로 센다.
assert.equal(
  isReservedAbsenceAlimtalkJob(createScheduledAbsenceJob({ status: "reserving" })),
  true
);
// 취소된 예약은 reservationPending 잔재가 있어도 경고하지 않는다.
assert.equal(
  isReservedAbsenceAlimtalkJob(createScheduledAbsenceJob({ status: "canceled" })),
  false
);

const notificationJobs = [
  createScheduledAbsenceJob(),
  createScheduledAbsenceJob({
    notificationJobId: "attendance_absence_record-1_2026092522",
    scheduledAt: "2026-09-25T13:00:00.000Z"
  }),
  createScheduledAbsenceJob({ notificationJobId: "attendance_absence_record-2_2026092521", studentId: "student-2" }),
  createScheduledAbsenceJob({ notificationJobId: "attendance_absence_record-3_2026092521", lessonId: "lesson-2" }),
  createScheduledAbsenceJob({ notificationJobId: "attendance_absence_record-4_2026092521", status: "canceled" }),
  { notificationJobId: "lesson_comment_lesson-1_student-1_parent", lessonId: "lesson-1", studentId: "student-1", notificationType: "parent_comment", status: "scheduled" }
];

assert.deepEqual(
  selectReservedAbsenceAlimtalkJobs({ lessonId: "lesson-1", notificationJobs, studentId: "student-1" })
    .map((job) => job.notificationJobId),
  ["attendance_absence_record-1_2026092521", "attendance_absence_record-1_2026092522"]
);
assert.deepEqual(selectReservedAbsenceAlimtalkJobs({ lessonId: "", notificationJobs, studentId: "student-1" }), []);
assert.deepEqual(selectReservedAbsenceAlimtalkJobs({ lessonId: "lesson-1", notificationJobs, studentId: "" }), []);
assert.deepEqual(selectReservedAbsenceAlimtalkJobs(), []);
assert.deepEqual(selectReservedAbsenceAlimtalkJobs({ lessonId: "lesson-1", notificationJobs: null, studentId: "student-1" }), []);

const summary = createReservedAbsenceAlimtalkSummary({
  lesson: { lessonId: "lesson-1" },
  notificationJobs,
  student: { studentId: "student-1" }
});
assert.equal(summary.count, 2);
assert.deepEqual(summary.notificationJobIds, [
  "attendance_absence_record-1_2026092521",
  "attendance_absence_record-1_2026092522"
]);
assert.deepEqual(summary.scheduledAtLabels, ["21:00", "22:00"], "예약 시각은 한국 시간 라벨이다");

const emptySummary = createReservedAbsenceAlimtalkSummary({
  lesson: { lessonId: "lesson-9" },
  notificationJobs,
  student: { studentId: "student-1" }
});
assert.equal(emptySummary.count, 0);
assert.deepEqual(emptySummary.scheduledAtLabels, []);
assert.equal(createReservedAbsenceAlimtalkSummary().count, 0);

// 결석을 유지하는 저장에는 경고하지 않는다. 결석이 아닌 상태로 저장할 때만 알린다.
assert.equal(
  shouldWarnAboutReservedAbsenceAlimtalk({ nextAttendanceStatus: "absent", reservedAbsenceAlimtalk: summary }),
  false
);
for (const nextAttendanceStatus of ["pending", "present", "late", "checkout", "excused"]) {
  assert.equal(
    shouldWarnAboutReservedAbsenceAlimtalk({ nextAttendanceStatus, reservedAbsenceAlimtalk: summary }),
    true,
    `${nextAttendanceStatus} 로 되돌리면 남은 결석 알림톡 예약을 알려야 한다`
  );
}
assert.equal(
  shouldWarnAboutReservedAbsenceAlimtalk({ nextAttendanceStatus: "pending", reservedAbsenceAlimtalk: emptySummary }),
  false
);
assert.equal(shouldWarnAboutReservedAbsenceAlimtalk(), false);

const warningText = createReservedAbsenceAlimtalkWarningText({
  nextAttendanceStatus: "pending",
  reservedAbsenceAlimtalk: summary
});
assert.match(warningText, /결석 알림톡 2건/);
assert.match(warningText, /21:00, 22:00/);
assert.match(warningText, /자동으로 취소되지 않습니다/);
assert.match(warningText, /알림관리/, "취소할 수 있는 위치를 문구에 담는다");
assert.match(warningText, /예약 취소/);
assert.equal(
  createReservedAbsenceAlimtalkWarningText({ nextAttendanceStatus: "absent", reservedAbsenceAlimtalk: summary }),
  ""
);
assert.equal(
  createReservedAbsenceAlimtalkWarningText({ nextAttendanceStatus: "pending", reservedAbsenceAlimtalk: emptySummary }),
  ""
);
assert.equal(createReservedAbsenceAlimtalkWarningText(), "");
assert.match(
  createReservedAbsenceAlimtalkWarningText({
    nextAttendanceStatus: "pending",
    reservedAbsenceAlimtalk: { count: 1, notificationJobIds: ["x"], scheduledAtLabels: [] }
  }),
  /결석 알림톡 1건이 남아 있습니다\. /,
  "예약 시각을 모르면 시각 괄호 없이 알린다"
);

// 이 모델은 판정만 한다. 예약 취소는 사람이 알림관리에서 하고, 여기서 API 를 부르지 않는다.
for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "getJson",
  "useState",
  "useEffect",
  "localStorage",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `reserved absence model must not include ${forbidden}`);
}

console.log("reserved absence alimtalk model passed");
