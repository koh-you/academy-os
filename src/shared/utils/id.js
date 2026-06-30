export function safeIdPart(value = "") {
  return String(value)
    .trim()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^0-9A-Za-z가-힣_-]/g, "")
    .slice(0, 40);
}

export function shortStableHash(value = "") {
  let hash = 0;
  for (const char of String(value)) {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6);
}
