---
name: mechanism-데이터-GN-CALC1-23
description: 개념원리 미적분Ⅰ 23 정적분과 넓이(1/1 · 207~213쪽 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 23 정적분과 넓이
  unit_code: GN-CALC1-23
  part: "1/1"
  extract_range: "207~213쪽 · 207-422~213-436"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(소수 둘째 자리). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 6문)
---

# 개념원리 미적분Ⅰ · 23 정적분과 넓이 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 23단원 「정적분과 넓이」 207~213쪽 21문항 전수를 다룬다. 구역은 「개념원리 익히기」(207-422~207-424 · 3문)와 「필수·발전 예제」(208-e1~213-436 · 필수 예제 6문 + 확인체크 12문)의 둘뿐이고, 연습문제 STEP 구역은 이 범위에 없다. 벤더 난이도 신호는 구역과 태그로 나타난다 — 「개념원리 익히기」의 통번호 문항은 풀이 뼈대가 빈칸으로 이미 주어진 개념 확인이라 ★1, tag 「필수」 예제는 ★2 가 출발점이다. tag 「확인체크」는 이 책에서 바로 위 필수 예제 아래에 붙는 쌍둥이 연습이라 출발점을 짝 예제와 같은 ★2 로 잡고(리터럴 ★1 출발은 「개념원리 익히기」 구역에만 적용), 거기서 M_total·통찰로 ±1 조정했다. 그 결과 확인체크인데 ★3 이 된 세 문항(209-428 · 211-432 · 213-436)은 파일 끝 「분류 이슈 목록」에 2단 차이로 기록했다.

이 범위의 골조는 다섯으로 갈린다. (가) **곡선과 x축 사이의 넓이** — 교점을 구해 적분 구간으로 쓰고, 구간 안에서 곡선이 x축 아래로 내려가면 그 조각만 부호를 뒤집는다(207-422 · 208-e1 · 208-425 · 209-e2 · 209-427). (나) **곡선과 직선·두 곡선 사이의 넓이** — 교점을 구한 뒤 (위 함수 − 아래 함수)를 적분하고, 교점이 셋 이상이면 위아래가 뒤바뀌는 구간마다 나눈다(207-423 · 207-424 · 210-e3 · 210-429 · 211-e4 · 211-431). (다) **넓이가 주어지고 미정계수를 되찾는 역방향형**(208-426 · 209-428 · 210-430). (라) **곡선과 그 접선 사이의 넓이** — 차함수가 접점에서 중근을 가지므로 그 점에서 구간이 갈리지 않는다(212-e5 · 212-433 · 212-434). (마) **절댓값·조각함수의 그래프와 넓이** — 그래프 개형을 먼저 확정하고 조각마다 교점 후보를 걸러야 한다(211-432 · 213-e6 · 213-435 · 213-436).

이 단원의 실질 변별점은 적분 계산이 아니라 **적분 구간과 피적분함수의 부호를 무엇으로 정하는가**다. 그래서 통찰 라벨은 그 판단이 들어간 단계에만 붙였다. 곡선이 x축 아래에 있는 구간을 나눠 부호를 뒤집는 것은 이 단원의 표준 절차(T-부호)로 보고 통찰로 세지 않았다. 반대로 (다) 의 「넓이식을 미정계수의 방정식으로 되돌리기」는 I-BW, (라) 의 「차함수의 중근을 두 그래프가 접한다는 기하 정보로 읽기」와 (마) 의 「절댓값 그래프 개형으로 닫힌 영역을 확정하기」는 I-RT, 조각함수·절댓값에서 정의역 밖 교점 후보를 기각하는 단계는 I-VF 로 인정했다.

Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다(⑴⑵ 가 같은 골조의 이차·삼차 반복이면 한 골조로 본다). Mₖ 는 인수분해·다항식 정적분처럼 이 단원 학생이 어려움 없이 하는 양은 올리지 않아 대부분 2 에 머문다. Mₐ 는 구체 수치만 나오면 1, 미정계수 k·a 가 끼면 2 이고 이 범위에 완전 일반 함수 조건은 없어 3 은 쓰지 않았다. Mₜ 는 T-부호(x축 아래 구간)가 사실상 상수처럼 깔려 있어 1 이 기본이고, 여기에 T-범위(정의역 밖 근 기각·미정계수 부호 조건)가 더해지면 2 로 두었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-207-422
  page: 207
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 $y=-x^2+2x$ 와 $x$축으로 둘러싸인 도형의 넓이를 구하는 과정에서 빈칸(교점의 $x$좌표 두 개 · 적분 구간 · 넓이) 채우기.
  category: "교점의 x좌표 → 적분 구간 → 정적분 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 — 교점을 적분 구간으로 삼기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -x^2+2x=0 의 해 0, 2 를 그대로 적분 구간에 옮겨 적으면 끝난다. 구간 [0,2] 에서 곡선이 x축 위라 부호를 뒤집을 일도 없다. 넓이 공식의 뼈대가 빈칸 형태로 이미 주어져 학생이 세울 식이 없으므로 통찰 라벨이 붙는 단계가 없고, M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "-x^2+2x=0 → 교점 x=0, 2 → 구간 [0,2] 에서 곡선이 x축 위 → ∫_0^2 (-x^2+2x) dx = 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$, $2$, $0$, $2$, $\dfrac{4}{3}$'
  answer_source: "답지"
  figure: "crop:fig-207-422.png"
  latex: latex-bank/gn-calc1/items/207-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 두 근을 바꿀 수 있다(y=-x^2+4x · y=-2x^2+2x · y=-(x-1)(x-3)). 제약: 위로 볼록해서 두 근 사이가 x축 위여야 부호 뒤집기 없이 같은 골조가 되고, 넓이 |a|(b-a)^3/6 이 유리수로 떨어져야 빈칸에 쓸 수 있다."
    creative: "(1) 아래로 볼록한 y=x^2-2x 로 바꿔 두 근 사이가 x축 아래가 되게 하면 부호 뒤집기 한 단계 추가(★2) (2) 빈칸을 없애고 발문만 주면 학생이 구간을 스스로 세워야 해 ★2 (3) 넓이를 주고 계수를 묻는 역방향으로 돌리면 I-BW 가 붙어 ★2~3."
