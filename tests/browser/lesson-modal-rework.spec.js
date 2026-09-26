import { expect, test } from "./fixtures.js";
import {
  collectPageErrors,
  getKoreaDateAfterDays,
  loginAsTeacher,
  navigateCalendarToMonth,
  resetSafeFixture,
  safeApiBaseUrl
} from "./safeSmokeSupport.js";

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

  // ③ 헤더 토글 하나로 전체 선택 → 전체 해제. 라벨은 대상 수를 드러낸다(보이는 목록과 다를 수 있으므로).
  const rosterToggle = modal.getByRole("button", { name: `전체 ${activeCount}명 선택` });
  await rosterToggle.click();
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(activeCount);
  await expect(modal.getByText(`선택 ${activeCount}명`)).toBeVisible();

  await modal.getByRole("button", { name: `전체 ${activeCount}명 해제` }).click();
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(0);
  await expect(modal.getByText("선택 0명")).toBeVisible();

  expect(pageErrors).toEqual([]);
});

// 2026-09-26(검증 반영) · 목록 첫 반(templates[0])을 반드시 지나게 고쳤다.
// 예전에는 목록 첫 반이 미리 선택된 채 모달이 열려서, 그 항목을 다시 골라도 <select> 가 change 를 쏘지 않아
// 「반 불러오기」가 첫 반에서만 죽은 컨트롤이었다. 두 번째 반만 고르던 검사는 그 버그를 지나치지 못했다.
test("the class loader starts unselected and fills the schedule and roster even for the first class in the list", async ({ page, request }) => {
  const pageErrors = collectPageErrors(page);
  const { classTemplates } = await (await request.get(`${safeApiBaseUrl}/api/classes`)).json();
  const firstTemplate = classTemplates[0];
  expect(firstTemplate).toBeTruthy();

  // 목록 첫 반에 배정된 재원생을 한 명 만들어 둔다(기본 fixture 는 두 번째 반에만 배정돼 있다).
  const firstTemplateStudent = {
    defaultClassTemplateId: firstTemplate.classTemplateId,
    grade: "중2",
    loginId: "safe_first_class",
    name: "첫반 불러오기 학생",
    pin: "1234",
    schoolName: "안전중",
    status: "active",
    studentId: "safe-first-class-student"
  };
  const created = await request.post(`${safeApiBaseUrl}/api/students`, {
    data: { student: firstTemplateStudent }
  });
  expect(created.ok()).toBe(true);

  const modal = await openLessonModal(page);

  // ① 신규 등록은 반을 고르지 않은 상태로 연다 — 고르지 않은 반이 저장 payload 에 들어가지 않는다.
  const classLoader = modal.getByLabel("반 불러오기", { exact: true });
  await expect(classLoader).toHaveValue("");
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveCount(0);

  // ② 예전 「큰 수업 틀」 기능은 사라지지 않았다 — 목록 첫 반을 골라도 같은 패치가 걸린다.
  await classLoader.selectOption(firstTemplate.classTemplateId);

  // 수업명·시간·명단이 한 번에 채워진다.
  await expect(modal.getByLabel("수업명")).toHaveValue(firstTemplate.name);
  await expect(modal.getByLabel("시작")).not.toHaveValue("");
  await expect(modal.getByLabel("종료")).not.toHaveValue("");
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveText([firstTemplateStudent.name]);
  await expect(modal.getByText("선택 1명")).toBeVisible();

  // ③ 다른 반으로 바꾸면 그 반의 명단으로 갈아탄다(두 번째 반 경로도 그대로 확인한다).
  const { students } = await (await request.get(`${safeApiBaseUrl}/api/students`)).json();
  const otherTemplate = classTemplates.find((template) => (
    template.classTemplateId !== firstTemplate.classTemplateId &&
    students.some((student) => (
      student.status === "active" && student.defaultClassTemplateId === template.classTemplateId
    ))
  ));
  expect(otherTemplate).toBeTruthy();
  const otherStudent = students.find((student) => (
    student.status === "active" && student.defaultClassTemplateId === otherTemplate.classTemplateId
  ));
  await classLoader.selectOption(otherTemplate.classTemplateId);
  await expect(modal.locator(".lessonStudentChip.selected")).toHaveText([otherStudent.name]);

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

// 2026-09-26(검증 반영) · document.documentElement 만 보면 모달 본문의 가로 넘침을 놓친다.
// 실제로 헤더 액션 줄(반 불러오기 + HelpTip + 전체 선택)이 오른쪽 열보다 넓어 `.modalScrollBody` 가
// 12px 가로 스크롤됐고, 옆으로 밀면 왼쪽 열 라벨이 잘렸다("수업 유형" → "업 유형").
test("the modal body never scrolls sideways at the two-column widths", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  await page.setViewportSize({ height: 950, width: 1440 });
  const modal = await openLessonModal(page);

  // 2열 두 폭 + 좁은 1열(390px). 390 에서는 퍼센트 flex-basis 가 content 로 되돌아가 헤더 액션이
  // 제목 옆에 그대로 남는 별개의 넘침이 있었다(283px).
  for (const { width, height, columns } of [
    { width: 1440, height: 800, columns: 2 },
    { width: 1280, height: 800, columns: 2 },
    { width: 390, height: 844, columns: 1 }
  ]) {
    await page.setViewportSize({ height, width });
    // 2열이 유지되는 폭인지 먼저 확인한다(1100px 이하에서는 1열로 접히는 것이 정상이다).
    const columnCount = await modal.locator(".lessonModalLayout").evaluate((element) => (
      window.getComputedStyle(element).gridTemplateColumns.split(" ").length
    ));
    expect(columnCount, `${width}px column count`).toBe(columns);

    const horizontal = await modal.locator(".modalScrollBody").evaluate((element) => (
      element.scrollWidth - element.clientWidth
    ));
    expect(horizontal, `${width}px must not scroll sideways`).toBeLessThanOrEqual(0);

    // 헤더 액션 줄도 오른쪽 열 안에 들어간다.
    const rosterFits = await modal.evaluate(() => {
      const column = document.querySelector(".lessonModalRosterColumn");
      const actions = document.querySelector(".lessonRosterHeaderActions");
      return actions.getBoundingClientRect().right <= column.getBoundingClientRect().right + 1;
    });
    expect(rosterFits, `${width}px roster header actions must fit the column`).toBe(true);
  }

  expect(pageErrors).toEqual([]);
});

// 2026-09-26(검증 반영) · 같은 aria-live 안에서 "포함 학생 0명으로 저장됩니다." 와
// "신입생 보강 학생을 1명 이상 선택해 주세요." 가 함께 읽히던 모순을 막는다.
test("the footer roster notice agrees with the save validation for each lesson type", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const modal = await openLessonModal(page);

  // 명단이 없어도 저장되는 유형은 그대로 0명 저장을 알린다.
  await expect(modal.getByText("포함 학생 0명으로 저장됩니다.")).toBeVisible();

  await modal.getByRole("button", { name: "🌱 신입생 보강" }).click();
  await expect(modal.getByText("포함 학생 0명으로 저장됩니다.")).toHaveCount(0);
  await expect(modal.getByText("학생을 1명 이상 선택해야 저장됩니다.")).toBeVisible();

  // 실제로 저장이 막히는지 같은 화면에서 확인한다(문구와 규칙이 같은 원천에서 나온다).
  await modal.getByRole("button", { name: "✅ 수업 등록", exact: true }).click();
  await expect(modal.getByText("신입생 보강 학생을 1명 이상 선택해 주세요.")).toBeVisible();
  await expect(modal.getByText("포함 학생 0명으로 저장됩니다.")).toHaveCount(0);

  // 한 명이라도 고르면 안내가 사라진다.
  await modal.locator(".lessonStudentChip").first().click();
  await expect(modal.getByText("학생을 1명 이상 선택해야 저장됩니다.")).toHaveCount(0);

  expect(pageErrors).toEqual([]);
});

