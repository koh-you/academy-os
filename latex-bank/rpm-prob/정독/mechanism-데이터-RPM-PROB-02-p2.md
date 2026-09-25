---
name: mechanism-데이터-RPM-PROB-02-p2
description: RPM 확률과 통계 02 확률의 뜻과 활용(2/3 · 유형 05~12) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 02 확률의 뜻과 활용
  unit_code: PROB-02
  part: "2/3"
  extract_range: "30~33쪽 · 0167~0196"
  total_problems: 30
  unit_total: 99
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 02 확률의 뜻과 활용 (2/3) 정독 데이터 (v1.0)

이 파일은 30~33쪽 · 0167~0196 의 30문항을 다룬다. 구역은 「유형 05 같은 것이 있는 순열을 이용하는 확률」부터 「유형 12 여사건의 확률; `적어도'의 조건」까지 여덟 개이며, 모두 유형별 기본 문제 구역이다. RPM 의 벤더 난이도 신호는 구역 종류(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 주관식 / 실력 Up), 문항별 난이도 표시(하·중하·중·상중·상), 태그(대표문제·중요·서술형·기출) 세 가지다. 이 범위는 전부 「유형 NN」 구역이므로 난이도 표시가 없는 대표문제는 ★2, 「중」은 ★2, 「상중」은 ★3 을 출발점으로 두고 M_total·통찰로 ±1 조정했다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]`), 변형 제약(`variation_notes.numeric` / `variation_notes.creative`)을 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼고 여기서 재검산하지 않았다.

## 문항 데이터

### 유형 05 같은 것이 있는 순열을 이용하는 확률

```yaml
- id: RPM-PROB-0167
  page: 30
  vendor_label: "유형 05 같은 것이 있는 순열을 이용하는 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1, 1, 2, 2, 2, 3 을 일렬로 나열할 때 짝수끼리 서로 이웃할 확률. 5지선다.
  category: "같은 것이 있는 순열 → 이웃 조건 묶음 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열의 확률 — 이웃 조건(묶음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 6!/(2!3!), 유리한 경우는 2 세 개를 한 묶음으로 보고 남은 네 자리(1 두 개 포함)의 같은 것이 있는 순열. 묶음 안 배열이 모두 같은 수라 추가 곱이 없다는 점만 확인하면 끝난다. 통찰 없음·M_total 5 로 −1 후보이나 유형 구역 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 6!/(2!3!) → 짝수 3개를 한 묶음 → 4개 자리의 같은 것이 있는 순열 → 비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(1 두 개 · 2 세 개 · 3 한 개)의 중복 개수를 바꿀 수 있다. 제약: 전체 6!/(중복 계승)과 묶음 뒤 순열이 모두 정수이고 선택지가 단순 분수로 정리되도록 중복 수를 고른다. 묶음 안에 서로 다른 수가 들어가면 묶음 내부 배열 수를 곱해야 하므로 답 구조가 바뀐다."
    creative: "(1) 짝수끼리 이웃하지 않을 확률로 뒤집기(여사건·사이 끼우기 ★2) (2) 홀수를 양 끝에 두는 조건(자리 지정 ★2) (3) 2 세 개 중 두 개만 이웃할 확률로 바꾸면 케이스 분기가 생겨 I-MI 발생 ★3."
```

```yaml
- id: RPM-PROB-0168
  page: 30
  vendor_label: "유형 05 같은 것이 있는 순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    C, E, C, I, L, I, A 의 7개 문자를 일렬로 나열할 때 자음과 모음을 번갈아 나열할 확률.
  category: "문자 개수 분류 → 교대 배열 패턴 결정 → 같은 것이 있는 순열 두 번"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열의 확률 — 교대 배열(자리 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모음 4개(E, I, I, A)와 자음 3개(C, C, L)라 교대 패턴은 모음이 양 끝인 한 가지로 정해진다. 모음 자리 4!/2!, 자음 자리 3!/2! 를 곱하고 전체 7!/(2!2!) 로 나눈다. 중복 문자 C·I 를 두 번 다 나누는지가 유일한 함정. 패턴이 하나로 정해져 분기가 없으므로 절차형 ★2.
  tier: star_2
  mechanism_primary: "모음 4 · 자음 3 → 교대 패턴 1가지 → 각 자리의 같은 것이 있는 순열 곱 ÷ 전체 7!/(2!2!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{35}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 바꿔 자음·모음 개수와 중복 문자 수를 조정한다. 제약: 교대 배열이 가능하려면 두 집단 개수 차가 0 또는 1 이어야 하고, 차가 0 이면 패턴이 두 가지가 되어 2를 곱해야 한다(★ 변동 없음, 함정만 증가)."
    creative: "(1) 자음끼리 이웃하지 않을 확률로 바꾸면 끼워넣기 골조(★2) (2) 같은 문자끼리 이웃할 확률로 바꾸면 묶음 골조(★2) (3) 양 끝이 모두 모음일 확률처럼 자리 지정형으로 바꾸면 케이스가 늘어 ★3."
```

```yaml
- id: RPM-PROB-0169
  page: 30
  vendor_label: "유형 05 같은 것이 있는 순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가로 4칸 · 세로 4칸 도로망에서 A 에서 B 까지 최단 거리로 갈 때 중간 지점 C 를 지날 확률(각 경로를 택할 확률은 같다).
  category: "최단 경로 수 = 같은 것이 있는 순열 → A→C→B 분할 곱 → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "격자 위 최단 경로를 오른쪽·위쪽 이동 문자열로 옮겨 같은 것이 있는 순열로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최단 경로의 수를 이용한 확률(특정 지점 경유)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 경로는 가로 4·세로 4 이동의 같은 것이 있는 순열, C 경유는 A→C 와 C→B 를 따로 세어 곱한다. 기하(도로망)를 문자열 순열로 옮기는 표현 전환이 한 번 필요해 I-RT d1. 구역 유형·난이도 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 = (4+4)!/(4!4!) → C 경유 = (A→C 수)×(C→B 수) → 두 수의 비"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지"
  figure: "crop:fig-0169.png"
  latex: latex-bank/rpm-prob/items/0169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로·세로 칸 수)와 C 의 위치를 바꿀 수 있다. 제약: 그림 라벨(A·B·C 위치)이 고정된 크롭이라 수를 바꾸면 fig-0169.png 를 다시 만들어야 한다. C 는 격자 내부 격자점이어야 하고 A→C, C→B 가 모두 최단 경로 위에 있어야 한다."
    creative: "(1) C 를 지나지 않을 확률(여사건 ★2) (2) 도로 한 구간을 끊어 통과 불가 구간을 만들면 여사건·경우 분할이 필요해 ★3 (3) C 와 D 두 지점을 모두 지날 확률로 확장하면 곱이 세 토막이 되어 ★3."
```

