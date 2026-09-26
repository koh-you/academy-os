#!/usr/bin/env node
// scripts/refresh-all.mjs
//
// 정기 갱신 묶음: extract-tex-to-bank → bank-frequency → build-anchors → build-premium-samples
//                  → append-anchors-samples → calibration-report → source-usage-stats → build-index
// (옵션) --with-extract: 깊이와통찰 PDF 재추출도 포함 (큰 작업)
//
// v1.4 (2026-06-25): build-premium-samples + append-anchors-samples 추가 — 카탈로그 표본 JSON 갱신 + 앵커 인용 자동 동기화
// v1.5 (2026-07-13 세션 35): fraction-consistency-check 편입 — 답지 분수 크기 일관성 자동 검증
// v1.14 (2026-07-24 세션 80): 세션 80 자동화 도구 4종 통합
//   - dmconcept-auto-tune.py v2.0 (개념박스 튜닝 · 병렬)      : --with-dmconcept-tune
//   - dmanswer-lint.py v1.0    (답지 18규칙 A~S · 자동 정정) : --with-dmanswer-lint / --dmanswer-auto-fix
//   - multi-cp-detect.py       (다중 CP 슬롯 감지 · RED)     : --with-multi-cp-check
//   - permanent-policy-check.mjs 확장 (정합·부동점·등거리·점화식 폐기 용어 추가 grep)
//   기본 옵션: 3종 자동 실행 (파일 수정 후 자동 호출)
// v1.15 (2026-07-24 세션 84): CP 정책 v2.0 자동 감지 편입
//   - dmcplabel-lint.py (하한 조건 + 부자연 표현) : --with-dmcp-check / --no-dmcp-check

import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

