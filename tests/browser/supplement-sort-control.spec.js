import { expect, test } from "@playwright/test";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

async function loginAsTeacher(page) {
  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();
}

test.beforeEach(async ({ request }) => {
  await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
});

test("supplement sort label stays horizontal and offers lesson journal date ordering", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /보충관리/ }).click();
  await expect(page.getByRole("heading", { name: "보충관리" })).toBeVisible();

  const select = page.getByLabel("보충관리 정렬");
  await expect(select.locator("option")).toHaveText(["요일별", "수업일지 날짜순", "이름 가나다별"]);
  await select.selectOption("lesson_date");
  await expect(select).toHaveValue("lesson_date");

  await page.setViewportSize({ width: 390, height: 844 });
  const sortLabel = page.locator(".supplementSortControl > span");
  await expect(sortLabel).toHaveText("정렬");
  const layout = await sortLabel.evaluate((element) => ({
    height: element.getBoundingClientRect().height,
    whiteSpace: getComputedStyle(element).whiteSpace,
    width: element.getBoundingClientRect().width
  }));
  expect(layout.whiteSpace).toBe("nowrap");
  expect(layout.width).toBeGreaterThan(20);
  expect(layout.height).toBeLessThanOrEqual(22);
  const documentOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(documentOverflow).toBeLessThanOrEqual(1);
});
