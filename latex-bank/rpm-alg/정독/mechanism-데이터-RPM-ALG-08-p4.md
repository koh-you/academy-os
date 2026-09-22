---
name: mechanism-데이터-RPM-ALG-08-p4
description: RPM 대수 08 등차수열과 등비수열(4/4 · 유형 UP 24~26 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 08 등차수열과 등비수열
  unit_code: ALG-08
  part: "4/4"
  extract_range: "123~128쪽 · 0908~0946"
  total_problems: 39
  unit_total: 145
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 출발점은 유형 UP ★3(level 중 → ★2 · 상중 → ★3) · 시험에 꼭 나오는 문제 ★2(단일 공식·읽기 문항은 ★1 · 통찰 depth 2 이상이거나 통찰 있고 M_total ≥ 7 이면 ★3) · 서술형 ★3 · 실력 Up ★4. 통찰 0·Mₛ 1·M_total ≤ 4 인 단일 절차 문항은 −1, 통찰 2개 이상이면 +1 후보. Mₜ 는 함정 카테고리 수(0 허용). depth_score 는 effective_depth 의 합(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 08 등차수열과 등비수열 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 08 단원의 마지막 범위(123~128쪽 · 0908~0946 · 39문)를 다룬다. 구역은 유형 UP 24 등차수열의 합의 활용(3문) · 유형 UP 25 등비수열의 합의 활용(3문) · 유형 UP 26 원리합계(3문) · 시험에 꼭 나오는 문제(23문) · 서술형 주관식(4문) · 실력 Up(3문)이다. 벤더 난이도 신호는 구역이 곧 층이며(유형 UP ★3 · 시험에 꼭 ★2 · 서술형 ★3 · 실력 Up ★4 출발), 유형 UP 구역에는 대표문제 태그와 난이도 중·상중이 붙어 있고, 시험에 꼭 나오는 문제 구역에는 난이도 표시 없이 「중요」·「평가원 기출」·「교육청 기출」 태그만 있다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조 유지 변형과 ★ 변동 지점)를 채웠다. 표기 약속: `depth_score` 는 insights 의 effective_depth 합, `insight_type` 은 insights 가 비어 있으면 절차형·아니면 통찰형, `target_cohort` 는 스키마 §3.3 audience 알고리즘의 fit 가운데 ★ 주력대가 맞는 층(없으면 더 빡빡한 캡의 층). 통찰 판정은 보수적으로 했다 — 등차·등비중항, 등거리 항의 합·곱, S_n → a_n, 원리합계 공식, 포함배제는 표준 절차로 보고, 도형·좌표·로그·약수 구조를 수열로 옮기는 단계(I-RT), 블록 합의 비나 역수 합처럼 조건을 한 변수로 축약하는 단계(I-EQV), 단원 밖 도구(내각 합·직각삼각형 닮음·삼차 근과 계수)를 결합하는 단계(I-XU)만 통찰로 세었다. 그림 문항 5건(0908 · 0909 · 0911 · 0921 · 0945)은 크롭 이미지를 보고 판정했다. 답은 전사본 answer 를 그대로 옮겼고 39문 모두 재계산 결과가 전사 answer 와 일치했다.

## 문항 데이터

### 유형 UP 24 등차수열의 합의 활용

```yaml
- id: RPM-ALG-0908
  page: 123
  vendor_label: "유형 UP 24 등차수열의 합의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    두 직선 y=x, y=a(x−1) (a>1) 의 교점 오른쪽에 같은 간격으로 그은 y 축 평행 선분 14개(양 끝은 두 직선 위). 가장 짧은 길이 3, 가장 긴 길이 42 일 때 14개 길이의 합. 5지선다.
  category: "선분 길이의 일차식 → 등차수열 → 첫항·끝항 합 공식"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선 사이 세로 선분 길이가 x 의 일차식이라 같은 간격이면 등차수열이 된다는 그림 → 수열 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 활용 — 도형(선분 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 오른쪽에서 선분 길이 = a(x−1) − x = (a−1)x − a 로 x 의 일차식이므로 x 간격이 같으면 길이도 등차수열. 그러면 a 나 간격 값 없이 14·(3+42)/2 = 315. 그림·직선을 등차수열로 옮기는 착안(RT d1) 한 단계가 전부이고 M_total 4. 유형 UP 대표 ★3 출발 · 통찰 1 → ★3 유지. [분류 이슈] 통찰이 얕고 M_total 4 라 ★2 후보 — 기록만.
  tier: star_3
  mechanism_primary: "두 직선 위 선분 길이 = (a−1)x − a (x 의 일차식) → 같은 간격 → 등차수열 → 14·(3+42)/2 = 315"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0908.png"
  latex: latex-bank/rpm-alg/items/0908.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 개수(14 → 10·20), 최단·최장 길이(3·42)를 바꿀 수 있음. 제약: 합 = 개수×(첫+끝)/2 가 정수가 되도록 개수×(첫+끝) 짝수, 선택지가 등차 합으로 정리. a 값·간격 h 는 답에 영향 없으므로 그림 라벨(y=x, y=a(x−1)) 고정 가능."
    creative: "(1) 최단·최장 대신 '세 번째 선분 7, 아홉 번째 25' 처럼 두 항을 주면 공차 계산 단계 추가(★3 유지) (2) 두 직선을 y=2x, y=x+1 처럼 구체로 주고 간격 h 를 주면 등차수열을 직접 세워야 함(RT d1 유지·Mₖ↑ ★3) (3) 한쪽을 포물선으로 바꾸면 길이가 이차식 → 등차 아님 → 골조 붕괴, 변형 금지."
```

```yaml
- id: RPM-ALG-0909
  page: 123
  vendor_label: "유형 UP 24 등차수열의 합의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    넓이 1 인 정사각형 A₁ 에 정사각형 4개씩 이어 붙여 A₂, A₃, … 를 만들 때(그림: 십자형 팔이 한 칸씩 늘어남) A₁~A₂₀ 의 넓이의 합.
  category: "도형 개수 세기 → 일반항 4n−3 → 등차수열의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 활용 — 도형(개수 증가)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A_n 의 정사각형 개수는 1, 5, 9, … 로 발문이 '4개씩 이어 붙인다'고 명시한 공차 4 의 등차수열. 넓이가 1 이므로 넓이 합 = Σ(4n−3) = 20·(1+77)/2 = 780. 규칙이 발문에 있어 PD 아님. A₁ = 1 을 첫째항으로 세는 것만 주의. 절차형 M_total 4 · 유형 UP 이지만 level 중 → ★2.
  tier: star_2
  mechanism_primary: "A_n 개수 = 1+4(n−1) (발문 명시) → 넓이 4n−3 → S_20 = 20(1+77)/2 = 780"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$780$'
  answer_source: "답지"
  figure: "crop:fig-0909.png"
  latex: latex-bank/rpm-alg/items/0909.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "붙이는 개수(4 → 3·6), 항 수(20 → 10·30), 단위 넓이(1 → 4)를 바꿀 수 있음. 제약: 그림은 십자형 4방향이므로 붙이는 개수를 바꾸면 그림도 바꿔야 함(그림 라벨 A₁·A₂·A₃ 고정 시 4 유지)."
    creative: "(1) '넓이의 합이 처음으로 500 을 넘는 n' 으로 바꾸면 이차부등식 단계 추가(★2~3) (2) 붙이는 규칙을 명시하지 않고 그림만 주어 A_n 을 추정하게 하면 I-PD d1 → ★3 (3) 둘레의 길이 합으로 바꾸면 둘레 = 4+8(n−1) 세기 필요 → ★3."
```

```yaml
- id: RPM-ALG-0910
  page: 123
  vendor_label: "유형 UP 24 등차수열의 합의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    n각형의 내각 크기가 공차 20° 인 등차수열을 이루고 가장 작은 내각이 54° 일 때 n.
  category: "등차수열의 합 = 내각의 합 180(n−2) → n 의 이차방정식 → 자연수 해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중학 기하의 내각의 합 180(n−2) 를 등차수열의 합과 등치시켜 n 의 방정식을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 활용 — 다각형 내각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내각의 합 n{108+20(n−1)}/2 = 180(n−2) → 5n²−68n+180 = 0 → n = 10 또는 18/5 → 자연수 10. 내각 합 공식을 등차 합과 결합하는 단계(XU d1)가 핵심이고 이차식 정리가 계산 부담(Mₖ 2), 자연수 조건으로 18/5 를 버리는 것이 함정 하나. 유형 UP 상중 ★3 · 통찰 1 · M_total 6 → ★3. n=10 이면 최대 내각 234° 로 오목다각형이지만 발문이 볼록을 요구하지 않아 답지대로 둠.
  tier: star_3
  mechanism_primary: "내각 등차(첫항 54°, 공차 20°) → 합 n{108+20(n−1)}/2 = 180(n−2) → 5n²−68n+180 = 0 → n = 10 (18/5 기각)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0910.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫항·공차(54°·20°)를 바꾸면 이차방정식의 자연수 해가 나오도록 판별식이 완전제곱이어야 함(반드시 검산). 제약: 볼록다각형으로 만들려면 최대각 = 첫항+(n−1)d < 180° 확인(원본은 234° 로 오목)."
    creative: "(1) 가장 큰 내각을 주고 n 을 묻기(같은 골조 ★3) (2) n 을 주고 공차를 묻기(일차식으로 내려감 ★2) (3) '볼록 n각형' 조건을 추가해 두 근 중 최대각 < 180° 로 거르게 하면 I-VF d1 추가 → ★4 후보."
```

### 유형 UP 25 등비수열의 합의 활용

```yaml
- id: RPM-ALG-0911
  page: 124
  vendor_label: "유형 UP 25 등비수열의 합의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    한 변 2 인 정사각형을 4등분해 왼쪽 위를 색칠하고, 색칠하지 않은 정사각형 3개를 각각 4등분해 왼쪽 위를 색칠하는 시행을 10회 반복했을 때 색칠한 부분의 넓이의 합.
  category: "k 회 시행에서 새로 칠하는 넓이 = 직전 미색칠 넓이의 1/4 → 등비수열(공비 3/4) → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "반복 색칠 규칙을 '미색칠 넓이가 매회 3/4 배' 로 읽어 새로 칠하는 넓이를 공비 3/4 의 등비수열로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합의 활용 — 도형(넓이 반복)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 시행 색칠 1, 미색칠 3. 각 시행은 미색칠 넓이의 1/4 을 칠하므로 k 회째 새로 칠하는 넓이 = 4·(3/4)^(k−1)·(1/4) = (3/4)^(k−1). 합 = {1−(3/4)^10}/(1−3/4) = 4{1−(3/4)^10}. 미색칠 넓이 4(3/4)^10 의 여집합으로도 즉시 나옴. 규칙을 등비수열로 옮기는 착안(RT d1) 하나에 항 수·지수 세기 함정. M_total 4 · 유형 UP 대표 ★3 유지.
  tier: star_3
  mechanism_primary: "k 회째 새 색칠 넓이 = 4·(3/4)^(k−1)·(1/4) → 첫항 1 공비 3/4 → S_10 = 4{1−(3/4)^10}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\left\{1-\left(\dfrac{3}{4}\right)^{10}\right\}$'
  answer_source: "답지"
  figure: "crop:fig-0911.png"
  latex: latex-bank/rpm-alg/items/0911.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이(2 → 4), 시행 횟수(10 → n 일반), 등분 수(4등분·1개 색칠 → 9등분·1개 색칠이면 공비 8/9)를 바꿀 수 있음. 제약: 그림은 4등분·왼쪽 위 색칠 구조이므로 등분 수를 바꾸면 그림도 바꿔야 함. 답을 닫힌 꼴(지수 포함)로 두는 것을 허용."
    creative: "(1) '색칠하지 않은 부분의 넓이' 를 묻기(여집합 4(3/4)^10 · ★2) (2) 색칠 부분의 둘레 합으로 바꾸면 길이 비 1/2·개수 3배 → 공비 3/2 (★3~4) (3) 'n 회 후 색칠 넓이가 처음으로 3.5 를 넘는 n' 은 (3/4)^n < 1/8 → 로그 결합(XU) ★4."
```

```yaml
- id: RPM-ALG-0912
  page: 124
  vendor_label: "유형 UP 25 등비수열의 합의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    첫째항 3, 공비 −2 인 등비수열 a_n. 점 A_n(n, a_n), B_n(n, 0) 에 대해 삼각형 A_nB_nB_{n+1} 의 넓이를 S_n 이라 할 때 S₁+S₃+S₅+S₇+S₉. 5지선다.
  category: "좌표 → 넓이 = |a_n|/2 → 홀수 번째 항 등비수열(공비 4) → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표 삼각형을 밑변 1·높이 |a_n| 로 읽어 넓이 수열 S_n = 3·2^(n−2) 로 옮김(공비 음수는 절댓값으로 소거)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합의 활용 — 좌표(넓이 부분합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑변 B_nB_{n+1} = 1, 높이 |a_n| 이므로 S_n = 3·2^(n−1)/2. 공비 −2 의 부호는 절댓값에서 사라짐(T-부호). 홀수 번째 항만 더하므로 첫항 3/2·공비 4 의 5항 합 (3/2)(4^5−1)/3 = 1023/2. 좌표를 넓이 수열로 옮기는 RT d1 + 부분수열 공비 정리 + 분수 계산. M_total 6 · 유형 UP 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "S_n = ½·1·|a_n| = 3·2^(n−2) → 홀수항 공비 4 → (3/2)(4^5−1)/(4−1) = 1023/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0912.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(3, −2)와 더하는 항 번호(홀수 1~9 → 짝수 2~10, 3의 배수)를 바꿀 수 있음. 제약: 밑변 길이 1 고정(B_n = (n, 0)), 공비 음수를 유지해야 T-부호가 남고, 합이 선택지 형태(정수 또는 /2)로 정리."
    creative: "(1) B_n 을 (2n, 0) 으로 두면 밑변 2 → 넓이 = |a_n| (★3 유지) (2) 삼각형 대신 사다리꼴 A_nB_nB_{n+1}A_{n+1} 넓이면 (|a_n|+|a_{n+1}|)/2 → 공비 유지 ★3 (3) 공비 −1/2 로 두고 '넓이의 합이 처음으로 어떤 값 이하' 부등식은 ★4 후보."
```

```yaml
- id: RPM-ALG-0913
  page: 124
  vendor_label: "유형 UP 25 등비수열의 합의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    사과 생산량을 매년 일정한 비율로 늘릴 때 2013~2017년 합 2000톤, 2018~2022년 합 2500톤이면 2023년 생산량은 2013년의 몇 배인지.
  category: "5년 블록 합의 비 = r⁵ → 10년 뒤 배율 r¹⁰"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "첫항·비율을 따로 구하지 않고 두 블록 합의 비 2500/2000 을 r⁵ 로 읽는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 블록 합 — 실생활(증가율)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2013년 생산량 a, 비율 r 이면 2018~2022 합 = r⁵·(2013~2017 합) 이므로 r⁵ = 5/4. 2023년은 a·r¹⁰ = a·(5/4)² → 25/16 배. a, r 각각은 끝까지 안 나오고 블록 합의 비를 r⁵ 로 읽는 동치 변환(EQV d1)이 전부. M_total 4 이지만 매개변수 구조(Mₐ 2)·유형 UP 상중 → ★3.
  tier: star_3
  mechanism_primary: "블록 합 비 2500/2000 = r^5 → 배율 r^10 = (5/4)^2 = 25/16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{25}{16}$배'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0913.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 블록 합(2000·2500)과 블록 길이(5년), 묻는 연도(2023 = 10년 뒤 → r¹⁰)를 바꿀 수 있음. 제약: 묻는 연도 차가 블록 길이의 배수여야 r⁵ 의 거듭제곱으로 닫히고, 비가 깔끔한 유리수(5/4 → 25/16)."
    creative: "(1) 세 번째 블록(2023~2027) 합을 묻기 → 2500·5/4 = 3125 (★2~3) (2) 블록 길이가 다르면(3년·5년) r 을 직접 구해야 해 골조 붕괴 → 금지 (3) 감소율(r<1)로 바꾸고 '몇 배로 줄었나' 는 같은 골조 ★3."
```

### 유형 UP 26 원리합계

```yaml
- id: RPM-ALG-0914
  page: 124
  vendor_label: "유형 UP 26 원리합계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    연이율 5%, 1년 복리로 매년 초 100만 원씩 10년 적립할 때 10년째 말 적립금의 원리합계. 1.05¹⁰ = 1.6 으로 계산.
  category: "매년 초 적립 → 회차별 1.05^k (k = 1..10) → 등비수열의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계 — 매년 초 적립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    매년 초 100만 원이 10년째 말까지 각각 10, 9, …, 1년 복리 → 100(1.05+1.05²+…+1.05¹⁰) = 100·1.05(1.05¹⁰−1)/0.05 = 100·1.05·12 = 1260. 원리합계 공식 한 번·근사값 대입 한 줄, 연초 적립이라 첫 인자 1.05 가 붙는 것만 주의. 통찰 0·Mₛ 1·M_total 4 → 유형 UP 대표 ★3 에서 −1 → ★2. [분류 이슈] 유형 UP 대표문제이나 절차형 ★2 — 기록만.
  tier: star_2
  mechanism_primary: "연초 적립 100만·10회 → 100(1.05+…+1.05^10) → 100·1.05(1.6−1)/0.05 = 1260"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1260$만 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0914.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연이율(5% → 4·6%), 적립금(100 → 50·200만), 기간(10 → 5·12년), 근사값(1.05¹⁰ = 1.6)을 바꿀 수 있음. 제약: 근사값을 발문에 함께 주고 (근사값−1)/이율 이 깔끔한 정수(0.6/0.05 = 12)가 되게 맞춤."
    creative: "(1) 매년 말 적립으로 바꾸면 첫 인자 1.05 가 사라짐(★2 · 초/말 구분 훈련) (2) 적립 종료 후 k 년 더 예치 → 1.05^k 곱 → ★3 (3) 적립 시작과 평가 시점을 어긋나게(3년째 초부터) 주면 지수 세기 Mₜ↑ ★3."
```

```yaml
- id: RPM-ALG-0915
  page: 124
  vendor_label: "유형 UP 26 원리합계"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    아영은 연 10% 복리로 2018년부터 매년 초 10만 원, 재민은 연 6% 복리로 2018년부터 매년 말 15만 원 적립. 2027년 말 두 사람 적립금 원리합계의 차. 1.1¹⁰ = 2.6, 1.06¹⁰ = 1.8.
  category: "연초 적립(기수불)과 연말 적립(기말불) 두 등비 합 → 차"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계 — 초/말 적립 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2018~2027 은 10회. 아영(연초) 10·1.1(1.1¹⁰−1)/0.1 = 10·1.1·16 = 176, 재민(연말) 15(1.06¹⁰−1)/0.06 = 15·0.8/0.06 = 200 → 차 24만 원. 초/말 구분과 회차 세기가 함정 둘(Mₜ 2)이고 등비 합 계산이 두 벌(Mₖ 2). 통찰 없이 노동량 7 · 유형 UP 상중·서술형 → ★3.
  tier: star_3
  mechanism_primary: "10회 세기 → 연초형 10·1.1(2.6−1)/0.1 = 176, 연말형 15(1.8−1)/0.06 = 200 → 차 24"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$24$만 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0915.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이율(10%·6%), 적립금(10·15만), 기간(2018~2027 → 8·12회), 근사값을 바꿀 수 있음. 제약: (근사−1)/이율 이 정수 또는 적립금과 곱해 정수(16 · 40/3×15)가 되게 근사값을 고르고 두 합의 차가 양의 정수."
    creative: "(1) 한 사람은 연초·다른 사람은 연말인 대비 구조가 핵심 — 둘 다 연초로 바꾸면 ★2 (2) '누가 얼마나 더 많은가' 비교 서술 요구(서술형 ★3 유지) (3) 한쪽 적립금을 미지수 a 로 두고 '두 원리합계가 같아지는 a' → 일차방정식 ★3."
```

```yaml
- id: RPM-ALG-0916
  page: 124
  vendor_label: "유형 UP 26 원리합계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    월이율 1%, 1개월 복리로 매월 초 a 원씩 적립해 1년 후 100만 원을 만들 때 a. 1.01¹² = 1.13, 십의 자리에서 반올림. 5지선다.
  category: "매월 초 적립 원리합계 = 100만 → a 역산 → 반올림"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계 — 적립금 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a·1.01(1.01¹²−1)/0.01 = 13.13a = 1,000,000 → a ≈ 76161 → 십의 자리에서 반올림 76200. 원리합계 공식을 거꾸로 푸는 절차이고 나눗셈·반올림 자리가 계산 부담, 월초 적립 첫 인자 1.01 이 함정. 통찰 0·M_total 6 → 유형 UP 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "월초형 원리합계 a·1.01(1.13−1)/0.01 = 13.13a = 10^6 → a ≈ 76161 → 반올림 76200"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0916.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "월이율(1% → 0.5·2%), 목표액(100만 → 200만), 기간(12 → 24개월), 근사값(1.13)을 바꿀 수 있음. 제약: 나눗셈 결과가 선택지 간격(200원)보다 명확히 갈리도록 반올림 자리와 근사값을 맞추고 반올림 자리를 발문에 명시."
    creative: "(1) 매월 말 적립으로 바꾸면 13a = 10^6 → 76900 (★2~3) (2) 대출 상환(현재가치 100만 을 매월 a 씩 12회)으로 뒤집으면 지수 방향이 바뀜 → ★3~4 (3) '몇 개월 적립해야 100만 을 넘는가' 는 로그 필요 → XU ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0917
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 등차수열 a_n, b_n 의 공차가 각각 −3, 2 일 때 등차수열 3a_n+2b_n 의 공차.
  category: "선형결합 수열의 공차 = 3·(−3)+2·2"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 공차 — 선형결합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3a_{n+1}+2b_{n+1}) − (3a_n+2b_n) = 3(−3)+2·2 = −5. 한 줄. 시험에 꼭 나오는 문제 ★2 출발이나 통찰 0·Mₛ 1·M_total 3 의 단일 절차 → ★1.
  tier: star_1
  mechanism_primary: "계차 = 3·d_a + 2·d_b = 3(−3)+2·2 = −5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0917.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차 쌍(−3, 2)과 계수(3, 2)를 바꿀 수 있음. 제약: 없음(모든 정수 조합 가능). 계수에 음수를 섞으면 부호 실수 훈련."
    creative: "(1) '수열 a_n·b_n 은 등차수열인가' 를 보기로 넣으면 곱은 등차가 아님을 판단(I-EQV d1 ★2) (2) 3a_n+2b_n 의 제k항을 주고 첫째항을 묻기 ★2 (3) 공차 대신 두 항씩 주고 결합 수열의 일반항 ★2."
```

```yaml
- id: RPM-ALG-0918
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등차수열에서 (a₃+a₈) : (a₄+a₅) = 1 : 3 일 때 a₃₁ 을 a₁ 로 나타낸 것. 5지선다.
  category: "항을 a₁·d 로 표현 → 비례식 → d = −a₁/5 → a₃₁ = −5a₁"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 항 관계 — a₁·d 표현"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3(a₃+a₈) = a₄+a₅ → 3(2a+9d) = 2a+7d → d = −a/5 → a₃₁ = a+30d = −5a₁. 비례식을 a·d 일차식으로 옮기고 답을 a₁ 의 배수로 표현. 통찰 없음·M_total 4 이나 답이 매개변수 a₁ 로 남는 구조(Mₐ 2) → 시험에 꼭 ★2 유지.
  tier: star_2
  mechanism_primary: "3(2a+9d) = 2a+7d → d = −a/5 → a_31 = a+30d = −5a_1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0918.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비례식의 항 번호(3·8, 4·5)와 비(1:3), 묻는 항(31)을 바꿀 수 있음. 제약: d 가 a₁ 의 유리수 배로 정리되고 묻는 항에서 계수가 정수(a+30d 에 d = −a/5 → −5a)가 되도록 번호를 맞춤."
    creative: "(1) a₁ 값을 함께 주면 구체 수치 문제 ★1 (2) 'a_k = 0 이 되는 k' 를 묻기 → 1+(k−1)(−1/5) = 0 → k = 6 (★2) (3) 조건을 합의 비 S₃ : S₈ 로 주면 합 공식 두 번 → ★2~3."
```

```yaml
- id: RPM-ALG-0919
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    공차 −3 인 등차수열에서 a₃a₇ = 64, a₈ > 0 일 때 a₂. 5지선다.
  category: "a₃ = a₇+12 → 이차방정식 → a₈ > 0 로 근 선택 → a₂"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 두 근 a₇ = 4, −16 중 a₈ = a₇−3 > 0 조건으로 −16 을 기각해야 답이 하나로 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 항 결정 — 곱 조건·부호 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a₇ = x 로 두면 a₃ = x+12, x(x+12) = 64 → x = 4 또는 −16. a₈ = x−3 > 0 이므로 x = 4 만 남고 a₂ = a₇+15 = 19. 두 근 중 하나를 부호 조건으로 기각하는 사후 검증(VF d1)이 없으면 답이 둘. M_total 5 · 평가원 3점 수준 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "a_7 = x, a_3 = x+12 → x(x+12) = 64 → x = 4 (−16 은 a_8 > 0 위배) → a_2 = x+15 = 19"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0919.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차(−3 → −2·4), 곱의 값(64 → x(x+4|d|) = k 의 판별식이 완전제곱이 되는 값), 부호 조건의 항(a₈ → a₁₀)을 바꿀 수 있음. 제약: 부호 조건이 정확히 한 근만 살리는지 검산."
    creative: "(1) 부호 조건을 'a₈ < 0' 으로 바꾸면 −16 이 살아 답이 바뀜(같은 골조 ★2) (2) 부호 조건을 빼고 'a₂ 의 모든 값의 합' 을 묻기 → 두 경우 모두 사용(I-MI d1 ★2~3) (3) 곱 대신 a₃²+a₇² 를 주면 대칭식 → ★3."
```

```yaml
- id: RPM-ALG-0920
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등차수열에서 a₅ = −35, a₁₀ = −20 일 때 처음으로 양수가 되는 항. 5지선다.
  category: "두 항 → d, a₁ → 일반항 > 0 부등식 → 최소 n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열 — 처음으로 양수가 되는 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5d = 15 → d = 3, a₁ = −47, a_n = 3n−50 > 0 → n > 50/3 → 제17항. 표준 절차 4단계·부등식 경계 처리 하나. 통찰 0·M_total 5 → 시험에 꼭 ★2 유지(중요 태그 +0).
  tier: star_2
  mechanism_primary: "a_10 − a_5 = 5d → d = 3, a_1 = −47 → 3n−50 > 0 → n ≥ 17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0920.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 값과 번호(a₅ = −35, a₁₀ = −20)를 바꿀 수 있음. 제약: d 가 정수(값 차이가 번호 차이의 배수), a_n = 0 인 항이 없도록 하거나 있으면 '양수' 의 등호 처리를 함정으로 살림."
    creative: "(1) a_n = 0 인 항이 생기게(a_n = 3n−51) 두면 '음이 아닌' vs '양수' 구분 → T-경계 강화 ★2 (2) 'S_n 이 처음으로 양수가 되는 n' 으로 바꾸면 n(3n−97)/2 > 0 → ★3 (3) 두 항 대신 a₃+a₇ = k, a₄a₆ = m 처럼 대칭 조건이면 ★3."
```

```yaml
- id: RPM-ALG-0921
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∠A = 90°, AC = 5 인 직각삼각형 ABC 에서 A 에서 빗변에 내린 수선의 발 H. BH, CH, AB 가 이 순서로 등차수열일 때 BC 의 길이.
  category: "등차중항 2CH = BH+AB + 직각삼각형 닮음(AB² = BH·BC, AC² = CH·BC) → 비 → BC"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "등차중항식에 직각삼각형의 닮음 관계 AB² = BH·BC, AC² = CH·BC 두 개를 골라 결합해야 미지수가 소거됨 — 단원 밖 도구가 빠지면 풀이가 끊김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등차중항의 활용 — 도형(직각삼각형 닮음)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BH = p, CH = q 로 두면 AB = 2q−p. 닮음에서 AB² = p(p+q) → (2q−p)² = p²+pq → 4q = 5p. AC² = q(p+q) = 25 → q·(9q/5) = 25 → q = 5√5/3, BC = 9q/5 = 3√5. 등차중항을 세우는 것은 표준이지만 직각삼각형 닮음 관계 두 개를 골라 미지수를 소거하는 단계는 단원 밖 도구 결합(XU d2). 제곱근 정리가 계산 부담. M_total 5 · depth 2 → 시험에 꼭 ★3.
  tier: star_3
  mechanism_primary: "BH = p, CH = q, AB = 2q−p → AB² = BH·BC 로 4q = 5p → AC² = CH·BC = 25 → q → BC = p+q = 3√5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{5}$'
  answer_source: "답지"
  figure: "crop:fig-0921.png"
  latex: latex-bank/rpm-alg/items/0921.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC 의 길이(5 → 다른 값·BC 가 √ 꼴로 정리)와 등차수열의 세 선분 순서(BH, CH, AB → CH, BH, AC)를 바꿀 수 있음. 제약: 그림 라벨(A 위·B 왼쪽·C 오른쪽·H 발·AC = 5) 고정. 세 선분 관계가 닮음식 두 개로 닫혀야 함."
    creative: "(1) 등비 조건 BH, AH, CH 는 항상 참(AH² = BH·CH)이라 조건으로 못 씀 — 대신 'AB, BC, AC 가 등차' 로 3-4-5 구조를 만들면 ★2 (2) 삼각비 θ 로 두는 풀이(3cos²θ+cosθ−2 = 0)를 다른 풀이로 열어 두면 I-SC 신호 → ★3~4 (3) 등차 대신 'BH, CH, AB 가 등비' 는 AB² = BH·BC 와 겹쳐 자명 → 금지."
```

```yaml
- id: RPM-ALG-0922
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    제10항이 15, 첫째항부터 제20항까지의 합이 270 인 등차수열의 첫째항부터 제30항까지의 합. 5지선다.
  category: "a₁₀ 과 S₂₀ 두 조건 연립 → a₁, d → S₃₀"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 — 두 조건 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+9d = 15, 2a+19d = 27 → 첫 식의 2배와 빼서 d = −3, a = 42 → S₃₀ = 15(84−87) = −45. 두 조건 연립 후 합 공식의 표준 절차 4단계. 통찰 0·M_total 4 이나 연립 구조(Mₛ 2)라 단일 절차가 아니므로 시험에 꼭 ★2 유지.
  tier: star_2
  mechanism_primary: "a+9d = 15, 2a+19d = 27 → d = −3, a = 42 → S_30 = 30(2·42+29·(−3))/2 = −45"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0922.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 항(a₁₀ = 15), 합(S₂₀ = 270), 묻는 범위(S₃₀)를 바꿀 수 있음. 제약: 연립해 a·d 정수, S₃₀ 가 선택지 간격(5)에 맞는 정수."
    creative: "(1) a₁₀ = 15 와 S₁₉ 처럼 홀수 항 합을 주면 S₁₉ = 19a₁₀ 로 즉시(등거리 항 I-SYM d1 ★2~3) (2) 'S_n 의 최댓값' 으로 바꾸면 0924 골조(★2~3) (3) 두 조건을 S₁₀, S₂₀ 합 둘로 주면 0941 블록 골조."
```

```yaml
- id: RPM-ALG-0923
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    −10 과 30 사이에 12개의 수를 넣어 등차수열 −10, a₁, …, a₁₂, 30 을 만들 때 a₁+a₂+…+a₁₂. 5지선다.
  category: "양 끝 포함 14항 합 − 양 끝 (또는 등거리 항 합 20 × 6쌍)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 넣은 등차수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −10, a₁, …, a₁₂, 30 은 14항 등차수열이므로 전체 합 14(−10+30)/2 = 140 에서 양 끝 20 을 빼 120. 또는 a₁+a₁₂ = a₂+a₁₁ = … = 20 이 6쌍. 항 개수 14 를 12 로 세는 것이 함정. 통찰 0·M_total 4 이나 항 개수 함정이 있어 시험에 꼭 ★2 유지.
  tier: star_2
  mechanism_primary: "14항 등차 S_14 = 14(−10+30)/2 = 140 → 양 끝 제외 140−20 = 120"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0923.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(−10, 30)와 넣는 개수(12)를 바꿀 수 있음. 제약: 답 = 개수×(양 끝 합)/2 가 정수가 되도록 개수×양 끝 합 짝수. 공차는 유리수여도 됨(공차를 묻지 않으므로)."
    creative: "(1) '넣은 수 중 홀수 번째 항의 합' 으로 바꾸면 부분수열 6항·공차 2d → 공차를 실제로 구해야 함 ★2~3 (2) 넣는 개수를 n 으로 두고 합을 주어 n 을 묻기 → 일차식 ★2 (3) 등비수열 버전(0935)으로 옮기면 공비 부호 분기 ★3."
```

```yaml
- id: RPM-ALG-0924
  page: 125
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등차수열의 합 S_n 에 대해 S₁₀ = 195, S₁₅ = 105 일 때 S_n 이 최대가 되는 n.
  category: "S₁₀·S₁₅ 연립 → a₁ = 42, d = −5 → 마지막 양수 항까지가 합 최대 → n = 9"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'합이 최대' 를 '항의 부호가 양에서 음으로 바뀌는 직전 번호' 로 옮기는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a+9d = 39, 2a+14d = 14 → d = −5, a = 42 → a_n = 47−5n > 0 ⟺ n ≤ 9 → 양수 항은 제9항까지이므로 S₉ 최대. '합의 최대' 를 '항의 부호 변화 지점' 으로 옮기는 동치 변환(EQV d1)이 핵심이고 나머지는 연립·부등식 절차. M_total 6 → 시험에 꼭 ★2(중요 태그 +0).
  tier: star_2
  mechanism_primary: "S_10, S_15 연립 → a = 42, d = −5 → a_n = 47−5n > 0 인 마지막 n = 9 → S_9 최대"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0924.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합(S₁₀ = 195, S₁₅ = 105)을 바꿀 수 있음. 제약: 연립해 a·d 정수, d < 0(최대) 또는 d > 0·a < 0(최소 문제로 전환). a_n = 0 인 항이 생기면 n 이 두 개(S₉ = S₁₀)이므로 피하거나 '모든 n' 으로 발문 조정."
    creative: "(1) a_n = 0 인 항이 생기게 두고 'S_n 이 최대가 되는 n 을 모두' 묻기 → 등호 함정 I-MI d1 ★3 (2) S_n 을 n 의 이차식으로 직접 주고 최대 n → 완전제곱 꼴·정수 n 경계 ★2 (3) |S_n| 의 최솟값은 부호 변화 근처 값 비교 ★3~4."
```

```yaml
- id: RPM-ALG-0925
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    60 보다 작은 자연수 중 3 또는 4 로 나누어떨어지는 수의 총합.
  category: "3 의 배수 합 + 4 의 배수 합 − 12 의 배수 합 (포함배제)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 활용 — 배수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3 의 배수 3~57 (19개) 합 570, 4 의 배수 4~56 (14개) 합 420, 12 의 배수 12~48 (4개) 합 120 → 570+420−120 = 870. 세 등차 합과 중복 제거의 표준 절차. '60 보다 작은'(60 제외)과 12 의 배수 중복이 함정 둘. 통찰 0·M_total 6 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "3 의 배수 합 570 + 4 의 배수 합 420 − 12 의 배수 합 120 = 870"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$870$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0925.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(60 → 100·200), 두 수(3·4 → 4·6 처럼 서로소가 아닌 쌍이면 최소공배수 함정 강화)를 바꿀 수 있음. 제약: '이하/미만' 을 명확히 하고 각 배수의 마지막 항을 상한에서 정확히 계산."
    creative: "(1) '3 으로 나누어떨어지지만 4 로는 안 떨어지는 수' 로 바꾸면 차집합 570−120 (★2) (2) '3 으로 나누면 1, 4 로 나누면 2 가 남는 수의 합' 은 공통 항 12k+10 찾기 → ★3 (3) 두 자리 자연수처럼 하한을 추가하면 항 개수 세기 Mₜ↑."
```

```yaml
- id: RPM-ALG-0926
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 4 인 등차수열에서 a₁₃ = 4(S₃−S₂) 일 때 S₁₆.
  category: "S₃−S₂ = a₃ 로 읽기 → 공차 d → S₁₆"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계 — 등차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S₃−S₂ = a₃ = 4+2d, a₁₃ = 4+12d → 4+12d = 4(4+2d) → d = 3 → S₁₆ = 8(8+45) = 424. 합의 차를 항으로 읽는 표기 함정 하나·일차방정식 하나. 통찰 0·M_total 4 이나 S 표기 함정이 있어 시험에 꼭 ★2 유지.
  tier: star_2
  mechanism_primary: "S_3−S_2 = a_3 → 4+12d = 4(4+2d) → d = 3 → S_16 = 16(8+15·3)/2 = 424"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$424$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0926.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(4), 배수(4), 항 번호(13·3)와 묻는 합(S₁₆)을 바꿀 수 있음. 제약: d 가 정수가 되도록 일차방정식 계수를 맞춤(4+12d = 16+8d 형태)."
    creative: "(1) S₃−S₂ 대신 S₅−S₃ = a₄+a₅ 처럼 두 항 합으로 두면 읽기 함정 강화 ★2 (2) 첫째항을 주지 않고 조건 둘(a₁₃ = 4a₃, S₄ = 40)로 연립 → ★2~3 (3) 합을 S_n = kn²+… 꼴로 주고 같은 관계를 묻기 → S_n → a_n 골조 ★2."
```

```yaml
- id: RPM-ALG-0927
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    S_n = −2n²+8n 일 때 |a₁|+|a₂|+…+|a₁₀| 의 값.
  category: "S_n → a_n = −4n+10 → 부호 변화(제3항부터 음수) → 절댓값 합 = 2S₂ − S₁₀"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값 합을 부호 구간별 합의 조합 (a₁+a₂) − (a₃+…+a₁₀) = 2S₂ − S₁₀ 으로 옮기는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계 — 절댓값 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a₁ = 6, a_n = S_n − S_{n−1} = −4n+10 (n = 1 도 성립). 제2항까지 양수, 제3항부터 음수이므로 |a₁|+…+|a₁₀| = (a₁+a₂) − (a₃+…+a₁₀) = 2S₂ − S₁₀ = 16+120 = 136. 항을 나열해 직접 더해도 됨(6, 2, 2, 6, …, 30). 절댓값 합을 부호 구간별로 바꾸는 동치 변환(EQV d1) 한 단계·부호 함정 하나. M_total 6 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "a_n = S_n − S_(n−1) = −4n+10 → n ≥ 3 에서 음수 → 합 = 2S_2 − S_10 = 136"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$136$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0927.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 계수(−2, 8)와 항 수(10)를 바꿀 수 있음. 제약: 상수항 0 유지(a₁ 이 일반항에 포함) 또는 상수항을 넣어 첫째항 예외를 함정으로(0928 골조). 부호가 바뀌는 항 번호가 범위 안에 있어야 함."
    creative: "(1) S_n = 2n²−8n 처럼 부호를 뒤집어 앞이 음수·뒤가 양수 ★2 (2) a_n = 0 인 항이 생기는 계수(S_n = 2n²−10n → a_n = 4n−12, a₃ = 0)로 두면 경계 처리 ★2 (3) |a_n| 의 합을 n 의 식으로 일반화(n ≥ 3)하면 Mₐ 3 → ★3~4."
```

```yaml
- id: RPM-ALG-0928
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    S_n = n²−2n+4 인 수열에 대해 보기 ㄱ. a₂ = 1, ㄴ. a₃−a₁ = a₄−a₂, ㄷ. a_n > 100 인 자연수 n 의 최솟값은 52 중 옳은 것. 5지선다.
  category: "S_n → a_n (n ≥ 2: 2n−3, a₁ = 3 예외) → 보기 세 개 판별"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계 — 첫째항 예외 보기 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a₁ = S₁ = 3, n ≥ 2 에서 a_n = 2n−3. ㄱ a₂ = 1 참. ㄴ a₃−a₁ = 0, a₄−a₂ = 4 → 거짓(상수항 4 때문에 a₁ 이 등차에서 벗어남). ㄷ 2n−3 > 100 → n ≥ 52 참. 첫째항 예외와 부등식 경계 두 함정을 확인하는 보기 판별 절차이고 항을 직접 계산하면 통찰 없이 끝남. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_1 = S_1 = 3, a_n = 2n−3 (n ≥ 2) → ㄱ 참 · ㄴ 첫째항 예외로 거짓 · ㄷ 2n−3 > 100 → n = 52 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0928.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 상수항(4 → 0 이 아닌 다른 값이면 첫째항 예외 유지, 0 이면 ㄴ 이 참으로 바뀜), 계수, ㄷ 의 임계값(100)을 바꿀 수 있음. 제약: 보기의 참·거짓 조합이 선택지 5개 중 하나로 유일."
    creative: "(1) ㄴ 을 '수열 a_n 은 등차수열이다' 로 바꾸면 첫째항 예외를 직접 진술(같은 골조 ★2) (2) ㄷ 을 'S_n > 100' 으로 바꾸면 이차부등식 ★2 (3) 상수항을 k 로 두고 '첫째항부터 등차가 되는 k' 를 묻기 → I-EQV d1 ★2~3."
```

```yaml
- id: RPM-ALG-0929
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    공비가 양수인 등비수열에서 a₃ = √3, a₅ = 3√3 일 때 a₁a₂…a₁₀ 의 값. 5지선다.
  category: "r² = 3 → r = √3, a₁ = 3^(−1/2) → 곱 = a₁¹⁰·r⁴⁵ → 3^(35/2)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 항의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a₅/a₃ = r² = 3 → r = √3 (양수), a₁ = √3/3 = 3^(−1/2). 곱 = a₁¹⁰·r^(0+1+…+9) = 3^(−5)·3^(45/2) = 3^(35/2). 또는 a₁a₁₀ = a₂a₉ = … = a₅a₆ = 27√3 이 5쌍. 지수 합 정리가 계산 부담(Mₖ 2)·공비 부호 하나. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "r² = a_5/a_3 = 3 → r = √3, a_1 = 3^(−1/2) → 곱 = a_1^10·r^45 = 3^(−5+45/2) = 3^(35/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0929.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항(a₃, a₅)의 값과 번호, 곱하는 항 수(10)를 바꿀 수 있음. 제약: 공비가 3 의 거듭제곱 꼴이 되도록 값을 맞추고 지수 합 0+1+…+(n−1) 을 포함한 최종 지수가 선택지 간격(1/2)으로 갈림."
    creative: "(1) 공비 양수 조건을 빼면 r = ±√3 두 경우 → 곱의 부호 판단(I-MI d1 ★2~3) (2) 곱 대신 log₃(a₁a₂…a₁₀) 을 묻기 → 로그 결합 ★2 (3) a₁·r 이 지저분하도록 값을 주어 a₁a₁₀ = a₅a₆ 대칭 활용을 강제하면 I-SYM d1 ★3."
```

```yaml
- id: RPM-ALG-0930
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열 3, 6, 12, … 에서 처음으로 300 보다 커지는 항은 제 몇 항인지.
  category: "3·2^(n−1) > 300 → 2^(n−1) > 100 → n = 8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열 — 처음으로 k 보다 커지는 항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3·2^(n−1) > 300 ⟺ 2^(n−1) > 100, 2⁶ = 64 < 100 < 128 = 2⁷ → n−1 = 7 → 제8항. 일반항 한 줄·거듭제곱 비교 한 줄(n−1 과 n 의 경계 하나). 통찰 0·Mₛ 1·M_total 4 의 단일 절차 → 시험에 꼭 ★2 에서 −1 → ★1(중요 태그 +0).
  tier: star_1
  mechanism_primary: "a_n = 3·2^(n−1) > 300 → 2^(n−1) > 100 → n−1 ≥ 7 → 제8항"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '제$8$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0930.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(3, 2)와 임계값(300)을 바꿀 수 있음. 제약: 임계값이 항의 값과 같아지지 않게(등호 함정을 쓰려면 '이상' 으로 발문 변경), 공비 정수."
    creative: "(1) 공비 1/2 로 두고 '처음으로 0.01 보다 작아지는 항' ★1~2 (2) 공비 −2 로 두고 '처음으로 300 보다 커지는 항' 은 홀수 항만 양수 → 부호 분기 ★2 (3) 'S_n 이 처음으로 300 을 넘는 n' 으로 바꾸면 3(2ⁿ−1) > 300 ★2."
```

```yaml
- id: RPM-ALG-0931
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    2 와 32 사이에 3개의 수를 넣어 등차수열 2, a₁, a₂, a₃, 32 를, 3개의 양수를 넣어 등비수열 2, b₁, b₂, b₃, 32 를 만들 때 (a₁+a₂+a₃) − (b₁+b₂+b₃).
  category: "등차 가운데 세 항 합 = 3×중항 17 · 등비 r⁴ = 16 → r = 2 → 4+8+16 → 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 넣은 등차·등비수열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등차: a₂ = (2+32)/2 = 17, a₁+a₂+a₃ = 3·17 = 51. 등비: r⁴ = 16, 양수 조건으로 r = 2 → 4+8+16 = 28. 차 23. 두 수열을 각각 세우는 표준 절차 4단계·공비 부호 하나. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "등차 중항 17 → 합 51 · 등비 r^4 = 16, r > 0 → 4, 8, 16 합 28 → 51−28 = 23"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0931.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(2, 32)와 넣는 개수(3)를 바꿀 수 있음. 제약: 등비 쪽 r^(개수+1) = 끝/처음 이 정수 거듭제곱(2 → 32 는 2⁴), 등차 쪽 합이 정수."
    creative: "(1) '양수' 조건을 빼면 r = ±2 → 등비 합이 두 값 → I-MI d1 ★2~3 (2) 넣는 개수를 n 으로 두고 (등차 합)−(등비 합) = k 를 주고 n 을 묻기는 계산 폭발 → 금지 (3) 등차·등비 항 합 대신 a₂ 와 b₂ 의 비만 묻기 ★1."
```

```yaml
- id: RPM-ALG-0932
  page: 126
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 자연수 a, b, n 에 대해 aⁿ, 2⁶·3⁸, bⁿ 이 이 순서로 등비수열을 이룰 때 ab 의 최솟값.
  category: "등비중항 (ab)ⁿ = 2¹²·3¹⁶ → ab 자연수 ⟺ n | gcd(12, 16) → n = 4 → 2³·3⁴ = 648"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'ab 최소' 를 'ab = 2^(12/n)·3^(16/n) 이 자연수가 되는 n 중 최대' 로 역추적 — n 이 12 와 16 의 공약수여야 한다는 성질 분석이 먼저"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비중항 — 정수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    등비중항에서 (ab)ⁿ = (2⁶3⁸)² = 2¹²3¹⁶ → ab = 2^(12/n)·3^(16/n). a, b 가 자연수이려면 n 이 12 와 16 의 공약수 → n ∈ {1, 2, 4} 이고 n 이 클수록 ab 가 작으므로 n = 4, ab = 8·81 = 648. 'ab 최소' 를 지수의 정수 조건으로 역추적하는 단계(BW d2)가 핵심이고 지수 정리·자연수 조건이 함정. M_total 7 · depth 2 → 시험에 꼭 ★3.
  tier: star_3
  mechanism_primary: "(ab)^n = (2^6·3^8)^2 → ab = 2^(12/n)·3^(16/n) → n | 4 → n = 4 최대 → ab = 2^3·3^4 = 648"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$648$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0932.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 항의 소인수 지수(6, 8 → 2배한 12, 16 의 gcd 가 n 의 상한)를 바꿀 수 있음. 제약: 2×지수들의 최대공약수가 답을 결정하므로 gcd 가 1 이면 n = 1 로 자명 → 피함. a, b 가 실제 존재하는지(지수 분배 가능) 검산."
    creative: "(1) '최솟값' 대신 'ab 가 될 수 있는 값의 개수' 로 바꾸면 약수 세기 → I-MI d1 ★3 (2) 세 항을 a, kⁿ, b 로 바꾸면 ab = k²ⁿ 로 자명 → 금지 (3) 가운데 항에 5 의 거듭제곱을 추가해 gcd 가 달라지게 하면 같은 골조 ★3."
```

```yaml
- id: RPM-ALG-0933
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 양수 x, y, z 가 이 순서로 등비수열이고 ㈎ x+y+z = 31/2, ㈏ 1/x+1/y+1/z = 31/8 일 때 xyz.
  category: "등비중항 xz = y² → 역수 합 = (x+y+z)/y² → y² = 4 → xyz = y³ = 8"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "xz = y² 를 써서 1/x+1/y+1/z = (xy+yz+zx)/xyz = (x+y+z)/y² 로 축약 — 두 조건이 y 하나의 식으로 닫힘"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 수가 등비수열 — 역수 합 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y² = xz 이면 1/x+1/y+1/z = (xy+yz+zx)/(xyz) = (x+y+z)·y/y³ = (x+y+z)/y². 따라서 31/8 = (31/2)/y² → y² = 4 → y = 2, xyz = y³ = 8. 역수 합 조건을 등비중항으로 y 하나의 식으로 축약하는 동치 변환(EQV d2)이 문제의 전부 — x, z 는 끝까지 구하지 않음. 분수 정리가 계산 부담. M_total 5 · depth 2 → 시험에 꼭 ★3.
  tier: star_3
  mechanism_primary: "xz = y² → 1/x+1/y+1/z = (x+y+z)/y² → y² = (31/2)/(31/8) = 4 → xyz = y³ = 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0933.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합(31/2, 31/8)을 바꿀 수 있음. 제약: 비 (합)/(역수 합) = y² 이 완전제곱(양수 y), 실제 x, z 가 양수 실수로 존재하도록 x+z = 합−y, xz = y² 의 판별식 ≥ 0 검산(원본: x+z = 27/2, xz = 4 → 존재)."
    creative: "(1) 'x, y, z 를 모두 구하시오' 로 바꾸면 이차방정식까지 → ★3 유지·Mₖ↑ (2) 등차 버전(x+y+z = 3y 와 x²+y²+z² 조건)으로 옮기면 대칭식 ★3 (3) 역수 수열 1/x, 1/y, 1/z 도 등비임을 보기로 묻는 ㄱㄴㄷ 형태 ★2."
```

```yaml
- id: RPM-ALG-0934
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열에서 a₁ = 1, S₆/S₃ = 2a₄−7 일 때 a₇.
  category: "S₆/S₃ = 1+r³ (r ≠ 1) → 1+r³ = 2r³−7 → r³ = 8 → a₇ = r⁶ = 64"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "S₆/S₃ 를 (r⁶−1)/(r³−1) = r³+1 로 인수분해해 합의 비를 공비의 식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합 조건 — S₆/S₃"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r = 1 이면 S₆/S₃ = 2 ≠ −5 로 불가. r ≠ 1 에서 S₆/S₃ = (r⁶−1)/(r³−1) = r³+1, a₄ = r³ 이므로 r³+1 = 2r³−7 → r³ = 8 → a₇ = r⁶ = 64. 합의 비를 r³+1 로 인수분해하는 동치 변환(EQV d1) 한 단계·r = 1 예외 하나. M_total 5 · 평가원 3점 수준 → ★2.
  tier: star_2
  mechanism_primary: "S_6/S_3 = (r^6−1)/(r^3−1) = r^3+1 → r^3+1 = 2r^3−7 → r^3 = 8 → a_7 = r^6 = 64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0934.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S 의 번호 쌍(6, 3 → 8, 4: 비 = r⁴+1), 우변의 항(2a₄−7 → a₅ 포함 식)을 바꿀 수 있음. 제약: 방정식이 r³(또는 r⁴)에 대해 일차로 닫히고 r 이 실수(홀수 거듭제곱이면 부호 자유, 짝수면 양수 조건 명시)."
    creative: "(1) S₉/S₃ = r⁶+r³+1 로 바꾸면 r³ 의 이차방정식 → 근 선택 I-VF d1 ★3 (2) a₁ 을 주지 않고 S₆/S₃ 와 a₄ 값을 주면 a₁ 미지수 추가 ★2~3 (3) r = 1 인 경우가 실제로 성립하도록 우변을 바꾸면 I-MI d1 ★3."
```

```yaml
- id: RPM-ALG-0935
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    2 와 128 사이에 n 개의 수를 넣은 등비수열 2, x₁, …, x_n, 128 의 모든 항의 합이 86 일 때 x₄. 5지선다.
  category: "끝항 2·r^(n+1) = 128 을 합 공식에 대입 → r 을 먼저 결정 → n → x₄"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n, r 두 미지수 중 끝항 조건 r^(n+1) = 64 로 합 공식의 r^(n+2) 를 128r 로 바꿔 지수를 소거하고 r 부터 잡는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 수 사이에 n 개 수 넣은 등비수열 — 합 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합 2(r^(n+2)−1)/(r−1) 에서 r^(n+2) = 128r 로 바꾸면 2(128r−1)/(r−1) = 86 → r = −2. 그러면 (−2)^(n+1) = 64 → n+1 = 6, n = 5, x₄ = 2·(−2)⁴ = 32. 지수를 소거해 r 부터 잡는 동치 변환(EQV d2)이 핵심이고 음수 공비가 함정. M_total 7 · depth 2 → ★3(중요 태그 +0).
  tier: star_3
  mechanism_primary: "2·r^(n+1) = 128 → 합 2(128r−1)/(r−1) = 86 → r = −2 → (−2)^(n+1) = 64 → n = 5 → x_4 = 2(−2)^4 = 32"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0935.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(2, 128)와 합(86)을 바꿀 수 있음. 제약: 합 조건에서 r 이 정수로 떨어지고 끝/처음 = r^(n+1) 이 정수 n 을 주도록 설계. 음수 공비면 n+1 이 짝수여야 끝항 양수."
    creative: "(1) 공비를 양수로 두면 합 조건이 n 을 바로 주는 단순형 ★2 (2) 합 대신 '항의 개수 n 과 x₄' 둘 다 묻기(같은 골조 ★3) (3) 등차 버전(0923)과 결합해 '등차로 넣은 합 − 등비로 넣은 합' ★3."
```

```yaml
- id: RPM-ALG-0936
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    M = 2⁵, N = 3⁶ 일 때 MN 의 모든 양의 약수의 합을 M, N 으로 나타낸 것. 5지선다.
  category: "약수의 합 = (1+2+…+2⁵)(1+3+…+3⁶) → (2⁶−1)(3⁷−1)/2 → (2M−1)(3N−1)/2"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2⁵3⁶ 의 약수 전체의 합을 두 등비수열 합의 곱 (Σ2^i)(Σ3^j) 으로 보는 정수론 → 수열 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합의 활용 — 약수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2⁵3⁶ 의 약수는 2^i3^j (0 ≤ i ≤ 5, 0 ≤ j ≤ 6) 이므로 합 = (Σ2^i)(Σ3^j) = (2⁶−1)·(3⁷−1)/2. 2⁶ = 2M, 3⁷ = 3N 으로 바꿔 (2M−1)(3N−1)/2. 약수의 합을 두 등비 합의 곱으로 보는 표현 전환(RT d1)에 M, N 기호 재표현(Mₐ 2·T-표기)과 항 수 6·7 경계가 얹힘. M_total 7 · 통찰 1 → 시험에 꼭 ★3. [분류 이슈] 약수의 합 공식을 표준으로 보면 ★2 — 기록만.
  tier: star_3
  mechanism_primary: "약수 합 = (1+…+2^5)(1+…+3^6) = (2^6−1)(3^7−1)/2 → 2^6 = 2M, 3^7 = 3N → (2M−1)(3N−1)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0936.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(5, 6)와 밑(2, 3 → 2, 5)을 바꿀 수 있음. 제약: 밑이 서로 다른 소수, 선택지가 M·N 의 일차식 곱으로 정리되게 지수+1 을 M·N 의 배수로 표현(2^(k+1) = 2M)."
    creative: "(1) M, N 없이 약수의 합 값 자체를 묻기 → 계산형 ★2 (2) '약수의 개수' 를 함께 묻기 (5+1)(6+1) ★2 (3) 세 소수(2^a3^b5^c)로 확장하거나 '약수의 역수의 합' (= 약수 합/MN) 으로 바꾸면 ★3~4."
```

```yaml
- id: RPM-ALG-0937
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 1, 공비 1/2 인 등비수열과 그 합 S_n 에 대해 보기 ㄱ. {a_{2n}} 은 공비 1/4 등비수열, ㄴ. {2−S_n} 은 공비 1/2 등비수열, ㄷ. {a_{n+1}−2a_n} 은 공비 1/2 등비수열 중 옳은 것. 5지선다.
  category: "a_n = (1/2)^(n−1), S_n = 2−(1/2)^(n−1) → 세 파생 수열의 공비 확인"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 성질 — 보기 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_{2n} = (1/2)^(2n−1) 공비 1/4 (참). S_n = 2−(1/2)^(n−1) 이므로 2−S_n = (1/2)^(n−1) 공비 1/2 (참). a_{n+1}−2a_n = (1/2)^n − (1/2)^(n−2) = −3(1/2)^n 공비 1/2 (참). 세 파생 수열을 각각 지수로 정리하는 절차이고 지수 정리 세 벌이 계산 부담. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "a_n = (1/2)^(n−1), S_n = 2−(1/2)^(n−1) → ㄱ 공비 1/4 · ㄴ 2−S_n = (1/2)^(n−1) · ㄷ −3(1/2)^n → 모두 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0937.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(1, 1/2 → 3, 1/3)와 ㄴ 의 상수(2 = a₁/(1−r))를 바꿀 수 있음. 제약: ㄴ 의 상수는 반드시 a₁/(1−r) 이어야 등비가 됨. ㄷ 의 계수(−2)를 바꿔도 공비는 r 로 유지되나 계수 = 1/2 이면 항이 0 이 되어 금지."
    creative: "(1) ㄴ 의 상수를 3 으로 바꿔 거짓 보기를 만들면 판별 훈련 ★2 (2) 수열 a_n·a_{n+1}(공비 r²)·a_n+a_{n+1}(공비 r)을 보기로 ★2 (3) '수열 S_n 은 등비수열이다' 같은 거짓 보기(S_n = 2−(1/2)^(n−1) 은 등비 아님)를 섞으면 ★2~3."
```

```yaml
- id: RPM-ALG-0938
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    모든 항이 양수인 등비수열이 log₂a₁+log₂a₂+…+log₂a_n = (n²+3n)/2 을 만족할 때 첫째항부터 제10항까지의 합. 5지선다.
  category: "로그 합 = 수열 {log₂a_n} 의 합 T_n → 항 추출 log₂a_n = n+1 → a_n = 2^(n+1) → S₁₀"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "로그 합 조건을 '합이 주어진 수열 {log₂a_n}' 으로 읽어 T_n − T_(n−1) 로 항을 추출한 뒤 지수로 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계 — 로그 합 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변을 수열 log₂a_n 의 합 T_n 으로 보면 log₂a_n = T_n − T_(n−1) = n+1 (n ≥ 2), T₁ = 2 로 n = 1 도 성립 → a_n = 2^(n+1). 합 = 4(2¹⁰−1) = 4092. 로그 합 조건을 '합이 주어진 수열' 로 옮기는 표현 전환(RT d1)이 핵심이고 첫째항 확인·로그 표기 두 함정. M_total 7 · 통찰 1 → 시험에 꼭 ★3. [분류 이슈] 로그 층을 표기로만 보면 ★2 — 기록만.
  tier: star_3
  mechanism_primary: "log₂a_n 의 합 T_n = (n²+3n)/2 → log₂a_n = T_n − T_(n−1) = n+1 → a_n = 2^(n+1) → S_10 = 4(2^10−1) = 4092"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0938.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "T_n 의 이차식 계수((n²+3n)/2 → (n²+n)/2, n²+n)와 로그 밑(2 → 3), 묻는 합의 항 수(10)를 바꿀 수 있음. 제약: T_n − T_(n−1) 이 n 의 일차식이어야 a_n 이 등비(밑^일차식)가 되고, 상수항 0 이면 첫째항 예외 없음(상수항을 두면 첫째항 예외 함정 추가)."
    creative: "(1) 로그 합 대신 곱 a₁a₂…a_n = 2^((n²+3n)/2) 로 주면 같은 골조에서 로그 층만 제거 ★2~3 (2) 상수항 있는 T_n 으로 첫째항 예외를 만들면 검증 단계 추가 ★3 (3) 밑이 다른 로그(log₂, log₄)를 섞으면 로그 성질 결합 → XU ★4."
```

```yaml
- id: RPM-ALG-0939
  page: 127
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    5년 후 3300만 원을 만들기 위해 연 10% 복리·5년 만기 적금에 2024년 5월 1일 가입하고 매년 5월 1일마다 일정액을 저축할 때 매년 저축액. 1.1⁵ = 1.6. 5지선다.
  category: "가입일 포함 5회 적립 원리합계 = 3300 → x·1.1(1.1⁵−1)/0.1 = 6.6x → x = 500"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계 — 적립금 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2024·2025·2026·2027·2028년 5월 1일 5회 납입, 만기 2029년 5월 1일 → 각각 5, 4, 3, 2, 1년 복리 → x(1.1+…+1.1⁵) = x·1.1(1.6−1)/0.1 = 6.6x = 3300 → x = 500. 회차·지수 배치가 함정이고 계산은 한 줄. 통찰 0·M_total 5 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "5회 납입(가입일 포함) → x(1.1+1.1²+…+1.1^5) = x·1.1·0.6/0.1 = 6.6x = 3300 → x = 500"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0939.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표액(3300), 이율(10%), 기간(5년), 근사값(1.6)을 바꿀 수 있음. 제약: 1.1(근사−1)/0.1 이 깔끔한 수(6.6)로 나오고 목표액이 그 배수."
    creative: "(1) '가입 1년 후부터 매년' 으로 바꾸면 연말형 6x = 3300 → 550 (★2 · 초/말 대비 훈련) (2) '5년 후 원리합계가 3000 을 넘는 최소 저축액(10만 원 단위)' 로 바꾸면 부등식 ★2~3 (3) 중간에 이율이 바뀌는 2단계 복리 → Mₛ↑ ★3."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0940
  page: 128
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    곡선 y = x(x+4)(x−1) 과 직선 y = k 가 서로 다른 세 점에서 만나고 교점의 x 좌표 α<β<γ 가 이 순서로 등차수열일 때 상수 k.
  category: "교점 ⟺ 삼차방정식 근 → 등차 조건 + 세 근의 합 = −3 → β = −1 → k = f(−1) = 6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "등차 조건 α+γ = 2β 를 공통수학1 삼차방정식의 근과 계수 관계 α+β+γ = −3 과 결합해 가운데 근 β = −1 을 즉시 결정 — 방정식을 풀지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등차중항의 활용 — 삼차방정식 세 근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x³+3x²−4x−k = 0 의 세 근이 α, β, γ 이고 등차이므로 α+γ = 2β, 근과 계수에서 α+β+γ = −3 → β = −1. β 가 근이므로 k = f(−1) = (−1)·3·(−2) = 6. 검산: x³+3x²−4x−6 = (x+1)(x²+2x−6) 으로 서로 다른 세 실근. 등차 조건과 삼차 근과 계수 관계를 결합해 가운데 근을 바로 잡는 단계(XU d2)가 전부이고 세 실근 확인이 함정. 서술형 ★3 · 통찰 1 depth 2 → ★3.
  tier: star_3
  mechanism_primary: "f(x) = k 의 세 근 등차 → α+β+γ = −3 = 3β → β = −1 → k = f(−1) = 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0940.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 인수((x+4)(x−1) → 다른 정수 근 두 개)와 x 항 계수를 바꿀 수 있음. 제약: 세 근의 합 = −(x² 계수) 가 3 의 배수여야 β 가 정수, k = f(β) 에서 나머지 두 근이 서로 다른 실근(판별식 > 0)인지 검산."
    creative: "(1) '세 근이 등비수열' 로 바꾸면 β³ = −(상수항) → 근과 계수 곱 조건 ★3 (2) 직선을 y = mx+k 로 두면 계수 관계에 m 이 섞여 ★4 (3) 사차함수와 직선 교점 네 개가 등차 → 대칭축 활용 I-SYM ★4."
```

```yaml
- id: RPM-ALG-0941
  page: 128
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    등차수열에서 첫째항부터 제10항까지의 합이 145, 제11항부터 제20항까지의 합이 445 일 때 첫째항부터 제30항까지의 합.
  category: "S₁₀ = 145, S₂₀−S₁₀ = 445 연립 → a = 1, d = 3 → S₃₀ (또는 블록 합 등차 145, 445, 745)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 블록 합 — S₁₀·S₂₀−S₁₀ → S₃₀"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a+9d = 29, 2a+29d = 89 → d = 3, a = 1 → S₃₀ = 15(2+87) = 1335. 10항씩 블록 합 145, 445, 745 가 공차 300 의 등차라는 성질을 쓰면 145+445+745 로 즉시. 연립만으로도 4단계 안에 끝나 통찰로 세지 않음. '제11항부터 제20항까지' 를 S₂₀−S₁₀ 으로 읽는 것이 함정 하나. 통찰 0·M_total 5 → 서술형 ★3 출발에서 −1 → ★2. [분류 이슈] 서술형 구역이나 절차형 ★2 — 기록만.
  tier: star_2
  mechanism_primary: "2a+9d = 29, 2a+29d = 89 → a = 1, d = 3 → S_30 = 30(2+29·3)/2 = 1335 (블록 합 145+445+745)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1335$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0941.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 블록 합(145, 445)과 블록 길이(10), 묻는 범위(30)를 바꿀 수 있음. 제약: 연립해 a·d 정수(두 합의 차 300 = 블록 길이²×d), 묻는 범위가 블록 길이의 배수면 블록 성질 지름길 유지."
    creative: "(1) 묻는 범위를 제21항~제35항 합처럼 블록과 어긋나게 하면 연립이 필수 ★2~3 (2) 등비 버전(0942·0946)으로 옮기면 블록 비 r¹⁰ → ★3 (3) '10항씩의 블록 합이 등차수열임을 증명' 서술형으로 바꾸면 Mₐ 3 ★3."
```

```yaml
- id: RPM-ALG-0942
  page: 128
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    등비수열에서 a₁+a₂+a₃ = 3, a₄+a₅+a₆ = 81 일 때 a₁+a₃+a₅ 의 값.
  category: "블록 합의 비 r³ = 27 → r = 3 → a₁ = 3/13 → 홀수 항 합 a₁(1+r²+r⁴) = 21"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a₄+a₅+a₆ = r³(a₁+a₂+a₃) 으로 두 블록 합을 나눠 공비를 먼저 잡는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 블록 합 — 공비 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a₄+a₅+a₆ = r³(a₁+a₂+a₃) → r³ = 27 → r = 3, a₁(1+3+9) = 3 → a₁ = 3/13. a₁+a₃+a₅ = a₁(1+9+81) = 91·3/13 = 21. 두 블록 합의 비로 공비를 먼저 잡는 동치 변환(EQV d1) 뒤 분수 계산(Mₖ 2). 서술형 ★3 출발 · 통찰 1 · M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "(a_4+a_5+a_6)/(a_1+a_2+a_3) = r^3 = 27 → r = 3 → a_1 = 3/13 → a_1(1+r²+r⁴) = 21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0942.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 블록 합(3, 81 → 비가 정수의 세제곱)과 묻는 부분합(홀수 항 1·3·5)을 바꿀 수 있음. 제약: 비 = r³ 이 실수 세제곱(부호 자유), 답이 정수가 되도록 (1+r²+r⁴)/(1+r+r²) 와 첫 블록 합의 곱 검산(원본 91/13 = 7)."
    creative: "(1) 짝수 항 합 a₂+a₄+a₆ = r·(홀수 항 합) = 63 을 묻기 ★2~3 (2) 블록 길이를 다르게(a₁+a₂ = 3, a₃+a₄+a₅ = 81) 하면 r 의 삼차방정식 → 금지 (3) 0946 처럼 블록 길이를 n 으로 일반화하면 등비중항 골조 ★3~4."
```

```yaml
- id: RPM-ALG-0943
  page: 128
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    네 수 a, x, y, b 가 이 순서로 등차수열, a, p, q, b 가 이 순서로 등비수열이고 x+y = 5, pq = 6 (a<b) 일 때 a²−b².
  category: "등거리 항: x+y = a+b, pq = ab → a, b = 2, 3 (a<b) → (a+b)(a−b) = −5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차중항·등비중항 — 등거리 항 대칭식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등차에서 x+y = a+b = 5, 등비에서 pq = ab = 6 → a, b 는 t²−5t+6 = 0 의 근 2, 3 이고 a<b 이므로 a = 2, b = 3 → 4−9 = −5. 또는 (a−b)² = (a+b)²−4ab = 1 로 부호만 정함. 등거리 항의 합·곱 성질을 읽는 것이 전부이고 이후는 표준 대칭식·부호 함정 하나. 통찰 0·M_total 5 → 서술형 ★3 출발에서 −1 → ★2. [분류 이슈] 등거리 항 성질을 I-SYM d1 로 보면 ★3 — 기록만.
  tier: star_2
  mechanism_primary: "x+y = a+b = 5, pq = ab = 6 → a, b = 2, 3 (a<b) → a²−b² = −5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0943.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+y, pq 의 값(5, 6 → 합·곱이 정수 근을 주는 쌍)과 부호 조건(a<b)을 바꿀 수 있음. 제약: t²−(합)t+곱 = 0 이 실근(판별식 ≥ 0), a·b 부호가 같아야 pq = ab > 0 과 등비수열의 실수 존재가 일관."
    creative: "(1) a²+b² 나 1/a+1/b 를 묻기(부호 조건 불필요 ★2) (2) 네 수 대신 다섯 수(a, x, y, z, b)로 늘려 x+y+z = 3·중항 ★2 (3) 조건을 x²+y² 와 p²+q² 로 주면 대칭식 두 단계 → I-EQV d1 ★3."
```

### 실력 Up

```yaml
- id: RPM-ALG-0944
  page: 128
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    공차가 자연수인 등차수열 a_n 과 공비가 자연수인 등비수열 b_n 이 a₆ = b₆ = 9, ㈎ a₇ = b₇, ㈏ 94 < a₁₁ < 109 를 만족할 때 a₇+b₈. 5지선다.
  category: "a₇ = b₇ → d = 9(r−1) → 94 < 9+5d < 109 → d ∈ {18, 19} → 9 의 배수 18 → r = 3 → 27+81"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a₆ = b₆ = 9 와 a₇ = b₇ 두 조건을 d = 9(r−1) 한 관계식으로 묶어 두 수열의 매개변수를 하나로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차·등비 결합 — 정수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    9+d = 9r → d = 9(r−1). ㈏ 에서 94 < 9+5d < 109 → 17 < d < 20 → d = 18 또는 19 → 9 의 배수 18 → r = 3. a₇ = 27, b₈ = 81 → 108. 두 수열의 공통 항 조건을 d 와 r 의 한 관계식으로 묶는 단계(CON d1)가 핵심이고, 범위에서 d 를 좁힌 뒤 배수 조건으로 거르는 것은 짧음(r 로 바로 풀면 130 < 45r < 145 로 즉시 r = 3). 자연수·부등식 함정 둘. M_total 7 · 통찰 1 d1 · 교육청 3~4점 수준 → 실력 Up ★4 출발에서 ★3. [분류 이슈] 실력 Up 구역이나 ★3 — 기록만.
  tier: star_3
  mechanism_primary: "a_7 = b_7 → 9+d = 9r → d = 9(r−1) → 94 < 9+5d < 109 → d = 18, r = 3 → a_7+b_8 = 27+81 = 108"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0944.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 항 값(9)과 번호(6·7), 범위(94~109)를 바꿀 수 있음. 제약: a₇ = b₇ 에서 d = (공통값)(r−1) 배수 구조 유지, 범위가 d 후보를 2개 정도로 좁히고 그중 정확히 하나가 공통값의 배수."
    creative: "(1) 범위를 넓혀 d 후보가 셋 이상(80 < a₁₁ < 130 → d = 15~24 → 18 만)이면 배수로 거르는 I-VF d1 ★3~4 (2) 공비가 정수(음수 허용)면 r = −1 등 분기 I-MI ★4 (3) a₇ = b₇ 대신 a₈ = b₈ 로 두면 2d = 9(r²−1) → 이차 → ★4."
```

```yaml
- id: RPM-ALG-0945
  page: 128
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    반지름 2√3 인 원에 내접하는 두 정삼각형이 겹친 별 모양 S₁, 그 정육각형에 내접하는 원에서 같은 방식으로 S₂, … , S₁₀ 을 만들 때 S₁₀ 의 넓이. 5지선다.
  category: "별 = 작은 정삼각형 12개 → S₁ = 12√3 · 정육각형 내접원 반지름 = R/2 → 넓이 공비 1/4 → S₁₀ = 12√3/4⁹"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "별 모양을 합동인 작은 정삼각형 12개(가운데 육각형 6 + 뾰족 6)로 대칭 분할해 S₁ = 12√3 을 한 번에 얻음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정육각형(한 변 2)의 내접원 반지름 √3 = R/2 를 찾아 반복 구조를 길이비 1/2·넓이비 1/4 의 등비수열로 옮김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "도형 반복 — 등비수열의 일반항(넓이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    R = 2√3 이면 내접 정삼각형 한 변 R√3 = 6. 별은 한 변 2 인 정삼각형 12개(가운데 육각형 6 + 뾰족 6)라 S₁ = 12√3. 가운데 정육각형(한 변 2)의 내접원 반지름은 √3 = R/2 이므로 길이비 1/2, 넓이비 1/4. S₁₀ = 12√3·(1/4)⁹ = 3√3/2¹⁶. 별 넓이를 대칭 분할로 잡는 SYM d1 과 반복 구조에서 닮음비를 찾아 등비수열로 옮기는 RT d2 두 단계, 길이비를 넓이비로 제곱하는 함정. 실력 Up ★4 · 통찰 2 → ★4.
  tier: star_4
  mechanism_primary: "S_1 = 12·(한 변 2 정삼각형 √3) = 12√3 → 육각형 내접원 r = R/2 → 넓이비 1/4 → S_10 = 12√3·(1/4)^9 = 3√3/2^16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0945.png"
  latex: latex-bank/rpm-alg/items/0945.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 원의 반지름(2√3 → 4√3, 6)과 묻는 번호(10 → n 일반항)를 바꿀 수 있음. 제약: 반지름을 √3 의 배수로 두어야 정삼각형 한 변·넓이가 정리되고 선택지는 √3/2^k 꼴로 통일. 그림(S₁·S₂·…) 라벨 고정."
    creative: "(1) 'S₁+S₂+…+S₁₀' 합으로 바꾸면 등비 합 추가 ★4 유지 (2) 정삼각형 대신 정사각형 두 개(8각 별)로 바꾸면 비율 계산이 달라짐 → 새 문항 ★4 (3) 'S_n < 1/1000 이 되는 최소 n' 은 로그 결합 XU ★5 후보."
```

```yaml
- id: RPM-ALG-0946
  page: 128
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    모든 항이 양수인 등비수열에서 a₁+…+a_n = 30, a_{2n+1}+…+a_{3n} = 270 일 때 a_{n+1}+…+a_{2n} 의 값.
  category: "n 항씩 블록 합 B₁, B₂, B₃ 는 공비 rⁿ 의 등비 → B₂² = B₁B₃ → B₂ = √(30·270) = 90"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n 이 미지수라 직접 계산이 막히므로 n 항씩의 블록 합이 공비 rⁿ 의 등비수열임을 보고 등비중항 B₂² = B₁B₃ 로 조건을 닫음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비수열의 블록 합 — 등비중항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B₁ = a₁+…+a_n = 30, B₂ = a_{n+1}+…+a_{2n} = rⁿB₁, B₃ = a_{2n+1}+…+a_{3n} = r²ⁿB₁ = 270 → rⁿ = 3 (양수) → B₂ = 90. 또는 B₂² = B₁B₃. 블록 합이 공비 rⁿ 의 등비수열임을 보는 동치 변환(EQV d2)이 유일한 길이고 양수 조건이 부호 함정. M_total 5 · 통찰 1 depth 2 → 실력 Up ★4 출발에서 ★3. [분류 이슈] 실력 Up 구역이나 단일 통찰·저노동 ★3 — 기록만.
  tier: star_3
  mechanism_primary: "블록 합 B_1 = 30, B_3 = r^(2n)·B_1 = 270 → r^n = 3 → B_2 = r^n·B_1 = 90"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0946.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 블록 합(30, 270)을 바꿀 수 있음. 제약: B₃/B₁ = r^(2n) 이 완전제곱(양수 rⁿ), 답 = √(B₁B₃) 가 정수. 양수 조건이 없으면 rⁿ = ±3 두 경우(n 홀짝) → 발문에 부호 조건 명시."
    creative: "(1) 양수 조건을 빼고 'B₂ 의 값을 모두' 묻기 → rⁿ = −3 가능(n 홀수) I-MI d1 ★4 (2) 블록 길이를 n, 2n 처럼 다르게 두면 골조 붕괴 → 금지 (3) 등차 버전(0941)과 대비하는 세트 구성 ★3."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 2 · ★2 19 · ★3 17 · ★4 1 · ★5 0
- 통찰형 20 · 절차형 19 · premium 0
- 통찰 유형(라벨 21개): I-EQV 8(0913 · 0924 · 0927 · 0933 · 0934 · 0935 · 0942 · 0946) · I-RT 6(0908 · 0911 · 0912 · 0936 · 0938 · 0945) · I-XU 3(0910 · 0921 · 0940) · I-BW 1(0932) · I-VF 1(0919) · I-CON 1(0944) · I-SYM 1(0945) — 통찰 2개 문항은 0945 뿐
- type_hint 상위: 「등차중항·등비중항 활용」 6(0921 · 0931 · 0932 · 0933 · 0940 · 0943) · 「S_n 과 a_n 의 관계」 4(0926 · 0927 · 0928 · 0938) · 「원리합계」 4(0914 · 0915 · 0916 · 0939) · 「블록 합(등차·등비)」 4(0913 · 0941 · 0942 · 0946) · 「등차수열의 합의 활용(도형·다각형·배수)」 4(0908 · 0909 · 0910 · 0925)
- target_cohort: 하위권 2 · 중하위권 15 · 중위권 16 · 중상위권 6(0910 · 0919 · 0921 · 0940 · 0944 · 0945) · 상위권 0
- 그림: 5문(`crop:fig-0908.png` · `crop:fig-0909.png` · `crop:fig-0911.png` · `crop:fig-0921.png` · `crop:fig-0945.png`)
- 구역별 ★: 유형 UP 24~26 (9문) ★2 2 · ★3 7 / 시험에 꼭 나오는 문제 (23문) ★1 2 · ★2 15 · ★3 6 / 서술형 주관식 (4문) ★2 2 · ★3 2 / 실력 Up (3문) ★3 2 · ★4 1
- 답 재계산: 39문 모두 전사 answer 와 일치(전사 답 확인 필요 0건)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0908 | 유형 UP 대표문제이나 통찰 RT d1 하나·M_total 4 로 ★2 후보. 라벨은 ★3 유지 | ★3 / ★2 |
| RPM-ALG-0910 | 판정 아닌 출제 메모: n = 10 이면 최대 내각 234° 로 오목다각형 — 답지는 볼록 조건 없이 10. 변형 시 볼록 조건 검산 필요 | ★3 |
| RPM-ALG-0914 | 유형 UP 대표문제이나 통찰 0·Mₛ 1·M_total 4 의 단일 공식 → ★2 로 내림 | ★2 / ★3 |
| RPM-ALG-0936 | 약수의 합 = 등비 합의 곱을 표준 공식으로 보면 절차형 ★2. RT d1 + M, N 재표현으로 ★3 둠 | ★3 / ★2 |
| RPM-ALG-0938 | 로그 층을 표기 함정으로만 보면 ★2. 합 → 항 → 지수 복원 두 층 구조로 ★3 둠 | ★3 / ★2 |
| RPM-ALG-0941 | 서술형 구역이나 통찰 0·M_total 5 의 연립 절차 → ★2 로 내림 | ★2 / ★3 |
| RPM-ALG-0943 | 서술형 구역이나 등거리 항 성질을 표준으로 보아 절차형 ★2. I-SYM d1 로 인정하면 ★3 | ★2 / ★3 |
| RPM-ALG-0944 | 실력 Up 구역이나 통찰 CON d1 하나·M_total 7·교육청 3~4점 수준 → ★3 로 내림 | ★3 / ★4 |
| RPM-ALG-0946 | 실력 Up 구역이나 단일 통찰 EQV d2·M_total 5 → ★3 로 내림 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「원리합계」 4문(0914 · 0915 · 0916 · 0939)은 연초/연말 적립·역산·비교의 세 변주로 한 유형(base ★2~3)에 두고 초/말 구분을 함정 축으로 관리하면 됨. 「블록 합」 4문(0913 · 0941 · 0942 · 0946)은 등차 블록(공차 n²d)·등비 블록(공비 rⁿ)을 한 유형 안의 두 하위 항목으로 세우되, n 이 미지수인 0946 형은 base ★3 으로 분리. 「S_n 과 a_n 의 관계」 4문(0926 · 0927 · 0928 · 0938)은 첫째항 예외·절댓값 합·로그 합의 세 변주가 있어 base ★2 유형 하나에 변주 태그로 관리.
- 따로 세워야 할 유형: 「등차중항·등비중항의 도형 활용」(0921 · 0940 — 단원 밖 도구 XU 가 필수라 base ★3), 「등비중항의 정수 조건」(0932 — 정수론 역추적 BW 가 필수라 base ★3), 「도형 반복의 등비수열」(0911 · 0945 — 닮음비 발견 RT 가 핵심이며 0945 처럼 대칭 분할이 더해지면 base ★4).
- 통합해도 될 유형: 「처음으로 양수/k 보다 커지는 항」(0920 · 0930)은 등차·등비 구분 없이 「일반항 부등식」 한 유형(base ★1~2). 「두 수 사이에 수 넣기」(0923 · 0931 · 0935)는 등차·등비를 한 유형에 두고 0935 형(합 조건으로 r 결정)만 base ★3 하위 항목으로.
- 유형 UP 24~26 의 대표문제(0908 · 0911 · 0914)는 모두 M_total 4 로 가볍다 — 카탈로그 base ★ 는 대표문제가 아니라 유형 안 상중 문항(0910 · 0912 · 0913 · 0915 · 0916) 기준 ★3 으로 두는 편이 실제 시험 체감과 맞음.
