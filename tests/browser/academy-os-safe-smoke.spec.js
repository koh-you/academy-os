import { expect, test } from "./fixtures.js";
import {
  collectPageErrors,
  getKoreaDateAfterDays,
  loginAsTeacher,
  resetSafeFixture,
  safeApiBaseUrl
} from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("safe preview opens the login screen without runtime errors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.goto("/");
  await expect(page.getByTestId("safe-runtime-banner")).toBeVisible();
  await expect(page.getByRole("heading", { name: "로그인" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("report snapshot requires teacher auth, verifies Supabase source, and survives reread", async ({ request }) => {
  const snapshot = {
    body: "안전 fixture 보고서 본문",
    createdAt: "2026-08-03T09:00:00.000Z",
    lessonId: "safe-lesson-report-snapshot",
    reportId: "safe-report-snapshot-1",
    status: "snapshot_saved",
    studentId: "safe-student-report-snapshot",
    title: "안전 fixture 보고서"
  };
  const unauthenticatedResponse = await request.post(`${safeApiBaseUrl}/api/report-snapshots`, {
    data: { snapshot }
  });
  expect(unauthenticatedResponse.status()).toBe(401);

  const saveResponse = await request.post(`${safeApiBaseUrl}/api/report-snapshots`, {
    data: { snapshot },
    headers: { Authorization: "Bearer safe-fixture-session" }
  });
  expect(saveResponse.status(), await saveResponse.text()).toBe(200);
  const saved = await saveResponse.json();
  expect(saved).toMatchObject({ recovered: false, source: "supabase", verified: true });
  expect(saved.reportSnapshots.filter((item) => item.reportId === snapshot.reportId)).toHaveLength(1);

  const retryResponse = await request.post(`${safeApiBaseUrl}/api/report-snapshots`, {
    data: { snapshot },
    headers: { Authorization: "Bearer safe-fixture-session" }
  });
  expect(retryResponse.status(), await retryResponse.text()).toBe(200);
  const retried = await retryResponse.json();
  expect(retried).toMatchObject({ recovered: true, source: "supabase", verified: true });
  expect(retried.reportSnapshots.filter((item) => item.reportId === snapshot.reportId)).toHaveLength(1);

  const rereadResponse = await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`);
  expect(rereadResponse.status(), await rereadResponse.text()).toBe(200);
  const reread = await rereadResponse.json();
  expect(reread.states.reportSnapshots.filter((item) => item.reportId === snapshot.reportId)).toEqual([snapshot]);
});

test("consecutive absence makeup and regular lessons use one physical attendance visit", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const previewProbe = await request.post(`${safeApiBaseUrl}/api/attendance/preview`, {
    data: { lateGraceMinutes: 5, phoneLast4: "0833", source: "kiosk" }
  });
  expect(previewProbe.status(), await previewProbe.text()).toBe(200);
  await page.goto("/attendance");
  const pinInput = page.getByLabel("학생 휴대폰 번호 뒤 4자리");
  await pinInput.fill("0833");
  const firstPreviewResponse = page.waitForResponse((response) => response.url().includes("/api/attendance/preview"));
  await page.locator(".attendancePinForm").getByRole("button", { name: "확인" }).click();
  const firstPreview = await firstPreviewResponse;
  expect(firstPreview.status(), await firstPreview.text()).toBe(200);

  const selectionDialog = page.getByRole("dialog", { name: "출결 확인" });
  await expect(selectionDialog).toContainText("오늘 수업이 2개 이상입니다.");
  await page.waitForTimeout(1_200);
  await expect(selectionDialog).toContainText("오늘 수업이 2개 이상입니다.");
  const automaticCheckInResponse = page.waitForResponse((response) => (
    response.url().includes("/api/attendance/check") && response.request().method() === "POST"
  ));
  await selectionDialog.getByRole("button", { name: /결석보강 가상수업/ }).click();
  await expect(selectionDialog).toContainText("연속 수업으로 처리: 결석보강 가상수업 → 고1 정규 가상수업");
  await expect(selectionDialog).toContainText("등원 알림은 지금 한 번, 하원 알림은 마지막 수업 뒤 한 번만 전송합니다.");
  await expect(selectionDialog.getByRole("button", { name: "3초 뒤 자동 확인" })).toBeVisible();
  const completedAutomaticCheckInResponse = await automaticCheckInResponse;
  expect(completedAutomaticCheckInResponse.status(), await completedAutomaticCheckInResponse.text()).toBe(200);
  await expect(pinInput).toBeEnabled({ timeout: 7_000 });

  let recordsResult = await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json();
  let visitRecords = recordsResult.records.filter((record) => record.studentId === "safe-consecutive-attendance-student");
  expect(visitRecords).toHaveLength(2);
  expect(visitRecords.find((record) => record.lessonId === "safe-consecutive-attendance-makeup")?.attendanceStatus).toBe("late");
  expect(visitRecords.find((record) => record.lessonId === "safe-consecutive-attendance-regular")?.attendanceStatus).toBe("present");
  expect(new Set(visitRecords.map((record) => record.checkInTime))).toEqual(new Set(["15:55"]));
  expect(visitRecords.every((record) => !record.checkOutTime)).toBe(true);

  let eventsResult = await (await request.get(`${safeApiBaseUrl}/api/safe-fixture/attendance-events`)).json();
  expect(eventsResult.attendanceEvents.map((event) => event.eventType)).toEqual(["checkin"]);
  let notificationsResult = await (await request.get(`${safeApiBaseUrl}/api/safe-fixture/attendance-queued-notifications`)).json();
  expect(notificationsResult.attendanceQueuedNotifications.map((notification) => notification.eventType)).toEqual(["checkin"]);

  await pinInput.fill("0833");
  await page.locator(".attendancePinForm").getByRole("button", { name: "확인" }).click();
  const checkoutDialog = page.getByRole("dialog", { name: "출결 확인" });
  await expect(checkoutDialog).toContainText("하원");
  await expect(checkoutDialog).toContainText("연속 수업으로 처리: 결석보강 가상수업 → 고1 정규 가상수업");
  const checkoutResponse = page.waitForResponse((response) => (
    response.url().includes("/api/attendance/check") && response.request().method() === "POST"
  ));
  await checkoutDialog.getByRole("button", { name: /확인/ }).click();
  const completedCheckoutResponse = await checkoutResponse;
  expect(completedCheckoutResponse.status(), await completedCheckoutResponse.text()).toBe(200);
  await expect(pinInput).toBeEnabled();

  recordsResult = await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json();
  visitRecords = recordsResult.records.filter((record) => record.studentId === "safe-consecutive-attendance-student");
  expect(visitRecords).toHaveLength(2);
  expect(new Set(visitRecords.map((record) => record.checkOutTime))).toEqual(new Set(["19:05"]));
  eventsResult = await (await request.get(`${safeApiBaseUrl}/api/safe-fixture/attendance-events`)).json();
  expect(eventsResult.attendanceEvents.map((event) => event.eventType)).toEqual(["checkin", "checkout"]);
  notificationsResult = await (await request.get(`${safeApiBaseUrl}/api/safe-fixture/attendance-queued-notifications`)).json();
  expect(notificationsResult.attendanceQueuedNotifications.map((notification) => notification.eventType)).toEqual(["checkin", "checkout"]);
  expect(pageErrors).toEqual([]);
});

test("teacher view lazy boundary shows loading feedback before the first lesson chunk opens", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/lessons/TeacherLessonHubV2.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    await route.continue();
  });

  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("teacher view lazy boundary records a failed chunk and recovers after safe reload", async ({ page }) => {
  let failedOnce = false;
  await page.route("**/src/domains/students/StudentManager.jsx*", async (route) => {
    if (!failedOnce) {
      failedOnce = true;
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /학생관리/ }).click();
  const loadError = page.getByRole("alert");
  await expect(loadError).toContainText("교사 화면을 불러오지 못했습니다.");
  await expect(loadError).toContainText("입력이나 운영 데이터는 변경되지 않았습니다.");
  await loadError.getByRole("button", { name: "안전하게 새로고침" }).click();

  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await expect(page.getByRole("heading", { name: "학생관리" })).toBeVisible();
});

test("exam analysis pipeline opens from its deferred chunk without running paid actions", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/exams/ExamAnalysisPipelineCenter.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("heading", { name: "시험분석" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "선생님 검수" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("exam analysis non-paid teacher saves use the safe source and survive reload", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const title = "안전 시험분석 계약 저장";
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /시험분석/ }).click();
  await expect(page.getByRole("heading", { name: "시험분석" })).toBeVisible();
  await page.getByRole("textbox", { name: "분석명", exact: true }).fill(title);
  await page.getByRole("textbox", { name: "학교", exact: true }).fill("안전고");
  await page.getByRole("textbox", { name: "학년", exact: true }).fill("고1");
  await page.getByRole("textbox", { name: "과목", exact: true }).fill("공통수학1");
  await page.getByRole("textbox", { name: "고사", exact: true }).fill("2학기 중간");
  await page.getByRole("button", { name: "분석 저장" }).click();
  await expect(page.getByText("시험분석 · 저장 완료", { exact: true })).toBeVisible();
  await expect(page.getByRole("region", { name: "시험분석 분석본 목록" }).getByText(title, { exact: true })).toBeVisible();
  await page.getByRole("tab", { name: /문항 구조/ }).click();
  await page.getByRole("spinbutton", { name: "선생님 확정 문항 수" }).fill("12");
  await page.getByRole("button", { name: "12문항 확정" }).click();
  await expect(page.getByText(/시험분석 · 문항 수 확정 완료 · 12문항 · 12행/).first()).toBeVisible();

  const listResult = await (await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs`)).json();
  const savedRun = listResult.analysisRuns.find((run) => run.title === title);
  const detailResult = await (
    await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs?id=${encodeURIComponent(savedRun.analysisRunId)}`)
  ).json();
  expect(detailResult.analysisRun.confirmedQuestionCount).toBe(12);
  expect(detailResult.analysisRun.questionCountStatus).toBe("teacher_confirmed");
  expect(detailResult.questions).toHaveLength(12);
  expect(detailResult.events).toHaveLength(1);
  expect(detailResult.events[0].eventType).toBe("question_count_confirmed");

  const seededReviewResponse = await request.post(`${safeApiBaseUrl}/api/exam-analysis-runs/save-question-reviews`, {
    data: {
      analysisRunId: savedRun.analysisRunId,
      reviews: [{
        confirmed: false,
        mainType: "함수 그래프",
        questionNumber: 1,
        reviewNote: "안전 검수 seed",
        unitName: "함수"
      }]
    }
  });
  expect(seededReviewResponse.ok()).toBe(true);

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await expect(page.getByRole("region", { name: "시험분석 분석본 목록" }).getByText(title, { exact: true })).toBeVisible();
  await page.getByRole("tab", { name: /문항 구조/ }).click();
  await expect(page.getByText("12문항 확정", { exact: true }).first()).toBeVisible();
  await page.getByRole("tab", { name: "선생님 검수" }).click();
  const firstReviewNote = page.getByRole("textbox", { name: "1번 재확인 근거", exact: true });
  await expect(firstReviewNote).toHaveValue("안전 검수 seed");
  await firstReviewNote.fill("안전 검수 저장 완료");
  await page.getByRole("checkbox", { name: "1번 확정", exact: true }).check();
  await page.getByRole("checkbox", { name: "1번 주요문항", exact: true }).check();
  await page.getByRole("button", { name: "문항 검수본 저장" }).click();
  await expect(page.getByText("시험분석 · 검수 저장 완료 · 1/12개 확정", { exact: true }).first()).toBeVisible();

  const reviewedDetail = await (
    await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs?id=${encodeURIComponent(savedRun.analysisRunId)}`)
  ).json();
  const firstQuestion = reviewedDetail.questions.find((question) => question.questionNumber === 1);
  expect(firstQuestion.rowStatus).toBe("confirmed");
  expect(firstQuestion.teacherFields.reviewNote).toBe("안전 검수 저장 완료");
  expect(firstQuestion.teacherFields.isImportantQuestion).toBe(true);
  expect(reviewedDetail.analysisRun.auditSummary.teacherReview.confirmedCount).toBe(1);
  expect(reviewedDetail.events.filter((event) => event.eventType === "question_teacher_review_saved")).toHaveLength(2);

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await page.getByRole("tab", { name: "선생님 검수" }).click();
  await expect(page.getByRole("textbox", { name: "1번 재확인 근거", exact: true })).toHaveValue("안전 검수 저장 완료");
  await expect(page.getByRole("checkbox", { name: "1번 확정", exact: true })).toBeChecked();
  await expect(page.getByRole("checkbox", { name: "1번 주요문항", exact: true })).toBeChecked();

  await page.getByRole("tab", { name: "최종 미리보기" }).click();
  const scoreStructureInput = page.getByRole("textbox", { name: /^배점\/문항 구조/ });
  await expect(scoreStructureInput).toBeVisible();
  await scoreStructureInput.fill("객관식 12문항 · 안전 계약 검수");
  await page.getByRole("button", { name: "프롬프트 작업본 저장" }).click();
  await expect(page.getByRole("status").filter({ hasText: "프롬프트 작업본 · 저장 완료" })).toBeVisible();

  let promptDetail = await (
    await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs?id=${encodeURIComponent(savedRun.analysisRunId)}`)
  ).json();
  expect(promptDetail.analysisRun.auditSummary.promptStudio.revision).toBe(1);
  expect(promptDetail.analysisRun.auditSummary.promptStudio.roleInputs.examAnalysis.scoreStructure)
    .toBe("객관식 12문항 · 안전 계약 검수");
  const stalePromptResponse = await request.post(`${safeApiBaseUrl}/api/exam-analysis-runs/save-prompt-studio`, {
    data: {
      analysisRunId: savedRun.analysisRunId,
      expectedRevision: 0,
      promptStudioDraft: promptDetail.analysisRun.auditSummary.promptStudio
    }
  });
  expect(stalePromptResponse.status()).toBe(409);
  promptDetail = await (
    await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs?id=${encodeURIComponent(savedRun.analysisRunId)}`)
  ).json();
  expect(promptDetail.analysisRun.auditSummary.promptStudio.revision).toBe(1);

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await page.getByRole("tab", { name: "최종 미리보기" }).click();
  await expect(page.getByRole("textbox", { name: /^배점\/문항 구조/ }))
    .toHaveValue("객관식 12문항 · 안전 계약 검수");

  await page.getByRole("tab", { name: "산출물" }).click();
  const outputSummaryInput = page.getByRole("textbox", { name: "첫 문단 핵심 요약", exact: true });
  await expect(outputSummaryInput).toBeVisible();
  await outputSummaryInput.fill("안전 산출물 저장 후 새로고침 유지");
  await page.getByRole("button", { name: "산출물 작업본 저장", exact: true }).click();
  const outputSaveBar = page.getByRole("complementary", { name: "산출물 작업본 하단 고정 저장 바" });
  await expect(outputSaveBar.getByText("시험분석 산출물 · 저장 완료", { exact: true })).toBeVisible();

  const outputDetail = await (
    await request.get(`${safeApiBaseUrl}/api/exam-analysis-runs?id=${encodeURIComponent(savedRun.analysisRunId)}`)
  ).json();
  expect(outputDetail.analysisRun.auditSummary.outputDrafts.inputs.oneLineReview)
    .toBe("안전 산출물 저장 후 새로고침 유지");
  expect(outputDetail.events.filter((event) => event.eventType === "exam_analysis_output_draft_saved"))
    .toHaveLength(1);

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await page.getByRole("tab", { name: "산출물" }).click();
  await expect(page.getByRole("textbox", { name: "첫 문단 핵심 요약", exact: true }))
    .toHaveValue("안전 산출물 저장 후 새로고침 유지");
  expect(pageErrors).toEqual([]);
});

