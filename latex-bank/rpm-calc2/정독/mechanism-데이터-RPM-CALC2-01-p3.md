---
name: mechanism-데이터-RPM-CALC2-01-p3
description: RPM 미적분Ⅱ 01 수열의 극한(3/4 · 유형 08~15) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 01 수열의 극한
  unit_code: CALC2-01
  part: "3/4"
  extract_range: "14~18쪽 · 0071~0106"
  total_problems: 36
  unit_total: 142
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 01 수열의 극한 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 01 수열의 극한 단원(전체 142문) 중 세 번째 범위인 14~18쪽 0071~0106 의 36문을 다룬다. 유형 08 ∞−∞ 꼴의 극한·미정계수의 결정(4문) · 유형 09 일반항 a_n 을 포함한 식의 극한값(4문) · 유형 10 수열의 극한의 대소 관계(8문) · 유형 11 참·거짓 판별(3문) · 유형 12 등비수열의 극한(6문) · 유형 13 등비수열의 수렴 조건(4문) · 유형 14 r^n 을 포함한 수열의 극한(4문) · 유형 15 x^n 을 포함한 극한으로 정의된 함수(3문)로, 모두 「유형」 구역이다. RPM 은 구역이 곧 난이도 층이라 유형 구역은 대표문제(태그 · level 없음)·난이도(중하 · 중 · 상중)에 따라 ★1~3 출발로 두었다. 이 범위의 벤더 신호는 「대표문제」 8문 · 「중하」 4문 · 「중」 18문 · 「상중」 6문 · 「서술형」 태그 2문(0085 · 0099)이다. 출발점에서 M_total·통찰로 ±1 조정했다(통찰 0·M_total ≤ 4 이고 벤더 level 이 「중하」 또는 없음이면 −1 적용 · 벤더가 「중」을 명시한 문항은 M_total 이 낮아도 ★2 유지 · 통찰 2개 이상 또는 depth 3 → +1 후보). M 축 관례: 함정이 없으면 Mₜ=0, 일반항이 주어지지 않은 추상 수열 {a_n} 문항은 Mₐ=2, 임의의 두 수열에 대한 명제 판별(유형 11)은 Mₐ=3 으로 두었다. 단일 d1 통찰로 ★2 에 머무는 문항은 insight_type 을 절차형으로 두고, depth 2 이상·통찰 2개 이상·통찰이 ★3 을 지탱하는 문항만 통찰형으로 두었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 `mechanism_primary`, 통찰 라벨 `insights[]`(절차형은 빈 배열), 바꿔도 되는 수와 제약 `variation_notes.numeric`, 골조를 유지한 채 설정을 바꾸는 `variation_notes.creative`(★ 가 변하는 지점 포함)를 채웠다. 그림 문항은 0105(그래프 5지선다) 하나이며 크롭 이미지를 보고 판정했고, 변형 시 그림 5개를 다시 그려야 한다는 제약을 numeric 에 적었다.

## 문항 데이터

### 유형 08 $\infty-\infty$ 꼴의 극한; 미정계수의 결정

```yaml
- id: RPM-CALC2-0071
  page: 14
  vendor_label: '유형 08 $\infty-\infty$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim{√(n²+4n−2) − (an+b)} = 2 를 만족시키는 상수 a, b 에 대하여 a+b 의 값. 5지선다.
  category: "수렴 조건으로 a 확정 → 유리화 → b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값이 존재하려면 √n² 의 성장을 an 이 상쇄해야 하므로 a>0, a=1 을 먼저 역추적(이후 유리화는 절차)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한의 미정계수 결정(수렴 조건으로 최고차 계수 확정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a≠1 이면 ∞ 또는 −∞ 로 발산하므로 a=1. 그러면 √(n²+4n−2)−n−b 를 유리화해 (4n−2)/(√(n²+4n−2)+n) → 2 이므로 2−b=2, b=0, a+b=1. 유형 대표문제·통찰 1개(BW d1)·M_total 7 → 출발점 ★2 유지. 함정은 a 의 부호(T-부호) 하나.
  tier: star_2
  mechanism_primary: "극한 존재 → a=1 → √(n²+4n−2)−n 유리화 → 2−b=2 → b=0 → a+b=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 n²+pn+q 의 p, q 와 극한값 L 을 바꿀 수 있음(b = p/2 − L). 제약: 근호 안 최고차 계수가 완전제곱(1, 4, 9)이어야 a 가 정수·유리수로 떨어지고, 선택지 5개 중 a+b 가 하나만 맞아야 함. L 이 p/2 와 같으면 b=0 이 되어 함정이 약해짐."
    creative: "(1) √(4n²+pn)−(an+b) 처럼 최고차 계수 4 로 바꾸면 a=2 확정 단계가 한 겹 더(★2 유지) (2) 극한값 대신 '수렴한다'만 주고 극한값을 묻기(0074 골조 · ★2~3) (3) a, b 를 등차·등비수열의 항 등 다른 조건으로 묶어 연립하면 I-CON 추가 ★3."
```

```yaml
- id: RPM-CALC2-0072
  page: 14
  vendor_label: '유형 08 $\infty-\infty$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim(√(n²+an) − √(n²+bn)) = 10 일 때 상수 a, b 에 대하여 a−b 의 값.
  category: "켤레 유리화 → (a−b)/2 = 10"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한값 조건에서 미정계수 결정(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자·분모에 켤레를 곱하면 (a−b)n/(√(n²+an)+√(n²+bn)) → (a−b)/2. 이것이 10 이므로 a−b=20. a, b 각각은 정해지지 않고 차만 정해지는 구조라 유리화 한 번이 전부. 통찰 없음·M_total 5 → −1 후보이나 벤더 「중」 표시가 명시적이라 ★2 유지.
  tier: star_2
  mechanism_primary: "켤레 유리화 → (a−b)n/(√(n²+an)+√(n²+bn)) → (a−b)/2 = 10 → a−b = 20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$20$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 L(정수·분수)과 근호 안 1차항 계수 자리. 제약: 두 근호의 n² 계수가 같아야 ∞−∞ 가 수렴하고, 답은 2L 로 결정됨. 근호 안 상수항(+c)을 넣어도 극한에 영향 없음(함정용)."
    creative: "(1) 극한을 an+b 형태와의 차로 바꿔 a, b 를 각각 결정(0071 골조 ★2) (2) 두 근호의 n² 계수를 다르게 주고 '수렴하려면' 조건으로 계수 일치를 역추적하게 하면 I-BW 추가 ★3 (3) 극한값과 a+b 를 함께 주어 a, b 를 연립(★2)."
```

```yaml
- id: RPM-CALC2-0073
  page: 14
  vendor_label: '유형 08 $\infty-\infty$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim 1/(√(9n²+an) − 3n + a) = 2/7 일 때 상수 a 의 값.
  category: "분모의 ∞−∞ 부분만 유리화 → 분모 극한 7a/6 → 역수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한값 조건에서 미정계수 결정(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 (√(9n²+an)−3n)+a 로 보면 앞부분은 유리화로 an/(√(9n²+an)+3n) → a/6, 분모 전체 → 7a/6. 주어진 극한 6/(7a) = 2/7 에서 a=3. 분모 끝의 +a 를 유리화 짝에 넣으면 꼬이는 표기 함정(T-표기) 하나. 통찰 없음·M_total 7 → 벤더 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "분모 = (√(9n²+an)−3n)+a → 유리화 → a/6 + a = 7a/6 → 6/(7a) = 2/7 → a = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 9n² 을 다른 완전제곱(4n², 16n²)으로, 밖의 −3n 을 그에 맞게, 극한값 2/7 을 바꿀 수 있음. 제약: 근호 안 최고차 계수 = (밖의 1차 계수)² 이어야 분모가 수렴하고, 분모 극한 a/(2·3)+a 가 0 이 아니어야 함. a 가 정수로 떨어지도록 극한값을 6/(7a) 꼴로 맞춤."
    creative: "(1) 분모 상수를 a 가 아닌 다른 상수 c 로 두면 a/6+c 가 되어 a 와 c 를 함께 주는 조건 필요(★2) (2) 분모에 √(9n²+an)−(3n+a) 처럼 괄호를 두면 유리화 짝이 바뀌어 극한이 a/6−a 로 부호 함정(T-부호 ★2) (3) 분자도 ∞−∞ 로 두면 유리화 두 번 → Mₖ 상승 ★3."
```

