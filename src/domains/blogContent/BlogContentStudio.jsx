import { getSessionBrandName } from "../../shared/utils/academyBrand.js";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { StudioWorkspace } from "../../shared/components/StudioWorkspace.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { StudioEditor } from "../../shared/components/StudioEditor.jsx";
import { StudioDialog } from "../../shared/components/StudioDialog.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import { Disclosure } from "../../shared/components/Disclosure.jsx";
import { useState } from "react";
import { CONTENT_TYPES, COPY_FIELDS, newBlogDraft, seedScore, buildChatPrompt, exportBlocker, parseChatResult, isNaverPostUrl, finalizeDraft, suggestHashtags } from "./blogHybridModel.js";
import { useBlogWorkspace } from "./useBlogWorkspace.js";
import "./blogContentStudio.css";

const states = { idle: "저장된 자료", dirty: "저장하지 않은 변경", saving: "저장 중…", verifying: "서버 재확인 중…", saved: "서버 저장 확인 완료", failed: "저장 실패 · 입력은 유지됩니다" };
const factFields = { school: "학교", region: "지역", grade: "학년", exam: "시험·수업명", subject: "과목", displayName: "익명 학생 표시명", achievement: "공개할 성과" };
function Field({ label, value, onChange, multiline = false, ...rest }) {
  const Tag = multiline ? "textarea" : "input";
  return <label className="blogField"><span>{label}</span><Tag aria-label={label} value={value} onChange={e => onChange(e.target.value)} {...rest} /></label>;
}
export function BlogContentStudio({ students = [], scoreRecords = [], postAppState }) {
  const store = useBlogWorkspace(postAppState);
  const [selected, setSelected] = useState("");
  const [step, setStep] = useState(0);
  const [libraryOpen, setLibraryOpen] = useState(true);
  const [tagsOpen, setTagsOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [raw, setRaw] = useState("");
  const [proposal, setProposal] = useState(null);
  const [message, setMessage] = useState("");
  // 2026-09-19 · U13: 가져오기 모달 안 오류(importMessage)와 확정·발행 저장 오류(stepMessage)는 페이지 상단 message 와 분리해
  // 각각 모달 안·해당 버튼 옆에 role="alert" 로 표시한다. 저장 함수·검증 순서·문구는 그대로다.
  const [importMessage, setImportMessage] = useState("");
  const [stepMessage, setStepMessage] = useState(null);
  const [search, setSearch] = useState("");
  const draft = store.items.find(item => item.id === selected) || store.items[0];
  const patch = fields => store.change(store.items.map(item => item.id === draft.id ? { ...item, ...fields } : item));
  const patchFacts = fields => patch({ ...fields, confirmed: false });
  const candidates = scoreRecords.filter(r => r.examType === "내신").map(record => ({ record, student: students.find(s => s.studentId === record.studentId) })).filter(c => c.student && `${c.student.name} ${c.student.schoolName}`.includes(search));
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); setMessage("복사했습니다. Chat에 붙여 넣어 주세요."); } catch { setMessage("복사 권한이 없습니다. 아래 텍스트를 선택해 직접 복사해 주세요."); }
  }
  const tags = draft ? suggestHashtags(draft) : null;
  const blocker = draft ? exportBlocker(draft) : "";
  const prompt = draft && !blocker ? buildChatPrompt(draft) : "";
  function goToStep(value) { setStep(value); setLibraryOpen(value === 0); setStepMessage(null); }
  function openImport() { setRaw(""); setProposal(null); setImportMessage(""); setImportOpen(true); }
  function closeImport() { setImportOpen(false); setImportMessage(""); }
  function previewImport() { try { setProposal(parseChatResult(raw)); setImportMessage(""); } catch (e) { setImportMessage(e.message); } }
  function applyImport() { patch({ copy: { ...draft.copy, ...proposal } }); closeImport(); setProposal(null); setRaw(""); setMessage("편집본에 반영했습니다. 이전 확정본은 유지됩니다."); }
  function select(id) { setSelected(id); setRaw(""); setProposal(null); setMessage(""); setStepMessage(null); setStep(0); }
  function create() { const item = newBlogDraft(); store.change([...store.items, item]); select(item.id); }
  async function finalize() {
    try { const final = finalizeDraft(draft); const next = store.items.map(item => item.id === draft.id ? final : item); store.change(next); await store.save(next); setStepMessage(null); } catch (e) { setStepMessage({ scope: "finalize", text: e.message, toPreparation: e.message === blocker }); }
  }
  async function savePublication() {
    if (!draft.versions.length) { setStepMessage({ scope: "publication", text: "완성본을 먼저 확정해 주세요." }); return; }
    if (!isNaverPostUrl(draft.publishedUrl) || !draft.publishedDate) { setStepMessage({ scope: "publication", text: "네이버 게시물의 https 주소와 발행일을 입력해 주세요." }); return; }
    setStepMessage(null);
    await store.save();
  }
  // 2026-09-19 · U13(buttons-08): 헤더 [+ 새 콘텐츠] 는 softButton — 편집 화면의 primary 는 하단 저장 바의 [편집 내용 저장] 1개다(첫 화면의 [첫 콘텐츠 만들기]는 저장 바가 없으므로 primary 유지).
  return <main className="blogStudio studioPage">
    {/* 2026-09-26 · 화면 맨 아래에 늘 떠 있던 저장 계약 한 줄(.blogStorageHint)을 제목 옆 물음표로 옮겼다. 저장 진행·완료는 .blogStatus 와 저장 바가 그대로 보여 준다. */}
    <PageHeader title="SNS 스튜디오" eyebrow={getSessionBrandName()} description="블로그·인스타그램 글과 카드 편집" titleAdornment={<HelpTip label="SNS 스튜디오" text="초안과 완성본은 저장 버튼을 누른 뒤 서버에서 다시 확인합니다." />} actions={<button className="softButton" disabled={!store.ready || store.busy} onClick={create} type="button">+ 새 콘텐츠</button>} />
    <div role="status" className="blogStatus">{store.ready ? states[store.status] : "서버 자료 확인 중…"}{store.dirty && " · 화면을 나가기 전에 저장해 주세요."}</div>
    {store.error && <div role="alert" className="blogNotice">{store.error}<p>다른 화면과 충돌했다면 편집 내용을 복사해 보관한 뒤 새로고침해서 최신 자료를 확인하세요.</p></div>}
    {message && <p role="status" className="blogNotice">{message}</p>}
    <StudioWorkspace title={draft ? `${draft.school || "학교 미입력"} · ${draft.exam || "시험·수업 미입력"}` : "새 콘텐츠를 만들어 주세요"}
      summary={draft ? `${draft.type} · ${draft.versions.length ? "확정본 있음" : "편집 중"} · 자료 준비 → Chat 작업 → 완성본` : "자료 준비 → Chat 작업 → 완성본"}
      label="SNS 작업 단계" steps={[{ id: 0, label: "자료 준비" }, { id: 1, label: "Chat 전달" }, { id: 2, label: "완성본" }]}
      activeStep={step} onStepChange={goToStep} libraryOpen={libraryOpen} onLibraryToggle={() => setLibraryOpen(value => !value)}
      library={<aside className="blogHistory" aria-label="콘텐츠 목록"><h2>내 콘텐츠 <small>{store.items.length}</small></h2>{!store.items.length && <p>새 콘텐츠를 만들어 첫 이야기를 준비하세요.</p>}{store.items.map(item => <button key={item.id} aria-pressed={item.id === draft?.id} disabled={store.busy} onClick={() => select(item.id)}><strong>{item.copy.title || item.exam || "새 콘텐츠"}</strong><span>{item.school || "학교 미입력"} · {item.type}</span><small>{item.publishedUrl && isNaverPostUrl(item.publishedUrl) ? "발행 정보 입력됨" : item.versions.length ? "확정본 있음" : "준비 중"}</small></button>)}</aside>}>
    {!draft && <section className="studioWelcome" aria-label="SNS 작업 시작"><h2>첫 콘텐츠를 준비해 보세요</h2><div className="studioWelcomeSteps"><article><h3>1. 자료 준비</h3><p>시험·성과와 선생님 메모를 모으고 공개할 내용을 확인합니다.</p></article><article><h3>2. Chat 작업</h3><p>준비한 자료를 Chat에 전달해 글과 카드 문구를 다듬습니다.</p></article><article><h3>3. 완성본 편집</h3><p>결과를 가져와 블로그·인스타그램·카드별로 확인하고 저장합니다.</p></article></div><button className="primaryButton" onClick={create} disabled={!store.ready || store.busy}>첫 콘텐츠 만들기</button></section>}
    {draft && <section className="blogEditor" aria-label="콘텐츠 편집">
      <fieldset disabled={store.busy || !store.ready}>
      {step === 0 && <><div className="helpTipTitleRow"><h2>게시할 자료 준비</h2><HelpTip label="게시할 자료 준비" text="성적 원천은 참고 자료입니다. 시험명과 공개할 사실을 직접 확인해 주세요." /></div>
        <div className="studioPreparation"><section aria-label="콘텐츠 기본자료" className="studioPreparationFacts"><h3>기본자료</h3><Disclosure trigger="기존 내신 성적에서 가져오기"><Field label="학생·학교 검색" value={search} onChange={setSearch} /><div className="blogCandidates">{candidates.slice(0, 40).map(({ record, student }) => <button key={record.scoreRecordId} onClick={() => { if (window.confirm("학교·학생·성과 입력을 선택한 기록으로 바꿀까요? 선생님 메모와 완성본은 유지됩니다.")) patchFacts(seedScore(record, student)); }}>{student.name} · {student.schoolName} · {record.examDate} · {record.subject} · {record.score ?? "점수 없음"}</button>)}{!candidates.length && <p>해당 내신 기록이 없습니다. 아래에 직접 입력할 수 있습니다.</p>}</div></Disclosure>
        {draft.source && <p className="blogNotice">가져온 원천: {draft.source.examDate} · {draft.source.subject} · {draft.source.score}점 · {draft.source.grade}등급 (가져온 시점의 기록)</p>}
        <label className="blogField"><span>콘텐츠 유형</span><select aria-label="콘텐츠 유형" value={draft.type} onChange={e => patchFacts({ type: e.target.value })}>{CONTENT_TYPES.map(t => <option key={t}>{t}</option>)}</select></label>
        <div className="blogFields">{Object.entries(factFields).map(([key, label]) => <Field key={key} label={label} value={draft[key] ?? (key === "region" ? "창동" : "")} onChange={value => patchFacts({ [key]: value })} maxLength={500} />)}</div>
        </section><section aria-label="글의 방향과 공개 확인" className="studioPreparationNotes"><h3>글의 방향과 공개 확인</h3><Field label="선생님 메모 · 준비 과정과 학생의 변화" value={draft.notes} onChange={notes => patchFacts({ notes })} multiline rows={5} maxLength={12000} placeholder="실제로 관찰한 준비 과정, 오답을 해결한 방법, 달라진 학습 태도를 적어 주세요." />
        <Field label="강조할 내용과 글의 분위기" value={draft.direction} onChange={direction => patchFacts({ direction })} multiline rows={2} maxLength={2000} />
        <Field label="참고 이미지·자료 링크와 설명" value={draft.assets} onChange={assets => patchFacts({ assets })} multiline rows={3} maxLength={6000} placeholder="Drive 또는 이미지 링크와 설명. 로컬 파일은 Chat에 별도로 첨부하세요." />
        <div className="blogFields"><label className="blogField"><span>학생 자료 공개 동의</span><select aria-label="학생 자료 공개 동의" value={draft.consent} onChange={e => patchFacts({ consent: e.target.value })}><option value="unknown">미확인</option><option value="agreed">사용할 학생 자료 모두 동의 확인</option><option value="declined">비동의</option><option value="none">학생 자료 없음</option></select></label>
        <label className="blogField"><span>사진 공개 동의</span><select aria-label="사진 공개 동의" value={draft.photoConsent} onChange={e => patchFacts({ photoConsent: e.target.value })}><option value="unknown">미확인</option><option value="agreed">사용할 사진 모두 동의 확인</option><option value="declined">비동의</option><option value="none">학생 사진 없음</option></select></label></div>
        <label className="blogCheck"><input type="checkbox" checked={draft.confirmed} onChange={e => patch({ confirmed: e.target.checked })} />공개할 사실·수치를 확인했고, 메모와 자료에도 학생 실명·연락처가 남아 있지 않습니다.</label></section></div>
      </>}
      {step === 1 && <div className="studioChatHandoff"><section className="studioTaskGuide"><div className="helpTipTitleRow"><h2>Chat으로 작업 이어가기</h2><HelpTip label="Chat으로 작업 이어가기" text="자료를 복사해서 원하는 Chat에 붙여 넣으세요. 사진 파일은 Chat에 따로 첨부하고, 글과 디자인을 대화로 완성하세요. Chat에서 최종 JSON을 요청하면 완성본 탭에서 한 번에 가져올 수 있습니다." /></div>{blocker && <p className="blogNotice">{blocker}</p>}<button className="ghostButton" disabled={Boolean(blocker)} onClick={() => copy(prompt)} type="button">Chat 작업용 복사</button></section><Field label="Chat 전달 자료 미리보기" value={prompt} onChange={() => {}} readOnly multiline rows={20} /></div>}
      {step === 2 && <><div className="helpTipTitleRow"><h2>Chat에서 다듬은 완성본</h2><HelpTip label="Chat에서 다듬은 완성본" text="각 항목에 직접 붙여 넣거나, Chat의 최종 JSON을 미리보기 후 반영하세요." /></div>
        {/* 2026-09-19 · U13(buttons-08): 열기류는 ghostButton. 저장 성격 버튼은 하단 저장 바로 모아 화면 primary 를 1개로 둔다. */}
        <div className="blogStepActions"><button className="ghostButton" onClick={openImport} type="button">Chat 결과 한 번에 가져오기</button><button className="ghostButton" onClick={() => setTagsOpen(true)} type="button">해시태그 추천 열기</button></div>
        <StudioEditor channels={[{ id: "blog", label: "블로그" }, { id: "instagram", label: "인스타그램" }, { id: "card", label: "카드" }]} preview={channel => (channel === "blog" ? [draft.copy.title, draft.copy.body, draft.copy.hashtags] : channel === "instagram" ? [draft.copy.social, draft.copy.instagramHashtags] : [draft.copy.card, draft.copy.imageLinks]).filter(Boolean).join("\n\n")}>
          {channel => Object.entries(COPY_FIELDS).filter(([key]) => (channel === "blog" ? ["title", "body", "hashtags"] : channel === "instagram" ? ["social", "instagramHashtags"] : ["card", "imageLinks"]).includes(key)).map(([key, label]) => <div className="blogChannelField" key={key}><Field label={`최종 ${label}`} value={draft.copy[key] ?? ""} onChange={value => patch({ copy: { ...draft.copy, [key]: value } })} multiline={key !== "title"} rows={key === "body" ? 12 : 3} maxLength={40000} /><button className="ghostButton compact" onClick={() => copy(draft.copy[key] ?? "")} type="button">{label} 복사</button></div>)}
        </StudioEditor>
        <Disclosure trigger={`이전 확정본 (${draft.versions.length})`}>{draft.versions.map((v, i) => <article key={`${v.at}-${i}`}><h3>{i + 1}차 · {v.at.slice(0, 16).replace("T", " ")} UTC</h3><pre>{JSON.stringify(v.copy, null, 2)}</pre></article>)}</Disclosure>
        <h2>발행 기록</h2><a href="https://blog.naver.com/koh_you_math/postwrite" target="_blank" rel="noreferrer">네이버 블로그 글쓰기 열기 ↗</a><Field label="발행 URL" value={draft.publishedUrl} onChange={publishedUrl => patch({ publishedUrl })} type="url" maxLength={2000} /><Field label="발행일" value={draft.publishedDate} onChange={publishedDate => patch({ publishedDate })} type="date" />
        {/* 2026-09-19 · U13(research-11/16): savePublication 은 편집 중인 전체 자료를 저장하므로 캡션으로 범위를 밝히고, 검증 오류는 버튼 바로 아래 role="alert" 로 보인다. */}
        <div className="blogPublishActions"><button className="softButton" onClick={savePublication} type="button">발행 기록 저장</button><small>저장 시 편집 중인 내용도 함께 저장됩니다</small></div>
        {stepMessage?.scope === "publication" && <p className="blogStepAlert" role="alert"><span>{stepMessage.text}</span></p>}
      </>}
      {/* 2026-09-19 · U13(research-11/16): 확정(softButton)·편집 저장(primary 1개)을 하단 저장 바로 통합. finalize 오류는 바 바로 위 role="alert" 로 보이고, 자료 준비 항목이 원인이면 그 단계로 이동하는 액션을 붙인다. */}
      <div className="blogSaveDock">
        {stepMessage?.scope === "finalize" && <p className="blogStepAlert" role="alert"><span>{stepMessage.text}</span>{stepMessage.toPreparation && <button className="ghostButton compact" onClick={() => goToStep(0)} type="button">자료 준비로 이동</button>}</p>}
        <StickySaveBar label="SNS 편집본" message={states[store.status]} saveState={store.status}>
          {step === 2 && <button className="softButton" onClick={finalize} type="button">완성본 확정 및 저장</button>}
          <button className="primaryButton" onClick={() => store.save()} type="button">편집 내용 저장</button>
        </StickySaveBar>
      </div>
      </fieldset>
    </section>}</StudioWorkspace>
    {tagsOpen && draft && <StudioDialog title="해시태그 추천" className="studioSidePanel" onClose={() => setTagsOpen(false)} subtitle="반영 버튼은 편집본에 적용합니다. 서버 보관은 편집 내용 저장을 눌러주세요.">
        <section aria-label="자동 해시태그 추천" className="blogNotice"><h3>자동 해시태그 추천</h3><p>학교·지역·콘텐츠 유형을 바꾸면 추천도 갱신됩니다. 반영 버튼은 해당 해시태그 편집칸을 바꿉니다. 직접 수정한 글은 자동으로 덮어쓰지 않습니다.</p><p aria-label="블로그 추천 태그">{tags.blog}</p><button className="softButton compact" onClick={() => patch({ copy: { ...draft.copy, hashtags: tags.blog } })} type="button">블로그 추천 태그 반영</button><p aria-label="인스타그램 추천 태그">{tags.instagram}</p><div className="helpTipTitleRow"><button className="softButton compact" onClick={() => patch({ copy: { ...draft.copy, instagramHashtags: tags.instagram } })} type="button">인스타그램 추천 태그 반영</button><HelpTip label="인스타그램 추천 태그" text="인스타그램은 관련 태그를 최대 5개 추천합니다. 유료 AI 호출 없이 생성하며 자유롭게 편집할 수 있습니다." /></div></section>
      <button className="ghostButton" onClick={() => setTagsOpen(false)} type="button">추천 패널 닫기</button>
    </StudioDialog>}
    {/* 2026-09-19 · U13(research-13): 미리보기는 COPY_FIELDS 라벨 + pre-wrap 문단, 오류는 모달 안 importMessage, 푸터는 [취소 ghost][미리보기 soft][반영 primary]. parseChatResult → proposal → patch({copy}) 순서는 그대로. */}
    {importOpen && draft && <StudioDialog title="Chat 결과 가져오기" subtitle="미리보기 후 반영합니다. 취소하면 붙여넣은 내용만 버리고 기존 편집본은 유지합니다." onClose={closeImport}>
      <Field label="Chat 결과 JSON" value={raw} onChange={value => { setRaw(value); setProposal(null); }} multiline rows={8} />
      {importMessage && <p className="blogNotice" role="alert">{importMessage}</p>}
      {proposal && <section aria-label="반영할 내용" className="blogImportPreview"><h3>반영할 내용</h3>{Object.entries(COPY_FIELDS).filter(([key]) => key in proposal).map(([key, label]) => <div key={key}><h4>{label}</h4><p>{proposal[key]}</p></div>)}</section>}
      <ModalFooter>
        <button className="ghostButton" onClick={closeImport} type="button">가져오기 취소</button>
        <button className="softButton" onClick={previewImport} type="button">가져오기 미리보기</button>
        <button className="primaryButton" disabled={!proposal} onClick={applyImport} type="button">미리본 결과를 편집본에 반영</button>
      </ModalFooter>
    </StudioDialog>}
  </main>;
}
