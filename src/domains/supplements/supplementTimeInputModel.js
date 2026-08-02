export const supplementHourOptions = Array.from({ length: 24 }, (_, hour) => String(hour).padStart(2, "0"));
export const supplementMinuteOptions = Array.from({ length: 12 }, (_, index) => String(index * 5).padStart(2, "0"));

export function splitSupplementTime(value = "") {
  const match = String(value).match(/^(\d{2}):(\d{2})/);
  return {
    hour: match?.[1] ?? "",
    minute: match?.[2] ?? "00"
  };
}

export function updateSupplementTimePart(value = "", part = "hour", nextValue = "") {
  const { hour, minute } = splitSupplementTime(value);
  if (part === "hour") return nextValue ? `${nextValue}:${minute || "00"}` : "";
  if (!hour) return "";
  return `${hour}:${nextValue || "00"}`;
}
