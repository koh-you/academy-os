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
  const withdrawnCandidate = page.getByRole("article").filter({ hasText: "미리보기 퇴원생" });
  await expect(withdrawnCandidate).toBeVisible();
  await withdrawnCandidate.getByRole("button", { name: "보충 생성" }).click();

  await expect(page.getByRole("button", { name: "보강만 취소" })).toBeVisible();
  await page.getByRole("button", { name: "보강만 취소" }).click();
  const cancellationDialog = page.getByRole("dialog", { name: "보강만 취소할까요?" });
  await expect(cancellationDialog).toBeVisible();
  await cancellationDialog.getByRole("button", { name: "보강만 취소" }).click();

  await expect(withdrawnCandidate).toHaveCount(0);
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

test("lesson journal creation action stays visible and opens the registration modal", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const creationActions = page.getByRole("group", { name: "수업일지 생성" });
  await expect(creationActions).toBeVisible();
  await creationActions.getByRole("button", { name: "+ 수업 등록", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "수업 등록" })).toBeVisible();
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

test("monthly settlement counts closure replacement and distinguishes attendance colors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /정산/ }).click();
  await expect(page.getByRole("heading", { name: "월별 수업 정산" })).toBeVisible();
  await page.getByLabel("정산월").fill("2026-07");

  const settlementRow = page.getByRole("row").filter({ hasText: "정산 미리보기 학생" });
  await expect(settlementRow.getByRole("button", { name: /정규 3회/ })).toBeVisible();
  await expect(settlementRow).toContainText("휴강 1회 · 정규 회차 포함");
  await expect(settlementRow).toContainText("연결 보강 1회 · 추가 계산 없음");
  await expect(settlementRow).toContainText("대기 1회 · 출결 미확정");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();

  const calendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  const presentEvent = calendar.locator(".monthlySettlementCalendarEvent.regular.attendance-present");
  const absentReplacement = calendar.locator(".monthlySettlementCalendarEvent.regularReplacement.attendance-absent");
  const pendingEvent = calendar.locator(".monthlySettlementCalendarEvent.regular.attendance-pending");
  await expect(presentEvent).toContainText("출석");
  await expect(absentReplacement).toContainText("휴강 보충 · 결석");
  await expect(pendingEvent).toContainText("대기");
  await expect(calendar).toContainText("휴강 1회 · 정규 회차 포함");
  await expect(calendar).toContainText("연결 보강 1회 · 추가 계산 없음");
  const [presentColor, absentColor, pendingColor] = await Promise.all([
    presentEvent.evaluate((element) => getComputedStyle(element).backgroundColor),
    absentReplacement.evaluate((element) => getComputedStyle(element).backgroundColor),
    pendingEvent.evaluate((element) => getComputedStyle(element).backgroundColor)
  ]);
  expect(presentColor).not.toBe(absentColor);
  expect(pendingColor).not.toBe(presentColor);
  expect(pendingColor).not.toBe(absentColor);
  expect(pageErrors).toEqual([]);
});
