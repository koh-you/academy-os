import { safeIdPart, shortStableHash } from "../../shared/utils/id.js";

function formatExamCycleLabel(examCycle) {
  const [, semester, phase] = String(examCycle).match(/^20\d{2}-(1|2)-(mid|final)$/) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${phase === "mid" ? "중간고사" : "기말고사"}`;
}

export function getExamAnalysisFolderMeta(source = {}) {
  const examCycle = String(source.examCycle ?? source.folderExamCycle ?? "").trim();
  const examName = String(source.folderExamName ?? source.examName ?? (examCycle ? formatExamCycleLabel(examCycle) : "")).trim();
  return {
    schoolName: String(source.folderSchoolName ?? source.schoolName ?? "").trim(),
    grade: String(source.folderGrade ?? source.grade ?? "").trim(),
    subject: String(source.folderSubject ?? source.subject ?? "").trim(),
    examCycle,
    examName
  };
}

export function createExamAnalysisFolderId(source = {}) {
  const meta = getExamAnalysisFolderMeta(source);
  const key = [
    meta.schoolName || "school",
    meta.grade || "grade",
    meta.examName || meta.examCycle || "exam"
  ].join("_");
  return `exam_folder_${safeIdPart(key) || "default"}_${shortStableHash(key)}`;
}

export function createExamAnalysisSchoolId(source = {}) {
  const schoolName = String(source.schoolName ?? source.folderSchoolName ?? "").trim() || "학교 미입력";
  return `exam_school_${safeIdPart(schoolName) || "school"}_${shortStableHash(schoolName)}`;
}

export function getExamAnalysisFolderTitle(folder = {}) {
  const meta = getExamAnalysisFolderMeta(folder);
  return [
    meta.schoolName || "학교 미입력",
    meta.grade || "학년 미입력",
    meta.examName || "고사 미입력"
  ].join(" · ");
}

export function normalizeExamAnalysisFolder(folder = {}) {
  const meta = getExamAnalysisFolderMeta(folder);
  const nowIso = new Date().toISOString();
  const folderId = folder.folderId || folder.analysisFolderId || createExamAnalysisFolderId(meta);
  return {
    folderId,
    folderType: folder.folderType || "exam",
    folderName: String(folder.folderName ?? "").trim() || getExamAnalysisFolderTitle(meta),
    schoolName: meta.schoolName,
    grade: meta.grade,
    subject: meta.subject,
    examCycle: meta.examCycle,
    examName: meta.examName,
    createdAt: folder.createdAt || nowIso,
    updatedAt: folder.updatedAt || nowIso
  };
}

export function normalizeExamAnalysisSchoolFolder(folder = {}) {
  const nowIso = new Date().toISOString();
  const schoolName = String(folder.schoolName ?? folder.folderSchoolName ?? "").trim();
  const folderId = folder.folderId || createExamAnalysisSchoolId({ schoolName });
  return {
    folderId,
    folderType: "school",
    schoolName,
    folderName: String(folder.folderName ?? schoolName ?? "").trim() || "학교 미입력",
    createdAt: folder.createdAt || nowIso,
    updatedAt: folder.updatedAt || nowIso
  };
}

export function createExamAnalysisFolderDraft(folder = {}, options = {}) {
  const defaultExamCycle = options.defaultExamCycle || folder.examCycle || "";
  const getExamCycleLabel = typeof options.getExamCycleLabel === "function" ? options.getExamCycleLabel : (value) => value || "";
  const defaultExamName = options.defaultExamName ?? (defaultExamCycle ? getExamCycleLabel(defaultExamCycle) : "");
  const normalized = normalizeExamAnalysisFolder({
    examCycle: defaultExamCycle,
    examName: defaultExamName,
    ...folder
  });
  return {
    folderId: folder.folderId || normalized.folderId,
    folderType: "exam",
    schoolName: normalized.schoolName,
    grade: normalized.grade,
    subject: normalized.subject || "수학",
    examCycle: normalized.examCycle || defaultExamCycle,
    examName: normalized.examName || defaultExamName,
    folderName: normalized.folderName
  };
}

export function createExamAnalysisSchoolDraft(folder = {}) {
  const normalized = normalizeExamAnalysisSchoolFolder(folder);
  return {
    folderId: folder.folderId || normalized.folderId,
    folderType: "school",
    schoolName: normalized.schoolName,
    folderName: normalized.folderName,
    previousSchoolName: folder.previousSchoolName ?? normalized.schoolName
  };
}

export function applyExamAnalysisFolderToAnalysis(analysis = {}, folder = {}) {
  const normalizedFolder = normalizeExamAnalysisFolder(folder);
  return {
    ...analysis,
    analysisFolderId: normalizedFolder.folderId,
    schoolName: normalizedFolder.schoolName,
    grade: normalizedFolder.grade,
    subject: normalizedFolder.subject || analysis.subject || "",
    examCycle: normalizedFolder.examCycle || analysis.examCycle || "",
    examName: normalizedFolder.examName,
    updatedAt: new Date().toISOString()
  };
}

export function getExamAnalysisFolderId(analysis = {}) {
  return analysis.analysisFolderId || createExamAnalysisFolderId(analysis);
}

export function isExamAnalysisSchoolFolder(folder = {}) {
  if (folder.folderType === "school") return true;
  return Boolean(folder.schoolName) && !folder.grade && !folder.examName && !folder.examCycle;
}

export function buildExamAnalysisFolderList(analyses = [], savedFolders = []) {
  const folderMap = new Map();
  savedFolders.forEach((folder) => {
    if (isExamAnalysisSchoolFolder(folder)) return;
    const normalized = normalizeExamAnalysisFolder(folder);
    folderMap.set(normalized.folderId, { ...normalized, analyses: [], persisted: true });
  });
  analyses.forEach((analysis) => {
    const folderId = getExamAnalysisFolderId(analysis);
    const existing = folderMap.get(folderId) ?? {
      ...normalizeExamAnalysisFolder({ ...analysis, folderId }),
      analyses: [],
      persisted: false
    };
    const normalizedAnalysis = {
      ...analysis,
      analysisFolderId: folderId
    };
    existing.analyses.push(normalizedAnalysis);
    const analysisUpdatedAt = analysis.updatedAt || analysis.aiLastRunAt || analysis.createdAt || "";
    if (analysisUpdatedAt && (!existing.latestAnalysisAt || analysisUpdatedAt > existing.latestAnalysisAt)) {
      existing.latestAnalysisAt = analysisUpdatedAt;
    }
    folderMap.set(folderId, existing);
  });
  return [...folderMap.values()]
    .map((folder) => ({
      ...folder,
      analyses: folder.analyses.sort((a, b) => String(b.updatedAt || b.aiLastRunAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.aiLastRunAt || a.createdAt || "")))
    }))
    .sort((a, b) => {
      const timeCompare = String(b.latestAnalysisAt || b.updatedAt || "").localeCompare(String(a.latestAnalysisAt || a.updatedAt || ""));
      if (timeCompare !== 0) return timeCompare;
      return getExamAnalysisFolderTitle(a).localeCompare(getExamAnalysisFolderTitle(b), "ko");
    });
}

export function getExamAnalysisGradeSortValue(grade = "") {
  const gradeNumber = String(grade).match(/\d/)?.[0];
  return gradeNumber ? Number(gradeNumber) : 99;
}

export function getExamAnalysisExamSortValue(folder = {}) {
  const [yearText, semesterText, phase] = String(folder.examCycle ?? "").split("-");
  const year = Number(yearText) || 0;
  const semester = Number(semesterText) || 0;
  const phaseOrder = phase === "mid" ? 1 : phase === "final" ? 2 : 9;
  return `${String(9999 - year).padStart(4, "0")}-${semester}-${phaseOrder}-${folder.examName ?? ""}`;
}

export function buildExamAnalysisLibraryTree(analyses = [], savedFolders = []) {
  const schoolMap = new Map();
  const schoolIdByName = new Map();
  savedFolders.forEach((folder) => {
    if (!isExamAnalysisSchoolFolder(folder)) return;
    const normalized = normalizeExamAnalysisSchoolFolder(folder);
    schoolIdByName.set(normalized.schoolName || "학교 미입력", normalized.folderId);
  });

  function ensureSchool(source = {}) {
    const schoolName = String(source.schoolName ?? "").trim() || "학교 미입력";
    const schoolId = source.folderType === "school" && source.folderId
      ? source.folderId
      : schoolIdByName.get(schoolName) || createExamAnalysisSchoolId({ schoolName });
    const existing = schoolMap.get(schoolId) ?? {
      folderId: schoolId,
      folderType: "school",
      schoolName,
      folderName: schoolName,
      grades: new Map(),
      persisted: false,
      createdAt: source.createdAt || "",
      updatedAt: source.updatedAt || ""
    };
    existing.schoolName = source.schoolName || existing.schoolName;
    existing.folderName = source.folderName || existing.folderName || existing.schoolName;
    existing.persisted = existing.persisted || source.folderType === "school" || false;
    if (source.updatedAt && (!existing.updatedAt || source.updatedAt > existing.updatedAt)) existing.updatedAt = source.updatedAt;
    schoolMap.set(schoolId, existing);
    return existing;
  }

  function ensureGrade(school, grade = "") {
    const gradeKey = String(grade || "학년 미입력").trim();
    const existing = school.grades.get(gradeKey) ?? {
      grade: gradeKey,
      exams: new Map(),
      analysisCount: 0
    };
    school.grades.set(gradeKey, existing);
    return existing;
  }

  function ensureExam(school, source = {}) {
    const normalized = normalizeExamAnalysisFolder({ ...source, folderType: "exam" });
    const grade = ensureGrade(school, normalized.grade);
    const existing = grade.exams.get(normalized.folderId) ?? {
      ...normalized,
      folderType: "exam",
      analyses: [],
      persisted: Boolean(source.folderId),
      analysisCount: 0
    };
    existing.schoolName = normalized.schoolName || school.schoolName;
    existing.grade = normalized.grade;
    existing.subject = normalized.subject || existing.subject;
    existing.examCycle = normalized.examCycle || existing.examCycle;
    existing.examName = normalized.examName || existing.examName;
    existing.folderName = normalized.folderName || existing.folderName;
    existing.persisted = existing.persisted || Boolean(source.folderId);
    if (source.updatedAt && (!existing.updatedAt || source.updatedAt > existing.updatedAt)) existing.updatedAt = source.updatedAt;
    grade.exams.set(normalized.folderId, existing);
    return existing;
  }

  savedFolders.forEach((folder) => {
    if (isExamAnalysisSchoolFolder(folder)) {
      ensureSchool(normalizeExamAnalysisSchoolFolder(folder));
      return;
    }
    const normalized = normalizeExamAnalysisFolder({ ...folder, folderType: "exam" });
    const school = ensureSchool({ schoolName: normalized.schoolName });
    ensureExam(school, normalized);
  });

  analyses.forEach((analysis) => {
    const normalizedAnalysis = {
      ...analysis,
      analysisFolderId: getExamAnalysisFolderId(analysis)
    };
    const school = ensureSchool({ schoolName: normalizedAnalysis.schoolName });
    const exam = ensureExam(school, {
      ...normalizedAnalysis,
      folderId: normalizedAnalysis.analysisFolderId,
      folderType: "exam"
    });
    exam.analyses.push(normalizedAnalysis);
    exam.analysisCount += 1;
    const grade = ensureGrade(school, exam.grade);
    grade.analysisCount += 1;
  });

  return [...schoolMap.values()]
    .map((school) => {
      const grades = [...school.grades.values()]
        .map((grade) => ({
          ...grade,
          exams: [...grade.exams.values()]
            .map((exam) => ({
              ...exam,
              analyses: exam.analyses.sort((a, b) => String(b.updatedAt || b.aiLastRunAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.aiLastRunAt || a.createdAt || "")))
            }))
            .sort((a, b) => getExamAnalysisExamSortValue(a).localeCompare(getExamAnalysisExamSortValue(b), "ko"))
        }))
        .sort((a, b) => getExamAnalysisGradeSortValue(a.grade) - getExamAnalysisGradeSortValue(b.grade) || a.grade.localeCompare(b.grade, "ko"));
      return {
        ...school,
        grades,
        analysisCount: grades.reduce((sum, grade) => sum + grade.analysisCount, 0),
        examCount: grades.reduce((sum, grade) => sum + grade.exams.length, 0)
      };
    })
    .sort((a, b) => a.schoolName.localeCompare(b.schoolName, "ko"));
}
