const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const scanDirs = ["api", "docs", "scripts", "src", "supabase"];
const extensions = new Set([".cjs", ".css", ".html", ".js", ".jsx", ".json", ".md", ".sql"]);
const mojibakePatterns = [
  "\uFFFD",
  "濡",
  "怨",
  "諛",
  "遺",
  "蹂",
  "媛",
  "湲",
  "섍",
  "쒓",
  "몄",
  "뚮"
];

const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!extensions.has(path.extname(entry.name))) continue;
    if (path.relative(root, fullPath) === path.join("scripts", "check-encoding.cjs")) continue;
    const text = fs.readFileSync(fullPath, "utf8");
    for (const pattern of mojibakePatterns) {
      if (text.includes(pattern)) {
        findings.push({ file: path.relative(root, fullPath), pattern });
        break;
      }
    }
  }
}

for (const dirName of scanDirs) {
  const dir = path.join(root, dirName);
  if (fs.existsSync(dir)) walk(dir);
}

if (findings.length) {
  console.error(JSON.stringify({ ok: false, findings }, null, 2));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({ ok: true, checked: scanDirs }, null, 2));
}
