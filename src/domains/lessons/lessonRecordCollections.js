// 수업·수업기록 목록을 다루는 순수 헬퍼.
//
// App.jsx 안에 있던 것을 꺼냈다. 출결 태블릿 전용 진입점(kioskMain.jsx)이 App.jsx 를
// 통째로 불러오지 않고도 같은 규칙을 쓰려면 이 로직이 공용이어야 한다.
// 복사본을 만들면 규칙이 갈라지므로, App.jsx 도 여기서 가져다 쓴다.

import { academyOperationalStartDate } from "../../app/appConfig.js";

/** 달력·명단에서 살아 있는 수업으로 취급할지. 운영 시작일 이전과 취소·삭제는 제외. */
export function isActiveLesson(lesson) {
  return (
    lesson?.date >= academyOperationalStartDate &&
    !["canceled", "deleted"].includes(lesson?.status ?? "scheduled")
  );
}

export function activeLessonIdSet(lessons = []) {
  return new Set(lessons.filter(isActiveLesson).map((lesson) => lesson.lessonId));
}

export function filterActiveLessons(lessons = []) {
  return lessons.filter(isActiveLesson);
}

export function filterRecordsForLessons(records = [], lessons = []) {
  const lessonIds = activeLessonIdSet(lessons);
  return records.filter((record) => lessonIds.has(record.lessonId));
}

export function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

/**
 * 수업기록을 갱신한다. id 가 있으면 id 로, 없으면 (수업, 학생) 조합으로 같은 행을 찾는다.
 * 같은 조합이 여러 개면 하나로 합친다(중복 행이 쌓이는 것을 막는다).
 */
export function upsertLessonStudentRecord(records = [], nextRecord = {}) {
  if (!nextRecord?.lessonStudentRecordId && (!nextRecord?.lessonId || !nextRecord?.studentId)) {
    return upsertById(records, nextRecord, "lessonStudentRecordId");
  }
  let didReplace = false;
  const nextRecords = [];
  records.forEach((record) => {
    const isSameRecord =
      (nextRecord.lessonStudentRecordId && record.lessonStudentRecordId === nextRecord.lessonStudentRecordId) ||
      (record.lessonId === nextRecord.lessonId && record.studentId === nextRecord.studentId);
    if (!isSameRecord) {
      nextRecords.push(record);
      return;
    }
    if (!didReplace) {
      nextRecords.push(nextRecord);
      didReplace = true;
    }
  });
  return didReplace ? nextRecords : [...records, nextRecord];
}
