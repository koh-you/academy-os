import { useEffect, useState } from "react";
import { HelpTip } from "../../shared/components/HelpTip.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";

/**
 * 2026-10-02 · 시험대비 수업의 알림톡 줄.
 *
 * 전에는 `데일리 알림톡 사용` 체크박스가 화면을 일반 수업일지로 **바꿔치웠다**. 알림톡 하나
 * 쓰자고 학교별 참여 관리 화면을 통째로 떠나야 했다(돌아오는 버튼은 수업일지 머리에 있었지만,
 * 그래도 화면을 오가야 했다 · 2026-10-02 보고). 이제 화면은 그대로 두고 여기서 알림톡까지
 * 끝낸다.
 *
 * 저장과 예약은 분리한다. 체크박스는 "이 수업도 알림톡을 보낸다" 는 **설정**만 바꾸고,
 * Solapi 실제 예약·취소는 옆 버튼을 눌러야 일어난다. 예약은 되돌리기 어려운 바깥 행동이라
 * 체크 한 번에 딸려 나가면 안 된다.
 */
export function ExamPrepNotificationBar({
  isEnabled = false,
  lesson = {},
  onApplyPlan,
  onToggleEnabled,
  scheduledLabel = ""
}) {
  const [state, setState] = useState({ message: "", state: "idle" });

  useEffect(() => {
    setState({ message: "", state: "idle" });
  }, [lesson.lessonId]);

  async function applyPlan() {
    setState({ message: "Solapi 반영 확인 중", state: "saving" });
    try {
      const result = await onApplyPlan(lesson.lessonId);
      if (result?.ok === false) {
        setState({ message: `Solapi 반영 실패 · ${result.error || "예약 확인 필요"}`, state: "failed" });
        return;
      }
      setState({
        message: isEnabled
          ? `Solapi 예약 반영 완료 · ${result?.reservedCount ?? 0}건`
          : `Solapi 예약 취소 반영 완료 · ${result?.canceledCount ?? 0}건`,
        state: "saved"
      });
    } catch (error) {
      setState({ message: error.message || "Solapi 반영에 실패했습니다.", state: "failed" });
    }
  }

  const isBusy = state.state === "saving";

  return (
    <div aria-label="시험대비 알림톡" className="examPrepNotificationBar" role="group">
      <label className="examPrepDailyJournalToggle">
        <input
          checked={isEnabled}
          disabled={isBusy}
          onChange={(event) => onToggleEnabled(lesson.lessonId, event.target.checked)}
          type="checkbox"
        />
        알림톡 사용
      </label>
      <div className="helpTipTitleRow">
        <span className="examPrepNotificationSchedule">
          {isEnabled ? scheduledLabel || "예약 시각 미정" : "보내지 않음"}
        </span>
        <HelpTip
          label="시험대비 알림톡"
          text="체크는 설정만 바꿉니다. Solapi 실제 예약·취소는 [Solapi 반영]을 눌러야 일어납니다. 보내는 내용은 오른쪽에 적은 강의 내용과 코멘트, 그리고 출결입니다."
        />
      </div>
      <button className="softButton compact" disabled={isBusy} onClick={applyPlan} type="button">
        {isBusy ? "반영 중" : "Solapi 반영"}
      </button>
      {state.state === "idle" ? null : (
        <span aria-label="시험대비 알림톡 반영 상태" className="examPrepNotificationStatus" role="status">
          <InlineSaveStatus label="알림톡" saveState={state.state} />
          {state.message ? <small>{state.message}</small> : null}
        </span>
      )}
    </div>
  );
}