test("learning support screens open from their shared deferred chunk without mutations", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/teacher/LearningSupportCenters.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("heading", { name: "오답관리" })).toBeVisible();
  await navigation.getByRole("button", { name: /자료함/ }).click();
  await expect(page.getByRole("heading", { name: "자료함" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("student wrong problems require explicit verified save and preserve in-flight edits", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const explicitSaves = [];
  await page.route("**/api/app-state", async (route) => {
    if (route.request().method() === "POST") {
      const payload = route.request().postDataJSON();
      if (Object.keys(payload.states ?? {}).length === 1 && Array.isArray(payload.states?.wrongProblems)) {
        explicitSaves.push(payload);
      }
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await expect(page.getByRole("heading", { name: "오답관리" })).toBeVisible();
  await page.getByRole("tab", { name: "학생별 오답" }).click();
  const studentFilter = page.getByRole("group", { name: "오답관리 학년과 학생 필터" }).getByRole("combobox");
  await studentFilter.selectOption("safe-active-student");

  const saveStatus = page.getByRole("status").filter({ hasText: "학생별 오답" });
  await expect(saveStatus).toContainText("저장 완료");
  await page.getByRole("button", { name: "+ 오답 추가" }).click();
  const sourceInput = page.getByLabel(/월경계 학생 새 오답 교재 또는 출처/);
  await sourceInput.fill("안전 명시 저장 교재");
  await expect(saveStatus).toContainText("변경됨");
  await page.waitForTimeout(1_000);
  expect(explicitSaves).toHaveLength(0);

  await page.getByRole("button", { name: "학생별 오답 저장" }).click();
  await expect.poll(() => explicitSaves.length).toBe(1);
  const rangeInput = page.getByLabel(/월경계 학생 안전 명시 저장 교재 문항 또는 범위/);
  await rangeInput.fill("10-12");
  await expect(saveStatus).toContainText("변경됨", { timeout: 10_000 });
  await expect(page.getByText("아직 저장되지 않은 입력이 있습니다. 저장 중 수정했다면 한 번 더 저장해 주세요.")).toBeVisible();
  await expect(page.getByRole("button", { name: "학생별 오답 저장" })).toBeEnabled();

  let reread = await (await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`)).json();
  expect(reread.states.wrongProblems.find((item) => item.source === "안전 명시 저장 교재")?.problemRange).toBe("");

  await page.getByRole("button", { name: "학생별 오답 저장" }).click();
  await expect.poll(() => explicitSaves.length).toBe(2);
  await expect(saveStatus).toContainText("저장 완료");
  reread = await (await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`)).json();
  expect(reread.states.wrongProblems.find((item) => item.source === "안전 명시 저장 교재")?.problemRange).toBe("10-12");

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await page.getByRole("tab", { name: "학생별 오답" }).click();
  await studentFilter.selectOption("safe-active-student");
  await expect(page.locator('input[value="10-12"]')).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("lesson research requires explicit verified save and preserves in-flight edits", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const explicitSaves = [];
  await page.route("**/api/app-state", async (route) => {
    if (route.request().method() === "POST") {
      const payload = route.request().postDataJSON();
      if (Object.keys(payload.states ?? {}).length === 1 && Array.isArray(payload.states?.lessonResearchItems)) {
        explicitSaves.push(payload);
        if (explicitSaves.length === 1) {
          await new Promise((resolve) => setTimeout(resolve, 400));
        }
      }
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /수업연구/ }).click();
  await expect(page.getByRole("heading", { name: "수업연구" })).toBeVisible();

  const saveStatus = page.getByRole("status").filter({ hasText: "수업연구 교안" });
  const titleInput = page.getByLabel("제목");
  const sourceInput = page.getByLabel("출처 / 수업 맥락");
  const savedTitle = `안전 명시 저장 교안 ${Date.now()}`;
  const inFlightSource = "저장 중 후속 수업 맥락";

  await expect(saveStatus).toContainText("저장 완료");
  await titleInput.fill(savedTitle);
  await expect(saveStatus).toContainText("변경됨");
  await page.waitForTimeout(1_000);
  expect(explicitSaves).toHaveLength(0);

  await page.getByRole("button", { name: "수업연구 저장" }).click();
  await expect.poll(() => explicitSaves.length).toBe(1);
  await sourceInput.fill(inFlightSource);
  await expect(saveStatus).toContainText("변경됨", { timeout: 10_000 });
  await expect(page.getByText("아직 저장되지 않은 교안 변경이 있습니다. 저장 중 수정했다면 한 번 더 저장해 주세요.")).toBeVisible();
  await expect(page.getByRole("button", { name: "수업연구 저장" })).toBeEnabled();

  let reread = await (await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`)).json();
  expect(reread.states.lessonResearchItems.find((item) => item.title === savedTitle)?.source).not.toBe(inFlightSource);

  await page.getByRole("button", { name: "수업연구 저장" }).click();
  await expect.poll(() => explicitSaves.length).toBe(2);
  await expect(saveStatus).toContainText("저장 완료");
  reread = await (await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`)).json();
  expect(reread.states.lessonResearchItems.find((item) => item.title === savedTitle)?.source).toBe(inFlightSource);

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await navigation.getByRole("button", { name: /수업연구/ }).click();
  await expect(page.getByLabel("제목")).toHaveValue(savedTitle);
  await expect(page.getByLabel("출처 / 수업 맥락")).toHaveValue(inFlightSource);
  expect(pageErrors).toEqual([]);
});

test("teacher homework verification waits for versioned readback and survives reload", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let releaseSave;
  const saveGate = new Promise((resolve) => {
    releaseSave = resolve;
  });
  await page.route("**/api/lesson-journal/rows/save", async (route) => {
    requests.push(route.request().postDataJSON());
    await saveGate;
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /숙제현황/ }).click();
  const statusSelect = page.getByLabel(/안전 교사 확인 숙제 교사 확인 상태/);
  await expect(statusSelect).toHaveValue("missing");

  await statusSelect.selectOption("partial");
  await expect.poll(() => requests.length).toBe(1);
  await expect(statusSelect).toBeDisabled();
  await expect(statusSelect).toHaveValue("missing");
  await expect(page.locator(".teacherHomeworkSaveFeedback.saving")).toContainText("저장 중");
  releaseSave();

  await expect(statusSelect).toBeEnabled();
  await expect(statusSelect).toHaveValue("partial");
  await expect(page.locator(".teacherHomeworkSaveFeedback.saved")).toContainText("Supabase 저장 및 재조회 확인 완료");
  expect(requests[0].homeworkChanges[0].before.teacherStatus).toBe("missing");
  expect(requests[0].homeworkChanges[0].after.teacherStatus).toBe("partial");

  const sourceResponse = await request.get(`${safeApiBaseUrl}/api/homeworks`);
  const sourceBody = await sourceResponse.json();
  expect(sourceBody.homeworks.find((homework) => homework.homeworkId === "safe-teacher-status-homework")?.teacherStatus).toBe("partial");

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /숙제현황/ }).click();
  const reloadedStatusSelect = page.getByLabel(/안전 교사 확인 숙제 교사 확인 상태/);
  await expect(reloadedStatusSelect).toHaveValue("partial");

  await page.unroute("**/api/lesson-journal/rows/save");
  await page.route("**/api/lesson-journal/rows/save", (route) => route.fulfill({
    contentType: "application/json",
    json: { code: "LESSON_JOURNAL_ROWS_CONFLICT", error: "다른 화면에서 먼저 변경되었습니다.", ok: false },
    status: 409
  }));
  await reloadedStatusSelect.selectOption("missing");
  await expect(reloadedStatusSelect).toHaveValue("partial");
  await expect(page.locator(".teacherHomeworkSaveFeedback.failed")).toContainText("다른 화면에서 먼저 변경되었습니다.");
  expect(pageErrors).toEqual([]);
});

test("planning tool screens open from their shared deferred chunk without mutations", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/teacher/PlanningToolCenters.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /학사일정/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("heading", { name: "학사일정" })).toBeVisible();
  await navigation.getByRole("button", { name: /수업연구/ }).click();
  await expect(page.getByRole("heading", { name: "수업연구" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("dashboard auxiliary panels open from their shared deferred chunk without mutations", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/teacher/DashboardAuxiliaryPanels.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });

  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.locator(".academyReminderPanel")).toBeVisible();

  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /특강관리/ }).click();
  await expect(page.getByRole("heading", { name: "특강관리" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "특강 안내문" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("withdrawn absence candidate can reach and complete safe makeup cancellation", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("button", { name: /보충관리/ }).click();
  await expect(page.getByRole("heading", { name: "보충관리" })).toBeVisible();
  await page.getByRole("button", { name: /결석보강/ }).first().click();
  const withdrawnCandidate = page.getByRole("article").filter({ hasText: "미리보기 퇴원생" });
  await expect(withdrawnCandidate).toBeVisible();
  await withdrawnCandidate.getByRole("button", { name: "보충 생성" }).click();

  await expect(page.getByRole("button", { name: "보강만 취소" })).toBeVisible();
  await page.getByRole("button", { name: "보강만 취소" }).click();
  const cancellationDialog = page.getByRole("dialog", { name: "보강만 취소할까요?" });
  await expect(cancellationDialog).toBeVisible();
  await cancellationDialog.getByRole("button", { name: "보강만 취소" }).click();

  await expect(withdrawnCandidate).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});

test("lesson journal calendar can move to the next month and back", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const monthNavigation = page.getByRole("navigation", { name: "수업일지 달력 월 이동" });
  await expect(monthNavigation).toBeVisible();
  const monthHeading = monthNavigation.getByRole("heading");
  const originalMonthTitle = await monthHeading.textContent();
  await monthNavigation.getByRole("button", { name: "다음 달" }).click();
  await expect(monthHeading).not.toHaveText(originalMonthTitle);
  const openMonthlyLessonsButton = monthNavigation.getByRole("button", { name: /정규수업 열기/ });
  await expect(openMonthlyLessonsButton).toBeVisible();
  await openMonthlyLessonsButton.click();
  const openMonthlyLessonsDialog = page.getByRole("dialog", { name: /정규수업 열기/ });
  await expect(openMonthlyLessonsDialog.locator(".modalFooter")).toBeVisible();
  await openMonthlyLessonsDialog.getByRole("button", { exact: true, name: "닫기" }).click();
  await expect(openMonthlyLessonsDialog).toBeHidden();
  await monthNavigation.getByRole("button", { name: "이전 달" }).click();
  await expect(monthHeading).toHaveText(originalMonthTitle);
  expect(pageErrors).toEqual([]);
});

test("lesson journal calendar groups same-time special lessons above makeup lessons", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/api/lessons", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        lessons: [
          ...(result.lessons ?? []),
          {
            className: "결석 보강 · 홍길동",
            date: "2026-08-03",
            endTime: "14:00",
            lessonId: "safe-calendar-makeup-b",
            lessonType: "makeup",
            startTime: "13:00",
            status: "scheduled",
            studentIds: ["safe-active-student"]
          },
          {
            className: "결석 보강 · 강민준",
            date: "2026-08-03",
            endTime: "14:00",
            lessonId: "safe-calendar-makeup-a",
            lessonType: "makeup",
            startTime: "13:00",
            status: "scheduled",
            studentIds: ["safe-active-student"]
          }
        ]
      }
    });
  });

  await loginAsTeacher(page);
  const calendarDay = page.getByRole("gridcell", { name: "2026-08-03 · 3개 수업" });
  await expect(calendarDay.locator(".lessonPill")).toHaveText([
    "13:00 여름 개별 진도 클리닉 (1명)",
    "13:00 결석 보강 · 강민준 (1명)",
    "13:00 결석 보강 · 홍길동 (1명)"
  ]);
  expect(pageErrors).toEqual([]);
});

