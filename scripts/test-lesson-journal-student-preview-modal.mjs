import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalStudentPreviewModel } from "../src/domains/lessons/lessonJournalStudentPreviewModel.js";

const students = [
  { studentId: "student_control", name: "CONTROL 학생" },
  { studentId: "student_target", name: "TARGET 학생" }
];

assert.deepEqual(
  createLessonJournalStudentPreviewModel({
    studentPreviewId: "student_target",
    students
  }),
  {
    isOpen: true,
    previewStudents: [{ studentId: "student_target", name: "TARGET 학생" }]
  }
);
assert.deepEqual(
  createLessonJournalStudentPreviewModel({
    studentPreviewId: "",
    students
  }),
  {
    isOpen: false,
    previewStudents: []
  }
);
assert.deepEqual(
  createLessonJournalStudentPreviewModel({
    studentPreviewId: "student_missing",
    students
  }),
  {
    isOpen: true,
    previewStudents: []
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalStudentPreviewModal.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function PreparationMemoModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

for (const appContract of [
  "} = useLessonJournalOverlayState();",
  "<LessonJournalStudentPreviewModal",
  "PortalComponent={StudentPortalV2}",
  "studentPreviewId={studentPreviewId}",
  'onClose={() => setStudentPreviewId("")}'
]) {
  assert.ok(journalSource.includes(appContract), `missing App-owned preview contract: ${appContract}`);
}
assert.ok(
  !journalSource.includes('backdropClassName="studentPortalPreviewBackdrop"'),
  "LessonJournalDetail must not retain the student preview modal markup"
);

for (const componentContract of [
  "createLessonJournalStudentPreviewModel",
  "if (!model.isOpen) return null",
  'backdropClassName="studentPortalPreviewBackdrop"',
  "PortalComponent",
  "reportSnapshots={[]}",
  "scoreRecords={[]}",
  "students={model.previewStudents}",
  "previewMode",
  "onLogout={onClose}",
  "onStudentCheckHomework={ignorePreviewHomeworkCheck}"
]) {
  assert.ok(componentSource.includes(componentContract), `missing preview shell contract: ${componentContract}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(
    !componentSource.includes(forbiddenSideEffect),
    `student preview shell must stay presentational: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal student preview TARGET/CONTROL fixtures passed");
