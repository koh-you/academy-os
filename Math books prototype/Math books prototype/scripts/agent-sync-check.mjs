#!/usr/bin/env node
// agent-sync-check.mjs — 검수 에이전트 정의와 실제 스크립트 sync 검증
// 2026-07-23 세션 75 신설 · feedback_document_only_rule_gap.md 4축 편입 원칙 자동 감시
//
// 문제: 세션 71~74 신설 검수 도구가 refresh-all 에는 편입됐으나 .claude/agents/{solution,problem,exam}-review.md
//       정의 파일의 "자동 도구 순차 실행" 섹션에 편입 안됨.
// 해결: 각 에이전트 정의 파일이 언급하는 스크립트 목록 vs 실제 scripts/ 존재하는 검수 도구 목록 비교.
//       미편입 감지 시 리포트.
//
// Usage:
//   node scripts/agent-sync-check.mjs
//   node scripts/agent-sync-check.mjs --agent solution-review

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const agentFilter = args.includes('--agent') ? args[args.indexOf('--agent') + 1] : null;

const projectRoot = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')))
  .replace(/[\/\\]scripts$/, '');
const agentsDir = path.join(projectRoot, '.claude', 'agents');
const scriptsDir = path.join(projectRoot, 'scripts');

// 에이전트별 담당 스크립트 범위 매핑 (역할)
const AGENT_SCOPE = {
  'solution-review': {
    prefixes: ['cplabel', 'solution-verbose', 'solution-graph-need', 'solution-narrative',
               'equation-chain', 'equation-step-separation', 'dmanswer', 'dmsolution',
               'dmspace-newpage', 'fraction-consistency', 'figure-tikz-label',
               'cm1-curriculum', 'master-feedback', 'permanent-policy'],
    label: '답지 검수',
  },
  'problem-review': {
    prefixes: ['insight-depth', 'insight-novelty', 'procedural-friction', 'tool-diversity',
               'signature', 'standard', 'blueprint-validate', 'seed-fetch',
               'choices-width', 'overfull', 'figure', 'math-verify',
               'cm1-curriculum', 'master-feedback', 'permanent-policy', 'depth-score-compare'],
    label: '문제 검수',
  },
  'exam-review': {
    prefixes: ['blueprint-validate', 'signature', 'structure-signature', 'cross-round',
               'composite-distribution', 'v51-composite', 'series-type-pool',
               'total-score', 'star-consistency', 'exam-scope-filter',
               'choices-width', 'overfull', 'figure-check',
               'master-feedback', 'permanent-policy'],
    label: '시험지 검수',
  },
};

// 에이전트 파일에서 언급된 scripts/*.mjs·.py 목록 추출
function extractScripts(agentPath) {
  const content = fs.readFileSync(agentPath, 'utf8');
  const scripts = new Set();
  const re = /scripts\/([a-zA-Z0-9_-]+\.(mjs|py))/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    scripts.add(m[1]);
  }
  return scripts;
}

// scripts/ 에서 검수·검증 도구 목록 (check·verify·validate 접미)
function listCheckScripts() {
  return fs.readdirSync(scriptsDir)
    .filter(f => (f.endsWith('.mjs') || f.endsWith('.py')))
    .filter(f => /check|verify|validate|need-check/i.test(f))
    .filter(f => !f.startsWith('_'))  // 임시 스크립트 제외
    .sort();
}

// 스크립트가 에이전트 담당 범위 내인지 판정
function isInScope(scriptName, scope) {
  return scope.prefixes.some(p => scriptName.startsWith(p) ||
                                  scriptName.startsWith('scripts/' + p));
}

function report() {
  console.log('🔍 에이전트-스크립트 sync 검증 (feedback_document_only_rule_gap v2 · 4축)');
  console.log('=' .repeat(70));

  const allCheckScripts = listCheckScripts();
  console.log(`\n실제 존재 검수 도구 : ${allCheckScripts.length}개`);

  let hasIssue = false;

  for (const [agentName, scope] of Object.entries(AGENT_SCOPE)) {
    if (agentFilter && agentFilter !== agentName) continue;

    const agentPath = path.join(agentsDir, `${agentName}.md`);
    if (!fs.existsSync(agentPath)) {
      console.log(`\n⚠️  ${agentName}: 파일 없음 (${agentPath})`);
      continue;
    }

    const mentioned = extractScripts(agentPath);
    const inScope = allCheckScripts.filter(s => isInScope(s, scope));
    const missing = inScope.filter(s => !mentioned.has(s));
    const orphan = [...mentioned].filter(m => !allCheckScripts.includes(m));

    console.log(`\n📋 ${agentName} (${scope.label})`);
    console.log(`   언급된 스크립트   : ${mentioned.size}개`);
    console.log(`   담당 범위 스크립트 : ${inScope.length}개`);

    if (missing.length > 0) {
      hasIssue = true;
      console.log(`   🔴 미편입 (${missing.length}개):`);
      for (const s of missing) console.log(`      - ${s}`);
    } else {
      console.log(`   ✅ 담당 범위 스크립트 모두 편입됨`);
    }

    if (orphan.length > 0) {
      console.log(`   🟡 orphan (${orphan.length}개 · 언급되나 존재 안함):`);
      for (const s of orphan.slice(0, 5)) console.log(`      - ${s}`);
      if (orphan.length > 5) console.log(`      ... 외 ${orphan.length - 5}개`);
    }
  }

  console.log('\n' + '='.repeat(70));
  if (hasIssue) {
    console.log('❌ 미편입 스크립트 발견. .claude/agents/{agent}.md 정의 파일에 추가 필요.');
    console.log('   정책: feedback_document_only_rule_gap.md v2 · 4축 편입 원칙');
    process.exit(1);
  } else {
    console.log('✅ 모든 에이전트가 담당 범위 스크립트 편입 완료');
    process.exit(0);
  }
}

report();