```yaml
- id: RPM-PROB-0170
  page: 30
  vendor_label: "유형 05 같은 것이 있는 순열을 이용하는 확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X = {1, 2, 3, 4} 에서 X 로의 함수 f 를 만들 때 f(1)+f(2)+f(3)+f(4) = 6 을 만족시킬 확률.
  category: "함수 개수 → 값의 합 조건 → 음이 아닌 정수해(중복조합) → 비"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함숫값 네 개의 합 조건을 f(i)−1 로 평행이동해 음이 아닌 정수해 개수(중복조합)로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함숫값의 합 조건을 만족시키는 함수의 확률(중복조합 환원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체는 4^4, 유리한 경우는 각 값이 1 이상 4 이하이면서 합이 6 인 순서쌍 수다. f(i)−1 로 옮기면 합 2 인 음이 아닌 정수해 개수가 되고 상한 3 은 자동으로 만족한다는 확인이 필요하다. 표현 전환 d2 · M_total 8 로 벤더 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "전체 4^4 → f(i)−1 치환으로 합 2 인 음이 아닌 정수해 → 중복조합 수 ÷ 4^4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{128}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 크기(원소 4개)와 목표 합(6)을 바꿀 수 있다. 제약: 목표 합이 최솟값(원소 수)에 가까울수록 상한 조건이 자동 만족돼 중복조합 한 번으로 끝나지만, 합이 중간값에 가까우면 상한 초과 케이스를 빼야 해 골조가 늘어난다(★ +1)."
    creative: "(1) 합이 6 이하일 확률(누적 합산 ★3) (2) f 가 일대일대응이라는 조건을 붙이면 순열 골조로 바뀜(★3) (3) 합 대신 곱 조건으로 바꾸면 약수 분해 분기가 생겨 I-MI 추가 ★4."
```

### 유형 06 조합을 이용하는 확률

```yaml
- id: RPM-PROB-0171
  page: 30
  vendor_label: "유형 06 조합을 이용하는 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    유미와 준서를 포함한 6명 중 3명의 대표를 뽑을 때 유미는 뽑히고 준서는 뽑히지 않을 확률. 5지선다.
  category: "특정 원소 포함·제외 → 남은 인원에서 조합 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합을 이용하는 확률 — 특정 대상의 포함·제외"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 C(6,3), 유리한 경우는 유미를 확정하고 준서를 뺀 나머지 4명에서 2명을 고르는 C(4,2). 포함 조건과 제외 조건을 동시에 반영해 모집단을 줄이는 한 단계가 전부다. 통찰 없음·M_total 5 로 −1 후보지만 유형 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "유미 확정 · 준서 제외 → 남은 4명 중 2명 C(4,2) ÷ C(6,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원(6)과 뽑는 수(3), 지정 인원 수를 바꿀 수 있다. 제약: 포함 인원 + 제외 인원이 전체에서 빠진 뒤에도 남은 인원이 뽑을 수보다 많아야 하고, 선택지가 간단한 분수가 되도록 C 값이 약분되게 고른다."
    creative: "(1) 두 사람이 모두 뽑힐 확률(★2) (2) 적어도 한 명이 뽑힐 확률(여사건 ★2) (3) 대표 3명에 직책(회장·부회장·총무)을 주면 순열 골조로 바뀌고 ★3."
```

```yaml
- id: RPM-PROB-0172
  page: 30
  vendor_label: "유형 06 조합을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    흰 공 4개와 검은 공 6개에서 5개를 동시에 꺼낼 때 흰 공 2개와 검은 공 3개가 나올 확률.
  category: "색깔별 조합의 곱 ÷ 전체 조합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합을 이용하는 확률 — 색깔·종류별 개수 지정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 C(10,5), 유리한 경우 C(4,2)×C(6,3). 두 집단에서 각각 고른 뒤 곱한다는 표준 절차 한 단계이고 계산량만 약간 있다. 통찰 없음이나 조합 수 계산 부담으로 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "C(4,2)×C(6,3) ÷ C(10,5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{10}{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(흰 4 · 검 6)와 꺼내는 수(5), 색깔별 지정 수를 바꿀 수 있다. 제약: 지정 수가 각 색의 보유 수를 넘지 않아야 하고 두 지정 수의 합이 꺼내는 수와 같아야 한다."
    creative: "(1) 흰 공이 검은 공보다 많을 확률(케이스 합 ★3) (2) 적어도 한 개가 흰 공일 확률(여사건 ★2) (3) 세 가지 색으로 늘리면 분할 케이스가 생겨 ★3."
```

```yaml
- id: RPM-PROB-0173
  page: 30
  vendor_label: "유형 06 조합을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    제비 20개에서 2개를 동시에 뽑을 때 2개 모두 당첨일 확률이 1/19 일 때 당첨 제비의 개수.
  category: "확률식 → 당첨 개수 미지수 방정식 → 자연수 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합 확률의 역문제 — 확률이 주어질 때 개수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C(n,2)/C(20,2) = 1/19 에서 C(n,2) 값을 얻고 n(n−1) 의 이차방정식을 푼다. 역방향처럼 보이지만 미정계수를 세워 푸는 표준 절차라 통찰로 세지 않았고, 두 근 중 자연수·n ≤ 20 인 것만 남기는 범위 확인이 함정. M_total 7 로 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "C(n,2)/C(20,2) = 확률 → n(n−1) 값 → 자연수 근 선택"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 제비 수(20)와 주어진 확률(1/19)을 바꿀 수 있다. 제약: C(n,2) 가 정수가 되고 n(n−1) = 정수 에서 n 이 자연수로 떨어져야 하며, n ≤ 전체 수 인 근이 하나만 남아야 답이 유일하다."
    creative: "(1) 3개를 뽑아 모두 당첨일 확률을 주면 삼차 방정식이 되어 ★3 (2) '적어도 하나가 당첨'일 확률을 주면 여사건 한 겹이 추가돼 ★3 (3) 당첨 제비 개수 대신 전체 제비 수를 묻는 형태로 뒤집기(★2)."
```

