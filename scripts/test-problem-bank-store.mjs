// 문제은행 저장소 · 정답·해설 패키지 가져오기 fixture 검사 (Supabase 대신 메모리 표).
import assert from "node:assert/strict";
import { createProblemBankStore } from "../src/shared/server/problemBankStore.js";

const tables = {
  problem_bank_books: [{ book_id: "pbk_abc123", title: "RPM" }],
  problem_bank_units: [],
  problem_bank_items: [
    { item_id: "pbk_abc123-0001", book_id: "pbk_abc123", number_label: "0001", has_solution: false },
    { item_id: "pbk_abc123-0002", book_id: "pbk_abc123", number_label: "0002", has_solution: true },
    { item_id: "pbk_abc123-0003", book_id: "pbk_abc123", number_label: "0003", has_solution: false }
  ],
  problem_bank_regions: [
    { region_id: "pbk_abc123-0001-r0", item_id: "pbk_abc123-0001", kind: "body", position: 0 },
    { region_id: "pbk_abc123-0002-solution", item_id: "pbk_abc123-0002", kind: "solution", position: 91, storage_path: "pbk_abc123/solutions/old.jpg" }
  ]
};
const log = [];

function parseQuery(query) {
  return Object.fromEntries(new URLSearchParams(query).entries());
}
function matches(row, filters) {
  return Object.entries(filters).every(([column, expression]) => {
    if (column === "select" || column === "order") return true;
    const [operator, ...rest] = expression.split(".");
    const value = rest.join(".");
    if (operator === "eq") return String(row[column]) === value;
    if (operator === "like") return new RegExp(`^${value.replace(/%/g, ".*")}$`).test(String(row[column]));
    if (operator === "in") return value.slice(1, -1).split(",").includes(String(row[column]));
    if (operator === "not") {
      const [, inner] = expression.split(/^not\./);
      const [innerOperator, innerValue] = [inner.split(".")[0], inner.split(".").slice(1).join(".")];
      if (innerOperator === "in") return !innerValue.slice(1, -1).split(",").includes(String(row[column]));
    }
    throw new Error(`지원하지 않는 필터: ${column}=${expression}`);
  });
}

const store = createProblemBankStore({
  isSupabaseConfigured: () => true,
  listRows: async (table, query) => tables[table].filter((row) => matches(row, parseQuery(query))),
  upsertRows: async (table, rows, options) => {
    log.push(`upsert:${table}:${rows.length}`);
    for (const row of rows) {
      const key = options.onConflict;
      const index = tables[table].findIndex((existing) => existing[key] === row[key]);
      if (index >= 0) tables[table][index] = { ...tables[table][index], ...row };
      else tables[table].push({ ...row });
    }
    return rows;
  },
  deleteRows: async (table, query) => {
    const filters = parseQuery(query);
    const removed = tables[table].filter((row) => matches(row, filters));
    tables[table] = tables[table].filter((row) => !matches(row, filters));
    log.push(`delete:${table}:${removed.length}`);
    return removed;
  },
  patchRows: async (table, query, values) => {
    const filters = parseQuery(query);
    const hit = tables[table].filter((row) => matches(row, filters));
    for (const row of hit) Object.assign(row, values);
    log.push(`patch:${table}:${hit.length}:${JSON.stringify(values.has_solution)}`);
    return hit;
  },
  createSignedStorageUrl: async (bucket, storagePath) => `signed://${storagePath}`,
  uploadStorageObjectWithBucketRetry: async () => ({}),
  listStorageObjectPaths: async () => [],
  deleteStorageObjects: async () => ({})
});

// 잘못된 패키지는 거부한다.
await assert.rejects(store.importProblemBankAnswers({ book_id: "nope", solutions: [{}] }), /book_id/);
await assert.rejects(store.importProblemBankAnswers({ book_id: "pbk_abc123", solutions: [], answers: [] }), /해설·정답이 없습니다/);
await assert.rejects(
  store.importProblemBankAnswers({ book_id: "pbk_abc123", solutions: [{ number_label: "0001", file: "../etc/passwd.jpg" }] }),
  /파일 이름/
);
await assert.rejects(store.importProblemBankAnswers({ book_id: "pbk_ffffff", solutions: [{ number_label: "0001", file: "solutions/x.jpg" }] }), /먼저 문항 패키지/);

