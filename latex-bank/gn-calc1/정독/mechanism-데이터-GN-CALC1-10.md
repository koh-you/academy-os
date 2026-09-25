---
name: mechanism-데이터-GN-CALC1-10
description: 개념원리 미적분Ⅰ 10 접선의 방정식(1/1 · 88~95쪽 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 10 접선의 방정식
  unit_code: CALC1-10
  part: "1/1"
  extract_range: "88~95쪽 · 88-157~95-177"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 10 접선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 88~95쪽 두 구역 — 「개념원리 익히기」 3문(88-157~88-159)과 「필수·발전 예제」 25문(필수 예제 7 · 확인체크 18) — 의 28문항 전수를 다룬다. 단원의 도구는 사실상 하나다. **접점의 $x$좌표를 정하고, 그 점에서 `함숫값`과 `미분계수`를 읽어 점-기울기 직선식을 세운다.** 문항이 갈리는 것은 접점을 어떻게 얻느냐 하나뿐이며, 이 파일의 블록들은 그 순서대로 다섯 층으로 배열돼 있다: ⑴ 접점이 곡선 위 점으로 주어짐(88~90쪽) ⑵ 기울기가 주어져 `f'(t)=m` 으로 접점을 찾음(91쪽) ⑶ 곡선 밖의 점을 지난다는 조건을 접점 매개변수의 접선식에 대입함(92쪽) ⑷ 곡선과 직선·두 곡선이 접한다는 조건을 `함숫값 일치 ∧ 미분계수 일치` 두 식으로 옮김(93~94쪽) ⑸ 두 곡선이 수직으로 만나는 조건으로 기울기 곱을 −1 로 둠(95쪽).

벤더 난이도 신호: 개념원리 고등은 구역과 태그가 난이도 층이다. 이 범위의 88-157~88-159 는 통번호 「개념원리 익히기」라 ★1 출발이고, tag 「필수」는 상자 발문만 전사된 필수 예제(★2 출발), tag 「확인체크」는 필수 예제 바로 아래 붙은 확인 문항이라 예제와 같은 골조·같은 층으로 보고 ★2 를 출발점으로 잡았다(GN-CALC1-02 에서 세운 관례와 동일). 이 범위에는 「발전」·「특강」·기출 태그가 없어 출발점이 ★1/★2 두 값뿐이고, 상향은 통찰로만 일어난다. level 필드는 전 문항 없음(`-`), 그림도 전 문항 없음.

통찰 판정에서 이 단원의 갈림선은 **접점을 알고 있는가**다. 접점(또는 접하는 점)이 좌표로 주어진 문항은 조건 변환이 거의 직접적이라 `I-EQV depth 1`, 접점을 미지수 $t$ 로 두고 「지난다·접한다」를 $t$ 에 대한 방정식으로 옮겨야 하는 문항은 `I-EQV depth 2` 로 잡았다. 반대로 91쪽의 「기울기가 주어진 접선」은 예제 제목이 골조를 그대로 알려주고 `f'(t)=m` 한 줄로 끝나므로 통찰로 카운트하지 않고 절차형으로 두었다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-88-157
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 곡선 y=2x^2+4x-3 위의 점 (1,3), 곡선 y=x^3-2x+1 위의 점 (2,5) 에서의
    접선의 기울기를 각각 구하기.
  category: "도함수 구하기 → 접점의 x좌표 대입 → 기울기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 기울기(미분계수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「접선의 기울기 = 그 점에서의 미분계수」라는 정의 한 줄을 그대로 쓰는 문항. 다항함수 미분 → x 대입으로 끝나고,
    주어진 점이 곡선 위에 있는지 확인할 필요조차 없게 값이 맞춰져 있다.
    통찰 0 · M_total 4 → 익히기 구역 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "f'(x) 구하기 → 접점 x좌표 대입 → f'(a) 가 기울기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $8$ ⑵ $10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/88-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·삼차 계수와 접점 x좌표를 자유롭게 바꿀 수 있다. 제약: 주어진 점이 반드시 곡선 위에 있어야 하므로 y좌표를 함께 다시 계산해야 하고, 기울기가 정수로 떨어지도록 접점 x좌표는 작은 정수로 둔다."
    creative: "(1) 기울기 대신 그 점에서의 접선의 방정식을 묻기(★1 유지) (2) 주어진 점을 곡선 밖의 점으로 바꾸면 접점 미지수 골조로 바뀌어 ★3 (3) 두 곡선의 같은 x좌표에서의 기울기를 비교하게 하면 계산량만 늘어 ★1~2)."
```

```yaml
- id: GN-CALC1-88-158
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 y=x^2-4x-1 위의 점 (4,-1) 에서의 접선의 방정식을 구하는 과정의 빈칸
    (f'(x) · f'(4) · 점-기울기 식 · 최종 y=…)을 채우기.
  category: "접선의 방정식 표준 절차를 빈칸으로 복기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(과정 빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이 골조가 빈칸 틀로 이미 제시돼 있어 학생은 각 칸의 값만 채운다 — 판단 지점이 없다.
    유일한 주의는 점-기울기 식에 y좌표 -1 을 그대로 넣어 y-(-1) 의 부호를 놓치지 않는 것(T-부호).
    통찰 0 · M_total 4 → 익히기 구역 출발점 ★1 유지.
    [분류 이슈] 빈칸 채우기형이라 「유형」 단위로 묶을 때 같은 골조의 일반 문항(90-e2)과 층이 다르다 — 카탈로그에서는 같은 유형의 도입 변형으로 처리해야 한다.
  tier: star_1
  mechanism_primary: "f'(x)=2x-4 → f'(4) 가 기울기 → y-(-1)=f'(4)(x-4) 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2x-4$, $4$, $4$, $-1$, $4$, $4$, $4x-17$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/88-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·일차항 계수·접점 x좌표를 바꿀 수 있다. 제약: 접점 y좌표를 음수로 두어야 y-(...) 부호 함정이 살아 있고, 빈칸 개수와 순서는 틀이 고정돼 있으므로 답 문자열도 같은 개수로 맞춰야 한다."
    creative: "(1) 빈칸 일부를 지워 학생이 과정 자체를 쓰게 하면 ★1 유지 (2) 마지막 칸을 「이 접선과 x축의 교점」으로 확장(★2) (3) 같은 틀을 법선 구하기로 바꾸면 수직 기울기 단계가 추가돼 ★2."
```

```yaml
- id: GN-CALC1-88-159
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    곡선 y=3x^2+2x+1 에 접하고 기울기가 8 인 직선의 방정식을 구하는 과정의 빈칸
    (f'(x) · 접점을 (t, …) 로 둔 뒤 f'(t)=8 · 접점 좌표 · 최종 y=…)을 채우기.
  category: "접점을 미지수로 두기 → f'(t)=기울기 → t 결정 → 접선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(과정 빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원에서 처음으로 접점을 모르는 상황이지만, 접점을 (t, 3t^2+2t+1) 로 두라는 지시가 틀 안에 이미 적혀 있고 t=1 도 주어진다.
    학생이 하는 일은 f'(t)=6t+2 를 쓰고 값을 대입하는 것뿐이라 단계 수만 늘고 판단은 없다.
    통찰 0 · M_total 5 → 익히기 구역 출발점 ★1 유지(−1 하면 범위 밖이라 clamp).
    [분류 이슈] 빈칸 채우기형이라 같은 골조의 일반 문항(91-e3)과 층이 다르다 — 카탈로그에서는 도입 변형으로 처리.
  tier: star_1
  mechanism_primary: "접점 (t, f(t)) → f'(t)=8 로 t 결정 → 접점 좌표 → 점-기울기 식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6x+2$, $6t+2$, $6$, $6$, $8$, $1$, $8x-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/88-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수와 주어진 기울기를 바꿀 수 있다. 제약: f'(t)=m 이 t 에 대한 일차방정식이므로 t 가 정수로 떨어지도록 (m - 일차계수)가 이차계수의 2배로 나누어떨어져야 한다."
    creative: "(1) 곡선을 삼차로 바꾸면 f'(t)=m 이 이차방정식이 되어 접점이 둘 — 답이 두 개가 되며 ★2 (2) 기울기 대신 「직선 y=8x+3 과 평행」으로 주기(★1~2) (3) 빈칸을 없애고 그냥 묻기(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-89-e1
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 곡선 y=-x^3+ax^2-2x+b 위의 점 (2,1) 에서의 접선의 기울기가 -2 일 때 상수 a, b.
    ⑵ 곡선 y=2x^3+ax^2+bx 위의 두 점 (1,3), (2,c) 에서의 접선의 기울기가 같을 때 상수 a, b, c.
  category: "점이 곡선 위 조건 + 기울기 조건을 각각 식으로 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수가 둘이면 식도 둘 필요하다는 표준 절차. 「점이 곡선 위」에서 한 식, 「기울기가 -2」 즉 f'(2)=-2 에서 한 식을 얻어 연립한다.
    ⑵ 는 기울기가 같다는 조건을 f'(1)=f'(2) 로 옮겨 a 를 먼저 얻고, (1,3) 대입으로 b, 마지막에 c=f(2) 를 계산하는 순서가 강제된다.
    미정계수 대입은 스키마상 I-BW 로 인정하지 않으므로 통찰 0 · M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "점을 곡선식에 대입 → f'(접점)=주어진 기울기 → 두 식 연립 → 남은 값은 함숫값으로 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $a=3$, $b=1$ ⑵ $a=-9$, $b=10$, $c=0$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/89-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 곡선의 최고차 계수, 접점 x좌표, 주어진 기울기를 바꿀 수 있다. 제약: 연립의 해 a, b 가 정수로 떨어지도록 접점 x좌표는 작은 정수로 두고, ⑵ 는 f'(p)=f'(q) 가 a 에 대한 일차식이 되도록 두 점의 x좌표를 서로 다르게 둔다."
    creative: "(1) 기울기 조건 대신 「접선이 원점을 지난다」로 바꾸면 접점 미지수 골조로 바뀌어 ★3 (2) ⑵ 의 두 점을 「두 접선이 수직」으로 바꾸면 기울기 곱 -1 단계가 추가돼 ★3 (3) a, b 를 구한 뒤 극값을 묻는 다음 단원 결합으로 확장하면 I-XU ★3~4."
```

```yaml
- id: GN-CALC1-89-160
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=x^3+ax^2+bx 가 점 (1,5) 를 지나고, x좌표가 -1 인 점에서의 접선의 기울기가 1 일 때 상수 a, b.
  category: "통과 조건 + 기울기 조건 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    89-e1 과 같은 골조인데 두 조건이 서로 다른 x 에서 주어진다 — 통과 조건은 x=1, 기울기 조건은 x=-1.
    f'(x)=3x^2+2ax+b 에 x=-1 을 넣을 때 2a 의 부호가 뒤집히는 것이 유일한 함정(T-부호).
    통찰 0 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1,5) 대입으로 식 1 → f'(-1)=1 로 식 2 → 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=2$, $b=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/89-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "통과점의 좌표와 기울기 조건의 x좌표·기울기값을 바꿀 수 있다. 제약: 두 식이 a, b 에 대한 일차 연립이므로 계수행렬이 특이하지 않도록 두 x좌표를 달리 두고, 해가 정수가 되도록 통과점 y좌표를 맞춘다."
    creative: "(1) 기울기 조건을 「x=-1 에서의 접선이 x축과 평행」으로 바꾸면 f'(-1)=0(★2 유지) (2) 조건 하나를 「접선이 점 (0,1) 을 지난다」로 바꾸면 접선식을 먼저 세워야 해 ★3 (3) a, b 대신 곡선을 사차로 올려 미정계수 3개·조건 3개로 확장(★3)."
