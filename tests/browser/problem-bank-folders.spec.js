import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

async function openBookCenter(page) {
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /교재관리/ }).click();
  return page.locator(".problemBankListPanel");
}

// 가상 교재는 folderPath 가 "중3 / RPM" 이라 목록 첫 화면에는 교재가 아니라 폴더가 보여야 한다.
test("교재관리: 폴더를 따라 들어가 교재를 고르고, 상위 폴더로 되돌아온다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const list = await openBookCenter(page);

  // 루트에는 폴더만 있고 교재는 없다.
  await expect(list.getByRole("button", { name: /📁 중3/ })).toBeVisible();
  await expect(list.getByRole("button", { name: /RPM 중3-2 수학 \(가상\)/ })).toHaveCount(0);
  await expect(list.getByRole("button", { name: /📁 중3/ })).toContainText("1개 교재");

  await list.getByRole("button", { name: /📁 중3/ }).click();
  await expect(list.getByRole("button", { name: /📁 RPM/ })).toBeVisible();
  await list.getByRole("button", { name: /📁 RPM/ }).click();

  // 마지막 폴더에서 교재가 나온다.
  const book = list.getByRole("button", { name: /RPM 중3-2 수학 \(가상\)/ });
  await expect(book).toBeVisible();
  await book.click();
  await expect(page.locator(".problemBankDetailPanel")).toContainText("RPM 중3-2 수학 (가상)");

  // 상위 폴더 버튼으로 한 단계 올라간다.
  await list.getByRole("button", { name: "← 상위 폴더" }).click();
  await expect(list.getByRole("button", { name: /📁 RPM/ })).toBeVisible();

  // 빵부스러기의 「전체」로 루트까지 한 번에 돌아온다.
  await list.getByRole("button", { name: /^전체 / }).click();
  await expect(list.getByRole("button", { name: /📁 중3/ })).toBeVisible();

  expect(pageErrors).toEqual([]);
});

// 폴더를 바꾸면 화면값이 아니라 서버에 저장된 값으로 목록이 다시 그려져야 한다.
test("교재관리: 교재의 폴더를 바꾸면 서버에 저장되고 목록이 새 폴더로 옮겨진다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const patches = [];
  await page.route("**/api/problem-bank/book", async (route) => {
    if (route.request().method() === "POST") patches.push(route.request().postDataJSON());
    await route.continue();
  });

  const list = await openBookCenter(page);
  await list.getByRole("button", { name: /📁 중3/ }).click();
  await list.getByRole("button", { name: /📁 RPM/ }).click();
  await list.getByRole("button", { name: /RPM 중3-2 수학 \(가상\)/ }).click();

  const detail = page.locator(".problemBankDetailPanel");
  const folderInput = detail.getByLabel("교재 폴더");
  await expect(folderInput).toHaveValue("중3 / RPM");

  await folderInput.fill("3-2");
  await detail.getByRole("button", { name: "폴더 저장" }).click();
  await expect(detail).toContainText('폴더를 "3-2" 로 옮겼습니다');

  // 서버에 보낸 값이 정리된 경로여야 한다.
  expect(patches.at(-1)?.patch?.folderPath).toBe("3-2");

  // 목록을 루트부터 다시 보면 교재가 새 폴더 아래에 있다.
  await list.getByRole("button", { name: /^전체 / }).click();
  await expect(list.getByRole("button", { name: /📁 3-2/ })).toBeVisible();
  await expect(list.getByRole("button", { name: /📁 중3/ })).toHaveCount(0);
  await list.getByRole("button", { name: /📁 3-2/ }).click();
  await expect(list.getByRole("button", { name: /RPM 중3-2 수학 \(가상\)/ })).toBeVisible();

  expect(pageErrors).toEqual([]);
});
