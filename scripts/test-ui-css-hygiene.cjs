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

// 이 규칙("셀렉터 하나당 위치 하나")은 손으로 쓴 CSS 가 여러 파일로 흩어져 어느 쪽이
// 이기는지 모르게 되는 것을 막는다. 그래서 같은 문서에 함께 로드되는 파일들 안에서만
// 의미가 있다.
//
// src/kiosk/attendanceKiosk.css 는 예외다. 교사용 App.css 에서 뽑아낸 생성물이고
// (scripts/build-kiosk-css.mjs), attendance.html 이라는 별도 진입점 번들로만 나간다 —
// App.css 와 같은 문서에 절대 함께 로드되지 않으므로 캐스케이드가 겹칠 수 없다.
// 손으로 고치는 파일도 아니고, App.css 와 어긋나면 test:kiosk-css-sync 가 잡는다.
// 그래서 "교사 번들끼리" 와 "키오스크 번들 안에서" 를 나눠 검사한다.
const generatedKioskCss = path.join(sourceRoot, "kiosk", "attendanceKiosk.css");
const bundleOf = (filePath) => (filePath === generatedKioskCss ? "kiosk" : "teacher");

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
    const key = `${bundleOf(filePath)} :: ${atRuleContext.join(" > ") || "root"} || ${rule.selector.trim()}`;
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
