import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getHomeworkAssignmentStatus } from "../src/domains/lessons/assignmentStatus.js";
import { createLessonReservationPayloadSnapshot } from "../src/domains/lessons/lessonReservationPayloadSnapshot.js";

// 버그의 핵심: 유추 과제상태는 "지난 숙제가 찍힌 record" 에서 온다. 그 record 는 대개 지난
// 수업의 것이라, 현재 학생 record 하나만 넘기면 못 찾아 빈 값이 된다. 서버 예약 경로는 전체
// records 를 넘기므로, 클라이언트가 빈 값으로 갈리면 예약 지문이 영구히 어긋난다
// (2026-09-15 "예약 업데이트 눌러도 빨간불 그대로").
const currentRecord = {
  lessonId: "lesson_2026-09-15",
  studentId: "student_A",
  assignmentStatus: "",
  incompleteHomework: ""
};
const previousLessonRecord = {
  lessonId: "lesson_2026-09-12",
  studentId: "student_A",
  assignmentStatus: "not_done"
};
const previousHomework = {
  homeworkId: "hw_prev",
  studentId: "student_A",
  // 지난 숙제는 지난 수업(09-12)에서 찍혔다.
  checkedLessonId: "lesson_2026-09-12",
  lessonId: "lesson_2026-09-12",
  title: "지난 숙제"
};
const allRecords = [currentRecord, previousLessonRecord];

// 현재 record 하나만 넘기면 지난 수업 record 를 못 찾아 빈 값(버그 재현).
assert.equal(getHomeworkAssignmentStatus(previousHomework, [currentRecord]), "");
// 전체 records 를 넘기면 지난 수업 record 를 찾아 실제 상태가 나온다(서버와 동일).
assert.equal(getHomeworkAssignmentStatus(previousHomework, allRecords), "not_done");

// 스냅샷 빌더가 records 를 과제상태 계산으로 그대로 전달하는지(3번째 인자) 잠근다.
const assignmentCalls = [];
createLessonReservationPayloadSnapshot({
  audience: "parent",
  compactMessage: (value) => String(value ?? ""),
  getAssignmentStatus: (record, homework, records) => {
    assignmentCalls.push({ record, homework, records });
    return getHomeworkAssignmentStatus(homework, records ?? []);
  },
  getHomeworkFollowupNotice: () => "",
  getLessonContent: () => "",
  getLessonMaterial: () => "",
  isAssignmentStatusUnrecorded: (status) => !status,
  mode: "default",
  nextHomework: null,
  previousHomework,
  record: currentRecord,
  records: allRecords,
  scheduledDate: "2026-09-15T13:30:00.000Z",
  student: { studentId: "student_A", parentPhone: "010-0000-0000" },
  supplementSchedules: [],
  testResultLines: []
});
assert.equal(assignmentCalls.length, 1);
assert.equal(assignmentCalls[0].records, allRecords, "records 배열이 과제상태 계산으로 그대로 전달돼야 한다");

// records 를 안 넘긴 스냅샷은 유추 상태가 빈 값이 되어 예전 버그를 재현한다(대조군).
const withoutRecords = [];
createLessonReservationPayloadSnapshot({
  audience: "parent",
  compactMessage: (value) => String(value ?? ""),
  getAssignmentStatus: (record, homework, records) => {
    withoutRecords.push(records);
    return getHomeworkAssignmentStatus(homework, records ?? []);
  },
  getHomeworkFollowupNotice: () => "",
  getLessonContent: () => "",
  getLessonMaterial: () => "",
  isAssignmentStatusUnrecorded: (status) => !status,
  mode: "default",
  nextHomework: null,
  previousHomework,
  record: currentRecord,
  scheduledDate: "2026-09-15T13:30:00.000Z",
  student: { studentId: "student_A", parentPhone: "010-0000-0000" },
  supplementSchedules: [],
  testResultLines: []
});
assert.deepEqual(withoutRecords[0], [], "records 를 안 넘기면 빈 배열이 기본값이어야 한다");

// 소스 가드: 세 경로가 records 를 실제로 이어줘야 한다.
const [appSource, snapshotSource, expectedItemsSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/lessonReservationPayloadSnapshot.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/lessonJournalExpectedReservationItems.js", import.meta.url), "utf8")
]);
assert.ok(
  appSource.includes("function getAssignmentStatusForMessage(record, previousHomework, records = null)"),
  "getAssignmentStatusForMessage 는 records 를 받아야 한다"
);
assert.ok(
  appSource.includes("Array.isArray(records) && records.length ? records : record ? [record] : []"),
  "getAssignmentStatusForMessage 는 넘어온 records 로 지난 숙제 record 를 찾아야 한다"
);
assert.ok(
  snapshotSource.includes("getAssignmentStatus(record, previousHomework, records)"),
  "스냅샷 빌더는 records 를 과제상태 계산에 전달해야 한다"
);
assert.ok(
  expectedItemsSource.includes("records,"),
  "기대 예약 항목 계산은 스냅샷에 records 를 전달해야 한다"
);

console.log("lesson reservation assignment-status parity (server↔client records) tests passed");
