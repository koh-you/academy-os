// 안전 미리보기(dev:safe)용 문제은행 가상 데이터. 운영 Supabase·Storage 없이 교재별 오답 화면을 돌린다.
// 문항 이미지는 SVG data URL 이라 실제 교재 원문이 아니다.

const bookId = "pbk_safefixture1";

function svgImage(label, height = 120) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="${height}" viewBox="0 0 520 ${height}">` +
    `<rect width="520" height="${height}" fill="#fff"/>` +
    `<text x="14" y="34" font-family="sans-serif" font-size="22" font-weight="700" fill="#176e59">${label}</text>` +
    `<text x="14" y="70" font-family="sans-serif" font-size="16" fill="#111">안전 미리보기 가상 문항 · 실제 교재 원문이 아닙니다.</text>` +
    `<text x="14" y="98" font-family="sans-serif" font-size="14" fill="#444">① 12 ② 13 ③ 14 ④ 15 ⑤ 16</text>` +
    "</svg>";
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** 정답 줄·해설 가상 이미지 (해설 PDF 의 「답」 줄과 풀이를 흉내 낸다). */
function answerImage(label, kind) {
  const height = kind === "answer" ? 40 : 160;
  const width = kind === "answer" ? 120 : 520;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
    `<rect width="${width}" height="${height}" fill="#fff"/>` +
    (kind === "answer"
      ? `<text x="6" y="27" font-family="sans-serif" font-size="20" font-weight="700" fill="#111">답 ${label}</text>`
      : `<text x="14" y="34" font-family="sans-serif" font-size="20" font-weight="700" fill="#2563eb">${label}</text>` +
        `<text x="14" y="70" font-family="sans-serif" font-size="16" fill="#111">가상 해설 · sin A = 15/17 이므로 …</text>` +
        `<text x="14" y="120" font-family="sans-serif" font-size="18" font-weight="700" fill="#111">답 ${label}</text>`) +
    "</svg>";
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// 1~10번에는 정답·해설이 붙어 있다(11~20번은 아직 없음 → 인쇄 때 「해설 없음」 경로).
function hasAnswerPackage(number) {
  return number <= 10;
}

const units = [
  { unitId: `${bookId}-u0`, bookId, position: 0, title: "01 삼각비", itemNumberFrom: "0001", itemNumberTo: "0012" },
  { unitId: `${bookId}-u1`, bookId, position: 1, title: "02 삼각비의 활용", itemNumberFrom: "0013", itemNumberTo: "0020" }
];

const items = Array.from({ length: 20 }, (_, index) => {
  const number = index + 1;
  const numberLabel = String(number).padStart(4, "0");
  return {
    itemId: `${bookId}-${numberLabel}`,
    bookId,
    unitId: number <= 12 ? units[0].unitId : units[1].unitId,
    numberLabel,
    numberSort: number,
    printedPage: 10 + Math.floor(index / 4),
    pdfPage: 10 + Math.floor(index / 4),
    typeLabel: number <= 12 ? "삼각비의 값" : "삼각비의 활용",
    tags: number % 5 === 0 ? ["서술형"] : [],
    answer: "",
    hasSolution: hasAnswerPackage(number),
    hasSubquestions: number >= 3 && number <= 5,
    reviewStatus: number === 7 ? "flagged" : "ai_checked",
    reviewNote: number === 7 ? "too_short" : "",
    regions: [
      {
        regionId: `${bookId}-${numberLabel}-r0`,
        itemId: `${bookId}-${numberLabel}`,
        position: 0,
        kind: "body",
        pdfPage: 10 + Math.floor(index / 4),
        // 3~5번은 공통 지시문 그룹 [0003~0005] 의 세 줄이다(그룹 상자 0.1~0.5 × 0.1~0.5 안에 세로로).
        bboxNormalized: number >= 3 && number <= 5 ? [0.1, 0.2 + (number - 3) * 0.1, 0.5, 0.3 + (number - 3) * 0.1] : [0.1, 0.1, 0.5, 0.3],
        storagePath: `${bookId}/items/${bookId}-${numberLabel}.jpg`,
        imageWidth: 520,
        imageHeight: 120
      },
      ...(number >= 3 && number <= 5 ? [{
        regionId: `${bookId}-${numberLabel}-r1`,
        itemId: `${bookId}-${numberLabel}`,
        position: 1,
        kind: "passage",
        pdfPage: 10,
        bboxNormalized: [0.1, 0.1, 0.5, 0.5],
        storagePath: `${bookId}/items/${bookId}-group-0003-0005-p10.jpg`,
        imageWidth: 520,
        imageHeight: 480
      }] : []),
      ...(hasAnswerPackage(number) ? [
        {
          regionId: `${bookId}-${numberLabel}-answer`,
          itemId: `${bookId}-${numberLabel}`,
          position: 90,
          kind: "answer",
          pdfPage: 2,
          bboxNormalized: [0.4, 0.1, 0.5, 0.12],
          storagePath: `${bookId}/answers/${bookId}-${numberLabel}.jpg`,
          imageWidth: 120,
          imageHeight: 40
        },
        {
          regionId: `${bookId}-${numberLabel}-solution`,
          itemId: `${bookId}-${numberLabel}`,
          position: 91,
          kind: "solution",
          pdfPage: 2,
          bboxNormalized: [0.06, 0.1, 0.49, 0.3],
          storagePath: `${bookId}/solutions/${bookId}-${numberLabel}.jpg`,
          imageWidth: 520,
          imageHeight: 160
        }
      ] : [])
    ]
  };
});

export function createProblemBankFixtureState() {
  return {
    books: [
      {
        bookId,
        title: "RPM 중3-2 수학 (가상)",
        folderPath: "중3 / RPM",
        subject: "수학",
        grade: "중3",
        sourceKind: "pdf_text",
        sourceFileName: "safe-fixture.pdf",
        sourceSha256: "",
        pageCount: 20,
        itemCount: items.length,
        layoutProfile: {},
        ingestVersion: "safe-fixture",
        reviewStatus: "draft",
        units
      }
    ],
    units,
    items,
    attempts: [
      { attemptId: "safe-active-student__pbk_safefixture1-0002__r1", studentId: "safe-active-student", bookId, itemId: `${bookId}-0002`, round: 1, result: "wrong", recordedAt: "2026-09-10T00:00:00.000Z", note: "" },
      { attemptId: "safe-active-student__pbk_safefixture1-0003__r1", studentId: "safe-active-student", bookId, itemId: `${bookId}-0003`, round: 1, result: "correct", recordedAt: "2026-09-10T00:00:00.000Z", note: "" }
    ]
  };
}

/** 안전 API 라우트. 처리했으면 true. */
export async function handleProblemBankFixtureRoute({ request, requestUrl, state, readJson, sendJson, response }) {
  const { pathname } = requestUrl;
  if (!pathname.startsWith("/api/problem-bank/")) return false;
  const bank = state.problemBank;
  if (request.method === "GET" && pathname === "/api/problem-bank/books") {
    sendJson(response, 200, { ok: true, safeFixture: true, books: bank.books });
    return true;
  }
  if (request.method === "GET" && pathname === "/api/problem-bank/book") {
    const requested = requestUrl.searchParams.get("bookId") ?? "";
    const book = bank.books.find((entry) => entry.bookId === requested);
    if (!book) {
      sendJson(response, 404, { ok: false, safeFixture: true, error: "교재를 찾지 못했습니다." });
      return true;
    }
    sendJson(response, 200, { ok: true, safeFixture: true, book, units: bank.units, items: bank.items });
    return true;
  }
  if (request.method === "POST" && pathname === "/api/problem-bank/item-images") {
    const payload = await readJson(request);
    const ids = new Set(Array.isArray(payload.itemIds) ? payload.itemIds : []);
    const regions = bank.items
      .filter((item) => ids.has(item.itemId))
      .flatMap((item) => item.regions.map((region) => ({
        ...region,
        url: region.kind === "passage"
          ? svgImage("[0003~0005] 공통 지시문", 480)
          : region.kind === "answer" || region.kind === "solution"
            ? answerImage(item.numberLabel, region.kind)
            : svgImage(`${item.numberLabel}`)
      })));
    sendJson(response, 200, { ok: true, safeFixture: true, regions });
    return true;
  }
  if (request.method === "GET" && pathname === "/api/problem-bank/attempts") {
    const bookFilter = requestUrl.searchParams.get("bookId") ?? "";
    const studentFilter = requestUrl.searchParams.get("studentId") ?? "";
    const attempts = bank.attempts.filter((attempt) =>
      (!bookFilter || attempt.bookId === bookFilter) && (!studentFilter || attempt.studentId === studentFilter));
    sendJson(response, 200, { ok: true, safeFixture: true, attempts });
    return true;
  }
  if (request.method === "POST" && pathname === "/api/problem-bank/attempts") {
    const payload = await readJson(request);
    const saved = [];
    const cleared = [];
    for (const entry of Array.isArray(payload.entries) ? payload.entries : []) {
      const round = Number(entry.round) || 1;
      const attemptId = `${entry.studentId}__${entry.itemId}__r${round}`;
      bank.attempts = bank.attempts.filter((attempt) => attempt.attemptId !== attemptId);
      if (entry.result === "clear") {
        cleared.push(attemptId);
        continue;
      }
      const attempt = {
        attemptId,
        studentId: entry.studentId,
        bookId: entry.bookId,
        itemId: entry.itemId,
        round,
        result: entry.result,
        recordedAt: new Date().toISOString(),
        note: entry.note ?? ""
      };
      bank.attempts.push(attempt);
      saved.push(attempt);
    }
    sendJson(response, 200, { ok: true, safeFixture: true, attempts: saved, cleared });
    return true;
  }
  if (request.method === "POST" && pathname === "/api/problem-bank/book") {
    const payload = await readJson(request);
    const book = bank.books.find((entry) => entry.bookId === payload.bookId);
    if (!book) {
      sendJson(response, 404, { ok: false, safeFixture: true, error: "교재를 찾지 못했습니다." });
      return true;
    }
    for (const [key, field] of [["title", "title"], ["folderPath", "folderPath"], ["grade", "grade"], ["subject", "subject"]]) {
      if (payload.patch?.[key] !== undefined) book[field] = String(payload.patch[key]).trim();
    }
    sendJson(response, 200, { ok: true, safeFixture: true, book });
    return true;
  }
  if (request.method === "DELETE" && pathname === "/api/problem-bank/book") {
    const requested = requestUrl.searchParams.get("bookId") ?? "";
    const index = bank.books.findIndex((entry) => entry.bookId === requested);
    if (index === -1) {
      sendJson(response, 404, { ok: false, safeFixture: true, error: "교재를 찾지 못했습니다." });
      return true;
    }
    bank.books.splice(index, 1);
    const removedAttempts = bank.attempts.filter((attempt) => attempt.bookId === requested).length;
    bank.attempts = bank.attempts.filter((attempt) => attempt.bookId !== requested);
    sendJson(response, 200, { ok: true, safeFixture: true, bookId: requested, deletedAttempts: removedAttempts, deletedImages: bank.items.length });
    return true;
  }
  if (request.method === "POST" && (pathname === "/api/problem-bank/import" || pathname === "/api/problem-bank/import-answers" || pathname === "/api/problem-bank/images")) {
    sendJson(response, 503, { ok: false, safeFixture: true, error: "안전 미리보기에서는 패키지를 등록하지 않습니다. 운영 API 에서만 올립니다." });
    return true;
  }
  return false;
}
