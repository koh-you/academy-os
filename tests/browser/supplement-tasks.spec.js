import { expect, test } from "./fixtures.js";
import { collectPageErrors, getKoreaDateAfterDays, loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("broken supplement lesson links are visible and block schedule or notification writes", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/api/makeup-tasks*", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    await route.fulfill({
      contentType: "application/json",
      json: {
        makeupTasks: [{
          linkedLessonDate: "2026-08-05",
          linkedLessonId: "safe-missing-makeup-lesson",
          linkedLessonTime: "15:30",
          makeupTaskId: "safe-broken-makeup-task",
          notificationDraft: "안전 당일 안내",
          parentScheduleNotificationDraft: "안전 학부모 일정 안내",
          reason: "결석 보강",
          scheduledDate: "2026-08-05",
          scheduledTime: "15:30",
          sourceId: "safe-absence-record",
          sourceLabel: "안전 미리보기 수업",
          status: "scheduled",
          studentId: "safe-withdrawn-student",
          studentScheduleNotificationDraft: "안전 학생 일정 안내",
          supplementHomeworkNote: "안전 보충 메모",
          supplementMethod: "onsite_makeup",
          supplementTeacherEditedFields: [
            "studentScheduleNotificationDraft",
            "parentScheduleNotificationDraft",
            "notificationDraft"
          ],
          taskType: "absence_makeup",
          updatedAt: "2026-08-03T00:00:00.000Z"
        }],
        ok: true
      },
      status: 200
    });
  });

  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();
  await page.getByRole("button", { name: /결석보강/ }).first().click();
  const candidate = page.getByRole("article").filter({ hasText: "미리보기 퇴원생" });
  await expect(candidate).toContainText("연결 수업일지 없음");
  await candidate.getByRole("button", { name: "상세 검토" }).click();

  await expect(page.getByText("연결 수업일지 없음", { exact: true }).last()).toBeVisible();
  const blockedScheduleButton = page.getByRole("button", { name: "연결 상태 확인 필요" });
  await expect(blockedScheduleButton).toBeDisabled();
  await expect(page.getByText(/저장된 연결 ID.*해당하는 수업일지가 없습니다/).last()).toBeVisible();

  await page.getByRole("button", { name: "Solapi 예약·취소 3종 확인" }).click();
  const notificationDialog = page.getByRole("dialog", { name: "Solapi 예약·취소 3종 확인" });
  await expect(notificationDialog).toContainText("연결된 수업일지 원천이 확인되지 않아 새 알림톡 예약을 만들 수 없습니다.");
  await expect(notificationDialog.getByRole("button", { name: "개별 예약" })).toHaveCount(0);
  await page.setViewportSize({ height: 844, width: 390 });
  const notificationDialogBox = await notificationDialog.boundingBox();
  expect(notificationDialogBox.x).toBeGreaterThanOrEqual(0);
  expect(notificationDialogBox.y).toBeGreaterThanOrEqual(0);
  expect(notificationDialogBox.x + notificationDialogBox.width).toBeLessThanOrEqual(390);
  expect(notificationDialogBox.y + notificationDialogBox.height).toBeLessThanOrEqual(844);
  await notificationDialog.getByRole("button", { exact: true, name: "닫기" }).click();
  await expect(notificationDialog).toBeHidden();
  await page.keyboard.press("Escape");
  await expect(page.locator(".supplementStudentModal")).toBeHidden();
  await candidate.getByRole("button", { name: "보충 완료 처리" }).click();
  const passDialog = page.getByRole("dialog", { name: "보충 완료 처리 확인" });
  await expect(passDialog.locator(".modalFooter")).toBeVisible();
  await passDialog.getByRole("button", { name: "취소" }).click();
  await expect(passDialog).toBeHidden();
  expect(pageErrors).toEqual([]);
});