```yaml
- id: RPM-PROB-0174
  page: 30
  vendor_label: "유형 06 조합을 이용하는 확률"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    원 위에 일정한 간격으로 놓인 6개의 점 중 3개를 택해 만든 삼각형이 직각삼각형일 확률.
  category: "직각삼각형 ⟺ 빗변이 지름 → 지름 선택 × 나머지 점 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "반원에 대한 원주각이 직각이라는 기하 성질을 '지름 1개 + 나머지 점 1개' 조합 카운트로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 위의 점으로 만드는 도형의 확률(직각삼각형·지름)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 C(6,3) 은 바로 나오지만 유리한 경우는 직각삼각형 조건을 지름 조건으로 옮겨야 세진다. 마주 보는 점 쌍(지름) 3개 각각에 나머지 4개 점을 붙이는 구조이고 중복이 없다는 점만 확인한다. 기하→조합 전환 d2 로 벤더 상중 출발점 ★3 유지. [분류 이슈] M_total 5 로 노동량은 가벼워 ★2 후보이기도 하다.
  tier: star_3
  mechanism_primary: "직각 ⟺ 빗변이 지름 → 지름 3개 × 나머지 점 4개 ÷ C(6,3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0174.png"
  latex: latex-bank/rpm-prob/items/0174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수(6)를 바꿀 수 있다. 제약: 지름이 존재하려면 짝수 개여야 하고, 홀수 개로 바꾸면 직각삼각형이 0개가 되어 문제가 성립하지 않는다. 그림 라벨이 정육각형 배치로 고정이므로 수를 바꾸면 fig-0174.png 재생성이 필요하다."
    creative: "(1) 이등변삼각형·정삼각형이 될 확률(대칭 카운트 I-SYM ★4) (2) 둔각삼각형일 확률(여사건·분류 ★3) (3) 4개 점을 택해 직사각형이 될 확률(지름 두 개 선택 ★3)."
```

### 유형 07 통계적 확률

```yaml
- id: RPM-PROB-0175
  page: 31
  vendor_label: "유형 07 통계적 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    흰 공과 검은 공 합해 10개인 주머니에서 2개를 꺼내 확인하고 되넣는 시행을 반복해 15번에 2번 꼴로 둘 다 흰 공이었을 때, 주머니 속 흰 공의 개수.
  category: "상대도수 = 수학적 확률 → 흰 공 개수 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "통계적 확률로 미지의 개수 추정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    시행 횟수가 충분히 클 때 상대도수 2/15 를 수학적 확률로 놓는 것이 이 유형의 정의 자체이므로 통찰로 세지 않았다. C(n,2)/C(10,2) = 2/15 에서 n(n−1) 값을 얻고 자연수 근만 남긴다. 유형 대표문제·M_total 7 로 ★2.
  tier: star_2
  mechanism_primary: "상대도수 2/15 = C(n,2)/C(10,2) → n(n−1) → 자연수 근"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$개'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 공 개수(10), 상대도수(15번에 2번), 꺼내는 개수(2)를 바꿀 수 있다. 제약: 상대도수를 기약분수로 두었을 때 C(n,2) 가 정수가 되고 n 이 자연수로 떨어져야 하며 n ≤ 전체 개수여야 한다."
    creative: "(1) 두 개가 서로 다른 색일 상대도수를 주면 식이 n(10−n) 꼴로 바뀌어 근이 둘 생김(I-VF 검증 필요 ★3) (2) 3개를 꺼내 모두 흰 공인 경우로 바꾸면 삼차식 ★3 (3) 흰 공 개수를 주고 시행 횟수 중 몇 번쯤 나올지 묻는 역방향(★2)."
```

```yaml
- id: RPM-PROB-0176
  page: 31
  vendor_label: "유형 07 통계적 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    자동차 제조사별 운전자 수를 조사한 표에서, 임의로 한 명을 택할 때 B사의 자동차를 보유하고 있을 확률(모든 운전자는 자동차를 한 대씩 보유).
  category: "도수 표 → 상대도수 = 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도수분포표에서 상대도수로 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에서 B사 도수와 전체 합계를 읽어 나누면 끝난다. 합계가 표에 따로 없으면 직접 더해야 한다는 점만 주의. 통찰 없음·M_total 4 로 유형·중 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "B사 도수 ÷ 전체 도수 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8}{31}$'
  answer_source: "답지"
  figure: "crop:fig-0176.png"
  latex: latex-bank/rpm-prob/items/0176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 제조사별 인원 수를 바꿀 수 있다. 제약: 표 이미지가 본문에 삽입돼 있어 수를 바꾸면 fig-0176.png 를 다시 만들어야 한다. 합계가 기약분수로 정리되는 값이면 답이 깔끔하다."
    creative: "(1) A사 또는 C사를 보유할 확률(배반 합 ★2) (2) B사가 아닐 확률(여사건 ★1) (3) 표에 한 칸을 비워 두고 확률을 주어 도수를 역산시키면 ★2."
```

```yaml
- id: RPM-PROB-0177
  page: 31
  vendor_label: "유형 07 통계적 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    학생 100명의 수학 점수 도수분포표에서, 임의로 한 명을 택할 때 점수가 60점 이상 80점 미만일 확률.
  category: "계급 두 개 도수 합 ÷ 전체 도수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도수분포표에서 계급 구간의 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    60점 이상 80점 미만은 표의 두 계급을 합쳐야 하고, 이상·미만 경계를 계급 구간과 맞추는 T-경계 함정이 있다. 노동량은 작지만 경계 해석 때문에 −1 하지 않고 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "해당 두 계급 도수 합 ÷ 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{11}{25}$'
  answer_source: "답지"
  figure: "crop:fig-0177.png"
  latex: latex-bank/rpm-prob/items/0177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계급별 도수와 묻는 구간을 바꿀 수 있다. 제약: 도수 합이 100 이 유지되도록 하고 구간이 계급 경계와 정확히 맞아떨어져야 한다. 표는 크롭 이미지라 수를 바꾸면 fig-0177.png 재생성이 필요하다."
    creative: "(1) 60점 미만일 확률(여사건 ★1) (2) 표의 한 계급 도수를 미지수로 두고 확률을 주어 역산(★2) (3) 두 학년 표를 나란히 주고 어느 쪽 확률이 큰지 비교하면 ★2."
```

### 유형 08 확률의 기본 성질

```yaml
- id: RPM-PROB-0178
  page: 31
  vendor_label: "유형 08 확률의 기본 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    표본공간 S, 공사건에 대하여 임의의 두 사건 A, B 에 관한 보기 ㄱ~ㄷ(확률의 범위 · P(A)+P(B) 와 P(S) 의 대소 · 1−P(S) = P(공사건)) 중 옳은 것 고르기.
  category: "확률의 기본 성질(0 ≤ P ≤ 1 · P(S) = 1 · P(공사건) = 0) 대입 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 기본 성질 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄷ 은 정의 그대로이고 ㄴ 은 두 사건이 작을 때를 잡으면 바로 반례가 나온다. 임의의 사건이라는 추상 때문에 Mₐ 는 높지만 각 보기가 한 줄 판정이라 통찰은 세지 않았다. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "보기별로 기본 성질 대입 → ㄴ 은 반례 하나로 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 변형 여지가 거의 없다. 바꿀 수 있는 것은 보기의 부등호 방향과 P(S)·P(공사건) 자리 정도다. 제약: 참인 보기와 거짓인 보기가 섞여야 답이 의미를 갖는다."
    creative: "(1) 여사건 성질 P(A) + P(A의 여사건) = 1 을 보기에 넣기(★2) (2) 배반사건 조건을 보기로 넣어 P(A∪B) 판정으로 확장(★2) (3) 반례를 직접 제시하게 하는 서술형으로 바꾸면 ★3."
```

