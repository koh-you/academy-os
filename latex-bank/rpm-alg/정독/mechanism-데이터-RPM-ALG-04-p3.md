---
name: mechanism-데이터-RPM-ALG-04-p3
description: RPM 대수 04 로그함수(3/3 · 유형 18 · 유형 UP 19~21 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 04 로그함수
  unit_code: ALG-04
  part: "3/3"
  extract_range: "56~61쪽 · 0414~0456"
  total_problems: 43
  unit_total: 120
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 04 로그함수 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 04 로그함수 단원의 마지막 범위(56~61쪽 · 0414~0456 · 43문)를 다룬다. 구역은 「유형 18 지수에 로그가 포함된 부등식」(3문) · 「유형 UP 19 로그부등식이 항상 성립할 조건」(3문) · 「유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용」(4문) · 「유형 UP 21 실생활 활용」(3문) · 「시험에 꼭 나오는 문제」(23문 · 중단원 종합) · 「서술형 주관식」(4문) · 「실력 Up」(3문)이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·서술형·기출)로 나타나며, 이 범위에서는 유형 구역에 「중」「상중」 표시가, 종합 구역에는 「중요」「교육청 기출」「평가원 기출」 태그가 있다.

★ 라벨은 구역 출발점(유형 ★2 · 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 — 기출·단원 밖 도구·M_total ≥ 7 이면 ★3 · 서술형 ★3 · 실력 Up ★4)에서 통찰 0·M_total ≤ 5 이면 −1 후보, 통찰 2개 이상(그중 depth 2 이상 포함)이면 +1 후보를 적용했다. −1 후보는 단일 공식 대입·읽기 문항에 적용했고, 합성·역함수·매개변수 구조가 있는 문항(0428·0435·0437·0438·0439)은 출발점을 유지했다. 그 결과 유형 UP 20 의 세 문항과 0417·0425 는 절차형 ★2 로 내려갔고 0433 은 ★4 로 올라갔으며 0456 은 판별식 절차로도 정답이 나와 ★3 으로 두었다 — 모두 「분류 이슈 목록」에 기록했다. 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠고, `depth_score` 는 schema §2.4.1 의 max(depth)×2+avg(depth) 산식을 썼다. 그림 8문(0429·0433·0436·0437·0445·0450·0454·0455)은 크롭 이미지를 확인해 라벨·배치를 rationale·variation_notes 에 반영했다. 답은 43문 모두 재계산 결과가 전사 answer 와 일치했다.

## 문항 데이터

### 유형 18 지수에 로그가 포함된 부등식

```yaml
- id: RPM-ALG-0414
  page: 56
  vendor_label: "유형 18 지수에 로그가 포함된 부등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    부등식 x^{log_3 x} < 9x 를 만족시키는 정수 x 의 개수. 5지선다.
  category: "양변에 log_3 → log_3 x 의 이차부등식 → 구간 → 정수 개수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(양변에 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 에서 양변에 log_3 을 취하면 t=log_3 x 에 대해 t^2<2+t, 즉 (t-2)(t+1)<0 → -1<t<2 → 1/3<x<9. 정수는 1~8 의 8개. 유형 18 의 표준 절차(양변 로그 → 치환 이차부등식 → 역변환)이며 통찰 없음. 함정은 진수 조건 x>0 과 x<9 의 열린 경계 두 가지. 유형 대표 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x>0 · 양변 log_3 → t^2-t-2<0 → -1<t<2 → 1/3<x<9 → 정수 8개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 우변 9x 의 계수(3^n·x 또는 3^n·x^m)를 바꾸면 t^2-mt-n<0 이 됨. 제약: t 의 이차식이 정수 근으로 인수분해되고 구간 3^p<x<3^q 안의 정수 개수가 선택지에 들어가도록 q 를 작게(9·27) 유지."
    creative: "(1) 부등호 방향을 바꿔 x^{log_3 x}>9x 로 두면 해가 두 구간(0<x<1/3 또는 x>9)이 되어 정수 x 의 최솟값을 묻기(★2 · T-범위 강화) (2) 밑을 1/3 로 바꾸면 로그를 취할 때 부호 반전이 생겨 Mₜ 상승(★2~3) (3) 우변을 x^{log_3 9} 처럼 지수 쪽에도 로그를 두면 교환 성질 인식이 필요해 RT d1 통찰형 ★3."
```

```yaml
- id: RPM-ALG-0415
  page: 56
  vendor_label: "유형 18 지수에 로그가 포함된 부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부등식 x^{log x+3} ≥ 10000 의 해.
  category: "양변에 상용로그 → (log x)^2+3log x-4 ≥ 0 → 두 구간 역변환"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(양변에 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 log 를 취하면 t=log x 에 대해 t(t+3) ≥ 4, (t+4)(t-1) ≥ 0 → t ≤ -4 또는 t ≥ 1 → 0<x ≤ 1/10000 또는 x ≥ 10. 0414 와 같은 골조에 답이 두 구간·등호 포함이라는 차이. 진수 조건 0<x 를 답에 넣는 T-범위와 등호 처리 T-경계. 통찰 없음 · M_total 6 → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "양변 log → t^2+3t-4≥0 → t≤-4 또는 t≥1 → 0<x≤10^{-4} 또는 x≥10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<x\le\dfrac{1}{10000}$ 또는 $x\ge 10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 +3 과 우변 10^4 를 바꾸면 t^2+pt-q≥0. 제약: 정수 근으로 인수분해되게 (p, q) 선택(예: +1, 100 → (t+2)(t-1)). 우변이 1 미만이면 log 값이 음수가 되어 부호 함정이 추가됨."
    creative: "(1) 부등호를 < 로 바꿔 해가 한 구간(10^{-4}<x<10)이 되게 하고 정수 해 개수를 묻기(★2) (2) 밑을 x 대신 x^2 이나 √x 로 두어 log x^2=2log x 표기 함정 추가(★2) (3) 해집합이 {x | x≥10} 이 되도록 하는 지수의 상수 k 를 역으로 묻기(BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0416
  page: 56
  vendor_label: "유형 18 지수에 로그가 포함된 부등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    2^{log x}·x^{log 2}-3(2^{log x}+x^{log 2})+8>0 의 해가 0<x<α 또는 x>β 일 때 αβ. 5지선다.
  category: "x^{log 2}=2^{log x} 통일 → A=2^{log x} 이차부등식 → A<2 또는 A>4 → x 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^{log 2}=2^{log x}(교환 성질)로 두 항을 한 변수 A=2^{log x} 로 통일"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(a^{log b}=b^{log a} 치환형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a^{log b}=b^{log a} 로 x^{log 2}=2^{log x} 임을 보면 A=2^{log x}(>0) 에 대해 A^2-6A+8>0, (A-2)(A-4)>0 → A<2 또는 A>4. 2^{log x}<2 → log x<1 → 0<x<10, 2^{log x}>4 → x>100. α=10, β=100 → αβ=1000. 교환 성질 인식 RT d1 한 개 · 이후는 표준 절차 · M_total 5 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x^{log 2}=2^{log x}=A → A^2-6A+8>0 → A<2 또는 A>4 → x<10 또는 x>100 → αβ=1000"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수 -3·+8 을 바꿔 (A-p)(A-q) 꼴로(p, q 는 2 의 거듭제곱: 2·8, 4·8) 두면 α, β 가 10 의 거듭제곱으로 정리됨. 제약: p, q>0 이어야 두 구간 모두 살아남고 αβ 가 선택지의 10^n 꼴이 됨."
    creative: "(1) 밑 2 와 진수 x 대신 3^{log x} 와 x^{log 3} 으로 바꿔도 골조 동일(★3) (2) 부등식 대신 =0 방정식으로 두고 두 근의 곱을 묻기(★2~3) (3) 교환 성질을 문제에 힌트로 명시하면 RT 통찰이 사라져 ★2 · 반대로 곱 항을 4^{log x} 로 제시하면 4^{log x}=(2^{log x})^2 변환이 추가돼 ★3~4."
```

### 유형 UP 19 로그부등식이 항상 성립할 조건

```yaml
- id: RPM-ALG-0417
  page: 56
  vendor_label: "유형 UP 19 로그부등식이 항상 성립할 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    모든 양수 x 에 대하여 (log_2 x)^2+8log_2 x+8log_2 k>0 이 성립하는 양수 k 의 범위.
  category: "t=log_2 x 는 모든 실수 → 이차식 항상 양 ↔ D<0 → log_2 k>2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(치환 → 판별식·최대최소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 가 모든 양수를 움직이면 t=log_2 x 는 모든 실수를 움직이므로 t^2+8t+8log_2 k>0 이 항상 성립 ↔ D/4=16-8log_2 k<0 ↔ log_2 k>2 ↔ k>4. 「항상 성립 ↔ 판별식 음」의 표준 절차 3단계, 매개변수 k 하나. 통찰 없음·M_total 5 → 유형 UP 출발점 ★3 에서 −1 → ★2. [분류 이슈] 유형 UP 대표문제이나 절차형 저노동 — ★2 로 기록.
  tier: star_2
  mechanism_primary: "t=log_2 x ∈ R → t^2+8t+8log_2 k>0 항상 ↔ D/4<0 → log_2 k>2 → k>4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k>4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 8 과 상수항의 배수 8 을 바꾸면 D/4=(p/2)^2-q·log_2 k<0. 제약: 결과가 log_2 k>정수 가 되도록 (p/2)^2 이 q 의 배수가 되게 함(예: 6, 3 → log_2 k>3)."
    creative: "(1) 부등식을 ≥0 으로 바꿔 등호(D≤0 → k≥4)를 묻기(★2 · T-경계) (2) 밑을 1/2 로 두어 t=log_{1/2} x 여도 t 는 여전히 모든 실수임을 확인시키기(★2~3 · 부호 함정) (3) 정의역을 x≥1 로 제한하면 t≥0 구간에서의 최솟값 판단이 필요해 MI/EQV 통찰이 생기며 ★3~4."
```

```yaml
- id: RPM-ALG-0418
  page: 56
  vendor_label: "유형 UP 19 로그부등식이 항상 성립할 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    모든 양수 x 에 대하여 log_{1/5} x·(log_5 x+10) ≤ 25log_5 k 가 성립하는 양수 k 의 최솟값. 5지선다.
  category: "밑 1/5 → -t → 좌변 -t^2-10t 의 최댓값 25 ≤ 25log_5 k → k≥5"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(치환 → 판별식·최대최소)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log_{1/5} x=-log_5 x=-t 이므로 좌변은 -t^2-10t=-(t+5)^2+25, 모든 실수 t 에서 최댓값 25. 항상 성립하려면 25 ≤ 25log_5 k → log_5 k ≥ 1 → k ≥ 5, 최솟값 5. 밑 변환의 부호(T-부호)와 「모든 t 에 대해 f(t) ≤ C ↔ max f ≤ C」 표준 절차. 통찰 없음이나 M_total 6 이라 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log_{1/5} x=-t → -t^2-10t ≤ 25log_5 k 항상 ↔ max(-t^2-10t)=25 ≤ 25log_5 k → k≥5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5, 상수 10, 우변 계수 25 를 바꾸면 최댓값 (p/2)^2 ≤ c·log_5 k. 제약: (p/2)^2/c 가 정수여야 k 가 5 의 정수 거듭제곱(예: p=8, c=16 → log_5 k ≥ 1)."
    creative: "(1) 부등호를 ≥ 로 바꾸면 좌변에 최솟값이 없어 성립 불가 — 함정 보기로 사용(★3) (2) 우변을 log_5 k^{25} 로 표기해 표기 함정 추가(★3) (3) x 의 범위를 1≤x≤25 로 제한하면 t∈[0,2] 구간 최댓값 판단이 필요해 EQV d1 통찰형 ★3."
```

