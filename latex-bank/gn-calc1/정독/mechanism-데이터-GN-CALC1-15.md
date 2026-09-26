---
name: mechanism-데이터-GN-CALC1-15
description: 개념원리 미적분Ⅰ 15 함수의 최댓값과 최솟값(1/1 · 125~132쪽 · 29문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 15 함수의 최댓값과 최솟값
  unit_code: CALC1-15
  part: "1/1"
  extract_range: "125~132쪽 · 125-e21~132-267"
  total_problems: 29
  unit_total: 29
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 단원에는 「개념원리 익히기」 구역이 없고 확인체크가 필수 예제 바로 뒤에 붙으므로, 확인체크의 ★ 출발점은 ★1 이 아니라 짝이 되는 직전 필수 예제의 ★ 를 쓰고 노동량이 확실히 가벼우면 −1 했다. depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 15 함수의 최댓값과 최솟값 (1/1) 정독 데이터 (v1.0)

125~132쪽 29문항 전수다. 구역은 「필수·발전 예제」 13문(필수 예제 5 + 확인체크 8) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 4문이고, 벤더 난이도 신호는 구역(예제 상자 / STEP 1 / STEP 2 / 실력 UP)과 태그(필수 · 확인체크 · 교육청 기출)로 나타난다. 예제 상자는 발문만 전사돼 있어 본문 풀이·KEY Point 는 참고하지 않았고, 확인체크는 짝이 되는 직전 필수 예제와 같은 유형이므로 그 예제의 ★ 를 출발점으로 삼았다.

단원 내용은 크게 셋이다. (가) 닫힌구간에서 다항함수의 최대·최소, (나) 최대·최소 조건으로 미정계수를 역추적하는 문제, (다) 실생활·길이·넓이·부피·거리로 옮겨 한 변수 함수를 세우는 활용 문제. (다) 는 기하·상황 배치를 변수 하나의 식으로 옮기는 단계가 있어 I-RT 가 반복되고, STEP 2 이상에서는 극값의 존재·부재 조건(I-EQV)과 일부 경우를 기각하는 사후 검증(I-VF)이 더해진다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 문항은 골조를 잡는 데 필요한 만큼만 풀었고 `answer` 는 전사본 값을 그대로 옮겼다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-125-e21
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 삼차함수·사차함수의 최댓값과 최솟값을 구하기.
  category: "도함수의 부호 → 증감표 → 구간 안 극값과 양 끝값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 다항함수의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=0 의 근을 구해 증감표를 만들고, 구간 안의 극값과 두 끝값을 함께 비교하는 이 단원의 기본 절차.
    ⑵ 는 사차라 임계점이 셋이지만 처리 순서는 같다. 끝값 비교를 빠뜨리는 T-범위 함정 하나(Mt=1).
    통찰 없음 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x)=0 의 근 → 증감표 → 구간 안 극값과 양 끝값 비교 → 최대·최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $36$, 최솟값: $-16$ ⑵ 최댓값: $1$, 최솟값: $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/125-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차·사차 계수와 구간 양 끝을 바꿀 수 있다. 제약: f'(x)=0 이 유리수(되도록 정수) 근을 갖고 그 근 중 적어도 하나가 구간 내부에 있어야 하며, 끝값이 극값보다 큰 경우를 한쪽에 남겨야 「끝값도 비교한다」는 단계가 살아난다."
    creative: "(1) 구간을 극점 하나만 품도록 좁히면 ★1 (2) 최댓값과 최솟값의 차 또는 합을 묻기(★2 유지) (3) 구간의 한 끝을 매개변수 a 로 주어 a 의 위치에 따라 최대가 바뀌게 하면 경우 분기가 생겨 I-MI · ★3."
```

```yaml
- id: GN-CALC1-125-244
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 주어진 닫힌구간에서 삼차함수 둘·사차함수 둘의 최댓값과 최솟값을 구하기.
  category: "도함수의 부호 → 증감표 → 구간 안 극값과 양 끝값 비교 (4회 반복)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 다항함수의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    125-e21 과 같은 골조를 네 번 반복한다. ⑶ 은 사차에서 임계점이 구간 끝 바깥에 하나 있어 끝값 비교가 실제로 갈린다.
    소문항이 넷이라 단계 수는 늘지만 도구는 하나뿐(Ms=3, 통찰 0). 확인체크지만 짝 예제(★2)와 노동량이 같아 ★2.
  tier: star_2
  mechanism_primary: "각 소문항마다 f'(x)=0 → 증감표 → 극값과 끝값 비교 → 최대·최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $6$, 최솟값: $-21$ ⑵ 최댓값: $3$, 최솟값: $-5$ ⑶ 최댓값: $21$, 최솟값: $-11$ ⑷ 최댓값: $1$, 최솟값: $-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/125-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 소문항의 계수·구간을 각각 교체. 제약: 임계점이 정수 또는 간단한 유리수여야 하고, 소문항 중 최소 하나는 최댓값이 끝값에서, 하나는 극값에서 나오게 배치해야 반복 훈련의 의미가 있다."
    creative: "(1) 소문항 수를 둘로 줄이면 ★2 유지·시간만 절반 (2) 각 소문항의 최댓값끼리 더하게 해 한 답으로 묶기(★2) (3) 같은 함수에 구간만 셋으로 달리 주어 구간에 따라 최대 위치가 바뀌는 것을 보게 하면 ★3."
```

```yaml
- id: GN-CALC1-126-e22
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    구간 [-1,2] 에서 f(x)=ax³-6ax²+b (a>0) 의 최댓값이 3, 최솟값이 -29 일 때 a+b.
  category: "a 의 부호로 최대·최소 위치 확정 → 두 조건 연립 → 미정계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3ax(x-4) 이고 a>0 이므로 구간 안에서 x=0 이 극대, 최솟값은 두 끝값 중 작은 쪽이다.
    어느 점이 최대·최소인지 먼저 확정한 뒤 두 식을 연립하는 것이 이 유형의 표준 절차라 통찰로 세지 않았다.
    매개변수 둘(Ma=2) · a>0 부호 조건(Mt=1) · M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a>0 로 f' 부호 확정 → 최대는 x=0, 최소는 끝값 비교 → 두 조건 연립 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/126-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수 조합(ax³-6ax² 의 6), 구간, 최댓값·최솟값 수치를 바꿀 수 있다. 제약: 두 조건을 뺀 식에서 a 가 유리수로 떨어져야 하고, 극점 x=0·x=4 중 하나만 구간 안에 들어오게 구간을 잡아야 절차가 유지된다."
    creative: "(1) a<0 으로 바꾸면 최대·최소 위치가 뒤집혀 같은 ★2 지만 부호 함정이 커진다 (2) a+b 대신 ab 나 최댓값−최솟값을 묻기(★2 유지) (3) a 의 부호를 주지 않고 「가능한 a+b 를 모두」 로 바꾸면 두 경우를 모두 살려야 해 I-MI · ★3."
