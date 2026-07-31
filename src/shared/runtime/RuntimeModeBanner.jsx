export function RuntimeModeBanner() {
  if (import.meta.env.VITE_ACADEMY_RUNTIME_MODE !== "safe-fixture") return null;

  return (
    <div
      data-testid="safe-runtime-banner"
      role="status"
      style={{
        background: "#7c2d12",
        color: "#fff7ed",
        fontSize: "14px",
        fontWeight: 700,
        left: 0,
        padding: "8px 16px",
        position: "relative",
        right: 0,
        textAlign: "center",
        zIndex: 10000
      }}
    >
      안전한 로컬 미리보기 · 가상 데이터만 사용 · 운영 저장·알림톡 발송 없음 · 로그인은 아무 테스트 값이나 입력
    </div>
  );
}
