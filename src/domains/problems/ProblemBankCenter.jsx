import { useEffect, useRef, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import {
  deleteProblemBankBook,
  fetchProblemBankBook,
  fetchProblemBankBooks,
  fetchProblemBankItemImages,
  importProblemBankAnswers,
  importProblemBankManifest,
  readFileAsDataUrl,
  updateProblemBankBook,
  uploadProblemBankImages
} from "./problemBankApi.js";
import "./problemBank.css";

const imageBatchSize = 20;

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
  const expected = new Set([...(manifest.answers ?? []), ...(manifest.solutions ?? [])].map((entry) => entry.file));
  const imageFiles = files
    .filter((file) => /(^|[\\/])(answers|solutions)[\\/][^\\/]+\.(jpe?g|png|webp)$/i.test(file.webkitRelativePath || file.name))
    .map((file) => ({ file, key: `${/answers[\\/]/i.test(file.webkitRelativePath || "") ? "answers" : "solutions"}/${file.name}` }))
    .filter((entry) => expected.has(entry.key));
  if (imageFiles.length !== expected.size) {
    return { error: `정답·해설 이미지 개수가 맞지 않습니다. manifest ${expected.size}개 · 폴더 ${imageFiles.length}개.` };
  }
  return { manifest, imageFiles };
}

/** 정답·해설 manifest 등록 → 이미지 배치 업로드. 진행 메시지는 report 로 알린다. */
async function uploadAnswerPackage(bookId, manifest, imageFiles, report) {
  const result = await importProblemBankAnswers(manifest);
  for (let offset = 0; offset < imageFiles.length; offset += imageBatchSize) {
    const batch = imageFiles.slice(offset, offset + imageBatchSize);
    const payload = await Promise.all(batch.map(async (entry) => ({ file: entry.key, dataUrl: await readFileAsDataUrl(entry.file) })));
    await uploadProblemBankImages(bookId, payload);
    report(Math.min(offset + batch.length, imageFiles.length), imageFiles.length);
  }
  return result;
}