```yaml
- id: RPM-CALC2-0074
  page: 14
  vendor_label: '유형 08 $\infty-\infty$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수렴하는 수열 a_n = √((n−1)(n−2)) + kn (k 상수) 의 극한값.
  category: "수렴 조건으로 k=−1 확정 → 유리화 → −3/2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'수렴한다'는 조건만 주어짐 → √n² 의 성장을 kn 이 상쇄하도록 k=−1 을 역추적(k=1 이면 +∞ 발산)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한의 미정계수 결정(수렴 조건으로 최고차 계수 확정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극한값이 주어지지 않고 '수렴'만 주어져 k 를 먼저 정해야 한다. √((n−1)(n−2)) ≈ n 이므로 k=−1 이 유일하고, 그 뒤 √(n²−3n+2)−n 유리화로 (−3n+2)/(√(n²−3n+2)+n) → −3/2. 0071 과 같은 골조지만 극한값 없이 수렴 조건만으로 k 를 잡는 점·(n−1)(n−2) 전개가 한 겹 더. 벤더 「상중」 출발 ★3·BW d1·M_total 7 → 조정 조건 없음 ★3.
  tier: star_3
  mechanism_primary: "수렴 → k=−1 → √(n²−3n+2)−n 유리화 → (−3n+2)/(√(n²−3n+2)+n) → −3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 (n−p)(n−q) 로 두면 극한값은 −(p+q)/2 (k=−1). 제약: 근호 안 최고차 계수가 1(또는 완전제곱)이어야 k 가 정수, 근호 안이 모든 자연수 n 에서 0 이상이어야 함(p, q ≤ 1 이거나 n≥1 에서 부호 확인)."
    creative: "(1) a_n = √(4n²+pn) + kn 으로 k=−2 확정(같은 골조 ★3) (2) '수렴한다' 대신 극한값을 주고 k 와 근호 안 계수를 함께 묻기 → I-CON 추가 ★3 (3) 수렴 조건을 lim a_n = 0 으로 바꾸면 k 결정 후 상수항까지 맞춰야 해 미정계수 2개 → ★3~4."
```

### 유형 09 일반항 $a_n$을 포함한 식의 극한값

```yaml
- id: RPM-CALC2-0075
  page: 14
  vendor_label: "유형 09 일반항 $a_n$을 포함한 식의 극한값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim (3a_n−2)/(a_n+1) = 2 일 때 lim a_n 의 값.
  category: "b_n 으로 치환 → a_n 을 b_n 의 식으로 → 극한 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수렴하는 b_n=(3a_n−2)/(a_n+1) 을 놓고 a_n=(b_n+2)/(3−b_n) 으로 뒤집어 lim a_n 의 존재까지 함께 확보"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반항 a_n 을 포함한 식의 극한값(수렴 수열로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    lim a_n 이 존재한다는 보장이 없으므로 α 를 바로 대입하는 대신 b_n 을 두고 a_n 을 b_n 으로 나타내면 (2+2)/(3−2)=4. 대입만 하면 3α−2=2α+2 로 같은 답이 나오지만 근거가 빠짐. 유형 대표문제·EQV d1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "b_n=(3a_n−2)/(a_n+1) → a_n=(b_n+2)/(3−b_n) → lim b_n=2 대입 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수식의 계수 (p a_n + q)/(r a_n + s) 와 극한값 L. 제약: ps−qr ≠ 0(뒤집을 수 있어야), rL − p ≠ 0 이어야 하며 답이 정수·간단한 분수가 되도록 L 선택."
    creative: "(1) 조건을 a_n² 등 비선형으로 주면 뒤집을 때 부호 분기 → I-MI 추가 ★3 (2) 극한값 대신 lim (2a_n+1)/(a_n−1) 처럼 다른 식의 극한을 묻기(같은 골조 ★2) (3) '수열 a_n 이 수렴할 때'를 명시하고 대입만으로 풀게 하면 ★1."
```

```yaml
- id: RPM-CALC2-0076
  page: 14
  vendor_label: "유형 09 일반항 $a_n$을 포함한 식의 극한값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (2n²−3n)a_n = 4 일 때 lim n²a_n 의 값. 5지선다.
  category: "n²a_n 을 (n²/(2n²−3n))·(2n²−3n)a_n 으로 분해 → 곱의 극한"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 식에 수렴 조건 (2n²−3n)a_n 을 인수로 끼워 넣고 남는 유리식 n²/(2n²−3n) 의 극한 1/2 을 곱함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반항 a_n 을 포함한 식의 극한값(수렴 조건 끼워 넣기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n 자체의 극한은 0 이라 곱셈 법칙을 바로 못 쓰고, 수렴이 보장된 (2n²−3n)a_n 을 인수로 만들어야 한다. n²/(2n²−3n) → 1/2 이므로 (1/2)·4 = 2. 벤더 「중」·EQV d1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "n²a_n = n²/(2n²−3n) × (2n²−3n)a_n → (1/2)×4 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 다항식 pn²+qn 과 극한값 L, 구하는 식의 차수. 제약: 구하는 식과 조건식의 차수가 같아야 유한 극한(차수가 다르면 0 또는 발산 → 별도 문제), 답 = L/p 가 선택지에 하나만."
    creative: "(1) 조건과 구하는 식의 차수를 다르게 해 답이 0 이 되는 경우를 섞은 ㄱㄴㄷ 보기(★2) (2) 조건을 두 개(0077 골조)로 늘려 곱·몫 결합(★2) (3) 조건을 lim (n²+1)a_n = 4 로 주고 lim (n a_n)(n+3) 같은 곱을 묻기 — 인수 분해가 두 겹(★2~3)."
```

```yaml
- id: RPM-CALC2-0077
  page: 14
  vendor_label: "유형 09 일반항 $a_n$을 포함한 식의 극한값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (n²+2n)a_n = 2, lim (3n−2)b_n = 6 일 때 lim (4n+2)a_n/b_n 의 값.
  category: "두 수렴 조건을 인수로 끼워 넣고 남는 유리식 극한을 곱함"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(4n+2)a_n/b_n = (4n+2)(3n−2)/(n²+2n) × (n²+2n)a_n ÷ (3n−2)b_n 으로 재배열해 조건 둘을 인수로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반항 a_n 을 포함한 식의 극한값(수렴 조건 끼워 넣기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n 은 n² 급으로, b_n 은 n 급으로 0 에 가므로 직접 계산 불가. 조건 둘을 각각 인수로 만들면 남는 유리식 (4n+2)(3n−2)/(n²+2n) → 12, 전체는 12×2/6 = 4. 벤더 「중」·EQV d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(4n+2)a_n/b_n = [(4n+2)(3n−2)/(n²+2n)]·[(n²+2n)a_n]/[(3n−2)b_n] → 12·2/6 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건의 다항식 차수(2차·1차)와 극한값 2, 6, 구하는 식의 계수. 제약: 구하는 식의 차수 = (a_n 조건 차수) − (b_n 조건 차수) 이어야 유한 극한, 남는 유리식의 최고차 계수 비가 정수가 되도록 계수 선택."
    creative: "(1) 조건 하나를 부등식(샌드위치)으로 주면 유형 10 과 결합(★2~3) (2) 조건을 lim a_n/b_n 꼴로 주고 (n a_n)(n b_n) 을 묻는 등 곱·몫 방향 바꾸기(★2) (3) 조건 차수를 맞추지 않아 극한이 0 또는 ∞ 가 되는 보기를 넣은 참·거짓(★3)."
```

```yaml
- id: RPM-CALC2-0078
  page: 14
  vendor_label: "유형 09 일반항 $a_n$을 포함한 식의 극한값"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (a_n − 3b_n) = 2, lim b_n = ∞ 일 때 lim (b_n−5)/(a_n+5) 의 값.
  category: "a_n = c_n + 3b_n 치환 → b_n 으로 나누기 → c_n/b_n → 0"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수렴하는 c_n=a_n−3b_n 을 두어 a_n=c_n+3b_n 으로 바꾼 뒤, 발산하는 b_n 으로 분자·분모를 나누면 (수렴)/(∞) → 0 으로 c_n 항이 사라져 1/3"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반항 a_n 을 포함한 식의 극한값(발산 수열로 나누기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n 자체는 발산하므로 극한 법칙을 직접 쓸 수 없다. 수렴하는 차 c_n 을 잡아 a_n 을 c_n+3b_n 으로 쓰고, ∞ 로 가는 b_n 으로 나누면 (1−5/b_n)/(c_n/b_n+3+5/b_n) → 1/3. '수렴/∞ → 0' 처리까지 두 겹이라 EQV d2. 벤더 「상중」 ★3·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "c_n=a_n−3b_n(수렴) → a_n=c_n+3b_n → 분자·분모 ÷ b_n → c_n/b_n→0 → 1/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 계수 3 과 극한값 2, 구하는 식의 상수 ±5. 제약: 답은 1/(계수) 로 결정되고 상수항·극한값 2 는 답에 영향 없음(함정용). b_n → ∞ 대신 −∞ 로 바꾸면 부호 확인 필요."
    creative: "(1) lim (a_n − 3b_n) = 2 를 lim a_n/b_n 조건으로 바꾸면 치환 없이 나누기만(★2) (2) 조건을 lim (2a_n + b_n) = 1, lim a_n = ∞ 처럼 계수를 바꿔 어떤 수열로 나눌지 고르게 하면 I-SC 기미 ★3 (3) 구하는 식을 (a_n b_n)/(b_n² + 1) 처럼 2차로 올리면 나누기 차수 판단 추가 ★3~4."
```

