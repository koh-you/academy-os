---
name: mechanism-데이터-RPM-ALG-03-p3
description: RPM 대수 03 지수함수(3/3 · 유형 17~19 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 03 지수함수
  unit_code: ALG-03
  part: "3/3"
  extract_range: "39~44쪽 · 0297~0336"
  total_problems: 40
  unit_total: 115
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 03 지수함수 (3/3) 정독 데이터 (v1.0)

이 파일은 03 지수함수 단원의 마지막 범위(39~44쪽 · 0297~0336 · 40문항)를 다룬다. 앞쪽은 유형 구역의 꼬리(유형 17 밑에 미지수가 포함된 지수부등식 · 유형 18 지수부등식이 항상 성립할 조건 · 유형 19 실생활 활용)이고, 뒤쪽은 중단원 종합인 「시험에 꼭 나오는 문제」 23문 · 「서술형 주관식」 4문 · 「실력 Up」 3문(평가원 기출 1문 포함)이다. 벤더 난이도 신호는 유형 구역에서만 하~상 표시가 있고(대표문제 태그는 level 없음), 종합 구역은 구역 자체가 층(시험 ★2~3 · 서술형 ★3 · 실력 Up ★4 출발)이며 「중요」·「평가원 기출」 태그가 보조 신호다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]`), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 통찰 골조를 유지한 변형과 ★ 변동 지점(`variation_notes.creative`)을 채웠다. 그림이 있는 5문(0310 · 0312 · 0313 · 0330 · 0334)은 크롭 이미지를 보고 판정했다.

## 문항 데이터

### 유형 17 밑에 미지수가 포함된 지수부등식

```yaml
- id: RPM-ALG-0297
  page: 39
  vendor_label: "유형 17 밑에 미지수가 포함된 지수부등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x>0 일 때 부등식 x^{x-1} ≥ x^{-x+5} 의 해. 주관식.
  category: "밑의 범위 3분기(0<x<1 · x=1 · x>1) → 지수 비교 → 합집합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수부등식(밑의 범위 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 x 가 미지수이므로 0<x<1 · x=1 · x>1 로 나눠 지수 부등호 방향을 정한다. 0<x<1 에서 x-1 ≤ -x+5 는 구간 전체에서 성립, x=1 은 1 ≥ 1 로 포함, x>1 에서 x ≥ 3. 유형 대표문제이자 표준 3분기 절차라 통찰 없음. 함정은 T-범위(밑 분기)·T-경계(x=1 포함) 둘. 유형 구역·level 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "밑 x 범위 3분기 → 각 구간에서 지수 부등식 → x=1 포함 여부 확인 → 합집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<x\le 1$ 또는 $x\ge 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 x-1, -x+5 의 계수·상수(예: 2x-1 과 x+3)를 바꿀 수 있음. 제약: 두 지수가 같아지는 x 가 1 보다 큰 양수여야 x>1 구간의 경계가 생기고, 0<x<1 구간에서는 부등식이 구간 전체에서 성립하거나 불성립하도록 설계. 등호 유무가 x=1 포함 여부를 바꾸므로 답에 반영."
    creative: "(1) 부등호를 > 로 바꿔 x=1 을 배제(★2 유지 · T-경계 강화) (2) 지수를 이차식으로 바꾸면 0300 형(★3) (3) 밑을 x-1 처럼 옮기고 정의역 조건을 문제에서 빼서 학생이 스스로 세우게 하면 T-범위 추가 ★3."
```

```yaml
- id: RPM-ALG-0298
  page: 39
  vendor_label: "유형 17 밑에 미지수가 포함된 지수부등식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>-1 일 때 부등식 (x+2)^{x^2+3} < (x+2)^{4x} 의 해. 5지선다.
  category: "조건으로 밑 x+2>1 확인 → 지수 비교 → 이차부등식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수부등식(밑의 범위 분기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건 x>-1 이 밑 x+2>1 을 보장하므로 분기 없이 x²+3<4x → x²-4x+3<0 → 1<x<3 한 줄. 밑이 1 보다 큼을 조건에서 읽는 것이 유일한 확인 지점(T-범위). 중하 → ★1~2 출발, 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x>-1 → 밑 x+2>1 → 지수 비교 x^2+3<4x → 1<x<3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 상수(x+2)와 조건(x>-1)은 함께 옮김(밑>1 유지). 지수 이차식은 근이 정수가 되는 계수로. 제약: 해 구간이 조건 x>-1 안에 들어와야 함."
    creative: "(1) 조건을 x>-2 로 넓히면 -2<x<-1 구간(밑<1) 분기가 생겨 ★2 (2) 조건을 빼고 밑의 양수 조건을 학생이 세우게 하면 T-범위 추가 ★2 (3) 부등호를 ≤ 로 바꾸고 x+2=1 인 x=-1 포함 여부를 묻는 변형은 조건 x ≥ -1 로 바꿔야 함(★2)."
```

```yaml
- id: RPM-ALG-0299
  page: 39
  vendor_label: "유형 17 밑에 미지수가 포함된 지수부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 일 때 부등식 x^{3x+1} > x^{x+5} 의 해가 아닌 것을 보기에서 고르기. 5지선다.
  category: "밑 3분기 → 각 구간 일차부등식 → 해 0<x<1 또는 x>2 → 보기 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수부등식(밑의 범위 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0<x<1 이면 3x+1<x+5 → x<2 라 구간 전체가 해, x=1 은 1>1 거짓, x>1 이면 x>2. 해는 0<x<1 또는 x>2 이고 보기 중 3/2 만 빠진다. 「해가 아닌 것」 부정 발문(T-표기)과 x=1 배제(T-경계)가 함정. 표준 분기 절차·통찰 없음, 유형 구역 중 → ★2.
  tier: star_2
  mechanism_primary: "밑 3분기 → 0<x<1 전체 · x=1 거짓 · x>2 → 해 밖의 보기 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3x+1, x+5 의 계수·상수와 보기의 분수값을 바꿀 수 있음. 제약: 지수 교점이 1 보다 큰 값(여기 2)이 되도록 하고, 보기에는 (1, 교점) 구간의 값이 정확히 하나만 들어가게 함."
    creative: "(1) 「해인 것」으로 바꾸면 T-표기 함정이 사라져 ★1~2 (2) 보기에 x=1 을 넣어 등호 판단을 묻기(★2) (3) 해에 속하는 자연수의 개수처럼 카운트형으로 바꾸면 무한 해 구간 처리 필요 → 발문을 유한 구간으로 재설계 필요."
