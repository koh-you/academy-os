---
name: mechanism-데이터-GN-CM2-18
description: 개념원리 공통수학2 18 유한집합의 원소의 개수(1/1 · 157-376~163-402) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 18 유한집합의 원소의 개수
  unit_code: CM2-18
  part: "1/1"
  extract_range: "157~163쪽 · 157-376~163-402"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 18 유한집합의 원소의 개수 (1/1) 정독 데이터 (v1.0)

이 파일은 18단원 30문 전수(157~163쪽 · 통번호 157-376~163-402)를 다룬다. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 10문(필수 2 · 발전 1 · 확인체크 7) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 4문이다. 단원 전체가 **원소 개수 공식 세 줄**(n(A∪B)=n(A)+n(B)-n(A∩B) · 세 집합 확장 · n(A-B)=n(A)-n(A∩B))을 축으로 삼고 거기서 ⑴ 공식 그대로 대입·역산 ⑵ 여집합·드모르간을 끼운 조건 ⑶ 실생활 문장을 집합으로 옮기는 활용 ⑷ 포함관계 극단을 쓰는 최댓값·최솟값 ⑸ 집합 연산 항등식·새 연산(대칭차) 판정, 다섯 갈래로 뻗는 배열이다. 그림은 158-381 한 문항(벤다이어그램 색칠 영역)뿐이고 선택지 문항은 3문(161-390 · 162-396 · 163-399)이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · 「발전」 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역이 아니라 바로 위 예제의 층을 따른다**(158-380~158-382 · 159-383~159-384 는 필수 아래 ★2 · 160-385~160-386 은 발전 아래 ★3). 이 단원에서 반복되는 **표준 공식 적용**(드모르간으로 n(A^c∩B^c)=n(U)-n(A∪B) · n(A-B)=n(A)-n(A∩B) · 문장제의 「모두 아닌」을 여집합으로 옮기기)은 교과서가 그 절에서 직접 가르치는 절차이므로 **통찰로 세지 않았다**. 대신 ⑴ 색칠 영역·문장을 집합 연산식으로 옮겨야 하는 단계(I-RT) ⑵ 「~만」·「두 개에만」처럼 원문 표현을 다른 개수식으로 바꿔야 하는 단계(I-EQV) ⑶ 최댓값·최솟값을 포함관계 극단으로 역추적하는 단계(I-BW) ⑷ 대칭차의 대칭성으로 세 조건을 한 덩어리로 묶는 단계(I-SYM)만 통찰로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-157-376
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 두 집합 A, B 의 n(A) · n(B) · n(A∩B) · n(A∪B) 중 세 개를 주고 나머지 하나를 구하기.
  category: "합집합의 원소의 개수 공식 대입·역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수 기본 공식(n(A∪B)=n(A)+n(B)-n(A∩B))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 공식에 수를 넣고 남은 하나를 옮기는 것뿐이고 세 소문항이 같은 식의 방향만 바꾼다.
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n(A∪B)=n(A)+n(B)-n(A∩B) → 미지의 항으로 이항 → 답"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $14$ ⑵ $3$ ⑶ $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/157-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 값 중 아무 세 개나 바꿀 수 있음. 제약: n(A∩B) ≤ min(n(A), n(B)) 이고 n(A∪B) = n(A)+n(B)-n(A∩B) ≥ max(n(A), n(B)) 를 지켜야 개수가 음수가 되지 않는다."
    creative: "(1) n(A-B) 를 묻는 소문항 추가(★1 유지) (2) 전체집합 n(U) 를 주고 n(A^c∩B^c) 를 함께 묻기(★2 · 드모르간 한 겹) (3) 세 집합으로 확장(★2 · Mₖ 상승)."
```

```yaml
- id: GN-CM2-157-377
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    세 집합의 낱개·두 개씩 교집합·세 개 교집합의 개수를 모두 주고 n(A∪B∪C) 구하기.
  category: "세 집합의 합집합 원소 개수 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 집합의 합집합의 원소의 개수(포함배제 3항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일곱 항의 부호만 맞춰 한 줄에 대입하면 끝난다. 부호 실수(T-부호) 외에 판단할 것이 없다.
    개념원리 익히기 구역·통찰 없음 → ★1(항 수가 많아 Mₖ 만 2).
  tier: star_1
  mechanism_primary: "n(A∪B∪C)=Σn(단일)-Σn(두 개 교집합)+n(A∩B∩C) 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/157-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일곱 개 수치 전부. 제약: n(A∩B∩C) ≤ 각 두 개 교집합 ≤ 각 단일집합 이어야 하고, 벤다이어그램 일곱 영역이 모두 0 이상이 되도록 잡아야 한다."
    creative: "(1) n(A∪B∪C) 를 주고 n(A∩B∩C) 를 역산하게 하기(★2 · I-BW d1) (2) 한 쌍을 서로소(A∩C=∅)로 두어 항을 지우게 하기(★2 · 158-382 골조) (3) 실생활 세 동아리 문장으로 옮기면 ★3 이상(163-401 골조)."
```

```yaml
- id: GN-CM2-157-378
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ n(A) · n(B) · n(A∩B) 가 주어졌을 때 n(A-B) 와 n(B-A) 구하기.
  category: "차집합의 원소의 개수 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "차집합의 원소의 개수(n(A-B)=n(A)-n(A∩B))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A-B 가 A 에서 겹치는 부분을 뺀 것이라는 정의 확인 한 단계씩.
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1. 두 소문항이 A 와 B 를 맞바꾼 같은 식.
  tier: star_1
  mechanism_primary: "n(A-B)=n(A)-n(A∩B) · n(B-A)=n(B)-n(A∩B) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $12$ ⑵ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/157-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(A) · n(B) · n(A∩B) 를 바꿀 수 있음. 제약: n(A∩B) ≤ min(n(A), n(B)) 이어야 두 차집합이 모두 0 이상이다."
    creative: "(1) n(A∪B) 를 주고 n(A∩B) 를 먼저 구하게 하기(★2 · 한 단계 추가) (2) n(A-B) 와 n(B-A) 를 주고 n(A∪B) 를 묻기(★2 · I-BW d1) (3) 대칭차 n((A-B)∪(B-A)) 로 묶어 묻기(★2)."