test("individual times place a student in the actual lesson roster and preserve a manual makeup roster", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-03T09:00:00+09:00") });
  await page.route("**/api/students*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        students: [
          ...(result.students ?? []),
          {
            defaultClassTemplateId: "safe-schedule-priority-class",
            grade: "중3",
            loginId: "safe_schedule_priority",
            name: "박지현",
            pin: "1234",
            scheduleOverride: "수 19:00-22:00 / 토 13:00-16:00",
            schoolName: "안전중",
            status: "active",
            studentId: "safe-schedule-priority-student"
          },
          {
            defaultClassTemplateId: "template_tt_sat_front",
            grade: "중3",
            loginId: "safe_front_overlap",
            name: "서빈",
            pin: "1234",
            scheduleOverride: "화목 17:00-20:00 / 토 10:00-13:00",
            schoolName: "안전중",
            status: "active",
            studentId: "safe-front-overlap-student"
          }
        ]
      }
    });
  });
  await page.route("**/api/lessons*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    const sharedLesson = {
      className: "월수금 앞반",
      classTemplateId: "safe-schedule-priority-class",
      date: "2026-08-05",
      endTime: "19:00",
      startTime: "17:00",
      status: "scheduled",
      studentIds: ["safe-schedule-priority-student"]
    };
    await route.fulfill({
      response,
      json: {
        ...result,
        lessons: [
          ...(result.lessons ?? []),
          { ...sharedLesson, lessonId: "safe-schedule-priority-regular", lessonType: "class" },
          { ...sharedLesson, className: "결석 보강 · 박지현", lessonId: "safe-schedule-priority-makeup", lessonType: "makeup" },
          {
            ...sharedLesson,
            className: "화목 4-7 / 토 10-1반",
            classTemplateId: "template_tt_sat_front",
            date: "2026-08-04",
            endTime: "19:00",
            lessonId: "lesson_regular_2026-08-04_template_tt_sat_front",
            lessonType: "class",
            startTime: "16:00",
            studentIds: ["safe-front-overlap-student"]
          },
          {
            ...sharedLesson,
            className: "토요일 1-4반",
            classTemplateId: "safe-saturday-1-4-class",
            date: "2026-08-08",
            endTime: "16:00",
            lessonId: "safe-saturday-1-4",
            lessonType: "class",
            startTime: "13:00"
          }
        ]
      }
    });
  });

  await loginAsTeacher(page);
  const frontDay = page.getByRole("gridcell", { name: /^2026-08-04 · \d+개 수업$/ });
  await expect(frontDay.getByRole("button", { name: /화목 4-7 \/ 토 10-1반/ })).toContainText("(1명)");
  await frontDay.getByRole("button", { name: /화목 4-7 \/ 토 10-1반/ }).click();
  const frontJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(frontJournal).toContainText("서빈");
  await expect(frontJournal.getByLabel("개별 시간표 5-8 적용")).toHaveText("5-8");
  await frontJournal.getByRole("button", { name: "수업 목록으로 돌아가기" }).click();
  const calendarDay = page.getByRole("gridcell", { name: /^2026-08-05 · \d+개 수업$/ });
  await expect(calendarDay.locator(".lessonPill").filter({ hasText: /^17:00/ })).toHaveText([
    "17:00 결석 보강 · 박지현 (1명)",
    "17:00 월수금 앞반 (0명)"
  ]);
  const saturday = page.getByRole("gridcell", { name: /^2026-08-08 · \d+개 수업$/ });
  await expect(saturday.getByRole("button", { name: /토요일 1-4반/ })).toContainText("(1명)");
  await saturday.getByRole("button", { name: /토요일 1-4반/ }).click();
  const journal = page.getByRole("dialog", { name: "수업일지" });
  await expect(journal).toContainText("박지현");
  await expect(journal.getByLabel("개별 시간표 1-4 적용")).toHaveText("1-4");
  expect(pageErrors).toEqual([]);
});

