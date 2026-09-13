// 문제은행 화면이 쓰는 순수 계산. 서버 응답(교재·문항·정오답 기록)에서 트리·지표·색 띠를 만든다.

export const FOLDER_SEPARATOR = " / ";

/** 정오답 기록 결과 → 화면 라벨. */
export const attemptResultMeta = Object.freeze({
  wrong: { label: "오답", shortLabel: "✕", className: "wrong" },
  correct: { label: "정답", shortLabel: "○", className: "correct" },
  unanswered: { label: "미풀이", shortLabel: "－", className: "unanswered" }
});

/** 클릭할 때마다 도는 순서: 기록 없음 → 오답 → 정답 → 기록 없음. */
export const attemptClickCycle = Object.freeze(["wrong", "correct", "clear"]);

/**
 * 반 전체 오답률 색 띠. 참고 화면(1~20 · 21~40 · 41~60 · 61~80 · 81~%)을 그대로 따른다.
 * @param {{ attempted: number, wrong: number }} stat
 */
export function wrongRateBand(stat) {
  if (!stat || stat.attempted === 0) return { key: "none", label: "미풀이" };
  if (stat.wrong === 0) return { key: "allCorrect", label: "전원 첫풀이 정답" };
  const rate = stat.wrong / stat.attempted;
  if (rate <= 0.2) return { key: "band1", label: "1~20%" };
  if (rate <= 0.4) return { key: "band2", label: "21~40%" };
  if (rate <= 0.6) return { key: "band3", label: "41~60%" };
  if (rate <= 0.8) return { key: "band4", label: "61~80%" };
  return { key: "band5", label: "81%~" };
}

export const wrongRateLegend = Object.freeze([
  { key: "none", label: "미풀이" },
  { key: "allCorrect", label: "전원 첫풀이 정답" },
  { key: "band1", label: "1~20%" },
  { key: "band2", label: "21~40%" },
  { key: "band3", label: "41~60%" },
  { key: "band4", label: "61~80%" },
  { key: "band5", label: "81%~" }
]);

/**
 * 교재 목록을 폴더 트리로 만든다. folderPath 는 "중3 / RPM" 처럼 " / " 로 나뉜다.
 * @param {{ bookId: string, title: string, folderPath: string }[]} books
 */
export function buildFolderTree(books) {
  const root = { name: "교재 폴더", path: [], folders: new Map(), books: [] };
  for (const book of books) {
    const segments = String(book.folderPath ?? "").split(FOLDER_SEPARATOR).map((part) => part.trim()).filter(Boolean);
    let node = root;
    for (const segment of segments) {
      if (!node.folders.has(segment)) {
        node.folders.set(segment, { name: segment, path: [...node.path, segment], folders: new Map(), books: [] });
      }
      node = node.folders.get(segment);
    }
    node.books.push(book);
  }
  return root;
}

/** 트리에서 경로(세그먼트 배열)에 해당하는 폴더 노드. 없으면 루트. */
export function findFolderNode(root, path) {
  let node = root;
  for (const segment of path) {
    const next = node.folders.get(segment);
    if (!next) return root;
    node = next;
  }
  return node;
}

/**
 * 문항별·학생별 최신 기록을 정리한다.
 * - latestByStudentItem: 학생·문항의 가장 높은 회차 기록
 * - firstByStudentItem: 1회차 기록
 * @param {{ studentId: string, itemId: string, round: number, result: string }[]} attempts
 * @param {Set<string>} [studentFilter] 지표에 넣을 학생 집합(없으면 전원)
 */
export function summarizeAttempts(attempts, studentFilter = null) {
  const latest = new Map();
  const first = new Map();
  for (const attempt of attempts) {
    if (studentFilter && !studentFilter.has(attempt.studentId)) continue;
    const key = `${attempt.studentId}|${attempt.itemId}`;
    const current = latest.get(key);
    if (!current || attempt.round > current.round) latest.set(key, attempt);
    if (attempt.round === 1) first.set(key, attempt);
  }
  return { latest, first };
}

/**
 * 문항별 반 통계: 시도한 학생 수·1회차 오답 수·현재(최신 회차) 오답 수·회복 수.
 * @returns {Map<string, { attempted: number, wrong: number, currentWrong: number, recovered: number }>}
 */