```

```yaml
- id: GN-CALC1-126-245
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 [0,2] 에서 f(x)=-2x³+3x²+a 의 최솟값이 -5 일 때 최댓값.
  category: "최솟값 조건으로 상수 a 결정 → 같은 구간의 최댓값 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-6x(x-1) 로 [0,1] 증가·[1,2] 감소. 최솟값 후보는 두 끝값이고 x=2 쪽이 작다는 비교가 한 번 필요하다.
    a 는 그래프를 평행이동만 시키므로 조건 하나로 바로 정해진다. 통찰 없음 · M_total 7 → 짝 예제 126-e22 와 같은 ★2.
  tier: star_2
  mechanism_primary: "f' 부호로 증감 확인 → 최솟값 위치 끝값 비교 → a 결정 → 극대점 값으로 최댓값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/126-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수·구간·최솟값 수치를 바꿀 수 있다. 제약: 상수항만 미지수이므로 최솟값이 나오는 점은 a 와 무관하게 정해져야 하고, 두 끝값 중 어느 쪽이 작은지가 확실히 갈리게 구간을 잡는다."
    creative: "(1) 최댓값을 주고 최솟값을 묻는 역방향(★2 유지) (2) 최댓값과 최솟값의 곱을 묻기(★2) (3) 상수항 대신 일차항 계수를 미지수로 두면 극점 위치가 a 에 따라 움직여 경우 분기가 생기고 ★3."
```

```yaml
- id: GN-CALC1-126-246
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 [-2,1] 에서 f(x)=x³-3x²+a 의 최댓값과 최솟값의 합이 -10 일 때 상수 a.
  category: "최대·최소를 a 의 식으로 쓴 뒤 합 조건으로 a 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x(x-2) 로 구간 안에서 x=0 이 극대. 최댓값은 f(0), 최솟값은 왼쪽 끝 f(-2) 이고 둘 다 a 의 일차식이다.
    합 조건이 a 에 대한 일차방정식이 되어 바로 풀린다. 통찰 없음 · M_total 7 → 짝 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "증감표로 최대·최소 위치 확정 → 두 값을 a 의 식으로 → 합 조건 일차방정식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/126-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수·구간·합의 값을 바꿀 수 있다. 제약: 상수항이 미지수라 최대·최소 위치가 a 와 무관해야 하고, 합 조건이 a 의 일차식이 되도록 최대·최소가 각각 한 점에서만 나오게 한다."
    creative: "(1) 합 대신 차(최댓값−최솟값)를 주면 a 가 소거되어 조건이 모순 또는 항등이 되므로, 그 자체를 묻는 참거짓 문제로 바꾸면 ★3 (2) 곱을 주면 a 의 이차방정식이 되어 근 두 개 검증이 붙고 ★3 (3) 구간을 [-2,3] 으로 넓혀 최솟값 위치를 바꾸기(★2 유지)."
```

```yaml
- id: GN-CALC1-126-247
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 [1,4] 에서 f(x)=ax⁴-4ax³+b (a<0) 의 최댓값이 3, 최솟값이 -6 일 때 ab.
  category: "a<0 로 증감 뒤집기 → 최대·최소 위치 확정 → 두 조건 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4ax²(x-3) 에서 x² 는 부호에 영향이 없고 a<0 이므로 x<3 증가·x>3 감소. 최대는 x=3, 최소는 두 끝값 중 작은 쪽이다.
    a<0 를 쓰지 않으면 증감이 통째로 뒤집히는 T-부호 함정과 끝값 비교 T-범위 함정 둘(Mt=2) · M_total 8.
    사차이고 부호 조건이 붙어 126-e22 보다 무겁지만 도구는 같아 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=4ax²(x-3) 에서 a<0 로 증감 확정 → 최대 f(3), 최소는 끝값 비교 → 연립 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/126-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차 계수 조합(ax⁴-4ax³ 의 4)과 구간·최대·최솟값 수치를 바꿀 수 있다. 제약: f' 에 중근 x=0 이 남아 부호가 바뀌지 않는 구조를 유지해야 하고, a 가 유리수로 떨어지게 두 조건의 차를 설계한다."
    creative: "(1) a>0 으로 바꾸면 x=3 이 극소가 되어 최소·최대가 뒤집힌다(★2 유지) (2) a 의 부호를 감추고 「가능한 ab 의 값」 을 묻기(I-MI · ★3) (3) 구간을 [0,4] 로 넓혀 중근 x=0 을 포함시키면 부호가 안 바뀌는 임계점 처리가 추가돼 ★3."
