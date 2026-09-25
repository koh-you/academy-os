---
name: mechanism-데이터-GN-CM2-33-p2
description: 개념원리 공통수학2 33 무리함수(2/3 · 필수·발전 예제 282-e2~287-672) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 33 무리함수
  unit_code: CM2-33
  part: "2/3"
  extract_range: "282~287쪽 · 282-e2~287-672"
  total_problems: 23
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 33 무리함수 (2/3) 정독 데이터 (v1.0)

이 파일은 33단원 45문 중 가운데 23문(282~287쪽)을 다룬다. 전사본 기준 구역은 하나(「필수·발전 예제」)이고, 그 안에 상자 발문인 **필수 예제 6개**(282-e2 · 283-e3 · 284-e4 · 285-e5 · 287-e7 · tag 「필수」)와 **발전 예제 1개**(286-e6 · tag 「발전」), 그리고 각 예제 바로 뒤의 **확인 체크 통번호 16개**(tag 「확인체크」)가 짝을 이뤄 번갈아 실린다. vendor_level 은 전 문항 "-" 이고 기출 태그는 없다. 그림은 285쪽의 세 문항(285-e5 · 285-664 · 285-665)에만 붙는다. 내용은 무리함수 그래프 그리기와 정의역·치역 → 평행이동·대칭이동 → 제한된 정의역에서의 최대·최소 → 그래프를 보고 식 구하기 → 그래프와 직선의 위치 관계 → 역함수로, 무리함수 단원의 골조가 한 번씩 나오는 배열이다.

벤더 신호와 ★ 출발점: 이 구역은 「필수·발전 예제」이므로 tag 「필수」는 ★2, tag 「발전」(286-e6)은 ★3 에서 출발시켰고, 확인 체크는 바로 앞 예제와 같은 유형의 쌍둥이 문항이라 그 예제와 같은 출발점을 쓴 뒤 M_total·통찰로 ±1 했다. 실제로 286쪽의 「그래프와 직선의 위치 관계」 네 문항만 ★3~4 로 올라가고 나머지는 ★2~3 에 모인다. 벤더 신호와 2단 이상 어긋난 문항은 없다(가장 크게 벌어진 것이 287-672 로 1단 차이이며 ★4 후보로 기록만 했다).

통찰 카운트 기준(이 단원에서 반복되는 세 변환을 일관되게 처리하기 위해 미리 정한다):

