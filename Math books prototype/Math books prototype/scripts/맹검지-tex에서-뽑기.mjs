/**
 * 맹검지-tex에서-뽑기.mjs — 시험지 .tex 에서 문항 발문을 그대로 뽑는다
 *
 * 왜 있는가 (2026-08-02 세션 109)
 *   판정용 맹검지를 만들 때마다 발문을 **손으로 옮겨 적었다.**
 *   그러면 판정한 것과 실제로 나가는 것이 어긋날 수 있다.
 *   문항이 일곱 개나 바뀌는 판에서는 옮겨 적기가 곧 사고다.
 *   🔴 파일에서 바로 뽑는다.
 *
 * 무엇을 지우는가
 *   배점 \pts{} · 문항 번호 · 조판 매크로 · 주석 · 그림(tikz) · 여백
 *   🔴 배점은 두 회차의 꼴이 달라 출처가 드러난다. 반드시 지운다.
 *
 * 사용
 *   node scripts/맹검지-tex에서-뽑기.mjs <문제.tex> [--json]
 */
import fs from 'node:fs';

const 파일 = process.argv[2];
const json으로 = process.argv.includes('--json');
if (!파일) {
  console.error('사용: node scripts/맹검지-tex에서-뽑기.mjs <문제.tex> [--json]');
  process.exit(2);
}

const 원문 = fs.readFileSync(파일, 'utf8');
const 줄 = 원문.split(/\r?\n/);

/** tikz 그림 통째로 들어낸다 — 자리만 남긴다 */
function 그림빼기(t) {
  return t.replace(/\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\}/g, '〔그림 — 좌표와 눈금이 없는 상황 도식〕');
}

/**
 * 보기 다섯을 한 줄씩 편다 — `\begin{choices32}{a}{b}{c}{d}{e}` 꼴
 *
 * 🔴 왜 따로 다루나 (2026-08-04 세션 115 신설)
 *   choices32·choicesii·choicesv 는 보기 다섯을 **인자**로 받는다.
 *   `\begin{...}` 만 지우면 `{$6$}{$\dfrac{15}{2}$}…` 가 통째로 남아
 *   판정자가 조판 부호를 읽게 된다. 실제로 v12 맹검지 첫 판에서 그랬다.
 *   🔴 인자 안에 중괄호가 겹쳐 있어 정규식으로는 못 자른다 ($\dfrac{15}{2}$).
 *      괄호를 세면서 자른다.
 */
function 보기펴기(t) {
  const 여는말 = /\\begin\{choices(?:32|ii|v)\}/;
  let m;
  while ((m = 여는말.exec(t))) {
    let i = m.index + m[0].length;
    while (t[i] === '%' || t[i] === '\n' || t[i] === ' ') i++;    // 🔴 첫 인자 앞에도 줄바꿈이 온다
    const 것들 = [];
    while (것들.length < 5 && t[i] === '{') {
      let 깊이 = 0, j = i;
      for (; j < t.length; j++) {
        if (t[j] === '{') 깊이++;
        else if (t[j] === '}') { 깊이--; if (깊이 === 0) break; }
      }
      것들.push(t.slice(i + 1, j));
      i = j + 1;
      while (t[i] === '%' || t[i] === '\n' || t[i] === ' ') i++;   // 줄 나눠 쓴 꼴
    }
    if (것들.length < 5) break;                                   // 꼴이 다르면 손대지 않는다
    t = t.slice(0, m.index) + '\n' + 것들.map((x) => `  ${x}`).join('\n') + '\n' + t.slice(i);
  }
  return t;
}

/**
 * `\choice{...}` 하나를 한 줄로 편다
 *
 * 🔴 왜 따로 다루나 (2026-08-05 세션 115 · 판정자 K3 가 신고했다)
 *   종전에는 `/\\choice\{([^}]*)\}/` 로 잘랐다. 이것은 **첫 닫는 괄호에서 멈춘다.**
 *   `\choice{$\dfrac{3}{2}$}` 가 `$\dfrac{3` + 남은 `{2}$}` 로 깨져
 *   판정자가 깨진 선지를 봤다 (v17 맹검지 W18). 원문 tex 는 멀쩡했다.
 *   🔴 위 보기펴기 와 **같은 병**이다. 한쪽만 고쳐서 다른 쪽이 남았다.
 */
