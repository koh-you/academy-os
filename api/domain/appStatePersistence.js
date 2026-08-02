export function createAppStateVersionFilter(key, expectedUpdatedAt) {
  return [
    `state_key=eq.${encodeURIComponent(key)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function isAppStateInsertConflict(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return (
    message.includes("23505") ||
    message.includes("duplicate key") ||
    message.includes("unique constraint")
  );
}

export function createAppStateConflictError(key) {
  const error = new Error(
    `다른 화면에서 ${key} 설정이 먼저 저장되었습니다. 현재 입력은 유지했으니 새로고침 후 다시 확인해 주세요.`
  );
  error.code = "APP_STATE_CONFLICT";
  error.statusCode = 409;
  return error;
}