```

```yaml
- id: GN-CALC1-207-423
  page: 207
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 $y=x^2-4x$ 와 직선 $y=-x$ 로 둘러싸인 도형의 넓이를 구하는 과정에서 빈칸(교점의 $x$좌표 · 적분 구간 · 피적분함수 · 넓이) 채우기.
  category: "교점의 x좌표 → (직선 − 곡선) 세우기 → 정적분 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 — 교점 사이에서 (위 − 아래) 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2-4x=-x 에서 교점 0, 3 을 얻고 빈칸이 지시하는 대로 (직선)-(곡선)=-x^2+3x 를 적분한다. 어느 쪽이 위인지도 빈칸 배치로 이미 주어져 학생이 판단할 것이 없다. 통찰 0 · M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "x^2-4x=-x → 교점 x=0, 3 → ∫_0^3 {(-x) - (x^2-4x)} dx = ∫_0^3 (-x^2+3x) dx = 9/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$, $3$, $3$, $x^2-4x$, $3$, $-x^2+3x$, $\dfrac{9}{2}$'
  answer_source: "답지"
  figure: "crop:fig-207-423.png"
  latex: latex-bank/gn-calc1/items/207-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편과 곡선의 일차항을 바꿀 수 있다(y=x^2-2x 와 y=x · y=x^2-4x 와 y=-x+5). 제약: 두 교점이 정수여야 빈칸이 깔끔하고, 차함수가 위로 볼록(계수 -1)이 되도록 직선이 곡선 위에 오는 배치를 유지한다."
    creative: "(1) 직선을 y=-x+k 로 두고 넓이를 주면 역방향(I-BW · ★2~3) (2) 직선을 곡선의 접선으로 바꾸면 중근이 생겨 골조가 (라) 로 이동(★2) (3) 교점 하나를 음수로 만들어 원점을 지나지 않게 하면 구간 계산이 한 단계 늘어난다(★2)."
```

```yaml
- id: GN-CALC1-207-424
  page: 207
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 곡선 $y=x^2+x$, $y=-2x^2+x+3$ 으로 둘러싸인 도형의 넓이를 구하는 과정에서 빈칸(교점의 $x$좌표 · 적분 구간 · 피적분함수 · 넓이) 채우기.
  category: "두 곡선의 교점 → (위 곡선 − 아래 곡선) → 정적분 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 — 교점 사이에서 (위 − 아래) 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 식을 같게 놓으면 3x^2=3 으로 정리돼 교점 -1, 1 이 바로 나오고, 차함수 -3x^2+3 을 적분하면 된다. 일차항 x 가 상쇄되는 것이 유일한 계산 포인트다. 위아래 판단과 구간이 빈칸으로 주어져 통찰 0 · M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "x^2+x = -2x^2+x+3 → 3x^2=3 → 교점 x=±1 → ∫_{-1}^{1} (-3x^2+3) dx = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$, $1$, $-1$, $-2x^2+x+3$, $-1$, $-3x^2+3$, $4$'
  answer_source: "답지"
  figure: "crop:fig-207-424.png"
  latex: latex-bank/gn-calc1/items/207-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 이차항 계수와 상수항을 바꿀 수 있다(x^2-1 과 -x^2+3 · 2x^2+x 와 -x^2+x+3). 제약: 일차항이 상쇄돼 차함수가 짝함수가 되면 교점이 ±c 로 떨어져 계산이 짧아진다. 차함수의 이차항 계수가 음수여야 두 번째 곡선이 위에 온다."
    creative: "(1) 일차항을 상쇄되지 않게 두면 교점이 비대칭이 되어 계산 부담만 늘고 골조는 그대로(★1~2) (2) 한 곡선을 삼차로 바꾸면 교점이 셋이 되어 구간 분할이 추가(★2) (3) 두 곡선 중 하나에 미정계수를 넣고 넓이를 주면 I-BW(★2~3)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-208-e1
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 곡선과 $x$축으로 둘러싸인 도형의 넓이. ⑴ $y=x^2-2x-3$ ⑵ $y=x^3-4x^2+3x$.
  category: "x절편 전부 구하기 → 구간별 부호 판정 → 조각마다 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (1) — 교점이 둘 이상일 때 구간별 부호 처리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 근 -1, 3 사이에서 곡선이 x축 아래이므로 부호를 뒤집어 한 번 적분한다. ⑵ 는 근이 0, 1, 3 셋이라 [0,1] 과 [1,3] 에서 부호가 반대가 되어 두 조각을 따로 적분해 더해야 한다. 이 부호 분할은 이 단원의 표준 절차(T-부호)로 보고 통찰로 세지 않았다. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "인수분해로 x절편 전부 구하기 → 이웃한 두 절편 사이마다 부호 판정 → 음인 조각은 부호를 뒤집어 적분 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{32}{3}$ ⑵ $\dfrac{37}{12}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/208-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 두 정수 근을 자유롭게(y=x^2-x-6 · y=x^2-5x+4), ⑵ 는 세 정수 근을 자유롭게(x(x-1)(x-4) · x(x+2)(x-2)) 바꿀 수 있다. 제약: 근이 모두 정수라야 인수분해가 보이고, 두 조각의 넓이가 서로 다른 값이라야 '더하기'를 빠뜨린 오답이 드러난다."
    creative: "(1) ⑵ 의 세 근을 등간격 대칭(x(x^2-4))으로 두면 두 조각 넓이가 같아져 I-SYM 으로 반만 계산 가능(★2) (2) 사차곡선으로 올리면 조각이 셋(★3) (3) 넓이를 주고 근 하나를 미지수로 두면 I-BW(★3)."
```

```yaml
- id: GN-CALC1-208-425
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 곡선과 $x$축으로 둘러싸인 도형의 넓이. ⑴ $y=x^2+2x-8$ ⑵ $y=-x^3-3x^2+x+3$.
  category: "x절편 전부 구하기 → 구간별 부호 판정 → 조각마다 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (1) — 교점이 둘 이상일 때 구간별 부호 처리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝 예제 208-e1 과 골조가 같다. ⑴ 은 근 -4, 2 사이가 x축 아래라 부호 한 번 뒤집기, ⑵ 는 -(x+3)(x+1)(x-1) 로 묶여 근 -3, -1, 1 사이 두 조각의 부호가 반대다. 삼차항 계수가 음수라 ⑵ 의 부호 판정 순서가 e1 과 뒤바뀌는 것이 유일한 추가 주의점이다. 통찰 0 · M_total 6 → 짝 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "인수분해로 x절편 전부 구하기 → 최고차항 부호로 구간별 위·아래 판정 → 음인 조각은 뒤집어 적분 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $36$ ⑵ $8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/208-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 세 근 -3, -1, 1 과 최고차항 부호를 바꿀 수 있다(-(x+2)(x-1)(x-3) 등). 제약: 삼차식이 유리근 정리로 한 근이 보이고 나머지가 이차 인수분해로 떨어져야 한다. 두 조각 넓이의 합이 정수로 떨어지면 검산이 쉽다."
    creative: "(1) ⑵ 를 x^3 계수 양수로 바꾸면 위·아래 조각이 뒤바뀌어 같은 ★2 의 쌍둥이 (2) 한 근을 중근으로 만들면 그 점에서 부호가 바뀌지 않아 조각이 하나로 줄고 '중근=접함' 통찰이 생겨 ★2~3 (3) 구간 끝을 직선 x=k 로 제한하면 골조가 (가)-(2) 로 이동(★2)."