```

```yaml
- id: GN-CM2-157-379
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ n(U) · n(A) · n(B) · n(A∩B) 를 주고 n(A^c) · n(B^c) · n((A∩B)^c) · n(A^c∩B^c) 구하기.
  category: "여집합의 원소의 개수와 드모르간 법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여집합의 원소의 개수(n(A^c)=n(U)-n(A))와 드모르간 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴~⑶ 은 n(U) 에서 빼는 한 줄이고 ⑷ 만 드모르간으로 (A∪B)^c 로 바꾼 뒤 n(A∪B)=26 을 먼저 구한다.
    드모르간은 이 절에서 바로 가르치는 표준 공식이라 통찰로 세지 않았다. 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "n(A^c)=n(U)-n(A) → ⑷ 는 드모르간으로 A^c∩B^c=(A∪B)^c → n(U)-n(A∪B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $12$ ⑵ $19$ ⑶ $24$ ⑷ $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/157-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U)=33 과 n(A) · n(B) · n(A∩B) 를 바꿀 수 있음. 제약: n(A∪B) ≤ n(U) 를 지켜야 ⑷ 가 0 이상이 된다."
    creative: "(1) n(A^c∪B^c) 소문항 추가(★2 · 드모르간 반대 방향) (2) ⑷ 를 먼저 주고 n(A∩B) 를 역산하게 하기(★2 · 158-e11 골조) (3) 벤다이어그램 색칠 영역으로 묻기(★2 · I-RT d1 · 158-381 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-158-e11
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    n(U)=60, n(A)=37, n(B)=40, n(A^c∩B^c)=15 일 때 n(B-A) 구하기.
  category: "여집합 조건 → 합집합 → 교집합 → 차집합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수(여집합 조건에서 차집합 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A^c∩B^c=(A∪B)^c 로 n(A∪B)=45 를 얻고, 합집합 공식으로 n(A∩B)=32, 끝에 n(B-A)=n(B)-n(A∩B).
    공식 세 개를 정해진 순서로 이어 붙이는 절차형이고 분기가 없다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "n(A∪B)=n(U)-n(A^c∩B^c) → n(A∩B)=n(A)+n(B)-n(A∪B) → n(B-A)=n(B)-n(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/158-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U) · n(A) · n(B) · n(A^c∩B^c) 를 바꿀 수 있음. 제약: n(A∪B)=n(U)-n(A^c∩B^c) 가 max(n(A),n(B)) 이상이고 n(A)+n(B) 이하여야 n(A∩B) 가 0 이상 min 이하가 된다."
    creative: "(1) 묻는 것을 n(A-B) 나 n(A∩B) 로 바꾸기(★2 유지) (2) n(B-A) 를 주고 n(A^c∩B^c) 를 역산(★3 · I-BW d1) (3) 세 집합으로 늘려 n(A^c∩B^c∩C^c) 조건을 주기(★3 · Mₛ +1)."
```

```yaml
- id: GN-CM2-158-380
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    n(U)=32, n(A∩B)=4, n(A^c∩B^c)=11 일 때 n(A)+n(B) 의 값 구하기.
  category: "여집합 조건 → 합집합 → 두 집합 개수의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수(개별 개수는 모른 채 합만 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n(A∪B)=32-11=21 을 먼저 얻고 합집합 공식을 n(A)+n(B)=n(A∪B)+n(A∩B) 로 옮겨 21+4.
    n(A) 와 n(B) 를 따로 구할 수 없다는 점만 확인하면 되는 한 번 이항. 필수 예제 아래 확인체크 → ★2.
  tier: star_2
  mechanism_primary: "n(A∪B)=n(U)-n(A^c∩B^c) → n(A)+n(B)=n(A∪B)+n(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/158-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U) · n(A∩B) · n(A^c∩B^c) 를 바꿀 수 있음. 제약: n(A∪B)=n(U)-n(A^c∩B^c) 가 n(A∩B) 이상이어야 하고, 합만 묻는 문항이므로 n(A) · n(B) 개별값은 결정되지 않아도 된다."
    creative: "(1) n(A)-n(B) 를 추가로 주고 각각을 구하게 하기(★2 · 연립 한 줄) (2) n(A)·n(B) 의 곱의 최댓값을 묻기(★3 · I-BW d2 · 합이 일정할 때) (3) 세 집합으로 확장해 Σn(단일) 을 묻기(★3)."
```

```yaml
- id: GN-CM2-158-381
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    n(U)=25, n(A)=12, n(B)=10, n(A∪B)=18 일 때 벤다이어그램에서 색칠한 부분의 원소 개수 구하기.
  category: "벤다이어그램 색칠 영역 → 집합 연산식 → 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "색칠된 그림 영역을 (A∩B)∪(A∪B)^c 라는 집합 연산식으로 옮겨야 개수 계산이 시작된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램의 색칠한 부분의 원소의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n(A∩B)=12+10-18=4, n((A∪B)^c)=25-18=7 이고 답 11 은 이 둘의 합이므로 색칠 영역은
    교집합과 두 원 바깥, 곧 대칭차의 여집합이다. 그림을 식으로 옮기는 단계 하나(I-RT d1)만 통찰.
    크롭 이미지에서는 교집합 부분의 음영이 옅게 찍혀 있으나 개수 분해가 4+7 로만 성립해 판정에는 영향 없음.
  tier: star_2
  mechanism_primary: "색칠 영역 = (A∩B)∪(A∪B)^c → n(A∩B)=n(A)+n(B)-n(A∪B), n((A∪B)^c)=n(U)-n(A∪B) → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: 'crop:fig-158-381.png'
  latex: latex-bank/gn-cm2/items/158-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U) · n(A) · n(B) · n(A∪B) 를 바꿀 수 있음. 제약: 그림의 색칠 위치는 고정이므로 네 영역(A-B, A∩B, B-A, (A∪B)^c) 이 모두 0 이상이 되도록 n(A∪B) 를 max(n(A),n(B)) 와 n(A)+n(B) 사이, n(U) 이하로 잡는다."
    creative: "(1) 색칠 영역을 A-B 나 대칭차로 바꾸기(★2 유지 · 식만 교체) (2) 색칠 영역의 개수를 주고 n(A∪B) 를 역산하게 하기(★3 · I-BW d2) (3) 세 집합 벤다이어그램의 한 영역으로 확장(★3 · Mₛ +1)."
