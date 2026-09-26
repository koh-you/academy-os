---
name: mechanism-데이터-GN-CALC1-12
description: 개념원리 미적분Ⅰ 12 함수의 증가와 감소(1/1 · 105~107쪽 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 12 함수의 증가와 감소
  unit_code: GN-CALC1-12
  part: "1/1"
  extract_range: "105~107쪽 · 105-e10~107-211"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 1문 · fig-107-209.png)
---

# 개념원리 미적분Ⅰ · 12 함수의 증가와 감소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 12단원 「함수의 증가와 감소」 105~107쪽 14문항 전수를 다룬다. 구역은 「필수·발전 예제」(105-e10~106-205 · 필수 예제 3문 + 확인체크 5문) · 「연습문제 STEP 1」(3문) · 「연습문제 STEP 2」(2문) · 「연습문제 실력 UP」(1문)의 넷이다. 개념원리 고등의 벤더 난이도 신호는 구역과 태그로 나타난다 — tag 「확인체크」는 개념 확인이라 ★1, 「필수」 예제는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 가 출발점이고, 여기서 M_total·통찰로 ±1 조정했다.

이 범위의 골조는 크게 셋으로 갈린다. (가) **f' 의 부호표로 증감 구간을 읽는 절차형**(105-e10 · 105-201 · 105-202), (나) **증감 조건을 f' 의 부호 조건으로 옮기는 동치 변환형** — 실수 전체이면 판별식(106-e11 · 106-204 · 107-207 · 107-210), 구간이 제한되면 그 구간 안 f' 의 최대·최소(106-e12 · 106-205 · 107-208), (다) **증감 구간이 먼저 주어지고 계수를 역추적하는 역방향형**(105-203 · 107-206). 여기에 도함수 그래프를 읽는 보기형(107-209)과 접선의 y절편을 새 함수로 세우는 실력 UP 한 문항(107-211)이 붙는다. 「실수 전체」와 「제한된 구간」의 조건이 판별식이냐 끝점 값이냐로 갈리는 지점이 이 단원의 실질 변별점이라, 그 판단이 들어간 문항에는 통찰 depth 2 를 주었다.

소문항(⑴~⑵)이 있는 문항의 Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다. 같은 골조의 반복(부호표 두 번)은 1단계로 보고, 부호 조건이 뒤집히는 소문항이 섞이면 Mₜ 로 반영했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-105-e10
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 삼차함수 $f(x)=x^3-3x$ 와 사차함수 $f(x)=x^4-4x^3+2$ 의 증가·감소를 조사.
  category: "도함수의 부호 → 증가·감소 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 증가·감소 구간 조사(f' 부호표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) 를 인수분해해 부호표 한 장을 그리면 끝나는 단원 도입 골조. ⑵ 는 f'(x)=4x^2(x-3) 이라 x=0 이 중근이어서 부호가 바뀌지 않는다는 것만 확인하면 된다(T-부호). 통찰 라벨이 붙는 단계가 없어 절차형이고 M_total 5 지만, 사차 중근 처리까지 포함하므로 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "f'(x) 인수분해 → f'=0 의 근으로 부호표 → f'>0 구간 증가 · f'<0 구간 감소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(-\infty,\,-1]$, $[1,\,\infty)$에서 증가, 구간 $[-1,\,1]$에서 감소 ⑵ 구간 $[3,\,\infty)$에서 증가, 구간 $(-\infty,\,3]$에서 감소'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/105-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 -3x 계수와 ⑵ 의 -4x^3 계수·상수항을 바꿀 수 있음. 제약: f'=0 의 근이 유리수로 떨어져야 하고 구간 표기가 닫힌구간·무한구간으로 깔끔해야 한다. ⑵ 는 x^2 인수(중근)를 유지해야 「부호가 바뀌지 않는 근」이라는 학습 목표가 남는다."
    creative: "(1) 증가하는 구간의 길이를 묻기(★2 유지) (2) 최고차계수를 음수로 바꿔 증감이 뒤집히게 하기(T-부호 1개 추가 · ★2 유지) (3) 계수를 매개변수로 두고 증가 구간이 주어지도록 하면 역방향 → ★3."
