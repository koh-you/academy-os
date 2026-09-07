// 출결 태블릿 CSS 동기화 가드.
//
// 배경: 태블릿은 이제 App.css 대신 src/kiosk/attendanceKiosk.css 만 받는다(1/38 크기).
// 그 파일은 App.css 에서 뽑아낸 생성물이라, 누가 App.css 의 .primaryButton 이나
// .modalCard 를 고치면 태블릿 쪽은 안 따라가서 두 화면의 규칙이 조용히 갈라진다.
// 눈에 안 띄는 종류의 회귀라서 CI 에서 막는다.
//
// 두 가지를 본다.
//   1) 지금 App.css 로 다시 뽑은 결과가 커밋된 CSS 와 같은가        (규칙 갈라짐)
//   2) 키오스크 화면이 쓰는 class 가 추출 허용 목록에 다 있는가      (새 class 누락)
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { allowedClasses, buildKioskCss, kioskCssPath } from "./build-kiosk-css.mjs";

const committed = await readFile(kioskCssPath, "utf8");
const regenerated = buildKioskCss();

assert.equal(
  regenerated,
  committed,
  "App.css 가 바뀌었는데 태블릿 CSS 가 따라오지 않았습니다.\n" +
  "  `node scripts/build-kiosk-css.mjs` 로 다시 생성한 뒤 함께 커밋하세요.\n" +
  "  (그대로 두면 교사 화면과 태블릿의 버튼·모달 규칙이 갈라집니다.)"
);

// 키오스크 DOM 을 만드는 파일들. 여기 className 으로 쓴 class 는 추출 목록에 있어야
// 스타일이 딸려온다. 목록에 없으면 그 요소만 스타일 없이 렌더된다.
const kioskRenderTree = [
  "../src/kioskMain.jsx",
  "../src/kiosk/AttendanceKioskApp.jsx",
  "../src/domains/lessons/AttendanceKiosk.jsx",
  "../src/shared/components/Modal.jsx"
];

const missing = [];
for (const relativePath of kioskRenderTree) {
  const filePath = new URL(relativePath, import.meta.url);
  const source = await readFile(filePath, "utf8");
  const name = relativePath.replace("../", "");

  for (const match of source.matchAll(/className\s*=\s*(?:"([^"]*)"|\{([^}]*)\})/g)) {
    const literalAttribute = match[1];
    const expression = match[2] ?? "";
    // 표현식 안에서는 따옴표로 감싼 리터럴만 정적으로 확인할 수 있다.
    const candidates = literalAttribute !== undefined
      ? [literalAttribute]
      : [...expression.matchAll(/"([^"]*)"/g)].map((inner) => inner[1]);

    for (const candidate of candidates) {
      for (const token of candidate.split(/\s+/).filter(Boolean)) {
        if (token.includes("${")) continue; // `align-${align}` 류는 정적으로 못 푼다
        if (allowedClasses.has(token)) continue;
        missing.push(`${name}: .${token}`);
      }
    }
  }
}

assert.deepEqual(
  [...new Set(missing)],
  [],
  "키오스크 화면이 쓰는 class 가 CSS 추출 목록(build-kiosk-css.mjs 의 allowedClasses)에 없습니다.\n" +
  "  이대로 두면 그 요소는 태블릿에서 스타일 없이 렌더됩니다:\n  " +
  [...new Set(missing)].join("\n  ")
);

// document.body 에 직접 붙이는 class 는 className 검사에 안 잡히므로 따로 본다.
const kioskApp = await readFile(new URL("../src/kiosk/AttendanceKioskApp.jsx", import.meta.url), "utf8");
for (const match of kioskApp.matchAll(/classList\.(?:add|remove)\("([^"]+)"\)/g)) {
  assert.ok(
    allowedClasses.has(match[1]),
    `body 에 붙이는 class(.${match[1]})가 CSS 추출 목록에 없습니다`
  );
}

const kioskMain = await readFile(new URL("../src/kioskMain.jsx", import.meta.url), "utf8");
assert.ok(
  kioskMain.includes("attendanceKiosk.css"),
  "태블릿 진입점은 전용 CSS(attendanceKiosk.css)를 import 해야 한다"
);
assert.ok(
  !/import\s+"\.\/app\/App\.css"/.test(kioskMain),
  "태블릿 진입점이 통짜 App.css 를 다시 import 하면 CSS 분리가 원상복구된다"
);

console.log(
  `kiosk css sync: 생성물 일치 · 화면 class 누락 없음 · ` +
  `${Math.round(Buffer.byteLength(committed) / 1024)} KB (App.css 대비 1/38)`
);
