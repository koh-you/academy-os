---
name: mechanism-데이터-GN-CALC1-13
description: 개념원리 미적분Ⅰ 13 함수의 극대와 극소(1/1 · 110~117쪽 29문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 13 함수의 극대와 극소
  unit_code: GN-CALC1-13
  part: "1/1"
  extract_range: "110~117쪽 · 110-212~117-236"
  total_problems: 29
  unit_total: 29
  judgment_protocol: |
    schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음.
    star 는 벤더 신호를 출발점으로 삼는다 — 개념원리 익히기 ★1 · 필수/발전 예제와 그 확인체크 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4.
    조정 규칙(이 파일 전체에 동일 적용): +1 = 통찰 2개 이상 · 또는 effective_depth 3 · 또는 (통찰 1개 이상 이면서 depth 2 이상 또는 M_total 8 이상) · 또는 (절차형이면서 M_total 8 이상).
    -1 = 통찰 0 이면서 M_total 5 이하. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 중 하나가 있을 때만 허용한다.
    insight_type 은 insights 유무로 정한다(빈 배열이면 절차형, 하나라도 있으면 통찰형). anchor_status 는 전 문항 null.
    effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). target_cohort 는 §3 대상층 중 이 문항을 주력으로 쓰는 층 1개.
    판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22). answer 는 전사본 값을 그대로 옮겼고 재검산하지 않았다.
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 13 함수의 극대와 극소 (1/1) 정독 데이터 (v1.0)

110~117쪽 29문항 전수. 구역은 「개념원리 익히기」 2문 · 「필수·발전 예제」 12문(필수 예제 4 + 확인체크 8) · 「연습문제 STEP 1」 8문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역 자체와 예제 태그(필수·발전·특강)·연습문제 level(STEP 1 / STEP 2 / 실력 UP)·기출 태그(평가원·교육청)로 들어오며, 이 단원은 「$f'(x)=0$ 의 근을 구해 증감표로 부호 변화를 확인한다」는 단일 절차가 전 구역에 반복되는 도입 단원이라 ★2 가 두텁고 ★5 가 없다.