```

```yaml
- id: GN-CALC1-105-201
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ $f(x)=2x^3-3x^2-36x+1$ 과 $f(x)=-x^4+2x^2+2$ 의 증가·감소를 조사.
  category: "도함수의 부호 → 증가·감소 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 증가·감소 구간 조사(f' 부호표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제의 쌍둥이. ⑴ 은 f'=6(x+2)(x-3), ⑵ 는 f'=-4x(x+1)(x-1) 로 부호표만 그리면 된다. ⑵ 는 최고차계수가 음수라 바깥 구간이 감소로 뒤집히고 근이 셋이라 부호표 칸이 넷으로 늘어난다(T-부호). 확인체크는 ★1 출발이지만 골조와 노동량이 직전 필수 예제와 같아 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "f'(x) 인수분해 → 두·세 근으로 부호표 → 증가·감소 구간"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(-\infty,\,-2]$, $[3,\,\infty)$에서 증가, 구간 $[-2,\,3]$에서 감소 ⑵ 구간 $(-\infty,\,-1]$, $[0,\,1]$에서 증가, 구간 $[-1,\,0]$, $[1,\,\infty)$에서 감소'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/105-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 (2,-3,-36) 을 f'=6(x-p)(x-q) 가 정수 근을 갖도록 하는 조합으로, ⑵ 의 2x^2 계수를 다른 양수로 바꿀 수 있음. 제약: ⑵ 는 복이차식이라 f' 의 세 근이 0 과 ±r 로 대칭이어야 답의 구간 네 개 꼴이 유지된다."
    creative: "(1) 감소하는 구간의 개수를 묻기(★2 유지) (2) ⑵ 를 x^4-2x^2 꼴로 바꿔 최고차 부호를 뒤집기(★2 유지) (3) 두 함수의 증가 구간의 교집합을 묻기(조건 결합 1단계 추가 → ★3)."
```

```yaml
- id: GN-CALC1-105-202
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=-x^3-3x^2+9x+5$ 가 증가하는 구간이 $[\alpha,\,\beta]$ 일 때 $\beta-\alpha$ 의 값.
  category: "증가 구간의 양 끝 → 구간의 길이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "증가(감소) 구간이 주어졌을 때의 구간 길이·끝점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-3(x+3)(x-1) 의 부호가 양인 구간이 곧 증가 구간이므로 두 근의 차가 답이다. 최고차계수가 음수여서 증가 구간이 두 근 사이로 뒤집히는 것(T-부호)이 유일한 함정. 통찰 단계는 없고 M_total 5 지만 부호표 뒤에 「구간의 길이」 한 단계를 더 요구해 확인체크 출발점에서 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "f'(x)=-3(x+3)(x-1) → f'>0 인 구간 [-3,1] → β-α"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/105-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차항 계수를 f' 의 두 근이 정수가 되는 조합으로 바꿀 수 있음(예: -x^3+3x^2+9x). 제약: 최고차계수 부호를 음수로 유지해야 「증가 구간이 유계」라는 발문이 성립한다."
    creative: "(1) α·β 각각이나 αβ 를 묻기(★2 유지) (2) 최고차계수를 양수로 바꿔 「감소하는 구간」으로 묻기(★2 유지) (3) 계수 하나를 미지수로 두고 β-α 값을 주면 역방향 → ★3."
