import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { saveManualAttendanceAction } from "../src/domains/lessons/manualAttendanceSaveController.js";

function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

function createStateAdapters(applyOrder) {
  let lessons = [
    { lessonId: "lesson-target", className: "TARGET 이전" },
    { lessonId: "lesson-control", className: "CONTROL 유지" }
  ];
  let records = [
    { lessonStudentRecordId: "record-target", attendanceStatus: "pending" },
    { lessonStudentRecordId: "record-control", attendanceStatus: "present" }
  ];
  let jobs = [
    { notificationJobId: "job-control", status: "scheduled" }
  ];

  return {
    getState: () => ({ jobs, lessons, records }),
    onLesson: (lesson) => {
      applyOrder.push("lesson");
      lessons = upsertById(lessons, lesson, "lessonId");
    },
    onNotificationJob: (job) => {
      applyOrder.push("job");
      jobs = upsertById(jobs, job, "notificationJobId");
    },
    onRecord: (record) => {
      applyOrder.push("record");
      records = upsertById(records, record, "lessonStudentRecordId");
    }
  };
}

const scheduledOrder = [];
const scheduledAdapters = createStateAdapters(scheduledOrder);
const requestPayload = {
  action: "status",
  attendanceStatus: "absent",
  lessonId: "lesson-target",
  studentId: "student-target"
};
let receivedPayload = null;
const scheduledResult = await saveManualAttendanceAction({
  nextAttendanceStatus: "absent",
  ...scheduledAdapters,
  options: { sendAlimtalk: true },
  payload: requestPayload,
  request: async (payload) => {
    scheduledOrder.push("request");
    receivedPayload = payload;
    return {
      alimtalk: {
        result: {
          notificationJob: {
            notificationJobId: "job-target",
            status: "scheduled"
          }
        }
      },
      lesson: { lessonId: "lesson-target", className: "TARGET 갱신" },
      record: {
        lessonStudentRecordId: "record-target",
        attendanceStatus: "absent"
      }
    };
  }
});

assert.equal(receivedPayload, requestPayload);
assert.deepEqual(scheduledOrder, ["request", "lesson", "record", "job"]);
assert.deepEqual(scheduledResult, {
  alimtalk: {
    result: {
      notificationJob: {
        notificationJobId: "job-target",
        status: "scheduled"
      }
    }
  },
  record: {
    lessonStudentRecordId: "record-target",
    attendanceStatus: "absent"
  },
  saved: true
});
assert.deepEqual(scheduledAdapters.getState(), {
  jobs: [
    { notificationJobId: "job-control", status: "scheduled" },
    { notificationJobId: "job-target", status: "scheduled" }
  ],
  lessons: [
    { lessonId: "lesson-target", className: "TARGET 갱신" },
    { lessonId: "lesson-control", className: "CONTROL 유지" }
  ],
  records: [
    { lessonStudentRecordId: "record-target", attendanceStatus: "absent" },
    { lessonStudentRecordId: "record-control", attendanceStatus: "present" }
  ]
});

for (const acceptedStatus of ["scheduled", "dry_run"]) {
  const applyOrder = [];
  const adapters = createStateAdapters(applyOrder);
  const result = await saveManualAttendanceAction({
    nextAttendanceStatus: "absent",
    ...adapters,
    options: { sendAlimtalk: true },
    payload: requestPayload,
    request: async () => ({
      alimtalk: {
        result: {
          notificationJob: {
            notificationJobId: `job-${acceptedStatus}`,
            status: acceptedStatus
          }
        }
      },
      record: {
        lessonStudentRecordId: "record-target",
        attendanceStatus: "absent"
      }
    })
  });
  assert.equal(result.saved, true);
  assert.deepEqual(applyOrder, ["record", "job"]);
}

const partialFailureOrder = [];
const partialFailureAdapters = createStateAdapters(partialFailureOrder);
await assert.rejects(
  saveManualAttendanceAction({
    nextAttendanceStatus: "absent",
    ...partialFailureAdapters,
    options: { sendAlimtalk: true },
    payload: requestPayload,
    request: async () => {
      partialFailureOrder.push("request");
      return {
        alimtalk: {
          error: "가상 예약 실패",
          result: {
            notificationJob: {
              notificationJobId: "job-target",
              status: "failed"
            }
          }
        },
        record: {
          lessonStudentRecordId: "record-target",
          attendanceStatus: "absent"
        }
      };
    }
  }),
  /결석 출결은 저장됐지만 다음 정각 알림톡 예약에 실패했습니다\. 가상 예약 실패/
);
assert.deepEqual(partialFailureOrder, ["request", "record", "job"]);
assert.equal(
  partialFailureAdapters.getState().records[0].attendanceStatus,
  "absent",
  "partial failure must keep the saved TARGET record"
);
assert.equal(
  partialFailureAdapters.getState().records[1].attendanceStatus,
  "present",
  "partial failure must preserve the CONTROL record"
);
assert.equal(partialFailureAdapters.getState().jobs[1].status, "failed");

for (const scenario of [
  {
    label: "send disabled",
    nextAttendanceStatus: "absent",
    options: { sendAlimtalk: false }
  },
  {
    label: "non-absence status",
    nextAttendanceStatus: "present",
    options: { sendAlimtalk: true }
  }
]) {
  const applyOrder = [];
  const adapters = createStateAdapters(applyOrder);
  const result = await saveManualAttendanceAction({
    ...scenario,
    ...adapters,
    payload: requestPayload,
    request: async () => ({
      alimtalk: { error: "가상 즉시발송 실패" },
      record: {
        lessonStudentRecordId: "record-target",
        attendanceStatus: scenario.nextAttendanceStatus
      }
    })
  });
  assert.equal(result.saved, true, scenario.label);
  assert.deepEqual(applyOrder, ["record"], scenario.label);
}

for (const failure of [
  {
    expectedMessage: /가상 request 실패/,
    request: async () => {
      throw new Error("가상 request 실패");
    }
  },
  {
    expectedMessage: /출결 저장 결과가 없습니다/,
    request: async () => ({ lesson: { lessonId: "lesson-target" } })
  }
]) {
  const applyOrder = [];
  const adapters = createStateAdapters(applyOrder);
  const stateBefore = JSON.stringify(adapters.getState());
  await assert.rejects(
    saveManualAttendanceAction({
      nextAttendanceStatus: "present",
      ...adapters,
      payload: requestPayload,
      request: failure.request
    }),
    failure.expectedMessage
  );
  assert.deepEqual(applyOrder, []);
  assert.equal(JSON.stringify(adapters.getState()), stateBefore);
}

const source = await readFile(
  new URL("../src/domains/lessons/manualAttendanceSaveController.js", import.meta.url),
  "utf8"
);
for (const forbidden of [
  "useState",
  "useEffect",
  "setRecords",
  "setLessons",
  "recordsRef",
  "fetch(",
  "/api/",
  "Supabase",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `manual save controller must not own ${forbidden}`);
}

console.log("manual attendance save TARGET/CONTROL controller fixtures passed");
