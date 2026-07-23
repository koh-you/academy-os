import { NotificationComposerPanel } from "./NotificationComposerPanel.jsx";
import { NotificationRecipientPanel } from "./NotificationRecipientPanel.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";

export function NotificationComposeWorkspace({
  composerPanelProps,
  noticeRecipientCount,
  recipientPanelProps
}) {
  return (
    <section className="notificationPanel noticeComposerPanel">
      <SectionHeader
        density="slim"
        eyebrow="MESSAGE CENTER"
        meta={<span className="countBadge">수신 {noticeRecipientCount}건</span>}
        title="개별 발송"
      />

      <div className="noticeComposerGrid">
        <NotificationRecipientPanel {...recipientPanelProps} />
        <NotificationComposerPanel {...composerPanelProps} />
      </div>
    </section>
  );
}
