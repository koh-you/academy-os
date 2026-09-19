// 수업 명단 선택자: 달력 pill 인원수용 ID 선택자는 수업일지 명단과 같은 학생을 고른다.
//
// 달력은 렌더마다 그 달의 모든 수업 pill 에 인원수를 붙이는데, 2026-09-19 까지는 그때마다
// 수업일지용 선택자(이름 정렬 + students.find)를 불러 "(N명)" 하나에 Intl 정렬을 했다.
// 정렬 없는 ID 선택자를 따로 두되, 누가 명단에 있는지(퇴원 경계 #258)는 반드시 같아야 한다.
import assert from "node:assert/strict";
import {
  getLessonJournalStudentIds,
  getLessonJournalStudents
} from "../src/domains/students/lessonRosterSelectors.js";

const students = [
  { name: "박지현", status: "active", studentId: "s-park" },
  { name: "강민준", status: "active", studentId: "s-kang" },
  // 9/10 에 퇴원 처리 — 9/10 수업까지는 명단에 보이고 9/11 부터는 빠진다.
  { name: "홍길동", status: "paused", studentId: "s-hong", withdrawnAt: "2026-09-10T00:00:00.000Z" },
  // 휴원(퇴원일 없음)은 그대로 보인다.
  { name: "이서연", status: "paused", studentId: "s-lee" },
  { name: "최유진", status: "active", studentId: "s-choi" }
];
const rosterIds = ["s-hong", "s-park", "s-kang", "s-lee", "s-ghost"];

for (const date of ["2026-09-10", "2026-09-11"]) {
  const lesson = { classTemplateId: "t1", date, lessonId: `lesson-${date}`, startTime: "19:00", studentIds: rosterIds };
  const journalIds = getLessonJournalStudents(lesson, students).map((student) => student.studentId);
  const pillIds = getLessonJournalStudentIds(lesson, students);
  assert.deepEqual([...pillIds].sort(), [...journalIds].sort(), `${date}: pill 인원과 수업일지 명단이 같은 학생이어야 한다`);
  assert.equal(pillIds.length, journalIds.length);
  assert.ok(!pillIds.includes("s-ghost"), "students 에 없는 ID 는 세지 않는다");
}
assert.deepEqual(getLessonJournalStudentIds({ date: "2026-09-10", studentIds: rosterIds }, students), ["s-hong", "s-park", "s-kang", "s-lee"]);
assert.deepEqual(getLessonJournalStudentIds({ date: "2026-09-11", studentIds: rosterIds }, students), ["s-park", "s-kang", "s-lee"]);
// students 가 비어 있으면 명단 ID 를 확인할 수 없으므로 아무도 세지 않는다(수업일지 명단과 같은 답).
assert.deepEqual(getLessonJournalStudentIds({ date: "2026-09-10", studentIds: rosterIds }, []), []);
assert.deepEqual(getLessonJournalStudents({ date: "2026-09-10", studentIds: rosterIds }, []), []);

// 정렬은 수업일지 쪽만 한다 — ID 선택자는 명단 순서를 그대로 둔다(이름 정렬 비용 없음).
assert.deepEqual(
  getLessonJournalStudents({ date: "2026-09-10", studentIds: rosterIds }, students).map((student) => student.name),
  ["강민준", "박지현", "이서연", "홍길동"]
);

console.log("lesson roster selectors: pill 인원수 ID 선택자와 수업일지 명단 일치 · 퇴원 경계 · 정렬 분리 통과");
