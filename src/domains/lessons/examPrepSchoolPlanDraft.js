import { normalizeTimeInput } from "./attendance.js";
import { createExamPrepSchoolKey } from "./examPrepSchoolPlan.js";

/**
 * 2026-10-01 · 학교별 참여·시간을 **한 번에** 저장하기 위한 초안과 변경 추출.
 *
 * 처음에는 학교 행마다 [시간 저장][이 날짜 제외] 두 버튼을 달았다. 학교가 다섯이면 버튼이
 * 열 개라 화면이 버튼으로 덮였고, 제외하면 그 행이 사라져 저장 표시도 같이 사라져서 저장이
 * 됐는지 알 수 없었다(2026-10-01 보고). 수업일지처럼 **칸을 고치고 저장 하나**로 바꾼다.
 *
 * 여기서는 순수 계산만 한다 — 초안 만들기, 바뀐 것 추출, 유효성. 저장은 App 이 기존 시험대비
 * 일정 저장 경로(CAS·서버 재조회)로 한 번에 보낸다.
 */
export function createExamPrepSchoolPlanDraft({
  excludedSchools = [],
  schoolRows = [],
  studentRows = []
} = {}) {
  const schools = [
    ...schoolRows.map((row) => ({
      endTime: normalizeTimeInput(row.endTime) || "",
      isIncluded: true,
      isMixedTime: Boolean(row.isMixedTime),
      schoolKey: createExamPrepSchoolKey(row.schoolName),
      schoolName: row.schoolName,
      startTime: normalizeTimeInput(row.startTime) || "",
      studentIds: [...row.studentIds]
    })),
    // 제외한 학교는 명단에서 사라져 schoolRows 에 없다. 같은 목록에 "제외됨" 으로 남겨야
    // 체크 한 번으로 되돌릴 수 있다 — 따로 칩으로 빼면 어디서 되돌리는지 찾기 어려웠다.
    ...excludedSchools.map((entry) => ({
      endTime: "",
      isIncluded: false,
      isMixedTime: false,
      schoolKey: entry.schoolKey,
      schoolName: entry.schoolName,
      startTime: "",
      studentIds: []
    }))
  ].sort((left, right) => left.schoolName.localeCompare(right.schoolName, "ko", { numeric: true }));

  const studentTimes = {};
  studentRows.forEach((row) => {
    studentTimes[row.studentId] = {
      endTime: normalizeTimeInput(row.endTime) || "",
      startTime: normalizeTimeInput(row.startTime) || ""
    };
  });

  return { schools, studentTimes };
}

function getSchoolByKey(draft = {}, schoolKey = "") {
  return (draft.schools ?? []).find((school) => school.schoolKey === schoolKey) ?? null;
}

export function setExamPrepSchoolPlanDraftField(draft = {}, schoolKey = "", field = "", value = "") {
  return {
    ...draft,
    schools: (draft.schools ?? []).map((school) => (
      school.schoolKey === schoolKey ? { ...school, [field]: value } : school
    ))
  };
}

export function setExamPrepSchoolPlanDraftStudentTime(draft = {}, studentId = "", field = "", value = "") {
  return {
    ...draft,
    studentTimes: {
      ...draft.studentTimes,
      [studentId]: { ...draft.studentTimes?.[studentId], [field]: value }
    }
  };
}

/**
 * 초안과 원본을 대조해 "실제로 바꾼 것" 만 뽑는다.
 *
 * - 학교 시간: 시작·종료가 둘 다 있고 원본과 다른 학교. 그 학교 학생 전원에게 적용한다.
 * - 학생 시간: 학교 시간을 건드리지 않은 학교의 학생 중 값이 달라진 학생. 학교 단위로
 *   덮어쓴 학교는 학생 변경을 버린다 — 같은 저장 안에서 두 의도가 겹치면 어느 쪽이 이겼는지
 *   화면만 보고 알 수 없다.
 * - 제외/다시 포함: 체크 상태가 뒤집힌 학교.
 */
export function getExamPrepSchoolPlanChanges(draft = {}, initialDraft = {}) {
  const schoolTimes = [];
  const toExclude = [];
  const toInclude = [];
  const overwrittenSchoolKeys = new Set();

  (draft.schools ?? []).forEach((school) => {
    const before = getSchoolByKey(initialDraft, school.schoolKey);
    if (!before) return;
    if (school.isIncluded !== before.isIncluded) {
      (school.isIncluded ? toInclude : toExclude).push({
        schoolKey: school.schoolKey,
        schoolName: school.schoolName
      });
    }
    if (!school.isIncluded) return;
    const startTime = normalizeTimeInput(school.startTime) || "";
    const endTime = normalizeTimeInput(school.endTime) || "";
    if (!startTime || !endTime) return;
    if (startTime === before.startTime && endTime === before.endTime) return;
    schoolTimes.push({
      endTime,
      schoolKey: school.schoolKey,
      schoolName: school.schoolName,
      startTime,
      studentIds: [...school.studentIds]
    });
    overwrittenSchoolKeys.add(school.schoolKey);
  });

  const schoolKeyByStudentId = new Map();
  (draft.schools ?? []).forEach((school) => {
    school.studentIds.forEach((studentId) => schoolKeyByStudentId.set(studentId, school.schoolKey));
  });

  const studentTimes = Object.entries(draft.studentTimes ?? {})
    .filter(([studentId]) => !overwrittenSchoolKeys.has(schoolKeyByStudentId.get(studentId)))
    .map(([studentId, value]) => ({
      endTime: normalizeTimeInput(value?.endTime) || "",
      startTime: normalizeTimeInput(value?.startTime) || "",
      studentId
    }))
    .filter((entry) => {
      const before = initialDraft.studentTimes?.[entry.studentId];
      if (!before) return false;
      if (!entry.startTime || !entry.endTime) return false;
      return entry.startTime !== before.startTime || entry.endTime !== before.endTime;
    });

  return { schoolTimes, studentTimes, toExclude, toInclude };
}

export function hasExamPrepSchoolPlanChanges(changes = {}) {
  return Boolean(
    (changes.schoolTimes ?? []).length ||
    (changes.studentTimes ?? []).length ||
    (changes.toExclude ?? []).length ||
    (changes.toInclude ?? []).length
  );
}

/**
 * 저장 전에 사람이 고칠 수 있는 입력 오류만 막는다. 그 외(서버 충돌, 수업기록이 걸린 학생)는
 * 서버가 판단한다.
 */
export function getExamPrepSchoolPlanValidationError(draft = {}, changes = {}) {
  const invalidRange = [
    ...(changes.schoolTimes ?? []),
    ...(changes.studentTimes ?? [])
  ].find((entry) => entry.endTime <= entry.startTime);
  if (invalidRange) return "시작 시간보다 늦은 종료 시간을 입력해 주세요.";
  const partialSchool = (draft.schools ?? [])
    .filter((school) => school.isIncluded)
    .find((school) => Boolean(school.startTime) !== Boolean(school.endTime));
  if (partialSchool) return `${partialSchool.schoolName}의 시작·종료 시간을 모두 입력해 주세요.`;
  const includedCount = (draft.schools ?? []).filter((school) => school.isIncluded).length;
  if (includedCount === 0) {
    return "모든 학교를 빼려면 이 수업 자체를 삭제하세요. 한 학교 이상 남겨야 합니다.";
  }
  return "";
}
