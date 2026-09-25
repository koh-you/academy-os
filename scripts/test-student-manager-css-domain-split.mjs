// StudentManager(학생관리 화면 lazy 청크) CSS 분리 가드.
//
// 2026-09-19 App.css 에서 이 청크 전용 셀렉터 201개 규칙(232 셀렉터, 쪼개진 .studentListTable 둘은 하나로 합침)을 src/domains/students/
// studentManager.css 로 옮겼다(main CSS 24 KB 감소). 교사 첫 로딩의 차단 CSS 가 그만큼 줄고, 이 화면을
// 열 때만 함께 내려온다. 여기서는 (1) 새 파일의 모든 셀렉터가 이 청크 파일들에서만 쓰는 클래스에
// 걸리는지, (2) App.css 와 겹치는 셀렉터가 없는지("한 셀렉터, 한 집"), (3) 공용 컴포넌트에 prop 으로
// 넘겨 다른 공용 클래스와 같은 요소에 붙는 두 클래스는 App.css 에 남았는지, (4) 청크 진입 파일이 import
// 하는지 고정한다.
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFileSync(join(root, path), "utf8");
const appCss = read("src/app/App.css");
const domainCss = read("src/domains/students/studentManager.css");
// 빌드 산출물 StudentManager-*.js 청크에 들어가는 모듈(sourcemap 으로 확인, 2026-09-19).
const chunkFiles = [
  "src/domains/students/StudentManager.jsx",
  "src/domains/students/StudentProfileModal.jsx",
  "src/domains/students/StudentMonthlyReportModal.jsx",
  "src/domains/students/StudentLifecycleOverlays.jsx",
  "src/domains/students/StudentWithdrawnList.jsx",
  "src/domains/students/studentHandoverPdf.js",
  "src/domains/students/studentMonthlyReport.js",
  "src/domains/students/studentListSort.js"
];

assert.ok(read(chunkFiles[0]).includes('import "./studentManager.css";'), "the chunk entry must import its CSS");

// 이 청크 파일들에서만 쓰는 클래스(이동 당시 확정). 다른 화면에서 쓰게 되면 여기서 실패한다 — 그때는
// App.css 로 되돌리지 말고 그 화면 CSS 나 공용 컴포넌트 CSS 로 옮긴다.
const exclusiveClasses = new Set([
  "academyTestProfileRow", "batchPermanentDeleteTargetList", "deleteWarningBox", "dirtyStudentRow",
  "editableTextCell", "gradeBadge", "included", "monoCell", "mutedPill", "permanentDeleteAuditStatus",
  "permanentDeleteBlockedBox", "permanentDeleteConfirmationField", "permanentDeleteError",
  "permanentDeleteForceField", "permanentDeleteSafeBox", "permanentDeleteStudentSummary",
  // 2026-09-19 · profileEditHint·profileSavedText 는 UI 정돈(U6)에서 JSX 와 CSS 를 함께 없앴다.
  "profileEditInput", "profileLoginEdit", "scoreRow", "studentAttendanceMonthInput",
  "studentAttendanceSectionActions", "studentAttendanceSummaryCard", "studentAttendanceSummaryGrid",
  "studentConsultationComposer", "studentConsultationContent", "studentConsultationControls",
  "studentConsultationDate", "studentConsultationItem", "studentConsultationList", "studentConsultationMeta",
  "studentConsultationType", "studentListEmpty", "studentListHead", "studentListRow",
  // 2026-09-19 · studentListSearchBar 는 UI 정돈(U8)의 재원생 검색·정렬 FilterBar.
  "studentListRowClickable", "studentListSearchBar", "studentListTable", "studentMonthlyReportActionStatus",
  "studentMonthlyReportAttendanceCounts", "studentMonthlyReportCalendar", "studentMonthlyReportCalendarDay",
  "studentMonthlyReportCalendarLesson", "studentMonthlyReportCalendarWeekday",
  "studentMonthlyReportChangeReason", "studentMonthlyReportControls", "studentMonthlyReportEmpty",
  "studentMonthlyReportModal", "studentMonthlyReportNote", "studentMonthlyReportPreview",
  "studentMonthlyReportRow", "studentMonthlyReportRows", "studentMonthlyReportStatus",
  "studentMonthlyReportTable", "studentMonthlyReportTableWrap", "studentNameCell",
  "studentPartialOverlapList", "studentPartialOverlapNotice", "studentPermanentDeleteModal",
  "studentProfileDataTable", "studentProfileGrid", "studentProfileModalWrap", "studentProfileRowActions",
  "studentProfileSectionBody", "studentProfileSectionModal", "studentProfileStickySaveBar",
  "studentProfileTile", "studentProfileTileGrid", "studentProfileTileMeta", "studentReminderComposer",
  // 2026-09-25 · studentReminderSourceNote 는 상시 설명 정리(h3-students-portals)에서 JSX·CSS 를 함께
  // 없앴다 — '매일 09:00 슬랙 원본' 안내가 운영 알림 모달 제목 옆 물음표로 들어갔다.
  "studentReminderControls", "studentReminderItem", "studentReminderList", "studentReminderSlackToggle",
  "studentRestoreNotice", "studentRosterEffectiveChoice",
  "studentScheduleActions", "studentScheduleEditor", "studentScheduleEmpty", "studentScheduleLegacyText",
  "studentSchedulePreview", "studentScheduleRow", "studentScoreModalTable", "studentScoreRow",
  "studentStatusPill", "studentTallySubmissionCard", "studentTallySubmissionPanel",
  "teacherOperatingMemoActions", "teacherOperatingMemoContent", "teacherOperatingMemoEmpty",
  "teacherOperatingMemoHeader", "teacherOperatingMemoInput", "teacherOperatingMemoPanel",
  "teacherOperatingMemoSaveRow", "wideModal", "wideProfileItem", "withdrawalCommentInput",
  "withdrawalReasonGrid", "withdrawalReasonSelect", "withdrawnStudentBulkActions", "withdrawnStudentRow",
  "withdrawnStudentSelect"
]);
// 이 청크에서만 쓰지만 SectionHeader/PageHeader 의 actionsClassName 으로 넘겨 .sectionHeaderAside 와 같은
// 요소에 붙는 클래스. 도메인 CSS 는 App.css 뒤에 로드되므로 옮기면 640px 이하에서 .sectionHeaderAside 의
// justify-content 재정의(App.css @media)를 뒤집는다 — 이동 전후 computed style 대조에서 실제로 잡혔다.
// App.css 에 남긴다.
const stayInAppCss = ["profileHeaderActions", "studentListToolbar"];

