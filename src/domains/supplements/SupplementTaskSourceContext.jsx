import { HelpTip } from "../../shared/components/HelpTip.jsx";

export function SupplementTaskSourceContext({
  absenceLessonContent,
  absenceLessonMaterial,
  absenceNextHomework,
  absencePreviousHomework,
  absenceSourceDate,
  absenceSourceLabel,
  sourceDate,
  sourceDueDate,
  sourceHomeworkTitle,
  supplementHomeworkNote,
  taskType
}) {
  return (
    <>
      {taskType === "homework_makeup" ? (
        <div className="supplementSourceSummary">
          <div>
            <span>원 숙제 배정일</span>
            <strong>{sourceDate || "기록 없음"}</strong>
            {sourceDueDate ? <small>마감/검사일 {sourceDueDate}</small> : null}
          </div>
          <div>
            <div className="helpTipTitleRow">
              <span>그날까지 해야 했던 숙제</span>
              <HelpTip label="그날까지 해야 했던 숙제" text="원 숙제 기록을 아래 확인 카드에 그대로 사용합니다." />
            </div>
            <strong>{sourceHomeworkTitle}</strong>
          </div>
        </div>
      ) : null}
      {taskType === "absence_makeup" ? (
        <div className="supplementSourceSummary absenceSourceSummary">
          <div>
            <span>원 결석 수업</span>
            <strong>{absenceSourceDate || "기록 없음"}</strong>
            <small>{absenceSourceLabel}</small>
          </div>
          <div>
            <span>그날 수업 내용</span>
            <strong>{absenceLessonContent || "기록 없음"}</strong>
            <small>{absenceLessonMaterial ? `교재: ${absenceLessonMaterial}` : "교재 기록 없음"}</small>
          </div>
          <div>
            <div className="helpTipTitleRow">
              <span>그날 확인할 지난 숙제</span>
              <HelpTip label="그날 확인할 지난 숙제" text="지난 숙제가 있으면 아래 확인 카드와 알림톡 초안에 자동 반영합니다." />
            </div>
            <strong>{absencePreviousHomework || "기록 없음"}</strong>
          </div>
          <div>
            <div className="helpTipTitleRow">
              <span>그날 새로 나간 숙제</span>
              <HelpTip label="그날 새로 나간 숙제" text="보강 후 이어갈 숙제 맥락입니다." />
            </div>
            <strong>{absenceNextHomework || "기록 없음"}</strong>
          </div>
        </div>
      ) : null}
      <div className="supplementReadableGrid">
        {["homework_makeup", "absence_makeup"].includes(taskType) ? (
          <div className="supplementHomeworkSourceCard">
            <strong>{taskType === "absence_makeup" ? "보강 때 확인할 지난 숙제" : "등원해서 확인할 숙제"}</strong>
            <span>
              {taskType === "absence_makeup"
                ? "원 결석 수업의 지난 숙제를 자동으로 가져옵니다. 이 카드에서는 수정하지 않습니다."
                : "보충관리로 연결된 원 숙제를 자동으로 가져옵니다. 이 카드에서는 수정하지 않습니다."}
            </span>
            <p>{supplementHomeworkNote || "지난 숙제 기록 없음"}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
