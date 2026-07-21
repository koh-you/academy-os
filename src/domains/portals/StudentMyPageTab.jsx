import { useState } from "react";

function formatHomeworkDoneCount(value) {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1).replace(/\.0$/, "");
}

export function calculateAttendanceStats(records = []) {
  const counts = records.reduce(
    (acc, record) => {
      const status = record.attendanceStatus || "pending";
      if (status === "present") acc.present += 1;
      if (status === "late") acc.late += 1;
      if (status === "absent") acc.absent += 1;
      if (status === "unexcused") acc.unexcused += 1;
      return acc;
    },
    { present: 0, late: 0, absent: 0, unexcused: 0 }
  );
  const total = counts.present + counts.late + counts.absent + counts.unexcused;
  const rate = (value) => (total ? Math.round((value / total) * 100) : 0);
  const calendarDays = {};
  records.forEach((record) => {
    const day = Number(String(record.lesson?.date || "").split("-")[2]);
    if (!day) return;
    if (record.attendanceStatus === "present") calendarDays[day] = "present";
    if (record.attendanceStatus === "late") calendarDays[day] = "late";
    if (record.attendanceStatus === "absent") calendarDays[day] = "absent";
    if (record.attendanceStatus === "unexcused") calendarDays[day] = "unexcused";
  });
  return {
    ...counts,
    total,
    attendanceRate: rate(counts.present + counts.late),
    presentRate: rate(counts.present),
    lateRate: rate(counts.late),
    absentRate: rate(counts.absent),
    unexcusedRate: rate(counts.unexcused),
    calendarDays
  };
}

function ProgressLine({ label, suffix, value }) {
  return (
    <div className="progressLine">
      <div><strong>{label}</strong><span>{suffix}</span></div>
      <div className="progressRail"><span style={{ width: `${value}%` }} /></div>
    </div>
  );
}

