export const problemStatusMeta = {
  selected: { label: "선택", shortLabel: "선택", className: "selected" },
  first: { label: "첫회 맞음", shortLabel: "첫회", className: "first" },
  retry: { label: "한번 틀림", shortLabel: "한번 틀림", className: "retry" },
  mistake: { label: "실수/확실히 앎", shortLabel: "실수", className: "mistake" },
  second: { label: "2회차 맞음", shortLabel: "2회차", className: "second" },
  wrong: { label: "두번 틀림", shortLabel: "두번 틀림", className: "wrong" },
  question: { label: "질문 전", shortLabel: "질문 전", className: "question" },
  outOfScope: { label: "범위 제외", shortLabel: "범위x", className: "outOfScope" },
  unchecked: { label: "미체크", shortLabel: "미체크", className: "unchecked" }
};

export const problemClickCycle = ["first", "retry", "wrong", "mistake"];

export function countProblemStatuses(problems = []) {
  return Object.keys(problemStatusMeta).reduce((counts, status) => {
    counts[status] = problems.filter((problem) => problem.status === status).length;
    return counts;
  }, {});
}
