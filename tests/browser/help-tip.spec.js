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

// 2026-09-25 · 잘림 회귀. 말풍선을 absolute 로 두면 `overflow: clip|hidden|auto` 인 조상
// (시험분석 프롬프트 제작실의 `.examPromptRoleCard { overflow: clip }`, 스크롤 모달 본문 …)
// 경계에서 잘렸다. 지금은 fixed 로 띄우고 열릴 때마다 트리거 사각형을 재서 뷰포트 안으로 넣는다.
//
// 이 시점의 main 에는 말풍선보다 좁은 '가로' 클리핑 조상 안에 놓인 물음표가 없다
// (시험분석 제작실 물음표는 h1-exams 단위가 아직 병합 전이다). 그래서 아래 헬퍼는 특정 화면을
// 콕 집지 않고, 열린 말풍선이 '뷰포트 + 모든 클리핑 조상' 안에 들어오는지를 일반 계약으로 재
// 그런 자리가 생기는 순간 바로 잡히게 해 둔다.
async function measureOpenTip(page, triggerLabel) {
  return page.evaluate((label) => {
    const trigger = [...document.querySelectorAll(".helpTip > .helpTipTrigger")].find(
      (node) => node.getAttribute("aria-label") === label
    );
    if (!trigger) return null;
    const bubble = trigger.parentElement.querySelector(".helpTipBubble");
    const style = getComputedStyle(bubble);
    const box = (node) => {
      const rect = node.getBoundingClientRect();
      return { bottom: rect.bottom, left: rect.left, right: rect.right, top: rect.top };
    };
    const clippers = [];
    let node = trigger.parentElement.parentElement;
    while (node && node !== document.body && node !== document.documentElement) {
      const nodeStyle = getComputedStyle(node);
      if (nodeStyle.overflowX !== "visible" || nodeStyle.overflowY !== "visible") {
        clippers.push({ label: node.className?.toString?.().slice(0, 48) || node.tagName, ...box(node) });
      }
      node = node.parentElement;
    }
    return {
      anchor: box(trigger),
      bubble: box(bubble),
      clippers,
      position: style.position,
      viewport: { height: document.documentElement.clientHeight, width: document.documentElement.clientWidth },
      visibility: style.visibility
    };
  }, triggerLabel);
}

function expectTipFullyVisible(measured, where) {
  expect(measured, `${where}: 물음표를 찾지 못했다`).not.toBeNull();
  // 클리핑 조상을 벗어나는 수단이 fixed 다. absolute 로 되돌아가면 여기서 먼저 걸린다.
  expect(measured.position, where).toBe("fixed");
  expect(measured.visibility, where).toBe("visible");
  const { bubble, viewport } = measured;
  expect(bubble.right - bubble.left, `${where}: 말풍선이 그려지지 않았다`).toBeGreaterThan(40);
  expect(bubble.left, `${where}: 왼쪽 잘림`).toBeGreaterThanOrEqual(-1);
  expect(bubble.top, `${where}: 위쪽 잘림`).toBeGreaterThanOrEqual(-1);
  expect(bubble.right, `${where}: 오른쪽 잘림`).toBeLessThanOrEqual(viewport.width + 1);
  expect(bubble.bottom, `${where}: 아래쪽 잘림`).toBeLessThanOrEqual(viewport.height + 1);
  for (const clipper of measured.clippers) {
    // 스크롤해야 보이는 자리도 '잘렸다' 로 본다 — 설명은 열리는 순간 다 보여야 한다.
    expect(bubble.left, `${where}: ${clipper.label} 왼쪽 경계`).toBeGreaterThanOrEqual(clipper.left - 1);
    expect(bubble.top, `${where}: ${clipper.label} 위쪽 경계`).toBeGreaterThanOrEqual(clipper.top - 1);
    expect(bubble.right, `${where}: ${clipper.label} 오른쪽 경계`).toBeLessThanOrEqual(clipper.right + 1);
    expect(bubble.bottom, `${where}: ${clipper.label} 아래쪽 경계`).toBeLessThanOrEqual(clipper.bottom + 1);
  }
}