function 낱개보기펴기(t) {
  let i;
  while ((i = t.indexOf('\\choice{')) >= 0) {
    const 여는 = i + '\\choice'.length;
    let 깊이 = 0, j = 여는;
    for (; j < t.length; j++) {
      if (t[j] === '{') 깊이++;
      else if (t[j] === '}') { 깊이--; if (깊이 === 0) break; }
    }
    if (깊이 !== 0) break;                                          // 짝이 안 맞으면 손대지 않는다
    t = t.slice(0, i) + '\n  ' + t.slice(여는 + 1, j) + t.slice(j + 1);
  }
  return t;
}

/** 조판 매크로를 사람이 읽을 꼴로 바꾼다 */
function 손질(t) {
  return 낱개보기펴기(보기펴기(그림빼기(t)))
    .replace(/^\s*%.*$/gm, '')                                  // 주석 줄
    .replace(/\\pts\{[^}]*\}/g, '')                             // 🔴 배점 — 출처가 드러난다
    .replace(/\[\s*[\d.]+\s*점\s*\]/g, '')                      // 본문에 적은 소문항 배점
    .replace(/\\begin\{conditions\}|\\end\{conditions\}/g, '')
    .replace(/\\begin\{condbox\}|\\end\{condbox\}/g, '')
    .replace(/\\begin\{bogibox\}|\\end\{bogibox\}/g, '\n〈보기〉')
    .replace(/\\begin\{choices(32|ii|v)?\}|\\end\{choices(32|ii|v)?\}/g, '')
    // 🔴 choice 는 낱개보기펴기() 가 이미 폈다. 정규식으로 자르지 마라 — 겹괄호에서 깨진다
    .replace(/\\textbf\{(\([0-9]\))\}/g, '$1')
    .replace(/\\(par|noindent|centerline|small|sffamily|bfseries|raggedright)\b/g, '')
    .replace(/\\v?space\*?\{[^}]*\}/g, '')
    .replace(/\\vfill|\\null|\\hfill/g, '')
    .replace(/\\\\(\[[^\]]*\])?/g, '\n')
    .replace(/\{\s*\}/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// 문항 하나 = \begin{problem}{N}{s} … \end{problem} + 그 뒤의 소문항들
const 문항 = [];
for (let i = 0; i < 줄.length; i++) {
  const m = 줄[i].match(/\\begin\{problem\}\{(\d+)\}/);
  if (!m) continue;
  const 번호 = Number(m[1]);
  let 끝 = i;
  while (끝 < 줄.length && !/\\end\{problem\}/.test(줄[끝])) 끝++;
  // 소문항은 \end{problem} 뒤부터 다음 \begin{problem} 또는 \end{pagepair} 까지
  let 소끝 = 끝 + 1;
  while (소끝 < 줄.length && !/\\begin\{problem\}|\\end\{pagepair\}/.test(줄[소끝])) 소끝++;
  const 몸 = 줄.slice(i + 1, 끝).join('\n');
  const 소 = 줄.slice(끝 + 1, 소끝).join('\n');
  문항.push({ 번호, 글: 손질(몸 + '\n' + 소) });
  i = 끝;
}

문항.sort((a, b) => a.번호 - b.번호);

if (json으로) {
  console.log(JSON.stringify(문항.map((x) => [`O${String(x.번호).padStart(2, '0')}`, x.글]), null, 1));
} else {
  console.log(`${파일} — 문항 ${문항.length}개\n${'='.repeat(66)}`);
  for (const x of 문항) console.log(`\n## ${x.번호}\n\n${x.글}\n`);
}

// 🔴 배점이 남아 있으면 알린다 — 남으면 출처가 드러난다
const 남은배점 = 문항.filter((x) => /\d\s*점|pts/.test(x.글));
if (남은배점.length) {
  console.error(`\n🔴 배점이 남은 문항 ${남은배점.length}개 — ${남은배점.map((x) => x.번호).join(' · ')}`);
  process.exit(1);
}
