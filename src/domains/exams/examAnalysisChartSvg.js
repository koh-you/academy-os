import { examAnalysisPreviewPalette } from "./finalPreview.js";
import { createEmptyExamAnalysisKeyQuestionBlock } from "./examAnalysisOutputModel.js";

export function escapeExamAnalysisSvgText(value = "") {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function truncateExamAnalysisChartLabel(value = "", maxLength = 24) {
  const text = String(value || "").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text;
}

export const examAnalysisChartPngExportScale = 3;
const examAnalysisChartFooterLabel = "으뜸수학학원 고태영T 시험분석";
const examAnalysisChartDifficultyOrder = ["하", "중하", "중", "중상", "상", "미정"];
export const examAnalysisCardNewsSlideTypes = [
  { type: "cover", label: "시작 슬라이드" },
  { type: "examStructure", label: "시험구조 슬라이드" },
  { type: "overallReview", label: "출제 흐름 슬라이드" },
  { type: "keyQuestion", label: "주요문항 슬라이드" },
  { type: "solution", label: "손풀이 슬라이드" },
  { type: "closing", label: "마무리 슬라이드" }
];
export function createExamAnalysisCardNewsModel(keyQuestionBlocks = [createEmptyExamAnalysisKeyQuestionBlock(1)]) {
  const questionBlocks = Array.isArray(keyQuestionBlocks) && keyQuestionBlocks.length
    ? keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  const slides = [
    { type: "cover", role: "시작 슬라이드", renderMode: "통렌더", slot: "학교/학년/고사/과목 + 첫 문단 핵심" },
    { type: "examStructure", role: "시험구조 슬라이드", renderMode: "통렌더", slot: "객관식/서술형/만점/범위/출제 흐름" },
    { type: "overallReview", role: "출제 흐름 슬라이드", renderMode: "통렌더", slot: "체감 난도/후반부 흐름/흔들린 지점/학습 포인트" },
    ...questionBlocks.flatMap((block, index) => ([
      {
        type: "keyQuestion",
        role: `주요문항 ${index + 1} 슬라이드`,
        renderMode: "문제 이미지 슬롯",
        keyQuestionIndex: index,
        keyQuestionBlockId: block.blockId || `key-question-${index + 1}`,
        questionNumber: block.questionNumber || "",
        slot: `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 문제 이미지 + 왜 중요한지`
      },
      {
        type: "solution",
        role: `손풀이 ${index + 1} 슬라이드`,
        renderMode: "손풀이 이미지 슬롯",
        keyQuestionIndex: index,
        keyQuestionBlockId: block.blockId || `key-question-${index + 1}`,
        questionNumber: block.questionNumber || "",
        slot: `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 손풀이 이미지 + 풀이 흐름`
      }
    ])),
    { type: "closing", role: "마무리 슬라이드", renderMode: "통렌더", slot: "다음 학습 방향 + 특강/상담 CTA" }
  ];
  return slides.map((slide, index) => ({
    ...slide,
    card: index + 1,
    suggestedSource: `cards/card-${String(index + 1).padStart(2, "0")}.png`
  }));
}

function getExamAnalysisChartPartLabel(question = {}) {
  return String(question.unitName || "중단원 미입력").trim() || "중단원 미입력";
}

function countExamAnalysisChartLabels(values = []) {
  const counts = new Map();
  values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}

function createExamAnalysisPartInsightRows(model = {}) {
  const difficultyByPart = new Map((model.difficultyByPart ?? []).map((part) => [part.label, part]));
  return (model.partDistribution ?? [])
    .filter((item) => Number(item.count || 0) > 0)
    .slice(0, 6)
    .map((part) => {
      const partQuestions = (model.questions ?? []).filter((question) => getExamAnalysisChartPartLabel(question) === part.label);
      const fallbackDifficultyCounts = countExamAnalysisChartLabels(partQuestions.map((question) => question.difficulty));
      const fallbackDifficulties = examAnalysisChartDifficultyOrder
        .map((label) => ({
          label,
          count: fallbackDifficultyCounts.find((item) => item.label === label)?.count || 0,
          percent: partQuestions.length ? Math.round(((fallbackDifficultyCounts.find((item) => item.label === label)?.count || 0) / partQuestions.length) * 1000) / 10 : 0,
          color: examAnalysisPreviewPalette.difficulties[label] || examAnalysisPreviewPalette.difficulties["미정"]
        }))
        .filter((item) => item.count > 0);
      const difficultyMeta = difficultyByPart.get(part.label);
      return {
        ...part,
        difficulties: difficultyMeta?.difficulties?.length ? difficultyMeta.difficulties : fallbackDifficulties,
        mainTypes: countExamAnalysisChartLabels(partQuestions.map((question) => question.mainType)).slice(0, 3)
      };
    });
}

function createExamAnalysisChartSvgShell({ title, subtitle, width = 1200, height = 675, body = "" }) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="${width}" height="${height}" rx="28" fill="#ffffff"/>`,
    `<rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="#f8fbff" stroke="#bfdbfe" stroke-width="2"/>`,
    `<style>text{font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif;letter-spacing:0}.title{fill:#17213d;font-size:36px;font-weight:900}.subtitle{fill:#64748b;font-size:19px;font-weight:800}.label{fill:#17213d;font-size:20px;font-weight:900}.muted{fill:#64748b;font-size:17px;font-weight:800}.small{fill:#64748b;font-size:15px;font-weight:800}.num{fill:#17213d;font-size:22px;font-weight:900}</style>`,
    `<text class="title" x="64" y="78">${escapeExamAnalysisSvgText(title)}</text>`,
    subtitle ? `<text class="subtitle" x="64" y="112">${escapeExamAnalysisSvgText(subtitle)}</text>` : "",
    body,
    `<text class="small" x="${width - 64}" y="${height - 42}" text-anchor="end">${escapeExamAnalysisSvgText(examAnalysisChartFooterLabel)}</text>`,
    `</svg>`
  ].filter(Boolean).join("");
}

