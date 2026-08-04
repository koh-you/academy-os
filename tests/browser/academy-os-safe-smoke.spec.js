import { expect, test } from "@playwright/test";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error));
  return errors;
}

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
      const response = await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
      return response.ok();
    } catch {
      return false;
    }
  }, { timeout: 10_000 }).toBe(true);
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
  await selectionDialog.getByRole("button", { name: /결석보강 가상수업/ }).click();
  await expect(selectionDialog).toContainText("연속 수업으로 처리: 결석보강 가상수업 → 고1 정규 가상수업");
  await expect(selectionDialog).toContainText("등원 알림은 지금 한 번, 하원 알림은 마지막 수업 뒤 한 번만 전송합니다.");
  await selectionDialog.getByRole("button", { name: "확인" }).click();
  await expect(pinInput).toBeEnabled();

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
  await checkoutDialog.getByRole("button", { name: "확인" }).click();
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

test("Tally candidate rapid edits serialize, rebase CAS, and persist the verified latest input", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let releaseFirstRequest;
  const firstRequestGate = new Promise((resolve) => {
    releaseFirstRequest = resolve;
  });
  await page.route("**/api/student-intake-applicants", async (route) => {
    if (route.request().method() !== "POST") {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    if (requests.length === 1) await firstRequestGate;
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: "+ 학생 추가" }).click();
  const studentModal = page.getByRole("dialog", { name: "학생 추가" });
  await studentModal.getByRole("button", { name: "Tally 접수" }).click();
  const candidateList = studentModal.getByRole("region", { name: "Tally 접수·등록 후보 목록" });
  const learningProcessInput = candidateList.getByLabel("현재 학습 과정");

  await learningProcessInput.fill("직렬화 첫 입력");
  await expect.poll(() => requests.length).toBe(1);
  await learningProcessInput.fill("직렬화 최신 입력");
  await expect(learningProcessInput).toHaveValue("직렬화 최신 입력");
  expect(requests).toHaveLength(1);

  releaseFirstRequest();
  await expect.poll(() => requests.length).toBe(2);
  expect(requests[0].applicant.currentLearningProcess).toBe("직렬화 첫 입력");
  expect(requests[1].applicant.currentLearningProcess).toBe("직렬화 최신 입력");
  expect(requests[1].expectedUpdatedAt).not.toBe(requests[0].expectedUpdatedAt);
  await expect(candidateList.getByRole("status")).toContainText("접수정보 · 저장 완료");

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/student-intake-applicants`);
  const persistedResult = await persistedResponse.json();
  expect(
    persistedResult.applicants.find((item) => item.applicantId === "safe-intake-applicant")
      ?.currentLearningProcess
  ).toBe("직렬화 최신 입력");
  expect(pageErrors).toEqual([]);
});

test("Tally candidate CAS conflict keeps the current input and shows failure", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  let conflictEnabled = false;
  let mutationRequests = 0;
  await page.route("**/api/student-intake-applicants", async (route) => {
    if (route.request().method() !== "POST" || !conflictEnabled) {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    mutationRequests += 1;
    await route.fulfill({
      contentType: "application/json",
      status: 409,
      body: JSON.stringify({
        code: "STUDENT_INTAKE_APPLICANT_CONFLICT",
        error: "다른 화면에서 먼저 변경되었습니다.",
        ok: false
      })
    });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: "+ 학생 추가" }).click();
  const studentModal = page.getByRole("dialog", { name: "학생 추가" });
  await studentModal.getByRole("button", { name: "Tally 접수" }).click();
  const candidateList = studentModal.getByRole("region", { name: "Tally 접수·등록 후보 목록" });
  const specialNoteInput = candidateList.getByLabel("특이사항");

  conflictEnabled = true;
  await specialNoteInput.fill("충돌해도 보존할 Tally 입력");
  await expect(candidateList.getByRole("status")).toContainText("접수정보 · 저장 실패");
  await expect(specialNoteInput).toHaveValue("충돌해도 보존할 Tally 입력");
  expect(mutationRequests).toBe(1);
  expect(pageErrors).toEqual([]);
});

test("manual student creation keeps the modal draft on conflict and closes only after verified retry", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let studentSaveRequests = 0;
  await page.route("**/api/class-rosters/save", async (route) => {
    studentSaveRequests += 1;
    if (studentSaveRequests === 1) {
      await route.fulfill({
        body: JSON.stringify({
          code: "STUDENT_CONFLICT",
          error: "같은 학생 ID 또는 로그인 ID가 이미 저장되어 있습니다.",
          ok: false
        }),
        contentType: "application/json",
        status: 409
      });
      return;
    }
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: "+ 학생 추가" }).click();
  const studentModal = page.getByRole("dialog", { name: "학생 추가" });
  const nameInput = studentModal.getByLabel("이름", { exact: true });
  await nameInput.fill("저장경계 학생");
  await studentModal.getByLabel("학교", { exact: true }).fill("저장경계고");
  await studentModal.getByRole("button", { name: "학생 저장", exact: true }).click();

  await expect(studentModal.getByRole("alert")).toContainText("학생 저장 실패");
  await expect(nameInput).toHaveValue("저장경계 학생");
  await expect(studentModal).toBeVisible();

  await studentModal.getByRole("button", { name: "학생 저장", exact: true }).click();
  await expect(studentModal).toBeHidden();
  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/students`);
  const persistedResult = await persistedResponse.json();
  const persistedStudent = persistedResult.students.find((student) => student.name === "저장경계 학생");
  expect(persistedStudent?.schoolName).toBe("저장경계고");
  expect(persistedStudent?.updatedAt).toBeTruthy();
  expect(pageErrors).toEqual([]);
});

