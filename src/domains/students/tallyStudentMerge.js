const tallyStudentMergeFields = [
  { field: "name", label: "이름" },
  { field: "birthYear", label: "출생연도" },
  { field: "schoolName", label: "학교" },
  { field: "grade", label: "학년" },
  { field: "studentPhone", label: "학생전화" },
  { field: "parentPhone", label: "학부모전화" },
  { field: "specialNote", label: "특이사항" },
  { field: "defaultClassTemplateId", label: "정규반" }
];

export const specialLectureTallyStudentFields = [
  "name",
  "schoolName",
  "grade",
  "studentPhone",
  "parentPhone",
  "specialNote"
];

function normalizeText(value = "") {
  return String(value ?? "").trim();
}

function isActiveStudent(student = {}) {
  return (student.status ?? "active") === "active" && !student.withdrawnAt;
}

export function getTallyStudentValues(source = {}) {
  return {
    name: normalizeText(source.name ?? source.studentName),
    birthYear: normalizeText(source.birthYear),
    schoolName: normalizeText(source.schoolName),
    grade: normalizeText(source.grade),
    studentPhone: normalizeText(source.studentPhone),
    parentPhone: normalizeText(source.parentPhone),
    specialNote: normalizeText(source.specialNote),
    defaultClassTemplateId: normalizeText(source.defaultClassTemplateId)
  };
}

export function getTallyStudentMergeChanges(student = {}, source = {}) {
  const values = getTallyStudentValues(source);
  return tallyStudentMergeFields
    .filter(({ field }) => values[field] && normalizeText(student[field]) !== values[field])
    .map(({ field, label }) => ({
      field,
      label,
      previousValue: normalizeText(student[field]),
      nextValue: values[field]
    }));
}

export function mergeTallyStudentValues(student = {}, source = {}) {
  const values = getTallyStudentValues(source);
  const updates = Object.fromEntries(
    tallyStudentMergeFields
      .filter(({ field }) => values[field])
      .map(({ field }) => [field, values[field]])
  );
  return {
    ...student,
    ...updates
  };
}

export function getTallyStudentReplacementChanges(student = {}, source = {}, options = {}) {
  const values = getTallyStudentValues(source);
  const ownedFields = new Set(options.fields ?? tallyStudentMergeFields.map(({ field }) => field));
  return tallyStudentMergeFields
    .filter(({ field }) => ownedFields.has(field) && normalizeText(student[field]) !== values[field])
    .map(({ field, label }) => ({
      field,
      label,
      previousValue: normalizeText(student[field]),
      nextValue: values[field],
      clearsExistingValue: Boolean(normalizeText(student[field]) && !values[field])
    }));
}

export function replaceTallyStudentValues(student = {}, source = {}, options = {}) {
  const values = getTallyStudentValues(source);
  const ownedFields = options.fields ?? tallyStudentMergeFields.map(({ field }) => field);
  const replacements = Object.fromEntries(ownedFields.map((field) => [field, values[field] ?? ""]));
  return {
    ...student,
    ...replacements
  };
}

export function getTallyStudentMergeCandidates(source = {}, students = []) {
  const values = getTallyStudentValues(source);
  const sourceName = normalizeText(values.name).replace(/\s+/g, "").toLowerCase();
  const sourceSchool = normalizeText(values.schoolName).replace(/\s+/g, "").toLowerCase();
  const sourceGrade = normalizeText(values.grade).replace(/\s+/g, "").toLowerCase();
  return students
    .filter(isActiveStudent)
    .map((student) => {
      const studentName = normalizeText(student.name).replace(/\s+/g, "").toLowerCase();
      const studentSchool = normalizeText(student.schoolName).replace(/\s+/g, "").toLowerCase();
      const studentGrade = normalizeText(student.grade).replace(/\s+/g, "").toLowerCase();
      const nameMatch = Boolean(sourceName && studentName === sourceName);
      const contextMatch = nameMatch &&
        (!sourceSchool || !studentSchool || sourceSchool === studentSchool) &&
        (!sourceGrade || !studentGrade || sourceGrade === studentGrade);
      return { student, nameMatch, contextMatch };
    })
    .sort((left, right) => (
      Number(right.contextMatch) - Number(left.contextMatch) ||
      Number(right.nameMatch) - Number(left.nameMatch) ||
      String(left.student.name ?? "").localeCompare(String(right.student.name ?? ""), "ko", {
        numeric: true,
        sensitivity: "base"
      }) ||
      String(left.student.studentId ?? "").localeCompare(String(right.student.studentId ?? ""))
    ))
    .map(({ student }) => student);
}

export function getDefaultTallyStudentId(source = {}, students = []) {
  const values = getTallyStudentValues(source);
  const sourceName = normalizeText(values.name).replace(/\s+/g, "").toLowerCase();
  if (!sourceName) return "";
  const nameMatches = students
    .filter(isActiveStudent)
    .filter((student) => normalizeText(student.name).replace(/\s+/g, "").toLowerCase() === sourceName);
  const contextualMatches = nameMatches.filter((student) => {
    const schoolName = normalizeText(student.schoolName).replace(/\s+/g, "").toLowerCase();
    const grade = normalizeText(student.grade).replace(/\s+/g, "").toLowerCase();
    const sourceSchool = normalizeText(values.schoolName).replace(/\s+/g, "").toLowerCase();
    const sourceGrade = normalizeText(values.grade).replace(/\s+/g, "").toLowerCase();
    return (
      (!sourceSchool || !schoolName || sourceSchool === schoolName) &&
      (!sourceGrade || !grade || sourceGrade === grade)
    );
  });
  return contextualMatches.length === 1 ? contextualMatches[0].studentId : "";
}
