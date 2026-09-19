import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("student row is read-only, opens the profile modal by click or keyboard, and keeps withdrawal inside it", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();

  // 2026-09-17 · 목록은 보기 전용이다. 행마다 저장·퇴원·⋯ 버튼이 깔리지 않고 칸도 입력창이 아니다.
  await expect(page.getByRole("button", { name: "퇴원", exact: true })).toHaveCount(0);
  await expect(page.locator(".studentListRow").getByRole("button", { name: "저장", exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "월경계 학생 추가 작업" })).toHaveCount(0);
  await expect(page.locator(".studentListRow input")).toHaveCount(0);
  await expect(page.locator(".studentListRow select")).toHaveCount(0);

  // 행 자체가 버튼이라 키보드로도 열린다.
  const row = page.getByRole("button", { name: "월경계 학생 정보 수정" });
  await row.focus();
  await page.keyboard.press("Enter");
  const profile = page.getByRole("dialog", { name: /월경계 학생 학생 프로파일/ });
  await expect(profile).toBeVisible();

  // 퇴원은 이 모달 안에 있고, 확인 단계는 그대로 거친다.
  await profile.getByRole("button", { name: "퇴원 처리" }).click();
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

  // 2026-09-17 · 퇴원은 행을 눌러 여는 프로필 모달 안에 있다(목록에는 행 액션 버튼이 없다).
  await page.getByRole("button", { name: "정산 미리보기 학생 정보 수정" }).click();
  await page.getByRole("dialog", { name: /정산 미리보기 학생 학생 프로파일/ })
    .getByRole("button", { name: "퇴원 처리" }).click();
  const withdrawalModal = page.getByRole("dialog", { name: "학생 퇴원 처리 확인" });
  // 2026-09-18 · 적용 시점은 라디오 두 줄. 오늘(08-01) 행에 출결이 찍혀 있으므로 기본값은 "오늘 행 유지".
  await expect(withdrawalModal.getByRole("radio", { name: /오늘 행 유지 · 내일부터 제외/ })).toBeChecked();
  await expect(withdrawalModal.getByRole("radio", { name: /오늘부터 행 제외/ })).not.toBeChecked();
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
  await page.getByRole("button", { name: "월경계 학생 정보 수정" }).click();
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
  // 2026-09-19 · 버튼 라벨은 고정이고 저장 상태는 하단 바의 InlineSaveStatus 하나가 보여준다(R6, UI U6).
  await expect(profileSaveButton).toHaveText("기본정보만 저장");
  await expect(basicModal.locator(".studentProfileStickySaveBar").getByRole("status")).toContainText("기본정보 · 저장 중");
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
  // 2026-09-19 · UI U8: 선택 0명이면 하단 툴바가 없다. 전체 선택은 표 헤더 체크박스다.
  const selectionToolbar = page.getByRole("group", { name: "퇴원생 선택" });
  await expect(selectionToolbar).toHaveCount(0);
  await withdrawnList.getByRole("checkbox", { name: "미리보기 퇴원생 선택" }).check();

  await expect(selectionToolbar).toContainText("선택 1명");
  // 1명 선택: 지금 누를 수 있는 버튼만 있고 비활성 버튼은 없다(변경 없음 → '선택 저장' 없음).
  await expect(selectionToolbar.getByRole("button", { name: "퇴원 취소" })).toBeEnabled();
  await expect(selectionToolbar.getByRole("button", { name: "인수인계서 PDF" })).toBeEnabled();
  await expect(selectionToolbar.getByRole("button", { name: "영구 삭제" })).toBeEnabled();
  await expect(selectionToolbar.getByRole("button", { name: "선택 저장" })).toHaveCount(0);
  await expect(selectionToolbar.getByRole("button", { name: "전체 선택" })).toHaveCount(0);
  await expect(selectionToolbar.locator("button[disabled]")).toHaveCount(0);

  // 사유를 바꾸면 변경된 선택이 생겨 '선택 저장' 이 나타난다(저장은 누르지 않는다).
  await withdrawnList.getByLabel("미리보기 퇴원생 퇴원 사유").selectOption("graduation");
  await expect(selectionToolbar.getByRole("button", { name: "선택 저장" })).toBeEnabled();

  // 헤더 전체 선택 → 해제 → 툴바가 사라진다.
  const selectAll = withdrawnList.getByRole("checkbox", { name: "전체 선택" });
  await selectAll.check();
  await expect(selectAll).toBeChecked();
  await selectionToolbar.getByRole("button", { name: "선택 해제" }).click();
  await expect(selectionToolbar).toHaveCount(0);
  await expect(selectAll).not.toBeChecked();
  expect(pageErrors).toEqual([]);
});

