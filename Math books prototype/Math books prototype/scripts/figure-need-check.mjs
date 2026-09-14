#!/usr/bin/env node
// 그림 도입 판정 v1.2 — Layer 1 자동 스코어링 (2026-07-18 세션 48 후반 튜닝)
// 2026-07-17 세션 47 신설 · 마스터 승인 v2 프레임워크 Layer 1 자동화
//
// v1.2 (튜닝):
//   - 서답형 감지 시 C 축 bonus (짧은 발문 저평가 대응)
//   - 관계도 유형 (벤 다이어그램) S 축 상한 1 (자유도 별도 규칙)
//   - solution.tex 파싱 편입 (답지 별도 판정)
//
// v1.1:
//   - V 축 slot-specific 파싱 (full blueprintText 오염 제거)
//   - C 축 집합·좌표·조건 패턴 확장 (n(A), \{...\}, \mathrm{A}(x,y))
//   - S 축 자유도 감지 정교화 (임의의·위를 움직이는·모수)
//   - 키워드 매칭 로그 (--debug 모드)
//
// 단일 출처: bank/그림-도입-기준.md v1.2
//
// 사용:
//   node scripts/figure-need-check.mjs <청사진.yaml>
//   node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex>
//   node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex> --solution <답지.tex>
//   node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex> --debug

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-need-check.mjs <청사진.yaml> [--problem <문제.tex>] [--solution <답지.tex>] [--debug]');
  process.exit(2);
}

const blueprintPath = args[0];
let problemPath = null;
let solutionPath = null;
let debug = false;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--problem' && args[i + 1]) problemPath = args[++i];
  else if (args[i] === '--solution' && args[i + 1]) solutionPath = args[++i];
  else if (args[i] === '--debug') debug = true;
}

