---
name: mechanism-데이터-GN-GEO-21
description: 개념원리 기하 21 위치벡터(1/1 · 170~176쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 21 위치벡터
  unit_code: GEO-21
  part: "1/1"
  extract_range: "170~176쪽 · 170-344~176-361"
  total_problems: 22
  unit_total: 22
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 21 위치벡터 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 170~176쪽, 21단원 「위치벡터」 22문항 전수를 다룬다. 구역은 「개념원리 익히기」 4문, 「필수·발전 예제」 12문(필수 예제 3 + 발전 예제 1 + 확인체크 8), 「연습문제 STEP 1」 3문, 「연습문제 STEP 2」 2문, 「연습문제 실력 UP」 1문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그에 있어서 개념원리 익히기는 ★1, 필수 예제·그 확인체크·STEP 1 은 ★2, 발전 예제·그 확인체크·STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰 수로 ±1 조정했다. 이 범위에는 기출 태그가 없다.

내용상 이 단원의 도구는 넷뿐이다. (1) 기준점 O 를 잡아 임의의 벡터를 위치벡터의 차로 바꾸기 — `AB = OB − OA`. (2) 내분점 공식 — 선분 AB 를 m:n 으로 내분하는 점의 위치벡터는 `(n·a + m·b)/(m+n)`. (3) 무게중심 공식 — `g = (a+b+c)/3`, 그리고 그 동치인 `GA+GB+GC=0`. (4) 조건식 `αPA+βPB+γPC = (우변)` 에서 우변까지 전부 P 기점으로 통일해 두 벡터의 실수배 관계로 만든 뒤, 그것을 「내분점」·「공선」·「넓이비」라는 기하 언어로 되돌리기. 22문 중 (1)·(2) 가 9문, (3) 이 8문, (4) 가 4문이고 나머지 1문(176-360)은 `m+n=1, m,n≥0` 이라는 대수 조건을 선분으로 읽는 표현 전환이다. 공간도형(정육면체·정사면체) 위에서 같은 공식을 쓰는 문항이 5문 섞여 있는데, 골조는 평면과 같고 꼭짓점을 세 기저벡터로 읽어내는 한 단계가 추가될 뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다. 이 단원은 변형의 주축이 **내분비와 계수**라서 `variation_notes.numeric` 에 비의 제약(답이 유리수로 정리될 것 · 내분점이 선분 내부에 남을 것 · 계수 합이 0 이 되지 않을 것)을, `creative` 에 평면↔공간 치환·묻는 대상 치환(벡터 자체 ↔ 계수 합 ↔ 넓이비)과 그때 ★ 가 변하는 지점을 적었다. 유형 카탈로그가 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-170-344
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    세 점 A, B, C 의 위치벡터가 $\vec{a}$, $\vec{b}$, $\vec{c}$ 일 때 $\vecAB{AB}+3\vecAB{BC}$ 를 이들로 나타내는 과정의 빈칸 7개 채우기.
  category: "AB = OB − OA 로 치환 → 전개 → 계수 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치벡터로 두 점 사이의 벡터 나타내기(AB = OB − OA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변환 공식을 적용하는 틀이 이미 인쇄돼 있고 학생은 빈칸만 메운다. (b−a)+3(c−b) 전개 한 줄. 개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB=OB−OA, BC=OC−OB 대입 → (b−a)+3(c−b) → −a−2b+3c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vecAB{OA}$, $\vecAB{OC}$, $\vec{b}$, $\vec{a}$, $\vec{c}$, $2$, $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/170-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3 을 다른 정수 계수(2, −1, 4)로 바꿀 수 있고 그때 빈칸의 마지막 두 수만 바뀐다. 제약: 계수가 정수여야 빈칸 형식이 유지되고, AB·BC 두 항만 쓰면 b 의 계수가 1−k 꼴이라 k=1 이면 b 가 사라져 빈칸 하나가 0 이 된다(피할 것)."
    creative: "(1) 빈칸을 없애고 바로 계산시키면 170-345 가 되며 ★1 유지 (2) CA 항을 섞으면 세 항 전개라 ★1~2 (3) 결과를 주고 계수를 역으로 묻는 형태로 바꾸면 I-BW 가 붙어 ★2."
```

```yaml
- id: GN-GEO-170-345
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    세 점 A, B, C 의 위치벡터가 $\vec{a}$, $\vec{b}$, $\vec{c}$ 일 때 ⑴ $\vecAB{AB}-2\vecAB{BC}$ ⑵ $2\vecAB{AB}+\vecAB{BC}-3\vecAB{CA}$ 를 이들로 나타내기.
  category: "세 벡터를 모두 위치벡터의 차로 치환 → 전개 → 동류항 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치벡터로 두 점 사이의 벡터 나타내기(AB = OB − OA)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    170-344 의 빈칸을 없앤 형태. ⑵ 는 세 항이라 부호 실수만 조심하면 되고 도구는 하나뿐이다. 통찰 없음·M_total 5 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "AB=b−a, BC=c−b, CA=a−c 대입 → 전개 → a, b, c 계수 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\vec{a}+3\vec{b}-2\vec{c}$ ⑵ $-5\vec{a}+\vec{b}+4\vec{c}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/170-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 정수 계수(1, −2 / 2, 1, −3)를 자유롭게 바꿀 수 있다. 제약: 세 계수를 모두 같게 하면 AB+BC+CA=0 이라 답이 영벡터가 되어 문제가 무너지므로 계수가 전부 같아지지 않게 한다."
    creative: "(1) 네 점 A~D 로 늘려 $\\vec{d}$ 까지 쓰게 하면 계산량만 늘어 ★1 유지 (2) 결과가 영벡터가 되는 계수를 찾게 하면 I-BW d1 · ★2 (3) 기준점을 O 가 아닌 A 로 잡아 다시 표현하게 하면 기준점 이동 개념이 붙어 ★2."
```

```yaml
- id: GN-GEO-170-346
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 점 A, B 의 위치벡터가 $\vec{a}$, $\vec{b}$ 일 때 ⑴~⑶ 선분 AB 의 3:2 내분점 P, 2:3 내분점 Q, 그리고 선분 PQ 의 중점 M 의 위치벡터 구하기.
  category: "내분점 공식 2회 → 중점 공식 1회"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점·중점의 위치벡터(공식 적용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m:n 내분점 = (n·a+m·b)/(m+n) 을 비만 바꿔 두 번 적용하고 ⑶ 은 ⑴⑵ 를 더해 2 로 나눈다. 계수가 3/5·2/5 로 서로 뒤집힌 쌍이라 ⑶ 에서 a, b 계수가 1/2 로 맞아떨어지는 것이 한 번의 확인 포인트. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "p=(2a+3b)/5, q=(3a+2b)/5 → m=(p+q)/2=(a+b)/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\vec{p}=\dfrac{2}{5}\vec{a}+\dfrac{3}{5}\vec{b}$ ⑵ $\vec{q}=\dfrac{3}{5}\vec{a}+\dfrac{2}{5}\vec{b}$ ⑶ $\vec{m}=\dfrac{\vec{a}+\vec{b}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/170-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3:2 와 2:3 을 다른 켤레 쌍(4:1 과 1:4, 5:3 과 3:5)으로 바꿔도 ⑶ 의 답은 항상 중점 (a+b)/2 로 고정된다. 제약: 두 비를 서로 뒤집힌 쌍으로 두지 않으면 ⑶ 이 깔끔한 중점이 아니게 되므로 의도한 대칭을 유지하려면 뒤집힌 쌍을 쓴다."
    creative: "(1) ⑶ 을 먼저 보여 주고 두 내분비를 찾게 하면 I-BW d2 · ★3 (2) 한쪽을 외분점으로 바꾸면 부호 함정(T-부호)이 붙어 ★2 (3) 두 비를 m:n, n:m 으로 문자화하면 Mₐ 가 올라 ★2 · I-SYM d1 을 노릴 수 있다."
```

```yaml
- id: GN-GEO-170-347
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    삼각형 ABC 의 무게중심 G, 세 꼭짓점의 위치벡터가 $\vec{a}$, $\vec{b}$, $\vec{c}$ 일 때 ⑴ $\vec{g}$ ⑵ $\vecAB{AG}$ 를 구하기.
  category: "무게중심 공식 → AG = g − a"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 위치벡터(공식 적용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 공식 그대로, ⑵ 는 여기에 AB=OB−OA 형 차 한 번을 더한다. 두 공식이 이 단원의 전부라 결합 부담이 없다. 통찰 없음·M_total 5 → 개념원리 익히기 ★1.
  tier: star_1
  mechanism_primary: "g=(a+b+c)/3 → AG=g−a=(−2a+b+c)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\vec{g}=\dfrac{\vec{a}+\vec{b}+\vec{c}}{3}$ ⑵ $-\dfrac{2}{3}\vec{a}+\dfrac{1}{3}\vec{b}+\dfrac{1}{3}\vec{c}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/170-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 공식형. 변형 축은 묻는 벡터(AG·BG·GA·GB) 선택뿐이며 계수는 항상 −2/3, 1/3, 1/3 의 자리바꿈이다."
    creative: "(1) 기준점을 B 로 옮겨 BA, BC 로 나타내게 하면 176-358 이 되며 ★2 (2) GA+GB+GC 를 묻게 하면 172-e2 의 증명형 ★2 (3) 사면체의 무게중심(네 꼭짓점 평균)으로 올리면 공간 확장 ★2~3."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-171-e1
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각형 OAB 에서 OA 의 중점 P, AB 를 1:2 로 내분하는 점 Q. $\vecAB{OA}=\vec{a}$, $\vecAB{OB}=\vec{b}$ 일 때 $\vecAB{PQ}=m\vec{a}+n\vec{b}$ 의 $m+n$.
  category: "O 기준 위치벡터로 P, Q 표현 → PQ = OQ − OP → 계수 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O 를 기준점으로 잡으면 OP=a/2, OQ=(2a+b)/3 이 공식 그대로 나오고 PQ 는 그 차. 도구는 중점·내분점 공식 하나씩이고 묻는 것이 계수 합이라 최종 정리가 한 줄 더 붙는다. 필수 예제 ★2 출발·통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "OP=a/2, OQ=(2a+b)/3 → PQ=OQ−OP=(1/6)a+(1/3)b → m+n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: crop:fig-171-e1.png
  latex: latex-bank/gn-geo/items/171-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA 의 분할비(중점 → 1:2, 2:1)와 AB 의 내분비 1:2 를 각각 바꿀 수 있다. 제약: 두 비의 분모가 서로 소이면 m+n 이 지저분해지므로 분모를 2·3·6 계열로 맞춰 답을 간단한 유리수로 유지한다. 그림 라벨(O, A, B, P, Q)은 고정."
    creative: "(1) PQ 대신 QP 나 PB 를 묻기(★2 유지) (2) Q 를 AB 의 외분점으로 바꾸면 T-부호 함정 추가 ★2~3 (3) m+n 대신 mn 이나 m−n 을 묻기(★2 유지) (4) 삼각형을 사면체로 올려 세 번째 기저를 넣으면 171-349 계열 ★2."
```

```yaml
- id: GN-GEO-171-348
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 OAB 에서 OB 의 중점 M, 선분 AM 을 2:3 으로 내분하는 점 N. $\vecAB{ON}=x\vecAB{OA}+y\vecAB{OB}$ 의 $x+y$.
  category: "중점 → 그 점을 끝점으로 하는 내분점(2단 연쇄) → 계수 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    171-e1 의 짝 문항이되 내분점의 끝점 자체가 앞에서 구한 중점 M 이라 공식을 두 번 겹쳐 쓴다. ON=(3·OA+2·OM)/5 에 OM=b/2 를 넣는 대입 순서만 지키면 끝. 확인체크는 붙어 있는 필수 예제와 같은 층이므로 ★2 출발·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "OM=b/2 → ON=(3a+2·OM)/5=(3/5)a+(1/5)b → x+y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: crop:fig-171-348.png
  latex: latex-bank/gn-geo/items/171-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OB 의 분할비와 AM 의 내분비 2:3 을 바꿀 수 있다. 제약: 내분비 m:n 에서 계수가 (n·OA+m·OM)/(m+n) 이므로 m 이 OB 분모와 약분되게 두면 x+y 가 간단해진다. N 이 선분 AM 내부에 남도록 두 수 모두 양수."
    creative: "(1) M 을 OB 의 1:2 내분점으로 바꾸기(★2 유지) (2) 직선 AM 과 OB 의 교점 같은 추가 교점을 묻게 하면 일차결합 유일성 논증이 필요해 ★3 (3) x+y 값을 주고 내분비를 역으로 찾게 하면 I-BW d2 · ★3."
```

```yaml
- id: GN-GEO-171-349
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체에서 $\vecAB{AB}=\vec{a}$, $\vecAB{AD}=\vec{b}$, $\vecAB{AE}=\vec{c}$ 일 때 선분 HF 를 2:1 로 내분하는 점 P 에 대하여 $\vecAB{AP}$ 를 세 벡터로 나타내기.
  category: "정육면체 꼭짓점을 세 기저벡터로 읽기 → 내분점 공식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육면체의 윗면 꼭짓점 H, F 를 A 기준 위치벡터 b+c, a+c 로 옮겨야 내분점 공식을 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터(공간도형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공간 문항이지만 계산 골조는 평면과 같다. 어려운 곳은 HF 가 윗면의 대각선이라는 것을 보고 AH=b+c, AF=a+c 로 옮기는 첫 단계뿐이고, 그 뒤 AP=(AH+2AF)/3 은 공식이다. 표현 전환 통찰 1(RT d1)·M_total 6 → 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "AH=b+c, AF=a+c → AP=(1·AH+2·AF)/3=(2/3)a+(1/3)b+c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}\vec{a}+\dfrac{1}{3}\vec{b}+\vec{c}$'
  answer_source: "답지"
  figure: crop:fig-171-349.png
  latex: latex-bank/gn-geo/items/171-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비 2:1 을 1:3, 3:2 등으로 바꿀 수 있다. 제약: c 의 계수는 HF 가 윗면 위에 있어 항상 1 로 고정되므로 답의 모양이 유지되고, a·b 계수의 합만 1 이 된다. 정육면체 라벨 ABCD-EFGH(A 아래 E)는 고정."
    creative: "(1) 대상 선분을 EG, BH(공간대각선), CF 로 바꾸면 c 계수도 변해 ★2 유지~상승 (2) 직육면체로 바꾸고 모서리 길이를 주면 크기 계산이 붙어 ★3 (3) AP 와 공간대각선 AG 가 이루는 관계(평행·교점)를 묻게 하면 공선 판정이 붙어 ★3."
```

```yaml
- id: GN-GEO-172-e2
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각형 ABC 의 무게중심 G 에 대하여 $\vecAB{GA}+\vecAB{GB}+\vecAB{GC}=\vec{0}$ 임을 보이기.
  category: "임의의 기준점 도입 → 위치벡터의 차로 환산 → 무게중심 공식 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하적 서술(무게중심에서 세 꼭짓점으로 간 벡터의 합)을 기준점 O 를 잡아 위치벡터의 대수식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무게중심의 벡터 항등식 GA+GB+GC=0 증명"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증명형이지만 길은 하나다. 기준점 O 를 잡고 GA=a−g 로 옮기면 합이 a+b+c−3g 이고 여기에 g=(a+b+c)/3 을 넣으면 끝난다. 학생에게 진짜 새 단계는 「보이시오」를 위치벡터 언어로 번역하는 첫 줄(RT d1)뿐이라 필수 예제 ★2 유지. 이 항등식은 뒤 172-350, 176-361 에서 도구로 재사용된다.
  tier: star_2
  mechanism_primary: "기준점 O → GA+GB+GC=(a−g)+(b−g)+(c−g)=a+b+c−3g → g=(a+b+c)/3 대입 → 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 (세 점~$\pt{A}$, $\pt{B}$, $\pt{C}$의 위치벡터를 각각 $\vec{a}$, $\vec{b}$, $\vec{c}$, 무게중심~$\pt{G}$의 위치벡터를 $\vec{g}=\dfrac{\vec{a}+\vec{b}+\vec{c}}{3}$라 하면 $\vecAB{GA}+\vecAB{GB}+\vecAB{GC}=(\vec{a}-\vec{g})+(\vec{b}-\vec{g})+(\vec{c}-\vec{g})=\vec{a}+\vec{b}+\vec{c}-3\vec{g}=\vec{0}$)'
  answer_source: "본문 풀이"
  figure: crop:fig-172-e2.png
  latex: latex-bank/gn-geo/items/172-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 증명형. 변형 축은 꼭짓점 개수(삼각형 → 사면체: PA+PB+PC+PD=0 이 되는 점이 사면체의 무게중심)이며 계수는 항상 1 이다."
    creative: "(1) 역방향으로 「PA+PB+PC=0 인 점 P 는 무게중심뿐임」을 보이게 하면 I-BW d2 · ★3 (2) 계수를 1,1,1 이 아닌 α,β,γ 로 일반화하면 174-e4 계열의 내분점 문제로 이어져 ★3 (3) 사면체로 올리면 공간 확장 ★3."
```

```yaml
- id: GN-GEO-172-350
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 의 무게중심 G 에 대하여 $\vecAB{GA}=\vec{a}$, $\vecAB{GB}=\vec{b}$ 일 때 $\vecAB{BC}=x\vec{a}+y\vec{b}$ 의 $x+y$.
  category: "GA+GB+GC=0 으로 GC 복원 → BC = GC − GB"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어지지 않은 GC 를 앞 예제의 항등식 GA+GB+GC=0 을 역으로 써서 −a−b 로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무게중심을 기준점으로 잡은 벡터 표현(GA+GB+GC=0 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기준점이 O 가 아니라 G 라는 점이 유일한 장벽이다. G 를 기준점으로 보면 172-e2 의 항등식이 그대로 「세 위치벡터의 합이 0」이 되어 GC=−a−b 가 나오고, 그 뒤 BC=GC−GB 는 이 단원의 기본 변환. 통찰 1(EQV d1)·M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "GC=−a−b (GA+GB+GC=0) → BC=GC−GB=−a−2b → x+y=−3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/172-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없고 묻는 벡터(BC·CA·AC·AB)만 고른다. 제약: 어느 변을 고르든 계수는 정수여서 x+y 는 항상 정수(−3, 0, 3 계열)가 되고, 이 정수값이 답이 되도록 묻는 변을 정한다."
    creative: "(1) GC 자체를 묻기(★1~2) (2) 중점·중선을 섞어 GA 와 AM 의 관계(2:1)를 함께 묻게 하면 ★3 (3) 기준점을 무게중심이 아닌 외심·수심으로 바꾸면 단원을 벗어나므로 변형 대상에서 제외."
```

```yaml
- id: GN-GEO-172-351
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체에서 $\vecAB{AB}=\vec{p}$, $\vecAB{AD}=\vec{q}$, $\vecAB{AE}=\vec{r}$ 일 때 삼각형 BDE 의 무게중심 T 에 대하여 세 점 A, T, G 가 한 직선 위에 있음을 보이기.
  category: "무게중심·공간대각선을 기저로 표현 → 두 벡터가 실수배임을 보이기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육면체에서 A 와 마주 보는 꼭짓점 G 를 AG=p+q+r 로, 삼각형 BDE 의 세 꼭짓점을 p, q, r 로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「한 직선 위에 있다」를 「AG 가 AT 의 실수배이다」라는 벡터 조건으로 바꿔 씀"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있음을 벡터의 실수배로 보이기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각형 BDE 의 세 꼭짓점이 마침 A 에서 나온 세 모서리의 끝이라 AT=(p+q+r)/3 이 한 줄에 나오고, 공간대각선 AG=p+q+r 와 비교하면 AG=3AT. 통찰 두 개가 모두 이 단원의 표준 도구이고 depth 1 이라 +1 은 하지 않고 확인체크 ★2 유지. 덤으로 A, T, G 의 비(1:2)까지 읽히는 구조.
  tier: star_2
  mechanism_primary: "AT=(p+q+r)/3, AG=p+q+r → AG=3AT → A, T, G 공선"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 ($\vecAB{AT}=\dfrac{\vecAB{AB}+\vecAB{AD}+\vecAB{AE}}{3}=\dfrac{1}{3}(\vec{p}+\vec{q}+\vec{r})$, $\vecAB{AG}=\vecAB{AB}+\vecAB{AD}+\vecAB{AE}=\vec{p}+\vec{q}+\vec{r}$이므로 $\vecAB{AG}=3\vecAB{AT}$. 따라서 세 점~$\pt{A}$, $\pt{T}$, $\pt{G}$는 한 직선 위에 있다.)'
  answer_source: "계산(답지 「풀이 76쪽」)"
  figure: crop:fig-172-351.png
  latex: latex-bank/gn-geo/items/172-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 변형 축은 대각선 AG 위의 어느 점을 T 로 잡느냐이며 삼각형 CFH 의 무게중심을 쓰면 AT'=(2/3)(p+q+r) 로 대칭 위치가 나온다. 제약: 세 꼭짓점이 A 에서 나온 모서리 끝(또는 G 에서 나온 모서리 끝)일 때만 무게중심이 대각선 위에 놓인다."
    creative: "(1) 공선 증명 대신 AT:TG 비를 묻기(★2 유지) (2) 삼각형 BDE 와 CFH 두 무게중심이 AG 를 삼등분함을 보이게 하면 통찰 3개 · ★3 (3) 정육면체를 평행육면체로 바꾸면 기저가 직교하지 않아도 같은 결론임을 묻는 ★3 문항이 된다."
```

```yaml
- id: GN-GEO-173-e3
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평행사변형 ABCD 에서 $\vecAB{AB}=\vec{a}$, $\vecAB{AD}=\vec{b}$ 일 때 삼각형 ABC 의 무게중심 $\pt{G}_1$, 삼각형 ACD 의 무게중심 $\pt{G}_2$ 에 대하여 $\vecAB{G_2G_1}$ 을 나타내기.
  category: "AC = a + b 로 치환 → 무게중심 공식 2회 → 차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형을 나눈 두 삼각형의 무게중심을 잇는 벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 를 기준점으로 삼으면 평행사변형에서 AC=a+b 가 바로 나오고, 두 무게중심은 세 꼭짓점 위치벡터의 평균이라 AG1=(2a+b)/3, AG2=(a+2b)/3. 차를 구하면 (a−b)/3 이다. 도구는 무게중심 공식 하나이고 새로운 착안은 없지만 분수 계산이 두 번이라 M_total 7. 필수 예제 ★2 유지. 방향(G2 → G1)을 뒤집는 부호 실수가 유일한 함정.
  tier: star_2
  mechanism_primary: "AC=a+b → AG1=(2a+b)/3, AG2=(a+2b)/3 → G2G1=AG1−AG2=(a−b)/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}\vec{a}-\dfrac{1}{3}\vec{b}$'
  answer_source: "본문 풀이"
  figure: crop:fig-173-e3.png
  latex: latex-bank/gn-geo/items/173-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없고 계수는 항상 ±1/3 이다. 변형 축은 어느 대각선으로 평행사변형을 나누느냐(AC 또는 BD)와 방향(G1G2 vs G2G1)이며, BD 로 나누면 두 무게중심을 잇는 벡터가 (a+b)/3 계열로 바뀐다."
    creative: "(1) G1G2 의 길이와 BD 의 길이 비를 묻게 하면 평행 판정이 붙어 ★3 (2) 평행사변형을 사다리꼴로 바꾸면 AC 가 a+kb 꼴이 되어 Mₐ 상승 ★3 (3) 두 무게중심과 대각선 교점 세 점의 공선을 묻게 하면 172-351 골조와 합쳐져 ★3."
```

```yaml
- id: GN-GEO-173-352
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 에서 P, Q, R 는 각각 AB, BC, CA 의 중점이고 G 는 세 중선 AQ, BR, CP 의 교점. $\vecAB{BA}=\vec{a}$, $\vecAB{BC}=\vec{b}$ 일 때 $\vecAB{GP}$ 를 나타내기.
  category: "B 를 기준점으로 → 중선의 교점 = 무게중심 → GP = BP − BG"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 위치벡터(중선·중점 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「세 중선의 교점 = 무게중심」은 교과 지식이라 통찰로 세지 않는다. B 를 기준점으로 잡으면 BP=a/2(중점), BG=(a+b)/3(무게중심)이 각각 공식 한 줄이고 차를 구하면 끝. 중점·무게중심 두 공식을 한 기준점에서 겹쳐 쓰는 계산 부담으로 M_total 7, 통찰 없음 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "B 기준 → BP=a/2, BG=(a+b)/3 → GP=BP−BG=(1/6)a−(1/3)b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}\vec{a}-\dfrac{1}{3}\vec{b}$'
  answer_source: "답지"
  figure: crop:fig-173-352.png
  latex: latex-bank/gn-geo/items/173-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없고 계수는 중점·무게중심 공식이 낳는 1/6, 1/3 로 고정된다. 변형 축은 묻는 벡터(GP·GQ·GR·PQ)와 기준점(B 대신 A 나 C)이며, 기준점을 바꾸면 계수의 자리만 바뀐다."
    creative: "(1) GQ:GA=1:2 를 함께 묻게 하면 중선의 성질이 추가돼 ★2 유지 (2) P, Q, R 가 중점이 아니라 같은 비 k:(1−k) 로 나누는 점이면 G 가 무게중심이 아니게 되어 일차결합 유일성 논증이 필요해 ★4 (3) 중점삼각형 PQR 의 무게중심이 G 와 같음을 보이게 하면 ★3."
```

```yaml
- id: GN-GEO-173-353
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정사면체 OABC 에서 삼각형 OAB 의 무게중심 G, $\vecAB{OA}=\vec{a}$, $\vecAB{OB}=\vec{b}$, $\vecAB{OC}=\vec{c}$ 일 때 $\vecAB{CG}=p\vec{a}+q\vec{b}+r\vec{c}$ 의 $p$, $q$, $r$.
  category: "O 기준 무게중심(O 의 위치벡터는 0) → CG = OG − OC"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 위치벡터(공간도형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기준점 O 가 마침 무게중심을 이루는 삼각형의 꼭짓점 중 하나라 OG=(0+a+b)/3 에서 분모가 3 인데 항은 둘뿐이다. 이 「O 의 위치벡터는 0」을 놓쳐 (a+b+c)/3 으로 쓰는 것이 유일한 함정(T-표기). 그 뒤 CG=OG−OC 는 기본 변환. 통찰 없음·M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "OG=(a+b)/3 (O 는 영벡터) → CG=OG−c=(1/3)a+(1/3)b−c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$p=\dfrac{1}{3}$, $q=\dfrac{1}{3}$, $r=-1$'
  answer_source: "답지"
  figure: crop:fig-173-353.png
  latex: latex-bank/gn-geo/items/173-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 변형 축은 무게중심을 잡는 면(OAB·ABC·OBC)과 출발 꼭짓점이며, 면이 기준점 O 를 포함하지 않는 ABC 를 쓰면 세 계수가 모두 1/3 이 되어 함정이 사라진다. 제약: 정사면체라는 조건은 이 문항에서 계수에 전혀 쓰이지 않으므로 임의의 사면체로 바꿔도 답이 같다."
    creative: "(1) 면 ABC 의 무게중심으로 바꿔 함정을 없애면 ★1~2 (2) CG 의 크기를 묻게 하면 정사면체의 모서리 길이와 내적이 필요해 다음 단원 결합 ★3 (3) 사면체의 무게중심(네 꼭짓점 평균)과 CG 의 교점을 묻게 하면 공선·비 판정이 붙어 ★3."
```

```yaml
- id: GN-GEO-174-e4
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    평면 위의 점 P 와 삼각형 ABC 가 $2\vecAB{PA}+5\vecAB{PB}+\vecAB{PC}=\vecAB{BC}$ 를 만족시킬 때 ⑴ 점 P 의 위치 ⑵ 삼각형 PAC 와 PBC 의 넓이의 비.
  category: "우변까지 P 기점으로 통일 → PA = kPB → 내분점 확정 → 넓이비는 밑변비"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변 BC 를 PC−PB 로 바꿔 등식의 모든 항을 P 를 시점으로 하는 벡터로 통일해야 PC 가 소거됨"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PA=−3PB 라는 벡터 등식을 「P 가 선분 AB 를 3:1 로 내분한다」는 위치 정보로 되돌림"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 삼각형이 높이(C 에서 직선 AB 까지)를 공유하므로 넓이비를 밑변 AP:PB 로 환원"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "αPA+βPB+γPC=0 꼴 조건에서 점 P 의 위치와 넓이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원에서 가장 골조가 긴 유형이다. 좌변만 보면 세 벡터의 일차결합이지만 우변 BC 도 P 기점으로 바꿔야 PC 가 사라지고 2PA+6PB=0 이라는 두 항짜리 식이 남는다. 여기서 비로소 P 가 AB 위의 내분점으로 확정되고, ⑵ 는 밑변비 환원이라 추가 계산이 없다. 통찰 3개(EQV d2 + RT d1 두 번)·M_total 7 → 발전 예제 ★3 유지. ★4 로 올리지 않은 것은 세 통찰이 모두 답지 표준 경로 안에 있고 기각·전략 분기가 없기 때문.
  tier: star_3
  mechanism_primary: "BC=PC−PB 대입 → 2PA+6PB=0 → PA=−3PB → P 는 AB 의 3:1 내분점 → 넓이비 = AP:PB = 3:1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 점~$\pt{P}$는 선분~$\pt{AB}$를 $3:1$로 내분하는 점이다. ⑵ $3:1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/174-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (2,5,1) 과 우변 BC 를 바꿀 수 있다. 제약: 우변을 옮긴 뒤 세 계수 중 하나가 정확히 0 이 되어야 P 가 한 변 위의 내분점으로 확정된다(여기서는 PC 계수 1−1=0). 남는 두 계수는 같은 부호·정수여야 내분점이 선분 내부에 생기고 넓이비가 정수비가 된다."
    creative: "(1) 우변을 CA 나 AB 로 바꾸면 소거되는 항이 달라져 P 가 놓이는 변이 BC·CA 로 옮겨 간다(★3 유지) (2) 우변을 영벡터로 두면 P 가 내분점이 아니라 삼각형 내부의 한 점이 되어 176-361 계열 ★4 (3) 넓이비 대신 넓이 값을 주고 계수를 역으로 찾게 하면 I-BW 가 더해져 ★4 (4) 점 P 의 자취(계수를 매개변수화)를 묻게 하면 ★4."
```

```yaml
- id: GN-GEO-174-354
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 와 점 P 가 $2\vecAB{PA}+3\vecAB{PB}+3\vecAB{PC}=2\vecAB{BA}$ 를 만족시킬 때 P 는 선분 BC 를 $m:n$ 으로 내분한다. $\dfrac{m}{n}$ 의 값.
  category: "우변을 P 기점으로 통일 → PA 소거 → PB = kPC → 내분비"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변 2BA 를 2PA−2PB 로 바꿔 모든 항을 P 기점으로 통일해야 PA 가 소거됨"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5PB+3PC=0 을 「P 가 BC 를 3:5 로 내분」으로 되돌리며 계수와 비가 서로 바뀌어 붙는 것을 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "αPA+βPB+γPC=0 꼴 조건에서 점 P 의 위치와 넓이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    174-e4 의 ⑴ 만 떼어낸 형태로 소거되는 항만 PC 에서 PA 로 바뀌었다. 핵심은 5PB+3PC=0 에서 내분비가 계수와 반대로 3:5 라는 점이고, 여기서 m 과 n 을 뒤집어 5/3 으로 답하는 것이 전형적 오답(T-표기). 통찰 2개·M_total 7 → 발전 예제의 확인체크이므로 ★3 출발 유지.
    [분류 이슈] 골조가 e4 의 절반이고 넓이비 단계가 없어 실제 체감은 ★2 에 가깝다. 벤더 배치(발전 예제 짝)를 따라 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "2BA=2PA−2PB 대입 → 5PB+3PC=0 → P 는 BC 의 3:5 내분점 → m/n=3/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/174-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (2,3,3) 과 우변 계수 2 를 바꿀 수 있다. 제약: 우변을 옮긴 뒤 PA 계수가 0 이 되도록 좌변 PA 계수와 우변 PA 계수를 같게 맞춘다. 남는 두 계수는 양의 정수여야 P 가 선분 BC 내부에 놓이고 m/n 이 기약 유리수가 된다."
    creative: "(1) m:n 대신 m+n 이나 P 의 위치벡터를 묻기(★3 유지) (2) 우변을 2BA 대신 kBA 로 두고 P 가 중점이 되는 k 를 찾게 하면 I-BW d2 · ★4 (3) 174-355 처럼 넓이 조건을 붙이면 ★3."
```

```yaml
- id: GN-GEO-174-355
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 와 점 P 가 $4\vecAB{PA}+\vecAB{PB}+2\vecAB{PC}=\vecAB{AB}$ 를 만족시키고 삼각형 ABC 의 넓이가 $42$ 일 때 삼각형 PBC 의 넓이.
  category: "우변을 P 기점으로 통일 → PB 소거 → P 는 AC 의 내분점 → 넓이비 = PC:AC"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변 AB 를 PB−PA 로 바꿔 모든 항을 P 기점으로 통일해야 PB 가 소거됨"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5PA+2PC=0 을 「P 가 AC 를 2:5 로 내분」이라는 위치 정보로 되돌림"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 PBC 와 ABC 가 꼭짓점 B 와 직선 AC 를 공유하므로 넓이비를 밑변비 PC:AC 로 환원"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "αPA+βPB+γPC=0 꼴 조건에서 점 P 의 위치와 넓이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    174-e4 의 ⑴⑵ 를 한 문항에 합친 형태. P 가 AC 위에 있으므로 넓이비의 밑변을 AB 가 아니라 AC 로 잡아야 하고, 구하는 것이 PBC 이므로 비가 AP:AC 가 아니라 PC:AC=5:7 이라는 점이 함정이다. 42 가 7 의 배수인 것도 이 비를 노린 설계. 통찰 3개·M_total 7 → 발전 예제의 확인체크 ★3.
  tier: star_3
  mechanism_primary: "AB=PB−PA 대입 → 5PA+2PC=0 → P 는 AC 의 2:5 내분점 → △PBC=(5/7)·42=30"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/174-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (4,1,2) 와 넓이 42 를 바꿀 수 있다. 제약: 우변을 옮긴 뒤 소거되는 항의 계수가 정확히 0 이어야 하고, 남는 두 계수의 합이 넓이를 나누어떨어지게 해야 답이 정수가 된다(여기서 5+2=7 | 42). 넓이는 남는 계수 합의 배수로 고른다."
    creative: "(1) 묻는 삼각형을 PAB 로 바꾸면 비가 AP:AC=2:7 로 뒤집혀 같은 ★3 (2) 세 작은 삼각형 PAB:PBC:PCA 의 비를 모두 묻게 하면 176-361 골조로 확장 ★4 (3) 넓이를 주고 계수 하나를 미지수로 두면 I-BW d2 · ★4 (4) P 가 삼각형 내부인지 변 위인지 판정까지 요구하면 I-VF 가 붙어 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-176-356
  page: 176
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\seg{AB}=4$, $\seg{AC}=3$ 인 삼각형 ABC 에서 각 A 의 이등분선이 변 BC 와 만나는 점 D 에 대하여 $\vecAB{AD}=m\vecAB{AB}+n\vecAB{AC}$ 의 $m-n$.
  category: "각의 이등분선 정리로 BD:DC 확보 → 내분점 공식 → 계수 차"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "벡터만으로는 D 의 위치를 알 수 없고 평면기하의 각의 이등분선 정리(BD:DC=AB:AC=4:3)를 끌어와야 내분비가 확정됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선의 내분비를 이용한 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벡터 계산 자체는 AD=(3AB+4AC)/7 한 줄이고, 막히는 지점은 오직 「이등분선 → BD:DC=4:3」을 떠올리느냐다. 길이 4, 3 을 내분비로 옮길 때 계수가 (3,4) 로 뒤집혀 붙는 것이 함정이라 m−n 이 음수가 된다. 통찰 1개지만 depth 2 이고 단원 밖 도구라 XU 로 기록. STEP 1 ★2 출발 유지.
    [분류 이슈] 단원 밖 정리를 알아야만 시작되는 진입 저항이 있어 체감은 ★3 에 가깝다. 벤더 STEP 1 신호를 따라 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "각의 이등분선 정리 → BD:DC=4:3 → AD=(3AB+4AC)/7 → m−n=−1/7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/176-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 길이 4, 3 을 바꿀 수 있고 계수는 항상 (AC, AB)/(AB+AC) 로 뒤집혀 들어간다. 제약: 두 길이가 서로 다르고 합이 답의 분모가 되므로 m−n 을 간단히 두려면 차가 1~2 인 정수 쌍(5,3 / 6,4)을 고른다. 두 길이가 같으면 D 가 중점이 되어 m−n=0 으로 문제가 무의미해진다."
    creative: "(1) 외각의 이등분선으로 바꾸면 외분점이 되어 T-부호 함정 추가 ★3 (2) m−n 대신 AD 의 길이를 묻게 하면 내적 단원과 결합 ★4 (3) 세 각의 이등분선의 교점(내심)의 위치벡터를 묻게 하면 세 변 길이 가중평균 골조로 확장 ★4."
```

```yaml
- id: GN-GEO-176-357
  page: 176
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정사면체에서 두 모서리 OA, BC 의 중점을 각각 M, N 이라 할 때 $\vecAB{OA}=\vec{a}$, $\vecAB{OB}=\vec{b}$, $\vecAB{OC}=\vec{c}$ 에 대하여 $\vecAB{MN}=p\vec{a}+q\vec{b}+r\vec{c}$ 의 $p-q+r$.
  category: "중점 공식 2회(공간) → MN = ON − OM → 계수 조합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터(공간도형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OM=a/2, ON=(b+c)/2 가 각각 중점 공식 한 줄이고 차가 답이다. 묻는 것이 p−q+r 이라 부호를 섞어 읽는 마지막 한 줄만 주의하면 된다. 정사면체라는 조건은 계수에 쓰이지 않는다. 통찰 없음·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "OM=a/2, ON=(b+c)/2 → MN=ON−OM=(−1/2)a+(1/2)b+(1/2)c → p−q+r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: crop:fig-176-357.png
  latex: latex-bank/gn-geo/items/176-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 중점을 내분점(1:2, 2:1)으로 바꿀 수 있고, 묻는 조합도 p+q+r·p−q+r·pqr 로 바꿀 수 있다. 제약: 어느 두 모서리를 고르든 서로 만나지 않는(꼬인 위치) 쌍이어야 세 기저가 모두 살아남는다. 그림의 라벨 O, A, B, C, M, N 은 고정."
    creative: "(1) 모서리 쌍을 OB–AC, OC–AB 로 바꾸면 대칭 위치라 답의 부호만 바뀐다(★2 유지) (2) MN 의 길이를 묻게 하면 정사면체 조건이 살아나 내적 단원 결합 ★3 (3) MN 이 두 모서리의 공통수선임을 보이게 하면 ★4."
```

```yaml
- id: GN-GEO-176-358
  page: 176
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\vecAB{BA}=\vec{a}$, $\vecAB{BC}=\vec{b}$ 이고 삼각형 ABC 의 무게중심이 G 일 때 $\vecAB{AG}=m\vec{a}+n\vec{b}$ 의 $m+n$.
  category: "B 를 기준점으로 → 무게중심 공식 → AG = BG − BA"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 위치벡터(공식 적용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    170-347 ⑵ 와 같은 골조이고 기준점만 O 에서 B 로 옮겼다. B 기준이면 B 의 위치벡터가 0 이라 BG=(a+b)/3 에서 항이 둘뿐인데 분모는 3 인 것이 173-353 과 같은 함정. AG=BG−BA 로 마무리. 통찰 없음·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "BG=(a+b)/3 (B 는 영벡터) → AG=BG−a=(−2/3)a+(1/3)b → m+n=−1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/176-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없고 계수는 −2/3, 1/3 로 고정. 변형 축은 묻는 벡터(AG·CG·GA)와 조합(m+n·m−n·mn)뿐이다."
    creative: "(1) G 를 무게중심 대신 내분점으로 바꾸면 170-346 계열 ★1~2 (2) AG 를 주고 무게중심임을 역으로 판정하게 하면 I-BW d2 · ★3 (3) 172-350 처럼 기준점을 G 로 옮기면 GA+GB+GC=0 활용 ★2."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-176-359
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 OAB 에서 OA 를 1:2 로 내분하는 점 P, 선분 BP 를 1:2 로 내분하는 점 Q, 선분 AQ 의 중점 R. $\vecAB{OA}=\vec{a}$, $\vecAB{OB}=\vec{b}$ 일 때 $\vecAB{OR}$ 를 나타내기.
  category: "내분점 공식 3단 연쇄(P → Q → R) · 기준점 O 고정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    도구는 내분점·중점 공식 하나뿐이지만 앞 단계 결과가 다음 단계의 끝점이 되는 3단 연쇄라 분모가 3 → 9 → 18 로 누적된다. 기준점 O 를 끝까지 바꾸지 않고 매 단계 결과를 a, b 로 정리해 두는 것이 실수를 막는 요령. 통찰 없음이지만 M_total 8 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 STEP 2 ★3 유지.
    [분류 이슈] 통찰 0 인 순수 절차형이라 질 기준으로는 ★2 후보. 누적 계산량만으로 ★3 을 준 형태라 기록한다.
  tier: star_3
  mechanism_primary: "OP=a/3 → OQ=(2·OB+OP)/3=a/9+(2/3)b → OR=(OA+OQ)/2=(5/9)a+(1/3)b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{9}\vec{a}+\dfrac{1}{3}\vec{b}$'
  answer_source: "답지"
  figure: crop:fig-176-359.png
  latex: latex-bank/gn-geo/items/176-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 비(1:2, 1:2, 1:1)를 각각 바꿀 수 있다. 제약: 분모가 곱해져 누적되므로 세 비의 분모를 2·3 계열로 맞춰야 답이 다루기 쉬운 분수로 남는다. 세 점 모두 선분 내부에 있어야 하므로 비는 모두 양수."
    creative: "(1) 한 단계를 외분으로 바꾸면 부호 함정이 붙어 ★3 유지~상승 (2) 마지막에 OR 가 직선 AB 와 만나는 점을 묻게 하면 일차결합 유일성 논증이 필요해 ★4 (3) 세 비를 문자 k 로 두고 R 가 중선 위에 오는 k 를 찾게 하면 I-BW d2 · ★4."
```

```yaml
- id: GN-GEO-176-360
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    좌표평면의 세 점 O(0,0), A(4,2), B(1,6) 에 대하여 $\vecAB{OP}=m\vecAB{OA}+n\vecAB{OB}$ ($m+n=1$, $m\ge 0$, $n\ge 0$) 를 만족시키는 점 P 가 나타내는 도형의 길이.
  category: "m+n=1, m,n≥0 → 선분 AB → 두 점 사이의 거리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대수 조건 m+n=1(직선 AB)과 m,n≥0(선분 AB 로 제한)을 도형으로 번역해야 「길이」를 계산할 대상이 생김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "m+n=1 (m,n≥0) 인 일차결합이 나타내는 도형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산은 두 점 사이의 거리 한 줄(√(3²+4²)=5)뿐이고, 전부가 조건 번역에 달려 있다. m+n=1 만 있으면 직선 AB 전체, 거기에 m,n≥0 이 붙어 선분 AB 로 잘린다는 두 겹을 모두 읽어야 한다. m,n≥0 을 놓치면 「무한대」나 직선의 방정식으로 답하게 되는 전형적 오답(T-범위). 통찰 1개 depth 2·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "m+n=1 → P 는 직선 AB · m,n≥0 → 선분 AB → 길이 = |AB| = 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/176-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있다. 제약: 두 점의 좌표 차가 피타고라스 수(3,4 / 6,8 / 5,12)여야 길이가 정수로 떨어진다. O 를 원점에 두지 않으면 OA, OB 를 성분으로 쓰는 단계가 하나 늘어난다."
    creative: "(1) m+n=1 은 두되 m≥0 만 남기면 반직선이 되어 「길이」 대신 자취를 묻는 ★3 (2) m+n≤1, m,n≥0 으로 바꾸면 삼각형 영역이 되어 넓이를 묻는 ★4 (3) m+n=2 로 바꾸면 닮음비 2 인 평행한 선분이 되어 ★3 (4) 0≤m≤1, 0≤n≤1 로 두면 평행사변형 영역 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-176-361
  page: 176
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    넓이가 $14$ 인 삼각형 ABC 의 내부의 점 P 가 $3\vecAB{PA}+2\vecAB{PB}+2\vecAB{PC}=\vec{0}$ 을 만족시킬 때 삼각형 PAB 의 넓이.
  category: "계수가 같은 두 항을 중점으로 묶기 → P 는 중선 위의 내분점 → 넓이 2단 환원"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수가 같은 2PB+2PC 를 BC 의 중점 M 을 도입해 4PM 한 항으로 묶어야 두 항짜리 식이 됨"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3PA+4PM=0 을 「P 는 중선 AM 을 4:3 으로 내분」이라는 위치 정보로 되돌림"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 넓이를 △ABM(전체의 1/2) → 그 안에서 AP:AM=4:7 의 두 단계 비로 환원"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "αPA+βPB+γPC=0 꼴 조건에서 점 P 의 위치와 넓이비"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    174 쪽 유형과 달리 세 계수 중 어느 것도 0 이 되지 않아 P 가 변 위에 놓이지 않는다. 그래서 「같은 계수 두 개를 중점으로 묶는다」는 착안이 반드시 필요하고, 이것이 이 범위에서 유일하게 조건 통합(CON) 이 등장하는 지점이다. 넓이도 한 번이 아니라 두 번(전체 → △ABM → △PAB) 환원해야 해서 중간에 1/2 을 빠뜨리는 실수가 잦다. 통찰 3개·M_total 8 → 실력 UP ★4 유지. ★5 로 올리지 않은 것은 SC·VF·SYM·XU 가 없고 통찰 조합이 시판에 흔하기 때문(novelty 0).
  tier: star_4
  mechanism_primary: "2PB+2PC=4PM (M=BC 중점) → 3PA+4PM=0 → P 는 AM 의 4:3 내분점 → △PAB=(4/7)·△ABM=(4/7)·7=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/176-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3,2,2) 와 넓이 14 를 바꿀 수 있다. 제약: 두 계수가 같아야 중점으로 묶이고, 세 계수가 모두 양수여야 P 가 삼각형 내부에 남는다. 넓이는 계수 합(3+2+2=7)의 배수로 두어야 답이 정수. 세 계수가 모두 같으면 P 가 무게중심이 되어 넓이가 균등해지므로(★2 로 떨어짐) 피한다."
    creative: "(1) 묻는 삼각형을 PBC 로 바꾸면 비가 PM:AM=3:7 로 바뀌어 ★4 유지 (2) 세 넓이 △PAB:△PBC:△PCA 를 모두 묻게 하면 「넓이비 = 계수비」라는 일반 결론이 드러나 ★4 (3) 세 계수가 서로 다르면 어느 쌍도 묶이지 않아 두 번 묶기(중점 도입 2회) 또는 무게중심 경유가 필요해 전략 분기 I-SC 가 생기고 ★5 (4) 넓이비를 주고 계수를 역으로 찾게 하면 I-BW·I-VF 가 붙어 ★5."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 4 · ★2 12 · ★3 5 · ★4 1 · ★5 0
- 통찰형 10 · 절차형 12 · premium 0
- 구역 분포: 「개념원리 익히기」 4 · 「필수·발전 예제」 12(필수 예제 3 · 발전 예제 1 · 확인체크 8) · 「연습문제 STEP 1」 3 · 「연습문제 STEP 2」 2 · 「연습문제 실력 UP」 1
- type_hint 상위: 「αPA+βPB+γPC=0 꼴 조건에서 점 P 의 위치와 넓이비」 4 · 「선분의 내분점의 위치벡터」 3 · 「위치벡터로 두 점 사이의 벡터 나타내기」 2 · 「삼각형의 무게중심의 위치벡터(공식 적용)」 2 · 「선분의 내분점의 위치벡터(공간도형)」 2
- 통찰 유형 분포(총 18개): I-RT 9 · I-EQV 6 · I-XU 1 · I-CON 1 · I-BW/PD/SYM/MI/SC/VF 0
- M_total: 4 1문 · 5 3문 · 6 11문 · 7 5문 · 8 2문(평균 6.2) · 함정은 T-표기(내분비·계수 뒤집힘, 기준점의 영벡터)가 대부분이고 T-범위는 176-360 한 문항
- 그림: 10문(`crop:fig-171-e1.png` · `fig-171-348` · `fig-171-349` · `fig-172-e2` · `fig-172-351` · `fig-173-e3` · `fig-173-352` · `fig-173-353` · `fig-176-357` · `fig-176-359`) · 공간도형 5문(정육면체 2 · 정사면체 3)
- 대상층: 하위권 4 · 중하위권 7 · 중위권 7 · 중상위권 4 · 상위권 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-174-354 | 발전 예제의 확인체크라 ★3 으로 두었으나 골조가 174-e4 의 ⑴ 만 떼어낸 것이고 넓이 단계가 없어 체감은 ★2 | ★2 / ★3 |
| GN-GEO-176-356 | 각의 이등분선 정리(단원 밖)를 떠올려야만 시작되는 진입 저항이 있어 체감은 ★3. 벤더 STEP 1 신호를 따라 ★2 로 둠 | ★2 / ★3 |
| GN-GEO-176-359 | 통찰 0 인 순수 절차형인데 3단 연쇄의 누적 계산량만으로 STEP 2 ★3 을 유지. 질 기준(§2.11 계산 마찰)으로는 ★2 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 사실상 **네 덩어리**로 수렴한다. ① 두 점 사이의 벡터를 위치벡터의 차로 쓰기 ② 내분점·중점 공식 ③ 무게중심 공식과 그 동치인 GA+GB+GC=0 ④ `αPA+βPB+γPC = (우변)` 조건에서 P 의 위치·넓이비. 카탈로그에서는 이 넷을 base ★ 1 / 2 / 2 / 3 으로 세우는 것이 맞다.
- **통합해도 될 유형**: 「평면 버전」과 「공간도형 버전」(171-349·173-353·176-357)을 따로 세우지 않는다. 계산 골조가 동일하고 추가되는 것은 꼭짓점을 세 기저벡터로 읽는 I-RT d1 한 단계뿐이라, 같은 유형 안의 *공간 변형 슬롯*으로 두고 base ★ 를 +0 으로 잡으면 된다. 마찬가지로 172-e2(증명형)와 172-350(계산형)은 같은 항등식의 앞뒤라 한 유형의 두 갈래다.
- **따로 세워야 할 유형**: ④ 의 `αPA+βPB+γPC=0` 계열은 **우변이 0 이 아닌 경우(174-e4·354·355, 한 계수가 소거되어 P 가 변 위)**와 **우변이 0 인 경우(176-361, P 가 내부·중점 묶기 필요)**로 base ★ 를 3 과 4 로 나눠야 한다. 학생 입장에서 전자는 소거 계산, 후자는 중점 도입 착안이라 실제 장벽이 다르다.
- **또 하나 세울 유형**: 176-360 의 「m+n=1 · m,n≥0 인 일차결합의 자취」는 이 단원 안에서 유일하게 *영역·자취*를 다루며 부등식 조건을 바꾸면 선분·반직선·삼각형·평행사변형으로 계통이 뻗는다. 위 넷과 섞지 말고 별도 유형(base ★3)으로 두고 변형 슬롯을 네 개 붙이는 것이 좋다.
- **이 범위에 없어서 카탈로그에 채워야 할 갈래**: 외분점의 위치벡터, 내심·외심의 위치벡터(가중평균), 직선의 벡터방정식과의 연결. 21단원 전수 22문에 외분점이 한 문항도 없어 T-부호 함정이 거의 비어 있다(함정이 T-표기에 쏠린 이유). 변형 단계에서 먼저 만들 갈래다.
