/**
 * 재조판 진행표(`docs/source-badge-removal-progress.md`)를 읽고 쓰는 순수 함수.
 *
 * **표가 곧 상태다.** 34권을 도는 작업은 토큰 만료·세션 종료·재부팅으로 수없이 끊기므로,
 * 다음 실행이 「무엇을 건너뛸지」를 이 표 하나로 정한다. 따로 상태 파일을 두면 사람이 읽는 표와
 * 어긋나고, 어긋나면 어느 쪽이 맞는지 알 수 없다.
 *
 *   ⬜  아직 조판 안 함
 *   ⏳  조판은 끝났고 **등록만** 실패(토큰 만료 등) — 조판을 건너뛰고 등록만 다시 한다
 *   ✅  등록까지 끝남
 *
 * ⏳ 를 따로 두는 까닭은 조판이 책당 5~22분이라, 「조판도 안 한 책」과 섞이면 몇 시간을 다시 쓰기 때문이다.
 *
 * 파일 I/O 를 하지 않는다 — 글을 받아 글을 돌려준다. 그래야 화면·디스크 없이 검사할 수 있다.
 */

const MARKS = Object.freeze({ todo: "⬜", typeset: "⏳", done: "✅" });

/** 표의 한 줄을 알아보는 규칙. `| 3 | \`bank\` | 제목 | 문항수 | 상태 |` */
const ROW = /^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|\s*(⬜|⏳|✅)/;

/** 진행표 글에서 책 목록과 상태를 읽는다. */
export function readProgressRows(text) {
  const rows = [];
  for (const line of String(text ?? "").split("\n")) {
    const match = line.match(ROW);
    if (!match) continue;
    rows.push({
      bank: match[1],
      title: match[2],
      items: Number(match[3]),
      done: match[4] === MARKS.done,
      typeset: match[4] === MARKS.typeset
    });
  }
  return rows;
}

/**
 * 한 책의 상태 칸을 바꾼 글을 돌려준다.
 * @param {string} text 진행표 전체
 * @param {string} bank latex-bank 폴더 이름
 * @param {"todo"|"typeset"|"done"} state
 * @param {string} note 상태 옆에 적을 한 줄(교체 장수·분 등)
 * @param {string} [today] 날짜(YYYY-MM-DD). 검사에서 고정하려고 받는다.
 */
export function markProgressRow(text, bank, state, note, today = new Date().toISOString().slice(0, 10)) {
  const mark = MARKS[state];
  if (!mark) throw new Error(`모르는 상태: ${state}`);
  // 책 이름은 정규식 특수문자를 담을 수 있다(예: `rpm-m3-2`). 글자 그대로 찾는다.
  const needle = `\`${bank}\``;
  return String(text ?? "").split("\n").map((line) => {
    if (!line.startsWith("|") || !line.includes(needle) || !ROW.test(line)) return line;
    return line.replace(/\|\s*(?:⬜|⏳|✅)[^|]*\|\s*$/, `| ${mark} ${today} · ${note} |`);
  }).join("\n");
}

export { MARKS as progressMarks };
