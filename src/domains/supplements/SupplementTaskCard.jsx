import { SupplementNotificationDraftWorkspace } from "./SupplementNotificationDraftWorkspace.jsx";
import { SupplementTaskActionBar } from "./SupplementTaskActionBar.jsx";
import { SupplementTaskCardHeader } from "./SupplementTaskCardHeader.jsx";
import { SupplementTaskSaveSummary, SupplementTaskScheduleGateNote } from "./SupplementTaskSaveSummary.jsx";
import { SupplementTaskScheduleEditor } from "./SupplementTaskScheduleEditor.jsx";
import { SupplementTaskSourceContext } from "./SupplementTaskSourceContext.jsx";

export function SupplementTaskCard({ actionProps, headerProps, notificationProps, saveSummaryProps, scheduleEditorProps, scheduleGateProps, sourceContextProps }) {
  return (
    <article className="taskCard">
      <SupplementTaskCardHeader {...headerProps} />
      <SupplementTaskSourceContext {...sourceContextProps} />
      <SupplementTaskScheduleEditor {...scheduleEditorProps} />
      <SupplementTaskSaveSummary {...saveSummaryProps} />
      <SupplementNotificationDraftWorkspace {...notificationProps} />
      <SupplementTaskScheduleGateNote {...scheduleGateProps} />
      <SupplementTaskActionBar {...actionProps} />
    </article>
  );
}
