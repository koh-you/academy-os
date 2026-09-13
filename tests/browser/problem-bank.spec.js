import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

async function openBookWrongTab(page) {
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await page.getByRole("tab", { name: "교재별 오답" }).click();
  return page.locator(".problemBankBoard");
}

test("교재별 오답: 학생 기준 색으로 바로 바뀌고, 서버 재조회와 맞춘 뒤 오답지를 워터마크·1단/2단으로 연다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const attemptPosts = [];
  await page.route("**/api/problem-bank/attempts", async (route) => {
    if (route.request().method() === "POST") attemptPosts.push(route.request().postDataJSON());
    await route.continue();
  });

  await loginAsTeacher(page);
  const board = await openBookWrongTab(page);
  await expect(board.getByRole("heading", { name: "교재별 오답 · 유형분석" })).toBeVisible();
  // 현행·추가1·추가2 탭은 없다.
  await expect(page.getByRole("tab", { name: /^현행$|추가1|추가2/ })).toHaveCount(0);
  await expect(board.locator(".problemBankBookItem.active")).toContainText("RPM 중3-2 수학 (가상)");
  await expect(board.locator(".problemBankNumber")).toHaveCount(20);

  // 학생을 고르기 전에는 반 오답률 띠(0002 오답 · 0003 정답).
  await expect(board.locator(".problemBankNumber.band-band5")).toHaveCount(1);
  await expect(board.locator(".problemBankNumber.band-allCorrect")).toHaveCount(1);

  // 퇴원생은 학생 목록에 없다.
  const studentSelect = board.locator(".problemBankStudentPick select");
  await expect(studentSelect.locator("option", { hasText: "퇴원생" })).toHaveCount(0);

  // 학생을 고르면 그 학생 기준 색으로 바뀐다: 0002 오답(빨강) · 0003 정답(초록).
  await studentSelect.selectOption({ label: "월경계 학생 (중3)" });
  await expect(board.locator(".problemBankLegend")).toContainText("월경계 학생 기준");
  await expect(board.locator(".problemBankNumber.mine-wrong")).toHaveCount(1);
  await expect(board.locator(".problemBankNumber.mine-correct")).toHaveCount(1);
  await expect(board.locator(".problemBankNumber.mine-none")).toHaveCount(18);

  // 1번을 누르면 응답을 기다리지 않고 바로 오답색이 되고, 서버 응답 행으로 확정된다.
  const first = board.getByRole("button", { name: /^0001번 ·/ });
  await first.click();
  await expect(first).toHaveClass(/mine-wrong/);
  await expect(board.locator(".problemBankSaveMessage")).toContainText("0001번 오답 저장됨 (1회차)");
  expect(attemptPosts).toHaveLength(1);
  expect(attemptPosts[0].entries[0]).toMatchObject({ itemId: "pbk_safefixture1-0001", round: 1, result: "wrong" });
  await first.click();
  await expect(first).toHaveClass(/mine-correct/);
  await first.click();
  await expect(first).toHaveClass(/mine-none/);
  await expect(board.locator(".problemBankSaveMessage")).toContainText("0001번 기록을 지웠습니다");

  // 공통 지시문 문항(0004)은 미리보기에 지시문 블록 + 강조 상자가 뜬다.
  await board.getByRole("button", { name: /^0004번 ·/ }).click();
  await expect(board.locator(".problemBankPreview .problemBankPrintGroup img")).toBeVisible();
  await expect(board.locator(".problemBankPreview .problemBankPrintHighlight")).toHaveCount(1);
  // 정답·해설이 등록된 문항은 미리보기에서 펼쳐 볼 수 있다.
  await expect(board.locator(".problemBankPreview .problemBankPreviewAnswer")).toHaveCount(2);
  await expect(board.locator(".problemBankPreview img[alt='0004번 정답']")).toBeVisible();
  await board.getByRole("button", { name: "해설 보기" }).click();
  await expect(board.locator(".problemBankPreview .problemBankPreviewAnswer img[alt='0004번 해설']")).toBeVisible();
  // 눌렀으니 0004 도 오답이 됐다 → 오답 전체 선택 = 0002·0004.
  await board.getByRole("button", { name: "오답 전체 선택" }).click();
  await expect(board.locator(".problemBankSelectionCount")).toContainText("선택 2개");

  await page.reload();
  const boardAfter = await openBookWrongTab(page);
  await boardAfter.locator(".problemBankStudentPick select").selectOption({ label: "월경계 학생 (중3)" });
  await expect(boardAfter.locator(".problemBankNumber.mine-wrong")).toHaveCount(2);
  await boardAfter.getByRole("button", { name: "오답 전체 선택" }).click();
  await boardAfter.getByRole("button", { name: "선택 인쇄" }).click();

  const sheet = page.locator(".problemBankPrintSheet");
  await expect(sheet).toBeVisible();
  await expect(sheet).toHaveClass(/cols-2/);
  await expect(sheet.locator(".problemBankWatermark")).toHaveAttribute("src", /academy-mark/);
  // 워터마크는 문항 이미지 위에 있다.
  const watermarkZ = await sheet.locator(".problemBankWatermark").evaluate((element) => window.getComputedStyle(element).zIndex);
  expect(Number(watermarkZ)).toBeGreaterThan(1);
  await expect(sheet.locator(".problemBankPrintItem")).toHaveCount(2);
  await expect(sheet.locator(".problemBankPrintGroup .problemBankPrintHighlight")).toHaveCount(1);
  await expect(sheet.locator(".problemBankPrintSource").first()).toContainText("0002번");
  await page.getByLabel("단 구성").selectOption("1");
  await expect(sheet).toHaveClass(/cols-1/);
  // 빠른정답·해설은 등록된 문항(0002·0004 모두 1~10번 안) 수만큼 켜지고, 그룹 문항(0004)도 자기 번호로 나온다.
  await page.getByLabel(/빠른정답/).check();
  await expect(sheet.locator(".problemBankPrintAnswerGrid > div")).toHaveCount(2);
  await expect(sheet.locator(".problemBankPrintAnswerGrid img[alt='0004번 정답']")).toBeVisible();
  await page.getByLabel(/해설 \(/).check();
  await expect(sheet.locator(".problemBankPrintSolutions .problemBankPrintItem")).toHaveCount(2);
  await expect(sheet.locator(".problemBankPrintSolutions img[alt='0002번 해설']")).toBeVisible();
  await sheet.locator(".problemBankPrintAnswers").screenshot({ path: "test-results/problem-bank-print-answers.png" });
  await sheet.locator(".problemBankPrintSolutions").screenshot({ path: "test-results/problem-bank-print-solutions.png" });
  await page.screenshot({ path: "test-results/problem-bank-print-sheet.png", fullPage: true });
  await page.getByRole("button", { name: "닫기" }).click();
  await expect(sheet).toHaveCount(0);

  expect(pageErrors).toEqual([]);
});

