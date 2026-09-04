// 시험지 라이브러리(미리 만든 단원별 평가 시험지 목록) 순수 모델.
//
// 이 모듈은 React state, fetch, Supabase, 파일 I/O 를 갖지 않는다.
// 화면과 저장 계층은 이 모듈의 결과만 사용한다.
//
// 개념:
//   - 시험지 1개 = 고정된 문제 파일 + 정답 파일. 한 번 만들면 재사용한다.
//   - 구성 축: 과목 × 종류(데일리/단원) × 단원(쎈 목차 중단원) × 난이도(1/2).
//   - "응시 기록"(test_sessions/test_attempts)은 별도이며, 세션이 시험지 ID 를 참조한다.

export const TEST_PAPER_SUBJECTS = [
  "공통수학1",
  "공통수학2",
  "대수",
  "미적분1",
  "확률과 통계",
  "기하"
];

// 라이브러리에서 쓰는 종류. 기존 testPaperKindOptions 의 id 와 정렬을 맞춘다.
export const TEST_PAPER_LIBRARY_KINDS = [
  { id: "daily", label: "데일리테스트" },
  { id: "unit", label: "단원테스트" }
];

export const TEST_PAPER_DIFFICULTIES = [1, 2];

// 종류 × 난이도 → 문제 출처. 데일리 난이도 구분 기준은 아직 미확정(TBD).
export const TEST_PAPER_SOURCE_BY_KIND_DIFFICULTY = {
  daily: { 1: "개념원리", 2: "개념원리" },
  unit: { 1: "베이직쎈 단원마무리", 2: "쎈B 단원마무리" }
};

// 준비 상태. 기존 testPaperPreparationOptions 와 같은 어휘를 쓴다.
export const TEST_PAPER_STATUSES = [
  { id: "draft", label: "준비중" },
  { id: "ready", label: "준비완료" },
  { id: "active", label: "사용중" },
  { id: "hold", label: "보류" }
];

const KIND_IDS = new Set(TEST_PAPER_LIBRARY_KINDS.map((kind) => kind.id));
const STATUS_IDS = new Set(TEST_PAPER_STATUSES.map((status) => status.id));

function safeSegment(value = "") {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^0-9A-Za-z가-힣_-]/g, "");
}

/**
 * 카탈로그(예정) 시험지의 결정적 ID. 같은 (과목·종류·단원·난이도)면 항상 같은 ID.
 */
export function createTestPaperId({ subject = "", testKind = "", unitNo = "", difficulty = "" } = {}) {
  return [
    "tp",
    safeSegment(subject),
    safeSegment(testKind),
    safeSegment(String(unitNo).padStart(2, "0")),
    safeSegment(`d${difficulty}`)
  ].join("_");
}

/**
 * ssenTypeIndex 배열에서 과목별 중단원 목록을 뽑는다.
 * 반환: Map<subject, Array<{ unitNo, unitName, partName }>>
 */
export function extractUnitsBySubject(ssenTypeIndex = []) {
  const bySubject = new Map();
  for (const row of Array.isArray(ssenTypeIndex) ? ssenTypeIndex : []) {
    const subject = row?.subject ?? "";
    if (!subject) continue;
    if (!bySubject.has(subject)) bySubject.set(subject, new Map());
    const units = bySubject.get(subject);
    const unitNo = String(row.unitNo ?? "");
    if (!unitNo || units.has(unitNo)) continue;
    units.set(unitNo, { unitNo, unitName: row.unitName ?? "", partName: row.partName ?? "" });
  }
  const result = new Map();
  for (const [subject, units] of bySubject) {
    result.set(
      subject,
      [...units.values()].sort((a, b) => a.unitNo.localeCompare(b.unitNo, "ko"))
    );
  }
  return result;
}

/**
 * 만들어야 할 시험지 전체 목록(예정 카탈로그).
 * 과목(6) × 종류(2) × 중단원 × 난이도(2).
 */
export function buildExpectedPaperCatalog(ssenTypeIndex = [], { subjects = TEST_PAPER_SUBJECTS } = {}) {
  const unitsBySubject = extractUnitsBySubject(ssenTypeIndex);
  const catalog = [];
  for (const subject of subjects) {
    const units = unitsBySubject.get(subject) ?? [];
    for (const { id: testKind } of TEST_PAPER_LIBRARY_KINDS) {
      for (const unit of units) {
        for (const difficulty of TEST_PAPER_DIFFICULTIES) {
          catalog.push({
            testPaperId: createTestPaperId({ subject, testKind, unitNo: unit.unitNo, difficulty }),
            subject,
            testKind,
            unitNo: unit.unitNo,
            unitName: unit.unitName,
            partName: unit.partName,
            difficulty,
            source: TEST_PAPER_SOURCE_BY_KIND_DIFFICULTY[testKind]?.[difficulty] ?? "",
            folderPath: buildTestPaperFolderPath({ subject, testKind, unit, difficulty })
          });
        }
      }
    }
  }
  return catalog;
}

export function buildTestPaperFolderPath({ subject = "", testKind = "", unit = {}, difficulty = "" } = {}) {
  const kindLabel = TEST_PAPER_LIBRARY_KINDS.find((kind) => kind.id === testKind)?.label ?? testKind;
  const source = TEST_PAPER_SOURCE_BY_KIND_DIFFICULTY[testKind]?.[difficulty] ?? "";
  const unitLabel = `${String(unit.unitNo ?? "").padStart(2, "0")}. ${unit.unitName ?? ""}`.trim();
  const leaf = source ? `난이도${difficulty} (${source})` : `난이도${difficulty}`;
  return [subject, kindLabel, unitLabel, leaf].filter(Boolean).join("/");
}

