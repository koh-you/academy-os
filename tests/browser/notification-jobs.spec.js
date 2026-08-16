import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

test("notification and special lecture screens render through the extracted boundary", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /알림관리/ }).click();
  await expect(page.getByRole("heading", { name: "알림관리" })).toBeVisible();
  const composeTab = page.getByRole("tab", { name: "개별 발송" });
  await expect(composeTab).toBeVisible();
  await page.getByRole("tab", { name: /발송 완료/ }).click();
  await expect(page.getByText("NOTIFICATION HISTORY")).toBeVisible();
  await composeTab.click();
  const noticeTitle = page.getByPlaceholder("예: 휴원 안내, 보강 안내");
  const noticeBody = page.getByPlaceholder("보낼 공지 내용을 입력하세요.");
  await noticeTitle.fill("안전 경계 확인");
  await noticeBody.fill("실제 발송 없이 local draft만 확인합니다.");
  await expect(page.getByText("[안전 경계 확인] 실제 발송 없이 local draft만 확인합니다.")).toBeVisible();

  await navigation.getByRole("button", { name: /특강관리/ }).click();
  await expect(page.getByRole("heading", { name: "특강관리" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "특강 안내문" })).toBeVisible();
  expect(pageErrors).toEqual([]);
});

test("notification settings seed new notice and special lecture drafts without provider actions", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });

  await navigation.getByRole("button", { name: /설정/ }).click();
  await page.getByRole("tab", { name: "알림톡 문구" }).click();
  await expect(page.locator(".notificationTemplateEditor")).toHaveCount(10);
  await expect(page.getByText("재시험 학생 11시 알림톡")).toHaveCount(0);
  await page.getByLabel("교재 공지 초안 템플릿 문구").fill("안전 설정 교재 공지 초안");
  await page.getByLabel("특강 안내문 공지 초안 템플릿 문구").fill("안전 설정 특강 #{특강명}\n#{안내문링크}");
  await expect(page.getByRole("status").filter({ hasText: "설정 자동저장 · 저장 완료" })).toBeVisible();

  await page.reload();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
  await navigation.getByRole("button", { name: /설정/ }).click();
  await page.getByRole("tab", { name: "알림톡 문구" }).click();
  await expect(page.getByLabel("교재 공지 초안 템플릿 문구")).toHaveValue("안전 설정 교재 공지 초안");
  await expect(page.getByLabel("특강 안내문 공지 초안 템플릿 문구")).toHaveValue("안전 설정 특강 #{특강명}\n#{안내문링크}");

  await navigation.getByRole("button", { name: /알림관리/ }).click();
  await page.getByLabel("템플릿").selectOption("material");
  const noticeBody = page.getByPlaceholder("보낼 공지 내용을 입력하세요.");
  await expect(noticeBody).toHaveValue("안전 설정 교재 공지 초안");
  await noticeBody.fill("교사가 편집한 local 최종 문구");
  await expect(noticeBody).toHaveValue("교사가 편집한 local 최종 문구");

  await navigation.getByRole("button", { name: /특강관리/ }).click();
  await page.getByRole("tab", { name: "특강 안내문" }).click();
  if (await page.getByText("편집할 특강을 선택하세요.").isVisible()) {
    await page.locator(".specialLectureStoredToggle").click();
    await page.locator(".specialLectureSelector.stored button").first().click();
  }
  await page.getByRole("tab", { name: "알림톡 미리보기" }).click();
  await expect(page.locator(".specialLectureNoticePreview")).toContainText("안전 설정 특강");
  expect(pageErrors).toEqual([]);
});

