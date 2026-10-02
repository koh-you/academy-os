import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const appSource = await readFile(new URL("src/app/App.jsx", root), "utf8");
const detailSource = await readFile(new URL("src/domains/lessons/ExamPrepLessonDetail.jsx", root), "utf8");
const teacherLessonHubSource = await readFile(new URL("src/domains/lessons/TeacherLessonHubV2.jsx", root), "utf8");
const lessonJournalDetailSource = await readFile(new URL("src/domains/lessons/LessonJournalDetail.jsx", root), "utf8");

assert.ok(
  !/function ExamPrepLessonDetail\(/.test(appSource),
  "App.jsx must not keep a local ExamPrepLessonDetail definition"
);
assert.match(
  appSource,
  /import \{ ExamPrepLessonDetail \} from "\.\.\/domains\/lessons\/ExamPrepLessonDetail\.jsx";/,
  "App.jsx must import ExamPrepLessonDetail from its extracted domain file"
);

assert.match(detailSource, /export function ExamPrepLessonDetail\(\{/, "extracted file must export the component");
assert.ok(
  !/from ["'].*\/app\/App\.jsx["']/.test(detailSource),
  "extracted component must not import back from App.jsx (no import cycle)"
);

const preservedContractSnippets = [
  ["ScheduleModalComponent", "schedule edit modal component prop"],
  ["isScheduleEditorOpen", "schedule modal open/close local state"],
  ["onClick={() => onDeleteLesson(lesson.lessonId)}", "delete-lesson callback identity"],
  ["onSave={onSaveExamPrepSchedule}", "exam-prep schedule save callback"],
  // 2026-10-02 · 학생별 기록(강의 내용·코멘트)과 알림톡 예약을 수업일지로 넘기면서
  // ExamPrepContentEditor 와 onSaveRecord 가 이 화면에서 빠졌다. 같은 칸을 두 화면에서 적게
  // 하니 어디에 쓰는 게 맞는지 알 수 없었다(요청). 그 자리는 [수업일지 · 알림톡] 버튼이 잇는다.
  ["onOpenJournalView(lesson.lessonId, true)", "journal entry point for records and alimtalk"],
  ["<Suspense fallback=", "Suspense boundary around the lazy school plan panel"],
  ["rosterView === \"school\"", "time/school roster sort toggle"],
  // 2026-10-02 · 연결된 시험정보 칩은 지웠다. 바로 위 학교별 참여 패널이 같은 학교를
  // 인원·시간·참여 여부까지 보여줘 칩은 같은 말을 한 번 더 할 뿐이었다(요청).
  // 고사 이름은 패널 설명에 한 번만 남는다.
  ["className=\"ghostButton\"", "schedule-edit button class"],
  // 2026-09-19 · 일정 삭제는 확인 모달 진입 버튼이라 dangerButton → dangerSoftButton 으로 통일(docs/ui-button-hierarchy.md).
  ["className=\"dangerSoftButton\"", "delete-schedule button class"]
];
for (const [snippet, label] of preservedContractSnippets) {
  assert.ok(detailSource.includes(snippet), `extracted component must preserve: ${label} (missing "${snippet}")`);
}

const teacherHubPropNames = [...teacherLessonHubSource.matchAll(/<ExamPrepLessonDetail\b[\s\S]*?\/>/g)][0][0]
  .match(/\n\s+(\w+)=/g)
  .map((line) => line.trim().replace(/=$/, ""));
assert.deepEqual(
  [...teacherHubPropNames].sort(),
  [
    "attendanceSettings",
    // 2026-10-01 · 날짜별 학교 단위 참여·시간 패널. 제외 목록은 생성 제어에서 읽고(명단에서
    // 사라진 학교도 같은 목록에 남아야 되돌릴 수 있다), 시간·참여 변경은 저장 하나로 묶여
    // onSaveExamPrepSchoolPlan 한 개를 쓴다.
    "examPrepExcludedSchools",
    "examPrepScheduleLessons",
    "lesson",
    "onDeleteLesson",
    // 2026-10-02 · 학생별 기록(강의 내용·코멘트)과 알림톡 예약은 수업일지가 맡는다. 같은 칸을
    // 두 화면에서 적게 하니 어디에 쓰는 게 맞는지 알 수 없었고, 액션도 한 줄에 일곱 개가 되어
    // 넘쳤다(요청). 이 화면은 "그 날짜에 누가 몇 시에 오는가" 만 맡고, 그리로 가는 버튼 하나를
    // 받는다 — createEmptyRecord·onSaveRecord·알림톡 props 는 모두 빠졌다.
    "onOpenJournalView",
    "onSaveExamPrepSchedule",
    "onSaveExamPrepSchoolPlan",
    "persistedLessons",
    "records",
    "ScheduleModalComponent",
    "students",
    "templates"
  ].sort(),
  "TeacherLessonHubV2's full-featured call site must pass exactly the per-school participation props plus the journal entry point (2026-10-02)"
);

console.log("exam prep lesson detail extraction: no App back-reference, preserved contract snippets, and exact call-site prop sets verified");