```

```yaml
- id: GN-CALC1-105-203
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=4x^3+ax^2-bx+1$ 이 $x\le -1$ 또는 $x\ge 2$ 에서 증가하고 $-1\le x\le 2$ 에서 감소할 때 $a+b$ 의 값.
  category: "증감 구간의 경계 → f'=0 의 근 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "증감이 바뀌는 경계 -1, 2 가 곧 f'(x)=0 의 두 근임을 결과 조건에서 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "증가·감소 구간으로부터 계수 결정(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증감이 갈리는 두 경계가 f'(x)=12x^2+2ax-b 의 두 근이라는 역방향 착안 한 단계(BW d1) 뒤에는 근과 계수의 관계 대입뿐이다. 매개변수 두 개라 Mₐ 2·M_total 7 이지만 통찰이 1개 d1 이어서 확인체크 출발점에서 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "증감 경계 -1, 2 = f'=0 의 두 근 → 근과 계수의 관계로 a, b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/105-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 두 값(-1, 2)과 최고차계수 4 를 바꿀 수 있음. 제약: 근의 합·곱이 f' 의 계수와 맞물려 a, b 가 정수로 떨어져야 하고, 발문의 -bx 표기 때문에 b 의 부호가 뒤집히는 것에 주의."
    creative: "(1) a+b 대신 ab 나 f(1) 을 묻기(★2 유지) (2) 경계를 한 쪽만 주고 나머지를 미지수로 두면 조건이 하나 모자라 케이스 분기 → ★3 (3) 증가·감소를 서로 바꿔 최고차계수의 부호까지 결정하게 하면 T-부호 추가 → ★3."
```

```yaml
- id: GN-CALC1-106-e11
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=x^3-ax^2+ax$ 가 실수 전체의 집합에서 증가하도록 하는 실수 $a$ 의 값의 범위.
  category: "전 구간 증가 조건 → f' 의 판별식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「실수 전체에서 증가」를 「모든 x 에서 f'(x)≥0」, 다시 「f' 의 판별식 ≤0」으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)할 조건 → f' 의 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증가 조건을 도함수의 부호 조건으로 옮기는 동치 변환 한 단계(EQV d1)가 전부이고 그 뒤는 D/4=a^2-3a≤0 계산이다. f'(x)>0 이 아니라 ≥0 이어야 한다는 등호 포함(T-경계)이 유일한 함정. 필수 예제 출발점 ★2 를 그대로 두었다.
  tier: star_2
  mechanism_primary: "실수 전체 증가 ⟺ f'(x)=3x^2-2ax+a≥0 (모든 x) ⟺ D/4≤0 → a 의 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0\le a\le 3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/106-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ax^2 와 ax 의 자리에 들어가는 a 의 계수를 바꿀 수 있음(예: x^3-ax^2+3ax). 제약: 판별식이 a 에 대한 이차부등식으로 정리돼 양 끝이 유리수로 떨어져야 하고, 최고차계수가 양수여야 「증가」 조건이 성립한다."
    creative: "(1) 감소 조건으로 바꾸려면 최고차계수를 음수로(★2 유지) (2) 구간을 [0,2] 등으로 제한하면 판별식이 아니라 끝점 비교로 골조가 바뀌어 ★3 (3) a 의 정수 개수나 최댓값을 묻기(경계 포함 판단 추가 · ★2~3)."
```

```yaml
- id: GN-CALC1-106-e12
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=x^3-3x^2+ax+1$ 이 구간 $[0,\,3]$ 에서 감소하도록 하는 실수 $a$ 의 값의 범위.
  category: "제한된 구간의 감소 조건 → 구간 안 f' 의 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 제한돼 판별식을 쓸 수 없으므로 「[0,3] 에서 f'(x)≤0」을 「그 구간에서 f' 의 최댓값 ≤0」으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)할 조건 → 구간 안 f' 의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    실수 전체가 아니라 [0,3] 이라 판별식 조건이 통하지 않는다. f'(x)=3x^2-6x+a 가 아래로 볼록이므로 구간의 최댓값이 양 끝 중 하나(여기서는 f'(3))라는 판단이 실질 단계다(EQV d2). 판별식으로 접근하면 필요 이상으로 좁은 답이 나온다. M_total 7 과 구간 제한 판단으로 필수 예제 ★2 출발에서 ★3 으로 올렸다.
  tier: star_3
  mechanism_primary: "[0,3] 감소 ⟺ 구간 안 f'(x)≤0 ⟺ 아래로 볼록한 f' 의 끝점 최댓값 f'(3)≤0 → a 의 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le -9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/106-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [0,3] 의 양 끝과 -3x^2 의 계수를 바꿀 수 있음. 제약: f' 의 축 x=1 이 구간 안에 있어야 「최댓값은 먼 쪽 끝점」이라는 판단이 살아 있고, 축이 구간 밖으로 나가면 106-205 꼴(최솟값 한쪽 끝)로 유형이 바뀐다."
    creative: "(1) 증가 조건으로 바꿔 최솟값 비교로 뒤집기(★3 유지) (2) 구간의 한 끝을 미지수로 두고 a 를 고정하면 역방향 → ★4 (3) 구간을 실수 전체로 되돌리면 판별식 골조라 ★2 로 내려간다."