### 유형 10 수열의 극한의 대소 관계

```yaml
- id: RPM-CALC2-0079
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 자연수 n 에 대해 n²+n < (10n²+3)a_n < n²+2n 일 때 lim a_n 의 값.
  category: "양변을 10n²+3 으로 나눠 샌드위치"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 대소 관계(샌드위치 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부등식을 (10n²+3) 으로 나누면 양쪽 모두 1/10 로 수렴하므로 a_n → 1/10. 나누는 한 단계뿐이고 함정 없음. 유형 대표문제(출발 ★2)이지만 통찰 0·M_total 4 → −1 → ★1.
    [분류 이슈] 유형 대표문제이나 통찰 0·M_total 4 로 ★1 라벨. 대표문제에 ★2 하한을 둘지는 카탈로그 설계 때 결정.
  tier: star_1
  mechanism_primary: "부등식 ÷ (10n²+3) → 양쪽 극한 1/10 → 샌드위치 → 1/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{10}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양쪽 다항식의 최고차 계수(같아야 함)와 가운데 계수 10. 제약: 양쪽이 같은 극한으로 수렴해야 하고 가운데 계수가 양수(음수면 나눌 때 부등호 반전 → 함정 추가)."
    creative: "(1) 가운데 계수를 음수로 두어 부등호 반전(T-부호 ★2) (2) 양쪽 부등식에서 na_n 의 극한을 뽑고 다른 식의 극한을 묻기(0082 골조 ★2) (3) 부등식의 양끝을 근호식으로(★2)."
```

```yaml
- id: RPM-CALC2-0080
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (3n²−n)/(n²+1) < a_n < (3n²+n)/(n²+1) 일 때 lim a_n 의 값. 5지선다.
  category: "양쪽 유리식의 극한 → 샌드위치"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 대소 관계(샌드위치 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양쪽 유리식이 모두 3 으로 수렴하므로 a_n → 3. 나누기도 필요 없는 가장 기본 형태. 벤더 「중하」·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "양쪽 (3n²∓n)/(n²+1) → 3 → 샌드위치 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양쪽 분자의 최고차 계수(같게), 1차항 부호. 제약: 양쪽 극한이 같아야 하고 선택지에 0·±3 등 오답 후보를 둠."
    creative: "(1) 양쪽 극한이 다르게 주고 '극한값을 정할 수 있는가'를 묻는 참·거짓(★2) (2) 양쪽을 근호·지수식으로(0092 골조 ★2) (3) a_n 대신 na_n 이나 a_n/n 에 부등식을 주기(★2)."
```

```yaml
- id: RPM-CALC2-0081
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim cos(nθ)/n² 의 값 (θ 는 상수).
  category: "|cos| ≤ 1 → −1/n² ≤ · ≤ 1/n² → 0"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유계 항(삼각함수)의 극한(샌드위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos nθ 는 −1 이상 1 이하이므로 −1/n² ≤ cos nθ/n² ≤ 1/n². 양쪽이 0 으로 가 극한 0. 유계 항을 눌러 주는 한 단계뿐. 벤더 「중하」·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−1 ≤ cos nθ ≤ 1 → ÷n² → 양쪽 0 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 n², n, √n 등 발산하는 임의의 식, 분자 sin·cos·(−1)^n 등 유계 항. 제약: 분모가 ∞ 로 가야 답 0. θ 는 그대로 상수."
    creative: "(1) 분자를 n+cos nθ 로 바꿔 극한이 0 이 아니게(0084 골조 ★2) (2) 분모를 유계 항으로 두면 발산·진동 판정 ★2 (3) cos nθ 대신 가우스 기호 [nθ] 로 바꾸면 x−1<[x]≤x 부등식 → ★2."
```

```yaml
- id: RPM-CALC2-0082
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3n−3 < na_n < √(9n²+5n) 일 때 lim (n²+3n)a_n/(4n²−2) 의 값. 5지선다.
  category: "샌드위치로 lim a_n = 3 → 유리식 극한과 곱"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식을 n 으로 나눠 a_n → 3 을 먼저 확보하고, 구하는 식을 (n²+3n)/(4n²−2) × a_n 으로 분리해 곱의 극한으로 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "샌드위치로 얻은 극한을 곱·몫에 적용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부등식 양변을 n 으로 나누면 3−3/n < a_n < √(9+5/n) 이므로 a_n → 3. 구하는 식은 (n²+3n)/(4n²−2)·a_n → (1/4)·3 = 3/4. 샌드위치와 곱의 극한 두 단계 결합. 벤더 「중」·EQV d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부등식 ÷ n → a_n → 3 → (n²+3n)/(4n²−2)·a_n → (1/4)·3 → 3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양쪽 부등식의 계수(3n, √(9n²+…)) 와 구하는 유리식의 계수. 제약: 양쪽이 같은 극한으로, 구하는 식의 차수가 맞아 유한 극한이 되도록. 답 = (유리식 극한)×(a_n 극한)."
    creative: "(1) 부등식을 n²a_n 에 주고 lim (n+1)a_n 을 묻는 등 차수를 어긋나게 해 0 또는 발산 판정(★2~3) (2) 양쪽을 등비식으로(0092 골조 ★2) (3) 구하는 식에 a_n 이 분모에 오게 하면 0 이 아닌 극한 확인 필요 ★2."
```

```yaml
- id: RPM-CALC2-0083
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ 16−1/n ≤ a_n+b_n ≤ 16+1/n, ㈏ 10−1/n ≤ a_n−b_n ≤ 10+1/n 일 때 lim a_n b_n 의 값.
  category: "두 샌드위치로 합·차 극한 → a_n, b_n 극한 복원 → 곱"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합·차 두 조건의 극한 16, 10 을 결합해 lim a_n = 13, lim b_n = 3 을 복원(a_n = ((a_n+b_n)+(a_n−b_n))/2)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 부등식 조건에서 합·차 극한 복원(샌드위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 조건에서 샌드위치로 lim(a_n+b_n)=16, lim(a_n−b_n)=10. 두 수렴 수열의 합·차로 a_n, b_n 을 나타내면 각각 13, 3 으로 수렴, 곱은 39. 조건 둘을 하나로 묶는 단계(CON d1). 벤더 「중」·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "㈎㈏ 샌드위치 → lim(a_n+b_n)=16, lim(a_n−b_n)=10 → lim a_n=13, lim b_n=3 → 39"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$39$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값 16, 10(합·차가 같은 홀짝이면 정수 극한)과 오차항 1/n 의 형태. 제약: 두 조건이 독립(합과 차)이어야 복원 가능. 오차항은 0 으로 가는 어떤 식이든 무방."
    creative: "(1) 조건을 a_n+b_n, a_n b_n 으로 주어 이차방정식 근으로 복원(I-XU 기미 ★3) (2) 조건 하나를 lim a_n b_n 으로 주고 a_n² + b_n² 등 대칭식 묻기(★2~3) (3) 오차항을 (−1)^n/n 처럼 진동하게 해 부등호 방향 확인 ★2."
```

```yaml
- id: RPM-CALC2-0084
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (3n − sin nθ)/(2n+1) 의 값 (θ 는 상수). 5지선다.
  category: "−1 ≤ sin ≤ 1 로 분자를 양쪽에서 누르고 유리식 극한"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유계 항(삼각함수)의 극한(샌드위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin nθ 가 유계이므로 (3n−1)/(2n+1) ≤ 주어진 식 ≤ (3n+1)/(2n+1), 양쪽 모두 3/2. 유계 항을 누르는 한 단계와 유리식 극한. 통찰 0·M_total 4 → −1 후보이나 분수 안에서 양쪽 부등식을 세워야 하고 벤더가 「중」으로 명시해 ★2 유지.
  tier: star_2
  mechanism_primary: "−1 ≤ sin nθ ≤ 1 → (3n−1)/(2n+1) ≤ · ≤ (3n+1)/(2n+1) → 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 1차 계수(답 = 비)와 상수, 유계 항의 종류(sin, cos, (−1)^n). 제약: 분모가 양수로 발산해야 부등호 유지, 답이 선택지에 하나만."
    creative: "(1) 유계 항을 분모에 두기 → 분모 부호 확인 ★2 (2) 분자에 n sin nθ 처럼 유계 항×n 을 넣어 극한이 존재하지 않게 하는 참·거짓 ★3 (3) 유계 항 대신 [nθ] 를 넣어 가우스 부등식 ★2."
```

