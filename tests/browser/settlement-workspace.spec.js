import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
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
  expect(await calendar.evaluate((element) => element.getBoundingClientRect().width)).toBeGreaterThan(1100);
  expect(await calendar.locator(".monthlySettlementCalendarShell").evaluate(
    (element) => element.scrollWidth <= element.clientWidth
  )).toBe(true);
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
  const finalCountInput = calendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" });
  await finalCountInput.fill("4");
  await expect(calendar).toContainText("교사 확정 최종 정규 횟수: 4회");
  const settlementSaveBar = calendar.getByRole("complementary", { name: /최종 정규 횟수 하단 고정 저장 바/ });
  await settlementSaveBar.getByRole("button", { name: "최종 정규 횟수 저장 및 확인" }).click();
  await expect(settlementSaveBar.getByRole("button", { name: "저장 및 확인 중" })).toBeDisabled();
  await finalCountInput.fill("5");
  await expect(finalCountInput).toHaveValue("5");
  await calendar.getByRole("button", { name: "창 닫기" }).click();
  const settlementMonthControl = page.getByRole("group", { name: "월별 정산 대상 월" });
  await settlementMonthControl.getByLabel("정산월").fill("2026-08");
  await expect(settlementMonthControl.getByRole("status")).toContainText("변경됨");
  await page.getByLabel("정산월").fill("2026-07");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();
  const recoveredCalendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  const recoveredFinalCountInput = recoveredCalendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" });
  await expect(recoveredFinalCountInput).toHaveValue("5");
  const recoveredSaveBar = recoveredCalendar.getByRole("complementary", { name: /최종 정규 횟수 하단 고정 저장 바/ });
  await recoveredSaveBar.getByRole("button", { name: "최종 정규 횟수 저장 및 확인" }).click();
  await expect(recoveredSaveBar).toContainText("저장 완료");
  await expect(recoveredFinalCountInput).toHaveValue("5");
  await recoveredCalendar.getByRole("button", { name: "창 닫기" }).click();
  await expect(settlementRow).toContainText("최종 정규 5회 · 교사 확정");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();
  const reopenedCalendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  await expect(reopenedCalendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" })).toHaveValue("5");
  const [presentColor, absentColor, pendingColor] = await Promise.all([
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regular.attendance-present").evaluate((element) => getComputedStyle(element).backgroundColor),
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regularReplacement.attendance-absent").evaluate((element) => getComputedStyle(element).backgroundColor),
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regular.attendance-pending").evaluate((element) => getComputedStyle(element).backgroundColor)
  ]);
  expect(presentColor).not.toBe(absentColor);
  expect(pendingColor).not.toBe(presentColor);
  expect(pendingColor).not.toBe(absentColor);
  await reopenedCalendar.getByRole("button", { name: "창 닫기" }).click();
  const reportPopupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "횟수·금액 PDF" }).click();
  const reportPage = await reportPopupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("row").filter({ hasText: "정산 미리보기 학생" })).toContainText("5회");
  await expect(reportPage.getByRole("button", { name: "인쇄하기" })).toBeVisible();
  await reportPage.close();
  expect(pageErrors).toEqual([]);
});

test("settlement exposes special attendance, combined student attendance, and concise PDF report", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-02T09:00:00+09:00") });
  await page.addInitScript(() => { window.print = () => {}; });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /정산/ }).click();
  const monthControl = page.getByRole("group", { name: "월별 정산 대상 월" });
  await expect(monthControl.getByLabel("정산월")).toHaveValue("2026-07");
  await expect(monthControl.getByRole("status")).toBeVisible();
  await expect(monthControl.getByRole("button", { name: "횟수·금액 PDF" })).toBeVisible();
  await monthControl.getByLabel("정산월").fill("2026-08");
  await page.setViewportSize({ height: 844, width: 390 });
  const mobileMonthControlLayout = await monthControl.evaluate((element) => {
    const control = element.getBoundingClientRect();
    const field = element.querySelector(".filterBarField")?.getBoundingClientRect();
    const aside = element.querySelector(".sharedFilterBarAside")?.getBoundingClientRect();
    return {
      asideRight: aside?.right ?? 0,
      asideTop: aside?.top ?? 0,
      controlRight: control.right,
      fieldBottom: field?.bottom ?? 0
    };
  });
  expect(mobileMonthControlLayout.fieldBottom).toBeLessThanOrEqual(mobileMonthControlLayout.asideTop + 1);
  expect(mobileMonthControlLayout.asideRight).toBeLessThanOrEqual(mobileMonthControlLayout.controlRight + 1);
  await page.setViewportSize({ height: 720, width: 1280 });
  await expect(page.getByRole("columnheader", { name: "조정" })).toHaveCount(0);
  await expect(page.getByRole("columnheader", { name: "월별 스케줄" })).toHaveCount(0);
  await expect(page.getByRole("columnheader", { name: "정산 처리" })).toHaveCount(0);
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "횟수·금액 PDF" }).click();
  const reportPage = await popupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("heading", { name: "2026년 08월 정산 보고서" })).toBeVisible();
  await expect(reportPage.getByRole("table")).toContainText("정산 미리보기 학생");
  await expect(reportPage.getByRole("table")).toContainText("1회");
  await expect(reportPage.getByRole("columnheader", { name: "최종 정규 횟수" })).toBeVisible();
  await expect(reportPage.getByRole("columnheader", { name: "금액" })).toBeVisible();
  await expect(reportPage.getByText("총 횟수", { exact: true })).toHaveCount(0);
  await expect(reportPage.locator("tfoot")).not.toContainText("회");
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
  await profile.getByRole("button", { name: /^월별 출결/ }).click();
  const attendanceModal = page.getByRole("dialog", { name: /월별 출결/ });
  await expect(attendanceModal).toContainText("정규 출결");
  await expect(attendanceModal).toContainText("특강 출결");
  await expect(attendanceModal).toContainText("지각 1");
  expect(pageErrors).toEqual([]);
});
