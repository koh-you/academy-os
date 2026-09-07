import { WorkspaceTabs } from "./WorkspaceTabs.jsx";
import "./StudioWorkspace.css";

/** Shared presentation only; drafts and persistence stay with each domain. */
export function StudioWorkspace({ title, summary, steps, activeStep, onStepChange, label, library, libraryOpen, onLibraryToggle, children }) {
  return <div className="studioWorkspace">
    <div className="studioWorkspaceSummary"><div><strong>{title}</strong><p>{summary}</p></div><button className="ghostButton" type="button" aria-expanded={libraryOpen} onClick={onLibraryToggle}>{libraryOpen ? "자료 목록 접기" : "자료 목록 열기"}</button></div>
    <div className="studioWorkspaceGrid" data-library-open={libraryOpen}>
      <aside className="studioWorkspaceLibrary" hidden={!libraryOpen} aria-label="작업 자료 목록">{library}</aside>
      <div className="studioWorkspaceMain">
        <WorkspaceTabs className="studioWorkspaceSteps" label={label}>{steps.map((step, index) => <button key={step.id} type="button" title={step.meta} role="tab" aria-selected={activeStep === step.id} onClick={() => onStepChange(step.id)}><span>{index + 1}</span>{step.label}</button>)}</WorkspaceTabs>
        <label className="studioWorkspaceMobileStep">작업 단계<select aria-label="작업 단계" value={activeStep} onChange={event => onStepChange(steps.find(step => String(step.id) === event.target.value).id)}>{steps.map((step, index) => <option key={step.id} value={step.id}>{index + 1} {step.label}</option>)}</select></label>
        <div className="studioWorkspaceBody">{children}</div>
      </div>
    </div>
  </div>;
}
