import { expect, test } from "./fixtures.js";
import { navigateCalendarToMonth } from "./safeSmokeSupport.js";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

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
      return (await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`)).ok();
    } catch {
      return false;
    }
  }, { timeout: 10_000 }).toBe(true);
});

test("absence makeup opens the regular lesson journal with only its source lesson added", async ({ page }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error));

  await page.route("**/api/lessons*", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      contentType: "application/json",
      json: {
        ...result,
        lessons: [...(result.lessons ?? []), {
          className: "결석 보강 미리보기",
          date: "2026-08-03",
          endTime: "15:00",
          lessonId: "safe-absence-makeup-lesson",
          lessonTopic: "결석 보강",
          lessonType: "makeup",
          sourceMakeupTaskId: "safe-absence-makeup-task",
          startTime: "13:00",
          status: "scheduled",
          studentIds: ["safe-withdrawn-student"],
          title: "결석 보강 미리보기"
        }]
      },
      status: response.status()
    });
  });
  await page.route("**/api/makeup-tasks*", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      contentType: "application/json",
      json: {
        ...result,
        makeupTasks: [...(result.makeupTasks ?? []), {
          linkedLessonId: "safe-absence-makeup-lesson",
          makeupTaskId: "safe-absence-makeup-task",
          sourceId: "safe-absence-record",
          sourceLessonId: "safe-absence-lesson",
          status: "scheduled",
          studentId: "safe-withdrawn-student",
          taskType: "absence_makeup"
        }]
      },
      status: response.status()
    });
  });

  await loginAsTeacher(page);
  await navigateCalendarToMonth(page, 2026, 8);
  const makeupDay = page.getByRole("gridcell", { name: /2026-08-03 · \d+개 수업/ });
  await makeupDay.getByRole("button", { name: /결석 보강 미리보기/ }).click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "결석 보강 미리보기" })).toBeVisible();
  const absenceSource = lessonJournal.locator('[aria-label="결석한 수업"]');
  await expect(absenceSource).toContainText("2026-07-21 · 안전 미리보기반");
  await expect(absenceSource).toContainText("19:00-22:00");
  await expect(absenceSource).toContainText("결석 사유 · 병결");
  await expect(lessonJournal.getByRole("region", { name: "수업일지 학생 기록" })).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "수정 시작" })).toBeVisible();
  await expect(page.locator(".homeworkMakeupScheduleModal")).toHaveCount(0);
  await expect(lessonJournal.getByText("보충 처리", { exact: true })).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});
