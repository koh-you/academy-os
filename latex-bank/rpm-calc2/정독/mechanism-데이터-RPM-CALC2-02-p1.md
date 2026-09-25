---
name: mechanism-데이터-RPM-CALC2-02-p1
description: RPM 미적분Ⅱ 02 급수(1/3 · 교과서 02-1~02-4 + 유형 01~04) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 02 급수
  unit_code: CALC2-02
  part: "1/3"
  extract_range: "25~27쪽 · 0143~0179"
  total_problems: 37
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 02 급수 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 02 급수 단원의 첫 범위(25~27쪽 · 0143~0179 · 37문항)를 다룬다. 25쪽의 「교과서 02-1 ~ 02-4」 구역 23문(급수의 수렴과 발산 · 급수와 수열의 극한값 사이의 관계 · 급수의 성질 · 등비급수)과 26~27쪽의 「유형 01 ~ 04」 구역 14문(부분분수 · 로그 · 교대 부호 · 급수와 극한값의 관계)으로 이루어진다. 벤더 신호는 교과서 구역에 없고, 유형 구역에는 난이도 표시 중 8문 · 중하 2문, 태그 대표문제 4문(0166 · 0170 · 0173 · 0176) · 서술형 1문(0169)이 있으며 그림은 하나도 없다. RPM 은 구역이 곧 난이도 층이므로 교과서 구역은 ★1, 유형 구역은 level 에 따라 ★1~2 출발이고 M_total·통찰로만 ±1 조정했다(통찰 없음·M_total 4 → −1, M_total 5 는 유형 구역의 기본 노동량으로 보고 출발점 유지). 결과는 ★1 26문 · ★2 11문이며, 통찰 라벨이 붙은 문항은 4문(0169 XU d1 · 0170 RT d1 · 0171 RT d2 · 0179 EQV d1)이고 그중 depth 2 인 0171 만 통찰형으로 두었다(depth 1 통찰 하나뿐인 문항은 견본 0041 처럼 절차형).

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 전사본에서 section 이름이 같은 group 이 여럿인 곳(교과서 02-1 의 두 group · 교과서 02-4 의 네 group)은 한 절로 묶고 group 경계를 한 줄로 표시했다.

## 문항 데이터

### 교과서 02-1 급수의 수렴과 발산

(group U2-D1 · 0143~0144 · 공통 발문 「부분합 S_n 이 주어질 때 급수의 합」)

```yaml
- id: RPM-CALC2-0143
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부분합 $S_n=\dfrac{n}{2n+1}$ 이 주어진 수열의 급수 $\sum a_n$ 의 합.
  category: "급수의 합 = 부분합의 극한 → 유리식 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합 S_n 이 주어진 급수의 합(lim S_n)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    급수의 합은 정의상 lim S_n 이므로 n/(2n+1) 의 극한 1/2 한 줄. 일반항을 구할 필요가 없음을 아는 것이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "급수의 합 = lim S_n → n/(2n+1) 최고차항 비 → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 을 (an+b)/(cn+d)·(n²+1)/(2n²) 등 분모·분자 차수가 같은 유리식으로. 제약: 극한이 유한해야 급수가 수렴하고, 분자 차수가 크면 발산 문항이 됨."
    creative: "(1) S_n 을 주고 a_n 과 급수의 합을 함께 묻기(★1 유지) (2) 수렴하지 않는 S_n 을 섞어 수렴·발산을 고르게 하기(★1) (3) S_n 대신 a_n 의 일반항을 주고 S_n 을 직접 구하게 하면 노동량 상승 ★2."
```

```yaml
- id: RPM-CALC2-0144
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부분합 $S_n=2-\left(\dfrac{1}{3}\right)^n$ 이 주어진 수열의 급수 $\sum a_n$ 의 합.
  category: "급수의 합 = 부분합의 극한 → 등비수열 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합 S_n 이 주어진 급수의 합(lim S_n)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/3)^n → 0 이므로 lim S_n = 2. 등비수열의 극한 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "급수의 합 = lim S_n → (1/3)^n → 0 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 공비 1/3 을 바꿈. 제약: |공비|<1 이어야 S_n 이 수렴, 공비를 3 으로 바꾸면 발산 문항이 됨."
    creative: "(1) S_n 에서 a_n 을 구해 등비급수임을 확인(★1) (2) S_n = 2 - r^n 이 수렴하는 r 의 범위(★1~2) (3) 첫째항·공비를 역으로 결정하는 문항(★2)."
```

(group U2-D2 · 0145~0148 · 공통 발문 「수렴·발산을 조사하고, 수렴하면 합」)

```yaml
- id: RPM-CALC2-0145
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $1+2+3+\cdots+n+\cdots$ 의 수렴·발산 조사.
  category: "부분합 n(n+1)/2 → ∞ → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합을 구해 급수의 수렴·발산 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부분합 n(n+1)/2 가 ∞ 로 발산하므로 급수 발산. 자연수 합 공식 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S_n = n(n+1)/2 → ∞ → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등차수열(홀수 합·3n-1 등)로 바꿈. 제약: 공차가 0 이 아닌 등차급수는 항상 발산하므로 답은 늘 발산."
    creative: "(1) 일반항이 0 으로 가지 않음으로 발산 보이기(02-2 도구로 전환 ★1) (2) 부분합의 일반항을 구해 발산 속도(n²)를 묻기(★1) (3) 등차급수가 수렴할 조건(첫째항·공차 모두 0)을 논하는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC2-0146
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\dfrac{1}{1\times2}+\dfrac{1}{2\times3}+\cdots+\dfrac{1}{n(n+1)}+\cdots$ 의 수렴·발산 조사와 합.
  category: "부분분수 → 망원 부분합 → 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합을 구해 급수의 수렴·발산 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/(n(n+1)) = 1/n - 1/(n+1) 로 쪼개면 S_n = 1 - 1/(n+1) → 1. 부분분수·망원·극한 세 단계 모두 표준. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/(n(n+1)) = 1/n - 1/(n+1) → S_n = 1 - 1/(n+1) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 (n+1)(n+2)·(2n-1)(2n+1)·n(n+2) 등으로. 제약: 인수 차가 1 이 아니면 남는 항이 둘 이상이라 Mk 상승, (2n-1)(2n+1) 은 계수 1/2 보정 필요."
    creative: "(1) 첫째항을 1/(2·3) 부터 시작해 합 1/2(★1) (2) 분모 인수 차 2 → 남는 항 두 개 관리(★2 · 유형 01 로 이동) (3) 부분합이 주어진 값 이상이 되는 최소 n(★2 · 부등식 결합)."
```

