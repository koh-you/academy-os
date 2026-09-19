import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const srcRoot = new URL("../src/", import.meta.url);

async function listRuntimeSources(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const sources = [];
  for (const entry of entries) {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) {
      sources.push(...await listRuntimeSources(entryUrl));
    } else if ([".js", ".jsx"].includes(extname(entry.name))) {
      sources.push(entryUrl);
    }
  }
  return sources;
}

const sourceUrls = await listRuntimeSources(srcRoot);
const sourceEntries = await Promise.all(sourceUrls.map(async (url) => ({
  path: relative(repositoryRoot, fileURLToPath(url)).replaceAll("\\", "/"),
  source: await readFile(url, "utf8")
})));
const count = (source, pattern) => [...source.matchAll(pattern)].length;
const directModalCount = sourceEntries.reduce((total, entry) => total + count(entry.source, /<Modal\b/g), 0);
const injectedModalCount = sourceEntries.reduce((total, entry) => total + count(entry.source, /<ModalComponent\b/g), 0);
const modalFooterCount = sourceEntries.reduce((total, entry) => total + count(entry.source, /<ModalFooter\b/g), 0);
const modalActionCount = sourceEntries.reduce((total, entry) => total + count(entry.source, /className="[^"]*modalActions[^"]*"/g), 0);
const rawDialogEntries = sourceEntries.filter((entry) => (
  entry.path !== "src/shared/components/Modal.jsx" && /<[^>]*\brole="dialog"/.test(entry.source)
));

// 41 -> 40: 오답관리 옛 「뽑은 문제」 인쇄 모달(PickedProblemModal)을 2026-09-13 에 뺐다.
// 40 -> 41: 반관리 반 개설·수정 모달(ClassTemplateEditorModal) 2026-09-16 추가.
// 41 -> 42: 알림관리 공지 즉시/예약 발송 확인 모달(NotificationSendConfirmModal) 2026-09-19 추가.
// 42 -> 43: 공용 확인 대화상자(ConfirmDialog)가 공용 Modal 을 한 번 감싼다(2026-09-19 U11). 화면의 <ConfirmDialog> 사용은 여기 세지 않는다.
assert.equal(directModalCount, 43, "unexpected direct common Modal surface count");
assert.equal(injectedModalCount, 14, "unexpected injected common Modal surface count");
// 20 -> 21: 발송 확인 모달의 [취소][N건 발송] 푸터 2026-09-19.
// 21 -> 22: 출결 체크 모달 1단계 [출결 저장] 이 attendanceModalActions div 대신 ModalFooter 를 쓴다(2026-09-19 U5).
// 22 -> 23: 학생 추가 모달 '한 명씩' 탭이 primaryButton full 대신 ModalFooter [취소][학생 저장] 을 쓴다(2026-09-19 U8).
// 23 -> 24: 학사일정 등록/수정 모달 푸터 [일정 삭제][취소][등록] 이 schoolEventFormActions div 대신 ModalFooter 를 쓴다(2026-09-19 U9).
// 24 -> 25: 공용 ConfirmDialog 의 [취소][확정] 푸터(2026-09-19 U11).
// 25 -> 26: SNS 스튜디오 Chat 결과 가져오기 모달의 [가져오기 취소][가져오기 미리보기][반영] 푸터(2026-09-19 U13).
assert.equal(modalFooterCount, 26, "unexpected common ModalFooter count");
assert.equal(modalActionCount, 2, "unexpected legacy modalActions wrapper count");
assert.deepEqual(
  rawDialogEntries.map((entry) => entry.path),
  [],
  "new bespoke dialogs must not bypass the common Modal shell"
);

const sharedModalSource = await readFile(new URL("../src/shared/components/Modal.jsx", import.meta.url), "utf8");
for (const contract of [
  'aria-modal="true"',
  'role="dialog"',
  "closeDisabled = false",
  'aria-busy={closeDisabled || undefined}',
  'closeAriaLabel = "창 닫기"',
  "aria-label={closeAriaLabel}",
  "export function ModalFooter"
]) {
  assert.ok(sharedModalSource.includes(contract), `missing common modal contract: ${contract}`);
}

const [appSource, monthlyReportModalSource, outletSource, statusSource, supplementModalSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/StudentMonthlyReportModal.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/components/InlineSaveStatus.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/supplements/SupplementNotificationControlModal.jsx", import.meta.url), "utf8")
]);
assert.ok(appSource.includes("Modal,"), "App must inject the shared Modal identity");
assert.ok(outletSource.includes("ModalComponent: components.Modal"), "teacher outlet must preserve the shared Modal identity");
for (const contract of ["<ModalComponent", "scrollable", "<ModalFooter>", "onClose={onClose}"]) {
  assert.ok(monthlyReportModalSource.includes(contract), `missing student monthly report modal contract: ${contract}`);
}
for (const state of ["idle", "dirty", "saving", "verifying", "saved", "failed"]) {
  assert.ok(statusSource.includes(`${state}:`), `missing common save-state vocabulary: ${state}`);
}
for (const callbackContract of [
  "<Modal",
  'closeAriaLabel="알림 제어 닫기"',
  "closeDisabled={isBusy}",
  '<ModalFooter className="supplementNotificationControlActions" tone="danger">',
  "onClick={onCancelAll}",
  "onClick={() => onReserve(control.controlType)}",
  "disabled={isBusy}",
  "onClick={onClose}"
]) {
  assert.ok(supplementModalSource.includes(callbackContract), `missing supplement provider modal contract: ${callbackContract}`);
}
for (const forbiddenOwner of ["fetch(", "postJson", "/api/", "setNotificationJobs", "useEffect", "useState"]) {
  assert.ok(!supplementModalSource.includes(forbiddenOwner), `provider modal must remain callback-only: ${forbiddenOwner}`);
}

console.log(
  `modal follow-up inventory passed · common ${directModalCount + injectedModalCount} · bespoke ${rawDialogEntries.length} · footer ${modalFooterCount} · legacy actions ${modalActionCount}`
);