test("class roster save keeps the modal draft on conflict and verifies student plus future lessons on retry", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-03T09:00:00+09:00") });
  let rosterSaveRequests = 0;
  await page.route("**/api/class-rosters/save", async (route) => {
    rosterSaveRequests += 1;
    if (rosterSaveRequests === 1) {
      await route.fulfill({
        body: JSON.stringify({
          audit: { auditId: route.request().postDataJSON().auditId, failedStage: "lessons", rollback: { verified: true } },
          code: "CLASS_ROSTER_SAVE_FAILED",
          error: "미래 수업 명단이 다른 화면에서 먼저 변경되었습니다.",
          ok: false
        }),
        contentType: "application/json",
        status: 409
      });
      return;
    }
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /반관리/ }).click();
  await page.getByRole("button", { name: "명단 수정" }).click();
  const rosterModal = page.getByRole("dialog", { name: "정산 미리보기반 명단 수정" });
  const studentCheckbox = rosterModal.getByRole("checkbox", { name: /정산 미리보기 학생/ });
  await studentCheckbox.uncheck();
  await rosterModal.getByRole("button", { name: "명단 저장" }).click();

  await expect(rosterModal.getByRole("alert")).toContainText("미래 수업 명단이 다른 화면에서 먼저 변경되었습니다.");
  await expect(studentCheckbox).not.toBeChecked();
  await expect(rosterModal).toBeVisible();

  await rosterModal.getByRole("button", { name: "다시 저장" }).click();
  await expect(rosterModal).toBeHidden();
  const [studentsResponse, lessonsResponse] = await Promise.all([
    request.get(`${safeApiBaseUrl}/api/students`),
    request.get(`${safeApiBaseUrl}/api/lessons`)
  ]);
  const persistedStudents = (await studentsResponse.json()).students;
  const persistedLessons = (await lessonsResponse.json()).lessons;
  expect(persistedStudents.find((student) => student.studentId === "safe-settlement-student")?.defaultClassTemplateId).toBe("");
  expect(persistedLessons.find((lesson) => lesson.lessonId === "safe-settlement-future-roster")?.studentIds).not.toContain("safe-settlement-student");
  expect(persistedLessons.find((lesson) => lesson.lessonId === "safe-settlement-august-regular")?.studentIds).toContain("safe-settlement-student");
  expect(pageErrors).toEqual([]);
});