```

```yaml
- id: GN-CALC1-89-161
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=2x^3+ax^2+bx+c 위의 두 점 (-1,-11), (2,1) 에서의 접선이 평행할 때 상수 a, b, c 에 대하여 abc.
  category: "평행 → 기울기 일치 + 두 점 통과 → 3원 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수가 셋이니 식도 셋 — 두 점 통과 두 식과 f'(-1)=f'(2) 한 식.
    「평행」을 기울기 일치로 옮기는 것은 이 단계에서 표준 지식이라 통찰로 세지 않았고, f'(-1)=f'(2) 가 a 만 남기는 일차식이라 연립이 순차적으로 풀린다.
    통찰 0 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(-1)=f'(2) 로 a → 두 점 대입으로 b, c → 곱 abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/89-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 계수와 두 점의 좌표를 바꿀 수 있다. 제약: 두 점의 x좌표 합이 f' 의 대칭축을 결정하므로 a 가 정수로 떨어지려면 (x1+x2)에 최고차 계수 3배를 곱한 값이 2 로 나누어떨어져야 하고, 두 y좌표는 남은 b, c 가 정수가 되도록 맞춘다."
    creative: "(1) 「평행」을 「수직」으로 바꾸면 기울기 곱 -1 이라 식이 이차가 되며 ★3 (2) abc 대신 두 접선 사이의 거리를 묻기(★3) (3) 조건을 「두 점에서의 접선이 모두 원점을 지난다」로 바꾸면 접선식 두 개를 세워야 해 ★3."
