import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const path = process.argv[2];
const tmp = join(tmpdir(), 'k.txt');
spawnSync('pdftotext', ['-layout', path, tmp]);
const text = await readFile(tmp, 'utf8');
console.log(text.slice(0, 1500));
console.log('---문자 코드 샘플---');
for (let i = 100; i < 200; i++) {
  if (text[i]) console.log(i, text.charCodeAt(i), JSON.stringify(text[i]));
}
