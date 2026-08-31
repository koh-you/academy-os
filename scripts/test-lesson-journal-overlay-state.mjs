import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalOverlayInitialState } from "../src/domains/lessons/useLessonJournalOverlayState.js";

const activeOverlayState = {
  ...createLessonJournalOverlayInitialState(),
  commentModal: {
    audience: "parent",
    student: { studentId: "student_TARGET" }
  },
  editingMemoKey: "lesson_TARGET:student_TARGET:lessonMaterial",
  prepMemoModal: {
    student: { studentId: "student_CONTROL" }
  },
  studentPreviewId: "student_TARGET"
};
const activeOverlaySnapshot = structuredClone(activeOverlayState);
const initialState = createLessonJournalOverlayInitialState();

assert.deepEqual(initialState, {
  commentModal: null,
  editingMemoKey: "",
  prepMemoModal: null,
  previousLessonSourceByStudent: {},
  studentPreviewId: ""
});
assert.deepEqual(activeOverlayState, activeOverlaySnapshot);
assert.deepEqual(createLessonJournalOverlayInitialState(), initialState);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const overlayStateSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalOverlayState.js", import.meta.url),
  "utf8"
);
const detailStart = appSource.indexOf("function LessonJournalDetail(");
const detailEnd = appSource.indexOf("\nfunction ", detailStart + 1);
const detailSource = appSource.slice(detailStart, detailEnd);
const localStateBoundaryEnd = detailSource.indexOf("const commentAiProvider");
const localStateBoundary = detailSource.slice(0, localStateBoundaryEnd);

for (const binding of [
  'import { useLessonJournalOverlayState } from "../domains/lessons/useLessonJournalOverlayState.js"',
  "} = useLessonJournalOverlayState();",
  "commentModal,",
  "editingMemoKey,",
  "prepMemoModal,",
  "previousLessonSourceByStudent,",
  "setCommentModal,",
  "setEditingMemoKey,",
  "setPrepMemoModal,",
  "setPreviousLessonSourceForStudent,",
  "setStudentPreviewId,",
  "studentPreviewId"
]) {
  assert.ok(appSource.includes(binding), `missing App overlay state binding: ${binding}`);
}
for (const removedLocalState of [
  "const [commentModal, setCommentModal] = useState(null)",
  "const [prepMemoModal, setPrepMemoModal] = useState(null)",
  'const [editingMemoKey, setEditingMemoKey] = useState("")',
  'const [studentPreviewId, setStudentPreviewId] = useState("")'
]) {
  assert.ok(!localStateBoundary.includes(removedLocalState), `LessonJournalDetail must not retain overlay state: ${removedLocalState}`);
}
for (const hookContract of [
  "export function createLessonJournalOverlayInitialState()",
  "export function useLessonJournalOverlayState()",
  "const [commentModal, setCommentModal] = useState(initialState.commentModal)",
  "const [prepMemoModal, setPrepMemoModal] = useState(initialState.prepMemoModal)",
  "const [editingMemoKey, setEditingMemoKey] = useState(initialState.editingMemoKey)",
  "const [previousLessonSourceByStudent, setPreviousLessonSourceByStudent] = useState(initialState.previousLessonSourceByStudent)",
  "const [studentPreviewId, setStudentPreviewId] = useState(initialState.studentPreviewId)"
]) {
  assert.ok(overlayStateSource.includes(hookContract), `missing overlay hook contract: ${hookContract}`);
}
for (const AppOwnedAction of [
  "function openCommentComposer(",
  "const draft = buildInitialCommentDraft({",
  "function getCommentModalRecord()",
  "onClose={() => setCommentModal(null)}",
  "onClose={() => setPrepMemoModal(null)}",
  "onOpen: () => setPrepMemoModal({",
  "onOpenStudentPreview: setStudentPreviewId",
  'onClose={() => setStudentPreviewId("")}',
  "onPolishComment={onPolishComment}",
  "onSaveRecord={onSaveRecord}",
  "onSendComment={onSendComment}"
]) {
  assert.ok(detailSource.includes(AppOwnedAction), `overlay action must remain in App: ${AppOwnedAction}`);
  assert.ok(!overlayStateSource.includes(AppOwnedAction), `overlay hook must not own action: ${AppOwnedAction}`);
}
for (const forbiddenSideEffect of [
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "localStorage",
  "notificationJobs",
  "Solapi"
]) {
  assert.ok(!overlayStateSource.includes(forbiddenSideEffect), `overlay hook must stay local: ${forbiddenSideEffect}`);
}

console.log("lesson journal overlay selection TARGET/CONTROL fixtures passed");