```

```yaml
- id: GN-CALC1-90-e2
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 y=x^3+2x^2+x-2 에 대하여 ⑴ 점 (1,2) 에서의 접선의 방정식
    ⑵ 그 점을 지나고 이 접선에 수직인 직선(법선)의 방정식.
  category: "접선의 방정식 → 수직 기울기(음의 역수)로 법선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선·법선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 f'(1)=8 을 점-기울기 식에 넣는 한 줄. ⑵ 는 같은 점에서 기울기만 -1/8 로 바꿔 쓰는 것이라 새 도구가 없고, 분수 기울기를 y절편까지 정리하는 계산 부담만 남는다(Mₖ=2).
    수직 기울기의 부호를 뒤집는 것이 유일한 함정(T-부호).
    통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(1) 로 접선 기울기 → 점-기울기 식 → 법선은 같은 점에 기울기 -1/f'(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=8x-6$ ⑵ $y=-\dfrac{1}{8}x+\dfrac{17}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/90-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 곡선의 계수와 접점 x좌표를 바꿀 수 있다. 제약: 접점이 곡선 위에 있어야 하므로 y좌표를 다시 계산해야 하고, ⑵ 의 법선이 지저분해지지 않도록 f'(접점)을 절댓값이 작은 정수(±1, ±2, ±4)로 맞추는 편이 좋다."
    creative: "(1) 법선이 x축·y축과 만나는 점으로 삼각형 넓이를 묻기(계산만 추가 ★2) (2) 접점을 곡선 밖의 점으로 바꿔 「그은 접선」으로 만들면 접점 미지수 골조라 ★3 (3) 법선이 곡선과 다시 만나는 점을 묻기(삼차방정식 인수분해 추가 ★3)."
```

```yaml
- id: GN-CALC1-90-162
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=-3x^3-x^2+2x+1 위의 점 (-1,1) 에서의 접선의 방정식.
  category: "도함수 → 접점 대입 → 점-기울기 식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선·법선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-9x^2-2x+2 에 x=-1 을 넣고 점-기울기 식을 쓰면 끝나는 세 단계.
    음의 계수와 음수 대입이 겹쳐 부호 실수만 조심하면 되고(T-부호) 판단 지점은 없다.
    통찰 0 · M_total 5 → 확인체크 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "f'(-1) 로 기울기 → y-1=f'(-1)(x+1) 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-5x-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/90-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차·이차·일차 계수와 접점 x좌표를 바꿀 수 있다. 제약: 접점은 반드시 곡선 위여야 하므로 상수항으로 y좌표를 맞추고, 부호 함정을 유지하려면 접점 x좌표를 음수로 둔다."
    creative: "(1) 같은 점에서의 법선을 묻기(★2) (2) 접선이 x축과 이루는 각이나 x절편을 묻기(★2) (3) 「이 접선이 곡선과 다시 만나는 점」을 묻기 — (x+1)^2 인수 발견이 필요해 ★3."
```

```yaml
- id: GN-CALC1-90-163
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=x^3+ax^2+bx 위의 점 (2,4) 에서의 접선의 방정식이 y=6x-8 일 때 상수 a, b.
  category: "접선식이 주어짐 → 통과 조건 + 기울기 조건 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 방정식이 주어졌을 때 미정계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 접선식에서 쓸 정보는 기울기 6 하나이고, 나머지 한 식은 점 (2,4) 가 곡선 위라는 것에서 나온다.
    즉 89-e1 과 같은 2원 연립이며 「접선식이 주어졌다」는 포장만 다르다 — 접선식의 y절편 -8 은 (2,4) 가 그 직선 위임을 확인해 줄 뿐 새 식이 아니다.
    통찰 0 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(2,4) 를 곡선에 대입 → f'(2)=6 → 두 식 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-2$, $b=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/90-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x좌표와 접선의 기울기·y절편을 바꿀 수 있다. 제약: 접점이 곡선과 접선 양쪽 위에 있어야 하므로 (접점 y좌표)=(기울기)(접점 x좌표)+(y절편) 이 먼저 성립해야 하고, 그 뒤 a, b 가 정수로 떨어지게 조정한다."
    creative: "(1) 접선식 대신 「접선이 두 점 (0,-8), (2,4) 를 지난다」로 주기(★2 유지) (2) 접점을 주지 않고 「접선이 y=6x-8 이다」만 주면 접점 미지수 골조라 ★3 (3) a, b 를 구한 뒤 그 곡선과 접선의 다른 교점을 묻기(★3)."
```

```yaml
- id: GN-CALC1-90-164
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=-x^3+ax-5 위의 점 (1,-4) 를 지나고 그 점에서의 접선에 수직인 직선이 y=bx+c 일 때 상수 a, b, c 에 대하여 abc.
  category: "통과 조건으로 a → 접선 기울기 → 음의 역수로 b → 대입으로 c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 법선으로 미정계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    순서가 강제된 4단계 — 점 대입으로 a, f'(1) 로 접선 기울기, 음의 역수로 b, 다시 점 대입으로 c.
    미정계수를 순차적으로 확정하는 절차라 판단 분기는 없고, 수직 기울기의 부호(T-부호)만 함정이다.
    통찰 0 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1,-4) 대입 → a → f'(1) → b=-1/f'(1) → 점 대입으로 c → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/90-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 상수항과 접점 좌표를 바꿀 수 있다. 제약: b 가 정수로 떨어지려면 f'(접점)이 ±1 이어야 하고, 그렇지 않으면 답 abc 가 분수가 되므로 일차항 계수 a 를 그 조건에서 역산한다."
    creative: "(1) 법선 대신 접선의 x절편을 묻기(★2) (2) 「법선이 원점을 지난다」로 바꾸면 조건이 하나 더 생겨 ★3 (3) 곡선을 사차로 올리고 법선이 곡선과 다시 만나는 점을 묻기(★3~4)."
```

```yaml
- id: GN-CALC1-91-e3
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 곡선 y=x^2-3x 에 접하고 직선 y=3x+1 과 평행한 직선의 방정식.
    ⑵ 곡선 y=x^3+3x^2+2 에 접하고 직선 x+9y=3 에 수직인 직선의 방정식.
  category: "평행·수직에서 기울기 확정 → f'(t)=m 으로 접점 → 접선식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점을 모르는 첫 일반 문항이지만 예제 제목이 골조를 그대로 알려 주고, 「접점을 (t, f(t)) 로 놓고 f'(t)=m 을 푼다」는 공식화된 절차라 통찰로 세지 않았다.
    함정은 둘 — 수직에서 기울기를 -1/(-1/9)=9 로 뒤집는 부호(T-부호)와, ⑵ 처럼 f'(t)=m 이 이차방정식이면 접선이 둘이라 하나만 쓰면 감점(T-범위). Mₜ=2.
    통찰 0 · M_total 8 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "평행·수직에서 기울기 m 확정 → f'(t)=m 의 해 t 전부 → 각 접점에서 점-기울기 식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $y=3x-9$ ⑵ $y=9x+29$, $y=9x-3$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/91-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수와 기준 직선의 기울기를 바꿀 수 있다. 제약: ⑵ 처럼 접선이 둘이 되려면 f'(t)=m 의 판별식이 양수여야 하고, 접점 t 가 정수로 떨어져야 y절편이 깔끔하다. 수직 조건을 유지하려면 기준 직선의 기울기를 -1/m 형태의 분수로 둔다."
    creative: "(1) 「기울기가 최소인 접선」으로 바꾸면 f' 의 최솟값을 먼저 찾아야 해 ★3 (2) 두 접선 사이의 거리·y절편 차를 묻기(★3) (3) 「x축과 이루는 각이 45°」처럼 각으로 기울기를 감추면 91-165 골조로 바뀐다(★2)."
