import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, navigateSchoolCalendarToMonth, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("school calendar shows the full exam period with a stronger math exam date inside it", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.setViewportSize({ width: 1280, height: 900 });
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  await detailDialog.getByLabel("시험기간 시작일").fill("2026-08-12");
  await detailDialog.getByLabel("시험기간 종료일").fill("2026-08-15");
  await detailDialog.getByLabel("수학시험 날짜").first().fill("2026-08-14");
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();

  await navigation.getByRole("button", { name: /학사일정/ }).click();
  await navigateSchoolCalendarToMonth(page, 2026, 8);
  await expect(page.getByRole("group", { name: "학사일정 달력 범례" })).toContainText("학교색 띠 · 전체 시험기간");
  await expect(page.getByRole("group", { name: "학사일정 달력 범례" })).toContainText("진한 탭 · 수학시험 날짜");
  for (const date of ["2026-08-12", "2026-08-13", "2026-08-14", "2026-08-15"]) {
    await expect(page.getByRole("gridcell", { name: new RegExp(date) }).locator(".examPeriodBand")).toContainText("안전고 시험기간");
  }
  const mathExamCell = page.getByRole("gridcell", { name: /2026-08-14/ });
  await expect(mathExamCell.locator(".mathExamTab")).toContainText("안전고");
  await expect(mathExamCell.locator(".examPeriodBand")).toBeVisible();
  const desktopOverflow = await page.locator(".schoolMonthGrid").evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth
  }));
  expect(desktopOverflow.scrollWidth).toBeLessThanOrEqual(desktopOverflow.clientWidth);

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileOverflow = await page.locator(".schoolMonthGridShell").evaluate((element) => ({
    clientWidth: element.clientWidth,
    pageWidth: document.documentElement.scrollWidth,
    scrollWidth: element.scrollWidth,
    viewportWidth: window.innerWidth
  }));
  expect(mobileOverflow.scrollWidth).toBeGreaterThan(mobileOverflow.clientWidth);
  expect(mobileOverflow.pageWidth).toBeLessThanOrEqual(mobileOverflow.viewportWidth);
  expect(pageErrors).toEqual([]);
});

test("manual school event keeps its draft and stable id across an unknown save result, then verifies delete", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let postCount = 0;
  let releaseDeleteRequest;
  const deleteRequestGate = new Promise((resolve) => {
    releaseDeleteRequest = resolve;
  });
  await page.route("**/api/school-events*", async (route) => {
    if (route.request().method() === "DELETE") {
      await deleteRequestGate;
      await route.continue();
      return;
    }
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    postCount += 1;
    if (postCount === 1) {
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학사일정/ }).click();
  await page.getByRole("button", { name: "+ 일정 등록" }).first().click();
  const form = page.getByRole("dialog", { name: "일정 등록" });
  await form.locator(".inputTypeField select").selectOption("schoolEvent");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학교/ }).locator("select").selectOption("안전고");
  const titleInput = form.locator('input[placeholder="예: 1학기 기말고사"]');
  await titleInput.fill("안전 저장 학사일정");
  const eventDate = await form.locator('.calendarDateGrid input[type="date"]').first().inputValue();

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toHaveAttribute("aria-busy", "true");
  await expect(form.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  await expect(page.locator(".schoolCalendarSaveNotice")).toHaveClass(/failed/);
  await expect(titleInput).toHaveValue("안전 저장 학사일정");

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toBeHidden();
  expect(postCount).toBe(2);
  await expect(page.locator(".schoolCalendarSaveNotice")).toContainText("저장 완료");

  await page.getByRole("gridcell", { name: new RegExp(eventDate) }).click();
  const dateModal = page.getByRole("dialog", { name: `${eventDate} 일정` });
  await expect(dateModal.locator('.fieldGrid input:not([type="date"])')).toHaveValue("안전 저장 학사일정");
  await dateModal.getByRole("button", { name: "삭제" }).click();
  await expect(dateModal).toHaveAttribute("aria-busy", "true");
  await expect(dateModal.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  releaseDeleteRequest();
  await expect(dateModal).toContainText("선택한 날짜에 등록된 일정이 없습니다.");

  const source = await request.get(`${safeApiBaseUrl}/api/school-events`);
  const sourceBody = await source.json();
  expect(sourceBody.schoolEvents).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("derived math exam saves its exam row and pre-exam lesson as one retry-safe action", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let postCount = 0;
  await page.route("**/api/school-calendar/derived-save", async (route) => {
    postCount += 1;
    if (postCount === 1) {
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학사일정/ }).click();
  await page.getByRole("button", { name: "+ 일정 등록" }).first().click();
  const form = page.getByRole("dialog", { name: "일정 등록" });
  await form.locator(".inputTypeField select").selectOption("mathExam");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학교/ }).locator("select").selectOption("안전고");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학년/ }).locator("select").selectOption("고1");
  await form.locator('input[placeholder="예: 수학"]').fill("공통수학1");
  const examDateInput = form.locator('.examSubjectRow input[type="date"]');
  const examDate = await examDateInput.inputValue();

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toHaveAttribute("aria-busy", "true");
  await expect(examDateInput).toBeDisabled();
  await expect(form.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  await expect(page.locator(".schoolCalendarSaveNotice")).toHaveClass(/failed/);
  await expect(form).toBeVisible();
  await expect(examDateInput).toHaveValue(examDate);

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toBeHidden();
  expect(postCount).toBe(2);
  await expect(page.locator(".schoolCalendarSaveNotice")).toContainText("시험관리 · 직전수업 저장 완료");

  const [rowResponse, lessonResponse] = await Promise.all([
    request.get(`${safeApiBaseUrl}/api/exam-prep-rows`),
    request.get(`${safeApiBaseUrl}/api/lessons`)
  ]);
  const rowBody = await rowResponse.json();
  const lessonBody = await lessonResponse.json();
  const savedRow = rowBody.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row");
  expect(savedRow.mathExamDate).toBe(examDate);
  expect(savedRow.mathExamDates).toHaveLength(1);
  const preExamLesson = lessonBody.lessons.find((lesson) => lesson.lessonType === "preExam" && lesson.sourceSchoolEventId);
  expect(preExamLesson).toBeTruthy();
  expect(preExamLesson.studentIds).toContain("safe-settlement-student");
  expect(pageErrors).toEqual([]);
});
