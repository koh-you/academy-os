---
name: mechanism-데이터-GN-M31-07-p1
description: 개념원리 중학 3-1 07 곱셈 공식의 응용(1/2 · 72~75쪽 18문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 07 곱셈 공식의 응용
  unit_code: GN-M31-07
  part: "1/2"
  extract_range: "72~75쪽 · 72-01~75-06"
  total_problems: 18
  unit_total: 51
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex"
  image_source: "latex-bank/gn-m31/figures/ (crops.json)"
---

# 개념원리 중학 3-1 · 07 곱셈 공식의 응용 (1/2) 정독 데이터 (v1.0)

이 파일은 72~75쪽 세 구역 18문항을 담는다. 구역은 「개념원리 확인하기」 4문(72-01~72-04) · 「핵심문제 익히기」 8문(핵심문제 `쪽-hN` 4문 + 확인문제 `쪽-cN` 4문) · 「이런 문제가 시험에 나온다」 6문(75-01~75-06)이다. 개념원리 중학은 문항별 난이도 표기(하·중·상)나 태그가 없고 **구역 자체가 난이도 층**이므로, ★ 출발점은 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 으로 잡고 M_total·통찰로 ±1 조정했다. 이 범위에 그림은 없다.

단원 성격상 골조가 네 갈래로 반복된다. ① 수를 기준수 ± 작은 수로 분해해 곱셈 공식으로 계산하기 ② 근호가 있는 식의 전개와 분모의 유리화 ③ 합·곱(또는 차·곱)에서 `x²+y²`, `(x−y)²`, `x/y+y/x` 를 끌어내는 곱셈 공식의 변형 ④ `x±1/x` 꼴의 변형. 대부분이 「식을 어떤 꼴로 고쳐 쓰느냐」가 이미 발문이나 소문항 배열로 지정돼 있어 통찰형은 2문뿐이고 나머지는 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형에서 가장 자주 깨지는 제약은 **곱의 값이 음수일 때의 부호(T-부호)** 와 **유리화 뒤 결과가 정리된 꼴로 떨어지는지** 이므로 각 블록 `variation_notes.numeric` 에 그 제약을 명시했다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-72-01
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 빈칸 완성 — 51² 을 (50+□)², 96² 을 (100−□)², 33×27 을 (30+□)(30−□) 로 고쳐 곱셈 공식으로 계산하는 과정.
  category: "수를 기준수 ± 작은 수로 분해 → 알맞은 곱셈 공식 → 전개 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산(빈칸 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분해 꼴과 쓸 공식이 이미 빈칸으로 주어져 착안 여지가 없다. 채울 것은 기준수·작은 수와 전개값뿐이다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "51=50+1 · 96=100−4 · 33×27=(30+3)(30−3) 로 분해 → (a±b)²·(a+b)(a−b) 대입 → 수치 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$, $50$, $1$, $2601$ ⑵ $4$, $100$, $4$, $9216$ ⑶ $3$, $3$, $3$, $891$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/72-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준수(50·100·30)와 작은 수(1·4·3)를 바꿀 수 있다. 제약: 기준수는 10의 배수여야 암산 이득이 생기고 작은 수는 한 자리로 둔다. ⑶은 두 수의 평균이 기준수, 차의 절반이 작은 수가 되는 짝이어야 한다(43×37 등)."
    creative: "(1) 분해 꼴만 주고 어느 공식이 맞는지 고르게 하기(★1 유지) (2) 빈칸을 없애고 계산 결과만 묻기(분해 착안이 학생 몫 → ★2) (3) 왜 그 공식이 편한지 쓰게 하면 75-01 골조로 이동(★2)."
```

```yaml
- id: GN-M31-72-02
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 근호가 있는 식의 전개 — (√2+√6)², (√5−2)², (2+√3)(2−√3), (√7+4)(√7−2).
  category: "근호가 있는 식에 곱셈 공식 그대로 적용 → 같은 무리수끼리 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 근호를 포함한 식의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문제 모두 공식 네 개((a+b)²·(a−b)²·(a+b)(a−b)·(x+a)(x+b))를 한 번씩 대입하는 확인용 배열이다.
    함정은 √2×√6=2√3 처럼 곱한 뒤 근호를 정리하는 T-표기 하나. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "괄호 꼴을 보고 공식 선택 → 전개 → √ab 정리·동류항 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8+4\sqrt{3}$ ⑵ $9-4\sqrt{5}$ ⑶ $1$ ⑷ $-1+2\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/72-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 수와 유리수 항을 바꿀 수 있다. 제약: ⑴처럼 √a×√b 가 나올 때 ab 가 완전제곱 인수를 가져야 근호가 정리되고(2×6=12 → 2√3), ⑶은 (a+b)(a−b) 꼴이 유지돼야 유리수로 떨어진다. ⑷는 x=√7 로 보아 두 상수의 합·곱이 정수여야 한다."
    creative: "(1) 네 공식 순서를 섞어 어떤 공식인지 먼저 쓰게 하기(★1 유지) (2) 결과가 유리수가 되는 것을 모두 고르게 하기(★2 · 판별로 전환) (3) 두 식의 합·차를 묻는 복합형으로 만들면 73-c2 골조(★2)."
```

```yaml
- id: GN-M31-72-03
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 분모의 유리화 — 1/(√2+1), 2/(√5−√3), √2/(√3+1), (√10+√6)/(√10−√6).
  category: "분모의 켤레를 분자·분모에 곱하기 → (a+b)(a−b) 로 분모를 유리수화 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(켤레를 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    켤레를 곱한다는 절차가 단원 본문에 그대로 제시돼 있어 착안이 아니라 적용이다.
    다만 ⑷는 분자도 무리수라 (√10+√6)² 전개 뒤 4로 약분하는 단계가 하나 더 붙어 Mₛ=2.
    확인하기 구역 ★1 · 통찰 없음 → ★1 유지(M_total 5 지만 하한).
  tier: star_1
  mechanism_primary: "분모의 켤레를 위아래에 곱함 → 분모 a−b 로 정리 → 분자 전개 후 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{2}-1$ ⑵ $\sqrt{5}+\sqrt{3}$ ⑶ $\dfrac{\sqrt{6}-\sqrt{2}}{2}$ ⑷ $4+\sqrt{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/72-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 두 항과 분자를 바꿀 수 있다. 제약: 분모 유리화 결과(a−b)가 분자와 약분돼 깔끔히 떨어져야 하고(⑵의 5−3=2 가 분자 2와 약분), ⑷처럼 분자·분모가 켤레면 (√a+√b)²/(a−b) 이 정수 + √ab 꼴로 정리되는 짝을 고른다(10·6 → 4+√15)."
    creative: "(1) 유리화한 값의 정수 부분·소수 부분을 묻기(★2 · 어림 판단 추가) (2) 두 유리화 결과의 합·차를 묻기(73-h2 ⑵ 골조 ★2) (3) x=1/(√2+1) 로 두고 x+1/x 를 묻는 형태로 확장하면 곱셈 공식의 변형과 결합(★3 · I-SYM)."
```

```yaml
- id: GN-M31-72-04
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 빈칸 완성 — x+y=6, xy=−2 일 때 x²+y²=(x+y)²−□, (x−y)²=(x+y)²−□ 의 과정과 값.
  category: "합·곱만으로 x²+y²·(x−y)² 를 표현 → 대입 → 부호 처리"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — 합·곱에서 x²+y², (x−y)² 구하기(빈칸 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변형식의 뼈대(−2xy·−4xy)가 빈칸으로 유도돼 있어 학생이 할 일은 대입과 부호 처리뿐이다.
    xy=−2 라 −2×(−2)=+4 로 부호가 뒤집히는 T-부호 함정 하나가 이 문항의 실질 난점.
    확인하기 구역 ★1 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x²+y²=(x+y)²−2xy · (x−y)²=(x+y)²−4xy 에 x+y=6, xy=−2 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2xy$, $-2$, $40$ ⑵ $4xy$, $-2$, $44$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/72-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+y 와 xy 를 바꿀 수 있다. 제약: xy 의 부호가 이 문항의 핵심 함정이므로 음수를 유지하는 편이 좋고, (x−y)²=(x+y)²−4xy ≥ 0 이어야 실수 조건과 어긋나지 않는다(xy>0 로 바꾸면 (x+y)²≥4xy 확인 필요)."
    creative: "(1) x−y 와 xy 를 주고 (x+y)² 를 묻기(74-c3 골조 ★2) (2) 빈칸을 없애 변형식을 학생이 세우게 하기(★2) (3) x²+y² 와 xy 를 주고 x+y 를 역으로 묻기(★3 · I-BW · 부호 두 값 검토)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-73-h1
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑶ 곱셈 공식을 이용한 수의 계산 — 101², 6.2×5.8, 37×46.
  category: "수를 기준수 ± 작은 수로 분해 → 세 공식 중 맞는 것 선택 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-01 과 골조는 같지만 분해 꼴이 주어지지 않아 세 유형(제곱·합차·(x+a)(x+b))을 스스로 골라야 한다.
    ⑶ 37×46 은 두 수의 평균이 정수가 아니라 (40−3)(40+6) 으로 (x+a)(x+b) 를 써야 하는 것이 판단점.
    소수 곱·세 자리 전개로 Mₖ=2. 핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  mechanism_primary: "101=100+1 · 6.2×5.8=(6+0.2)(6−0.2) · 37×46=(40−3)(40+6) 로 분해 → 해당 공식 대입"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10201$ ⑵ $35.96$ ⑶ $1702$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/73-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수를 바꾸되 각 소문항이 서로 다른 공식을 요구하도록 유지한다. 제약: 합차 꼴은 두 수의 평균이 딱 떨어져야 하고(6.2·5.8 → 6), (x+a)(x+b) 꼴은 기준수가 같은 분해가 되어야 한다(37·46 → 40). 소수는 소수점 자리수를 맞춰 검산이 쉬운 값으로."
    creative: "(1) 네 소문항으로 늘려 공식 네 개를 모두 쓰게 하기(★2 유지) (2) 각 계산에 쓴 공식을 함께 적게 하면 75-01 판별형(★2) (3) 99×101×10001 처럼 합차를 연쇄로 쓰게 하면 단계가 늘고 패턴 착안이 필요해 ★3(I-PD)."
```

```yaml
- id: GN-M31-73-c1
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑶ 곱셈 공식을 이용한 수의 계산 — 9.7², 46×54, 102×103.
  category: "수를 기준수 ± 작은 수로 분해 → 세 공식 중 맞는 것 선택 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    73-h1 의 확인문제. ⑴은 (10−0.3)² 로 소수 제곱, ⑵는 50 중심 합차, ⑶은 100 기준 (x+a)(x+b) 로
    세 공식이 한 번씩 나온다. 소수점 자리(0.09)를 잃는 T-단위 실수가 주 오답 지점.
    구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "9.7=10−0.3 · 46×54=(50−4)(50+4) · 102×103=(100+2)(100+3) 로 분해 → 공식 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $94.09$ ⑵ $2484$ ⑶ $10506$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/73-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준수를 10·50·100 외의 값(20·30·200)으로 옮길 수 있다. 제약: 소수 제곱은 소수 둘째 자리까지만 나오게 한 자리 소수로 두고, 합차 꼴은 두 수의 평균이 정수, (x+a)(x+b) 꼴은 (a+b)·기준수가 암산 가능한 크기여야 한다."
    creative: "(1) 계산 결과만 주고 어떤 분해를 썼는지 되묻기(★2 · I-BW 맛보기) (2) 가장 편리한 공식을 고르는 5지선다로 바꾸면 75-01(★2) (3) 1001×999 와 1000²−1 의 차이를 설명하게 하면 서술형 ★3."
```

```yaml
- id: GN-M31-73-h2
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 근호를 포함한 식의 계산 — (−√6+2√2)(−√6−2√2) 와 1/(√5+2)+1/(√5−2).
  category: "합차 공식을 −√6 기준으로 적용 · 두 분수를 각각 유리화한 뒤 더하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 근호를 포함한 식의 계산(유리화 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 공통항이 −√6 이라 (a+b)(a−b) 의 a 를 음수로 잡아야 하는 T-부호가 핵심((−√6)²=6).
    ⑵는 켤레가 서로 상대의 분모라 각각 유리화하면 (√5−2)+(√5+2) 로 유리수 부분이 상쇄된다.
    상쇄를 미리 보지 않아도 표준 유리화로 풀리므로 통찰로 세지 않음. 구역 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "⑴ (−√6)²−(2√2)² · ⑵ 각 항을 켤레로 유리화(분모 모두 1) → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-2$ ⑵ $2\sqrt{5}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/73-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 √6·2√2 와 ⑵의 √5·2 를 바꿀 수 있다. 제약: ⑴은 a²−b² 가 정수로 떨어지게 두 항 모두 근호이거나 제곱이 정수여야 하고, ⑵는 분모 두 켤레의 곱(5−4=1)이 작을수록 계산이 깔끔하다 — 곱이 1이 아니면 결과에 분모가 남는다."
    creative: "(1) ⑵를 1/(√5+2)−1/(√5−2) 로 바꾸면 무리수 부분이 상쇄되고 유리수만 남는다(★2 유지·부호 함정 강화) (2) 두 항의 곱을 함께 묻고 합·곱으로 x+1/x 를 만들면 74-h4 와 결합(★3) (3) 분모를 세 항(√5+√2+1)으로 하면 유리화를 두 번 해야 해 ★3."
```

```yaml
- id: GN-M31-73-c2
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 근호를 포함한 식의 계산 — (√2−3)²+(2√2−5)(3√2+2) 와 4/(√7+√3)−4/(√7−√3).
  category: "두 곱셈 공식으로 각각 전개 후 동류항 정리 · 두 유리화 결과의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 근호를 포함한 식의 계산(유리화 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 (a−b)² 과 (ax+b)(cx+d) 를 연달아 쓴 뒤 유리수끼리·√2 끼리 모으는 두 단계 정리.
    ⑵는 분모의 곱이 7−3=4 라 4와 약분되어 각각 √7∓√3 로 떨어지고, 빼면 −2√3 로 부호가 뒤집힌다.
    계산량은 이 구역에서 가장 무겁지만 착안은 없다. 구역 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 항을 공식으로 전개 → 유리수·무리수 분리 정리 / 두 분수를 유리화한 뒤 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $13-17\sqrt{2}$ ⑵ $-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/73-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 계수(2√2−5)(3√2+2)와 ⑵의 분자 4·근호 안 7,3 을 바꿀 수 있다. 제약: ⑵는 분자가 분모의 곱(a−b)의 약수여야 분수가 남지 않고, ⑴은 무리수 항이 모두 같은 √2 여야 동류항 정리가 가능하다(√2 와 √3 을 섞으면 유형이 바뀜)."
    creative: "(1) ⑴의 결과에서 a+b√2 의 a, b 를 묻는 꼴로 바꾸면 75-03 골조(★3) (2) ⑵를 합으로 바꾸면 무리수가 상쇄돼 유리수만 남는다(★2) (3) 분자를 4가 아닌 √7 로 두면 유리화 후에도 근호가 남아 정리 단계가 늘어난다(★3)."
```

```yaml
- id: GN-M31-74-h3
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x+y=−3, xy=1 일 때 ⑴ x²+y² ⑵ (x−y)² ⑶ x/y+y/x 의 값.
  category: "합·곱만으로 대칭식 표현 → 대입 → ⑶은 통분해 앞 결과 재사용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (1) — 합·곱에서 대칭식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 를 따로 구하지 않고 합·곱만으로 옮기는 것이 이 유형의 뼈대다. ⑶은 (x²+y²)/xy 로 통분하면
    ⑴의 결과를 그대로 쓸 수 있는데, 소문항 배열이 이미 그 순서를 지정해 주므로 통찰로 세지 않았다
    ([분류 이슈] 참고). x+y 가 음수라 (x+y)²=9 로 부호가 사라지는 T-부호가 주 오답. 구역 ★2 → ★2.
  tier: star_2
  mechanism_primary: "x²+y²=(x+y)²−2xy → (x−y)²=(x+y)²−4xy → x/y+y/x=(x²+y²)/xy"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $5$ ⑶ $7$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/74-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+y 와 xy 를 바꿀 수 있다. 제약: (x−y)²=(x+y)²−4xy ≥ 0 이어야 하고, ⑶의 분모가 xy 이므로 xy≠0, 답을 정수로 만들려면 xy 가 x²+y² 의 약수여야 한다(여기서는 xy=1)."
    creative: "(1) ⑶을 x/y+y/x 대신 x³+y³ 로 바꾸면 세제곱 변형까지 확장(★3) (2) x−y 의 값을 묻게 하면 제곱근을 씌우며 부호 두 가지를 따져야 해 ★3(I-MI) (3) x, y 를 근호가 있는 두 수로 직접 주고 합·곱을 먼저 구하게 하면 75-04 골조(★3)."
```

```yaml
- id: GN-M31-74-c3
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x−y=3, xy=5 일 때 ⑴ x²+y² ⑵ (x+y)² ⑶ y/x+x/y 의 값.
  category: "차·곱에서 대칭식 표현 → 대입 → ⑶은 통분해 앞 결과 재사용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (1) — 합·곱에서 대칭식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    74-h3 의 좌우 대칭판. 주어진 것이 차(x−y)라 x²+y²=(x−y)²+2xy 로 부호가 반대가 되는 점이 핵심이고,
    ⑵는 (x+y)²=(x−y)²+4xy 로 한 번 더 뒤집는다. 부호를 h3 과 같은 식으로 외우면 그대로 틀린다.
    ⑶은 xy=5 라 답이 분수(19/5)로 떨어지는 것이 h3 과 다른 점. 구역 ★2 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "x²+y²=(x−y)²+2xy → (x+y)²=(x−y)²+4xy → y/x+x/y=(x²+y²)/xy"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $19$ ⑵ $29$ ⑶ $\dfrac{19}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/74-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x−y 와 xy 를 바꿀 수 있다. 제약: xy>0 이면 x²+y² 가 자동으로 양수라 안전하지만, ⑶의 답이 정수이길 원하면 xy 가 x²+y² 의 약수여야 한다(현재는 분수 답이 의도된 변별점)."
    creative: "(1) ⑵ 대신 x+y 를 직접 묻기(제곱근 부호 두 경우 → ★3 · I-MI) (2) x−y 와 x²+y² 를 주고 xy 를 역으로 묻기(★3 · I-BW) (3) 같은 조건에서 (x+y)(x−y)=x²−y² 를 묻게 하면 한 줄로 끝나 ★1~2."
```

```yaml
- id: GN-M31-74-h4
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x+1/x=5 일 때 ⑴ x²+1/x² ⑵ (x−1/x)² 의 값.
  category: "주어진 식을 제곱 → 가운데 항 2 를 넘겨 x²+1/x² → 다시 −2 로 (x−1/x)²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (2) — x±1/x 꼴의 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x·(1/x)=1 이라 74-h3 에서 xy 자리에 1이 들어간 특수형이다. 양변을 제곱하면 가운데 항이 상수 2 로
    고정되는 것이 이 유형의 전부이고, ⑵는 ⑴에서 다시 2를 빼면 된다(합 → −2 → 차의 제곱).
    x 를 직접 구할 필요가 없음을 아는 것이 관건. 구역 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(x+1/x)²=x²+2+1/x² → x²+1/x²=25−2 → (x−1/x)²=(x²+1/x²)−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $23$ ⑵ $21$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/74-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+1/x 의 값 5 를 다른 수로 바꿀 수 있다. 제약: (x−1/x)²=(x+1/x)²−4 ≥ 0 이어야 하므로 |x+1/x| ≥ 2 를 지킨다(1이나 0으로 두면 실수 x 가 없다). 음수 값(−5)으로 두면 제곱에서 부호가 사라지는 함정이 생긴다."
    creative: "(1) x−1/x 의 값을 직접 묻기(제곱근 부호 두 경우 → ★3 · I-MI) (2) x²+1/x² 을 주고 x+1/x 를 역으로 묻기(★3 · I-BW · 두 값) (3) x²−5x+1=0 처럼 방정식으로 조건을 주고 양변을 x 로 나누게 하면 ★3(I-EQV) (4) x⁴+1/x⁴ 까지 요구하면 같은 조작 반복(★3)."
```

```yaml
- id: GN-M31-74-c4
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x−1/x=−4 일 때 ⑴ x²+1/x² ⑵ (x+1/x)² 의 값.
  category: "차를 제곱 → +2 로 x²+1/x² → 다시 +2 로 (x+1/x)²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (2) — x±1/x 꼴의 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    74-h4 의 부호 반전판. 주어진 값이 −4 라 제곱하면 16 이 되어 부호가 사라지고(T-부호),
    차에서 출발하므로 두 번 모두 +2 를 더하는 방향이다(h4 는 두 번 모두 −2).
    방향을 외워서 풀면 그대로 틀리는 배치. 구역 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(x−1/x)²=x²−2+1/x² → x²+1/x²=16+2 → (x+1/x)²=(x²+1/x²)+2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $18$ ⑵ $20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/74-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x−1/x 의 값 −4 를 바꿀 수 있다. 제약: 차에서 출발하면 (x+1/x)²=(x−1/x)²+4 가 항상 양수라 값의 제한이 없다(합에서 출발할 때의 |값| ≥ 2 제약이 없음). 음수를 유지해야 제곱 시 부호 함정이 남는다."
    creative: "(1) x+1/x 의 값을 직접 묻기(부호 두 경우 → ★3 · I-MI) (2) x²+1/x² 대신 x²−1/x² 를 묻기(합×차로 분해해야 해 ★3) (3) x 가 √ 꼴로 주어지고 x−1/x 를 먼저 구하게 하면 유리화와 결합(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-75-01
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    104², 399², 53×47, 203×207, 9.1×8.9 각각에 가장 편리한 곱셈 공식을 짝지은 것 중 옳지 않은 것을 고르는 5지선다.
  category: "각 수의 분해 꼴 판정 → 대응하는 공식과 대조 → 어긋난 보기 찾기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수의 계산에 편리한 곱셈 공식 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 아니라 공식 선택 자체를 묻는 판별형이다. 보기 다섯 개를 각각 분해해 보되 끝까지 계산할
    필요는 없고, 9.1×8.9 가 9 중심의 합차 꼴(a+b)(a−b)인데 (ax+b)(cx+d) 로 짝지어진 것이 어긋난 보기.
    풀이 갈래를 비교해 고르는 I-SC 로 볼 여지가 있으나 실제로는 적합성 대조라 통찰로 세지 않았다
    ([분류 이슈] 참고). 구역 출발 ★2~3 중 M_total 5·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "각 수를 기준수 ± 작은 수로 분해 → 제곱/합차/(x+a)(x+b) 중 어느 꼴인지 판정 → 보기와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 보기의 수를 바꿀 수 있다. 제약: 네 보기는 공식이 정확히 맞아야 하고 틀린 보기 하나만 남긴다. 합차 꼴은 두 수의 평균이 딱 떨어지는 짝(53·47 → 50), (x+a)(x+b) 꼴은 기준수가 같은 짝(203·207 → 200)으로 두어 두 꼴이 헷갈리게 배치하는 것이 이 문항의 변별점."
    creative: "(1) 옳은 것을 고르게 뒤집기(★2 유지) (2) 공식만 주고 그 공식으로 계산하기 좋은 수를 직접 쓰게 하면 서술형 ★3 (3) 틀린 보기를 바르게 고치고 계산까지 시키면 계산 + 판별 결합(★3)."
```

```yaml
- id: GN-M31-75-02
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    곱셈 공식을 이용하여 (1008×1010+1)/1009 를 계산하는 문제.
  category: "1009 를 문자로 치환 → 분자를 (x−1)(x+1)+1=x² 로 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1008·1010 을 1009 중심의 (x−1)(x+1) 로 바꿔 수 계산을 문자식 표현으로 옮겨야 분자가 완전제곱이 되는 것이 보인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산(치환·약분형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환을 못 보면 여섯 자리 곱셈을 직접 해야 하고, 보면 분자가 1009² 이 되어 한 줄로 끝난다.
    세 수가 1009 를 중심으로 −1, +1 로 놓여 있다는 배치를 읽는 것이 전부이므로 단계는 짧지만
    착안 의존도가 높다(I-RT d2). 구역 ★2~3 출발 + 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "x=1009 치환 → 분자 (x−1)(x+1)+1=x²−1+1=x² → x²/x=x=1009"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1009$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 수 1009 를 다른 수로 바꿀 수 있다. 제약: 분자의 두 수가 중심 수에서 같은 간격 ±k 로 떨어져 있어야 하고 더하는 상수는 k² 여야 완전제곱이 된다((x−2)(x+2)+4=x²). 분모는 그 중심 수로 두어 약분이 딱 떨어지게 한다."
    creative: "(1) 간격을 ±2 로 넓혀 +4 를 더하게 하면 같은 골조·상수 판단이 추가(★3) (2) 분자를 1008×1010 만 주고 1009²−1 임을 이용해 크기 비교를 시키면 ★3(I-EQV) (3) (1008×1010+1)/1009² 처럼 분모를 제곱으로 바꾸면 답이 1 이 되어 약분 착안이 더 선명(★3) (4) 상수를 빼서 완전제곱이 깨지면 유형이 무너지므로 그 지점이 ★ 변동 경계."
```

```yaml
- id: GN-M31-75-03
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    (2√2+√7)(√2−3√7)=a+b√14 일 때 유리수 a, b 에 대하여 a−b 의 값.
  category: "전개 → 유리수 항과 √14 항으로 분리 → 계수 비교 → a−b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 계산과 유리수 계수 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개 자체는 (ax+b)(cx+d) 한 번이지만 √2·√7=√14 로 묶는 정리, 유리수 항끼리 모으기,
    a·b 가 모두 음수라 a−b 에서 부호가 한 번 더 뒤집히는 세 지점에서 실수가 난다(T-부호·T-표기).
    미정 유리수 a, b 를 두므로 Mₐ=2. 통찰은 없지만 이 구역에서 M_total 이 가장 높아 ★3.
  tier: star_3
  mechanism_primary: "전개 → 유리수 항 합 = a, √14 계수 합 = b → a−b 계산"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수(2, 1, 1, −3)와 근호 안 수(2, 7)를 바꿀 수 있다. 제약: 두 근호의 곱 √(mn) 이 더 이상 정리되지 않아야(14 처럼 제곱 인수가 없어야) a+b√14 꼴이 유일하게 결정된다. mn 이 완전제곱 인수를 가지면 무리수 항이 유리수로 섞여 문제가 무너진다."
    creative: "(1) a+b 나 ab 를 묻는 식으로 바꾸기(★3 유지) (2) a, b 를 주고 원래 식의 빈 계수를 묻기(★3 · I-BW) (3) 식을 분수 꼴로 주어 유리화 뒤 계수를 비교하게 하면 단계 하나 추가(★3~4) (4) 무리수가 같은 조건(a+b√2 에서 a, b 유리수)이 성립하는 이유를 쓰게 하면 서술형."
```

```yaml
- id: GN-M31-75-04
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x=(√10−3)/(√10+3), y=(√10+3)/(√10−3) 일 때 x+y 의 값.
  category: "각각 유리화(분모 1) → 켤레 대칭으로 무리수 항 상쇄 → 유리수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 와 y 가 서로 역수이자 켤레 배치라 유리화 결과가 19∓6√10 으로 대칭이 되어 합에서 무리수 부분이 사라진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레 꼴 두 수의 합·곱(유리화 후 대칭 이용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화를 두 번 하고 (√10∓3)² 를 전개하면 되지만, 두 수가 켤레·역수 관계임을 보면 무리수 항이
    상쇄될 것을 미리 알 수 있어 검산이 쉬워진다(I-SYM d1). xy=1 이므로 x+1/x 꼴로 보아
    74-h4 골조로 넘어갈 수도 있다. 계산량이 이 구역 최대급이고 통찰 1개 → 구역 ★2~3 에서 ★3.
  tier: star_3
  mechanism_primary: "각 분수를 켤레로 유리화(분모 10−9=1) → x=19−6√10, y=19+6√10 → 합 38"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$38$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√10 과 3 을 바꿀 수 있다. 제약: 분모의 유리화 값(10−9=1)이 1이면 결과가 정수로 떨어져 가장 깔끔하고, 1이 아니면 분모가 남아 합이 분수가 된다. 근호 안 수는 완전제곱수가 아니어야 하며 유리수 부분과 가까울수록 계산이 커진다."
    creative: "(1) x−y 나 xy 를 묻기(xy=1 은 한 줄 ★2 · x−y 는 부호 판단이 붙어 ★3) (2) x²+y² 를 묻게 하면 합·곱을 먼저 구하는 74-h3 골조와 결합(★3~4) (3) x+y 와 xy 를 구해 x, y 를 두 근으로 하는 이차식을 세우게 하면 단원 경계를 넘어 ★4(I-XU)."
```

```yaml
- id: GN-M31-75-05
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    a+b=5, ab=3 일 때 a²+b²−ab 의 값.
  category: "a²+b² 를 (a+b)²−2ab 로 바꿔 대입 → ab 를 한 번 더 빼기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (1) — 합·곱에서 대칭식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a+b)²−3ab 로 한 번에 묶든 a²+b²=19 를 구하고 3을 빼든 두 줄이면 끝난다.
    74-h3 과 같은 골조에서 소문항 유도만 없앤 형태라 단계가 가장 짧다.
    구역 출발 ★2~3 이지만 통찰 없음·M_total 5 → 낮은 쪽 ★2.
  tier: star_2
  mechanism_primary: "a²+b²−ab=(a+b)²−3ab → 25−9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b 와 ab 를 바꿀 수 있다. 제약: 실수 a, b 가 존재하려면 (a+b)²−4ab ≥ 0 이어야 한다(5²=25 ≥ 12 ✓). ab 를 음수로 두면 −3ab 에서 부호가 뒤집히는 함정이 추가된다."
    creative: "(1) a²+b²+ab 로 부호만 바꾸기(★2 유지) (2) a³+b³ 로 올리면 세제곱 변형이 필요해 ★3 (3) a−b 의 값을 함께 묻기(제곱근 부호 두 경우 → ★3 · I-MI) (4) a+b 와 a²+b² 를 주고 ab 를 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-75-06
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x−1/x=6 일 때 x²−3+1/x² 의 값.
  category: "식을 (x²+1/x²)−3 으로 분리 → 주어진 식을 제곱해 x²+1/x² 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 (2) — x±1/x 꼴의 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    74-c4 와 같은 골조에 상수 −3 이 끼어든 형태다. 구하는 식을 (x²+1/x²)−3 으로 떼어 보는 한 단계가
    추가될 뿐이고, x²+1/x²=(x−1/x)²+2=38 은 앞 유형 그대로다.
    소문항 유도가 없어 핵심문제보다 한 단계 길지만 착안이랄 것은 없다. 구역 ★2~3 에서 ★2.
  tier: star_2
  mechanism_primary: "x²+1/x²=(x−1/x)²+2=38 → 38−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/75-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x−1/x 의 값 6 과 상수 −3 을 바꿀 수 있다. 제약: 차에서 출발하므로 값에 제한이 없지만(합이면 |값| ≥ 2), 상수를 크게 잡아 답이 음수가 되면 학생이 계산 실수로 오해하기 쉬우니 x²+1/x² 보다 작게 둔다."
    creative: "(1) 상수 자리를 −2 로 두면 답이 (x+1/x)² 가 되어 의미가 생긴다(★3 · I-EQV) (2) x²+1/x²+3 처럼 부호를 바꾸기(★2 유지) (3) x⁴+1/x⁴ 을 묻게 하면 같은 조작을 두 번 반복(★3) (4) 조건을 x²−6x−1=0 으로 주고 x 로 나누게 하면 ★3(I-EQV)."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 4(72-01~72-04) · ★2 11 · ★3 3(75-02 · 75-03 · 75-04) · ★4 0 · ★5 0
- 통찰형 2(75-02 I-RT d2 · 75-04 I-SYM d1) · 절차형 16 · premium 0
- M_total 분포: 4 → 2문 · 5 → 5문 · 6 → 10문 · 7 → 1문(최댓값 7 · 75-03)
- type_hint 상위: 「곱셈 공식을 이용한 수의 계산」 4(72-01 · 73-h1 · 73-c1 · 75-02) · 「곱셈 공식의 변형 (1) — 합·곱에서 대칭식의 값」 4(72-04 · 74-h3 · 74-c3 · 75-05) · 「곱셈 공식을 이용한 근호를 포함한 식의 계산」 3(72-02 · 73-h2 · 73-c2) · 「곱셈 공식의 변형 (2) — x±1/x 꼴」 3(74-h4 · 74-c4 · 75-06) · 「분모의 유리화·켤레 꼴 두 수」 2(72-03 · 75-04)
- 그림: 없음(0문)
- 이 범위의 공통 함정은 T-부호(xy·x−1/x 가 음수일 때 제곱에서 부호 소멸 · a−b 에서 재반전)와 T-표기(√a×√b 정리, √14 처럼 더 줄일 수 없는 무리수 항 묶기)다. 숫자 변형 시 **(x−y)²=(x+y)²−4xy ≥ 0**(또는 x+1/x 꼴의 |값| ≥ 2)와 **유리화 뒤 분모가 약분되는 짝**이 거의 모든 블록의 공통 제약이므로 각 `variation_notes.numeric` 을 먼저 확인한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-75-01 | 「가장 편리한 공식」 선택 자체를 묻는 판별형이라 I-SC(전략 분기)로 셀 여지가 있으나, 갈래를 비교해 효율을 고르는 것이 아니라 보기와 적합성을 대조하는 구조라 통찰 0 으로 두었다. 통찰로 세면 ★3 | ★2 / ★3 |
| GN-M31-74-h3 · GN-M31-74-c3 | ⑶ `x/y+y/x` 를 `(x²+y²)/xy` 로 통분 환원하는 단계를 I-EQV 통찰로 셀지 유형의 표준 절차로 볼지 경계. 소문항 ⑴⑵ 가 그 순서를 유도해 주므로 이 파일에서는 절차로 판정. 유도 없이 단독 출제되면 I-EQV d1 → ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 되는 것**: ① 「곱셈 공식을 이용한 수의 계산」 4문(72-01 · 73-h1 · 73-c1 · 75-02)은 기준수 분해라는 골조가 같고 빈칸 유도 유무·치환 여부만 다르다 — 하나의 유형 아래 난이도 변형으로 묶는다(75-02 만 치환 착안이 붙은 상위 변형). ② 「합·곱에서 대칭식의 값」 4문(72-04 · 74-h3 · 74-c3 · 75-05)도 주어진 것이 합이냐 차냐, 소문항 유도가 있느냐만 다르다.
- **따로 세워야 하는 것**: ① 「x±1/x 꼴의 식의 값」(74-h4 · 74-c4 · 75-06) — 대칭식 변형의 특수형이지만 xy=1 이 고정이라 조작이 상수 2 의 가감으로 정형화되고 뒤 학년(이차방정식·근의 성질)으로 이어지는 뼈대다. ② 「분모의 유리화」(72-03 · 75-04) — 계산이 아니라 켤레 배치를 보는 것이 본질이고 75-04 처럼 대칭 상쇄로 확장되는 갈래가 따로 있다. ③ 「유리수 계수 비교」(75-03) — 무리수가 같을 조건이라는 별개 개념이 들어간다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 둔 잠정값이다. ★2 가 11문으로 몰려 있는데(핵심문제·확인문제 구역 출발점 효과 + 시험에 나온다 하단 3문) base ★ 가 정해지면 M_total 6 그룹 안에서 소문항 유도가 있는 핵심문제(74-h3 · 74-h4)와 유도 없이 단독으로 묻는 시험 대비 문항(75-05 · 75-06) 사이의 층을 다시 벌려야 한다.
