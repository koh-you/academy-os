#!/usr/bin/env node
// Wikimedia Commons 이미지 검색 파이프라인
// 2026-07-14 세션 36 마스터 확립 (그림 혁신 옵션 A 채택)
//
// 목적:
//   mechanism 이름으로 Commons 검색 → CC-BY-SA 이미지 URL 후보 반환
//   자동 다운로드 옵션 · LICENSES.md 자동 갱신
//
// 단일 출처:
//   bank/이미지-저작권-정책.md §1.2
//   figures/commons/LICENSES.md
//
// 사용법:
//   node scripts/commons-image-search.mjs <검색어> [--download] [--limit N]
//
// 예시:
//   node scripts/commons-image-search.mjs "pantograph mechanism"
//   node scripts/commons-image-search.mjs "GPS satellite" --download --limit 5
//
// 반환 코드: 0 = 검색 성공 / 1 = 검색 실패 / 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/commons-image-search.mjs <검색어> [--download] [--limit N]');
  console.error('  --download: 후보 이미지 자동 다운로드 (figures/commons/)');
  console.error('  --limit N: 검색 결과 상한 (기본 5)');
  process.exit(2);
}

let query = '';
let doDownload = false;
let limit = 5;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--download') doDownload = true;
  else if (args[i] === '--limit' && args[i + 1]) {
    limit = parseInt(args[i + 1]);
    i++;
  } else if (!query) query = args[i];
  else query += ' ' + args[i];
}

if (!query) {
  console.error('❌ 검색어 필요');
  process.exit(2);
}

console.log(`🔍 Wikimedia Commons 검색`);
console.log(`   검색어: "${query}"`);
console.log(`   상한: ${limit}건`);
console.log(`   다운로드: ${doDownload ? '자동' : '수동 (URL만 표시)'}\n`);

// Commons Search API
// https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srsearch=...&srnamespace=6&srlimit=N
const searchUrl = new URL('https://commons.wikimedia.org/w/api.php');
searchUrl.searchParams.set('action', 'query');
searchUrl.searchParams.set('format', 'json');
searchUrl.searchParams.set('list', 'search');
searchUrl.searchParams.set('srsearch', query);
searchUrl.searchParams.set('srnamespace', '6'); // 6 = File namespace
searchUrl.searchParams.set('srlimit', String(limit));

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'MathBooksBot/1.0 (https://github.com/mathbooks-korea; contact@mathbooks.kr) educational-purpose/1.0',
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'MathBooksBot/1.0 (https://github.com/mathbooks-korea; contact@mathbooks.kr) educational-purpose/1.0',
      },
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Follow redirect
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (e) => {
      file.close();
      try { fs.unlinkSync(dest); } catch {}
      reject(e);
    });
  });
}

async function getFileInfo(filename) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('format', 'json');
  url.searchParams.set('titles', filename);
  url.searchParams.set('prop', 'imageinfo');
  url.searchParams.set('iiprop', 'url|extmetadata|size|mime');

  const data = await fetchJson(url.toString());
  const pages = data?.query?.pages ?? {};
  const first = Object.values(pages)[0];
  return first?.imageinfo?.[0] ?? null;
}

// License 필터: 허용 라이선스 판정
function isAcceptableLicense(licenseShort) {
  if (!licenseShort) return false;
  // 공백·하이픈 제거하여 통일 (CC BY-SA·CC-BY-SA·cc by sa 모두 동일 취급)
  const normalized = licenseShort.toLowerCase().replace(/[\s-]/g, '');
  // CC0·Public Domain 허용
  if (normalized.includes('cc0') || normalized.includes('publicdomain')) return true;
  // CC-BY, CC-BY-SA 허용 (NC·ND 제외)
  if (normalized.includes('ccby') && !normalized.includes('nc') && !normalized.includes('nd')) return true;
  return false;
}

