---
name: mechanism-데이터-RPM-ALG-02-p2
description: RPM 대수 02 로그(2/3 · 유형 01~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 02 로그
  unit_code: ALG-02
  part: "2/3"
  extract_range: "20~24쪽 · 0146~0181"
  total_problems: 36
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 02 로그 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 02 로그 단원의 둘째 범위(20~24쪽 · 0146~0181 · 36문)를 다룬다. 「유형 01 로그의 정의」부터 「유형 09 상용로그의 값」까지 아홉 유형이 각 4문(대표문제 1 + 난이도 중하/중/상중 3)으로 놓인 유형별 기본 문제 구역이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·기출·서술형)로 나타나며, 이 범위는 전부 「유형」 구역이라 대표문제(난이도 없음)는 ★2, 중하는 ★1~2, 중은 ★2, 상중은 ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 서술형 태그 2문(0153·0176), 그림 1문(0180 · 상용로그표 7.6~7.8 행 × 5~9 열)이 있다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 통찰이 골조 전체인 문항(0157 망원 곱 · 0161 순환 사슬곱 · 0173 두 조건 통합)만 통찰형으로 두었고, 유형의 표준 절차에 해당하는 한 단계 전환(=k 치환 · 밑 통일 · 판별식 등)은 depth 1 로 기록하되 절차형으로 분류했다.

## 문항 데이터

### 유형 01 로그의 정의

```yaml
- id: RPM-ALG-0146
  page: 20
  vendor_label: "유형 01 로그의 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_{√3} a = 4, log_{1/9} b = −1/2 일 때 ab 의 값. 5지선다.
  category: "로그의 정의로 a, b 복원 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(로그 ↔ 지수 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a = (√3)^4 = 9, b = (1/9)^{−1/2} = 3 → ab = 27. 정의를 두 번 쓰는 것이 전부이고 밑이 √3·1/9 인 것만 다르다. 유형 대표문제 출발점 ★2 이나 통찰 없음·M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "log_{√3} a = 4 → a = (√3)^4 = 9 · log_{1/9} b = −1/2 → b = 9^{1/2} = 3 → ab = 27"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(√2, 1/8, 0.1)과 로그값(정수·분수·음수)을 바꿀 수 있음. 제약: a, b 가 유리수(가능하면 정수)로 떨어지고 ab 가 선택지에 맞는 값이 되도록 밑^값 이 정리돼야 함 · 밑 > 0, ≠ 1."
    creative: "(1) ab 대신 a/b 나 a²b 를 묻기(★1 유지) (2) 한 조건을 log_a 9 = 4 처럼 밑을 미지수로 두어 역방향 정의 적용(★2) (3) 조건 하나를 겹로그(0148 골조)로 바꾸면 M_s 상승 ★2."
```

```yaml
- id: RPM-ALG-0147
  page: 20
  vendor_label: "유형 01 로그의 정의"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_a (1/2) = 4/3 일 때 a^8 의 값. 단답.
  category: "정의로 지수식 전환 → 지수 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(로그 ↔ 지수 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a^{4/3} = 1/2 → a^8 = (a^{4/3})^6 = (1/2)^6 = 1/64. 지수 8 = (4/3)·6 을 맞추는 한 줄. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_a(1/2) = 4/3 → a^{4/3} = 1/2 → a^8 = (a^{4/3})^6 = 1/64"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{64}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그값(4/3 → 3/2, −2/5)과 묻는 지수(a^8 → a^6, a^{−4})를 바꿀 수 있음. 제약: 묻는 지수가 로그값의 정수배가 되어야 한 줄로 끝남(아니면 무리수 답)."
    creative: "(1) a 자체를 묻기 — 답이 (1/2)^{3/4} 거듭제곱근 꼴이라 표기 함정 ★1~2 (2) 조건 두 개(log_a 2 = p, log_b 2 = q)로 (ab)^k 를 묻기 → 지수법칙 결합 ★2 (3) 진수를 미지수로 바꿔 역방향(log_{1/2} a = 4/3)으로 두면 부호 함정 추가 ★2."
```

```yaml
- id: RPM-ALG-0148
  page: 20
  vendor_label: "유형 01 로그의 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_7{log_3(log_2 x)} = 0 을 만족시키는 x 의 값. 5지선다.
  category: "겹로그 바깥부터 벗기기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 겹로그 벗기기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    바깥 로그가 0 → 안이 1 → log_2 x = 3 → x = 8. 같은 정의를 세 번 벗기는 절차. 벤더 중(출발 ★2)이지만 통찰 없음·M_total 4 → ★1(벤더보다 1단 낮음 · 기록).
  tier: star_1
  mechanism_primary: "log_7(·) = 0 → log_3(log_2 x) = 1 → log_2 x = 3 → x = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 값(0 → 1)과 밑(7, 3, 2)을 바꿀 수 있음. 제약: 벗길 때마다 값이 양의 정수(밑의 거듭제곱)로 떨어지도록 안쪽 밑을 조정 · 최종 x 가 선택지 정수."
    creative: "(1) 두 겹으로 줄이면 ★1 그대로, 네 겹은 M_s 만 늘어 질 저하 (2) 겹로그 값이 양수가 되는 x 의 범위(정의 조건 결합)로 바꾸면 유형 02 골조와 결합 ★2 (3) log_2(log_2 x) = log_2 3 처럼 한 겹을 로그값으로 주면 동치 변환 한 단계 추가 ★2."
```

```yaml
- id: RPM-ALG-0149
  page: 20
  vendor_label: "유형 01 로그의 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x = log_4(3 − 2√2) 일 때 4^x + 4^{−x} 의 값. 5지선다.
  category: "정의로 4^x 복원 → 역수 유리화 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 로그값에서 지수식 값 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4^x = 3 − 2√2, 4^{−x} = 1/(3 − 2√2) = 3 + 2√2 → 합 6. x 를 구하지 않고 정의만으로 4^x 를 읽는 것과 분모 유리화 두 도구가 결합된다. M_total 4 이지만 정의·유리화 두 개념 결합이라 −1 을 적용하지 않고 벤더 중 → ★2 유지.
  tier: star_2
  mechanism_primary: "x = log_4(3−2√2) → 4^x = 3−2√2 → 4^{−x} = 3+2√2(유리화) → 합 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 켤레 곱이 1 인 무리수(2 − √3, 5 − 2√6)로 바꾸면 합이 정수. 제약: 진수 > 0 · (p − q√r)(p + q√r) = 1 이어야 역수가 켤레가 됨 · 밑은 임의."
    creative: "(1) 4^x − 4^{−x} 를 물어 부호·근호 답(−4√2)으로(★2) (2) 2^x + 2^{−x} 를 물으면 4^x = (√2 − 1)² 로 제곱근 분해 통찰 추가 ★3 (3) 켤레 곱이 1 이 아닌 진수로 바꾸면 유리화 계산만 늘어 질 저하."
```

### 유형 02 로그의 밑과 진수의 조건

```yaml
- id: RPM-ALG-0150
  page: 20
  vendor_label: "유형 02 로그의 밑과 진수의 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_{x−2}(−x² + 8x − 7) 이 정의되도록 하는 정수 x 의 개수. 5지선다.
  category: "밑 조건 ∩ 진수 조건 → 정수 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑과 진수의 조건 — 정수 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 x − 2 > 0, ≠ 1 → x > 2, x ≠ 3 · 진수 (x − 1)(x − 7) < 0 → 1 < x < 7. 교집합 2 < x < 7, x ≠ 3 → 4, 5, 6 의 3개. 밑 ≠ 1 누락(T-경계)이 유일한 함정. 유형 대표 출발점 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "밑 > 0, ≠ 1 → x > 2, x ≠ 3 · 진수 > 0 → 1 < x < 7 → 교집합 정수 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 일차식(x − 2 → x − 1, 2x − 5)과 진수 이차식의 근(1, 7 → 다른 정수 근)을 바꿀 수 있음. 제약: 밑 = 1 이 되는 x 가 진수 구간 안에 있어야 함정이 살아 있음 · 진수 이차식은 위로 볼록(최고차 음)으로 유지해야 유한 구간."
    creative: "(1) 밑을 |x − 2| 로 바꾸면 0153 골조(제외점 3개) ★2 (2) 밑을 상수·진수를 매개변수 이차식으로 바꾸면 0152 골조(판별식) ★2~3 (3) 「정의되지 않는 정수 x 의 개수」로 뒤집으면 여집합 해석 한 단계 ★2."
```

