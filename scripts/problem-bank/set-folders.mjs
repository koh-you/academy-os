// 교재관리·오답관리의 교재 폴더를 과목 기준으로 맞춘다.
//
// 사용:
//   node scripts/problem-bank/set-folders.mjs            # 무엇을 바꿀지만 보여준다
//   node scripts/problem-bank/set-folders.mjs --confirm  # 실제로 바꾼다
//
// 인증: 환경변수 ACADEMY_TEACHER_TOKEN 의 Bearer 토큰. 값은 출력하지 않는다.
//
// 폴더는 교재 제목에서 과목을 읽어 정한다(3-1 · 공통수학1 · 미적분1 …).
// 규칙에 걸리지 않는 교재는 건드리지 않고 「규칙 없음」으로 보고한다.

import { pathToFileURL } from "node:url";

const API_BASE = process.env.ACADEMY_API_BASE ?? "https://koh-you-math-academy-os-api.onrender.com";
const TOKEN = process.env.ACADEMY_TEACHER_TOKEN ?? "";

// 위에서부터 먼저 맞는 규칙을 쓴다. 「중3-2 수학」처럼 여러 낱말이 겹치므로 순서가 중요하다.
const SUBJECT_RULES = [
  [/공통수학\s*1|공통수학\s*Ⅰ/, "공통수학1"],
  [/공통수학\s*2|공통수학\s*Ⅱ/, "공통수학2"],
  [/미적분\s*(1|Ⅰ|I(?!I))/, "미적분1"],
  [/미적분\s*(2|Ⅱ|II)/, "미적분2"],
  [/확률과\s*통계/, "확률과통계"],
  [/(^|[^가-힣])대수/, "대수"],
  [/(^|[^가-힣])기하/, "기하"],
  [/3\s*-\s*1/, "3-1"],
  [/3\s*-\s*2/, "3-2"]
];

/** 교재 제목에서 과목 폴더 이름을 정한다. 못 정하면 null. */
export function folderForTitle(title) {
  const text = String(title ?? "");
  for (const [pattern, folder] of SUBJECT_RULES) if (pattern.test(text)) return folder;
  return null;
}

async function api(method, route, body) {
  const response = await fetch(`${API_BASE}${route}`, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, ...(body ? { "Content-Type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`HTTP ${response.status} ${route} — ${text.slice(0, 160)}`);
  return text ? JSON.parse(text) : {};
}

async function main() {
  const confirm = process.argv.includes("--confirm");
  if (!TOKEN) {
    console.error("ACADEMY_TEACHER_TOKEN 이 없습니다. 운영자가 이 프로세스에만 주입해야 합니다.");
    process.exit(1);
  }

  const books = (await api("GET", "/api/problem-bank/books")).books ?? [];
  const plan = [];
  const skipped = [];
  for (const book of books) {
    const folder = folderForTitle(book.title);
    if (!folder) { skipped.push(book); continue; }
    if ((book.folderPath ?? "") === folder) continue;
    plan.push({ book, folder });
  }

  const w = (s, n) => String(s).padEnd(n);
  console.log(`교재 ${books.length}권 · 바꿀 것 ${plan.length}권 · 이미 맞음 ${books.length - plan.length - skipped.length}권 · 규칙 없음 ${skipped.length}권\n`);
  for (const { book, folder } of plan) {
    console.log(`  ${w(book.title, 24)} ${w(book.folderPath || "(폴더 없음)", 16)} → ${folder}`);
  }
  for (const book of skipped) console.log(`  ! ${w(book.title, 24)} 규칙 없음 — 그대로 둠`);

  if (!confirm) {
    console.log("\n(--confirm 없음 — 바꾸지 않았습니다)");
    return 0;
  }

  let failed = 0;
  for (const { book, folder } of plan) {
    try {
      await api("POST", "/api/problem-bank/book", { bookId: book.bookId, patch: { folderPath: folder } });
      console.log(`  옮김: ${book.title} → ${folder}`);
    } catch (error) {
      failed += 1;
      console.error(`  실패: ${book.title} — ${error.message}`);
    }
  }

  // 저장 뒤 서버에서 다시 읽어 실제 값으로 확인한다.
  const after = (await api("GET", "/api/problem-bank/books")).books ?? [];
  const byFolder = new Map();
  for (const book of after) {
    const key = book.folderPath || "(폴더 없음)";
    byFolder.set(key, (byFolder.get(key) ?? 0) + 1);
  }
  console.log("\n서버 재조회:");
  for (const [folder, count] of [...byFolder.entries()].sort((a, b) => a[0].localeCompare(b[0], "ko"))) {
    console.log(`  ${w(folder, 16)} ${count}권`);
  }
  console.log(`\n끝. 바꾼 것 ${plan.length - failed}권 · 실패 ${failed}권`);
  return failed ? 1 : 0;
}

// 직접 실행할 때만 돈다(규칙만 가져다 쓰는 테스트가 네트워크를 타지 않게).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exit(await main());
}