```yaml
- id: RPM-CALC2-0147
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum(\sqrt{n+1}-\sqrt{n})$ 의 수렴·발산 조사와 합.
  category: "망원 부분합 → √(n+1) - 1 → ∞ → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합을 구해 급수의 수렴·발산 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항이 이미 차 꼴이라 S_n = √(n+1) - 1 이 바로 나오고 ∞ 로 발산. 일반항은 0 으로 수렴하지만 급수는 발산하는 전형 예 — a_n → 0 을 수렴 근거로 오해하는 함정만 있다. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "망원 → S_n = √(n+1) - 1 → ∞ → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√(n+2)-√n(두 칸 망원 · 역시 발산)·log(n+1)-log n 으로. 제약: 망원 뒤 남는 항이 무한대로 가야 발산 답이 유지되고, 1/√n - 1/√(n+1) 로 바꾸면 수렴(합 1) 문항이 됨."
    creative: "(1) 같은 항의 역수 꼴 1/(√(n+1)+√n) 으로 위장해 유리화가 필요하게(★2) (2) a_n → 0 인데 급수가 발산하는 예를 고르는 ㄱㄴㄷ(★2 · 개념 판단) (3) 부분합 S_n > 100 이 되는 최소 n(★2)."
```

```yaml
- id: RPM-CALC2-0148
  page: 25
  vendor_label: "교과서 02-1 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum\left(\dfrac{n}{n+1}-\dfrac{n+1}{n+2}\right)$ 의 수렴·발산 조사와 합.
  category: "f(n)-f(n+1) 망원 → f(1) - lim f(n) → 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합을 구해 급수의 수렴·발산 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항이 f(n)-f(n+1) 꼴(f(n)=n/(n+1))이므로 S_n = f(1) - f(n+1) = 1/2 - (n+1)/(n+2) → 1/2 - 1 = -1/2. 음수 답에서 부호 실수만 주의(T-부호). 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(n)=n/(n+1) 망원 → S_n = 1/2 - (n+1)/(n+2) → -1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(n) 을 (n+1)/n·1/(n+1)·n/(2n+1) 등으로. 제약: lim f(n) 이 유한해야 수렴, 합 = f(1) - lim f(n)."
    creative: "(1) f(n)-f(n+2) 두 칸 망원(★2) (2) 항을 통분해 -1/((n+1)(n+2)) 로 위장하면 부분분수를 스스로 찾아야 함(★2) (3) 합이 -1/2 라는 결과에서 f(1) 을 역산(★2 · BW d1)."
```

### 교과서 02-2 급수와 수열의 극한값 사이의 관계

(group U2-D3 · 0149~0153 · 공통 발문 「다음 급수가 발산함을 보이시오」)

```yaml
- id: RPM-CALC2-0149
  page: 25
  vendor_label: "교과서 02-2 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $-2+1+4+7+10+\cdots$ 가 발산함을 보이기.
  category: "일반항 3n-5 → 극한 ∞ ≠ 0 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 0 으로 수렴하지 않는 급수의 발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    등차수열 a_n = 3n-5 를 읽고 lim a_n = ∞ ≠ 0 → 급수 발산(수렴 급수의 일반항 → 0 의 대우). 일반항 찾기 한 단계. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = 3n-5 → lim a_n = ∞ ≠ 0 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($a_n=3n-5$, $\displaystyle\lim_{n\to\infty} a_n=\infty\ne 0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차 변경. 제약: 공차 ≠ 0 이면 항상 발산이라 답 성격 유지, 공차가 음수면 극한 -∞."
    creative: "(1) 일반항을 준 뒤 발산 이유를 서술(★1) (2) 「급수 수렴 → 일반항 0」 의 역이 성립하지 않는 반례(0147·조화급수)를 함께 묻는 ㄱㄴㄷ(★2) (3) 부분합 공식으로 발산 보이기(02-1 도구 · ★1)."
```

```yaml
- id: RPM-CALC2-0150
  page: 25
  vendor_label: "교과서 02-2 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $3+3^2+3^3+3^4+\cdots$ 가 발산함을 보이기.
  category: "일반항 3^n → 극한 ∞ ≠ 0 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 0 으로 수렴하지 않는 급수의 발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = 3^n → ∞ ≠ 0 이므로 발산. 등비수열 극한 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = 3^n → ∞ ≠ 0 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($a_n=3^n$, $\displaystyle\lim_{n\to\infty} a_n=\infty\ne 0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 1 보다 큰 수나 음수((-2)^n)로. 제약: |공비| ≥ 1 이어야 a_n 이 0 으로 가지 않음."
    creative: "(1) 등비급수 수렴 조건(|r|<1)과 연결해 두 관점으로 발산 보이기(★1) (2) r = -1 인 경우(진동)를 넣어 극한이 없음을 논하게(★2) (3) (1/3)^n 으로 바꿔 수렴 예와 대비하는 ㄱㄴㄷ(★1)."
```

```yaml
- id: RPM-CALC2-0151
  page: 25
  vendor_label: "교과서 02-2 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $5+5+5+5+\cdots$ 가 발산함을 보이기.
  category: "상수 일반항 → 극한 5 ≠ 0 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 0 으로 수렴하지 않는 급수의 발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = 5 로 상수이므로 lim a_n = 5 ≠ 0 → 발산. 가장 단순한 반례. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = 5 → lim = 5 ≠ 0 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\displaystyle\lim_{n\to\infty} a_n=5\ne 0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 변경(음수 포함). 제약: 0 이 아닌 상수."
    creative: "(1) 5-5+5-5+… 진동 급수로 바꿔 lim a_n 이 없음을 논하기(유형 03 · ★2) (2) 상수급수와 공비 1 인 등비급수의 관계 묻기(★1) (3) 부분합 5n 의 발산으로 보이기(★1)."
```