1. **「근호 안을 $a(x-p)$ 로 묶어 $y=\pm\sqrt{ax}$ 의 평행이동으로 본다」**와 **「정의역은 근호 안 ≥ 0, 치역은 근호 앞 부호와 $q$ 로 읽는다」**는 개념원리가 KEY Point 로 제시한 표준 절차이므로 **절차**로 본다. 근호 안 계수의 부호 때문에 증가·감소가 뒤집히는 것도 함정(Mₜ = T-부호)으로만 세고 통찰로 올리지 않았다.
2. **그래프를 보고 상수를 결정하는 문항**(285쪽 세 문항)은 시작점·통과점이라는 기하 정보를 식의 상수 조건으로 옮기는 단계가 풀이의 진입점이라 **I-RT d1** 한 개를 인정했다. 다만 읽은 좌표를 그대로 대입하는 직접형이므로 depth 는 1 에 묶었다.
3. **그래프와 직선의 위치 관계**는 교점 개수를 판별식·끝점 통과로 환원하는 **I-RT d2** 를 공통으로 두고, 그 위에 (가) 제곱 과정에서 생긴 무연근을 정의역·치역으로 기각해야 하면 **I-VF**, (나) 「한 점에서 만난다」·「두 점에서 만난다」가 접선과 끝점이라는 독립된 두 시나리오로 갈리면 **I-MI** 를 추가로 셌다. 판별식 부등호 한 방향으로 끝나는 286-667 만 통찰 1 개다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-282-e2
  page: 282
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 무리함수 $y=\sqrt{2x+4}+1$, $y=-\sqrt{2-x}-1$ 의 그래프를 그리고 각각의 정의역과 치역을 구하기.
  category: '근호 안을 $a(x-p)$ 로 묶기 → 기본형의 평행이동 → 정의역·치역'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 그래프와 정의역·치역(기본형의 평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 안을 $2(x+2)$, $-(x-2)$ 로 묶어 시작점 $(-2,1)$, $(2,-1)$ 을 잡고 근호 앞 부호와 근호 안 $x$ 계수의 부호로 뻗는 방향을 정하면 끝난다. 두 소문항이 양·음 계수를 한 번씩 보여 주는 도입 배치다. 통찰 0 · M_total 6 이고 필수 예제 출발점 ★2 를 그대로 둔다.
  tier: star_2
  mechanism_primary: '근호 안을 $a(x-p)$ 로 묶기 → 시작점 $(p,q)$ 와 근호 앞·안의 부호로 개형 → 정의역·치역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조(그래프), 정의역: $\{x \mid x\ge -2\}$, 치역: $\{y \mid y\ge 1\}$ ⑵ 풀이 참조(그래프), 정의역: $\{x \mid x\le 2\}$, 치역: $\{y \mid y\le -1\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/282-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 $x$ 의 계수(2 → 3, 1/2)와 이동량 $p$, $q$ 를 자유롭게 바꿀 수 있다. 제약: 시작점 좌표가 정수로 떨어지게 근호 안 상수를 계수의 배수로 두고, 정의역 부등호 방향이 근호 안 계수 부호와 어긋나지 않게 표기한다.'
    creative: '(1) 그래프만 주고 정의역·치역을 묻기(★2 유지) (2) 정의역·치역을 주고 식을 묻기(역방향 → 285-666 골조 ★2) (3) 네 소문항을 부호 조합 4 가지로 채우면 노동량만 늘고 ★ 는 그대로(282-656 이 그 형태).'
```

```yaml
- id: GN-CM2-282-656
  page: 282
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    ⑴~⑷ 네 무리함수 $y=\sqrt{3x-2}-1$, $y=\sqrt{6-2x}+2$, $y=-\sqrt{-x+1}-2$, $y=2-\sqrt{2x-5}$ 의 그래프를 그리고 정의역과 치역을 구하기.
  category: '근호 안 묶기 → 부호 조합 네 가지의 개형 → 정의역·치역'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 그래프와 정의역·치역(기본형의 평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    282-e2 와 같은 골조를 근호 앞 부호 × 근호 안 $x$ 계수 부호의 네 조합으로 한 번씩 반복시킨 문항이다. ⑷ 는 $2-\sqrt{2x-5}$ 처럼 상수항이 앞에 와 있어 $-\sqrt{2x-5}+2$ 로 다시 읽는 표기 함정이 하나 더 있다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '각 식을 $\pm\sqrt{a(x-p)}+q$ 로 정리 → 시작점과 뻗는 방향 → 정의역·치역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조(그래프), 정의역: $\left\{x \,\middle|\, x\ge \dfrac{2}{3}\right\}$, 치역: $\{y \mid y\ge -1\}$ ⑵ 풀이 참조(그래프), 정의역: $\{x \mid x\le 3\}$, 치역: $\{y \mid y\ge 2\}$ ⑶ 풀이 참조(그래프), 정의역: $\{x \mid x\le 1\}$, 치역: $\{y \mid y\le -2\}$ ⑷ 풀이 참조(그래프), 정의역: $\left\{x \,\middle|\, x\ge \dfrac{5}{2}\right\}$, 치역: $\{y \mid y\le 2\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/282-656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수와 상수를 바꿔 시작점을 옮긴다. 제약: 네 소문항이 부호 조합 네 가지를 한 번씩 덮도록 유지하고, ⑴·⑷ 처럼 시작점이 분수인 경우를 적어도 하나 남겨 분수 정의역 표기를 연습시킨다.'
    creative: '(1) 네 그래프를 겹쳐 그리고 교점·상하 관계를 묻기(★3 · I-RT d1 추가) (2) 네 식 중 치역이 같은 것끼리 묶기(★2 · 분류형) (3) 정의역·치역 네 쌍을 주고 식과 짝짓기(★2, 역방향).'
```

```yaml
- id: GN-CM2-282-657
  page: 282
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    상수 $a$, $b$ 에 대한 무리함수 $y=a\sqrt{bx}$ 의 그래프가 지나는 사분면에 관한 보기 ㄱ·ㄴ·ㄷ 중 옳은 것 고르기.
  category: '두 상수의 부호 조합 → 정의역·치역의 방향 → 지나는 사분면'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$bx\\ge 0$ 과 $y$ 의 부호라는 대수 조건을 그래프가 놓이는 사분면이라는 기하 정보로 옮김"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 보기가 $a$, $b$ 중 한쪽 부호만 고정하므로 나머지 한쪽의 두 경우를 모두 따져야 참·거짓이 갈림(ㄴ·ㄷ 이 그 때문에 거짓)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "$y=a\\sqrt{bx}$ 꼴 그래프의 개형과 사분면 — 상수 부호 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $b$ 의 부호가 정의역을 $x\ge 0$ 인지 $x\le 0$ 인지 정하고 $a$ 의 부호가 치역의 방향을 정하므로, 네 부호 조합마다 그래프가 놓이는 사분면이 달라진다. 보기마다 한쪽 부호만 주어져 남은 부호를 모두 따져야 하는 것이 이 문항의 본질이다. 통찰 2 개(RT d1 · MI d2) · M_total 7 로 확인 체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '$b$ 의 부호 → 정의역 방향, $a$ 의 부호 → 치역 방향 → 네 조합별 사분면 → 보기 판정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/282-657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수치가 거의 없는 부호 논증 문항이다. 바꿀 수 있는 것은 보기에서 고정하는 부호 조건($a>0$ / $b<0$ / $ab>0$ / $ab<0$ / $a+b>0$)과 묻는 사분면 번호뿐이다. 제약: 고정 조건이 부호 조합을 하나로 확정해 버리면 I-MI 가 사라져 ★2 로 내려간다.'
    creative: '(1) $y=a\sqrt{b(x-p)}$ 로 평행이동을 섞으면 사분면 판정이 시작점 위치까지 봐야 해 ★4 (2) 그래프 개형 그림을 주고 $a$, $b$ 의 부호를 거꾸로 묻기(★2 · MI 소멸) (3) 「제2사분면을 지나도록 하는 $a$, $b$ 의 조건」을 서술형으로(★3 유지 · 조건을 모두 나열해야 해 I-MI d2 유지).'
```

```yaml
- id: GN-CM2-283-e3
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\sqrt{4-2x}+1$ 의 그래프를 $x$ 축 방향 $a$, $y$ 축 방향 $b$ 만큼 평행이동하면 $y=\sqrt{8-2x}-5$ 와 일치할 때 $a+b$ 의 값.
  category: '두 식을 표준형으로 → 시작점 대응 → 이동량'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수 그래프의 평행이동 — 시작점 대응으로 이동량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 $\sqrt{-2(x-p)}+q$ 꼴로 정리하면 시작점이 $(2,1)$ 과 $(4,-5)$ 이고, 근호 안 계수가 둘 다 $-2$ 라 평행이동만으로 겹친다. 시작점 대응이 곧 이동량이라는 개념원리 KEY Point 를 한 번 쓰는 표준 절차라 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '두 식을 $\sqrt{-2(x-p)}+q$ 로 정리 → 시작점 $(2,1)\to(4,-5)$ 대응 → $a=2$, $b=-6$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/283-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-2$)와 두 시작점의 좌표를 바꾼다. 제약: 두 식의 근호 안 $x$ 계수가 같아야 평행이동만으로 겹치고, 근호 안 상수는 계수의 배수로 두어야 시작점이 정수가 된다.'
    creative: '(1) 이동 후의 식을 주고 이동 전 식을 묻기(★2 유지) (2) 평행이동 대신 대칭이동을 섞기(283-660 골조 ★2~3) (3) 두 식의 근호 안 계수를 다르게 해 「평행이동으로 겹칠 수 없음」을 논증시키면 불변량을 스스로 찾아야 해 ★3(I-EQV d2 · 283-659 골조).'
```

```yaml
- id: GN-CM2-283-658
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    $y=\sqrt{ax-3}+2$ 의 그래프를 $x$ 축 방향 $b$, $y$ 축 방향 $c$ 만큼 평행이동하면 $y=\sqrt{5x+2}$ 와 일치할 때 $abc$ 의 값.
  category: '평행이동한 식 세우기 → 계수 비교 → 세 상수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동으로 일치하는 두 무리함수 — 계수 비교로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=\sqrt{a(x-b)-3}+2+c$ 를 $y=\sqrt{5x+2}$ 와 항별로 비교하면 근호 안 $x$ 계수에서 $a$, 상수항에서 $c$, 근호 안 상수에서 $b$ 가 차례로 나온다. 미지수가 셋이지만 비교 순서가 한 줄로 정해져 있어 통찰 0 · M_total 6 → ★2. 시작점 대응으로 풀어도 같은 단계 수다.
  tier: star_2
  mechanism_primary: '평행이동한 식 $\sqrt{a(x-b)-3}+2+c$ → $\sqrt{5x+2}$ 와 계수 비교 → $a=5$, $c=-2$, $b=-1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/283-658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$ 의 목표값(5), 근호 안 상수($-3$, $+2$), $y$ 절편 상수(2)를 바꾼다. 제약: $b$ 가 정수로 떨어지도록 근호 안 상수의 차가 $a$ 의 배수여야 하고, $a>0$ 이 되게 두어야 정의역 방향이 문제 그림과 어긋나지 않는다.'
    creative: '(1) 묻는 값을 $a+b+c$ 로 바꾸기(★2 유지) (2) $y$ 축 대칭이동을 한 번 끼워 넣기(283-660 골조 ★2) (3) 두 식 중 하나의 근호 앞에 마이너스를 붙여 「평행이동만으로는 불가」를 판정시키면 ★3.'
```

```yaml
- id: GN-CM2-283-659
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    보기 ㄱ·ㄴ·ㄷ 의 세 무리함수 중 그 그래프가 평행이동 또는 대칭이동으로 $y=\sqrt{-x}$ 의 그래프와 겹쳐지는 것 모두 고르기.
  category: '각 보기를 표준형으로 → 근호 안 계수의 절댓값이라는 불변량 비교'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이동으로 겹쳐진다」를 「근호 안 $x$ 계수의 절댓값이 같다」라는 불변량 비교로 옮김(근호 앞 부호와 이동량은 대칭·평행이동으로 언제든 맞출 수 있음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이동으로 겹쳐지는 무리함수 판정 — 근호 안 계수의 절댓값 불변량"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 보기를 $\pm\sqrt{k(x-p)}+q$ 로 정리하면 ㄱ 은 $k=1$·앞 부호 $-$, ㄴ 은 $k=-2$, ㄷ 은 $k=-1$·앞 부호 $-$ 다. 이동이 바꾸지 못하는 것은 $|k|$ 뿐이라는 것을 알면 ㄴ 만 탈락한다는 것이 즉시 보인다. 불변량을 스스로 찾는 동치 변환 1 개(EQV d2)이나 depth 3 도 통찰 2 개도 아니라 확인 체크 출발점 ★2 를 유지했다. 283 쪽 세 확인 체크 중에서는 가장 무겁다.
  tier: star_2
  mechanism_primary: '각 보기를 $\pm\sqrt{k(x-p)}+q$ 로 정리 → $|k|=1$ 인 것만 겹침 → ㄱ, ㄷ'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/283-659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 함수의 근호 안 계수($-1$)와 보기의 계수($1$, $-2$, $-1$)·이동량을 바꾼다. 제약: 보기 중 정확히 하나 또는 둘만 $|k|$ 가 일치해야 판정이 의미를 갖고, 나머지는 $|k|$ 로만 탈락하게 두어야 한다(이동량만 다르게 하면 전부 정답이 된다).'
    creative: '(1) 기준을 $y=2\sqrt{-x}$ 처럼 근호 앞 계수가 있는 꼴로 바꾸면 불변량이 두 개(근호 앞 계수·근호 안 계수)가 되어 ★3 (2) 「겹쳐지도록 하는 상수 $k$ 의 값」을 묻는 역방향(★3 · I-BW d1 추가) (3) 겹치는 것을 고른 뒤 실제 이동량까지 적게 하면 노동량만 늘고 ★2 유지.'
```

```yaml
- id: GN-CM2-283-660
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    $y=\sqrt{-x+2}$ 의 그래프를 $x$ 축 방향 $1$, $y$ 축 방향 $-2$ 만큼 평행이동한 후 $y$ 축에 대하여 대칭이동하면 $y=\sqrt{ax+b}+c$ 와 일치할 때 $a+b+c$ 의 값.
  category: '평행이동 → $y$ 축 대칭이동 → 계수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수 그래프의 평행이동과 대칭이동의 합성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x\to x-1$, $y\to y+2$ 로 평행이동해 $y=\sqrt{-x+3}-2$ 를 얻고, $y$ 축 대칭은 $x\to -x$ 뿐이므로 $y=\sqrt{x+3}-2$ 가 된다. 이동 순서를 지키는 것 외에 판단할 것이 없는 표준 절차라 통찰 0 · M_total 6 → ★2. 대칭이동의 대입 방향($x$ 축 대칭은 $y\to -y$)이 유일한 함정이다.
  tier: star_2
  mechanism_primary: '평행이동 $x\to x-1$, $y\to y+2$ → $y$ 축 대칭 $x\to -x$ → $y=\sqrt{x+3}-2$ 와 계수 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/283-660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이동량 $(1,-2)$ 와 원래 식의 근호 안 계수·상수를 바꾼다. 제약: 최종 식이 $\sqrt{ax+b}+c$ 라는 주어진 꼴(근호 앞이 $+$)이 되도록 대칭축을 고르고, $a$, $b$, $c$ 가 정수로 떨어지게 둔다.'
    creative: '(1) 대칭축을 $x$ 축·원점·직선 $y=x$ 로 바꾸기($y=x$ 대칭이면 역함수가 되어 ★3 · 287-e7 과 합류) (2) 이동과 대칭의 순서를 뒤바꾼 두 결과를 비교시키기(★3 · I-MI d1) (3) 최종 식을 주고 이동량을 역으로 묻기(★3 · I-BW d1).'
```

```yaml
- id: GN-CM2-284-e4
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    무리함수 $y=\sqrt{-3x+6}-1$ 의 정의역이 $\{x \mid -1\le x\le 2\}$ 로 제한될 때의 치역.
  category: '표준형 정리 → 감소함수 판정 → 양 끝 대입'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 정의역에서 무리함수의 치역·최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt{-3(x-2)}-1$ 은 근호 안 계수가 음수라 정의역에서 감소함수이므로 왼쪽 끝 $x=-1$ 에서 최대, 오른쪽 끝 $x=2$ 에서 최소다. 증감 방향만 뒤집히지 않으면 양 끝 대입으로 끝나는 표준 절차라 통찰 0 · M_total 6 → 필수 예제 출발점 ★2.
  mechanism_primary: '$\sqrt{-3(x-2)}-1$ 로 정리 → 감소함수 → $x=-1$ 최대, $x=2$ 최소 → 치역'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{y \mid -1\le y\le 2\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/284-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-3$)와 정의역 양 끝($-1$, $2$)을 바꾼다. 제약: 양 끝에서 근호 안이 0 이상이어야 하고, 치역 끝값이 무리수가 되지 않도록 근호 안 값이 제곱수가 되게 끝점을 고른다.'
    creative: '(1) 치역을 주고 정의역을 묻는 역방향(284-661 골조 ★2) (2) 정의역의 한쪽 끝을 문자로 두고 최댓값·최솟값 조건을 주기(284-663 골조 ★2~3 · I-BW d1) (3) 근호 앞에 마이너스를 붙여 증감이 두 번 뒤집히게 하기(284-662 골조 ★2).'
```

```yaml
- id: GN-CM2-284-661
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    무리함수 $y=-\sqrt{4x-4}+3$ 의 치역이 $\{y \mid -1\le y\le 1\}$ 일 때의 정의역.
  category: '감소함수 판정 → 치역의 양 끝을 방정식으로 풀어 정의역 끝점'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 정의역에서 무리함수의 치역·최대·최소(치역 → 정의역 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $-\sqrt{4(x-1)}+3$ 은 감소함수이므로 치역의 최댓값 1 이 왼쪽 끝, 최솟값 $-1$ 이 오른쪽 끝에 대응한다. 각각 $\sqrt{4x-4}=2$, $=4$ 를 풀면 끝점이 나온다. 결과에서 원인을 찾는 모양이지만 방정식 한 줄씩의 표준 역산이라 스키마 §2.2 의 「단순 미정계수 대입은 I-BW 로 인정하지 않는다」에 따라 절차형으로 두었다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$-\sqrt{4(x-1)}+3$ 감소함수 → $y=1$ 과 $y=-1$ 을 각각 대입해 $x=2$, $x=5$ → 정의역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{x \mid 2\le x\le 5\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/284-661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수(4)·상수항(3)과 치역의 양 끝을 바꾼다. 제약: 치역 끝값에서 $\sqrt{\,\cdot\,}$ 가 0 이상이어야 하고(상수항보다 큰 값을 치역에 넣지 않는다), 정의역 끝이 정수가 되게 근호 안이 제곱수가 되도록 고른다.'
    creative: '(1) 치역의 한쪽만 주고 정의역이 반직선이 되게 하기(★2) (2) 치역의 끝값 하나를 문자로 두고 정의역의 길이를 조건으로 주기(★3 · I-BW d1) (3) 정의역·치역을 모두 주고 식의 상수를 묻기(285-666 골조 ★2).'
```

```yaml
- id: GN-CM2-284-662
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    $-2\le x\le 1$ 에서 무리함수 $y=-\sqrt{-3x+3}-1$ 의 최댓값 $a$, 최솟값 $b$ 에 대하여 $a-b$ 의 값.
  category: '이중 부호로 증가함수 판정 → 양 끝 대입 → 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 정의역에서 무리함수의 치역·최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 안 계수가 음수여서 $\sqrt{-3x+3}$ 은 감소인데 근호 앞에 마이너스가 한 번 더 붙어 전체는 증가함수가 된다. 부호가 두 겹이라 최대·최소의 위치가 뒤집히는 것이 유일한 함정이고, 확정한 뒤에는 양 끝 대입뿐이다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '근호 안 음수 계수 + 근호 앞 마이너스 → 증가함수 → $x=1$ 최대, $x=-2$ 최소 → $a-b$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/284-662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-3$)·상수(3)·상수항($-1$)과 정의역 양 끝을 바꾼다. 제약: 양 끝에서 근호 안이 0 이상이어야 하고 적어도 한쪽 끝에서 근호 안이 제곱수가 되게 둔다. 근호 앞 마이너스와 근호 안 음수 계수의 조합(증가함수)을 유지해야 이 문항의 함정이 남는다.'
    creative: '(1) 최댓값과 최솟값의 곱·비를 묻기(★2 유지) (2) 정의역 한쪽 끝을 문자로 두고 $a-b$ 의 값을 조건으로 주기(★3 · I-BW d1) (3) 같은 구간에서 두 무리함수의 최댓값을 비교시키기(★3).'
```

```yaml
- id: GN-CM2-284-663
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    상수 $a$ 에 대하여 $-3\le x\le a$ 에서 무리함수 $y=\sqrt{3-2x}+2$ 의 최댓값이 $b$, 최솟값이 $3$ 일 때 $b-a$ 의 값.
  category: '감소함수 판정 → 왼쪽 끝에서 최댓값 → 최솟값 조건으로 오른쪽 끝 역산'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미지의 오른쪽 끝 $a$ 를 구하려면 먼저 감소함수라 최솟값이 오른쪽 끝에서 난다는 위치 판정을 해야 식을 세울 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정의역의 끝이 미지인 무리함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt{-2(x-3/2)}+2$ 는 감소함수이므로 최댓값은 고정된 왼쪽 끝 $x=-3$ 에서 나와 $b=5$ 로 먼저 정해지고, 최솟값 3 은 미지의 오른쪽 끝 $x=a$ 에서 나므로 $\sqrt{3-2a}=1$ 로 $a$ 를 역산한다. 구한 $a$ 가 정의역 조건 $3-2a\ge 0$ 안에 들어가는지도 확인해야 하지만 기각되는 분기가 없어 I-VF 는 세지 않았다. 통찰 1 개(BW d1) · M_total 7 로 ★2 의 윗자리.
  tier: star_2
  mechanism_primary: '감소함수 → 왼쪽 끝에서 $b=5$ → 최솟값 3 을 오른쪽 끝에 대입해 $a=1$ → $b-a$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/284-663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-2$)·상수(3)·상수항(2)과 고정된 왼쪽 끝($-3$)·주어진 최솟값(3)을 바꾼다. 제약: 최솟값이 상수항(2)보다 커야 $\sqrt{\,\cdot\,}>0$ 이고, 역산한 $a$ 가 $-3$ 과 $3/2$ 사이에 들어가야 구간이 성립한다.'
    creative: '(1) 미지 끝을 왼쪽에 두어 최댓값 쪽을 역산시키기(★2 유지) (2) 최댓값과 최솟값의 차를 조건으로 주면 $a$ 에 대한 무리방정식이 되어 ★3 (3) 정의역 끝 두 개를 모두 문자로 두고 구간의 길이를 조건으로 주면 연립 + 유효성 기각이 생겨 ★4(I-VF d2).'
```

```yaml
- id: GN-CM2-285-e5
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림으로 주어진 무리함수 $y=-\sqrt{ax+b}+c$ 의 그래프에서 상수 $a$, $b$, $c$ 의 값 구하기.
  category: '그래프의 시작점 → $c$ 와 $-b/a$ → 지나는 점 대입 → $a$, $b$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그래프의 시작점 $(-2,1)$ 과 뻗는 방향이라는 기하 정보를 $-b/a=-2$, $c=1$, $a>0$ 이라는 식의 상수 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '그래프를 보고 무리함수의 식 구하기(시작점 + 지나는 점)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 시작점이 $(-2,1)$ 이므로 $c=1$ 이고 근호 안이 $a(x+2)$ 꼴이며, 오른쪽 아래로 뻗으므로 $a>0$ 이다. 여기에 지나는 점 $(0,-1)$ 을 대입하면 $\sqrt{b}=2$ 로 $b$ 와 $a$ 가 차례로 정해진다. 기하 → 대수 전환 1 개(RT d1)이지만 읽은 좌표를 그대로 대입하는 직접형이라 depth 1 에 묶었다. M_total 7 · 필수 예제 출발점 ★2.
  tier: star_2
  mechanism_primary: '시작점 $(-2,1)$ → $c=1$, $-b/a=-2$ → 점 $(0,-1)$ 대입 → $b=4$, $a=2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=2$, $b=4$, $c=1$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-285-e5.png'
  latex: latex-bank/gn-cm2/items/285-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작점 좌표($(-2,1)$)와 지나는 점($(0,-1)$)을 바꾼다. 제약: 그림 라벨은 정수 눈금만 쓰므로 두 점 모두 정수 좌표여야 하고, 지나는 점에서 근호 안 값이 제곱수가 되어야 $a$ 가 유리수로 떨어진다. 근호 앞 마이너스를 유지하면 그래프는 오른쪽 아래로 뻗는다.'
    creative: '(1) 지나는 점 대신 $x$ 절편을 라벨로 주기(★2 유지) (2) 구한 식으로 $f(k)$ 방정식을 이어 묻기(285-665 골조 ★2) (3) 그래프와 직선의 교점을 함께 묻기(★3~4 · 286 쪽 골조와 합류) (4) 그림 없이 정의역·치역만 주고 상수를 묻기(285-666 골조 · RT 소멸 → ★2 절차형).'
```

```yaml
- id: GN-CM2-285-664
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    그림으로 주어진 무리함수 $y=\sqrt{-ax+b}+c$ 의 그래프에서 상수 $a$, $b$, $c$ 에 대한 $a+b+c$ 의 값.
  category: '그래프의 시작점 → $c$ 와 $b/a$ → 지나는 점 대입 → $a$, $b$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그래프가 오른쪽 끝 $(4,-1)$ 에서 시작해 왼쪽 위로 뻗는다는 기하 정보를 $c=-1$, $-4a+b=0$, $a>0$ 이라는 상수 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '그래프를 보고 무리함수의 식 구하기(시작점 + 지나는 점)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 안 $x$ 계수가 $-a$ 이므로 시작점이 오른쪽 끝에 오고, 그림의 $(4,-1)$ 에서 $c=-1$ 과 $b=4a$ 가 나온다. 지나는 점 $(0,1)$ 을 대입하면 $\sqrt{b}=2$ 로 $b=4$, $a=1$. 285-e5 와 같은 골조를 근호 앞 부호만 바꿔 반복한 쌍둥이 문항이라 통찰 1 개(RT d1) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '시작점 $(4,-1)$ → $c=-1$, $b=4a$ → 점 $(0,1)$ 대입 → $b=4$, $a=1$ → 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: 'crop:fig-285-664.png'
  latex: latex-bank/gn-cm2/items/285-664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작점 $(4,-1)$ 과 $y$ 절편 $(0,1)$ 을 바꾼다. 제약: 근호 안 계수가 $-a$ 로 고정돼 있어 시작점이 반드시 오른쪽 끝이어야 하고, $y$ 절편에서 근호 안 값 $b$ 가 제곱수여야 한다. 묻는 값을 $a+b+c$ 로 두므로 세 상수가 모두 정수가 되게 고른다.'
    creative: '(1) 묻는 값을 $abc$ 나 $f(-5)$ 로 바꾸기(★2 유지) (2) 그래프와 $x$ 축·$y$ 축이 만드는 도형의 넓이를 묻기(★3 · I-RT d2) (3) 같은 그림에 직선을 하나 더 그려 교점을 묻기(★3~4).'
```

```yaml
- id: GN-CM2-285-665
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    그림으로 주어진 무리함수 $f(x)=-\sqrt{ax+b}+c$ 의 그래프에 대하여 $f(k)=-1$ 을 만족시키는 상수 $k$ 의 값.
  category: '그래프에서 식 결정 → 함숫값 방정식 풀기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그래프가 오른쪽 끝 $(1,1)$ 에서 끝나며 증가한다는 기하 정보를 $c=1$, $a+b=0$, $a<0$ 이라는 상수 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '그래프를 보고 무리함수의 식 구하기 + 함숫값 방정식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 앞이 마이너스인데 그래프가 증가하므로 $a<0$ 임을 먼저 확정해야 한다는 것이 285-e5·664 와 다른 지점이다. 시작점 $(1,1)$ 과 원점 통과로 $f(x)=-\sqrt{-x+1}+1$ 을 얻고, $f(k)=-1$ 에서 $\sqrt{1-k}=2$ 를 푼다. 식을 구한 뒤 방정식이 한 단계 더 붙지만 통찰은 RT d1 하나 · M_total 7 → ★2. [분류 이슈] 근호 앞 부호와 $a$ 의 부호가 겹치는 판정을 I-EQV d1 로 따로 셀지 함정(Mₜ)으로만 볼지가 경계다.
  tier: star_2
  mechanism_primary: '시작점 $(1,1)$ 과 원점 통과 → $f(x)=-\sqrt{-x+1}+1$ → $\sqrt{1-k}=2$ → $k=-3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: 'crop:fig-285-665.png'
  latex: latex-bank/gn-cm2/items/285-665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작점 $(1,1)$·통과점(원점)과 목표 함숫값($-1$)을 바꾼다. 제약: 목표 함숫값이 $c$ 보다 작아야 $\sqrt{\,\cdot\,}>0$ 이고, $c-y$ 가 제곱수여야 $k$ 가 정수로 떨어진다. 그래프가 증가하려면 근호 앞 마이너스와 $a<0$ 의 조합을 유지해야 한다.'
    creative: '(1) $f(k)=-1$ 대신 $f^{-1}(-1)$ 을 묻기(★3 · 287 쪽 역함수 골조와 합류) (2) $f(k)\le -1$ 인 $k$ 의 범위를 묻기(★3 · T-경계 추가) (3) 그림의 라벨 하나를 지우고 두 점 중 하나만 주면 조건이 모자라 상수의 관계식만 답하게 되는 서술형(★3 · I-EQV d2).'
```

```yaml
- id: GN-CM2-285-666
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    무리함수 $y=-\sqrt{ax+9}+b$ 의 정의역이 $\{x \mid x\ge -3\}$, 치역이 $\{y \mid y\le 2\}$ 일 때 상수 $a$, $b$ 에 대한 $ab$ 의 값.
  category: '정의역의 방향·끝점 → $a$, 치역의 끝값 → $b$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '정의역·치역이 주어진 무리함수의 상수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역이 $x\ge -3$ 이라는 「오른쪽으로 열린」 모양에서 $a>0$ 이 정해지고 근호 안이 $a(x+3)$ 이어야 하므로 $9=3a$ 로 $a=3$, 치역이 $y\le 2$ 이므로 근호 앞 마이너스와 함께 $b=2$ 다. 개념원리 KEY Point 의 「정의역은 근호 안 ≥ 0, 치역은 근호 앞 부호와 상수항」을 그대로 역으로 쓰는 표준 절차라 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '정의역 $x\ge -3$ → $a>0$ 이고 $9=3a$ → $a=3$, 치역 $y\le 2$ → $b=2$ → $ab$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/285-666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 상수(9)와 정의역 끝점($-3$)·치역 끝값(2)을 바꾼다. 제약: 근호 안 상수가 $a\times$(끝점의 절댓값)으로 딱 떨어져야 $a$ 가 정수가 되고, 정의역의 부등호 방향과 $a$ 의 부호, 치역의 부등호 방향과 근호 앞 부호가 서로 맞물려야 모순이 없다.'
    creative: '(1) 정의역 부등호를 $x\le -3$ 으로 뒤집어 $a<0$ 이 나오게 하기(★2 유지 · T-부호 강화) (2) 정의역·치역 대신 그래프 그림을 주기(285-e5 골조 ★2 · I-RT d1 추가) (3) 정의역만 주고 치역을 문자로 남겨 두 상수의 관계식을 묻기(★3 · I-EQV d2).'
```

```yaml
- id: GN-CM2-286-e6
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴~⑶ 무리함수 $y=\sqrt{4-2x}$ 의 그래프와 직선 $y=-x+k$ 가 서로 다른 두 점에서 만날 때·한 점에서 만날 때·만나지 않을 때 실수 $k$ 의 값 또는 범위.
  category: '접하는 $k$(판별식) + 끝점을 지나는 $k$ → 세 위치의 경계로 범위 분류'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「그래프와 직선이 몇 점에서 만나는가」라는 기하 조건을 제곱해서 얻은 이차방정식의 실근 개수·판별식으로 옮김'
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '제곱 과정에서 생긴 근 중 정의역 $x\le 2$ 와 치역 $y\ge 0$ 을 벗어나는 것을 기각해야 함 — 판별식만 보면 두 점에서 만나는 구간을 실제보다 넓게 잡아 틀린 답에 도달'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '무리함수의 그래프와 기울기가 고정된 직선의 위치 관계'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\sqrt{-2(x-2)}$ 는 시작점 $(2,0)$ 에서 왼쪽 위로 뻗고 직선은 기울기 $-1$ 로 평행 이동한다. 경계가 둘(접할 때 $k=5/2$, 끝점 $(2,0)$ 을 지날 때 $k=2$)이고 그 사이에서만 교점이 둘이라는 것을 그래프로 확정해야 한다. 무연근 기각이 본질이라 I-VF 를 인정했다. 통찰 2 개(RT d2 · VF d2) · M_total 9 로 발전 예제 출발점 ★3 에서 +1. ★4 저노출 유형 요건(RT·VF)도 충족.
  tier: star_4
  mechanism_primary: '제곱해 $x^2-(2k-2)x+k^2-4=0$ → 판별식 0 에서 접하는 $k=5/2$, 끝점 통과에서 $k=2$ → 세 구간으로 분류'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑴ $2\le k<\dfrac{5}{2}$ ⑵ $k<2$ 또는 $k=\dfrac{5}{2}$ ⑶ $k>\dfrac{5}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/286-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-2$)·상수(4)와 직선의 기울기($-1$)를 바꾼다. 제약: 판별식이 $k$ 의 일차식이 되도록 직선의 기울기와 근호 안 계수를 맞추면(기울기 $\pm1$ 계열) 접점 $k$ 가 유리수로 떨어진다. 기울기의 부호가 그래프가 뻗는 방향과 반대여야 경계가 둘(접·끝점) 생긴다.'
    creative: '(1) 세 소문항 중 하나만 묻기(★3 · I-MI 소멸) (2) 직선을 원점을 지나는 $y=mx$ 로 바꿔 회전시키기(286-669 골조 ★4) (3) 교점의 개수가 2 가 되는 $k$ 의 정수 개수를 묻기(★4 유지) (4) 근호 앞에 마이너스를 붙여 그래프를 아래로 뒤집으면 경계의 역할이 바뀌어 ★4(286-668 골조).'
```

```yaml
- id: GN-CM2-286-667
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    무리함수 $y=\sqrt{4x-8}$ 의 그래프와 직선 $y=2x-k$ 가 만나지 않도록 하는 실수 $k$ 의 값의 범위.
  category: '제곱 → 이차방정식 → 판별식 음수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「만나지 않는다」는 기하 조건을 제곱해서 얻은 이차방정식의 판별식 음수로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '무리함수의 그래프와 기울기가 고정된 직선의 위치 관계'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    시작점 $(2,0)$ 에서 오른쪽 위로 뻗는 그래프와 기울기 2 인 직선은 방향이 같아 끝점 통과가 경계가 되지 않고, 접하는 $k=7/2$ 하나만 경계다. 그래서 판별식 부등호 한 방향($D<0$)으로 답이 끝나고 무연근 기각이나 경우 분류가 필요 없다. 통찰 1 개(RT d2) · M_total 8 로 발전 예제 짝 확인 체크 출발점 ★3 유지. 286 쪽 네 문항 중 가장 가볍다.
  tier: star_3
  mechanism_primary: '제곱해 $4x^2-(4k+4)x+k^2+8=0$ → $D<0$ → $k<7/2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$k<\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/286-667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수(4)·상수($-8$)와 직선의 기울기(2)를 바꾼다. 제약: 판별식이 $k$ 의 일차식이 되도록 직선의 기울기와 근호 안 계수를 맞춘다(여기서는 $4x$ 항이 소거되어 그렇게 된다). 기울기의 부호를 그래프가 뻗는 방향과 같게 두어야 경계가 접선 하나로 남는다.'
    creative: '(1) 「한 점에서 만난다」·「두 점에서 만난다」로 바꾸면 끝점 통과가 경계로 살아나 ★4(I-MI d2 추가) (2) 직선을 $y=2x$ 로 고정하고 그래프를 평행이동시키기(★3 유지) (3) 만나지 않는 정수 $k$ 의 최댓값을 묻기(★3 · T-경계 강화).'
```

```yaml
- id: GN-CM2-286-668
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    무리함수 $y=-\sqrt{6-2x}$ 의 그래프와 직선 $y=x+k$ 가 한 점에서 만나도록 하는 실수 $k$ 의 값의 범위.
  category: '접하는 $k$ + 끝점을 지나는 $k$ → 한 점인 두 시나리오 결합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '교점 개수 조건을 제곱해서 얻은 이차방정식 $x^2+(2k+2)x+k^2-6=0$ 의 실근 개수로 옮김'
    - step: 4
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「한 점에서 만난다」가 접하는 경우($k=-7/2$)와 직선이 끝점 $(3,0)$ 보다 위를 지나 한 쪽만 걸리는 경우($k>-3$)라는 서로 독립된 두 시나리오로 갈려 답이 범위와 고립점의 합집합이 됨'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '무리함수의 그래프와 기울기가 고정된 직선의 위치 관계(한 점 조건의 두 갈래)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $-\sqrt{-2(x-3)}$ 는 시작점 $(3,0)$ 에서 왼쪽 아래로 뻗고 직선의 기울기는 $+1$ 이라 방향이 반대다. 그래서 경계가 접선 $k=-7/2$ 와 끝점 통과 $k=-3$ 두 개 생기고, 「한 점」이 접점 하나와 $k>-3$ 구간으로 나뉜다. 답이 범위와 고립점의 합집합이라는 점이 이 유형에서 가장 자주 틀리는 자리다. 통찰 2 개(RT d2 · MI d2) · M_total 8 로 ★3 출발점에서 +1.
  tier: star_4
  mechanism_primary: '제곱 → 판별식 0 에서 $k=-7/2$, 끝점 $(3,0)$ 통과에서 $k=-3$ → 한 점인 경우는 $k>-3$ 또는 $k=-7/2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$k>-3$ 또는 $k=-\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/286-668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수($-2$)·상수(6)와 직선의 기울기(1)를 바꾼다. 제약: 직선의 기울기 부호가 그래프가 뻗는 방향과 반대여야 경계가 두 개 생겨 「한 점」이 두 갈래로 갈린다. 판별식이 $k$ 의 일차식이 되게 계수를 맞추면 접점 $k$ 가 유리수로 떨어진다.'
    creative: '(1) 「두 점에서 만난다」로 바꾸면 답이 구간 하나 $-7/2<k<-3$ 이 되어 ★3 (2) 직선을 $y=mx+1$ 처럼 기울기를 문자로 두면 회전 + 평행이동이 섞여 ★5 후보(I-SC 추가) (3) 교점의 좌표까지 구하게 하면 노동량만 늘고 ★4 유지 (4) 그래프와 직선이 만드는 영역의 넓이를 이어 묻기(★4).'
```

```yaml
- id: GN-CM2-286-669
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    무리함수 $y=-\sqrt{2x-8}$ 의 그래프가 직선 $y=mx$ 와 서로 다른 두 점에서 만나도록 하는 실수 $m$ 의 값의 범위.
  category: '원점을 지나는 회전 직선 → 접하는 $m$ 과 수평 경계 $m=0$ 사이'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '교점 개수 조건을 제곱해서 얻은 $m^2x^2-2x+8=0$ 의 실근 개수·판별식으로 옮김'
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '직선이 원점을 축으로 회전하므로 $m$ 의 부호로 먼저 갈리고($m\ge 0$ 이면 제4사분면의 그래프와 만날 수 없음), 두 점이 되는 구간의 경계가 접선과 $m=0$ 두 개라는 것을 그래프에서 확정해야 함'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '무리함수의 그래프와 원점을 지나는 직선의 위치 관계(기울기 회전)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $-\sqrt{2(x-4)}$ 는 시작점 $(4,0)$ 에서 오른쪽 아래(제4사분면)로 뻗으므로 원점을 지나는 직선은 $m<0$ 일 때만 만날 수 있다. 판별식 $1-8m^2=0$ 에서 $m=-\sqrt{2}/4$ 가 접선이고, $m$ 이 0 에 가까워질수록 직선이 눕는다. 두 점이 되는 구간이 접선과 수평선 사이라는 것을 회전으로 보는 것이 핵심이다. $m=0$ 에서 이차항이 사라지는 것도 함정이다. 통찰 2 개(RT d2 · MI d2) · M_total 8 로 ★3 출발점에서 +1.
  tier: star_4
  mechanism_primary: '제곱해 $m^2x^2-2x+8=0$ → $D/4=1-8m^2$ → 접선 $m=-\sqrt{2}/4$ 와 수평 경계 $m=0$ 사이'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-\dfrac{\sqrt{2}}{4}<m<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/286-669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수(2)·상수($-8$)를 바꿔 시작점 $(4,0)$ 을 옮긴다. 제약: 시작점이 $x$ 축 위에 있어야 $m=0$ 이 깔끔한 경계가 되고, 판별식에서 $m^2$ 의 값이 제곱수 분의 꼴이라야 $m$ 이 $\sqrt{2}/4$ 처럼 정리된 무리수로 떨어진다.'
    creative: '(1) 직선을 $y=m(x-1)$ 처럼 다른 고정점을 지나게 하면 경계가 접선·끝점 둘 다 살아나 ★5 후보 (2) 「한 점에서 만난다」로 바꾸면 답이 $m\ge 0$ 쪽 고립 구간과 접선으로 갈려 ★4 유지 (3) 교점이 두 개일 때 두 교점 사이의 거리를 묻기(★4 · 노동량 증가) (4) 근호 앞 마이너스를 떼면 그래프가 제1사분면으로 가 $m>0$ 쪽 대칭 문제가 됨(★4).'
```

```yaml
- id: GN-CM2-287-e7
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    무리함수 $y=\sqrt{4x-2}+1$ 의 역함수를 구하고 그 역함수의 정의역과 치역 구하기.
  category: '$x$ 에 대해 풀기 → $x$, $y$ 교환 → 원함수의 치역·정의역이 역함수의 정의역·치역'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리함수의 역함수 구하기와 그 정의역·치역'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y-1=\sqrt{4x-2}$ 를 제곱해 $x$ 에 대해 풀고 $x$, $y$ 를 바꾸면 이차식이 나오는데, 역함수의 정의역 $x\ge 1$ 은 원함수의 치역, 치역 $y\ge 1/2$ 는 원함수의 정의역이라는 표준 대응으로 읽는다. 제한 없이 쓰면 포물선 전체가 되어 함수가 되지 않는다는 것이 유일한 함정(T-범위)이고, 나머지는 개념원리 KEY Point 그대로다. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2.
  tier: star_2
  mechanism_primary: '$y-1=\sqrt{4x-2}$ 제곱 → $x$ 에 대해 정리 → $x$, $y$ 교환 → 정의역·치역은 원함수의 치역·정의역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{1}{4}(x-1)^2+\dfrac{1}{2}$, 정의역: $\{x \mid x\ge 1\}$, 치역: $\left\{y \,\middle|\, y\ge \dfrac{1}{2}\right\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/287-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 계수(4)·상수($-2$)와 상수항(1)을 바꾼다. 제약: 역함수의 이차항 계수가 $1/a$ 라 $a$ 를 제곱수로 두면 계수가 정리되고, 정의역·치역의 경계값이 분수로 나와도 되지만 두 값 중 하나는 정수로 두는 편이 대조하기 쉽다.'
    creative: '(1) 근호 앞에 마이너스를 붙여 역함수의 정의역이 반대쪽이 되게 하기(★2 유지 · T-부호 강화) (2) 역함수를 주고 원함수를 묻는 역방향(287-670 골조 ★3) (3) $y=f(x)$ 와 $y=f^{-1}(x)$ 의 교점을 묻기(★3~4 · 287-672 골조 · I-SYM d2).'
```

```yaml
- id: GN-CM2-287-670
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    $f(x)=x^2-8x+10\ (x\le 4)$ 의 역함수가 $f^{-1}(x)=-\sqrt{ax+b}+c\ (x\ge d)$ 일 때 상수 $a$, $b$, $c$, $d$ 에 대한 $ab-cd$ 의 값.
  category: '완전제곱 → 정의역 조건으로 근호 부호 선택 → 역함수와 그 정의역'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정의역 제한 $x\le 4$ 를 「$x-4\le 0$ 이므로 $x-4=-\sqrt{y+6}$」 이라는 근호 앞 부호 선택으로 옮김 — 이 변환을 놓치면 $+$ 부호 가지를 잡아 주어진 꼴과 어긋남'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '정의역이 제한된 이차함수의 역함수(무리함수 꼴)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(x)=(x-4)^2-6$ 으로 고쳐 $y+6=(x-4)^2$ 까지는 기계적이지만, $x\le 4$ 라는 제한이 두 가지 부호 중 음의 가지를 강제한다는 것이 이 문항의 본질이다. 역함수의 정의역 $x\ge -6$ 은 원함수의 치역에서 읽는다. 통찰 1 개(EQV d2)이나 미지 상수가 넷이고 M_total 8 로 287 쪽 확인 체크 중 가장 무거워 ★2 출발점에서 +1.
  tier: star_3
  mechanism_primary: '$(x-4)^2-6$ → $x\le 4$ 이므로 $x=4-\sqrt{y+6}$ → $f^{-1}(x)=-\sqrt{x+6}+4\ (x\ge -6)$ → $ab-cd$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/287-670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차함수의 계수($-8$, 10)와 정의역 제한($x\le 4$)을 바꾼다. 제약: 제한하는 값이 꼭짓점의 $x$ 좌표와 같아야 역함수가 존재하고, 꼭짓점 좌표가 정수로 떨어지게 일차항 계수를 짝수로 둔다. 제한 부등호 방향이 근호 앞 부호를 결정한다.'
    creative: '(1) 정의역을 $x\ge 4$ 로 뒤집어 $+\sqrt{\,\cdot\,}$ 가지가 나오게 하기(★3 유지) (2) 역함수를 먼저 주고 원함수와 그 정의역을 묻기(★3 · I-BW d1 추가) (3) 꼭짓점이 아닌 곳에서 자른 정의역을 주고 역함수가 존재하지 않음을 논증시키기(★4 · I-VF d2) (4) $f$ 와 $f^{-1}$ 의 교점을 이어 묻기(★4).'
```

```yaml
- id: GN-CM2-287-671
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    두 무리함수 $f(x)=\sqrt{x+3}$, $g(x)=\sqrt{2x+5}+1$ 에 대하여 $(g^{-1}\circ f)^{-1}(2)$ 의 값.
  category: '합성함수의 역함수 분해 → $f^{-1}\circ g$ → 대입'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(g^{-1}\circ f)^{-1}=f^{-1}\circ g$ 로 바꿔 $g^{-1}$ 을 직접 구하지 않고 $g(2)$ 를 그대로 대입할 수 있게 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '합성함수의 역함수 — 기호 분해 후 함숫값 계산'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분해식을 쓰면 $f^{-1}(g(2))=f^{-1}(4)$ 로 두 줄이지만, 쓰지 않으면 $g^{-1}$ 을 구해 합성하고 그 역함수를 다시 구하는 긴 길로 간다. 합성·역함수 기호의 순서가 뒤집히는 T-표기 함정이 본질이고 $f^{-1}$ 의 정의역이 $x\ge 0$ 이라는 제약도 확인해야 한다. 통찰 1 개(EQV d2) · M_total 7 로 ★2 출발점에서 +1. [분류 이슈] 두 갈래 중 빠른 쪽을 고르는 구조라 I-SC 로 볼 여지도 있다.
  tier: star_3
  mechanism_primary: '$(g^{-1}\circ f)^{-1}=f^{-1}\circ g$ → $g(2)=4$ → $f^{-1}(4)=4^2-3$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/287-671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 함수의 근호 안 계수·상수($x+3$, $2x+5$)와 상수항(1), 대입값(2)을 바꾼다. 제약: $g$ 의 대입값에서 근호 안이 제곱수여야 하고, 그 결과가 $f^{-1}$ 의 정의역(원함수 $f$ 의 치역 $\ge 0$) 안에 들어가야 한다.'
    creative: '(1) $(f^{-1}\circ g)^{-1}(2)$ 처럼 분해 방향을 바꾸기(★3 유지) (2) 답이 정의역 밖이라 존재하지 않는 경우를 섞으면 사후 검증이 강제되어 ★4(I-VF d2) (3) 합성함수 $g^{-1}\circ f$ 의 식을 직접 구하고 정의역까지 쓰게 하면 노동량이 크게 늘어 ★4 (4) 세 함수의 합성으로 늘리기(★4).'
```

```yaml
- id: GN-CM2-287-672
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    상수 $a$, $b$ 에 대하여 무리함수 $f(x)=\sqrt{ax+b}$ 와 그 역함수의 그래프가 점 $(2,5)$ 에서 만날 때 $f(1)$ 의 값.
  category: '역함수 그래프의 $y=x$ 대칭 → 두 점 $(2,5)$, $(5,2)$ 를 원함수에 대입 → 연립'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$y=f^{-1}(x)$ 의 그래프가 $y=f(x)$ 를 직선 $y=x$ 에 대칭시킨 것임을 써서 $(2,5)$ 에서 두 번째 점 $(5,2)$ 를 만들어 냄 — 교점이 $y=x$ 위에 있다는 관성적 가정을 버려야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$y=f(x)$ 와 $y=f^{-1}(x)$ 의 교점 — $y=x$ 대칭 활용'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 그래프의 교점이 항상 $y=x$ 위에 있다고 단정하면 $(2,5)$ 와 모순이라 풀 수 없다. 대신 $(2,5)$ 가 $y=f^{-1}(x)$ 위에 있으므로 $y=x$ 대칭점 $(5,2)$ 가 $y=f(x)$ 위에 있고, $(2,5)$ 도 $y=f(x)$ 위에 있다는 두 등식 $2a+b=25$, $5a+b=4$ 로 연립한다. 통찰 1 개(SYM d2)이나 이 범위에서 통찰의 질이 가장 높다. ★2 출발점에서 +1. [분류 이슈] ★4 후보로 기록.
  tier: star_3
  mechanism_primary: '$y=x$ 대칭으로 $(5,2)$ 확보 → $f(2)=5$, $f(5)=2$ 연립 → $a=-7$, $b=39$ → $f(1)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/287-672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '교점 좌표 $(2,5)$ 와 묻는 함숫값 $f(1)$ 을 바꾼다. 제약: 두 점 $(p,q)$, $(q,p)$ 를 모두 지나야 하므로 $q>p\ge 0$ 이고 두 값이 모두 $f$ 의 치역 조건을 만족해야 한다. 연립 결과 $a$ 가 음수가 되면 정의역이 왼쪽으로 열리므로 묻는 $x$ 값이 정의역 안인지 확인해야 한다.'
    creative: '(1) 교점을 $y=x$ 위의 점으로 주면 대칭 착안이 필요 없어 ★2 로 내려간다(★ 변동 지점) (2) 교점이 두 개인 상황을 주면 방정식 $f(x)=x$ 와 대칭 교점을 모두 따져야 해 ★5 후보(I-SYM + I-MI) (3) $f(x)=\sqrt{ax+b}$ 대신 $f(x)=-\sqrt{ax+b}+c$ 로 바꾸면 상수가 셋이라 조건을 하나 더 줘야 하고 ★4 (4) 두 그래프로 둘러싸인 영역의 넓이를 묻기(★4).'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 0 · ★2 15 · ★3 5(282-657 · 286-667 · 287-670 · 287-671 · 287-672) · ★4 3(286-e6 · 286-668 · 286-669) · ★5 0
- 통찰형 13 · 절차형 10 · premium 0
- 통찰 유형 분포: I-RT 7 · I-MI 3 · I-EQV 3 · I-BW 1 · I-VF 1 · I-SYM 1 (총 16개 라벨 · depth 1 이 6, depth 2 가 10, depth 3 은 없음)
- type_hint 상위 5: 「무리함수의 그래프와 직선의 위치 관계」 4(286-e6 · 286-667 · 286-668 · 286-669) · 「무리함수의 그래프와 정의역·치역(기본형의 평행이동)」 2 + 「제한된 정의역에서의 치역·최대·최소」 3(284-e4 · 284-661 · 284-662, 284-663 은 「정의역의 끝이 미지인 최대·최소」로 분리) · 「그래프를 보고 식 구하기」 3(285-e5 · 285-664 · 285-665) · 「평행이동·대칭이동」 3(283-e3 · 283-658 · 283-660) · 「역함수」 3(287-e7 · 287-670 · 287-671)
- 그림: 3문(`crop:fig-285-e5.png` · `crop:fig-285-664.png` · `crop:fig-285-665.png`). 선택지 문항 0, ㄱㄴㄷ 보기 문항 2(282-657 · 283-659), 기출 태그 0, vendor_level 전 문항 "-"
- 예제-확인 체크 쌍의 난도 차: 대체로 같은 ★ 이지만 282-e2(★2) → 282-657(★3), 287-e7(★2) → 287-670·671·672(모두 ★3)처럼 확인 체크가 예제보다 한 단계 높은 쌍이 네 개 있다. 확인 체크가 예제보다 쉬운 경우는 286-e6(★4) → 286-667(★3) 하나다.
- 통찰형 비율(13/23)이 앞 단원 조각들(07-p2 는 8/23)보다 높은 것은 무리함수가 정의역 제약·무연근·역함수 대칭을 골조 안에 항상 끼고 있고, 이 조각이 단원의 필수·발전 예제 전체를 담고 있기 때문이다. 다만 depth 3 라벨은 하나도 없고 ★5 도 없다.
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 어긋나는 조건은 발견되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-287-672 | 통찰 라벨은 I-SYM d2 하나지만 「교점은 $y=x$ 위」라는 관성적 가정을 깨야 풀리는 구조라 이 범위에서 통찰의 질이 가장 높다. ★4 저노출 유형 요건(SYM)도 충족한다. 벤더 신호(확인 체크 · 필수 예제 짝)와 2단 벌어지는 것을 피해 ★3 으로 두고 기록 | ★3 / ★4 |
| GN-CM2-287-671 | $(g^{-1}\circ f)^{-1}=f^{-1}\circ g$ 분해를 I-EQV d2(동치 변환)로 셀지 I-SC d2(두 갈래 중 빠른 쪽 선택)로 셀지가 경계다. SC 로 보면 ★4 저노출 요건이 생긴다. 개념원리가 이 분해식을 KEY Point 로 제시하므로 EQV 로 두었다 | ★3 (SC 인정 시 ★3~4) |
| GN-CM2-285-665 | 근호 앞 마이너스와 $a<0$ 이 겹쳐 그래프가 증가한다는 판정을 I-EQV d1 로 따로 셀지, 함정(Mₜ = T-부호)으로만 볼지가 경계다. 쌍둥이 285-e5·664 와 라벨을 맞추려고 RT d1 하나로 통일하고 함정으로 처리했다 | ★2 (EQV 추가 인정 시 ★3) |
| GN-CM2-283-659 | 「이동으로 겹쳐진다 ⇔ 근호 안 계수의 절댓값이 같다」는 불변량을 스스로 찾아야 해 283 쪽 확인 체크 셋 중 가장 무겁다. 통찰이 1 개(EQV d2)라 조정 규칙상 +1 이 되지 않아 ★2 로 두었다 | ★2 / ★3 |

벤더 신호(구역 「필수·발전 예제」 · tag 「필수」 ★2 출발 · tag 「발전」 ★3 출발)와 2단 이상 어긋난 문항은 없다. 가장 크게 벌어진 것이 ★3 으로 올린 다섯 문항과 ★4 로 올린 세 문항으로 모두 1단 차이다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **이 범위에서 가장 크게 반복된 type_hint 는 「무리함수의 그래프와 직선의 위치 관계」 4문**(286쪽 전부)이고, 이 단원에서 유일하게 ★4 가 나오는 갈래다. 한 덩어리로 묶되 소분류 셋(기울기 고정 직선의 평행이동 / 원점 등 고정점을 지나는 직선의 회전 / 접선 조건만 묻는 단순형)을 두는 편이 좋다. base ★ 는 3 이고, 경계가 접선 하나뿐이라 판별식 부등호로 끝나는 단순형(286-667)만 ★3, 경계가 둘이라 「한 점」·「두 점」이 갈리는 것(286-e6 · 668 · 669)은 ★4 다.
- **통합 후보**: 「그래프 그리기와 정의역·치역」(282-e2 · 282-656) · 「평행이동·대칭이동」(283-e3 · 283-658 · 283-660) · 「제한된 정의역에서의 최대·최소」(284-e4 · 284-661 · 284-662)는 모두 「$\pm\sqrt{a(x-p)}+q$ 로 정리한 뒤 시작점과 뻗는 방향을 읽는다」는 한 골조다. 상위 유형 「무리함수의 표준형과 그래프 읽기」 하나에 소분류 셋을 다는 것을 제안한다. base ★ 는 2 이고, 미지 끝점·미지 상수가 붙는 284-663 · 285-666 만 ★2 의 윗자리로 쓴다.
- **따로 세울 유형 1 — 「그래프를 보고 무리함수의 식 구하기」**(285-e5 · 285-664 · 285-665): 이 범위에서 유일하게 그림이 조건의 원천이고, 시작점·통과점이라는 기하 정보를 상수 조건으로 옮기는 I-RT d1 이 고정으로 붙는다. base ★ 2. 그림 라벨이 정수 좌표라는 제약 때문에 숫자 변형의 폭이 좁으므로 변형 때는 라벨 좌표부터 고정하고 식을 역으로 맞춘다.
- **따로 세울 유형 2 — 「이동으로 겹쳐지는 무리함수 판정」**(283-659): 겹침의 불변량(근호 안 계수의 절댓값)을 묻는 유일한 갈래로, 같은 발상이 유리함수(32단원)의 점근선 불변량에서도 재등장한다. base ★ 2, 근호 앞 계수까지 있는 꼴로 올리면 ★3.
- **따로 세울 유형 3 — 「역함수」**(287-e7 · 287-670 · 287-671 · 287-672): 네 문항이 각각 다른 갈래다 — 역함수 구하기(e7) · 정의역 제한 이차함수의 역함수(670) · 합성의 역함수 분해(671) · $y=f(x)$ 와 $y=f^{-1}(x)$ 의 교점(672). 상위 유형 「무리함수와 역함수」 하나에 소분류 넷을 달되 base ★ 는 e7 만 2, 나머지 셋은 3 으로 둔다. 672 의 「$y=x$ 대칭 교점」은 이 단원에서 ★4 로 올릴 수 있는 두 번째 갈래이므로 카탈로그에서 저노출(I-SYM) 유형으로 표시한다.
- 33단원 마지막 조각(33-p3 · 연습문제 STEP 1/2·실력 UP)을 정독한 뒤 위 base ★ 가 ★4~5 구간까지 이어지는지, 「그래프와 직선의 위치 관계」를 33 에 둘지 32(유리함수)와 묶어 「분수·무리함수와 직선」 상위 유형으로 세울지 확정한다.