function runScript(spec, { softFail = false } = {}) {
  const [name, ...args] = Array.isArray(spec) ? spec : [spec];
  const isPython = name.endsWith('.py');
  const interpreter = isPython ? (process.env.PYTHON || 'python') : 'node';
  return new Promise((resolve, reject) => {
    console.log(`\n===== ${name}${args.length ? ' ' + args.join(' ') : ''} =====`);
    const proc = spawn(interpreter, [join(__dirname, name), ...args], {
      cwd: PROJECT_ROOT, stdio: 'inherit'
    });
    proc.on('close', code => {
      if (code === 0) resolve();
      else if (softFail) {
        console.warn(`⚠️  ${name} exited ${code} (soft-fail, continuing)`);
        resolve();
      }
      else reject(new Error(`${name} exited ${code}`));
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const withExtract = args.includes('--with-extract');
  const withDeepInsight = args.includes('--with-deepinsight');
  // v1.14: 새 옵션 (--no- 로 명시적 비활성화 가능. 기본 활성)
  const withDmconceptTune = args.includes('--with-dmconcept-tune') || !args.includes('--no-dmconcept-tune');
  const withDmanswerLint  = args.includes('--with-dmanswer-lint')  || !args.includes('--no-dmanswer-lint');
  const withMultiCpCheck  = args.includes('--with-multi-cp-check') || !args.includes('--no-multi-cp-check');
  const withDmcpCheck     = args.includes('--with-dmcp-check')     || !args.includes('--no-dmcp-check');
  const dmanswerAutoFix   = args.includes('--dmanswer-auto-fix');
  const dmconceptParallel = (() => {
    const i = args.indexOf('--dmconcept-parallel');
    if (i >= 0 && args[i + 1]) return args[i + 1];
    return '8';
  })();

  const t0 = Date.now();
  console.log('===== refresh-all.mjs v1.15 =====');

  const pipeline = [];
  if (withDeepInsight) {
    pipeline.push('extract-deepinsight.mjs');
    pipeline.push('normalize-deepinsight-cohort.mjs');
    pipeline.push('map-deepinsight-types.mjs');
    pipeline.push('register-deepinsight-bank.mjs');
  }
  if (withExtract) {
    pipeline.push('extract-tex-to-bank.mjs');
  }
  pipeline.push('bank-frequency.mjs');
  pipeline.push('build-anchors.mjs');
  pipeline.push('build-premium-samples.mjs');
  pipeline.push('append-anchors-samples.mjs');
  pipeline.push('calibration-report.mjs');
  pipeline.push('source-usage-stats.mjs');
  pipeline.push('build-index.mjs');
  // v1.5: 답지 분수 크기 일관성 자동 검증 (--soft: RED 검출해도 refresh-all은 완주)
  pipeline.push(['fraction-consistency-check.mjs', '--all', '--soft']);
  // v1.6 (2026-07-13 세션 35): cplabel 언어 스타일 검수 (압축 신조어·프로그래밍 은어·수식 라벨)
  pipeline.push(['cplabel-style-check.mjs', '--all', '--soft']);
  // v1.7 (2026-07-22 세션 70): 마지막 페이지 1문 원칙 (Level 3·실전 페이지 배치) — DeeP Math 정리편
  pipeline.push(['last-page-single-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편']);
  // v1.8 (2026-07-22 세션 71): 예제 풀이 3축 검수 (chain · lone 이다 · dmanswer 프리픽스)
  pipeline.push(['equation-chain-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편']);
  pipeline.push(['equation-step-separation-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편']);
  pipeline.push(['dmanswer-simplicity-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편']);
  // v1.9 (2026-07-22 세션 71 후반): 답지 verbose 서술 검수 (5축 + 인라인 산술 + 반복 대입)
  pipeline.push(['solution-verbose-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  // v1.10 (2026-07-22 세션 72): 답지 그래프 필요성 감지 (5 유형 · 트리거 키워드)
  pipeline.push(['solution-graph-need-check.py', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  // v1.11 (2026-07-23 세션 75): 와부고 스타일 S1~S10 검수 도구 4종 + 겹침 감지
  pipeline.push(['atomic-unit-ratio-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  pipeline.push(['align-usage-audit.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  pipeline.push(['connector-count-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  pipeline.push(['graph-position-audit.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  // v1.12 (2026-07-23 세션 75 후반): TikZ 라벨 겹침 감지 (마스터 반복 지적 대응)
  pipeline.push(['tikz-overlap-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  // v1.13 (2026-07-24 세션 76): PDF 실측 기반 라벨 겹침·자유공간 판정 (tikz-overlap-check 후속)
  //   xelatex 이중 컴파일 + pdftoppm 픽셀 diff + flood-fill 클러스터 + 방향성 판정
  //   원점·축 라벨 예외 · 축·곡선 분류 (--classify) · concurrency 3 병렬
  pipeline.push(['pdf-label-overlap-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
  // v1.14 (2026-07-24 세션 80): 세션 80 자동화 도구 3종 편입 (파일 수정 후 자동 호출)
  //   개념박스 자동 튜닝은 xelatex 2회/파일 · 병렬 8 로 대략 30~60s 소요 (기본 활성)
  //   답지 lint 는 정규식 grep 만 · <5s
  //   다중 CP 감지는 파일 read-only · <2s
  if (withDmconceptTune) {
    pipeline.push(['dmconcept-auto-tune.py', '--parallel', dmconceptParallel]);
  }
  if (withDmanswerLint) {
    const linkArgs = ['--all', '--quiet'];
    if (dmanswerAutoFix) linkArgs.push('--auto-fix');
    pipeline.push(['dmanswer-lint.py', ...linkArgs]);
  }
  if (withMultiCpCheck) {
    pipeline.push('multi-cp-detect.py');
  }
  // v1.15 (2026-07-24 세션 84): CP 정책 v2.0 자동 감지 (하한 조건 + 부자연 표현)
  //   답지 8권 · 청사진 YAML 자동 매핑 · <2s · exit 0/1
  if (withDmcpCheck) {
    pipeline.push(['dmcplabel-lint.py', '--all', '--quiet']);
  }

  // 참고: permanent-policy-check.mjs 는 파일 인자 필수 (자동화 파이프라인 대상 지정 별도) — 여기서는 호출 안 함.
  //       개별 답지·본편 편집 시 별도 호출: node scripts/permanent-policy-check.mjs <file>

  const softNames = new Set([
    'dmconcept-auto-tune.py',   // 튜닝 실패해도 pipeline 완주
    'dmanswer-lint.py',         // RED 있으면 exit 1 · soft
    'multi-cp-detect.py',       // hard-coded exit 0 이지만 안전상 soft
    'dmcplabel-lint.py',        // v1.15 · CP 정책 v2.0 감지 · soft (RED 감지 통계만)
  ]);
  for (const s of pipeline) {
    const name = Array.isArray(s) ? s[0] : s;
    await runScript(s, { softFail: softNames.has(name) });
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\n===== Refresh Complete (${elapsed}s) =====`);
  const summary = pipeline.map(p => Array.isArray(p) ? p[0] : p).join(' → ');
  console.log(`Ran: ${summary}`);
}

main().catch(e => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