```yaml
- id: RPM-CALC2-0152
  page: 25
  vendor_label: "교과서 02-2 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum\dfrac{n+1}{4n-1}$ 가 발산함을 보이기.
  category: "유리식 일반항 → 극한 1/4 ≠ 0 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 0 으로 수렴하지 않는 급수의 발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반항의 극한이 1/4 ≠ 0 이므로 발산. 유리식 극한 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "lim (n+1)/(4n-1) = 1/4 ≠ 0 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\displaystyle\lim_{n\to\infty} a_n=\dfrac{1}{4}\ne 0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 일차식 계수 변경. 제약: 분자 차수를 분모보다 낮추면 a_n → 0 이 되어 이 도구로는 판정 불가."
    creative: "(1) 분자·분모를 차수가 같은 이차식으로(★1) (2) a_n → 0 인 Σ1/(4n-1) 을 나란히 두고 「일반항 → 0 만으로는 수렴 판정 불가」를 묻는 ㄱㄴㄷ(★2) (3) 극한이 0 이 되도록 하는 계수 조건(★2)."
```

```yaml
- id: RPM-CALC2-0153
  page: 25
  vendor_label: "교과서 02-2 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum\left\{1-\left(\dfrac{1}{7}\right)^n\right\}$ 가 발산함을 보이기.
  category: "등비항 → 0 → 일반항 극한 1 ≠ 0 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 0 으로 수렴하지 않는 급수의 발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/7)^n → 0 이므로 a_n → 1 ≠ 0 → 발산. 등비수열 극한 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1/7)^n → 0 → lim a_n = 1 ≠ 0 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\displaystyle\lim_{n\to\infty} a_n=1\ne 0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 1 과 공비 1/7 변경. 제약: 상수 ≠ 0 이면 발산 유지, 상수를 0 으로 두면 수렴하는 등비급수가 됨."
    creative: "(1) 1-(1/7)^n 을 부분합 S_n 으로 착각시키는 대비 문항(0144 와 쌍 · ★2 개념 판단) (2) Σ{r^n - (1/7)^n} 이 수렴하는 r 의 범위(★2) (3) 항을 (7^n-1)/7^n 으로 위장(★1)."
```

### 교과서 02-3 급수의 성질

```yaml
- id: RPM-CALC2-0154
  page: 25
  vendor_label: "교과서 02-3 급수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\sum a_n=3$, $\sum b_n=-2$ 일 때 ⑴ $\sum(a_n+2b_n)$ ⑵ $\sum\left(\dfrac{a_n}{3}-\dfrac{b_n}{2}\right)$ 의 합.
  category: "수렴하는 급수의 선형성 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형성)로 합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 급수가 수렴하므로 상수배·합·차를 항별로 분리해 3+2·(-2) = -1, 1-(-1) = 2. 수렴이 전제된 성질 적용만. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "선형성 Σ(pa_n+qb_n) = pΣa_n + qΣb_n → 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-1$ \quad (2) $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 급수의 값과 계수 변경. 제약: 두 급수가 모두 수렴해야 성질 적용 가능(발산 급수를 넣으면 성질 사용 불가)."
    creative: "(1) Σ(a_n+b_n)=3, Σ(a_n-b_n)=1 을 주고 Σa_n 을 묻는 연립형(★2 · CON 성격) (2) Σa_nb_n 을 묻는 오답 유도 보기 — 곱의 급수는 성질이 없음(★2 개념 판단) (3) 한 급수가 발산할 때 합·차의 발산 논증(★2)."
```

### 교과서 02-4 등비급수

(group U2-D5 · 0155~0159 · 공통 발문 「등비급수의 수렴·발산을 조사하고, 수렴하면 합」)

```yaml
- id: RPM-CALC2-0155
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $1+\dfrac{1}{3}+\dfrac{1}{9}+\dfrac{1}{27}+\cdots$ 의 수렴·발산 조사와 합.
  category: "공비 판정 |r|<1 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산과 합(공비 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항 1, 공비 1/3 으로 |r|<1 → 수렴, 합 1/(1-1/3) = 3/2. 공식 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=1, r=1/3 → |r|<1 수렴 → a/(1-r) = 3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(양의 진분수) 변경. 제약: |r|<1 · 답이 분수로 정리."
    creative: "(1) 둘째항부터 시작(★1) (2) 합이 주어졌을 때 공비 역산(★2 · BW d1) (3) 홀수항만의 합(공비 r²)으로 확장(★2)."
```

```yaml
- id: RPM-CALC2-0156
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $0.1+0.01+0.001+0.0001+\cdots$ 의 수렴·발산 조사와 합.
  category: "소수 공비 0.1 판정 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산과 합(공비 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=0.1, r=0.1 → 수렴, 0.1/0.9 = 1/9. 소수를 분수 공비로 읽으면 끝(순환소수 0.1̇ 과 같은 결과). 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=0.1, r=0.1 → 0.1/(1-0.1) = 1/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0.2+0.02+… 또는 0.01+0.0001+…(r=0.01). 제약: 공비가 10 의 거듭제곱 역수."
    creative: "(1) 순환소수 0.1̇ 과 같음을 연결(D8 골조 · ★1) (2) 0.3+0.03+…=1/3 같은 골조(★1) (3) 첫째항을 소수·공비를 분수로 섞어 표기(★1)."
```

```yaml
- id: RPM-CALC2-0157
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $\sqrt5-\dfrac{5}{2}+\dfrac{5\sqrt5}{4}-\dfrac{25}{8}+\cdots$ 의 수렴·발산 조사와 합.
  category: "무리수 공비 계산 → |r|>1 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산과 합(공비 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 r = (-5/2)/√5 = -√5/2 로 |r| = √5/2 > 1 → 발산. 부호가 교대라 수렴으로 착각하기 쉬우나 |r| 만 본다. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "r = -√5/2 → |r| > 1 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비의 무리수 변경(√2/2 로 바꾸면 수렴·합 계산). 제약: |r| 과 1 의 비교가 제곱으로 명확해야 함."
    creative: "(1) √2 - 1 + 1/√2 - … 로 바꿔 수렴하는 합을 유리화까지(★2) (2) 공비 -√5/2·√5/2 인 두 급수를 나란히 두고 발산 판정(★1) (3) 공비를 문자로 두고 수렴 조건(★2 · D7 골조)."
```

```yaml
- id: RPM-CALC2-0158
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $\sum\left(-\dfrac{1}{2}\right)^{n-1}$ 의 수렴·발산 조사와 합.
  category: "음의 공비 판정 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산과 합(공비 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=1, r=-1/2 → 수렴, 1/(1+1/2) = 2/3. 음의 공비 부호만 주의. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=1, r=-1/2 → 1/(1-(-1/2)) = 2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 -1/3·-2/3, 첫째항 상수배. 제약: |r|<1."
    creative: "(1) 지수를 n 으로 바꿔 첫째항 -1/2(★1) (2) Σ(-1/2)^{n-1} 과 Σ(1/2)^{n-1} 의 차(★1) (3) 짝수항의 합만(★2)."
```

