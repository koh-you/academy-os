import { useEffect, useState } from "react";
import { assignmentStatusLabels, normalizeAssignmentStatusValue } from "../lessons/assignmentStatus.js";
import { getAttendanceDisplay } from "../lessons/attendance.js";
import { applyStudentScheduleToLesson } from "../../shared/utils/studentSchedule.js";

export function StudentLessonHistoryCalendar({
  buildCalendarDays,
  getHomework,
  getLessonContent,
  getLessonMaterial,
  homeworks = [],
  lessons = [],
  recordsWithLessons = [],
  referenceDate,
  selectedStudent
}) {
  const recordsByDate = recordsWithLessons.reduce((map, record) => {
    const date = record.lesson?.date;
    if (!date) return map;
    map.set(date, [...(map.get(date) ?? []), record]);
    return map;
  }, new Map());
  const initialDate = recordsWithLessons[0]?.lesson?.date ?? referenceDate;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const selectedRecords = recordsByDate.get(selectedDate) ?? [];
  const selectedRecord = selectedRecords[0] ?? null;
  const selectedLesson = selectedRecord?.lesson ?? null;
  const selectedAttendanceLesson = selectedLesson && selectedStudent
    ? applyStudentScheduleToLesson(selectedLesson, selectedStudent)
    : selectedLesson;
  const lessonMaterial = selectedRecord ? getLessonMaterial(selectedRecord, selectedStudent) : "";
  const lessonContent = selectedRecord ? getLessonContent(selectedRecord) : "";
  const previousHomework =
    selectedRecord && selectedLesson && selectedStudent
      ? getHomework(homeworks, selectedLesson, selectedStudent, "previous", lessons)
      : null;
  const nextHomework =
    selectedRecord && selectedLesson && selectedStudent
      ? getHomework(homeworks, selectedLesson, selectedStudent, "next", lessons)
      : null;
  const previousHomeworkText = previousHomework?.title || selectedRecord?.previousHomework || "";
  const nextHomeworkText = nextHomework?.title || selectedRecord?.nextHomework || "";
  const selectedAttendanceDisplay = getAttendanceDisplay(selectedRecord ?? {}, selectedAttendanceLesson);
  const selectedAttendanceTimeLabel = selectedAttendanceLesson?.startTime && selectedAttendanceLesson?.endTime
    ? `${selectedAttendanceLesson.startTime}-${selectedAttendanceLesson.endTime}`
    : selectedRecord?.lesson?.startTime && selectedRecord?.lesson?.endTime
      ? `${selectedRecord.lesson.startTime}-${selectedRecord.lesson.endTime}`
      : "시간 미입력";
  const calendarDays = buildCalendarDays(referenceDate);

  useEffect(() => {
    if (!recordsByDate.has(selectedDate) && initialDate) setSelectedDate(initialDate);
  }, [initialDate, recordsByDate, selectedDate]);

  return (
    <section className="studentLessonHistory">
      <div className="sectionHeader compact">
        <div>
          <h2>수업 기록 캘린더</h2>
          <p className="muted">날짜를 눌러 그날 수업에서 무엇을 했는지 확인합니다.</p>
        </div>
      </div>
      <div className="studentLessonHistoryGrid">
        <div className="studentLessonMiniCalendar">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
          {calendarDays.map((day) => {
            const hasRecord = recordsByDate.has(day.date);
            return (
              <button
                className={[
                  day.inMonth ? "" : "outside",
                  hasRecord ? "hasRecord" : "",
                  selectedDate === day.date ? "selected" : ""
                ].join(" ")}
                disabled={!hasRecord}
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                type="button"
              >
                <span>{Number(day.date.slice(-2))}</span>
              </button>
            );
          })}
        </div>
        <article className="studentLessonRecordCard">
          {selectedRecord ? (
            <>
              <div>
                <strong>{selectedRecord.lesson.date} · {selectedRecord.lesson.className}</strong>
                <span>{selectedAttendanceTimeLabel}</span>
              </div>
              <dl>
                <div>
                  <dt>출결</dt>
                  <dd>
                    {selectedAttendanceDisplay.label}
                    {selectedAttendanceDisplay.detail ? ` · ${selectedAttendanceDisplay.detail}` : ""}
                  </dd>
                </div>
                <div><dt>강의 교재</dt><dd>{lessonMaterial || "기록 전"}</dd></div>
                <div><dt>강의 내용</dt><dd>{lessonContent || "기록 전"}</dd></div>
                <div><dt>지난 숙제</dt><dd>{previousHomeworkText || "기록 전"}</dd></div>
                <div><dt>다음 숙제</dt><dd>{nextHomeworkText || "기록 전"}</dd></div>
                <div><dt>과제 상태</dt><dd>{assignmentStatusLabels[normalizeAssignmentStatusValue(selectedRecord.assignmentStatus)] ?? selectedRecord.incompleteHomework ?? "선택 전"}</dd></div>
                {selectedRecord.studentComment?.trim() ? (
                  <div><dt>선생님 코멘트</dt><dd>{selectedRecord.studentComment}</dd></div>
                ) : null}
                {selectedRecord.prepStudentVisible && selectedRecord.prepStudentNotice?.trim() ? (
                  <div><dt>준비 메모</dt><dd>{selectedRecord.prepStudentNotice}</dd></div>
                ) : null}
              </dl>
            </>
          ) : (
            <div className="emptyHomeworkBox">아직 확인할 수업 기록이 없습니다.</div>
          )}
        </article>
      </div>
    </section>
  );
}
