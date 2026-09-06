import { useEffect, useRef } from "react";
import { Modal } from "./Modal.jsx";

export function StudioDialog({ children, ...props }) {
  const content = useRef(null);
  useEffect(() => {
    const opener = document.activeElement;
    const dialog = content.current.closest('[role="dialog"]');
    const controls = () => [...dialog.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),a[href]')].filter(el => el.getClientRects().length);
    controls()[0]?.focus();
    const trap = event => {
      if (event.key !== "Tab") return;
      const elements = controls();
      const first = elements[0], last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    dialog.addEventListener("keydown", trap);
    return () => { dialog.removeEventListener("keydown", trap); if (opener?.isConnected) opener.focus(); };
  }, []);
  return <Modal {...props} scrollable><div className="studioModalContent" ref={content}>{children}</div></Modal>;
}