test("lesson journal creation action stays visible and opens the registration modal", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const monthNavigation = page.getByRole("navigation", { name: "수업일지 달력 월 이동" });
  const creationActions = monthNavigation.getByRole("group", { name: "수업일지 생성" });
  await expect(creationActions).toBeVisible();
  await creationActions.getByRole("button", { name: "+ 수업 등록", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "수업 등록" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("student class move preserves today's journal row when applying from tomorrow", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-01T09:00:00+09:00") });
  const rosterRequests = [];
  await page.route("**/api/class-rosters/save", async (route) => {
    rosterRequests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  const classSelect = page.getByLabel("정산 미리보기 학생 반");
  const studentRow = classSelect.locator("xpath=ancestor::div[contains(@class, 'studentListRow')]");
  await classSelect.selectOption("safe-cross-month-class");
  await expect(page.getByLabel("정산 미리보기 학생 반 변경 적용 시점")).toHaveValue("tomorrow");
  await studentRow.getByRole("button", { name: "저장", exact: true }).click();
  await expect(studentRow.getByRole("button", { name: "저장됨", exact: true })).toBeVisible();

  expect(rosterRequests).toHaveLength(1);
  const changedLessonIds = rosterRequests[0].lessonChanges.map((change) => change.lessonId);
  expect(changedLessonIds).not.toContain("safe-settlement-august-regular");
  expect(changedLessonIds).toContain("safe-settlement-future-roster");
  expect(pageErrors).toEqual([]);
});

test("student profile schedule asks whether today's journal should change before roster save", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-01T09:00:00+09:00") });
  const rosterRequests = [];
  await page.route("**/api/class-rosters/save", async (route) => {
    rosterRequests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  await profile.getByRole("button", { name: "수정", exact: true }).click();
  await profile.getByRole("button", { name: "시간표 추가" }).click();

  const effectiveDateSelect = profile.getByLabel("정산 미리보기 학생 개별 시간표 적용 시점");
  await expect(profile.getByText("오늘 수업일지 명단도 변경할까요?")).toBeVisible();
  await expect(effectiveDateSelect).toHaveValue("tomorrow");
  await profile.getByRole("button", { name: "기본정보만 저장", exact: true }).click();
  const overlapDialog = page.getByRole("dialog", { name: "기본 반 명단에 계속 표시할까요?" });
  await expect(overlapDialog).toContainText("반 16:00-19:00");
  await expect(overlapDialog).toContainText("학생 17:00-20:00");
  await overlapDialog.getByRole("button", { name: "기본 반 명단에 표시하고 저장" }).click();
  await expect(overlapDialog).toBeHidden();
  await expect(profile.getByText("화목 17:00-20:00", { exact: true })).toBeVisible();

  await expect.poll(() => rosterRequests.length).toBe(1);
  const changedLessonIds = rosterRequests[0].lessonChanges.map((change) => change.lessonId);
  expect(changedLessonIds).not.toContain("safe-settlement-august-regular");
  expect(changedLessonIds).toEqual([]);
  expect(rosterRequests[0].studentChanges[0].after.scheduleOverride).toBe("화목 17:00-20:00");
  expect(pageErrors).toEqual([]);
});

test("lesson journal skips an unused intermediate lesson but stops at an attended lesson", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  let intermediateLessonAttended = false;
  const intermediateLessonId = "safe-cross-month-unused-intermediate";

  await page.route("**/api/lessons*", async (route) => {
    const response = await route.fetch();
    const payload = await response.json();
    await route.fulfill({
      response,
      json: {
        ...payload,
        lessons: [
          ...(payload.lessons ?? []),
          {
            className: "월 경계 연동반 · 미진행 보충",
            classTemplateId: "safe-cross-month-class",
            date: "2026-07-31",
            endTime: "13:00",
            lessonId: intermediateLessonId,
            lessonType: "makeup",
            startTime: "10:00",
            status: "scheduled",
            studentIds: ["safe-active-student"],
            title: "월 경계 연동반 · 미진행 보충"
          }
        ]
      }
    });
  });
  await page.route("**/api/lesson-records*", async (route) => {
    const response = await route.fetch();
    const payload = await response.json();
    await route.fulfill({
      response,
      json: {
        ...payload,
        records: intermediateLessonAttended
          ? [
              ...(payload.records ?? []),
              {
                attendanceStatus: "present",
                lessonId: intermediateLessonId,
                lessonStudentRecordId: "safe-cross-month-intermediate-record",
                studentId: "safe-active-student"
              }
            ]
          : payload.records
      }
    });
  });

  await loginAsTeacher(page);
  const openCurrentJournal = async () => {
    const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
    await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
    return page.getByRole("dialog", { name: "수업일지" });
  };

  let journal = await openCurrentJournal();
  let studentRow = journal.getByRole("region", { name: "수업일지 학생 기록" }).locator(".journalRow:not(.journalHead)").first();
  await expect(studentRow.getByRole("button", { name: "안전 이전 숙제", exact: true })).toBeVisible();

  intermediateLessonAttended = true;
  await page.reload();
  journal = await openCurrentJournal();
  studentRow = journal.getByRole("region", { name: "수업일지 학생 기록" }).locator(".journalRow:not(.journalHead)").first();
  await expect(studentRow.getByRole("button", { name: "지난 숙제", exact: true })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("lesson copy retries the same server plan after an unknown result and verified undo removes it", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let abortAfterCommit = true;
  await page.route("**/api/lesson-journal/history-action", async (route) => {
    if (route.request().method() === "POST" && abortAfterCommit) {
      abortAfterCommit = false;
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });
  await loginAsTeacher(page);

  const sourceDay = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await sourceDay.locator(".dayNumber").click();
  await sourceDay.focus();
  await page.keyboard.press("Control+c");
  await expect(page.locator(".generatedLessonSaveNotice")).toContainText("복사 준비 완료");
  const targetDay = page.getByRole("gridcell", { name: "2026-08-02 · 수업 없음" });
  await targetDay.locator(".dayNumber").click();
  await targetDay.focus();
  await page.keyboard.press("Control+v");
  await expect(page.locator(".generatedLessonSaveNotice.failed")).toBeVisible();

  await page.keyboard.press("Control+v");
  await expect(page.locator(".generatedLessonSaveNotice.saved")).toContainText("복사 완료");
  const savedLessons = (await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json()).lessons;
  const copies = savedLessons.filter((lesson) => (
    lesson.date === "2026-08-02" && lesson.className === "월 경계 연동반"
  ));
  expect(copies).toHaveLength(1);

  await page.keyboard.press("Control+z");
  await expect(page.locator(".generatedLessonSaveNotice.saved")).toContainText("되돌리기 완료");
  const lessonsAfterUndo = (await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json()).lessons;
  expect(lessonsAfterUndo.some((lesson) => lesson.lessonId === copies[0].lessonId)).toBe(false);
  expect(pageErrors).toEqual([]);
});

test("lesson cancellation keeps its confirmation on conflict and verified undo restores the source", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let conflictOnce = true;
  await page.route("**/api/lesson-journal/history-action", async (route) => {
    if (route.request().method() === "POST" && conflictOnce) {
      conflictOnce = false;
      await route.fulfill({
        contentType: "application/json",
        json: { code: "LESSON_JOURNAL_HISTORY_CONFLICT", error: "안전 fixture 충돌", ok: false },
        status: 409
      });
      return;
    }
    await route.continue();
  });
  await loginAsTeacher(page);

  const sourceDay = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await sourceDay.locator(".dayNumber").click();
  await sourceDay.focus();
  await page.keyboard.press("Delete");
  const confirmDialog = page.getByRole("dialog", { name: "수업 취소 확인" });
  await confirmDialog.getByRole("button", { name: "수업 취소 처리" }).click();
  await expect(confirmDialog).toBeVisible();
  await expect(page.locator(".generatedLessonSaveNotice.failed")).toContainText("안전 fixture 충돌");

  await confirmDialog.getByRole("button", { name: "수업 취소 처리" }).click();
  await expect(confirmDialog).toHaveCount(0);
  const canceledLessons = (await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json()).lessons;
  expect(canceledLessons.find((lesson) => lesson.lessonId === "safe-cross-month-current-lesson")?.status).toBe("canceled");

  await page.keyboard.press("Control+z");
  await expect(page.locator(".generatedLessonSaveNotice.saved")).toContainText("복구 완료");
  const restoredLessons = (await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json()).lessons;
  expect(restoredLessons.find((lesson) => lesson.lessonId === "safe-cross-month-current-lesson")?.status).toBe("scheduled");
  expect(pageErrors).toEqual([]);
});

test("lesson hub top reminders can collapse and expand without runtime errors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const collapseButton = page.getByRole("button", { name: "알림 접기" });
  await expect(collapseButton).toBeVisible();
  await collapseButton.click();
  await expect(page.getByRole("button", { name: "알림 펼치기" })).toBeVisible();
  await expect(page.locator("#academy-reminder-panel-body")).toBeHidden();
  await page.getByRole("button", { name: "알림 펼치기" }).click();
  await expect(page.locator("#academy-reminder-panel-body")).toBeVisible();
  expect(pageErrors).toEqual([]);
});


test("lesson memo checks a pending homework followup and removes it from later journals", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const longHomeworkFollowup = "개념원리 연습문제 93,95,96,114,119,120,121,140~148,182,183,214~216,243,245,249,283,284,291,295";
  let followupCleared = false;
  const sourceSaveRequests = [];
  await page.route("**/api/lesson-records*", async (route) => {
    if (route.request().method() === "POST") {
      const payload = route.request().postDataJSON();
      const record = payload?.record;
      const clearsSourceFollowup = record?.lessonStudentRecordId === "safe-cross-month-blank-record" &&
        !record.homeworkFollowupMethod &&
        !record.homeworkFollowupText &&
        !record.homeworkFollowupSourceHomeworkId;
      const response = await route.fetch();
      if (clearsSourceFollowup && response.ok()) {
        sourceSaveRequests.push(record);
        followupCleared = true;
      }
      await route.fulfill({ response });
      return;
    }
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    const response = await route.fetch();
    const payload = await response.json();
    await route.fulfill({
      response,
      json: {
        ...payload,
        records: (payload.records ?? []).map((record) => (
          !followupCleared && record.lessonStudentRecordId === "safe-cross-month-blank-record"
            ? {
                ...record,
                homeworkFollowupMethod: "next_lesson",
                homeworkFollowupSourceHomeworkId: "safe-cross-month-homework",
                homeworkFollowupText: longHomeworkFollowup
              }
            : record
        ))
      }
    });
  });
  await page.setViewportSize({ width: 1417, height: 945 });
  await loginAsTeacher(page);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });

  const table = lessonJournal.getByRole("region", { name: "수업일지 학생 기록" });
  const row = table.locator(".journalRow:not(.journalHead)").first();
  await expect(row).not.toContainText("확인할 숙제");
  await row.getByRole("button", { name: /월경계 학생 수업메모/ }).click();

  let memoDialog = page.getByRole("dialog", { name: "월경계 학생 수업메모" });
  const followupCard = memoDialog.locator(".prepMemoHomeworkFollowup");
  await expect(followupCard).toContainText(longHomeworkFollowup);
  const checkInput = followupCard.getByRole("checkbox", { name: "확인 완료" });
  expect(await checkInput.evaluate((element) => ({
    height: getComputedStyle(element).height,
    width: getComputedStyle(element).width
  }))).toEqual({ height: "16px", width: "16px" });

  await checkInput.click();
  await expect(followupCard).toContainText("이후 수업일지에 다시 표시하지 않습니다.");
  expect(sourceSaveRequests).toHaveLength(1);
  expect(sourceSaveRequests[0]).toMatchObject({
    homeworkFollowupMethod: "",
    homeworkFollowupSourceHomeworkId: "",
    homeworkFollowupText: "",
    lessonStudentRecordId: "safe-cross-month-blank-record"
  });

  const persistedRecords = (await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json()).records;
  expect(persistedRecords.find((record) => record.lessonStudentRecordId === "safe-cross-month-blank-record")).toMatchObject({
    homeworkFollowupMethod: "",
    homeworkFollowupSourceHomeworkId: "",
    homeworkFollowupText: ""
  });

  await memoDialog.getByRole("button", { name: "창 닫기" }).click();
  await row.getByRole("button", { name: /월경계 학생 수업메모/ }).click();
  memoDialog = page.getByRole("dialog", { name: "월경계 학생 수업메모" });
  await expect(memoDialog).not.toContainText("확인할 숙제");
  expect(pageErrors).toEqual([]);
});

test("Escape closes only the topmost Alimtalk modal before the lesson journal", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();

  await lessonJournal.getByRole("button", { name: "학부모 알림톡" }).first().click();
  const alimtalkModal = page.getByRole("dialog", { name: /학부모 알림톡/ });
  await expect(alimtalkModal).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(alimtalkModal).toBeHidden();
  await expect(lessonJournal).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(lessonJournal).toBeHidden();
  expect(pageErrors).toEqual([]);
});

test("lesson journal keeps an in-flight edit and verifies the retried record from the safe source", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const lessonJournalSaveModuleRequests = [];
  page.on("request", (browserRequest) => {
    if (browserRequest.url().includes("lessonJournalRowsSaveAction")) {
      lessonJournalSaveModuleRequests.push(browserRequest.url());
    }
  });
  await loginAsTeacher(page);
  expect(lessonJournalSaveModuleRequests).toHaveLength(1);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal.getByRole("button", { name: "월 경계 연동반" })).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "7월 최신 교재" })).toBeVisible();
  await expect(lessonJournal.getByRole("button", { name: "7월 최신 진도" })).toBeVisible();
  await lessonJournal.getByRole("button", { name: "수정 시작" }).click();
  const materialDraft = lessonJournal.getByRole("textbox", { name: "월경계 학생 강의 교재" });
  await materialDraft.fill("8월 저장 요청 A");
  const saveBar = lessonJournal.getByRole("complementary", { name: "수업일지 하단 고정 저장 바" });
  await expect(saveBar).toContainText("저장 전 변경 1건");
  const saveButton = saveBar.getByRole("button", { name: "변경 저장" });
  await saveButton.click();
  await expect(saveBar.getByRole("button", { name: "저장 중" })).toBeDisabled();
  await materialDraft.fill("8월 후속 수정 B");
  await expect(materialDraft).toHaveValue("8월 후속 수정 B");
  await expect(saveBar).toContainText("저장 완료 · 이후 변경 저장 필요 · 저장 전 변경 1건");
  await expect(saveButton).toBeEnabled();
  await saveButton.click();
  await expect(saveBar).toContainText("저장 완료");
  await expect(lessonJournal.getByRole("button", { name: "8월 후속 수정 B" })).toBeVisible();
  const savedRecords = (await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json()).records;
  expect(savedRecords.find((record) => record.lessonId === "safe-cross-month-current-lesson")?.lessonMaterial)
    .toBe("8월 후속 수정 B");
  expect(pageErrors).toEqual([]);
});

