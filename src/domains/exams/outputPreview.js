export function cleanPreviewText(value = "") {
  return String(value ?? "")
    .replace(/\*\*/g, "")
    .replace(/\\\|/g, "|")
    .replace(/^["'`]+|["'`,;]+$/g, "")
    .trim();
}

function stripPreviewCodeFence(value = "") {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/^```(?:json|markdown|md)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function parsePreviewJson(value = "") {
  const text = stripPreviewCodeFence(value);
  if (!text) return null;
  const candidates = [text];
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start >= 0 && end > start) candidates.push(text.slice(start, end + 1));
  for (const candidate of candidates) {
    try {
      return JSON.parse(candidate);
    } catch {
      // Continue with loose text rendering.
    }
  }
  return null;
}

function getPreviewTextFromJson(parsed) {
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return "";
  const textFields = ["body", "content", "draft", "blogDraft", "studentAnalysisDraft", "teacherAnalysisDraft", "instagramDraft"];
  for (const field of textFields) {
    if (typeof parsed[field] === "string" && parsed[field].trim()) return parsed[field];
  }
  if (Array.isArray(parsed.sections)) {
    return parsed.sections
      .map((section, index) => {
        if (typeof section === "string") return section;
        if (!section || typeof section !== "object") return "";
        const title = section.title || section.heading || `${index + 1}. 섹션`;
        const body = [section.body, section.content, section.text].filter(Boolean).join("\n");
        const items = Array.isArray(section.items) ? section.items.map((item) => `- ${item}`).join("\n") : "";
        return [title, body, items].filter(Boolean).join("\n");
      })
      .filter(Boolean)
      .join("\n\n");
  }
  return "";
}

export function getPreviewSourceText(value = "") {
  const parsed = parsePreviewJson(value);
  return getPreviewTextFromJson(parsed) || stripPreviewCodeFence(value);
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

function isPreviewHeading(line = "") {
  const cleaned = cleanPreviewText(line);
  if (!cleaned) return false;
  if (/^#{1,4}\s+/.test(cleaned)) return true;
  if (/^\d+[.)]\s+\S/.test(cleaned) && cleaned.length <= 90) return true;
  if (/^[가-힣A-Za-z0-9\s·/()'-]{2,40}:$/.test(cleaned)) return true;
  return false;
}

function getPreviewHeadingText(line = "") {
  return cleanPreviewText(line)
    .replace(/^#{1,4}\s+/, "")
    .replace(/^\d+[.)]\s+/, "")
    .replace(/:$/, "")
    .trim();
}

function createReadableSection(title = "핵심 요약") {
  return { title, paragraphs: [], bullets: [], tables: [] };
}

export function parseReadablePreviewDocument(value = "") {
  const lines = getPreviewSourceText(value).split("\n");
  const sections = [];
  let title = "";
  let lead = "";
  let current = null;

  function ensureSection(sectionTitle = "핵심 요약") {
    if (!current) {
      current = createReadableSection(sectionTitle);
      sections.push(current);
    }
    return current;
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = cleanPreviewText(rawLine);
    if (!line) continue;

    if (isMarkdownTableLine(line)) {
      const tableLines = [];
      while (index < lines.length && isMarkdownTableLine(lines[index])) {
        if (!isMarkdownTableDivider(lines[index])) tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      const rows = tableLines.map(parseMarkdownTableRow).filter((row) => row.some(Boolean));
      if (rows.length) ensureSection("표 데이터").tables.push(rows);
      continue;
    }

    if (isPreviewHeading(line)) {
      const heading = getPreviewHeadingText(line);
      if (!title) {
        title = heading;
      } else {
        current = createReadableSection(heading);
        sections.push(current);
      }
      continue;
    }

    if (!title && line.length <= 84) {
      title = line;
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      ensureSection().bullets.push(line.replace(/^[-*]\s+/, "").replace(/^\d+[.)]\s+/, ""));
      continue;
    }

    if (!lead && !current && !sections.length) {
      lead = line;
    } else {
      ensureSection().paragraphs.push(line);
    }
  }

  const normalizedSections = sections
    .map((section) => ({
      ...section,
      paragraphs: section.paragraphs.filter(Boolean),
      bullets: section.bullets.filter(Boolean),
      tables: section.tables.filter((rows) => rows.length)
    }))
    .filter((section) => section.paragraphs.length || section.bullets.length || section.tables.length);

  return {
    title: title || "산출물 미리보기",
    lead,
    sections: normalizedSections
  };
}

export function parseInstagramSlides(value = "") {
  const parsed = parsePreviewJson(value);
  if (parsed && typeof parsed === "object") {
    const rawSlides = Array.isArray(parsed.slides)
      ? parsed.slides
      : Array.isArray(parsed.cards)
        ? parsed.cards
        : null;
    if (rawSlides?.length) {
      return rawSlides.map((slide, index) => {
        if (typeof slide === "string") {
          const [firstLine, ...restLines] = slide.split("\n").map(cleanPreviewText).filter(Boolean);
          return { number: index + 1, title: firstLine || `${index + 1}장`, lines: restLines };
        }
        const title = slide?.title || slide?.heading || slide?.hook || `${index + 1}장`;
        const body = [slide?.body, slide?.content, slide?.text].filter(Boolean).join("\n");
        const items = Array.isArray(slide?.items) ? slide.items : [];
        return {
          number: Number(slide?.number) || index + 1,
          title: cleanPreviewText(title),
          lines: [...String(body || "").split("\n"), ...items].map(cleanPreviewText).filter(Boolean)
        };
      });
    }
  }

  const lines = getPreviewSourceText(value).split("\n");
  const slides = [];
  let current = null;

  lines.forEach((rawLine) => {
    const line = cleanPreviewText(rawLine);
    if (!line) return;
    const match = line.match(/^(?:##\s*)?(?:필드\s*)?(\d+)\s*(?:장|\(|\.|:|-)?\s*(.*)$/);
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

export function copyTextToClipboard(text = "") {
  const value = String(text ?? "").trim();
  if (!value) return;
  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      window.alert(value);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  if (window.navigator?.clipboard?.writeText) {
    window.navigator.clipboard.writeText(value).catch(fallbackCopy);
    return;
  }
  fallbackCopy();
}
