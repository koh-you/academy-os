// 세션·자료 정체성 계약.
//
// 1) 활동 중 세션 연장은 30분마다 실제로 나가야 한다. 2026-09-09~19 에는 App 이 렌더될
//    때마다(수업일지 출결 폴링으로 7초에 두 번) 갱신 타이머가 되돌아가 8시간 토큰이
//    낮에 그냥 만료됐다. 갱신으로 토큰만 바뀔 때 16개 부트스트랩 조회가 다시 돌면 안 된다.
// 2) 원장이 사이드바에서 다른 선생님을 고르면 그 선생님 자료를 새로 받아 보여주고,
//    새로고침해도 선택이 남아야 한다. 이전에는 헤더만 바뀌고 화면은 원장 자료 그대로였다.
import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("session refresh fires after 30 minutes of activity and a rotated token does not re-run the bootstrap", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.clock.install({ time: new Date("2026-09-19T09:00:00+09:00") });
  let studentsRequests = 0;
  let refreshRequests = 0;
  await page.route("**/api/students*", async (route) => {
    if (route.request().method() === "GET") studentsRequests += 1;
    await route.fallback();
  });
  await page.route("**/api/auth/refresh", async (route) => {
    refreshRequests += 1;
    await route.fulfill({
      json: { account: { sessionToken: `safe-fixture-session-${refreshRequests}` }, ok: true, safeFixture: true }
    });
  });

  await loginAsTeacher(page);
  await expect.poll(() => studentsRequests).toBe(1);

  // 30분이 되기 전의 활동은 갱신을 부르지 않는다.
  await page.clock.fastForward(20 * 60 * 1000);
  await page.keyboard.press("Shift");
  expect(refreshRequests).toBe(0);

  // 출결 폴링이 계속 App 을 다시 그려도 30분이 차면 한 번 갱신한다.
  await page.clock.fastForward(11 * 60 * 1000);
  await page.keyboard.press("Shift");
  await expect.poll(() => refreshRequests).toBe(1);
  await page.keyboard.press("Shift");
  await page.keyboard.press("Shift");
  expect(refreshRequests).toBe(1);

  // 토큰만 바뀌었다 — 자료는 그대로이므로 부트스트랩이 다시 돌면 안 된다.
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await page.waitForTimeout(500);
  expect(studentsRequests).toBe(1);
  expect(pageErrors).toEqual([]);
});

test("integration status is loaded with the teacher token after an in-page login, not once before it", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const statusRequests = [];
  await page.route("**/api/integrations/status", async (route) => {
    statusRequests.push(route.request().headers().authorization ?? "");
    await route.fallback();
  });

  // 로그인 화면(세션 없음)에서는 부르지 않는다 — 토큰 없이 부르면 401 로 끝나고 값이 null 로 남아
  // 수업일지 "즉시 발송" 이 조용히 테스트 번호로 가던 경로다.
  await page.goto("/");
  await expect(page.getByRole("button", { name: "선생님" })).toBeVisible();
  await page.waitForTimeout(500);
  expect(statusRequests).toEqual([]);

  await loginAsTeacher(page);
  await expect.poll(() => statusRequests.length).toBe(1);
  expect(statusRequests[0]).toBe("Bearer safe-fixture-session");
  expect(pageErrors).toEqual([]);
});