```yaml
- id: RPM-CALC2-0159
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $\sum 2\left(\dfrac{5}{3}\right)^{n-1}$ 의 수렴·발산 조사와 합.
  category: "공비 5/3 > 1 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산과 합(공비 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 5/3 > 1 → 발산. 첫째항 2 는 무관. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "r = 5/3 > 1 → 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 > 1 인 분수, 첫째항 변경. 제약: |r| ≥ 1."
    creative: "(1) 2(3/5)^{n-1} 로 바꿔 수렴 합 5(★1) (2) (5/3)^{n-1}·(3/5)^n 을 섞어 수렴 여부 ㄱㄴㄷ(★1) (3) r = 1 까지 포함해 수렴 조건 정리(★1)."
```

(group U2-D6 · 0160~0161 · 공통 발문 「다음 급수의 합」)

```yaml
- id: RPM-CALC2-0160
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum\dfrac{2^n+3^n}{4^n}$ 의 합.
  category: "두 등비급수로 분리 → 각각 합 → 더하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 합·차로 분리해 합 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/2)^n + (3/4)^n 으로 나누면 두 등비급수(첫째항 1/2·3/4) 합 1 + 3 = 4. 분리 뒤는 공식. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2^n+3^n)/4^n = (1/2)^n + (3/4)^n → 1 + 3 = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2·3·4 를 (3^n+5^n)/6^n 등으로. 제약: 분자 밑이 분모 밑보다 작아야 각 공비 < 1."
    creative: "(1) (2^n - 3^n)/4^n 차로(★1) (2) (2^n+3^n)/5^{n-1} 처럼 지수를 어긋나게 해 첫째항 관리(★2) (3) (2^n+a^n)/4^n 이 수렴하는 자연수 a 의 개수(★2 · 수렴 조건 결합)."
```

```yaml
- id: RPM-CALC2-0161
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    급수 $\sum\left(\dfrac{2}{5^n}-\dfrac{3}{7^n}\right)$ 의 합.
  category: "두 등비급수의 차 → 각각 합 → 빼기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 합·차로 분리해 합 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2Σ(1/5)^n - 3Σ(1/7)^n = 2·(1/4) - 3·(1/6) = 1/2 - 1/2 = 0. 첫째항이 1/5·1/7 임(지수 n)만 주의. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2·(1/5)/(1-1/5) - 3·(1/7)/(1-1/7) → 1/2 - 1/2 = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·3, 밑 5·7 변경. 제약: 각 등비급수의 첫째항 = 계수/밑(지수 n) — 답 0 을 유지하려면 계수비 = (밑-1) 의 비."
    creative: "(1) 합이 0 이 되는 계수 조건을 거꾸로 묻기(★2 · BW d1) (2) 지수를 n-1 로 바꿔 첫째항 변화 대비(★1) (3) 세 등비급수의 합·차(★1)."
```

(group U2-D7 · 0162~0163 · 공통 발문 「수렴하도록 하는 실수 x 의 값의 범위」)

```yaml
- id: RPM-CALC2-0162
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $1+x+x^2+x^3+\cdots$ 가 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "첫째항 ≠ 0 · |공비| < 1 → 부등식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건으로 x 의 범위"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항 1 ≠ 0 이므로 수렴 조건은 |x|<1 뿐. 교과서 정의 확인 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 x → |x|<1 → -1<x<1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1<x<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 2x·x/3·x-1 로. 제약: 첫째항이 0 이 아닌 상수여야 「첫째항 0」 분기가 생기지 않음."
    creative: "(1) 첫째항을 x 로 바꿔 x=0 도 포함되는 분기(★2 · MI d1) (2) 공비 x²-x 같은 이차식으로 부등식 풀이(★2) (3) 범위 안 정수의 개수(★1)."
```

```yaml
- id: RPM-CALC2-0163
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비급수 $1-2x+4x^2-8x^3+\cdots$ 가 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "공비 -2x 읽기 → |공비| < 1 → 부등식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건으로 x 의 범위"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 -2x 로 |-2x|<1 → |x|<1/2. 공비를 정확히 읽는 것이 전부. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 -2x → |-2x|<1 → -1/2<x<1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{2}<x<\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 계수(3x·-x/2) 변경. 제약: 절댓값 부등식이 한 구간으로 정리."
    creative: "(1) 수렴할 때의 합 1/(1+2x) 까지 묻기(★1) (2) 합이 특정 값이 되는 x(★2) (3) 공비 (x-1)/2 처럼 평행이동(★1)."
```

(group U2-D8 · 0164~0165 · 공통 발문 「등비급수를 이용해 순환소수를 분수로」)

```yaml
- id: RPM-CALC2-0164
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    순환소수 $0.\dot8$ 을 등비급수를 이용해 분수로 나타내기.
  category: "0.8+0.08+… 등비급수 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수의 등비급수 분수화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.8+0.08+… 첫째항 0.8·공비 0.1 → 0.8/0.9 = 8/9. 공식 한 줄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.8 + 0.08 + … → 0.8/(1-0.1) = 8/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순환마디 한 자리 변경. 제약: 공비 1/10."
    creative: "(1) 0.ȧ = a/9 일반화(★1) (2) 0.9̇ = 1 을 등비급수로 설명(★1 개념) (3) 순환마디 두 자리·비순환 부분 포함(★1~2 · 0165)."
```

```yaml
- id: RPM-CALC2-0165
  page: 25
  vendor_label: "교과서 02-4 등비급수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    순환소수 $1.\dot3\dot6$ 을 등비급수를 이용해 분수로 나타내기.
  category: "정수부 분리 → 0.36+0.0036+… 등비급수 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수의 등비급수 분수화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1 + (0.36+0.0036+…) 로 정수부를 떼고 첫째항 0.36·공비 0.01 → 36/99 = 4/11, 합 15/11. 정수부 처리와 공비 1/100 만 주의. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1 + 0.36/(1-0.01) = 1 + 4/11 = 15/11"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{15}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수부·순환마디(두 자리) 변경. 제약: 공비 1/100, 결과 약분."
    creative: "(1) 비순환 부분이 있는 1.23̇ 꼴(첫째항 정리 ★2) (2) 순환소수의 합·곱을 분수로(★1) (3) Σ 36·(1/100)^n 표기로 바꿔 역방향(★1)."
```

