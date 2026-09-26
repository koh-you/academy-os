---
name: mechanism-데이터-GN-M31-16-p1
description: 개념원리 중학 3-1 16 이차방정식의 활용(1/2 · 148~153쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 16 이차방정식의 활용
  unit_code: GN-M31-16
  part: "1/2"
  extract_range: "148~153쪽 · 148-01~153-05"
  total_problems: 26
  unit_total: 58
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 16 이차방정식의 활용 (1/2) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **16 이차방정식의 활용**(58문항) 중 **앞 절반 26문항**(148~153쪽)을 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 17문(핵심문제 h 6 + 확인문제 c 11) · 「이런 문제가 시험에 나온다」 5문이다. 난이도 level 표기와 태그는 없고, 그림이 붙은 문항이 9문이다.

개념원리 중학은 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 소문항으로 과정을 쪼개 준 드릴(★1), 「핵심문제 익히기」는 대표 유형(h) + 짝 확인문제(c)(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다.

이 단원에서 **푸는 단계는 모든 문항이 같다** — 우변을 0 으로 정리하고 인수분해해 두 근을 얻는다. 난도가 갈리는 자리는 오직 셋이다: **⑴ 식이 주어졌는가 / 스스로 세우는가**, **⑵ 세울 때 거쳐야 하는 변환의 단 수**(둘레→반둘레 · 매초 변화→t 식 · 전개도→입체), **⑶ 두 근 중 하나를 고르거나 둘 다 채택하는 조건**. 그래서 M 은 Mₛ·Mₜ 로 벌어지고 Mₖ 는 거의 1 이다.

**통찰 판정 기준(이 파일)**: 문장을 이차방정식으로 옮기는 것, 그리고 음수·0·범위 밖 근을 조건으로 버리는 것은 이 단원이 **가르치는 표준 절차**라 통찰로 세지 않았다. 통찰(I-RT)로 센 자리는 **도형의 배치를 바꿔 식을 한 줄로 줄이는 자리**뿐이다 — 통로를 가장자리로 평행이동(152-h6 · c9 · c10), 둘레 꽃밭을 전체−연못의 차집합으로(152-c11), 그림의 「5 cm」를 두 변의 합으로 읽기(151-c8), 전개도를 입체 부피로(153-05). ★ 조정은 지시 규칙(통찰 0 · M_total ≤ 5 → −1 / 통찰 2개 이상 또는 depth 3 → +1)에 **통찰 1개 depth 2 이면서 M_total ≥ 7 → +1** 한 줄을 더해 일관되게 적용했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-148-01
  page: 148
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    1 부터 n 까지의 합 공식 n(n+1)/2 이 주어진 상태에서, 합이 210 이 되는 n 을 구하는 풀이 과정의 빈칸 6 개를 채우기.
  category: "합 공식에 값 대입 → 이차방정식 정리·인수분해 → 자연수 근 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "식이 주어진 문제 — 자연수의 합 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이 줄이 전부 인쇄돼 있고 학생은 값만 채운다. 판단이 필요한 자리는 마지막 「n 은 자연수이므로」 한 곳뿐(T-범위).
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "n(n+1)/2=210 → n^2+n-420=0 → (n+21)(n-20)=0 → 자연수 조건으로 n=20"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$210$, $420$, $20$, $20$, $20$, $20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/148-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값 210 을 다른 삼각수로 바꾼다(78 → n=12 · 300 → n=24 · 465 → n=30). 제약: n(n+1)/2 가 정확히 그 값이 되는 삼각수여야 빈칸이 정수로 떨어지고, 인수분해 (n+(k+1))(n-k) 의 두 상수도 함께 바뀐다."
    creative: "(1) 빈칸을 없애고 「1 부터 얼마까지 더해야 하는가」만 묻기(★1~2) (2) 공식을 주지 않고 1+2+...+n 을 직접 세우게 하면 공식 회상이 추가돼 ★2 (3) 「합이 210 을 처음 넘는 n」으로 바꾸면 부등식·경계 판단이 붙어 ★3."
```

```yaml
- id: GN-M31-148-02
  page: 148
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 어떤 수의 제곱이 그 수의 5 배보다 36 만큼 크다. ⑴ x 에 대한 이차방정식 세우기 ⑵ 풀어서 어떤 수 구하기.
  category: "문장 → 이차방정식 세우기 → 인수분해로 두 근 모두 채택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수에 대한 문제 — 제곱과 배수 관계로 식 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「제곱한 수는 5 배보다 36 만큼 크다」를 x^2=5x+36 으로 옮기는 한 단계가 전부고, 소문항이 그 한 단계를 따로 떼어 준다.
    함정은 「어떤 수」가 자연수가 아니라는 점 — 음수 근 -4 를 버리면 안 된다(T-범위, 방향이 반대인 함정).
    통찰 0 · M_total 5 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "x^2=5x+36 → x^2-5x-36=0 → (x+4)(x-9)=0 → 두 근 -4, 9 모두 채택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^2=5x+36$ ⑵ $-4$, $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/148-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 5 와 차 36 을 바꾼다(3 배보다 40 큼 → -5, 8 / 2 배보다 63 큼 → -7, 9). 제약: 판별식 b^2+4c 가 완전제곱수여야 인수분해로 떨어지고, 두 근의 부호가 갈려야 「음수 근을 버리지 않는다」는 함정이 살아남는다."
    creative: "(1) 「어떤 자연수」로 바꾸면 근 하나를 버려야 해 범위 판단이 추가(★1 유지·오답률 상승) (2) 「제곱한 수가 5 배보다 36 만큼 작다」로 뒤집으면 실근이 없어 이차방정식의 해 존재 판정과 결합 ★2 (3) 두 근의 합·곱을 묻는 형태로 확장 ★2."
```

```yaml
- id: GN-M31-148-03
  page: 148
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 펼친 수학책 두 면의 쪽수의 곱이 110. ⑴ 두 면을 x, x+1 로 놓고 이차방정식 세우기 ⑵ 풀어서 두 쪽수 구하기.
  category: "연속한 두 자연수 설정 → 곱으로 식 세우기 → 자연수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속한 두 수 — 펼친 책의 쪽수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변수 설정 x, x+1 을 문제가 직접 지정해 주므로 남는 일은 x(x+1)=110 을 정리해 110=10×11 을 읽는 것뿐이다.
    함정은 음수 근 -11 을 쪽수 조건으로 버리는 자리 하나(T-범위).
    통찰 0 · M_total 5 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "x(x+1)=110 → x^2+x-110=0 → (x+11)(x-10)=0 → 쪽수는 자연수이므로 10, 11"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x(x+1)=110$ ⑵ $10$, $11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/148-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱의 값을 다른 두 연속수의 곱으로 바꾼다(156=12×13 · 210=14×15 · 272=16×17). 제약: 반드시 연속한 두 자연수의 곱이어야 인수분해가 정수로 떨어진다."
    creative: "(1) 「두 쪽수의 합이 23」을 추가 조건으로 주면 연립으로 갈래가 생겨 ★2 (2) 펼친 두 면이 아니라 「연속한 세 쪽의 합」으로 바꾸면 일차방정식이 돼 난도 하락 (3) 두 면의 쪽수 차가 1 이 아닌 책(뒷면 인쇄 등)으로 설정을 바꾸면 변수 설정 자체가 통찰이 돼 ★3."
```

```yaml
- id: GN-M31-148-04
  page: 148
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 길이 28 m 인 철사로 넓이 48 m^2 인 직사각형 만들기. ⑴ 가로를 x 라 할 때 세로를 x 의 식으로 ⑵ 넓이 조건으로 이차방정식 세우기 ⑶ 가로가 세로보다 길 때 가로의 길이.
  category: "둘레 → 반둘레로 세로 표현 → 넓이 식 → 두 근 중 가로 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에 대한 문제 — 둘레와 넓이가 주어진 직사각형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 유형의 진짜 관문은 「둘레 28 → 가로+세로 14」 한 줄인데, 소문항 ⑴ 이 그 자리를 따로 떼어 물어 준다.
    함정 둘 — 둘레를 그대로 28 로 쓰는 단위 혼동(T-단위)과, 두 근 6·8 이 각각 세로·가로여서 무엇을 답할지 고르는 자리(T-표기).
    통찰 0 · M_total 6 이나 과정이 3 단으로 쪼개진 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "둘레 28 → 가로+세로=14 → 세로 14-x → x(14-x)=48 → x=6 또는 8 → 가로>세로이므로 8 m"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(14-x)\,\mathrm{m}$ ⑵ $x(14-x)=48$ ⑶ $8\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/148-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레와 넓이 쌍을 바꾼다(둘레 26·넓이 40 → 5,8 / 둘레 34·넓이 70 → 7,10). 제약: 반둘레 s 와 넓이 A 에 대해 s^2-4A 가 완전제곱수여야 정수 해가 나오고, 두 근이 달라야 「가로가 더 길다」 조건이 의미를 가진다."
    creative: "(1) 소문항을 없애고 곧장 가로를 물으면 반둘레 환산이 관문이 돼 ★2 (2) 철사 일부를 정사각형에 쓰는 이중 배분으로 바꾸면 변수 설정이 갈라져 ★3 (3) 「넓이가 최대가 되는 가로」로 바꾸면 이차함수 단원으로 넘어가 이 단원 밖."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-149-h1
  page: 149
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    n 각형의 대각선의 개수가 n(n-3)/2 임이 주어졌을 때, 대각선이 27 개인 다각형이 몇 각형인지 구하기.
  category: "주어진 공식에 값 대입 → 이차방정식 → 자연수 근 → 다각형 이름으로 환산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "식이 주어진 문제 — 대각선 개수 공식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식이 통째로 주어지므로 대입 후 n^2-3n-54=0 을 인수분해하는 것이 전부다. 새로 착안할 것이 없어 절차형.
    함정 둘 — 음수 근 -6 을 버리는 범위 조건(T-범위)과, 답을 「9」가 아니라 「구각형」으로 써야 하는 표기(T-표기).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "n(n-3)/2=27 → n^2-3n-54=0 → (n-9)(n+6)=0 → 자연수이므로 n=9 → 구각형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '구각형'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/149-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대각선 개수를 바꾼다(14 → 칠각형 · 20 → 팔각형 · 35 → 십각형 · 54 → 십이각형). 제약: n(n-3)/2 가 그 값이 되는 자연수 n(n≥3)이 존재해야 한다."
    creative: "(1) 「대각선이 변의 개수보다 9 개 많은 다각형」으로 바꾸면 조건을 식으로 옮기는 단계가 추가돼 ★2~3 (2) 공식을 주지 않고 한 꼭짓점에서 긋는 대각선 수부터 세우게 하면 ★3 (3) 내각의 크기의 합과 결합하면 단원 경계를 넘어 I-XU ★3."
```

```yaml
- id: GN-M31-149-c1
  page: 149
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    n 명이 서로 한 번씩 악수한 총횟수가 n(n-1)/2 임이 주어졌을 때, 총횟수가 105 인 동호회의 회원 수 구하기.
  category: "주어진 공식에 값 대입 → 이차방정식 → 자연수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "식이 주어진 문제 — 악수 횟수 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    149-h1 과 완전히 같은 골조인데 답 표기 함정이 없어 판단 자리가 「자연수」한 곳뿐이다.
    통찰 0 · M_total 5 → 지시 규칙의 -1 을 적용해 핵심문제 구역 ★2 출발에서 ★1.
    [분류 이슈] 짝 핵심문제 149-h1(★2)과 골조가 같은데 Mₜ 한 점 차이로 ★ 가 갈린다.
  tier: star_1
  mechanism_primary: "n(n-1)/2=105 → n^2-n-210=0 → (n-15)(n+14)=0 → 자연수이므로 15명"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$15$명'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/149-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총횟수를 바꾼다(28 → 8명 · 45 → 10명 · 66 → 12명 · 190 → 20명). 제약: n(n-1)/2 가 그 값이 되는 자연수 n 이 있어야 하고, 곱 n(n-1) 이 연속한 두 수의 곱으로 읽혀야 인수분해가 쉽다."
    creative: "(1) 「회원이 3 명 늘면 악수 횟수가 몇 배가 되는가」로 바꾸면 두 식의 비가 붙어 ★3 (2) 악수 대신 「모든 두 지점을 잇는 직선의 개수」로 표현만 바꾸면 I-RT 가 붙어 ★2 (3) 공식을 주지 않고 각자 n-1 명과 악수하고 2 로 나누는 이유까지 설명하게 하면 서술형 ★3."
```

```yaml
- id: GN-M31-149-h2
  page: 149
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    연속하는 세 자연수에서 가장 큰 수의 제곱이 다른 두 수의 제곱의 합과 같을 때, 세 수 구하기.
  category: "연속 세 수를 x-1, x, x+1 로 설정 → 제곱 전개·정리 → 자연수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수에 대한 문제 — 연속하는 세 자연수의 제곱 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변수를 가운데 수 x 기준으로 놓으면 (x+1)^2=(x-1)^2+x^2 에서 x^2-4x=0 로 한 번에 정리된다. 교재가 이 설정을 직접 가르치므로 통찰로는 세지 않았다.
    함정 둘 — 근 x=0 을 자연수 조건으로 버리는 자리(T-범위)와, 답이 x 하나가 아니라 세 수 전부라는 것(T-표기).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "세 수를 x-1, x, x+1 로 → (x+1)^2=(x-1)^2+x^2 → x^2-4x=0 → x(x-4)=0 → 자연수이므로 x=4 → 3, 4, 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$, $4$, $5$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/149-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 관계를 만족하는 연속 세 자연수는 3,4,5 뿐이라 값 자체는 못 바꾼다. 바꿀 수 있는 것은 간격(연속한 세 짝수 x-2,x,x+2 → 6,8,10)과 결합 방식(합·곱 조건)이다. 제약: 간격을 d 로 하면 해가 x=4d 로 스케일되므로 d 를 정하면 답이 자동 결정된다."
    creative: "(1) 「연속한 세 짝수」·「연속한 세 홀수」로 바꾸면 설정만 달라지고 골조는 유지(★2) (2) 「가장 큰 수의 제곱이 나머지 두 수의 곱보다 25 크다」처럼 우변을 바꾸면 전개가 달라져 ★2~3 (3) 세 수를 x, x+1, x+2 로 놓게 유도하면 전개량이 늘어 Mₖ 상승·질은 하락."
```

```yaml
- id: GN-M31-149-c2
  page: 149
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    어떤 자연수와 그 수의 제곱의 합이 72 일 때, 그 자연수 구하기.
  category: "문장 → 한 줄 이차방정식 → 자연수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수에 대한 문제 — 수와 그 제곱의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식이 x^2+x=72 한 줄이고 72=9×8 을 읽으면 끝난다. 이 범위에서 가장 짧은 문항.
    판단 자리는 음수 근 -9 를 버리는 곳 하나(T-범위).
    통찰 0 · M_total 5 → -1 적용해 핵심문제 구역 ★2 출발에서 ★1.
  tier: star_1
  mechanism_primary: "x+x^2=72 → x^2+x-72=0 → (x+9)(x-8)=0 → 자연수이므로 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/149-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값을 바꾼다(42 → 6 · 110 → 10 · 156 → 12). 제약: n^2+n=S 를 만족하는 자연수 n 이 있어야 하므로 S 는 연속한 두 자연수의 곱이어야 한다."
    creative: "(1) 「어떤 정수」로 바꾸면 근 두 개가 모두 답이 돼 두 근 채택 연습(★1) (2) 「어떤 수와 그 제곱의 차가 72」로 바꾸면 부호 처리가 추가돼 ★2 (3) 「연속한 두 자연수의 곱이 72」로 표현을 바꾸면 148-03 과 같은 골조가 돼 유형 통합 가능."
```

```yaml
- id: GN-M31-149-c3
  page: 149
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    연속하는 두 홀수의 곱이 143 일 때, 두 수 구하기.
  category: "연속 두 홀수를 x, x+2 로 설정 → 곱 식 → 양수 근 선택 → 두 수 모두 답"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수에 대한 문제 — 연속하는 두 홀수의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관문은 「연속한 두 홀수의 차는 1 이 아니라 2」를 x, x+2 로 옮기는 자리다. 여기만 넘으면 143=11×13 이 바로 보인다.
    함정 둘 — 간격을 1 로 잡는 설정 오류(T-표기)와 음수 근 -13 처리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 수를 x, x+2 로 → x(x+2)=143 → x^2+2x-143=0 → (x-11)(x+13)=0 → 양의 홀수이므로 11, 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$, $13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/149-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱의 값을 연속한 두 홀수의 곱으로 바꾼다(63=7×9 · 99=9×11 · 195=13×15 · 255=15×17). 제약: 반드시 홀수 두 개의 곱이어야 하고, 짝수 쌍으로 바꾸려면 설정도 x, x+2 (짝수)로 함께 바꿔야 한다."
    creative: "(1) 「연속한 두 짝수의 제곱의 합이 164」(153-01)와 같은 축으로 묶어 곱↔제곱합 대비 세트 구성 (2) 「두 홀수의 합이 24, 곱이 143」으로 주면 연립·근과 계수 관계로 확장 ★3 (3) 「곱이 143 인 두 자연수」로 느슨하게 하면 1×143 도 답이 돼 다중 해 판단 ★2~3."
```

```yaml
- id: GN-M31-150-h3
  page: 150
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    아버지와 아들의 나이 차가 24 살이고 아들 나이의 제곱이 아버지 나이의 4 배와 같을 때, 아들의 나이 구하기.
  category: "나이 차로 아버지를 x+24 로 표현 → 제곱=4배 조건 → 양수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활에 대한 문제 — 나이 차와 제곱 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 사람을 한 변수로 묶는 자리(아들 x, 아버지 x+24)가 관문이고 그 뒤는 x^2=4(x+24) 정리뿐이다.
    함정 둘 — 무엇의 4 배인지 좌우를 뒤바꾸는 대응 오류(T-표기)와 음수 근 -8 처리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "아들 x, 아버지 x+24 → x^2=4(x+24) → x^2-4x-96=0 → (x-12)(x+8)=0 → 나이는 양수이므로 12살"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$살'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/150-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나이 차 24 와 배수 4 를 바꾼다(차 21·3 배 → 9살 / 차 28·3 배 → 12살 / 차 32·2 배 → 8살). 제약: x^2-kx-24k... 형태에서 판별식이 완전제곱수여야 하고, 아들 나이가 아버지 나이보다 작다는 상식 조건도 지켜져야 한다."
    creative: "(1) 「몇 년 후에 아버지 나이가 아들 나이의 제곱이 되는가」로 바꾸면 미래 시점 변수가 추가돼 ★3 (2) 아버지를 x 로 두게 유도하면 식이 (x-24)^2=4x 로 무거워져 Mₖ 상승 (3) 나이 대신 「두 수의 차가 24, 작은 수의 제곱이 큰 수의 4 배」로 추상화하면 Mₐ 상승 ★2~3."
```

```yaml
- id: GN-M31-150-c4
  page: 150
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    사탕 84 개를 학생들에게 똑같이 나누어 줄 때 한 사람이 갖는 개수가 학생 수보다 5 만큼 작다. 한 사람이 갖는 개수 구하기.
  category: "학생 수 x → 1인당 x-5 → 곱=총개수 → 자연수 근 → 묻는 값으로 환산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활에 대한 문제 — 똑같이 나누어 주기(개수×인원=총량)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (학생 수)×(1인당 개수)=(총개수)로 묶는 자리가 골조 전부다.
    함정 둘 — 음수 근 -7 을 버리는 자리(T-범위)와, x=12 는 학생 수이고 답은 1 인당 개수 7 이라는 것(T-표기, 이 유형의 주 오답).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "학생 수 x, 1인당 x-5 → x(x-5)=84 → (x-12)(x+7)=0 → x=12 → 1인당 12-5=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/150-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총개수와 차를 바꾼다(총 54·차 3 → 학생 9·1인당 6 / 총 130·차 3 → 학생 13·1인당 10 / 총 96·차 4 → 학생 12·1인당 8). 제약: 총량이 차가 d 인 두 자연수의 곱으로 분해돼야 한다."
    creative: "(1) 묻는 대상을 학생 수로 바꾸면 마지막 환산이 사라져 난도 하락(153-02 가 그 형태) (2) 「3 개가 남았다」처럼 나머지를 넣으면 식이 x(x-5)+3=84 로 한 단 늘어 ★3 (3) 「한 명이 더 오면 1 인당 2 개씩 줄어든다」로 바꾸면 두 상황 비교가 생겨 ★3~4."
```

```yaml
- id: GN-M31-150-h4
  page: 150
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑵ 지면에서 초속 30 m 로 쏘아 올린 물체의 t 초 후 높이가 (30t-5t^2) m 일 때 ⑴ 높이가 40 m 가 되는 때를 모두 ⑵ 지면에 떨어지는 때.
  category: "주어진 높이 식에 값 대입 → 이차방정식 → 두 근 모두 채택 / 높이 0 으로 낙하 시각"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체에 대한 문제 — 높이 식이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    높이 식이 주어져 있어 ⑴ 은 대입, ⑵ 는 「지면에 떨어진다 = 높이 0」 한 번의 번역이다. 교재가 그 번역을 유형으로 가르치므로 통찰로는 세지 않았다.
    함정 둘 — ⑴ 에서 두 근 2·4 를 모두 답해야 한다는 것(올라갈 때·내려올 때, T-범위)과 ⑵ 에서 t=0 을 출발 시각으로 버리는 것(T-경계).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "30t-5t^2=40 → t^2-6t+8=0 → t=2, 4 (둘 다) / 30t-5t^2=0 → 5t(6-t)=0 → t>0 이므로 6초"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2$초, $4$초 ⑵ $6$초'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/150-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속(식의 일차항 계수)과 묻는 높이를 바꾼다(초속 40·높이 60 → 2,6초·낙하 8초 / 초속 20·높이 15 → 1,3초·낙하 4초). 제약: 5t^2-vt+h=0 의 판별식이 완전제곱수여야 하고 h 가 최고 높이 v^2/20 이하여야 실근이 생긴다."
    creative: "(1) 「높이가 40 m 이상인 시간은 몇 초 동안인가」로 바꾸면 두 근의 차를 쓰는 단계가 붙어 ★3 (2) 최고 높이를 묻으면 완전제곱 변형이 필요해 ★3 (3) 지면이 아니라 건물 위에서 쏘면 상수항이 붙어 150-c5 형태가 됨(★2 유지)."
```

```yaml
- id: GN-M31-150-c5
  page: 150
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 지면에서 30 m 높이에서 초속 25 m 로 쏘아 올린 물체의 t 초 후 높이가 (30+25t-5t^2) m 일 때 ⑴ 높이가 50 m 가 되는 때를 모두 ⑵ 지면에 떨어지는 때.
  category: "주어진 높이 식에 값 대입 → 이차방정식 → 두 근 모두 채택 / 높이 0 으로 낙하 시각"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체에 대한 문제 — 출발 높이가 있는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    150-h4 와 같은 골조에 상수항 30 이 붙은 형태. ⑵ 에서 「지면 = 높이 0」이 30+25t-5t^2=0 이 되어 t=-1 이라는 무의미한 근이 실제로 생긴다.
    함정 둘 — 출발 높이 30 을 빠뜨리고 식을 다시 세우려는 시도(T-단위)와 음수 시각 t=-1 을 버리는 자리(T-범위·경계).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "30+25t-5t^2=50 → t^2-5t+4=0 → t=1, 4 (둘 다) / 30+25t-5t^2=0 → t^2-5t-6=0 → t>0 이므로 6초"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$초, $4$초 ⑵ $6$초'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/150-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 높이·초속·묻는 높이를 함께 바꾼다(출발 20·초속 15·높이 30 → 1,2초 / 출발 40·초속 30·높이 85 → 1,5초). 제약: 두 이차방정식(묻는 높이용·낙하용)이 모두 정수 근을 갖도록 상수항과 일차항을 같이 맞춰야 한다."
    creative: "(1) ⑵ 의 답을 이용해 「최고 높이에 도달하는 시각」까지 물으면 대칭축 착안(I-SYM)이 붙어 ★3 (2) 출발 높이를 미지수 a 로 두고 낙하 시각이 6 초가 되도록 a 를 구하게 하면 역방향(I-BW) ★3 (3) 두 물체를 동시에 쏘아 같은 높이가 되는 시각을 묻는 형태로 확장 ★4."
```

```yaml
- id: GN-M31-151-h5
  page: 151
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    정사각형 잔디밭의 가로를 2 m 늘이고 세로를 4 m 줄였더니 넓이가 72 m^2 인 직사각형이 되었다. 처음 정사각형의 한 변의 길이 구하기.
  category: "한 변 x 로 두고 변형 후 두 변을 x 의 식으로 → 넓이 식 → 양수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에 대한 문제 (1) — 변의 길이를 늘이고 줄인 직사각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 도형이 정사각형이라 한 변만 x 로 두면 변형 후가 (x+2), (x-4) 로 바로 나온다. 그림은 이 관계를 확인해 줄 뿐 새 정보를 주지 않는다.
    함정 둘 — 늘임·줄임의 부호를 뒤바꾸는 자리(T-부호)와, 세로가 양수여야 하므로 x>4 로 음수 근 -8 을 버리는 자리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "한 변 x → (x+2)(x-4)=72 → x^2-2x-80=0 → (x-10)(x+8)=0 → x>4 이므로 10 m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10\,\mathrm{m}$'
  answer_source: "본문 답"
  figure: crop:fig-151-h5.png
  latex: latex-bank/gn-m31/items/151-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "늘임·줄임 값과 결과 넓이를 바꾼다(+3, -5, 넓이 65 → 12 / +1, -3, 넓이 45 → 8 / +4, -2, 넓이 96 → 10). 제약: (x+a)(x-b)=S 에서 판별식 (a-b)^2+4(S+ab) 가 완전제곱수여야 하고 해가 b 보다 커야 세로가 양수다."
    creative: "(1) 처음 도형을 직사각형(가로가 세로보다 3 긴)으로 바꾸면 변수 설정이 한 단 늘어 ★3 (2) 「넓이가 처음과 같아지도록 늘인 길이를 구하라」로 뒤집으면 역방향(I-BW) ★3 (3) 둘레가 그대로라는 조건을 추가하면 조건 통합(I-CON) ★3~4."
```

```yaml
- id: GN-M31-151-c6
  page: 151
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    둘레가 24 cm, 넓이가 35 cm^2 인 직사각형에서 가로가 세로보다 길 때 가로의 길이 구하기.
  category: "둘레 → 반둘레로 세로 표현 → 넓이 식 → 두 근 중 가로 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에 대한 문제 (1) — 둘레와 넓이가 주어진 직사각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    148-04 의 소문항을 떼어낸 형태다. 「둘레 24 → 가로+세로 12」를 스스로 세워야 하는 만큼만 올라간다.
    함정 둘 — 둘레를 그대로 쓰는 단위 혼동(T-단위)과, 두 근 5·7 이 각각 세로·가로여서 「가로가 더 길다」로 고르는 자리(T-표기). 근을 버리는 것이 아니라 이름을 붙이는 자리이므로 I-VF 로 세지 않았다.
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "둘레 24 → 가로+세로=12 → x(12-x)=35 → x^2-12x+35=0 → x=5 또는 7 → 가로>세로이므로 7 cm"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/151-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레·넓이 쌍을 바꾼다(둘레 20·넓이 21 → 7 / 둘레 30·넓이 54 → 9 / 둘레 26·넓이 40 → 8). 제약: 반둘레 s, 넓이 A 에 대해 s^2-4A 가 완전제곱수여야 하고 두 근이 서로 달라야 대소 조건이 살아난다."
    creative: "(1) 「가로가 세로보다 2 cm 길다」를 조건으로 주면 대소 선택이 사라지고 설정이 바뀜(★2) (2) 「넓이가 35 이하가 되는 가로의 범위」로 바꾸면 이차부등식이 돼 단원 밖 (3) 둘레는 같고 넓이가 최대인 경우를 묻는 형태는 정사각형 판정이 필요해 ★4."
```

```yaml
- id: GN-M31-151-c7
  page: 151
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    가로 18 cm, 세로 15 cm 인 직사각형 사진의 가로·세로를 각각 x cm 씩 줄였더니 넓이가 처음의 2/3 배가 되었다. x 의 값 구하기.
  category: "두 변에서 같은 값 감소 → 넓이 비율로 우변 결정 → 이차방정식 → 범위 근 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에 대한 문제 (1) — 가로·세로를 같은 길이만큼 줄인 직사각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 151-h5 와 같고, 우변이 숫자가 아니라 「처음 넓이의 2/3 배」라 270×2/3=180 을 먼저 계산해야 하는 것이 유일한 추가 단이다. 착안이라기보다 계산 한 줄이라 절차형.
    함정 둘 — 2/3 을 줄어든 넓이에 잘못 거는 대응 오류(T-단위)와, 0<x<15 로 근 30 을 버리는 자리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지(+1 조건인 통찰 1개 이상을 만족하지 않음).
  tier: star_2
  mechanism_primary: "(18-x)(15-x)=270×2/3=180 → x^2-33x+90=0 → (x-3)(x-30)=0 → 0<x<15 이므로 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: crop:fig-151-c7.png
  latex: latex-bank/gn-m31/items/151-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 두 변과 비율을 바꾼다(20×12·3/4 배 → x=2 / 16×10·1/2 배 → x=... 는 무리수이므로 불가). 제약: (a-x)(b-x)=k·ab 를 전개한 x^2-(a+b)x+ab(1-k)=0 의 판별식이 완전제곱수여야 하고, 작은 근이 0 과 min(a,b) 사이여야 한다."
    creative: "(1) 가로만 x, 세로는 2x 줄이면 계수가 달라져 Mₖ 상승 ★3 (2) 「넓이가 처음보다 90 cm^2 줄었다」로 바꾸면 비율 계산이 빠져 ★2 하단 (3) 줄인 테두리를 액자 폭으로 재해석하면 152 의 통로형(I-RT)과 같은 골조가 돼 ★3."
```

```yaml
- id: GN-M31-151-c8
  page: 151
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    밑변이 한 직선 위에 나란히 붙은 두 정사각형(밑변의 합 5 cm)의 넓이의 합이 13 cm^2 일 때, 큰 정사각형의 한 변의 길이 구하기.
  category: "그림의 5 cm 를 두 변의 합으로 읽기 → 한 변 x, 다른 변 5-x → 제곱의 합 → 큰 쪽 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "발문에 길이 정보가 전혀 없고 그림의 밑변 5 cm 만 주어진다. 두 정사각형이 나란히 놓였다는 배치를 읽어 한 변을 x, 다른 변을 5-x 로 옮기는 기하→대수 전환이 이 문항의 전부다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 (1) — 나란히 붙은 두 정사각형의 넓이의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수를 하나로 묶는 근거가 오직 그림에 있다. 「5 cm 가 두 변의 합」을 읽지 못하면 미지수가 둘이 되어 손을 못 댄다(I-RT d2).
    식을 세운 뒤에도 x^2+(5-x)^2=13 을 전개해 2 로 나누는 단이 있고(Mₖ 2), 두 근 2·3 중 큰 정사각형을 고르는 자리가 남는다(T-표기·T-범위).
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 · M_total 7 → +1 하여 ★3.
    [분류 이슈] 그림 없이는 풀 수 없는 문항이라, 그림을 못 본 학생에게는 ★3 이 아니라 풀이 불가다.
  tier: star_3
  mechanism_primary: "그림의 밑변 합 5 → 두 변 x, 5-x → x^2+(5-x)^2=13 → x^2-5x+6=0 → x=2 또는 3 → 큰 쪽 3 cm"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\,\mathrm{cm}$'
  answer_source: "답지"
  figure: crop:fig-151-c8.png
  latex: latex-bank/gn-m31/items/151-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변의 합 s 와 넓이의 합 A 를 바꾼다(s=7·A=25 → 3,4 / s=9·A=41 → 4,5 / s=8·A=34 → 3,5). 제약: 2x^2-2sx+s^2-A=0 의 판별식 2(2A-s^2) 이 완전제곱수여야 하고 두 변이 모두 양수여야 한다. 그림의 라벨(밑변 합)은 고정 위치이므로 숫자만 바꾼다."
    creative: "(1) 넓이의 합 대신 「둘레의 합」을 주면 일차식이 돼 난도 급락 (2) 두 정사각형의 넓이의 차를 함께 주면 조건 통합(I-CON) ★4 (3) 나란히가 아니라 한 정사각형 안에 다른 정사각형이 든 배치로 바꾸면 차집합 해석이 붙어 152-c11 골조와 결합 ★3~4."
```

```yaml
- id: GN-M31-152-h6
  page: 152
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    가로 16 m, 세로 10 m 인 직사각형 꽃밭에 폭이 x m 로 일정한 통로(가로 1 줄·세로 1 줄)를 냈더니 통로를 뺀 꽃밭 넓이가 112 m^2 가 되었다. x 의 값 구하기.
  category: "통로를 가장자리로 평행이동 → (16-x)(10-x)=112 → 폭 범위로 근 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "통로를 밭의 가장자리로 밀어 붙여도 남는 부분의 넓이가 같다는 배치 전환. 이 착안이 없으면 가로 통로·세로 통로·겹치는 정사각형을 각각 빼는 세 항짜리 식을 다뤄야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 (2) — 폭이 일정한 통로를 낸 직사각형의 남은 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원에서 학생이 실제로 막히는 대표 자리다. 평행이동 착안 없이 풀면 160-16x-10x+x^2 을 겹침 보정까지 직접 계산해야 한다(I-RT d2).
    함정 둘 — 겹치는 x^2 을 두 번 빼는 중복 차감(T-표기)과 0<x<10 으로 근 24 를 버리는 자리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "통로를 가장자리로 평행이동 → (16-x)(10-x)=112 → x^2-26x+48=0 → (x-2)(x-24)=0 → 0<x<10 이므로 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 답"
  figure: crop:fig-152-h6.png
  latex: latex-bank/gn-m31/items/152-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밭의 두 변과 남은 넓이를 바꾼다(20×12·남은 154 → x=1 / 18×14·남은 176 → x=2 / 15×12·남은 108 → x=3). 제약: (a-x)(b-x)=S 의 판별식 (a+b)^2-4(ab-S) 가 완전제곱수여야 하고 작은 근이 0 과 min(a,b) 사이여야 한다. 그림의 통로 줄 수(가로 1·세로 1)를 바꾸면 식이 달라지므로 그림과 함께 바꾼다."
    creative: "(1) 통로를 가로 2 줄·세로 1 줄로 늘리면 (a-2x)(b-x) 가 돼 계수가 바뀌고 ★3 유지 (2) 통로가 비스듬하면 평행이동이 통하지 않아 ★5 급(중3 범위 밖) (3) 남은 넓이 대신 「통로의 넓이가 48 m^2」로 물으면 차집합 방향이 뒤집혀 152-c11 골조 ★3."
```

```yaml
- id: GN-M31-152-c9
  page: 152
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    한 변이 10 m 인 정사각형 땅에 폭이 x m 로 일정한 도로(가로 1 줄·세로 1 줄)를 냈더니 도로를 뺀 땅의 넓이가 64 m^2 가 되었다. x 의 값 구하기.
  category: "도로를 가장자리로 평행이동 → (10-x)^2=64 → 폭 범위로 근 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "152-h6 과 같은 평행이동 전환. 처음 도형이 정사각형이라 전환 후 식이 (10-x)^2=64 라는 완전제곱이 되어 인수분해 없이 제곱근으로 끝난다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 (2) — 폭이 일정한 도로를 낸 정사각형의 남은 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    착안(I-RT d2)은 152-h6 과 동일하지만, 전환 뒤 계산이 (10-x)^2=64 → 10-x=±8 한 줄이라 Mₖ 가 1 로 내려간다.
    함정 둘 — 10-x=-8 에서 나오는 x=18 을 버리는 자리(T-범위)와 제곱근에서 부호를 하나만 쓰는 실수(T-부호).
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 · M_total 6 → +1 조건(M_total ≥ 7)을 못 채워 ★2 유지.
    [분류 이슈] 같은 통로형 짝(152-h6·c10·c11 은 ★3)과 ★ 가 갈린다 — 갈린 이유는 착안이 아니라 계산량 한 점이다.
  tier: star_2
  mechanism_primary: "도로를 가장자리로 평행이동 → (10-x)^2=64 → 10-x=8 (0<x<10) → 2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: crop:fig-152-c9.png
  latex: latex-bank/gn-m31/items/152-c9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변과 남은 넓이를 바꾼다(12·남은 81 → x=3 / 14·남은 121 → x=3 / 9·남은 49 → x=2). 제약: 남은 넓이가 완전제곱수여야 제곱근 풀이가 정수로 떨어진다. 그림의 도로 줄 수는 고정."
    creative: "(1) 땅을 직사각형으로 바꾸면 152-h6 과 같아져 ★3 (2) 도로 폭을 가로·세로에서 다르게(x, x+1) 주면 완전제곱이 깨져 ★3 (3) 「도로의 넓이가 36 m^2」로 물으면 전체-남은 방향이 돼 부호 처리 한 단 추가 ★3."
```

```yaml
- id: GN-M31-152-c10
  page: 152
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    가로 15 m, 세로 12 m 인 직사각형 정원에 폭이 일정한 길(가로 1 줄·세로 1 줄)을 냈더니 길을 뺀 정원의 넓이가 108 m^2 가 되었다. 길의 폭 구하기.
  category: "길을 가장자리로 평행이동 → (15-x)(12-x)=108 → 폭 범위로 근 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "152-h6 과 같은 평행이동 전환. 폭이 x 로 이름 붙어 있지 않고 「폭이 일정한 길」로만 주어져 변수 설정부터 학생 몫이다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 (2) — 폭이 일정한 길을 낸 직사각형의 남은 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    152-h6 과 같은 골조에 「폭을 x 로 놓는다」는 변수 설정까지 학생이 하도록 한 형태(I-RT d2).
    함정 둘 — 겹치는 x^2 중복 차감(T-표기)과 0<x<12 로 근 24 를 버리는 자리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "폭을 x 로 두고 길을 가장자리로 평행이동 → (15-x)(12-x)=108 → x^2-27x+72=0 → (x-3)(x-24)=0 → 0<x<12 이므로 3 m"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\,\mathrm{m}$'
  answer_source: "답지"
  figure: crop:fig-152-c10.png
  latex: latex-bank/gn-m31/items/152-c10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정원의 두 변과 남은 넓이를 바꾼다(16×10·남은 112 → 2 / 20×15·남은 234 → 2 / 18×12·남은 130 → 2 는 불가). 제약: (a-x)(b-x)=S 의 판별식이 완전제곱수여야 하고 작은 근이 0 과 min(a,b) 사이여야 한다."
    creative: "(1) 길을 세로 2 줄로 늘리면 (a-2x)(b-x) 로 계수가 바뀌어 ★3 유지 (2) 「길의 넓이가 남은 정원 넓이의 2/3」처럼 비율로 주면 우변 계산이 추가돼 ★4 (3) 폭이 서로 다른 두 길(x, x+1)이면 완전제곱이 깨져 Mₖ 상승 ★3~4."
```

```yaml
- id: GN-M31-152-c11
  page: 152
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    가로 5 m, 세로 3 m 인 직사각형 연못의 둘레에 폭이 일정한 꽃밭을 만들었더니 꽃밭의 넓이가 20 m^2 가 되었다. 꽃밭의 폭 구하기.
  category: "전체(연못+꽃밭) - 연못 = 꽃밭 → 양쪽 폭이므로 2x 증가 → 양수 근 선택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "테두리 모양인 꽃밭의 넓이를 직접 쪼개지 않고 (연못+꽃밭) 전체 직사각형에서 연못을 빼는 차집합으로 옮기는 전환. 모퉁이 조각까지 직접 더하면 식이 네 항으로 늘어난다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 (2) — 둘레에 폭이 일정한 테두리를 두른 직사각형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통로형의 뒤집힌 형태다. 차집합 전환(I-RT d2)과 함께 「폭이 양쪽에 붙으므로 각 변이 2x 씩 늘어난다」는 자리가 두 번째 관문이다.
    함정 둘 — 2x 가 아니라 x 만 더하는 폭 처리(T-단위)와 음수 근 -5 를 버리는 자리(T-범위).
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "폭 x → 전체 (5+2x)(3+2x) - 연못 15 = 20 → 4x^2+16x-20=0 → x^2+4x-5=0 → x>0 이므로 1 m"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1\,\mathrm{m}$'
  answer_source: "답지"
  figure: crop:fig-152-c11.png
  latex: latex-bank/gn-m31/items/152-c11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연못의 두 변과 꽃밭 넓이를 바꾼다(6×4·꽃밭 44 → 2 / 8×5·꽃밭 40 → 1 / 4×3·꽃밭 32 → 1 은 불가). 제약: 4x^2+2(a+b)x-S=0 의 판별식 (a+b)^2+4S 가 완전제곱수여야 하고, 꽃밭을 바깥이 아니라 안쪽에 두려면 폭 범위가 min(a,b)/2 미만이어야 한다."
    creative: "(1) 꽃밭을 연못 안쪽 테두리로 바꾸면 (5-2x)(3-2x) 가 돼 범위 조건이 까다로워지고 ★4 (2) 꽃밭 폭이 가로·세로에서 다르면 미지수가 둘이 돼 조건 하나가 더 필요 ★4 (3) 「꽃밭 넓이가 연못 넓이와 같다」로 주면 우변이 15 로 바뀌며 골조 유지 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-153-01
  page: 153
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    연속하는 두 짝수의 제곱의 합이 164 일 때 두 수 중 큰 수 구하기.
  category: "연속 두 짝수를 x, x+2 로 설정 → 제곱의 합 → 양수 근 → 큰 수로 환산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수에 대한 문제 — 연속하는 두 짝수의 제곱의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    149-c3 과 같은 설정(x, x+2)에 곱 대신 제곱의 합이 온 형태. 전개 후 양변을 2 로 나누는 한 줄이 추가될 뿐이다.
    함정 둘 — 짝수 간격을 1 로 잡는 설정 오류(T-표기)와, 구한 x=8 이 작은 수여서 답이 10 이라는 환산(T-표기·범위).
    「이런 문제가 시험에 나온다」 ★2~3 출발 · 통찰 0 · M_total 6 → 하단인 ★2.
  tier: star_2
  mechanism_primary: "두 수를 x, x+2 로 → x^2+(x+2)^2=164 → x^2+2x-80=0 → (x-8)(x+10)=0 → 양수이므로 x=8 → 큰 수 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/153-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱의 합을 바꾼다(100 → 6,8 / 244 → 10,12 / 340 → 12,14). 제약: 2x^2+4x+4=S 에서 S 는 짝수이고 (S-4)/2 로 정리했을 때 판별식이 완전제곱수여야 한다."
    creative: "(1) 「연속한 두 홀수」로 바꾸면 설정은 같고 답만 바뀜(★2) (2) 「연속한 세 짝수의 제곱의 합」으로 늘리면 가운데 기준 설정(I-SYM)이 이득이 돼 ★3 (3) 「두 짝수의 곱이 제곱의 합보다 4 작다」처럼 두 조건을 엮으면 I-CON ★3~4."
```

```yaml
- id: GN-M31-153-02
  page: 153
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    사과 130 개를 학생들에게 똑같이 나누어 줄 때 1 인당 개수가 학생 수보다 3 만큼 작다. 학생 수 구하기.
  category: "학생 수 x → 1인당 x-3 → 곱=총개수 → 자연수 근 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활에 대한 문제 — 똑같이 나누어 주기(개수×인원=총량)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    150-c4 와 같은 골조이면서 묻는 값이 변수 x 자신(학생 수)이라 마지막 환산조차 없다. 130=13×10 을 읽으면 끝.
    판단 자리는 음수 근 -10 을 버리는 곳 하나(T-범위).
    「이런 문제가 시험에 나온다」 ★2~3 출발 · 통찰 0 · M_total 5 → -1 하여 하단 ★2.
  tier: star_2
  mechanism_primary: "학생 수 x, 1인당 x-3 → x(x-3)=130 → (x-13)(x+10)=0 → 자연수이므로 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/153-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총개수와 차를 바꾼다(총 84·차 5 → 12 / 총 54·차 3 → 9 / 총 88·차 3 → 11). 제약: 총량이 차가 d 인 두 자연수의 곱으로 분해돼야 한다."
    creative: "(1) 묻는 대상을 1 인당 개수로 바꾸면 환산 한 단이 붙어 150-c4 형태(★2) (2) 「4 개가 남는다」를 넣으면 식이 x(x-3)+4=130 으로 늘어 ★3 (3) 「학생이 2 명 줄면 1 인당 5 개씩 늘어난다」로 두 상황을 비교하면 ★4."
```

```yaml
- id: GN-M31-153-03
  page: 153
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    지면에서 초속 40 m 로 쏘아 올린 물로켓의 t 초 후 높이가 (40t-5t^2) m 일 때, 지면에 떨어지는 때 구하기.
  category: "「지면에 떨어진다 = 높이 0」 대입 → 공통인수로 인수분해 → 양의 시각 선택"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체에 대한 문제 — 지면 도달 시각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    150-h4 ⑵ 와 똑같은 한 단짜리 문항이다. 식이 주어지고 높이에 0 을 넣으면 5t(8-t)=0 로 바로 인수분해된다.
    함정 둘 — 「지면」을 높이 0 으로 옮기는 자리(T-경계)와 t=0 을 출발 시각으로 버리는 자리(T-범위).
    「이런 문제가 시험에 나온다」 ★2~3 출발 · 통찰 0 · M_total 5 → -1 하여 하단 ★2.
  tier: star_2
  mechanism_primary: "40t-5t^2=0 → 5t(8-t)=0 → t>0 이므로 8초"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$초'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/153-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속(일차항 계수)을 바꾼다(30 → 6초 / 50 → 10초 / 25 → 5초). 제약: 지면 도달 시각이 v/5 이므로 v 가 5 의 배수면 정수로 떨어진다."
    creative: "(1) 「높이가 60 m 가 되는 때를 모두」로 바꾸면 두 근 채택이 붙어 ★2 상단 (2) 「지면에 떨어지기 전 높이가 35 m 인 때」처럼 올라갈 때·내려올 때 중 하나만 고르게 하면 I-MI ★3 (3) 출발 높이를 붙이면 150-c5 형태(★2)."
```

```yaml
- id: GN-M31-153-04
  page: 153
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    가로 20 cm, 세로 16 cm 인 직사각형 ABCD 에서 가로가 매초 1 cm 씩 줄고 세로가 매초 2 cm 씩 늘 때, 넓이가 처음 넓이와 같아지는 데 걸리는 시간 구하기.
  category: "t 초 후 두 변을 t 의 식으로 → 넓이 = 처음 넓이 → 양의 시각 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에 대한 문제 — 변의 길이가 시간에 따라 변하는 직사각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변이 시간에 따라 서로 반대로 움직여 (20-t), (16+2t) 두 식을 동시에 세워야 하고, 우변이 숫자가 아니라 「처음 넓이 320」이다. 문장을 t 의 식으로 옮기는 단계가 둘이라 Mₐ 가 2 로 올라간다.
    함정 둘 — 줄어드는 쪽과 늘어나는 쪽의 부호를 뒤바꾸는 자리(T-부호·표기)와, 인수분해 2t(12-t)=0 에서 나오는 t=0 을 「처음 순간」으로 버리는 자리(T-경계). 이 기각은 이 단원의 표준 범위 처리라 I-VF 로 세지 않았다.
    「이런 문제가 시험에 나온다」 ★2~3 출발 · 통찰 0 이나 M_total 8 → 상단인 ★3.
  tier: star_3
  mechanism_primary: "t 초 후 (20-t)(16+2t) = 20×16 → 24t-2t^2=0 → 2t(12-t)=0 → t>0 이므로 12초"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$초'
  answer_source: "답지"
  figure: crop:fig-153-04.png
  latex: latex-bank/gn-m31/items/153-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 두 변과 매초 변화량을 바꾼다(18×12·가로 -1·세로 +3 → t=6 / 24×10·가로 -2·세로 +1 → t=2). 제약: (a-pt)(b+qt)=ab 를 정리하면 t(aq-bp-pqt)=0 이므로 t=(aq-bp)/(pq) 가 양수이고 가로가 아직 양수여야 한다(t<a/p)."
    creative: "(1) 「넓이가 처음보다 24 cm^2 커지는 때」로 바꾸면 t=0 이 해가 아니게 되어 두 근을 모두 검토해야 하고 ★3 유지 (2) 「넓이가 최대가 되는 때」는 이차함수 단원으로 이동 (3) 두 변이 같아지는(정사각형이 되는) 시각을 함께 물으면 조건 통합 ★4."
```

```yaml
- id: GN-M31-153-05
  page: 153
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    가로가 세로보다 3 cm 긴 직사각형 골판지의 네 귀퉁이에서 한 변 2 cm 인 정사각형을 잘라 내고 접어 뚜껑 없는 상자를 만들었더니 부피가 36 cm^3 였다. 처음 골판지의 가로 길이 구하기.
  category: "전개도 → 밑면 두 변은 각각 4 cm 줄고 높이는 2 → 부피 식 → 범위 근 → 가로로 환산"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 전개도에서 잘라 낸 정사각형의 한 변 2 가 상자의 높이가 되고 밑면의 두 변은 양쪽에서 2 씩, 즉 4 씩 줄어든다는 평면→입체 전환. 이 대응을 못 세우면 부피 식 자체가 안 선다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에 대한 문제 — 네 귀퉁이를 잘라 접은 상자의 부피"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 단계가 가장 긴 문항이다. 세로를 x 로 놓고 가로 x+3 → 밑면 (x-1), (x-4) → 높이 2 까지 대응을 세운 뒤에야 방정식이 나온다(I-RT d2).
    함정 둘 — 한 변에서 2 가 아니라 4 가 줄어든다는 양쪽 처리(T-단위)와, 답이 x 가 아니라 가로 x+3 이라는 것(T-표기). 범위 x>4 로 근 -2 도 버린다.
    「이런 문제가 시험에 나온다」 ★2~3 출발 · 통찰 1개 d2 · M_total 8 → 상단 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "세로 x, 가로 x+3 → 밑면 (x-1)(x-4), 높이 2 → 2(x-1)(x-4)=36 → x^2-5x-14=0 → x>4 이므로 x=7 → 가로 10 cm"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "답지"
  figure: crop:fig-153-05.png
  latex: latex-bank/gn-m31/items/153-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잘라 내는 정사각형의 한 변(높이)·가로와 세로의 차·부피를 바꾼다(높이 3·차 2·부피 90 → 세로 9 / 높이 2·차 4·부피 48 → 세로 8). 제약: 높이 h 일 때 밑면이 (x+d-2h)(x-2h) 이므로 x>2h 여야 하고, 부피/h 가 두 인수의 곱으로 정수 분해돼야 한다. 그림의 귀퉁이 정사각형 라벨은 높이와 함께 바꾼다."
    creative: "(1) 잘라 내는 정사각형의 한 변을 미지수 x 로 두고 골판지 크기를 고정하면 역방향(I-BW)이 되며 삼차식이 생겨 중3 범위 밖 (2) 「겉넓이가 60 cm^2」로 바꾸면 밑면+옆면 합산이 필요해 ★4 (3) 뚜껑이 있는 상자로 바꾸면 전개도 대응이 달라져 ★4."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 6 · ★2 14 · ★3 6 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 20 · premium 0 (통찰은 전부 I-RT depth 2 · 다른 유형은 0 건)
- 구역별: 「개념원리 확인하기」 4문 전부 ★1 · 「핵심문제 익히기」 17문(★1 2 · ★2 10 · ★3 5) · 「이런 문제가 시험에 나온다」 5문(★2 3 · ★3 2)
- type_hint 상위 5: 「도형에 대한 문제 (2) — 폭이 일정한 통로/길/테두리」 4 · 「수에 대한 문제」 5 · 「쏘아 올린 물체에 대한 문제」 3 · 「도형에 대한 문제 (1) — 직사각형의 둘레·넓이 변형」 4 · 「식이 주어진 문제(합·대각선·악수 공식)」 3
- M_total 분포: 4 (1문) · 5 (6문) · 6 (12문) · 7 (5문) · 8 (2문). Mₖ 는 26문 중 19문이 1 로, 이 단원의 난도는 계산이 아니라 **식을 세우는 단 수**에서 온다.
- 그림: 9문(`crop:fig-151-h5.png` · `fig-151-c7.png` · `fig-151-c8.png` · `fig-152-h6.png` · `fig-152-c9.png` · `fig-152-c10.png` · `fig-152-c11.png` · `fig-153-04.png` · `fig-153-05.png`). 이 중 **151-c8 만 그림에 없는 정보(밑변 합 5 cm)가 풀이에 필수**이고, 나머지 8문은 발문만으로 식이 선다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-149-c1 | 짝 핵심문제 149-h1(★2)과 골조가 완전히 같은데 답 표기 함정(「구각형」) 유무로 Mₜ 가 1 점 갈려 ★1 로 내려감. 확인문제를 짝 핵심문제와 같은 층으로 묶을지 카탈로그 설계 때 결정 | ★1 / ★2 |
| GN-M31-149-c2 | 통찰 0 · M_total 5 로 -1 을 적용해 핵심문제 구역에서 ★1. 이 범위에서 가장 짧은 문항이라 판정 자체는 확신하나, 구역 신호와 1 단 어긋남 | ★1 / ★2 |
| GN-M31-151-c8 | 밑변의 합 5 cm 가 **그림에만** 있어 그림 없이는 풀이가 시작되지 않는다. 텍스트만 쓰는 변형·출제에서는 발문에 그 조건을 명시해야 한다 | ★3 (그림 필수) |
| GN-M31-152-c9 | 같은 통로형 짝(152-h6 · c10 · c11 은 ★3)인데 정사각형이라 전환 후 식이 완전제곱이 되어 Mₖ 가 1 로 내려가 ★2. 착안은 같고 계산량만 다름 — 카탈로그에서는 같은 유형의 난도 하단 슬롯으로 두는 것이 맞다 | ★2 / ★3 |
| GN-M31-153-04 | 통찰 0(절차형)인데 M_total 8 로 이 범위 최상단이라 ★3. 통찰형 ★3(151-c8 · 152-h6 등)과 체감이 다른 「연쇄 길이형 ★3」이다 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「폭이 일정한 통로·길·테두리」(152-h6 · c9 · c10 · c11 · 4문). 평행이동/차집합 착안(I-RT d2)이 다른 도형 문항과 질적으로 다르고 이 범위 ★3 의 절반을 차지한다. 테두리를 바깥에 두른 152-c11 은 같은 유형의 뒤집힌 슬롯으로 둔다. ② 「쏘아 올린 물체」(150-h4 · c5 · 153-03 · 3문). 식이 주어지고 「지면 = 높이 0」 번역이 고정돼 있어 다른 활용 유형과 섞이지 않는다.
- **통합해도 될 유형**: ① 「식이 주어진 문제」(149-h1 · c1)와 「수에 대한 문제」(148-02 · 149-h2 · c2 · c3 · 153-01)는 모두 「문장·공식 → 한 줄 이차방정식 → 범위로 근 선택」 한 골조라 하위 슬롯으로 묶을 수 있다. ② 「둘레·넓이가 주어진 직사각형」(148-04 · 151-c6)과 「변을 늘이고 줄인 직사각형」(151-h5 · c7)은 변수 설정만 다르고 식의 모양이 같아 한 유형의 두 슬롯으로 충분하다. ③ 「똑같이 나누어 주기」(150-c4 · 153-02)는 묻는 값이 x 자신인지 환산값인지로만 갈린다.
- **이 범위에 없어 별도 확보가 필요한 자리**: ★4 이상 슬롯이 0 건이다. 이 단원에서 ★4 를 만들려면 두 상황 비교(인원이 줄면 1 인당 개수가 늘어남), 역방향 설계(낙하 시각이 주어지고 출발 높이를 구함), 조건 통합(둘레와 넓이와 대각선) 중 하나가 필요하며, 모두 뒤 절반(2/2)이나 중단원 마무리 구역에서 찾아야 한다.
