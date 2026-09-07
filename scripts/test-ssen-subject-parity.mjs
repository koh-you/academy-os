// 쎈 과목 목록 일치 가드.
//
// 배경: App.jsx 는 예전에 api/data/ssenTypeIndex.json(284 KB)을 정적 import 해서
// `Object.keys(buildSsenTypeCatalog(ssenTypeIndex))` 로 과목 목록을 만들었다.
// 그 목록 하나 때문에 284 KB 가 교사 첫 로딩 번들에 들어갔다.
//
// 지금은 작은 상수 TEST_PAPER_SUBJECTS 를 쓴다. 원천 데이터가 바뀌어 과목이 추가·삭제되거나
// 순서가 달라지면 둘이 조용히 갈라진다 — 그러면 과목 드롭다운과 기본 선택 과목
// (testPaperSubjectOptions[0])이 실제 카탈로그와 어긋난다. 그 어긋남을 여기서 잡는다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildSsenTypeCatalog } from "../src/domains/tests/ssenTypeCatalogModel.js";
import { TEST_PAPER_SUBJECTS } from "../src/domains/tests/testPaperLibraryModel.js";

const ssenTypeIndex = JSON.parse(
  await readFile(new URL("../api/data/ssenTypeIndex.json", import.meta.url), "utf8")
);
const catalogSubjects = Object.keys(buildSsenTypeCatalog(ssenTypeIndex));

assert.deepEqual(
  TEST_PAPER_SUBJECTS,
  catalogSubjects,
  "TEST_PAPER_SUBJECTS 가 쎈 카탈로그의 과목(첫 등장 순서)과 다릅니다.\n" +
  `  카탈로그: ${JSON.stringify(catalogSubjects)}\n` +
  `  상수:     ${JSON.stringify(TEST_PAPER_SUBJECTS)}\n` +
  "  순서까지 같아야 합니다 — testPaperSubjectOptions[0] 이 기본 선택 과목이라\n" +
  "  순서가 바뀌면 화면 기본값이 달라집니다."
);

// App.jsx 가 다시 JSON 을 끌어오면 첫 로딩 번들이 284 KB 커진다.
const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.ok(
  !/^import .*ssenTypeIndex\.json/m.test(appSource),
  "App.jsx 가 ssenTypeIndex.json 을 다시 정적 import 하면 284 KB 가 교사 첫 로딩으로 돌아옵니다"
);
assert.ok(
  !/from "\.\.\/domains\/tests\/ssenTypeCatalog\.js"/.test(appSource),
  "App.jsx 가 ssenTypeCatalog.js 를 import 하면 그 안의 JSON 이 첫 로딩으로 딸려옵니다"
);

console.log(`ssen subject parity: 과목 ${catalogSubjects.length}개 일치 · App.jsx 는 284 KB JSON 을 끌어오지 않음`);