```yaml
- id: RPM-ALG-0151
  page: 20
  vendor_label: "유형 02 로그의 밑과 진수의 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2(x−1) + log_2(x−2) 가 정의될 때 |x−1| + |x−2| 를 간단히 한 것. 5지선다.
  category: "정의 조건 → 부호 확정 → 절댓값 풀기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「정의된다」를 x > 2 로 옮기고 그것을 x−1, x−2 의 부호 확정에 써서 절댓값을 벗김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그의 밑과 진수의 조건 — 정의역으로 절댓값 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 조건 x > 1, x > 2 → x > 2 → x − 1 > 0, x − 2 > 0 → 합 2x − 3. 「정의된다」를 x > 2 로 옮겨 절댓값 부호를 확정하는 동치 변환 한 단계(EQV d1)가 골조이고 나머지는 한 줄. 중하 출발 ★1~2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "정의 조건 → x > 2 → |x−1| = x−1, |x−2| = x−2 → 2x − 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 일차식의 상수(1, 2 → 3, 5)와 절댓값 식의 계수를 바꿀 수 있음. 제약: 정의역이 모든 절댓값 안의 부호를 한쪽으로 확정해야 함(하나라도 부호가 갈리면 케이스 분기가 생겨 ★ 상승)."
    creative: "(1) 절댓값 안에 부호가 갈리는 항(|x−4|)을 섞으면 구간 분할 필요 ★2~3 (2) 진수를 (x−1)(x−2) 곱으로 주면 x < 1 도 허용되어 두 구간 답 → I-MI 추가 ★3 (3) 밑에도 x 를 넣어 밑 조건까지 결합하면 M_t 상승 ★2."
```

```yaml
- id: RPM-ALG-0152
  page: 20
  vendor_label: "유형 02 로그의 밑과 진수의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 log_{a−3}(x² + ax + 2a) 가 정의되도록 하는 모든 정수 a 의 값의 합. 단답.
  category: "밑 조건 + 진수 항상 양(판별식) → 정수 a 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 실수 x 에서 진수 > 0」을 이차식 판별식 D < 0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그의 밑과 진수의 조건 — 모든 실수에서 정의(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 a − 3 > 0, ≠ 1 → a > 3, a ≠ 4 · 진수 x² + ax + 2a > 0 (모든 x) → D = a² − 8a < 0 → 0 < a < 8. 교집합 a = 5, 6, 7 → 합 18. 「모든 실수 x」를 D < 0 으로 옮기는 동치 변환(EQV d1)이 유일한 통찰이고 나머지는 0150 절차. 중 출발 ★2 · 통찰 1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑: a > 3, a ≠ 4 · 진수 항상 양: D = a² − 8a < 0 → 0 < a < 8 → a ∈ {5, 6, 7} → 18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 a − 3 (→ a − 1, 2a − 5)과 진수 x² + ax + 2a (→ x² + 2ax + 3a 등)를 바꿀 수 있음. 제약: 판별식 부등식의 해 구간이 밑 조건 구간과 겹치되 밑이 1 이 되는 a 가 그 안에 들어가야 함정이 살고, 정수해가 3~5개 정도."
    creative: "(1) 「합」 대신 「최댓값·최솟값」 ★2 (2) 진수를 −x² + ax − 2a (위로 볼록)로 바꾸면 항상 양이 불가능 → 「존재하지 않음」을 판정하는 I-BW ★3 (3) 밑에도 이차식을 두어 두 판별식 결합 ★3."
```

```yaml
- id: RPM-ALG-0153
  page: 20
  vendor_label: "유형 02 로그의 밑과 진수의 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    log_{|x−2|}(8 + 2x − x²) 이 정의되도록 하는 정수 x 의 개수. 서술형 단답.
  category: "절댓값 밑 조건(≠0, ≠1) ∩ 진수 조건 → 정수 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑과 진수의 조건 — 정수 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 |x−2| > 0, ≠ 1 → x ≠ 2, x ≠ 1, x ≠ 3 · 진수 −(x−4)(x+2) > 0 → −2 < x < 4. 정수 −1, 0, 1, 2, 3 에서 1, 2, 3 제외 → −1, 0 의 2개. 절댓값 밑이 제외점을 세 개(T-경계·T-범위)로 늘리는 것이 0150 과의 차이. 중·서술형 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "|x−2| > 0, ≠ 1 → x ∉ {1, 2, 3} · 진수 > 0 → −2 < x < 4 → 정수 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 |x − 2| (→ |x + 1|, |2x − 1|)과 진수 이차식의 근(−2, 4 → 다른 정수)을 바꿀 수 있음. 제약: 제외점 세 개(밑 = 0, ±1 해)가 모두 진수 구간 안에 있어야 함정이 최대 · 답 개수 ≥ 1."
    creative: "(1) 밑 |x−2| 를 x² − 4x + 4 처럼 완전제곱으로 위장(★2 · 밑 = 1 이 두 점) (2) 「정의되는 정수 x 를 모두 구하라」 서술형 유지 (3) 진수에 절댓값(|x| + 2 − x²)을 넣어 대칭 구간을 만들면 I-SYM 여지 ★3."
```

### 유형 03 로그의 성질

```yaml
- id: RPM-ALG-0154
  page: 21
  vendor_label: "유형 03 로그의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    5 log_5 ⁵√2 + log_5 √10 − (1/2) log_5 8 의 값. 단답.
  category: "지수 정리(상수배) → 진수 소인수 분해 → 합치기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질 — 합·차·상수배 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5 log_5 2^{1/5} = log_5 2, log_5 √10 = (1/2)(1 + log_5 2), (1/2) log_5 8 = (3/2) log_5 2 → (1 + 1/2 − 3/2) log_5 2 + 1/2 = 1/2. 10 = 2·5 분해로 log_5 5 = 1 을 꺼내는 것이 핵심. 대표문제 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "각 항을 k·log_5 2 + 상수 로 정리(√10 = √2·√5) → log_5 2 의 계수 합 0 → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5 → 3, 2)과 진수의 거듭제곱근 차수·계수를 바꿀 수 있음. 제약: 밑과 같은 소인수를 진수에 하나 섞어 log_a a = 1 이 나오게 하고, log_a p 의 계수 합이 0 또는 정수가 되도록 계수를 맞춤."
    creative: "(1) 계수 합을 0 이 아니게 두고 답을 log_5 2 의 식으로 묻기(★2) (2) 진수에 서로 다른 소인수 둘(2, 3)을 섞으면 두 로그값을 독립으로 정리 ★2 (3) 항 수를 5개 이상으로 늘리는 것은 M_k 만 올려 질 저하."
```

```yaml
- id: RPM-ALG-0155
  page: 21
  vendor_label: "유형 03 로그의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    로그의 성질을 쓴 다섯 등식 중 옳지 않은 것. 5지선다(세로).
  category: "보기별 로그 계산·검증"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질 — 합·차·상수배 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~③, ⑤ 는 정리하면 0, 1/2, 8, 4 로 성립하고 ④ 는 log_5 4 − 1 − 2(1 + log_5 2) = −3 이라 3 이 아니다. 각 보기가 0154 수준의 한 줄 계산이고 다섯 번 반복하는 것이 부담(M_k 2). 통찰 없음 · 중 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기를 k·log_a p + 상수 로 정리 → 값 비교 → ④ 가 −3 ≠ 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 밑·진수·계수를 바꿀 수 있음. 제약: 틀린 보기는 부호 하나(6 log_5 10^{−1/3} 의 음수)로만 틀리게 만들어야 검토 가치가 있음 · 옳은 보기의 값은 정수·간단한 분수."
    creative: "(1) 「옳은 것만 고른 것은」 ㄱㄴㄷ 형(★2) (2) 틀린 보기를 log_a b × log_a c = log_a bc 같은 성질 오용으로 만들면 개념 오류 진단 ★2 (3) 보기 하나를 밑 변환 필요(log_4 8)로 바꾸면 유형 04 결합 ★2."
```