```yaml
- id: RPM-CALC2-0085
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    2n < a_n < 2n+1 일 때 lim (a_1+a_2+…+a_n)/(7n²+10) 의 값. 서술형.
  category: "항별 부등식을 더해 합의 부등식 → 등차 합 → 샌드위치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 항의 부등식 2k < a_k < 2k+1 을 k=1…n 으로 더해 n²+n < Σa_k < n²+2n 이라는 합의 부등식으로 옮김(등차 합 계산 포함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항 부등식의 합으로 부분합 극한(샌드위치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n 의 극한은 없고(발산) 합의 극한을 묻는다. 항별 부등식을 더하면 n(n+1) < a_1+…+a_n < n²+2n, 양쪽을 7n²+10 으로 나누면 모두 1/7. 조건을 합의 부등식으로 바꾸는 단계가 핵심(EQV d2). 벤더 「상중」·서술형 ★3·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "2k<a_k<2k+1 을 k=1…n 합 → n²+n < Σa_k < n²+2n → ÷(7n²+10) → 1/7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{7}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 부등식의 계수 2 와 폭 1, 분모 7n²+10 의 계수. 제약: 합이 n² 급이므로 분모도 2차여야 유한 극한(답 = 계수/분모계수), 항 부등식 폭이 상수·n 이하면 합의 양끝이 같은 극한."
    creative: "(1) 항 부등식 폭을 n 으로(2n < a_n < 3n) 두면 양끝 극한이 달라져 '결정 불가' 참·거짓 ★3 (2) 부등식을 a_n 이 아닌 a_n/n 에 주고 합을 묻기 ★3 (3) 합 대신 Σ a_k² 를 묻기 → Σk² 공식 ★3."
```

```yaml
- id: RPM-CALC2-0086
  page: 15
  vendor_label: "유형 10 수열의 극한의 대소 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²−(n+2)x+a_n 은 x축과 만나고, y=x²−(n−1)x+a_n 은 만나지 않을 때 lim a_n/(n²+2n) 의 값.
  category: "판별식 두 조건 → a_n 의 양쪽 부등식 → 샌드위치"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'x축과 만난다/만나지 않는다'를 판별식 (n+2)²−4a_n ≥ 0, (n−1)²−4a_n < 0 으로 번역해 (n−1)²/4 < a_n ≤ (n+2)²/4 라는 샌드위치 부등식을 스스로 구성"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "판별식 조건을 부등식으로 옮긴 샌드위치"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기하 조건을 판별식으로 옮기면 a_n 의 상한·하한이 각각 나온다. 두 부등식을 합쳐 (n−1)²/4 < a_n ≤ (n+2)²/4, 양쪽을 n²+2n 으로 나누면 모두 1/4. 부등식이 문제에 없고 학생이 만들어야 해 RT d2. 등호 유무(T-경계)는 극한에 영향 없음. 벤더 「상중」 ★3·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "만남 → (n+2)²−4a_n ≥ 0 · 안 만남 → (n−1)²−4a_n < 0 → (n−1)²/4 < a_n ≤ (n+2)²/4 → ÷(n²+2n) → 1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 1차 계수 (n+p), (n+q) 와 분모 n²+2n. 제약: 두 계수 모두 n 의 1차(그래야 a_n 이 n²/4 급)여야 하고 p > q 여야 부등식이 양립(하한 < 상한). 답은 1/4 로 고정되며 분모 최고차 계수를 바꾸면 답이 바뀜."
    creative: "(1) 두 조건을 '서로 다른 두 점에서 만난다/한 점에서 접한다'로 바꾸면 등호 처리 강화(★3) (2) 곡선 대신 원과 직선의 위치 관계(거리 조건)로 부등식을 만들게 하면 RT 골조 유지 ★3 (3) 부등식 한쪽만 주고 다른 쪽을 lim a_n/n² 이 존재하도록 하는 조건에서 찾게 하면 I-BW 추가 ★4."
```

### 유형 11 수열의 극한에 대한 참, 거짓 판별

```yaml
- id: RPM-CALC2-0087
  page: 16
  vendor_label: "유형 11 수열의 극한에 대한 참, 거짓 판별"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 수열에 대한 명제 ㄱ(둘 다 ∞ 이면 비의 극한 1) ㄴ(a_n→∞, a_n−b_n 수렴이면 b_n/a_n → 1) ㄷ(둘 다 수렴하고 a_n<b_n 이면 극한도 <) 의 참·거짓. 5지선다.
  category: "명제별 반례 구성·증명 → 참인 것 고르기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ: b_n/a_n = 1 − (a_n−b_n)/a_n 으로 고쳐 (수렴)/(∞) → 0 을 써 참임을 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한 명제 참·거짓(반례 구성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 a_n=n², b_n=n 이 반례, ㄷ은 a_n=0, b_n=1/n 처럼 극한이 같아지는 표준 반례(부등호는 극한에서 등호를 포함). ㄴ만 참이며 b_n/a_n 을 1−(a_n−b_n)/a_n 으로 바꾸는 변환이 핵심(EQV d1). 반례 둘은 교과서 표준 반례라 통찰로 세지 않음. 유형 대표문제·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 반례(n², n) → ㄴ b_n/a_n = 1−(a_n−b_n)/a_n → 1 참 → ㄷ 반례(0, 1/n · 극한 등호) → ②"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제의 극한값(1 대신 다른 상수)·부등호 방향·수렴/발산 조합. 제약: 참인 명제 수를 하나 또는 둘로 유지하고 선택지 조합이 답 하나로 결정되게. 반례가 자연수 n 전체에서 성립하는지 확인."
    creative: "(1) ㄴ 을 'a_n−b_n 수렴, b_n → ∞ 이면 a_n/b_n → 1' 로 방향 바꾸기(★2) (2) ㄷ 의 부등호를 ≤ 로 바꾸면 참이 되어 답 변화(★2) (3) 반례를 직접 쓰게 하는 서술형으로 바꾸면 반례 구성이 I-BW 로 살아나 ★3."
```

```yaml
- id: RPM-CALC2-0088
  page: 16
  vendor_label: "유형 11 수열의 극한에 대한 참, 거짓 판별"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㄱ(|a_n|→0 이면 a_n→0) ㄴ(a_n→∞, b_n→0 이면 a_n b_n→0) ㄷ(a_n b_n→0 이면 a_n→0 또는 b_n→0) 의 참·거짓. 5지선다.
  category: "명제별 증명(샌드위치)·반례 구성"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ: 곱이 항상 0 이면서 어느 쪽도 수렴하지 않는 반례(a_n=1+(−1)^n, b_n=1−(−1)^n 처럼 번갈아 0)를 역으로 설계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한 명제 참·거짓(반례 구성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 −|a_n| ≤ a_n ≤ |a_n| 샌드위치로 참. ㄴ은 a_n=n, b_n=1/n(곱 1)이 표준 반례. ㄷ은 두 수열이 번갈아 0 이 되도록 만들어야 해 반례 설계가 한 단계 통찰(BW d1). 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 샌드위치 −|a_n|≤a_n≤|a_n| 참 → ㄴ 반례(n, 1/n) → ㄷ 반례(번갈아 0 인 두 진동 수열) → ①"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제의 극한값(0 대신 상수 c: |a_n|→c 이면 a_n→c 는 c≠0 에서 거짓 — 부호 반례), ∞ 와 0 의 조합. 제약: ㄱ은 0 일 때만 참이므로 상수를 바꾸면 답이 바뀜을 의식."
    creative: "(1) ㄱ 을 |a_n| → 2 이면 a_n → 2 로 바꿔 거짓 명제로(반례 2·(−1)^n · ★2) (2) ㄷ 에 'a_n 수렴' 조건을 추가해 참·거짓이 갈리게(★3) (3) 서술형으로 반례 제시를 요구하면 ★3."
```

```yaml
- id: RPM-CALC2-0089
  page: 16
  vendor_label: "유형 11 수열의 극한에 대한 참, 거짓 판별"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 수열에 대한 다섯 명제(수렴·발산의 곱·차·부분수열·샌드위치 변형) 중 옳은 것 하나 고르기. 5지선다(세로).
  category: "다섯 명제 각각 반례 또는 증명 → 참인 것 하나"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "③: b_n = a_n − (a_n−b_n) 으로 b_n 의 수렴을 확보한 뒤 곱의 극한 법칙으로 a_n b_n 수렴을 증명"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "④·⑤: 짝수항·홀수항 극한이 다른 진동 수열, b_n−a_n → 0 이지만 사이의 c_n 이 발산하는 수열(a_n=n, b_n=n+1/n)을 역설계"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "수열의 극한 명제 참·거짓(반례 구성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ①은 a_n=0, b_n=n, ②는 a_n=b_n=(−1)^n, ④는 a_{2n}→1, a_{2n−1}→0 인 진동 수열, ⑤는 a_n=n, b_n=n+1/n(사이의 c_n 도 발산)이 반례이고 ③만 참(b_n = a_n−(a_n−b_n) 수렴 → 곱 수렴). ④·⑤ 반례는 표준 반례를 넘어 스스로 설계해야 하고 ③은 변환이 필요해 통찰 2개(EQV d1 + BW d1). 벤더 「중」 ★2 출발이나 통찰 2개·명제 5개 → ★3.
    [분류 이슈] 벤더 「중」이나 명제 5개·반례 설계 2건으로 ★3 라벨. 참·거짓 문항에서 반례 설계를 통찰로 셀지 기준이 필요.
  tier: star_3
  mechanism_primary: "①②④⑤ 반례 설계(0·n / (−1)^n / 부분수열 극한 상이 / n, n+1/n) → ③ b_n=a_n−(a_n−b_n) 수렴 → 곱 수렴 → ③"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제 수(3~5)와 조합, 각 명제의 연산(곱·차·몫). 제약: 참인 명제가 정확히 하나여야 하며, ⑤처럼 샌드위치 정리의 조건(양끝이 같은 값으로 수렴)을 빠뜨린 변형은 반례가 발산 수열이어야 함."
    creative: "(1) ④를 'a_{2n}, a_{2n−1} 이 같은 값으로 수렴하면 a_n 도 수렴'으로 바꾸면 참이 됨(★3) (2) ⑤에 'a_n 수렴' 조건을 추가하면 참으로 뒤집힘(★3) (3) 반례를 직접 쓰는 서술형이면 ★3~4."
```