```

```yaml
- id: GN-CALC1-106-204
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ $f(x)=\dfrac{1}{3}x^3+ax^2+(5a-4)x+2$ 가 실수 전체에서 증가할 $a$ 의 범위, $f(x)=-x^3+ax^2-12x-1$ 이 실수 전체에서 감소할 $a$ 의 범위.
  category: "전 구간 증가·감소 조건 → f' 의 판별식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전 구간 증가(감소)를 f' 의 부호가 일정할 조건, 즉 판별식 ≤0 으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)할 조건 → f' 의 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 의 쌍둥이 두 문항. ⑴ 은 f'≥0, ⑵ 는 최고차계수가 음수라 f'≤0 으로 부등호가 뒤집히는 것(T-부호)만 다르고 둘 다 D/4≤0 한 줄로 끝난다. 통찰은 같은 EQV d1 하나이고 M_total 7 이라 확인체크 출발점에서 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "전 구간 증가(감소) ⟺ f' 의 부호 일정 ⟺ D/4≤0 → a 의 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1\le a\le 4$ ⑵ $-6\le a\le 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/106-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 (5a-4) 와 ⑵ 의 -12 를 바꿀 수 있음. 제약: 판별식이 a 의 이차부등식으로 정리돼 근이 유리수여야 하고, ⑵ 는 최고차계수가 음수여야 「감소」 발문이 성립한다."
    creative: "(1) a 의 정수 개수를 묻기(경계 포함 판단 추가 · ★2 유지) (2) ⑴⑵ 의 답 구간의 교집합을 묻기(조건 결합 1단계 → ★3) (3) 구간을 제한하면 끝점 비교 골조로 바뀌어 ★3."
