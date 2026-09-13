import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

// 1×1 JPEG. 내용은 중요하지 않다 — 파일 이름이 manifest 와 맞는지만 본다.
const tinyJpeg = Buffer.from(
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AKp//2Q==",
  "base64"
);

/** 문항 패키지와 정답·해설 패키지를 한 폴더에 둔 가상 CLI 출력. */
function writeCombinedPackage(dir) {
  const bookId = "pbk_safefixture1";
  for (const sub of ["items", "answers", "solutions"]) mkdirSync(path.join(dir, sub), { recursive: true });
  const numbers = ["0001", "0002"];
  const manifest = {
    schema_version: 1,
    book: { book_id: bookId, title: "RPM 중3-2 수학 (가상)", folder_path: "중3 / RPM", page_count: 2, source_kind: "pdf_text" },
    units: [{ position: 0, title: "01 삼각비", item_number_from: "0001", item_number_to: "0002" }],
    items: numbers.map((number, index) => ({
      item_id: `${bookId}-${number}`,
      number_label: number,
      number_sort: index + 1,
      pdf_page: 1,
      unit_index: 0,
      regions: [{ kind: "body", position: 0, pdf_page: 1, bbox_normalized: [0.1, 0.1, 0.5, 0.3], file: `items/${bookId}-${number}.jpg`, width: 10, height: 10 }]
    }))
  };
  const answers = {
    schema_version: 1,
    book_id: bookId,
    solutions: numbers.map((number) => ({ number_label: number, file: `solutions/${bookId}-${number}.jpg`, pdf_page: 2, width: 10, height: 10 })),
    answers: numbers.map((number) => ({ number_label: number, file: `answers/${bookId}-${number}.jpg`, pdf_page: 2, width: 10, height: 10 }))
  };
  writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest));
  writeFileSync(path.join(dir, "manifest-answers.json"), JSON.stringify(answers));
  for (const number of numbers) {
    for (const sub of ["items", "answers", "solutions"]) writeFileSync(path.join(dir, sub, `${bookId}-${number}.jpg`), tinyJpeg);
  }
}

test("교재관리: 문항과 정답·해설이 든 폴더 하나로 한 번에 등록하고 서버 재조회로 확인한다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const packageDir = path.resolve("test-results", "problem-bank-combined-package");
  writeCombinedPackage(packageDir);

  // 안전 API 는 패키지 등록을 거부하므로 등록 3개 라우트만 성공 응답으로 대신한다. 재조회(GET)는 가상 데이터 그대로다.
  const posts = [];
  await page.route("**/api/problem-bank/import", async (route) => {
    const body = route.request().postDataJSON();
    posts.push({ path: "import", itemCount: body.manifest.items.length });
    await route.fulfill({ json: { ok: true, bookId: body.manifest.book.book_id, itemCount: body.manifest.items.length } });
  });
  await page.route("**/api/problem-bank/import-answers", async (route) => {
    const body = route.request().postDataJSON();
    posts.push({ path: "import-answers", solutions: body.manifest.solutions.length });
    await route.fulfill({ json: { ok: true, bookId: body.manifest.book_id, answerCount: body.manifest.answers.length, solutionCount: body.manifest.solutions.length, unmatched: [] } });
  });
  await page.route("**/api/problem-bank/images", async (route) => {
    const body = route.request().postDataJSON();
    posts.push({ path: "images", files: body.files.map((file) => file.file) });
    await route.fulfill({ json: { ok: true, bookId: body.bookId, uploaded: body.files.map((file) => file.file) } });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /교재관리/ }).click();
  await page.getByLabel("패키지 폴더 선택").setInputFiles(packageDir);
  const message = page.locator(".problemBankImportPanel .problemBankUploadMessage");
  await expect(message).toContainText("문항 2개 · 이미지 2개 · 해설 2개 · 답 2개");
  await page.getByRole("button", { name: "등록", exact: true }).click();
  // 가상 서버의 교재는 문항 20개라 「문항 수 불일치」로 끝나지만, 요청 순서와 파일 이름은 그대로 검증된다.
  await expect(message).toContainText(/서버 20 \/ 패키지 2/);
  expect(posts.map((post) => post.path)).toEqual(["import", "images", "import-answers", "images"]);
  expect([...posts[1].files].sort()).toEqual(["items/pbk_safefixture1-0001.jpg", "items/pbk_safefixture1-0002.jpg"]);
  expect([...posts[3].files].sort()).toEqual([
    "answers/pbk_safefixture1-0001.jpg",
    "answers/pbk_safefixture1-0002.jpg",
    "solutions/pbk_safefixture1-0001.jpg",
    "solutions/pbk_safefixture1-0002.jpg"
  ]);
  expect(pageErrors).toEqual([]);
});