### 유형 01 부분분수를 이용한 급수의 합

```yaml
- id: RPM-CALC2-0166
  page: 26
  vendor_label: "유형 01 부분분수를 이용한 급수의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    급수 $1+\dfrac{1}{1+2}+\dfrac{1}{1+2+3}+\dfrac{1}{1+2+3+4}+\cdots$ 의 합.
  category: "일반항 2/(n(n+1)) → 부분분수 → 망원 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 자연수 합이므로 a_n = 2/(n(n+1)) = 2(1/n - 1/(n+1)), S_n = 2(1 - 1/(n+1)) → 2. 일반항 구성·부분분수·망원·극한 네 단계지만 모두 표준. 유형 대표문제라 M_total 5 의 −1 후보는 적용하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "1+2+…+n = n(n+1)/2 → a_n = 2(1/n - 1/(n+1)) → S_n = 2 - 2/(n+1) → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수·시작 항 변경. 제약: 분모가 n 의 일차 인수 곱으로 인수분해돼야 함 — 홀수 합 n² 으로 바꾸면 부분분수 불가, 1·2+2·3+…(n(n+1)(n+2)/3) 로 바꾸면 인수 셋(★3)."
    creative: "(1) 분자를 3 으로·둘째항부터 시작(★2 유지) (2) 분모를 1²+2²+…+n² 로 바꾸면 인수 셋에 부분분수(★3) (3) 합이 k 가 되도록 하는 분자 상수(★2 · BW d1)."
```

```yaml
- id: RPM-CALC2-0167
  page: 26
  vendor_label: "유형 01 부분분수를 이용한 급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    급수 $\dfrac{2}{4\times1^2-1}+\dfrac{2}{4\times2^2-1}+\dfrac{2}{4\times3^2-1}+\cdots$ 의 합.
  category: "4n²-1 인수분해 → 부분분수 → 망원 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4n²-1 = (2n-1)(2n+1) 이고 분자 2 가 인수 차와 같아 1/(2n-1) - 1/(2n+1) 로 바로 쪼개진다. S_n = 1 - 1/(2n+1) → 1. 유형 표준 골조 · M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "2/((2n-1)(2n+1)) = 1/(2n-1) - 1/(2n+1) → S_n = 1 - 1/(2n+1) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수, 분모 (an)²-b² 꼴 변경. 제약: 분자 ≠ 인수 차이면 계수 보정(1/인수 차) 필요 · 분모가 0 이 되는 n 이 없어야 함."
    creative: "(1) 분모 n²+2n 처럼 인수 차 2 인 꼴(남는 항 둘 · ★2) (2) 인수분해가 숨은 3차·4차 분모(★3) (3) 부분합이 0.99 이상 되는 최소 n(★2)."
```

```yaml
- id: RPM-CALC2-0168
  page: 26
  vendor_label: "유형 01 부분분수를 이용한 급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 3, 공차 2 인 등차수열의 부분합 $S_n$ 에 대해 $\sum\dfrac{1}{S_n}$ 의 값. 5지선다.
  category: "S_n = n(n+2) → 두 칸 부분분수 → 망원 → 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = n(n+2) 이므로 1/S_n = (1/2)(1/n - 1/(n+2)). 두 칸 망원이라 남는 항 1 + 1/2 을 놓치기 쉽다. 합 (1/2)(3/2) = 3/4. 표준 골조 · M_total 6 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "S_n = n(n+2) → (1/2)(1/n - 1/(n+2)) → (1/2)(1 + 1/2) = 3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차 변경. 제약: S_n 이 n 의 일차 인수 둘로 인수분해돼야 함(a=1,d=2 → n² 불가 · a=2,d=2 → n(n+1) · a=4,d=2 → n(n+3))."
    creative: "(1) 인수 차 3(a=4,d=2)로 남는 항 셋(★3) (2) Σ1/S_n 대신 Σ1/(a_n a_{n+1})(★2) (3) 합이 주어졌을 때 공차 역산(★3 · BW)."
```

```yaml
- id: RPM-CALC2-0169
  page: 26
  vendor_label: "유형 01 부분분수를 이용한 급수의 합"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이차방정식 $x^2-2x-(n^2+n)=0$ 의 두 근 $\alpha_n$, $\beta_n$ 에 대해 $\sum\left(\dfrac{1}{\alpha_n}+\dfrac{1}{\beta_n}\right)$ 의 합(부분합 이용 · 서술형).
  category: "근과 계수의 관계 → -2/(n(n+1)) → 부분분수 망원 → 극한"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식(공통수학1)의 근과 계수의 관계로 1/α_n+1/β_n = (α+β)/(αβ) = -2/(n(n+1)) 로 전환 — 근 1±√(n²+n+1) 을 직접 구하면 급수로 이어지지 않음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합(근과 계수의 관계 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β = 2, αβ = -n(n+1) 이므로 1/α+1/β = -2/(n(n+1)) = -2(1/n - 1/(n+1)). S_n = -2(1 - 1/(n+1)) → -2. 근과 계수의 관계가 다른 단원 도구지만 표준 용법(XU d1)이라 ★ 조정 없음 · 벤더 중 ★2. 서술형 태그는 +0.
    [분류 이슈] 근과 계수의 관계를 XU 통찰로 볼지 표준 절차로 볼지 애매 — ★ 에는 영향 없음, 카탈로그 설계 때 라벨 정책 결정.
  tier: star_2
  mechanism_primary: "근과 계수 α+β=2, αβ=-n(n+1) → 1/α+1/β = -2/(n(n+1)) → 망원 → -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(-2 → -4 등)·상수항 -(n²+n) → -(n²+2n) 등 변경. 제약: 상수항이 -n(n+k) 꼴로 인수분해돼야 부분분수 가능하고 상수항 ≠ 0 이어야 근이 0 이 아님."
    creative: "(1) Σ(1/α_n + 1/β_n) 대신 Σ αβ/(α+β)·Σ(α²+β²)/(αβ)² 등 다른 대칭식(★2) (2) 일차항 계수를 -1 로 바꾸면 근이 n+1, -n 으로 명시적이라 직접 구하는 갈래가 생김(SC d1 · ★2~3) (3) 근의 합·곱을 직접 주면 XU 소멸 ★1~2."
```

### 유형 02 로그를 포함한 급수의 합

