export const examAnalysisDetailSections = [
  { id: "ai", title: "AI 구조화 필드", description: "시험 원문에서 뽑은 1차 분석입니다.", fields: [
    ["oneLineSummary", "한 줄 총평", 3],
    ["examStructure", "시험 구조", 5],
    ["aiOverview", "시험 개요", 5],
    ["unitDistribution", "단원별 출제 분포", 6],
    ["typeClassification", "유형 분류", 6],
    ["killerProblems", "킬러/준킬러 문항", 6],
    ["fiveCorePatterns", "5대 핵심 패턴", 6],
    ["sourceCheckNotes", "OCR/원문 확인 필요", 5]
  ] },
  { id: "insight", title: "강사 검토", description: "강사 인사이트를 추가해 분석지를 확정합니다.", fields: [
    ["insightSummary", "A. 강사 총평", 7],
    ["insightUnits", "B. 단원별 인사이트", 7],
    ["insightKiller", "C. 킬러문항 분석", 7],
    ["insightStudentErrors", "D. 실제 학생 오답", 7],
    ["insightPrediction", "E. 다음 시험 예측", 7],
    ["insightDirection", "F. 학습 방향", 7]
  ] },
  { id: "output", title: "산출물 초안", description: "학생용/블로그/인스타 산출물을 수정합니다.", fields: [
    ["studentAnalysisDraft", "학생 분석지", 8],
    ["blogDraft", "블로그 초안", 8],
    ["instagramDraft", "인스타 카드뉴스", 8]
  ] }
];