```

```yaml
- id: GN-CALC1-208-426
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=-x^2+kx\ (k<0)$ 와 $x$축으로 둘러싸인 도형의 넓이가 $36$ 일 때 상수 $k$ 의 값.
  category: "교점을 k 로 표현 → 넓이를 k 의 식으로 → 방정식 풀고 k<0 로 선별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 넓이 36 을 미정계수 k 의 방정식으로 되돌려야 풀이가 시작됨 — 넓이를 k 의 식으로 먼저 세운다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이가 주어졌을 때 곡선의 미정계수 구하기 (곡선과 x축)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점은 0 과 k 인데 k<0 이라 적분 구간이 [k,0] 이고 이 구간에서 곡선이 x축 아래라 부호를 뒤집는다. 넓이가 |k|^3/6 꼴로 정리되므로 |k|^3=216 → k=-6. 넓이를 계수의 식으로 되돌리는 역방향 한 단계(I-BW d1)이고 나머지는 표준 절차다. M_total 7 · 통찰 1개 d1 → 짝 예제 209-e2 계열의 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교점 x=0, k (k<0) → 구간 [k,0] 에서 곡선이 x축 아래 → 넓이 = |k|^3/6 = 36 → |k|^3=216 → k=-6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/208-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 값을 세제곱수/6 꼴로 유지하면서 바꿀 수 있다(넓이 4/3 → k=-2 · 넓이 9/2 → k=-3 · 넓이 500/3 → k=-10). 제약: |k|^3 = 6 × (넓이) 가 완전세제곱이라야 k 가 정수로 떨어진다. k<0 조건을 빼면 답이 둘이 된다."
    creative: "(1) 이차항 계수를 a 로 두고 y=ax^2+bx 의 a 를 묻기(넓이 공식 |a|(β-α)^3/6 의 이해 확인 · ★2) (2) k<0 조건을 지우고 '모든 k 의 곱'을 묻기 → 케이스가 둘로 갈려 I-MI 추가(★3) (3) 곡선과 x축 대신 곡선과 직선 y=kx 로 바꾸면 210-430 골조(★2)."
```

```yaml
- id: GN-CALC1-209-e2
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=x^2-6x+5$ 와 $x$축 및 두 직선 $x=3$, $x=6$ 으로 둘러싸인 도형의 넓이.
  category: "적분 구간 안의 x절편 찾기 → 그 점에서 분할 → 조각별 부호로 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·두 직선 사이의 넓이 (2) — 구간 안에서 부호가 바뀌는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 구간 [3,6] 이 문제에서 고정돼 있고, 그 안의 x절편 5 에서 곡선이 x축을 가로지른다는 점만 잡으면 된다. [3,5] 는 부호를 뒤집고 [5,6] 은 그대로 적분해 더한다. ∫_3^6 을 통째로 계산하는 것이 이 유형의 표준 오답이지만, 분할 자체는 단원 표준 절차라 통찰로 세지 않았다. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x절편 1, 5 중 구간 [3,6] 안의 5 에서 분할 → ∫_3^5 로 뒤집은 적분 + ∫_5^6 그대로 적분 → 16/3 + 7/3 = 23/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{23}{3}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-209-e2.png"
  latex: latex-bank/gn-calc1/items/209-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 두 근과 구간 양 끝을 바꿀 수 있다(y=x^2-4x+3 과 [2,4] · y=x^2-x-2 와 [0,3]). 제약: 구간 안에 x절편이 정확히 하나 들어가야 이 유형이 유지되고, 구간 끝이 절편과 겹치면 골조가 (가)-(1) 로 되돌아간다."
    creative: "(1) 구간 안에 절편을 둘 넣으면 조각이 셋(★3) (2) 구간 한쪽 끝만 직선으로 주고 다른 끝은 절편이 되게 하면 209-427 골조(★2) (3) 구간 끝을 미지수 a 로 두고 넓이를 주면 209-428 골조로 I-BW 추가(★3)."
```

```yaml
- id: GN-CALC1-209-427
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=-2x^2+x+1$ 과 $x$축 및 직선 $x=-1$ 로 둘러싸인 도형의 넓이.
  category: "왼쪽 경계는 직선·오른쪽 경계는 x절편 → 부호 바뀌는 점에서 분할 → 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이 (2) — 구간 안에서 부호가 바뀌는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -(2x+1)(x-1) 로 묶으면 절편이 -1/2, 1 이다. 왼쪽 경계는 직선 x=-1 로 주어지지만 오른쪽 경계는 직선이 아니라 절편 x=1 이라는 점을 그림에서 읽어야 하고, 절편 -1/2 에서 부호가 바뀌어 두 조각으로 나뉜다. 분할은 표준 절차라 통찰 없음. 통찰 0 · M_total 6 → 짝 예제 209-e2 와 같은 ★2.
  tier: star_2
  mechanism_primary: "절편 -1/2, 1 → [-1,-1/2] 는 x축 아래라 뒤집어 적분 + [-1/2,1] 은 그대로 적분 → 11/24 + 9/8 = 19/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{19}{12}$'
  answer_source: "답지"
  figure: "crop:fig-209-427.png"
  latex: latex-bank/gn-calc1/items/209-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 두 절편, 왼쪽 경계 직선의 위치를 바꿀 수 있다(y=-x^2+x+2 와 x=-2 등). 제약: 왼쪽 경계가 작은 절편보다 왼쪽에 있어야 두 조각이 생기고, 분수 절편(-1/2)을 정수로 바꾸면 계산이 크게 쉬워져 난이도가 내려간다."
    creative: "(1) 왼쪽 경계를 절편 사이에 두면 조각이 하나로 줄어 ★1~2 (2) 오른쪽도 직선 x=k 로 막으면 209-e2 의 쌍둥이 (3) 넓이를 주고 왼쪽 경계 x=a 를 묻는 역방향이면 209-428 골조(★3)."
