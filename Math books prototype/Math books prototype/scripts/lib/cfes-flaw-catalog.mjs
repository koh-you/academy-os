// cfes-flaw-catalog.mjs — CFES Layer C · F1~F10 실패-원인 카탈로그 SSOT (분류 시그니처)
// 2026-07-29 세션 103 신설 (기획안 v1.2 §3.3 Layer C · §4 F1~F10 · §5.3)
//
// 역할:
//   flaw-injection-generator.mjs 의 FLAW_CATALOG (name·expected·hint) 을 계승·미러하되,
//   Layer C(회고 학습)가 검수 실패 리포트를 F1~F10 으로 자동 분류하는 데 필요한
//   "검출 시그니처(review report 문구/패턴)" · "대표 사례" · "프롬프트 강화 방향" 을 추가한다.
//
//   이 필드들은 어디에도 없던 신규 정의이므로 여기가 단일 출처(SSOT)다.
//   - bank/실패-원인-카탈로그-v1.md (사람용 문서)  → 본 lib 을 미러
//   - scripts/retrospective-learner.mjs (분류기)   → 본 lib 을 import
//   - scripts/prompt-diff-suggest.mjs (강화 제안)  → 본 lib 을 import
//
//   name·expected·hint 는 flaw-injection-generator.mjs 의 FLAW_CATALOG 과 동일 값으로 유지
//   (그 스크립트는 top-level 에서 process.exit 하므로 안전하게 import 불가 → 값 미러링).
//
// 분류 방식:
//   결정론 규칙 기반. LLM 호출 없음. 각 F 의 signatures(부분문자열, 소문자 비교)를
//   검수 리포트 텍스트에서 매칭 → 매칭 시그니처 수 = score. score ≥ 1 인 F 를 후보로,
//   score 내림차순으로 "가장 가능성 높은 유형(복수 가능)" 판정.

