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
  entry.path !== "src/shared/components/Modal.jsx" && entry.source.includes('role="dialog"')
));

assert.equal(directModalCount, 39, "unexpected direct common Modal surface count");
assert.equal(injectedModalCount, 8, "unexpected injected common Modal surface count");
assert.equal(modalFooterCount, 20, "unexpected common ModalFooter count");
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
  `modal follow-up inventory passed · common ${directModalCount + injectedModalCount}/47 · bespoke ${rawDialogEntries.length} · footer ${modalFooterCount} · legacy actions ${modalActionCount}`
);