```

```yaml
- id: GN-CALC1-209-428
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 $[a,\,2]$ 에서 곡선 $y=x^2-3x$ 와 $x$축 및 두 직선 $x=a$, $x=2$ 로 둘러싸인 도형의 넓이가 $\dfrac{31}{6}$ 일 때 $a$ 의 값($a<0$).
  category: "고정 조각 넓이 계산 → 나머지를 a 의 식으로 → 삼차방정식 풀고 a<0 로 선별"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 넓이 31/6 에서 이미 정해진 [0,2] 조각(10/3)을 빼 [a,0] 조각의 넓이 11/6 을 먼저 확정한 뒤 a 의 방정식을 세움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이가 주어졌을 때 적분 구간의 끝값 구하기 (부호가 바뀌는 구간)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절편이 0, 3 이라 a<0 인 구간 [a,0] 에서는 곡선이 x축 위, [0,2] 에서는 아래다. 부호 분할을 먼저 한 뒤 넓이가 고정된 [0,2] 조각을 빼야 a 의 방정식이 하나 남는다는 것이 이 문항의 진입 장벽이고(I-BW d2), 남은 삼차방정식의 세 근 중 a<0 을 만족하는 것만 취한다(T-범위). 확인체크 짝 예제(209-e2 ★2)보다 역방향 + 부호 분할 + 근 선별이 겹쳐 M_total 8 → ★3. [분류 이슈] 벤더 태그는 확인체크(리터럴 ★1 출발)이나 골조가 예제보다 한 단 위다.
  tier: star_3
  mechanism_primary: "절편 0, 3 → [a,0] 은 위·[0,2] 는 아래 → 10/3 + (a 의 식) = 31/6 → 2a^3-9a^2+11=0 → a<0 인 근 a=-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/209-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 두 절편, 오른쪽 고정 끝 2, 주어진 넓이를 바꿀 수 있다. 제약: 남는 삼차방정식이 정수근 하나를 갖고 나머지 두 근이 a<0 을 위배하도록 값을 고르면 답이 유일해진다. 넓이는 고정 조각 넓이보다 커야 해가 존재한다."
    creative: "(1) a>0 조건으로 바꿔 구간이 절편 사이에 들어가게 하면 부호 분할이 사라져 ★2 (2) 오른쪽 끝을 미지수로 옮기면 같은 골조의 거울상 (3) 넓이 대신 '두 조각의 넓이가 같다'는 조건을 주면 정적분 값이 0 이라는 I-EQV 가 추가돼 ★3~4."
```

```yaml
- id: GN-CALC1-210-e3
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 곡선과 직선으로 둘러싸인 도형의 넓이. ⑴ $y=x^2-1$ 과 $y=-x+1$ ⑵ $y=x^3-3x^2+3x$ 와 $y=x$.
  category: "교점 전부 구하기 → 구간마다 위·아래 판정 → (위 − 아래) 적분 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 — 교점이 셋이면 구간마다 위·아래가 바뀜"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 교점 -2, 1 사이에서 직선이 위라 한 번 적분하면 끝난다. ⑵ 는 차함수가 x(x-1)(x-2) 로 교점이 0, 1, 2 셋이라 [0,1] 과 [1,2] 에서 위아래가 뒤바뀌고, 두 조각을 각각 절댓값으로 더해야 한다. 위아래 교대는 단원 표준 절차라 통찰 없음. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(곡선)-(직선)=0 의 근을 전부 구함 → 이웃 근 사이마다 차함수의 부호 판정 → 조각마다 |차함수| 적분 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{9}{2}$ ⑵ $\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/210-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 직선의 기울기·절편, ⑵ 는 삼차곡선의 계수를 바꿀 수 있다(차함수가 x(x-1)(x-3) 이 되도록 등). 제약: 차함수의 근이 모두 정수라야 인수분해가 보이고, ⑵ 의 두 조각 넓이가 다른 값이 되도록 근 간격을 비대칭으로 두면 '더하기' 누락이 드러난다."
    creative: "(1) ⑵ 에서 직선을 변곡점을 지나게 두면 두 조각이 점대칭이 되어 I-SYM 으로 반만 계산(★2) (2) 직선을 곡선의 접선으로 바꾸면 중근이 생겨 (라) 골조(★2) (3) 직선에 미정계수를 넣고 넓이를 주면 210-430 골조(★2~3)."
```

```yaml
- id: GN-CALC1-210-429
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 곡선과 직선으로 둘러싸인 도형의 넓이. ⑴ $y=-2x^2+x+4$ 와 $y=x+2$ ⑵ $y=x^3-5x$ 와 $y=-x$.
  category: "교점 전부 구하기 → 구간마다 위·아래 판정 → (위 − 아래) 적분 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 — 교점이 셋이면 구간마다 위·아래가 바뀜"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 차함수에서 일차항이 상쇄돼 -2x^2+2 가 되고 교점 ±1 사이를 한 번 적분한다. ⑵ 는 차함수가 x^3-4x=x(x+2)(x-2) 로 교점이 -2, 0, 2 셋이라 두 조각으로 나뉜다. 짝 예제 210-e3 과 골조가 같다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(곡선)-(직선) 의 근을 전부 구함 → ⑴ 은 한 구간, ⑵ 는 [-2,0]·[0,2] 두 구간으로 나눠 |차함수| 적분 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{8}{3}$ ⑵ $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/210-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 는 차함수가 x(x^2-c^2) 꼴이 되도록 직선의 기울기를 고르면 된다(y=x^3-5x 와 y=3x → 근 0, ±2√2 는 무리수라 부적). 제약: 세 근이 정수라야 하고, 홀함수 대칭이 유지되면 두 조각 넓이가 같아 한쪽만 계산해 2배 할 수 있다."
    creative: "(1) ⑵ 의 직선을 y=-x+1 처럼 원점을 벗어나게 두면 대칭이 깨져 두 조각을 각각 계산해야 함(★2~3) (2) 대칭을 명시적으로 묻는 '두 조각의 넓이가 같음을 보이시오'로 바꾸면 I-SYM d2(★3) (3) 직선을 y=mx 로 두고 전체 넓이를 주면 I-BW(★3)."
