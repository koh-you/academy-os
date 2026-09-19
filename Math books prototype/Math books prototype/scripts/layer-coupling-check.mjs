#!/usr/bin/env node
// 축 L (Layer Coupling 0~3) 자동 채점
// schema §2.16.1 · v5.1
// 사용법: node scripts/layer-coupling-check.mjs <문제.tex>

import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const child = spawn('node', [path.join(__dirname, 'v51-composite-check.mjs'), ...process.argv.slice(2), '--axis', 'L'], { stdio: 'inherit' });
child.on('exit', code => process.exit(code));
