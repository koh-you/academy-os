---
name: mechanism-데이터-RPM-ALG-05-p3
description: RPM 대수 05 삼각함수(3/3 · 유형 UP 10~11 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 05 삼각함수
  unit_code: ALG-05
  part: "3/3"
  extract_range: "71~75쪽 · 0518~0552"
  total_problems: 35
  unit_total: 96
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 출발점은 유형 UP ★3(level 중 → ★2 · 상중 → ★3) · 시험에 꼭 나오는 문제 ★2(M_total ≤4·통찰 없음 → ★1 · 통찰 있거나 M_total ≥7 → ★3) · 서술형 ★3 · 실력 Up ★4. depth_score 는 effective_depth 의 평균(통찰 없으면 0.00). Mₜ 는 함정 카테고리 수(0 허용). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 05 삼각함수 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 05 삼각함수의 마지막 1/3(71~75쪽 · 0518~0552 · 35문항)을 다룬다. 구역은 유형 UP 10(sinθ±cosθ 의 값을 이용한 식의 값 · 4문), 유형 UP 11(삼각함수와 이차방정식 · 4문), 시험에 꼭 나오는 문제(중단원 종합 · 20문), 서술형 주관식(4문), 실력 Up(3문)이다. 벤더 난이도 신호는 유형 UP 안에서만 level(중·상중)이 붙고, 종합·서술형·실력 Up 구역은 level 없이 구역 자체가 층을 뜻한다. 태그는 대표문제 2 · 중요 5 · 서술형 1 · 평가원 기출 1 · 교육청 기출 1.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬), `insights[]`(유형 코드 · depth · 근거), `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 3문(0531 · 0551 · 0552)이며 크롭 이미지를 확인해 색칠 영역·라벨을 판정에 반영했다.

## 문항 데이터

### 유형 UP 10 $\sin\theta\pm\cos\theta$의 값을 이용하여 식의 값 구하기

```yaml
- id: RPM-ALG-0518
  page: 71
  vendor_label: '유형 UP 10 $\sin\theta\pm\cos\theta$의 값을 이용하여 식의 값 구하기'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    θ 가 제2사분면의 각이고 sinθ+cosθ=1/2 일 때 sin²θ−cos²θ 의 값. 5지선다.
  category: "합 제곱 → sinθcosθ → (sinθ−cosθ)² → 사분면 부호 → (합)(차)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제곱해 sinθcosθ=−3/8, (sinθ−cosθ)²=1−2sinθcosθ=7/4. 제2사분면(sin>0, cos<0)이므로 sinθ−cosθ=√7/2, sin²θ−cos²θ=(합)(차)=√7/4.
    표준 4단계(T-부호 하나)·통찰 없음·M_total 5 → 유형 UP 출발 ★3 에서 −1. 대표문제지만 level 이 없어 ★2.
  tier: star_2
  mechanism_primary: "sinθ+cosθ=1/2 제곱 → sinθcosθ=−3/8 → (sinθ−cosθ)²=1−2sinθcosθ=7/4 → 제2사분면 부호로 sinθ−cosθ=√7/2 → (합)(차)=√7/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(1/3·−1/2 등)과 사분면을 바꿀 수 있음. 제약: |sinθ+cosθ|≤√2 이고 사분면과 합의 부호·크기가 양립해야 함(제2사분면이면 −1<합<1). 선택지가 √k/4 꼴로 정리되도록 1−2sinθcosθ 의 분모를 4 로 유지."
    creative: "(1) sinθ−cosθ 를 주고 sin⁴θ−cos⁴θ 를 묻기(같은 골조 ★2) (2) 사분면 대신 sinθ>cosθ 같은 부등 조건으로 차의 부호를 정하게 하기(★2·T-부호 강화) (3) 사분면 조건을 근호 관계식(√sinθ/√cosθ=−√tanθ)으로 바꾸면 I-EQV d1 추가 → ★3(0543 골조)."
```

```yaml
- id: RPM-ALG-0519
  page: 71
  vendor_label: '유형 UP 10 $\sin\theta\pm\cos\theta$의 값을 이용하여 식의 값 구하기'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    π/2<θ<π 이고 sinθcosθ=−1/8 일 때 sin³θ−cos³θ 의 값.
  category: "sinθcosθ → (sinθ−cosθ)² → 사분면 부호 → 세제곱 차 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (sinθ−cosθ)²=1−2sinθcosθ=5/4, 제2사분면이므로 sinθ−cosθ=√5/2. sin³θ−cos³θ=(sinθ−cosθ)(1+sinθcosθ)=(√5/2)(7/8)=7√5/16.
    곱이 주어져 제곱 과정이 한 단계 줄고 세제곱 차 공식만 추가. 통찰 없음·M_total 5 → level 중 그대로 ★2.
  tier: star_2
  mechanism_primary: "sinθcosθ=−1/8 → (sinθ−cosθ)²=1−2sinθcosθ=5/4 → 제2사분면 부호 sinθ−cosθ=√5/2 → sin³θ−cos³θ=(sinθ−cosθ)(1+sinθcosθ)=7√5/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7\sqrt{5}}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sinθcosθ 값(−3/8·−1/4·1/8)과 사분면. 제약: |sinθcosθ|≤1/2, 사분면과 곱의 부호 일치(제2·4사분면이면 음수), 1−2sinθcosθ 가 양수."
    creative: "(1) sin³θ+cos³θ 로 바꾸면 합의 부호가 제2사분면만으로는 안 정해져 각 범위(예: 3π/4<θ<π)를 추가해야 함(★2~3·T-범위) (2) 곱을 tanθ+1/tanθ 로 주기(0520 결합 ★2) (3) 곱 대신 sin⁴θ+cos⁴θ 값을 주면 역산 한 단계 추가 ★3."
```

```yaml
- id: RPM-ALG-0520
  page: 71
  vendor_label: '유형 UP 10 $\sin\theta\pm\cos\theta$의 값을 이용하여 식의 값 구하기'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    0<θ<π/2 이고 tanθ+1/tanθ=3 일 때 sinθ+cosθ 의 값.
  category: "tanθ+1/tanθ=1/(sinθcosθ) → sinθcosθ → (sinθ+cosθ)² → 제1사분면 양수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tanθ+1/tanθ=(sin²θ+cos²θ)/(sinθcosθ)=1/(sinθcosθ) 이므로 sinθcosθ=1/3. (sinθ+cosθ)²=1+2/3=5/3, 제1사분면이라 양의 제곱근 √15/3.
    항등식 한 번·제곱 한 번·부호 한 번. 통찰 없음·M_total 5 → level 중 ★2.
  tier: star_2
  mechanism_primary: "tanθ+1/tanθ=1/(sinθcosθ)=3 → sinθcosθ=1/3 → (sinθ+cosθ)²=1+2/3=5/3 → 제1사분면 → √15/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{15}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tanθ+1/tanθ 의 값 k 와 사분면. 제약: k=1/(sinθcosθ) 이므로 |k|≥2, 사분면에 따라 부호 고정(제1·3사분면 k≥2, 제2·4사분면 k≤−2). 1+2/k 가 정리되는 k 선택."
    creative: "(1) sinθ−cosθ 를 물으면 제1사분면 안에서도 부호가 안 정해져 범위(0<θ<π/4)가 더 필요(★2·T-부호) (2) tanθ 자체를 이차방정식으로 구하게 하는 우회(★2) (3) 조건을 tan²θ+1/tan²θ 로 주면 (tanθ+1/tanθ)² 역산 → 0521 골조 ★3."
```

```yaml
- id: RPM-ALG-0521
  page: 71
  vendor_label: '유형 UP 10 $\sin\theta\pm\cos\theta$의 값을 이용하여 식의 값 구하기'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    sinθ+cosθ=−1/3 일 때 tan²θ+1/tan²θ 의 값.
  category: "합 제곱 → sinθcosθ → tanθ+1/tanθ=1/(sinθcosθ) → 제곱−2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (sinθ+cosθ)²=1/9 에서 sinθcosθ=−4/9. tan²θ+1/tan²θ=(tanθ+1/tanθ)²−2 이고 tanθ+1/tanθ=1/(sinθcosθ)=−9/4 이므로 81/16−2=49/16.
    항등식 두 개(1/(sinθcosθ) · a²+1/a²=(a+1/a)²−2)를 사슬로 써야 하고, 사분면이 없어 sinθ−cosθ 를 구하는 경로로 가면 부호가 안 정해져 막히는 함정(T-부호). M_total 6 → 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "sinθ+cosθ=−1/3 제곱 → sinθcosθ=−4/9 → tanθ+1/tanθ=1/(sinθcosθ)=−9/4 → tan²θ+1/tan²θ=(−9/4)²−2=49/16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{49}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(±1/2·±1/3·√2/2). 제약: |합|≤√2 이고 합≠±1(sinθcosθ≠0). 답 1/(sinθcosθ)²−2 가 유리수가 되려면 합이 유리수."
    creative: "(1) tan³θ+1/tan³θ 로 바꾸면 세제곱 합 공식이 추가(★3) (2) 조건을 sinθ−cosθ 로 주면 sinθcosθ 부호만 바뀌고 골조 동일(★3) (3) 사분면을 주고 tanθ−1/tanθ 를 물으면 부호 결정과 근호 정리가 붙어 ★3·T-부호."
