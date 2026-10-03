// `--키 값` · `--깃발` 만 읽는 최소 인자 파서.
//
// pdfTools.mjs 에 있던 것을 그대로 옮겼다(동작 동일 · pdfTools 가 다시 내보낸다). 거기서 꺼낸 까닭은
// pdfTools 가 @napi-rs/canvas 와 pdfjs 를 끌고 오기 때문이다 — 그림을 안 그리는 스크립트가
// 인자 파서 하나 때문에 그걸 다 설치해야 했다(node_modules 없는 worktree 에서 ERR_MODULE_NOT_FOUND).
export function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[index + 1];
    if (next === undefined || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}