// 2026-09-19 · UI U8: 재원생 목록 검색(이름·학교·전화)·정렬은 클라이언트 표시 전용이고 탭을 오가도 유지된다.
test("active student list filters by search and sorts without touching the withdrawn tab", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();

  const studentList = page.getByRole("region", { name: "학생 목록" });
  const searchBar = page.getByRole("group", { name: "재원생 검색·정렬" });
  const searchInput = searchBar.getByRole("searchbox", { name: "학생 검색" });
  // 목록이 2행 이상 로드된 뒤에 검색한다(로드 전 0행에서 바로 세면 안 된다).
  await expect(studentList.locator(".studentListRow:not(.studentListHead)").nth(1)).toBeVisible();

  await searchInput.fill("월경계");
  await expect(studentList.getByRole("button", { name: "월경계 학생 정보 수정" })).toBeVisible();
  await expect(studentList.locator(".studentListRow:not(.studentListHead)")).toHaveCount(1);
  await expect(searchBar).toContainText("1명");

  // 검색어는 탭을 바꿔도 유지된다.
  await page.getByRole("tab", { name: "반별 학생 목록" }).click();
  await expect(searchInput).toHaveValue("월경계");
  await page.getByRole("tab", { name: "전체 학생 목록" }).click();

  await searchInput.fill("존재하지않는학생");
  await expect(studentList.getByText("검색 결과가 없습니다.")).toBeVisible();
  await studentList.getByRole("button", { name: "검색어 지우기" }).click();
  await expect(searchInput).toHaveValue("");
  await expect(studentList.getByText("검색 결과가 없습니다.")).toHaveCount(0);

  // 정렬은 select 하나로 바꾸고, 퇴원생 탭에는 이 바가 없다(퇴원생 탭은 자체 정렬).
  await searchBar.getByRole("combobox", { name: "재원생 정렬" }).selectOption("grade");
  await expect(searchBar.getByRole("combobox", { name: "재원생 정렬" })).toHaveValue("grade");
  await page.getByRole("tab", { name: "퇴원생 목록" }).click();
  await expect(searchBar).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: "퇴원생 정렬" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

// 2026-09-19 · UI U6: 섹션 모달 안 [수정] 토글, 행 끝 ⋯(삭제), 변경된 행에만 [변경 저장], 저장 안 한 초안 닫기 confirm.
test("student profile section modal toggles edit inside, folds row delete into an overflow menu, and guards dirty close", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: "월경계 학생 정보 수정" }).click();
  const profile = page.getByRole("dialog", { name: /월경계 학생 학생 프로파일/ });
  await expect(profile).toBeVisible();
  // 허브 타일은 idle 상태('저장 전')를 그리지 않는다.
  await expect(profile.getByRole("group", { name: "월경계 학생 프로필 섹션" })).not.toContainText("저장 전");

  // 읽기 모드로 섹션을 먼저 열어도 그 안에서 바로 [수정] 할 수 있다(허브의 수정 버튼과 같은 상태).
  await profile.getByRole("button", { name: /^상담기록/ }).click();
  const consultationModal = page.getByRole("dialog", { name: "월경계 학생 · 상담 기록" });
  await expect(consultationModal).toBeVisible();
  await expect(consultationModal.getByText(/수정 버튼을 누르면/)).toHaveCount(0);
  await expect(consultationModal.getByLabel("월경계 학생 새 상담 내용")).toHaveCount(0);
  await consultationModal.getByRole("button", { name: "수정", exact: true }).click();
  await expect(consultationModal.getByRole("button", { name: "수정 종료" })).toBeVisible();
  await consultationModal.getByLabel("월경계 학생 새 상담 내용").fill("첫 상담 · 숙제 습관 점검");
  await consultationModal.getByRole("button", { name: "상담 저장", exact: true }).click();
  const consultationRow = consultationModal.locator(".studentConsultationItem").first();
  await expect(consultationRow).toContainText("첫 상담 · 숙제 습관 점검");
  await expect(consultationModal.getByRole("status")).toContainText("상담기록 · 저장 완료");

  // 저장된 행: 빨간 삭제·비활성 '저장됨' 대신 ⋯ 메뉴만 있고, 변경 저장 버튼은 변경이 있을 때만 나타난다.
  await expect(consultationRow.getByRole("button", { name: "삭제", exact: true })).toHaveCount(0);
  await expect(consultationRow.getByRole("button", { name: "변경 저장" })).toHaveCount(0);
  await expect(consultationRow.getByText("저장됨")).toHaveCount(0);
  await consultationRow.getByRole("button", { name: /상담 추가 작업$/ }).click();
  const deleteItem = page.getByRole("menuitem", { name: "삭제" });
  await expect(deleteItem).toBeVisible();
  await expect(deleteItem).toHaveClass(/overflowMenuItem-danger/);
  await page.keyboard.press("Escape");
  await expect(deleteItem).toHaveCount(0);
  await expect(consultationModal).toBeVisible();
  await consultationRow.getByRole("textbox", { name: /내용$/ }).fill("첫 상담 · 숙제 습관 점검 (수정)");
  await expect(consultationRow.getByRole("button", { name: "변경 저장" })).toBeVisible();
  await expect(consultationModal.getByRole("status")).toContainText("상담기록 · 변경됨");

  // 섹션 모달을 Esc 로 닫는 것은 초안을 버리지 않으므로 묻지 않는다. 허브를 닫으면 한 번 묻고, 취소하면 그대로 남는다.
  const confirmMessages = [];
  let acceptClose = false;
  page.on("dialog", async (dialog) => {
    confirmMessages.push(dialog.message());
    if (acceptClose) await dialog.accept();
    else await dialog.dismiss();
  });
  await page.keyboard.press("Escape");
  await expect(consultationModal).toHaveCount(0);
  expect(confirmMessages).toEqual([]);
  await expect(profile.getByRole("button", { name: "취소", exact: true })).toBeVisible();
  await profile.getByRole("button", { name: "창 닫기" }).click();
  expect(confirmMessages).toEqual(["저장하지 않은 변경이 있습니다. 닫을까요?"]);
  await expect(profile).toBeVisible();
  await profile.getByRole("button", { name: /^상담기록/ }).click();
  await expect(page.getByRole("dialog", { name: "월경계 학생 · 상담 기록" }).locator(".studentConsultationItem").first().getByRole("textbox", { name: /내용$/ })).toHaveValue("첫 상담 · 숙제 습관 점검 (수정)");
  await page.keyboard.press("Escape");
  acceptClose = true;
  await profile.getByRole("button", { name: "취소", exact: true }).click();
  expect(confirmMessages).toHaveLength(2);
  await expect(profile.getByRole("button", { name: "수정", exact: true })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("withdrawn student profile does not offer withdrawal again", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("tab", { name: "퇴원생 목록" }).click();
  await page.getByRole("region", { name: "퇴원생 목록" }).getByRole("button", { name: "미리보기 퇴원생" }).click();
  const profile = page.getByRole("dialog", { name: /미리보기 퇴원생 학생 프로파일/ });
  await expect(profile).toBeVisible();
  // 이미 퇴원한 학생의 퇴원 처리는 저장 원천을 바꾸지 않는 재시도 수렴이라 진입점을 두지 않는다. 사유·코멘트는 퇴원생 목록에서 수정한다.
  await expect(profile.getByRole("button", { name: "퇴원 처리" })).toHaveCount(0);
  await expect(profile.getByRole("button", { name: "수정", exact: true })).toBeVisible();
  expect(pageErrors).toEqual([]);
});