```

```yaml
- id: GN-CALC1-106-205
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{1}{3}x^3+2x^2+ax$ 가 구간 $[-1,\,1]$ 에서 증가하도록 하는 실수 $a$ 의 최솟값.
  category: "제한된 구간의 증가 조건 → 구간 안 f' 의 최솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「[-1,1] 에서 증가」를 구간 안 f' 의 최솟값 ≥0 으로 옮기고, 축 x=-2 가 구간 밖이라 최솟값이 왼쪽 끝 f'(-1) 임을 판단"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)할 조건 → 구간 안 f' 의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e12 와 같은 구간 제한형의 최솟값판. f'=x^2+4x+a 의 축 x=-2 가 구간 왼쪽 밖이라 [-1,1] 에서 f' 가 증가하고 최솟값이 왼쪽 끝 f'(-1) 이라는 판단이 핵심이다(EQV d2). 축의 위치를 확인하지 않고 판별식으로 가면 답이 달라진다. [분류 이슈] 벤더 신호는 확인체크(★1 출발)이지만 골조가 필수 예제 e12 와 같아 ★3 으로 두었다 — 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: "[-1,1] 증가 ⟺ 구간 안 f'≥0 ⟺ 축이 구간 왼쪽 밖 → f'(-1)≥0 → a 의 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/106-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x^2 의 계수(=f' 의 축 위치)와 구간 [-1,1] 의 양 끝을 바꿀 수 있음. 제약: 축이 구간 밖에 있어야 「끝점 하나만 확인」 골조가 유지된다. 축을 구간 안으로 옮기면 최솟값이 꼭짓점이 되어 판별식형으로 되돌아간다."
    creative: "(1) 감소 조건으로 바꿔 최댓값 비교로 뒤집기(★3 유지) (2) 축이 구간 안이 되도록 계수를 잡아 꼭짓점·끝점 중 어느 쪽인지 따지게 하면 케이스 분기 추가 → ★4 (3) a 의 최솟값 대신 정수 a 의 개수를 묻기(★3 유지)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-107-206
  page: 107
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=2x^3+ax^2+bx-1$ 이 감소하는 구간이 $[1,\,5]$ 일 때 $a+b$ 의 값.
  category: "감소 구간의 양 끝 → f'=0 의 근 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "감소 구간의 두 끝 1, 5 가 f'(x)=0 의 두 근이라는 것을 결과 조건에서 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "증가·감소 구간으로부터 계수 결정(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    105-203 과 같은 역방향 골조다. f'(x)=6x^2+2ax+b 의 두 근이 1, 5 이고 최고차계수가 양수라 감소 구간이 두 근 사이라는 것만 확인하면 근과 계수의 관계 대입으로 끝난다(BW d1). M_total 7·통찰 1개 d1 이라 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "감소 구간의 끝 1, 5 = f'=0 의 두 근 → 근과 계수의 관계로 a, b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/107-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝(1, 5)과 최고차계수 2 를 바꿀 수 있음. 제약: 근의 합·곱에 최고차계수가 곱해지므로 a, b 가 정수로 떨어지는 조합을 골라야 한다."
    creative: "(1) a+b 대신 f 의 극댓값·극솟값의 차를 묻기(계산 1단계 추가 · ★2~3) (2) 감소 구간의 길이만 주고 계수 하나를 미지수로 남기면 케이스 분기 → ★3 (3) 최고차계수까지 미지수로 두면 조건이 하나 더 필요해 ★3."
```

```yaml
- id: GN-CALC1-107-207
  page: 107
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+ax^2-(a^2-8a)x+3$ 이 실수 전체의 집합에서 증가하도록 하는 실수 $a$ 의 최댓값.
  category: "전 구간 증가 조건 → f' 의 판별식 → a 의 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「실수 전체에서 증가」를 「모든 x 에서 f'(x)≥0」, 곧 f' 의 판별식 ≤0 으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)할 조건 → f' 의 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 골조 그대로이고, 판별식 D/4=4a^2-24a≤0 이 a 에 대한 이차부등식으로 나와 범위의 오른쪽 끝을 답으로 읽는 것만 다르다. 「수능 기출」 태그는 +0~1 이지만 통찰이 표준 EQV 1개 d1 뿐이라 가산 없이 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "전 구간 증가 ⟺ f'(x)≥0 (모든 x) ⟺ D/4=4a^2-24a≤0 → a 범위의 최댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/107-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항의 -(a^2-8a) 에서 8 과 ax^2 의 계수를 바꿀 수 있음. 제약: 판별식이 a 의 이차부등식으로 정리되고 두 근이 유리수여야 최댓값·최솟값을 깔끔히 읽을 수 있다."
    creative: "(1) 정수 a 의 개수를 묻기(107-210 과 같은 마무리 · ★2~3) (2) 구간을 제한해 끝점 비교로 바꾸면 ★3 (3) 「증가한다」 대신 「역함수가 존재한다」로 포장하면 동치 변환이 한 겹 늘어 ★3(107-210 꼴)."
