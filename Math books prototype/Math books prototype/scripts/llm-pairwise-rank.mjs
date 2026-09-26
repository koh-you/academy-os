#!/usr/bin/env node
// llm-pairwise-rank.mjs — CFES F6 · LLM Pairwise Ranking
// 2026-07-28 세션 97 신설 · CFES Phase A-1
//
// 마스터 확정 (기획안 v1.1 §12):
//   - LLM 모델 : Opus + Sonnet 앙상블 (2모델 다수결)
//   - 판정 정확도 임계값 : 90%
//   - 역방향 판정 (P,Q)+(Q,P) 일치 확인
//
// 3 모드 지원 :
//   prompt-only (기본) : 프롬프트 파일 저장 · 마스터가 매뉴얼 실행 후 결과 append
//   api               : Anthropic SDK 직접 호출 (@anthropic-ai/sdk + ANTHROPIC_API_KEY 필요)
//   dry-run           : 결정론적 fake 판정 (파이프라인 테스트용)
//
// 사용법 :
//   node scripts/llm-pairwise-rank.mjs \
//     --p <문항P.tex> \
//     --q <문항Q.tex> \
//     --dimension <difficulty|insight|naturalness|composite> \
//     [--mode prompt-only|api|dry-run]  # 기본 prompt-only
//     [--reverse-check]                 # (P,Q) + (Q,P) 두 순서 판정
//     [--models opus,sonnet]            # 앙상블 모델
//     [--output <경로.yaml>]            # 판정 결과 저장
//
// 반환 : 0 = 판정 성공 · 1 = 신뢰도 미달 (판정 불가) · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  p: null, q: null,
  dimension: 'composite',
  mode: 'prompt-only',
  reverseCheck: false,
  models: ['claude-opus-4-7', 'claude-sonnet-4-6'],
  output: null,
  promptDir: path.join(ROOT, '_scratch', 'llm-prompts'),
  minConfidence: 0.6,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--p') opt.p = args[++i];
  else if (a === '--q') opt.q = args[++i];
  else if (a === '--dimension') opt.dimension = args[++i];
  else if (a === '--mode') opt.mode = args[++i];
  else if (a === '--reverse-check') opt.reverseCheck = true;
  else if (a === '--models') opt.models = args[++i].split(',');
  else if (a === '--output') opt.output = args[++i];
  else if (a === '--min-confidence') opt.minConfidence = parseFloat(args[++i]);
  else if (a === '--help' || a === '-h') {
    console.log(`
llm-pairwise-rank.mjs — CFES F6 · Layer A A3축

사용법 :
  node scripts/llm-pairwise-rank.mjs \\
    --p <문항P.tex> --q <문항Q.tex> \\
    --dimension <difficulty|insight|naturalness|composite> \\
    [--mode prompt-only|api|dry-run] \\
    [--reverse-check] \\
    [--models opus,sonnet] \\
    [--output <경로.yaml>]

모드 :
  prompt-only (기본) : _scratch/llm-prompts/에 프롬프트 저장 · 매뉴얼 판정 대기
  api                : Anthropic SDK 직접 호출 (설치 · 키 필요)
  dry-run            : 결정론적 fake 판정 (파이프라인 테스트)

반환 : 0 = 판정 성공 · 1 = 신뢰도 미달 · 2 = 오용
`);
    process.exit(0);
  }
}

if (!opt.p || !opt.q) { console.error('❌ --p 와 --q 필수'); process.exit(2); }
if (!fs.existsSync(opt.p)) { console.error(`❌ P 파일 없음 : ${opt.p}`); process.exit(2); }
if (!fs.existsSync(opt.q)) { console.error(`❌ Q 파일 없음 : ${opt.q}`); process.exit(2); }
if (!['difficulty', 'insight', 'naturalness', 'composite'].includes(opt.dimension)) {
  console.error(`❌ --dimension 오용 : ${opt.dimension}`); process.exit(2);
}
if (!['prompt-only', 'api', 'dry-run'].includes(opt.mode)) {
  console.error(`❌ --mode 오용 : ${opt.mode}`); process.exit(2);
}

// ── kill switch 체크 ────────────────────────────────────
const KILL_SWITCH_FILE = path.join(ROOT, 'bank', 'creation-freedom-lock.md');
if (fs.existsSync(KILL_SWITCH_FILE)) {
  console.error(`🛑 CFES kill switch 활성 : ${KILL_SWITCH_FILE}`);
  console.error(`   시스템 lock 상태 · llm-pairwise-rank 실행 차단`);
  console.error(`   해제하려면 위 파일 삭제`);
  process.exit(2);
}

