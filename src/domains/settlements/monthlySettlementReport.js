function escapeHtml(value = "") {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatWon(value = 0) {
  return `${Math.round(Number(value) || 0).toLocaleString("ko-KR")}원`;
}

export function buildMonthlySettlementReportModel({ monthKey = "", rows = [] } = {}) {
  const reportRows = rows
    .filter((row) => !row.setting?.excluded)
    .map((row) => ({
      amount: Math.round(Number(row.regularGrossAmount) || 0),
      count: Math.max(0, Number(row.prorationCount) || 0),
      name: row.student?.name || "학생 이름 없음"
    }))
    .sort((left, right) => left.name.localeCompare(right.name, "ko"));
  return {
    monthKey,
    rows: reportRows,
    totalAmount: reportRows.reduce((sum, row) => sum + row.amount, 0)
  };
}

export function createMonthlySettlementReportHtml(model = {}) {
  const monthLabel = String(model.monthKey || "").replace("-", "년 ");
  const rowHtml = (model.rows || []).map((row) => `
    <tr>
      <td>${escapeHtml(row.name)}</td>
      <td class="number">${escapeHtml(row.count)}회</td>
      <td class="number">${escapeHtml(formatWon(row.amount))}</td>
    </tr>
  `).join("");
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(model.monthKey)} 월별 정산 보고서</title>
  <style>
    @page { size: A4 portrait; margin: 16mm; }
    * { box-sizing: border-box; }
    body { color: #172033; font-family: "Malgun Gothic", "Apple SD Gothic Neo", sans-serif; margin: 0; }
    header { align-items: flex-end; border-bottom: 2px solid #172033; display: flex; justify-content: space-between; padding-bottom: 12px; }
    h1 { font-size: 22px; margin: 0; }
    header p { color: #596579; font-size: 12px; margin: 4px 0 0; }
    .totals { display: flex; gap: 22px; text-align: right; }
    .totals span { color: #596579; display: block; font-size: 11px; }
    .totals strong { display: block; font-size: 17px; margin-top: 3px; }
    table { border-collapse: collapse; margin-top: 18px; width: 100%; }
    th { background: #eef3f9; color: #3c4a60; font-size: 12px; text-align: left; }
    th, td { border-bottom: 1px solid #cfd8e6; padding: 10px 9px; }
    td { font-size: 13px; }
    .number { font-variant-numeric: tabular-nums; text-align: right; }
    tfoot td { background: #f7f9fc; border-top: 2px solid #172033; font-weight: 700; }
    .empty { color: #6b778a; padding: 28px; text-align: center; }
    .printActions { display: flex; justify-content: flex-end; margin-bottom: 14px; }
    .printActions button { background: #172033; border: 0; border-radius: 8px; color: #fff; cursor: pointer; font: inherit; font-weight: 700; padding: 9px 16px; }
    @media print { .printActions { display: none; } }
  </style>
</head>
<body>
  <div class="printActions"><button onclick="window.print()" type="button">인쇄하기</button></div>
  <header>
    <div><h1>${escapeHtml(monthLabel)}월 정산 보고서</h1><p>학생별 정산 반영 횟수와 최종 금액</p></div>
    <div class="totals">
      <div><span>총 금액</span><strong>${escapeHtml(formatWon(model.totalAmount))}</strong></div>
    </div>
  </header>
  <table>
    <thead><tr><th>이름</th><th class="number">최종 정규 횟수</th><th class="number">금액</th></tr></thead>
    <tbody>${rowHtml || '<tr><td class="empty" colspan="3">정산 대상 학생이 없습니다.</td></tr>'}</tbody>
    <tfoot><tr><td colspan="2">합계</td><td class="number">${escapeHtml(formatWon(model.totalAmount))}</td></tr></tfoot>
  </table>
</body>
</html>`;
}

export function openMonthlySettlementReportPdf(model = {}) {
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) throw new Error("PDF 인쇄 창을 열 수 없습니다. 팝업 허용 여부를 확인해 주세요.");
  reportWindow.opener = null;
  reportWindow.addEventListener("load", () => reportWindow.print(), { once: true });
  reportWindow.document.open();
  reportWindow.document.write(createMonthlySettlementReportHtml(model));
  reportWindow.document.close();
  reportWindow.focus();
  return reportWindow;
}
