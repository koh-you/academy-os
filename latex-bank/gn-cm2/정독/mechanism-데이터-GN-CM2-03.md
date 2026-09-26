---
name: mechanism-데이터-GN-CM2-03
description: 개념원리 공통수학2 03 삼각형의 무게중심(1/1 · 28~32쪽 22문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 03 삼각형의 무게중심
  unit_code: GN-CM2-03
  part: "1/1"
  extract_range: "28~32쪽 · 28-e13~32-60"
  total_problems: 22
  unit_total: 22
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 03 삼각형의 무게중심 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 28~32쪽, 단원 03 「삼각형의 무게중심」 전 22문항을 다룬다. 구역은 `필수·발전 예제`(예제 2 + 확인체크 5) · `연습문제 STEP 1`(6) · `연습문제 STEP 2`(5) · `연습문제 실력 UP`(4) 네 개다.

개념원리 고등의 난이도 신호는 구역과 태그에 있다. 「필수」 예제는 ★2, 「발전」 예제는 ★3, 예제 뒤의 「확인체크」는 그 예제의 직접 적용(필수 뒤 ★1 · 발전 뒤 ★2)이 출발점이고, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 에서 출발한다. 「교육청 기출」 태그는 +0~1 이다. 이 출발점에서 M_total 과 통찰 유무로 ±1 만 조정했고, 벤더 라벨에 억지로 맞추지 않았다.

이 단원의 도구는 사실상 세 개뿐이다 — 내분점·외분점 공식, 무게중심 공식, 그리고 「AP²+BP²+CP² 의 최솟값은 무게중심에서」라는 성질. 그래서 변별은 도구의 개수가 아니라 **조건을 그 세 도구가 먹을 수 있는 형태로 옮기는 단계**에서 생긴다(내분비 뒤집기 · 중점·내분점의 좌표 합 불변 · 교점을 이차방정식의 두 근으로 보기 · 외각의 이등분선 정리를 외분점으로 옮기기). 그 지점을 `insights[]` 로 표시했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-28-e13
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 꼭짓점 A(1, 5), B(6, 1)과 무게중심 (5, 5)가 주어졌을 때 나머지 꼭짓점 C의 좌표.
  category: "무게중심 공식 → 남은 꼭짓점 역산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심 — 무게중심 좌표에서 꼭짓점 역산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    C(x, y)로 두고 무게중심 공식에 넣으면 x, y 각각 일차식 하나씩. 변형 단계도 계산도 한 줄이다.
    벤더 「필수」 예제(★2 출발)이나 통찰 0 · M_total 3 이라 −1 을 적용해 ★1 로 둔다. 이 단원 공식의 최초 직접 적용판이다.
  tier: star_1
  mechanism_primary: '세 좌표의 평균 = $(5,\,5)$ → $1+6+x=15$, $5+1+y=15$ → $\pt{C}(8,\,9)$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(8,\,9)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/28-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 무게중심 좌표를 자유롭게. 제약: 세 x좌표의 합과 세 y좌표의 합이 각각 3의 배수여야 C 가 정수점으로 떨어진다. 무게중심을 원점으로 두면 C = −(A+B) 로 더 쉬워지므로 난이도를 유지하려면 원점은 피한다."
    creative: "(1) 무게중심 대신 한 변의 중점을 주고 무게중심을 묻기(★1 유지 · 28-42 형) (2) 세 꼭짓점 중 둘에 미지수를 넣기(★1~2 · 28-41 형) (3) 무게중심이 어떤 직선 위에 있을 조건으로 매개변수화하면 Mₐ 상승 → ★2."
```

```yaml
- id: GN-CM2-28-41
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(a, 5), B(−1, b), C(5, 1)의 무게중심이 (2, 3)일 때 a, b의 값.
  category: "무게중심 공식 → 미지수 두 개를 각 좌표축에서 분리해 결정"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무게중심 좌표 조건에서 꼭짓점의 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    미지수가 둘이지만 a 는 x좌표 식에만, b 는 y좌표 식에만 들어가 연립이 아니라 독립 일차식 두 개다.
    필수 예제 뒤 확인체크(★1 출발) · 통찰 0 · M_total 4 → ★1 유지. Mₐ 만 매개변수 때문에 2.
  tier: star_1
  mechanism_primary: '$x$: $a-1+5=6$ → $a=2$ · $y$: $5+b+1=9$ → $b=3$ (두 축 독립)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a=2$, $b=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/28-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 무게중심을 바꾼다. 제약: a, b 가 정수로 떨어지도록 나머지 두 x좌표 합과 3×(무게중심 x)의 차를 맞춘다. 미지수를 같은 축에 둘 개 넣으면(예: A(a,5), B(b,1)) 부정이 되므로 축을 갈라 배치한다."
    creative: "(1) a, b 를 각각 묻지 말고 a+b·ab 를 묻기(★1 유지) (2) 무게중심 대신 두 변의 중점을 주기(★2) (3) 「a, b 가 자연수」 조건으로 부정방정식화하면 경우 나눔이 생겨 I-MI → ★3."
```

```yaml
- id: GN-CM2-28-42
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    꼭짓점 A(−5, 6)과 변 BC의 중점 (1, 0)이 주어졌을 때 삼각형 ABC의 무게중심.
  category: "중점 → 두 꼭짓점 좌표 합 → 무게중심 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 꼭짓점과 대변의 중점으로 무게중심 구하기(중선의 2:1 내분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    B, C 를 각각 구할 필요 없이 중점 조건이 곧 B+C = 2×(중점) 이다. 여기에 무게중심 공식을 쓰면 끝.
    「무게중심은 중선을 꼭짓점에서 2:1 로 내분」이라는 교과 성질을 그대로 쓰는 표준 절차라 통찰로 카운트하지 않는다. 확인체크(★1 출발) 유지.
  tier: star_1
  mechanism_primary: '$\pt{B}+\pt{C}=2(1,\,0)$ → 무게중심 $=\dfrac{\pt{A}+2\pt{M}}{3}=(-1,\,2)$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-1,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/28-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 와 중점 M 을 바꾼다. 제약: A+2M 의 각 성분이 3의 배수여야 무게중심이 정수점. 반대로 무게중심과 A 를 주고 중점을 묻는 역방향도 같은 제약."
    creative: "(1) 무게중심과 중점을 주고 A 를 묻기(★1 유지 · 역방향) (2) 중선의 길이를 함께 묻어 거리 공식을 얹기(★2) (3) 세 중선의 교점임을 쓰는 다른 두 중점도 주고 일관성을 확인하게 하면 조건 통합 → ★2~3."
```

```yaml
- id: GN-CM2-28-43
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 변 AB, BC, CA의 중점이 (−4, 5), (−1, −2), (5, 6)일 때 삼각형 ABC의 무게중심.
  category: "중점 세 개의 좌표 합 = 꼭짓점 세 개의 좌표 합 → 무게중심 일치"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 중점의 좌표 합이 ((A+B)+(B+C)+(C+A))/2 = A+B+C 임을 보고, 꼭짓점을 구하지 않고 중점삼각형의 무게중심을 그대로 답으로 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 변의 중점 좌표로 무게중심 구하기(중점삼각형과 무게중심 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 불변을 못 보면 세 중점 조건으로 A, B, C 에 대한 연립 세 개를 풀어야 하므로 체감 난이도가 갈린다.
    벤더 확인체크(★1 출발)이나 「구하지 않고 끝내는」 동치 변환이 핵심이라 ★2 로 올린다. 같은 골조가 30-50(같은 비 내분점)에서 한 번 더 나온다.
  tier: star_2
  mechanism_primary: '세 중점의 좌표 합 $=\pt{A}+\pt{B}+\pt{C}$ → 중점삼각형의 무게중심 $(0,\,3)$ 이 그대로 답'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(0,\,3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/28-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 중점 좌표는 거의 자유. 제약: 실제 삼각형이 되도록 세 점이 일직선이 아니어야 하고, 합이 3의 배수여야 무게중심이 정수점. 꼭짓점까지 정수로 만들려면 (−중점1+중점2+중점3) 류 조합도 정수여야 한다."
    creative: "(1) 중점 셋으로 꼭짓점 A 를 묻기(연립이 강제되어 ★3) (2) 중점삼각형의 넓이·둘레와 원삼각형의 관계를 얹기(★3) (3) 중점 대신 세 변을 같은 비로 내분한 점을 주면 같은 합 불변 골조로 30-50 형(★2)."
```

```yaml
- id: GN-CM2-29-e14
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    A(−2, 7), B(6, −1), C(8, 3)과 임의의 점 P에 대하여 ⑴ AP²+BP²+CP²의 최솟값과 그때의 P ⑵ 삼각형 ABC의 무게중심.
  category: "P(x, y) 이차식 → 완전제곱 → 최소를 주는 점이 무게중심"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기하적인 거리 제곱의 합을 P(x, y)의 x·y 각각에 대한 이차식으로 옮겨 완전제곱하고, 최솟값을 주는 점이 세 좌표의 평균 즉 무게중심임을 읽어낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "AP²+BP²+CP² 의 최솟값과 무게중심(이차식 완전제곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴에서 세운 완전제곱의 꼭짓점이 ⑵의 무게중심과 같다는 것이 이 예제의 설계 의도다. 소문항 구조가 통찰을 안내해 주므로 발견 부담은 낮다.
    「발전」 예제 ★3 출발 · 통찰 1개(RT d2) · M_total 6 → ★3 유지. 이 성질이 29-44·29-45·30-51·32-60 의 공통 원천이다.
  tier: star_3
  mechanism_primary: '$\pt{P}(x,\,y)$ 로 두고 거리 제곱 합을 전개 → $3(x-4)^2+3(y-3)^2+88$ → 최소 $88$, $\pt{P}=$ 무게중심 $(4,\,3)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 최솟값: $88$, $\pt{P}(4,\,3)$ ⑵ $(4,\,3)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/29-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점 좌표 자유. 제약: 좌표 합이 3의 배수여야 무게중심·최솟값이 정수로 떨어진다. 최솟값은 항상 3×(무게중심에서 세 꼭짓점까지 거리 제곱의 평균) 꼴이므로, 답을 예쁘게 하려면 무게중심을 정수점에 두고 세 꼭짓점을 그 주위 정수점으로 배치한다."
    creative: "(1) ⑵를 빼고 ⑴만 물으면 통찰 안내가 사라져 ★3~4 (2) 점의 개수를 넷으로 늘려 AP²+…+DP² 로 확장(무게중심 정의가 바뀌어 I-PD 성격 · ★4) (3) 최솟값을 주고 꼭짓점의 미지수를 역추적하게 하면 32-60 형(★3) (4) P 를 직선 위로 제한하면 조건부 최소 → ★4."
```

```yaml
- id: GN-CM2-29-44
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(−2, 1), B(3, 4), C(5, 4)에 대하여 AP²+BP²+CP²이 최소가 되는 P(a, b)의 a+b.
  category: "최소점 = 무게중심 성질의 직접 적용"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리 제곱 합이 최소인 점 = 무게중심(성질 적용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성질을 알고 있으면 무게중심 (2, 3) 을 계산해 더하는 한 줄이고, 모르면 29-e14 의 완전제곱을 다시 해야 한다.
    발전 예제 직후의 확인체크(★2 출발) · 통찰 0 · M_total 3 으로 −1 후보이지만, 성질 자체가 진입 조건이라 −1 은 적용하지 않고 ★2 로 둔다.
  tier: star_2
  mechanism_primary: '최소점 $=$ 무게중심 $(2,\,3)$ → $a+b=5$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/29-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표 자유. 제약: 좌표 합이 3의 배수여야 a, b 가 정수. a+b 대신 ab·a−b 를 물어도 골조 동일."
    creative: "(1) 최솟값까지 함께 묻기(29-45 형 · ★2) (2) P 를 x축 위로 제한하면 y 항이 상수가 되어 조건부 최소 → ★3 (3) 세 점 중 하나에 미지수를 넣고 최솟값을 주면 32-60 형(★3)."
```

```yaml
- id: GN-CM2-29-45
  page: 29
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(−5, −2), B(2, 3), C(6, −7)과 임의의 점 P에 대하여 AP²+BP²+CP²의 최솟값과 그때의 P.
  category: "최소점 = 무게중심 → 무게중심에서의 거리 제곱 합 계산"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리 제곱 합의 최솟값과 최소점(무게중심 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    29-44 와 달리 최솟값까지 요구하므로 무게중심 (1, −2) 를 구한 뒤 세 거리 제곱을 실제로 더하는 계산이 붙는다.
    성질 적용 + 산술이라 통찰은 없고 Mₖ 만 2. 발전 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '무게중심 $(1,\,-2)$ → 세 꼭짓점까지의 거리 제곱 합 $=112$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최솟값: $112$, $\pt{P}(1,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/29-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표 자유. 제약: 좌표 합이 3의 배수(무게중심 정수) + 거리 제곱 합이 정수로 떨어지게. 무게중심을 원점으로 두면 최솟값이 곧 세 점의 좌표 제곱 합이 되어 계산이 급격히 쉬워지므로 난이도 유지 시 피한다."
    creative: "(1) 최솟값만 주고 꼭짓점 하나를 역추적(★3) (2) 계수를 붙여 2AP²+BP²+CP² 로 바꾸면 최소점이 가중평균이 되어 I-PD·I-EQV → ★4 (3) 네 점으로 확장(★3~4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-30-46
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(−4, a), B(b, 1)을 이은 선분 AB 위의 점 P(0, 1)이 3AP = 4PB를 만족시킬 때 a+b.
  category: "길이 관계식 → 내분비 → 내분점 공식으로 미지수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3AP = 4PB 라는 길이 등식을 AP:PB = 4:3 이라는 내분비로 뒤집어 옮긴다(계수와 비가 반대로 대응)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "길이 비 조건으로 주어진 내분점에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비를 3:4 로 잘못 뒤집으면 그대로 오답이 나오는 구조(T-표기 함정 1개)라 Mₜ 를 1 로 잡았다.
    비만 바로 세우면 x식에서 b, y식에서 a 가 독립으로 떨어진다. STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$3\seg{AP}=4\seg{PB}$ → $\seg{AP}:\seg{PB}=4:3$ → $\pt{P}=\dfrac{3\pt{A}+4\pt{B}}{7}=(0,\,1)$ → $b=3$, $a=1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3, 4 를 다른 서로소 쌍(2·5, 3·2)으로, P 와 알려진 좌표도 자유. 제약: 내분점 공식의 분모(계수 합)가 분자를 나누어떨어지게 해야 a, b 가 정수. P 는 반드시 선분 AB 내부에 오도록 둔다(그렇지 않으면 외분이 되어 조건과 모순)."
    creative: "(1) 「선분 AB 위」를 「직선 AB 위」로 바꾸면 외분 경우가 추가되어 I-MI → ★3(32-58 형) (2) P 를 미지수로 두고 a, b 를 주기(★2 역방향) (3) 3AP = 4PB 를 AP:AB 비로 바꿔 쓰면 난이도 하락 → ★1."
```

```yaml
- id: GN-CM2-30-47
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(1, −3), B(−4, 6)에 대하여 선분 AB를 k:(1−k)로 내분하는 점이 제2사분면에 있도록 하는 실수 k의 범위.
  category: "매개변수 내분점 → 사분면 부등식 + 내분 성립 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제2사분면 조건을 x<0 · y>0 연립으로 옮기는 동시에, k:(1−k) 가 내분비이려면 0<k<1 이어야 한다는 숨은 조건을 함께 부과한다(답의 위끝 k<1 이 여기서 나온다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "내분비가 매개변수일 때 내분점이 특정 사분면에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k:(1−k) 는 분모가 1 이라 내분점이 (1−5k, −3+9k) 로 깔끔하게 나오고, 사분면 조건만 풀면 k>1/3 까지 간다.
    위끝 k<1 은 부등식이 아니라 「내분비의 두 항이 모두 양수」라는 정의에서 온다 — 이 조건을 빠뜨리면 답이 k>1/3 로 틀린다. [분류 이슈] 이 조건을 통찰(EQV)로 볼지 T-범위 함정으로만 볼지 갈린다.
  tier: star_2
  mechanism_primary: '내분점 $=(1-5k,\,-3+9k)$ → $x<0$, $y>0$ → $k>\dfrac13$ · 내분 조건 $0<k<1$ 결합 → $\dfrac13<k<1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}<k<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꾼다. 제약: x좌표와 y좌표가 부호를 바꾸는 k 값이 서로 달라야 범위가 한쪽만 결정되지 않는다. 두 임계값 중 큰 쪽이 1 보다 작아야 답이 공집합이 되지 않는다."
    creative: "(1) 제1·제3·제4사분면으로 바꾸면 임계값 조합이 달라지고 공집합이 나올 수도 있어 검증 부담 추가 → ★3 (2) 「축 위」를 포함시키면 경계 처리(T-경계) 추가 (3) k:(1−k) 대신 k:1 로 두면 분모가 k+1 이 되어 유리부등식 → ★3."
```

```yaml
- id: GN-CM2-30-48
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(−3, 1), B(1, 6)을 이은 선분 AB가 y축에 의하여 m:n으로 내분될 때 m+n (m, n은 서로소인 자연수).
  category: "y축 위 → 내분점의 x좌표 = 0 → 비 결정"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분이 좌표축에 의해 내분되는 비 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「y축 위」를 x좌표 0 으로 옮기는 것은 이 단원의 표준 절차라 통찰로 세지 않는다. 식 하나로 m = 3n 이 나오고 서로소 조건이 대표 쌍 (3, 1) 을 고정한다.
    통찰 0 · M_total 4 로 −1 후보이지만 미지수 비를 세우는 설정 단계가 있어 STEP 1 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: '$\dfrac{m\cdot 1+n\cdot(-3)}{m+n}=0$ → $m=3n$ → 서로소 $(m,\,n)=(3,\,1)$ → $m+n=4$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 x좌표는 반드시 부호가 달라야 y축이 선분을 내분한다(같은 부호면 외분이라 문제가 성립하지 않음). 비를 정수로 만들려면 두 x좌표의 절댓값 비가 유리수로 예쁘게 떨어지게 둔다. y축 대신 x축이면 y좌표로 같은 조건."
    creative: "(1) 직선 y=x 나 y=2 같은 일반 직선으로 내분되는 비로 바꾸기(★3) (2) 내분비를 주고 A 의 좌표를 역추적(★2) (3) 두 좌표축 모두에 대한 비를 각각 구해 비교하게 하면 조건 통합 → ★3."
```

```yaml
- id: GN-CM2-30-49
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(a, 3), B(3, 1), C(b, c), D(4, 4)를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때 a²+b²+c².
  category: "마름모 → 대각선 중점 일치 + 이웃 변 길이 같음 두 조건으로 미지수 3개 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마름모라는 도형 조건을 좌표 조건 둘로 분해해 옮긴다 — 두 대각선 AC, BD 의 중점이 일치(→ b, c)와 이웃 두 변 AB = AD 의 길이가 같음(→ a)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행사변형·마름모 조건에서 꼭짓점 좌표 구하기(대각선 중점 일치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 셋인데 조건은 「마름모」 한 마디뿐이라, 그 한 마디를 둘로 분해하는 단계가 이 문제의 전부다.
    중점 일치로 a+b = 7, c = 2 를 먼저 얻고 AB = AD 에서 a = 2 가 나오면 b = 5 로 닫힌다. 벤더 STEP 1(★2 출발)이나 조건 분해 2단 + 미지수 3개라 ★3 으로 올린다.
  tier: star_3
  mechanism_primary: '대각선 중점 일치 $\pt{A}+\pt{C}=\pt{B}+\pt{D}$ → $a+b=7$, $c=2$ · $\seg{AB}=\seg{AD}$ → $a=2$, $b=5$ → $a^2+b^2+c^2=33$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B, D 좌표를 먼저 정하고 그에 맞는 마름모를 역설계한다. 제약: AB = AD 에서 a 에 대한 이차항이 소거되어 일차식이 되어야 답이 하나로 떨어진다(대칭 배치). 변의 길이가 무리수여도 제곱만 쓰므로 무방하지만 a, b, c 는 정수로 맞춘다."
    creative: "(1) 마름모를 정사각형으로 바꾸면 수직 조건(기울기 곱 −1)이 추가되어 ★4 (2) 마름모의 넓이나 대각선 길이를 묻기(★3) (3) 「평행사변형」으로만 약화하면 조건이 하나 줄어 미지수가 남으므로 묻는 대상을 a+b 류 대칭식으로 바꿔야 함(★2)."
```

```yaml
- id: GN-CM2-30-50
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(a, 2), B(−1, 0), C(5, b)의 세 변 AB, BC, CA를 2:1로 내분하는 점을 D, E, F라 할 때 삼각형 DEF의 무게중심이 (2, 1)이면 ab.
  category: "같은 비 내분점 세 개의 좌표 합 불변 → 두 삼각형의 무게중심 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 변을 같은 비로 내분하면 D+E+F = A+B+C 이므로 삼각형 DEF 의 무게중심 조건을 곧바로 삼각형 ABC 의 무게중심 조건으로 바꿔 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 변의 같은 비 내분점으로 만든 삼각형의 무게중심(합 불변)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D, E, F 를 일일이 써서 평균을 내도 같은 결과가 나오므로 통찰은 필수가 아니라 단축용이다(depth 1).
    합 불변을 쓰면 a−1+5 = 6, 2+0+b = 3 두 줄로 끝난다. STEP 1 ★2 출발 유지. 28-43 과 같은 골조의 내분비판이다.
  mechanism_primary: '$\pt{D}+\pt{E}+\pt{F}=\pt{A}+\pt{B}+\pt{C}$ → $\pt{ABC}$ 의 무게중심 $=(2,\,1)$ → $a=2$, $b=1$ → $ab=2$'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비 2:1 을 다른 비(3:2, 1:3)로 바꿔도 합 불변은 그대로 성립하므로 답이 변하지 않는다 — 이 점이 좋은 함정이자 검증 포인트. 좌표는 세 x좌표 합·y좌표 합이 3의 배수가 되도록 둔다."
    creative: "(1) 세 변의 내분비를 서로 다르게 주면 합 불변이 깨져 직접 계산이 강제됨 → ★3~4 (2) 삼각형 DEF 의 넓이와 ABC 의 넓이 비를 묻기(★3) (3) 내분비를 미지수 t:(1−t) 로 두고 무게중심이 t 에 무관함을 보이게 하면 I-SYM → ★4."
```

```yaml
- id: GN-CM2-30-51
  page: 30
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(1, 3), B(−3, −2), C(2, 2)에 대하여 PA²+PB²+PC²이 최소가 되는 P에 대하여 선분 PA의 길이.
  category: "최소점 = 무게중심 → 두 점 사이의 거리 공식"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리 제곱 합이 최소인 점에서의 거리 구하기(무게중심 + 거리 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무게중심 (0, 1) 을 구한 뒤 A 까지의 거리를 한 번 계산하면 끝나는 2단 절차다. 29-44 에 거리 공식 한 단계를 얹은 형태.
    통찰 0 · M_total 4 로 −1 후보이지만 성질 적용 + 거리 공식 두 도구가 이어지므로 STEP 1 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: '최소점 $=$ 무게중심 $(0,\,1)$ → $\seg{PA}=\sqrt{1^2+2^2}=\sqrt5$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/30-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표 자유. 제약: 좌표 합이 3의 배수(무게중심 정수) + 무게중심에서 묻는 꼭짓점까지의 거리 제곱이 예쁜 수가 되도록. PA 대신 PB·PC 를 묻거나 PA+PB+PC 대신 PA²+PB²+PC² 최솟값을 묻는 것도 같은 골조."
    creative: "(1) PA·PB·PC 중 가장 긴 것을 묻으면 세 거리 비교가 추가되어 ★3 (2) 무게중심이 원점이 되도록 배치하고 PA 의 길이를 묻기(★1~2) (3) P 가 무게중심일 때 삼각형 PAB 의 넓이를 묻기(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-31-52
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    선분 AB의 중점을 M₁, 선분 AM₁의 중점을 M₂, … 로 정할 때 M₁₀이 선분 AB를 1:k로 내분하면 k의 값.
  category: "중점 반복 → AMₙ = AB/2ⁿ 일반항 발견 → 내분비로 환원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "M₁, M₂, M₃ 을 몇 개 만들어 보고 AMₙ = AB/2ⁿ 이라는 일반항을 스스로 발견해 M₁₀ 까지 건너뛴다(10번 계산하지 않는다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "반복 중점으로 정한 점의 내분비(일반항 발견)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표가 전혀 없이 비만 다루는 문항이라 계산은 가볍고, 변별은 「1/2ⁿ 을 1:k 꼴로 옮기는」 마지막 한 줄에 있다.
    AM₁₀ = AB/1024 를 1:1023 으로 바꿔야 하는데 1:1024 로 답하기 쉽다(T-표기 함정). STEP 2 ★3 출발 · 통찰 1개(PD d2) → ★3 유지.
  tier: star_3
  mechanism_primary: '$\seg{AM_n}=\dfrac{\seg{AB}}{2^n}$ → $\seg{AM_{10}}:\seg{M_{10}B}=1:(2^{10}-1)$ → $k=1023$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1023$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/31-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첨자 10 을 다른 수로(6 → 63, 8 → 255). 제약: 답이 2ⁿ−1 꼴이라 첨자가 커지면 수만 커지고 난이도는 그대로다. 「중점」을 「1:2 내분점」으로 바꾸면 공비가 1/3 이 되어 답이 3ⁿ−1 꼴."
    creative: "(1) 반대쪽에서 시작해 M 을 B 쪽으로 잡으면 비의 방향이 뒤집혀 검증 부담 추가(★3) (2) A(0), B(1) 을 수직선에 얹어 M₁₀ 의 좌표를 묻기(★3) (3) 중점 조작을 A, B 번갈아 적용하면 진동하는 점화식이 되어 I-PD depth 3 → ★4."
```

```yaml
- id: GN-CM2-31-53
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 y=x²−2x와 직선 y=3x+k (k>0)의 두 교점 P, Q에 대하여 선분 PQ를 1:2로 내분하는 점의 x좌표가 1일 때 상수 k. (P의 x좌표 < Q의 x좌표)
  category: "교점 → 이차방정식의 두 근 → 내분 조건 + 근과 계수의 관계 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 교점을 좌표로 구하려 하지 않고 x²−5x−k=0 의 두 근 α, β 로 옮겨 놓는다(기하 → 대수 전환)"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌표단원의 내분 조건 2α+β=3 과 공통수학1 의 근과 계수의 관계 α+β=5, αβ=−k 를 한 연립으로 묶어 k 를 뽑는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 직선의 두 교점을 잇는 선분의 내분점 조건에서 상수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    k 가 미지수라 교점 좌표를 직접 구할 수 없고, 두 근의 합·곱만으로 조건을 닫아야 한다는 점이 이 문항의 전부다.
    2α+β=3 과 α+β=5 로 α=−2, β=7 이 나오고 αβ=−k 에서 k 가 결정된다. 「P의 x좌표 < Q의 x좌표」 단서를 놓치면 내분 방향이 뒤집힌다(T-표기).
    STEP 2 ★3 출발 + 통찰 2개(RT·XU) → +1 로 ★4. 교육청 기출 신호와도 일치한다.
  tier: star_4
  mechanism_primary: '교점 $x$좌표 $=x^2-5x-k=0$ 의 두 근 → $\dfrac{2\alpha+\beta}{3}=1$ 과 $\alpha+\beta=5$ → $\alpha=-2,\ \beta=7$ → $\alpha\beta=-k$ → $k=14$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: "답지"
  figure: 'crop:fig-31-53.png'
  latex: latex-bank/gn-cm2/items/31-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비 1:2 와 내분점의 x좌표를 바꾼다. 제약: 두 근이 실수여야 하므로 판별식 25+4k>0 과 k>0 을 함께 확인하고, 2α+β 와 α+β 연립이 정수 근을 주도록 값을 고른다. 곡선·직선의 계수를 바꾸면 근의 합이 달라지므로 내분 조건도 같이 맞춘다."
    creative: "(1) 내분점 대신 중점의 x좌표를 주면 α+β 만으로 끝나 ★2~3 으로 하락 (2) y좌표 조건으로 주면 직선 식 대입 한 단계가 더 붙어 ★4 유지 (3) 내분점이 특정 직선 위에 있을 조건으로 바꾸면 x·y 두 조건 결합 → ★4~5 (4) k 의 범위를 묻는 형태로 바꾸면 판별식이 본질이 되어 I-MI 추가."
```

```yaml
- id: GN-CM2-31-54
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    평행사변형 ABCD의 세 꼭짓점이 A(−1, 3), B(−5, 1), C(−3, k)이고 둘레의 길이가 6√5일 때 점 D의 좌표.
  category: "둘레 → 이웃 변 길이 → k 후보 → 퇴화 케이스 기각 → 대각선 중점 일치로 D"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 6√5 를 2(AB+BC)=6√5 즉 BC=√5 라는 한 변의 길이 조건으로 옮긴다(AB=2√5 는 이미 계산 가능)"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(k−1)²=1 에서 k=0, 2 두 후보가 나오지만 k=2 이면 A, B, C 가 한 직선 위에 놓여 평행사변형이 되지 않으므로 기각해야 한다 — 검증을 빼면 답이 둘이 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평행사변형의 둘레 조건에서 꼭짓점 좌표 구하기(퇴화 케이스 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    본체 계산(거리 공식 두 번 + 대각선 중점 일치)은 표준이고, 변별은 k=2 를 버리는 마지막 한 줄에 있다.
    BA=(4, 2), BC=(2, 1) 이 평행해지는 것이 기각 근거다. 통찰 2개지만 하나가 depth 1 이고 골조가 표준이라 +1 을 적용하지 않고 STEP 2 ★3 을 유지한다.
    [분류 이슈] I-VF 를 근거로 ★4 로 볼 여지가 있다(★3/★4 경계).
  tier: star_3
  mechanism_primary: '$\seg{AB}=2\sqrt5$ → $\seg{BC}=\sqrt5$ → $(k-1)^2=1$ → $k=0$ (＊$k=2$ 는 세 점 일직선이라 기각) → $\pt{D}=\pt{A}+\pt{C}-\pt{B}=(1,\,2)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(1,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/31-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 와 둘레를 바꾼다. 제약: 두 변의 길이가 모두 같은 무리수 √5 의 배수처럼 같은 꼴이어야 둘레가 예쁘게 떨어지고, C 의 x좌표를 고정해 k 만 미지수로 남겨야 이차방정식이 된다. 퇴화 케이스가 실제로 하나 생기도록 배치를 잡아야 I-VF 가 살아 있다."
    creative: "(1) 둘레 대신 넓이를 주면 외적 꼴 계산이 들어가 ★4 (2) 「평행사변형」을 「마름모」로 바꾸면 조건이 하나 더 붙어 k 가 바로 결정됨 → ★3 (3) D 대신 두 대각선의 교점을 묻기(★3) (4) 퇴화 케이스를 없애면 답이 둘이 되어 ★2~3 으로 하락 — 이 문항의 ★ 는 기각 단계가 만든다."
```

```yaml
- id: GN-CM2-31-55
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A(7, 5), 변 AB의 중점이 (3, 0), 무게중심이 (3, 1)인 삼각형 ABC에서 변 BC를 2:1로 내분하는 점의 좌표.
  category: "중점 역산 → 무게중심 역산 → 내분점 공식 3단 연쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중점·무게중심 조건에서 꼭짓점을 역산한 뒤 내분점 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 공식을 정해진 순서로 되돌려 쓰는 절차형이지만 한 단계라도 방향을 틀리면 뒤가 전부 어긋난다.
    B=2M−A 로 B(−1, −5), C=3G−A−B 로 C(3, 3), 마지막에 BC 의 2:1 내분점. 2:1 을 (B+2C)/3 이 아니라 (2B+C)/3 으로 쓰는 실수가 흔하다(T-표기).
    통찰은 없지만 연쇄가 3단이고 M_total 6 이라 −1 없이 STEP 2 ★3 유지. 절차형 ★3.
  tier: star_3
  mechanism_primary: '$\pt{B}=2\pt{M}-\pt{A}=(-1,\,-5)$ → $\pt{C}=3\pt{G}-\pt{A}-\pt{B}=(3,\,3)$ → $\dfrac{\pt{B}+2\pt{C}}{3}=\left(\dfrac53,\,\dfrac13\right)$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\left(\dfrac{5}{3},\,\dfrac{1}{3}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/31-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, 중점, 무게중심을 바꾼다. 제약: 세 값이 서로 모순되지 않아야 한다(무게중심은 A 와 BC 중점을 2:1 로 내분하므로 M_AB 를 주면 B 가 먼저 정해지고 C 는 무게중심이 결정). 내분비를 3:1 처럼 바꾸면 답의 분모가 4 가 된다."
    creative: "(1) 내분점 대신 외분점을 묻기(부호 함정 추가 · ★3) (2) 중점 대신 AB 를 1:2 로 내분하는 점을 주기(★3) (3) 마지막에 삼각형 넓이를 묻으면 도구가 하나 더 붙어 ★4 (4) 조건 중 하나를 빼고 「가능한 C 의 자취」를 묻으면 I-BW → ★4."
```

```yaml
- id: GN-CM2-31-56
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    이차함수 y=x²−8x+1의 그래프와 직선 y=2x+6이 만나는 두 점을 A, B라 할 때 삼각형 OAB의 무게중심 (a, b)에 대하여 a+b. (O는 원점)
  category: "교점 → 이차방정식의 두 근 → 무게중심은 좌표 합만 필요 → 근과 계수의 관계"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 교점의 x좌표를 x²−10x−5=0 의 두 근으로 옮긴다(근이 5±√30 인 무리수라 직접 구하면 계산이 무너진다)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무게중심에는 좌표의 합만 필요함을 보고 x 합은 근과 계수의 관계로, y 합은 두 점이 직선 위에 있다는 사실에서 2(x합)+12 로 한 번에 얻는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 직선의 두 교점으로 이루는 삼각형의 무게중심(근과 계수의 관계)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점을 구하면 무리수가 나오지만, 무게중심이 요구하는 것은 개별 좌표가 아니라 합뿐이라는 관찰이 문제를 한 줄로 만든다.
    y 합을 곡선 식이 아니라 직선 식에 넣는 선택도 같은 관찰의 일부다. STEP 2 ★3 출발 + 통찰 2개(RT·EQV d2) → +1 로 ★4. 교육청 기출 태그와 일치.
  tier: star_4
  mechanism_primary: '$x^2-10x-5=0$ → $x_A+x_B=10$ → $y_A+y_B=2\cdot 10+12=32$ → 무게중심 $\left(\dfrac{10}{3},\,\dfrac{32}{3}\right)$ → $a+b=14$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/31-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수와 직선의 계수를 바꾼다. 제약: 판별식이 양수여야 두 점에서 만나고, 근의 합과 (직선 대입으로 얻는) y 합이 모두 3의 배수여야 a+b 가 정수로 떨어진다. 근이 유리수로 떨어지면 통찰이 무의미해지므로 일부러 무리근이 되게 둔다."
    creative: "(1) 원점 O 대신 일반 점 C(p, q) 로 바꾸기(★4 유지) (2) 무게중심이 직선 위에 있을 조건으로 상수를 역추적하면 I-BW 추가 → ★4~5 (3) 삼각형 OAB 의 넓이를 묻으면 근의 차 |α−β| 가 필요해 판별식이 들어오고 ★4 (4) 곡선을 삼차로 바꾸면 세 근의 합이 되어 확장형."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-32-57
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    수직선 위의 두 점 P(√2), Q(√3)에 대하여 세 점 A((√2+√3)/2), B((2√2+√3)/3), C((√2+3√3)/4)를 왼쪽부터 순서대로 나열.
  category: "무리수 식을 PQ의 내분점 꼴로 읽어 수직선 위 위치로 비교"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "세 무리수 식을 (nP+mQ)/(m+n) 즉 선분 PQ 를 m:n 으로 내분하는 점으로 읽어, 무리수 대소 비교를 수직선 위 위치 비교로 통째로 바꾼다"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "내분점 표현으로 무리수의 대소 비교하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    계수를 보고 A 는 1:1, B 는 1:2, C 는 3:1 내분점임을 읽어내면 √2<√3 이므로 순서가 즉시 결정된다. 근삿값 대입은 세 무리수를 소수로 풀어야 해 실수하기 쉽다.
    실력 UP ★4 출발 · 통찰 1개지만 depth 3 → +1 후보. 다만 ★5 는 SC/VF/SYM/XU 중 하나 + 통찰 3개 이상을 요구하므로 RT 단독으로는 올릴 수 없어 ★4 로 둔다.
    [분류 이슈] depth 3 통찰 1개 — ★4/★5 경계.
  tier: star_4
  mechanism_primary: '$\pt{A}=1:1$, $\pt{B}=1:2$, $\pt{C}=3:1$ 내분점 → $\sqrt2<\sqrt3$ 이므로 왼쪽부터 $\pt{B},\ \pt{A},\ \pt{C}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\pt{B}$, $\pt{A}$, $\pt{C}$'
  answer_source: "답지"
  figure: 'crop:fig-32-57.png'
  latex: latex-bank/gn-cm2/items/32-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비를 다른 세 쌍으로(1:3, 2:3, 4:1) 바꾸고 분모를 계수 합에 맞춘다. 제약: 분자의 두 계수 합이 분모와 같아야 내분점으로 읽힌다 — 이 등식이 깨지면 문제가 성립하지 않는다. √2, √3 을 다른 두 무리수로 바꿔도 되지만 대소 관계는 명확해야 한다."
    creative: "(1) 계수 합이 분모보다 작은 식을 하나 섞어 외분점·선분 밖 점을 만들면 검증 단계가 붙어 I-VF 추가 → ★5 후보 (2) 좌표평면의 두 점으로 올려 세 점의 위치 순서를 묻기(★4) (3) 미지수 m:n 을 주고 특정 점보다 왼쪽일 조건을 묻으면 부등식 → ★4."
```

```yaml
- id: GN-CM2-32-58
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A(2, 3), B(0, 4)에 대하여 직선 AB 위의 점 C가 AB=3BC를 만족시킨다. C(a, b) 또는 (p, q)일 때 ab+pq.
  category: "길이 조건 → 내분·외분 두 경우 → 두 점을 모두 구해 합산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB=3BC 를 C 가 선분 AB 를 2:1 로 내분하는 점, 또는 4:1 로 외분하는 점이라는 두 표현으로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「선분 AB 위」가 아니라 「직선 AB 위」이므로 B 를 기준으로 양쪽 두 경우가 모두 답에 들어간다 — 한쪽만 세면 답이 반쪽이 된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "직선 위에서 길이 비 조건을 만족하는 점(내분·외분 두 경우)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    「직선 위」라는 한 단어가 경우를 둘로 만드는 것이 이 문항의 핵심이고, 문제도 답이 둘임을 (a, b) 또는 (p, q) 로 미리 알려 준다.
    두 점이 (2/3, 11/3) 과 (−2/3, 13/3) 이라 계산은 분수지만 무겁지 않다. 실력 UP ★4 출발 · 통찰 2개(EQV·MI d2) 유지 → ★4. ★5 는 저노출 유형(SC/VF/SYM/XU) 부재로 올리지 않는다.
  tier: star_4
  mechanism_primary: '$\seg{AB}=3\seg{BC}$ → $\pt{C}$ 는 $2:1$ 내분점 또는 $4:1$ 외분점 → $\left(\dfrac23,\,\dfrac{11}{3}\right)$, $\left(-\dfrac23,\,\dfrac{13}{3}\right)$ → $ab+pq=-\dfrac49$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/32-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 배수 3 을 바꾼다. 제약: 배수를 n 으로 두면 내분비 (n−1):1, 외분비 (n+1):1 이 되어 분모가 n∓1 — 답이 분수로 지저분해지지 않게 A−B 의 성분을 그 분모의 배수로 둔다. AB=3BC 를 AC=3BC 로 바꾸면 경우 구성이 달라지므로 별도 검산이 필요."
    creative: "(1) 「선분 AB 위」로 한정하면 경우가 하나로 줄어 ★2~3 으로 하락 — 이 문항의 ★ 는 I-MI 가 만든다 (2) ab+pq 대신 두 점 사이의 거리를 묻기(★4) (3) C 를 주고 A 를 역추적하면 I-BW 추가 → ★4~5 (4) 세 번째 조건(사분면 제한)을 붙여 한 경우를 기각하게 하면 I-VF → ★5 후보."
```

```yaml
- id: GN-CM2-32-59
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    O(0, 0), A(0, 6), B(4, 3)인 삼각형 OAB에서 각 A의 외각의 이등분선과 선분 OB의 연장선의 교점을 D(a, b)라 할 때 a−b.
  category: "외각의 이등분선 정리 → 변의 길이 비 → OB의 외분점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌표 조건만으로는 각을 다룰 수 없으므로 중학 평면기하의 「외각의 이등분선은 대변의 연장선을 이웃 두 변의 길이 비로 외분한다」를 끌어와 결합한다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AO=6, AB=5 를 구해 D 를 선분 OB 의 6:5 외분점으로 옮겨 좌표로 계산한다(각 → 비 → 좌표)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선 정리와 내분·외분점(좌표평면 적용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 단원의 도구만으로는 진입이 막히고, 외각의 이등분선 정리를 떠올리는 순간 한 줄짜리 외분 계산으로 바뀐다 — 진입 저항이 ★ 의 대부분이다.
    AB=5 라는 3:4:5 배치가 정리 적용을 예쁘게 만든다. 외분비 방향(6:5 인지 5:6 인지)이 함정(T-표기). 실력 UP ★4 출발 · 통찰 2개(XU·RT) → ★4 유지.
  tier: star_4
  mechanism_primary: '외각의 이등분선 정리 → $\pt{D}$ 는 $\seg{OB}$ 를 $\seg{AO}:\seg{AB}=6:5$ 로 외분 → $\pt{D}(24,\,18)$ → $a-b=6$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/32-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표를 바꾸되 두 변의 길이가 정수가 되도록(3:4:5, 5:12:13 배치) 둔다. 제약: 외각의 이등분선이 대변의 연장선과 실제로 만나려면 두 변의 길이가 달라야 한다(같으면 평행해 교점이 없음) — 이 퇴화 조건을 반드시 피한다."
    creative: "(1) 내각의 이등분선으로 바꾸면 외분이 내분이 되어 ★3~4 (2) 내각·외각 이등분선의 교점을 둘 다 구해 그 거리를 묻기(★5 후보 · 조건 통합) (3) 두 변의 길이를 같게 두어 「교점이 존재하지 않음」을 논증하게 하면 I-VF → ★5 (4) D 를 주고 B 를 역추적하면 I-BW."
```

```yaml
- id: GN-CM2-32-60
  page: 32
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A(1, 0), B(4, 0), C(1, a)와 임의의 점 P에 대하여 AP²+BP²+CP²의 최솟값이 30일 때 양수 a.
  category: "최솟값 = 무게중심에서의 거리 제곱 합 → a에 대한 이차식 역추적"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최솟값 조건을 P 가 무게중심 G(2, a/3) 일 때의 값 AG²+BG²+CG² = 30 이라는 a 에 대한 방정식으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "거리 제곱 합의 최솟값이 주어질 때 꼭짓점의 미지수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    29-e14 에서 배운 성질을 매개변수 a 가 섞인 채로 한 번 더 쓰는 형태다. 무게중심이 (2, a/3) 이 되고 합이 6+2a²/3 로 정리되면 끝.
    a²=36 에서 양수 조건으로 a=6 을 고르는 마지막 한 줄이 T-부호 함정이다. 벤더 실력 UP(★4 출발)이나 앞서 네 번 반복된 성질의 매개변수판이고 저노출 통찰 유형이 없어 ★3 으로 내린다.
    [분류 이슈] 벤더 실력 UP ★4 vs 판정 ★3.
  tier: star_3
  mechanism_primary: '무게중심 $\pt{G}\left(2,\,\dfrac{a}{3}\right)$ → 최솟값 $=6+\dfrac{2a^2}{3}=30$ → $a^2=36$ → 양수이므로 $a=6$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/32-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표와 최솟값 30 을 바꾼다. 제약: 최솟값에서 상수항을 뺀 나머지가 a² 계수로 나누어떨어져야 a 가 정수. 미지수를 x좌표에 넣어도 골조는 같고, 두 점에 미지수를 넣으면 미정계수가 둘이라 조건이 하나 더 필요하다."
    creative: "(1) 「양수 a」 조건을 빼면 답이 둘이 되어 ★2~3 (2) 최솟값을 주는 점 P 의 좌표까지 함께 묻기(★3) (3) 최솟값이 아니라 어떤 값 이하가 되도록 하는 a 의 범위를 묻기(부등식 · ★4) (4) 세 점 중 하나를 직선 위의 동점으로 두면 이중 최소화 → ★5 후보."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 3 · ★2 8 · ★3 6 · ★4 5 · ★5 0
- 통찰형 14 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 9 · I-RT 5 · I-XU 2 · I-MI 1 · I-PD 1 · I-VF 1 (총 19개 라벨 · depth 3 은 32-57 하나)
- type_hint 상위: 「무게중심 공식 역산(꼭짓점·미지수)」 4(28-e13 · 28-41 · 28-42 · 31-55) · 「거리 제곱 합의 최솟값 = 무게중심」 4(29-e14 · 29-44 · 29-45 · 30-51, 32-60 은 역추적판) · 「좌표 합 불변으로 무게중심 일치」 2(28-43 · 30-50) · 「길이 비 조건 → 내분·외분점」 3(30-46 · 30-48 · 32-58) · 「곡선·직선 교점과 근과 계수의 관계」 2(31-53 · 31-56)
- 그림: 2문(`crop:fig-31-53.png` · `crop:fig-32-57.png`) — 둘 다 발문에 구조가 그대로 설명돼 있어 골조·답에 영향 없음
- 구역별 ★ 중앙값: 필수·발전 예제 ★1~2(예제만 ★2~3) · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4(32-60 만 ★3)
- 벤더 신호와의 어긋남: 1단 조정 5문(28-e13 ↓ · 28-43 ↑ · 30-49 ↑ · 31-53 ↑ · 31-56 ↑ · 32-60 ↓) · 2단 이상 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-30-47 | 답의 위끝 k<1 을 만드는 「내분비는 두 항이 모두 양수」 조건을 통찰(I-EQV)로 볼지 T-범위 함정으로만 볼지 갈림. 통찰로 잡아 통찰형으로 기록 | ★2 |
| GN-CM2-31-54 | k=2 를 세 점 일직선으로 기각하는 I-VF 단계가 있어 +1(★4) 근거가 되지만, 본체 계산이 표준이고 다른 통찰이 depth 1 이라 ★3 유지 | ★3 / ★4 |
| GN-CM2-32-57 | 통찰 1개지만 depth 3(무리수 비교 → 내분점 위치 전환). depth 3 은 +1 후보이나 ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU)를 못 채워 ★4 로 둠 | ★4 / ★5 |
| GN-CM2-32-60 | 벤더 실력 UP(★4 출발)이나 29-e14·29-45·30-51 에서 네 번 반복된 성질의 매개변수 역추적판이고 저노출 통찰 유형이 없어 ★3 으로 내림 | ★3 / ★4 |
| GN-CM2-28-e13 | 「필수」 예제(★2 출발)이나 무게중심 공식의 최초 직접 대입 1식이라 −1 적용해 ★1. 예제 라벨과 1단 차이 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「좌표 합 불변」 계열(28-43 중점삼각형 · 30-50 같은 비 내분점) — 겉모습은 다르지만 골조가 완전히 같고, 이 단원에서 유일하게 「구하지 않고 끝내는」 통찰을 만든다. ② 「거리 제곱 합의 최솟값 = 무게중심」 계열(29-e14 · 29-44 · 29-45 · 30-51 · 32-60) — 22문 중 5문으로 이 단원 최다. 성질 적용(★2)과 매개변수 역추적(★3)으로 base ★ 를 갈라 두 유형으로 세우는 편이 낫다. ③ 「교점을 이차방정식의 두 근으로 보고 합만 쓰기」(31-53 · 31-56) — 공통수학1 근과 계수의 관계와의 I-XU 통로라 별도 유형 가치가 높다.
- **통합해도 될 유형** 28-e13 · 28-41 · 28-42 · 31-55 의 「무게중심·중점 공식 역산」은 미지수 개수와 연쇄 길이만 다르므로 한 유형(base ★1~2) 아래 난이도 변형으로 두면 충분하다. 30-46 · 30-48 의 「길이 비·축 조건에서 내분비 세우기」도 한 유형으로 묶을 수 있다.
- **단독 유형** 32-57(내분점 표현으로 무리수 대소 비교) · 32-59(각의 이등분선 정리 + 외분점) · 31-52(반복 중점의 일반항)는 이 단원에서 각각 한 번씩만 나오는 저노출 골조라 ★4 슬롯의 원본으로 별도 등록할 값이 있다.