```

```yaml
- id: GN-CALC1-210-430
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=x^2-2x$ 와 직선 $y=ax$ 로 둘러싸인 도형의 넓이가 $\dfrac{9}{2}$ 일 때 양수 $a$ 의 값.
  category: "교점을 a 로 표현 → 넓이를 a 의 식으로 → 방정식 풀고 a>0 로 선별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 넓이 9/2 를 미정계수 a 의 방정식으로 되돌려야 풀이가 시작됨 — 교점 간격을 a 로 표현해 넓이식을 세운다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이가 주어졌을 때 직선의 미정계수 구하기 (곡선과 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차함수 x^2-(2+a)x 의 근이 0 과 2+a 이고, a>0 이므로 그 구간에서 직선이 위다. 넓이가 (2+a)^3/6 으로 정리되어 (2+a)^3=27 → a=1. 208-426 과 같은 역방향 골조(I-BW d1)이며, 교점 간격을 계수로 표현하는 단계가 하나 더 있지만 넓이 공식이 같아 노동량은 비슷하다. M_total 7 · 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "x^2-2x=ax → 교점 x=0, 2+a → 넓이 = (2+a)^3/6 = 9/2 → 2+a=3 → a=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/210-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 일차항과 주어진 넓이를 바꿀 수 있다(y=x^2-4x 와 넓이 32/3 → a=0 부적 · 넓이 125/6 → a=1). 제약: 6 × (넓이) 가 완전세제곱이라야 교점 간격이 정수로 떨어지고, a>0 조건이 살아 있도록 간격이 곡선의 원래 절편보다 커야 한다."
    creative: "(1) 직선을 y=ax+b 로 두고 조건을 둘 주면 연립이 되어 ★3 (2) a>0 조건을 지우면 a<-2 인 케이스가 살아나 I-MI 추가(★3) (3) 넓이 대신 '넓이를 이등분하는 직선'으로 바꾸면 1/6 공식과 비례 관계를 함께 써야 해 ★4 후보."
```

```yaml
- id: GN-CALC1-211-e4
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 두 곡선으로 둘러싸인 도형의 넓이. ⑴ $y=x^2-2$ 와 $y=-x^2+2x+2$ ⑵ $y=x^3+2x^2-2$ 와 $y=-x^2+2$.
  category: "두 곡선의 차함수 인수분해 → 중근이면 접점이라 분할 없음 → 한 구간 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 차함수 x^3+3x^2-4=(x-1)(x+2)^2 의 중근 -2 를 '두 곡선이 그 점에서 접한다'는 기하 정보로 읽어, 교점이 둘인데도 구간을 나누지 않는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 — 차함수의 중근(접점)에서는 구간이 갈리지 않음"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 차함수가 -2x^2+2x+4 로 교점 -1, 2 사이 한 구간이라 곧바로 적분한다. ⑵ 는 차함수 -(x-1)(x+2)^2 로 교점이 -2, 1 이지만 -2 는 중근이라 그 점을 지나며 부호가 바뀌지 않는다 — 여기서 구간을 둘로 쪼개 절댓값을 씌우는 것이 표준 오답이다. 중근을 접점으로 번역하는 단계만 I-RT d1 로 인정. M_total 6 · 통찰 1개 d1 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(위 곡선)-(아래 곡선) 인수분해 → 중근은 접점이라 부호 불변 → 양 끝 교점 사이 한 구간만 적분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $9$ ⑵ $\dfrac{27}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/211-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 는 차함수가 (x-p)(x-q)^2 꼴이 되도록 계수를 고른다(x^3-3x+2=(x-1)^2(x+2) 등). 제약: 중근이 반드시 남아 있어야 이 유형의 핵심이 유지되고, p 와 q 가 정수라야 인수분해가 보인다. 넓이는 |a|(p-q)^4/12 로 떨어진다."
    creative: "(1) 중근을 서로 다른 두 근으로 풀면 구간이 셋이 되어 분할형(★2~3) (2) 두 곡선이 접한다는 조건을 미정계수로 주면 판별식·중근 조건이 앞에 붙어 ★3 (3) 접점의 위치를 묻는 소문항을 추가하면 골조는 유지한 채 ★2."
```

```yaml
- id: GN-CALC1-211-431
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 두 곡선으로 둘러싸인 도형의 넓이. ⑴ $y=x^3$ 과 $y=3x^2-4$ ⑵ $y=x^3-3x^2-x+3$ 과 $y=x^2-2x-3$.
  category: "차함수 인수분해 → 중근이면 분할 없음·서로 다른 근이면 구간 분할 → 적분 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 차함수 x^3-3x^2+4=(x+1)(x-2)^2 의 중근 2 를 접점으로 읽어 구간을 나누지 않고 [-1,2] 를 한 번에 적분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 — 중근(접점)과 서로 다른 세 근의 구분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 짝 예제 211-e4⑵ 와 같은 중근형이라 구간이 하나다(I-RT d1). ⑵ 는 차함수가 x^3-4x^2+x+6=(x+1)(x-2)(x-3) 으로 서로 다른 근 셋이라 [-1,2] 와 [2,3] 에서 위아래가 뒤바뀌어 두 조각을 더한다. 두 소문항이 같은 유형의 두 갈래를 대비시키는 구성이다. M_total 6 · 통찰 1개 d1 → 짝 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "차함수를 삼차 인수분해 → 중근이면 한 구간·서로 다른 근이면 근마다 분할 → |차함수| 적분 후 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{27}{4}$ ⑵ $\dfrac{71}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/211-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 는 차함수의 세 정수근을 자유롭게 고를 수 있다((x+2)(x-1)(x-3) 등). 제약: 유리근 정리로 한 근이 바로 보여야 하고, 두 조각 넓이가 달라야 분할 누락이 드러난다. ⑴ 은 중근 구조 (x-p)(x-q)^2 를 유지한다."
    creative: "(1) ⑴⑵ 의 순서를 바꿔 학생이 먼저 중근 여부를 판별하게 하면 I-SC 성격이 생겨 ★3 (2) 두 곡선을 모두 삼차로 두면 차함수가 이차가 되어 오히려 쉬워짐(★2) (3) 한 곡선에 미정계수를 넣고 '넓이가 최소'를 묻으면 미분 최적화가 겹쳐 ★4."
