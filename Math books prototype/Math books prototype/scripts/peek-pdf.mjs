import { readFile } from 'node:fs/promises';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const path = process.argv[2];
const pageNum = parseInt(process.argv[3] || '2');
const data = new Uint8Array(await readFile(path));
const pdf = await pdfjsLib.getDocument({ data, useSystemFonts: true }).promise;
console.log(`Total pages: ${pdf.numPages}`);
const page = await pdf.getPage(pageNum);
const content = await page.getTextContent();
const items = content.items.filter(i => i.str && i.str.trim()).map(i => ({
  x: Math.round(i.transform[4]), y: Math.round(i.transform[5]), str: i.str,
}));
items.sort((a, b) => b.y - a.y || a.x - b.x);
console.log(items.slice(0, 80).map(i => `[${i.x},${i.y}] "${i.str}"`).join('\n'));
