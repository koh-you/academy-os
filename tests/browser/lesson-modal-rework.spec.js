import { expect, test } from "./fixtures.js";
import { collectPageErrors, loginAsTeacher, resetSafeFixture, safeApiBaseUrl } from "./safeSmokeSupport.js";

// 2026-09-26 · 수업 등록 모달 개편(가로 2열 · 고정 푸터 · 명단 0명 시작).
// 사용자 동작 네 가지를 잠근다:
//   ① 시작 시간을 바꾸면 종료가 +3시간
//   ② 신규 등록 기본 선택 0명
//   ③ 전체 선택 / 전체 해제 토글 하나
//   ④ 본문을 스크롤해도 저장 버튼과 저장 경계 문구가 보인다
test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

async function openLessonModal(page) {
  await loginAsTeacher(page);
  await expect(page.getByRole("navigation", { name: "수업일지 달력 월 이동" })).toBeVisible();
  await page.getByRole("button", { name: "+ 수업 등록", exact: true }).click();
  const modal = page.getByRole("dialog", { name: "수업 등록" });
  await expect(modal).toBeVisible();
  return modal;
}

test("start time change moves the end time three hours later, and a hand-typed end time survives until the start moves again", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const modal = await openLessonModal(page);

  await modal.getByLabel("시작").fill("16:00");
  await expect(modal.getByLabel("종료")).toHaveValue("19:00");

  await modal.getByLabel("시작").fill("09:30");
  await expect(modal.getByLabel("종료")).toHaveValue("12:30");

  // 사람이 고친 종료는 그대로 남는다 — 종료를 직접 바꿔도 시작은 움직이지 않는다.
  await modal.getByLabel("종료").fill("11:00");
  await expect(modal.getByLabel("종료")).toHaveValue("11:00");
  await expect(modal.getByLabel("시작")).toHaveValue("09:30");

  // 시작을 다시 바꾸면 다시 +3시간으로 맞춘다(단순·예측 가능).
  await modal.getByLabel("시작").fill("14:00");
  await expect(modal.getByLabel("종료")).toHaveValue("17:00");

  // 자정을 넘기면 23:59 로 묶는다. 저장 계약이 종료 > 시작을 요구하기 때문이다.
  await modal.getByLabel("시작").fill("22:30");
  await expect(modal.getByLabel("종료")).toHaveValue("23:59");

  expect(pageErrors).toEqual([]);
});

test("a new lesson starts with nobody selected and the header toggle selects or clears the whole roster", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const modal = await openLessonModal(page);

  // ② 신규 등록 기본 선택 0명.
  await expect(modal.getByText("선택 0명")).toBeVisible();
  const chips = modal.locator(".lessonStudentChip");
  const activeCount = await chips.count();
  expect(activeCount).toBeGreaterThan(0);
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(0);

  // 학년 그룹마다 있던 전체 선택/해제 두 버튼은 없앴다.
  await expect(modal.locator(".lessonStudentGroup").getByRole("button")).toHaveCount(activeCount);

  // ③ 헤더 토글 하나로 전체 선택 → 전체 해제.
  const rosterToggle = modal.getByRole("button", { name: "전체 선택" });
  await rosterToggle.click();
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(activeCount);
  await expect(modal.getByText(`선택 ${activeCount}명`)).toBeVisible();

  await modal.getByRole("button", { name: "전체 해제" }).click();
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(0);
  await expect(modal.getByText("선택 0명")).toBeVisible();

  expect(pageErrors).toEqual([]);
});

test("the class loader fills the schedule and roster from the roster column", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const { students } = await (await request.get(`${safeApiBaseUrl}/api/students`)).json();
  const rosterStudent = students.find((student) => student.status === "active" && student.defaultClassTemplateId);
  expect(rosterStudent).toBeTruthy();

  const modal = await openLessonModal(page);

  // ① 예전 「큰 수업 틀」 기능은 사라지지 않았다 — 포함 학생 옆 「반 불러오기」 가 같은 패치를 건다.
  const classLoader = modal.getByLabel("반 불러오기", { exact: true });
  await classLoader.selectOption(rosterStudent.defaultClassTemplateId);

  // 수업명·시간·명단이 한 번에 채워진다.
  await expect(modal.getByLabel("수업명")).not.toHaveValue("");
  await expect(modal.getByLabel("시작")).not.toHaveValue("");
  await expect(modal.getByLabel("종료")).not.toHaveValue("");
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveText([rosterStudent.name]);
  await expect(modal.getByText("선택 1명")).toBeVisible();

  expect(pageErrors).toEqual([]);
});

test("the save boundary notice and the action buttons stay visible while the modal body scrolls", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.setViewportSize({ height: 640, width: 1280 });
  const modal = await openLessonModal(page);

  const saveButton = modal.getByRole("button", { name: "✅ 수업 등록", exact: true });
  const saveNotice = modal.getByText("수정 내용은 저장 버튼을 눌러야 Supabase에 반영됩니다.");
  await expect(saveButton).toBeInViewport();
  await expect(saveNotice).toBeInViewport();

  // 본문만 스크롤되고 푸터는 카드 바닥에 남는다.
  const before = await saveButton.boundingBox();
  await modal.locator(".modalScrollBody").evaluate((element) => {
    element.scrollTop = element.scrollHeight;
  });
  const after = await saveButton.boundingBox();
  expect(Math.abs((after?.y ?? 0) - (before?.y ?? 0))).toBeLessThan(2);
  await expect(saveButton).toBeInViewport();
  await expect(saveNotice).toBeInViewport();

  // 모달 레이어(backdrop)가 스크롤되지 않는다 = 카드가 뷰포트 안에 들어간다.
  // 문서 전체 scrollHeight 는 모달 뒤의 달력 페이지 높이라 이 모달의 지표가 아니다.
  const overflow = await page.evaluate(() => {
    const backdrop = document.querySelector(".modalBackdrop");
    return {
      backdropVertical: backdrop.scrollHeight - backdrop.clientHeight,
      documentHorizontal: document.documentElement.scrollWidth - window.innerWidth
    };
  });
  expect(overflow.backdropVertical).toBeLessThanOrEqual(0);
  expect(overflow.documentHorizontal).toBeLessThanOrEqual(0);

  // 확정 버튼이 취소보다 작지 않다.
  const cancelBox = await modal.getByRole("button", { name: "취소", exact: true }).boundingBox();
  expect(after?.width ?? 0).toBeGreaterThanOrEqual(cancelBox?.width ?? 0);

  expect(pageErrors).toEqual([]);
});
