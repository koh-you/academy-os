import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";

function composeAppWithLessonJournalSource(appSource, lessonJournalDetailSource) {
  const modalStart = appSource.indexOf("function PreparationMemoModal({");
  const modalEnd = appSource.indexOf("function ReportModal({", modalStart);
  const lessonJournalModalSource = appSource.slice(modalStart, modalEnd);
  return [
    appSource,
    lessonJournalDetailSource,
    lessonJournalModalSource,
    "function ReportModal({"
  ].join("\n");
}

export async function readAppWithLessonJournalSource(baseUrl) {
  const [appSource, lessonJournalDetailSource] = await Promise.all([
    readFile(new URL("../src/app/App.jsx", baseUrl), "utf8"),
    readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", baseUrl), "utf8")
  ]);
  return composeAppWithLessonJournalSource(appSource, lessonJournalDetailSource);
}

export function readAppWithLessonJournalSourceSync(baseUrl) {
  return composeAppWithLessonJournalSource(
    readFileSync(new URL("../src/app/App.jsx", baseUrl), "utf8"),
    readFileSync(new URL("../src/domains/lessons/LessonJournalDetail.jsx", baseUrl), "utf8")
  );
}
