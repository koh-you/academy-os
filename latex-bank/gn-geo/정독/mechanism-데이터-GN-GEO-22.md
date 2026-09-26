---
name: mechanism-데이터-GN-GEO-22
description: 개념원리 기하 22 평면벡터의 성분(1/1 · 180~186쪽 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 22 평면벡터의 성분
  unit_code: GEO-22
  part: "1/1"
  extract_range: "180~186쪽 · 180-362~186-387"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·STEP 난이도)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 22 평면벡터의 성분 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 180~186쪽, 단원 「22 평면벡터의 성분」 31문항 전수를 다룬다. 전사본 group 은 다섯 구역이다 — 「개념원리 익히기」 5문(180쪽 통번호), 「필수·발전 예제」 14문(필수 예제 5문 `181-e5`·`182-e6`·`182-e7`·`183-e8`·`184-e9` 과 각 예제 바로 뒤에 붙는 확인체크 9문), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문. 난이도 신호는 구역·예제 태그·STEP 라벨이며, **확인체크는 독립 통번호가 아니라 바로 위 필수 예제의 짝 문제**라 출발점을 ★1 이 아니라 그 예제의 ★2 로 읽었다(GN-GEO-11 파일과 같은 해석). 이 해석 때문에 자취 계열 확인체크 `184-375` 가 태그의 문자 그대로의 출발점과 2단 벌어지므로 파일 끝 「분류 이슈 목록」에 기록했다.

31문항은 크게 네 골조로 갈린다. ⑴ **성분 연산·크기**(기본벡터 표현 → 성분 → 크기 √(x²+y²))는 180쪽 익히기와 181쪽 예제 계열의 절차형 뼈대다. ⑵ **두 벡터가 같을 조건**(성분 비교 → 미지수 연립)과 ⑶ **평행 조건**(한쪽이 다른 쪽의 실수배 ⟺ 성분 교차곱이 0)은 미지수를 하나 얹어 STEP 1 까지 반복된다. ⑷ **점의 자취·최솟값**(184쪽 예제 9 계열과 186쪽 상위 문항)만 성질이 다르다 — `PA+PB+PC=3PG`·`PA+PB=2PM` 처럼 시점이 P 인 벡터합을 무게중심·중점 기준으로 묶어 자취를 원으로 바꾸고(I-RT), 거기서 다시 점·직선 거리나 원 위 점까지의 최단거리로 한 번 더 옮기는 문항이 ★4 층을 이룬다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-180-362
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모눈 위에 그려진 두 벡터 a, b 에 대하여 ⑴ 기본벡터 e1=(1,0), e2=(0,1) 의 일차결합으로 나타내기
    ⑵ 성분으로 나타내기.
  category: "그림의 벡터 → 기본벡터 일차결합 → 성분표시"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본벡터로 나타내기와 성분표시"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모눈에서 가로·세로 이동량을 읽어 2e1+3e2, -3e2 로 쓰고 괄호 표기로 옮기면 끝. 성분의 정의 확인 한 단계다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "모눈에서 x·y 이동량 읽기 → xe1+ye2 → (x, y)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\vec{a}=2\vec{e_1}+3\vec{e_2}$, $\vec{b}=-3\vec{e_2}$ ⑵ $\vec{a}=(2,\,3)$, $\vec{b}=(0,\,-3)$'
  answer_source: "답지"
  figure: "crop:fig-180-362.png"
  latex: latex-bank/gn-geo/items/180-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 벡터의 이동량(2,3)·(0,-3) 자리를 바꿀 수 있다. 제약: 모눈 칸에 딱 떨어지는 정수 성분이어야 하고, 축에 평행한 벡터 한 개를 남겨 성분 하나가 0 인 사례를 유지하면 정의 확인 효과가 산다."
    creative: "(1) 성분을 주고 모눈에 그리게 하는 역방향(★1 유지) (2) 시점이 원점이 아닌 화살표를 주어 종점-시점 뺄셈을 거치게 하면 ★2 (3) 세 번째 벡터를 얹어 a+b 를 그림과 성분 양쪽으로 확인하게 하면 ★2."
```

```yaml
- id: GN-GEO-180-363
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ a=(-7,0) ⑵ b=(8,-6) 의 크기를 구하기.
  category: "성분 → 크기 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 나타낸 평면벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |a|=√(x²+y²) 한 줄 대입. ⑴ 은 성분이 음수여도 크기는 양수라는 확인, ⑵ 는 6-8-10 직각삼각형.
    익히기·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "성분 → √(x²+y²) 대입 → 크기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$ ⑵ $10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/180-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피타고라스 수 쌍(3,4)·(5,12)·(8,15)·(7,24) 로 교체하면 크기가 정수로 떨어진다. 무리수 답을 원하면 (2,3) 류로. 제약: 음수 성분을 최소 한 개 남겨 제곱에서 부호가 사라지는 확인을 유지."
    creative: "(1) 크기가 주어지고 성분 하나를 묻는 역방향(★2) (2) 단위벡터 여부 판정으로 바꾸기(★2 · 185-376 계열) (3) 크기가 같은 두 벡터를 고르는 보기형(★2)."
```

```yaml
- id: GN-GEO-180-364
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    a=b 일 때 m, n 의 값. ⑴ a=(2,3+m), b=(n-m,4) ⑵ a=(m+2n,6), b=(3,2m+n).
  category: "두 벡터가 같을 조건 → 성분끼리 연립"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터가 서로 같을 조건 — 성분 비교로 미지수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x성분끼리·y성분끼리 같다는 정의를 그대로 연립으로 옮긴다. ⑴ 은 대입, ⑵ 는 2원1차 연립.
    미지수가 둘이라 Mₐ=2 지만 절차는 한 겹이다. 익히기·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "a=b ⟺ x성분·y성분 각각 일치 → 연립 → m, n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $m=1$, $n=3$ ⑵ $m=3$, $n=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/180-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 성분의 상수(2·3·4·6)와 계수(m+2n, 2m+n)를 바꿀 수 있다. 제약: 연립의 행렬식이 0 이 아니어야 해가 유일하고, m·n 이 정수로 떨어지도록 상수를 맞춘다."
    creative: "(1) 해가 없도록(계수 비례·상수 불일치) 만들어 「만족하는 m, n 이 없음」을 묻기(★2 · I-MI) (2) m+n 이나 mn 만 묻기(★1 유지) (3) 세 번째 벡터를 얹어 a=b=c 로 조건을 늘리면 ★2."
