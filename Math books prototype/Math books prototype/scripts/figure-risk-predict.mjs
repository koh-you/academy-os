#!/usr/bin/env node
// 그림 리스크 예측 v1.0 — Layer 3 · G7
// 2026-07-17 세션 47 신설 · bank/그림-리스크-매트릭스.md 자동화
//
// 목적:
//   신규 삽화 도입 iteration 리스크 R (0~10) 사전 예측 · GREEN/YELLOW/RED/CRITICAL 판정.
//   R_source + R_mechanism + R_precision + R_novelty − R_mitigation
//
// 사용:
//   node scripts/figure-risk-predict.mjs <청사진.yaml> [--problem <문제.tex>]
//   node scripts/figure-risk-predict.mjs <청사진.yaml> --problem <문제.tex> --debug
//
// 단일 출처: bank/그림-리스크-매트릭스.md v1.0

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/figure-risk-predict.mjs <청사진.yaml> [--problem <문제.tex>] [--debug]');
  process.exit(2);
}

const blueprintPath = args[0];
let problemPath = null;
let debug = false;
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--problem' && args[i + 1]) problemPath = args[++i];
  else if (args[i] === '--debug') debug = true;
}

if (!fs.existsSync(blueprintPath)) {
  console.error(`❌ 청사진 파일 없음: ${blueprintPath}`);
  process.exit(2);
}

const blueprintContent = fs.readFileSync(blueprintPath, 'utf8');
const problemContent = problemPath && fs.existsSync(problemPath) ? fs.readFileSync(problemPath, 'utf8') : null;

// ── 청사진 슬롯 파싱 (figure_needed·figure_type·figure_source 필드) ─────────────────────
function parseSlots(yaml) {
  const slots = [];
  const lines = yaml.split('\n');
  let current = null;
  let inSlots = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^slots:\s*$/.test(line)) { inSlots = true; continue; }
    if (!inSlots) continue;

    const slotStart = line.match(/^\s*-\s+n:\s*(\d+)/);
    if (slotStart) {
      if (current) slots.push(current);
      current = { n: parseInt(slotStart[1]) };
      continue;
    }
    if (!current) continue;

    // 새 최상위 감지
    if (/^[a-z]/.test(line) && !/^\s/.test(line)) {
      slots.push(current);
      current = null;
      inSlots = false;
      break;
    }

    const fieldMatch = line.match(/^\s{4}([a-z_]+):\s*(.*)$/);
    if (fieldMatch) {
      const [, key, val] = fieldMatch;
      current[key] = val.replace(/^["']|["']$/g, '').trim();
    }
  }
  if (current) slots.push(current);
  return slots;
}

