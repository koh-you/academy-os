---
name: mechanism-데이터-GN-CM2-04-p1
description: 개념원리 공통수학2 04 직선의 방정식(1/3 · 개념원리 익히기 36-61~36-64) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 04 직선의 방정식
  unit_code: CM2-04
  part: "1/3"
  extract_range: "36~36쪽 · 36-61~36-64"
  total_problems: 4
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 04 직선의 방정식 (1/3) 정독 데이터 (v1.0)

이 파일은 04단원 46문 중 앞 4문(36쪽 · 통번호 36-61~36-64)을 다룬다. 전부 한 구역 「개념원리 익히기」에 속하며, 단원 도입부에서 직선의 방정식을 결정하는 네 가지 표준 입력(한 점과 기울기 / 두 점 / 두 절편 / 좌표축과의 평행·수직)을 한 문항씩 확인하는 배열이다. 네 문항 모두 소문항 3~4개 묶음이고 그림·선택지·기출 태그가 없다.

개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다. 이 범위는 전부 「개념원리 익히기」 통번호(확인 체크 성격)이므로 출발점이 ★1이고, 네 문항 모두 통찰 0 · M_total 4라 v3.8의 절차형 감점(−1)이 붙지만 하한 clamp 로 ★1에 머문다. 「필수·발전 예제」(쪽-eN)나 「연습문제 STEP 1/2·실력 UP」은 이 범위에 없고 04-p2 이후에 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-36-61
  page: 36
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 한 점과 기울기가 주어진 직선의 방정식 구하기. ⑶은 기울기 대신
    「x축의 양의 방향과 이루는 각이 45°」로 주어져 기울기를 tan 45°=1 로 바꿔야 한다.
  category: "점-기울기 꼴 대입 → 일차함수 꼴로 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점과 기울기가 주어진 직선의 방정식(각 → 기울기 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    개념원리 익히기 통번호 · 점-기울기 공식의 확인 문항. ⑴⑵는 공식에 바로 대입하고,
    ⑶만 「x축의 양의 방향과 이루는 각 45°」를 기울기 1 로 옮기는 단계가 하나 더 붙는다.
    통찰 0 · M_total 4 → 절차형 감점이 붙어도 하한 clamp 로 ★1.
    [분류 이슈] ⑶의 각 → 기울기 전환을 I-RT d1 으로 셀지가 경계. 교과서가 기울기를
    tan θ 로 정의한 직후의 확인 문항이라 표준 절차로 보고 절차형으로 두었다.
  tier: star_1
  mechanism_primary: "점 (x1,y1) 과 기울기 m (⑶은 tan 45°=1) → y-y1=m(x-x1) → 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=2x+1$ ⑵ $y=-3x-5$ ⑶ $y=x+2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/36-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표와 기울기(정수·유리수)를 자유롭게 바꿀 수 있음. ⑶의 각은 tan 값이 교과 범위에서 깔끔한 30°·45°·60°·120°·135° 로만 바꾼다. 제약: y절편이 지저분한 분수가 되지 않도록 점의 x좌표를 기울기 분모의 배수로 잡고, 무리수 점을 쓸 때는 기울기를 1 이나 -1 로 두어 답이 a+b√2 꼴로 정리되게 한다."
    creative: "(1) 기울기를 직접 주지 않고 「직선 y=2x+1 에 평행」으로 주면 평행 조건 한 단계 추가(골조 유지 · ★1 유지) (2) 각을 120° 로 두어 기울기가 음의 무리수가 되게 하면 계산 한 줄 추가(★2 경계) (3) 지나는 점을 미지수 a 로 두고 「y절편이 3」 같은 조건을 덧붙이면 역추적이 생겨 I-BW d1 · ★2 로 올라간다."