```yaml
- id: RPM-CALC2-0170
  page: 26
  vendor_label: "유형 02 로그를 포함한 급수의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    급수 $\sum\log\left(1+\dfrac{1}{n^2+2n}\right)$ 의 합. 5지선다.
  category: "진수 통분 → (n+1)²/(n(n+2)) → 로그 차 망원 → 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "로그의 합을 진수의 곱(또는 log(n+1)-log n 과 log(n+2)-log(n+1) 의 차)으로 바꿔 망원 — 합 표현 그대로는 진행 불가"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 급수의 합(로그 망원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 + 1/(n²+2n) = (n+1)²/(n(n+2)) 이므로 일반항 = {log(n+1) - log n} - {log(n+2) - log(n+1)}. S_n = log 2 - log((n+2)/(n+1)) → log 2. 유형 표준 골조 · 통찰 RT d1 · M_total 6 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "진수 = (n+1)²/(n(n+2)) → 로그 차 두 쌍 망원 → S_n = log 2 - log((n+2)/(n+1)) → log 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 1 + 1/(n²+2n) 을 1 + 1/((n+a)(n+a+2)) 로. 제약: 인수 차가 2 여야 분자가 완전제곱 (n+a+1)² 이 되어 망원, 답은 log((a+2)/(a+1))."
    creative: "(1) 로그 밑을 2·3 으로 바꿔 답을 정수로(★2) (2) Σ log(1 - 1/n²) (n≥2 · 진수 (n-1)(n+1)/n²) 로 시작 항 관리(★2) (3) 진수의 곱을 Π 로 계산하는 갈래와 로그 분해 갈래를 비교시키면 SC d1(★3 후보)."
```

```yaml
- id: RPM-CALC2-0171
  page: 26
  vendor_label: "유형 02 로그를 포함한 급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $a_1a_2\cdots a_n=\dfrac{n+5}{9n-2}$ 일 때 $\sum\log_3 a_n$ 의 합. 5지선다.
  category: "부분합 = log_3(a_1…a_n) → 곱 조건 대입 → 극한"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "급수의 부분합 Σ log_3 a_k 를 로그 성질로 log_3(a_1…a_n) 으로 묶어 주어진 곱 조건에 직결 — a_n = P_n/P_(n-1) 을 따로 구해 망원하는 우회를 건너뜀"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 급수의 부분합을 곱 조건으로 직결"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = log_3(a_1a_2…a_n) = log_3((n+5)/(9n-2)) → log_3(1/9) = -2. 일반항을 구하지 않고 부분합을 곱으로 닫는 전환(RT d2)이 핵심이며 그 뒤는 극한 한 줄. 벤더 중 ★2 · 통찰 1개 depth 2 라 +1 요건(통찰 2개 또는 depth 3) 미달 → ★2 유지. 통찰형.
    [분류 이슈] 전환 하나로 풀이가 끝나는 통찰형인데 M 이 작아 ★2 — 카탈로그에서 「부분합→곱 전환」이 독립 유형이면 ★3 후보.
  tier: star_2
  mechanism_primary: "S_n = log_3(a_1…a_n) = log_3((n+5)/(9n-2)) → log_3(1/9) = -2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱 조건 (n+5)/(9n-2) 의 최고차 계수비를 3^k(1/27·1/3·3) 로. 제약: 극한이 로그 밑의 거듭제곱이어야 답이 정수 · 유리식이 모든 n 에서 양수여야 로그 정의."
    creative: "(1) 곱 조건을 (n+1)²/(n(n+2)) 처럼 주고 a_n 을 먼저 구하게 유도하면 우회 갈래가 생겨 SC 성격(★2~3) (2) 조건을 log_3(a_1…a_n) = f(n) 으로 주면 전환이 소멸해 ★1 (3) 곱 대신 합 a_1+…+a_n 조건과 Σ a_n 으로 바꾸면 골조 자체가 사라짐(★1)."
```

```yaml
- id: RPM-CALC2-0172
  page: 26
  vendor_label: "유형 02 로그를 포함한 급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    급수 $\sum_{n=2}^{\infty}(\log_n 10-\log_{n+1}10)$ 의 합. 5지선다.
  category: "망원 → log_2 10 - lim log_(n+1) 10 → 밑 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 포함한 급수의 합(로그 망원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항이 f(n) - f(n+1) 꼴이라 S = log_2 10 - lim log_(n+1) 10. log_(n+1) 10 = 1/log(n+1) → 0 이고 log_2 10 = 1/log 2. 망원·밑 변환·극한 세 단계 모두 한 줄(밑이 n 인 로그 표기가 T-표기). 통찰 없음·M_total 4 → 벤더 중 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "망원 → log_2 10 - log_(n+1) 10 → log_(n+1) 10 = 1/log(n+1) → 0 → 1/log 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 n=2 를 3 으로(답 1/log 3)·진수 10 을 다른 수로. 제약: 밑 n ≥ 2(n=1 은 로그 밑 불가) · 답을 상용로그 밑 변환으로 표현."
    creative: "(1) 항을 1/log n - 1/log(n+1) 로 바꿔 쓰면 같은 골조(★1) (2) log_n 10 · log_(n+1) 10 의 곱을 포함해 부분분수와 결합(★2) (3) Σ log_n(n+1) 처럼 발산하는 로그 급수와 대비하는 ㄱㄴㄷ(★2)."
```

### 유형 03 항의 부호가 교대로 바뀌는 급수