```

```yaml
- id: GN-GEO-180-365
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    a=(3,-2), b=(-1,4) 일 때 ⑴ 2a-3b ⑵ 3(2a+b)-2(3a-2b) 를 성분으로 나타내기.
  category: "성분의 실수배·합차 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 나타낸 평면벡터의 연산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 성분별 직접 계산, ⑵ 는 먼저 동류항을 정리하면 7b 로 줄어 계산이 한 줄이 된다(정리하지 않아도 풀린다).
    익히기·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "식을 a, b 에 대해 정리 → 성분별 실수배·합 → (x, y)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(9,\,-16)$ ⑵ $(-7,\,28)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/180-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 성분과 괄호 앞 계수(2,-3 / 3,-2)를 바꿀 수 있다. 제약: ⑵ 처럼 한쪽 벡터가 소거되도록 계수를 맞추면 정리 습관을 유도할 수 있고, 답 성분이 정수가 되도록 한다."
    creative: "(1) 결과 성분을 주고 계수를 되묻는 역방향(★2 · I-BW) (2) 크기까지 묻기(★2 · 181-368 계열) (3) 미지 벡터 x 를 넣은 벡터방정식으로 바꾸면 ★2(181-e5 계열)."
```

```yaml
- id: GN-GEO-180-366
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 점 A, B 의 좌표가 주어질 때 벡터 AB 를 성분으로 나타내고 크기 구하기.
    ⑴ A(3,2), B(-5,-1) ⑵ A(-2,3), B(4,-1).
  category: "AB = (종점) - (시점) → 성분 → 크기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 좌표로 나타낸 벡터의 성분과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB = OB - OA 정의를 그대로 쓰고 크기 공식에 넣는다. 함정은 시점·종점 순서(BA 와 부호 반대)뿐이다.
    익히기·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = (b1-a1, b2-a2) → √(x²+y²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\overrightarrow{\pt{AB}}=(-8,\,-3)$, $|\overrightarrow{\pt{AB}}|=\sqrt{73}$ ⑵ $\overrightarrow{\pt{AB}}=(6,\,-4)$, $|\overrightarrow{\pt{AB}}|=2\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/180-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾼다. 제약: 성분 차가 피타고라스 수면 크기가 정수, 아니면 √73·2√13 처럼 근호를 남긴다 — 어느 쪽을 원하는지 먼저 정하고 좌표를 잡는다."
    creative: "(1) BA 도 함께 묻어 부호 대칭을 확인시키기(★1 유지) (2) |AB| 값을 주고 B 의 미지 좌표를 구하기(★2 · I-BW) (3) 세 점을 주고 AB=CD 인 D 를 찾게 하면 ★2(183-e8 계열)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-181-e5
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ a=(3,2), b=(4,-1) 일 때 2(x-a)=x+a-3b 를 만족시키는 벡터 x 를 성분으로 나타내기.
    ⑵ a=(2,-5), b=(3,-2), c=(-4,1) 에 대하여 3(a-2b+c)-2(a-b+2c) 를 성분으로 나타내고 크기 구하기.
  category: "벡터방정식 정리 → 성분 대입 → 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 연산과 크기 — 벡터방정식 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 벡터를 미지수처럼 이항해 x=3a-3b 로 정리한 뒤 성분 대입, ⑵ 는 동류항 정리로 a-4b-c 까지 줄이고 크기.
    벡터를 문자처럼 다루는 것은 이 단원의 표준 절차라 통찰로 세지 않았다. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "벡터식을 x(또는 a, b, c)에 대해 정리 → 성분 대입 → 필요하면 √(x²+y²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(-3,\,9)$ ⑵ 성분: $(-6,\,2)$, 크기: $2\sqrt{10}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/181-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 계수와 세 벡터 성분을 바꾼다. 제약: ⑴ 에서 x 의 계수가 0 이 되지 않아야 하고(2x-x=x), ⑵ 의 최종 성분이 크기 계산에서 √10·5 같이 정리되는 값이 되도록 맞춘다."
    creative: "(1) x 의 크기만 묻기(181-367 과 동일 골조 ★2) (2) 미지 벡터가 둘인 연립으로 확장(★2 · 185-377) (3) 계수에 문자 k 를 넣어 |x| 가 최소가 되는 k 를 묻으면 이차함수 전환이 붙어 ★3."
```

```yaml
- id: GN-GEO-181-367
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(1,2), b=(6,2), c=(3,-1) 에 대하여 2(a+x)-5(b-c)=3(a-b+x) 를 만족시키는 벡터 x 의 크기.
  category: "벡터방정식 정리 → x 성분 → 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 연산과 크기 — 벡터방정식 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 전개해 x 항을 모으면 x = -a-2b+5c 한 줄로 정리되고, 성분 대입 뒤 크기 공식.
    바로 위 필수 예제 e5 의 짝 문제라 출발점을 ★2 로 읽었고 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변 전개 → x 항 이항해 x=-a-2b+5c → 성분 대입 → √(x²+y²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/181-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 앞 계수(2,-5,3)와 세 벡터 성분을 바꾼다. 제약: x 항의 계수가 남도록(2x-3x=-x) 계수를 잡고, 최종 성분이 크기에서 5√5 처럼 정리되는 값이 되게 한다."
    creative: "(1) 크기 대신 성분을 묻기(★2 유지) (2) x 가 어떤 벡터와 평행할 조건을 덧붙이면 평행 조건이 결합돼 ★3 (3) 미지 벡터를 둘로 늘려 벡터 연립으로(★2 · 185-377)."
```

```yaml
- id: GN-GEO-181-368
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(3,2), b=(-4,2), c=(1,-1) 일 때 3(-a+b-2c)+2(2a-2b+c) 를 성분으로 나타내고 크기 구하기.
  category: "동류항 정리 → 성분 대입 → 크기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 나타낸 평면벡터의 연산과 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지 벡터가 없어 전개·정리(a-b-4c) 후 대입만 하면 끝이고 결과가 (3,4) 라 크기도 5 로 바로 나온다.
    [분류 이슈] 통찰 0·M_total 5 라 v3.8 감점 규칙의 −1 후보지만, 필수 예제 짝(확인체크) 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "괄호 전개 → a-b-4c 로 정리 → 성분 대입 → 크기 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '성분: $(3,\,4)$, 크기: $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/181-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분과 괄호 계수를 바꾼다. 제약: 최종 성분을 (3,4)·(6,8)·(5,12) 같은 피타고라스 쌍으로 맞춰야 크기가 정수로 떨어진다 — 이 문항의 설계 의도가 그 지점이다."
    creative: "(1) 한 벡터가 완전히 소거되도록 계수를 짜서 정리 습관을 강조(★2 유지) (2) 결과 벡터와 같은 방향의 단위벡터를 묻기(★2~3) (3) 크기가 5 인 조건에서 c 의 미지 성분을 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-181-369
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(-1,2), b=(3,4) 이고 t 가 실수일 때 |-ta+b| 의 최솟값.
  category: "성분 → t 의 이차식 → 완전제곱으로 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 크기의 최소화를 |v|² 의 t 에 대한 이차함수 최솟값 문제로 옮김(근호 안을 그대로 두면 진행이 안 됨)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "|ta+b| 꼴 벡터 크기의 최솟값(이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -ta+b=(t+3, -2t+4) 로 성분화하고 제곱해 5t²-10t+25 를 완전제곱하면 t=1 에서 최소 20, 답은 2√5.
    전환 통찰 1개(RT d1)이나 depth 3 도 아니고 통찰 2개도 아니라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "-ta+b 를 t 의 성분으로 → |v|² 를 t 의 이차식으로 → 완전제곱 → 최솟값의 제곱근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/181-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꾼다. 제약: 이차식의 꼭짓점 t 가 깔끔한 유리수가 되도록(2a·b 와 |a|² 의 비) 잡고, 최솟값이 20·8 처럼 근호가 정리되는 수가 되게 한다."
    creative: "(1) 최솟값을 주는 t 까지 함께 묻기(185-379 와 동일 ★2) (2) 최솟값을 기하로 해석해 「원점에서 직선까지의 거리」로 풀게 유도하면 표현 전환이 하나 더 붙어 ★3 (3) t 의 범위를 제한하면 구간 최솟값 분기가 생겨 ★3(I-MI)."
```

```yaml
- id: GN-GEO-182-e6
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    a=(-2,1), b=(3,4), c=(-12,-5) 일 때 c=ka+lb 를 만족시키는 실수 k, l 의 값.
  category: "일차결합 → 성분 비교 → 2원1차 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터가 서로 같을 조건 — 일차결합 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ka+lb 를 성분으로 쓴 뒤 x성분·y성분을 각각 같다고 놓아 -2k+3l=-12, k+4l=-5 를 풀면 끝.
    두 벡터가 같을 조건(정의)의 직접 적용이라 통찰 없음. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "ka+lb 성분화 → c 와 성분끼리 비교 → 연립 → k, l"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k=3$, $l=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/182-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b, c 성분을 바꾼다. 제약: a, b 가 평행하면(성분 교차곱 0) 해가 없거나 무수히 많아진다 — 반드시 일차독립이 되게 잡고, k·l 이 정수로 떨어지도록 c 를 ka+lb 에서 역산해 만든다."
    creative: "(1) k+l 이나 kl 만 묻기(★2 유지) (2) a, b 를 평행하게 만들어 「만족하는 k, l 이 존재하지 않음」을 따지게 하면 ★3(I-MI) (3) c 에 미지수를 넣고 k, l 이 정수가 되는 조건을 묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-182-e7
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    a=(4,4), b=(2,-1), c=(-1,5) 에 대하여 a+kb 와 c-a 가 서로 평행할 때 실수 k 의 값.
  category: "두 벡터 성분화 → 평행 조건(교차곱 0) → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터의 평행 조건 — 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+kb=(4+2k, 4-k), c-a=(-5,1) 을 만들고 평행 조건 x1y2-x2y1=0 을 세우면 k 에 대한 일차식이 된다.
    평행 ⟺ 실수배는 교과서 공식의 직접 적용이라 통찰로 세지 않았다. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a+kb, c-a 를 성분으로 → (4+2k)·1-(4-k)(-5)=0 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/182-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분을 바꾼다. 제약: 평행 조건 식에서 k 의 계수가 0 이 되지 않아야 유일해가 나오고(그렇지 않으면 해가 없거나 모든 k), 기준 벡터 c-a 가 영벡터가 되지 않게 한다."
    creative: "(1) 평행 대신 「크기가 같을 조건」으로 바꾸면 이차식이 되어 해가 둘(★2~3 · 185-378) (2) k 가 이차식으로 나오도록 미지수를 성분 안에 넣으면 근의 합을 묻는 ★2(185-380) (3) 세 점이 한 직선 위에 있을 조건으로 바꾸면 ★2(185-381)."
```

```yaml
- id: GN-GEO-182-370
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(3,-p), b=(p+q,2), c=(-3q,4) 에 대하여 c=2a+3b 일 때 |b| 의 값.
  category: "벡터 상등 → p, q 연립 → b 성분 → 크기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터가 같을 조건으로 미지수 결정 후 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y성분에서 p 가 먼저 확정되고 그 값을 x성분 식에 넣어 q 를 얻는 순서 의존 연립이다. 마지막에 b 성분을 복원해 크기.
    단계가 셋(연립 → 대입 → 크기)이라 M_total 7 이지만 통찰은 없다. 확인체크(예제 짝) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "c=2a+3b 성분 비교 → y성분에서 p, x성분에서 q → b 복원 → |b|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{17}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/182-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 계수(2,3)와 성분 안의 문자 배치(-p, p+q, -3q)를 바꾼다. 제약: 한 성분에 문자가 하나만 들어가 먼저 풀리는 구조를 유지해야 난이도가 유지되고, 답이 √17/2 처럼 정리되도록 상수를 조정한다."
    creative: "(1) |b| 대신 p+q 를 묻기(★2 유지) (2) 두 성분 모두에 p, q 가 섞이게 해 완전 연립으로 만들면 ★3 (3) c=2a+3b 대신 c 가 a, b 와 평행할 조건으로 바꾸면 이차식이 되어 ★3."
```

```yaml
- id: GN-GEO-182-371
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(5,4), b=(-2,3), c=(3,7) 에 대하여 a+kc 와 b-a 가 서로 평행할 때 실수 k 의 값.
  category: "두 벡터 성분화 → 평행 조건(교차곱 0) → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터의 평행 조건 — 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+kc=(5+3k, 4+7k), b-a=(-7,-1) 로 두고 교차곱을 0 으로 놓으면 k 의 일차방정식.
    바로 위 필수 예제 e7 과 골조가 같은 짝 문제다. 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "a+kc, b-a 성분화 → (5+3k)(-1)-(4+7k)(-7)=0 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/182-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분을 바꾼다. 제약: k 의 계수가 0 이 아니어야 하고, 분수 답(-1/2)을 정수로 만들고 싶으면 기준 벡터 b-a 의 성분 비를 단순하게 잡는다."
    creative: "(1) 평행 대신 방향이 같을(실수배가 양수) 조건으로 좁히면 부호 검증이 붙어 ★3 (2) k 를 성분 안으로 옮겨 이차식이 되게 하면 ★2~3 (3) a+kc 의 크기가 최소가 되는 k 를 묻는 문항으로 바꾸면 이차함수 전환 ★3."
```

```yaml
- id: GN-GEO-183-e8
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 점 A(3,2), B(1,-1), C(-2,0) 에 대하여 ⑴ 벡터 BC 의 크기 ⑵ AB=CD 를 만족시키는 점 D 의 좌표.
  category: "두 점으로 만든 벡터 → 크기 / 벡터 상등 → 점의 좌표 복원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면의 두 점에 대한 벡터 — 크기와 상등 조건으로 점 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 BC=(-3,1) 의 크기, ⑵ 는 D=(x,y) 로 두고 CD=(x+2, y) 를 AB=(-2,-3) 과 성분 비교하면 D 가 나온다.
    ⑵ 에서 벡터 상등을 다시 점의 좌표로 되돌리는 단계가 더해져, M_total 5 의 −1 후보임에도 필수 예제 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "AB=CD ⟺ (종점-시점) 성분 일치 → D = C + AB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt{10}$ ⑵ $(-4,\,-3)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/183-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꾼다. 제약: ⑴ 의 크기가 √10 처럼 근호로 남을지 정수가 될지를 먼저 정하고, ⑵ 의 D 가 다른 점과 겹치지 않도록(평행사변형이 찌그러지지 않도록) 배치한다."
    creative: "(1) AB=DC 로 방향을 뒤집어 흔한 함정을 만들기(★2 유지) (2) 네 점이 평행사변형을 이루는 D 를 묻되 세 경우가 나오게 하면 ★3(I-MI) (3) D 가 특정 직선 위에 있을 조건을 덧붙이면 ★3."
```

```yaml
- id: GN-GEO-183-372
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 A(0,3), B(1,1), C(x,y), D(2,6) 에 대하여 벡터 AB 와 DC 가 서로 같을 때 x+y 의 값.
  category: "AB=DC → 성분 비교 → C 의 좌표"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 같을 조건으로 점의 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(1,-2), DC=(x-2, y-6) 를 성분끼리 맞추면 C 가 바로 나오고 x+y 를 답한다.
    함정은 DC 와 CD 의 방향 구분(T-표기) 하나다. 예제 e8 의 짝 문제로 출발점 ★2, 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "AB=DC ⟺ C = D + AB → x+y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/183-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표를 바꾼다. 제약: 미지점 C 만 문자로 남기고, x+y 가 정수로 떨어지게 한다. A·B·D 를 한 직선 위에 두면 사각형이 무너지므로 피한다."
    creative: "(1) AB=CD 로 바꾸어 방향 함정을 강조(★2 유지) (2) 미지점을 둘로 늘려 조건을 두 개 주면 연립이 겹쳐 ★3 (3) 네 점이 평행사변형이 되도록 C 를 정하는 문항으로 바꾸면 경우 분기가 생겨 ★3."
```

```yaml
- id: GN-GEO-183-373
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(2,0), B(-3,1), C(4,5) 에 대하여 PA+PB=CP 를 만족시키는 점 P 의 좌표.
  category: "P=(x,y) 로 두고 벡터 등식을 성분 연립으로"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식을 만족시키는 점의 좌표(성분 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P=(x,y) 로 두면 PA+PB 와 CP 가 모두 x, y 의 일차식이 되어 성분별 일차방정식 두 개로 갈린다.
    우변이 PC 가 아니라 CP 라는 방향 함정(T-표기)이 핵심이다. 확인체크 출발점 ★2, 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "P=(x,y) 대입 → PA+PB, CP 를 x, y 일차식으로 → 성분별 연립 → P"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/183-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 등식의 계수를 바꾼다. 제약: 정리 후 x, y 의 계수가 0 이 되지 않아야 P 가 유일하게 결정되고(PA+PB+PC 꼴이면 무게중심), 좌표가 정수로 떨어지게 상수를 맞춘다."
    creative: "(1) 계수를 붙여 PA+3PB-PC 꼴로 만들기(186-384 와 동일 골조 ★3) (2) 등식 우변에 AC 같은 고정 벡터를 두면 단계가 하나 늘어 ★3 (3) 등식을 크기 조건 |PA+PB|=k 로 바꾸면 자취(원)로 성격이 달라져 ★3~4."
```

```yaml
- id: GN-GEO-184-e9
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 점 A(-5,1), B(-1,8), C(3,3) 에 대하여 |PA+PB+PC|=6 을 만족시키는 점 P 가 나타내는 도형의 넓이.
  category: "세 벡터 합을 무게중심으로 묶기 → 자취가 원 → 넓이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA+PB+PC 를 무게중심 G 에 대한 3PG 로 묶어, 벡터 크기 조건을 |PG|=2 즉 중심 G·반지름 2 인 원의 자취로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면벡터에서 점의 자취 — |PA+PB+PC|=k 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P=(x,y) 로 두고 성분 계산만 해도 (3x+3)²+(3y-12)²=36 이 나오지만, 3PG 로 묶으면 G(-1,4)·반지름 2 가 한 줄에 보인다.
    「벡터식 → 자취 도형」 전환이 골조의 핵심(I-RT d2)이라 필수 예제 출발점 ★2 에 +1 → ★3.
  mechanism_primary: "PA+PB+PC=3PG → |PG|=2 → 중심 G, 반지름 2 인 원 → 넓이 4π"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/184-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 우변 상수 6 을 바꾼다. 제약: 세 점 좌표의 합이 3 의 배수여야 G 가 정수점이 되고, 우변을 3 의 배수로 잡아야 반지름이 정수로 떨어진다."
    creative: "(1) 넓이 대신 둘레·반지름을 묻기(184-375 와 동일 ★3) (2) 점이 둘이면 중점 기준 2PM 으로 바뀌고 거리 최솟값까지 이으면 ★4(186-385) (3) 계수를 다르게(PA+2PB+3PC) 주면 무게중심이 가중평균이 되어 ★4."
```

```yaml
- id: GN-GEO-184-374
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-2,4), B(5,3) 에 대하여 |AP|=|BP| 를 만족시키는 점 P 가 나타내는 도형의 방정식.
  category: "거리 같음 조건 → 양변 제곱 → 직선(수직이등분선)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "|AP|=|BP| 를 만족시키는 점의 자취(수직이등분선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P=(x,y) 를 대입해 (x+2)²+(y-4)²=(x-5)²+(y-3)² 를 전개하면 이차항이 소거돼 일차식 7x-y-7=0 만 남는다.
    이차항 소거는 도형의 방정식에서 이미 익은 표준 절차라 통찰로 세지 않았다. 확인체크 출발점 ★2 유지.
  mechanism_primary: "P=(x,y) 대입 → 양변 제곱해 전개 → 이차항 소거 → 직선의 방정식"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7x-y-7=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/184-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 좌표를 바꾼다. 제약: 계수가 정수로 떨어지도록 좌표를 잡고, 두 점이 같은 x좌표·같은 y좌표면 자취가 축에 평행한 직선이 되어 난이도가 더 낮아진다."
    creative: "(1) |AP|=2|BP| 로 비를 주면 자취가 아폴로니오스 원이 되어 ★3~4 (2) |AP|²+|BP|² 가 상수인 자취로 바꾸면 원이 되어 ★3 (3) 자취와 주어진 직선의 교점을 묻는 결합 문항 ★3."
```

```yaml
- id: GN-GEO-184-375
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(1,2), B(3,-1), C(-1,-2) 에 대하여 |PA+PB+PC|=2 를 만족시키는 점 P 가 나타내는 도형의 둘레의 길이.
  category: "세 벡터 합을 무게중심으로 묶기 → 자취가 원 → 둘레"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA+PB+PC=3PG 로 묶어 |PG|=2/3 즉 무게중심을 중심으로 하는 원의 자취로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면벡터에서 점의 자취 — |PA+PB+PC|=k 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    바로 위 필수 예제 e9 와 같은 골조이고 마무리만 넓이 대신 둘레다. 반지름이 2/3 로 분수라 계산 부담이 한 단계 높다.
    [분류 이슈] 태그를 문자 그대로 읽으면 확인체크 → ★1 출발이지만, 예제 짝으로 읽어 ★2 출발 + 전환 통찰 +1 → ★3(벤더 신호와 2단 차).
  mechanism_primary: "PA+PB+PC=3PG → |PG|=2/3 → 반지름 2/3 인 원 → 둘레 4π/3"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/184-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 우변 상수 2 를 바꾼다. 제약: 좌표 합이 3 의 배수가 아니면 G 가 분수점이 되고, 우변이 3 의 배수가 아니면 반지름이 분수로 남는다 — 이 문항은 후자를 일부러 택했다."
    creative: "(1) 둘레 대신 도형 위 점과 원점 사이 거리의 최대·최소를 묻기(★4 · 186-385 계열) (2) 세 점 중 하나를 미지점으로 두고 자취가 지나는 점을 조건으로 주면 역추적 ★4(I-BW) (3) 조건을 부등식 |PA+PB+PC|≤2 로 바꾸면 영역 문제 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-185-376
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a=(x-2, 4/5) 가 단위벡터가 되도록 하는 모든 x 의 값의 합.
  category: "단위벡터 조건 → 제곱합 = 1 → 두 해의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단위벡터 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |a|=1 ⟺ (x-2)²+16/25=1 → (x-2)²=9/25 이므로 x=2±3/5 두 개, 합은 4(x=2 에 대한 대칭이라 바로 보인다).
    ± 두 해를 모두 취하는 것은 표준 분기(T-부호)라 통찰로 세지 않았다. STEP 1 출발점 ★2 유지.
  mechanism_primary: "|a|=1 → (x-2)²+(4/5)²=1 → x-2=±3/5 → 두 해의 합"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 성분 4/5 를 3/5·5/13·12/13 같은 피타고라스 분수로, x-2 의 평행이동 상수를 바꾼다. 제약: 고정 성분의 절댓값이 1 보다 작아야 해가 존재하고, 그렇지 않으면 해 없음 문항이 된다."
    creative: "(1) 고정 성분을 1 보다 크게 주어 「해가 없음」을 판정하게 하면 ★3(I-VF) (2) 두 해의 곱을 묻기(★2 유지) (3) 단위벡터 대신 |a|=2 로 바꾸고 성분을 문자 둘로 늘리면 ★3."
```

```yaml
- id: GN-GEO-185-377
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x+2y=(5,4), 3x-y=(-6,5) 일 때 x-y 를 성분으로 나타내기.
  category: "벡터 연립방정식 → 가감법 → x, y 성분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미지 벡터 둘의 연립방정식(성분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벡터를 문자처럼 두고 가감법으로 7x=(-7,14) 를 얻어 x, y 를 차례로 구한 뒤 x-y 를 만든다.
    성분 전개 없이 벡터 단위로 소거하면 계산이 절반이지만, 어느 쪽이든 표준 절차다. STEP 1 출발점 ★2 유지.
  mechanism_primary: "두 벡터식을 가감법으로 → x 와 y 성분 결정 → x-y"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-4,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수와 우변 성분을 바꾼다. 제약: 계수 행렬식이 0 이 아니어야 유일해가 나오고, 우변 성분을 7 의 배수처럼 소거 계수에 맞춰 잡아야 답이 정수로 떨어진다."
    creative: "(1) x-y 대신 |x+y| 를 묻기(★2 유지) (2) 식 하나에 미지 실수 k 를 넣어 해가 존재할 조건을 묻기(★3 · I-BW) (3) 세 미지 벡터·세 식으로 늘리면 계산량만 증가하므로 ★ 상승 없이 질만 떨어진다(피할 것)."
```

```yaml
- id: GN-GEO-185-378
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a=(4,-2), b=(0,2), c=(-2,-4) 에 대하여 a+xb 와 c 의 크기가 같도록 하는 0 이 아닌 실수 x 의 값.
  category: "크기 같음 → 제곱해서 x 의 이차방정식 → 조건에 맞는 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 크기가 같을 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+xb=(4, 2x-2) 의 제곱합을 |c|²=20 과 같다고 놓으면 (2x-2)²=4 가 되어 x=0 또는 x=2 가 나오고 단서로 x=2.
    x≠0 이 발문에 명시된 제약이라 사후 검증(I-VF)으로 세지 않았다. STEP 1 출발점 ★2 유지.
  mechanism_primary: "|a+xb|²=|c|² → x 의 이차방정식 → x≠0 단서로 하나 선택"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분을 바꾼다. 제약: b 의 한 성분이 0 이라 x 가 한 좌표에만 들어가 이차식이 단순해진다 — 이 구조를 깨면 계산이 급격히 무거워진다. |c|² 를 완전제곱 차가 되게 잡아 해가 유리수가 되게 한다."
    creative: "(1) x≠0 단서를 없애고 「모든 x 의 합」을 묻기(★2 유지 · 근과 계수) (2) 크기가 같을 조건 대신 평행 조건으로 바꾸면 일차식이 되어 ★2 하향 (3) 판별식으로 해가 존재할 b 의 조건을 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-185-379
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a=(2,-1), b=(-1,1) 에 대하여 |a+tb| 가 최소가 되게 하는 실수 t 의 값과 그때의 최솟값.
  category: "성분 → t 의 이차식 → 완전제곱으로 최솟값과 최소점"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 크기의 최소화를 |v|² 의 t 에 대한 이차함수 최솟값으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "|a+tb| 꼴 벡터 크기의 최솟값(이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+tb=(2-t, t-1) 의 제곱합 2t²-6t+5 를 완전제곱하면 t=3/2 에서 최소 1/2, 크기는 그 제곱근이다.
    181-369 와 같은 골조지만 최소가 되는 t 까지 답해야 해 제곱근 복원 단계가 하나 더 있다. STEP 1 출발점 ★2 유지.
  mechanism_primary: "a+tb 성분화 → |v|²=2t²-6t+5 완전제곱 → t=3/2, 최솟값 √(1/2)"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$t=\dfrac{3}{2}$, 최솟값: $\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꾼다. 제약: 꼭짓점 t 가 깔끔한 유리수가 되도록 잡고, 최솟값의 제곱이 1/2·2·5 처럼 근호 정리가 되는 수가 되게 한다."
    creative: "(1) 최솟값만 묻기(181-369 와 동일 ★2) (2) 「최소일 때 a+tb 와 b 가 수직」임을 함께 확인시키면 기하 해석이 붙어 ★3 (3) t 를 정수로 제한하면 후보 비교 분기가 생겨 ★3(I-VF)."
```

```yaml
- id: GN-GEO-185-380
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a=(3x+1, -5), b=(-2, x) 가 서로 평행하도록 하는 모든 x 의 값의 합.
  category: "평행 조건(교차곱 0) → x 의 이차방정식 → 근의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행 조건에서 생기는 이차방정식 — 근의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건을 교차곱으로 세우면 3x²+x-10=0 이 되고, 두 근을 구하지 않고 근과 계수의 관계로 합 -1/3 을 바로 답한다.
    「모든 값의 합」이라는 발문이 근과 계수 사용을 유도하지만 이는 표준 대응이라 통찰로 세지 않았다. STEP 1 출발점 ★2 유지.
  mechanism_primary: "(3x+1)·x-(-5)(-2)=0 → 3x²+x-10=0 → 근의 합 -1/3"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 안의 계수(3x+1, -5, -2, x)를 바꾼다. 제약: 판별식이 양수여야 실근이 둘이고, 근이 영벡터를 만드는 값(두 성분이 동시에 0)이면 평행이 정의되지 않으므로 제외해야 한다."
    creative: "(1) 근의 곱이나 두 근의 차를 묻기(★2 유지) (2) 실근이 존재할 조건을 묻는 판별식 문항으로 바꾸면 ★3(I-BW) (3) 평행 대신 크기가 같을 조건을 주면 같은 이차 구조로 ★2(185-378)."
```

```yaml
- id: GN-GEO-185-381
  page: 185
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(0,2), B(3,5), C(1,x) 에 대하여 벡터 AB 와 AC 가 평행할 때 x 의 값.
  category: "세 점 → 두 벡터 성분 → 평행 조건"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점에서 만든 두 벡터의 평행 조건(세 점이 한 직선 위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(3,3), AC=(1, x-2) 를 만들고 교차곱 3(x-2)-3=0 에서 x=3. 사실상 세 점이 한 직선 위에 있을 조건이다.
    [분류 이슈] 통찰 0·M_total 5 라 −1 후보지만, 세 점을 벡터로 옮기는 단계를 인정해 STEP 1 출발점 ★2 를 유지했다.
  mechanism_primary: "AB, AC 성분화 → 교차곱 0 → x"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/185-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표를 바꾸고 미지수 위치를 C 의 x좌표로 옮길 수도 있다. 제약: 기준 벡터 AB 가 영벡터가 되지 않게 하고, x 가 정수로 떨어지도록 기울기를 유리수로 잡는다."
    creative: "(1) 미지수를 두 점에 나눠 넣어 조건을 하나 더 주면 연립 ★3 (2) 평행 대신 |AB|=|AC| 를 주면 이차식이 되어 해가 둘 ★2~3 (3) 세 점이 삼각형을 이루지 않을 조건을 묻는 서술형으로 바꾸면 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-186-382
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모눈종이 위에 그려진 세 벡터 a, b, c 에 대하여 c=pa+qb 일 때 p+q 의 값.
  category: "그림에서 성분 읽기 → 일차결합 연립 → p+q"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모눈 위 화살표(시점·종점)를 성분으로 옮겨야 대수 계산이 시작된다 — 그림 표현에서 성분 표현으로의 전환이 첫 관문"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그림의 벡터를 성분으로 읽어 일차결합 계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 화살표의 가로·세로 이동량을 정확히 읽는 것이 전부이고, 그 뒤는 2원1차 연립이다. c 가 왼쪽 아래를 향해 부호가 모두 음수라 읽기 함정이 있다.
    그림→성분 전환 통찰(RT d2)이 있으나 뒤 절차는 가벼워 STEP 2 출발점 ★3 을 그대로 두었다.
  mechanism_primary: "모눈에서 a, b, c 성분 읽기 → pa+qb=c 성분 연립 → p+q"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-186-382.png"
  latex: latex-bank/gn-geo/items/186-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 속 세 화살표의 이동량을 바꾼다. 제약: a, b 가 평행하면 c 를 표현할 수 없으므로 일차독립을 유지하고, p·q 가 정수가 되도록 c 를 pa+qb 에서 역산해 그린다. 그림을 바꿀 때는 크롭 이미지도 함께 교체해야 한다(라벨 위치 고정)."
    creative: "(1) p, q 를 각각 묻거나 pq 를 묻기(★3 유지) (2) 그림 없이 성분만 주면 182-e6 과 같아져 ★2 로 내려간다 — 이 문항의 ★ 는 그림 읽기에서 나온다 (3) 네 번째 벡터를 넣어 표현이 유일한지 따지게 하면 ★4."
```

```yaml
- id: GN-GEO-186-383
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a=(3,-1) 에 대하여 a 와 평행하고 크기가 10 인 모든 벡터 b 를 성분으로 나타내기.
  category: "평행 ⟺ 실수배 → 크기 조건으로 배율 결정 → 부호 두 경우"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행하고 크기가 주어진 벡터 구하기(단위벡터의 실수배)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b=ka 로 두면 |b|=|k|√10=10 에서 k=±√10 이 나오고 두 벡터를 모두 써야 한다. 무리수 배율이라 성분 정리가 성가시다.
    부호 두 경우는 표준 분기(T-부호)라 통찰로 세지 않았다. STEP 2 출발점 ★3 유지 — 다만 절차형 ★3 이라 층의 아래쪽이다.
  mechanism_primary: "b=ka → |k||a|=10 → k=±√10 → 두 벡터 성분"
  tier: star_3
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\vec{b}=(3\sqrt{10},\,-\sqrt{10})$, $\vec{b}=(-3\sqrt{10},\,\sqrt{10})$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/186-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 성분과 목표 크기를 바꾼다. 제약: |a| 가 무리수면 배율도 무리수가 되어 성분이 지저분해진다 — |a| 를 5·13 처럼 정수로 잡으면 성분이 깔끔해지고 난이도는 한 단계 내려간다."
    creative: "(1) 방향이 같은 것만 묻도록 좁히면 부호 하나로 ★2 (2) 크기 조건 대신 특정 점을 지날 조건을 주면 ★3 유지 (3) a 와 평행한 단위벡터를 묻는 형태로 바꾸면 ★2."
```

```yaml
- id: GN-GEO-186-384
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(2,2), B(-1,3), C(-2,4) 에 대하여 PA+3PB-PC=2AC 를 만족시키는 점 P(a,b) 에 대하여 ab 의 값.
  category: "P=(x,y) 대입 → 좌변·우변 성분 정리 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식을 만족시키는 점의 좌표(성분 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변의 P 계수 합이 1+3-1=3 이라 좌변이 x, y 의 일차식으로 남고, 우변 2AC 는 상수 벡터다. 성분별 일차방정식 둘로 P 가 결정된다.
    183-373 과 같은 골조에 계수와 우변 고정 벡터가 붙어 계산량만 늘었다. 통찰 없음이지만 STEP 2 출발점 ★3 유지.
  mechanism_primary: "P=(x,y) 대입 → 좌변 (1-3x, 7-3y) 꼴로 정리 → 2AC 와 성분 비교 → ab"
  tier: star_3
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/186-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 좌변 계수(1,3,-1), 우변 배수 2 를 바꾼다. 제약: 좌변의 P 계수 합이 0 이 되면 P 가 소거돼 문제가 성립하지 않는다 — 합이 0 이 아닌 값이 되게 반드시 확인한다."
    creative: "(1) a+b 나 P 와 원점 사이 거리를 묻기(★3 유지) (2) 우변을 크기 조건 |…|=k 로 바꾸면 자취(원)가 되어 ★4 (3) 계수 하나를 미지수로 두고 P 가 특정 직선 위에 오게 하는 값을 묻기(★4 · I-BW)."
```

```yaml
- id: GN-GEO-186-385
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(1,3), B(3,1) 에 대하여 |PA+PB|=10 을 만족시키는 점 P 와 점 (-4,-6) 사이의 거리의 최솟값.
  category: "두 벡터 합을 중점으로 묶기 → 자취가 원 → 원 밖 정점에서의 최단거리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA+PB=2PM(M 은 AB 의 중점)으로 묶어 벡터 크기 조건을 중심 M·반지름 5 인 원의 자취로 전환"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 위를 움직이는 점과 정점 사이 거리의 최솟값을 (중심까지의 거리) - (반지름) 이라는 동치 조건으로 바꿈 — 정점이 원 밖에 있음을 확인해야 성립"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "자취(원) + 원 위의 점과 정점 사이 거리의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중점 M(2,2) 로 묶어 반지름 5 인 원을 얻고, (-4,-6) 까지의 중심거리 10 에서 반지름을 빼 5 를 얻는다.
    자취 전환(RT d2)과 최단거리 동치(EQV d2) 두 단계가 각각 없으면 풀이가 끊긴다. 통찰 2개 → STEP 2 출발점 ★3 에서 +1 → ★4.
  mechanism_primary: "PA+PB=2PM → |PM|=5 인 원 → 정점까지 최솟값 = 중심거리 10 - 반지름 5"
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/186-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표·우변 10·정점 좌표를 바꾼다. 제약: 우변은 짝수여야 반지름이 정수로 떨어지고, 정점과 중심 사이 거리가 반지름보다 커야 「최솟값 = 거리 - 반지름」이 성립한다(정점이 원 안이면 반지름 - 거리). 중심거리가 6-8-10 같은 피타고라스 쌍이 되게 좌표를 잡는다."
    creative: "(1) 최댓값을 함께 묻기(중심거리 + 반지름 · ★4 유지) (2) 정점을 원 안에 두면 케이스 판정이 생겨 ★4~5(I-VF) (3) 정점 대신 직선까지의 최단거리로 바꾸면 점과 직선 거리 공식이 결합돼 ★4(186-387) (4) 세 점 버전 PA+PB+PC 로 올리면 무게중심 원이 되어 골조 유지 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-186-386
  page: 186
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정삼각형 ABC 에 내접하는 원의 방정식이 x²+y²-4x+6y-12=0 일 때, 원점 O 에 대하여 OA+OB+OC 의 크기.
  category: "내접원 중심 = 정삼각형의 무게중심 → 세 벡터 합 = 3OG"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정삼각형에서는 내심이 곧 무게중심이므로, 내접원의 중심 좌표를 무게중심 G 의 좌표로 바꿔 읽음(세 꼭짓점을 구할 필요가 없어진다)"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OA+OB+OC=3OG 로 묶어, 꼭짓점을 모른 채 크기만 계산하는 형태로 전환"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "정삼각형의 내심=무게중심과 OA+OB+OC=3OG"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    원의 방정식을 표준형으로 고쳐 중심 (2,-3) 을 얻는 것은 도형의 방정식 절차지만, 그 점이 무게중심임을 알아채는 것이 이 문항의 관문이다.
    그 뒤 3OG 로 묶으면 크기는 3√13 한 줄. 통찰 2개(EQV d2 · RT d2) → 실력 UP 출발점 ★4 유지(★5 요건인 통찰 3개·저노출 유형은 없음).
  mechanism_primary: "원 방정식 표준형 → 중심 = 내심 = 무게중심 G → OA+OB+OC=3OG → 3|OG|"
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/186-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식의 계수를 바꿔 중심을 옮긴다. 제약: 중심 좌표가 정수여야 완전제곱이 깔끔하고, |OG|² 가 13·25 처럼 정리되는 값이 되게 한다. 반지름은 답에 쓰이지 않으므로 자유롭지만 실제로 내접원이 되도록 양수로 둔다."
    creative: "(1) 외접원으로 바꿔도 정삼각형이면 중심이 같아 답이 같다 — 「정삼각형」 조건을 빼면 성립하지 않는다는 점이 이 문항의 급소 (2) 정삼각형 대신 일반 삼각형의 세 꼭짓점을 주면 단순 무게중심 계산 ★2 로 내려간다 (3) 반지름을 써야 하는 조건(한 꼭짓점의 좌표·둘레)을 덧붙이면 ★5 후보."
```

```yaml
- id: GN-GEO-186-387
  page: 186
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(2,3), B(3,2) 와 직선 y=-x+2 위를 움직이는 점 P 에 대하여 |AP+BP| 의 최솟값.
  category: "두 벡터 합을 중점으로 묶기 → 점과 직선 사이 거리로 전환"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AP+BP=2MP(M 은 AB 의 중점)로 묶어 두 벡터 문제를 한 점 M 과 움직이는 점 P 의 거리 문제로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선 위를 움직이는 P 에 대한 |MP| 의 최솟값을 점 M 과 직선 사이의 거리라는 동치 조건으로 바꿈(수선의 발일 때 최소)"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "중점으로 묶은 벡터 크기의 최솟값 — 점과 직선 사이의 거리"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중점 M(5/2, 5/2) 로 묶어 |AP+BP|=2|MP| 를 얻고, P 가 직선 위를 움직이므로 최솟값은 2 × (M 과 직선 사이 거리)다.
    성분으로 P=(t, -t+2) 를 대입해 이차함수로 풀어도 되지만 그 경로는 계산이 훨씬 무겁다. 통찰 2개(RT d2 · EQV d2) → 실력 UP ★4.
  mechanism_primary: "AP+BP=2MP → |MP| 최소 = M 과 직선 사이 거리 → 2배"
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/186-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선의 방정식을 바꾼다. 제약: 중점 M 이 직선 위에 있으면 최솟값이 0 이 되어 문제가 무너지므로 반드시 직선 밖에 두고, 점-직선 거리가 근호 정리되는 값(3/√2 → 3√2)이 되도록 상수를 맞춘다."
    creative: "(1) 직선 대신 원 위를 움직이게 하면 186-385 와 같은 골조 ★4 (2) 최댓값을 물으면 직선에서는 존재하지 않으므로 「존재하지 않음」 판정 문항이 되어 ★4~5(I-VF) (3) 점을 셋으로 늘려 |AP+BP+CP| 로 바꾸면 무게중심 기준 3배가 되어 골조 유지 ★4 (4) P 가 선분 위로 제한되면 수선의 발 포함 여부 분기가 생겨 ★5 후보(I-VF)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 5 · ★2 18 · ★3 5 · ★4 3 · ★5 0
- 통찰형 8 · 절차형 23 · premium 0 (통찰은 I-RT 6 · I-EQV 3 로만 구성 — 이 단원에는 SC/VF/SYM/XU 가 한 건도 없어 ★5 요건이 구조적으로 성립하지 않는다)
- 통찰 2개 이상인 문항은 186-385 · 186-386 · 186-387 셋뿐이고 모두 ★4 다
- type_hint 상위 5: 「평행 조건으로 계수·미지수 구하기」 5(`182-e7`·`182-371`·`185-380`·`185-381`·`186-383`) · 「벡터방정식·성분 연산과 크기」 5(`180-365`·`181-e5`·`181-367`·`181-368`·`185-377`) · 「벡터가 같을 조건으로 미지수·점 구하기」 5(`180-364`·`182-e6`·`182-370`·`183-372`·`186-382`) · 「점의 자취(원·직선)와 최솟값」 5(`184-e9`·`184-374`·`184-375`·`186-385`·`186-387`) · 「성분 → 크기(단위벡터 포함)」 4(`180-363`·`180-366`·`185-376`·`185-378`)
- M_total 분포: 4 네 문 · 5 다섯 문 · 6 아홉 문 · 7 열세 문 (최대 7 — 노동량 상한이 낮고 변별은 자취·최솟값 전환에서 난다)
- 그림: 2문(`crop:fig-180-362.png` 익히기 · `crop:fig-186-382.png` STEP 2). 나머지 29문은 발문에 성분·좌표가 모두 적혀 있어 크롭 없이 골조가 선다
- 대상층: 하위권 4 · 중하위권 16 · 중위권 8 · 중상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-181-368 | 미지 벡터가 없어 전개·대입뿐(통찰 0 · M_total 5)이라 v3.8 −1 후보. 확인체크를 예제 짝으로 읽은 출발점 ★2 를 유지 | ★1 / ★2 |
| GN-GEO-184-375 | 태그는 「확인체크」(문자 그대로면 ★1 출발)인데 골조·통찰이 바로 위 필수 예제 184-e9 와 같아 예제 기준 ★2 출발 + 전환 통찰 +1 → ★3. 벤더 신호와 2단 차 | ★2 / ★3 |
| GN-GEO-185-381 | 교차곱 한 줄로 끝나 통찰 0 · M_total 5 → −1 후보. STEP 1 구역 신호를 존중해 ★2 유지 | ★1 / ★2 |
| GN-GEO-186-383 | STEP 2 이지만 통찰 0 · 절차형(실수배 + 부호 두 경우). 무리수 배율 계산 부담만 ★3 층이라 「계산 마찰로 어려운 문항」(v3.8 §2.11 YELLOW) 성격 | ★2 / ★3 |
| GN-GEO-186-384 | STEP 2 이지만 183-373 과 같은 성분 연립 골조에 계수·고정 벡터만 붙은 계산량 증가형. 통찰 0 으로 ★3 을 지탱하는 근거가 약함 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 네 계열로 깨끗하게 갈린다. **㉮ 성분 연산·크기**(벡터방정식 포함) · **㉯ 두 벡터가 같을 조건**(미지수·점의 좌표 복원) · **㉰ 평행 조건** · **㉱ 자취와 최솟값**. 앞 셋은 base ★2, ㉱ 만 base ★3~4 로 두면 이 파일의 라벨과 맞는다.
- ㉮ 안에서 「벡터방정식으로 미지 벡터 구하기」(`181-e5`·`181-367`·`185-377`)와 「주어진 벡터들의 일차결합 계산」(`180-365`·`181-368`)은 **통합해도 된다** — 미지 벡터 유무는 난이도 축이지 유형 축이 아니다.
- ㉯ 와 ㉰ 는 **통합하면 안 된다**. 상등은 성분 두 개의 연립(해가 유일), 평행은 교차곱 하나의 방정식(미지수가 성분 안에 있으면 이차식)이라 변형 시 제약 조건이 다르다(평행은 영벡터·해의 개수를 따로 챙겨야 한다).
- ㉱ 는 하위 유형 셋으로 나누는 편이 변형 설계에 유용하다: **자취 구하기**(`184-e9`·`184-374`·`184-375`) · **자취 + 정점까지 최단거리**(`186-385`) · **직선 위 움직이는 점의 최솟값**(`186-387`). 뒤 둘이 ★4 층을 지탱한다.
- `186-386` 은 이 단원 유일하게 도형의 성질(정삼각형 내심=무게중심)을 끌어오는 문항이라 카탈로그에서 **별도 유형**으로 세워야 한다. ㉱ 에 넣으면 자취 계열의 변형 규칙이 오염된다.
- ★5 를 이 단원에서 만들려면 I-VF(케이스 기각)나 I-SC(성분 vs 기하 두 갈래 선택)를 의도적으로 설계해야 한다. 현재 31문에는 그 씨앗이 `185-378`(x≠0 단서)·`186-387`(선분 제한 변형) 정도뿐이다.
