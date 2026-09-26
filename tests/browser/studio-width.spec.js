import { expect, test } from "./fixtures.js";
import { loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test("both studios use available width with paired editing and no mobile overflow", async ({ page, request }) => {
  test.setTimeout(90000);
  await resetSafeFixture(request);
  await loginAsTeacher(page);
  // 2026-09-25 · .appFrame 은 grid-template-columns 에 180ms transition 이 걸려 있다(사이드바 ‹ 토글용).
  // 뷰포트를 바꾼 뒤 재면 전환 시작 전(1024 에서 사이드바 294px 기준 690px)이나 중간값이 잡혀
  // 두 스튜디오 수치가 달라진다. 폭을 재는 테스트에서는 전환을 꺼서 항상 최종 배치를 잰다.
  await page.addStyleTag({ content: ".appFrame { transition: none !important; }" });
  const widths = {};
  for (const name of ["시험분석", "SNS 스튜디오"]) {
    await page.setViewportSize({ width: 2844, height: 1038 });
    await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: new RegExp(name) }).click();
    await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
    for (const width of [2844, 1920, 1024, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      // 2026-09-25 · .appFrame 은 grid-template-columns 에 180ms transition 이 걸려 있다(사이드바 ‹ 토글용).
      // 폭을 바꾼 직후 재면 레일(86px)로 줄어드는 도중의 중간값이 잡혀 두 스튜디오 수치가 달라진다.
      // 연속 두 번 같은 값이 나올 때까지 기다린 뒤 잰다.
      const readDimensions = () => page.locator(".studioPage").evaluate(element => {
        const parent = element.parentElement;
        const style = getComputedStyle(parent);
        const available = parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        return { available, actual: element.getBoundingClientRect().width, overflow: document.documentElement.scrollWidth > innerWidth };
      });
      let dimensions = await readDimensions();
      await expect.poll(async () => {
        const next = await readDimensions();
        const settled = Math.abs(next.actual - dimensions.actual) < 0.5;
        dimensions = next;
        return settled;
      }, { timeout: 5000 }).toBe(true);
      expect(Math.abs(dimensions.available - dimensions.actual)).toBeLessThan(2);
      expect(dimensions.overflow).toBe(false);
      (widths[name] ||= []).push(dimensions.actual);
      if (name === "시험분석" && width >= 1920) {
        const sideBySide = await page.locator(".examAnalysisWorkPanel").evaluate(element => {
          const form = element.querySelector(".examAnalysisFormPanel").getBoundingClientRect();
          const source = element.querySelector(".examAnalysisUploadPanel").getBoundingClientRect();
          return source.left > form.left && Math.abs(form.top - source.top) < 2;
        });
        expect(sideBySide).toBe(true);
      }
      if (width === 2844) await page.screenshot({ path: `test-results/studio-width-${name === "시험분석" ? "exam" : "sns"}.png` });
    }
  }
  expect(widths["시험분석"]).toEqual(widths["SNS 스튜디오"]);
  await page.setViewportSize({ width: 1920, height: 1000 });
  await page.getByRole("button", { name: "+ 새 콘텐츠" }).click();
  await page.getByLabel("학교", { exact: true }).fill("안전고");
  await page.getByLabel("선생님 메모 · 준비 과정과 학생의 변화", { exact: true }).fill("개념을 복습하고 풀이를 설명한 기록");
  await page.screenshot({ path: "test-results/studio-width-preparation.png" });
  expect(await page.locator(".studioPreparation").evaluate(element => {
    const [facts, notes] = [...element.children].map(child => child.getBoundingClientRect());
    return notes.left > facts.left && Math.abs(facts.top - notes.top) < 2;
  })).toBe(true);
  await page.getByRole("tab", { name: "3 완성본" }).click();
  await page.getByLabel("최종 본문", { exact: true }).fill("가로폭 확인용 임시 편집본");
  await expect(page.getByRole("region", { name: "콘텐츠 미리보기" })).toContainText("가로폭 확인용 임시 편집본");
  const columns = await page.locator(".studioColumns").evaluate(element => {
    const [editor, preview] = [...element.children].map(child => child.getBoundingClientRect());
    return { editorWidth: editor.width, previewWidth: preview.width, beside: preview.left > editor.left && Math.abs(editor.top - preview.top) < 2 };
  });
  expect(columns.editorWidth).toBeGreaterThan(600);
  expect(columns.previewWidth).toBeGreaterThan(600);
  expect(columns.beside).toBe(true);
  await page.screenshot({ path: "test-results/studio-width-editor.png" });
});
