const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const root = path.resolve(__dirname, "..");
const sourceRoot = path.join(root, "src");

function listFiles(directory, predicate, output = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      listFiles(filePath, predicate, output);
    } else if (predicate(filePath)) {
      output.push(filePath);
    }
  }
  return output;
}

const cssFiles = listFiles(sourceRoot, (filePath) => filePath.endsWith(".css"));
const runtimeFiles = [
  ...listFiles(sourceRoot, (filePath) => /\.(?:js|jsx|ts|tsx)$/.test(filePath)),
  path.join(root, "index.html"),
  path.join(root, "attendance.html"),
  path.join(root, "special-lecture.html")
].filter((filePath) => fs.existsSync(filePath));

const selectorLocations = new Map();
let ruleCount = 0;

for (const filePath of cssFiles) {
  const cssRoot = postcss.parse(fs.readFileSync(filePath, "utf8"), { from: filePath });
  cssRoot.walkRules((rule) => {
    ruleCount += 1;
    const atRuleContext = [];
    for (let parent = rule.parent; parent && parent.type !== "root"; parent = parent.parent) {
      if (parent.type === "atrule") {
        atRuleContext.unshift(`@${parent.name} ${parent.params}`);
      }
    }
    const key = `${atRuleContext.join(" > ") || "root"} || ${rule.selector.trim()}`;
    const location = `${path.relative(root, filePath)}:${rule.source.start.line}`;
    const locations = selectorLocations.get(key) ?? [];
    locations.push(location);
    selectorLocations.set(key, locations);
  });
}

const exactDuplicateSelectors = [...selectorLocations.entries()]
  .filter(([, locations]) => locations.length > 1)
  .map(([selector, locations]) => ({ selector, locations }));

const cssSource = cssFiles.map((filePath) => fs.readFileSync(filePath, "utf8")).join("\n");
const runtimeSource = runtimeFiles.map((filePath) => fs.readFileSync(filePath, "utf8")).join("\n");
const retiredSelectors = ["specialLectureMatchGrid", "specialLectureMatchCard"];
const retiredSelectorLeaks = retiredSelectors.filter(
  (selector) => cssSource.includes(selector) || runtimeSource.includes(selector)
);

const result = {
  cssFiles: cssFiles.length,
  exactDuplicateSelectorContexts: exactDuplicateSelectors.length,
  retiredSelectorLeaks,
  ruleCount
};

if (exactDuplicateSelectors.length || retiredSelectorLeaks.length) {
  console.error(JSON.stringify({ ...result, exactDuplicateSelectors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(result));
