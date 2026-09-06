import { expect, test } from "./fixtures.js";
import { loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";
test.beforeEach(async ({ request }) => { await resetSafeFixture(request); });
async function openStudio(page) { await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /블로그 스튜디오/ }).click(); }
async function prepare(page) {
  await loginAsTeacher(page); await openStudio(page);
  await page.getByRole("button", { name: "+ 새 콘텐츠" }).click();
  await page.getByLabel("학교", { exact: true }).fill("안전고");
  await page.getByLabel("시험·수업명", { exact: true }).fill("1학기 기말고사");
  await page.getByLabel("익명 학생 표시명").fill("안○○");
  await page.getByLabel("공개할 성과").fill("수학 92점");
}
test("blog hybrid exports approved facts, imports preview and persists final version after reload", async ({ page, request }) => {
  await prepare(page);
  await page.getByRole("button", { name: "2 Chat 전달" }).click();
  await expect(page.getByRole("button", { name: "Chat 작업용 복사" })).toBeDisabled();
  await page.getByRole("button", { name: "1 자료 준비" }).click();
  await page.getByLabel("학생 자료 공개 동의", { exact: true }).selectOption("agreed");
  await page.getByLabel(/공개할 사실·수치를 확인/).check();
  await page.getByRole("button", { name: "2 Chat 전달" }).click();
  await expect(page.getByLabel("Chat 전달 자료 미리보기")).toHaveValue(/수학 92점/);
  await expect(page.getByRole("button", { name: "Chat 작업용 복사" })).toBeEnabled();
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Chat 작업용 복사" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("수학 92점");
  await page.getByRole("button", { name: "3 완성본" }).click();
  await page.getByText("Chat 결과 한 번에 가져오기", { exact: true }).click();
  await page.getByLabel("최종 제목", { exact: true }).fill("사람이 쓴 제목");
  await page.getByLabel("Chat 결과 JSON").fill(JSON.stringify({ title: "새 제목", body: "실제 노력의 기록" }));
  await page.getByRole("button", { name: "가져오기 미리보기" }).click();
  await expect(page.getByLabel("최종 제목", { exact: true })).toHaveValue("사람이 쓴 제목");
  await page.getByRole("button", { name: "미리본 결과를 편집본에 반영" }).click();
  await page.getByRole("button", { name: "완성본 확정 및 저장" }).click();
  await expect(page.locator(".blogStatus")).toHaveText("서버 저장 확인 완료");
  const state = await (await request.get(`${safeApiBaseUrl}/api/app-state?includeRows=true`)).json();
  expect(state.states.blogHybridContents[0].versions[0].copy.body).toBe("실제 노력의 기록");
  await page.reload(); await openStudio(page);
  await page.getByRole("button", { name: "3 완성본" }).click();
  await expect(page.getByLabel("최종 제목", { exact: true })).toHaveValue("새 제목");
  await page.getByLabel("최종 본문", { exact: true }).fill("추가 편집");
  await page.getByRole("button", { name: "편집 내용 저장" }).click();
  await expect(page.locator(".blogStatus")).toHaveText("서버 저장 확인 완료");
  const saved = await (await request.get(`${safeApiBaseUrl}/api/app-state`)).json();
  expect(saved.states.blogHybridContents[0].versions[0].copy.body).toBe("실제 노력의 기록");
  expect(saved.states.blogHybridContents[0].copy.body).toBe("추가 편집");
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: "test-results/blog-hybrid-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.getByRole("button", { name: "1 자료 준비" }).click();
  await page.screenshot({ path: "test-results/blog-hybrid-desktop.png", fullPage: true });
});
test("blog hybrid keeps draft when server rejects a stale save", async ({ page }) => {
  await prepare(page);
  await page.route("**/api/app-state", async route => {
    if (route.request().method() === "POST" && route.request().postData()?.includes("blogHybridContents")) return route.fulfill({ status: 409, contentType: "application/json", body: JSON.stringify({ ok: false, error: "다른 화면에서 변경되었습니다." }) });
    await route.continue();
  });
  await page.getByRole("button", { name: "편집 내용 저장" }).click();
  await expect(page.getByRole("alert")).toContainText("다른 화면에서 변경되었습니다");
  await expect(page.getByLabel("공개할 성과")).toHaveValue("수학 92점");
  await expect(page.locator(".blogStatus")).toContainText("저장 실패");
});

test("blog hybrid does not report saved when server reread differs", async ({ page }) => {
  await prepare(page);
  await page.route("**/api/app-state?**", async route => {
    if (!route.request().url().includes("verify=blog-")) return route.continue();
    const response = await route.fetch();
    const payload = await response.json();
    payload.states.blogHybridContents = [];
    await route.fulfill({ response, json: payload });
  });
  await page.getByRole("button", { name: "편집 내용 저장" }).click();
  await expect(page.locator(".blogStatus")).toContainText("저장 실패");
  await expect(page.getByLabel("공개할 성과")).toHaveValue("수학 92점");
});