if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 청사진 파일 없음: ${blueprintPath}`);
  process.exit(2);
}

const blueprintContent = fs.readFileSync(blueprintPath, 'utf8');
const problemContent = problemPath && fs.existsSync(problemPath) ? fs.readFileSync(problemPath, 'utf8') : null;
const solutionContent = solutionPath && fs.existsSync(solutionPath) ? fs.readFileSync(solutionPath, 'utf8') : null;

// ── 청사진 파싱 (multi-line variation_notes 지원) ─────────────────────
function parseSlots(yaml) {
  const slots = [];
  const lines = yaml.split('\n');
  let current = null;
  let inSlots = false;
  let currentField = null;
  let multiLineBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (!inSlots) continue;

    // 새 슬롯 시작
    const slotStart = line.match(/^\s*-\s+n:\s*(\d+)/);
    if (slotStart) {
      if (current) {
        if (currentField && multiLineBuffer.length) {
          current[currentField] = (current[currentField] || '') + ' ' + multiLineBuffer.join(' ');
        }
        slots.push(current);
      }
      current = { n: parseInt(slotStart[1]), lineNumber: i + 1 };
      currentField = null;
      multiLineBuffer = [];
      continue;
    }

    if (!current) continue;

    // 새 최상위 (섹션) 감지
    if (/^[a-z]/.test(line) && !/^\s/.test(line)) {
      if (currentField && multiLineBuffer.length) {
        current[currentField] = (current[currentField] || '') + ' ' + multiLineBuffer.join(' ');
      }
      slots.push(current);
      current = null;
      inSlots = false;
      break;
    }

    // 슬롯 필드
    const fieldMatch = line.match(/^\s{4}([a-z_]+):\s*(.*)$/);
    if (fieldMatch) {
      // 이전 필드 flush
      if (currentField && multiLineBuffer.length) {
        current[currentField] = (current[currentField] || '') + ' ' + multiLineBuffer.join(' ');
        multiLineBuffer = [];
      }
      const [, key, val] = fieldMatch;
      const cleanVal = val.replace(/^["']|["']$/g, '').trim();
      if (cleanVal === '|' || cleanVal === '>') {
        // multi-line block scalar
        currentField = key;
        current[key] = '';
      } else {
        current[key] = cleanVal;
        currentField = null;
      }
      continue;
    }

    // multi-line 이어붙임 (indent > 4)
    if (currentField && /^\s{6,}/.test(line)) {
      multiLineBuffer.push(line.trim());
    }
  }
  if (current) {
    if (currentField && multiLineBuffer.length) {
      current[currentField] = (current[currentField] || '') + ' ' + multiLineBuffer.join(' ');
    }
    slots.push(current);
  }
  return slots;
}

// ── 키워드 사전 ─────────────────────
const V_HIGH_KEYWORDS = [
  '자취', '궤도', '대응', '접선', '접점', '원주각', '중심각',
  '수직이등분선', '대칭', '평행이동', '반사', '이등변', '사도기',
  '무게중심', '외심', '내심', '수선의 발', '부채꼴', '활꼴', '현',
  '팬터그래프', 'GPS', '위성',
];
const V_MID_KEYWORDS = [
  '거리', '기울기', '수직', '평행', '내분', '외분', '교점',
  '만나', '삼각형', '사각형', '중점', '수선', '원의 방정식',
];
const V_LOW_KEYWORDS_SET = [
  '집합', '원소', '부분집합', '명제', '진리집합', '부호',
];

// ── C 축 · 슬롯 텍스트에서 객체 카운트 ─────────────────────
function scoreC(slot, problemBlock, dbg) {
  let objectCount = 0;
  const hits = {};
  const text = problemBlock || '';

  // 원: 방정식 형태 x²+y²=r² 계열 or 명사 "원"
  const circleCount = (text.match(/x\^\{?2\}?\s*\+\s*y\^\{?2\}?/g) || []).length
                    + (text.match(/원\s*[A-Z]|원\s*C[_{]?/g) || []).length;
  if (circleCount > 0) { objectCount += Math.min(circleCount, 3); hits.circles = circleCount; }

  // 직선: 접선, y=mx, ax+by+c=0
  const lineCount = (text.match(/직선|접선|y\s*=\s*[a-zA-Z][a-zA-Z]?\s*[x]/g) || []).length
                  + (text.match(/[a-z]?x\s*[+-]\s*[a-z]?y\s*[+-]/g) || []).length;
  if (lineCount > 0) { objectCount += Math.min(lineCount, 3); hits.lines = lineCount; }

  // 점: \mathrm{X}(a, b) 좌표 명시 or "점 X"
  const pointCount = (text.match(/\\mathrm\{[A-Z]\}\s*\(/g) || []).length
                   + (text.match(/점\s*(?:[A-Z]|\\mathrm\{[A-Z]\})/g) || []).length;
  if (pointCount > 0) { objectCount += Math.min(pointCount * 0.5, 3); hits.points = pointCount; }

  // 집합: n(A), A ⊂ B, A ∪ B, 집합 A
  const setCount = (text.match(/n\s*\(\s*[A-Z](?:\s*[∪∩⊂]\s*[A-Z])*\s*\)/g) || []).length
                 + (text.match(/집합\s*[A-Z]/g) || []).length
                 + (text.match(/\\cup|\\cap|\\subset/g) || []).length;
  if (setCount > 0) { objectCount += Math.min(setCount * 0.4, 3); hits.sets = setCount; }

  // 다각형
  const polyCount = (text.match(/삼각형|사각형|오각형|다각형/g) || []).length;
  if (polyCount > 0) { objectCount += polyCount; hits.polygons = polyCount; }

  // 조건 개수 (\begin{conditions} 안의 (가)(나)(다))
  const conditionCount = (text.match(/\([가나다라마]\)/g) || []).length;
  if (conditionCount >= 2) { objectCount += conditionCount * 0.5; hits.conditions = conditionCount; }

  // v1.2 서답형 bonus: 서답형 발문은 대체로 짧으나 구조 밀도 높음 · +1 bonus
  const isDescriptive = /서답형|서술형|주관식/.test(slot.section || '') || (slot.points && parseInt(slot.points) >= 6);
  if (isDescriptive) { objectCount += 1; hits.descriptive_bonus = true; }

  if (dbg) console.log(`   [C debug] objectCount=${objectCount.toFixed(1)} hits=${JSON.stringify(hits)}`);

  if (objectCount <= 1) return 0;
  if (objectCount <= 2.5) return 1;
  if (objectCount <= 4) return 2;
  return 3;
}

// ── V 축 · slot-specific 텍스트만 사용 ─────────────────────
function scoreV(slot, problemBlock, dbg) {
  // slot-specific 텍스트만 사용 (full blueprintText 오염 제거)
  const notes = (slot.variation_notes || '') + ' ' + (problemBlock || '');

  const highMatches = V_HIGH_KEYWORDS.filter(kw => notes.includes(kw));
  const midMatches = V_MID_KEYWORDS.filter(kw => notes.includes(kw));
  const setMatches = V_LOW_KEYWORDS_SET.filter(kw => notes.includes(kw));

  if (dbg) console.log(`   [V debug] HIGH=${JSON.stringify(highMatches)} MID=${JSON.stringify(midMatches)} SET=${JSON.stringify(setMatches)}`);

  // 집합 유형인데 high 통찰 없으면 관계도 유형 (V=1)
  if (setMatches.length >= 1 && highMatches.length === 0) return 1;

  if (highMatches.length >= 2) return 3;
  if (highMatches.length === 1 && midMatches.length >= 1) return 3;
  if (highMatches.length === 1) return 2;
  if (midMatches.length >= 2) return 2;
  if (midMatches.length === 1) return 1;
  return 0;
}

// ── S 축 · 자유도·상황부여 ─────────────────────
function scoreS(slot, problemBlock, dbg) {
  const text = (slot.variation_notes || '') + ' ' + (problemBlock || '');
  let score = 0;
  const hits = [];

  // v1.2 관계도 (벤 다이어그램·명제) 자유도 상한 1
  //   - 벤·명제는 mechanism·자취 없음. 자유도가 좌표 문제와 다름. S 축 상한 1.
  const isRelational = /벤 다이어그램|벤다이어그램|명제|진리집합|부호표/.test(text)
                    || (/집합/.test(text) && !/사도기|팬터그래프|GPS|위성|CCTV|거울|반사|자취|궤도/.test(text));
  if (isRelational) {
    hits.push('관계도 (S 상한 1)');
    return 1;
  }

  // 자유 위치 (임의의·움직이는)
  if (/움직이는|위를 움직|임의의|자유롭게/.test(text)) { score += 2; hits.push('자유 위치'); }

  // 모수 (변수 매개변수)
  if (/모수|매개변수|실수 [a-zA-Z](?![가-힣])/.test(text)) { score += 1; hits.push('모수'); }

  // 상황부여 (실물 mechanism)
  if (/사도기|팬터그래프|GPS|위성|CCTV|거울|반사(?!이|되)|로봇|손전등/.test(text)) {
    score += 3; hits.push('실물 mechanism');
  }

  // 자취 (원본→상 대응)
  if (/자취|궤도|대응(?!하)/.test(text)) { score += 2; hits.push('자취·대응'); }

  // 복잡 관계 (접선·접점 다수)
  const 접선Count = (text.match(/접선|접점/g) || []).length;
  if (접선Count >= 3) { score += 2; hits.push('접선 다수'); }
  else if (접선Count >= 1) { score += 1; hits.push('접선 1개'); }

  if (dbg) console.log(`   [S debug] score=${score} hits=${JSON.stringify(hits)}`);

  return Math.min(3, score);
}

// ── 게이트 B · 발문 자연성 ─────────────────────
function gateB(problemBlock) {
  if (!problemBlock) return { pass: true, warn: '(문제 텍스트 미제공)' };
  const patterns = [
    { pat: /그림과 같은|다음 그림|아래 그림|위의 그림|다음과 같은 그림|다음\s*\[?\s*그림\s*\]?/, msg: '그림 참조 어구' },
    { pat: /\[그림\]|<그림>/, msg: '그림 라벨' },
  ];
  for (const { pat, msg } of patterns) {
    if (pat.test(problemBlock)) {
      return { pass: false, warn: msg + ' 감지 → 그림 필수 (발문이 그림 참조)' };
    }
  }
  return { pass: true, warn: null };
}

// ── 게이트 C · 조판 비용 ─────────────────────
function gateC(slot, problemBlock) {
  const text = (slot.variation_notes || '') + ' ' + (problemBlock || '');
  if (/사도기|팬터그래프|GPS|위성|정밀|3차원|비선형|반사경/.test(text)) {
    return { pass: true, warn: 'HIGH · 정밀 mechanism · archive 재사용 or 마스터 사전 승인', cost: 'HIGH' };
  }
  if (/자취|궤도/.test(text)) {
    return { pass: true, warn: 'MEDIUM · 자취 곡선 · TikZ + PGFplots 검토', cost: 'MEDIUM' };
  }
  return { pass: true, warn: null, cost: 'LOW' };
}

// ── 판정 매트릭스 ─────────────────────
function judge(C, V, S, tier, audience) {
  const total = C + V + S;

  if (tier && tier.includes('star_5_premium')) {
    return {
      total,
      problem_needed: V >= 2 ? 'REQUIRED' : 'OPTIONAL',
      solution_needed: 'REQUIRED',
      reason: 'star_5_premium 정점 · 답지 자동 필수',
    };
  }

  const threshold = audience && audience.includes('최상위권') ? 5
                  : audience && audience.includes('상위권') ? 6
                  : audience && audience.includes('중상위') ? 4 : 5;

  if (total >= 7) return { total, problem_needed: 'REQUIRED', solution_needed: 'REQUIRED', reason: `스코어 ${total} · 필수` };
  if (total >= threshold) return { total, problem_needed: V === 3 ? 'REQUIRED' : 'OPTIONAL', solution_needed: 'RECOMMENDED', reason: `스코어 ${total} · 답지 권장` };
  if (total >= 3) return { total, problem_needed: 'NO', solution_needed: 'OPTIONAL', reason: `스코어 ${total} · 선택` };
  return { total, problem_needed: 'NO', solution_needed: 'NO', reason: '스코어 낮음 · 불필요' };
}

// ── 유형 추론 ─────────────────────
function typeInference(slot, problemBlock) {
  const text = (slot.variation_notes || '') + ' ' + (problemBlock || '');

  if (/사도기|팬터그래프|GPS|위성|CCTV|거울/.test(text)) {
    return { type: '유형 2 좌표평면 대응 + 유형 1 원리 도식', source: 'archive M-01~M-05 or Wikimedia Commons' };
  }
  if (/자취|궤도|대응/.test(text)) {
    return { type: '유형 2 좌표평면 대응 (자취)', source: 'TikZ 인라인 · PGFplots' };
  }
  if (/원주각|접선|접점|외심|내심/.test(text)) {
    return { type: '유형 2 좌표평면 대응 (원 기하)', source: 'TikZ 인라인' };
  }
  if (/집합|벤|명제|부호|진리집합/.test(text)) {
    return { type: '유형 3 관계도 (벤·명제 그래프)', source: 'TikZ 인라인 (표준 노드)' };
  }
  if (/삼각형|사각형|다각형|무게중심/.test(text)) {
    return { type: '유형 2 좌표평면 대응 (다각형)', source: 'TikZ 인라인' };
  }
  return { type: '유형 미정 (마스터 판단)', source: '검토' };
}

// ── Helper: 문제.tex에서 슬롯 블록 추출 ──
function extractProblemBlock(texContent, slotN) {
  const startRe = new RegExp(`\\\\begin\\{problem\\}\\{${slotN}\\}`);
  const startMatch = texContent.match(startRe);
  if (!startMatch) return null;
  const startIdx = startMatch.index;
  const endRe = /\\end\{problem\}/g;
  endRe.lastIndex = startIdx;
  const endMatch = endRe.exec(texContent);
  if (!endMatch) return null;
  return texContent.slice(startIdx, endMatch.index + endMatch[0].length);
}

// v1.2 답지 블록 추출 (\soltitle{N} ~ 다음 \soltitle 사이)
function extractSolutionBlock(texContent, slotN) {
  if (!texContent) return null;
  const re = new RegExp(`\\\\soltitle\\{${slotN}\\}[\\s\\S]*?(?=\\\\soltitle\\{|\\\\end\\{multicols\\})`);
  const m = texContent.match(re);
  return m ? m[0] : null;
}

// ── 메인 ─────────────────────
const slots = parseSlots(blueprintContent);
const audience = (blueprintContent.match(/target_audience:\s*(.+)/) || [])[1]?.trim() || '';

console.log(`🔍 그림 도입 판정 v1.2 (튜닝 · 서답형·관계도·답지)`);
console.log(`   청사진: ${blueprintPath}`);
console.log(`   대상층: ${audience}`);
console.log(`   슬롯: ${slots.length}건${debug ? ' · debug ON' : ''}`);
console.log('');

let requireCount = 0;
let recommendCount = 0;
const results = [];

for (const slot of slots) {
  const problemBlock = problemContent ? extractProblemBlock(problemContent, slot.n) : null;

  if (debug) console.log(`--- #${slot.n} · tier=${slot.tier || 'n/a'} ---`);
  const C = scoreC(slot, problemBlock, debug);
  const V = scoreV(slot, problemBlock, debug);
  const S = scoreS(slot, problemBlock, debug);
  const gB = gateB(problemBlock);
  const gC = gateC(slot, problemBlock);
  const j = judge(C, V, S, slot.tier, audience);
  const t = typeInference(slot, problemBlock);
  results.push({ slot, C, V, S, gB, gC, j, t });

  const badge = j.solution_needed === 'REQUIRED' ? '🌟'
              : j.solution_needed === 'RECOMMENDED' ? '✨'
              : j.solution_needed === 'OPTIONAL' ? '·' : ' ';
  console.log(`${badge} #${slot.n} · C${C} V${V} S${S} = ${j.total} · ${slot.tier || 'n/a'}`);
  console.log(`   문제 ${j.problem_needed} · 답지 ${j.solution_needed}`);
  console.log(`   유형: ${t.type}`);
  if (!gB.pass) console.log(`   🔴 게이트 B: ${gB.warn}`);
  if (gC.cost !== 'LOW') console.log(`   🟡 게이트 C: ${gC.warn}`);
  console.log('');

  if (j.solution_needed === 'REQUIRED') requireCount++;
  if (j.solution_needed === 'RECOMMENDED') recommendCount++;
}

console.log('=== 요약 ===');
console.log(`   답지 REQUIRED: ${requireCount}건`);
console.log(`   답지 RECOMMENDED: ${recommendCount}건`);
console.log(`   슬롯 총계: ${slots.length}건`);
console.log('');
console.log('=== 관련 자산 ===');
console.log('   bank/그림-도입-기준.md v1.0 (단일 출처)');
console.log('   bank/도해-카탈로그.md (archive M-01~M-N)');
console.log('   scripts/figure-check.mjs + 3종 (Layer 3 예정)');

process.exit(0);
