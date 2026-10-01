import { expect, test } from "./fixtures.js";
import { navigateCalendarToMonth } from "./safeSmokeSupport.js";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0);
const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

async function loginAsTeacher(page) {
  await page.goto("/");
  await page.getByRole("tab", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();
}

async function readLesson(request, lessonId) {
  const payload = await (await request.get(`${safeApiBaseUrl}/api/lessons`)).json();
  return payload.lessons.find((lesson) => lesson.lessonId === lessonId);
}

async function openExamPrepModal(page) {
  await navigateCalendarToMonth(page, 2026, 8);
  await page.getByRole("gridcell", { name: /2026-08-09/ }).locator(".lessonPill").click();
  return page.getByRole("dialog", { name: "시험대비" });
}

// 안전고 고1(정산 미리보기 학생)과 안전중 중3(월경계 학생)이 같은 일요일 시험대비에 든다.
// 날짜당 한 수업에 두 학교가 합쳐지는 형태를 그대로 만든다.
//
// safe API 의 시험정보 bulk 는 **없는 행에 updatedAt 이 있으면** allowRestore 없이는 CAS
// 충돌로 거부한다(HTTP 200 + conflicts 라서 ok() 만으로는 안 잡힌다). 그래서 fixture 에 이미
// 있는 safe-exam-prep-row 는 그 updatedAt 으로 갱신하고, 새로 넣는 안전중 행만 allowRestore
// 로 만든다. conflicts 가 비었는지도 같이 본다 — 행이 안 들어가면 생성 후보가 없어 수업이
// 달력에서 사라지고, 그때 실패 지점이 "pill 없음" 으로 멀리 밀린다.
async function postExamPrepRows(request, rows, { allowRestore = false } = {}) {
  const response = await request.post(`${safeApiBaseUrl}/api/exam-prep-rows/bulk`, {
    data: { allowRestore, examPrepRows: rows }
  });
  const payload = await response.json();
  expect(payload.conflicts, JSON.stringify(payload.conflicts)).toEqual([]);
  return payload;
}

const highSchoolRow = {
  examCycle: "2026-2-mid",
  examPeriod: "2026-08-12 ~ 2026-08-14",
  examPrepId: "safe-exam-prep-row",
  grade: "고1",
  schoolName: "안전고",
  subject: "공통수학1",
  updatedAt: "2026-08-03T00:00:00.000Z"
};
const middleSchoolRow = {
  examCycle: "2026-2-mid",
  examPeriod: "2026-08-12 ~ 2026-08-14",
  examPrepId: "safe-exam-prep-middle",
  grade: "중3",
  schoolName: "안전중",
  subject: "중3-2",
  updatedAt: "2026-08-03T00:00:00.000Z"
};

async function postExamPrepLesson(request, studentIds, sourceLabel) {
  const response = await request.post(`${safeApiBaseUrl}/api/lessons/bulk`, {
    data: {
      lessons: [{
        className: "시험대비",
        date: "2026-08-09",
        endTime: "18:00",
        generatedKey: "generated:exam_prep:2026-08-09",
        lessonId: "lesson_exam_prep_2026-08-09",
        lessonTopic: "시험대비",
        lessonType: "examPrep",
        sourceLabel,
        sourceSchoolEventId: "generated:exam_prep:2026-08-09",
        specialLectureStudentSchedules: [],
        startTime: "13:00",
        status: "scheduled",
        studentIds,
        updatedAt: "2026-08-03T00:00:00.000Z"
      }]
    }
  });
  expect(response.ok(), await response.text()).toBe(true);
}

test.beforeEach(async ({ request }) => {
  await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
});

test("one save applies per-school time and exclusion, and the exclusion survives a reload", async ({ page, request }) => {
  await postExamPrepRows(request, [highSchoolRow]);
  await postExamPrepRows(request, [middleSchoolRow], { allowRestore: true });
  await postExamPrepLesson(
    request,
    ["safe-settlement-student", "safe-active-student"],
    "안전고 2학기 중간고사 · 안전중 2학기 중간고사"
  );
  await loginAsTeacher(page);
  const detail = await openExamPrepModal(page);
  const panel = detail.locator(".examPrepSchoolPlanPanel");

  // 평소에는 읽기 전용이다 — 행마다 버튼을 달지 않는다(수업일지와 같은 체계).
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(2);
  await expect(panel.locator("input[type=\"time\"]")).toHaveCount(0);
  await expect(panel.getByRole("button", { name: "수정" })).toBeVisible();

  // 가로 2열 — 학생별 진행 내용은 오른쪽 열에서 따로 스크롤한다.
  const columns = await detail.locator(".examPrepLessonLayout").evaluate(
    (node) => window.getComputedStyle(node).gridTemplateColumns.split(" ").length
  );
  expect(columns).toBe(2);
  await expect(detail.locator(".examPrepLessonContentColumn .examPrepLessonContentEditor")).toBeVisible();
  // 학생마다 반복되던 예시글은 지웠다.
  expect(
    await detail.getByLabel("정산 미리보기 학생 오늘 진행한 내용").getAttribute("placeholder")
  ).toBeNull();

  await panel.getByRole("button", { name: "수정" }).click();
  // 입력만으로는 저장되지 않는다(화면 초안).
  await panel.getByLabel("안전중 시작 시간").fill("14:00");
  await panel.getByLabel("안전중 종료 시간").fill("17:00");
  await panel.getByLabel("안전고 이 날짜 참여").uncheck();
  expect((await readLesson(request, "lesson_exam_prep_2026-08-09")).studentIds).toEqual(
    expect.arrayContaining(["safe-settlement-student", "safe-active-student"])
  );

  // 저장 하나가 시간과 제외를 함께 보낸다 — 요청도 한 번이다.
  const saveResponses = [];
  page.on("response", (response) => {
    if (response.url().includes("/api/exam-prep-schedule/save")) saveResponses.push(response);
  });
  await panel.getByRole("button", { name: "저장" }).click();
  await expect(panel.getByRole("status", { name: "학교별 참여 저장 상태" })).toContainText("저장 완료 · 서버 재조회 일치");
  await expect(panel.getByRole("status", { name: "학교별 참여 저장 상태" })).toContainText("제외 안전고");
  expect(saveResponses).toHaveLength(1);

  const afterSave = await readLesson(request, "lesson_exam_prep_2026-08-09");
  expect(afterSave.studentIds).toEqual(["safe-active-student"]);
  expect(afterSave.specialLectureStudentSchedules).toEqual([
    expect.objectContaining({ endTime: "17:00", startTime: "14:00", studentId: "safe-active-student" })
  ]);
  expect(afterSave.startTime).toBe("13:00");

  // 제외한 학교는 같은 목록에 "이 날짜 제외" 로 남아 되돌릴 수 있다.
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(2);
  await expect(panel.locator(".examPrepSchoolPlanRow.excluded")).toContainText("안전고");
  await expect(panel.locator(".examPrepSchoolPlanRow.excluded")).toContainText("이 날짜 제외");

  // 새로고침해도 유지된다 — 제외가 app_state 서버 원천에 남기 때문이다.
  await page.reload();
  const reopened = await openExamPrepModal(page);
  const reopenedPanel = reopened.locator(".examPrepSchoolPlanPanel");
  await expect(reopenedPanel.locator(".examPrepSchoolPlanRow.excluded")).toContainText("안전고");
  expect((await readLesson(request, "lesson_exam_prep_2026-08-09")).studentIds).toEqual(["safe-active-student"]);

  // 다시 포함하면 명단이 원천(시험정보 행) 기준으로 돌아온다.
  await reopenedPanel.getByRole("button", { name: "수정" }).click();
  await reopenedPanel.getByLabel("안전고 이 날짜 참여").check();
  await reopenedPanel.getByRole("button", { name: "저장" }).click();
  await expect(reopenedPanel.locator(".examPrepSchoolPlanRow.excluded")).toHaveCount(0);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("a school whose students differ can be fixed per student", async ({ page, request }) => {
  // 학생별로 시간이 다른 학교는 학교 한 줄로는 못 고친다 — 그 학교만 펼쳐 학생 칸을 연다.
  // 같은 학교에 학생이 둘 이상이어야 의미가 있으므로 안전중 학생을 하나 더 만든다.
  const studentResponse = await request.post(`${safeApiBaseUrl}/api/students`, {
    data: {
      createOnly: true,
      student: {
        grade: "중3",
        loginId: "safe_second_middle",
        name: "안전중 둘째",
        pin: "1234",
        schoolName: "안전중",
        status: "active",
        studentId: "safe-second-middle-student"
      }
    }
  });
  expect(studentResponse.ok(), await studentResponse.text()).toBe(true);
  await postExamPrepRows(request, [middleSchoolRow], { allowRestore: true });
  await postExamPrepLesson(request, ["safe-active-student", "safe-second-middle-student"], "안전중 2학기 중간고사");
  await loginAsTeacher(page);
  const detail = await openExamPrepModal(page);
  const panel = detail.locator(".examPrepSchoolPlanPanel");

  await panel.getByRole("button", { name: "수정" }).click();
  await panel.getByRole("button", { name: "학생별 시간" }).first().click();
  await panel.getByLabel("월경계 학생 시작 시간").fill("15:00");
  await panel.getByLabel("월경계 학생 종료 시간").fill("18:00");
  await panel.getByRole("button", { name: "저장" }).click();
  await expect(panel.getByRole("status", { name: "학교별 참여 저장 상태" })).toContainText("학생 시간 1명");

  const saved = await readLesson(request, "lesson_exam_prep_2026-08-09");
  expect(saved.specialLectureStudentSchedules).toEqual([
    expect.objectContaining({ endTime: "18:00", startTime: "15:00", studentId: "safe-active-student" })
  ]);
  // 읽기 모드로 돌아오면 그 학교는 "학생별 시간 다름" 으로 보인다.
  await expect(panel.locator(".examPrepSchoolPlanRow").first()).toContainText("학생별 시간 다름");
});

test("the last remaining school cannot be excluded", async ({ page, request }) => {
  // 한 학교만 남으면 제외는 "그날을 아예 안 한다" 와 같아진다 — 그건 일정 삭제의 일이다.
  await postExamPrepRows(request, [highSchoolRow]);
  await postExamPrepLesson(request, ["safe-settlement-student"], "안전고 2학기 중간고사");

  await loginAsTeacher(page);
  const detail = await openExamPrepModal(page);
  const panel = detail.locator(".examPrepSchoolPlanPanel");
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(1);
  await panel.getByRole("button", { name: "수정" }).click();
  await panel.getByLabel("안전고 이 날짜 참여").uncheck();
  await panel.getByRole("button", { name: "저장" }).click();
  await expect(panel.getByRole("status", { name: "학교별 참여 저장 상태" }))
    .toContainText("모든 학교를 빼려면 이 수업 자체를 삭제하세요");
  expect((await readLesson(request, "lesson_exam_prep_2026-08-09")).studentIds).toEqual(["safe-settlement-student"]);
  await expect(detail.getByRole("button", { name: "일정 삭제" })).toBeVisible();
});
