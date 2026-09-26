---
name: mechanism-데이터-RPM-ALG-07-p1
description: RPM 대수 07 삼각함수의 활용(1/3 · 교과서 07-1~07-4 · 유형 01~03) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 07 삼각함수의 활용
  unit_code: ALG-07
  part: "1/3"
  extract_range: "95~97쪽 · 0697~0730"
  total_problems: 34
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 07 삼각함수의 활용 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 07 삼각함수의 활용 단원(전체 105문) 가운데 95~97쪽 0697~0730 의 34문을 다룬다. 교과서 구역 07-1 사인법칙(9문) · 07-2 코사인법칙(5문) · 07-3 삼각형의 넓이(4문) · 07-4 사각형의 넓이(4문)와 유형 01 사인법칙(4문) · 유형 02 사인법칙과 삼각형의 외접원(4문) · 유형 03 사인법칙의 변형: 변의 길이의 비(4문)이다. 벤더 난이도 신호는 구역(교과서 → ★1 출발 · 유형 → ★2 출발)과 유형 안의 난이도 표시(중하·중·상중), 태그(대표문제·서술형)로 읽었다. 유형 구역에서 −1 조정은 「공식 한 번 대입·경우 판단 없음·M_total ≤ 5」인 문항에만 적용했고, 둔각 해 기각·연립·각 확정 같은 두 번째 단계가 있으면 ★2 를 유지했다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 교과서 구역 22문은 전부 절차형 ★1 이고, 통찰형은 유형 구역의 4문(0722 · 0725 · 0726 · 0730)이다.

## 문항 데이터

### 교과서 07-1 사인법칙

```yaml
- id: RPM-ALG-0697
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=4, A=60°, C=45° 일 때 c 의 값.
  category: "사인법칙(두 각과 한 변) → 다른 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기(두 각과 한 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a/sinA = c/sinC 에 대입하면 c = 4·sin45°/sin60° = 4√2/√3 = 4√6/3. 공식 한 번·유리화 한 줄.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a/sinA = c/sinC → c = a·sinC/sinA → 4√6/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0697.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 값과 두 각(30°·45°·60°·120°·135°·150° 특수각 조합)을 바꿀 수 있음. 제약: 두 각의 합이 180° 미만이고, 답이 특수각 sin 값의 비로 정리돼야 함(sin75° 같은 비특수각이 필요한 배치는 피함)."
    creative: "(1) 구하는 변을 b 로 바꿔 세 번째 각 B 를 먼저 구하게 하기(★1 유지) (2) 두 각 대신 한 각과 그 대변·다른 변을 주어 각을 먼저 구하게 하기(0700 골조 · 둔각 기각 판단이 생기면 ★2) (3) 외접원 반지름 R 와 결합해 2R 로 잇기(★2)."
```

```yaml
- id: RPM-ALG-0698
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 c=5, B=30°, C=45° 일 때 b 의 값.
  category: "사인법칙(두 각과 한 변) → 다른 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기(두 각과 한 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b = c·sinB/sinC = 5·(1/2)/(√2/2) = 5/√2 = 5√2/2. 0697 과 같은 골조, 공식 한 번·유리화.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b/sinB = c/sinC → b = c·sinB/sinC → 5√2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0698.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 두 각을 바꿈. 제약: 두 각이 특수각이고 합이 180° 미만, 유리화 결과가 간단할 것."
    creative: "(1) 세 번째 각 A 의 대변 a 를 물어 각의 합 단계를 추가(★1) (2) b 를 주고 c 를 묻는 역방향(★1) (3) 둘레를 묻기 — 세 변을 모두 사인법칙으로(★2 · 계산량 증가)."
```

```yaml
- id: RPM-ALG-0699
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 b=12, A=30°, B=120° 일 때 a 의 값.
  category: "사인법칙(두 각과 한 변 · 둔각 사인) → 다른 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기(두 각과 한 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a = b·sinA/sinB = 12·(1/2)/(√3/2) = 12/√3 = 4√3. 둔각의 사인값 sin120° = sin60° 만 주의(T-표기).
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a/sinA = b/sinB → a = b·sinA/sinB(sin120° = sin60°) → 4√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0699.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둔각을 135°·150° 로, b 와 A 를 바꿈. 제약: A+B<180°, 답이 특수각 비로 정리."
    creative: "(1) 둔각을 예각으로 바꿔 함정 제거(★1) (2) 두 둔각 후보 중 어느 것이 가능한지 먼저 판단하게 하기(★2) (3) 외접원 R 와 결합(★2)."
```

```yaml
- id: RPM-ALG-0700
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=1, c=√2, C=135° 일 때 A 의 크기.
  category: "사인법칙(두 변과 한 대각) → 각 · 둔각 해 기각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinA = a·sinC/c = 1·(√2/2)/√2 = 1/2 → A = 30° 또는 150°. C = 135° 이므로 A < 45° 여야 해 150° 는 기각.
    기각 판단이 있지만 각의 합 확인이라는 표준 절차라 통찰로 세지 않음(T-범위 1개). 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sinA = a·sinC/c = 1/2 → A = 30° 또는 150° → C = 135° 라 150° 기각 → 30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0700.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, c, C 를 바꿔 sinA 가 1/2·√2/2·√3/2 가 되게 함. 제약: 주어진 각이 둔각이면 다른 각은 예각 하나로 확정되고, 주어진 각이 예각이면 두 해가 남을 수 있음(0701 형)."
    creative: "(1) 주어진 각을 예각으로 바꿔 두 해가 모두 살아남는 형(0701 · ★1) (2) 두 해 중 하나만 살아남는 이유를 ㄱㄴㄷ 보기로 묻기(★2 · I-VF d1) (3) 구한 A 로 나머지 변 b 까지 잇기(★2)."
```