```yaml
- id: RPM-ALG-0419
  page: 56
  vendor_label: "유형 UP 19 로그부등식이 항상 성립할 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    모든 양수 x 에 대하여 x^{log_2 x} ≥ (8x)^{4k} 가 성립하는 실수 k 의 범위.
  category: "양변 log_2 → t^2-4kt-12k ≥ 0 항상 ↔ D/4 ≤ 0 → k(k+3) ≤ 0"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(치환 → 판별식·최대최소)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 log_2 를 취하면 t=log_2 x 에 대해 t^2 ≥ 4k(3+t), 즉 t^2-4kt-12k ≥ 0 이 모든 실수 t 에서 성립 ↔ D/4=4k^2+12k ≤ 0 ↔ -3 ≤ k ≤ 0. 유형 18(양변 로그)과 유형 UP 19(항상 성립 ↔ 판별식)의 결합이지만 둘 다 표준 절차. 등호 포함(D ≤ 0)과 t 가 모든 실수라는 점이 함정. 통찰 없음·M_total 7 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 log_2 → t^2-4k(t+3) ≥ 0 ∀t ↔ D/4=4k^2+12k ≤ 0 → -3≤k≤0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-3\le k\le 0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8x 의 8(=2^3)과 지수 4k 를 바꾸면 D/4 가 k 의 다른 이차식. 제약: 우변 상수는 밑 2 의 거듭제곱, 지수 계수는 짝수로 두어 D/4 가 k 의 정수 계수 이차식으로 정리되게 함."
    creative: "(1) 부등호를 > 로 바꿔 등호 처리(D<0 → -3<k<0)를 묻기(★3) (2) 우변을 8^{4k}·x^{k} 처럼 지수를 분리해 log_2 정리 단계 추가(★3) (3) 「모든 양수 x」를 「x≥1」로 바꾸면 t≥0 에서 이차식 ≥0 조건(축 위치·f(0) 분기)이 필요해 MI d2 통찰형 ★4."
```

### 유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용

```yaml
- id: RPM-ALG-0420
  page: 57
  vendor_label: "유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    x 에 대한 이차방정식 x^2-x·log a+log a+3=0 이 실근을 갖지 않도록 하는 양수 a 의 범위.
  category: "D<0 → (log a)^2-4log a-12<0 → -2<log a<6 → a 구간"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 근의 판별(판별식 → 로그부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D=(log a)^2-4(log a+3)<0 → t=log a 에 대해 (t-6)(t+2)<0 → -2<t<6 → 10^{-2}<a<10^6. 로그를 계수로 갖는 이차방정식의 판별식 절차 3단계·통찰 없음·M_total 5 → 유형 UP 출발점 ★3 에서 −1 → ★2. [분류 이슈] 유형 UP 20 대표문제이나 판별식 절차형 — ★2 로 기록.
  tier: star_2
  mechanism_primary: "D<0 → t^2-4t-12<0 (t=log a) → -2<t<6 → 1/100<a<10^6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{100}<a<1000000$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항의 log a 계수와 상수 3 을 바꾸면 D 가 t 의 다른 이차식. 제약: 정수 근 인수분해 · 결과 구간이 10^p<a<10^q 로 정리 · a>0 조건이 구간 안에 자동 포함되게(하한이 양수)."
    creative: "(1) 「서로 다른 두 실근」으로 바꾸면 D>0 이라 해가 두 구간이 되고 a>0 결합이 필요(0448 골조 ★2) (2) 「두 근이 모두 양수」로 바꾸면 D≥0·합>0·곱>0 세 조건 결합 → CON/EQV 통찰형 ★3 (3) 밑을 log_{1/10} 으로 바꾸면 부호 반전 함정 추가(★2~3)."
```

```yaml
- id: RPM-ALG-0421
  page: 57
  vendor_label: "유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    x^2-x·log a+2log a-3=0 이 중근을 갖도록 하는 모든 양수 a 의 값의 곱. 5지선다.
  category: "D=0 → (log a)^2-8log a+12=0 → log a=2, 6 → a 의 곱 10^8"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 근의 판별(판별식 → 로그부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D=(log a)^2-4(2log a-3)=t^2-8t+12=(t-2)(t-6)=0 → log a=2, 6 → a=100, 10^6 → 곱 10^8. 두 근의 합 8 을 근과 계수의 관계로 바로 읽어 10^8 을 얻을 수도 있으나 필수 통찰은 아님. 절차형·M_total 5 → 유형 UP 출발점 ★3 에서 −1 → ★2. [분류 이슈] 0420 과 같은 사유로 ★2 기록.
  tier: star_2
  mechanism_primary: "D=0 → t^2-8t+12=0 → t=2, 6 → a=10^2·10^6=10^8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2log a 와 -3 을 바꿔 t^2-pt+q=0 의 두 정수 근 합 p 가 답의 지수. 제약: 두 근이 서로 다른 정수(중근이면 「모든 a 의 곱」이 하나뿐) · 선택지는 10^n."
    creative: "(1) 「곱」 대신 「합」을 물으면 근을 실제로 구해야 해 근과 계수 우회로가 막힘(★2) (2) 두 근이 무리수가 되도록 계수를 두면 log a_1+log a_2=p 만 가능해 RT d1 통찰형 ★3 (3) 중근의 값까지 함께 묻기(x=log a/2)로 단계 추가(★2~3)."
```

```yaml
- id: RPM-ALG-0422
  page: 57
  vendor_label: "유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    x^2-2(1+log_2 a)x+1-(log_2 a)^2>0 이 항상 성립하도록 하는 양수 a 의 범위.
  category: "D/4<0 → 2t(t+1)<0 (t=log_2 a) → -1<t<0 → 1/2<a<1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차부등식이 항상 성립할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최고차항 계수 1>0 이므로 항상 양 ↔ D/4=(1+t)^2-(1-t^2)=2t^2+2t<0 → -1<t<0 → 2^{-1}<a<2^0. 전개·정리가 한 줄이고 절차 3단계. 「서술형」 태그는 풀이 서술 요구일 뿐 골조는 절차형. M_total 5 → ★3 에서 −1 → ★2. [분류 이슈] 0420 과 같은 사유로 ★2 기록.
  tier: star_2
  mechanism_primary: "D/4=(1+t)^2-(1-t^2)=2t(t+1)<0 → -1<t<0 → 1/2<a<1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}<a<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (1+log_2 a) 의 상수 1 과 상수항의 1 을 바꾸면 D/4 가 t 의 다른 이차식(현재 2t^2+2t). 제약: D/4 가 정수 근 인수분해되고 구간 끝이 2 의 정수 거듭제곱이 되게 · a>0 이 구간에 자동 포함되게."
    creative: "(1) 최고차항 계수를 (log_2 a)x^2 로 바꾸면 계수 부호·0 분기가 생겨 MI d2 통찰형 ★3(0423 골조) (2) 「항상 성립」을 「해가 없다」로 바꾸면 부등호 반전 해석 EQV d1 ★2~3 (3) 이차식의 최솟값이 양수일 때 그 최솟값의 최댓값을 물어 단계 추가(★3)."
```

```yaml
- id: RPM-ALG-0423
  page: 57
  vendor_label: "유형 UP 20 로그를 포함한 이차방정식과 이차부등식에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    모든 실수 x 에 대하여 (1-log_3 a)x^2-2(1-log_3 a)x+log_3 a>0 이 성립하는 모든 자연수 a 의 곱.
  category: "최고차항 계수 0 분기(a=3) + 계수>0·D/4<0 → 1/2<log_3 a<1 → a=2 → 곱 6"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이차부등식」이라 하지 않았으므로 최고차항 계수 1-log_3 a=0 (a=3) 인 경우를 따로 세우면 1>0 이 항상 참 → a=3 도 답에 기여"
  insight_count: 1
  depth_score: 6.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차부등식이 항상 성립할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=log_3 a. (i) 1-t=0 이면 부등식이 1>0 으로 항상 참 → a=3. (ii) 1-t>0 이고 D/4=(1-t)^2-(1-t)t=(1-t)(1-2t)<0 → 1/2<t<1 → √3<a<3 → 자연수 a=2. 곱 2·3=6. 계수 0 분기를 놓치면 답이 2 가 되므로 MI d2 가 변별 지점. (1-t) 공통인수 정리와 √3<a<3 의 자연수 판단(T-경계·T-범위). M_total 8·통찰 1 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "t=log_3 a · (1-t)=0 분기 a=3 ⊕ (1-t)>0 & (1-t)(1-2t)<0 → 1/2<t<1 → a=2 → 곱 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 계수 구조 (1-t), -2(1-t), t 를 (p-t), -2(p-t), q·t 로 바꿀 수 있음. 제약: 계수 0 인 밑의 거듭제곱(a=3^p)이 자연수이고 그때 부등식이 참이 되게(상수항>0) 유지 · 구간에서 나오는 자연수가 1~2개로 답이 작게."
    creative: "(1) 「이차부등식」이라고 명시하면 a=3 분기가 사라져 절차형 ★2 (2) 부등호를 ≥0 으로 바꾸면 D/4≤0 과 계수 0 분기 모두 경계 처리(★3) (3) 「모든 실수 x」를 「x>0」으로 제한하면 축·경계 분기까지 필요해 MI d2 + EQV → ★4."
```

### 유형 UP 21 로그방정식과 로그부등식의 실생활에의 활용

```yaml
- id: RPM-ALG-0424
  page: 57
  vendor_label: "유형 UP 21 로그방정식과 로그부등식의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    올해 매출 100억(작년 대비 28% 증가). 매년 28% 씩 증가할 때 올해의 5배가 되는 것은 몇 년 후인지. log 2=0.3.
  category: "1.28^n=5 → n·log 1.28=log 5 → 1.28=2^7/100 → n·0.1=0.7 → 7"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1.28=2^7/10^2, 5=10/2 로 소인수 분해해 주어진 log 2 하나로 두 로그값을 표현"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그의 실생활 활용(증가·감소율 · 몇 년/몇 회)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n 년 후 매출 100·1.28^n=500 → 1.28^n=5 → n·log 1.28=log 5. log 1.28=log 128-2=7log 2-2=0.1, log 5=1-log 2=0.7 → n=7. 「작년 대비 28% 증가」는 올해 매출 100억이 기준임을 흐리는 서술일 뿐 계산에 쓰이지 않음. 128=2^7 을 알아보는 RT d1 이 유일한 통찰 · M_total 5 → 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "100·1.28^n=500 → n·log 1.28=log 5 → n(7log2-2)=1-log2 → n=0.7/0.1=7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$년'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증가율 28%(1.28=2^7/100)를 25%(1.25=10/8 → 1-3log2=0.1)·60%(1.6=2^4/10 → 0.2)로, 배수 5 를 2·4·8 로 바꿀 수 있음. 제약: 주어진 log 2 값(0.3)만으로 두 로그가 계산되고 n 이 정수로 떨어지게 조합."
    creative: "(1) 「n 년 후 처음으로 5배 이상」 부등식으로 바꾸면 정수 올림 판단(T-경계) 추가 ★3 (2) log 2=0.3010 처럼 근사값을 주면 나눗셈이 정수로 안 떨어져 올림 판단·계산 부담 ↑(0449 골조 ★3) (3) 「작년 매출 기준 5배」로 기준을 바꾸면 1.28^{n+1}=5 의 서술 해석 EQV d1 추가 ★3."
```

