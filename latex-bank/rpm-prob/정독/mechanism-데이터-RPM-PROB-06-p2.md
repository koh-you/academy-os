---
name: mechanism-데이터-RPM-PROB-06-p2
description: RPM 확률과 통계 06 통계적 추정(2/3 · 유형 04 표본평균의 확률; 표본의 크기 구하기 ~ 유형 12 모비율의 추정) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 06 통계적 추정
  unit_code: PROB-06
  part: "2/3"
  extract_range: "92~96쪽 · 0538~0566"
  total_problems: 29
  unit_total: 89
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 06 통계적 추정 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 06 통계적 추정의 가운데 범위(92~96쪽 · 0538~0566 · 29문 · 9구역)를 다룬다. 전부 「유형 NN …」 구역이며 유형 04 표본평균의 확률; 표본의 크기 구하기부터 유형 12 모비율의 추정까지 아홉 유형이 각 3문(유형 08 만 5문)씩 들어 있다. 교과서·유형 UP·시험에 꼭 나오는 문제·서술형 주관식·실력 Up 구역은 이 범위에 없고, 벤더 신호는 유형 구역 + 문항별 난이도(중하 2 · 중 12 · 상중 4 · 표시 없음 11)와 태그(대표문제 9 · 서술형 3)로 나타난다. 그림 문항 9문은 모두 발문이 직접 지시하는 표준정규분포표 크롭이라 골조·답에 영향이 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 유형 구역 기준으로 중하 ★1~2 · 대표문제/난이도 없음/중 ★2 · 상중 ★3 이고, −1 은 03-p1 과 같이 통찰 0 이면서 M_total ≤ 4 인 실질 한 줄 풀이에만 적용했다(중하 문항은 밴드 하단 ★1 을 그대로 씀). +1 은 통찰 2개 이상 또는 depth 3 일 때만 적용했다. (2) 이 단원의 표준 도구(표본평균의 분포 N(m, σ²/n) · 표준화 후 표준정규분포표 조회 · 모평균 신뢰구간 x̄ ± z·σ/√n · 신뢰구간의 길이 2z·σ/√n · 표본비율의 정규근사 N(p, pq/n) · 모비율 신뢰구간 p̂ ± z·√(p̂q̂/n))는 통찰로 세지 않고 `mechanism_primary` 에만 적었다. 「미지수 구하기」 유형의 역방향 대입도 §2.2 I-BW 판별의 「단순 미정계수 대입」에 해당해 통찰로 세지 않았다. 조건을 쓸 수 있는 형태로 옮겨야 진행되는 손질(인원수를 표본비율로 옮기기 · 두 확률의 상등을 정규분포의 대칭으로 읽기 · σ/√n 을 한 덩어리로 묶어 신뢰도만 갈아끼우기 · 신뢰도 α% 를 P(|Z| ≤ z) = α/100 으로 뒤집어 표에서 역조회하기 · 모표준편차가 약분돼 사라짐을 보기)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 모수가 문자(m, σ)로만 주어진 문항은 Mₐ 를 2, 수치가 하나도 없는 완전 추상 문항은 3 으로 두었다.

## 문항 데이터

### 유형 04 표본평균의 확률; 표본의 크기 구하기

```yaml
- id: RPM-PROB-0538
  page: 92
  vendor_label: "유형 04 표본평균의 확률; 표본의 크기 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    N(10, 2^2) 모집단에서 크기 n 인 표본의 표본평균에 대해 P(X바 ≥ 11) = 0.1587 을 만족시키는 n. 표준정규분포표 제공.
  category: "표본평균의 분포 → 표준화 → 표에서 z 역조회 → n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률에서 표본의 크기 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X바 ~ N(10, (2/√n)²) 로 쓰고 표준화하면 우변 확률 0.1587 = 0.5 − 0.3413 이 z = 1 에 대응한다. √n/2 = 1 → n = 4. 유형 대표문제·통찰 없음·M_total 5 → 출발점 ★2 유지(한 줄 풀이는 아니라 −1 미적용).
  tier: star_2
  mechanism_primary: "X바 ~ N(10, 4/n) → (11−10)/(2/√n) = √n/2 → 표에서 0.1587 ↔ z = 1 → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-0538.png"
  latex: latex-bank/rpm-prob/items/0538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균·모표준편차(10, 2)와 경계값 11, 확률 0.1587 을 바꿀 수 있음. 제약: 표준화 값 √n·(경계−m)/σ 가 표에 있는 z(0.5·1·1.5·2·2.5)가 되고 n 이 완전제곱수로 떨어져야 함."
    creative: "(1) P(X바 ≤ 9) 꼴 왼쪽 꼬리로 바꾸기(★2 유지) (2) 양쪽 구간 P(9 ≤ X바 ≤ 11) = 0.6826 으로 주면 대칭 처리 한 단계 추가(★2) (3) 확률을 부등식 ≥ 0.9 로 주고 n 의 최솟값을 묻는 0540 형태로 올리면 경계 함정이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0539
  page: 92
  vendor_label: "유형 04 표본평균의 확률; 표본의 크기 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    N(80, 16^2) 모집단에서 크기 n 인 표본에 대해 P(X바 ≤ 648/√n) = 0.6915 를 만족시키는 n. 표준정규분포표 제공.
  category: "경계값에 √n 이 들어간 표준화 → √n 에 대한 일차식 → n"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률에서 표본의 크기 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    경계값 자체가 n 을 포함해 표준화하면 (648 − 80√n)/16 이 되고, 0.6915 ↔ z = 0.5 로 놓으면 √n 의 일차방정식 한 개가 된다. 손질은 대수 정리 수준이라 통찰로 세지 않았다. 벤더 중·서술형 → ★2.
  tier: star_2
  mechanism_primary: "경계 648/√n 를 표준화 → (648 − 80√n)/16 = 0.5 → √n → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$64$'
  answer_source: "답지"
  figure: "crop:fig-0539.png"
  latex: latex-bank/rpm-prob/items/0539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m = 80, σ = 16, 분자 648, 확률 0.6915 를 바꿀 수 있음. 제약: (분자 − m√n)/σ 가 표의 z 와 같아질 때 √n 이 양의 정수여야 하므로 분자는 σz + m√n 형태로 역산해 정한다."
    creative: "(1) 경계를 a/√n 대신 a√n 꼴로 바꾸면 이차 정리로 Mₖ 상승(★2~3) (2) n 대신 σ 를 미지수로 두기(★2) (3) 두 확률 조건을 동시에 주고 m, σ 를 모두 구하게 하면 연립 → ★3."
```

