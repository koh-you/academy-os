---
name: mechanism-데이터-GN-CALC2-17
description: 개념원리 미적분Ⅱ 17 매개변수로 나타낸 함수의 미분법(1/1 · 필수·발전 예제 3문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 17 매개변수로 나타낸 함수의 미분법
  unit_code: GN-CALC2-17
  part: "1/1"
  extract_range: "144~144쪽 · 144-e9~144-284"
  total_problems: 3
  unit_total: 3
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 17 매개변수로 나타낸 함수의 미분법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 144쪽 한 쪽, 「필수·발전 예제」 구역 3문항(필수 예제 1 + 확인체크 2) 전수를 다룬다. 단원 전체가 3문항인 짧은 단원이라 연습문제 STEP·실력 UP 구역이 없고, 벤더 난이도 신호는 구역(필수·발전 예제 → ★2 출발)과 태그(「필수」·「확인체크」)만으로 주어진다. 세 문항 모두 `dy/dx = (dy/dt)/(dx/dt)` 라는 단일 공식을 적용하는 계열이며, 갈리는 것은 `x(t)`·`y(t)` 에 어떤 미분 도구(다항·분수식 몫미분·무리함수·삼각함수)가 들어가는가와, 마지막 문항처럼 결과를 「접선의 기울기」로 해석하는 한 단계가 붙는가이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-144-e9
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    매개변수 $t$ 로 나타낸 함수의 $\dfrac{dy}{dx}$ 를 구하는 기본 예제.
    ⑴ $x=t^2-t$, $y=\dfrac{1}{2}t^2-3$ (다항) ⑵ $x=\dfrac{1+t^2}{1-t^2}$, $y=\dfrac{2t}{1-t^2}$ (분수식).
  category: "매개변수 미분 공식 → dx/dt·dy/dt 각각 계산 → 나누어 t 의 식으로 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법 — dy/dx=(dy/dt)/(dx/dt) 기본 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 공식 한 줄에 대입하는 절차형이다. ⑴ 은 다항 미분 두 번으로 끝나고,
    ⑵ 는 분수식 두 개에 몫미분을 적용한 뒤 공통인 $(1-t^2)^2$ 가 약분되는 것을 보는 계산 정리가 더해져 Mₖ 가 올라간다.
    답에 $t\ne\frac{1}{2}$ · $t\ne 0$ 단서가 붙듯 분모 $dx/dt=0$ 을 배제하는 T-범위 함정 1개.
    통찰 0 · M_total 7 → 필수 예제 구역 출발점 ★2 유지(−1 조건인 M_total ≤ 5 에 해당하지 않음).
  tier: star_2
  mechanism_primary: "dx/dt·dy/dt 계산 → dy/dx=(dy/dt)/(dx/dt) → 약분·정리 후 dx/dt=0 인 t 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=\dfrac{t}{2t-1}$ (단, $t\ne\dfrac{1}{2}$) ⑵ $\dfrac{dy}{dx}=\dfrac{t^2+1}{2t}$ (단, $t\ne 0$)'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/144-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(t^2-t → t^2-4t, (1/2)t^2-3 → 2t^2+1)와 ⑵ 의 분자·분모 조합을 바꿀 수 있음. 제약: (가) dx/dt 가 t 의 일차·이차식으로 남아 제외해야 할 t 값이 유한하고 명시 가능해야 함 (나) ⑵ 형태는 분모가 공통이어야 몫미분 뒤 (1-t^2)^2 이 약분돼 답이 짧게 떨어짐 — 분모를 다르게 두면 정리가 지저분해지고 체감이 ★3 쪽으로 밀림."
    creative: "(1) ⑵ 를 x=(1-t^2)/(1+t^2), y=2t/(1+t^2) 로 바꾸면 같은 골조에 단위원 매개화라는 배경이 붙음(★2 유지, 항등식 x^2+y^2=1 까지 묻게 하면 I-RT 1개가 생겨 ★3) (2) dy/dx 를 t 가 아니라 x 의 식으로 나타내라고 하면 t 소거가 더해져 I-EQV 1개 ★3 (3) 특정 t 에서의 값만 묻게 좁히면 계산 부담이 줄어 ★1~2."
```

```yaml
- id: GN-CALC2-144-283
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    매개변수 $t$ 로 나타낸 함수의 $\dfrac{dy}{dx}$ 를 구하는 확인 문항.
    ⑴ $x=\sqrt{t+3}$, $y=4t^2$ (무리함수) ⑵ $x=3\cos t$, $y=2\sin t\ (0<t<\pi)$ (삼각함수).
  category: "매개변수 미분 공식 → 무리함수·삼각함수 도함수 → 나누어 정리(코탄젠트 표기)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법 — dy/dx=(dy/dt)/(dx/dt) 기본 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제와 같은 공식을 쓰되 $x(t)$ 가 다항이 아니라 무리함수·삼각함수로 바뀐 확인 문항이다.
    ⑴ 은 $dx/dt=1/(2\sqrt{t+3})$ 의 역수를 곱하면서 분모의 근호가 분자로 올라오는 처리,
    ⑵ 는 $-3\sin t$ 로 나눈 뒤 $\cos t/\sin t$ 를 $\cot t$ 로 쓰는 표기 정리가 요점.
    $0<t<\pi$ 라는 범위 단서가 $\sin t\ne 0$ 을 보장하는 T-범위 1개. 통찰 0 · M_total 6 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "무리·삼각함수의 dx/dt·dy/dt 계산 → dy/dx=(dy/dt)/(dx/dt) → 근호 정리 또는 cot t 표기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=16t\sqrt{t+3}$ ⑵ $\dfrac{dy}{dx}=-\dfrac{2}{3}\cot t$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/144-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 평행이동 상수(t+3 → t+1, t-2)와 y 의 계수·차수(4t^2 → 3t^3), ⑵ 의 타원 반지름(3,2 → 5,4)을 바꿀 수 있음. 제약: (가) ⑴ 은 근호 안이 양이 되는 t 범위를 전제로 두어야 하고, y 의 도함수가 근호와 곱해져 깔끔히 떨어지도록 y 를 다항으로 유지 (나) ⑵ 는 dy/dx 가 cot t(또는 tan t) 한 항으로 정리되도록 x·y 를 같은 각 t 의 cos·sin 으로 둘 것 — 각을 2t 등으로 바꾸면 합성 미분이 더해져 난이도가 한 단 오름."
    creative: "(1) ⑵ 에서 t=π/3 처럼 특정 값의 접선의 기울기를 묻기(다음 문항 골조, ★1~2) (2) ⑵ 를 타원 x^2/9+y^2/4=1 위의 점으로 바꿔 매개화를 학생이 세우게 하면 I-RT 1개 ★3 (3) dy/dx 가 최대·최소가 되는 t 를 묻게 하면 미분 결과를 다시 다루는 단계가 붙어 ★3~4."
```

```yaml
- id: GN-CALC2-144-284
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x=t^2-3t+5$, $y=t^3+9t-1$ 로 주어진 곡선에서 $t=-2$ 인 점의 접선의 기울기.
  category: "접선의 기울기 = dy/dx → 매개변수 미분 공식 → t=-2 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 기울기(특정 t 에서의 dy/dx 값)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「접선의 기울기」를 $dy/dx$ 로 바꿔 읽는 것은 미분계수의 정의 그대로라 통찰로 세지 않는다.
    다항 두 개를 미분해 나눈 뒤 $t=-2$ 를 대입하는 3단계·한 줄 계산이고, 점의 좌표를 따로 구할 필요도 없다.
    분모 $2t-3$ 이 0 이 되는 $t$ 를 피한다는 T-범위 함정 1개뿐.
    구역 출발점 ★2 이지만 통찰 0 · M_total 5 → −1 조정하여 ★1(벤더와 1단 차이는 이슈로 올리지 않음).
  tier: star_1
  mechanism_primary: "접선의 기울기=dy/dx → (3t^2+9)/(2t-3) → t=-2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/144-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 의 계수와 대입할 t 값을 바꿀 수 있음. 제약: (가) 대입하는 t 에서 dx/dt=2t-3 이 0 이 아니어야 하고(t=3/2 금지) (나) 답이 정수로 떨어지도록 (3t^2+9) 가 (2t-3) 으로 나누어떨어지는 t 를 고를 것 — 여기서는 t=-2 에서 21/(-7)."
    creative: "(1) 기울기가 아니라 t=-2 에서의 접선의 방정식을 묻게 하면 점의 좌표 계산이 더해져 ★2 (2) 접선이 x 축에 평행·수직이 되는 t 를 묻게 하면 dy/dt=0 과 dx/dt=0 을 나눠 따지는 역방향 조건이 되어 I-BW 1개 ★3 (3) 기울기가 주어진 값이 되는 t 를 모두 구하게 하면 분수방정식 풀이 + 해 검증이 붙어 I-BW·I-VF 로 ★3~4."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 1 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 3 · premium 0
- type_hint 상위: 「매개변수로 나타낸 함수의 미분법 — dy/dx=(dy/dt)/(dx/dt) 기본 계산」 2 · 「매개변수로 나타낸 곡선의 접선의 기울기」 1
- 그림: 0문
- 단원 전체가 공식 1개의 적용 연습이라 통찰 라벨이 붙는 문항이 없다. 변형 시 ★3 이상을 만들려면 매개화를 학생이 세우게 하거나(I-RT) 조건을 역방향으로 주는(I-BW) 설정 변경이 필요하며, 이는 각 블록 `variation_notes.creative` 에 적어 두었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항 없음 | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 「매개변수로 나타낸 함수의 미분법 — dy/dx=(dy/dt)/(dx/dt) 기본 계산」 하나다. 필수 예제와 확인체크가 같은 골조이고 갈리는 것은 `x(t)`·`y(t)` 의 함수 종류(다항 / 분수식 몫미분 / 무리함수 / 삼각함수)뿐이므로 **카탈로그에서는 한 유형으로 통합**하고, 함수 종류는 유형 안의 난이도 눈금(다항 ★1~2 → 분수·무리 ★2 → 삼각·합성 ★2~3)으로 두는 것이 맞다.
- 「접선의 기울기」(144-284)는 따로 세울 값이 있다. 공식 적용은 같지만 발문이 기하 대상(곡선 위의 점·접선)으로 바뀌고, 접선의 방정식·수평·수직 접선·기울기 역추적으로 확장되는 문항 계열이 여기서 갈라져 나오기 때문이다. 단원 18(음함수 미분법) 이후의 접선 유형과 묶어 「매개변수·음함수로 나타낸 곡선의 접선」 한 유형으로 세우는 것도 후보.
- 이 단원 3문항만으로는 ★3 이상 슬롯의 base ★ 근거가 없다. 카탈로그 설계 시 미적분Ⅱ 후반 단원(속도·가속도, 곡선의 개형)에서 매개변수 미분이 재등장하는 문항을 함께 모아 base ★ 를 정할 것.