```

```yaml
- id: GN-CALC1-107-208
  page: 107
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+6x^2+ax-2$ 와 구간 $[-3,\,1]$ 의 임의의 두 실수 $x_1<x_2$ 에 대하여 $f(x_1)>f(x_2)$ 가 성립할 때 실수 $a$ 의 값의 범위.
  category: "감소의 정의 서술 → 구간 감소 조건 → 구간 안 f' 의 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x_1<x_2 이면 f(x_1)>f(x_2) 라는 정의 그대로의 서술을 「구간 [-3,1] 에서 감소」로 번역"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간 감소 조건을 구간 안 f' 의 최댓값 ≤0 으로 옮기고, 축이 구간 안이라 먼 쪽 끝 f'(1) 이 최댓값임을 판단"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)할 조건 → 구간 안 f' 의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    감소의 정의를 풀어 쓴 발문을 「[-3,1] 에서 감소」로 옮기는 단계(EQV d1)와, 그 조건을 구간 안 f' 의 최댓값 ≤0 으로 옮기는 단계(EQV d2)가 겹친다. f'(x)=3x^2+12x+a 의 축 x=-2 가 구간 안이라 최댓값은 먼 쪽 끝 f'(1) 이고 f'(-3) 조건은 약해서 버려진다(T-범위·T-경계). 통찰 2개·M_total 8 로 STEP 1 ★2 출발에서 ★3 으로 올렸다.
  tier: star_3
  mechanism_primary: "정의 서술 → [-3,1] 감소 ⟺ 구간 안 f'≤0 ⟺ 먼 쪽 끝 f'(1)≤0 → a 의 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le -15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/107-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6x^2 의 계수(=f' 의 축)와 구간 [-3,1] 의 양 끝을 바꿀 수 있음. 제약: 축 x=-2 가 구간 안에 있어야 「두 끝 중 먼 쪽이 최댓값」이라는 판단이 살아 있고, 두 끝점 조건의 강약이 갈려야 오답 유도가 유지된다."
    creative: "(1) 부등호를 뒤집어 증가 조건으로(최솟값 비교 · ★3 유지) (2) 구간을 실수 전체로 바꾸면 판별식형이라 ★2 로 내려감 (3) 정의 서술 대신 「역함수가 구간에서 존재」로 포장하면 동치 변환이 한 겹 늘어 ★4 후보."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-107-209
  page: 107
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 함수의 도함수 $y=f'(x)$ 의 그래프가 주어졌을 때, 세 구간 $(-5,-4)$, $(-2,-1)$, $(0,1)$ 에서의 $f$ 의 증가·감소를 말한 보기 ㄱ·ㄴ·ㄷ 중 옳은 것을 모두 고르기.
  category: "도함수 그래프의 부호 → f 의 증가·감소 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프가 x축 위인지 아래인지를 f 의 증가·감소로 옮기는 그래프↔증감 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 그래프로 함수의 증가·감소 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f' 그래프에서 축 위·아래만 읽으면 되지만, ㄱ 의 구간 (-5,-4) 안에 f' 의 부호가 바뀌는 점이 있어 「구간 전체에서」라는 조건이 깨진다(T-범위). ㄴ·ㄷ 는 각각 f'<0, f'>0 으로 부호가 일정해 참이다. 그래프↔증감 번역(RT d1) 한 단계에 구체 수식 없이 일반 함수만 주어져 Mₐ 3 이고, STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "f' 그래프의 x축 위·아래 → f 의 증가·감소, 각 보기 구간에서 부호가 일정한지 확인"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄴ, ㄷ'
  answer_source: "답지"
  figure: crop:fig-107-209.png
  latex: latex-bank/gn-calc1/items/107-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 세 구간의 양 끝을 그림의 영점 -4, -2, -1, 1 에 맞춰 옮길 수 있음. 제약: 그림의 영점과 축 라벨은 고정이므로 구간을 옮기면 참·거짓이 통째로 바뀐다. 보기 중 하나는 반드시 영점을 내부에 품게 두어 오답 유도를 유지한다."
    creative: "(1) 「f 가 극대가 되는 x 의 개수」를 묻기(부호 변화 방향까지 읽어야 함 · ★3 유지) (2) f' 그래프로 f 의 그래프 개형을 고르게 하면 번역이 한 겹 깊어져 ★4 후보 (3) 반대로 f 의 그래프를 주고 f' 의 부호를 묻는 역방향(BW 추가 · ★4)."
