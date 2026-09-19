#!/usr/bin/env node
// 마스터 지적 자동 차단 검사 — v2.0 게이트 G4'
// 2026-06-25 마스터 확립 — "지적 사항이 반복 안 되는 구조적 시스템"
//
// 단일 출처: bank/마스터-지적/INDEX.md + 각 지적 파일의 frontmatter
//
// 본 도구는 bank/마스터-지적/ 디렉토리의 모든 지적 파일을 읽어
// forbidden_keywords를 자동 추출 후 본문·답지에 grep 차단한다.
//
// 사용법:
//   node scripts/master-feedback-check.mjs <file1.tex> [file2.tex ...]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/master-feedback-check.mjs <file.tex> [more.tex ...]');
  console.error('       반환 코드: 0 = 통과 / 1 = 차단');
  process.exit(2);
}

// 본 스크립트 위치 → 프로젝트 루트 추정
const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..');
const feedbackDir = path.join(projectRoot, 'bank', '마스터-지적');

if (!fs.existsSync(feedbackDir)) {
  console.error(`⚠️  마스터-지적 디렉토리 없음: ${feedbackDir}`);
  console.error('   bank/마스터-지적/README.md 참조하여 시스템 구축 필요');
  process.exit(2);
}

// 각 지적 파일의 frontmatter 파싱
function parseFeedbackFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];

  const slug = path.basename(filepath, '.md');
  const dateMatch = fm.match(/^date:\s*(.+?)$/m);
  const severityMatch = fm.match(/^severity:\s*(\w+)/m);
  const date = dateMatch ? dateMatch[1].trim() : null;
  const severity = severityMatch ? severityMatch[1].trim() : 'RED';

  // forbidden_keywords 추출 (YAML 리스트)
  const keywords = [];
  const kwBlockMatch = fm.match(/forbidden_keywords:\s*\n((?:\s*-\s*.+\n?)+)/);
  if (kwBlockMatch) {
    const lines = kwBlockMatch[1].split(/\r?\n/);
    for (const line of lines) {
      const m = line.match(/^\s*-\s*['"](.+?)['"]\s*$/) || line.match(/^\s*-\s*(.+?)\s*$/);
      if (m && m[1]) keywords.push(m[1].trim());
    }
  }

  // master_quote 짧게
  const quoteMatch = fm.match(/^master_quote:\s*['"]?(.+?)['"]?\s*$/m);
  const quote = quoteMatch ? quoteMatch[1].trim().replace(/['"]/g, '').slice(0, 80) : '';

  // 적용 파일 종류 분기 (2026-06-25 v3.1)
  // applied_to: [답지, ...] 또는 [본문, ...] — 누락 시 둘 다에 적용 (기본)
  const appliedMatch = fm.match(/applied_to:\s*\[(.*?)\]/);
  const applied = appliedMatch
    ? appliedMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''))
    : ['본문', '답지', '청사진'];   // 기본 전부

  return { slug, date, severity, keywords, quote, applied, file: filepath };
}

// 파일 종류 분류 (2026-06-25 v3.1)
// 답지: *-답지.tex / *-solution.tex
// 본문: *-문제.tex / N회차-문제.tex / practiceNN-*.tex / test*.tex
// 청사진: *.yaml
function classifyFile(filepath) {
  const base = path.basename(filepath).toLowerCase();
  const norm = filepath.replace(/\\/g, '/');

  // 🔴 내부문서 (2026-07-31 세션 106 신설)
  //   학생이 보는 자료는 output/ 아래 회차 폴더에만 있다. bank/ 는 내부 자산(기획·분석·명세)이다.
  //   종전에는 bank/ 의 기획 문서가 '본문'으로 분류돼 「학생자료 별점노출 금지」에 23건 걸렸다.
  //   그 규칙의 취지는 **학생에게 난이도를 노출하지 말라**는 것이므로 내부 문서에는 적용되지 않는다.
  //   🔴 단 무조건 면제가 아니다 — 지적 파일이 applied_to 에 '내부문서' 를 명시하면 그때는 적용된다.
  //      (예: 용어·표기 규칙처럼 문서 종류를 가리지 않는 것)
  //   🔴 상대 경로("bank/x.tex")와 절대 경로("C:/.../bank/x.tex") 둘 다 잡아야 한다
  if (/(^|\/)bank\//.test(norm) && !/(^|\/)output\//.test(norm)) return '내부문서';

  if (base.includes('답지') || base.includes('solution')) return '답지';
  if (base.endsWith('.yaml') || base.endsWith('.yml')) return '청사진';
  return '본문';
}

// 모든 지적 파일 로드
const feedbackFiles = fs.readdirSync(feedbackDir)
  .filter(f => f.endsWith('.md') && f !== 'README.md' && f !== 'INDEX.md')
  .map(f => path.join(feedbackDir, f));

const feedbacks = [];
for (const fp of feedbackFiles) {
  const parsed = parseFeedbackFile(fp);
  if (parsed && parsed.keywords.length > 0) feedbacks.push(parsed);
}

if (feedbacks.length === 0) {
  console.log('📋 마스터-지적 디렉토리에 등록된 지적이 없습니다. 통과.');
  process.exit(0);
}

console.log(`📋 마스터-지적 ${feedbacks.length}건 로드`);
for (const fb of feedbacks) {
  console.log(`   [${fb.date}] ${fb.slug} (${fb.severity}, 키워드 ${fb.keywords.length}개)`);
}
console.log();

// 검사 대상 파일 grep
let totalRed = 0;
let totalYellow = 0;
const reports = [];

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`⚠️  파일 없음: ${file}`);
    continue;
  }
  const fileKind = classifyFile(file);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  for (const fb of feedbacks) {
    // 적용 파일 종류 매칭 — applied 리스트에 포함되어야 검사
    if (!fb.applied.includes(fileKind)) continue;

    for (const kwStr of fb.keywords) {
      // YAML 백슬래시 이중 이스케이프 해제 (저장 시 \\d → 읽을 때 \\d → regex \d로)
      const patSrc = kwStr.replace(/\\\\/g, '\\');
      let re;
      try { re = new RegExp(patSrc, 'g'); }
      catch (e) {
        console.error(`⚠️  잘못된 정규식 (${fb.slug}): ${kwStr}`);
        continue;
      }

      // 우회표현사전 매핑 (v3.1, 2026-06-25): 직접 표현 → 사전 섹션
      const indirectGuide = {
        '중근': '우회표현사전.md §2.1 (중근 조건)',
        '허근': '우회표현사전.md §2.3 (켤레허근)',
        '실수': '우회표현사전.md §2.2 (모든 근 실수)',
      };

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        re.lastIndex = 0;
        const matches = [...line.matchAll(re)];
        if (matches.length > 0) {
          for (const m of matches) {
            // 우회 표현 사전 안내 (직접 표현 키워드일 때만)
            let guide = '';
            for (const [k, v] of Object.entries(indirectGuide)) {
              if (m[0].includes(k)) { guide = v; break; }
            }
            reports.push({
              file: path.basename(file),
              line: i + 1,
              slug: fb.slug,
              severity: fb.severity,
              match: m[0],
              context: line.trim().slice(0, 140),
              quote: fb.quote,
              guide,
            });
            if (fb.severity === 'RED') totalRed++;
            else totalYellow++;
          }
        }
      }
    }
  }
}

if (reports.length === 0) {
  console.log('✅ 마스터 지적 위반 0건. 통과.');
  process.exit(0);
}

console.log(`\n🔴 RED ${totalRed}건 / 🟡 YELLOW ${totalYellow}건\n`);
console.log('=== 마스터 지적 위반 검출 ===');
for (const r of reports) {
  const icon = r.severity === 'RED' ? '🔴' : '🟡';
  console.log(`${icon} ${r.file}:${r.line}  [${r.slug}]  "${r.match}"`);
  console.log(`    context: ${r.context}`);
  if (r.guide) console.log(`    우회 안내: ${r.guide}`);
  if (r.quote) console.log(`    마스터: "${r.quote}..."`);
  console.log();
}

console.log('=== 단일 출처 ===');
console.log('bank/마스터-지적/INDEX.md (마스터 지적 누적 단일 출처)');
console.log('bank/마스터-지적/README.md (시스템 정의)');

if (totalRed > 0) {
  console.error(`\n❌ 빌드 차단: 🔴 마스터 지적 위반 ${totalRed}건. 발문/풀이 정정 후 재시도.`);
  process.exit(1);
}
console.log('\n⚠️  YELLOW 검토 권장.');
process.exit(0);