```yaml
- id: RPM-ALG-0425
  page: 57
  vendor_label: "유형 UP 21 로그방정식과 로그부등식의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    매년 일정 비율 x% 씩 채굴량을 늘려 10년 후 올해의 2배가 되게 할 때 x. log 1.07=0.03, log 2=0.3.
  category: "(1+x/100)^10=2 → 10·log(1+x/100)=0.3 → log(1+x/100)=0.03=log 1.07 → x=7"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 실생활 활용(증가·감소율 · 몇 년/몇 회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건 ㈎㈏ 를 (1+x/100)^10=2 로 옮기고 로그를 취하면 log(1+x/100)=0.3/10=0.03, 주어진 log 1.07=0.03 과 비교해 1+x/100=1.07 → x=7. 주어진 로그값이 답의 밑을 그대로 가리키므로 소인수 분해 통찰도 없음. 절차 3단계·M_total 4 → 유형 UP 출발점 ★3 에서 −1 → ★2. [분류 이슈] 유형 UP 이나 주어진 값 대조만으로 끝나는 절차형 — ★2 기록.
  tier: star_2
  mechanism_primary: "(1+x/100)^10=2 → log(1+x/100)=0.03=log 1.07 → x=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기간 10년·배수 2·주어진 log 1.07=0.03 을 함께 바꿀 것(예: 5년·2배·log 1.15=0.06). 제약: log(배수)/기간 이 주어진 log(1+r) 값과 정확히 일치해야 함."
    creative: "(1) log 1.07 을 주지 않고 log 2 와 log 1.4=0.15 등을 주면 소인수 분해·역산 필요(★2~3) (2) 「최소 몇 년 후 2배 이상」으로 바꾸면 부등식·올림(0426 골조 ★3) (3) 두 회사의 증가율 비교 문제로 확장하면 두 식 결합 CON/EQV ★3."
```

```yaml
- id: RPM-ALG-0426
  page: 57
  vendor_label: "유형 UP 21 로그방정식과 로그부등식의 실생활에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    미생물이 1시간마다 일정 비율로 증가해 10시간 후 처음의 5/2배. 처음의 3배 이상이 되는 최소 시간. log 2=0.3010, log 3=0.4771.
  category: "r^10=5/2 → r^n=(5/2)^{n/10} ≥ 3 → n ≥ 10·log 3/log(5/2) ≈ 11.99 → 12"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "비율 r 을 구하지 않고 r^n=(r^10)^{n/10}=(5/2)^{n/10} 로 조건을 바로 지수에 옮김"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그의 실생활 활용(증가·감소율 · 몇 년/몇 회)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 시간 증가율 r 에 대해 r^10=5/2. r^n ≥ 3 ↔ (n/10)·log(5/2) ≥ log 3. log(5/2)=1-2log 2=0.398, log 3=0.4771 → n ≥ 4.771/0.398=11.98… → 최소 12시간. r 을 직접 구하지 않는 EQV d1, 소수 나눗셈이 12 에 아주 가깝게 떨어져(11.98) 경계 판단이 예민함(T-경계). M_total 7·통찰 1 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "r^10=5/2 → (5/2)^{n/10} ≥ 3 → n ≥ 10·log3/(1-2log2)=4.771/0.398≈11.98 → 12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$시간'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 시간 10, 배수 5/2, 목표 3 을 바꿀 수 있음. 제약: 주어진 log 2·log 3 으로 log(배수)·log(목표)가 계산되고, 나눗셈 결과가 정수 근처(11.98 처럼)면 답 검토가 예민하므로 정수에서 0.3 이상 떨어지게 두는 편이 안전."
    creative: "(1) 「최소 몇 시간 후」 대신 「12시간 후 처음의 몇 배 이상인가」로 바꾸면 부등식이 사라져 ★2 (2) 증가 대신 반감(감소)으로 두면 log 부호 반전(0449 골조 ★3) (3) 두 미생물의 개체 수가 같아지는 시각처럼 두 지수식을 등치하면 CON ★3~4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0427
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=log_{√3}(1+1/x) 에 대하여 f(3)+f(4)+…+f(8) 의 값.
  category: "밑 √3 → 2log_3 → 진수 (x+1)/x 의 곱이 망원 소거 → 2log_3(9/3)=2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합을 하나의 로그로 모으면 진수 4/3·5/4·…·9/8 이 연쇄 약분되어 9/3 만 남는 소거 패턴"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그함수의 함숫값 합(로그의 성질 · 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=log_{√3}((x+1)/x)=2log_3((x+1)/x). 합은 2log_3(4/3·5/4·…·9/8)=2log_3 3=2. 밑 √3 처리 한 줄과 망원 소거 패턴 한 개(PD d1). M_total 4 이지만 통찰이 있어 −1 후보 미적용 → ★2.
  tier: star_2
  mechanism_primary: "f(x)=2log_3((x+1)/x) → Σ=2log_3(9/3) → 2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 범위(3~8)와 밑(√3·3·9)을 바꾸면 값은 (밑 지수 보정)×log_3((끝+1)/시작). 제약: (끝+1)/시작 이 밑의 거듭제곱이 되게(3~8 → 9/3=3, 1~26 → 27)."
    creative: "(1) f(x)=log_3(1+1/x) 로 두고 f(1)+…+f(n)=3 을 만족하는 n 을 묻기(BW d1 ★2~3) (2) 진수를 (x+2)/x 로 두면 두 칸 건너 소거로 패턴 발견 부담 ↑(PD d2 ★3) (3) 합 대신 곱을 물으면 소거가 안 됨 — 「합이 아니라 곱이면?」 식 보기 판정(★2)."
```

```yaml
- id: RPM-ALG-0428
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=log_2(x+1)-2, (f∘g)(x)=3x 일 때 g(1/3) 의 값.
  category: "f(g(1/3))=1 → log_2(g+1)=3 → g(1/3)=7"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 합성함수 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f∘g)(1/3)=3·(1/3)=1 이므로 f(g(1/3))=1. y=g(1/3) 으로 두면 log_2(y+1)-2=1 → y+1=8 → y=7. 합성 기호를 읽고 f 의 식을 거꾸로 푸는 3단계. 통찰 없음·M_total 5 로 −1 후보이나 합성함수·미지 함수 g 의 구조(Mₐ 2)가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "(f∘g)(1/3)=1 → log_2(g(1/3)+1)=3 → g(1/3)=8-1=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수 -2, 합성 결과 3x, 대입값 1/3 을 바꿀 것. 제약: f(g)=상수 가 log_2(g+1)=정수 로 떨어져 g 가 정수가 되게."
    creative: "(1) g(x) 의 식 자체를 구하게 하면 역함수 계산 g(x)=2^{3x+2}-1 로 단계 ↑(★2~3) (2) (g∘f)(x)=3x 로 순서를 바꾸면 f 의 값을 먼저 구해 g 에 대입 — 방향 착각 함정(★2) (3) g 가 로그함수라는 조건과 g(1/3)=7 을 주고 f∘g 의 식을 묻는 역방향 BW ★3."
```

```yaml
- id: RPM-ALG-0429
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=log_5(x-a)+b 의 그래프(점근선 x=2, 점 (7, 0) 통과)에서 a+b.
  category: "점근선 → a=2 · (7,0) 대입 → b=-1 → a+b=1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 그래프 → 미정계수(점근선·지나는 점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림의 점근선 x=2 에서 a=2, (7, 0) 을 대입하면 log_5 5+b=0 → b=-1 → a+b=1. 그래프 읽기 두 정보를 그대로 대입하는 2단계. 통찰 없음·M_total 4 → 시험에 꼭 나오는 문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "점근선 x=2 → a=2 · log_5(7-2)+b=0 → b=-1 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-0429.png"
  latex: latex-bank/rpm-alg/items/0429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 위치 a 와 x 절편(7)을 바꿀 것. 제약: x절편-a 가 밑 5 의 거듭제곱(1·5·25)이어야 b 가 정수 · 그림 라벨(점근선 값·절편 값)을 함께 갱신."
    creative: "(1) x 절편 대신 다른 점을 주려면 (27, ?) 처럼 진수가 밑의 거듭제곱인 점만 허용(★1) (2) 밑 a 까지 미지수로 두고 점 두 개를 주면 연립(★2) (3) 그래프를 x 축 대칭한 y=-log_5(x-a)+b 로 두면 부호 함정(T-부호) 추가 ★2."
```

```yaml
- id: RPM-ALG-0430
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=log_a 2x 를 x 축으로 m, y 축으로 n 평행이동한 그래프가 y=log_3(6x-72) 와 일치할 때 a+m+n.
  category: "log_3(6x-72)=log_3 2(x-12)+log_3 3 → a=3, m=12, n=1 → 16"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "6x-72=3·2(x-12) 로 묶어 log_3 6(x-12)=log_3 2(x-12)+1 — 평행이동 표준식 log_a 2(x-m)+n 과 대조 가능한 꼴로 동치 변환"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동(식 일치 → 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동 결과는 y=log_a 2(x-m)+n. 6x-72=6(x-12) 에서 log_3 6(x-12)=log_3 2(x-12)+log_3 3 이므로 a=3, m=12, n=1 → 16. 6 을 2·3 으로 갈라 밑 3 의 로그를 상수 1 로 빼내는 EQV d1 이 핵심이고 나머지는 대조. 「중요」 태그·M_total 5·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "log_3(6x-72)=log_3 2(x-12)+1 ↔ log_a 2(x-m)+n → a=3, m=12, n=1 → 16"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6x-72 의 6(=2·3^1)과 72 를 바꿀 것. 제약: x 계수가 2·3^n 꼴이어야 n 이 정수, 상수항이 x 계수의 배수여야 m 이 정수(예: 18x-90 → 2·9(x-5) → n=2, m=5)."
    creative: "(1) 대칭이동(x 축·y 축·원점)을 섞어 y=log_3(72-6x) 와 일치시키면 부호 해석 EQV d1 + T-부호 ★3 (2) 원래 함수를 y=log_a x 로 단순화하면 n=log_3 6 이 무리수라 「a+m+n」 대신 3^n 을 묻는 식으로 조정(★2) (3) 이동 후 함수와 (m, n) 을 주고 원래 밑 a 를 묻는 역방향 BW ★2~3."
```