// ── 파일 로드 · 익명화 ──────────────────────────────────
function loadProblem(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');
  return {
    filePath, text,
    hash: crypto.createHash('sha1').update(text).digest('hex').slice(0, 8),
  };
}

const P = loadProblem(opt.p);
const Q = loadProblem(opt.q);

// ── 프롬프트 템플릿 ─────────────────────────────────────
const DIMENSION_LABEL = {
  difficulty: '난이도 (상위권 학생 관점의 도전성)',
  insight: '통찰 깊이 (I-EQV·I-CON·I-PD·I-XU·I-SYM·I-VF·I-MI·I-SC·I-BW·I-RT 카드 밀도)',
  naturalness: '한국어 자연스러움 (발문·조건 표현의 자연도 · 번역투 회피)',
  composite: '난이도 + 통찰 깊이 + 자연스러움 통합',
};

function buildPrompt(A, B, dimension) {
  return `당신은 대한민국 고등학교 수학 교재 문제 판정 전문가입니다.
2022 개정 교육과정 공통수학1·공통수학2 범위의 문제 두 개 (A · B)를 비교 평가합니다.

## 문항 A
\`\`\`
${A.text}
\`\`\`

## 문항 B
\`\`\`
${B.text}
\`\`\`

## 판정 축
**${DIMENSION_LABEL[dimension]}** 축에서 A와 B 중 어느 쪽이 우수한가?

## 판정 원칙
- ${dimension === 'insight' ? '진정 변별 통찰 (I-XU 예상 밖 · I-VF 관점 전환 등)이 있으면 절차 조합보다 우수' : ''}
- ${dimension === 'naturalness' ? '한국어가 자연스럽고 발문이 명료하면 우수 · 번역투/직접표현 회피 여부' : ''}
- ${dimension === 'difficulty' ? '풀이 단계 수 · 변별 자유도 · 조건 통합 정도' : ''}
- ${dimension === 'composite' ? '난이도·통찰·자연스러움 종합' : ''}
- 편향 없이 익명화된 두 문항만 비교 (라벨·출처·별점 정보 무시)
- 판정 근거를 2~3 문장으로 명시

## 출력 형식 (반드시 YAML 블록)
\`\`\`yaml
a_over_b: 0.0    # A가 B보다 우수한 신뢰도 (0.0~1.0)
b_over_a: 0.0    # B가 A보다 우수한 신뢰도 (0.0~1.0)
equal:    0.0    # 동등 신뢰도 (0.0~1.0)
# 세 값의 합은 반드시 1.0
reasoning: |
  (판정 근거 2~3 문장 · 구체 근거 포함)
confidence: 0.0  # 판정 자체의 신뢰도 (0.0~1.0)
\`\`\`
`;
}