```yaml
- id: RPM-PROB-0179
  page: 31
  vendor_label: "유형 08 확률의 기본 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표본공간이 S 인 임의의 두 사건 A, B 에 관한 보기 ㄱ~ㄷ(P(A)P(B) 의 범위 · 여사건 합 · 교사건 확률의 범위) 중 옳은 것 고르기.
  category: "확률의 범위와 여사건 성질을 곱·교집합에 적용"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 기본 성질 참·거짓 판정(범위·여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 보기 모두 0 ≤ P ≤ 1 과 여사건 성질에서 곧바로 따라온다. 곱과 교집합도 결국 0 과 1 사이라는 확인이라 분기가 없다. 통찰 없음이나 임의의 사건 추상(Mₐ 3)으로 M_total 7, 유형·중 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 0 ≤ P ≤ 1 · P(A) + P(A의 여사건) = 1 로 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 부등호 경계(0 ≤ · < )와 범위 상한을 바꿀 수 있다. 제약: 경계를 열린 부등호로 바꾸면 공사건·전사건 때문에 참·거짓이 뒤집히므로 의도한 답과 맞는지 확인해야 한다."
    creative: "(1) P(A∪B) 의 범위를 보기로 추가(★2) (2) 세 보기가 모두 참이 아니게 하나를 미세하게 비틀어 반례 구성 부담을 올리면 ★3 (3) 배반사건일 때와 아닐 때를 나눠 묻는 형태로 확장(★3)."
```

```yaml
- id: RPM-PROB-0180
  page: 31
  vendor_label: "유형 08 확률의 기본 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표본공간이 S 인 임의의 두 사건 A, B 에 관한 보기 ㄱ~ㄷ(A∪B = S 이면 확률의 합이 1 · 확률 합의 범위 · 확률 합이 1 이면 배반) 중 옳은 것 고르기.
  category: "덧셈정리로 역명제 반례 구성 → 참·거짓 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ·ㄷ 을 P(A∪B) = P(A)+P(B)−P(A∩B) 로 옮겨 교사건이 비어 있지 않은 반례를 만들어 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률의 기본 성질 참·거짓 판정(배반사건 역명제)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 과 ㄷ 은 모두 교사건을 0 으로 가정해야 성립하는 명제라 덧셈정리로 옮겨 반례를 만들어야 기각된다. 남는 ㄴ 만 참. 반례 구성이 한 단계 필요해 I-EQV d1 을 세고, 유형·중 출발점 ★2 유지. [분류 이슈] 0178·0179 와 같은 보기형이지만 반례 구성 부담이 한 단 높아 ★3 후보이기도 하다.
  tier: star_2
  mechanism_primary: "덧셈정리로 ㄱ·ㄷ 을 교사건 조건으로 환원 → 교사건이 있는 반례로 기각 → ㄴ 만 참"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형이라 변형 여지는 보기 문장 쪽에 있다. 제약: 확률 합의 범위(0 이상 2 이하)처럼 항상 참인 보기 하나는 남겨 두어야 난이도가 유지된다."
    creative: "(1) ㄱ·ㄷ 의 역·대우를 각각 보기로 나눠 참거짓을 묻기(★3) (2) 배반사건이면 A∪B = S 인지 묻는 방향으로 뒤집기(★2) (3) 구체적인 주사위 표본공간을 주고 반례를 직접 쓰게 하는 서술형(★3)."
```

### 유형 09 확률의 계산

```yaml
- id: RPM-PROB-0181
  page: 32
  vendor_label: "유형 09 확률의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    P(A) = 1/3, P(B) = 1/2, 두 여사건의 합사건의 확률이 5/6 일 때 P(A∪B) 구하기.
  category: "드모르간 → 교사건 확률 → 덧셈정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 계산 — 여사건·드모르간을 이용한 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 여사건의 합사건은 교사건의 여사건이므로 P(A∩B) 를 바로 얻고, 덧셈정리에 대입하면 끝난다. 드모르간 법칙 적용은 이 유형의 표준 공식이라 통찰로 세지 않았다. 유형 대표문제·M_total 5 로 ★2.
  tier: star_2
  mechanism_primary: "여사건의 합 = 교사건의 여사건 → P(A∩B) → P(A)+P(B)−P(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A), P(B), 주어진 여사건 합의 확률을 바꿀 수 있다. 제약: 그 값에서 역산한 P(A∩B) 가 0 이상이고 min(P(A), P(B)) 이하여야 하며 P(A∪B) 가 1 을 넘지 않아야 한다."
    creative: "(1) P(A∪B) 를 주고 두 여사건의 합을 묻는 역방향(★2) (2) 조건을 하나 빼고 범위를 묻는 형태로 바꾸면 I-MI 가 생겨 ★3 (3) 배반사건 여부를 함께 판정하게 하면 ★3."
```

```yaml
- id: RPM-PROB-0182
  page: 32
  vendor_label: "유형 09 확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(A) = 2/3, P(B) = 1/4, P(A∩B) = 1/6 일 때 두 여사건의 교사건의 확률. 5지선다.
  category: "덧셈정리 → 드모르간(여사건의 교 = 합사건의 여사건)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 계산 — 여사건의 교사건(드모르간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 여사건의 교사건은 합사건의 여사건이므로 먼저 덧셈정리로 P(A∪B) 를 구하고 1 에서 뺀다. 분모가 다른 세 분수의 통분이 계산 부담의 전부. 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(A∪B) = P(A)+P(B)−P(A∩B) → 1 − P(A∪B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률값을 바꿀 수 있다. 제약: P(A∩B) ≤ min(P(A), P(B)) 이고 P(A)+P(B)−P(A∩B) ≤ 1 이어야 한다. 선택지가 겹치지 않도록 최종값이 기약분수로 떨어지게 고른다."
    creative: "(1) 여사건의 교사건 값을 주고 P(A∩B) 를 묻는 역방향(★2) (2) A 와 B 가 배반이라는 조건으로 바꾸면 한 단계 줄어 ★1 (3) 세 사건으로 늘리면 포함배제가 필요해 ★4."
```