```yaml
- id: RPM-ALG-0156
  page: 21
  vendor_label: "유형 03 로그의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 양수 x, y, z 가 log_5 x + 2 log_5 √y − 2 log_5 z = 2 를 만족할 때 xy/z² 의 값. 단답.
  category: "로그 합치기 → 정의로 진수 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질 — 합·차·상수배 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2 log_5 √y = log_5 y 로 정리하면 좌변이 log_5 (xy/z²) 이고 = 2 → 25. 묻는 식이 정확히 합친 진수라 한 줄. 벤더 중(출발 ★2)이지만 통찰 없음 · M_total 4 → ★1(벤더보다 1단 낮음 · 기록).
  tier: star_1
  mechanism_primary: "2 log_5 √y = log_5 y → log_5 (xy/z²) = 2 → xy/z² = 25"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$25$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5 → 2, 3)·계수(2, −2 → 3, −1)·우변 값을 바꿀 수 있음. 제약: 묻는 식의 지수가 합친 진수와 일치하거나 그 거듭제곱이 되도록 계수를 맞춤 · 양수 조건 유지."
    creative: "(1) 묻는 식을 합친 진수의 제곱근(√(xy)/z)으로 두면 지수 나누기 한 단계 ★1~2 (2) 조건 두 개(x, y, z 로그의 연립)로 x/y 등을 묻기 → 연립 해석 ★2 (3) 우변을 log_5 a 꼴로 주면 진수 비교 ★2."
```

```yaml
- id: RPM-ALG-0157
  page: 21
  vendor_label: "유형 03 로그의 성질"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2(1 − 1/2) + log_2(1 − 1/3) + … + log_2(1 − 1/32) 의 값. 단답.
  category: "합 → 곱의 로그 → 연쇄 약분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1 − 1/k = (k−1)/k 로 고치면 곱 1/2·2/3·…·31/32 가 연쇄 약분되어 1/32 만 남는 규칙 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그의 성질 — 연쇄 약분(망원 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 항 1 − 1/k = (k−1)/k → 합 = log_2 ∏(k−1)/k = log_2 (1/32) = −5. 로그 성질(합 → 곱)은 절차이고 곱이 망원(연쇄 약분)됨을 보는 것이 유일하지만 결정적인 통찰(PD d1). 상중 출발 ★3 · 통찰이 골조 전체라 유지. [분류 이슈] M_total 4 라 통찰 인정 여부에 따라 ★2/★3 갈림.
  tier: star_3
  mechanism_primary: "1 − 1/k = (k−1)/k → 합 = log_2 ∏_{k=2}^{32} (k−1)/k = log_2 (1/32) → −5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3)·끝항(32 → 81 이면 log_3 (1/81) = −4)을 바꿀 수 있음. 제약: 마지막 분모가 밑의 거듭제곱이어야 정수 답 · 첫 항은 k = 2 부터."
    creative: "(1) 1 + 1/k = (k+1)/k 로 바꾸면 곱이 (n+1)/2 → 시작·끝 조정 필요 ★3 (2) log_2 (1 − 1/k²) = log_2 ((k−1)(k+1)/k²) 두 사슬 망원 ★4 (3) 항을 log_k (k+1) 사슬곱(0158 골조)으로 바꾸면 밑 변환 결합 ★3."
```

### 유형 04 로그의 밑의 변환

```yaml
- id: RPM-ALG-0158
  page: 21
  vendor_label: "유형 04 로그의 밑의 변환"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_3 5 × log_5 7 × log_7 9 의 값. 단답.
  category: "사슬곱 → 밑 변환으로 소거"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑의 변환 — 사슬곱·역수 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 변환으로 log_3 5·log_5 7·log_7 9 = log_3 9 = 2. 가운데 밑·진수가 차례로 소거되는 정의 그대로의 사슬. 대표문제(출발 ★2)이지만 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_a b · log_b c · log_c d = log_a d → log_3 9 = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사슬 길이(3 → 4항)와 끝 진수(9 → 27, 1/9)를 바꿀 수 있음. 제약: 처음 밑과 마지막 진수가 같은 소수의 거듭제곱이어야 정수(또는 간단한 분수) 답."
    creative: "(1) 진수에 거듭제곱(log_9 5 × log_25 7 × log_49 27)을 섞으면 계수 정리 추가 ★2 (2) 사슬의 한 항을 역수(1/log_7 5)로 바꾸면 역수 공식 결합(0159) ★2 (3) 사슬이 원래 밑으로 돌아오게(log_2 3·log_3 7·log_7 2 = 1) 하면 0161 골조 ★2~3."
```

```yaml
- id: RPM-ALG-0159
  page: 21
  vendor_label: "유형 04 로그의 밑의 변환"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/log_2 12 + 1/log_3 12 + 1/log_24 12 의 값. 단답.
  category: "역수 공식 → 밑 12 로 통일 → 합치기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑의 변환 — 사슬곱·역수 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/log_a b = log_b a 로 뒤집으면 log_12 2 + log_12 3 + log_12 24 = log_12 144 = 2. 역수 공식과 합치기 두 성질이지만 각 한 줄. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/log_a 12 = log_12 a → log_12 (2·3·24) = log_12 144 = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 진수(12 → 6, 10)와 밑들(2, 3, 24)을 바꿀 수 있음. 제약: 밑들의 곱이 공통 진수의 거듭제곱(2·3·24 = 12²)이어야 정수 답."
    creative: "(1) 한 항을 빼기(−1/log_6 12)로 두면 나눗셈 처리 ★1~2 (2) 밑들의 곱을 진수의 거듭제곱이 아닌 수로 두고 답을 로그로 남기면 ★2 (3) 항 수를 문자 n 으로 일반화(밑 1, 2, …, n)하면 곱 n! 패턴 → I-PD ★3."
```

```yaml
- id: RPM-ALG-0160
  page: 21
  vendor_label: "유형 04 로그의 밑의 변환"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1 이 아닌 세 양수 a, b, c 에 대해 log_c a = 2, log_b c = 3 일 때 70 log_{√(ab)} c 의 값. 단답.
  category: "밑 c 로 통일 → 역수·합치기 → 값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑의 변환 — 조건 로그값에서 다른 로그값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{√(ab)} c = 1/log_c √(ab) = 1/((1/2)(log_c a + log_c b)) 이고 log_c b = 1/log_b c = 1/3 → 1/((1/2)(2 + 1/3)) = 6/7 → 70·6/7 = 60. 밑을 c 로 통일하는 결정이 골조이나 조건이 이미 c 기준이라 표준 절차. a = c², c = b³ 로 지수 치환해도 같은 길이(다른 풀이). 중 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "log_c b = 1/3 → log_c √(ab) = (1/2)(2 + 1/3) = 7/6 → 역수 6/7 → ×70 = 60"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$60$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값(2, 3 → 다른 양의 유리수)과 앞 계수(70)를 바꿀 수 있음. 제약: 앞 계수는 (1/2)(p + 1/q) 의 역수 분모의 배수로 두어 정수 답 · a, b, c ≠ 1, > 0."
    creative: "(1) 묻는 로그의 밑을 ab²·√(a/b) 처럼 바꿔 부호(뺄셈) 추가 ★2 (2) 조건을 a = c², c = b³ 지수식으로 주면 로그 전환(I-RT d1) ★2 (3) 조건 하나를 log_a b = k 매개변수로 남기고 답을 k 로 표현 → M_a 상승 ★3."
```

