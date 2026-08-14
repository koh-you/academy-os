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

test("new student makeup selects a student and explicitly reserves schedule notices", async ({ page, request }) => {
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
  await modal.getByRole("button", { name: "🌱 신입생 보강" }).click();
  await expect(modal.getByLabel("수업명")).toHaveValue("신입생 보강");
  await expect(modal.getByLabel("큰 수업 틀")).toHaveValue("");
  await expect(modal.getByText("선택 0명")).toBeVisible();
  const notificationCheckbox = modal.getByLabel("수업 저장 후 알림톡을 다음 정각에 예약");
  await expect(notificationCheckbox).toHaveCSS("width", "16px");
  await expect(notificationCheckbox).toHaveCSS("height", "16px");

  await modal.getByRole("button", { name: "✅ 수업 등록", exact: true }).click();
  await expect(modal).toContainText("신입생 보강 학생을 1명 이상 선택해 주세요.");
  await modal.locator(".lessonStudentChip").first().click();
  await notificationCheckbox.check();
  await modal.getByLabel("학생", { exact: true }).check();
  await expect(modal.getByRole("button", { name: "✅ 신입생 보강 등록 후 알림톡 예약" })).toBeVisible();

  await modal.getByRole("button", { name: "✅ 신입생 보강 등록 후 알림톡 예약" }).click();
  await expect(modal).toContainText("신입생 보강 수업일지 저장 완료");
  await expect(modal).toContainText("알림톡 2건 안전 모드 기록 완료");

  const lessons = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  const savedLesson = lessons.lessons.find((lesson) => lesson.className === "신입생 보강");
  expect(savedLesson).toMatchObject({ lessonType: "makeup", lessonTopic: "신입생 보강" });
  expect(savedLesson.studentIds).toHaveLength(1);
  const jobs = await (await request.get(`${safeApiBaseUrl}/api/notification-jobs`)).json();
  expect(jobs.notificationJobs.filter((job) => job.lessonId === savedLesson.lessonId)).toHaveLength(2);
  expect(pageErrors).toEqual([]);
});
