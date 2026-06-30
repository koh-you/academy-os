import { normalizeExamOutputLayoutChoices } from "./finalDocument.js";

export const examOutputLayoutOptions = [
  {
    key: "teacher",
    title: "강사용 분석지",
    options: [
      { code: "A", name: "대시보드형", frame: "dashboard", slots: ["meta", "table", "chart", "list"] },
      { code: "B", name: "문항카드형", frame: "cardGrid", slots: ["meta", "card", "card", "card", "summary"] },
      { code: "C", name: "리포트형", frame: "report", slots: ["cover", "section", "section", "table", "flow"] }
    ]
  },
  {
    key: "student",
    title: "학생 분석지",
    options: [
      { code: "A", name: "복습 로드맵형", frame: "roadmap", slots: ["hero", "step", "step", "step", "check"] },
      { code: "B", name: "문항 태그형", frame: "tagBoard", slots: ["meta", "tag", "tag", "tag", "task"] },
      { code: "C", name: "한 장 피드백형", frame: "dashboard", slots: ["hero", "table", "chart", "list"] }
    ]
  },
  {
    key: "blog",
    title: "블로그 초안",
    options: [
      { code: "A", name: "홍보형 글 구조", frame: "article", slots: ["title", "paragraph", "section", "section", "cta"] },
      { code: "B", name: "전문 분석형", frame: "analysisArticle", slots: ["title", "table", "chart", "section", "cta"] },
      { code: "C", name: "카드뉴스 재활용형", frame: "articleCards", slots: ["title", "card", "card", "card", "cta"] }
    ]
  },
  {
    key: "instagram",
    title: "인스타 카드뉴스",
    options: [
      { code: "A", name: "5장 요약형", frame: "slides5", slots: ["slide", "slide", "slide", "slide", "slide"] },
      { code: "B", name: "7장 분석형", frame: "slides7", slots: ["slide", "slide", "slide", "slide", "slide", "slide", "slide"] },
      { code: "C", name: "문항 중심형", frame: "slides7", slots: ["slide", "slide", "slide", "slide", "slide", "slide", "slide"] }
    ]
  }
];

function ExamOutputLayoutWireframe({ option }) {
  return (
    <div className={`examOutputWireframe ${option.frame}`} aria-label={`${option.name} 레이아웃 구조`}>
      {option.slots.map((slot, index) => (
        <span className={`wireSlot ${slot}`} key={`${option.code}_${slot}_${index}`} />
      ))}
    </div>
  );
}

export function ExamOutputLayoutPlanner({ value, onChange }) {
  const selectedChoices = normalizeExamOutputLayoutChoices(value);

  function selectLayout(groupKey, optionCode) {
    onChange?.(normalizeExamOutputLayoutChoices({
      ...selectedChoices,
      [groupKey]: optionCode
    }));
  }

  return (
    <article className="panel examOutputLayoutPlanner">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">LAYOUT OPTIONS</p>
          <h2>산출물별 레이아웃 선택안</h2>
          <p className="muted">내용 없이 영역 구조만 먼저 확인합니다. 형식을 고정한 뒤 같은 데이터로 매번 분석지를 제작합니다.</p>
        </div>
      </div>
      <div className="examOutputLayoutGrid">
        {examOutputLayoutOptions.map((group) => (
          <section className="examOutputLayoutGroup" key={group.title}>
            <h3>{group.title}<span>{selectedChoices[group.key]}안</span></h3>
            <div>
              {group.options.map((option) => {
                const isSelected = selectedChoices[group.key] === option.code;
                return (
                  <button
                    aria-pressed={isSelected}
                    className={isSelected ? "examOutputLayoutOption selected" : "examOutputLayoutOption"}
                    key={`${group.title}_${option.code}`}
                    onClick={() => selectLayout(group.key, option.code)}
                    type="button"
                  >
                    <div>
                      <strong>{option.code}안</strong>
                      <span>{option.name}</span>
                      <i>{isSelected ? "선택됨" : "선택"}</i>
                    </div>
                    <ExamOutputLayoutWireframe option={option} />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