test("lesson journal keeps drafts after a version conflict and saves them on a verified retry", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let conflictOnce = true;
  await page.route("**/api/lesson-journal/rows/save", async (route) => {
    if (conflictOnce) {
      conflictOnce = false;
      await route.fulfill({
        contentType: "application/json",
        json: { code: "LESSON_JOURNAL_ROWS_CONFLICT", error: "다른 화면에서 먼저 변경되었습니다.", ok: false },
        status: 409
      });
      return;
    }
    await route.continue();
  });
  await loginAsTeacher(page);
  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await lessonJournal.getByRole("button", { name: "수정 시작" }).click();
  const materialDraft = lessonJournal.getByRole("textbox", { name: "월경계 학생 강의 교재" });
  await materialDraft.fill("충돌 뒤 보존할 수정본");
  const saveBar = lessonJournal.getByRole("complementary", { name: "수업일지 하단 고정 저장 바" });
  const saveButton = saveBar.getByRole("button", { name: "변경 저장" });
  await saveButton.click();
  await expect(saveBar).toContainText("저장 실패");
  await expect(materialDraft).toHaveValue("충돌 뒤 보존할 수정본");
  await expect(saveButton).toBeEnabled();

  await saveButton.click();
  await expect(saveBar).toContainText("저장 완료");
  const savedRecords = (await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json()).records;
  expect(savedRecords.find((record) => record.lessonId === "safe-cross-month-current-lesson")?.lessonMaterial)
    .toBe("충돌 뒤 보존할 수정본");
  expect(pageErrors).toEqual([]);
});