```

```yaml
- id: GN-CALC1-127-e23
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원피스 x 벌을 팔 때 이익이 -x³+144x²+1200x-200 원일 때(0<x<150) 이익이 최대가 되는 판매량. 5지선다.
  category: "이익 함수 미분 → 정의역 안의 f'=0 근 → 증감으로 최대 확인"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소의 활용 — 실생활(이익·비용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이익 함수가 이미 주어져 모델링 단계가 없고, f'(x)=-3(x-100)(x+4) 로 정의역 안의 근은 x=100 하나뿐이다.
    열린구간이라 끝값 비교 없이 유일한 극대가 곧 최대. 정의역 밖의 근 x=-4 를 버리는 T-범위 함정 하나.
    통찰 없음 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "주어진 이익 함수 미분 → 인수분해로 f'=0 근 → 0<x<150 안의 근 x=100 에서 극대 = 최대"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/127-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차 계수(144, 1200)와 정의역 상한을 바꿀 수 있다. 제약: f'(x)=-3(x-p)(x+q) 로 인수분해돼 양의 근 p 하나만 정의역 안에 들어와야 하고, 선택지가 정수 판매량이 되도록 p 를 정수로 잡는다."
    creative: "(1) 최대 이익 금액을 묻기(★2 유지) (2) 이익이 0 이상이 되는 판매량 범위를 묻기(부등식 전환 I-EQV · ★3) (3) 이익 함수를 주지 않고 「판매가격−원가×수량」 으로 세우게 하면 모델링 단계가 생겨 I-RT · ★3."
```

```yaml
- id: GN-CALC1-127-248
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주식을 t 년 후 팔 때 순이익이 f(t)=-t⁴/4-t³/3+2t²+4t (만 원)일 때(0<t<3) 순이익이 최대가 되는 t.
  category: "사차 순이익 함수 미분 → 삼차식 인수분해 → 정의역 안 극대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소의 활용 — 실생활(이익·비용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(t)=-(t+1)(t-2)(t+2) 로 인수분해된다. 0<t<3 에서 t+1, t+2 는 양수라 부호는 -(t-2) 만 결정하고 t=2 가 유일 극대.
    분수 계수 미분과 삼차 인수분해가 계산 부담(Mk=2)이지만 도구는 127-e23 과 같다. 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분수 계수 사차 미분 → 삼차식 인수분해 → 정의역 안에서 부호 판정 → t=2 극대 = 최대"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$년'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/127-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수와 이차·일차항 계수를 바꿀 수 있다. 제약: f'(t) 가 세 정수 근으로 인수분해돼야 하고, 그중 정확히 하나만 0<t<3 안에 들어와 부호가 +에서 −로 바뀌어야 한다."
    creative: "(1) 최대 순이익 금액까지 묻기(★2 유지) (2) 정의역을 0<t<5 로 넓혀 근이 둘 들어오게 하면 극대·극소 비교가 필요해 ★3 (3) 순이익을 「수입 함수−수수료」 로 쪼개 주면 모델링 단계가 붙어 I-RT · ★3."
```

```yaml
- id: GN-CALC1-128-e24
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 y=-2x²+12 와 x축으로 둘러싸인 도형에 내접하고 한 변이 x축 위에 있는 직사각형 ABCD 의 넓이의 최댓값.
  category: "대칭 배치로 변수 하나 설정 → 넓이 함수 → 삼차 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내접 직사각형의 배치를 y축 대칭으로 읽어 가로 2x·세로 -2x²+12 로 옮기는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    포물선이 y축 대칭이므로 밑변의 절반을 x 로 두면 S=2x(-2x²+12) 한 줄로 끝난다. 변수 설정이 풀이의 전부이고 이후는 삼차 최대 표준 절차.
    정의역 0<x<√6 을 잡는 T-범위 함정 하나. 통찰 1개(RT d1) · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "밑변 절반을 x 로 → S=2x(-2x²+12) → S'=0 → x=√2 에서 최대"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-128-e24.png"
  latex: latex-bank/gn-calc1/items/128-e24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 계수(-2)와 상수항(12)을 바꿀 수 있다. 제약: 그림의 점 이름 ABCD 와 「한 변이 x축 위」 배치는 고정해야 하고, S'=0 의 근이 간단한 무리수·유리수가 되도록 계수를 잡는다(x²=상수항/3계수 꼴)."
    creative: "(1) 넓이 대신 둘레의 최댓값을 묻기(일차+이차 혼합 · ★3) (2) 직사각형을 사다리꼴로 바꾸면 128-249 골조 (3) 포물선을 y축 대칭이 아닌 y=-2(x-1)²+12 로 옮기면 대칭 설정을 쓸 수 없어 변수 둘 또는 중점 설정이 필요해 ★3."
```

```yaml
- id: GN-CALC1-128-249
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=9-x² 과 x축의 두 교점을 A, B 라 할 때 이 곡선과 x축으로 둘러싸인 도형에 내접하는 사다리꼴 ABCD 의 넓이의 최댓값.
  category: "대칭 배치로 윗변을 2x 로 설정 → 사다리꼴 넓이 함수 → 삼차 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "아랫변 AB=6 은 고정이고 윗변 CD=2x·높이 9-x² 임을 읽어 사다리꼴 넓이를 x 한 변수 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    아랫변이 곡선의 두 교점으로 고정돼 있다는 점이 128-e24 와 다른 지점이고, S=½(6+2x)(9-x²)=(3+x)(9-x²) 로 정리된다.
    (3+x)²(3-x) 꼴이라 미분하면 공통인수가 떨어져 계산이 짧다. 통찰 1개(RT d1) · M_total 6 → 짝 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "윗변 절반을 x 로 → S=(3+x)(9-x²) → S'=0 → x=1 에서 최대"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$32$'
  answer_source: "답지"
  figure: "crop:fig-128-249.png"
  latex: latex-bank/gn-calc1/items/128-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 상수항(9)을 다른 완전제곱수로 바꾸면 교점이 정수로 유지된다. 제약: 그림의 A, B, C, D 이름과 「AB 가 아랫변」 배치는 고정, S' 의 근이 유리수가 되도록 상수항을 고른다."
    creative: "(1) 사다리꼴 대신 삼각형(윗변 한 점)으로 바꾸면 ★2 로 더 단순 (2) 넓이가 아니라 둘레의 최댓값을 묻기(무리식 미분 · ★4) (3) 윗변의 두 점을 곡선이 아니라 다른 직선 위에 두면 두 변수 관계식이 하나 더 필요해 ★3."
```

```yaml
- id: GN-CALC1-128-250
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=x² 위를 움직이는 점 A 와 점 B(3,0) 에 대하여 선분 AB 의 길이의 최솟값.
  category: "거리 대신 거리의 제곱을 최소화 → 사차식 미분 → 최솟값의 제곱근"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호가 있는 AB 대신 AB² 을 최소화해도 같다는 동치 변환(양수에서 제곱은 증가함수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 거리·거리의 제곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A(t,t²) 로 두면 AB²=(t-3)²+t⁴ 이고, 미분한 삼차식이 (t-1)(2t²+2t+3) 으로 인수분해돼 t=1 만 남는다.
    근호를 벗기는 동치 변환이 핵심이고, 마지막에 제곱근을 다시 씌우는 것을 잊는 실수가 흔하다.
    통찰 1개(EQV d1) · M_total 6 → 짝 예제 층과 같은 ★2.
  tier: star_2
  mechanism_primary: "A(t,t²) → AB²=(t-3)²+t⁴ 최소화 → 삼차 인수분해로 t=1 → AB=√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/128-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정점 B 의 좌표와 곡선의 계수를 바꿀 수 있다. 제약: AB² 을 미분한 삼차식이 유리수 근을 하나 가져야 하고, 남는 이차인수의 판별식이 음수여야 경우 분기가 생기지 않는다."
    creative: "(1) 최솟값이 되는 점 A 의 좌표를 묻기(★2 유지) (2) B 를 곡선 위가 아닌 직선 위를 움직이는 점으로 두면 변수 둘이 되어 ★4 (3) 점과 직선 사이 거리 공식으로도 풀리게 설정을 바꾸면 해법이 두 갈래가 되어 I-SC · ★3."
```

```yaml
- id: GN-CALC1-129-e25
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    가로 16, 세로 6 인 직사각형 종이의 네 모퉁이에서 한 변 x 인 정사각형을 잘라 내고 뚜껑 없는 직육면체를 만들 때 부피가 최대가 되는 x.
  category: "전개도 → 부피식 V=x(16-2x)(6-2x) → 삼차 최대 + 정의역"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "자르고 접는 전개도를 밑면 (16-2x)×(6-2x)·높이 x 의 부피식으로 옮기는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접었을 때 가로·세로가 각각 2x 씩 줄고 높이가 x 가 된다는 것만 보면 나머지는 삼차 최대 표준 절차다.
    정의역 0<x<3 (짧은 변 기준)을 놓치면 V'=0 의 다른 근 x=6 을 답으로 쓰게 되는 T-범위 함정.
    통찰 1개(RT d1) · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "V=x(16-2x)(6-2x) → V'=4(3x-4)(x-6) → 정의역 0<x<3 안의 근 x=4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-129-e25.png"
  latex: latex-bank/gn-calc1/items/129-e25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "종이의 가로·세로(16, 6)를 바꿀 수 있다. 제약: V'=0 의 두 근 중 하나만 0<x<(짧은 변)/2 에 들어와야 하고, 그 근이 유리수가 되도록 가로·세로를 고른다(두 변이 모두 짝수면 다루기 쉽다)."
    creative: "(1) 최대 부피 값을 묻기(★2 유지) (2) 종이를 정사각형으로 바꾸면 식이 x(a-2x)² 이 되어 계산이 더 짧다(★2) (3) 뚜껑을 덮는 구조(한쪽을 두 번 접기)로 바꾸면 폭이 비대칭으로 줄어 변수 설정이 어려워지고 ★3, 겉넓이를 고정하고 부피를 최대화하면 제약식 소거가 붙어 ★4."
```

```yaml
- id: GN-CALC1-129-251
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    밑면의 반지름이 1, 높이가 3 인 원뿔에 내접하는 원기둥의 부피의 최댓값.
  category: "닮음으로 높이를 반지름의 식으로 → 부피 삼차식 → 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축을 지나는 단면의 닮은 삼각형에서 원기둥 높이 h=3(1-r) 을 끌어내 변수 하나로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    입체 그대로는 변수가 둘(r, h)이고, 축단면을 잘라 닮음비 h:3=(1-r):1 을 얻는 순간 V=3π(r²-r³) 한 변수 문제가 된다.
    이후는 V'=3πr(2-3r) 로 r=2/3. 정의역 0<r<1 을 잡는 T-범위 함정 하나.
    통찰 1개(RT d1) · M_total 6 → 짝 예제 층과 같은 ★2. 실력 UP 의 132-267(구 내접 원뿔)과 같은 계열이다.
  tier: star_2
  mechanism_primary: "축단면 닮음 → h=3(1-r) → V=3π(r²-r³) → V'=0 → r=2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{9}\pi$'
  answer_source: "답지"
  figure: "crop:fig-129-251.png"
  latex: latex-bank/gn-calc1/items/129-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원뿔의 밑면 반지름 R 과 높이 H 를 바꿀 수 있다(닮음식은 h=H(1-r/R)). 제약: V'=0 의 근 r=2R/3 은 항상 유리수라 자유롭지만, 답에 π 계수가 깔끔하게 나오도록 R, H 를 정수로 잡는다."
    creative: "(1) 부피 대신 원기둥의 겉넓이의 최댓값을 묻기(이차식이 되어 ★2, 옆넓이만이면 ★2) (2) 원기둥을 원뿔로 바꿔 내접 원뿔의 부피(★3) (3) 원뿔이 아니라 구에 내접시키면 닮음 대신 피타고라스가 필요해 132-267 골조 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-130-252
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    미분가능한 함수 y=f(x) 의 도함수 y=f'(x) 의 그래프가 주어질 때, y=f(x) 의 그래프의 개형이 될 수 있는 것을 다섯 그림 중 고르기.
  category: "도함수 그래프의 부호·근 → 원함수의 증감과 극값 위치 → 개형 대조"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f' 그래프의 x축 아래·위 구간과 근을 f 의 감소·증가 구간과 극대·극소 위치로 옮기는 그래프↔그래프 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수의 그래프로 원함수의 개형 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 전혀 없고 부호 읽기만으로 끝나지만, 다루는 대상이 식이 아니라 일반 함수 f 의 그래프라 표현 추상도가 높다(Ma=3).
    f' 가 x축과 만나되 부호가 바뀌지 않는 점은 극값이 아니라는 구분이 선택지를 가르는 지점이다.
    통찰 1개(RT d2) · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f' 의 부호 구간 읽기 → f 의 증감 구간 → 부호가 바뀌는 근에서만 극값 → 개형 대조"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-130-252.png"
  latex: latex-bank/gn-calc1/items/130-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 문항이라 바꿀 수 있는 수는 f' 의 근의 개수와 위치뿐이다. 제약: 그림 파일과 선택지 다섯 개의 라벨 배치는 고정이므로 숫자 변형 대상이 아니고, 변형하려면 그림을 다시 그려야 한다."
    creative: "(1) 반대로 f 의 개형을 주고 f' 의 그래프를 고르게 하기(★2 유지) (2) f' 그래프에 부호가 바뀌지 않는 중근을 넣어 「극값의 개수」 를 묻기(★3) (3) f'' 의 그래프를 주고 f 의 볼록·오목까지 묻게 하면 단원을 넘어가므로 이 단원에서는 쓰지 않는다."
```

```yaml
- id: GN-CALC1-130-253
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=x³+ax²+3x+1 은 극값을 갖고 g(x)=x³+ax²-3ax+2 는 극값을 갖지 않도록 하는 정수 a 의 개수.
  category: "극값 존재·부재 → 도함수 판별식 부등식 두 개 → 교집합의 정수 세기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값의 존재·부재 조건(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「삼차함수가 극값을 갖는다 ⟺ f'=0 이 서로 다른 두 실근 ⟺ D>0」, 「갖지 않는다 ⟺ D≤0」 은 이 단원에서 공식으로 가르치는 동치라 통찰로 세지 않았다.
    D>0 은 부등식 a<-3 또는 a>3, D≤0 은 -9≤a≤0 이고 교집합 -9≤a<-3 에서 정수를 센다. 등호 포함 여부(T-경계)가 개수를 가른다.
    통찰 없음 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f' 판별식 D>0 · g' 판별식 D≤0 → 두 범위 교집합 → 정수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/130-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 일차항 계수(3, -3a)를 바꿀 수 있다. 제약: 두 판별식이 모두 정수 계수 이차부등식으로 인수분해돼야 하고, 교집합이 비지 않으면서 정수 개수가 한 자리로 떨어지게 잡는다. 등호(≤)가 개수에 영향을 주는 배치를 남긴다."
    creative: "(1) 정수 a 의 개수 대신 합을 묻기(★2 유지) (2) 한쪽을 「극댓값이 양수」 조건으로 바꾸면 판별식만으로는 안 되어 ★4 (3) 두 조건을 모두 만족하는 a 가 존재하지 않게 만든 뒤 그 사실을 증명하게 하면 ★3."
```

```yaml
- id: GN-CALC1-130-254
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=x³+(k-3)x²+(2-k)x-3 이 0<x<1 에서 극댓값, 1<x<2 에서 극솟값을 갖도록 하는 실수 k 의 값의 범위.
  category: "극값 위치 조건 → 이차함수 f' 의 근의 분리 → 세 점 부호 조건 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극대·극소가 각각 (0,1)·(1,2) 에 있다는 조건을 이차함수 f' 의 근의 분리 조건 f'(0)>0, f'(1)<0, f'(2)>0 으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극값의 위치 조건 — 근의 분리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극값을 직접 구하려 들면 풀리지 않고, 「f' 의 두 근이 0<α<1<β<2 」 를 f' 의 세 점에서의 부호로 바꿔야 비로소 일차부등식 셋이 된다.
    판별식은 따로 쓸 필요가 없다는 것(부호 조건이 이미 두 실근을 보장)도 걸림돌이다.
    통찰 1개지만 depth 2 이고 근의 분리는 구간 경계(T-경계)와 범위(T-범위) 함정을 함께 끼고 있다(M_total 8) → STEP 1 출발점에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "f'=3x²+2(k-3)x+(2-k) → 근의 분리 조건 f'(0)>0, f'(1)<0, f'(2)>0 → k 범위 교집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{2}{3}<k<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/130-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간의 경계(0, 1, 2)와 계수에 들어간 k 의 자리를 바꿀 수 있다. 제약: f'(경계) 가 k 의 일차식이 되도록 k 를 이차·일차 계수에만 넣어야 하고, 세 부등식의 교집합이 비지 않게 경계를 잡는다."
    creative: "(1) 구간을 하나만 주어 「0<x<1 에서 극댓값」 만 요구하면 부등식 둘로 줄어 ★2 (2) 극댓값의 부호까지 조건으로 걸면 삼차식 대입이 추가돼 ★4 (3) 정수 k 의 개수를 묻게 바꾸면 경계 등호 처리가 답을 가르고 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-CALC1-130-255
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구간 [0,4] 에서 f(x)=x³-3x²-3 의 최댓값을 M, 최솟값을 m 이라 할 때 M-m.
  category: "증감표 → 극값과 끝값 세 값 비교 → 차 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 다항함수의 최댓값·최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3x(x-2) 로 임계점이 x=0(구간 끝과 겹침)·x=2 뿐이고 비교할 값이 f(0), f(2), f(4) 셋이다. 계수도 작아 계산이 한 줄이다.
    통찰 없음 · M_total 5 → STEP 1 출발점 ★2 에서 −1 하여 ★1. 이 범위에서 유일한 ★1.
  tier: star_1
  mechanism_primary: "f'=3x(x-2) → f(0), f(2), f(4) 비교 → M-m"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/130-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 구간을 바꿀 수 있다. 제약: 임계점이 정수여야 하고, 극대점이 구간 안에 들어오면 비교 대상이 넷으로 늘어 난도가 한 단 올라가므로 ★1 을 유지하려면 지금처럼 임계점 하나만 내부에 둔다."
    creative: "(1) M+m 이나 Mm 을 묻기(★1 유지) (2) 구간의 오른쪽 끝을 a 로 두고 M-m 을 a 의 식으로 나타내면 경우 분기가 생겨 ★3 (3) 최댓값이 되는 x 의 값까지 묻기(★1 유지)."
```

```yaml
- id: GN-CALC1-130-256
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구간 [-1,3] 에서 f(x)=ax³-3ax+2b (a>0) 의 최댓값이 22, 최솟값이 2 일 때 ab.
  category: "a>0 로 증감 확정 → 최대는 오른쪽 끝, 최소는 극소 → 두 식 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3a(x²-1) 로 x=±1 이 임계점인데 x=-1 이 구간의 왼쪽 끝과 겹쳐 비교 대상이 f(-1), f(1), f(3) 셋이다.
    a>0 이므로 x=1 이 극소이고 최대는 f(3), 두 식을 빼면 a 가 바로 나온다. 126-e22·126-247 과 같은 골조.
    통찰 없음 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=3a(x²-1) · a>0 → 최소 f(1), 최대 f(3) → 두 식 차로 a → b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/130-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(-3a)와 구간·최대·최솟값을 바꿀 수 있다. 제약: 두 조건을 뺐을 때 a 가 유리수로 떨어져야 하고, 상수항이 2b 처럼 미지수 하나만 담아 b 가 나눠떨어지게 둔다."
    creative: "(1) a<0 으로 바꾸면 최대·최소가 뒤집힌다(★2 유지) (2) a+b 대신 최댓값−최솟값만 주면 b 가 소거되어 a 만 결정되고 ★2 (3) 구간의 왼쪽 끝을 -2 로 넓혀 극대점이 내부로 들어오게 하면 비교 대상이 넷이 되고 ★3."
```

```yaml
- id: GN-CALC1-131-257
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=x⁴-4a³x+1 (a>0) 의 최솟값이 -47 일 때 상수 a.
  category: "실수 전체에서 사차 최소 → 유일 극소점 → 최솟값을 a 의 식으로 → 방정식"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건을 이용한 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4(x³-a³) 이라 임계점이 x=a 하나뿐이고, 최고차항이 양수인 사차이므로 이 극소가 곧 실수 전체의 최솟값이다.
    구간이 없다는 점(끝값 비교 불필요)과 a>0 이 임계점의 유일성을 보장한다는 점이 확인 포인트.
    최솟값 -3a⁴+1=-47 에서 a⁴=16 이고 a>0 이라 근이 하나로 걸러진다. 통찰 없음 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=4(x³-a³) → 유일 극소 x=a → 최솟값 -3a⁴+1=-47 → a>0 으로 a 확정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수의 차수 구조(4a³)와 상수항·최솟값을 바꿀 수 있다. 제약: f' 이 x³-a³ 꼴이라야 임계점이 하나로 유지되고, 최솟값 식이 a 의 짝수 거듭제곱이 되므로 a>0 조건을 반드시 남겨 근을 하나로 걸러야 한다."
    creative: "(1) a<0 으로 바꿔도 임계점은 여전히 x=a 하나라 ★2 유지 (2) 최솟값 대신 「최솟값이 0 이상이 되도록 하는 a 의 범위」 를 묻기(부등식 전환 ★3) (3) 구간 [0,3] 으로 제한하면 a 의 위치에 따라 최소가 끝값이 될 수 있어 경우 분기 ★4."
```

```yaml
- id: GN-CALC1-131-258
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 A(5,-1), B(9,1) 과 곡선 y=x²+2 위의 점 P 에 대하여 AP²+BP² 의 최솟값.
  category: "P 를 매개변수로 → 두 거리 제곱의 합을 사차식으로 → 삼차 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선 위의 점을 P(t, t²+2) 로 두어 두 선분 길이의 제곱 합을 t 의 다항식으로 옮기는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소의 활용 — 거리·거리의 제곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음부터 제곱 합을 묻고 있어 근호를 벗기는 판단은 필요 없고, 매개변수 설정과 전개가 전부다.
    정리하면 2t⁴+10t²-28t+116 이고 미분한 삼차식이 (t-1)(2t²+2t+7) 로 떨어져 t=1 만 남는다(남은 이차인수는 판별식이 음수).
    통찰 1개(RT d1) · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,t²+2) → AP²+BP² 를 t 의 사차식으로 → 미분·삼차 인수분해 → t=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점 좌표와 곡선의 상수항을 바꿀 수 있다. 제약: 미분한 삼차식이 유리수 근을 하나 갖고 나머지 이차인수의 판별식이 음수여야 경우 분기가 없다. 두 정점을 y=x²+2 에 대해 서로 반대쪽에 두면 문맥이 자연스럽다."
    creative: "(1) AP²+BP² 대신 AP²-BP² 를 묻기(이차식이 되어 ★2 로 더 쉬움) (2) 세 점으로 늘려 AP²+BP²+CP² 로 하면 계산만 늘고 골조는 같다(★2) (3) 제곱을 빼고 AP+BP 의 최솟값을 묻게 하면 무리식 미분 또는 대칭이동 반사 아이디어가 필요해 I-SC · ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-131-259
  page: 131
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=-x³+mx²+nx 의 그래프가 원점 이외의 점에서 x축과 접하고 극솟값이 -4 일 때 mn.
  category: "접한다 → 중근 꼴로 식 세우기 → 극솟값 조건 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「원점 이외의 점에서 x축과 접한다」 를 f(x)=-x(x-k)² (k≠0) 이라는 중근 꼴 표현으로 동치 변환"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 의 부호에 따라 극소점이 x=k/3 인지 x=k 인지 갈리는데, k<0 갈래는 극솟값이 0 이 되어 조건 -4 에 위배되므로 기각해야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "x축에 접하는 삼차함수의 극값 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    m, n 을 그대로 두고 판별식으로 접근하면 막히고, 중근 꼴 -x(x-k)² 으로 다시 쓰는 순간 m=2k, n=-k² 로 미지수가 하나가 된다.
    f'=-(3x-k)(x-k) 이라 임계점이 k/3 과 k 이고, k 의 부호에 따라 어느 쪽이 극소인지 바뀌므로 한 갈래는 조건 위배로 기각된다.
    통찰 2개지만 둘 다 depth ≤2 이고 중근 꼴 설정은 이 단원의 표준에 가까워 +1 을 적용하지 않고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f(x)=-x(x-k)² 로 다시 쓰기 → m=2k, n=-k² → 극솟값 -4k³/27=-4 → k=3 → mn"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수(-1)와 극솟값(-4)을 바꿀 수 있다. 제약: 극솟값이 -4k³/27 꼴이라 극솟값에 27 의 약수 구조를 주어야 k 가 정수로 떨어진다. 「원점 이외의 점에서」 라는 단서는 k≠0 을 보장하므로 빼면 안 된다."
    creative: "(1) mn 대신 m+n 이나 극댓값을 묻기(★3 유지) (2) 「x축과 서로 다른 두 점에서 만난다」 로 바꾸면 중근 꼴을 못 쓰고 판별식·극값 부호 조건이 필요해 ★4 (3) 최고차항 계수를 양수로 바꾸면 극대·극소가 뒤집혀 기각되는 갈래가 반대가 된다(★3 유지)."
```

```yaml
- id: GN-CALC1-131-260
  page: 131
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=-3x⁴+4ax³-6(a+3)x²-1 이 극솟값을 갖지 않도록 하는 모든 정수 a 의 값의 합.
  category: "극솟값 부재 → f' 의 부호 변화가 한 번뿐일 조건 → 판별식·중근·근 겹침 경우 분류"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차 계수가 음수인 사차에서 「극솟값을 갖지 않는다」 를 「f' 의 부호가 +에서 −로 한 번만 바뀐다」 로 동치 변환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f'=-12x(x²-ax+a+3) 에서 판별식<0 갈래 외에 중근 갈래와 이차인수의 근이 0 과 겹치는 a=-3 갈래를 따로 검증해 살려야 함(빼면 합이 틀림)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극솟값을 갖지 않을 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'=-12x(x²-ax+a+3) 으로 공통인수 x 가 나오는 것이 출발점이고, 이차인수가 실근을 가지면 부호 변화가 늘어 극소가 생긴다.
    판별식 D<0 인 -2<a<6 과 중근 a=-2, 6 은 어렵지 않지만, 이차인수의 근 하나가 0 과 겹쳐 중근처럼 작동하는 a=-3 을 놓치면 답이 달라진다.
    통찰 2개(EQV d2 + VF d2) · M_total 9 · 경계 경우가 답을 가름 → STEP 2 출발점에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "f'=-12x(x²-ax+a+3) → 이차인수가 부호를 바꾸지 않을 조건(D<0 · 중근 · 근이 0 과 겹침) → 정수 a 의 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차항·이차항 계수(4a, -6(a+3))를 바꿀 수 있다. 제약: f' 에서 x 가 공통인수로 빠지고 남는 이차식의 판별식이 정수 계수로 인수분해돼야 하며, 「근이 0 과 겹치는」 특수 a 가 정수로 남도록 상수항 구조를 유지한다."
    creative: "(1) 「극댓값을 갖지 않도록」 으로 바꾸면 최고차 음수라 항상 극대가 있어 답이 없음 — 그 사실을 논증시키면 ★4 (2) 정수 a 의 개수만 묻기(★4 유지) (3) 최고차 계수를 양수로 바꾸면 극소·극대가 뒤집혀 「극댓값을 갖지 않을 조건」 이 같은 골조가 된다(★4 유지)."
```

```yaml
- id: GN-CALC1-131-261
  page: 131
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=x³-3x 에 대하여 ㄱ(극값의 존재) · ㄴ(x≥2 이면 f(x)≥2) · ㄷ(|x|≤2 이면 |f(x)|≤2) 중 옳은 것 고르기.
  category: "부등식 참거짓 → 해당 구간에서의 최댓값·최솟값 비교로 환원"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구간에서 부등식이 항상 성립한다」 를 「그 구간에서의 최솟값(최댓값)과 기준값의 비교」 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 최대·최소를 이용한 부등식 참거짓 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함수 자체는 가장 기본적인 x³-3x 지만, 보기 셋이 각각 다른 구간을 요구한다. ㄴ 은 [2,∞) 에서 증가함을 쓰고 끝값 f(2)=2 를 경계로 확인해야 하고,
    ㄷ 은 [-2,2] 에서 극값과 끝값을 모두 비교해야 한다(극값과 끝값이 모두 ±2 로 같아 등호가 성립하는 것이 함정).
    T-경계·T-범위 둘(Mt=2) · 통찰 1개(EQV d1) · M_total 6 → STEP 2 출발점 ★3 유지하되 이 구역에서는 아래쪽 층.
  tier: star_3
  mechanism_primary: "각 보기의 구간에서 증감표 → 최솟값·최댓값 산출 → 기준값과 비교(등호 포함) → 참거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수의 일차항 계수와 보기의 구간·기준값을 바꿀 수 있다. 제약: 등호가 걸리는 경계(여기서는 f(2)=2, [-2,2] 의 극값 ±2)를 유지해야 ㄴ·ㄷ 이 함정으로 작동한다. 기준값을 조금만 올리면 거짓 보기가 되어 난도가 떨어진다."
    creative: "(1) 보기 중 하나를 거짓으로 만들어 반례를 찾게 하면 ★3 유지·체감은 상승 (2) ㄷ 을 「|f(x)|≤k 를 만족시키는 최소의 k」 로 바꾸면 최댓값 계산으로 좁혀져 ★2 (3) 함수를 f(x)=x³-3a²x 로 일반화하면 매개변수가 붙어 ★4."
```

```yaml
- id: GN-CALC1-131-262
  page: 131
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A 제품 x 개의 생산비가 f(x)=x³-60x²+1200x+5000 원이고 개당 1200 원에 모두 팔릴 때 이익을 최대로 하는 생산 개수.
  category: "이익 = 판매액 − 생산비 → 삼차 함수 미분 → 최대"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소의 활용 — 실생활(이익·비용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이익 = 1200x − f(x)」 는 문제 문장에 그대로 적혀 있는 표준 모델링이라 통찰로 세지 않았다.
    정리하면 -x³+60x²-5000 이고 도함수가 -3x(x-40) 이라 x=40 에서 바로 끝난다.
    통찰 없음 · M_total 5 → STEP 2 출발점 ★3 에서 −1 하여 ★2. [분류 이슈] 구역 신호(STEP 2)와 실제 난도가 1단 어긋난다.
  tier: star_2
  mechanism_primary: "이익 P(x)=1200x-f(x)=-x³+60x²-5000 → P'=-3x(x-40) → x=40 에서 최대"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/131-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비용 함수의 이차·일차 계수와 판매 단가(1200)를 바꿀 수 있다. 제약: 판매 단가가 비용의 일차항 계수를 상쇄해 이익의 도함수가 -3x(x-p) 꼴로 인수분해되어야 하고, p 가 정수 생산량이 되게 잡는다."
    creative: "(1) 최대 이익 금액까지 묻기(★2 유지) (2) 단가를 x 에 따라 떨어지는 함수(1200-x)로 주면 이익이 사차가 되어 ★3 (3) 생산 개수에 상한 조건을 주고 그 상한이 최대점보다 작게 하면 끝값이 답이 되어 T-범위 함정이 생기고 ★3."
```

```yaml
- id: GN-CALC1-132-263
  page: 132
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 변의 길이가 15 인 정삼각형 종이의 세 모퉁이에서 합동인 사각형을 잘라 내고 접어 뚜껑 없는 삼각기둥 상자를 만들 때, 부피가 최대가 되는 x 의 값(x 는 그림에 표시된 길이).
  category: "정삼각형 전개도 → 밑면 한 변과 기둥 높이를 x 로 → 부피 삼차식 → 최대"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접어 올린 옆면이 밑면 정삼각형과 이루는 관계에서 밑면 한 변 15-2x·기둥 높이 x/√3 을 끌어내는 기하→대수 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소의 활용 — 입체의 부피"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    129-e25(직사각형 종이)와 달리 잘라 내는 조각이 직각이 아니어서, 그림의 x 가 밑면 한 변을 얼마나 줄이는지와 기둥 높이가 되는지를 따로 따져야 한다.
    안쪽 정삼각형이 바깥과 평행하다는 점에서 한 변은 15-2x, 접어 올린 높이는 x/√3 이 되고 부피는 (1/4)x(15-2x)² 로 정리된다.
    통찰 1개(RT d2) · 기하 설정 단계가 길어 Ms=3 · M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "밑면 한 변 15-2x · 높이 x/√3 → V=(1/4)x(15-2x)² → V'=0 → x=5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: "crop:fig-132-263.png"
  latex: latex-bank/gn-calc1/items/132-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정삼각형의 한 변(15)만 바꾸면 된다. 제약: 그림의 x 라벨 위치와 「세 모퉁이에서 합동인 사각형」 배치는 고정이어야 하고, V'=0 의 근이 한 변의 1/6 이므로 한 변을 6 의 배수 또는 짝수로 잡아야 답이 간단하다. 정의역 0<x<15/2 를 함께 준다."
    creative: "(1) 최대 부피까지 묻기(√3 이 남아 계산 부담만 늘고 ★3 유지) (2) 종이를 정사각형으로 바꿔 사각기둥을 만들면 129-e25 골조로 내려가 ★2 (3) 상자에 뚜껑을 붙이는 조건을 추가하면 전개도 배치가 달라져 변수 설정이 어려워지고 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-132-264
  page: 132
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    x²+3y²=9 를 만족시키는 실수 x, y 에 대하여 x²+xy² 의 최솟값.
  category: "제약식으로 y² 소거 → x 한 변수 삼차 → 실수 조건에서 나온 닫힌구간에서 최소"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제약식을 y²=(9-x²)/3 으로 옮겨 목표식을 x 만의 삼차식으로 바꾸고, y 가 실수라는 조건에서 정의역 -3≤x≤3 을 함께 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제약조건 아래 두 변수 식의 최솟값(소거 + 정의역)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    소거 자체는 어렵지 않지만, y²≥0 에서 나오는 -3≤x≤3 을 쓰지 않으면 삼차식의 최솟값이 존재하지 않게 되어 답이 무너진다.
    정의역을 얻은 뒤에는 g(x)=-x³/3+x²+3x 의 닫힌구간 최대·최소 표준 절차이고, 극소점 x=-1 과 끝값 x=±3 을 비교한다.
    통찰 1개(EQV d2) · T-범위와 T-경계 둘(Mt=2) · M_total 8 → 실력 UP 출발점 ★4 유지.
    [분류 이슈] ★4 인데 통찰 유형이 EQV 하나라 v3.8 §2.13 의 「★4 저노출 유형 부재」 YELLOW 에 걸린다(라벨은 벤더 신호대로 유지).
  tier: star_4
  mechanism_primary: "y²=(9-x²)/3 소거 → g(x)=-x³/3+x²+3x, -3≤x≤3 → g'=-(x-3)(x+1) → x=-1 에서 최소"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/132-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제약식의 계수(1, 3, 9)와 목표식의 형태를 바꿀 수 있다. 제약: 소거 후 x 의 삼차식이 되도록 목표식에 y² 이 일차로만 들어가야 하고, 도함수가 정수 근을 가져야 한다. 제약식은 타원 꼴이라야 정의역이 닫힌구간으로 나온다."
    creative: "(1) 최댓값을 묻게 하면 끝값 x=3 이 답이 되어 정의역 인식이 더 결정적이 된다(★4 유지) (2) 제약식을 x²-3y²=9 인 쌍곡선으로 바꾸면 정의역이 |x|≥3 로 열려 최솟값이 없어지고, 그 사실을 논증시키면 ★5 급 (3) 목표식을 x+y² 처럼 이차로 낮추면 ★2."
```

```yaml
- id: GN-CALC1-132-265
  page: 132
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=x²+2x+k, g(x)=2x³-9x²+12x-2 에 대하여 (g∘f)(x) 의 최솟값이 2 가 되도록 하는 실수 k 의 최솟값. 5지선다.
  category: "합성함수 최솟값 → f 의 치역 위에서 g 의 최솟값 → 경계 조건으로 k 범위"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성함수를 t=f(x) 로 갈라 「치역 [k-1,∞) 위에서 g(t) 의 최솟값」 이라는 한 변수 문제로 옮기는 표현 전환"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g(t)-2=(t-2)²(2t-1) 인수분해로 「g(t)≥2 ⟺ t≥1/2」 를 얻어 치역의 왼쪽 끝이 만족해야 할 범위로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "합성함수의 최솟값과 미정계수 범위"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 의 치역이 [k-1,∞) 이라는 점을 먼저 잡아야 하고, 그 반직선 위에서 g 의 최솟값이 2 가 되려면 극솟값 g(2)=2 가 치역 안에 들어오면서 그보다 작은 값이 없어야 한다.
    g(t)-2 를 인수분해하면 (t-2)²(2t-1) 이라 g≥2 인 구간이 t≥1/2 로 딱 떨어지고, 치역의 왼쪽 끝 k-1 이 [1/2, 2] 에 있어야 한다는 결론이 나온다.
    통찰 2개(RT d2 + EQV d2) · M_total 9 → 실력 UP 출발점 ★4 유지(★5 는 통찰 3개 이상 요건 미충족).
  tier: star_4
  mechanism_primary: "t=f(x) 의 치역 [k-1,∞) → g 의 극소 g(2)=2 · g(t)-2=(t-2)²(2t-1) → 1/2 ≤ k-1 ≤ 2 → k 최솟값 3/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/132-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 계수와 f 의 꼭짓점 위치를 바꿀 수 있다. 제약: g(t)-(목표 최솟값) 이 (t-α)²(βt-γ) 처럼 인수분해돼야 경계 t=γ/β 가 깔끔하게 나오고, f 는 아래로 볼록이라야 치역이 반직선이 된다. 선택지는 유리수로 떨어지게 한다."
    creative: "(1) k 의 최댓값을 묻기(경계의 반대쪽 t=2 가 답이 되어 ★4 유지) (2) 최솟값 2 대신 극댓값 3 을 목표로 걸면 치역이 극대점을 품어야 하는 조건이 되어 갈래가 늘고 ★5 후보 (3) f 를 위로 볼록한 이차로 바꾸면 치역이 (-∞, k+1] 이 되어 g 의 왼쪽 거동을 봐야 하고 ★4 유지."
```

```yaml
- id: GN-CALC1-132-266
  page: 132
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    0<a<6 인 실수 a 에 대하여 원점에서 곡선 y=x(x-a)(x-6) 에 그은 두 접선의 기울기의 곱의 최솟값. 5지선다.
  category: "접점 매개변수로 접선 조건 → 두 기울기를 a 의 식으로 → 삼차 최소"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「원점에서 그은 접선」 을 접점 (t, f(t)) 에 대한 f(t)/t = f'(t) 라는 대수 조건으로 옮기는 기하→대수 전환(곡선이 원점을 지나 t=0 도 접점)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선의 기울기를 각각 6a 와 6a-(a+6)²/4 로 정리해 「기울기의 곱」 을 a 만의 삼차함수로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖 한 점에서 그은 접선의 기울기 — 매개변수 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곡선이 원점을 지나므로 접점 조건 식이 t(2t-(a+6))=0 으로 갈라져 접점이 t=0 과 t=(a+6)/2 둘로 정해지는 구조를 봐야 한다.
    두 기울기를 a 의 식으로 정리해 곱하면 -3a³/2+18a²-54a 가 되고, 도함수가 -(9/2)(a-2)(a-6) 이라 0<a<6 안의 근은 a=2 하나다.
    통찰 2개(RT d2 + EQV d2) · 전개 계산 부담 큼(Mk=3) · M_total 9 → 실력 UP 출발점 ★4 유지(★5 는 통찰 3개 이상 요건 미충족).
  tier: star_4
  mechanism_primary: "f(t)/t=f'(t) → 접점 t=0, (a+6)/2 → 기울기 곱 P(a)=-3a³/2+18a²-54a → P'=0 → a=2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/132-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 세 근 중 고정된 것(0 과 6)을 바꿀 수 있다. 제약: 곡선이 원점을 지나야 접점 하나가 t=0 으로 고정되어 계산이 닫히고, a 의 범위는 두 접선이 실제로 존재하는 구간이어야 한다. P'(a) 가 정수 근을 갖게 상수를 고른다."
    creative: "(1) 기울기의 곱 대신 합의 최솟값을 묻기(이차가 되어 ★3) (2) 접점이 원점이 아닌 점 (0, c) 에서 긋게 하면 접점 조건이 삼차방정식이 되어 갈래가 늘고 ★5 후보 (3) 두 접선이 서로 수직이 되는 a 를 묻게 하면 곱이 -1 인 방정식이 되어 ★4 유지."
```

```yaml
- id: GN-CALC1-132-267
  page: 132
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    반지름의 길이가 3 인 구에 내접하는 원뿔의 부피의 최댓값.
  category: "축단면 피타고라스로 밑면 반지름을 높이의 식으로 → 부피 삼차 → 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구의 중심에서 밑면까지 거리를 매개로 r²=6h-h² 를 끌어내 부피를 높이 h 하나의 식으로 옮기는 기하→대수 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소의 활용 — 입체의 부피"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구의 중심이 원뿔 밑면의 위·아래 어디에 있어도 h=3+d 한 식으로 묶인다는 것만 보면, r²=9-(h-3)²=6h-h² 로 변수가 하나가 된다.
    이후 V=(π/3)(6h²-h³) 의 삼차 최대이고 정의역은 0<h<6.
    통찰 1개(RT d2) · M_total 6 이고 129-251(확인체크 ★2)과 같은 「내접 입체」 계열이라 실력 UP 출발점 ★4 에서 −1 하여 ★3.
    [분류 이슈] 구역 신호(실력 UP)와 1단 어긋난다.
  tier: star_3
  mechanism_primary: "축단면 피타고라스 → r²=6h-h² → V=(π/3)(6h²-h³) → V'=0 → h=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{32}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/132-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 반지름 R 만 바꾸면 된다(최대는 항상 h=4R/3). 제약: 답에 π 와 분수가 깔끔하게 남도록 R 을 3 의 배수로 잡는 것이 좋다. 정의역 0<h<2R 을 함께 준다."
    creative: "(1) 부피가 최대일 때 밑면 반지름이나 높이를 묻기(★3 유지) (2) 원뿔 대신 내접 원기둥으로 바꾸면 129-251 과 같은 ★2 계열 (3) 구에 내접하는 원뿔의 겉넓이 최댓값으로 바꾸면 무리식 미분이 필요해 ★5 급으로 뛴다."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 1 · ★2 19 · ★3 5 · ★4 4 · ★5 0
- 통찰형 16 · 절차형 13 · premium 0
- 통찰 유형 분포(라벨 수 기준 20개): I-RT 10 · I-EQV 8 · I-VF 2
- type_hint 상위: 「최대·최소 조건을 이용한 미정계수 결정」 6 · 「최대·최소의 활용 — 입체의 부피」 4 · 「닫힌구간에서 다항함수의 최댓값·최솟값」 3 · 「최대·최소의 활용 — 실생활(이익·비용)」 3 · 「최대·최소의 활용 — 도형의 넓이」 2 · 「최대·최소의 활용 — 거리·거리의 제곱」 2
- 그림: 6문(`crop:fig-128-e24.png` · `crop:fig-128-249.png` · `crop:fig-129-e25.png` · `crop:fig-129-251.png` · `crop:fig-130-252.png` · `crop:fig-132-263.png`)
- 구역별 ★: 필수·발전 예제 13문 모두 ★2 · STEP 1 (★1 1 · ★2 5 · ★3 1) · STEP 2 (★2 1 · ★3 3 · ★4 1) · 실력 UP (★3 1 · ★4 3)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-131-262 | STEP 2 구역(★3 출발)이지만 「이익 = 판매액 − 비용」 을 쓰면 -3x(x-40) 한 줄 · 통찰 0 · M_total 5 → ★2 로 기록 | ★2 / ★3 |
| GN-CALC1-132-267 | 실력 UP 구역(★4 출발)이지만 확인체크 129-251(원뿔 내접 원기둥, ★2)과 같은 「내접 입체 → 변수 하나」 계열 → ★3 으로 기록 | ★3 / ★4 |
| GN-CALC1-132-264 | ★4 라벨인데 통찰 유형이 I-EQV 하나뿐 → v3.8 §2.13 「★4 슬롯 저노출 유형 부재」 YELLOW. 정의역 누락 함정이 실질 난도를 올리지만 통찰 코드로는 안 잡힘 | ★3 / ★4 |
| GN-CALC1-130-252 | 계산량이 0 이라 M 이 낮게 나오지만 다루는 대상이 일반 함수의 그래프(Ma=3)라 M 축과 체감이 어긋남. 그림 선택지라 변형 재사용도 제한적 | ★2 / ★3 |
| 확인체크 8문 공통 | 이 단원에는 「개념원리 익히기」 구역이 없고 확인체크가 필수 예제 뒤에 붙는다. 벤더 신호표의 「확인체크 → ★1 출발」 을 그대로 쓰면 짝 예제와 2단이 벌어져, 짝 예제의 ★ 를 출발점으로 삼는 규칙으로 바꿨다(frontmatter judgment_protocol 에 기록) | ★1 / ★2 |

카탈로그 차원 메모(나중에 미적분Ⅰ 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「닫힌구간에서 다항함수의 최대·최소」(순수 계산, base ★1~2) 와 ② 「최대·최소 조건을 이용한 미정계수 결정」(역추적 + 부호 조건, base ★2)은 골조가 다르므로 분리한다. ②는 이 범위에서 6문으로 가장 많고, 미지수 개수(1개/2개)와 최고차 계수의 부호 조건 유무로 하위 유형이 갈린다.
- **활용(★2~3) 묶음**: 「실생활(이익·비용)」 3 · 「도형의 넓이」 2 · 「거리·거리의 제곱」 2 · 「입체의 부피」 4 는 모두 *상황 → 한 변수 함수* 라는 같은 골조(I-RT)를 쓴다. 카탈로그에서는 상위 유형 하나(최대·최소의 활용) 아래 소재별 하위 유형 넷으로 두는 편이 변형 설계에 유리하다. 다만 「거리의 제곱으로 바꾸기」(I-EQV)는 소재가 아니라 기법이므로 별도 표시가 필요하다.
- **통합해도 될 유형**: 「극값의 존재·부재 조건(판별식)」(130-253)과 「사차함수가 극솟값을 갖지 않을 조건」(131-260)은 *도함수의 부호 변화 횟수* 라는 한 뿌리다. 삼차/사차로 나누지 말고 「극값 개수 조건」 하나로 두고 차수를 파라미터로 두는 편이 낫다.
- **base ★ 후보**: ①~② ★2 · 활용 4종 ★2~3(부피·기하 설정이 두 단계면 ★3) · 「근의 분리」 ★3 · 「극값 개수 조건」 ★3~4 · 「합성함수 최솟값과 계수 범위」 ★4 · 「접선 기울기 매개변수 최소」 ★4. 이 범위에는 ★5 자격(통찰 3개 이상 + SC/VF/SYM/XU)을 갖춘 문항이 없다.
