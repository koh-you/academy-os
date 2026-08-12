import { expect, test } from "@playwright/test";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);
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
  const rowResponse = await request.post(`${safeApiBaseUrl}/api/exam-prep-rows/bulk`, {
    data: {
      examPrepRows: [{
        examCycle: "2026-2-mid",
        examPeriod: "2026-08-12 ~ 2026-08-14",
        examPrepId: "safe-exam-prep-row",
        grade: "고1",
        schoolName: "안전고",
        subject: "공통수학1",
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(rowResponse.ok(), await rowResponse.text()).toBe(true);
  const lessonResponse = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "시험대비",
        date: "2026-08-09",
        endTime: "18:00",
        generatedKey: "generated:exam_prep:2026-08-09",
        lessonId: "lesson_exam_prep_2026-08-09",
        lessonTopic: "시험대비",
        lessonType: "examPrep",
        sourceLabel: "상계고 2학기 중간고사",
        sourceSchoolEventId: "generated:exam_prep:2026-08-09",
        specialLectureStudentSchedules: [{ studentId: "ghost", startTime: "13:00", endTime: "15:00", scheduleType: "adjusted" }],
        startTime: "13:00",
        status: "scheduled",
        studentIds: ["ghost"],
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(lessonResponse.ok(), await lessonResponse.text()).toBe(true);
});

test("current exam management roster removes stale school and saves forward schedule with responsive layout", async ({ page, request }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await loginAsTeacher(page);
  const day = page.getByRole("gridcell", { name: /2026-08-09/ });
  const pill = day.locator(".lessonPill");
  await expect(pill).toContainText("안전고");
  await expect(pill).not.toContainText("상계고");
  await pill.click();

  const detail = page.getByRole("dialog", { name: "시험대비" });
  await expect(detail).toContainText("1명");
  await expect(detail).toContainText("안전고 2학기 중간고사");
  await expect(detail).not.toContainText("상계고");
  const contentInput = detail.getByLabel("정산 미리보기 학생 오늘 진행한 내용");
  await contentInput.fill("안전고 고1 함수 단원 오답 정리");
  const contentSaveResponse = page.waitForResponse((response) => response.url().includes("/api/lesson-records"));
  await detail.getByRole("button", { name: /학생별 진행 내용 저장/ }).click();
  expect((await contentSaveResponse).status()).toBe(200);
  await expect(detail.getByRole("status")).toContainText("학생별 1명 재조회 확인");
  await detail.getByRole("button", { name: "일정 수정" }).click();

  const editor = page.getByRole("dialog", { name: "시험대비 일정 수정" });
  await expect(editor.getByRole("tab", { name: "반별" })).toBeVisible();
  await expect(editor.getByRole("tab", { name: "학교별" })).toHaveAttribute("aria-selected", "true");
  await expect(editor.getByRole("tab", { name: "학생별" })).toBeVisible();
  await editor.getByText("안전고", { exact: true }).click();
  const checkbox = editor.locator('input[type="checkbox"]').first();
  const checkboxBox = await checkbox.boundingBox();
  expect(checkboxBox?.width).toBe(20);
  expect(checkboxBox?.height).toBe(20);
  await editor.getByLabel("시작 시간").fill("14:00");
  await editor.getByLabel("종료 시간").fill("16:00");
  await expect(editor).toContainText("1명 · 1개 일정에 적용");
  const saveResponse = page.waitForResponse((response) => response.url().includes("/api/exam-prep-schedule/save"));
  await editor.getByRole("button", { name: "이후 일정에 저장" }).click();
  expect((await saveResponse).status()).toBe(200);
  await expect(editor).toBeHidden();

  const reread = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  const saved = reread.lessons.find((lesson) => lesson.lessonId === "lesson_exam_prep_2026-08-09");
  expect(saved.studentIds).toEqual(["safe-settlement-student"]);
  expect(saved.lessonTopic).toBe("시험대비");
  expect(saved.specialLectureStudentSchedules).toContainEqual(expect.objectContaining({ studentId: "safe-settlement-student", startTime: "14:00", endTime: "16:00" }));
  const rereadRecords = await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json();
  expect(rereadRecords.records).toContainEqual(expect.objectContaining({
    lessonId: "lesson_exam_prep_2026-08-09",
    lessonProgress: "안전고 고1 함수 단원 오답 정리",
    studentId: "safe-settlement-student"
  }));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.reload();
  const persistedDay = page.getByRole("gridcell", { name: /2026-08-09/ });
  await persistedDay.locator(".lessonPill").click();
  await expect(page.getByRole("dialog", { name: "시험대비" }).getByLabel("정산 미리보기 학생 오늘 진행한 내용")).toHaveValue("안전고 고1 함수 단원 오답 정리");
});

test("exam prep schedule conflict returns 409 without stopping the safe API", async ({ request }) => {
  const source = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  const current = source.lessons.find((lesson) => lesson.lessonId === "lesson_exam_prep_2026-08-09");
  const response = await request.post(`${safeApiBaseUrl}/api/exam-prep-schedule/save`, {
    data: {
      auditId: "safe-conflict-audit",
      changes: [{
        before: { ...current, updatedAt: "2026-08-02T00:00:00.000Z" },
        after: { ...current, startTime: "14:00" }
      }]
    }
  });

  expect(response.status()).toBe(409);
  await expect(response.json()).resolves.toMatchObject({
    code: "EXAM_PREP_SCHEDULE_SAVE_FAILED",
    ok: false,
    safeFixture: true
  });
  await expect((await request.get(`${safeApiBaseUrl}/health`)).json()).resolves.toMatchObject({ ok: true });
});
