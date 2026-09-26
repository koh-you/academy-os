function text(value = "") {
  return String(value ?? "").trim();
}

export function sortWithdrawnStudents(students = [], sortBy = "name") {
  return [...students].sort((left, right) => {
    if (sortBy === "withdrawn_date") {
      const dateDifference = text(right.withdrawnAt).localeCompare(text(left.withdrawnAt));
      if (dateDifference) return dateDifference;
    }
    const nameDifference = text(left.name).localeCompare(text(right.name), "ko");
    if (nameDifference) return nameDifference;
    return text(left.studentId).localeCompare(text(right.studentId));
  });
}

// 2026-09-19 · UI U8: 재원생 목록(전체/반별 탭)의 클라이언트 검색·정렬. 저장 원천은 건드리지 않는 표시 전용 로직.
function normalizeSearchText(value = "") {
  return text(value).toLowerCase().replace(/[\s-]/g, "");
}

export function filterStudentsBySearch(students = [], query = "") {
  const needle = normalizeSearchText(query);
  if (!needle) return students;
  return students.filter((student) => (
    [student.name, student.schoolName, student.studentPhone, student.parentPhone]
      .some((field) => normalizeSearchText(field).includes(needle))
  ));
}

const schoolLevelRank = { 초: 0, 중: 1, 고: 2 };

function getGradeRank(grade = "") {
  const value = text(grade);
  const match = value.match(/^(초|중|고)\s*(\d+)?/);
  if (!match) return { level: 3, number: 0, value };
  return { level: schoolLevelRank[match[1]], number: Number(match[2] ?? 0), value };
}

function compareByName(left, right) {
  return text(left.name).localeCompare(text(right.name), "ko") ||
    text(left.studentId).localeCompare(text(right.studentId));
}

export function sortActiveStudents(students = [], sortBy = "name", templates = []) {
  const templateOrder = new Map(templates.map((template, index) => [template.classTemplateId, index]));
  return [...students].sort((left, right) => {
    if (sortBy === "grade") {
      const leftGrade = getGradeRank(left.grade);
      const rightGrade = getGradeRank(right.grade);
      return (leftGrade.level - rightGrade.level) ||
        (leftGrade.number - rightGrade.number) ||
        leftGrade.value.localeCompare(rightGrade.value, "ko", { numeric: true }) ||
        compareByName(left, right);
    }
    if (sortBy === "class") {
      // 반 순서는 반관리 목록 순(templates 순)이고, 미배정은 맨 뒤다.
      const leftOrder = templateOrder.get(left.defaultClassTemplateId) ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = templateOrder.get(right.defaultClassTemplateId) ?? Number.MAX_SAFE_INTEGER;
      return (leftOrder - rightOrder) || compareByName(left, right);
    }
    return compareByName(left, right);
  });
}