```yaml
- id: RPM-ALG-0161
  page: 21
  vendor_label: "유형 04 로그의 밑의 변환"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_a(log_2 9) + log_a(log_7 16) + log_a(log_3 49) = 2 일 때 양수 a 의 값. 단답.
  category: "합치기 → 진수 안 로그의 사슬곱 → 정의"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "진수 안 세 로그를 2·log_2 3, 4·log_7 2, 2·log_3 7 로 풀어 순환 사슬곱 log_2 3·log_3 7·log_7 2 = 1 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그의 밑의 변환 — 진수 안 로그의 사슬곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변 = log_a (log_2 9 · log_7 16 · log_3 49) 이고 진수 안 곱 = 2·4·2 · (log_2 3 · log_3 7 · log_7 2) = 16·1 = 16 → log_a 16 = 2 → a = 4. 진수 안 로그가 밑·진수를 돌아가며(2→3→7→2) 사슬을 이루어 곱이 1 이 되는 구조를 봐야 하는 통찰(RT d2). 상중 출발 ★3 · 통찰 1(d2) → ★3. [분류 이슈] 통찰 유형이 RT(재배열)·PD(순환 구조)·SYM(순환 대칭) 사이에 걸침.
  tier: star_3
  mechanism_primary: "합치기 → 진수 = 16·(log_2 3·log_3 7·log_7 2) = 16 → log_a 16 = 2 → a = 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순환 소수 셋(2, 3, 7 → 2, 5, 11)과 거듭제곱 지수(9, 16, 49 → 다른 제곱·세제곱)를 바꿀 수 있음. 제약: 밑·진수가 한 바퀴 순환해야 곱이 1 · 지수 곱이 정수의 제곱(우변 2 일 때)이 되어야 a 가 정수."
    creative: "(1) 우변 2 → 3 이면 a = ∛16 → 답 형태 함정 ★3 (2) 순환 대신 사슬이 열린 채(log_2 9·log_3 16 = 8) 두면 사슬곱만 ★2 (3) 합이 아니라 세 로그값의 곱을 주면 성질 오용 유도 ★3."
```

### 유형 05 로그의 여러 가지 성질

```yaml
- id: RPM-ALG-0162
  page: 22
  vendor_label: "유형 05 로그의 여러 가지 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    27^{4 log_9 2 + log_3 4 − log_3 8} 의 값. 단답.
  category: "지수의 로그를 밑 3 으로 정리 → a^{log_a b}"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 여러 가지 성질 — log_{a^m} b^n · a^{log_a b} 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4 log_9 2 = 2 log_3 2 = log_3 4 → 지수 = log_3 (4·4/8) = log_3 2 → 27^{log_3 2} = 3^{3 log_3 2} = 2³ = 8. 밑 9 → 3 변환과 27 = 3³ 을 지수로 올리는 두 정리. 대표 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "4 log_9 2 = log_3 4 → 지수 = log_3 2 → 27^{log_3 2} = (3^{log_3 2})³ = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(27 → 9, 81)·지수 안 로그들의 밑·진수·계수를 바꿀 수 있음. 제약: 지수가 log_3 (단일 수) 로 합쳐지고 그 수의 (27 의 지수)제곱이 정수가 되게 조정 · 밑 9 와 3 처럼 거듭제곱 관계인 밑을 하나 섞음."
    creative: "(1) 밑과 진수를 바꾸는 a^{log_b c} = c^{log_b a} 성질을 써야 하는 2^{log_3 27} 형 ★2 (2) 지수에 log_3 x 를 남겨 값이 아닌 x 의 식을 묻기 ★2 (3) 27^{…} 대신 (1/27)^{…} 로 부호 함정 ★2."
```

```yaml
- id: RPM-ALG-0163
  page: 22
  vendor_label: "유형 05 로그의 여러 가지 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2 81 + log_4 9 − log_8 9 = a log_2 3 일 때 상수 a 의 값. 5지선다.
  category: "각 항을 log_2 3 의 상수배로 → 계수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 여러 가지 성질 — log_{a^m} b^n · a^{log_a b} 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4 log_2 3 + (2/2) log_2 3 − (2/3) log_2 3 = (13/3) log_2 3 → a = 13/3. log_{2^m} 3^n = (n/m) log_2 3 한 성질의 반복. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_{2^m} 3^n = (n/m) log_2 3 → 4 + 1 − 2/3 = 13/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 지수(2, 4, 8)와 진수의 지수(81, 9, 9)를 바꿀 수 있음. 제약: 계수 합이 선택지에 맞는 기약분수 · 부호 하나는 음수로 유지해 T-부호 보존."
    creative: "(1) 우변을 a log_4 3 처럼 다른 밑으로 두면 마지막 변환 한 단계 추가 ★2 (2) 진수에 6 (= 2·3) 을 섞어 상수항이 생기면 「a log_2 3 + b」 두 미지수 ★2 (3) 항 수만 늘리면 M_k 상승·질 저하."
```

```yaml
- id: RPM-ALG-0164
  page: 22
  vendor_label: "유형 05 로그의 여러 가지 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (log_3 5 + log_9 (1/5))(log_5 √(1/3) + log_25 9) 의 값. 단답.
  category: "괄호별로 log_3 5·log_5 3 의 상수배로 정리 → 역수 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 여러 가지 성질 — log_{a^m} b^n · a^{log_a b} 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 괄호 = log_3 5 − (1/2) log_3 5 = (1/2) log_3 5, 둘째 = −(1/2) log_5 3 + log_5 3 = (1/2) log_5 3 → 곱 = (1/4)·log_3 5·log_5 3 = 1/4. 밑 변환 정리와 log_3 5·log_5 3 = 1 역수 관계 두 도구에 음수 진수 지수(1/5, √(1/3))의 부호 함정. M_total 4 이나 두 개념 결합이라 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 1 = (1/2) log_3 5 · 괄호 2 = (1/2) log_5 3 → 곱 = (1/4)·(log_3 5·log_5 3) = 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3, 5 쌍(→ 2, 7)과 각 항의 밑 지수·진수 지수를 바꿀 수 있음. 제약: 두 괄호가 각각 log_3 5, log_5 3 의 상수배 하나로 정리되어야 곱이 유리수 · 괄호 안 계수가 0 이 되지 않게."
    creative: "(1) 한 괄호에 상수항(log_3 15)을 섞어 곱이 log_3 5 의 일차식이 되면 ★2~3 (2) 괄호 대신 분수(첫 괄호/둘째 괄호)로 두면 log_3 5 의 제곱 ★2 (3) log_3 5 = t 로 두고 t 의 식으로 묻기 → M_a 상승 ★2."
```

```yaml
- id: RPM-ALG-0165
  page: 22
  vendor_label: "유형 05 로그의 여러 가지 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 수 A = 3^{1 − log_3 2}, B = log_2 3 × log_3 4, C = log_4 2 + log_9 3 의 대소 비교. 단답.
  category: "각 수를 값으로 계산 → 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 여러 가지 성질 — log_{a^m} b^n · a^{log_a b} 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A = 3/3^{log_3 2} = 3/2, B = log_2 4 = 2, C = 1/2 + 1/2 = 1 → C < A < B. 지수 안 로그·사슬곱·밑 변환 세 성질을 각각 한 번씩 쓰는 절차. 중 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A = 3/2 (a^{log_a b}) · B = log_2 4 = 2 (사슬곱) · C = 1/2 + 1/2 = 1 → C < A < B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$C<A<B$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 수의 밑·진수를 바꿔 값(3/2, 2, 1)을 다른 유리수로. 제약: 세 값이 서로 다르고 크기 순서가 A, B, C 순과 어긋나게(단순 순서 답 방지) · 각 값이 유리수로 떨어져야 함."
    creative: "(1) 한 수를 유리수로 떨어지지 않게(log_2 3) 두면 크기 어림(1 < log_2 3 < 2)이 필요 → I-EQV ★3 (2) 두 수를 같게 두어 「같은 것끼리 짝짓기」 ★2 (3) 대소 비교 대신 세 수의 합·곱 ★2."
```

