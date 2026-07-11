export const assignmentStatusOptions = [
  { value: "", label: "선택" },
  { value: "complete_thorough", label: "완료" },
  { value: "partial_80", label: "80%완료" },
  { value: "partial_50", label: "50%완료" },
  { value: "known_only", label: "아는 것만 풂" },
  { value: "too_hard", label: "난이도 높음" },
  { value: "answer_suspected", label: "풀이 재확인" },
  { value: "not_done", label: "미완료" },
  { value: "not_checked", label: "미검사" }
];

export const assignmentStatusLabels = Object.fromEntries(
  assignmentStatusOptions.map((option) => [option.value, option.label])
);

const assignmentStatusAliases = {
  "성실 완료": "complete_thorough",
  "완료": "complete_thorough",
  complete_easy: "complete_thorough",
  "쉬움": "complete_thorough",
  "80%": "partial_80",
  "80프로": "partial_80",
  "80% 완료": "partial_80",
  "80%완료": "partial_80",
  "50%": "partial_50",
  "50프로": "partial_50",
  "50% 완료": "partial_50",
  "50%완료": "partial_50",
  "아는것만품": "known_only",
  "아는 것만 품": "known_only",
  "아는 것만 풂": "known_only",
  "숙제난이도가높아 해결하지못함": "too_hard",
  "난이도 과함": "too_hard",
  "난이도 높음": "too_hard",
  "풀이가 없어서 다시확인 또는 테스트가 필요": "answer_suspected",
  "풀이 확인 필요": "answer_suspected",
  "풀이 재확인": "answer_suspected",
  "미완료": "not_done",
  "미검사": "not_checked"
};

export const assignmentStatusParentMessages = {
  complete_thorough: "과제를 성실하게 완료했습니다.",
  partial_80: "과제의 약 80%를 수행했습니다. 남은 부분은 다음 시간에 같이 확인하도록 하겠습니다.",
  partial_50: "숙제를 많이 해오지 못했습니다. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충을 하도록 하겠습니다.",
  known_only: "풀기 쉬운 문항만 풀어온 것으로 보입니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  too_hard: "과제 난이도가 높아 해결하지 못한 부분이 있었습니다. 과제 난이도를 조정해보도록 하겠습니다.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인하거나 간단한 테스트로 점검할 예정입니다.",
  not_done: "과제를 해오지 못했습니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  not_checked: "과제를 가져오지 못해 검사하지 못했습니다. 다음 시간에 같이 확인하도록 하겠습니다."
};

export const assignmentStatusStudentMessages = {
  complete_thorough: "과제를 꼼꼼하게 잘 해왔어. 열심히 하느라 수고했어~!",
  partial_80: "과제의 약 80%를 해왔어. 다음 시간부터는 깔끔하게 다 풀어오도록 하자.",
  partial_50: "숙제를 많이 해오지 못했어. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충으로 마무리하자.",
  known_only: "쉬운 문제만 풀고 넘어가면 실력이 잘 늘지 않아. 어려운 문제를 고민한 흔적까지 남겨와야 해.",
  too_hard: "난이도가 높아서 풀기 어려웠을 것 같아. 난이도를 좀 조정해보자.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인할게. 숙제는 꼭 풀이 과정을 남겨오도록 해.",
  not_done: "과제를 못 해왔어. 오늘 나간 과제까지 다음 시간에 같이 검사받고, 다 못 끝내면 추가 등원보충을 해야 할 수도 있어.",
  not_checked: "과제를 가져오지 못해서 검사하지 못했어. 다음 시간에 같이 확인하자."
};

export function normalizeAssignmentStatusValue(value) {
  const trimmedValue = String(value ?? "").trim();
  return assignmentStatusAliases[trimmedValue] ?? trimmedValue;
}

export function getAssignmentStatusParentMessage(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return assignmentStatusParentMessages[normalizedValue] ?? assignmentStatusLabels[normalizedValue] ?? "";
}

export function getAssignmentStatusStudentMessage(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return assignmentStatusStudentMessages[normalizedValue] ?? assignmentStatusLabels[normalizedValue] ?? "";
}

export function getAssignmentStatusMessage(audience, value) {
  return audience === "student" ? getAssignmentStatusStudentMessage(value) : getAssignmentStatusParentMessage(value);
}

export function getHomeworkStatusFromAssignmentStatus(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  if (normalizedValue === "complete_thorough") {
    return { status: "verified", teacherStatus: "verified" };
  }
  if (normalizedValue === "not_done") {
    return { status: "missing", teacherStatus: "missing" };
  }
  if (["partial_80", "partial_50"].includes(normalizedValue)) {
    return { status: "partial", teacherStatus: "partial" };
  }
  return { status: "assigned", teacherStatus: "unverified" };
}

export function isAssignmentStatusHomeworkMakeupCandidate(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return ["not_done", "partial_80", "partial_50"].includes(normalizedValue);
}
