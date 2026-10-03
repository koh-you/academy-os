import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

/**
 * 자체 교재 편집 — 여러 교재에서 문항을 담아 구획을 짜고 중간저장한다.
 * 교재 제작은 한 번에 끝나지 않으므로 「저장했다가 다시 열면 그대로」가 이 화면의 핵심 계약이다.
 */
test("자체 교재: 문항을 담아 구획을 짜고 중간저장한 뒤 다시 열면 그대로다", async ({ page, request }) => {
  await resetSafeFixture(request);
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /교재관리/ }).click();

  const tabs = page.getByRole("group", { name: "교재 구분" });
  await tabs.getByRole("button", { name: "편집 중" }).click();

  const composer = page.locator(".problemBankComposer");
  await expect(composer).toBeVisible();
  await expect(composer.getByText("아직 만든 자체 교재가 없습니다.")).toBeVisible();

  // 교재를 고르면 단원이 보이고, 단원을 펴면 교재의 구획(유형)이 나온다.
  await composer.getByLabel("교재", { exact: true }).selectOption({ label: "RPM 중3-2 수학 (가상)" });
  const unitToggle = composer.getByRole("button", { name: /01 삼각비/ });
  await expect(unitToggle).toBeVisible();
  await unitToggle.click();

  // 문항 하나와 구획 하나를 담는다.
  await composer.getByRole("button", { name: "0001번 담기" }).click();
  await expect(composer.locator(".problemBankComposerItems li")).toHaveCount(1);

  // 같은 문항을 또 눌러도 한 번만 들어간다 — 번호만 다른 같은 문제가 두 번 나오면 학생이 먼저 눈치챈다.
  await composer.getByRole("button", { name: "0001번 담기" }).click();
  await expect(composer.locator(".problemBankComposerItems li")).toHaveCount(1);

  await composer.getByRole("button", { name: "0002번 담기" }).click();
  await composer.getByRole("button", { name: "0003번 담기" }).click();
  await expect(composer.locator(".problemBankComposerItems li")).toHaveCount(3);

  // 번호는 담은 자리 기준으로 1부터 다시 매겨진다.
  await expect(composer.locator(".problemBankComposerItems li strong").first()).toHaveText("1");

  // 자리를 바꾸면 번호도 따라 바뀐다.
  await composer.getByRole("button", { name: "3번 위로" }).click();
  await expect(composer.locator(".problemBankComposerItems li span").nth(1)).toContainText("0003");

  // 이름 없이 저장할 수 없다.
  await expect(page.getByRole("button", { name: "중간저장" })).toBeDisabled();
  await composer.getByLabel("교재 이름").fill("내신대비 삼각비");
  await composer.getByLabel("폴더").fill("중3 / 내신대비");

  // 출처 표기는 제작 전에 정한다(조판할 때 이미지 안에 들어가므로).
  await composer.getByLabel("출처 표기").selectOption("none");

  await page.getByRole("button", { name: "중간저장" }).click();
  await expect(composer.getByRole("status")).toContainText("저장했습니다");
  await expect(composer.locator(".problemBankDraftList li")).toHaveCount(1);
  await expect(composer.locator(".problemBankDraftList li")).toContainText("3문항");

  // 새 교재로 비웠다가 다시 열면 저장한 것이 그대로 나온다 — 이게 중간저장의 뜻이다.
  await composer.getByRole("button", { name: "새 교재 만들기" }).click();
  await expect(composer.locator(".problemBankComposerItems li")).toHaveCount(0);
  await composer.locator(".problemBankDraftList li button").first().click();
  await expect(composer.getByLabel("교재 이름")).toHaveValue("내신대비 삼각비");
  await expect(composer.locator(".problemBankComposerItems li")).toHaveCount(3);
  await expect(composer.getByLabel("출처 표기")).toHaveValue("none");
  await expect(composer.locator(".problemBankComposerItems li span").nth(1)).toContainText("0003");

  await page.screenshot({ path: "test-results/problem-bank-compose.png", fullPage: true });
  expect(pageErrors).toEqual([]);
});