### 유형 12 등비수열의 극한

```yaml
- id: RPM-CALC2-0090
  page: 16
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim (3ⁿ − 2^(2n−1))/(3^(n−1) + 2^(2n)) 의 값. 5지선다.
  category: "2^(2n) = 4ⁿ 정리 → 최대 밑 4ⁿ 으로 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한(최대 밑으로 나누기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^(2n−1) = (1/2)·4ⁿ, 3^(n−1) = (1/3)·3ⁿ 으로 고친 뒤 밑이 가장 큰 4ⁿ 으로 나누면 (0 − 1/2)/(0 + 1) = −1/2. 지수 정리(T-표기)가 유일한 걸림돌. 유형 대표문제·통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "2^(2n−1)=4ⁿ/2, 3^(n−1)=3ⁿ/3 → ÷4ⁿ → (3/4)ⁿ→0 → −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3, 4(2^(2n))과 지수의 상수 이동(n−1, 2n−1, n+1). 제약: 분자·분모의 최대 밑이 같아야 유한 극한(다르면 0 또는 발산), 답이 선택지 부호 함정(−1/2 vs 1/2)과 구분되게."
    creative: "(1) 분자와 분모의 최대 밑을 다르게 해 0·발산 판정 ㄱㄴㄷ(★2) (2) 5ⁿ − 3ⁿ 처럼 밑을 세 개 섞기(★2) (3) 밑에 문자 r 을 넣어 |r| 분기(유형 14 골조 ★3)."
```

```yaml
- id: RPM-CALC2-0091
  page: 16
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (√(9ⁿ − 3ⁿ) − 3ⁿ) 의 값.
  category: "9ⁿ = (3ⁿ)² 로 보고 ∞−∞ 유리화 → 3ⁿ 으로 나누기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "9ⁿ = (3ⁿ)² 임을 읽어 근호식의 ∞−∞ 를 √(n²+an)−n 과 같은 유리화 골조로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비 ∞−∞ 꼴의 유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    켤레를 곱하면 −3ⁿ/(√(9ⁿ−3ⁿ)+3ⁿ), 분자·분모를 3ⁿ 으로 나누면 −1/(√(1−(1/3)ⁿ)+1) → −1/2. 유형 08 의 유리화 골조를 등비 밑으로 옮겨 보는 것이 핵심(EQV d1). √9ⁿ = 3ⁿ 표기 함정 하나. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "켤레 유리화 → −3ⁿ/(√(9ⁿ−3ⁿ)+3ⁿ) → ÷3ⁿ → −1/(√(1−(1/3)ⁿ)+1) → −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (9, 3) 을 (4, 2)·(25, 5) 등 (r², r) 쌍으로, 근호 안 −3ⁿ 을 ±k·3ⁿ 으로(답 = ∓k/2). 제약: 근호 안이 양수(9ⁿ > k·3ⁿ 이 n≥1 에서 성립), 근호 밖 항의 밑이 √(안의 최대 밑)."
    creative: "(1) √(9ⁿ+3ⁿ) − √(9ⁿ−3ⁿ) 처럼 양쪽 근호(★2) (2) √(4ⁿ+2ⁿ) − 3ⁿ 처럼 밑이 안 맞는 경우를 섞어 발산 판정 ㄱㄴㄷ(★3) (3) 근호 안 계수를 미정으로 두고 극한값에서 결정(유형 08 골조 ★2~3)."
```

```yaml
- id: RPM-CALC2-0092
  page: 17
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    5^(n+1) − 2ⁿ < a_n < 5^(n+1) + 2ⁿ 일 때 lim a_n/(5ⁿ + 2^(n−1)) 의 값.
  category: "부등식을 5ⁿ + 2^(n−1) 로 나누고 5ⁿ 으로 정리 → 샌드위치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비 부등식의 샌드위치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 양수 5ⁿ+2^(n−1) 로 나누면 (5·5ⁿ ∓ 2ⁿ)/(5ⁿ + 2ⁿ/2) 꼴, 5ⁿ 으로 나누면 양쪽 모두 5 → a_n/(5ⁿ+2^(n−1)) → 5. 샌드위치와 등비 극한의 절차 결합. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부등식 ÷ (5ⁿ+2^(n−1)) → 양쪽 ÷5ⁿ → (2/5)ⁿ→0 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (5, 2) 와 지수 이동(n+1, n−1), 오차항 ±2ⁿ. 제약: 오차항 밑 < 주항 밑이어야 양끝이 같은 극한, 답 = 5^(n+1)/5ⁿ = 5 로 계수 이동에 따라 바뀜."
    creative: "(1) 오차항 밑을 주항과 같게(±5ⁿ) 두면 양끝 극한이 달라져 결정 불가 참·거짓(★3) (2) 구하는 식을 a_n/5ⁿ 또는 lim (a_n − 5^(n+1))/2ⁿ 으로 바꿔 차수 판단(★2~3) (3) 부등식을 log 로 감싸 지수·로그 결합(★3)."
```

```yaml
- id: RPM-CALC2-0093
  page: 17
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수렴하는 a_n 에 대해 lim (5^(n+1) + 3ⁿa_n)/(3^(n+1) − 5ⁿa_n) = 6 일 때 lim a_n 의 값.
  category: "5ⁿ 으로 나눠 (3/5)ⁿ a_n → 0 처리 → α 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_n 이 수렴하므로 (3/5)ⁿ a_n → 0 임을 써서 5ⁿ 으로 나눈 식이 5/(−α) 로 줄어듦을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비 극한과 수렴 수열의 결합(미정 극한값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자·분모를 5ⁿ 으로 나누면 (5 + (3/5)ⁿ a_n)/(3(3/5)ⁿ − a_n). 수렴하는 a_n 에 0 으로 가는 (3/5)ⁿ 을 곱하면 0 이므로 극한은 −5/α, 이것이 6 이라 α = −5/6. 수렴 조건을 활용해 항을 지우는 단계(EQV d1)·부호 함정(T-부호) 하나. 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "÷5ⁿ → (3/5)ⁿa_n→0 → −5/α = 6 → α = −5/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (5, 3) 과 지수 이동(n+1), 극한값 6. 제약: 최대 밑 5ⁿ 이 분자(상수항)와 분모(a_n 항) 양쪽에 있어야 α 가 남고, 극한값 ≠ 0 이어야 α 유한. 답 = −5/L."
    creative: "(1) '수렴하는' 조건을 빼면 a_n 발산 case 도 따져야 하는 분기(I-MI ★3) (2) 극한값을 미정 k 로 주고 α 와 k 의 관계식 묻기(★2) (3) 분모에 5ⁿ a_n 대신 4ⁿ a_n 을 두면 극한이 발산해 조건 모순 → 참·거짓 ★3."
```

```yaml
- id: RPM-CALC2-0094
  page: 17
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_n = n·3ⁿ 일 때 lim S_n/a_n 의 값. 5지선다.
  category: "a_n = S_n − S_(n−1) → 3^(n−1)(2n+1) → 유리식 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 에서 a_n 복원 후 등비 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = n·3ⁿ − (n−1)·3^(n−1) = 3^(n−1)(2n+1) (n≥2, a_1=3 도 같은 식). S_n/a_n = 3n/(2n+1) → 3/2. 수열 단원의 S_n→a_n 복원과 3^(n−1) 묶기가 전부라 절차형. n≥2 조건(T-범위)은 극한에 무관. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_n = S_n − S_(n−1) = 3^(n−1)(2n+1) → S_n/a_n = 3n/(2n+1) → 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 S_n 의 다항 계수(n, n², 2n+1). 제약: S_n = p(n)·rⁿ 꼴이면 a_n = r^(n−1)((r−1)p(n) + Δ) 로 답이 r/(r−1) 에 수렴하는지 확인, r>1."
    creative: "(1) S_n = 3ⁿ + n 처럼 등비+다항 합으로 두면 지배항 판단 추가(★2) (2) lim a_(n+1)/a_n 이나 lim (S_(n+1) − S_n)/S_n 등 비 형태(★2) (3) S_n 을 로그로 주어 a_n 이 로그 차가 되게 하면 단원 결합 ★3."
```