```yaml
- id: RPM-ALG-0701
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=2, b=2√2, A=30° 일 때 B 의 크기(두 답).
  category: "사인법칙(두 변과 한 대각) → 각 · 두 해 모두 인정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinB = b·sinA/a = 2√2·(1/2)/2 = √2/2 → B = 45° 또는 135°. A = 30° 라 135° 도 A+B = 165° < 180° 로 성립해 두 답 모두 인정.
    둔각 해를 빠뜨리는 것이 함정(T-범위). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sinB = b·sinA/a = √2/2 → B = 45° 또는 135°(둘 다 A+B<180°) → 두 답"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$ 또는 $135^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0701.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b, A 를 바꿔 sinB 가 특수각 값이 되게 함. 제약: b·sinA/a ≤ 1 이어야 삼각형이 존재하고, A + (둔각 해) < 180° 여야 두 답이 모두 살아남음."
    creative: "(1) 둔각 해가 기각되도록 A 를 키우기(0700 형 · ★1) (2) 두 답의 합 또는 차를 묻기(★1~2) (3) 「삼각형이 두 개 존재할 b 의 범위」를 묻기(★3 · I-BW d1)."
```

```yaml
- id: RPM-ALG-0702
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 b=2, c=√6, B=45° 일 때 C 의 크기(두 답).
  category: "사인법칙(두 변과 한 대각) → 각 · 두 해 모두 인정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinC = c·sinB/b = √6·(√2/2)/2 = √12/4 = √3/2 → C = 60° 또는 120°. B = 45° 이므로 둘 다 B+C < 180° 로 성립.
    0701 과 같은 골조(근호 곱 정리 한 번 추가). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sinC = c·sinB/b = √3/2 → C = 60° 또는 120°(둘 다 B+C<180°) → 두 답"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60^\circ$ 또는 $120^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0702.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b, c, B 를 바꿈. 제약: c·sinB/b 가 특수각 sin 값 이하이고, B + 둔각 해 < 180° 이면 두 답·아니면 한 답이 됨을 답에 반영."
    creative: "(1) 둔각 해가 기각되는 조합으로(★1) (2) 두 경우 각각의 나머지 변 a 를 묻기(★2 · 사인법칙 두 번) (3) 두 경우의 넓이 차를 묻기(★3 · 넓이 공식 결합)."
```

```yaml
- id: RPM-ALG-0703
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=√3, A=60° 일 때 외접원의 반지름 R.
  category: "사인법칙 a = 2R sinA → R"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "외접원의 반지름과 사인법칙(a=2R sinA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    R = a/(2 sinA) = √3/(2·√3/2) = 1. 공식 한 번.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a/sinA = 2R → R = √3/(2·sin60°) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0703.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 와 A 를 바꿈. 제약: R 이 간단한 수가 되도록 a 가 sinA 의 배수 꼴."
    creative: "(1) R 을 주고 a 를 묻기(유형 02 · 0723 형 · ★1) (2) 두 각과 한 변을 주어 세 번째 각을 거쳐 R 로(0704 형 · ★1) (3) 넓이 공식 S = abc/4R 로 잇기(★2~3)."
```

```yaml
- id: RPM-ALG-0704
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=6, B=100°, C=50° 일 때 외접원의 반지름 R.
  category: "세 번째 각 → a = 2R sinA → R"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "외접원의 반지름과 사인법칙(a=2R sinA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 두 각에서 A = 180°−100°−50° = 30° 를 먼저 구해야 a 의 대각이 나온다. R = a/(2 sinA) = 6/(2·1/2) = 6.
    100°·50° 는 사인값을 쓸 수 없는 미끼 — 세 번째 각을 구하는 것이 전부. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A = 180°−100°−50° = 30° → R = a/(2 sinA) = 6/(2·1/2) → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0704.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B, C 를 바꾸되 A 가 특수각(30°·45°·60°·120°·135°·150°)이 되도록. 제약: B+C < 180°."
    creative: "(1) A 가 둔각이 되는 조합(예 B=20°, C=40°)으로 sin120° 처리 추가(★1) (2) 세 각의 비를 주고 R 를 묻기(0727 결합 · ★2) (3) R 와 두 각을 주고 변을 묻기(★2)."
```

```yaml
- id: RPM-ALG-0705
  page: 95
  vendor_label: "교과서 07-1 사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 b=2, c=2, A=120° 일 때 외접원의 반지름 R.
  category: "이등변 착안 → B=C=30° → b = 2R sinB → R"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "외접원의 반지름과 사인법칙(a=2R sinA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b = c 이므로 이등변삼각형에서 B = C = 30°. R = b/(2 sin30°) = 2.
    코사인법칙으로 a = 2√3 을 구해 R = a/(2 sinA) 로 가도 같지만 이 절(07-1)에서는 이등변 착안이 의도된 경로. 착안이 가볍고 표준 성질이라 통찰로 세지 않음. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b = c → B = C = 30° → R = b/(2 sinB) = 2/(2·1/2) → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0705.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b=c 값과 A 를 바꿈. 제약: 이등변이 유지되면 B = C = (180°−A)/2 가 특수각이 되도록 A 를 120°·90°·60° 로."
    creative: "(1) b≠c 로 바꾸면 코사인법칙으로 a 를 구한 뒤 R 로 가야 해 두 법칙 결합(★2) (2) R 을 주고 밑변 a 를 묻기(★2) (3) 이등변임을 숨기고 두 각만 같다고 주기(★1~2)."
```

### 교과서 07-2 코사인법칙

```yaml
- id: RPM-ALG-0706
  page: 95
  vendor_label: "교과서 07-2 코사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 b=5, c=7, A=60° 일 때 a 의 값.
  category: "코사인법칙(두 변과 끼인각) → 대변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a² = b²+c²−2bc·cosA = 25+49−2·5·7·(1/2) = 39 → a = √39. 공식 대입 한 줄.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a² = b²+c²−2bc·cosA = 25+49−35 = 39 → a = √39"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{39}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0706.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b, c, A 를 바꿈. 제약: 끼인각이 특수각(60°·120°·45°·135°·30°·150°)이고 a² 이 양수, 가능하면 완전제곱수나 간단한 근호."
    creative: "(1) 끼인각을 둔각으로 바꿔 부호 함정 추가(0708 형 · ★1) (2) a 를 주고 끼인각을 묻는 역방향(0710 형 · ★1) (3) 넓이까지 함께 묻기(0714 형 · ★1~2)."
```

