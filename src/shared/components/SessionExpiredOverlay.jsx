import "./SessionExpiredOverlay.css";

/**
 * 로그인 세션이 끊겼을 때 화면을 덮는 안내.
 *
 * 이게 없으면 만료가 "저장 실패"로만 보인다. 로그인 정보는 브라우저에 30일짜리로 남아
 * 있어서 새로고침해도 같은 만료 토큰을 다시 보내므로, 원장님이 원인을 모른 채 저장을
 * 반복하게 된다(2026-09-08 수업일지·출결 장애). 그래서 "다시 로그인"을 유일한 출구로 둔다.
 *
 * 저장하지 못한 입력은 아직 보관하지 못한다. 그래서 "닫기"가 필요하다 — 덮어놓고 로그아웃만
 * 시키면 작성 중이던 내용을 복사할 방법이 없다. 닫아도 저장은 여전히 안 되므로, 그때는
 * 사이드바 로그아웃으로 돌아오면 된다.
 */
export function SessionExpiredOverlay({ onDismiss, onRelogin }) {
  return (
    <div className="sessionExpiredOverlay" role="alertdialog" aria-modal="true" aria-labelledby="sessionExpiredTitle">
      <div className="sessionExpiredCard">
        <span className="sessionExpiredBadge">로그인 만료</span>
        <h2 id="sessionExpiredTitle">로그인이 풀렸습니다</h2>
        <p>
          로그인 후 시간이 지나 서버 연결이 끊겼습니다. 지금은 저장도 조회도 되지 않습니다.
        </p>
        <p className="sessionExpiredHint">
          새로고침으로는 풀리지 않습니다. 아래 버튼으로 다시 로그인해 주세요.
        </p>
        <p className="sessionExpiredPending">
          작성 중이던 내용은 다시 로그인하면 사라집니다. 남겨야 할 내용이 있으면
          <strong>닫기</strong>를 눌러 먼저 복사해 두세요.
        </p>
        <div className="sessionExpiredActions">
          <button className="softButton" onClick={onDismiss} type="button">
            닫기
          </button>
          <button className="primaryButton" onClick={onRelogin} type="button">
            다시 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
