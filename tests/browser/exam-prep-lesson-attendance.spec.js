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

test("exam prep lesson detail shows kiosk attendance per student and a roster summary", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const lessonDate = getKoreaDateAfterDays(0);
  const [lessonYear, lessonMonth] = lessonDate.split("-").map(Number);

  // 시험대비 수업은 키오스크 출결 대상이므로(api/server.js 는 closure/canceled 만 제외),
  // 저장된 출결 기록이 시험대비 상세 화면에도 그대로 보여야 한다.
  const lessonResponse = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "시험대비",
        date: lessonDate,
        endTime: "18:00",
        lessonId: "safe-exam-prep-attendance-lesson",
        lessonType: "examPrep",
        sourceLabel: "안전고 2학기 중간고사",
        specialLectureStudentSchedules: [
          { studentId: "safe-active-student", startTime: "13:00", endTime: "15:00" },
          { studentId: "safe-settlement-student", startTime: "15:00", endTime: "17:00" }
        ],
        startTime: "13:00",
        status: "scheduled",
        studentIds: ["safe-active-student", "safe-settlement-student"],
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(lessonResponse.ok(), await lessonResponse.text()).toBe(true);

  const recordResponse = await request.post(`${safeApiBaseUrl}/api/lesson-records`, {
    data: {
      record: {
        attendanceStatus: "present",
        checkInTime: "13:02",
        checkOutTime: "15:01",
        lessonId: "safe-exam-prep-attendance-lesson",
        lessonStudentRecordId: "safe-exam-prep-attendance-record",
        studentId: "safe-active-student"
      }
    }
  });
  expect(recordResponse.ok(), await recordResponse.text()).toBe(true);

  await loginAsTeacher(page);
  await navigateCalendarToMonth(page, lessonYear, lessonMonth);
  await page.getByRole("button", { name: /시험대비/ }).first().click();

  const examPrepBody = page.locator(".examPrepLessonBody");
  await expect(examPrepBody).toBeVisible();
  await expect(examPrepBody).toContainText("1/2명 등원");
  await expect(examPrepBody).toContainText("하원 1명 · 미등원 1명");

  const checkedInBadge = examPrepBody.getByLabel("월경계 학생 출결");
  await expect(checkedInBadge).toContainText("하원");
  await expect(checkedInBadge).toContainText("등원 13:02 · 하원 15:01");
  await expect(examPrepBody.getByLabel("정산 미리보기 학생 출결")).toContainText("대기");
  expect(pageErrors).toEqual([]);
});

test("exam prep lesson can opt into the daily Alimtalk and carries that day's test result", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const lessonDate = getKoreaDateAfterDays(0);
  const [lessonYear, lessonMonth] = lessonDate.split("-").map(Number);

  const lessonResponse = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "시험대비",
        date: lessonDate,
        endTime: "18:00",
        lessonId: "safe-exam-prep-daily-lesson",
        lessonType: "examPrep",
        sourceLabel: "안전고 2학기 중간고사",
        startTime: "13:00",
        status: "scheduled",
        studentIds: ["safe-active-student"],
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(lessonResponse.ok(), await lessonResponse.text()).toBe(true);

  // 시험대비 수업은 반이 없으므로, 반이 지정된 응시 기록도 명단 기준으로 붙어야 한다.
  const testResponse = await request.post(`${safeApiBaseUrl}/api/test-sessions`, {
    data: {
      testAttempts: [{
        correctCount: 18,
        passStatus: "passed",
        status: "taken",
        studentId: "safe-active-student",
        testAttemptId: "safe-exam-prep-daily-attempt",
        testSessionId: "safe-exam-prep-daily-session"
      }],
      testSession: {
        classTemplateId: "safe-cross-month-class",
        testDate: lessonDate,
        testKind: "unit",
        testSessionId: "safe-exam-prep-daily-session",
        testTitle: "안전고 2학기 중간 기출",
        totalQuestions: 20
      }
    }
  });
  expect(testResponse.ok(), await testResponse.text()).toBe(true);

  await loginAsTeacher(page);
  await navigateCalendarToMonth(page, lessonYear, lessonMonth);
  await page.getByRole("button", { name: /시험대비/ }).first().click();

  const examPrepBody = page.locator(".examPrepLessonBody");
  await expect(examPrepBody).toBeVisible();
  await expect(page.locator(".journalRow")).toHaveCount(0);

  await page.getByText("데일리 알림톡 사용").click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal.getByRole("button", { name: "학부모 알림톡" }).first()).toBeVisible();
  await lessonJournal.getByRole("button", { name: "학부모 알림톡" }).first().click();

  const alimtalkModal = page.getByRole("dialog", { name: /학부모 알림톡/ });
  await expect(alimtalkModal.locator(".commentPreviewPanel")).toContainText("안전고 2학기 중간 기출");
  await expect(alimtalkModal.locator(".commentPreviewPanel")).toContainText("20문항 중 18문항 정답 · 통과");
  await alimtalkModal.getByRole("button", { name: "닫기" }).click();

  // 되돌리면 다시 시험대비 명단 화면으로 돌아온다.
  await lessonJournal.getByRole("button", { name: "시험대비 명단 화면" }).click();
  await expect(page.locator(".examPrepLessonBody")).toBeVisible();
  expect(pageErrors).toEqual([]);
});
