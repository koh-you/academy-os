import { getLessonJournalStudents } from "../students/lessonRosterSelectors.js";
import { isStaleDeploymentChunkError } from "../../shared/utils/dynamicImportError.js";
import { NavigationHeader } from "../../shared/components/NavigationHeader.jsx";

export function LessonJournalFallback({ error, lesson, onBack, onDeleteLesson, onEditLesson, students = [] }) {
  const lessonStudents = getLessonJournalStudents(lesson, students);
  const errorMessage = String(error?.message ?? error ?? "알 수 없는 오류");
  const isStaleDeploymentChunk = isStaleDeploymentChunkError(error);
  return (
    <section className="lessonJournalPage">
      <NavigationHeader
        actions={(
          <>
            <button className="softButton" onClick={() => onEditLesson?.(lesson)} type="button">수업 수정</button>
            <button className="dangerButton" onClick={() => onDeleteLesson?.(lesson.lessonId)} type="button">수업 취소 처리</button>
          </>
        )}
        className="lessonJournalHeader"
        description={`${lesson?.date || "-"} · ${lesson?.startTime || ""}-${lesson?.endTime || ""} · ${lessonStudents.length}명`}
        leading={<button aria-label="수업 목록으로 돌아가기" className="iconButton" onClick={onBack} type="button">‹</button>}
        title={lesson?.className || "수업일지"}
        titleAs="h2"
      />
      <section className="panel lessonJournalFallback">
        <strong>수업일지를 여는 중 오류가 발생했습니다.</strong>
        <p>
          {isStaleDeploymentChunk
            ? "새 버전 배포 뒤 이전 화면 코드가 남아 수업메모를 불러오지 못했습니다. 저장된 수업 정보는 유지되며, 최신 화면으로 새로고침하면 다시 열 수 있습니다."
            : "수업 정보는 저장되어 있습니다. 수업 수정에서 학생과 시간을 확인한 뒤 다시 열어 주세요."}
        </p>
        {isStaleDeploymentChunk ? (
          <button className="primaryButton" onClick={() => window.location.reload()} type="button">
            최신 화면으로 새로고침
          </button>
        ) : null}
        {lessonStudents.length > 0 ? (
          <div className="studentChips">
            {lessonStudents.map((student) => (
              <span className="lessonStudentChip selected" key={student.studentId}>{student.name}</span>
            ))}
          </div>
        ) : (
          <p className="muted">이 수업에 표시할 학생을 찾지 못했습니다.</p>
        )}
        <small>{errorMessage}</small>
      </section>
    </section>
  );
}
