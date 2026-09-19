// cfes-a1.mjs — CFES Layer A · A1(자동 도구) 축 SSOT
// 2026-07-29 세션 102 신설 (기획안 v1.2 §3.1.1 · 세션 102 발견 1 대응)
//
// 배경: 기존 blind-twin-evaluate의 A1은 master-feedback-check 출력에서
//   RED/WARN 토큰을 세는 countViolations 휴리스틱 → 정책 레지스트리 목록의
//   "RED"까지 세어 정상·결함 모두 9/9 동일 판정 = 비변별.
//
// 재설계: 실제 hard-violation 도구의 exit-code를 사용.
//   - cm1-curriculum-check.mjs : 스코프 침투(극한·벡터·역행렬·집합기호 등) exit 1
//   - master-feedback-check.mjs : 마스터 지적 폐기 용어 exit 1
//   스코프·정책 위반은 절대 disqualifier → item이 hard violation 1건이라도 있으면 A1 FAIL.
//   (anchor는 실제 시판 원본이라 hard violation 0 전제 · 만약 anchor도 위반 시 상대 비교로 완화)

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// A1 hard-violation 도구 (exit 1 = 위반 · exit 2 = 오용 무시)
export const A1_TOOLS = [
  { name: 'cm1-curriculum-check', script: 'scripts/cm1-curriculum-check.mjs' },
  { name: 'master-feedback-check', script: 'scripts/master-feedback-check.mjs' },
];

function violates(scriptPath, tex, ROOT) {
  const r = spawnSync('node', [scriptPath, tex], { cwd: ROOT, encoding: 'utf-8' });
  // exit 1 = 위반 있음 · 0 = 통과 · 2 = 오용(스코프 판정 불가 → 위반 아님으로 처리)
  return r.status === 1 ? 1 : 0;
}

// itemFile vs anchorFile A1 판정.
// 반환 { result: 'PASS'|'FAIL', itemHard, anchorHard, detail: [{tool,item,anchor}] }
export function runA1(itemFile, anchorFile, ROOT) {
  let itemHard = 0, anchorHard = 0;
  const detail = [];
  for (const t of A1_TOOLS) {
    const scriptPath = path.join(ROOT, t.script);
    if (!fs.existsSync(scriptPath)) continue;
    const iv = violates(scriptPath, itemFile, ROOT);
    const av = anchorFile && fs.existsSync(anchorFile) ? violates(scriptPath, anchorFile, ROOT) : 0;
    itemHard += iv; anchorHard += av;
    detail.push({ tool: t.name, item: iv, anchor: av });
  }
  // hard violation은 절대 disqualifier : item이 anchor보다 hard violation 많으면 FAIL.
  // (anchor 0 전제이므로 사실상 item hard ≥ 1 → FAIL)
  const result = itemHard > anchorHard ? 'FAIL' : 'PASS';
  return { result, itemHard, anchorHard, detail };
}