// ── F1~F10 카탈로그 (v1.2 §4) ──────────────────────────────
// def          : 정의 1줄
// expected     : 결함 주입 시 자동 pipeline 기대 판정 (flaw-injection-generator 계승)
// hint         : 결함 주입 힌트 (flaw-injection-generator 계승·미러)
// signatures   : 검수 리포트에서 이 유형을 가리키는 문구/패턴 (소문자 부분문자열 매칭)
// example      : 대표 사례 (세션 99·102 실측 우선)
// prompt       : 프롬프트 강화 방향 (해당 F 재발 억제용)
// defaultAgent : 강화 대상 에이전트 (prompt-diff-suggest 기본값)
// sectionHint  : 에이전트 문서에서 강화 문장을 삽입할 섹션 키워드
export const FLAW_CATALOG_C = {
  F1: {
    name: '통찰 얕음',
    expected: 'LOSS',
    hint: '진정 변별 카드 제거 · 절차 조합으로 환원',
    def: '진정한 변별 통찰이 없고 절차·계산의 조합으로 환원되는 문항.',
    signatures: [
      '통찰 얕', '통찰이 얕', '통찰 제거', '통찰 부재', '통찰 없', '변별 부족', '변별력 부족',
      '절차 조합', '절차형', '단순 계산', '기계적', '깊이 부족', '깊이 낮', 'insight_score=0',
      '통찰 실체', '통찰이 진짜',
    ],
    example: 'creation-01-F10 계열: "넓이가 자연수" 이산 조건을 제거해 단순 현 길이 계산으로 환원.',
    prompt: '슬롯 target 통찰 유형이 절차 조합으로 환원되지 않도록, 출제 후 "이 문항의 변별 카드를 한 문장으로 서술" 자기점검을 의무화하고 insight_score=0 이면 ★ 4 천장·★ 5 불가 규칙을 재확인시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '통찰',
  },
  F2: {
    name: '자연어 부자연',
    expected: 'PENDING',
    hint: '발문을 직역체·번역투로 치환',
    def: '발문 한국어가 번역투·직역체로 부자연스러운 문항.',
    signatures: [
      '부자연', '번역투', '직역', '어색', '발문 어투', '발문 한국어', '한국어 부자연',
      '문장이 어색', '자연스럽지', '어투', '표현이 어색',
    ],
    example: 'creation-05-F2 계열: 발문을 직역체로 치환해 한국어 어투가 부자연스러워짐.',
    prompt: '발문 확정 전 "고1 학생이 소리 내어 읽었을 때 자연스러운가" 게이트를 추가하고, 번역투·직역체 금지 어구 사전(bank/발문-금지-워딩.md)을 재대조시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '발문',
  },
  F3: {
    name: '자기복제',
    expected: 'LOSS',
    hint: '원본 anchor와 구조 시그니처·통찰 카드 일치',
    def: '원본 anchor 와 구조 시그니처·주 통찰 카드가 일치하는 자기복제 문항.',
    signatures: [
      '자기복제', '복제', '시그니처 일치', '구조 일치', '앵커와 동일', 'anchor와 동일',
      '중복 구조', '동일 구조', '카드 일치', '자기 복제',
    ],
    example: '자기복제-기준-v2.md: 입력·결과·자유도 3원조 + 주 통찰 카드 ≥ 3 일치.',
    prompt: 'signature-check.mjs·cross-round-insight-check.mjs 통과를 출제 게이트에 명시하고, 원본 pick 시 최근 회차와의 구조 시그니처 대조를 강제한다.',
    defaultAgent: 'problem-author',
    sectionHint: '시그니처',
  },
  F4: {
    name: '교육과정 침투',
    expected: 'LOSS',
    hint: 'CM 스코프 밖 용어·개념 삽입 (역행렬·극한·벡터 등)',
    def: 'CM1·CM2 스코프 밖 용어·개념(역행렬·극한·벡터·집합 기호 등)이 침투한 문항.',
    signatures: [
      '교육과정 침투', '스코프 침투', '스코프 밖', 'cm 스코프', '상위 과정', '상위과정',
      '역행렬', '극한', '벡터', '외적', '집합 기호', '트레이스', '행렬식', '교과 침투',
      '교육과정 위반', '침투',
    ],
    example: 'creation-01-F4 계열: "벡터 AB·AP 외적의 크기" 삽입으로 CM 스코프 침투.',
    prompt: 'cm1-curriculum-check.mjs hard-violation exit 1 을 출제 게이트 필수로 재확인하고, bank/CM1-교과과정.md RED 키워드 grep 을 출제 직후 자기점검 항목에 추가한다.',
    defaultAgent: 'problem-author',
    sectionHint: '교육과정',
  },
  F5: {
    name: '답 유일성 위반',
    expected: 'LOSS',
    hint: '조건 완화·case 다분기로 답 비유일화 (BT-002형)',
    def: '조건 완화·case 다분기로 답이 유일하지 않은 well-defined 실패 문항.',
    signatures: [
      '유일하지', '비유일', 'well-defined', 'well defined', '답이 두', '답이 여러', '값 두 개',
      '값이 두', 'case 2개', 'case가 2', '다분기', '조건 완화', '대칭중심', '중복 case',
      '해가 여러', '답 유일성',
    ],
    example: 'BT-002(creation-02·F5 seed): 대칭중심 case 2개(a+b = -15/4 또는 -27/4)로 답 비유일.',
    prompt: '출제 후 독립 풀이에서 "모든 분기를 열거해 답이 하나로 닫히는가"를 필수 체크로 두고, 조건 박스(★ 5)로 유일성 제약을 명시하도록 강제한다.',
    defaultAgent: 'problem-author',
    sectionHint: 'well-defined',
  },
  F6: {
    name: '발문 모호',
    expected: 'PENDING',
    hint: '여러 해석 가능하도록 조건 문구 흐리기',
    def: '조건 문구가 흐려 여러 해석이 가능한 발문.',
    signatures: [
      '모호', '중의', '애매', '불명확', '여러 해석', '해석 가능', '해석이 갈', '두 가지 해석',
      '조건 흐림', '발문 불명',
    ],
    example: '조건 문구 완화로 "무엇을 구하는지" 해석이 갈리는 발문.',
    prompt: '발문의 각 조건이 단일 해석만 허용하는지 "재진술 테스트"(발문을 다른 말로 1회 재진술)를 추가하고, 모호 어구를 발문-금지-워딩.md 로 대조시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '발문',
  },
  F7: {
    name: '그림 답 노출',
    expected: 'LOSS',
    hint: '도형에 좌표·개수·반지름 등 답 직접 노출',
    def: '도형·그림에 좌표·개수·반지름 등 답을 직접 노출한 문항.',
    signatures: [
      '답 노출', '답 유출', '답이 노출', '그림에 답', '도형에 답', '좌표 노출', '반지름 노출',
      '개수 노출', '답 leak', 'leakage', '정답 노출',
    ],
    example: 'feedback_figure_answer_leakage_axis: 그림 라벨이 구할 값을 그대로 드러냄.',
    prompt: 'figure-check.mjs·그림 답 노출 4축 게이트를 그림 포함 문항에 필수화하고, 라벨에 최종 답 값(좌표·반지름·개수)을 표기하지 않도록 재확인시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '그림',
  },
  F8: {
    name: '시각적 부실',
    expected: 'PENDING',
    hint: 'TikZ 라벨 겹침·프레임 미채움',
    def: 'TikZ 라벨 겹침·프레임 미채움 등 그림 시각 품질이 부실한 문항.',
    signatures: [
      '라벨 겹침', '겹침', '프레임 미채움', '프레임 채움', '그림 품질', '시각 품질', '시각적 부실',
      '라벨 배치', 'tikz', '그림 부실', '축 프레임',
    ],
    example: 'feedback_pdf_label_overlap_check: 라벨이 서로 겹치거나 좌표 프레임이 비어 보임.',
    prompt: '그림 5-step 프로토콜과 pdf-label-overlap 점검을 그림 포함 슬롯에 필수화하고, 라벨 최소 이동·프레임 채움 규약을 재확인시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '그림',
  },
  F9: {
    name: '조판 결함',
    expected: 'PENDING',
    hint: 'Overfull hbox 유발 (긴 인라인 수식)',
    def: 'Overfull/Underfull hbox·긴 인라인 수식 등 조판 결함 문항.',
    signatures: [
      'overfull', 'underfull', 'hbox', '넘침', '조판 결함', '조판 오류', '줄바꿈', '인라인 수식',
      '박스 넘침', '조판', 'badbox',
    ],
    example: 'creation-05-F9 계열: 긴 인라인 수식으로 Overfull hbox 유발.',
    prompt: 'overfull-check.mjs·choices-width-check.mjs 를 빌드 전 필수로 두고, 긴 인라인 수식(등호/부등호 2개↑)은 디스플레이 분리 규약을 재확인시킨다.',
    defaultAgent: 'problem-author',
    sectionHint: '조판',
  },
  F10: {
    name: '벤더 라벨 오해',
    expected: 'LOSS',
    hint: '난이도를 원본 대비 하향 (계산만·통찰 제거)',
    def: '원본 대비 난이도를 하향(통찰 제거·계산만)해 벤더 라벨과 실제가 어긋난 문항.',
    signatures: [
      '난이도 하향', '난이도가 하향', '벤더 라벨', '라벨 오해', '별점 하향', '★ 하향',
      '계산만', '난이도 불일치', '난이도 과대', '라벨 불일치', '하향',
    ],
    example: 'creation-01-F10(seed): 이산 조건 제거로 원본 대비 난이도 하향 → 라벨 과대.',
    prompt: 'vendor-label-calibration 회귀로 산정 ★ 과 원본 라벨의 정합을 출제 후 재대조하고, 원본 대비 통찰 축소가 없는지 anchor 2문 비교를 강제한다.',
    defaultAgent: 'problem-author',
    sectionHint: '난이도',
  },
};

export const FLAW_CODES = Object.keys(FLAW_CATALOG_C);

// 검수 리포트 텍스트 → F유형별 매칭 시그니처.
// 반환 : { F1: ['통찰 얕','절차 조합'], F5: [...], ... }  (score ≥ 1 인 F 만)
export function matchSignatures(reviewText) {
  const hay = String(reviewText || '').toLowerCase();
  const out = {};
  for (const [code, c] of Object.entries(FLAW_CATALOG_C)) {
    const matched = [];
    for (const sig of c.signatures) {
      if (hay.includes(sig.toLowerCase())) matched.push(sig);
    }
    if (matched.length) out[code] = matched;
  }
  return out;
}

// 매칭 결과 → score 내림차순 후보 리스트.
// 반환 : [{ flaw, name, score, matched: [...] }]  (동점은 F 코드 순)
export function classify(reviewText) {
  const m = matchSignatures(reviewText);
  return Object.entries(m)
    .map(([flaw, matched]) => ({
      flaw,
      name: FLAW_CATALOG_C[flaw].name,
      score: matched.length,
      matched,
    }))
    .sort((a, b) => b.score - a.score || a.flaw.localeCompare(b.flaw, 'en', { numeric: true }));
}
