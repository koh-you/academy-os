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
  await candidateList.getByLabel("Tally 반영 대상").selectOption({ index: 1 });
  await expect(candidateList.getByText(/학생이 이미 등록되어 있습니다\. Tally 답변을 어떻게 반영할까요\?/)).toBeVisible();
  await expect(candidateList.getByRole("button", { name: "기존 정보에 Tally 내용 추가" })).toBeVisible();
  await expect(candidateList.getByRole("button", { name: "Tally 내용으로 기본정보 교체" })).toBeVisible();

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

test("student withdrawal rebases a stale student row before saving future rosters", async ({ page, request }) => {
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

  const studentsBefore = await (await request.get(`${safeApiBaseUrl}/api/students`)).json();
  const staleTarget = studentsBefore.students.find((student) => student.studentId === "safe-settlement-student");
  const externallyUpdatedStudent = { ...staleTarget, schoolName: "다른 화면 최신 학교" };
  const externalSaveResponse = await request.post(`${safeApiBaseUrl}/api/students`, {
    data: { expectedUpdatedAt: staleTarget.updatedAt, student: externallyUpdatedStudent }
  });
  expect(externalSaveResponse.ok()).toBeTruthy();
  const externallySavedStudent = (await externalSaveResponse.json()).student;
  expect(externallySavedStudent.updatedAt).not.toBe(staleTarget.updatedAt);

  await page.getByRole("button", { name: "정산 미리보기 학생 퇴원 처리" }).click();
  const withdrawalModal = page.getByRole("dialog", { name: "학생 퇴원 처리 확인" });
  await expect(withdrawalModal.getByLabel("정산 미리보기 학생 퇴원 적용 시점")).toHaveValue("tomorrow");
  await withdrawalModal.getByLabel("코멘트").fill("특강수강생");
  await withdrawalModal.getByRole("button", { name: "퇴원 처리", exact: true }).click();
  await expect(withdrawalModal).toBeHidden();

  expect(rosterRequests).toHaveLength(1);
  const studentChange = rosterRequests[0].studentChanges.find((change) => change.after.studentId === "safe-settlement-student");
  expect(studentChange.before.updatedAt).toBe(externallySavedStudent.updatedAt);
  expect(studentChange.after.schoolName).toBe("다른 화면 최신 학교");
  expect(studentChange.after.withdrawalComment).toBe("특강수강생");

  const [studentsAfterResponse, lessonsAfterResponse] = await Promise.all([
    request.get(`${safeApiBaseUrl}/api/students`),
    request.get(`${safeApiBaseUrl}/api/lessons`)
  ]);
  const studentsAfter = (await studentsAfterResponse.json()).students;
  const lessonsAfter = (await lessonsAfterResponse.json()).lessons;
  const withdrawnStudent = studentsAfter.find((student) => student.studentId === "safe-settlement-student");
  expect(withdrawnStudent.status).toBe("paused");
  expect(withdrawnStudent.schoolName).toBe("다른 화면 최신 학교");
  expect(lessonsAfter.find((lesson) => lesson.lessonId === "safe-settlement-future-roster")?.studentIds).not.toContain("safe-settlement-student");
  expect(lessonsAfter.find((lesson) => lesson.lessonId === "safe-settlement-august-regular")?.studentIds).toContain("safe-settlement-student");
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

test("school calendar shows the full exam period with a stronger math exam date inside it", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.setViewportSize({ width: 1280, height: 900 });
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  await detailDialog.getByLabel("시험기간 시작일").fill("2026-08-12");
  await detailDialog.getByLabel("시험기간 종료일").fill("2026-08-15");
  await detailDialog.getByLabel("수학시험 날짜").first().fill("2026-08-14");
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();

  await navigation.getByRole("button", { name: /학사일정/ }).click();
  await expect(page.getByRole("group", { name: "학사일정 달력 범례" })).toContainText("학교색 띠 · 전체 시험기간");
  await expect(page.getByRole("group", { name: "학사일정 달력 범례" })).toContainText("진한 탭 · 수학시험 날짜");
  for (const date of ["2026-08-12", "2026-08-13", "2026-08-14", "2026-08-15"]) {
    await expect(page.getByRole("gridcell", { name: new RegExp(date) }).locator(".examPeriodBand")).toContainText("안전고 시험기간");
  }
  const mathExamCell = page.getByRole("gridcell", { name: /2026-08-14/ });
  await expect(mathExamCell.locator(".mathExamTab")).toContainText("안전고");
  await expect(mathExamCell.locator(".examPeriodBand")).toBeVisible();
  const desktopOverflow = await page.locator(".schoolMonthGrid").evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth
  }));
  expect(desktopOverflow.scrollWidth).toBeLessThanOrEqual(desktopOverflow.clientWidth);

  await page.setViewportSize({ width: 390, height: 844 });
  const mobileOverflow = await page.locator(".schoolMonthGridShell").evaluate((element) => ({
    clientWidth: element.clientWidth,
    pageWidth: document.documentElement.scrollWidth,
    scrollWidth: element.scrollWidth,
    viewportWidth: window.innerWidth
  }));
  expect(mobileOverflow.scrollWidth).toBeGreaterThan(mobileOverflow.clientWidth);
  expect(mobileOverflow.pageWidth).toBeLessThanOrEqual(mobileOverflow.viewportWidth);
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
  await expect(page.getByRole("button", { name: "전체 반" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByLabel("시험정보 정렬")).toHaveValue("school");

  const middleSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전중" });
  await expect(middleSchoolRow).toBeVisible();
  await expect(middleSchoolRow).toContainText("미입력");
  const schoolNames = await page.locator(".examPrepRow:not(.examPrepHead) > :first-child").allTextContents();
  expect(schoolNames).toEqual([...schoolNames].sort((first, second) => first.localeCompare(second, "ko")));
  await page.getByLabel("시험정보 정렬").selectOption("exam_period");
  await expect(page.getByLabel("시험정보 정렬")).toHaveValue("exam_period");
  await page.setViewportSize({ height: 844, width: 390 });
  await expect(page.getByLabel("시험정보 정렬")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
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

test("exam prep date inputs save once on explicit action and show the full completed range after reload", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (captureRequests) requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });
  await loginAsTeacher(page);

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();

  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const startDateInput = detailDialog.getByLabel("시험기간 시작일");
  const endDateInput = detailDialog.getByLabel("시험기간 종료일");
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await startDateInput.fill("2026-10-13");
  await expect(startDateInput).toHaveValue("2026-10-13");
  await endDateInput.fill("2026-10-19");
  await expect(endDateInput).toHaveValue("2026-10-19");
  await expect(detailDialog.getByText("시험정보 · 변경됨")).toBeVisible();
  await page.waitForTimeout(300);
  expect(requests).toHaveLength(0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(requests[0].examPrepRows[0].examPeriod).toBe("2026-10-13 ~ 2026-10-19");
  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.examPeriod;
  }).toBe("2026-10-13 ~ 2026-10-19");

  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();
  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  await expect(page.locator(".examPrepRow").filter({ hasText: "안전고" })).toContainText("2026-10-13 ~ 2026-10-19");
  expect(pageErrors).toEqual([]);
});

