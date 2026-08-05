import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const kioskSource = await readFile(
  new URL("../src/domains/lessons/AttendanceKiosk.jsx", import.meta.url),
  "utf8"
);

for (const required of [
  "export function AttendanceKiosk(",
  'const [pin, setPin] = useState("")',
  "const [pendingPreview, setPendingPreview] = useState(null)",
  "const [result, setResult] = useState(null)",
  "const [isSubmitting, setIsSubmitting] = useState(false)",
  "const confirmInFlightRef = useRef(false)",
  "!pendingPreview?.ok || previewRequiresLessonSelection",
  "attendanceKioskAutoConfirmSeconds",
  "초 뒤 자동 확인",
  "await onAttendancePreview(nextPin)",
  "await onAttendancePreview(pendingPreview.pin",
  "await onAttendanceCheck(pendingPreview.pin",
  "action: pendingPreview.action",
  "lessonId: pendingPreview.lesson?.lessonId",
  "createAttendanceKioskDisplayModel({",
  "previewRequiresLessonSelection",
  "attendanceLessonChoiceGrid",
  'aria-label="출결 화면 닫기"',
  'aria-label="학생 휴대폰 번호 뒤 4자리"',
  'aria-label="한 자리 지우기"',
  '<ModalFooter align="center">',
  "출결 데이터를 불러오는 중입니다.",
  "학생 휴대폰 번호 뒤 4자리를 입력하세요."
]) {
  assert.ok(kioskSource.includes(required), `attendance kiosk must preserve ${required}`);
}

for (const forbidden of [
  "fetch(",
  "/api/",
  "postJson",
  "getJson",
  "setRecords",
  "setLessons",
  "setNotificationLogs",
  "localStorage",
  "notification_jobs",
  "Supabase",
  "Solapi"
]) {
  assert.equal(kioskSource.includes(forbidden), false, `attendance kiosk must not include ${forbidden}`);
}

assert.ok(
  appSource.includes('import { AttendanceKiosk } from "../domains/lessons/AttendanceKiosk.jsx"'),
  "App must import the extracted attendance kiosk"
);
assert.equal(
  appSource.includes("function AttendanceKiosk("),
  false,
  "App must not retain the attendance kiosk implementation"
);
for (const appBoundary of [
  "<AttendanceKiosk",
  "formatLessonDisplayName={formatLessonDisplayName}",
  "onAttendanceCheck={handleAttendancePinCheck}",
  "onAttendancePreview={handleAttendancePinPreview}",
  "async function handleAttendancePinPreview(",
  "async function handleAttendancePinCheck(",
  "previewKioskAttendanceAction({",
  "request: previewAttendanceRequest",
  "checkKioskAttendanceAction({",
  "request: checkAttendanceRequest",
  "recordsRef.current = nextRecords",
  "setNotificationLogs((current)"
]) {
  assert.ok(appSource.includes(appBoundary), `App must retain kiosk side-effect adapter: ${appBoundary}`);
}

console.log("attendance kiosk callback boundary passed");