```yaml
- id: RPM-CALC2-0095
  page: 17
  vendor_label: "유형 12 등비수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x² − 2x − 1 = 0 의 두 근 α, β 에 대해 lim (α^(n+2) + β^(n+2))/(αⁿ + βⁿ) 의 값. 5지선다.
  category: "근 구해 |α| > 1 > |β| 판정 → αⁿ 으로 나누기 → α²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 근의 절댓값을 비교해 |β|<1<|α| 임을 확인하고 지배 근 αⁿ 으로 나누면 극한이 α² 임을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식 두 근의 거듭제곱 비 극한(지배 근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근은 1±√2. |1−√2| < 1 < 1+√2 이므로 α = 1+√2 로 나누면 (β/α)ⁿ → 0, 극한 α² = 3+2√2. 지배 근을 고르는 판단(EQV d1)이 핵심이고 계산은 가벼움. |β|<1 판정(T-부호) 하나. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "α, β = 1±√2 → |β|<1<|α| → ÷αⁿ → (β/α)ⁿ→0 → α² = 3+2√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식 계수(두 근의 절댓값이 다르고 하나만 1 초과가 되도록: x²−2x−1, x²−4x+1 등)와 지수 이동(n+2, n+1). 제약: 두 근의 절댓값이 달라야 극한이 지배 근의 거듭제곱으로 떨어지고, 답이 근호 포함 선택지와 구분되게."
    creative: "(1) 두 근이 모두 절댓값 1 초과(x²−5x+6 → 2, 3)이면 큰 근으로 나누기(★2) (2) 근을 구하지 않고 근과 계수의 관계만으로 극한을 판단하는 ㄱㄴㄷ(★3) (3) 근이 켤레복소수면 극한 존재 판정 → I-MI ★3~4."
```

### 유형 13 등비수열의 수렴 조건

```yaml
- id: RPM-CALC2-0096
  page: 17
  vendor_label: "유형 13 등비수열의 수렴 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열 {((x−x²)/2)ⁿ} 이 수렴하도록 하는 정수 x 의 개수.
  category: "수렴 조건 −1 < r ≤ 1 → 이차부등식 두 개 → 정수 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 −1<r≤1"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1 < (x−x²)/2 ≤ 1 에서 x²−x+2 ≥ 0 은 항상 참, x²−x−2 < 0 은 −1<x<2. 정수 x = 0, 1 로 2개. 수렴 조건 부등식 적용은 유형 표준·절차형. 등호(≤1)와 부등호(−1<)의 비대칭(T-경계)·정수 조건(T-범위)이 함정. 유형 대표문제·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "−1 < (x−x²)/2 ≤ 1 → x²−x+2 ≥ 0(항상) · x²−x−2 < 0 → −1<x<2 → 정수 0, 1 → 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 (x−x²)/k 의 분모 k 와 2차식 계수. 제약: 오른쪽 부등식(≤1)이 항상 성립하거나 정수해가 명확히 갈리도록 판별식 확인, 답 개수가 정답과 맞도록."
    creative: "(1) 공비를 (x²−4x)/3 처럼 두어 양쪽 부등식 모두 유효 구간이 되게(★2) (2) '수렴'을 '0 에 수렴'으로 바꾸면 −1<r<1 로 등호 처리 변화(★2) (3) 공비에 절댓값이나 삼각함수(0097)·로그(0098)를 넣기(★2)."
```

```yaml
- id: RPM-CALC2-0097
  page: 17
  vendor_label: "유형 13 등비수열의 수렴 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 {(√2 cos x)ⁿ} 이 수렴하도록 하는 실수 x 의 범위 (0 ≤ x < π).
  category: "수렴 조건 → cos x 부등식 → [0, π) 에서 해 구간"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 −1<r≤1"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1 < √2 cos x ≤ 1 ⇔ −1/√2 < cos x ≤ 1/√2. [0, π) 에서 cos 는 감소하므로 π/4 ≤ x < 3π/4. 수렴 조건 적용은 표준이고, 등호가 π/4 쪽에 붙는 경계 처리(T-경계)와 정의역(T-범위)이 함정. 벤더 「중하」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "−1 < √2 cos x ≤ 1 → −1/√2 < cos x ≤ 1/√2 → [0,π) 에서 cos 감소 → π/4 ≤ x < 3π/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{4}\le x<\dfrac{3}{4}\pi$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 √2 (→ 2, 1/2 등)와 정의역(0≤x<2π 로 넓히면 구간 두 개). 제약: 계수가 1 이하이면 항상 수렴해 문제 무의미, 정의역 끝점 포함 여부와 등호 위치 확인."
    creative: "(1) sin 으로 바꾸면 증가·감소 구간이 갈려 경계 방향 판단 추가(★2) (2) 정의역을 0≤x<2π 로 넓혀 구간 두 개의 합·길이를 묻기(★2~3) (3) (2 sin x − 1)ⁿ 처럼 평행이동 포함(★2)."
```

```yaml
- id: RPM-CALC2-0098
  page: 17
  vendor_label: "유형 13 등비수열의 수렴 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 {(log₃x − 2)ⁿ} 이 수렴하도록 하는 모든 자연수 x 의 합. 5지선다.
  category: "수렴 조건 → 로그 부등식 → 3 < x ≤ 27 → 자연수 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 −1<r≤1"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1 < log₃x − 2 ≤ 1 ⇔ 1 < log₃x ≤ 3 ⇔ 3 < x ≤ 27. 자연수 4~27 의 합 = 372. 수렴 조건과 로그 부등식·등차 합 계산의 절차 결합. 경계(3 제외·27 포함)와 자연수 조건이 함정. 벤더 「중하」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "−1 < log₃x−2 ≤ 1 → 1 < log₃x ≤ 3 → 3 < x ≤ 27 → 4+…+27 = 372"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 상수 2(구간 3^(k−1) < x ≤ 3^(k+1)), 밑 2 나 1/2(감소 → 부등호 반전). 제약: 밑이 1 보다 작으면 방향이 뒤집히므로 등호 위치 재확인, 자연수 합이 선택지에 하나만."
    creative: "(1) 밑을 1/2 로 두어 부등호 반전(T-부호 ★2) (2) 공비를 log₃(x−2) 로 두면 진수 조건 추가(T-범위 ★2) (3) '수렴' 을 '극한값이 0' 으로 바꿔 등호 제거(★2)."
```

```yaml
- id: RPM-CALC2-0099
  page: 17
  vendor_label: "유형 13 등비수열의 수렴 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 등비수열 {((3x+1)/2)ⁿ}, {(x−3)(2x+1)ⁿ} 이 모두 수렴하도록 하는 실수 x 의 범위. 서술형.
  category: "각 수렴 조건(계수 0 인 경우 포함) → 교집합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x−3)(2x+1)ⁿ 은 계수 x−3 = 0 인 경우에도(공비와 무관하게) 수렴하므로 x=3 을 별도 case 로 세워야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 수렴 조건(계수 0 인 경우 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 수열은 −1 < (3x+1)/2 ≤ 1 ⇔ −1 < x ≤ 1/3. 둘째는 x=3 이거나 −1 < 2x+1 ≤ 1 ⇔ −1 < x ≤ 0. 교집합은 −1 < x ≤ 0 (x=3 은 첫 범위 밖). x−3=0 case 를 세우는 다중 해석(MI d1)이 서술형 채점 포인트이나 이 수치에서는 답에 영향이 없음. 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "−1<(3x+1)/2≤1 → −1<x≤1/3 · (x−3=0 또는 −1<2x+1≤1) → x=3 또는 −1<x≤0 → 교집합 −1<x≤0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1<x\le 0$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 1차식 계수·상수, 앞 계수 (x−c) 의 c. 제약: c 가 첫 수열의 범위 밖이면 case 가 답에 영향 없음(현재), 안이면 답에 고립점 {c} 가 추가되어 채점 포인트가 살아남."
    creative: "(1) 계수를 (x−1/5) 처럼 첫 범위 안의 값으로 두면 답에 고립점이 추가되어 MI 가 실제로 변별 → ★3 (2) 세 수열의 동시 수렴으로 늘리기(★3) (3) '모두 수렴' 을 '적어도 하나 수렴' 으로 바꾸면 합집합 → ★2."
```

### 유형 14 $r^n$을 포함한 수열의 극한