test("exam prep closes an unsaved draft without changing the server source", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (captureRequests) requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const initialResponse = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
  const initialResult = await initialResponse.json();
  const initialScope = initialResult.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.scope ?? "";

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await scopeInput.fill("저장하지 않고 닫을 초안");
  await expect(detailDialog.getByText("시험정보 · 변경됨")).toBeVisible();
  await detailDialog.getByRole("button", { name: "닫기", exact: true }).click();
  expect(requests).toHaveLength(0);

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.scope ?? "").toBe(initialScope);

  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  await expect(page.getByRole("dialog", { name: "안전고 시험정보 수정" }).getByLabel("시험 범위")).toHaveValue(initialScope);
  expect(pageErrors).toEqual([]);
});

test("exam prep rapid edits stay local until one explicit verified save", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const requests = [];
  let captureRequests = false;
  await page.route("**/api/exam-prep-rows/bulk", async (route) => {
    if (!captureRequests) {
      const response = await route.fetch();
      await route.fulfill({ response });
      return;
    }
    requests.push(route.request().postDataJSON());
    const response = await route.fetch();
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await expect(scopeInput).toBeVisible();
  await page.waitForLoadState("networkidle");
  captureRequests = true;
  await scopeInput.fill("직렬화 첫 입력");
  await scopeInput.fill("직렬화 중간 입력");
  await scopeInput.fill("직렬화 최신 입력");
  await page.waitForTimeout(300);
  expect(requests).toHaveLength(0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 완료")).toBeVisible();
  expect(requests).toHaveLength(1);
  expect(requests[0].examPrepRows[0].scope).toBe("직렬화 최신 입력");
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
  const safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeInput = detailDialog.getByLabel("시험 범위");
  await page.waitForLoadState("networkidle");
  conflictEnabled = true;
  await scopeInput.fill("충돌해도 유지할 입력");
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog.getByText("시험정보 · 저장 실패")).toBeVisible();
  await expect(scopeInput).toHaveValue("충돌해도 유지할 입력");
  expect(pageErrors).toEqual([]);
});

test("exam prep exclusion survives reread and can be restored without deleting the enrolled school row", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "정산 미리보기반" }).click();

  let safeSchoolRow = page.locator(".examPrepRow").filter({ hasText: "안전고" });
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  let detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  const scopeActions = detailDialog.getByRole("group", { name: "시험정보 관리 범위 변경" });
  const mainActions = detailDialog.getByRole("group", { name: "시험정보 주요 작업" });
  await expect(scopeActions.getByText("관리 범위 변경")).toBeVisible();
  await expect(scopeActions.getByRole("button", { name: "이번 고사 내신 준비 제외" })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "시험 후 총평 작성" })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "닫기", exact: true })).toBeVisible();
  await expect(mainActions.getByRole("button", { name: "변경 저장" })).toBeDisabled();
  await detailDialog.getByRole("button", { name: "이번 고사 내신 준비 제외" }).click();
  const saveStatus = detailDialog.getByRole("group", { name: "시험정보 저장 상태" });
  await expect(saveStatus.getByText("시험정보 · 변경됨")).toBeVisible();
  const [statusBox, scopeBox, mainBox] = await Promise.all([
    saveStatus.boundingBox(),
    scopeActions.boundingBox(),
    mainActions.boundingBox()
  ]);
  expect(statusBox?.y).toBeLessThan(scopeBox?.y ?? 0);
  expect(scopeBox?.x).toBeLessThan(mainBox?.x ?? 0);
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog).toBeHidden();
  await expect(safeSchoolRow).toHaveCount(0);
  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows.find((row) => row.examPrepId === "safe-exam-prep-row")?.isExcluded;
  }).toBe(true);

  await page.getByRole("button", { name: "내신 제외 보기 (1)" }).click();
  safeSchoolRow = page.locator(".examPrepRow.excluded").filter({ hasText: "안전고" });
  await expect(safeSchoolRow).toBeVisible();
  await safeSchoolRow.getByRole("button", { name: /상세 관리/ }).click();
  detailDialog = page.getByRole("dialog", { name: "안전고 시험정보 수정" });
  await detailDialog.getByRole("button", { name: "시험관리 다시 포함" }).click();
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog).toBeHidden();
  await page.getByRole("button", { name: "시험정보 보기" }).click();
  await expect(page.locator(".examPrepRow").filter({ hasText: "안전고" })).toBeVisible();
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
  if (await page.getByText("편집할 특강을 선택하세요.").isVisible()) {
    await page.locator(".specialLectureStoredToggle").click();
    await page.locator(".specialLectureSelector.stored button").first().click();
  }
  await page.getByRole("tab", { name: "알림톡 미리보기" }).click();
  await expect(page.locator(".specialLectureNoticePreview")).toContainText("안전 설정 특강");
  expect(pageErrors).toEqual([]);
});

