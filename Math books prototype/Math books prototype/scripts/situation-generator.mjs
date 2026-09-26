#!/usr/bin/env node
/**
 * situation-generator.mjs — 다층 상황부여 매핑 도구 v1.0
 *
 * 목적: 수학 개념 태그가 주어졌을 때 3층 구조(Frame·Object·Math)의
 * 다층 상황 발문 초안을 3~5개 자동 제안.
 *
 * 참고 자료:
 *   - bank/학교기출-다층상황-카탈로그.md (15 패턴)
 *   - bank/외부자료-상황후보-DB.md (22 소스)
 *   - bank/다층상황-매핑-워크플로우.md (본 도구 명세)
 *
 * 사용:
 *   node scripts/situation-generator.mjs --concept "원의 방정식" --star 5
 *   node scripts/situation-generator.mjs --concept "접선" --star 5 --source-prefer B --top 5
 *   node scripts/situation-generator.mjs --concept "함수" --star 5 --used "S001,S002" --format json
 *
 * 인수:
 *   --concept <string>    필수. 수학 개념 키워드
 *   --star <1~5>          기본 5. 목표 별점
 *   --source-prefer <A~F> 기본 auto. 카테고리 강제
 *   --top <N>             기본 3. 상위 후보 수
 *   --used <ID,...>       기본 빈. 제외할 소재 ID
 *   --format <fmt>        기본 markdown. markdown|json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CATALOG_PATH = path.join(ROOT, 'bank', '학교기출-다층상황-카탈로그.md');
const DB_PATH = path.join(ROOT, 'bank', '외부자료-상황후보-DB.md');

// ============================================================
// 1. 인수 파싱
// ============================================================

function parseArgs(argv) {
  const args = { star: 5, sourcePrefer: 'auto', top: 3, used: [], format: 'markdown' };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    const nxt = argv[i + 1];
    switch (a) {
      case '--concept': args.concept = nxt; i++; break;
      case '--star': args.star = parseInt(nxt, 10); i++; break;
      case '--source-prefer': args.sourcePrefer = nxt; i++; break;
      case '--top': args.top = parseInt(nxt, 10); i++; break;
      case '--used': args.used = nxt.split(',').map(s => s.trim()).filter(Boolean); i++; break;
      case '--format': args.format = nxt; i++; break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
    }
  }
  if (!args.concept) {
    console.error('Error: --concept required');
    printHelp();
    process.exit(1);
  }
  return args;
}

function printHelp() {
  console.log(`
situation-generator.mjs — 다층 상황부여 매핑 도구 v1.0

사용:
  node scripts/situation-generator.mjs --concept "원의 방정식" --star 5

인수:
  --concept <string>    필수. 수학 개념 키워드 (예: "원의 방정식", "함수", "명제")
  --star <1~5>          기본 5. 목표 별점
  --source-prefer <A~F> 기본 auto. 카테고리 강제 (A~F)
  --top <N>             기본 3. 상위 후보 수
  --used <ID,...>       기본 빈. 제외할 소재 ID (자기복제 방지)
  --format <fmt>        기본 markdown. markdown|json
  --help                도움말

지원 개념 태그:
  circle_equation, tangent_line, line_equation, symmetry_translation,
  function_graph, function_composition, set, proposition,
  counting, matrix, quadratic
`);
}

// ============================================================
// 2. 개념 태그 정규화
// ============================================================

const CONCEPT_ALIASES = {
  circle_equation: ['원', '원의 방정식', '원방정식', '원 방정식'],
  tangent_line: ['접선', '원의 접선'],
  line_equation: ['직선', '직선의 방정식', '직선방정식'],
  symmetry_translation: ['도형의 이동', '대칭', '평행이동', '평행 이동', '대칭이동', '대칭 이동'],
  function_graph: ['함수', '함수 그래프', '함수의 그래프', '함수그래프'],
  function_composition: ['합성함수', '역함수', '합성 함수', '역 함수'],
  set: ['집합'],
  proposition: ['명제'],
  counting: ['경우의 수', '경우의수', '순열', '조합'],
  matrix: ['행렬'],
  quadratic: ['이차방정식', '이차함수', '이차 방정식', '이차 함수'],
};

const CONCEPT_UNIT = {
  circle_equation: 'CM2-GM',
  tangent_line: 'CM2-GM',
  line_equation: 'CM2-GM',
  symmetry_translation: 'CM2-GM',
  function_graph: 'CM2-FN',
  function_composition: 'CM2-FN',
  set: 'CM2-ST',
  proposition: 'CM2-ST',
  counting: 'CM1-CB',
  matrix: 'CM1-MX',
  quadratic: 'CM1-EQ',
};

function normalizeConcept(input) {
  const trimmed = input.trim();
  for (const [tag, aliases] of Object.entries(CONCEPT_ALIASES)) {
    if (aliases.some(a => trimmed === a || trimmed.includes(a))) return tag;
    if (trimmed === tag) return tag;
  }
  return null;
}

// ============================================================
// 3. 패턴 카탈로그 (하드코딩 요약)
//    - 15 패턴 중 재구성 관점에서 실제 이식 가능한 요소 추출
//    - 실제 문서 파싱은 층별 상세 텍스트 유지, 요약은 코드 내
// ============================================================

const PATTERNS = {
  P01: {
    type: 'A', name: '기계 도구 + 재현 대상 캐릭터',
    reformType: 'A1',
    frame_skeleton: '({도구명})의 정의·원리 소개 — 실물 사진·구조도 포함.',
    object_skeleton: '(구체 대상: 캐릭터/구조체) 좌표평면 위 (원 조합·기하 도형)으로 구성.',
    math_skeleton: '(1) 도구 원리 → 닮음비 / (2) 대응 좌표식 / (3) 방정식·넓이비',
    concepts: ['circle_equation', 'tangent_line', 'symmetry_translation'],
    difficulty: '상',
    star_range: [4, 5],
    sources_hint: ['S001', 'S004', 'S005', 'S011'],
  },
  P02: {
    type: 'B', name: '자연 현상 + 이상화 모델',
    reformType: 'B1',
    frame_skeleton: '({현상명}) 관측 소개 — 사진·현상 서술.',
    object_skeleton: '"현실과 다르나 아래와 같이 가정한다" 3항 모델 박스 + 좌표축 그림 + 정의 박스.',
    math_skeleton: '(1) 원·직선 방정식 / (2) 공통접선 or 교점 / (3) 특정 상태의 중심 좌표',
    concepts: ['circle_equation', 'tangent_line', 'line_equation'],
    difficulty: '중~상',
    star_range: [5, 5],
    sources_hint: ['S002', 'S013', 'S014', 'S022'],
  },
  P03: {
    type: 'C', name: '놀이 활동 + 상태 반복',
    reformType: 'C1',
    frame_skeleton: '("{활동명}") 활동. 두 개의 (주머니·카드) 세팅.',
    object_skeleton: '3단계 활동 규칙: (1) 뽑기 (2) 조건 따라 이동 (3) 되돌리기.',
    math_skeleton: '연달아 2번 진행 후 특정 상태 만족 경우의 수.',
    concepts: ['counting'],
    difficulty: '상',
    star_range: [5, 5],
    sources_hint: [],
  },
  P04: {
    type: 'D', name: '학급·조사 배경',
    reformType: 'D1',
    frame_skeleton: '"A고등학교 1학년 학생 N명을 대상으로 {조사 내용}을 실시한 결과의 일부는 다음과 같다."',
    object_skeleton: '조건 박스 (가)(나) 2항: 선택 학생 수·다중 선택 학생 수.',
    math_skeleton: '세 집합 원소 개수 최댓값·최솟값 → 합.',
    concepts: ['set'],
    difficulty: '하',
    star_range: [3, 4],
    sources_hint: ['S018', 'S021'],
  },
  P05: {
    type: 'D', name: '활동 배경 준비물 점검',
    reformType: 'D1',
    frame_skeleton: '"어느 고등학교 학생 N명이 {활동}을 하려고 하는데, 준비물을 점검해 보니…"',
    object_skeleton: '3가지 사건: 물품 A 미소지·물품 B 미소지·둘 다 소지.',
    math_skeleton: '"둘 다 안 가져온 학생 수" → 여집합·포함배제.',
    concepts: ['set'],
    difficulty: '하',
    star_range: [1, 2],
    sources_hint: [],
  },
  P06: {
    type: 'E', name: '정리 증명 빈칸',
    reformType: 'E1',
    frame_skeleton: '"주어진 명제가 참임을 증명하는 과정이다." + 명제 문장.',
    object_skeleton: '[증명] 프레임 — 그림·기호 정의 + 산술기하평균 등 정리 인용.',
    math_skeleton: '빈칸 (가)(나)(다) 3항 채우기 → 객관식.',
    concepts: ['quadratic', 'proposition'],
    difficulty: '중',
    star_range: [4, 5],
    sources_hint: ['S006', 'S015'],
  },
  P07: {
    type: 'F', name: '12가지 대응 카탈로그',
    reformType: 'F1-대카탈로그',
    frame_skeleton: '"다음은 집합 X에서 집합 Y로의 12가지 대응을 나타낸 것이다."',
    object_skeleton: '12개 그림/식 카탈로그 (4×3 표).',
    math_skeleton: '함수·일대일함수·일대일대응·항등·상수함수 개수 합.',
    concepts: ['function_graph', 'function_composition'],
    difficulty: '상',
    star_range: [3, 4],
    sources_hint: [],
  },
  P08: {
    type: 'F', name: '5명제 이진코딩 답',
    reformType: 'F1',
    frame_skeleton: '"다음은 {단원}의 성질에 대한 명제들이다."',
    object_skeleton: '명제 카탈로그 5개 (ㄱ~ㅁ). 참·거짓 개별 판정.',
    math_skeleton: '$16a_1 + 8a_2 + 4a_3 + 2a_4 + a_5$ 값.',
    concepts: ['function_composition', 'proposition', 'set'],
    difficulty: '중',
    star_range: [3, 4],
    sources_hint: [],
  },
  P09: {
    type: 'F', name: '명제 5보기 참거짓',
    reformType: 'F1-경량',
    frame_skeleton: '"다음은 {단원}에 관련된 내용이다."',
    object_skeleton: '[보기] 5개 (ㄱ~ㅁ). 미묘한 논리 오답 설계.',
    math_skeleton: '옳은 것만 고른 것.',
    concepts: ['set', 'proposition'],
    difficulty: '중',
    star_range: [3, 3],
    sources_hint: [],
  },
  P10: {
    type: 'G', name: '시간표·배정',
    reformType: 'G1',
    frame_skeleton: '"{조직} 1교시·2교시 수업이 모두 배정된 시간표를 만들려고 한다."',
    object_skeleton: '절차 상세: 교사 N명 각각 정확히 K시간 + 반 중복 금지 + 특정 슬롯 고정.',
    math_skeleton: '시간표 경우의 수.',
    concepts: ['counting'],
    difficulty: '중',
    star_range: [3, 4],
    sources_hint: [],
  },
  P11: {
    type: 'G', name: '사다리타기 서술형',
    reformType: 'G1-서술',
    frame_skeleton: '사다리타기 게임 정의 (가로선 배열로 도착표 대응).',
    object_skeleton: '소문항 (2)(3-1)(3-2) 3단 계층: 이전 답이 다음 도구.',
    math_skeleton: '(2) 사다리 개수 / (3-1) 조건 만족 개수 / (3-2) 확장 조건',
    concepts: ['counting'],
    difficulty: '상',
    star_range: [5, 5],
    sources_hint: [],
  },
  P12: {
    type: 'D', name: '색칠(인접 다른 색)',
    reformType: 'D1-시각',
    frame_skeleton: '"그림과 같이 크기가 같은 N개의 정사각형에 자연수가 하나씩 적혀 있다."',
    object_skeleton: '2×4 or 3×3 표 + 규칙 3항: 색 K가지, 한 칸 한 색, 인접 다른 색.',
    math_skeleton: '색칠 경우의 수.',
    concepts: ['counting'],
    difficulty: '중',
    star_range: [4, 4],
    sources_hint: [],
  },
  P13: {
    type: 'F', name: '표+조각 정의 함수 융합',
    reformType: 'F1-표+조각',
    frame_skeleton: '"집합 X = {1, 2, …, 10}" 순수 수학 프레임.',
    object_skeleton: '표 카탈로그 2개 (i·a_i) + 조각 정의 함수 f·g.',
    math_skeleton: '$h = f \\circ g$에서 $h^n = I_X$인 최소 자연수 $n$.',
    concepts: ['function_composition'],
    difficulty: '상',
    star_range: [4, 4],
    sources_hint: [],
  },
  P14: {
    type: 'F', name: '나머지 함수 3보기',
    reformType: 'F1-3보기',
    frame_skeleton: '"나머지로 정의한 f: N → A, g: N → B"',
    object_skeleton: '보기 ㄱ, ㄴ, ㄷ 3항 성질 판정.',
    math_skeleton: '옳은 것 조합.',
    concepts: ['function_graph', 'counting'],
    difficulty: '상',
    star_range: [5, 5],
    sources_hint: [],
  },
  P15: {
    type: '*', name: '서술 논술형 다중 소문항',
    reformType: '*',
    frame_skeleton: '수학적 정의·조건 세팅.',
    object_skeleton: '소문항 (1)(2)(3) 계층 — 이전 답이 다음 도구.',
    math_skeleton: '각 소문항마다 별개 결과, 선형 종속.',
    concepts: ['*'], // 범용
    difficulty: '중',
    star_range: [4, 5],
    sources_hint: [],
  },
};

// ============================================================
// 4. 외부 소스 DB (하드코딩 요약)
// ============================================================

const SOURCES = {
  S001: { cat: 'B', name: '사도기 (Pantograph)', principle: '1630년 크리스토프 샤이너가 발명. 평행사변형 4절 링크(linkage) 구조로 도형을 확대·축소 복사. 원리는 삼각형의 닮음비.', concepts: ['circle_equation', 'symmetry_translation', 'tangent_line'], usage: '미술 학생이 사도기로 원을 확대해 벽화를 그리는 상황 / 펭귄 캐릭터 도안 축소', star: [4, 5] },
  S002: { cat: 'C', name: '개기월식 (Lunar Eclipse)', principle: '태양-지구-달 일직선 배열 시 달이 지구의 그림자(본영)에 진입. 매달 발생하지 않는 것은 궤도 기울기 5° 때문.', concepts: ['circle_equation', 'tangent_line'], usage: '지구 그림자의 원 방정식을 좌표 평면에 나타내고 달 궤도와의 교점 / 월식 지속 시간 계산', star: [4, 5] },
  S003: { cat: 'B', name: '사이클로이드 (Cycloid)', principle: '직선 위로 굴러가는 원(반지름 r) 위 한 점의 궤적. 넓이 3πr². "최단강하곡선(brachistochrone)".', concepts: ['circle_equation', 'symmetry_translation'], usage: '굴러가는 바퀴의 한 점 궤적 / 롤러코스터 트랙 설계', star: [4, 4] },
  S004: { cat: 'B', name: '아스트롤라베 (Astrolabe)', principle: '별의 위치·시간 측정 고대 천문 기구. 입체투영으로 3차원 천구를 2차원 원판에 투영. 히파르코스(BC 150).', concepts: ['circle_equation', 'symmetry_translation'], usage: '고대 항해사가 별의 각도 측정 / 천체 원판 좌표를 평면에 나타내기', star: [4, 5] },
  S005: { cat: 'B', name: '카메라 옵스큐라 (Camera Obscura)', principle: '어두운 방의 작은 구멍으로 빛이 직진해 반대편 벽에 도립상. 이븐 알하이삼이 광학 수학적 기초 정립.', concepts: ['line_equation', 'symmetry_translation', 'quadratic', 'function_graph'], usage: '옵스큐라로 나무 그림자 상을 벽에 맺히게 하고 원본 좌표 계산 / 구멍 크기와 상의 관계', star: [4, 4] },
  S006: { cat: 'F', name: '파르테논 신전과 황금비', principle: 'BC 447 정면 폭·높이 비율 황금비 φ = (1+√5)/2. φ는 x² = x + 1의 양의 해.', concepts: ['quadratic'], usage: '파르테논 정면 폭·높이 황금비 이차방정식 / 근과 계수의 관계', star: [4, 4] },
  S007: { cat: 'C', name: '피보나치 수열과 자연의 나선', principle: '해바라기·솔방울·파인애플의 나선 배열이 피보나치 수(21·34·55). 인접 항 비율 → 황금비 φ.', concepts: ['quadratic'], usage: '해바라기 씨앗 나선 개수 / 솔방울 나선 비율과 황금비', star: [3, 4] },
  S008: { cat: 'F', name: '이슬람 기하학 문양과 펜로스 타일링', principle: '이슬람 예술의 조화·대칭·반복. 알람브라 궁전 타일에 5회 회전 대칭·펜로스 타일링. 로저 펜로스(1974).', concepts: ['symmetry_translation'], usage: '알람브라 타일 문양의 대칭축 좌표평면 표현 / 정십이각형 이슬람 문양 회전 각도', star: [4, 5] },
  S009: { cat: 'F', name: '한국 전통 태극·십장생 문양', principle: '태극 = 회전 대칭(180°) 문양. 4괘 대각선 대칭. 십장생 대칭 배치.', concepts: ['symmetry_translation'], usage: '태극 중심 원점 180° 회전 대칭 확인 / 십장생 도자기 문양 배치 대칭축', star: [3, 4] },
  S010: { cat: 'F', name: 'M.C. 에셔와 테셀레이션', principle: '에셔(1898~1972). 기본 도형 평행·회전·대칭이동으로 단위 개체 생성 후 평면 채움.', concepts: ['symmetry_translation'], usage: '에셔 스타일 도마뱀 문양 평행이동 벡터 / 회전 중심과 회전 각도', star: [4, 5] },
  S011: { cat: 'B', name: '앙부일구 (조선 해시계)', principle: '세종 때 반구형 오목 해시계. 침 끝 그림자가 시반면 궤적. 절기별 궤적선 13개.', concepts: ['circle_equation', 'symmetry_translation'], usage: '앙부일구 침 끝 그림자 하짓날 궤적을 좌표에 표현 / 특정 시각 그림자 만나는 점', star: [4, 5] },
  S012: { cat: 'C', name: '무지개의 42도 원리', principle: '빗방울에서 빛 굴절·반사. 관측자에게 보이는 각도 빨강 42°·보라 40°. 이중 무지개는 51°.', concepts: ['circle_equation', 'line_equation'], usage: '관측자 위치와 무지개 원호 중심 좌표 / 원호 반지름 42°', star: [4, 4] },
  S013: { cat: 'C', name: '케플러의 행성 궤도 (타원)', principle: '행성은 태양을 초점으로 하는 타원 궤도. 티코 브라헤의 화성 관측 자료로 5년간 계산.', concepts: ['circle_equation'], usage: '화성 궤도 원 근사 시 중심과 반지름 / 근일점·원일점 좌표', star: [4, 4] },
  S014: { cat: 'E', name: 'GPS 삼각측량', principle: '3개 GPS 위성으로부터 거리 측정, 세 원(3D는 구)의 교점이 수신기 위치. 4번째 위성으로 시계 오차 보정.', concepts: ['circle_equation', 'line_equation'], usage: '세 위성 좌표와 거리로 수신기 좌표 / 두 위성 거리 같은 자취 = 수직이등분선', star: [4, 5] },
  S015: { cat: 'B', name: '프리즘과 굴절', principle: '삼각기둥 유리로 빛을 굴절·분산. 뉴턴(1666) 백색광 7색 분해. 스넬 법칙.', concepts: ['line_equation', 'quadratic'], usage: '프리즘 단면 삼각형으로 굴절 경로 좌표 / 꼭지각과 굴절각 관계', star: [3, 4] },
  S016: { cat: 'B', name: '태양광 발전 포물선 반사판', principle: '포물선 반사면. 축에 평행한 빛은 초점으로 모임. 파라볼라 안테나·태양열 집열기.', concepts: ['quadratic', 'function_graph'], usage: '포물선 반사판을 이차함수로 표현 초점 좌표 / 태양광 모이는 지점', star: [4, 4] },
  S017: { cat: 'E', name: '로렌츠 곡선과 지니계수', principle: '하위 x% 가구가 y% 소득 차지. 완전 평등 시 y=x. 지니계수 = 대각선-곡선 면적 / 대각선 아래 전체.', concepts: ['function_graph'], usage: '로렌츠 곡선 다각형 근사 대각선 사이 면적 / 지니계수 계산', star: [4, 4] },
  S018: { cat: 'A', name: '2024 수능 국어 비문학', principle: '2024 수능 짝수형 비문학 4개 지문: 독서·선거방송·데이터·한비자. 다층 개념 서술.', concepts: ['function_graph', 'counting'], usage: '데이터 처리 지문 개념 도해 함수식 유도 / 선거 방송 통계 표본 비율', star: [3, 4] },
  S019: { cat: 'A', name: '2025 수능 국어 비문학', principle: '2025 수능: 영상 안정화 기술 / 지식 재산·디지털세 / 열팽창과 액추에이터.', concepts: ['symmetry_translation', 'function_graph'], usage: '카메라 흔들림 좌표 이동 상쇄 / 온도 변화 길이 일차함수', star: [3, 4] },
  S020: { cat: 'D', name: '국립중앙과학관 전시', principle: '약 600건 전시품. 삼각형·사각형·원 기초 도형 캐릭터. 대칭·비례·황금비.', concepts: ['symmetry_translation'], usage: '정육각형 조형물을 정삼각형 6개로 분할 / 캐릭터 대칭축과 회전 중심', star: [3, 4] },
  S021: { cat: 'E', name: '통계청 KOSIS', principle: '가구소득분포·인구·물가·고용 공공데이터. 히스토그램·꺾은선·원그래프.', concepts: ['function_graph', 'counting', 'set'], usage: '가구소득 히스토그램 평균 / 지역별 인구 원그래프 비율', star: [3, 4] },
  S022: { cat: 'E', name: '사이언스타임즈 과학 뉴스', principle: '과기정통부 산하 매체. 천체·우주·기술·환경·에너지. 케플러 궤도·달 탐사·인공위성.', concepts: ['circle_equation'], usage: '인공위성 궤도 원 근사 / 달 탐사선 중력 균형점', star: [3, 4] },
};

// ============================================================
// 5. 개념 → 우선 패턴 매핑
// ============================================================

const CONCEPT_TO_PATTERNS = {
  circle_equation: ['P01', 'P02', 'P14'],
  tangent_line: ['P01', 'P02'],
  line_equation: ['P02', 'P10'],
  symmetry_translation: ['P01', 'P12'],
  function_graph: ['P07', 'P13', 'P14'],
  function_composition: ['P08', 'P13'],
  set: ['P04', 'P05', 'P09'],
  proposition: ['P06', 'P08', 'P09'],
  counting: ['P03', 'P10', 'P11', 'P12'],
  matrix: ['P10'],
  quadratic: ['P06'],
};

// ============================================================
// 6. 후보 생성
// ============================================================

function generateCandidates(conceptTag, star, sourcePrefer, usedIds) {
  const patternIds = CONCEPT_TO_PATTERNS[conceptTag] || [];
  const candidates = [];

  // 개념 매칭 소스 필터
  const conceptSources = Object.entries(SOURCES)
    .filter(([id, s]) => {
      if (usedIds.includes(id)) return false;
      if (sourcePrefer !== 'auto' && s.cat !== sourcePrefer) return false;
      if (!s.concepts.includes(conceptTag)) return false;
      // 별점 범위 오버랩 (관대: star가 소스 star_range +/-1 안이면 OK)
      const [smin, smax] = s.star;
      if (star < smin - 1 || star > smax + 1) return false;
      return true;
    })
    .map(([id, s]) => ({ id, ...s }));

  for (const patternId of patternIds) {
    const pattern = PATTERNS[patternId];
    if (!pattern) continue;
    // 별점 범위 필터
    const [pmin, pmax] = pattern.star_range;
    if (star < pmin || star > pmax) continue;

    // 자체 설계 패턴 (sources_hint 비어있음)
    if (pattern.sources_hint.length === 0) {
      candidates.push(buildCandidate(pattern, null, conceptTag, star));
      continue;
    }

    // 소재 매칭
    const matchedSources = conceptSources.filter(s => pattern.sources_hint.includes(s.id));
    // 매칭 없으면 개념 매칭만이라도 조합
    const sourcesToUse = matchedSources.length > 0 ? matchedSources : conceptSources;

    for (const source of sourcesToUse) {
      candidates.push(buildCandidate(pattern, source, conceptTag, star));
    }
  }

  // 중복 제거·정렬 (매칭 점수: sources_hint 일치 우선)
  const uniqueCandidates = [];
  const seen = new Set();
  for (const c of candidates) {
    const key = `${c.patternId}|${c.sourceId || 'none'}`;
    if (seen.has(key)) continue;
    seen.add(key);
    uniqueCandidates.push(c);
  }

  // 점수 계산 (sources_hint 일치 +5 / 개념 매칭 +3 / 별점 fit +2)
  uniqueCandidates.forEach(c => {
    let score = 0;
    if (c.sourceId && PATTERNS[c.patternId].sources_hint.includes(c.sourceId)) score += 5;
    if (c.sourceId && SOURCES[c.sourceId].concepts.includes(conceptTag)) score += 3;
    const [pmin, pmax] = PATTERNS[c.patternId].star_range;
    if (star >= pmin && star <= pmax) score += 2;
    c.score = score;
  });

  uniqueCandidates.sort((a, b) => b.score - a.score);
  return uniqueCandidates;
}

function buildCandidate(pattern, source, conceptTag, star) {
  const sourceInfo = source ? {
    id: source.id,
    name: source.name,
    principle: source.principle,
    usage: source.usage,
    cat: source.cat,
  } : null;

  // 층 1 (Frame) 초안
  let frame = pattern.frame_skeleton;
  if (sourceInfo) {
    frame = frame.replace('{도구명}', sourceInfo.name)
                 .replace('{현상명}', sourceInfo.name)
                 .replace('{활동명}', sourceInfo.name)
                 .replace('{조사 내용}', '설문')
                 .replace('{활동}', sourceInfo.name)
                 .replace('{조직}', 'N학년 M반')
                 .replace('{단원}', UNIT_KOREAN[CONCEPT_UNIT[conceptTag]] || conceptTag);
    frame += `\n  원리 요약: ${sourceInfo.principle}`;
  } else {
    frame = frame.replace('{단원}', UNIT_KOREAN[CONCEPT_UNIT[conceptTag]] || conceptTag);
  }

  // 층 2 (Object) 초안
  let object = pattern.object_skeleton;
  if (sourceInfo) {
    object += `\n  구체 대상 활용 예: ${sourceInfo.usage}`;
  }

  // 층 3 (Math) 초안
  const math = pattern.math_skeleton
    + `\n  목표 별점: ★ ${star} · 단원: ${CONCEPT_UNIT[conceptTag]}`;

  return {
    patternId: Object.keys(PATTERNS).find(k => PATTERNS[k] === pattern),
    patternName: pattern.name,
    reformType: pattern.reformType,
    frame,
    object,
    math,
    sourceId: sourceInfo?.id,
    sourceName: sourceInfo?.name,
    difficulty: pattern.difficulty,
    conceptTag,
    star,
  };
}

const UNIT_KOREAN = {
  'CM2-GM': '도형의 방정식',
  'CM2-ST': '집합과 명제',
  'CM2-FN': '함수',
  'CM2-RF': '유리·무리함수',
  'CM1-PL': '다항식',
  'CM1-EQ': '방정식과 부등식',
  'CM1-CB': '경우의 수',
  'CM1-MX': '행렬',
};

// ============================================================
// 7. 출력 포맷
// ============================================================

function formatMarkdown(candidates, args, conceptTag) {
  const lines = [];
  lines.push(`# 다층 상황부여 후보 — ${args.concept} (★ ${args.star})`);
  lines.push('');
  lines.push(`- **개념 태그**: ${conceptTag}`);
  lines.push(`- **단원**: ${CONCEPT_UNIT[conceptTag]}`);
  lines.push(`- **목표 별점**: ${args.star}`);
  lines.push(`- **선호 카테고리**: ${args.sourcePrefer}`);
  lines.push(`- **제외 소재**: ${args.used.length ? args.used.join(', ') : '(없음)'}`);
  lines.push(`- **생성 후보 수**: ${candidates.length} (상위 ${args.top} 표시)`);
  lines.push('');
  lines.push('---');
  lines.push('');

  const shown = candidates.slice(0, args.top);
  if (shown.length === 0) {
    lines.push('**후보 없음** — 조건을 완화해 재시도 (별점·카테고리·개념 태그 확인).');
    return lines.join('\n');
  }

  shown.forEach((c, i) => {
    lines.push(`## 후보 ${i + 1} — 유형-${c.reformType} (${c.patternName})`);
    lines.push('');
    lines.push(`- **패턴 참조**: ${c.patternId} (카탈로그)`);
    if (c.sourceId) {
      lines.push(`- **참고 소스**: ${c.sourceId} — ${c.sourceName} (외부DB)`);
    } else {
      lines.push(`- **참고 소스**: (자체 설계)`);
    }
    lines.push(`- **재현 난이도**: ${c.difficulty}`);
    lines.push(`- **매칭 점수**: ${c.score}`);
    lines.push('');
    lines.push('### 층 1 (Frame) 초안');
    lines.push('```');
    lines.push(c.frame);
    lines.push('```');
    lines.push('');
    lines.push('### 층 2 (Object) 초안');
    lines.push('```');
    lines.push(c.object);
    lines.push('```');
    lines.push('');
    lines.push('### 층 3 (Math) 초안');
    lines.push('```');
    lines.push(c.math);
    lines.push('```');
    lines.push('');
    lines.push('### 자기복제 위험 점검');
    lines.push(`- 같은 소재(${c.sourceId || '자체 설계'}) 시리즈 내 재사용 이력 확인`);
    lines.push(`- 같은 유형(${c.reformType}) 같은 회차 2슬롯 초과 여부 확인`);
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  lines.push('## 다음 단계');
  lines.push('');
  lines.push('1. 후보 중 1~2개 선정');
  lines.push('2. 소재 원리 조사 (Wikipedia·MathWorld·평가원 지문)');
  lines.push('3. 발문 초안 확정');
  lines.push('4. `bank/다층상황-매핑-워크플로우.md` §4 품질 체크리스트 8항목 통과 확인');
  lines.push('5. `problem-review` → `solution-author` 표준 워크플로우');
  lines.push('');
  return lines.join('\n');
}

function formatJson(candidates, args, conceptTag) {
  return JSON.stringify({
    concept: args.concept,
    conceptTag,
    unit: CONCEPT_UNIT[conceptTag],
    star: args.star,
    sourcePrefer: args.sourcePrefer,
    used: args.used,
    total: candidates.length,
    candidates: candidates.slice(0, args.top),
  }, null, 2);
}

// ============================================================
// 8. 메인
// ============================================================

function main() {
  const args = parseArgs(process.argv);
  const conceptTag = normalizeConcept(args.concept);
  if (!conceptTag) {
    console.error(`Error: 개념 태그 인식 실패 "${args.concept}"`);
    console.error(`지원 태그: ${Object.keys(CONCEPT_ALIASES).join(', ')}`);
    process.exit(1);
  }

  const candidates = generateCandidates(conceptTag, args.star, args.sourcePrefer, args.used);

  if (args.format === 'json') {
    console.log(formatJson(candidates, args, conceptTag));
  } else {
    console.log(formatMarkdown(candidates, args, conceptTag));
  }
}

main();