```

```yaml
- id: GN-CALC1-91-165
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=x^2 에 접하고 x축의 양의 방향과 이루는 각의 크기가 45° 인 직선의 방정식.
  category: "각 → 기울기 전환 → f'(t)=1 로 접점 → 접선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x축의 양의 방향과 이루는 각 45°」라는 기하적 표현을 기울기 1 이라는 대수적 값으로 옮겨야 f'(t)=m 절차가 시작된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(각 → 기울기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조 자체는 91-e3 과 같지만 기울기가 각으로 감춰져 있어 먼저 표현을 옮겨야 한다(I-RT d1) — 이 한 걸음을 넘으면 2t=1, t=1/2 로 끝난다.
    접점이 분수라 y절편 -1/4 까지 정리하는 계산이 남는다.
    통찰 1개(RT d1) · M_total 5 → 확인체크 출발점 ★2 유지(통찰이 있어 절차형 −1 규칙은 적용하지 않음).
    [분류 이슈] 45°→기울기 1 을 표현 전환으로 볼지 상식으로 볼지 갈린다. 상식으로 보면 통찰 0·M_total 5 라 ★1 후보.
  tier: star_2
  mechanism_primary: "각 45° → 기울기 1 → f'(t)=1 로 t=1/2 → 접점에서 점-기울기 식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=x-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/91-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 45°·135° 로, 곡선을 y=ax^2 나 y=x^2+bx 로 바꿀 수 있다. 제약: 미적분Ⅰ 범위에서 계산 가능한 각은 45°·135° 뿐이므로 기울기는 ±1 로 고정되고, 접점이 분수로 나오는 것을 감수하거나 이차 계수를 1/2 로 두어 정수로 맞춘다."
    creative: "(1) 각을 135° 로 바꿔 부호 함정을 넣기(★2 유지) (2) 곡선을 삼차로 올리면 접선이 둘이 되어 ★2~3 (3) 「이 접선과 x축·y축으로 둘러싸인 삼각형의 넓이」로 확장(★3)."
```

```yaml
- id: GN-CALC1-91-166
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=-2x^2-4x+3 에 접하고 두 점 (-1,5), (-3,-3) 을 지나는 직선과 평행한 직선의 방정식.
  category: "두 점으로 기울기 계산 → f'(t)=m → 접점 → 접선식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    91-e3 골조 앞에 「두 점의 기울기 = y 차 / x 차」 한 단계가 붙었을 뿐이다. 두 점 모두 x좌표가 음수라 분모 부호를 뒤집기 쉬운 것이 함정(T-부호).
    기울기 4 를 얻고 나면 -4t-4=4 로 t=-2, 접점 (-2,3) 에서 접선식을 쓰면 끝난다.
    통찰 0 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 점의 기울기 m 계산 → f'(t)=m 으로 t → 접점에서 점-기울기 식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y=4x+11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/91-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 곡선의 계수와 두 점의 좌표를 바꿀 수 있다. 제약: 두 점의 기울기가 정수여야 하고, 그 기울기로 f'(t)=m 을 풀 때 t 가 정수가 되도록 일차항 계수를 맞춘다. 두 점은 곡선 위 점이 아니어도 된다(직선의 기울기만 쓰인다)."
    creative: "(1) 「두 점을 지나는 직선에 수직」으로 바꾸면 음의 역수 단계가 추가돼 ★2 유지 (2) 두 점 중 하나를 미지수로 두고 접선이 존재할 조건을 묻기(★3) (3) 접선과 그 직선 사이의 거리를 묻기(★3)."
```

```yaml
- id: GN-CALC1-91-167
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=x^3-11x+2 에 접하고 직선 x-8y+3=0 에 수직인 직선의 방정식.
  category: "수직에서 기울기 -8 → f'(t)=-8 의 두 해 → 접선 두 개"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선을 y=x/8+3/8 로 고쳐 기울기 1/8 을 읽고 음의 역수 -8 을 얻는다(T-부호). 3t^2-11=-8 의 해가 t=±1 둘이라 접선도 둘이고, 한쪽만 쓰면 답이 반만 맞는다(T-범위) — 함정 2종.
    두 접점의 y좌표가 달라 y절편도 각각 계산해야 한다.
    통찰 0 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "직선을 기울기 꼴로 → 음의 역수 -8 → f'(t)=-8 의 두 해 → 접점마다 접선식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y=-8x+4$, $y=-8x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/91-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 곡선의 일차항 계수와 기준 직선의 기울기를 바꿀 수 있다. 제약: f'(t)=m 이 t^2=양수 꼴이 되어야 접선이 두 개 나오고, t 가 정수로 떨어지도록 (일차항 계수 + m)을 3의 배수이자 완전제곱의 3배로 둔다. 기준 직선은 일반형 ax+by+c=0 으로 주어 기울기를 한 번 더 읽게 한다."
    creative: "(1) 「접선이 두 개임을 보이고 두 접선의 y절편의 곱을 구하라」로 바꾸기(★3) (2) 기울기를 미지수 m 으로 두고 접선이 두 개일 조건을 묻기(I-BW ★3~4) (3) 두 접선의 접점을 잇는 선분의 중점을 묻기(대칭성 활용 ★3)."
```

```yaml
- id: GN-CALC1-92-e4
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (0,-4) 에서 곡선 y=x^2-2x 에 그은 접선의 방정식.
  category: "접점을 미지수로 → 접선식 → 지나는 점 대입 → 접점 확정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「점 (0,-4) 에서 그은 접선」을 「접점 t 에서의 접선이 (0,-4) 를 지난다」는 t 에 대한 방정식으로 옮겨야 한다 — 주어진 점은 접점이 아니다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원에서 골조가 처음으로 바뀌는 지점. 주어진 점이 곡선 위가 아니므로 f'(0) 을 기울기로 쓰면 안 되고(T-범위), 접점 (t, t^2-2t) 에서의 접선식을 먼저 세운 뒤 그 식이 (0,-4) 를 지난다는 조건으로 t 를 얻는다.
    t 에 대한 이차방정식이 나와 접선이 두 개이고 둘 다 답이다(T-범위) — 함정 2종.
    통찰 1개(EQV d2) · M_total 8 → 필수 예제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 (t, f(t)) → 접선 y=f'(t)(x-t)+f(t) → (0,-4) 대입 → t 의 이차방정식 → 접선 두 개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$y=-6x-4$, $y=2x-4$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/92-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 곡선의 계수와 외부 점의 좌표를 바꿀 수 있다. 제약: 외부 점이 곡선의 아래쪽(이차 계수가 양수일 때)에 있어야 접선이 두 개 생기고, t 의 이차방정식이 정수해를 갖도록 외부 점의 y좌표를 맞춘다. 외부 점을 y축 위에 두면 대입식이 짧아진다."
    creative: "(1) 외부 점을 곡선 위 점으로 바꾸면 90-e2 골조로 내려가 ★2 (2) 두 접선이 수직이 되도록 하는 외부 점의 자취를 묻기(I-BW 추가 ★4) (3) 두 접점과 외부 점이 이루는 삼각형의 넓이를 묻기(★3)."