```

```yaml
- id: GN-CALC1-107-210
  page: 107
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=-x^3+kx^2-3kx-2$ 의 역함수가 존재하기 위한 정수 $k$ 의 개수.
  category: "역함수 존재 조건 → 단조성 → f' 의 판별식 → 정수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「역함수가 존재」를 「일대일」, 다시 「실수 전체에서 단조」로 옮기고 최고차계수가 음수라 감소 경우만 남는다고 판단"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수가 존재할 조건 → 삼차함수의 단조성(f' 의 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「역함수가 존재한다」를 「실수 전체에서 단조」로 옮기는 동치 변환이 문제의 전부다(EQV d2). 최고차계수가 -1 이라 증가는 불가능하고 f'(x)=-3x^2+2kx-3k≤0 만 남으며(T-부호), 그 뒤는 D/4=k^2-9k≤0 → 0≤k≤9 계산이다. 정수 개수를 셀 때 양 끝을 포함해야 한다(T-경계). STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "역함수 존재 ⟺ 일대일 ⟺ 실수 전체 감소 ⟺ f'≤0 (모든 x) ⟺ D/4≤0 → 정수 k 의 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/107-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "kx^2 와 -3kx 의 계수를 바꿀 수 있음. 제약: 판별식이 k 의 이차부등식이 되고 두 근이 정수여야 「정수의 개수」가 깔끔히 떨어진다. 최고차계수의 부호를 바꾸면 증가 쪽으로 골조가 뒤집힌다."
    creative: "(1) 개수 대신 k 의 최댓값·최솟값을 묻기(★3 유지) (2) 「그래프와 직선 y=m 의 교점이 항상 1개」로 포장하면 번역이 한 겹 늘어 ★4 후보 (3) 정의역을 구간으로 제한하면 끝점 비교형(107-208 꼴)과 결합돼 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-107-211
  page: 107
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=-x^3+(a-2)x^2-ax$ 위의 점 $(t,\,f(t))$ 에서의 접선의 $y$절편을 $g(t)$ 라 할 때, $g(t)$ 가 구간 $[-3,\,0]$ 에서 감소하도록 하는 실수 $a$ 의 최댓값.
  category: "접선의 y절편을 새 함수로 → 그 함수의 구간 감소 조건 → 계수 범위"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접선의 y절편이라는 기하량을 g(t)=f(t)-t f'(t) 라는 t 의 다항함수로 옮김(a 가 든 항이 상당 부분 상쇄된다)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 가 [-3,0] 에서 감소 ⟺ 그 구간의 모든 t 에서 g'(t)≤0 을, t≤0 에서 부등호 방향이 뒤집히는 것을 고려해 a 에 대한 조건의 최솟값으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 y절편 함수의 증가·감소로 계수 범위 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선을 세워 y절편을 g(t)=f(t)-t f'(t) 로 정리하면 a 가 든 항이 상쇄돼 g(t)=2t^3-(a-2)t^2 로 간단해진다(RT d2). 그 다음 g'(t)=6t^2-2(a-2)t 를 [-3,0] 에서 0 이하로 만들 때 t≤0 이라 부등호 방향이 뒤집히고(T-부호), 모든 t 에 대한 조건이므로 우변의 최솟값을 잡아야 한다(EQV d2, T-범위). 통찰 2개·M_total 10 으로 실력 UP 출발점 ★4 를 유지했고, SC/VF/SYM/XU 가 없어 ★5 로 올리지 않았다.
  tier: star_4
  mechanism_primary: "접선의 y절편 g(t)=f(t)-t f'(t)=2t^3-(a-2)t^2 → [-3,0] 에서 g'(t)≤0 → t 에 대한 부등식의 최솟값 → a 의 최댓값"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/107-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [-3,0] 의 왼쪽 끝과 f 의 x^2·x 계수에 든 a 의 배치를 바꿀 수 있음. 제약: g(t)=f(t)-t f'(t) 로 정리했을 때 a 가 남는 항이 하나뿐이어야 부등식이 a 에 대해 일차로 풀리고, 구간이 t≤0 쪽에 있어야 부호 뒤집힘 함정이 유지된다."
    creative: "(1) y절편 대신 접선의 x절편이나 기울기를 g(t) 로 두기(RT 골조 유지 · ★4) (2) 구간을 0 을 품는 [-1,1] 로 바꾸면 t 의 부호가 갈려 케이스 분기(I-MI 추가) → ★5 후보 (3) 「g 가 증가」로 뒤집고 a 의 최솟값을 묻기(★4 유지) (4) a 를 고정하고 구간의 끝을 미지수로 두면 역방향 ★5 후보."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 0 · ★2 8 · ★3 5 · ★4 1 · ★5 0
- 통찰형 11 · 절차형 3 · premium 0
- 통찰 유형 분포: I-EQV 8단계 · I-BW 2단계 · I-RT 2단계 (SC/VF/SYM/XU 없음 → ★5 없음)
- type_hint 상위: 「실수 전체에서 증가(감소)할 조건 → f' 의 판별식」 3 · 「주어진 구간에서 증가(감소)할 조건 → 구간 안 f' 의 최대·최소」 3 · 「다항함수의 증가·감소 구간 조사(f' 부호표)」 2 · 「증가·감소 구간으로부터 계수 결정(근과 계수의 관계)」 2 · 「증가(감소) 구간이 주어졌을 때의 구간 길이·끝점」 1
- 대상층: 중하위권 3 · 중위권 9 · 중상위권 1 · 상위권 1
- 그림: 1문(`crop:fig-107-209.png` · 107-209 의 도함수 그래프)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-106-205 | 벤더 신호는 확인체크(★1 출발)이나 골조가 필수 예제 106-e12 와 같은 구간 제한형(축 위치 판단 + 끝점 비교)이라 ★3 으로 두었다. 2단 차이라 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **「증감 조건 → f' 의 부호 조건」** 하나이고, 그 안이 **실수 전체(판별식)** 와 **제한된 구간(구간 안 f' 의 최대·최소)** 으로 갈린다. 둘은 풀이 도구와 오답 패턴이 완전히 달라(판별식으로 구간 문제를 풀면 틀린다) **카탈로그에서 반드시 별도 유형으로 세워야 한다**. 이 범위만으로도 각각 4문(106-e11·106-204·107-207·107-210)과 3문(106-e12·106-205·107-208)이다.
- 반대로 「증가·감소 구간으로부터 계수 결정」(105-203·107-206)과 「증가 구간의 길이·끝점」(105-202)은 모두 **f'=0 의 두 근을 경계로 읽는** 같은 착안이라 **하나의 유형으로 통합해도 된다**(묻는 값만 다름).
- 「역함수가 존재할 조건」(107-210)은 표면 포장만 다를 뿐 실수 전체 판별식형과 골조가 같다. 카탈로그에서는 판별식형의 **하위 변형(포장 변형)** 으로 붙이는 편이 변형 생성에 유리하다.
- 「도함수의 그래프로 증감 판정」(107-209)은 대수 계산이 없고 그래프 읽기만 남는 유일한 유형이라 독립 유형이 필요하다. 이 유형은 그림이 고정 자산이라 숫자 변형보다 **보기 구간 교체** 가 주된 변형 축이다.
- 확인체크(105-201~106-205)는 모두 직전 필수 예제의 쌍둥이라 ★ 출발점 규칙(확인체크 ★1)과 실제 난이도가 상시로 1~2단 어긋난다. 카탈로그를 만들 때는 확인체크를 독립 신호로 보지 말고 **직전 예제의 유형·★ 를 상속**시키는 편이 정확하다.
