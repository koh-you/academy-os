// 출결 태블릿 번들 격리 가드.
//
// 배경: attendance.html 이 교사용과 같은 진입점을 가리키고 있어서, 번호 4자리만 찍는
// 태블릿이 앱 전체(948 KB)를 받고 나서야 첫 화면을 그렸다. 진입점을 분리해 걷어냈는데,
// 누군가 kioskMain 에서 교사 화면을 하나 import 하면 조용히 원래대로 돌아간다.
// 그래서 소스 레벨에서 막는다(빌드 산출물 검사는 check-teacher-view-chunks.mjs 가 한다).
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../", import.meta.url));

const attendanceHtml = await readFile(join(repoRoot, "attendance.html"), "utf8");
assert.match(
  attendanceHtml,
  /src="\/src\/kioskMain\.jsx"/,
  "attendance.html 은 태블릿 전용 진입점(kioskMain.jsx)을 가리켜야 한다"
);
assert.ok(
  !attendanceHtml.includes("/src/main.jsx"),
  "attendance.html 이 교사용 진입점(main.jsx)을 가리키면 태블릿이 앱 전체를 받는다"
);

// 태블릿 진입점의 import 그래프에 교사 화면이 들어오면 안 된다.
const forbiddenImports = [
  "app/App.jsx",
  "domains/exams/",
  "domains/settlements/",
  "domains/notifications/",
  "domains/reports/",
  "domains/specialLectures/",
  "domains/resources/",
  "domains/students/"
];

async function collectKioskSources() {
  const files = [join(repoRoot, "src", "kioskMain.jsx")];
  const kioskDirectory = join(repoRoot, "src", "kiosk");
  for (const entry of await readdir(kioskDirectory, { withFileTypes: true })) {
    if (entry.isFile() && /\.(js|jsx)$/.test(entry.name)) {
      files.push(join(kioskDirectory, entry.name));
    }
  }
  return files;
}

const offenders = [];
for (const filePath of await collectKioskSources()) {
  const source = await readFile(filePath, "utf8");
  const name = filePath.slice(repoRoot.length).replace(/\\/g, "/");
  for (const forbidden of forbiddenImports) {
    if (source.includes(forbidden)) offenders.push(`${name} → ${forbidden}`);
  }
}
assert.deepEqual(
  offenders,
  [],
  `태블릿 진입점이 교사 화면을 끌어옵니다. 태블릿 번들이 다시 커집니다:\n${offenders.join("\n")}`
);

// 태블릿과 교사 화면이 함께 쓰는 순수 헬퍼는 한 곳에 있어야 한다(복사본이 갈라지는 것 방지).
const kioskApp = await readFile(join(repoRoot, "src", "kiosk", "AttendanceKioskApp.jsx"), "utf8");
assert.ok(
  kioskApp.includes("lessonRecordCollections.js"),
  "수업·기록 목록 헬퍼는 공용 모듈(lessonRecordCollections.js)에서 가져와야 한다"
);

// attendanceApi 의 원본 checkAttendanceRequest / previewAttendanceRequest 는
// { payload, request } 를 받는다. 컨트롤러는 payload 하나만 넘기므로, 원본을 그대로
// 주입하면 request 가 undefined 가 되어 **HTTP 요청이 조용히 나가지 않는다**.
// 화면에는 실패 메시지만 뜨고 네트워크 탭에는 아무것도 안 남는다 — 찾기 어려운 종류다.
// 반드시 createAttendanceRequestBindings 로 묶은 형태를 써야 한다.
assert.ok(
  kioskApp.includes("createAttendanceRequestBindings"),
  "출결 요청은 createAttendanceRequestBindings 로 묶어서 써야 한다(원본은 { payload, request } 를 받는다)"
);
assert.ok(
  !/import \{[^}]*\bcheckAttendanceRequest\b[^}]*\} from ".*attendanceApi\.js"/s.test(kioskApp),
  "attendanceApi 의 원본 요청 함수를 직접 import 하면 안 된다"
);

console.log("kiosk bundle isolation: 태블릿 진입점이 교사 화면과 분리되어 있음");
