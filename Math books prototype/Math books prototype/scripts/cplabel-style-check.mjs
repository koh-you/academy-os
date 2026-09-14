#!/usr/bin/env node
// Critical Point 라벨·본문 언어 스타일 검수 v2
// 2026-07-13 세션 35 신설 · v2 2026-07-22 세션 71 대규모 확장
//
// v2 확장:
//   ① RED_ENDINGS 대폭 확대 (확인·조사·판단·결정·판정·산정·도입·구성·형성·유도·유지·전개·해결)
//   ② 본문 검사 신설 : \dmcplabel{X}: 뒤 서술문에서도 동일 필터
//   ③ 짧은 압축 명사구 감지 : 2~3 어절 · 조사·서술어 부재 → RED
//   ④ invented-term 사전 로드 : bank/critical-point-금지어-사전.md §1
//   ⑤ 얼버무리는 표현 감지 : 재검토하면·종합하여·정리하면·살펴보면·파악하면 등
//   ⑥ --strict 모드 : RED 시 exit 1 강제 (--soft 반대)
//
// 사용:
//   node scripts/cplabel-style-check.mjs <답지.tex> [file2.tex ...]
//   node scripts/cplabel-style-check.mjs --all           # output/**/*답지*.tex·*solution*.tex
//   node scripts/cplabel-style-check.mjs --all --soft    # RED 검출해도 exit 0
//   node scripts/cplabel-style-check.mjs --all --strict  # RED 시 exit 1
//
// 기준: bank/critical-point-금지어-사전.md v1.0 · feedback_critical_point_style.md v2

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const softMode = args.includes('--soft');
const strictMode = args.includes('--strict');
const allMode = args.includes('--all');

function findAnswerSheets(rootDir) {
  const results = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && /\.tex$/.test(e.name) && /(답지|solution)/.test(e.name)) {
        results.push(full);
      }
    }
  }
  walk(rootDir);
  return results.sort();
}

let files;
if (allMode) {
  files = findAnswerSheets('output');
} else {
  files = args.filter(a => !a.startsWith('--'));
  if (files.length === 0) {
    console.error('Usage: node scripts/cplabel-style-check.mjs <답지.tex> [파일2 ...]');
    console.error('       node scripts/cplabel-style-check.mjs --all [--soft|--strict]');
    process.exit(2);
  }
}

// v2 확장 RED 종결어미 (pseudo-formal · 자연 서술 대체 필요)
const RED_ENDINGS = [
  { re: /\s*처리\s*$/, hint: '"XX 처리" 프로그래밍 은어 → "XX인 경우 따로"' },
  { re: /\s*검증\s*$/, hint: '"XX 검증" 개발자 은어 → "XX 확인한다"' },
  { re: /\s*필수\s*$/, hint: '"XX 필수" formal → "XX 해야 한다"' },
  { re: /\s*동시\s*$/, hint: '"XX 동시" 압축 → "XX 두 조건 모두"' },
  { re: /\s*재확인\s*$/, hint: '"재확인" 반복 압축 → "다시 확인"' },
  { re: /\s*도출\s*$/, hint: '"XX 도출" formal → "XX 얻는다"' },
  // v2 신규 (2026-07-22 세션 71)
  { re: /\s*확인\s*$/, hint: '"XX 확인" pseudo-formal 종결 → "XX 확인한다" · "XX 를 확인"' },
  { re: /\s*조사\s*$/, hint: '"XX 조사" pseudo-formal → "XX 를 살핀다"' },
  { re: /\s*판단\s*$/, hint: '"XX 판단" pseudo-formal → "XX 를 판단한다"' },
  { re: /\s*결정\s*$/, hint: '"XX 결정" pseudo-formal → "XX 가 정해진다"' },
  { re: /\s*판정\s*$/, hint: '"XX 판정" pseudo-formal → "XX 를 확인한다"' },
  { re: /\s*산정\s*$/, hint: '"XX 산정" pseudo-formal → "XX 를 계산한다"' },
  { re: /\s*도입\s*$/, hint: '"XX 도입" pseudo-formal → "XX 를 도입한다"' },
  { re: /\s*구성\s*$/, hint: '"XX 구성" pseudo-formal → "XX 를 세운다"' },
  { re: /\s*형성\s*$/, hint: '"XX 형성" pseudo-formal → "XX 를 이룬다"' },
  { re: /\s*유도\s*$/, hint: '"XX 유도" pseudo-formal → "XX 가 나온다"' },
  { re: /\s*해결\s*$/, hint: '"XX 해결" pseudo-formal → "XX 를 푼다"' },
];

const RED_JARGON = [
  { re: /예외\s*처리/, hint: '"예외 처리" 프로그래밍 용어 → "XX인 경우 따로 확인"' },
  { re: /케이스\s*분류/, hint: '"케이스 분류" → "경우 나누기"' },
  { re: /엣지\s*케이스/, hint: '"엣지 케이스" 개발자 은어 → "경계 경우"' },
  { re: /카운트/, hint: '"카운트" → "세기"' },
  { re: /리팩터링/, hint: '"리팩터링" 개발자 용어 (수학 답지 사용 금지)' },
];