```yaml
- id: RPM-ALG-0707
  page: 95
  vendor_label: "교과서 07-2 코사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=6, c=2√2, B=45° 일 때 b 의 값.
  category: "코사인법칙(두 변과 끼인각) → 대변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b² = a²+c²−2ac·cosB = 36+8−2·6·2√2·(√2/2) = 44−24 = 20 → b = 2√5. 근호 곱 2√2·√2 = 4 정리가 유일한 계산.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b² = a²+c²−2ac·cosB = 36+8−24 = 20 → b = 2√5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0707.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, c, B 를 바꿈. 제약: 근호가 있는 변은 끼인각의 cos 와 곱해 근호가 사라지도록(√2 변 ↔ 45°·135°, √3 변 ↔ 30°·150°) 짝을 맞추면 답이 깔끔함."
    creative: "(1) 근호 변을 정수로 바꿔 부담 제거(★1) (2) b 를 주고 a 를 묻기 — a 의 이차방정식(두 근 판정 · ★2 · I-VF d1 가능) (3) 넓이와 결합(★2)."
```

```yaml
- id: RPM-ALG-0708
  page: 95
  vendor_label: "교과서 07-2 코사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=12, b=6, C=120° 일 때 c 의 값.
  category: "코사인법칙(두 변과 둔각 끼인각) → 대변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos120° = −1/2 라 −2ab·cosC 항이 +72 로 바뀐다(T-부호). c² = 144+36+72 = 252 = 36·7 → c = 6√7.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "c² = a²+b²−2ab·cosC = 144+36+72 = 252 → c = 6√7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0708.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 와 둔각(120°·135°·150°)을 바꿈. 제약: c² 이 제곱인수를 가진 수로 떨어지도록, 부호 함정은 유지."
    creative: "(1) 끼인각을 예각으로 바꿔 부호 함정 제거(★1) (2) c 를 주고 둔각을 묻기(cos 음수 판정 · ★1~2) (3) 대각 C 대신 외각 60° 를 주어 내각으로 옮기게(★2 · T-표기)."
```

```yaml
- id: RPM-ALG-0709
  page: 95
  vendor_label: "교과서 07-2 코사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=1, b=5, c=3√2 일 때 cosA 의 값.
  category: "코사인법칙(세 변) → cos"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 각의 크기(cos) 구하기(세 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cosA = (b²+c²−a²)/(2bc) = (25+18−1)/(2·5·3√2) = 42/(30√2) = 7/(5√2) = 7√2/10. 공식 변형 한 번·유리화.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cosA = (b²+c²−a²)/(2bc) = 42/(30√2) → 7√2/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{7\sqrt{2}}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0709.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꿈. 제약: 삼각형 부등식 성립, 분모 2bc 에 근호가 있으면 유리화 필요, 답이 (−1, 1) 안."
    creative: "(1) cos 값이 특수각이 되게 세 변을 잡아 각을 묻기(0710 · ★1) (2) sinA 와 넓이까지 잇기(0714 · ★1~2) (3) 세 변을 비(예 a:b:c=3:5:7)로 주면 k 치환 후 약분(★2 · 07-p2 유형 방향)."
```

```yaml
- id: RPM-ALG-0710
  page: 95
  vendor_label: "교과서 07-2 코사인법칙"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=2√3, b=2, c=2 일 때 B 의 크기.
  category: "코사인법칙(세 변) → cos → 각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 각의 크기(cos) 구하기(세 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cosB = (a²+c²−b²)/(2ac) = (12+4−4)/(2·2√3·2) = 12/(8√3) = √3/2 → B = 30°.
    cos 는 0°~180° 에서 한 값에 한 각이라 사인법칙과 달리 두 해 판정이 없다. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cosB = (a²+c²−b²)/(2ac) = 12/(8√3) = √3/2 → B = 30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0710.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꾸되 cos 값이 특수각(±1/2·±√2/2·±√3/2·0)이 되도록. 제약: 삼각형 부등식."
    creative: "(1) 가장 큰 각을 묻게 해 어느 변이 대변인지 판단 추가(★1~2) (2) b=c 이등변임을 이용해 사인법칙으로도 풀리게 하고 두 경로 비교(★2 · I-SC d1) (3) 세 각 중 둔각이 있는지 판별(cos 부호 · ★2)."
```

### 교과서 07-3 삼각형의 넓이

```yaml
- id: RPM-ALG-0711
  page: 95
  vendor_label: "교과서 07-3 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=8, b=12, C=30° 일 때 넓이.
  category: "넓이 공식 S = ½ab·sinC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S = ½·8·12·sin30° = 48·(1/2) = 24. 공식 한 번.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S = ½·a·b·sinC = ½·8·12·(1/2) → 24"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0711.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 끼인각을 바꿈. 제약: 끼인각이 특수각이고 두 변의 곱이 짝수면 정수 답."
    creative: "(1) 끼인각을 둔각으로(0712 · ★1) (2) 넓이를 주고 끼인각을 묻기 — 예각·둔각 두 답(★2 · I-MI d1) (3) 세 변을 주어 코사인 → 사인 → 넓이 사슬(0714 · ★1~2)."
```

```yaml
- id: RPM-ALG-0712
  page: 95
  vendor_label: "교과서 07-3 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=6, c=5, B=120° 일 때 넓이.
  category: "넓이 공식 S = ½ac·sinB(둔각)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S = ½·6·5·sin120° = 15·(√3/2) = 15√3/2. sin120° = sin60° 만 주의.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S = ½·a·c·sinB = ½·6·5·(√3/2) → 15√3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{15\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0712.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 둔각(120°·135°·150°)을 바꿈. 제약: 끼인각의 두 변을 정확히 짝지을 것(B 의 두 변은 a, c)."
    creative: "(1) 끼인각이 아닌 각(A)을 주어 사인법칙으로 끼인각을 먼저 구하게(★2) (2) 넓이를 주고 변 하나를 묻기(★1) (3) 외접원 R 와 결합해 S = abc/4R 검산(★2)."
```

```yaml
- id: RPM-ALG-0713
  page: 95
  vendor_label: "교과서 07-3 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 b=8, c=9, A=135° 일 때 넓이.
  category: "넓이 공식 S = ½bc·sinA(둔각)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이(두 변과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S = ½·8·9·sin135° = 36·(√2/2) = 18√2. sin135° = sin45°.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S = ½·b·c·sinA = ½·8·9·(√2/2) → 18√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$18\sqrt{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0713.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 둔각을 바꿈. 제약: 특수각·두 변의 곱이 짝수."
    creative: "(1) 넓이와 한 변을 주고 다른 변을 묻기(★1) (2) 넓이를 주고 각을 묻기(두 답 · ★2 · I-MI d1) (3) 넓이가 같은 예각삼각형과 둔각삼각형의 나머지 변 비교(코사인법칙 결합 · ★3)."
```