// ── 프롬프트 저장 · prompt-only 모드 ────────────────────
function savePrompt(promptText, tag) {
  fs.mkdirSync(opt.promptDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `${timestamp}_${tag}_${P.hash}_${Q.hash}.md`;
  const filepath = path.join(opt.promptDir, filename);
  const content = `# LLM Pairwise Prompt (${tag})

- **P**: ${opt.p} (hash ${P.hash})
- **Q**: ${opt.q} (hash ${Q.hash})
- **dimension**: ${opt.dimension}
- **models**: ${opt.models.join(' + ')}
- **date**: ${new Date().toISOString()}

---

## 프롬프트 (Opus·Sonnet 각각 판정 요청)

${promptText}

---

## 판정 결과 append 영역 (매뉴얼)

### Opus 판정
\`\`\`yaml
# (아래에 YAML 붙여넣기)
\`\`\`

### Sonnet 판정
\`\`\`yaml
# (아래에 YAML 붙여넣기)
\`\`\`

### 앙상블 요약
- Opus a_over_b: ??
- Sonnet a_over_b: ??
- 다수결: ??
- 최종 confidence: ??
`;
  fs.writeFileSync(filepath, content, 'utf-8');
  return filepath;
}

// ── dry-run 판정 (결정론적) ─────────────────────────────
function dryRunJudgment(A, B, dimension) {
  const seed = crypto.createHash('sha1').update(A.hash + B.hash + dimension).digest('hex');
  const num = parseInt(seed.slice(0, 8), 16) / 0xffffffff;
  const aWins = num < 0.35;
  const bWins = num >= 0.35 && num < 0.7;
  return {
    a_over_b: aWins ? 0.7 + (num - 0.0) * 0.3 : 0.15,
    b_over_a: bWins ? 0.7 + (num - 0.35) * 0.3 : 0.15,
    equal: (aWins || bWins) ? 0.15 : 0.7,
    reasoning: `[DRY-RUN] 결정론적 fake 판정. seed=${seed.slice(0, 8)} num=${num.toFixed(3)}`,
    confidence: 0.75,
  };
}

// ── API 모드 (SDK 필요 · lazy import) ───────────────────
async function apiJudgment(_A, _B, _dimension, model, _promptText) {
  try {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY 환경변수 없음');
    }
    const client = new Anthropic();
    const response = await client.messages.create({
      model,
      max_tokens: 2000,
      messages: [{ role: 'user', content: _promptText }],
    });
    const respText = response.content[0].text;
    // YAML 블록 추출
    const m = respText.match(/```yaml\n([\s\S]+?)\n```/);
    if (!m) throw new Error('YAML 블록 없음');
    // 간이 YAML 파서 (a_over_b·b_over_a·equal·confidence·reasoning)
    const parseFloat_safe = (line) => {
      const mm = line.match(/:\s*([\d.]+)/);
      return mm ? parseFloat(mm[1]) : null;
    };
    const lines = m[1].split('\n');
    let a = null, b = null, eq = null, conf = null;
    for (const l of lines) {
      if (l.startsWith('a_over_b:')) a = parseFloat_safe(l);
      else if (l.startsWith('b_over_a:')) b = parseFloat_safe(l);
      else if (l.startsWith('equal:')) eq = parseFloat_safe(l);
      else if (l.startsWith('confidence:')) conf = parseFloat_safe(l);
    }
    const reasonMatch = m[1].match(/reasoning:\s*\|\s*\n((?:\s{2,}.+\n?)+)/);
    const reasoning = reasonMatch ? reasonMatch[1].trim() : '(reasoning 파싱 실패)';
    return { a_over_b: a, b_over_a: b, equal: eq, reasoning, confidence: conf };
  } catch (e) {
    throw new Error(`API 판정 실패 (${model}): ${e.message}`);
  }
}

// ── 앙상블 통합 ─────────────────────────────────────────
function ensembleAggregate(judgments) {
  // 다수결 : 각 모델의 최대 카테고리 투표
  const votes = { a_over_b: 0, b_over_a: 0, equal: 0 };
  const avgConf = judgments.reduce((s, j) => s + (j.confidence || 0), 0) / judgments.length;
  const avgA = judgments.reduce((s, j) => s + (j.a_over_b || 0), 0) / judgments.length;
  const avgB = judgments.reduce((s, j) => s + (j.b_over_a || 0), 0) / judgments.length;
  const avgEq = judgments.reduce((s, j) => s + (j.equal || 0), 0) / judgments.length;
  for (const j of judgments) {
    const max = Math.max(j.a_over_b || 0, j.b_over_a || 0, j.equal || 0);
    if ((j.a_over_b || 0) === max) votes.a_over_b++;
    else if ((j.b_over_a || 0) === max) votes.b_over_a++;
    else votes.equal++;
  }
  const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
  const agreement = votes[winner] / judgments.length;
  return {
    a_over_b_avg: avgA, b_over_a_avg: avgB, equal_avg: avgEq,
    votes, winner, agreement,
    avg_confidence: avgConf,
    reasoning_snippets: judgments.map((j, i) => `[${opt.models[i]}] ${(j.reasoning || '').slice(0, 200)}`),
  };
}

