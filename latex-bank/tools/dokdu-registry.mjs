// 정독(dokdu) 자산 작업의 은행 목록 · 벤더 신호 설명 · 카탈로그 여부. dokdu-plan / dokdu-prompt 가 공유한다.
export const WORK_DIR = "C:\\Users\\PC\\github\\academy-os-wt-ssen3";
export const MAX_PER_JOB = 42;

const RPM_VENDOR = `RPM 은 구역(section)이 곧 난이도 층이다.
- 「교과서 NN-N …」: 교과서 기본 문제 → ★1 출발.
- 「유형 NN …」: 유형별 기본 문제. 첫 문항(tag 「대표문제」)이 그 유형의 대표. 난이도 표시(level)가 하·중하 → ★1~2, 중 → ★2, 상중 → ★3, 상 → ★4 출발. level 이 없으면(유형 안 보통 문항) ★2.
- 「유형 UP NN …」: 심화 유형 → ★3 출발.
- 「시험에 꼭 나오는 문제」: 중단원 종합 → level 대로(없으면 ★2~3).
- 「서술형 주관식」: ★3 출발. 「실력 Up」: ★4 출발.
- tag: 「중요」(+0) · 「서술형」 · 「교육청/평가원/수능 기출」(+0~1 · 기출은 통찰 유무로 판단).`;

const GN_HS_VENDOR = `개념원리 고등은 구역(section)과 예제 태그가 난이도 층이다.
- 「개념원리 익히기」(통번호 · tag 「확인체크」 포함): 개념 확인 → ★1 출발.
- 「필수·발전 예제」(id 「쪽-eN」 · tag 「필수」 ★2 · 「발전」 ★3 · 「특강」 ★3): 상자 발문만 전사돼 있다(풀이·KEY Point 없음).
- 「연습문제 STEP 1」(level STEP 1) → ★2 · 「연습문제 STEP 2」(STEP 2) → ★3 · 「연습문제 실력 UP」(실력 UP) → ★4 출발.
- tag 「교육청 기출」「평가원 기출」「수능 기출」: +0~1(통찰 유무로 판단).
- 「특강」 구역의 확인체크·예제는 교육과정 심화 → ★2~3.`;

const GN_MS_VENDOR = `개념원리 중학은 구역(section)이 난이도 층이다(level 없음).
- 「개념원리 확인하기」(id 「쪽-cN」) → ★1. 「계산력 강화하기」 → ★1.
- 「핵심문제 익히기」(핵심문제 「쪽-hN」 ★2 · 예제 「쪽-eN」 ★1~2 · 유제 「쪽-uN」 ★2) → ★2 출발.
- 「이런 문제가 시험에 나온다」 → ★2~3. 「중단원 마무리하기 STEP 1 기본 문제」 → ★2 · 「STEP 2 발전 문제」 → ★3 · 「STEP 3 실력 UP」 → ★4 출발. 「서술형 대비 문제」 → ★3.
- tag 「꼭나와」(+0 · 빈출 표시) · 「UP」(+1 후보).`;

const NO_CATALOG = (subject) => `## 유형 카탈로그 (없음 — 기록만 · 사용자 결정 2026-09-22)

${subject} 과목은 프로토타입 \`bank/유형카탈로그/\` 에 카탈로그가 없다. 그러므로 \`type_id: null\` · \`base_star: null\` 로 두고, 대신 **\`type_hint\`** 에 이 문항의 유형명을 한 줄로 제안한다(RPM 「유형 NN 제목」·개념원리 예제 제목(type 필드)이 있으면 그것을 기본 후보로 쓰되, 실제 골조가 다르면 더 정확한 이름으로). \`effective_star\` 는 잠정적으로 \`star\` 와 같게 둔다(나중에 카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 rationale 에 \`[분류 이슈] …\` 한 줄 + 파일 끝 표. 파일 끝 「카탈로그 차원 메모」에 이 범위에서 반복된 type_hint 와 카탈로그를 만들 때 따로 세워야 할 유형·통합해도 될 유형을 적는다.`;

export const REGISTRY = {
  "rpm-alg":   { book: "RPM 대수",            subject: "대수",       code: "RPM-ALG",   vendor: RPM_VENDOR,   catalog: null },
  "rpm-geo":   { book: "RPM 기하",            subject: "기하",       code: "RPM-GEO",   vendor: RPM_VENDOR,   catalog: null },
  "rpm-calc1": { book: "RPM 미적분Ⅰ",         subject: "미적분Ⅰ",    code: "RPM-CALC1", vendor: RPM_VENDOR,   catalog: null },
  "rpm-calc2": { book: "RPM 미적분Ⅱ",         subject: "미적분Ⅱ",    code: "RPM-CALC2", vendor: RPM_VENDOR,   catalog: null },
  "rpm-prob":  { book: "RPM 확률과 통계",      subject: "확률과 통계", code: "RPM-PROB",  vendor: RPM_VENDOR,   catalog: null },
  "gn-m31":    { book: "개념원리 중학 3-1",    subject: "중3-1",      code: "GN-M31",    vendor: GN_MS_VENDOR, catalog: null },
  "gn-m32":    { book: "개념원리 중학 3-2",    subject: "중3-2",      code: "GN-M32",    vendor: GN_MS_VENDOR, catalog: null },
  "gn-cm1":    { book: "개념원리 공통수학1",   subject: "공통수학1",  code: "GN-CM1",    vendor: GN_HS_VENDOR, catalog: null },
  "gn-cm2":    { book: "개념원리 공통수학2",   subject: "공통수학2",  code: "GN-CM2",    vendor: GN_HS_VENDOR, catalog: null },
  "gn-alg":    { book: "개념원리 대수",        subject: "대수",       code: "GN-ALG",    vendor: GN_HS_VENDOR, catalog: null },
  "gn-geo":    { book: "개념원리 기하",        subject: "기하",       code: "GN-GEO",    vendor: GN_HS_VENDOR, catalog: null },
  "gn-calc1":  { book: "개념원리 미적분Ⅰ",     subject: "미적분Ⅰ",    code: "GN-CALC1",  vendor: GN_HS_VENDOR, catalog: null },
  "gn-calc2":  { book: "개념원리 미적분Ⅱ",     subject: "미적분Ⅱ",    code: "GN-CALC2",  vendor: GN_HS_VENDOR, catalog: null },
  "gn-prob":   { book: "개념원리 확률과 통계",  subject: "확률과 통계", code: "GN-PROB",   vendor: GN_HS_VENDOR, catalog: null },
};

// 작업 순서(사용자 결정 2026-09-22): RPM 5권 → 개념원리 9권
export const ORDER = ["rpm-alg", "rpm-geo", "rpm-calc1", "rpm-calc2", "rpm-prob", "gn-m31", "gn-m32", "gn-cm1", "gn-cm2", "gn-alg", "gn-geo", "gn-calc1", "gn-calc2", "gn-prob"];

export const catalogNote = (bank) => {
  const entry = REGISTRY[bank];
  return entry.catalog ? entry.catalog : NO_CATALOG(entry.subject);
};
