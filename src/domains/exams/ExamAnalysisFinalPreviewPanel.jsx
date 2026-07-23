import { examAnalysisPreviewPalette } from "./finalPreview.js";
import { ExamAnalysisPromptStudioPanel } from "./ExamAnalysisPromptStudioPanel.jsx";

function formatExamAnalysisPreviewEventTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.month}.${values.day} ${values.hour}:${values.minute}`;
}

function ExamAnalysisMiniDonut({ segments = [], centerLabel = "단원", ariaLabel = "출제 비중" }) {
  const visibleSegments = segments.filter((segment) => Number(segment.count || 0) > 0);
  let offset = 0;
  if (!visibleSegments.length) {
    return <div className="examAnalysisDonut empty" aria-label="데이터 없음" />;
  }
  return (
    <svg className="examAnalysisDonut" viewBox="0 0 42 42" role="img" aria-label={ariaLabel}>
      <circle className="examAnalysisDonutBase" cx="21" cy="21" r="15.9155" />
      {visibleSegments.map((segment) => {
        const dash = `${segment.percent} ${100 - segment.percent}`;
        const circle = (
          <circle
            className="examAnalysisDonutSlice"
            cx="21"
            cy="21"
            key={segment.label}
            r="15.9155"
            stroke={segment.color}
            strokeDasharray={dash}
            strokeDashoffset={-offset}
          />
        );
        offset += segment.percent;
        return circle;
      })}
      <text x="21" y="20" textAnchor="middle">{visibleSegments.length}</text>
      <text x="21" y="25" textAnchor="middle">{centerLabel}</text>
    </svg>
  );
}

function ExamAnalysisLegendList({ items = [], emptyLabel = "데이터 없음" }) {
  if (!items.length) return <div className="emptyState compact">{emptyLabel}</div>;
  return (
    <div className="examAnalysisPreviewLegend">
      {items.map((item) => (
        <span key={item.label}>
          <i style={{ backgroundColor: item.color }} />
          <b>{item.label}</b>
          <small>{item.count}문항 · {item.percent}%</small>
        </span>
      ))}
    </div>
  );
}

function ExamAnalysisBarList({ items = [], emptyLabel = "데이터 없음" }) {
  if (!items.length) return <div className="emptyState compact">{emptyLabel}</div>;
  return (
    <div className="examAnalysisPreviewBars">
      {items.map((item) => (
        <div className="examAnalysisPreviewBarRow" key={item.label}>
          <div>
            <strong>{item.label}</strong>
            <span>{item.count}문항 · {item.percent}%</span>
          </div>
          <div className="examAnalysisPreviewBarTrack">
            <span style={{ backgroundColor: item.color, width: `${Math.max(item.percent, 4)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisUnitBreakdownList({ items = [] }) {
  const visibleItems = items.filter((item) => item.mainTypes?.length);
  if (!visibleItems.length) return null;
  return (
    <div className="examAnalysisUnitBreakdown">
      {visibleItems.map((unit) => (
        <div key={unit.label}>
          <strong>{unit.label}</strong>
          <span>{unit.mainTypes.map((mainType) => `${mainType.label} ${mainType.count}`).join(" · ")}</span>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisPartDifficultyList({ items = [] }) {
  if (!items.length) return <div className="emptyState compact">난이도 데이터 없음</div>;
  return (
    <div className="examAnalysisPartDifficultyList">
      {items.map((part) => (
        <div className="examAnalysisPartDifficultyRow" key={part.label}>
          <div>
            <strong>{part.label}</strong>
            <span>{part.count}문항 · {part.percent}%</span>
          </div>
          <div className="examAnalysisStackedBar">
            {part.difficulties.map((difficulty) => (
              <span
                key={difficulty.label}
                style={{ backgroundColor: difficulty.color, width: `${Math.max(difficulty.percent, 6)}%` }}
                title={`${difficulty.label} · ${difficulty.count}문항`}
              />
            ))}
          </div>
          <small>{part.difficulties.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · ")}</small>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisQuestionMap({ questions = [] }) {
  if (!questions.length) return <div className="emptyState compact">문항 없음</div>;
  return (
    <div className="examAnalysisQuestionMap">
      {questions.map((question) => {
        const color = examAnalysisPreviewPalette.difficulties[question.difficulty] || examAnalysisPreviewPalette.difficulties["미정"];
        return (
          <span
            key={question.questionNumber}
            style={{ borderColor: color, backgroundColor: `${color}1a` }}
            title={[`${question.questionNumber}번`, question.unitName, question.mainType, question.difficulty].filter(Boolean).join(" · ")}
          >
            {question.questionNumber}
          </span>
        );
      })}
    </div>
  );
}

export function ExamAnalysisFinalPreviewPanel({ model }) {
  if (!model?.questions?.length) {
    return (
      <div className="panel examAnalysisFinalPreviewPanel">
        <div className="sectionHeader slim">
          <div>
            <strong>최종 미리보기</strong>
            <span>검수 저장 후 표시됩니다.</span>
          </div>
        </div>
        <div className="emptyState compact">저장된 문항 검수본이 없습니다.</div>
      </div>
    );
  }

  const { meta } = model;
  return (
    <div className="panel examAnalysisFinalPreviewPanel">
      <div className="sectionHeader slim">
        <div>
          <strong>최종 미리보기</strong>
          <span>{meta.totalQuestions}문항 · {model.notes.sourceOfTruth}</span>
        </div>
      </div>
      <div className="examAnalysisPreviewHero">
        <div>
          <strong>{meta.title}</strong>
          <span>{[meta.schoolName, meta.grade, meta.examCycle, meta.subject].filter(Boolean).join(" · ") || "기본정보 없음"}</span>
          {meta.sourceFileName ? <small>PDF 원본 · {meta.sourceFileName}</small> : null}
          {meta.reviewedAt ? <small>검수 저장 · {formatExamAnalysisPreviewEventTime(meta.reviewedAt)}</small> : null}
        </div>
        <div className="examAnalysisPreviewMetricGrid">
          <span><b>{meta.totalQuestions}</b><small>문항</small></span>
          <span><b>{model.partDistribution.length}</b><small>쎈 중단원</small></span>
          <span><b>{model.importantQuestions.length}</b><small>주요문항</small></span>
        </div>
      </div>

      <div className="examAnalysisPreviewGrid">
        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>쎈 중단원별 출제 비중</strong>
            <span>주요유형 분포</span>
          </div>
          <div className="examAnalysisPreviewDonutLayout">
            <ExamAnalysisMiniDonut segments={model.partDistribution} centerLabel="중단원" ariaLabel="쎈 중단원별 출제 비중" />
            <div>
              <ExamAnalysisLegendList items={model.partDistribution} />
              <ExamAnalysisUnitBreakdownList items={model.unitBreakdown} />
            </div>
          </div>
        </section>

        <section className="examAnalysisPreviewCard">
          <div className="examAnalysisPreviewCardHeader">
            <strong>난이도 분포</strong>
            <span>고정 색상</span>
          </div>
          <ExamAnalysisBarList items={model.difficultyDistribution} />
        </section>

        <section className="examAnalysisPreviewCard">
          <div className="examAnalysisPreviewCardHeader">
            <strong>쎈 중단원별 난이도</strong>
            <span>검수 저장본</span>
          </div>
          <ExamAnalysisPartDifficultyList items={model.difficultyByPart} />
        </section>

        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>문항 흐름</strong>
            <span>난이도 색상 기준</span>
          </div>
          <ExamAnalysisQuestionMap questions={model.questions} />
        </section>

        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>주요문항</strong>
            <span>선생님 체크 저장본</span>
          </div>
          {model.importantQuestions.length ? (
            <div className="examAnalysisImportantQuestions">
              {model.importantQuestions.map((question) => (
                <article key={question.questionNumber}>
                  <strong>{question.questionNumber}번</strong>
                  <div>
                    <b>{question.mainType || "유형 미입력"}</b>
                    <span>{[question.partName, question.unitName, question.difficulty, question.pageLabel].filter(Boolean).join(" · ")}</span>
                    <small>{question.reasons?.join(" · ") || "후보"}</small>
                    {question.reviewNote ? <p>{question.reviewNote}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="emptyState compact">주요문항 선택 없음</div>
          )}
        </section>
      </div>

      <div className="examAnalysisPreviewPolicy">
        <span>난이도 수정과 저장은 위 AI 결과 검수 표에서 진행합니다.</span>
        <span>{model.notes.formulaPolicy}</span>
        <span>{model.notes.publicOutputPolicy}</span>
      </div>
      <ExamAnalysisPromptStudioPanel analysisRunId={model.meta.analysisRunId} />
    </div>
  );
}
