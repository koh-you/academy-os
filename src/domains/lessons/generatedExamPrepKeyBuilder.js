export function getExamPrepGeneratedKeyForDate(date = "") {
  return date ? `generated:exam_prep:${date}` : "";
}