```

```yaml
- id: GN-CALC1-92-168
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 점 (2,4) 에서 곡선 y=-x^2+2x+3 에 그은 접선의 방정식.
    ⑵ 점 (0,2) 에서 곡선 y=x^3-2x 에 그은 접선의 방정식.
  category: "접점 미지수 → 접선식 → 외부 점 대입 → 접점 확정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 점이 곡선 위가 아님을 먼저 확인하고(⑴ f(2)=3≠4) 「그 점을 지난다」를 접점 t 의 방정식으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    92-e4 와 같은 골조를 이차·삼차에서 한 번씩 반복한다. ⑴ 은 (2,4) 가 곡선 위처럼 보이지만 f(2)=3 이라 밖의 점이고, 이 확인을 건너뛰면 f'(2) 를 기울기로 써서 틀린다(T-범위).
    ⑵ 는 삼차라 t 의 방정식이 삼차가 되지만 중근으로 정리돼 접선은 하나뿐이다(T-경계) — 함정 2종.
    통찰 1개(EQV d2) · M_total 8 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 (t, f(t)) 의 접선식 → 주어진 점 대입 → t 의 방정식 → 해마다 접선"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ $y=4$, $y=-4x+12$ ⑵ $y=x+2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/92-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 계수와 외부 점의 좌표를 바꿀 수 있다. 제약: ⑴ 은 접선이 두 개, ⑵ 는 하나가 되도록 외부 점의 위치를 곡선의 오목·볼록 쪽에 맞춰 두어야 하고, t 의 방정식이 유리근을 갖도록 외부 점 좌표를 정수로 둔다. ⑴ 의 y=4 처럼 기울기 0 인 접선이 나오게 하려면 외부 점 y좌표를 꼭짓점 값보다 크게 둔다."
    creative: "(1) 외부 점을 미지수 (a,0) 으로 두고 접선이 두 개일 조건을 묻기(I-BW ★4) (2) ⑵ 에서 접선이 하나뿐인 이유를 설명하게 하기(중근 · ★3) (3) 두 접선이 이루는 각을 묻기(★3)."
```

```yaml
- id: GN-CALC1-92-169
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (1,-6) 에서 곡선 y=x^3-2 에 그은 접선이 점 (k,30) 을 지날 때 k 의 값.
  category: "외부 점으로 접점 확정 → 접선식 → 다른 점 대입"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「(1,-6) 에서 그은 접선」을 접점 t 의 접선식이 (1,-6) 을 지난다는 t 의 삼차방정식으로 옮긴 뒤 인수분해로 유일한 실근을 찾는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    92-e4 골조에 삼차방정식 처리와 마지막 대입이 더 붙는다. 접점 t 의 방정식이 삼차라 유리근 하나를 찾아 인수분해하고, 남은 이차식의 판별식이 음수임을 확인해야 접선이 하나임이 확정된다.
    그 접선을 구한 뒤에야 (k,30) 을 대입해 k 를 얻는 2단 구조라 단계 수가 많다(Mₛ=3).
    통찰 1개(EQV d2) · M_total 8 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 t 의 접선식 → (1,-6) 대입 → 삼차방정식 인수분해로 t 확정 → 접선식에 (k,30) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/92-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 상수항, 외부 점, 마지막 점의 y좌표를 바꿀 수 있다. 제약: 접점 t 의 삼차방정식이 작은 정수 유리근을 갖고 나머지 이차식의 판별식이 음수여야 접선이 하나로 확정된다. 마지막 점의 y좌표는 접선 위 x좌표가 정수가 되도록 맞춘다."
    creative: "(1) k 대신 접선과 곡선이 다시 만나는 점을 묻기(중근 인수분해 ★3) (2) 외부 점을 옮겨 접선이 세 개 생기게 하면 I-MI 가 추가돼 ★4 (3) 「접선이 지나는 점 (k,30) 이 곡선 위인지」를 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-92-170
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점 O 에서 곡선 y=(1/4)x^4+3 에 그은 접선의 접점을 P 라 할 때 선분 OP 의 길이.
  category: "원점 통과 조건으로 접점 확정 → 두 점 사이의 거리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「원점에서 그은 접선」을 접점 t 에서의 접선식이 원점을 지난다는 t 의 방정식으로 옮긴다"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선이 y축 대칭인 우함수라 접점이 ±t 로 쌍을 이루고 OP 길이가 같으므로 한쪽만 계산하면 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 접점과 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원점 대입이 사차항을 크게 지워 t^4 만 남는 것이 이 문항의 계산 포인트이고, 그 결과 t^2 가 바로 나와 접점의 y좌표도 즉시 정해진다.
    접점이 두 개지만 곡선이 우함수라 OP 는 하나뿐이다 — 이 대칭을 보지 못하면 두 경우를 따로 계산하게 된다.
    통찰 2개(EQV d2 · SYM d1) → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 (t, f(t)) 의 접선식 → 원점 대입 → t^4 확정 → 접점 좌표 → 원점과의 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/92-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차 계수와 상수항을 바꿀 수 있다. 제약: 원점 대입 뒤 t^4 이 양수 완전제곱이 되어야 접점 좌표가 무리수 한 겹으로 끝나고, 상수항을 바꾸면 접점의 y좌표와 OP 가 함께 바뀌므로 답이 깔끔한 무리수가 되도록 조정한다. 우함수 형태(짝수 차수만)를 유지해야 대칭 통찰이 살아 있다."
    creative: "(1) 원점을 다른 y축 위의 점으로 옮기기(대칭 유지 ★3) (2) 곡선에 x^3 항을 넣어 대칭을 깨면 두 접점을 따로 계산해야 해 ★3~4 (3) 두 접점과 원점이 이루는 삼각형의 넓이를 묻기(★3)."