test("supplement schedule retries one verified source plan after an unknown response", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const scheduleRequests = [];
  let abortAfterCommit = true;
  await page.route("**/api/supplement-schedules/save", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    scheduleRequests.push(route.request().postDataJSON());
    if (abortAfterCommit) {
      abortAfterCommit = false;
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();
  await page.getByRole("button", { name: /결석보강/ }).first().click();
  const withdrawnCandidate = page.getByRole("article").filter({ hasText: "미리보기 퇴원생" });
  await withdrawnCandidate.getByRole("button", { name: "보충 생성" }).click();

  const supplementModal = page.locator(".supplementStudentModal");
  await supplementModal.locator('input[type="date"]').fill("2026-08-05");
  await supplementModal.getByLabel("보충 시간 시").selectOption("15");
  await supplementModal.getByLabel("보충 시간 분").selectOption("30");
  const saveSchedule = supplementModal.getByRole("button", { name: "수업일지 일정 만들기" });
  await saveSchedule.click();
  await expect(supplementModal.getByRole("status")).toContainText("수업일지 일정 저장 실패");

  const latestReminderDraft = "응답 대기 중 수정한 최신 학생 11시 알림 초안";
  await supplementModal.locator('input[type="date"]').fill("2026-08-06");
  await supplementModal.getByLabel("보충 시간 시").selectOption("16");
  await supplementModal.getByLabel("보충 시간 분").selectOption("00");
  await supplementModal.locator(".supplementNotificationDraftEditors textarea").last().fill(latestReminderDraft);
  await saveSchedule.click();
  const scheduleFeedback = supplementModal.getByRole("status");
  await expect(scheduleFeedback).toContainText("일정 저장 완료 · 알림 예약 실패");
  await expect(scheduleFeedback).toContainText("실패한 알림만 다시 시도");
  await expect.poll(() => scheduleFeedback.evaluate((element) => getComputedStyle(element).position)).toBe("fixed");
  const feedbackBox = await scheduleFeedback.boundingBox();
  const viewport = page.viewportSize();
  expect(feedbackBox.x).toBeGreaterThanOrEqual(12);
  expect(feedbackBox.x + feedbackBox.width).toBeLessThanOrEqual(viewport.width - 12);
  expect(viewport.height - feedbackBox.y - feedbackBox.height).toBeGreaterThanOrEqual(8);
  expect(viewport.height - feedbackBox.y - feedbackBox.height).toBeLessThanOrEqual(24);
  await page.setViewportSize({ height: 844, width: 390 });
  const mobileFeedbackBox = await scheduleFeedback.boundingBox();
  expect(mobileFeedbackBox.x).toBeGreaterThanOrEqual(12);
  expect(mobileFeedbackBox.x + mobileFeedbackBox.width).toBeLessThanOrEqual(378);
  expect(844 - mobileFeedbackBox.y - mobileFeedbackBox.height).toBeGreaterThanOrEqual(8);
  expect(844 - mobileFeedbackBox.y - mobileFeedbackBox.height).toBeLessThanOrEqual(24);
  await page.setViewportSize(viewport);
  expect(scheduleRequests).toHaveLength(3);
  expect(scheduleRequests[1].auditId).toBe(scheduleRequests[0].auditId);
  expect(scheduleRequests[2].auditId).not.toBe(scheduleRequests[1].auditId);
  expect(scheduleRequests[1].lessonChange).toEqual(scheduleRequests[0].lessonChange);
  expect(scheduleRequests[1].taskChange).toEqual(scheduleRequests[0].taskChange);
  expect(scheduleRequests[2].taskChange.after.notificationDraft).toBe(latestReminderDraft);
  expect(scheduleRequests[2].taskChange.after.scheduledDate).toBe("2026-08-06");
  expect(scheduleRequests[2].taskChange.after.scheduledTime).toBe("16:00");
  expect(scheduleRequests[2].taskChange.before.updatedAt).toBeTruthy();

  const lessons = (await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json()).lessons;
  const makeupTasks = (await (await request.get(`${safeApiBaseUrl}/api/makeup-tasks`)).json()).makeupTasks;
  const savedTasks = makeupTasks.filter((task) => task.sourceId === "safe-absence-record");
  expect(savedTasks).toHaveLength(1);
  expect(savedTasks[0].notificationDraft).toBe(latestReminderDraft);
  const linkedLessons = lessons.filter(
    (lesson) => lesson.sourceMakeupTaskId === savedTasks[0].makeupTaskId
  );
  expect(linkedLessons).toHaveLength(1);
  expect(savedTasks[0].linkedLessonId).toBe(linkedLessons[0].lessonId);
  expect(linkedLessons[0].date).toBe("2026-08-06");
  expect(linkedLessons[0].startTime).toBe("16:00");
  await supplementModal.getByRole("button", { name: "수업일지 일정 변경" }).click();
  const scheduleChangeDialog = page.getByRole("dialog", { name: "보충 일정 변경 저장" });
  await expect(scheduleChangeDialog.locator(".modalFooter")).toBeVisible();
  await expect(scheduleChangeDialog.getByRole("button", { name: "일정만 저장" })).toBeVisible();
  await expect(scheduleChangeDialog.getByRole("button", { name: "다음 정각 예약 및 11시 갱신" })).toBeVisible();
  await scheduleChangeDialog.getByRole("button", { name: "취소" }).click();
  await expect(scheduleChangeDialog).toBeHidden();
  expect(scheduleRequests).toHaveLength(3);
  expect(pageErrors).toEqual([]);
});

test("manual supplement validation preserves the draft without source or notification writes", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();

  const writeRequests = [];
  page.on("request", (request) => {
    if (
      request.method() !== "GET" &&
      /\/api\/(makeup-tasks|lessons|notification-jobs)(?:[/?]|$)/.test(request.url())
    ) {
      writeRequests.push(`${request.method()} ${new URL(request.url()).pathname}`);
    }
  });

  await page.getByRole("button", { name: "수동 보충 등록" }).click();
  const createDialog = page.getByRole("dialog", { name: "수동 보충 작성" });
  await createDialog.getByLabel("수동 보충 학생").selectOption("safe-consecutive-attendance-student");
  await createDialog.getByLabel("수동 보충 제목").fill("입력 보존 확인 보충");
  await createDialog.getByLabel("수동 보충 사유와 내용").fill("시간을 빠뜨린 검증 실패에서도 이 내용을 유지합니다.");
  const scheduledDate = await createDialog.getByLabel("수동 보충 날짜").inputValue();

  await createDialog.getByRole("button", { name: "수업일지 등록 계속" }).click();

  await expect(createDialog.getByRole("alert")).toHaveText("수업일지 날짜와 시작 시간을 입력해 주세요.");
  await expect(createDialog.getByLabel("수동 보충 학생")).toHaveValue("safe-consecutive-attendance-student");
  await expect(createDialog.getByLabel("수동 보충 제목")).toHaveValue("입력 보존 확인 보충");
  await expect(createDialog.getByLabel("수동 보충 사유와 내용")).toHaveValue("시간을 빠뜨린 검증 실패에서도 이 내용을 유지합니다.");
  await expect(createDialog.getByLabel("수동 보충 날짜")).toHaveValue(scheduledDate);
  await expect(createDialog.getByLabel("수동 보충 시작 시간")).toHaveValue("");
  await expect(page.locator(".supplementStudentModal")).toHaveCount(0);
  expect(writeRequests).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("manual supplement creates a linked lesson journal and safe Alimtalk reservations", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const scheduledDate = getKoreaDateAfterDays(14);
  const [, scheduledMonth, scheduledDayOfMonth] = scheduledDate.split("-");
  const scheduledWeekday = new Date(`${scheduledDate}T00:00:00+09:00`).toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
    weekday: "short"
  });
  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();
  await page.getByRole("button", { name: "수동 보충 등록" }).click();

  const createDialog = page.getByRole("dialog", { name: "수동 보충 작성" });
  await createDialog.getByLabel("수동 보충 학생").selectOption("safe-consecutive-attendance-student");
  await createDialog.getByLabel("수동 보충 제목").fill("함수 단원 개별 보충");
  await createDialog.getByLabel("수동 보충 사유와 내용").fill("함수 그래프 오개념과 지난 문제를 개별 확인합니다.");
  await createDialog.getByLabel("수동 보충 날짜").fill(scheduledDate);
  await createDialog.getByLabel("수동 보충 시작 시간").fill("16:30");
  await createDialog.getByRole("button", { name: "수업일지 등록 계속" }).click();

  const supplementModal = page.locator(".supplementStudentModal");
  await expect(supplementModal).toContainText("연속출결 가상학생 수동 보충");
  const studentDraft = supplementModal.locator("label", { hasText: "학생 알림톡 문구" }).locator("textarea");
  const parentDraft = supplementModal.locator("label", { hasText: "학부모 알림톡 문구" }).locator("textarea");
  const sameDayDraft = supplementModal.locator("label", { hasText: "당일 학생 11시 알림톡 문구" }).locator("textarea");
  await expect(studentDraft).toContainText("연속출결 가상학생 학생 보충 안내입니다.");
  await expect(studentDraft).not.toContainText("수동 보충 안내입니다.");
  const linkedFinalBody = `연속출결 가상학생 학생 보충 안내입니다.\n\n일시: ${Number(scheduledMonth)}/${Number(scheduledDayOfMonth)}(${scheduledWeekday}) 오후 04:30\n보충 내용: 함수 그래프를 다시 확인합니다.`;
  await studentDraft.fill(linkedFinalBody);
  await expect(parentDraft).toHaveValue(linkedFinalBody);
  await expect(sameDayDraft).toHaveValue(linkedFinalBody);
  await expect(supplementModal).toContainText("학생 문구 수정 시 3종에 연동되고 최종본으로 고정됩니다.");
  await supplementModal.getByRole("button", { name: "알림톡 3종 일괄 저장" }).click();
  await expect(supplementModal.getByRole("button", { name: "알림톡 3종 일괄 저장" })).toBeDisabled();
  await expect(supplementModal.getByRole("button", { name: "수업일지 일정 만들기" })).toBeEnabled();
  await supplementModal.getByRole("button", { name: "수업일지 일정 만들기" }).click();
  await expect(supplementModal.getByRole("status")).toContainText("수업일지 일정 만들기 완료");

  const taskPayload = await (await request.get(`${safeApiBaseUrl}/api/makeup-tasks`)).json();
  const savedTask = taskPayload.makeupTasks.find((task) => (
    task.taskType === "manual_makeup" && task.sourceLabel === "함수 단원 개별 보충"
  ));
  expect(savedTask).toMatchObject({
    linkedLessonDate: scheduledDate,
    linkedLessonTime: "16:30",
    scheduledDate,
    scheduledTime: "16:30",
    status: "scheduled",
    studentId: "safe-consecutive-attendance-student",
    studentScheduleNotificationDraft: linkedFinalBody,
    parentScheduleNotificationDraft: linkedFinalBody,
    notificationDraft: linkedFinalBody
  });

  const lessonPayload = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  const linkedLesson = lessonPayload.lessons.find((lesson) => lesson.lessonId === savedTask.linkedLessonId);
  expect(linkedLesson).toMatchObject({
    className: "수동 보충 · 연속출결 가상학생",
    date: scheduledDate,
    lessonType: "makeup",
    sourceMakeupTaskId: savedTask.makeupTaskId,
    startTime: "16:30",
    studentIds: ["safe-consecutive-attendance-student"]
  });

  const notificationPayload = await (await request.get(`${safeApiBaseUrl}/api/notification-jobs`)).json();
  const linkedNotifications = notificationPayload.notificationJobs.filter((job) => (
    job.payload?.makeupTaskId === savedTask.makeupTaskId
  ));
  expect(linkedNotifications.map((job) => job.notificationType).sort()).toEqual([
    "notice_parent",
    "schedule_reminder",
    "student_reminder"
  ]);
  expect(linkedNotifications.every((job) => ["dry_run", "scheduled"].includes(job.status))).toBe(true);
  const normalizePreviewBody = (value) => String(value ?? "").replace(/\n{2,}/g, "\n").trim();
  expect(linkedNotifications.every((job) => (
    normalizePreviewBody(job.previewBody) === normalizePreviewBody(linkedFinalBody)
  ))).toBe(true);

  await supplementModal.getByRole("button", { name: "창 닫기" }).click();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /수업일지/ }).click();
  // Creating the supplement task already moves the calendar's selected date to the
  // new lesson (scheduledDate), so the journal calendar opens on that month directly
  // — no separate "다음 달" navigation is needed here.
  const scheduledDay = page.getByRole("gridcell", { name: new RegExp(`${scheduledDate} · \\d+개 수업`) });
  await scheduledDay.getByRole("button", { name: "수동 보충 · 연속출결 가상학생" }).click();
  await expect(page.getByRole("dialog", { name: "수업일지" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});
