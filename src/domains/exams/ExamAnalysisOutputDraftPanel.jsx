import { useState } from "react";
import {
  examAnalysisBlogBlockFields,
  examAnalysisGptChecklistManualFields,
  examAnalysisKeyQuestionBlockFields,
  examAnalysisOutputAiBoundaryRules,
  examAnalysisOutputBenchmarkMap,
  examAnalysisOutputEditorialChecklist,
  examAnalysisOutputInputFields,
  formatExamAnalysisEventTime,
  getExamAnalysisOutputInputCount,
  getExamAnalysisOutputInputTotal,
  getExamAnalysisOutputLastSavedAt,
  getExamAnalysisOutputSectionLabel,
  getExamAnalysisOutputSectionText,
  normalizeExamAnalysisKeyQuestionBlocks
} from "./examAnalysisOutputModel.js";
import {
  createExamAnalysisGptPlanningPacket,
  getExamAnalysisGptChecklistAutoItems
} from "./examAnalysisOutputPackageBuilder.js";
import { Disclosure, DisclosureChevron } from "../../shared/components/Disclosure.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";

export function ExamAnalysisOutputDraftPanel({
  activeRun,
  model,
  outputDrafts,
  outputStatus,
  generatingOutputType,
  exportingOutputType,
  isSavingOutputDrafts,
  onGenerateOutputDraft,
  onCopyOutputDraft,
  onCopyText,
  onDownloadOutputDraft,
  onDownloadOutputPackageZip,
  onSaveOutputDrafts,
  onUpdateInput,
  onAddKeyQuestionBlock,
  onUpdateKeyQuestionBlock,
  onRemoveKeyQuestionBlock,
  onUpdateTeacherDraft
}) {
  const hasRun = Boolean(activeRun?.analysisRunId);
  const hasReviewModel = Boolean(model?.questions?.length);
  const isOutputBusy = isSavingOutputDrafts || Boolean(generatingOutputType) || Boolean(exportingOutputType);
  const blogText = getExamAnalysisOutputSectionText(outputDrafts.blog);
  const instagramText = getExamAnalysisOutputSectionText(outputDrafts.instagram);
  const inputCount = getExamAnalysisOutputInputCount(outputDrafts.inputs);
  const inputTotal = getExamAnalysisOutputInputTotal(outputDrafts.inputs);
  const keyQuestionBlocks = normalizeExamAnalysisKeyQuestionBlocks(outputDrafts.inputs);
  const gptChecklistAutoItems = getExamAnalysisGptChecklistAutoItems({ activeRun, model, outputDrafts });
  const gptPlanningPacket = createExamAnalysisGptPlanningPacket({ activeRun, model, outputDrafts });
  const lastSavedAt = getExamAnalysisOutputLastSavedAt(outputDrafts);
  const saveCheckpointState = outputStatus.state === "dirty" || outputStatus.state === "saving" || outputStatus.state === "failed"
    ? outputStatus.state
    : lastSavedAt
      ? "success"
      : "idle";
  const saveCheckpointTitle = saveCheckpointState === "dirty"
    ? "저장 전 수정 있음"
    : saveCheckpointState === "saving"
      ? "저장 중"
      : saveCheckpointState === "failed"
        ? "저장 실패"
        : lastSavedAt
          ? "저장 확인됨"
          : "아직 저장 전";
  const saveCheckpointText = saveCheckpointState === "dirty"
    ? "산출물 저장을 눌러야 새로고침 후에도 유지됩니다."
    : saveCheckpointState === "saving"
      ? "입력칸과 선생님 수정본을 저장하고 있습니다."
      : saveCheckpointState === "failed"
        ? outputStatus.message || "저장에 실패했습니다."
        : lastSavedAt
        ? `마지막 저장 ${formatExamAnalysisEventTime(lastSavedAt)} · 새로고침 유지`
        : "산출물 저장을 누르면 입력칸과 선생님 수정본이 저장됩니다.";
  const outputStickySaveState = outputStatus.state === "success" ? "saved" : outputStatus.state;
  const [collapsedOutputSections, setCollapsedOutputSections] = useState({
    topSummary: false,
    guide: true,
    gptChecklist: false,
    baseInputs: false,
    blogBlocks: false,
    keyQuestions: false,
    finalDrafts: true
  });
  const toggleOutputSection = (sectionKey) => {
    setCollapsedOutputSections((currentSections) => ({
      ...currentSections,
      [sectionKey]: !currentSections[sectionKey]
    }));
  };
  const isOutputSectionCollapsed = (sectionKey) => Boolean(collapsedOutputSections[sectionKey]);
  return (
    <div className="panel examAnalysisOutputDraftPanel">
      <SectionHeader
        actions={(
          <>
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={() => onGenerateOutputDraft("blog")}
            type="button"
          >
            {generatingOutputType === "blog" ? "블로그 생성 중" : "블로그 초안 생성"}
          </button>
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={() => onGenerateOutputDraft("instagram")}
            type="button"
          >
            {generatingOutputType === "instagram" ? "인스타 생성 중" : "인스타 카드 초안 생성"}
          </button>
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={onDownloadOutputPackageZip}
            type="button"
          >
            {exportingOutputType === "package" ? "패키지 생성 중" : "산출물 ZIP"}
          </button>
          </>
        )}
        actionsClassName="headerActions"
        density="slim"
        description="선생님 총평 입력 · AI 초안 · 선생님 수정본 저장"
        title="블로그/인스타 산출물 초안"
        titleAs="strong"
      />

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>상단 안내/저장 상태</strong>
          <span>
            {saveCheckpointTitle} · 입력 {inputCount}/{inputTotal}블록 · 블로그 {getExamAnalysisOutputSectionLabel(outputDrafts.blog)} · 인스타 {getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}
          </span>
        </div>
        <button
          aria-controls="exam-output-top-summary-content"
          aria-expanded={!isOutputSectionCollapsed("topSummary")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("topSummary")}
          type="button"
        >
          {isOutputSectionCollapsed("topSummary") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("topSummary")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-top-summary-content" open={!isOutputSectionCollapsed("topSummary")}>
          <div className={`examAnalysisOutputSaveCheckpoint ${saveCheckpointState}`}>
            <strong>{saveCheckpointTitle}</strong>
            <span>{saveCheckpointText}</span>
            <small>
              입력 {inputCount}/{inputTotal}블록 · 블로그 {getExamAnalysisOutputSectionLabel(outputDrafts.blog)} · 인스타 {getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}
            </small>
          </div>

          <div className="examAnalysisBenchmarkMap">
            <div>
              <strong>벤치마킹 글 위치표</strong>
              <span>아래 입력칸이 네이버 글의 어느 흐름에 들어가는지 먼저 확인합니다.</span>
            </div>
            <div>
              {examAnalysisOutputBenchmarkMap.map(([label, description]) => (
                <span key={label}>
                  <strong>{label}</strong>
                  {description}
                </span>
              ))}
            </div>
          </div>

          <div className="examAnalysisOutputVisibility">
            <span>공개 범위</span>
            {[
              ["blog_instagram", "블로그+인스타"],
              ["blog", "블로그용"],
              ["instagram", "인스타용"],
              ["internal", "내부용"]
            ].map(([value, label]) => (
              <button
                className={outputDrafts.inputs.visibility === value ? "active" : ""}
                key={value}
                onClick={() => onUpdateInput("visibility", value)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>작성 방향/AI 편집 룰</strong>
          <span>초안 점검 기준, 이모티콘, 형광펜, AI 가능/불가 경계를 확인합니다.</span>
        </div>
        <button
          aria-controls="exam-output-guide"
          aria-expanded={!isOutputSectionCollapsed("guide")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("guide")}
          type="button"
        >
          {isOutputSectionCollapsed("guide") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("guide")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-guide" open={!isOutputSectionCollapsed("guide")}>
        <div className="examAnalysisOutputGuide">
          <strong>작성 방향</strong>
          <span>산출물은 단원 분류를 보여주는 자료가 아니라, 학생과 학부모가 실제로 궁금해하는 내용을 해석해주는 자료입니다. 카드뉴스는 6개 슬라이드 유형을 바탕으로 만들고, 주요문항/손풀이 카드는 선생님 crop 이미지만 슬롯에 넣습니다.</span>
          <small>초안 점검 기준</small>
          <ol>
            {examAnalysisOutputEditorialChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <small>벤치마킹 포맷</small>
          <ol>
            <li>😊 인사말 끝 · 📌 주요문항 시작 · ✅ 핵심 포인트/자주 틀리는 지점</li>
            <li>⬇️⬇️ CTA · 📍 위치 · ☎ 전화번호 자리표시자를 사용합니다.</li>
            <li>[형광펜: 하늘색]핵심 결론[/형광펜], [형광펜: 노랑]주의 지점[/형광펜]처럼 표시합니다.</li>
            <li>Canva는 주요문항 3개 기준 10장 구조를 기본으로 보고, 주요문항 수가 바뀌면 주요문항/손풀이 카드 쌍만 반복합니다.</li>
          </ol>
          <small>AI 편집 경계</small>
          <ol>
            {examAnalysisOutputAiBoundaryRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>GPT 대화세션 체크리스트</strong>
          <span>웹앱/시험지분석에서 자동으로 채운 값과 선생님 확정 입력을 합쳐 GPT 프로젝트 첫 메시지로 복사합니다.</span>
        </div>
        <button
          aria-controls="exam-output-gpt-checklist"
          aria-expanded={!isOutputSectionCollapsed("gptChecklist")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("gptChecklist")}
          type="button"
        >
          {isOutputSectionCollapsed("gptChecklist") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("gptChecklist")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-gpt-checklist" open={!isOutputSectionCollapsed("gptChecklist")}>
        <div className="examAnalysisGptChecklistPanel">
          <div className="examAnalysisGptChecklistNotice">
            <strong>반복 제작 기준</strong>
            <span>자동 입력값은 읽기 전용입니다. 등급컷, 출제 근거, 금지 항목, 주요문항 최종 선택은 선생님 저장본을 원본으로 사용합니다.</span>
          </div>
          <div className="examAnalysisGptChecklistAutoGrid">
            {gptChecklistAutoItems.map((item) => (
              <article key={item.label}>
                <span>{item.source}</span>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
          <div className="examAnalysisOutputInputGrid gptChecklistManual">
            {examAnalysisGptChecklistManualFields.map((field) => (
              <label key={field.key}>
                <span>{field.label}</span>
                <small>{field.source} · {field.guide}</small>
                <textarea
                  disabled={isOutputBusy}
                  onChange={(event) => onUpdateInput(field.key, event.target.value)}
                  placeholder={field.placeholder}
                  rows={3}
                  value={outputDrafts.inputs[field.key] || ""}
                />
              </label>
            ))}
          </div>
          <div className="examAnalysisGptPacketBox">
            <div>
              <div>
                <strong>GPT 프로젝트 첫 메시지 패킷</strong>
                <span>이 내용을 GPT 프로젝트 대화세션 첫 메시지에 붙여넣고 카드 기획안부터 받습니다.</span>
              </div>
              <button
                className="secondaryButton"
                disabled={!gptPlanningPacket.trim()}
                onClick={() => onCopyText("GPT 기획 패킷", gptPlanningPacket)}
                type="button"
              >
                GPT 기획 패킷 복사
              </button>
            </div>
            <textarea aria-label="GPT 프로젝트 기획 패킷" readOnly rows={12} value={gptPlanningPacket} />
          </div>
        </div>
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>공개글 발췌/보충 메모</strong>
          <span>시험관리 기록지를 다시 쓰는 칸이 아니라, 벤치마킹 글 첫 문단과 카드뉴스에 필요한 표현만 보충합니다.</span>
        </div>
        <button
          aria-controls="exam-output-base-inputs"
          aria-expanded={!isOutputSectionCollapsed("baseInputs")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("baseInputs")}
          type="button"
        >
          {isOutputSectionCollapsed("baseInputs") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("baseInputs")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-base-inputs" open={!isOutputSectionCollapsed("baseInputs")}>
        <div className="examAnalysisOutputInputGrid">
          {examAnalysisOutputInputFields.map((field) => (
            <label key={field.key}>
              <span>{field.label}</span>
              <small>{field.guide}</small>
              <textarea
                aria-label={field.label}
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </label>
          ))}
        </div>
      </Disclosure>

      <div className="examAnalysisInstructorSectionHeader withAction">
        <div>
          <strong>블로그 흐름 블록</strong>
          <span>18개 고정 섹션이 아니라 카드 사이에 들어갈 글의 성격을 적는 칸입니다. 각 카드에 벤치마킹 글 위치를 표시했습니다.</span>
        </div>
        <button
          aria-controls="exam-output-blog-blocks"
          aria-expanded={!isOutputSectionCollapsed("blogBlocks")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("blogBlocks")}
          type="button"
        >
          {isOutputSectionCollapsed("blogBlocks") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("blogBlocks")} />
        </button>
      </div>

      <Disclosure hideTrigger id="exam-output-blog-blocks" open={!isOutputSectionCollapsed("blogBlocks")}>
        <div className="examAnalysisBlogBlockGrid">
          {examAnalysisBlogBlockFields.map((field) => (
            <article className="examAnalysisBlogBlockCard" key={field.key}>
              <div className="examAnalysisBlogBlockCardHeader">
                <span>{field.order}</span>
                <div>
                  <strong>{field.label}</strong>
                  <small>{field.type}</small>
                </div>
              </div>
              <p>{field.guide}</p>
              <span className="examAnalysisBenchmarkHint">{field.benchmark}</span>
              <textarea
                aria-label={field.label}
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={3}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </article>
          ))}
        </div>
      </Disclosure>

      <div className="examAnalysisKeyQuestionHeader">
        <div>
          <strong>주요문항 반복 블록</strong>
          <span>주요문항 하나가 추가될 때마다 주요문항 카드, 손풀이 카드, 블로그 설명글 구조가 함께 반복됩니다.</span>
          <span>{"벤치마킹 위치: 📌 주요문항 시작 -> 문제 카드 -> 설명글 -> 손풀이 카드 -> 손풀이 설명글"}</span>
        </div>
        <div className="examAnalysisSectionActionGroup">
          <button
            aria-controls="exam-output-key-questions"
            aria-expanded={!isOutputSectionCollapsed("keyQuestions")}
            className="examAnalysisOutputCollapseButton"
            onClick={() => toggleOutputSection("keyQuestions")}
            type="button"
          >
            {isOutputSectionCollapsed("keyQuestions") ? "펼치기" : "접기"}
            <DisclosureChevron open={!isOutputSectionCollapsed("keyQuestions")} />
          </button>
          <button
            className="secondaryButton"
            disabled={isOutputBusy}
            onClick={onAddKeyQuestionBlock}
            type="button"
          >
            주요문항 추가
          </button>
        </div>
      </div>

      <Disclosure hideTrigger id="exam-output-key-questions" open={!isOutputSectionCollapsed("keyQuestions")}>
        <div className="examAnalysisKeyQuestionList">
          {keyQuestionBlocks.map((block, index) => (
            <article className="examAnalysisKeyQuestionCard" key={block.blockId || index}>
              <div className="examAnalysisKeyQuestionCardHeader">
                <div>
                  <strong>주요문항 {index + 1}</strong>
                  <span>주요문항 슬라이드 + 손풀이 슬라이드 + 블로그 설명글</span>
                </div>
                <button
                  disabled={isOutputBusy || keyQuestionBlocks.length <= 1}
                  onClick={() => onRemoveKeyQuestionBlock(block.blockId)}
                  type="button"
                >
                  삭제
                </button>
              </div>
              <div className="examAnalysisKeyQuestionFields">
                {examAnalysisKeyQuestionBlockFields.map((field) => (
                  <label className={field.type === "textarea" ? "wide" : ""} key={field.key}>
                    <span>{field.label}</span>
                    {field.type === "input" ? (
                      <input
                        disabled={isOutputBusy}
                        onChange={(event) => onUpdateKeyQuestionBlock(block.blockId, field.key, event.target.value)}
                        placeholder={field.placeholder}
                        type="text"
                        value={block[field.key] || ""}
                      />
                    ) : (
                      <textarea
                        disabled={isOutputBusy}
                        onChange={(event) => onUpdateKeyQuestionBlock(block.blockId, field.key, event.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        value={block[field.key] || ""}
                      />
                    )}
                  </label>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>최종 초안 / 복사 / TXT</strong>
          <span>블로그/인스타 초안은 삭제하지 않습니다. AI 생성 후 선생님이 최종 문장으로 고치는 원본이며, 복사/TXT/ZIP export가 이 값을 읽습니다.</span>
        </div>
        <button
          aria-controls="exam-output-final-drafts"
          aria-expanded={!isOutputSectionCollapsed("finalDrafts")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("finalDrafts")}
          type="button"
        >
          {isOutputSectionCollapsed("finalDrafts") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("finalDrafts")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-final-drafts" open={!isOutputSectionCollapsed("finalDrafts")}>
        <div className="examAnalysisOutputEditorGrid">
          <section>
            <div>
              <div>
                <strong>블로그 초안</strong>
                <span>{getExamAnalysisOutputSectionLabel(outputDrafts.blog)}</span>
              </div>
              <div className="examAnalysisOutputEditorActions">
                <button disabled={!blogText.trim()} onClick={() => onCopyOutputDraft("blog", blogText)} type="button">복사</button>
                <button disabled={!blogText.trim()} onClick={() => onDownloadOutputDraft("blog", blogText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              aria-label="블로그 최종 초안"
              onChange={(event) => onUpdateTeacherDraft("blog", event.target.value)}
              placeholder="블로그 초안 생성 후 선생님이 최종 문장으로 수정합니다."
              rows={18}
              value={blogText}
            />
          </section>
          <section>
            <div>
              <div>
                <strong>인스타 카드 초안</strong>
                <span>{getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}</span>
              </div>
              <div className="examAnalysisOutputEditorActions">
                <button disabled={!instagramText.trim()} onClick={() => onCopyOutputDraft("instagram", instagramText)} type="button">복사</button>
                <button disabled={!instagramText.trim()} onClick={() => onDownloadOutputDraft("instagram", instagramText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              aria-label="인스타 카드 최종 초안"
              onChange={(event) => onUpdateTeacherDraft("instagram", event.target.value)}
              placeholder="인스타 카드 초안 생성 후 카드별 문구, 슬라이드 유형, 주요문항/손풀이 슬롯 안내를 수정합니다."
              rows={18}
              value={instagramText}
            />
          </section>
        </div>
      </Disclosure>

      <div className="examAnalysisOutputPolicy">
        <span>입력칸과 선생님 수정본은 저장 후 새로고침해도 유지됩니다.</span>
        <span>읽기 우선순위: 선생님 수정본 &gt; AI 초안 &gt; 빈 값입니다.</span>
        <span>AI 재생성은 AI 초안만 갱신하고, 저장된 선생님 수정본은 덮어쓰지 않습니다.</span>
      </div>
      <StickySaveBar
        className="examAnalysisOutputStickySaveBar"
        label="산출물 작업본"
        message={outputStatus.message || saveCheckpointText}
        saveState={outputStickySaveState}
      >
        <button
          className="primaryButton"
          disabled={!hasRun || isOutputBusy}
          onClick={onSaveOutputDrafts}
          type="button"
        >
          {isSavingOutputDrafts ? "저장 중" : "산출물 작업본 저장"}
        </button>
      </StickySaveBar>
    </div>
  );
}