```yaml
- id: RPM-ALG-0714
  page: 95
  vendor_label: "교과서 07-3 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 에서 a=7, b=8, c=9 일 때 ⑴ cosA ⑵ sinA ⑶ 넓이.
  category: "코사인법칙 → sin²+cos²=1 → S = ½bc·sinA 사슬"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 변이 주어진 삼각형의 넓이(코사인 → 사인 → 넓이)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ cosA = (64+81−49)/(2·8·9) = 96/144 = 2/3 ⑵ sinA = √(1−4/9) = √5/3(0°<A<180° 라 양수) ⑶ S = ½·8·9·(√5/3) = 12√5.
    소문항이 사슬을 미리 짜 주는 절차형. 단계 4 → Mₛ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "cosA = (b²+c²−a²)/(2bc) = 2/3 → sinA = √(1−cos²A) = √5/3 → S = ½·b·c·sinA = 12√5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{2}{3}$ (2) $\dfrac{\sqrt{5}}{3}$ (3) $12\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0714.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꿈. 제약: 삼각형 부등식, cosA 가 유리수(b²+c²−a² 이 2bc 의 약수 꼴), sinA 의 근호가 간단하도록(예 5·6·7 → cosA = 5/7)."
    creative: "(1) 소문항 없이 넓이만 묻기(★2 · 학생이 사슬을 스스로 짜야 함) (2) 헤론 공식과 비교하게 하기(★2 · I-SC d1) (3) 내접원 반지름 r = 2S/(a+b+c) 까지 잇기(★2~3 · 07-p2 유형 방향)."
```

### 교과서 07-4 사각형의 넓이

```yaml
- id: RPM-ALG-0715
  page: 95
  vendor_label: "교과서 07-4 사각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평행사변형 ABCD 에서 AB=2, BC=3, D=60° 일 때 넓이.
  category: "평행사변형 넓이 S = ab·sinθ(대각 이용)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이(이웃한 두 변과 한 각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 각 D 는 두 변 AB·BC 의 끼인각 B 의 대각이라 크기가 같다. S = 2·3·sin60° = 3√3.
    각의 위치를 옮기는 한 단계만 주의(T-표기). 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∠B = ∠D = 60°(대각) → S = AB·BC·sinB = 2·3·(√3/2) → 3√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0715.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 각을 바꿈. 제약: 각이 특수각. 이웃각(예 A=120°)을 주어도 sin 값이 같아 답 불변."
    creative: "(1) 이웃각을 주어 sin(180°−θ) = sinθ 를 확인시키기(★1) (2) 넓이를 주고 각을 묻기(예각·둔각 두 답 · ★2) (3) 대각선 길이를 주고 코사인법칙으로 변을 먼저 구하게 하기(★2~3)."
```

```yaml
- id: RPM-ALG-0716
  page: 95
  vendor_label: "교과서 07-4 사각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평행사변형 ABCD 에서 AB=3, AD=4, B=135° 일 때 넓이.
  category: "평행사변형 넓이 S = ab·sinθ(이웃각 이용)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이(이웃한 두 변과 한 각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB·AD 의 끼인각은 A 이고 A = 180°−B = 45°. sin45° = sin135° 라 어느 각을 써도 같다. S = 3·4·(√2/2) = 6√2.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S = AB·AD·sinA, sinA = sin(180°−135°) = sin135° → 3·4·(√2/2) → 6√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0716.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 각을 바꿈. 제약: 특수각. 주어지는 각이 끼인각·이웃각·대각 중 어느 것이든 sin 값은 같으므로 라벨만 바꾸면 됨."
    creative: "(1) 대각선 BD 의 길이를 함께 묻기(코사인법칙 결합 · ★2) (2) 마름모로 바꿔 한 변과 한 각만 주기(★1) (3) 넓이와 한 변·둘레를 주고 각을 묻기(★2)."
```

```yaml
- id: RPM-ALG-0717
  page: 95
  vendor_label: "교과서 07-4 사각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평행사변형 ABCD 에서 BC=4, CD=5, A=150° 일 때 넓이.
  category: "평행사변형 넓이 S = ab·sinθ(대각 이용)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이(이웃한 두 변과 한 각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    BC·CD 의 끼인각 C 는 A 의 대각이라 150°. S = 4·5·sin150° = 20·(1/2) = 10.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∠C = ∠A = 150°(대각) → S = BC·CD·sinC = 4·5·(1/2) → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0717.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변과 각을 바꿈. 제약: 특수각. 30°·150° 짝은 정수 답, 60°·120° 짝은 √3 답."
    creative: "(1) 넓이를 주고 각을 묻기(30° 또는 150° 두 답 · ★2 · I-MI d1) (2) 두 대각선 길이를 묻기(코사인법칙 두 번 · ★2) (3) 평행사변형 대신 사다리꼴로 바꿔 삼각형 분할(★3)."
```

```yaml
- id: RPM-ALG-0718
  page: 95
  vendor_label: "교과서 07-4 사각형의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    사각형 ABCD 의 두 대각선 길이가 10, 14 이고 두 대각선이 이루는 각이 120° 일 때 넓이.
  category: "사각형 넓이 S = ½·d₁·d₂·sinθ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형의 넓이(두 대각선과 끼인각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S = ½·10·14·sin120° = 70·(√3/2) = 35√3. 대각선 공식 한 번.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S = ½·d₁·d₂·sinθ = ½·10·14·(√3/2) → 35√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$35\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0718.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 대각선 길이와 각을 바꿈. 제약: 각이 특수각(끼인각의 보각을 줘도 답 같음), 길이 곱이 짝수."
    creative: "(1) 넓이와 한 대각선을 주고 다른 대각선을 묻기(★1~2) (2) 마름모·등변사다리꼴에서 대각선 공식과 다른 공식을 비교시키기(★2 · I-SC d1) (3) 좌표평면 사각형으로 주어 대각선 길이·각을 먼저 구하게 하기(★3 · I-XU)."
```

