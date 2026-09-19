import { useEffect, useRef, useState } from "react";
import { createAppStatePersistenceController } from "../appState/appStatePersistenceController.js";
import { getJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { useUnsavedChangesGuard } from "../../shared/runtime/useUnsavedChangesGuard.js";
import { BLOG_KEY } from "./blogHybridModel.js";

export function useBlogWorkspace(postAppState) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const controller = useRef(null);
  const busy = status === "saving" || status === "verifying";
  useEffect(() => {
    let active = true;
    // 이 화면이 읽고 대조하는 키는 BLOG_KEY 하나다 — 처음 읽을 때도, 저장 뒤 재조회도 그 키만 받는다.
    const read = ({ key = BLOG_KEY } = {}) => getJsonWithTimeout(`/api/app-state?includeRows=true&verify=blog-${Date.now()}&keys=${encodeURIComponent(key)}`, 15000);
    const instance = createAppStatePersistenceController({ read, write: ({ states, expectedUpdatedAt }) => postAppState(states, { expectedUpdatedAt }), onState: s => { if (active) setStatus(s); }, onError: e => { if (active) setError(e.message); } });
    controller.current = instance;
    read().then(snapshot => {
      if (!active) return;
      if (snapshot.source !== "supabase") throw new Error("서버 자료를 확인하지 못했습니다. 잠시 뒤 다시 열어 주세요.");
      const saved = snapshot.states?.[BLOG_KEY] ?? [];
      if (!Array.isArray(saved) || saved.some(item => !item?.id || !item.copy || !Array.isArray(item.versions))) throw new Error("저장 자료의 형식을 확인해 주세요. 원본은 변경하지 않았습니다.");
      instance.setSnapshot({ ...snapshot, keys: [BLOG_KEY] });
      setItems(saved); setReady(true);
    }).catch(e => { if (active) setError(e.message); });
    return () => { active = false; instance.dispose(); };
  }, [postAppState]);
  // 2026-09-19 · U11: beforeunload + 사이드바 클릭 confirm 가드를 공용 훅으로 옮겼다(동작·문구 동일).
  useUnsavedChangesGuard(dirty, "저장하지 않은 SNS 콘텐츠 편집 내용이 있습니다. 이 화면을 나갈까요?", { busy });
  function change(next) { setItems(next); setDirty(true); setStatus("dirty"); }
  async function save(next = items) {
    if (!ready || busy) return false;
    setError("");
    const result = await controller.current.save({ [BLOG_KEY]: next });
    if (result.ok) { setItems(next); setDirty(false); }
    return result.ok;
  }
  return { items, ready, dirty, status, error, busy, change, save, setError };
}