```yaml
- id: RPM-PROB-0183
  page: 32
  vendor_label: "유형 09 확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(A) = 1/3, P(B의 여사건) = 2/5, 두 여사건의 교사건의 확률이 1/5 일 때 P(A−B).
  category: "여사건 정리 → P(A∪B) → 덧셈정리로 P(A∩B) → 차사건"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "여사건·차사건으로 흩어진 세 조건을 P(A∪B)·P(A∩B) 한 축으로 모아야 계산이 이어짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률의 계산 — 차사건 P(A−B) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 세 값이 각각 원사건·여사건·여사건의 교사건이라 형태가 달라, 먼저 P(B) 와 P(A∪B) 로 통일한 뒤 덧셈정리로 P(A∩B) 를 얻고 P(A)−P(A∩B) 로 마무리한다. 표현 통일 한 단계가 필요해 I-EQV d1. 유형·중 ★2 유지.
  tier: star_2
  mechanism_primary: "P(B) = 1 − P(B의 여사건) · P(A∪B) = 1 − P(여사건 교) → P(A∩B) → P(A) − P(A∩B)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률값을 바꿀 수 있다. 제약: 역산한 P(A∩B) 가 0 이상 min(P(A), P(B)) 이하가 되어야 하고, 차사건 값이 선택지로 쓸 만한 기약분수여야 한다."
    creative: "(1) P(B−A) 를 묻기(같은 골조 ★2) (2) 대칭차(둘 중 하나만 일어날 확률)를 묻기(★3) (3) 조건 하나를 부등식으로 주면 값이 범위가 되어 ★3."
```

```yaml
- id: RPM-PROB-0184
  page: 32
  vendor_label: "유형 09 확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A 와 B의 여사건이 서로 배반사건이고 P(A∪B) = 5/8, P(A)+P(B) = 13/16 일 때 P(A의 여사건 ∩ B).
  category: "배반 조건 → 포함관계 A ⊂ B → 덧셈정리로 두 값 분리"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 와 B의 여사건이 배반이라는 조건을 A ⊂ B 로 옮겨 P(A∩B) = P(A) · P(A∪B) = P(B) 를 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 계산 — 배반 조건을 포함관계로 바꾸기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    배반 조건을 그대로 두면 미지수가 셋이라 막히고, A ⊂ B 로 옮기는 순간 P(A∪B) 가 곧 P(B) 이므로 합 조건에서 P(A) 가 떨어진다. 마지막은 P(B)−P(A∩B). 착안 d2 한 개로 ★3 후보이나 규칙상 +1 조건(통찰 2개 또는 d3)을 채우지 못해 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A 와 B여사건 배반 ⟺ A ⊂ B → P(A∪B) = P(B) → P(A) = 합 − P(B) → P(B) − P(A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∪B) 와 P(A)+P(B) 를 바꿀 수 있다. 제약: A ⊂ B 이므로 P(A∪B) = P(B) 이고 P(A) = 합 − P(B) 가 0 이상 P(B) 이하여야 한다. 두 값의 분모를 맞춰 두면 답이 깔끔하다."
    creative: "(1) 배반 조건을 A의 여사건과 B 로 바꾸면 B ⊂ A 가 되어 대칭 변형(★2) (2) 포함관계를 직접 주고 배반 여부를 묻는 역방향(★2) (3) 조건을 P(A)·P(B) 곱으로 주면 독립 개념이 섞여 ★3."
```

### 유형 10 확률의 덧셈정리; 배반사건이 아닌 경우

```yaml
- id: RPM-PROB-0185
  page: 32
  vendor_label: "유형 10 확률의 덧셈정리; 배반사건이 아닌 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A 상자(1, 3, 5, 7)와 B 상자(1, 2, 3, 4, 5)에서 카드를 한 장씩 꺼낼 때 두 수의 합이 4 이하이거나 3의 배수일 확률.
  category: "두 사건 각각 세기 → 동시에 일어나는 경우 빼기(덧셈정리)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 — 두 조건이 겹치는 '또는' 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 순서쌍 20개에서 합 4 이하인 경우와 합이 3의 배수인 경우를 각각 세고, 두 조건을 모두 만족하는 경우를 한 번 뺀다. 배반이 아니라는 점을 알아채 중복을 제거하는 것이 이 유형의 표준 절차라 통찰로 세지 않았다. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "전체 4×5 → n(합 ≤ 4) + n(합이 3의 배수) − n(둘 다) → 덧셈정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상자의 카드 숫자 구성과 기준값(4 이하 · 3의 배수)을 바꿀 수 있다. 제약: 두 사건이 겹치는 경우가 최소 한 개는 있어야 '배반이 아닌 경우' 유형이 유지되고, 전체 경우 수로 나눈 값이 기약분수로 떨어지게 고른다."
    creative: "(1) 합이 짝수이거나 5 이상으로 바꾸기(같은 골조 ★2) (2) 곱이 짝수이거나 3의 배수로 바꾸면 여사건이 더 빨라 I-SC 발생 ★3 (3) 상자를 세 개로 늘리면 포함배제가 필요해 ★4."
```

```yaml
- id: RPM-PROB-0186
  page: 32
  vendor_label: "유형 10 확률의 덧셈정리; 배반사건이 아닌 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A 가수를 좋아하는 학생이 전체의 2/5, B 가수가 1/3, 둘 다 좋아하는 학생이 2/15 일 때 A 또는 B 를 좋아할 확률.
  category: "덧셈정리 직접 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 — 비율이 주어진 '또는' 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 값이 그대로 P(A), P(B), P(A∩B) 라 덧셈정리에 바로 대입하고 통분하면 끝난다. 사건을 세는 단계조차 없다. 통찰 없음·M_total 3 으로 유형·중 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "P(A)+P(B)−P(A∩B) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 비율을 바꿀 수 있다. 제약: P(A∩B) 가 min(P(A), P(B)) 이하이고 합이 1 을 넘지 않아야 하며, 분모를 맞추기 쉬운 값이어야 한다."
    creative: "(1) 둘 다 좋아하지 않을 확률(여사건 ★2) (2) A 만 좋아할 확률(차사건 ★2) (3) 셋 중 하나를 미지수로 두고 '또는' 확률을 주어 역산시키면 ★2."
```

```yaml
- id: RPM-PROB-0187
  page: 32
  vendor_label: "유형 10 확률의 덧셈정리; 배반사건이 아닌 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X = {1, 2, 3} 에서 Y = {0, 1, 2, 3} 으로의 함수 f 를 만들 때 f(1) = 0 이거나 f(2) = 1 일 확률.
  category: "함수의 개수 → 두 사건 개수와 교사건 개수 → 덧셈정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 — 함수 개수로 세는 '또는' 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 함수는 4^3, f(1) 을 고정하면 4^2, 두 값을 모두 고정하면 4^1 이므로 세 개수를 덧셈정리에 넣으면 된다. 두 조건이 서로 다른 원소에 걸려 배반이 아니라는 점이 함정. 함수 추상(Mₐ 2)으로 M_total 7, 유형·중 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 4^3 → n(f(1)=0) + n(f(2)=1) − n(둘 다) → 덧셈정리"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{7}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역의 크기와 지정하는 함숫값을 바꿀 수 있다. 제약: 두 조건이 서로 다른 정의역 원소에 걸려야 교사건 개수가 곱으로 간단히 나오고, 같은 원소에 두 값을 지정하면 배반이 되어 유형이 달라진다."
    creative: "(1) 같은 원소에 두 값을 걸어 배반 사건으로 만들기(★1~2) (2) f 가 일대일이라는 조건 추가(순열 골조 ★3) (3) 'f(1) = 0 이고 f(2) = 1' 로 바꾸면 곱사건만 남아 ★1."
```