try {
  const searchData = await fetchJson(searchUrl.toString());
  const results = searchData?.query?.search ?? [];
  if (results.length === 0) {
    console.log('⚠️  검색 결과 없음. 다른 키워드 시도.');
    process.exit(1);
  }

  console.log(`✅ 검색 결과 ${results.length}건. 라이선스 확인 중...\n`);

  const acceptable = [];
  for (const result of results) {
    const filename = result.title; // 예: "File:Pantograph_diagram.svg"
    const info = await getFileInfo(filename);

    if (!info) {
      console.log(`⚪ ${filename} · 정보 없음 · SKIP`);
      continue;
    }

    const meta = info.extmetadata ?? {};
    const licenseShort = meta.LicenseShortName?.value ?? '';
    const artist = (meta.Artist?.value ?? '').replace(/<[^>]*>/g, '').trim().slice(0, 60);
    const acceptable_license = isAcceptableLicense(licenseShort);

    const symbol = acceptable_license ? '✅' : '❌';
    console.log(`${symbol} ${filename}`);
    console.log(`   라이선스: ${licenseShort || '(미확인)'}`);
    console.log(`   저작자: ${artist || '(미확인)'}`);
    console.log(`   URL: ${info.url}`);
    console.log(`   크기: ${info.width}x${info.height} (${info.mime})`);
    console.log(`   파일 페이지: https://commons.wikimedia.org/wiki/${encodeURIComponent(filename)}`);
    console.log('');

    if (acceptable_license) {
      acceptable.push({
        filename,
        artist,
        license: licenseShort,
        url: info.url,
        pageUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(filename)}`,
      });
    }
  }

  if (acceptable.length === 0) {
    console.log('⚠️  허용 라이선스 (CC-BY·CC-BY-SA·CC0) 이미지 없음.');
    console.log('   다른 키워드로 재검색 or 참고자료/ 크롭 (option β) 검토.');
    process.exit(1);
  }

  console.log(`\n📊 허용 라이선스 이미지 ${acceptable.length}건`);

  if (doDownload) {
    console.log('\n📥 다운로드 시작 (figures/commons/)...');
    const commonsDir = path.join('figures', 'commons');
    fs.mkdirSync(commonsDir, { recursive: true });

    const today = new Date().toISOString().slice(0, 10);
    const querySlug = query.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const licensesPath = path.join(commonsDir, 'LICENSES.md');
    let licensesContent = fs.existsSync(licensesPath) ? fs.readFileSync(licensesPath, 'utf8') : '';

    for (let i = 0; i < acceptable.length; i++) {
      const item = acceptable[i];
      const ext = path.extname(new URL(item.url).pathname) || '.png';
      const localName = `commons-${querySlug}-${today}-${i + 1}${ext}`;
      const localPath = path.join(commonsDir, localName);

      try {
        await downloadFile(item.url, localPath);
        console.log(`   ✅ ${localName}`);

        licensesContent += `\n## ${localName}\n`;
        licensesContent += `- 원저작자: ${item.artist || '(미확인)'}\n`;
        licensesContent += `- 라이선스: ${item.license}\n`;
        licensesContent += `- 원본 URL: ${item.pageUrl}\n`;
        licensesContent += `- 파일 URL: ${item.url}\n`;
        licensesContent += `- 다운로드 일자: ${today}\n`;
        licensesContent += `- 검색 쿼리: ${query}\n`;
        licensesContent += `- 사용 이력: 미사용\n`;
      } catch (e) {
        console.log(`   ❌ ${localName} 다운로드 실패: ${e.message}`);
      }
    }

    fs.writeFileSync(licensesPath, licensesContent);
    console.log(`\n📝 LICENSES.md 갱신: ${licensesPath}`);
  } else {
    console.log('\n💡 다운로드하려면 --download 옵션 추가');
  }

  console.log('\n=== 관련 자원 ===');
  console.log('bank/이미지-저작권-정책.md §1.2 Wikimedia Commons 허용 정책');
  console.log('figures/commons/LICENSES.md 라이선스 매핑');

  process.exit(0);
} catch (e) {
  console.error(`❌ 검색 실패: ${e.message}`);
  process.exit(1);
}
