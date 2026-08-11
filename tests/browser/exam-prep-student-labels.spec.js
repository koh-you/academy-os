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

test("exam management shows active matching student names beside school and grade without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "전체 반" }).click();
  await page.setViewportSize({ width: 390, height: 844 });

  const row = page.locator(".examPrepRow").filter({ hasText: "안전중" });
  await expect(row).toBeVisible();
  await expect(row.getByLabel("안전중 중3 해당 학생")).toContainText("월경계 학생");
  await expect(row.getByLabel("안전중 중3 해당 학생")).not.toContainText("미리보기 퇴원생");
  await expect(row.getByLabel("안전중 중3 해당 학생").locator(".examPrepStudentNameList span")).toHaveCount(1);

  const documentOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(documentOverflow).toBeLessThanOrEqual(1);
  await expect(page.locator(".examPrepTable").evaluate((element) => element.scrollWidth > element.clientWidth)).resolves.toBe(true);
});
