import {
  examAnalysisBlogBlockFields,
  examAnalysisOutputAiBoundaryRules,
  getExamAnalysisKeyQuestionBlockHasContent,
  getExamAnalysisOutputSectionLabel,
  getExamAnalysisOutputSectionText,
  normalizeExamAnalysisKeyQuestionBlocks
} from "./examAnalysisOutputModel.js";
import {
  createExamAnalysisCardNewsModel,
  createExamAnalysisChartPngFiles,
  createExamAnalysisChartSvgFiles,
  examAnalysisCardNewsSlideTypes,
  examAnalysisChartPngExportScale
} from "./examAnalysisChartSvg.js";

function formatExamAnalysisChecklistDistribution(items = [], maxItems = 6) {
  return (Array.isArray(items) ? items : [])
    .filter((item) => Number(item?.count || 0) > 0)
    .slice(0, maxItems)
    .map((item) => {
      const label = String(item.label || "미입력").trim() || "미입력";
      const count = Number(item.count || 0);
      const percent = Number(item.percent || 0);
      return `${label} ${count}문항${percent ? `(${percent}%)` : ""}`;
    })
    .join(", ");
}

function formatExamAnalysisImportantQuestionSummary(questions = []) {
  return (Array.isArray(questions) ? questions : [])
    .slice(0, 12)
    .map((question) => {
      const parts = [
        `${question.questionNumber}번`,
        question.mainType,
        question.unitName,
        question.difficulty,
        question.pageLabel,
        question.reviewNote ? `메모: ${question.reviewNote}` : ""
      ].filter(Boolean);
      return parts.join(" · ");
    })
    .join("\n");
}

function formatExamAnalysisKeyQuestionBlockChecklist(blocks = []) {
  const meaningfulBlocks = normalizeExamAnalysisKeyQuestionBlocks({ keyQuestionBlocks: blocks })
    .filter(getExamAnalysisKeyQuestionBlockHasContent);
  if (!meaningfulBlocks.length) return "미입력 - 주요문항 반복 블록에서 선생님이 최종 선택";
  return meaningfulBlocks.map((block, index) => [
    `주요문항 최종 선택 ${index + 1}`,
    `- 문항번호: ${block.questionNumber || "(미입력)"}`,
    `- 선택 이유: ${block.selectionReason || "(미입력)"}`,
    `- 핵심 개념/카드 제목: ${block.title || "(미입력)"}`,
    `- 유사유형 근거: ${block.similarTypeEvidence || "(미입력)"}`,
    `- 설명 메모: ${block.questionMemo || "(미입력)"}`,
    `- 자주 틀리는 지점: ${block.mistakePoint || "(미입력)"}`,
    `- 추천 복습/손풀이 메모: ${block.solutionMemo || "(미입력)"}`
  ].join("\n")).join("\n\n");
}

