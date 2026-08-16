import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("resource material converges an edited draft after an unknown insert, survives reload, and preserves rows on delete conflict", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const postRequests = [];
  let releaseSave;
  const saveGate = new Promise((resolve) => {
    releaseSave = resolve;
  });
  await page.route("**/api/resource-materials", async (route) => {
    if (route.request().method() !== "POST") return route.continue();
    postRequests.push(route.request().postDataJSON());
    const response = await route.fetch();
    if (postRequests.length === 1) {
      await saveGate;
      return route.fulfill({
        contentType: "application/json",
        json: { error: "첫 저장 응답을 확인하지 못했습니다.", ok: false },
        status: 504
      });
    }
    await route.fulfill({ response });
  });

  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  await navigation.getByRole("button", { name: /자료함/ }).click();
  const form = page.locator("form.resourceForm");
  await expect(form.getByText(/private Storage에 업로드됩니다/)).toBeVisible();
  await form.getByLabel("자료명").fill("안전 자료함 저장 계약");
  await expect(form.getByText("자료 등록 · 변경됨")).toBeVisible();
  await form.getByLabel("파일명").fill("safe-resource.pdf");
  await form.getByRole("button", { name: "자료 등록" }).click();

  await expect(form.locator("fieldset")).toHaveAttribute("disabled", "");
  await expect(form.getByLabel("자료명")).toHaveValue("안전 자료함 저장 계약");
  await expect(page.locator(".resourceListItem")).toHaveCount(0);
  await expect(page.locator(".resourceMaterialSaveFeedback.saving")).toContainText("저장 중");
  releaseSave();

  await expect(page.locator(".resourceMaterialSaveFeedback.failed")).toContainText("첫 저장 응답을 확인하지 못했습니다.");
  await expect(page.locator(".resourceListItem")).toHaveCount(0);
  await expect(form.getByLabel("자료명")).toHaveValue("안전 자료함 저장 계약");
  await form.getByLabel("자료명").fill("안전 자료함 최신 초안");
  await form.getByLabel("파일명").fill("safe-resource-latest.pdf");
  await form.getByRole("button", { name: "자료 등록" }).click();

  await expect(page.locator(".resourceListItem")).toContainText("안전 자료함 최신 초안");
  await expect(form.getByLabel("자료명")).toHaveValue("");
  await expect(page.locator(".resourceMaterialSaveFeedback.saved")).toContainText("Supabase 저장 및 목록 재조회 확인 완료");
  expect(postRequests).toHaveLength(2);
  expect(postRequests[1].material.materialId).toBe(postRequests[0].material.materialId);
  expect(postRequests[1].material.createdAt).toBe(postRequests[0].material.createdAt);

  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const savedRow = page.locator(".resourceListItem").filter({ hasText: "안전 자료함 최신 초안" });
  await expect(savedRow).toHaveCount(1);

  await page.route("**/api/resource-material-files", (route) => {
    if (route.request().method() !== "DELETE") return route.continue();
    return route.fulfill({
      contentType: "application/json",
      json: { code: "RESOURCE_MATERIAL_CONFLICT", error: "다른 화면에서 먼저 변경되었습니다.", ok: false },
      status: 409
    });
  });
  await savedRow.getByRole("button", { name: "삭제" }).click();
  await expect(savedRow).toHaveCount(1);
  await expect(savedRow.locator(".resourceMaterialSaveFeedback.failed")).toContainText("다른 화면에서 먼저 변경되었습니다.");
  expect(pageErrors).toEqual([]);
});

test("resource material file uploads privately, opens through an authenticated URL, survives reload, and deletes both sources", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const form = page.locator("form.resourceForm");
  await form.getByLabel("자료명").fill("안전 Storage 자료");
  await form.getByLabel("자료 파일 선택").setInputFiles({
    buffer: Buffer.from("safe resource material fixture"),
    mimeType: "text/plain",
    name: "safe-storage-resource.txt"
  });
  await expect(form.getByLabel("파일명")).toHaveValue("safe-storage-resource.txt");
  await expect(form.getByLabel("파일명")).toBeDisabled();
  await form.getByRole("button", { name: "자료 등록" }).click();

  const row = page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" });
  await expect(row).toHaveCount(1);
  await expect(page.locator(".resourceMaterialSaveFeedback.saved")).toContainText("Storage 업로드와 Supabase row 재조회 확인 완료");

  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  const reloadedRow = page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" });
  await expect(reloadedRow).toHaveCount(1);

  const popupPromise = page.waitForEvent("popup");
  await reloadedRow.getByRole("button", { name: "열기" }).click();
  const popup = await popupPromise;
  await expect.poll(() => popup.url()).toContain("/api/safe-fixture/resource-material-file?path=");
  await popup.close();

  await reloadedRow.getByRole("button", { name: "삭제" }).click();
  await expect(reloadedRow).toHaveCount(0);
  await page.reload();
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /자료함/ }).click();
  await expect(page.locator(".resourceListItem").filter({ hasText: "안전 Storage 자료" })).toHaveCount(0);
  expect(pageErrors).toEqual([]);
});