### 유형 06 로그의 성질의 활용

```yaml
- id: RPM-ALG-0166
  page: 22
  vendor_label: "유형 06 로그의 성질의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log_7 2 = a, log_7 3 = b 일 때 log_12 √24 를 a, b 로 나타낸 것. 5지선다.
  category: "밑 7 로 변환 → 진수 소인수 분해 → a, b 식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질의 활용 — 주어진 로그값을 문자로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_12 √24 = (1/2)·log_7 24/log_7 12 = (1/2)(3a + b)/(2a + b). 밑 7 변환 뒤 24 = 2³·3, 12 = 2²·3 분해. 대표 출발 ★2 · M_total 6 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "log_12 √24 = (1/2) log_7 24 / log_7 12 → 24 = 2³·3, 12 = 2²·3 → (3a + b)/(2(2a + b))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 밑(7 → 5, 10)과 묻는 로그의 밑·진수(12, √24 → 18, ∛12)를 바꿀 수 있음. 제약: 묻는 밑·진수가 2, 3 (과 밑 7)만의 소인수로 구성되어야 a, b 로 닫힘 · 근호는 계수 1/2, 1/3 만."
    creative: "(1) 진수에 7 을 섞어(log_12 42) 상수항 1 이 생기면 ★2 (2) 두 조건의 밑을 서로 다르게(log_2 7 = a, log_3 7 = b) 주면 역수 통일 한 단계(0168 골조) ★2~3 (3) 답을 a, b 로 두고 「a + b 의 값이 …일 때」 역방향 ★3."
```

```yaml
- id: RPM-ALG-0167
  page: 22
  vendor_label: "유형 06 로그의 성질의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    10^a = x, 10^b = y, 10^c = z 일 때 log_10 (x² z⁴ / y³) 을 a, b, c 로 나타내기. 단답.
  category: "지수식 → 상용로그 → 성질로 전개"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질의 활용 — 주어진 로그값을 문자로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log x = a, log y = b, log z = c 로 옮기고 성질로 전개하면 2a − 3b + 4c. 정의 전환과 전개 두 단계. 중 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "10^a = x → log x = a → log (x²z⁴/y³) = 2 log x − 3 log y + 4 log z = 2a − 3b + 4c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2a-3b+4c$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(2, 4, 3)와 나누는 항의 위치를 바꿀 수 있음. 제약: 부호 하나는 음수(분모)로 유지 · 밑 10 이 아닌 밑을 써도 답 형태 동일."
    creative: "(1) 진수에 근호·상수(√(1000 x²))를 섞어 상수항 추가 ★2 (2) 조건을 2^a = x, 4^b = y 로 밑을 다르게 주면 밑 변환 결합 ★2~3 (3) 역방향: 로그값이 주어질 때 x²z⁴/y³ 의 값 ★2."
```

```yaml
- id: RPM-ALG-0168
  page: 22
  vendor_label: "유형 06 로그의 성질의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2 5 = a, log_5 3 = b 일 때 log_6 45 를 a, b 로 나타내기. 단답.
  category: "다른 밑의 두 조건 → 밑 2 로 통일(log_2 3 = ab) → 밑 변환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑이 다른 두 조건을 사슬곱 log_2 3 = log_2 5·log_5 3 = ab 로 통일"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그의 성질의 활용 — 주어진 로그값을 문자로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 3 = ab 로 만든 뒤 log_6 45 = log_2 45/log_2 6 = (2 log_2 3 + log_2 5)/(1 + log_2 3) = (2ab + a)/(ab + 1). 0166 과 달리 조건의 밑이 다르므로 먼저 통일해야 하는 동치 변환(EQV d1)이 유형의 차이. 중 출발 ★2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "log_2 3 = ab → log_6 45 = (2 log_2 3 + log_2 5)/(log_2 2 + log_2 3) = (2ab + a)/(ab + 1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{2ab+a}{ab+1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 밑·진수 쌍(2→5, 5→3)과 묻는 로그(log_6 45 → log_15 12)를 바꿀 수 있음. 제약: 두 조건이 사슬(첫 진수 = 둘째 밑)을 이루어야 곱으로 통일됨 · 묻는 로그의 소인수가 {2, 3, 5} 안."
    creative: "(1) 사슬이 아닌 두 조건(log_2 5 = a, log_3 5 = b)이면 역수로 통일 → 답이 분수의 분수 ★3 (2) 세 조건으로 늘리면 M_k 만 상승 (3) 답을 준 뒤 a, b 관계식을 묻는 역방향 ★3."
```

```yaml
- id: RPM-ALG-0169
  page: 22
  vendor_label: "유형 06 로그의 성질의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log_2 3 = a 일 때 log_3 √(6√6) − log_6 √(3√3) 을 a 로 나타내기. 단답.
  category: "겹근호 → 지수 3/4 → log_3 6 과 역수를 a 로 → 통분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질의 활용 — 주어진 로그값을 문자로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √(6√6) = 6^{3/4}, √(3√3) = 3^{3/4} → 식 = (3/4)(log_3 6 − 1/log_3 6), log_3 6 = 1 + 1/a = (a+1)/a → (3/4)·((a+1)² − a²)/(a(a+1)) = 3(2a+1)/(4a(a+1)). 겹근호 정리·역수 공식·분수 통분이 겹치는 계산 부담(M_k 2)이 난이도의 원천이고 새 통찰은 없다. 상중 출발 ★3 · M_total 7 → ★3. [분류 이슈] 절차형이지만 계산 마찰로 ★3 — 카탈로그 base 결정 시 ★2 로 볼 여지.
  tier: star_3
  mechanism_primary: "겹근호 → 6^{3/4}, 3^{3/4} → (3/4)(t − 1/t), t = log_3 6 = (a+1)/a → 3(2a+1)/(4a(a+1))"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3(2a+1)}{4a(a+1)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "겹근호 깊이(√(6√6) → ∛(6√6) = 6^{1/2})와 쌍(3, 6 → 2, 6)을 바꿀 수 있음. 제약: 두 항이 log_p q 와 log_q p 의 켤레 꼴이어야 t − 1/t 로 정리됨 · 지수는 유리수로 유지."
    creative: "(1) 두 항을 합(t + 1/t)으로 바꾸면 부호 함정 제거 ★2~3 (2) 겹근호를 지수 표기(6^{3/4})로 바로 주면 M_k 감소 ★2 (3) 답을 준 뒤 「a 의 값」을 묻는 역방향은 분수 방정식 → ★3~4."
```

### 유형 07 조건을 이용하여 식의 값 구하기

```yaml
- id: RPM-ALG-0170
  page: 23
  vendor_label: "유형 07 조건을 이용하여 식의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0 이 아닌 세 실수 x, y, z 가 5^x = 2^y = √(10^z) 일 때 1/x + 1/y − 2/z 의 값. 단답.
  category: "= k 로 놓기 → 1/x 를 로그로 → 5·2 = 10 관계로 소거"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5^x = 2^y = 10^{z/2} = k 로 놓아 1/x = log_k 5, 1/y = log_k 2, 2/z = log_k 10 로 지수 등식을 로그(역수)로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 이용한 식의 값 — 지수 등식(=k)과 로그 역수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통값을 k 로 두면 1/x = log_k 5, 1/y = log_k 2, 2/z = log_k 10 이고 log_k 5 + log_k 2 = log_k 10 이라 0. 지수 연쇄 등식을 k 밑의 로그(역수)로 옮기는 전환(RT d1)이 이 유형의 골조. 대표 출발 ★2 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "5^x = 2^y = 10^{z/2} = k → 1/x = log_k 5, 1/y = log_k 2, 2/z = log_k 10 → log_k (5·2/10) = 0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 세 개(5, 2, 10 → 3, 4, 12)와 근호 지수(1/2 → 1/3)를 바꿀 수 있음. 제약: 두 밑의 곱(또는 거듭제곱 곱)이 셋째 밑이 되어야 소거됨 · 묻는 식의 계수가 지수 관계와 맞아야 함(z 앞 2 는 √ 에서 옴)."
    creative: "(1) 값이 0 이 아니게(5^x = 2^y = 20^z 이면 2/x + 1/y − 1/z = 0 로 계수 조정) ★2 (2) 조건에 z 대신 xyz = k 관계를 주고 x, y 만으로 z 를 묻기 ★3 (3) 지수를 로그로 바꾸지 않고 밑을 k 의 거듭제곱으로 표현하는 다른 풀이를 비교시키면 I-SC 여지 ★3."
```