function createExamAnalysisPartDistributionSvg(model = {}) {
  const width = 1200;
  const height = 675;
  const segments = createExamAnalysisPartInsightRows(model);
  const total = segments.reduce((sum, item) => sum + Number(item.count || 0), 0);
  const cx = 255;
  const cy = 380;
  const r = 132;
  const strokeWidth = 70;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const slices = segments.map((segment) => {
    const ratio = total ? Number(segment.count || 0) / total : 0;
    const dash = ratio * circumference;
    const gap = circumference - dash;
    const circle = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${segment.color}" stroke-width="${strokeWidth}" stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += dash;
    return circle;
  }).join("");
  const detailRows = segments.map((segment, index) => {
    const x = 480;
    const y = 176 + index * 92;
    const difficultyText = segment.difficulties?.length
      ? segment.difficulties.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · ")
      : "난이도 미입력";
    const mainTypeText = segment.mainTypes?.length
      ? segment.mainTypes.map((type) => `${truncateExamAnalysisChartLabel(type.label, 16)} ${type.count}`).join(" · ")
      : "대표유형 미입력";
    let barX = x + 350;
    const barWidth = 260;
    const bars = (segment.difficulties ?? []).map((difficulty) => {
      const widthValue = Math.max(12, (Number(difficulty.count || 0) / Math.max(1, Number(segment.count || 0))) * barWidth);
      const rect = `<rect x="${barX}" y="${y + 53}" width="${widthValue}" height="16" rx="8" fill="${difficulty.color}"/>`;
      barX += widthValue;
      return rect;
    }).join("");
    return [
      `<rect x="${x}" y="${y}" width="650" height="80" rx="18" fill="#ffffff" stroke="#dbeafe"/>`,
      `<circle cx="${x + 30}" cy="${y + 29}" r="10" fill="${segment.color}"/>`,
      `<text class="label" x="${x + 54}" y="${y + 31}">${escapeExamAnalysisSvgText(truncateExamAnalysisChartLabel(segment.label, 14))}</text>`,
      `<text class="muted" x="${x + 616}" y="${y + 31}" text-anchor="end">${segment.count}문항 · ${segment.percent}%</text>`,
      `<text class="small" x="${x + 54}" y="${y + 57}">대표유형: ${escapeExamAnalysisSvgText(mainTypeText)}</text>`,
      `<text class="small" x="${x + 54}" y="${y + 76}">난이도: ${escapeExamAnalysisSvgText(difficultyText)}</text>`,
      `<rect x="${x + 350}" y="${y + 53}" width="${barWidth}" height="16" rx="8" fill="#eaf1fb"/>`,
      bars
    ].join("");
  }).join("");
  const body = [
    `<circle cx="${cx}" cy="${cy}" r="${r + strokeWidth / 2}" fill="#eff6ff"/>`,
    slices,
    `<circle cx="${cx}" cy="${cy}" r="${r - strokeWidth / 2 + 4}" fill="#ffffff"/>`,
    `<text class="title" x="${cx}" y="${cy - 8}" text-anchor="middle">${segments.length}</text>`,
    `<text class="muted" x="${cx}" y="${cy + 26}" text-anchor="middle">쎈 중단원</text>`,
    `<text class="small" x="${cx}" y="${cy + 56}" text-anchor="middle">${total}문항 기준</text>`,
    detailRows || `<text class="muted" x="500" y="240">단원 데이터 없음</text>`
  ].join("");
  return {
    key: "part-distribution",
    label: "쎈 중단원별 출제 비중",
    fileName: "01-part-distribution.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "쎈 중단원별 출제 비중",
      subtitle: "문항 비중 · 쎈 중단원별 난이도 · 대표 주요유형",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisDifficultyDistributionSvg(model = {}) {
  const width = 1200;
  const height = 675;
  const items = model.difficultyDistribution ?? [];
  const maxCount = Math.max(1, ...items.map((item) => Number(item.count || 0)));
  const rows = items.length ? items : [{ label: "데이터 없음", count: 0, percent: 0, color: "#cbd5e1" }];
  const body = rows.map((item, index) => {
    const y = 190 + index * 82;
    const barWidth = Math.max(24, (Number(item.count || 0) / maxCount) * 760);
    return [
      `<text class="label" x="94" y="${y}">${escapeExamAnalysisSvgText(item.label)}</text>`,
      `<text class="muted" x="1080" y="${y}" text-anchor="end">${item.count}문항 · ${item.percent}%</text>`,
      `<rect x="240" y="${y - 25}" width="780" height="28" rx="14" fill="#eaf1fb"/>`,
      `<rect x="240" y="${y - 25}" width="${barWidth}" height="28" rx="14" fill="${item.color}"/>`
    ].join("");
  }).join("");
  return {
    key: "difficulty-distribution",
    label: "난이도 분포",
    fileName: "02-difficulty-distribution.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "난이도 분포",
      subtitle: "하 · 중하 · 중 · 중상 · 상 고정 색상",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisPartDifficultySvg(model = {}) {
  const width = 1200;
  const items = (model.difficultyByPart ?? []).slice(0, 7);
  const height = Math.max(675, 185 + items.length * 84 + 80);
  const rows = items.length ? items : [{ label: "데이터 없음", count: 0, percent: 0, difficulties: [] }];
  const body = rows.map((part, index) => {
    const y = 178 + index * 84;
    let x = 310;
    const segments = part.difficulties?.length ? part.difficulties : [{ label: "미정", count: 0, percent: 100, color: "#cbd5e1" }];
    const bars = segments.map((difficulty) => {
      const widthValue = Math.max(16, difficulty.percent * 7.6);
      const rect = `<rect x="${x}" y="${y - 25}" width="${widthValue}" height="28" rx="14" fill="${difficulty.color}"/>`;
      x += widthValue;
      return rect;
    }).join("");
    return [
      `<text class="label" x="94" y="${y}">${escapeExamAnalysisSvgText(truncateExamAnalysisChartLabel(part.label, 14))}</text>`,
      `<text class="muted" x="1080" y="${y}" text-anchor="end">${part.count}문항 · ${part.percent}%</text>`,
      `<rect x="310" y="${y - 25}" width="760" height="28" rx="14" fill="#eaf1fb"/>`,
      bars,
      `<text class="small" x="310" y="${y + 28}">${escapeExamAnalysisSvgText(segments.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · "))}</text>`
    ].join("");
  }).join("");
  return {
    key: "part-difficulty",
    label: "쎈 중단원별 난이도",
    fileName: "03-part-difficulty.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "쎈 중단원별 난이도",
      subtitle: "쎈 중단원마다 난이도 분포를 누적 막대로 표시",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisQuestionFlowSvg(model = {}) {
  const width = 1200;
  const questions = model.questions ?? [];
  const columns = 10;
  const cellWidth = 96;
  const cellHeight = 62;
  const gap = 12;
  const rows = Math.max(1, Math.ceil(questions.length / columns));
  const height = Math.max(675, 170 + rows * (cellHeight + gap) + 96);
  const body = questions.length ? questions.map((question, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = 78 + col * (cellWidth + gap);
    const y = 164 + row * (cellHeight + gap);
    const color = examAnalysisPreviewPalette.difficulties[question.difficulty] || examAnalysisPreviewPalette.difficulties["미정"];
    return [
      `<rect x="${x}" y="${y}" width="${cellWidth}" height="${cellHeight}" rx="18" fill="${color}22" stroke="${color}" stroke-width="3"/>`,
      `<text class="num" x="${x + 20}" y="${y + 34}">${question.questionNumber}</text>`,
      `<text class="small" x="${x + cellWidth - 16}" y="${y + 34}" text-anchor="end">${escapeExamAnalysisSvgText(question.difficulty || "미정")}</text>`
    ].join("");
  }).join("") : `<text class="muted" x="78" y="210">문항 흐름 데이터 없음</text>`;
  return {
    key: "question-flow",
    label: "문항 흐름",
    fileName: "03-question-flow.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "문항 흐름",
      subtitle: "문항 번호 순서대로 난이도 색상을 표시",
      width,
      height,
      body
    })
  };
}

export function createExamAnalysisChartSvgAssets(model = {}) {
  if (!model?.questions?.length) return [];
  return [
    createExamAnalysisPartDistributionSvg(model),
    createExamAnalysisDifficultyDistributionSvg(model),
    createExamAnalysisQuestionFlowSvg(model)
  ];
}

export function createExamAnalysisChartSvgFiles(model = {}) {
  return createExamAnalysisChartSvgAssets(model).map((asset) => ({
    name: `charts-svg/${asset.fileName.replace(/\.png$/i, ".svg")}`,
    text: asset.svg,
    label: `${asset.label} SVG`
  }));
}

function convertExamAnalysisSvgToPngBlob(asset) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const svgBlob = new Blob([asset.svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = asset.width * examAnalysisChartPngExportScale;
        canvas.height = asset.height * examAnalysisChartPngExportScale;
        const context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);
          if (blob) resolve(blob);
          else reject(new Error("차트 PNG 생성에 실패했습니다."));
        }, "image/png");
      } catch (error) {
        URL.revokeObjectURL(url);
        reject(error);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("차트 SVG를 이미지로 변환하지 못했습니다."));
    };
    image.src = url;
  });
}

export async function createExamAnalysisChartPngFiles(model = {}) {
  const assets = createExamAnalysisChartSvgAssets(model);
  const files = [];
  for (const asset of assets) {
    const blob = await convertExamAnalysisSvgToPngBlob(asset);
    files.push({
      name: `charts/${asset.fileName}`,
      blob,
      label: asset.label
    });
  }
  return files;
}