test("lesson journal rebases a newly created homework conflict before a verified retry", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const currentHomework = {
    assignedDate: "2026-08-01",
    dueDate: "",
    homeworkId: "homework_next_2026-08-01_safe-active-student",
    homeworkType: "next",
    lessonId: "safe-cross-month-current-lesson",
    status: "assigned",
    studentId: "safe-active-student",
    studentStatus: "not_started",
    subject: "노션 수업 DB",
    teacherStatus: "unverified",
    title: "다른 화면에서 먼저 생성된 숙제",
    totalProblems: null,
    updatedAt: "2026-08-06T10:00:00.000Z"
  };
  let saveAttempt = 0;
  await page.route("**/api/lesson-journal/rows/save", async (route) => {
    saveAttempt += 1;
    const payload = route.request().postDataJSON();
    if (saveAttempt === 1) {
      await route.fulfill({
        contentType: "application/json",
        json: {
          code: "LESSON_JOURNAL_ROWS_CONFLICT",
          currentHomework,
          error: "숙제가 다른 화면에서 먼저 생성되었습니다.",
          ok: false
        },
        status: 409
      });
      return;
    }
    expect(payload.homeworkChanges[0].before).toEqual(currentHomework);
    await route.fulfill({
      contentType: "application/json",
      json: {
        auditId: payload.auditId,
        homeworks: payload.homeworkChanges.map((change) => change.after),
        ok: true,
        records: [],
        source: "supabase",
        verified: true
      },
      status: 200
    });
  });
  await loginAsTeacher(page);
  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();

  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await lessonJournal.getByRole("button", { name: "수정 시작" }).click();
  const nextHomeworkDraft = lessonJournal.getByRole("textbox", { name: "월경계 학생 다음 숙제" });
  await nextHomeworkDraft.fill("수업일지에서 저장할 숙제");
  const saveBar = lessonJournal.getByRole("complementary", { name: "수업일지 하단 고정 저장 바" });
  const saveButton = saveBar.getByRole("button", { name: "변경 저장" });
  await saveButton.click();
  await expect(saveBar).toContainText("최신 원천을 불러왔습니다");
  await expect(saveBar).toContainText("변경 저장을 다시 눌러 주세요");
  await expect(nextHomeworkDraft).toHaveValue("수업일지에서 저장할 숙제");

  await saveButton.click();
  await expect(saveBar).toContainText("저장 완료");
  await expect(lessonJournal.getByRole("button", { name: "수업일지에서 저장할 숙제" })).toBeVisible();
  expect(saveAttempt).toBe(2);
  expect(pageErrors).toEqual([]);
});

