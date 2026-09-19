#!/usr/bin/env node
// scripts/star-classify.mjs v1.8
//
// 정독 데이터(bank/mechanism-데이터-*.md) YAML 항목의 신호에 근거해
// star_tier를 결정론적으로 매핑한다. 판단·주관 없음.
// 임계값 = bank/mechanism-데이터-정독-tier-매핑-v3.2.md + bank/vendor-label-calibration-v1.12.md.
//
// v1.8 (2026-07-21 · 세션 63): 세션 62 flywheel 23종 벤더 신규 편입
//   - 신규 벤더 15종 (일품·절대등급·개념+유형·완자·풍산자·수학의바이블·수학의신·EBS 고난도·마플교과서·라이트쎈·
//                     1등급마스터·플래티넘·일등급수학·일등급만들기·유형만렙·유형ZIP·짱중요·아샘파이널·완쏠·바이블유형온·마더텅·바이블유형ON)
//   - 매쓰플랫 정답률 회귀 축 신설 (78%→★1 · 44%→premium · 편차 0.0)
//   - CM2 v2 재정독 정정: 개념원리 C급 소단원별 세분 · RPM v2 68% · 고쟁이 B+ 하향
//
// v1.1 (2026-07-21 · Phase 2.1): vendor_label 축 신규 추가
//   - 파일럿 1+2 (100문 실측) 회귀 함수 기반
//   - publisher (쎈·마플시너지) × label × sub_unit 3차원 매핑
//   - confidence 스코어 병행 출력
//
// 사용:
//   node scripts/star-classify.mjs --file bank/mechanism-데이터-쎈-CM2-GM-평면좌표.md
//   node scripts/star-classify.mjs --file X.md --by answer_rate
//   node scripts/star-classify.mjs --file X.md --by number       # 번호 위치 fallback
//   node scripts/star-classify.mjs --file X.md --by vendor_label # v1.1 신규
//   node scripts/star-classify.mjs --file X.md --publisher 쎈    # v1.1
//   node scripts/star-classify.mjs --file X.md --dry             # 결과만 표시, 파일 미수정
//
// 정답률 기반 매핑 (schema v2.0):
//   < 0.25   → star_5_premium
//   0.25~0.45 → star_5
//   0.45~0.65 → star_4
//   0.65~0.85 → star_3
//   > 0.85   → skip (star_2 이하)
//
// 번호 위치 기반 매핑 (정답률 미공개시 fallback):
//   4점 문항 중 원본 번호 20~22 (또는 27~30) → star_5_premium 후보 (킬러 위치)
//   4점 문항 중 원본 번호 15~19 → star_5
//   4점 문항 중 그 외 → star_4
//   3점 문항 → star_3 (일부 star_4)
//   2점 문항 → star_1·2 (권장 skip)
//
// 벤더 라벨 기반 매핑 (v1.1 신규 · vendor-label-calibration.md v1.1):
//   쎈:
//     A단계 기본            → star_1 (신뢰 85%)
//     B단계 대표문제        → star_3 (신뢰 60%, alt star_2)
//     B단계 ● 상            → star_4 (신뢰 70%, alt star_3)
//     C단계 사고력·교육청   → star_4 (신뢰 70%, alt star_5)
//   마플시너지:
//     BASIC                → star_2 (신뢰 75%, alt star_1)
//     NORMAL               → star_3 (신뢰 80%, alt star_4)
//     TOUGH                → star_4 (신뢰 80%, alt star_3·5)
//     STEP 2 서술형         → star_4 (신뢰 90%)
//     STEP 3 (원·이동 소단원) → star_5 (신뢰 75%)
//     STEP 3 (평면좌표 소단원) → star_4 (신뢰 60%, alt star_5·3)
//     STEP 3 (기타 소단원)   → star_4~5 (신뢰 50%, 수동 검증)

import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const args = process.argv.slice(2);
let file = null;
let mode = 'auto'; // auto | answer_rate | number | vendor_label
let dry = false;
let publisher = null; // 쎈 | 마플시너지 (또는 file frontmatter에서 자동 감지)
let subUnit = null;   // 평면좌표 | 원의방정식 등

let minConfidence = 0;  // v1.8: 저신뢰 정정 필터 (0 = 모두 · 0.7 = 안전만)
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--file') file = args[++i];
  else if (args[i] === '--by') mode = args[++i];
  else if (args[i] === '--dry') dry = true;
  else if (args[i] === '--publisher') publisher = args[++i];
  else if (args[i] === '--sub-unit') subUnit = args[++i];
  else if (args[i] === '--min-confidence') minConfidence = parseFloat(args[++i]);
}

if (!file) {
  console.error('Usage: node scripts/star-classify.mjs --file <path> [--by auto|answer_rate|number|vendor_label] [--publisher 쎈|마플시너지] [--sub-unit 평면좌표|원의방정식] [--dry] [--min-confidence 0.7]');
  process.exit(1);
}

function classifyByAnswerRate(rate) {
  if (rate === null || rate === undefined || isNaN(rate)) return null;
  const r = Number(rate);
  if (r < 0.25) return 'star_5_premium';
  if (r < 0.45) return 'star_5';
  if (r < 0.65) return 'star_4';
  if (r < 0.85) return 'star_3';
  return null; // skip (star_2 이하)
}

