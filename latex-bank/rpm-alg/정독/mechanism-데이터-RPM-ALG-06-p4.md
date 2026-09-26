---
name: mechanism-데이터-RPM-ALG-06-p4
description: RPM 대수 06 삼각함수의 그래프(4/4 · 유형 21 + 유형 UP 22~23 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 06 삼각함수의 그래프
  unit_code: ALG-06
  part: "4/4"
  extract_range: "88~93쪽 · 0656~0696"
  total_problems: 41
  unit_total: 144
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 출발점은 유형 21 ★2(상중 → ★3) · 유형 UP ★3(level 중 → −1 후보 · 상중 → ★3) · 시험에 꼭 나오는 문제 ★2(통찰 없음·M_total ≤4 → ★1 · 통찰이 있으면서 M_total ≥6, 또는 depth 2 이상·통찰 2개·M_total ≥7 → ★3) · 서술형 ★3(통찰 없음·M_total ≤5 → ★2) · 실력 Up ★4(−1 은 판정으로). depth_score 는 effective_depth 의 평균(통찰 없으면 0.00). Mₜ 는 함정 카테고리 수(0~1개 = 1점). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 06 삼각함수의 그래프 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 06 삼각함수의 그래프 단원의 마지막 범위(88~93쪽 · 0656~0696 · 41문)를 다룬다. 88쪽은 「유형 21 삼각함수가 포함된 방정식과 부등식의 활용」 4문(삼각함수가 계수인 이차방정식의 판별식·근의 부호), 89쪽은 「유형 UP 22 일반각에 대한 삼각함수의 성질의 활용」 3문(삼각형·내접사각형·단위원 등분점)과 「유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수」 4문(그래프 교점 세기), 90~92쪽은 「시험에 꼭 나오는 문제」 22문(주기·그래프·미정계수·최대최소·일반각·방정식·부등식의 중단원 종합), 93쪽은 「서술형 주관식」 4문과 「실력 Up」 4문이다. RPM 의 벤더 난이도 신호는 구역(유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(중·상중)·태그(대표문제·중요·서술형·교육청/평가원 기출)로 나타나며, 유형 구역은 대표문제·중(★2)·상중(★3), 유형 UP 은 ★3(중이면 −1 후보), 종합 구역은 ★2 를 출발점으로 M·I 판정에 따라 ★1~3 으로, 서술형은 ★3, 실력 Up 은 ★4 를 출발점으로 삼았다. 종합·서술형·실력 Up 구역에는 구역 신호보다 내용이 가벼운 문항이 여럿 있어(0667 · 0691 · 0692 · 0693 · 0694) 분류 이슈로 기록했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위의 반복 통찰은 그래프 교점 전환(I-RT · 유형 UP 23 전부)과 대칭 짝짓기(I-SYM · 0662 · 0663 · 0673 · 0674 · 0677 · 0693 · 0694), 조건의 동치 변환(I-EQV · 내각 합 → 보각·여각, 함수방정식 → 주기, 동차식 → tan)이다. 그림이 있는 문항은 5문(0662 · 0671 · 0673 · 0674 · 0688)이며 크롭 이미지를 확인해 라벨을 요약에 반영했다.

## 문항 데이터

### 유형 21 삼각함수가 포함된 방정식과 부등식의 활용

```yaml
- id: RPM-ALG-0656
  page: 88
  vendor_label: "유형 21 삼각함수가 포함된 방정식과 부등식의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대하여 이차부등식 x²−2x sinθ−3cos²θ+2 ≥ 0 이 성립하도록 하는 θ 의 값의 범위(0≤θ<π).
  category: "항등 부등식 → 판별식 ≤ 0 → sin 통일 → 삼각부등식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4 = sin²θ+3cos²θ−2 ≤ 0 을 sin 으로 통일하면 sin²θ ≥ 1/2. 0≤θ<π 에서 sinθ ≥ 0 이므로 sinθ ≥ √2/2 → π/4 ≤ θ ≤ 3π/4. 「모든 실수 x」→ 판별식은 학습된 절차라 통찰 없음. 통찰 0·M_total 5 로 −1 후보지만 판별식 → 삼각부등식 두 단계 사슬이라 유형 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "모든 x 에서 ≥0 → D/4 = sin²θ+3cos²θ−2 ≤ 0 → sin²θ ≥ 1/2 → 0≤θ<π 에서 π/4 ≤ θ ≤ 3π/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{4}\le\theta\le\dfrac{3}{4}\pi$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 계수(−2sinθ)와 상수항(−3cos²θ+2)의 계수를 바꿔 sin²θ 의 경계값(1/2 → 3/4·1/4)이 특수각 삼각비가 되게 조정. 제약: 판별식이 sin(또는 cos) 하나의 이차부등식으로 정리되어야 하고, θ 범위가 [0,π) 면 sin 부호가 고정되어 구간이 하나."
    creative: "(1) 범위를 0≤θ<2π 로 넓혀 |sinθ| ≥ √2/2 의 두 구간을 묻기(★2 · T-범위 증가) (2) 「실근을 갖지 않도록」으로 뒤집어 D<0(★2) (3) 판별식이 sin·cos 혼합으로 남아 tan 으로 통일해야 풀리게 하면 EQV d1 추가 → ★3."
```

```yaml
- id: RPM-ALG-0657
  page: 88
  vendor_label: "유형 21 삼각함수가 포함된 방정식과 부등식의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이차방정식 x²−4x sinθ+1=0 이 중근을 갖도록 하는 θ 의 두 값 α<β (0<θ<π) 에 대하여 cos(β−α) 의 값.
  category: "중근 → D=0 → sinθ=1/2 → 두 각 → 차의 cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4 = 4sin²θ−1 = 0 → sinθ = ±1/2, 0<θ<π 에서 sinθ = 1/2 → α = π/6, β = 5π/6 → cos(2π/3) = −1/2. sinθ = −1/2 기각이 T-범위 함정 하나. 통찰 없음·M_total 5 · 유형 중 → ★2.
  tier: star_2
  mechanism_primary: "중근 → D/4 = 4sin²θ−1 = 0 → sinθ = 1/2 (0<θ<π) → α=π/6, β=5π/6 → cos(β−α) = cos(2π/3) = −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수 −4sinθ 를 −2√2 sinθ(sinθ = ±√2/2)·−4cosθ 등으로 바꿔 특수각이 나오게. 제약: 판별식이 sin²θ = 특수값 꼴이어야 하고, θ 범위에 따라 근이 두 개(0<θ<π)인지 네 개인지 달라지므로 α, β 만 나오도록 범위 고정."
    creative: "(1) cos(β−α) 대신 sin(α+β)·tan(β−α) 를 묻기(★2) (2) 범위를 0<θ<2π 로 넓혀 네 근 중 최대·최소의 차(★2 · T-범위) (3) 「두 근의 차가 2π/3」 조건으로 계수를 결정하게 하면 BW d1 → ★3."
```

```yaml
- id: RPM-ALG-0658
  page: 88
  vendor_label: "유형 21 삼각함수가 포함된 방정식과 부등식의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차방정식 x²−3x+sin²θ−3cos²θ=0 이 서로 다른 부호의 실근을 갖도록 하는 θ 의 값이 아닌 것(0≤θ≤2π). 5지선다.
  category: "서로 다른 부호 실근 → 두 근의 곱 < 0 → cos²θ > 1/4 → 선택지 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근의 부호가 다르면 곱 sin²θ−3cos²θ < 0 (판별식은 자동으로 양수). 1−cos²θ−3cos²θ < 0 → cos²θ > 1/4 → |cosθ| > 1/2. ③ 2π/5 는 cos 72° ≈ 0.31 로 위배. 근의 부호 → 곱의 부호는 학습된 절차. M_total 5 · 중 → ★2.
  tier: star_2
  mechanism_primary: "서로 다른 부호 → αβ = sin²θ−3cos²θ < 0 → cos²θ > 1/4 → |cosθ| > 1/2 → 선택지 판정(2π/5 위배)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항의 계수(sin²θ−3cos²θ → sin²θ−cos²θ · 2sin²θ−cos²θ)를 바꿔 경계 cos²θ = 1/4 를 1/2·3/4 로. 제약: 곱이 cos(또는 sin) 하나의 제곱 부등식으로 정리되고, 오답 선택지는 경계 근처의 비특수각(2π/5 처럼)으로 잡아 「아닌 것」이 하나만 되게."
    creative: "(1) 「두 근이 모두 양수」로 바꾸면 D·합·곱 세 조건 결합(0659 골조 · ★3) (2) 「서로 다른 부호의 실근을 갖는 θ 의 범위」를 직접 구하게 하면 T-범위 증가(★2~3) (3) 참·거짓 ㄱㄴㄷ 보기 형식으로 바꾸면 MI d1 → ★3."
```

```yaml
- id: RPM-ALG-0659
  page: 88
  vendor_label: "유형 21 삼각함수가 포함된 방정식과 부등식의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차방정식 x²−4x cosθ+6sinθ=0 이 서로 다른 두 양의 실근을 갖도록 하는 θ 의 범위 α<θ<β (0≤θ<2π) 에 대하여 cosα+sinβ 의 값.
  category: "두 양의 실근 → D>0·합>0·곱>0 → 세 조건 교집합 → 끝점 삼각함수값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합 4cosθ>0·곱 6sinθ>0 으로 0<θ<π/2, D/4 = 4cos²θ−6sinθ>0 → 2sin²θ+3sinθ−2<0 → (2sinθ−1)(sinθ+2)<0 → sinθ<1/2 → 0<θ<π/6. cosα+sinβ = 1+1/2 = 3/2. 근의 분리 세 조건은 학습된 절차라 통찰 없음. M_total 6(T-범위·T-경계) · 상중 → ★3 유지. [분류 이슈] 통찰 없는 ★3 — 절차형 상한, ★2/★3 경계.
  tier: star_3
  mechanism_primary: "두 양의 실근 → cosθ>0·sinθ>0·D>0 → (2sinθ−1)(sinθ+2)<0 → 0<θ<π/6 → cosα+sinβ = 1+1/2 = 3/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수(−4cosθ)·상수항(6sinθ)의 계수를 바꿔 D 의 이차부등식 경계(sinθ<1/2)를 다른 특수값으로. 제약: 부호 조건이 사분면 하나로 좁혀지고 D 의 이차식이 인수분해되며 세 조건의 교집합이 비어 있지 않아야 함."
    creative: "(1) 「서로 다른 두 음의 실근」으로 바꾸면 사분면만 바뀜(★3) (2) 「두 근이 모두 1 보다 큰」 조건으로 바꾸면 f(1)>0·축>1 로 조건 구조가 달라져 EQV d1 (★3~4) (3) 조건 하나만 남겨 「두 실근의 곱이 양수」로 줄이면 ★2."
```

### 유형 UP 22 일반각에 대한 삼각함수의 성질의 활용

```yaml
- id: RPM-ALG-0660
  page: 89
  vendor_label: "유형 UP 22 일반각에 대한 삼각함수의 성질의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    삼각형 ABC 의 내각 A, B, C 에 대한 보기(ㄱ sin((B+C)/2) = cos(A/2) · ㄴ tan(A/2) = −tan((B+C)/2) · ㄷ cos(B+C)>0 이면 예각삼각형) 중 옳은 것.
  category: "A+B+C=π → B+C=π−A 로 치환 → 여각·보각 공식 → 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내각 조건 A+B+C=π 를 (B+C)/2 = π/2−A/2, B+C = π−A 로 옮겨 여각·보각 공식이 적용되게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형·내접사각형의 내각 관계와 일반각 삼각함수의 성질"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ sin(π/2−A/2) = cos(A/2) 참. ㄴ tan(A/2) = tan(π/2−(B+C)/2) = 1/tan((B+C)/2) 이므로 거짓. ㄷ cos(B+C) = −cosA > 0 → A 둔각 → 둔각삼각형, 거짓. 내각 합을 여각 관계로 옮기는 EQV d1 하나·M_total 6 → 유형 UP 대표 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "A+B+C=π → (B+C)/2 = π/2−A/2 · B+C = π−A → ㄱ 여각 참 · ㄴ 역수 관계라 거짓 · ㄷ −cosA>0 → 둔각 거짓 → ㄱ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 함수 조합(sin↔cos · tan 의 부호·역수)을 바꿔 참·거짓 개수 조정. 제약: 삼각형 내각 조건(합 π · 각 각 0<A<π)을 유지해야 하며, ㄷ 처럼 부호로 삼각형 모양을 판정하는 보기는 cosA 의 부호와 각의 크기 대응이 성립하는 범위에서만."
    creative: "(1) 직각삼각형(C=π/2)으로 한정해 sinA = cosB 류 등식 판정(★2) (2) 「ㄷ 이 참이 되도록 부등호와 결론을 고치라」는 역방향 서술형(BW d1 · ★3) (3) 내접사각형의 대각 합 π 로 설정을 바꾸면 0661 골조."
```

```yaml
- id: RPM-ALG-0661
  page: 89
  vendor_label: "유형 UP 22 일반각에 대한 삼각함수의 성질의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    원에 내접하는 사각형 ABCD(어느 내각도 직각이 아님)에 대하여 네 내각의 sin·cos·tan 합이 각각 0 인지 묻는 보기 ㄱㄴㄷ 중 옳은 것.
  category: "내접사각형 → A+C=π·B+D=π → 보각 공식 → 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원에 내접」을 대각의 합 A+C = B+D = π 로 옮겨 각 함수의 보각 부호를 적용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형·내접사각형의 내각 관계와 일반각 삼각함수의 성질"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C = π−A, D = π−B. ㄱ sinC = sinA 라 합은 2(sinA+sinB) > 0, 거짓. ㄴ cosC = −cosA 라 합 0, 참. ㄷ tanC = −tanA (직각 아님 조건으로 정의됨) 라 합 0, 참. 내접 조건 → 대각 보각 EQV d1·M_total 6 → 상중 ★3.
  tier: star_3
  mechanism_primary: "내접 → A+C = B+D = π → sin(π−A)=sinA · cos(π−A)=−cosA · tan(π−A)=−tanA → ㄱ 거짓 · ㄴ 참 · ㄷ 참"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 함수를 sin²·cos² 이나 sinA·sinC 곱 등으로 바꿔 참·거짓 재배치. 제약: 「직각이 아님」 조건은 tan 이 정의되기 위한 것이므로 tan 보기를 유지하면 조건도 유지, 빼면 조건도 제거."
    creative: "(1) 사각형 대신 삼각형 내각으로 바꾸면 0660 골조(★3) (2) 「sinA+sinC = k 일 때 sinA」처럼 수치 계산으로 바꾸면 절차형 ★2 (3) 한 각의 삼각비를 주고 대각의 tan 을 묻는 수치형이 0688."
```

```yaml
- id: RPM-ALG-0662
  page: 89
  vendor_label: "유형 UP 22 일반각에 대한 삼각함수의 성질의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    단위원을 10등분하는 점 P₁~P₁₀(P₁₀ = (1,0), ∠P₁OP₁₀ = θ)에 대하여 sin·cos 의 kθ 값 사이 관계식 다섯 개 중 옳은 것. 그림(등분점 라벨·θ) 있음.
  category: "등분 → θ=π/5 · P_k 의 각 kθ → 단위원 대칭으로 관계식 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "등분점 P_k 를 각 kθ 의 삼각함수 좌표 (cos kθ, sin kθ) 로 읽음 — 기하 배치를 대수 관계로 전환"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축 대칭인 P₄·P₆ (6θ = 2π−4θ) 의 cos 이 같다는 대칭으로 ④ 를 확인하고 나머지는 보각·부호 대칭으로 기각"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "단위원 등분점과 일반각 삼각함수의 대칭 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    θ = 2π/10 = π/5 이고 P_k = (cos kθ, sin kθ). ④ cos6θ = cos(2π−4θ) = cos4θ 참(P₄·P₆ 이 x축 대칭). ① sin6θ = −sinθ 라 합 0, ② sin(−5θ) = −sinπ = 0 이라 합 sinθ, ③ cos4θ = −cosθ 라 cos2θ−cosθ ≠ 0, ⑤ cos3θ = cos(π/2+π/10) = −sin(π/10) ≠ sinθ. 그림 → 좌표 RT d1, 대칭 SYM d1 두 개지만 둘 다 얕고 M_total 5 → 상중 ★3 유지(+1 미채택).
  tier: star_3
  mechanism_primary: "10등분 → θ = π/5 · P_k = (cos kθ, sin kθ) → x축 대칭 P₄·P₆ → cos4θ = cos(2π−4θ) = cos6θ → ④"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: crop:fig-0662.png
  latex: latex-bank/rpm-alg/items/0662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등분 수(8·12 등분)와 선택지의 k 조합을 바꿔 참인 관계식이 하나만 남게. 제약: 등분 수 n 에 대해 θ = 2π/n 이고 대칭쌍(k, n−k: cos 같음 · k, n/2−k: sin 같음 · k, n/2+k: 부호 반전)이 한 개만 참이 되도록 선택지 배치. 그림의 점 라벨은 반시계 순서 고정."
    creative: "(1) 「옳은 것을 모두 고르시오」로 바꾸면 대칭쌍 전부 점검(MI d1 추가 · ★3~4) (2) 등분점 x좌표의 합(Σ cos kθ = 0)을 묻는 SYM d2 (★3) (3) 그림 없이 「정n각형의 꼭짓점」으로 서술하면 RT 부담 상승(★3~4)."
```

### 유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수

```yaml
- id: RPM-ALG-0663
  page: 89
  vendor_label: "유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    방정식 sin πx = (3/10)x 의 서로 다른 실근의 개수. 5지선다.
  category: "방정식 → y=sin πx 와 직선 y=3x/10 의 교점 → 원점 대칭으로 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대수적으로 풀 수 없는 방정식을 두 그래프(주기 2 의 sin πx · 원점 직선)의 교점 개수로 전환"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 함수 모두 기함수라 x>0 의 교점 3 개를 두 배하고 원점 1 개를 더함"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 그래프와 직선·곡선의 교점으로 세는 방정식의 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주기 2·진폭 1 인 sin πx 와 기울기 3/10 직선. x>0 에서 직선이 1 에 닿는 x = 10/3 이전의 양의 봉우리 (0,1)·(2,3) 에서 각각 1·2 개, x=0 이 1 개, x<0 은 대칭으로 3 개 → 7. 진폭 경계(T-경계)와 원점 중복 세기(T-부호)가 함정. 그래프 전환 RT d1·원점 대칭 SYM d1·M_total 6 → 유형 UP 대표 ★3 유지.
  tier: star_3
  mechanism_primary: "sin πx = 3x/10 → y=sin πx (주기 2) 와 직선 교점 → 0<x<10/3 에서 3 개 → 기함수 대칭 2·3+1 = 7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기(3/10 → 1/5·1/4·2/7)와 sin 의 주기(πx → 2πx·πx/2)를 바꿔 교점 수 조정. 제약: 직선이 진폭 1 에 닿는 x = 1/기울기 가 봉우리 중앙(x = 2m+1/2) 근처가 아니어야 접점 판정이 애매하지 않고, 기울기 양수·원점 통과를 유지하면 대칭 세기가 살아 있음."
    creative: "(1) 직선을 y = 3x/10+1/2 로 옮겨 대칭을 깨면 SYM 이 사라지고 세기 노동 증가(★3) (2) 기울기를 π 로 두면 원점에서 접하는지(기울기 비교) 판정(T-경계 · ★3~4) (3) |sin πx| 로 바꾸면 절댓값 그래프(0665 골조)."
```

```yaml
- id: RPM-ALG-0664
  page: 89
  vendor_label: "유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    0≤x≤2π 에서 방정식 sin x = cos 2x 의 서로 다른 실근의 개수.
  category: "y=sin x 와 y=cos 2x 그래프 → 교점 세기(접점 포함)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 함수로 통일되지 않는 방정식을 두 그래프(주기 2π · π)의 교점으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 그래프와 직선·곡선의 교점으로 세는 방정식의 실근 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 2π 의 sin x 와 주기 π 의 cos 2x 를 한 좌표평면에 그리면 x = π/6, 5π/6 에서 만나고 x = 3π/2 에서 최솟값 −1 을 공유하며 접한다 → 3. 접점을 두 개로 세거나 놓치는 것이 함정(T-경계). RT d1·M_total 6 이지만 골조가 두 그래프 그리기뿐이라 level 중 의 −1 후보를 채택해 ★2.
  tier: star_2
  mechanism_primary: "sin x = cos 2x → 두 그래프(주기 2π·π) → π/6·5π/6 교차 + 3π/2 접점 → 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 2x 를 cos 3x·sin 2x 로, 구간을 [0,π]·[−π,π] 로 바꿔 교점 수 조정. 제약: 접점(두 함수의 최대·최소가 같은 x)이 생기는지 미리 확인하고, 닫힌 구간 끝점의 포함 여부를 답에 반영."
    creative: "(1) 구간을 0≤x<2π 로 반열림하면 끝점 판정(T-범위)만 바뀜(★2) (2) 「근의 합」을 물으면 근 위치 확정 필요 → ★3 (3) 대수 과정에는 2배각 공식이 없으므로 그래프가 정석 — cos 2x = 1−2sin²x 를 주고 대수 풀이를 요구하면 다른 유형(치환 이차방정식 · ★2)."
```

```yaml
- id: RPM-ALG-0665
  page: 89
  vendor_label: "유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    방정식 |cos 2x| = (2/π)x 의 서로 다른 실근의 개수.
  category: "절댓값 그래프(주기 π/2) 와 원점 직선 → x≥0 에서 교점 세기 → 끝점 x=π/2 접촉 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 개수로 전환하되 x=π/2 부근에서 곡선이 직선 위에 있음을(기울기 0 인 최고점 vs 기울기 2/π) 따져야 (π/4, π/2) 안의 교점을 놓치지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 그래프와 직선·곡선의 교점으로 세는 방정식의 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |cos 2x| 는 주기 π/2·값 [0,1], 직선은 x=π/2 에서 1. 우변 ≥ 0 이라 x≥0 만 보면 (0,π/4) 에서 1 개, (π/4,π/2) 에서 곡선이 0 → 1 로 오르며 직선을 다시 넘어 1 개, x=π/2 에서 둘 다 1 이라 1 개 → 3. 끝점이 접촉이면서 그 직전에 교차가 하나 더 있는 판정이 핵심이라 RT d2(T-범위·T-경계). M_total 6. level 중 의 −1 후보를 기각하고 유형 UP 출발 ★3 유지 — [분류 이슈] 벤더 중(★2) vs 판정 ★3, ★2/★3 경계.
  tier: star_3
  mechanism_primary: "|cos 2x| = 2x/π → x≥0 · 주기 π/2 그래프 vs 직선 → (0,π/4) 1 · (π/4,π/2) 1 · x=π/2 접촉 1 → 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기를 2/π(x=π/2 에서 1) → 1/π(x=π 에서 1)·4/π 로 바꿔 세는 봉우리 수 조정. 제약: 기울기 k 에 대해 직선이 1 에 닿는 x=1/k 가 |cos 2x| 의 최고점(x = mπ/2)과 일치하는지 여부가 접촉 판정을 만드므로 의도적으로 맞추거나 피할 것. 우변 ≥ 0 이므로 x≥0 만 세는 조건 유지."
    creative: "(1) |cos 2x| 를 |sin 2x| 로 바꾸면 원점 접촉 판정이 추가(★3) (2) 직선을 y = 2x/π−1 로 평행이동하면 x 범위 조건이 사라져 음수 쪽도 세야 함(★3) (3) 「가장 큰 근」을 묻는 서술형으로 바꾸면 접촉점 판정이 답이 됨(★3)."
```

```yaml
- id: RPM-ALG-0666
  page: 89
  vendor_label: "유형 UP 23 삼각함수가 포함된 방정식의 실근의 개수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x) = √(1−cos²πx), g(x) = |x−2| 에 대하여 방정식 f(x)−g(x) = 0 의 서로 다른 실근의 개수. 5지선다.
  category: "√(1−cos²) = |sin πx| → 절댓값 사인 그래프와 V 자 그래프의 교점 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x) = |sin πx| 로 고친 뒤 두 그래프의 교점 개수로 전환(g ≤ 1 인 1≤x≤3 에서만 만남)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 그래프와 직선·곡선의 교점으로 세는 방정식의 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1−cos²πx = sin²πx 이므로 f = |sin πx|(주기 1·값 [0,1]). g ≤ 1 인 [1,3] 만 보면 되고 x=2 에서 둘 다 0 이라 1 개, (2,3) 에서 봉우리 하나와 직선 y = x−2 가 1 번, (1,2) 도 대칭으로 1 번 → 3. 근호 → 절댓값이 부호 함정, 꼭짓점과 영점 일치가 경계 함정. RT d1·M_total 6 → 상중 ★3.
  tier: star_3
  mechanism_primary: "f = |sin πx| → g ≤ 1 인 [1,3] 만 → x=2 공통 영점 1 + 양쪽 봉우리 각 1 → 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 꼭짓점(x−2 → x−3·x−5/2)과 f 의 주기(πx → 2πx)를 바꿔 교점 수 조정. 제약: 꼭짓점이 |sin| 의 영점(정수)에 있으면 공통 영점 1 개가 생기고 반정수에 있으면 최고점과 만나므로 개수가 달라짐 — 의도한 쪽으로 고정. |x−c| ≤ 1 인 구간 길이 2 안의 봉우리 수를 미리 셈."
    creative: "(1) 근호를 빼고 f = sin πx 로 두면 음수 구간이 생겨 교점 수가 줄어듦(★2~3) (2) g 를 −|x−2|+1 로 뒤집으면 봉우리와 산 모양의 교점(★3) (3) 「실근의 합」으로 바꾸면 x=2 대칭으로 합 = 2·개수 → SYM d1 추가(★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0667
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다섯 함수(cos x · 2sin x+1 · |cos x| · tan(x/2)+1 · 3sin(x/2)−1) 중 주기가 가장 큰 것. 5지선다.
  category: "각 함수의 주기 → 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 주기 비교·주기 배수 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주기 2π·2π·π·2π·4π → ⑤. 주기 공식 대입 한 단계(|cos x| 주기 반감·tan 주기 π/|b| 가 표기 함정). 통찰 없음·M_total 4 → 종합 구역 출발 ★2 에서 −1 → ★1. [분류 이슈] 종합 구역이지만 교과서 수준.
  tier: star_1
  mechanism_primary: "주기: 2π/|b| (sin·cos) · π/|b| (tan) · |cos x| 는 π → 3sin(x/2)−1 의 4π 가 최대"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 함수의 b(1/2·1/3·2)와 절댓값·tan 여부를 바꿔 최댓값 위치 조정. 제약: 정답이 하나만 되도록 주기가 겹치지 않게 하고, |sin|·|cos| 는 주기 반감·|tan| 은 그대로임을 반영."
    creative: "(1) 「주기가 가장 작은 것」(★1) (2) |sin x|+|cos x| 처럼 합성 절댓값(주기 π/2)을 넣으면 EQV d1 (★2) (3) f(x+p)=f(x) 조건형(0668 골조)."
```

```yaml
- id: RPM-ALG-0668
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다섯 함수(sin πx · sin(3πx/2) · cos(5πx/2) · cos(πx/3) · tan 2πx) 중 정의역의 모든 x 에 대하여 f(x+8) = f(x) 를 만족시키지 않는 것. 5지선다.
  category: "f(x+8)=f(x) → 8 이 주기의 양의 정수배 → 각 주기 계산 → 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "함수방정식 f(x+8) = f(x) 를 「기본 주기가 8 을 나눔」으로 옮김(주기가 8 과 같아야 한다는 오독 방지)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 주기 비교·주기 배수 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 2·4/3·4/5·6·1/2. 8/6 이 정수가 아닌 ④. 「배수」로 읽는 EQV d1 이 관문이고 나머지는 주기 공식 다섯 번. M_total 5 → 종합 출발 ★2 유지(통찰 하나지만 d1·M 5).
  tier: star_2
  mechanism_primary: "f(x+8)=f(x) ⇔ 8 = n·주기 → 주기 2·4/3·4/5·6·1/2 → 6 만 8 을 안 나눔 → ④"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8 을 6·12 로, 각 함수의 b 를 바꿔 「나누지 않는」 함수가 하나만 되게. 제약: 주기 = 2π/b(tan 은 π/b)가 유리수가 되도록 b 에 π 를 포함하고, 정답 이외의 주기는 모두 8 의 약수(4/3·4/5 처럼 분수도 가능)."
    creative: "(1) 「만족시키는 것을 모두 고르시오」(★2) (2) f(x+8)=f(x) 를 만족시키는 양수 p 의 최솟값(=주기)을 묻는 0689 골조(★2~3) (3) f(x+8) = −f(x) 조건(반주기)으로 바꾸면 EQV d2 → ★3."
```

```yaml
- id: RPM-ALG-0669
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = sin(2πx−π/3)+5 의 주기 a·최댓값 b, 그리고 y = sin 2πx 의 그래프를 x축 방향으로 c, y축 방향으로 d 만큼 평행이동한 것이라 할 때 ad+bc 의 값.
  category: "b 로 묶기 → 주기·최대·평행이동량 읽기 → 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a sin(bx+c)+d 의 그래프와 평행이동·대칭이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin 2π(x−1/6)+5 → a = 1, b = 6, c = 1/6, d = 5 → ad+bc = 5+1 = 6. x 항을 2π 로 묶지 않고 c = π/3 으로 읽는 실수(T-단위)가 주 함정. 통찰 없음·M_total 5 → 종합 출발 ★2 유지(−1 후보지만 묶기 함정으로 ★1 은 아님).
  tier: star_2
  mechanism_primary: "sin(2πx−π/3)+5 = sin 2π(x−1/6)+5 → a=1 · b=6 · c=1/6 · d=5 → ad+bc = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(2π → π·4π), 위상(−π/3 → +π/2), 상수항(5)을 바꿔도 됨. 제약: c = 위상/b 가 간단한 유리수 또는 π 의 유리수배가 되게 하고, 묻는 결합식(ad+bc)이 정수로 정리되게."
    creative: "(1) cos 으로 바꾸고 「y = sin 2πx 를 평행이동」이라 하면 cos→sin 위상 변환 한 단계 추가(EQV d1 · ★2~3) (2) 그래프 그림을 주고 a~d 읽기(RT d1 · 0671 골조) (3) 최솟값·y절편을 함께 물으면 노동만 증가(★2)."
```

```yaml
- id: RPM-ALG-0670
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = a sin x−b, g(x) = −3x+2 에 대하여 (g∘f)(x) 의 최댓값이 11, 최솟값이 −13 일 때 ab 의 값(a>0).
  category: "합성 → −3a sin x+3b+2 → 최대·최소 연립 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최대·최소 — 치환 후 일차·이차·절댓값 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (g∘f)(x) = −3a sin x+3b+2. a>0 이므로 최대 3a+3b+2 = 11 (sin x = −1), 최소 −3a+3b+2 = −13 → a = 4, b = −1 → ab = −4. 계수 −3a<0 으로 최대·최소가 실현되는 sin 값이 뒤집히는 것이 부호 함정. 합성 후 일차식 연립 — 학습된 절차. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(g∘f)(x) = −3a sin x+3b+2 → 최대 3a+3b+2 = 11 · 최소 −3a+3b+2 = −13 → a=4, b=−1 → ab = −4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 기울기·절편, 최댓값·최솟값을 바꿔 a, b 정수해가 나오게. 제약: 최대−최소 = 2·|기울기|·a 이므로 차가 |기울기| 의 짝수배여야 a 정수. g 의 기울기 부호가 최대·최소가 실현되는 sin 값을 뒤집음(T-부호)."
    creative: "(1) f∘g 로 순서를 바꾸면 sin(−3x+2) 의 진폭·주기 문제로 골조 변경(★2) (2) g 를 이차함수로 바꾸면 치환 이차함수 최대·최소(★2~3) (3) 「최댓값과 최솟값의 합」만 주면 미정계수 하나가 남아 부정 — 조건 개수 유지 필수."
```

```yaml
- id: RPM-ALG-0671
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림의 y = cos a(x+b)+1 그래프(최댓값 2 가 x = −π/3, 2π/3 에서)를 읽어 상수 a, b 에 대한 ab 의 값(a>0, 0<b<π). 그림 있음.
  category: "그래프 읽기 → 이웃 최고점 간격 = 주기 → a · 최고점 위치 → b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 최고점 두 개(−π/3, 2π/3)를 주기 π 와 x축 평행이동 −π/3 로 읽어 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 삼각함수의 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주기 = 2π/3−(−π/3) = π → a = 2. cos 2(x+b) 의 최고점은 x = −b+nπ → −b = −π/3 (0<b<π · T-범위) → b = π/3. ab = 2π/3. 그래프 → 식 RT d1·M_total 6 → 종합 구역 ★3(통찰 있고 M 6). 중요 태그 +0.
  tier: star_3
  mechanism_primary: "최고점 간격 π = 주기 → a = 2 → 최고점 x = −π/3 = −b+nπ, 0<b<π → b = π/3 → ab = 2π/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}\pi$'
  answer_source: "답지"
  figure: crop:fig-0671.png
  latex: latex-bank/rpm-alg/items/0671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 최고점 위치(−π/3·2π/3 → −π/4·3π/4 등)와 y축 이동(+1)을 바꿔도 됨. 제약: 최고점 두 개의 차가 주기 = 2π/a 가 되도록 a 가 자연수·b 가 0<b<π 안에 유일하게 결정되도록 그림 라벨 조정. 그림의 축 눈금 라벨을 새 값으로 갱신."
    creative: "(1) sin 으로 바꾸면 최고점이 아닌 영점을 읽게 되어 위상 결정이 한 단계 늘어남(★3) (2) 최고점 대신 「x절편 두 개」만 주면 반주기 판정 MI d1 (★3~4) (3) b 의 범위를 −π<b<0 으로 바꾸면 n 선택만 바뀜(★3)."
```

```yaml
- id: RPM-ALG-0672
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = a|sin bx|+c 가 ㈎ 최댓값과 최솟값의 차 2 ㈏ 주기가 y = cos 6x 와 같음 ㈐ y절편 3 을 만족할 때 a+b+c 의 값(a>0, b>0).
  category: "차 = a → 주기 π/b = π/3 → b · f(0) = c → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소·주기 조건으로 삼각함수의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최대 a+c·최소 c 의 차 a = 2. |sin bx| 의 주기 π/b 가 cos 6x 의 π/3 → b = 3. f(0) = c = 3. 합 8. 절댓값 사인의 주기 반감(T-표기)이 유일한 함정. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "최대−최소 = a = 2 → π/b = π/3 → b = 3 → f(0) = c = 3 → a+b+c = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차(2)·비교 함수(cos 6x → tan 2x 등)·y절편을 바꿔 정수 a, b, c 가 나오게. 제약: |sin| 의 최솟값이 0 이므로 y절편 = c 가 되며, 비교 함수의 주기와 π/b 가 맞아떨어지게 b 자연수."
    creative: "(1) |sin| 대신 |cos bx| 로 두면 y절편 = a+c 로 조건이 얽힘(★2) (2) 조건 ㈐ 를 「f(π/12) = 4」로 바꾸면 sin 값 계산이 추가(★2~3) (3) 그래프 그림으로 조건을 주면 RT d1 (★3)."
```

```yaml
- id: RPM-ALG-0673
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림의 y = a cos bx 그래프가 x축에 평행한 직선 l 과 x = 1, 5 에서 만나고, l·x축·두 직선 x=1, x=5 로 둘러싸인 도형의 넓이가 24 일 때 ab 의 값(a>0, b>0). 그림 있음.
  category: "교점 중점 = 최소점 → 반주기 3 → b · 넓이 → 직선 높이 6 → a cos b = 6 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선과의 두 교점 x=1, 5 의 중점 x=3 이 최소점(대칭축)이라 반주기 = 3"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형 넓이 24 를 직선 높이 6 으로 옮기고 y(1) = a cos(π/3) = 6 이라는 식으로 전환"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 삼각함수의 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 두 교점 사이에 최소점이 있으므로 x=3 이 최소점, 반주기 3 → 주기 6 → b = π/3. 넓이 = 4·높이 = 24 → 직선 y = 6 → a cos(π/3) = a/2 = 6 → a = 12 → ab = 4π. 대칭으로 주기를 읽는 SYM d1 + 넓이 → 식 RT d1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "교점 1, 5 의 중점 3 = 최소점 → 주기 6 → b = π/3 → 넓이 4h = 24 → h = 6 = a cos(π/3) → a = 12 → ab = 4π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\pi$'
  answer_source: "답지"
  figure: crop:fig-0673.png
  latex: latex-bank/rpm-alg/items/0673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 x(1, 5 → 2, 6·1, 3)와 넓이(24)를 바꿔 a 가 정수, b 가 π 의 유리수배가 되게. 제약: 두 교점의 중점이 최소점이 되도록 그림의 곡선 위치 고정, cos(b·x₁) 가 특수각 값이어야 a 가 깔끔. 그림 눈금 라벨 갱신."
    creative: "(1) 넓이 대신 「직선 l 의 y절편이 6」으로 주면 RT 가 빠져 ★2 (2) 교점을 서로 다른 봉우리에 두면 주기 판정에 MI d1 추가(★3~4) (3) y = a sin bx 로 바꾸면 중점이 최고점 대칭이 되어 위상 재해석(★3)."
```

```yaml
- id: RPM-ALG-0674
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y = sin 2x (0≤x≤π) 의 그래프가 y = 3/5 와 두 점 A, B, y = −3/5 와 두 점 C, D 에서 만날 때 x좌표 a, b, c, d 에 대하여 a+2b+2c+d 의 값. 그림 있음.
  category: "점대칭 (π/2, 0) → a+d = π · b+c = π → 결합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프의 점대칭(π/2, 0)으로 a+d = π, b+c = π 를 뽑아 계수 1,2,2,1 을 (a+d)+2(b+c) 로 묶음 — 선대칭(a+b = π/2)만 쓰면 b+c 가 남으므로 어느 대칭을 쓸지 골라야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 그래프의 대칭성을 이용한 교점 x좌표의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sin 2x 는 [0,π] 에서 (π/2, 0) 점대칭이라 A↔D, B↔C 가 대응: a+d = π, b+c = π. a+2b+2c+d = (a+d)+2(b+c) = 3π. 선대칭(a+b = π/2, c+d = 3π/2)만으로는 b+c 가 남아 한 번 더 대칭이 필요해 SYM d2. M_total 5 → 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "sin 2x 의 (π/2, 0) 점대칭 → a+d = π · b+c = π → a+2b+2c+d = (a+d)+2(b+c) = 3π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\pi$'
  answer_source: "답지"
  figure: crop:fig-0674.png
  latex: latex-bank/rpm-alg/items/0674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 높이(3/5 → 임의의 0<k<1)는 답에 영향 없음(대칭만 씀). 계수 조합(1,2,2,1 → 1,1,1,1·2,1,1,2)과 구간([0,π] → [0,2π] 로 넓히면 점 8 개)을 바꿀 수 있음. 제약: 계수가 대칭쌍끼리 같아야 합이 결정됨 — 비대칭 계수(예 1,2,3,4)면 개별 x 값이 필요해 k 가 특수각 값이어야 함."
    creative: "(1) y = cos 2x 로 바꾸면 선대칭축이 x = π/2 로 바뀌어 짝이 재배치(★3) (2) 「b−a 와 d−c 의 관계」를 물으면 선대칭 활용(★2~3) (3) 직선 높이 k 를 두고 「a+b+c+d 가 k 에 무관함」을 서술하게 하면 SYM 을 명시적으로 논증(★3)."
```

```yaml
- id: RPM-ALG-0675
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y = cos 2x+1 의 그래프를 x축 방향으로 π/2 만큼 평행이동한 뒤 y축에 대하여 대칭이동한 그래프의 식. 5지선다.
  category: "평행이동 x→x−π/2 → cos(2x−π) = −cos 2x → y축 대칭 x→−x → 우함수라 불변"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a sin(bx+c)+d 의 그래프와 평행이동·대칭이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos 2(x−π/2)+1 = cos(2x−π)+1 = −cos 2x+1. y축 대칭은 x→−x 인데 cos 2x 가 우함수라 그대로 → ④. 일반각 부호 정리(T-부호) 하나가 함정. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x→x−π/2 → cos(2x−π)+1 = −cos 2x+1 → x→−x → 우함수라 −cos 2x+1 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(π/2 → π/4: cos(2x−π/2) = sin 2x)·y 이동(+1)·b(2 → 3)를 바꿔 선택지가 서로 다르게. 제약: 이동량×b 가 π/2 의 정수배여야 sin·cos 로 깔끔히 정리되고, 대칭이동을 원점·x축으로 바꾸면 부호가 달라지므로 선택지 갱신."
    creative: "(1) sin 으로 바꾸면 y축 대칭에서 부호가 뒤집혀 함정 하나 추가(★2) (2) 순서를 「대칭 후 평행이동」으로 바꾸면 결과가 달라짐을 비교하는 ㄱㄴㄷ(MI d1 · ★3) (3) 「이 그래프가 y = a sin(bx+c)+d 와 일치할 때 abcd」로 바꾸면 위상 변환 EQV d1 (★3)."
```

```yaml
- id: RPM-ALG-0676
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    cos(π+θ)tan(2π−θ)/sin(5π/2+θ) − sin(3π−θ)tan(−θ)/cos(3π/2−θ) 를 간단히 한 것. 5지선다.
  category: "일반각 여섯 개 정리 → 각 항 tanθ → 차 0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질 — 식의 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 항 (−cosθ)(−tanθ)/cosθ = tanθ, 뒤 항 sinθ·(−tanθ)/(−sinθ) = tanθ → 차 0. 5π/2·3π/2 정리의 부호(T-부호)가 함정. 정리 여섯 번의 노동(Mₖ 2)이지만 통찰 없음 → ★2. 중요 태그 +0.
  tier: star_2
  mechanism_primary: "cos(π+θ) = −cosθ · tan(2π−θ) = −tanθ · sin(5π/2+θ) = cosθ → tanθ ; sin(3π−θ) = sinθ · tan(−θ) = −tanθ · cos(3π/2−θ) = −sinθ → tanθ ; 차 = 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 각(π+θ → π−θ · 5π/2 → 3π/2 등)을 바꿔 결과가 2tanθ·−2/tanθ 등 다른 선택지가 되게. 제약: 정리 후 분모가 0 이 되지 않도록 sin·cos 가 약분되게 짝을 맞추고, 결과가 선택지 중 하나와 정확히 일치하게."
    creative: "(1) θ 에 특정 값(π/6)을 넣어 수치 계산(★1~2) (2) 결과식 = k 를 주고 θ 의 범위를 묻는 삼각방정식 연계(★2~3) (3) 항의 개수를 줄이고 sin²+cos² 로 정리되게 하면 0690 골조."
```

```yaml
- id: RPM-ALG-0677
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    cos²(π/10)+cos²(2π/10)+…+cos²(9π/10) 의 값.
  category: "보각 짝(k, 10−k) → 제곱 같음 · 여각 짝(k, 5−k) → 제곱 합 1 → 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cos(π−x) = −cos x 로 k 와 10−k 항의 제곱이 같고, cos(π/2−x) = sin x 로 k 와 5−k 항의 제곱 합이 1 이 되는 두 대칭을 겹쳐 짝짓기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반각 삼각함수 값의 합 — 보각·여각 짝짓기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    5 번째 항 cos²(π/2) = 0. k = 1~4 는 (1,4)(2,3) 여각 짝으로 합 2, k = 6~9 는 보각 대칭으로 다시 2 → 4. 여각·보각 두 대칭을 겹쳐 쓰는 SYM d2. M_total 5 → 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "cos²(kπ/10) = cos²((10−k)π/10) · cos²(kπ/10)+cos²((5−k)π/10) = 1 · cos²(π/2) = 0 → 2+0+2 = 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(10 → 12·18·20)와 항 수(n−1 개)를 바꾸면 답은 (n−2)/2 (n 짝수). 제약: n 이 짝수여야 중간 항 cos²(π/2) = 0 이 생기고 여각 짝이 정확히 맞음. sin² 으로 바꾸면 값은 같고, 제곱 없이 cos 으로 바꾸면 보각 상쇄로 0."
    creative: "(1) 제곱 없이 cos(π/10)+…+cos(9π/10) 을 물으면 보각 상쇄 한 대칭만(SYM d1 · ★2) (2) tan²(π/10)·tan²(2π/10)·…·tan²(4π/10) 곱을 물으면 여각 곱 = 1 (★3) (3) 1°~89° 처럼 도 단위·항 수 89 로 바꾸면 0693 과 같은 구조로 확장(★3)."
```

```yaml
- id: RPM-ALG-0678
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y = |cos x−a|+2a (0<a<1) 의 최솟값이 1 일 때 최댓값.
  category: "t = cos x ∈ [−1,1] → V 자 |t−a|+2a → 최소 2a = 1 → a → 최대는 t = −1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최대·최소 — 치환 후 일차·이차·절댓값 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 t = a 가 [−1,1] 안이라 최솟값 2a = 1 → a = 1/2. 최댓값은 a 에서 먼 끝 t = −1: 3/2+1 = 5/2. 치환 + 절댓값 V 자 그래프 — 학습된 절차(T-범위: 어느 끝점이 최대인지). M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t = cos x ∈ [−1,1] → y = |t−a|+2a → 최소 2a = 1 → a = 1/2 → 최대 |−1−1/2|+1 = 5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 범위(0<a<1)·최솟값(1)·상수항 배수(2a)를 바꿔도 됨. 제약: 꼭짓점 t = a 가 [−1,1] 안에 있어야 최솟값이 2a 이고, 최댓값이 실현되는 끝점은 a 의 부호에 따라 바뀜(a<0 이면 t = 1)."
    creative: "(1) a 의 범위를 a>1 로 두면 꼭짓점이 구간 밖 → 최솟값이 끝점에서(EQV d1 · ★3) (2) |sin x−a|+|sin x+a| 로 절댓값 두 개면 구간 분할(★3) (3) 「최댓값과 최솟값의 합이 k」로 조건을 바꾸면 a 에 대한 방정식(★2~3)."
```

```yaml
- id: RPM-ALG-0679
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y = cos(π/2−x)cos(π/2+x)−2sin(π+x)+a 의 최댓값이 3 일 때 최솟값(a 는 상수).
  category: "일반각 정리 → −sin²x+2sin x+a → 치환 이차함수 [−1,1] 최대 → a → 최소"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최대·최소 — 치환 후 일차·이차·절댓값 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin x·(−sin x)+2sin x+a = −(t−1)²+1+a (t = sin x). 최대는 t = 1 에서 1+a = 3 → a = 2, 최소는 t = −1 에서 −3+2 = −1. 꼭짓점 t = 1 이 구간 끝(T-범위). 정리 + 치환 이차함수 — 절차. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cos(π/2−x) = sin x · cos(π/2+x) = −sin x · sin(π+x) = −sin x → y = −t²+2t+a (t∈[−1,1]) → 최대 t=1: 1+a = 3 → a=2 → 최소 t=−1: −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(2 → 1·3)와 최댓값(3)을 바꿔 a 정수. 제약: 꼭짓점 t = (계수)/2 가 [−1,1] 안이면 최댓값은 꼭짓점, 밖이면 끝점 — 어느 쪽인지 의도대로 고정(계수 2 는 꼭짓점 = 끝점 경계)."
    creative: "(1) 계수를 3 으로 두면 꼭짓점 t = 3/2 가 밖 → 끝점 최대(T-범위 강화 · ★2~3) (2) cos 으로 통일되게 각을 바꾸면 같은 골조 (3) 구간을 0≤x≤π/2 로 제한하면 t∈[0,1] 로 범위 재설정(EQV d1 · ★3)."
```

```yaml
- id: RPM-ALG-0680
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    0≤x≤π/4 에서 y = (sin x+cos x)/(3cos x−sin x) 의 최댓값 M·최솟값 m 에 대하여 M−m 의 값.
  category: "분자·분모를 cos x 로 나눔 → t = tan x ∈ [0,1] → y = (t+1)/(3−t) 증가 → 끝점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin·cos 의 동차 분수식을 cos x 로 나눠 tan 하나의 식으로 옮김"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y = (t+1)/(3−t) = −1+4/(3−t) 를 유리함수 그래프의 단조성으로 읽어 끝점에서 최대·최소"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 최대·최소 — 분수식을 tan 으로 통일(유리함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t = tan x ∈ [0,1], y = (t+1)/(3−t) = −1+4/(3−t) 는 t 에 대해 증가 → m = 1/3 (t=0), M = 1 (t=1) → 2/3. tan 통일 EQV d1 + 유리함수 단조 RT d1 두 개·M_total 5 → 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "cos x 로 나눔 → t = tan x ∈ [0,1] → y = (t+1)/(3−t) = −1+4/(3−t) 증가 → M−m = 1−1/3 = 2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 계수(1,1 / 3,−1)와 x 범위(π/4 → π/3)를 바꿔 t 범위와 유리함수 계수 조정. 제약: 분모가 범위 안에서 0 이 되지 않도록(3−t ≠ 0), 유리함수가 구간에서 단조이려면 점근선 t=3 이 범위 밖."
    creative: "(1) 분모를 sin x+2cos x 처럼 두면 tan 통일은 같고 단조 방향만 바뀜(★3) (2) 범위를 0≤x<π/2 로 열면 t→∞ 극한 처리(경계 EQV · ★3~4) (3) 「y = k 가 되는 x 가 존재할 k 의 범위」로 바꾸면 치역 문제(BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0681
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이차함수 y = x²−2x sinθ−cos²θ 의 그래프의 꼭짓점이 직선 y = 2√3x+2 위에 있도록 하는 θ 의 값을 모두(0≤θ<2π).
  category: "완전제곱 → 꼭짓점 (sinθ, −1) → 직선 대입 → sinθ = −√3/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차함수의 꼭짓점 조건(삼각방정식 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x−sinθ)²−sin²θ−cos²θ = (x−sinθ)²−1 → 꼭짓점 (sinθ, −1). −1 = 2√3 sinθ+2 → sinθ = −√3/2 → θ = 4π/3, 5π/3. sin²+cos² = 1 로 y좌표가 상수가 되는 것이 편의 장치. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 꼭짓점 (sinθ, −(sin²θ+cos²θ)) = (sinθ, −1) → −1 = 2√3 sinθ+2 → sinθ = −√3/2 → 4π/3, 5π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}\pi$, $\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편(2√3, 2 → 2, 1 등)을 바꿔 sinθ 가 특수각 값이 되게. 제약: 꼭짓점 y = −1 은 상수항 −cos²θ 와 −sin²θ 의 합이므로 상수항을 바꾸면 y 가 θ 에 의존해 방정식이 복잡해짐(예: +cos²θ 면 cos 2θ 꼴)."
    creative: "(1) 「꼭짓점이 제3사분면에 있도록 하는 θ」로 바꾸면 sinθ<0 부등식(★2) (2) 상수항을 −2cos²θ 로 바꿔 꼭짓점 y = −1−cos²θ 가 되게 하면 sin·cos 혼합 방정식 → 이차식 정리(EQV d1 · ★3) (3) 꼭짓점의 자취를 묻는 문제로 바꾸면 매개변수 소거(RT d1 · ★3)."
```

```yaml
- id: RPM-ALG-0682
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = 2x²+2x−1, g(x) = cos(πx/3) 에 대하여 0≤x<12 에서 f(g(x)) = g(x) 를 만족시키는 모든 실수 x 의 값의 합.
  category: "t = g(x) → 2t²+t−1 = 0 → cos(πx/3) = 1/2, −1 → 두 주기 안 여섯 근 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환·인수분해로 푸는 삼각방정식·부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (2t−1)(t+1) = 0 → cos(πx/3) = 1/2 에서 x = 1, 5, 7, 11, cos(πx/3) = −1 에서 x = 3, 9 → 합 36. 치환·인수분해·주기 6 의 두 주기 나열이 모두 학습된 절차. 구간 [0,12) 의 끝점 제외(T-범위·T-경계)가 함정. 통찰 없음이지만 M_total 7 → 종합 구역 ★3. 각 주기 안 두 근의 합이 대칭으로 6·18 이 되는 지름길이 있으나 필수는 아님.
  tier: star_3
  mechanism_primary: "t = g(x) → 2t²+t−1 = 0 → t = 1/2, −1 → cos(πx/3) = 1/2: x = 1,5,7,11 · = −1: x = 3,9 → 합 36"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(근 t 가 [−1,1] 안의 특수 cos 값이 되게), g 의 주기(πx/3 → πx/2·πx/6), 구간([0,12) → 주기의 정수배)을 바꿀 수 있음. 제약: 이차방정식의 근이 [−1,1] 밖이면 해가 사라지고, 구간 끝점의 포함 여부로 근 수가 달라짐."
    creative: "(1) 「근의 개수」만 물으면 노동 감소(★2) (2) 구간을 0≤x≤12 로 닫고 t = 1 이 근이 되도록 f 를 바꾸면 x = 0, 12 의 경계 함정 추가(★3) (3) 근의 합을 대칭으로 구하게 「x = 6 에 대칭」을 서술시키면 SYM d1 명시(★3)."
```

```yaml
- id: RPM-ALG-0683
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    π/2<x<3π/2 에서 방정식 √3sin²x−2sin x cos x−√3cos²x = 0 의 모든 근의 합.
  category: "동차 이차식 → cos²x 로 나눔 → √3tan²x−2tan x−√3 = 0 → tan x = √3, −1/√3 → 범위 안 근 → 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin²·sin cos·cos² 의 동차식을 cos²x 로 나눠 tan 의 이차방정식으로 옮김(cos x ≠ 0 확인 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환·인수분해로 푸는 삼각방정식·부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간 안에 cos x = 0 인 점이 없으므로 나눠서 (√3tan x+1)(tan x−√3) = 0. tan x = √3 → 4π/3, tan x = −1/√3 → 5π/6 → 합 13π/6. 각 tan 값을 길이 π 구간 안의 각으로 대응(T-범위). 동차식 → tan EQV d1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "동차 2차 → ÷cos²x → √3tan²x−2tan x−√3 = 0 → tan x = √3 (4π/3) · −1/√3 (5π/6) → 합 13π/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{13}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(√3, −2, −√3)를 바꿔 tan 의 이차식이 특수각 값으로 인수분해되게(예: 1, 0, −1 → tan x = ±1), 구간을 다른 길이 π 의 열린 구간으로. 제약: 구간 안에 cos x = 0 인 점이 있으면 나누기 전 따로 확인해야 하고, 각 tan 값이 구간 안에 정확히 하나씩 대응하도록 길이 π 구간."
    creative: "(1) 구간을 0≤x<2π 로 넓히면 근 4 개·합 계산 노동(★3) (2) 상수항이 0 이 아닌 sin²x−2sin x cos x = 1 꼴이면 1 = sin²+cos² 로 바꿔 동차화하는 한 단계 추가(EQV d2 · ★3~4) (3) 부등식 > 0 으로 바꾸면 tan 부등식과 사분면 판정(★3)."
```

```yaml
- id: RPM-ALG-0684
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    0≤x<2π 에서 방정식 sin²x+sin x = cos²x+cos x 의 근의 개수 a·가장 큰 근 b·가장 작은 근 c 에 대하여 a cos(b+c) 의 값.
  category: "이항 → (sin x−cos x)(sin x+cos x+1) = 0 → sin x = cos x · sin x+cos x = −1 (제곱 후 검증) → 근 넷 → 계산"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin²x−cos²x+sin x−cos x 를 (sin x−cos x) 공통인수로 묶는 인수분해 착안 — 한 함수로 통일되지 않는 식을 두 갈래 방정식으로 전환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin x+cos x = −1 을 제곱해 sin x cos x = 0 으로 풀면 후보 0, π/2, π, 3π/2 중 0, π/2 가 원식 위배로 기각"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "치환·인수분해로 푸는 삼각방정식·부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sin x = cos x → π/4, 5π/4. sin x+cos x = −1 → 제곱해 sin x cos x = 0 → 후보 넷 중 π, 3π/2 만 유효(T-부호 무연근). 근 π/4, π, 5π/4, 3π/2 → a = 4, b = 3π/2, c = π/4 → 4cos(7π/4) = 2√2. 인수분해 RT d1 + 무연근 기각 VF d1·M_total 8 → ★3(+1 후보지만 두 통찰 모두 d1 이라 ★4 미채택).
  tier: star_3
  mechanism_primary: "(sin x−cos x)(sin x+cos x+1) = 0 → sin x = cos x: π/4, 5π/4 · sin x+cos x = −1: 제곱·검증 → π, 3π/2 → a=4, b=3π/2, c=π/4 → 4cos(7π/4) = 2√2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수를 조정해 두 번째 인수를 sin x+cos x+k (k = ±1) 로 바꿀 수 있음. 제약: k = ±1 이어야 제곱 후 sin x cos x = 0 으로 떨어져 대수 과정 안에서 풀림(|k|>√2 면 해 없음, 그 외는 합성 필요). 구간 끝점 포함 여부에 따라 x = 0 후보 처리 주의."
    creative: "(1) 「근의 개수」만 물으면 VF 는 남고 계산 감소(★3) (2) 두 번째 인수를 sin x+cos x = 1 로 바꾸면 기각되는 후보가 π, 3π/2 로 바뀜(★3) (3) sin²x−cos²x = sin x−cos x 처럼 항을 줄이면 인수분해가 자명해져 RT 가 빠짐(★2)."
```

```yaml
- id: RPM-ALG-0685
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼각형 ABC 에서 cos A = −1/2 일 때 sin((B+C−2π)/2) 의 값. 5지선다.
  category: "B+C = π−A → 각 정리 −π/2−A/2 → −cos(A/2) → A = 2π/3 → −1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 내각 조건을 B+C = π−A 로 옮겨 구하는 각을 A 하나로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형·내접사각형의 내각 관계와 일반각 삼각함수의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (B+C−2π)/2 = (−π−A)/2 = −π/2−A/2 → sin = −cos(A/2)(T-부호). cos A = −1/2 → A = 2π/3 → −cos(π/3) = −1/2 → ②. 내각 조건 EQV d1 이지만 M_total 5 로 가벼워 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "B+C = π−A → (B+C−2π)/2 = −π/2−A/2 → sin(−π/2−A/2) = −cos(A/2) → A = 2π/3 → −1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos A 값(−1/2 → 1/2·−√2/2)과 묻는 식의 각(B+C−2π → B+C+π 등)을 바꿔 A/2 의 특수각이 나오게. 제약: cos A 값에서 A 가 삼각형 내각(0<A<π)으로 유일하게 결정되어야 하고, 정리 후 A/2 = π/6·π/4·π/3 같은 특수각."
    creative: "(1) tan A = k 로 주면 A 결정에 부호 판단 추가(★2) (2) 「sin((B+C)/2)·cos((B+C)/2)」 곱을 물으면 정리 두 번(★2~3) (3) 원에 내접하는 사각형으로 설정을 바꾸면 0688 골조."
```

```yaml
- id: RPM-ALG-0686
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    0≤x<2π 에서 부등식 2sin²x−3sin(π/2+x) ≥ 2cos x−4cos²x 의 해.
  category: "sin(π/2+x) = cos x → cos 통일 → 2cos²x−5cos x+2 ≥ 0 → (2cos x−1)(cos x−2) ≥ 0 → cos x ≤ 1/2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환·인수분해로 푸는 삼각방정식·부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반각 정리 뒤 sin² = 1−cos² 로 통일하면 (2cos x−1)(cos x−2) ≥ 0. cos x−2<0 이므로 cos x ≤ 1/2 (T-부호) → π/3 ≤ x ≤ 5π/3 (T-범위). 통찰 없음·M_total 6 → ★2. 중요 태그 +0.
  tier: star_2
  mechanism_primary: "sin(π/2+x) = cos x → 2(1−cos²x)−3cos x ≥ 2cos x−4cos²x → (2cos x−1)(cos x−2) ≥ 0 → cos x ≤ 1/2 → π/3 ≤ x ≤ 5π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{3}\le x\le\dfrac{5}{3}\pi$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, −3, 2, −4)를 바꿔 cos 의 이차부등식이 (2cos x∓1)(cos x−2) 꼴로 인수분해되게. 제약: 한 인수가 항상 음(cos x−2)이 되어야 부호 판단이 한 줄로 끝나고, 경계값 ±1/2 등 특수각."
    creative: "(1) 부등호 방향을 바꾸면 해가 두 구간(0≤x<π/3, 5π/3<x<2π)으로 갈라져 T-범위 강화(★2) (2) 「해가 α≤x≤β 일 때 β−α」로 물으면 같은 골조 서술형(★2) (3) 계수에 상수 a 를 넣어 「해가 존재할 a 의 범위」로 바꾸면 BW d1 (★3)."
```

```yaml
- id: RPM-ALG-0687
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    0≤θ<2π 에서 이차방정식 x²−(2sinθ)x−3cos²θ−5sinθ+5 = 0 이 실근을 갖도록 하는 θ 의 최솟값 α·최댓값 β 에 대하여 4β−2α 의 값. 5지선다.
  category: "D/4 ≥ 0 → sin 통일 → 2sin²θ−5sinθ+2 ≤ 0 → sinθ ≥ 1/2 → [π/6, 5π/6]"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4 = sin²θ+3cos²θ+5sinθ−5 ≥ 0 → 2sin²θ−5sinθ+2 ≤ 0 → (2sinθ−1)(sinθ−2) ≤ 0 → sinθ ≥ 1/2 (T-부호) → α = π/6, β = 5π/6 → 4β−2α = 3π → ①. 0656 과 같은 골조. 통찰 없음·M_total 5 → ★2. 기출 태그는 통찰이 없어 +0.
  tier: star_2
  mechanism_primary: "실근 → D/4 = sin²θ+3cos²θ+5sinθ−5 ≥ 0 → (2sinθ−1)(sinθ−2) ≤ 0 → sinθ ≥ 1/2 → α=π/6, β=5π/6 → 4β−2α = 3π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sinθ 의 일차·상수 계수(−5, 5)와 cos² 계수(−3)를 바꿔 sin 의 이차부등식 경계가 특수값이 되게, 묻는 결합식(4β−2α)을 바꿔도 됨. 제약: 판별식이 sin 하나로 통일되고 항상 음인 인수(sinθ−2)가 있어야 부호 판단이 간단."
    creative: "(1) 「실근을 갖지 않도록」으로 뒤집으면 여집합 구간 두 개(★2) (2) x 계수를 2cosθ 로 바꾸면 cos 통일(★2) (3) 「서로 다른 두 양의 근」으로 바꾸면 0659 골조(★3)."
```

```yaml
- id: RPM-ALG-0688
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원에 내접하는 사각형 ABCD 에서 ∠BAD = α, ∠BCD = β, cos α = 1/3 일 때 tan β 의 값. 그림(원·사각형·α, β 위치) 있음.
  category: "내접 → α+β = π → tan β = −tan α → sin α = 2√2/3 → tan α = 2√2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원에 내접」을 대각의 합 π 로 옮겨 β 를 α 의 보각으로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형·내접사각형의 내각 관계와 일반각 삼각함수의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    β = π−α → tan β = −tan α. 0<α<π 이므로 sin α = √(1−1/9) = 2√2/3 (T-부호 양수), tan α = 2√2 → −2√2. 내접 조건 EQV d1 이지만 M_total 5 로 가벼워 ★2 유지.
  tier: star_2
  mechanism_primary: "내접 → α+β = π → tan β = −tan α → sin α = 2√2/3 (양수) → tan α = 2√2 → tan β = −2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2\sqrt{2}$'
  answer_source: "답지"
  figure: crop:fig-0688.png
  latex: latex-bank/rpm-alg/items/0688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos α 값(1/3 → 2/3·−1/4)을 바꿔 sin α 가 근호 하나로 정리되게. 제약: α 가 내각이라 sin α>0 고정, cos α 부호는 자유. 그림은 각 위치 라벨(α 는 A, β 는 C)만 유지하면 됨."
    creative: "(1) sin α 를 주고 cos β 를 물으면 cos α 부호가 미정이라 조건 추가 필요(MI d1 · ★3) (2) 삼각형 내각으로 바꾸면 0685 골조 (3) 「tan α+tan β 의 값」으로 바꾸면 계산 없이 0 (SYM d1 · ★2)."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0689
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    f(x) = a sin b(x+π/2)+c 의 최댓값이 1·최솟값이 −3 이고, 모든 실수 x 에 대하여 f(x+p) = f(x) 인 양수 p 의 최솟값이 4π 일 때 abc 의 값(a>0, b>0).
  category: "최대·최소 → a = 2, c = −1 · 최소 양수 주기 4π → 2π/b = 4π → b = 1/2 → abc"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+p) = f(x) 인 양수 p 의 최솟값을 주기로 읽어 2π/b = 4π 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최대·최소·주기 조건으로 삼각함수의 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a+c = 1, −a+c = −3 → a = 2, c = −1. 주기 2π/b = 4π → b = 1/2 → abc = −1. 위상 π/2 는 답에 무관. 주기 조건 EQV d1·M_total 6 → 서술형 출발 ★3 유지(내용은 유형 02 기본에 가까워 ★2/★3 경계).
  tier: star_3
  mechanism_primary: "a+c = 1 · −a+c = −3 → a=2, c=−1 → 최소 양수 주기 4π = 2π/b → b = 1/2 → abc = −1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값·최솟값(1, −3)과 주기(4π → 6π·π)를 바꿔 a, b, c 가 유리수. 제약: 최대−최소 = 2a 이므로 차가 양수, 주기 = 2π/b 라 b = 2π/주기."
    creative: "(1) f(π/2) = k 같은 한 점 조건을 추가해 위상까지 결정하게 하면 sin 값 계산(★3) (2) cos 으로 바꾸고 「x축 평행이동으로 y = a sin bx 와 겹친다」는 조건으로 b 를 주면 EQV d2 (★3) (3) 주기 조건을 「f(x+2π) = f(x) 를 만족」으로 바꾸면 b 가 유일하지 않음(배수 조건 · 0668 골조)."
```

```yaml
- id: RPM-ALG-0690
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    {sin(π/2+θ)+cos(3π/2+θ)+1}² = 2sin(π−θ)cos(2π−θ)+3 일 때 sinθ cosθ 의 값.
  category: "일반각 정리 → (sinθ+cosθ+1)² = 2sinθcosθ+3 → 전개 → sinθ+cosθ = 1/2 → 제곱 → sinθcosθ = −3/8"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질 — 식의 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변 (sinθ+cosθ)²+2(sinθ+cosθ)+1 = 2sinθcosθ+2(sinθ+cosθ)+2 이므로 sinθ+cosθ = 1/2, 제곱해 1+2sinθcosθ = 1/4 → −3/8. 일반각 네 개 정리·전개·제곱 — 노동은 있으나(Mₖ 2) 통찰 없음. M_total 6 → 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "sin(π/2+θ) = cosθ · cos(3π/2+θ) = sinθ · sin(π−θ) = sinθ · cos(2π−θ) = cosθ → (s+c+1)² = 2sc+3 → s+c = 1/2 → sc = ((s+c)²−1)/2 = −3/8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(3 → 2·4)를 바꾸면 s+c 값이 바뀌고 sc 도 따라감. 제약: |s+c| ≤ √2 여야 실제 θ 가 존재하고, (s+c)²−1 이 짝수 분모로 깔끔히 나오게."
    creative: "(1) sinθcosθ 대신 sin³θ+cos³θ 를 물으면 세제곱 합 공식 추가(★3) (2) 조건을 tanθ+1/tanθ = k 로 주면 sc 로 옮기는 EQV d1 (★3) (3) 일반각을 빼고 (sinθ+cosθ+1)² 만 주면 ★2."
```

```yaml
- id: RPM-ALG-0691
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    −π≤x≤π 에서 y = sin²(x−π/2)+cos(x+π/2) 의 최댓값과 최솟값의 합.
  category: "일반각 정리 → cos²x−sin x → 1−t²−t (t = sin x ∈ [−1,1]) → 꼭짓점 t = −1/2 최대 · t = 1 최소"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최대·최소 — 치환 후 일차·이차·절댓값 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y = 1−sin²x−sin x = −(t+1/2)²+5/4. 최대 5/4 (t = −1/2), 최소 −1 (t = 1) → 합 1/4. sin(x−π/2) = −cos x 의 부호는 제곱하면 사라짐(T-부호). 구간 [−π, π] 는 t 전 범위. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 → ★2. [분류 이슈] 서술형 구역이나 M·I 는 ★2.
  tier: star_2
  mechanism_primary: "sin(x−π/2) = −cos x · cos(x+π/2) = −sin x → y = cos²x−sin x = −(t+1/2)²+5/4 → 최대 5/4 · 최소 −1 → 합 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0691.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(−1 → −2·+1)와 구간(t 전 범위가 되는 구간)을 바꿔 꼭짓점이 [−1,1] 안에 있게. 제약: 꼭짓점 t = −계수/2 가 구간 안이면 최대는 꼭짓점, 밖이면 끝점 — 의도에 맞게 고정."
    creative: "(1) 구간을 0≤x≤π/2 로 좁히면 t∈[0,1] 로 범위 재설정(EQV d1 · ★3) (2) sin² 을 cos² 으로 바꾸고 일차항을 cos 으로 통일되게 하면 같은 골조 (3) 「최댓값을 갖는 x 의 개수」를 물으면 sin x = −1/2 의 근 세기(★2~3)."
```

```yaml
- id: RPM-ALG-0692
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    이차방정식 x²+2√2x cosθ+3sinθ = 0 이 실근을 갖도록 하는 θ 의 값의 범위(π/2≤θ≤3π/2).
  category: "D/4 = 2cos²θ−3sinθ ≥ 0 → sin 통일 → (2sinθ−1)(sinθ+2) ≤ 0 → sinθ ≤ 1/2 → 범위 안 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2(1−sin²θ)−3sinθ ≥ 0 → 2sin²θ+3sinθ−2 ≤ 0 → sinθ ≤ 1/2. π/2≤θ≤3π/2 에서 sinθ 는 1 → −1 로 감소하므로 5π/6 ≤ θ ≤ 3π/2 (T-범위). 0656·0687 과 같은 골조. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 → ★2. [분류 이슈] 서술형 구역이나 유형 21 기본 골조 → ★2.
  tier: star_2
  mechanism_primary: "실근 → D/4 = 2cos²θ−3sinθ ≥ 0 → (2sinθ−1)(sinθ+2) ≤ 0 → sinθ ≤ 1/2 → π/2≤θ≤3π/2 에서 5π/6 ≤ θ ≤ 3π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}\pi\le\theta\le\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0692.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2√2, 3)와 θ 범위를 바꿔 sin 의 경계값이 특수값이 되게. 제약: D 가 sin 하나로 통일되고 항상 양인 인수(sinθ+2)가 있어야 부호 판단이 한 줄, 범위가 반주기면 sin 이 단조라 구간이 하나."
    creative: "(1) 범위를 0≤θ<2π 로 넓히면 구간 두 개(★2) (2) 「허근을 갖도록」으로 뒤집기(★2) (3) 「두 실근의 곱이 음수」 조건을 더하면 sinθ<0 과 교집합(★2~3)."
```

### 실력 Up

```yaml
- id: RPM-ALG-0693
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    A = tan1°+tan21°+tan41°+tan61°+tan81°, B = tan99°+tan119°+tan139°+tan159°+tan179° 에 대하여 A+B 의 값.
  category: "tan(180°−x) = −tan x → 1°↔179°, 21°↔159°, … 다섯 쌍 상쇄 → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 의 각과 B 의 각이 180° 에 대해 짝을 이루는 대칭을 보고 tan 보각 공식으로 쌍마다 상쇄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반각 삼각함수 값의 합 — 보각·여각 짝짓기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 쌍의 합이 180° 라 tan 이 부호만 반대(T-부호) → A+B = 0. 짝짓기 한 번(SYM d1)·M_total 4. 실력 Up 출발 ★4 에서 −1 → 라벨 ★3 으로 두되 M·I 판정은 ★2. [분류 이슈] 실력 Up 구역이나 보각 짝짓기 한 줄 — 후보 ★2 (2단 어긋남).
  tier: star_3
  mechanism_primary: "tan(180°−x) = −tan x → (1°,179°)(21°,159°)(41°,139°)(61°,119°)(81°,99°) 쌍마다 합 0 → A+B = 0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0693.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작각(1°)·간격(20°)·항 수를 바꿔도 각 쌍의 합이 180° 이면 답 0. 제약: A 의 각 a 에 대응하는 180°−a 가 B 에 정확히 있어야 하고, 90° 가 포함되면 tan 정의 불가라 제외."
    creative: "(1) tan 대신 cos 으로 바꾸면 보각 부호 반전으로 여전히 0 (★2), sin 으로 바꾸면 상쇄되지 않고 2A (★2) (2) tan1°·tan21°·…·tan179° 곱을 물으면 부호 세기(★3) (3) tan1°·tan2°·…·tan89° 처럼 여각 짝(tan x·tan(90°−x) = 1)으로 바꾸면 곱 문제에서 SYM d1 (★2~3)."
```

```yaml
- id: RPM-ALG-0694
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    0≤x≤16 에서 f(x) = cos(πx/8), g(x) = −3cos(πx/8)−√2. y = f(x) 와 y = k (−1<k<1) 의 두 교점 x좌표의 차가 12 일 때, y = g(x) 와 y = k 의 두 교점 x좌표의 차 |β₁−β₂|.
  category: "f 의 대칭축 x=8 → α₁+α₂ = 16, 차 12 → α = 2, 14 → k = √2/2 → g = k → cos(πx/8) = −√2/2 → x = 6, 10 → 4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 주기 [0,16] 에서 cos(πx/8) 이 x = 8 대칭임을 써 두 교점의 합 16·차 12 로 α 를 정하고 k 를 역산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 그래프의 대칭성과 교점 조건에서 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α₁ = 2, α₂ = 14 → k = cos(π/4) = √2/2. g(x) = k ⇔ cos(πx/8) = −(√2+√2/2)/3 = −√2/2 → πx/8 = 3π/4, 5π/4 → x = 6, 10 → 4. 대칭으로 k 를 되짚는 SYM d2 하나·M_total 6(T-범위: 한 주기 안 교점 둘). 실력 Up 출발 ★4 에서 통찰 하나·골조 짧아 −1 → ★3. [분류 이슈] ★3/★4 경계.
  tier: star_3
  mechanism_primary: "cos(πx/8) x=8 대칭 → α₁+α₂ = 16, α₂−α₁ = 12 → α₁ = 2 → k = √2/2 → g = k → cos(πx/8) = −√2/2 → x = 6, 10 → |β₁−β₂| = 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0694.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차(12 → 8·4)를 바꾸면 α₁ = (16−차)/2 이고 k 는 그 cos 값(특수각이 되게 차 선택). g 의 계수(−3, −√2)는 cos(πx/8) = (k+√2)/(−3) 이 [−1,1] 안의 특수값이 되도록 연동. 제약: −1<k<1 이라 f = k 의 교점이 정확히 둘, g = k 도 둘이 되도록 값 범위 확인."
    creative: "(1) g 를 sin(πx/8) 계열로 바꾸면 대칭 중심이 달라져 다시 SYM (★3~4) (2) 「β₁+β₂ 의 값」을 물으면 대칭으로 계산 없이 16 (SYM d1 · ★3) (3) 구간을 두 주기로 넓히면 교점 넷·조합 선택(MI d1 · ★4)."
```

```yaml
- id: RPM-ALG-0695
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    모든 실수 x 에 대하여 cos²x+(a+2)sin x−(2a+1) > 0 이 성립하도록 하는 실수 a 의 값의 범위.
  category: "sin 통일 → t = sin x ∈ [−1,1] → t²−(a+2)t+2a < 0 (모든 t∈[−1,1]) → (t−a)(t−2) < 0 → t > a → a < −1"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 실수 x 에 대해 성립」을 t = sin x 의 제한 구간 [−1,1] 에서의 항등 부등식으로 옮기고(판별식 D<0 이 아님), 인수분해 (t−a)(t−2) 또는 끝점 조건 h(±1)<0 으로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수를 포함한 부등식이 항상 성립할 조건(치환 구간 [−1,1])"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    1−t²+(a+2)t−2a−1 > 0 ⇔ t²−(a+2)t+2a < 0 ⇔ (t−a)(t−2) < 0. t−2<0 이므로 t>a 가 모든 t∈[−1,1] 에서 성립 ⇔ a < −1 (t = −1 이 실현되므로 등호 불가 · T-경계). 끝점 조건 h(−1)<0, h(1)<0 으로도 같은 결과. 「모든 실수」를 판별식으로 오독하는 T-범위 함정이 핵심. 구간 항등 EQV d2·매개변수·경계 처리 M_total 7 → 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "cos²x = 1−sin²x → t²−(a+2)t+2a < 0 ∀t∈[−1,1] → (t−a)(t−2) < 0 → t > a ∀t → a < min t = −1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a<-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0695.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 (a+2), (2a+1) 처럼 a 의 일차식으로 두되 인수분해가 (t−a)(t−c) 로 되게 c 를 2·3 등 [−1,1] 밖 값으로. 제약: c 가 [−1,1] 안이면 부호가 구간 안에서 바뀌어 항등이 불가능(해 없음)하고, 부등호 ≥ 로 바꾸면 경계 등호가 포함되어 a ≤ −1."
    creative: "(1) 「해를 갖도록」(존재)으로 바꾸면 최대·최소 조건 반전(EQV d1 · ★3) (2) 인수분해가 안 되는 계수로 바꾸면 끝점·꼭짓점 케이스 분기(MI d1 추가 · ★4~5 후보) (3) x 의 범위를 0≤x≤π 로 제한하면 t∈[0,1] 항등(★4)."
```

```yaml
- id: RPM-ALG-0696
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    양수 a 에 대하여 f(x) = |4sin(ax−π/3)+2| (0≤x<4π/a) 의 그래프가 직선 y = 2 와 만나는 서로 다른 점의 개수 n, 그 x좌표의 합이 39 일 때 n×a 의 값. 5지선다.
  category: "|4sin u+2| = 2 → sin u = 0 또는 −1 → u = ax−π/3 ∈ [−π/3, 11π/3) 에서 6 개 → Σx = (Σu+6·π/3)/a = 13π/a = 39 → a = π/3 → na = 2π"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값 그래프와 y=2 의 교점을 4sin u+2 = ±2 ⇔ sin u = 0, −1 로 대수화 — 교점 4 개는 중심선 교차, 2 개는 접점"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x좌표의 합을 u 의 합으로 옮김 Σx = (Σu+n·π/3)/a 로 a 를 역산"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 삼각함수 그래프와 직선의 교점 개수·x좌표 합에서 상수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    u = ax−π/3 이 [−π/3, 11π/3) 를 돌 때 sin u = 0 은 0, π, 2π, 3π (4 개 · u = 4π 는 제외 T-경계), sin u = −1 은 3π/2, 7π/2 (2 개) → n = 6. Σu = 11π 이므로 Σx = (11π+6·π/3)/a = 13π/a = 39 → a = π/3 → na = 2π → ④. 절댓값 → sin u = 0, −1 대수화 RT d1 + 근의 합 변환 EQV d1·M_total 9(구간 옮기기·경계 제외·매개변수) → 실력 Up ★4 유지. ★5 조건(통찰 3 + SC/VF/SYM/XU) 미달.
  tier: star_4
  mechanism_primary: "|4sin u+2| = 2 → sin u = 0 (u = 0,π,2π,3π) · sin u = −1 (u = 3π/2, 7π/2), u∈[−π/3, 11π/3) → n = 6 · Σu = 11π → Σx = (11π+6·π/3)/a = 13π/a = 39 → a = π/3 → na = 2π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0696.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위상(−π/3 → −π/6)과 구간 길이(두 주기 → 한 주기·세 주기), 합(39)을 바꿀 수 있음. 제약: 상수항 2 는 진폭 4 의 절반이어야 |4sin u+2| = 2 가 sin u = 0, −1 로 떨어짐. 합은 Σx = (Σu+n·위상)/a 이므로 새 위상·구간에서 Σu 를 다시 계산해 a 가 π 의 유리수배가 되는 값으로 역산."
    creative: "(1) y = 2 대신 y = 6 (최댓값) 과의 접점만 세면 n = 2 로 단순화(★3) (2) 절댓값을 빼면 sin u = 0 네 점만 남아 RT 부담 감소(★3) (3) 「점의 개수 n 만」 묻고 구간을 0≤x<3π/a (1.5 주기)로 바꾸면 경계 세기 T-경계 강화(★3~4)."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 1 · ★2 19 · ★3 19 · ★4 2 · ★5 0
- 통찰형 22 · 절차형 19 · premium 0
- 통찰 유형 빈도: I-RT 10 · I-EQV 10 · I-SYM 7 · I-VF 1 (depth 2 는 0665 RT · 0674 SYM · 0677 SYM · 0694 SYM · 0695 EQV 다섯)
- type_hint 상위: 「삼각함수가 계수인 이차방정식의 근의 조건(판별식·근의 부호)」 6 · 「삼각함수 그래프와 직선·곡선의 교점으로 세는 방정식의 실근 개수」 4 · 「삼각형·내접사각형의 내각 관계와 일반각 삼각함수의 성질」 4 · 「삼각함수의 최대·최소 — 치환 후 일차·이차·절댓값 함수」 4 · 「치환·인수분해로 푸는 삼각방정식·부등식」 4 · (그 밖에 2문씩: 주기 비교·배수 판정 / 그래프 평행·대칭이동 / 그래프에서 미정계수 / 최대·최소·주기 조건 미정계수 / 일반각 식 정리 / 보각·여각 짝짓기 합)
- 구역별: 유형 21 4문(★2 3 · ★3 1) · 유형 UP 22 3문(★3 3) · 유형 UP 23 4문(★2 1 · ★3 3) · 시험에 꼭 나오는 문제 22문(★1 1 · ★2 13 · ★3 8) · 서술형 4문(★2 2 · ★3 2) · 실력 Up 4문(★3 2 · ★4 2)
- 그림: 5문(`crop:fig-0662.png` · `crop:fig-0671.png` · `crop:fig-0673.png` · `crop:fig-0674.png` · `crop:fig-0688.png`)
- 전사 답 확인 필요: 없음(41문 모두 재풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨(구역·난이도)과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 출발점 ±1 안에서 두고 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0659 | 벤더 상중(★3)이나 통찰 없음·M_total 6 — 근의 분리 세 조건 절차형의 상한. 라벨 ★3 유지 | ★3 / ★2 |
| RPM-ALG-0665 | 유형 UP 안 level 중(★2)이나 절댓값 그래프 + 끝점 접촉 판정(RT d2)으로 ★3 유지 | ★3 / ★2 |
| RPM-ALG-0667 | 종합 구역이지만 주기 공식 대입 한 단계·M_total 4 → ★1 (교과서 수준) | ★1 |
| RPM-ALG-0691 | 서술형 구역(출발 ★3)이나 정리·치환 이차함수 절차·M_total 5 → ★2 | ★2 / ★3 |
| RPM-ALG-0692 | 서술형 구역(출발 ★3)이나 유형 21 기본 골조(0656·0687 과 동일)·M_total 5 → ★2 | ★2 / ★3 |
| RPM-ALG-0693 | 실력 Up 구역(출발 ★4)이나 보각 짝짓기 한 줄(SYM d1)·M_total 4 — 라벨은 −1 상한 ★3, M·I 판정은 ★2 (2단 어긋남) | ★2 / ★3 |
| RPM-ALG-0694 | 실력 Up 구역(출발 ★4)이나 SYM d2 하나·M_total 6 → ★3 — ★3/★4 경계 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「삼각함수가 계수인 이차방정식의 근의 조건」 골조가 유형 21·시험·서술형 세 구역에 걸쳐 6문 반복(0656 · 0657 · 0658 · 0659 · 0687 · 0692). 카탈로그에서는 base ★2 단일 유형으로 세우고, 「서로 다른 두 양(음)의 실근」처럼 D·합·곱 세 조건이 결합되는 경우만 ★3 sub-variant 로 둘 것. 0681(꼭짓점 조건)은 같은 계수 구조지만 골조가 다르므로 별도.
- 유형 UP 22(내각 관계)는 삼각형(0660 · 0685)·내접사각형(0661 · 0688)·단위원 등분점(0662) 세 설정. 앞 둘은 「내각 합 → 보각·여각」 한 유형으로 통합 가능(base ★2~3 · EQV d1). 단위원 등분점은 RT+SYM 이 붙으므로 「단위원 대칭 관계」로 따로 세울 후보.
- 유형 UP 23(교점 개수)은 직선 vs sin(0663)·두 삼각함수(0664)·절댓값+직선(0665)·절댓값+V 자(0666)로 ★2~3 폭이 있다. 한 유형(base ★3) 아래 「절댓값·접촉 판정」 여부를 ★ 조정 변수로 두면 됨.
- 최대·최소 치환(0670 · 0678 · 0679 · 0691)은 「치환 후 일차·이차·절댓값」 한 유형(base ★2)으로 묶고, 분수식 tan 통일(0680)은 유리함수가 붙어 별도 유형(base ★3).
- 대칭 짝짓기(0674 그래프 점대칭 · 0677 보각·여각 · 0693 보각 · 0694 그래프 대칭)는 이 범위에서 I-SYM 이 7회 반복되는 핵심 통찰이라 「대칭성을 이용한 값·좌표의 합」 유형을 따로 세울 것. 0693 처럼 짝짓기 한 줄이면 ★2, 두 대칭을 겹치거나(0677) 대칭으로 상수를 역산하면(0694) ★3.
- 실력 Up 4문 중 2문(0693 · 0694)이 M·I 로는 ★2~3, 서술형 4문 중 2문이 ★2 — 구역 신호만으로 base ★ 를 주면 안 되고 골조로 정해야 한다는 근거.
- type_hint 이름은 RPM 유형 제목을 기본으로 했으나 「시험에 꼭 나오는 문제」 22문은 유형 01~23 의 골조가 섞여 있어 유형 번호 대신 골조 이름으로 붙였다.