// (1) 소유권: 클래스가 실제로 청크 파일 밖에서 쓰이지 않는지 src 전체를 다시 훑는다.
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.(jsx?|html)$/.test(name)) out.push(path);
  }
  return out;
}
const sourceFiles = [...walk(join(root, "src")), join(root, "index.html"), join(root, "attendance.html")];
const wordPattern = /[A-Za-z_][A-Za-z0-9_-]*/g;
const chunkWords = new Set(chunkFiles.flatMap((file) => read(file).match(wordPattern) || []));
for (const cls of exclusiveClasses) {
  assert.ok(chunkWords.has(cls), `${cls} is no longer used inside the StudentManager chunk; drop its CSS instead of keeping it`);
}
for (const file of sourceFiles) {
  const rel = relative(root, file).split("\\").join("/");
  if (chunkFiles.includes(rel)) continue;
  const words = new Set(readFileSync(file, "utf8").match(wordPattern) || []);
  for (const cls of exclusiveClasses) {
    assert.ok(!words.has(cls), `${cls} is now used outside the StudentManager chunk (${rel}); move its CSS to that screen instead of back to App.css`);
  }
}

// (2) 새 파일의 모든 셀렉터는 전용 클래스를 하나 이상 참조하고, App.css 와 겹치지 않는다.
const domainRoot = postcss.parse(domainCss);
const domainSelectors = [];
domainRoot.walkRules((rule) => {
  for (const selector of rule.selectors) {
    const classes = [...selector.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]);
    assert.ok(classes.length > 0, `bare selector must not live in the domain CSS: ${selector}`);
    // 전용 클래스가 하나라도 있으면 이 청크의 DOM 안에서만 맞는다(.managementRow.scoreRow 처럼 공용
    // 클래스와 조합돼도). 전용 클래스가 하나도 없는 셀렉터는 여기 있을 수 없다.
    assert.ok(classes.some((cls) => exclusiveClasses.has(cls)), `selector without an exclusive class in studentManager.css: ${selector}`);
    for (const cls of stayInAppCss) {
      assert.ok(!classes.includes(cls), `.${cls} must stay in App.css (shares an element with .sectionHeaderAside): ${selector}`);
    }
    domainSelectors.push(selector);
  }
});
// 2026-09-19 · UI 정돈(U6): .profileEditHint · .profileSavedText · .studentProfileRowActions .dangerSoftButton 셀렉터 3개 삭제 → 229.
// 2026-09-19 · UI 정돈(U8): .studentListSearchBar .sharedSearchField 추가 → 230.
// 2026-09-25 · 상시 설명 정리(h3-students-portals): 물음표로 옮겨 쓰임이 사라진 셀렉터 3개 삭제 → 227
// (.teacherOperatingMemoHeader p · .wideProfileItem > .muted · .studentReminderSourceNote).
// 2026-09-26 · 227 -> 228: 개별 스케줄의 저장 부작용 문장을 편집 모드 상시 노출로 되돌리며 .studentScheduleSaveEffect 추가.
assert.equal(domainSelectors.length, 228, `expected 228 moved selectors, found ${domainSelectors.length}`);
const appRoot = postcss.parse(appCss);
const appSelectors = new Set();
appRoot.walkRules((rule) => {
  for (const selector of rule.selectors) appSelectors.add(selector.trim());
});
for (const selector of domainSelectors) {
  assert.ok(!appSelectors.has(selector.trim()), `selector must have one home, still in App.css too: ${selector}`);
}
for (const selector of appSelectors) {
  const classes = [...selector.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]);
  assert.ok(!classes.some((cls) => exclusiveClasses.has(cls)), `App.css must not keep any selector for a moved class: ${selector}`);
}

// (3) 공용 헤더와 요소를 공유하는 두 클래스는 App.css 에 남아 있다.
for (const cls of stayInAppCss) {
  assert.ok(appSelectors.has(`.${cls}`), `.${cls} must keep its rule in App.css`);
}

console.log(`student manager css split: ${domainSelectors.length} selectors · ${exclusiveClasses.size} exclusive classes · no App.css overlap · ${stayInAppCss.length} shared-element classes kept in App.css`);