export function ProblemBankCenter() {
  const [books, setBooks] = useState([]);
  const [listError, setListError] = useState("");
  const [selectedBookId, setSelectedBookId] = useState("");
  const [detail, setDetail] = useState(null);
  const [detailError, setDetailError] = useState("");
  const [flaggedImages, setFlaggedImages] = useState(new Map());
  const [upload, setUpload] = useState(emptyUpload);
  const [editForm, setEditForm] = useState(null);
  const [editMessage, setEditMessage] = useState("");
  const [deleteArmed, setDeleteArmed] = useState(false);
  const [answerUpload, setAnswerUpload] = useState(emptyAnswerUpload);
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
        setEditForm({ title: result.book.title, folderPath: result.book.folderPath, grade: result.book.grade, subject: result.book.subject });
        setEditMessage("");
        setDeleteArmed(false);
        setAnswerUpload(emptyAnswerUpload);
        const flagged = (result.items ?? []).filter((item) => item.reviewStatus === "flagged").slice(0, 30);
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
      ? ` · 해설 ${answerPackage.manifest.solutions?.length ?? 0}개 · 답 ${answerPackage.manifest.answers?.length ?? 0}개`
      : "";
    setUpload({
      stage: "ready",
      message: `${manifest.book?.title ?? "교재"} · 문항 ${manifest.items?.length ?? 0}개 · 이미지 ${matched.length}개${answerSummary}. 등록을 누르면 서버에 올립니다.`,
      progress: 0,
      total: matched.length + answerPackage.imageFiles.length,
      manifest,
      imageFiles: matched,
      answerManifest: answerPackage.manifest,
      answerImageFiles: answerPackage.imageFiles
    });
  }

  async function runImport() {
    const { manifest, imageFiles, answerManifest, answerImageFiles } = upload;
    if (!manifest) return;
    try {
      setUpload((current) => ({ ...current, stage: "importing", message: "문항 목록을 등록하는 중…", progress: 0 }));
      const result = await importProblemBankManifest(manifest);
      for (let offset = 0; offset < imageFiles.length; offset += imageBatchSize) {
        const batch = imageFiles.slice(offset, offset + imageBatchSize);
        const payload = await Promise.all(batch.map(async (file) => ({ file: `items/${file.name}`, dataUrl: await readFileAsDataUrl(file) })));
        await uploadProblemBankImages(result.bookId, payload);
        setUpload((current) => ({ ...current, message: `이미지 올리는 중… ${Math.min(offset + batch.length, imageFiles.length)}/${imageFiles.length}`, progress: offset + batch.length }));
      }
      let answerResult = null;
      if (answerManifest) {
        setUpload((current) => ({ ...current, message: "정답·해설을 등록하는 중…" }));
        answerResult = await uploadAnswerPackage(result.bookId, answerManifest, answerImageFiles, (done, total) => {
          setUpload((current) => ({ ...current, message: `정답·해설 이미지 올리는 중… ${done}/${total}`, progress: imageFiles.length + done }));
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
          ? ` · 해설 ${answerResult.solutionCount}개 · 답 ${answerResult.answerCount}개`
          : ` · 해설 수 불일치 (서버 ${solvedCount} / 패키지 ${answerResult.solutionCount})`;
      }
      setUpload({
        ...emptyUpload,
        stage: countMatches && answerMatches ? "done" : "error",
        message: countMatches
          ? `등록 완료 · ${saved.title} · 문항 ${saved.itemCount}개 · 이미지 ${imageFiles.length}개${answerNote} (서버 재조회 ${answerMatches ? "일치" : "확인 필요"})`
          : `등록 뒤 재조회한 문항 수가 다릅니다 (서버 ${saved?.itemCount ?? "없음"} / 패키지 ${manifest.items?.length ?? 0}).`,
        progress: imageFiles.length + answerImageFiles.length,
        total: imageFiles.length + answerImageFiles.length
      });
      setSelectedBookId(result.bookId);
    } catch (error) {
      setUpload((current) => ({ ...current, stage: "error", message: error.message || "패키지 등록에 실패했습니다." }));
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
      message: `해설 ${manifest.solutions?.length ?? 0}개 · 답 ${manifest.answers?.length ?? 0}개 · 이미지 ${imageFiles.length}개${unmatched ? ` · 교재에 없는 번호 ${unmatched}개는 건너뜁니다` : ""}. 등록을 누르면 서버에 올립니다.`,
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
      const result = await uploadAnswerPackage(detail.book.bookId, manifest, imageFiles, (done, total) => {
        setAnswerUpload((current) => ({ ...current, message: `이미지 올리는 중… ${done}/${total}`, progress: done }));
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
          ? `등록 완료 · 해설 ${result.solutionCount}개 · 답 ${result.answerCount}개 (서버 재조회 일치)${result.unmatched?.length ? ` · 건너뜀 ${result.unmatched.length}개` : ""}`
          : `등록 뒤 재조회한 해설 수가 다릅니다 (서버 ${solvedCount} / 패키지 ${result.solutionCount}).`
      });
    } catch (error) {
      setAnswerUpload((current) => ({ ...current, stage: "error", message: error.message || "정답·해설 패키지 등록에 실패했습니다." }));
    }
  }

  async function saveBookMeta(event) {
    event.preventDefault();
    if (!detail || !editForm) return;
    try {
      const book = await updateProblemBankBook(detail.book.bookId, editForm);
      // 저장 뒤 목록을 다시 읽어 화면 값이 서버 값과 같은지 본다.
      const list = await reloadBooks();
      const saved = list.find((entry) => entry.bookId === book.bookId);
      setDetail((current) => (current ? { ...current, book: { ...current.book, ...book } } : current));
      setEditMessage(saved && saved.title === editForm.title.trim() ? "저장했습니다 (서버 재조회 일치)." : "저장은 됐지만 재조회 값이 다릅니다. 새로고침해 확인해 주세요.");
    } catch (error) {
      setEditMessage(error.message || "교재 정보를 저장하지 못했습니다.");
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
  const solutionItems = (detail?.items ?? []).filter((item) => item.hasSolution).length;
  const answerItems = (detail?.items ?? []).filter((item) => item.regions.some((region) => region.kind === "answer")).length;
  const passageItems = (detail?.items ?? []).filter((item) => item.hasSubquestions).length;

  return (
    <section className="problemBankCenter">
      <PageHeader
        actions={<span className="countBadge">{books.length}권</span>}
        description="교재 PDF를 문항 단위 원천으로 등록합니다. 텍스트 PDF는 로컬 도구가 비전 AI 없이 문항을 자르고, 여기서 패키지를 올립니다."
        eyebrow="PROBLEM BANK"
        title="교재관리"
      />

      <div className="problemBankCenterLayout">
        <div className="panel problemBankImportPanel">
          <h2>패키지 등록</h2>
          <ol className="problemBankSteps">
            <li>PC에서 <code>node scripts/problem-bank/ingest-text-pdf.mjs --pdf "교재.pdf" --out 출력폴더 --title "교재명" --folder "중3 / RPM"</code> 실행</li>
            <li>정답·해설이 있으면 같은 폴더에 <code>node scripts/problem-bank/ingest-answers.mjs --solutions "정답과풀이.pdf" --out 출력폴더</code> 실행 (book-id 는 폴더의 manifest.json 에서 읽음)</li>
            <li>출력 폴더의 <code>qa/</code> 이미지로 경계를 확인 (<code>validation.json</code> 의 flagged 가 0인지)</li>
            <li>아래에서 출력 폴더를 통째로 선택 → 등록 (문항과 정답·해설이 한 번에 올라간다)</li>
          </ol>
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
          {upload.message ? (
            <p aria-live="polite" className={`problemBankUploadMessage stage-${upload.stage}`}>{upload.message}</p>
          ) : null}
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
              {editForm ? (
                <form className="problemBankEditForm" onSubmit={saveBookMeta}>
                  <label>제목<input value={editForm.title} onChange={(event) => setEditForm({ ...editForm, title: event.target.value })} /></label>
                  <label>폴더<input placeholder="예: 중3 / RPM" value={editForm.folderPath} onChange={(event) => setEditForm({ ...editForm, folderPath: event.target.value })} /></label>
                  <label>학년<input value={editForm.grade} onChange={(event) => setEditForm({ ...editForm, grade: event.target.value })} /></label>
                  <label>과목<input value={editForm.subject} onChange={(event) => setEditForm({ ...editForm, subject: event.target.value })} /></label>
                  <div className="problemBankEditActions">
                    <button className="primaryButton" type="submit">교재 정보 저장</button>
                    {deleteArmed ? (
                      <>
                        <span className="problemBankDeleteWarn">문항 {detail.items.length}개와 학생 기록·이미지가 모두 지워집니다. 되돌릴 수 없습니다.</span>
                        <button className="problemBankDangerButton" onClick={deleteBook} type="button">삭제 확정</button>
                        <button className="softButton" onClick={() => setDeleteArmed(false)} type="button">취소</button>
                      </>
                    ) : (
                      <button className="softButton" onClick={() => setDeleteArmed(true)} type="button">교재 삭제</button>
                    )}
                  </div>
                  {editMessage ? <p aria-live="polite" className="problemBankUploadMessage">{editMessage}</p> : null}
                </form>
              ) : null}
              <dl className="problemBankDetailMeta">
                <dt>원천</dt><dd>{detail.book.sourceFileName} · {detail.book.pageCount}쪽 · {detail.book.sourceKind} · {detail.book.ingestVersion}</dd>
                <dt>문항</dt><dd>{detail.items.length}개 · 공통 지시문 포함 {passageItems}개 · 경계 확인 필요 {flaggedItems.length}개</dd>
                <dt>정답·해설</dt><dd>해설 {solutionItems}개 · 빠른정답 {answerItems}개 {solutionItems === 0 ? "· 아직 없음 (오답지 인쇄에서 빠른정답·해설을 켤 수 없음)" : ""}</dd>
                <dt>다시 등록</dt><dd>같은 PDF 패키지를 다시 올리면 문항 이미지·경계만 새로 들어가고 학생 기록·정답·해설·여기서 고친 정보는 남습니다.</dd>
              </dl>
              <div className="problemBankAnswerImport">
                <h3>정답·해설 패키지 등록</h3>
                <p className="muted">
                  정답·해설만 따로 올릴 때 씁니다. PC에서 <code>node scripts/problem-bank/ingest-answers.mjs --book-id {detail.book.bookId} --solutions "정답과풀이.pdf" --out 출력폴더</code> 실행 뒤 그 폴더를 선택합니다.
                  문항 패키지 폴더에 같이 넣었다면 왼쪽 「패키지 등록」에서 한 번에 올라갑니다. 해설 PDF 는 교재와 같은 판이어야 합니다(번호와 답이 맞는지 <code>qa/</code> 로 확인).
                </p>
                <button className="softButton" onClick={() => answerFolderInputRef.current?.click()} type="button">정답·해설 폴더 선택</button>
                <input
                  aria-label="정답·해설 폴더 선택"
                  hidden
                  multiple
                  onChange={handleAnswerFolderPicked}
                  ref={answerFolderInputRef}
                  type="file"
                  webkitdirectory=""
                />
                {answerUpload.message ? (
                  <p aria-live="polite" className={`problemBankUploadMessage stage-${answerUpload.stage}`}>{answerUpload.message}</p>
                ) : null}
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
                  <h3>경계 확인 필요 ({flaggedItems.length})</h3>
                  <p className="muted">자동 검사에 걸린 문항입니다. 이미지를 보고 잘린 곳이 있으면 CLI 옵션을 조정해 다시 등록하세요.</p>
                  <ul>
                    {flaggedItems.slice(0, 30).map((item) => (
                      <li key={item.itemId}>
                        <strong>{item.numberLabel}번</strong> <small>{item.reviewNote} · {item.printedPage}쪽</small>
                        {flaggedImages.get(item.itemId) ? <img alt={`${item.numberLabel}번`} src={flaggedImages.get(item.itemId)} /> : null}
                      </li>
                    ))}
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