```yaml
- id: RPM-PROB-0540
  page: 92
  vendor_label: "유형 04 표본평균의 확률; 표본의 크기 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    용량이 평균 120 mL, 표준편차 5 mL 인 정규분포를 따를 때 n 병의 평균 X바 가 P(119 ≤ X바 ≤ 121) ≥ 0.9 를 만족시키는 n 의 최솟값. 표준정규분포표 제공.
  category: "대칭 구간 확률 → |Z| ≤ √n/5 부등식 → 표 역조회 → n 최솟값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률에서 표본의 크기 n 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모평균을 중심으로 좌우 대칭인 구간이라 P(|Z| ≤ √n/5) ≥ 0.9, 즉 P(0 ≤ Z ≤ √n/5) ≥ 0.45 로 반만 보면 된다. 표에서 z 를 읽고 √n ≥ 5z 를 정수 n 으로 올려야 하는 경계 함정이 있다. 벤더 상중 → ★3, 통찰 없어 조정 없음.
  tier: star_3
  mechanism_primary: "P(119 ≤ X바 ≤ 121) = 2P(0 ≤ Z ≤ √n/5) ≥ 0.9 → 표에서 0.45 ↔ z → n ≥ 25z²"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$64$'
  answer_source: "답지"
  figure: "crop:fig-0540.png"
  latex: latex-bank/rpm-prob/items/0540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균 120, 표준편차 5, 허용 폭 ±1, 확률 하한 0.9 를 바꿀 수 있음. 제약: 구간이 평균 대칭이어야 반각 처리가 살고, 확률 하한의 절반이 표에 있는 값이어야 하며 5z 가 정수라야 최솟값이 깔끔하다."
    creative: "(1) 구간을 비대칭(118 ≤ X바 ≤ 121)으로 바꾸면 대칭 축약이 막혀 두 항 계산 → ★3 유지·Mₖ 상승 (2) 확률 하한 대신 확률을 등식으로 주면 ★2 로 하강 (3) 표본의 크기를 고정하고 허용 폭을 묻는 유형 11 형태로 뒤집기(★2)."
```

