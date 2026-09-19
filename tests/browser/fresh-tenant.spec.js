// 새 선생님(협력 교사, 빈 tenant)의 첫날.
//
// 2026-09-19 감사: 협력 교사가 만난 버그(#349~#384)는 거의 전부 "반 0개·학생 0명·app_state 없음"
// 에서 시작해 원장 계정으로는 절대 재현되지 않았다. 이 시나리오 하나가 그 경로를 매 PR 마다
// 밟는다 — 로그인 → 반 개설 → 학생 등록(원장 학생과 같은 이름) → 시험관리 자동 행 → 운영 설정
// → 로그아웃. 그동안 403/401 응답이나 페이지 오류가 하나라도 나면 실패한다.
import { expect, test } from "./fixtures.js";
import { collectPageErrors, resetSafeFixture } from "./safeSmokeSupport.js";

test.beforeEach(async ({ request }) => {
  await resetSafeFixture(request);
});

async function loginAsFreshCoTeacher(page) {
  await page.goto("/");
  await page.getByRole("button", { name: "선생님" }).click();
  await page.getByLabel("선생님 아이디").fill("fresh");
  await page.getByLabel("선생님 비밀번호").fill("fresh");
  await page.getByRole("button", { name: "선생님 로그인" }).click();
  await expect(page.getByRole("navigation", { name: "주요 화면" })).toBeVisible();
}

test("a brand-new co-teacher can set up classes, students and exam prep without a single forbidden response", async ({ page }) => {
  const pageErrors = collectPageErrors(page);
  const forbidden = [];
  page.on("response", (response) => {
    if ([401, 403].includes(response.status()) && response.url().includes("/api/")) {
      forbidden.push(`${response.request().method()} ${new URL(response.url()).pathname} → ${response.status()}`);
    }
  });

  await loginAsFreshCoTeacher(page);
  const navigation = page.getByRole("navigation", { name: "주요 화면" });
  // 협력 교사 메뉴만 보인다. 정산·상담 같은 원장 메뉴는 없다.
  await expect(navigation.getByRole("button", { name: /반관리/ })).toBeVisible();
  await expect(navigation.getByRole("button", { name: /정산/ })).toHaveCount(0);

  // 1) 반 개설 — 반이 0개인 상태에서 시작한다.
  await navigation.getByRole("button", { name: /반관리/ }).click();
  await expect(page.getByText("아직 개설된 반이 없습니다")).toBeVisible();
  await page.getByRole("button", { name: "+ 반 개설" }).click();
  const classModal = page.getByRole("dialog", { name: "반 개설" });
  await classModal.getByPlaceholder("예: 화목 5-7반").fill("화목 5-7반");
  await classModal.getByRole("button", { name: "화", exact: true }).click();
  await classModal.getByRole("button", { name: "목", exact: true }).click();
  await classModal.getByRole("button", { name: "반 개설", exact: true }).click();
  await expect(classModal).toBeHidden();
  await expect(page.getByRole("heading", { name: "화목 5-7반" })).toBeVisible();

  // 2) 학생 등록 — 원장 학생과 겹치기 쉬운 흔한 이름·학교.
  await navigation.getByRole("button", { name: /학생관리/ }).click();
  await page.getByRole("button", { name: "+ 학생 추가" }).click();
  const studentModal = page.getByRole("dialog", { name: "학생 추가" });
  await studentModal.getByLabel("이름", { exact: true }).fill("김민준");
  await studentModal.getByLabel("학교", { exact: true }).fill("창북중");
  // 반이 하나뿐이라 이미 그 반이 골라져 있어야 한다(예전엔 원장 반 id 가 기본값이라 미배정이었다).
  await expect(studentModal.getByRole("combobox", { name: "반" })).toHaveValue(/./);
  await studentModal.getByRole("combobox", { name: "반" }).selectOption({ label: "화목 5-7반" });
  await studentModal.getByRole("button", { name: "학생 저장", exact: true }).click();
  await expect(studentModal).toBeHidden();
  await expect(page.getByRole("button", { name: "김민준 정보 수정" })).toBeVisible();

  // 3) 시험관리 — 학생 등록만으로 학교·학년 행이 생기고 "저장 실패" 가 아니어야 한다.
  await navigation.getByRole("button", { name: /시험관리/ }).click();
  await expect(page.getByText("창북중").first()).toBeVisible();
  await expect(page.getByText("저장 실패")).toHaveCount(0);

  // 4) 운영 설정 — 협력 교사도 자기 tenant 기본값을 정할 수 있다.
  await navigation.getByRole("button", { name: /설정/ }).click();
  await page.getByRole("tab", { name: "운영 설정" }).click();
  await expect(page.getByRole("group", { name: "시험관리 자동 생성 대상 반" })).toBeVisible();
  await page.getByRole("checkbox", { name: "화목 5-7반" }).check();

  // 5) 로그아웃까지 조용해야 한다.
  await page.getByRole("button", { name: "로그아웃" }).click();
  await expect(page.getByRole("heading", { name: "로그인" })).toBeVisible();

  expect(forbidden).toEqual([]);
  expect(pageErrors).toEqual([]);
});
