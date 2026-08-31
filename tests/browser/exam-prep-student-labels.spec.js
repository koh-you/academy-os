import { expect, test } from "./fixtures.js";
import { navigateSchoolCalendarToMonth } from "./safeSmokeSupport.js";

const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0);
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
});

test("exam management shows active matching student names beside school and grade without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: "전체 반" }).click();
  await page.setViewportSize({ width: 390, height: 844 });

  const row = page.locator(".examPrepRow").filter({ hasText: "안전중" });
  await expect(row).toBeVisible();
  await expect(row.getByLabel("안전중 중3 해당 학생")).toContainText("월경계 학생");
  await expect(row.getByLabel("안전중 중3 해당 학생")).not.toContainText("미리보기 퇴원생");
  await expect(row.getByLabel("안전중 중3 해당 학생").locator(".examPrepStudentNameList span")).toHaveCount(1);

  const documentOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(documentOverflow).toBeLessThanOrEqual(1);
  await expect(page.locator(".examPrepTable").evaluate((element) => element.scrollWidth > element.clientWidth)).resolves.toBe(true);
});

test("unlinked exam rows stay manageable and excluding a representative removes every duplicate from the academic calendar", async ({ page, request }) => {
  const rowResponse = await request.post(`${safeApiBaseUrl}/api/exam-prep-rows/bulk`, {
    data: {
      examPrepRows: [
        {
          examCycle: "2026-2-mid",
          examPeriod: "2026-08-12 ~ 2026-08-14",
          examPrepId: "safe-orphaned-exam-a",
          grade: "고1",
          publisher: "출판사",
          schoolName: "연결없음고",
          scope: "대표 시험정보",
          source: "학생DB 자동생성",
          subject: "공통수학1"
        },
        {
          examCycle: "2026-2-mid",
          examPeriod: "2026-08-12 ~ 2026-08-14",
          examPrepId: "safe-orphaned-exam-b",
          grade: "고1",
          schoolName: "연결없음고",
          source: "학생DB 자동생성",
          subject: "공통수학1"
        }
      ]
    }
  });
  expect(rowResponse.ok(), await rowResponse.text()).toBe(true);

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /학사일정/ }).click();
  await expect(page.getByRole("heading", { name: "학사일정" })).toBeVisible();
  await navigateSchoolCalendarToMonth(page, 2026, 8);
  await expect(page.locator(".examPeriodOverviewCard").filter({ hasText: "연결없음고" })).toBeVisible();

  await navigation.getByRole("button", { name: /시험관리/ }).click();
  const orphanedRow = page.locator(".examPrepRow.orphaned").filter({ hasText: "연결없음고" });
  await expect(orphanedRow).toBeVisible();
  await expect(orphanedRow.getByLabel("연결없음고 고1 해당 학생")).toContainText("연결된 활성 학생 없음");
  await orphanedRow.getByRole("button", { name: /상세 관리/ }).click();
  const detailDialog = page.getByRole("dialog", { name: "연결없음고 시험정보 수정" });
  await detailDialog.getByRole("button", { name: "이번 고사 내신 준비 제외" }).click();
  await detailDialog.getByRole("button", { name: "변경 저장" }).click();
  await expect(detailDialog).toBeHidden();

  await expect.poll(async () => {
    const response = await request.get(`${safeApiBaseUrl}/api/exam-prep-rows`);
    const result = await response.json();
    return result.examPrepRows
      .filter((row) => row.schoolName === "연결없음고")
      .map((row) => row.isExcluded)
      .sort();
  }).toEqual([true, true]);

  await navigation.getByRole("button", { name: /학사일정/ }).click();
  await expect(page.getByRole("heading", { name: "학사일정" })).toBeVisible();
  await expect(page.locator(".examPeriodOverviewCard").filter({ hasText: "연결없음고" })).toHaveCount(0);
  await expect(page.getByLabel("학사일정 학교 필터", { exact: true })).not.toContainText("연결없음고");

  await page.reload();
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await page.getByRole("button", { name: /내신 제외 보기/ }).click();
  const excludedOrphanedRow = page.locator(".examPrepRow.excluded.orphaned").filter({ hasText: "연결없음고" });
  await expect(excludedOrphanedRow).toBeVisible();
  await expect(excludedOrphanedRow).toContainText("연결된 활성 학생 없음");
});
