import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("exam prep and settings open from deferred chunks without side effects", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/exams/ExamPrepCenter.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });
  await page.route("**/src/domains/settings/SettingsCenter.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("heading", { name: "시험관리" })).toBeVisible();

  await navigation.getByRole("button", { name: /설정/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("heading", { name: "설정", exact: true })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("exam prep all-class view creates enrolled-school rows without inventing exam dates", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await expect(page.getByRole("button", { name: "전체 반" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByLabel("시험정보 정렬")).toHaveValue("school");

  const middleSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전중" });
  await expect(middleSchoolRow).toBeVisible();
  await expect(middleSchoolRow).toContainText("미입력");
  const schoolNames = await page.locator(".examPrepRow:not(.examPrepHead) > :first-child").allTextContents();
  expect(schoolNames).toEqual([...schoolNames].sort((first, second) => first.localeCompare(second, "ko")));
  await page.getByLabel("시험정보 정렬").selectOption("exam_period");
  await expect(page.getByLabel("시험정보 정렬")).toHaveValue("exam_period");
  await page.setViewportSize({ height: 844, width: 390 });
  await expect(page.getByLabel("시험정보 정렬")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows.find((row) => row.schoolName === "안전중" && row.grade === "중3");
  }).toMatchObject({
    examPeriod: "",
    mathExamDate: "",
    mathExamDates: [],
    source: "학생DB 자동생성"
  });
  expect(pageErrors).toEqual([]);
});

test("exam prep rows consolidate review and management actions into the detail modal", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();

  const tableHeader = page.locator(".examPrepHead");
  await expect(tableHeader).toContainText("상세");
  await expect(tableHeader).not.toContainText("시험 후 총평");
  await expect(tableHeader).not.toContainText("관리");
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await expect(safeSchoolRow.getByRole("button", { name: /상세 관리/ })).toHaveCount(1);
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();

  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  await expect(detailDialog.getByRole("button", { name: "시험 후 총평 작성" })).toBeVisible();
  await expect(detailDialog.getByRole("button", { name: "시험정보 삭제" })).toBeVisible();
  await detailDialog.getByRole("button", { name: "시험 후 총평 작성" }).click();
  await expect(page.getByRole("dialog", { name: "안전고 시험 후 총평" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("exam prep date inputs save once on explicit action and show the full completed range after reload", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (captureRequests) requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();

  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const startDateInput = detailDialog.getByLabel("시험기간 시작일");
  const endDateInput = detailDialog.getByLabel("시험기간 종료일");
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await startDateInput.fill("2026-10-13");
  await expect(startDateInput).toHaveValue("2026-10-13");
  await endDateInput.fill("2026-10-19");
  await expect(endDateInput).toHaveValue("2026-10-19");
  await expect(detailDialog.getByText("시험정보 · 변경됨")).toBeVisible();
  await page.waitForTimeout(300);
  expect(requests).toHaveLength(0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(requests[0].examPrepRows[0].examPeriod).toBe("2026-10-13 ~ 2026-10-19");
  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.examPeriod;
  }).toBe("2026-10-13 ~ 2026-10-19");

  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();
  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  await expect(page.locator(".examPrepRow").filter({ hasText: "안전고" })).toContainText("2026-10-13 ~ 2026-10-19");
  expect(pageErrors).toEqual([]);
});

test("exam prep closes an unsaved draft without changing the server source", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (captureRequests) requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const initialResponse = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
  const initialResult = await initialResponse.json();
  const initialScope = initialResult.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.scope ?? "";

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await scopeInput.fill("저장하지 않고 닫을 초안");
  await expect(detailDialog.getByText("시험정보 · 변경됨")).toBeVisible();
  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();
  expect(requests).toHaveLength(0);

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.scope ?? "").toBe(initialScope);

  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  await expect(page.getByRole("dialog", { name: "안전고 시험정보 수정" }).getByLabel("시험 범위")).toHaveValue(initialScope);
  expect(pageErrors).toEqual([]);
});

test("exam prep rapid edits stay local until one explicit verified save", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (!captureRequests) {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await expect(scopeInput).toBeVisible();
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await scopeInput.fill("직렬화 첫 입력");
  await scopeInput.fill("직렬화 중간 입력");
  await scopeInput.fill("직렬화 최신 입력");
  await page.waitForTimeout(300);
  expect(requests).toHaveLength(0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(requests[0].examPrepRows[0].scope).toBe("직렬화 최신 입력");
  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.scope).toBe("직렬화 최신 입력");
  expect(pageErrors).toEqual([]);
});

test("exam prep CAS conflict keeps the current screen input and shows failure", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  let conflictEnabled = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (!conflictEnabled) {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    await route.fulfill({
      contentType: "application/json",
      status: 200,
      body: JSON.stringify({
        conflicts: [{
          code: "EXAM_PREP_ROW_CONFLICT",
          examPrepId: "safe-exam-prep-row",
          message: "다른 화면에서 먼저 변경되었습니다."
        }],
        examPrepRows: [],
        failures: [],
        ok: true,
        source: "supabase",
        verified: false
      })
    });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await page.waitForLoadState("networkidle");
  conflictEnabled = true;
  await scopeInput.fill("충돌해도 유지할 입력");
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 실패")).toBeVisible();
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  expect(pageErrors).toEqual([]);
});

test("exam prep exclusion survives reread and can be restored without deleting the enrolled school row", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();

  let safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  let detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeActions = detailDialog.getByRole("group", { name: "시험정보 관리 범위 변경" });
  const mainActions = detailDialog.getByRole("group", { name: "시험정보 주요 작업" });
  await expect(scopeActions.getByText("관리 범위 변경")).toBeVisible();
  await expect(scopeActions.getByRole("button", { name: "이번 고사 내신 준비 제외" })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "시험 후 총평 작성" })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "닫기", exact: true })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "변경 저장" })).toBeDisabled();
  await detailDialog.getByRole("button", { name: "이번 고사 내신 준비 제외" }).click();
  const saveStatus = detailDialog.getByRole("group", { name: "시험정보 저장 상태" });
  await expect(saveStatus.getByText("시험정보 · 변경됨")).toBeVisible();
  const [statusBox, scopeBox, mainBox] = await Promise.all([
    saveStatus.boundingBox(),
    scopeActions.boundingBox(),
    mainActions.boundingBox()
  ]);
  expect(statusBox?.y).toBeLessThan(scopeBox?.y ?? 0);
  expect(scopeBox?.x).toBeLessThan(mainBox?.x ?? 0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog).toBeHidden();
  await expect(safeSchoolRow).toHaveCount(0);
  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.isExcluded;
  }).toBe(true);

  await page.getByRole("button", { name: "내신 제외 보기 (1)" }).click();
  safeSchoolRow = page.locator(".examPrepRow.excluded").filter({ hasText: "안전고" });
  await expect(safeSchoolRow).toBeVisible();
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  await detailDialog.getByRole("button", { name: "시험관리 다시 포함" }).click();
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog).toBeHidden();
  await page.getByRole("button", { name: "시험정보 보기" }).click();
  await expect(page.locator(".examPrepRow").filter({ hasText: "안전고" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("exam prep calendar exposes every school and switches the daily roster between time and school order", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-11T09:00:00+09:00") });
  await page.route("**/api/students*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        students: [
          ...(result.students ?? []),
          { name: "김가람", schoolName: "상계중", status: "active", studentId: "safe-exam-prep-1" },
          { name: "박나래", schoolName: "정의여고", status: "active", studentId: "safe-exam-prep-2" },
          { name: "이도윤", schoolName: "자운고", status: "active", studentId: "safe-exam-prep-3" }
        ]
      }
    });
  });
  await page.route("**/api/lessons*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        lessons: [
          ...(result.lessons ?? []),
          {
            className: "시험대비",
            color: "#bae6fd",
            date: "2026-08-16",
            endTime: "18:00",
            lessonId: "safe-exam-prep-roster",
            lessonTopic: "2학기 중간고사 시험대비",
            lessonType: "examPrep",
            sourceLabel: "상계중 2학기 중간고사 · 정의여고 2학기 중간고사 · 자운고 2학기 중간고사",
            specialLectureStudentSchedules: [
              { endTime: "15:00", scheduleType: "adjusted", startTime: "13:30", studentId: "safe-exam-prep-2" }
            ],
            startTime: "15:00",
            status: "scheduled",
            studentIds: ["safe-exam-prep-1", "safe-exam-prep-2", "safe-exam-prep-3"]
          }
        ]
      }
    });
  });

  await loginAsTeacher(page);
  const calendarDay = page.getByRole("gridcell", { name: /^2026-08-16 · \d+개 수업$/ });
  const examPrepPill = calendarDay.locator(".examPrepLessonPill");
  await expect(examPrepPill).toContainText("시험대비 · 3개교 · 3명");
  await expect(examPrepPill.locator(".examPrepCalendarSchool")).toHaveText([
    "상계중 2학기 중간고사",
    "정의여고 2학기 중간고사",
    "자운고 2학기 중간고사"
  ]);
  await expect(examPrepPill.evaluate((element) => element.scrollWidth <= element.clientWidth)).resolves.toBe(true);
  await examPrepPill.click();

  const dialog = page.getByRole("dialog", { name: "시험대비" });
  await expect(dialog.getByRole("button", { name: "시간순" })).toHaveAttribute("aria-pressed", "true");
  await expect(dialog.locator(".examPrepRosterGroup > header strong")).toHaveText(["13:30-15:00", "15:00-18:00"]);
  await expect(dialog.locator(".examPrepRosterRow > div > strong")).toHaveText(["박나래", "김가람", "이도윤"]);
  await dialog.getByRole("button", { name: "학교별" }).click();
  await expect(dialog.locator(".examPrepRosterGroup > header strong")).toHaveText(["상계중", "자운고", "정의여고"]);

  await page.setViewportSize({ height: 844, width: 390 });
  const dialogBox = await dialog.boundingBox();
  expect(dialogBox.x).toBeGreaterThanOrEqual(0);
  expect(dialogBox.x + dialogBox.width).toBeLessThanOrEqual(390);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  expect(pageErrors).toEqual([]);
});
