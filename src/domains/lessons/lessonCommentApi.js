import { apiFetch } from "../../shared/utils/apiClient.js";

/**
 * Requests AI-polished comment text. Owns only the request/response
 * contract for POST /api/ai/comment-polish — the optimistic "AI 수정 중"/
 * "실패" record status updates around this call are React state management
 * that stays in App.jsx's handlePolishLessonComment, not this action's job.
 *
 * @returns {Promise<{ polishedText: string, provider: string }>}
 */
export async function requestCommentPolish(payload) {
  const response = await apiFetch("/api/ai/comment-polish", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "코멘트 AI 수정에 실패했습니다.");
  }
  return result.result;
}

/**
 * Sends (or dry-run schedules) a comment Alimtalk notification. Owns only
 * the request/response contract for POST /api/notifications/comment-alimtalk
 * — building the notification log/job records and their state updates stays
 * in App.jsx's handleSendLessonComment.
 */
export async function requestCommentAlimtalk(notificationPayload) {
  const response = await apiFetch("/api/notifications/comment-alimtalk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notificationPayload)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "코멘트 알림톡 발송 실패");
  }
  return result;
}
