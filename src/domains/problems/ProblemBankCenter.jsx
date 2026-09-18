import { useEffect, useRef, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import {
  auditProblemBankBook,
  deleteProblemBankBook,
  fetchProblemBankBook,
  fetchProblemBankBooks,
  fetchProblemBankItemImages,
  importProblemBankAnswers,
  importProblemBankManifest,
  readFileAsDataUrl,
  uploadProblemBankImages,
  wakeProblemBankApi
} from "./problemBankApi.js";
import "./problemBank.css";

const imageBatchSize = 40;
const uploadConcurrency = 3;

/**
 * 교재관리. CLI(scripts/problem-bank/ingest-text-pdf.mjs)가 만든 패키지 폴더를 올려 교재를 등록하고,
 * 등록된 교재의 단원·문항 수·경계 확인 필요 문항을 본다.
 *
 * 패키지 폴더 = manifest.json + validation.json + items/*.jpg (+ pages/, qa/ 는 올리지 않는다).
 * 정답·해설 = manifest-answers.json + answers/*.jpg + solutions/*.jpg (ingest-answers 출력). 같은 폴더에 두면 한 번에 등록된다.
 */
const emptyAnswerUpload = { stage: "idle", message: "", progress: 0, total: 0, manifest: null, imageFiles: [] };
const emptyUpload = { stage: "idle", message: "", progress: 0, total: 0, manifest: null, imageFiles: [], answerManifest: null, answerImageFiles: [] };

/**
 * 폴더 선택 결과에서 정답·해설 패키지를 읽는다. 없으면 { manifest: null }, 잘못됐으면 { error }.
 * @param {File[]} files
 * @param {string} expectedBookId 문항 패키지 또는 선택한 교재의 book_id
 */
async function readAnswerPackage(files, expectedBookId) {
  const manifestFile = files.find((file) => file.name === "manifest-answers.json");
  if (!manifestFile) return { manifest: null, imageFiles: [] };
  let manifest;
  try {
    manifest = JSON.parse(await manifestFile.text());
  } catch {
    return { error: "manifest-answers.json 을 읽지 못했습니다." };
  }
  if (manifest.book_id !== expectedBookId) {
    return { error: `정답·해설 패키지는 다른 교재(${manifest.book_id}) 것입니다. 이 교재는 ${expectedBookId} 입니다.` };
  }
  const entries = [...(manifest.answers ?? []), ...(manifest.solutions ?? [])];
  const expected = new Set(entries.map((entry) => entry.file));
  const md5ByKey = new Map(entries.map((entry) => [entry.file, entry.md5 ?? ""]));
  const imageFiles = files
    .filter((file) => /(^|[\\/])(answers|solutions)[\\/][^\\/]+\.(jpe?g|png|webp)$/i.test(file.webkitRelativePath || file.name))
    .map((file) => ({ file, key: `${/answers[\\/]/i.test(file.webkitRelativePath || "") ? "answers" : "solutions"}/${file.name}` }))
    .filter((entry) => expected.has(entry.key))
    .map((entry) => ({ ...entry, md5: md5ByKey.get(entry.key) ?? "" }));
  if (imageFiles.length !== expected.size) {
    return { error: `정답·해설 이미지 개수가 맞지 않습니다. manifest ${expected.size}개 · 폴더 ${imageFiles.length}개.` };
  }
  return { manifest, imageFiles };
}

/** 정답·해설 manifest 등록 → 이미지 배치 업로드. 진행 메시지는 report 로 알린다. */
/**
 * 다시 등록할 때 서버 Storage 에 같은 내용이 이미 있는 파일은 건너뛴다. 패키지 manifest 의 md5 와 Storage 의 md5(eTag)가
 * 같으면 그대로, md5 를 모르면 크기가 같을 때만 그대로. 처음 등록이거나 대조에 실패하면 전부 올린다.
 * @param {{ file: File, key: string, md5?: string }[]} entries
 */
async function planImageUploads(bookId, entries) {
  let stored = {};
  try {
    stored = (await auditProblemBankBook(bookId)).stored ?? {};
  } catch {
    stored = {};
  }
  const pending = [];
  let skipped = 0;
  for (const entry of entries) {
    const have = stored[entry.key];
    const same = Boolean(have) && ((entry.md5 && have.md5 && entry.md5 === have.md5) || (!have.md5 && have.size > 0 && have.size === entry.file.size));
    if (same) skipped += 1;
    else pending.push(entry);
  }
  return { pending, skipped };
}

/** 이미지를 40장 묶음으로, 묶음 3개를 동시에 올린다(한 묶음씩 차례로 올리면 교재 한 권에 십여 분). 실패하면 그 자리에서 멈춘다. */
async function uploadImageEntries(bookId, entries, report) {
  const batches = [];
  for (let offset = 0; offset < entries.length; offset += imageBatchSize) batches.push(entries.slice(offset, offset + imageBatchSize));
  let done = 0;
  let next = 0;
  const worker = async () => {
    while (next < batches.length) {
      const batch = batches[next];
      next += 1;
      const payload = await Promise.all(batch.map(async (entry) => ({ file: entry.key, dataUrl: await readFileAsDataUrl(entry.file) })));
      await uploadProblemBankImages(bookId, payload);
      done += batch.length;
      report(done, entries.length);
    }
  };
  await Promise.all(Array.from({ length: Math.min(uploadConcurrency, batches.length) }, worker));
}

async function uploadAnswerPackage(bookId, manifest, imageFiles, report) {
  const result = await importProblemBankAnswers(manifest);
  const { pending, skipped } = await planImageUploads(bookId, imageFiles);
  await uploadImageEntries(bookId, pending, (done, total) => report(done, total, skipped));
  return { ...result, uploaded: pending.length, skipped };
}

/** 검수 메모(review_note) 앞의 기호로 심각도를 나눈다: 🔴 내용 확인 · 🟡 조판 · 📝 전사 메모 · 그 밖은 경계(스캔 자르기). */
function reviewSeverity(note) {
  const text = String(note ?? "");
  if (text.startsWith("🔴")) return "red";
  if (text.startsWith("🟡")) return "yellow";
  if (text.startsWith("📝")) return "memo";
  return "boundary";
}
const reviewSeverityLabels = { red: "🔴 내용 확인", yellow: "🟡 조판", memo: "📝 전사 메모", boundary: "✂ 경계" };

/** 상태 한 줄: 배지(완료 · 확인 필요 · 실패 · 진행 중) + 짧은 설명. 사용자는 됐는지·확인할 게 있는지만 보면 된다. */
const statusBadgeLabels = { done: "완료", error: "확인 필요", importing: "진행 중", running: "진행 중", ready: "준비됨", idle: "" };
function StatusLine({ stage, message, className = "" }) {
  if (!message) return null;
  const label = statusBadgeLabels[stage] ?? "";
  return (
    <p aria-live="polite" className={`problemBankStatus stage-${stage} ${className}`.trim()}>
      {label ? <span className="problemBankStatusBadge">{label}</span> : null}
      <span>{message}</span>
    </p>
  );
}

export function ProblemBankCenter() {
  const [books, setBooks] = useState([]);
  const [listError, setListError] = useState("");
  const [selectedBookId, setSelectedBookId] = useState("");
  const [detail, setDetail] = useState(null);
  const [detailError, setDetailError] = useState("");
  const [flaggedImages, setFlaggedImages] = useState(new Map());
  const [upload, setUpload] = useState(emptyUpload);
  const [editMessage, setEditMessage] = useState("");
  const [deleteArmed, setDeleteArmed] = useState(false);
  const [answerUpload, setAnswerUpload] = useState(emptyAnswerUpload);
  const [audit, setAudit] = useState({ stage: "idle", message: "", missing: [] });
  const [reviewFilter, setReviewFilter] = useState("all");
  const folderInputRef = useRef(null);
  const answerFolderInputRef = useRef(null);

  async function reloadBooks() {
    try {
      const list = await fetchProblemBankBooks();
      setBooks(list);
      setListError("");
      return list;
    } catch (error) {
      setListError(error.message || "교재 목록을 불러오지 못했습니다.");
      return [];
    }
  }

  useEffect(() => {
    reloadBooks();
  }, []);

  useEffect(() => {
    if (!selectedBookId) {
      setDetail(null);
      return undefined;
    }
    let cancelled = false;
    fetchProblemBankBook(selectedBookId)
      .then((result) => {
        if (cancelled) return;
        setDetail(result);
        setDetailError("");
        setEditMessage("");
        setDeleteArmed(false);
        setAnswerUpload(emptyAnswerUpload);
        setAudit({ stage: "idle", message: "", missing: [] });
        setReviewFilter("all");
        const flagged = (result.items ?? []).filter((item) => item.reviewStatus === "flagged").slice(0, 120);
        if (flagged.length) {
          fetchProblemBankItemImages(flagged.map((item) => item.itemId))
            .then((regions) => {
              if (cancelled) return;
              const next = new Map();
              for (const region of regions) {
                if (region.kind !== "body") continue;
                next.set(region.itemId, region.url);
              }
              setFlaggedImages(next);
            })
            .catch(() => {});
        } else {
          setFlaggedImages(new Map());
        }
      })
      .catch((error) => {
        if (!cancelled) setDetailError(error.message || "교재를 불러오지 못했습니다.");
      });
    return () => {
      cancelled = true;
    };
  }, [selectedBookId]);

  async function handleFolderPicked(event) {
    const files = [...(event.target.files ?? [])];
    event.target.value = "";
    const manifestFile = files.find((file) => file.name === "manifest.json");
    if (!manifestFile) {
      setUpload({ ...emptyUpload, stage: "error", message: "폴더 안에 manifest.json 이 없습니다. CLI 출력 폴더를 그대로 선택해 주세요." });
      return;
    }
    let manifest;
    try {
      manifest = JSON.parse(await manifestFile.text());
    } catch {
      setUpload({ ...emptyUpload, stage: "error", message: "manifest.json 을 읽지 못했습니다." });
      return;
    }
    const imageFiles = files.filter((file) => /(^|[\\/])items[\\/][^\\/]+\.(jpe?g|png|webp)$/i.test(file.webkitRelativePath || file.name));
    const expected = new Set((manifest.items ?? []).flatMap((item) => (item.regions ?? []).map((region) => region.file)));
    const matched = imageFiles.filter((file) => expected.has(`items/${file.name}`));
    const md5ByFile = new Map((manifest.items ?? []).flatMap((item) => (item.regions ?? []).map((region) => [region.file, region.md5 ?? ""])));
    if (matched.length !== expected.size) {
      setUpload({
        ...emptyUpload,
        stage: "error",
        message: `이미지 개수가 맞지 않습니다. manifest ${expected.size}개 · 폴더 ${matched.length}개. 폴더가 온전한지 확인해 주세요.`
      });
      return;
    }
    // 같은 폴더에 정답·해설 패키지(manifest-answers.json)가 있으면 함께 올린다.
    const answerPackage = await readAnswerPackage(files, manifest.book?.book_id);
    if (answerPackage.error) {
      setUpload({ ...emptyUpload, stage: "error", message: answerPackage.error });
      return;
    }
    const answerSummary = answerPackage.manifest
      ? ` · 해설 ${answerPackage.manifest.solutions?.length ?? 0} · 답 ${answerPackage.manifest.answers?.length ?? 0}`
      : "";
    setUpload({
      stage: "ready",
      message: `${manifest.book?.title ?? "교재"} · 문항 ${manifest.items?.length ?? 0}${answerSummary} — 등록을 누르면 올라갑니다`,
      progress: 0,
      total: matched.length + answerPackage.imageFiles.length,
      manifest,
      imageFiles: matched.map((file) => ({ file, key: `items/${file.name}`, md5: md5ByFile.get(`items/${file.name}`) ?? "" })),
      answerManifest: answerPackage.manifest,
      answerImageFiles: answerPackage.imageFiles
    });
  }

  async function runImport() {
    const { manifest, imageFiles, answerManifest, answerImageFiles } = upload;
    if (!manifest) return;
    try {
      setUpload((current) => ({ ...current, stage: "importing", message: "서버 상태를 확인하는 중…", progress: 0 }));
      // 서버가 재배포·절전에서 깨어나는 중이면 「Failed to fetch」가 난다. 먼저 깨우고 시작한다.
      const awake = await wakeProblemBankApi({ onWait: () => setUpload((current) => ({ ...current, message: "서버를 깨우는 중… (최대 90초)" })) });
      if (!awake) throw new Error("서버가 응답하지 않습니다. 1~2분 뒤 다시 등록을 눌러 주세요.");
      setUpload((current) => ({ ...current, message: "문항 목록을 등록하는 중…" }));
      const result = await importProblemBankManifest(manifest);
      setUpload((current) => ({ ...current, message: "서버에 이미 있는 이미지를 대조하는 중…" }));
      // 다시 등록이면 바뀐 파일만 올린다(md5 대조). 처음 등록이면 전부.
      const plan = await planImageUploads(result.bookId, imageFiles);
      const skippedNote = plan.skipped ? ` (변경 없는 ${plan.skipped}개 건너뜀)` : "";
      await uploadImageEntries(result.bookId, plan.pending, (done, total) => {
        setUpload((current) => ({ ...current, message: `이미지 올리는 중… ${done}/${total}${skippedNote}`, progress: plan.skipped + done }));
      });
      let answerResult = null;
      if (answerManifest) {
        setUpload((current) => ({ ...current, message: "정답·해설을 등록하는 중…" }));
        answerResult = await uploadAnswerPackage(result.bookId, answerManifest, answerImageFiles, (done, total, skipped) => {
          setUpload((current) => ({ ...current, message: `정답·해설 이미지 올리는 중… ${done}/${total}${skipped ? ` (변경 없는 ${skipped}개 건너뜀)` : ""}`, progress: imageFiles.length + skipped + done }));
        });
      }
      // 저장 뒤 서버를 다시 읽어 문항 수(정답·해설을 올렸으면 해설 수도)가 맞는지 확인한다.
      const list = await reloadBooks();
      const saved = list.find((book) => book.bookId === result.bookId);
      const countMatches = saved && saved.itemCount === (manifest.items?.length ?? 0);
      let answerMatches = true;
      let answerNote = "";
      if (answerResult) {
        const refreshed = await fetchProblemBankBook(result.bookId);
        const solvedCount = refreshed.items.filter((item) => item.hasSolution).length;
        answerMatches = solvedCount === answerResult.solutionCount;
        answerNote = answerMatches
          ? ` · 해설 ${answerResult.solutionCount} · 답 ${answerResult.answerCount}`
          : ` · 해설이 서버 ${solvedCount} / 패키지 ${answerResult.solutionCount}로 다릅니다 — 같은 폴더를 다시 등록하세요`;
      }
      const reviewCount = (manifest.items ?? []).filter((item) => item.review_status === "flagged").length;
      setUpload({
        ...emptyUpload,
        stage: countMatches && answerMatches ? "done" : "error",
        message: countMatches
          ? `${saved.title} · 문항 ${saved.itemCount}${answerNote}${reviewCount ? ` · 검토 필요 ${reviewCount}건은 아래 목록에서` : ""}`
          : `${manifest.book?.title ?? "교재"} · 서버 문항 ${saved?.itemCount ?? "없음"} / 패키지 ${manifest.items?.length ?? 0} — 같은 폴더를 다시 등록하세요`,
        progress: imageFiles.length + answerImageFiles.length,
        total: imageFiles.length + answerImageFiles.length
      });
      setSelectedBookId(result.bookId);
    } catch (error) {
      setUpload((current) => ({ ...current, stage: "error", message: `등록이 끊겼습니다 — ${error.message || "원인 미상"}. 같은 폴더를 다시 등록하면 이어서 올라갑니다.` }));
    }
  }

  async function handleAnswerFolderPicked(event) {
    const files = [...(event.target.files ?? [])];
    event.target.value = "";
    if (!detail) return;
    const answerPackage = await readAnswerPackage(files, detail.book.bookId);
    if (answerPackage.error || !answerPackage.manifest) {
      setAnswerUpload({ ...emptyAnswerUpload, stage: "error", message: answerPackage.error || "폴더 안에 manifest-answers.json 이 없습니다. ingest-answers 출력 폴더(또는 문항 패키지 폴더)를 선택해 주세요." });
      return;
    }
    const { manifest, imageFiles } = answerPackage;
    const numbers = new Set(detail.items.map((item) => item.numberLabel));
    const unmatched = (manifest.solutions ?? []).filter((entry) => !numbers.has(entry.number_label)).length;
    setAnswerUpload({
      stage: "ready",
      message: `해설 ${manifest.solutions?.length ?? 0} · 답 ${manifest.answers?.length ?? 0}${unmatched ? ` · 교재에 없는 번호 ${unmatched}개는 건너뜀` : ""} — 등록을 누르면 올라갑니다`,
      progress: 0,
      total: imageFiles.length,
      manifest,
      imageFiles
    });
  }

  async function runAnswerImport() {
    const { manifest, imageFiles } = answerUpload;
    if (!manifest || !detail) return;
    try {
      setAnswerUpload((current) => ({ ...current, stage: "importing", message: "정답·해설 목록을 등록하는 중…", progress: 0 }));
      const result = await uploadAnswerPackage(detail.book.bookId, manifest, imageFiles, (done, total, skipped) => {
        setAnswerUpload((current) => ({ ...current, message: `이미지 올리는 중… ${done}/${total}${skipped ? ` (변경 없는 ${skipped}개 건너뜀)` : ""}`, progress: skipped + done }));
      });
      // 저장 뒤 교재를 다시 읽어 해설이 붙은 문항 수가 서버 값과 맞는지 본다.
      const refreshed = await fetchProblemBankBook(result.bookId);
      setDetail(refreshed);
      const solvedCount = refreshed.items.filter((item) => item.hasSolution).length;
      const countMatches = solvedCount === result.solutionCount;
      setAnswerUpload({
        ...emptyAnswerUpload,
        stage: countMatches ? "done" : "error",
        message: countMatches
          ? `해설 ${result.solutionCount} · 답 ${result.answerCount}${result.unmatched?.length ? ` · 교재에 없는 번호 ${result.unmatched.length}개는 건너뜀` : ""}`
          : `해설이 서버 ${solvedCount} / 패키지 ${result.solutionCount}로 다릅니다 — 같은 폴더를 다시 올리세요`
      });
    } catch (error) {
      setAnswerUpload((current) => ({ ...current, stage: "error", message: `올리다 끊겼습니다 — ${error.message || "원인 미상"}. 같은 폴더를 다시 올리면 이어서 올라갑니다.` }));
    }
  }

  async function runAudit() {
    if (!detail) return;
    setAudit({ stage: "running", message: "서버 파일을 대조하는 중…", missing: [] });
    try {
      const result = await auditProblemBankBook(detail.book.bookId);
      const missing = result.missing ?? [];
      setAudit({
        stage: missing.length ? "error" : "done",
        message: missing.length
          ? `이미지 ${missing.length}개가 서버에 없습니다 — 같은 폴더를 다시 등록하면 채워집니다`
          : `이미지 ${result.storedCount}개 모두 있음`,
        missing
      });
    } catch (error) {
      setAudit({ stage: "error", message: error.message || "누락 검사에 실패했습니다.", missing: [] });
    }
  }

  async function deleteBook() {
    if (!detail) return;
    try {
      const result = await deleteProblemBankBook(detail.book.bookId);
      setEditMessage(`삭제했습니다 · 정오답 기록 ${result.deletedAttempts}건 · 이미지 ${result.deletedImages}장`);
      setSelectedBookId("");
      setDetail(null);
      setDeleteArmed(false);
      await reloadBooks();
    } catch (error) {
      setEditMessage(error.message || "교재를 삭제하지 못했습니다.");
    }
  }

  const flaggedItems = (detail?.items ?? []).filter((item) => item.reviewStatus === "flagged");
  const reviewCounts = flaggedItems.reduce((counts, item) => ({ ...counts, [reviewSeverity(item.reviewNote)]: (counts[reviewSeverity(item.reviewNote)] ?? 0) + 1 }), {});
  const reviewItems = flaggedItems.filter((item) => reviewFilter === "all" || reviewSeverity(item.reviewNote) === reviewFilter);
  const solutionItems = (detail?.items ?? []).filter((item) => item.hasSolution).length;
  const answerItems = (detail?.items ?? []).filter((item) => item.regions.some((region) => region.kind === "answer")).length;
  const passageItems = (detail?.items ?? []).filter((item) => item.hasSubquestions).length;

  return (
    <section className="problemBankCenter">
      <PageHeader
        actions={<span className="countBadge">{books.length}권</span>}
        eyebrow="PROBLEM BANK"
        title="교재관리"
      />

      <div className="problemBankCenterLayout">
        <div className="panel problemBankImportPanel">
          <h2>패키지 등록</h2>
          <p className="muted">패키지 폴더(문항·정답·해설)를 선택하면 한 번에 올라갑니다.</p>
          <button className="softButton" onClick={() => folderInputRef.current?.click()} type="button">패키지 폴더 선택</button>
          <input
            aria-label="패키지 폴더 선택"
            hidden
            multiple
            onChange={handleFolderPicked}
            ref={folderInputRef}
            type="file"
            webkitdirectory=""
          />
          <StatusLine message={upload.message} stage={upload.stage} />
          {upload.stage === "importing" && upload.total ? (
            <progress max={upload.total} value={upload.progress} />
          ) : null}
          {upload.stage === "ready" ? (
            <button className="primaryButton" onClick={runImport} type="button">등록</button>
          ) : null}
        </div>

        <div className="panel problemBankListPanel">
          <h2>등록된 교재</h2>
          {listError ? <p className="problemBankError">{listError}</p> : null}
          {books.length === 0 && !listError ? <EmptyState className="emptyState">아직 등록된 교재가 없습니다.</EmptyState> : null}
          <ul className="problemBankBookList">
            {books.map((book) => (
              <li key={book.bookId}>
                <button
                  aria-pressed={book.bookId === selectedBookId}
                  className={`problemBankBookItem${book.bookId === selectedBookId ? " active" : ""}`}
                  onClick={() => setSelectedBookId(book.bookId)}
                  type="button"
                >
                  <strong>{book.title}</strong>
                  <small>{book.folderPath || "폴더 없음"} · {book.units.length}단원 · {book.itemCount}문제 · {book.sourceKind}</small>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel problemBankDetailPanel">
          <h2>교재 상세</h2>
          {detailError ? <p className="problemBankError">{detailError}</p> : null}
          {!detail && !detailError ? <EmptyState className="emptyState">교재를 선택하면 단원과 검수 상태가 나타납니다.</EmptyState> : null}
          {detail ? (
            <>
              <dl className="problemBankInfo">
                <div><dt>제목</dt><dd>{detail.book.title}</dd></div>
                <div><dt>폴더</dt><dd>{detail.book.folderPath || "폴더 없음"}</dd></div>
                <div><dt>학년 · 과목</dt><dd>{[detail.book.grade, detail.book.subject].filter(Boolean).join(" · ") || "—"}</dd></div>
                <div><dt>문항</dt><dd>{detail.items.length}개 · 해설 {solutionItems}개 · 빠른정답 {answerItems}개</dd></div>
              </dl>
              <div className="problemBankTools">
                <button className="softButton" disabled={audit.stage === "running"} onClick={runAudit} title="등록이 중간에 끊겨 이미지가 안 보일 때 빠진 파일을 찾습니다." type="button">이미지 누락 검사</button>
                <button className="softButton" onClick={() => answerFolderInputRef.current?.click()} title="문항은 그대로 두고 정답·해설만 다시 올립니다(같은 패키지 폴더 선택)." type="button">정답·해설만 다시 올리기</button>
                {deleteArmed ? (
                  <>
                    <span className="problemBankDeleteWarn">문항 {detail.items.length}개와 학생 기록·이미지가 모두 지워집니다. 되돌릴 수 없습니다.</span>
                    <button className="problemBankDangerButton" onClick={deleteBook} type="button">삭제 확정</button>
                    <button className="softButton" onClick={() => setDeleteArmed(false)} type="button">취소</button>
                  </>
                ) : (
                  <button className="softButton" onClick={() => setDeleteArmed(true)} type="button">교재 삭제</button>
                )}
                <input
                  aria-label="정답·해설 폴더 선택"
                  hidden
                  multiple
                  onChange={handleAnswerFolderPicked}
                  ref={answerFolderInputRef}
                  type="file"
                  webkitdirectory=""
                />
              </div>
              {editMessage ? <p aria-live="polite" className="problemBankUploadMessage">{editMessage}</p> : null}
              <div className="problemBankAnswerImport">
                <StatusLine message={audit.message} stage={audit.stage} />
                {audit.missing.length ? (
                  <ul className="problemBankAuditList">
                    {audit.missing.slice(0, 20).map((entry) => (
                      <li key={`${entry.itemId}-${entry.kind}`}>{entry.itemId.replace(`${detail.book.bookId}-`, "")}번 · {entry.kind} · <code>{entry.storagePath}</code></li>
                    ))}
                    {audit.missing.length > 20 ? <li>… 외 {audit.missing.length - 20}개</li> : null}
                  </ul>
                ) : null}
                <StatusLine message={answerUpload.message} stage={answerUpload.stage} />
                {answerUpload.stage === "importing" && answerUpload.total ? (
                  <progress max={answerUpload.total} value={answerUpload.progress} />
                ) : null}
                {answerUpload.stage === "ready" ? (
                  <button className="primaryButton" onClick={runAnswerImport} type="button">정답·해설 등록</button>
                ) : null}
              </div>
              <ul aria-label="단원 목록" className="problemBankUnitList">
                <li className="problemBankUnitRow head"><span>단원</span><span>문항 범위</span><span>개수</span></li>
                {detail.units.map((unit) => {
                  const count = detail.items.filter((item) => item.unitId === unit.unitId).length;
                  return (
                    <li className="problemBankUnitRow" key={unit.unitId}>
                      <span>{unit.title}</span>
                      <span>{unit.itemNumberFrom} ~ {unit.itemNumberTo}</span>
                      <span>{count}</span>
                    </li>
                  );
                })}
              </ul>
              {flaggedItems.length ? (
                <div className="problemBankFlagged">
                  <h3>검토 필요 ({flaggedItems.length})</h3>
                  <div className="problemBankReviewFilters" role="group" aria-label="검토 종류">
                    <button aria-pressed={reviewFilter === "all"} className="softButton" onClick={() => setReviewFilter("all")} type="button">전체 {flaggedItems.length}</button>
                    {["red", "yellow", "memo", "boundary"].filter((key) => reviewCounts[key]).map((key) => (
                      <button aria-pressed={reviewFilter === key} className="softButton" key={key} onClick={() => setReviewFilter(key)} type="button">{reviewSeverityLabels[key]} {reviewCounts[key]}</button>
                    ))}
                  </div>
                  <ul>
                    {reviewItems.slice(0, 120).map((item) => (
                      <li key={item.itemId}>
                        <strong>{item.numberLabel}번</strong> <small>{item.printedPage}쪽</small>
                        <p className="problemBankReviewNote">{item.reviewNote}</p>
                        {flaggedImages.get(item.itemId) ? <img alt={`${item.numberLabel}번`} src={flaggedImages.get(item.itemId)} /> : null}
                      </li>
                    ))}
                    {reviewItems.length > 120 ? <li>… 외 {reviewItems.length - 120}개</li> : null}
                  </ul>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