```yaml
- id: RPM-ALG-0171
  page: 23
  vendor_label: "유형 07 조건을 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    108^x = 27, 4^y = 81 일 때 3/x − 4/y 의 값. 단답.
  category: "역수 지수 → 로그 → 밑 3 으로 통일 → 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "108^x = 27 → 3/x = 3 log_27 108 = log_3 108 로 지수 등식을 로그 역수로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 이용한 식의 값 — 지수 등식(=k)과 로그 역수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3/x = log_3 108 = 3 + 2 log_3 2, 4/y = 4 log_81 4 = log_3 4 = 2 log_3 2 → 차 3. 0170 과 같은 역수 전환이며 진수 108 = 4·27 분해가 소거를 만든다. 중 출발 ★2 · 통찰 1 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "3/x = log_3 108 = 3 + 2 log_3 2 · 4/y = log_3 4 = 2 log_3 2 → 차 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·우변(108, 27 / 4, 81)과 분자 계수(3, 4)를 바꿀 수 있음. 제약: 밑들이 3 과 2 의 곱으로 이루어지고 계수가 log_3 (밑)^계수 를 정수·log_3 2 항으로 정리해 log_3 2 항이 소거되게."
    creative: "(1) 소거되지 않게 두고 「log_3 2 = a 로 나타내라」 로 바꾸면 유형 06 결합 ★2 (2) 조건을 하나로 합쳐 108^x = 4^y 로 주고 x/y 를 묻기 ★2 (3) 미지수 밑(a^x = 27, b^y = 81, ab = …)으로 두면 I-CON ★3."
```

```yaml
- id: RPM-ALG-0172
  page: 23
  vendor_label: "유형 07 조건을 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    양수 a, b (a ≠ 1) 에 대해 a²b⁵ = 1 일 때 log_a a⁷b¹⁰ 의 값. 단답.
  category: "곱 조건 → log_a 취해 log_a b 값 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱 조건 a²b⁵ = 1 에 log_a 를 취해 log_a b = −2/5 로 전환(또는 b¹⁰ = a⁻⁴ 지수 소거)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 이용한 식의 값 — 지수 등식(=k)과 로그 역수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_a (a²b⁵) = 0 → log_a b = −2/5 → 7 + 10·(−2/5) = 3. 또는 b¹⁰ = (b⁵)² = a⁻⁴ 로 바로 a⁷b¹⁰ = a³. 곱 조건을 로그(또는 지수) 관계로 옮기는 전환(RT d1) 한 단계. 중 출발 ★2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "a²b⁵ = 1 → 2 + 5 log_a b = 0 → log_a b = −2/5 → 7 + 10 log_a b = 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 지수(2, 5)와 묻는 지수(7, 10)를 바꿀 수 있음. 제약: 답 = p − q·(m/n) 이 정수가 되도록 묻는 b 의 지수가 조건 b 지수의 배수 · a ≠ 1 명시 유지."
    creative: "(1) log_b (a³b²) 처럼 밑을 b 로 바꾸면 역수 한 단계 추가 ★2 (2) 조건을 a²b⁵ = c 처럼 셋째 문자로 두면 답이 log_a c 식 ★2~3 (3) 두 조건(a²b⁵ = 1, a b^k = …)에서 k 를 묻는 역방향 → I-BW ★3."
```

```yaml
- id: RPM-ALG-0173
  page: 23
  vendor_label: "유형 07 조건을 이용하여 식의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 양수 a, b, c 가 ㈎ ⁸√a = ⁴√b = √c, ㈏ log_4 a + log_16 b + log_64 c = 8/3 을 만족할 때 log_2 abc 의 값. 단답.
  category: "㈎ 를 k 로 매개변수화 → ㈏ 를 log_2 k 일차식 → abc"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 의 연쇄 등식을 k 로 놓아 a = k⁸, b = k⁴, c = k² 로 통합하고 ㈏ 를 t = log_2 k 하나의 일차식으로 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건을 이용한 식의 값 — 지수 등식(=k)과 로그 역수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ → a = k⁸, b = k⁴, c = k² · ㈏ → (8/2 + 4/4 + 2/6) log_2 k = (16/3) t = 8/3 → t = 1/2 → log_2 abc = 14 t = 7. 두 조건을 하나의 미지수 t 로 통합하는 조건 통합(CON d2)이 골조이고 밑 4, 16, 64 → 2 변환은 절차. 상중 출발 ★3 · 통찰 1(d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "㈎ → a = k⁸, b = k⁴, c = k² · ㈏ → (4 + 1 + 1/3) log_2 k = 8/3 → log_2 k = 1/2 → log_2 abc = 14·(1/2) = 7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 근호 차수(8, 4, 2 → 6, 3, 2)·㈏ 의 밑(4, 16, 64)과 우변을 바꿀 수 있음. 제약: ㈏ 의 계수 합 × t = 우변 에서 t 가 간단한 유리수 · log_2 abc = (차수 합)·t 가 정수."
    creative: "(1) ㈎ 를 log_2 a : log_2 b : log_2 c = 4 : 2 : 1 비례식으로 주면 같은 골조에 표현만 변경 ★3 (2) ㈏ 를 abc = 2⁷ 로 주고 log_2 a 를 묻는 역방향 ★3 (3) 조건 두 개 중 하나를 부등식으로 바꾸면 범위 문제 → I-MI 여지 ★4."
```

### 유형 08 로그와 이차방정식

```yaml
- id: RPM-ALG-0174
  page: 23
  vendor_label: "유형 08 로그와 이차방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x² − 6x + 3 = 0 의 두 근이 log a, log b 일 때 log_a b + log_b a 의 값. 5지선다.
  category: "근과 계수 → 밑 변환으로 log a, log b 대칭식 → 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log_a b + log_b a 를 밑 변환으로 ((log a)² + (log b)²)/(log a·log b) 대칭식으로 바꿔 근과 계수의 관계(이차방정식 단원)로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log a + log b = 6, log a·log b = 3 → 식 = ((log a)² + (log b)²)/(log a·log b) = (36 − 6)/3 = 10. 밑 변환으로 대칭식을 만든 뒤 근과 계수의 관계를 쓰는 단원 결합(XU d1)이 이 유형의 정의 자체. 대표 출발 ★2 · 통찰 1(d1) → ★2. [분류 이슈] 유형 자체가 결합 유형이라 카탈로그에서는 XU 를 base 에 흡수할지 결정 필요.
  tier: star_2
  mechanism_primary: "log a + log b = 6, log a·log b = 3 → log_a b + log_b a = ((log a)² + (log b)²)/(log a·log b) = (36 − 6)/3 = 10"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식 계수(6, 3)를 바꿀 수 있음. 제약: 근이 실수(D ≥ 0)이고 곱 ≠ 0 · (합² − 2곱)/곱 이 선택지 정수."
    creative: "(1) (log_a b)² + (log_b a)² 를 물어 대칭식 한 단계 더 ★3 (2) 두 근을 log_2 a, log_2 b 로 두고 ab, a^b 등을 묻기 ★2 (3) 역방향: log_a b + log_b a = 10 일 때 이차방정식의 계수 → I-BW ★3."
```

