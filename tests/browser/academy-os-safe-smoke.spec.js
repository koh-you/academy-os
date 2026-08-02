import { expect, test } from "@playwright/test";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

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
      const response = await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
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

test("lesson hub top reminders can collapse and expand without runtime errors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const collapseButton = page.getByRole("button", { name: "알림 접기" });
  await expect(collapseButton).toBeVisible();
  await collapseButton.click();
  await expect(page.getByRole("button", { name: "알림 펼치기" })).toBeVisible();
  await expect(page.locator("#academy-reminder-panel-body")).toBeHidden();
  await page.getByRole("button", { name: "알림 펼치기" }).click();
  await expect(page.locator("#academy-reminder-panel-body")).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("lesson journal carries the latest non-empty record across a month boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
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
  await expect(absentReplacement).toHaveAttribute("title", /13:00-16:00/);
  await expect(pendingEvent).toContainText("대기");
  await expect(calendar).toContainText("휴강 1회 · 정규 회차 포함");
  await expect(calendar).toContainText("연결 보강 1회 · 추가 계산 없음");
  await expect(calendar).toContainText("시스템 계산 횟수");
  const finalCountInput = calendar.getByLabel("정산 미리보기 학생 최종 정규 횟수");
  await finalCountInput.fill("4");
  await expect(calendar).toContainText("교사 확정 최종 정규 횟수: 4회");
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

test("settlement exposes special attendance, combined student attendance, and concise PDF report", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.addInitScript(() => { window.print = () => {}; });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /정산/ }).click();
  await expect(page.getByRole("columnheader", { name: "조정" })).toHaveCount(0);
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "횟수·금액 PDF" }).click();
  const reportPage = await popupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("heading", { name: "2026년 08월 정산 보고서" })).toBeVisible();
  await expect(reportPage.getByRole("table")).toContainText("정산 미리보기 학생");
  await expect(reportPage.getByRole("table")).toContainText("1회");
  await expect(reportPage.getByRole("columnheader", { name: "최종 정규 횟수" })).toBeVisible();
  await expect(reportPage.getByRole("columnheader", { name: "금액" })).toBeVisible();
  await expect(reportPage.getByRole("table")).not.toContainText("출석");
  await reportPage.close();

  await page.getByRole("tab", { name: "특강 정산" }).click();
  const specialRow = page.getByRole("row").filter({ hasText: "정산 미리보기 학생" });
  await expect(specialRow).toContainText("일지 1/2회");
  await expect(specialRow).toContainText("지각 1");
  await expect(specialRow).toContainText("수업일지 없음 1회");

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  const attendanceSection = profile.locator(".studentAttendanceSection");
  await expect(attendanceSection).toContainText("정규 출결");
  await expect(attendanceSection).toContainText("특강 출결");
  await expect(attendanceSection).toContainText("지각 1");
  expect(pageErrors).toEqual([]);
});
