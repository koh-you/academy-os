// 재조판 진행표의 상태 기계 fixture.
//
// 이 표는 34권을 도는 작업이 토큰 만료·세션 종료·재부팅으로 끊겼을 때 **다음 실행이 무엇을 건너뛸지**를
// 정하는 유일한 원천이다. 여기가 틀리면 끝난 책을 다시 조판하거나(책당 5~22분) 안 끝난 책을 건너뛴다.
import assert from "node:assert/strict";
import { markProgressRow, readProgressRows } from "../scripts/latex-bank/retypesetProgressTable.mjs";

const table = [
  "# 진행 상태",
  "",
  "| # | latex-bank | 교재 | 문항 | 상태 |",
  "| --- | --- | --- | --- | --- |",
  "| 1 | `ssenb-alg` | 쎈B 대수 | 739 | ⬜ |",
  "| 2 | `rpm-m3-2` | RPM 중3-2 수학 | 644 | ⏳ 2026-10-03 · 조판 끝 · 등록 대기 |",
  "| 3 | `gn-cm1` | 개념원리 공통수학1 | 810 | ✅ 2026-10-03 · 810/810장 교체 · 9분 |",
  "",
  "## 재개 방법",
  "표가 아닌 줄은 건드리지 않는다. | `ssenb-alg` | 같은 글이 본문에 있어도 마찬가지다.",
  ""
].join("\n");

const rows = readProgressRows(table);
assert.deepEqual(rows.map((row) => row.bank), ["ssenb-alg", "rpm-m3-2", "gn-cm1"]);
assert.deepEqual(rows.map((row) => [row.done, row.typeset]), [[false, false], [false, true], [true, false]]);
assert.equal(rows[0].items, 739);
assert.equal(rows[1].title, "RPM 중3-2 수학");

// 조판은 끝났고 등록만 실패 → ⏳. 다음 실행이 조판을 건너뛴다.
const afterFail = markProgressRow(table, "ssenb-alg", "typeset", "조판 끝 · 등록 대기", "2026-10-04");
assert.match(afterFail, /\| 1 \| `ssenb-alg` \| 쎈B 대수 \| 739 \| ⏳ 2026-10-04 · 조판 끝 · 등록 대기 \|/);
assert.equal(readProgressRows(afterFail)[0].typeset, true);

// ⏳ 였던 책이 등록까지 끝나면 ✅ 로 덮인다(상태가 겹쳐 쌓이지 않는다).
const afterUpload = markProgressRow(afterFail, "rpm-m3-2", "done", "644/644장 교체 · 7분", "2026-10-04");
assert.match(afterUpload, /\| 2 \| `rpm-m3-2` \| RPM 중3-2 수학 \| 644 \| ✅ 2026-10-04 · 644\/644장 교체 · 7분 \|/);
assert.equal(readProgressRows(afterUpload)[1].done, true);
assert.equal(readProgressRows(afterUpload)[1].typeset, false, "⏳ 흔적이 남지 않는다");

// 책 이름에 `-` 가 섞여 있어도(rpm-m3-2) 정규식으로 새지 않는다.
assert.equal(readProgressRows(markProgressRow(table, "rpm-m3-2", "done", "x", "2026-10-04"))[1].done, true);

// 표가 아닌 줄은 건드리지 않는다 — 본문에 같은 글자가 있어도.
const prose = afterFail.split("\n").find((line) => line.startsWith("표가 아닌 줄은"));
assert.equal(prose, "표가 아닌 줄은 건드리지 않는다. | `ssenb-alg` | 같은 글이 본문에 있어도 마찬가지다.");

// 없는 책을 적으면 표가 그대로다(조용히 엉뚱한 줄을 고치지 않는다).
assert.equal(markProgressRow(table, "없는책", "done", "x", "2026-10-04"), table);

// 모르는 상태는 거부한다.
assert.throws(() => markProgressRow(table, "ssenb-alg", "엉뚱", "x"), /모르는 상태/);

console.log("재조판 진행표 fixture 통과");