export function getExamAnalysisGptChecklistAutoItems({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeRun = activeRun && typeof activeRun === "object" ? activeRun : {};
  const safeModel = model && typeof model === "object" ? model : {};
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const inputs = safeDrafts.inputs ?? {};
  const meta = safeModel.meta ?? {};
  const totalQuestions = Number(
    meta.totalQuestions
    || safeModel.questions?.length
    || safeRun.confirmedQuestionCount
    || safeRun.detectedQuestionCount
    || safeRun.totalQuestionCount
    || 0
  );
  return [
    {
      label: "학교/학년",
      source: "웹앱 자동 입력",
      value: [safeRun.schoolName || meta.schoolName, safeRun.grade || meta.grade].filter(Boolean).join(" ") || "미입력"
    },
    {
      label: "고사명/과목",
      source: "웹앱 자동 입력",
      value: [safeRun.examCycle || safeRun.examTerm || meta.examCycle, safeRun.subject || meta.subject].filter(Boolean).join(" · ") || "미입력"
    },
    {
      label: "시험일/범위",
      source: "선생님 입력 우선",
      value: [inputs.checklistExamDate, inputs.checklistExamRange].filter(Boolean).join(" · ") || "미입력"
    },
    {
      label: "문항 수",
      source: "시험지분석 후보/확정",
      value: totalQuestions ? `${totalQuestions}문항` : "시험지분석 검수 후 자동 표시"
    },
    {
      label: "단원별 실제 비중",
      source: "시험지분석 후보/확정",
      value: formatExamAnalysisChecklistDistribution(safeModel.partDistribution) || "시험지분석 검수 후 자동 표시"
    },
    {
      label: "난도 분포",
      source: "시험지분석 후보/확정",
      value: formatExamAnalysisChecklistDistribution(safeModel.difficultyDistribution) || "시험지분석 검수 후 자동 표시"
    },
    {
      label: "주요문항 후보/체크 저장본",
      source: "시험지분석 후보",
      value: formatExamAnalysisImportantQuestionSummary(safeModel.importantQuestions) || "AI 결과 검수 표에서 주요문항 체크 필요"
    }
  ];
}

function createExamAnalysisGptChecklistText({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const inputs = safeDrafts.inputs ?? {};
  const autoItems = getExamAnalysisGptChecklistAutoItems({ activeRun, model, outputDrafts });
  const valueFor = (key) => String(inputs[key] || "").trim() || "(미입력)";
  return [
    "[A. 웹앱/시험지분석 자동 입력]",
    ...autoItems.map((item) => `- ${item.label}: ${item.value} (${item.source})`),
    "",
    "[B. 선생님 확정 입력]",
    `- 시험일: ${valueFor("checklistExamDate")}`,
    `- 시험범위: ${valueFor("checklistExamRange")}`,
    `- 교과서/출판사: ${valueFor("checklistTextbookPublisher")}`,
    `- 등급컷/예상 등급컷: ${valueFor("checklistGradeCut")}`,
    `- 부교재/모의고사/학습지 출제 근거: ${valueFor("checklistSourceEvidence")}`,
    "",
    "[C. 주요문항 최종 선택 - 선생님 선정만 사용]",
    formatExamAnalysisKeyQuestionBlockChecklist(inputs.keyQuestionBlocks),
    "",
    "[D. 선생님 해석/문장화]",
    `- 한 줄 총평: ${valueFor("oneLineReview")}`,
    `- 시험 흐름/체감 난도: ${valueFor("flowReview")}`,
    `- 변별 문항/흔들린 지점: ${valueFor("scoreGapPoint")}`,
    `- 다음 학습 방향: ${valueFor("nextStudyPlan")}`,
    `- 수업/상담 연결 메모: ${valueFor("schoolVariationNotes")}`,
    "",
    "[E. 금지/불확실]",
    `- 쓰면 안 되는 교재명: ${valueFor("checklistForbiddenTextbook")}`,
    `- 확인 안 된 문항번호: ${valueFor("checklistUnconfirmedQuestions")}`,
    `- AI가 추측하면 안 되는 내용: ${valueFor("checklistAiNoGuess")}`
  ].join("\n");
}

export function createExamAnalysisGptPlanningPacket({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const keyQuestionBlocks = normalizeExamAnalysisKeyQuestionBlocks(safeDrafts.inputs ?? {});
  const cardPlan = createExamAnalysisCardNewsModel(keyQuestionBlocks);
  const checklistText = createExamAnalysisGptChecklistText({ activeRun, model, outputDrafts });
  return [
    "[작업 목표]",
    "아래 체크리스트를 바탕으로 블로그/인스타 카드뉴스 기획안을 만들어줘.",
    "아직 이미지를 만들지 말고, 카드별 내용만 표로 정리해줘.",
    "",
    "[브랜드]",
    "- 으뜸수학 고태영T",
    "- 블루/화이트 중심",
    "- 전문적이고 차분한 내신 분석 카드뉴스",
    "- 벤치마킹 블로그의 정보 구조는 참고하되 문장/디자인/브랜드는 복제하지 않음",
    "",
    "[체크리스트]",
    checklistText,
    "",
    "[카드 구조]",
    ...cardPlan.map((card) => `- 카드 ${card.card}: ${card.role} / ${card.renderMode} / ${card.slot}`),
    "",
    "[출력 형식]",
    "카드번호 / 카드 역할 / 메인 문구 / 보조 문구 / 강조 키워드 / 반드시 넣을 숫자·표 / 검수 필요 사실",
    "",
    "[주의]",
    "- 체크리스트에 없는 시험 사실은 추가하지 마.",
    "- 주요문항은 [C. 주요문항 최종 선택]에 있는 문항만 사용해.",
    "- 시험지분석 후보는 선생님 최종 선택으로 확정하지 마.",
    "- 불확실한 내용은 카드에 넣지 말고 검수 필요 사실에 적어.",
    "- 한 카드에 문구를 너무 많이 넣지 마.",
    "- 원본 블로그 문장/디자인/브랜드를 복제하지 마."
  ].join("\n");
}

function sanitizeExamAnalysisOutputFileNamePart(value = "") {
  return String(value || "")
    .trim()
    .replace(/[\\/:*?"<>|]/g, " ")
    .replace(/\s+/g, " ")
    .slice(0, 60)
    .trim() || "시험분석";
}

function createExamAnalysisOutputExportFileName(activeRun = {}, outputType = "blog") {
  const mediaLabel = outputType === "instagram" ? "instagram-card" : "blog";
  const title = sanitizeExamAnalysisOutputFileNamePart([
    activeRun.schoolName,
    activeRun.grade,
    activeRun.examCycle || activeRun.examTerm,
    activeRun.subject
  ].filter(Boolean).join(" "));
  return `${title}-${mediaLabel}-draft.txt`;
}

export function downloadExamAnalysisOutputTextFile({ activeRun, outputType, text }) {
  const value = String(text || "").trim();
  if (!value) return false;
  const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = createExamAnalysisOutputExportFileName(activeRun, outputType);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return true;
}

function downloadBlobFile(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

let examAnalysisZipCrcTable = null;

function getExamAnalysisZipCrcTable() {
  if (examAnalysisZipCrcTable) return examAnalysisZipCrcTable;
  examAnalysisZipCrcTable = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    examAnalysisZipCrcTable[index] = value >>> 0;
  }
  return examAnalysisZipCrcTable;
}

function getExamAnalysisZipCrc32(bytes) {
  const table = getExamAnalysisZipCrcTable();
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = table[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeExamAnalysisZipUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeExamAnalysisZipUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

function getExamAnalysisZipDosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

async function getExamAnalysisZipFileBytes(file) {
  if (file.blob instanceof Blob) return new Uint8Array(await file.blob.arrayBuffer());
  return new TextEncoder().encode(String(file.text ?? ""));
}

async function createExamAnalysisZipBlob(files = []) {
  const encoder = new TextEncoder();
  const now = getExamAnalysisZipDosDateTime();
  const chunks = [];
  const centralChunks = [];
  let offset = 0;

  for (const file of files) {
    const safeName = String(file.name || "file.txt").replace(/\\/g, "/");
    const nameBytes = encoder.encode(safeName);
    const dataBytes = await getExamAnalysisZipFileBytes(file);
    const crc = getExamAnalysisZipCrc32(dataBytes);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    writeExamAnalysisZipUint32(localView, 0, 0x04034b50);
    writeExamAnalysisZipUint16(localView, 4, 20);
    writeExamAnalysisZipUint16(localView, 6, 0x0800);
    writeExamAnalysisZipUint16(localView, 8, 0);
    writeExamAnalysisZipUint16(localView, 10, now.dosTime);
    writeExamAnalysisZipUint16(localView, 12, now.dosDate);
    writeExamAnalysisZipUint32(localView, 14, crc);
    writeExamAnalysisZipUint32(localView, 18, dataBytes.length);
    writeExamAnalysisZipUint32(localView, 22, dataBytes.length);
    writeExamAnalysisZipUint16(localView, 26, nameBytes.length);
    writeExamAnalysisZipUint16(localView, 28, 0);
    localHeader.set(nameBytes, 30);
    chunks.push(localHeader, dataBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeExamAnalysisZipUint32(centralView, 0, 0x02014b50);
    writeExamAnalysisZipUint16(centralView, 4, 20);
    writeExamAnalysisZipUint16(centralView, 6, 20);
    writeExamAnalysisZipUint16(centralView, 8, 0x0800);
    writeExamAnalysisZipUint16(centralView, 10, 0);
    writeExamAnalysisZipUint16(centralView, 12, now.dosTime);
    writeExamAnalysisZipUint16(centralView, 14, now.dosDate);
    writeExamAnalysisZipUint32(centralView, 16, crc);
    writeExamAnalysisZipUint32(centralView, 20, dataBytes.length);
    writeExamAnalysisZipUint32(centralView, 24, dataBytes.length);
    writeExamAnalysisZipUint16(centralView, 28, nameBytes.length);
    writeExamAnalysisZipUint16(centralView, 30, 0);
    writeExamAnalysisZipUint16(centralView, 32, 0);
    writeExamAnalysisZipUint16(centralView, 34, 0);
    writeExamAnalysisZipUint16(centralView, 36, 0);
    writeExamAnalysisZipUint32(centralView, 38, 0);
    writeExamAnalysisZipUint32(centralView, 42, offset);
    centralHeader.set(nameBytes, 46);
    centralChunks.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  }

  const centralSize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  writeExamAnalysisZipUint32(endView, 0, 0x06054b50);
  writeExamAnalysisZipUint16(endView, 4, 0);
  writeExamAnalysisZipUint16(endView, 6, 0);
  writeExamAnalysisZipUint16(endView, 8, files.length);
  writeExamAnalysisZipUint16(endView, 10, files.length);
  writeExamAnalysisZipUint32(endView, 12, centralSize);
  writeExamAnalysisZipUint32(endView, 16, offset);
  writeExamAnalysisZipUint16(endView, 20, 0);
  return new Blob([...chunks, ...centralChunks, endHeader], { type: "application/zip" });
}

function getExamAnalysisOutputCardPlan(outputDrafts = {}) {
  return createExamAnalysisCardNewsModel(outputDrafts?.inputs?.keyQuestionBlocks);
}

function createExamAnalysisPackageReadme({ activeRun = {}, outputDrafts = {}, chartFiles = [] } = {}) {
  const canvaCardPlan = getExamAnalysisOutputCardPlan(outputDrafts);
  return [
    "으뜸수학학원 고태영T 시험분석 산출물 패키지",
    "",
    "사용 방법",
    "1. texts/blog-draft.txt 내용을 네이버 블로그 에디터에 붙여넣고 문장을 최종 수정합니다.",
    "2. texts/instagram-card-draft.txt 내용을 Canva 카드뉴스 문구로 사용합니다.",
    "3. texts/gpt-project-planning-packet.txt 내용을 GPT 프로젝트 대화세션 첫 메시지로 붙여넣고 카드 기획안을 받습니다.",
    `4. charts 폴더의 PNG 이미지는 ${examAnalysisChartPngExportScale}배 해상도 고화질 이미지입니다. 통렌더 카드의 재료 또는 네이버 블로그 보조 이미지로 사용합니다.`,
    "5. texts/canva-10-card-plan.txt 기준으로 6개 슬라이드 유형과 주요문항 반복 구조를 확인합니다.",
    "6. texts/blog-block-guide.txt 기준으로 블로그 블록 조립 순서를 확인합니다.",
    "7. charts-svg 폴더의 SVG 원본은 PPT/Canva에서 더 선명한 원본이 필요할 때 사용합니다.",
    "8. 외부 에디터에서 수정한 최종본은 현재 앱으로 자동 동기화되지 않습니다.",
    "",
    `카드뉴스 구조 (${canvaCardPlan.length}장)`,
    canvaCardPlan.map((item) => `${item.card}. ${item.role} [${item.renderMode}] - ${item.slot}`).join("\n"),
    "",
    "포함 차트",
    chartFiles.length ? chartFiles.map((file) => `- ${file.name}`).join("\n") : "- 차트 없음",
    "",
    `분석: ${[activeRun.schoolName, activeRun.grade, activeRun.examCycle || activeRun.examTerm, activeRun.subject].filter(Boolean).join(" · ") || "시험분석"}`,
    `생성 시각: ${new Date().toISOString()}`
  ].join("\n");
}

function createExamAnalysisPackageManifest({ activeRun = {}, outputDrafts = {}, chartFiles = [] } = {}) {
  return JSON.stringify({
    generatedAt: new Date().toISOString(),
    analysisRunId: activeRun.analysisRunId || "",
    title: activeRun.title || "",
    schoolName: activeRun.schoolName || "",
    grade: activeRun.grade || "",
    examCycle: activeRun.examCycle || activeRun.examTerm || "",
    subject: activeRun.subject || "",
    sourceOfTruth: "exam_analysis_runs.audit_summary.outputDrafts + final preview model",
    texts: {
      blog: "texts/blog-draft.txt",
      instagram: "texts/instagram-card-draft.txt",
      gptProjectPlanningPacket: "texts/gpt-project-planning-packet.txt",
      blogBlockGuide: "texts/blog-block-guide.txt",
      canvaCardPlan: "texts/canva-10-card-plan.txt"
    },
    charts: chartFiles.map((file) => ({
      label: file.label,
      path: file.name
    })),
    chartSourceFiles: "charts-svg/*.svg",
    imageQuality: {
      pngScale: examAnalysisChartPngExportScale,
      policy: "용량보다 선명도 우선"
    },
    canvaSlots: getExamAnalysisOutputCardPlan(outputDrafts),
    draftStatus: {
      blog: getExamAnalysisOutputSectionLabel(outputDrafts.blog),
      instagram: getExamAnalysisOutputSectionLabel(outputDrafts.instagram)
    }
  }, null, 2);
}

function createExamAnalysisCanvaCardPlanText(outputDrafts = {}) {
  const canvaCardPlan = getExamAnalysisOutputCardPlan(outputDrafts);
  return [
    `카드뉴스 ${canvaCardPlan.length}장 구조 - 6개 슬라이드 유형 반복`,
    "",
    "슬라이드 유형",
    examAnalysisCardNewsSlideTypes.map((item) => `- ${item.type}: ${item.label}`).join("\n"),
    "",
    ...canvaCardPlan.map((item) => [
      `[카드 ${item.card}] ${item.role}`,
      `슬라이드 유형: ${item.type}`,
      `제작 방식: ${item.renderMode}`,
      `이미지/텍스트 슬롯: ${item.slot}`,
      `추천 원천: ${item.suggestedSource}`
    ].join("\n")),
    "",
    "운영 원칙",
    "- 카드 구조는 학교별로 바꾸지 않고, 텍스트/색상 포인트/주요문항만 바꿉니다.",
    "- 주요문항이 늘어나면 주요문항/손풀이 카드 쌍이 같은 구조로 반복됩니다.",
    "- 시작/시험구조/총평/마무리는 통렌더하고, 주요문항/손풀이 카드는 선생님 crop 이미지만 슬롯에 둡니다.",
    "- 인스타에는 생성된 카드뉴스를 올리고, 마지막 카드에서 블로그 상세 해설로 유입합니다.",
    "- 블로그에는 같은 카드뉴스 이미지와 더 긴 문항별 해설/다음 대비 전략을 붙입니다."
  ].join("\n\n");
}

function createExamAnalysisBlogBlockGuideText() {
  return [
    "블로그 블록 작성 가이드",
    "",
    "선생님은 완성문을 쓰지 않아도 됩니다. 카드 사이에 들어갈 사실, 판단, 문항 메모를 블록별로 적고 AI가 문체/줄나눔/강조를 정리합니다.",
    "18개 섹션은 벤치마킹 예시일 뿐 고정 입력 스키마가 아닙니다.",
    "",
    ...examAnalysisBlogBlockFields.map((field) => [
      `${field.order}. ${field.label} (${field.type})`,
      `작성 성격: ${field.guide}`,
      `예시 메모: ${field.placeholder}`
    ].join("\n")),
    "",
    "블로그 조립 순서 예시",
    "- 인사/시험 소개 -> [card-01.png 삽입]",
    "- 시험 개요/구조 -> [card-02.png 삽입]",
    "- 출제 흐름/체감 정리 -> [card-03.png 삽입]",
    "- 주요문항 설명 -> [card-04.png 삽입] -> 손풀이 설명 -> [card-05.png 삽입]",
    "- 주요문항/손풀이 쌍 반복 -> 마지막 마무리 카드 삽입 -> 특강/상담 CTA",
    "",
    "AI 편집 규칙",
    ...examAnalysisOutputAiBoundaryRules.map((rule) => `- ${rule}`),
    "",
    "강조 규칙",
    "- 😊: 인사말 끝",
    "- 📌: 주요문항 시작",
    "- ✅: 핵심 포인트, 자주 틀리는 지점, 다음 대비 체크",
    "- ⬇️⬇️: 특강/상담/블로그 유입",
    "- 📍: 위치",
    "- ☎: 전화번호",
    "- [형광펜: 하늘색]: 핵심 결론/전문성",
    "- [형광펜: 노랑]: 실수 포인트/주의 지점"
  ].join("\n\n");
}

export async function downloadExamAnalysisOutputPackageZip({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const blogText = getExamAnalysisOutputSectionText(outputDrafts.blog);
  const instagramText = getExamAnalysisOutputSectionText(outputDrafts.instagram);
  const chartFiles = await createExamAnalysisChartPngFiles(model);
  const svgFiles = createExamAnalysisChartSvgFiles(model);
  const files = [
    { name: "README.txt", text: createExamAnalysisPackageReadme({ activeRun, outputDrafts, chartFiles }) },
    { name: "manifest.json", text: createExamAnalysisPackageManifest({ activeRun, outputDrafts, chartFiles }) },
    { name: "texts/blog-draft.txt", text: blogText || "블로그 초안 없음" },
    { name: "texts/instagram-card-draft.txt", text: instagramText || "인스타 카드 초안 없음" },
    { name: "texts/gpt-project-planning-packet.txt", text: createExamAnalysisGptPlanningPacket({ activeRun, model, outputDrafts }) },
    { name: "texts/canva-10-card-plan.txt", text: createExamAnalysisCanvaCardPlanText(outputDrafts) },
    { name: "texts/blog-block-guide.txt", text: createExamAnalysisBlogBlockGuideText() },
    ...chartFiles,
    ...svgFiles
  ];
  const zipBlob = await createExamAnalysisZipBlob(files);
  const baseName = sanitizeExamAnalysisOutputFileNamePart(activeRun.title || [activeRun.schoolName, activeRun.grade, activeRun.examCycle || activeRun.examTerm].filter(Boolean).join(" "));
  downloadBlobFile(zipBlob, `${baseName}-output-package.zip`);
  return {
    textCount: [blogText, instagramText].filter((text) => String(text || "").trim()).length,
    chartCount: chartFiles.length,
    svgCount: svgFiles.length
  };
}
