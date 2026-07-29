export function createPreExamGeneratedKey(event = {}) {
  const sourceId =
    event.eventId ||
    `${event.schoolName}_${event.grade}_${
      event.examSubject || event.subject || "math"
    }_${event.date}`;
  return `generated:pre_exam:${sourceId}`;
}