```yaml
- id: RPM-CALC2-0100
  page: 18
  vendor_label: "유형 14 $r^n$을 포함한 수열의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim r^(2n)/(1+r^(2n)) 의 값을 |r|>1, |r|=1, |r|<1 로 나눠 각각 a, b, c 라 할 때 a+b−c 의 값.
  category: "r^(2n) = (r²)ⁿ 의 세 case 극한 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "r^n 을 포함한 수열의 극한(|r| 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |r|>1 이면 r^(2n) → ∞ 라 1, |r|=1 이면 r^(2n)=1 이라 1/2, |r|<1 이면 0 이라 0. a+b−c = 3/2. 분기가 문제에 명시돼 있어 절차만 남음. 짝수 지수라 r=−1 도 값 1(T-범위) 하나. 유형 대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "|r|>1 → ÷r^(2n) → 1 · |r|=1 → 1/2 · |r|<1 → 0 → 1+1/2−0 = 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 계수 (p r^(2n) + q)/(s r^(2n) + t) 와 세 값의 결합식. 제약: |r|=1 case 에서 분모 ≠ 0, r^(2n) 대신 rⁿ 으로 바꾸면 r=−1 case(진동) 추가."
    creative: "(1) r^(2n) → rⁿ 으로 바꿔 r=−1 에서 진동·발산 판정 추가(★2~3) (2) 분기를 문제에서 지우고 '극한값이 될 수 있는 값을 모두 구하라'(0103 골조 ★3) (3) 분모에 r^(2n+1) 처럼 홀수 지수를 섞어 r 이 남는 case(★3)."
```

```yaml
- id: RPM-CALC2-0101
  page: 18
  vendor_label: "유형 14 $r^n$을 포함한 수열의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    {(2−rⁿ)/(2+rⁿ)} 의 극한에 대한 ㄱ(r>1 이면 극한값 r) ㄴ(r=1 이면 −1) ㄷ(−1<r<1 이면 1) 의 참·거짓.
  category: "각 r 범위에서 극한 계산 → 명제 대조"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "r^n 을 포함한 수열의 극한(|r| 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r>1 이면 rⁿ 으로 나눠 −1(ㄱ 거짓), r=1 이면 1/3(ㄴ 거짓), |r|<1 이면 rⁿ→0 이라 1(ㄷ 참). 분기가 보기에 명시되어 계산 확인만. r=1 대입 값(T-경계) 하나. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "r>1 → ÷rⁿ → −1 · r=1 → 1/3 · |r|<1 → 1 → ㄷ만 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 상수 2 와 rⁿ 의 부호 배치. 제약: r=−1 case 는 진동이므로 보기에서 제외하거나 별도 보기로, r=1 값이 분모 0 이 되지 않게."
    creative: "(1) r ≤ −1 보기를 추가해 진동·발산 판정(★2~3) (2) 보기 대신 '극한값이 될 수 있는 값의 집합'을 묻기(0103 골조 ★3) (3) 분모 상수를 −2 로 두어 r=1 에서 정의되지 않는 함정(★2)."
```

```yaml
- id: RPM-CALC2-0102
  page: 18
  vendor_label: "유형 14 $r^n$을 포함한 수열의 극한"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (r^(n+1) + r + 2)/(rⁿ + 1) = 8/3 을 만족시키는 모든 양수 r 의 합.
  category: "0<r<1 · r=1 · r>1 분기별 극한식 → 각 방정식 풀고 범위 검증 → 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "r 범위 세 case 가 각각 다른 방정식(r+2=8/3, 2=8/3, r=8/3)을 만들고, 성립하는 두 case 의 해를 모두 모아야 답이 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "r^n 극한 조건을 만족시키는 r(분기별 방정식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0<r<1 이면 극한 r+2 = 8/3 에서 r=2/3(범위 안), r=1 이면 2 ≠ 8/3 로 해 없음, r>1 이면 rⁿ 으로 나눠 극한 r = 8/3(범위 안). 합 10/3. 분기 자체는 유형 표준이나 case 별 방정식을 세우고 범위 검증(T-범위)까지 해야 해 MI d2. 이 수치에서는 기각되는 해가 없어 VF 는 세지 않음. 벤더 「상중」 ★3·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "0<r<1: r+2=8/3 → 2/3 · r=1: 2≠8/3 · r>1: ÷rⁿ → r=8/3 → 합 10/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{10}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 8/3 과 분자의 r+2(상수항). 제약: 0<r<1 case 해 = L−2 가 (0,1) 에, r>1 case 해 = L 이 1 초과가 되도록 L 을 2 < L < 3 에서 고르면 두 해 모두 유효, L 을 3 이상으로 두면 첫 case 가 기각돼 VF 가 살아남."
    creative: "(1) 극한값을 4 로 바꾸면 0<r<1 해 2 가 범위 밖 → 기각 → I-VF 추가 ★4 후보 (2) '양수 r' 을 '실수 r' 로 넓혀 r<−1, r=−1 case 추가 → MI 확대 ★4 (3) 분모를 rⁿ − 1 로 두어 r=1 정의 불가 처리(★3)."
```

```yaml
- id: RPM-CALC2-0103
  page: 18
  vendor_label: "유형 14 $r^n$을 포함한 수열의 극한"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    {(r^(2n+1) − 1)/(r^(2n) + r²)} (r≠0) 의 극한값이 될 수 없는 것 고르기. 5지선다.
  category: "|r| 세 case 극한(r · −1/r² · r=±1 값) → 값의 치역 → 될 수 없는 값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|r|>1 → r, |r|<1 → −1/r², |r|=1 은 홀수 지수 때문에 r=1 → 0, r=−1 → −1 로 갈라져 네 갈래를 따로 세워야 함"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'될 수 없는 값' 이므로 각 case 극한값의 치역(r 은 (−∞,−1)∪(1,∞), −1/r² 은 (−∞,−1))을 역으로 구성해 1 이 빠짐을 확인"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "r^n 극한값의 치역(될 수 없는 값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |r|>1 이면 r^(2n) 으로 나눠 극한 r, |r|<1 이면 r^(2n)→0 이라 −1/r² (< −1), r=1 이면 0, r=−1 이면 −1. 될 수 있는 값은 (−∞,−1] ∪ {0} ∪ (1,∞) 이고 1 은 어느 case 에서도 안 나옴(r=1 은 0). r=±1 을 나눠 보는 분기(MI d2)와 값의 치역을 역으로 잡는 사고(BW d1)가 필요. 벤더 「상중」 ★3·M_total 9. 통찰 2개로 +1 후보이나 분기 골조가 유형 표준이고 계산이 가벼워 ★3 유지.
    [분류 이슈] 통찰 2개(MI d2 + BW d1)·M_total 9 로 +1 후보(★4)이나 분기가 유형 표준이라 벤더 「상중」 ★3 유지. 판정 애매.
  tier: star_3
  mechanism_primary: "|r|>1 → r · |r|<1 → −1/r² < −1 · r=1 → 0 · r=−1 → −1 → 치역 (−∞,−1]∪{0}∪(1,∞) → 1 불가"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 배치(2n+1, 2n)와 분모 r². 제약: 홀수 지수를 분자에 두어야 |r|>1 에서 r 이 남고, 분모 r² 이 |r|<1 에서 −1/r² 을 만듦. 선택지에 각 case 의 값(r=−2, −1, 1, 2 로 나오는 −2, −1, 0, 2)과 불가능한 값 하나."
    creative: "(1) '될 수 없는 것' 을 '극한값이 −1 이 되는 r 을 모두 구하라'(r=−1 또는 |r|<1 에서 r²=1 은 없음 → 기각 검증 · I-VF 성격 ★3~4) (2) 분모를 r^(2n) + r 로 바꾸면 r<0 에서 부호 분기(★4) (3) 극한값을 f(r) 로 두고 그래프를 그리게 하면 유형 15 결합(★3)."
```

### 유형 15 $x^n$을 포함한 극한으로 정의된 함수

```yaml
- id: RPM-CALC2-0104
  page: 18
  vendor_label: "유형 15 $x^n$을 포함한 극한으로 정의된 함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x) = lim (x^(2n) − 2x)/(x^(2n+2) + 2) 에 대해 f(−1) + f(1/3) + f(2) 의 값.
  category: "각 x 를 |x| 분기에 넣어 값 계산 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 을 포함한 극한으로 정의된 함수(|x| 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=−1 은 |x|=1 이라 x^(2n)=x^(2n+2)=1 로 (1+2)/(1+2)=1, x=1/3 은 x^(2n)→0 이라 (−2/3)/2 = −1/3, x=2 는 x^(2n) 으로 나눠 1/x² = 1/4. 합 11/12. 분기 판단은 표준·계산이 조금 있음. x=−1 에서 짝수 지수 처리(T-부호) 하나. 유형 대표문제·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=−1(|x|=1) → 1 · x=1/3(|x|<1) → −1/3 · x=2(|x|>1) → ÷x^(2n) → 1/4 → 11/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{11}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입값(각 case 에서 하나씩), 분자·분모의 계수(−2x, +2)와 지수 이동(2n+2). 제약: |x|=1 case 에서 분모 ≠ 0, 대입값이 세 case 를 고루 덮도록, 합이 간단한 분수."
    creative: "(1) 짝수 지수를 홀수(x^(2n+1))로 바꿔 x=−1 에서 부호 분기 추가(★2~3) (2) f(x) 의 식 자체를 case 로 쓰게 하기(0106 골조 ★2) (3) f(x)=k 를 만족하는 x 를 묻기(역방향 I-BW ★3)."
```