// v2 신규 : 발명 어휘 사전 (bank/critical-point-금지어-사전.md §1)
const RED_INVENTED = [
  { re: /반\s*무한/, hint: '"반무한" 신조어 → "한쪽 방향으로 뻗은" · "시작점에서 뻗어 나가는"' },
  { re: /시작점\s*지남/, hint: '"시작점 지남" 압축 명사구 → "곡선이 시작점을 지난다"' },
  { re: /만남의?\s*개수/, hint: '"만남의 개수" 신조어 → "교점의 개수" · "만나는 점의 개수"' },
  { re: /두\s*경계\s*(를|가)?\s*함께\s*조사/, hint: '"두 경계 함께 조사" → "두 경계값을 각각 확인"' },
  { re: /실효성\s*확인/, hint: '"실효성 확인" pseudo-formal → "실제로 성립하는지 확인"' },
  { re: /두\s*축\s*이다/, hint: '"두 축이다" 압축 → "두 조건이 결정 요인이다"' },
  { re: /접함\s*으로\s*갈리는/, hint: '"접함으로 갈리는" → "접선 조건으로 나뉘는"' },
  { re: /유일\s*만남/, hint: '"유일 만남" 압축 → "한 점에서만 만남"' },
  { re: /경계\s*사이\s*범위/, hint: '"경계 사이 범위" → "두 경계값 사이의 구간"' },
  { re: /임계\s*상황/, hint: '"임계 상황" → "경계값" · "극한 조건"' },
  { re: /임계\s*상수/, hint: '"임계 상수" → "경계값 상수"' },
];

// v2 신규 : 얼버무리는 표현 (본문 서술 검사)
const RED_HEDGING = [
  { re: /재검토\s*(하면|한다)/, hint: '"재검토하면" 얼버무림 → 명확한 유도 서술로 대체' },
  { re: /종합\s*(하여|한다)/, hint: '"종합하여" 얼버무림 → 구체적 조건 나열' },
  { re: /(정리|살펴)\s*보면(?!\s*[가-힣])/, hint: '"정리하면·살펴보면" 삭제 후 결과 바로' },
  { re: /파악\s*(하면|한다)/, hint: '"파악하면" → "확인하면"' },
];

// 라벨 안 등호 "=" 사용 (수식-라벨 혼용)
const RED_EQ_LABEL = /^[^=]{2,}=[^=]{2,}$/;

// v2 신규 : 짧은 압축 명사구 (2~3 어절 · 조사·서술어 부재)
const JOSA_PATTERN = /(이|가|을|를|의|에|와|과|로|으로|에서|부터|까지|처럼|보다|만|은|는)\b/;
const ENDING_PATTERN = /(다|는가|한다|이다|된다|여야\s*한다|이라|이라면|이다면)$/;

function isCompressedNounPhrase(text) {
  // 수식 인라인·LaTeX 명령 제거
  const clean = text.replace(/\$[^$]+\$/g, 'X').replace(/\\[a-zA-Z]+/g, '');
  const tokens = clean.trim().split(/\s+/).filter(t => t.length > 0);
  if (tokens.length < 2 || tokens.length > 3) return false;  // 2~3 어절만
  if (JOSA_PATTERN.test(clean)) return false;  // 조사 있음 GREEN
  if (ENDING_PATTERN.test(clean)) return false;  // 종결어미 있음 GREEN
  // 순수 명사 나열
  return true;
}

