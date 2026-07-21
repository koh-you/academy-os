import { PortalMaterialsTab } from "./PortalMaterialsTab.jsx";
import { PortalReportCards } from "./PortalReportCards.jsx";
import { PortalTabBar, studentPortalTabs } from "./PortalTabBar.jsx";
import { StudentAllHomeworkTab } from "./StudentAllHomeworkTab.jsx";
import { StudentMyPageTab } from "./StudentMyPageTab.jsx";
import { StudentPortalMetrics } from "./StudentPortalMetrics.jsx";
import { StudentEmptyTab, StudentEvaluationTab } from "./PortalStaticTabs.jsx";
import { StudentTodayTab } from "./StudentTodayTab.jsx";

export function StudentPortalShell({
  academyName,
  activeTab,
  allHomework,
  currentDate,
  materials,
  metrics,
  myPage,
  onChangeActiveTab,
  onChangeSelectedStudentId,
  onLogout,
  previewMode,
  reports,
  selectedStudent,
  students,
  today
}) {
  return (
    <section className={previewMode ? "studentPortal studentPortalTabletFirst teacherPreviewPortal" : "studentPortal studentPortalTabletFirst"}>
      <header className="portalHeader">
        <div>
          <h1>{academyName} <span>학생</span></h1>
          <p>{selectedStudent?.name} ({selectedStudent?.grade})</p>
        </div>
        <div className="portalActions">
          {previewMode ? (
            <button className="logoutButton" onClick={onLogout} type="button">관리 화면으로</button>
          ) : null}
          <button className="portalIconButton" type="button">💬</button>
          <span className="portalDate">🗓 {currentDate}</span>
          <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
          {!previewMode ? (
            <label className="compactSelect">
              학생 선택
              <select value={selectedStudent?.studentId ?? ""} onChange={(event) => onChangeSelectedStudentId(event.target.value)}>
                {students.map((student) => (
                  <option key={student.studentId} value={student.studentId}>{student.name}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      </header>

      <StudentPortalMetrics {...metrics} />

      <section className="panel studentWorkPanel">
        <PortalTabBar activeTab={activeTab} onChange={onChangeActiveTab} tabs={studentPortalTabs} />

        {activeTab === "today" ? <StudentTodayTab {...today} /> : null}
        {activeTab === "all" ? <StudentAllHomeworkTab {...allHomework} /> : null}
        {activeTab === "materials" ? <PortalMaterialsTab materials={materials} emptyMessage="아직 공개된 자료가 없습니다." /> : null}
        {activeTab === "curriculum" ? <StudentEmptyTab message="아직 커리큘럼이 설정되지 않았습니다. 선생님께 문의하세요." /> : null}
        {activeTab === "evaluation" ? <StudentEvaluationTab /> : null}
        {activeTab === "mypage" ? <StudentMyPageTab {...myPage} /> : null}
      </section>

      <section className="panel">
        <h2>최근 리포트</h2>
        {reports.length === 0 ? <p className="muted">아직 공개된 리포트 초안이 없습니다.</p> : null}
        <PortalReportCards reports={reports.slice(0, 3)} />
      </section>
    </section>
  );
}
