// book.pdf 쪽을 PNG 로 렌더(검수 확인용). 사용: node render-pages.mjs <pdf> <outDir> <쪽...>
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pdfjs, renderPage } from "../problem-bank/pdfTools.mjs";

const [pdf, outDir, ...pages] = process.argv.slice(2);
const doc = await pdfjs.getDocument({ data: new Uint8Array(await readFile(pdf)), verbosity: 0 }).promise;
console.log("pages", doc.numPages);
for (const n of pages.map(Number)) {
  const page = await doc.getPage(n);
  const { canvas } = await renderPage(page, 110 / 72);
  await writeFile(path.join(outDir, `book-p${n}.png`), await canvas.encode("png"));
}