```yaml
- id: RPM-ALG-0431
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ㄱ y=log_{1/3} x · ㄴ y=2log_9(x-3) · ㄷ y=3^{x-2}-1 · ㄹ y=log_9 x^2 중 평행이동·대칭이동으로 y=log_3 x 와 겹쳐지는 것. 5지선다.
  category: "ㄱ x축 대칭 · ㄴ 밑 9→3 후 평행이동 · ㄷ y=x 대칭(역함수)+평행이동 · ㄹ log_3|x| 두 가지라 불가"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ 지수함수 y=3^{x-2}-1 은 y=3^x 의 평행이동이고 y=3^x 는 y=log_3 x 의 y=x 대칭 — 역함수 대칭으로 겹쳐짐을 인식"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "평행이동·대칭이동으로 겹쳐지는 로그함수 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ log_{1/3} x=-log_3 x 는 x 축 대칭 ○. ㄴ 2log_9(x-3)=log_3(x-3) 평행이동 ○. ㄷ 3^{x-2}-1 은 y=3^x 의 평행이동이고 3^x 는 log_3 x 의 y=x 대칭 ○. ㄹ log_9 x^2=log_3|x| 는 x<0 가지가 있어 겹쳐질 수 없음 ×. 답 ㄱㄴㄷ. 변별은 ㄹ 의 절댓값 인식(T-범위·T-표기)과 ㄷ 의 역함수 대칭(SYM d1). 보기 4개 판정 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기를 log_3 x 의 대칭·평행이동 꼴로 환원 → ㄹ 만 log_3|x| 로 불가 → ㄱㄴㄷ"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3·9·1/3·27)과 평행이동 상수를 바꾸되 ㄴ 의 계수·밑 조합(2log_9=log_3, 3log_27=log_3)과 ㄷ 의 밑 3 을 유지. 제약: ㄹ 처럼 겹쳐지지 않는 보기를 하나는 남겨 정답이 「전부」가 되지 않게."
    creative: "(1) 겹쳐지지 않는 보기를 log_9 x^2 대신 log_3 x^2(=2log_3 x, y 축 방향 2배)로 두면 확대 변환이라 불가 — 판단 근거가 바뀜(★2) (2) 「겹쳐지는 것의 개수」로 묻거나 ㄷ 를 y=-3^{-x}(원점 대칭 후 y=x 대칭) 로 두면 SYM d2 ★3 (3) 각 보기의 이동 벡터를 구체적으로 쓰게 하는 서술형 ★2~3."
```

```yaml
- id: RPM-ALG-0432
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A=(1/2)log_{0.1} 2, B=log_{0.1} √3, C=(1/3)log_{0.1} 8 의 대소 관계. 5지선다.
  category: "진수 통일 A=log_{0.1}√2, C=log_{0.1} 2 → 밑 0.1<1 감소 → √2<√3<2 → A>B>C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 대소 비교(밑 통일 · 밑<1 순서 반전)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A=log_{0.1} √2, B=log_{0.1} √3, C=log_{0.1} 2. 밑 0.1<1 이라 진수가 클수록 값이 작으므로 √2<√3<2 → A>B>C, 즉 C<B<A. 계수를 진수로 넣는 한 줄과 밑<1 순서 반전(T-부호) 하나. 통찰 없음·M_total 4 → ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "계수 → 진수 지수 → √2<√3<2 → 밑 0.1<1 감소 → C<B<A"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 2·√3·8 과 계수 1/2·1·1/3 을 바꾸되 통일 후 진수가 서로 다른 값이 되게. 제약: 밑 0.1(<1)을 유지하면 순서 반전 함정이 남고, 밑 10 으로 바꾸면 반전이 없어 더 쉬워짐."
    creative: "(1) 세 수 중 하나를 다른 밑(log_{0.01} 4=log_{0.1} 2)으로 주면 밑변환 단계 추가 ★2 (2) 세 수의 합·곱 대소 등으로 확장(★2) (3) A, B, C 를 y=log_{0.1} x 그래프 위의 점의 높이로 읽게 하면 RT d1 ★2."
```

```yaml
- id: RPM-ALG-0433
  page: 58
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    k>2 에서 두 곡선 y=|log_2(-x+k)|, y=|log_2 x| 의 세 교점 P, Q, R 의 x 좌표 x_1<x_2<x_3. x_3-x_1=2√3 일 때 x_1+x_3. 5지선다.
  category: "P·R 의 가지 방정식이 모두 x(k-x)=1 → x_1, x_3 은 x^2-kx+1=0 의 두 근 → (x_3-x_1)^2=k^2-4=12 → k=4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에서 P(x<1)는 -log_2 x=log_2(k-x), R(x>k-1)은 log_2 x=-log_2(k-x) 의 교점 — 절댓값 가지를 골라 교점을 방정식으로 옮김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 곡선이 직선 x=k/2 에 대칭이므로 두 가지 방정식이 같은 x(k-x)=1, 즉 x_1·x_3=1, x_1+x_3=k — 근과 계수의 관계로 (x_3-x_1)^2=(x_1+x_3)^2-4x_1x_3"
  insight_count: 2
  depth_score: 5.50
  type_id: null
  type_hint: "절댓값 로그함수 그래프의 교점(대칭·근과 계수의 관계)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P 는 y=-log_2 x 와 y=log_2(k-x), R 은 y=log_2 x 와 y=-log_2(k-x) 의 교점이며 두 식 모두 x(k-x)=1 로 정리된다. 따라서 x_1, x_3 은 x^2-kx+1=0 의 두 근이고 (x_3-x_1)^2=k^2-4=12 → k=4 → x_1+x_3=k=4. 두 곡선의 x=k/2 대칭을 보면 x_1+x_3=k 가 바로 나온다(SYM d2). 교점을 방정식으로 옮기는 RT d1 + 대칭 SYM d2, M_total 6. 시험에 꼭 나오는 문제 구역이지만 교육청 기출·통찰 2개(d2 포함)로 +1 → ★4. [분류 이슈] 구역 출발점(★2~3) 대비 상향 ★4 — ★3/★4 애매.
  tier: star_4
  mechanism_primary: "P·R 가지 방정식 → x(k-x)=1 → x_1+x_3=k, x_1x_3=1 → (x_3-x_1)^2=k^2-4=12 → k=4 → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-0433.png"
  latex: latex-bank/rpm-alg/items/0433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x_3-x_1 의 값은 k^2-4 가 완전제곱이 되게: 2√3(k=4)·√21(k=5)·4√2(k=6). 밑 2 는 값에 영향 없음(대칭 구조만 사용). 제약: k>2 유지 · 그림의 P, Q, R 배치 고정."
    creative: "(1) x_1x_3 이나 Q 의 좌표(k/2, |log_2(k/2)|)를 묻기(★3) (2) 두 번째 곡선을 y=|log_2(x-k)| 처럼 평행이동만 한 것으로 바꾸면 대칭이 깨져 직접 풀이만 남아 오히려 ★3 (3) 세 교점을 꼭짓점으로 하는 삼각형 넓이를 물으면 y 좌표 계산 추가 → ★4 유지·Mₖ ↑."
```

```yaml
- id: RPM-ALG-0434
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=log_2(2-x)-1 에 대한 설명(정의역·치역·점근선·증감·역함수) 중 옳지 않은 것. 5지선다.
  category: "정의역 x<2 · 치역 R · 점근선 x=2 · 감소 · 역함수 y=2-2^{x+1} → ⑤ 의 부호 오류"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 성질(정의역·치역·점근선·증감·역함수) 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2-x>0 → 정의역 x<2, 치역은 실수 전체, 점근선 x=2, 진수 2-x 가 x 증가에 감소하므로 함수는 감소. 역함수는 y+1=log_2(2-x) → 2-x=2^{y+1} → y=-2^{x+1}+2 이므로 ⑤ 의 y=2^{x+1}+2 가 틀림. 다섯 보기 판정에 역함수 계산 한 번. -x 의 부호 처리(T-부호)와 정의역(T-범위)이 함정. 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기 검산 → 역함수 y=2-2^{x+1} 계산 → ⑤ 부호 오류"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 2-x 의 2 와 상수 -1, 밑 2 를 바꿀 것. 제약: 역함수 보기의 오류가 부호 한 곳(±)에서만 나게 유지해 다른 보기가 흔들리지 않게."
    creative: "(1) 틀린 보기를 「점근선 y=-1」처럼 지수·로그 점근선 혼동으로 두기(★2) (2) 역함수의 그래프가 지나는 사분면·y 절편을 묻는 후속 문항(★2) (3) 보기 ④ 를 「x_1<x_2<2 이면 f(x_1)>f(x_2)」 같은 기호 서술로 바꾸면 EQV d1 ★2~3."
```

```yaml
- id: RPM-ALG-0435
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=log_3 x 의 역함수 g 에 대하여 g(α)=2, g(β)=7 일 때 g(α+β).
  category: "g(x)=3^x → 3^α=2, 3^β=7 → g(α+β)=3^α·3^β=14"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 역함수 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=3^x 이므로 3^α=2, 3^β=7 → g(α+β)=3^{α+β}=3^α·3^β=14. 또는 α=log_3 2, β=log_3 7 → α+β=log_3 14 → g=14. 역함수를 지수함수로 읽고 지수법칙 한 번. 통찰 없음·M_total 4 로 −1 후보이나 역함수 구조 해석이 있어 ★2 유지(★1 후보).
  tier: star_2
  mechanism_primary: "g=3^x → g(α+β)=3^α·3^β=2·7=14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g(α)=2, g(β)=7 의 값과 밑 3 을 바꿀 것. 제약: 답은 두 값의 곱 — g(2α-β) 처럼 계수를 넣으면 2^2/7 같은 분수도 가능."
    creative: "(1) g(α+β) 대신 g(α-β)·g(2α) 로 지수법칙 종류 바꾸기(★2) (2) f(α)+f(β)=k 를 주고 αβ 를 묻는 대칭형(★2) (3) 역함수를 명시하지 않고 「f(a)=α, f(b)=β 일 때 f^{-1}(α+β)」 처럼 기호만 주면 표기 해석 EQV d1 ★2~3."
```

```yaml
- id: RPM-ALG-0436
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=log_a x+k 와 그 역함수 y=g(x) 의 그래프가 x 좌표 1, 2 인 두 점에서 만날 때 a+k.
  category: "함수·역함수의 교점은 y=x 위 → (1,1),(2,2) 대입 → k=1, log_a 2=1 → a=2 → 3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "증가함수와 그 역함수의 교점은 직선 y=x 위에 있으므로 두 교점이 (1, 1), (2, 2) — y=x 대칭으로 교점 좌표를 확정"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그함수와 역함수의 교점(y=x 위) → 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증가하는 함수와 역함수의 교점은 y=x 위이므로 교점은 (1, 1), (2, 2). log_a 1+k=1 → k=1, log_a 2+1=2 → a=2 → a+k=3. 역함수 대칭 SYM d1 한 개 뒤 대입 두 번. 매개변수 두 개(Mₐ 2)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "교점 ∈ y=x → (1,1),(2,2) → k=1 · log_a 2=1 → a=2 → 3"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0436.png"
  latex: latex-bank/rpm-alg/items/0436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점의 x 좌표 1, 2 를 바꾸면 log_a p=q-k 가 정수 해를 갖게 조정(예: (1, 4) → k=1, log_a 4=3 은 무리수라 부적합 · (1, 8)·k=... 로 재설계). 제약: k 는 x=1 교점에서 결정되므로 교점 하나는 x=1 을 두는 편이 깔끔 · 그림 라벨(1, 2) 갱신."
    creative: "(1) 두 교점 사이의 거리 √2·(x_2-x_1) 을 주고 좌표를 역산하게 하면 RT d1 추가 ★3 (2) 밑 0<a<1 로 두면 역함수와의 교점이 y=x 위가 아닐 수 있음(감소함수)을 다루는 MI d2 ★4 (3) 교점의 x 좌표 대신 「두 교점을 지나는 직선의 기울기 1」로 조건을 바꾸면 EQV ★3."
```