### 유형 05 표본평균의 확률; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0541
  page: 92
  vendor_label: "유형 05 표본평균의 확률; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    사용 시간이 평균 60분, 표준편차 15분인 정규분포를 따를 때 100명의 평균 X바 에 대해 P(X바 ≤ k) = 0.0013 인 상수 k. 표준정규분포표 제공.
  category: "표본평균의 표준편차 계산 → 확률에서 z 역조회 → 경계값 k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률에서 경계값(미지수) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ/√n = 15/10 = 1.5 를 먼저 잡고, 왼쪽 꼬리 0.0013 이 z = −3 에 대응함을 표에서 읽어 k = 60 − 3(1.5) 로 끝난다. 유형 대표문제·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "σ/√n = 1.5 → 0.0013 ↔ z = −3 → k = 60 − 3(1.5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$55.5$'
  answer_source: "답지"
  figure: "crop:fig-0541.png"
  latex: latex-bank/rpm-prob/items/0541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균 60, 표준편차 15, 표본 크기 100, 확률 0.0013 을 바꿀 수 있음. 제약: σ/√n 이 유리수로 떨어지도록 n 을 완전제곱수로 두고, 확률은 표에 있는 z(1·1.5·2·2.5·3)에 대응해야 한다."
    creative: "(1) 오른쪽 꼬리 P(X바 ≥ k) 로 바꿔 부호 함정을 옮기기(★2) (2) P(|X바 − 60| ≤ k) 대칭형으로 바꾸면 반각 처리 추가(★2) (3) 확률을 부등식으로 주고 k 의 최솟값을 묻는 0542 형태로 바꾸면 경계 함정 추가(★2)."
```

```yaml
- id: RPM-PROB-0542
  page: 92
  vendor_label: "유형 05 표본평균의 확률; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    N(250, 14^2) 모집단에서 크기 49 인 표본의 표본평균에 대해 P(X바 ≥ k) ≤ 0.0062 를 만족시키는 실수 k 의 최솟값. 표준정규분포표 제공.
  category: "σ/√n = 2 → 꼬리 확률 부등식 → z 하한 → k 최솟값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률에서 경계값(미지수) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ/√n = 14/7 = 2. 확률이 작을수록 z 가 커지므로 P(Z ≥ (k−250)/2) ≤ 0.0062 는 (k−250)/2 ≥ 2.5 로 뒤집히고 k 의 최솟값은 255. 부등식 방향(T-부호)과 최솟값(T-경계) 두 함정이라 Mₜ = 2. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "σ/√n = 2 → P(Z ≥ (k−250)/2) ≤ 0.0062 → (k−250)/2 ≥ 2.5 → k 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$255$'
  answer_source: "답지"
  figure: "crop:fig-0542.png"
  latex: latex-bank/rpm-prob/items/0542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "250, 14, 49, 0.0062 를 바꿀 수 있음. 제약: n 이 완전제곱수라 σ/√n 이 정수여야 하고, 확률 상한이 표의 0.5 − P(0 ≤ Z ≤ z) 값과 정확히 맞아야 최솟값이 유일하다."
    creative: "(1) 왼쪽 꼬리 P(X바 ≤ k) ≤ 0.0062 로 바꿔 최댓값을 묻기(부호 함정 반전 · ★2) (2) k 대신 표본 크기 n 을 미지수로(유형 04 로 이동) (3) 두 꼬리 합 P(|X바 − 250| ≥ k) ≤ 0.0124 로 주면 대칭 처리 추가 → ★3 후보."
```

```yaml
- id: RPM-PROB-0543
  page: 92
  vendor_label: "유형 05 표본평균의 확률; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    N(m, σ^2) 에서 크기 16 인 표본평균 X바, N(m/2, σ^2) 에서 크기 16 인 표본평균 Y바 에 대해 P(X바 ≤ 21) = P(Y바 ≥ 21), P(X바 ≥ m − σ) = P(Y바 ≤ 25) 일 때 m + σ.
  category: "두 확률의 상등 → 정규분포 대칭(중점) → 표준화 값 대조 → m, σ"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 표본평균의 표준편차가 같으므로 P(X바 ≤ 21) = P(Y바 ≥ 21) 은 21 이 두 평균 m, m/2 의 한가운데임을 뜻한다고 읽어 m 을 한 줄에 결정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 조건을 확률끼리 비교하지 않고 표준화한 z 값끼리의 등식 (m−σ−m)/(σ/4) 와 (25 − m/2)/(σ/4) 의 대칭 관계로 옮겨 σ 를 결정"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "두 모집단의 표본평균 확률 등식에서 m, σ 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 표본평균의 표준편차가 σ/4 로 같다는 점이 전부를 좌우한다. 첫 조건은 21 이 m 과 m/2 의 중점이라는 대칭 읽기로, 둘째 조건은 두 표준화 값의 부호 대칭 등식으로 옮겨야 진행된다. 상중 출발 ★3 에 통찰 2개(SYM d2 · EQV d2)로 +1 → ★4. [분류 이슈] 이 범위 유일한 ★4 이므로 카탈로그 확정 시 ★3 과 재대조 필요.
  tier: star_4
  mechanism_primary: "σ(X바) = σ(Y바) = σ/4 → 21 = (m + m/2)/2 로 m → 둘째 조건의 표준화 값 대칭으로 σ → m + σ"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기 16, 두 모평균의 비(m 과 m/2), 경계값 21·25 를 바꿀 수 있음. 제약: 두 표본의 크기가 같아야 대칭 읽기가 성립하고, 중점 조건에서 나온 m 이 둘째 조건에 넣었을 때 σ > 0 인 양수로 떨어져야 한다."
    creative: "(1) 두 모평균을 m, m + d 로 두고 d 를 묻기(골조 유지 ★4) (2) 표본 크기를 16 과 25 로 다르게 하면 대칭 읽기가 깨져 표준화 두 번 + 연립 → Mₖ 상승·★4 유지 (3) 첫 조건만 주고 m 만 묻게 하면 통찰 1개로 ★3 하강."
```

### 유형 06 표본비율의 분포

```yaml
- id: RPM-PROB-0544
  page: 93
  vendor_label: "유형 06 표본비율의 분포"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    불량률 2 % 인 공정에서 400개를 임의추출할 때 불량품의 비율이 2.7 % 이하일 확률. P(0 ≤ Z ≤ 1) = 0.3413 제공.
  category: "표본비율의 정규근사 → 표준편차 √(pq/n) → 표준화 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율의 정규근사와 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂ ~ N(0.02, (0.02)(0.98)/400) 에서 표준편차 0.007 을 계산하고 (0.027 − 0.02)/0.007 = 1 로 표준화하면 0.5 + 0.3413 으로 끝난다. 백분율을 소수로 옮기는 것 외에 손질이 없어 통찰 0. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "p̂ ~ N(0.02, pq/400) → σ = 0.007 → z = 1 → 0.5 + 0.3413"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.8413$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율 0.02, 표본 크기 400, 경계 비율 0.027 을 바꿀 수 있음. 제약: √(pq/n) 이 유리수로 떨어져야 하고(pq·n 이 제곱수 조합), (경계 − p)/σ 가 제공된 표의 z 여야 한다."
    creative: "(1) 이상/이하를 뒤집어 여사건 처리 추가(★2) (2) 비율 대신 불량품 개수의 범위로 물으면 인원↔비율 전환 한 단계 추가(★2 · I-RT d1) (3) 확률을 주고 표본 크기 n 을 역산하게 하면 유형 04 골조와 결합 → ★3."
```

```yaml
- id: RPM-PROB-0545
  page: 93
  vendor_label: "유형 06 표본비율의 분포"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    B형 비율이 30 % 인 모집단에서 2100명을 임의추출할 때 B형이 588명 이상일 확률. 5지선다. 표준정규분포표 제공.
  category: "인원수 조건 → 표본비율 조건 → 표준화 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "588명 이상이라는 개수 조건을 588/2100 = 0.28 이상이라는 표본비율 조건으로 옮겨야 p̂ 의 정규근사를 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본비율의 정규근사와 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    개수를 비율로 옮긴 뒤 √(0.3·0.7/2100) = 0.01 로 표준화하면 z = −2, 답은 0.5 + 0.4772. 전환 한 단계(RT d1) 외에는 표준 절차. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "588명 이상 → p̂ ≥ 0.28 → σ = 0.01 → z = −2 → 0.5 + 0.4772"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: "crop:fig-0545.png"
  latex: latex-bank/rpm-prob/items/0545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율 0.3, 표본 크기 2100, 기준 인원 588 을 바꿀 수 있음. 제약: pq/n 이 완전제곱 소수(0.01² 등)가 되도록 n 을 잡고, 기준 인원이 n 으로 나누어떨어져 비율이 유한소수여야 한다."
    creative: "(1) 인원 구간(588명 이상 651명 이하)으로 바꾸면 양쪽 표준화 → ★2 유지 (2) 비율로 직접 물으면 RT 가 사라져 0544 와 같은 골조 (3) 확률을 주고 기준 인원을 역산하게 하면 ★3 후보."
```

```yaml
- id: RPM-PROB-0546
  page: 93
  vendor_label: "유형 06 표본비율의 분포"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    환승 비율이 20 % 인 승객 중 100명을 임의추출할 때 환승 승객이 20명 이상 30명 이하일 확률. 표준정규분포표 제공.
  category: "인원 구간 → 표본비율 구간 → 양쪽 표준화 → 확률의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "20명 이상 30명 이하를 표본비율 0.2 이상 0.3 이하로 옮겨 p̂ 의 정규근사 구간으로 환산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본비율의 정규근사와 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √(0.2·0.8/100) = 0.04 이고 구간 하단이 모비율과 같아 z 구간이 0 ≤ Z ≤ 2.5 로 깔끔하게 잡힌다. 개수↔비율 전환 한 단계(RT d1). 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "20~30명 → 0.2 ≤ p̂ ≤ 0.3 → σ = 0.04 → 0 ≤ Z ≤ 2.5 → P = 0.4938"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$0.4938$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0546.png"
  latex: latex-bank/rpm-prob/items/0546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율 0.2, 표본 크기 100, 구간 20~30명을 바꿀 수 있음. 제약: √(pq/n) 이 유한소수여야 하고 두 경계의 z 가 모두 표에 있어야 한다. 하단을 모비율에서 떼면 두 z 를 각각 읽어 빼야 한다."
    creative: "(1) 하단을 15명으로 내려 구간이 모비율을 가로지르게 하면 두 넓이의 합 → ★2 유지·Mₜ 상승 (2) 확률이 0.9 이상이 되는 표본 크기를 묻게 바꾸면 유형 04 와 결합 → ★3 (3) 모비율을 미지수로 두고 확률을 주면 역방향 → ★3."
```

### 유형 07 모평균의 추정

```yaml
- id: RPM-PROB-0547
  page: 93
  vendor_label: "유형 07 모평균의 추정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    표준편차 5시간인 정규분포에서 100개의 평균 수명이 120시간일 때 모평균 m 에 대한 신뢰도 95 % 의 신뢰구간. P(|Z| ≤ 1.96) = 0.95 제공.
  category: "신뢰구간 공식 x̄ ± z·σ/√n 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ/√n = 0.5 를 잡고 1.96 × 0.5 = 0.98 을 120 에 ± 하면 끝나는 공식 1회 대입. 통찰 없음·M_total 5 지만 대표문제 기준선이라 ★2 유지.
  tier: star_2
  mechanism_primary: "σ/√n = 5/10 = 0.5 → 120 ± 1.96(0.5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$119.02\le m\le 120.98$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 5, n = 100, x̄ = 120, 신뢰도 95 % 를 바꿀 수 있음. 제약: n 이 완전제곱수여야 σ/√n 이 깔끔하고, 신뢰도는 문항이 제공한 z(1.96·2·2.58·3)와 짝이 맞아야 한다."
    creative: "(1) 신뢰도를 99 % 로 올려 폭 비교를 덧붙이기(★2) (2) 구간의 한쪽 끝만 주고 다른 끝을 묻는 유형 08 형태로 뒤집기(★2) (3) 구간 안의 자연수 개수를 묻는 0549 형태로 바꾸면 경계 함정 추가(★2~3)."
```

```yaml
- id: RPM-PROB-0548
  page: 93
  vendor_label: "유형 07 모평균의 추정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표준편차 10초인 정규분포에서 400명의 평균이 20초일 때 모평균 m 에 대한 신뢰도 99 % 의 신뢰구간. 5지선다. P(|Z| ≤ 2.58) = 0.99 제공.
  category: "신뢰구간 공식 x̄ ± z·σ/√n 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    σ/√n = 0.5, 2.58 × 0.5 = 1.29 를 20 에 ± 하는 공식 1회 대입이고 선택지가 소수 둘째 자리만 다르다. 벤더 중하(★1~2 밴드)의 하단을 그대로 써 ★1.
  tier: star_1
  mechanism_primary: "σ/√n = 10/20 = 0.5 → 20 ± 2.58(0.5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 10, n = 400, x̄ = 20, 신뢰도 99 % 를 바꿀 수 있음. 제약: 선택지가 소수 둘째 자리에서 갈리므로 z·σ/√n 이 유한소수로 떨어져야 한다."
    creative: "(1) 신뢰도 95 % 와 99 % 를 함께 주고 폭의 차를 묻기(0556 골조 · ★2) (2) 표본 크기를 미지수로 두고 구간을 주기(0551 골조 · ★2) (3) 모표준편차 대신 표본표준편차를 주는 0549 문맥으로 바꾸기(★2)."
```

```yaml
- id: RPM-PROB-0549
  page: 93
  vendor_label: "유형 07 모평균의 추정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    100봉지를 조사해 평균 245 g, 표준편차 20 g 일 때 평균 무게 m 을 신뢰도 95 % 로 추정한 신뢰구간에 속하는 자연수의 개수. P(|Z| ≤ 1.96) = 0.95 제공.
  category: "신뢰구간 계산 → 구간 양 끝 사이의 자연수 개수 세기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본표준편차를 모표준편차로 써서 245 ± 1.96(2) 를 만든 뒤 구간 [241.08, 248.92] 안의 자연수를 242부터 248까지 세는 두 단계다. 끝점이 자연수가 아니라 양 끝 포함 여부(T-경계)가 함정. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "σ/√n = 2 → 245 ± 1.96(2) → 구간 안 자연수 242~248 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "245, 20, 100, 신뢰도 95 % 를 바꿀 수 있음. 제약: 구간의 끝이 정수에 너무 가까우면 개수가 흔들리므로 z·σ/√n 이 정수에서 충분히 떨어진 소수가 되게 잡는다."
    creative: "(1) 정수 대신 0.5 간격 눈금의 개수로 바꾸기(★2) (2) 신뢰도를 99 % 로 올려 개수가 어떻게 변하는지 비교시키기(★3 후보) (3) 개수를 주고 표본 크기를 역산하게 하면 부등식 두 개 → ★3."
```

### 유형 08 모평균의 추정; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0550
  page: 94
  vendor_label: "유형 08 모평균의 추정; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    225대의 연비 평균이 x̄, 표준편차 3 일 때 모평균 m 의 신뢰도 99 % 신뢰구간이 9.4 ≤ m ≤ a 이다. x̄ + a 의 값. 5지선다. P(|Z| ≤ 3) = 0.99 제공.
  category: "반폭 z·σ/√n 계산 → 왼쪽 끝에서 x̄ 역산 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반폭 3 × 3/15 = 0.6 을 먼저 구하면 x̄ = 9.4 + 0.6, a = x̄ + 0.6 으로 순서대로 풀린다. 미정계수 역대입이라 통찰로 세지 않음. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "반폭 = 3·3/√225 = 0.6 → x̄ = 9.4 + 0.6 → a = x̄ + 0.6 → x̄ + a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n = 225, σ = 3, 왼쪽 끝 9.4, 신뢰도 99 % 를 바꿀 수 있음. 제약: n 이 완전제곱수, z·σ/√n 이 유한소수여야 하고 선택지 간격이 반폭의 2배와 겹치지 않게 둔다."
    creative: "(1) 오른쪽 끝을 주고 왼쪽 끝을 묻기(대칭 이동 · ★2) (2) 구간의 두 끝을 모두 주고 n 을 묻는 0551 골조로 (3) x̄ 와 n 을 동시에 미지수로 두면 연립 → ★3."
```

```yaml
- id: RPM-PROB-0551
  page: 94
  vendor_label: "유형 08 모평균의 추정; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표준편차 15통, 표본평균 140통일 때 모평균 m 의 신뢰도 95 % 신뢰구간이 137 ≤ m ≤ 143 이다. 표본의 크기 n. 5지선다. P(|Z| ≤ 2) = 0.95 제공.
  category: "구간의 반폭 = z·σ/√n 방정식 → √n → n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 구간의 반폭 3 을 2 × 15/√n 과 같다고 놓으면 √n = 10. 표본평균 140 이 구간의 중점인지 확인하는 것이 유일한 점검 지점. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "반폭 3 = 2·15/√n → √n = 10 → n = 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 15, 구간 137~143, 신뢰도 95 % 를 바꿀 수 있음. 제약: z·σ/반폭 이 정수라야 n 이 선택지에 있는 완전제곱수(81·100·121·144·169)로 떨어진다."
    creative: "(1) σ 를 미지수로 두고 n 을 주기(★2) (2) 신뢰도를 미지수 α 로 두면 표 역조회가 붙어 0554 골조 · ★3 (3) 표본평균을 빼고 구간만 주면 중점 읽기가 필요해 Mₛ 상승(★2)."
```

```yaml
- id: RPM-PROB-0552
  page: 94
  vendor_label: "유형 08 모평균의 추정; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표준편차 5 g, n 개의 평균이 x̄ 일 때 모평균 m 의 신뢰도 99 % 신뢰구간이 27.85 ≤ m ≤ 32.15 이다. x̄ + n 의 값. 5지선다. P(|Z| ≤ 2.58) = 0.99 제공.
  category: "구간의 중점 = x̄ · 반폭 = z·σ/√n → n"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    하나의 구간에서 두 정보(중점 x̄ = 30, 반폭 2.15 = 2.58·5/√n → √n = 6)를 동시에 읽는 것이 골조다. 둘 다 유형 08 의 표준 절차라 통찰로 세지 않았다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "중점 → x̄ = 30 · 반폭 2.15 = 2.58·5/√n → n = 36 → x̄ + n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 5, 구간 27.85~32.15, 신뢰도 99 % 를 바꿀 수 있음. 제약: 반폭이 z·σ 를 정수 √n 으로 나눈 값이어야 하고, 중점은 정수로 두어 x̄ + n 이 선택지와 어긋나지 않게 한다."
    creative: "(1) x̄ 만 묻고 n 을 주기(★1~2 하강) (2) 같은 표본으로 신뢰도를 바꾼 구간을 덧붙이면 0553 골조 · ★2~3 (3) σ 를 미지수로 두고 n 을 주면 역산 방향만 바뀜(★2)."
```

```yaml
- id: RPM-PROB-0553
  page: 94
  vendor_label: "유형 08 모평균의 추정; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    N(m, σ^2) 에서 크기 n 인 표본으로 추정한 신뢰도 95 % 신뢰구간이 138.24 ≤ m ≤ 161.76 일 때, 같은 표본으로 추정한 신뢰도 99 % 신뢰구간에 속하는 정수의 최솟값. z = 1.96, 2.58 제공.
  category: "σ/√n 을 한 덩어리로 역산 → 신뢰도만 갈아끼워 새 구간 → 정수 최솟값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "σ 와 n 을 각각 구하려 하지 않고 σ/√n 을 하나의 미지수로 묶어 95 % 구간에서 역산한 뒤 99 % 구간에 그대로 재사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "같은 표본의 두 신뢰도 신뢰구간 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 x̄ = 150, 1.96·σ/√n = 11.76 에서 σ/√n = 6 만 얻으면 99 % 구간은 150 ± 2.58(6) 로 바로 나오고, 왼쪽 끝 134.52 보다 큰 최소 정수를 고른다. 묶어보기 한 단계(EQV d1)뿐이라 규칙상 +1 미적용. [분류 이슈] 서술형·M_total 9 로 체감은 ★3 쪽.
  tier: star_2
  mechanism_primary: "중점 x̄ = 150 · 1.96·σ/√n = 11.76 → σ/√n = 6 → 150 ± 2.58(6) → 왼쪽 끝 위 최소 정수"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$135$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 138.24~161.76 과 두 신뢰도를 바꿀 수 있음. 제약: 반폭이 1.96 의 배수라야 σ/√n 이 깔끔한 정수로 나오고, 새 구간의 끝이 정수에서 떨어져 있어야 최솟값이 유일하다."
    creative: "(1) 99 % → 95 % 반대 방향으로 좁히며 정수의 최댓값 묻기(★2) (2) 정수의 개수를 묻게 바꾸면 양 끝 경계 함정이 두 배(★3 후보) (3) 두 구간의 길이 비를 주고 신뢰도를 역산하게 하면 0560 골조 · ★3."
```

```yaml
- id: RPM-PROB-0554
  page: 94
  vendor_label: "유형 08 모평균의 추정; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표준편차 20점, 25명의 평균이 66점일 때 모평균 m 을 신뢰도 α % 로 추정한 신뢰구간이 58.48 ≤ m ≤ 73.52 이다. α 의 값. 표준정규분포표 제공.
  category: "반폭에서 z 역산 → 표에서 P(0 ≤ Z ≤ z) 조회 → α = 200·P"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 대상이 확률이 아니라 신뢰도라는 점을 P(|Z| ≤ z) = α/100 으로 뒤집어, 표를 값 → z 가 아니라 z → 넓이 방향으로 역조회하고 두 배 해 α 로 환산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "신뢰구간에서 신뢰도 α 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    σ/√n = 4 이므로 반폭 7.52 = 4z 에서 z = 1.88 을 얻고, 표에서 P(0 ≤ Z ≤ 1.88) = 0.47 을 읽어 α = 2 × 47. 신뢰도와 표 넓이의 관계를 뒤집는 단계(EQV d2)가 이 문항의 핵심. 상중 → ★3, 통찰 1개라 +1 미적용.
  tier: star_3
  mechanism_primary: "σ/√n = 4 → 반폭 7.52 = 4z → z = 1.88 → 표 넓이 0.47 → α = 94"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$94$'
  answer_source: "답지"
  figure: "crop:fig-0554.png"
  latex: latex-bank/rpm-prob/items/0554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 20, n = 25, x̄ = 66, 구간 58.48~73.52 를 바꿀 수 있음. 제약: 반폭 ÷ (σ/√n) 이 표에 실린 z(소수 둘째 자리)와 정확히 맞아야 하고 2 × 넓이 × 100 이 정수 α 가 되어야 한다."
    creative: "(1) α 대신 σ 를 미지수로 두면 표 역조회가 사라져 ★2 (2) 두 신뢰도의 구간 길이 비를 주고 α 를 묻는 0560 형태(★3 유지) (3) α 를 주고 표본 크기를 묻게 하면 정방향으로 돌아가 ★2."
```

### 유형 09 모평균에 대한 신뢰구간의 길이

```yaml
- id: RPM-PROB-0555
  page: 95
  vendor_label: "유형 09 모평균에 대한 신뢰구간의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    표준편차 5 g 인 정규분포에서 100개를 뽑아 모평균 m 을 신뢰도 95 % 로 추정한 신뢰구간의 길이. P(0 ≤ Z ≤ 1.96) = 0.475 제공.
  category: "신뢰구간의 길이 = 2z·σ/√n 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제공된 넓이 0.475 가 양쪽 합 0.95 에 대응함을 확인하고 2 × 1.96 × 5/10 을 계산하면 끝난다. 표본평균 값이 필요 없다는 점이 유일한 관찰 지점. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "길이 = 2·1.96·σ/√n = 2·1.96·(5/10)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1.96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 5, n = 100, 신뢰도 95 % 를 바꿀 수 있음. 제약: n 이 완전제곱수여야 하고 제공되는 넓이는 한쪽(0.475)인지 양쪽(0.95)인지 표기를 일관되게 둔다."
    creative: "(1) 표본평균 값을 일부러 끼워 넣어 불필요한 정보를 거르게 하기(★2) (2) 길이를 주고 표본 크기를 묻는 0558 골조로 뒤집기(★2) (3) 두 신뢰도의 길이 차를 묻는 0556 형태로 확장(★2)."
```

```yaml
- id: RPM-PROB-0556
  page: 95
  vendor_label: "유형 09 모평균에 대한 신뢰구간의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    121명의 키의 표준편차가 11 cm 일 때 신뢰도 95 % 구간을 a ≤ m ≤ b, 99 % 구간을 c ≤ m ≤ d 라 할 때 |(d−c)−(b−a)| 의 값. 5지선다. z = 1.96, 2.58 제공.
  category: "두 신뢰도의 길이 각각 계산 → 차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ/√n = 11/11 = 1 이라 두 길이가 2(1.96) 과 2(2.58) 로 바로 나오고 차는 2(2.58 − 1.96). 길이 공식에서 σ/√n 이 공통이므로 빼기를 먼저 해도 되지만 어느 쪽이든 한 줄. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "σ/√n = 1 → (d−c) − (b−a) = 2(2.58 − 1.96)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n = 121, 표본표준편차 11, 두 신뢰도를 바꿀 수 있음. 제약: σ/√n 이 깔끔한 수(가능하면 1)여야 선택지가 z 차이만으로 갈린다."
    creative: "(1) 길이의 비 (d−c)/(b−a) 를 묻기(σ/√n 이 약분돼 ★2 유지) (2) 한쪽 신뢰도를 미지수 α 로 두면 표 역조회가 붙어 ★3 (3) 표본 크기를 달리한 두 구간의 길이 비로 바꾸면 0557 골조."
```

```yaml
- id: RPM-PROB-0557
  page: 95
  vendor_label: "유형 09 모평균에 대한 신뢰구간의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    N(m, σ^2) 에서 크기 100 인 표본의 신뢰도 95 % 구간의 길이를 l 이라 할 때, 크기 400 인 표본의 같은 신뢰도 구간의 길이를 l 로 나타내기. 5지선다.
  category: "길이가 1/√n 에 비례 → 표본 크기 4배 → 길이 1/2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    신뢰도가 같으므로 z 가 상쇄되고 길이는 σ/√n 에만 비례한다. n 이 4배면 √n 이 2배, 길이는 1/2 배. 비례 읽기 한 줄이지만 문자 상태(m, σ, l)로 다루므로 Mₐ = 2. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "길이 = 2zσ/√n → n: 100 → 400 이면 √n 2배 → 길이 (1/2)l"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기 100 → 400 의 비를 바꿀 수 있음. 제약: 두 크기의 비가 완전제곱수여야 길이의 비가 유리수로 떨어진다."
    creative: "(1) 신뢰도까지 함께 바꾸면 z 가 상쇄되지 않아 표 조회 추가 → ★3 (2) 길이를 절반으로 만들려면 표본을 몇 배로 늘려야 하는지 역으로 묻기(★2) (3) 모표준편차가 2배가 될 때의 길이로 바꾸면 비례 축이 σ 로 이동(★2)."
```

### 유형 10 모평균에 대한 신뢰구간의 길이; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0558
  page: 95
  vendor_label: "유형 10 모평균에 대한 신뢰구간의 길이; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    N(m, 3^2) 에서 크기 n 인 표본으로 얻은 신뢰도 99 % 구간이 a ≤ m ≤ b 일 때 b − a ≤ 2 가 되도록 하는 n 의 최솟값. P(|Z| ≤ 3) = 0.99 제공.
  category: "길이 2zσ/√n ≤ 2 부등식 → √n 하한 → n 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간의 길이 조건에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b − a = 2·3·3/√n = 18/√n 이므로 18/√n ≤ 2 → √n ≥ 9 → n ≥ 81. 분모에 있는 √n 때문에 부등호가 뒤집히는 것(T-부호)과 최솟값 처리(T-경계)가 함정. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "b − a = 18/√n ≤ 2 → √n ≥ 9 → n 최솟값 81"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$81$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 3, 신뢰도 99 %(z = 3), 길이 상한 2 를 바꿀 수 있음. 제약: 2zσ/상한 이 정수라야 √n 하한이 정수가 되고 최솟값이 완전제곱수로 떨어진다."
    creative: "(1) 길이 대신 반폭(모평균과 표본평균의 차) 조건으로 바꾸면 유형 11 골조 (2) n 을 주고 만족하는 신뢰도의 최댓값을 묻기(표 역조회 · ★3) (3) 길이 상한을 σ 의 배수로 주면 σ 가 약분돼 0563 골조."
```

```yaml
- id: RPM-PROB-0559
  page: 95
  vendor_label: "유형 10 모평균에 대한 신뢰구간의 길이; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    크기 64 인 표본의 신뢰도 α % 구간의 길이를 l, 크기 n 인 표본의 같은 신뢰도 구간의 길이를 l' 이라 할 때 l' = 2l 이 되게 하는 n.
  category: "같은 신뢰도 → 길이 비 = √n 의 역비 → n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간의 길이 조건에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    신뢰도가 같아 z 와 σ 가 모두 상쇄되고 l'/l = √64/√n = 2 만 남는다. √n = 4 → n = 16. 길이가 커지려면 표본이 작아져야 한다는 방향(T-부호)이 유일한 함정. 벤더 중·서술형 → ★2.
  tier: star_2
  mechanism_primary: "l'/l = √64/√n = 2 → √n = 4 → n = 16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 표본 크기 64 와 길이 배율 2 를 바꿀 수 있음. 제약: 기준 크기 ÷ 배율² 이 자연수여야 하므로 기준은 배율의 제곱의 배수인 완전제곱수로 둔다."
    creative: "(1) l' = (1/2)l 로 바꿔 표본을 늘리는 방향으로(★2) (2) 신뢰도를 서로 다르게 주면 z 가 남아 표 조회 추가 → ★3 (3) 길이 배율 대신 반폭 배율로 주면 유형 11 과 연결(★2)."
```

```yaml
- id: RPM-PROB-0560
  page: 95
  vendor_label: "유형 10 모평균에 대한 신뢰구간의 길이; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    N(m, 2^2) 에서 크기 36 인 표본으로 모평균을 신뢰도 96 %, α % 로 추정한 구간이 각각 a ≤ m ≤ b, c ≤ m ≤ d 이고 d − c = (1/2)(b − a) 일 때 α. 표준정규분포표 제공.
  category: "같은 표본 → 길이의 비 = z 의 비 → z 반감 → 표 역조회 → α"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "σ/√n 이 두 구간에 공통이므로 길이의 관계를 그대로 z 의 관계 z₂ = z₁/2 로 옮기고, 다시 α/100 = 2P(0 ≤ Z ≤ z₂) 로 표를 역조회해 신뢰도로 환산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "신뢰구간 길이의 비에서 신뢰도 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표본이 같으므로 길이의 비는 곧 z 의 비다. 96 % 에 대응하는 z₁ 을 표에서 읽고(넓이 0.48), z₂ = z₁/2 로 다시 넓이를 읽어 두 배 하면 α. 길이 → z → 넓이 → 신뢰도의 왕복 환산(EQV d2)이 핵심. 상중 → ★3.
  tier: star_3
  mechanism_primary: "σ/√n 공통 → 길이 비 = z 비 → z₂ = z₁/2 → 표 넓이 → α = 200·P(0 ≤ Z ≤ z₂)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$68$'
  answer_source: "답지"
  figure: "crop:fig-0560.png"
  latex: latex-bank/rpm-prob/items/0560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 2, n = 36, 기준 신뢰도 96 %, 길이 비 1/2 을 바꿀 수 있음. 제약: 기준 신뢰도의 z 가 표에 있고 그 z 를 비로 나눈 값도 표에 있어야 α 가 정수로 떨어진다."
    creative: "(1) 길이 비를 2배로 주면 z 가 표 범위를 넘을 수 있으니 기준 신뢰도를 낮춰야 함(★3 유지) (2) 신뢰도를 고정하고 표본 크기의 비를 묻게 바꾸면 표 역조회가 사라져 ★2 (3) 두 구간의 공통부분의 길이를 묻게 하면 경계 처리 추가 → ★4 후보."
```

### 유형 11 모평균과 표본평균의 차

```yaml
- id: RPM-PROB-0561
  page: 96
  vendor_label: "유형 11 모평균과 표본평균의 차"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    N(m, 10^2) 에서 크기 n 인 표본으로 신뢰도 95 % 추정을 할 때 |m − x̄| ≤ 2 가 되도록 하는 n 의 최솟값. 5지선다. P(|Z| ≤ 1.96) = 0.95 제공.
  category: "오차 한계 z·σ/√n ≤ 2 → √n 하한 → 제곱 후 올림"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |m − x̄| 의 한계가 신뢰구간 반폭 1.96·10/√n 임을 쓰면 √n ≥ 9.8 이고, 제곱한 96.04 가 정수가 아니므로 최솟값은 97 이다. 96 을 고르게 만드는 경계 함정(T-경계)이 선택지에 들어 있다. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "1.96·10/√n ≤ 2 → √n ≥ 9.8 → n ≥ 96.04 → 최솟값 97"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 10, 오차 한계 2, 신뢰도 95 % 를 바꿀 수 있음. 제약: (zσ/한계)² 이 정수에서 살짝 벗어나야 올림 함정이 살아난다. 정수로 딱 떨어지면 ★이 내려간다."
    creative: "(1) 오차 한계를 σ 의 비율로 주면 σ 가 약분되는 0563 골조 (2) n 을 주고 오차 한계의 최솟값을 묻기(정방향 · ★2) (3) 신뢰도를 미지수로 두면 표 역조회가 붙어 ★3."
```

```yaml
- id: RPM-PROB-0562
  page: 96
  vendor_label: "유형 11 모평균과 표본평균의 차"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    키가 N(m, 15^2) 을 따를 때 신뢰도 99 % 추정에서 모평균과 표본평균의 차가 3 cm 이하가 되기 위한 표본의 크기의 최솟값. P(|Z| ≤ 3) = 0.99 제공.
  category: "오차 한계 z·σ/√n ≤ 3 → √n 하한 → n 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3·15/√n ≤ 3 → √n ≥ 15 → n ≥ 225 로 0561 과 같은 골조이며 값이 정수로 떨어져 올림 함정이 없다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "3·15/√n ≤ 3 → √n ≥ 15 → n 최솟값 225"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$225$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ = 15, 오차 한계 3, 신뢰도 99 %(z = 3) 을 바꿀 수 있음. 제약: (zσ/한계)² 이 자연수로 떨어지게 두면 ★2 유지, 벗어나게 두면 0561 처럼 올림 함정이 생긴다."
    creative: "(1) 표본 크기를 주고 오차 한계를 묻기(★2) (2) 신뢰도 95 % 와 99 % 두 경우의 최솟값 차를 묻기(★3 후보) (3) 오차 한계를 백분율(평균의 2 % 이내)로 주면 m 이 남아 Mₐ 상승 → ★3."
```

```yaml
- id: RPM-PROB-0563
  page: 96
  vendor_label: "유형 11 모평균과 표본평균의 차"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    크기 n 인 표본으로 모평균을 신뢰도 95 % 로 추정할 때 모평균과 표본평균의 차가 모표준편차의 1/5 이하가 되도록 하는 n 의 최솟값. P(|Z| ≤ 2) = 0.95 제공.
  category: "오차 한계 조건의 양변에서 σ 소거 → √n 하한 → n 최솟값"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "오차 한계를 σ 의 배수로 준 조건이라 2σ/√n ≤ σ/5 에서 σ 가 약분돼, 모표준편차 값을 모르고도 n 이 결정됨을 보아야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2σ/√n ≤ σ/5 에서 σ > 0 으로 나누면 √n ≥ 10, n ≥ 100. 수치가 하나도 없는 완전 추상 조건(Mₐ = 3)이지만 약분 한 번으로 0561 과 같은 골조가 된다. 벤더 중 → ★2. [분류 이슈] 추상도만 보면 ★3 후보.
  tier: star_2
  mechanism_primary: "2σ/√n ≤ σ/5 → σ 약분 → √n ≥ 10 → n 최솟값 100"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "신뢰도(z = 2)와 배수 1/5 을 바꿀 수 있음. 제약: (z × 배수의 역수)² 이 자연수라야 최솟값이 깔끔하다. 배수를 1/4 로 하면 n ≥ 64."
    creative: "(1) σ 대신 모평균의 비율로 주면 m 이 남아 약분이 막히고 ★3 (2) n 을 주고 차가 σ 의 몇 배 이하인지 묻기(정방향 · ★2) (3) 신뢰도를 미지수로 두면 표 역조회 추가 → ★3."
```

### 유형 12 모비율의 추정

```yaml
- id: RPM-PROB-0564
  page: 96
  vendor_label: "유형 12 모비율의 추정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    환자 400명 중 320명이 치료되었을 때 치료율 p 에 대한 신뢰도 99 % 의 신뢰구간. P(|Z| ≤ 2.58) = 0.99 제공.
  category: "인원 → 표본비율 p̂ → 모비율 신뢰구간 p̂ ± z√(p̂q̂/n)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "400명 중 320명이라는 개수 정보를 표본비율 p̂ = 0.8 로 옮겨야 모비율 신뢰구간 공식에 들어갈 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모비율에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂ = 0.8 을 잡고 √(0.8·0.2/400) = 0.02 를 계산해 0.8 ± 2.58(0.02). 모비율에서는 p 대신 p̂ 로 표준편차를 추정한다는 점이 이 유형의 표준 도구다. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "p̂ = 320/400 = 0.8 → √(p̂q̂/n) = 0.02 → 0.8 ± 2.58(0.02)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$0.7484\le p\le 0.8516$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n = 400, 치료 인원 320, 신뢰도 99 % 를 바꿀 수 있음. 제약: p̂q̂/n 이 완전제곱 소수라야 √ 가 유한소수로 떨어진다(p̂ = 0.8·0.2·0.25·0.75 계열 + n 완전제곱수)."
    creative: "(1) 비율을 직접 주면 RT 가 사라져 0565 골조 (2) 구간을 주고 n 을 역산하는 0566 골조로 뒤집기(★2) (3) 신뢰도를 미지수로 두면 표 역조회 추가 → ★3."
```

```yaml
- id: RPM-PROB-0565
  page: 96
  vendor_label: "유형 12 모비율의 추정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주민 100명 중 1/5 의 비율이 '김 씨'일 때 모비율 p 를 신뢰도 95 % 로 추정한 신뢰구간. P(|Z| ≤ 2) = 0.95 제공.
  category: "모비율 신뢰구간 공식 p̂ ± z√(p̂q̂/n) 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p̂ = 0.2 가 그대로 주어져 √(0.2·0.8/100) = 0.04 만 계산하면 0.2 ± 2(0.04) 로 끝난다. 벤더 중하(★1~2 밴드)의 하단을 써 ★1.
  tier: star_1
  mechanism_primary: "p̂ = 1/5 → √(p̂q̂/n) = 0.04 → 0.2 ± 2(0.04)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.12\le p\le 0.28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p̂ = 1/5, n = 100, 신뢰도 95 % 를 바꿀 수 있음. 제약: p̂q̂/n 이 완전제곱 소수여야 하고 신뢰도는 문항이 제공한 z 와 짝이 맞아야 한다."
    creative: "(1) 비율 대신 인원을 주면 0564 처럼 RT d1 추가(★2) (2) 구간의 길이를 묻게 바꾸면 유형 09 의 모비율판(★2) (3) 구간의 길이를 0.1 이하로 만드는 n 의 최솟값을 묻기 → ★3."
```

```yaml
- id: RPM-PROB-0566
  page: 96
  vendor_label: "유형 12 모비율의 추정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    성인 n 명 중 25 % 가 A 자동차를 안다고 응답했고 인지도 p 의 신뢰도 95 % 신뢰구간이 0.201 ≤ p ≤ 0.299 일 때 n. 5지선다. P(|Z| ≤ 1.96) = 0.95 제공.
  category: "구간의 중점 = p̂ · 반폭 = z√(p̂q̂/n) → n 역산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율 신뢰구간에서 표본의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂ = 0.25 가 구간의 중점 0.25 와 일치함을 확인하고 반폭 0.049 = 1.96√(0.25·0.75/n) 에서 √(p̂q̂/n) = 0.025 를 얻어 n 을 역산한다. 근호 안을 통째로 미지수로 보는 정리가 계산의 전부라 통찰로 세지 않았다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "중점 = p̂ = 0.25 · 반폭 0.049 = 1.96√(p̂q̂/n) → √(p̂q̂/n) = 0.025 → n = 300"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p̂ = 0.25, 구간 0.201~0.299, 신뢰도 95 % 를 바꿀 수 있음. 제약: 반폭 ÷ z 가 √(p̂q̂/n) 과 정확히 맞아떨어져 n 이 선택지의 100 단위 값으로 나와야 한다."
    creative: "(1) n 을 주고 신뢰도를 묻게 하면 표 역조회 → ★3 (2) 구간의 길이만 주고 n 의 최솟값을 묻는 부등식형으로 바꾸면 경계 함정 추가(★3) (3) 응답 인원을 주면 RT d1 추가(★2 유지)."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 2 · ★2 23 · ★3 3 · ★4 1 · ★5 0
- `insight_type` 기준 통찰형 3(0543 · 0554 · 0560) · 절차형 26 · premium 0
- insights 가 하나라도 붙은 문항 8(dokdu-check 의 「통찰형 8」은 이 기준) · 통찰 코드 분포: I-EQV 5 · I-RT 3 · I-SYM 1 (총 9개 라벨)
- type_hint 상위: 「표본평균의 확률에서 표본의 크기 n 구하기」 3 · 「모평균 신뢰구간에서 미지수 구하기」 3 · 「표본비율의 정규근사와 확률 계산」 3 · 「모평균에 대한 신뢰구간 구하기」 3 · 「모평균 신뢰구간의 길이 구하기」 3 (그 밖에 「모평균과 표본평균의 차 조건에서 표본의 크기 구하기」 3 · 「신뢰구간의 길이 조건에서 표본의 크기 구하기」 2 · 「표본평균의 확률에서 경계값 구하기」 2 · 「모비율에 대한 신뢰구간 구하기」 2 · 단독 4)
- 벤더 난이도 대조: 중하 2 → ★1 2 · 표시 없음(대표문제) 9 → 전부 ★2 · 중 12 → ★2 12 · 상중 4 → ★3 3 · ★4 1
- 그림: 9문(fig-0538 · 0539 · 0540 · 0541 · 0542 · 0545 · 0546 · 0554 · 0560) — 모두 발문이 지시하는 표준정규분포표라 골조 판정에 영향 없음
- 범위 특성: 29문 중 20문이 「σ/√n 또는 √(p̂q̂/n) 을 한 덩어리로 잡고 정방향·역방향 대입」이라는 같은 사슬을 쓴다. 변별은 (1) 미지수가 어디에 놓이는가(경계값·n·신뢰도 α), (2) 등식인가 부등식인가(최솟값·올림 함정), (3) 신뢰도·표본 크기가 두 개 주어져 z 나 σ/√n 이 상쇄되는가에서만 생긴다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0543 | 벤더 상중(★3 출발)에서 통찰 2개(I-SYM d2 · I-EQV d2)로 +1 해 이 범위 유일한 ★4. ★4 저노출 유형 요건(SYM)은 충족하나 카탈로그 확정 시 ★3 과 재대조 필요 | ★3 / ★4 |
| RPM-PROB-0553 | 서술형 태그 · M_total 9 · 두 신뢰도를 σ/√n 으로 잇고 정수 최솟값까지 요구하는데 통찰이 d1 하나라 규칙상 +1 미적용 → ★2 라벨. 학생 체감은 ★3 쪽 | ★2 / ★3 |
| RPM-PROB-0563 | 수치가 하나도 없는 완전 추상 조건(Mₐ = 3)이고 σ 소거를 보아야 하지만 벤더 중 · 통찰 d1 하나 → ★2 유지 | ★2 / ★3 |
| RPM-PROB-0548 · 0565 | 벤더 중하(★1~2 밴드)의 하단 ★1 을 썼다. 같은 공식 1회 대입인 대표문제 0547 · 0555 는 난이도 표시가 없어 ★2 라 두 문항 사이에 1단 차가 남음 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「표본평균의 확률 → n」(0538~0540)과 「표본평균의 확률 → 경계값 k」(0541~0542)는 미지수 위치가 달라 변형 제약이 전혀 다르므로 분리한다. (2) 「신뢰구간 길이의 비 → 신뢰도 α」(0554 · 0560)는 표를 z → 넓이 방향으로 역조회하는 유일한 골조라 별도 유형으로 세운다(base ★3 후보). (3) 「두 모집단 표본평균의 확률 등식」(0543)은 이 범위에서 유일하게 정규분포의 대칭을 쓰므로 단독 유형(base ★4 후보).
- **통합해도 될 유형**: (1) 유형 09 「신뢰구간의 길이」와 유형 10 「길이; 미지수」는 같은 2zσ/√n 사슬에서 미지수 위치만 다르므로 한 유형의 base ★2 + 하위 갈래로 묶어도 된다(0555~0559). (2) 유형 11 「모평균과 표본평균의 차 → n 최솟값」(0561~0563)은 유형 10 과 사실상 같은 부등식이며 「길이」 대신 「반폭」이라는 표현만 다르다 — 카탈로그에서는 한 유형으로 묶고 T-경계(올림) 유무로 base ★1~2 를 가른다. (3) 유형 12 모비율 추정(0564~0566)은 유형 07·08 모평균 추정과 공식 모양이 같아 「모수 추정 신뢰구간」 한 유형 아래 모평균/모비율 갈래로 둘 수 있다.
- **★ 상한 메모**: 이 범위는 절차형 26문으로 ★2 가 79 %다. 카탈로그를 만들 때 통계적 추정 단원의 base ★ 중심을 2 로 잡고, ★3 이상은 표 역조회 방향 전환(EQV d2) 또는 두 모집단 대칭(SYM) 골조가 있는 유형에만 부여하는 것이 이 범위 실측과 맞는다.
