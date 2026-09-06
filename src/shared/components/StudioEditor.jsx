import { useState } from "react";
import { WorkspaceTabs } from "./WorkspaceTabs.jsx";
import "./StudioEditor.css";

export function StudioEditor({ channels, children, preview }) {
  const [channel, setChannel] = useState(channels[0].id);
  const [mode, setMode] = useState("edit");
  return <section className="studioEditor" aria-label="채널별 편집">
    <WorkspaceTabs label="콘텐츠 채널">{channels.map(item => <button key={item.id} type="button" role="tab" aria-selected={channel === item.id} onClick={() => setChannel(item.id)}>{item.label}</button>)}</WorkspaceTabs>
    <div className="studioViewSwitch" aria-label="작업 보기"><button type="button" aria-pressed={mode === "edit"} onClick={() => setMode("edit")}>편집</button><button type="button" aria-pressed={mode === "preview"} onClick={() => setMode("preview")}>미리보기</button></div>
    <div className="studioColumns" data-mode={mode}><div className="studioInput">{children(channel)}</div><section className="studioPreview" aria-label="콘텐츠 미리보기"><h3>미리보기</h3><p>문구와 줄바꿈 확인용입니다. 실제 게시 화면과 다를 수 있습니다.</p><div className="studioPreviewText">{preview(channel) || "내용을 입력하면 여기에 표시됩니다."}</div></section></div>
  </section>;
}
