import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const panelSource = await readFile(
  new URL("../src/domains/lessons/LessonModalClosurePanel.jsx", import.meta.url),
  "utf8"
);

for (const requiredSource of [
  "export function LessonModalClosurePanel({",
  "휴강은 수업일지에 남지만 실제 수업 횟수와 급여 정산에는 포함되지 않습니다.",
  "기존 명단 {initialStudentCount}명·수업기록 {closureRecordCount}건",
  "현재 화면 기준 확인 필요한 알림 {blockingNotificationJobCount}건",
  "기존 휴강을 수정할 때는 연결 보충을 중복 생성하지 않습니다.",
  "onClosureMakeupEnabledChange(false)",
  "onClosureMakeupEnabledChange(true)",
  "onClosureMakeupDateChange(event.target.value)",
  "onClosureMakeupStartTimeChange(event.target.value)",
  "onClosureMakeupEndTimeChange(event.target.value)",
  "알림톡·문자는 자동 발송하거나 예약하지 않습니다."
]) {
  assert.ok(
    panelSource.includes(requiredSource),
    `closure panel must preserve ${requiredSource}`
  );
}

for (const forbiddenSource of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "apiUrl",
  "notification_jobs",
  "Solapi",
  "onSubmit"
]) {
  assert.equal(
    panelSource.includes(forbiddenSource),
    false,
    `closure panel must stay controlled without ${forbiddenSource}`
  );
}

assert.ok(
  appSource.includes(
    'import { LessonModalClosurePanel } from "../domains/lessons/LessonModalClosurePanel.jsx";'
  ),
  "App must import the extracted closure panel"
);
assert.ok(
  appSource.includes("<LessonModalClosurePanel"),
  "App must render the extracted closure panel"
);
assert.ok(
  appSource.includes("function handleClosureMakeupDateChange(nextDate)"),
  "App must retain closure makeup touched-state ownership"
);
for (const appOwnedSource of [
  "getLessonClosureBlockingNotificationJobs(notificationJobs, initialLesson.lessonId)",
  "records.filter((record) => record.lessonId === initialLesson.lessonId).length",
  "onClosureMakeupEnabledChange={setClosureMakeupEnabled}",
  "onClosureMakeupStartTimeChange={setClosureMakeupStartTime}",
  "onClosureMakeupEndTimeChange={setClosureMakeupEndTime}"
]) {
  assert.ok(
    appSource.includes(appOwnedSource),
    `App must retain closure source ownership through ${appOwnedSource}`
  );
}

console.log("lesson modal closure panel controlled boundary passed");
