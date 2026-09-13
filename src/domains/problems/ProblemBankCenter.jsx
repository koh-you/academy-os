import { useEffect, useRef, useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import {
  fetchProblemBankBook,
  fetchProblemBankBooks,
  fetchProblemBankItemImages,
  importProblemBankManifest,
  readFileAsDataUrl,
  uploadProblemBankImages
} from "./problemBankApi.js";
import "./problemBank.css";

const imageBatchSize = 20;

/**
 * 교재관리. CLI(scripts/problem-bank/ingest-text-pdf.mjs)가 만든 패키지 폴더를 올려 교재를 등록하고,
 * 등록된 교재의 단원·문항 수·경계 확인 필요 문항을 본다.
 *
 * 패키지 폴더 = manifest.json + validation.json + items/*.jpg (+ pages/, qa/ 는 올리지 않는다).
 */
export function ProblemBankCenter() {
  const [books, setBooks] = useState([]);
  const [listError, setListError] = useState("");
  const [selectedBookId, setSelectedBookId] = useState("");
  const [detail, setDetail] = useState(null);
  const [detailError, setDetailError] = useState("");
  const [flaggedImages, setFlaggedImages] = useState(new Map());
  const [upload, setUpload] = useState({ stage: "idle", message: "", progress: 0, total: 0, manifest: null, imageFiles: [] });
  const folderInputRef = useRef(null);

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
      setUpload({ stage: "error", message: "폴더 안에 manifest.json 이 없습니다. CLI 출력 폴더를 그대로 선택해 주세요.", progress: 0, total: 0, manifest: null, imageFiles: [] });
      return;
    }
    let manifest;
    try {
      manifest = JSON.parse(await manifestFile.text());
    } catch {
      setUpload({ stage: "error", message: "manifest.json 을 읽지 못했습니다.", progress: 0, total: 0, manifest: null, imageFiles: [] });
      return;
    }
    const imageFiles = files.filter((file) => /(^|[\\/])items[\\/][^\\/]+\.(jpe?g|png|webp)$/i.test(file.webkitRelativePath || file.name));
    const expected = new Set((manifest.items ?? []).flatMap((item) => (item.regions ?? []).map((region) => region.file)));
    const matched = imageFiles.filter((file) => expected.has(`items/${file.name}`));
    if (matched.length !== expected.size) {
      setUpload({
        stage: "error",
        message: `이미지 개수가 맞지 않습니다. manifest ${expected.size}개 · 폴더 ${matched.length}개. 폴더가 온전한지 확인해 주세요.`,
        progress: 0,
        total: 0,
        manifest: null,
        imageFiles: []
      });
      return;
    }
    setUpload({
      stage: "ready",
      message: `${manifest.book?.title ?? "교재"} · 문항 ${manifest.items?.length ?? 0}개 · 이미지 ${matched.length}개. 등록을 누르면 서버에 올립니다.`,
      progress: 0,
      total: matched.length,
      manifest,
      imageFiles: matched
    });
  }

  async function runImport() {
    const { manifest, imageFiles } = upload;
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
      // 저장 뒤 서버를 다시 읽어 문항 수가 맞는지 확인한다.
      const list = await reloadBooks();
      const saved = list.find((book) => book.bookId === result.bookId);
      const countMatches = saved && saved.itemCount === (manifest.items?.length ?? 0);
      setUpload({
        stage: countMatches ? "done" : "error",
        message: countMatches
          ? `등록 완료 · ${saved.title} · 문항 ${saved.itemCount}개 · 이미지 ${imageFiles.length}개 (서버 재조회 일치)`
          : `등록 뒤 재조회한 문항 수가 다릅니다 (서버 ${saved?.itemCount ?? "없음"} / 패키지 ${manifest.items?.length ?? 0}).`,
        progress: imageFiles.length,
        total: imageFiles.length,
        manifest: null,
        imageFiles: []
      });
      setSelectedBookId(result.bookId);
    } catch (error) {
      setUpload((current) => ({ ...current, stage: "error", message: error.message || "패키지 등록에 실패했습니다." }));
    }
  }

  const flaggedItems = (detail?.items ?? []).filter((item) => item.reviewStatus === "flagged");
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
            <li>출력 폴더의 <code>qa/</code> 이미지로 경계를 확인 (<code>validation.json</code> 의 flagged 가 0인지)</li>
            <li>아래에서 출력 폴더를 통째로 선택 → 등록</li>
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
              <dl className="problemBankDetailMeta">
                <dt>제목</dt><dd>{detail.book.title}</dd>
                <dt>폴더</dt><dd>{detail.book.folderPath || "-"}</dd>
                <dt>원천</dt><dd>{detail.book.sourceFileName} · {detail.book.pageCount}쪽 · {detail.book.sourceKind} · {detail.book.ingestVersion}</dd>
                <dt>문항</dt><dd>{detail.items.length}개 · 공통 지시문 포함 {passageItems}개 · 경계 확인 필요 {flaggedItems.length}개</dd>
              </dl>
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