test("lesson journal reuses one stable makeup task after an unknown save response", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let interceptedTaskId = "";
  let loseFirstResponse = true;
  await page.route("**/api/lesson-journal/makeup-tasks/save", async (route) => {
    if (!loseFirstResponse) {
      await route.continue();
      return;
    }
    loseFirstResponse = false;
    const payload = route.request().postDataJSON();
    interceptedTaskId = payload.makeupTasks?.[0]?.makeupTaskId || "";
    const response = await route.fetch();
    expect(response.ok()).toBe(true);
    await route.abort("failed");
  });

  await loginAsTeacher(page);
  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await lessonJournal.getByRole("button", { name: "수정 시작" }).click();
  await lessonJournal.getByRole("combobox", { name: "월경계 학생 숙제 상태" }).selectOption("not_done");
  await lessonJournal.getByRole("button", { name: "등원보충" }).click();

  const saveBar = lessonJournal.getByRole("complementary", { name: "수업일지 하단 고정 저장 바" });
  const saveButton = saveBar.getByRole("button", { name: "변경 저장" });
  await saveButton.click();
  await expect(saveBar).toContainText(/부분 저장|저장 실패/);
  expect(interceptedTaskId).toMatch(/^makeup_lesson_journal_/);
  let savedTasks = (await (await request.get(`${safeApiBaseUrl}/api/makeup-tasks`)).json()).makeupTasks;
  expect(savedTasks).toHaveLength(1);
  expect(savedTasks[0].makeupTaskId).toBe(interceptedTaskId);

  await saveButton.click();
  await expect(saveBar).toContainText("저장 완료");
  savedTasks = (await (await request.get(`${safeApiBaseUrl}/api/makeup-tasks`)).json()).makeupTasks;
  expect(savedTasks).toHaveLength(1);
  expect(savedTasks[0].makeupTaskId).toBe(interceptedTaskId);
  expect(pageErrors).toEqual([]);
});

