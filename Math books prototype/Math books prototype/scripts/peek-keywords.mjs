import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const path = process.argv[2];
const tmp = join(tmpdir(), 'k.txt');
spawnSync('pdftotext', ['-layout', path, tmp]);
const text = await readFile(tmp, 'utf8');
console.log(`총 길이: ${text.length}자`);

const keywords = [
  '다항식', '나머지', '인수', '조립제법',
  '이차방정식', '삼차방정식', '사차방정식', '연립방정식',
  '이차부등식', '연립부등식', '판별식', '근의 공식',
  '복소수', '허근', '켤레',
  '경우의 수', '순열', '조합', '나열', '이웃', '뽑', '선택',
  '행렬', '성분', '정사각', '단위행렬',
  '함수', '그래프', '꼭짓점', '최댓값', '최솟값',
  '원', '직선', '좌표', '내분', '중점',
  '집합', '명제', '부분집합', '교집합', '합집합',
  '유리함수', '무리함수', '점근선',
];
for (const kw of keywords) {
  const re = new RegExp(kw, 'g');
  const cnt = (text.match(re) || []).length;
  if (cnt > 0) console.log(`  ${kw}: ${cnt}회`);
}
