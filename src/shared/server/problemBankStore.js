// 문제은행(오답은행) 데이터 접근. 표는 supabase/20260912_problem_bank.sql, 이미지는 Storage 버킷 problem-bank.
//
// 원칙:
// - 문항 본문은 항상 패키지(manifest + 이미지)에서 온다. 서버는 저장·조회만 한다.
// - 이미지 URL 은 요청할 때만 서명해 준다(버킷은 private · 시판 교재 저작물).
// - 모든 표가 tenant 스코핑 대상이므로 listRows/upsertRows 가 tenant 를 자동으로 붙인다.

// Supabase 접근 함수는 api/server.js 가 주입한다(api/ 폴더의 Vercel 함수 파일 수 제한 12개를 지키기 위해
// 이 저장소 모듈은 src/shared/server 에 두고, api/lib/supabaseRest.js 를 직접 import 하지 않는다).

export const problemBankStorageBucket = "problem-bank";
const problemBankStorageAllowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const problemBankStorageMaxBytes = 8 * 1024 * 1024;
// 패키지 파일 이름은 CLI 가 만든 것만 받는다. 경로 조작(../)과 임의 확장자를 막는다.
const packageFilePattern = /^items\/[A-Za-z0-9_.-]{1,120}\.(?:jpg|jpeg|png|webp)$/;
const attemptResults = new Set(["correct", "wrong", "unanswered"]);

function createStatusError(message, statusCode = 400, code = "") {
  const error = new Error(message);
  error.statusCode = statusCode;
  if (code) error.code = code;
  return error;
}

/**
 * @param {Object} deps
 * @param {(options?: { requireServiceRole?: boolean }) => boolean} deps.isSupabaseConfigured
 * @param {(table: string, query: string, options?: *) => Promise<*[]>} deps.listRows
 * @param {(table: string, rows: *[], options?: *) => Promise<*[]>} deps.upsertRows
 * @param {(table: string, query: string, options?: *) => Promise<*[]>} deps.deleteRows
 * @param {(bucketId: string, storagePath: string, expiresIn?: number) => Promise<string>} deps.createSignedStorageUrl
 * @param {(bucketId: string, storagePath: string, options: *) => Promise<*>} deps.uploadStorageObjectWithBucketRetry
 */
