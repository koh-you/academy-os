import {
  classificationRowsToInsightItems,
  formatSsenTypeTags,
  normalizeExamQuestionItems
} from "./questionClassification.js";
import {
  formatQuestionScoreWithWeight,
  getExamStrategyFlowNodes,
  summarizeQuestionSsenTypes,
  summarizeQuestionUnits
} from "./finalDocument.js";

export function ExamQuestionInsightTables({ questionItems = [], classificationRows = [], questionComposition = null }) {
  const classificationItems = classificationRowsToInsightItems(classificationRows);
  const items = classificationItems.length ? classificationItems : normalizeExamQuestionItems(questionItems);
  const commentedItems = items.filter((item) =>
    [
      item.teacherComment,
      item.variationRelationComment,
      item.strategyComment,
      formatSsenTypeTags(item.ssenTypeTags),
      item.similarProblemSource,
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? item.similarProblemNeeded : "",
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? item.similarProblemRelation : ""
    ].some((value) => String(value || "").trim())
  );
  const unitRows = summarizeQuestionUnits(items);
  const ssenTypeRows = summarizeQuestionSsenTypes(items);
  const sourceRows = items.filter((item) =>
    (String(item.source || "").trim() && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    String(item.similarProblemSource || "").trim() ||
    (item.similarProblemRelation && item.similarProblemRelation !== "확인 필요")
  );
  const hardItems = items.filter((item) =>
    ["중상", "상"].includes(item.difficulty) || ["앞번호 고난도", "준킬러", "킬러", "서술형 변별"].includes(item.role)
  );
  const basicTaggedItems = items.filter((item) => item.tags?.includes("기본문항"));
  const mistakeTaggedItems = items.filter((item) => item.tags?.includes("실수문항"));
  const importantTaggedItems = items.filter((item) => item.tags?.includes("주요문항"));
  const firstGradeTaggedItems = items.filter((item) => item.tags?.includes("1등급 변별문항"));
  const secondGradeTaggedItems = items.filter((item) => item.tags?.includes("2등급 변별문항"));
  const middlePriorityItems = [...importantTaggedItems, ...secondGradeTaggedItems, ...mistakeTaggedItems]
    .filter((item, index, array) => array.findIndex((candidate) => candidate.questionId === item.questionId) === index);
  const strategyRows = [
    {
      level: "상위권",
      focus: firstGradeTaggedItems.length ? "1등급 변별문항 확장" : "고난도/변별 문항 재풀이",
      detail: (firstGradeTaggedItems.length ? firstGradeTaggedItems : hardItems).length
        ? `${(firstGradeTaggedItems.length ? firstGradeTaggedItems : hardItems).map((item) => `${item.number}번`).join(", ")} 중심`
        : "킬러 후보 문항 입력 후 자동 정리"
    },
    {
      level: "중위권",
      focus: middlePriorityItems.length ? "주요·실수·2등급 변별문항 정리" : "실수유도·앞번호 고난도 정리",
      detail: (middlePriorityItems.length ? middlePriorityItems : items.filter((item) => ["실수유도", "앞번호 고난도"].includes(item.role))).map((item) => `${item.number}번`).join(", ") || "문항 역할 입력 필요"
    },
    {
      level: "하위권",
      focus: "기본문항과 필수 단원 복습",
      detail: basicTaggedItems.length ? `${basicTaggedItems.map((item) => `${item.number}번`).join(", ")} 우선` : unitRows.slice(0, 3).map((row) => row.unit).join(", ") || "단원 입력 필요"
    }
  ];

  if (!items.length) {
    return (
      <div className="analysisQuestionEmpty">
        문항 수를 확정하고 분류표를 생성하면 문항분석표, 단원별 출제표, 학생 대비전략표가 자동으로 정리됩니다.
      </div>
    );
  }

  return (
    <div className="analysisQuestionTables">
      <section>
        <div className="analysisQuestionTableTitle">
          <strong>문항분석표</strong>
          <span>{items.length}문항 · 코멘트 {commentedItems.length}개</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable questionInsightMainTable">
            <thead>
              <tr>
                <th>문항</th>
                <th>배점</th>
                <th>단원 / 쎈 유형</th>
                <th>난이도 / 역할</th>
                <th>검수 메모</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.questionId}>
                  <td>
                    <strong>{item.number}번</strong>
                    {item.page ? <small>{item.page}p</small> : null}
                  </td>
                  <td>{formatQuestionScoreWithWeight(item, items, questionComposition)}</td>
                  <td>
                    <strong>{item.unit || "-"}</strong>
                    <small>{formatSsenTypeTags(item.ssenTypeTags) || "쎈 유형 확인 필요"}</small>
                  </td>
                  <td>
                    <strong>{item.difficulty || "-"}</strong>
                    <small>{item.role || "-"}</small>
                  </td>
                  <td>
                    {[item.teacherComment || item.strategyComment || "", item.tags?.length ? item.tags.join(", ") : ""].filter(Boolean).join("\n") || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>단원별 출제</strong>
          <span>문항수 기준</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>단원</th>
                <th>문항수</th>
                <th>합산 배점</th>
                <th>고난도/변별</th>
                <th>문항</th>
              </tr>
            </thead>
            <tbody>
              {unitRows.map((row) => (
                <tr key={row.unit}>
                  <td>{row.unit}</td>
                  <td>{row.count}</td>
                  <td>{row.score || "-"}</td>
                  <td>{row.hard}</td>
                  <td>{row.questions.map((number) => `${number}번`).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>쎈 유형별 분류</strong>
          <span>{ssenTypeRows.length}유형</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>쎈 유형</th>
                <th>단원</th>
                <th>주유형</th>
                <th>보조유형</th>
                <th>문항</th>
              </tr>
            </thead>
            <tbody>
              {ssenTypeRows.length ? ssenTypeRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.unitName || "-"}</td>
                  <td>{row.primary || "-"}</td>
                  <td>{row.secondary || "-"}</td>
                  <td>{row.questions.map((number) => `${number}번`).join(", ")}</td>
                </tr>
              )) : (
                <tr><td colSpan="5">문항별 분류표에 쎈 유형이 들어오면 자동으로 정리됩니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>부교재·유사문항 활용</strong>
          <span>{sourceRows.length}문항</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>문항</th>
                <th>출처</th>
                <th>유사문항</th>
                <th>변형 구분</th>
                <th>변형 관계</th>
              </tr>
            </thead>
            <tbody>
              {sourceRows.length ? sourceRows.map((item) => (
                <tr key={item.questionId}>
                  <td>{item.number}번</td>
                  <td>{item.similarProblemSource || item.source}</td>
                  <td>{item.similarProblemNeeded || "확인 필요"}</td>
                  <td>{item.similarProblemRelation || "확인 필요"}</td>
                  <td>{item.variationRelationComment || "변형 관계 입력 필요"}</td>
                </tr>
              )) : (
                <tr><td colSpan="5">출처나 유사문항 메타데이터를 입력하면 자동으로 정리됩니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>학생 대비전략</strong>
          <span>문항 코멘트 기반</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>대상</th>
                <th>우선순위</th>
                <th>적용 문항/단원</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.focus}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export function ExamStrategyFlow({ questionItems = [] }) {
  const nodes = getExamStrategyFlowNodes(questionItems);
  return (
    <div className="analysisStrategyFlow">
      {nodes.map((node, index) => (
        <div className="analysisStrategyNode" key={node.title}>
          <strong>{node.title}</strong>
          <span>{node.detail}</span>
          {index < nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
    </div>
  );
}
