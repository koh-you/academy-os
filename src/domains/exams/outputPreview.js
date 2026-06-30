export function cleanPreviewText(value = "") {
  return String(value ?? "")
    .replace(/\*\*/g, "")
    .replace(/\\\|/g, "|")
    .trim();
}

export function isMarkdownTableLine(line = "") {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|") && trimmed.includes("|", 1);
}

export function isMarkdownTableDivider(line = "") {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

export function parseMarkdownTableRow(line = "") {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cleanPreviewText(cell));
}

export function parseInstagramSlides(value = "") {
  const lines = String(value ?? "").replace(/\r\n/g, "\n").split("\n");
  const slides = [];
  let current = null;

  lines.forEach((rawLine) => {
    const line = cleanPreviewText(rawLine);
    if (!line) return;
    const match = line.match(/^(?:##\s*)?(?:필드\s*)?(\d+)\s*(?:장|\(|\.|:)?\s*(.*)$/);
    if (match && Number(match[1]) >= 1 && Number(match[1]) <= 12) {
      current = { number: Number(match[1]), title: match[2] || `${match[1]}장`, lines: [] };
      slides.push(current);
      return;
    }
    if (!current) {
      current = { number: slides.length + 1, title: `${slides.length + 1}장`, lines: [] };
      slides.push(current);
    }
    current.lines.push(line);
  });

  return slides.length ? slides : [{ number: 1, title: "카드뉴스 초안", lines: ["아직 내용이 없습니다."] }];
}
