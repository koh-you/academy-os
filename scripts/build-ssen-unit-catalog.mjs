#!/usr/bin/env node
// api/data/ssenTypeIndex.json 에서 중단원 단위로 추출해
// src/domains/tests/ssenUnitCatalog.js 를 다시 만든다.
//
// 시험지 라이브러리(단원별 평가)는 이 정적 데이터만으로 예정 카탈로그를 만들 수 있어
// App.jsx / main 청크(ssenTypeCatalog)에 의존하지 않는다.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rows = JSON.parse(readFileSync(join(repoRoot, "api", "data", "ssenTypeIndex.json"), "utf8"));

const seen = new Set();
const units = [];
for (const row of rows) {
  const key = `${row.subject}|${row.unitNo}`;
  if (seen.has(key)) continue;
  seen.add(key);
  units.push({
    subject: row.subject,
    unitNo: row.unitNo,
    unitName: row.unitName,
    partName: row.partName
  });
}
units.sort(
  (a, b) => a.subject.localeCompare(b.subject, "ko") || a.unitNo.localeCompare(b.unitNo, "ko")
);

const body = units
  .map(
    (unit) =>
      `  { subject: ${JSON.stringify(unit.subject)}, unitNo: ${JSON.stringify(unit.unitNo)}, ` +
      `unitName: ${JSON.stringify(unit.unitName)}, partName: ${JSON.stringify(unit.partName)} }`
  )
  .join(",\n");

const file =
  `// 쎈 목차 중단원 목록. api/data/ssenTypeIndex.json 에서 중단원 단위로 추출한 정적 데이터.\n` +
  `// 재생성: node scripts/build-ssen-unit-catalog.mjs\n` +
  `// 시험지 라이브러리(단원별 평가) 전용. 이 파일만으로 예정 시험지 카탈로그를 만들 수 있어\n` +
  `// App.jsx / main 청크에 의존하지 않는다.\n\n` +
  `export const SSEN_UNIT_ROWS = [\n${body}\n];\n`;

writeFileSync(join(repoRoot, "src", "domains", "tests", "ssenUnitCatalog.js"), file, "utf8");
process.stdout.write(`ssenUnitCatalog.js: ${units.length} unit rows\n`);