export function computeItemStats(attempts, studentFilter = null) {
  const { latest, first } = summarizeAttempts(attempts, studentFilter);
  const stats = new Map();
  const ensure = (itemId) => {
    if (!stats.has(itemId)) stats.set(itemId, { attempted: 0, wrong: 0, currentWrong: 0, recovered: 0 });
    return stats.get(itemId);
  };
  for (const attempt of first.values()) {
    const stat = ensure(attempt.itemId);
    if (attempt.result === "unanswered") continue;
    stat.attempted += 1;
    if (attempt.result === "wrong") stat.wrong += 1;
  }
  for (const [key, attempt] of latest) {
    const stat = ensure(attempt.itemId);
    if (attempt.result === "wrong") stat.currentWrong += 1;
    const firstAttempt = first.get(key);
    if (firstAttempt?.result === "wrong" && attempt.round > 1 && attempt.result === "correct") stat.recovered += 1;
  }
  return stats;
}

/**
 * 화면 상단 지표 6개.
 * @param {Map<string, *>} itemStats computeItemStats 결과
 * @param {number} totalItems 교재 문항 수
 * @param {number} studentCount 대상 학생 수
 */
export function computeBoardMetrics(itemStats, totalItems, studentCount) {
  let attempted = 0;
  let wrong = 0;
  let currentWrong = 0;
  let recovered = 0;
  let recorded = 0;
  for (const stat of itemStats.values()) {
    if (stat.attempted > 0) recorded += 1;
    attempted += stat.attempted;
    wrong += stat.wrong;
    currentWrong += stat.currentWrong;
    recovered += stat.recovered;
  }
  const percent = (numerator, denominator) => (denominator > 0 ? Math.round((numerator / denominator) * 100) : 0);
  return {
    studentCount,
    recordedItems: recorded,
    totalItems,
    firstWrongRate: percent(wrong, attempted),
    currentWrongRate: percent(currentWrong, attempted),
    recoveryRate: percent(recovered, wrong)
  };
}

/** 한 학생의 문항별 최신 결과. */
export function studentResultMap(attempts, studentId) {
  const { latest } = summarizeAttempts(attempts, new Set([studentId]));
  const map = new Map();
  for (const attempt of latest.values()) map.set(attempt.itemId, attempt);
  return map;
}

/** 학생의 오답 문항 ID 목록(최신 회차가 오답인 것). 오답지 기본 선택에 쓴다. */
export function studentWrongItemIds(attempts, studentId) {
  return [...studentResultMap(attempts, studentId).values()]
    .filter((attempt) => attempt.result === "wrong")
    .map((attempt) => attempt.itemId);
}

/** 단원별 문항 묶음(교재 순서). 단원이 없는 문항은 「기타」. */
export function groupItemsByUnit(units, items) {
  const groups = units.map((unit) => ({ unit, items: [] }));
  const byUnitId = new Map(groups.map((group) => [group.unit.unitId, group]));
  const orphan = { unit: { unitId: "", title: "기타", position: units.length }, items: [] };
  for (const item of items) {
    const group = byUnitId.get(item.unitId) ?? orphan;
    group.items.push(item);
  }
  if (orphan.items.length) groups.push(orphan);
  return groups.map((group) => ({ ...group, items: [...group.items].sort((a, b) => a.numberSort - b.numberSort) }));
}

/** 오답지에 실을 문항을 교재 순서로 정렬하고 인쇄용 출처 문구를 붙인다. */
export function buildPrintEntries({ book, units, items, selectedItemIds, imagesByItem }) {
  const unitTitleById = new Map(units.map((unit) => [unit.unitId, unit.title]));
  const selected = new Set(selectedItemIds);
  return items
    .filter((item) => selected.has(item.itemId))
    .sort((a, b) => a.numberSort - b.numberSort)
    .map((item) => {
      const regions = imagesByItem.get(item.itemId) ?? [];
      const body = regions.find((region) => region.kind === "body");
      const passage = regions.find((region) => region.kind === "passage");
      const solution = regions.find((region) => region.kind === "solution");
      return {
        item,
        sourceLine: [book.title, unitTitleById.get(item.unitId) ?? "", `${item.numberLabel}번`].filter(Boolean).join(" · "),
        typeLabel: item.typeLabel,
        bodyUrl: body?.url ?? "",
        passageUrl: passage?.url ?? "",
        solutionUrl: solution?.url ?? ""
      };
    });
}