```

```yaml
- id: GN-CALC1-211-432
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 함수 $f(x)=-x^2+2x$ 와 조각함수 $g(x)$($x\le 1$ 에서 $x^2-x$, $x\ge 1$ 에서 $x^2-3x+2$)의 그래프로 둘러싸인 도형의 넓이.
  category: "조각별 교점 방정식 → 정의역 밖 근 기각 → x=1 에서 나눠 (f − g) 적분 후 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조각마다 교점 방정식을 따로 풀면 네 개의 근 후보(0, 3/2, 1/2, 2)가 나오고 각 조각의 정의역을 위배하는 3/2 와 1/2 를 기각해야 실제 교점 0 과 2 만 남는다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 두 교점과 g 가 x=1 에서 이어진다는 사실로 닫힌 영역이 [0,2] 하나임을 그래프로 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조각함수 그래프와 둘러싸인 넓이 — 조각별 교점 후보의 정의역 검증"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조각함수라 교점을 한 방정식으로 구할 수 없고 x≤1 쪽과 x≥1 쪽을 따로 풀어야 하는데, 각각에서 나온 근 하나씩이 그 조각의 정의역 밖이라 기각된다(I-VF d2 · T-범위). 살아남은 교점 0 과 2 사이에서 아래 함수가 x=1 을 경계로 바뀌므로 두 조각을 따로 적분해 더한다. 근 기각을 빠뜨리면 영역 자체를 잘못 잡는다. 통찰 2개 · M_total 8 → 확인체크 출발점에서 +1 → ★3. [분류 이슈] 벤더 태그는 확인체크이나 짝 예제 211-e4(★2)보다 두 단 위의 판단이 요구된다.
  tier: star_3
  mechanism_primary: "조각별로 f=g 를 풀어 근 후보 4개 → 정의역 위배 2개 기각 → 교점 0, 2 → ∫_0^1 (f-g_왼쪽) + ∫_1^2 (f-g_오른쪽) = 5/6 + 5/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/211-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각의 분기점(x=1)과 두 조각의 일차항을 바꿀 수 있다. 제약: 두 조각이 분기점에서 같은 값을 가져야 g 가 연속이고, 조각마다 교점 근 하나가 정의역 밖으로 나가도록 계수를 잡아야 기각 단계가 살아난다."
    creative: "(1) g 를 |x^2-x| 같은 절댓값으로 바꾸면 213-436 골조와 합쳐짐(★3) (2) 분기점에서 g 를 불연속으로 만들면 영역이 둘로 끊겨 ★4 (3) 기각 없이 두 근이 모두 유효하도록 바꾸면 I-VF 가 빠져 ★2."
```

```yaml
- id: GN-CALC1-212-e5
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=x^3+2$ 와 이 곡선 위의 점 $(1,\,3)$ 에서의 접선으로 둘러싸인 도형의 넓이.
  category: "접선 구하기 → 차함수가 접점에서 중근 → 나머지 교점까지 한 구간 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "차함수 x^3-3x+2=(x-1)^2(x+2) 의 중근 1 이 접점이라는 것을 읽어, 교점이 둘인데도 [-2,1] 을 한 구간으로 적분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 도형의 넓이 — 접점은 차함수의 중근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=3x^2 로 접선 y=3x 를 얻는 것은 앞 단원 표준 절차이고, 이 유형의 핵심은 (곡선)-(접선) 이 접점에서 반드시 중근을 갖는다는 구조다. 그래서 다른 교점 -2 만 찾으면 구간이 [-2,1] 하나로 정해진다. 중근을 접점으로 번역하는 단계만 I-RT d1. M_total 6 · 통찰 1개 d1 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 y=3x → 차함수 x^3-3x+2=(x-1)^2(x+2) → 중근 1 은 접점 → ∫_{-2}^{1} |차함수| dx = 27/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{27}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/212-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 상수항과 접점의 x좌표를 바꿀 수 있다(y=x^3-1 의 x=2 에서의 접선 등). 제약: 삼차곡선이라야 접선과의 차함수가 (x-t)^2(x+2t) 꼴로 떨어지고 나머지 교점이 -2t 로 정수가 된다. 넓이는 |a|(3t)^4/12 로 커지므로 t 를 키우면 값이 급격히 커진다."
    creative: "(1) 접점을 변곡점(x=0)으로 잡으면 차함수가 x^3 이 되어 둘러싸인 영역이 생기지 않는다 — 반례로 쓰면 ★3 (2) 곡선 밖의 점에서 그은 접선으로 바꾸면 접점 찾기가 앞에 붙어 ★3 (3) 접선 대신 기울기만 같은 평행선으로 바꾸면 중근이 깨져 (나) 골조(★2)."
```

```yaml
- id: GN-CALC1-212-433
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=x^2-1$ 과 이 곡선 위의 점 $(2,\,3)$ 에서의 접선 및 $y$축으로 둘러싸인 도형의 넓이.
  category: "접선 구하기 → 차함수가 완전제곱 → y축(x=0)부터 접점까지 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "포물선과 접선은 접점 하나에서만 만나므로 차함수가 완전제곱 (x-2)^2 이 되고, 닫힌 영역을 만들려면 y축이 왼쪽 경계여야 함을 그래프로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선·접선·좌표축으로 둘러싸인 넓이 — 접점이 유일해 축이 경계가 되는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=2x 에서 접선 y=4x-5 를 얻고 차함수는 (x-2)^2 이다. 포물선과 접선은 교점이 접점 하나뿐이라 곡선·접선만으로는 영역이 닫히지 않고 y축이 세 번째 경계가 된다는 점이 이 문항의 판단점이다(I-RT d1). 그 뒤 [0,2] 에서 완전제곱을 적분하면 끝. M_total 6 · 통찰 1개 d1 → 짝 예제 212-e5 와 같은 ★2.
  tier: star_2
  mechanism_primary: "접선 y=4x-5 → 차함수 (x-2)^2 → 교점이 접점뿐이라 y축이 왼쪽 경계 → ∫_0^2 (x-2)^2 dx = 8/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/212-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표와 곡선의 상수항을 바꿀 수 있다(y=x^2+1 의 x=3 에서의 접선 등). 제약: 접점이 y축 오른쪽에 있어야 [0,t] 구간이 생기고, 넓이는 t^3/3 이라 접점만 정하면 값이 결정된다."
    creative: "(1) 세 번째 경계를 x축이나 x=k 로 바꾸면 구간만 달라지는 쌍둥이(★2) (2) 두 접선(서로 다른 두 점에서)과 곡선으로 둘러싸면 두 접점 사이 교점 계산이 붙어 ★3 (3) 접점을 미지수 t 로 두고 넓이를 주면 I-BW 추가(★3)."
