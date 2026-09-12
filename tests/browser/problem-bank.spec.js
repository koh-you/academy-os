import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("교재별 오답: 학생 오답을 기록하고 서버 재조회와 맞춘 뒤 오답지를 워터마크와 함께 연다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const attemptPosts = [];
  await page.route("**/api/problem-bank/attempts", async (route) => {
    if (route.request().method() === "POST") attemptPosts.push(route.request().postDataJSON());
    await route.continue();
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await page.getByRole("tab", { name: "교재별 오답" }).click();

  const board = page.locator(".problemBankBoard");
  await expect(board.getByRole("heading", { name: "교재별 오답 · 유형분석" })).toBeVisible();
  await expect(board.locator(".problemBankBookItem.active")).toContainText("RPM 중3-2 수학 (가상)");
  await expect(board.locator(".problemBankUnitCard")).toHaveCount(2);
  await expect(board.locator(".problemBankNumber")).toHaveCount(20);

  // 기록된 가상 데이터: 0002 오답 · 0003 정답 → 반 오답률 색이 붙는다.
  await expect(board.locator(".problemBankNumber.band-band5")).toHaveCount(1);
  await expect(board.locator(".problemBankNumber.band-allCorrect")).toHaveCount(1);

  // 학생을 고르고 1번을 누르면 오답이 저장되고, 서버 응답으로 되돌아온 행이 그대로 표시된다.
  await board.locator(".problemBankStudentPick select").selectOption({ label: "월경계 학생 (중3)" });
  await board.getByRole("button", { name: /^0001번 ·/ }).click();
  await expect(board.locator(".problemBankSaveMessage")).toContainText("월경계 학생 · 0001번 오답 저장됨 (1회차)");
  // 가상 데이터의 0002 오답 + 방금 기록한 0001 오답.
  await expect(board.locator(".problemBankNumber.student-wrong")).toHaveCount(2);
  expect(attemptPosts).toHaveLength(1);
  expect(attemptPosts[0].entries[0]).toMatchObject({ itemId: "pbk_safefixture1-0001", round: 1, result: "wrong" });

  // 미리보기는 눌렀던 문항을 서명 URL 로 보여 준다.
  await expect(board.locator(".problemBankPreview img").first()).toBeVisible();

  // 다시 누르면 정답, 한 번 더 누르면 기록이 지워진다.
  await board.getByRole("button", { name: /^0001번 ·/ }).click();
  await expect(board.locator(".problemBankSaveMessage")).toContainText("0001번 정답 저장됨");
  await board.getByRole("button", { name: /^0001번 ·/ }).click();
  await expect(board.locator(".problemBankSaveMessage")).toContainText("0001번 기록을 지웠습니다");

  // 새로고침해도 서버 기록이 남아 있다(가상 API 메모리).
  await page.reload();
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await page.getByRole("tab", { name: "교재별 오답" }).click();
  await board.locator(".problemBankStudentPick select").selectOption({ label: "월경계 학생 (중3)" });
  await expect(board.locator(".problemBankNumber.student-wrong")).toHaveCount(1);
  await expect(board.locator(".problemBankNumber.band-band5")).toHaveCount(1);

  await page.screenshot({ path: "test-results/problem-bank-board.png", fullPage: true });

  // 오답 전체 선택 → 선택 인쇄 → 오답지 레이어(워터마크 + 문항 이미지).
  await board.getByRole("button", { name: "오답 전체 선택" }).click();
  await expect(board.locator(".problemBankSelectionCount")).toContainText("선택 1개");
  await board.getByRole("button", { name: "선택 인쇄" }).click();
  const sheet = page.locator(".problemBankPrintSheet");
  await expect(sheet).toBeVisible();
  await expect(sheet.locator(".problemBankWatermark")).toHaveAttribute("src", /academy-mark/);
  await expect(sheet.locator(".problemBankPrintItem")).toHaveCount(1);
  await expect(sheet.locator(".problemBankPrintItem img")).toHaveCount(1);
  await expect(sheet.locator(".problemBankPrintSource")).toContainText("RPM 중3-2 수학 (가상) · 01 삼각비 · 0002번");
  await page.screenshot({ path: "test-results/problem-bank-print-sheet.png", fullPage: true });
  await page.getByRole("button", { name: "닫기" }).click();
  await expect(sheet).toHaveCount(0);

  expect(pageErrors).toEqual([]);
});

test("교재관리: 사이드바 자료함 자리에 교재관리가 뜨고 등록된 교재 상세를 보여 준다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await expect(navigation.getByRole("button", { name: /자료함/ })).toHaveCount(0);
  await navigation.getByRole("button", { name: /교재관리/ }).click();
  await expect(page.getByRole("heading", { name: "교재관리" })).toBeVisible();
  await page.locator(".problemBankBookList .problemBankBookItem").first().click();
  await expect(page.locator(".problemBankDetailMeta")).toContainText("문항");
  await expect(page.locator(".problemBankUnitRow:not(.head)")).toHaveCount(2);
  await expect(page.locator(".problemBankFlagged")).toContainText("경계 확인 필요 (1)");
  expect(pageErrors).toEqual([]);
});
