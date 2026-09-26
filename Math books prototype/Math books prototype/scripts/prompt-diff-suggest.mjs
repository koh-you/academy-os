#!/usr/bin/env node
// prompt-diff-suggest.mjs — CFES Layer C 보조 · 프롬프트 강화 diff 제안 (적용 금지)
// 2026-07-29 세션 103 신설 (기획안 v1.2 §3.3 Layer C · 결정 #7 자동 적용 금지)
//
// 목적:
//   retrospective-learner 가 threshold 초과 F유형을 낸 경우, 그 유형의 재발을 줄일
//   프롬프트 강화 "제안문" 만 생성한다. 실제 에이전트 파일 수정은 절대 금지 ·
//   마스터 승인 후에만 사람이 적용한다 (v1.2 결정 #7 · 자동 프롬프트 편집 금지).
//
// 시그니처·강화 방향 SSOT : scripts/lib/cfes-flaw-catalog.mjs
//
// 동작:
//   대상 에이전트 문서(.claude/agents/<agent>.md)를 읽어 섹션 헤더를 스캔하고,
//   카탈로그의 "프롬프트 강화 방향"을 어느 섹션 근처에 넣으면 좋을지 사람이 읽을
//   제안 리포트를 stdout 에 출력한다. 파일은 쓰지 않는다.
//
// 사용법:
//   node scripts/prompt-diff-suggest.mjs --suggest --flaw F5 [--agent problem-author]
//
// 반환 : 0 = 제안 출력 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FLAW_CATALOG_C } from './lib/cfes-flaw-catalog.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const AGENTS_DIR = path.join(ROOT, '.claude', 'agents');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = { suggest: false, flaw: null, agent: null };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--suggest') opt.suggest = true;
  else if (a === '--flaw') opt.flaw = args[++i];
  else if (a === '--agent') opt.agent = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log('사용법: --suggest --flaw F5 [--agent problem-author]');
    process.exit(0);
  }
}

if (!opt.suggest) { console.error('❌ --suggest 필수'); process.exit(2); }
if (!opt.flaw || !FLAW_CATALOG_C[opt.flaw]) {
  console.error(`❌ --flaw 오용 : ${opt.flaw} (F1~F10)`); process.exit(2);
}

const cat = FLAW_CATALOG_C[opt.flaw];
const agentName = opt.agent || cat.defaultAgent;
const agentPath = path.join(AGENTS_DIR, `${agentName}.md`);

// ── 대상 에이전트 섹션 스캔 ───────────────────────────────
let sectionCandidates = [];
let agentExists = fs.existsSync(agentPath);
if (agentExists) {
  const lines = fs.readFileSync(agentPath, 'utf-8').split(/\r?\n/);
  const headers = [];
  lines.forEach((ln, idx) => {
    const m = ln.match(/^(#{1,4})\s+(.*)$/);
    if (m) headers.push({ line: idx + 1, level: m[1].length, text: m[2].trim() });
  });
  const hintLow = cat.sectionHint.toLowerCase();
  // sectionHint 를 포함하는 헤더 우선 · 없으면 전체 헤더 상위 몇 개
  sectionCandidates = headers.filter(h => h.text.toLowerCase().includes(hintLow));
  if (sectionCandidates.length === 0) {
    sectionCandidates = headers.slice(0, 6);
  }
}

// ── 제안 리포트 출력 (파일 미수정) ────────────────────────
const L = [];
L.push(`# 프롬프트 강화 제안 (prompt-diff-suggest · 제안만 · 적용 금지)`);
L.push('');
L.push(`> ⚠️ 이 리포트는 **제안문**입니다. 실제 에이전트 파일은 수정하지 않았습니다.`);
L.push(`> **마스터 승인 대기** — 승인 시 사람이 직접 반영하십시오 (CFES v1.2 결정 #7 · 자동 프롬프트 편집 금지).`);
L.push('');
L.push(`## 대상`);
L.push(`- 결함 유형 : **${opt.flaw} ${cat.name}**`);
L.push(`- 정의 : ${cat.def}`);
L.push(`- 대상 에이전트 : \`.claude/agents/${agentName}.md\`${agentExists ? '' : '  ⚠️ (파일 없음 · 경로 확인 필요)'}`);
L.push(`- 삽입 섹션 힌트 키워드 : "${cat.sectionHint}"`);
L.push('');
L.push(`## 카탈로그 강화 방향 (SSOT: scripts/lib/cfes-flaw-catalog.mjs)`);
L.push(`> ${cat.prompt}`);
L.push('');
L.push(`## 검출 시그니처 (이 문구가 검수 리포트에 반복되면 ${opt.flaw})`);
L.push(cat.signatures.map(s => `\`${s}\``).join(' · '));
L.push('');
L.push(`## 제안 삽입 위치`);
if (!agentExists) {
  L.push(`- 대상 에이전트 문서를 찾지 못했습니다. \`.claude/agents/\` 에서 정확한 파일명을 확인하십시오.`);
} else if (sectionCandidates.length === 0) {
  L.push(`- 헤더를 찾지 못했습니다. 문서 말미에 새 하위 섹션으로 추가를 검토하십시오.`);
} else {
  L.push(`아래 섹션 근처(자기점검·게이트 항목)에 강화 문장 삽입을 제안합니다:`);
  L.push('');
  L.push(`| line | level | 섹션 헤더 |`);
  L.push(`|---:|:---:|---|`);
  for (const h of sectionCandidates) {
    L.push(`| ${h.line} | ${'#'.repeat(h.level)} | ${h.text} |`);
  }
}
L.push('');
L.push(`## 제안 추가 문장 (사람이 문맥에 맞게 다듬어 반영)`);
L.push('```md');
L.push(`- 🔴 [${opt.flaw} ${cat.name} 재발 방지] ${cat.prompt}`);
L.push('```');
L.push('');
L.push(`---`);
L.push(`_생성 : prompt-diff-suggest.mjs · 파일 미수정 · 마스터 승인 후 수동 반영_`);

console.log(L.join('\n'));
process.exit(0);