```

```yaml
- id: GN-CALC1-212-434
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=x^3-3x^2+x+4$ 와 이 곡선 위의 점 $(0,\,4)$ 에서의 접선으로 둘러싸인 도형의 넓이.
  category: "접선 구하기 → 차함수가 접점에서 중근 → 나머지 교점까지 한 구간 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "차함수 x^3-3x^2=x^2(x-3) 의 중근 0 이 접점이라는 것을 읽어, [0,3] 을 한 구간으로 적분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 도형의 넓이 — 접점은 차함수의 중근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=3x^2-6x+1 이라 x=0 에서 기울기 1, 접선은 y=x+4. 차함수가 x^2(x-3) 으로 접점 0 이 중근이고 나머지 교점은 3 이다. 짝 예제 212-e5 와 골조가 같고, 접점이 원점 쪽이라 계산이 오히려 짧다. M_total 6 · 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "접선 y=x+4 → 차함수 x^2(x-3) → 중근 0 은 접점 → ∫_0^3 (3x^2-x^3) dx = 27/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{27}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/212-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차곡선의 이차항 계수와 접점 위치를 바꿀 수 있다(y=x^3-6x^2+x 의 x=0 에서의 접선 → 나머지 교점 6). 제약: 접점이 정수여야 하고 차함수가 (x-t)^2(x-s) 로 인수분해되어야 한다. 넓이는 |t-s|^4/12."
    creative: "(1) 접점을 x=1 처럼 원점 밖으로 옮기면 계산량만 늘고 골조는 동일(★2) (2) 접선을 연장해 곡선과 세 번 만나게 하는 것은 삼차에서 불가능하다는 점을 묻는 서술형이면 ★3 (3) 곡선 위 두 점의 접선이 평행하다는 조건을 얹으면 ★4."