function StudentCalendar({ legend = [], markedDays = {}, title = "숙제 이행 달력" }) {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className="studentCalendar">
      <h3>{title}</h3>
      <strong>2026년 6월</strong>
      <div className="miniCalendarGrid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
        {days.map((day) => {
          const dayState = markedDays[day] ?? "";
          return <span className={dayState ? `marked ${dayState}` : ""} key={day}>{day}</span>;
        })}
      </div>
      {legend.length ? (
        <div className="calendarLegend">
          {legend.map(([state, label]) => (
            <span key={state}><i className={state} />{label}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function StudentMyPageTab({
  attendanceStats = calculateAttendanceStats([]),
  myPageTab,
  onChangeTab,
  scoreRecords = [],
  selectedStudent,
  stats,
  studentLessonComments = []
}) {
  const [statsTab, setStatsTab] = useState("homework");
  const schoolScoreSubjects = ["중1-1", "중2-1", "중3-1", "중3-2", "공통수학1", "공통수학2", "대수", "미적분1", "기하", "미적분", "확통"];

  function findScore(subject, examKeyword) {
    return scoreRecords.find((record) => {
      const target = `${record.subject ?? ""} ${record.examType ?? ""} ${record.note ?? ""}`;
      return target.includes(subject) && target.includes(examKeyword);
    });
  }

  return (
    <div className="myPagePanel">
      <div className="subTabs">
        {[
          ["stats", "통계"],
          ["log", "활동 로그"],
          ["info", "내 정보"]
        ].map(([id, label]) => (
          <button className={myPageTab === id ? "active" : ""} key={id} onClick={() => onChangeTab(id)} type="button">
            {label}
          </button>
        ))}
      </div>

      {myPageTab === "stats" ? (
        <>
          <div className="subTabs compactSubTabs">
            {[
              ["homework", "숙제통계"],
              ["attendance", "출결통계"]
            ].map(([id, label]) => (
              <button className={statsTab === id ? "active" : ""} key={id} onClick={() => setStatsTab(id)} type="button">
                {label}
              </button>
            ))}
          </div>
          {statsTab === "homework" ? (
            <>
              <div className="miniMetricGrid">
                <div><strong>{stats.completionRate}%</strong><span>전체 이행률</span></div>
                <div><strong>{stats.perfectDays}</strong><span>완벽한 날 (30일)</span></div>
                <div><strong>{stats.total}</strong><span>등록 숙제</span></div>
              </div>
              <div className="progressList">
                <h3>숙제 이행률</h3>
                <ProgressLine label="2026년 06월" value={stats.completionRate} suffix={`${formatHomeworkDoneCount(stats.done)}/${stats.total}개 · ${stats.completionRate}%`} />
              </div>
              <StudentCalendar
                title="숙제 이행 달력"
                legend={[
                  ["done", "이행"],
                  ["missed", "미이행"]
                ]}
                markedDays={stats.calendarDays}
              />
            </>
          ) : null}
          {statsTab === "attendance" ? (
            <>
              <div className="attendanceMetricGrid">
                <div className="present"><strong>{attendanceStats.present}</strong><span>등원</span></div>
                <div className="late"><strong>{attendanceStats.late}</strong><span>지각</span></div>
                <div className="absent"><strong>{attendanceStats.absent}</strong><span>결석</span></div>
                <div className="unexcused"><strong>{attendanceStats.unexcused}</strong><span>무단결석</span></div>
              </div>
              <div className="progressList">
                <div className="attendanceRateBox">
                  <strong>{attendanceStats.total ? `${attendanceStats.attendanceRate}%` : "-"}</strong>
                  <span>등원률 (등원 + 지각)</span>
                </div>
                <ProgressLine label="등원" value={attendanceStats.presentRate} suffix={`${attendanceStats.present}회 · ${attendanceStats.presentRate}%`} />
                <ProgressLine label="지각" value={attendanceStats.lateRate} suffix={`${attendanceStats.late}회 · ${attendanceStats.lateRate}%`} />
                <ProgressLine label="결석" value={attendanceStats.absentRate} suffix={`${attendanceStats.absent}회 · ${attendanceStats.absentRate}%`} />
                <ProgressLine label="무단결석" value={attendanceStats.unexcusedRate} suffix={`${attendanceStats.unexcused}회 · ${attendanceStats.unexcusedRate}%`} />
              </div>
              <StudentCalendar
                title={`${selectedStudent?.name ?? "학생"} · 출결 달력`}
                legend={[
                  ["present", "등원"],
                  ["late", "지각"],
                  ["absent", "결석"],
                  ["unexcused", "무단"]
                ]}
                markedDays={attendanceStats.calendarDays}
              />
            </>
          ) : null}
        </>
      ) : null}

      {myPageTab === "log" ? (
        <div className="taskStack">
          {studentLessonComments.length === 0 ? (
            <div className="emptyPortalPanel">아직 선생님이 보낸 학생 코멘트가 없습니다.</div>
          ) : (
            studentLessonComments.map((record) => (
              <article className="studentHomeworkCard" key={record.lessonStudentRecordId}>
                <div className="homeworkCardTop">
                  <div>
                    <strong>{record.lesson?.date ?? "날짜 없음"} 선생님 코멘트</strong>
                    <span>{record.lesson?.className ?? "수업"} · {record.studentCommentSendStatus}</span>
                  </div>
                </div>
                <p>{record.studentComment}</p>
              </article>
            ))
          )}
        </div>
      ) : null}

      {myPageTab === "info" ? (
        <>
          <div className="profileCard">
            <h2>기본 정보</h2>
            <div className="fieldGrid four">
              <label>이름<input readOnly value={selectedStudent?.name ?? ""} /></label>
              <label>학교<input readOnly value={selectedStudent?.schoolName ?? ""} /></label>
              <label>출생연도<input readOnly value={selectedStudent?.birthYear ?? ""} /></label>
              <label>학년<input readOnly value={selectedStudent?.grade ?? ""} /></label>
            </div>
          </div>
          <div className="profileCard">
            <h2>학교 성적</h2>
            <div className="studentGradeTableWrap">
              <table className="gradeTable studentGradeTable">
                <thead>
                  <tr>
                    <th rowSpan="2">과목</th>
                    <th colSpan="3">중간</th>
                    <th colSpan="3">기말</th>
                  </tr>
                  <tr>
                    <th>원점수</th>
                    <th>등수</th>
                    <th>등급</th>
                    <th>원점수</th>
                    <th>등수</th>
                    <th>등급</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolScoreSubjects.map((subject) => {
                    const midterm = findScore(subject, "중간");
                    const finalTerm = findScore(subject, "기말");
                    return (
                      <tr key={subject}>
                        <td>{subject}</td>
                        <td>{midterm?.score || "-"}</td>
                        <td>{midterm?.rank || "-"}</td>
                        <td>{midterm?.grade || "-"}</td>
                        <td>{finalTerm?.score || "-"}</td>
                        <td>{finalTerm?.rank || "-"}</td>
                        <td>{finalTerm?.grade || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="profileCard passwordPanel">
            <h2>비밀번호 변경</h2>
            <div className="fieldGrid three">
              <label>현재 비밀번호<input type="password" placeholder="현재 PIN" /></label>
              <label>새 비밀번호<input type="password" placeholder="4자리 이상" /></label>
              <label>새 비밀번호 확인<input type="password" placeholder="다시 입력" /></label>
            </div>
            <button className="primaryButton" type="button">비밀번호 변경</button>
          </div>
        </>
      ) : null}
    </div>
  );
}