let redCount = 0;
let yellowCount = 0;
let totalLabels = 0;
let totalBodies = 0;

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }

  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const filename = path.basename(file);

  // \cplabel{...} · \dmcplabel{...} 라벨 + 본문 추출 (v2: label 뒤 : 이후 본문까지)
  // 패턴: \dmcplabel{LABEL}: BODY... (다음 \dmcplabel 또는 \end{...} 까지)
  // v2.1: CRLF 대응 · $ anchor 제거 · label 은 balanced brace (1 level nested) 허용
  const entries = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\r$/, '');  // CRLF strip
    // 1 level nested brace 허용 : (?:[^{}]|\{[^{}]*\})+
    const re = /\\(?:dm)?cplabel\{((?:[^{}]|\{[^{}]*\})+)\}\s*:\s*(.*)/;
    const m = re.exec(line);
    if (m) {
      const label = m[1].trim();
      let body = m[2].trim();
      entries.push({ file: filename, line: i + 1, label, body });
    } else {
      // label 만 있는 경우 (fallback)
      const re2 = /\\(?:dm)?cplabel\{((?:[^{}]|\{[^{}]*\})+)\}/g;
      let m2;
      while ((m2 = re2.exec(line)) !== null) {
        entries.push({ file: filename, line: i + 1, label: m2[1].trim(), body: '' });
      }
    }
  }

  if (entries.length === 0) continue;

  console.log(`\n📄 ${filename} — cplabel ${entries.length}개`);
  totalLabels += entries.length;
  totalBodies += entries.filter(e => e.body).length;

  for (const entry of entries) {
    const issues = [];

    // ── LABEL 검사 ──
    // 1. 길이
    //
    // 🔴 2026-07-30 세션 104 마스터 결정 — **완결 문장 우선**
    //
    // 길이 권장(15자)과 \dmcplabel 규약 v1.8("라벨은 반드시 완결 문장 · 명사구 종결
    // 절대 금지")이 구조적으로 상충한다. 한국어 완결 문장을 15자에 담으면 필연적으로
    // 명사구로 압축되어 v1.8 RED(RED_ENDINGS·압축 명사구)를 유발한다.
    // 즉 길이 권장을 지키면 상위 규약을 어기게 된다.
    //
    // 마스터 판정: **완결 문장이 우선**. 완결 종결어미로 끝나는 라벨은 길이 검사 면제.
    // (명사구로 끝나면서 긴 라벨은 여전히 YELLOW — 그건 압축 실패지 문장이 아니다.)
    const displayLen = entry.label.replace(/\\[a-zA-Z]+/g, '').length;
    const isCompleteSentence = /(다|한다|이다|된다|난다|진다|온다|간다)\.?$/.test(entry.label.trim());
    if (displayLen > 22 && !isCompleteSentence) {
      issues.push({ level: 'YELLOW', zone: 'label', hint: `라벨 길이 ${displayLen}자 (권장 15자 이내) · 완결 문장이 아니므로 면제 대상 아님` });
    }

    // 2. 압축 종결어미
    for (const p of RED_ENDINGS) {
      if (p.re.test(entry.label)) issues.push({ level: 'RED', zone: 'label', hint: p.hint });
    }

    // 3. 개발자 은어
    for (const p of RED_JARGON) {
      if (p.re.test(entry.label)) issues.push({ level: 'RED', zone: 'label', hint: p.hint });
    }

    // 4. 발명 어휘 (v2 신규)
    for (const p of RED_INVENTED) {
      if (p.re.test(entry.label)) issues.push({ level: 'RED', zone: 'label', hint: p.hint });
    }

    // 5. 등호 라벨
    const stripped = entry.label.replace(/\$[^$]+\$/g, '');
    if (RED_EQ_LABEL.test(stripped.trim())) {
      issues.push({ level: 'RED', zone: 'label', hint: '라벨에 등호 "=" 사용 → 서술형 (A는 B이다)' });
    }

    // 6. 짧은 압축 명사구 (v2 신규 · 2~3어절)
    if (isCompressedNounPhrase(entry.label)) {
      issues.push({ level: 'RED', zone: 'label', hint: '짧은 압축 명사구 (조사·서술어 부재) → 자연 문장 서술' });
    }

    // ── BODY 검사 (v2 신규) ──
    if (entry.body) {
      for (const p of RED_ENDINGS) {
        if (p.re.test(entry.body)) issues.push({ level: 'RED', zone: 'body', hint: `[본문] ${p.hint}` });
      }
      for (const p of RED_JARGON) {
        if (p.re.test(entry.body)) issues.push({ level: 'RED', zone: 'body', hint: `[본문] ${p.hint}` });
      }
      for (const p of RED_INVENTED) {
        if (p.re.test(entry.body)) issues.push({ level: 'RED', zone: 'body', hint: `[본문] ${p.hint}` });
      }
      for (const p of RED_HEDGING) {
        if (p.re.test(entry.body)) issues.push({ level: 'RED', zone: 'body', hint: `[본문 얼버무림] ${p.hint}` });
      }
    }

    if (issues.length > 0) {
      console.log(`   line ${entry.line}: "${entry.label}"`);
      if (entry.body) console.log(`     └ body: "${entry.body.slice(0, 80)}${entry.body.length > 80 ? '...' : ''}"`);
      for (const iss of issues) {
        const marker = iss.level === 'RED' ? '🔴' : '⚠️';
        console.log(`     ${marker} [${iss.zone}] ${iss.hint}`);
        if (iss.level === 'RED') redCount++;
        else yellowCount++;
      }
    }
  }
}

console.log('');
console.log(`===== 요약: ${files.length}개 파일 · cplabel ${totalLabels}개 · 본문 ${totalBodies}개 · RED ${redCount}건 · YELLOW ${yellowCount}건 =====`);

if (redCount > 0) {
  if (softMode) {
    console.warn(`⚠️  --soft: RED 검출됐지만 exit 0.`);
    process.exit(0);
  }
  console.error(`🔴 RED ${redCount}건. cplabel/본문 언어 스타일 위반 — 자연 국어로 재작성 필요.`);
  process.exit(1);
}

if (yellowCount > 0) {
  console.warn(`⚠️  YELLOW ${yellowCount}건. 검토 권장.`);
}

if (redCount === 0 && yellowCount === 0) {
  console.log('✅ cplabel 언어 스타일 통과.');
}
process.exit(0);
