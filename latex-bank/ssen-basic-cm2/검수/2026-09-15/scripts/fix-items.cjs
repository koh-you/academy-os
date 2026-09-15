// 2026-09-15 검수 반영 후처리(heredoc 이 백슬래시를 먹어 빠진 것 보정). items.json 원천 편집.
const fs = require("fs");
const p = "latex-bank/ssen-basic-cm2/items.json";
let s = fs.readFileSync(p, "utf8");
let n = 0;
// 「cond{」 → 「\cond{」 (JSON 안이라 백슬래시 두 개)
s = s.replace(/(?<!\\)cond\{/g, () => { n += 1; return "\\\\cond{"; });
// 13-04 빈칸은 두 글자(AQ) 폭
s = s.replace('"13-04": { "body": "점~$\\\\pt{P}$는 선분~$\\\\blank$의 중점이다."', '"13-04": { "body": "점~$\\\\pt{P}$는 선분~$\\\\blank[2.4em]$의 중점이다."');
// 16-26 answer 의 \frac → \dfrac
s = s.replace(/\\\\frac\{5\}\{2\}/g, "\\\\dfrac{5}{2}");
fs.writeFileSync(p, s);
JSON.parse(s);
console.log({ cond: n, blank: s.includes("\\\\blank[2.4em]"), frac: (s.match(/\\\\frac\b/g) || []).length });
