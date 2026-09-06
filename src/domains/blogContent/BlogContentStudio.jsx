import { Disclosure } from "../../shared/components/Disclosure.jsx";
import { useState } from "react";
import { BLOG_KEY, CONTENT_TYPES, COPY_FIELDS, newBlogDraft, seedScore, buildChatPrompt, exportBlocker, parseChatResult, isNaverPostUrl, finalizeDraft } from "./blogHybridModel.js";
import { useBlogWorkspace } from "./useBlogWorkspace.js";
import "./blogContentStudio.css";

const states = { idle: "저장된 자료", dirty: "저장하지 않은 변경", saving: "저장 중…", verifying: "서버 재확인 중…", saved: "서버 저장 확인 완료", failed: "저장 실패 · 입력은 유지됩니다" };
const factFields = { school: "학교", grade: "학년", exam: "시험·수업명", subject: "과목", displayName: "익명 학생 표시명", achievement: "공개할 성과" };
function Field({ label, value, onChange, multiline = false, ...rest }) {
  const Tag = multiline ? "textarea" : "input";
  return <label className="blogField"><span>{label}</span><Tag aria-label={label} value={value} onChange={e => onChange(e.target.value)} {...rest} /></label>;
}
export function BlogContentStudio({ students = [], scoreRecords = [], postAppState }) {
  const store = useBlogWorkspace(postAppState);
  const [selected, setSelected] = useState("");
  const [step, setStep] = useState(0);
  const [raw, setRaw] = useState("");
  const [proposal, setProposal] = useState(null);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const draft = store.items.find(item => item.id === selected) || store.items[0];
  const patch = fields => store.change(store.items.map(item => item.id === draft.id ? { ...item, ...fields } : item));
  const patchFacts = fields => patch({ ...fields, confirmed: false });
  const candidates = scoreRecords.filter(r => r.examType === "내신").map(record => ({ record, student: students.find(s => s.studentId === record.studentId) })).filter(c => c.student && `${c.student.name} ${c.student.schoolName}`.includes(search));
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); setMessage("복사했습니다. Chat에 붙여 넣어 주세요."); } catch { setMessage("복사 권한이 없습니다. 아래 텍스트를 선택해 직접 복사해 주세요."); }
  }
  function attempt(action) { try { action(); } catch (e) { setMessage(e.message); } }
  function select(id) { setSelected(id); setRaw(""); setProposal(null); setMessage(""); setStep(0); }
  function create() { const item = newBlogDraft(); store.change([...store.items, item]); select(item.id); }
  async function finalize() {
    try { const final = finalizeDraft(draft); const next = store.items.map(item => item.id === draft.id ? final : item); store.change(next); await store.save(next); } catch (e) { setMessage(e.message); }
  }
  async function savePublication() {
    if (!draft.versions.length) { setMessage("완성본을 먼저 확정해 주세요."); return; }
    if (!isNaverPostUrl(draft.publishedUrl) || !draft.publishedDate) { setMessage("네이버 게시물의 https 주소와 발행일을 입력해 주세요."); return; }
    await store.save();
  }
  const blocker = draft ? exportBlocker(draft) : "";
  const prompt = draft && !blocker ? buildChatPrompt(draft) : "";
  return <main className="blogStudio">
    <header className="blogHero"><div><span className="blogEyebrow">으뜸수학 고태영T · CONTENT STUDIO</span><h1>블로그 콘텐츠 스튜디오</h1><p>수업의 기록을 이야기로. OS에서 준비하고, Chat에서 다듬고, 완성본을 보관하세요.</p></div><button onClick={create} disabled={!store.ready || store.busy}>+ 새 콘텐츠</button></header>
    <div role="status" className="blogStatus">{store.ready ? states[store.status] : "서버 자료 확인 중…"}{store.dirty && " · 화면을 나가기 전에 저장해 주세요."}</div>
    {store.error && <div role="alert" className="blogNotice">{store.error}<p>다른 화면과 충돌했다면 편집 내용을 복사해 보관한 뒤 새로고침해서 최신 자료를 확인하세요.</p></div>}
    {message && <p role="status" className="blogNotice">{message}</p>}
    <div className="blogLayout"><aside className="blogHistory" aria-label="콘텐츠 목록"><h2>내 콘텐츠 <small>{store.items.length}</small></h2>{!store.items.length && <p>새 콘텐츠를 만들어 첫 이야기를 준비하세요.</p>}{store.items.map(item => <button key={item.id} aria-pressed={item.id === draft?.id} disabled={store.busy} onClick={() => select(item.id)}><strong>{item.copy.title || item.exam || "새 콘텐츠"}</strong><span>{item.school || "학교 미입력"} · {item.type}</span><small>{item.publishedUrl && isNaverPostUrl(item.publishedUrl) ? "발행 정보 입력됨" : item.versions.length ? "확정본 있음" : "준비 중"}</small></button>)}</aside>
    {draft && <section className="blogEditor" aria-label="콘텐츠 편집"><div className="blogSteps">{["1 자료 준비", "2 Chat 전달", "3 완성본"].map((name, index) => <button key={name} aria-pressed={step === index} onClick={() => setStep(index)}>{name}</button>)}</div>
      <fieldset disabled={store.busy || !store.ready}>
      {step === 0 && <><h2>게시할 자료 준비</h2><p>성적 원천은 참고 자료입니다. 시험명과 공개할 사실을 직접 확인해 주세요.</p>
        <Disclosure trigger="기존 내신 성적에서 가져오기"><Field label="학생·학교 검색" value={search} onChange={setSearch} /><div className="blogCandidates">{candidates.slice(0, 40).map(({ record, student }) => <button key={record.scoreRecordId} onClick={() => { if (window.confirm("학교·학생·성과 입력을 선택한 기록으로 바꿀까요? 선생님 메모와 완성본은 유지됩니다.")) patchFacts(seedScore(record, student)); }}>{student.name} · {student.schoolName} · {record.examDate} · {record.subject} · {record.score ?? "점수 없음"}</button>)}{!candidates.length && <p>해당 내신 기록이 없습니다. 아래에 직접 입력할 수 있습니다.</p>}</div></Disclosure>
        {draft.source && <p className="blogNotice">가져온 원천: {draft.source.examDate} · {draft.source.subject} · {draft.source.score}점 · {draft.source.grade}등급 (가져온 시점의 기록)</p>}
        <label className="blogField"><span>콘텐츠 유형</span><select aria-label="콘텐츠 유형" value={draft.type} onChange={e => patchFacts({ type: e.target.value })}>{CONTENT_TYPES.map(t => <option key={t}>{t}</option>)}</select></label>
        <div className="blogFields">{Object.entries(factFields).map(([key, label]) => <Field key={key} label={label} value={draft[key]} onChange={value => patchFacts({ [key]: value })} maxLength={500} />)}</div>
        <Field label="선생님 메모 · 준비 과정과 학생의 변화" value={draft.notes} onChange={notes => patchFacts({ notes })} multiline rows={5} maxLength={12000} placeholder="실제로 관찰한 준비 과정, 오답을 해결한 방법, 달라진 학습 태도를 적어 주세요." />
        <Field label="강조할 내용과 글의 분위기" value={draft.direction} onChange={direction => patchFacts({ direction })} multiline rows={2} maxLength={2000} />
        <Field label="참고 이미지·자료 링크와 설명" value={draft.assets} onChange={assets => patchFacts({ assets })} multiline rows={3} maxLength={6000} placeholder="Drive 또는 이미지 링크와 설명. 로컬 파일은 Chat에 별도로 첨부하세요." />
        <div className="blogFields"><label className="blogField"><span>학생 자료 공개 동의</span><select aria-label="학생 자료 공개 동의" value={draft.consent} onChange={e => patchFacts({ consent: e.target.value })}><option value="unknown">미확인</option><option value="agreed">사용할 학생 자료 모두 동의 확인</option><option value="declined">비동의</option><option value="none">학생 자료 없음</option></select></label>
        <label className="blogField"><span>사진 공개 동의</span><select aria-label="사진 공개 동의" value={draft.photoConsent} onChange={e => patchFacts({ photoConsent: e.target.value })}><option value="unknown">미확인</option><option value="agreed">사용할 사진 모두 동의 확인</option><option value="declined">비동의</option><option value="none">학생 사진 없음</option></select></label></div>
        <label className="blogCheck"><input type="checkbox" checked={draft.confirmed} onChange={e => patch({ confirmed: e.target.checked })} />공개할 사실·수치를 확인했고, 메모와 자료에도 학생 실명·연락처가 남아 있지 않습니다.</label>
      </>}
      {step === 1 && <><h2>Chat으로 작업 이어가기</h2><p>자료를 복사해서 원하는 Chat에 붙여 넣으세요. 사진 파일은 Chat에 따로 첨부하고, 글과 디자인을 대화로 완성하세요.</p>{blocker && <p className="blogNotice">{blocker}</p>}<button disabled={Boolean(blocker)} onClick={() => copy(prompt)}>Chat 작업용 복사</button><Field label="Chat 전달 자료 미리보기" value={prompt} onChange={() => {}} readOnly multiline rows={20} /><p>Chat에서 최종 JSON을 요청하면 완성본 탭에서 한 번에 가져올 수 있습니다.</p></>}
      {step === 2 && <><h2>Chat에서 다듬은 완성본</h2><p>각 항목에 직접 붙여 넣거나, Chat의 최종 JSON을 미리보기 후 반영하세요.</p>
        <Disclosure trigger="Chat 결과 한 번에 가져오기"><Field label="Chat 결과 JSON" value={raw} onChange={value => { setRaw(value); setProposal(null); }} multiline rows={6} /><button onClick={() => attempt(() => { setProposal(parseChatResult(raw)); setMessage(""); })}>가져오기 미리보기</button>{proposal && <div className="blogImport"><h3>반영할 내용</h3><pre>{JSON.stringify(proposal, null, 2)}</pre><button onClick={() => { patch({ copy: { ...draft.copy, ...proposal } }); setProposal(null); setRaw(""); setMessage("편집본에 반영했습니다. 이전 확정본은 유지됩니다."); }}>미리본 결과를 편집본에 반영</button></div>}</Disclosure>
        {Object.entries(COPY_FIELDS).map(([key, label]) => <div key={key}><Field label={`최종 ${label}`} value={draft.copy[key]} onChange={value => patch({ copy: { ...draft.copy, [key]: value } })} multiline={key !== "title"} rows={key === "body" ? 12 : 3} maxLength={40000} /><button className="blogCopy" onClick={() => copy(draft.copy[key])}>{label} 복사</button></div>)}
        <button onClick={finalize}>완성본 확정 및 저장</button>
        <Disclosure trigger={`이전 확정본 (${draft.versions.length})`}>{draft.versions.map((v, i) => <article key={`${v.at}-${i}`}><h3>{i + 1}차 · {v.at.slice(0, 16).replace("T", " ")} UTC</h3><pre>{JSON.stringify(v.copy, null, 2)}</pre></article>)}</Disclosure>
        <h2>발행 기록</h2><a href="https://blog.naver.com/koh_you_math/postwrite" target="_blank" rel="noreferrer">네이버 블로그 글쓰기 열기 ↗</a><Field label="발행 URL" value={draft.publishedUrl} onChange={publishedUrl => patch({ publishedUrl })} type="url" maxLength={2000} /><Field label="발행일" value={draft.publishedDate} onChange={publishedDate => patch({ publishedDate })} type="date" /><button onClick={savePublication}>발행 기록 저장</button>
      </>}
      <footer className="blogSave"><button onClick={() => store.save()}>편집 내용 저장</button><span>{states[store.status]}</span></footer>
      </fieldset>
    </section>}</div><span className="blogStorageHint" data-storage-key={BLOG_KEY}>초안과 완성본은 저장 버튼을 누른 뒤 서버에서 다시 확인합니다.</span>
  </main>;
}
