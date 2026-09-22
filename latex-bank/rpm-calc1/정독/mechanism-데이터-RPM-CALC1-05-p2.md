---
name: mechanism-데이터-RPM-CALC1-05-p2
description: RPM 미적분Ⅰ 05 도함수의 활용 (2) (2/3 · 유형 05~13) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 05 도함수의 활용 (2)
  unit_code: CALC1-05
  part: "2/3"
  extract_range: "68~72쪽 · 0438~0473"
  total_problems: 36
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 05 도함수의 활용 (2) (2/3) 정독 데이터 (v1.0)

이 파일은 05 단원의 두 번째 조각으로 68~72쪽의 유형 05(극값을 이용한 미정계수) · 06·07(y=f'(x) 그래프 해석) · 08~11(삼차·사차함수의 극값 존재 조건) · 12·13(닫힌 구간 최대·최소와 미정계수) 아홉 구역 36문항을 다룬다. 벤더 난이도 신호는 RPM 의 구역이 곧 층인 구조 그대로다 — 「유형 NN」 구역의 첫 문항이 「대표문제」(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 표시(★1~2 / ★2 / ★3 출발)가 붙고 「서술형」 태그가 세 문항(0443·0458·0473)에 있다. 이 범위에는 「유형 UP」·「시험에 꼭 나오는 문제」·「실력 Up」 구역이 없어 ★4 이상 문항이 없고, 그림은 유형 06·07 의 도함수 그래프 다섯 장(0446~0450)뿐이다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조) · `insights[]`(단계별 통찰 라벨, 절차형이면 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 둘 이상일 때 통찰형, depth 1 통찰 하나(표준 유형의 관문 정도)나 통찰 없음은 절차형으로 두었다. 라벨 `star` 는 벤더 출발점에서 M_total·통찰로 조정했고, 규칙상 조정하지 않았지만 체감이 다른 문항은 rationale 의 `[분류 이슈]` 와 파일 끝 표에 기록만 했다.

## 문항 데이터

### 유형 05 함수의 극값을 이용하여 미정계수 구하기

```yaml
- id: RPM-CALC1-0438
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3+ax^2+bx+3 이 x=2 에서 극댓값 23 을 가질 때 극솟값. 5지선다.
  category: "극댓값 조건 두 식(f'(2)=0, f(2)=23) → a, b → 다른 극점의 값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건(f'(p)=0, f(p)=k)으로 미정계수 결정 → 나머지 극값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(2)=0, f(2)=23 의 연립으로 a=-9, b=24. f'(x)=3(x-2)(x-4) 이므로 x=4 가 극소, f(4)=19. 두 조건 연립 → 인수분해 → 대입의 표준 절차. 함정은 x=2 가 실제로 극대인지(최고차 양수 → 작은 근이 극대) 확인하는 정도(T-부호 1). 유형 대표·난이도 표시 없음 → ★2, 통찰 없음·M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "f'(2)=0 ∧ f(2)=23 → (a,b)=(-9,24) → f'=3(x-2)(x-4) → 다른 극점 x=4 → f(4)=19"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 x=p(정수), 극댓값 k, 상수항을 바꿀 수 있음. 제약: f'(x)=3(x-p)(x-q) 꼴이 되도록 q 도 정수(또는 간단한 유리수)로 잡아 역산하고, 최고차 양수면 p<q 여야 x=p 가 극대. 선택지는 극솟값 근처 연속 정수."
    creative: "(1) 극솟값 조건을 주고 극댓값을 묻기(★2 유지) (2) 최고차 계수를 음수로 주면 극대·극소 위치가 뒤집혀 T-부호 함정 강화(★2) (3) 극댓값 대신 극댓값과 극솟값의 차를 주면 두 극점 값의 차가 (q-p)^3/2 로 정리되는 EQV d1 추가(★3 후보)."
```

```yaml
- id: RPM-CALC1-0439
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x^3+27x+a 의 극댓값과 극솟값의 합이 10 일 때 상수 a. 주관식.
  category: "f' 근 ±3 → 두 극값의 합 = 2a → a"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극댓값과 극솟값의 합·차 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-3(x-3)(x+3), f(3)=54+a, f(-3)=-54+a → 합 2a=10 → a=5. -x^3+27x 가 기함수라 홀수 차수 항이 상쇄되어 합이 2a 로 바로 떨어짐. 표준 절차·통찰 없음·M_total 5 라 -1 후보이나 극값 둘을 모두 구해 합하는 두 단계 구성이라 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=0 → x=±3 → f(3)+f(-3)=2a=10 → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "27 을 3k^2 꼴(12, 48, 75)로, 합 10 을 다른 짝수로. 제약: f'=-3x^2+3k^2 의 근 ±k 가 정수, 합은 항상 2a 이므로 a 가 정수가 되려면 합이 짝수."
    creative: "(1) 합 대신 차(극댓값-극솟값)를 주면 a 가 소거돼 x 계수 27 을 미지로 묻는 문제로 전환(★2) (2) x^2 항을 넣으면(f=-x^3+bx^2+27x+a) 상쇄가 깨져 두 극값을 직접 계산 → Mₖ 2(★2) (3) 조건을 '두 극점의 중점이 (0,5)' 로 바꾸면 변곡점 대칭 SYM d1 추가(★2~3)."
```

```yaml
- id: RPM-CALC1-0440
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-2x^3-6x^2+a 가 x=b 에서 극솟값 1 을 가질 때 a-b. 5지선다.
  category: "f' 인수분해 → 최고차 음수이므로 작은 근이 극소 → b=-2 → f(-2)=1 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극솟값 조건으로 미정계수(극점 위치가 미지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-6x(x+2). 최고차 음수라 x=-2 에서 극소, x=0 에서 극대 → b=-2. f(-2)=a-8=1 → a=9 → a-b=11. 극소점이 미지수 b 로 주어져 부호표로 극소를 고르는 판단(T-부호)이 핵심 함정. 통찰 없음·M_total 6 · 벤더 「중」 → ★2.
  tier: star_2
  mechanism_primary: "f'=-6x(x+2) → 부호표(최고차 음수) → 극소 x=-2 → f(-2)=1 → a=9 → a-b=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -2, -6 을 -k, -3k 꼴로 바꾸면 f'=-3kx(x+2) 로 극점 0, -2 가 고정됨. 극솟값 1 을 다른 정수로. 제약: x^2 계수 = (3/2)·(x^3 계수)·(극점 합) 관계를 유지해야 극점이 정수."
    creative: "(1) 최고차 양수로 바꾸면 극대·극소가 뒤바뀜(★2) (2) '극댓값 1' 로 바꾸면 x=0 이라 계산이 가벼워짐(★1~2) (3) x 항 cx 를 더 넣고 극점 b 를 주면 두 조건 연립으로 Mₛ 상승(★2)."
```

```yaml
- id: RPM-CALC1-0441
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+(2a+4)x^2-5x 의 그래프에서 극대인 점과 극소인 점이 원점에 대하여 대칭일 때 상수 a. 주관식.
  category: "극점 대칭 중심 = 변곡점 = 원점 → x^2 항 계수 0 → a"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼차함수 그래프는 변곡점에 대해 점대칭이므로 극대·극소점의 대칭 중심이 원점 ⟺ f 가 기함수 ⟺ x^2 계수 2a+4=0"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차함수 극점의 대칭(변곡점) 조건으로 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극점 두 개의 대칭 중심은 삼차함수의 변곡점이고 그것이 원점이려면 f 가 기함수여야 하므로 2a+4=0, a=-2. 근과 계수로 α+β=-2(2a+4)/3=0 만 세워도 같은 답이 나오지만 y 좌표까지 대칭임을 보장하는 근거는 변곡점 대칭(SYM d2). 계산량은 한 줄. 벤더 「중」 ★2 출발 · 단일 d2 → ★2 유지, 통찰형.
    [분류 이슈] SYM d2 통찰형으로 두었으나 α+β=0 한 줄(근과 계수)로도 답이 나와 절차형 ★2 로 볼 여지 — 카탈로그 때 「삼차함수의 대칭성」 유형으로 따로 세울지 결정.
  tier: star_2
  mechanism_primary: "극점 대칭 중심 = 변곡점 → 원점 대칭 ⟺ f 기함수 ⟺ x^2 계수 0 → a=-2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수를 (ka+m) 꼴로, x 항 계수 -5 를 다른 음수로. 제약: 극값이 실제로 존재하려면 x 계수가 음수(또는 D>0), 답 a 가 정수가 되도록 m/k 정수."
    creative: "(1) 대칭 중심을 (p,q) 로 바꾸면 변곡점 x=-B/(3A) 조건 + f(p)=q 두 식 → EQV 추가 ★3 (2) '극대점과 극소점의 중점이 y 축 위' 로 완화하면 α+β=0 만 필요 → 절차형 ★2 (3) '극대점·극소점·원점이 한 직선 위' 로 바꾸면 기울기 조건으로 SYM 대신 EQV d2(★3)."
```

```yaml
- id: RPM-CALC1-0442
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2x^3-(3/2)ax^2+1 의 그래프가 x 축에 접하도록 하는 상수 a. 주관식.
  category: "x 축 접함 ⟺ 어떤 극값이 0 → f(a/2)=0 → a^3=8"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프가 x 축에 접한다 → f 가 x 축 위에 극점을 가진다(극값 0)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 x 축에 접할 조건(극값 = 0)으로 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x(2x-a) → 극점 x=0, a/2. f(0)=1≠0 이므로 f(a/2)=-a^3/8+1=0 → a=2. '접한다' 를 '극값이 0' 으로 읽는 동치 변환(EQV d1)이 유일한 관문이고 나머지는 대입 계산. a=0 이면 극값이 없으므로 제외(T-범위). 벤더 「중」 ★2 · 통찰 d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x 축 접함 ⟺ 극값 0 → f'=3x(2x-a) → f(a/2)=0 → a^3=8 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 1 과 계수 2, 3/2 를 바꿀 수 있음. 제약: f(a/2) 에 a 의 세제곱만 남도록 x^3 계수 c 와 x^2 계수 (3/2)ca 의 비를 유지하면 -ca^3/8+상수=0 꼴 → 상수항이 c·(완전세제곱)/8 이어야 답이 정수."
    creative: "(1) '접한다' 대신 'x 축과 서로 다른 두 점에서 만난다' 로 바꾸면 극값 0 + 다른 극값 부호 → MI 추가 ★3 (2) 'y=k 에 접한다' 로 바꾸면 극값이 k 인 조건(★2) (3) 두 극값의 곱 부호 조건으로 바꾸면 방정식 실근 개수(후속 유형) 골조로 이어짐."
```

```yaml
- id: RPM-CALC1-0443
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    최고차항 계수 1 인 삼차함수 f 가 x=-1, 3 에서 극값을 갖고 f(0)=0 일 때 극댓값. 주관식(서술형).
  category: "극점 두 개 → f'(x)=3(x+1)(x-3) → 전개·계수 비교 → f(0)=0 → 극댓값 f(-1)"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극점 두 개와 한 점의 값으로 삼차함수 결정 → 극값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x^2-6x-9 → f(x)=x^3-3x^2-9x+C, f(0)=0 → C=0, 극댓값 f(-1)=5. 극점에서 f' 를 인수 형태로 쓰는 표준 절차. 최고차 양수라 작은 근 -1 이 극대. 서술형 태그이나 논리 한 갈래. 벤더 「중」 ★2 · 통찰 없음 · M_total 5 → 두 단계 구성이라 ★2 유지.
  tier: star_2
  mechanism_primary: "극점 -1, 3 → f'=3(x+1)(x-3) → 계수 역산 → f(0)=0 → f(-1)=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 p<q 정수, f(0) 값을 바꿀 수 있음. 제약: 최고차 1 유지 시 f'=3(x-p)(x-q) 의 전개 계수가 정수이므로 항상 정수 답. 극댓값을 묻는지 극솟값을 묻는지에 따라 p 또는 q 대입."
    creative: "(1) 최고차 계수를 -1 로 주면 극대·극소 위치 반전(★2) (2) f(0)=0 대신 극댓값과 극솟값의 차를 주고 최고차 계수 k 를 묻기 → (q-p)^3 관계 EQV d1 ★3 (3) 극점 하나만 주고 '변곡점의 x 좌표가 1' 조건을 섞으면 대칭 SYM d1."
```

```yaml
- id: RPM-CALC1-0444
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    최고차항 계수 1 인 삼차함수가 ㈎ x=1 에서 극댓값 3, ㈏ 점 (2, f(2)) 에서 접선 기울기 -7 을 만족할 때 f(3). 주관식.
  category: "f'(1)=0, f'(2)=-7 → a, b → f(1)=3 → c → f(3)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 + 접선 기울기 조건으로 삼차함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x^2+2ax+b 에 f'(1)=0, f'(2)=-7 을 넣어 a=-8, b=13, f(1)=3 에서 c=-3 → f(3)=-9. 조건 셋을 각각 f', f 의 값으로 옮기는 표준 연립. 접선 기울기 = 도함수 값은 표기 차용 수준. f'=(3x-13)(x-1) 로 x=1 이 실제 극대임도 확인됨. 벤더 「중」 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "㈎ → f'(1)=0, f(1)=3 · ㈏ → f'(2)=-7 → 연립 → f=x^3-8x^2+13x-3 → f(3)=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 1, 기울기 점 2 와 값 -7, 극댓값 3 을 바꿀 수 있음. 제약: f'(q)-f'(p)=3(q^2-p^2)+2a(q-p) 에서 a 가 정수가 되도록, x=p 가 극대가 되려면 다른 근 -2a/3-p 가 p 보다 커야 함."
    creative: "(1) ㈏ 를 '접선이 직선 y=-7x+k 와 평행' 으로 표현(같은 ★2) (2) ㈎ 를 '극값 3' 으로만 주면 극대인지 확인하는 검증 단계 VF d1(★2~3) (3) 최고차 계수를 미지로 풀고 조건을 하나 더 주면 4원 연립(★3)."
```

```yaml
- id: RPM-CALC1-0445
  page: 68
  vendor_label: "유형 05 함수의 극값을 이용하여 미정계수 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차함수 f 가 ㈎ lim_{x→0} f(x)/x = -2, ㈏ x=1 에서 극값 -3 을 만족할 때 f(2). 주관식.
  category: "극한 조건 → f(0)=0, f'(0)=-2 · 극값 조건 → f'(1)=0, f(1)=-3 → 4원 연립 → f(2)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값이 존재하므로 분자 → 0 에서 f(0)=0, 이어서 극한이 미분계수 정의라 f'(0)=-2 로 읽힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건(f(0), f'(0))과 극값 조건으로 삼차함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 에서 f(0)=0, f'(0)=-2 를 끌어내는 동치 변환이 첫 관문(EQV d1). 최고차 계수가 주어지지 않아 f=ax^3+bx^2+cx+d 네 미지수를 ㈎·㈏ 의 네 식으로 결정: d=0, c=-2, 3a+2b=2, a+b=-1 → a=4, b=-5 → f(2)=8. 벤더 「상중」 ★3 출발 · 통찰 d1 하나 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "㈎ → f(0)=0, f'(0)=-2 · ㈏ → f'(1)=0, f(1)=-3 → 4원 연립 → f=4x^3-5x^2-2x → f(2)=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 -2, 극점 1, 극값 -3, 묻는 점 2 를 바꿀 수 있음. 제약: 3a+2b=-c 와 a+b=k-c 꼴 연립이 정수해가 되도록 (극값, 극한값) 조합을 조정. 극대·극소를 지정하지 않으므로 부호 제약 없음."
    creative: "(1) ㈎ 를 lim_{x→∞} f(x)/x^3=4 처럼 최고차 계수 조건으로 바꾸면 3원 연립 절차형 ★2 (2) ㈏ 를 'x=1 에서 극댓값' 으로 강화하면 부호 검증 VF d1 → ★3 유지 (3) ㈎ 를 lim_{x→1}(f(x)+3)/(x-1)=0 으로 바꿔 ㈏ 와 같은 점에 겹치면 조건이 하나 줄어 미정 — 설계 시 조건 하나 더 필요."
```

### 유형 06 $y=f'(x)$의 그래프와 $f(x)$의 극값

```yaml
- id: RPM-CALC1-0446
  page: 69
  vendor_label: "유형 06 $y=f'(x)$의 그래프와 $f(x)$의 극값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=(1/2)x^3+ax^2+b 의 도함수 그래프(아래로 볼록 · 근 0, 4)가 주어지고 극솟값이 -6 일 때 극댓값. 5지선다·그림.
  category: "f' 그래프의 근 0, 4 → a → 부호로 극소 x=4 → f(4)=-6 → b → 극댓값 f(0)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f'(x) 그래프의 근으로 미정계수 → 극값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=(3/2)x^2+2ax 의 근이 4 → a=-3. 그래프가 (0,4) 에서 음수이므로 x=0 극대, x=4 극소. f(4)=b-16=-6 → b=10, 극댓값 f(0)=b=10. 그래프에서 근 두 개와 부호를 읽는 것이 전부라 표준 절차(T-부호 1). 유형 대표·난이도 없음 → ★2, M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f' 근 0, 4 → a=-3 → 부호표 → 극소 x=4 → f(4)=-6 → b=10 → f(0)=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0446.png"
  latex: latex-bank/rpm-calc1/items/0446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 0 아닌 근 4 를 다른 정수 q 로(그림 라벨만 교체), 극솟값 -6 을 다른 값으로. 제약: a=-(3/8)q 가 정수 또는 간단한 유리수가 되도록 q 를 8 의 배수로 하거나 x^3 계수를 조정. 최고차 양수면 항상 작은 근이 극대."
    creative: "(1) 그림을 위로 볼록 포물선(최고차 음수)으로 바꾸면 극대·극소 반전 T-부호(★2) (2) 극솟값 대신 극댓값과 극솟값의 차를 주면 b 가 소거되어 a 만으로 결정 → 조건 재해석 EQV d1(★2) (3) f 의 계수를 모두 미지로 두면 f' 의 비례상수 도입이 관문 → 0448 골조(★2)."
```

```yaml
- id: RPM-CALC1-0447
  page: 69
  vendor_label: "유형 06 $y=f'(x)$의 그래프와 $f(x)$의 극값"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 의 도함수 그래프가 주어질 때 구간 (a, b) 에서 극댓값을 갖는 x 의 개수 m, 극솟값을 갖는 x 의 개수 n 에 대한 m-n. 주관식·그림.
  category: "f' 의 부호 변화만 세기(x 축에 접하는 점은 제외) → 극대 1, 극소 2"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호 변화(-→+ 극소, +→- 극대)로 f 의 극점을 읽되, x 축에 접하기만 하는 점은 부호가 안 바뀌어 극점이 아님"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=f'(x) 그래프에서 극대·극소의 개수(부호 변화·접점 구분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프는 x=a 에서 음수로 출발해 (a,b) 안에서 - → + (극소), + → - (극대), - → + (극소) 로 세 번 부호가 바뀌고, 오른쪽에서 x 축에 접하는 점은 부호가 유지되므로 극점이 아님. m=1, n=2 → -1. 접점을 극값으로 세는 오답(T-표기)이 변별점. 벤더 「중하」 ★1~2 출발 · RT d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f' 부호 변화 지점만 극점 → (-→+) 극소, (+→-) 극대, (-→+) 극소, 접점 제외 → m=1, n=2 → -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: "crop:fig-0447.png"
  latex: latex-bank/rpm-calc1/items/0447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 부호 변화 횟수·접점 개수를 바꾸면 (m,n) 이 바뀜(그림 재작성 필요). 제약: 구간 끝 a, b 에서 f' 의 부호를 명확히 그려 경계 포함 논란을 막고, 답 m-n 은 작은 정수."
    creative: "(1) 'f 가 증가하는 구간의 개수' 로 바꾸면 부호 + 구간 세기(★1~2) (2) 접점 두 개와 교차 한 개를 섞어 '극값을 갖는 x 의 개수' 만 물으면 접점 함정이 정답을 직접 좌우 → VF 성격 d1(★2) (3) f' 대신 f 의 그래프를 주고 f' 의 부호를 묻는 역방향(★2)."
```

```yaml
- id: RPM-CALC1-0448
  page: 69
  vendor_label: "유형 06 $y=f'(x)$의 그래프와 $f(x)$의 극값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차함수 f 의 도함수 그래프(아래로 볼록 · 근 -2, 0)가 주어지고 극솟값 -2, 극댓값 6 일 때 f(1). 주관식·그림.
  category: "f'=kx(x+2) 꼴 → f=ax^3+3ax^2+d → 극댓값 f(-2)=6, 극솟값 f(0)=-2 → a, d → f(1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f'(x) 그래프의 근과 극값 두 개로 삼차함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프에서 f' 의 근이 -2, 0 이고 최고차 양수이므로 x=-2 극대, x=0 극소. f=ax^3+bx^2+cx+d 에 f'=3ax^2+2bx+c ∝ x(x+2) 를 대응시키면 c=0, b=3a. f(0)=d=-2, f(-2)=4a+d=6 → a=2 → f(1)=4a+d=6. f' 의 비례상수(최고차 계수)를 미지로 두는 것이 관문이자 함정(k=1 로 단정하면 오답). 벤더 「중」 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f' 근 -2, 0 → b=3a, c=0 → f(0)=-2, f(-2)=6 → a=2, d=-2 → f(1)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-0448.png"
  latex: latex-bank/rpm-calc1/items/0448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 -2 를 다른 정수 p 로(그림 라벨), 극댓값·극솟값을 바꿀 수 있음. 제약: 극댓값-극솟값 = a·|p|^3/2 이므로 차가 |p|^3/2 의 정수배가 되도록 골라야 a 가 정수(p=-2 면 차 4a)."
    creative: "(1) 극값 대신 일반 점 두 개(f(1)=6, f(0)=-2)를 주면 같은 연립(★2) (2) 극댓값과 극솟값의 차 하나만 주고 최고차 계수를 묻기(★2) (3) f' 그래프의 근을 문자 α, β 로 두고 극값의 차를 α, β 로 표현하게 하면 Mₐ 3 → ★3."
```

### 유형 07 $y=f'(x)$의 그래프를 이용한 $f(x)$의 해석

```yaml
- id: RPM-CALC1-0449
  page: 69
  vendor_label: "유형 07 $y=f'(x)$의 그래프를 이용한 $f(x)$의 해석"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f 의 도함수 그래프(구간 (-2,4) · 근 -1 · x=2 에서 x 축에 접함)가 주어질 때 연속·증가·극소·미분가능·극값 개수에 관한 다섯 진술 중 옳지 않은 것. 5지선다·그림.
  category: "f' 부호표: (-2,-1) 음, (-1,2) 양, x=2 접점(0), (2,4) 양 → 각 보기 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 의 부호·존재를 f 의 증감·극값·미분가능·연속으로 옮겨 읽고, 접점 x=2 는 부호 불변이라 극점이 아님을 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=f'(x) 그래프로 f 의 연속·증감·극값·미분가능 판정(진위 5지)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'<0 (-2,-1), f'(-1)=0, f'≥0 (-1,4) 이고 x=2 에서 f'=0 이지만 부호 유지. ①·④ 는 f' 가 존재 → 미분가능·연속, ② (0,4) 증가, ③ x=-1 극소 모두 참이고 ⑤ 극값은 x=-1 하나뿐이라 거짓. 접점을 극값으로 세는 오답이 ⑤ 의 함정(T-표기). 유형 대표·난이도 없음 → ★2, RT d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f' 그래프 → 부호표 → 접점 2 는 극점 아님 → 극값 x 는 -1 하나 → ⑤ 거짓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0449.png"
  latex: latex-bank/rpm-calc1/items/0449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 -1, 접점 2, 구간 끝 -2, 4 의 라벨을 바꿀 수 있음(그림 재라벨). 제약: 접점은 x 축에 닿기만 하도록, 구간은 열린 구간으로 유지해 경계 극값 논란 방지."
    creative: "(1) 보기를 'f 의 최솟값은 f(-1)' 처럼 최대·최소 진술로 바꾸면 구간 끝 비교 T-경계 추가(★2) (2) f' 그래프에 불연속점을 넣어 미분가능/연속 구분 보기를 강화(★3) (3) ㄱㄴㄷ 형식으로 바꾸고 '극값을 갖는 x 의 개수' 를 정답 보기로 두면 0450 골조."
```

```yaml
- id: RPM-CALC1-0450
  page: 69
  vendor_label: "유형 07 $y=f'(x)$의 그래프를 이용한 $f(x)$의 해석"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f 의 도함수(사차함수) 그래프(x=α 에서 접함 · β, γ 에서 교차)가 주어질 때 보기 ㄱ (α,β) 에서 감소 · ㄴ x=β 에서 극댓값 · ㄷ 극값 3 개의 진위 조합. 5지선다·그림.
  category: "f'=k(x-α)^2(x-β)(x-γ) 꼴 부호표 → ㄱ 거짓(증가) · ㄴ 참 · ㄷ 거짓(2 개)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 접점 α 를 f'=0 의 중근(부호 불변)으로, 교차점 β·γ 를 부호 변화점으로 읽어 f 의 증감·극점을 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=f'(x) 그래프(중근 포함)로 f 의 증감·극값 ㄱㄴㄷ 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (α,β) 에서 f'>0 이므로 ㄱ 거짓, x=β 에서 + → - 이니 ㄴ 참, 극값은 β(극대)·γ(극소) 둘뿐이라 ㄷ 거짓 → ①. α 접점을 극점으로 세면 ㄷ 을 참으로 고르는 함정. '사차함수' 조건은 중근 구조를 확정하는 보조. 벤더 「중」 ★2 · RT d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "접점 α(중근) · 교차 β, γ → 부호표 → ㄱ×, ㄴ○, ㄷ× → ①"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0450.png"
  latex: latex-bank/rpm-calc1/items/0450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점·교차점의 위치와 개수를 바꾸면(그림 재작성) 보기 진위가 바뀜. 제약: 사차함수 f' 이므로 중근 1 + 단근 2 또는 단근 4 구조만 가능, 선택지 조합이 유일 정답이 되도록 ㄱㄴㄷ 진위 조합 점검."
    creative: "(1) 접점을 두 개로 바꾸면 극값이 0 개 → 'f 는 증가함수' 보기(★2) (2) 그림 대신 f'(x)=(x-α)^2(x-β)(x-γ) 식으로 주면 같은 골조(★2) (3) 'f(α), f(β), f(γ) 의 대소' 를 묻는 보기로 바꾸면 증감으로 비교 → EQV d1 추가 ★3."
```

### 유형 08 삼차함수가 극값을 가질 조건

```yaml
- id: RPM-CALC1-0451
  page: 70
  vendor_label: "유형 08 삼차함수가 극값을 가질 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3+3ax^2+ax-2 가 극값을 갖도록 하는 실수 a 의 범위. 주관식.
  category: "극값 존재 ⟺ f'=0 서로 다른 두 실근 ⟺ D/4=9a^2-3a>0"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 가질 조건(f'=0 의 판별식 > 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2+6ax+a, D/4=9a^2-3a=3a(3a-1)>0 → a<0 또는 a>1/3. 삼차함수 극값 조건의 정의 그대로(판별식 한 줄). 유형 대표·난이도 없음 → ★2, 통찰 없음·M_total 4 로 -1 후보이나 유형의 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "극값 존재 ⟺ D/4>0 → 3a(3a-1)>0 → a<0 ∨ a>1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a<0$ 또는 $a>\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3a, a 를 (pa)x^2+(qa+r)x 로 바꾸면 D 가 a 의 이차식 → 해가 두 구간. 제약: D 의 이차식이 인수분해되도록 계수 선택, 부등호는 강부등호 유지(극값 존재)."
    creative: "(1) '정수 a 의 개수' 처럼 범위를 이산화하면 T-경계 추가(0453 골조 ★2) (2) 최고차 계수까지 a 로 두면 a≠0 검증 추가(0454 골조 ★2) (3) 극값 존재 + '극댓값>0' 을 결합하면 값 계산이 붙어 ★3."
```

```yaml
- id: RPM-CALC1-0452
  page: 70
  vendor_label: "유형 08 삼차함수가 극값을 가질 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+ax^2+12x+2 가 극값을 갖도록 하는 a 의 범위가 a<α 또는 a>β 일 때 β-α. 5지선다.
  category: "D/4=a^2-36>0 → α=-6, β=6 → 12"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 가질 조건(f'=0 의 판별식 > 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=3x^2+2ax+12, D/4=a^2-36>0 → a<-6 또는 a>6 → β-α=12. 판별식 한 줄이며 답도 즉시. 벤더 「중하」 ★1~2 출발 · 통찰 없음 · M_total 4 → -1 적용 ★1.
  tier: star_1
  mechanism_primary: "D/4=a^2-36>0 → 경계 ±6 → β-α=12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수 12 를 3k^2 꼴(3, 27, 48)로 바꾸면 D/4=a^2-9k^2 → β-α=6k. 제약: 완전제곱 차가 되도록 x 계수 = 3k^2."
    creative: "(1) 'a 의 값이 아닌 정수의 개수' 로 바꾸면 폐구간 처리 T-경계(★1~2) (2) x^2 계수를 2a 로 두면 D/4=4a^2-36 로 스케일만 변화(★1) (3) f 대신 -f 를 주면 D 가 그대로임을 확인하는 T-부호 학습용(★1)."
```

```yaml
- id: RPM-CALC1-0453
  page: 70
  vendor_label: "유형 08 삼차함수가 극값을 가질 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+3x^2+ax-1 이 극댓값과 극솟값을 모두 갖도록 하는 정수 a 의 최댓값. 5지선다.
  category: "D/4=9-3a>0 → a<3 → 정수 최댓값 2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 가질 조건 → 정수 해의 최댓값(경계 처리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2+6x+a, D/4=9-3a>0 → a<3. 강부등호라 정수 최댓값은 2(경계 3 을 포함하면 오답, T-경계). '극댓값과 극솟값을 모두' 는 '극값을 갖는다' 와 동치. 벤더 「중하」 ★1~2 · 통찰 없음 · M_total 5 이나 경계 처리가 정답을 직접 좌우해 ★2.
  tier: star_2
  mechanism_primary: "D/4=9-3a>0 → a<3 → 정수 최댓값 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수 3 을 다른 정수 m 으로 바꾸면 D/4=m^2-3a>0 → a<m^2/3. 제약: 경계 m^2/3 이 정수인지 아닌지에 따라 최댓값 처리가 달라지므로 설계 시 명시(정수면 강부등호 함정, 아니면 내림)."
    creative: "(1) '극값을 갖지 않도록 하는 정수 a 의 최솟값' 으로 뒤집으면 등호 포함 → 경계 3 이 답(★2) (2) 최고차 계수를 음수로 바꾸면 D 조건은 같음(T-부호 학습, ★2) (3) a 를 두 함수에 공통으로 걸면 0457 골조."
```

```yaml
- id: RPM-CALC1-0454
  page: 70
  vendor_label: "유형 08 삼차함수가 극값을 가질 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차함수 f(x)=3kx^3+(k+2)x^2+kx+1 이 극값을 갖도록 하는 실수 k 의 범위. 주관식.
  category: "k≠0(삼차) ∧ D/4=(k+2)^2-9k^2>0 → (1-k)(2k+1)>0 → -1/2<k<1, k≠0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최고차 계수가 미지수인 삼차함수의 극값 존재 조건(k≠0 검증)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=9kx^2+2(k+2)x+k, D/4=(k+2)^2-9k^2=(2-2k)(4k+2)>0 → -1/2<k<1. 최고차 계수 3k 가 0 이면 삼차가 아니므로 k=0 을 빼야 함(T-범위) — 답의 두 구간이 여기서 갈라짐. 제곱 차 인수분해가 계산 관문(Mₖ 2). 벤더 「중」 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "D/4=(k+2)^2-(3k)^2>0 → 제곱 차 인수분해 → -1/2<k<1 → 삼차 조건 k≠0 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}<k<0$ 또는 $0<k<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^3 계수 3k, x^2 계수 k+2, x 계수 k 를 바꿀 수 있음. 제약: D/4 가 A^2-B^2 꼴로 인수분해되도록 (x^2 계수/2)^2 과 3·(x^3 계수)·(x 계수) 가 모두 완전제곱, k=0 이 D>0 구간 안에 있어야 제외 함정이 살아 있음."
    creative: "(1) '극값을 갖지 않도록' 으로 뒤집으면 k=0 처리가 반대(포함 안 됨) → T-범위 강화(★2) (2) 답을 '정수 k 의 개수' 로 바꾸면 k=0 제외가 개수에 직접 반영(★2) (3) 'k 의 값에 따른 극값의 개수' 를 표로 묻기 → MI d1(★3)."
```

### 유형 09 삼차함수가 극값을 갖지 않을 조건

```yaml
- id: RPM-CALC1-0455
  page: 70
  vendor_label: "유형 09 삼차함수가 극값을 갖지 않을 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3+ax^2+3x+4 가 극값을 갖지 않도록 하는 실수 a 의 범위. 주관식.
  category: "극값 없음 ⟺ D/4=a^2-9≤0 → -3≤a≤3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 갖지 않을 조건(f'=0 의 판별식 ≤ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2+2ax+3, D/4=a^2-9≤0. 극값 없음은 f'=0 이 중근 또는 허근(등호 포함, T-경계). 정의 한 줄. 유형 대표·난이도 없음 → ★2, 통찰 없음·M_total 5 이나 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "극값 없음 ⟺ D/4≤0 → a^2-9≤0 → -3≤a≤3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3\le a\le 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수 3 을 3k^2 꼴로 바꾸면 -3k≤a≤3k. 제약: 등호 포함 유지(중근이면 극값 없음), 최고차 계수를 음수로 바꿔도 D 조건은 동일."
    creative: "(1) '모든 실수 x 에서 증가' 로 바꾸면 같은 D≤0(표현만 다름, ★2) (2) 답을 '정수 a 의 합' 으로 바꾸면 0456 골조 (3) '극값을 갖지 않고 f(1)>0' 처럼 부등식을 겹치면 교집합(★2)."
```

```yaml
- id: RPM-CALC1-0456
  page: 70
  vendor_label: "유형 09 삼차함수가 극값을 갖지 않을 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3-ax^2+(a-2/3)x-1 이 극값을 갖지 않도록 하는 모든 정수 a 의 합. 5지선다.
  category: "D/4=a^2-3a+2≤0 → 1≤a≤2 → 정수 합 3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 갖지 않을 조건 → 정수 해의 합(경계 처리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2-2ax+(a-2/3), D/4=a^2-3(a-2/3)=(a-1)(a-2)≤0 → 1≤a≤2. 등호가 포함되어 정수 1, 2 둘 다 답에 들어감(T-경계가 정답을 좌우). 벤더 「중하」 ★1~2 · 통찰 없음 · M_total 5 이나 경계 처리가 답을 결정해 ★2.
  tier: star_2
  mechanism_primary: "D/4≤0 → (a-1)(a-2)≤0 → 1≤a≤2 → 1+2=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수 (a-2/3) 의 상수 부분을 바꾸면 D/4=a^2-3a+3c 꼴 → 인수분해되도록 c 선택. 제약: 정수 해가 2~3 개인 폐구간이 되도록, 분수 계수는 D 에서 정수가 되게 3 의 배수 관계 유지."
    creative: "(1) '극값을 갖도록' 으로 뒤집으면 강부등호 여집합(★2) (2) x^2 계수를 -2a 로 두면 D/4=4a^2-3a+2 처럼 항상 양수가 되어 '없다' 가 답인 함정형(★2) (3) 두 함수의 조건 교집합으로 확장 → 0457 골조."
```

```yaml
- id: RPM-CALC1-0457
  page: 70
  vendor_label: "유형 09 삼차함수가 극값을 갖지 않을 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x^3+ax^2+(a^2-4a)x+3 은 극값을 갖지 않고 g(x)=x^3-2ax^2+ax-2 는 극값을 갖도록 하는 정수 a 의 개수. 주관식.
  category: "f: D/4=4a^2-12a≤0 → 0≤a≤3 · g: D/4=4a^2-3a>0 → a<0 ∨ a>3/4 → 교집합의 정수 1, 2, 3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 삼차함수의 극값 존재·부존재 조건의 교집합 → 정수 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-3x^2+2ax+(a^2-4a) 의 D/4=a^2+3(a^2-4a)=4a(a-3)≤0 → 0≤a≤3. g'=3x^2-4ax+a 의 D/4=a(4a-3)>0 → a<0 또는 a>3/4. 교집합 3/4<a≤3 → 정수 3 개. 조건 두 개를 각각 판별식으로 바꿔 교집합 — 표준 절차(교집합은 통찰 아님). f 의 최고차 음수는 D 에 영향 없으나 부호 실수 유발(T-부호). 벤더 「중」 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f 극값 없음 D≤0 ∧ g 극값 있음 D>0 → 두 a 범위 교집합 → 정수 개수 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수를 바꿀 때 각 D 가 a 의 인수분해 가능한 이차식이 되도록. 제약: 교집합이 비지 않고 정수 개수가 2~5 개, 경계에 정수가 걸리도록(등호 포함/제외 확인 학습)."
    creative: "(1) 'f 는 극값을 갖고 g 는 갖지 않도록' 으로 바꾸면 교집합이 달라짐(★2) (2) '두 함수 중 하나만 극값을 갖는다' 로 바꾸면 대칭차 두 경우 → MI d1 ★3 (3) g 를 f 의 x 축 방향 평행이동으로 관련시키면 조건 통합 CON 성격(★3)."
```

```yaml
- id: RPM-CALC1-0458
  page: 70
  vendor_label: "유형 09 삼차함수가 극값을 갖지 않을 조건"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=x^3-3(a-1)x^2-3(b^2-9)x+a 가 극값을 갖지 않도록 하는 자연수 a, b 의 순서쌍 (a, b) 의 개수. 주관식(서술형).
  category: "D/4=9(a-1)^2+9(b^2-9)≤0 → (a-1)^2+b^2≤9 → 자연수 b=1,2,3 별로 a 세기 → 7"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 매개변수 판별식 조건 → 자연수 순서쌍 개수(격자점 세기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3x^2-6(a-1)x-3(b^2-9), D/4=9[(a-1)^2+b^2-9]≤0 → (a-1)^2+b^2≤9. 자연수 b=1: (a-1)^2≤8 → a=1,2,3 · b=2: (a-1)^2≤5 → a=1,2,3 · b=3: a=1 → 7 쌍. 판별식을 두 매개변수의 원 부등식으로 정리한 뒤 b 별로 열거하는 서술형 절차. 등호 포함 격자점 (1,3) 을 빠뜨리기 쉬움(T-경계). 벤더 「상중」 ★3 · 통찰 없음 · M_total 7 → ★3 유지(2매개변수 열거가 노동).
  tier: star_3
  mechanism_primary: "D/4≤0 → (a-1)^2+b^2≤9 → 자연수 b 별 a 개수 3+3+1 → 7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$7$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수 -3(b^2-9) 의 9 를 다른 완전제곱수 r^2 로 바꾸면 (a-1)^2+b^2≤r^2 → 격자점 수가 바뀜. 제약: 자연수 조건 유지, 경계 위 격자점(등호) 존재 여부를 설계 시 확인."
    creative: "(1) '극값을 갖도록' 으로 뒤집으면 해가 무한 → 1≤a,b≤5 같은 범위 제한 필요(★3) (2) 원 부등식을 좌표평면 격자점으로 보게 유도하면 RT d1 명시(★3) (3) a, b 를 정수로 넓히면 ±b 대칭으로 SYM d1 추가(★3)."
```

### 유형 10 주어진 구간에서 삼차함수가 극값을 가질 조건

```yaml
- id: RPM-CALC1-0459
  page: 71
  vendor_label: "유형 10 주어진 구간에서 삼차함수가 극값을 가질 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2x^3+3x^2+kx-5 가 -2<x<0 에서 극댓값, x>0 에서 극솟값을 갖도록 하는 k 의 범위 a<k<b 에 대한 a^2+b^2. 5지선다.
  category: "극대·극소 위치 → f'=6x^2+6x+k 의 근의 분리: f'(0)<0, f'(-2)>0 → -12<k<0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극점의 위치 조건을 이차함수 y=f'(x) 의 근의 분리(구간 끝에서의 부호)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 삼차함수의 극대·극소 위치 조건(f'=0 근의 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최고차 양수이므로 작은 근이 극대. 두 근이 0 을 사이에 두므로 f'(0)=k<0, 작은 근이 -2 보다 크려면 f'(-2)=12+k>0 → -12<k<0 → a^2+b^2=144. 극점 위치를 f' 의 근의 분리로 바꾸는 표현 전환(RT d1)이 관문, 이후 부호 조건 두 개. 유형 대표·난이도 없음 → ★2, RT d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극대∈(-2,0), 극소>0 → f'(0)<0 ∧ f'(-2)>0 → -12<k<0 → 144"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 -2, 0 과 계수 2, 3 을 바꿀 수 있음. 제약: 두 근이 0 양쪽에 있게 하려면 f'(0)<0 만으로 충분하도록(축 조건 생략 가능) 설계, a, b 가 정수가 되도록 f'(-2) 값 정수."
    creative: "(1) 두 극점을 모두 (p,q) 안에 넣으면 판별식·축·양 끝 부호 세 조건(0461 골조 ★3) (2) '극솟값만 구간 안' 비대칭 조건은 0460 골조(★2) (3) 구간을 닫힌 구간으로 바꾸면 경계 등호 처리 T-경계."
```

```yaml
- id: RPM-CALC1-0460
  page: 71
  vendor_label: "유형 10 주어진 구간에서 삼차함수가 극값을 가질 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3-3ax^2+3ax-1 이 구간 (1, 2) 에서 극솟값은 갖고 극댓값은 갖지 않도록 하는 a 의 범위. 주관식.
  category: "큰 근(극소)∈(1,2), 작은 근(극대)∉(1,2) → g=x^2-2ax+a: g(1)<0, g(2)>0 → 1<a<4/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'극소만 구간 안' 을 f'=0 의 두 근 중 큰 근만 (1,2) 에 있다는 근의 분리 조건(g(1)<0, g(2)>0)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 극솟값만 갖도록 하는 조건(근의 분리 · 비대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3(x^2-2ax+a). 최고차 양수라 큰 근이 극소. 큰 근만 (1,2) 에 있으려면 g(1)=1-a<0, g(2)=4-3a>0 → 1<a<4/3. a=1 이면 g=(x-1)^2 중근으로 극값 자체가 없어 제외(T-경계). 조건 번역(RT d1) 뒤 부호 두 개. 벤더 「중」 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극소만∈(1,2) → g(1)<0 ∧ g(2)>0 → 1<a<4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1<a<\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (1,2) 와 계수 3a, 3a 를 바꿀 수 있음. 제약: g(p), g(q) 가 a 의 일차식이 되도록 계수를 a 에 대해 일차로 유지, 경계 a 값에서 중근이 생기는지 확인."
    creative: "(1) '극댓값만 갖고 극솟값은 갖지 않도록' 으로 뒤집기(★2) (2) 최고차 계수를 음수로 바꾸면 큰 근이 극대 → T-부호(★2) (3) 구간을 닫힌 [1,2] 로 주면 경계에서 극값 정의 논쟁 → 설계 주의."
```

```yaml
- id: RPM-CALC1-0461
  page: 71
  vendor_label: "유형 10 주어진 구간에서 삼차함수가 극값을 가질 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+px^2+(p-1)x 가 -1<x<1 에서 극댓값과 극솟값을 모두 갖도록 하는 정수 p 의 개수. 5지선다.
  category: "두 근 모두 (-1,1) → D>0, 축 -p/3∈(-1,1), g(-1)>0, g(1)>0 → -2/3<p<2 → 정수 2 개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 극점이 모두 구간 안 → 이차함수 f' 의 두 근이 구간 안에 있을 근의 분리 세 조건(판별식·축·양 끝 부호)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간 안에 극대·극소를 모두 갖는 조건(근의 분리 3조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g=3x^2+2px+(p-1). D/4=p^2-3p+3>0 항상, 축 -p/3∈(-1,1) → -3<p<3, g(-1)=2-p>0, g(1)=3p+2>0 → -2/3<p<2 → 정수 0, 1 두 개. 근의 분리 세 조건을 빠짐없이 세우는 것이 관문(RT d1)이며 판별식이 항상 양수임을 확인하는 단계 포함. 벤더 「상중」 ★3 · 통찰 d1 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "두 극점∈(-1,1) → D>0 ∧ 축∈(-1,1) ∧ g(±1)>0 → -2/3<p<2 → 정수 0, 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (-1,1) 과 계수 p, p-1 을 바꿀 수 있음. 제약: g(±1) 이 p 의 일차식이 되고 D 가 항상 양이거나 쉽게 풀리도록, 정수 개수가 1~4 개."
    creative: "(1) 판별식이 조건을 실제로 제한하도록 계수를 바꾸면 세 조건 모두 유효(★3) (2) '극댓값은 구간 안, 극솟값은 밖' 비대칭으로 → 0460 골조(★2) (3) 구간 조건을 '두 극점 사이의 거리가 2 이하' 로 바꾸면 근의 차 공식 → EQV d2 ★3~4."
```

### 유형 11 사차함수의 극값의 조건

```yaml
- id: RPM-CALC1-0462
  page: 71
  vendor_label: "유형 11 사차함수의 극값의 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=-x^4+4x^3+4ax^2 이 극솟값을 갖도록 하는 a 의 범위가 α<a<0 또는 a>β 일 때 α+β. 주관식.
  category: "최고차 음수 사차: 극솟값 존재 ⟺ f'=0 서로 다른 세 실근 → x^2-3x-2a: D>0 ∧ 근≠0 → -9/8<a<0 ∨ a>0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사차함수(최고차 음수)가 극솟값을 갖는다 → f'=0 이 서로 다른 세 실근(부호가 세 번 바뀜)으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사차함수가 극솟값(또는 극댓값)을 가질 조건(f'=0 의 서로 다른 세 실근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-4x(x^2-3x-2a). 최고차 음수 사차는 극댓값은 항상 있고, 극솟값은 f' 의 부호가 세 번 바뀔 때만 → x^2-3x-2a=0 이 0 이 아닌 서로 다른 두 실근: D=9+8a>0 → a>-9/8, 근≠0 → a≠0. α=-9/8, β=0 → 합 -9/8. '세 실근 + 0 제외' 번역(EQV d1)이 관문(T-범위 1). 유형 대표·난이도 없음 → ★2, M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극솟값 ⟺ f'=0 세 실근 → D>0 ∧ 0 이 근 아님 → a>-9/8, a≠0 → α+β=-9/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{9}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4, 4a 를 바꾸면 이차 인수 x^2-3x-2a 의 D 와 상수항이 바뀜. 제약: 이차 인수의 상수항이 a 의 배수여야 '근≠0 ⟺ a≠0' 함정이 유지되고, α 가 유리수."
    creative: "(1) 최고차 양수로 바꾸고 '극댓값을 갖도록' 으로 → 0463 골조(★2) (2) f'=(x-1)(x^2+ax+…) 처럼 상수근 인수를 주면 공통근 케이스 MI d2 → 0464 골조(★2~3) (3) '극값을 하나만 갖도록' 으로 뒤집으면 여집합 + 등호 → T-경계(★2)."
```

```yaml
- id: RPM-CALC1-0463
  page: 71
  vendor_label: "유형 11 사차함수의 극값의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=3x^4-8x^3+6ax^2+7 이 극댓값과 극솟값을 모두 갖도록 하는 a 의 범위. 주관식.
  category: "최고차 양수 사차: 극댓값 존재 ⟺ f'=12x(x^2-2x+a)=0 세 실근 → D/4=1-a>0 ∧ a≠0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극댓값·극솟값 모두 존재 → f'=0 이 서로 다른 세 실근(이차 인수가 0 아닌 서로 다른 두 실근)으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사차함수가 극솟값(또는 극댓값)을 가질 조건(f'=0 의 서로 다른 세 실근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=12x(x^2-2x+a). 최고차 양수라 극솟값은 항상 있고 극댓값은 세 실근일 때. x^2-2x+a=0: D/4=1-a>0 → a<1, 근≠0 → a≠0. 답 a<0 또는 0<a<1. 0462 와 같은 골조로 a≠0 누락이 함정(T-범위). 벤더 「중」 ★2 · EQV d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극댓값 존재 ⟺ f'=0 세 실근 → 1-a>0 ∧ a≠0 → a<0 ∨ 0<a<1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a<0$ 또는 $0<a<1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3, -8, 6a 를 바꾸면 이차 인수 x^2-2x+a 의 계수가 바뀜. 제약: f' 가 x 로 묶이도록 x 항 없는 f 유지, 이차 인수 상수항이 a 의 배수."
    creative: "(1) '극댓값을 갖지 않도록' 으로 뒤집으면 D≤0 또는 0 이 근 → a≥1 또는 a=0 → MI d2(★3) (2) 정수 a 의 개수로 이산화(★2) (3) x 항 계수를 넣어 f' 가 x 로 안 묶이면 삼차방정식 실근 개수 → 인수정리 필요(★3)."
```

```yaml
- id: RPM-CALC1-0464
  page: 71
  vendor_label: "유형 11 사차함수의 극값의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사차함수 f 의 도함수가 f'(x)=(x+1)(x^2+ax+2a) 일 때 f 가 극댓값을 갖지 않도록 하는 정수 a 의 개수. 주관식.
  category: "극댓값 없음 ⟺ f'=0 이 세 실근이 아님 → (i) 이차 인수 D≤0: 0≤a≤8 (ii) 이차 인수가 x=-1 을 근으로: a=-1 → 10"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 세 실근이 아님' 에 이차 인수가 중근·허근인 경우뿐 아니라 x=-1 을 근으로 가져 (x+1)^2 중근이 되는 경우까지 포함해야 함 — 두 경우가 각각 답에 기여"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극댓값(극솟값)을 갖지 않을 조건(이차 인수의 판별식 + 공통근 케이스)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 의 최고차 양수이므로 극댓값은 f'=0 의 서로 다른 세 실근일 때만 존재. 없으려면 (i) x^2+ax+2a 의 D=a^2-8a≤0 → 0≤a≤8 (9 개) 또는 (ii) x^2+ax+2a=0 이 -1 을 근으로 가져 f'=(x+1)^2(x-2) 꼴이 되는 a=-1 (1 개) → 10. (ii) 를 놓치면 9 로 틀리는 다중 해석(MI d2). 벤더 「중」 ★2 출발 · 단일 d2 → 규칙상 ★2 유지, 통찰형.
    [분류 이슈] 공통근 케이스(MI d2)가 정답을 좌우해 체감은 ★3 — 후보 ★3. 규칙(통찰 2개 이상 또는 depth 3 에서 +1)대로 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "극댓값 없음 ⟺ ¬(세 실근) → (i) D≤0 → 9 개 (ii) -1 이 공통근 → a=-1 → 9+1=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수근 -1 과 이차 인수 x^2+ax+2a 의 계수를 바꿀 수 있음. 제약: (ii) 공통근 조건이 정수 a 를 주도록(1-a+2a=0 꼴), (i) 의 D≤0 구간이 정수 여러 개를 포함하고 (ii) 의 a 가 그 구간 밖에 있어야 두 경우가 겹치지 않음."
    creative: "(1) '극댓값을 갖도록' 으로 뒤집으면 여집합(정수 무한 → 범위 제한 필요) (2) 상수근을 x=k 문자로 두면 공통근 조건이 k, a 관계식 → EQV 추가 ★3~4 (3) 답을 '실수 a 의 최댓값' 으로 바꾸면 0465 골조."
```

```yaml
- id: RPM-CALC1-0465
  page: 71
  vendor_label: "유형 11 사차함수의 극값의 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-3x^4-8x^3+6(k+3)x^2-12kx 가 극솟값을 갖지 않도록 하는 실수 k 의 최댓값. 주관식.
  category: "f'=-12(x-1)(x^2+3x-k) → 극솟값 없음 ⟺ 세 실근 아님 → (i) D=9+4k≤0 (ii) x=1 공통근 k=4 → 최댓값 4"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'세 실근이 아님' 을 이차 인수 D≤0 과 상수근 1 과의 공통근(중근) 두 경우로 나눠야 하며, 최댓값은 두 번째 경우에서 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극댓값(극솟값)을 갖지 않을 조건(이차 인수의 판별식 + 공통근 케이스)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=-12(x^3+2x^2-(k+3)x+k) 이고 x=1 이 근이므로 인수정리로 -12(x-1)(x^2+3x-k). 최고차 음수 사차는 극댓값은 항상, 극솟값은 세 실근일 때만. 없으려면 (i) 9+4k≤0 → k≤-9/4 (ii) 1+3-k=0 → k=4 (f'=-12(x-1)^2(x+4), 부호 변화 한 번). 최댓값은 (ii) 의 4 — (i) 만 보면 -9/4 로 오답. 인수정리(Mₖ 2) + MI d2. 벤더 「상중」 ★3 · 단일 d2 → ★3, 통찰형.
  tier: star_3
  mechanism_primary: "인수정리 f'=-12(x-1)(x^2+3x-k) → 극솟값 없음 → (i) D≤0 (ii) 공통근 k=4 → max 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수근 1 과 이차 인수 x^2+3x-k 를 바꾸려면 f'=-12(x-p)(x^2+qx-k) 를 전개해 f 를 역산해야 함. 제약: 공통근 조건 p^2+qp-k=0 의 k 가 D≤0 구간보다 커야 '최댓값' 이 (ii) 에서 나옴."
    creative: "(1) 인수정리 단계를 없애려면 f' 를 인수 형태로 직접 주기 → 0464 골조(★2~3) (2) '최솟값' 은 (i) 구간이 아래로 무한이라 설계 불가 → '정수 k 의 개수(범위 제한)' 로 (3) 최고차 양수로 바꾸고 '극댓값을 갖지 않도록' → 대칭 변형(★3)."
```

### 유형 12 함수의 최댓값과 최솟값

```yaml
- id: RPM-CALC1-0466
  page: 72
  vendor_label: "유형 12 함수의 최댓값과 최솟값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [-2, 2] 에서 f(x)=2x^3+3x^2-12x+3 의 최댓값 M, 최솟값 m 에 대한 M+m. 5지선다.
  category: "f'=6(x+2)(x-1) → 구간 내부 극점 x=1(근 -2 는 경계) → f(-2), f(1), f(2) 비교 → 23+(-4)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 삼차함수의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=6(x+2)(x-1) 의 근 -2 는 구간의 왼쪽 끝이라 경계값으로만 취급하고 x=1 이 내부 극소. f(-2)=23, f(1)=-4, f(2)=7 → M=23, m=-4 → 19. 닫힌 구간 최대·최소의 표준 절차(극값 + 양 끝 비교, T-경계 1). 유형 대표·난이도 없음 → ★2, M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f' 근 → 내부 극점 1 + 양 끝 -2, 2 → f 값 비교 → M+m=19"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [-2,2] 와 계수를 바꿀 수 있음. 제약: f' 의 근이 정수, 구간 끝과 극점의 f 값을 모두 계산해 최대·최소 위치를 설계 시 확인(끝점에서 최대가 나오게 하면 T-경계 학습)."
    creative: "(1) 구간을 [-3,0] 처럼 옮겨 극대가 내부, 최소가 끝점에서 나오게(★2) (2) 최고차 음수로(★2) (3) 구간 끝을 매개변수 [-2,t] 로 두고 M+m 을 t 의 함수로 → MI d1 ★3."
```

```yaml
- id: RPM-CALC1-0467
  page: 72
  vendor_label: "유형 12 함수의 최댓값과 최솟값"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [-3, 0] 에서 f(x)=x^4-2x^2-2 가 x=a 에서 최솟값 b 를 가질 때 ab. 주관식.
  category: "f'=4x(x-1)(x+1) → 구간 내 극점 -1, 0 → f(-3), f(-1), f(0) 비교 → 최소 (-1, -3) → 3"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 사차함수의 최솟값(내부 극소점이 답)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=4x(x-1)(x+1), 구간 [-3,0] 안의 극점은 x=-1(극소)·x=0(끝점이자 극대). f(-3)=61, f(-1)=-3, f(0)=-2 → 최솟값 -3 at x=-1 → ab=3. 극점 하나에서 바로 최소가 나와 끝점 비교 부담이 없음. 벤더 「중하」 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f' 인수분해 → 구간 내 극소 x=-1 → f(-1)=-3 → ab=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간과 계수 -2 를 바꿀 수 있음(x^4-2kx^2 꼴이면 극점 ±√k → k 완전제곱). 제약: 최소가 구간 내부 극소에서 나오게 하려면 구간 끝값이 극솟값보다 크도록."
    creative: "(1) 구간을 [-3,-2] 처럼 극점을 포함하지 않게 하면 단조 → 끝점 비교만(★1) (2) 최댓값을 물으면 끝점 61 이 답 → T-경계 학습(★1~2) (3) 계수를 미지수로 두고 최솟값 조건 → 0470 골조(★2)."
```

```yaml
- id: RPM-CALC1-0468
  page: 72
  vendor_label: "유형 12 함수의 최댓값과 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [-1, 2] 에서 f(x)=3x^4-8x^3+6x^2+1 의 최댓값 M, 최솟값 m 에 대한 Mm. 주관식.
  category: "f'=12x(x-1)^2 → 극소 x=0 (x=1 은 부호 불변) → f(-1), f(0), f(1), f(2) 비교 → 18·1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 사차함수의 최댓값·최솟값(중근 극점 · 끝점 최대)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=12x(x-1)^2 이라 x=0 만 극소, x=1 은 중근이라 극점이 아님. f(-1)=18, f(0)=1, f(1)=2, f(2)=9 → M=18(끝점), m=1 → Mm=18. 최대가 왼쪽 끝에서 나오므로 끝점 계산을 빠뜨리면 오답(T-경계). 사차식 값 계산이 다소 무거움(Mₖ 2). 벤더 「중」 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=12x(x-1)^2 → 극소 0 · 끝점 -1, 2 → f 값 비교 → 18×1=18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$18$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [-1,2] 를 바꾸면 최대 위치가 달라짐. 제약: f'=12x(x-1)^2 구조를 유지하려면 3x^4-8x^3+6x^2 부분 고정, 상수항만 변경. 구간 끝에서 최대가 나오게 설계."
    creative: "(1) 구간을 [0,2] 로 좁히면 최대가 f(2)=9(★2) (2) 'x=1 에서 극값을 갖는가' 진위를 섞으면 중근 함정 명시(★2) (3) 상수항을 k 로 두고 최댓값 조건 → 0470 골조."
```

```yaml
- id: RPM-CALC1-0469
  page: 72
  vendor_label: "유형 12 함수의 최댓값과 최솟값"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, 4] 에서 f(x)=(x^2-4x+2)^3-12(x^2-4x+2)+1 의 최댓값 M, 최솟값 m 에 대한 M+m. 주관식.
  category: "t=x^2-4x+2 (0≤x≤4 → -2≤t≤2) → g(t)=t^3-12t+1 은 [-2,2] 에서 감소 → g(-2)+g(2)=17-15"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합성 구조를 t 로 묶고 x 의 구간 [0,4] 를 t 의 구간 [-2,2] 로 옮겨 최대·최소 문제를 g(t) 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환(합성함수)으로 푸는 닫힌 구간 최대·최소 — 새 변수의 범위 재설정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=(x-2)^2-2 는 [0,4] 에서 -2≤t≤2. g(t)=t^3-12t+1 의 g'=3(t-2)(t+2)≤0 이 [-2,2] 에서 성립해 감소 → M=g(-2)=17, m=g(2)=-15 → 2. 치환 자체는 절차이나 t 의 범위를 바꿔 주는 단계(EQV d1)를 놓치면 오답(T-범위). 벤더 「상중」 ★3 출발 · 통찰 d1 · M_total 6 → ★3 유지.
    [분류 이슈] 실질은 치환 + 범위 재설정의 절차형이라 체감 ★2~3 — 후보 ★2. 벤더 출발점대로 ★3 로 두고 기록.
  tier: star_3
  mechanism_primary: "t=x^2-4x+2, t∈[-2,2] → g(t)=t^3-12t+1 감소 → g(-2)+g(2)=2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내부 이차식 x^2-4x+2 와 구간 [0,4], 외부 삼차 t^3-12t+1 을 바꿀 수 있음. 제약: t 의 범위가 g 의 극점(±2)을 포함하는지로 난이도가 갈림 — 현재는 극점이 정확히 t 범위의 끝이라 단조. 극점이 내부에 오게 하면 비교 단계 추가."
    creative: "(1) t 범위 안에 g 의 극점이 들어오게(예: 구간 [0,5] → t∈[-2,7]) 하면 극값 + 끝점 비교 ★3 (2) 내부를 |x|-… 꼴로 바꾸면 범위 산출에 MI 추가(★3) (3) 내부 이차식의 최솟값이 g 의 극점과 어긋나게 하면 EQV 는 유지되고 계산만 증가(YELLOW 주의)."
```

### 유형 13 함수의 최대·최소를 이용하여 미정계수 구하기

```yaml
- id: RPM-CALC1-0470
  page: 72
  vendor_label: "유형 13 함수의 최대·최소를 이용하여 미정계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [-3, 1] 에서 f(x)=-x^4+6x^2-8x+a 의 최댓값이 19 일 때 상수 a. 5지선다.
  category: "f'=-4(x-1)^2(x+2) → 극대 x=-2 (1 은 중근) → f(-2)=24+a=19 → a=-5"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값(최솟값) 조건으로 상수항 결정(사차 · 중근 극점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-4(x^3-3x+2)=-4(x-1)^2(x+2). 부호는 x<-2 양, x>-2 음(x=1 은 불변)이므로 x=-2 가 유일한 극대이자 [-3,1] 의 최대: 24+a=19 → a=-5. 삼차식 인수분해(중근 찾기)가 계산 관문(Mₖ 2), 중근 x=1 을 극점으로 오인하는 함정. 유형 대표·난이도 없음 → ★2, M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f' 인수분해(중근 1) → 극대 x=-2 → f(-2)=24+a=19 → a=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 19 와 구간을 바꿀 수 있음(f'=-4(x-1)^2(x+2) 구조 유지 시 6x^2-8x 고정). 제약: 구간이 -2 를 포함해야 내부 극대가 최대. 상수항 a 만 바꾸면 f' 불변이라 안전한 숫자 변형."
    creative: "(1) 구간을 [0,2] 로 바꾸면 단조 감소 → 최대가 끝점 f(0)=a(★2, T-경계) (2) '최솟값이 k' 로 바꾸면 끝점 f(-3), f(1) 비교 필요(★2) (3) 계수 -8 을 미지로 두면 인수분해 자체가 조건 → EQV d2 ★3."
```

```yaml
- id: RPM-CALC1-0471
  page: 72
  vendor_label: "유형 13 함수의 최대·최소를 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -1≤x≤2 에서 f(x)=ax^3-6ax^2+b (a>0) 의 최댓값이 3, 최솟값이 -13 일 때 a+b. 5지선다.
  category: "f'=3ax(x-4) → a>0 이므로 극대 x=0 → 최대 f(0)=b=3 · 최소 f(2)=-16a+b=-13 → a=1 → 4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값 두 조건으로 미정계수 두 개 결정(부호 조건 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3ax(x-4), 구간 안 극점은 x=0 뿐이고 a>0 이라 극대. f(-1)=-7a+b, f(0)=b, f(2)=-16a+b 에서 최대 b=3, 최소 -16a+b=-13 → a=1, a+b=4. a>0 조건으로 극대·극소와 끝점 대소를 확정하는 것이 핵심 함정(T-부호). 벤더 「중」 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=3ax(x-4), a>0 → 극대 x=0 → b=3 · 최소 f(2)=-16a+b=-13 → a=1 → a+b=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [-1,2], 최댓값·최솟값을 바꿀 수 있음. 제약: 끝점 값 -7a+b, -16a+b 의 대소가 a>0 에서 확정되도록, 연립이 정수해."
    creative: "(1) a>0 조건을 빼고 'a 의 부호에 따라' 두 경우 → MI d1 ★3 (2) 최댓값과 최솟값의 차만 주면 b 소거 → a 만 결정(★2) (3) 구간을 [-1,5] 로 넓혀 x=4 극소가 안으로 들어오면 비교 단계 추가(★2~3)."
```

```yaml
- id: RPM-CALC1-0472
  page: 72
  vendor_label: "유형 13 함수의 최대·최소를 이용하여 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, 3] 에서 f(x)=x^3+ax^2+bx+5 가 x=2 에서 최솟값 3 을 가질 때 f(1). 주관식.
  category: "구간 내부 최소 → 극소 → f'(2)=0, f(2)=3 → a=-7/2, b=2 → f(1)=9/2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 내부 점에서의 최솟값을 그 점이 극소점이라는 조건 f'(2)=0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간 내부 최솟값 조건(f'(p)=0, f(p)=k)으로 미정계수 → 함수값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최소가 내부 x=2 에서 나오므로 f'(2)=12+4a+b=0, f(2)=13+4a+2b=3 → a=-7/2, b=2 → f(1)=9/2. '최솟값' 을 'f'(2)=0' 으로 읽는 동치 변환(EQV d1)이 관문이고 이후는 연립. 끝점 f(0)=5, f(3)=13/2 이 3 보다 큼을 확인하는 검증은 부수(T-경계). 분수 계수(Mₖ 2). 벤더 「중」 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "내부 최소 ⟹ f'(2)=0 ∧ f(2)=3 → (a,b)=(-7/2, 2) → f(1)=9/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최소점 2, 최솟값 3, 상수항 5, 구간 [0,3] 을 바꿀 수 있음. 제약: 최소점이 구간 내부여야 f'=0 사용 가능, 끝점 값이 최솟값보다 크도록 설계, 연립 해가 정수·간단한 분수."
    creative: "(1) 최소점을 구간 끝(x=0)으로 두면 f'=0 을 쓸 수 없어 끝점 비교 + 단조 조건 → EQV d2 ★3 (2) '최댓값' 조건으로 바꾸면 극대 조건(★2) (3) f(1) 대신 '최댓값' 을 물으면 나머지 극값·끝점 비교 추가(★3)."
```

```yaml
- id: RPM-CALC1-0473
  page: 72
  vendor_label: "유형 13 함수의 최대·최소를 이용하여 미정계수 구하기"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    최고차항 계수 1 인 삼차함수 f 가 ㈎ x=-3, 1 에서 극값, ㈏ 구간 [-4, 2] 에서 최솟값 -10 을 만족할 때 [-4, 2] 에서의 최댓값. 주관식(서술형).
  category: "㈎ → f'=3(x+3)(x-1) → f=x^3+3x^2-9x+c → 네 점 f(-4), f(-3), f(1), f(2) → 최소 f(1)=c-5=-10 → c → 최대 f(-3)=22"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극점 조건 + 구간 최솟값 조건으로 삼차함수 결정 → 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3x^2+6x-9 → f=x^3+3x^2-9x+c. [-4,2] 에서 f(-4)=20+c, f(-3)=27+c, f(1)=-5+c, f(2)=2+c 이므로 최소는 f(1)=c-5=-10 → c=-5, 최대는 f(-3)=22. 극점 → f 결정 → 끝점 포함 네 값 비교의 표준 절차. 끝점 f(-4) 를 빠뜨리거나 f(2) 와 비교하지 않으면 오답 가능(T-경계). 벤더 「상중」 ★3 · 통찰 없음 · M_total 7 → ★3 유지(서술형 다단계).
  tier: star_3
  mechanism_primary: "극점 -3, 1 → f' → f(x)+c → 네 값 비교 → 최소 c-5=-10 → c=-5 → 최대 27+c=22"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$22$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 p<q, 구간 [l,r], 최솟값을 바꿀 수 있음. 제약: 최고차 1 유지 시 f' 전개 계수 정수. 구간이 두 극점을 포함하고 끝값이 극값과 어떤 순서인지 설계 시 표로 확인(현재 f(-4)<f(-3), f(1)<f(2))."
    creative: "(1) 구간 끝을 극값보다 극단으로(예: [-6,2]) 두면 최대가 끝점에서 나와 T-경계가 정답을 좌우(★3) (2) ㈏ 를 '최댓값이 22' 로 바꿔 최솟값을 묻기(★3) (3) 최고차 계수를 미지로 두고 극값의 차 조건 → EQV d2 ★3~4."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 2 · ★2 28 · ★3 6 · ★4 0 · ★5 0
- 통찰형 3(0441 SYM d2 · 0464 MI d2 · 0465 MI d2) · 절차형 33 · premium 0. depth 1 통찰 라벨이 붙은 절차형 블록 12(0442·0445·0447·0449·0450·0459·0460·0461·0462·0463·0469·0472 의 EQV/RT d1)를 포함하면 insights 가 비어 있지 않은 블록은 15(dokdu-check 의 「통찰형」 수치).
- 통찰 유형: I-EQV 6(0442·0445·0462·0463·0469·0472) · I-RT 6(0447·0449·0450·0459·0460·0461) · I-MI 2(0464·0465) · I-SYM 1(0441)
- type_hint 상위(유형군): 「극값 조건으로 미정계수 결정」 8(0438~0445) · 「삼차함수 극값 존재/부존재 조건(판별식)」 8(0451~0458) · 「y=f'(x) 그래프 해석」 5(0446~0450) · 「사차함수 극값 조건(세 실근·공통근)」 4(0462~0465) · 「닫힌 구간 최대·최소」 4(0466~0469) · 「최대·최소 조건으로 미정계수」 4(0470~0473) · 「근의 분리(구간 극값 조건)」 3(0459~0461)
- 벤더 신호: 대표문제 9(구역마다 1) · 중하 5 · 중 15 · 상중 6 · 서술형 3(0443·0458·0473) · 기출 태그 없음
- 그림: 5문(`crop:fig-0446.png` · `crop:fig-0447.png` · `crop:fig-0448.png` · `crop:fig-0449.png` · `crop:fig-0450.png`) — 모두 y=f'(x) 그래프
- 전사 답 확인 필요: 없음(36문 모두 풀이 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(벤더 신호와 2단 이상 어긋난 문항은 없음).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0441 | SYM d2 통찰형(변곡점 대칭 → 기함수)으로 두었으나 근과 계수 α+β=0 한 줄로도 답이 나와 절차형 ★2 로 볼 여지. 카탈로그에 「삼차함수의 대칭성」 유형을 따로 세울지 결정 필요 | ★2 (통찰형/절차형 경계) |
| RPM-CALC1-0464 | 벤더 「중」 ★2 이나 -1 공통근 케이스(MI d2)가 정답을 좌우해 체감 ★3. 규칙(통찰 2개 이상·depth 3 에서 +1)대로 ★2 유지 | ★2 / ★3 |
| RPM-CALC1-0469 | 벤더 「상중」 ★3 이나 실질은 치환 + 범위 재설정(EQV d1)의 절차형 M_total 6 → 체감 ★2~3. 벤더 출발점대로 ★3 유지 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「극값 조건으로 미정계수」(유형 05)는 조건 조합에 따라 골조가 갈린다 — (a) 극점·극값 두 식 연립(0438·0440·0443·0444·0472) (b) 극값의 합·차(0439) (c) 그래프 조건의 번역(0441 대칭 · 0442 x 축 접함) (d) 극한 조건 결합(0445). (a) 를 base 유형 ★2 로 세우고 (c)·(d) 는 번역 통찰이 붙는 파생 유형(★2~3)으로 분리하는 편이 변형에 유리.
- 「삼차함수 극값 존재」(유형 08)와 「부존재」(유형 09)는 같은 판별식 골조(D>0 / D≤0)라 카탈로그에서는 한 유형 「삼차함수 극값 존재 조건(판별식)」으로 통합하고 등호 처리·정수 해·두 함수 교집합(0457)·두 매개변수 격자점(0458)을 변형 축으로 두면 된다. 최고차 계수 미지(0454 의 k≠0)는 별도 함정 축.
- 「근의 분리」(유형 10)는 공통수학1 이차방정식 근의 분리를 f' 에 적용하는 유형으로, 조건이 대칭(두 근 모두 구간 안, 0461)인지 비대칭(한 근만, 0459·0460)인지로 ★2/★3 이 갈린다. 따로 세울 것.
- 「사차함수 극값 조건」(유형 11)은 삼차와 달리 f'=0 의 세 실근 판정과 공통근(중근) 케이스(0464·0465)가 핵심이라 반드시 별도 유형. 공통근 케이스가 정답을 좌우하면 ★3, 단순 D 조건이면 ★2.
- 「y=f'(x) 그래프」는 유형 06(계수·극값 결정 — 0446·0448, 절차형)과 유형 07(정성 해석 — 0447·0449·0450, 접점 함정)의 골조가 달라 두 유형으로 유지. 접점(중근)을 극점으로 세는 함정이 세 문항 공통.
- 「닫힌 구간 최대·최소」(유형 12)와 「최대·최소로 미정계수」(유형 13)는 같은 절차(극점 + 끝점 비교)에 미지수 방향만 다르므로 한 유형의 정방향/역방향으로 묶어도 됨. 치환형(0469)만 「합성함수 최대·최소」로 분리 후보.
- 이 범위 36문 중 ★4 이상이 없고 통찰형이 3문뿐이라, 상위권 슬롯용 변형은 0464·0465(공통근 케이스)·0461(근의 분리 3조건)·0441(대칭)을 원본으로 creative 변형 (2)·(3) 을 쓰는 것이 현실적.