test("notification reserve contract stays canonical in the safe API without provider actions", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;

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
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
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
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
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
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
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
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;

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
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
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

test("exam prep calendar exposes every school and switches the daily roster between time and school order", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-08-11T09:00:00+09:00") });
  await page.route("**/api/students*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        students: [
          ...(result.students ?? []),
          { name: "김가람", schoolName: "상계중", status: "active", studentId: "safe-exam-prep-1" },
          { name: "박나래", schoolName: "정의여고", status: "active", studentId: "safe-exam-prep-2" },
          { name: "이도윤", schoolName: "자운고", status: "active", studentId: "safe-exam-prep-3" }
        ]
      }
    });
  });
  await page.route("**/api/lessons*", async (route) => {
    const response = await route.fetch();
    const result = await response.json();
    await route.fulfill({
      response,
      json: {
        ...result,
        lessons: [
          ...(result.lessons ?? []),
          {
            className: "시험대비",
            color: "#bae6fd",
            date: "2026-08-16",
            endTime: "18:00",
            lessonId: "safe-exam-prep-roster",
            lessonTopic: "2학기 중간고사 시험대비",
            lessonType: "examPrep",
            sourceLabel: "상계중 2학기 중간고사 · 정의여고 2학기 중간고사 · 자운고 2학기 중간고사",
            specialLectureStudentSchedules: [
              { endTime: "15:00", scheduleType: "adjusted", startTime: "13:30", studentId: "safe-exam-prep-2" }
            ],
            startTime: "15:00",
            status: "scheduled",
            studentIds: ["safe-exam-prep-1", "safe-exam-prep-2", "safe-exam-prep-3"]
          }
        ]
      }
    });
  });

  await loginAsTeacher(page);
  const calendarDay = page.getByRole("gridcell", { name: /^2026-08-16 · \d+개 수업$/ });
  const examPrepPill = calendarDay.locator(".examPrepLessonPill");
  await expect(examPrepPill).toContainText("시험대비 · 3개교 · 3명");
  await expect(examPrepPill.locator(".examPrepCalendarSchool")).toHaveText([
    "상계중 2학기 중간고사",
    "정의여고 2학기 중간고사",
    "자운고 2학기 중간고사"
  ]);
  await expect(examPrepPill.evaluate((element) => element.scrollWidth <= element.clientWidth)).resolves.toBe(true);
  await examPrepPill.click();

  const dialog = page.getByRole("dialog", { name: "시험대비" });
  await expect(dialog.getByRole("button", { name: "시간순" })).toHaveAttribute("aria-pressed", "true");
  await expect(dialog.locator(".examPrepRosterGroup > header strong")).toHaveText(["13:30-15:00", "15:00-18:00"]);
  await expect(dialog.locator(".examPrepRosterRow > div > strong")).toHaveText(["박나래", "김가람", "이도윤"]);
  await dialog.getByRole("button", { name: "학교별" }).click();
  await expect(dialog.locator(".examPrepRosterGroup > header strong")).toHaveText(["상계중", "자운고", "정의여고"]);

  await page.setViewportSize({ height: 844, width: 390 });
  const dialogBox = await dialog.boundingBox();
  expect(dialogBox.x).toBeGreaterThanOrEqual(0);
  expect(dialogBox.x + dialogBox.width).toBeLessThanOrEqual(390);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
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
  const currentMonth = getKoreaDateAfterDays(0).slice(0, 7);
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
  if (scheduledDate.slice(0, 7) !== currentMonth) {
    await page.getByRole("navigation", { name: "수업일지 달력 월 이동" })
      .getByRole("button", { name: "다음 달" })
      .click();
  }
  const scheduledDay = page.getByRole("gridcell", { name: new RegExp(`${scheduledDate} · \\d+개 수업`) });
  await scheduledDay.getByRole("button", { name: "수동 보충 · 연속출결 가상학생" }).click();
  await expect(page.getByRole("dialog", { name: "수업일지" })).toBeVisible();
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
