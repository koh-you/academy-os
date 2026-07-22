import { useEffect, useMemo, useState } from "react";
import { getJsonWithTimeout, postJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { copyTextToClipboard } from "./outputPreview.js";
import { createExamAnalysisPromptInputSnapshot } from "./examAnalysisPromptInputMapping.js";
import {
  applyExamAnalysisPromptStudioSaveVerification,
  createExamAnalysisPromptStudioLocalState,
  createExamAnalysisPromptStudioSavePayload,
  EXAM_ANALYSIS_PROMPT_SAVE_STATUS,
  seedExamAnalysisPromptStudioDraftFromSnapshot,
  updateExamAnalysisPromptStudioLocalDraft,
} from "./examAnalysisPromptStudioDraft.js";
import {
  createExamAnalysisPhraseDraft,
  getExamAnalysisPhraseOptions,
} from "./examAnalysisPhraseLibrary.js";
import {
  buildExamAnalysisSlideSequence,
  getExamAnalysisEffectiveRoleIds,
  getExamAnalysisSequenceRoleOptions,
} from "./examAnalysisSlideSequence.js";
import { createExamAnalysisPromptPack } from "./examAnalysisPromptPack.js";
import "./examAnalysisPromptStudio.css";

const roleLabels = {
  common: "공통 정보",
  examAnalysis: "시험 분석",
  keyQuestion: "주요문항",
  nextPreparation: "다음 대비",
  cta: "CTA",
};

const saveLabels = {
  saved: "저장됨",
  dirty: "편집 중 · 저장 필요",
  saving: "저장 중",
  verifying: "서버 반영 확인 중",
  verified: "저장 완료 · Supabase 재조회 확인",
  failed: "저장 실패 · 작업본 유지",
};

function PromptField({ label, value, onChange, multiline = false, placeholder = "", sourceLabel = "프롬프트 작업본" }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <label className="examPromptField">
      <span><b>{label}</b><small>{sourceLabel}</small></span>
      <Control value={value ?? ""} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={multiline ? 3 : undefined} />
    </label>
  );
}

