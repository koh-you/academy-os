import { NotificationComposerPanel } from "./NotificationComposerPanel.jsx";
import { NotificationRecipientPanel } from "./NotificationRecipientPanel.jsx";

export function NotificationComposeWorkspace({
  composerPanelProps,
  noticeRecipientCount,
  recipientPanelProps
}) {
  return (
    <section className="notificationPanel noticeComposerPanel">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">MESSAGE CENTER</p>
          <h2>개별 발송</h2>
        </div>
        <span className="countBadge">수신 {noticeRecipientCount}건</span>
      </div>

      <div className="noticeComposerGrid">
        <NotificationRecipientPanel {...recipientPanelProps} />
        <NotificationComposerPanel {...composerPanelProps} />
      </div>
    </section>
  );
}