/**
 * 저장된 라이브러리 항목 하나를 정규화한다. 사람이 넣은 값은 보존한다.
 */
export function normalizeTestPaperEntry(raw = {}) {
  const subject = TEST_PAPER_SUBJECTS.includes(raw.subject) ? raw.subject : (raw.subject ?? "");
  const testKind = KIND_IDS.has(raw.testKind) ? raw.testKind : "daily";
  const difficulty = TEST_PAPER_DIFFICULTIES.includes(Number(raw.difficulty)) ? Number(raw.difficulty) : 1;
  const unitNo = raw.unitNo === undefined || raw.unitNo === null ? "" : String(raw.unitNo);
  const totalQuestions = Number.isFinite(Number(raw.totalQuestions)) && Number(raw.totalQuestions) > 0
    ? Math.floor(Number(raw.totalQuestions))
    : "";
  // 통과 기준 정답 수는 총 문항 수가 확정됐을 때만 인정한다(그래야 범위를 검증할 수 있다).
  const passCorrectCount =
    totalQuestions !== "" &&
    raw.passCorrectCount !== "" &&
    Number.isFinite(Number(raw.passCorrectCount)) &&
    Number(raw.passCorrectCount) >= 0 &&
    Number(raw.passCorrectCount) <= totalQuestions
      ? Math.floor(Number(raw.passCorrectCount))
      : "";
  return {
    testPaperId:
      raw.testPaperId ||
      createTestPaperId({ subject, testKind, unitNo, difficulty }),
    subject,
    testKind,
    unitNo,
    unitName: raw.unitName ?? "",
    partName: raw.partName ?? "",
    difficulty,
    source: raw.source ?? TEST_PAPER_SOURCE_BY_KIND_DIFFICULTY[testKind]?.[difficulty] ?? "",
    totalQuestions,
    passCorrectCount,
    status: STATUS_IDS.has(raw.status) ? raw.status : "draft",
    questionFileUrl: raw.questionFileUrl ?? "",
    answerFileUrl: raw.answerFileUrl ?? "",
    watermarked: Boolean(raw.watermarked),
    folderPath: raw.folderPath ?? "",
    note: raw.note ?? "",
    createdAt: raw.createdAt ?? "",
    updatedAt: raw.updatedAt ?? ""
  };
}

export function normalizeTestPaperLibrary(list = []) {
  const seen = new Set();
  const normalized = [];
  for (const raw of Array.isArray(list) ? list : []) {
    const entry = normalizeTestPaperEntry(raw);
    if (seen.has(entry.testPaperId)) continue;
    seen.add(entry.testPaperId);
    normalized.push(entry);
  }
  return normalized;
}

/**
 * 예정 카탈로그와 저장된 라이브러리를 대조해 준비 현황을 만든다.
 */
export function buildLibraryCoverage(catalog = [], library = []) {
  const byId = new Map(normalizeTestPaperLibrary(library).map((entry) => [entry.testPaperId, entry]));
  const rows = catalog.map((expected) => {
    const entry = byId.get(expected.testPaperId) ?? null;
    return {
      ...expected,
      entry,
      status: entry?.status ?? "missing",
      hasQuestionFile: Boolean(entry?.questionFileUrl),
      hasAnswerFile: Boolean(entry?.answerFileUrl),
      isReady: Boolean(entry) && (entry.status === "ready" || entry.status === "active") && Boolean(entry.questionFileUrl)
    };
  });
  const total = rows.length;
  const ready = rows.filter((row) => row.isReady).length;
  const inProgress = rows.filter((row) => row.entry && !row.isReady).length;
  const missing = rows.filter((row) => !row.entry).length;
  return { rows, summary: { total, ready, inProgress, missing } };
}

/**
 * 응시 기록에서 시험지를 고를 때 쓰는 필터.
 */
export function selectPapersForSession(library = [], { subject = "", testKind = "", unitNo = "" } = {}) {
  return normalizeTestPaperLibrary(library).filter((entry) => {
    if (subject && entry.subject !== subject) return false;
    if (testKind && entry.testKind !== testKind) return false;
    if (unitNo && String(entry.unitNo) !== String(unitNo)) return false;
    return entry.status !== "hold";
  });
}

/**
 * 재시험용 시험지 후보: 같은 과목·단원의 다른(또는 같은) 난이도 시험지.
 */
export function selectRetestPaperCandidates(library = [], sourcePaper = {}) {
  const normalizedSource = normalizeTestPaperEntry(sourcePaper);
  return normalizeTestPaperLibrary(library).filter(
    (entry) =>
      entry.subject === normalizedSource.subject &&
      String(entry.unitNo) === String(normalizedSource.unitNo) &&
      entry.testKind === normalizedSource.testKind &&
      entry.status !== "hold"
  );
}

export function getTestPaperKindLabel(id = "") {
  return TEST_PAPER_LIBRARY_KINDS.find((kind) => kind.id === id)?.label ?? id;
}

export function getTestPaperStatusLabel(id = "") {
  return TEST_PAPER_STATUSES.find((status) => status.id === id)?.label ?? "준비중";
}