```

```yaml
- id: GN-CALC1-93-e5
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 y=2x^3+ax+1 과 직선 y=7x-3 이 접할 때 상수 a 의 값.
  category: "접한다 → 함숫값 일치 ∧ 미분계수 일치 두 식 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「곡선과 직선이 접한다」를 접점 t 에서 두 함숫값이 같고 미분계수도 같다는 두 식으로 옮긴다 — 접점이 어디인지 주어져 있지 않다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 직선이 접할 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조가 또 한 번 바뀌는 지점. 「접한다」는 말뿐인 조건을 식 두 개로 번역해야 하고, 미지수도 a 와 접점 t 둘이라 연립이 필요하다.
    f'(t)=7 에서 a 를 t 로 표현해 함숫값 식에 대입하면 t 의 삼차항이 상쇄돼 t^3=1 로 정리되는 것이 계산의 요령이다.
    통찰 1개(EQV d2) · M_total 7 → 필수 예제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 t → f(t)=g(t) ∧ f'(t)=g'(t) → a 를 소거해 t 확정 → a 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/93-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수·상수항과 직선의 기울기·y절편을 바꿀 수 있다. 제약: 두 식에서 a 를 소거했을 때 t 에 대한 방정식이 유리근을 갖도록 직선의 y절편을 맞춰야 하고, 삼차 곡선에 x^2 항이 없어야 소거 뒤 식이 t^3 꼴로 깔끔하게 남는다."
    creative: "(1) a 대신 직선의 y절편을 미지수로 두기(★3 유지) (2) 「접하지 않고 서로 다른 세 점에서 만날 조건」으로 바꾸면 부등식·범위 판정이 추가돼 ★4 (3) 접점의 좌표까지 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-93-171
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=ax+2 가 곡선 y=x^3 에 접하도록 하는 상수 a 의 값.
  category: "접할 조건 두 식 → 접점 확정 → 기울기 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선이 곡선에 접한다」를 접점 t 에서의 함숫값 일치와 미분계수 일치 두 식으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 직선이 접할 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    93-e5 와 같은 골조를 가장 단순한 곡선 y=x^3 에서 반복한다. 3t^2=a 를 t^3=at+2 에 대입하면 t^3 이 -2 로 떨어져 접점이 바로 나온다.
    직선의 y절편 2 가 곡선을 위로 밀어 접점이 음수 쪽에 생기는 것이 답의 부호를 결정한다(T-부호).
    통찰 1개(EQV d2) · M_total 7 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 t → t^3=at+2 ∧ 3t^2=a → a 소거로 t → a=3t^2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/93-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 y절편과 곡선의 최고차 계수를 바꿀 수 있다. 제약: 소거 후 t^3 이 정수 세제곱수가 되어야 접점이 정수로 떨어지므로 y절편은 최고차 계수의 2배 꼴로 두는 것이 안전하다. y절편을 0 으로 두면 접점이 원점이 되어 문제가 무너진다."
    creative: "(1) 곡선을 y=x^3+bx 로 바꿔 미지수를 둘로 늘리기(★3 유지) (2) 「접하도록 하는 a 가 두 개일 조건」으로 바꾸면 I-MI 추가 ★4 (3) 접선이 곡선과 다시 만나는 점을 묻기(중근 인수분해 ★3)."
```

```yaml
- id: GN-CALC1-93-172
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=5x 가 곡선 y=x^3-ax+2 에 접할 때 접점의 x좌표를 t 라 할 때 a+t 의 값(a 는 상수).
  category: "접할 조건 두 식 → a, t 동시 확정 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선이 곡선에 접한다」를 접점 t 에서의 함숫값 일치와 미분계수 일치 두 식으로 옮긴 뒤 두 미지수 a, t 를 함께 푼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 직선이 접할 조건으로 미정계수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    93-e5·93-171 과 같은 두 식 골조인데, 답이 a 나 t 하나가 아니라 a+t 라 둘을 모두 확정해야 한다는 점만 다르다.
    3t^2-a=5 로 a 를 t 로 바꿔 함숫값 식에 넣으면 t 의 삼차항이 상쇄돼 t^3=1 이 되고, 그 뒤 a 를 되돌려 계산하는 순서가 강제된다.
    통찰 1개(EQV d2) · M_total 7 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "f'(t)=5 로 a 를 t 로 표현 → 함숫값 식에 대입해 t 확정 → a 역산 → a+t"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/93-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기와 곡선의 상수항을 바꿀 수 있다. 제약: a 를 소거한 뒤 t 의 방정식이 정수 근을 갖도록 상수항과 기울기를 함께 맞춰야 하고, 직선이 원점을 지나면 대입식이 짧아진다. 곡선에 x^2 항을 넣으면 소거 뒤 식이 이차로 남아 접점이 둘이 될 수 있다."
    creative: "(1) a+t 대신 at 나 접점의 y좌표를 묻기(★3 유지) (2) 직선을 y=5x+k 로 바꾸고 접하도록 하는 k 를 묻기(★3) (3) 「접하는 a 의 값이 두 개」가 되도록 곡선 차수를 올려 I-MI 를 넣기(★4)."
```

```yaml
- id: GN-CALC1-94-e6
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 곡선 y=x^2+ax+b, y=-x^3+c 가 점 (1,-2) 에서 접할 때
    ⑴ 상수 a, b, c ⑵ 그 점에서의 접선의 방정식.
  category: "접점이 주어진 두 곡선의 접할 조건 → 통과 2식 + 미분계수 일치 1식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 곡선이 한 점에서 접한다」를 그 점을 둘 다 지난다 ∧ 그 점에서의 미분계수가 같다는 세 식으로 옮긴다 — 접점이 좌표로 주어져 변환이 직접적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(접점이 주어진 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (1,-2) 가 주어져 있어 미지수가 a, b, c 뿐이고 식도 세 개가 바로 나온다 — 삼차 곡선 쪽 통과 조건에서 c 가 즉시, 미분계수 일치에서 a 가, 남은 통과 조건에서 b 가 순서대로 확정된다.
    ⑵ 는 확정된 미분계수를 점-기울기 식에 넣는 한 줄이라 추가 부담이 없다.
    통찰 1개이나 접점이 주어져 변환이 직접적(EQV d1) · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 곡선에 접점 대입 2식 + 접점에서의 미분계수 일치 1식 → a, b, c → 접선식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ $a=-5$, $b=2$, $c=-1$ ⑵ $y=-3x+1$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/94-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표와 두 곡선의 차수·최고차 계수를 바꿀 수 있다. 제약: 미지수 개수와 식 개수가 맞아야 하므로 미정계수는 정확히 셋(한 곡선에 둘, 다른 곡선에 하나)으로 두고, 접점 x좌표를 작은 정수로 잡아 a, b, c 가 정수로 떨어지게 한다."
    creative: "(1) 접점 좌표를 감추고 「한 점에서 접한다」만 주면 접점 미지수 골조로 올라가 ★3 (2) 「접한다」를 「수직으로 만난다」로 바꾸면 95-e7 골조(★2) (3) 두 곡선과 공통접선으로 둘러싸인 넓이를 묻는 적분 결합(I-XU ★4)."
```

```yaml
- id: GN-CALC1-94-173
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 y=x^3+ax, y=bx^2+c 가 점 (-1,0) 에서 공통인 접선을 가질 때 상수 a, b, c 에 대하여 abc.
  category: "접점이 주어진 공통접선 조건 → 통과 2식 + 미분계수 일치 1식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「그 점에서 공통인 접선을 가진다」를 두 곡선이 그 점을 지나고 그 점에서의 미분계수가 같다는 세 식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(접점이 주어진 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    94-e6 과 같은 골조이고 접점 (-1,0) 이 주어져 있어 세 식이 바로 나온다. 첫 곡선 통과 조건에서 a 가 즉시 정해지고, 미분계수 일치로 b, 둘째 곡선 통과 조건으로 c 가 따라온다.
    x=-1 대입이 반복돼 홀수·짝수 차수의 부호가 엇갈리는 것이 유일한 함정(T-부호).
    통찰 1개(EQV d1) · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(-1,0) 을 두 곡선에 대입 + 두 도함수의 값 일치 → a, b, c → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/94-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표와 두 곡선의 항 구성을 바꿀 수 있다. 제약: 미정계수가 셋이어야 식과 수가 맞고, 접점 y좌표를 0 으로 두면 통과 조건이 가장 단순해진다. abc 가 정수가 되도록 접점 x좌표는 ±1 이 안전하다."
    creative: "(1) abc 대신 공통접선의 방정식을 묻기(★2 유지) (2) 접점을 감추면 94-174 골조로 올라가 ★3 (3) 두 곡선이 접점 외에 다시 만나는지를 함께 묻기(인수분해 ★3)."
