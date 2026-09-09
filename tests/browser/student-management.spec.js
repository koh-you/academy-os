import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("student row overflow menu opens by keyboard, closes on Escape, and hides destructive actions until opened", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();

  // R1·R3: 퇴원 같은 파괴적 액션은 행에 상시 노출되지 않고, 저장 버튼도 행마다 깔리지 않는다.
  await expect(page.getByRole("button", { name: "퇴원", exact: true })).toHaveCount(0);
  await expect(page.locator(".studentListRow").getByRole("button", { name: "저장", exact: true })).toHaveCount(0);

  const trigger = page.getByRole("button", { name: "월경계 학생 추가 작업" });
  await expect(trigger).toHaveAttribute("aria-haspopup", "menu");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");

  // 트리거에서 ↓ 로 열면 첫 항목에 포커스가 간다.
  await trigger.focus();
  await page.keyboard.press("ArrowDown");
  const withdrawItem = page.getByRole("menuitem", { name: "퇴원 처리" });
  await expect(withdrawItem).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");

  // Esc 로 닫으면 트리거로 포커스가 되돌아온다.
  await page.keyboard.press("Escape");
  await expect(withdrawItem).toHaveCount(0);
  await expect(trigger).toBeFocused();

  // 메뉴에서 선택하면 기존 확인 모달이 그대로 뜬다(확인 단계를 없애지 않는다).
  await trigger.click();
  await page.getByRole("menuitem", { name: "퇴원 처리" }).click();
  await expect(page.getByRole("dialog", { name: "학생 퇴원 처리 확인" })).toBeVisible();
  expect(pageErrors).toEqual([]);
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
  // 기본정보 교체는 되돌리기 어려워 ⋯ 메뉴 안에 있다(docs/ui-row-actions.md R3).
  await candidateList.getByRole("button", { name: /추가 작업$/ }).click();
  await expect(page.getByRole("menuitem", { name: "Tally 내용으로 기본정보 교체" })).toBeVisible();
  // Esc 는 메뉴만 닫고 감싸고 있는 모달은 열어둔다.
  await page.keyboard.press("Escape");
  await expect(page.getByRole("menuitem", { name: "Tally 내용으로 기본정보 교체" })).toHaveCount(0);
  await expect(studentModal).toBeVisible();

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

  // 퇴원은 행의 빨간 버튼이 아니라 행 끝 ⋯ 메뉴 항목이다(docs/ui-row-actions.md R3).
  await page.getByRole("button", { name: "정산 미리보기 학생 추가 작업" }).click();
  await page.getByRole("menuitem", { name: "퇴원 처리" }).click();
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
  // 행별 저장 버튼 대신 하단 고정 저장 바 하나로 저장한다(docs/ui-row-actions.md R2).
  // 저장 중 들어온 후속 편집을 잃지 않고 두 번째 저장이 새 버전으로 재기반하는지가 이 테스트의 핵심이다.
  const studentRow = page.locator(".studentListRow").filter({ hasText: "월경계 학생" });
  const schoolInput = studentRow.getByLabel("월경계 학생 학교");
  const saveBar = page.getByRole("complementary", { name: "학생 목록 하단 고정 저장 바" });
  const saveButton = saveBar.getByRole("button", { name: "변경 저장", exact: true });
  await schoolInput.fill("A 저장 학교");
  await expect(saveBar).toContainText("1개 행 변경됨");
  await saveButton.click();
  await expect.poll(() => requests.length).toBe(1);
  await schoolInput.fill("B 후속 학교");
  releaseFirstRequest();

  await expect(schoolInput).toHaveValue("B 후속 학교");
  await expect(saveButton).toBeEnabled();
  await saveButton.click();
  await expect(saveBar).toContainText("저장 완료");
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
  await profile.getByRole("button", { name: /^기본정보/ }).click();
  const basicModal = page.getByRole("dialog", { name: /기본정보/ });
  const profileSaveButton = basicModal.locator(".studentProfileStickySaveBar .primaryButton");
  await expect(profileSaveButton).toBeDisabled();
  await expect(profileSaveButton).toHaveCSS("cursor", "not-allowed");
  const schoolInput = basicModal.getByLabel("월경계 학생 학교");
  await schoolInput.fill("프로필 A 저장");
  await basicModal.getByRole("button", { name: "기본정보만 저장", exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  await expect(profileSaveButton).toHaveText("저장 중");
  await expect(profileSaveButton).toHaveCSS("cursor", "wait");
  await schoolInput.fill("프로필 B 후속");
  releaseFirstRequest();

  await expect(schoolInput).toHaveValue("프로필 B 후속");
  await expect(basicModal.getByRole("button", { name: "기본정보만 저장", exact: true })).toBeEnabled();
  await basicModal.getByRole("button", { name: "기본정보만 저장", exact: true }).click();
  await expect(basicModal.getByText("프로필 B 후속", { exact: true })).toBeVisible();
  expect(requests).toHaveLength(2);
  expect(requests[1].expectedUpdatedAt).not.toBe(requests[0].expectedUpdatedAt);

  const persistedResponse = await request.get(`${safeApiBaseUrl}/api/students`);
  const persistedResult = await persistedResponse.json();
  expect(persistedResult.students.find((student) => student.studentId === "safe-active-student")?.schoolName).toBe("프로필 B 후속");
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
