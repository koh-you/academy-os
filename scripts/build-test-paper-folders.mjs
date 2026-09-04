#!/usr/bin/env node
// 학생 단원별 평가 시스템 - 시험지 폴더 스캐폴드 생성기
//
// api/data/ssenTypeIndex.json 의 쎈 목차를 단원 기준으로 삼아
//   <과목>/<종류>/<NN. 단원>/<난이도>/  폴더 트리를 만든다.
// 각 잎 폴더에 README.txt 를 넣어 기대 파일(문제.pdf, 정답.pdf)과 문제 출처를 적는다.
//
// 사용:
//   node scripts/build-test-paper-folders.mjs --dry-run              # 트리만 출력
//   node scripts/build-test-paper-folders.mjs --out "D:/시험지"       # 실제 생성
//   node scripts/build-test-paper-folders.mjs --dry-run --manifest docs/unit-eval-folder-manifest.md
//
// 시험지 PDF 자체는 git 에 커밋하지 않는다(AGENTS.md). 이 스크립트는 빈 골격만 만든다.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const SUBJECTS = ["공통수학1", "공통수학2", "대수", "미적분1", "확률과 통계", "기하"];

// 종류별 · 난이도별 문제 출처. 데일리 난이도 구분 기준은 아직 미확정(TBD).
const KINDS = [
  {
    name: "데일리테스트",
    difficulties: [
      { name: "난이도1", source: "개념원리 (난이도1 기준 TBD)" },
      { name: "난이도2", source: "개념원리 (난이도2 기준 TBD)" }
    ]
  },
  {
    name: "단원테스트",
    difficulties: [
      { name: "난이도1", source: "베이직쎈 단원마무리" },
      { name: "난이도2", source: "쎈B 단원마무리" }
    ]
  }
];

function parseArgs(argv) {
  const args = { dryRun: false, out: null, manifest: null };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--out") args.out = argv[(i += 1)];
    else if (a === "--manifest") args.manifest = argv[(i += 1)];
    else throw new Error(`알 수 없는 인자: ${a}`);
  }
  if (!args.dryRun && !args.out) {
    throw new Error("--out <경로> 또는 --dry-run 중 하나는 필요합니다.");
  }
  return args;
}

// ssenTypeIndex 에서 과목별 단원 목록을 [{ unitNo, unitName, partName }] 로 뽑는다.
function loadUnitsBySubject() {
  const indexPath = join(repoRoot, "api", "data", "ssenTypeIndex.json");
  const rows = JSON.parse(readFileSync(indexPath, "utf8"));
  const bySubject = new Map();
  for (const row of rows) {
    if (!bySubject.has(row.subject)) bySubject.set(row.subject, new Map());
    const units = bySubject.get(row.subject);
    if (!units.has(row.unitNo)) {
      units.set(row.unitNo, { unitNo: row.unitNo, unitName: row.unitName, partName: row.partName });
    }
  }
  const result = new Map();
  for (const [subject, units] of bySubject) {
    result.set(
      subject,
      [...units.values()].sort((a, b) => a.unitNo.localeCompare(b.unitNo, "ko"))
    );
  }
  return result;
}

function leafReadme({ subject, kind, unitLabel, difficulty }) {
  return [
    `과목: ${subject}`,
    `종류: ${kind.name}`,
    `단원: ${unitLabel}`,
    `난이도: ${difficulty.name}`,
    `문제 출처: ${difficulty.source}`,
    ``,
    `이 폴더에 넣을 파일:`,
    `  - 문제.pdf   (워터마크: 대각선 반투명 중앙 "으뜸수학학원" + 로고)`,
    `  - 정답.pdf`,
    ``,
    `시험지 PDF 는 git 에 커밋하지 않는다.`,
    ``
  ].join("\n");
}

function main() {
  const args = parseArgs(process.argv);
  const unitsBySubject = loadUnitsBySubject();
  const lines = [];
  let leafCount = 0;

  for (const subject of SUBJECTS) {
    const units = unitsBySubject.get(subject) ?? [];
    lines.push(`${subject}/`);
    for (const kind of KINDS) {
      lines.push(`  ${kind.name}/`);
      for (const unit of units) {
        const unitLabel = `${unit.unitNo}. ${unit.unitName}`;
        lines.push(`    ${unitLabel}/`);
        for (const difficulty of kind.difficulties) {
          const leafLabel = `${difficulty.name} (${difficulty.source})`;
          lines.push(`      ${leafLabel}/`);
          leafCount += 1;
          if (args.out) {
            const dir = join(args.out, subject, kind.name, unitLabel, leafLabel);
            mkdirSync(dir, { recursive: true });
            writeFileSync(join(dir, "README.txt"), leafReadme({ subject, kind, unitLabel, difficulty }), "utf8");
          }
        }
      }
    }
  }

  const summary = `# 시험지 폴더 스캐폴드\n\n생성기: scripts/build-test-paper-folders.mjs\n단원 기준: api/data/ssenTypeIndex.json (쎈 목차)\n잎 폴더 수: ${leafCount}\n\n\`\`\`\n${lines.join("\n")}\n\`\`\`\n`;

  if (args.manifest) {
    const manifestPath = resolve(repoRoot, args.manifest);
    writeFileSync(manifestPath, summary, "utf8");
    process.stdout.write(`manifest 작성: ${manifestPath}\n`);
  }
  if (args.dryRun && !args.manifest) process.stdout.write(summary);
  if (args.out) process.stdout.write(`\n생성 완료: ${resolve(args.out)} (잎 폴더 ${leafCount}개)\n`);
}

main();