```yaml
- id: RPM-CALC2-0105
  page: 18
  vendor_label: "유형 15 $x^n$을 포함한 극한으로 정의된 함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>−1 에서 f(x) = lim (1−xⁿ)/(1+xⁿ) 일 때 y=f(x) 의 그래프 고르기(그림 5지선다).
  category: "case 별 극한(−1<x<1 → 1, x=1 → 0, x>1 → −1) → 그래프 끝점 열림·닫힘 대조"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "case 별 극한값을 그래프(열린 원·닫힌 원 포함)로 옮겨 다섯 그림 중 하나로 대조"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x^n 극한 함수의 그래프"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1<x<1 이면 xⁿ→0 이라 1, x=1 이면 0, x>1 이면 xⁿ 으로 나눠 −1. 그래프는 y=1 이 (−1,1) 에서 양끝 열림, (1,0) 닫힌 점, x>1 에서 y=−1 (x=1 열림) → ③. 값 계산은 표준, 끝점의 열림·닫힘 대조가 채점 포인트(RT d1 · T-경계·T-범위). 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "−1<x<1 → 1 · x=1 → 0 · x>1 → ÷xⁿ → −1 → 끝점 (1,0) 닫힘·(±1,1)·(1,−1) 열림 → ③"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0105.png
  latex: latex-bank/rpm-calc2/items/0105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 상수 (1−xⁿ)/(1+xⁿ) → (a−xⁿ)/(b+xⁿ) 로 바꾸면 값이 a/b, (a−1)/(b+1), −1 로. 제약: 그림 5개를 다시 그려야 하며 정답 그림과 오답 그림은 끝점 열림·닫힘만 달라야 함. 정의역 x>−1 은 x=−1 에서 진동을 피하기 위한 것."
    creative: "(1) 정의역을 실수 전체로 넓히고 x^(2n) 으로 바꿔 x=−1 도 정의되게(★2) (2) 그래프를 그리게 한 뒤 y=f(x) 와 직선 y=k 의 교점 개수 묻기(★3) (3) f(x) 의 불연속점 개수·f(1)+극한값 조합(★2~3)."
```

```yaml
- id: RPM-CALC2-0106
  page: 18
  vendor_label: "유형 15 $x^n$을 포함한 극한으로 정의된 함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) = lim (x^(2n+4) + x² + 3)/(x^(2n) + 1) 을 다항함수로 나타내기(case 별).
  category: "|x| 세 case → x²+3 · 5/2 · x⁴"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 을 포함한 극한으로 정의된 함수(|x| 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |x|<1 이면 x^(2n)→0 이라 x²+3, |x|=1 이면 (1+1+3)/2 = 5/2, |x|>1 이면 x^(2n) 으로 나눠 x⁴. 세 case 를 빠짐없이 쓰는 절차 문제이며 짝수 지수라 x=±1 이 같은 값(T-부호·T-범위). 벤더 「중」·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "|x|<1 → x²+3 · |x|=1 → 5/2 · |x|>1 → ÷x^(2n) → x⁴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($f(x)=\begin{cases} x^2+3 & (|x|<1) \\[1ex] \dfrac{5}{2} & (|x|=1) \\[1ex] x^4 & (|x|>1) \end{cases}$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 이동(2n+4 → 2n+2k 이면 |x|>1 에서 x^(2k)), 다항 부분 x²+3 의 계수, 분모 상수. 제약: |x|=1 에서 분모 ≠ 0, 짝수 지수를 유지하면 x=±1 이 같은 값(홀수로 바꾸면 x=−1 case 분리)."
    creative: "(1) 홀수 지수(x^(2n+1))로 바꿔 x=−1 case 를 분리(★2~3) (2) 얻은 f(x) 로 방정식 f(x)=k 의 실근 개수 묻기(유형 15 + 함수 결합 ★3) (3) f 가 x=1 에서 연속이 되도록 상수 정하기(미적분Ⅰ 연속 결합 · I-XU ★3)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 3 · ★2 26 · ★3 7 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 29 · premium 0 (통찰 라벨이 붙은 블록은 20 · 이 중 단일 d1 로 ★2 에 머문 13문은 절차형으로 분류)
- 통찰 유형 분포(라벨 22개): I-EQV 11 · I-BW 5 · I-MI 3 · I-RT 2 · I-CON 1
- type_hint 상위: 「등비수열의 수렴 조건 −1<r≤1」 3 · 「수열의 극한 명제 참·거짓(반례 구성)」 3 · 「∞−∞ 꼴 극한의 미정계수 결정(수렴 조건으로 최고차 계수 확정)」 2 · 「∞−∞ 꼴 극한값 조건에서 미정계수 결정(유리화)」 2 · 「일반항 a_n 을 포함한 식의 극한값(수렴 조건 끼워 넣기)」 2 · 「수열의 극한의 대소 관계(샌드위치 기본)」 2 · 「유계 항(삼각함수)의 극한(샌드위치)」 2 · 「r^n 을 포함한 수열의 극한(|r| 분기)」 2 · 「x^n 을 포함한 극한으로 정의된 함수(|x| 분기)」 2 (샌드위치 계열 전체 9 · 등비 극한 계열 6)
- 벤더 신호: 대표문제 8 · 중하 4 · 중 18 · 상중 6 · 서술형 태그 2(0085 · 0099)
- 대상층: 하위권 3 · 중하위권 24 · 중위권 7 · 중상위권 2
- 그림: 1문(`crop:fig-0105.png` · 그래프 5지선다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0079 | 유형 대표문제이나 통찰 0·M_total 4 로 ★1 라벨. 대표문제에 ★2 하한을 둘지는 카탈로그 설계 때 결정 | ★1 / ★2 |
| RPM-CALC2-0089 | 벤더 「중」이나 명제 5개·반례 설계 2건(EQV d1 + BW d1)으로 ★3 라벨. 참·거짓 문항에서 반례 설계를 통찰로 셀지 기준 필요(0087·0088 은 표준 반례로 보아 ★2) | ★3 / ★2 |
| RPM-CALC2-0103 | 통찰 2개(MI d2 + BW d1)·M_total 9 로 +1 후보이나 분기가 유형 표준이라 벤더 「상중」 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 골조: 샌드위치 계열이 9문(0079~0086 · 0092)으로 가장 많고 「기본형(양쪽 나누기)」「유계 항(삼각함수)형」「합의 부등식형(0085)」「조건을 부등식으로 번역하는 형(0086 판별식)」 네 하위형으로 갈린다. 앞 둘은 base ★1~2 로 통합해도 되고, 뒤 둘은 통찰 골조(EQV d2 · RT d2)가 달라 base ★3 유형으로 따로 세우는 편이 맞다.
- 미정계수 결정(0071~0074)은 「극한값에서 계수 계산(유리화만 · 0072 · 0073)」과 「수렴 조건으로 최고차 계수를 먼저 확정(0071 · 0074)」으로 나뉘며, 후자만 BW d1 을 가진다. 카탈로그에서는 하나의 유형에 두 하위형(base ★2 / ★2~3)으로 두면 충분하다.
- 「r^n 분기」(유형 14)와 「x^n 극한 함수」(유형 15)는 |r| 3분기라는 같은 골조를 쓴다. 상위 유형 하나(base ★2) 아래 「값 계산·명제 확인(0100 · 0101 · 0104)」「함수식·그래프(0105 · 0106)」「조건을 만족하는 r(0102 · MI d2 · ★3)」「극한값의 치역(0103 · ★3~4)」을 하위형으로 두는 편이 낫다. 홀수 지수(r=−1 분리)와 짝수 지수의 차이를 하위형 변수로 기록할 것.
- 등비수열의 극한(유형 12)은 「최대 밑으로 나누기」 기본형(0090 · 0092)과 「유리화 결합(0091)」「수렴 수열 결합(0093)」「S_n 복원 결합(0094)」「이차방정식 근 결합(0095)」 결합형으로 갈린다. 결합형은 모두 ★2 이며 별도 유형보다 기본형의 변형 축으로 두면 된다.
- 등비수열의 수렴 조건(유형 13)은 공비의 형태(이차식·삼각함수·로그·계수 포함)만 다르고 골조가 같아 유형 하나로 통합 가능. 「계수가 0 인 경우」(0099)는 변형 축(MI 가 답에 영향을 주는 수치 선택)으로 기록.
- 참·거짓 판별(유형 11)은 단원 공통 유형이며, 반례 설계를 통찰로 셀 기준(표준 반례 vs 설계 반례)을 카탈로그에서 정해야 0087~0089 의 ★2/★3 경계가 안정된다.
- 일반항 a_n 을 포함한 극한(유형 09)은 「수렴 조건 끼워 넣기」(0076 · 0077 · 0082)가 핵심 골조이고 「치환(0075)」「발산 수열로 나누기(0078 · EQV d2 · ★3)」가 파생형이다.
