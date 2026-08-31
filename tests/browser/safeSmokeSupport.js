import { expect } from "./fixtures.js";

export const safeApiPort = Number(process.env.ACADEMY_SAFE_API_PORT || 8787) + Number(process.env.TEST_PARALLEL_INDEX || 0);
export const safeApiBaseUrl = `http://127.0.0.1:${safeApiPort}`;

export function getKoreaDateAfterDays(days) {
  return new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).format(new Date(Date.now() + days * 24 * 60 * 60 * 1000));
}

export function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error));
  return errors;
}

export async function loginAsTeacher(page) {
  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("preview");
  await page.getByLabel("선생님 비밀번호").fill("preview");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
}

export async function navigateCalendarToMonth(page, targetYear, targetMonth) {
  const monthRegion = page.getByRole("region", { name: /\d{4}년 \d{1,2}월 수업 달력/ });
  for (let guard = 0; guard < 36; guard += 1) {
    const label = await monthRegion.getAttribute("aria-label");
    const match = label?.match(/(\d{4})년 (\d{1,2})월/);
    if (!match) break;
    const currentYear = Number(match[1]);
    const currentMonth = Number(match[2]);
    if (currentYear === targetYear && currentMonth === targetMonth) return;
    const forward = currentYear < targetYear || (currentYear === targetYear && currentMonth < targetMonth);
    await page.getByRole("button", { name: forward ? "다음 달" : "이전 달" }).click();
  }
}

export async function navigateSchoolCalendarToMonth(page, targetYear, targetMonth) {
  const monthHeading = page.getByRole("heading", { name: /\d{4}년 \d{1,2}월/ });
  for (let guard = 0; guard < 36; guard += 1) {
    const text = await monthHeading.textContent();
    const match = text?.match(/(\d{4})년 (\d{1,2})월/);
    if (!match) break;
    const currentYear = Number(match[1]);
    const currentMonth = Number(match[2]);
    if (currentYear === targetYear && currentMonth === targetMonth) return;
    const forward = currentYear < targetYear || (currentYear === targetYear && currentMonth < targetMonth);
    await page.getByRole("button", { name: forward ? "다음 달" : "이전 달" }).click();
  }
}

export async function resetSafeFixture(request) {
  await expect.poll(async () => {
    try {
      const response = await request.post(`${safeApiBaseUrl}/api/safe-fixture/reset`);
      return response.ok();
    } catch {
      return false;
    }
  }, { timeout: 10_000 }).toBe(true);
}
