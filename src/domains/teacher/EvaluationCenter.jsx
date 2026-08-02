import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function EvaluationCenter({
  academyTests,
  scoreRecords,
  wrongProblems
}) {
  return (
    <section className="panel fullPanel evaluationCenter">
      <SectionHeader
        description="보고서에 쓰이는 학생별 데이터 원천을 확인합니다. 입력과 수정은 학생관리의 학생 프로파일에서 진행합니다."
        title="보고서 데이터"
        titleAs="h1"
      />
      <div className="reportDataSummaryGrid">
        <MetricCard density="compact" hint="학생별 개인 탭에서 관리" label="교재오답" value={`${wrongProblems.length}개`} />
        <MetricCard density="compact" hint="학생 프로파일 성적 기록" label="내신/모의고사" value={`${scoreRecords.length}개`} />
        <MetricCard density="compact" hint="학생 프로파일 테스트 성적" label="테스트 성적" value={`${academyTests.length}개`} />
      </div>
    </section>
  );
}

function StudentSelect({ label = "학생 선택", students, value, onChange }) {
  return (
    <select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)}>
      {students.map((student) => (
        <option key={student.studentId} value={student.studentId}>{student.name}</option>
      ))}
    </select>
  );
}