test("student row save rebases its version and preserves an in-flight follow-up edit", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let releaseFirstRequest;
  const firstRequestGate = new Promise((resolve) => {
    releaseFirstRequest = resolve;
  });
  await page.route("**/api/students", async (route) => {
    if (route.request().method() !== "POST") {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    if (requests.length === 1) await firstRequestGate;
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  const studentRow = page.locator(".studentListRow").filter({ hasText: "월경계 학생" });
  const schoolInput = studentRow.getByLabel("월경계 학생 학교");
  await schoolInput.fill("A 저장 학교");
  await studentRow.getByRole("button", { name: "저장", exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  await schoolInput.fill("B 후속 학교");
  releaseFirstRequest();

  await expect(schoolInput).toHaveValue("B 후속 학교");
  await expect(studentRow.getByRole("button", { name: "저장", exact: true })).toBeEnabled();
  await studentRow.getByRole("button", { name: "저장", exact: true }).click();
  await expect(studentRow.getByRole("button", { name: "저장됨", exact: true })).toBeVisible();
  expect(requests).toHaveLength(2);
  expect(requests[1].expectedUpdatedAt).not.toBe(requests[0].expectedUpdatedAt);

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/students`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.students.find((student) => student.studentId === "safe-active-student")?.schoolName).toBe("B 후속 학교");
  expect(pageErrors).toEqual([]);
});

test("student profile save keeps an in-flight follow-up draft for a second CAS save", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let releaseFirstRequest;
  const firstRequestGate = new Promise((resolve) => {
    releaseFirstRequest = resolve;
  });
  await page.route("**/api/students", async (route) => {
    if (route.request().method() !== "POST") {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    if (requests.length === 1) await firstRequestGate;
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /월경계 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /월경계 학생 학생 프로파일/ });
  await profile.getByRole("button", { name: "수정", exact: true }).click();
  const profileSaveButton = profile.locator(".studentProfileStickySaveBar .saveButton");
  await expect(profileSaveButton).toBeDisabled();
  await expect(profileSaveButton).toHaveCSS("cursor", "not-allowed");
  const schoolInput = profile.getByLabel("월경계 학생 학교");
  await schoolInput.fill("프로필 A 저장");
  await profile.getByRole("button", { name: "기본정보만 저장", exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  await expect(profileSaveButton).toHaveText("저장 중");
  await expect(profileSaveButton).toHaveCSS("cursor", "wait");
  await schoolInput.fill("프로필 B 후속");
  releaseFirstRequest();

  await expect(schoolInput).toHaveValue("프로필 B 후속");
  await expect(profile.getByRole("button", { name: "기본정보만 저장", exact: true })).toBeEnabled();
  await profile.getByRole("button", { name: "기본정보만 저장", exact: true }).click();
  await expect(profile.getByText("프로필 B 후속", { exact: true })).toBeVisible();
  expect(requests).toHaveLength(2);
  expect(requests[1].expectedUpdatedAt).not.toBe(requests[0].expectedUpdatedAt);

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/students`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.students.find((student) => student.studentId === "safe-active-student")?.schoolName).toBe("프로필 B 후속");
  expect(pageErrors).toEqual([]);
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

test("exam analysis run metadata and teacher question count save to the safe source and survive reload", async ({ page, request }) => {
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

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).click();
  await expect(page.getByRole("region", { name: "시험분석 분석본 목록" }).getByText(title, { exact: true })).toBeVisible();
  await page.getByRole("tab", { name: /문항 구조/ }).click();
  await expect(page.getByText("12문항 확정", { exact: true }).first()).toBeVisible();
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

test("resource material converges an edited draft after an unknown insert, survives reload, and preserves rows on delete conflict", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const postRequests = [];
  let releaseSave;
  const saveGate = new Promise((resolve) => {
    releaseSave = resolve;
  });
  await page.route("**/api/resource-materials", async (route) => {
    if (route.request().method() !== "POST") return route.continue();
    postRequests.push(route.request().postDataJSON());
    const response = await route.fetch();
    if (postRequests.length === 1) {
      await saveGate;
      return route.fulfill({
        contentType: "application/json",
        json: { error: "첫 저장 응답을 확인하지 못했습니다.", ok: false },
        status: 504
      });
    }
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /자료함/ }).click();
  const form = page.locator("form.resourceForm");
  await expect(form.getByText(/private Storage에 업로드됩니다/)).toBeVisible();
  await form.getByLabel("자료명").fill("안전 자료함 저장 계약");
  await expect(form.getByText("자료 등록 · 변경됨")).toBeVisible();
  await form.getByLabel("파일명").fill("safe-resource.pdf");
  await form.getByRole("button", { name: "자료 등록" }).click();

  await expect(form.locator("fieldset")).toHaveAttribute("disabled", "");
  await expect(form.getByLabel("자료명")).toHaveValue("안전 자료함 저장 계약");
  await expect(page.locator(".resourceListItem")).toHaveCount(0);
  await expect(page.locator(".resourceMaterialSaveFeedback.saving")).toContainText("저장 중");
  releaseSave();

  await expect(page.locator(".resourceMaterialSaveFeedback.failed")).toContainText("첫 저장 응답을 확인하지 못했습니다.");
  await expect(page.locator(".resourceListItem")).toHaveCount(0);
  await expect(form.getByLabel("자료명")).toHaveValue("안전 자료함 저장 계약");
  await form.getByLabel("자료명").fill("안전 자료함 최신 초안");
  await form.getByLabel("파일명").fill("safe-resource-latest.pdf");
  await form.getByRole("button", { name: "자료 등록" }).click();

  await expect(page.locator(".resourceListItem")).toContainText("안전 자료함 최신 초안");
  await expect(form.getByLabel("자료명")).toHaveValue("");
  await expect(page.locator(".resourceMaterialSaveFeedback.saved")).toContainText("Supabase 저장 및 목록 재조회 확인 완료");
  expect(postRequests).toHaveLength(2);
  expect(postRequests[1].material.materialId).toBe(postRequests[0].material.materialId);
  expect(postRequests[1].material.createdAt).toBe(postRequests[0].material.createdAt);

  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const savedRow = page.locator(".resourceListItem").filter({ hasText: "안전 자료함 최신 초안" });
  await expect(savedRow).toHaveCount(1);

  await page.route("**/api/resource-material-files", (route) => {
    if (route.request().method() !== "DELETE") return route.continue();
    return route.fulfill({
      contentType: "application/json",
      json: { code: "RESOURCE_MATERIAL_CONFLICT", error: "다른 화면에서 먼저 변경되었습니다.", ok: false },
      status: 409
    });
  });
  await savedRow.getByRole("button", { name: "삭제" }).click();
  await expect(savedRow).toHaveCount(1);
  await expect(savedRow.locator(".resourceMaterialSaveFeedback.failed")).toContainText("다른 화면에서 먼저 변경되었습니다.");
  expect(pageErrors).toEqual([]);
});

test("resource material file uploads privately, opens through an authenticated URL, survives reload, and deletes both sources", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const form = page.locator("form.resourceForm");
  await form.getByLabel("자료명").fill("안전 Storage 자료");
  await form.getByLabel("자료 파일 선택").setInputFiles({
    buffer: Buffer.from("safe resource material fixture"),
    mimeType: "text/plain",
    name: "safe-storage-resource.txt"
  });
  await expect(form.getByLabel("파일명")).toHaveValue("safe-storage-resource.txt");
  await expect(form.getByLabel("파일명")).toBeDisabled();
  await form.getByRole("button", { name: "자료 등록" }).click();

  const row = page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" });
  await expect(row).toHaveCount(1);
  await expect(page.locator(".resourceMaterialSaveFeedback.saved")).toContainText("Storage 업로드와 Supabase row 재조회 확인 완료");

  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const reloadedRow = page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" });
  await expect(reloadedRow).toHaveCount(1);

  const popupPromise = page.waitForEvent("popup");
  await reloadedRow.getByRole("button", { name: "열기" }).click();
  const popup = await popupPromise;
  await expect.poll(() => popup.url()).toContain("/api/safe-fixture/resource-material-file?path=");
  await popup.close();

  await reloadedRow.getByRole("button", { name: "삭제" }).click();
  await expect(reloadedRow).toHaveCount(0);
  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  await expect(page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" })).toHaveCount(0);
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

test("manual school event keeps its draft and stable id across an unknown save result, then verifies delete", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let postCount = 0;
  let releaseDeleteRequest;
  const deleteRequestGate = new Promise((resolve) => {
    releaseDeleteRequest = resolve;
  });
  await page.route("**/api/school-events*", async (route) => {
    if (route.request().method() === "DELETE") {
      await deleteRequestGate;
      await route.continue();
      return;
    }
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    postCount += 1;
    if (postCount === 1) {
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학사일정/ }).click();
  await page.getByRole("button", { name: "+ 일정 등록" }).first().click();
  const form = page.getByRole("dialog", { name: "일정 등록" });
  await form.locator(".inputTypeField select").selectOption("schoolEvent");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학교/ }).locator("select").selectOption("안전고");
  const titleInput = form.locator('input[placeholder="예: 1학기 기말고사"]');
  await titleInput.fill("안전 저장 학사일정");
  const eventDate = await form.locator('.calendarDateGrid input[type="date"]').first().inputValue();

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toHaveAttribute("aria-busy", "true");
  await expect(form.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  await expect(page.locator(".schoolCalendarSaveNotice")).toHaveClass(/failed/);
  await expect(titleInput).toHaveValue("안전 저장 학사일정");

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toBeHidden();
  expect(postCount).toBe(2);
  await expect(page.locator(".schoolCalendarSaveNotice")).toContainText("저장 완료");

  await page.getByRole("gridcell", { name: new RegExp(eventDate) }).click();
  const dateModal = page.getByRole("dialog", { name: `${eventDate} 일정` });
  await expect(dateModal.locator('.fieldGrid input:not([type="date"])')).toHaveValue("안전 저장 학사일정");
  await dateModal.getByRole("button", { name: "삭제" }).click();
  await expect(dateModal).toHaveAttribute("aria-busy", "true");
  await expect(dateModal.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  releaseDeleteRequest();
  await expect(dateModal).toContainText("선택한 날짜에 등록된 일정이 없습니다.");

  const source = await request.get(`${safeApiBaseUrl}/api/school-events`);
  const sourceBody = await source.json();
  expect(sourceBody.schoolEvents).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("derived math exam saves its exam row and pre-exam lesson as one retry-safe action", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  let postCount = 0;
  await page.route("**/api/school-calendar/derived-save", async (route) => {
    postCount += 1;
    if (postCount === 1) {
      await route.fetch();
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학사일정/ }).click();
  await page.getByRole("button", { name: "+ 일정 등록" }).first().click();
  const form = page.getByRole("dialog", { name: "일정 등록" });
  await form.locator(".inputTypeField select").selectOption("mathExam");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학교/ }).locator("select").selectOption("안전고");
  await form.locator(".schoolEventFormPanel > label").filter({ hasText: /^학년/ }).locator("select").selectOption("고1");
  await form.locator('input[placeholder="예: 수학"]').fill("공통수학1");
  const examDateInput = form.locator('.examSubjectRow input[type="date"]');
  const examDate = await examDateInput.inputValue();

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toHaveAttribute("aria-busy", "true");
  await expect(examDateInput).toBeDisabled();
  await expect(form.getByRole("button", { name: "창 닫기" })).toBeDisabled();
  await expect(page.locator(".schoolCalendarSaveNotice")).toHaveClass(/failed/);
  await expect(form).toBeVisible();
  await expect(examDateInput).toHaveValue(examDate);

  await form.getByRole("button", { name: "일정 등록" }).click();
  await expect(form).toBeHidden();
  expect(postCount).toBe(2);
  await expect(page.locator(".schoolCalendarSaveNotice")).toContainText("시험관리 · 직전수업 저장 완료");

  const [rowResponse, lessonResponse] = await Promise.all([
    request.get(`${safeApiBaseUrl}/api/exam-prep-rows`),
    request.get(`${safeApiBaseUrl}/api/lessons`)
  ]);
  const rowBody = await rowResponse.json();
  const lessonBody = await lessonResponse.json();
  const savedRow = rowBody.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row");
  expect(savedRow.mathExamDate).toBe(examDate);
  expect(savedRow.mathExamDates).toHaveLength(1);
  const preExamLesson = lessonBody.lessons.find((lesson) => lesson.lessonType === "preExam" && lesson.sourceSchoolEventId);
  expect(preExamLesson).toBeTruthy();
  expect(preExamLesson.studentIds).toContain("safe-settlement-student");
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
  await page.getByRole("button", { name: "전체 반" }).click();

  const middleSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전중" });
  await expect(middleSchoolRow).toBeVisible();
  await expect(middleSchoolRow).toContainText("미입력");
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

test("exam prep rapid edits serialize, rebase CAS, and persist the verified latest row value", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  let releaseFirstRequest;
  const firstRequestGate = new Promise((resolve) => {
    releaseFirstRequest = resolve;
  });
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (!captureRequests) {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    if (requests.length === 1) await firstRequestGate;
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();

  const scopeInput = page.getByLabel("안전고 시험 범위");
  await expect(scopeInput).toBeVisible();
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await scopeInput.fill("직렬화 첫 입력");
  await expect.poll(() => requests.length).toBe(1);

  await scopeInput.fill("직렬화 중간 입력");
  await scopeInput.fill("직렬화 최신 입력");
  await new Promise((resolve) => setTimeout(resolve, 100));
  expect(requests).toHaveLength(1);

  releaseFirstRequest();
  await expect.poll(() => requests.length).toBe(2);
  expect(requests[0].examPrepRows[0].scope).toBe("직렬화 첫 입력");
  expect(requests[1].examPrepRows[0].scope).toBe("직렬화 최신 입력");
  expect(requests[1].examPrepRows[0].updatedAt).not.toBe(requests[0].examPrepRows[0].updatedAt);
  await expect(scopeInput.locator("xpath=..").getByText("저장 완료")).toBeVisible();
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
  const scopeInput = page.getByLabel("안전고 시험 범위");
  await page.waitForLoadState("networkidle");
  conflictEnabled = true;
  await scopeInput.fill("충돌해도 유지할 입력");
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  await expect(scopeInput.locator("xpath=../..").getByText("저장 실패")).toBeVisible();
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  expect(pageErrors).toEqual([]);
});

test("withdrawn student list keeps its table and selection toolbar boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("tab", { name: "퇴원생 목록" }).click();

  const withdrawnList = page.getByRole("region", { name: "퇴원생 목록" });
  await expect(withdrawnList).toContainText("미리보기 퇴원생");
  await expect(withdrawnList.getByLabel("미리보기 퇴원생 퇴원 사유")).toBeVisible();
  await withdrawnList.getByRole("checkbox").check();

  const selectionToolbar = page.getByRole("group", { name: "퇴원생 선택" });
  await expect(selectionToolbar).toContainText("선택 1명");
  await expect(selectionToolbar.getByRole("button", { name: "퇴원 취소" })).toBeEnabled();
  await expect(selectionToolbar.getByRole("button", { name: "영구 삭제" })).toBeEnabled();
  expect(pageErrors).toEqual([]);
});

test("notification and special lecture screens render through the extracted boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /알림관리/ }).click();
  await expect(page.getByRole("heading", { name: "알림관리" })).toBeVisible();
  const composeTab = page.getByRole("tab", { name: "개별 발송" });
  await expect(composeTab).toBeVisible();
  await page.getByRole("tab", { name: /발송 완료/ }).click();
  await expect(page.getByText("NOTIFICATION HISTORY")).toBeVisible();
  await composeTab.click();
  const noticeTitle = page.getByPlaceholder("예: 휴원 안내, 보강 안내");
  const noticeBody = page.getByPlaceholder("보낼 공지 내용을 입력하세요.");
  await noticeTitle.fill("안전 경계 확인");
  await noticeBody.fill("실제 발송 없이 local draft만 확인합니다.");
  await expect(page.getByText("[안전 경계 확인] 실제 발송 없이 local draft만 확인합니다.")).toBeVisible();

  await navigation.getByRole("button", { name: /특강관리/ }).click();
  await expect(page.getByRole("heading", { name: "특강관리" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "특강 안내문" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("notification settings seed new notice and special lecture drafts without provider actions", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /설정/ }).click();
  await page.getByRole("tab", { name: "알림톡 문구" }).click();
  await expect(page.locator(".notificationTemplateEditor")).toHaveCount(10);
  await expect(page.getByText("재시험 학생 11시 알림톡")).toHaveCount(0);
  await page.getByLabel("교재 공지 초안 템플릿 문구").fill("안전 설정 교재 공지 초안");
  await page.getByLabel("특강 안내문 공지 초안 템플릿 문구").fill("안전 설정 특강 #{특강명}\n#{안내문링크}");
  await expect(page.getByRole("status").filter({ hasText: "설정 자동저장 · 저장 완료" })).toBeVisible();

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await navigation.getByRole("button", { name: /설정/ }).click();
  await page.getByRole("tab", { name: "알림톡 문구" }).click();
  await expect(page.getByLabel("교재 공지 초안 템플릿 문구")).toHaveValue("안전 설정 교재 공지 초안");
  await expect(page.getByLabel("특강 안내문 공지 초안 템플릿 문구")).toHaveValue("안전 설정 특강 #{특강명}\n#{안내문링크}");

  await navigation.getByRole("button", { name: /알림관리/ }).click();
  await page.getByLabel("템플릿").selectOption("material");
  const noticeBody = page.getByPlaceholder("보낼 공지 내용을 입력하세요.");
  await expect(noticeBody).toHaveValue("안전 설정 교재 공지 초안");
  await noticeBody.fill("교사가 편집한 local 최종 문구");
  await expect(noticeBody).toHaveValue("교사가 편집한 local 최종 문구");

  await navigation.getByRole("button", { name: /특강관리/ }).click();
  await page.getByRole("tab", { name: "특강 안내문" }).click();
  await page.getByRole("tab", { name: "알림톡 미리보기" }).click();
  await expect(page.locator(".specialLectureNoticePreview")).toContainText("안전 설정 특강");
  expect(pageErrors).toEqual([]);
});

test("notification reserve contract stays canonical in the safe API without provider actions", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
        forceDryRun: true,
        notificationJob: {
          notificationJobId: "safe-contract-reserve-job",
          notificationType: "notice_parent",
          scheduledAt: "2099-08-05T12:00:00.000Z",
          status: "scheduled"
        },
        reason: "safe browser contract"
    }
  });
  expect(reservationResponse.status()).toBe(200);
  expect(await reservationResponse.json()).toMatchObject({
    notificationJob: {
      notificationJobId: "safe-contract-reserve-job",
      provider: "academy-os",
      status: "dry_run"
    },
    ok: true,
    reserved: false,
    safeFixture: true,
    source: "supabase"
  });

  const rejectedLegacyResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
        notificationJobId: "legacy-direct-job",
        notificationType: "notice_parent",
        status: "scheduled"
    }
  });
  expect(rejectedLegacyResponse.status()).toBe(400);
  expect(await rejectedLegacyResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "notificationJobId",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification bulk reserve contract keeps per-job dry-run results in the safe API", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;
  const notificationJobs = [
    {
      notificationJobId: "safe-contract-bulk-parent",
      notificationType: "notice_parent",
      scheduledAt: "2099-08-05T12:00:00.000Z",
      status: "scheduled"
    },
    {
      notificationJobId: "safe-contract-bulk-student",
      notificationType: "notice_student",
      scheduledAt: "2099-08-05T12:00:00.000Z",
      status: "scheduled"
    }
  ];

  const bulkResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve-bulk`, {
    data: {
      concurrency: 2,
      forceDryRun: true,
      notificationJobs,
      reason: "safe browser bulk contract"
    }
  });
  expect(bulkResponse.status()).toBe(200);
  const bulkResult = await bulkResponse.json();
  expect(bulkResult).toMatchObject({
    failedCount: 0,
    ok: true,
    reservedCount: 0,
    reusedCount: 0,
    safeFixture: true,
    source: "supabase"
  });
  expect(bulkResult.notificationJobs).toEqual(notificationJobs.map((job) => expect.objectContaining({
    notificationJobId: job.notificationJobId,
    provider: "academy-os",
    status: "dry_run"
  })));
  expect(bulkResult.results).toHaveLength(2);
  expect(bulkResult.results.every((result) => result.reserved === false && result.source === "supabase")).toBe(true);

  const rejectedResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve-bulk`, {
    data: { notificationJob: notificationJobs[0] }
  });
  expect(rejectedResponse.status()).toBe(400);
  expect(await rejectedResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "notificationJob",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification readiness contract checks safe source jobs without Slack side effects", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;
  const notificationJobId = "safe-contract-readiness-missing-body";

  const sourceResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs`, {
    data: {
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        payload: { studentName: "안전학생" },
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      }
    }
  });
  expect(sourceResponse.status()).toBe(200);

  const readinessResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/readiness-check`, {
    data: {
      notifySlack: false,
      now: "2099-08-05T11:45:00.000Z",
      windowMinutes: 60
    }
  });
  expect(readinessResponse.status()).toBe(200);
  expect(await readinessResponse.json()).toMatchObject({
    checkedCount: 1,
    issueCount: 1,
    issues: [{
      missing: ["공지 본문"],
      notificationJobId,
      notificationType: "notice_parent",
      studentName: "안전학생"
    }],
    ok: true,
    safeFixture: true,
    slack: null,
    source: "supabase",
    windowMinutes: 60
  });

  const blockedSlackResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/readiness-check`, {
    data: { notifySlack: true }
  });
  expect(blockedSlackResponse.status()).toBe(400);
  expect(await blockedSlackResponse.json()).toMatchObject({
    error: "안전 fixture에서는 Slack 알림을 보낼 수 없습니다.",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification dispatch contract preserves safe jobs and rejects sensitive overrides", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;
  const notificationJobId = "safe-contract-dispatch-preserved";

  const sourceResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs`, {
    data: {
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        payload: { message: "안전 자동 처리 보존" },
        scheduledAt: "2026-08-05T00:00:00.000Z",
        status: "scheduled"
      }
    }
  });
  expect(sourceResponse.status()).toBe(200);

  const dispatchResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { forceDryRun: false, limit: 1 }
  });
  expect(dispatchResponse.status()).toBe(200);
  expect(await dispatchResponse.json()).toMatchObject({
    automaticSolapiReconcile: {
      checkedCount: 0,
      source: "safe-provider",
      updatedCount: 0
    },
    dryRun: true,
    ok: true,
    processed: [],
    processedCount: 0,
    safeFixture: true,
    source: "supabase"
  });

  const jobsResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect(jobsResponse.status()).toBe(200);
  const jobsResult = await jobsResponse.json();
  expect(jobsResult.notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId,
    status: "scheduled"
  }));

  const blockedOverrideResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { forceDryRun: true, limit: 1, now: "2099-08-05T00:00:00.000Z" }
  });
  expect(blockedOverrideResponse.status()).toBe(401);
  expect(await blockedOverrideResponse.json()).toMatchObject({
    error: "안전 fixture에서는 알림 자동 처리 override를 사용할 수 없습니다.",
    ok: false,
    safeFixture: true
  });

  const invalidResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { limit: "1" }
  });
  expect(invalidResponse.status()).toBe(400);
  expect(await invalidResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "limit",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification cancel contract persists the source state without provider actions in the safe API", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
      forceDryRun: true,
      notificationJob: {
        notificationJobId: "safe-contract-cancel-job",
        notificationType: "notice_parent",
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      },
      reason: "safe browser cancellation setup"
    }
  });
  expect(reservationResponse.status()).toBe(200);

  const cancellationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/cancel`, {
    data: {
      cancelSolapi: false,
      notificationJobId: "safe-contract-cancel-job",
      reason: "safe browser contract cancellation"
    }
  });
  expect(cancellationResponse.status()).toBe(200);
  expect(await cancellationResponse.json()).toMatchObject({
    notificationJob: {
      error: "safe browser contract cancellation",
      notificationJobId: "safe-contract-cancel-job",
      status: "canceled"
    },
    ok: true,
    safeFixture: true,
    solapiCancellation: null,
    source: "supabase"
  });

  const sourceResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect(sourceResponse.status()).toBe(200);
  expect((await sourceResponse.json()).notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId: "safe-contract-cancel-job",
    status: "canceled"
  }));
  expect(pageErrors).toEqual([]);
});

test("notification reconcile contract reads the safe provider without mutating source jobs", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${process.env.ACADEMY_SAFE_API_PORT || 8787}`;
  const notificationJobId = "safe-contract-reconcile-job";

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
      forceDryRun: true,
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      },
      reason: "safe browser reconcile setup"
    }
  });
  expect(reservationResponse.status()).toBe(200);

  const reconcileResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reconcile-solapi`, {
    data: { notificationJobIds: [notificationJobId] }
  });
  expect(reconcileResponse.status()).toBe(200);
  expect(await reconcileResponse.json()).toMatchObject({
    checked: [{ notificationJobId, status: "safe_fixture", updated: false }],
    checkedCount: 1,
    notificationJobs: [],
    ok: true,
    records: [],
    safeFixture: true,
    source: "safe-provider",
    updatedCount: 0
  });

  const sourceResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect((await sourceResponse.json()).notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId,
    provider: "academy-os",
    status: "dry_run"
  }));
  expect(pageErrors).toEqual([]);
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

test("individual weekdays override the base-class roster but preserve a manual makeup roster", async ({ page }) => {
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
            name: "개별일정 학생",
            pin: "1234",
            scheduleOverride: "월금 17:00-19:00",
            schoolName: "안전중",
            status: "active",
            studentId: "safe-schedule-priority-student"
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
          { ...sharedLesson, className: "결석 보강 · 개별일정 학생", lessonId: "safe-schedule-priority-makeup", lessonType: "makeup" }
        ]
      }
    });
  });

  await loginAsTeacher(page);
  const calendarDay = page.getByRole("gridcell", { name: /^2026-08-05 · \d+개 수업$/ });
  await expect(calendarDay.locator(".lessonPill").filter({ hasText: /^17:00/ })).toHaveText([
    "17:00 결석 보강 · 개별일정 학생 (1명)",
    "17:00 월수금 앞반 (0명)"
  ]);
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

test("monthly settlement counts closure replacement and distinguishes attendance colors", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /정산/ }).click();
  await expect(page.getByRole("heading", { name: "월별 수업 정산" })).toBeVisible();
  await page.getByLabel("정산월").fill("2026-07");

  const settlementRow = page.getByRole("row").filter({ hasText: "정산 미리보기 학생" });
  await expect(settlementRow.getByRole("button", { name: /정규 3회/ })).toBeVisible();
  await expect(settlementRow).toContainText("휴강 1회 · 정규 회차 포함");
  await expect(settlementRow).toContainText("연결 보강 1회 · 추가 계산 없음");
  await expect(settlementRow).toContainText("대기 1회 · 출결 미확정");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();

  const calendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  expect(await calendar.evaluate((element) => element.getBoundingClientRect().width)).toBeGreaterThan(1100);
  expect(await calendar.locator(".monthlySettlementCalendarShell").evaluate(
    (element) => element.scrollWidth <= element.clientWidth
  )).toBe(true);
  const presentEvent = calendar.locator(".monthlySettlementCalendarEvent.regular.attendance-present");
  const absentReplacement = calendar.locator(".monthlySettlementCalendarEvent.regularReplacement.attendance-absent");
  const pendingEvent = calendar.locator(".monthlySettlementCalendarEvent.regular.attendance-pending");
  await expect(presentEvent).toContainText("출석");
  await expect(absentReplacement).toContainText("휴강 보충 · 결석");
  await expect(absentReplacement).toHaveAttribute("title", /13:00-16:00/);
  await expect(pendingEvent).toContainText("대기");
  await expect(calendar).toContainText("휴강 1회 · 정규 회차 포함");
  await expect(calendar).toContainText("연결 보강 1회 · 추가 계산 없음");
  await expect(calendar).toContainText("시스템 계산 횟수");
  const finalCountInput = calendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" });
  await finalCountInput.fill("4");
  await expect(calendar).toContainText("교사 확정 최종 정규 횟수: 4회");
  const settlementSaveBar = calendar.getByRole("complementary", { name: /최종 정규 횟수 하단 고정 저장 바/ });
  await settlementSaveBar.getByRole("button", { name: "최종 정규 횟수 저장 및 확인" }).click();
  await expect(settlementSaveBar.getByRole("button", { name: "저장 및 확인 중" })).toBeDisabled();
  await finalCountInput.fill("5");
  await expect(finalCountInput).toHaveValue("5");
  await calendar.getByRole("button", { name: "창 닫기" }).click();
  const settlementMonthControl = page.getByRole("group", { name: "월별 정산 대상 월" });
  await settlementMonthControl.getByLabel("정산월").fill("2026-08");
  await expect(settlementMonthControl.getByRole("status")).toContainText("변경됨");
  await page.getByLabel("정산월").fill("2026-07");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();
  const recoveredCalendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  const recoveredFinalCountInput = recoveredCalendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" });
  await expect(recoveredFinalCountInput).toHaveValue("5");
  const recoveredSaveBar = recoveredCalendar.getByRole("complementary", { name: /최종 정규 횟수 하단 고정 저장 바/ });
  await recoveredSaveBar.getByRole("button", { name: "최종 정규 횟수 저장 및 확인" }).click();
  await expect(recoveredSaveBar).toContainText("저장 완료");
  await expect(recoveredFinalCountInput).toHaveValue("5");
  await recoveredCalendar.getByRole("button", { name: "창 닫기" }).click();
  await expect(settlementRow).toContainText("최종 정규 5회 · 교사 확정");
  await settlementRow.getByRole("button", { name: /정규 3회/ }).click();
  const reopenedCalendar = page.getByRole("dialog", { name: /정산 미리보기 학생 월별 출결·수업/ });
  await expect(reopenedCalendar.getByRole("spinbutton", { name: "정산 미리보기 학생 최종 정규 횟수" })).toHaveValue("5");
  const [presentColor, absentColor, pendingColor] = await Promise.all([
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regular.attendance-present").evaluate((element) => getComputedStyle(element).backgroundColor),
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regularReplacement.attendance-absent").evaluate((element) => getComputedStyle(element).backgroundColor),
    reopenedCalendar.locator(".monthlySettlementCalendarEvent.regular.attendance-pending").evaluate((element) => getComputedStyle(element).backgroundColor)
  ]);
  expect(presentColor).not.toBe(absentColor);
  expect(pendingColor).not.toBe(presentColor);
  expect(pendingColor).not.toBe(absentColor);
  await reopenedCalendar.getByRole("button", { name: "창 닫기" }).click();
  const reportPopupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "횟수·금액 PDF" }).click();
  const reportPage = await reportPopupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("row").filter({ hasText: "정산 미리보기 학생" })).toContainText("5회");
  await expect(reportPage.getByRole("button", { name: "인쇄하기" })).toBeVisible();
  await reportPage.close();
  expect(pageErrors).toEqual([]);
});

test("settlement exposes special attendance, combined student attendance, and concise PDF report", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-02T09:00:00+09:00") });
  await page.addInitScript(() => { window.print = () => {}; });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /정산/ }).click();
  const monthControl = page.getByRole("group", { name: "월별 정산 대상 월" });
  await expect(monthControl.getByLabel("정산월")).toHaveValue("2026-07");
  await expect(monthControl.getByRole("status")).toBeVisible();
  await expect(monthControl.getByRole("button", { name: "횟수·금액 PDF" })).toBeVisible();
  await monthControl.getByLabel("정산월").fill("2026-08");
  await page.setViewportSize({ height: 844, width: 390 });
  const mobileMonthControlLayout = await monthControl.evaluate((element) => {
    const control = element.getBoundingClientRect();
    const field = element.querySelector(".filterBarField")?.getBoundingClientRect();
    const aside = element.querySelector(".sharedFilterBarAside")?.getBoundingClientRect();
    return {
      asideRight: aside?.right ?? 0,
      asideTop: aside?.top ?? 0,
      controlRight: control.right,
      fieldBottom: field?.bottom ?? 0
    };
  });
  expect(mobileMonthControlLayout.fieldBottom).toBeLessThanOrEqual(mobileMonthControlLayout.asideTop + 1);
  expect(mobileMonthControlLayout.asideRight).toBeLessThanOrEqual(mobileMonthControlLayout.controlRight + 1);
  await page.setViewportSize({ height: 720, width: 1280 });
  await expect(page.getByRole("columnheader", { name: "조정" })).toHaveCount(0);
  await expect(page.getByRole("columnheader", { name: "월별 스케줄" })).toHaveCount(0);
  await expect(page.getByRole("columnheader", { name: "정산 처리" })).toHaveCount(0);
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "횟수·금액 PDF" }).click();
  const reportPage = await popupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("heading", { name: "2026년 08월 정산 보고서" })).toBeVisible();
  await expect(reportPage.getByRole("table")).toContainText("정산 미리보기 학생");
  await expect(reportPage.getByRole("table")).toContainText("1회");
  await expect(reportPage.getByRole("columnheader", { name: "최종 정규 횟수" })).toBeVisible();
  await expect(reportPage.getByRole("columnheader", { name: "금액" })).toBeVisible();
  await expect(reportPage.getByText("총 횟수", { exact: true })).toHaveCount(0);
  await expect(reportPage.locator("tfoot")).not.toContainText("회");
  await expect(reportPage.getByRole("table")).not.toContainText("출석");
  await reportPage.close();

  await page.getByRole("tab", { name: "특강 정산" }).click();
  const specialRow = page.getByRole("row").filter({ hasText: "정산 미리보기 학생" });
  await expect(specialRow).toContainText("일지 1/2회");
  await expect(specialRow).toContainText("지각 1");
  await expect(specialRow).toContainText("수업일지 없음 1회");

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  const attendanceSection = profile.locator(".studentAttendanceSection");
  await expect(attendanceSection).toContainText("정규 출결");
  await expect(attendanceSection).toContainText("특강 출결");
  await expect(attendanceSection).toContainText("지각 1");
  expect(pageErrors).toEqual([]);
});

test("student monthly submission previews parent and director views before copy or PDF", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.addInitScript(() => { window.print = () => {}; });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: /정산 미리보기 학생$/ }).click();
  const profile = page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ });
  await profile.getByLabel("정산 미리보기 학생 출결 조회 월").fill("2026-08");
  await profile.getByRole("button", { name: "월간 제출 미리보기" }).click();

  const previewDialog = page.getByRole("dialog", { name: /정산 미리보기 학생 2026년 8월 월간 제출 미리보기/ });
  await expect(previewDialog).toBeVisible();
  await expect(previewDialog.getByRole("button", { name: "학부모용 간단본" })).toHaveAttribute("aria-pressed", "true");
  await expect(previewDialog.getByRole("region", { name: /학부모용 미리보기/ })).toContainText("예정 수업");
  await expect(previewDialog.getByRole("region", { name: /학부모용 미리보기/ })).toContainText("실제 출결");
  await expect(previewDialog.getByRole("region", { name: /학부모용 미리보기/ })).toContainText("변동사항");

  await previewDialog.getByRole("button", { name: "원장님용 상세본" }).click();
  const directorPreview = previewDialog.getByRole("region", { name: /원장님용 미리보기/ });
  await expect(directorPreview).toContainText("개별 스케줄");
  await expect(directorPreview).toContainText(/출석 \d+ · 지각 \d+ · 결석 \d+ · 미입력 \d+/);
  await directorPreview.getByRole("textbox").fill("8월 변동 일정 확인용");

  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async (value) => { window.__studentMonthlyReportCopiedText = value; } }
    });
  });
  await previewDialog.getByRole("button", { name: "제출 내용 복사" }).click();
  await expect(previewDialog.getByRole("status")).toContainText("내용을 복사했습니다");
  expect(await page.evaluate(() => window.__studentMonthlyReportCopiedText)).toContain("원장님 공유 메모");

  const popupPromise = page.waitForEvent("popup");
  await previewDialog.getByRole("button", { name: "PDF 인쇄" }).click();
  const reportPage = await popupPromise;
  await reportPage.waitForLoadState();
  await expect(reportPage.getByRole("heading", { name: /정산 미리보기 학생 2026년 8월 월간 수업 안내/ })).toBeVisible();
  await expect(reportPage.getByText("원장님용 상세본", { exact: true })).toBeVisible();
  await expect(reportPage.getByText("8월 변동 일정 확인용", { exact: true })).toBeVisible();
  await reportPage.close();
  expect(pageErrors).toEqual([]);
});