test("교재관리: 교재 정보를 고치고 서버 재조회로 확인한 뒤 삭제한다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await expect(navigation.getByRole("button", { name: /자료함/ })).toHaveCount(0);
  await navigation.getByRole("button", { name: /교재관리/ }).click();
  await expect(page.getByRole("heading", { name: "교재관리" })).toBeVisible();
  await page.locator(".problemBankBookList .problemBankBookItem").first().click();
  await expect(page.locator(".problemBankUnitRow:not(.head)")).toHaveCount(2);
  await expect(page.locator(".problemBankFlagged")).toContainText("경계 확인 필요 (1)");
  await expect(page.locator(".problemBankDetailMeta")).toContainText("해설 10개 · 빠른정답 10개");
  await expect(page.locator(".problemBankAnswerImport")).toContainText("--book-id pbk_safefixture1");

  const form = page.locator(".problemBankEditForm");
  await form.getByLabel("제목").fill("RPM 중3-2 수학 (이름 변경)");
  await form.getByRole("button", { name: "교재 정보 저장" }).click();
  await expect(form.locator(".problemBankUploadMessage")).toContainText("서버 재조회 일치");
  await expect(page.locator(".problemBankBookList")).toContainText("RPM 중3-2 수학 (이름 변경)");

  await form.getByRole("button", { name: "교재 삭제" }).click();
  await expect(form.locator(".problemBankDeleteWarn")).toContainText("되돌릴 수 없습니다");
  await form.getByRole("button", { name: "삭제 확정" }).click();
  await expect(page.locator(".problemBankBookList .problemBankBookItem")).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});