```

```yaml
- id: RPM-ALG-0300
  page: 39
  vendor_label: "유형 17 밑에 미지수가 포함된 지수부등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 일 때 부등식 x^{2x^2-5x} > 1/x^2 의 해가 α<x<β 또는 x>γ 일 때 αβγ 의 값.
  category: "1/x^2 = x^{-2} 로 밑 통일 → 밑 3분기 → 이차부등식 인수분해 → 해 구조 대조"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수부등식(밑의 범위 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변을 x^{-2} 로 써서 밑을 맞춘 뒤 0<x<1 에서 2x²-5x+2<0 → 1/2<x<1, x>1 에서 2x²-5x+2>0 → x>2, x=1 은 1>1 거짓. α=1/2, β=1, γ=2 로 곱 1. 분기마다 (2x-1)(x-2) 부등식을 풀어야 해 Mₖ 2, 함정은 T-범위·T-경계. 통찰 없는 절차형이나 상중·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "1/x^2 → x^{-2} → 밑 3분기 → (2x-1)(x-2) 부호 → 1/2<x<1 또는 x>2 → αβγ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 이차식과 우변 x^{-2} 의 차수를 바꿀 수 있음. 제약: 이차식이 유리수 근 두 개를 갖고, 한 근은 (0,1) 안·다른 근은 1 보다 크게 배치해야 「α<x<β 또는 x>γ」 구조가 유지됨. β=1 은 밑 분기 경계에서 오는 값이므로 부등호에 등호를 넣으면 답 구조가 깨짐."
    creative: "(1) 등호를 넣어 x=1 포함 시 해가 α<x≤1 로 바뀌는 점을 묻기(★3) (2) 우변을 x^{-2} 대신 상수 1 로 두면 x^0 비교가 되어 ★2 (3) 해의 정수 개수를 묻는 카운트형은 x>γ 가 무한이라 유한 구간 설계 필요."
```

### 유형 18 지수부등식이 항상 성립할 조건

```yaml
- id: RPM-ALG-0301
  page: 40
  vendor_label: "유형 18 지수부등식이 항상 성립할 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 2^{2x}-2^{x+1}+k>0 이 성립하도록 하는 정수 k 의 최솟값. 5지선다.
  category: "t=2^x>0 치환 → 완전제곱 (t-1)^2+k-1 → 꼭짓점 t=1 이 범위 안 → 최솟값 k-1>0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 실수 x」를 「모든 t>0」로 옮기고 꼭짓점 t=1 이 그 범위 안임을 확인해 최솟값 조건으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건(치환 이차식의 최솟값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^x 로 두면 t²-2t+k=(t-1)²+k-1 이고 t>0 범위에 꼭짓점이 있어 최솟값 k-1>0 → k>1 → 정수 최소 2. 조건 해석(x 전체 ↔ t>0 범위·꼭짓점 위치 확인) EQV d1 한 개, M_total 6. 유형 대표문제·level 없음 → ★2.
  tier: star_2
  mechanism_primary: "t=2^x>0 → (t-1)^2+k-1>0 (t>0) → k-1>0 → 정수 k 최소 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(2^{x+1} → 2^{x+2} 등)와 밑(3^x)을 바꿀 수 있음. 제약: 꼭짓점 t 좌표가 양수가 되게(계수 부호) 유지해야 최솟값 골조가 살고, 정수 k 최솟값이 보기 안에서 유일해야 함."
    creative: "(1) 일차항 부호를 바꿔 꼭짓점이 t<0 이 되면 범위 t>0 에서 단조 → 하한이 경계값이 되어 0303 형 EQV d2 ★3 (2) x 의 범위를 x>0 으로 좁혀 t>1 로 만들면 경계 처리 추가 ★3 (3) 「성립하지 않는 x 가 존재」로 뒤집으면 여집합 해석 ★3."
```

```yaml
- id: RPM-ALG-0302
  page: 40
  vendor_label: "유형 18 지수부등식이 항상 성립할 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 4^x-2^{x+3}+2a-6 ≥ 0 이 성립하도록 하는 실수 a 의 최솟값. 5지선다.
  category: "t=2^x>0 치환 → 2^{x+3}=8t 정리 → (t-4)^2+2a-22 ≥ 0 → 2a-22 ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 실수 x」를 t>0 범위의 이차식 최솟값 조건으로 옮김(꼭짓점 t=4 가 범위 안)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건(치환 이차식의 최솟값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{x+3}=8·2^x 정리가 첫 관문. t=2^x 로 두면 t²-8t+2a-6=(t-4)²+2a-22 이고 꼭짓점 t=4 가 t>0 안이라 2a-22 ≥ 0 → a ≥ 11. 0301 과 같은 골조(EQV d1)이며 등호 포함으로 최솟값이 곧 답. 유형 구역 중 → ★2.
  tier: star_2
  mechanism_primary: "t=2^x>0 → (t-4)^2+2a-22 ≥ 0 → 2a-22 ≥ 0 → a 최소 11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2^{x+3} 의 지수 이동량(계수 8)과 상수 2a-6 의 형태를 바꿀 수 있음. 제약: 꼭짓점 t 좌표 양수 유지, a 에 대한 일차식이라 최솟값이 정수·보기 안에 들어오게."
    creative: "(1) 상수를 a²-6 처럼 이차로 주면 a 의 범위 두 갈래 → 최솟값 판단에 부호 분기 추가(★3) (2) x 범위를 x ≤ 1 로 제한해 0<t ≤ 2 가 되면 꼭짓점이 범위 밖 → 경계 최솟값 EQV d2 ★3 (3) 부등호를 > 로 바꾸면 최솟값이 존재하지 않음을 묻는 T-경계 변형 ★3."
```

```yaml
- id: RPM-ALG-0303
  page: 40
  vendor_label: "유형 18 지수부등식이 항상 성립할 조건"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    모든 양의 실수 x 에 대해 9^x-3^x+k>0 이 성립하도록 하는 실수 k 의 값의 범위. 서술형.
  category: "t=3^x>1 치환 → 축 t=1/2 이 범위 밖 → t>1 에서 증가 → 하한 f(1)=k 는 미달성 → k ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「양의 실수 x」를 t>1 로 옮기고, 꼭짓점이 범위 밖이라 최솟값이 아닌 하한(경계 t=1 미포함)으로 조건을 세워 등호 포함 k ≥ 0 을 판단"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건(치환 이차식의 최솟값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x>0 이므로 t=3^x>1 (t>0 이 아님) — 범위를 잘못 잡으면 꼭짓점 최솟값으로 k>1/4 라는 오답이 나온다. t²-t+k 는 t>1 에서 증가하고 t→1+ 일 때 k 로 수렴하므로 k ≥ 0 이면 항상 양수이며 등호 포함이 핵심. 범위 재해석·열린 경계 처리 EQV d2, T-범위·T-경계 함정. 상중·서술형 → ★3.
  tier: star_3
  mechanism_primary: "t=3^x>1 → t^2-t+k 는 t>1 에서 증가 → 하한 k (t=1 미포함) → k ≥ 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k\ge 0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3^x)과 일차항 계수를 바꿀 수 있음. 제약: 꼭짓점 t 좌표가 범위 하한(x>0 이면 t=1) 보다 작아야 「경계 하한·등호 포함」 골조가 유지됨. 계수를 키워 꼭짓점이 t>1 안으로 들어오면 0301 형으로 퇴화(★2)."
    creative: "(1) x ≥ 0 으로 바꾸면 t ≥ 1 이라 f(1)=k 가 달성되어 k>0 으로 등호가 빠짐(★3 · T-경계 정반대) (2) x<0 으로 바꾸면 0<t<1 에서 꼭짓점 t=1/2 이 안에 들어와 최솟값형(★2) (3) 「성립하지 않는 양수 x 가 존재」로 뒤집으면 k<0 여집합 해석(★3)."
```

### 유형 19 지수방정식과 지수부등식의 실생활에의 활용

```yaml
- id: RPM-ALG-0304
  page: 40
  vendor_label: "유형 19 지수방정식과 지수부등식의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    50년마다 절반으로 줄어드는 방사성 물질이 1024 g 에서 1/4 g 이 되는 데 걸리는 햇수.
  category: "잔량 모델 1024·(1/2)^{t/50} → 2 의 거듭제곱으로 통일 → t/50=12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 실생활 활용(반감기·증가율 모델)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1024=2^{10}, 1/4=2^{-2} 이므로 (1/2)^{t/50}=2^{-12} → 12번 반감 → 600년. 반감 주기를 t/50 으로 모델링하는 것과 밑 통일이 전부이며 함정은 T-단위(횟수 vs 햇수). 통찰 0·M_total 5 로 −1 후보이나 실생활 모델 수립 단계를 고려해 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "1024·(1/2)^{t/50} = 1/4 → (1/2)^{t/50} = 2^{-12} → t = 600"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$600$년'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반감 주기(50년)·처음량·나중량을 바꿀 수 있음. 제약: 처음량/나중량이 2 의 거듭제곱(2^{12})이 되게 유지하고 주기×횟수가 정수 햇수가 되게."
    creative: "(1) 「1/4 g 이하가 되는 최소 햇수」로 부등식화(★2) (2) 주기가 다른 두 물질의 잔량이 같아지는 시각(0306 형·★3) (3) 반감기를 미지수로 두고 관측값 두 개에서 역산하면 0305 형(★2)."
```

```yaml
- id: RPM-ALG-0305
  page: 40
  vendor_label: "유형 19 지수방정식과 지수부등식의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x시간 후 a^x 배로 분열하는 세균 10마리가 2시간 뒤 90마리일 때, 7290마리 이상이 되는 최소 시간 n.
  category: "10a^2=90 → a=3 → 10·3^n ≥ 7290 → 3^n ≥ 3^6 → n=6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 실생활 활용(반감기·증가율 모델)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건에서 a²=9, a>0 이므로 a=3. 이어서 10·3^n ≥ 7290 → 3^n ≥ 729=3^6 → n ≥ 6 → 최소 6. 밑을 먼저 확정하고 부등식으로 넘어가는 두 단계 모델 문제이며 729=3^6 인지 알아보는 것 외에 부담 없음. 유형 구역 중 → ★2.
  tier: star_2
  mechanism_primary: "10a^2=90 → a=3 → 10·3^n ≥ 7290 → n ≥ 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 마릿수·관측 시각·관측값·목표값을 바꿀 수 있음. 제약: 관측값/처음값이 완전제곱(또는 관측 시각 제곱)이 되어 a 가 정수로 나오고, 목표값/처음값이 a 의 거듭제곱이 되게."
    creative: "(1) 관측 시각을 3시간으로 두면 a³ → 세제곱근 판단(★2) (2) 목표를 「처음의 k 배 초과」로 바꿔 등호 배제 T-경계(★2) (3) 두 종류 세균의 마릿수 비교(어느 시점부터 A 가 B 보다 많은가)로 두 지수식 비교 → ★3."
```

```yaml
- id: RPM-ALG-0306
  page: 40
  vendor_label: "유형 19 지수방정식과 지수부등식의 실생활에의 활용"
  vendor_level: "상"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1시간마다 2배(A)·3시간마다 4배(B)로 느는 박테리아를 같은 수만큼 넣었을 때, 두 배양기 합이 처음 합의 40배가 되는 시간.
  category: "두 증가 모델 N·2^t, N·4^{t/3} → 합 조건 2^t+2^{2t/3}=80 → u=2^{t/3} 치환 → u^3+u^2=80 인수정리"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2^t 과 4^{t/3} 를 공통 밑 u=2^{t/3} 로 통일해 지수방정식을 삼차방정식 u^3+u^2-80=0 으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 실생활 활용(반감기·증가율 모델)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    처음 각각 N 이면 합 2N 의 40배는 80N 이므로 2^t+4^{t/3}=80. 4^{t/3}=2^{2t/3} 이라 u=2^{t/3} 로 두면 u³+u²=80, 인수정리로 (u-4)(u²+5u+20)=0 → u=4 → t=6. 두 모델을 하나의 식으로 세운 뒤 공통 밑을 찾는 치환 설계가 통찰(EQV d1), 삼차 인수분해까지 Mₖ 2. 유형 구역 「상」 → ★4 출발, 조정 조건 해당 없음 → ★4.
    [분류 이슈] 통찰 1개·d1 이라 체감은 ★3~4 경계. 라벨은 벤더대로 ★4.
  tier: star_4
  mechanism_primary: "N·2^t + N·4^{t/3} = 80N → u=2^{t/3} → u^3+u^2-80=0 → u=4 → t=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$시간'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율(2배·4배)·주기(1시간·3시간)·목표 배수(40)를 바꿀 수 있음. 제약: 두 지수가 공통 단위(t/3)의 정수배가 되고, 치환 후 다항방정식이 작은 정수근 하나를 갖도록 목표 배수를 u^3+u^2 꼴의 값으로 설계(예: u=3 → 36배)."
    creative: "(1) 두 배양기의 수가 같아지는 시각을 물으면 2^t=4^{t/3} → 지수 비교 한 줄(★2) (2) 처음 넣은 수를 다르게(A 는 2N, B 는 N) 주면 계수가 붙은 삼차식(★4 유지) (3) 「합이 40배 이상이 되는 최소 자연수 시간」으로 부등식화하면 단조성 논증이 추가되어 VF 성격 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0307
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=(1/2)^{x+1}-3 의 역함수 g 가 g(a)=-1, g(b)=1 을 만족할 때 ab 의 값. 5지선다.
  category: "역함수 값 → 원함수 값으로 되돌리기 g(a)=-1 ⇔ f(-1)=a → 대입 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 역함수 값(역함수 관계 되돌리기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수를 직접 구하지 않고 g(a)=-1 ⇔ f(-1)=a, g(b)=1 ⇔ f(1)=b 로 되돌리면 a=1-3=-2, b=1/4-3=-11/4, ab=11/2. 역함수 관계의 표준 절차이며 분수 계산이 유일한 부담. 시험 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "g(a)=-1 ⇔ f(-1)=a=-2 · g(b)=1 ⇔ f(1)=b=-11/4 → ab=11/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/2 → 3)·지수 이동(x+1)·상수(-3)·g 의 입력값(-1, 1)을 바꿀 수 있음. 제약: f 의 값이 유리수로 정리되고 ab 가 보기에서 유일하게 구분되게."
    creative: "(1) g(a)+g(b)=0 처럼 역함수 값의 합 조건으로 바꾸면 f 의 두 값을 연립(★2~3) (2) 역함수의 그래프가 지나는 점 (a, -1) 로 표현을 바꾸면 RT d1 성격(★2) (3) (f∘g)(k) 나 g(f(2)) 처럼 합성으로 감싸면 항등 성질 확인(★2)."
```

```yaml
- id: RPM-ALG-0308
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    함수 y=4^{2x-1}-2 에 대한 설명(정의역·치역·증감·점근선·평행이동으로 겹침·사분면 통과) 중 옳은 것 고르기. 5지선다.
  category: "그래프 성질 항목별 판정 → 점근선 y=-2 → 밑 변환 4^{2x-1}=16^{x-1/2} 로 ④ 기각 → 제2사분면 여부"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프 성질 판정(정의역·치역·점근선·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역은 실수 전체(① 거짓), 밑 4>1 에 지수 계수 양수라 증가(② 거짓), 점근선 y=-2 와 만나지 않음(③ 참), 4^{2x-1}=16^{x-1/2} 이므로 평행이동으로 겹치는 것은 y=16^x 라 ④ 거짓, x<0 에서 y<4^{-1}-2<0 이라 제2사분면을 지나지 않음(⑤ 거짓). ④의 밑 변환(T-표기)과 ①의 정의역 착시(T-범위)가 함정. 시험 구역 절차형 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기 판정 → 점근선 y=-2 로 ③ 참 · 4^{2x-1}=16^{x-1/2} 로 ④ 거짓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수 계수(2x-1)·상수(-2)를 바꿀 수 있음. 제약: 지수 계수를 바꾸면 ④의 「겹치는 원함수」 밑이 4^k 로 함께 바뀌므로 보기 문구를 맞춰야 하고, 상수 부호에 따라 ⑤ 사분면 판정이 달라짐."
    creative: "(1) 지수 계수를 음수로 바꿔 감소함수로 만들면 ②·⑤ 판정이 뒤집힘(★2) (2) 「옳은 것의 개수」로 바꾸면 다섯 보기 전부 판정 필요(★2~3) (3) 보기 ④ 를 「y=2^x 를 평행·확대 없이 대칭이동만으로」처럼 변환 종류를 묻게 하면 RT d1 ★3."
```

```yaml
- id: RPM-ALG-0309
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    y=(1/2)^x 를 x축 대칭 후 x축 a·y축 b 만큼 평행이동한 그래프가 두 점 (-1,-1), (-2,-9) 를 지날 때 a+b.
  category: "대칭·평행이동 식 y=-(1/2)^{x-a}+b → 두 점 대입 → 두 식 빼서 2^{1+a} 인수 → a=2, b=7"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 그래프의 대칭·평행이동과 지나는 점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x축 대칭 y=-(1/2)^x, 평행이동 y=-(1/2)^{x-a}+b. 두 점을 넣으면 b-2^{1+a}=-1, b-2^{2+a}=-9 이고 빼면 2^{2+a}-2^{1+a}=2^{1+a}=8 → a=2, b=7 → 9. 변환 순서(대칭 뒤 이동)와 연립에서 2^{1+a} 를 묶는 정리가 부담이라 Mₛ 3·Mₖ 2. 통찰 없는 절차형이나 M_total 8 → 시험 구역 ★3.
  tier: star_3
  mechanism_primary: "y=-(1/2)^{x-a}+b → 두 점 대입 → 차 2^{1+a}=8 → a=2, b=7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있음. 제약: 두 점의 x 좌표 차가 1 이면 두 식의 차가 2^{1+a}(2-1) 로 깔끔히 묶이고, 그 값이 2 의 거듭제곱이 되게 y 좌표 차를 설계(여기 8)."
    creative: "(1) 대칭 종류를 y축 또는 원점 대칭으로 바꾸면 식이 y=2^{x-a}+b 꼴이 되어 부호 함정 이동(★3) (2) 점 하나와 점근선 y=b 를 주면 0310 형(★2) (3) 이동 순서를 「평행이동 뒤 대칭」으로 바꾸면 b 의 부호가 뒤집히는 T-부호 강화 ★3."
```

```yaml
- id: RPM-ALG-0310
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    y=2^x 를 y축 대칭 후 x축 a·y축 b 만큼 평행이동한 그래프(그림: 원점을 지나고 점근선 y=-2)에서 a-b 의 값.
  category: "y축 대칭 y=2^{-x} → 이동 y=2^{-(x-a)}+b → 점근선 b=-2 → 원점 대입 2^a=2 → a=1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 그래프의 대칭·평행이동과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 점근선 y=-2 → b=-2, 원점 통과 → 2^{a}-2=0 → a=1, a-b=3. 대칭 뒤 이동 식을 세우고 그림의 두 정보(점근선·통과점)를 읽어 넣는 표준 절차. 그림 읽기 자체는 표준이라 통찰로 세지 않음. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y=2^{-x+a}+b → 점근선 y=-2 → b=-2 → (0,0) 대입 → a=1 → a-b=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0310.png"
  latex: latex-bank/rpm-alg/items/0310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 값(-2)과 통과점(원점 → (0,k) 또는 (1,0))을 바꿀 수 있음. 제약: 통과점 대입 후 2^{a} 가 2 의 거듭제곱이 되게, 그림 라벨(점근선 값·통과점)을 함께 갱신."
    creative: "(1) 그림 대신 「점근선 y=-2 이고 x 절편이 0」 문장으로 주면 RT 없이 ★2 (2) 대칭 종류를 밝히지 않고 그림의 감소 형태에서 학생이 y축 대칭임을 읽게 하면 RT d1 ★3 (3) 통과점 두 개만 주고 점근선을 숨기면 0309 형(★3)."
```

```yaml
- id: RPM-ALG-0311
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    함수 y=2^{-2x+2}+n 의 그래프가 제1사분면을 지나지 않도록 하는 실수 n 의 최댓값.
  category: "감소함수·점근선 y=n → 「제1사분면 안 지남」 ⇔ x>0 에서 y ≤ 0 ⇔ y(0)=4+n ≤ 0 → n 최대 -4"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「제1사분면을 지나지 않는다」를 감소함수임을 이용해 「x=0 에서의 값 4+n ≤ 0」 한 조건으로 동치 변환(등호 포함은 축 위 점이 사분면에 속하지 않기 때문)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 그래프가 사분면을 지나지 않을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2^{-2x+2}=4·(1/4)^x 라 감소, 점근선 y=n. x>0 에서 y<4+n 이므로 제1사분면을 피하려면 4+n ≤ 0, 즉 n ≤ -4 → 최대 -4. 사분면 조건을 y 절편 부등식으로 옮기는 해석이 EQV d1 이고, 등호(y 절편이 0 이면 축 위라 허용)가 T-경계 함정. 시험 구역·통찰 1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "감소함수 → x>0 에서 y<y(0)=4+n → 4+n ≤ 0 → n 최대 -4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(-2)·상수(2)·밑을 바꿀 수 있음. 제약: 지수 계수를 음수로 유지해야 감소함수라 「x>0 에서 y 절편이 최대」 골조가 살고, y(0) 이 정수가 되게."
    creative: "(1) 지수 계수를 양수로 바꾸면 증가함수라 조건이 점근선 n ≤ 0 으로 바뀜(같은 EQV·★3) (2) 「제3사분면을 지나도록」으로 바꾸면 부등호 방향·경계 재해석(★3) (3) 「제1사분면과 제2사분면을 모두 지나지 않도록」처럼 두 조건을 결합하면 CON 성격 ★4."
```

```yaml
- id: RPM-ALG-0312
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a>1 인 f(x)=a^x 의 그래프(그림: f(p)=2, f(q)=5)에서 f((p+q)/2) 의 값.
  category: "그림에서 a^p=2, a^q=5 읽기 → a^{(p+q)/2}=√(a^p·a^q) → √10"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 와 p, q 를 구하지 않고 f((p+q)/2)=a^{(p+q)/2} 를 a^p 와 a^q 의 기하평균 √(a^p a^q) 으로 옮겨 그림값만으로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 함숫값과 지수법칙(f((p+q)/2)=√(f(p)f(q)))"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a, p, q 를 각각 구할 수 없으므로 지수법칙으로 f((p+q)/2)=√(f(p)f(q))=√10 을 바로 얻어야 한다. 이 한 줄이 전부이지만 a 를 구하려다 막히는 학생이 많아 EQV d1 로 세고 M_total 은 5 로 낮다. 시험 구역·통찰 1 → ★3.
    [분류 이슈] 노동량 최소·착안 한 줄이라 ★2 후보. 지수법칙 착안이 핵심이라 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "a^p=2, a^q=5 → a^{(p+q)/2}=√(a^p·a^q)=√10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{10}$'
  answer_source: "답지"
  figure: "crop:fig-0312.png"
  latex: latex-bank/rpm-alg/items/0312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 함숫값(2, 5)을 바꿀 수 있음. 제약: 곱이 완전제곱이 아니어야 근호 답이 유지되고(완전제곱이면 정수 답 ★2~3), 그림 라벨(y=2, 5 와 p, q)을 함께 갱신. a>1 조건은 그래프 모양과 맞춰야 함."
    creative: "(1) f(2p-q) 나 f(p+q) 를 물으면 지수법칙 조합이 달라짐(★3) (2) f(p)=2, f(q)=5 대신 f(p)·f(q)=10, f(p)/f(q)=2/5 처럼 관계로 주면 연립 해석 추가(★3) (3) 「(p+q)/2 를 x 좌표로 하는 점의 y 좌표가 p, q 점의 y 좌표 산술평균보다 작다」처럼 볼록성 비교 보기로 확장하면 SYM/RT ★4."
```

```yaml
- id: RPM-ALG-0313
  page: 41
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    두 곡선 y=3^x, y=3^x+3 과 두 직선 x=0, x=1 로 둘러싸인 부분(그림)의 넓이.
  category: "위 곡선이 아래 곡선의 y축 방향 3 평행이동 → 영역을 잘라 옮기면 가로 1·세로 3 직사각형과 등적 → 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선 사이 넓이를 직접 못 구하므로 평행이동으로 잘라 붙여 직사각형(가로 1 · 세로 3)과 넓이가 같음을 보는 기하 등적 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프의 평행이동을 이용한 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=3^x+3 은 y=3^x 를 위로 3 옮긴 것이므로 x=0~1 사이의 띠는 아래 곡선 위 부분을 잘라 붙이면 1×3 직사각형이 되어 넓이 3. 적분 없이 등적 변환을 떠올리는 한 착안(RT d1)이 전부이고 계산 없음(M_total 4). 교과서에도 실린 표준 착안이라 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "y=3^x+3 은 y=3^x 의 위로 3 이동 → 띠 영역을 직사각형 1×3 으로 등적 변환 → 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0313.png"
  latex: latex-bank/rpm-alg/items/0313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(3)·두 직선의 위치(x=0, 1 → x=a, b)를 바꿀 수 있음. 제약: 두 곡선이 정확히 y축 방향 평행이동 관계여야 등적 변환이 성립하고, 그림의 라벨(4, 1 등 y 절편)을 함께 갱신."
    creative: "(1) 두 곡선을 x축 방향 이동 관계(y=3^x, y=3^{x-1})로 두고 y=1, y=3 사이 넓이를 물으면 같은 착안의 가로 버전(★2) (2) 세 곡선 y=3^x, y=3^x+3, y=3^x+6 사이 두 띠 넓이 비교(★2) (3) 넓이가 같도록 이동량 k 를 미지수로 두는 역문제(BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0314
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    A=∛0.25, B=2^{-3/2}, C=⁴√(32^{-1}) 의 대소 관계. 5지선다.
  category: "세 수를 밑 2 의 거듭제곱으로 통일(2^{-2/3}, 2^{-3/2}, 2^{-5/4}) → 지수 비교 → B<C<A"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수의 대소 비교(밑 통일 후 지수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.25=2^{-2}, 32=2^5 이므로 A=2^{-2/3}, B=2^{-3/2}, C=2^{-5/4}. 밑 2>1 이라 지수 -3/2<-5/4<-2/3 순서 그대로 B<C<A. 밑 통일과 분수 비교뿐인 절차형, 소수·역수 표기가 소소한 함정. 시험 구역 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A=2^{-2/3}, B=2^{-3/2}, C=2^{-5/4} → 지수 비교 → B<C<A"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수의 표기(소수·거듭제곱근·음의 지수)를 밑 2 또는 3 의 거듭제곱 범위에서 바꿀 수 있음. 제약: 세 지수가 서로 다르고 분수 비교가 통분 한 번으로 끝나게(분모 2·3·4 정도), 보기 다섯 개 중 순서가 유일."
    creative: "(1) 밑을 1/2 로 통일하게 표기하면 부등호 방향 반전 T-부호(★2) (2) 세 수 중 하나를 밑 3 으로 섞어 통일 불가 → 크기 비교에 거듭제곱(예: 6제곱) 필요 → ★3 (3) 네 수 이상으로 늘려 순서 나열 서술형(★2)."
```

```yaml
- id: RPM-ALG-0315
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    정의역 -2 ≤ x ≤ 3 에서 f(x)=4^x 의 최댓값 M 과 g(x)=(1/8)^{x-2} 의 최솟값 m 의 곱 Mm.
  category: "f 증가 → 최대 f(3)=64 · g 감소 → 최소 g(3)=1/8 → 곱 8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소(정의역 제한 · 단조성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 4>1 이라 f 는 증가해 x=3 에서 최대 64, 밑 1/8<1 이라 g 는 감소해 x=3 에서 최소 (1/8)^1. 곱 8. 단조성으로 끝점만 대입하는 교과서 절차, 밑<1 의 방향(T-부호)만 조심. 시험 구역 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f 증가 → f(3)=64 · g 감소 → g(3)=1/8 → Mm=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 끝점·밑·지수 이동량(x-2)을 바꿀 수 있음. 제약: 끝점 대입값이 2 의 거듭제곱으로 정리되어 곱이 정수(또는 간단한 분수)가 되게."
    creative: "(1) M 과 m 이 같은 끝점에서 나오지 않도록 g 의 밑을 1 보다 크게 바꾸면 끝점 선택이 갈림(★2) (2) 정의역을 |x-1| ≤ 2 처럼 절댓값으로 주면 범위 해석 추가(★2) (3) 「최댓값과 최솟값의 차가 k」에서 정의역 끝점을 역산하면 BW d1 ★3."
```

```yaml
- id: RPM-ALG-0316
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    함수 y=(1/3)^{x^2-4x} 이 x=a 에서 최댓값 b 를 가질 때 a+b.
  category: "지수 x^2-4x=(x-2)^2-4 의 최솟값 -4 → 밑<1 이라 지수 최소에서 y 최대 (1/3)^{-4}=81 → a+b=83"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소(지수가 이차식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수를 완전제곱해 x=2 에서 최소 -4, 밑 1/3<1 이므로 그때 y 가 최대 3^4=81. a=2, b=81 → 83. 밑<1 에서 지수 최소 ↔ 함수 최대 뒤집기(T-부호)만 조심하는 표준 절차. 시험 구역 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x^2-4x 최소 -4 (x=2) → 밑<1 → y 최대 (1/3)^{-4}=81 → 83"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$83$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 이차식의 계수·밑을 바꿀 수 있음. 제약: 이차식 꼭짓점 x 좌표·최솟값이 정수가 되고, 밑의 거듭제곱 결과가 너무 크지 않게(3^4 정도)."
    creative: "(1) 밑을 3 으로 바꾸면 최솟값 문제로 뒤집힘(★2) (2) 정의역을 0 ≤ x ≤ 1 처럼 꼭짓점 밖으로 제한하면 끝점 판단 추가(★2~3) (3) 지수를 -x^2+4x 로 바꾸고 최댓값이 아니라 「최솟값이 존재하는가」를 물으면 치역 개념(★3)."
```

```yaml
- id: RPM-ALG-0317
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    0 ≤ x ≤ 3 에서 함수 y=4^x-2^{x+1}+k 의 최댓값이 50 일 때 상수 k. 5지선다.
  category: "t=2^x 치환 → 1 ≤ t ≤ 8 → (t-1)^2+k-1 → 축 t=1 이 왼쪽 끝 → 최대는 t=8 → 48+k=50"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 지수함수의 최대·최소(t 의 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^x 로 두면 1 ≤ t ≤ 8 이고 y=(t-1)²+k-1 은 t=1 이 축이라 구간에서 증가, 최대는 t=8 에서 49+k-1=50 → k=2. 치환 뒤 t 의 범위를 옮기는 것(T-범위)이 유일한 관문인 표준 절차. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=2^x ∈ [1,8] → (t-1)^2+k-1 → 최대 t=8 → 48+k=50 → k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 범위·일차항 계수(2^{x+1})·최댓값(50)을 바꿀 수 있음. 제약: 축 t 좌표가 t 범위 밖 또는 끝점이어야 「끝점 최대」 골조가 유지되고, 축이 안쪽이면 최솟값 문제로 설계할 것. k 가 보기 정수."
    creative: "(1) 최솟값을 물으면 축 t=1 이 끝점이라 k-1 로 즉답(★1~2) (2) x 범위를 -1 ≤ x ≤ 3 으로 넓히면 t ∈ [1/2, 8] 로 축이 안에 들어와 최댓·최솟 동시 판단(★2) (3) 「최댓값과 최솟값의 합이 k+…」처럼 두 값을 묶으면 k 소거 여부 판단 ★3."
```

```yaml
- id: RPM-ALG-0318
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    함수 y=3^{a+x}+3^{a-x} 의 최솟값이 54 일 때 실수 a 의 값.
  category: "두 항의 곱이 3^{2a} 로 일정 → 산술·기하평균 y ≥ 2·3^a (등호 x=0) → 2·3^a=54 → a=3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 지수함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^{a+x}·3^{a-x}=3^{2a} 로 곱이 일정하므로 산술·기하평균에서 y ≥ 2√(3^{2a})=2·3^a, 등호는 x=0. 2·3^a=54 → 3^a=27 → a=3. 곱이 일정한 두 양수 항의 최솟값은 이 단원의 표준 도구라 절차형, 등호 성립 확인(T-경계)만 필요. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3^{a+x}·3^{a-x}=3^{2a} 일정 → AM-GM y ≥ 2·3^a → 2·3^a=54 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)·최솟값(54)을 바꿀 수 있음. 제약: 최솟값/2 가 밑의 거듭제곱이 되게(54/2=27=3^3). 지수를 a+x, a-x 처럼 합이 x 와 무관한 짝으로 유지해야 곱이 상수."
    creative: "(1) 지수를 x+1, 3-x 처럼 구체 수로 두고 최솟값이 되는 x 를 묻기(★2) (2) y=3^{a+x}+3^{a-x}+k·3^x 처럼 세 번째 항을 붙이면 AM-GM 이 안 통해 치환 이차식(0319 형 ★2~3) (3) 최솟값 대신 「y=54 인 x 가 두 개 존재할 조건」으로 바꾸면 그래프 대칭 해석 SYM d1 ★3."
```

```yaml
- id: RPM-ALG-0319
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    함수 y=4^x+4^{-x}+6(2^x+2^{-x})+3 의 최솟값. 5지선다.
  category: "t=2^x+2^{-x} ≥ 2 치환 → 4^x+4^{-x}=t^2-2 → y=t^2+6t+1 → 축 t=-3 이 범위 밖 → t=2 에서 최소 17"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 지수함수의 최대·최소(t 의 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^x+2^{-x} 로 두면 AM-GM 으로 t ≥ 2 이고 4^x+4^{-x}=t²-2 이므로 y=t²+6t+1=(t+3)²-8. 축 t=-3 이 범위 밖이라 t ≥ 2 에서 증가, 최소는 t=2 일 때 17. a^x+a^{-x} 치환과 범위 t ≥ 2 를 함께 쓰는 정형 절차(T-범위). 시험 구역 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "t=2^x+2^{-x} ≥ 2 → y=t^2+6t+1 → 증가 구간 → t=2 → 17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(6)·상수(3)·밑을 바꿀 수 있음. 제약: 축 -계수/2 가 t ≥ 2 밖(음수)이면 끝점 최소 골조 유지. 계수를 음수로 바꿔 축이 t ≥ 2 안에 들어오면 꼭짓점 최소로 골조가 바뀜."
    creative: "(1) 계수를 -6 으로 바꿔 축 t=3 이 범위 안에 오면 꼭짓점에서 최소·그때 x 값(2^x+2^{-x}=3) 까지 묻기(★3) (2) 4^x-4^{-x} 와 2^x-2^{-x} 조합으로 바꾸면 t 의 범위가 실수 전체라 T-범위 사라짐(★2) (3) 「최솟값을 갖는 x 가 x=0 뿐인 이유」를 서술하게 하면 등호 조건 논증 ★3."
```

```yaml
- id: RPM-ALG-0320
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    방정식 (1/3)^{-3x}=3^{x^2-4} 의 모든 실근의 곱. 5지선다.
  category: "좌변을 3^{3x} 로 통일 → 지수 비교 3x=x^2-4 → 이차방정식 근의 곱 -4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/3)^{-3x}=3^{3x} 이므로 3x=x²-4, 즉 x²-3x-4=0 의 두 근의 곱 -4(근 4, -1 을 직접 구해도 됨). 밑 통일 한 번·이차방정식 한 번뿐이라 M_total 4. 시험 구역 ★2~3 출발이나 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1/3)^{-3x}=3^{3x} → 3x=x^2-4 → x^2-3x-4=0 → 근의 곱 -4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 지수 계수(-3x)·우변 이차식 상수를 바꿀 수 있음. 제약: 지수 비교로 나온 이차방정식이 실근 두 개(판별식 양수)를 갖고 근의 곱이 보기 정수."
    creative: "(1) 「모든 실근의 합」으로 바꾸면 근과 계수 다른 항(★1) (2) 밑을 9 와 3 처럼 다르게 주면 통일 단계 추가(★2) (3) 실근이 하나뿐이도록 하는 상수 k 를 물으면 판별식 조건 BW d1 ★2~3."
```

```yaml
- id: RPM-ALG-0321
  page: 42
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    연립방정식 3·2^x-2·3^y=18, 2^{x-2}-3^{y-1}=1 의 해 x=α, y=β 에 대해 α^2+β^2.
  category: "X=2^x, Y=3^y 치환 → 둘째 식 X/4-Y/3=1 정리 → 일차연립 → X=8, Y=3 → x=3, y=1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 지수 연립방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{x-2}=X/4, 3^{y-1}=Y/3 으로 고쳐 3X-2Y=18, 3X-4Y=12 를 풀면 Y=3, X=8 → x=3, y=1 → 10. 치환·지수법칙 정리·일차연립의 정형 절차이며 분수 정리에서 Mₖ 2. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=2^x, Y=3^y → 3X-2Y=18, 3X-4Y=12 → X=8, Y=3 → (3,1) → 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수와 지수 이동량(x-2, y-1)을 바꿀 수 있음. 제약: 일차연립의 해 X, Y 가 각각 2, 3 의 거듭제곱(양수)이 되게 설계."
    creative: "(1) 두 식 중 하나를 곱 조건 2^x·3^y=24 로 바꾸면 치환 뒤 곱셈 관계 → 이차방정식(★3) (2) 밑을 같게(2^x, 2^y) 두고 대칭식으로 주면 근과 계수 관계 ★3 (3) 해 (α, β) 가 자연수임을 조건으로 미정계수를 역산하면 BW d1 ★3."
```

```yaml
- id: RPM-ALG-0322
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    x 에 대한 방정식 a^{2x}-8a^x+5=0 (a>0, a≠1) 의 두 근의 합이 3 일 때 상수 a. 5지선다.
  category: "t=a^x 치환 → t 두 근의 곱 5 = a^{α}·a^{β} = a^{α+β} → a^3=5 → a=∛5"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 두 근의 합 α+β 를 치환 근의 곱 a^α·a^β=a^{α+β} 로 옮겨, 근을 구하지 않고 근과 계수 관계(곱 5)로 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수방정식의 근과 계수의 관계(치환 근의 곱 ↔ 원래 근의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=a^x 로 두면 t²-8t+5=0 의 두 근 a^α, a^β 의 곱이 5 이고 이는 a^{α+β}=a³ 이므로 a=5^{1/3}. 근을 직접 구하면 무리수라 막히고, 「x 근의 합 ↔ t 근의 곱」 전환이 문제의 전부(EQV d1). 판별식 양수·두 근 양수(t>0) 확인은 부수. 시험 구역·통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "t=a^x → t 근의 곱 5 → a^{α+β}=a^3=5 → a=5^{1/3}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(5)·일차항 계수(-8)·두 근의 합(3)을 바꿀 수 있음. 제약: t 이차방정식이 서로 다른 두 양근(판별식>0, 합>0, 곱>0)을 갖고 a^{합}=곱 에서 a 가 보기 형태(거듭제곱근)로 나오게."
    creative: "(1) a 를 주고 두 근의 합을 묻는 정방향(★2) (2) 두 근의 차나 곱 αβ 를 물으면 로그 없이는 닫히지 않으므로 대수 범위에서는 합만 유지 (3) 계수를 a 로 준 t 방정식이 「두 근의 합이 3 이 되는 a 가 존재하는 조건」으로 바꾸면 판별식·양근 조건 결합 VF 성격 ★4."
```

```yaml
- id: RPM-ALG-0323
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    방정식 4^x-k·2^{x+1}+64=0 이 오직 하나의 실근 α 를 가질 때 k+α 의 값(k 는 상수). 5지선다.
  category: "t=2^x>0 치환 → t^2-2kt+64=0 이 양근 하나 → 근의 곱 64>0 이라 이종 부호 불가 → 중근 D=0 → k=±8 중 k=8 채택 → t=8, α=3"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x 의 실근이 오직 하나」를 t=2^x 의 일대일 대응으로 「t>0 인 근이 정확히 하나」로 옮김"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "D=0 에서 나온 k=±8 을 중근 t=k>0 조건에 재대입해 k=-8 을 기각(근의 곱 64>0 으로 이종 부호 경우도 기각)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "지수방정식이 오직 하나의 실근을 가질 조건(치환 이차방정식의 양근 개수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=2^x 로 두면 t²-2kt+64=0. 두 근의 곱이 64>0 이라 부호가 같으므로 양근이 하나뿐이려면 양의 중근이어야 하고, D/4=k²-64=0 → k=±8 에서 중근 t=k>0 이므로 k=8, t=8 → α=3, 합 11. 조건 전환(EQV d1)과 후보 기각(VF d1) 두 단계가 있어 통찰 2 이나 각 d1 이고 이 단원의 정형 유형. 시험 구역 ★2 출발 +1 → ★3.
    [분류 이슈] 이종 부호 경우 검토를 MI 로 세면 통찰 3 이 되어 ★4 후보. 근의 곱 부호로 즉시 소거되므로 VF 안에 포함해 ★3.
  tier: star_3
  mechanism_primary: "t=2^x>0 → t^2-2kt+64=0 양근 하나 → 곱 64>0 → 중근 → k=8 (k=-8 기각) → t=8 → α=3 → 11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(64)·일차항 형태(k·2^{x+1})를 바꿀 수 있음. 제약: 상수항이 양의 완전제곱(중근 t=√상수 가 2 의 거듭제곱)이어야 α 가 정수. 상수항을 음수로 바꾸면 두 근이 이종 부호가 되어 「모든 k 에서 실근 하나」로 골조가 완전히 달라짐."
    creative: "(1) 상수항을 -64 로 바꾸면 항상 양근 하나 → 「k 에 관계없이 실근이 하나임을 설명」하는 논증형(★3) (2) 「서로 다른 두 실근」 조건으로 바꾸면 D>0·합>0·곱>0 세 조건 결합 CON/VF ★3~4 (3) 「두 실근의 합이 α」처럼 근의 합을 t 곱으로 잇는 0322 골조와 결합하면 ★4."
```

```yaml
- id: RPM-ALG-0324
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    부등식 (1/8)^{2x+1} < 32 < (1/2)^{3x-9} 를 만족시키는 정수 x 의 개수. 5지선다.
  category: "세 항을 2 의 거듭제곱으로 통일 → 두 지수 부등식 -6x-3<5, 5<-3x+9 → -4/3<x<4/3 → 정수 3개"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수부등식(연립·정수해 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{-6x-3}<2^5<2^{-3x+9} 로 통일하면 -6x-3<5 → x>-4/3, 5<-3x+9 → x<4/3. 정수는 -1, 0, 1 의 3개. 밑<1 을 2 의 음의 지수로 바꾸는 부호 처리(T-부호)와 분수 경계에서 정수 세기(T-경계)가 함정이나 절차는 정형. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(1/8)^{2x+1}=2^{-6x-3}, 32=2^5, (1/2)^{3x-9}=2^{-3x+9} → -4/3<x<4/3 → 정수 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 일차식의 계수·상수와 가운데 상수(32)를 바꿀 수 있음. 제약: 두 경계가 정수가 아닌 분수가 되게 하면 T-경계가 살고, 정수 개수가 보기 범위(1~5) 안."
    creative: "(1) 부등호에 등호를 섞어 경계 포함 여부를 다르게 하면 T-경계 강화(★2) (2) 가운데를 상수 대신 4^{x} 로 바꾸면 세 지수식 비교 → 연립 부등식(★3) (3) 「정수 x 의 개수가 3 이 되도록 하는 상수 k 의 범위」로 역산하면 BW d1 ★3."
```

```yaml
- id: RPM-ALG-0325
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    A={x | 4^x-2^{x+1}-8<0}, B={x | (1/2)^{x^2}>(1/2)^{2x+3}} 에 대하여 집합 B-A.
  category: "A: t=2^x 치환 (t-4)(t+2)<0 → 0<t<4 → x<2 · B: 밑<1 부호 반전 x^2<2x+3 → -1<x<3 → B-A=[2,3)"
  M: {s: 2, k: 1, a: 1, t: 3}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식의 해집합 연산(치환형 + 밑 통일형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 는 t=2^x 로 (t-4)(t+2)<0, t>0 이므로 0<t<4 → x<2. B 는 밑 1/2<1 이라 x²<2x+3 → -1<x<3. B-A 는 -1<x<3 에서 x<2 를 뺀 {x | 2 ≤ x<3} 로 경계 2 포함이 핵심. 두 표준 부등식과 차집합의 조합이라 통찰 없음이나 T-범위(t>0)·T-부호(밑<1)·T-경계(2 포함) 세 함정으로 Mₜ 3. 시험 구역 M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "A: 0<2^x<4 → x<2 · B: x^2<2x+3 → -1<x<3 → B-A={x | 2 ≤ x<3}"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\{x \mid 2\le x<3\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 계수(2^{x+1}, -8)와 B 의 지수 이차식·일차식을 바꿀 수 있음. 제약: A 의 t 이차식이 양근 하나·음근 하나(t>0 소거가 살아 있게), B 의 이차부등식이 정수 근을 갖고 두 해 구간이 부분적으로 겹치게."
    creative: "(1) A∩B 나 A∪B 로 바꾸면 경계 처리만 달라짐(★2~3) (2) B-A 의 정수 원소 개수를 물으면 경계 포함 판단이 답에 직결(★3) (3) B 의 밑을 미지수 a 로 두고 「B-A 가 공집합이 되는 a 의 범위」를 물으면 밑 분기 + 포함 관계 MI ★4."
```

```yaml
- id: RPM-ALG-0326
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    x>0 일 때 부등식 x^{x^2-5} < x^{4x} 의 해가 α<x<β 일 때 α+β.
  category: "밑 3분기 → 0<x<1: x^2-4x-5>0 해 없음 · x=1 거짓 · x>1: (x-5)(x+1)<0 → 1<x<5 → α+β=6"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수부등식(밑의 범위 분기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0<x<1 에서는 x²-5>4x 즉 (x-5)(x+1)>0 이라 x>5 또는 x<-1 로 구간과 겹치지 않고, x=1 은 1<1 거짓, x>1 에서 (x-5)(x+1)<0 → 1<x<5. 해 1<x<5 로 α+β=6. 유형 17 골조 그대로이고 한 분기가 공집합이 되는 점만 다르다. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "밑 3분기 → 0<x<1 해 없음 · x=1 거짓 · x>1 에서 1<x<5 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 이차식 x^2-5 와 일차식 4x 를 바꿀 수 있음. 제약: 이차부등식의 근이 하나는 음수·하나는 1 보다 큰 양수여야 0<x<1 분기가 공집합이 되고 해가 「α<x<β」 한 구간(α=1)으로 유지됨."
    creative: "(1) 근을 (0,1) 안에 하나 두면 해가 두 구간이 되어 0300 형(★3) (2) 등호를 넣어 x=1 포함 → 1 ≤ x<5 로 답 구조 변경(★2) (3) 부등호 방향을 바꿔 해가 무한 구간이 되게 하면 발문을 「해에 속하는 정수의 최솟값」 등으로 재설계 필요."
```

```yaml
- id: RPM-ALG-0327
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    모든 실수 x 에 대해 3x^2-(3^t+3)x+(3^t+3)>0 이 성립하도록 하는 실수 t 의 값의 범위. 5지선다.
  category: "x 에 대한 이차부등식 항등(이차계수 3>0) → D<0 → (3^t+3)(3^t+3-12)<0 → 3^t<9 → t<2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건(계수가 지수식인 이차부등식의 항등 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수는 x 이고 3^t 는 계수이므로 이차계수 3>0 에서 D<0 이 조건. s=3^t+3 으로 보면 D=s²-12s=s(s-12)<0 이고 s>0 이라 s<12 → 3^t<9 → t<2. 지수 단원 문제라 t=3^x 로 치환하려는 착시(T-표기)가 함정이고, D 정리에서 3^t+3 을 덩어리로 묶는 정리가 Mₖ 2. 절차형이나 M_total 7 → 시험 구역 ★3.
    [분류 이슈] 유형 18 「지수부등식 항상 성립」 아래 실렸으나 골조는 이차부등식 항등(D<0) + 지수부등식 t<2 — 카탈로그에서 유형 소속을 정할 것.
  tier: star_3
  mechanism_primary: "x 이차부등식 항등 → D<0 → (3^t+3)(3^t-9)<0 → 3^t<9 → t<2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차계수(3)와 계수 덩어리(3^t+3)의 상수·밑을 바꿀 수 있음. 제약: D 가 (3^t+c)(3^t+c-4a) 꼴로 묶여 한 인수가 항상 양수가 되게(c>0), 남은 인수에서 3^t 의 경계가 3 의 거듭제곱(9)이 되게."
    creative: "(1) 부등호를 ≥ 로 바꿔 D ≤ 0 → t ≤ 2 로 등호 포함(★3) (2) 이차계수를 3^t 로 두면 이차계수 양수 확인 + D<0 두 조건 결합(★3~4) (3) 「x 에 대한 방정식이 서로 다른 두 실근을 갖도록」으로 바꾸면 D>0 → t>2 여집합형(★3)."
```

```yaml
- id: RPM-ALG-0328
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    6시간마다 절반으로 줄어드는 해충 수가 처음의 1/32 이 되기까지 걸리는 시간.
  category: "잔량 모델 (1/2)^{t/6} → 1/32=(1/2)^5 → t/6=5 → 30시간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 실생활 활용(반감기·증가율 모델)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 수를 N 으로 두면 t 시간 뒤 N·(1/2)^{t/6}. 1/32=(1/2)^5 이므로 반감 5회 → 30시간. 0304 와 같은 반감기 골조의 축소판이며 함정은 횟수와 시간의 T-단위뿐. 시험 구역 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "N·(1/2)^{t/6} = N/32 → t/6 = 5 → t = 30"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$시간'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반감 주기(6시간)·목표 비율(1/32)을 바꿀 수 있음. 제약: 목표 비율이 (1/2)^n 이 되게 유지하고 주기×n 이 정수 시간."
    creative: "(1) 「1/32 이하가 되는 최소 시간」으로 부등식화(★2) (2) 감소 비율을 「매시간 r 배」로 주고 6시간 뒤 절반이라는 조건에서 r^6=1/2 를 세워 r 를 남긴 채 풀게 하면 지수 표현 유지 EQV d1 ★3 (3) 두 종류 살충제의 반감기 비교(★3)."
```

```yaml
- id: RPM-ALG-0329
  page: 43
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    2500만 원 자동차의 중고가가 매년 20% 씩 떨어질 때 1024만 원 이하가 되는 최소 햇수.
  category: "감가 모델 2500·(4/5)^n ≤ 1024 → (4/5)^n ≤ 256/625=(4/5)^4 → n ≥ 4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 실생활 활용(반감기·증가율 모델)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    20% 하락은 매년 4/5 배이므로 2500·(4/5)^n ≤ 1024. 양변을 2500 으로 나눠 (4/5)^n ≤ 1024/2500=256/625=(4/5)^4, 밑<1 이라 n ≥ 4 → 4년. 비율 4/5 로 세우기와 1024/2500 을 (4/5)^4 로 알아보는 약분이 부담(Mₖ 2), 밑<1 방향(T-부호) 주의. 시험 구역 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2500·(4/5)^n ≤ 1024 → (4/5)^n ≤ (4/5)^4 → n ≥ 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$년'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구입가·하락률·기준가를 바꿀 수 있음. 제약: 기준가/구입가가 (1-r)^n 의 정확한 값이 되게(예: 하락률 10% 면 (9/10)^n · 구입가 10000 → 6561). 소수 계산이 아니라 분수 약분으로 닫히게."
    creative: "(1) 「1024만 원 미만」으로 바꿔 등호 배제 → 5년(T-경계 · ★2) (2) 하락률을 미지수로 두고 2년 뒤 가격에서 역산 후 다시 부등식(0305 형 ★2~3) (3) 두 차의 가격이 같아지는 시점(밑이 다른 두 지수식 비교)은 로그 없이는 안 닫히므로 비율을 제곱 관계로 설계할 것."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0330
  page: 44
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    y=3^x 위의 점 A, y=k·3^x 위의 점 B 에서 x축에 내린 수선의 발 C, D 로 만든 사각형 ACDB 가 넓이 4 인 정사각형일 때(그림 · A, B 는 제1사분면) 양수 k.
  category: "정사각형 변 2 → A 의 y 좌표 3^c=2 · D 의 x 좌표 c+2 → B: k·3^{c+2}=2 → 9k·3^c=2 → k=1/9"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「넓이 4 인 정사각형」이라는 도형 조건을 「A, B 의 y 좌표가 같고 2 · x 좌표 차가 2」라는 좌표 조건으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프 위의 점과 도형(정사각형 · 좌표 전환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 변이 2 이므로 A=(c, 2), B=(c+2, 2). A 가 y=3^x 위이니 3^c=2, B 가 y=k·3^x 위이니 k·3^{c+2}=9k·3^c=18k=2 → k=1/9. c 를 구하지 않고 3^c=2 를 그대로 대입하는 것이 요령이고, 그림에서 y=k·3^x 가 오른쪽(k<1)임을 읽어야 B 의 x 좌표가 c+2 로 잡힌다(T-부호). 도형 → 좌표 전환 RT d1. 서술형 ★3.
  tier: star_3
  mechanism_primary: "변 2 → A(c,2), B(c+2,2) → 3^c=2 · k·3^{c+2}=2 → k=1/9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{9}$'
  answer_source: "답지"
  figure: "crop:fig-0330.png"
  latex: latex-bank/rpm-alg/items/0330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)·정사각형 넓이(4)를 바꿀 수 있음. 제약: 넓이가 완전제곱이라 변이 정수이고, k=1/밑^{변} 이 되므로 답은 항상 밑의 거듭제곱 역수. 그림 라벨(A, B, C, D · 곡선 이름)은 고정."
    creative: "(1) 정사각형 대신 「가로:세로=2:1 직사각형」으로 바꾸면 변 길이 두 개 처리(★3) (2) k 를 주고 정사각형이 되는 A 의 x 좌표 c 를 물으면 3^c 를 실제로 구해야 하므로 로그 없이는 닫히지 않음 — 대수 범위에서는 k 를 답으로 유지 (3) 두 곡선을 y=3^x, y=3^{x-m} 으로 두고 m 을 묻게 하면 평행이동 해석 RT d1 ★3."
```

```yaml
- id: RPM-ALG-0331
  page: 44
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    이차계수 1 인 이차함수 f 가 x=-2 에서 최솟값 -1 을 가질 때, 정의역 -4 ≤ x ≤ 1 에서 y=(1/2)^{f(x)} 의 최솟값.
  category: "f(x)=(x+2)^2-1 결정 → 구간에서 f 의 최댓값 f(1)=8 → 밑<1 이라 f 최대에서 y 최소 (1/2)^8"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소(지수가 이차식 · 정의역 제한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    꼭짓점 조건에서 f(x)=(x+2)²-1. 구간 -4 ≤ x ≤ 1 에서 f 의 최댓값은 축에서 먼 끝 x=1 의 8(다른 끝 x=-4 는 3). 밑 1/2<1 이므로 f 가 최대일 때 y 최소 (1/2)^8=1/256. 밑<1 뒤집기(T-부호)와 끝점 비교(T-범위)가 함정인 절차형. 서술형 구역 ★3 출발·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "f(x)=(x+2)^2-1 → [-4,1] 에서 f 최대 8 (x=1) → 밑<1 → y 최소 (1/2)^8=1/256"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{256}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점(-2, -1)·정의역 끝점을 바꿀 수 있음. 제약: 두 끝점의 f 값이 달라 비교가 필요하고, 최댓값이 정수라 (1/2)^n 이 닫히게. 꼭짓점이 구간 안에 있으면 최댓값도 함께 묻는 변형 가능."
    creative: "(1) 최댓값을 물으면 f 의 최솟값 -1 (꼭짓점이 구간 안) → (1/2)^{-1}=2 (★2) (2) 밑을 2 로 바꾸면 방향이 정방향(★2) (3) f 를 「최솟값 -1」 대신 「f(-4)=3, f(1)=8」 두 값으로 주면 미정계수 연립 추가(★3)."
```

```yaml
- id: RPM-ALG-0332
  page: 44
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    부등식 (1/4)^x-m·(1/2)^x+n<0 의 해가 -3<x<-1 일 때 상수 m, n 에 대하여 mn.
  category: "t=(1/2)^x 치환 → 해 -3<x<-1 을 t 범위 2<t<8 로 전환(밑<1 방향 반전) → (t-2)(t-8)<0 전개 → m=10, n=16"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 해 -3<x<-1 에서 거꾸로 t=(1/2)^x 의 범위 2<t<8 을 읽고, 그 해를 갖는 이차부등식 (t-2)(t-8)<0 을 구성해 계수를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수부등식의 해가 주어졌을 때 미정계수(치환 이차부등식의 역구성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=(1/2)^x 로 두면 t²-mt+n<0. 밑 1/2<1 이라 -3<x<-1 은 (1/2)^{-1}<t<(1/2)^{-3} 즉 2<t<8 로 방향이 뒤집힌다(T-부호). 이 범위를 해로 갖는 이차부등식은 (t-2)(t-8)<0=t²-10t+16<0 이므로 m=10, n=16, mn=160. 해에서 계수를 거꾸로 세우는 BW d1. 서술형 ★3.
  tier: star_3
  mechanism_primary: "t=(1/2)^x → -3<x<-1 ⇔ 2<t<8 → (t-2)(t-8)<0 → m=10, n=16 → 160"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$160$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "해 구간(-3, -1)·밑(1/2)을 바꿀 수 있음. 제약: 구간 끝의 t 값 (1/2)^{끝} 이 정수가 되게 끝점을 정수로 두고, 밑<1 이면 t 범위의 순서가 뒤집힘을 답에 반영. m, n 은 그 t 범위의 합·곱."
    creative: "(1) 밑을 2 로 바꾸면 방향 반전이 사라져 T-부호가 빠짐(★2~3) (2) 해를 「x<-3 또는 x>-1」 로 주면 부등호 방향이 > 로 바뀌어 이차계수 부호까지 판단(★3) (3) 해가 「모든 실수」 또는 「없음」이 되는 m, n 조건으로 바꾸면 판별식 결합 ★3~4."
```

```yaml
- id: RPM-ALG-0333
  page: 44
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    모든 실수 x 에 대해 (1/2)^{x^2+3k} ≤ 4^{2-kx} 가 성립하도록 하는 실수 k 의 최댓값.
  category: "밑 2 로 통일 2^{-x^2-3k} ≤ 2^{4-2kx} → x^2-2kx+3k+4 ≥ 0 항등 → D/4=k^2-3k-4 ≤ 0 → -1 ≤ k ≤ 4"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건(밑 통일 → 이차부등식 항등 · 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1/2)^{x²+3k}=2^{-x²-3k}, 4^{2-kx}=2^{4-2kx} 로 통일하면 밑 2>1 이라 -x²-3k ≤ 4-2kx, 정리하면 x²-2kx+3k+4 ≥ 0 이 모든 실수 x 에서 성립 → D/4=k²-3k-4 ≤ 0 → (k-4)(k+1) ≤ 0 → 최대 4. 밑 통일·부호 정리·판별식의 정형 사슬이며 등호 포함으로 D ≤ 0 (T-경계). 통찰 없는 절차형이나 M_total 8, 서술형 → ★3.
  tier: star_3
  mechanism_primary: "밑 2 통일 → x^2-2kx+3k+4 ≥ 0 항등 → D/4 ≤ 0 → (k-4)(k+1) ≤ 0 → k 최대 4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 k 계수(3k, -kx)·상수(2)를 바꿀 수 있음. 제약: 정리된 이차식의 판별식이 k 의 이차식으로 정수 근 두 개를 갖게(예: k^2-3k-4)."
    creative: "(1) 밑을 (1/2) 와 (1/4) 로 두면 부호 반전이 두 번(★3) (2) 「성립하지 않는 실수 x 가 존재」로 뒤집으면 D>0 여집합(★3) (3) x 의 범위를 x>0 으로 제한하면 이차부등식이 반구간 항등이 되어 축 위치 분기 MI ★4."
```

### 실력 Up

```yaml
- id: RPM-ALG-0334
  page: 44
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    y=2^x, y=10·(1/2)^x 와 직선 x=a (a>2) 의 교점 A, B(그림)에 대해 AB<100 을 만족시키는 자연수 a 의 개수.
  category: "A(a, 2^a), B(a, 10·2^{-a}) → a>2 에서 A 가 위 → AB=2^a-10·2^{-a} 증가 → a=6 성립·a=7 불성립 → a=3,4,5,6 의 4개"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "u=2^a 치환 이차부등식 u^2-100u-10<0 을 근의 공식으로 푸는 갈래(√2510 처리) 대신, 좌변이 a 에 대해 증가함을 보고 자연수 a 를 직접 대입해 경계(a=6 성립 · a=7 불성립)를 찾는 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프와 선분의 길이(정수 조건 · 단조성 판단)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 점의 y 좌표 차 AB=2^a-10·2^{-a} (a>2 이면 2^a>4>10/4 라 A 가 위). 이 식은 a 가 커질수록 증가하므로 자연수를 넣어 a=6 에서 64-10/64<100, a=7 에서 128-10/128>100 → a=3, 4, 5, 6 의 4개. 치환 이차부등식 갈래는 근이 무리수라 비효율이고 단조성 갈래를 고르는 SC d1 이 핵심, a>2 조건과 경계 a=6 처리가 T-범위·T-경계. 실력 Up 구역 ★4 출발·조정 없음 → ★4.
    [분류 이슈] 통찰 SC d1 하나·표준 골조라 체감은 ★3 후보. 라벨은 구역대로 ★4.
  tier: star_4
  mechanism_primary: "AB=2^a-10·2^{-a} (a>2) → 증가함수 → a=6 성립 · a=7 불성립 → 자연수 a 4개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-0334.png"
  latex: latex-bank/rpm-alg/items/0334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(10)·상한(100)·조건(a>2)을 바꿀 수 있음. 제약: 상한이 2 의 거듭제곱 사이(2^6<100<2^7)에 놓여 경계가 자연수 대입으로 결정되고, a>2 조건이 A 가 위에 있음을 보장하게(교점 x 좌표보다 큰 하한). 그림 라벨(A, B, x=a) 고정."
    creative: "(1) AB 의 최솟값(a 실수)을 물으면 두 곡선의 교점 2^a=10·2^{-a} → 4^a=10 이 되어 로그 없이는 닫히지 않으므로 계수를 16 처럼 4 의 거듭제곱으로 조정(★3) (2) a<2 구간까지 포함하면 |AB| 절댓값 처리 MI 추가(★4) (3) 직선 x=a 대신 y=b 로 바꿔 x 좌표 차를 묻게 하면 역함수 관점 RT d1 ★4."
```

```yaml
- id: RPM-ALG-0335
  page: 44
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    y=2^x 과 y=-2x^2+2 의 두 교점 (x_1,y_1), (x_2,y_2) (x_1<x_2) 에 대한 보기 ㄱ. x_2>1/2 · ㄴ. y_2-y_1<x_2-x_1 · ㄷ. √2/2<y_1y_2<1 중 옳은 것. 5지선다.
  category: "함숫값 비교로 교점 범위 -1<x_1<0, 1/2<x_2<1 압축 → ㄴ 은 포물선 위 두 점으로 기울기 -2(x_1+x_2) 전환 → ㄷ 은 y_1y_2=2^{x_1+x_2} 와 |x_2|<|x_1| 대칭 논증"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점을 구하지 않고 x=-1, 0, 1/2, 1 에서 두 함숫값의 대소를 비교해 그래프 교차 위치를 -1<x_1<0, 1/2<x_2<1 로 압축(ㄱ 판정)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 의 y_2-y_1 을 지수함수가 아니라 포물선 식으로 읽어 -2(x_2-x_1)(x_1+x_2) 로 바꾸고, 조건을 x_1+x_2>-1/2 로 동치 변환한 뒤 1단계 범위로 판정"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 의 y_1y_2=2^{x_1+x_2} 에서 상한을 위해 포물선의 y축 대칭과 2^x 의 증가성으로 2^{x_2}>2^{x_1} → x_2^2<x_1^2 → x_2<-x_1 즉 x_1+x_2<0 을 끌어냄"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "지수함수와 이차함수 그래프의 교점(교점 범위 압축 · 보기 판정 · 기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점은 닫힌 식으로 못 구하므로 함숫값 비교로 범위를 좁힌다: x=1/2 에서 포물선 3/2>√2, x=1 에서 2>0 이므로 1/2<x_2<1 (ㄱ 참); x=-1 에서 1/2>0, x=0 에서 1<2 이므로 -1<x_1<0. ㄴ 은 두 점이 포물선 위에 있음을 써서 (y_2-y_1)/(x_2-x_1)=-2(x_1+x_2)<1 ⇔ x_1+x_2>-1/2 이고 범위에서 성립. ㄷ 은 y_1y_2=2^{x_1+x_2} 이며 2^{x_2}>2^{x_1} 에서 x_2^2<x_1^2 → x_1+x_2<0, ㄴ 과 합쳐 -1/2<x_1+x_2<0 → √2/2<y_1y_2<1. 셋 다 참 ⑤. 통찰 3개(RT d1·EQV d2·SYM d2)·M_total 9 로 이 범위 최고 난도.
    [분류 이슈] 통찰 3 + SYM 포함으로 ★5 자격 조건을 만족하나 평가원 4점 표준 문항이고 각 통찰이 d1~2 라 ★4 유지. 카탈로그 확정 시 재검토.
  tier: star_4
  mechanism_primary: "함숫값 비교 → -1<x_1<0, 1/2<x_2<1 → ㄴ: 포물선 기울기 -2(x_1+x_2)<1 → ㄷ: 2^{x_1+x_2} 와 x_2^2<x_1^2 → -1/2<x_1+x_2<0 → ⑤"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 계수(-2x^2+2)·지수함수 밑을 바꿀 수 있음. 제약: 포물선은 y축 대칭(일차항 없음)이어야 ㄷ 의 대칭 논증이 살고, 교점이 정확히 두 개이며 비교 지점(x=1/2 등)에서 함숫값 대소가 근호 한 번으로 판정되게. 보기 상수(1/2, √2/2)는 범위 압축 결과와 맞춰야 함."
    creative: "(1) ㄷ 을 y_1+y_2 의 범위로 바꾸면 곱 → 합이라 지수법칙 대신 포물선 대입 필요(★4) (2) 포물선을 y=-2x^2+2x+2 처럼 비대칭으로 두면 SYM 이 사라져 ㄷ 이 안 닫힘 → ㄱ·ㄴ 만으로 ★3 (3) 두 함수를 y=2^x 와 y=-x^2+2 로 바꾸면 비교 지점이 달라져 보기 상수를 재설계해야 하며 골조 유지 ★4."
```

```yaml
- id: RPM-ALG-0336
  page: 44
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    정의역 -1 ≤ x ≤ 2 에서 함수 y=a^{|x-1|+2} (a>0) 의 최댓값이 1/4 일 때 최솟값.
  category: "지수 |x-1|+2 의 범위 [2,4] → 밑 a 범위 분기 → a>1 이면 a^4=1/4 로 모순 기각 → 0<a<1 에서 a^2=1/4 → a=1/2 → 최소 a^4=1/16"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑 a 가 미정이라 a>1 (지수 최대에서 최대) 과 0<a<1 (지수 최소에서 최대) 두 시나리오를 모두 세움"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a>1 시나리오는 a^4=1/4 에서 a<1 이 되어 가정과 모순 → 기각, 0<a<1 시나리오만 채택(검증 없이 진행하면 최솟값 1/2 오답)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 최대·최소(밑이 미정 · 절댓값 지수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    -1 ≤ x ≤ 2 에서 |x-1| ∈ [0, 2] 이므로 지수는 [2, 4]. a>1 이면 최댓값 a^4=1/4 → a<1 로 모순, 0<a<1 이면 최댓값은 지수 최소 2 에서 a²=1/4 → a=1/2, 최솟값은 지수 최대 4 에서 (1/2)^4=1/16. 밑 분기(MI d1)와 한 가지 기각(VF d1)이 골조이고 절댓값 지수 범위(T-범위)·밑<1 방향(T-부호)이 함정. 실력 Up 구역 ★4 출발·조정 없음 → ★4.
    [분류 이슈] 「밑 미정 지수함수의 최대·최소」 표준 골조이고 통찰 둘 다 d1 이라 ★3 후보. 라벨은 구역대로 ★4.
  tier: star_4
  mechanism_primary: "지수 범위 [2,4] → a 분기 → a>1 기각 → a^2=1/4 → a=1/2 → 최소 (1/2)^4=1/16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·절댓값 중심(x-1)·지수 상수(+2)·최댓값(1/4)을 바꿀 수 있음. 제약: 지수 범위의 하한·상한이 정수이고, 최댓값이 a^{하한} 꼴로 a 가 간단한 분수가 되게. 최댓값을 1 보다 크게 주면 a>1 갈래가 살아남아 골조가 뒤집힘."
    creative: "(1) 최댓값을 4 로 바꾸면 a>1 갈래 채택·0<a<1 기각으로 같은 MI+VF 골조(★4) (2) 최댓값과 최솟값의 합을 주면 a 의 방정식이 4차가 되어 치환 필요(★4) (3) 정의역을 x ≤ 2 처럼 한쪽만 제한하면 지수 범위가 [2, ∞) 로 최댓값 존재 자체가 밑 조건이 되어 EQV 추가 ★4~5."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 2 · ★2 21 · ★3 13 · ★4 4 · ★5 0
- 통찰형 14 · 절차형 26 · premium 0
- 구역별: 유형 17~19 (10문) ★1 1 · ★2 6 · ★3 2 · ★4 1 / 시험에 꼭 나오는 문제 (23문) ★1 1 · ★2 15 · ★3 7 / 서술형 주관식 (4문) ★3 4 / 실력 Up (3문) ★4 3
- type_hint 상위: 「지수함수의 최대·최소」 계열 6(단조성 0315 · 지수 이차식 0316·0331 · 치환 0317·0319 · 밑 미정 0336) · 「밑에 미지수가 포함된 지수부등식」 5(0297~0300 · 0326) · 「지수부등식이 항상 성립할 조건」 5(0301~0303 · 0327 · 0333) · 「지수함수의 실생활 활용」 5(0304~0306 · 0328 · 0329) · 「지수함수 그래프의 대칭·평행이동과 지나는 점」 2(0309 · 0310)
- 통찰 유형 빈도(라벨 18개): I-EQV 9(0301 · 0302 · 0303 · 0306 · 0311 · 0312 · 0322 · 0323 · 0335) · I-RT 3(0313 · 0330 · 0335) · I-VF 2(0323 · 0336) · I-BW 1(0332) · I-SC 1(0334) · I-MI 1(0336) · I-SYM 1(0335)
- 그림: 5문(`crop:fig-0310.png` · `crop:fig-0312.png` · `crop:fig-0313.png` · `crop:fig-0330.png` · `crop:fig-0334.png`)
- 전사 답 확인 필요: 없음(40문 모두 풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(2단 이상 어긋난 문항은 없음).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0306 | 벤더 「상」 → ★4 출발이나 통찰 1개(EQV d1)·M_total 7 → 체감은 ★3~4 경계. 라벨 ★4 유지 | ★3 / ★4 |
| RPM-ALG-0312 | 착안 한 줄(EQV d1)·M_total 5 → ★2 후보. a, p, q 를 못 구하는 상황에서 지수법칙 착안이 문제의 전부라 ★3 | ★2 / ★3 |
| RPM-ALG-0323 | 이종 부호 경우 검토를 MI 로 따로 세면 통찰 3 → ★4 후보. 근의 곱 부호로 즉시 소거되므로 VF 안에 포함해 ★3 | ★3 / ★4 |
| RPM-ALG-0327 | 유형 소속: 「지수부등식 항상 성립」(유형 18) 아래 실렸으나 골조는 x 이차부등식 항등(D<0) + 지수부등식 t<2. 카탈로그에서 하위 유형으로 분리할지 결정 | ★3 |
| RPM-ALG-0334 | 실력 Up ★4 출발이나 통찰 SC d1 하나·표준 골조(단조성 + 자연수 대입) → ★3 후보 | ★3 / ★4 |
| RPM-ALG-0335 | 통찰 3(RT d1 · EQV d2 · SYM d2) + SYM 포함으로 ★5 자격 조건 충족. 평가원 4점 표준·각 통찰 d1~2 라 ★4 유지, 카탈로그 확정 시 재검토 | ★4 / ★5 |
| RPM-ALG-0336 | 실력 Up ★4 출발·MI+VF 둘 다 d1 이나 「밑 미정 지수함수 최대·최소」 표준 골조 → ★3 후보 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 밑 미지수 지수부등식 5 · 항상 성립 조건 5 · 실생활 활용 5 · 최대·최소 계열 6 · 그래프 이동 2. 그 밖에 치환 골조(0317 · 0319 · 0321 · 0322 · 0323 · 0325 · 0332)가 7문에 걸쳐 있어 「치환 t=a^x」는 유형이 아니라 여러 유형이 공유하는 도구로 취급하는 편이 맞다.
- 따로 세울 유형: (a) 「지수방정식이 오직 하나의 실근을 가질 조건」(0323 · VF 골조)과 「지수방정식의 근과 계수 관계」(0322 · EQV 골조)는 같은 치환이지만 통찰 구조가 달라 별도 유형. (b) 「항상 성립 조건」은 치환 이차식 최솟값형(0301~0303 · 범위 경계 0303 은 depth 로 구분) / 밑 통일 → 판별식형(0333) / 계수가 지수식인 이차부등식 항등형(0327) 세 하위 유형으로 분리 권장. (c) 「해가 주어졌을 때 미정계수」(0332 · BW)는 방정식·부등식 공용 유형으로 세울 것.
- 통합해도 될 유형: 실생활 활용 5문은 「반감·배율 모델 → 지수 비교」 단일 유형으로 묶고 0306(두 모델 결합 · 삼차 치환)만 ★4 변형으로 표기. 최대·최소의 단조성형(0315)과 지수 이차식형(0316 · 0331)은 하나로 통합 가능, 치환형(0317 · 0319)과 밑 미정형(0336)은 분리. 밑 통일 지수방정식(0320)·지수부등식(0324)·대소 비교(0314)는 「밑 통일」 한 유형의 발문 변형.
- 그래프 문항(0309 · 0310 이동, 0312 함숫값, 0313 넓이, 0330 도형, 0334 선분, 0335 교점)은 「지수함수 그래프와 도형」 대유형 아래 하위 유형으로 두고, 0335 처럼 교점을 닫힌 식으로 못 구하는 「범위 압축」 골조는 ★4~5 변별 슬롯 후보로 따로 표기.
