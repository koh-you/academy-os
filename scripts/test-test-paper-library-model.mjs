import assert from "node:assert/strict";
import {
  TEST_PAPER_SUBJECTS,
  buildExpectedPaperCatalog,
  buildLibraryCoverage,
  createTestPaperId,
  extractUnitsBySubject,
  normalizeTestPaperEntry,
  normalizeTestPaperLibrary,
  selectPapersForSession,
  selectRetestPaperCandidates
} from "../src/domains/tests/testPaperLibraryModel.js";

// 합성 ssen 목차: 두 과목, 각 2개 중단원.
const fakeIndex = [
  { subject: "공통수학1", unitNo: "01", unitName: "다항식의 연산", partName: "다항식", typeCode: "A" },
  { subject: "공통수학1", unitNo: "01", unitName: "다항식의 연산", partName: "다항식", typeCode: "B" },
  { subject: "공통수학1", unitNo: "02", unitName: "나머지 정리", partName: "다항식", typeCode: "C" },
  { subject: "대수", unitNo: "01", unitName: "지수와 로그", partName: "지수함수와 로그함수", typeCode: "D" }
];

// --- extractUnitsBySubject: 중복 유형은 한 단원으로 접힌다 ---
const units = extractUnitsBySubject(fakeIndex);
assert.deepEqual(
  units.get("공통수학1").map((u) => u.unitNo),
  ["01", "02"]
);
assert.equal(units.get("공통수학1")[0].unitName, "다항식의 연산");
assert.equal(units.get("대수").length, 1);

// --- createTestPaperId: 결정적, 같은 입력이면 같은 ID ---
const id1 = createTestPaperId({ subject: "공통수학1", testKind: "unit", unitNo: "1", difficulty: 2 });
const id2 = createTestPaperId({ subject: "공통수학1", testKind: "unit", unitNo: "01", difficulty: 2 });
assert.equal(id1, id2, "unitNo 1 과 01 은 같은 ID 여야 한다");
assert.equal(id1, "tp_공통수학1_unit_01_d2");

// --- buildExpectedPaperCatalog: 과목 × 종류(2) × 단원 × 난이도(2) ---
const catalog = buildExpectedPaperCatalog(fakeIndex);
// 공통수학1: 2단원 × 2종류 × 2난이도 = 8, 대수: 1단원 × 2 × 2 = 4
assert.equal(catalog.length, 12);
const unitHardCm1 = catalog.find(
  (row) => row.subject === "공통수학1" && row.testKind === "unit" && row.unitNo === "01" && row.difficulty === 2
);
assert.equal(unitHardCm1.source, "쎈B 단원마무리");
assert.equal(unitHardCm1.folderPath, "공통수학1/단원테스트/01. 다항식의 연산/난이도2 (쎈B 단원마무리)");
const dailyEasyCm1 = catalog.find(
  (row) => row.subject === "공통수학1" && row.testKind === "daily" && row.unitNo === "01" && row.difficulty === 1
);
assert.equal(dailyEasyCm1.source, "개념원리");

// 실제 6과목이 상수에 다 있는지
assert.deepEqual(TEST_PAPER_SUBJECTS.length, 6);

// --- normalizeTestPaperEntry: 사람이 넣은 값 보존 + 잘못된 값 교정 ---
const normalized = normalizeTestPaperEntry({
  subject: "공통수학1",
  testKind: "unit",
  unitNo: 1,
  difficulty: "2",
  totalQuestions: "20",
  passCorrectCount: "16",
  status: "ready",
  questionFileUrl: "https://example.com/q.pdf",
  note: "쎈B 뒤쪽 3문항 제외"
});
assert.equal(normalized.testPaperId, "tp_공통수학1_unit_01_d2");
assert.equal(normalized.totalQuestions, 20);
assert.equal(normalized.passCorrectCount, 16);
assert.equal(normalized.note, "쎈B 뒤쪽 3문항 제외");

const badValues = normalizeTestPaperEntry({
  subject: "없는과목",
  testKind: "cumulative",
  difficulty: 9,
  totalQuestions: -3,
  passCorrectCount: 999,
  status: "bogus"
});
assert.equal(badValues.testKind, "daily");
assert.equal(badValues.difficulty, 1);
assert.equal(badValues.totalQuestions, "");
assert.equal(badValues.passCorrectCount, "");
assert.equal(badValues.status, "draft");

// passCorrectCount 가 totalQuestions 를 넘으면 버린다
assert.equal(
  normalizeTestPaperEntry({ totalQuestions: 20, passCorrectCount: 25 }).passCorrectCount,
  ""
);

// --- normalizeTestPaperLibrary: ID 중복 제거 ---
const dedup = normalizeTestPaperLibrary([
  { subject: "공통수학1", testKind: "unit", unitNo: "01", difficulty: 2, note: "first" },
  { subject: "공통수학1", testKind: "unit", unitNo: "1", difficulty: 2, note: "dup" }
]);
assert.equal(dedup.length, 1);
assert.equal(dedup[0].note, "first");

// --- buildLibraryCoverage: 예정 대비 준비 현황 ---
const coverage = buildLibraryCoverage(catalog, [
  {
    subject: "공통수학1",
    testKind: "unit",
    unitNo: "01",
    difficulty: 1,
    status: "ready",
    questionFileUrl: "https://example.com/q.pdf"
  },
  {
    subject: "공통수학1",
    testKind: "unit",
    unitNo: "01",
    difficulty: 2,
    status: "draft"
  }
]);
assert.equal(coverage.summary.total, 12);
assert.equal(coverage.summary.ready, 1);
assert.equal(coverage.summary.inProgress, 1);
assert.equal(coverage.summary.missing, 10);
const readyRow = coverage.rows.find((row) => row.testPaperId === "tp_공통수학1_unit_01_d1");
assert.equal(readyRow.isReady, true);
assert.equal(readyRow.hasAnswerFile, false);

// --- selectPapersForSession: 응시 기록용 필터 ---
const library = [
  { subject: "공통수학1", testKind: "unit", unitNo: "01", difficulty: 1, status: "ready" },
  { subject: "공통수학1", testKind: "unit", unitNo: "01", difficulty: 2, status: "hold" },
  { subject: "공통수학1", testKind: "daily", unitNo: "01", difficulty: 1, status: "ready" },
  { subject: "대수", testKind: "unit", unitNo: "01", difficulty: 1, status: "ready" }
];
const picked = selectPapersForSession(library, { subject: "공통수학1", testKind: "unit" });
assert.deepEqual(
  picked.map((p) => p.difficulty),
  [1],
  "hold 상태와 다른 과목/종류는 제외된다"
);

// --- selectRetestPaperCandidates: 같은 과목·단원·종류 ---
const retestCandidates = selectRetestPaperCandidates(library, {
  subject: "공통수학1",
  testKind: "unit",
  unitNo: "01",
  difficulty: 1
});
assert.deepEqual(retestCandidates.map((p) => p.difficulty).sort(), [1]);

console.log("test-paper-library-model: 모든 assertion 통과");
