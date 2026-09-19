// 쓰지 않는 import 가 남지 않게 하는 가드.
//
// 2026-09-19 감사: src/app/App.jsx 의 import 417개 중 129개가 본문 어디서도 쓰이지 않았고(42개 문장은
// 통째로), 이 중 36개는 lazy 청크 모듈을 가리켰다. Rollup 이 tree-shake 하므로 운영 바이트는 0 이지만,
// (1) dev 서버는 그 모듈 42개를 더 읽고, (2) import 그래프(depcruise·검토)가 거짓 의존 42개를 보여주며,
// (3) 죽은 import 가 가리키는 lazy 모듈의 CSS 6개(10 KB)가 main.css 에 끌려 들어왔고, (4) 한 번만
// 실수로 쓰면 58 KB 짜리 lazy 모듈이 main 예산(여유 23 KB)을 즉시 넘긴다.
//
// eslint 의 no-unused-vars 는 지역 변수까지 잡아 지금 215건이라 그대로 켤 수 없다(본문 dead code 40건은
// 가드가 문자열로 고정한 것이 많아 별도 단위). 여기서는 같은 규칙을 돌리되 **import 문 안의 이름만**
// 본다. 새 미사용 import 가 생기면 실패한다.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { ESLint } from "eslint";

const root = fileURLToPath(new URL("..", import.meta.url));
const eslint = new ESLint({
  cwd: root,
  overrideConfig: {
    rules: { "no-unused-vars": ["error", { args: "none", caughtErrors: "none", ignoreRestSiblings: true }] }
  }
});
const results = await eslint.lintFiles(["src/**/*.{js,jsx}", "api/**/*.js"]);

// import 문이 차지하는 줄 범위들. 파일 중간의 import(예: 화면 하단의 지연 정의 뒤)도 잡는다.
function importLineRanges(source) {
  const lines = source.split(/\r?\n/);
  const ranges = [];
  let start = -1;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (start < 0 && /^import\b/.test(line)) start = index;
    if (start < 0) continue;
    if (/from\s+["'][^"']+["'];?\s*$/.test(line) || /^import\s+["'][^"']+["'];?\s*$/.test(line)) {
      ranges.push([start + 1, index + 1]);
      start = -1;
    }
  }
  return ranges;
}
function isImportLine(ranges, line) {
  return ranges.some(([from, to]) => line >= from && line <= to);
}

const offenders = [];
for (const result of results) {
  const unusedVars = result.messages.filter((message) => message.ruleId === "no-unused-vars");
  if (!unusedVars.length) continue;
  const ranges = importLineRanges(readFileSync(result.filePath, "utf8"));
  for (const message of unusedVars) {
    if (!isImportLine(ranges, message.line)) continue;
    const name = message.message.match(/'([^']+)'/)?.[1] ?? "?";
    offenders.push(`${result.filePath.slice(root.length).split("\\").join("/")}:${message.line} ${name}`);
  }
}

if (process.argv.includes("--list")) {
  console.log(offenders.join("\n"));
}
if (offenders.length) {
  console.error(`쓰지 않는 import ${offenders.length}개 — 지우거나 실제로 쓰세요:\n${offenders.join("\n")}`);
  process.exit(1);
}
console.log(`unused imports: 0 across ${results.length} files (src + api)`);