// ── 문제.tex에서 슬롯 블록 추출 ─────────────────────
function extractProblemBlock(texContent, slotN) {
  if (!texContent) return null;
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

// ── R_source · 소스 성숙도 ─────────────────────
function scoreSource(slot, problemBlock) {
  const src = (slot.figure_source || '').toLowerCase();
  const mech = (slot.mechanism_primary || slot.variation_notes || '') + ' ' + (problemBlock || '');
  const hits = [];

  if (/archive|카탈로그|m-0\d/.test(src)) { hits.push('archive'); return { score: 0, hits }; }
  if (/commons|wikimedia/.test(src)) { hits.push('Commons'); return { score: 1, hits }; }
  if (/참고자료|reference|crop/.test(src)) { hits.push('참고자료'); return { score: 1, hits }; }
  if (/matplotlib|python|정밀/.test(src) || /matplotlib|정밀/.test(mech)) { hits.push('matplotlib'); return { score: 3, hits }; }
  if (/tikz|인라인/.test(src) || !src) {
    // mechanism 감지 시 신규 여부 판정
    if (/사도기|팬터그래프|GPS|위성|CCTV|거울|반사경|3차원/.test(mech)) {
      hits.push('신규 TikZ mechanism'); return { score: 2, hits };
    }
    hits.push('TikZ 표준 기하'); return { score: 1, hits };
  }
  hits.push('unknown source'); return { score: 2, hits };
}

// ── R_mechanism · Mechanism 복잡도 ─────────────────────
function scoreMechanism(slot, problemBlock) {
  const text = (slot.mechanism_primary || slot.variation_notes || '') + ' ' + (problemBlock || '');
  const hits = [];

  if (/사도기|팬터그래프|4-rod|링크 4/.test(text)) { hits.push('다중 링크 mechanism'); return { score: 2, hits }; }
  if (/GPS|세 위성|삼변측량|다물체/.test(text)) { hits.push('다중 객체'); return { score: 3, hits }; }
  if (/로봇팔|관절|거울|반사(?!이|되)/.test(text)) { hits.push('단순 mechanism'); return { score: 1, hits }; }
  if (/자취.+대응|원본.+상|매개.+자취/.test(text)) { hits.push('자취·대응 관계'); return { score: 1, hits }; }
  if (/벤 다이어그램|명제|부호표|진리집합/.test(text)) { hits.push('관계도'); return { score: 0, hits }; }
  hits.push('정적 도형'); return { score: 0, hits };
}

// ── R_precision · 수치 정밀도 ─────────────────────
function scorePrecision(slot, problemBlock) {
  const text = (slot.mechanism_primary || slot.variation_notes || '') + ' ' + (problemBlock || '');
  const hits = [];

  const 접선Count = (text.match(/접선|접점|tip|boundary/gi) || []).length;
  const 비율Count = (text.match(/비율|배|확대|축소|k배/g) || []).length;
  const 각도Count = (text.match(/각도|°|deg/g) || []).length;

  let score = 0;
  if (접선Count >= 1) { score += 1; hits.push(`tip boundary (${접선Count})`); }
  if (비율Count >= 1) { score += 1; hits.push(`비율 (${비율Count})`); }
  if (각도Count >= 2) { score += 1; hits.push(`각도 (${각도Count})`); }

  return { score: Math.min(2, score), hits };
}

// ── R_novelty · 신규성 ─────────────────────
function scoreNovelty(slot, problemBlock) {
  const text = (slot.mechanism_primary || slot.variation_notes || '') + ' ' + (problemBlock || '');
  const hits = [];

  // archive M-01~M-05 매칭
  const archives = [
    { code: 'M-01', kws: ['사도기', '팬터그래프'] },
    { code: 'M-02', kws: ['GPS', '위성', '삼변측량'] },
    { code: 'M-03', kws: ['로봇팔', '관절'] },
    { code: 'M-04', kws: ['거울', '반사'] },
    { code: 'M-05', kws: ['궤도', '케플러', '타원'] },
  ];
  for (const a of archives) {
    if (a.kws.some(kw => text.includes(kw))) {
      hits.push(`${a.code} 매칭`);
      return { score: 0, hits };
    }
  }

  // 표준 기하 (원·접선·자취) — 부분 매칭
  if (/원.+접선|자취|두 원|원주각|수직이등분선/.test(text)) {
    hits.push('표준 기하 부분 매칭');
    return { score: 1, hits };
  }

  hits.push('완전 신규');
  return { score: 2, hits };
}

// ── R_mitigation · 완화 요소 ─────────────────────
function scoreMitigation(slot) {
  const notes = (slot.figure_source || '') + ' ' + (slot.mechanism_primary || '') + ' ' + (slot.variation_notes || '');
  const hits = [];
  let deduct = 0;

  // 자동 도구 예정 (default: figure-check + tip-boundary + label-overlap 모두 예정)
  // TikZ는 tip-boundary 미해당 (matplotlib script만) → 자동 2점 차감
  deduct += 1; hits.push('figure-check 예정');
  deduct += 1; hits.push('figure-label-overlap-check 예정');
  if (/matplotlib|python/.test(notes)) {
    deduct += 1; hits.push('figure-tip-boundary-check 예정');
  }
  // 마스터 사전 승인 (fields·notes에 명시 시)
  if (/승인|master.approved|사전 확인/.test(notes)) {
    deduct += 1; hits.push('마스터 사전 승인');
  }

  return { score: Math.min(3, deduct), hits };
}

// ── 판정 ─────────────────────
function judge(R) {
  if (R <= 2) return { level: 'GREEN', iter: '0~1회', action: '즉시 진행' };
  if (R <= 4) return { level: 'YELLOW', iter: '1~3회', action: '마스터 사전 승인 권장' };
  if (R <= 7) return { level: 'RED', iter: '4~10회', action: 'archive 대체 검토 필수 · 진행 전 마스터 승인' };
  return { level: 'CRITICAL', iter: '10+회', action: '도입 재검토 · Commons/참고자료 우회' };
}

// ── 메인 ─────────────────────
const slots = parseSlots(blueprintContent);

console.log(`🔍 그림 리스크 예측 v1.0 (G7)`);
console.log(`   청사진: ${blueprintPath}`);
console.log(`   문제: ${problemPath || '(미제공)'}`);
console.log(`   슬롯: ${slots.length}건${debug ? ' · debug ON' : ''}`);
console.log('');

let redCount = 0;
let yellowCount = 0;
let criticalCount = 0;

for (const slot of slots) {
  // figure_needed 필드가 없거나 명시적 NO면 skip
  const needed = (slot.figure_needed || '').toLowerCase();
  if (needed === 'no' || needed === 'false') continue;

  const problemBlock = extractProblemBlock(problemContent, slot.n);
  // 이미 그림 있고 archive 매칭이면 skip 옵션 (여기서는 항상 평가)

  const rs = scoreSource(slot, problemBlock);
  const rm = scoreMechanism(slot, problemBlock);
  const rp = scorePrecision(slot, problemBlock);
  const rn = scoreNovelty(slot, problemBlock);
  const rmit = scoreMitigation(slot);
  const R = rs.score + rm.score + rp.score + rn.score - rmit.score;
  const j = judge(R);

  const badge = j.level === 'CRITICAL' ? '🔴🔴' : j.level === 'RED' ? '🔴' : j.level === 'YELLOW' ? '🟡' : '🟢';

  console.log(`${badge} #${slot.n} · R=${R} (${j.level} · ${j.iter}) · ${slot.tier || 'n/a'}`);
  if (debug) {
    console.log(`   R_source=${rs.score} [${rs.hits.join(', ')}]`);
    console.log(`   R_mech=${rm.score} [${rm.hits.join(', ')}]`);
    console.log(`   R_prec=${rp.score} [${rp.hits.join(', ')}]`);
    console.log(`   R_nov=${rn.score} [${rn.hits.join(', ')}]`);
    console.log(`   R_mit=−${rmit.score} [${rmit.hits.join(', ')}]`);
  }
  console.log(`   → ${j.action}`);
  console.log('');

  if (j.level === 'CRITICAL') criticalCount++;
  else if (j.level === 'RED') redCount++;
  else if (j.level === 'YELLOW') yellowCount++;
}

console.log('=== 요약 ===');
console.log(`   CRITICAL: ${criticalCount}건 · RED: ${redCount}건 · YELLOW: ${yellowCount}건`);
console.log('');
console.log('=== 관련 자산 ===');
console.log('   bank/그림-리스크-매트릭스.md v1.0');
console.log('   bank/도해-카탈로그.md (archive M-01~M-05)');
console.log('   Gate 4.5 v3.10 · G7 (본 도구)');

process.exit(criticalCount + redCount > 0 ? 3 : 0);
