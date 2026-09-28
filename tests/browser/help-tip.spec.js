import { expect, test } from "./fixtures.js";
import {
  collectPageErrors,
  loginAsTeacher,
  navigateCalendarToMonth,
  resetSafeFixture,
  safeApiBaseUrl
} from "./safeSmokeSupport.js";

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

// 2026-09-25 · 잘림 회귀(구체 사례). 시험분석 프롬프트 제작실의 벤치마크 문구 적용 물음표는
// `.examPromptRoleCard { overflow: clip }` 안에 있고 말풍선(320px)이 카드 안쪽 폭보다 넓다.
// 이전에는 말풍선이 absolute 라 '적용 후 ㅈ' 로 카드 경계에서 잘렸고, 소스 문자열 grep 잠금은
// 그걸 전혀 잡지 못했다. 말풍선이 fixed 인 지금은 카드 rect 를 벗어나는 것이 정상이므로
// 조상 rect 비교가 아니라 hit test 로 본다 — 잘렸다면 그 지점의 elementFromPoint 가 말풍선이 아니다.
const promptStudioRunId = "help-tip-prompt-studio-run";

async function seedConfirmedExamAnalysisRun(request) {
  async function post(path, data) {
    const response = await request.post(`${safeApiBaseUrl}${path}`, { data });
    expect(response.ok(), `${path} 시드 실패`).toBeTruthy();
    return response.json();
  }
  await post("/api/exam-analysis-runs", {
    analysisRun: {
      analysisRunId: promptStudioRunId,
      examCycle: "1학기 기말",
      grade: "고1",
      schoolName: "상계고",
      subject: "수학",
      title: "HelpTip 잘림 회귀용 분석"
    }
  });
  await post("/api/exam-analysis-runs/confirm-question-count", {
    analysisRunId: promptStudioRunId,
    confirmedBy: "preview",
    questionCount: 4
  });
  await post("/api/exam-analysis-runs/save-question-reviews", {
    analysisRunId: promptStudioRunId,
    reviews: ["다항식", "다항식", "경우의 수", "경우의 수"].map((unitName, index) => ({
      confirmed: true,
      difficulty: index % 2 === 0 ? "중" : "상",
      isImportantQuestion: index === 3,
      mainType: `${unitName} 대표 유형`,
      questionNumber: index + 1,
      subTypes: [`${unitName} 소유형`],
      unitName
    }))
  });
}

async function measureTipHitTest(page, triggerLabel) {
  return page.evaluate((label) => {
    const trigger = [...document.querySelectorAll(".helpTip > .helpTipTrigger")].find(
      (node) => node.getAttribute("aria-label") === label
    );
    if (!trigger) return null;
    const bubble = trigger.parentElement.querySelector(".helpTipBubble");
    const rect = bubble.getBoundingClientRect();
    const hitMisses = [
      ["가운데", rect.left + rect.width / 2, rect.top + rect.height / 2],
      ["오른쪽 아래 모서리", rect.right - 3, rect.bottom - 3],
      ["오른쪽 위 모서리", rect.right - 3, rect.top + 3],
      ["왼쪽 아래 모서리", rect.left + 3, rect.bottom - 3]
    ]
      .filter(([, x, y]) => {
        const hit = document.elementFromPoint(x, y);
        return !(hit && (hit === bubble || bubble.contains(hit)));
      })
      .map(([name]) => name);
    const clipper = trigger.closest(".examPromptRoleCard");
    return {
      bubble: { bottom: rect.bottom, left: rect.left, right: rect.right, top: rect.top },
      cardRect: clipper ? clipper.getBoundingClientRect().toJSON() : null,
      cardOverflow: clipper ? getComputedStyle(clipper).overflowX : "",
      hitMisses,
      position: getComputedStyle(bubble).position,
      text: bubble.textContent.trim(),
      viewport: { height: document.documentElement.clientHeight, width: document.documentElement.clientWidth }
    };
  }, triggerLabel);
}