### 유형 01 사인법칙

```yaml
- id: RPM-ALG-0719
  page: 96
  vendor_label: "유형 01 사인법칙"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 b=2, c=2√3, C=120° 일 때 cos²B 의 값.
  category: "사인법칙 → sinB → cos²B = 1 − sin²B(또는 B 확정)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sinB = b·sinC/c = 2·(√3/2)/(2√3) = 1/2. C = 120° 이므로 B = 30°(150° 기각)에서 cos²B = 3/4, 또는 cos²B = 1−sin²B 로 각 확정 없이 바로.
    둔각 기각 판단 또는 항등식 우회가 한 단계 더 있어 −1 후보(M_total 4)를 적용하지 않고 유형 대표 출발점 ★2 유지. 통찰 없음.
  tier: star_2
  mechanism_primary: "sinB = b·sinC/c = 1/2 → cos²B = 1 − 1/4 → 3/4(또는 C=120° 라 B=30° 확정 후 cos²30°)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0719.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b, c, C 를 바꿔 sinB 가 특수각 값이 되게. 제약: C 가 둔각이면 B 는 예각으로 확정. 묻는 값을 cos²B 로 두면 부호 무관하지만 cosB 를 물으면 각 확정이 필수."
    creative: "(1) cosB 를 물어 각 확정을 강제(★2) (2) C 를 예각으로 바꿔 B 가 두 해가 되면 cosB 도 두 값(★2 · I-MI d1) (3) 넓이까지 잇기(A 를 구해 ½bc·sinA · ★2~3)."
```

```yaml
- id: RPM-ALG-0720
  page: 96
  vendor_label: "유형 01 사인법칙"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 b=8, B=45°, C=75° 일 때 a 의 값. 5지선다.
  category: "세 번째 각 → 사인법칙(두 각과 한 변) → 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기(두 각과 한 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    C = 75° 는 사인값을 쓸 수 없으므로 A = 60° 를 구해 a/sinA = b/sinB. a = 8·(√3/2)/(√2/2) = 8√3/√2 = 4√6 → ②.
    교과서 0704 와 같은 세 번째 각 골조 · 중하 · 통찰 없음 · M_total 4 → −1 적용 → ★1.
  tier: star_1
  mechanism_primary: "A = 180°−45°−75° = 60° → a = b·sinA/sinB = 8·(√3/2)/(√2/2) → 4√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0720.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b 와 두 각을 바꿈. 제약: 구하는 변의 대각과 주어진 변의 대각이 특수각이 되도록 비특수각(75°·105°)은 나머지 각에 배치. 선택지는 4√6 과 헷갈리는 근호 꼴(5√3·4√6·6√3·5√6)로 유지."
    creative: "(1) 75° 의 대변 c 를 묻는 변형은 sin75° 가 필요해 이 단원 범위 밖 — 대신 c 를 주고 b 를 묻기(★1) (2) 그림으로 주기(0721 · ★1) (3) 외접원 반지름 R 를 함께 묻기(★2)."
```

```yaml
- id: RPM-ALG-0721
  page: 96
  vendor_label: "유형 01 사인법칙"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 A=105°, B=45°, AC=10 일 때 AB 의 길이. 그림(A 105° · B 45° · AC 10 라벨) 있음.
  category: "세 번째 각 → 사인법칙(두 각과 한 변) → 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기(두 각과 한 변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림의 105° 는 사인값을 모르는 각이라 C = 30° 를 구한 뒤 AB(=c)/sinC = AC(=b)/sinB. AB = 10·(1/2)/(√2/2) = 5√2.
    0720 과 같은 골조 · 중하 · 통찰 없음 · M_total 4 → −1 적용 → ★1.
  tier: star_1
  mechanism_primary: "C = 180°−105°−45° = 30° → AB/sinC = AC/sinB → AB = 10·(1/2)/(√2/2) → 5√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5\sqrt{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0721.png"
  latex: latex-bank/rpm-alg/items/0721.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC 와 두 각을 바꿈. 제약: 구하는 변의 대각과 주어진 변의 대각이 모두 특수각(A 는 비특수각이어도 됨). 그림 라벨(A 105° · B 45° · AC 10)은 값만 갱신."
    creative: "(1) BC 를 묻는 변형은 sin105° 가 필요해 범위 밖 — C 를 105° 로 옮기고 AB 를 묻기(★1) (2) 그림 없이 문장만(★1) (3) 넓이 묻기 — BC 도 사인법칙으로 구한 뒤 ½·AB·BC·sinB 이므로 두 번 사인법칙(★2)."
```

```yaml
- id: RPM-ALG-0722
  page: 96
  vendor_label: "유형 01 사인법칙"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원 O 위의 네 점 A, B, C, D 에서 AB=BC=6√2, ∠ABC=90°, ∠ABD=60° 일 때 CD 의 길이. 그림(원 · 지름 AC · 현 BD) 있음.
  category: "직각 원주각 → AC 지름 → R → 원주각 30° 의 현 CD = 2R·sin30°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠ABC=90° 에서 AC 가 지름임을 읽어 R=6 을 얻고, CD 를 원주각 ∠CBD=30° 를 마주보는 현으로 보아 사인법칙 CD = 2R·sin∠CBD 로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 내접하는 도형과 사인법칙(지름·현의 길이 2R sin)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ABC = 90° → AC 는 지름, AC = √(72+72) = 12 → R = 6. ∠CBD = 90°−60° = 30° 이고 삼각형 BCD 도 같은 원에 내접하므로 CD = 2R·sin∠CBD = 12·(1/2) = 6.
    그림에서 「직각 → 지름」과 「현 ↔ 원주각 → 2R sin」 두 기하 읽기가 핵심이라 RT d1 하나. 유형 중 · M_total 5 → ★2.
    [분류 이슈] 유형 01(사인법칙) 소속이나 골조는 유형 02(외접원 2R 관계)에 가까움 — 카탈로그 설계 때 소속 결정.
  tier: star_2
  mechanism_primary: "∠ABC=90° → AC 지름 = 12 → R = 6 → ∠CBD = 30° → CD = 2R·sin30° → 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-0722.png"
  latex: latex-bank/rpm-alg/items/0722.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=BC 값(R 이 바뀜)과 ∠ABD(45°·30°)를 바꿈. 제약: ∠ABC=90° 는 AC 지름 조건이라 고정, ∠CBD = 90°−∠ABD 가 특수각. 그림 라벨(6√2 두 곳 · 60°)은 값만 갱신."
    creative: "(1) AB≠BC 로 바꿔 AC 를 피타고라스로(★2 유지) (2) ∠ABC 를 90° 가 아닌 각으로 주고 AC 를 코사인법칙으로 구한 뒤 R 로(★3 · 코사인+사인 결합) (3) CD 대신 AD 를 물어 원주각 ∠ABD=60° 를 직접 쓰게(★2)."
```