```

```yaml
- id: GN-CALC1-213-e6
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=|x^2-1|$ 과 직선 $y=1$ 로 둘러싸인 도형의 넓이.
  category: "절댓값 그래프 개형 → 교점 세 개 → y축 대칭으로 반만 계산 후 2배"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|x^2-1| 의 그래프를 x^2-1 의 음수 부분을 x축 위로 접어 올린 개형으로 그려야 직선 y=1 과의 닫힌 영역(가운데 봉우리 아래 + 양쪽 골)이 확정됨"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프와 직선이 모두 y축 대칭이므로 x≥0 쪽 넓이만 구해 2배"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값 기호를 포함한 곡선과 직선으로 둘러싸인 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |x^2-1|=1 에서 x^2-1=1 과 x^2-1=-1 두 경우가 나와 교점이 -√2, 0, √2 셋이다. 접어 올린 개형을 그리지 않으면 가운데 봉우리(0,1)가 직선에 닿는다는 것과 영역이 어디서 닫히는지를 놓친다(I-RT d2). 대칭을 쓰면 계산이 절반으로 준다(I-SYM d1). 절댓값 안의 부호가 바뀌는 x=±1 에서 한 번 더 나눠야 해 M_total 8. 통찰 2개 → 필수 예제 출발점에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "|x^2-1| 개형(±1 에서 꺾임) → y=1 과의 교점 0, ±√2 → x≥0 에서 [0,1] 과 [1,√2] 로 나눠 적분 → 2배"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{8}{3}(\sqrt{2}-1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/213-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 높이와 곡선 안의 상수를 바꿀 수 있다(y=|x^2-4| 와 y=4 · y=|x^2-1| 과 y=3). 제약: 직선 높이가 봉우리 높이보다 크면 교점이 둘로 줄어 대칭 계산만 남고, 같으면 이 문항, 작으면 영역이 둘로 끊긴다 — 세 경우가 ★2·★3·★4 로 갈린다. 교점에 무리수가 들어가도 답은 유리수 × √2 꼴로 정리된다."
    creative: "(1) 직선을 y=k 로 두고 넓이를 주면 I-BW 가 더해져 ★4 (2) 절댓값을 |x^2-x| 처럼 비대칭으로 바꾸면 I-SYM 이 빠지고 조각이 늘어 ★3 (3) 직선을 기울어진 y=x+k 로 바꾸면 213-436 골조(★3)."
```

```yaml
- id: GN-CALC1-213-435
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=|3x^2+3x|$ 와 $x$축 및 직선 $x=-2$ 로 둘러싸인 도형의 넓이.
  category: "절댓값 그래프 개형 → 꺾이는 x절편에서 분할 → 조각마다 적분 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3x^2+3x 의 음수 구간(-1<x<0)을 접어 올린 개형을 그려야 x축과 x=-2 사이의 영역이 [-2,-1] 과 [-1,0] 두 조각으로 갈린다는 것이 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값을 포함한 곡선과 x축·직선 사이의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값 때문에 그래프가 전부 x축 위에 있으므로 부호 뒤집기 자체는 사라지지만, 대신 절댓값 안의 부호가 바뀌는 x=-1 에서 피적분함수가 달라진다(I-RT d1). 오른쪽 경계가 직선이 아니라 절편 x=0 이라는 것도 그림에서 읽는다. 조각 둘을 각각 적분해 더하면 2.5+0.5=3. M_total 6 · 통찰 1개 d1 → 짝 예제 213-e6 보다 한 단 아래인 ★2.
  tier: star_2
  mechanism_primary: "절편 -1, 0 에서 꺾임 → ∫_{-2}^{-1}(3x^2+3x)dx + ∫_{-1}^{0} -(3x^2+3x)dx = 5/2 + 1/2 = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: "crop:fig-213-435.png"
  latex: latex-bank/gn-calc1/items/213-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 왼쪽 경계 직선을 바꿀 수 있다(y=|2x^2-2x| 와 x=2 등). 제약: 경계 직선이 두 절편 바깥에 있어야 조각이 둘 생기고, 절편이 정수라야 꺾이는 점이 깔끔하다."
    creative: "(1) 경계 직선을 두 절편 사이에 두면 조각이 하나로 줄어 ★1~2 (2) x축 대신 직선 y=k 를 위 경계로 얹으면 213-e6 골조(★3) (3) 넓이를 주고 경계 직선의 위치를 묻는 역방향이면 I-BW 추가(★3)."
```

```yaml
- id: GN-CALC1-213-436
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=|x^2-x|$ 와 직선 $y=x+3$ 으로 둘러싸인 도형의 넓이.
  category: "절댓값 케이스별 교점 방정식 → 범위 밖 해 기각 → 꺾이는 점에서 분할 후 적분"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|x^2-x| 를 0<x<1 구간만 접어 올린 개형으로 옮겨야 직선 y=x+3 과 만드는 닫힌 영역의 좌우 끝이 보임"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값을 벗긴 두 케이스에서 나온 해를 각 케이스의 범위에 되돌려 검증 — 0<x<1 케이스는 실근이 없어 통째로 기각되고 바깥 케이스의 -1, 3 만 남는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값을 포함한 곡선과 직선으로 둘러싸인 넓이 — 케이스별 교점 검증"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x≤0 또는 x≥1 에서는 x^2-x=x+3 이 되어 근 -1, 3 을 얻고, 0<x<1 에서는 -(x^2-x)=x+3 이 실근을 갖지 않아 그 케이스가 기각된다(I-VF d1). 영역은 [-1,3] 이지만 절댓값이 꺾이는 0 과 1 에서 피적분함수가 바뀌어 세 조각으로 나눠 적분해야 한다. 개형을 먼저 그리지 않으면 기각과 분할을 모두 놓친다(I-RT d2). 통찰 2개 · M_total 8 → 확인체크 출발점에서 +1 → ★3. [분류 이슈] 벤더 태그는 확인체크이나 짝 예제 213-e6(★3)와 같은 수준이다.
  tier: star_3
  mechanism_primary: "케이스별 |x^2-x|=x+3 → 유효 교점 -1, 3 → [-1,0]·[0,1]·[1,3] 세 조각에서 (직선 − 곡선) 적분 후 합 = 31/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{31}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/213-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편과 이차식의 두 절편을 바꿀 수 있다(y=|x^2-4| 와 y=x+2 등). 제약: 직선이 접어 올린 봉우리보다 위를 지나야 그쪽 케이스가 실근 없이 기각되고, 바깥 케이스의 두 근이 각각 자기 범위에 들어가야 한다. 근이 정수라야 세 조각 적분이 유리수로 떨어진다."
    creative: "(1) 직선을 낮춰 봉우리를 가로지르게 하면 교점이 넷이 되어 영역이 둘로 끊기고 ★4 (2) 직선을 y=k 수평선으로 바꾸면 213-e6 과 합쳐짐(★3) (3) 넓이를 주고 직선의 절편을 묻는 역방향이면 I-BW 까지 세 통찰이 겹쳐 ★4."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 3 · ★2 14 · ★3 4 · ★4 0 · ★5 0
- 통찰형 12(208-426 · 209-428 · 210-430 · 211-e4 · 211-431 · 211-432 · 212-e5 · 212-433 · 212-434 · 213-e6 · 213-435 · 213-436) · 절차형 9 · premium 0
- 통찰 유형 분포: I-RT 9(d1 7 · d2 2) · I-BW 3(d1 2 · d2 1) · I-VF 2(d1 1 · d2 1) · I-SYM 1(d1) — I-XU·I-SC·I-PD·I-CON 은 이 범위에 없다(그래서 ★4 이상 없음)
- type_hint 상위: 「곡선과 x축 사이의 넓이 — 구간별 부호 처리」 5 · 「두 곡선/곡선과 직선 사이의 넓이 — 교점 분할·중근」 6 · 「곡선과 접선으로 둘러싸인 넓이」 3 · 「절댓값·조각함수 그래프와 넓이」 4 · 「넓이가 주어졌을 때 미정계수·구간 끝 구하기」 3
- 구역별: 개념원리 익히기 3문(전부 ★1) · 필수 예제 6문(★2 5 · ★3 1) · 확인체크 12문(★2 9 · ★3 3)
- 그림: 6문(`crop:fig-207-422.png` · `crop:fig-207-423.png` · `crop:fig-207-424.png` · `crop:fig-209-e2.png` · `crop:fig-209-427.png` · `crop:fig-213-435.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-209-428 | 벤더 태그는 확인체크(리터럴 ★1 출발)이나 역방향 + 부호 분할 + a<0 근 선별이 겹쳐 짝 예제 209-e2(★2)보다 한 단 위 → ★3 으로 두고 2단 차이 기록 | ★3 |
| GN-CALC1-211-432 | 확인체크지만 조각함수 교점 후보의 정의역 기각(I-VF d2)이 필요해 짝 예제 211-e4(★2)보다 위. 조각이 불연속이었다면 ★4 후보 | ★3 / ★4 |
| GN-CALC1-213-436 | 확인체크지만 절댓값 케이스 기각 + 세 조각 분할로 짝 예제 213-e6(★3)와 동급 → ★3 으로 두고 2단 차이 기록 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 실질적으로 **다섯 갈래**다 — (가) 곡선과 x축, (나) 곡선과 직선·두 곡선, (다) 넓이 역방향, (라) 곡선과 접선, (마) 절댓값·조각함수. (가)와 (나)는 「적분 구간을 무엇이 정하는가(x절편이냐 교점이냐)」만 다르고 나머지 절차가 같아, 카탈로그에서는 **한 기본 유형 + 경계 파라미터(x축 / 직선 / 다른 곡선)** 로 묶어도 된다. base ★ 는 둘 다 2 후보.
- 따로 세워야 할 유형: **(다) 역방향형**(208-426 · 209-428 · 210-430). 교점 간격을 미정계수로 표현해 넓이 공식 |a|(β-α)^3/6 을 방정식으로 쓰는 도구가 (가)·(나)에 없다. base ★ 2(단순) / 3(부호 분할이 겹칠 때)로 두 슬롯을 두는 편이 낫다.
- 따로 세워야 할 유형: **(라) 곡선과 접선**(212-e5 · 212-433 · 212-434). 「차함수가 접점에서 중근」이라는 구조 자체가 이 유형의 정체이고, 211-e4⑵·211-431⑴ 의 중근형도 사실상 같은 도구를 쓰므로 카탈로그에서는 (라) 아래 「접선이 주어진 경우 / 두 곡선이 접하는 경우」 두 하위 슬롯으로 두면 중복이 없다. base ★ 2.
- 따로 세워야 할 유형: **(마) 절댓값·조각함수**(211-432 · 213-e6 · 213-435 · 213-436). 그래프 개형 확정(I-RT)과 케이스 기각(I-VF)이 필수라 앞의 넷과 요구 도구가 다르다. base ★ 3 이고, 직선이 봉우리를 가로질러 영역이 끊기는 배치는 ★4 슬롯 후보다.
- 이 단원 전체에 I-XU·I-SC 가 없다. ★4·★5 슬롯을 만들려면 최대·최소(미분)나 정적분으로 정의된 함수 단원과의 결합이 필요하며, 23단원 문항만으로는 ★3 이 천장이다.
