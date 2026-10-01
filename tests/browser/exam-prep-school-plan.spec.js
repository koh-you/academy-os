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

test("per-school panel saves one school's time for that date only and keeps an excluded school out after reload", async ({ page, request }) => {
  await postExamPrepRows(request, [highSchoolRow]);
  await postExamPrepRows(request, [middleSchoolRow], { allowRestore: true });
  await postExamPrepLesson(
    request,
    ["safe-settlement-student", "safe-active-student"],
    "안전고 2학기 중간고사 · 안전중 2학기 중간고사"
  );
  await loginAsTeacher(page);
  const detail = await openExamPrepModal(page);

  // 두 학교가 각자의 행으로 보인다.
  const panel = detail.locator(".examPrepSchoolPlanPanel");
  await expect(panel).toContainText("학교별 참여 · 시간");
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(2);
  await expect(panel.locator(".examPrepSchoolPlanRow").first()).toContainText("안전고");
  await expect(panel.locator(".examPrepSchoolPlanRow").nth(1)).toContainText("안전중");

  // 모달이 넓어졌는지 — 세로로 이어지던 진행 내용 칸을 가로로 깔기 위한 전제다.
  const modalWidth = await detail.evaluate((node) => node.getBoundingClientRect().width);
  expect(modalWidth).toBeGreaterThan(1120);
  const contentColumns = await detail.locator(".examPrepStudentContentList").evaluate(
    (node) => window.getComputedStyle(node).gridTemplateColumns.split(" ").length
  );
  expect(contentColumns).toBeGreaterThan(1);

  // 입력만으로는 저장되지 않는다(화면 초안). 저장은 명시적인 버튼이다.
  await panel.getByLabel("안전중 시작 시간").fill("14:00");
  await panel.getByLabel("안전중 종료 시간").fill("17:00");
  expect((await readLesson(request, "lesson_exam_prep_2026-08-09")).specialLectureStudentSchedules).toEqual([]);

  const timeSave = page.waitForResponse((response) => response.url().includes("/api/exam-prep-schedule/save"));
  await panel.locator(".examPrepSchoolPlanRow").nth(1).getByRole("button", { name: "시간 저장" }).click();
  expect((await timeSave).status()).toBe(200);
  await expect(panel.getByRole("status", { name: "안전중 저장 상태" })).toContainText("서버 재조회 일치");

  // 그 학교 학생만, 그 날짜만 바뀐다.
  const afterTime = await readLesson(request, "lesson_exam_prep_2026-08-09");
  expect(afterTime.specialLectureStudentSchedules).toEqual([
    expect.objectContaining({ endTime: "17:00", startTime: "14:00", studentId: "safe-active-student" })
  ]);
  expect(afterTime.startTime).toBe("13:00");
  expect(afterTime.studentIds).toEqual(expect.arrayContaining(["safe-settlement-student", "safe-active-student"]));

  // 제외는 명단과 표시 라벨에서 그 학교를 뺀다.
  const excludeSave = page.waitForResponse((response) => response.url().includes("/api/exam-prep-schedule/save"));
  await panel.locator(".examPrepSchoolPlanRow").nth(1).getByRole("button", { name: "이 날짜 제외" }).click();
  expect((await excludeSave).status()).toBe(200);
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(1);
  await expect(panel.locator(".examPrepSchoolPlanExcluded")).toContainText("안전중");
  await expect(detail).not.toContainText("월경계 학생");

  const afterExclude = await readLesson(request, "lesson_exam_prep_2026-08-09");
  expect(afterExclude.studentIds).toEqual(["safe-settlement-student"]);
  expect(afterExclude.specialLectureStudentSchedules).toEqual([]);

  // 새로고침해도 유지된다 — 제외가 app_state 서버 원천에 남기 때문이다.
  await page.reload();
  const reopened = await openExamPrepModal(page);
  await expect(reopened.locator(".examPrepSchoolPlanRow")).toHaveCount(1);
  await expect(reopened.locator(".examPrepSchoolPlanRow").first()).toContainText("안전고");
  await expect(reopened.locator(".examPrepSchoolPlanExcluded")).toContainText("안전중");
  expect((await readLesson(request, "lesson_exam_prep_2026-08-09")).studentIds).toEqual(["safe-settlement-student"]);

  // 다시 포함하면 명단이 원천(시험정보 행) 기준으로 돌아온다.
  await reopened.locator(".examPrepSchoolPlanExcluded").getByRole("button", { name: "다시 포함" }).click();
  await expect(reopened.locator(".examPrepSchoolPlanRow")).toHaveCount(2);
  await expect(reopened.locator(".examPrepSchoolPlanExcluded")).toHaveCount(0);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("the last remaining school offers lesson deletion instead of exclusion", async ({ page, request }) => {
  // 한 학교만 남으면 제외는 "그날을 아예 안 한다" 와 같아진다 — 그건 일정 삭제의 일이다.
  // 안전중 행을 아예 만들지 않아 그 상태를 그대로 만든다.
  await postExamPrepRows(request, [highSchoolRow]);
  await postExamPrepLesson(request, ["safe-settlement-student"], "안전고 2학기 중간고사");

  await loginAsTeacher(page);
  const detail = await openExamPrepModal(page);
  const panel = detail.locator(".examPrepSchoolPlanPanel");
  await expect(panel.locator(".examPrepSchoolPlanRow")).toHaveCount(1);
  await expect(panel.getByRole("button", { name: "이 날짜 제외" })).toHaveCount(0);
  await expect(panel).toContainText("남은 학교가 하나뿐입니다");
  await expect(detail.getByRole("button", { name: "일정 삭제" })).toBeVisible();
});