```yaml
- id: RPM-ALG-0437
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=g(x) 는 y=log_2(x-1) 의 y=x 대칭 그래프. P(2, b) 가 y=g(x) 위, Q(a, b) 가 y=log_2(x-1) 위일 때 a+b.
  category: "g(x)=2^x+1 → b=g(2)=5 → log_2(a-1)=5 → a=33 → 38"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수와 역함수 그래프 위의 점(y=x 대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=x 대칭이므로 g 는 역함수: x=log_2(y-1) → g(x)=2^x+1. b=g(2)=5. Q(a, 5) 가 y=log_2(x-1) 위 → a-1=2^5 → a=33 → a+b=38. 역함수를 구하고 두 점을 대입하는 절차(대칭으로 (5, 2)→… 우회도 가능하나 필수 아님). 통찰 없음·M_total 5 이나 역함수 계산과 두 점 대입 구조로 ★2 유지.
  tier: star_2
  mechanism_primary: "g=2^x+1 → b=5 → 2^5=a-1 → a=33 → a+b=38"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$38$'
  answer_source: "답지"
  figure: "crop:fig-0437.png"
  latex: latex-bank/rpm-alg/items/0437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 x 좌표 2 와 로그의 평행이동 -1 을 바꿀 것. 제약: b=2^p+1 이 정수 · a=2^b+1 은 b 가 커지면 급증하므로 p ≤ 3 권장 · 그림의 라벨(2, a, b) 갱신."
    creative: "(1) Q 를 y=g(x) 위의 점 (b, c) 로 두면 대칭 관계 (a, b)↔(b, a) 인식이 필요해 SYM d1 ★2~3 (2) 선분 PQ 의 길이 a-2 를 묻거나 PQ 와 y=x 가 이루는 도형 넓이로 확장(★3) (3) g 의 식을 주지 않고 그래프만 주면 역함수 인식이 통찰(SYM d1)로 승격 ★2~3."
```

```yaml
- id: RPM-ALG-0438
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정의역 5≤x≤8 인 y=log_{1/3}(x-a) 의 최솟값이 -2 일 때 상수 a. 5지선다.
  category: "밑 1/3 감소 → 최솟값은 x=8 → log_{1/3}(8-a)=-2 → 8-a=9 → a=-1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 최대·최소(정의역 구간 · 단조성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 1/3<1 이므로 감소함수, 구간의 오른쪽 끝 x=8 에서 최소: log_{1/3}(8-a)=-2 → 8-a=(1/3)^{-2}=9 → a=-1. 진수 조건 5-a>0 도 만족. 단조성 판단(T-부호)·대입 한 번의 절차형. 「중요」·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "밑<1 감소 → min at x=8 → 8-a=9 → a=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [5, 8]·최솟값 -2·밑 1/3 을 바꿀 것. 제약: 끝점-a 가 밑의 정수 거듭제곱이 되게 · 최솟값 대신 최댓값을 물으면 왼쪽 끝 x=5 · 진수 조건(왼쪽 끝-a>0)이 깨지지 않게."
    creative: "(1) 최댓값과 최솟값의 합을 주면 log_{1/3}(5-a)+log_{1/3}(8-a)=k → (5-a)(8-a)=3^{-k} 이차방정식 + 진수 조건 기각 → VF d1 ★3 (2) 밑을 미지수 a 로 두고 최댓값·최솟값 둘 다 주면 밑 범위 분기 MI d2 ★3~4 (3) 정의역 끝을 미지수로 두는 역방향 BW ★2~3."
```

```yaml
- id: RPM-ALG-0439
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=log_2(x/4), g(x)=x^2-8x+80 일 때 (f∘g)(x) 의 최솟값.
  category: "g=(x-4)^2+64 ≥ 64 · f 증가 → 최솟값 f(64)=log_2 16=4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 합성함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=(x-4)^2+64 ≥ 64 이고 f 는 증가함수이므로 (f∘g) 의 최솟값은 f(64)=log_2(64/4)=4. 완전제곱·단조성·대입 3단계. 통찰 없음·M_total 4 로 −1 후보이나 합성함수의 최솟값(안쪽 치역 → 바깥 단조성) 구조가 있어 ★2 유지(★1 후보).
  tier: star_2
  mechanism_primary: "g ≥ 64 → f 증가 → (f∘g)_min=f(64)=log_2 16=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 최솟값 64 와 f 의 x/4 를 바꿀 것. 제약: 최솟값/4 가 2 의 거듭제곱 · g 의 최솟값이 양수(진수 조건)."
    creative: "(1) f 의 밑을 1/2 로 두면 감소함수라 g 의 최솟값에서 최댓값이 나오는 방향 반전(T-부호) ★2 (2) (g∘f)(x) 로 순서를 바꾸면 log_2(x/4)=t 치환 이차식 최솟값(0440 골조 ★2) (3) g 의 정의역을 0≤x≤3 으로 제한하면 g 의 최솟값이 꼭짓점이 아닌 끝점 → 구간 판단 EQV d1 ★3."
```

```yaml
- id: RPM-ALG-0440
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정의역 1≤x≤81 에서 y=log_3 x·log_{1/3} x+2log_3 x+10 의 최댓값 M, 최솟값 m 의 합.
  category: "t=log_3 x∈[0,4] → y=-t^2+2t+10=-(t-1)^2+11 → M=11(t=1), m=2(t=4) → 13"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차식의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{1/3} x=-log_3 x 이므로 t=log_3 x 로 두면 y=-t^2+2t+10, 정의역에서 0≤t≤4. 꼭짓점 t=1 에서 최댓값 11, 구간 끝 t=4 에서 최솟값 -16+8+10=2 → M+m=13. 밑 변환 부호(T-부호)와 t 의 범위 변환(T-범위)이 함정이며 골조는 치환 이차함수의 구간 최대·최소. 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=log_3 x∈[0,4] → y=-(t-1)^2+11 → M=11, m=2 → 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 [1, 81](t∈[0,4])·계수 2·상수 10 을 바꿀 것. 제약: 꼭짓점 t=1 이 구간 안에 있어야 최댓값이 꼭짓점 · 구간 끝이 3 의 거듭제곱."
    creative: "(1) 꼭짓점이 구간 밖에 오도록 정의역을 [9, 81] 로 바꾸면 양 끝 비교만 남아 ★2 유지·함정 변경 (2) 최솟값이 되는 x 의 값을 함께 묻기(x=81)(★2) (3) 계수를 매개변수 a 로 두고 최댓값 조건으로 a 를 역산하면 BW d1 + 축 위치 분기 MI → ★3~4."
```

```yaml
- id: RPM-ALG-0441
  page: 59
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x>0, y>0 일 때 log_2(x+1/y)+log_2(y+9/x) 의 최솟값. 5지선다.
  category: "합 → log_2[(x+1/y)(y+9/x)]=log_2(xy+9/(xy)+10) → 산술·기하평균 xy+9/(xy) ≥ 6 → log_2 16=4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "진수를 전개해 xy+9/(xy) 쌍을 만들고 산술·기하평균(공통수학2 절대부등식)으로 ≥ 2·3=6 — 로그 단원 밖 도구 결합"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그의 최대·최소(산술·기하평균)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 로그를 합쳐 log_2[(x+1/y)(y+9/x)]=log_2(xy+10+9/(xy)). xy>0 이므로 xy+9/(xy) ≥ 2√9=6(등호 xy=3) → 진수 ≥ 16 → 최솟값 log_2 16=4. 밑 2>1 이라 진수 최소가 로그 최소. 산술·기하평균 결합 XU d1 이 골조이고 등호 성립 확인(T-범위)이 함정. 시험에 꼭 나오는 문제(level 없음)이나 단원 밖 도구 결합이라 ★3.
  tier: star_3
  mechanism_primary: "로그 합 → 진수 곱 전개 xy+9/(xy)+10 → AM-GM ≥ 16 → log_2 16=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/y 와 9/x 의 상수(1, 9)를 (p, q) 로 바꾸면 최솟값은 log_2(p+q+2√(pq)). 제약: pq 가 완전제곱이고 p+q+2√(pq) 가 밑의 거듭제곱(1·9 → 16 · 4·16 → 36 이면 밑을 6 으로)."
    creative: "(1) 밑을 1/2 로 두면 최댓값 문제로 뒤집힘(T-부호) ★3 (2) log_2 x+log_2 y=k 조건 아래 x+4y 의 최솟값처럼 조건부 AM-GM 으로 바꾸면 EQV d1 + XU → ★3~4 (3) 등호가 성립하는 (x, y) 의 조건(xy=3)까지 묻기 ★3."
```

```yaml
- id: RPM-ALG-0442
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log_{1/2}(x-2)=log_{1/4}(2x-1) 의 근 α, (log_16 x^2)^2-5log_16 x+1=0 의 두 근 β, γ 일 때 α+β+γ.
  category: "밑 통일 (x-2)^2=2x-1 → x=5(x=1 기각) · 4t^2-5t+1=0 (t=log_16 x) → x=2, 16 → 23"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(밑 통일 · 치환) 해의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 식: log_{1/4}(2x-1)=(1/2)log_{1/2}(2x-1) → (x-2)^2=2x-1 → x^2-6x+5=0 → x=1, 5, 진수 조건 x>2 로 α=5. 둘째 식: log_16 x^2=2log_16 x=2t → 4t^2-5t+1=0 → t=1/4, 1 → x=2, 16 → β+γ=18. 합 23. 두 표준 로그방정식(밑 통일·치환)의 병렬이며 x=1 기각(T-범위)과 (log_16 x^2)^2 표기(T-표기)가 함정. 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "① 밑 통일 → (x-2)^2=2x-1 → α=5 · ② t=log_16 x → 4t^2-5t+1=0 → 2+16 → 23"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식의 x-2, 2x-1 은 (x-p)^2=qx-r 이 정수 근을 갖고 하나가 진수 조건에 걸리게 · 둘째 식은 4t^2-5t+1 의 근이 1/4 의 정수배가 되게(밑 16=2^4 이라 x 가 정수). 제약: 기각되는 근이 하나 있어야 T-범위 함정 유지."
    creative: "(1) 두 방정식을 하나로 합쳐 「근의 곱」을 묻기(★2) (2) 둘째 식의 log_16 x^2 을 (log_16 x)^2 로 바꾸면 치환 골조가 달라져 표기 함정이 사라짐(★2) (3) 첫 식을 log_{1/2}(x-2)=log_{1/4}(2x-1)+1 처럼 상수를 더하면 밑 통일 뒤 계수 처리 EQV d1 ★3."
```

```yaml
- id: RPM-ALG-0443
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x^{log x^2}=100x^3 (x>0) 의 두 근 α, β 에 대하여 log αβ. 5지선다.
  category: "양변 log → 2(log x)^2=2+3log x → 2t^2-3t-2=0 → t=2, -1/2 → log α+log β=3/2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 포함된 방정식(양변에 로그 → 근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 상용로그: log x^2·log x=log 100+3log x → 2t^2-3t-2=0 (t=log x) → (2t+1)(t-2)=0 → t=2, -1/2. log αβ=log α+log β=2+(-1/2)=3/2(근과 계수의 관계 3/2 로도 동일). log x^2=2log x 표기(T-표기)와 x>0 (T-범위). 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 log → 2t^2-3t-2=0 → t=2, -1/2 → log αβ=t_1+t_2=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 100x^3 의 100(=10^2)과 지수 3, 좌변 지수 log x^2 의 2 를 바꿀 것. 제약: 2t^2-pt-q=0 이 유리근을 갖게 · log αβ 는 근의 합 p/2."
    creative: "(1) 두 근이 무리수가 되게 계수를 두면 근과 계수의 관계가 필수 → RT d1 통찰형 ★3 (2) 방정식을 부등식 x^{log x^2}<100x^3 으로 바꾸면 0414 골조(★2) (3) log_α β+log_β α 처럼 대칭식을 묻기(0444 골조 ★2~3)."
```

