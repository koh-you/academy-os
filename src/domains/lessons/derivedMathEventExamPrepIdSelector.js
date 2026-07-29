export function getExamPrepIdFromDerivedMathEvent(
  sourceSchoolEventId = "",
  rows = []
) {
  const sourceId = String(sourceSchoolEventId || "");
  if (!sourceId.startsWith("derived_math_")) return "";
  const sourceTail = sourceId.replace(
    /^derived_math_/,
    ""
  );
  return (
    rows.find((row) =>
      sourceTail.startsWith(`${row.examPrepId}_`)
    )?.examPrepId || ""
  );
}