```yaml
- id: RPM-ALG-0175
  page: 23
  vendor_label: "유형 08 로그와 이차방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x² − 10x + 8 = 0 의 두 근 α, β 에 대해 log_2 α + log_2 β 의 값. 단답.
  category: "근의 곱 → 로그 합치기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    αβ = 8 → log_2 α + log_2 β = log_2 αβ = 3. 근의 곱 하나와 합치기 한 줄(두 근이 양수임은 합·곱 부호로 확인). 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "αβ = 8 → log_2 α + log_2 β = log_2 8 = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(8 → 밑의 거듭제곱)과 밑을 바꿀 수 있음. 제약: 두 근이 모두 양수(합 > 0, 곱 > 0, D ≥ 0)여야 로그가 정의됨 · 곱이 밑의 거듭제곱이면 정수 답."
    creative: "(1) log_2 (α + β) − log_2 αβ 처럼 합·곱 둘 다 쓰게 ★1~2 (2) 진수 조건이 깨지는 방정식(근 하나 음수)을 주고 「정의되지 않는 이유」 서술 → I-VF ★2~3 (3) log_α β + log_β α 로 바꾸면 0174 골조 ★2."
```

```yaml
- id: RPM-ALG-0176
  page: 23
  vendor_label: "유형 08 로그와 이차방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x² − 2x log_2 3 + 1 = 0 의 두 근 α, β 에 대해 2^{α+β−αβ} 의 값. 서술형 단답.
  category: "근과 계수(합·곱) → 지수에 대입 → a^{log_a b}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α + β = 2 log_2 3, αβ = 1 → 2^{2 log_2 3 − 1} = 9/2. 근과 계수와 2^{log_2 9}·2^{−1} 정리 두 개념. 중·서술형 출발 ★2 · M_total 4 이나 두 단원 도구 결합이라 −1 미적용 → ★2.
  tier: star_2
  mechanism_primary: "α + β = 2 log_2 3, αβ = 1 → 2^{2 log_2 3 − 1} = 9/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 log_2 3 (→ log_3 5 이면 밑 3 지수)·상수항(1 → 2)·묻는 지수식을 바꿀 수 있음. 제약: 지수식이 합·곱만으로 정리되고 밑이 로그 밑과 같아야 a^{log_a b} 로 닫힘 · 실근 조건(log_2 3 > 1 → D > 0) 유지."
    creative: "(1) 2^α + 2^β 를 물으면 근을 직접 구해야 해서 근의 공식 결합 ★3 (2) 4^{α+β}·8^{αβ} 처럼 밑을 섞으면 밑 통일 한 단계 ★2 (3) 두 근이 log_2 a, log_2 b 라는 조건으로 바꿔 ab 를 묻기 ★2."
```

```yaml
- id: RPM-ALG-0177
  page: 23
  vendor_label: "유형 08 로그와 이차방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x² − ax + b = 0 의 두 근이 1, log_3 4 일 때 실수 a, b 에 대해 a/b 의 값. 5지선다(로그 꼴 선택지).
  category: "근과 계수로 a, b → 1 = log_3 3 합치기 → 비를 밑 변환 역으로 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a/b = log_3 12/log_3 4 를 밑 변환 공식의 역으로 log_4 12 로 읽어 선택지 형태에 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a = 1 + log_3 4 = log_3 12, b = log_3 4 → a/b = log_3 12/log_3 4 = log_4 12. 근과 계수는 절차이고 1 을 log_3 3 으로 흡수해 비를 한 로그로 읽는 역방향 밑 변환(RT d1)이 선택지를 고르게 한다. 중 출발 ★2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "a = 1 + log_3 4 = log_3 12, b = log_3 4 → a/b = log_3 12 / log_3 4 = log_4 12"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 1, log_3 4 (→ 2, log_2 5)와 묻는 비(a/b → b/a)를 바꿀 수 있음. 제약: 정수 근을 log_3 3^n 으로 흡수해 a 가 한 로그로 합쳐져야 비가 log_p q 꼴 · 선택지에 log_4 12 와 log_3 12 같은 오답을 배치."
    creative: "(1) 두 근을 log_2 3, log_3 2 로 두면 곱 1 → b 상수 ★2 (2) a/b 대신 a − b 를 묻기(= 1)로 낮추면 ★1 (3) 역방향: a/b = log_4 12 가 되는 근 하나가 log_3 4 일 때 나머지 근 → I-BW ★3."
```

### 유형 09 상용로그의 값

```yaml
- id: RPM-ALG-0178
  page: 24
  vendor_label: "유형 09 상용로그의 값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    log 2 = 0.3010, log 3 = 0.4771 일 때 log 72 의 값. 5지선다.
  category: "소인수분해 → 상용로그 값 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값 — 지표·가수와 상용로그표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    72 = 2³·3² → 3(0.3010) + 2(0.4771) = 1.8572. 소인수분해와 덧셈뿐. 대표문제(출발 ★2)이지만 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "72 = 2³·3² → log 72 = 3 log 2 + 2 log 3 = 1.8572"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(72 → 48, 0.45, √24)를 2, 3, 10 의 곱으로 바꿀 수 있음. 제약: 소인수가 2, 3, 5(= 10/2) 안 · 소수점 넷째 자리 계산이 선택지와 구별되게."
    creative: "(1) log 5 = 1 − log 2 가 필요한 진수(45)로 바꾸면 한 단계 추가 ★1~2 (2) log 0.072 로 바꿔 음의 지표 처리 ★2 (3) 역방향: log x = 1.8572 인 x → 값 조합 추정 ★2."
```

```yaml
- id: RPM-ALG-0179
  page: 24
  vendor_label: "유형 09 상용로그의 값"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log 67.4 = 1.8287 일 때 log 6740·log 674·log 0.674·log 0.0674·log 0.00674 다섯 값 중 옳지 않은 것. 5지선다(2열).
  category: "소수점 이동 = 지표 변화 · 가수 고정 → 음수 정리 검산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값 — 지표·가수와 상용로그표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6740 = 67.4·10² → 3.8287, 0.674 = 67.4·10⁻² → −0.1713 이므로 ③ 이 틀림(0.8287 은 가수만 쓴 오답). 나머지는 지표 ±n 만 바뀐다. 음의 상용로그를 정수부 + 양의 가수로 다시 쓰는 부호 처리(T-부호)가 유일한 함정. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log (67.4 × 10^n) = n + 1.8287 → n = −2 이면 −0.1713 ≠ 0.8287 (③)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값(67.4, 1.8287 → 다른 세 자리 수)과 보기의 자릿수 이동을 바꿀 수 있음. 제약: 틀린 보기는 음의 지표에서 가수를 그대로 쓴 오답(가수 부호 실수)으로 두어야 개념 진단이 됨."
    creative: "(1) 「옳은 것의 개수」 로 바꾸면 전부 검산 필요 ★2 (2) log 674 = 2.8287 을 주고 log 0.0674 의 값을 묻는 단답 ★1 (3) log √67.4 처럼 계수 1/2 를 섞으면 0180 골조 ★2."
```

