import { useEffect, useRef } from "react";
import { Modal, ModalFooter } from "./Modal.jsx";
import "./ConfirmDialog.css";

// 파괴적·되돌리기 어려운 액션 앞에 두는 확인 대화상자(2026-09-19 U11).
// 공용 Modal + ModalFooter 위에 얇게 얹어 [취소][확정] 순서, 위험 톤(dangerSoftButton),
// 초기 포커스(취소 — 실수로 Enter 를 눌러도 실행되지 않게)를 한 곳에서 고정한다.
// window.confirm 을 신규로 쓰지 말고 이걸 쓴다(docs/ui-button-hierarchy.md 위험 액션 절).
// 자체 role="dialog" 를 두지 않는다 — 공용 Modal 이 dialog 역할·Esc·aria-busy 를 맡는다.
export function ConfirmDialog({
  busy = false,
  cancelLabel = "취소",
  className = "",
  confirmLabel = "확인",
  description,
  onCancel,
  onConfirm,
  open = false,
  title,
  tone = "default"
}) {
  const cancelButtonRef = useRef(null);
  const isDanger = tone === "danger";

  useEffect(() => {
    if (open) cancelButtonRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <Modal
      className={["confirmDialog", className].filter(Boolean).join(" ")}
      closeDisabled={busy}
      onClose={onCancel}
      title={title}
    >
      {description ? (
        <div className="confirmDialogDescription">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      ) : null}
      <ModalFooter className="confirmDialogFooter" tone={isDanger ? "danger" : "default"}>
        <button className="softButton" disabled={busy} onClick={onCancel} ref={cancelButtonRef} type="button">
          {cancelLabel}
        </button>
        <button
          className={isDanger ? "dangerSoftButton" : "primaryButton"}
          disabled={busy}
          onClick={onConfirm}
          type="button"
        >
          {busy ? "처리 중..." : confirmLabel}
        </button>
      </ModalFooter>
    </Modal>
  );
}