// 정상 패키지: 번호로 문항을 찾고, 기존 해설 영역은 바뀌며, 문항 영역(body)은 남는다.
const result = await store.importProblemBankAnswers({
  book_id: "pbk_abc123",
  answers: [
    { number_label: "0001", file: "answers/pbk_abc123-0001.jpg", pdf_page: 2, bbox_normalized: [0.1, 0.2, 0.3, 0.4], width: 80, height: 40 },
    { number_label: "0003", file: "answers/pbk_abc123-0003.jpg", pdf_page: 2, width: 80, height: 40 },
    { number_label: "0999", file: "answers/pbk_abc123-0999.jpg", pdf_page: 9, width: 80, height: 40 }
  ],
  solutions: [
    { number_label: "0001", file: "solutions/pbk_abc123-0001.jpg", pdf_page: 2, bbox_normalized: [0.1, 0.2, 0.5, 0.6], width: 782, height: 200 },
    { number_label: "0003", file: "solutions/pbk_abc123-0003.jpg", pdf_page: 2, width: 782, height: 120 }
  ]
});
assert.deepEqual(result, { bookId: "pbk_abc123", answerCount: 2, solutionCount: 2, unmatched: ["answer:0999"] });
const regions = tables.problem_bank_regions;
assert.ok(regions.some((row) => row.region_id === "pbk_abc123-0001-r0" && row.kind === "body"), "문항 영역은 지워지지 않는다");
assert.ok(!regions.some((row) => row.storage_path === "pbk_abc123/solutions/old.jpg"), "옛 해설 영역은 지워진다");
assert.deepEqual(
  regions.filter((row) => row.kind === "answer").map((row) => row.storage_path).sort(),
  ["pbk_abc123/answers/pbk_abc123-0001.jpg", "pbk_abc123/answers/pbk_abc123-0003.jpg"]
);
assert.deepEqual(
  regions.filter((row) => row.kind === "solution").map((row) => row.region_id).sort(),
  ["pbk_abc123-0001-solution", "pbk_abc123-0003-solution"]
);
assert.deepEqual(
  tables.problem_bank_items.map((row) => `${row.number_label}:${row.has_solution}`),
  ["0001:true", "0002:false", "0003:true"],
  "has_solution 은 새 패키지 기준으로 다시 정한다"
);

// 문항 패키지를 다시 올려도 정답·해설 영역은 남는다.
await store.importProblemBankManifest({
  book: { book_id: "pbk_abc123", title: "RPM" },
  units: [],
  items: [
    { item_id: "pbk_abc123-0001", number_label: "0001", regions: [{ kind: "body", file: "items/pbk_abc123-0001.jpg" }] },
    { item_id: "pbk_abc123-0002", number_label: "0002", regions: [] },
    { item_id: "pbk_abc123-0003", number_label: "0003", regions: [] }
  ]
});
assert.equal(tables.problem_bank_regions.filter((row) => row.kind === "solution").length, 2, "문항 재등록 뒤에도 해설 영역 유지");
assert.equal(tables.problem_bank_regions.filter((row) => row.kind === "answer").length, 2, "문항 재등록 뒤에도 정답 영역 유지");
assert.deepEqual(
  tables.problem_bank_items.map((row) => `${row.number_label}:${row.has_solution}`),
  ["0001:true", "0002:false", "0003:true"],
  "문항 재등록이 has_solution 을 되돌리지 않는다"
);
assert.ok(log.includes("patch:problem_bank_items:2:true"));

// 서명 URL 은 정답·해설 영역에도 붙는다.
const resolved = await store.resolveProblemBankItemImages(["pbk_abc123-0001"]);
assert.deepEqual(resolved.map((region) => region.kind).sort(), ["answer", "body", "solution"]);
assert.ok(resolved.every((region) => region.url.startsWith("signed://pbk_abc123/")));

console.log("problem bank store fixtures passed");