```yaml
- id: RPM-ALG-0180
  page: 24
  vendor_label: "유형 09 상용로그의 값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    상용로그표(7.6~7.8 행 · 5~9 열)를 이용해 log ∛78.6 의 값. 단답.
  category: "세제곱근 → 계수 1/3 → 지표·가수 분리 → 표 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값 — 지표·가수와 상용로그표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log ∛78.6 = (1/3) log 78.6 = (1/3)(1 + log 7.86) 이고 표에서 7.8 행 6 열 = .8954 → (1/3)(1.8954) = 0.6318. 표 읽기·지표 분리·계수 1/3 세 조각이 한 줄씩. 중 출발 ★2 · M_total 4 이지만 세 도구 결합이라 −1 미적용 → ★2.
  tier: star_2
  mechanism_primary: "∛ → (1/3) log 78.6 = (1/3)(1 + log 7.86) → 표 7.8 행·6 열 .8954 → 0.6318"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$0.6318$"
  answer_source: "답지"
  figure: "crop:fig-0180.png"
  latex: latex-bank/rpm-alg/items/0180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(78.6 → 표 범위 7.65~7.89 의 다른 값·자릿수 이동 786, 0.786)와 근호 차수(∛ → √)를 바꿀 수 있음. 제약: 가수는 그림 표 안의 값만 쓸 수 있음(표 라벨 고정) · (지표 + 가수)/차수 가 소수 넷째 자리에서 끝나야 함."
    creative: "(1) log 786² 처럼 계수를 정수배로 두면 지표가 커짐 ★1~2 (2) 역방향: log x = 2.8954 인 x 를 표에서 찾기(0181 골조) ★2 (3) 표 값 두 개를 써야 하는 log (7.86 × 7.65) 로 두면 M_k 상승 ★2."
```

```yaml
- id: RPM-ALG-0181
  page: 24
  vendor_label: "유형 09 상용로그의 값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    log 1.82 = 0.2601 일 때 log A = −1.7399 를 만족시키는 A 의 값. 단답.
  category: "음의 상용로그 → 정수 지표 + 양의 가수 → 진수 복원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값 — 지표·가수와 상용로그표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1.7399 = −2 + 0.2601 = log 10⁻² + log 1.82 → A = 1.82 × 10⁻² = 0.0182. 음수 로그를 「지표 −2 · 가수 0.2601」 로 다시 쪼개는 부호 처리(T-부호)가 골조이며 이를 놓치면 가수를 0.7399 로 잘못 읽는다. 중 출발 ★2 · M_total 4 이나 역방향 부호 처리라 −1 미적용 → ★2.
  tier: star_2
  mechanism_primary: "−1.7399 = −2 + 0.2601 → log A = log (10⁻² × 1.82) → A = 0.0182"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$0.0182$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 가수(0.2601)와 음의 값(−1.7399 → −3 + 0.2601 = −2.7399)을 바꿀 수 있음. 제약: 주어진 값 = −n + (기준 가수) 가 정확히 맞아야 함 · 답 자릿수(소수점 이동)를 선택지 없이 단답으로 유지."
    creative: "(1) log A = 2.2601 (양수)로 바꾸면 부호 함정 제거 ★1 (2) log 182 = 2.2601 을 주고 log A = −1.7399 → 자릿수 두 번 이동 ★2 (3) A 가 아니라 A 의 소수점 아래 0 의 개수를 묻기(지표 해석) ★2."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 10 · ★2 22 · ★3 4 · ★4 0 · ★5 0
- 통찰형 3(0157 · 0161 · 0173) · 절차형 33 · premium 0 · insights 가 비어 있지 않은 문항 11(0151 · 0152 · 0157 · 0161 · 0168 · 0170 · 0171 · 0172 · 0173 · 0174 · 0177 — 이 중 8문은 유형의 표준 절차에 해당하는 d1 전환이라 절차형으로 둠)
- 통찰 유형: I-RT 5 · I-EQV 3 · I-PD 1 · I-CON 1 · I-XU 1
- type_hint 상위: 「로그의 성질의 활용 — 주어진 로그값을 문자로 나타내기」 4 · 「조건을 이용한 식의 값 — 지수 등식(=k)과 로그 역수」 4 · 「로그와 이차방정식 — 근과 계수의 관계」 4 · 「로그의 여러 가지 성질 — log_{a^m} b^n · a^{log_a b} 계산」 4 · 「상용로그의 값 — 지표·가수와 상용로그표」 4 · 「로그의 성질 — 합·차·상수배 계산」 3 · 「로그의 정의(로그 ↔ 지수 변환)」 2 · 「로그의 밑과 진수의 조건 — 정수 개수」 2 · 「로그의 밑의 변환 — 사슬곱·역수 공식」 2 · 나머지 7개는 1문씩(겹로그 벗기기 · 지수식 값 복원 · 정의역으로 절댓값 정리 · 모든 실수에서 정의(판별식) · 연쇄 약분(망원 곱) · 조건 로그값에서 다른 로그값 · 진수 안 로그의 사슬곱)
- 벤더 신호 대비: 대표문제 9문 중 3문(0146 · 0158 · 0178)과 난이도 중 2문(0148 · 0156)을 통찰 없음·M_total 4 로 ★1 로 내림(벤더보다 1단 낮음) · 중하 5문 중 4문 ★1 · 상중 4문은 모두 ★3 유지 · 2단 이상 어긋난 문항 없음
- 그림: 1문(`crop:fig-0180.png` · 상용로그표 7.6~7.8 행 × 5~9 열)
- 전사 답 확인 필요: 없음(36문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0157 | M_total 4 의 한 줄 문항인데 망원 곱 발견(PD d1)이 골조 전체. 통찰을 인정하면 벤더 상중 그대로 ★3, 절차로 보면 ★2 | ★3 / ★2 |
| RPM-ALG-0161 | 순환 사슬곱(2→3→7→2)이 곱 1 이 되는 구조의 통찰 유형이 RT(재배열)·PD(순환 규칙)·SYM(순환 대칭) 사이에 걸침. RT d2 로 기록 | ★3 |
| RPM-ALG-0169 | 통찰 없이 겹근호·역수·통분의 계산 마찰만으로 상중(★3). v3.8 관점에서는 질 저하 신호 — 카탈로그 base 결정 시 ★2 후보 | ★3 / ★2 |
| RPM-ALG-0174 | 「로그와 이차방정식」은 유형 자체가 근과 계수(이차방정식 단원) 결합이라 XU d1 을 통찰로 셀지, 카탈로그 base 에 흡수할지 결정 필요. 흡수하면 절차형 ★2 그대로 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- RPM 유형 01~09 는 각각 하나의 유형으로 세울 수 있으나, **유형 03(성질)·유형 05(여러 가지 성질)** 는 골조(각 항을 k·log_a p + 상수 로 정리)가 같아 「로그의 성질 계산」 하나(base ★1~2)로 통합해도 됨. 유형 04(밑의 변환)도 사슬곱·역수 공식 계산은 여기 합칠 수 있음.
- **유형 02** 안에서 「정수 개수(0150 · 0153)」와 「모든 실수에서 정의 → 판별식(0152)」은 base ★ 가 달라(★2 / ★2~3) 별도 소유형으로. 「정의역으로 절댓값 정리(0151)」는 출제 빈도가 낮아 정수 개수 유형의 변형으로 두어도 됨.
- **유형 06(로그값 문자 표현)** 과 **유형 07(=k 조건 · 로그 역수)** 은 이름이 비슷하지만 골조가 다르므로 반드시 분리. 유형 07 안에서 「곱 조건에 log 취하기(0172)」와 「두 조건 매개변수 통합(0173)」은 base ★ 차이(★2 / ★3)로 소유형 분리 후보.
- **유형 08** 은 XU(근과 계수)를 base 에 흡수해 base ★2 로 두고, 대칭식 차수가 올라가는 변형(0174 creative (1))만 ★3 으로 올리는 것이 자연스러움.
- **따로 세워야 할 유형**: 0157 「망원 곱(연쇄 약분)」과 0161 「순환 사슬곱 = 1」 — 둘 다 이 범위에서 1문씩이지만 상중·통찰형이고 시험에 꼭 나오는 문제·실력 Up 에서 반복될 가능성이 커 base ★3 소유형으로 예약.
- **유형 09(상용로그)** 는 「값 계산(0178)」 「지표·가수 부호 처리(0179 · 0181)」 「표 읽기(0180)」 세 골조가 섞여 있으나 모두 ★1~2 라 하나로 두고 numeric 변형(자릿수 이동 · 근호 차수)으로 커버.