test("owner switching the viewed teacher re-fetches that teacher's data without reload and keeps the choice after reload", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const tenantBStudents = [
    {
      grade: "중2",
      loginId: "tenant_b_student",
      name: "테넌트B 학생",
      pin: "1234",
      schoolName: "안전중",
      status: "active",
      studentId: "tenant-b-student",
      updatedAt: "2026-09-01T00:00:00.000Z"
    }
  ];
  const studentsRequestTenants = [];
  const appStateWrites = [];
  await page.route("**/api/app-state*", async (route) => {
    if (route.request().method() !== "POST") {
      await route.fallback();
      return;
    }
    // 완료된 뒤에 기록한다 — 안전 fixture 는 app_state 저장을 800ms 늦춰 응답한다.
    const response = await route.fetch();
    appStateWrites.push(route.request().headers()["x-view-tenant-id"] ?? "");
    await route.fulfill({ response });
  });
  await page.route("**/api/teacher-accounts", async (route) => {
    await route.fulfill({
      json: {
        accounts: [
          { isActive: true, loginId: "preview", name: "안전 미리보기 교사", teacherId: "safe-preview-teacher", teacherRole: "owner", tenantId: "tenant_default" },
          { isActive: true, loginId: "kim", name: "김선생", teacherId: "teacher-kim", teacherRole: "assistant", tenantId: "tenant_b" }
        ],
        ok: true,
        safeFixture: true
      }
    });
  });
  await page.route("**/api/students*", async (route) => {
    if (route.request().method() !== "GET") {
      await route.fallback();
      return;
    }
    const viewTenantId = route.request().headers()["x-view-tenant-id"] ?? "";
    studentsRequestTenants.push(viewTenantId);
    if (viewTenantId !== "tenant_b") {
      await route.fallback();
      return;
    }
    await route.fulfill({ json: { ok: true, safeFixture: true, source: "supabase", students: tenantBStudents } });
  });

  await loginAsTeacher(page);
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await expect(page.getByRole("button", { name: "월경계 학생 정보 수정" })).toBeVisible();
  expect(studentsRequestTenants).toEqual([""]);
  // 안전 fixture 는 app_state 가 비어 있어 첫 부트스트랩이 기본값을 심는다(새 교사의 첫 로그인과 같다).
  // 그 저장이 끝난 뒤에 전환해야 "그 선생님 테넌트에 app_state 를 쓰지 않는다" 를 볼 수 있다 —
  // 자료가 이미 있는 테넌트로 전환하는 운영 상황과 같다.
  await expect.poll(() => appStateWrites.length).toBeGreaterThan(0);
  const ownTenantWritesBeforeSwitch = appStateWrites.length;

  const switcher = page.getByRole("group", { name: "선생님별 자료 보기" });
  await switcher.getByRole("button", { name: "김선생" }).click();
  // 새로고침 없이 그 선생님 자료로 바뀐다.
  await expect(page.getByRole("button", { name: "테넌트B 학생 정보 수정" })).toBeVisible();
  await expect(page.getByRole("button", { name: "월경계 학생 정보 수정" })).toHaveCount(0);
  await expect(switcher.getByRole("button", { name: "김선생" })).toHaveAttribute("aria-pressed", "true");
  expect(studentsRequestTenants).toEqual(["", "tenant_b"]);
  // 전환 자체가 원장 설정을 그 선생님 테넌트에 저장해 버리면 안 된다 — 그 테넌트 헤더로
  // 나가는 app_state 저장이 0건이어야 한다(자기 테넌트 자동저장은 이 검사와 무관하다).
  await page.waitForTimeout(800);
  expect(appStateWrites.filter((tenantId) => tenantId === "tenant_b")).toEqual([]);
  expect(appStateWrites.length).toBe(ownTenantWritesBeforeSwitch);

  // 새로고침해도 선택과 자료가 남는다.
  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await expect(page.getByRole("group", { name: "선생님별 자료 보기" }).getByRole("button", { name: "김선생" })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("navigation", { name: "주요 화면" }).getByRole("button", { name: /학생관리/ }).click();
  await expect(page.getByRole("button", { name: "테넌트B 학생 정보 수정" })).toBeVisible();
  expect(studentsRequestTenants.at(-1)).toBe("tenant_b");

  // 자기 자료로 돌아오면 다시 받아온다.
  await page.getByRole("group", { name: "선생님별 자료 보기" }).getByRole("button", { name: "안전 미리보기 교사 (나)" }).click();
  await expect(page.getByRole("button", { name: "월경계 학생 정보 수정" })).toBeVisible();
  await expect(page.getByRole("button", { name: "테넌트B 학생 정보 수정" })).toHaveCount(0);
  await page.waitForTimeout(800);
  expect(appStateWrites.filter((tenantId) => tenantId === "tenant_b")).toEqual([]);
  expect(pageErrors).toEqual([]);
});
