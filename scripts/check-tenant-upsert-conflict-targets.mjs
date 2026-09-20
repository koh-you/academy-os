// 복합키 (tenant_id, <id>) 표에 upsert 할 때 on_conflict 가 tenant_id 를 빠뜨리지 않는지 — 정적 검사.
//
// 2026-09-20: lessons·school_events·test_sessions 기본키를 (tenant_id, id) 로 바꿨다(exam_prep_rows 는
// 09-18). PostgREST 는 `on_conflict=lesson_id` 처럼 단일 id 를 받으면 그 컬럼만의 unique 제약을
// 찾다가 "there is no unique or exclusion constraint" 로 500 을 낸다. 원장 계정에서는 잘 되던
// 저장이 전부 깨지는 종류의 오류라, 표 목록(tenantScope.TENANT_COMPOSITE_KEY_TABLES)과 호출부를
// 코드에서 직접 맞춘다. on_conflict 를 생략한 호출은 기본키를 쓰므로 통과.
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { TENANT_COMPOSITE_KEY_TABLES } from "../src/shared/server/tenantScope.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const SCAN_DIRS = ["api", "src/shared/server"];

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(path)));
    else if (/\.(js|mjs)$/.test(entry.name)) files.push(path);
  }
  return files;
}

function sliceCall(source, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (source[i] === "(") depth += 1;
    else if (source[i] === ")") {
      depth -= 1;
      if (depth === 0) return source.slice(openIndex, i + 1);
    }
  }
  return source.slice(openIndex);
}

const violations = [];
let checked = 0;
for (const dir of SCAN_DIRS) {
  for (const file of await collect(join(root, dir))) {
    const source = await readFile(file, "utf8");
    const rel = relative(root, file).replaceAll("\\", "/");
    // upsertRows("<table>", …) 호출 하나의 괄호 범위 안에서만 onConflict 를 찾는다(다음 호출의 것을 집지 않게).
    for (const m of source.matchAll(/upsertRows\(\s*["']([a-z_]+)["']/g)) {
      const table = m[1];
      const idColumn = TENANT_COMPOSITE_KEY_TABLES[table];
      if (!idColumn) continue;
      const call = sliceCall(source, m.index + m[0].indexOf("("));
      const columns = /onConflict:\s*["']([^"']+)["']/.exec(call)?.[1];
      if (!columns) continue;
      checked += 1;
      const list = columns.split(",").map((value) => value.trim());
      if (!list.includes("tenant_id") || !list.includes(idColumn)) {
        const line = source.slice(0, m.index).split("\n").length;
        violations.push(`${rel}:${line}  upsertRows("${table}", …, { onConflict: "${columns}" }) → "tenant_id,${idColumn}" 이어야 합니다`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error("tenant upsert conflict target check failed — 복합키 표인데 on_conflict 에 tenant_id 가 없습니다:");
  for (const line of violations) console.error(`  ${line}`);
  process.exit(1);
}
console.log(`tenant upsert conflict target check passed · ${checked} upsert(s) on ${Object.keys(TENANT_COMPOSITE_KEY_TABLES).length} composite-key tables carry tenant_id`);
