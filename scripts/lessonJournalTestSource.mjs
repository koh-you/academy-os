import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";

function composeAppWithLessonJournalSource(
  appSource,
  lessonJournalDetailSource,
  lessonJournalDraftControllerSource,
  lessonNestedPanelsSource
) {
  const commentComposerStart = appSource.indexOf("function CommentComposerModal({");
  const commentComposerEnd = appSource.indexOf("function ReportModal({", commentComposerStart);
  const preparationMemoStart = lessonNestedPanelsSource.indexOf("export function PreparationMemoModal({");
  const preparationMemoSource = lessonNestedPanelsSource.slice(preparationMemoStart);
  const lessonJournalModalSource = [
    preparationMemoSource,
    appSource.slice(commentComposerStart, commentComposerEnd)
  ].join("\n");
  return [
    appSource,
    lessonJournalDetailSource,
    lessonJournalDraftControllerSource,
    lessonJournalModalSource,
    "function ReportModal({"
  ].join("\n");
}

export async function readAppWithLessonJournalSource(baseUrl) {
  const [appSource, lessonJournalDetailSource, lessonJournalDraftControllerSource, lessonNestedPanelsSource] = await Promise.all([
    readFile(new URL("../src/app/App.jsx", baseUrl), "utf8"),
    readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", baseUrl), "utf8"),
    readFile(new URL("../src/domains/lessons/useLessonJournalDraftController.js", baseUrl), "utf8"),
    readFile(new URL("../src/domains/lessons/LessonNestedPanels.jsx", baseUrl), "utf8")
  ]);
  return composeAppWithLessonJournalSource(
    appSource,
    lessonJournalDetailSource,
    lessonJournalDraftControllerSource,
    lessonNestedPanelsSource
  );
}

export function readAppWithLessonJournalSourceSync(baseUrl) {
  return composeAppWithLessonJournalSource(
    readFileSync(new URL("../src/app/App.jsx", baseUrl), "utf8"),
    readFileSync(new URL("../src/domains/lessons/LessonJournalDetail.jsx", baseUrl), "utf8"),
    readFileSync(new URL("../src/domains/lessons/useLessonJournalDraftController.js", baseUrl), "utf8"),
    readFileSync(new URL("../src/domains/lessons/LessonNestedPanels.jsx", baseUrl), "utf8")
  );
}