### 유형 02 사인법칙과 삼각형의 외접원

```yaml
- id: RPM-ALG-0723
  page: 96
  vendor_label: "유형 02 사인법칙과 삼각형의 외접원"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    반지름 12 인 원에 내접하는 삼각형 ABC 에서 sinB=5/8 일 때 AC 의 길이.
  category: "b = 2R·sinB"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "외접원의 반지름과 사인법칙(a=2R sinA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    사인법칙 b/sinB = 2R 한 줄. AC = b = 24·(5/8) = 15.
    유형 02 대표문항이지만 공식 대입 한 번·경우 판단 없음·M_total 4 라 −1 적용 → ★1.
  tier: star_1
  mechanism_primary: "AC = b = 2R·sinB = 24·(5/8) → 15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0723.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "R 과 sinB 를 바꿈. 제약: 2R·sinB 가 정수 또는 간단한 수, sinB ≤ 1."
    creative: "(1) 변을 주고 sin 을 묻기(★1) (2) cosB 를 주어 sinB 를 먼저 구하게(부호 판단 · ★2) (3) 세 각의 sin 합을 주고 둘레 묻기(0724 형 · ★1)."
```

```yaml
- id: RPM-ALG-0724
  page: 96
  vendor_label: "유형 02 사인법칙과 삼각형의 외접원"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 10 인 원에 내접하는 삼각형 ABC 에서 sinA+sinB+sinC=3/2 일 때 a+b+c 의 값. 5지선다.
  category: "각 변 = 2R·sin → 합으로 묶기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "외접원의 반지름과 사인법칙(a=2R sinA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 변을 각각 2R·sin 으로 바꾸면 합이 2R 배. a+b+c = 20·(3/2) = 30 → ⑤.
    중하 · 공식 한 번 · 통찰 없음 · M_total 4 → −1 적용 → ★1.
  tier: star_1
  mechanism_primary: "a+b+c = 2R(sinA+sinB+sinC) = 20·(3/2) → 30"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0724.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "R 과 sin 합을 바꿈. 제약: 합이 3 이하이고(실제로는 3√3/2 이하) 2R·합이 선택지 수로 떨어질 것."
    creative: "(1) 둘레를 주고 sin 합을 묻기(★1) (2) sin 의 비를 주고 변의 비·둘레 묻기(유형 03 결합 · ★2) (3) sin 합 대신 sin² 합을 주면 변의 제곱합 → 코사인법칙 결합(★3)."
```

```yaml
- id: RPM-ALG-0725
  page: 96
  vendor_label: "유형 02 사인법칙과 삼각형의 외접원"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    반지름 √5 인 원에 내접하는 삼각형 ABC 에서 5sin(A+B)·sinC=4 일 때 c 의 값.
  category: "sin(A+B)=sinC 동치 변환 → sin²C → c = 2R·sinC"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A+B = 180°−C 에서 sin(A+B) = sinC 로 조건을 C 만의 식 5sin²C = 4 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형 내각의 합과 사인법칙(sin(A+B)=sinC)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin(A+B) = sin(180°−C) = sinC 이므로 5sin²C = 4, sinC = 2/√5(0°<C<180° 라 양수). c = 2R·sinC = 2√5·(2/√5) = 4.
    내각 합 동치 변환이 문제의 전부라 EQV d1 · 이후는 한 줄(부호 판단 T-부호 1개). 유형 중 · 서술형 → ★2.
    [분류 이슈] sin(A+B)=sinC 골조는 0730(유형 03)과 같음 — 카탈로그에서 「내각의 합 활용」을 기법 태그로 둘지 독립 유형으로 세울지 결정 필요.
  tier: star_2
  mechanism_primary: "sin(A+B) = sinC → 5sin²C = 4 → sinC = 2/√5 → c = 2R·sinC = 2√5·(2/√5) → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0725.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "R 과 상수(5·4)를 바꿈. 제약: sin²C 가 (0, 1] 안이고 sinC 가 근호로 정리돼 2R·sinC 가 간단해지도록 R 을 맞춤(예 R=√5 ↔ sinC=2/√5)."
    creative: "(1) cos(A+B) = −cosC 로 바꿔 부호 함정 추가 후 코사인 → 사인 → 변(★2~3) (2) sin(B+C) 로 바꿔 a 를 묻기(★2) (3) 두 조건(예 sin(A+B) 값과 넓이)을 주어 두 변을 묻기(★3 · I-CON)."
```

```yaml
- id: RPM-ALG-0726
  page: 96
  vendor_label: "유형 02 사인법칙과 삼각형의 외접원"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사각형 ABCD 에서 A, B, D 를 지나는 원의 반지름이 3, B, C, D 를 지나는 원의 반지름이 6 일 때 sinA/sinC 의 값. 그림(두 원이 현 BD 를 공유) 있음.
  category: "공통현 BD 를 두 외접원의 사인법칙으로 두 번 표현 → 등치"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 원의 반지름 조건을 공통현 BD 로 묶어 BD = 2·3·sinA = 2·6·sinC 한 식으로 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 외접원의 공통현과 사인법칙(sinA/sinC = R₂/R₁)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    삼각형 ABD 의 외접원(R₁=3)에서 BD = 6·sinA, 삼각형 BCD 의 외접원(R₂=6)에서 BD = 12·sinC. 등치하면 sinA/sinC = 2.
    공통현 착안이 전부이고 계산은 없음(M_total 4). 벤더 상중 → ★3 출발 · 통찰 CON d1 있어 −1 미적용 → ★3.
    [분류 이슈] 통찰 1개 d1·M_total 4 라 실질 난이도는 ★2~3 경계. 라벨은 벤더 신호대로 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "BD = 2R₁·sinA = 6·sinA, BD = 2R₂·sinC = 12·sinC → 등치 → sinA/sinC = R₂/R₁ → 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0726.png"
  latex: latex-bank/rpm-alg/items/0726.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반지름을 바꿈(비만 답에 영향). 제약: 답 = R₂/R₁ 이므로 두 반지름의 비가 간단한 수. 그림은 두 원의 크기 비율만 갱신."
    creative: "(1) sinA/sinC 대신 BD 의 길이와 한 각을 주고 다른 각의 sin 을 묻기(★2) (2) 두 원의 반지름이 같으면 sinA = sinC → A = C 또는 A+C = 180° 두 경우(★3 · I-MI d1) (3) 사각형이 한 원에 내접(A+C=180°)하는 조건과 결합해 각을 확정(★4 · I-CON+I-VF)."
```

