import "./KakaoAlimtalkPreview.css";

export function KakaoAlimtalkPreview({ className = "", text = "" }) {
  return (
    <div className={["kakaoAlimtalkPreview", className].filter(Boolean).join(" ")}>
      <div className="kakaoAlimtalkPreviewHeader">
        <span className="kakaoAlimtalkPreviewHeaderLabel">알림톡 도착</span>
        <span aria-hidden="true" className="kakaoAlimtalkPreviewBadge">kakao</span>
      </div>
      <pre className="kakaoAlimtalkPreviewBubble">{text}</pre>
    </div>
  );
}