```yaml
- id: RPM-CALC2-0173
  page: 27
  vendor_label: "유형 03 항의 부호가 교대로 바뀌는 급수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수렴하는 급수를 보기에서 고르기 — ㄱ $2-2+2-2+\cdots$ ㄴ $(4-4)+(4-4)+\cdots$ ㄷ $\left(\dfrac13-\dfrac14\right)+\left(\dfrac14-\dfrac15\right)+\cdots$. 5지선다.
  category: "홀짝 부분합 비교(ㄱ) · 괄호 항 = 0(ㄴ) · 망원(ㄷ)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부호가 교대로 바뀌는 급수 — 홀짝 부분합 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 S_(2n)=0, S_(2n-1)=2 로 극한 불일치 → 발산. ㄴ은 괄호 안이 한 항이라 a_n = 0, S_n = 0 → 수렴. ㄷ은 1/(n+2) - 1/(n+3) 망원 → 1/3 수렴. 「괄호가 있으면 한 항」 표기 규칙이 변별점(T-표기). 통찰 없음 · M_total 5 → 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ 홀짝 부분합 0·2 불일치 → 발산 / ㄴ 괄호 항 0 → 수렴 / ㄷ 망원 1/3 - 1/(n+3) → 수렴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 상수, ㄷ의 시작 분수 변경. 제약: ㄴ은 괄호 안이 0 이 되는 두 수 · ㄷ은 f(n)-f(n+1) 로 lim f 유한."
    creative: "(1) ㄱ을 괄호로 묶은 (2-2)+(2-2)+… 와 나란히 두어 괄호의 효과를 직접 대비(★2) (2) ㄷ의 괄호를 풀어 1/3 - 1/4 + 1/4 - … 로 쓰면 홀짝 부분합 조사가 추가(★2) (3) 수렴하는 것의 합까지 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0174
  page: 27
  vendor_label: "유형 03 항의 부호가 교대로 바뀌는 급수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    급수 $1-\dfrac12+\dfrac12-\dfrac13+\dfrac13-\dfrac14+\dfrac14-\cdots$ 의 수렴·발산 조사와 합.
  category: "S_(2n)·S_(2n-1) 각각 계산 → 극한 일치 → 수렴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부호가 교대로 바뀌는 급수 — 홀짝 부분합 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_(2n) = 1 - 1/(n+1) → 1, S_(2n-1) = 1 → 1 로 두 극한이 같으므로 수렴, 합 1. 괄호 없는 급수를 마음대로 묶으면 안 되므로 홀짝 부분합을 각각 확인하는 것이 유형의 절차. 통찰 없음 · M_total 5 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "S_(2n) = 1 - 1/(n+1) → 1, S_(2n-1) = 1 → 1 → 일치 → 수렴, 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 항·분모 시작점 변경. 제약: 짝수 부분합의 망원 뒤 남는 항이 홀수 부분합의 극한과 같아야 수렴 답 유지."
    creative: "(1) 0175 ㄷ처럼 첫 항을 1/2 - 2/3 + 2/3 … 로 바꿔 극한 불일치 → 발산(★2) (2) a_n 의 일반항을 짝수·홀수 항으로 나눠 쓰게 하기(★2) (3) S_(2n) 만 계산하고 수렴이라 답하는 오류를 지적하는 서술형(★2)."
```

```yaml
- id: RPM-CALC2-0175
  page: 27
  vendor_label: "유형 03 항의 부호가 교대로 바뀌는 급수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    발산하는 급수를 보기에서 고르기 — ㄱ $1-2+3-4+\cdots$ ㄴ $\left(2-\dfrac32\right)+\left(\dfrac32-\dfrac43\right)+\cdots$ ㄷ $\dfrac12-\dfrac23+\dfrac23-\dfrac34+\dfrac34-\cdots$. 5지선다.
  category: "일반항 ↛ 0(ㄱ) · 망원(ㄴ) · 홀짝 부분합 불일치(ㄷ)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부호가 교대로 바뀌는 급수 — 홀짝 부분합 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 |a_n| = n 으로 a_n 이 0 으로 가지 않음 → 발산. ㄴ은 괄호 항 (n+1)/n - (n+2)/(n+1) 망원 → S_n = 2 - (n+2)/(n+1) → 1 수렴. ㄷ은 S_(2n) = 1/2 - (n+1)/(n+2) → -1/2, S_(2n-1) = 1/2 로 불일치 → 발산. 세 도구(일반항 극한·망원·홀짝 부분합)를 각각 적용하는 종합 문항. 통찰 없음 · M_total 6 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "ㄱ a_n ↛ 0 → 발산 / ㄴ 망원 → 1 수렴 / ㄷ S_(2n) → -1/2 ≠ S_(2n-1) → 1/2 → 발산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄷ의 분수열 n/(n+1) 을 다른 f(n) 으로. 제약: ㄷ이 발산하려면 lim f(n) ≠ f(1)(홀짝 극한 불일치) — f(n) = 1/n 으로 바꾸면 0174 처럼 수렴."
    creative: "(1) ㄴ의 괄호를 풀어 홀짝 조사로 바꾸면 결과는 같으나 절차 추가(★2) (2) 수렴하는 급수의 합까지 묻기(★2) (3) 「급수가 수렴하면 a_n → 0」 명제의 역·대우 판단 보기 추가(★2 개념)."
```

### 유형 04 급수와 수열의 극한값 사이의 관계

```yaml
- id: RPM-CALC2-0176
  page: 27
  vendor_label: "유형 04 급수와 수열의 극한값 사이의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $\sum a_n=3$, 부분합 $S_n$ 일 때 $\lim\dfrac{2S_n+3a_n}{S_n-1}$ 의 값.
  category: "S_n → 3 · a_n → 0 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수 수렴 → 일반항 극한 0 의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    급수가 3 으로 수렴하므로 S_n → 3, a_n → 0. 대입하면 (6+0)/(3-1) = 3. 유형 핵심 정리(수렴 급수의 일반항 → 0)의 직접 적용 · 통찰 없음 · M_total 5 → 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "Σa_n = 3 → S_n → 3, a_n → 0 → (6+0)/(3-1) = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "급수 값과 분자·분모 계수 변경. 제약: 분모 극한 ≠ 0 (S_n - c 에서 c ≠ 급수 값)."
    creative: "(1) 분모를 S_n - 3 으로 두면 0/0 꼴로 정보 부족 — 오류 문항이므로 피할 것 (2) a_n 대신 a_(n+1)·S_(2n) 을 섞어 같은 극한임을 알게 하기(★2) (3) Σ(a_n - 1) 처럼 조건을 바꿔 a_n → 1 로(0178 골조 · ★2)."
```

```yaml
- id: RPM-CALC2-0177
  page: 27
  vendor_label: "유형 04 급수와 수열의 극한값 사이의 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\sum a_n=4$ 일 때 $\lim\dfrac{3a_n-6n-5}{4a_n+3n+1}$ 의 값. 5지선다.
  category: "a_n → 0 → n 으로 나눠 극한"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수 수렴 → 일반항 극한 0 의 활용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    급수 수렴이므로 a_n → 0. 분모·분자를 n 으로 나누면 a_n/n → 0 이고 (-6)/3 = -2. 급수 값 4 는 쓰이지 않는다. 두 단계 모두 표준 · 통찰 없음 · M_total 5 → 벤더 중하 ★1.
  tier: star_1
  mechanism_primary: "Σa_n 수렴 → a_n → 0 → n 으로 나눔 → (0-6)/(0+3) = -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -6·3 의 비 변경. 제약: n 의 계수비가 답이고 a_n 의 계수는 답에 영향 없음(함정으로 활용)."
    creative: "(1) n 대신 n² 항을 넣어 차수 판단 추가(★1) (2) na_n 을 넣으면 lim na_n 을 알 수 없어 오류 — 문항화 금지 메모 (3) Σ(a_n - 2) = 4 로 바꿔 a_n → 2 를 먼저 얻게(★2)."
```

