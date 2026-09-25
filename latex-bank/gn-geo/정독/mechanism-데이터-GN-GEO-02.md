---
name: mechanism-데이터-GN-GEO-02
description: "개념원리 기하 02 타원의 방정식(1/1 · 35문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도)."
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: "개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo"
  section: "02 타원의 방정식"
  unit_code: GEO-02
  part: "1/1"
  extract_range: "24~32쪽 · 24-30~32-59"
  total_problems: 35
  unit_total: 35
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex"
  image_source: "latex-bank/gn-geo/figures/ (crops.json)"
---

# 개념원리 기하 · 02 타원의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 24~32쪽, 통번호 24-30~32-59 의 **35문항 전수**를 다룬다. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 17문(필수 예제 5 + 확인체크 12) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 4문이다. 단원 주제는 타원의 정의·표준형·평행이동과 정의의 활용(둘레·넓이·최대최소)이다.

벤더 난이도 신호는 구역과 태그로 읽었다. 「개념원리 익히기」 → ★1 출발, 「필수 예제」·그 뒤의 「확인체크」 → ★2 출발, 「연습문제 STEP 1」 → ★2, 「STEP 2」 → ★3, 「실력 UP」 → ★4 출발. 여기서 M_total·통찰로 ±1 조정했다. 확인체크 문항은 예제와 같은 층으로 보되 **통찰 0 이고 M_total ≤ 4 이면 ★1 로 내렸다**(25-34 · 25-35). 「평가원 기출」 태그는 통찰이 실제로 있을 때만 +0~1 로 반영했다. 유형 카탈로그가 없으므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다. `effective_star` 는 `star` 와 같게 두었다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. `depth_score` 는 `effective_depth` 의 평균이다. `insight_type` 은 `insights` 가 비어 있으면 절차형, 하나라도 있으면 통찰형이다. `anchor_status` 는 전부 null(앵커 지정 전), `novelty_score` 는 0 이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-24-30
  page: 24
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 초점의 좌표와 두 초점까지의 거리의 합이 주어진 타원의 방정식 구하기.
    ⑴⑵는 초점이 x축 위, ⑶⑷는 y축 위.
  category: "거리의 합 = 장축의 길이 → 장반축 → 나머지 반축 제곱 = 장반축 제곱 빼기 c 제곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의로 방정식 세우기(초점·거리의 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    거리의 합 2a 와 초점의 c 를 정의에 그대로 대입하는 한 단계. 계산은 제곱 뺄셈 한 번.
    ⑶⑷는 초점이 y축 위라 분모의 대소가 뒤집히는 표기 함정만 있다(T-표기).
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "거리의 합 = 2a → a^2 → 나머지 반축 제곱 = a^2 - c^2 → 초점이 놓인 축에 맞춰 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x^2}{36}+\dfrac{y^2}{27}=1$ ⑵ $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ ⑶ $\dfrac{x^2}{5}+\dfrac{y^2}{9}=1$ ⑷ $\dfrac{x^2}{24}+\dfrac{y^2}{49}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/24-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c 와 거리의 합 2a 를 바꿀 수 있다. 제약: a > c > 0 이어야 타원이 되고, a^2 - c^2 가 깔끔한 정수가 되도록 (c, a) 를 피타고라스 쌍이나 a^2 - c^2 가 완전제곱이 되는 쌍으로 고른다. 초점이 어느 축 위인지 반드시 소문항마다 섞는다."
    creative: "(1) 거리의 합 대신 장축의 길이 또는 한 꼭짓점의 좌표를 주기(★1 유지) (2) 초점 하나와 두 꼭짓점을 주고 나머지 초점을 묻기(★1~2) (3) 초점이 x축·y축 어느 쪽인지 밝히지 않고 '거리의 합이 2a 인 타원'만 주면 경우가 갈려 I-MI 가 생기고 ★2 로 오른다."
```

```yaml
- id: GN-GEO-24-31
  page: 24
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 타원의 방정식에서 초점의 좌표와 장축·단축의 길이를 구하고 그래프 그리기.
    ⑵는 4x^2+y^2=4 처럼 우변이 1 이 아닌 꼴.
  category: "표준형으로 정리 → 분모 대소로 장축의 축 판정 → c^2 = 큰 분모 빼기 작은 분모"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 표준형에서 초점·장축·단축 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵에서 양변을 4 로 나눠 우변을 1 로 만드는 정리 한 줄이 추가될 뿐 구조는 정의 확인.
    분모가 큰 쪽이 장축의 축이라는 판정이 유일한 함정(T-표기).
    익히기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "우변을 1 로 정리 → 분모 비교로 장축의 축 결정 → c^2 = 큰 분모 - 작은 분모 → 초점·장축·단축"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 초점의 좌표: $(8,\,0)$, $(-8,\,0)$, 장축의 길이: $20$, 단축의 길이: $12$ ⑵ 초점의 좌표: $(0,\,\sqrt{3})$, $(0,\,-\sqrt{3})$, 장축의 길이: $4$, 단축의 길이: $2$ (그래프는 생략)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-geo/items/24-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 차가 완전제곱이어야 초점이 정수로 떨어진다(100-36=64, 25-9=16, 169-25=144 등). ⑵처럼 우변이 1 이 아닌 꼴은 계수의 최소공배수를 우변으로 두면 정리가 깔끔하다."
    creative: "(1) 이심률이나 두 초점 사이의 거리를 추가로 묻기(★1 유지) (2) 분모 하나를 미지수로 두고 초점 좌표를 주어 역으로 구하게 하면 I-BW 가 생겨 ★2 (3) 그래프를 주고 방정식을 쓰게 하는 역방향 문항(★2)."