이 범위에서 난도를 올리는 축은 세 개뿐이다. ① $f'(x)=0$ 의 근 중 **부호가 바뀌지 않는 근(중근·접점)을 극값 후보에서 기각**하는 것(I-VF), ② 도함수 그래프라는 **기하 표현을 증감 정보로 옮기는 것**(I-RT), ③ 극값 조건을 **미정계수 연립으로 역산**하되 조건이 겹치거나 사후 검증이 붙는 것(I-CON·I-EQV·I-VF). 실력 UP 2문은 여기에 도함수의 대칭(I-SYM)과 구간별 정의 함수의 미분가능 조건이 얹힌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-110-212
  page: 110
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    삼차함수 $f(x)=2x^3-6x^2+3$ 의 극값을 구하는 과정(도함수 · $f'(x)=0$ 의 근 · 증감표 · 극댓값/극솟값)의 빈칸 채우기.
  category: "도함수 → f'(x)=0 의 근 → 증감표 → 극값"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값(증감표 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    극값 판정 절차의 뼈대를 그대로 따라 쓰는 도입 문항. 도함수 계수·근·극값만 채우면 되고 부호 판정도 표에 이미 주어져 있다.
    통찰 0 · M_total 3 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=6x^2-12x → 근 x=0, 2 → 증감표 부호 → 극댓값 3, 극솟값 -5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$, $2$, $2$, $-5$, $2$, $-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/110-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차항·이차항 계수와 상수항(2x^3-6x^2+3 → x^3-3x^2+2, 2x^3-9x^2+5 등)을 바꿀 수 있음. 제약: f'(x)=0 의 두 근이 서로 다른 정수여야 증감표 칸 수가 유지되고, 극값이 정수로 떨어져야 빈칸 형식이 성립."
    creative: "(1) 최고차항 계수를 음수로 바꿔 증감표 부호를 뒤집기(★1 유지 · T-부호 추가) (2) 빈칸을 f'(x) 계수 대신 극값 위치로만 남기기(★1) (3) 증감표를 주고 f(x) 를 거꾸로 찾게 하면 역방향 사고가 들어가 ★3."
```

```yaml
- id: GN-CALC1-110-213
  page: 110
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    사차함수 $f(x)=-x^4+2x^2-3$ 의 극값을 구하는 과정(도함수 · 세 근 · 증감표 · 극댓값/극솟값)의 빈칸 채우기.
  category: "도함수 → 세 근 → 증감표 → 극댓값 2곳·극솟값 1곳"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값(증감표 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼차 도함수의 근이 세 개라 증감표 칸이 늘고 극댓값이 두 곳에서 같은 값으로 나온다는 것만 추가된다. 빈칸 형식이라 부호 판정 부담도 낮다.
    통찰 0 · M_total 4 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=-4x^3+4x=-4x(x+1)(x-1) → 근 -1, 0, 1 → 증감표 → 극댓값 -2(두 곳), 극솟값 -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$, $4$, $0$, $0$, $-$, $-3$, $0$, $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/110-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 상수항(-x^4+8x^2-3, -x^4+2x^2 등)을 바꿀 수 있음. 제약: 복이차식이라 f'(x)=0 의 세 근이 0 과 ±k 로 나와야 표 칸 수(5칸)가 유지되고, 최고차항이 음수여야 극댓값 2·극솟값 1 배치가 유지됨."
    creative: "(1) 최고차항을 양수로 바꿔 극소 2·극대 1 배치로 뒤집기(★1) (2) x^4-6x^2-8x 처럼 복이차가 아닌 사차로 바꾸면 도함수 인수분해가 필요해 ★2 (3) 극댓값이 두 곳에서 같은 이유(y축 대칭)를 묻는 서술로 바꾸면 I-SYM 이 들어가 ★2~3."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-111-e13
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 삼차함수 두 개($x^3-3x^2-9x+2$, $-x^3+6x^2-9x+3$)의 극값을 각각 구하기.
  category: "도함수 인수분해 → 증감표 → 극댓값·극솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 표준 절차를 처음 통째로 수행하는 필수 예제. ⑵는 최고차항이 음수라 증감 방향이 ⑴과 반대가 되는 T-부호 함정이 하나 있다.
    통찰 없이 절차만으로 끝나고 M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x) 인수분해 → 두 근 → 증감표 부호(최고차 부호 주의) → 근에서 f 값 = 극값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 극댓값: $7$, 극솟값: $-25$ ⑵ 극댓값: $3$, 극솟값: $-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/111-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차·상수 계수를 바꿀 수 있음. 제약: f'(x)=3x^2+bx+c 가 서로 다른 두 정수 근을 갖도록(판별식>0 · 근이 유리수) 계수를 잡아야 극값이 정수로 떨어짐."
    creative: "(1) 한 쪽을 f'(x)=0 이 중근인 함수로 바꿔 극값이 없는 사례를 넣기(I-VF 추가 · ★3) (2) 극값 대신 극점의 좌표를 묻기(★2 유지) (3) 두 함수의 극댓값을 비교하게 하면 계산 부담만 늘고 통찰은 그대로(★2)."
```

```yaml
- id: GN-CALC1-111-214
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 삼차함수 두 개($x^2(3-x)$, $2x^3+3x^2-12x-4$)의 극값을 각각 구하기.
  category: "전개 → 도함수 인수분해 → 증감표 → 극값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e13 의 확인 문제. ⑴은 곱 형태라 전개해서 $-x^3+3x^2$ 로 본 뒤 최고차항이 음수임을 반영해야 하고(T-부호), ⑵는 계수가 커져 인수분해 부담만 조금 늘었다.
    통찰 0 · M_total 6 → 필수 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱 형태 전개 → f'(x) 인수분해 → 증감표 → 극댓값·극솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 극댓값: $4$, 극솟값: $0$ ⑵ 극댓값: $16$, 극솟값: $-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/111-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 x^2(k-x) 에서 k 를, ⑵ 의 계수 조합을 바꿀 수 있음. 제약: ⑴ 은 x=0 이 항상 극값을 주는 구조(도함수가 x 를 인수로 가짐)이므로 k 만 바뀌고 골조는 불변. ⑵ 는 f'(x)=6x^2+6x-12 형태가 정수 근을 갖도록 계수를 묶어야 함."
    creative: "(1) x^2(3-x) 를 x^2(x-3)^2 같은 사차 곱으로 올리면 극값 3곳 · ★3 (2) 극값을 갖는 x 만 묻기(★1~2) (3) 그래프 개형을 그리게 하면 표현 전환(I-RT)이 붙어 ★3."
```

```yaml
- id: GN-CALC1-111-215
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=-2x^3+15x^2-24x-2$ 의 극댓값과 극솟값의 차 구하기.
  category: "도함수 근 → 증감표 → 두 극값 계산 → 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극댓값·극솟값의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극값 두 개를 모두 구해 빼는 한 단계가 붙었을 뿐 골조는 e13 과 같다. 최고차항이 음수라 작은 근이 극소, 큰 근이 극대가 되는 순서를 뒤집지 않는 것이 유일한 함정(T-부호).
    통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=-6(x-1)(x-4) → 증감표(최고차 음수) → f(4)-f(1) 이 아니라 극대-극소 순서 확인 → 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/111-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (-2, 15, -24, -2) 를 바꿀 수 있음. 제약: f'(x) 가 서로 다른 두 정수 근을 갖고 두 극값이 정수로 떨어져야 함. 차를 묻는 문항이라 상수항은 답에 영향을 주지 않으므로 자유롭게 바꿔도 됨(이 점이 변형 여유)."
    creative: "(1) 차 대신 합을 묻기 — 합은 상수항에 의존하므로 계산 구조가 달라짐(★2) (2) 극댓값과 극솟값의 절댓값이 같을 조건으로 바꾸면 I-EQV 가 붙어 ★3(115-226 과 동일 골조) (3) 계수를 문자로 두고 차가 주어진 값이 되게 하면 ★3(115-227)."
```

```yaml
- id: GN-CALC1-112-e14
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 사차함수 두 개($x^4-6x^2-8x+10$, $3x^4+4x^3-12x^2+15$)의 극값을 각각 구하기.
  category: "삼차 도함수 인수분해 → 부호 변화 있는 근만 채택 → 극값"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 의 f'(x)=4(x+1)^2(x-2) 에서 중근 x=-1 은 부호가 바뀌지 않아 극값 후보에서 기각 — 근 2개 중 1개만 답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사차함수의 극값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼차식 인수분해(조립제법)로 계산 부담이 한 단계 올라가고, ⑴ 에서 f'(x)=0 의 근이 두 개인데 중근 쪽은 극값이 아니라는 기각이 핵심이다(⑵는 근 3개 모두 극값).
    통찰 1개(VF d1) · M_total 7 → 필수 예제 출발점 ★2 유지(조정 조건 미달).
  tier: star_2
  mechanism_primary: "f'(x) 삼차 인수분해 → 각 근에서 부호 변화 확인 → 변화 없는 중근 기각 → 남은 근의 f 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 극솟값: $-14$ ⑵ 극댓값: $15$, 극솟값: $-17$, $10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/112-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 f'(x)=4(x-p)^2(x-q) 를 먼저 정해 역으로 f 를 만들면 중근 구조가 보장됨(p, q 정수). ⑵ 는 f'(x)=12x(x+2)(x-1) 형태의 세 정수 근을 유지하도록 계수를 묶어야 함. 제약: 사차 계수와 도함수 계수의 배수 관계(4·12)를 맞추지 않으면 계수가 분수로 무너짐."
    creative: "(1) 중근을 ⑵ 쪽으로 옮겨 어느 쪽에 극값이 하나뿐인지 스스로 찾게 하기(★3) (2) '극값의 개수'만 묻기(I-VF 유지 · ★2) (3) 최고차항을 음수로 바꿔 극대·극소 배치를 뒤집으면 T-부호가 추가돼 ★3."
```

```yaml
- id: GN-CALC1-112-216
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 사차함수 두 개($3x^4+16x^3+18x^2+5$, $-x^4+4x^3-13$)의 극값을 각각 구하기.
  category: "삼차 도함수 인수분해 → 부호 변화 있는 근만 채택 → 극값"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 f'(x)=-4x^2(x-3) 에서 x=0 은 중근이라 부호가 바뀌지 않아 기각 — 극값은 x=3 하나뿐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사차함수의 극값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e14 의 확인 문제로 중근 기각이 이번에는 ⑵ 쪽에 있다. ⑵ 는 최고차항이 음수라 부호 판정도 뒤집어야 해서 기각 판단이 조금 더 헷갈린다(T-부호).
    통찰 1개(VF d1) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x) 인수분해 → 중근 여부로 극값 후보 기각 → 남은 근의 f 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 극댓값: $10$, 극솟값: $-22$, $5$ ⑵ 극댓값: $14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/112-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 는 -x^4+kx^3 꼴을 유지하면 x=0 중근 구조가 자동으로 보존되고 k 만 바꾸면 됨. ⑴ 은 f'(x)=12x(x+1)(x+3) 의 세 근을 다른 정수 조합으로. 제약: 극값이 정수가 되도록 상수항을 맞출 것."
    creative: "(1) ⑵ 에서 '극값의 개수'와 '극값을 갖는 x' 를 함께 묻기(★2) (2) x^4 항 계수를 미지수로 두고 극값이 하나뿐일 조건을 묻기(I-BW 추가 · ★4) (3) 두 함수의 그래프 개형을 비교시키면 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-CALC1-112-217
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=-3x^4+8x^3+6x^2-24x$ 가 $x=a$ 에서 극솟값 $b$ 를 가질 때 $a+b$ 의 값.
  category: "삼차 도함수 인수분해 → 증감표에서 극소 위치 특정 → 값 대입"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값(극점·극값의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최고차항이 음수인 사차함수라 근 세 개 중 가운데 근 하나만 극소가 된다. 세 근을 모두 찾은 뒤 어느 것이 극소인지 증감표로 고르는 것이 전부이고 기각할 후보는 없다(부호 변화는 세 근 모두에서 일어남).
    통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=-12(x+1)(x-1)(x-2) → 증감표(최고차 음수) → 가운데 근이 극소 → a, b=f(a) → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/112-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(x)=-12(x-p)(x-q)(x-r) 의 세 정수 근을 먼저 정하고 역으로 f 를 만들면 안전. 제약: 최고차항이 음수여야 극소가 한 곳으로 유일해져 'x=a 에서 극솟값 b' 라는 표현이 성립함."
    creative: "(1) 최고차항을 양수로 바꾸면 극소가 두 곳이 되어 발문을 '모든 a 의 합' 으로 고쳐야 함(★3) (2) 극댓값을 묻도록 바꾸면 두 곳 중 큰 쪽을 골라야 해 I-VF 추가(★3) (3) 계수 하나를 문자로 두고 a+b 값을 주면 역방향 ★4."
```

```yaml
- id: GN-CALC1-113-e15
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $f(x)=-x^3+ax^2+bx+11$ 이 $x=2$ 에서 극솟값 $-21$ 일 때 상수 $a$, $b$. ⑵ $f(x)=x^3+ax^2+bx+c$ 가 $x=1$, $x=3$ 에서 극값을 갖고 극솟값이 $-2$ 일 때 극댓값.
  category: "극값 조건 → f'(극점)=0 · f(극점)=극값 연립 → 계수 결정 → 나머지 극값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정(삼차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극값 조건을 f'(p)=0 과 f(p)=(극값) 두 식으로 옮기는 표준 절차(스키마상 단순 미정계수 대입은 통찰로 인정하지 않는다). ⑵는 극점 두 개가 주어져 근과 계수의 관계로 a, b 를 바로 얻고, 최고차항이 양수이므로 큰 근이 극소임을 확정해야 한다(T-부호).
    통찰 0 · M_total 7 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "f'(극점)=0 · f(극점)=극값 연립 → a, b, c → 반대쪽 극점에서 f 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=12$, $b=-36$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/113-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 위치(2 / 1·3)와 극값(-21 / -2)을 바꿀 수 있음. 제약: ⑵ 처럼 극점 두 개를 줄 때는 근과 계수의 관계로 a=-3(p+q)/2·b=3pq 가 정수로 떨어지도록 p+q 가 짝수여야 함. ⑴ 은 최고차항 -1 을 유지하면 x=2 가 극소라는 조건이 a, b 의 부호를 강하게 묶음."
    creative: "(1) 극댓값과 극솟값을 동시에 주고 계수를 모두 결정하게 하기(조건 과잉 → I-VF 로 무모순 검증 · ★4) (2) '극값을 갖는다' 를 '극값을 갖지 않는다' 로 바꾸면 판별식 조건 문제로 성격이 바뀜(★3) (3) ⑵ 에서 극댓값 대신 f(0) 을 묻기(★2 유지)."
```

```yaml
- id: GN-CALC1-113-218
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=ax^3+bx^2+3bx+2\ (a>0)$ 가 $x=-1$ 에서 극대, $x=3$ 에서 극소이고 극댓값과 극솟값의 차가 $32$ 일 때 $ab$ 의 값.
  category: "근과 계수 관계 → 조건 중복 확인 → 극값 차 식으로 a 결정"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f'(x)=3ax^2+2bx+3b 에서 근의 합·곱 두 조건이 모두 b=-3a 하나로 겹친다는 것을 확인하고, 계수를 확정하려면 극값의 차 조건까지 결합해야 함을 알아야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정(삼차함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일차항 계수가 3b 로 묶여 있어 근의 합 조건과 근의 곱 조건이 같은 식 b=-3a 로 무너진다. 여기서 멈추지 않고 f(-1)-f(3) 을 a 에 대한 식으로 정리해야 a 가 결정되는 구조다.
    조건이 겹친다는 것을 확인하는 통찰(CON d2) · M_total 8 → 확인체크 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f'(-1)=f'(3)=0 → 두 조건이 b=-3a 로 겹침 → f(-1)-f(3)=32a=32 → a=1, b=-3 → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/113-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 -1, 3 과 차 32 를 바꿀 수 있음. 제약: 일차항 계수를 3b 로 두는 구조(근의 곱=b/a 와 근의 합이 같은 식이 되게 하는 커플링)를 유지해야 이 문항의 성격이 보존됨. 극값의 차는 (극점 간격)^3 에 비례하므로 간격을 바꾸면 32 도 함께 조정해야 a 가 정수."
    creative: "(1) a>0 조건을 빼고 a 의 부호에 따라 극대·극소가 뒤바뀌는 경우까지 따지게 하기(I-MI 추가 · ★4) (2) 차 대신 극댓값만 주면 상수항까지 얽혀 ★3 유지 (3) 일차항 계수를 3b 가 아닌 c 로 풀면 조건 중복이 사라져 평범한 연립(★2)."
```

```yaml
- id: GN-CALC1-113-219
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+ax^2-24x+b$ 가 $x=c$ 에서 극솟값 $2$, $x=-4$ 에서 극댓값 $d$ 일 때 $a+b+c+d$ 의 값.
  category: "f'(-4)=0 → a → 다른 근 c → f(c)=2 로 b → d=f(-4)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정(삼차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 네 개지만 결정 순서가 일직선이다. f'(-4)=0 으로 a, 인수분해로 c, 극솟값으로 b, 마지막에 d 를 계산하면 끝난다. 분기도 기각도 없다.
    통찰 0 · M_total 7 → ★2. 미지수 개수 때문에 체감은 무겁지만 절차 난도는 올라가지 않는다.
  tier: star_2
  mechanism_primary: "f'(-4)=0 → a=3 → f'(x)=3(x+4)(x-2) → c=2 → f(2)=2 로 b → d=f(-4) → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$145$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/113-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -24 와 극점 -4, 극솟값 2 를 바꿀 수 있음. 제약: f'(x)=3x^2+2ax-24 가 주어진 극점을 근으로 가지면 a 가 정수로 나오도록 -24 를 3·(근의 곱) 으로 맞출 것."
    creative: "(1) 극댓값 d 를 주고 일차항 계수를 묻는 역방향으로 뒤집기(★3) (2) 극점을 문자로만 주고 두 극점 사이 거리를 묻기(★3) (3) a+b+c+d 대신 f(x) 의 그래프가 x축과 만나는 점의 개수를 묻기(단원 결합 I-XU · ★4)."
```

```yaml
- id: GN-CALC1-114-e16
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 미분가능한 함수 $y=f(x)$ 의 도함수 $y=f'(x)$ 의 그래프가 주어질 때 $f(x)$ 가 극대가 되는 $x$, 극소가 되는 $x$ 구하기.
  category: "도함수 그래프의 부호 변화 → f 의 극대·극소 위치"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프(기하)에서 f'의 부호가 +에서 -로 바뀌는 곳이 극대, -에서 +로 바뀌는 곳이 극소라는 증감 정보로 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 그래프와 함수의 극값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식이 없고 그래프만 주어지므로 표현 추상도가 최고(Mₐ 3)지만 계산은 전혀 없다. 그래프가 축을 가로지르는 두 점에서 부호 변화 방향만 읽으면 된다.
    통찰 1개(RT d1) · M_total 6 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "f' 그래프의 x축 교점 → 좌우 부호 → +→- 는 극대, -→+ 는 극소"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=2$ ⑵ $x=-1$'
  answer_source: "본문 풀이"
  figure: crop:fig-114-e16.png
  latex: latex-bank/gn-calc1/items/114-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 교점 위치(-1, 2)만 바꿀 수 있고 그 외에는 도형 라벨이 고정이므로 수치 변형 여지가 작다. 제약: 그림을 다시 그리지 않는 한 교점 좌표와 답이 한 몸이라 숫자 변형은 그림 교체를 동반해야 함."
    creative: "(1) f' 그래프가 x축에 접하는 구간을 넣어 극값이 아닌 근을 섞기(I-VF 추가 · ★3) (2) f 의 그래프 개형을 그리게 하기(★3) (3) f'가 아니라 f'' 의 그래프를 주고 변곡을 묻는 확장(교육과정 밖)."
```

```yaml
- id: GN-CALC1-114-220
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    도함수 $y=f'(x)$ 의 그래프가 주어질 때, 구간 $(a,\,b)$ 에서 $f(x)$ 가 극대가 되는 $x$ 의 개수 $m$, 극소가 되는 $x$ 의 개수 $n$ 에 대하여 $m-n$ 의 값.
  category: "도함수 그래프의 교점 중 부호가 바뀌는 곳만 세기"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호 변화를 f 의 극대·극소로 옮기는 표현 전환"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x축에 접하기만 하고 부호가 바뀌지 않는 교점을 극값 후보에서 기각 — 교점 개수와 극값 개수가 다르다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도함수의 그래프와 극값의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프가 축과 만나는 점이 여럿이고 그중 하나는 접점이라, 교점을 세는 것이 아니라 부호가 바뀌는 점만 세야 한다는 기각 판단이 문항의 전부다(T-경계·T-부호).
    통찰 2개(RT d1 + VF d2) · M_total 8 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f' 그래프의 교점 나열 → 접점(부호 불변) 기각 → 극대 개수 m · 극소 개수 n → m-n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: crop:fig-114-220.png
  latex: latex-bank/gn-calc1/items/114-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 개수와 교차점 개수를 바꾸면 m-n 이 달라지지만 그림을 새로 그려야 하므로 숫자만의 변형은 불가. 제약: 구간 양 끝 a, b 는 극값 판정에서 제외되도록 열린구간으로 유지할 것."
    creative: "(1) m+n(극값의 총 개수)을 묻기(★3 유지) (2) 극값을 갖는 x 의 합을 묻기(116-228 골조 · ★3) (3) f 의 그래프 개형을 고르는 5지선다로 바꾸면 I-RT 깊이가 올라가 ★4."
```

```yaml
- id: GN-CALC1-114-221
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=2x^3+ax^2+bx+c$ 의 도함수 그래프(축과 $-2$, $1$ 에서 만나는 포물선)가 주어지고 $f(x)$ 의 극솟값이 $-12$ 일 때 $f(-1)$ 의 값.
  category: "그래프의 두 근 → f'의 계수 비교로 a, b → 극솟값으로 c → f(-1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 x절편 -2, 1 을 f'(x)=6x^2+2ax+b 의 두 근으로 옮겨 근과 계수의 관계로 a, b 를 얻는 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 그래프로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프가 주는 정보는 f'의 두 근뿐이고, 나머지는 근과 계수의 관계 → 극솟값 → 상수항 순서의 표준 연립이다. 위로 볼록이 아닌 아래로 볼록 포물선이므로 큰 근 x=1 이 극소임을 확정해야 한다.
    f'(x) 의 계수가 6과 2a 라 근의 합을 -a/3 로 옮기는 지점이 T-표기 함정. 통찰 1개(RT d1) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "그래프 근 -2, 1 → f'(x)=6(x+2)(x-1) → a=3, b=-12 → f(1)=-12 로 c → f(-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: crop:fig-114-221.png
  latex: latex-bank/gn-calc1/items/114-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수 2 와 극솟값 -12, 묻는 점 x=-1 을 바꿀 수 있음(그래프의 절편은 그림 고정). 제약: f'(x)=6(x+2)(x-1) 에서 a, b 가 정수로 나오려면 최고차항 계수가 3의 배수일 때 안전함."
    creative: "(1) 극댓값을 주고 극솟값을 묻기(★2 유지) (2) 극댓값과 극솟값의 차를 묻게 하면 상수항이 소거돼 c 가 필요 없어짐(★2) (3) 그래프를 f'가 아닌 f 로 주고 f' 의 개형을 고르게 하면 역방향 I-RT · ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-115-222
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=-2x^3-6x^2+9$ 가 $x=a$ 에서 극솟값 $b$ 를 가질 때 $a+b$ 의 값.
  category: "도함수 근 → 증감표에서 극소 위치 → 값 대입 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값(극점·극값의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최고차항이 음수라 작은 근 x=-2 가 극소가 된다는 부호 판정(T-부호) 하나가 전부다. 나머지는 f(-2) 대입과 덧셈.
    통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x)=-6x(x+2) → 증감표(최고차 음수) → x=-2 가 극소 → b=f(-2) → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (-2, -6, 9) 를 바꿀 수 있음. 제약: f'(x)=0 이 서로 다른 두 정수 근을 갖고 극솟값이 정수가 되도록 상수항을 맞출 것. 최고차항 부호를 유지해야 '극소가 왼쪽 근' 이라는 함정이 살아 있음."
    creative: "(1) 극댓값 쪽을 묻기(함정이 사라져 ★1~2) (2) a+b 대신 ab 를 묻기(★2 유지) (3) 상수항을 문자로 두고 극댓값이 0 이 되게 하면 역방향 ★3."
```

```yaml
- id: GN-CALC1-115-223
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=-x^4+4x^3+2x^2-12x+3$ 의 극댓값 $M$, 극솟값 $m$ 에 대하여 $M-m$ 의 값.
  category: "삼차 도함수 인수분해 → 극대 2곳·극소 1곳 → 차"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극댓값·극솟값의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-4(x+1)(x-1)(x-3) 으로 인수분해하는 계산이 이 문항의 무게 중심이다. 최고차항이 음수라 극대가 두 곳(x=-1, 3), 극소가 한 곳(x=1)이고 두 극댓값이 같은 값으로 나오므로 M 이 하나로 정해진다.
    통찰 0 · M_total 7 → ★2. 두 극댓값이 같다는 것은 풀이에 필수는 아니어서 통찰로 세지 않았다.
  tier: star_2
  mechanism_primary: "f'(x) 삼차 인수분해 → 세 근 · 증감표(최고차 음수) → M=f(-1)=f(3), m=f(1) → M-m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(x)=-4(x-p)(x-q)(x-r) 의 세 정수 근을 먼저 정하고 f 를 역으로 만들면 안전. 제약: 세 근이 가운데를 중심으로 대칭이면 두 극댓값이 같아져 M 이 유일해지고, 대칭을 깨면 'M 은 어느 쪽인가' 를 따져야 해 성격이 달라짐."
    creative: "(1) 세 근의 대칭을 깨서 두 극댓값이 다르게 만들면 큰 쪽을 골라야 해 I-VF 추가 · ★3 (2) M-m 대신 M+m 을 묻기(상수항이 살아나 계산만 증가 · ★2) (3) 두 극댓값이 같은 이유를 묻는 서술로 바꾸면 I-SYM · ★3."
```

```yaml
- id: GN-CALC1-115-224
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^4+ax^2+b$ 가 $x=1$ 에서 극소이고 극댓값이 $4$ 일 때 $a+b$ 의 값.
  category: "f'(1)=0 → a → 극대 위치 x=0 → f(0)=b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정(사차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    복이차식이라 f'(x)=2x(2x^2+a) 이고 f'(1)=0 으로 a 가 즉시 나온다. 극대는 x=0 한 곳뿐이므로 극댓값 조건이 곧 f(0)=b 다.
    통찰 0 · M_total 7 → STEP 1 ★2. 평가원 기출 태그가 있으나 통찰이 붙지 않아 +0.
  tier: star_2
  mechanism_primary: "f'(1)=0 → a=-2 → f'(x)=4x(x-1)(x+1) → 극대는 x=0 → b=4 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극소 위치 x=1 과 극댓값 4 를 바꿀 수 있음(x=p 극소 → a=-2p^2). 제약: a<0 이어야 극소가 두 곳·극대가 한 곳인 W 개형이 유지됨. a>0 이면 극값이 x=0 하나뿐이라 발문이 성립하지 않음."
    creative: "(1) a 의 부호에 따라 극값의 개수가 달라지는 경우를 묻기(I-MI · ★4) (2) 극솟값을 주고 극댓값을 묻기(★2 유지) (3) y축 대칭이라 극소가 x=±1 두 곳임을 함께 묻게 하면 I-SYM · ★3."
```

```yaml
- id: GN-CALC1-115-225
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+ax^2+bx+100$ 이 $x=-6$ 에서 극값을 갖고 점 $(-3,\,f(-3))$ 에서의 접선의 기울기가 $9$ 일 때 $a+b$ 의 값.
  category: "f'(-6)=0 · f'(-3)=9 연립 → a, b"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값·접선 기울기 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 모두 f'의 값으로 번역된다(극값 → f'(-6)=0, 접선 기울기 → f'(-3)=9). 미분계수의 기하적 의미는 이 단원 이전에 이미 표준 절차로 굳은 것이라 통찰로 세지 않았다.
    통찰 0 · M_total 6 → ★2. 상수항 100 은 답에 관여하지 않는 장식이다.
  tier: star_2
  mechanism_primary: "f'(-6)=0, f'(-3)=9 두 일차식 연립 → a, b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$87$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 -6, 접점 -3, 기울기 9 를 바꿀 수 있음. 제약: 두 식 3p^2+2ap+b=0 과 3q^2+2aq+b=k 의 차에서 a 가 정수로 떨어지도록 p-q 와 k 를 맞출 것. 상수항은 답과 무관하므로 자유."
    creative: "(1) 기울기 대신 접선의 방정식을 통째로 주면 조건이 하나 더 생겨 c 까지 결정(116-232 골조 · ★3) (2) '극값을 갖는다' 를 '극값을 갖지 않는다' 로 바꾸면 판별식 부등식 문제(★3) (3) 접선이 x축과 만나는 점을 묻는 결합(★3)."
```

```yaml
- id: GN-CALC1-115-226
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+3x^2-9x+a$ 의 극댓값과 극솟값의 절댓값이 같을 때 상수 $a$ 의 값.
  category: "절댓값이 같다 → 두 극값의 합이 0 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극댓값>극솟값 이므로 두 값이 같을 수 없고, '절댓값이 같다' 는 곧 '부호가 반대이고 합이 0' 이라는 동치 조건으로 바꿔야 식이 선다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극댓값·극솟값의 관계식으로 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극값을 구하는 부분은 ★2 수준이지만, 절댓값 조건을 그대로 두면 식을 세울 수 없다. 극댓값과 극솟값은 항상 다르므로 |M|=|m| 은 M=-m 뿐이라는 동치 변환이 문항의 핵심이다.
    통찰 1개(EQV d2) · M_total 7 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f'(x)=3(x+3)(x-1) → 극댓값 f(-3), 극솟값 f(1) → |M|=|m| ⟺ M+m=0 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차항 계수를 바꿔 극점을 옮길 수 있음(상수항 a 가 답이 되는 구조는 유지). 제약: 두 극값의 합이 2a+(상수) 형태라 a 가 유리수로 떨어지려면 극점에서의 나머지 항 합이 짝수일 것."
    creative: "(1) '극댓값과 극솟값의 곱이 0' 으로 바꾸면 둘 중 하나가 0 인 두 경우로 갈려 I-MI · ★4 (2) 'x축과 서로 다른 세 점에서 만난다' 로 바꾸면 극댓값·극솟값의 곱<0 조건(단원 결합 · ★4) (3) 절댓값 조건을 부등식으로 주면 범위 문제(★4)."
```

```yaml
- id: GN-CALC1-115-227
  page: 115
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3-\dfrac{3}{2}ax^2-6a^2x$ 의 극댓값과 극솟값의 차가 $\dfrac{1}{2}$ 일 때 양수 $a$ 의 값.
  category: "문자 계수 도함수 인수분해 → 두 극값을 a 의 식으로 → 차 방정식"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "문자 계수 삼차함수의 극값 차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=3(x-2a)(x+a) 로 두 극점이 -a, 2a 이고 a>0 이라는 단서로 어느 쪽이 극대인지 확정한다(T-부호). 이후 f(-a), f(2a) 를 모두 a^3 항으로 정리해야 해서 전 과정이 문자 계산이다.
    통찰은 없지만 M_total 8(문자 계수 다단계) → 절차형 M_total 8 이상 규칙으로 STEP 1 ★2 에서 +1 → ★3.
    [분류 이슈] 벤더 STEP 1 신호(★2)와 1단 차. 계산 마찰로 올라간 ★ 라 질 신호로는 약함.
  tier: star_3
  mechanism_primary: "f'(x)=3(x-2a)(x+a) → a>0 이므로 x=-a 극대, x=2a 극소 → f(-a)-f(2a)=(27/2)a^3 → a"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/115-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차의 값 1/2 과 계수 3/2, -6 을 바꿀 수 있음. 제약: 극값의 차가 a^3 에 비례하므로 주어진 차가 (계수)·(세제곱수) 꼴이어야 a 가 유리수. a>0 조건을 빼면 극대·극소가 뒤바뀌어 답이 갈림."
    creative: "(1) a>0 을 빼고 모든 a 를 구하게 하면 부호 분기 I-MI · ★4 (2) 차 대신 극댓값과 극솟값의 곱을 주면 a^6 방정식이 되어 계산만 무거워짐(질 저하 · 권장 안 함) (3) 두 극점 사이의 거리를 주고 a 를 묻기(★2 로 하강)."
```

```yaml
- id: GN-CALC1-116-228
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    도함수 $y=f'(x)$ 의 그래프가 주어질 때, 구간 $(-5,\,5)$ 에서 극대가 되는 모든 $x$ 의 합 $\alpha$, 극소가 되는 모든 $x$ 의 합 $\beta$ 에 대하여 $\alpha-\beta$ 의 값.
  category: "도함수 그래프의 교점 중 부호 변화 있는 곳만 골라 합"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호 변화를 f 의 극대·극소 위치로 옮기는 표현 전환"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "축에 접하기만 하는 교점(부호 불변)을 극값 후보에서 기각하고 남은 x 만 더해야 함 — 교점이 많아 누락·중복이 쉬움"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도함수의 그래프와 극값을 갖는 x의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    114-220 과 같은 골조인데 교점이 훨씬 많고 접점도 여러 개라 하나라도 잘못 세면 합이 어긋난다. 열린구간 끝(-5, 5)을 후보에서 빼는 것도 함정(T-범위·T-경계).
    통찰 2개(RT d1 + VF d2) · M_total 9 → STEP 1 ★2 에서 +1 → ★3.
    [분류 이슈] 통찰 2 + M_total 9 라 ★4 후보이기도 하나 벤더 STEP 1 과 2단 차가 되어 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "f' 그래프 교점 전부 나열 → 접점 기각 · 구간 끝 제외 → 극대 x 합 α, 극소 x 합 β → α-β"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: crop:fig-116-228.png
  latex: latex-bank/gn-calc1/items/116-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 고정이라 수치 변형은 구간 (-5, 5) 를 좁히는 정도만 가능하고, 이때 포함되는 교점이 달라져 답이 바뀜. 제약: 구간 끝이 교점과 겹치지 않게 잡아야 경계 논쟁이 생기지 않음."
    creative: "(1) α+β 나 극값의 개수를 묻기(★3 유지) (2) f(x) 의 최댓값 위치를 묻기(구간 끝까지 비교해야 해 I-VF 강화 · ★4) (3) 접점이 있는 구간에서 f 가 증가인지 감소인지 묻는 보기형(117-234 골조 · ★3)."
```

```yaml
- id: GN-CALC1-116-229
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+ax^2+bx+c$ 의 도함수 그래프(축과 $0$, $2$ 에서 만나는 포물선)가 주어지고 극댓값이 $5$ 일 때 극솟값.
  category: "그래프의 두 근 → a, b → 극댓값으로 c → 극솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 x절편 0, 2 를 f'(x)=3x^2+2ax+b 의 두 근으로 옮겨 계수를 결정하는 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 그래프로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    114-221 과 같은 골조이고 근이 0 을 포함해 b=0 이 바로 나와 오히려 더 가볍다. 최고차항이 양수이므로 작은 근 x=0 이 극대, 큰 근 x=2 가 극소다.
    통찰 1개(RT d1) · M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프 근 0, 2 → f'(x)=3x(x-2) → a=-3, b=0 → f(0)=c=5 → 극솟값 f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: crop:fig-116-229.png
  latex: latex-bank/gn-calc1/items/116-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극댓값 5 를 바꿔도 극솟값이 같은 폭(극값의 차는 상수항과 무관)으로 따라 움직임. 제약: 그래프 절편이 고정이라 a, b 는 불변이고 c 만 움직이는 구조. 절편을 바꾸려면 그림을 새로 그려야 함."
    creative: "(1) 극댓값 대신 f(1) 을 주기(★2 유지) (2) 극댓값과 극솟값의 차만 묻기 — c 가 필요 없어져 ★2 로 더 가벼워짐 (3) 그래프를 접하는 포물선으로 바꾸면 극값이 없어져 판정 문제(I-VF · ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-116-230
  page: 116
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\dfrac{3}{4}x^4-6x^2$ 의 그래프에서 극대 또는 극소가 되는 세 점을 꼭짓점으로 하는 삼각형의 넓이.
  category: "극점 세 개의 좌표 → 밑변·높이 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극값(수)을 좌표평면 위의 세 점으로 옮겨 도형 문제로 바꾸는 전환 — 발문이 삼각형을 지목하므로 전환 부담은 낮음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극점으로 만든 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극값 계산 자체는 복이차식이라 가볍고(극대 (0, 0), 극소 (±2, -12)), 세 점이 y축 대칭이라 밑변 4·높이 12 가 바로 읽힌다.
    통찰 1개(RT d1) · M_total 5 → STEP 2 출발점 ★3 유지(통찰이 있어 -1 조건에는 걸리지 않음).
  tier: star_3
  mechanism_primary: "f'(x)=3x(x^2-4) → 극점 (0,0), (±2,-12) → 밑변 4 · 높이 12 → 넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/116-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3/4 과 -6 을 바꿀 수 있음. 제약: 복이차식이어야 세 극점이 y축 대칭인 이등변삼각형이 되고 넓이가 간단히 나옴. 극점의 x 좌표가 정수가 되도록 두 계수의 비를 맞출 것."
    creative: "(1) 삼각형이 정삼각형이 될 조건을 묻기(문자 계수 + 역방향 · ★4) (2) 세 점을 지나는 원이나 외접원 반지름을 묻는 단원 결합(I-XU · ★4) (3) 복이차가 아닌 사차로 바꾸면 세 점이 비대칭이 되어 넓이 계산에 좌표 공식이 필요(★4)."
```

```yaml
- id: GN-CALC1-116-231
  page: 116
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^3-3ax^2+3(a^2-1)x$ 의 극댓값이 $4$ 이고 $f(-2)>0$ 일 때 $f(-1)$ 의 값. 5지선다.
  category: "도함수 완전제곱 → 극점 a±1 → 극댓값 방정식의 두 해 → 부등식으로 기각"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f'(x)=3{(x-a)^2-1} 로 완전제곱 정리하면 극점이 문자 a 에 대해 a-1, a+1 로 곧장 나옴"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극댓값 조건에서 나온 a 의 두 후보 중 f(-2)>0 을 만족하지 않는 쪽을 기각해야 답이 하나로 정해짐 — 검증을 건너뛰면 틀린 f(-1) 에 도달함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "문자 계수 삼차함수의 극값과 조건 검증"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    문자 계수 상태로 극댓값을 a 의 삼차식으로 만든 뒤 그 방정식을 풀어야 하므로 계산이 무겁고, 그 결과가 두 개라 부등식 조건이 사후 필터로 작동한다.
    f(-2)>0 이라는 조건이 장식이 아니라 기각 장치라는 것을 알아채는 것이 변별점이다. 통찰 2개(EQV d1 + VF d2) · M_total 9 → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "f'(x)=3{(x-a)^2-1} → 극대 x=a-1 → f(a-1)=4 의 해 a 두 개 → f(-2)>0 으로 하나 기각 → f(-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/116-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3(a^2-1) 의 -1(극점 간격 2를 만드는 수)과 극댓값 4, 검증 부등식 f(-2)>0 을 바꿀 수 있음. 제약: 극댓값 방정식이 정수해를 갖고 그 해가 두 개 이상이어야 기각 구조가 살아 있음. 검증 조건은 두 후보를 실제로 갈라놓는 점에서 잡을 것."
    creative: "(1) 검증 조건을 f(-2)<0 으로 뒤집어 다른 후보가 살아남게 하기(★4 유지) (2) 극댓값 대신 극댓값과 극솟값의 차를 주면 a 가 하나로 정해져 기각이 사라짐(★3 으로 하강) (3) f(-1) 대신 f 의 그래프와 x축의 교점 개수를 묻는 결합(I-XU · ★5 후보)."
```

```yaml
- id: GN-CALC1-116-232
  page: 116
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+ax^2+bx+c$ 의 점 $(1,\,f(1))$ 에서의 접선이 $y=6x-1$ 이고 $x=-1$ 에서 극대일 때 $f(3)$ 의 값.
  category: "접선 → f(1)·f'(1) 두 조건 · 극대 → f'(-1)=0 → 계수 연립"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 방정식 하나가 f'(1)=6 과 f(1)=5 라는 두 조건으로 분해된다는 동치 변환 — 미지수 3개를 채우는 세 식이 여기서 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극값·접선 조건으로 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수 세 개에 조건도 세 개(접점의 함숫값·접선의 기울기·극점)로 정확히 맞아떨어지는 연립이다. 접선 한 줄이 두 조건이라는 점만 놓치지 않으면 뒤는 기계적이다.
    통찰 1개(EQV d1) · M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "f(1)=5, f'(1)=6, f'(-1)=0 연립 → a, b, c → f(3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$43$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/116-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=1, 접선 y=6x-1, 극점 x=-1, 묻는 점 x=3 을 바꿀 수 있음. 제약: f'(x)=3x^2+2ax+b 의 연립에서 a, b 가 유리수로 떨어지려면 접점과 극점을 대칭 위치로 잡지 말 것(대칭이면 두 식이 겹쳐 결정 불능)."
    creative: "(1) '극대' 를 '극값' 으로만 주면 극대·극소 어느 쪽인지 확인하는 I-VF 가 추가(★4) (2) 접선이 원점을 지난다는 조건으로 바꾸면 접점 자체가 미지수가 되어 ★4 (3) f(3) 대신 극댓값을 묻기(★3 유지)."
```

```yaml
- id: GN-CALC1-117-233
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    삼차함수 $f(x)$ 가 $x=1$ 에서 극솟값 $-3$ 을 갖고 $\lim_{x\to 0}\dfrac{f(x)}{x}=-2$ 일 때 $f(-1)$ 의 값.
  category: "극한 조건 → f(0)=0 · f'(0)=-2 → 극값 조건과 연립 → 삼차함수 결정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 유한하므로 f(0)=0 이고, 그때 그 극한값 자체가 미분계수 f'(0)=-2 라는 두 조건으로 바꿔야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건과 극값으로 삼차함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    함수식이 주어지지 않고 '삼차함수' 라는 추상만 있어 Mₐ 가 3 이다. 핵심은 극한 조건 한 줄을 f(0)=0 과 f'(0)=-2 두 개로 분해하는 동치 변환이고, 나머지는 극값 조건 두 식과 함께 푸는 연립이다.
    통찰 1개(EQV d2) · M_total 9 → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "극한 유한 → f(0)=0 → 그 극한이 f'(0)=-2 → f'(1)=0, f(1)=-3 과 연립 → f(x) 결정 → f(-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/117-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 x=1, 극솟값 -3, 극한값 -2, 묻는 점 x=-1 을 바꿀 수 있음. 제약: 최고차항 계수가 미지수이므로 조건 네 개(f(0), f'(0), f'(1), f(1))가 모두 필요하고, 연립 결과 계수가 정수로 떨어지도록 극한값과 극솟값을 맞출 것."
    creative: "(1) 극한의 분모를 x^2 로 바꾸면 f(0)=f'(0)=0 이 되어 조건 구조가 달라짐(★4 유지) (2) 극솟값 대신 극댓값을 주면 어느 근이 극대인지 판정이 추가돼 I-VF · ★4 (3) 삼차함수를 사차함수로 바꾸면 조건이 하나 더 필요해 ★5 후보."
```

```yaml
- id: GN-CALC1-117-234
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    도함수 $y=f'(x)$ 의 그래프가 주어질 때, 구간에서의 증가·감소와 극대 여부·극값의 개수에 대한 보기 ㄱ~ㄹ 중 옳은 것 고르기.
  category: "도함수 그래프의 부호 → 증감·극값 판정 네 명제 검증"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호 구간을 f 의 증가·감소 구간으로, 부호가 바뀌는 교점을 f 의 극값으로 옮기는 전환 — 네 명제를 각각 이 기준으로 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 그래프와 증가·감소·극값 판정(보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ·ㄴ은 f'의 부호를 반대로 읽었는지 묻고, ㄷ은 'f'가 극대인 점' 을 'f 가 극대인 점' 으로 오인하는 전형적 혼동을 찌른다(f'(1)>0 이라 x=1 은 극값이 아니다).
    ㄹ만 옳다는 결론에 이르려면 네 명제를 전부 같은 기준으로 판정해야 한다. 통찰 1개(RT d1) · M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "f' 그래프의 부호 구간 확정 → ㄱㄴ은 증감 방향, ㄷ은 f'의 극점과 f 의 극점 구별, ㄹ은 부호 변화 교점 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄹ"
  answer_source: "답지"
  figure: crop:fig-117-234.png
  latex: latex-bank/gn-calc1/items/117-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림이 고정이라 보기의 구간 수치만 바꿀 수 있고, 바꾸면 참·거짓이 뒤집히므로 답 조합이 달라짐. 제약: ㄷ 같은 오인 유도 명제는 f'(x)>0 인 곳의 극점을 지목해야 함정이 성립."
    creative: "(1) f' 그래프에 x축 접점을 넣고 '그 점에서 극값을 갖는다' 명제를 추가(I-VF · ★4) (2) f 의 최댓값·최솟값 위치 명제를 넣으면 구간 끝 비교가 필요해 ★4 (3) f(x) 의 그래프 개형을 고르는 형태로 바꾸면 I-RT 깊이 상승 · ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-117-235
  page: 117
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    최고차항의 계수가 $1$ 인 삼차함수 $f(x)$ 가 ㈎ $x=1$ 에서 극소, ㈏ 원점을 지남, ㈐ 모든 실수 $x$ 에 대하여 $f'(-1-x)=f'(-1+x)$ 를 만족시킬 때 $f(x)$ 의 극댓값.
  category: "도함수의 대칭 조건 → 두 극점 결정 → f' 복원 → 상수항 → 극댓값"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f'(-1-x)=f'(-1+x) 는 이차함수 f'의 축이 x=-1 이라는 뜻이므로, 극점 x=1 의 짝이 되는 다른 극점이 대칭점 x=-3 으로 즉시 결정됨"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 조건을 f'(x)=3(x-1)(x+3) 과 f(0)=0 이라는 두 식으로 통합해 f 를 완전히 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도함수의 대칭 조건과 삼차함수의 극값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈐를 항등식으로 붙들고 계수를 비교하려 하면 길어지고, '축이 x=-1' 로 읽으면 한 줄에 끝난다. 이 전환이 문항의 유일한 관문이며 이후 계산은 가볍다.
    통찰 2개(SYM d2 + CON d1) · M_total 9 → 실력 UP ★4 에서 +1 → ★5 산식 후보지만, ★5 게이트(통찰 3개 이상)를 충족하지 못해 ★4 로 확정.
    [분류 이슈] 산식 +1 과 ★5 게이트가 충돌 — 후보 ★4/★5.
  tier: star_4
  mechanism_primary: "f'(-1-x)=f'(-1+x) → f'의 축 x=-1 → 극점 1 의 짝은 -3 → f'(x)=3(x-1)(x+3) → f(0)=0 → 극댓값 f(-3)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/117-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭축 -1 과 극점 1(따라서 짝 극점 -3), 최고차항 계수 1 을 바꿀 수 있음. 제약: 대칭축은 두 극점의 중점이어야 하므로 (축, 한 극점) 을 정하면 나머지가 강제됨. 원점 통과 조건은 상수항만 고정하므로 다른 점을 지나게 바꿔도 무방."
    creative: "(1) ㈐를 f(-1-x)+f(-1+x)=k(삼차함수 자체의 점대칭)로 바꾸면 변곡점 대칭이 되어 더 깊은 I-SYM · ★5 후보 (2) 극솟값을 주고 최고차항 계수를 묻는 역방향(★4 유지) (3) 조건 ㈏를 빼고 극댓값과 극솟값의 차를 묻기(상수항 불필요 · ★4)."
```

```yaml
- id: GN-CALC1-117-236
  page: 117
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^3-6x^2+ax+10$ 에 대하여 $x<3$ 이면 $b-f(x)$, $x\ge 3$ 이면 $f(x)$ 로 정의된 $g(x)$ 가 실수 전체에서 미분가능할 때 $g(x)$ 의 극솟값.
  category: "미분가능 조건 → f'(3)=0 · b=2f(3) → 뒤집힌 구간의 증감 → 극솟값"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=3 에서 미분가능 → 연속(b-f(3)=f(3)) 과 좌우 미분계수 일치(-f'(3)=f'(3), 즉 f'(3)=0) 두 식으로 분해 — 후자가 a 를 결정"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x<3 구간의 b-f(x) 는 f 의 그래프를 뒤집은 것이므로 증감이 반대가 되고, f 의 극대 위치가 g 의 극소 위치가 됨"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이음점 x=3 은 g'(3)=0 이지만 좌우 모두 증가라 극값이 아님 — 후보에서 기각해야 함"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "미분가능 조건과 구간별 정의 함수의 극값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 가장 층이 두껍다. 미분가능 조건을 두 식으로 분해해 a, b 를 얻고, 왼쪽 조각이 위아래로 뒤집힌 그래프임을 알아 증감을 반대로 읽고, 마지막에 이음점을 극값에서 기각해야 한다.
    통찰 3개 + I-VF 라 ★5 저노출 게이트는 충족하지만 골조가 표준 기출 유형이고 각 단계의 깊이가 d1~2 여서 라벨은 ★4 로 둔다.
    [분류 이슈] ★5 게이트 충족 · 유형 표준성으로 ★4 채택 — 후보 ★4/★5.
  tier: star_4
  mechanism_primary: "미분가능 → f'(3)=0 로 a, 연속으로 b=2f(3) → x<3 에서는 증감 반대 → f 의 극대점이 g 의 극소점 → 이음점 기각 → 극솟값"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/117-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이음점 3, 계수 -6·10 을 바꿀 수 있음. 제약: 이음점이 f'의 근이 되어야 미분가능이 성립하므로 (이음점, 이차항 계수)를 정하면 a 가 강제됨. b 는 항상 2f(이음점) 이라 독립적으로 못 고름. 이음점이 f 의 극점과 겹치지 않으면 문제가 성립하지 않음."
    creative: "(1) 조각을 b-f(x) 대신 f(2c-x)(좌우 대칭)로 바꾸면 I-SYM 으로 성격 전환(★5 후보) (2) 극솟값 대신 극댓값이나 극값의 개수를 묻기(I-VF 비중 상승 · ★4 유지) (3) 미분가능을 연속으로만 약화하면 이음점에서 첨점이 생겨 극값 판정이 달라짐(★4)."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 2 · ★2 15 · ★3 8 · ★4 4 · ★5 0
- 통찰형 16 · 절차형 13 · premium 0
- 통찰 유형 분포(총 22개 라벨): I-RT 8 · I-VF 6 · I-EQV 5 · I-CON 2 · I-SYM 1 (I-XU·I-BW·I-MI·I-PD·I-SC 0)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 전 구역에서 1단 이내로 일치
- type_hint 상위: 「극값 조건으로 미정계수 결정(삼차/사차)」 5 · 「다항함수의 극값 직접 계산」 5 · 「도함수의 그래프 읽기」 4 · 「도함수의 그래프로 미정계수 결정」 2 · 「극댓값·극솟값의 차」 2
- 그림: 6문(`crop:fig-114-e16.png` · `crop:fig-114-220.png` · `crop:fig-114-221.png` · `crop:fig-116-228.png` · `crop:fig-116-229.png` · `crop:fig-117-234.png`) — 모두 $y=f'(x)$ 의 그래프
- 벤더 태그: 필수 4 · 확인체크 8 · 평가원 기출 2 · 교육청 기출 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-115-227 | 벤더 STEP 1(★2)이나 전 과정이 문자 계수라 M_total 8 → 절차형 M 규칙으로 ★3. 통찰이 아니라 계산 마찰로 오른 ★ 라 질 신호로는 약함 | ★2 / ★3 |
| GN-CALC1-116-228 | 벤더 STEP 1(★2)인데 통찰 2개 + M_total 9. 산식대로면 ★4 도 가능하나 2단 드리프트를 피해 ★3 | ★3 / ★4 |
| GN-CALC1-117-235 | 조정 산식은 ★5(실력 UP ★4 +1)를 가리키지만 ★5 저노출 게이트(통찰 3개 이상)를 못 채워 ★4 | ★4 / ★5 |
| GN-CALC1-117-236 | 통찰 3개 + I-VF 로 ★5 게이트는 충족. 다만 골조가 표준 기출 유형이고 각 통찰의 depth 가 1~2 라 ★4 채택 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint** — ①「다항함수의 극값 직접 계산」(110-212·110-213·111-e13·111-214·112-e14·112-216·112-217·115-222·115-223), ②「극값 조건으로 미정계수 결정」(113-e15·113-218·113-219·115-224·115-225·116-232), ③「도함수의 그래프 읽기」(114-e16·114-220·116-228·117-234), ④「도함수의 그래프로 미정계수 결정」(114-221·116-229), ⑤「극댓값·극솟값의 차·관계」(111-215·115-223·115-226·115-227).
- **따로 세워야 할 유형** — ㉠ `f'(x)=0` 의 **중근·접점을 극값에서 기각**하는 유형(112-e14·112-216·114-220·116-228·117-236). 겉보기 발문은 ①②③에 흩어져 있지만 오답 원인이 동일해 독립 유형으로 두는 편이 변형·처방에 유리하다. ㉡ 도함수의 **대칭 조건**(117-235)은 이 단원에서 한 문항뿐이지만 최고난도 축이라 별도 슬롯이 필요하다. ㉢ **구간별 정의 함수의 미분가능 + 극값**(117-236)은 미분가능성 단원과 겹치므로 교차 배치 대상.
- **통합해도 될 유형** — 「삼차함수의 극값」과 「사차함수의 극값」은 차수만 다르고 골조(도함수 인수분해 → 증감표)가 같으므로 한 유형 아래 차수 변주로 두는 편이 낫다. 「도함수의 그래프로 미정계수 결정」(④)도 ②의 변주(조건이 식 대신 그림으로 주어질 뿐)라 ②에 흡수 가능하다.
- **base_star 초안** — ① ★1~2, ② ★2~3, ③ ★2~3(접점 포함 시 ★3), ④ ★2, ⑤ ★2~3, 대칭·미분가능 심화 ★4. 카탈로그 작성 시 이 값을 출발점으로 두고 이 파일의 `star` 와 대조하면 된다.
