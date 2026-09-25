import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

// 2026-09-25 · 화면에 상시 노출했던 설명을 공용 HelpTip(물음표) 뒤로 옮겼다.
// 반관리 화면을 기준으로 (1) 헤더의 상시 설명이 사라졌고 (2) 물음표가 focus·클릭으로 열리고
// (3) Esc 가 설명만 닫고 모달까지 닫지 않는다는 것을 잠근다.
test("help tip opens by focus and click, and Escape closes only the tip inside a modal", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /반관리/ }).click();

  // 제목·버튼을 반복하던 페이지 헤더 설명은 지웠다.
  await expect(page.getByText("기본 반을 기준으로 학생 배정과 수업 흐름을 관리합니다.")).toHaveCount(0);

  await page.getByRole("button", { name: "+ 반 개설" }).click();
  const templateModal = page.getByRole("dialog", { name: "반 개설" });
  await expect(templateModal).toBeVisible();

  // 모달 subtitle 로 늘 떠 있던 설명은 제목 옆 물음표 뒤로 들어갔다.
  const trigger = templateModal.getByRole("button", { name: "반 개설 설명" });
  const tip = templateModal.locator('[role="tooltip"]');
  await expect(trigger).toBeVisible();
  await expect(tip).toBeHidden();
  await expect(tip).toContainText("요일과 시간은 이 반의 정규 수업 기본값입니다.");
  // 설명은 닫혀 있어도 DOM 에 남아 aria-describedby 가 항상 유효하다.
  await expect(trigger).toHaveAttribute("aria-describedby", (await tip.getAttribute("id")) ?? "");

  // 키보드: focus 로 열린다.
  await trigger.focus();
  await expect(tip).toBeVisible();

  // Esc 는 가장 안쪽 레이어(설명)만 닫는다. 모달은 열려 있어야 한다.
  await page.keyboard.press("Escape");
  await expect(tip).toBeHidden();
  await expect(templateModal).toBeVisible();

  // 터치·마우스: 클릭으로 열어 고정하고, 같은 버튼을 다시 눌러 닫는다.
  await trigger.click();
  await expect(tip).toBeVisible();
  await trigger.click();
  await expect(tip).toBeHidden();

  // 클릭으로 연 설명도 Esc 로 닫히고, 그 뒤의 Esc 는 모달로 간다.
  await trigger.click();
  await expect(tip).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(tip).toBeHidden();
  await expect(templateModal).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(templateModal).toBeHidden();

  expect(pageErrors).toEqual([]);
});