test("exam analysis phrase picker tip is fully painted outside its overflow:clip card", async ({ page, request }) => {
  test.slow();
  const pageErrors = collectPageErrors(page);
  await seedConfirmedExamAnalysisRun(request);
  await loginAsTeacher(page);
  await page.addStyleTag({ content: ".appFrame { transition: none !important; }" });

  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /시험분석/ }).first().click();
  const libraryToggle = page.getByRole("button", { name: "자료 목록 열기" });
  if (await libraryToggle.count()) await libraryToggle.first().click();
  await page.getByLabel("분석 목록 학교").selectOption("상계고");
  await page.getByLabel("분석 목록 학년").selectOption("고1");
  await page.getByLabel("분석 목록 고사").selectOption("1학기 기말");
  await page.getByText("HelpTip 잘림 회귀용 분석").first().click();
  await page.getByRole("tab", { name: /최종 미리보기/ }).first().click();
  await page.getByRole("tab", { name: "카드 제작" }).click();
  await expect(page.locator(".examPromptStudio")).toBeVisible();

  // 카드 2(시험 분석): PhrasePicker 가 카드의 마지막 자식이라 아래로도 잘리던 자리다.
  await page.getByRole("button", { name: /2\. 시험 분석/ }).first().click();
  const trigger = page.getByRole("button", { name: "문구 적용 설명" }).first();
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  await expect(page.locator(".helpTipBubble-open")).toBeVisible();

  for (const [where, width, height] of [["1280", 1280, 720], ["390", 390, 820]]) {
    if (page.viewportSize()?.width !== width) {
      await page.setViewportSize({ height, width });
      await trigger.scrollIntoViewIfNeeded();
      await trigger.click();
      await expect(page.locator(".helpTipBubble-open")).toBeVisible();
    }
    const measured = await measureTipHitTest(page, "문구 적용 설명");
    expect(measured, `${where}: 물음표를 찾지 못했다`).not.toBeNull();
    expect(measured.text, where).toBe("선택만으로는 바뀌지 않습니다. 적용 후 자유롭게 수정하고 저장하세요.");
    // 이 자리가 회귀 테스트로서 의미가 있으려면 잘라내는 조상이 실제로 있어야 한다.
    expect(measured.cardOverflow, `${where}: 역할 카드가 더는 잘라내지 않는다`).toBe("clip");
    // 증상 먼저: 말풍선의 네 지점이 실제로 그려져 있는지. 그 다음이 그 수단(fixed)이다.
    expect(measured.hitMisses, `${where}: 말풍선이 잘려 안 보이는 지점이 있다`).toEqual([]);
    expect(measured.position, where).toBe("fixed");
    expect(measured.bubble.left, `${where}: 뷰포트 왼쪽 잘림`).toBeGreaterThanOrEqual(-1);
    expect(measured.bubble.top, `${where}: 뷰포트 위쪽 잘림`).toBeGreaterThanOrEqual(-1);
    expect(measured.bubble.right, `${where}: 뷰포트 오른쪽 잘림`).toBeLessThanOrEqual(measured.viewport.width + 1);
    expect(measured.bubble.bottom, `${where}: 뷰포트 아래쪽 잘림`).toBeLessThanOrEqual(measured.viewport.height + 1);
    await page.keyboard.press("Escape");
  }

  expect(pageErrors).toEqual([]);
});

// 2026-09-28 · 출결 체크 모달의 남은 상시 설명 3건(등원 시각 · 하원 시각 · 저장 방식)을 물음표로 옮겼다.
// 1·2 는 원래 <label> 이 입력을 감싸고 있었다. 그 안에 물음표 <button> 을 넣으면 label 의 연결 대상이
// 버튼으로 바뀌어 입력칸이 접근 가능한 이름을 잃는다 — 그래서 제목 줄을 <label> 밖으로 빼고
// htmlFor/id 로 명시 연결했다. 여기서 (1) 세 물음표가 열리고 (2) 두 입력의 접근 가능한 이름이
// "등원 시각"·"하원 시각" 으로 남아 있고 (3) 확인 패널의 제목·요약·3버튼이 그대로 보이는지 잠근다.
async function measureAttendanceFieldNames(page) {
  return page.evaluate(() => {
    const dialog = document.querySelector(".attendanceModal");
    const inputs = [...dialog.querySelectorAll('.fieldGrid input[type="time"]')];
    return inputs.map((input) => ({
      ariaLabel: input.getAttribute("aria-label"),
      // 접근 가능한 이름의 원천: <label for> 이 이 입력을 가리키는지.
      labelTargetsInput: [...(input.labels ?? [])].every((label) => label.control === input),
      labels: [...(input.labels ?? [])].map((label) => label.textContent.trim())
    }));
  });
}

