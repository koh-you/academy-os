---
name: mechanism-데이터-GN-M31-18
description: 개념원리 중학 3-1 18 이차함수 (2)(1/1 · 171~175쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 18 이차함수 (2)
  unit_code: GN-M31-18
  part: "1/1"
  extract_range: "171~175쪽 · 171-01~175-05"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 18 이차함수 (2) (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **18 이차함수 (2)**(171~175쪽 · 21문항 전수)를 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 12문(핵심문제 h 6 + 짝 확인문제 c 6) · 「이런 문제가 시험에 나온다」 5문이다. 그림 문항은 7문이고 난이도 태그는 붙어 있지 않다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 도구 적용 드릴(★1), 「핵심문제 익히기」는 대표 유형 + 짝 확인문제(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다.

이 단원의 도구는 둘뿐이다 — **⑴ $y$ 축 방향으로 $q$ 만큼 이동하면 $y=ax^2+q$ (꼭짓점 $(0,\,q)$ · 축 $x=0$)**, **⑵ $x$ 축 방향으로 $p$ 만큼 이동하면 $y=a(x-p)^2$ (꼭짓점 $(p,\,0)$ · 축 $x=p$)**. 21문 중 15문이 이 둘의 직접 적용(식 세우기 · 점 대입 · 꼭짓점·축 읽기)이라 절차형 비중이 높고, 오답의 거의 전부가 **$x$ 를 $x-p$ 로 바꿀 때의 부호**(T-부호)와 **$p$·$q$ 를 축·꼭짓점의 어느 좌표로 넣을지**(T-표기)에서 나온다.

통찰이 실제로 개입하는 자리는 둘이다. 하나는 **선지형에서 지나는 사분면을 묻는 자리**(172-c2 · 174-h5 · 175-02 · 175-04) — 식만으로는 판정되지 않아 개형을 그려야 하므로 I-RT d1 로 잡았다. 다른 하나는 **이동량을 역으로 구해 제곱근의 두 값을 모두 따지는 자리**(175-03 · I-MI)와 **그림에서만 식을 복원해야 하는 자리**(175-05 · I-RT d2)다. 이 범위의 ★3 은 이 둘뿐이고, I-XU·I-SC·I-VF·I-SYM 은 하나도 없어 ★4·★5 자격 문항이 없다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-171-01
  page: 171
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ 표를 채워 $y=x^2+3$ 의 그래프를 좌표평면에 그리기 ⑵ 그 그래프의 꼭짓점의 좌표와 축의 방정식.
  category: "표 채우기 → 점 찍어 포물선 → 꼭짓점·축 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프 그리기와 꼭짓점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $y=x^2$ 의 표값에 3 을 더하는 한 단계뿐이고, ⑵ 는 그린 그래프에서 꼭짓점과 축을 그대로 읽는다.
    함정은 $q$ 를 더했는데도 축은 여전히 $x=0$ 이라는 점(T-표기) 하나.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
    [분류 이슈] ⑴ 의 답이 「풀이 참조」(작도)라 판정 대상은 사실상 ⑵ 뿐이고 M·★ 도 ⑵ 기준이다.
  tier: star_1
  mechanism_primary: "x 값마다 y=x^2+3 계산 → 점을 찍어 포물선 → 꼭짓점 (0,3)·축 x=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조 ⑵ $(0,\,3)$, $x=0$'
  answer_source: "답지"
  figure: crop:fig-171-01-2.png
  latex: latex-bank/gn-m31/items/171-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "더하는 상수 q(±1~±5)와 이차항 계수 a(±1 · ±1/2 · ±2)를 바꿀 수 있다. 제약: 표의 x 범위에서 y 가 정수로 떨어져야 하고(a 가 분수면 x 는 짝수), 그림의 좌표평면 눈금 안에 값이 들어와야 한다."
    creative: "(1) q<0 으로 두어 꼭짓점이 x축 아래로 내려가면 사분면 판정이 붙는다(★2 · I-RT d1) (2) 표 없이 식만 주고 개형을 그리게 하면 ★2 (3) y=x^2 과 y=x^2+3 을 한 평면에 그려 평행이동 관계를 설명하게 하면 ★2."
```

```yaml
- id: GN-M31-171-02
  page: 171
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ $y=-\dfrac{1}{2}x^2$ 를 1 만큼, ⑵ $y=x^2$ 를 $-4$ 만큼 $y$ 축 방향으로 평행이동한 그래프의 식·꼭짓점·축.
  category: "y축 방향 평행이동 → y=ax^2+q → 꼭짓점 (0,q)·축 x=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y$ 축 방향으로 평행이동한 그래프의 식과 꼭짓점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이동량을 상수항으로 붙이는 한 단계가 전부다. 꼭짓점의 y 좌표만 바뀌고 축은 두 문항 모두 $x=0$ 으로 남는다.
    음수 이동($-4$)에서 상수항 부호를 뒤집어 쓰는 실수(T-부호)가 유일한 함정.
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=ax^2 의 우변에 q 더하기 → y=ax^2+q → 꼭짓점 (0,q) · 축 x=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-\dfrac{1}{2}x^2+1$, $(0,\,1)$, $x=0$ ⑵ $y=x^2-4$, $(0,\,-4)$, $x=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/171-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 a 와 이동량 q 는 자유. 제약: 분수 계수는 문항당 하나로 두고 q 는 정수로 유지해 꼭짓점 좌표가 깔끔하게 나오게 한다."
    creative: "(1) 이동 뒤 식을 주고 이동량을 되묻는 역방향(★2 · 175-01 골조) (2) 두 번 이동(+3 뒤 -5)으로 합성 이동을 묻기(★2) (3) 이동한 그래프가 지나는 점을 붙이면 172-h1 골조(★2)."
```

```yaml
- id: GN-M31-171-03
  page: 171
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ 표를 채워 $y=(x-2)^2$ 의 그래프를 좌표평면에 그리기 ⑵ 그 그래프의 꼭짓점의 좌표와 축의 방정식.
  category: "표 채우기 → 점 찍어 포물선 → 꼭짓점·축 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프 그리기와 꼭짓점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    171-01 의 $x$ 축 판이다. 표값이 $x=2$ 를 중심으로 대칭이라는 것이 축 $x=2$ 를 읽는 근거가 된다.
    꼭짓점의 x 좌표를 $-2$ 로 읽는 부호 실수(T-부호)가 대표 오답.
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
    [분류 이슈] ⑴ 의 답이 「풀이 참조」(작도)라 판정 대상은 사실상 ⑵ 뿐이다.
  tier: star_1
  mechanism_primary: "x 값마다 y=(x-2)^2 계산 → 점을 찍어 포물선 → 꼭짓점 (2,0)·축 x=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조 ⑵ $(2,\,0)$, $x=2$'
  answer_source: "답지"
  figure: crop:fig-171-03-2.png
  latex: latex-bank/gn-m31/items/171-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 p(±1~±3)와 이차항 계수를 바꿀 수 있다. 제약: 표의 x 범위 안에 꼭짓점이 들어와야 대칭이 보이고, a 가 크면 y 값이 눈금을 벗어난다."
    creative: "(1) y=(x+2)^2 로 부호를 뒤집어 대표 오답을 정면으로 묻기(★1 유지) (2) y=-(x-2)^2 로 위로 볼록까지 섞기(★2) (3) 표의 일부 칸만 비워 두고 대칭으로 나머지를 채우게 하면 I-SYM 맛보기(★2)."
```

```yaml
- id: GN-M31-171-04
  page: 171
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ $y=-4x^2$ 를 3 만큼, ⑵ $y=\dfrac{2}{3}x^2$ 를 $-5$ 만큼 $x$ 축 방향으로 평행이동한 그래프의 식·꼭짓점·축.
  category: "x축 방향 평행이동 → y=a(x-p)^2 → 꼭짓점 (p,0)·축 x=p"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$x$ 축 방향으로 평행이동한 그래프의 식과 꼭짓점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $p$ 만큼 이동하면 식에는 $x-p$ 가 들어간다는 부호 규칙 하나가 전부다.
    ⑵ 의 $-5$ 이동이 $(x+5)^2$ 가 되는 자리가 이 단원 최대 오답 지점(T-부호)이고, 꼭짓점은 $(-5,\,0)$ 으로 다시 뒤집힌다.
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x 를 x-p 로 바꾸기 → y=a(x-p)^2 → 꼭짓점 (p,0) · 축 x=p"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-4(x-3)^2$, $(3,\,0)$, $x=3$ ⑵ $y=\dfrac{2}{3}(x+5)^2$, $(-5,\,0)$, $x=-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/171-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 a 와 이동량 p 는 자유이고 답의 꼴은 변하지 않는다. 제약: 양수 이동과 음수 이동을 한 문항에 하나씩 섞어야 부호 규칙을 두 방향으로 점검할 수 있다."
    creative: "(1) 식을 주고 어느 그래프를 얼마만큼 이동한 것인지 되묻기(★2) (2) x축·y축 이동을 한 문항에 섞으면 다음 단원 y=a(x-p)^2+q 선행 (3) 이동한 그래프의 축의 방정식만 묻는 단답형은 ★1 유지."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-172-h1
  page: 172
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=4x^2$ 의 그래프를 $y$ 축 방향으로 $-7$ 만큼 평행이동한 그래프가 점 $(2,\,k)$ 를 지날 때 $k$.
  category: "평행이동식 세우기 → 점 대입 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프 — 평행이동 후 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동식 세우기 → 대입 두 단계. 이동량 $-7$ 을 상수항에 그대로 붙이면 끝이라 통찰이 없다.
    함정은 이동량의 부호를 더하기로 처리하는 실수(T-부호) 하나.
    핵심문제 구역 ★2 출발이나 M_total 4 · 통찰 0 은 v3.8 의 $-1$ 후보다. 구역 하한을 지켜 ★2 로 두고 기록만 한다.
    [분류 이슈] 171-02 의 도구에 대입 한 줄을 붙인 것뿐이라 실질 난도는 ★1 에 가깝다.
  tier: star_2
  mechanism_primary: "y=4x^2-7 → x=2 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/172-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4 · 이동량 -7 · 대입하는 x=2 를 자유롭게 바꿀 수 있다. 제약: k 가 정수로 떨어지게 a 와 x 를 맞춘다(a 가 분수면 x 는 분모의 배수)."
    creative: "(1) k 를 주고 이동량 q 를 되묻기(★2) (2) 이동 전 그래프 위의 점과 이동 후 점을 함께 주어 a 와 q 를 모두 구하게 하면 ★3 (3) 지나는 점의 y 좌표가 0 이 되게 해 x절편을 묻는 꼴로 바꾸면 ★3."
```

```yaml
- id: GN-M31-172-c1
  page: 172
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-\dfrac{1}{2}x^2+q$ 의 그래프가 점 $(-4,\,-13)$ 을 지날 때 꼭짓점의 좌표($q$ 는 상수).
  category: "점 대입 → q 결정 → 꼭짓점 (0,q)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지나는 점으로 $q$ 를 정하고 꼭짓점 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수 $q$ 를 대입 한 줄로 정하고 꼭짓점을 $(0,\,q)$ 로 읽는 2단계다. 미정계수 대입은 표준 절차라 I-BW 로 인정하지 않는다.
    $-\frac{1}{2}(-4)^2$ 을 $+8$ 로 계산하는 부호 실수(T-부호)가 대표 오답이고, 꼭짓점의 x 좌표가 0 이라는 점은 그대로 주어진다.
    확인문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "(-4,-13) 대입 → -8+q=-13 → q → 꼭짓점 (0,q)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,-5)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/172-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -1/2 과 지나는 점을 바꿀 수 있다. 제약: 지나는 점의 x 좌표는 분모의 배수로 두어 ax^2 이 정수가 되게 하고 q 도 정수로 떨어지게 한다."
    creative: "(1) 꼭짓점을 주고 지나는 점의 y 좌표를 되묻기(★2) (2) q 대신 a 를 미지수로 두면 173-h3 골조 (3) 꼭짓점이 어느 사분면·축 위에 있는지까지 묻게 하면 개형 판정이 붙어 ★3(I-RT d1)."
```

```yaml
- id: GN-M31-172-h2
  page: 172
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-2x^2+3$ 의 그래프에 대한 설명으로 옳은 것 고르기(볼록·축·꼭짓점·증감·평행이동 5지).
  category: "a 부호·q → 개형 → 선지별 성질 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프의 성질(선지 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a$ 의 부호와 $q$ 만 읽으면 다섯 선지가 모두 결정된다. 증감(④)도 「위로 볼록 + 축 $x=0$」 에서 바로 나오므로 별도 통찰이 아니다.
    함정은 $q=3$ 을 축의 방정식이나 꼭짓점의 x 좌표로 읽는 표기 혼동(T-표기)과 볼록 방향 부호(T-부호) 둘.
    핵심문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a=-2<0 위로 볼록 · 꼭짓점 (0,3) · 축 x=0 → 선지 다섯 개 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/172-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 부호·크기와 q 를 바꾸면 다섯 선지의 참·거짓이 통째로 바뀐다. 제약: 참인 선지가 정확히 하나만 남도록 축·꼭짓점 선지의 숫자를 q 와 겹치게 배치한다."
    creative: "(1) 사분면 선지를 넣으면 개형을 그려야 해서 통찰형이 된다(★2 · I-RT d1 · 172-c2 골조) (2) 「옳지 않은 것」으로 뒤집기(★2) (3) 두 함수의 그래프를 비교하는 ㄱㄴㄷ 보기로 만들면 ★3."
```

```yaml
- id: GN-M31-172-c2
  page: 172
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=\dfrac{2}{3}x^2-1$ 의 그래프에 대한 설명으로 옳지 않은 것 고르기(꼭짓점·대칭·사분면·증감·평행이동 5지).
  category: "개형 그리기 → 사분면·증감 판정 → 틀린 선지"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "③ 사분면 판정은 식만으로는 안 되고 꼭짓점 (0,-1) 이 x축 아래라는 개형을 그려 제3·4사분면을 지나는 것을 확인해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프의 성질(사분면 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 선지는 $a$·$q$ 에서 바로 나오지만 정답 ③ 은 그래프를 실제로 그려 x축 아래 구간을 확인해야 한다 — 대수 표현을 개형으로 옮기는 I-RT d1.
    꼭짓점이 x축 아래라는 점을 놓치면 「제3·4사분면을 지나지 않는다」를 참으로 읽게 된다(T-범위).
    확인문제 구역 ★2 출발 · 통찰 1(d1) · M_total 6 → ★2 유지(+1 은 통찰 2개 이상 또는 depth 3 에서만).
  tier: star_2
  mechanism_primary: "꼭짓점 (0,-1)·아래로 볼록 개형 → 사분면·증감 판정 → 틀린 선지 ③"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/172-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(2/3)와 q(-1)를 바꿀 수 있다. 제약: q<0 이어야 사분면 선지가 살아 있고 q>0 으로 바꾸면 정답 선지가 달라진다."
    creative: "(1) q>0 으로 뒤집어 「모든 사분면을 지난다」 선지를 넣기(★2 · 175-02 골조) (2) a<0·q>0 조합이면 지나는 사분면이 셋이 되어 판정이 무거워진다(★3) (3) 지나는 사분면의 개수만 묻는 단답형이면 ★2 유지."
```

```yaml
- id: GN-M31-173-h3
  page: 173
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    꼭짓점이 $(0,\,2)$ 이고 점 $(4,\,8)$ 을 지나는 포물선을 그래프로 하는 이차함수의 식(그림).
  category: "꼭짓점 (0,q) → y=ax^2+q → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 식 구하기; $y=ax^2+q$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 y축 위에 있으므로 식의 꼴이 $y=ax^2+q$ 로 정해지고 나머지는 점 하나 대입이다.
    그림은 발문의 두 좌표를 다시 보여 줄 뿐이라 판정에 영향이 없다. $16a=6$ 에서 $a$ 가 분수로 나오는 것이 유일한 계산 부담(T-단위 아님).
    핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (0,2) → y=ax^2+2 → (4,8) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{3}{8}x^2+2$'
  answer_source: "본문 답"
  figure: crop:fig-173-h3.png
  latex: latex-bank/gn-m31/items/173-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 y 좌표 q 와 지나는 점을 바꿀 수 있다. 제약: a 가 지저분한 분수가 되지 않게 (지나는 점의 x)^2 이 (y-q) 를 적당히 나누도록 맞춘다."
    creative: "(1) 꼭짓점을 x축 위로 옮기면 174-h6 골조(y=a(x-p)^2) (2) 지나는 점 대신 y절편이나 대칭점을 주면 조건 해석이 한 겹 붙어 ★3 (3) a 를 주고 지나는 점을 되묻기(★2)."
```

```yaml
- id: GN-M31-173-c3
  page: 173
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    꼭짓점이 $(0,\,-2)$ 이고 점 $(3,\,-5)$ 를 지나는 포물선을 그래프로 하는 이차함수의 식(그림).
  category: "꼭짓점 (0,q) → y=ax^2+q → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 식 구하기; $y=ax^2+q$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    173-h3 의 짝 문항이고 꼭짓점이 x축 아래·$a<0$ 이라 위로 볼록이라는 점만 다르다.
    $-5=9a-2$ 에서 $9a=-3$ — 상수항을 옮기는 부호를 놓치면 $a$ 의 부호가 통째로 뒤집힌다(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (0,-2) → y=ax^2-2 → (3,-5) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{3}x^2-2$'
  answer_source: "답지"
  figure: crop:fig-173-c3.png
  latex: latex-bank/gn-m31/items/173-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 y 좌표와 지나는 점을 바꿀 수 있다. 제약: 위로 볼록을 유지하려면 지나는 점이 꼭짓점보다 아래여야 하고, (x)^2 이 (y-q) 를 나누어떨어지게 두면 a 가 깔끔하다."
    creative: "(1) 꼭짓점과 지나는 점을 모두 x축 아래로 두어 사분면 판정을 덧붙이기(★3 · I-RT d1) (2) 그림 없이 좌표만 주면 난도 변화 없음(★2) (3) 두 점만 주고 「y축 대칭」 조건에서 꼭짓점을 스스로 찾게 하면 ★3(I-SYM d1)."
```

```yaml
- id: GN-M31-173-h4
  page: 173
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-2x^2$ 를 $x$ 축 방향으로 4 만큼 평행이동한 그래프의 꼭짓점을 $(p,\,q)$, 축을 $x=m$ 이라 할 때 $p+q+m$.
  category: "x축 평행이동 → 꼭짓점·축 읽기 → 세 값의 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프 — 꼭짓점·축을 문자로 두고 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동식 → 꼭짓점·축 읽기 → 합, 세 단계지만 쓰는 도구는 「x 를 x-p 로」 하나뿐이다.
    $q=0$ 을 빠뜨리거나 축 $x=4$ 에서 $m$ 을 0 으로 읽는 표기 혼동(T-표기)이 함정이고, 계수 $-2$ 는 답에 전혀 쓰이지 않는 미끼다.
    핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=-2(x-4)^2 → 꼭짓점 (4,0)·축 x=4 → p+q+m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/173-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량과 이차항 계수를 자유롭게 바꿀 수 있다. 제약: x축 이동만 쓰면 p=m·q=0 이라 합이 항상 2×(이동량)이다 — 세 값이 서로 다르게 하려면 y축 이동을 섞어야(다음 단원) 한다."
    creative: "(1) y축 방향 이동으로 바꾸면 p=m=0 이라 오히려 쉬워진다(★1~2) (2) p·q·m 대신 꼭짓점이 놓인 축·사분면을 묻기(★2 · I-RT d1) (3) 이동 후 그래프가 지나는 점을 붙이면 173-c4 골조."
```

```yaml
- id: GN-M31-173-c4
  page: 173
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=\dfrac{1}{5}x^2$ 를 $x$ 축 방향으로 $-6$ 만큼 평행이동한 그래프가 점 $(-1,\,k)$ 를 지날 때 $k$.
  category: "x축 평행이동 → 점 대입 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프 — 평행이동 후 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「$-6$ 이동 → $(x+6)^2$」 부호 규칙과 대입 두 단계로, 172-h1 의 x축 판이다.
    $(x+6)$ 을 $(x-6)$ 으로 쓰는 실수가 이 단원의 대표 오답(T-부호)이고, 대입값이 $(-1+6)^2=25$ 로 계수의 분모와 맞아떨어지게 설계돼 있다.
    확인문제 구역 ★2 출발 · 통찰 0 · M_total 4 → 구역 하한을 지켜 ★2.
  tier: star_2
  mechanism_primary: "y=1/5(x+6)^2 → x=-1 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/173-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1/5 · 이동량 -6 · 대입 x=-1 을 바꿀 수 있다. 제약: (x-p)^2 이 분모의 배수가 되어야 k 가 정수로 떨어진다."
    creative: "(1) k 를 주고 이동량을 되묻게 하면 제곱근 두 값이 생겨 ★3(175-03 골조) (2) 이동 전·후 그래프의 같은 x 에서의 y 차이를 묻기(★3) (3) 꼭짓점만 묻는 단답형이면 ★1."
```

```yaml
- id: GN-M31-174-h5
  page: 174
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=3(x+1)^2$ 의 그래프에 대한 설명으로 옳은 것 고르기(꼭짓점·축·사분면·평행이동·증감 5지).
  category: "꼭짓점 (-1,0)·개형 → 사분면·증감 판정 → 옳은 선지"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "③ 지나는 사분면은 식만으로는 안 나오고 꼭짓점 (-1,0)·아래로 볼록 개형을 그려 제1·2사분면임을 확인해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프의 성질(사분면 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②④⑤ 는 $p=-1$ 과 $a=3$ 에서 바로 판정되지만 정답 ③ 은 개형을 그려 x축 위 두 사분면을 확인해야 한다(I-RT d1).
    $(x+1)^2$ 에서 $p$ 를 $+1$ 로 읽는 부호 실수(T-부호)와 축의 방정식 표기(T-표기)가 함정 둘.
    핵심문제 구역 ★2 · 통찰 1(d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (-1,0)·아래로 볼록 → 선지 판정 → 제1·2사분면(③)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/174-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 와 p 를 바꾸면 다섯 선지의 참·거짓이 통째로 바뀐다. 제약: 꼭짓점이 x축 위(q=0)라 지나는 사분면은 a 의 부호만으로 결정된다 — a<0 이면 제3·4사분면."
    creative: "(1) a<0 으로 뒤집으면 174-c5 처럼 증감 선지가 정답이 된다(★2) (2) 꼭짓점을 x축에서 떼면(다음 단원) 지나는 사분면이 셋이 되어 ★3 (3) 「옳은 것의 개수」를 묻는 꼴이면 전 선지 판정이 강제되어 ★3."
```

```yaml
- id: GN-M31-174-c5
  page: 174
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-\dfrac{3}{4}(x-2)^2$ 의 그래프에 대한 설명으로 옳지 않은 것 고르기(볼록·꼭짓점·축·평행이동·증감 5지).
  category: "a<0·꼭짓점 (2,0) → 축 기준 증감 판정 → 틀린 선지"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프의 성질(축 기준 증감)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사분면 선지가 없어 다섯 선지 모두 $a$ 의 부호와 $p$ 에서 바로 나온다. 정답 ⑤ 는 「위로 볼록에서 축 왼쪽은 증가 구간」이라는 표준 성질.
    위로 볼록의 증감을 아래로 볼록처럼 읽는 부호 실수(T-부호)와 증감 구간의 경계가 축 $x=2$ 라는 처리(T-경계)가 함정 둘.
    확인문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "위로 볼록·축 x=2 → x<2 는 증가 구간 → ⑤ 가 틀림"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/174-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 부호·크기와 p 를 바꿀 수 있다. 제약: 증감 선지의 부등식 경계는 항상 축 x=p 이므로 선지의 수를 p 와 일치시켜야 문제가 성립한다."
    creative: "(1) 사분면 선지를 넣으면 통찰형이 된다(★2 · I-RT d1) (2) 같은 축을 가진 다른 함수와의 폭 비교를 넣으면 |a| 비교 도구가 추가돼 ★3(175-04 골조) (3) 증감 구간만 묻는 단답형이면 ★1."
```

```yaml
- id: GN-M31-174-h6
  page: 174
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    꼭짓점이 $(-2,\,0)$ 이고 점 $(0,\,-4)$ 를 지나는 포물선을 그래프로 하는 이차함수의 식(그림).
  category: "꼭짓점 (p,0) → y=a(x-p)^2 → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 식 구하기; $y=a(x-p)^2$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 x축 위에 있으므로 식의 꼴이 $y=a(x-p)^2$ 로 정해지고 점 하나로 $a$ 가 나온다. 지나는 점이 y 절편이라 대입이 $4a=-4$ 한 줄.
    꼭짓점 $(-2,\,0)$ 을 $(x-2)^2$ 로 옮겨 쓰는 부호 실수(T-부호)가 대표 오답이다.
    핵심문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (-2,0) → y=a(x+2)^2 → (0,-4) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-(x+2)^2$'
  answer_source: "본문 답"
  figure: crop:fig-174-h6.png
  latex: latex-bank/gn-m31/items/174-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 x 좌표 p 와 지나는 점을 바꿀 수 있다. 제약: (지나는 점의 x - p)^2 이 y 좌표를 나누어떨어지게 해야 a 가 깔끔하다."
    creative: "(1) 지나는 점을 y절편이 아닌 곳으로 옮기면 계산만 한 겹 는다(★2 유지 · 174-c6) (2) 꼭짓점을 y축 위로 옮기면 173-h3 골조 (3) 식 대신 y절편이나 다른 점의 좌표를 묻기(★2)."
```

```yaml
- id: GN-M31-174-c6
  page: 174
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    꼭짓점이 $(3,\,0)$ 이고 점 $\left(7,\,\dfrac{16}{3}\right)$ 을 지나는 포물선을 그래프로 하는 이차함수의 식(그림).
  category: "꼭짓점 (p,0) → y=a(x-p)^2 → 점 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 식 구하기; $y=a(x-p)^2$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    174-h6 의 짝이고 지나는 점이 y축에서 떨어져 있어 $(7-3)^2=16$ 을 한 번 거치는 것만 다르다.
    $16a=\frac{16}{3}$ 의 분수 나눗셈이 유일한 계산 부담이고, 꼭짓점 $(3,\,0)$ 이므로 $(x-3)^2$ — 부호를 뒤집는 실수(T-부호)가 대표 오답.
    확인문제 구역 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (3,0) → y=a(x-3)^2 → (7,16/3) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{1}{3}(x-3)^2$'
  answer_source: "답지"
  figure: crop:fig-174-c6.png
  latex: latex-bank/gn-m31/items/174-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 x 좌표와 지나는 점을 바꿀 수 있다. 제약: 지나는 점의 x 를 p 에서 떨어뜨릴수록 (x-p)^2 이 커져 a 가 잔 분수가 되므로 차를 2~4 정도로 유지한다."
    creative: "(1) 지나는 점을 꼭짓점 왼쪽으로 옮겨 대칭을 이용하게 하면 ★2(I-SYM d1 맛보기) (2) a 를 주고 지나는 점을 되묻기(★2) (3) 그림에서 좌표를 직접 읽게 하면 175-05 골조(★3 · I-RT d2)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-175-01
  page: 175
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $y=-5x^2-8$ 은 $y=-5x^2$ 를 $y$ 축 방향으로 $a$ 만큼 평행이동한 것이고 꼭짓점이 $(p,\,q)$ 일 때 $a+p-q$.
  category: "이동량·꼭짓점 읽기 → 부호 맞춰 조합"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동량과 꼭짓점을 문자로 두고 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    읽어야 할 값 셋($a$·$p$·$q$)이 모두 상수항 $-8$ 에서 나오고 도구는 「y축 이동량 = 상수항」 하나뿐이다.
    $-q$ 자리에 $-8$ 을 그대로 넣어 $-16$ 을 만드는 부호 실수(T-부호)와 $p=0$ 을 빠뜨리는 누락(T-표기)이 함정.
    시험에 나온다 구역 ★2~3 출발 · 통찰 0 · M_total 6 → 구역 하한 ★2.
  tier: star_2
  mechanism_primary: "상수항에서 a=-8 · 꼭짓점 (0,-8) → p, q → a+p-q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/175-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 이차항 계수를 바꿀 수 있다. 제약: y축 이동에서는 늘 a=q·p=0 이라 a+p-q 는 항상 0 이다 — 답을 0 이 아니게 하려면 조합을 a+p+q 나 a-p+q 로 바꿔야 한다."
    creative: "(1) x축 이동으로 바꾸면 a=p·q=0 이라 값이 2a 가 된다(★2) (2) 이동량을 미지수로 두고 지나는 점을 함께 주면 ★3 (3) a+p-q 의 값을 주고 상수항을 되묻는 역방향(★3 · I-BW d1)."
```

```yaml
- id: GN-M31-175-02
  page: 175
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $y=\dfrac{1}{3}x^2+4$ 의 그래프에 대한 설명으로 옳은 것 모두 고르기(정답 2개 · 볼록·축·꼭짓점·증감·사분면).
  category: "개형 → 다섯 선지 전수 판정 → 옳은 것 둘"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑤ 「모든 사분면을 지난다」는 꼭짓점 (0,4) 가 x축 위라는 개형을 그려야 제1·2사분면뿐임이 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프의 성질(정답 2개 전수 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「모두 고르면」이라 하나를 찾고 멈출 수 없고 다섯 선지를 끝까지 판정해야 한다. ②③ 은 $q=4$ 를 축·꼭짓점의 x 좌표로 오해하게 만드는 미끼(T-표기).
    ⑤ 만 개형을 그려야 판정되는 자리라 I-RT d1 하나.
    시험에 나온다 구역 ★2~3 출발 · 통찰 1(d1) · M_total 6 → ★2. 도구는 172-h2 와 같고 판정 개수만 늘었다.
  tier: star_2
  mechanism_primary: "a>0·꼭짓점 (0,4) 개형 → 선지 다섯 개 전수 판정 → ①④"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/175-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 와 q 를 바꾸면 참인 선지 조합이 바뀐다. 제약: 정답이 정확히 2개가 되도록 선지를 재배치해야 하고, 축·꼭짓점 미끼 선지의 숫자는 q 와 같게 유지한다."
    creative: "(1) q<0 으로 두면 지나는 사분면이 넷이 되어 ⑤ 가 참이 된다(★2) (2) a<0 으로 두면 볼록·증감 선지가 함께 뒤집힌다(★2) (3) 「옳은 것의 개수」를 묻는 꼴이면 판정 누락이 바로 오답이 되어 ★3."
```

```yaml
- id: GN-M31-175-03
  page: 175
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $y=2x^2$ 를 $x$ 축 방향으로 $p$ 만큼 평행이동한 그래프가 점 $(2,\,18)$ 을 지날 때 $p$ 의 값을 모두 구하기.
  category: "이동식 세우기 → 대입 → 제곱 벗기기 → 두 값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(2-p)^2=9 에서 2-p=3 과 2-p=-3 두 경우가 모두 답이 되고 「모두 구하시오」가 그 분기를 강제함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동량 $p$ 를 역으로 구하기(제곱근 두 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 문항들이 「이동 → 대입 → 값」이었다면 이 문항은 「대입 → 제곱 벗기기 → 이동량 역추적」이고, 제곱을 벗기는 자리에서 값이 둘로 갈린다.
    한쪽 부호만 쓰고 끝내는 것이 대표 오답이라 분기 자체가 문제의 본체다(I-MI d1 · T-부호).
    시험에 나온다 구역 ★2~3 출발 · 통찰 1 · M_total 7 → ★3.
    [분류 이슈] 중3 기본 골조인데 §3.3 에서 I-MI 가 중위권 허용 목록에 없어 대상층이 중상위권으로 밀린다.
  tier: star_3
  mechanism_primary: "y=2(x-p)^2 → (2,18) 대입 → (2-p)^2=9 → 2-p=±3 → p 두 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$, $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/175-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 지나는 점 (2,18) 을 바꿀 수 있다. 제약: (지나는 점의 y)/(계수)가 완전제곱수여야 p 가 정수 둘로 떨어진다(18/2=9)."
    creative: "(1) 완전제곱수가 아니게 두면 무리수 두 값이 되어 중3 범위를 벗어난다 (2) 「p 는 양수」 조건을 붙이면 분기가 사라져 ★2 (3) y축 방향 이동으로 바꾸면 q 가 하나로 정해져 ★2 — 분기는 x축 이동에서만 생긴다."
```

```yaml
- id: GN-M31-175-04
  page: 175
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $y=-(x+3)^2$ 의 그래프에 대한 설명으로 옳지 않은 것 고르기(꼭짓점·축·폭 비교·사분면·증감 5지).
  category: "개형 + |a| 폭 비교 → 사분면 판정 → 틀린 선지"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "④ 지나는 사분면은 꼭짓점 (-3,0)·위로 볼록 개형을 그려 x축 아래 두 사분면임을 확인해야 판정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프의 성질(폭 비교·사분면 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ③ 의 폭 비교($|-1|<|-2|$ → 폭이 넓다)는 앞 문항들에 없던 도구가 하나 더 들어온 자리이고, 정답 ④ 는 개형을 그려 사분면을 확인해야 한다(I-RT d1).
    $(x+3)^2$ 에서 꼭짓점을 $(3,\,0)$ 으로 읽는 부호 실수(T-부호)와 「폭이 넓다」를 $|a|$ 가 크다로 뒤집는 오해(T-표기)가 함정.
    시험에 나온다 구역 ★2~3 · 통찰 1(d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (-3,0)·위로 볼록 → |a| 폭 비교·사분면 판정 → ④ 가 틀림"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/175-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a·p 와 비교 대상 함수의 계수를 바꿀 수 있다. 제약: 폭 선지가 참이 되려면 |a| < |비교 계수| 여야 하고, 꼭짓점이 x축 위(q=0)라 사분면은 a 의 부호로만 결정된다."
    creative: "(1) 비교 대상을 |a| 가 더 작은 함수로 바꾸면 폭 선지가 정답이 된다(★2) (2) 세 함수의 폭을 정렬하게 하면 ★3 (3) 꼭짓점을 x축에서 떼면 지나는 사분면이 셋이 되어 ★3."
```

```yaml
- id: GN-M31-175-05
  page: 175
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    그림의 포물선(꼭짓점 $(4,\,0)$ · $y$ 절편 $-8$) 위에 있는 점의 좌표 고르기(5지).
  category: "그림에서 식 복원 → 선지 좌표 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 주어지지 않고 그림의 꼭짓점 (4,0)과 y 절편 -8 만 있어 기하 정보를 y=a(x-4)^2 로 옮겨 a 를 정해야 풀이가 시작됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 이차함수의 식을 복원해 지나는 점 판정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 식 구하기 문항들과 달리 좌표가 발문에 없고 그림에서만 읽힌다 — 기하 → 대수 전환이 풀이의 관문이다(I-RT d2).
    식을 세운 뒤에는 선지를 대입해 보는 절차이지만 분수 계수 때문에 대입 계산이 가볍지 않다.
    그림의 4 를 x 절편으로, $-8$ 을 꼭짓점의 y 좌표로 읽는 오해(T-표기)가 함정.
    시험에 나온다 구역 ★2~3 출발 · 통찰 1(d2) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "그림의 꼭짓점 (4,0)·y절편 -8 → y=a(x-4)^2 의 a 결정 → 선지 좌표 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-175-05.png
  latex: latex-bank/gn-m31/items/175-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 x 좌표와 y 절편을 바꿀 수 있다. 제약: (y절편)/(꼭짓점 x좌표)^2 이 깔끔한 분수여야 하고, 그림의 눈금 라벨(4 · -8)이 고정이라 숫자를 바꾸면 크롭도 다시 만들어야 한다."
    creative: "(1) 식을 직접 구하게 하면 174-h6 골조(★2) (2) 선지를 모두 그래프 근처 값으로 채우면 대입 부담만 커진다(질 저하 · YELLOW) (3) 그림에 포물선을 둘 그려 교점이나 위아래 관계를 묻게 하면 ★4 급."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 15 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 15 · premium 0
- 구역별: 「개념원리 확인하기」 4(★1 4) · 「핵심문제 익히기」 12(★2 12) · 「이런 문제가 시험에 나온다」 5(★2 3 · ★3 2)
- 통찰 유형: **I-RT 5**(172-c2 · 174-h5 · 175-02 · 175-04 각 d1 · 175-05 d2) · **I-MI 1**(175-03 d1). I-XU·I-SC·I-VF·I-SYM 은 하나도 없어 ★4·★5 자격 문항이 없다.
- type_hint 상위: 「그래프의 성질(선지 판정)」 6(y=ax²+q 3 · y=a(x-p)² 3) · 「이차함수의 식 구하기」 4(y=ax²+q 2 · y=a(x-p)² 2) · 「평행이동 후 지나는 점」 3 · 「평행이동한 그래프의 식·꼭짓점·축」 2 · 「그래프 그리기와 꼭짓점·축」 2
- 그림: 7문(`crop:fig-171-01-2.png` · `crop:fig-171-03-2.png` · `crop:fig-173-h3.png` · `crop:fig-173-c3.png` · `crop:fig-174-h6.png` · `crop:fig-174-c6.png` · `crop:fig-175-05.png`). 이 중 판정에 실제로 필요한 그림은 식이 그림에만 있는 175-05 하나다.
- 대상층: 하위권 4 · 중하위권 11 · 중위권 5 · 중상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-171-01 | ⑴ 의 답이 「풀이 참조」(작도)라 판정 대상이 사실상 ⑵ 뿐이다. M·★ 는 ⑵ 기준으로 매겼다 | ★1 |
| GN-M31-171-03 | 171-01 과 같은 사유(⑴ 작도 · 판정은 ⑵ 기준) | ★1 |
| GN-M31-172-h1 | 핵심문제 구역(★2)이나 통찰 0 · M_total 4 로 v3.8 의 −1 후보. 171-02 + 대입 한 줄이라 실질은 ★1 에 가깝다. 구역 하한을 지켜 ★2 로 두고 기록 | ★1 / ★2 |
| GN-M31-173-c4 | 172-h1 과 같은 사유(M_total 4 · 통찰 0 이나 확인문제 구역 하한 ★2) | ★1 / ★2 |
| GN-M31-175-03 | 중3 기본 골조인데 통찰이 I-MI 라 §3.3 의 중위권 허용 목록(I-RT·I-EQV·I-BW)에 걸려 대상층이 중상위권으로 밀린다. 카탈로그 설계 때 「제곱근 두 값 분기」를 중위권 허용으로 볼지 결정 필요 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 여섯 갈래 + 단독 1문이다. ① 그래프 그리기와 꼭짓점·축 2문 ② 평행이동한 식·꼭짓점·축 2문 ③ 평행이동 후 지나는 점·미정계수 3문 ④ 그래프의 성질 선지 판정 6문 ⑤ 그래프에서 식 구하기 5문(그림 복원 포함) ⑥ 꼭짓점·이동량을 문자로 두고 식의 값 2문 · 그리고 역방향 이동량 1문(175-03).
- **따로 세워야 할 유형 — 「평행이동량을 역으로 구하기」(175-03)**: ③ 과 도구는 같지만 방향이 역이고 제곱을 벗기는 자리에서 값이 둘로 갈린다. ③ 에 흡수하면 이 범위의 유일한 분기형 ★3 슬롯이 사라진다.
- **따로 세워야 할 유형 — 「그래프에서 식 복원」(175-05)**: ⑤ 의 나머지 4문은 좌표가 발문에 있고 그림은 보조지만, 175-05 는 그림이 유일한 조건 원천이라 I-RT depth 가 한 단 높다.
- **따로 세워야 할 유형 — 「사분면 판정이 포함된 선지형」(172-c2 · 174-h5 · 175-02 · 175-04)**: 같은 선지형이라도 사분면 선지가 있으면 개형을 그려야 해서 통찰형이 되고, 없으면(172-h2 · 174-c5) 절차형이다. base ★ 는 같아도 카탈로그에서는 변별 슬롯 자격이 갈린다.
- **통합해도 될 유형 — $y=ax^2+q$ 판과 $y=a(x-p)^2$ 판**: 이 단원은 같은 골조가 y축 판·x축 판으로 두 벌씩 반복된다(171-02/171-04 · 172-h1/173-c4 · 172-h2/174-h5 · 173-h3/174-h6). 한 유형에 「이동 축」 파라미터를 두고 묶는 편이 낫다 — 다만 x축 판은 부호 함정이 한 겹 더 있어 계산 부담이 아니라 오답률이 다르다는 점을 메모에 남긴다.
- **h/c 짝 구조**: 핵심문제(h)와 짝 확인문제(c)가 같은 유형의 쌍이라 type_hint 가 항상 둘씩 나온다. 카탈로그에서는 한 유형에 대표문항 2개(h·c)를 묶는 편이 자연스럽다.
