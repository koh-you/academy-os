import fs from "node:fs";
import path from "node:path";

const S = process.argv[2];
const root = path.resolve("output/problem-bank/ssen-basic-cm2");
const m = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
const batches = { A: [16, 19], B: [20, 24], C: [25, 28], D: [29, 32], E: [33, 36], F: [37, 41], G: [42, 47], H: [48, 54] };
const win = (file) => path.join(root, file);
for (const [name, [from, to]] of Object.entries(batches)) {
  const unit = from <= 32 ? "02 직선의 방정식" : "03 원의 방정식";
  let count = 0;
  let body = "";
  for (let p = from; p <= to; p += 1) {
    const items = m.items.filter((i) => i.pdf_page === p);
    const summary = m.pages.find((x) => x.pdf_page === p);
    body += `## pdf ${p}쪽 = 인쇄 ${p + 6}쪽 · 구역(자동 추정): ${summary.block || "?"} · 쪽 이미지: ${win(`qa/p${String(p).padStart(3, "0")}.jpg`)}\n\n`;
    for (const i of items) {
      const passage = i.regions.find((r) => r.kind === "passage");
      body += `- ${i.number_label} · 크롭 ${win(i.regions[0].file)}`;
      if (passage) body += ` · 지시문 크롭 ${win(passage.file)}`;
      body += ` · 답 ${win(`answers/${i.item_id}.jpg`)} · 해설 ${win(`solutions/${i.item_id}.jpg`)}`;
      if (i.review_status === "flagged") body += ` · ⚠ ${i.review_note}`;
      body += "\n";
      count += 1;
    }
    body += "\n";
  }
  const head = `# 전사 배치 ${name} · ${unit} · pdf ${from}~${to}쪽 (인쇄 ${from + 6}~${to + 6}쪽)\n\n문항 ${count}개. 답·해설 크롭 파일이 없을 수 있다(답지에서 못 찾은 문항) — 그때는 발문을 풀어 「계산」으로 적는다.\n\n`;
  fs.writeFileSync(path.join(S, "work", `batch-${name}.md`), head + body, "utf8");
  console.log(name, from, to, count);
}
