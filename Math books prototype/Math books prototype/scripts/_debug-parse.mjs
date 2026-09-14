import fs from 'node:fs';
const content = fs.readFileSync('output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-문제.tex', 'utf8');
const re = /\\begin\{problem\}\{13\}\{s\}([\s\S]*?)\\end\{problem\}/;
const m = content.match(re);
if (m) {
  const body = m[1];
  const subs = [...body.matchAll(/\\textbf\{\((\d+)\)\}([\s\S]*?)(?=\\textbf\{\(\d+\)\}|\\end\{problem\}|\\end\{minipage\}|$)/g)];
  console.log('#13 서브 매칭 개수:', subs.length);
  for (const s of subs) {
    console.log('---');
    console.log('index:', s[1]);
    console.log('본문 시작:', s[2].substring(0, 200).replace(/\s+/g, ' '));
    // 참조 어구 매칭 확인
    const textbfRefs = s[2].match(/\\textbf\{\(\d+\)\}/g) || [];
    console.log('textbf 참조:', textbfRefs.length);
    const struct = /방정식|부등식|공통 ?현|좌표|자취|조건|값|개수|결과/i.test(s[2]);
    console.log('구조 재사용 검출:', struct);
  }
}
