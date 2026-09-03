import { expect, test } from "./fixtures.js";
import { navigateCalendarToMonth } from "./safeSmokeSupport.js";

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

test("marking a test attempt below the pass threshold flags the matching lesson record as needing a retest", async ({ page, request }) => {
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험지관리/ }).click();

  await page.getByLabel("응시일").fill("2026-08-01");
  await page.getByLabel("테스트명").fill("평면좌표 재시험 테스트");
  await page.getByLabel("총 문항 수").fill("20");
  await page.getByLabel("재시험 합격 기준 정답 수").fill("16");

  await page.getByLabel("월경계 학생 응시 상태").selectOption("taken");
  await page.getByLabel("월경계 학생 정답 수").fill("10");
  await expect(page.getByText("합격 기준 미달")).toBeVisible();
  await page.getByLabel("월경계 학생 재시험 필요").check();

  await page.getByRole("button", { name: "응시 기록 저장" }).click();
  await expect(page.getByText("응시 기록 · 저장 완료")).toBeVisible();

  // The lesson record the retest sync targets belongs to the safe fixture's
  // cross-month lesson on 2026-08-01, which "월경계 학생" (safe-active-student) attends.
  await expect(async () => {
    const records = (await (await request.get(`${safeApiBaseUrl}/api/lesson-records`)).json()).records;
    const record = records.find(
      (item) => item.lessonId === "safe-cross-month-current-lesson" && item.studentId === "safe-active-student"
    );
    expect(record?.needsRetest).toBe(true);
  }).toPass();

  // Clicking the saved session in "최근 응시 회차" should reopen it as a detail
  // view: scroll the entry form into view and re-hydrate every saved field.
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByRole("button", { name: /2026-08-01.*평면좌표 재시험 테스트/ }).click();
  await expect(page.locator(".testAttemptPanel")).toBeInViewport();
  await expect(page.getByLabel("월경계 학생 정답 수")).toHaveValue("10");
  await expect(page.getByLabel("월경계 학생 재시험 필요")).toBeChecked();

  await page.getByRole("tab", { name: "학생 이력" }).click();
  await page.getByLabel("테스트 이력 학생 선택").selectOption({ label: "월경계 학생" });
  const historyItem = page.locator(".testHistoryItem", { hasText: "평면좌표 재시험 테스트" });
  await expect(historyItem.getByText("재시험 필요")).toBeVisible();

  // The same-day lesson Alimtalk draft should also spell out "재시험"
  // next to the score line, not just the raw correct-answer count.
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: "수업일지" }).click();
  await navigateCalendarToMonth(page, 2026, 8);
  const lessonDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await lessonDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();
  await lessonJournal.getByRole("button", { name: "학부모 알림톡" }).first().click();
  const alimtalkModal = page.getByRole("dialog", { name: /학부모 알림톡/ });
  await expect(alimtalkModal.locator(".commentPreviewPanel")).toContainText("20문항 중 10문항 정답 · 재시험");
});

test("a passing test attempt is labeled 통과 instead of the raw score alone", async ({ page }) => {
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험지관리/ }).click();

  await page.getByLabel("응시일").fill("2026-08-01");
  await page.getByLabel("테스트명").fill("평면좌표 통과 테스트");
  await page.getByLabel("총 문항 수").fill("20");
  await page.getByLabel("재시험 합격 기준 정답 수").fill("16");

  await page.getByLabel("월경계 학생 응시 상태").selectOption("taken");
  await page.getByLabel("월경계 학생 정답 수").fill("18");
  await expect(page.getByText("합격 기준 미달")).toHaveCount(0);

  await page.getByRole("button", { name: "응시 기록 저장" }).click();
  await expect(page.getByText("응시 기록 · 저장 완료")).toBeVisible();

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: "수업일지" }).click();
  await navigateCalendarToMonth(page, 2026, 8);
  const lessonDateCell = page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ });
  await lessonDateCell.getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await expect(lessonJournal).toBeVisible();
  await lessonJournal.getByRole("button", { name: "학부모 알림톡" }).first().click();
  const alimtalkModal = page.getByRole("dialog", { name: /학부모 알림톡/ });
  await expect(alimtalkModal.locator(".commentPreviewPanel")).toContainText("20문항 중 18문항 정답 · 통과");
});