test("lesson memo opens from the shared nested lesson chunk without saving", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.route("**/src/domains/lessons/LessonNestedPanels.jsx*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });
  await loginAsTeacher(page);

  const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await lessonJournal.getByRole("button", { name: /월경계 학생 수업메모/ }).click();
  await expect(page.locator('.teacherViewLoadState[role="status"]')).toContainText("교사 화면을 불러오는 중입니다.");
  await expect(page.getByRole("dialog", { name: "월경계 학생 수업메모" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("lesson memo chunk failure offers a latest-screen recovery", async ({ page }) => {
  let failedOnce = false;
  await page.route("**/src/domains/lessons/LessonNestedPanels.jsx*", async (route) => {
    if (!failedOnce) {
      failedOnce = true;
      await route.abort("failed");
      return;
    }
    await route.continue();
  });
  await loginAsTeacher(page);

  const openLessonJournal = async () => {
    const currentDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
    await currentDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
    return page.getByRole("dialog", { name: "수업일지" });
  };

  let lessonJournal = await openLessonJournal();
  await lessonJournal.getByRole("button", { name: /월경계 학생 수업메모/ }).click();
  await expect(lessonJournal).toContainText("이전 화면 코드가 남아 수업메모를 불러오지 못했습니다.");
  await lessonJournal.getByRole("button", { name: "최신 화면으로 새로고침" }).click();

  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  lessonJournal = await openLessonJournal();
  await lessonJournal.getByRole("button", { name: /월경계 학생 수업메모/ }).click();
  await expect(page.getByRole("dialog", { name: "월경계 학생 수업메모" })).toBeVisible();
});

test("student lesson schedule previews calendar table and selectable PDF sections", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.addInitScript(() => { window.print = () => {}; });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  await profile.getByLabel("정산 미리보기 학생 출결 조회 월").fill("2026-08");
  await profile.getByRole("button", { name: "수업일정표" }).click();

  const previewDialog = page.getByRole("dialog", { name: /정산 미리보기 학생 2026년 8월 수업일정표/ });
  await expect(previewDialog).toBeVisible();
  await expect(previewDialog).not.toContainText("학부모용 간단본");
  await expect(previewDialog).not.toContainText("원장님용 상세본");
  const reportPreview = previewDialog.getByRole("region", { name: /수업일정표/ });
  await expect(reportPreview.getByRole("grid", { name: "월간 수업 달력" })).toBeVisible();
  await expect(reportPreview.getByRole("table")).toContainText("수업");
  await expect(reportPreview).toContainText("변동사항");
  await expect(reportPreview.locator(".studentMonthlyReportSummary")).toHaveCount(0);
  await expect(reportPreview).not.toContainText("출결 미입력");

  await previewDialog.getByRole("checkbox", { name: "상세 정보 표시" }).check();
  await expect(previewDialog.getByRole("checkbox", { name: "상세 정보 표시" })).toHaveCSS("width", "16px");
  await expect(previewDialog.getByRole("checkbox", { name: "달력" })).toHaveCSS("height", "16px");
  await expect(reportPreview).toContainText("개별 스케줄");
  await expect(reportPreview).toContainText(/출석 \d+ · 지각 \d+ · 결석 \d+/);
  await expect(reportPreview).not.toContainText(/미입력 \d+/);
  await reportPreview.getByRole("textbox").fill("8월 변동 일정 확인용");

  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (value) => { window.__studentMonthlyReportCopiedText = value; } }
    });
  });
  await previewDialog.getByRole("button", { name: "일정표 내용 복사" }).click();
  await expect(previewDialog.getByRole("status")).toContainText("내용을 복사했습니다");
  const copiedText = await page.evaluate(() => window.__studentMonthlyReportCopiedText);
  expect(copiedText).toContain("원장님 공유 메모");
  expect(copiedText).not.toContain("출결 미입력");
  expect(copiedText).not.toContain("예정 4회 · 출결 확인");

  await previewDialog.getByRole("checkbox", { name: "달력" }).uncheck();
  await previewDialog.getByRole("checkbox", { name: "변동사항" }).uncheck();
  const popupPromise = page.waitForEvent("popup");
  await previewDialog.getByRole("button", { name: "PDF 인쇄" }).click();
  const reportPage = await popupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("heading", { name: /정산 미리보기 학생 2026년 8월 월간 수업 안내/ })).toBeVisible();
  const printButton = reportPage.getByRole("button", { name: "인쇄하기" });
  await expect(printButton).toBeVisible();
  await reportPage.evaluate(() => {
    window.print = () => {
      window.__studentMonthlyReportManualPrintCalls = (window.__studentMonthlyReportManualPrintCalls ?? 0) + 1;
    };
  });
  await printButton.click();
  await expect.poll(() => reportPage.evaluate(() => window.__studentMonthlyReportManualPrintCalls ?? 0)).toBe(1);
  await expect(reportPage.getByRole("heading", { name: "수업·출결 표" })).toBeVisible();
  await expect(reportPage.getByRole("heading", { name: "월간 달력" })).toHaveCount(0);
  await expect(reportPage.getByRole("heading", { name: "변동사항" })).toHaveCount(0);
  await expect(reportPage.locator(".summary")).toHaveCount(0);
  await expect(reportPage.locator("body")).not.toContainText("출결 미입력");
  await expect(reportPage.locator("body")).not.toContainText(/미입력 \d+/);
  await expect(reportPage.getByText("8월 변동 일정 확인용", { exact: true })).toBeVisible();
  await reportPage.close();
  expect(pageErrors).toEqual([]);
});

test("student lesson schedule keeps a Friday makeup lesson's own time", async ({ page }) => {
  await page.route("**/api/students", async (route) => {
    const response = await route.fetch();
    const body = await response.json();
    await route.fulfill({
      response,
      json: {
        ...body,
        students: body.students.map((student) => student.studentId === "safe-settlement-student"
          ? { ...student, scheduleOverride: "금 17:00-19:00" }
          : student)
      }
    });
  });
  await page.route("**/api/lessons**", async (route) => {
    const response = await route.fetch();
    const body = await response.json();
    await route.fulfill({
      response,
      json: {
        ...body,
        lessons: [
          ...body.lessons,
          {
            className: "결석 보강 · 정산 미리보기 학생",
            date: "2026-08-07",
            endTime: "14:00",
            lessonId: "safe-settlement-friday-makeup",
            lessonType: "makeup",
            startTime: "13:00",
            status: "scheduled",
            studentIds: ["safe-settlement-student"]
          }
        ]
      }
    });
  });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  await profile.getByLabel("정산 미리보기 학생 출결 조회 월").fill("2026-08");
  await profile.getByRole("button", { name: "수업일정표" }).click();

  const previewDialog = page.getByRole("dialog", { name: /정산 미리보기 학생 2026년 8월 수업일정표/ });
  const makeupRow = previewDialog.getByRole("row").filter({ hasText: "8.7(금)" }).filter({ hasText: "보강" });
  await expect(makeupRow).toContainText("13:00-14:00");
  await expect(makeupRow).not.toContainText("17:00-19:00");
});