```

```yaml
- id: GN-CM2-158-382
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A∩C=∅ 이고 n(A)=10, n(B)=9, n(C)=6, n(A∪B)=15, n(B∪C)=11 일 때 n(A∪B∪C) 구하기.
  category: "서로소 조건으로 항 지우기 → 세 집합 합집합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A∩C=∅ 을 n(C∩A)=0 과 n(A∩B∩C)=0 두 개수 조건으로 바꿔 공식의 두 항을 동시에 지운다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로소인 두 집합이 있는 세 집합의 합집합의 원소의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n(A∩B)=10+9-15=4, n(B∩C)=9+6-11=4 를 먼저 구하고 A∩C=∅ 에서 n(C∩A)=0, A∩B∩C⊂A∩C 이므로 0.
    남은 것은 세 집합 공식 한 줄. 서로소를 세 집합 교집합까지 밀어 주는 착안 하나(EQV d2)라 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "n(A∩B)·n(B∩C) 를 합집합 공식으로 역산 → A∩C=∅ 에서 n(C∩A)=n(A∩B∩C)=0 → 세 집합 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/158-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 개수를 바꿀 수 있음. 제약: n(A∩B)=n(A)+n(B)-n(A∪B) 와 n(B∩C) 가 각각 0 이상이고 두 교집합의 합이 n(B) 를 넘지 않아야 A∩C=∅ 과 모순되지 않는다."
    creative: "(1) 서로소 조건을 B∩C=∅ 로 옮기기(★2 유지) (2) A∩C=∅ 을 빼고 n(A∩C) 를 주면 단순 대입(★1~2 하락) (3) n(A∪B∪C) 를 주고 n(C) 를 역산하게 하기(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-159-e12
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 60명 중 영어 35명, 수학 28명, 둘 다 틀린 학생 5명일 때 적어도 하나 맞힌 학생 · 둘 다 맞힌 학생 · 영어만 맞힌 학생 수 구하기.
  category: "문장 조건을 집합으로 옮겨 합집합·교집합·차집합 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 활용(두 과목 조사)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘 다 틀린 학생 = (A∪B)^c 로 ⑴ 60-5, ⑵ 35+28-55, ⑶ 35-8 이 차례로 나온다.
    소문항이 번역 순서를 그대로 안내해 주어 분기가 없다. 필수 예제 ★2, 통찰 없음.
  tier: star_2
  mechanism_primary: "둘 다 틀림=n((A∪B)^c) → n(A∪B)=n(U)-5 → n(A∩B)=n(A)+n(B)-n(A∪B) → n(A-B)=n(A)-n(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $55$ ⑵ $8$ ⑶ $27$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/159-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 60 · 영어 35 · 수학 28 · 둘 다 틀림 5 를 바꿀 수 있음. 제약: 영어+수학 ≥ 전체-둘다틀림 이어야 교집합이 0 이상이고, 각 과목 수는 전체 이하여야 한다."
    creative: "(1) 소문항을 없애고 ⑶ 만 한 번에 묻기(★3 · 번역 단계가 드러나지 않음) (2) 「수학만 맞힌 학생」을 주고 둘 다 틀린 학생을 역산(★3 · I-BW d1) (3) 과목을 셋으로 늘리기(★4 · 163-401 골조)."
```

```yaml
- id: GN-CM2-159-383
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    80명이 중국어·일본어 중 적어도 한 과목을 신청했고 중국어 52명, 일본어 45명일 때 한 과목만 신청한 학생 수 구하기.
  category: "적어도 한 과목=합집합 → 한 과목만=합집합-교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「한 과목만」을 n(A∪B)-n(A∩B) 또는 n(A-B)+n(B-A) 라는 개수식으로 바꿔야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 활용(한 과목만 신청한 학생 수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「적어도 한 과목」이 n(A∪B)=80 임을 읽어 n(A∩B)=52+45-80=17 을 얻는 것까지는 표준 절차.
    마지막에 「한 과목만」을 교집합을 두 번 빼는 식으로 옮기는 단계 하나만 통찰(EQV d1). 확인체크 ★2 유지.
  mechanism_primary: "n(A∪B)=80 → n(A∩B)=n(A)+n(B)-n(A∪B) → 한 과목만=n(A∪B)-n(A∩B)"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$63$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/159-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 80 · 중국어 52 · 일본어 45 를 바꿀 수 있음. 제약: 두 과목 수의 합이 전체 이상이어야 교집합이 0 이상이고, 각 과목 수는 전체 이하여야 한다."
    creative: "(1) 「두 과목 모두 신청」을 묻기(★2 · 통찰 사라져 절차형) (2) 「적어도 한 과목」 대신 아무도 신청하지 않은 학생 수를 주기(★2 · 159-384 골조) (3) 한 과목만 신청한 학생 수를 주고 일본어 신청자 수를 역산(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-159-384
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    40명 중 A 이메일 25명, B 이메일 20명, 어느 쪽도 이용하지 않는 학생 5명일 때 둘 다 이용하는 학생 수 구하기.
  category: "어느 쪽도 아님=여집합 → 합집합 → 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 활용(둘 다 이용하는 학생 수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「어느 한 곳도 이용하지 않는다」를 (A∪B)^c 로 옮겨 n(A∪B)=35, 합집합 공식으로 25+20-35=10.
    e12 의 ⑴⑵ 를 소문항 없이 붙인 형태이고 분기가 없다. 확인체크 ★2, 통찰 없음.
  tier: star_2
  mechanism_primary: "n(A∪B)=n(U)-n((A∪B)^c) → n(A∩B)=n(A)+n(B)-n(A∪B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/159-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 40 · A 25 · B 20 · 어느 쪽도 아님 5 를 바꿀 수 있음. 제약: n(A)+n(B) ≥ n(U)-(어느 쪽도 아님) 이어야 교집합이 0 이상이고, 교집합이 min(n(A),n(B)) 를 넘지 않아야 한다."
    creative: "(1) 「A 만 이용하는 학생」을 묻기(★2 · EQV d1 추가) (2) 교집합을 주고 어느 쪽도 이용하지 않는 학생 수를 역산(★2 · 162-397 골조) (3) 이용자 수 대신 비율을 주기(★3 · Mₖ 상승)."
```

```yaml
- id: GN-CM2-160-e13
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    n(U)=30, n(A)=22, n(B)=17 일 때 n(A∩B) 의 최댓값 M, 최솟값 m 에 대하여 M+m 구하기.
  category: "포함관계 극단으로 교집합 개수의 범위 잡기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최댓값 조건을 B⊂A 라는 포함관계로 바꿔 n(A∩B)=n(B) 로 읽는다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최솟값이 되려면 A∪B 가 U 를 꽉 채워야 함을 역추적해 n(A∩B) ≥ n(A)+n(B)-n(U) 를 세운다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 최댓값과 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 극단(B⊂A 일 때 17 · A∪B=U 일 때 22+17-30=9)을 각각 따로 세워야 하고, 경계에서
    부등호를 놓치기 쉽다(T-범위·T-경계). 발전 예제 ★3 출발에 통찰 2개(EQV d2 · BW d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "M=min(n(A),n(B)) (B⊂A) · m=n(A)+n(B)-n(U) (A∪B=U) → M+m"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$26$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/160-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U) · n(A) · n(B) 를 바꿀 수 있음. 제약: n(A)+n(B) > n(U) 여야 최솟값이 0 보다 커서 두 극단이 갈라지고, 그렇지 않으면 m=0 이 되어 문항이 싱거워진다."
    creative: "(1) n(A∪B) 의 최댓값·최솟값으로 바꾸기(★3 유지 · 160-385 골조) (2) 세 집합으로 늘려 n(A∩B∩C) 의 최솟값(★4 · Mₛ +1) (3) 실생활 문장으로 옮기기(★3 · I-RT d1 추가 · 160-386 골조)."
