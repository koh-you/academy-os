import { Modal } from "../../shared/components/Modal.jsx";
import { createLessonJournalStudentPreviewModel } from "./lessonJournalStudentPreviewModel.js";

const ignorePreviewHomeworkCheck = () => {};

export function LessonJournalStudentPreviewModal({
  PortalComponent,
  homeworks,
  lessons,
  makeupTasks,
  materials,
  onClose,
  records,
  studentPreviewId,
  students
}) {
  const model = createLessonJournalStudentPreviewModel({
    studentPreviewId,
    students
  });

  if (!model.isOpen) return null;

  return (
    <Modal
      backdropClassName="studentPortalPreviewBackdrop"
      className="studentPortalPreviewModal"
      title="학생 화면 미리보기"
      subtitle="강사가 보는 학생 포털 화면입니다."
      onClose={onClose}
    >
      <PortalComponent
        homeworks={homeworks}
        lessons={lessons}
        materials={materials}
        makeupTasks={makeupTasks}
        records={records}
        reportSnapshots={[]}
        scoreRecords={[]}
        sessionStudentId={studentPreviewId}
        students={model.previewStudents}
        previewMode
        onLogout={onClose}
        onStudentCheckHomework={ignorePreviewHomeworkCheck}
      />
    </Modal>
  );
}