```yaml
- id: RPM-ALG-0444
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (log_3 x)^2-8log_3 √x+2=0 의 두 근 α, β 에 대하여 log_α 3+log_β 3.
  category: "log_3 √x=t/2 → t^2-4t+2=0 → log_α 3+log_β 3=1/t_1+1/t_2=(t_1+t_2)/(t_1t_2)=4/2=2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 log_α 3=1/log_3 α=1/t 로 표현을 바꿔 두 근의 대칭식 1/t_1+1/t_2 로 환원 — 근이 2±√2 무리수라 근과 계수의 관계가 필수"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그방정식 두 근의 대칭식(치환 → 근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_3 √x=(1/2)log_3 x 이므로 t=log_3 x 에 대해 t^2-4t+2=0 (근 2±√2). log_α 3=1/log_3 α=1/t 이므로 구하는 값은 1/t_1+1/t_2=(t_1+t_2)/(t_1t_2)=4/2=2. 밑변환으로 대칭식으로 옮기는 RT d1 이 골조, √x 표기(T-표기). M_total 5·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "t^2-4t+2=0 (t=log_3 x) → log_α 3+log_β 3=Σ1/t=4/2=2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -8(√x 라 실질 -4)과 상수 2 를 바꾸면 답은 (합)/(곱). 제약: 곱 ≠ 0 · 판별식 > 0 으로 두 실근 유지 · 답이 정수·간단한 분수."
    creative: "(1) log_α β+log_β α=(t_1^2+t_2^2)/(t_1t_2) 로 대칭식 차수 ↑ ★3 (2) αβ 나 α^2+β^2 (=3^{2t_1}+3^{2t_2}) 처럼 지수 쪽 대칭식으로 바꾸면 RT 두 번 ★3 (3) 계수를 매개변수 k 로 두고 log_α 3+log_β 3=1 이 되는 k 를 역산 BW d1 ★3."
```

```yaml
- id: RPM-ALG-0445
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이차함수 y=f(x)(f(0)=f(7)=0, f(4)=3)와 직선 y=x-1 의 그림에서 log_3 f(x)+log_{1/3}(x-1) ≤ 0 을 만족시키는 모든 자연수 x 의 합.
  category: "log_3 f(x) ≤ log_3(x-1) → 0<f(x) ≤ x-1, x>1 → 그림에서 4≤x<7 → 4+5+6=15"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log_{1/3}(x-1)=-log_3(x-1) 로 모아 log_3 f(x) ≤ log_3(x-1) → 진수 조건 f(x)>0, x-1>0 을 포함한 0<f(x) ≤ x-1 로 동치 변환"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x) ≤ x-1 을 「포물선이 직선 아래」로 읽어 그림의 교점 x=1, 4 에서 구간 x≤1 또는 x≥4 를 얻고, f(x)>0 (0<x<7) 과 교집합"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "로그부등식과 그래프의 위치 관계(진수 조건 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부등식은 log_3 f(x) ≤ log_3(x-1) 이고 밑 3>1 이므로 0<f(x) ≤ x-1 (x>1). 그림에서 f(x)>0 은 0<x<7, f(x) ≤ x-1 은 x≤1 또는 x≥4 (교점 x=1, 4 는 f(1)=0, f(4)=3 으로 확인). 교집합 4≤x<7 → 자연수 4, 5, 6 → 합 15. x=1 은 f(1)=0 으로 진수 조건 위배, x=7 도 제외(T-범위·T-경계). 동치 변환 EQV d1 + 그래프 읽기 RT d1, M_total 7. 평가원 기출·통찰 2개이나 둘 다 d1 이라 +1 미적용 → ★3. [분류 이슈] ★3/★4 애매(통찰 2개·기출).
  tier: star_3
  mechanism_primary: "log 합치기 → 0<f(x) ≤ x-1 → 그림: 0<x<7 ∩ (x≤1 ∪ x≥4) → 4≤x<7 → 15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: "crop:fig-0445.png"
  latex: latex-bank/rpm-alg/items/0445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 영점 0, 7 과 직선의 교점 1, 4 를 바꾸되 f(4)=3 처럼 교점이 직선 위에 있게(f(p)=p-1) 유지. 제약: 그림 라벨(1, 4, 7)이 조건과 일치 · 답 구간 안 자연수가 2~4개."
    creative: "(1) 부등호를 ≥ 로 바꾸면 해가 1<x≤4 → 자연수 2, 3, 4(x=1 기각 여부 판단 강화 · VF d1) ★3 (2) 밑을 1/3 로 두면 부등호 반전(T-부호) ★3 (3) 직선을 y=x-1 대신 y=-x+7 로 바꾸면 교점이 달라져 그림 재구성 필요 ★3."
```

```yaml
- id: RPM-ALG-0446
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (2+log_{1/2} x)·log_2 x>-3 을 만족시키는 정수 x 의 최댓값.
  category: "(2-t)t>-3 → t^2-2t-3<0 → -1<t<3 → 1/2<x<8 → 7"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차부등식(정수해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{1/2} x=-log_2 x=-t 이므로 (2-t)t>-3 → t^2-2t-3<0 → (t-3)(t+1)<0 → -1<t<3 → 2^{-1}<x<2^3 → 정수 최댓값 7. 밑 변환 부호(T-부호)와 x<8 열린 경계(T-경계). 절차형·M_total 6 → 「중요」 ★2.
  tier: star_2
  mechanism_primary: "t=log_2 x → (2-t)t>-3 → -1<t<3 → 1/2<x<8 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2, -3 을 바꾸면 t^2-pt-q<0. 제약: 정수 근 인수분해 · 상한 2^q 가 정수라 「최댓값 2^q-1」."
    creative: "(1) 부등호를 ≤ 로 바꿔 최댓값 8 이 되게(등호 함정) ★2 (2) 「정수 x 의 개수」로 바꾸면 하한 1/2 위 정수 1 부터 세는 T-범위 ★2 (3) 밑 1/2 를 1/4 로 두면 -t/2 계수 처리로 Mₖ ↑ ★2."
```

```yaml
- id: RPM-ALG-0447
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x^{log_{1/2} x}>x/64 를 만족시키는 정수 x 의 개수.
  category: "양변 log_2 → -t^2>t-6 → t^2+t-6<0 → -3<t<2 → 1/8<x<4 → 1, 2, 3"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(양변에 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 log_2: log_{1/2} x·log_2 x>log_2 x-6 → -t^2>t-6 → t^2+t-6<0 → (t+3)(t-2)<0 → -3<t<2 → 1/8<x<4 → 정수 1, 2, 3 의 3개. 지수의 밑 1/2 부호(T-부호)·열린 경계(T-경계). 0414 와 같은 골조의 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 log_2 → -t^2>t-6 → -3<t<2 → 1/8<x<4 → 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "64(=2^6)와 지수의 밑 1/2 를 바꿀 것. 제약: t^2+t-q<0 의 정수 근 · 상한 2^p 아래 정수 개수가 1~5개."
    creative: "(1) 우변을 64x 로 바꾸면 -t^2>t+6 → 해 없음 — 「해가 없다」 판정형 ★2 (2) 지수를 log_2 x 로 바꾸면(부호 없음) 0414 와 동일 ★2 (3) x^{log_{1/2} x} 대신 (1/2)^{(log_2 x)^2} 처럼 표현을 바꾸면 교환 정리 RT d1 ★3."
```

```yaml
- id: RPM-ALG-0448
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x^2+2(2-log a)x-2log a+7=0 이 서로 다른 두 실근을 갖는 양수 a 의 범위. 5지선다.
  category: "D/4=(2-t)^2+2t-7=t^2-2t-3>0 → t<-1 또는 t>3 → 0<a<1/10 또는 a>1000"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 근의 판별(판별식 → 로그부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=log a. D/4=(2-t)^2-(-2t+7)=t^2-2t-3>0 → (t-3)(t+1)>0 → t<-1 또는 t>3 → 0<a<1/10 또는 a>1000. 0420 골조에 해가 두 구간·a>0 결합(T-범위)·열린 경계(T-경계)가 더해진 절차형. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "D/4=t^2-2t-3>0 → t<-1 또는 t>3 → 0<a<1/10 또는 a>1000"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2-log a 의 2 와 -2log a+7 의 계수를 바꾸면 D/4 가 t 의 다른 이차식. 제약: 정수 근 인수분해 · 선택지처럼 0<a 를 포함한 두 구간 표현 유지."
    creative: "(1) 「서로 다른 두 양의 실근」으로 바꾸면 D>0·합>0·곱>0 결합 CON/EQV ★3 (2) 「두 근 사이에 1 이 있다」 조건은 f(1)<0 한 줄로 끝나 오히려 ★2 (3) 정수 a 의 개수를 물어 구간 안 정수 세기(★2)."
```

```yaml
- id: RPM-ALG-0449
  page: 60
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    여과기 한 번에 중금속 20% 감소. 처음의 2% 이하로 줄이는 최소 통과 횟수. log 2=0.3010. 5지선다.
  category: "0.8^n ≤ 0.02 → n(3log2-1) ≤ log2-2 → 음수로 나눠 부호 반전 → n ≥ 1.699/0.097≈17.5 → 18"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 실생활 활용(증가·감소율 · 몇 년/몇 회)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0.8^n ≤ 0.02 → n·log 0.8 ≤ log 0.02. log 0.8=3log 2-1=-0.097, log 0.02=log 2-2=-1.699 → -0.097n ≤ -1.699 → n ≥ 17.5… → 최소 18번. 음수 log 0.8 로 나눌 때 부등호 반전(T-부호)과 정수 올림(T-경계), 소수 나눗셈 부담(Mₖ 2). 통찰 없음이나 M_total 7 → 시험에 꼭 나오는 문제 ★2~3 중 ★3.
  tier: star_3
  mechanism_primary: "0.8^n ≤ 0.02 → n·(-0.097) ≤ -1.699 → n ≥ 17.5 → 18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "감소율 20%(0.8=2^3/10)를 50%(0.5)·36%(0.64=2^6/100)로, 목표 2% 를 1%·5%(=10/2) 로 바꿀 것. 제약: 주어진 log 2 만으로 계산 · 나눗셈 결과가 정수에서 0.3 이상 떨어져 올림 판단이 안정."
    creative: "(1) 「n 번 통과 후 처음의 몇 % 이하」로 뒤집어 n 을 주고 백분율을 묻기 ★2 (2) 감소율을 x% 로 두고 횟수·목표를 주어 x 를 역산(0425 골조 ★2) (3) 두 여과기(감소율 다름)를 번갈아 쓰는 설정으로 곱 0.8^m·0.5^n ≤ 0.02 → CON ★3~4."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0450
  page: 61
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    y=log_3 x, y=log_{27} x 와 직선 x=k 의 교점 A, B 에 대하여 AB=2 일 때 k. (k>1)
  category: "A(k, log_3 k), B(k, (1/3)log_3 k) → AB=(2/3)log_3 k=2 → log_3 k=3 → k=27"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 로그함수 그래프의 세로 거리(같은 x 에서 함숫값 차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{27} k=(1/3)log_3 k 이므로 AB=log_3 k-(1/3)log_3 k=(2/3)log_3 k=2 → log_3 k=3 → k=27. k>1 이라 A 가 위(그림)이므로 차의 부호 고민 없음. 밑 변환 한 번·일차방정식 한 번의 절차형·M_total 4. 서술형 출발점 ★3 에서 −1 → ★2. [분류 이슈] 서술형 구역이나 M_total 4 절차형 — ★1 도 가능, ★2 로 기록.
  tier: star_2
  mechanism_primary: "AB=log_3 k-log_27 k=(2/3)log_3 k=2 → k=3^3=27"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: "crop:fig-0450.png"
  latex: latex-bank/rpm-alg/items/0450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (3, 27)·AB=2 를 바꿀 것. 제약: 두 밑이 같은 수의 거듭제곱(3, 9, 27)이어야 차가 log_3 k 의 유리수배 · log_3 k 가 정수가 되게 AB 선택 · 그림의 x=k 라벨 유지."
    creative: "(1) 0<k<1 로 두면 B 가 위 — 절댓값 판단 T-부호 ★2 (2) 직선 y=k 와의 교점의 x 좌표 차(27^k-3^k)로 방향을 바꾸면 지수 처리 ★2~3 (3) 세 로그함수(밑 3, 9, 27)와 x=k 의 교점 간격 비 등으로 확장 ★3."
```