```

```yaml
- id: GN-CM2-36-62
  page: 36
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 점을 지나는 직선의 방정식 구하기. 네 쌍 모두 x좌표가 서로 달라
    기울기가 정의되며, ⑵만 기울기가 분수로 나온다.
  category: "두 점 → 기울기 → 점-기울기 꼴 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항이 같은 골조의 반복. 기울기를 좌표차의 비로 구한 뒤 한 점을 대입하면 끝난다.
    ⑵만 기울기가 -6/5 라 통분이 한 줄 더 붙지만 일반 학생이 무리 없는 양이라 Mk 는 1.
    통찰 0 · M_total 4 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "기울기 (y2-y1)/(x2-x1) → 한 점 대입 → y=mx+n"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-3x+5$ ⑵ $y=-\dfrac{6}{5}x+\dfrac{7}{5}$ ⑶ $y=3x-2$ ⑷ $y=x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/36-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾸되 x좌표는 서로 달라야 한다(같으면 x=k 꼴이 되어 36-64 유형으로 넘어감). 제약: 좌표차가 서로 나누어떨어지면 기울기가 정수로 깔끔해지고, 일부러 분수 기울기를 만들려면 ⑵처럼 Δx 와 Δy 를 서로소로 잡는다. 답을 기약분수로 확정할 수 있는 조합만 쓴다."
    creative: "(1) 한 점을 (a,b) 로 문자화하고 「이 직선이 원점을 지난다」를 추가하면 조건 결합 한 단계(★2) (2) 두 점 중 하나를 다른 직선과의 교점으로 주면 연립 한 단계 추가(★2) (3) 세 점을 주고 한 직선 위에 있을 조건(기울기 일치)으로 미지수를 구하게 하면 I-EQV d1 · ★2."
```

```yaml
- id: GN-CM2-36-63
  page: 36
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 절편이 주어진 직선의 방정식 구하기. ⑴은 두 절편, ⑵는 x절편과 y축 위의 점,
    ⑶은 두 좌표축 위의 점 두 개로 주어진다.
  category: "절편 → 축 위의 두 점 → 기울기·y절편(또는 절편형)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x절편·y절편이 주어진 직선의 방정식(절편형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절편의 정의를 좌표로 옮기기만 하면 36-62 와 같은 두 점 문제가 된다. ⑶은 이미 축 위의
    두 점 꼴이어서 절편형 x/2+y/3=1 로도 한 줄. 유일한 걸림은 x절편이 y=0 일 때의 x값이라는
    표기 혼동(T-표기)이라 Mt 1. 통찰 0 · M_total 4 · 개념원리 익히기 → ★1.
  tier: star_1
  mechanism_primary: "절편 a,b 를 점 (a,0),(0,b) 로 옮김 → 기울기 -b/a → y=mx+b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\dfrac{1}{4}x-1$ ⑵ $y=5x+5$ ⑶ $y=-\dfrac{3}{2}x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/36-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 절편 값을 0 이 아닌 정수로 바꾼다. 제약: x절편 a 가 0 이면 절편형이 성립하지 않고, 기울기 -b/a 가 지저분해지지 않도록 |a| 를 |b| 의 약수나 배수로 잡는다. 부호를 섞어 기울기의 부호가 매번 같지 않게 두는 편이 확인 문항으로 낫다."
    creative: "(1) 절편 대신 「x축·y축과 만나는 두 점으로 이루어지는 삼각형의 넓이가 6」을 주면 절편의 곱 조건이 생겨 I-EQV d1 · ★2 (2) 한 절편만 주고 기울기를 함께 주는 혼합형(★1 유지) (3) 절편을 미지수 a 로 두고 특정 점을 지나게 하면 역추적 · I-BW d1 · ★2."