```

```yaml
- id: GN-CALC1-94-174
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 y=x^3-7x-4, y=2x^2 이 한 점에서 공통인 접선을 가질 때 그 공통접선의 방정식.
  category: "접점 미지수 → 함숫값·미분계수 일치 두 식 → 후보 검증 → 접선식"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점이 주어지지 않아 「한 점에서 공통인 접선」을 접점 t 에 대한 두 방정식(함숫값 일치·미분계수 일치)으로 옮겨야 한다"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미분계수 일치 식에서 나온 두 후보 t 를 함숫값 일치 식에 되넣어 검증해야 하고, 분수 후보 하나가 조건을 만족하지 않아 기각된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(접점 미지수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 식 중 차수가 낮은 미분계수 일치 식(이차)을 먼저 풀어 접점 후보 둘을 얻고, 그 후보를 함숫값 일치 식에 다시 넣는 순서가 사실상 유일한 길이다.
    분수 후보는 함숫값이 어긋나 기각되고 정수 후보만 살아남는다 — 검증을 건너뛰면 존재하지 않는 접선을 하나 더 쓰게 되므로 사후 검증이 풀이의 본질(I-VF).
    통찰 2개(EQV d2 · VF d2) · M_total 10 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
    [분류 이슈] 검증 기각까지 요구하는 구조와 분수 계산량을 보면 ★4 가 체감에 가깝다. 산식상 +1 한계라 ★3 으로 라벨하고 기록만 한다.
  tier: star_3
  mechanism_primary: "접점 t → f'(t)=g'(t) 의 두 근 → f(t)=g(t) 로 후보 검증·기각 → 살아남은 접점에서 접선식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$y=-4x-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/94-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 곡선의 일차항·상수항과 이차 곡선의 계수를 바꿀 수 있다. 제약: 미분계수 일치 식의 두 근 가운데 정확히 하나만 함숫값 일치를 만족해야 I-VF 구조가 유지되고, 살아남는 근은 정수·기각되는 근은 분수가 되도록 두면 검증 동기가 분명해진다. 두 근이 모두 통과하면 답이 둘이 되어 성격이 달라진다."
    creative: "(1) 두 근이 모두 통과하도록 계수를 조정해 공통접선 두 개를 구하게 하기(I-VF 대신 I-MI · ★3) (2) 「공통접선을 가질 조건」을 미정계수 a 로 묻기(★4) (3) 두 곡선과 공통접선으로 둘러싸인 도형의 넓이(적분 결합 I-XU ★4)."
```

```yaml
- id: GN-CALC1-94-175
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 y=x^3+ax+3, y=x^2+2 가 한 점에서 접할 때 상수 a 의 값.
  category: "접점 미지수 + 미정계수 → 두 식 연립 → a 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점이 주어지지 않아 「한 점에서 접한다」를 접점 t 의 함숫값 일치·미분계수 일치 두 식으로 옮기고, 미지수 a 와 t 를 함께 푼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(접점 미지수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    94-174 와 달리 미분계수 일치 식에 미지수 a 가 남아 후보를 먼저 뽑을 수 없다 — a 를 t 로 표현해 함숫값 식에 대입하는 소거 순서가 강제된다.
    대입하면 삼차항이 상쇄돼 t 가 하나로 정해지고 a 가 따라온다.
    통찰 1개(EQV d2) · M_total 7 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 t → 미분계수 일치로 a=a(t) → 함숫값 일치에 대입해 t 확정 → a 역산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/94-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 상수항과 이차 곡선의 계수를 바꿀 수 있다. 제약: a 를 소거한 뒤 t 의 방정식이 유리근을 갖고 남은 인수의 판별식이 음수여야 접점이 하나로 확정된다. 상수항 차이가 접점 위치를 결정하므로 둘을 함께 조정한다."
    creative: "(1) a 대신 이차 곡선의 상수항을 미지수로 두기(★3 유지) (2) 「접하도록 하는 a 가 모두 몇 개인가」로 바꾸면 I-MI 추가 ★4 (3) 접점에서의 공통접선까지 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-95-e7
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 곡선 y=x^3, y=ax^2+bx 가 점 (1,1) 에서 만나고 그 점에서의 두 접선이 서로 수직일 때 상수 a, b.
  category: "만난다 → 통과 1식 · 수직 → 미분계수 곱이 -1 인 1식 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 곡선의 접선이 그 점에서 수직」을 두 도함수 값의 곱이 -1 이라는 식으로 옮긴다 — 만나는 점이 주어져 변환이 직접적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 수직으로 만날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    94-e6 의 「미분계수가 같다」가 「미분계수의 곱이 -1」로 바뀐 것뿐이고, 교점 (1,1) 이 주어져 통과 조건 한 식이 바로 나온다.
    한쪽 곡선의 기울기가 3 으로 먼저 확정되므로 다른 쪽 기울기가 -1/3 으로 정해지고, 이후는 a, b 의 일차 연립이다. 분수 계수가 답까지 남는 것이 계산 부담.
    통찰 1개(EQV d1) · M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교점 대입으로 1식 → f'(1)·g'(1)=-1 로 1식 → a, b 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-\dfrac{4}{3}$, $b=\dfrac{7}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/95-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 좌표와 두 곡선의 차수를 바꿀 수 있다. 제약: 한쪽 기울기가 확정되면 다른 쪽은 그 음의 역수이므로 답이 분수가 되기 쉽다 — 정수 답을 원하면 확정되는 기울기를 ±1 로 만드는 교점 x좌표를 고른다. 교점은 반드시 두 곡선 위에 있어야 한다."
    creative: "(1) 「수직」을 「접한다」로 바꾸면 94-e6 골조(★2) (2) 교점을 감추고 「수직으로 만나는 점이 있을 조건」으로 바꾸면 접점 미지수라 ★3~4 (3) 두 접선과 x축이 이루는 삼각형의 넓이를 묻기(★3)."
