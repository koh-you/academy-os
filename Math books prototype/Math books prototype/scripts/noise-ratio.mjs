#!/usr/bin/env node
// 🔴 〔폐기 2026-08-02〕 이 도구는 **접은 점수 체계**의 것이다.
//    난이도는 점수로 합산하지 않고 **앵커와 견주어** 정한다.
//    「잡음비」 같은 말은 쓰지 않는다 (bank/용어-사전.md). 기록으로만 남긴다.
/**
 * noise-ratio.mjs — 판정자 간 「잡음비」 산출 (단일 출처 구현)
 *
 * 정의 (일원배치 변량모형 분산성분):
 *   MSE      = 문항별 판정자 간 표본분산의 평균           … 판정자가 바뀔 때의 흔들림
 *   MS_item  = k x (문항 평균들의 표본분산)
 *   s2_item  = (MS_item - MSE) / k                        … 문항이 실제로 벌어진 정도
 *   잡음비    = MSE / s2_item
 *
 * 값이 작을수록 「판정자를 바꿔도 같은 자리에 놓인다」는 뜻.
 * 순수 순위상관(rho)과 달리 밴드 배정의 흔들림을 직접 잰다.
 *
 * 사용:
 *   node scripts/noise-ratio.mjs --self-test        # 기존 실측으로 정의 재현 확인
 *   node scripts/noise-ratio.mjs --csv <파일>       # item,rater,value 3열 CSV
 */

function noiseRatio(rows) {
  // rows: { item, rater, value }
  const byItem = new Map();
  for (const r of rows) {
    if (!byItem.has(r.item)) byItem.set(r.item, []);
    byItem.get(r.item).push(Number(r.value));
  }
  const items = [...byItem.keys()];
  const ks = items.map((i) => byItem.get(i).length);
  const k = ks[0];
  if (ks.some((x) => x !== k)) throw new Error('판정자 수가 문항마다 다르다 — 균형 설계만 지원한다');
  if (k < 2) throw new Error('판정자가 2인 미만이면 잡음비를 낼 수 없다');

  const sampVar = (a) => {
    const m = a.reduce((s, x) => s + x, 0) / a.length;
    return a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1);
  };

  const withinVars = items.map((i) => sampVar(byItem.get(i)));
  const MSE = withinVars.reduce((s, x) => s + x, 0) / items.length;

  const means = items.map((i) => {
    const a = byItem.get(i);
    return a.reduce((s, x) => s + x, 0) / a.length;
  });
  const MS_item = k * sampVar(means);
  const s2_item = (MS_item - MSE) / k;

  return { n: items.length, k, MSE, MS_item, s2_item, ratio: MSE / s2_item };
}

function report(label, rows, expected) {
  const r = noiseRatio(rows);
  const got = r.ratio.toFixed(3);
  const mark = expected == null ? '' : (Math.abs(r.ratio - expected) <= 0.005 ? '  ✅ 재현' : `  ⚠ 기록값 ${expected}`);
  console.log(
    `${label.padEnd(34)} n=${String(r.n).padStart(2)} k=${r.k}  ` +
    `MSE=${r.MSE.toFixed(4)}  s2_item=${r.s2_item.toFixed(4)}  잡음비=${got}${mark}`
  );
  return r;
}

// ── 기존 실측 자료 (self-test) ────────────────────────────────────────────
// (1) 절대값 채점 — bank/measurements/채점-재현성-3인-spread-v1.md §2
const ABS12 = {
  S01: [2, 2, 2],   S02: [7, 8, 8],    S03: [6, 7, 7],
  S04: [8, 10, 9],  S05: [11, 13, 11], S06: [11, 11, 9],
  S07: [14, 14, 15],S08: [14, 15, 15], S09: [12, 14, 14],
  S10: [18, 18, 17],S11: [13, 19, 17], S12: [20, 26, 24],
};

// (2) 앵커 견주기 — bank/measurements/앵커견주기-C1.md §2 · -C2.md §2
//     사다리 위치를 수치로: A1..A6 = 1..6 · 「Ax~Ay」 = 중점 · 「A6보다 깊음」 = 6.5
const CMP20 = {
  //        C1    C2
  M01: [4.5, 3.5], M02: [1.0, 1.0], M03: [4.5, 4.5], M04: [5.5, 5.5],
  M05: [1.5, 2.5], M06: [4.5, 5.5], M07: [3.5, 3.5], M08: [3.0, 2.5],
  M09: [6.5, 6.5], M10: [3.5, 3.5], M11: [4.5, 4.5], M12: [2.5, 2.5],
  M13: [3.5, 4.5], M14: [5.5, 5.5], M15: [3.5, 3.5], M16: [3.5, 3.5],
  M17: [4.5, 4.5], M18: [2.5, 2.5], M19: [4.5, 4.5], M20: [2.5, 3.0],
};

// 「같은 12문」 — 재현성 부분표본 S01~S12 에 대응하는 견주기 ID
// 출처: 학평-층화표본-40문-v2.md §4 · 채점-축별-통합표.csv 주석
const SAME12 = ['M02','M12','M05','M15','M08','M18','M03','M13','M19','M11','M04','M09'];

function toRows(obj, keys = Object.keys(obj)) {
  const out = [];
  for (const key of keys) obj[key].forEach((v, i) => out.push({ item: key, rater: i, value: v }));
  return out;
}

// 다른 스크립트가 noiseRatio 를 가져다 쓸 때 아래 CLI 가 같이 돌면 안 된다
const RUN_AS_CLI = process.argv[1] && process.argv[1].replaceAll('\\', '/').endsWith('noise-ratio.mjs');
const args = process.argv.slice(2);
if (!RUN_AS_CLI) {
  // 모듈로 불러온 것이다 — 아무것도 하지 않는다
} else if (args.includes('--self-test') || args.length === 0) {
  console.log('\n잡음비 정의 재현 시험 — 기록값과 대조\n' + '─'.repeat(78));
  report('절대값 채점 (12문 x 3인)', toRows(ABS12), 0.067);
  report('앵커 견주기 (같은 12문 x 2인)', toRows(CMP20, SAME12), 0.042);
  report('앵커 견주기 (전체 20문 x 2인)', toRows(CMP20));
  console.log('─'.repeat(78));
  console.log('낮을수록 좋다. 같은 12문에서 견주기가 절대값 채점보다 잡음이 적으면 전환 근거가 선다.\n');
} else {
  const idx = args.indexOf('--csv');
  if (idx < 0) { console.error('사용: --self-test 또는 --csv <파일>'); process.exit(1); }
  const fs = await import('node:fs');
  const text = fs.readFileSync(args[idx + 1], 'utf8').trim();
  const lines = text.split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#'));
  const head = lines[0].split(',').map((s) => s.trim());
  const rows = lines.slice(1).map((l) => {
    const c = l.split(',').map((s) => s.trim());
    return { item: c[head.indexOf('item')], rater: c[head.indexOf('rater')], value: c[head.indexOf('value')] };
  });
  report(args[idx + 1], rows);
}

export { noiseRatio };