function classifyByNumber(numberInOriginal, points) {
  const n = Number(numberInOriginal);
  const p = Number(points);
  if (isNaN(n) || isNaN(p)) return null;
  if (p === 2) return 'star_1·2';
  if (p === 3) {
    // 3점 문항 위치 세분화
    if (n >= 12 && n <= 15) return 'star_3';
    return 'star_3';
  }
  if (p === 4) {
    // 4점 문항 위치별 매핑
    // 공통 22문 (2025개정 이후) or 30문(구 나형): 킬러는 20-22 또는 27-30
    if (n >= 27 && n <= 30) return 'star_5_premium';
    if (n >= 20 && n <= 22) return 'star_5_premium';
    if (n >= 17 && n <= 19) return 'star_5';
    if (n >= 23 && n <= 26) return 'star_5';
    if (n >= 14 && n <= 16) return 'star_4';
    return 'star_4';
  }
  return null;
}

// v1.1 신규: 벤더 라벨 → ★ 회귀 매핑 (vendor-label-calibration.md v1.1 기반)
// v1.3+ (2026-07-21): 고쟁이 STEP 1 번호 위치별 세분화를 위해 sourceId 인자 추가
function classifyByVendorLabel(label, pub, sub, sourceId) {
  if (!label) return null;
  const L = String(label);

  // 쎈 벤더 (v1.7 · 세션 61 · CM2-ST 파일럿 · B단계 대표 -0.4·C단계 사고력 +0.5 실측 정정)
  if (pub === '쎈' || /쎈|ssen/i.test(pub || '')) {
    if (/A단계|기본다잡기/.test(L)) return { tier: 'star_1', confidence: 0.85 };
    if (/●\s*상|B단계.*상/.test(L)) return { tier: 'star_4', confidence: 0.80, alt: ['star_3'] };  // v1.6: 0.70→0.80
    // v1.7: CM2-ST 사고력·교육청 +0.5 상향 확인 (Agent L 실측 ★ 4.5)
    if (/사고력|교육청/.test(L)) {
      if (/집합|명제|CM2-ST|ST/i.test(sub || '')) return { tier: 'star_4', confidence: 0.85, alt: ['star_5'] };  // 상향
      return { tier: 'star_4', confidence: 0.70, alt: ['star_5'] };
    }
    // v1.7: CM2-ST B단계 대표 -0.4 하향 (Agent L 실측 ★ 2.6)
    if (/대표문제|B단계/.test(L)) {
      if (/집합|명제|CM2-ST|ST/i.test(sub || '')) return { tier: 'star_2', confidence: 0.75, alt: ['star_3'] };  // 하향
      return { tier: 'star_3', confidence: 0.60, alt: ['star_2'] };
    }
    if (/SPECIAL\s*TIP/.test(L)) return { tier: 'star_5_premium', confidence: 0.90, premium_flag: true };
    return null;
  }

  // 마플시너지 벤더 (v1.6 · Phase 2.5+ · CM1-CB TOUGH 하향 신호 실측 반영 · 도형이동 STEP 3 premium 40%)
  if (pub === '마플시너지' || /마플|mapl/i.test(pub || '')) {
    if (/BASIC/i.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_1'] };
    if (/NORMAL/i.test(L)) return { tier: 'star_3', confidence: 0.80, alt: ['star_4'] };
    if (/TOUGH/i.test(L)) {
      // v1.6: TOUGH 소단원 의존 예외 (CM1-CB에서 실측 3/5 하향)
      if (/순열|조합|경우의수|CB/i.test(sub || '')) {
        return { tier: 'star_3', confidence: 0.65, alt: ['star_4'], note: 'CM1-CB TOUGH 하향 실측 (마플 D 파일럿)' };
      }
      return { tier: 'star_4', confidence: 0.80, alt: ['star_3', 'star_5'] };
    }
    if (/STEP\s*2|서술형/.test(L)) return { tier: 'star_4', confidence: 0.90 };
    if (/STEP\s*3|행복한.*일등급/.test(L)) {
      // 소단원 의존 예외 (v1.1·v1.5 확장·v1.6 도형이동 신뢰도 상향)
      if (/도형이동|이동/.test(sub || '')) {
        return { tier: 'star_5', confidence: 0.85, premium_hint: 0.40 };  // v1.6: 실측 premium 밀도 40%
      }
      // v1.7 신규: CM2-FN 합성역함수 (Agent M 실측 premium 밀도 80%)
      if (/합성역함수|역함수|합성함수|CM2-FN|FN/i.test(sub || '')) {
        return { tier: 'star_5', confidence: 0.90, premium_hint: 0.80 };  // 최상위 밀도
      }
      if (/원의방정식|원/.test(sub || '')) {
        return { tier: 'star_5', confidence: 0.75, premium_hint: 0.25 };
      }
      if (/직선의방정식|직선/.test(sub || '')) {
        return { tier: 'star_5', confidence: 0.75 };
      }
      if (/평면좌표/.test(sub || '')) {
        return { tier: 'star_4', confidence: 0.60, alt: ['star_5', 'star_3'] };
      }
      if (/유리함수|유리/.test(sub || '')) {
        return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };  // v1.5 실측
      }
      if (/함수|무리함수|무리/.test(sub || '')) {
        return { tier: 'star_4', confidence: 0.55, alt: ['star_5'], note: 'premium 후보 존재 · 학평 문번 확인' };
      }
      if (/순열|조합|경우의수|CB/i.test(sub || '')) {
        return { tier: 'star_5', confidence: 0.80, premium_hint: 0.20 };  // v1.6: 마플 D 실측 (4/5 ★ 5+)
      }
      return { tier: 'star_4', confidence: 0.50, alt: ['star_5'], note: '소단원 미지정 · 수동 검증 권장' };
    }
    return null;
  }

  // 개념원리 벤더 (v1.2 · Phase 2.2 파일럿 3 · 20문 재판정 실측 기반)
  if (pub === '개념원리' || /개념원리/.test(pub || '')) {
    if (/대표예제|필수예제/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/유제|확인체크/.test(L)) return { tier: 'star_3', confidence: 0.65, alt: ['star_2', 'star_4'] };
    // 연습 STEP 1 vs STEP 2 구분: STEP 2는 통찰형 다수
    if (/연습.*STEP\s*2|STEP\s*2.*연습/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_3'] };
    if (/연습.*STEP\s*1|STEP\s*1.*연습|연습문제/.test(L)) return { tier: 'star_3', confidence: 0.85 };
    if (/실력UP|실력\s*UP|수능형|수능\s*플러스/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5', 'star_3'] };
    return { tier: 'star_3', confidence: 0.50, note: '개념원리 라벨 미매칭 · 수동 검증' };
  }

  // RPM 벤더 (v1.3 · Phase 2.2 파일럿 4 · 표본 15문 실측)
  if (pub === 'RPM' || /RPM/i.test(pub || '')) {
    if (/교과서문제|교과서\s*문제/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_1'] };
    if (/유형익히기/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/시험꼭나오는|시험\s*꼭/.test(L)) return { tier: 'star_3', confidence: 0.60, alt: ['star_2', 'star_4'] };
    if (/서술형주관식|서술형|주관식/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/심화/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_5'] };
    if (/유제|Practice/i.test(L)) return { tier: 'star_3', confidence: 0.60, alt: ['star_2'] };
    if (/필수예제/.test(L)) return { tier: 'star_3', confidence: 0.55, alt: ['star_4'] };
    if (/시험대비/.test(L)) return { tier: 'star_4', confidence: 0.60, alt: ['star_3', 'star_5'] };
    return { tier: 'star_3', confidence: 0.40, note: 'RPM 라벨 미매칭 · 수동 검증' };
  }

  // 고쟁이 벤더 (v1.3 · Phase 2.2 파일럿 5 · STEP 1 번호 위치별 세분화)
  if (pub === '고쟁이' || /고쟁이/.test(pub || '')) {
    // STEP 1 번호 위치별 (v1.3 · v1.4에서 sourceId 추출 로직 수정)
    if (/STEP\s*1/.test(L)) {
      // 문항 번호는 sourceId에서 추출 (예: 고쟁이-CM2-CH01-STEP1-#005 → 5)
      const idNumMatch = sourceId && String(sourceId).match(/#\s*0*(\d+)\s*$/);
      if (idNumMatch) {
        const n = parseInt(idNumMatch[1]);
        if (n <= 6) return { tier: 'star_2', confidence: 0.75, alt: ['star_3'] };
        if (n <= 13) return { tier: 'star_3', confidence: 0.85 };
        return { tier: 'star_4', confidence: 0.70 };  // #14~#18
      }
      return { tier: 'star_3', confidence: 0.65, alt: ['star_4'] };
    }
    if (/STEP\s*2/.test(L)) return { tier: 'star_5', confidence: 0.85 };
    if (/STEP\s*3/.test(L)) return { tier: 'star_5_premium', confidence: 0.85, premium_flag: true };
    return null;
  }

  // 블랙라벨 벤더 (v1.8 · 세션 62 CM2 STEP 2·3 A+ 100% · CM1 STEP 1 B- 40% 하향)
  if (pub === '블랙라벨' || /블랙라벨/.test(pub || '')) {
    if (/STEP\s*1/.test(L)) return { tier: 'star_4', confidence: 0.65, alt: ['star_3', 'star_5'], note: 'v1.8 CM1 STEP 1 정합률 40% 하향' };
    if (/STEP\s*2/.test(L)) return { tier: 'star_5', confidence: 0.90, alt: ['star_5_premium'], premium_hint: 0.34 };
    if (/STEP\s*3/.test(L)) return { tier: 'star_5_premium', confidence: 1.00, premium_flag: true };
    return null;
  }

  // ── v1.8 신규 벤더 15종 (세션 62 flywheel · vendor-label-calibration-v1.12) ──

  // 일품 (A+급 · 91.7% 정합 · CM1+CM2 통합)
  if (pub === '일품' || /일품/.test(pub || '')) {
    if (/개념&?핵심|기본/.test(L)) {
      if (/●○○/.test(L)) return { tier: 'star_1', confidence: 0.85, alt: ['star_2'] };
      if (/●●○/.test(L)) return { tier: 'star_2', confidence: 0.80 };
      if (/●●●/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    }
    if (/고난도|1등급을위한/.test(L)) return { tier: 'star_4', confidence: 0.85, alt: ['star_5'] };
    if (/사고력통합|사고력\s*통합|최고난도|1등급\+|1등급을결정하는/.test(L)) {
      return { tier: 'star_5_premium', confidence: 0.90, premium_flag: true };
    }
    if (/실전마무리/.test(L)) return { tier: 'star_5', confidence: 0.80, alt: ['star_4'] };
    return null;
  }

  // 절대등급 (A- 78% 정합 · CM1+CM2 · 3-tier + Time attack)
  if (pub === '절대등급' || /절대등급/.test(pub || '')) {
    if (/A\s*step|1분/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_3'] };
    if (/B\s*step|3분|서술형|집중\s*연습/.test(L)) return { tier: 'star_4', confidence: 0.75 };
    if (/C\s*step|7분/.test(L)) return { tier: 'star_5', confidence: 0.75, alt: ['star_5_premium'], premium_hint: 0.25 };
    return null;
  }

  // 개념+유형 (B+급 · 80% 정합 · 정리편·연습편 원본 최적)
  if (pub === '개념+유형' || /개념\+유형|개념유형/.test(pub || '')) {
    if (/대표예제|Point/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_3'] };
    if (/유제|01-1|02-1|03-1/.test(L)) return { tier: 'star_2', confidence: 0.70, alt: ['star_3'] };
    if (/유형\s*[0-9]+/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2', 'star_4'] };
    if (/UP|심화/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_3'] };
    return { tier: 'star_3', confidence: 0.50, note: '개념+유형 라벨 미매칭' };
  }

  // 완자 기출PICK (B+급 · 78~82% · 학평 재수록)
  if (pub === '완자' || /완자|완자기출픽/.test(pub || '')) {
    if (/PICK|대표문제/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_1'] };
    if (/서술형/.test(L)) return { tier: 'star_3', confidence: 0.75 };
    if (/기출\+|실전/.test(L)) return { tier: 'star_4', confidence: 0.85, alt: ['star_3', 'star_5'] };
    if (/개념\+|응용/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_4'] };
    if (/학평.*[2-9][0-9]/.test(L)) return { tier: 'star_4', confidence: 0.60, alt: ['star_5'], note: '학평 문번 확인' };
    return null;
  }

  // 풍산자 (A- 85% 정합 · 도전 1등급 premium)
  if (pub === '풍산자' || /풍산자/.test(pub || '')) {
    if (/실.*배지|실\s/.test(L)) return { tier: 'star_1', confidence: 0.80, alt: ['star_2'] };
    if (/중.*배지|중\s/.test(L)) return { tier: 'star_3', confidence: 0.70 };
    if (/상.*배지|상\s/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_4'] };
    if (/도약|고득점/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };
    if (/도전\s*1등급/.test(L)) {
      if (/교육청|기출/.test(L)) return { tier: 'star_5_premium', confidence: 0.85, premium_flag: true };
      return { tier: 'star_5', confidence: 0.75, premium_hint: 0.60 };
    }
    return null;
  }

  // 수학의바이블 (A- 80~82% · 정리편·유형편·연습편 원본 최우수)
  if (pub === '수학의바이블' || pub === '바이블' || /수학의바이블|Bible\s*Focus/.test(pub || pub === 'BIBLE')) {
    if (/Bible\s*Focus|개념표/.test(L)) return { tier: 'star_1', confidence: 0.90 };
    if (/대표예제.*초|초반/.test(L)) return { tier: 'star_2', confidence: 0.80 };
    if (/대표예제.*중|중반/.test(L)) return { tier: 'star_3', confidence: 0.80 };
    if (/대표예제.*후|후반/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/한번|표현|실력\s*더하기|개념\s*CHECK/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/STEP\s*1/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_3', 'star_4'] };
    if (/STEP\s*2/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/challenge/i.test(L)) return { tier: 'star_5', confidence: 0.85, alt: ['star_4'] };
    return null;
  }

  // 수학의 신 (A급 · STEP 3 A+ 100% 정합 · premium 밀도 50%)
  if (pub === '수학의신' || /수학의\s*신/.test(pub || '')) {
    if (/STEP\s*1|핵심/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/STEP\s*2|고난도/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/STEP\s*3|최고난도/.test(L)) return { tier: 'star_5_premium', confidence: 0.90, premium_flag: true, premium_hint: 0.85 };
    if (/단원마스터|기출\s*변형/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_5'], note: '학평 문번 확인' };
    if (/idea|아이디어/.test(L)) return { tier: 'star_4', confidence: 0.65, alt: ['star_5'] };
    return null;
  }

  // EBS 올림포스 고난도 (A+급 92% · 4-band · band 4 100% premium)
  if (pub === 'EBS-올림포스-고난도' || /올림포스\s*고난도/.test(pub || '')) {
    if (/band\s*1|내신\s*빈출/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/band\s*2|내신\s*고득점/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };
    if (/band\s*3|변별력.*1등급/.test(L)) return { tier: 'star_5', confidence: 0.85, premium_hint: 0.15 };
    if (/band\s*4|상위\s*1%/.test(L)) return { tier: 'star_5_premium', confidence: 0.95, premium_flag: true };
    if (/신유형/.test(L)) return { tier: 'star_5', confidence: 0.75, alt: ['star_5_premium'] };
    return null;
  }

  // 마플교과서 (A- 74% · 정리편 원본 최적 · premium 부재)
  if (pub === '마플교과서' || /마플\s*교과서/.test(pub || '')) {
    if (/확인유제|기본/.test(L)) return { tier: 'star_1', confidence: 0.85, alt: ['star_2'] };
    if (/개념익힘|대표예제/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_2'] };
    if (/변형문제/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/발전문제/.test(L)) return { tier: 'star_3', confidence: 0.65, alt: ['star_4'] };
    if (/마플특강|심화/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_3'] };
    return null;
  }

  // 라이트쎈 (B+ 73~74% · CM1·CM2 · 쎈 심화 대비 C단계 배제)
  if (pub === '라이트쎈' || /라이트쎈/.test(pub || '')) {
    if (/A\s*기본|Master.*기본/.test(L)) return { tier: 'star_1', confidence: 0.85, alt: ['star_2'] };
    if (/B\s*대표|대표문제/.test(L)) return { tier: 'star_3', confidence: 0.70 };
    if (/☆(?!☆)|별\s*1/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/☆☆(?!☆)|별\s*2/.test(L)) return { tier: 'star_4', confidence: 0.65, alt: ['star_3'] };
    if (/☆☆☆|별\s*3|집중공략/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/실전.*서술형|서술형/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_4'] };
    if (/평가원.*기출|수능.*기출|도전\s*배지/.test(L)) return { tier: 'star_4', confidence: 1.00, note: 'CM2만 · 라이트쎈 CM2 신규 라벨' };
    return null;
  }

  // 1등급마스터 (A+급 100% · STEP 3·1등급++ premium 100% · CM1 시험지 정점 2순위)
  if (pub === '1등급마스터' || pub === '1등급MASTER' || /1등급\s*마스터|1등급\s*MASTER/.test(pub || '')) {
    if (/STEP\s*1|개념/.test(L)) return null;  // 문제 없음
    if (/STEP\s*2.*최다빈출|최다빈출/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/STEP\s*2.*모의고사|모의\s*변형/.test(L)) return { tier: 'star_4', confidence: 0.80, alt: ['star_5'] };
    if (/STEP\s*2.*특목|특목고/.test(L)) return { tier: 'star_5', confidence: 0.75 };
    if (/STEP\s*2/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/STEP\s*3.*1등급\+\+|1등급\+\+/.test(L)) return { tier: 'star_5_premium', confidence: 1.00, premium_flag: true };
    if (/STEP\s*3.*고난도|고난도\s*마스터/.test(L)) return { tier: 'star_5', confidence: 0.85, alt: ['star_5_premium'], premium_hint: 0.30 };
    if (/Final|학교시험\s*예상/.test(L)) {
      const pt = String(L).match(/(\d+)\s*점/);
      if (pt) {
        const p = parseInt(pt[1]);
        if (p >= 5) return { tier: 'star_5', confidence: 0.80 };
        return { tier: 'star_4', confidence: 0.75 };
      }
      return { tier: 'star_4', confidence: 0.70 };
    }
    return null;
  }

  // 플래티넘 (A+급 · 전국 고난도 내신 기출 · CM1 시험지 정점 2순위)
  if (pub === '플래티넘' || /플래티넘/.test(pub || '')) {
    if (/STEP\s*1|빈출\s*유형/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/STEP\s*2/.test(L)) return { tier: 'star_4', confidence: 0.80, premium_hint: 0.15 };
    if (/STEP\s*3/.test(L)) return { tier: 'star_5_premium', confidence: 0.90, premium_flag: true, premium_hint: 0.55 };
    if (/부록.*모의고사|중간|기말/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_5'], note: '문번 위치별 재분류' };
    return null;
  }

  // 일등급수학 (A급 · 상위 1% 도전 · 5-Level · 별점 없음 · 유형 대표성 축)
  if (pub === '일등급수학' || /일등급\s*수학/.test(pub || '')) {
    if (/개념/.test(L)) return null;
    if (/핵심유형/.test(L)) return { tier: 'star_2', confidence: 0.70, alt: ['star_3'] };
    if (/실전훈련|▶▶(?!▶)/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/서술형/.test(L)) return { tier: 'star_4', confidence: 0.75 };
    if (/고난도|▶▶▶/.test(L)) return { tier: 'star_5', confidence: 0.85, alt: ['star_5_premium'], premium_hint: 0.20 };
    return null;
  }

  // 일등급만들기 (A급 · STEP 2·3 100% 정합 · CM1 시험지 정점 3순위)
  if (pub === '일등급만들기' || /일등급\s*만들기/.test(pub || '')) {
    if (/STEP\s*1|필수\s*유형/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_2'] };
    if (/STEP\s*2|1등급\s*실력\s*완성/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_4'] };
    if (/STEP\s*3.*교육청|교육청\s*기출/.test(L)) return { tier: 'star_5_premium', confidence: 0.90, premium_flag: true, premium_hint: 0.60 };
    if (/STEP\s*3|최고난도/.test(L)) return { tier: 'star_5', confidence: 0.85 };
    return null;
  }

  // 유형만렙 (B급 · CM1 · 유형편 원본 pool)
  if (pub === '유형만렙' || /유형만렙/.test(pub || '')) {
    if (/A\s*개념\s*확인/.test(L)) return { tier: 'star_1', confidence: 0.85 };
    if (/B\s*유형\s*완성.*대표/.test(L)) return { tier: 'star_3', confidence: 0.60, alt: ['star_2'] };
    if (/B\s*유형\s*완성.*하|하\s/.test(L)) return { tier: 'star_2', confidence: 0.60, alt: ['star_3'] };
    if (/B\s*유형\s*완성.*중|중\s/.test(L)) return { tier: 'star_3', confidence: 0.65 };
    if (/B\s*유형\s*완성.*상|상\s/.test(L)) return { tier: 'star_3', confidence: 0.65, alt: ['star_4'] };
    if (/AB\s*유형\s*점검/.test(L)) return { tier: 'star_3', confidence: 0.60, alt: ['star_2', 'star_4'] };
    if (/C\s*실력\s*향상|학평기출/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };
    return null;
  }

  // 유형ZIP (B+ 76% · CM1 · 유형편 A- 급)
  if (pub === '유형ZIP' || /유형ZIP/.test(pub || '')) {
    if (/L1|개념\s*완성/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_1'] };
    if (/L2|유형\s*완성/.test(L)) return { tier: 'star_3', confidence: 0.70 };
    if (/L3|학교\s*시험\s*대비|서술형\s*ZIP/.test(L)) return { tier: 'star_4', confidence: 0.75 };
    if (/L4|1등급.*핵심\s*기출/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };
    if (/L5|도전\s*1\s*등급/.test(L)) return { tier: 'star_5', confidence: 0.85, alt: ['star_5_premium'], premium_hint: 0.10 };
    return null;
  }

  // 짱중요 (B+ 78% · CM1 · 내신 실전)
  if (pub === '짱중요' || /짱중요/.test(pub || '')) {
    if (/다지기|기본/.test(L)) return { tier: 'star_2', confidence: 0.85, alt: ['star_1'] };
    if (/엿보기|기출/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/점검하기/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_4'] };
    if (/예상문제|실전\s*응용/.test(L)) return { tier: 'star_4', confidence: 0.75, alt: ['star_5'] };
    if (/대비평가|실전\s*대비/.test(L)) return { tier: 'star_4', confidence: 0.80, alt: ['star_5'], premium_hint: 0.15 };
    return null;
  }

  // 아샘파이널 (B급 · 실전 파이널 · 최상 라벨 42% 과대 부여)
  if (pub === '아샘파이널' || /아샘\s*파이널|아샘/.test(pub || '')) {
    if (/하/.test(L) && /3\.3|3\.7|4점/.test(L)) return { tier: 'star_2', confidence: 0.75 };
    if (/중하|중/.test(L) && /4점|6점/.test(L)) return { tier: 'star_3', confidence: 0.70, alt: ['star_4'] };
    if (/중상|상(?!최)/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_3', 'star_5'] };
    if (/최상.*8점/.test(L)) return { tier: 'star_5', confidence: 0.75, alt: ['star_5_premium'], premium_hint: 0.25, note: '최상 라벨 42% 과대 부여 · 실측 검증 필요' };
    if (/최상/.test(L)) return { tier: 'star_4', confidence: 0.60, alt: ['star_5'], note: '최상 라벨 과대 부여 신호' };
    return null;
  }

  // 완쏠 유형입문 (B급 · 명시 라벨 없음 · 위치 heuristic 필요)
  if (pub === '완쏠' || /완쏠/.test(pub || '')) {
    // PART 1 vs PART 2 + 위치 heuristic
    if (/PART\s*1.*대표|대표문제/.test(L)) return { tier: 'star_2', confidence: 0.70, alt: ['star_1'] };
    if (/PART\s*1.*유제.*초|유제\s*01|유제\s*02/.test(L)) return { tier: 'star_1', confidence: 0.75 };
    if (/PART\s*1.*유제.*후|유제\s*0[5-9]/.test(L)) return { tier: 'star_2', confidence: 0.65, alt: ['star_3'] };
    if (/PART\s*1.*실전.*전반/.test(L)) return { tier: 'star_2', confidence: 0.70 };
    if (/PART\s*2|학교\s*시험\s*실전/.test(L)) return { tier: 'star_3', confidence: 0.65, alt: ['star_4'] };
    return null;
  }

  // 바이블 유형온 (A- 80% · CM1 · 유형편 · 개념ON 세트)
  if (pub === '바이블유형온' || pub === '바이블유형ON' || /바이블\s*유형[온ON]/.test(pub || '')) {
    if (/Part\s*A.*하|하\s/.test(L)) return { tier: 'star_2', confidence: 0.75, alt: ['star_1'] };
    if (/Part\s*A.*중|중\s/.test(L)) return { tier: 'star_3', confidence: 0.75 };
    if (/Part\s*A.*상|상\s/.test(L)) return { tier: 'star_4', confidence: 0.70, alt: ['star_3'] };
    if (/Part\s*B.*서술형/.test(L)) return { tier: 'star_3', confidence: 0.75 };
    if (/Part\s*B|내신\s*종합/.test(L)) return { tier: 'star_3', confidence: 0.75, alt: ['star_4'] };
    if (/Part\s*C|수능\s*변별력|기출\s*변형/.test(L)) return { tier: 'star_5', confidence: 0.85, alt: ['star_4'], note: 'A급 등재 후보' };
    if (/유사문제|2권/.test(L)) return { tier: 'star_3', confidence: 0.70 };
    return null;
  }

  // 마더텅 (A- 85% · CM1 학평 재수록 · CM1 침투 7건 심각)
  if (pub === '마더텅' || /마더텅/.test(pub || '')) {
    if (/★☆☆☆/.test(L)) return { tier: 'star_2', confidence: 0.80 };
    if (/★★☆☆/.test(L)) return { tier: 'star_3', confidence: 0.85 };
    if (/★★★☆/.test(L)) return { tier: 'star_4', confidence: 0.85 };
    if (/★★★★/.test(L)) return { tier: 'star_5', confidence: 0.75, alt: ['star_5_premium'], premium_hint: 0.20, note: '최고난도 88문 균일 라벨 · 배점 우선 회귀 권장' };
    if (/기본개념/.test(L)) return { tier: 'star_2', confidence: 0.85 };
    if (/유형정복/.test(L)) return { tier: 'star_3', confidence: 0.75 };
    if (/서술형/.test(L)) return { tier: 'star_4', confidence: 0.75 };
    if (/최고난도/.test(L)) return { tier: 'star_5', confidence: 0.75, alt: ['star_5_premium'] };
    if (/시험대비모의고사/.test(L)) return { tier: 'star_4', confidence: 0.65, alt: ['star_5'] };
    return null;
  }

  return null;
}

// v1.8 신규: 매쓰플랫 정답률 회귀 (편차 0.0 완벽 정합)
// 78%→★1 · 73%→★2 · 59%→★3 · 56%→★4 · 46%→★5 · 44%→premium
function classifyByMathflatRate(rate) {
  const r = parseFloat(rate);
  if (isNaN(r)) return null;
  const pct = r > 1 ? r : r * 100;  // 0.78 or 78 모두 지원
  if (pct >= 76) return { tier: 'star_1', confidence: 0.90, source: 'mathflat' };
  if (pct >= 71) return { tier: 'star_2', confidence: 0.90, source: 'mathflat' };
  if (pct >= 57) return { tier: 'star_3', confidence: 0.90, source: 'mathflat' };
  if (pct >= 54) return { tier: 'star_4', confidence: 0.90, source: 'mathflat' };
  if (pct >= 45) return { tier: 'star_5', confidence: 0.90, source: 'mathflat' };
  return { tier: 'star_5_premium', confidence: 0.90, source: 'mathflat', premium_flag: true };
}

// frontmatter에서 publisher·sub_unit 자동 감지
function detectPublisherAndSubUnit(md) {
  const fm = md.match(/^---\n([\s\S]+?)\n---/);
  if (!fm) return { pub: null, sub: null };
  const body = fm[1];
  let pub = null, sub = null;
  const nameM = body.match(/name:\s*([^\n]+)/);
  if (nameM) {
    const name = nameM[1].trim();
    // 순서 중요: 더 구체적인 매칭 우선 (라이트쎈이 쎈보다 먼저 · 마플교과서가 마플시너지보다 먼저)
    if (/라이트쎈/.test(name)) pub = '라이트쎈';
    else if (/마플교과서|마플\s*교과서/.test(name)) pub = '마플교과서';
    else if (/마플시너지|mapl/i.test(name)) pub = '마플시너지';
    else if (/쎈|ssen/i.test(name)) pub = '쎈';
    else if (/개념\+유형|개념유형/.test(name)) pub = '개념+유형';
    else if (/개념원리/.test(name)) pub = '개념원리';
    else if (/수학의바이블/.test(name)) pub = '수학의바이블';
    else if (/바이블\s*유형[온ON]|바이블유형/.test(name)) pub = '바이블유형온';
    else if (/RPM/i.test(name)) pub = 'RPM';
    else if (/고쟁이/.test(name)) pub = '고쟁이';
    else if (/블랙라벨/.test(name)) pub = '블랙라벨';
    else if (/마더텅.*미니모의|마더텅미니모의/.test(name)) pub = '마더텅';
    else if (/마더텅/.test(name)) pub = '마더텅';
    else if (/EBS.*올림포스.*고난도|올림포스\s*고난도/.test(name)) pub = 'EBS-올림포스-고난도';
    else if (/EBS|올림포스/.test(name)) pub = 'EBS';
    // v1.8 신규 벤더 15종
    else if (/1등급마스터|1등급MASTER/i.test(name)) pub = '1등급마스터';
    else if (/일등급만들기/.test(name)) pub = '일등급만들기';
    else if (/일등급수학/.test(name)) pub = '일등급수학';
    else if (/일품/.test(name)) pub = '일품';
    else if (/절대등급/.test(name)) pub = '절대등급';
    else if (/플래티넘/.test(name)) pub = '플래티넘';
    else if (/수학의신|수학의\s*신/.test(name)) pub = '수학의신';
    else if (/풍산자/.test(name)) pub = '풍산자';
    else if (/유형만렙/.test(name)) pub = '유형만렙';
    else if (/유형ZIP/.test(name)) pub = '유형ZIP';
    else if (/짱중요/.test(name)) pub = '짱중요';
    else if (/아샘\s*파이널|아샘파이널/.test(name)) pub = '아샘파이널';
    else if (/완자기출픽|완자/.test(name)) pub = '완자';
    else if (/완쏠/.test(name)) pub = '완쏠';
  }
  const subM = body.match(/sub_unit:\s*([^\n]+)/) || body.match(/section:\s*([^\n]+)/);
  if (subM) sub = subM[1].trim().replace(/^["']|["']$/g, '');
  return { pub, sub };
}

const md = await readFile(file, 'utf-8');
const lines = md.split(/\r?\n/);

// v1.1: publisher·sub_unit 자동 감지 (프론트매터)
const { pub: detectedPub, sub: detectedSub } = detectPublisherAndSubUnit(md);
const activePub = publisher || detectedPub;
const activeSub = subUnit || detectedSub;

// 각 `- source:` 또는 `- id:` 블록을 찾아 필드 스캔 (v1.1: id 필드도 인식)
const items = [];
let cur = null;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^-\s*(?:source|id):\s*(.+?)\s*$/);
  if (m) {
    if (cur) items.push(cur);
    cur = { source: m[1].trim(), startLine: i, tierLineIdx: -1, fields: {} };
  } else if (cur) {
    const kv = line.match(/^\s+([\w_]+):\s*(.+?)\s*$/);
    if (kv) {
      cur.fields[kv[1]] = kv[2].replace(/\s*#.*$/, '').trim();
      if (kv[1] === 'tier') cur.tierLineIdx = i;
    }
  }
}
if (cur) items.push(cur);

let updated = 0;
let skipped = 0;
const dist = { star_5_premium: 0, star_5: 0, star_4: 0, star_3: 0, star_2: 0, star_1: 0, 'star_1·2': 0, skipped: 0 };
const conflicts = [];    // vendor 예측 vs 실측 tier 불일치 (v1.1)
const lowConfidence = []; // confidence < 0.7 (v1.1 · 수동 검증 대상)

for (const it of items) {
  let newTier = null;
  let vendorResult = null;
  const rate = it.fields.answer_rate ?? it.fields.correct_rate;
  const num = it.fields.number_in_original ?? it.fields.original_number;
  const pts = it.fields.original_points;
  // v1.3: 벤더별 라벨 필드명 다양성 대응 (고쟁이 _step · 블랙라벨 difficulty · 개념원리 category_type 등)
  const label = it.fields.vendor_label
    ?? it.fields.category_type
    ?? it.fields._step
    ?? it.fields.difficulty
    ?? it.fields.tier_estimated;

  if (mode === 'auto' || mode === 'answer_rate') {
    if (rate !== undefined) newTier = classifyByAnswerRate(rate);
  }
  if (!newTier && (mode === 'auto' || mode === 'number')) {
    if (num !== undefined && pts !== undefined) newTier = classifyByNumber(num, pts);
  }
  if (!newTier && (mode === 'auto' || mode === 'vendor_label')) {
    if (label && activePub) {
      const cleanLabel = label.replace(/^["']|["']$/g, '');
      vendorResult = classifyByVendorLabel(cleanLabel, activePub, activeSub, it.source);
      if (vendorResult) newTier = vendorResult.tier;
    }
  }

  if (!newTier) {
    skipped++;
    dist.skipped++;
    continue;
  }

  const currentTier = it.fields.tier || '';
  if (currentTier && currentTier !== newTier) {
    // v1.1: 벤더 예측 vs 실측 불일치 로깅
    conflicts.push({ id: it.source, current: currentTier, predicted: newTier, confidence: vendorResult?.confidence });
  }
  if (vendorResult && vendorResult.confidence < 0.7) {
    lowConfidence.push({ id: it.source, tier: newTier, confidence: vendorResult.confidence, alt: vendorResult.alt });
  }

  if (currentTier === newTier) {
    dist[newTier] = (dist[newTier] || 0) + 1;
    continue;
  }

  // v1.8: 저신뢰 정정 필터 (--min-confidence 0.7 지정 시 저신뢰 skip)
  if (minConfidence > 0 && vendorResult && vendorResult.confidence < minConfidence) {
    dist[currentTier] = (dist[currentTier] || 0) + 1;  // 현재 tier 유지
    continue;
  }

  // tier 필드가 있으면 갱신, 없으면 skip (수동 추가 필요)
  if (it.tierLineIdx >= 0) {
    const old = lines[it.tierLineIdx];
    const indent = old.match(/^\s*/)[0];
    lines[it.tierLineIdx] = `${indent}tier: ${newTier}`;
    updated++;
  }
  dist[newTier] = (dist[newTier] || 0) + 1;
}

if (!dry && updated > 0) {
  await writeFile(file, lines.join('\n'), 'utf-8');
}

console.log(`\n[star-classify.mjs v1.1] ${basename(file)}`);
if (activePub) console.log(`  publisher (감지/지정): ${activePub}${activeSub ? ' · sub_unit: ' + activeSub : ''}`);
console.log(`  총 항목: ${items.length}`);
console.log(`  갱신: ${updated}${dry ? ' (dry-run, 파일 미수정)' : ''}`);
console.log(`  skip (신호 없음): ${skipped}`);
console.log(`\ntier 분포:`);
for (const k of ['star_5_premium', 'star_5', 'star_4', 'star_3', 'star_2', 'star_1', 'star_1·2', 'skipped']) {
  if (dist[k]) console.log(`  ${k.padEnd(20)}: ${dist[k]}`);
}

if (conflicts.length > 0) {
  console.log(`\n[v1.1 conflict] 벤더 예측 vs 실측 불일치 ${conflicts.length}건 (수동 검토 필요):`);
  for (const c of conflicts.slice(0, 15)) {
    const confStr = c.confidence !== undefined ? ` (신뢰 ${c.confidence})` : '';
    console.log(`  ${c.id.padEnd(40)} 실측=${c.current} → 예측=${c.predicted}${confStr}`);
  }
  if (conflicts.length > 15) console.log(`  ... 외 ${conflicts.length - 15}건`);
}

if (lowConfidence.length > 0) {
  console.log(`\n[v1.1 low-confidence] 신뢰 < 0.7 · 수동 검증 권장 ${lowConfidence.length}건:`);
  for (const l of lowConfidence.slice(0, 10)) {
    const altStr = l.alt?.length > 0 ? ` alt=[${l.alt.join(',')}]` : '';
    console.log(`  ${l.id.padEnd(40)} tier=${l.tier} 신뢰=${l.confidence}${altStr}`);
  }
}
