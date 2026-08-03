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
  await monthNavigation.getByRole("button", { name: "이전 달" }).click();
  await expect(monthHeading).toHaveText(originalMonthTitle);
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

test("lesson journal carries the latest non-empty record across a month boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);

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
