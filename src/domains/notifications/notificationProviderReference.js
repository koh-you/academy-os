export function getNotificationProviderReference(result = {}) {
  return (
    result?.response?.groupInfo?.groupId ||
    result?.response?.groupInfo?._id ||
    result?.response?.messageList?.[0]?.messageId ||
    result?.response?.failedMessageList?.[0]?.messageId ||
    result?.response?.messageId ||
    result?.response?.message_id ||
    result?.response?.groupId ||
    result?.response?.group_id ||
    result?.result?.response?.groupInfo?.groupId ||
    result?.result?.response?.messageList?.[0]?.messageId ||
    result?.result?.response?.groupId ||
    result?.groupId ||
    result?.messageId ||
    ""
  );
}