```yaml
- id: RPM-PROB-0188
  page: 32
  vendor_label: "유형 10 확률의 덧셈정리; 배반사건이 아닌 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1부터 30까지 적힌 카드에서 한 장을 꺼내 수를 a 라 할 때, 이차방정식 10x² − 7ax + a² = 0 이 정수인 해를 가질 확률.
  category: "이차식 인수분해 → 근이 정수일 조건을 배수 조건으로 → 덧셈정리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌변을 인수분해해 두 근을 a/5, a/2 로 얻고 '정수해를 가진다'를 'a 가 5의 배수 또는 2의 배수'로 옮김"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 근 판정과 확률의 덧셈정리를 한 풀이 안에서 결합(배수 집합의 겹침 처리)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "덧셈정리 — 방정식이 정수해를 가질 조건(배수 사건의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변이 인수분해되면 근이 a/5 와 a/2 이므로 조건은 a 가 5 또는 2 의 배수라는 것으로 바뀐다. 30 이하의 5의 배수와 2의 배수를 세고 공배수를 한 번 빼면 끝. 조건 변환 d2 와 단원 결합 d1 로 통찰 2개지만 인수분해가 바로 보이는 표준 결합이라 ★4 로 올리지 않고 벤더 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(5x − a)(2x − a) = 0 → 근 a/5, a/2 → a 가 5 또는 2 의 배수 → 배수 개수 덧셈정리 ÷ 30"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위(1~30)와 이차식 계수를 바꿀 수 있다. 제약: 좌변이 정수 계수로 인수분해되어 근이 a/p, a/q 꼴이어야 하고, 범위 상한이 p·q 의 배수면 개수 계산이 깔끔하다. 판별식만 따지는 형태로 바꾸면 골조가 완전히 달라진다."
    creative: "(1) '서로 다른 두 정수해'로 좁히면 a 가 0 이 아닌 조건 검증이 붙어 I-VF ★4 (2) 유리수 해 조건으로 바꾸면 판별식이 완전제곱수여야 해 ★4 (3) 배수 조건 대신 소수 조건으로 바꾸면 개수 세기가 열거로 바뀌어 ★3."
```

### 유형 11 확률의 덧셈정리; 배반사건인 경우

```yaml
- id: RPM-PROB-0189
  page: 33
  vendor_label: "유형 11 확률의 덧셈정리; 배반사건인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    흰 공 3개와 검은 공 5개에서 2개를 동시에 꺼낼 때 두 공이 같은 색일 확률.
  category: "색깔별 배반 사건으로 분할 → 각 조합 확률의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건의 덧셈정리 — 같은 색·같은 종류가 나올 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '모두 흰 공'과 '모두 검은 공'은 동시에 일어날 수 없으므로 두 조합 확률을 그냥 더한다. 전체는 C(8,2). 배반 판정이 자명해 통찰은 없고, 유형 대표문제라 M_total 5 에서도 ★2 유지.
  tier: star_2
  mechanism_primary: "[C(3,2) + C(5,2)] ÷ C(8,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{13}{28}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(흰 3 · 검 5)와 꺼내는 개수(2)를 바꿀 수 있다. 제약: 각 색의 개수가 꺼내는 수 이상이어야 두 케이스가 모두 살아 있고, 합이 기약분수로 떨어지게 고른다."
    creative: "(1) 다른 색일 확률(여사건 ★2) (2) 색을 세 가지로 늘리면 케이스가 셋으로 늘어 ★2~3 (3) 3개를 꺼내 '적어도 두 개가 같은 색'으로 바꾸면 여사건·분할 선택이 생겨 ★3."
```

```yaml
- id: RPM-PROB-0190
  page: 33
  vendor_label: "유형 11 확률의 덧셈정리; 배반사건인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1부터 7까지 적힌 카드 7장에서 3장을 동시에 뽑을 때 세 수의 합이 홀수일 확률. 5지선다.
  category: "합의 홀짝 → 홀수 카드 개수의 홀짝 → 배반 케이스 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'세 수의 합이 홀수'를 '뽑은 홀수 카드가 3개 또는 1개'로 옮겨 조합 카운트가 가능하게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건의 덧셈정리 — 합의 홀짝 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합의 홀짝을 그대로 세면 불가능하고, 홀수 4개·짝수 3개로 나눠 홀수를 3개 또는 1개 뽑는 두 배반 케이스로 옮겨야 한다. 케이스 누락이 유일한 함정. 조건 동치 변환 d1 로 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "합이 홀수 ⟺ 홀수 카드 3개 또는 1개 → C(4,3) + C(4,1)C(3,2) ÷ C(7,3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위(1~7)와 뽑는 장수(3)를 바꿀 수 있다. 제약: 홀수·짝수 개수가 바뀌면 살아남는 케이스 수도 바뀌므로 각 조합이 0 이 되지 않게 확인해야 한다. 짝수 장을 뽑으면 케이스 구조가 달라진다."
    creative: "(1) 합이 3의 배수일 확률로 바꾸면 나머지 분류가 필요해 ★3 (2) 곱이 짝수일 확률(여사건이 빨라 I-SC ★3) (3) 뽑은 수의 최댓값 조건으로 바꾸면 카운트 골조가 달라져 ★3."
```

