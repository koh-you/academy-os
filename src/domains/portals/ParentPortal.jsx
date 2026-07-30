import { useState } from "react";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { ParentPortalHomeworkTab } from "./ParentPortalHomeworkTab.jsx";
import { PortalMaterialsTab } from "./PortalMaterialsTab.jsx";
import { parentPortalTabs, PortalTabBar } from "./PortalTabBar.jsx";
import { PortalReportCards } from "./PortalReportCards.jsx";

export function ParentPortal({
  academyName,
  filterMaterials,
  getHomeworkStatusLabel,
  getHomeworkStatusTone,
  homeworks = [],
  isHomeworkOverdue,
  lessons = [],
  materials = [],
  onLogout,
  records = [],
  referenceDate,
  reportSnapshots = [],
  sessionStudentId,
  students = []
}) {
  const [activeTab, setActiveTab] = useState("reports");
  const student = students.find((item) => item.studentId === sessionStudentId) ?? students[0];
  const studentHomeworks = homeworks.filter((homework) => homework.studentId === student?.studentId);
  const studentReports = reportSnapshots.filter((snapshot) => snapshot.studentId === student?.studentId);
  const overdueHomeworks = studentHomeworks.filter((homework) => isHomeworkOverdue(homework));
  const parentMaterials = filterMaterials(materials, student, "parent");

  return (
    <section className="studentPortal parentPortal parentPortalMobileFirst">
      <header className="portalHeader">
        <div>
          <h1>{academyName} <span>학부모</span></h1>
          <p>{student?.name} 학부모님</p>
        </div>
        <div aria-label="학부모 계정 행동" className="portalActions" role="group">
          <span className="portalDate">달력 {referenceDate}</span>
          <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
        </div>
      </header>

      <section className="panel studentWorkPanel">
        <PortalTabBar activeTab={activeTab} className="parentTabs" onChange={setActiveTab} tabs={parentPortalTabs} />

        {activeTab === "reports" ? (
          <div className="homeworkStack">
            {studentReports.length === 0 ? (
              <EmptyState
                className="emptyPortalPanel"
                description="수업 후 선생님이 보고서를 발송하면 여기에 표시됩니다."
                title="아직 발송된 보고서가 없습니다."
              />
            ) : null}
            <PortalReportCards reports={studentReports} />
          </div>
        ) : null}

        {activeTab === "homework" ? (
          <ParentPortalHomeworkTab
            getStatusLabel={getHomeworkStatusLabel}
            getStatusTone={getHomeworkStatusTone}
            homeworks={studentHomeworks}
            isOverdue={isHomeworkOverdue}
            overdueCount={overdueHomeworks.length}
            records={records}
          />
        ) : null}

        {activeTab === "materials" ? <PortalMaterialsTab materials={parentMaterials} emptyMessage="아직 공개된 자료가 없습니다." /> : null}

        {activeTab === "attendance" ? (
          <EmptyState
            className="emptyPortalPanel"
            description="추후 등하원 시간이 표시됩니다."
            title="출결앱 연동 전입니다."
          />
        ) : null}

        {activeTab === "curriculum" ? (
          <EmptyState className="emptyPortalPanel" title="아직 커리큘럼이 설정되지 않았습니다." />
        ) : null}
      </section>
    </section>
  );
}