```yaml
- id: RPM-CALC2-0178
  page: 27
  vendor_label: "유형 04 급수와 수열의 극한값 사이의 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    급수 $\sum(a_n-2)$ 가 수렴할 때 $\lim(3a_n-3)$ 의 값.
  category: "a_n - 2 → 0 → a_n → 2 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수 수렴 → 일반항 극한 0 의 활용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수렴하는 급수의 일반항 a_n - 2 → 0 이므로 a_n → 2, 3·2 - 3 = 3. 두 단계 · 통찰 없음 · M_total 5 → 벤더 중하 ★1.
  tier: star_1
  mechanism_primary: "Σ(a_n - 2) 수렴 → a_n - 2 → 0 → a_n → 2 → 3·2 - 3 = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 선형식 3a_n - 3 변경. 제약: 일반항의 상수만 극한을 결정, 급수의 합 값은 필요 없음."
    creative: "(1) Σ(2a_n - 1) 처럼 계수 붙은 일반항(★1) (2) Σ(a_n - 2) 와 Σ(b_n + 1) 두 조건으로 lim a_nb_n(★2) (3) Σ(a_n - 2) = 5 처럼 합 값을 주고 S_n 극한과 섞어 0176 골조로(★2)."
```

```yaml
- id: RPM-CALC2-0179
  page: 27
  vendor_label: "유형 04 급수와 수열의 극한값 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\sum\dfrac{5a_n-6}{2a_n+5}=2$ 일 때 $\lim a_n$ 의 값.
  category: "복합 일반항 b_n → 0 → a_n 을 b_n 으로 역표현 → 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(5a_n-6)/(2a_n+5) 를 한 수열 b_n 으로 두고 급수 수렴 → b_n → 0 을 a_n = (5b_n+6)/(5-2b_n) 으로 되돌려 극한 — a_n 의 수렴을 가정하지 않는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수 수렴 → 일반항 극한 0 의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b_n = (5a_n-6)/(2a_n+5) → 0. a_n 에 대해 풀면 a_n = (5b_n+6)/(5-2b_n) → 6/5. (5L-6)/(2L+5) = 0 으로 바로 L = 6/5 를 쓰는 것은 a_n 의 수렴을 가정하는 것이라 역표현이 정석(T-범위). 급수 값 2 는 쓰이지 않는다. 벤더 중 · 통찰 EQV d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "b_n = (5a_n-6)/(2a_n+5) → 0 → a_n = (5b_n+6)/(5-2b_n) → 6/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{6}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5·6·2·5 변경. 제약: 답 = (분자 상수)/(분자 a_n 계수) 이며 극한값에서 분모 2a_n+5 ≠ 0."
    creative: "(1) 급수 값 2 는 불필요한 정보 — 「수렴한다」로만 주어도 같은 답(★2 · 정보 과잉 함정 인식) (2) 일반항을 (a_n² - 4)/(a_n + 3) 처럼 이차로 주면 후보 ±2 와 수렴 여부 검증(VF d1 · ★3 후보) (3) lim a_n 대신 lim (2a_n+5)/a_n 을 묻기(★2)."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 26 · ★2 11 · ★3 0 · ★4 0 · ★5 0
- 통찰 라벨 있는 문항 4(0169 XU d1 · 0170 RT d1 · 0171 RT d2 · 0179 EQV d1) · 통찰형 1(0171) · 절차형 36 · premium 0
- type_hint 상위: 「등비급수의 수렴·발산과 합(공비 판정)」 5 · 「일반항이 0 으로 수렴하지 않는 급수의 발산 판정」 5 · 「부분합을 구해 급수의 수렴·발산 조사」 4 · 「부분분수를 이용한 급수의 합」 4(근과 계수 결합 1 포함) · 「급수 수렴 → 일반항 극한 0 의 활용」 4
- 벤더 신호 대비: 교과서 23문 전부 ★1(M_total 4) · 유형 14문 중 벤더 출발점보다 낮춘 문항 3(0172 중→★1 · 0177·0178 중하→★1), 높인 문항 0
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0169 | 근과 계수의 관계(공통수학1)를 XU 통찰로 라벨했으나 표준 절차로 볼 수도 있음 — ★ 영향 없음, 카탈로그 설계 때 「다른 단원 표준 공식 차용」의 라벨 정책 결정 필요 | ★2 |
| RPM-CALC2-0171 | 부분합 Σlog a_k = log(a_1…a_n) 전환(RT d2) 하나로 풀이가 끝나는 통찰형인데 M_total 5 라 벤더 중 ★2 유지 — 카탈로그에서 독립 유형이면 ★3 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「등비급수의 수렴·발산과 합」 5 · 「일반항 ↛ 0 발산 판정」 5 · 「부분합 조사」 4 · 「부분분수 급수의 합」 4 · 「급수 수렴 → a_n → 0」 4. 이 다섯이 02 급수 전반부의 base ★1~2 기본 유형.
- 따로 세울 유형: 「로그 급수의 부분합을 곱 조건으로 직결」(0171 · RT d2 · 같은 「유형 02」 안의 로그 망원(0170·0172)과 골조가 다름) · 「교대 부호 급수의 홀짝 부분합」(0173~0175 · 정의 기반 판정이라 망원·부분분수와 분리).
- 통합해도 될 유형: 교과서 02-4 의 네 group(등비급수 합 · 분리 합 · 수렴 조건 · 순환소수)은 「등비급수 기본」 한 유형의 하위 변형 · 「부분합 S_n 이 주어진 합」(0143·0144)과 「부분합 조사」(0145~0148)는 「부분합의 극한」 한 유형.
- 라벨 정책 결정 필요: 0169(근과 계수의 관계 XU d1)·0179(복합 일반항 역표현 EQV d1)처럼 유형의 표준 기법이 곧 통찰 d1 인 경우 base ★2 로 두되 라벨을 붙일지 여부.
