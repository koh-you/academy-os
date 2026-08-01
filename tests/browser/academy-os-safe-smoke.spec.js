import { expect, test } from "@playwright/test";

function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error));
  return errors;
}

async function loginAsTeacher(page) {
  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
}

test.beforeEach(async ({ request }) => {
  await expect.poll(async () => {
    try {
      const response = await request.post("http://127.0.0.1:8787/api/safe-fixture/reset");
      return response.ok();
    } catch {
      return false;
    }
  }, { timeout: 10_000 }).toBe(true);
});

test("safe preview opens the login screen without runtime errors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.goto("/");
  await expect(page.getByTestId("safe-runtime-banner")).toBeVisible();
  await expect(page.getByRole("heading", { name: "로그인" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("withdrawn absence candidate can reach and complete safe makeup cancellation", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();
  await expect(page.getByRole("heading", { name: "보충관리" })).toBeVisible();
  await page.getByRole("button", { name: /결석보강/ }).first().click();
  await expect(page.getByText("미리보기 퇴원생").first()).toBeVisible();
  await page.getByRole("button", { name: "보충 생성" }).click();

  await expect(page.getByRole("button", { name: "보강만 취소" })).toBeVisible();
  await page.getByRole("button", { name: "보강만 취소" }).click();
  const cancellationDialog = page.getByRole("dialog", { name: "보강만 취소할까요?" });
  await expect(cancellationDialog).toBeVisible();
  await cancellationDialog.getByRole("button", { name: "보강만 취소" }).click();

  await expect(page.getByText("지금 처리할 결석 보강이 없습니다.")).toBeVisible();
  await expect(page.getByRole("button", { name: "보충 생성" })).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});

test("lesson journal calendar can move to the next month and back", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const monthNavigation = page.getByRole("navigation", { name: "수업일지 달력 월 이동" });
  await expect(monthNavigation).toBeVisible();
  const monthHeading = monthNavigation.getByRole("heading");
  const originalMonthTitle = await monthHeading.textContent();
  await monthNavigation.getByRole("button", { name: "다음 달" }).click();
  await expect(monthHeading).not.toHaveText(originalMonthTitle);
  await monthNavigation.getByRole("button", { name: "이전 달" }).click();
  await expect(monthHeading).toHaveText(originalMonthTitle);
  expect(pageErrors).toEqual([]);
});

test("lesson journal carries the latest non-empty record across a month boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · 1개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal.getByRole("button", { name: "월 경계 연동반" })).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "7월 최신 교재" })).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "7월 최신 진도" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});
