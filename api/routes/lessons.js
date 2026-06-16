import { sampleData } from "../../src/shared/data/sampleData.js";

export function listLessonsByDate(date) {
  return sampleData.lessons.filter((lesson) => lesson.date === date);
}

export function getLessonDetail(lessonId) {
  const lesson = sampleData.lessons.find((item) => item.lessonId === lessonId);

  if (!lesson) {
    return null;
  }

  return {
    lesson,
    students: lesson.studentIds.map((studentId) =>
      sampleData.students.find((student) => student.studentId === studentId)
    ),
    records: sampleData.lessonStudentRecords.filter((record) => record.lessonId === lessonId)
  };
}
