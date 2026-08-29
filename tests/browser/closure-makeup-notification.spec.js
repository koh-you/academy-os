import { expect, test } from "./fixtures.js";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

test.beforeEach(async ({ request }) => {
  await expect.poll(async () => {
    try {
      return (await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`)).ok();
    } catch {
      return false;
    }
  }, { timeout: 10_000 }).toBe(true);
});

test("closure makeup edit opens notification management modal and reserves three notification types", async ({ page, request }) => {
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error));
  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();

  await page.getByRole("button", { name: "+ 수업 등록", exact: true }).click();
  const modal = page.getByRole("dialog", { name: "수업 등록" });
  await modal.getByRole("button", { name: "🔁 휴강 보충" }).click();
  await expect(modal.getByText("별도 휴강 보충 등록")).toBeVisible();
  await modal.getByLabel("날짜").fill("2026-08-30");
  await modal.getByLabel("시작").fill("14:00");
  await modal.getByLabel("종료").fill("17:00");
  const studentChips = modal.locator(".lessonStudentChip");
  await studentChips.nth(0).click();
  await studentChips.nth(1).click();
  await expect(modal.getByText("선택 2명")).toBeVisible();
  await expect(modal.getByRole("button", { name: "휴강 보충 알림 관리" })).toBeVisible();
  await expect(modal.getByLabel("휴강 보충 알림 예약")).toHaveCount(0);
  await modal.getByRole("button", { name: "✅ 수업 등록" }).click();
  await expect(modal).toContainText("휴강 보충 수업일지 저장 완료");
  await modal.getByRole("button", { name: "달력에서 확인" }).click();

  const calendarDay = page.getByRole("gridcell", { name: /^2026-08-30 · \d+개 수업$/ });
  await calendarDay.getByRole("button", { name: /휴강 보충/ }).click();
  const journal = page.getByRole("dialog", { name: "수업일지" });
  await journal.getByRole("button", { name: "수업 수정" }).click();
  const editModal = page.getByRole("dialog", { name: "수업 수정" });
  await editModal.getByRole("button", { name: "휴강 보충 알림 관리" }).click();
  const notificationModal = page.getByRole("dialog", { name: "휴강 보충 알림 관리" });
  await expect(notificationModal).toBeVisible();
  await expect(notificationModal).toContainText("선택 학생 2명");
  await expect(notificationModal.getByText("알림톡 문구 편집", { exact: true })).toBeVisible();
  await expect(notificationModal.locator("textarea")).toHaveCount(3);
  await notificationModal.getByLabel("학생 알림톡 예약").check();
  await expect(notificationModal.getByLabel("당일 학생 11시 알림톡 예약")).toBeChecked();
  await notificationModal.getByLabel("학생 알림톡 문구").fill("{{학생명}} 학생 맞춤 휴강보충 안내");
  await notificationModal.getByRole("button", { name: "일정 저장 후 알림 예약" }).click();
  await expect(notificationModal).toBeHidden();
  await expect(editModal).toContainText("휴강 보충 수정 저장 완료");
  await expect(editModal).toContainText("휴강 보충 알림 5건 안전 모드 기록 완료");

  const lessons = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  const savedLesson = lessons.lessons.find((lesson) => lesson.lessonTopic === "휴강 보충" && lesson.date === "2026-08-30");
  expect(savedLesson).toMatchObject({ lessonType: "makeup", sourceLabel: "별도 휴강 보충" });
  expect(savedLesson.studentIds).toHaveLength(2);
  const jobs = await (await request.get(`${safeApiBaseUrl}/api/notification-jobs`)).json();
  const lessonJobs = jobs.notificationJobs.filter((job) => job.lessonId === savedLesson.lessonId);
  expect(lessonJobs).toHaveLength(5);
  expect(lessonJobs.filter((job) => job.notificationType === "notice_parent")).toHaveLength(2);
  expect(lessonJobs.filter((job) => job.notificationType === "schedule_reminder")).toHaveLength(2);
  expect(lessonJobs.filter((job) => job.notificationType === "student_reminder")).toHaveLength(1);
  const studentNoticeBodies = lessonJobs
    .filter((job) => job.notificationType === "schedule_reminder")
    .map((job) => job.previewBody);
  expect(studentNoticeBodies).toHaveLength(2);
  expect(studentNoticeBodies.every((body) => body.endsWith("학생 맞춤 휴강보충 안내") && !body.includes("{{학생명}}"))).toBe(true);
  expect(new Set(lessonJobs.map((job) => job.notificationJobId)).size).toBe(5);
  expect(pageErrors).toEqual([]);
});