async function openAttendanceModal(page) {
  await navigateCalendarToMonth(page, 2026, 8);
  await page.getByRole("gridcell", { name: /2026-08-01 · \d+개 수업/ }).getByRole("button", { name: /월 경계 연동반/ }).click();
  const lessonJournal = page.getByRole("dialog", { name: "수업일지" });
  await lessonJournal.locator(".attendanceBadge").first().click();
  const modal = page.getByRole("dialog", { name: "월경계 학생 출결 체크" });
  await expect(modal).toBeVisible();
  return modal;
}

test("attendance modal help tips open and the time inputs keep their accessible names", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.addStyleTag({ content: ".appFrame { transition: none !important; }" });
  const modal = await openAttendanceModal(page);

  // 상시 노출했던 <small> 안내는 사라졌다. 문구는 닫힌 말풍선 안에만 남는다
  // (HelpTip 은 설명을 늘 DOM 에 두고 visibility 로만 감춘다 — aria-describedby 가 항상 유효해야 한다).
  await expect(modal.locator(".fieldGrid small")).toHaveCount(0);
  const fieldTips = modal.locator('.fieldGrid [role="tooltip"]');
  await expect(fieldTips).toHaveCount(2);
  await expect(fieldTips.first()).toBeHidden();
  await expect(fieldTips.nth(1)).toBeHidden();

  // 제목 + 등원 시각 + 하원 시각 = 이 단계에 물음표 3개. .fieldGrid 안에는 2개까지만 둔다.
  await expect(modal.locator(".helpTip > .helpTipTrigger")).toHaveCount(3);
  await expect(modal.locator(".fieldGrid .helpTip > .helpTipTrigger")).toHaveCount(2);

  for (const [label, text] of [
    ["출결 체크 설명", "지각/결석이면 시간과 사유를 남깁니다."],
    ["등원 시각 설명", "출결을 못 찍은 학생은 실제 등원 시각을 입력하세요. 지각 분은 수업 시작 기준으로 자동 계산됩니다."],
    ["하원 시각 설명", "하원 처리를 못 찍은 학생은 실제 하원 시각을 입력하세요."]
  ]) {
    const trigger = modal.getByRole("button", { name: label });
    await trigger.click();
    const bubble = page.locator(".helpTipBubble-open");
    await expect(bubble).toBeVisible();
    await expect(bubble).toHaveText(text);
    expectTipFullyVisible(await measureOpenTip(page, label), `출결 체크 · ${label}`);
    await page.keyboard.press("Escape");
    await expect(bubble).toHaveCount(0);
  }

  // 입력칸의 접근 가능한 이름은 그대로다 — 이름으로 찾은 입력이 곧 time 입력이어야 한다.
  // exact 를 켜야 물음표 트리거("등원 시각 설명")까지 같이 잡히지 않는다.
  await expect(modal.getByRole("textbox", { exact: true, name: "등원 시각" })).toHaveAttribute("type", "time");
  await expect(modal.getByRole("textbox", { exact: true, name: "하원 시각" })).toHaveAttribute("type", "time");
  expect(await measureAttendanceFieldNames(page)).toEqual([
    { ariaLabel: null, labelTargetsInput: true, labels: ["등원 시각"] },
    { ariaLabel: null, labelTargetsInput: true, labels: ["하원 시각"] }
  ]);

  // 저장 방식 확인 패널: 제목·저장될 값 요약·3버튼은 그대로 보이고 설명만 물음표 뒤에 있다.
  await modal.getByRole("button", { name: "결석", exact: true }).click();
  await modal.getByRole("button", { name: "출결 저장" }).click();
  const confirmPanel = modal.locator(".attendanceConfirmPanel");
  await expect(confirmPanel).toContainText("출결을 어떻게 저장할까요?");
  await expect(confirmPanel.locator(".attendanceConfirmSummary")).toContainText("저장될 값 · 상태 결석");
  await expect(confirmPanel.getByRole("button", { name: "취소" })).toBeVisible();
  await expect(confirmPanel.getByRole("button", { name: "저장만" })).toBeVisible();
  await expect(confirmPanel.getByRole("button", { name: "저장 후 다음 정각 알림톡 예약" })).toBeVisible();
  // 설명은 상시 노출되지 않는다 — 문구는 닫힌 말풍선 안에만 있다.
  await expect(confirmPanel.locator('[role="tooltip"]')).toBeHidden();
  await expect(confirmPanel.locator("p:visible")).toHaveCount(1);
  // 물음표는 제목 옆에 하나만. 이 단계의 모달 전체로는 4개가 된다.
  await expect(confirmPanel.locator(".helpTip > .helpTipTrigger")).toHaveCount(1);
  await expect(modal.locator(".helpTip > .helpTipTrigger")).toHaveCount(4);
  const saveModeTrigger = confirmPanel.getByRole("button", { name: "저장 방식 설명" });
  await saveModeTrigger.click();
  await expect(page.locator(".helpTipBubble-open")).toHaveText(
    "결석 기록만 저장하거나, 저장 후 학부모 결석 알림톡을 다음 예약 가능한 정각에 예약할 수 있습니다."
  );
  expectTipFullyVisible(await measureOpenTip(page, "저장 방식 설명"), "출결 저장 방식");
  await page.keyboard.press("Escape");

  // 결석이 아닐 때는 같은 물음표가 즉시 발송 문구를 보여준다(분기는 그대로 살아 있다).
  await confirmPanel.getByRole("button", { name: "취소" }).click();
  await modal.getByRole("button", { name: "지각", exact: true }).click();
  await modal.getByRole("button", { name: "출결 저장" }).click();
  await modal.locator(".attendanceConfirmPanel").getByRole("button", { name: "저장 방식 설명" }).click();
  await expect(page.locator(".helpTipBubble-open")).toHaveText(
    "출결 기록만 저장하거나, 저장 후 학부모에게 출결 알림톡까지 즉시 발송할 수 있습니다."
  );
  await page.keyboard.press("Escape");

  // 저장하지 않고 나간다 — 이 검사는 문구와 구조만 본다.
  await modal.locator(".attendanceConfirmPanel").getByRole("button", { name: "취소" }).click();
  expect(pageErrors).toEqual([]);
});

// 390px(모바일 폭)에서도 세 물음표 말풍선이 잘리지 않고, 입력 연결도 그대로다.
test("attendance modal help tips stay painted at 390px", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.addStyleTag({ content: ".appFrame { transition: none !important; }" });
  await page.setViewportSize({ height: 844, width: 390 });
  const modal = await openAttendanceModal(page);

  for (const label of ["출결 체크 설명", "등원 시각 설명", "하원 시각 설명"]) {
    const trigger = modal.getByRole("button", { name: label });
    await trigger.scrollIntoViewIfNeeded();
    await trigger.click();
    await expect(page.locator(".helpTipBubble-open")).toBeVisible();
    const measured = await measureTipHitTest(page, label);
    expect(measured.hitMisses, `390 · ${label}: 말풍선이 잘려 안 보이는 지점이 있다`).toEqual([]);
    expect(measured.position, `390 · ${label}`).toBe("fixed");
    await page.keyboard.press("Escape");
  }

  expect(await measureAttendanceFieldNames(page)).toEqual([
    { ariaLabel: null, labelTargetsInput: true, labels: ["등원 시각"] },
    { ariaLabel: null, labelTargetsInput: true, labels: ["하원 시각"] }
  ]);
  expect(pageErrors).toEqual([]);
});