### 유형 03 사인법칙의 변형: 변의 길이의 비

```yaml
- id: RPM-ALG-0727
  page: 97
  vendor_label: "유형 03 사인법칙의 변형: 변의 길이의 비"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 A:B:C=1:2:3 일 때 a:b:c. 5지선다.
  category: "각의 비 → 각 확정 → a:b:c = sinA:sinB:sinC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 변형: 각의 비 → 변의 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 각의 합 180° 를 1:2:3 으로 나눠 A=30°, B=60°, C=90°. 변의 비는 사인의 비 → 1/2 : √3/2 : 1 = 1:√3:2 → ③.
    각을 정하는 단계와 사인비로 옮기는 단계 둘이라 −1 미적용, 유형 대표 출발점 ★2 유지. 통찰 없음.
  tier: star_2
  mechanism_primary: "A=30°, B=60°, C=90° → a:b:c = sin30°:sin60°:sin90° = 1/2:√3/2:1 → 1:√3:2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0727.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 비를 바꿈(1:1:2 → 45°·45°·90° · 1:1:1 → 정삼각형 · 1:2:9 → 15°·30°·135° 는 sin15° 라 불가). 제약: 세 각이 모두 특수각이 되는 비만 가능."
    creative: "(1) 변의 비를 주고 각의 비를 묻기 — 사인비만으로는 각을 못 정하고 코사인법칙이 필요(★2~3 · I-SC d1) (2) 각의 비와 한 변을 주고 둘레 묻기(★2) (3) 각의 비와 외접원 R 를 주고 넓이(★3 · 07-p2 방향)."
```

```yaml
- id: RPM-ALG-0728
  page: 97
  vendor_label: "유형 03 사인법칙의 변형: 변의 길이의 비"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 (a+b)/4 = (b+c)/5 = (c+a)/5 일 때 sinA:sinB:sinC. 5지선다.
  category: "비례식 = k → 연립으로 a:b:c → 사인의 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 변형: 변의 관계식 → 사인의 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비례식을 k 로 두고 세 식을 더하면 a+b+c = 7k, 각각 빼서 c=3k, a=2k, b=2k. 사인의 비는 변의 비 그대로 → 2:2:3 → ②.
    연립 정리 단계가 있어 Mₛ 2 · 통찰 없음. 중하 → ★1~2 중 M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "=k 로 두고 a+b=4k, b+c=5k, c+a=5k → 합 a+b+c=7k → a=2k, b=2k, c=3k → sinA:sinB:sinC = a:b:c = 2:2:3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0728.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 4·5·5 를 바꿈. 제약: 세 합에서 얻는 a, b, c 가 모두 양수이고 삼각형 부등식 만족(예 분모 3·4·5 → a+b+c=6k → c=3k, a=2k, b=k 로 a+b=c 퇴화 → 불가)."
    creative: "(1) 두 식만 주고 연립(0729 형 · ★2) (2) 사인의 비를 주고 변의 관계식을 묻는 역방향(★2) (3) 구한 변의 비로 가장 큰 각의 코사인까지(★2~3 · 코사인법칙 결합)."
```

```yaml
- id: RPM-ALG-0729
  page: 97
  vendor_label: "유형 03 사인법칙의 변형: 변의 길이의 비"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 3a−2b+c=0, a+2b−3c=0 일 때 sinB/sinA + sinC/sinB + sinA/sinC 의 값.
  category: "동차 연립 → a:b:c → 사인의 비를 변의 비로 → 분수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 변형: 변의 관계식 → 사인의 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 더하면 4a−2c=0 → c=2a, 첫 식에 넣어 b=5a/2 → a:b:c = 2:5:4. sin 의 비는 변의 비이므로 식은 b/a + c/b + a/c = 5/2 + 4/5 + 1/2 = 19/5.
    연립과 세 분수 합이 있어 Mₖ 2. 통찰 없음 · 유형 중 → ★2.
  tier: star_2
  mechanism_primary: "두 식 더해 c=2a → 대입 b=5a/2 → a:b:c=2:5:4 → b/a + c/b + a/c = 5/2+4/5+1/2 → 19/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{19}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0729.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 계수를 바꿈. 제약: 두 식이 독립이고 해가 양의 비(a:b:c 모두 양수)·삼각형 부등식(2+4>5 등) 만족, 분수 합이 정리되도록."
    creative: "(1) 세 식 중 하나를 비례식으로 바꾸기(0728 · ★2) (2) 묻는 식을 sin²A:sin²B:sin²C 나 (sinA+sinB)/sinC 로(★2) (3) 구한 변의 비로 가장 작은 각의 cos·최댓값 묻기(★3 · 코사인법칙 결합)."
```