```yaml
- id: RPM-PROB-0191
  page: 33
  vendor_label: "유형 11 확률의 덧셈정리; 배반사건인 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    1학년 5명과 2학년 3명으로 구성된 동아리에서 6명을 선발할 때 1학년이 2학년보다 많이 선발될 확률.
  category: "부등식 조건 → 학년별 인원 케이스 → 배반 케이스 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'1학년이 2학년보다 많다'를 뽑은 1학년 수 k 에 대한 부등식으로 옮겨 가능한 k 를 좁힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건의 덧셈정리 — 두 집단 인원 비교 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6명을 뽑으므로 1학년 k 명이면 2학년은 6−k 명이고, k > 6−k 에서 k 가 4 이상으로 좁혀진다. 1학년이 5명뿐이라 k 는 4 또는 5 두 케이스뿐이라는 범위 확인이 함정이고 두 케이스는 배반이라 더한다. 조건 변환 d1 · M_total 7 로 유형·중 출발점 ★2 유지(서술형 태그는 +0).
  tier: star_2
  mechanism_primary: "k > 6 − k → k = 4, 5 → C(5,4)C(3,2) + C(5,5)C(3,1) ÷ C(8,6)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 학년 인원(5, 3)과 선발 인원(6)을 바꿀 수 있다. 제약: 각 케이스의 조합 수가 보유 인원을 넘지 않아야 하고, 선발 인원을 줄이면 살아남는 케이스가 늘어 계산량이 커진다(★ +1 가능)."
    creative: "(1) '1학년이 2학년의 2배 이상'으로 바꾸면 부등식 처리가 한 단 올라 ★3 (2) 여사건(2학년이 1학년 이상)으로 뒤집으면 케이스가 줄어 I-SC 발생 ★3 (3) 선발된 6명에 역할을 배정하면 순열 골조가 추가돼 ★3."
```

```yaml
- id: RPM-PROB-0192
  page: 33
  vendor_label: "유형 11 확률의 덧셈정리; 배반사건인 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1열 3자리 · 2열 4자리로 배치된 좌석에 6명의 학생이 각각 한 자리씩 앉을 때, A 와 B 가 같은 열에 이웃하게 앉을 확률.
  category: "좌석이 인원보다 많은 배치 → 이웃 좌석쌍 카운트 → 순열 비"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌석 7개에 6명이 앉는 상황을 7개에서 6개를 택해 배열하는 순열로 옮기고, 조건을 '이웃 좌석쌍을 하나 골라 A·B 배치'로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌석 배치에서 특정 두 사람이 이웃할 확률(빈자리 있는 배열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌석 수가 인원보다 하나 많아 전체를 7개 중 6개의 순열로 잡는 것이 첫 관문이다. 유리한 경우는 같은 열의 이웃 좌석쌍(1열 2쌍 · 2열 3쌍)을 하나 고르고 A·B 를 배치한 뒤 남은 학생을 남은 좌석에 배열한다. 빈자리 처리 d2 로 벤더 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "전체 = 7개 좌석 중 6개 순열 → 이웃 쌍 5개 × A·B 자리바꿈 2 × 남은 4명 배열 ÷ 전체"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{21}$'
  answer_source: "답지"
  figure: "crop:fig-0192.png"
  latex: latex-bank/rpm-prob/items/0192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "열별 좌석 수(3, 4)와 학생 수(6)를 바꿀 수 있다. 제약: 좌석 수 ≥ 학생 수 여야 하고, 이웃 쌍 개수는 각 열에서 (좌석 수 − 1) 의 합이다. 좌석 배치가 크롭 이미지라 수를 바꾸면 fig-0192.png 를 다시 만들어야 한다."
    creative: "(1) A 와 B 가 같은 열에 앉을 확률(이웃 조건 제거 ★2) (2) 서로 다른 열에 앉을 확률(여사건 ★2) (3) 빈자리가 특정 열에 오도록 조건을 추가하면 케이스 분기가 생겨 ★4."
```

### 유형 12 여사건의 확률; `적어도'의 조건

```yaml
- id: RPM-PROB-0193
  page: 33
  vendor_label: "유형 12 여사건의 확률; `적어도'의 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    빨간 공 2개와 파란 공 4개에서 3개를 동시에 꺼낼 때 적어도 한 개는 빨간 공일 확률.
  category: "'적어도 하나' → 여사건(모두 파란 공) → 1 에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "'적어도 하나'의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '적어도 한 개가 빨강'의 여사건은 '모두 파랑' 하나뿐이라 C(4,3)/C(6,3) 을 1 에서 빼면 끝난다. 여사건 전환이 이 유형의 정의 자체라 통찰로 세지 않았다. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "1 − C(4,3)/C(6,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(빨강 2 · 파랑 4)와 꺼내는 개수(3)를 바꿀 수 있다. 제약: 여사건이 존재하려면 파란 공 개수가 꺼내는 개수 이상이어야 하고, 빨간 공이 많아지면 여사건 확률이 작아져 문제가 싱거워진다."
    creative: "(1) '적어도 두 개가 빨강'으로 바꾸면 여사건이 두 케이스라 ★3 (2) 색을 세 가지로 늘려 '적어도 한 색이 빠질 확률'로 가면 포함배제 ★4 (3) 확률을 주고 파란 공 개수를 역산시키면 ★2(0196 골조)."
```

```yaml
- id: RPM-PROB-0194
  page: 33
  vendor_label: "유형 12 여사건의 확률; `적어도'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    남학생 2명과 여학생 3명을 일렬로 세울 때 적어도 한쪽 끝에 남학생을 세울 확률. 5지선다.
  category: "'적어도 한쪽 끝' → 여사건(양 끝 모두 여학생) → 1 에서 빼기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'적어도 한쪽 끝이 남학생'의 부정이 '양 끝이 모두 여학생'임을 정확히 잡아 여사건을 구성"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "'적어도 한쪽 끝' 조건의 여사건 확률(일렬 배열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직접 세면 양 끝 남·여 케이스가 갈리지만, 여사건을 '양 끝 모두 여학생'으로 잡으면 여학생 3명 중 2명을 양 끝에 배열하고 나머지 3명을 가운데 배열하는 한 줄로 끝난다. 부정 명제 구성 d1 로 유형·중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "1 − (양 끝 여학생 2명 순열 × 나머지 3! ) ÷ 5!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(2, 3)을 바꿀 수 있다. 제약: 여사건이 성립하려면 여학생이 2명 이상이어야 하고, 남학생 수가 늘면 여사건 확률이 급히 작아진다. 답이 기약분수로 떨어지는 조합을 고른다."
    creative: "(1) '양 끝이 모두 남학생'으로 바꾸면 여사건 없이 직접 세기(★1~2) (2) '적어도 두 남학생이 이웃'으로 바꾸면 여사건이 이웃하지 않기 골조가 되어 ★3 (3) 원형 배열로 바꾸면 끝 개념이 사라져 문제 구조 자체가 달라짐."