```

### 유형 UP 11 삼각함수와 이차방정식

```yaml
- id: RPM-ALG-0522
  page: 71
  vendor_label: "유형 UP 11 삼각함수와 이차방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    이차방정식 5x²+3x+k=0 의 두 근이 sinθ, cosθ 일 때 상수 k 의 값.
  category: "근과 계수 → sinθ+cosθ, sinθcosθ → sin²θ+cos²θ=1 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근과 계수에서 sinθ+cosθ=−3/5, sinθcosθ=k/5. (sinθ+cosθ)²=1+2sinθcosθ 에 넣으면 9/25=1+2k/5, k=−8/5.
    세 단계 절차·통찰 없음·M_total 4 → 유형 UP 출발 ★3 에서 −1 → ★2. [분류 이슈] 유형 UP 대표문제인데 M·I 판정은 ★2 — 카탈로그에서 유형 UP 11 의 base ★ 를 2 로 둘지 결정 필요.
  tier: star_2
  mechanism_primary: "근과 계수 → sinθ+cosθ=−3/5, sinθcosθ=k/5 → (sinθ+cosθ)²=1+2sinθcosθ → k=−8/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{8}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·일차항 계수(a, b)와 미지수 위치. 제약: (b/a)²=1+2k/a 에서 k 가 유리수가 되려면 a, b 유리수, |b/a|≤√2. sinθ, cosθ 가 실수이므로 판별식은 자동 성립."
    creative: "(1) k 대신 일차항 계수를 미지수로 주면 부호 두 갈래 → 사분면 조건으로 하나 선택(★2~3·T-부호) (2) 두 근을 sinθ, −cosθ 로 주면 부호만 바뀜(★2) (3) 두 근을 tanθ, 1/tanθ 로 주면 곱=1 조건에서 상수항이 고정되고 합에서 sinθcosθ 로 연결(★3)."
```

```yaml
- id: RPM-ALG-0523
  page: 71
  vendor_label: "유형 UP 11 삼각함수와 이차방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    이차방정식 x²−x+a=0 의 두 근이 sinθ+cosθ, sinθ−cosθ 일 때 상수 a 의 값. 5지선다.
  category: "근의 합 → sinθ 결정 → 근의 곱=sin²θ−cos²θ → cos²θ=1−sin²θ"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근의 합 2sinθ=1 에서 sinθ=1/2, 곱 (sinθ+cosθ)(sinθ−cosθ)=sin²θ−cos²θ=a. cos²θ=3/4 이므로 a=1/4−3/4=−1/2.
    근과 계수 두 관계를 각각 다른 목적(sinθ 결정 · a 계산)으로 쓰는 표준 절차. 통찰 없음·M_total 5 → level 중 ★2.
  tier: star_2
  mechanism_primary: "합 2sinθ=1 → sinθ=1/2 → 곱 sin²θ−cos²θ=a → cos²θ=1−1/4 → a=−1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(→ sinθ=계수/2, |sinθ|≤1 제약 · sinθ=±1/2·±√3/2 등)와 두 근의 배치(합·차 순서). 제약: a=2sin²θ−1 이므로 선택지가 유리수가 되려면 sin²θ 유리수."
    creative: "(1) 두 근을 sinθ, cosθ 로 바꾸면 0522 골조(★2) (2) 근의 곱 대신 두 근의 차 2cosθ 를 조건으로 주면 판별식 경로(★3) (3) a 를 고정하고 sinθ 를 묻되 실근 조건 1−4a≥0 검토를 요구하면 T-범위 ★3."
```

```yaml
- id: RPM-ALG-0524
  page: 71
  vendor_label: "유형 UP 11 삼각함수와 이차방정식"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    3x²−√6x+k=0 의 두 근이 sinθ, cosθ 일 때 tanθ, 1/tanθ 를 두 근으로 하고 x² 의 계수가 1 인 이차방정식(k 는 상수).
  category: "근과 계수 → 합 제곱 → sinθcosθ → tanθ+1/tanθ=1/(sinθcosθ), 곱=1 → 새 이차방정식"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sinθ+cosθ=√6/3 을 제곱해 sinθcosθ=−1/6(k=−1/2 는 답에 불필요). tanθ+1/tanθ=1/(sinθcosθ)=−6, tanθ·(1/tanθ)=1 이므로 x²+6x+1=0.
    근과 계수를 앞(주어진 식)·뒤(구할 식)로 두 번 쓰는 6단계 서술형. 통찰 없음·M_total 5 로 −1 후보지만 사슬 길이와 상중·서술형 신호로 ★3 유지. [분류 이슈] ★2/★3 경계.
  tier: star_3
  mechanism_primary: "근과 계수 sinθ+cosθ=√6/3 → 제곱 → sinθcosθ=−1/6 → tanθ+1/tanθ=1/(sinθcosθ)=−6 · 곱 1 → x²+6x+1=0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$x^2+6x+1=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(√6 → √2·√3 등)와 이차항 계수. 제약: (합)²≤2 이고 합²≠1(sinθcosθ≠0). 새 방정식 계수가 정수가 되려면 1/(sinθcosθ) 가 정수 — 합²=1+2sinθcosθ 에서 sinθcosθ=−1/6 처럼 분모가 작은 값."
    creative: "(1) 새 방정식의 두 근을 sinθ+cosθ, sinθ−cosθ 로 하면 차의 부호 결정이 필요해 사분면 조건 추가(★3) (2) 새 방정식 대신 tan²θ+1/tan²θ 값을 묻기(0521 골조 ★3) (3) k 를 먼저 구하게 하고 판별식으로 실근 확인을 서술 항목으로 요구하면 T-범위 ★3."