test("notification reserve contract stays canonical in the safe API without provider actions", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
        forceDryRun: true,
        notificationJob: {
          notificationJobId: "safe-contract-reserve-job",
          notificationType: "notice_parent",
          scheduledAt: "2099-08-05T12:00:00.000Z",
          status: "scheduled"
        },
        reason: "safe browser contract"
    }
  });
  expect(reservationResponse.status()).toBe(200);
  expect(await reservationResponse.json()).toMatchObject({
    notificationJob: {
      notificationJobId: "safe-contract-reserve-job",
      provider: "academy-os",
      status: "dry_run"
    },
    ok: true,
    reserved: false,
    safeFixture: true,
    source: "supabase"
  });

  const rejectedLegacyResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
        notificationJobId: "legacy-direct-job",
        notificationType: "notice_parent",
        status: "scheduled"
    }
  });
  expect(rejectedLegacyResponse.status()).toBe(400);
  expect(await rejectedLegacyResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "notificationJobId",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification bulk reserve contract keeps per-job dry-run results in the safe API", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
  const notificationJobs = [
    {
      notificationJobId: "safe-contract-bulk-parent",
      notificationType: "notice_parent",
      scheduledAt: "2099-08-05T12:00:00.000Z",
      status: "scheduled"
    },
    {
      notificationJobId: "safe-contract-bulk-student",
      notificationType: "notice_student",
      scheduledAt: "2099-08-05T12:00:00.000Z",
      status: "scheduled"
    }
  ];

  const bulkResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve-bulk`, {
    data: {
      concurrency: 2,
      forceDryRun: true,
      notificationJobs,
      reason: "safe browser bulk contract"
    }
  });
  expect(bulkResponse.status()).toBe(200);
  const bulkResult = await bulkResponse.json();
  expect(bulkResult).toMatchObject({
    failedCount: 0,
    ok: true,
    reservedCount: 0,
    reusedCount: 0,
    safeFixture: true,
    source: "supabase"
  });
  expect(bulkResult.notificationJobs).toEqual(notificationJobs.map((job) => expect.objectContaining({
    notificationJobId: job.notificationJobId,
    provider: "academy-os",
    status: "dry_run"
  })));
  expect(bulkResult.results).toHaveLength(2);
  expect(bulkResult.results.every((result) => result.reserved === false && result.source === "supabase")).toBe(true);

  const rejectedResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve-bulk`, {
    data: { notificationJob: notificationJobs[0] }
  });
  expect(rejectedResponse.status()).toBe(400);
  expect(await rejectedResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "notificationJob",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification readiness contract checks safe source jobs without Slack side effects", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
  const notificationJobId = "safe-contract-readiness-missing-body";

  const sourceResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs`, {
    data: {
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        payload: { studentName: "안전학생" },
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      }
    }
  });
  expect(sourceResponse.status()).toBe(200);

  const readinessResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/readiness-check`, {
    data: {
      notifySlack: false,
      now: "2099-08-05T11:45:00.000Z",
      windowMinutes: 60
    }
  });
  expect(readinessResponse.status()).toBe(200);
  expect(await readinessResponse.json()).toMatchObject({
    checkedCount: 1,
    issueCount: 1,
    issues: [{
      missing: ["공지 본문"],
      notificationJobId,
      notificationType: "notice_parent",
      studentName: "안전학생"
    }],
    ok: true,
    safeFixture: true,
    slack: null,
    source: "supabase",
    windowMinutes: 60
  });

  const blockedSlackResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/readiness-check`, {
    data: { notifySlack: true }
  });
  expect(blockedSlackResponse.status()).toBe(400);
  expect(await blockedSlackResponse.json()).toMatchObject({
    error: "안전 fixture에서는 Slack 알림을 보낼 수 없습니다.",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification dispatch contract preserves safe jobs and rejects sensitive overrides", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
  const notificationJobId = "safe-contract-dispatch-preserved";

  const sourceResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs`, {
    data: {
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        payload: { message: "안전 자동 처리 보존" },
        scheduledAt: "2026-08-05T00:00:00.000Z",
        status: "scheduled"
      }
    }
  });
  expect(sourceResponse.status()).toBe(200);

  const dispatchResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { forceDryRun: false, limit: 1 }
  });
  expect(dispatchResponse.status()).toBe(200);
  expect(await dispatchResponse.json()).toMatchObject({
    automaticSolapiReconcile: {
      checkedCount: 0,
      source: "safe-provider",
      updatedCount: 0
    },
    dryRun: true,
    ok: true,
    processed: [],
    processedCount: 0,
    safeFixture: true,
    source: "supabase"
  });

  const jobsResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect(jobsResponse.status()).toBe(200);
  const jobsResult = await jobsResponse.json();
  expect(jobsResult.notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId,
    status: "scheduled"
  }));

  const blockedOverrideResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { forceDryRun: true, limit: 1, now: "2099-08-05T00:00:00.000Z" }
  });
  expect(blockedOverrideResponse.status()).toBe(401);
  expect(await blockedOverrideResponse.json()).toMatchObject({
    error: "안전 fixture에서는 알림 자동 처리 override를 사용할 수 없습니다.",
    ok: false,
    safeFixture: true
  });

  const invalidResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/dispatch-due`, {
    data: { limit: "1" }
  });
  expect(invalidResponse.status()).toBe(400);
  expect(await invalidResponse.json()).toMatchObject({
    code: "INVALID_API_PAYLOAD",
    field: "limit",
    ok: false,
    safeFixture: true
  });
  expect(pageErrors).toEqual([]);
});

test("notification cancel contract persists the source state without provider actions in the safe API", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
      forceDryRun: true,
      notificationJob: {
        notificationJobId: "safe-contract-cancel-job",
        notificationType: "notice_parent",
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      },
      reason: "safe browser cancellation setup"
    }
  });
  expect(reservationResponse.status()).toBe(200);

  const cancellationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/cancel`, {
    data: {
      cancelSolapi: false,
      notificationJobId: "safe-contract-cancel-job",
      reason: "safe browser contract cancellation"
    }
  });
  expect(cancellationResponse.status()).toBe(200);
  expect(await cancellationResponse.json()).toMatchObject({
    notificationJob: {
      error: "safe browser contract cancellation",
      notificationJobId: "safe-contract-cancel-job",
      status: "canceled"
    },
    ok: true,
    safeFixture: true,
    solapiCancellation: null,
    source: "supabase"
  });

  const sourceResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect(sourceResponse.status()).toBe(200);
  expect((await sourceResponse.json()).notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId: "safe-contract-cancel-job",
    status: "canceled"
  }));
  expect(pageErrors).toEqual([]);
});