```

```yaml
- id: GN-GEO-24-32
  page: 24
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 평행이동된 타원의 중심·초점·꼭짓점의 좌표 구하기.
    ⑵는 16(x+5)^2+25y^2=400 처럼 우변이 1 이 아닌 꼴.
  category: "표준형 정리 → 중심 (m, n) 읽기 → 원점 타원의 초점·꼭짓점에 (m, n) 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 중심·초점·꼭짓점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심을 원점으로 되돌려 c 를 구한 뒤 다시 (m, n) 만큼 더하는 표준 절차. 단계는 서너 개지만 각 단계가 기계적이다.
    부호 함정(x+5 이면 중심의 x 는 -5)이 유일한 함정 카테고리(T-부호).
    익히기 구역 · 통찰 0 · M_total 5 → ★1 유지(하한).
  tier: star_1
  mechanism_primary: "우변 1 로 정리 → 중심 (m, n) → 원점 기준 c 계산 → 초점·꼭짓점에 (m, n) 평행이동"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 중심의 좌표: $(3,\,-1)$, 초점의 좌표: $(3,\,2\sqrt{3}-1)$, $(3,\,-2\sqrt{3}-1)$, 꼭짓점의 좌표: $(5,\,-1)$, $(1,\,-1)$, $(3,\,3)$, $(3,\,-5)$ ⑵ 중심의 좌표: $(-5,\,0)$, 초점의 좌표: $(-2,\,0)$, $(-8,\,0)$, 꼭짓점의 좌표: $(0,\,0)$, $(-10,\,0)$, $(-5,\,4)$, $(-5,\,-4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/24-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (m, n) 과 두 분모를 바꿀 수 있다. 제약: 분모의 차가 완전제곱(16-4=12 는 2루트3 이 되므로 무리수를 허용할지 정해야 함). 정수 초점을 원하면 (25, 16) · (169, 144) 쌍을 쓴다."
    creative: "(1) 중심이 원점이 아닌 타원의 장축·단축 길이도 함께 묻기(★1 유지) (2) 꼭짓점 네 개를 주고 방정식을 쓰게 하는 역방향(★2) (3) 평행이동 벡터를 미지수로 두고 초점 좌표를 주면 I-BW 로 ★2."
```

```yaml
- id: GN-GEO-24-33
  page: 24
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ 이차식 2x^2+3y^2-4x+12y+2=0 을 완전제곱으로 표준형으로 변형.
    ⑵ 그 타원의 중심·초점·꼭짓점의 좌표 구하기.
  category: "x·y 각각 완전제곱 → 우변 1 로 정리 → 중심·초점·꼭짓점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 이차식을 완전제곱하여 타원의 표준형으로 고치기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2, y^2 의 계수가 서로 다르므로 각각 묶어낸 뒤 완전제곱하고 우변으로 상수를 옮긴다. 계수가 2, 3 이라 계산 부담이 앞 세 문항보다 한 단 높다(M_k 2).
    변형 뒤는 24-32 와 같은 절차. 익히기 구역 ★1 출발이지만 완전제곱 정리 단계가 추가되고 M_total 6 이라 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "계수 묶기 → x·y 완전제곱 → 상수 이항 후 우변 1 → 중심·c → 초점·꼭짓점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{(x-1)^2}{6}+\dfrac{(y+2)^2}{4}=1$ ⑵ 중심의 좌표: $(1,\,-2)$, 초점의 좌표: $(\sqrt{2}+1,\,-2)$, $(-\sqrt{2}+1,\,-2)$, 꼭짓점의 좌표: $(\sqrt{6}+1,\,-2)$, $(-\sqrt{6}+1,\,-2)$, $(1,\,0)$, $(1,\,-4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/24-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2, y^2 의 계수와 일차항·상수항을 바꿀 수 있다. 제약: 완전제곱 후 우변이 양수여야 타원이 되고, 두 계수가 서로 달라야 원이 아니다. 분모가 정수로 떨어지도록 상수항을 역산해서 정한다."
    creative: "(1) 우변이 0 이나 음수가 되도록 상수항을 바꿔 '한 점' 또는 '도형 없음'을 판정하게 하면 I-VF 가 생겨 ★3 (2) 계수를 같게 만들어 원이 되는 조건을 묻기(★2) (3) 표준형으로 고친 뒤 장축·단축·이심률까지 묻기(★2 유지)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-25-e6
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 초점이 x축 위 (±2루트3, 0) 이고 장축의 길이가 10 인 타원의 방정식.
    ⑵ 타원 4x^2+9y^2=36 과 두 초점을 공유하고 장축의 길이가 2루트15 인 타원의 단축의 길이.
  category: "장축 → a, 초점 → c → b^2 = a^2 - c^2 / 초점 공유 → c^2 동일"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 초점을 공유한다'를 'c^2 이 같다'로 옮겨야 새 타원의 b^2 을 a^2 - c^2 로 계산할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 방정식(장축·초점 주어짐 · 초점 공유)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 a, c 대입 한 줄. ⑵가 이 예제의 본체로, 주어진 타원을 표준형으로 고쳐 c^2 = 9 - 4 = 5 를 뽑고 그 값을 새 타원에 그대로 옮기는 동치 변환이 필요하다.
    초점 공유 조건을 c^2 동일로 읽지 못하면 진행이 막히므로 I-EQV d1 하나를 센다.
    필수 예제 출발 ★2 · 통찰 1 d1 → ★2 유지.
  mechanism_primary: "장축의 길이 → a^2 → 초점(또는 공유 조건) → c^2 → b^2 = a^2 - c^2 → 단축 = 2b"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{x^2}{25}+\dfrac{y^2}{13}=1$ ⑵ $2\sqrt{10}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/25-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 타원의 계수(4, 9)와 새 장축의 길이를 바꿀 수 있다. 제약: 새 a^2 > 공유 c^2 여야 하고, a^2 - c^2 가 완전제곱이면 단축이 유리수로 떨어진다. 2루트15 처럼 무리수 장축을 쓰면 a^2 가 정수라 오히려 계산이 깔끔하다."
    creative: "(1) 초점 공유 대신 '단축을 공유한다'로 바꾸기(★2 유지) (2) 공유 초점 + 어떤 점을 지난다는 조건으로 주면 조건 두 개를 연립해야 해 I-CON 이 붙고 ★3 (3) 새 타원의 초점이 y축으로 바뀌도록 수치를 잡으면 축 판정이 갈려 I-MI 가 생긴다(★3)."
```

```yaml
- id: GN-GEO-25-34
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점이 (0, ±루트3) 이고 단축의 길이가 4 인 타원의 방정식 구하기.
  category: "초점이 y축 → 단축 → 작은 반축 → 큰 반축 제곱 = 작은 반축 제곱 더하기 c^2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식(초점이 y축 · 단축 주어짐)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 y축 위이므로 y 쪽 분모가 크고, 단축 4 에서 x 쪽 반축 2 를 얻은 뒤 큰 분모는 4 + 3 = 7.
    한 줄 계산이고 함정은 두 분모의 대소 방향 하나뿐(T-표기).
    확인체크 ★2 출발이나 통찰 0 · M_total 4 → -1 하여 ★1.
  tier: star_1
  mechanism_primary: "초점 축 판정 → 단축에서 작은 반축 → 큰 반축 제곱 = 작은 반축 제곱 + c^2 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{4}+\dfrac{y^2}{7}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/25-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 단축의 길이를 바꿀 수 있다. 제약: 둘 다 양수면 무조건 타원이 되므로 제약이 느슨하다. 분모가 정수가 되도록 c^2 을 정수로 잡는다."
    creative: "(1) 단축 대신 타원 위의 한 점을 주기(★1~2) (2) 초점이 x축인지 y축인지 밝히지 않고 '두 초점 사이의 거리가 2루트3'만 주면 I-MI 로 ★2 (3) 장축과 단축의 비를 주면 연립이 생겨 ★2."
```

```yaml
- id: GN-GEO-25-35
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 꼭짓점이 (±10, 0), (0, ±6) 인 타원의 두 초점 사이의 선분 FF'의 길이 구하기.
  category: "꼭짓점 → a, b → c^2 = a^2 - b^2 → FF' = 2c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점에서 초점 사이의 거리 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    꼭짓점 좌표가 곧 반축이므로 a = 10, b = 6, c = 8 이 한 줄에 나오고 답은 2c.
    FF' = c 가 아니라 2c 라는 것만 챙기면 된다(T-표기).
    확인체크 ★2 출발이나 통찰 0 · M_total 4 → -1 하여 ★1.
  tier: star_1
  mechanism_primary: "꼭짓점 좌표 → a, b → c = 루트(a^2 - b^2) → FF' = 2c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/25-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(a, b) 를 바꿀 수 있다. 제약: a^2 - b^2 가 완전제곱이어야 c 가 정수(10,6 → 8 / 13,5 → 12 / 5,3 → 4 / 25,7 → 24). 장축이 y축이 되도록 b > a 로 뒤집어도 된다."
    creative: "(1) FF' 대신 삼각형 F(0,b)F' 의 넓이나 둘레를 묻기(★2) (2) 꼭짓점 네 개 중 세 개만 주고 나머지를 먼저 찾게 하기(★1 유지) (3) FF' 의 값을 주고 꼭짓점을 역으로 구하게 하면 I-BW 로 ★2."
```

```yaml
- id: GN-GEO-25-36
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점이 (0, ±5) 이고 장축과 단축의 길이의 차가 2 인 타원 위의 점 P 에 대하여 PF + PF' 의 값 구하기.
  category: "PF + PF' = 장축의 길이 → 두 반축의 차와 제곱차를 합차공식으로 연립"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "반축의 차 1 과 제곱의 차 25 를 (차)(합) = 25 로 묶어 한 번에 두 반축을 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 정의(거리의 합 = 장축) · 장축과 단축의 관계식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 값 PF + PF' 는 정의상 장축의 길이이므로 타원의 식을 다 구할 필요가 없다. 큰 반축을 b, 작은 반축을 a 라 하면 b - a = 1 과 b^2 - a^2 = 25 가 나오고, 합차공식으로 b + a = 25 를 얻어 b = 13 을 한 번에 얻는다.
    두 조건을 곱의 꼴로 묶는 착안 하나(I-CON d1). 확인체크 ★2 출발 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "PF + PF' = 장축 → 반축의 차 1 · 제곱의 차 c^2 → 합차공식으로 큰 반축 → 장축 = 2b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/25-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 '차' 값을 바꿀 수 있다. 제약: 차 d 에 대해 (b-a) = d/2, b^2 - a^2 = c^2 이므로 c^2 이 d/2 로 나누어떨어져야 정수해가 나온다(c=5, 차=2 → 13, 12). c=13, 차=2 → 85, 84 처럼 커질 수 있으니 크기를 확인한다."
    creative: "(1) 차 대신 장축과 단축의 비(예: 13:12)를 주기(★2 유지) (2) '장축과 단축의 길이의 합'을 주면 연립이 이차식으로 바뀌어 ★3 (3) PF + PF' 대신 PF x PF' 의 최댓값을 묻게 하면 산술기하평균이 붙어 ★3(29-e10 골조)."
```

```yaml
- id: GN-GEO-26-e7
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    타원 x^2+4y^2-4x-24y+24=0 의 중심·초점·꼭짓점의 좌표와 장축·단축의 길이 구하기.
  category: "완전제곱 → 표준형 → 중심 평행이동량 → 원점 기준 c → 각 좌표에 중심 더하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 평행이동(일반형 → 표준형 → 중심·초점·꼭짓점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 항의 계수 4 를 묶고 완전제곱한 뒤 우변을 16 으로 만들어 분모 16, 4 를 얻는 표준 절차. 묻는 값이 다섯 종류라 옮겨 적을 양은 많지만 판단은 전부 기계적이다.
    중심을 다시 더하는 것을 잊는 부호 함정만 있다(T-부호).
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "계수 묶기 → 완전제곱 → 우변 1 → 중심 (2,3) · c = 2루트3 → 초점·꼭짓점에 중심 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '중심의 좌표: $(2,\,3)$, 초점의 좌표: $(2\sqrt{3}+2,\,3)$, $(-2\sqrt{3}+2,\,3)$, 꼭짓점의 좌표: $(6,\,3)$, $(-2,\,3)$, $(2,\,5)$, $(2,\,1)$, 장축의 길이: $8$, 단축의 길이: $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/26-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2, y^2 의 계수와 일차항을 바꿀 수 있다. 제약: 완전제곱 후 우변이 양수, 두 계수는 서로 달라야 하며, 분모의 차가 완전제곱이면 초점이 유리수로 떨어진다(25-9=16 등)."
    creative: "(1) 장축이 y축과 평행하도록 계수를 뒤집기(★2 유지) (2) 일차항 계수를 미지수로 두고 초점 좌표를 주어 역산하게 하면 I-BW 로 ★3 (3) 두 타원의 일반형을 주고 초점이 일치할 조건을 묻기(★3)."
```

```yaml
- id: GN-GEO-26-37
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 2x^2+3y^2-16x+6y+11=0 이 타원 x^2/12+y^2/8=1 을 (a, b) 만큼 평행이동한 것이고 초점이 (c, b), (d, b) 일 때 abcd 의 값 구하기.
  category: "완전제곱 → 평행이동량 (a, b) → 중심 기준 초점 → 네 값의 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 이동량과 초점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    26-e7 과 같은 완전제곱 절차로 (x-4)^2/12 + (y+1)^2/8 = 1 을 얻으면 이동량과 초점이 동시에 읽힌다. 분모가 원래 타원과 같다는 것이 검산 신호.
    c, d 를 어느 초점에 배당하든 곱은 같으므로 경우 분기는 없다. 계수 2, 3 을 묶는 계산 부담만 한 단 높다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "계수 묶기·완전제곱 → 중심 (4, -1) = (a, b) → c^2 = 12 - 8 → 초점 (6,-1),(2,-1) → abcd"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/26-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원본 타원의 두 분모와 이동량 (a, b) 를 정한 뒤 일반형의 일차항·상수항을 역산한다. 제약: 분모의 차가 완전제곱이어야 초점이 정수, 그리고 a, b 가 0 이 아니어야 곱이 0 이 되지 않는다."
    creative: "(1) abcd 대신 a+b+c+d 나 초점 사이의 거리를 묻기(★2 유지) (2) 이동 후 타원이 x축에 접할 조건을 묻게 하면 I-EQV 가 붙어 ★3 (3) 원본을 주지 않고 '어떤 타원을 평행이동한 것인가'만 묻기(★2)."
```

```yaml
- id: GN-GEO-26-38
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 9x^2+4y^2-54x-16y+61=0 의 두 초점 F, F' 에 대하여 삼각형 OFF' 의 넓이 구하기(O 는 원점).
  category: "완전제곱 → 중심·초점 → FF' 를 밑변, 원점에서 초점을 잇는 세로선까지의 거리를 높이로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 초점이 같은 세로선 x=3 위에 있음을 보고 넓이를 좌표 계산 대신 밑변 FF' x 높이 3 의 기하식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 타원의 초점과 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형은 (x-3)^2/4 + (y-2)^2/9 = 1 이라 장축이 y축과 평행하고 초점은 x=3 위에 위아래로 놓인다. 여기까지는 26-e7 절차.
    마지막에 두 초점이 세로선 위에 있다는 점을 써서 밑변 FF' = 2c, 높이는 원점에서 x=3 까지의 거리 3 으로 바로 넣는 전환이 한 번 필요하다(I-RT d1).
    확인체크 ★2 출발 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심 (3,2) · 장축 세로 · c = 루트5 → 밑변 FF' = 2루트5, 높이 3 → 넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/26-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심의 x좌표(= 높이)와 분모의 차(= c^2)를 바꿀 수 있다. 제약: 중심의 x가 0 이면 삼각형이 만들어지지 않고, 분모의 차가 완전제곱이어야 c 가 유리수. 장축을 가로로 두면 초점이 가로로 놓여 높이가 중심의 y좌표로 바뀐다."
    creative: "(1) 원점 대신 타원 위의 한 꼭짓점을 꼭짓점으로 삼기(★2 유지) (2) 삼각형 OFF' 의 넓이를 주고 상수항을 역산하게 하면 I-BW 로 ★3 (3) 두 초점과 원점이 한 직선 위에 오도록 계수를 잡아 '넓이가 0 인 경우'를 판정시키면 I-VF 로 ★3."
```

```yaml
- id: GN-GEO-27-e8
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 초점 F(6, 2), F'(0, 2) 에서의 거리의 합이 10 인 타원의 방정식 구하기.
  category: "두 초점의 중점 = 중심 → c, a → b^2 → 중심만큼 평행이동한 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의를 이용한 방정식(중심이 원점이 아닌 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 초점의 중점이 중심, 초점 사이 거리의 절반이 c, 거리의 합의 절반이 a 라는 세 대응을 차례로 쓰는 절차. 이 구역이 가르치는 표준 도구이므로 통찰로 세지 않는다.
    중심 (3, 2) 를 다시 식에 넣는 것을 빠뜨리는 부호 함정만 있다(T-부호).
    필수 예제 출발 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "초점의 중점 → 중심 (3,2) · c = 3 · a = 5 → b^2 = 16 → (x-3)^2/25 + (y-2)^2/16 = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{(x-3)^2}{25}+\dfrac{(y-2)^2}{16}=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/27-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초점의 좌표와 거리의 합을 바꿀 수 있다. 제약: 거리의 합 > 초점 사이 거리 여야 타원이 되고, a^2 - c^2 가 완전제곱이면 분모가 정수(c=3, a=5 → 16). 두 초점의 좌표는 한 성분이 같아야 축에 평행한 표준형이 된다."
    creative: "(1) 두 초점을 세로로 배치해 장축이 y축과 평행하게 하기(★2 유지) (2) 거리의 합 대신 타원이 지나는 한 점을 주면 두 거리의 합을 직접 계산해야 해 ★3 (3) 두 초점의 좌표에 문자를 섞어 조건을 만족하는 문자 범위를 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: GN-GEO-27-39
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 초점 F(2, 3), F'(2, -1) 에서의 거리의 합이 8 인 타원의 방정식 구하기.
  category: "초점이 세로로 배치 → 중점이 중심 → c, a → 세로 분모가 큰 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의를 이용한 방정식(초점이 세로 배치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27-e8 과 같은 골조이고 초점이 세로로 놓여 y 쪽 분모가 큰 형태가 된다는 점만 다르다. 중심 (2, 1), c = 2, a = 4 에서 나머지 분모 12.
    분모의 대소를 뒤집어 쓰는 표기 함정이 유일(T-표기).
    확인체크 ★2 출발 · 통찰 0 이지만 중심 이동 단계가 있어 M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "초점의 중점 → 중심 (2,1) · c = 2 · a = 4 → 나머지 분모 12 → 세로 분모 16 인 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{(x-2)^2}{12}+\dfrac{(y-1)^2}{16}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/27-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 x좌표(공통), 두 y좌표, 거리의 합을 바꿀 수 있다. 제약: 거리의 합 > 초점 사이 거리. a^2 - c^2 가 완전제곱일 필요는 없지만 분모가 정수여야 깔끔하다."
    creative: "(1) 초점 하나와 중심을 주고 나머지 초점을 찾게 하기(★2 유지) (2) 거리의 합을 미지수로 두고 타원이 특정 점을 지나게 하면 연립이 생겨 ★3 (3) 초점이 대각선으로 놓이게 하면 축에 평행하지 않은 타원이 되어 교육과정 밖으로 나간다 - 변형 금지."
```

```yaml
- id: GN-GEO-27-40
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 F(5, 5), F'(1, 5) 를 초점으로 하고 장축의 길이가 6 인 타원의 방정식 구하기.
  category: "장축의 길이 = 거리의 합 → 중점이 중심 → c, a → b^2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의를 이용한 방정식(장축의 길이 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27-e8 과 같되 거리의 합 대신 장축의 길이로 주어졌다. 장축 = 거리의 합이라는 대응만 쓰면 중심 (3, 5), c = 2, a = 3, b^2 = 5.
    b^2 이 완전제곱이 아니어서 분모에 무리수가 아닌 5 가 그대로 남는 것을 확인하면 된다(T-표기).
    확인체크 ★2 출발 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "장축 6 → a = 3 → 중심 (3,5) · c = 2 → b^2 = 5 → (x-3)^2/9 + (y-5)^2/5 = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{(x-3)^2}{9}+\dfrac{(y-5)^2}{5}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/27-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초점의 위치와 장축의 길이를 바꿀 수 있다. 제약: 장축 > 초점 사이 거리. b^2 = a^2 - c^2 가 정수면 충분하고 완전제곱일 필요는 없다."
    creative: "(1) 장축 대신 단축의 길이를 주면 b 에서 a 를 역산해야 해 방향이 한 번 뒤집힌다(★2 유지) (2) 타원 위의 점과 초점 하나까지의 거리를 주고 나머지 거리를 묻기(★2) (3) 장축의 길이를 미지수로 두고 타원이 원점을 지날 조건을 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: GN-GEO-28-e9
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (1, 0) 을 지나는 직선이 타원 x^2/9+y^2/8=1 과 만나는 두 점을 A, B 라 할 때 점 C(-1, 0) 에 대하여 삼각형 ABC 의 둘레의 길이 구하기.
  category: "(±1, 0) 이 두 초점임을 확인 → 둘레를 두 벌의 초점거리 합으로 분해 → 4a"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘레 AB + BC + CA 를 (AF + AC) + (BF + BC) 로 쪼개 각 괄호를 정의상 장축의 길이 2a 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "타원의 정의의 활용(초점을 지나는 현과 삼각형의 둘레)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c^2 = 9 - 8 = 1 이므로 (1, 0) 과 C(-1, 0) 이 두 초점이다. 직선의 기울기가 주어지지 않았는데도 답이 정해진다는 점이 곧 정의로 풀라는 신호.
    AB 를 AF + FB 로 쪼개고 짝을 지어 두 벌의 2a 로 묶는 재조직이 핵심(I-EQV d2). 계산은 4a = 12 한 줄.
    필수 예제 출발 ★2 · 통찰 1 d2 → +1 조건(통찰 2개 이상 또는 depth 3) 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "c = 1 → (±1,0) 이 초점 → 둘레 = (AF+AF') + (BF+BF') = 4a = 12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "본문 풀이"
  figure: crop:fig-28-e9.png
  latex: latex-bank/gn-geo/items/28-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 직선이 지나는 점과 C 가 반드시 두 초점이어야 하므로 분모의 차가 완전제곱이어야 좌표가 정수(9-8=1, 25-16=9, 16-7=9). 답은 항상 4a 이므로 장반축만 정하면 된다."
    creative: "(1) 둘레 대신 삼각형의 넓이를 묻게 하면 직선의 기울기가 필요해져 정의만으로는 안 풀린다(★4) (2) 초점을 지나는 현 AB 의 길이를 주고 AC + BC 를 묻기(★3) (3) 평행이동한 타원으로 옮겨 초점 좌표를 먼저 찾게 하면 ★3."
```

```yaml
- id: GN-GEO-28-41
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x^2/12+y^2/4=1 의 두 초점 F, F' 과 타원 위의 두 점 P, Q 에 대하여 사각형 PF'QF 의 둘레의 길이 구하기.
  category: "사각형의 네 변을 두 점의 초점거리 합 두 벌로 묶기 → 4a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 PF' + F'Q + QF + FP 를 (PF + PF') + (QF + QF') 로 재배열해 각각 2a 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 정의의 활용(초점을 꼭짓점으로 하는 사각형의 둘레)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 변이 이미 초점과 타원 위의 점을 잇는 선분이라 28-e9 보다 재배열이 직접적이다. P, Q 의 위치가 주어지지 않아도 답이 정해진다.
    a = 2루트3 이므로 둘레 4a = 8루트3. 계산 한 줄.
    확인체크 ★2 출발 · 통찰 1 d1(예제에서 본 골조의 직접 반복) → ★2 유지.
  tier: star_2
  mechanism_primary: "사각형의 네 변 → (PF+PF') + (QF+QF') = 4a = 8루트3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{3}$'
  answer_source: "답지"
  figure: crop:fig-28-41.png
  latex: latex-bank/gn-geo/items/28-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 답이 4a 이므로 큰 분모가 완전제곱이면 유리수로 떨어진다(16 → 16, 9 → 12). 작은 분모는 답에 영향이 없어 자유롭다."
    creative: "(1) 점을 세 개로 늘려 육각형의 둘레를 묻기(★2 유지, 답 = 6a) (2) 사각형 PF'QF 가 평행사변형일 조건이나 그 넓이를 묻게 하면 좌표가 필요해져 ★3~4 (3) 한 변의 길이를 주고 나머지 한 변을 묻기(★2)."
```

```yaml
- id: GN-GEO-28-42
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 4x^2+9y^2=36 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 각 FPF' 가 90도일 때 삼각형 PF'F 의 넓이 구하기.
  category: "정의로 두 변의 합 → 직각으로 두 변의 제곱의 합 → 곱셈공식으로 곱 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각이 90도라는 기하 조건을 PF^2 + PF'^2 = FF'^2 이라는 대수식으로 전환"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 2a 와 제곱의 합 4c^2 두 조건을 (합)^2 전개로 묶어 직접 구할 수 없는 곱 PF x PF' 를 한 번에 뽑음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "타원의 정의의 활용(초점삼각형이 직각일 때의 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표준형 x^2/9 + y^2/4 = 1 에서 a = 3, c = 루트5. 두 변의 길이를 각각 구하려 하면 이차연립으로 빠지지만, 넓이는 곱만 있으면 되므로 (합)^2 - (제곱의 합) = 2(곱) 을 쓴다.
    직각을 대수식으로 옮기는 전환 하나와 두 식을 곱의 꼴로 묶는 착안 하나, 통찰 2개.
    확인체크 ★2 출발 · 통찰 2개 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "PF+PF' = 2a · PF^2+PF'^2 = 4c^2 → 곱셈공식으로 PF x PF' = 8 → 넓이 = 곱의 절반"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: crop:fig-28-42.png
  latex: latex-bank/gn-geo/items/28-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 두 계수를 바꿀 수 있다. 제약: (2a)^2 - (2c)^2 = 4b^2 이므로 넓이는 항상 b^2 이 된다 - 즉 작은 분모가 곧 답이라 수치를 정할 때 이 항등식을 의식해야 한다. 각도를 90도로 두는 한 답은 b^2 으로 고정된다."
    creative: "(1) 각을 60도나 120도로 바꾸면 코사인법칙이 필요해 ★4 (2) 넓이를 주고 타원의 계수를 역산하게 하면 I-BW 로 ★3~4 (3) 직각인 점 P 가 실제로 존재할 조건(b <= c)을 함께 묻게 하면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-GEO-29-e10
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    타원 x^2/16+y^2/9=1 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 PF x PF' 의 최댓값 구하기.
  category: "정의로 합이 일정 → 산술기하평균으로 곱의 최대 → 등호 조건 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "타원의 정의(합이 2a 로 일정)를 대수 단원의 산술평균과 기하평균 관계로 넘겨 곱의 최댓값을 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "타원의 정의의 활용 - 두 초점거리의 곱의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 거리를 각각 구하려 하지 않고 '합이 8 로 일정한 두 양수의 곱'이라는 구조만 남기는 것이 골조. 산술기하평균에서 곱은 두 값이 같을 때 최대이고 그때 각각 4.
    기하의 정의와 대수의 평균 부등식을 잇는 단원 경계 결합 하나(I-XU d2). 등호 성립점이 타원 위(단축 끝)에 실제로 있는지 확인이 따라온다.
    필수 예제 출발 ★2 · 통찰 1 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "PF + PF' = 2a = 8 → 산술기하평균 → 곱의 최대는 두 거리가 같을 때 a^2 = 16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/29-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 답이 항상 a^2(큰 분모)이 되므로 수치 변형의 자유도가 낮다. 최솟값을 묻는다면 (a-c)(a+c) = b^2 이 되어 작은 분모가 답이 된다."
    creative: "(1) 곱의 최솟값을 묻기(답이 b^2, ★2 유지) (2) PF^2 + PF'^2 의 최대·최소를 묻게 하면 (합)^2 - 2(곱) 으로 한 단계 더 들어가 ★3 (3) 삼각형 PFF' 의 넓이의 최댓값으로 바꾸면 높이 관점이 더 빠른 갈래가 되어 I-SC 가 생기고 ★3~4."
```

```yaml
- id: GN-GEO-29-43
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 2x^2+y^2=6 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 PF x PF' 의 최댓값 구하기.
  category: "표준형 정리 → 합이 일정 → 산술기하평균 → 최댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합이 일정한 두 양수의 곱의 최대를 산술기하평균으로 처리(예제 29-e10 의 직접 반복이라 depth 1)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 정의의 활용 - 두 초점거리의 곱의 최대"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변을 6 으로 나눠 x^2/3 + y^2/6 = 1 로 고치면 장축이 y축 방향이고 장반축은 루트6, 합은 2루트6, 곱의 최대는 그 절반의 제곱인 6.
    예제와 같은 골조의 반복이므로 통찰 깊이는 1 로 감쇠. 장축의 축이 바뀐다는 표기 함정이 추가된다(T-표기).
    확인체크 ★2 출발 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "우변 1 로 정리 → 장반축 루트6 → 합 2루트6 → 곱의 최대 = 장반축의 제곱 = 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/29-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (2, 1) 과 우변 6 을 바꿀 수 있다. 제약: 답은 큰 분모이므로 우변을 계수의 배수로 잡아 분모가 정수가 되게 한다(3x^2+y^2=12 → 답 12)."
    creative: "(1) 곱의 최솟값(= 작은 분모)을 묻기(★2 유지) (2) PF x PF' 의 값을 주고 P 의 좌표를 구하게 하면 I-BW 로 ★3 (3) 초점 대신 두 꼭짓점까지의 거리의 곱으로 바꾸면 정의가 안 통해 좌표계산이 필요해지고 ★3."
```

```yaml
- id: GN-GEO-29-44
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x^2/25+y^2/16=1 위의 제1사분면 위의 점 P(a, b) 에 대하여 ab 의 최댓값 구하기.
  category: "타원의 방정식 두 항에 산술기하평균 → 곱의 상계 → 등호 조건"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "타원 위의 점이라는 조건식 자체를 '두 양수의 합이 1'로 보고 산술기하평균을 적용해 ab 의 상계를 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "타원 위의 점에서 두 좌표의 곱의 최대(산술기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 를 따로 구하려 하면 매개변수가 필요하지만, a^2/25 + b^2/16 = 1 을 두 항의 합으로 보면 곱의 형태가 바로 나온다. 제1사분면 조건이 등호 성립과 부호 판정을 보장한다(T-범위).
    조건식을 부등식의 재료로 쓰는 단원 경계 결합 하나(I-XU d2).
    확인체크 ★2 출발 · 통찰 1 d2 → ★2 유지. 등호 조건 확인까지 요구하면 ★3 후보.
  tier: star_2
  mechanism_primary: "a^2/25 + b^2/16 = 1 에 산술기하평균 → ab 의 상계 → 등호는 두 항이 각각 1/2 일 때"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/29-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 답은 두 반축의 곱이므로 분모가 완전제곱이면 정수로 떨어진다(25·16 → 20의 절반인 10). 제1사분면 조건을 빼면 부호 때문에 최댓값 판정이 달라진다."
    creative: "(1) a + b 나 3a + 4b 의 최댓값으로 바꾸면 코시-슈바르츠 또는 매개변수 치환이 필요해 ★3 (2) 사분면 제한을 없애고 |ab| 의 최댓값을 묻기(★2 유지) (3) 점 P 에서의 접선이 두 축과 이루는 삼각형의 넓이의 최소로 확장하면 ★4."
```

```yaml
- id: GN-GEO-29-45
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x^2/9+y^2/4=1 에 내접하고 각 변이 x축 또는 y축에 평행한 직사각형 ABCD 의 넓이의 최댓값 구하기.
  category: "대칭성으로 넓이를 4xy 로 축약 → 타원식에 산술기하평균 → 최댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축에 평행한 내접 직사각형은 두 축에 대해 대칭이므로 제1사분면의 한 꼭짓점 (x, y) 만으로 넓이 4xy 가 결정됨"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^2/9 + y^2/4 = 1 을 두 항의 합으로 보고 산술기하평균으로 xy 의 상계를 얻음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "타원에 내접하는 직사각형의 넓이의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    29-44 의 골조에 '넓이를 한 꼭짓점으로 환원하는' 대칭 단계가 앞에 붙은 형태. 꼭짓점 네 개를 각각 다루면 미지수가 늘지만 대칭을 쓰면 변수 둘로 줄어든다.
    이후는 산술기하평균으로 xy 의 최대를 얻고 4 를 곱한다. 통찰 2개(SYM d1 + XU d2).
    확인체크 ★2 출발 · 통찰 2개 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "대칭으로 넓이 = 4xy → 타원식에 산술기하평균 → xy 의 최대 → 넓이 = 4ab 의 절반인 2ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12$'
  answer_source: "답지"
  figure: crop:fig-29-45.png
  latex: latex-bank/gn-geo/items/29-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿀 수 있다. 제약: 최댓값은 항상 2ab(반축의 곱의 2배)이므로 분모가 완전제곱이면 정수(9·4 → 12, 16·9 → 24). 등호는 x = a/루트2, y = b/루트2 에서 성립한다."
    creative: "(1) 넓이 대신 둘레의 최댓값을 묻게 하면 코시-슈바르츠나 삼각치환이 필요해 ★4 (2) 직사각형 대신 내접 삼각형(한 변이 장축)으로 바꾸기(★3) (3) 변이 축에 평행하다는 제한을 빼면 교육과정을 넘으므로 변형 금지."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-30-46
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    타원 x^2/a^2+y^2/9=1 의 장축의 길이가 단축의 길이의 2배가 되도록 하는 모든 양수 a 의 값의 합 구하기.
  category: "a 와 3 의 대소로 장축이 갈림 → 두 경우 각각 방정식 → 두 해의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "a 가 3보다 큰지 작은지에 따라 장축이 x축 쪽인지 y축 쪽인지 갈리고 두 경우 모두 답에 들어감 - '모든 a 의 합'이라는 물음이 분기가 둘임을 알려주는 신호"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "장축과 단축의 관계식에서 미지 반축 구하기(축 방향 경우 나누기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a > 3 이면 장축 2a, 단축 6 이라 2a = 12 에서 a = 6. a < 3 이면 장축 6, 단축 2a 라 6 = 4a 에서 a = 3/2. 계산은 각각 한 줄뿐이지만 분기를 놓치면 답이 6 으로 절반만 나온다.
    a = 3 은 원이 되어 제외되는 경계도 함께 확인해야 한다(T-경계 · T-범위).
    STEP 1 출발 ★2 · 통찰 1 이지만 depth 3(분기를 스스로 발견해야 하고 놓치면 오답) → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "a 와 3 의 대소로 경우 나누기 → 각 경우 장축 = 2 x 단축 방정식 → 두 해 6 과 3/2 의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{15}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/30-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 분모 9 와 배수 2 를 바꿀 수 있다. 제약: 배수 k 에 대해 두 해는 3k 와 3/k 이므로 k 를 정수로 두면 한 해가 분수가 된다. 두 해가 모두 정수가 되게 하려면 고정 분모를 k 의 배수의 제곱으로 잡는다."
    creative: "(1) '장축이 단축의 2배'를 '두 초점 사이의 거리가 장축의 절반'처럼 이심률 조건으로 바꾸기(★3 유지) (2) 분기 중 하나가 조건 위배로 기각되게 수치를 잡으면 I-VF 가 붙어 ★4 (3) 값의 합 대신 곱을 묻기(★3 유지, 답은 9)."
```

```yaml
- id: GN-GEO-30-47
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    타원 x^2/15+y^2/40=1 과 두 초점이 일치하고 점 (0, 10) 을 지나는 타원의 단축의 길이 구하기.
  category: "원 타원의 c^2 → 초점 일치로 그대로 옮김 → 지나는 점이 세로 꼭짓점 → 나머지 분모"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 초점이 일치한다'를 'c^2 이 같다'(그리고 초점이 y축 위라 세로 분모가 크다)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 공유하는 타원의 방정식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원 타원의 c^2 = 40 - 15 = 25 이고 초점이 y축 위. 점 (0, 10) 은 y축 위의 꼭짓점이므로 새 타원의 세로 분모가 100 이고, 가로 분모는 100 - 25 = 75.
    단축은 가로 쪽이므로 2루트75 = 10루트3. 초점 일치 조건을 c^2 동등으로 읽는 착안 하나(I-EQV d1).
    STEP 1 출발 ★2 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "c^2 = 40 - 15 = 25 → 새 타원의 세로 분모 100 → 가로 분모 75 → 단축 = 2루트75"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/30-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 타원의 두 분모와 지나는 점의 좌표를 바꿀 수 있다. 제약: 새 세로 분모 > 공유 c^2 여야 타원이 되고, 그 차가 완전제곱이면 단축이 유리수로 떨어진다(100-25=75 는 무리수로 남으므로 100-36=64 같은 쌍을 쓰면 정수)."
    creative: "(1) 지나는 점을 꼭짓점이 아닌 일반점으로 주면 두 분모를 연립해야 해 ★3 (2) 초점 일치 + 장축의 길이 조건으로 바꾸기(25-e6⑵ 골조, ★2 유지) (3) 초점을 공유하는 포물선이나 쌍곡선으로 넘기면 I-XU 가 생겨 ★4."
```

```yaml
- id: GN-GEO-30-48
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 초점이 F, F' 인 타원 x^2/a^2+y^2/b^2=1 의 한 꼭짓점 A 에 대하여 삼각형 AF'F 가 한 변의 길이 6 인 정삼각형일 때 a^2+b^2 의 값 구하기.
  category: "FF' = 6 으로 c → 단축 꼭짓점에서 두 초점까지가 같고 그 값이 a → b^2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정삼각형의 꼭짓점 A 는 두 초점에서 등거리이므로 단축의 끝점이고, 그때 AF = AF' = 장반축 a 라는 대칭 관계를 씀"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "초점과 꼭짓점이 이루는 삼각형 조건에서 반축 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    FF' = 2c = 6 에서 c = 3. A 는 두 초점에서 같은 거리이므로 단축의 끝점이고, 정의에서 AF + AF' = 2a 이면서 둘이 같으므로 AF = a = 6.
    따라서 b^2 = a^2 - c^2 = 27 이고 a^2 + b^2 = 63. 대칭 관계 하나로 좌표 계산 없이 끝난다(I-SYM d2).
    STEP 1 출발 ★2 · 통찰 1 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "FF' = 6 → c = 3 → A 는 단축 끝점이고 AF = a = 6 → b^2 = 27 → a^2 + b^2 = 63"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$63$'
  answer_source: "답지"
  figure: crop:fig-30-48.png
  latex: latex-bank/gn-geo/items/30-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정삼각형의 한 변 길이 L 을 바꿀 수 있다. 제약: c = L/2, a = L 이므로 b^2 = 3L^2/4 이고 답은 7L^2/4 - L 이 짝수여야 정수로 떨어진다(L=6 → 63, L=4 → 28)."
    creative: "(1) 정삼각형 대신 직각이등변삼각형으로 바꾸면 a = 루트2 c 가 되어 ★2~3 (2) 꼭짓점 A 를 장축의 끝점으로 두면 삼각형이 선분으로 무너지므로 '왜 불가능한가'를 묻는 I-VF 문항이 된다(★3) (3) 삼각형의 넓이를 주고 a, b 를 역산하게 하면 I-BW 로 ★3."
```

```yaml
- id: GN-GEO-30-49
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    타원 4x^2-24x+16y^2-64y+84=0 에 대한 다섯 개의 설명 중 옳은 것 고르기(장축의 방향, 중심, 초점 사이의 거리, 장축과 단축의 비, 거리의 합).
  category: "완전제곱으로 표준형 → 중심·장축의 축·장단축·c 를 구해 선택지 다섯 개를 차례로 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 일반형에서 성질 판정(참·거짓 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 (x-3)^2/4 + (y-2)^2/1 = 1 을 만들면 중심 (3, 2), 장축은 x축 평행이고 길이 4, 단축 2, c^2 = 3.
    선택지를 하나씩 대조하는 절차형이며, 거리의 합이 장축의 길이(4)라는 정의를 마지막 선택지에서 다시 확인한다. 중심의 좌표 부호와 '2배 vs 4배' 같은 표기 함정이 있다(T-표기).
    STEP 1 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심 (3,2) · 장축 4(가로) · 단축 2 · 2c = 2루트3 → 선택지 다섯 개 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/30-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 일차항을 바꿔 중심과 두 분모를 재배치할 수 있다. 제약: 완전제곱 후 우변이 양수여야 하고, 정답 선택지가 하나만 참이 되도록 다섯 문장의 수치를 다시 맞춰야 한다 - 수치 변형 시 선택지 전체를 재검토해야 하는 유형."
    creative: "(1) 옳은 것을 모두 고르는 ㄱㄴㄷ 보기로 바꾸면 I-VF 성격이 붙어 ★3 (2) 틀린 설명 하나를 옳게 고치라고 하면 서술형이 된다(★3) (3) 일반형의 상수항을 미지수로 두고 '타원이 되도록 하는 범위'를 묻기(★3)."
```

```yaml
- id: GN-GEO-30-50
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 F(0, 6), F'(0, -6) 을 초점으로 하는 타원 x^2/a^2+y^2/b^2=1 이 F 를 지나는 직선과 만나는 두 점을 A, B 라 할 때 삼각형 ABF' 의 둘레가 36 이면 a^2+b^2 의 값 구하기.
  category: "초점현 삼각형의 둘레 = 4b(장반축의 4배) → 장반축 → a^2 = b^2 - c^2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘레 AB + BF' + F'A 를 (AF + AF') + (BF + BF') 로 재배열해 4 x 장반축으로 바꿈 - 직선의 기울기 없이 답이 정해지는 이유"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "타원의 정의의 활용(초점을 지나는 현과 삼각형의 둘레) - 역으로 반축 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    28-e9 의 골조를 뒤집은 형태. 둘레 36 = 4 x 장반축에서 장반축 9, 초점이 y축 위이므로 b = 9, c = 6 이고 a^2 = 81 - 36 = 45.
    28-e9 와 달리 둘레가 주어지고 반축을 역산하므로 방향이 한 번 뒤집힌다. 세로 분모가 크다는 표기 함정 포함(T-표기).
    STEP 1 출발 ★2 · 통찰 1 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "둘레 = 4 x 장반축 = 36 → b = 9 → c = 6 → a^2 = 45 → a^2 + b^2 = 126"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$126$'
  answer_source: "답지"
  figure: crop:fig-30-50.png
  latex: latex-bank/gn-geo/items/30-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c 와 둘레를 바꿀 수 있다. 제약: 둘레는 4 의 배수여야 장반축이 유리수이고, 장반축 > c 여야 타원이 된다. c^2 을 빼서 나머지 분모가 정수로 남는지 확인한다."
    creative: "(1) 둘레 대신 삼각형 ABF' 의 넓이를 주면 기울기가 필요해져 ★4 (2) 초점을 x축 위로 옮겨 분모의 대소를 바꾸기(★2 유지) (3) 직선이 초점을 지나지 않게 하면 정의가 안 통해 좌표계산으로 바뀌고 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-31-51
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    타원 x^2/16+y^2/7=1 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 PF' : PF = 3 : 1 일 때 삼각형 PFF' 의 넓이 구하기.
  category: "정의로 두 거리의 합 → 비로 각 거리 확정 → 세 변을 아는 삼각형의 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비 조건 3:1 과 정의의 합 2a = 8 을 묶어 PF' = 6, PF = 2 로 두 거리를 한 번에 확정(좌표를 구하지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "초점삼각형에서 두 초점거리의 비가 주어질 때의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 의 좌표를 구하려 하면 이차연립으로 번지지만, 정의의 합 8 과 비 3:1 을 묶으면 세 변 6, 2, 6(= FF' = 2c = 6, c^2 = 16 - 7 = 9)이 바로 나온다.
    세 변을 아는 삼각형이므로 헤론 공식 또는 수선의 길이로 넓이를 낸다. 여기서부터는 계산 절차.
    STEP 2 출발 ★3 · 통찰 1 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: "PF + PF' = 8 · 비 3:1 → PF' = 6, PF = 2 · FF' = 6 → 세 변으로 넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/31-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모와 비를 바꿀 수 있다. 제약: 비로 나눈 각 거리가 a - c 이상 a + c 이하여야 그런 P 가 실제로 존재한다. 분모의 차가 완전제곱이면 FF' 가 정수(16-7=9)이고, 넓이가 유리수로 떨어지려면 세 변이 정수 삼각형이어야 한다."
    creative: "(1) 넓이 대신 코사인 값이나 각의 크기를 묻기(코사인법칙, ★3 유지) (2) 비를 미지수로 두고 넓이의 최댓값을 묻게 하면 I-SC 가 붙어 ★4 (3) 비 조건이 성립할 수 있는 비의 범위를 묻게 하면 I-VF 로 ★4."
```

```yaml
- id: GN-GEO-31-52
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    장축의 길이가 각각 20, 32 인 두 타원이 초점 F 를 공유하고 두 점 A, B 에서 만날 때, 나머지 두 초점 F1, F2 에 대하여 |AF1 - AF2| + |BF1 - BF2| 의 값 구하기.
  category: "공유 초점까지의 거리를 매개로 두 정의식을 빼서 소거 → 차는 장축의 차"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AF + AF1 = 20 과 AF + AF2 = 32 를 공유하는 AF 를 소거하도록 빼서 AF2 - AF1 = 12 를 얻음 - 타원의 위치·모양을 몰라도 차가 결정됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 초점을 공유하는 두 타원에서 정의식의 차 이용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림이 없고 두 타원의 방정식도 주어지지 않아 좌표로 접근하면 길이 막힌다. 두 정의식에서 공통으로 등장하는 AF 를 빼서 없애는 한 수가 전부.
    B 에서도 같은 식이 성립하므로 각 절댓값이 12 이고 합은 24. 계산은 뺄셈 한 번(M_k 1)이지만 추상도가 높다(M_a 2).
    STEP 2 출발 ★3 · 통찰 1 d2 → ★3 유지. 좌표 없이 관계만으로 끝낸다는 점에서 ★4 후보이기도 하다.
    [분류 이슈] 계산 부담은 STEP 1 급이나 도형을 상상해 조건을 세우는 진입 저항이 커 ★3 / ★4 사이.
  tier: star_3
  mechanism_primary: "AF + AF1 = 20 · AF + AF2 = 32 → 빼서 AF2 - AF1 = 12 → B 도 동일 → 합 24"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/31-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 장축의 길이를 바꿀 수 있다. 제약: 답은 (큰 장축 - 작은 장축) 의 2배이므로 두 값의 차만 답을 정한다. 두 타원이 실제로 두 점에서 만나도록 장축의 차가 너무 크지 않아야 한다."
    creative: "(1) 타원 하나를 쌍곡선으로 바꾸면 합과 차가 섞여 I-XU 가 붙고 ★4 (2) |AF1 - AF2| 대신 AF1 + AF2 를 묻게 하면 AF 가 남아 추가 조건이 필요해진다(★4) (3) 교점이 한 점뿐인(접하는) 경우를 함께 판정시키면 I-VF 로 ★4."
```

```yaml
- id: GN-GEO-31-53
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    타원 5x^2+9y^2=45 와 포물선 y^2=8x 가 제1사분면에서 만나는 점 P, P 에서 직선 x=-2 에 내린 수선의 발 Q, 직선 x=-2 와 x축의 교점 A 에 대하여 AP + PQ 의 값 구하기.
  category: "포물선의 준선·초점과 타원의 두 초점이 겹침을 확인 → 두 길이를 초점거리로 전환 → 장축"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "포물선 y^2=8x 의 초점 (2,0) 과 준선 x=-2 가 타원 x^2/9+y^2/5=1 의 두 초점 (±2, 0) 및 A(-2,0) 과 정확히 맞물린다는 두 단원의 결합을 알아챔"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PQ(준선까지의 거리)를 포물선의 정의로 PF(초점까지의 거리)로 바꾸고, AP 는 타원의 다른 초점까지의 거리 PF' 로 읽음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "포물선과 타원의 정의를 함께 쓰는 길이의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    타원을 표준형으로 고치면 c = 2 라 초점이 (±2, 0). 포물선의 초점도 (2, 0), 준선은 x = -2 이고 A 가 바로 (-2, 0).
    준선거리 PQ 를 포물선 정의로 PF 로 바꾸면 AP + PQ = PF' + PF = 2 x 3 = 6 이 되어 교점 P 를 실제로 구할 필요가 없다.
    수치가 맞물려 있다는 것을 알아채는 것이 전부이고, 놓치면 사차식 연립으로 빠진다. 통찰 2개(XU + RT) → STEP 2 출발 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "타원 c = 2 · 포물선 초점 (2,0) · 준선 x = -2 = A → PQ = PF, AP = PF' → 합 = 2a = 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: crop:fig-31-53.png
  latex: latex-bank/gn-geo/items/31-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 계수와 포물선의 계수를 바꿀 수 있다. 제약: 포물선 y^2 = 4px 의 초점 (p, 0) 과 준선 x = -p 가 타원의 초점 (±c, 0) 과 일치해야 하므로 p = c 가 강한 제약이다. 타원의 분모 차가 p^2 이 되도록 잡는다(9-5=4=2^2)."
    creative: "(1) A 를 준선 위의 다른 점으로 옮기면 정의가 안 통해 좌표계산이 되고 ★4~5 (2) 포물선을 쌍곡선으로 바꿔 초점을 공유시키기(★4) (3) AP + PQ 의 최솟값을 묻는 형태로 바꾸면 P 가 자유롭게 움직여 I-SC 가 붙고 ★4."
```

```yaml
- id: GN-GEO-31-54
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 점 F(c, 0), F'(-c, 0) 을 초점으로 하고 장축의 길이가 12 인 타원에서, F 를 중심으로 원점을 지나는 원이 타원과 만나는 점 P 에서의 접선이 F' 을 지날 때 c 의 값 구하기.
  category: "접선과 반지름의 수직 → 직각삼각형 → 두 초점거리를 c 로 표현 → 정의의 합에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'P 에서의 접선이 F' 을 지난다'를 '각 FPF' 가 90도'로 옮겨 직각삼각형 FPF' 를 만듦(접선은 접점에서 반지름과 수직)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원의 반지름이 OF = c 라는 것과 FF' = 2c 를 결합해 PF = c, PF' = 루트3 c 로 두 초점거리를 모두 c 하나로 표현한 뒤 정의의 합 12 에 대입"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점을 중심으로 하는 원과 접선 조건에서 c 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    원이 원점을 지나므로 반지름은 c 이고 PF = c. 접선 조건에서 직각이 나오므로 PF' 는 빗변 2c 와 변 c 로부터 루트3 c.
    정의에서 PF + PF' = 12 이므로 c(1 + 루트3) = 12 이고 분모를 유리화한다. 두 통찰이 각각 조건 하나씩을 대수식으로 바꾸는 역할.
    STEP 2 출발 ★3 · 통찰 2개 → +1 하여 ★4. 유리화 계산이 마지막에 붙는다(T-표기).
  tier: star_4
  mechanism_primary: "반지름 = c = PF · 접선으로 각 FPF' = 90도 → PF' = 루트3 c → c + 루트3 c = 12 → c 유리화"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6(\sqrt{3}-1)$'
  answer_source: "답지"
  figure: crop:fig-31-54.png
  latex: latex-bank/gn-geo/items/31-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "장축의 길이만 바꿀 수 있다. 제약: 원이 원점을 지난다는 조건이 반지름을 c 로 고정하므로 비율 PF : PF' : FF' = 1 : 루트3 : 2 가 항상 유지되고, 답은 (장축)/(1+루트3) 으로 정해진다. 장축을 12 의 배수로 잡으면 유리화 후 계수가 정수."
    creative: "(1) 원의 반지름을 c 가 아닌 다른 값 r 로 주면 직각 대신 코사인법칙이 필요해 ★4 유지~★5 (2) 접선 조건을 '각 FPF' = 60도'로 바꾸기(★4) (3) c 대신 타원의 단축의 길이나 넓이를 묻기(★4 유지)."
```

```yaml
- id: GN-GEO-31-55
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x축 위의 점 A 와 y축 위의 점 B 가 AB = 5 를 유지하며 움직일 때, 선분 AB 를 3:2 로 내분하는 점 P 가 그리는 도형의 방정식 구하기.
  category: "내분점 좌표로 A, B 의 좌표를 P 의 좌표로 표현 → 길이 조건식에 대입해 매개 소거"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "자취 문제를 '내분점 공식으로 A, B 를 역으로 표현하고 구속조건 A의 좌표 제곱 + B의 좌표 제곱 = 25 에 대입해 매개를 소거'하는 대수 절차로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정해진 길이의 선분의 내분점이 그리는 자취(타원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A(s, 0), B(0, t) 로 두면 s^2 + t^2 = 25. P 는 3:2 내분점이므로 x 는 s 의 2/5, y 는 t 의 3/5 이고 s, t 를 x, y 로 되돌려 대입하면 타원이 나온다.
    내분 비를 어느 쪽에서 세는지(A에서 B로)가 좌표를 뒤바꾸는 함정(T-표기). 매개 소거 절차를 떠올리는 것이 통찰 하나.
    STEP 2 출발 ★3 · 통찰 1 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: "A(s,0) · B(0,t) · s^2+t^2 = 25 → P 의 좌표로 s, t 역표현 → 대입해 소거 → x^2/4 + y^2/9 = 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{x^2}{4}+\dfrac{y^2}{9}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/31-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분의 길이 5 와 내분비 3:2 를 바꿀 수 있다. 제약: 길이 L, 비 m:n 이면 반축이 Ln/(m+n) 과 Lm/(m+n) 이므로 분모가 정수가 되려면 L 이 (m+n) 의 배수여야 한다(5 와 3:2 → 2, 3)."
    creative: "(1) 내분점 대신 외분점으로 바꾸기(★3 유지, 반축이 커짐) (2) 선분 AB 의 중점으로 두면 원이 나오므로 '언제 원이 되는가'를 함께 묻게 하면 I-VF 로 ★4 (3) A, B 가 각각 두 직선 위(축이 아닌)를 움직이게 하면 기울어진 타원이 되어 교육과정 밖 - 변형 금지."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-32-56
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    두 초점이 F, F' 이고 장축의 길이가 2a 인 타원에서, 한 꼭짓점을 중심으로 하는 반지름 1 인 원이 서로 다른 두 꼭짓점과 한 초점을 지날 때 상수 a 의 값 구하기(5지선다).
  category: "원의 중심이 될 수 있는 꼭짓점 판별 → 세 거리 = 1 을 식으로 → a 에 대한 이차방정식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원의 중심이 장축 끝점인지 단축 끝점인지, 지나는 초점이 가까운 쪽인지 먼 쪽인지에 따라 경우가 갈리고 각 경우를 따져야 함"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 꼭짓점까지 1' 과 '한 초점까지 1' 과 b^2 = a^2 - c^2 세 조건을 묶어 a 에 대한 이차방정식 하나로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "타원의 꼭짓점·초점과 원이 함께 주어진 조건에서 반축 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중심이 단축 끝점이면 두 장축 끝점과 초점까지의 거리가 동시에 1 일 수 없어 기각되고, 장축 끝점이 중심일 때만 두 단축 끝점까지가 같은 거리 1 이 된다.
    그러면 장반축의 제곱 + 단반축의 제곱 = 1 과 (장반축 - 또는 + c) = 1 이 남고 b^2 = a^2 - c^2 을 넣으면 a 에 대한 이차방정식이 된다. 양수 근만 취한다(T-범위·T-부호).
    실력 UP 출발 ★4 · 통찰 2개 d2 → ★4 유지(각 통찰의 depth 가 2 이고 골조는 조건 나열이라 ★5 로 올리지 않음).
  tier: star_4
  mechanism_primary: "중심이 될 꼭짓점 판별 → 두 꼭짓점까지 1 · 한 초점까지 1 → b^2 = a^2 - c^2 대입 → a 이차방정식 → 양수 근"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: crop:fig-32-56.png
  latex: latex-bank/gn-geo/items/32-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름 1 을 r 로 바꿀 수 있다. 제약: 이차방정식의 판별식이 양수이고 근이 c 보다 커야 타원이 유지된다. r 을 바꾸면 답이 무리수로 바뀌므로 선택지 다섯 개를 모두 다시 만들어야 한다."
    creative: "(1) 원이 두 초점과 한 꼭짓점을 지나도록 조건을 바꾸기(★4 유지) (2) 원의 반지름을 묻고 a 를 주는 역방향으로 뒤집기(★4) (3) '그런 원이 존재하도록 하는 a 의 범위'로 바꾸면 I-VF 가 강해져 ★5 후보."
```

```yaml
- id: GN-GEO-32-57
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    타원 x^2/100+y^2/36=1 의 장축을 10등분 한 등분점에서 장축에 수직인 직선을 그어 얻은 x축 위쪽 교점 P1 부터 P9 까지에 대하여 한 초점 F 로부터의 거리의 합 FP1 + ... + FP9 구하기.
  category: "등분점의 좌우 대칭 → 짝지어 두 초점거리의 합으로 → 2a 의 4벌 + 가운데 한 개"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "등분점이 y축에 대해 좌우 대칭이므로 FP(9-k+1) 이 반대쪽 초점까지의 거리 F'Pk 와 같다는 대칭 치환 - 이걸 못 보면 아홉 개의 거리를 일일이 계산해야 함"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "짝지은 네 쌍을 각각 정의의 합 2a 로 묶고, 짝이 없는 가운데 P5 는 단축 끝점이라 거리가 장반축 a 임을 따로 처리"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "타원 위 대칭 점들의 초점거리의 합(정의 + 대칭)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    아홉 개를 직접 계산하면 무리수 아홉 개가 나와 손을 댈 수 없다. 대칭으로 P1 과 P9, P2 와 P8 처럼 짝지으면 각 쌍의 합이 정의상 장축의 길이 20 이 된다.
    네 쌍 80 에 가운데 P5(단축 끝점)의 거리 10 을 더해 90. 대칭 치환이 유일한 관문이라 depth 3 으로 둔다.
    실력 UP 출발 ★4 · 통찰 2개(depth 3 포함) → ★5 조건(통찰 3개 이상)에는 못 미쳐 ★4 유지.
  tier: star_4
  mechanism_primary: "대칭으로 FP(10-k) = F'Pk → 네 쌍 x 2a = 80 → 가운데 P5 의 거리 = a = 10 → 합 90"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$90$'
  answer_source: "답지"
  figure: crop:fig-32-57.png
  latex: latex-bank/gn-geo/items/32-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모와 등분 수를 바꿀 수 있다. 제약: 등분 수 n 이 짝수여야 가운데 점이 생겨 답이 (n/2 - 1) x 2a + a 꼴이 되고, 홀수면 가운데 점이 없어 식이 달라진다. 분모는 자유롭지만 a 가 정수여야 답이 깔끔하다."
    creative: "(1) x축 아래쪽 교점까지 포함해 18개의 합을 묻기(★4 유지, 답은 2배) (2) 거리의 합 대신 제곱의 합을 묻게 하면 대칭 치환이 안 통해 좌표계산이 되고 ★5 (3) 등분점 대신 등각으로 나눈 점을 쓰면 정의가 안 통해 교육과정 밖으로 나간다 - 변형 금지."
```

```yaml
- id: GN-GEO-32-58
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    초점이 F(c,0), F'(-c,0) 인 타원 C1: x^2/a^2+y^2=1 과, 초점이 G(0,d), G'(0,-d) 이고 C1 의 두 꼭짓점을 지나는 타원 C2 가 있다. 직선 FG 가 C1 과 제1사분면에서 만나는 점 P, 직선 F'P 가 C2 와 제1사분면에서 만나는 점 Q 에 대하여 GP = PF 이고 GP + PF' = 2루트2 일 때 QG + QG' 의 값 구하기(5지선다).
  category: "GP = PF 치환으로 C1 의 장축 확정 → P 가 FG 의 중점 → d 결정 → C2 의 반축 → 2 x 장반축"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "GP = PF 를 써서 GP + PF' 를 PF + PF' 로 바꾸면 그 값이 곧 C1 의 장축이라 a 가 조건 하나로 결정됨"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "GP = PF 는 P 가 선분 FG 의 중점이라는 뜻이므로 P 의 좌표를 F, G 의 중점으로 두고 C1 에 대입해 d 를 얻음"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C2 가 C1 의 두 꼭짓점을 지난다는 조건으로 C2 의 가로 반축을 C1 의 장반축과 같게 놓고, 세로 반축의 제곱 = 가로 반축의 제곱 + d^2 로 연결"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "초점 배치가 다른 두 타원의 연립(정의 + 중점 + 꼭짓점 공유)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    묻는 값 QG + QG' 는 C2 의 장축이므로 Q 를 실제로 구할 필요가 없다 - 이 점을 먼저 보면 문제가 '두 타원의 반축 구하기'로 줄어든다.
    GP = PF 로 장축 2루트2 를 얻고, 중점 좌표를 C1 에 넣어 d^2 을 얻은 뒤 꼭짓점 공유로 C2 의 두 반축을 잇는다. 조건을 옮기는 수가 세 번.
    실력 UP 출발 ★4 · 통찰 3개(I-XU 포함)로 ★5 자격은 있으나 novelty_score 0 이라 §2.14 게이트에 걸려 ★4 로 둔다.
    [분류 이슈] 통찰 3개 + XU 로 ★5 후보이나 참신도 0 이므로 ★4 기록.
  tier: star_4
  mechanism_primary: "GP = PF → PF + PF' = 2루트2 = C1 장축 → P 는 FG 의 중점 → C1 에 대입해 d^2 → C2 의 가로 반축 = C1 장반축 → 세로 반축 → QG + QG' = 2 x 세로 반축"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '④'
  answer_source: "답지"
  figure: crop:fig-32-58.png
  latex: latex-bank/gn-geo/items/32-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "GP + PF' 의 값만 실질적으로 바꿀 수 있다. 제약: C1 이 x^2/a^2 + y^2 = 1 로 세로 반축이 1 로 고정돼 있어 장반축 > 1 이어야 하고, 중점을 대입했을 때 d^2 > 1 이 나와야 G 가 C2 의 초점이 된다. 선택지가 무리수라 값을 바꾸면 다섯 개를 다시 만들어야 한다."
    creative: "(1) C1 의 세로 반축을 1 이 아닌 문자로 두면 미지수가 하나 늘어 ★5 (2) GP = PF 대신 GP : PF = 2 : 1 로 바꾸면 중점 대칭이 깨져 내분점 계산이 되고 ★5 (3) 묻는 값을 Q 의 좌표로 바꾸면 직선과 타원의 연립이 필요해 계산 마찰만 커진다 - 질 저하라 권장하지 않음."
```

```yaml
- id: GN-GEO-32-59
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    x축 위의 점 A(a, 0) 과 타원 x^2/24+y^2/49=1 의 두 초점 F, F' 및 타원 위의 점 P 에 대하여 AP - PF 의 최솟값이 1 일 때 양수 a 의 값 구하기.
  category: "정의로 PF 를 장축 빼기 PF' 로 치환 → 차를 합으로 → 삼각부등식으로 최소는 선분 AF'"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PF = (장축) - PF' 로 바꿔 최소를 구하기 어려운 '차' AP - PF 를 '합' AP + PF' 에서 상수를 뺀 꼴로 만듦"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AP + PF' 의 최솟값은 P 가 선분 AF' 위에 있을 때의 선분 AF' 라는 기하(삼각부등식) 판단으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "타원의 정의로 차를 합으로 바꾸는 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    타원은 세로가 장축이라 장축의 길이 14, 초점은 (0, ±5). AP - PF 를 그대로 다루면 P 를 매개변수로 놓고 미분까지 가야 하지만, 정의로 PF 를 치환하면 AP + PF' - 14 가 된다.
    합의 최소는 세 점이 일직선일 때이므로 A 와 F' 사이의 거리가 15 여야 하고 여기서 a 를 역산한다.
    실력 UP 출발 ★4 · 통찰 2개(EQV + RT) → ★4 유지. A 가 x축 위 양수라는 범위 조건을 마지막에 확인한다(T-범위).
  tier: star_4
  mechanism_primary: "PF = 14 - PF' → AP - PF = AP + PF' - 14 → 최소는 선분 AF' = 15 → a^2 + 25 = 225 → a = 10루트2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10\sqrt{2}$'
  answer_source: "답지"
  figure: crop:fig-32-59.png
  latex: latex-bank/gn-geo/items/32-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 두 분모와 최솟값 1 을 바꿀 수 있다. 제약: (최솟값 + 장축)^2 - c^2 이 완전제곱이면 a 가 유리수(15^2 - 25 = 200 은 10루트2). 최솟값 + 장축 > c 여야 A 가 존재한다."
    creative: "(1) AP + PF 의 최댓값·최솟값으로 바꾸면 치환 방향이 반대가 된다(★4 유지) (2) A 를 y축 위나 타원 내부의 점으로 옮기면 선분이 타원과 만나는지 검증이 필요해 I-VF 가 붙고 ★5 (3) 최솟값을 주지 않고 a 를 주어 최솟값을 묻는 순방향으로 뒤집기(★3~4)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 5 · ★2 18 · ★3 6 · ★4 6 · ★5 0
- 통찰형 23 · 절차형 12 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-XU 5 · I-CON 7 · I-RT 5 · I-SYM 3 · I-MI 2 (I-BW · I-PD · I-SC · I-VF 는 이 범위에 없음 - 변형 설계 때 비어 있는 칸으로 활용할 수 있다)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제 ★2 · 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 벤더 신호와 판정이 대체로 일치한다.
- type_hint 상위 5:
  1. 「타원의 정의로 방정식 세우기(초점·거리의 합·장축)」 6문 (24-30 · 25-34 · 25-e6 · 27-e8 · 27-39 · 27-40)
  2. 「평행이동한 타원(일반형 → 표준형 → 중심·초점·꼭짓점)」 6문 (24-32 · 24-33 · 26-e7 · 26-37 · 26-38 · 30-49)
  3. 「타원의 정의의 활용 - 초점현·둘레 재조직」 5문 (28-e9 · 28-41 · 30-50 · 31-53 · 32-57)
  4. 「초점거리·좌표의 곱의 최대(산술기하평균)」 4문 (29-e10 · 29-43 · 29-44 · 29-45)
  5. 「초점삼각형의 넓이·길이(직각·비·접선)」 3문 (28-42 · 31-51 · 31-54)
- 그림: 12문(`crop:fig-28-e9.png` · `crop:fig-28-41.png` · `crop:fig-28-42.png` · `crop:fig-29-45.png` · `crop:fig-30-48.png` · `crop:fig-30-50.png` · `crop:fig-31-53.png` · `crop:fig-31-54.png` · `crop:fig-32-56.png` · `crop:fig-32-57.png` · `crop:fig-32-58.png` · `crop:fig-32-59.png`). 모두 발문에 도형 관계가 글로 서술돼 있어 골조·답 판정에 그림이 추가 정보를 주지 않았다.
- 변형 원본으로서의 특징: 이 단원은 **답이 반축의 함수로 고정되는 문항이 많다**(둘레 = 4a · 곱의 최대 = a^2 · 직각 초점삼각형의 넓이 = b^2 · 내접 직사각형의 최대 넓이 = 2ab). 숫자 변형 시 "수치를 바꿔도 답의 형태가 그대로"라 변별이 안 되는 경우가 생기므로, 각 블록의 `variation_notes.numeric` 에 그 항등식을 명시해 두었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-25-34 · GN-GEO-25-35 | 「필수·발전 예제」 구역의 확인체크(구역 신호 ★2)이나 통찰 0 · M_total 4 의 한 줄 대입이라 ★1 로 내림. 확인체크를 예제와 같은 층으로 볼지 별도 층으로 볼지 카탈로그 설계 때 결정 | ★1 / ★2 |
| GN-GEO-28-e9 | 필수 예제 · 둘레를 정의 두 벌로 재조직하는 통찰(depth 2)이 있어 ★3 후보이나 +1 조건(통찰 2개 이상 또는 depth 3) 미달로 ★2 기록 | ★2 / ★3 |
| GN-GEO-29-44 | 확인체크지만 조건식 자체를 부등식 재료로 쓰고 등호 성립까지 확인해야 해 ★3 후보. 계산은 한 줄이라 ★2 로 둠 | ★2 / ★3 |
| GN-GEO-31-52 | 계산 부담은 STEP 1 급(뺄셈 한 번)이나 그림 없이 두 타원의 관계를 세워야 하는 진입 저항이 커 ★4 후보 | ★3 / ★4 |
| GN-GEO-32-58 | 통찰 3개 + I-XU 로 v3.8 §2.13 의 ★5 자격은 충족하나 `novelty_score` 0 이라 §2.14 가 RED 를 내므로 ★4 로 기록 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「타원의 정의로 방정식 세우기」와 ② 「평행이동한 타원의 중심·초점·꼭짓점」은 학생이 쓰는 도구가 달라(정의 대입 vs 완전제곱 정리) 반드시 분리한다. ③ 「타원의 정의의 활용 - 초점현·둘레」는 답이 4a 로 고정되는 별도 유형으로 세우고, ④ 「초점삼각형(직각·비·접선)」은 정의 + 피타고라스/코사인법칙 결합이라 ③과 나눈다. ⑤ 「산술기하평균을 쓰는 최대·최소」는 대수 도구가 주역이므로 기하 카탈로그와 대수 카탈로그 양쪽에서 참조되도록 교차 태그를 둔다.
- **통합해도 될 유형**: 25-e6⑵ · 30-47 의 「초점 공유」와 26-37 의 「평행이동량 역산」은 모두 "c^2 불변"이라는 한 착안으로 묶이므로 한 유형의 하위 변형으로 둔다. 27-e8 · 27-39 · 27-40 도 초점의 배치(가로/세로)만 다른 같은 유형이다.
- **비어 있는 통찰 칸**: 이 범위에는 I-BW · I-PD · I-SC · I-VF 문항이 없다. ★4~5 슬롯을 채울 때 30-46 의 경우 분기에 기각을 붙이거나(I-VF) 32-56 을 존재 조건 문항으로 뒤집는 방식(I-VF)으로 만들 수 있다 - 각 블록의 `variation_notes.creative` 에 해당 지점을 적어 두었다.
