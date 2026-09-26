// 교재관리 패키지 업로드 CLI — 브라우저 폴더 선택 대신 터미널에서 같은 API 를 호출한다.
//
// 사용:
//   node scripts/problem-bank/upload-package.mjs <패키지폴더> [...폴더] [--confirm] [--answers-only]
//
// --confirm 없이 실행하면 아무것도 올리지 않고 무엇을 올릴지만 보고한다(점검용 기본값).
//
// 인증: 환경변수 ACADEMY_TEACHER_TOKEN 의 Bearer 토큰을 쓴다. 값은 출력하지 않는다.
//   운영자가 별도 터미널에서 이 프로세스에만 주입한다. 저장소·로그·대화에 남기지 않는다.
//
// 이 스크립트는 src/domains/problems/ProblemBankCenter.jsx 의 등록 흐름과 같은 순서를 따른다:
//   manifest 등록 -> book-audit 로 이미 있는 파일 확인 -> 남은 이미지만 배치 업로드.
// 같은 폴더를 다시 올리면 내용이 같은 파일은 건너뛴다(md5, 없으면 크기 비교).

import { readFile, readdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const API_BASE = process.env.ACADEMY_API_BASE ?? "https://koh-you-math-academy-os-api.onrender.com";
const TOKEN = process.env.ACADEMY_TEACHER_TOKEN ?? "";
const IMAGE_BATCH = 40;
const BATCH_CONCURRENCY = 3;
const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };

const args = process.argv.slice(2);
const folders = args.filter((a) => !a.startsWith("--"));
const confirm = args.includes("--confirm");
const answersOnly = args.includes("--answers-only");

if (!folders.length) {
  console.error("사용: node scripts/problem-bank/upload-package.mjs <패키지폴더> [...] [--confirm]");
  process.exit(1);
}
if (!TOKEN) {
  console.error("ACADEMY_TEACHER_TOKEN 이 없습니다. 운영자가 이 프로세스에만 주입해야 합니다.");
  process.exit(1);
}