// ── 실행 ─────────────────────────────────────────────────
(async () => {
  const promptForward = buildPrompt(P, Q, opt.dimension);
  const results = { forward: null, reverse: null };

  if (opt.mode === 'prompt-only') {
    const forwardPath = savePrompt(promptForward, 'forward_PQ');
    console.error(`📄 forward 프롬프트 저장 : ${path.relative(ROOT, forwardPath)}`);
    if (opt.reverseCheck) {
      const promptReverse = buildPrompt(Q, P, opt.dimension); // Q·P 순서 · A=Q · B=P
      const reversePath = savePrompt(promptReverse, 'reverse_QP');
      console.error(`📄 reverse 프롬프트 저장 : ${path.relative(ROOT, reversePath)}`);
    }
    console.error(`\n▶ prompt-only 모드 : 매뉴얼로 프롬프트 실행 후 결과 append 필요`);
    console.error(`  Opus + Sonnet 각각 판정 요청 후 앙상블 요약 계산`);
    console.error(`  결과가 정리되면 blind-twin-evaluate에 전달`);
    process.exit(0);
  }

  if (opt.mode === 'dry-run') {
    results.forward = ensembleAggregate([dryRunJudgment(P, Q, opt.dimension)]);
    if (opt.reverseCheck) {
      results.reverse = ensembleAggregate([dryRunJudgment(Q, P, opt.dimension)]);
    }
  } else if (opt.mode === 'api') {
    console.error(`▶ API 모드 : Opus + Sonnet 앙상블 실행`);
    const forwardJudgments = [];
    for (const model of opt.models) {
      console.error(`  ▸ ${model} (forward) ...`);
      forwardJudgments.push(await apiJudgment(P, Q, opt.dimension, model, promptForward));
    }
    results.forward = ensembleAggregate(forwardJudgments);
    if (opt.reverseCheck) {
      const promptReverse = buildPrompt(Q, P, opt.dimension);
      const reverseJudgments = [];
      for (const model of opt.models) {
        console.error(`  ▸ ${model} (reverse) ...`);
        reverseJudgments.push(await apiJudgment(Q, P, opt.dimension, model, promptReverse));
      }
      results.reverse = ensembleAggregate(reverseJudgments);
    }
  }

  // ── 역방향 일치 확인 ──────────────────────────────────
  let reverseConsistent = null;
  if (opt.reverseCheck && results.reverse) {
    // forward의 a_over_b는 P>Q · reverse의 a_over_b는 Q>P (역방향에선 A=Q · B=P)
    // 일치하려면 forward.p_over_q ≈ reverse.q_over_p (= reverse.a_over_b)
    // 즉 forward.a_over_b_avg ≈ reverse.b_over_a_avg
    const fwd_p = results.forward.a_over_b_avg;
    const rev_p = results.reverse.b_over_a_avg;  // reverse에서 P는 B
    reverseConsistent = Math.abs(fwd_p - rev_p) < 0.2;
  }

  // ── 최종 판정 ─────────────────────────────────────────
  const output = {
    p: opt.p, q: opt.q,
    dimension: opt.dimension,
    mode: opt.mode,
    models: opt.models,
    date: new Date().toISOString(),
    forward: results.forward,
    reverse: results.reverse,
    reverse_consistent: reverseConsistent,
  };
  const yamlOut = `# LLM Pairwise Rank 결과
p: ${opt.p}
q: ${opt.q}
dimension: ${opt.dimension}
mode: ${opt.mode}
models: [${opt.models.join(', ')}]
date: ${output.date}

forward:
  a_over_b_avg: ${results.forward.a_over_b_avg.toFixed(3)}   # P > Q
  b_over_a_avg: ${results.forward.b_over_a_avg.toFixed(3)}   # Q > P
  equal_avg:    ${results.forward.equal_avg.toFixed(3)}
  winner: ${results.forward.winner}
  agreement: ${results.forward.agreement.toFixed(3)}
  avg_confidence: ${results.forward.avg_confidence.toFixed(3)}
${results.reverse ? `
reverse:
  a_over_b_avg: ${results.reverse.a_over_b_avg.toFixed(3)}   # Q > P
  b_over_a_avg: ${results.reverse.b_over_a_avg.toFixed(3)}   # P > Q
  equal_avg:    ${results.reverse.equal_avg.toFixed(3)}
  winner: ${results.reverse.winner}
  agreement: ${results.reverse.agreement.toFixed(3)}
  avg_confidence: ${results.reverse.avg_confidence.toFixed(3)}
reverse_consistent: ${reverseConsistent}
` : ''}
`;

  if (opt.output) {
    fs.mkdirSync(path.dirname(opt.output), { recursive: true });
    fs.writeFileSync(opt.output, yamlOut, 'utf-8');
    console.error(`📄 결과 저장 : ${path.relative(ROOT, opt.output)}`);
  } else {
    console.log(yamlOut);
  }

  // ── exit code ────────────────────────────────────────
  const confidence = results.forward.avg_confidence;
  if (confidence < opt.minConfidence) {
    console.error(`⚠️  신뢰도 미달 (${confidence.toFixed(2)} < ${opt.minConfidence}) · exit 1`);
    process.exit(1);
  }
  console.error(`✓ 판정 성공 · winner=${results.forward.winner} · confidence=${confidence.toFixed(2)}`);
  process.exit(0);
})().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(2);
});
