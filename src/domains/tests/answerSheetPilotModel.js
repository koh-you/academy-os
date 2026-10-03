// Fixed answer-sheet experiment. No official score, retest or notification writes.
export const ANSWER_SHEET_SIZE = 20;
export const ANSWER_SHEET_VERSION = "academy-answer-20-v1";

export function createAnswerRows() {
  return Array.from({ length: ANSWER_SHEET_SIZE }, (_, index) => ({ no: index + 1, answer: "", reviewed: false }));
}

export function normalizeAnswer(value) {
  return String(value ?? "").normalize("NFKC").trim()
    .replace(/[①②③④⑤]/g, (char) => String("①②③④⑤".indexOf(char) + 1))
    .replace(/[−–]/g, "-");
}

// Deliberately limited to exact rational numbers; never evaluate arbitrary expressions.
function rational(value) {
  const text = normalizeAnswer(value);
  if (text.length > 40) return null;
  const fraction = text.match(/^([+-]?\d{1,12})\s*\/\s*([+-]?\d{1,12})$/);
  if (fraction) return BigInt(fraction[2]) === 0n ? null : [BigInt(fraction[1]), BigInt(fraction[2])];
  const decimal = text.match(/^([+-]?)(\d{1,12})(?:\.(\d{1,12}))?$/);
  if (!decimal) return null;
  return [BigInt(`${decimal[1] === "-" ? "-" : ""}${decimal[2]}${decimal[3] || ""}`), 10n ** BigInt((decimal[3] || "").length)];
}

export function comparePilotAnswer(expected, actual, allowRational = false) {
  const left = normalizeAnswer(expected);
  const right = normalizeAnswer(actual);
  if (!left) return "excluded";
  if (!right) return "blank";
  if (left === right) return "correct";
  const a = rational(left), b = rational(right);
  if (allowRational && a && b && a[0] * b[1] === b[0] * a[1]) return "correct";
  // Different expressions may be equivalent. Leave them for a teacher, not an automatic zero.
  return a && b ? "incorrect" : "review";
}

export function gradePilotAnswers(key, rows, allowRational = false) {
  return key.map((entry, index) => {
    const row = rows[index];
    const comparison = comparePilotAnswer(entry.answer, row?.answer, allowRational);
    const status = comparison === "excluded" ? comparison : !row?.reviewed ? "review" : row.verdict || comparison;
    return { no: entry.no, status };
  });
}

export function parseAnswerSheetRecognition(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw.trim().replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "")) : raw;
  if (!Array.isArray(parsed?.answers) || parsed.answers.length !== ANSWER_SHEET_SIZE) throw new Error("판독 결과의 문항 수가 20개와 다릅니다. 수동 입력하거나 원본을 확인해 주세요.");
  const seen = new Set();
  const rows = parsed.answers.map((entry) => {
    if (!Number.isInteger(entry.no) || entry.no < 1 || entry.no > ANSWER_SHEET_SIZE || seen.has(entry.no) || typeof entry.answer !== "string" || entry.answer.length > 300) throw new Error("판독 결과에 잘못된 번호 또는 답이 있습니다.");
    seen.add(entry.no);
    return { no: entry.no, answer: entry.answer, reviewed: false, uncertain: entry.uncertain !== false };
  });
  return rows.sort((a, b) => a.no - b.no);
}

export function answerCellBox(no) {
  return { x: no <= 10 ? 0.065 : 0.52, y: 0.205 + ((no - 1) % 10) * 0.069, width: 0.415, height: 0.061 };
}

export function readPilotFile(value) {
  if (value?.version !== ANSWER_SHEET_VERSION || !Array.isArray(value.key) || !Array.isArray(value.sheets) || value.sheets.length > 30) throw new Error("지원하는 채점 실험 파일이 아닙니다.");
  const validateRows = (rows) => {
    const clean = parseAnswerSheetRecognition({ answers: rows });
    return clean.map((row, i) => {
      const original = rows.find((item) => item.no === i + 1);
      return { ...row, uncertain: original.uncertain === true, reviewed: original.reviewed === true, verdict: ["correct", "incorrect", "blank"].includes(original.verdict) ? original.verdict : "" };
    });
  };
  const sheets = value.sheets.map((sheet) => {
    if (typeof sheet.name !== "string" || sheet.name.length > 200 || (sheet.image && !/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(sheet.image))) throw new Error("답안 파일 형식이 올바르지 않습니다.");
    return { id: crypto.randomUUID(), name: sheet.name, image: sheet.image || "", rows: validateRows(sheet.rows) };
  });
  return { key: validateRows(value.key), keyConfirmed: value.keyConfirmed === true, allowRational: value.allowRational === true, sheets };
}
