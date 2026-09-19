// 원장 전용 상수 래칫.
//
// 2026-09-19 원장 방침: 원장 전용 상수(반 id·이름·tenant id)를 코드에 두지 말고 tenant 설정으로.
// 이미 박혀 있는 것은 파일별 개수를 잠그고(baseline), **새로 늘어나면 실패**한다. 줄어들면
// --update 로 낮춘다(file-size-ratchet 과 같은 방식). 남은 것들은 2단계 이후 하나씩 걷어낸다.
//
// 대상 패턴은 아래 OWNER_PATTERNS. 허용 예외(ALLOWED_FILES)는 상수를 "정의" 하는 곳 —
// 기본 tenant id 상수, 브랜드 상수, 샘플 fixture — 이지 "사용" 하는 곳이 아니다.
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const baselinePath = join(root, "scripts", "owner-constants-baseline.json");
const update = process.argv.includes("--update");

const OWNER_PATTERNS = [
  { key: "template_mwf_7_10", regex: /template_mwf_7_10/g },
  { key: "template_tt_sat", regex: /template_tt_sat_(front|back)/g },
  { key: "instructor_owner_001", regex: /instructor_owner_001/g },
  { key: "tenant_default", regex: /["'`]tenant_default["'`]/g },
  { key: "고태영", regex: /고태영/g }
];

const ALLOWED_FILES = new Set([
  "src/shared/data/sampleData.js",
  "src/shared/utils/academyBrand.js",
  "src/shared/utils/tenantIdScope.js",
  "src/shared/utils/sessionActor.js",
  "src/shared/server/tenantScope.js"
]);

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(path)));
    else if (/\.(js|jsx)$/.test(entry.name)) files.push(path);
  }
  return files;
}

const counts = {};
for (const file of await collect(join(root, "src"))) {
  const rel = relative(root, file).replaceAll("\\", "/");
  if (ALLOWED_FILES.has(rel)) continue;
  const source = await readFile(file, "utf8");
  for (const { key, regex } of OWNER_PATTERNS) {
    const n = (source.match(regex) || []).length;
    if (n > 0) counts[`${rel} :: ${key}`] = n;
  }
}

let baseline = {};
try {
  baseline = JSON.parse(await readFile(baselinePath, "utf8")).counts ?? {};
} catch {
  baseline = {};
}

const grew = Object.entries(counts).filter(([k, n]) => n > (baseline[k] ?? 0));
const shrank = Object.entries(baseline).filter(([k, n]) => (counts[k] ?? 0) < n);

if (update) {
  await writeFile(baselinePath, `${JSON.stringify({
    _comment: "원장 전용 상수 사용 개수(파일::패턴). 늘어나면 check:owner-constants 가 실패한다. 줄이면 --update 로 낮춘다.",
    counts: Object.fromEntries(Object.entries(counts).sort())
  }, null, 2)}\n`);
  console.log(`owner constants baseline updated · ${Object.keys(counts).length} entries`);
} else if (grew.length > 0) {
  console.error("owner constants ratchet failed — 원장 전용 상수가 새로 들어왔습니다. tenant 설정(app_state tenantSettings)이나 세션 값으로 바꾸세요:");
  for (const [k, n] of grew) console.error(`  ${k}: ${baseline[k] ?? 0} -> ${n}`);
  process.exit(1);
} else {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0);
  console.log(`owner constants ratchet passed · ${total} remaining across ${Object.keys(counts).length} file/pattern entries${shrank.length ? ` · ${shrank.length} shrank (run with --update to lock in)` : ""}`);
}
