export function createNotificationJobsQueryString({
  lessonId = "",
  scheduledFrom = "",
  scheduledTo = "",
  scope = "active"
} = {}) {
  const query = new URLSearchParams();
  if (lessonId) {
    query.set("lessonId", lessonId);
    query.set("limit", "200");
  } else if (scope === "history") {
    query.set("limit", "300");
    if (scheduledFrom && scheduledTo) {
      query.set("scheduledFrom", scheduledFrom);
      query.set("scheduledTo", scheduledTo);
    }
  } else {
    query.set("limit", "300");
    query.set("status", "draft,scheduled,failed,send_unconfirmed");
  }
  return query.toString();
}