test("open help tip stays inside the viewport and every clipping ancestor", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  // 뷰포트를 바꾸는 검사라 .appFrame 의 180ms transition 이 값을 흔들지 않게 끈다.
  await page.addStyleTag({ content: ".appFrame { transition: none !important; }" });
  const nav = page.getByRole("navigation", { name: "주요 화면" });

  // main 에 실제로 물음표가 있는 화면들을 그대로 돈다(화면별 특수 셀렉터 없이 계약만 본다).
  for (const [screen, labels] of [
    ["오답관리", ["오답관리 설명"]],
    ["수업연구", ["수업연구 설명"]],
    ["AI 도구", ["AI 도구 설명", "문항 입력 설명"]]
  ]) {
    await nav.getByRole("button", { name: new RegExp(screen) }).first().click();
    for (const label of labels) {
      const trigger = page.getByRole("button", { name: label }).first();
      await trigger.scrollIntoViewIfNeeded();
      await trigger.click();
      await expect(page.locator(".helpTipBubble-open")).toBeVisible();
      expectTipFullyVisible(await measureOpenTip(page, label), `1280 · ${screen} · ${label}`);
      await page.keyboard.press("Escape");
    }
  }

  // 아래 공간이 모자라면 트리거 위로 뒤집는다.
  // 물음표가 화면 맨 아래에 오도록 뷰포트 높이를 그 물음표 위치에 맞춰 줄인다(폭은 그대로 1280).
  const flipLabel = "문항 입력 설명";
  const flipAnchorTop = await page.evaluate((label) => {
    window.scrollTo(0, 0);
    const trigger = [...document.querySelectorAll(".helpTip > .helpTipTrigger")].find(
      (node) => node.getAttribute("aria-label") === label
    );
    return trigger.getBoundingClientRect().top;
  }, flipLabel);
  await page.setViewportSize({ height: Math.round(flipAnchorTop) + 44, width: 1280 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByRole("button", { name: flipLabel }).first().click();
  await expect(page.locator(".helpTipBubble-open")).toBeVisible();
  const flipped = await measureOpenTip(page, flipLabel);
  expectTipFullyVisible(flipped, `아래 공간 부족 · ${flipLabel}`);
  const bubbleHeight = flipped.bubble.bottom - flipped.bubble.top;
  expect(
    flipped.anchor.bottom + 6 + bubbleHeight,
    "아래로 폈을 때 넘쳐야 뒤집기를 검증할 수 있다"
  ).toBeGreaterThan(flipped.viewport.height);
  expect(flipped.bubble.bottom, "아래 공간이 없으면 트리거 위로 뒤집는다").toBeLessThanOrEqual(flipped.anchor.top + 1);

  // fixed 는 스크롤을 따라오지 않으므로 열려 있는 동안 다시 계산해야 한다.
  const gapToAnchor = (measured) =>
    Math.min(
      Math.abs(measured.bubble.top - measured.anchor.bottom),
      Math.abs(measured.anchor.top - measured.bubble.bottom)
    );
  expect(gapToAnchor(flipped), "말풍선은 트리거에 붙어 있어야 한다").toBeLessThanOrEqual(8);
  const anchorBeforeScroll = flipped.anchor.top;
  await page.mouse.wheel(0, 120);
  await expect.poll(async () => (await measureOpenTip(page, flipLabel)).anchor.top).not.toBe(anchorBeforeScroll);
  const afterScroll = await measureOpenTip(page, flipLabel);
  expect(gapToAnchor(afterScroll), "스크롤 중 말풍선이 트리거에서 떨어졌다").toBeLessThanOrEqual(8);
  expectTipFullyVisible(afterScroll, "스크롤 후");
  await page.keyboard.press("Escape");

  // 390px(학부모·모바일 폭)에서도 좌우가 잘리지 않는다.
  await page.setViewportSize({ height: 780, width: 390 });
  for (const label of ["AI 도구 설명", "문항 입력 설명"]) {
    const trigger = page.getByRole("button", { name: label }).first();
    await trigger.scrollIntoViewIfNeeded();
    await trigger.click();
    await expect(page.locator(".helpTipBubble-open")).toBeVisible();
    expectTipFullyVisible(await measureOpenTip(page, label), `390 · ${label}`);
    await page.keyboard.press("Escape");
  }

  expect(pageErrors).toEqual([]);
});
