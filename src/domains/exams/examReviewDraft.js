export function normalizeExamReviewDraftValue(value = "") {
  const lines = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.filter((line, index) => index === 0 || line !== lines[index - 1]).join("\n");
}

export function formatExamReviewDraftLine(label, value = "") {
  const normalizedValue = normalizeExamReviewDraftValue(value);
  if (!normalizedValue) return label;
  const [firstLine, ...restLines] = normalizedValue.split("\n");
  return [`${label} ${firstLine}`, ...restLines].join("\n");
}

export function getExamReviewDraftTitle(row = {}) {
  const schoolName = String(row.schoolName ?? "").trim();
  return schoolName ? `[${schoolName} 시험지 총평]` : "[시험지 총평]";
}

export const examReviewChecklistSections = [
  {
    key: "scope",
    number: 1,
    title: "시험 범위",
    label: "1. 시험 범위 :",
    placeholder: "예: 여러 가지 방정식과 부등식 ~ 행렬, 교과서 pp.74~141"
  },
  {
    key: "difficulty",
    number: 2,
    title: "난이도/체감",
    label: "2. 난이도 :",
    placeholder: "예: 중간고사보다 쉬웠지만 후반 조건 해석에서 시간이 걸렸음"
  },
  {
    key: "source",
    number: 3,
    title: "문항 출처",
    label: "3. 문항 출처  :",
    placeholder: "예: 교과서, 부교재, 모의고사 변형, 학교 프린트"
  },
  {
    key: "special",
    number: 4,
    title: "특이사항",
    label: "4. 특이사항  :",
    placeholder: "예: 조건 해석형 문항이 반복되고 계산량은 평이했음"
  },
  {
    key: "preparation",
    number: 5,
    title: "대비 방법",
    label: "5. 대비 방법  :",
    placeholder: "예: 기본 유형을 빠르게 끝내고 후반 조건 정리 연습을 늘려야 함"
  },
  {
    key: "scoreSplit",
    number: 6,
    title: "점수 갈림 구간",
    label: "6. 점수 갈림 구간 :",
    placeholder: "예: 18~21번에서 시간 관리와 조건 해석이 갈렸음"
  },
  {
    key: "mistakeReason",
    number: 7,
    title: "학생들이 틀릴 이유",
    label: "7. 학생들이 틀릴 이유 :",
    placeholder: "예: 개념은 알아도 식 세팅, 부호, 계산 실수에서 감점 가능"
  },
  {
    key: "keyQuestions",
    number: 8,
    title: "주요문항/유형",
    label: "8. 주요문항/유형 :",
    placeholder: "예: 20번 조건 해석, 23번 경우 분류, 서술형 2번 감점 포인트"
  },
  {
    key: "lessonLink",
    number: 9,
    title: "수업/보충 연결",
    label: "9. 수업/보충 연결 :",
    placeholder: "예: 수업에서 다룬 쎈 B유형과 연결, 오답 학생은 보충에서 재확인"
  },
  {
    key: "blogCta",
    number: 10,
    title: "블로그/상담 연결",
    label: "10. 블로그/상담 연결 :",
    placeholder: "예: 학교별 시험분석을 수업/보충 계획에 바로 반영한다는 신뢰감"
  }
];

export function createExamReviewDraft(row = {}) {
  const specialNote = row.specialNote ?? row.memo ?? "";
  return `${getExamReviewDraftTitle(row)}

${formatExamReviewDraftLine("1. 시험 범위 :", row.scope)}

2. 난이도 :

${formatExamReviewDraftLine("3. 문항 출처  :", row.subTextbook)}

${formatExamReviewDraftLine("4. 특이사항  :", specialNote)}

5. 대비 방법  :

6. 점수 갈림 구간 :

7. 학생들이 틀릴 이유 :

8. 주요문항/유형 :

9. 수업/보충 연결 :

10. 블로그/상담 연결 :`;
}

export const defaultExamReviewDraft = createExamReviewDraft();

export function isExamReviewDraftTitleLine(line = "") {
  return /^\[(?:.+\s+)?시험지 총평\]$/.test(String(line).trim());
}

export function isExamReviewDraftLike(value = "") {
  const lines = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return (
    isExamReviewDraftTitleLine(lines[0]) &&
    lines.some((line) => /^1\.\s*시험 범위\s*:/.test(line)) &&
    lines.some((line) => /^3\.\s*문항 출처\s*:/.test(line))
  );
}

export function isExamReviewDraftSectionLine(line = "") {
  return /^(?:[1-9]|10)\.\s*(시험 범위|난이도|문항 출처|특이사항|대비 방법|점수 갈림 구간|학생들이 틀릴 이유|주요문항\/유형|수업\/보충 연결|블로그\/상담 연결)\s*:/.test(String(line).trim());
}

export function getNextExamReviewDraftSectionIndex(lines = [], fromIndex = 0) {
  for (let index = fromIndex + 1; index < lines.length; index += 1) {
    if (isExamReviewDraftSectionLine(lines[index])) return index;
  }
  return lines.length;
}

