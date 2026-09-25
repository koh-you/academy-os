---
name: mechanism-데이터-GN-CM1-21
description: 개념원리 공통수학1 21 미지수가 2개인 연립이차방정식(1/1 · 178~186쪽 30문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 21 미지수가 2개인 연립이차방정식
  unit_code: CM1-21
  part: "1/1"
  extract_range: "178~186쪽 · 178-e11~186-401"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. depth_score 는 effective_depth 의 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 21 미지수가 2개인 연립이차방정식 (1/1) 정독 데이터 (v1.0)

178~186쪽 30문항 전수. 구역은 「필수·발전 예제」14문(필수 예제 6 + 짝 확인체크 8) · 「특강」5문(부정방정식) · 「연습문제 STEP 1」5문 · 「STEP 2」4문 · 「실력 UP」2문이다. 벤더 난이도 신호는 구역·예제 태그(필수/특강/확인체크)와 연습문제 level(STEP 1 / STEP 2 / 실력 UP), 그리고 「교육청 기출」 태그다. ★ 출발점은 필수 예제와 그 짝 확인체크 ★2 · 특강 ★2~3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 로 두고, 여기서 M_total 과 통찰 수로 ±1 조정했다.

통찰 라벨링 관례(이 파일 전체 공통): **가르치는 자리에서 그대로 따라 쓰는 계산 절차**(일차식 대입, 인수분해되는 식 먼저 분해, 대칭식의 합·곱 치환)는 통찰로 세지 않는다. 학생이 스스로 공급해야 하는 **조건 해석**(해의 개수·실근 존재 → 판별식, 공통근 → 변변 빼기, 정수해 → 약수 조건, 실수해 → 완전제곱식의 합), **분기 후 기각**(I-VF), **표현 전환**(문장·도형 → 식)만 통찰로 센다. 이 단원은 계산 자체보다 조건 해석이 변별의 중심이라 통찰형이 24문으로 많다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-178-e11
  page: 178
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 일차식 하나와 이차식 하나로 된 연립방정식 풀기. ⑴ $3x-y=2$, $2x^2-3xy+y^2=0$ ⑵ $x-y=4$, $x^2+2xy+y^2=4$.
  category: "일차식을 한 문자에 대해 정리 → 이차식에 대입 → 이차방정식 풀이 → 해의 쌍"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차방정식과 이차방정식으로 이루어진 연립이차방정식(대입법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입법을 가르치는 자리의 필수 예제. ⑴은 대입 후 $x^2-3x+2=0$, ⑵는 $(x+y)^2=4$ 를 일차식으로 풀어도 같은 답.
    학생이 스스로 찾아야 할 조건 해석이 없어 통찰 0, M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "일차식 → $y$ 대입 → 한 문자 이차방정식 → 두 근 각각에 대한 $(x,y)$ 쌍"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{cases} x=1 \\ y=1 \end{cases}$ 또는 $\begin{cases} x=2 \\ y=4 \end{cases}$ \quad ⑵ $\begin{cases} x=1 \\ y=-3 \end{cases}$ 또는 $\begin{cases} x=3 \\ y=-1 \end{cases}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/178-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수와 상수, 이차식의 계수를 바꿀 수 있음. 제약: 대입 뒤 이차방정식이 유리수 근(또는 간단한 무리수 근)을 갖도록 판별식이 완전제곱이어야 하고, ⑵처럼 완전제곱꼴로 만들 때는 우변이 제곱수여야 함."
    creative: "(1) 이차식을 $ax^2+bxy+cy^2=0$ 동차식으로 두어 인수분해 경로도 열어 주기(★2 유지) (2) 해의 개수만 묻기(★2) (3) 일차식에 매개변수 $k$ 를 넣어 해의 조건으로 바꾸면 판별식 통찰이 생겨 ★3."
```

```yaml
- id: GN-CM1-178-380
  page: 178
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 일차식과 이차식으로 된 연립방정식 풀기. ⑴ $x+2y=5$, $2x^2+y^2=19$ ⑵ $x^2+xy=-4$, $2x+y=3$.
  category: "일차식 정리 → 대입 → 이차방정식 풀이(분수 근 포함)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차방정식과 이차방정식으로 이루어진 연립이차방정식(대입법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    178-e11 과 같은 골조의 짝 확인체크. ⑴은 $9y^2-40y+31=0$ 으로 분수 근이 나와 정리 부담이 있고 ⑵는 정수 근.
    통찰 0 · M_total 5 라 산식상 −1(★1) 후보이나, 소문항 두 개와 분수 해 처리량을 보아 ★2 로 둔다. [분류 이슈] ★1/★2 경계.
  tier: star_2
  mechanism_primary: "일차식 → 한 문자 소거 → 이차방정식 → 두 해의 쌍(분수 포함)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{cases} x=3 \\ y=1 \end{cases}$ 또는 $\begin{cases} x=-\dfrac{17}{9} \\[4pt] y=\dfrac{31}{9} \end{cases}$ \quad ⑵ $\begin{cases} x=-1 \\ y=5 \end{cases}$ 또는 $\begin{cases} x=4 \\ y=-5 \end{cases}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/178-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 우변 상수와 일차식 계수. 제약: 분수 근을 피하려면 대입 후 이차항 계수가 1 이 되도록 일차식에서 계수 1 인 문자를 소거하게 설계."
    creative: "(1) 두 소문항 중 하나를 '해가 존재하지 않는' 계수로 바꿔 판별식 검토를 강제(★3 · I-EQV) (2) 자연수 해만 구하게 하면 사후 기각이 생겨 ★3(I-VF)."
```

```yaml
- id: GN-CM1-179-e12
  page: 179
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 이차식으로 된 연립방정식 풀기. ⑴ $x^2-y^2=0$, $4x^2+xy-2y^2=9$ ⑵ $x^2-xy-2y^2=0$, $x^2+2y^2=6$.
  category: "인수분해되는 이차식을 두 일차식으로 분해 → 각 경우를 남은 이차식에 대입 → 네 쌍의 해"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식으로 이루어진 연립이차방정식(인수분해되는 식 먼저)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식 중 인수분해되는 동차식을 먼저 $(x-y)(x+y)=0$ · $(x-2y)(x+y)=0$ 으로 쪼개는 표준 절차를 가르치는 자리.
    각 분기마다 부호 짝을 맞춰 해를 적는 데서 T-부호 함정이 있으나 조건 해석 통찰은 없음. M_total 7 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "동차 이차식 인수분해 → 일차식 두 갈래 → 각각 남은 이차식에 대입 → 부호 짝 맞춘 네 쌍"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{cases} x=-3 \\ y=3 \end{cases}$ 또는 $\begin{cases} x=3 \\ y=-3 \end{cases}$ 또는 $\begin{cases} x=\sqrt{3} \\ y=\sqrt{3} \end{cases}$ 또는 $\begin{cases} x=-\sqrt{3} \\ y=-\sqrt{3} \end{cases}$ \quad ⑵ $\begin{cases} x=2 \\ y=1 \end{cases}$ 또는 $\begin{cases} x=-2 \\ y=-1 \end{cases}$ 또는 $\begin{cases} x=-\sqrt{2} \\ y=\sqrt{2} \end{cases}$ 또는 $\begin{cases} x=\sqrt{2} \\ y=-\sqrt{2} \end{cases}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/179-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동차식의 계수쌍(인수분해되는 조합만)과 남은 이차식의 우변 상수. 제약: 우변 상수를 바꾸면 무리수 해가 지저분해지므로 각 분기의 $x^2$ 계수의 배수로 잡는다."
    creative: "(1) 두 식 모두 인수분해되지 않게 만들면 소거·판별식 경로가 필요해 ★4 (2) 한 분기가 모순이 되게 우변을 잡으면 I-VF 가 생겨 ★3(185-391 골조) (3) 해의 개수만 묻기(★2)."
```

```yaml
- id: GN-CM1-179-381
  page: 179
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 두 이차식으로 된 연립방정식 풀기. ⑴ $2x^2-3xy+y^2=0$, $x^2+y^2=20$ ⑵ $2x^2-5xy+2y^2=0$, $x^2+3xy+2y^2=9$.
  category: "동차 이차식 인수분해 → 두 갈래 대입 → 무리수 해까지 네 쌍"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식으로 이루어진 연립이차방정식(인수분해되는 식 먼저)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    179-e12 의 짝 확인체크. ⑵는 $(2x-y)(x-2y)=0$ 분기 뒤 분모 유리화까지 가야 해 계산량이 크지만
    계산 부담은 변별로 세지 않는다(Mₖ=2 에서 멈춤). 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "동차식 인수분해 → $y=kx$ 꼴 두 갈래 → 남은 이차식 대입 → 유리화한 네 쌍"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{cases} x=2 \\ y=4 \end{cases}$ 또는 $\begin{cases} x=-2 \\ y=-4 \end{cases}$ 또는 $\begin{cases} x=\sqrt{10} \\ y=\sqrt{10} \end{cases}$ 또는 $\begin{cases} x=-\sqrt{10} \\ y=-\sqrt{10} \end{cases}$ \quad ⑵ $\begin{cases} x=\dfrac{\sqrt{15}}{5} \\[4pt] y=\dfrac{2\sqrt{15}}{5} \end{cases}$ 또는 $\begin{cases} x=-\dfrac{\sqrt{15}}{5} \\[4pt] y=-\dfrac{2\sqrt{15}}{5} \end{cases}$ 또는 $\begin{cases} x=\sqrt{3} \\ y=\dfrac{\sqrt{3}}{2} \end{cases}$ 또는 $\begin{cases} x=-\sqrt{3} \\ y=-\dfrac{\sqrt{3}}{2} \end{cases}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/179-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동차식 계수는 인수분해되는 조합으로, 우변 상수는 각 분기에서 제곱수가 나오도록. 제약: 무리수 해가 지저분해지면 ⑵처럼 유리화 부담만 늘고 변별은 늘지 않는다."
    creative: "(1) 두 번째 식을 $x^2+y^2=r^2$ 으로 고정해 원과 두 직선의 교점으로 재해석하면 I-RT 가 생겨 ★3 (2) 해가 두 쌍뿐이 되도록 한 분기를 모순으로(★3 · I-VF)."
```

```yaml
- id: GN-CM1-180-e13
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x^2+y^2=34$, $xy=15$ 인 연립방정식 풀기.
  category: "대칭식 → 합 $x+y$ 와 곱 $xy$ → 두 수를 근으로 하는 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭식인 연립이차방정식(합·곱 → 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x+y)^2=x^2+y^2+2xy=64$ 에서 $x+y=\pm 8$, $xy=15$ 로 두 갈래. 각 갈래마다 $t^2\mp 8t+15=0$.
    합·곱 환원을 그대로 가르치는 자리라 통찰 0. $x+y$ 의 부호 두 갈래가 T-부호 함정. M_total 6 · 필수 → ★2.
  tier: star_2
  mechanism_primary: "$(x+y)^2=x^2+y^2+2xy$ → $x+y=\\pm 8$ · $xy=15$ → 두 수를 근으로 하는 이차방정식 → 네 쌍"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\begin{cases} x=3 \\ y=5 \end{cases}$ 또는 $\begin{cases} x=5 \\ y=3 \end{cases}$ 또는 $\begin{cases} x=-5 \\ y=-3 \end{cases}$ 또는 $\begin{cases} x=-3 \\ y=-5 \end{cases}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/180-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x^2+y^2=s$ · $xy=p$ 에서 $s+2p$ 와 $s-2p$ 가 모두 제곱수이면 정수 해. 제약: $s-2p<0$ 이면 실수 해가 없고 $s+2p<0$ 이면 $x+y$ 가 허수."
    creative: "(1) $x^2+y^2$ 대신 $x^3+y^3$ 을 주면 대칭식 변형이 한 겹 늘어 ★3 (2) $x-y$ 의 값을 함께 묻기(★2) (3) 해가 실수가 되도록 하는 $p$ 의 범위를 묻는 조건 문제로 바꾸면 판별식 통찰이 생겨 ★3."
```

```yaml
- id: GN-CM1-180-382
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 대칭식 연립방정식 풀기. ⑴ $x+y=2$, $x^2-xy+y^2=49$ ⑵ $x^2+y^2+x+y=2$, $x^2+xy+y^2=1$.
  category: "$u=x+y$, $v=xy$ 로 환원 → $u$, $v$ 연립 → 두 수를 근으로 하는 이차방정식"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭식인 연립이차방정식(합·곱 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵는 두 식이 모두 대칭식이라 $u^2-2v+u=2$, $u^2-v=1$ 의 $u$, $v$ 연립으로 환원되고 $u=0$ 또는 $u=1$ 두 갈래가 나온다.
    합·곱 치환 자체는 앞 예제에서 가르친 절차라 통찰로 세지 않음. M_total 7 · 확인체크 출발점 ★2 → ★2. ⑵만 떼면 ★3급.
  tier: star_2
  mechanism_primary: "두 대칭식 → $u=x+y$ · $v=xy$ 연립 → $u$ 값마다 $t^2-ut+v=0$ → 해의 쌍"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{cases} x=-3 \\ y=5 \end{cases}$ 또는 $\begin{cases} x=5 \\ y=-3 \end{cases}$ \quad ⑵ $\begin{cases} x=1 \\ y=-1 \end{cases}$ 또는 $\begin{cases} x=-1 \\ y=1 \end{cases}$ 또는 $\begin{cases} x=0 \\ y=1 \end{cases}$ 또는 $\begin{cases} x=1 \\ y=0 \end{cases}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/180-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴은 $x+y$ 와 $x^2-xy+y^2$ 의 값으로 $xy$ 가 정수가 되게, ⑵는 $u$ 에 대한 이차방정식이 정수 근을 갖게 상수항을 잡는다. 제약: 각 $u$ 에 대해 $u^2-4v\\ge 0$ 이어야 실수 해."
    creative: "(1) $x^3+y^3$ 을 묻는 형태로 바꾸면 개별 해를 구하지 않는 대칭식 활용이 되어 ★3(I-EQV) (2) 자연수 해만 구하게 하면 분기 기각이 생겨 ★3(I-VF · 185-392 골조)."
```

```yaml
- id: GN-CM1-181-e14
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    연립방정식 $x+y=k$, $-y^2+2xy=3$ 이 오직 한 쌍의 해를 가질 때 실수 $k$ 의 값 모두 구하기.
  category: "대입 → $y$ 에 대한 이차방정식 → 해가 한 쌍 ⟺ 중근 ⟺ 판별식 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'오직 한 쌍의 해' 를 '대입해 얻은 이차방정식이 중근을 갖는다'로 옮겨 판별식 0 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 해의 조건(판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x=k-y$ 대입 → $3y^2-2ky+3=0$, 이 식의 해 하나가 해의 쌍 하나에 대응하므로 중근 조건 $k^2-9=0$.
    해의 개수 조건을 판별식으로 옮기는 동치 변환 1개 · 매개변수 $k$ 로 Mₐ=2 · M_total 7 → 필수 예제 ★2 에서 +1 → ★3.
  mechanism_primary: "일차식 대입 → $y$ 이차방정식 → 해 한 쌍 ⟺ $D=0$ → $k=\\pm 3$"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k=\pm 3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/181-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 우변 상수. 제약: 대입 후 이차항 계수가 0 이 되지 않아야 하고(그러면 일차방정식이 되어 항상 한 쌍), 판별식이 $k$ 의 짝수 차 식이어야 $k=\\pm$ 꼴 답이 나온다."
    creative: "(1) '해를 갖지 않을' 조건으로 바꾸기($D<0$ · ★3 · 185-393 골조) (2) '서로 다른 두 쌍' 으로 바꾸기($D>0$ · ★3) (3) 대입 후 이차항 계수가 0 이 될 수 있게 설계하면 계수 0 분기 검토가 강제되어 ★4(I-VF)."
```

```yaml
- id: GN-CM1-181-e15
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    지름 $13\,\mathrm{cm}$ 인 원에 내접하고 둘레가 $34\,\mathrm{cm}$ 인 직사각형의 가로·세로 길이 구하기(가로가 세로보다 김).
  category: "내접 직사각형의 대각선 = 지름 → 피타고라스 + 둘레 → 합·곱 연립"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원에 내접하는 직사각형의 대각선이 지름이라는 기하 사실을 $x^2+y^2=13^2$ 이라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 활용 — 도형(내접 직사각형·피타고라스)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x+y=17$, $x^2+y^2=169$ → $xy=60$ → $t^2-17t+60=0$. 기하 조건의 대수화 통찰 1개이나 내접 직사각형은 교과서 표준 소재.
    M_total 6 · 필수 예제 출발점 ★2 → ★2 유지(가로>세로 단서가 답 배정만 정함).
  tier: star_2
  mechanism_primary: "대각선=지름 → $x^2+y^2=169$ · 둘레 → $x+y=17$ → $xy=60$ → $t^2-17t+60=0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '가로의 길이: $12\,\mathrm{cm}$, 세로의 길이: $5\,\mathrm{cm}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/181-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름과 둘레는 피타고라스 수 쌍(5·12·13, 8·15·17, 7·24·25)에서 역산해 잡는다. 제약: $(x+y)^2-2xy=d^2$ 에서 $xy>0$ 이고 $(x+y)^2-4xy\\ge 0$ 이어야 실수 해."
    creative: "(1) 넓이를 주고 대각선을 묻기(★2) (2) 직사각형을 직각삼각형으로 바꿔 빗변·넓이 조건으로(★2) (3) 둘레 대신 '가로와 세로의 차' 를 주면 부호 분기가 생겨 ★3 (4) 내접 조건을 없애고 대각선 길이를 미지수로 두면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-CM1-181-383
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연립방정식 $x+y=2a+1$, $xy=a^2+3$ 이 실근을 가질 때 정수 $a$ 의 최솟값 구하기.
  category: "합·곱 → 두 수를 근으로 하는 이차방정식 → 실근 ⟺ $D\\ge 0$ → 정수 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'$x$, $y$ 가 실수' 를 '합과 곱을 계수로 하는 이차방정식의 판별식이 0 이상' 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 해의 조건(실근 · 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t^2-(2a+1)t+(a^2+3)=0$ 의 $D=(2a+1)^2-4(a^2+3)=4a-11\ge 0$ → $a\ge \dfrac{11}{4}$.
    실수 조건을 판별식으로 옮기는 통찰 1개 · 매개변수 $a$ · 경계 부등호와 정수화까지 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "합·곱 → $t$ 이차방정식 → $D\\ge 0$ → $a\\ge 11/4$ → 정수 최솟값 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/181-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 $2a+1$ 과 곱 $a^2+3$ 의 계수. 제약: 판별식에서 $a^2$ 항이 소거돼 일차부등식이 되도록 설계해야 '정수 최솟값' 이 깔끔하게 나온다(남으면 이차부등식 → 범위 양끝)."
    creative: "(1) 최댓값을 묻도록 부등호 방향 뒤집기(★3 · 186-397 골조) (2) $x$, $y$ 가 자연수인 조건으로 바꾸면 약수·기각이 생겨 ★4 (3) 판별식이 이차부등식이 되게 해 범위 양끝을 묻기(★3~4)."
```

```yaml
- id: GN-CM1-181-384
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $50$ 이상인 두 자리 자연수에서 각 자리 숫자의 제곱의 합이 $73$, 자리를 바꾼 수와 처음 수의 합이 $121$ 일 때 처음 수 구하기.
  category: "자리 숫자를 문자로 → 제곱합·자리 바꾼 수 조건 → 합·곱 연립 → 범위 조건으로 후보 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 자리 수와 자리를 바꾼 수를 $10a+b$, $10b+a$ 로 옮겨 문장 조건을 대칭식 연립으로 전환"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연립에서 나온 두 후보 38 과 83 중 '50 이상' 조건에 어긋나는 쪽을 기각해야 답이 하나로 확정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 활용 — 자리의 숫자"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a^2+b^2=73$, $11(a+b)=121$ → $a+b=11$, $ab=24$ → $t^2-11t+24=0$ → $\{3,8\}$.
    문장 → 자리 표현의 전환과 '50 이상' 사후 기각 두 통찰. M_total 6 이나 통찰 2개 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "$10a+b$ 로 식 세우기 → $a+b=11$ · $ab=24$ → $\\{3,8\\}$ → 50 이상 조건으로 83 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$83$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/181-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱합과 자리합. 제약: $a+b$ 와 $ab$ 가 모두 정수이고 $t^2-(a+b)t+ab=0$ 이 1~9 범위의 정수 두 개를 근으로 가져야 하며, 두 후보 중 하나만 살아남도록 범위 단서(50 이상 등)를 맞춘다."
    creative: "(1) 세 자리 수로 확장하면 미지수가 늘어 ★4 (2) 범위 단서를 빼고 '모든 수를 구하시오' 로 바꾸면 I-VF 가 사라져 ★2 (3) '자리를 바꾼 수와의 차' 를 주면 부호 분기가 생겨 ★3 유지."
```

```yaml
- id: GN-CM1-181-385
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 변의 길이가 $10$ 인 마름모의 두 대각선 길이의 차가 $4\sqrt{5}$ 일 때 두 대각선 길이의 합 구하기.
  category: "대각선 수직이등분 → 피타고라스 $p^2+q^2=400$ → 차 조건으로 $pq$ → 곱셈공식으로 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "마름모의 대각선이 서로 수직이등분한다는 기하 사실을 $(p/2)^2+(q/2)^2=10^2$ 이라는 대수 조건으로 옮김"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$p$, $q$ 를 따로 구하지 않고 $(p+q)^2=(p^2+q^2)+2pq$ 로 묻는 값만 바로 계산"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 활용 — 도형(마름모 대각선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $p^2+q^2=400$, $(p-q)^2=80$ → $pq=160$ → $(p+q)^2=720$. 기하 조건의 대수화와 대칭식 우회 계산 두 통찰.
    개별 대각선 길이를 구하면 무리수 연립이 되므로 '합만 묻는다' 는 구조를 읽는 것이 핵심. ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "수직이등분 → $p^2+q^2=400$ → $(p-q)^2=80$ 에서 $pq=160$ → $(p+q)^2=720$ → $12\\sqrt{5}$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/181-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이 $a$ 와 대각선 차 $d$. 제약: $p^2+q^2=4a^2$ 이고 $pq=(4a^2-d^2)/2>0$ 이어야 하며 $(p+q)^2=4a^2+2pq$ 가 제곱수 꼴이어야 답이 깔끔하다."
    creative: "(1) 넓이($pq/2$)를 묻기(★2) (2) 대각선의 합을 주고 차를 묻기(같은 골조 ★3) (3) 마름모를 직사각형·평행사변형으로 바꾸면 수직이등분이 깨져 다른 관계식 필요(★3~4) (4) 대각선 길이 각각을 묻게 하면 무리수 연립이 되어 계산만 무거워짐(권장하지 않음)."
```

```yaml
- id: GN-CM1-182-e16
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 이차방정식 $x^2+kx-2=0$, $x^2+2x-k=0$ 이 한 개의 공통인 근을 가질 때 실수 $k$ 의 값 구하기.
  category: "공통근 $\\alpha$ 를 두 식에 대입 → 변변 빼서 일차식 → $\\alpha$ 결정 → 대입해 $k$"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'공통근을 갖는다' 를 '두 식을 변끼리 뺀 일차방정식도 그 근을 갖는다' 로 옮겨 이차 두 개를 일차 하나로 낮춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 근을 갖는 두 이차방정식(변변 빼기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변변 빼기 → $(k-2)\alpha+(k-2)=0$ 꼴에서 $\alpha=-1$, 대입해 $k$ 확정. $k=2$ 이면 식이 소거되는 경계도 짚어야 한다.
    공통근 조건의 동치 변환 1개 · 매개변수 $k$ · M_total 7 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "두 식 변변 빼기 → 일차식 → 공통근 $\\alpha=-1$ → 원식에 대입 → $k=-1$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/182-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 일차항·상수항 계수. 제약: 변변 뺀 결과가 일차식으로 남아야 하고(이차항 계수가 같아야 함), 그 일차식의 근이 정수가 되게 계수를 잡는다."
    creative: "(1) 이차항 계수를 다르게 해 변변 뺀 결과가 이차식이 되게 하면 갈래가 늘어 ★4 (2) '오직 하나의 공통근' 으로 바꾸면 나머지 분기 기각이 필요해 ★3(182-387 골조) (3) 공통근이 실근이어야 한다는 단서를 더하면 I-VF 추가로 ★3(185-394 골조)."
```

```yaml
- id: GN-CM1-182-386
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 이차방정식 $x^2-(k+4)x+5k=0$, $x^2+(k-2)x-5k=0$ 이 공통인 근을 갖도록 하는 실수 $k$ 구하기($k\ne 0$).
  category: "상수항이 $\\pm 5k$ 임을 보고 변변 더하기 → $k$ 없는 이차식 → 공통근 후보 → $k\\ne0$ 으로 기각"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준인 변변 빼기 대신 변변 더하기를 택하면 $\\pm 5k$ 가 소거돼 $2x^2-6x=0$ 으로 공통근 후보가 바로 나옴"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "후보 $x=0$ 은 $5k=0$ 즉 $k=0$ 을 강요해 단서에 어긋나므로 기각하고 $x=3$ 만 남김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공통인 근을 갖는 두 이차방정식(변변 더하기 · 분기 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변변 빼기는 $k$ 가 남아 분수식이 되지만 더하기는 상수항이 소거돼 $x=0$ 또는 $x=3$ 이 즉시 나온다.
    해법 갈래 선택(SC d2)과 $k\ne 0$ 단서에 의한 분기 기각(VF d1) 두 통찰 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "두 식 변변 더하기 → $2x^2-6x=0$ → $x=0$ 기각 · $x=3$ → 대입 → $k=3/2$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/182-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 $\\pm mk$ 로 대칭시키고 일차항 계수를 잡으면 더하기로 $k$ 가 소거된다. 제약: 더한 식이 인수분해되는 이차식이어야 하고, 두 후보 중 하나만 단서로 기각되게 설계."
    creative: "(1) 일차항을 $\\pm$ 대칭으로 만들어 '빼기가 지름길' 이 되게 뒤집기(★3 유지 · SC 방향만 반전) (2) $k\\ne 0$ 단서를 빼면 답이 둘이 되어 I-VF 소멸 → ★2 (3) 공통근의 값도 함께 묻기(★3)."
```

```yaml
- id: GN-CM1-182-387
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 이차방정식 $x^2+4mx-2m+1=0$, $x^2+mx+m+1=0$ 이 오직 하나의 공통인 근을 갖도록 하는 실수 $m$ 과 그때의 공통근 구하기.
  category: "변변 빼기 → $3m(x-1)=0$ → $m=0$ 갈래와 $x=1$ 갈래 → '오직 하나' 로 $m=0$ 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통근 조건을 변변 뺀 식 $3mx-3m=0$ 으로 옮겨 $m$ 과 $x$ 의 곱 꼴로 분해"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$m=0$ 이면 두 식이 완전히 같아져 공통근이 두 개가 되므로 '오직 하나' 조건에 어긋나 기각 — 이 검증을 빼면 답이 둘이 됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "오직 하나의 공통근 조건(두 식이 일치하는 분기 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $3m(x-1)=0$ 에서 갈래가 둘. $m=0$ 갈래는 두 이차식이 동일해져 공통근이 두 개라 '오직 하나' 에 위배되고, $x=1$ 갈래에서 $m=-1$.
    두 식이 일치하는 퇴화 분기를 스스로 기각해야 한다는 점에서 VF d2. M_total 9 · 통찰 2 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "변변 빼기 → $3m(x-1)=0$ → $m=0$(두 식 일치) 기각 → $x=1$ 대입 → $m=-1$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$m=-1$, 공통인 근: $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/182-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 일차항·상수항을 $m$ 의 일차식으로 잡되 변변 뺀 결과가 $m$ 과 일차식의 곱으로 인수분해되게. 제약: 퇴화 분기($m=0$)에서 두 식이 실제로 같아져야 '오직 하나' 단서가 작동한다."
    creative: "(1) '적어도 하나의 공통근' 으로 바꾸면 퇴화 분기가 살아나 답이 둘(★3 · I-MI) (2) 공통근이 실근이라는 단서를 추가해 판별식 검토까지(★4) (3) 한 식을 삼차로 올리면 켤레·인수 논의가 붙어 ★4(186-401 골조)."
```

### 특강

```yaml
- id: GN-CM1-183-e1
  page: 183
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    방정식 $xy-y-3-x^2=0$ 을 만족시키는 양의 정수 $x$, $y$ 모두 구하기.
  category: "한 문자에 대해 정리 → 분수식으로 분리 → (분모)가 (분자의 상수)의 약수 → 양의 정수 분기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미지수 2개 식 1개라 풀 수 없는 형태를 $y=x+1+\\dfrac{4}{x-1}$ 로 옮겨 '정수해' 를 '약수 조건' 으로 바꿈"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x-1$ 이 4 의 양의 약수라는 조건에서 서로 독립인 세 경우를 모두 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정수 조건의 부정방정식(약수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y(x-1)=x^2+3$ → $y=x+1+\dfrac{4}{x-1}$. 양의 정수 조건이 $x-1\in\{1,2,4\}$ 로 범위를 닫아 준다.
    식의 개수가 모자란 상황을 약수 조건으로 옮기는 동치 변환(d2)과 약수 분기(d1). 특강 예제 출발점 ★3 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "$y$ 에 대해 정리 → 분수 분리 → $x-1\\mid 4$ → 양의 정수 분기 세 개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\begin{cases} x=2 \\ y=7 \end{cases}$ 또는 $\begin{cases} x=3 \\ y=6 \end{cases}$ 또는 $\begin{cases} x=5 \\ y=7 \end{cases}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/183-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분리 뒤 남는 상수(여기선 4)의 약수 개수가 분기 수를 정한다. 제약: 상수를 소수로 잡으면 분기 2개로 줄고, 합성수로 잡으면 늘어난다. '양의 정수' 를 '정수' 로 바꾸면 음의 약수까지 분기가 두 배."
    creative: "(1) $x+y$ 의 최대·최솟값을 묻기(★3 · 183-389 골조) (2) 해의 개수만 묻기(★2) (3) 정수해 조건을 판별식 조건과 겹치면 ★4(186-399 골조) (4) 양의 정수 제한을 풀어 음수 약수까지 열면 기각 검토가 늘어 ★3~4."
```

```yaml
- id: GN-CM1-183-388
  page: 183
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    방정식 $xy-x-y-1=0$ 을 만족시키는 정수 $x$, $y$ 구하기.
  category: "상수를 조정해 $(x-1)(y-1)=2$ 인수분해 → 정수 약수쌍(음수 포함) 분기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양변에 1 을 더해 $(x-1)(y-1)=2$ 라는 곱 꼴로 옮겨 정수해 문제를 약수쌍 문제로 바꿈"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정수 범위이므로 $(1,2)$, $(2,1)$ 뿐 아니라 $(-1,-2)$, $(-2,-1)$ 까지 네 갈래를 모두 따짐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정수 조건의 부정방정식(인수분해 꼴 $(x-p)(y-q)=n$)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상수항을 맞춰 곱 꼴로 묶는 착안이 전부이고 계산은 가볍다(Mₖ=1). 음의 약수쌍을 빠뜨리면 해 절반을 잃는 T-부호 함정.
    통찰 2개 · M_total 6 → 특강 확인체크 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "$xy-x-y+1=2$ → $(x-1)(y-1)=2$ → 정수 약수쌍 네 갈래 → 네 쌍의 해"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\begin{cases} x=2 \\ y=3 \end{cases}$ 또는 $\begin{cases} x=3 \\ y=2 \end{cases}$ 또는 $\begin{cases} x=0 \\ y=-1 \end{cases}$ 또는 $\begin{cases} x=-1 \\ y=0 \end{cases}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/183-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$(x-p)(y-q)=n$ 에서 $p$, $q$, $n$. 제약: 원식 $xy-qx-py+(pq-n)=0$ 의 계수가 정수여야 하고, $n$ 의 약수 개수(부호 포함)가 해의 개수를 정한다."
    creative: "(1) 양의 정수로 제한하면 분기가 절반으로 줄어 ★2 (2) $n$ 을 제곱수로 잡아 $x=y$ 인 해가 생기게 하기(★3) (3) $x+y$ 의 최댓값을 묻기(★3) (4) $n$ 을 문자로 두고 해가 4 쌍이 되는 조건을 묻기(★4 · I-BW)."
```

```yaml
- id: GN-CM1-183-389
  page: 183
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    방정식 $xy+y-2x=7$ 을 만족시키는 정수 $x$, $y$ 에 대하여 $x+y$ 의 최댓값 구하기.
  category: "$y$ 에 대해 정리 → 분수 분리 → $x+1$ 이 5 의 약수 → 네 분기의 $x+y$ 비교"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$y=2+\\dfrac{5}{x+1}$ 로 옮겨 정수해 조건을 $x+1$ 이 5 의 약수라는 조건으로 바꿈"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x+1\\in\\{\\pm 1,\\pm 5\\}$ 네 갈래를 모두 계산해야 최댓값 비교가 가능"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정수 조건의 부정방정식 — $x+y$ 의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    약수 분기가 음수까지 네 갈래이고, 각 갈래의 $x+y$ 를 모두 구해 비교해야 한다(최댓값 7 이 두 갈래에서 동시에 나옴).
    통찰 2개 · M_total 8 → 특강 확인체크 ★2 에서 +1 → ★3. 음의 약수를 빠뜨리면 비교 자체가 틀어지는 T-부호 함정.
  tier: star_3
  mechanism_primary: "$y(x+1)=2x+7$ → $y=2+5/(x+1)$ → $x+1\\mid 5$ 네 갈래 → $x+y$ 비교 → 최댓값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/183-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분리 뒤 남는 상수(5)와 일차항 계수. 제약: 상수를 소수로 두면 분기 4 개, 합성수면 더 늘어난다. 최댓값이 유일하게 나오게 하려면 분기별 $x+y$ 가 서로 다르도록 계수를 잡는다."
    creative: "(1) $xy$ 의 최솟값을 묻기(★3) (2) 양의 정수로 제한해 분기를 줄이기(★2) (3) 두 미지수 모두에 일차항을 남겨 $(x+a)(y+b)=n$ 곱 꼴로 바꾸기(★3 · 183-388 골조)."
```

```yaml
- id: GN-CM1-184-e2
  page: 184
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    방정식 $2x^2+2xy+y^2+2x+1=0$ 을 만족시키는 실수 $x$, $y$ 의 값 구하기.
  category: "실수 조건 → $A^2+B^2=0$ 꼴로 변형 → $A=B=0$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식 하나로 미지수 둘을 정하려면 '실수의 제곱은 0 이상' 을 써야 함을 보고 $(x+y)^2+(x+1)^2=0$ 으로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실수 조건의 부정방정식(완전제곱식의 합 $=0$)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y$ 를 포함한 항을 $(x+y)^2$ 로 먼저 묶고 남은 $x^2+2x+1$ 을 $(x+1)^2$ 로 만드는 묶는 순서 착안이 핵심.
    판별식 두 번으로도 풀리지만 특강이 가르치는 표준은 제곱합. 특강 예제 출발점 ★3 · 통찰 1(d2) → ★3.
  tier: star_3
  mechanism_primary: "$(x+y)^2+(x+1)^2=0$ → 실수이므로 $x+y=0$ · $x+1=0$ → $x=-1$, $y=1$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=-1$, $y=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/184-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$(x+ay+b)^2+(cx+d)^2=0$ 을 전개해 계수를 만든다. 제약: 전개했을 때 $y^2$ 계수가 1(또는 제곱수)이고 교차항이 정수여야 묶기가 가능하며, 해가 정수가 되게 $b$, $d$ 를 잡는다."
    creative: "(1) 세 제곱의 합 $=0$ 으로 미지수를 셋으로 늘리기(★4) (2) $x$ 에 대한 이차식의 판별식 $\\ge 0$ 경로를 강제하도록 교차항을 키우면 I-SC 가 생겨 ★4 (3) $xy$ 나 $x+y$ 의 값만 묻기(★2~3 · 184-390 골조)."
```

```yaml
- id: GN-CM1-184-390
  page: 184
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    방정식 $x^2+y^2-4x-2y+5=0$ 을 만족시키는 실수 $x$, $y$ 에 대하여 $xy$ 의 값 구하기.
  category: "$x$, $y$ 를 따로 완전제곱 → 제곱합 $=0$ → 두 값 확정 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교차항이 없어 $x$, $y$ 각각 완전제곱하면 바로 $(x-2)^2+(y-1)^2=0$ 이 되고 실수 조건으로 값이 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 조건의 부정방정식(완전제곱식의 합 $=0$)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $xy$ 항이 없어 묶는 순서를 고민할 필요가 없고 한 줄에 끝난다. 184-e2 골조의 가장 쉬운 판.
    통찰 1(d1) · M_total 4 → 특강 구역이지만 출발점 ★2 에서 조정 없음 → ★2. [분류 이슈] 특강 구역 최하단 난이도.
  tier: star_2
  mechanism_primary: "$(x-2)^2+(y-1)^2=0$ → $x=2$, $y=1$ → $xy=2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/184-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$(x-p)^2+(y-q)^2=0$ 을 전개한 계수. 제약: 상수항이 $p^2+q^2$ 과 정확히 같아야 하며, 다르면 해가 없거나 원이 되어 문제가 성립하지 않는다."
    creative: "(1) 교차항 $-2xy$ 를 넣어 묶는 순서를 고민하게 만들면 ★3(185-395 골조) (2) 상수항을 문자로 두고 실수 해가 존재할 조건을 묻기(★3 · I-BW) (3) $x+y$, $x^2+y^2$ 등 다른 값 묻기(★2 유지)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-185-391
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    연립방정식 $x^2-3xy+2y^2=0$, $x^2-y^2=9$ 의 해를 $(\alpha_1,\beta_1)$, $(\alpha_2,\beta_2)$ ($\alpha_1<\alpha_2$)라 할 때 $\beta_1-\beta_2$ 의 값. 5지선다.
  category: "동차식 인수분해 → 두 갈래 → 한 갈래는 모순으로 기각 → 순서 조건으로 부호 배정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x=y$ 갈래는 $x^2-y^2=9$ 와 동시에 성립할 수 없어 기각해야 하며, 이를 놓치면 해가 네 쌍이라고 잘못 센다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 이차식 연립 — 인수분해 분기 중 모순 분기 기각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $(x-y)(x-2y)=0$ 에서 $x=y$ 는 $0=9$ 가 되어 기각, $x=2y$ 만 살아 $y^2=3$ → 해는 두 쌍뿐.
    $\alpha_1<\alpha_2$ 라는 순서 단서로 부호를 짝지어야 하는 T-부호 함정까지. 통찰 1 · M_total 8 · 기출 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "$(x-y)(x-2y)=0$ → $x=y$ 기각 → $x=2y$ 대입 → $y=\\pm\\sqrt{3}$ → 순서로 부호 배정 → $\\beta_1-\\beta_2$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동차식의 두 인수와 $x^2-y^2$ 의 우변. 제약: 한 인수가 $x=\\pm y$ 여야 두 번째 식과 모순이 생겨 기각 분기가 만들어진다. 우변을 제곱수로 잡으면 유리수 해."
    creative: "(1) 두 번째 식을 $x^2+y^2=r^2$ 으로 바꾸면 기각 분기가 사라져 해가 네 쌍(★2) (2) $\\alpha_1\\beta_1+\\alpha_2\\beta_2$ 같은 대칭식으로 묻기(★3) (3) 순서 조건을 빼면 부호 함정이 사라져 ★2."
```

```yaml
- id: GN-CM1-185-392
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연립방정식 $xy+x+y=9$, $x^2y+xy^2=20$ 을 만족시키는 자연수 $x$, $y$ 에 대하여 $x^2+y^2$ 의 값 구하기.
  category: "$u=x+y$, $v=xy$ 로 환원 → $u+v=9$, $uv=20$ → 근과 계수 재적용 → 자연수 조건으로 기각"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$u$, $v$ 의 합과 곱이 주어진 꼴임을 보고 $u$, $v$ 자체를 $t^2-9t+20=0$ 의 두 근으로 처리(근과 계수 관계의 2중 적용)"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$(u,v)=(4,5)$ 갈래는 $t^2-4t+5=0$ 이 허근이라 자연수 해를 주지 못해 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭식 연립 — 합·곱의 연립과 자연수 조건 기각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^2y+xy^2=xy(x+y)$ 를 보는 순간 $u+v=9$, $uv=20$ 이 되고 $(u,v)$ 가 $(4,5)$ 또는 $(5,4)$ 로 갈린다.
    합·곱 치환은 절차지만 $u$, $v$ 에 근과 계수를 다시 쓰는 착안(d2)과 자연수 조건 기각(d1)은 통찰. → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "$u+v=9$ · $uv=20$ → $(u,v)=(5,4)$ 채택 → $t^2-5t+4=0$ → $\\{1,4\\}$ → $x^2+y^2=17$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$u+v$ 와 $uv$ 의 값. 제약: $t^2-(u+v)t+uv=0$ 이 정수 두 근을 갖고, 그중 한 $(u,v)$ 배정만 $u^2-4v\\ge 0$ 을 만족해야 기각 분기가 생긴다."
    creative: "(1) 자연수 조건을 실수로 풀면 기각이 사라져 해가 늘고 ★2 (2) $x^3+y^3$ 을 묻기(★3 유지) (3) 세 미지수 대칭식으로 확장(★4~5) (4) $xy$ 와 $x+y$ 중 하나만 주고 나머지를 조건식으로 주면 판별식 통찰 추가(★3)."
```

```yaml
- id: GN-CM1-185-393
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연립방정식 $x^2+2x-2y=0$, $x+y=a$ 의 실근이 존재하지 않도록 하는 정수 $a$ 의 최댓값 구하기.
  category: "대입 → $x$ 이차방정식 → 실근 없음 ⟺ $D<0$ → 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'연립방정식의 실근이 없다' 를 '대입해 얻은 $x$ 이차방정식의 판별식이 음수' 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립이차방정식의 해의 조건(실근 없음 · 판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=a-x$ 대입 → $x^2+4x-2a=0$ → $D/4=4+2a<0$ → $a<-2$ → 정수 최댓값 $-3$.
    대입 한 번·판별식 한 번으로 끝나고 계산도 가볍다(Mₖ=1). 통찰 1 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "대입 → $x^2+4x-2a=0$ → $D/4<0$ → $a<-2$ → 정수 최댓값 $-3$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 일차식의 형태. 제약: 대입 뒤 판별식이 $a$ 의 일차식이어야 정수 최댓값이 하나로 떨어진다. 경계에서 등호 포함 여부($<$ vs $\\le$)가 답을 1 바꾼다."
    creative: "(1) '서로 다른 두 쌍의 해' 로 바꾸기($D>0$ · ★2) (2) '오직 한 쌍' 으로 바꾸기($D=0$ · ★3 · 181-e14 골조) (3) 일차식을 $x+y=a$ 대신 $x+ay=1$ 로 하면 $a$ 가 이차항에도 들어가 계수 0 분기 검토가 생겨 ★4."
```

```yaml
- id: GN-CM1-185-394
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 이차방정식 $px^2+x+1=0$, $x^2+px+1=0$ 이 공통인 실근을 가질 때 실수 $p$ 의 값 구하기.
  category: "변변 빼기 → $(p-1)x(x-1)=0$ → 세 갈래 → 실근·모순으로 둘 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통근 조건을 변변 뺀 식 $(p-1)(x^2-x)=0$ 으로 옮겨 $p$ 와 $x$ 의 곱 꼴로 분해"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$p=1$ 갈래는 $x^2+x+1=0$ 이 실근이 없어, $x=0$ 갈래는 원식에 넣으면 $1=0$ 이라 각각 기각 — 살아남는 것은 $x=1$ 뿐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공통인 실근 조건(분기 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 식이 계수를 맞바꾼 꼴이라 변변 빼면 $(p-1)x(x-1)=0$ 으로 갈래가 셋. 세 갈래 중 둘을 '실근' 단서와 모순으로 걷어내야 한다.
    통찰 2 · M_total 8 → STEP 1 ★2 에서 +1 → ★3. '실근' 을 빼면 $p=1$ 이 살아나 답이 둘이 되는 지점이 변별점.
  tier: star_3
  mechanism_primary: "변변 빼기 → $(p-1)x(x-1)=0$ → $p=1$·$x=0$ 기각 → $x=1$ 대입 → $p=-2$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수를 서로 맞바꾼 대칭 구조가 핵심(상수항은 같게). 제약: 변변 뺀 식이 $(p-1)$ 과 이차식의 곱으로 인수분해돼야 하고, $p=1$ 갈래가 허근이 되도록 상수항을 잡아야 기각이 성립."
    creative: "(1) '실근' 을 '근' 으로 바꾸면 허근 갈래가 살아나 답이 둘(★3 · I-MI) (2) 상수항도 $p$ 로 두면 갈래가 늘어 ★4 (3) 공통근의 값을 함께 묻기(★3 유지)."
```

```yaml
- id: GN-CM1-185-395
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    방정식 $x^2-2xy+2y^2-4x+2y+5=0$ 을 만족시키는 실수 $x$, $y$ 에 대하여 $xy$ 의 값 구하기.
  category: "$x$ 에 대해 내림차순 정리 → 완전제곱 → 남은 $y$ 식도 완전제곱 → 제곱합 $=0$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교차항 $-2xy$ 가 있어 그냥 묶이지 않으므로 $x$ 에 대해 내림차순 정리한 뒤 $(x-y-2)^2+(y-1)^2=0$ 으로 두 번 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실수 조건의 부정방정식(교차항 포함 완전제곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    184-e2 와 같은 제곱합 골조이나 교차항 때문에 '한 문자로 정리 → 완전제곱 → 나머지 정리' 가 한 겹 더 붙는다.
    묶는 순서를 스스로 정해야 하므로 d2. 통찰 1 · M_total 6 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "$x$ 내림차순 정리 → $(x-y-2)^2+(y-1)^2=0$ → $y=1$, $x=3$ → $xy=3$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$(x-ay-b)^2+(cy-d)^2=0$ 을 전개해 계수를 만든다. 제약: $y^2$ 계수가 $a^2+c^2$ 과 일치해야 하고 상수항이 $b^2+d^2$ 이어야 한다. 해가 정수로 떨어지게 $b$, $d$ 를 잡는다."
    creative: "(1) $x$ 에 대한 이차식으로 보고 $D\\ge 0$ 으로 푸는 경로도 열어 주면 I-SC 가 생겨 ★4 (2) $x+y$ 나 $x^2+y^2$ 를 묻기(★3 유지) (3) 교차항 계수를 키워 묶이지 않게 하면 판별식 경로만 남아 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-185-396
  page: 185
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 연립방정식 $\{a^2x^2-y^2=-1,\ 2x+y=3\}$ 과 $\{x+y=b^2,\ x^2-y^2=-45\}$ 가 공통인 해를 가질 때 실수 $a$, $b$ 에 대하여 $a^2+b^2$ 의 값 구하기.
  category: "공통해 $(x,y)$ 가 네 식을 모두 만족 → 문자 없는 두 식으로 $x$ 결정 → 실수 조건으로 분기 기각 → $a^2$, $b^2$"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 연립방정식이 공통해를 가진다' 를 '한 쌍 $(x,y)$ 가 네 식을 동시에 만족한다' 로 옮겨, 문자가 없는 식들만 먼저 연립해 $x$ 를 확정"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=6$ 갈래는 $b^2=3-x<0$ 이 되어 실수 $b$ 가 없으므로 기각 — 이 검증을 빼면 답이 둘이 됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 연립방정식의 공통해 · 실수 조건 기각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y=3-2x$ 와 $x^2-y^2=-45$ 만으로 $x^2-4x-12=0$ → $x=6$ 또는 $x=-2$. $x=6$ 은 $b^2<0$ 으로 기각, $x=-2$ 에서 $b^2=5$, $a^2=12$.
    네 식을 한 해가 공유한다는 재해석(d2)과 실수 조건 기각(d2). M_total 9 · 통찰 2 → STEP 2 출발점 ★3 유지(각 단계는 표준 도구).
  tier: star_3
  mechanism_primary: "$y=3-2x$ → $x^2-y^2=-45$ 로 $x$ 두 값 → $b^2=3-x\\ge 0$ 으로 $x=-2$ 채택 → $a^2=12$, $b^2=5$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/185-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$2x+y=3$ 의 계수와 $x^2-y^2$ 의 우변. 제약: 두 근 중 하나만 $b^2\\ge 0$ 을 만족하도록 우변을 잡아야 기각 분기가 생기고, $a^2$ 이 양수로 떨어지도록 첫 식의 우변을 맞춘다."
    creative: "(1) $a$, $b$ 를 자연수로 제한하면 기각이 더 강해져 ★4 (2) '공통해를 갖지 않을 조건' 으로 뒤집기(★4 · I-BW) (3) 두 번째 연립을 대칭식으로 바꿔 합·곱 환원을 끼우기(★4)."
```

```yaml
- id: GN-CM1-186-397
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연립방정식 $x+y=2a-1$, $x^2+xy+y^2=3a^2-4a+2$ 가 실근을 가질 때 정수 $a$ 의 최댓값 구하기.
  category: "대칭식 → $xy$ 를 $a$ 로 정리 → 합·곱을 근으로 하는 이차방정식 → $D\\ge 0$ → 정수 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'$x$, $y$ 가 실수' 를 '합과 곱을 계수로 하는 이차방정식의 $D\\ge 0$' 으로 옮김 — 매개변수 $a$ 가 합·곱 양쪽에 들어 있어 먼저 $xy=a^2-1$ 로 정리해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭식 연립의 실근 조건(판별식 · 정수 최댓값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^2+xy+y^2=(x+y)^2-xy$ 로 $xy=a^2-1$ 을 뽑고, $t^2-(2a-1)t+(a^2-1)=0$ 의 $D=-4a+5\ge 0$ → $a\le \dfrac{5}{4}$.
    181-383 과 같은 골조이나 매개변수 정리가 한 겹 더 두껍다. 통찰 1(d2) · M_total 8 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "$(x+y)^2-xy$ → $xy=a^2-1$ → $t$ 이차방정식 $D\\ge 0$ → $a\\le 5/4$ → 정수 최댓값 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/186-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 $2a-1$ 과 우변 $3a^2-4a+2$ 의 계수. 제약: 판별식에서 $a^2$ 항이 소거돼 일차부등식이 되도록 설계해야 정수 최댓값이 하나로 떨어진다. 남기면 이차부등식이 되어 범위가 구간."
    creative: "(1) $x^2+xy+y^2$ 대신 $x^3+y^3$ 이나 $x^2+y^2$ 로 바꾸기(★3 유지 · 정리 한 겹) (2) $x$, $y$ 가 자연수인 조건으로 바꾸면 약수 분기가 붙어 ★4 (3) 판별식이 이차부등식이 되게 해 정수 $a$ 의 개수를 묻기(★4)."
```

```yaml
- id: GN-CM1-186-398
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    한 변이 $a$, $b$ 인 두 정사각형 $\mathrm{ABCD}$, $\mathrm{EFGH}$ 를 네 점 $\mathrm{A}$, $\mathrm{E}$, $\mathrm{B}$, $\mathrm{F}$ 가 한 직선 위에 오고 $\overline{\mathrm{EB}}=1$, $\overline{\mathrm{AF}}=5$ 가 되게 겹쳤을 때, 직사각형 $\mathrm{EBCI}$ 의 넓이가 정사각형 $\mathrm{EFGH}$ 넓이의 $\dfrac{1}{4}$ 이 되는 $b$ 의 값. 5지선다($1<a<b<5$).
  category: "겹친 길이 관계 → $a+b=6$ → 넓이 조건 → $b$ 이차방정식 → 범위로 근 선택"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 겹침을 $\\overline{\\mathrm{AE}}=a-1$ 로 읽어 $\\overline{\\mathrm{AF}}=(a-1)+b=5$, 즉 $a+b=6$ 이라는 대수 관계로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형 $\\mathrm{EBCI}$ 의 두 변이 $\\overline{\\mathrm{EB}}=1$ 과 $\\overline{\\mathrm{BC}}=a$ 임을 보고 넓이 조건을 $a=\\dfrac{b^2}{4}$ 로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "연립이차방정식의 활용 — 겹친 두 정사각형의 길이·넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    길이 관계에서 나온 일차식 $a+b=6$ 과 넓이 조건에서 나온 $4a=b^2$ 를 연립해 $b^2+4b-24=0$.
    그림을 대수식으로 옮기는 단계가 두 번(겹침 길이 · 직사각형 두 변)이고 $1<a<b<5$ 로 음의 근을 걷어내야 한다.
    통찰 2(d2 둘) · M_total 9 · 교육청 기출 → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "$\\overline{\\mathrm{AF}}=(a-1)+b=5$ → $a+b=6$ · 넓이 $1\\cdot a=b^2/4$ → $b^2+4b-24=0$ → 범위로 $b=-2+2\\sqrt{7}$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-186-398.png'
  latex: latex-bank/gn-cm1/items/186-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$\\overline{\\mathrm{EB}}$, $\\overline{\\mathrm{AF}}$, 넓이 비율. 제약: 그림의 점 순서 $\\mathrm{A}$-$\\mathrm{E}$-$\\mathrm{B}$-$\\mathrm{F}$ 와 라벨은 고정해야 하며, 결과 이차방정식의 양근이 범위 $1<a<b<5$ 안에 들어가야 한다(넓이 비율을 바꾸면 범위 단서도 함께 조정)."
    creative: "(1) 넓이 비율 대신 겹친 직사각형과 겹치지 않은 부분의 넓이 차를 주기(★4 유지) (2) $a$ 를 묻도록 뒤집기(★4) (3) 두 도형을 정사각형·직각삼각형으로 바꿔 길이 관계를 한 겹 늘리기(★4) (4) 범위 단서를 빼면 근 선택이 사라져 ★3."
```

```yaml
- id: GN-CM1-186-399
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x$ 에 대한 이차방정식 $x^2-2ax+a^2-ab-2a-4b-1=0$ 이 중근을 갖도록 하는 정수 $a$, $b$ 에 대하여 $ab$ 의 최솟값 구하기.
  category: "중근 ⟺ $D=0$ → $a$, $b$ 의 부정방정식 → 약수 조건 분기 → $ab$ 비교"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'중근' 을 판별식 $D/4=ab+2a+4b+1=0$ 으로 옮겨 미지수 2 개짜리 정수 방정식으로 바꿈"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a=-4+\\dfrac{7}{b+2}$ 로 정리해 정수해 조건을 '$b+2$ 가 7 의 약수' 로 옮김(단원 앞 특강의 부정방정식 도구를 끌어옴)"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$b+2\\in\\{\\pm 1,\\pm 7\\}$ 네 갈래의 $ab$ 를 모두 구해야 최솟값 비교가 가능"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "중근 조건 + 정수 조건의 부정방정식(약수 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    판별식 조건이 곧바로 풀리지 않고 $a$, $b$ 의 부정방정식이 되어, 특강의 약수 조건 도구를 스스로 꺼내 와야 한다.
    두 도구(해의 조건 · 정수 부정방정식)의 결합 + 네 갈래 비교. 통찰 3 · M_total 9 → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "$D/4=0$ → $ab+2a+4b+1=0$ → $a=-4+7/(b+2)$ → $b+2\\mid 7$ 네 갈래 → $ab$ 최솟값 $-15$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/186-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "판별식이 $ab+pa+qb+r=0$ 꼴이 되게 원식의 상수항을 설계한다. 제약: 분리 뒤 남는 상수가 소수면 분기 4 개, 합성수면 더 많아진다. 최솟값·최댓값이 유일하게 나오도록 분기별 $ab$ 가 겹치지 않게."
    creative: "(1) $ab$ 대신 $a+b$ 의 최댓값을 묻기(★4 유지) (2) '서로 다른 두 실근' 으로 바꾸면 부등식 + 정수 범위가 되어 다른 골조(★4) (3) 자연수 조건으로 제한해 분기를 줄이기(★3) (4) 중근의 값까지 묻기(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-186-400
  page: 186
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    실수 $x$, $y$ 에 대해 $x\odot y$ 를 $x\ge y$ 이면 $-x$, $x<y$ 이면 $2y$ 로 정의할 때, 연립방정식 $3x-y^2=x\odot y$, $2x+y-1=x\odot y$ 의 해 $x=p$, $y=q$ 에 대하여 $p-q$ 의 값 구하기.
  category: "두 식에서 $x\\odot y$ 소거 → $x=y^2+y-1$ → 정의의 두 경우 분기 → 각 해가 분기 조건을 만족하는지 재검증"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 식의 우변이 같은 $x\\odot y$ 임을 이용해 정의를 쓰기 전에 먼저 소거하고 $x=y^2+y-1$ 이라는 문자 관계를 확보"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "새로 정의된 연산의 $x\\ge y$ · $x<y$ 두 경우가 각각 독립된 연립을 만들어 둘 다 풀어야 함"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 분기에서 나온 네 후보를 그 분기의 조건($x\\ge y$ 또는 $x<y$)에 되돌려 검증해 셋을 기각 — 검증을 빼면 틀린 해가 섞임"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "새로 정의된 연산과 연립방정식(경우 분기 · 조건 재검증)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 식을 빼서 $x=y^2+y-1$ 을 먼저 얻는 것이 지름길이고, 그다음 정의의 두 경우마다 이차방정식이 하나씩 나와 후보가 넷.
    네 후보 중 분기 조건을 실제로 만족하는 것은 하나뿐이라 사후 기각이 풀이의 본질(I-VF). 새 기호의 T-표기 함정과 $x\ge y$ 경계까지.
    통찰 3 · I-VF 보유로 ★5 형식 요건은 충족하나 '새 연산 정의 + 경우 분기' 는 시판에 흔한 조합이라 참신도 0 → ★4 유지. [분류 이슈] ★4/★5.
  tier: star_4
  mechanism_primary: "두 식 빼기 → $x=y^2+y-1$ → $x\\ge y$ · $x<y$ 두 분기 → 후보 4 개 → 분기 조건 재검증 → $(1,-2)$ → $p-q=3$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/186-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연산 정의의 두 값($-x$, $2y$)과 두 연립식의 계수. 제약: 각 분기의 이차방정식이 유리수 근을 갖고, 분기 조건을 통과하는 해가 정확히 하나만 남도록 계수를 맞춰야 한다."
    creative: "(1) 분기 조건을 통과하는 해가 둘이 되게 해 $p-q$ 의 합을 묻기(★4 유지) (2) 연산 정의를 세 구간으로 늘리기(★5 후보) (3) 정의의 경계를 $x>y$ 로 바꿔 경계값 처리를 강제(★4) (4) 새 연산을 없애고 절댓값으로 바꾸면 표준 분기가 되어 ★3."
```

```yaml
- id: GN-CM1-186-401
  page: 186
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    계수가 실수인 삼차방정식 $x^3+ax^2+bx+c=0$ 의 한 근이 $1+\sqrt{3}\,i$ 이고, 이 삼차방정식과 이차방정식 $x^2+ax+2=0$ 이 오직 한 개의 공통인 근을 가질 때 $a-b+c$ 의 값 구하기.
  category: "실계수 → 켤레근 쌍 → 나머지 실근 $r$ 로 계수 표현 → 공통근이 허근이면 두 개가 되므로 실근이어야 함 → $r$ 결정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수가 실수이므로 $1-\\sqrt{3}\\,i$ 도 근임을 써서 $x^2-2x+4$ 를 인수로 확보하고 나머지 근을 실수 $r$ 하나로 줄임"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'오직 한 개의 공통근' 을 '공통근이 허근일 수 없다(허근이면 켤레도 공통이라 두 개)' 로 옮겨 공통근 $=r$ 로 확정"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "복소수의 켤레근 정리 · 삼차식의 인수분해 · 공통근 조건 세 단원 도구를 한 풀이에서 모두 써야 함"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "켤레근 · 삼차방정식과 이차방정식의 공통근"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $x^3+ax^2+bx+c=(x^2-2x+4)(x-r)$ 로 $a$, $b$, $c$ 를 $r$ 로 쓰고, 공통근은 실근 $r$ 이어야 하므로 $r^2+ar+2=0$ 에 넣으면 $r$ 이 한 값으로 결정된다.
    '허근이 공통이면 켤레도 공통' 이라는 배제 추론이 이 문항의 진짜 변별점. 통찰 3(SYM·XU 포함)·M_total 9 → 실력 UP ★4.
    ★5 형식 요건(통찰 3 + SYM/XU)은 충족하나 켤레근+공통근은 시판 표준 조합이라 참신도 0 → ★4 유지. [분류 이슈] ★4/★5.
  tier: star_4
  mechanism_primary: "켤레근 → $(x^2-2x+4)(x-r)$ → $a,b,c$ 를 $r$ 로 → 공통근은 실근 $r$ → $r=1$ → $a-b+c=-13$"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/186-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "허근 $p+q\\,i$ 와 이차방정식의 상수항. 제약: 켤레쌍의 합 $2p$ 와 곱 $p^2+q^2$ 이 정수라야 계수가 정수로 떨어지고, 공통근 조건에서 나오는 $r$ 의 방정식이 일차로 정리되도록 이차방정식의 일차항을 $a$ 로 묶어 둔다."
    creative: "(1) '두 개의 공통근' 으로 바꾸면 켤레쌍이 공통이 되어 완전히 다른 골조(★4) (2) 이차방정식의 계수를 $b$ 로 바꿔 미지수 연결을 다르게(★4) (3) 삼차방정식의 세 근의 조건(모두 실수 등)을 추가하면 범위 검토가 붙어 ★5 후보 (4) 허근을 주지 않고 '한 근이 정수' 로 바꾸면 ★3."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 0 · ★2 9 · ★3 17 · ★4 4 · ★5 0
- 통찰형 24 · 절차형 6 · premium 0
- 절차형 6문은 모두 앞머리 「필수·발전 예제」의 계산 절차 학습 구역(178-e11 · 178-380 · 179-e12 · 179-381 · 180-e13 · 180-382)이다. 181쪽부터는 조건 해석(판별식 · 공통근 · 정수/실수 조건)이 시작되어 전부 통찰형.
- 통찰 라벨 총 41개: I-EQV 21 · I-VF 8 · I-MI 5 · I-RT 4 · I-SC 1 · I-SYM 1 · I-XU 1 · (I-BW/I-PD/I-CON 0). 이 단원의 변별은 **조건의 동치 변환**과 **분기 후 기각**에 집중된다.
- type_hint 상위 5: 「공통인 근」 5(182-e16 · 182-386 · 182-387 · 185-394 · 186-401) · 「정수 조건의 부정방정식(약수)」 4(183-e1 · 183-388 · 183-389 · 186-399) · 「해의 조건(판별식)」 4(181-e14 · 181-383 · 185-393 · 186-397) · 「연립이차방정식의 활용」 4(181-e15 · 181-384 · 181-385 · 186-398) · 「대칭식 연립(합·곱)」 3(180-e13 · 180-382 · 185-392)
- 그 밖: 「일차+이차 대입」 2 · 「두 이차식 인수분해」 3(179-e12 · 179-381 · 185-391) · 「실수 조건 부정방정식(완전제곱합)」 3(184-e2 · 184-390 · 185-395) · 「새 연산 정의」 1
- 대상층: 하위권 0 · 중하위권 6 · 중위권 10 · 중상위권 13 · 상위권 1
- 그림: 1문(`crop:fig-186-398.png`). 나머지 29문은 발문만으로 골조가 서므로 크롭을 열지 않았다.
- answer_source: 본문 풀이 8(필수·특강 예제) · 답지 21 · 답지(쪽 렌더) 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-178-380 | 통찰 0 · M_total 5 로 v3.8 산식상 −1(★1) 후보이나 소문항 2 개·분수 근 처리량을 보아 ★2 로 둠 | ★1 / ★2 |
| GN-CM1-184-390 | 「특강」 구역(출발점 ★2~3)인데 M_total 4 로 구역 안에서 가장 쉬움. 같은 골조의 185-395(STEP 1)보다 두 단 아래 | ★2 / ★3 |
| GN-CM1-186-400 | 통찰 3 + I-VF 보유로 ★5 형식 요건(§2.13) 충족하나 '새 연산 정의 + 경우 분기' 가 시판 표준 조합이라 참신도 0(§2.14) → ★4 유지 | ★4 / ★5 |
| GN-CM1-186-401 | 통찰 3 + I-SYM·I-XU 보유로 ★5 형식 요건 충족하나 '켤레근 + 공통근' 역시 표준 조합이라 참신도 0 → ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「공통인 근」은 변변 빼기로 일차식이 남는 기본형(182-e16)과 퇴화 분기·실근 조건으로 기각이 필요한 형(182-387 · 185-394 · 186-401)을 **분리**해야 한다. 기각 여부가 ★를 1 단 이상 가른다. ② 「정수 조건의 부정방정식」은 곱 꼴 인수분해형($(x-p)(y-q)=n$ · 183-388)과 분수 분리 약수형($y=\dots+\dfrac{k}{x-p}$ · 183-e1 · 183-389 · 186-399)을 나누는 편이 변형 설계에 유리하다. ③ 「해의 조건」은 대입형(181-e14 · 185-393)과 대칭식 합·곱형(181-383 · 186-397)이 판별식을 쓰는 대상이 달라 별개 유형이다.
- **통합해도 될 유형**: ① 「일차+이차 대입」과 「두 이차식 인수분해」는 연립이차방정식 풀이법 하나로 묶고 하위 태그로 구분해도 된다(178-e11 · 179-e12 계열, 전부 ★2 절차형). ② 「실수 조건의 부정방정식」은 교차항 유무만 다를 뿐 골조가 같아 한 유형 + 난이도 파라미터로 충분하다(184-e2 · 184-390 · 185-395).
- **base_star 후보**: 연립이차방정식 풀이법 ★2 · 대칭식 합·곱 환원 ★2 · 해의 조건(판별식) ★3 · 공통근 기본형 ★3 · 공통근 기각형 ★3~4 · 정수 부정방정식 ★3 · 실수 부정방정식 ★2~3 · 활용(도형/자리수) ★3 · 도구 결합형(186-399 · 186-400 · 186-401) ★4.