async function api(method, route, body) {
  const response = await fetch(`${API_BASE}${route}`, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, ...(body ? { "Content-Type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`HTTP ${response.status} ${route} — ${text.slice(0, 200)}`);
  return text ? JSON.parse(text) : {};
}

/** 폴더를 재귀로 훑어 { 상대경로 -> 절대경로 } 를 만든다. */
async function walk(root, base = root, out = new Map()) {
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) await walk(full, base, out);
    else out.set(path.relative(base, full).split(path.sep).join("/"), full);
  }
  return out;
}

const md5 = (buffer) => createHash("md5").update(buffer).digest("hex");

/** manifest 가 참조하는 이미지 키 목록을 폴더 실제 파일과 맞춘다. */
function collectKeys(manifest, kind) {
  if (kind === "items") return (manifest.items ?? []).flatMap((item) => (item.regions ?? []).map((r) => ({ key: r.file, md5: r.md5 ?? "" })));
  return [...(manifest.answers ?? []), ...(manifest.solutions ?? [])].map((e) => ({ key: e.file, md5: e.md5 ?? "" }));
}

/** 서버에 이미 같은 내용이 있는 파일은 건너뛴다. */
async function planUploads(bookId, entries, files) {
  let stored = {};
  try { stored = (await api("GET", `/api/problem-bank/book-audit?bookId=${encodeURIComponent(bookId)}`)).stored ?? {}; } catch { stored = {}; }
  const pending = [];
  let skipped = 0;
  let missing = 0;
  for (const entry of entries) {
    const abs = files.get(entry.key) ?? files.get(path.basename(entry.key));
    if (!abs) { missing += 1; continue; }
    const size = (await stat(abs)).size;
    const have = stored[entry.key];
    const same = Boolean(have) && ((entry.md5 && have.md5 && entry.md5 === have.md5) || (!have.md5 && have.size > 0 && have.size === size));
    if (same) skipped += 1;
    else pending.push({ ...entry, abs });
  }
  return { pending, skipped, missing };
}

async function uploadImages(bookId, pending, label) {
  const batches = [];
  for (let i = 0; i < pending.length; i += IMAGE_BATCH) batches.push(pending.slice(i, i + IMAGE_BATCH));
  let done = 0;
  let next = 0;
  const worker = async () => {
    while (next < batches.length) {
      const batch = batches[next];
      next += 1;
      const payload = await Promise.all(batch.map(async (entry) => {
        const buffer = await readFile(entry.abs);
        const mime = MIME[path.extname(entry.abs).toLowerCase()] ?? "application/octet-stream";
        return { file: entry.key, dataUrl: `data:${mime};base64,${buffer.toString("base64")}` };
      }));
      await api("POST", "/api/problem-bank/images", { bookId, files: payload });
      done += batch.length;
      process.stdout.write(`\r  ${label} ${done}/${pending.length}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(BATCH_CONCURRENCY, batches.length) }, worker));
  if (pending.length) process.stdout.write("\n");
}

async function uploadOne(folder) {
  const name = path.basename(folder);
  console.log(`\n=== ${name}`);
  const files = await walk(folder);

  const manifestPath = files.get("manifest.json");
  const answersPath = files.get("manifest-answers.json");
  if (!manifestPath && !answersPath) throw new Error("manifest.json / manifest-answers.json 둘 다 없습니다.");

  const manifest = manifestPath ? JSON.parse(await readFile(manifestPath, "utf8")) : null;
  const answerManifest = answersPath ? JSON.parse(await readFile(answersPath, "utf8")) : null;
  const bookId = manifest?.book?.book_id ?? answerManifest?.book_id;
  if (!bookId) throw new Error("book_id 를 찾지 못했습니다.");
  if (manifest && answerManifest && answerManifest.book_id !== bookId) {
    throw new Error(`정답·해설 패키지가 다른 교재(${answerManifest.book_id}) 것입니다.`);
  }

  const title = manifest?.book?.title ?? name;
  const itemCount = manifest?.items?.length ?? 0;
  const solutionCount = answerManifest?.solutions?.length ?? 0;
  const answerCount = answerManifest?.answers?.length ?? 0;
  console.log(`  ${title} · 문항 ${itemCount} · 해설 ${solutionCount} · 답 ${answerCount} · book_id ${bookId}`);

  const itemEntries = manifest && !answersOnly ? collectKeys(manifest, "items") : [];
  const answerEntries = answerManifest ? collectKeys(answerManifest, "answers") : [];

  const itemPlan = itemEntries.length ? await planUploads(bookId, itemEntries, files) : { pending: [], skipped: 0, missing: 0 };
  const answerPlan = answerEntries.length ? await planUploads(bookId, answerEntries, files) : { pending: [], skipped: 0, missing: 0 };

  console.log(`  문항 이미지 ${itemEntries.length} → 올릴 것 ${itemPlan.pending.length} · 건너뜀 ${itemPlan.skipped}${itemPlan.missing ? ` · 폴더에 없음 ${itemPlan.missing}` : ""}`);
  console.log(`  정답·해설 이미지 ${answerEntries.length} → 올릴 것 ${answerPlan.pending.length} · 건너뜀 ${answerPlan.skipped}${answerPlan.missing ? ` · 폴더에 없음 ${answerPlan.missing}` : ""}`);

  if (itemPlan.missing || answerPlan.missing) throw new Error("manifest 가 참조하는 이미지가 폴더에 없습니다. 패키지가 온전한지 확인해 주세요.");
  if (!confirm) { console.log("  (--confirm 없음 — 여기까지만 점검하고 올리지 않습니다)"); return; }

  if (manifest && !answersOnly) {
    const result = await api("POST", "/api/problem-bank/import", { manifest });
    console.log(`  manifest 등록 완료 · 서버 문항 ${result.itemCount ?? "?"}`);
    await uploadImages(bookId, itemPlan.pending, "문항 이미지");
  }
  if (answerManifest) {
    await api("POST", "/api/problem-bank/import-answers", { manifest: answerManifest });
    console.log("  정답·해설 manifest 등록 완료");
    await uploadImages(bookId, answerPlan.pending, "정답·해설 이미지");
  }

  const audit = await api("GET", `/api/problem-bank/book-audit?bookId=${encodeURIComponent(bookId)}`);
  console.log(`  서버 재조회: 저장된 파일 ${Object.keys(audit.stored ?? {}).length}개`);
}

let failed = 0;
for (const folder of folders) {
  try { await uploadOne(path.resolve(folder)); }
  catch (error) { failed += 1; console.error(`\n  실패: ${error.message}`); }
}
console.log(`\n끝. 폴더 ${folders.length}개 · 실패 ${failed}개${confirm ? "" : " · 점검만 수행(--confirm 없음)"}`);
process.exit(failed ? 1 : 0);