```

```yaml
- id: GN-CM2-160-385
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    n(A)=15, n(B)=26, n(A∩B) ≥ 7 일 때 n(A∪B) 의 최댓값과 최솟값의 합 구하기.
  category: "합집합 개수를 교집합 개수의 일차식으로 보고 범위 적용"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n(A∪B)=41-n(A∩B) 로 바꿔 교집합이 작을수록 합집합이 커진다는 반대 방향 관계를 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 최댓값과 최솟값(교집합에 하한이 있는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 하한 7 에서 최댓값 41-7=34, A⊂B 일 때 n(A∩B)=15 가 상한이라 최솟값 41-15=26.
    부등호 방향이 뒤집히는 지점과 숨은 상한 min(n(A),n(B)) 을 둘 다 잡아야 한다(T-범위·T-경계).
    발전 예제 아래 확인체크 ★3 출발, 통찰 1개(EQV d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "n(A∪B)=n(A)+n(B)-n(A∩B) → 7 ≤ n(A∩B) ≤ min(n(A),n(B)) → 양 끝 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/160-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(A) · n(B) · 하한 7 을 바꿀 수 있음. 제약: 하한이 min(n(A),n(B)) 이하여야 범위가 비지 않고, 전체집합이 없으므로 상한은 min(n(A),n(B)) 하나뿐이다."
    creative: "(1) 전체집합 n(U) 를 추가해 하한을 n(A)+n(B)-n(U) 로 만들기(★3 · e13 골조와 합침) (2) 조건을 n(A∩B) ≤ 7 로 뒤집기(★3 · 부등호 방향 재판단) (3) n(A-B) 의 최댓값·최솟값을 묻기(★3 · EQV 한 겹 추가)."
```

```yaml
- id: GN-CM2-160-386
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    학생 40명 중 설악산 25명, 지리산 18명일 때 둘 다 가 본 학생 수의 최댓값 M, 최솟값 m 에 대하여 M+m 구하기.
  category: "문장을 집합으로 옮긴 뒤 교집합 개수의 극단 두 개"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "학급 40명을 전체집합으로, 두 산을 가 본 학생을 부분집합으로 옮겨 개수 문제로 바꾼다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최댓값은 지리산 집합이 설악산 집합에 포함될 때, 최솟값은 두 집합이 학급 전체를 덮을 때로 바꾼다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "유한집합의 원소의 개수의 최댓값과 최솟값(활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e13 과 같은 골조를 문장으로 입힌 문항. M=18, m=25+18-40=3 이고 합 21.
    문장에서 전체집합이 40명임을 잡아내는 번역 단계(RT d1)가 하나 더 붙는다. 발전 아래 확인체크 ★3 유지.
  tier: star_3
  mechanism_primary: "M=min(25,18) · m=25+18-40 (두 집합이 40명을 덮을 때) → M+m"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/160-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 40 · 설악산 25 · 지리산 18 을 바꿀 수 있음. 제약: 두 수의 합이 전체를 넘어야 최솟값이 양수가 되고, 각 수는 전체 이하여야 한다."
    creative: "(1) 「둘 다 가 보지 않은 학생 수」의 최댓값·최솟값으로 바꾸기(★4 · 163-402 골조) (2) 한쪽에 하한 조건을 덧붙이기(★3 · 160-385 골조) (3) 산을 셋으로 늘려 세 곳 모두 가 본 학생의 최솟값(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-161-387
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    전체집합의 세 부분집합에 대한 집합 연산 등식 ㄱ~ㄹ 중 항상 성립하는 것을 모두 고르기.
  category: "분배법칙·드모르간으로 각 보기를 정리하고 반례로 기각"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 보기의 좌변을 분배법칙·드모르간·차집합 정의로 같은 꼴까지 끌고 가 우변과 비교한다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정리해도 결론이 안 나는 ㄹ 은 벤다이어그램 영역으로 옮겨 A∩B 로 줄어듦을 확인한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "집합의 연산 법칙이 항상 성립하는지 판정하기(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 분배법칙, ㄴ 은 드모르간, ㄷ 은 A∩(B∩C)^c 로 각각 정리되고 ㄹ 만 A∩B 로 줄어 거짓.
    네 보기를 독립으로 판정해야 해 Mₛ 가 크고, 일반 집합 표현이라 Mₐ=3.
    STEP 1 ★2 출발에 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "각 보기 좌변을 분배·드모르간으로 정리 → 우변과 같은지 비교 → ㄹ 은 A∩B 로 줄어 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 없는 항등식 판정 문항. 변형은 보기 문장을 교체하는 쪽으로만 가능하고, 참 보기와 거짓 보기의 개수 비율(3:1)을 유지하면 난이도가 보존된다."
    creative: "(1) 거짓 보기를 하나 더 넣어 반례 제시까지 요구(★4 · I-VF d2) (2) 세 집합 차집합 등식으로 보기를 모으기(★3 유지) (3) 각 보기를 벤다이어그램 색칠 그림으로 제시(★2 · I-RT 만 남고 EQV 사라짐)."
```

```yaml
- id: GN-CM2-161-388
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    {(A∩B)∪(A∩B^c)}∪{(A^c∪B)∩(A^c∪B^c)} 를 간단히 하기.
  category: "분배법칙 두 번으로 A 와 A^c 로 줄인 뒤 합집합"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "앞 덩어리는 A∩(B∪B^c)=A, 뒤 덩어리는 A^c∪(B∩B^c)=A^c 로 분배법칙을 양방향으로 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산 법칙을 이용한 식의 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교집합에 대한 분배와 합집합에 대한 분배를 각각 한 번씩 쓰면 A∪A^c=U 로 끝난다.
    식이 길어 보이지만 갈래가 없고 계산도 없다. STEP 1 ★2 출발, 통찰 1개(EQV d2) → ★2 유지.
  tier: star_2
  mechanism_primary: "(A∩B)∪(A∩B^c)=A · (A^c∪B)∩(A^c∪B^c)=A^c → A∪A^c=U"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$U$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 식 정리 문항. 변형은 두 덩어리의 연산 기호를 바꾸는 쪽이며, 앞뒤가 서로 여집합 관계로 떨어지도록 짝을 맞춰야 답이 U 나 ∅ 로 깔끔해진다."
    creative: "(1) 두 덩어리를 합집합이 아니라 교집합으로 묶어 답을 ∅ 로 만들기(★2 유지) (2) 세 집합으로 늘려 B 까지 남기기(★3 · Mₛ +1) (3) 결과가 U 임을 벤다이어그램으로 설명하게 하는 서술형(★3)."
```

```yaml
- id: GN-CM2-161-389
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    U={1,...,7}, A={1,2,3}, (A∪B)∩(A^c∪B^c)={2,4,6} 일 때 집합 B 의 모든 원소의 합 구하기.
  category: "주어진 식을 대칭차로 바꾼 뒤 원소별 귀속 역추적"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(A∪B)∩(A∩B)^c 는 A∪B 에서 A∩B 를 뺀 것, 곧 둘 중 정확히 하나에만 속하는 원소의 모임이다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 에 속하는지와 {2,4,6} 에 속하는지를 원소마다 대조해 B 의 원소를 거꾸로 결정한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "대칭차 조건에서 부분집합 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A^c∪B^c=(A∩B)^c 로 고치면 조건이 A 와 B 의 대칭차가 {2,4,6} 이라는 뜻이 된다.
    그다음은 원소 일곱 개를 A 소속 여부와 대칭차 소속 여부로 갈라 B={1,3,4,6} 을 역으로 채우는 일.
    STEP 1 ★2 출발에 통찰 2개(EQV d2 · BW d2) → ★3.
  tier: star_3
  mechanism_primary: "(A∪B)∩(A∩B)^c = 대칭차 → 원소마다 A 소속·대칭차 소속을 대조해 B 결정 → 원소 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 크기, A 의 원소, 대칭차로 주어지는 집합을 바꿀 수 있음. 제약: 대칭차로 주는 집합은 U 의 부분집합이어야 하고, A 안팎 원소가 섞여 있어야 B 가 유일하게 결정되면서 문항이 싱겁지 않다."
    creative: "(1) B 의 원소의 합 대신 n(B) 나 B 의 부분집합 개수를 묻기(★3 유지) (2) 대칭차 대신 A-B 와 B-A 를 따로 주기(★2 · BW 약화) (3) B 를 구하지 못하게 조건을 하나 빼고 가능한 B 의 개수를 묻기(★4 · I-MI d2)."
```

```yaml
- id: GN-CM2-161-390
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    공집합이 아닌 두 부분집합에서 (A-B)^c∩B^c=A^c 가 성립할 때 항상 옳은 포함관계 고르기. 5지선다.
  category: "좌변을 정리해 (A∪B)^c 로 만든 뒤 포함관계로 해석"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(A-B)^c=A^c∪B 를 거쳐 좌변을 (A^c∩B^c)=(A∪B)^c 한 덩어리로 정리한다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(A∪B)^c=A^c 라는 결과에서 A∪B=A, 곧 B⊂A 라는 원인 조건을 역추적한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "집합 등식이 성립할 조건을 포함관계로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차집합의 여집합을 A^c∪B 로 바꾸고 B^c 와 교집합하면 B 가 사라져 (A∪B)^c 만 남는다.
    여기서 여집합이 같으면 원래 집합도 같다는 성질로 A∪B=A → B⊂A. 선택지 다섯 개를 반례로
    걸러야 하는 부담도 있다. STEP 1 ★2 출발에 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "(A-B)^c∩B^c=(A^c∪B)∩B^c=A^c∩B^c=(A∪B)^c → (A∪B)^c=A^c → A∪B=A → B⊂A"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 조건 판정 문항. 변형은 좌변 식을 바꾸는 쪽이며, 정리한 결과가 A^c·B^c·U·∅ 중 하나로 떨어져야 포함관계 한 줄로 답이 나온다."
    creative: "(1) 답이 A⊂B 가 되도록 좌우를 바꾸기(★3 유지) (2) 결론을 고르는 대신 A∪B 를 간단히 하라고 묻기(★2) (3) 조건을 만족시키는 A, B 의 순서쌍 개수를 유한집합에서 세게 하기(★4 · Mₖ·I-MI 추가)."
```

```yaml
- id: GN-CM2-161-391
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    X⊙Y=(X-Y)∪(Y-X) 로 정의할 때 A={1,2,3,4}, B={1,2}, C={1,3,5} 에 대하여 (A⊙B)⊙C 의 모든 원소의 합 구하기.
  category: "새로 정의된 연산을 정의대로 두 번 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "새로 정의된 집합 연산의 계산(대칭차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의를 그대로 읽어 A⊙B={3,4} 를 구하고 다시 C 와 같은 계산을 한 번 더 하면 {1,4,5}.
    괄호 순서만 지키면 되고 성질을 발견할 필요가 없다. STEP 1 ★2, 통찰 없음.
  tier: star_2
  mechanism_primary: "A⊙B=(A-B)∪(B-A) 계산 → 그 결과와 C 로 한 번 더 → 원소 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 집합의 원소를 바꿀 수 있음. 제약: B⊂A 처럼 포함관계를 넣으면 첫 계산이 단순 차집합으로 줄고, 세 집합에 공통 원소가 하나쯤 있어야 두 번째 계산에서 원소가 사라지는 맛이 산다."
    creative: "(1) A⊙(B⊙C) 와 비교하게 해 결합법칙을 확인시키기(★4 · 162-394 골조) (2) (A⊙B)⊙C=∅ 이 되는 C 를 찾게 하기(★3 · I-BW d2) (3) 연산을 (X∪Y)-(X∩Y) 로 바꿔 같은 결과임을 보이게 하기(★3 · I-EQV d2)."
```

```yaml
- id: GN-CM2-161-392
  page: 161
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    U={1,...,200}, A_k 를 k 의 배수의 집합이라 할 때 A_5∩(A_3∪A_6) 의 원소의 최댓값과 최솟값의 합 구하기.
  category: "배수집합의 교집합을 최소공배수의 배수집합으로 바꾸기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A_6⊂A_3 이므로 A_3∪A_6=A_3 이고, A_5∩A_3 은 최소공배수를 써서 A_15 로 바뀐다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "배수의 집합의 교집합·합집합과 최소공배수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    포함관계로 합집합을 지우고 교집합을 A_15 로 바꾸면 남는 일은 200 이하 15의 배수의 양 끝 찾기뿐.
    최댓값 195 를 15×13 으로 잡는 데서 범위 실수가 나기 쉽다(T-범위·T-경계).
    STEP 1 ★2 출발, 통찰 1개(EQV d2) → ★2 유지.
  tier: star_2
  mechanism_primary: "A_3∪A_6=A_3 → A_5∩A_3=A_15 → 200 이하 15의 배수의 최대 195·최소 15 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$210$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/161-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한 200 과 세 지수 5, 3, 6 을 바꿀 수 있음. 제약: 두 지수 중 하나가 다른 하나의 배수여야 합집합이 한쪽으로 흡수되고, 최소공배수가 상한 이하여야 집합이 비지 않는다."
    creative: "(1) 원소의 개수를 묻기(★2 유지 · 나눗셈 한 번) (2) 포함관계가 없는 지수 조합(A_4∪A_6)으로 바꿔 포함배제를 쓰게 하기(★3) (3) 배수 대신 나머지가 2 인 수의 집합으로 바꾸기(★4 · 162-395 골조)."
```

```yaml
- id: GN-CM2-162-393
  page: 162
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    48명 중 A 문제를 맞힌 학생 23명, 두 문제를 모두 맞힌 학생 10명, 둘 다 틀린 학생 5명일 때 B 문제를 맞힌 학생 수 구하기.
  category: "둘 다 틀림=여집합 → 합집합 → 합집합 공식 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 활용(한쪽 집합의 개수 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n(A∪B)=48-5=43 을 얻고 합집합 공식을 n(B) 에 대해 풀면 43-23+10.
    159-e12 의 소문항을 합쳐 한 번에 묻는 형태이고 분기가 없다. STEP 1 ★2, 통찰 없음.
  tier: star_2
  mechanism_primary: "n(A∪B)=n(U)-n((A∪B)^c) → n(B)=n(A∪B)-n(A)+n(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/162-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 48 · A 23 · 교집합 10 · 둘 다 틀림 5 를 바꿀 수 있음. 제약: 교집합은 n(A) 이하여야 하고 n(A∪B)-n(A)+n(A∩B) 가 n(A∪B) 이하가 되도록 잡아야 개수가 모순되지 않는다."
    creative: "(1) 「B 만 맞힌 학생 수」를 묻기(★2 · EQV d1 추가) (2) 두 문제를 모두 맞힌 학생 수 대신 한 문제만 맞힌 학생 수를 주기(★3 · I-BW d2) (3) 문제를 셋으로 늘리기(★4 · 163-401 골조)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-162-394
  page: 162
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A*B=(A-B)∪(B-A) 로 정의할 때 보기 ㄱ(여집합 치환) · ㄴ(결합법칙) · ㄷ(A*(A*B)=B) 중 항상 옳은 것 모두 고르기.
  category: "대칭차를 원소 귀속으로 재해석해 연산 성질 세 개 판정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A*B 를 「두 집합 중 정확히 한 곳에만 속하는 원소의 모임」으로 바꿔 읽는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결합법칙 ㄴ 은 벤다이어그램 여덟 영역의 귀속(홀수 개 집합에 속하는지)으로 옮겨야 확인된다"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ 은 A^c-B^c=B-A 라는 맞바꿈 대칭을 쓰면 계산 없이 같은 집합임이 보인다"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "새로 정의된 집합 연산(대칭차)의 성질 판정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄱ 은 여집합을 씌우면 두 차집합이 자리만 바꾸므로 그대로, ㄴ 은 세 집합 중 홀수 개에 속하는 원소라는
    공통 표현으로 양변이 같아지고, ㄷ 은 ㄴ 과 A*A=∅ 을 이어 붙이면 나온다.
    세 보기가 각각 다른 도구를 요구하고 일반 집합 추상(Mₐ=3)이라 STEP 2 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "A*B = 정확히 한 집합에만 속하는 원소 → ㄱ 은 차집합 맞바꿈, ㄴ 은 홀수 귀속, ㄷ 은 ㄴ+A*A=∅"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: 'ㄱ, ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/162-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 성질 판정 문항. 변형은 보기 문장 교체뿐이며, 거짓 보기를 넣으려면 A*B⊂A 처럼 특정 포함관계에서만 성립하는 식을 써야 한다."
    creative: "(1) 거짓 보기를 하나 섞어 반례까지 요구(★4 유지 · I-VF d2 추가) (2) 구체적 세 집합으로 계산만 시키기(★2 · 161-391 골조) (3) A*X=B 를 만족시키는 X 를 구하게 하기(★4 · I-BW d2)."
```

```yaml
- id: GN-CM2-162-395
  page: 162
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    U 를 50 이하의 자연수, A_n={x | x=kn+2, k 는 정수} 라 할 때 A_3∩(A_4∪A_6) 의 원소의 개수 구하기.
  category: "나머지가 2 인 수의 집합으로 옮겨 포함배제로 세기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=kn+2 를 「n 으로 나눈 나머지가 2 인 수」로 옮겨야 교집합을 다룰 수 있다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A_3∩A_4 는 12 로 나눈 나머지가 2 인 수, A_6⊂A_3 이므로 A_3∩A_6=A_6 으로 바뀐다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "나머지가 같은 수의 집합의 교집합·합집합의 원소의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분배해서 (A_3∩A_4)∪(A_3∩A_6) 으로 놓고 앞은 12로 나눈 나머지 2, 뒤는 A_6 자체임을 알아낸 뒤
    포함배제로 센다. 앞 집합이 뒤 집합에 대해 부분·전체 어느 쪽인지 판단하는 데서 중복 처리가 갈린다.
    나머지 표현으로의 전환과 두 번의 집합 동일시가 겹쳐 STEP 2 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "A_3∩(A_4∪A_6)=(A_3∩A_4)∪(A_3∩A_6) → 나머지 2 (mod 12) 와 A_6 → 포함배제로 개수"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/162-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한 50, 세 법 3·4·6, 나머지 2 를 바꿀 수 있음. 제약: 나머지는 세 법보다 작아야 하고, 두 법 중 하나가 다른 하나의 배수여야 A_6⊂A_3 같은 흡수가 생겨 골조가 유지된다."
    creative: "(1) 원소의 최댓값·최솟값을 묻기(★3 · 161-392 골조) (2) 나머지를 법마다 다르게 주어 중국인의 나머지 상황으로 만들기(★5 후보 · I-XU) (3) A_3-(A_4∪A_6) 으로 바꿔 여사건 세기를 유도(★4 유지 · I-SC d2)."
```

```yaml
- id: GN-CM2-162-396
  page: 162
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    U 를 50 이하의 자연수, A 를 30 의 약수의 집합, B 를 3 의 배수의 집합이라 할 때 n(A^c∪B) 의 값. 5지선다.
  category: "드모르간으로 여집합 세기를 작은 차집합 세기로 바꾸기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A^c∪B=(A∩B^c)^c 로 바꿔 50개짜리 합집합 대신 원소 몇 개짜리 A-B 만 세게 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "약수·배수 집합의 여집합·합집합의 원소의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A={1,2,3,5,6,10,15,30}, B 는 3의 배수 16개인데 합집합을 직접 세면 겹침 처리가 번거롭다.
    드모르간으로 n(U)-n(A-B) 로 바꾸면 3의 배수가 아닌 30의 약수 네 개만 세면 끝.
    전환 한 번이 계산량을 크게 줄이는 통찰 1개(EQV d2). STEP 2 ★3 유지, 기출 태그 보정 0.
  tier: star_3
  mechanism_primary: "n(A^c∪B)=n(U)-n(A∩B^c) → 30의 약수 중 3의 배수가 아닌 것 4개 → 50-4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/162-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한 50, 약수의 기준 수 30, 배수의 기준 수 3 을 바꿀 수 있음. 제약: 기준 수의 약수가 상한 이하에 대부분 들어와야 하고, 배수 기준이 그 수의 소인수여야 A-B 가 작게 남아 전환의 이득이 생긴다."
    creative: "(1) n(A∪B^c) 로 뒤집기(★3 유지 · 반대쪽 차집합) (2) 약수 집합을 60 의 약수로 키우기(★3 · Mₖ 상승) (3) 선택지를 없애고 A^c∪B 의 원소의 합을 묻기(★4 · Mₖ +1)."
```

```yaml
- id: GN-CM2-162-397
  page: 162
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    학생 50명 중 역사 체험 신청 33명, 역사만 신청(과학 미신청) 15명, 둘 다 미신청 8명일 때 과학 체험 신청자 수 구하기.
  category: "차집합 조건으로 교집합 → 합집합 → 나머지 한 집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 활용(조건 ㈎㈏㈐ 제시형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈏ 가 n(A-B)=15 이므로 n(A∩B)=33-15=18, ㈐ 에서 n(A∪B)=42, 마지막에 42-33+18.
    조건이 상자로 나뉘어 있을 뿐 번역이 일대일이고 분기가 없다. 절차형·M_total 5 라
    STEP 2 ★3 출발에서 -1 → ★2(벤더와 1단 차이라 이슈로 올리지 않음).
  tier: star_2
  mechanism_primary: "n(A∩B)=n(A)-n(A-B) → n(A∪B)=n(U)-8 → n(B)=n(A∪B)-n(A)+n(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/162-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 50 · 역사 33 · 역사만 15 · 둘 다 미신청 8 을 바꿀 수 있음. 제약: 역사만 ≤ 역사 이고 역사+둘다미신청 ≤ 전체 여야 하며, 최종 과학 신청자 수가 전체 이하로 떨어져야 한다."
    creative: "(1) 과학만 신청한 학생 수를 묻기(★2 유지) (2) 조건 ㈏ 를 「둘 다 신청한 학생」으로 바꾸면 더 짧아짐(★1~2) (3) 체험을 셋으로 늘려 조건 상자를 다섯 줄로 만들기(★4 · 163-401 골조)."
```

```yaml
- id: GN-CM2-163-398
  page: 163
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    n(U)=36, n(X)=23, n(Y)=19 일 때 n(X∩Y) 의 최댓값 M, 최솟값 m 에 대하여 M-m 구하기.
  category: "포함관계 극단으로 교집합 개수의 범위 잡기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최댓값은 Y⊂X, 최솟값은 X∪Y=U 라는 두 극단 배치로 조건을 바꿔 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유한집합의 원소의 개수의 최댓값과 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    M=min(23,19)=19, m=23+19-36=6 이므로 차는 13. 160-e13 과 같은 골조이고 묻는 것만 합에서 차로 바뀌었다.
    n(X∪Y) ≤ n(U) 라는 숨은 상한을 세우는 데서 범위·경계 실수가 난다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "M=min(n(X),n(Y)) · m=n(X)+n(Y)-n(U) → M-m"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/163-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(U) · n(X) · n(Y) 를 바꿀 수 있음. 제약: n(X)+n(Y) > n(U) 여야 최솟값이 0 보다 커서 두 극단이 의미를 갖는다."
    creative: "(1) n(X∪Y) 의 최댓값·최솟값으로 바꾸기(★3 유지) (2) n(X-Y) 의 최댓값·최솟값을 묻기(★3 · EQV 한 겹 추가) (3) 조건에 n(X∩Y) ≥ k 를 덧붙이기(★3 · 160-385 골조)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-163-399
  page: 163
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    U={1,...,10}, A={1,2,3,4,5}, B={3,4,5,6,7} 이고 n(X)=6, A-X=B-X, (X-A)∩(X-B)≠∅ 을 만족시키는 X 의 모든 원소의 합의 최솟값. 5지선다.
  category: "두 조건을 X 의 포함 조건으로 바꾼 뒤 남은 자리를 작은 수로 채우기"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "A-X=B-X 는 A 와 B 의 대칭차 {1,2,6,7} 이 통째로 X 에 들어간다는 뜻으로 바뀐다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(X-A)∩(X-B)=X-(A∪B) 이므로 X 가 8,9,10 중 적어도 하나를 포함해야 한다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합을 최소로 하려면 남은 두 자리를 8 과 가장 작은 3 으로 채워야 함을 거꾸로 결정한다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "조건을 만족시키는 부분집합의 원소의 합의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈏ 를 대칭차 포함으로 바꾸는 단계가 이 문항의 벽이고(1 이나 6 이 X 밖이면 좌우가 달라진다),
    ㈐ 는 A∪B 바깥 원소를 강제한다. n(X)=6 에서 네 자리가 이미 차 있으므로 남은 두 자리를
    8 과 3 으로 채워 1+2+6+7+3+8. 통찰 3개·depth 3 이지만 SC/VF/SYM/XU 가 없어 ★5 는 아니고
    실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "A-X=B-X → (A△B)={1,2,6,7}⊂X · X-(A∪B)≠∅ → 8 포함 · 남은 한 자리는 최소 3 → 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/163-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 크기, A·B 의 원소, n(X)=6 을 바꿀 수 있음. 제약: n(X) 가 대칭차 크기보다 2 이상 커야 ㈐ 를 만족시킬 자리와 자유 자리가 함께 남고, A∪B 바깥에 원소가 있어야 ㈐ 가 공허하지 않다."
    creative: "(1) 합의 최댓값을 묻기(★4 유지 · 채우는 방향만 반대) (2) 조건을 만족시키는 X 의 개수를 묻기(★4 · I-MI d2) (3) ㈐ 를 (X-A)∪(X-B)≠∅ 로 약화하면 조건이 거의 사라짐(★3 하락)."
```

```yaml
- id: GN-CM2-163-400
  page: 163
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    X△Y=(X-Y)∪(Y-X) 일 때 n(A∪B∪C)=75, n(A△B)=45, n(B△C)=47, n(C△A)=42 이면 n(A∩B∩C) 구하기.
  category: "대칭차 개수식 세 개를 더해 단일합-쌍합 덩어리를 만들고 합집합 공식과 결합"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n(X△Y)=n(X)+n(Y)-2n(X∩Y) 로 집합 연산을 개수식으로 옮긴다"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "세 대칭차를 모두 더하면 대칭성 덕분에 2(단일합)-2(쌍교집합합) 한 덩어리로 묶여 개별값이 필요 없어진다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 덩어리를 세 집합 합집합 공식에 통째로 넣어 남는 항이 n(A∩B∩C) 하나가 되게 한다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "대칭차의 원소의 개수 조건에서 세 집합의 교집합 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 대칭차의 합 134 를 반으로 나누면 (단일합)-(쌍교집합합)=67 이 나오고, 합집합 공식
    75=67+n(A∩B∩C) 로 답이 떨어진다. 개별 n(A) 를 하나도 모른 채 덩어리로만 푸는 것이 핵심.
    [분류 이슈] 통찰 3개 + I-SYM 이라 ★5 자격은 되지만 대칭차 개수 공식 자체가 정형이고
    novelty_score 0 이라 ★4 로 두고 기록만 한다.
  tier: star_4
  mechanism_primary: "Σn(대칭차)=2(Σ단일)-2(Σ쌍교집합) → Σ단일-Σ쌍=67 → n(A∪B∪C)=67+n(A∩B∩C)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/163-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 대칭차 값과 n(A∪B∪C) 를 바꿀 수 있음. 제약: 세 대칭차의 합이 짝수여야 반으로 나누어떨어지고, 그 절반이 n(A∪B∪C) 이하여야 n(A∩B∩C) 가 0 이상이 된다."
    creative: "(1) n(A∩B∩C) 를 주고 n(A∪B∪C) 를 묻기(★4 유지 · 방향만 반대) (2) 대칭차 대신 n(A-B) 류를 주면 덩어리 묶기가 사라져 ★3 (3) 네 집합으로 늘리면 대칭 묶음이 더 깊어져 ★5 후보(I-SYM d3 + I-XU)."
```

```yaml
- id: GN-CM2-163-401
  page: 163
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    50명 중 세 동아리 가입자가 각각 23·28·21명, 세 곳 모두 가입 7명, 어느 곳도 가입하지 않음 4명일 때 두 동아리에만 가입한 학생 수 구하기.
  category: "세 집합 공식으로 쌍교집합의 합을 구한 뒤 삼중 겹침을 세 번 빼기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "개별 쌍교집합을 알 수 없으므로 세 집합 공식을 Σn(쌍교집합) 하나에 대해 푼다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 동아리에만」은 Σn(쌍교집합) 에서 삼중 교집합이 세 번 세어졌으므로 3n(A∩B∩C) 를 뺀 값이다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "세 집합의 원소의 개수의 활용(두 집합에만 속하는 원소)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    n(A∪B∪C)=46 에서 Σ쌍교집합=72-46+7=33 을 통째로 얻고, 두 곳에만 가입한 학생은 33-3×7=12.
    개별 쌍교집합이 결정되지 않는다는 점과 삼중 겹침이 쌍합에 세 번 들어 있다는 점을 둘 다
    잡아야 한다(T-범위·T-경계). 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "n(A∪B∪C)=n(U)-4 → Σ쌍교집합=Σ단일-n(A∪B∪C)+n(A∩B∩C) → 두 곳에만=Σ쌍-3n(A∩B∩C)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/163-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 50 · 세 가입자 수 · 세 곳 모두 7 · 아무 곳도 아님 4 를 바꿀 수 있음. 제약: Σ단일-n(A∪B∪C)+n(A∩B∩C) 가 3n(A∩B∩C) 이상이어야 답이 0 이상이고, 각 쌍교집합이 두 집합 크기 이하가 되도록 잡아야 한다."
    creative: "(1) 「한 동아리에만 가입한 학생 수」로 바꾸기(★4 유지 · 다른 조합식) (2) 세 곳 모두 가입한 학생 수를 묻고 두 곳에만 가입한 수를 주기(★4 · I-BW d2) (3) 동아리를 넷으로 늘리기(★5 후보 · I-XU)."
```

```yaml
- id: GN-CM2-163-402
  page: 163
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    36명 중 버스 22명, 지하철 9명이고 둘 다 이용하는 학생이 5명 이상일 때 둘 다 이용하지 않는 학생 수의 최댓값 a, 최솟값 b 에 대하여 a+b 구하기.
  category: "여집합 개수를 교집합 개수의 일차식으로 바꾸고 범위 양 끝 대입"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘 다 이용하지 않는 학생 수를 36-n(A∪B)=5+n(A∩B) 라는 교집합의 일차식으로 바꾼다"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최댓값·최솟값이 되려면 n(A∩B) 가 숨은 상한 9 와 주어진 하한 5 에 있어야 함을 역추적한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "유한집합의 원소의 개수의 최댓값과 최솟값(여집합 활용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    여집합 개수가 교집합과 같은 방향으로 움직인다는 것을 식으로 확인해야 하고, 상한은 문제에
    적혀 있지 않은 min(22,9)=9 다. a=14, b=10 으로 합 24.
    두 단계 통찰(EQV d2 · BW d1)에 범위·경계 함정이 겹쳐 실력 UP ★4 유지(160-386 보다 한 겹 깊다).
  tier: star_4
  mechanism_primary: "n((A∪B)^c)=n(U)-n(A)-n(B)+n(A∩B)=5+n(A∩B) → 5 ≤ n(A∩B) ≤ 9 → 양 끝 대입"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/163-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 36 · 버스 22 · 지하철 9 · 하한 5 를 바꿀 수 있음. 제약: 하한이 min(버스,지하철) 이하여야 범위가 비지 않고, n(A)+n(B)-n(A∩B) 가 전체 이하가 되도록 잡아야 여집합 개수가 0 이상이다."
    creative: "(1) 「버스만 이용하는 학생 수」의 최댓값·최솟값으로 바꾸기(★4 유지) (2) 하한 조건을 빼면 상한이 전체집합에서 나와 골조가 160-e13 으로 돌아감(★3) (3) 교통수단을 셋으로 늘리기(★5 후보 · Mₛ +1 · I-CON)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 4 · ★2 12 · ★3 8 · ★4 6 · ★5 0
- 통찰형 19 · 절차형 11 · premium 0
- 통찰 유형 분포(연 33개): I-EQV 19 · I-RT 6 · I-BW 5 · I-SYM 2 · I-CON 1 (I-SC · I-VF · I-MI · I-PD · I-XU 0)
- type_hint 상위: 「기본 공식·차집합·여집합 대입·역산」 6 · 「유한집합의 원소의 개수의 활용」 5 · 「최댓값과 최솟값」 5 · 「집합 연산 법칙 판정·간단히 하기」 3 · 「새로 정의된 연산(대칭차)」 2
- 구역별 평균 ★: 개념원리 익히기 1.0 · 필수·발전 예제 2.3 · STEP 1 2.4 · STEP 2 3.2 · 실력 UP 4.0 (벤더 층과 같은 방향으로 단조 증가)
- 그림: 1문(`crop:fig-158-381.png`) · 선택지 문항 3문(161-390 · 162-396 · 163-399) · 소문항 묶음 4문(157-376 · 157-378 · 157-379 · 159-e12)
- 이 단원의 변형 급소: ⑴ 개수 조건들이 서로 모순되지 않게 하는 부등식(n(A∩B) ≤ min ≤ max ≤ n(A∪B) ≤ n(U))과 ⑵ 최댓값·최솟값 문항에서 문제에 적혀 있지 않은 숨은 상한 min(n(A),n(B)), 둘이 숫자 변형의 제약 전부다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-163-400 | 통찰 3개 + I-SYM d3 으로 ★5 자격 요건은 충족하나 대칭차 개수 공식이 정형이고 novelty_score 0 이라 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「유한집합의 원소의 개수의 최댓값과 최솟값」(160-e13 · 160-385 · 160-386 · 163-398 · 163-402 — 다섯 문항이 같은 극단 논리를 쓰고 base ★3~4 로 명확히 갈린다) ⑵ 「새로 정의된 집합 연산(대칭차)」(161-391 계산형 ★2 와 162-394 성질 판정형 ★4 는 base ★ 가 2단 벌어지므로 한 유형으로 묶지 말 것) ⑶ 「배수·나머지 집합의 개수」(161-392 · 162-395 — 정수 성질과 결합해 다른 단원 도구가 들어온다).
- **통합해도 될 유형**: 기본 공식 대입군(157-376 · 157-377 · 157-378 · 157-379 · 158-e11 · 158-380)은 묻는 항만 다르고 골조가 같아 「원소 개수 공식 대입·역산」 한 유형이면 충분하다. 두 집합 활용 문장제(159-e12 · 159-383 · 159-384 · 162-393 · 162-397)도 「두 집합 조사 활용」 하나로 묶고 「~만」 표현이 있는지로 base ★ 를 2 와 3 으로 나누면 된다.
- **비어 있는 칸**: 이 단원에는 I-SC · I-VF · I-MI 를 쓰는 문항이 없다. 카탈로그에 ★5 슬롯을 두려면 「조건을 만족시키는 집합의 개수 세기(후보 일부 기각)」 같은 유형을 새로 만들어야 한다.