```yaml
- id: RPM-ALG-0451
  page: 61
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    y=2(log_2 x)^2-log_{√2} x^3+a 가 x=b 에서 최솟값 2 를 가질 때 a^2b^2. (a 상수)
  category: "log_{√2} x^3=6t → y=2t^2-6t+a=2(t-3/2)^2+a-9/2 → b=2^{3/2}, a=13/2 → (169/4)·8=338"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a x 치환 이차식의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log_{√2} x^3=3·2log_2 x=6t (t=log_2 x) → y=2t^2-6t+a=2(t-3/2)^2+a-9/2. 최소는 t=3/2, 즉 b=2^{3/2}=2√2 (b^2=8), 최솟값 a-9/2=2 → a=13/2 (a^2=169/4). a^2b^2=169/4·8=338. 밑 √2·진수 x^3 표기 변환(T-표기)과 분수 계산 부담(Mₖ 2). 절차형·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "t=log_2 x → y=2(t-3/2)^2+a-9/2 → b=2^{3/2}, a=13/2 → a^2b^2=338"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$338$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 밑 √2, 진수 x^3, 최솟값 2 를 바꿀 것. 제약: 꼭짓점 t 가 유리수라 b=2^t 의 제곱이 유리수 · a^2b^2 가 정수로 정리되게(현재 169/4·8)."
    creative: "(1) 정의역을 1≤x≤2 로 제한하면 꼭짓점 t=3/2 가 구간 밖 → 끝점 최솟값 판단 EQV d1 ★3 (2) 최댓값 조건으로 바꾸려면 계수를 -2 로(부호 반전) ★3 (3) b 를 주고 a 만 묻거나 「최솟값이 2 이상이 되는 a 의 범위」로 부등식화 BW d1 ★3."
```

```yaml
- id: RPM-ALG-0452
  page: 61
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    log_{2x^2+1}(2x-1)=log_{7x-2}(2x-1) 의 모든 근의 합.
  category: "조건 x>1/2 · 진수=1 → x=1 · 밑 같음 → 2x^2-7x+3=0 → x=1/2(기각), 3 → 1+3=4"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑이 다른 두 로그가 같으려면 진수가 1 이거나(x=1) 밑이 같아야(2x^2+1=7x-2) — 두 독립 경우가 모두 답에 기여"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑 같음의 근 x=1/2, 3 중 x=1/2 는 진수 2x-1=0 으로 기각 — 기각을 빠뜨리면 합이 4.5 가 됨"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "밑이 다른 로그방정식(진수=1 또는 밑 같음)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    진수·밑 조건: 2x-1>0, 7x-2>0, 7x-2≠1, 2x^2+1≠1 → x>1/2. (i) 진수 2x-1=1 → x=1 (밑 3, 5 로 유효). (ii) 밑 2x^2+1=7x-2 → 2x^2-7x+3=(2x-1)(x-3)=0 → x=1/2 는 기각, x=3 유효(밑 19, 진수 5). 근의 합 1+3=4. 「진수 1」 경우를 놓치면 3, 기각을 놓치면 4.5 — MI d1 + VF d1 두 통찰이 각각 오답을 만든다. M_total 6·서술형 → ★3.
  tier: star_3
  mechanism_primary: "x>1/2 · 진수=1 → x=1 ⊕ 밑 같음 → (2x-1)(x-3)=0 → 3 (1/2 기각) → 합 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 2x^2+1, 7x-2 를 바꾸되 「밑 같음」 방정식이 정수 근 하나 + 기각 근 하나를 갖게. 제약: 진수 2x-1=1 의 근(x=1)에서 두 밑이 양수·≠1 이어야 함 · 기각 근이 진수 조건 경계(x=1/2)와 일치하면 함정이 선명."
    creative: "(1) 진수 1 인 근에서 밑이 1 이 되도록 설계하면 그 경우도 기각 → VF d2 ★3~4 (2) 양변의 진수를 다르게(log_A M=log_B N) 두면 골조가 완전히 바뀌므로 피하기 (3) 「근의 개수」를 물으면 기각 판정만 남아 ★3 유지."
```

```yaml
- id: RPM-ALG-0453
  page: 61
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    양수 a 가 √a/√(a-1)=-√(a/(a-1)) 을 만족시킬 때 부등식 log_a x>log_a 4-log_a(x-3) 의 해.
  category: "근호 등식 ↔ a>0, a-1<0 → 0<a<1 → log_a x>log_a(4/(x-3)) → 밑<1 반전 → x(x-3)<4, x>3 → 3<x<4"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√a/√b=-√(a/b) 가 성립하는 조건은 a>0, b<0 (공통수학1 실수·복소수의 근호 성질) → 밑의 범위 0<a<1 을 로그 단원 밖 도구로 결정"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "밑의 범위 판정 → 로그부등식(밑<1 순서 반전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √a/√(a-1)=-√(a/(a-1)) 는 a>0, a-1<0 일 때 성립하므로 0<a<1. 진수 조건 x>3. log_a x>log_a(4/(x-3)) 에서 밑<1 이므로 x<4/(x-3) → x(x-3)<4 (x-3>0) → x^2-3x-4<0 → -1<x<4 → 3<x<4. 밑 범위를 근호 성질로 알아내는 XU d1 뒤 표준 로그부등식(부호 반전 T-부호·진수 조건 T-범위). M_total 7·서술형 → ★3.
  tier: star_3
  mechanism_primary: "근호 등식 → 0<a<1 → log_a x>log_a(4/(x-3)) → x<4/(x-3), x>3 → 3<x<4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3<x<4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 4 와 x-3 을 바꾸면 x(x-p)<q 의 정수 근 인수분해 필요. 제약: 해 구간이 진수 조건 x>p 와 교집합 후 비어 있지 않게 · 근호 등식은 a 와 a-1 의 부호 조합만 바꾸기."
    creative: "(1) 근호 등식을 √a·√(a-1)=-√(a(a-1)) 로 바꾸면 a<0 이 필요해 양수 a 와 모순 — 현재 형태 유지 (2) 밑 조건을 |a-1|=1-a 로 주면 EQV d1 로 유형이 바뀜 ★3 (3) 밑 범위를 주지 않고 「해가 3<x<4 일 때 a 의 범위」를 묻는 역방향 BW ★3~4."
```

### 실력 Up

```yaml
- id: RPM-ALG-0454
  page: 61
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    y=|log_3 x| 와 직선 l 의 세 교점 A, B, C 의 x 축 수선의 발 A', B', C' 이 OA'=A'B'=B'C' 일 때 점 B 의 y 좌표.
  category: "A'(a), B'(2a), C'(3a) → A 는 x<1 가지 → 등간격·한 직선 ↔ B 가 AC 의 중점 → 2y_B=-log_3 a+log_3 3a=1 → y_B=1/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x 좌표가 등간격(a, 2a, 3a)인 세 점이 한 직선 위 ↔ B 가 선분 AC 의 중점 ↔ y 좌표가 등차 2y_B=y_A+y_C — 기하 조건을 로그 방정식으로 옮김"
  insight_count: 1
  depth_score: 6.00
  type_id: null
  type_hint: "절댓값 로그함수 그래프와 직선의 교점(등간격 → 중점)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A'(a, 0), B'(2a, 0), C'(3a, 0) 으로 두면 그림에서 A 는 x<1 가지(y=-log_3 x), B, C 는 x>1 가지. 등간격 세 점이 한 직선 위이므로 B 가 AC 의 중점: 2y_B=-log_3 a+log_3 3a=log_3 3=1 → y_B=1/2 (a 와 무관 · 이때 2a=√3 으로 a=√3/2<1<2a 가 그림과 맞음). 중점(등차) 착안 RT d2 가 유일한 통찰이고 이후 로그 정리는 한 줄. 절댓값 가지 선택(T-범위). M_total 6·실력 Up 출발점 ★4 유지 — 통찰 1개라 가벼운 ★4(★3 후보).
  tier: star_4
  mechanism_primary: "A'(a),B'(2a),C'(3a) → 중점 2y_B=y_A+y_C=-log_3 a+log_3 3a=1 → y_B=1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0454.png"
  latex: latex-bank/rpm-alg/items/0454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 b 로 바꾸면 y_A+y_C=log_b 3 이라 y_B=(1/2)log_b 3 (밑 9 → 1/4). 간격 비 1:1:1 을 유지하면 답이 a 와 무관. 제약: 간격 비를 1:1:2 등으로 바꾸면 중점이 내분점으로 바뀌어 계산량 ↑ · A 가 x<1, B·C 가 x>1 에 오도록 확인 · 그림 라벨(A', B', C') 고정."
    creative: "(1) 직선 l 의 기울기나 y 절편을 묻기(y_B 이후 a 를 실제로 구해야 해 한 단계 추가, ★4 유지) (2) 곡선을 y=|log_3 x|+1 로 올리면 y_A+y_C 의 상수항 처리 추가 ★4 (3) 「OA'=A'B'=B'C'」 대신 「AB=BC」(선분 길이)로 주면 같은 직선 위라 동치 — 등간격 해석 EQV d1 이 더해져 ★4."
```