export function replaceExamReviewDraftField(lines = [], fieldPattern, label, value = "") {
  const normalizedValue = normalizeExamReviewDraftValue(value);
  if (!normalizedValue) return lines;
  const fieldIndex = lines.findIndex((line) => fieldPattern.test(String(line).trim()));
  if (fieldIndex < 0) return lines;
  const nextSectionIndex = getNextExamReviewDraftSectionIndex(lines, fieldIndex);
  const replacementLines = formatExamReviewDraftLine(label, normalizedValue).split("\n");
  return [
    ...lines.slice(0, fieldIndex),
    ...replacementLines,
    ...lines.slice(nextSectionIndex)
  ];
}

export function syncExamReviewDraftWithExamPrepRow(review = "", row = {}) {
  const currentReview = String(review ?? "");
  if (!currentReview.trim()) return createExamReviewDraft(row);
  if (!isExamReviewDraftLike(currentReview)) return currentReview;
  const nextScope = normalizeExamReviewDraftValue(row.scope);
  const nextSubTextbook = normalizeExamReviewDraftValue(row.subTextbook);
  let nextLines = currentReview.replace(/\r\n/g, "\n").split("\n");
  const titleIndex = nextLines.findIndex(isExamReviewDraftTitleLine);
  if (titleIndex >= 0) nextLines[titleIndex] = getExamReviewDraftTitle(row);
  if (!nextScope && !nextSubTextbook) return nextLines.join("\n");
  nextLines = replaceExamReviewDraftField(nextLines, /^1\.\s*시험 범위\s*:/, "1. 시험 범위 :", nextScope);
  nextLines = replaceExamReviewDraftField(nextLines, /^3\.\s*문항 출처\s*:/, "3. 문항 출처  :", nextSubTextbook);
  return nextLines.join("\n");
}

export function normalizeExamReviewDraftText(review = "", row = {}) {
  const currentReview = String(review ?? "");
  if (!isExamReviewDraftLike(currentReview)) return currentReview;
  const lines = currentReview.replace(/\r\n/g, "\n").split("\n");
  const titleIndex = lines.findIndex(isExamReviewDraftTitleLine);
  if (titleIndex >= 0) lines[titleIndex] = getExamReviewDraftTitle(row);
  return lines
    .filter((line, index) => {
      const currentLine = String(line ?? "").trim();
      const previousLine = String(lines[index - 1] ?? "").trim();
      return !currentLine || currentLine !== previousLine;
    })
    .join("\n");
}

export function normalizeExamPrepRowReviewDraft(row = {}) {
  const currentReview = String(row.review ?? "");
  if (!isExamReviewDraftLike(currentReview)) return row;
  const nextReview = normalizeExamReviewDraftText(currentReview, row);
  return nextReview === currentReview ? row : { ...row, review: nextReview };
}

function escapeExamReviewRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getExamReviewSectionValue(review = "", section = {}) {
  const lines = String(review ?? "").replace(/\r\n/g, "\n").split("\n");
  const fieldIndex = lines.findIndex((line) => new RegExp(`^${section.number}\\.\\s*${escapeExamReviewRegExp(section.title)}\\s*:`).test(String(line).trim()));
  if (fieldIndex < 0) return "";
  const firstLine = String(lines[fieldIndex] ?? "").replace(new RegExp(`^${section.number}\\.\\s*${escapeExamReviewRegExp(section.title)}\\s*:\\s*`), "");
  const nextSectionIndex = getNextExamReviewDraftSectionIndex(lines, fieldIndex);
  return [firstLine, ...lines.slice(fieldIndex + 1, nextSectionIndex)]
    .join("\n")
    .trim();
}

export function setExamReviewSectionValue(review = "", section = {}, value = "") {
  const lines = String(review ?? "").replace(/\r\n/g, "\n").split("\n");
  const pattern = new RegExp(`^${section.number}\\.\\s*${escapeExamReviewRegExp(section.title)}\\s*:`);
  if (!lines.some((line) => pattern.test(String(line).trim()))) {
    return `${review.trim()}\n\n${formatExamReviewDraftLine(section.label, value)}`.trim();
  }
  const fieldIndex = lines.findIndex((line) => pattern.test(String(line).trim()));
  const nextSectionIndex = getNextExamReviewDraftSectionIndex(lines, fieldIndex);
  const normalizedValue = normalizeExamReviewDraftValue(value);
  const replacementLines = normalizedValue
    ? formatExamReviewDraftLine(section.label, normalizedValue).split("\n")
    : [section.label];
  return [
    ...lines.slice(0, fieldIndex),
    ...replacementLines,
    ...lines.slice(nextSectionIndex)
  ].join("\n");
}

export function buildExamReviewBlogSourceText(review = "") {
  const values = Object.fromEntries(
    examReviewChecklistSections.map((section) => [section.key, getExamReviewSectionValue(review, section)])
  );
  return [
    values.difficulty ? `첫 문단 총평: ${values.difficulty}` : "",
    values.scoreSplit ? `변별 포인트: ${values.scoreSplit}` : "",
    values.mistakeReason ? `자주 틀릴 이유: ${values.mistakeReason}` : "",
    values.keyQuestions ? `주요문항 설명: ${values.keyQuestions}` : "",
    values.preparation ? `다음 대비: ${values.preparation}` : "",
    values.lessonLink ? `수업/보충 연결: ${values.lessonLink}` : "",
    values.blogCta ? `상담/CTA: ${values.blogCta}` : ""
  ].filter(Boolean).join("\n\n");
}
