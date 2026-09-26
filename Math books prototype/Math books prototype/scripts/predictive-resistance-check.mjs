#!/usr/bin/env node
// 축 P (Predictive Resistance 0~3) 자동 채점 (v5.1 신규)
// schema §2.16.1 · v5.1
// 사용법: node scripts/predictive-resistance-check.mjs <문제.tex>

import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const child = spawn('node', [path.join(__dirname, 'v51-composite-check.mjs'), ...process.argv.slice(2), '--axis', 'P'], { stdio: 'inherit' });
child.on('exit', code => process.exit(code));