```yaml
- id: RPM-ALG-0455
  page: 61
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    a>1. 직선 y=-x+4 가 y=a^{x-1}, y=log_a(x-1) 과 만나는 점 A, B, C 는 y=a^{x-1} 의 y 절편. AB=2√2 일 때 삼각형 ABC 의 넓이 S 에 대하여 50S.
  category: "두 곡선은 y=x-1 대칭 → A, B 는 y=x-1 에 대칭, 중점 (5/2, 3/2) → A(3/2, 5/2) → a=25/4 → C(0, 4/25) → S=(1/2)·2√2·(점-직선 거리)=96/25 → 192"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=a^{x-1} 과 y=log_a(x-1) 은 y=a^x, y=log_a x 를 각각 x 축 방향 1 평행이동 → y=x 가 아니라 직선 y=x-1 에 대칭. 직선 y=-x+4 는 이 축에 수직이므로 A, B 가 축에 대칭"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=2√2 를 기울기 -1 직선 위의 좌표 차(각 축 2)로 옮겨 중점 (5/2, 3/2) 에서 A(3/2, 5/2), B(7/2, 1/2) 확정"
  insight_count: 2
  depth_score: 5.50
  type_id: null
  type_hint: "지수함수·로그함수 그래프의 대칭(평행이동된 역함수 쌍) → 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 곡선은 y=x 대칭인 y=a^x, y=log_a x 를 x 축 방향으로 1 만큼 옮긴 것이라 직선 y=x-1 에 대칭이고, y=-x+4 는 그 축에 수직. 축과 직선의 교점 M(5/2, 3/2) 이 AB 의 중점이며 AB=2√2 → A(3/2, 5/2), B(7/2, 1/2). A 를 y=a^{x-1} 에 대입해 a^{1/2}=5/2 → a=25/4, C(0, 1/a)=(0, 4/25). 높이는 C 에서 x+y-4=0 까지의 거리 (96/25)/√2, S=(1/2)·2√2·(96/25)/√2=96/25 → 50S=192. 대칭축이 y=x 가 아니라는 위장(SYM d2)이 핵심, 좌표 확정 RT d1, 분수 계산 부담. 실력 Up·평가원 기출 ★4 (★5 는 통찰 3개 조건 미달).
  tier: star_4
  mechanism_primary: "y=x-1 대칭 → 중점 (5/2,3/2) → A(3/2,5/2) → a=25/4 → C(0,4/25) → S=96/25 → 192"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$192$'
  answer_source: "답지"
  figure: "crop:fig-0455.png"
  latex: latex-bank/rpm-alg/items/0455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=-x+4 의 상수 4 와 AB=2√2 를 바꾸면 중점·A 의 좌표가 바뀌고 a=(y_A)^{1/(x_A-1)} 이 유리수가 되게 조정(현재 x_A-1=1/2 라 a=(5/2)^2). 제약: A 가 x>1 쪽(지수 곡선이 직선과 만나는 위치)에 있도록 · 50S 가 정수가 되게 상수 선택 · 그림의 색칠 삼각형·라벨 갱신."
    creative: "(1) 평행이동을 x 축 방향 2 로 바꾸면 대칭축 y=x-2 — 같은 골조 ★4 (2) 두 곡선을 y=a^x, y=log_a x 로 두면 대칭축 y=x 로 위장이 사라져 SYM d1 → ★3 (3) 삼각형 대신 a 의 값만 묻기(a=25/4 → ★3~4) · AB 대신 「A 의 x 좌표가 3/2」 처럼 직접 주면 RT 소거 ★3."
```

```yaml
- id: RPM-ALG-0456
  page: 61
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    log(2x+5)+log(4-x)=log a 를 만족시키는 실수 x 가 존재하도록 하는 자연수 a 의 개수.
  category: "진수 조건 -5/2<x<4 → (2x+5)(4-x)=a → h(x)=-2x^2+3x+20 의 치역 (0, 169/8] → 자연수 1~21"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「실근이 존재」 ↔ 정의역 -5/2<x<4 위에서 곡선 y=(2x+5)(4-x) 와 직선 y=a 가 만남 ↔ a 가 h 의 치역 (0, 169/8] 에 속함"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "로그방정식이 실근을 가질 조건(진수 곱의 치역)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    진수 조건 -5/2<x<4 에서 (2x+5)(4-x)=a. h(x)=-2x^2+3x+20 은 x=3/4 에서 최댓값 169/8=21.125, 양 끝(열린)에서 0 으로 가므로 치역 (0, 169/8]. 자연수 a 는 1~21 의 21개. 정의역 제한 치역(T-범위)·21.125 의 경계(T-경계)·분수 꼭짓점 계산(Mₖ 2). 다만 D ≥ 0 (a ≤ 169/8) 과 log a 의 조건 a>0 만으로도 같은 답이 나와 치역 통찰이 변별하지 않는다. [분류 이슈] 실력 Up 출발점 ★4 이나 판별식 절차로도 정답 — ★3 기록.
  tier: star_3
  mechanism_primary: "-5/2<x<4 · (2x+5)(4-x)=a → h 치역 (0, 169/8] → 자연수 1~21 → 21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x+5, 4-x 의 계수·상수를 바꾸면 h 의 최댓값·정의역이 바뀜. 제약: 꼭짓점이 정의역 안 · 최댓값이 정수+소수(21.125)면 경계 판단 함정 유지 · 끝값 0 이 열린 구간이라 a>0."
    creative: "(1) 진수를 (2x+5), (x-4) 처럼 정의역이 x>4 한쪽만 되게 바꾸면 꼭짓점이 밖 → 치역이 무한 구간이라 「a 의 최솟값」 형식으로 재설계 (2) 우변을 log 2a 나 2log a 로 두면 a 의 범위 변환 단계 추가 ★3 (3) 정의역을 x>0 으로 더 제한하면 h(0)=20 이 경계가 되어 0<a<20 은 근 하나, 20≤a≤169/8 은 근 둘 — 근 개수별 a 세기로 치역·구간 판단이 변별 → MI d2 ★4."
```

## 표본 판정 요약 (43문)

- ★ 분포: ★1 2 · ★2 25 · ★3 13 · ★4 3 · ★5 0
- 통찰형 17 · 절차형 26 · premium 0
- type_hint 상위: 「로그의 실생활 활용(증가·감소율 · 몇 년/몇 회)」 4 (0424·0425·0426·0449) · 「지수에 로그가 포함된 부등식(양변에 로그)」 3 (0414·0415·0447 · 변형형 0416 과 방정식형 0443 까지 5) · 「로그부등식이 항상 성립할 조건(치환 → 판별식·최대최소)」 3 (0417·0418·0419) · 「로그를 계수로 갖는 이차방정식의 근의 판별(판별식 → 로그부등식)」 3 (0420·0421·0448) · 「로그를 계수로 갖는 이차부등식이 항상 성립할 조건」 2 (0422·0423) · 「log_a x 치환 이차식의 최대·최소」 2 (0440·0451) · 나머지 21종은 1문씩
- 통찰 라벨 21개: RT 8 (0416·0424·0433·0444·0445·0454·0455·0456) · SYM 4 (0431·0433·0436·0455) · EQV 3 (0426·0430·0445) · MI 2 (0423·0452) · XU 2 (0441·0453) · PD 1 (0427) · VF 1 (0452). depth 2 는 4개(0423 MI · 0433 SYM · 0454 RT · 0455 SYM), depth 3 없음
- M_total: 4 ×7 · 5 ×13 · 6 ×14 · 7 ×6 · 8 ×3 (0423 · 0455 · 0456)
- target_cohort: 하위권 2 · 중하위권 25 · 중위권 9 · 중상위권 6 · 상위권 1 (0455)
- 그림: 8문(0429 · 0433 · 0436 · 0437 · 0445 · 0450 · 0454 · 0455 — 모두 `crop:fig-<id>.png`)
- 답 대조: 43문 모두 재계산 결과가 전사 answer 와 일치. 「전사 답 확인 필요」 0건. 0444 만 answer_source 「답지(쪽 렌더)」
- 벤더 구역별 ★: 유형 18 (★2·★2·★3) · 유형 UP 19 (★2·★3·★3) · 유형 UP 20 (★2·★2·★2·★3) · 유형 UP 21 (★3·★2·★3) · 시험에 꼭 나오는 문제 23문 (★1 2 · ★2 16 · ★3 4 · ★4 1) · 서술형 (★2·★3·★3·★3) · 실력 Up (★4·★4·★3)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0417 | 유형 UP 19 대표문제이나 「항상 성립 ↔ 판별식」 절차형·M_total 5 → 출발점 ★3 에서 −1 | ★2 / ★3 |
| RPM-ALG-0420 · 0421 · 0422 | 유형 UP 20 의 세 문항이 모두 로그를 변수로 한 판별식 절차형(M_total 5·통찰 0) → ★2. 1단 차이지만 유형 전체가 어긋나 기록 — 카탈로그에서 이 유형의 base ★ 는 ★2 가 적절 | ★2 / ★3 |
| RPM-ALG-0425 | 유형 UP 21 이나 주어진 log 1.07 과 대조만으로 끝나는 절차형 M_total 4 → ★2 | ★2 / ★3 |
| RPM-ALG-0433 | 시험에 꼭 나오는 문제(level 없음)이나 교육청 기출·RT d1+SYM d2 두 통찰로 +1 → ★4. 구역 출발점 ★2~3 대비 상향 | ★3 / ★4 |
| RPM-ALG-0445 | 평가원 기출·통찰 2개(EQV d1·RT d1)·M_total 7 — 둘 다 d1 이라 +1 미적용 ★3, ★4 도 가능 | ★3 / ★4 |
| RPM-ALG-0450 | 서술형 구역이나 밑 변환 한 번의 절차형 M_total 4 — ★2 로 기록(★1 후보) | ★1 / ★2 |
| RPM-ALG-0454 | 실력 Up ★4 유지했으나 통찰 1개(RT d2)·M_total 6 으로 가벼운 ★4 | ★3 / ★4 |
| RPM-ALG-0456 | 실력 Up 이나 D≥0 + a>0 판별식 절차만으로 같은 답 — 치역 통찰이 변별하지 않아 ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 6종 — 실생활 활용 4 · 양변에 로그(부등식) 3(+변형 2) · 항상 성립 조건 3 · 로그 계수 이차방정식 판별 3 · 로그 계수 이차부등식 항상 성립 2 · log_a x 치환 최대·최소 2.
- 따로 세워야 할 유형: 「지수에 로그가 포함된 방정식·부등식(양변에 로그)」 — 5문 반복(0414·0415·0416·0443·0447), base ★2, 교환 성질 a^{log b}=b^{log a} 변형(0416)은 같은 유형 안의 ★3 변이. 「로그부등식·로그방정식의 항상 성립/실근 존재 조건」(0417~0419·0456) — 치환 변수의 범위(모든 실수 vs 제한 구간)가 핵심 축이라 판별식 유형과 구분해 세우고, 구간 제한 변형에서 ★4 로 오르는 지점을 명시. 「로그를 계수로 갖는 이차방정식·부등식」(0420~0423·0448) — 6문 반복, base ★2, 최고차항 계수 0 분기(0423 MI d2)가 ★3 변이. 「밑이 다른 로그방정식(진수=1 또는 밑 같음)」(0452) — MI+VF 구조라 독립 유형(base ★3). 「지수·로그함수 그래프의 대칭(역함수·평행이동된 대칭축)」(0433·0436·0437·0455) — SYM 통찰이 ★3~4 를 만드는 핵심 유형이며 평행이동된 역함수 쌍(0455)이 ★4 대표. 「절댓값 로그함수 그래프와 직선·곡선의 교점」(0433·0454) — 가지 선택 + 대칭/중점 골조로 ★4 슬롯 후보.
- 통합해도 될 유형: 「로그함수의 최대·최소」 계열 — 단조성(0438)·합성(0439)·치환 이차식(0440·0451)·산술·기하평균(0441)을 한 유형 아래 sub 로 두되 AM-GM 은 XU 라 ★3. 「로그함수 그래프 → 미정계수」(0429·0430)와 「평행·대칭이동 판정」(0431)은 하나로. 「로그함수 성질 판정」(0434)·「역함수·합성함수 함숫값」(0428·0435)은 기본 유형으로 통합. 「로그의 실생활 활용」은 증가·감소·몇 년·몇 회를 한 유형으로 두고 근사값 나눗셈·부호 반전(0426·0449)을 ★3 변이로.
- ★ 변동 지점(변형 설계용): (a) 치환 변수의 정의역 제한(★3 → ★4 · MI/EQV), (b) 최고차항 계수의 0 분기(★2 → ★3 · MI d2), (c) 대칭축의 평행이동 위장(★3 → ★4 · SYM d2), (d) 진수 조건에 의한 근 기각(VF · ★2~3), (e) 근사 로그값 나눗셈의 경계·부호 반전(★2 → ★3), (f) 교환 성질·밑변환으로 표현을 통일해야 하는 구조(RT d1 · ★2 → ★3).