```

```yaml
- id: RPM-ALG-0525
  page: 71
  vendor_label: "유형 UP 11 삼각함수와 이차방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    θ 가 제3사분면의 각이고 3sinθ=4cosθ 일 때, 9x²+ax+b=0 의 두 근이 tanθ, 1/cosθ. 상수 a, b 에 대하여 a−b 의 값.
  category: "tanθ=4/3 → 제3사분면 cosθ=−3/5 → 두 근의 값 → 근과 계수로 a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    3sinθ=4cosθ 에서 tanθ=4/3, sin²θ+cos²θ=1 과 제3사분면(cos<0)으로 cosθ=−3/5, 1/cosθ=−5/3. 두 근의 합 4/3−5/3=−1/3=−a/9 → a=3, 곱 −20/9=b/9 → b=−20, a−b=23.
    비례식 → 사분면 부호 → 근과 계수 역산의 5단계·T-부호. 통찰 없음이나 M_total 6 → 상중 ★3.
  tier: star_3
  mechanism_primary: "3sinθ=4cosθ → tanθ=4/3 → 제3사분면 cosθ=−3/5 → 두 근 4/3, −5/3 → 합·곱으로 a=3, b=−20 → a−b=23"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비례 조건(3sinθ=4cosθ → 5:12 등 피타고라스 쌍)과 사분면, 이차항 계수(9 는 분모 통일용). 제약: 이차항 계수는 두 근의 합·곱의 분모의 공배수여야 a, b 가 정수."
    creative: "(1) 두 근을 sinθ, tanθ 로 바꾸기(같은 골조 ★3) (2) 사분면 대신 tanθ>0 처럼 부호 조건만 주면 사분면 두 개 → I-MI 분기 ★3~4 (3) a−b 대신 이 이차방정식의 판별식 부호 판정으로 바꾸면 EQ 결합 ★3."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0526
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    3θ 가 제2사분면의 각일 때 각 θ 의 동경이 존재할 수 없는 사분면.
  category: "3θ 범위 → θ 범위(일반각 n) → n=0,1,2 열거 → 빠진 사분면"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각과 동경의 위치(사분면·일치·대칭 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2nπ+π/2<3θ<2nπ+π 를 3 으로 나눠 2nπ/3+π/6<θ<2nπ/3+π/3. n=0 제1, n=1 제2, n=2 제4사분면이고 n=3 부터 반복 → 제3사분면에는 없음.
    일반각 열거의 표준 절차(T-범위)·통찰 없음·M_total 5 → 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "3θ∈제2사분면 → 2nπ/3+π/6<θ<2nπ/3+π/3 → n=0,1,2 → 제1·2·4사분면 → 없는 것은 제3사분면"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$3$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(2θ·4θ)와 사분면. 제약: 배수 k 에 대해 n=0~k−1 을 열거하며, 결과가 하나만 빠지는 조합인지 미리 확인(2θ 제1사분면이면 θ 는 제1·3 만 가능해 둘이 빠짐)."
    creative: "(1) 존재할 수 있는 사분면을 모두 고르기(★2) (2) θ/2 로 바꿔 범위가 넓어지는 방향(★2) (3) 3θ 와 2θ 조건을 동시에 주면 공통 범위 → 조건 결합 ★3."
```

```yaml
- id: RPM-ALG-0527
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    −660°, −4π/3, 420°, 13π/3, 1140° 중 동경이 나머지 넷과 다른 하나. 5지선다.
  category: "도·라디안 통일 → 360°n+α 로 정리 → 비교"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각과 동경의 위치(사분면·일치·대칭 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −660°≡60°, −4π/3≡2π/3(120°), 420°≡60°, 13π/3≡π/3(60°), 1140°≡60° → ②.
    단위 혼합(T-단위)·음의 각(T-부호)을 360° 로 정리하는 같은 계산 다섯 번. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "각 각을 360°n+α 로 정리 → 60° 넷, 120° 하나 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 값 다섯 개(같은 동경 넷 + 다른 하나). 제약: 도와 라디안을 섞고 음의 각을 하나 이상 포함, 다른 하나는 근접값(60° vs 120°)으로 두어 대충 보고 고르지 못하게 함."
    creative: "(1) 같은 동경을 나타내는 것끼리 묶기(★2) (2) 정수 n 을 포함한 일반각 360°n+α 표현 고르기(★2) (3) 두 각의 차가 360° 의 배수인 쌍의 개수 세기로 확장하면 조합 ★3."
```

```yaml
- id: RPM-ALG-0528
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    θ 와 5θ 의 동경이 y축 대칭이고 θ 와 2θ 의 동경이 직선 y=x 대칭일 때, 모든 θ 의 크기의 합(0<θ<π).
  category: "y축 대칭 6θ=(2n+1)π · y=x 대칭 3θ=2mπ+π/2 → 각각 범위 안 열거 → 공통 → 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각과 동경의 위치(사분면·일치·대칭 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y축 대칭 θ+5θ=(2n+1)π 에서 θ=(2n+1)π/6 → π/6, π/2, 5π/6. 직선 y=x 대칭 θ+2θ=2mπ+π/2 에서 θ=(4m+1)π/6 → π/6, 5π/6. 공통 π/6, 5π/6 의 합 π.
    대칭 조건 두 개를 각각 일반각으로 풀어 범위 안에서 열거하고 교집합하는 7~8단계(T-범위). 통찰은 없지만(단순 교집합은 I-CON 아님) M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "y축 대칭 6θ=(2n+1)π → θ=(2n+1)π/6 · y=x 대칭 3θ=2mπ+π/2 → θ=(4m+1)π/6 → 0<θ<π 열거 → 공통 π/6, 5π/6 → 합 π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(5θ·2θ → 3θ·4θ 등)와 대칭축(x축·원점·y=−x)과 θ 범위. 제약: 두 조건의 해집합이 범위 안에서 공통해를 갖도록 배수·축 조합을 미리 계산(공통해 0개면 문제 불성립). 합이 깔끔하려면 해가 π 에 대해 대칭 배치."
    creative: "(1) 대칭 조건 하나만 주고 θ 의 개수 묻기(★2) (2) 공통해 대신 두 조건 중 하나 이상 만족(합집합)으로 바꾸면 I-MI 케이스 관리 ★3 (3) 3θ 가 제2사분면 조건을 추가해 0526 골조와 결합하면 3중 필터 ★4."
```

```yaml
- id: RPM-ALG-0529
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    반지름 √3a 인 원의 넓이와 반지름 3a·호의 길이 6π 인 부채꼴의 넓이가 같을 때 상수 a. 5지선다.
  category: "원 넓이 3πa² = 부채꼴 넓이 (1/2)·3a·6π → 일차식 → a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이(최댓값·도형 넓이)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    π(√3a)²=3πa², S=(1/2)rl=(1/2)(3a)(6π)=9πa. 3πa²=9πa 에서 a>0 이므로 a=3.
    공식 두 개 대입 후 일차식(T-범위 a>0 으로 나눔). 통찰 없음·M_total 4 → 종합 구역 출발 ★2 에서 −1 → ★1. [분류 이슈] 종합 구역이지만 교과서 수준.
  tier: star_1
  mechanism_primary: "π(√3a)²=3πa² · (1/2)(3a)(6π)=9πa → 3πa²=9πa → a=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름(√3a → 2a 등)·부채꼴 반지름·호의 길이. 제약: a 로 나눌 때 a>0, 답이 선택지(정수·무리수)와 맞도록 계수 조정(a=호·반지름 계수 ÷ 2·원 계수)."
    creative: "(1) 부채꼴의 중심각을 주고 호의 길이를 먼저 구하게 우회(★1~2) (2) 넓이 대신 둘레가 같은 조건(2r+l=2πR)으로 바꾸면 ★2 (3) 두 부채꼴의 넓이 비교에 매개변수 두 개(r, θ)를 두면 ★2."
```

```yaml
- id: RPM-ALG-0530
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    길이 40cm 인 철사를 남김없이 써서 부채꼴을 만들 때 넓이의 최댓값.
  category: "2r+l=40 → S=(1/2)r(40−2r) → 이차함수 완전제곱 → 최대"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이(최댓값·도형 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    l=40−2r 을 S=(1/2)rl 에 넣으면 S=−r²+20r=−(r−10)²+100. r=10(l=20, θ=2<2π) 에서 최대 100 cm².
    둘레 조건을 r 의 이차함수로 옮기는 표준 절차(T-범위 0<r<20·θ<2π). 통찰 없음·M_total 5 → 중요 태그 ★2.
  tier: star_2
  mechanism_primary: "2r+l=40 → S=(1/2)r(40−2r)=−(r−10)²+100 → r=10 → 100 cm²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철사 길이 L(최대 L²/16, r=L/4, 중심각 2 rad 고정). 제약: 최댓값이 정수가 되려면 L 이 4 의 배수. 단위 cm² 표기 유지."
    creative: "(1) 넓이가 최대일 때의 중심각(항상 2)을 묻기 → 결과 일반화 ★2 (2) 넓이 ≥ k 인 r 의 범위나 중심각 최댓값(0547 골조 ★3) (3) 철사 일부를 현으로 쓰는 변형은 이 단원 밖이라 피함."
```

```yaml
- id: RPM-ALG-0531
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 변 6 인 정사각형 ABCD 에서 B 중심 부채꼴 BCA 의 호 CA 와 C 중심 부채꼴 CDB 의 호 DB 를 그렸을 때, 색칠한 부분(두 호 사이 좌우 대칭 두 조각)의 넓이가 a√3−bπ. 정수 a, b 에 대하여 ab 의 값. 5지선다.
  category: "두 호의 교점 E 로 정삼각형 BCE → 공통부분 = 부채꼴 60°×2 − 정삼각형 → 색칠 = 2(사분원 − 공통부분)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 호의 교점 E 가 BE=CE=BC=6 을 만족해 △BCE 가 정삼각형 → 중심각 60° 확정(그림 → 각 정보 전환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이(최댓값·도형 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 E 는 BE=CE=BC=6 이라 △BCE 가 정삼각형(중심각 60°). 두 사분원의 공통부분 = 부채꼴(60°, 반지름 6) 두 개 − △BCE = 12π−9√3. 색칠 = 2×(사분원 9π − 공통부분) = 18√3−6π → a=18, b=6, ab=108.
    크롭 그림에서 색칠 영역은 각 사분원 안이면서 다른 사분원 밖인 좌우 두 조각(위쪽 가운데 작은 영역은 미색칠). 정삼각형 발견이 진입 통찰(RT d1)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "교점 E: △BCE 정삼각형 → 공통부분 = 2·(1/2·6²·π/3) − (√3/4)·36 = 12π−9√3 → 색칠 = 2(9π − 공통부분) = 18√3−6π → ab=108"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-0531.png'
  latex: latex-bank/rpm-alg/items/0531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이 s(넓이는 s² 배 · a=s²/2, b=s²/6 → s 가 6 의 배수면 정수). 제약: 그림 라벨 A~D 와 두 부채꼴의 중심(B, C) 고정 · 색칠 영역 정의(두 호 사이 좌우 두 조각)가 바뀌면 식이 달라짐."
    creative: "(1) 색칠을 공통부분(렌즈)으로 바꾸면 12π−9√3(★2~3) (2) 색칠을 정사각형−(두 사분원의 합집합)으로 바꾸면 36−(6π+9√3) 로 포함배제 한 단계 추가 ★3 (3) 정사각형을 직사각형으로 바꾸면 교점이 정삼각형을 만들지 않아 특수각이 사라짐 → 이 단원 범위 밖."
```

```yaml
- id: RPM-ALG-0532
  page: 72
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원점 O 와 점 P(−3, 4) 를 지나는 동경 OP 의 각 θ 에 대하여 (sinθ−cosθ)/tanθ 의 값. 5지선다.
  category: "r=5 → sinθ=4/5, cosθ=−3/5, tanθ=−4/3 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 정의(동경 위의 점·직선·tan 값 → sin·cos)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=5 이므로 sinθ=4/5, cosθ=−3/5, tanθ=−4/3. (4/5+3/5)÷(−4/3)=−21/20.
    정의 대입 한 단계(T-부호). 통찰 없음·M_total 4 → 종합 구역 출발 ★2 에서 −1 → ★1. [분류 이슈] 종합 구역이지만 교과서 수준.
  tier: star_1
  mechanism_primary: "P(−3,4), r=5 → sinθ=4/5, cosθ=−3/5, tanθ=−4/3 → (7/5)/(−4/3)=−21/20"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 P 의 좌표(피타고라스 쌍 (−5,12), (8,−6) 등)와 물을 식. 제약: r 이 정수가 되는 좌표, tanθ≠0(분모)."
    creative: "(1) 점 대신 직선 y=mx 위의 동경(0533 골조 ★2) (2) 점 P 를 문자 (a, 2a) 로 주고 부호 조건으로 사분면 결정(★2·Mₐ↑) (3) 원점 대칭·y축 대칭인 점의 삼각함수 값 관계 묻기(★2)."
```

```yaml
- id: RPM-ALG-0533
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 12x+5y=0 이 x축 양의 방향과 이루는 각 θ(0<θ<π) 에 대하여 sinθ+cosθ 의 값.
  category: "기울기 −12/5 → 0<θ<π 로 제2사분면 점 (−5, 12) → r=13 → sinθ, cosθ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 정의(동경 위의 점·직선·tan 값 → sin·cos)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 −12/5 이고 0<θ<π 이므로 동경은 제2사분면의 점 (−5, 12) 를 지남, r=13. sinθ=12/13, cosθ=−5/13, 합 7/13.
    직선 → 동경 위의 점 선택이 한 단계 더 있고 (5, −12) 를 고르면 부호가 뒤집히는 함정(T-부호). 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "12x+5y=0 → 동경 위의 점 (−5,12) (0<θ<π) → r=13 → sinθ+cosθ=12/13−5/13=7/13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수(피타고라스 쌍 3·4·5, 8·15·17)와 θ 범위(0<θ<π 또는 π<θ<2π → 부호 반전). 제약: r 정수, 범위가 점의 사분면을 하나로 정해야 함."
    creative: "(1) 범위를 주지 않고 sinθcosθ 를 물으면 사분면과 무관한 값(★2) (2) 직선을 y=mx+k 로 주고 평행이동 무시를 요구(★2) (3) 두 직선의 각 θ₁, θ₂ 로 sinθ₁cosθ₂ 를 물으면 조건 두 배 ★3."
```

```yaml
- id: RPM-ALG-0534
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    θ 가 제4사분면의 각일 때 삼각함수 값의 곱·몫의 부호로 옳은 것 고르기. 5지선다.
  category: "제4사분면 부호표(sin<0, cos>0, tan<0) → 보기별 부호 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 근호·절댓값 정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinθ<0, cosθ>0, tanθ<0. ① sinθtanθ>0 ② sinθcosθ<0 ✓ ③ cosθtanθ<0 ④ 곱 (−)(+)(−)=+ ⑤ sinθ/tanθ=cosθ>0.
    부호표 대입 한 단계(T-부호). 통찰 없음·M_total 4 → 종합 구역 출발 ★2 에서 −1 → ★1. [분류 이슈] 종합 구역이지만 교과서 수준.
  tier: star_1
  mechanism_primary: "제4사분면 → sin<0, cos>0, tan<0 → 보기별 부호 곱 → ②"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사분면(제2·3사분면)과 보기의 곱·몫 조합. 제약: 정답 보기 하나만 참이 되도록 부호표를 대조."
    creative: "(1) 부호 조건 두 개(sinθcosθ<0, cosθtanθ>0)를 주고 사분면을 역으로 묻기(I-EQV d1 → ★2) (2) 보기에 sinθ−cosθ, |sinθ|+cosθ 같은 합·차를 섞으면 크기 비교가 필요해 ★2 (3) 근호 관계 조건과 결합(0536 골조 ★3)."
```

```yaml
- id: RPM-ALG-0535
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    4π/3<θ<3π/2 일 때 √((sinθ−1/2)²)+|cosθ−1/2|−|sinθ+cosθ| 를 간단히 하기.
  category: "각 범위 → sinθ, cosθ 부호·크기 → 절댓값 세 개 벗기기 → 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 근호·절댓값 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제3사분면 안쪽(−1<sinθ<−√3/2, −1/2<cosθ<0)이므로 sinθ−1/2<0, cosθ−1/2<0, sinθ+cosθ<0. (1/2−sinθ)+(1/2−cosθ)+(sinθ+cosθ)=1.
    부호 세 번 판정 후 상수로 정리(T-부호). 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "4π/3<θ<3π/2 → sinθ<0, cosθ<0 → 세 절댓값 모두 (−) 로 벗김 → 상수 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 범위(제3사분면 안 부분구간)와 상수 1/2. 제약: 범위 안에서 각 절댓값 내부의 부호가 하나로 정해져야 함(sinθ−1/2 는 sinθ<1/2 인 범위에서만 음수 고정). 답이 상수가 되도록 계수 배치."
    creative: "(1) 범위를 제1사분면 일부(π/6<θ<π/4)로 옮기면 sinθ−1/2 부호가 바뀌고 답이 삼각함수 식으로 남음(★2) (2) 범위 대신 근호 조건으로 사분면을 정하게 하면 0536 골조 ★3 (3) 절댓값 안을 tanθ 까지 확장(★2~3)."
```

```yaml
- id: RPM-ALG-0536
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    √cosθ·√tanθ=−√(cosθtanθ) 일 때 √(tan²θ)·∛(cos³θ)+√(cos²θ)−|cosθ+tanθ|−|sinθ−tanθ| 를 간단히 하기(cosθtanθ≠0). 5지선다.
  category: "근호 조건 → cosθ<0, tanθ<0 → 제2사분면 → 근호·절댓값 다섯 항 벗기기 → 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√a·√b=−√(ab) ⟺ a<0, b<0 — 근호 관계식을 부호 조건으로 동치 변환해 사분면(제2)을 스스로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 근호·절댓값 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √a√b=−√(ab) 는 a<0, b<0 일 때이므로 cosθ<0, tanθ<0 → 제2사분면(sinθ>0). |tanθ|=−tanθ, ∛(cos³θ)=cosθ, |cosθ|=−cosθ, cosθ+tanθ<0, sinθ−tanθ>0 으로 벗기면 −tanθcosθ−cosθ+cosθ+tanθ−sinθ+tanθ=−2sinθ+2tanθ(tanθcosθ=sinθ).
    조건 해석(EQV d1) + 다섯 항 부호 처리(T-부호·T-표기)·M_total 7 → 중요 ★3.
  tier: star_3
  mechanism_primary: "√cosθ√tanθ=−√(cosθtanθ) → cosθ<0, tanθ<0 → 제2사분면 → 항별 부호로 근호·절댓값 제거 → −tanθcosθ=−sinθ 정리 → −2sinθ+2tanθ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 조건의 두 함수 조합(sinθ·cosθ, sinθ·tanθ)과 식의 항 구성. 제약: 조건이 사분면 하나를 정해야 함(두 함수 부호 조합 → 유일 사분면), 각 항의 내부 부호가 그 사분면에서 확정(sinθ−tanθ 는 제2사분면에서 항상 양)."
    creative: "(1) 조건을 √a/√b=−√(a/b)(a>0, b<0) 로 바꾸면 사분면이 바뀜(0540 골조 ★3) (2) ∛ 를 ⁴√ 로 바꾸면 절댓값이 하나 더 생김(★3) (3) 근호 조건과 사분면 부등식을 함께 주고 모순 여부 판단을 요구하면 I-VF ★4."
```

```yaml
- id: RPM-ALG-0537
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼각함수 항등식 다섯 보기 중 옳지 않은 것 고르기. 5지선다.
  category: "각 보기를 sin·cos 로 통일 → 통분 → sin²θ+cos²θ=1 로 정리 → 불일치 찾기"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식 정리(항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~④ 는 tanθ=sinθ/cosθ 와 sin²θ+cos²θ=1 로 정리하면 성립. ⑤ 는 tan²θ·2/(1−cos²θ)=2tan²θ/sin²θ=2/cos²θ≠1.
    항등식 검증 다섯 번의 노동(Mₛ 3·Mₖ 2)이지만 통찰 없음 → 계산 노동만으로는 올리지 않아 ★2. [분류 이슈] ★2/★3 경계(노동형).
  tier: star_2
  mechanism_primary: "보기별 sin·cos 통일 → 통분 → sin²θ+cos²θ=1 → ⑤ 좌변 = 2/cos²θ ≠ 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 다섯 개의 항등식 구성(어느 보기가 틀린지, 틀린 보기의 우변 상수). 제약: 옳은 보기는 실제 항등식이어야 하며 분모≠0 조건이 필요한 보기는 조건 명시."
    creative: "(1) 옳은 것의 개수 묻기(모든 보기 검증 강제 ★2) (2) 틀린 보기를 특정 θ 에서만 성립하는 식으로 바꾸면 반례 찾기 → I-VF d1 ★3 (3) 항등식 완성형(빈칸)으로 바꾸면 ★2."
```

```yaml
- id: RPM-ALG-0538
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    α=(1−tan⁴θ)cos²θ+tan²θ, β=(1/sin²θ)(1−sin²θ)(1−cos²θ)(1+tan²θ) 일 때 α+β 의 값.
  category: "1−tan⁴θ 인수분해·(1+tan²θ)cos²θ=1 → α=1 · 항등식 대입 → β=1"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식 정리(항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1−tan⁴θ=(1−tan²θ)(1+tan²θ) 이고 (1+tan²θ)cos²θ=1 이므로 α=1−tan²θ+tan²θ=1. β=(1/sin²θ)·cos²θ·sin²θ·(1/cos²θ)=1. 합 2.
    항등식 두 개(1+tan²θ=1/cos²θ · sin²θ+cos²θ=1)의 대입 절차. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "α: 1−tan⁴θ=(1−tan²θ)(1+tan²θ), (1+tan²θ)cos²θ=1 → 1 · β: 1−sin²θ=cos²θ, 1−cos²θ=sin²θ, 1+tan²θ=1/cos²θ → 1 → α+β=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "식의 구성(1−tan⁴θ → tan⁴θ−1 부호, β 의 인수 순서·개수). 제약: 각 식이 상수로 정리되어야 하며 sinθcosθ≠0 조건이 암묵적으로 필요."
    creative: "(1) α 만 주고 값을 묻기(★1~2) (2) α, β 를 이차방정식의 두 근으로 주고 방정식 구성(EQ 결합 ★2) (3) 1+tan²θ=1/cos²θ 를 못 쓰게 분모에 cos⁴θ 를 두어 sin·cos 통일을 강제하면 Mₖ↑ ★3."
```

```yaml
- id: RPM-ALG-0539
  page: 73
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    π/2<θ<π 이고 sinθ/(1−sinθ)−sinθ/(1+sinθ)=4 일 때 cosθ 의 값. 5지선다.
  category: "통분 → 2sin²θ/cos²θ=2tan²θ=4 → cos²θ=1/(1+tan²θ) → 제2사분면 부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식 정리(항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 통분하면 2sin²θ/(1−sin²θ)=2tan²θ=4 → tan²θ=2. 1+tan²θ=1/cos²θ 에서 cos²θ=1/3, 제2사분면이므로 cosθ=−√3/3.
    통분·항등식·부호(T-부호) 5단계. 기출이지만 통찰 없음(+0)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "통분 → 2sin²θ/cos²θ=4 → tan²θ=2 → cos²θ=1/(1+tan²θ)=1/3 → 제2사분면 → −√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(4 → 2tan²θ=k, k>0)와 각 범위. 제약: cos²θ=1/(1+k/2) 가 선택지 꼴(√3/3, 1/2 …)이 되도록 k 선택, 범위로 부호 유일."
    creative: "(1) 좌변을 cosθ/(1−cosθ)−cosθ/(1+cosθ) 로 바꾸면 2/tan²θ 꼴(★2) (2) 범위를 없애고 cos²θ 를 물으면 T-부호 제거 ★2 (3) 조건식 우변에 tanθ 를 섞어 tanθ 의 이차방정식이 되게 하면 EQ 결합 ★3."
```

```yaml
- id: RPM-ALG-0540
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    √cosθ/√tanθ=−√(cosθ/tanθ) 를 만족시키는 θ 에 대하여 tanθ+1/tanθ=−2 일 때 √((sinθ−cosθ)²)+⁴√(sin⁴θ)+√(4cos²θ)−∛(cos³θ) 의 값(cosθtanθ≠0).
  category: "근호 몫 조건 → cosθ>0, tanθ<0 → 제4사분면 · tanθ+1/tanθ=−2 → tanθ=−1 → 값 대입 후 근호·절댓값 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√a/√b=−√(a/b) ⟺ a>0, b<0 — 근호 몫 관계를 부호 조건으로 동치 변환해 제4사분면 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 근호·절댓값 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √a/√b=−√(a/b) 는 a>0, b<0 이므로 cosθ>0, tanθ<0 → 제4사분면. tanθ+1/tanθ=−2 는 (tanθ+1)²=0 → tanθ=−1 → sinθ=−√2/2, cosθ=√2/2. |sinθ−cosθ|+|sinθ|+2|cosθ|−cosθ=√2+√2/2+√2−√2/2=2√2.
    조건 해석 EQV d1 + 부호 처리 네 항(T-부호·T-표기)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "근호 몫 조건 → 제4사분면 → tanθ+1/tanθ=−2 → tanθ=−1 → (sinθ, cosθ)=(−√2/2, √2/2) → |sinθ−cosθ|+|sinθ|+2|cosθ|−cosθ=2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tanθ+1/tanθ 의 값(−2 → 중근 tanθ=−1 · 다른 값이면 tanθ 두 개 중 사분면으로 선택)과 근호 조건의 함수 조합. 제약: |값|≥2, 사분면과 tanθ 부호 일치, 근호·절댓값 항의 내부 부호가 확정될 것."
    creative: "(1) tanθ+1/tanθ=−5/2 로 바꾸면 tanθ=−2 또는 −1/2 가 모두 제4사분면이라 값이 둘 → I-MI 분기 ★4(또는 값의 합을 물음) (2) sinθ+cosθ 값으로 대체해 0518 골조와 결합 ★3 (3) 근호 조건을 없애고 각 범위로 주면 EQV 제거 ★2."
```

```yaml
- id: RPM-ALG-0541
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    sinθ−cosθ=√2 일 때 1/cosθ−1/sinθ 의 값. 5지선다.
  category: "차 제곱 → sinθcosθ=−1/2 → 통분 (sinθ−cosθ)/(sinθcosθ)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (sinθ−cosθ)²=1−2sinθcosθ=2 에서 sinθcosθ=−1/2. 1/cosθ−1/sinθ=(sinθ−cosθ)/(sinθcosθ)=√2/(−1/2)=−2√2.
    두 단계·부호 결정 불필요·M_total 3 → 종합 구역 출발 ★2 에서 −1 → ★1. [분류 이슈] 종합 구역이지만 교과서 수준.
  tier: star_1
  mechanism_primary: "sinθ−cosθ=√2 제곱 → sinθcosθ=−1/2 → (sinθ−cosθ)/(sinθcosθ)=−2√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차의 값(√2 는 극값 · 1/2, −1/3 등)과 물을 식. 제약: |sinθ−cosθ|≤√2, sinθcosθ≠0. 1/sinθ+1/cosθ 로 바꾸면 합의 부호 결정이 필요."
    creative: "(1) 1/sinθ+1/cosθ 를 물으면 sinθ+cosθ 부호 결정이 필요해 사분면 조건 추가 ★2 (2) 차=√2 를 그대로 두고 θ 자체(3π/4)를 묻기 ★1 (3) tanθ+1/tanθ 를 물으면 1/(sinθcosθ) 한 줄 ★1."
```

```yaml
- id: RPM-ALG-0542
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    sin⁴θ−cos⁴θ=√7/4, sinθ+cosθ=√7/2 일 때 sin³θ−cos³θ 의 값. 5지선다.
  category: "sin⁴θ−cos⁴θ=(sinθ+cosθ)(sinθ−cosθ) → sinθ−cosθ=1/2 → 합 제곱으로 sinθcosθ → 세제곱 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin⁴θ−cos⁴θ=(sin²θ+cos²θ)(sin²θ−cos²θ)=(sinθ+cosθ)(sinθ−cosθ) 이므로 sinθ−cosθ=1/2(부호 포함). (sinθ+cosθ)²=7/4 에서 sinθcosθ=3/8. sin³θ−cos³θ=(sinθ−cosθ)(1+sinθcosθ)=11/16.
    사분면 없이 첫 조건으로 차의 부호를 정하는 구조가 핵심(제곱근으로 정하면 부호 불명 → T-부호)이나 인수분해 자체는 표준 → 절차형·M_total 5 ★2.
  tier: star_2
  mechanism_primary: "sin⁴θ−cos⁴θ=(sinθ+cosθ)(sinθ−cosθ) → sinθ−cosθ=1/2 → sinθcosθ=3/8 → (sinθ−cosθ)(1+sinθcosθ)=11/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합·차의 값 쌍. 제약: (합)²+(차)²=2 를 반드시 만족해야 하고 sin⁴θ−cos⁴θ=합×차 로 첫 조건 값을 맞춤(합 √7/2·차 1/2 → sinθcosθ=3/8 일관)."
    creative: "(1) 첫 조건을 sin²θ−cos²θ 로 주면 한 단계 감소 ★2 (2) 첫 조건을 빼고 사분면·sinθ>cosθ 를 주면 부호 결정형 ★2 (3) 세 조건이 서로 모순되게 주고 그런 θ 의 존재 여부를 판단시키면 I-VF ★4."
```

```yaml
- id: RPM-ALG-0543
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ㈎ √sinθ/√cosθ=−√tanθ, ㈏ sinθ+cosθ=√3/3 을 만족시키는 θ 에 대하여 sin²θ−cos²θ 의 값(sinθcosθ≠0).
  category: "근호 몫 조건 → sinθ>0, cosθ<0(제2사분면) → 합 제곱 → sinθcosθ → (sinθ−cosθ)² → 부호 → (합)(차)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√a/√b=−√(a/b) ⟺ a>0, b<0 — 조건 ㈎ 를 sinθ>0, cosθ<0 으로 옮겨 사분면을 스스로 확정(차의 부호 근거)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기(사분면 부호 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 에서 sinθ>0, cosθ<0 → 제2사분면. ㈏ 제곱에서 sinθcosθ=−1/3, (sinθ−cosθ)²=5/3 → sinθ−cosθ=√15/3(양). sin²θ−cos²θ=(√3/3)(√15/3)=√5/3.
    사분면을 근호 조건으로 확정하는 EQV d1 + 0518 골조(T-부호·T-표기)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "㈎ → sinθ>0, cosθ<0 → ㈏ 제곱 → sinθcosθ=−1/3 → (sinθ−cosθ)²=5/3 → sinθ−cosθ=√15/3 → (합)(차)=√5/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{5}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(제2사분면이면 −1<합<1)과 근호 조건의 함수 쌍. 제약: ㈎ 가 정하는 사분면과 합의 부호·크기가 양립하고 (sinθ−cosθ)²>0."
    creative: "(1) ㈎ 를 √sinθ√cosθ=−√(sinθcosθ) 로 바꾸면 제3사분면 → 합이 음수여야 함(★3) (2) ㈎ 대신 사분면을 직접 주면 EQV 제거 → 0518 ★2 (3) 물을 값을 sin³θ−cos³θ 로 바꾸면 세제곱 공식 추가 ★3."
```

```yaml
- id: RPM-ALG-0544
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x²+2(1−cosθ)x−sin²θ=0 의 두 근의 차가 2 일 때 tanθ 의 값(0<θ<π/2). 5지선다.
  category: "근과 계수 → (α−β)²=(α+β)²−4αβ → 4(1−cosθ)²+4sin²θ=8(1−cosθ)=4 → cosθ=1/2 → θ=π/3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α+β=−2(1−cosθ), αβ=−sin²θ 에서 (α−β)²=4(1−cosθ)²+4sin²θ=4(2−2cosθ)=8(1−cosθ). 이것이 4 이므로 cosθ=1/2, 0<θ<π/2 에서 θ=π/3, tanθ=√3.
    근의 차 공식과 sin²θ+cos²θ=1 정리를 매개변수 식으로 다루는 5~6단계(T-범위). 통찰 없음이나 M_total 7 → ★3. 판별식 D/4=(1−cosθ)²+sin²θ 로 풀어도 같음.
  tier: star_3
  mechanism_primary: "근과 계수 → (α−β)²=4(1−cosθ)²+4sin²θ=8(1−cosθ) → =4 → cosθ=1/2 → θ=π/3 → tanθ=√3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근의 차 d 와 계수 구조(2(1−cosθ) 의 2, −sin²θ). 제약: 8(1−cosθ)=d² 에서 cosθ 가 특수각 값(1/2, √2/2, 0)이 되는 d 만 가능(d=2 → 1/2 · d=2√2 → 0 은 범위 밖), 범위 안 유일."
    creative: "(1) 두 근의 차 대신 두 근의 제곱의 합 조건(★3) (2) 계수를 sinθ, cosθ 로 뒤집고 실근 조건이 항상 성립함을 판별식으로 보이게(★3) (3) 한 근이 −1 임을 주고 θ 를 묻기 → 대입형 ★2."
```

```yaml
- id: RPM-ALG-0545
  page: 74
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    계수가 유리수인 x²−(tanθ+1/tanθ)x+1=0 의 한 근이 2+√3 일 때 sinθcosθ 의 값.
  category: "켤레근 2−√3 → 근의 합 4 = tanθ+1/tanθ = 1/(sinθcosθ) → 1/4"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "유리수 계수 → 다른 근은 켤레 2−√3 — 근의 켤레쌍으로 곱셈 없이 합 4 를 즉시 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리수 계수이므로 다른 근은 2−√3, 두 근의 합 4=tanθ+1/tanθ=(sin²θ+cos²θ)/(sinθcosθ)=1/(sinθcosθ) → sinθcosθ=1/4.
    켤레근(SYM d1)으로 +1 후보지만 M_total 4 로 가볍고 켤레근 정리는 학습된 절차에 가까워 종합 구역 출발 ★2 유지. [분류 이슈] 통찰 1 인데 ★2 — ★2/★3 경계.
  tier: star_2
  mechanism_primary: "유리수 계수 → 켤레근 2−√3 → 합 4=tanθ+1/tanθ=1/(sinθcosθ) → sinθcosθ=1/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근 a+√b(합 2a, 1/(sinθcosθ)=2a 이려면 a≥1)와 상수항. 제약: 상수항 1 은 곱 (a+√b)(a−√b)=a²−b=1 과 일치해야 함(2+√3, 3+2√2, 5+2√6 …)."
    creative: "(1) 상수항을 k 로 두고 근의 곱으로 k 도 묻기(★2) (2) 계수가 유리수 조건을 빼고 다른 근을 직접 주면 SYM 제거 ★1~2 (3) 한 근을 tanθ 값 자체로 주고 다른 근이 1/tanθ 임을 발견하게 하면 I-EQV d1 ★3."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0546
  page: 75
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    θ 와 5θ 의 동경이 일치할 때 cos(θ−π) 의 값(π<θ<2π).
  category: "동경 일치 → 5θ−θ=2nπ → θ=nπ/2 → 범위에서 θ=3π/2 → cos(π/2)=0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각과 동경의 위치(사분면·일치·대칭 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5θ−θ=2nπ 에서 θ=nπ/2, π<θ<2π 에서 n=3 만 가능해 θ=3π/2. cos(3π/2−π)=cos(π/2)=0.
    일반각 한 번·범위 선택 한 번(T-범위)·특수각 값. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 → ★2. [분류 이슈] 서술형 구역이나 M·I 는 ★2.
  tier: star_2
  mechanism_primary: "5θ−θ=2nπ → θ=nπ/2 → π<θ<2π → θ=3π/2 → cos(θ−π)=cos(π/2)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(5θ → 3θ·7θ: θ=nπ/(k−1))와 범위·물을 값(sin(θ+π/2) 등). 제약: 범위 안 해가 하나가 되도록 폭 조정(폭 π 에 nπ/2 는 최대 두 개 → 끝점 제외로 하나), 물을 값이 특수각 값."
    creative: "(1) 범위를 0<θ<2π 로 넓혀 모든 θ 의 합(★2) (2) 일치를 x축 대칭으로 바꾸면 6θ=2nπ(★2) (3) 일치 조건과 사분면 조건을 함께 주면 조건 결합 ★3."
```

```yaml
- id: RPM-ALG-0547
  page: 75
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    길이 16 인 끈을 남김없이 써서 넓이가 12 이상인 부채꼴을 만들 때 중심각의 크기의 최댓값.
  category: "2r+l=16 → S=r(8−r)≥12 → 2≤r≤6 → θ=16/r−2 감소 → r=2 에서 최대 6"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심각 최대 ⟺ 반지름 최소 — θ=l/r=16/r−2 가 r 의 감소함수임을 보고 넓이 조건의 r 구간 하한(r=2)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이(최댓값·도형 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l=16−2r 로 S=r(8−r)≥12 → (r−2)(r−6)≤0 → 2≤r≤6. θ=l/r=16/r−2 는 r 이 작을수록 크므로 r=2 에서 θ=6(θ<2π 확인).
    넓이 부등식 → r 구간 → 중심각을 r 의 감소함수로 읽는 동치 변환(EQV d1)에 T-범위·T-경계(θ=6 이 2π 바로 아래)·M_total 6 → 서술형 ★3.
  tier: star_3
  mechanism_primary: "2r+l=16 → S=r(8−r)≥12 → 2≤r≤6 → θ=16/r−2 감소 → r=2 → θ=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끈 길이 L 과 넓이 하한 k. 제약: r²−(L/2)r+k≤0 의 두 근이 양의 유리수(판별식 완전제곱), 최소 r 에서 θ=L/r−2<2π 성립(θ=6 은 2π≈6.28 바로 아래라 여유가 없으니 L·k 를 바꾸면 반드시 재확인)."
    creative: "(1) 중심각 최솟값(r=6 에서 2/3)을 묻기 ★3 (2) 넓이 ≥ k 대신 호의 길이 ≥ k 로 바꾸면 일차 부등식 → ★2 (3) 중심각 대신 호의 길이 최댓값 → r 최소에서 l 최대, 같은 골조 ★3."
```

```yaml
- id: RPM-ALG-0548
  page: 75
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    π<θ<3π/2 이고 tanθ=√2/2 일 때 sinθ+cosθ 의 값.
  category: "tanθ → 1+tan²θ=1/cos²θ → cos²θ=2/3 → 제3사분면 부호 → sinθ=tanθcosθ → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 정의(동경 위의 점·직선·tan 값 → sin·cos)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1+tan²θ=3/2=1/cos²θ 에서 cos²θ=2/3, 제3사분면이므로 cosθ=−√6/3, sinθ=tanθcosθ=−√3/3. 합 −(√3+√6)/3.
    항등식 하나·부호 하나(T-부호)의 표준 절차. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 → ★2. [분류 이슈] 서술형 구역이나 M·I 는 ★2.
  tier: star_2
  mechanism_primary: "tanθ=√2/2 → cos²θ=1/(1+tan²θ)=2/3 → 제3사분면 cosθ=−√6/3 → sinθ=tanθcosθ=−√3/3 → 합 −(√3+√6)/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\sqrt{3}+\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tanθ 값(√2/2 → 2, 1/3 …)과 사분면. 제약: 1/(1+tan²θ) 의 제곱근이 정리 가능한 값, 사분면과 tanθ 부호 일치(제1·3 양수, 제2·4 음수)."
    creative: "(1) sinθ−cosθ 를 물으면 부호 관리가 하나 더(★2) (2) tanθ 대신 3sinθ=√2cosθ 비례식으로 주면 0525 골조(★2) (3) 범위를 tanθ>0 만 주면 제1·3사분면 두 답 → I-MI ★3."
```

```yaml
- id: RPM-ALG-0549
  page: 75
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    2x²+ax+1=0(a>0) 의 두 근이 sinθ, cosθ 일 때, 1/sinθ, 1/cosθ 를 두 근으로 하는 이차방정식이 x²+bx+c=0. 상수 a, b, c 에 대하여 abc 의 값.
  category: "근과 계수 → (sinθ+cosθ)²=1+2sinθcosθ → a=2√2 → 역수 근의 합·곱 → b, c → abc"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 두 근으로 하는 이차방정식(근과 계수 → 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sinθ+cosθ=−a/2, sinθcosθ=1/2 에서 a²/4=1+1=2, a>0 이므로 a=2√2. 역수 근의 합 (sinθ+cosθ)/(sinθcosθ)=−2√2, 곱 1/(sinθcosθ)=2 → b=2√2, c=2, abc=16.
    근과 계수를 두 번 적용하는 6단계·무리수 계산·T-부호(a>0)·M_total 7 → 서술형 ★3.
  tier: star_3
  mechanism_primary: "근과 계수 → sinθ+cosθ=−a/2, sinθcosθ=1/2 → 합 제곱 → a=2√2 → 역수근 합 −2√2·곱 2 → b=2√2, c=2 → abc=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수(2 → sinθcosθ=1/2 는 극값 · 3 이면 sinθcosθ=1/3 → a²=15 로 무리수 커짐)와 상수항. 제약: 상수항/이차항 ≤ 1/2, a²=(이차항)²(1+2sinθcosθ) 가 정리되는 값, a>0 으로 부호 유일."
    creative: "(1) 두 근을 tanθ, 1/tanθ 로 하는 방정식(0524 골조 ★3) (2) a>0 을 빼고 abc 가 a 의 부호와 무관함(a, b 가 같은 부호)을 발견하게 하면 I-SYM d1 ★3 (3) 새 방정식의 판별식 부호를 판단시키면 EQ 결합 ★3."
```

### 실력 Up

```yaml
- id: RPM-ALG-0550
  page: 75
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    1≤n≤100 인 자연수 n 에 대해 크기가 360°×n+(−1)ⁿ×90°×n 인 각의 동경을 OPₙ 이라 할 때, OP₂~OP₁₀₀ 중 OP₁ 과 같은 위치에 있는 동경의 개수.
  category: "OP₁=270° → 360°n 항 소거 → (−1)ⁿ·90°n≡270° (mod 360°) → 홀짝 분기 → n≡1 (mod 4) → 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동경 일치 조건에서 360°n 항은 소거되고 (−1)ⁿ·90°n≡270° (mod 360°), 즉 (−1)ⁿn≡3 (mod 4) 로 압축"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부호 교대 (−1)ⁿ 와 90° 의 주기 4 를 결합해 n 짝수는 불가, n 홀수는 n≡1 (mod 4) 라는 규칙을 스스로 발견"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "일반각과 동경의 위치(사분면·일치·대칭 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OP₁ 은 360°−90°=270°. 360°n 은 동경에 영향이 없으므로 (−1)ⁿ·90°n≡270° (mod 360°), 즉 (−1)ⁿn≡3 (mod 4). n 짝수면 n≡3 (mod 4) 로 모순, n 홀수면 −n≡3 → n≡1 (mod 4). 2≤n≤100 에서 n=5, 9, …, 97 의 24개.
    조건 압축(EQV d1)과 부호 교대·주기 4 규칙 발견(PD d2) 두 통찰·T-범위(n=1 제외)·T-부호·M_total 7 → 실력 Up ★4. ★5 는 SC/VF/SYM/XU 가 없어 해당 없음.
  tier: star_4
  mechanism_primary: "OP₁=270° → (−1)ⁿ·90°n≡270° (mod 360°) → (−1)ⁿn≡3 (mod 4) → n 짝수 불가 · n 홀수 n≡1 (mod 4) → 5, 9, …, 97 → 24개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(90° → 45°: 주기 8 · 60°: 주기 6)와 n 의 범위·기준 동경(OP₁ 대신 OP₂). 제약: 계수가 360° 의 약수일 때 주기가 정수, 개수는 등차수열 항 수로 계산, 기준 동경 자신은 제외."
    creative: "(1) (−1)ⁿ 을 없애면 단순 주기 문제 → PD 없음 ★2~3 (2) OP₁ 과 x축 대칭인 동경의 개수로 바꾸면 (−1)ⁿn≡1 (mod 4) 로 부호 반전 ★4 (3) 같은 위치인 순서쌍 (n, m) 의 개수로 확장하면 조합 카운트 결합 → I-XU ★5 후보."
```

```yaml
- id: RPM-ALG-0551
  page: 75
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    원 x²+y²=1 위의 제3사분면 점 A 의 동경 OA 의 각을 θ, A 에서의 접선 l 이 x축·y축과 만나는 점을 B, C 라 할 때 △OBA : △OAC = 1 : 2. sinθ 의 값.
  category: "A(cosθ, sinθ) → 접선 xcosθ+ysinθ=1 → B(1/cosθ, 0), C(0, 1/sinθ) → 넓이 비 = sin²θ : cos²θ → tan²θ=1/2 → sin²θ=1/3 → 제3사분면"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 넓이 조건을 접선의 절편 좌표 B(1/cosθ, 0), C(0, 1/sinθ) 로 옮겨 삼각함수 관계식으로 전환 — 원의 접선(공통수학2) 또는 직각삼각형 닮음 OA²=AB·AC 가 필요"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 비 1:2 ⟺ sin²θ:cos²θ=1:2 ⟺ tan²θ=1/2 로 정리한 뒤 sin²θ+cos²θ=1 과 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 정의(동경 위의 점·직선·tan 값 → sin·cos)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A=(cosθ, sinθ) 의 접선 xcosθ+ysinθ=1 에서 B(1/cosθ, 0), C(0, 1/sinθ). △OBA=(1/2)|OB||y_A|=|sinθ|/(2|cosθ|), △OAC=|cosθ|/(2|sinθ|) 이므로 비 sin²θ:cos²θ=1:2 → 3sin²θ=1, 제3사분면이라 sinθ=−√3/3.
    닮음으로 AB:AC=1:2, OA²=AB·AC 를 써도 같은 결과. 그림→좌표 전환(RT d2)과 비 조건의 동치 정리(EQV d1) 두 통찰·T-부호·M_total 7 → 실력 Up ★4.
  tier: star_4
  mechanism_primary: "A(cosθ, sinθ) → 접선 절편 B(1/cosθ, 0), C(0, 1/sinθ) → 넓이 비 sin²θ:cos²θ=1:2 → tan²θ=1/2 → sin²θ=1/3 → 제3사분면 → −√3/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: 'crop:fig-0551.png'
  latex: latex-bank/rpm-alg/items/0551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 비 1:k(→ tan²θ=1/k, sin²θ=1/(k+1))와 사분면(그림 라벨 A·B·C 의 위치도 함께 바뀜). 제약: sin²θ=1/(k+1) 이 특수값(1/3, 1/4, 1/2)이 되는 정수 k, 사분면은 그림과 일치."
    creative: "(1) 넓이 비 대신 BC 의 길이(=1/|sinθcosθ|)를 주면 sinθcosθ 조건 → 0518 골조 결합 ★4 (2) 원의 반지름을 r 로 일반화해도 비가 불변임을 보이게 하면 I-SYM 관점 ★4 (3) 접선을 임의 직선으로 바꾸면 접선 성질이 사라져 골조 붕괴 → 피함."
```

```yaml
- id: RPM-ALG-0552
  page: 75
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    지름 AB=2, 중심 O 인 반원의 호 위에 cos(∠BAP)=4/5 인 점 P. 부채꼴 OBP 에 내접하는 원의 반지름 r₁, 호 AP 의 이등분점과 선분 AP 의 중점을 지름의 양 끝으로 하는 원의 반지름 r₂ 일 때 r₁r₂ 의 값. 5지선다.
  category: "원주각 → 중심각 ∠BOP=2α(α=∠BAP) → 내접원 r₁=(1−r₁)sinα=3/8 · 현 AP 까지의 거리 OM=sinα → r₂=(1−OM)/2=1/5 → 곱 3/40"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 cos(∠BAP)=4/5 를 원주각→중심각 관계로 옮겨 부채꼴 OBP 의 반각이 α 임을 확인(삼각비 → 부채꼴 구조 전환)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부채꼴 내접원 조건 ⟺ 중심이 이등분선 위에 있고 반지름 r₁=(1−r₁)sinα"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "호 AP 의 이등분점 N 과 현 AP 의 중점 M 이 O 에서 현에 내린 수선 위에 놓여 지름 MN=1−OM=1−sinα"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이(최댓값·도형 넓이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    cosα=4/5 → sinα=3/5. 원주각 정리로 ∠BOP=2α 이고 내접원의 중심은 이등분선 위, 반지름 r₁=(1−r₁)sinα → r₁=3/8. ∠AOP=π−2α 의 반각은 π/2−α 이므로 O 에서 현 AP 까지 거리 OM=cos(π/2−α)=sinα=3/5, 호의 이등분점 N 은 OM 의 연장선 위라 MN=1−3/5=2/5 → r₂=1/5. r₁r₂=3/40.
    각 변환(RT d2)·내접 조건식(EQV d1)·현·호 중점 지름(RT d1) 세 통찰에 T-표기(원주각·중심각)·M_total 7 → 실력 Up ★4. SC/VF/SYM/XU 가 없어 ★5 는 아님. 이 단원에는 배각 공식이 없으므로 원주각·직각삼각형 삼각비만으로 푸는 것이 의도.
  tier: star_4
  mechanism_primary: "cosα=4/5 → sinα=3/5 → ∠BOP=2α → r₁=(1−r₁)sinα=3/8 → OM=sinα=3/5 → r₂=(1−3/5)/2=1/5 → r₁r₂=3/40"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: 'crop:fig-0552.png'
  latex: latex-bank/rpm-alg/items/0552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos(∠BAP)(4/5 → 12/13, 3/5 등 피타고라스 비)와 지름 길이 d(반지름 R=d/2 에 비례: r₁=R·sinα/(1+sinα), r₂=R(1−sinα)/2). 제약: sinα 유리수, 그림 라벨(A·B·O·P·r₁·r₂)과 P 의 위치(∠BAP 예각) 유지."
    creative: "(1) r₁ 만 묻기(★3) (2) 부채꼴 OAP 에 내접하는 원으로 바꾸면 반각이 π/2−α → r=(1−r)cosα 로 골조 동일 ★4 (3) 내접원의 중심 좌표를 묻는 등 좌표화하면 도형과 좌표 결합 → I-XU ★4~5."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 4 · ★2 17 · ★3 11 · ★4 3 · ★5 0
- 통찰형 9 · 절차형 26 · premium 0
- 통찰 유형: I-EQV 7(0536 · 0540 · 0543 · 0547 · 0550 · 0551 · 0552) · I-RT 4(0531 · 0551 · 0552×2) · I-PD 1(0550) · I-SYM 1(0545) · depth 2 는 0550(PD) · 0551(RT) · 0552(RT) 세 곳
- type_hint 상위: 「sinθ±cosθ·sinθcosθ 의 값에서 식의 값 구하기」 7 · 「삼각함수를 두 근으로 하는 이차방정식」 7 · 「일반각과 동경의 위치」 5 · 「부채꼴의 호의 길이·넓이」 5 · 「삼각함수 값의 부호와 근호·절댓값 정리」 4 · 「삼각함수의 정의」 4 · 「삼각함수 사이의 관계식 정리」 3
- 구역별: 유형 UP 10 ★2·2·2·3 · 유형 UP 11 ★2·2·3·3 · 시험에 꼭 나오는 문제 ★1 4 / ★2 11 / ★3 5 · 서술형 ★2·3·2·3 · 실력 Up ★4·4·4
- 그림: 3문(`crop:fig-0531.png` · `crop:fig-0551.png` · `crop:fig-0552.png`) · 전사 답 확인 필요 0건(35문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0518 | 유형 UP 10 대표문제(구역 출발 ★3)이나 통찰 없음·M_total 5 → ★2. 유형 UP 10 의 base ★ 를 카탈로그에서 2 로 둘지 결정 필요 | ★2 / ★3 |
| RPM-ALG-0522 | 유형 UP 11 대표문제(구역 출발 ★3)이나 M_total 4·통찰 없음 → ★2. 위와 같은 카탈로그 결정 사항 | ★2 / ★3 |
| RPM-ALG-0524 | 상중·서술형이나 통찰 없음·M_total 5 → −1 후보. 근과 계수 두 번 적용 사슬로 ★3 유지 | ★2 / ★3 |
| RPM-ALG-0529 | 종합 구역(출발 ★2)이나 공식 대입 두 단계·M_total 4 → ★1. 교과서 수준 | ★1 / ★2 |
| RPM-ALG-0532 | 종합 구역이나 정의 대입 한 단계·M_total 4 → ★1 | ★1 / ★2 |
| RPM-ALG-0534 | 종합 구역이나 부호표 대입 한 단계·M_total 4 → ★1 | ★1 / ★2 |
| RPM-ALG-0537 | 항등식 검증 5회의 노동형(Mₛ 3·Mₖ 2·M_total 6)이나 통찰 없음 → ★2. 노동만으로 ★3 을 줄지 경계 | ★2 / ★3 |
| RPM-ALG-0541 | 종합 구역이나 두 단계·M_total 3 → ★1 | ★1 / ★2 |
| RPM-ALG-0545 | 켤레근(I-SYM d1) 통찰 1 이나 M_total 4 로 가벼워 ★2 유지. 통찰형인데 ★2 인 유일 문항 · 대상층은 §3.3 알고리즘대로 중상위권(SYM 은 중위권 허용 목록 밖) | ★2 / ★3 |
| RPM-ALG-0546 | 서술형 구역(출발 ★3)이나 일반각 한 번·M_total 5 → ★2 | ★2 / ★3 |
| RPM-ALG-0548 | 서술형 구역(출발 ★3)이나 항등식 하나·부호 하나·M_total 5 → ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: 「sinθ±cosθ·sinθcosθ 의 값에서 식의 값」(7문 · base ★2, 사분면 부호 결정이 붙으면 +T-부호 · 근호 조건으로 사분면을 정하게 하면 I-EQV d1 로 ★3) · 「삼각함수를 두 근으로 하는 이차방정식」(7문 · base ★2, 근과 계수 두 번 적용·근의 차·켤레근 등 EQ 도구가 붙으면 ★3) · 「일반각과 동경의 위치」(5문 · 사분면 열거 ★2, 대칭 조건 두 개 결합 ★3, (−1)ⁿ 같은 규칙 발견 ★4) · 「부채꼴의 호의 길이·넓이」(5문 · 공식 대입 ★1, 둘레 고정 최댓값 ★2, 넓이 부등식과 중심각 ★3, 도형 넓이·내접원 ★3~4).
- **통합해도 될 유형**: 「삼각함수 값의 부호와 근호·절댓값 정리」(4문)와 「삼각함수 사이의 관계식 정리」(3문)는 모두 sin²θ+cos²θ=1·tanθ=sinθ/cosθ 정리가 골조라 「삼각함수 사이의 관계」 하나로 묶고, 근호·절댓값 벗기기는 T-부호·T-표기 함정 옵션으로 두면 됨. 「삼각함수의 정의」(4문)도 점·직선·tan 값에서 sin·cos 를 구하는 같은 골조이므로 위와 합쳐 base ★1~2 로 둘 수 있음(0551 처럼 접선·넓이 조건이 붙는 실력 Up 문항만 별도 ★4 슬롯).
- **base ★ 결정 사항**: 유형 UP 10·11 의 대표문제가 M·I 로는 ★2 이므로 「유형 UP = ★3 출발」 규칙을 이 두 유형에는 ★2 로 낮추거나, 상중 level 이 붙은 문항만 ★3 으로 두는 두 갈래 중 선택 필요. 「시험에 꼭 나오는 문제」는 이 범위에서 ★1~3 이 섞여 있어 구역 자체를 base ★ 근거로 쓰기 어렵고, 유형 base ★ 에 M·I 조정을 얹는 쪽이 맞음.
