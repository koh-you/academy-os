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
  ["onSaveRecord={onSaveRecord}", "lesson record save callback"],
  ["<Suspense fallback=", "Suspense boundary around ExamPrepContentEditor"],
  ["<ExamPrepContentEditor", "ExamPrepContentEditor usage"],
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

assert.ok(
  teacherLessonHubSource.includes("createEmptyRecord={nestedPanels.createEmptyRecord}"),
  "TeacherLessonHubV2 call site must pass createEmptyRecord (new prop, needed since the component left App.jsx's closure scope)"
);
assert.ok(
  lessonJournalDetailSource.includes("createEmptyRecord={createEmptyRecord}"),
  "LessonJournalDetail call site must pass createEmptyRecord (new prop, needed since the component left App.jsx's closure scope)"
);

const teacherHubPropNames = [...teacherLessonHubSource.matchAll(/<ExamPrepLessonDetail\b[\s\S]*?\/>/g)][0][0]
  .match(/\n\s+(\w+)=/g)
  .map((line) => line.trim().replace(/=$/, ""));
assert.deepEqual(
  [...teacherHubPropNames].sort(),
  [
    "attendanceSettings",
    "createEmptyRecord",
    // 2026-10-01 · 날짜별 학교 단위 참여·시간 패널. 제외 목록은 생성 제어에서 읽고(명단에서
    // 사라진 학교도 같은 목록에 남아야 되돌릴 수 있다), 시간·참여 변경은 저장 하나로 묶여
    // onSaveExamPrepSchoolPlan 한 개를 쓴다.
    "examPrepExcludedSchools",
    // 2026-10-02 · 알림톡을 이 화면 안에서 쓰고 예약한다. 체크박스가 화면을 일반 수업일지로
    // 바꿔치우던 분기를 없앤 대신, 설정 상태·예약 시각·Solapi 반영 핸들러를 받는다.
    "examPrepNotificationEnabled",
    "examPrepNotificationScheduledLabel",
    "examPrepScheduleLessons",
    "lesson",
    "onApplyExamPrepNotificationPlan",
    "onDeleteLesson",
    // 2026-10-02 · 수업일지로 가는 길은 알림톡 체크가 아니라 제 이름의 버튼이 연다.
    "onOpenJournalView",
    "onSaveExamPrepSchedule",
    "onSaveExamPrepSchoolPlan",
    "onSaveRecord",
    "onToggleDailyJournal",
    "persistedLessons",
    "records",
    "ScheduleModalComponent",
    "students",
    "templates"
  ].sort(),
  "TeacherLessonHubV2's full-featured call site must pass exactly the same prop set as before plus the disclosed additions (createEmptyRecord, attendanceSettings, onToggleDailyJournal, and the 2026-10-01 per-school participation props)"
);

console.log("exam prep lesson detail extraction: no App back-reference, preserved contract snippets, and exact call-site prop sets verified");