```

```yaml
- id: RPM-PROB-0195
  page: 33
  vendor_label: "유형 12 여사건의 확률; `적어도'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3쌍의 부부가 일렬로 앉을 때 서로 이웃하지 않는 부부가 적어도 1쌍 있을 확률. 5지선다.
  category: "'적어도 1쌍 떨어짐' → 여사건(세 쌍 모두 이웃) → 묶음 순열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'이웃하지 않는 부부가 적어도 1쌍'의 부정을 '세 쌍이 모두 이웃'으로 옮겨 묶음 순열 한 번으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "'적어도 한 쌍' 조건의 여사건 확률(묶음 순열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직접 세면 떨어진 쌍이 1·2·3쌍인 경우를 모두 따져야 하지만, 여사건 '세 쌍 모두 이웃'은 부부 세 묶음의 순열 3! 에 각 묶음 내부 2! 를 곱해 한 줄로 나온다. 부정 명제를 정확히 잡는 착안 d2. 규칙상 +1 조건(통찰 2개 또는 d3)을 못 채워 유형·중 출발점 ★2 유지. [분류 이슈] 여사건 구성 난도로는 ★3 후보.
  tier: star_2
  mechanism_primary: "1 − (3쌍 묶음 3! × 각 묶음 2^3) ÷ 6!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부부 쌍 수(3쌍)를 바꿀 수 있다. 제약: n쌍이면 여사건은 n!·2^n / (2n)! 로 급격히 작아져 답이 1 에 가까워진다. 선택지가 구별되게 하려면 2~3쌍이 적당하다."
    creative: "(1) '모든 부부가 이웃할 확률'로 바꾸면 여사건 없이 직행(★2) (2) '정확히 1쌍만 이웃'으로 바꾸면 포함배제가 필요해 ★4 (3) 원탁 배열로 바꾸면 원순열 골조가 되어 ★3."
```

```yaml
- id: RPM-PROB-0196
  page: 33
  vendor_label: "유형 12 여사건의 확률; `적어도'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    여학생 n명을 포함한 10명 중 2명의 대표를 뽑을 때 적어도 1명이 여학생일 확률이 13/15 일 때 n 의 값.
  category: "여사건(모두 남학생) 식 → 남학생 수 방정식 → 자연수 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "'적어도 하나' 여사건 확률의 역문제(인원 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건 '2명 모두 남학생'의 확률이 2/15 이므로 C(10−n,2)/C(10,2) 방정식을 세워 10−n 을 구한다. 여사건 전환과 미정계수 풀이 모두 이 유형의 표준 절차라 통찰로 세지 않았고, 두 근 중 0 ≤ n ≤ 10 인 것만 남기는 범위 확인이 함정. M_total 7 로 유형·중 ★2.
  tier: star_2
  mechanism_primary: "1 − C(10−n,2)/C(10,2) = 확률 → C(10−n,2) 값 → 남학생 수 → n"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원(10), 뽑는 수(2), 주어진 확률(13/15)을 바꿀 수 있다. 제약: 여사건 확률에서 얻은 C(남학생 수, 2) 가 정수이고 남학생 수가 자연수로 떨어져야 하며 0 ≤ n ≤ 전체 인원이어야 한다."
    creative: "(1) 3명을 뽑는 경우로 바꾸면 삼차식이 되어 ★3 (2) '적어도 1명은 남학생'으로 뒤집어 같은 골조 유지(★2) (3) 확률 대신 부등식(확률이 13/15 이상)을 주면 n 의 범위를 묻는 문제가 되어 ★3."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 2 · ★2 24 · ★3 4 · ★4 0 · ★5 0
- 통찰형 12 · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-RT 3 · I-XU 1 (depth 3 없음 · SC/VF/SYM 없음 → ★5 부재는 정상)
- 벤더 신호: 대표문제 8 · 난이도 중 17 · 상중 4 · 서술형 태그 2 · 기출 0
- type_hint 상위: 「덧셈정리(겹치는 '또는')」 4 · 「'적어도' 조건의 여사건」 4 · 「조합을 이용하는 확률」 4 · 「확률의 기본 성질 보기 판정」 3 · 「통계적 확률·상대도수」 3
- 그림: 5문(`crop:fig-0169.png` · `crop:fig-0174.png` · `crop:fig-0176.png` · `crop:fig-0177.png` · `crop:fig-0192.png`) — 0176 은 표가 본문에 삽입된 형태
- 범위 특성: 여덟 구역 모두 유형별 기본 문제라 ★2 에 크게 몰린다. 변별 문항은 0170(중복조합 환원) · 0174(원주각→조합) · 0188(인수분해→배수 조건) · 0192(빈자리 있는 배열) 넷.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0174 | 벤더 「상중」·통찰 d2 지만 M_total 5 로 노동량이 가벼움. 지름 성질을 아는 순간 두 줄로 끝남 | ★2 / ★3 |
| RPM-PROB-0180 | 0178·0179 와 같은 보기 판정형이나 두 보기가 반례 구성을 요구해 한 단 무거움 | ★2 / ★3 |
| RPM-PROB-0184 | 배반→포함관계 변환(d2)이 핵심이라 체감은 ★3 이지만 +1 규칙(통찰 2개 또는 d3) 미충족 | ★2 / ★3 |
| RPM-PROB-0188 | 통찰 2개(EQV d2 + XU d1)로 +1 후보이나 인수분해가 바로 보이는 표준 결합이라 ★3 유지 | ★3 / ★4 |
| RPM-PROB-0195 | 여사건 구성 난도(적어도 1쌍 → 세 쌍 모두 이웃)가 0193·0194 보다 확실히 높음 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「여사건 확률의 역문제(확률을 주고 개수를 역산)」 — 0173·0175·0196 이 같은 골조(조합 확률 = 값 → 미지 개수 방정식 → 자연수 근)로 세 번 반복된다. 구역은 유형 06·07·12 로 흩어져 있지만 변형 관점에서는 한 유형이다.
- **따로 세워야 할 유형**: 「빈자리·잉여 자리가 있는 배열 확률」 — 0192 처럼 좌석 수 > 인원인 경우는 전체 경우 수를 순열로 잡는 별도 관문이 있어 일반 이웃 배열 유형과 구분이 필요하다.
- **통합해도 될 유형**: 유형 09~11(확률의 계산 · 덧셈정리 배반 아닌 경우 · 배반인 경우)은 골조가 모두 「덧셈정리 + 여사건·드모르간」 한 그루이고, 배반 여부는 교사건 항이 0 인지 여부일 뿐이다. 카탈로그에서는 한 유형의 하위 분기로 묶고 0181~0192 를 난이도 계단으로 배치하는 편이 변형 재사용에 유리하다.
- **통합해도 될 유형**: 유형 08 의 보기 판정형(0178·0179·0180)은 개별 유형으로 세울 만한 골조가 없고 「확률의 기본 성질 참·거짓」 하나로 충분하다. 다만 반례 구성이 필요한 0180 계열을 depth 태그로 구분해 두면 좋다.
- **표현 전환(I-RT) 묶음**: 0169(격자 경로)·0170(함수→중복조합)·0174(원주각→조합)는 세 문항 모두 '세는 대상을 다른 표현으로 옮기기'가 핵심이다. 카탈로그를 만들 때 이 축을 유형이 아니라 통찰 태그로 유지하는 편이 좋다.