// 2026-09-26(검증 반영) · 검색 중 헤더 토글은 화면에 보이지 않는 학생까지 대상으로 삼는다.
test("the roster header toggle is hidden while a search filters the list", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const modal = await openLessonModal(page);

  const activeCount = await modal.locator(".lessonStudentChip").count();
  const toggle = modal.getByRole("button", { name: `전체 ${activeCount}명 선택` });
  await expect(toggle).toBeVisible();

  const firstName = await modal.locator(".lessonStudentChip").first().textContent();
  await modal.getByRole("searchbox", { name: "포함 학생 검색" }).fill(String(firstName).slice(0, 2));
  await expect(modal.locator(".lessonRosterSelectAllButton")).toHaveCount(0);
  await expect(modal.getByRole("button", { name: /검색 결과 \d+명만 선택/ })).toBeVisible();

  await modal.getByRole("searchbox", { name: "포함 학생 검색" }).fill("");
  await expect(modal.locator(".lessonRosterSelectAllButton")).toHaveCount(1);

  expect(pageErrors).toEqual([]);
});

// 2026-09-26(검증 반영) · 실측 버그: 저장돼 있던 16:00-17:45 수업에서 시작만 16:30 으로 옮기니
// 종료가 19:30(3시간)으로 조용히 덮였다. 기존 수업 편집에서는 사람이 정한 종료를 유지한다.
test("editing a saved lesson keeps a hand-chosen end time when the start moves", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const lessonDate = getKoreaDateAfterDays(3);
  const lessonName = "종료시간 유지 검사";
  // 수업일지 ⋮ 메뉴가 뷰포트 안에 들어오도록 넉넉한 높이에서 연다.
  await page.setViewportSize({ height: 950, width: 1440 });
  const modal = await openLessonModal(page);

  await modal.getByLabel("수업명").fill(lessonName);
  await modal.getByLabel("날짜").fill(lessonDate);
  await modal.getByLabel("시작").fill("16:00");
  await expect(modal.getByLabel("종료")).toHaveValue("19:00");
  // 사람이 1시간 45분짜리 수업으로 정한다.
  await modal.getByLabel("종료").fill("17:45");
  await modal.getByRole("button", { name: "✅ 수업 등록", exact: true }).click();
  await expect(modal).toContainText("저장 완료");
  await modal.getByRole("button", { name: "달력에서 확인" }).click();

  const [year, month] = lessonDate.split("-");
  await navigateCalendarToMonth(page, Number(year), Number(month));
  await page.getByRole("gridcell", { name: new RegExp(`^${lessonDate} · \\d+개 수업$`) })
    .getByRole("button", { name: new RegExp(lessonName) })
    .click();
  const journal = page.getByRole("dialog", { name: "수업일지" });
  // ⋮ 메뉴는 키보드로 연다 — 저장 바가 화면 아래쪽에 붙어 있어 메뉴 항목이 뷰포트 밖에 놓일 수 있다.
  await journal.getByRole("button", { name: "수업일지 추가 작업" }).press("ArrowDown");
  await expect(page.getByRole("menuitem", { name: "수업 수정" })).toBeFocused();
  await page.keyboard.press("Enter");
  const editModal = page.getByRole("dialog", { name: "수업 수정" });
  await expect(editModal.getByLabel("시작")).toHaveValue("16:00");
  await expect(editModal.getByLabel("종료")).toHaveValue("17:45");

  // 시작만 옮겨도 사람이 정한 종료는 그대로다.
  await editModal.getByLabel("시작").fill("16:30");
  await expect(editModal.getByLabel("종료")).toHaveValue("17:45");

  // 종료를 "시작 + 3시간" 으로 되돌려 두면 다시 따라 움직인다.
  await editModal.getByLabel("종료").fill("19:30");
  await editModal.getByLabel("시작").fill("17:00");
  await expect(editModal.getByLabel("종료")).toHaveValue("20:00");

  // 힌트 문구도 편집 규칙과 같은 말을 한다.
  await expect(editModal.getByText("시작 시간을 바꾸면 3시간짜리 수업일 때만 종료가 따라 움직입니다. 직접 정해 둔 종료 시간은 그대로 둡니다.")).toBeVisible();

  // 2026-09-26(검증 반영) · 390px 에서 파괴적 버튼이 전폭으로 저장 행 아래(엄지 자리)에 오지 않는다.
  await page.setViewportSize({ height: 844, width: 390 });
  const footerBoxes = await editModal.evaluate(() => {
    const box = (selector) => {
      const element = document.querySelector(selector);
      const rect = element.getBoundingClientRect();
      return { width: Math.round(rect.width), y: Math.round(rect.y) };
    };
    return {
      cancel: box(".lessonModalCancelButton"),
      remove: box(".lessonModalDeleteButton"),
      save: box(".lessonModalSaveButton")
    };
  });
  expect(footerBoxes.remove.width).toBeLessThan(footerBoxes.cancel.width);
  expect(footerBoxes.remove.y).toBeLessThan(footerBoxes.save.y);

  expect(pageErrors).toEqual([]);
});
