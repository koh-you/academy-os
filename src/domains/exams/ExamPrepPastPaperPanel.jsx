export function ExamPrepPastPaperPanel({
  archiveUrl,
  frameKey,
  loadState,
  onFrameLoad,
  onReload
}) {
  return (
    <section className="pastPaperFramePanel">
      <div className="pastPaperToolbar">
        <div>
          <h2>기출문제 아카이브</h2>
          <p className="muted">외부 Google Apps Script 웹앱을 academy-os 안에서 엽니다.</p>
        </div>
        <div className="pastPaperActions">
          <button className="softButton" onClick={onReload} type="button">
            다시 불러오기
          </button>
          <a className="softButton" href={archiveUrl} rel="noreferrer" target="_blank">
            새 창에서 열기
          </a>
        </div>
      </div>
      <div className="pastPaperFrameWrap">
        {loadState === "loading" ? (
          <div className="pastPaperLoading">기출문제 아카이브를 불러오는 중입니다.</div>
        ) : null}
        <iframe
          className="pastPaperFrame"
          key={frameKey}
          onLoad={onFrameLoad}
          src={archiveUrl}
          title="으뜸수학 기출아카이브"
        />
      </div>
      <p className="pastPaperHelp">
        화면이 비어 있으면 Google Apps Script가 iframe 표시를 제한한 상태일 수 있습니다. 이 경우 새 창에서 열기를 사용하세요.
      </p>
    </section>
  );
}