test("notification reconcile contract reads the safe provider without mutating source jobs", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  await loginAsTeacher(page);
  const safeApiBaseUrl = `http://127.0.0.1:${Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0)}`;
  const notificationJobId = "safe-contract-reconcile-job";

  const reservationResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reserve`, {
    data: {
      forceDryRun: true,
      notificationJob: {
        notificationJobId,
        notificationType: "notice_parent",
        scheduledAt: "2099-08-05T12:00:00.000Z",
        status: "scheduled"
      },
      reason: "safe browser reconcile setup"
    }
  });
  expect(reservationResponse.status()).toBe(200);

  const reconcileResponse = await request.post(`${safeApiBaseUrl}/api/notification-jobs/reconcile-solapi`, {
    data: { notificationJobIds: [notificationJobId] }
  });
  expect(reconcileResponse.status()).toBe(200);
  expect(await reconcileResponse.json()).toMatchObject({
    checked: [{ notificationJobId, status: "safe_fixture", updated: false }],
    checkedCount: 1,
    notificationJobs: [],
    ok: true,
    records: [],
    safeFixture: true,
    source: "safe-provider",
    updatedCount: 0
  });

  const sourceResponse = await request.get(`${safeApiBaseUrl}/api/notification-jobs`);
  expect((await sourceResponse.json()).notificationJobs).toContainEqual(expect.objectContaining({
    notificationJobId,
    provider: "academy-os",
    status: "dry_run"
  }));
  expect(pageErrors).toEqual([]);
});