export function createProblemBankStore({
  isSupabaseConfigured,
  listRows,
  upsertRows,
  deleteRows,
  createSignedStorageUrl,
  uploadStorageObjectWithBucketRetry
}) {
  function requireDatabase() {
    if (!isSupabaseConfigured({ requireServiceRole: true })) {
      throw createStatusError("문제은행은 Supabase 연결이 있어야 씁니다.", 503, "database_unavailable");
    }
  }

  function textOf(value, fallback = "") {
    return typeof value === "string" ? value.trim() : fallback;
  }

  function integerOf(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.trunc(number) : fallback;
  }

  function fromBookRow(row) {
    return {
      bookId: row.book_id,
      title: row.title,
      folderPath: row.folder_path ?? "",
      subject: row.subject ?? "",
      grade: row.grade ?? "",
      sourceKind: row.source_kind ?? "pdf_text",
      sourceFileName: row.source_file_name ?? "",
      sourceSha256: row.source_sha256 ?? "",
      pageCount: row.page_count ?? 0,
      itemCount: row.item_count ?? 0,
      layoutProfile: row.layout_profile ?? {},
      ingestVersion: row.ingest_version ?? "",
      reviewStatus: row.review_status ?? "draft",
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }

  function fromUnitRow(row) {
    return {
      unitId: row.unit_id,
      bookId: row.book_id,
      position: row.position ?? 0,
      title: row.title,
      itemNumberFrom: row.item_number_from ?? "",
      itemNumberTo: row.item_number_to ?? ""
    };
  }

  function fromItemRow(row) {
    return {
      itemId: row.item_id,
      bookId: row.book_id,
      unitId: row.unit_id ?? "",
      numberLabel: row.number_label,
      numberSort: row.number_sort ?? 0,
      printedPage: row.printed_page ?? 0,
      pdfPage: row.pdf_page ?? 0,
      typeLabel: row.type_label ?? "",
      tags: Array.isArray(row.tags) ? row.tags : [],
      answer: row.answer ?? "",
      hasSolution: Boolean(row.has_solution),
      hasSubquestions: Boolean(row.has_subquestions),
      reviewStatus: row.review_status ?? "ai_checked",
      reviewNote: row.review_note ?? ""
    };
  }

  function fromRegionRow(row) {
    return {
      regionId: row.region_id,
      itemId: row.item_id,
      position: row.position ?? 0,
      kind: row.kind ?? "body",
      pdfPage: row.pdf_page ?? 0,
      bboxNormalized: Array.isArray(row.bbox_normalized) ? row.bbox_normalized : [0, 0, 1, 1],
      storagePath: row.storage_path ?? "",
      imageWidth: row.image_width ?? 0,
      imageHeight: row.image_height ?? 0
    };
  }

  function fromAttemptRow(row) {
    return {
      attemptId: row.attempt_id,
      studentId: row.student_id,
      bookId: row.book_id,
      itemId: row.item_id,
      round: row.round ?? 1,
      result: row.result ?? "wrong",
      recordedAt: row.recorded_at,
      note: row.note ?? ""
    };
  }

  /** 교재 목록(단원 포함). 화면 왼쪽 폴더 트리가 쓴다. */
  async function listProblemBankBooks() {
    requireDatabase();
    const [bookRows, unitRows] = await Promise.all([
      listRows("problem_bank_books", "select=*&order=folder_path.asc,title.asc", { requireServiceRole: true }),
      listRows("problem_bank_units", "select=*&order=book_id.asc,position.asc", { requireServiceRole: true })
    ]);
    const unitsByBook = new Map();
    for (const row of unitRows) {
      const unit = fromUnitRow(row);
      if (!unitsByBook.has(unit.bookId)) unitsByBook.set(unit.bookId, []);
      unitsByBook.get(unit.bookId).push(unit);
    }
    return bookRows.map((row) => ({ ...fromBookRow(row), units: unitsByBook.get(row.book_id) ?? [] }));
  }

  /** 교재 하나의 문항·영역 전체. 이미지 URL 은 여기서 만들지 않는다(문항 수백 개 × 서명 호출을 피한다). */
  async function getProblemBankBook(bookId) {
    requireDatabase();
    const safeBookId = textOf(bookId);
    if (!safeBookId) throw createStatusError("교재 ID가 필요합니다.", 400);
    const encoded = encodeURIComponent(safeBookId);
    const [bookRows, unitRows, itemRows, regionRows] = await Promise.all([
      listRows("problem_bank_books", `select=*&book_id=eq.${encoded}`, { requireServiceRole: true }),
      listRows("problem_bank_units", `select=*&book_id=eq.${encoded}&order=position.asc`, { requireServiceRole: true }),
      listRows("problem_bank_items", `select=*&book_id=eq.${encoded}&order=number_sort.asc`, { requireServiceRole: true }),
      listRows(
        "problem_bank_regions",
        `select=*&item_id=like.${encodeURIComponent(`${safeBookId}-%`)}&order=item_id.asc,position.asc`,
        { requireServiceRole: true }
      )
    ]);
    const bookRow = bookRows[0];
    if (!bookRow) throw createStatusError("교재를 찾지 못했습니다.", 404, "book_not_found");
    const regionsByItem = new Map();
    for (const row of regionRows) {
      const region = fromRegionRow(row);
      if (!regionsByItem.has(region.itemId)) regionsByItem.set(region.itemId, []);
      regionsByItem.get(region.itemId).push(region);
    }
    return {
      book: fromBookRow(bookRow),
      units: unitRows.map(fromUnitRow),
      items: itemRows.map((row) => ({ ...fromItemRow(row), regions: regionsByItem.get(row.item_id) ?? [] }))
    };
  }

  /** 문항 몇 개의 영역 이미지에 서명 URL 을 붙인다. 미리보기·인쇄 직전에 호출한다. */
  async function resolveProblemBankItemImages(itemIds, { expiresIn = 60 * 60 * 24 } = {}) {
    requireDatabase();
    const safeIds = [...new Set((Array.isArray(itemIds) ? itemIds : []).map((value) => textOf(value)).filter(Boolean))].slice(0, 200);
    if (safeIds.length === 0) return [];
    const rows = await listRows(
      "problem_bank_regions",
      `select=*&item_id=in.(${safeIds.map((id) => encodeURIComponent(id)).join(",")})&order=item_id.asc,position.asc`,
      { requireServiceRole: true }
    );
    const regions = await Promise.all(rows.map(async (row) => {
      const region = fromRegionRow(row);
      const url = region.storagePath ? await createSignedStorageUrl(problemBankStorageBucket, region.storagePath, expiresIn) : "";
      return { ...region, url };
    }));
    return regions;
  }

  function normalizeManifest(manifest) {
    const book = manifest?.book ?? {};
    const bookId = textOf(book.book_id);
    if (!/^pbk_[a-f0-9]{6,32}$/.test(bookId)) throw createStatusError("패키지의 book_id 형식이 올바르지 않습니다.", 400, "bad_manifest");
    const title = textOf(book.title);
    if (!title) throw createStatusError("교재 제목이 비어 있습니다.", 400, "bad_manifest");
    const items = Array.isArray(manifest.items) ? manifest.items : [];
    if (items.length === 0) throw createStatusError("패키지에 문항이 없습니다.", 400, "bad_manifest");
    const units = Array.isArray(manifest.units) ? manifest.units : [];
    for (const item of items) {
      if (!textOf(item.item_id).startsWith(`${bookId}-`)) throw createStatusError(`문항 ID 가 교재와 맞지 않습니다: ${item.item_id}`, 400, "bad_manifest");
      for (const region of item.regions ?? []) {
        if (!packageFilePattern.test(textOf(region.file))) throw createStatusError(`영역 파일 이름이 올바르지 않습니다: ${region.file}`, 400, "bad_manifest");
      }
    }
    return { bookId, title, book, units, items };
  }

  /**
   * CLI 패키지의 manifest.json 을 표에 넣는다. 같은 패키지를 다시 올리면 덮어쓴다(멱등).
   * 이미지는 별도 배치(uploadProblemBankImages)로 올린다.
   */
  async function importProblemBankManifest(manifest) {
    requireDatabase();
    const { bookId, title, book, units, items } = normalizeManifest(manifest);
    const now = new Date().toISOString();
    const bookRow = {
      book_id: bookId,
      title,
      folder_path: textOf(book.folder_path),
      subject: textOf(book.subject),
      grade: textOf(book.grade),
      source_kind: ["pdf_text", "pdf_scan", "hwpx"].includes(book.source_kind) ? book.source_kind : "pdf_text",
      source_file_name: textOf(book.source_file_name),
      source_sha256: textOf(book.source_sha256),
      page_count: integerOf(book.page_count),
      item_count: items.length,
      layout_profile: book.layout_profile ?? {},
      ingest_version: textOf(book.ingest_version),
      updated_at: now
    };
    const unitRows = units.map((unit, index) => ({
      unit_id: `${bookId}-u${index}`,
      book_id: bookId,
      position: integerOf(unit.position, index),
      title: textOf(unit.title, `단원 ${index + 1}`),
      item_number_from: textOf(unit.item_number_from),
      item_number_to: textOf(unit.item_number_to)
    }));
    const itemRows = items.map((item) => ({
      item_id: textOf(item.item_id),
      book_id: bookId,
      unit_id: Number.isInteger(item.unit_index) && unitRows[item.unit_index] ? unitRows[item.unit_index].unit_id : null,
      number_label: textOf(item.number_label),
      number_sort: integerOf(item.number_sort),
      printed_page: integerOf(item.printed_page),
      pdf_page: integerOf(item.pdf_page),
      type_label: textOf(item.type_label),
      tags: Array.isArray(item.tags) ? item.tags.map((tag) => textOf(tag)).filter(Boolean) : [],
      answer: textOf(item.answer),
      has_solution: Boolean(item.has_solution),
      has_subquestions: Boolean(item.has_subquestions) || Boolean(item.has_shared_passage),
      review_status: ["ai_checked", "flagged", "human_ok"].includes(item.review_status) ? item.review_status : "ai_checked",
      review_note: textOf(item.review_note),
      updated_at: now
    }));
    const regionRows = items.flatMap((item) => (item.regions ?? []).map((region, index) => ({
      region_id: `${textOf(item.item_id)}-r${index}`,
      item_id: textOf(item.item_id),
      position: integerOf(region.position, index),
      kind: ["body", "choices", "figure", "passage", "solution"].includes(region.kind) ? region.kind : "body",
      pdf_page: integerOf(region.pdf_page),
      bbox_normalized: Array.isArray(region.bbox_normalized) ? region.bbox_normalized : [0, 0, 1, 1],
      storage_path: `${bookId}/${textOf(region.file)}`,
      image_width: integerOf(region.width),
      image_height: integerOf(region.height)
    })));

    await upsertRows("problem_bank_books", [bookRow], { onConflict: "book_id" });
    // 다시 올릴 때 사라진 단원·문항이 남지 않도록 교재 아래를 비우고 다시 넣는다(영역은 cascade).
    await deleteRows("problem_bank_items", `book_id=eq.${encodeURIComponent(bookId)}`);
    await deleteRows("problem_bank_units", `book_id=eq.${encodeURIComponent(bookId)}`);
    if (unitRows.length) await upsertRows("problem_bank_units", unitRows, { onConflict: "unit_id" });
    for (let offset = 0; offset < itemRows.length; offset += 200) {
      await upsertRows("problem_bank_items", itemRows.slice(offset, offset + 200), { onConflict: "item_id" });
    }
    for (let offset = 0; offset < regionRows.length; offset += 200) {
      await upsertRows("problem_bank_regions", regionRows.slice(offset, offset + 200), { onConflict: "region_id" });
    }
    return { bookId, unitCount: unitRows.length, itemCount: itemRows.length, regionCount: regionRows.length };
  }

  /** 패키지 이미지 배치 업로드. 파일 이름은 manifest 의 region.file 과 같아야 한다. */
  async function uploadProblemBankImages(bookId, files) {
    requireDatabase();
    const safeBookId = textOf(bookId);
    if (!/^pbk_[a-f0-9]{6,32}$/.test(safeBookId)) throw createStatusError("교재 ID 형식이 올바르지 않습니다.", 400);
    const list = Array.isArray(files) ? files : [];
    if (list.length === 0 || list.length > 40) throw createStatusError("이미지는 한 번에 1~40개씩 올립니다.", 400);
    const uploaded = [];
    for (const entry of list) {
      const file = textOf(entry?.file);
      if (!packageFilePattern.test(file)) throw createStatusError(`파일 이름이 올바르지 않습니다: ${file}`, 400);
      const buffer = entry?.buffer;
      const mimeType = textOf(entry?.mimeType, "image/jpeg");
      if (!buffer || !buffer.length) throw createStatusError(`파일 내용이 비어 있습니다: ${file}`, 400);
      if (buffer.length > problemBankStorageMaxBytes) throw createStatusError(`파일이 너무 큽니다: ${file}`, 413);
      if (!problemBankStorageAllowedMimeTypes.includes(mimeType)) throw createStatusError(`지원하지 않는 이미지 형식입니다: ${mimeType}`, 415);
      await uploadStorageObjectWithBucketRetry(problemBankStorageBucket, `${safeBookId}/${file}`, {
        contentType: mimeType,
        body: buffer,
        bucketOptions: { allowedMimeTypes: problemBankStorageAllowedMimeTypes, fileSizeLimit: problemBankStorageMaxBytes }
      });
      uploaded.push(file);
    }
    return { bookId: safeBookId, uploaded };
  }

  /** 학생별 정오답 기록. bookId 만 주면 그 교재의 전 학생 기록(오답률 계산용). */
  async function listProblemBankAttempts({ bookId, studentId } = {}) {
    requireDatabase();
    const filters = ["select=*"];
    if (textOf(bookId)) filters.push(`book_id=eq.${encodeURIComponent(textOf(bookId))}`);
    if (textOf(studentId)) filters.push(`student_id=eq.${encodeURIComponent(textOf(studentId))}`);
    if (filters.length === 1) throw createStatusError("bookId 또는 studentId 가 필요합니다.", 400);
    filters.push("order=recorded_at.desc");
    const rows = await listRows("problem_bank_attempts", filters.join("&"), { requireServiceRole: true });
    return rows.map(fromAttemptRow);
  }

  /**
   * 정오답을 저장한다. result 가 "clear" 면 그 회차 기록을 지운다(미풀이로 되돌리기).
   * 같은 (학생·문항·회차)는 한 행이다.
   */
  async function saveProblemBankAttempts(entries) {
    requireDatabase();
    const list = Array.isArray(entries) ? entries : [];
    if (list.length === 0 || list.length > 500) throw createStatusError("기록은 한 번에 1~500개씩 저장합니다.", 400);
    const now = new Date().toISOString();
    const upserts = [];
    const clears = [];
    for (const entry of list) {
      const studentId = textOf(entry?.studentId);
      const bookId = textOf(entry?.bookId);
      const itemId = textOf(entry?.itemId);
      const round = Math.max(1, integerOf(entry?.round, 1));
      if (!studentId || !bookId || !itemId) throw createStatusError("studentId·bookId·itemId 가 모두 필요합니다.", 400);
      const attemptId = `${studentId}__${itemId}__r${round}`;
      if (entry?.result === "clear") {
        clears.push(attemptId);
        continue;
      }
      if (!attemptResults.has(entry?.result)) throw createStatusError(`결과 값이 올바르지 않습니다: ${entry?.result}`, 400);
      upserts.push({
        attempt_id: attemptId,
        student_id: studentId,
        book_id: bookId,
        item_id: itemId,
        round,
        result: entry.result,
        recorded_at: textOf(entry?.recordedAt) || now,
        note: textOf(entry?.note),
        updated_at: now
      });
    }
    const saved = upserts.length ? await upsertRows("problem_bank_attempts", upserts, { onConflict: "attempt_id" }) : [];
    if (clears.length) {
      await deleteRows("problem_bank_attempts", `attempt_id=in.(${clears.map((id) => encodeURIComponent(id)).join(",")})`);
    }
    return { attempts: saved.map(fromAttemptRow), cleared: clears };
  }

  return {
    listProblemBankBooks,
    getProblemBankBook,
    resolveProblemBankItemImages,
    importProblemBankManifest,
    uploadProblemBankImages,
    listProblemBankAttempts,
    saveProblemBankAttempts
  };
}
