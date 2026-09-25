---
name: mechanism-데이터-GN-M31-23-p2
description: 개념원리 중학 3-1 23 이차함수의 활용(2/2 · 214~219쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 23 이차함수의 활용
  unit_code: GN-M31-23
  part: "2/2"
  extract_range: "214~219쪽 · 214-01~219-u6"
  total_problems: 33
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 23 이차함수의 활용 (2/2) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **23 이차함수의 활용**(49문항) 중 **뒤 절반 33문항**(214~219쪽)을 다룬다. 이 범위는 전부 단원 끝의 정리 구역이다 — 「중단원 마무리하기 STEP 1 기본 문제」 13문(214-01~215-13) · 「STEP 2 발전 문제」 9문(216-14~217-22) · 「STEP 3 실력 UP」 3문(217-23~217-25) · 「서술형 대비 문제」 8문(218-e1~219-u6). 난이도 level 표기는 없고 「꼭나와」 태그가 7문, 그림이 붙은 문항이 13문이다.

개념원리 중학은 **구역 자체가 난이도 층**이므로 ★ 출발점을 STEP 1 → ★2, STEP 2 → ★3, STEP 3 → ★4, 서술형 대비 → ★3 으로 잡고 M_total·통찰로 ±1 조정했다. 조정 규칙은 이 파일 전체에 같은 기준으로 적용했다 — **−1**: 통찰 0 이면서 ⑴ M_total ≤ 5 이고 한 도구를 한 번만 쓰거나(Mₛ=1) ⑵ 골조가 이 범위 아래 구역 문항의 그대로 반복일 때. **+1**: 통찰 2개 이상 또는 depth 3 일 때. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 를 요구하므로 이 범위에는 없다.

이 단원에서 **푸는 도구는 사실상 둘뿐이다** — 완전제곱(꼭짓점·최대·최소)과 인수분해(x절편). 그래서 Mₖ 는 대개 1~2 에 머물고 난도가 갈리는 자리는 셋이다: **⑴ 식을 주는가 / 그래프·문장에서 스스로 만드는가**, **⑵ 구한 꼭짓점·절편을 다시 무엇으로 쓰는가**(다른 함수의 계수 · 도형의 밑변과 높이 · 또 한 번의 이차함수), **⑶ 마지막에 묻는 것이 구한 값 자체인가 다른 값인가**(인상액 x 가 아니라 판매가 200+x · 지면 도달 시각이 아니라 최고점 이후 경과 시간).

**통찰 판정 기준(이 파일)**: 완전제곱으로 꼭짓점을 얻는 것, 인수분해로 x절편을 얻는 것, 그 좌표를 밑변·높이로 쓰는 것, 두 근 중 조건에 맞는 것을 고르는 것은 이 단원이 **가르치는 표준 절차**라 통찰로 세지 않았다. 통찰로 센 자리는 넷이다 — **⑴ 그래프에서 읽은 계수를 다른 함수로 옮기는 자리**(I-RT), **⑵ 말로 준 조건을 식으로 옮겨야 비로소 풀리는 자리**(I-EQV: 모든 사분면 · 꼭짓점이 직선 위 · 최고점 이후 경과), **⑶ 도형의 배치를 한 변수로 매개화하거나 등적 변형하는 자리**(I-RT·I-SYM), **⑷ 최솟값이 다시 매개변수의 이차함수가 되는 이중 최적화**(I-EQV). 13문이 통찰형, 20문이 절차형이다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-214-01
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    다섯 개의 이차함수 중 그래프의 축이 가장 왼쪽에 있는 것 고르기. 5지선다.
  category: "다섯 식의 축 구하기 → 축의 x좌표 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 축의 방정식 구하기·비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구는 하나(x=-b/2a 또는 완전제곱)인데 다섯 번 반복한다. 분수 계수 선택지의 축이 가장 왼쪽으로 가는 배치가 변별 자리다.
    부호를 뒤집는 자리(T-부호)가 있어 Mₜ=1. 통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 식을 x=-b/(2a) 또는 완전제곱꼴로 → 축 다섯 개 → 가장 작은 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 a, b 를 바꾼다. 제약: 다섯 축이 서로 달라야 하고, 분모에 a 가 들어가므로 |a|<1 인 선택지(1/5 배)의 축이 가장 크게 벌어진다는 구조를 유지해야 변별이 산다. 꼭짓점형 선택지와 일반형 선택지를 섞어 둔 배치도 고정."
    creative: "(1) 「축이 가장 오른쪽」으로 방향만 뒤집기(★2 유지) (2) 꼭짓점의 y좌표가 가장 큰 것을 묻기(최대·최소 비교 · ★2) (3) 축이 x=-1 인 것을 모두 고르는 복수 정답(★2) (4) 축의 방정식이 x=2 가 되도록 하는 상수 b 를 구하게 하면 역방향이 돼 ★3."
```

```yaml
- id: GN-M31-214-02
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    두 이차함수 y=2x^2-4x 와 y=-x^2+ax+b 의 꼭짓점이 일치할 때 a-b 의 값.
  category: "양쪽 꼭짓점 구하기 → 좌표 비교 연립 → a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차함수의 꼭짓점이 일치할 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치 쪽 꼭짓점을 먼저 확정하고, 매개변수가 든 쪽을 완전제곱해 좌표끼리 맞추는 두 겹 구조다. 두 번째 완전제곱이 a 를 품고 있어 Mₐ=2.
    「꼭짓점 일치」를 x좌표·y좌표 두 등식으로 나누는 자리가 유일한 함정(T-표기). 통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "2x^2-4x=2(x-1)^2-2 → 꼭짓점 (1,-2) → -x^2+ax+b 의 꼭짓점을 a, b 로 표현 → 좌표 비교로 a, b → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수의 계수(2x^2-4x → 3x^2-12x, x^2+6x 등)와 미정 함수의 최고차항 부호를 바꾼다. 제약: 기준 함수의 꼭짓점 x좌표가 정수라야 a 가 정수로 떨어지고, 미정 함수의 최고차항이 -1 이 아니면 a=2p·(최고차항) 이 되어 분수가 생긴다."
    creative: "(1) 묻는 값을 a+b·ab 로 바꾸기(★2 유지) (2) 「꼭짓점이 일치」 대신 「축이 같다」로 약화하면 조건이 하나 줄어 ★1~2 (3) 두 그래프의 꼭짓점이 원점에 대하여 대칭이라고 주면 I-SYM 이 붙어 ★3 (4) 미정 함수를 y=a(x-p)^2+q 꼴로 주고 세 문자를 묻는 서술형."
```

```yaml
- id: GN-M31-214-03
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    y=(1/2)x^2-x+3 의 그래프에서 x 가 증가할 때 y 도 증가하는 x 의 범위. 5지선다.
  category: "축 구하기 → 볼록 방향으로 증가 구간 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 그래프의 증가·감소 구간(축 기준)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축 한 줄이면 끝난다. a>0 이므로 축의 오른쪽이 증가 구간이라는 것 하나만 알면 되고, 상수항 3 은 답에 전혀 쓰이지 않는 장식이다.
    함정은 a 의 부호로 방향이 뒤집히는 자리(T-부호) 하나. [분류 이슈] 기본 문제 구역이지만 한 도구를 한 번만 쓰고 M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "축 x=1 · a>0 → 축의 오른쪽에서 증가 → x>1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 부호와 축의 값만 바꾸면 된다(y=-2x^2+8x-1 → x<2 에서 증가). 제약: 축이 정수가 되도록 b 를 a 의 짝수 배로 두고, 선택지에 축과 같은 수의 부등호 방향을 뒤집은 오답을 반드시 포함."
    creative: "(1) 「감소하는 범위」로 뒤집기(★1 유지) (2) 꼭짓점형으로 식을 주면 축이 바로 보여 더 쉬워짐 (3) x 의 값이 증가할 때 y 도 증가하도록 하는 상수 a 의 범위를 묻게 하면 역방향 조건이 돼 ★3 (4) 정의역을 제한해 최대·최소를 함께 묻는 형태는 중3 범위 밖."
```

```yaml
- id: GN-M31-214-04
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    y=-x^2+x+6 의 x절편 p, q (p<q) 와 y절편 r 에 대하여 p-q+r 의 값.
  category: "인수분해로 x절편 → 대소 배정 → y절편 → 식에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 그래프의 x절편·y절편 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 도구가 아니라 두 도구(y=0 인수분해 · x=0 대입)를 각각 쓰고 결과 셋을 한 식에 모은다. 인수분해는 계수가 -1 이라 부호 정리를 한 번 거친다.
    함정은 p<q 배정(T-부호) — p-q 라 순서를 바꾸면 부호가 통째로 뒤집힌다. 통찰 없음·M_total 5 이나 Mₛ=2 라 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "-x^2+x+6=0 → x=-2, 3 → p=-2, q=3 · x=0 → r=6 → p-q+r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 일차항을 바꿔 다른 인수분해형으로(y=-x^2+2x+8 → -2, 4, 8 / y=x^2-x-12 → -3, 4, -12). 제약: x절편이 서로 다른 정수여야 p<q 배정이 살고, 묻는 식은 p 와 q 가 비대칭으로 들어가야(p-q) 순서 함정이 유지된다."
    creative: "(1) pq+r·p+q-r 로 묻는 식만 바꾸기(★2 유지) (2) 세 점 p, q, r 로 만든 삼각형의 넓이를 묻게 하면 도형이 붙어 ★3 (3) x절편이 주어지고 계수를 되묻는 역방향이면 ★3 (4) x절편이 하나뿐(중근)인 경우를 섞으면 T-경계가 추가돼 ★3."
```

```yaml
- id: GN-M31-214-05
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    y=3x^2+12x+8 의 그래프를 x축으로 m, y축으로 n 만큼 평행이동하면 y=3x^2-18x+13 과 일치할 때 m+n 의 값. 5지선다.
  category: "두 식의 꼭짓점 → 좌표 차이로 이동량"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 두 그래프가 일치할 조건 → 이동량 m, n"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동을 식끼리 맞추려 들면 막히고, 꼭짓점 두 개의 좌표 차로 환원하면 한 줄이다. 최고차항이 3 으로 같다는 확인이 전제.
    완전제곱을 계수 3 으로 두 번 해야 해서 Mₖ=2, 이동량 부호를 뒤집는 자리(T-부호)가 함정. 통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 식을 각각 완전제곱 → 꼭짓점 (-2,-4), (3,-14) → m=3-(-2), n=-14-(-4) → m+n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 일차항·상수항을 바꾼다. 제약: 최고차항은 반드시 같아야 하고(다르면 평행이동으로 겹치지 않음), 두 꼭짓점의 x좌표가 정수여야 m 이 정수. 계수 3 을 1 로 낮추면 완전제곱 부담이 사라져 ★1 쪽으로 내려간다."
    creative: "(1) m, n 을 각각 묻는 서술형(★2 유지) (2) 이동 방향을 말로만 주고(오른쪽 5·아래 10) 이동한 식을 쓰게 하면 정방향이라 ★1~2 (3) 이동한 그래프가 원점을 지날 조건으로 n 을 되묻기(★3) (4) 대칭이동(x축·y축)을 섞으면 부호 함정이 배가돼 ★3."
```

```yaml
- id: GN-M31-214-06
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    y=-(3/4)x^2+3x 의 꼭짓점 A 와 x축과의 두 교점 O, B 로 만든 삼각형 AOB 의 넓이. 5지선다.
  category: "x절편·꼭짓점 → 밑변과 높이 → 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 꼭짓점과 x축 두 교점으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항이 없어 x 로 묶으면 절편 0, 4 가 바로 나오고, 밑변 OB 가 x축 위에 있어 높이는 꼭짓점의 y좌표 그대로다. 좌표를 밑변·높이로 읽는 것은 이 단원의 표준 절차라 통찰로 세지 않았다.
    함정은 높이를 꼭짓점의 x좌표로 잘못 쓰는 자리(T-표기). 통찰 없음·M_total 5 이나 두 도구를 쓰므로 −1 하지 않고 ★2.
  tier: star_2
  mechanism_primary: "x 로 묶어 x절편 0, 4 → 꼭짓점 (2,3) → (1/2)·OB·(꼭짓점 y좌표)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: "crop:fig-214-06.png"
  latex: latex-bank/gn-m31/items/214-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿔 x절편과 꼭짓점 높이를 조절한다(y=-x^2+6x → 0, 6 · 꼭짓점 (3,9) → 넓이 27). 제약: 상수항이 0 이어야 한 교점이 원점에 남고, 넓이가 정수가 되려면 (x절편 차)×(꼭짓점 y좌표) 가 짝수여야 한다. 그림의 점 이름 O, A, B 배치는 고정."
    creative: "(1) 상수항을 넣어 두 교점이 모두 원점 밖으로 가게 하면 밑변을 두 근의 차로 구해야 해 ★3(218-e1 형) (2) 넓이를 주고 계수를 되묻는 역방향(★3) (3) 꼭짓점 대신 y절편을 세 번째 점으로 쓰면 밑변이 축 위에 없어 분할이 필요해 ★4(217-24 형) (4) 삼각형 대신 꼭짓점과 두 교점을 지나는 원을 묻는 형태는 단원 밖."
```

```yaml
- id: GN-M31-214-07
  page: 214
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    ㈎ 축이 x=-1 ㈏ 꼭짓점이 x축 위 ㈐ 점 (1,-4) 를 지남 을 만족시키는 y=ax^2+bx+c 에서 abc 의 값.
  category: "세 조건 → 꼭짓점형 결정 → 전개해 a, b, c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「꼭짓점이 x축 위에 있다」를 「꼭짓점의 y좌표가 0」 으로 옮겨 ㈎와 합치면 y=a(x+1)^2 한 개의 미지수로 줄어든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건(축·꼭짓점 위치·지나는 점)으로 이차함수의 식 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건 세 개를 순서대로 쓰면 미지수가 3 → 1 로 줄어드는 구조다. ㈏ 를 「q=0」 으로 읽는 한 단이 핵심이고, 그것만 넘으면 점 대입 한 번으로 끝난다.
    a, b, c 를 되묻기 때문에 꼭짓점형에서 일반형으로 전개하는 자리가 함정(T-표기). 통찰 1개 d1·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "㈎㈏ → 꼭짓점 (-1,0) → y=a(x+1)^2 → ㈐ 대입해 a → 전개해 b, c → abc"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/214-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축의 값과 지나는 점을 바꾼다(축 x=2 · 점 (0,3) → a=3/4 는 분수라 피하고, 축 x=2 · 점 (4,-8) → a=-2). 제약: (지나는 점의 x좌표 − 축) 의 제곱이 지나는 점의 y좌표를 나누어떨어지게 해야 a 가 정수."
    creative: "(1) 묻는 값을 a+b+c 로 바꾸기(★2 유지) (2) ㈏ 를 「x축과 두 점에서 만난다」로 약화하면 조건이 부등식이 돼 단원 밖 (3) ㈏ 를 「y절편이 -1」 로 바꾸면 조건 세 개가 연립이 돼 골조가 216-17 쪽으로 이동(★3) (4) 조건을 그림으로 주면 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-M31-215-08
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    그림의 포물선(x절편 -5, 3 · y절편 -15)을 그래프로 하는 이차함수의 식. 5지선다.
  category: "그래프의 x절편 → 교점형 → y절편으로 a 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프의 x절편·y절편으로 이차함수의 식 구하기(교점형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림이 주는 세 수 중 x절편 둘로 교점형을 세우고 남은 y절편으로 a 를 확정한다. 그림에서 절편을 읽는 것은 이 단원의 표준 절차라 통찰로 세지 않았다.
    함정은 x절편 -5 를 (x-5) 로 쓰는 부호 자리(T-부호). 통찰 없음·M_total 5 이나 두 단(식 세우기 → a 확정)을 거치므로 ★2 유지.
  tier: star_2
  mechanism_primary: "x절편 -5, 3 → y=a(x+5)(x-3) → y절편 -15 로 a=1 → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: "crop:fig-215-08.png"
  latex: latex-bank/gn-m31/items/215-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x절편 쌍과 y절편을 바꾼다(-2, 4 · y절편 -8 → a=1 / -1, 3 · y절편 6 → a=-2). 제약: y절편 = a×(두 x절편의 곱) 이므로 이 값이 나누어떨어져야 a 가 정수이고, 그림의 볼록 방향과 a 의 부호가 일치해야 한다."
    creative: "(1) 그림에 꼭짓점과 y절편만 표시하면 꼭짓점형으로 세우게 돼 골조가 219-u5 로 이동(★3) (2) 선택지를 없애고 a+b+c 를 묻는 서술형(★3) (3) 그림의 포물선을 평행이동한 식을 묻기(★3) (4) x절편만 주고 「y절편이 -15 보다 작을 조건」을 묻게 하면 부등식이라 단원 밖."
```

```yaml
- id: GN-M31-215-09
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    다섯 개의 이차함수 중 최솟값이 가장 작은 것 고르기. 5지선다.
  category: "다섯 식을 완전제곱 → 꼭짓점 y좌표 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 최솟값 구하기·비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    214-01 과 같은 구조로, 비교 대상만 축에서 꼭짓점의 y좌표로 바뀌었다. 꼭짓점형 선택지 둘은 바로 읽히고 일반형 셋은 완전제곱이 필요하다.
    분수 계수(1/4·3/2) 완전제곱이 Mₖ=2 를 만들고, 음수끼리의 대소(T-부호)가 함정. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "다섯 식을 완전제곱 → 꼭짓점 y좌표 다섯 개 → 가장 작은 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/215-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수. 제약: 다섯 최솟값이 서로 달라야 하고, 분수 계수 쪽이 정답이 되도록 두면 완전제곱을 끝까지 한 학생만 맞힌다. 모든 선택지의 최고차항이 양수여야 최솟값이 존재한다."
    creative: "(1) 「최댓값이 가장 큰 것」으로 뒤집되 최고차항을 모두 음수로(★2) (2) 최솟값을 갖지 않는 것을 고르게 하면 볼록 방향 판정만 남아 ★1 (3) 최솟값이 -3 인 것을 모두 고르는 복수 정답(★2) (4) 다섯 식을 한 좌표평면에 그린 그림으로 주면 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-M31-215-10
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    y=-x^2+2ax 의 최댓값이 36 일 때 양수 a 의 값.
  category: "매개변수 완전제곱 → 최댓값 식 → 방정식 → 부호 조건으로 근 선택"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값이 주어진 이차함수의 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치가 아니라 문자 a 를 품은 채 완전제곱해야 해서 Mₐ=2 다. 최댓값이 a^2 이라는 것만 나오면 이차방정식 한 줄이다.
    함정은 a=±6 중 양수만 취하는 자리(T-범위) — 문제가 「양수 a」 를 명시해 준 덕에 난도는 눌렸다. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=-(x-a)^2+a^2 → 최댓값 a^2=36 → a=±6 → 양수 조건으로 a=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/215-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값을 완전제곱수로 바꾼다(16 → a=4 / 49 → a=7). 제약: 최댓값이 완전제곱수여야 a 가 정수이고, 최고차항이 음수여야 최댓값이 존재한다. y=x^2-2ax 로 바꾸면 최솟값 -a^2 이 되어 부호가 뒤집힌다."
    creative: "(1) 「음수 a」 로 조건만 뒤집기(★2 유지) (2) 양수 조건을 지우면 두 값을 모두 답해야 해 ★3 (3) y=-x^2+2ax+b 처럼 문자를 둘로 늘리면 조건이 하나 더 필요해 ★3 (4) 최댓값이 아니라 꼭짓점이 직선 y=x 위에 있을 조건으로 바꾸면 219-u3 골조(★3)."
```

```yaml
- id: GN-M31-215-11
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    x=6 에서 최솟값 -9 를 갖고 y=(1/3)x^2 의 그래프와 모양이 같은 이차함수 y=ax^2+bx+c 에서 ac+b 의 값. 5지선다.
  category: "모양 조건으로 a → 꼭짓점형 → 전개해 b, c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최솟값·모양 조건으로 이차함수의 식 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「모양이 같다」가 a 의 절댓값을 주고, 「최솟값」이 부호를 양으로 확정한다. 나머지는 꼭짓점형 y=(1/3)(x-6)^2-9 를 전개하는 계산.
    분수 계수 전개가 Mₖ=2, a 의 부호를 음수로 잡는 자리(T-부호)가 함정. 통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "모양 같음 + 최솟값 → a=1/3 → y=(1/3)(x-6)^2-9 → 전개해 b, c → ac+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/215-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점과 기준 함수의 계수를 바꾼다(x=4 에서 최솟값 -8 · 모양 y=(1/2)x^2 → y=(1/2)x^2-4x). 제약: a×(꼭짓점 x좌표)^2 이 정수라야 c 가 정수이고, 분모가 꼭짓점 x좌표의 제곱을 나누어떨어지게 두면 깔끔하다."
    creative: "(1) 묻는 값을 abc·a+b+c 로 바꾸기(★2 유지) (2) 「최솟값」을 「최댓값」으로 바꾸면 a=-1/3 이 돼 부호 함정이 살아남(★2) (3) 「모양이 같다」 대신 「y=(1/3)x^2 의 그래프를 평행이동한 것」으로 쓰면 같은 뜻의 다른 표현 (4) 모양 조건을 빼고 지나는 점을 하나 더 주면 미정계수 연립이 돼 ★3."
```

```yaml
- id: GN-M31-215-12
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    차가 18 인 두 수의 곱이 최소가 되도록 하는 두 수 중 작은 수.
  category: "두 수를 한 문자로 → 곱을 이차식으로 → 완전제곱 → 최소일 때의 x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "차(합)가 일정한 두 수의 곱의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    작은 수를 x 로 두면 큰 수가 x+18 로 따라오고 곱이 바로 이차식이 된다. 문장을 이차식으로 옮기는 것은 이 단원의 표준 절차라 통찰로 세지 않았다.
    함정은 최솟값 -81 이 아니라 그때의 x 를, 그것도 「작은 수」 쪽을 묻는 자리(T-표기). 통찰 없음·M_total 5 이나 식을 스스로 세우므로 ★2 유지.
  tier: star_2
  mechanism_primary: "작은 수 x → 곱 x(x+18)=(x+9)^2-81 → 최소가 되는 x=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/215-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차를 다른 짝수로(차 12 → -6 / 차 20 → -10). 제약: 차가 짝수여야 답이 정수(홀수면 -k/2). 차를 합으로 바꾸면 곱이 최대가 되는 문제로 뒤집힌다."
    creative: "(1) 「곱의 최솟값」을 묻기(★2 유지) (2) 「합이 12 인 두 수의 곱의 최대」로 바꾸면 같은 골조·부호만 반대(★2) (3) 두 수를 자연수로 제한하면 정수해 검증이 붙어 I-VF ★3 (4) 「차가 18 이고 곱이 -80 인 두 수」로 바꾸면 최대·최소가 아니라 이차방정식 활용 단원(★2)."
```

```yaml
- id: GN-M31-215-13
  page: 215
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    길이 10 m 인 철망으로 담벽(그림의 두 면)에 붙여 직사각형 닭장을 만들 때 넓이의 최댓값. 5지선다.
  category: "그림의 담벽 배치 → 철망 길이 식 → 넓이를 이차식으로 → 완전제곱"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에서 담벽이 이웃한 두 면임을 읽어 철망이 나머지 두 변뿐임을 확정 — 이 한 줄이 x+y=10 이냐 x+2y=10 이냐를 가른다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "담을 이용한 울타리(철망) 넓이의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식만 서면 나머지는 x(10-x) 완전제곱 한 줄이다. 난도 전부가 그림 읽기에 몰려 있고, 담벽을 한 면으로 착각하면 식 자체가 달라진다.
    함정 둘 — 길이를 넓이 단위로 옮기는 자리(T-단위)와 0<x<10 범위(T-범위). 통찰 1개 d1·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "담벽 두 면 → 철망은 이웃한 두 변 x+y=10 → 넓이 x(10-x)=-(x-5)^2+25 → 25 m^2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-215-13.png"
  latex: latex-bank/gn-m31/items/215-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철망 길이 10 을 12·16·20 으로. 제약: 최댓값이 (L/2)^2 이므로 L 이 짝수여야 답이 정수이고, 그림의 담벽이 두 면이라는 배치를 바꾸면 식이 x+2y=L 로 달라지므로 그림과 수치를 함께 갈아야 한다."
    creative: "(1) 담벽을 한 면으로 바꾸면 x+2y=10 이 되어 계수만 달라지고 골조는 같음(★2) (2) 넓이가 최대일 때의 가로 길이를 묻기(★2) (3) 닭장 가운데에 칸막이를 하나 더 넣으면 x+3y=10 이 되어 식 세우는 단이 늘어 ★3 (4) 철망 길이를 문자 L 로 주면 Mₐ 가 올라 ★3."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-216-14
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    일차함수 y=ax+b 의 그래프(그림)를 보고 이차함수 y=ax^2+bx+1 의 그래프의 꼭짓점의 좌표 구하기.
  category: "직선의 그래프에서 a, b → 이차함수에 대입 → 완전제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 그래프의 두 절편을 읽어 기울기 a=-2, y절편 b=2 로 옮기고, 그 값을 전혀 다른 이차함수의 계수 자리에 넣는다(기하 → 대수 전이)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차함수 그래프에서 읽은 계수로 이차함수의 꼭짓점 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림이 주는 것은 일차함수인데 묻는 것은 이차함수다. 두 함수를 잇는 고리가 문자 a, b 뿐이라 「그림 → 수 → 다른 식의 계수」 라는 전이 한 단이 관문이다.
    계수가 확정된 뒤에는 -2x^2+2x+1 완전제곱이지만 분수 꼭짓점이라 Mₖ=2. 함정은 기울기의 음부호(T-부호). 통찰 1개 d1·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "그림의 절편 → a=-2, b=2 → y=-2x^2+2x+1 완전제곱 → 꼭짓점 (1/2, 3/2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\left(\dfrac{1}{2},\,\dfrac{3}{2}\right)$'
  answer_source: "답지"
  figure: "crop:fig-216-14.png"
  latex: latex-bank/gn-m31/items/216-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 두 절편을 바꿔 a, b 를 조절한다(절편 (0,3), (3,0) → a=-1, b=3 → 꼭짓점 (3/2, 13/4)). 제약: 꼭짓점이 지나치게 더러운 분수가 되지 않도록 b 를 a 의 짝수 배 근처로 두고, 그림의 직선이 지나는 두 점은 모두 격자점이어야 읽을 수 있다."
    creative: "(1) 이차함수를 y=bx^2+ax+1 로 계수를 맞바꾸면 그림은 그대로 두고 답만 달라짐(★3) (2) 꼭짓점 대신 최댓값이나 축의 방정식을 묻기(★3 유지) (3) 그림을 이차함수 그래프로 주고 일차함수 그래프를 고르게 하면 방향이 뒤집혀 216-16 골조(★3) (4) 일차함수 식을 그림 없이 말로 주면 통찰이 사라져 ★2."
```

```yaml
- id: GN-M31-216-15
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    y=-x^2+4x+c 의 그래프가 모든 사분면을 지나도록 하는 상수 c 의 값의 범위. 5지선다.
  category: "볼록 방향·축 위치 고정 → 사분면 통과 조건을 y절편 조건으로 환원"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 사분면을 지난다」를 따져 보면 제1·3·4 사분면은 볼록 방향과 축 위치만으로 자동이고, 실제로 남는 조건은 제2사분면 통과 = y절편 c>0 하나로 압축된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 그래프가 모든 사분면을 지날 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산은 거의 없고 판단만 있다. 위로 볼록이고 축이 x=2 로 오른쪽에 고정돼 있다는 사실에서 어느 사분면이 저절로 채워지는지 가려내는 것이 전부다.
    함정 둘 — c 의 범위 자체(T-범위)와 c=0 을 포함할지(T-경계). 통찰 1개 d2·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "a<0·축 x=2 → 제1·3·4 사분면 자동 → 제2사분면 조건 = y절편 c>0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/216-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 바꿔 축을 옮긴다(y=-x^2+6x+c → 축 x=3, 여전히 c>0). 제약: 축이 양수 쪽에 있어야 제2사분면만 남고, 축을 음수 쪽으로 옮기면(y=-x^2-4x+c) 남는 조건이 제1사분면으로 바뀌어 답의 모양이 달라진다."
    creative: "(1) 최고차항을 양수로 바꾸면 위·아래가 뒤집혀 조건이 「꼭짓점의 y좌표<0 그리고 y절편<0」 두 개가 돼 ★4 (2) 「제3사분면을 지나지 않을 조건」처럼 부정형으로 묻기(★3) (3) 「세 사분면만 지날 조건」으로 바꾸면 경계값 검증이 붙어 I-VF ★4 (4) c 를 주고 지나는 사분면을 모두 답하게 하면 역방향이라 ★2."
```

```yaml
- id: GN-M31-216-16
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    y=ax^2+bx+c 의 그래프(그림)를 보고 y=cx^2-ax+b 의 그래프로 알맞은 것 고르기. 그림 선택지 5개.
  category: "그래프 → a, b, c 의 부호 → 새 식의 볼록 방향·축·y절편 부호 → 그래프 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프와 계수 부호 사이를 두 번 오간다 — 먼저 그림의 볼록 방향·축 위치·y절편에서 a, b, c 의 부호를 읽어 내고, 다시 그 부호만으로 새 식의 그래프 모양을 되그린다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 읽은 a, b, c 의 부호로 다른 이차함수의 그래프 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수를 하나도 쓰지 않고 부호만으로 끝까지 가는 문항이다. 계수를 바꿔 끼운 새 식에서 볼록 방향은 c, 축의 부호는 a 와 c 의 관계, y절편은 b 가 각각 책임진다.
    축의 부호 판정이 몫의 부호라 T-부호, 계수 자리를 바꿔 끼우는 표기가 T-표기. [분류 이슈] 216-14·219-u5 와 type_hint 가 겹치지만 방향(그래프→계수 vs 계수→그래프)이 반대다. 통찰 1개 d2·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "그림 → 볼록 방향·축 위치·y절편으로 a, b, c 의 부호 확정 → y=cx^2-ax+b 의 볼록 방향(c)·축 부호(a/2c)·y절편(b) 판정 → 그래프 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: "crop:fig-216-16.png"
  latex: latex-bank/gn-m31/items/216-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 사실상 없고 그림의 부호 배치(볼록 방향·축이 어느 쪽인지·y절편의 부호)와 새 식의 계수 조합(y=bx^2+cx-a 등)을 갈아 끼운다. 제약: 세 부호가 모두 확정되는 그림이어야 하고(축이 y축과 겹치면 b=0 이 되어 미확정), 선택지 다섯 그림이 세 요소 중 하나씩만 달라야 변별이 산다."
    creative: "(1) 새 식을 y=bx^2+cx+a 등으로 바꿔 끼우기(★3 유지) (2) 선택지를 지우고 「새 그래프가 지나지 않는 사분면」을 묻게 하면 216-15 와 결합돼 ★4 (3) a+b+c·abc 의 부호를 묻기(x=1 대입 착안이 붙어 ★3) (4) 그림 대신 a<0, ab>0, c>0 처럼 부등식으로 주면 통찰이 사라져 ★2."
```

```yaml
- id: GN-M31-216-17
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    세 점 (0,5), (-1,8), (2,-7) 을 지나는 포물선과 x축의 두 교점 A, B 에 대하여 선분 AB 의 길이. 5지선다.
  category: "세 점 대입 연립 → 식 확정 → 인수분해 → 두 근의 차"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "선분 AB 의 길이를 이차방정식 두 근의 차로 옮긴다(도형의 길이 → 방정식의 해 차이)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점을 지나는 포물선의 식 → x축과의 두 교점 사이 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 절반은 미정계수 세 개의 연립이다. (0,5) 가 c 를 바로 주기 때문에 실제 연립은 두 식뿐이지만, 단 수가 길어 Mₛ=3.
    뒤 절반에서 AB 를 두 근의 차로 읽는 한 줄이 통찰 자리. 계산 부담은 크지만 도구는 모두 표준이라 +1 하지 않고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "세 점 대입 → c=5, 연립으로 a=-1, b=-4 → y=-(x+5)(x-1) → 두 근 -5, 1 → AB=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/216-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꾼다. 제약: 한 점은 (0,k) 로 두어 c 를 즉시 주는 구조를 유지하고, 나머지 두 점은 x좌표가 작은 정수여야 연립 계수가 깔끔하다. 확정된 이차식이 정수 계수로 인수분해돼야 AB 가 정수."
    creative: "(1) AB 대신 삼각형 ABС(C 는 꼭짓점)의 넓이를 묻기(217-24 와 결합 ★4) (2) 세 점 중 하나를 꼭짓점으로 주면 꼭짓점형이 되어 연립이 사라져 ★2 (3) 세 점을 그림으로 주면 I-RT 가 하나 더 붙어 ★4 (4) x축과 만나지 않을 조건을 묻는 형태는 판별식이라 중3 범위 밖."
```

```yaml
- id: GN-M31-216-18
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    y=(1/3)x^2-2x+1 의 그래프를 x축으로 -2, y축으로 1 만큼 평행이동한 이차함수의 최솟값.
  category: "완전제곱 → 꼭짓점 평행이동 → 옮긴 꼭짓점의 y좌표"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 이차함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식을 다시 전개할 필요가 전혀 없다. 꼭짓점을 구하고 y좌표에 1 만 더하면 끝나며, x 방향 이동 -2 는 답에 아무 영향도 주지 않는 장식이다.
    분수 계수 완전제곱이 Mₖ=2, 이동 부호가 T-부호. [분류 이슈] 발전 문제 구역이지만 골조가 STEP 1 의 214-05 와 같은 한 도구 반복이고 통찰 0 → −1 하여 ★2.
  tier: star_2
  mechanism_primary: "(1/3)x^2-2x+1=(1/3)(x-3)^2-2 → 꼭짓점 (3,-2) → y축으로 1 이동 → 최솟값 -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/216-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 식의 계수와 y축 이동량을 바꾼다((1/2)x^2-4x+5 → 꼭짓점 (4,-3), 아래로 2 이동 → -5). 제약: 완전제곱의 꼭짓점 x좌표가 정수라야 분수 계수가 감당되고, x축 이동량은 답과 무관하므로 오답 유도용으로 남겨 둔다."
    creative: "(1) 최솟값 대신 꼭짓점 좌표나 축의 방정식을 묻기(★2 유지) (2) 이동한 그래프가 점 (k,-5) 를 지나게 하면 219-u4 골조(★3) (3) 최고차항을 음수로 바꿔 최댓값을 묻기(★2) (4) 이동 후의 식을 y=ax^2+bx+c 로 쓰게 하면 전개가 더해져 ★3."
```

```yaml
- id: GN-M31-216-19
  page: 216
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    y=2x^2+4kx-4k+7 의 최솟값을 m 이라 할 때 m 의 최댓값. 5지선다.
  category: "매개변수 완전제곱 → 최솟값 m 을 k 의 이차식으로 → 다시 완전제곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구한 최솟값 m=-2k^2-4k+7 을 상수가 아니라 k 에 대한 이차함수로 다시 보고, 같은 완전제곱 도구를 한 층 위에서 재적용한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 최솟값이 다시 이차함수가 되는 이중 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    완전제곱을 두 번 하는데, 두 번째는 변수가 x 가 아니라 k 다. 첫 완전제곱의 결과를 「값」이 아니라 「k 의 함수」로 받아들이는 전환이 이 문항의 전부다.
    k 를 품은 채 전개하는 부담으로 Mₛ=3·Mₐ=2, 최솟값의 최댓값이라는 말 자체가 함정(T-표기). 통찰 1개 d2·M_total 8 → ★3 유지(+1 은 통찰 2개 이상일 때만).
  tier: star_3
  mechanism_primary: "y=2(x+k)^2-2k^2-4k+7 → m=-2k^2-4k+7 → m=-2(k+1)^2+9 → 최댓값 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/216-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항과 k 항의 계수를 바꾼다(y=x^2+2kx+4k+1 → m=-k^2+4k+1 → 최댓값 5). 제약: 두 번째 이차식의 최고차항 부호가 첫 번째와 반대여야 「최솟값의 최댓값」이 존재하고, k 의 꼭짓점이 정수라야 답이 정수."
    creative: "(1) 최고차항을 음수로 바꿔 「최댓값의 최솟값」으로 뒤집기(★3 유지) (2) m 의 최댓값이 아니라 그때의 k 를 묻기(★3) (3) m 이 정수가 되는 k 를 모두 구하게 하면 사후 검증이 붙어 I-VF ★4 (4) k 의 범위를 제한하면 꼭짓점이 범위 밖일 때를 따져야 해 ★4."
```

```yaml
- id: GN-M31-217-20
  page: 217
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    높이가 y=-5t^2+10t+75 로 주어진 물체가 최고 높이에 도달한 지 몇 초 후에 지면에 떨어지는지. 5지선다.
  category: "완전제곱으로 최고점 시각 → y=0 으로 낙하 시각 → 두 시각의 차"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「최고 높이에 도달한 지 몇 초 후」를 「지면 도달 시각 − 꼭짓점 시각」 이라는 차로 옮긴다 — 낙하 시각 5 초를 그대로 답하는 것이 가장 흔한 오답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 운동의 최고점 시각과 지면 도달 시각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식이 통째로 주어져 있어 세울 일이 없고, 완전제곱 한 번과 이차방정식 한 번으로 두 시각을 얻는다. 난도는 마지막 한 줄, 무엇을 묻고 있는지에 있다.
    함정 둘 — 음수 근 t=-3 을 버리는 자리(T-범위)와 경과 시간을 묻는 자리(T-표기). 통찰 1개 d1·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "y=-5(t-1)^2+80 → 최고점 t=1 → y=0 에서 t=5 → 5-1=4초"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/217-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이와 초속을 바꾼다(y=-5t^2+20t+60 → 최고점 t=2, 낙하 t=6 → 4초). 제약: 판별식이 완전제곱이라 t 가 정수로 떨어져야 하고, 중력 계수 -5 는 고정하는 편이 현실 설정과 맞는다."
    creative: "(1) 최고 높이 자체나 던진 지 몇 초 후에 떨어지는지를 묻기(★2 로 내려감) (2) 높이가 60 m 이상인 시간 구간을 묻게 하면 이차부등식이라 단원 밖 (3) 지면이 아니라 높이 55 m 인 옥상에 떨어진다고 하면 근 선택이 한 번 더 필요해 ★4 (4) 식을 주지 않고 표(시각-높이)로 주면 미정계수 연립이 앞에 붙어 ★4."
```

```yaml
- id: GN-M31-217-21
  page: 217
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    지름의 길이의 합이 20 cm 인 두 원의 넓이의 합의 최솟값. 5지선다.
  category: "지름 조건을 반지름으로 → 넓이 합을 이차식으로 → 완전제곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 일정한 두 길이로 만든 도형의 넓이의 합의 최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    215-12 의 「합이 일정한 두 수」 골조에 원의 넓이 공식이 한 겹 덧씌워진 형태다. 반지름을 r, 10-r 로 두면 그 뒤는 완전제곱 한 줄.
    함정 둘 — 지름의 합 20 을 반지름의 합 10 으로 옮기는 자리(T-단위)와 0<r<10(T-범위). 파이를 달고 전개해야 해 Mₖ=2. 통찰 없음·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "반지름 r, 10-r → 넓이 합 π{r^2+(10-r)^2}=2π(r-5)^2+50π → 50π cm^2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-217-21.png"
  latex: latex-bank/gn-m31/items/217-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름의 합을 바꾼다(16 → 32π / 24 → 72π). 제약: 지름의 합이 4 의 배수여야 반지름 합이 짝수가 되어 최솟값 계수가 정수로 떨어진다. 「지름의 합」을 「반지름의 합」으로 쓰면 T-단위 함정이 사라져 ★2 로 내려간다."
    creative: "(1) 넓이의 합이 최소일 때의 두 지름을 묻기(★3 유지) (2) 원 대신 정사각형 둘의 넓이 합으로 바꾸면 파이가 사라져 ★2 (3) 두 원의 둘레의 합은 지름의 합에 비례해 일정하다는 점을 함께 묻기(I-EQV 추가 ★4) (4) 큰 원에서 작은 원을 뺀 넓이의 최대로 뒤집으면 식이 일차가 돼 골조가 무너짐."
```

```yaml
- id: GN-M31-217-22
  page: 217
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    직선 y=-4x+8 위 제1사분면의 점 P 에서 x축, y축에 내린 수선의 발을 Q, R 라 할 때 삼각형 PRQ 의 넓이의 최댓값.
  category: "직선 위의 점을 한 문자로 매개화 → 두 직각변 길이 → 넓이 이차식 → 완전제곱"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "움직이는 점 P 를 (x, -4x+8) 한 문자로 매개화하고, 수선의 발 배치에서 두 직각변이 각각 x 와 -4x+8 임을 읽어 도형 문제를 이차식 하나로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선 위의 점을 매개변수로 잡은 직각삼각형 넓이의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점이 움직이므로 좌표를 하나의 문자로 세우는 것이 출발이고, 그 순간 삼각형의 두 변이 바로 x 와 y 가 된다는 것이 핵심이다. 직각이 P 에 있다는 배치 확인이 전제.
    함정 둘 — 제1사분면이라 0<x<2(T-범위)와 삼각형 이름 PRQ 의 직각 위치(T-표기). 통찰 1개 d2·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "P(x,-4x+8) → PQ=-4x+8, PR=x → 넓이 (1/2)x(-4x+8)=-2(x-1)^2+2 → 최댓값 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-217-22.png"
  latex: latex-bank/gn-m31/items/217-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기와 y절편을 바꾼다(y=-2x+6 → 넓이 -x^2+3x, 최댓값 9/4 는 분수 / y=-x+4 → 최댓값 2). 제약: 기울기가 음수이고 두 절편이 모두 양수라야 제1사분면 구간이 생기며, 최댓값이 정수가 되려면 (y절편)^2/(8×|기울기|) 이 정수여야 한다."
    creative: "(1) 삼각형 대신 직사각형 OQPR 의 넓이의 최대를 묻기(같은 골조·계수만 2배 ★3) (2) 넓이가 최대일 때 점 P 의 좌표를 묻기(★3 유지) (3) 직선을 포물선으로 바꾸면 넓이가 삼차식이 돼 중3 범위 밖 (4) P 를 두 직선의 교점으로 주면 매개화가 사라져 최대·최소 자체가 없어짐."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-217-23
  page: 217
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    두 이차함수 y=2x^2+12x+15, y=2x^2-4x-1 의 그래프(그림)에서 두 곡선과 x축·꼭짓점 높이의 가로선으로 둘러싸인 색칠한 부분의 넓이.
  category: "두 식 완전제곱 → 평행이동 관계 확인 → 색칠한 부분을 직사각형으로 등적 변형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 식을 완전제곱해 2(x+3)^2-3 과 2(x-1)^2-3 을 얻고, 계수가 같고 꼭짓점의 y좌표도 같다는 데서 한 곡선이 다른 곡선을 x축 방향으로 4 만큼 평행이동한 합동 도형임을 읽는다"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "색칠한 부분의 왼쪽 곡선 경계와 오른쪽 곡선 경계가 합동이라 같은 높이마다 가로 폭이 항상 4 로 일정함을 이용해, 곡선 부분을 밀어 가로 4·세로 3 인 직사각형으로 등적 변형한다(곡선 넓이를 구하지 않고 끝낸다)"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "평행이동 관계인 두 포물선 사이 색칠한 부분의 넓이(등적 변형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중3 은 곡선으로 둘러싸인 넓이를 구하는 도구가 없다. 그래서 이 문항은 「구하라」가 아니라 「구하지 않아도 되게 만들어라」를 묻는다.
    두 포물선이 합동이고 x축 방향으로만 4 어긋나 있다는 것을 보면 튀어나온 부분과 들어간 부분이 정확히 맞물려 직사각형이 된다.
    [분류 이슈] 등적 변형 착안을 I-SYM 으로 뒀으나 평행이동 합동이라 I-RT 로 볼 여지도 있다. STEP 3 출발점 ★4 · 통찰 2개(depth 3 포함) → +1 후보이나 ★5 는 통찰 3개 이상을 요구하므로 ★4.
  tier: star_4
  mechanism_primary: "2(x+3)^2-3 과 2(x-1)^2-3 → x축 방향 4 평행이동한 합동 → 색칠한 부분을 밀어 가로 4·세로 3 직사각형 → 12"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12$'
  answer_source: "답지"
  figure: "crop:fig-217-23.png"
  latex: latex-bank/gn-m31/items/217-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량과 꼭짓점의 깊이를 바꾼다(2(x+2)^2-5 와 2(x-3)^2-5 → 5×5=25). 제약: 두 식의 최고차항이 같아야 합동이 되고 꼭짓점의 y좌표도 같아야 가로 폭이 일정해진다. 답은 (이동량)×(꼭짓점 깊이) 이므로 두 값을 정수로."
    creative: "(1) 색칠한 부분을 두 곡선과 x축 대신 두 곡선과 꼭짓점을 잇는 선분으로 잡기(같은 등적 변형 ★4) (2) 꼭짓점의 y좌표를 다르게 하면 가로 폭이 일정하지 않아 중3 도구로는 풀 수 없게 됨 — 변형 금지 지점 (3) 이동량을 묻고 넓이를 주는 역방향(★4) (4) 두 포물선의 교점 좌표를 함께 묻게 하면 이차방정식이 하나 더 붙어 ★4 유지."
```

```yaml
- id: GN-M31-217-24
  page: 217
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    y=-x^2+2x+8 의 꼭짓점 A, x축과 양의 부분에서 만나는 점 B, y축과 만나는 점 C 로 만든 삼각형 ACB 의 넓이.
  category: "꼭짓점·x절편·y절편 세 점 → 어느 변도 축 위에 없는 삼각형 → 사다리꼴 분할"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 점 A(1,9), B(4,0), C(0,8) 은 밑변이 축 위에 놓이지 않아 (1/2)×밑변×높이 를 바로 쓸 수 없다 — 좌표를 둘러싸는 직사각형이나 사다리꼴로 감싼 뒤 직각삼각형 셋을 빼는 배치로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "포물선 위 세 점(꼭짓점·x절편·y절편)으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 점을 구하는 데까지는 214-06 과 같지만, 그 세 점이 만드는 삼각형에는 축 위의 변이 하나도 없다. 여기서 대부분 막힌다.
    좌표를 감싸는 도형으로 옮기는 배치 판단이 통찰 자리이고, 그 뒤는 뺄셈 계산이라 Mₛ=3·Mₖ=2. 「양의 부분에서 만나는 점」으로 두 근 중 하나를 고르는 자리가 함정(T-범위).
    STEP 3 출발점 ★4 · 통찰 1개 d2 → 조정 없이 ★4 유지.
  tier: star_4
  mechanism_primary: "완전제곱·인수분해 → A(1,9), B(4,0), C(0,8) → 세 점을 감싸는 사다리꼴에서 직각삼각형을 빼는 분할 → 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-217-24.png"
  latex: latex-bank/gn-m31/items/217-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항을 바꿔 세 점을 옮긴다(y=-x^2+4x+5 → A(2,9), B(5,0), C(0,5)). 제약: 인수분해가 정수 계수로 되어야 B 가 격자점이고, 꼭짓점의 좌표도 정수라야 분할 계산이 감당된다. 세 점이 한 직선 위에 놓이는 계수는 피한다."
    creative: "(1) 삼각형 ABC 대신 사각형 OCAB 의 넓이를 묻기(분할 구조 유지 ★4) (2) B 를 음의 부분의 교점으로 바꾸면 세 점 배치가 달라져 분할 방식이 바뀜(★4) (3) 꼭짓점 대신 x축 위의 두 교점만 쓰면 밑변이 축 위에 놓여 ★2 로 내려감 (4) 넓이를 주고 상수항을 되묻는 역방향이면 ★5 후보."
```

```yaml
- id: GN-M31-217-25
  page: 217
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    포물선 y=(2/3)x^2+3x+5 위의 점 P 에서 y축에 평행한 직선을 그어 직선 y=x+2 와 만나는 점을 Q 라 할 때 선분 PQ 의 길이의 최솟값.
  category: "PQ 를 두 함숫값의 차로 → 차를 이차식으로 → 완전제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y축에 평행한 선분」이라는 배치에서 P 와 Q 의 x좌표가 같음을 읽어, 선분의 길이를 두 식의 차 (포물선의 y) − (직선의 y) 라는 하나의 이차식으로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "포물선과 직선 사이 y축에 평행한 선분의 길이의 최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    길이를 좌표로 계산하려 들면 두 점의 거리 공식으로 빠지지만, 두 점의 x좌표가 같다는 것만 보면 길이는 그냥 두 함숫값의 차다. 그 차가 다시 이차함수라는 것이 두 번째 고리.
    차를 완전제곱하면 최솟값이 양수로 나와 포물선이 직선보다 항상 위에 있음도 함께 확인된다(T-부호). 분수 계수 완전제곱으로 Mₖ=2.
    STEP 3 출발점 ★4 · 통찰 1개 d2 → 조정 없이 ★4 유지.
  tier: star_4
  mechanism_primary: "PQ=(2/3)x^2+3x+5-(x+2)=(2/3)x^2+2x+3 → (2/3)(x+3/2)^2+3/2 → 최솟값 3/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-217-25.png"
  latex: latex-bank/gn-m31/items/217-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선과 직선의 계수를 바꾼다(y=x^2-2x+5 와 y=2x-3 → 차 x^2-4x+8=(x-2)^2+4, 최솟값 4). 제약: 차가 이차식일 때 최고차항이 양수여야 최소가 존재하고, 최솟값이 양수여야 두 그래프가 만나지 않아 길이 해석이 성립한다(0 이면 접점, 음수면 교차해 절댓값이 필요)."
    creative: "(1) 포물선이 직선보다 아래에 있게 두고 QP 로 방향을 뒤집기(★4 유지) (2) PQ 의 길이가 최소일 때 점 P 의 좌표를 묻기(★4) (3) 직선을 x축으로 바꾸면 차가 곧 포물선 값이 되어 ★2 로 내려감 (4) 두 그래프가 만나도록 계수를 잡고 PQ 의 최대를 구간 안에서 묻게 하면 경계 검증이 붙어 ★5 후보."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-218-e1
  page: 218
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=-x^2+4x+5 의 꼭짓점 A 와 x축과의 두 교점 B, C 로 만든 삼각형 ABC 의 넓이. [7점]
  category: "인수분해로 x절편 → 밑변 = 두 근의 차 → 꼭짓점 y좌표 = 높이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 꼭짓점과 x축 두 교점으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    214-06 과 같은 골조인데 두 교점이 모두 원점 밖이라 밑변을 두 근의 차 5-(-1) 로 구하는 한 줄만 늘었다. 높이는 꼭짓점의 y좌표 그대로.
    함정은 밑변을 x절편의 합이나 한쪽 좌표로 쓰는 자리(T-표기). 서술형 구역 ★3 출발이나 통찰 없음·M_total 5·표준 도구 두 개뿐 → −1 하여 ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → A(2,9) · 인수분해 → B(-1,0), C(5,0) → (1/2)·6·9=27"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "본문 답"
  figure: "crop:fig-218-e1.png"
  latex: latex-bank/gn-m31/items/218-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항을 바꿔 x절편 쌍과 꼭짓점 높이를 조절한다(y=-x^2+2x+3 → 절편 -1, 3 · 꼭짓점 높이 4 → 넓이 8). 제약: 정수 계수 인수분해가 되어야 하고, (두 절편의 차)×(꼭짓점 y좌표) 가 짝수라야 넓이가 정수."
    creative: "(1) 최고차항을 양수로 바꿔 꼭짓점이 x축 아래에 오게 하면 높이에 절댓값이 필요해짐(218-u1 형 ★2) (2) 넓이를 주고 상수항을 되묻는 역방향(★3) (3) 세 번째 점을 y절편으로 바꾸면 분할이 필요해 ★4(217-24 형) (4) 삼각형 ABC 의 둘레를 묻는 형태는 피타고라스가 붙어 단원 결합 ★4."
```

```yaml
- id: GN-M31-218-u1
  page: 218
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=x^2-2x-15 의 그래프와 x축의 두 교점 A, B, 꼭짓점 C 로 만든 삼각형 ACB 의 넓이. [7점]
  category: "인수분해로 x절편 → 밑변 = 두 근의 차 → 꼭짓점 y좌표의 절댓값 = 높이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 꼭짓점과 x축 두 교점으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    218-e1 의 짝 유제로, 아래로 볼록이라 꼭짓점이 x축 아래에 있다는 점만 다르다. 높이가 -16 이 아니라 16 이라는 절댓값 처리가 이 문항이 실제로 채점하는 자리다.
    함정은 그 부호(T-부호) 하나. 통찰 없음·M_total 5·표준 도구 두 개 → 서술형 ★3 출발에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "인수분해 → A(-3,0), B(5,0) → AB=8 · 꼭짓점 (1,-16) → 높이 16 → (1/2)·8·16=64"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$64$'
  answer_source: "답지"
  figure: "crop:fig-218-u1.png"
  latex: latex-bank/gn-m31/items/218-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 바꿔 두 절편을 조절한다(y=x^2-2x-8 → -2, 4 · 꼭짓점 (1,-9) → 넓이 27). 제약: 정수 인수분해가 되어야 하고 꼭짓점의 y좌표는 항상 음수여야 절댓값 처리 자리가 유지된다."
    creative: "(1) 최고차항을 음수로 바꾸면 218-e1 과 같아짐(★2 유지) (2) 삼각형 대신 사각형 ACBD(D 는 y절편)의 넓이(★3) (3) 넓이가 64 가 되도록 하는 상수항을 되묻는 역방향(★3) (4) 최고차항을 a 로 두고 넓이를 a 로 나타내게 하면 Mₐ 가 올라 ★4."
```

```yaml
- id: GN-M31-218-e2
  page: 218
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=-3x^2+6x+2 의 최댓값과 y=(1/4)x^2+x-3k+9 의 최솟값이 같을 때 상수 k 의 값. [6점]
  category: "양쪽 완전제곱 → 최댓값·최솟값을 각각 k 로 표현 → 등식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차함수의 최댓값과 최솟값이 같을 조건에서 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    완전제곱 두 번에 일차방정식 한 번. 도구는 STEP 1 수준이지만 두 번째 식이 분수 계수에 문자 k 까지 달고 있어 한 번에 정리하기가 만만치 않다.
    함정은 최댓값(위로 볼록)과 최솟값(아래로 볼록)을 볼록 방향으로 먼저 가려야 하는 자리(T-부호). 통찰 없음·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "-3(x-1)^2+5 → 최댓값 5 · (1/4)(x+2)^2+8-3k → 최솟값 8-3k → 8-3k=5 → k=1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/218-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양쪽 계수와 k 의 계수를 바꾼다(-2(x-2)^2+7 과 (1/3)(x-3)^2+k-4 → k=14). 제약: 분수 계수 쪽의 꼭짓점 x좌표가 정수라야 상수항 정리가 깔끔하고, k 의 계수가 최종 방정식에서 나누어떨어져야 답이 정수."
    creative: "(1) 문자를 최댓값 쪽 함수에 넣기(★3 유지) (2) 「최댓값이 최솟값보다 3 만큼 크다」로 등식을 어긋나게 하면 한 단 추가(★3) (3) 양쪽 모두에 k 를 넣으면 k 가 소거될 수 있어 해의 존재 판정이 붙어 ★4 (4) 최댓값·최솟값이 아니라 두 꼭짓점이 일치할 조건으로 바꾸면 214-02 골조(★2)."
```

```yaml
- id: GN-M31-218-u2
  page: 218
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=2x^2-12x+4k 의 최솟값과 y=-(5/2)x^2-5x+k-(11/2) 의 최댓값이 같을 때 상수 k 의 값. [6점]
  category: "양쪽 완전제곱 → 최솟값·최댓값을 각각 k 로 표현 → 등식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차함수의 최댓값과 최솟값이 같을 조건에서 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    218-e2 의 짝 유제인데 양쪽 모두에 k 가 들어 있어 이항이 한 번 더 필요하다. 두 번째 식은 최고차항 -5/2 에 상수항도 분수라 정리 부담이 이 범위에서 가장 크다.
    함정은 분수 완전제곱에서 상수항을 더하고 빼는 자리(T-부호). 통찰 없음·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "2(x-3)^2+4k-18 → 최솟값 4k-18 · -(5/2)(x+1)^2+k-3 → 최댓값 k-3 → 4k-18=k-3 → k=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/218-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 의 계수를 양쪽에서 다르게 조절한다(3k 와 k → 2k=차). 제약: 두 k 의 계수가 서로 달라야 소거되지 않고, 차가 최종 상수를 나누어떨어지게 해야 답이 정수. 분수 계수는 꼭짓점 x좌표가 정수가 되도록 일차항을 맞춰 둔다."
    creative: "(1) 두 함수의 최고차항 부호를 맞바꾸기(★3 유지) (2) 「최솟값이 최댓값의 2배」로 바꾸면 계수 처리가 한 단 늘어 ★3 (3) k 의 계수를 같게 해 해가 없게 만들면 조건 판정이 필요해 ★4 (4) k 의 값이 아니라 그때의 두 꼭짓점 사이 거리를 묻게 하면 도형이 붙어 ★4."
```

```yaml
- id: GN-M31-219-u3
  page: 219
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=-(1/3)x^2+4x+a 의 그래프의 꼭짓점이 직선 y=x-5 위에 있을 때 상수 a 의 값. [6점]
  category: "매개변수 완전제곱 → 꼭짓점 좌표 → 직선 식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「꼭짓점이 직선 위에 있다」를 「꼭짓점의 좌표를 직선의 식에 대입하면 등식이 성립한다」로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼭짓점이 주어진 직선 위에 있을 조건 → 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 를 품은 채 분수 계수로 완전제곱해야 해서 계산 부담이 앞쪽에 몰려 있고, 마지막은 「위에 있다 = 대입하면 성립한다」 한 줄이다.
    꼭짓점의 x좌표 6 은 a 와 무관하고 y좌표만 a 를 품는다는 구조가 이 문항의 뼈대. 함정은 -1/3 로 묶을 때의 부호(T-부호). 통찰 1개 d1·M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "완전제곱 → 꼭짓점 (6, 12+a) → y=x-5 에 대입 12+a=1 → a=-11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/219-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수와 일차항, 직선의 식을 바꾼다(y=(1/2)x^2-6x+a 와 y=2x+1 → 꼭짓점 (6, a-18) → a=31). 제약: 일차항 계수를 최고차항의 2배의 정수배로 두어야 꼭짓점 x좌표가 정수이고, 그래야 직선 대입이 정수 방정식이 된다."
    creative: "(1) 꼭짓점이 x축·y축 위에 있을 조건으로 바꾸면 한쪽 좌표만 0 이 돼 ★2 (2) 직선 대신 다른 포물선 위에 있을 조건으로 바꾸면 이차방정식이 돼 두 값 검증이 붙어 ★4 (3) 꼭짓점이 제2사분면에 있을 조건이면 부등식이라 단원 밖 (4) 그래프를 그림으로 주고 a 를 되묻는 형태는 I-RT 가 붙어 ★3 유지."
```

```yaml
- id: GN-M31-219-u4
  page: 219
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    y=2x^2-8x+3 의 그래프를 x축으로 -1, y축으로 -8 만큼 평행이동한 그래프가 점 (k,-5) 를 지날 때 모든 k 의 값의 합. [7점]
  category: "완전제곱 → 꼭짓점 평행이동 → 점 대입 → 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 이차함수의 그래프가 지나는 점 → 모든 k 의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    216-18 의 평행이동 골조에 점 대입과 이차방정식이 이어 붙은 형태다. 이동을 꼭짓점형에서 처리하면 전개 없이 2(x-1)^2-13 이 바로 나온다.
    함정 둘 — 이동 방향이 둘 다 음수라 부호를 두 번 뒤집는 자리(T-부호)와 k 가 두 개 모두 답에 들어가는 자리(T-범위). 통찰 없음·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "2(x-2)^2-5 → 평행이동 2(x-1)^2-13 → (k,-5) 대입 → (k-1)^2=4 → k=3, -1 → 합 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/219-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량과 지나는 점의 y좌표를 바꾼다(x축으로 2·y축으로 3 이동 후 (k,1) 을 지남). 제약: 대입 후 (k-p)^2 의 값이 최고차항으로 나누어떨어지고 그 몫이 완전제곱수라야 k 가 정수이며, 값이 양수라야 k 가 둘 존재한다."
    creative: "(1) 모든 k 의 합 대신 곱이나 큰 값을 묻기(★3 유지) (2) 지나는 점을 꼭짓점 높이와 같게 두면 k 가 하나뿐이라 중근 판정이 붙어 ★4 (3) 이동량을 미지수로 두고 지나는 점을 주면 역방향이 돼 ★4 (4) 이동 후의 식을 일반형으로 쓰게 하는 단을 추가하면 Mₖ 만 올라 질이 떨어짐."
```

```yaml
- id: GN-M31-219-u5
  page: 219
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    그림의 이차함수 y=ax^2+bx+c 의 그래프(꼭짓점 (3,-5) · y절편 1)에서 3a+b-c 의 값. [7점]
  category: "그래프의 꼭짓점 → 꼭짓점형 → y절편으로 a → 전개해 b, c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 읽은 꼭짓점·y절편으로 a, b, c 를 정해 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    215-08 의 교점형 짝으로, 그림이 주는 것이 x절편 대신 꼭짓점이라 꼭짓점형으로 세운다. a 가 2/3 로 분수라 전개와 식의 값 계산이 모두 분수 위에서 진행된다.
    함정은 꼭짓점형에서 일반형으로 전개할 때 b=-6a 를 빠뜨리는 자리(T-표기). 그림에서 꼭짓점·절편을 읽는 것은 이 단원의 표준이라 통찰로 세지 않았다. M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "꼭짓점 (3,-5) → y=a(x-3)^2-5 → y절편 1 로 a=2/3 → 전개해 b=-4, c=1 → 3a+b-c"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: "crop:fig-219-u5.png"
  latex: latex-bank/gn-m31/items/219-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점과 y절편을 바꾼다(꼭짓점 (2,-3) · y절편 1 → a=1 로 정수화 / 꼭짓점 (1,-4) · y절편 -2 → a=2). 제약: (y절편 − 꼭짓점 y좌표) 를 (꼭짓점 x좌표)^2 으로 나눈 값이 a 이므로 정수로 떨어지게 두면 난도가 한 단 내려간다. 묻는 식은 a, b, c 가 모두 들어가야 전개 단이 살아난다."
    creative: "(1) 묻는 식을 a+b+c(= x=1 대입) 로 바꾸면 전개 없이 그래프에서 바로 읽는 착안이 생겨 I-RT ★4 (2) 그림에 x절편 둘을 표시하면 교점형이 되어 215-08 골조(★2) (3) 꼭짓점만 주고 지나는 점을 말로 주면 그림이 사라져 ★2 (4) a, b, c 의 부호만 묻게 하면 216-16 골조(★3)."
```

```yaml
- id: GN-M31-219-u6
  page: 219
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    한 개에 200원이면 600개가 팔리고 x 원 올리면 판매량이 2x 개 줄어드는 상품에서 총 판매 금액이 최대가 되는 판매 가격. [8점]
  category: "인상액 x 로 가격·판매량 표현 → 금액 이차식 → 완전제곱 → 가격으로 환산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "가격 인상과 판매량 감소에서 총 판매 금액의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수를 「가격」이 아니라 「인상액」으로 잡아야 두 인자가 동시에 x 로 표현된다. 나머지는 (200+x)(600-2x) 를 전개해 완전제곱하는 계산.
    함정 둘 — 세 자리 수 전개에서 나오는 단위 감각(T-단위)과 마지막에 x=50 이 아니라 200+x=250 을 답해야 하는 자리(T-표기). 이 마지막 한 줄이 8점 배점의 실제 채점 지점이다. 통찰 없음·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "x 원 인상 → 금액 (200+x)(600-2x)=-2(x-50)^2+125000 → x=50 → 판매 가격 250원"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$250$원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/219-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정가·초기 판매량·감소 계수를 바꾼다(300원에 400개, x 원 올리면 2x 개 감소 → 최대 x=50, 가격 350원). 제약: 최댓값이 되는 x 가 (초기 판매량/감소계수 − 정가)/2 이므로 이 값이 양의 정수라야 하고, 0<x<초기 판매량/감소계수 범위 안이어야 현실 조건이 성립한다."
    creative: "(1) 총 판매 금액의 최댓값 자체를 묻기(마지막 환산 함정이 사라져 ★2) (2) 「x 원씩 내리면 판매량이 2x 개 늘어난다」로 방향을 뒤집기(★3 유지) (3) 원가를 주고 이익이 최대가 되는 가격을 묻게 하면 식 세우는 단이 하나 늘어 ★4 (4) 가격을 100원 단위로만 올릴 수 있다고 제한하면 정수 검증이 붙어 I-VF ★4."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 1 · ★2 15 · ★3 14 · ★4 3 · ★5 0
- 통찰형 13 · 절차형 20 · premium 0
- 통찰 유형 분포: I-RT 7 · I-EQV 5 · I-SYM 1 (총 13단계 · depth 3 은 217-23 의 등적 변형 하나뿐)
- 구역별 ★: STEP 1(13문) ★1 1 · ★2 12 / STEP 2(9문) ★2 1 · ★3 8 / STEP 3(3문) ★4 3 / 서술형 대비(8문) ★2 2 · ★3 6
- type_hint 상위 5: 「포물선의 꼭짓점과 x축 두 교점으로 만든 삼각형의 넓이」 3(214-06 · 218-e1 · 218-u1) · 「두 이차함수의 최댓값과 최솟값이 같을 조건에서 미정계수」 2(218-e2 · 218-u2) · 「그래프에서 읽은 값으로 다른 식·그래프를 정하기」 3(216-14 · 216-16 · 219-u5) · 「합·차가 일정한 두 양의 곱·넓이의 최대·최소」 3(215-12 · 215-13 · 217-21) · 「평행이동 관련 이동량·최솟값·지나는 점」 3(214-05 · 216-18 · 219-u4)
- 그림: 13문(214-06 · 215-08 · 215-13 · 216-14 · 216-16 · 217-21 · 217-22 · 217-23 · 217-24 · 217-25 · 218-e1 · 218-u1 · 219-u5)
- 「꼭나와」 태그 7문(214-02 · 214-06 · 215-10 · 215-12 · 216-16 · 216-17 · 217-21) — 모두 ★2~3 에 분포하며 태그가 ★ 를 올리지는 않았다

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-214-03 | 기본 문제 구역이지만 축 한 줄로 끝나고 M_total 4 → −1 규칙 적용. 구역 신호만 보면 ★2 | ★1 / ★2 |
| GN-M31-216-18 | 발전 문제 구역이지만 골조가 STEP 1 의 214-05 평행이동 반복이고 통찰 0 → −1 하여 ★2 | ★2 / ★3 |
| GN-M31-216-16 | type_hint 가 216-14·219-u5 와 「그래프↔계수」로 겹치지만 방향이 반대(계수 → 그래프). 카탈로그에서 한 유형으로 묶을지 갈라야 할지 미정 | ★3 |
| GN-M31-216-19 | 이중 최대·최소의 통찰 코드를 I-EQV 로 뒀으나 「같은 도구를 한 층 위에서 재적용」이라 I-RT·I-CON 후보도 있음 | ★3 / ★4 |
| GN-M31-217-23 | 등적 변형 착안을 I-SYM d3 으로 뒀으나 평행이동 합동이라 I-RT 로 볼 여지가 있음. 통찰 2개라 ★5 게이트(통찰 3개 이상)에 걸려 ★4 | ★4 / ★5 |
| GN-M31-217-24 | 도구는 모두 표준(꼭짓점·절편·분할)이고 통찰 1개 d2 인데 실력 UP 구역이라 ★4 유지. 골조만 보면 ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「포물선 위 세 점으로 만든 삼각형의 넓이」는 **밑변이 x축 위에 놓이는 경우**(214-06 · 218-e1 · 218-u1 · ★2)와 **놓이지 않아 분할이 필요한 경우**(217-24 · ★4)가 체감 난도에서 두 단 차이가 나므로 반드시 별개 유형으로. ⑵ 「그래프 → 계수」(216-14 · 219-u5)와 「계수 → 그래프」(216-16)도 방향이 달라 별개. ⑶ 「최솟값이 다시 이차함수가 되는 이중 최대·최소」(216-19)는 이 단원에서 유일하게 도구를 한 층 위에서 재적용하는 유형이라 단독 슬롯이 필요하다.
- **통합해도 될 유형** ⑴ 「합·차가 일정한 두 양의 곱·넓이의 최대·최소」는 수(215-12) · 울타리(215-13) · 원(217-21)이 모두 같은 골조이므로 한 유형 아래 설정 변형으로. ⑵ 「두 이차함수의 최댓값·최솟값이 같을 조건」(218-e2 · 218-u2)은 완전히 같은 유형의 예제·유제 쌍. ⑶ 「평행이동」은 이동량 구하기(214-05) · 이동 후 최솟값(216-18) · 이동 후 지나는 점(219-u4)이 모두 꼭짓점 이동 한 줄이라 한 유형의 물음 변형으로 묶을 수 있다.
- **★4 이상 슬롯 후보**: 이 범위에서 진짜 변별이 일어난 자리는 등적 변형(217-23) · 축 위에 없는 삼각형 분할(217-24) · 선분 길이를 두 식의 차로 옮기기(217-25) 셋뿐이다. 카탈로그의 중3 이차함수 ★4 슬롯은 이 셋을 기준으로 잡는 것이 좋다. ★5 는 이 단원 단독으로는 어렵고, 이차방정식(단원 16)이나 도형 단원과 결합해야(I-XU) 요건을 채운다.
