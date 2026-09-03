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
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();
}

test.beforeEach(async ({ request }) => {
  await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
  // "미리보기 퇴원생" (safe-withdrawn-student) withdrew on 2026-07-31, so this
  // lesson on 2026-08-05 is after their withdrawal boundary and should show
  // only the still-active roommate in both the calendar pill and the journal.
  const lessonResponse = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "인원수 확인반",
        date: "2026-08-05",
        endTime: "12:00",
        lessonId: "safe-roster-count-lesson",
        startTime: "10:00",
        status: "scheduled",
        studentIds: ["safe-withdrawn-student", "safe-active-student"],
        type: "regular",
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(lessonResponse.ok(), await lessonResponse.text()).toBe(true);
});

test("calendar pill roster count matches the students actually shown in that lesson's journal", async ({ page }) => {
  await loginAsTeacher(page);
  await navigateCalendarToMonth(page, 2026, 8);

  const lessonDateCell = page.getByRole("gridcell", { name: /2026-08-05 · \d+개 수업/ });
  const lessonPill = lessonDateCell.getByRole("button", { name: /인원수 확인반/ });
  await expect(lessonPill).toHaveText(/\(1명\)/);

  await lessonPill.click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();
  await expect(lessonJournal.getByText("월경계 학생")).toBeVisible();
  await expect(lessonJournal.getByText("미리보기 퇴원생")).toHaveCount(0);
  await expect(lessonJournal.getByRole("button", { name: "학부모 알림톡" })).toHaveCount(1);
});