```

```yaml
- id: GN-CALC1-95-176
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 y=-x^3+1, y=-x^2+ax+b 가 점 (-1,2) 에서 만나고 그 점에서의 두 접선이 서로 수직일 때 상수 a, b 에 대하여 9ab.
  category: "통과 1식 + 미분계수 곱이 -1 인 1식 → a, b → 9ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「그 점에서의 두 접선이 서로 수직」을 두 도함수 값의 곱이 -1 이라는 식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 수직으로 만날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    95-e7 과 같은 골조. 첫 곡선에는 미정계수가 없어 교점 통과가 자동으로 확인되고 기울기 -3 도 바로 나오므로, 실제로 푸는 것은 둘째 곡선의 a, b 뿐이다.
    x=-1 대입에서 부호가 여러 번 뒤집히고(T-부호) 답이 분수로 나와 9 를 곱해 정수로 만든 설계라 계산을 끝까지 정확히 해야 한다.
    통찰 1개(EQV d1) · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교점을 둘째 곡선에 대입 → (-3)·g'(-1)=-1 로 a → b 역산 → 9ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/95-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 좌표와 첫 곡선의 상수항을 바꿀 수 있다. 제약: 교점이 첫 곡선 위에 있어야 하므로 상수항으로 맞추고, 확정되는 기울기가 ±3 이면 답이 3분모 분수가 되므로 마지막에 9 를 곱하는 설계를 유지하거나 기울기를 ±1 로 바꿔 정수 답으로 만든다."
    creative: "(1) 9ab 대신 두 접선의 교점을 묻기(★3) (2) 「수직」을 「평행」으로 바꾸면 기울기 일치라 계산이 가벼워져 ★2 (3) 두 곡선이 교점 외에 몇 번 더 만나는지를 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-95-177
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 y=x^2-1, y=ax^2 (a≠0) 의 교점에서 두 곡선에 각각 그은 접선이 서로 수직일 때 상수 a 의 값.
  category: "교점을 좌표로 구하지 않고 x^2 를 매개로 소거 → 기울기 곱 -1"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점의 좌표를 a 로 일일이 구하지 않고 교점 조건을 x^2=1/(1-a) 형태로 남겨 두어 기울기 곱 식에 통째로 대입한다"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선이 모두 y축 대칭이라 교점이 ±x 쌍으로 나오고 기울기 곱 4ax^2 이 x 의 부호와 무관하므로 한쪽만 다루면 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 곡선이 수직으로 만날 조건(교점 미지수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점이 좌표로 주어지지 않은 유일한 수직 문항이다. 교점의 x 를 구하려 들면 근호가 붙지만, 기울기 곱 (2x)(2ax)=4ax^2 에 x^2 만 필요하다는 것을 보면 교점 조건을 x^2 꼴로 남겨 그대로 대입할 수 있다.
    a≠0 단서와 x^2>0 이어야 교점이 존재한다는 범위 조건이 함정 두 종(T-범위·T-부호)이고, 답이 음수로 나오는 것도 그 범위와 맞물린다.
    통찰 2개(EQV d2 · SYM d1) · M_total 8 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "교점 조건 x^2=1/(1-a) → 기울기 곱 4ax^2=-1 에 대입 → a 에 대한 일차식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/95-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 곡선의 상수항(-1)과 두 곡선의 이차 계수를 바꿀 수 있다. 제약: 교점이 존재하려면 x^2 이 양수로 나와야 하므로 두 이차 계수의 대소를 상수항 부호와 맞춰야 하고, a 에 대한 최종 식이 일차로 남도록 두 곡선 모두 x^2 항만 두는 형태를 유지한다."
    creative: "(1) 「수직」을 「접한다」로 바꾸면 교점이 중근이 되어 판별식 골조로 바뀐다(★3) (2) 이차 계수를 두 미지수로 늘려 조건을 하나 더 주기(★4) (3) 두 접선과 y축으로 둘러싸인 도형의 넓이를 묻기(★4)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 4 · ★2 14 · ★3 10 · ★4 0 · ★5 0
- 통찰형 15 · 절차형 13 · premium 0
- 통찰 유형 분포: I-EQV 14(d1 5 · d2 9) · I-SYM 2(d1) · I-RT 1(d1) · I-VF 1(d2). I-XU·I-PD·I-BW·I-MI·I-CON·I-SC 는 이 범위에 없음
- type_hint 상위: 「접선의 기울기 조건으로 미정계수 정하기」 3 · 「기울기가 주어진 접선의 방정식」 3 · 「곡선과 직선이 접할 조건으로 미정계수 정하기」 3 · 「곡선 위의 점에서의 접선·법선의 방정식」 2 · 「곡선 밖의 점에서 그은 접선의 방정식」 2 (그 밖에 2건짜리: 「두 곡선이 접할 조건(접점이 주어진 경우)」 「두 곡선이 접할 조건(접점 미지수)」 「두 곡선이 수직으로 만날 조건」)
- 대상층: 하위권 4 · 중하위권 9 · 중위권 12 · 중상위권 3 · 상위권 0
- 그림: 0문(이 범위 전 문항 figure 없음)
- 벤더 신호: 「개념원리 익히기」 3문(★1 출발) · 「필수」 7문 · 「확인체크」 18문(둘 다 ★2 출발). 「발전」·「특강」·기출 태그 없음, level 필드 전 문항 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-88-158 | 빈칸 채우기형이라 풀이 골조가 이미 노출돼 있다. 같은 골조의 일반 문항(90-e2)과 층이 달라 유형으로 묶을 때 구분이 필요 | ★1 |
| GN-CALC1-88-159 | 같은 이유. 접점을 미지수로 두는 91-e3 골조의 도입 변형이라 카탈로그에서 별도 유형으로 세울지 애매 | ★1 |
| GN-CALC1-91-165 | 「x축 양의 방향과 이루는 각 45°」→ 기울기 1 을 I-RT(표현 전환)로 볼지 상식으로 볼지 갈린다. 상식으로 보면 통찰 0·M_total 5 라 ★1 로 내려간다 | ★1 / ★2 |
| GN-CALC1-94-174 | 접점 후보 둘 중 하나를 조건 위배로 기각해야 하는 I-VF 구조 + 분수 계산 + M_total 10. 체감은 ★4 지만 출발점 ★2 에서 +1 한계라 ★3 으로 라벨 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 실제 축은 **접점을 얻는 방법**이므로, 카탈로그도 「접선의 방정식」 하나가 아니라 ⑴ 접점이 주어진 경우 ⑵ 기울기가 주어진 경우 ⑶ 곡선 밖의 점에서 그은 경우 ⑷ 접할 조건(곡선-직선 / 곡선-곡선) ⑸ 수직으로 만날 조건, 다섯 유형으로 세우는 것이 문항 분포와 맞는다(각 2~4문씩 고르게 분포).
- **통합해도 될 유형**: 「곡선 위의 점에서의 접선」과 「법선」은 기울기 한 줄만 다르므로 한 유형의 변형으로 둔다. 「곡선과 직선이 접할 조건」과 「두 곡선이 접할 조건」도 `함숫값 일치 ∧ 미분계수 일치` 라는 같은 두 식이라 상위 한 유형 아래 둘 수 있다.
- **따로 세워야 할 유형**: 「곡선 밖의 점에서 그은 접선」은 주어진 점이 접점이 아니라는 판단이 오답의 최대 원인이므로 독립 유형이어야 한다. 「접점이 주어진 경우 vs 접점 미지수」는 같은 조건 문장이라도 통찰 depth 가 1 과 2 로 갈리므로(94-e6 vs 94-175) base ★ 를 다르게 둘 근거가 된다.
- 빈칸 채우기형(88-158·88-159)은 별도 유형이 아니라 각 유형의 `도입 변형` 플래그로 처리하는 편이 낫다.
