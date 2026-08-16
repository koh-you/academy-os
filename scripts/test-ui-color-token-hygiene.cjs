const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const root = path.resolve(__dirname, "..");
const sourceRoot = path.join(root, "src");
const baselinePath = path.join(__dirname, "ui-color-hygiene-baseline.json");
const writeBaseline = process.argv.includes("--write-baseline");

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
const colorLiteralPattern = /#[0-9a-fA-F]{3,8}\b|\brgba?\(/g;

const violations = [];

for (const filePath of cssFiles) {
  const relFile = path.relative(root, filePath).replace(/\\/g, "/");
  const cssRoot = postcss.parse(fs.readFileSync(filePath, "utf8"), { from: filePath });
  cssRoot.walkDecls((decl) => {
    if (decl.parent?.selector === ":root") {
      return;
    }
    const matches = decl.value.match(colorLiteralPattern);
    if (!matches) {
      return;
    }
    const selector = decl.parent?.selector ?? decl.parent?.params ?? "(unknown)";
    violations.push({
      file: relFile,
      line: decl.source.start.line,
      selector,
      prop: decl.prop,
      value: decl.value
    });
  });
}

function violationKey(violation) {
  return `${violation.file}||${violation.selector}||${violation.prop}||${violation.value}`;
}

const keyOccurrences = new Map();
for (const violation of violations) {
  const baseKey = violationKey(violation);
  const occurrence = keyOccurrences.get(baseKey) ?? 0;
  keyOccurrences.set(baseKey, occurrence + 1);
  violation.key = occurrence === 0 ? baseKey : `${baseKey}||#${occurrence}`;
}

if (writeBaseline) {
  const baseline = violations.map((violation) => violation.key).sort();
  fs.writeFileSync(baselinePath, JSON.stringify(baseline, null, 2) + "\n");
  console.log(
    JSON.stringify({ baselineWritten: baselinePath, trackedViolations: baseline.length })
  );
  process.exit(0);
}

const baseline = fs.existsSync(baselinePath)
  ? new Set(JSON.parse(fs.readFileSync(baselinePath, "utf8")))
  : new Set();

const newViolations = violations.filter((violation) => !baseline.has(violation.key));
const currentKeys = new Set(violations.map((violation) => violation.key));
const resolvedBaselineEntries = [...baseline].filter((key) => !currentKeys.has(key));

const result = {
  cssFiles: cssFiles.length,
  trackedInBaseline: baseline.size,
  currentViolations: violations.length,
  newViolations: newViolations.length,
  resolvedSinceBaseline: resolvedBaselineEntries.length
};

if (newViolations.length) {
  console.error(
    JSON.stringify(
      {
        ...result,
        newViolations: newViolations.map(({ file, line, selector, prop, value }) => ({
          file,
          line,
          selector,
          prop,
          value
        }))
      },
      null,
      2
    )
  );
  console.error(
    "New hardcoded color literal(s) found outside :root. Use an existing --academy-*/--status-* token, " +
      "add a new token to src/app/App.tokens.css if none fits, or if this literal is pre-existing debt being " +
      "moved (not newly introduced), regenerate the baseline with: node scripts/test-ui-color-token-hygiene.cjs --write-baseline"
  );
  process.exit(1);
}

console.log(JSON.stringify(result));
