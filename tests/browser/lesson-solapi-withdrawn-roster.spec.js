import { expect, test } from "./fixtures.js";
import {
  collectPageErrors,
  getKoreaDateAfterDays,
  loginAsTeacher,
  navigateCalendarToMonth,
  resetSafeFixture,
  safeApiBaseUrl
} from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("applying the Solapi reservation plan reserves jobs for a student still visible on the lesson date", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  // Use tomorrow (not today) for the lesson so its default pre-lesson
  // reservation window can never have already passed by the time this test
  // actually runs, regardless of what real-world time CI executes it at.
  const lessonDate = getKoreaDateAfterDays(1);
  const withdrawalDate = getKoreaDateAfterDays(1);
  const [withdrawalYear, withdrawalMonth] = withdrawalDate.split("-").map(Number);

  // A student whose withdrawal takes effect on the lesson's own date is
  // still on that day's roster (isStudentVisibleInLessonJournal keeps them
  // through their withdrawal day), so the lesson should still reserve their
  // Alimtalk jobs even though getActiveLessonStudents would already treat
  // them as inactive.
  const studentResponse = await request.post(`${safeApiBaseUrl}/api/students`, {
    data: {
      student: {
        studentId: "safe-solapi-roster-withdrawn-student",
        name: "예약 검증 퇴원생",
        status: "paused",
        withdrawnAt: `${withdrawalDate}T00:00:00.000Z`,
        loginId: "safe_solapi_roster_withdrawn",
        pin: "1234",
        grade: "중3",
        schoolName: "안전중"
      }
    }
  });
  expect(studentResponse.ok(), await studentResponse.text()).toBe(true);

  const lessonResponse = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "예약 검증반",
        date: lessonDate,
        endTime: "16:30",
        lessonId: "safe-solapi-roster-withdrawn-lesson",
        startTime: "16:00",
        status: "scheduled",
        studentIds: ["safe-solapi-roster-withdrawn-student"],
        type: "regular",
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(lessonResponse.ok(), await lessonResponse.text()).toBe(true);

  await loginAsTeacher(page);
  await navigateCalendarToMonth(page, withdrawalYear, withdrawalMonth);
  await page.getByRole("button", { name: /예약 검증반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();
  await expect(lessonJournal.getByText("예약 검증 퇴원생")).toBeVisible();

  await lessonJournal.getByRole("button", { name: /Solapi 예약/ }).click();
  await expect(lessonJournal.getByText(/Solapi (예약|취소) 반영 완료/)).toBeVisible();

  const jobs = (await (await request.get(
    `${safeApiBaseUrl}/api/notification-jobs?lessonId=safe-solapi-roster-withdrawn-lesson&limit=50`
  )).json()).notificationJobs ?? [];
  const reservedForWithdrawnStudent = jobs.filter(
    (job) => job.studentId === "safe-solapi-roster-withdrawn-student"
  );
  expect(reservedForWithdrawnStudent.length).toBeGreaterThan(0);
  expect(pageErrors).toEqual([]);
});