```

```yaml
- id: GN-CM2-36-64
  page: 36
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 좌표축에 평행하거나 수직인 직선의 방정식 구하기. ⑴~⑶은 점과 축 관계로,
    ⑷는 y좌표가 같은 두 점으로 주어진다.
  category: "축과의 관계 판별 → y=k 또는 x=k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축에 평행하거나 수직인 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 공식을 쓰는 문항이 아니라 축과의 관계를 바로 읽는 문항. x축에 평행이면 y=(그 점의
    y좌표), x축에 수직이면 곧 y축에 평행이라 x=(그 점의 x좌표)다. ⑷는 두 점의 y좌표가 같음을
    보고 y=-3 으로 끝난다. 「평행」과 「수직」을 뒤바꾸는 표기 함정(T-표기) 하나가 실질적인
    변별 요소. 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x축 평행(=y축 수직) → y=(점의 y좌표) · y축 평행(=x축 수직) → x=(점의 x좌표)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=8$ ⑵ $x=3$ ⑶ $x=-5$ ⑷ $y=-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/36-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표만 바꾸면 되고 계산은 없다. 제약: ⑷ 유형은 두 점의 y좌표(또는 x좌표)가 반드시 같아야 하며, 한 쌍이라도 어긋나면 36-62 유형으로 바뀐다. 0 을 넣으면 답이 좌표축 자신(y=0, x=0)이 되므로 축 자체를 묻고 싶을 때만 쓴다."
    creative: "(1) 「평행·수직」 표현을 네 소문항에서 번갈아 섞어 표기 함정을 강화(★1 유지 · Mt 상승) (2) 두 점의 좌표에 미지수를 넣고 「이 직선이 x축에 평행」 조건으로 미지수를 구하게 하면 역추적 · I-BW d1 · ★2 (3) 네 직선으로 둘러싸인 직사각형의 넓이를 묻는 문항으로 확장하면 표현 전환이 생겨 I-RT d1 · ★2."
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 4 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 4 · premium 0
- M_total 분포: 4 가 4문(Ms·Mk·Ma·Mt 모두 1). 전 문항이 소문항 3~4개 묶음이지만 소문항끼리 골조가 같아 단계 수가 늘지 않는다.
- type_hint: 「한 점과 기울기」 1 · 「두 점」 1 · 「절편형」 1 · 「좌표축에 평행·수직」 1 — 네 문항이 서로 다른 입력 조건 하나씩을 맡는 도입부 배열.
- 그림 0문 · 선택지 0문 · 기출 태그 0문 · 전 문항 vendor_level "-".
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 어긋나는 조건은 발견되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-36-61 | ⑶의 「x축 양의 방향과 이루는 각 45°」 → 기울기 tan 45°=1 전환을 I-RT d1 으로 셀지 경계. 기울기의 정의를 확인하는 도입 문항이라 절차형으로 두었으나, 각이 120°·135° 처럼 둔각으로 바뀌면 통찰로 세는 편이 맞을 수 있음 | ★1 (통찰 인정 시에도 ★1) |

벤더 신호와 2단 이상 어긋난 문항은 없다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 없다. 네 문항이 각각 다른 입력 조건 하나를 맡아 「직선의 결정 조건」이라는 한 덩어리를 네 갈래로 쪼갠 구조다.
- **통합 후보**: 「한 점과 기울기」 · 「두 점」 · 「절편형」은 결국 점-기울기 꼴 대입이라는 같은 골조이므로, 카탈로그에서는 상위 유형 「직선의 방정식 — 결정 조건별 대입」 하나에 소분류 세 개를 다는 편이 자연스럽다. base ★ 는 1.
- **따로 세울 유형**: 「좌표축에 평행·수직인 직선」(36-64)은 기울기 공식을 쓰지 않고 x=k 꼴이 등장하는 유일한 갈래라 별도 유형으로 세운다. 이후 단원에서 「기울기가 정의되지 않는 직선」 예외 처리(두 직선의 평행·수직 조건, 점과 직선 사이의 거리)로 계속 재등장하므로 카탈로그 상 독립 항목이 유용하다. base ★ 는 1.
- 04단원 뒤쪽(04-p2·p3)의 「필수·발전 예제」와 「연습문제 STEP 1/2」에서 같은 골조가 ★2~4 로 올라갈 때, 위 두 상위 유형의 base ★ 가 그대로 쓰이는지 아니면 「조건이 문자로 주어진 직선의 결정」을 별도 유형으로 세워야 하는지는 그 범위를 정독한 뒤 결정한다.