```yaml
- id: RPM-ALG-0730
  page: 97
  vendor_label: "유형 03 사인법칙의 변형: 변의 길이의 비"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 sin(A+B):sin(B+C):sin(C+A)=5:4:7 일 때 (a²+b²+c²)/(ac) 의 값.
  category: "sin(A+B)=sinC 등 동치 변환 → c:a:b=5:4:7 → k 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin(A+B)=sinC, sin(B+C)=sinA, sin(C+A)=sinB 로 옮겨 조건을 sinC:sinA:sinB = 5:4:7, 즉 변의 비 c:a:b 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사인법칙의 변형: 내각의 합 활용 → 변의 비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내각의 합으로 sin(A+B)=sinC 등이라 sinC:sinA:sinB = 5:4:7 → c=5k, a=4k, b=7k. 대응 순서를 틀리면(a:b:c=5:4:7 로 읽으면) 답이 달라지는 함정(T-표기).
    (16+49+25)k²/(4k·5k) = 90/20 = 9/2. 동치 변환 EQV d1 · M_total 5 · 벤더 상중 → ★3.
    [분류 이슈] 0725 와 같은 sin(A+B)=sinC 골조가 유형 02·03 에 나뉘어 있음 — 카탈로그에서 기법 태그로 묶을지 결정.
  tier: star_3
  mechanism_primary: "sin(A+B)=sinC 등 → sinC:sinA:sinB = 5:4:7 → a=4k, b=7k, c=5k → (a²+b²+c²)/(ac) = 90k²/20k² → 9/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0730.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 5:4:7 을 바꿈. 제약: 대응이 뒤바뀐 뒤(c:a:b)의 세 값이 삼각형 부등식을 만족하고, 묻는 식의 분자·분모가 k² 로 약분되어 유리수가 되도록."
    creative: "(1) 묻는 식을 cosB 로 바꿔 코사인법칙까지 잇기(★3) (2) 외접원 R 를 추가해 실제 변의 길이·둘레·넓이를 묻기(★3) (3) 비 대신 합·곱 조건을 주면 개별 값이 안 정해져 출제 불가 — 비 형태 유지가 조건. 조건을 cos(A+B):… 로 바꾸면 부호 반전이 추가되고 변의 비로 못 옮겨 골조가 깨짐."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 26 · ★2 6 · ★3 2 · ★4 0 · ★5 0
- 통찰형 4(0722 I-RT · 0725 I-EQV · 0726 I-CON · 0730 I-EQV) · 절차형 30 · premium 0
- target_cohort: 하위권 26 · 중하위권 4(0719 · 0727 · 0728 · 0729) · 중위권 3(0722 · 0725 · 0730) · 중상위권 1(0726)
- type_hint 상위: 「사인법칙으로 변의 길이 구하기(두 각과 한 변)」 5 · 「외접원의 반지름과 사인법칙(a=2R sinA)」 5 · 「사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)」 4 · 「코사인법칙으로 변의 길이 구하기(두 변과 끼인각)」 3 · 「삼각형의 넓이(두 변과 끼인각)」 3 · 「평행사변형의 넓이(이웃한 두 변과 한 각)」 3
- 그림: 3문(`crop:fig-0721.png` · `crop:fig-0722.png` · `crop:fig-0726.png`)
- 벤더 신호 대비 조정: 유형 구역 −1 적용 4문(0720 · 0721 · 0723 · 0724 — 공식 한 번·경우 판단 없음·M_total 4). 대표문제 3문 중 0719·0727 은 ★2 유지, 0723 은 ★1.
- 전사 답 확인: 34문 모두 재계산 값이 전사 answer 와 일치.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 드리프트는 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0722 | 유형 01(사인법칙) 소속이나 골조는 「원에 내접 → 지름·R → 현 = 2R sin」으로 유형 02(외접원)에 가까움. 카탈로그 설계 때 소속 결정 | ★2 |
| RPM-ALG-0725 | sin(A+B)=sinC 동치 변환이 골조의 전부. 0730(유형 03)과 같은 기법이 두 유형에 나뉘어 있음 — 「내각의 합 활용」을 기법 태그로 둘지 독립 유형으로 세울지 결정 필요 | ★2 |
| RPM-ALG-0726 | 벤더 상중(★3)이나 통찰 CON d1 하나·계산 없음(M_total 4). 실질 난이도 ★2~3 경계, 라벨은 벤더 신호대로 ★3 | ★2 / ★3 |
| RPM-ALG-0730 | 0725 와 같은 sin(A+B)=sinC 골조 + 변의 비 대응(c:a:b) 함정. 벤더 상중 ★3 이나 EQV d1 하나라 ★3 하한 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「사인법칙으로 변의 길이 구하기(두 각과 한 변)」 5(0697~0699 · 0720 · 0721), 「외접원의 반지름과 사인법칙(a=2R sinA)」 5(0703~0705 · 0723 · 0724), 「사인법칙으로 각의 크기 구하기(두 변과 한 대각 · 두 해 판정)」 4(0700~0702 · 0719).
- 따로 세워야 할 유형: (a) 「사인법칙 · 각 구하기 · 두 해 판정」 — 둔각 해의 기각/인정 판단이 변의 길이 유형과 다른 함정(T-범위)을 만들며 I-VF 변형의 씨앗이 됨. (b) 「원에 내접하는 도형 · 지름·현과 2R sin」(0722) — 유형 01 안에 있지만 원의 성질 읽기(직각 원주각 → 지름)가 추가 골조. (c) 「두 외접원의 공통현」(0726) — I-CON 골조가 유형 02 의 다른 문항(공식 대입)과 다름. (d) 「삼각형 내각의 합 활용(sin(A+B)=sinC)」(0725 · 0730) — 유형 02·03 양쪽에 나오는 기법이라 독립 유형 또는 기법 태그.
- 통합해도 될 유형: 교과서 07-1 의 「두 각과 한 변 → 변」과 유형 01 의 0720·0721(세 번째 각을 먼저 구하는 것만 추가). 「외접원 R 구하기」(0703~0705)와 「R 로 변 구하기」(0723 · 0724)는 같은 a=2R sinA 공식의 양방향이라 한 유형의 하위 변형으로 충분. 「평행사변형의 넓이」와 「두 대각선 사각형의 넓이」는 공식만 다른 같은 층(★1)이라 「사각형의 넓이」 한 유형으로 묶고 공식을 변형 축으로 두면 됨.
- 유형 03 「변의 길이의 비」는 입력 형태(각의 비 0727 · 비례식 0728 · 연립 일차식 0729 · 내각의 합 변환 0730)가 변형 축이고 골조(a:b:c = sinA:sinB:sinC)는 하나. 카탈로그에서는 한 유형으로 두고 입력 형태를 숫자·창의 변형의 축으로 삼는 것이 자연스러움.
