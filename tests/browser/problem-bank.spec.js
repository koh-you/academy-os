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

async function openStudentWrongTab(page) {
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /오답관리/ }).click();
  await page.getByRole("tab", { name: "학생별 오답" }).click();
  await page.getByRole("group", { name: "오답관리 학년과 학생 필터" }).getByRole("combobox").selectOption("safe-active-student");
  return page.locator(".problemBankBoard");
}

test("교재별 오답(반 전체): 학생 선택 없이 반 오답률로 보고, 많이 틀린 문항을 골라 인쇄·PPT 로 연다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const board = await openBookWrongTab(page);
  await expect(board.getByRole("heading", { name: "교재별 오답 · 반 전체" })).toBeVisible();
  await expect(board.locator(".problemBankStudentPick")).toHaveCount(0);
  await expect(board.locator(".problemBankModeSwitch")).toHaveCount(0);
  await expect(board.locator(".problemBankNumber.band-band5")).toHaveCount(1);
  // 번호를 누르면 기록이 아니라 선택이다.
  await board.getByRole("button", { name: /^0001번 ·/ }).click();
  await expect(board.locator(".problemBankSelectionCount")).toContainText("선택 1개");
  await expect(board.locator(".problemBankNumber.mine-wrong")).toHaveCount(0);
  await board.getByLabel("오답률 기준").selectOption("50");
  await board.getByRole("button", { name: "많이 틀린 문항 선택" }).click();
  await expect(board.locator(".problemBankSaveMessage")).toContainText("오답률 50% 이상 문항 1개");
  await expect(board.locator(".problemBankSelectionCount")).toContainText("선택 1개");
  // 미리보기 이미지를 누르면 크게 본다.
  await expect(board.locator(".problemBankPreview .problemBankZoomButton img")).toBeVisible();
  await board.getByRole("button", { name: "문항 이미지 크게 보기" }).click();
  await expect(page.locator(".problemBankZoomLayer img")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".problemBankZoomLayer")).toHaveCount(0);
  await board.getByRole("button", { name: "인쇄 · PPT" }).click();
  const sheet = page.locator(".problemBankPrintSheet");
  await expect(sheet).toBeVisible();
  await page.getByRole("button", { name: "닫기" }).click();
  await expect(sheet).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});

test("학생별 오답: 학생 기준 색으로 바로 바뀌고, 서버 재조회와 맞춘 뒤 오답지를 워터마크·1단/2단으로 연다", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const attemptPosts = [];
  await page.route("**/api/problem-bank/attempts", async (route) => {
    if (route.request().method() === "POST") attemptPosts.push(route.request().postDataJSON());
    await route.continue();
  });

  await loginAsTeacher(page);
  const board = await openStudentWrongTab(page);
  await expect(board.getByRole("heading", { name: "학생별 오답 · 유형분석" })).toBeVisible();
  // 현행·추가1·추가2 탭은 없다.
  await expect(page.getByRole("tab", { name: /^현행$|추가1|추가2/ })).toHaveCount(0);
  await expect(board.locator(".problemBankBookItem.active")).toContainText("RPM 중3-2 수학 (가상)");
  await expect(board.locator(".problemBankNumber")).toHaveCount(20);

  // 퇴원생은 학생 목록에 없다 (학생 선택은 위 FilterBar 가 맡는다).
  const studentFilter = page.getByRole("group", { name: "오답관리 학년과 학생 필터" }).getByRole("combobox");
  await expect(studentFilter.locator("option", { hasText: "퇴원생" })).toHaveCount(0);
  await expect(board.locator(".problemBankStudentPick")).toHaveCount(0);

  // 고른 학생 기준 색: 0002 오답(빨강) · 0003 정답(초록).
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
  // 1회차 오답 → 2회차 정답 = 재풀이 정답. 정답(초록 채움)과 다른 점선 테두리 + 「재」 표식.
  await first.click();
  await expect(first).toHaveClass(/mine-wrong/);
  await board.locator(".problemBankRoundPick select").selectOption("2");
  await first.click();
  await expect(first).toHaveClass(/mine-wrong/);
  await first.click();
  await expect(first).toHaveClass(/mine-recovered/);
  const recoveredStyle = await first.evaluate((node) => ({ border: window.getComputedStyle(node).borderTopStyle, after: window.getComputedStyle(node, "::after").content }));
  expect(recoveredStyle.border).toBe("dashed");
  expect(recoveredStyle.after).toContain("재");
  await first.click();
  await expect(board.locator(".problemBankSaveMessage")).toContainText("0001번 기록을 지웠습니다");
  await board.locator(".problemBankRoundPick select").selectOption("1");
  await first.click();
  await expect(first).toHaveClass(/mine-correct/);
  await first.click();
  await expect(first).toHaveClass(/mine-none/);

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
  const boardAfter = await openStudentWrongTab(page);
  await expect(boardAfter.locator(".problemBankNumber.mine-wrong")).toHaveCount(2);
  await boardAfter.getByRole("button", { name: "오답 전체 선택" }).click();
  await boardAfter.getByRole("button", { name: "인쇄 · PPT" }).click();

  const sheet = page.locator(".problemBankPrintSheet");
  await expect(sheet).toBeVisible();
  await expect(sheet).toHaveClass(/cols-2/);
  await expect(sheet.locator(".problemBankWatermark")).toHaveAttribute("src", /academy-mark/);
  // 워터마크는 문항 이미지 위에 있다.
  const watermarkZ = await sheet.locator(".problemBankWatermark").evaluate((element) => window.getComputedStyle(element).zIndex);
  expect(Number(watermarkZ)).toBeGreaterThan(1);
  await expect(sheet.locator(".problemBankPrintColumns > .problemBankPrintItem")).toHaveCount(2);
  // 2단 = 실제 2열: 두 항목이 같은 높이에서 나란히 시작한다.
  const boxes = await sheet.locator(".problemBankPrintColumns > .problemBankPrintItem").evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect()));
  expect(Math.abs(boxes[0].top - boxes[1].top)).toBeLessThan(2);
  expect(boxes[1].left).toBeGreaterThan(boxes[0].left + 100);
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
  // PPT 저장: 표지 + 문항 2장 + 해설 2장 = 5장짜리 파일이 내려온다.
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "PPT 저장" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/오답지\.pptx$/);
  await download.saveAs("test-results/problem-bank-wrong-answers.pptx");
  await expect(page.locator(".problemBankPptxMessage")).toContainText("저장 (5장)");
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
  await expect(page.locator(".problemBankAnswerImport").last()).toContainText("--book-id pbk_safefixture1");
  // 이미지 누락 검사: 가상 데이터는 7번 문항 파일이 빠진 것으로 답한다.
  await page.getByRole("button", { name: "이미지 누락 검사" }).click();
  await expect(page.locator(".problemBankAuditList")).toContainText("0007번 · body");

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