function PhrasePicker({ field, schoolLevel, targetPath, currentValue, onApply }) {
  const options = useMemo(() => getExamAnalysisPhraseOptions({ field, schoolLevel }), [field, schoolLevel]);
  const [selectedId, setSelectedId] = useState("");
  if (!options.length) return null;
  return (
    <div className="examPromptPhrasePicker">
      <select aria-label={`${field} 벤치마크 문구`} value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
        <option value="">벤치마크 문구 사례 선택</option>
        {options.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
      </select>
      <button
        className="ghostButton"
        disabled={!selectedId}
        onClick={() => {
          const phraseDraft = createExamAnalysisPhraseDraft(selectedId);
          const next = currentValue ? `${currentValue}\n${phraseDraft}` : phraseDraft;
          onApply({ targetPath, phraseId: selectedId, value: next });
        }}
        type="button"
      >
        {currentValue ? "선택 문구 이어 붙이기" : "선택 문구 적용"}
      </button>
      <small>선택만으로는 바뀌지 않습니다. 적용 후 자유롭게 수정하고 저장하세요.</small>
    </div>
  );
}

function MissingInputNotice({ readiness }) {
  const missing = readiness?.missing ?? [];
  if (!missing.length) return <div className="examPromptReadyNotice">필수 입력의 누락 상태가 없습니다.</div>;
  const grouped = missing.reduce((map, item) => {
    const key = item.role.startsWith("keyQuestions") ? "keyQuestion" : item.role;
    map[key] = [...(map[key] ?? []), item];
    return map;
  }, {});
  return (
    <div className="examPromptMissingNotice">
      <strong>자동으로 확정할 수 없는 입력</strong>
      {Object.entries(grouped).map(([role, items]) => (
        <span key={role}><b>{roleLabels[role] || role}</b> · {items.map((item) => item.field).join(", ")}</span>
      ))}
      <small>빈칸은 교사가 확인해 입력합니다. AI 후보나 PDF 페이지 정보로 자동 보정하지 않습니다.</small>
    </div>
  );
}

export function ExamAnalysisPromptStudioPanel({ analysisRunId }) {
  const [detail, setDetail] = useState(null);
  const [localState, setLocalState] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    let active = true;
    if (!analysisRunId) return undefined;
    setDetail(null);
    setLocalState(null);
    setLoadError("");
    getJsonWithTimeout(`/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`, 12000, "프롬프트 작업본 조회가 지연되고 있습니다.")
      .then((result) => {
        if (!active) return;
        const snapshot = createExamAnalysisPromptInputSnapshot({
          analysisRun: result.analysisRun,
          questions: result.questions,
          sourceFiles: result.sources,
        });
        snapshot.sourceUpdatedAt = result.analysisRun?.updatedAt || "";
        const base = createExamAnalysisPromptStudioLocalState(result.analysisRun);
        const seededDraft = seedExamAnalysisPromptStudioDraftFromSnapshot(snapshot, base.savedDraft);
        setDetail({ ...result, snapshot });
        setLocalState(updateExamAnalysisPromptStudioLocalDraft(base, seededDraft));
      })
      .catch((error) => active && setLoadError(error.message));
    return () => { active = false; };
  }, [analysisRunId]);

  const draft = localState?.draft;
  const schoolLevel = draft?.sequence?.schoolLevel || "high";
  const sequenceModel = useMemo(() => buildExamAnalysisSlideSequence(draft ?? {}), [draft]);
  const sequenceRoleOptions = useMemo(() => getExamAnalysisSequenceRoleOptions(schoolLevel), [schoolLevel]);
  const effectiveRoleIds = useMemo(() => getExamAnalysisEffectiveRoleIds(draft?.sequence), [draft?.sequence]);
  const promptPack = useMemo(() => createExamAnalysisPromptPack(draft ?? {}), [draft]);
  const editDraft = (updater) => setLocalState((current) => updateExamAnalysisPromptStudioLocalDraft(current, updater));
  const updateRoleField = (role, field, value) => editDraft((current) => ({
    ...current,
    roleInputs: { ...current.roleInputs, [role]: { ...current.roleInputs[role], [field]: value } },
  }));
  const updateKeyQuestion = (index, field, value) => editDraft((current) => ({
    ...current,
    roleInputs: {
      ...current.roleInputs,
      keyQuestions: current.roleInputs.keyQuestions.map((question, questionIndex) => questionIndex === index ? { ...question, [field]: value } : question),
    },
  }));
  const addKeyQuestion = () => editDraft((current) => ({
    ...current,
    roleInputs: {
      ...current.roleInputs,
      keyQuestions: [
        ...current.roleInputs.keyQuestions,
        {
          blockId: `key-question-${Date.now()}`,
          questionNumber: "",
          title: "",
          selectionReason: "",
          concepts: [],
          strategy: "",
          errorPoint: "",
          similarTypeEvidence: "",
          sourceAssetId: "",
          solutionAssetId: "",
          sourceCaption: "",
        },
      ].slice(0, 12),
    },
  }));
  const removeKeyQuestion = (index) => editDraft((current) => ({
    ...current,
    roleInputs: {
      ...current.roleInputs,
      keyQuestions: current.roleInputs.keyQuestions.filter((_question, questionIndex) => questionIndex !== index),
    },
  }));
  const toggleSequenceRole = (roleId) => editDraft((current) => {
    const currentEffective = getExamAnalysisEffectiveRoleIds(current.sequence);
    const nextEnabled = currentEffective.includes(roleId)
      ? currentEffective.filter((item) => item !== roleId)
      : [...currentEffective, roleId];
    return { ...current, sequence: { ...current.sequence, enabledRoleIds: nextEnabled } };
  });
  const applyPhrase = ({ targetPath, phraseId, value }) => {
    const [, role, fieldOrIndex, nestedField] = targetPath.split(".");
    if (role === "keyQuestions") updateKeyQuestion(Number(fieldOrIndex), nestedField, value);
    else updateRoleField(role, fieldOrIndex, value);
    editDraft((current) => ({ ...current, phraseSelections: { ...current.phraseSelections, [targetPath]: phraseId } }));
  };

  async function saveDraft() {
    if (!localState || !analysisRunId) return;
    setLocalState((current) => ({ ...current, status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.SAVING, error: "" }));
    try {
      const payload = createExamAnalysisPromptStudioSavePayload(analysisRunId, localState, "teacher");
      const result = await postJsonWithTimeout("/api/exam-analysis-runs/save-prompt-studio", payload, 20000, "프롬프트 작업본 저장이 지연되고 있습니다.");
      setLocalState((current) => ({ ...current, status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.VERIFYING }));
      setLocalState((current) => applyExamAnalysisPromptStudioSaveVerification(current, result));
      setDetail((current) => current ? { ...current, analysisRun: result.analysisRun } : current);
    } catch (error) {
      setLocalState((current) => ({ ...current, status: EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED, error: error.message }));
    }
  }

  async function copyPrompt(label, text) {
    const copied = await copyTextToClipboard(text);
    setCopyStatus(copied ? `${label} 복사 완료` : `${label} 복사 실패`);
  }

  function downloadPromptFile(kind) {
    const school = (draft.roleInputs.common.schoolName || "school").replace(/[^0-9A-Za-z가-힣_-]+/g, "-");
    const examName = (draft.roleInputs.common.examName || "exam").replace(/[^0-9A-Za-z가-힣_-]+/g, "-");
    const isJson = kind === "json";
    const content = isJson ? JSON.stringify(promptPack, null, 2) : promptPack.text;
    const blob = new Blob([content], { type: isJson ? "application/json;charset=utf-8" : "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${school}-${examName}-gpt-image-prompts.${isJson ? "json" : "txt"}`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  if (!analysisRunId) return null;
  if (loadError) return <section className="panel examPromptStudio"><div className="errorBanner">프롬프트 제작실 불러오기 실패 · {loadError}</div></section>;
  if (!draft || !detail) return <section className="panel examPromptStudio"><div className="emptyState compact">프롬프트 제작실 불러오는 중</div></section>;

  return (
    <section className="panel examPromptStudio">
      <div className="examPromptStudioHeader">
        <div><strong>GPT Image 슬라이드 프롬프트 제작실</strong><span>확정 데이터 + 교사 입력 + 벤치마크 문구를 재사용 가능한 작업본으로 구성합니다.</span></div>
        <div className={`examPromptSaveBadge ${localState.status}`}><b>{saveLabels[localState.status]}</b>{localState.error ? <small>{localState.error}</small> : null}</div>
      </div>

      <MissingInputNotice readiness={detail.snapshot.readiness} />

      <div className="examPromptLevelSwitch" aria-label="학교급 시퀀스">
        {[["middle", "중학교"], ["high", "고등학교"]].map(([value, label]) => (
          <button
            className={schoolLevel === value ? "active" : ""}
            key={value}
            onClick={() => editDraft((current) => ({ ...current, sequence: { ...current.sequence, schoolLevel: value, presetId: `${value}_core`, enabledRoleIds: [] } }))}
            type="button"
          >{label}</button>
        ))}
      </div>

      <div className="examPromptSequencePanel">
        <div className="examPromptRoleHeading">
          <div><strong>{sequenceModel.presetLabel}</strong><small>입력 유무에 따라 조건부 역할을 건너뛰고 번호를 다시 계산합니다.</small></div>
          <span>총 {sequenceModel.slides.length}장 · 준비 {sequenceModel.readyCount} · 입력 필요 {sequenceModel.needsInputCount}</span>
        </div>
        <div className="examPromptRoleToggles">
          {sequenceRoleOptions.map((role) => (
            <label key={role.roleId}>
              <input
                checked={effectiveRoleIds.includes(role.roleId)}
                disabled={role.fixed}
                onChange={() => toggleSequenceRole(role.roleId)}
                type="checkbox"
              />
              <span>{role.label}{role.fixed ? " · 필수" : ""}</span>
            </label>
          ))}
        </div>
        <ol className="examPromptSlideSequence">
          {sequenceModel.slides.map((slide) => (
            <li className={slide.status} key={slide.roleId}>
              <b>{slide.slideNumber}</b>
              <span><strong>{slide.title}</strong><small>{slide.roleId}</small></span>
              <em>{slide.status === "ready" ? "준비됨" : `입력 필요 · ${slide.missingFields.join(", ")}`}</em>
            </li>
          ))}
        </ol>
        {sequenceModel.skipped.length ? <details className="examPromptSkipped"><summary>제외된 조건부 역할 {sequenceModel.skipped.length}개</summary>{sequenceModel.skipped.map((item) => <span key={item.roleId}>{item.roleId} · {item.reason}</span>)}</details> : null}
      </div>

      <div className="examPromptRoleGrid">
        <article className="examPromptRoleCard">
          <h4>공통 정보 <small>시험분석 원천에서 시작하며 수정값은 프롬프트 작업본에만 저장</small></h4>
          <div className="examPromptFieldGrid compact">
            {[['schoolName','학교명'],['grade','학년'],['examName','시험명'],['subject','과목']].map(([field, label]) => (
              <PromptField key={field} label={label} value={draft.roleInputs.common[field]} onChange={(value) => updateRoleField("common", field, value)} sourceLabel="원천값 기반" />
            ))}
          </div>
          <PromptField label="학교 스타일" value={draft.roleInputs.common.schoolStyle} onChange={(value) => updateRoleField("common", "schoolStyle", value)} placeholder="예: 차분한 분석형, 학교 대표색은 남색" />
        </article>

        <article className="examPromptRoleCard">
          <h4>시험 분석 <small>문항 수·배점·범위·단원 비중·난이도·총평</small></h4>
          <div className="examPromptFieldGrid compact">
            <PromptField label="문항 수" value={draft.roleInputs.examAnalysis.questionCount} onChange={(value) => updateRoleField("examAnalysis", "questionCount", value)} sourceLabel="확정값 기반" />
            <PromptField label="배점/문항 구조" value={draft.roleInputs.examAnalysis.scoreStructure} onChange={(value) => updateRoleField("examAnalysis", "scoreStructure", value)} placeholder="교사 확인 후 입력" />
          </div>
          <PromptField label="시험 범위" value={draft.roleInputs.examAnalysis.scope} onChange={(value) => updateRoleField("examAnalysis", "scope", value)} />
          <PromptField label="단원 비중" value={draft.roleInputs.examAnalysis.unitDistributionNote} onChange={(value) => updateRoleField("examAnalysis", "unitDistributionNote", value)} multiline sourceLabel="확정 문항 집계 기반" />
          <PromptField label="난이도 근거" value={draft.roleInputs.examAnalysis.difficultyNote} onChange={(value) => updateRoleField("examAnalysis", "difficultyNote", value)} multiline />
          <PhrasePicker field="difficultyEvidence" schoolLevel={schoolLevel} targetPath="roleInputs.examAnalysis.difficultyNote" currentValue={draft.roleInputs.examAnalysis.difficultyNote} onApply={applyPhrase} />
          <PromptField label="총평" value={draft.roleInputs.examAnalysis.overallReview} onChange={(value) => updateRoleField("examAnalysis", "overallReview", value)} multiline />
          <PhrasePicker field="reviewPoints" schoolLevel={schoolLevel} targetPath="roleInputs.examAnalysis.overallReview" currentValue={draft.roleInputs.examAnalysis.overallReview} onApply={applyPhrase} />
        </article>

        <article className="examPromptRoleCard wide">
          <div className="examPromptRoleHeading">
            <h4>주요문항 <small>문항별 선정 이유·핵심 개념·풀이 전략·오답 지점·원본 자산</small></h4>
            <button className="ghostButton" disabled={draft.roleInputs.keyQuestions.length >= 12} onClick={addKeyQuestion} type="button">주요문항 추가</button>
          </div>
          {draft.roleInputs.keyQuestions.length ? draft.roleInputs.keyQuestions.map((question, index) => (
            <div className="examPromptQuestionCard" key={question.blockId || index}>
              <div className="examPromptQuestionTitle"><b>주요문항 {index + 1}</b><span>문제 crop·손풀이 ID가 없으면 누락으로 유지</span><button className="textButton danger" onClick={() => removeKeyQuestion(index)} type="button">삭제</button></div>
              <div className="examPromptFieldGrid compact">
                <PromptField label="문항 번호" value={question.questionNumber} onChange={(value) => updateKeyQuestion(index, "questionNumber", value)} />
                <PromptField label="카드 제목" value={question.title} onChange={(value) => updateKeyQuestion(index, "title", value)} />
              </div>
              <PromptField label="선정 이유" value={question.selectionReason} onChange={(value) => updateKeyQuestion(index, "selectionReason", value)} multiline />
              <PhrasePicker field="selectionReason" schoolLevel={schoolLevel} targetPath={`roleInputs.keyQuestions.${index}.selectionReason`} currentValue={question.selectionReason} onApply={applyPhrase} />
              <PromptField label="핵심 개념" value={question.concepts.join(", ")} onChange={(value) => updateKeyQuestion(index, "concepts", value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean))} />
              <PhrasePicker field="concepts" schoolLevel={schoolLevel} targetPath={`roleInputs.keyQuestions.${index}.concepts`} currentValue={question.concepts.join(", ")} onApply={({ value, ...selection }) => applyPhrase({ ...selection, value: value.split(/[,，\n]/).map((item) => item.trim()).filter(Boolean) })} />
              <PromptField label="풀이 전략" value={question.strategy} onChange={(value) => updateKeyQuestion(index, "strategy", value)} multiline />
              <PhrasePicker field="strategy" schoolLevel={schoolLevel} targetPath={`roleInputs.keyQuestions.${index}.strategy`} currentValue={question.strategy} onApply={applyPhrase} />
              <PromptField label="오답 지점" value={question.errorPoint} onChange={(value) => updateKeyQuestion(index, "errorPoint", value)} multiline />
              <PhrasePicker field="errorPoint" schoolLevel={schoolLevel} targetPath={`roleInputs.keyQuestions.${index}.errorPoint`} currentValue={question.errorPoint} onApply={applyPhrase} />
              <div className="examPromptFieldGrid compact">
                <PromptField label="문제 crop 자산 ID" value={question.sourceAssetId} onChange={(value) => updateKeyQuestion(index, "sourceAssetId", value)} placeholder="실제 저장 자산 ID" />
                <PromptField label="검증 손풀이 자산 ID" value={question.solutionAssetId} onChange={(value) => updateKeyQuestion(index, "solutionAssetId", value)} placeholder="실제 저장 자산 ID" />
              </div>
            </div>
          )) : <div className="emptyState compact">산출물 입력에서 주요문항을 선택한 뒤 다시 확인해 주세요.</div>}
        </article>

        <article className="examPromptRoleCard">
          <h4>다음 대비 <small>교사가 확정할 학습 행동 3~5개 · 현재 {draft.roleInputs.nextPreparation.actionItems.length}개</small></h4>
          <PromptField label="학습 행동" value={draft.roleInputs.nextPreparation.actionItems.join("\n")} onChange={(value) => updateRoleField("nextPreparation", "actionItems", value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean).slice(0, 5))} multiline placeholder="한 줄에 한 행동" />
          <PhrasePicker field="actionItems" schoolLevel={schoolLevel} targetPath="roleInputs.nextPreparation.actionItems" currentValue={draft.roleInputs.nextPreparation.actionItems.join("\n")} onApply={({ value, ...selection }) => applyPhrase({ ...selection, value: value.split(/\r?\n/).filter(Boolean).slice(0, 5) })} />
        </article>

        <article className="examPromptRoleCard">
          <h4>CTA <small>검수된 학원 문구와 연락·다음 행동</small></h4>
          <PromptField label="학원 가치 문장" value={draft.roleInputs.cta.valueStatement} onChange={(value) => updateRoleField("cta", "valueStatement", value)} multiline />
          <PhrasePicker field="valueStatement" schoolLevel={schoolLevel} targetPath="roleInputs.cta.valueStatement" currentValue={draft.roleInputs.cta.valueStatement} onApply={applyPhrase} />
          <PromptField label="연락/다음 행동" value={draft.roleInputs.cta.contactOrNextAction} onChange={(value) => updateRoleField("cta", "contactOrNextAction", value)} multiline placeholder="검수된 상담 문구·연락처·링크" />
        </article>
      </div>

      <div className="examPromptOutputPanel">
        <div className="examPromptRoleHeading">
          <div><strong>복붙용 프롬프트</strong><small>프로젝트 공통 지침을 먼저 붙이고, 아래 슬라이드를 1장씩 생성합니다.</small></div>
          <div className="examPromptOutputActions">
            <button className="ghostButton" disabled={!promptPack.readyForAllGeneration} onClick={() => copyPrompt("전체 프롬프트", promptPack.text)} type="button">전체 복사</button>
            <button className="ghostButton" onClick={() => downloadPromptFile("txt")} type="button">TXT</button>
            <button className="ghostButton" onClick={() => downloadPromptFile("json")} type="button">JSON</button>
          </div>
        </div>
        <div className={`examPromptGenerationStatus ${promptPack.readyForAllGeneration ? "ready" : "blocked"}`}>
          {promptPack.readyForAllGeneration
            ? `전체 ${promptPack.slides.length}장 생성 준비 완료`
            : `입력 필요 슬라이드 ${promptPack.slides.filter((slide) => !slide.generationAllowed).length}장 · 해당 상세 프롬프트 복사 잠금`}
          {copyStatus ? <small>{copyStatus}</small> : null}
        </div>
        <details className="examPromptOutputItem" open>
          <summary><b>프로젝트 마스터 프롬프트</b><span>모든 슬라이드 공통</span></summary>
          <pre>{promptPack.masterPrompt}</pre>
          <button className="ghostButton" onClick={() => copyPrompt("마스터 프롬프트", promptPack.masterPrompt)} type="button">마스터 복사</button>
        </details>
        {promptPack.slides.map((slide) => (
          <details className={`examPromptOutputItem ${slide.generationAllowed ? "ready" : "blocked"}`} key={slide.roleId}>
            <summary>
              <b>{slide.slideNumber}. {slide.title}</b>
              <span>{slide.generationAllowed ? "복사 가능" : `입력 필요 · ${slide.missingFields.join(", ")}`}</span>
            </summary>
            <div className="examPromptOutputColumns">
              <section><strong>상세 생성 프롬프트</strong><pre>{slide.prompt}</pre><button className="ghostButton" disabled={!slide.generationAllowed} onClick={() => copyPrompt(`${slide.slideNumber}번 상세`, `${promptPack.masterPrompt}\n\n${slide.prompt}`)} type="button">마스터+상세 복사</button></section>
              <section><strong>수정 프롬프트</strong><pre>{slide.revisionPrompt}</pre><button className="ghostButton" onClick={() => copyPrompt(`${slide.slideNumber}번 수정`, slide.revisionPrompt)} type="button">수정 복사</button></section>
              <section><strong>QA 프롬프트</strong><pre>{slide.qaPrompt}</pre><button className="ghostButton" onClick={() => copyPrompt(`${slide.slideNumber}번 QA`, slide.qaPrompt)} type="button">QA 복사</button></section>
            </div>
          </details>
        ))}
        <details className="examPromptOutputItem">
          <summary><b>전체 시리즈 수정 프롬프트</b><span>스타일 일괄 보정</span></summary>
          <pre>{promptPack.globalRevisionPrompt}</pre>
          <button className="ghostButton" onClick={() => copyPrompt("전체 수정", promptPack.globalRevisionPrompt)} type="button">전체 수정 복사</button>
        </details>
      </div>

      <div className="examPromptSaveBar">
        <span>revision {draft.revision} · 선택 문구 {Object.keys(draft.phraseSelections).length}개</span>
        <button className="primaryButton" disabled={![EXAM_ANALYSIS_PROMPT_SAVE_STATUS.DIRTY, EXAM_ANALYSIS_PROMPT_SAVE_STATUS.FAILED].includes(localState.status)} onClick={saveDraft} type="button">프롬프트 작업본 저장</button>
      </div>
    </section>
  );
}
