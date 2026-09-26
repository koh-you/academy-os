---
name: mechanism-데이터-RPM-ALG-01-p1
description: RPM 대수 01 지수(1/3 · 교과서 01-1~01-3 + 유형 01 앞 3문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 01 지수
  unit_code: ALG-01
  part: "1/3"
  extract_range: "7~8쪽 · 0001~0035"
  total_problems: 35
  unit_total: 109
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 01 지수 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 01 지수 단원의 첫 범위(7~8쪽 · 0001~0035 · 35문항)를 다룬다. 교과서 01-1 거듭제곱과 거듭제곱근(9문) · 01-2 거듭제곱근의 성질(5문) · 01-3 지수의 확장(18문)의 교과서 구역 32문과, 유형 01 거듭제곱근의 앞 3문(대표문제 · 난이도 하 · 중)이다. RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 이 범위는 교과서 구역이 대부분이라 ★1 이 33문, ★2 가 2문이고, 단계별 라벨링으로 통찰이 잡힌 문항은 없다(절차형 35). 그림 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 교과서 구역은 소문항이 한 줄짜리라 변형은 대부분 「같은 정의·성질을 다른 수로」이며, ★ 가 오르는 지점은 복소수 단원 결합·문자 일반화·역방향 발문으로 표시했다.

## 문항 데이터

### 교과서 01-1 거듭제곱과 거듭제곱근

```yaml
- id: RPM-ALG-0001
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -8 의 세제곱근 중 실수인 것.
  category: "거듭제곱근의 정의 → 홀수 n·음수 밑 → 실근 하나"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의 — 실수인 n제곱근 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³=-8 의 실근은 -2 하나(홀수 제곱근·음수 밑). 정의 확인 한 단계, 계산 없음. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^3=-8 → 홀수 n 이므로 실근 하나 → -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 완전세제곱수(-27·-125·-1/8)로. 제약: 홀수 제곱근이면 부호와 무관하게 실근 하나. 짝수 제곱근으로 바꾸면 밑을 양수로 두고 답이 ± 둘이 됨을 명시."
    creative: "(1) 실수인 것의 '개수'를 묻기(★1 유지) (2) 0002·0004 와 묶어 n 의 홀짝 × a 의 부호 2×2 표를 채우게 하기(★1~2) (3) -8 의 세제곱근 세 개(복소수 포함)의 합·곱을 묻기 — 복소수 단원 결합 ★2~3 (I-XU d1)."
```

```yaml
- id: RPM-ALG-0002
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    81 의 네제곱근 중 실수인 것.
  category: "거듭제곱근의 정의 → 짝수 n·양수 밑 → 실근 둘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의 — 실수인 n제곱근 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x⁴=81 의 실근은 ±3 둘(짝수 제곱근·양수 밑). 3 만 쓰는 부호 누락이 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^4=81 → 짝수 n·양수 밑이므로 실근 둘 → -3, 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$, $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 완전네제곱수(16·625·1/16·0.0016)로. 제약: 밑은 양수 유지(음수면 답이 '없다'), 완전네제곱수여야 근호 없이 정리됨."
    creative: "(1) 두 실근의 합(0)·곱(-9)을 묻기(★1) (2) 밑을 √a 꼴로 주어 밑 정리 단계를 앞에 붙이기(0033·0034 골조 ★1~2) (3) 네제곱근 넷(±3·±3i)을 모두 나열 — 복소수 결합 ★2."
```

```yaml
- id: RPM-ALG-0003
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0.027 의 세제곱근 중 실수인 것.
  category: "소수 밑 → 완전세제곱 인식 → 실근 하나"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의 — 실수인 n제곱근 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.027=0.3³(=27/1000) 을 알아보면 실근 0.3 하나. 소수점 자리(0.3 과 0.03)만 조심. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.027=(0.3)^3 → 홀수 n 이므로 실근 하나 → 0.3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 0.008(0.2)·0.125(0.5)·0.001(0.1)·-0.064(-0.4) 로. 제약: 소수 세제곱수여야 하며 분수 27/1000 로 바꿔도 같은 골조."
    creative: "(1) 분수 밑 8/27 로 바꿔 분자·분모 따로 세제곱근(★1) (2) 실수인 세제곱근을 10배 한 값 등 후속 계산 한 단계(★1) (3) 소수 밑의 네제곱근(0.0016 → ±0.2)으로 홀짝 함정 추가(★1)."
```

```yaml
- id: RPM-ALG-0004
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -16 의 네제곱근 중 실수인 것.
  category: "거듭제곱근의 정의 → 짝수 n·음수 밑 → 실근 없음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의 — 실수인 n제곱근 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x⁴=-16 은 실근이 없다(짝수 제곱근·음수 밑). -2 나 ±2 로 답하는 부호 오류가 함정. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^4=-16 → 짝수 n·음수 밑 → 실근 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "없다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 -81·-1·-625 로. 제약: 음수·짝수 n 조합 유지. 홀수 n 으로 바꾸면 실근이 하나 생겨 골조가 달라짐."
    creative: "(1) 개수 0 을 함수값으로 세는 0035 골조(★2) (2) x⁴=-16 을 복소수 범위에서 풀어 네 근 구하기 — x⁴+16=(x²+4)²-8x² 인수분해, 복소수·인수분해 결합 ★3 (I-RT d1) (3) ㄱㄴㄷ 보기 속 한 항목으로 편입(0009·0033 골조)."
```

```yaml
- id: RPM-ALG-0005
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∛0.008 의 값.
  category: "거듭제곱근 기호 → 실수인 세제곱근 → 소수 세제곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근 기호의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.008=0.2³ 이므로 0.2. 기호 ⁿ√a 가 '실수인 n제곱근 하나'를 뜻함을 확인하는 정의 문제. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.008=(0.2)^3 → ∛(0.2^3)=0.2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 0.027·0.125·0.001·8/125 로. 제약: 완전세제곱 소수·분수."
    creative: "(1) ∛0.008+∛(-0.027) 처럼 부호 다른 둘의 합(★1) (2) 소수를 분수 8/1000 로 바꾼 뒤 ∛8/∛1000 성질(01-2) 사용(★1) (3) 0.008 의 세제곱근 '개수'를 묻는 정의 대조(★1)."
```

```yaml
- id: RPM-ALG-0006
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⁵√((-3)⁵) 의 값.
  category: "n 홀수일 때 ⁿ√(aⁿ)=a → -3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근 기호의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    홀수 제곱근이므로 ⁿ√(aⁿ)=a 그대로 -3. (-3)⁵=-243 의 다섯제곱근으로 봐도 같다. 부호 하나 확인. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n=5 홀수 → ⁿ√(a^n)=a → -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 (-2)^7·(-5)^3 등 홀수 지수의 음수로. 제약: n 홀수 유지(짝수면 0007 골조로 |a|)."
    creative: "(1) 0007 과 짝지어 홀짝 대비(★1) (2) ⁵√((-3)⁵)+⁴√((-3)⁴) 처럼 두 항을 더해 부호 함정 결합(★1~2) (3) 문자 a<0 으로 일반화해 ⁿ√(aⁿ) 을 a·-a·|a| 중 고르기(★2)."
```

```yaml
- id: RPM-ALG-0007
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⁶√((-1)⁶) 의 값.
  category: "n 짝수일 때 ⁿ√(aⁿ)=|a| → 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근 기호의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (-1)⁶=1 이므로 ⁶√1=1. 짝수 제곱근은 |a| 임을 확인하는 부호 함정 문제 — -1 로 쓰면 오답. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n=6 짝수 → ⁿ√(a^n)=|a| → |-1| → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 (-2)⁴·(-3)²·(-0.5)⁸ 로. 제약: n 짝수·밑 음수 유지(양수 밑이면 함정이 사라짐)."
    creative: "(1) 0006 과 묶어 홀짝 대비(★1) (2) 문자 a<0 일 때 ⁴√(a⁴)+∛(a³) 을 간단히 → |a|+a=0 (★2 · T-부호) (3) ⁶√((-1)⁶) 을 (-1)^{6/6} 로 잘못 쓰는 풀이를 보기로 제시해 오류 찾기(★2)."
```

```yaml
- id: RPM-ALG-0008
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∛(-8/27) 의 값.
  category: "분수 밑 → (-2/3)³ 인식 → -2/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근 기호의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -8/27=(-2/3)³ 이므로 -2/3. 분자·분모를 따로 세제곱근으로 보아도 같다. 부호·분수 하나씩. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-8/27=(-2/3)^3 → 홀수 세제곱근 → -2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 -27/64·-1/125·-0.001 등 완전세제곱 분수로. 제약: 홀수 n 유지, 분자·분모 모두 완전세제곱."
    creative: "(1) ∛(-8/27)×∛(27/8) 처럼 곱 성질(01-2) 한 단계 추가(★1) (2) 네제곱근 분수 밑 ⁴√(16/81) 로 홀짝 대비(★1) (3) 밑을 소수 -0.296… 로 주지 않고 분수로 유지해야 정답이 정리됨을 변형 제약으로 명시."
```

```yaml
- id: RPM-ALG-0009
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    2 이상의 자연수 n 에 대해 양수·음수 a 의 n제곱근 중 실수인 것(부호·개수)에 관한 보기 ㄱ~ㄹ 진위 판별.
  category: "n 홀짝 × a 부호 → 실수인 n제곱근 표 → 보기 대조"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의·개수 ㄱㄴㄷ 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 보기가 n 홀짝·a 부호의 네 칸에 그대로 대응. ㄴ 은 음수 a·n 홀수의 실수 n제곱근이 ⁿ√a(음수) 인데 부호를 뒤집어 -ⁿ√a 로 적은 부호 함정, ㄷ 은 짝수 n·음수 a 의 실근이 0개. 문자 n·a 라 Mₐ 2. 통찰 없음·M_total 6 → 교과서 출발 ★1 유지(같은 골조의 유형 대표문제 0033 은 ★2).
  tier: star_1
  mechanism_primary: "n 홀짝·a 부호 2×2 표 → 각 보기 대조 → ㄱ·ㄹ 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 문장의 n·a 조건 조합을 바꿔 참·거짓 배치를 바꿈(참 2·거짓 2 유지). 제약: '실수인 것' 과 '모든 n제곱근(복소수)' 을 섞지 않음."
    creative: "(1) 보기를 구체 수(27·-16·√4)로 바꾸면 0033 골조 ★2 (2) ㄴ 처럼 기호 -ⁿ√a 의 부호 함정 보기를 늘려 Mₜ 상승(★2) (3) 'n제곱근 중 실수인 것의 개수 = 2, 1, 0' 을 함수로 정의하는 0035 골조."
```

### 교과서 01-2 거듭제곱근의 성질

```yaml
- id: RPM-ALG-0010
  page: 7
  vendor_label: "교과서 01-2 거듭제곱근의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    {∛((-2)⁴)}³ 의 값.
  category: "(ⁿ√a)ⁿ=a → (-2)⁴ → 16"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (ⁿ√a)ⁿ=a 로 근호를 벗기면 (-2)⁴=16. (-2)⁴ 를 -16 으로 잘못 계산하는 부호 함정 하나. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(ⁿ√a)^n=a → (-2)^4 → 16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 {⁴√((-3)⁵)}⁴·{∛(5²)}³ 로. 제약: 바깥 지수 = 근호 차수 유지(다르면 0011 처럼 유리수 지수 정리 골조)."
    creative: "(1) 바깥 지수를 근호 차수와 다르게 → (⁸√16)² 의 0011 골조(★1) (2) 안쪽 밑을 음수 홀수 지수로 바꿔 ∛((-2)³) 부호 유지 함정(★1) (3) 문자 a 로 일반화 {ⁿ√(aᵐ)}ⁿ=aᵐ (★1~2)."
```

```yaml
- id: RPM-ALG-0011
  page: 7
  vendor_label: "교과서 01-2 거듭제곱근의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (⁸√16)² 의 값.
  category: "16=2⁴ 소인수 정리 → (ⁿ√a)ᵐ=ⁿ√(aᵐ) 또는 지수 약분 → 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    16=2⁴ 로 두면 ⁸√(2⁴)=√2, 제곱하여 2. 또는 (ⁿ√a)ᵐ=ⁿ√(aᵐ) 로 ⁸√256=⁸√(2⁸)=2. 어느 길이나 두 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "16=2^4 → ⁸√(2^4)=2^{1/2} → 제곱 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·차수를 (⁶√27)²·(⁹√64)³·(⁴√81)² 로. 제약: 밑이 소수의 거듭제곱이고 m/n 이 정리돼 정수 또는 간단한 근호가 되도록."
    creative: "(1) 제곱을 빼고 ⁸√16 만 물어 답이 √2 로 남게(★1) (2) ⁿᵖ√(aᵐᵖ)=ⁿ√(aᵐ) 성질을 묻는 ㄱㄴㄷ 보기(★2) (3) 두 항의 곱 (⁸√16)²×(⁶√27)² 으로 확장(★1~2)."
```

```yaml
- id: RPM-ALG-0012
  page: 7
  vendor_label: "교과서 01-2 거듭제곱근의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∛4 × ∛16 의 값.
  category: "ⁿ√a·ⁿ√b=ⁿ√(ab) → ∛64 → 4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 차수의 근호끼리 곱해 ∛64=4. 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ⁿ√a·ⁿ√b=ⁿ√(ab) → ∛(4·16)=∛64 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 짝을 ∛2·∛32, ⁴√8·⁴√2, ∛9·∛3 처럼 곱이 완전거듭제곱이 되게. 제약: 두 근호의 차수가 같아야 함(다르면 0014 류 차수 통일 골조)."
    creative: "(1) 세 항 곱 ∛2·∛4·∛8 (★1) (2) 차수를 다르게(√2·∛4) 주어 최소공배 차수 ⁶√ 로 통일하는 단계 추가(★2) (3) 2^{2/3}·2^{4/3} 처럼 유리수 지수로 옮겨 푸는 표현 대조(★1)."
```

```yaml
- id: RPM-ALG-0013
  page: 7
  vendor_label: "교과서 01-2 거듭제곱근의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⁴√80 / ⁴√5 의 값.
  category: "ⁿ√a/ⁿ√b=ⁿ√(a/b) → ⁴√16 → 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 차수의 근호 나눗셈 → ⁴√(80/5)=⁴√16=2. 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ⁿ√a/ⁿ√b=ⁿ√(a/b) → ⁴√(80/5)=⁴√16 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모를 ∛54/∛2, ⁴√405/⁴√5, ⁵√96/⁵√3 로. 제약: 몫이 완전 n제곱수."
    creative: "(1) 분자를 ⁴√80=2⁴√5 로 먼저 정리하는 별도 경로를 제시해 같은 답 확인(★1) (2) 곱·나눗셈 혼합 ∛4·∛16/∛8 (★1) (3) 분모 유리화가 필요한 근호 나눗셈(∛2/∛4 → 1/∛2) 으로 성질의 역이용(★2)."
```

```yaml
- id: RPM-ALG-0014
  page: 7
  vendor_label: "교과서 01-2 거듭제곱근의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∛(√729) × √(√256) 의 값.
  category: "ᵐ√(ⁿ√a)=ᵐⁿ√a → 소인수 거듭제곱 → 3·4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    겹근호를 ⁶√729=⁶√(3⁶)=3, ⁴√256=⁴√(4⁴)=4 로 풀어 곱 12. 항마다 근호 합치기·소인수 거듭제곱 두 단계씩. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "ᵐ√(ⁿ√a)=ᵐⁿ√a → ⁶√(3^6)·⁴√(4^4) → 3·4 → 12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 3⁶·4⁴ 대신 2⁶(64)·5⁴(625)·3⁸ 등 완전거듭제곱으로. 제약: 합친 차수 mn 이 밑의 지수를 나누도록."
    creative: "(1) 안쪽부터 계산(√729=27 → ∛27=3)하는 경로와 근호 합치기 경로를 비교하는 발문(★1) (2) 삼중 겹근호 √(∛(√a)) 로 확장(★2) (3) 문자로 ᵐ√(ⁿ√a)=ⁿ√(ᵐ√a) 를 이용한 ㄱㄴㄷ 참·거짓(★2)."
```

### 교과서 01-3 지수의 확장

```yaml
- id: RPM-ALG-0015
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    3⁰ 의 값.
  category: "a⁰=1 (a≠0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0과 음의 정수 지수의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 a⁰=1. 한 단계, 함정 없음. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a^0=1 (a≠0) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 0 아닌 어떤 수로든. 제약: 밑 0 은 정의되지 않으므로 제외."
    creative: "(1) (-3)⁰ 과 -3⁰ 의 차이를 묻기(★1 · T-표기) (2) 0⁰ 이 왜 정의되지 않는지 보기 진위(★2) (3) a⁰+a^{-1} 꼴로 0017 골조와 결합(★1)."
```

```yaml
- id: RPM-ALG-0016
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (-1/2)⁰ 의 값.
  category: "a⁰=1 — 음수·분수 밑도 같음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0과 음의 정수 지수의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 음수 분수여도 0제곱은 1. 부호·분수에 흔들려 -1 이나 1/2 로 쓰는 오류가 함정. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a^0=1 (a≠0) → 밑의 부호·분수 무관 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 -5·2/7·-0.3 등 0 아닌 어떤 수로든. 제약: 없음(밑 0 제외)."
    creative: "(1) -(1/2)⁰ 와 (-1/2)⁰ 의 차이(★1 · T-표기) (2) (-1/2)⁰×(-1/2)^{-1} 처럼 0018 골조와 결합(★1) (3) '모든 실수 a 에 대해 a⁰=1' 진위(a=0 반례) 보기(★2)."
```

```yaml
- id: RPM-ALG-0017
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (-5)^{-2} 의 값.
  category: "a^{-n}=1/aⁿ → 1/(-5)² → 1/25"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0과 음의 정수 지수의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    음의 정수 지수는 역수의 거듭제곱. (-5)²=25 로 양수. -1/25 로 쓰는 부호 함정 하나. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a^{-n}=1/a^n → 1/(-5)^2 → 1/25"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 (-2)^{-3}(=-1/8)·(-3)^{-4}·4^{-2} 로. 제약: 지수 홀짝에 따라 답 부호가 바뀜을 명시."
    creative: "(1) (-5)^{-2} 와 -5^{-2} 의 차이(★1 · T-표기) (2) (-2)^{-3}+(-2)^{-2} 처럼 홀짝 부호 결합(★1) (3) 2^{-2}+2^{-1}+2⁰+2¹ 합으로 확장(★1)."
```

```yaml
- id: RPM-ALG-0018
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (1/9)^{-2} 의 값.
  category: "분수 밑의 음의 지수 → 역수의 거듭제곱 → 9² → 81"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0과 음의 정수 지수의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/9)^{-2}=9²=81. 역수를 취하는 한 단계. 1/81 로 쓰는 오류가 함정. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1/a)^{-n}=a^n → 9^2 → 81"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$81$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 (1/4)^{-3}·(2/3)^{-2}(=9/4)·(0.1)^{-2} 로. 제약: 분수 밑이면 역수의 거듭제곱이 정수 또는 간단한 분수."
    creative: "(1) (2/3)^{-2} 처럼 분자·분모가 모두 바뀌는 분수 밑(★1) (2) (1/9)^{-2}×3^{-4} 로 밑 통일 결합(0028 골조 ★1) (3) x^{-2}=81 을 만족하는 x 를 역으로 묻기(★1~2)."
```

```yaml
- id: RPM-ALG-0019
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⁴√2 = 2^□ 에서 □ 에 알맞은 수.
  category: "ⁿ√a=a^{1/n}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 유리수 지수로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 ⁿ√a=a^{1/n} → 1/4. 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ⁿ√a=a^{1/n} → 2^{1/4} → 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수를 ⁵√2·⁷√3·√5 로. 제약: 밑 양수."
    creative: "(1) 0020 과 묶어 ⁿ√(aᵐ)=a^{m/n} 으로 확장(★1) (2) ⁴√2×√2 처럼 두 근호를 지수로 바꿔 곱하기(0023 골조 ★1) (3) 2^{1/4} 를 근호로 되돌리는 역방향 빈칸(★1)."
```

```yaml
- id: RPM-ALG-0020
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⁵√(3⁴) = 3^□ 에서 □ 에 알맞은 수.
  category: "ⁿ√(aᵐ)=a^{m/n}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 유리수 지수로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⁿ√(aᵐ)=a^{m/n} → 4/5. 분자·분모 자리를 바꿔 5/4 로 쓰는 오류가 함정. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ⁿ√(a^m)=a^{m/n} → 3^{4/5} → 4/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수·차수를 ∛(5²)·⁴√(7³)·⁶√(2⁴)(→ 2/3 약분) 로. 제약: m/n 약분 여부를 명시."
    creative: "(1) (⁵√3)⁴ 로 순서를 바꿔 같은 값임을 확인(★1) (2) ⁶√(2⁴)=2^{2/3} 처럼 약분이 필요한 경우(★1) (3) 3^{4/5} 와 ⁴√(3⁵) 의 대소 비교로 확장(★2)."
```

```yaml
- id: RPM-ALG-0021
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/∛(2²) = 2^□ 에서 □ 에 알맞은 수.
  category: "ⁿ√(aᵐ)=a^{m/n} → 역수 → 지수 부호 반전"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 유리수 지수로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∛(2²)=2^{2/3}, 역수이므로 2^{-2/3}. 부호를 빠뜨려 2/3 로 쓰는 함정 하나. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∛(2^2)=2^{2/3} → 1/a^x=a^{-x} → -2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수·차수를 1/⁴√(3³)·1/√(5³) 로. 제약: 분모에만 근호, 근호 안 지수는 양수(음수 지수 안쪽은 0022 골조)."
    creative: "(1) 0022 처럼 근호 안 지수를 음수로 두어 이중 부호(★1) (2) ∛4/∛(2⁵) 처럼 분자·분모 모두 근호 → 지수 차(★1) (3) 2^{-2/3} 를 근호 꼴로 되돌리는 역방향(★1)."
```

```yaml
- id: RPM-ALG-0022
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/⁶√(3^{-2}) = 3^□ 에서 □ 에 알맞은 수.
  category: "근호 안 음수 지수 → a^{-2/6} → 역수 → a^{1/3}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 유리수 지수로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⁶√(3^{-2})=3^{-2/6}=3^{-1/3}, 역수이므로 3^{1/3}. 음수 지수와 역수로 부호가 두 번 바뀌고 -2/6 약분까지 — 부호 함정이 집중된 빈칸. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "⁶√(3^{-2})=3^{-2/6}=3^{-1/3} → 역수 → 3^{1/3} → 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수·지수를 1/⁴√(2^{-2})(→ 1/2)·1/∛(5^{-6})(→ 2) 로. 제약: 약분 결과가 정수가 되는 조합도 섞어 '지수가 정수면 근호가 사라짐'을 확인."
    creative: "(1) 분수 지수를 근호로 되돌리는 역방향 빈칸(★1) (2) 3^{1/3}·1/⁶√(3^{-2}) 두 항의 곱으로 0023 골조 결합(★1) (3) 'ⁿ√(a^{-m})=1/ⁿ√(aᵐ)' 성질 진위 보기(★2)."
```

```yaml
- id: RPM-ALG-0023
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (a^{3/4})² × a^{1/4} 를 간단히 하기 (a>0).
  category: "(aᵐ)ⁿ=aᵐⁿ → aᵐ·aⁿ=a^{m+n} → 7/4"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수의 지수법칙 계산(문자식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a^{3/4})²=a^{3/2}, 곱해 지수 3/2+1/4=7/4. 두 단계. 문자식이라 Mₐ 2. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "(a^m)^n=a^{mn} → a^{3/2} → 지수 합 3/2+1/4 → a^{7/4}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a^{\frac{7}{4}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 (a^{2/3})³×a^{1/2}·(a^{1/2})⁴×a^{-1/3} 등으로. 제약: a>0 유지, 지수 합이 기약분수."
    creative: "(1) 답을 근호 ⁴√(a⁷) 로 쓰게 하는 표기 전환(★1) (2) 나눗셈 ÷ 를 섞어 0026 골조(★1) (3) 두 문자 a·b 로 0024 골조(★1)."
```

```yaml
- id: RPM-ALG-0024
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (a³b²)^{1/12} × (a^{1/3}b^{1/4})⁴ 를 간단히 하기 (a>0, b>0).
  category: "(ab)ⁿ 분배 → 문자별 지수 합 → a^{19/12}b^{7/6}"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수의 지수법칙 계산(문자식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수를 각 문자에 분배해 a^{1/4}b^{1/6}·a^{4/3}b, 문자별로 1/4+4/3=19/12, 1/6+1=7/6. 분수 덧셈 두 번·문자 둘이라 교과서 구역에서 계산이 가장 많은 편. 통찰 없음이지만 M_total 7 이라 −1 후보는 아님 → 교과서 출발 ★1. [분류 이슈] 교과서 구역이나 M_total 7 · ★1/★2 경계 — 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "(ab)^n 분배 → a^{1/4}b^{1/6}·a^{4/3}b^1 → 문자별 지수 합 (19/12, 7/6) → a^{19/12}b^{7/6}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a^{\frac{19}{12}}b^{\frac{7}{6}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 조합을 (a²b³)^{1/6}×(a^{1/2}b^{1/3})² 처럼 바꿈. 제약: 문자별 지수 합의 통분 분모가 12 이하, 답이 기약분수 지수, a>0·b>0 유지."
    creative: "(1) 답 지수를 정수로 맞춰(예: a^{1/4}·a^{3/4}) 근호가 사라지게 — 계산 부담 ↓ ★1 (2) 나눗셈 ÷ 와 음수 지수 추가 → Mₜ 2 (★2 후보) (3) 조건 a>0·b>0 을 빼고 짝수 차수 근호를 섞어 절댓값 처리를 요구 → ★2~3 (T-부호 · I-MI d1)."
```

```yaml
- id: RPM-ALG-0025
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (√(a³) × ⁵√a × a^{-1/2})^{1/3} 을 간단히 하기 (a>0).
  category: "근호 → 유리수 지수 → 괄호 안 지수 합 → 바깥 지수 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수의 지수법칙 계산(문자식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(a³)=a^{3/2}, ⁵√a=a^{1/5} 로 바꾼 뒤 괄호 안 지수 3/2+1/5-1/2=6/5, 바깥 1/3 을 곱해 2/5. 근호 두 개를 지수로 옮기고 분수 덧셈·곱셈까지 네댓 단계. 통찰 없음·M_total 7 → 교과서 출발 ★1. [분류 이슈] 0024 와 같이 교과서 구역이나 M_total 7 · ★1/★2 경계 — 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "√(a^3)=a^{3/2}·⁵√a=a^{1/5} → 지수 합 3/2+1/5-1/2=6/5 → ×1/3 → a^{2/5}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a^{\frac{2}{5}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수·지수를 (∛(a²)×⁴√a×a^{-1/4})^{1/2} 등으로. 제약: 괄호 안 지수 합이 바깥 지수와 곱해져 기약분수가 되도록, a>0 유지."
    creative: "(1) 답을 근호 ⁵√(a²) 로 쓰게 하기(★1) (2) 바깥 지수를 음수로 바꿔 부호 함정 추가(★1~2) (3) a 에 수치(예: a=32)를 넣어 값 4 를 묻기 — 0028 류 밑 통일 결합(★2)."
```

```yaml
- id: RPM-ALG-0026
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (a^{-3/4})² × √a ÷ a^{3/4} 를 간단히 하기 (a>0).
  category: "(aᵐ)ⁿ → 곱은 지수 합·나눗셈은 지수 차 → -7/4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수의 지수법칙 계산(문자식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a^{-3/4})²=a^{-3/2}, √a=a^{1/2}, ÷a^{3/4} 는 지수에서 빼기 → -3/2+1/2-3/4=-7/4. 음수 지수와 나눗셈 부호가 함정. 통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "(a^m)^n → a^{-3/2} → ×a^{1/2} ÷ a^{3/4} → 지수 -3/2+1/2-3/4 → a^{-7/4}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a^{-\frac{7}{4}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 (a^{-1/2})³×∛a÷a^{1/6} 등으로. 제약: 나눗셈 항 하나 이상·음수 지수 하나 이상 유지, a>0."
    creative: "(1) 답을 1/⁴√(a⁷) 로 쓰게 하는 표기 전환(★1) (2) 세 항 모두 근호로 주어 지수 변환을 먼저 하게 하기(0025 골조 ★1) (3) a 에 수치를 넣어 값을 묻기(★1)."
```

```yaml
- id: RPM-ALG-0027
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (3^{√4})^{√25} 를 간단히 하기.
  category: "√4=2·√25=5 정리 → (aᵐ)ⁿ=aᵐⁿ → 3^{10}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수의 지수법칙 계산(밑 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수가 근호로 보이지만 √4=2, √25=5 정수. (aᵐ)ⁿ 으로 3^{10}. 정리를 안 하고 3^{√100} 으로 두거나 근호끼리 더해 헤매는 표기 함정 하나. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "√4=2·√25=5 → (a^m)^n=a^{mn} → 3^{10}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3^{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 √9·√16 등 완전제곱수 근호로. 제약: 두 근호가 모두 정수로 정리돼야 이 골조."
    creative: "(1) 한 지수만 무리수(√2)로 남겨 3^{5√2} 답(0029 골조 ★1) (2) (3^{√4})^{√25} 와 3^{√4·√25}=3^{√100} 이 같은 값임을 확인하는 진위(★1) (3) 밑을 문자 a>0 으로(★1)."
```

```yaml
- id: RPM-ALG-0028
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    8^{-√3/6} × 2^{√3/2} 를 간단히 하기.
  category: "밑 통일(8=2³) → 지수 합 0 → 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수의 지수법칙 계산(밑 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    8=2³ 으로 밑을 통일하면 지수 3·(-√3/6)=-√3/2 와 √3/2 가 상쇄돼 2⁰=1. 밑 통일 한 단계 + 부호 정리. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "8=2^3 → 2^{-√3/2}·2^{√3/2} → 지수 합 0 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 27^{-√2/3}×3^{√2}·4^{√5/4}×2^{-√5/2} 처럼 상쇄되게. 제약: 밑이 같은 소수의 거듭제곱, 지수 합이 0(또는 정수)."
    creative: "(1) 지수 합이 0 이 아닌 정수(예: 2)가 되게 → 답 4 (★1) (2) 밑을 두 종류(8·9)로 섞어 상쇄되지 않게 → 0030 골조 (★1~2) (3) 지수 합이 무리수로 남는 0029 골조(★1)."
```

```yaml
- id: RPM-ALG-0029
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    2^{√8} × 4^{√18} ÷ 4^{√8} 를 간단히 하기.
  category: "근호 정리(√8=2√2·√18=3√2) → 밑 통일(4=2²) → 지수 합·차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수의 지수법칙 계산(밑 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √8=2√2, √18=3√2 로 정리하고 4=2² 로 통일하면 지수 2√2+6√2-4√2=4√2. 근호 정리와 밑 통일이 각각 두 번씩이라 단계가 4~5. 통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "√8=2√2·√18=3√2 → 4=2^2 밑 통일 → 지수 2√2+6√2-4√2 → 2^{4√2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2^{4\sqrt{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호를 √12·√27·√48 (√3 계열)로, 밑을 2·4·8 로. 제약: 모든 근호가 같은 √k 의 정수배로 정리되고 밑이 같은 소수의 거듭제곱."
    creative: "(1) 답을 4^{2√2} 로 쓰게 하는 밑 변환(★1) (2) 세 항 지수 합이 0 이 되게 조정(0028 골조 ★1) (3) 밑을 2 와 3 으로 섞어 (ab)^x 통합이 필요한 0030 골조(★1~2)."
```

```yaml
- id: RPM-ALG-0030
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (4^{1/√6} × 3^{√(2/3)})^{√3} 을 간단히 하기.
  category: "바깥 지수 분배 → 지수 유리화(√3/√6=1/√2 · √(2/3)·√3=√2) → 4=2² → 같은 지수의 밑 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수의 지수법칙 계산(밑 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √3 을 분배하면 4^{√3/√6}=4^{1/√2}=2^{2/√2}=2^{√2}, 3^{√(2/3)·√3}=3^{√2}. 같은 지수 √2 를 가진 두 밑을 (ab)^x 로 묶어 6^{√2}. 지수 유리화 두 번과 밑 변환이 이어져 교과서 구역에서 단계가 많은 편. 통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "√3 분배 → 4^{1/√2}=2^{√2}·3^{√2} → 같은 지수 → (2·3)^{√2} → 6^{√2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6^{\sqrt{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 쌍을 (25^{1/√10}×2^{√(2/5)})^{√5}(→ 10^{√2}) 처럼 바꿈. 제약: 분배 후 두 항의 지수가 같은 무리수가 되도록 근호를 맞추고, 제곱수 밑(4·9·25)은 소수로 내려 지수를 정리."
    creative: "(1) 두 항의 지수를 다르게 두어 (ab)^x 통합이 안 되게 하면 답이 2^{√2}·3^{√3} 곱으로 남음(★1) (2) 안쪽에 나눗셈 ÷ 를 넣어 부호 함정 추가(★1~2) (3) 값 6^{√2} 를 주고 안쪽 지수 하나를 미지수로 되묻는 역방향(★2 · I-BW d1)."
```

```yaml
- id: RPM-ALG-0031
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x^{1/2}+y^{1/2})(x^{1/2}-y^{1/2}) 을 간단히 하기 (x>0, y>0).
  category: "합차 공식 (X+Y)(X-Y)=X²-Y² 에 X=x^{1/2}·Y=y^{1/2}"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수와 곱셈 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^{1/2}, y^{1/2} 를 한 덩어리로 보고 합차 공식 → (x^{1/2})²-(y^{1/2})²=x-y. 유리수 지수의 제곱이 지수 곱임을 확인하는 한 단계. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "X=x^{1/2}·Y=y^{1/2} → (X+Y)(X-Y)=X^2-Y^2 → x-y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x-y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 1/3(→ x^{2/3}-y^{2/3})·3/2 로. 제약: 두 항의 지수가 같아야 합차 공식, x>0·y>0 유지."
    creative: "(1) 답 x-y 를 주고 (√x+√y) 로 나눈 몫을 묻는 역방향(유리화 골조 ★1~2) (2) (x^{1/2}+y^{1/2})² 로 완전제곱 공식(★1) (3) 다음 파트의 a^x+a^{-x} 값 계산에서 (a^{x/2}+a^{-x/2})² 전개로 쓰이는 전 단계 — 그쪽으로 옮기면 ★2."
```

```yaml
- id: RPM-ALG-0032
  page: 7
  vendor_label: "교과서 01-3 지수의 확장"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x^{1/3}+y^{1/3})(x^{2/3}-x^{1/3}y^{1/3}+y^{2/3}) 을 간단히 하기 (x>0, y>0).
  category: "세제곱 합 공식 (X+Y)(X²-XY+Y²)=X³+Y³ 에 X=x^{1/3}·Y=y^{1/3}"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수와 곱셈 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    X=x^{1/3}, Y=y^{1/3} 으로 보면 세제곱 합 공식 → x+y. 두 번째 괄호가 X²-XY+Y² 꼴임을 알아보는 것이 전부(단순 치환이라 통찰 아님). M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "X=x^{1/3}·Y=y^{1/3} → (X+Y)(X^2-XY+Y^2)=X^3+Y^3 → x+y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x+y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호를 바꿔 세제곱 차 (x^{1/3}-y^{1/3})(x^{2/3}+x^{1/3}y^{1/3}+y^{2/3})=x-y 로. 제약: 두 번째 괄호의 가운데 항 부호가 공식과 맞아야 함."
    creative: "(1) 두 번째 괄호를 x^{2/3}+y^{2/3} 만 주고 '무엇을 더 곱해야 x+y 가 되는가' 역방향(★2 · I-BW d1) (2) 수치 x=8·y=27 을 넣어 값 35 를 묻기(★1) (3) 다음 파트 a^{3x}+a^{-3x} 를 a^x+a^{-x} 로 나누는 유형 05 골조의 전 단계 — 인수분해 방향으로 뒤집으면 ★2 (I-RT d1)."
```

### 유형 01 거듭제곱근

```yaml
- id: RPM-ALG-0033
  page: 8
  vendor_label: "유형 01 거듭제곱근"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    27·√4·(-2)⁴·√81 의 세제곱근/네제곱근 중 실수인 것(ㄹ 은 네제곱근 전체)에 관한 보기 ㄱ~ㄹ 진위 판별. 5지선다.
  category: "밑 값 정리 → n 홀짝·부호 표 → 보기 대조(ㄹ 은 복소근 포함)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의·개수 ㄱㄴㄷ 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑을 먼저 값으로 정리(√4=2 · (-2)⁴=16 · √81=9)한 뒤 n 홀짝·부호 표로 대조. ㄱ 은 홀수 제곱근에 ± 를 붙인 부호 함정, ㄴ 은 ∛2 가 실수임을 놓치는 함정, ㄹ 은 '실수인' 조건이 없어 x⁴=9 의 복소근 넷(±√3·±√3i)을 모두 세어야 하는 조건·표기 함정(T-표기·T-부호 2종 → Mₜ 2). 통찰 없음·M_total 6 → 유형 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "밑 값 정리(√4=2 · (-2)^4=16 · √81=9) → n 홀짝·부호 표 → ㄹ 은 x^4=9 의 복소근 넷 → ㄷ·ㄹ 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 값(64·√9·(-3)⁴·√16)으로. 제약: 참 2·거짓 2 유지, ㄹ 처럼 '실수인' 조건이 빠진 보기를 하나 넣어 복소근을 세게 할 것, 정답 선택지 번호 재배치."
    creative: "(1) 보기 하나를 'n 을 문자로 둔 일반 진술'로 바꿔 0009 골조와 섞기(★2) (2) '실수인 것의 합·곱'을 묻는 계산형(0034 골조 ★1) (3) ㄹ 을 확장해 네 근의 곱 또는 합을 묻기 — 복소수 단원 결합 ★3 (I-XU d1)."
```

```yaml
- id: RPM-ALG-0034
  page: 8
  vendor_label: "유형 01 거듭제곱근"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -64 의 세제곱근 중 실수인 것을 a, √256 의 네제곱근 중 음의 실수인 것을 b 라 할 때 ab 의 값.
  category: "실수인 n제곱근 각각 구하기(밑 정리 포함) → 곱"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의 — 실수인 n제곱근 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=-4(홀수 제곱근), √256=16 을 먼저 정리해 네제곱근 중 음의 실수 b=-2. 곱 8. 표기(√256 이 밑)와 부호(음의 실수 선택 → 곱은 양) 두 함정. 통찰 없음·M_total 5 → 「하」 출발 ★1~2 에서 −1 후보 → ★1.
  tier: star_1
  mechanism_primary: "a: x^3=-64 → -4 · b: √256=16, x^4=16 의 음의 실근 → -2 → ab=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 -27·-125, √81·√625 등으로. 제약: √ 안은 완전제곱수, 네제곱근 밑은 완전네제곱수(16·81·625), 답이 정수가 되도록."
    creative: "(1) b 를 '양의 실수'로 바꿔 부호 함정 이동(★1) (2) a+b 또는 a/b 로 연산 변경(★1) (3) a·b 를 √(a²)·⁴√(b⁴) 같은 성질 계산(01-2)과 묶어 두 단계(★2)."
```

```yaml
- id: RPM-ALG-0035
  page: 8
  vendor_label: "유형 01 거듭제곱근"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 a 의 n제곱근 중 실수인 것의 개수를 f_n(a) 로 정의할 때 f_2(5)+f_3(4)+f_4(-3) 의 값. 5지선다.
  category: "함수 기호 해석 → n 홀짝·a 부호 개수 표 → 합"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수인 n제곱근의 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수 기호를 n 홀짝·a 부호 표로 읽으면 2+1+0=3. 계산은 없고 f_4(-3)=0 을 1 이나 2 로 세는 부호 함정과 기호 f_n(a) 해석(T-표기)이 전부(Mₐ 2·Mₜ 2). 통찰 없음이나 M_total 6 이라 「중」 출발 ★2 유지. [분류 이슈] Mₜ 를 1 로 보면 M_total 5·통찰 0 → −1 후보 ★1 — 라벨 ★2 유지.
  tier: star_2
  mechanism_primary: "f_n(a) = (n 짝수·a>0 → 2 / n 홀수 → 1 / n 짝수·a<0 → 0) → 2+1+0 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n·a 조합(f_6(2)+f_5(-7)+f_2(-1))을 바꿔 합을 0~6 안에서 조절. 제약: a=0 인 경우(f_n(0)=1)를 넣을지 명시, 선택지 다섯 개가 서로 다른 정수."
    creative: "(1) f_n(a)=0 이 되는 (n, a) 조건을 묻는 역방향(★2 · I-BW d1) (2) k=2~10 에 대한 f_k(-1) 의 합처럼 합 기호로 확장하면 홀짝 세기(★2~3 · I-PD d1) (3) f_n(a)·f_m(b) 의 곱이 최대가 되는 경우(★3)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 33 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 35 · premium 0
- type_hint 상위: 「거듭제곱근의 정의 — 실수인 n제곱근 구하기」 5 · 「거듭제곱근의 성질을 이용한 계산」 5 · 「거듭제곱근 기호의 값 계산」 4 · 「0과 음의 정수 지수의 값」 4 · 「거듭제곱근을 유리수 지수로 나타내기」 4 · 「유리수 지수의 지수법칙 계산(문자식)」 4 · 「실수 지수의 지수법칙 계산(밑 통일)」 4 · 「거듭제곱근의 정의·개수 ㄱㄴㄷ 판별」 2 · 「유리수 지수와 곱셈 공식」 2 · 「실수인 n제곱근의 개수 세기」 1
- 구역별: 교과서 01-1 9문(★1 9) · 01-2 5문(★1 5) · 01-3 18문(★1 18) · 유형 01 3문(★1 1 · ★2 2)
- target_cohort: 하위권 25 · 중하위권 10
- M_total 분포: 4 → 22문 · 5 → 5문 · 6 → 6문 · 7 → 2문
- 그림: 0문
- 전사 답 확인 필요: 없음(35문 모두 재계산 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없고, 아래는 ★1/★2 경계의 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0024 | 교과서 구역이나 M_total 7(문자 둘·분수 덧셈 둘). 통찰 없음이라 ★1 유지했으나 ★1/★2 경계 | ★1 / ★2 |
| RPM-ALG-0025 | 교과서 구역이나 M_total 7(근호 둘 → 지수 변환 + 분수 합·곱). ★1 유지, 경계 | ★1 / ★2 |
| RPM-ALG-0035 | 「중」 라벨을 M_total 6(Mₐ 2·Mₜ 2)으로 지지했으나 Mₜ 를 1 로 보면 M_total 5·통찰 0 → −1 후보 ★1. 라벨 ★2 유지 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「거듭제곱근의 정의 — 실수인 n제곱근 구하기」(0001~0004·0034) · 「거듭제곱근의 성질을 이용한 계산」(0010~0014) · 「거듭제곱근 기호의 값 계산」(0005~0008) · 「0과 음의 정수 지수의 값」(0015~0018) · 「거듭제곱근을 유리수 지수로 나타내기」(0019~0022) · 「유리수 지수의 지수법칙 계산(문자식)」(0023~0026) · 「실수 지수의 지수법칙 계산(밑 통일)」(0027~0030).
- 따로 세울 유형: (a) 「거듭제곱근의 정의·개수」 — 실수인 n제곱근 구하기(0001~0004·0034), 개수 세기(0035), ㄱㄴㄷ 판별(0009·0033)을 한 유형의 세 발문 형태로 두고 base ★ 는 ㄱㄴㄷ·개수형 ★2, 구하기형 ★1 로 나눌 것. RPM 「유형 01 거듭제곱근」 제목이 이 유형과 일치. (b) 「거듭제곱근의 성질 계산」(0010~0014 · 곱·몫·겹근호·(ⁿ√a)ᵐ) — 다음 파트 유형 02·03 으로 이어지므로 base ★ 는 그쪽에서 확정. (c) 「지수법칙 계산 — 유리수 지수 문자식 / 실수 지수 밑 통일」(0023~0030) — 두 갈래를 하나로 묶되 밑 통일·지수 유리화(0029·0030)를 서브 골조로 표시.
- 통합해도 될 유형: 「거듭제곱근 기호의 값 계산」(0005~0008)은 (a) 정의 유형의 소문항 수준이라 별도 유형으로 세우지 않아도 됨. 「0과 음의 정수 지수」(0015~0018)와 「거듭제곱근을 유리수 지수로」(0019~0022)는 「지수의 확장 — 표기 변환」 하나로 합쳐도 됨. 「유리수 지수와 곱셈 공식」(0031~0032)은 다음 파트 「a^x±a^{-x} 꼴 식의 값」(유형 05 류)의 전 단계라 그쪽 유형의 base ★1 층으로 흡수 검토.
- 같은 골조·다른 ★: 0009(교과서 ★1)와 0033(유형 대표 ★2)은 「정의·개수 ㄱㄴㄷ 판별」 골조가 같고, 차이는 보기가 문자(n·a 일반 진술)인지 구체 수(밑 정리 단계 + 복소근 보기)인지뿐이다. 카탈로그에서 base ★ 를 정할 때 이 둘을 같은 유형의 ★1·★2 층으로 두면 된다.
