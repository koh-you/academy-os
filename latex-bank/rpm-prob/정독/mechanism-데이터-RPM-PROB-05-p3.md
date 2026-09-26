---
name: mechanism-데이터-RPM-PROB-05-p3
description: RPM 확률과 통계 05 확률분포 (2)(3/3 · 유형 11~유형 UP 13 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 05 확률분포 (2)
  unit_code: PROB-05
  part: "3/3"
  extract_range: "78~84쪽 · 0472~0507"
  total_problems: 36
  unit_total: 101
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 05 확률분포 (2) (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 05단원 「확률분포 (2)」의 마지막 3분의 1(78~84쪽 · 0472~0507 · 36문항)을 다룬다. 구역은 「유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기」 5문, 「유형 UP 12 표준화하여 확률 비교하기」 2문, 「유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기」 4문, 「시험에 꼭 나오는 문제」 18문, 「서술형 주관식」 4문, 「실력 Up」 3문이다.

벤더 난이도 신호는 RPM 표준을 따른다 — 구역(유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 주관식 / 실력 Up)이 곧 난이도 층이고, 그 위에 난이도 표시(중 · 상중)와 태그(대표문제 · 중요 · 서술형 · 교육청/평가원 기출)가 얹힌다. 이 범위의 골조는 크게 네 가지다. (1) 이항분포 B(n, p) → 평균 np · 분산 npq → 정규근사 → 표준화 → 표 조회, (2) 점수·금액·탑승객처럼 **원래 변수의 일차식**으로 주어진 조건을 횟수 X의 범위로 되돌리는 동치 변환, (3) 확률값을 먼저 주고 z 를 표에서 **역으로** 읽어 미지수를 구하는 역방향, (4) 표준화 값 z 의 대소로 서로 다른 정규분포의 확률을 비교하는 대칭·환원. 연속확률변수의 확률밀도함수(넓이 = 1)와 정규분포 그래프 판별도 「시험에 꼭 나오는 문제」에 섞여 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 특히 이 단원의 숫자 변형은 **npq 가 완전제곱이 되어야 σ 가 정수로 떨어지고 표준화 z 가 표에 있는 값(0.5 · 1 · 1.5 · 2 · 2.5 · 3)으로 맞는다**는 제약이 거의 모든 문항에 걸린다. 이 제약을 `variation_notes.numeric` 에 문항마다 명시했다.

## 문항 데이터

### 유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기

```yaml
- id: RPM-PROB-0472
  page: 78
  vendor_label: "유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    주사위를 720번 던질 때 1의 눈이 130번 이상 140번 이하로 나올 확률을 표준정규분포표로 구하기. 5지선다.
  category: "이항분포 평균·분산 → 정규근사 → 표준화 → 표 조회"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기(기본형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B(720, 1/6)에서 np 와 npq 를 구해 N(m, s^2)으로 근사하고 두 끝값을 표준화해 표에서 뺀다. 시행 수가 커서 정규근사가 정당하다는 점만 확인하면 나머지는 정해진 절차.
    유형 구역 대표문제·난이도 표시 없음 → ★2 출발. 통찰 없음이지만 M_total 6 으로 −1 조건(통찰 0 이고 M_total ≤ 5)에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: '조건 B(720, 1/6) → m = 120, s = 10 → (130-120)/10 = 1, (140-120)/10 = 2 → 표에서 P(1<=Z<=2) → 답'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: crop:fig-0472.png
  latex: latex-bank/rpm-prob/items/0472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시행 횟수와 확률을 (n, p) = (720, 1/6) 외에 (1200, 1/6)·(450, 1/3)·(192, 1/4)처럼 바꿀 수 있다. 제약: npq 가 완전제곱수여야 s 가 정수로 떨어지고, 구간 양끝이 m ± (0.5·1·1.5·2·2.5)s 위에 놓여야 주어진 표만으로 답이 나온다. 표에 없는 z 가 나오면 문제가 성립하지 않는다.'
    creative: '(1) 주사위를 동전·제비뽑기·불량품 검사로 바꾸기(★2 유지) (2) 구간을 한쪽 꼬리(이상만 / 이하만)로 바꾸기(★2 유지) (3) 횟수가 아니라 그 횟수로 계산되는 점수·금액의 범위를 묻기 → 일차식 동치 변환이 한 단계 늘어 ★3(0476·0498 골조) (4) 확률을 먼저 주고 구간의 끝값을 묻기 → 역방향으로 ★3(0479 골조).'
```

```yaml
- id: RPM-PROB-0473
  page: 78
  vendor_label: "유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    흰 공 1개·검은 공 3개에서 복원추출을 192번 할 때 흰 공이 57번 이상 나올 확률을 표준정규분포표로 구하기. 5지선다.
  category: "복원추출 → 이항분포 → 정규근사 → 한쪽 꼬리 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기(한쪽 꼬리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    복원추출이므로 독립시행이고 흰 공이 나올 확률은 1/4. B(192, 1/4)에서 m 과 s 를 구해 표준화하면 한쪽 꼬리가 되어 0.5 에서 표값을 빼거나 더한다.
    0472 와 같은 골조에 꼬리 방향 처리 한 가지가 더 붙은 형태. 유형 구역·난이도 중 → ★2, 통찰 없음으로 유지.
  tier: star_2
  mechanism_primary: '복원추출 → B(192, 1/4) → m = 48, s = 6 → (57-48)/6 = 1.5 → 0.5 - P(0<=Z<=1.5) → 답'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0473.png
  latex: latex-bank/rpm-prob/items/0473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공의 구성(흰 1 검은 3 → 흰 2 검은 3 등)과 시행 횟수를 바꿀 수 있다. 제약: p 를 바꾸면 npq 완전제곱 조건이 깨지기 쉬우므로 p = 1/4·1/3·1/2 처럼 분모가 작은 값에 n 을 맞춰 고른다(1/4 이면 n = 192·300·432).'
    creative: '(1) "57번 이하"로 방향만 뒤집기(★2 유지) (2) 비복원추출로 바꾸면 독립시행이 아니어서 이 골조가 무너진다 — 반드시 "다시 넣는다"를 유지 (3) 흰 공이 나온 횟수로 상금을 계산해 금액 조건으로 묻기 → ★3 (4) 확률 0.0668 을 주고 기준 횟수를 묻기 → ★3.'
```

```yaml
- id: RPM-PROB-0474
  page: 79
  vendor_label: "유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 학생이 가위바위보를 72번 할 때 비긴 횟수가 20번 이상 26번 이하일 확률을 표준정규분포표로 구하기. 5지선다.
  category: "비길 확률 계산 → 이항분포 → 정규근사 → 구간 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기(p 를 먼저 구하는 형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 두 문항과 달리 p 가 주어져 있지 않고 먼저 구해야 한다. 세 사람 가위바위보에서 비기는 경우는 셋이 모두 같은 것을 낼 때와 셋이 모두 다른 것을 낼 때이며, 이 두 경우를 더하면 p 가 나온다.
    경우 나눔이 표준적인 확률 계산이라 통찰로 카운트하지 않았다. p 를 구한 뒤는 0472 와 같은 절차. 유형 구역·중 → ★2.
  tier: star_2
  mechanism_primary: '비기는 경우(모두 같음 + 모두 다름) → p = 1/3 → B(72, 1/3) → m = 24, s = 4 → z = -1, 0.5 → 표'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0474.png
  latex: latex-bank/rpm-prob/items/0474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시행 횟수 72 를 바꿀 때 npq = n·(1/3)(2/3) = 2n/9 가 완전제곱이어야 한다(n = 72 → 16, n = 162 → 36, n = 288 → 64). 구간 끝은 m ± 0.5s 단위로 맞춘다.'
    creative: '(1) "두 사람이 가위바위보"로 바꾸면 비길 확률이 1/3 로 같아 골조가 그대로다(★2 유지) (2) "승부가 나는 횟수"로 여사건을 묻기(★2 유지) (3) 비긴 횟수가 아니라 특정 학생이 이긴 횟수로 바꾸면 p = 1/3 에서 달라지므로 n 을 다시 맞춰야 한다 (4) p 를 구하는 단계를 세 명이 아니라 네 명 가위바위보로 올리면 경우의 수 계산 부담만 커지고 통찰은 늘지 않아 ★ 는 그대로 — 계산 마찰은 질 저하 신호다.'
```

```yaml
- id: RPM-PROB-0475
  page: 79
  vendor_label: "유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    예약 취소율 20%, 정원 340명인 비행기에 400명 예약을 받았을 때 탑승객이 정원을 초과하지 않을 확률 구하기(서술형).
  category: "탑승객 조건 → 취소자 수의 조건으로 동치 변환 → 이항 정규근사"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이항분포를 따르는 것은 탑승객이 아니라 취소자 수이므로, 탑승객이 정원 이하라는 조건을 취소자가 60명 이상이라는 조건으로 옮겨야 표준화가 가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 여집합 변수로 조건 바꾸기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    학생이 흔히 탑승객 수를 바로 이항분포로 잡는데, 독립시행의 횟수는 취소 여부이므로 취소자 수 X 가 B(400, 0.2)를 따른다. 탑승객은 400 - X 이고 "정원을 초과하지 않는다"는 400 - X <= 340, 즉 X >= 60 이다.
    이 되돌림 한 단계가 이 문항의 전부이고 나머지는 0473 과 같다. 상중·서술형 → ★3 출발, 통찰 1개로 유지.
  tier: star_3
  mechanism_primary: '취소자 X ~ B(400, 0.2) → 탑승객 400-X <= 340 이 X >= 60 → m = 80, s = 8 → z = -2.5 → 0.5 + 표값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.9938$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0475.png
  latex: latex-bank/rpm-prob/items/0475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '취소율·예약 인원·정원 세 수를 함께 조정한다. 제약: npq 가 완전제곱이어야 하고(400·0.2·0.8 = 64), 정원에서 나오는 취소자 하한이 m 에서 s 의 0.5 배수만큼 떨어져야 한다. 정원을 바꾸면 z 가 표 밖으로 나가기 쉬우니 정원부터 역산해서 정한다.'
    creative: '(1) "정원을 초과할 확률"로 뒤집기(여사건 한 줄 추가 · ★3 유지) (2) 좌석이 등급별로 나뉘어 두 조건을 동시에 만족해야 하면 조건 통합이 붙어 ★4 (3) 취소가 아니라 "예약 없이 오는 손님"이 더해지는 설정으로 바꾸면 변수 정의 자체가 한 번 더 꼬여 ★4 (4) 반대로 "취소자가 60명 이상일 확률"이라고 대놓고 물으면 동치 변환이 사라져 ★2 로 떨어진다 — 이 문항의 ★ 를 만드는 지점이 바로 여기다.'
```

```yaml
- id: RPM-PROB-0476
  page: 79
  vendor_label: "유형 11 이항분포와 정규분포의 관계의 활용; 확률 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 번에 10점을 얻을 확률이 1/8, 1점을 잃을 확률이 7/8인 게임을 448번 했을 때 점수가 245점 이상일 확률 구하기.
  category: "점수를 성공 횟수의 일차식으로 → 횟수 범위로 환원 → 이항 정규근사"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점수는 얻은 점수와 잃은 점수의 합이므로 성공 횟수 X 의 일차식으로 세워야 하고, 점수 조건을 X 의 부등식으로 되돌려야 표준화가 가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 점수·금액의 일차식 환원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    성공 횟수 X 가 B(448, 1/8)을 따르고 점수는 10X 에서 실패 횟수 448 - X 를 뺀 일차식이다. 점수 조건을 X 에 대한 부등식으로 옮기면 그다음은 표준화 한 줄.
    실패할 때도 점수가 움직인다는 것(0점이 아니라 -1점)이 단위 함정이다. 상중 → ★3, 통찰 1개로 유지.
  mechanism_primary: '점수 = 10X - (448 - X) → 점수 조건을 X 의 범위로 → X ~ B(448, 1/8) → m = 56, s = 7 → z = 1 → 0.5 - 표값'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.1587$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '득점·실점 값(10점/1점)과 (n, p)를 바꾼다. 제약: npq 가 완전제곱이어야 하고(448·(1/8)(7/8) = 49), 점수 기준값을 일차식으로 되돌렸을 때 X 가 정수여야 하며 그 정수가 m 에서 s 의 0.5 배수만큼 떨어져야 한다. 점수 기준을 먼저 정하지 말고 원하는 z 에서 역산한다.'
    creative: '(1) 점수를 금액(상금·벌금)이나 이동 거리로 바꾸기(★3 유지 · 0498 이 같은 골조) (2) 실점을 0 으로 두면 점수가 10X 라 환원이 거의 사라져 ★2 (3) 점수 기준을 주고 확률을 묻는 대신 확률을 주고 점수 기준을 묻기 → 역조회가 더해져 ★3~4(0482 골조) (4) 세 종류 결과(+10 / -1 / 0)로 늘리면 이항분포가 아니게 되어 이 골조가 무너진다.'
```

### 유형 UP 12 표준화하여 확률 비교하기

```yaml
- id: RPM-PROB-0477
  page: 79
  vendor_label: "유형 UP 12 표준화하여 확률 비교하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    국어·영어·수학의 반 평균과 표준편차, 현이의 성적이 표로 주어질 때 상대적으로 가장 잘한 과목 찾기.
  category: "원점수 비교 → 표준화 점수 비교로 동치 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균과 표준편차가 서로 다르므로 원점수의 높낮이가 아니라 표준화 점수 z 의 크기로 비교해야 한다는 조건 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표준화 점수(z)로 서로 다른 정규분포의 상대적 위치 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 과목의 z = (성적 - 평균) / 표준편차 를 각각 계산해 가장 큰 것을 고르면 끝난다. 표준정규분포표도 필요 없고 계산도 한 줄씩이다.
    원점수가 가장 높은 과목과 답이 다르다는 점이 이 유형의 학습 포인트지만 요구되는 단계는 하나뿐이다.
    [분류 이슈] 유형 UP 구역이라 ★3 출발이나 M_total 4 · 단일 단계 · 표 불필요로 실질은 ★2. 라벨은 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: '과목마다 z = (성적 - 평균) / 표준편차 → 세 z 의 대소 비교 → 최댓값 과목'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '영어'
  answer_source: "답지"
  figure: crop:fig-0477.png
  latex: latex-bank/rpm-prob/items/0477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표의 아홉 칸(평균 3 · 표준편차 3 · 개인 성적 3)을 자유롭게 바꿀 수 있다. 제약: (성적 - 평균)이 표준편차로 나누어떨어지게 두면 암산으로 비교되고, 원점수 1위와 z 1위가 서로 다른 과목이 되도록 잡아야 이 유형의 의도가 산다. z 가 동점이 되지 않게 확인한다.'
    creative: '(1) "가장 못한 과목"을 묻기(★2 유지) (2) 세 과목 순위를 모두 나열하게 하기(0478 골조 · ★2) (3) 한 과목의 성적을 미지수로 두고 그 과목이 1위가 되기 위한 범위를 묻기 → 역방향이 붙어 ★3 (4) z 를 백분위(표준정규분포표)까지 환산해 "상위 몇 %"를 묻게 하면 표 조회가 더해져 ★3.'
```

```yaml
- id: RPM-PROB-0478
  page: 79
  vendor_label: "유형 UP 12 표준화하여 확률 비교하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    평균·표준편차가 다른 세 반의 봉사 시간 분포에서 세 학생 A, B, C 를 자기 반 기준 상대적으로 긴 순서대로 나열하기. 5지선다.
  category: "세 정규분포의 개별 값 → 각각 표준화 → z 순서 정렬"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "반마다 평균·표준편차가 다르므로 봉사 시간의 절댓값이 아니라 자기 반 분포 안에서의 z 로 비교해야 한다는 조건 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표준화 점수(z)로 서로 다른 정규분포의 상대적 위치 비교(순위 나열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0477 과 같은 골조이고 답 형식만 "가장 큰 하나"에서 "세 개 전부 정렬"로 바뀌었다. z 가 분수로 나와 대소 비교에 약간의 계산이 붙는 정도.
    [분류 이슈] 상중 표시 + 유형 UP 구역이면 ★3 출발이나 실제 요구 단계는 표준화 세 번과 분수 비교뿐 → ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: '학생마다 z = (봉사 시간 - 반 평균) / 반 표준편차 → 세 z 를 분수 비교 → 큰 순서로 나열'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 반의 평균·표준편차와 세 학생의 시간을 바꾼다. 제약: z 세 개가 서로 다른 값이어야 하고, 봉사 시간의 절대 순서와 z 순서가 어긋나도록(특히 절대 시간 1위가 z 1위가 아니도록) 잡아야 선택지가 변별력을 갖는다. 분모를 3·4·7 처럼 서로 다른 수로 두면 통분 부담이 생기니 계산 마찰을 늘리지 않는 범위에서 고른다.'
    creative: '(1) 봉사 시간을 성적·키·기록으로 바꾸기(★2 유지) (2) 기록처럼 작을수록 좋은 값으로 바꾸면 z 가 작은 쪽이 상위가 되어 부호 함정이 생긴다(★3 · 0495 와 결합) (3) 한 학생의 값을 미지수로 두고 순위가 정해지는 범위를 묻기 → ★3 (4) 각 z 를 표준정규분포표로 상위 백분율까지 환산하면 ★3.'
```

### 유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기

```yaml
- id: RPM-PROB-0479
  page: 80
  vendor_label: "유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    오지선다형 100문제에 임의로 답할 때 a개 이상 맞힐 확률이 0.02가 되는 a 구하기. 5지선다.
  category: "이항 정규근사 → 확률을 표에서 역으로 읽어 z 결정 → 미지수 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 0.02 를 먼저 0.5 - 0.48 로 분해해 표에서 z 를 거꾸로 찾아야 미지수 a 가 나오는 역방향 구조"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 확률에서 미지수 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    임의로 답하므로 정답 확률은 1/5 이고 X 는 B(100, 1/5)를 따른다. 여기까지는 0472 와 같지만 구할 것이 확률이 아니라 미지수라서 표를 거꾸로 쓴다.
    주어진 꼬리확률을 0.5 에서 빼 표 안의 값으로 만든 뒤 z 를 읽고 a 를 복원하는 순서가 이 유형의 골조다. 유형 UP 대표문제 → ★3, 통찰 1개로 유지.
  tier: star_3
  mechanism_primary: 'X ~ B(100, 1/5) → m = 20, s = 4 → 0.02 = 0.5 - 0.48 → 표에서 z = 2 → a = m + 2s'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-0479.png
  latex: latex-bank/rpm-prob/items/0479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '선택지 개수(오지선다 → 사지선다면 p = 1/4)와 문항 수, 목표 확률을 바꾼다. 제약: npq 가 완전제곱이어야 하고, 목표 확률은 반드시 0.5 - (표에 있는 값) 꼴이어야 한다(0.02·0.07·0.0228·0.0668 등). 확률을 먼저 정하고 a 를 역산해 선택지를 만든다.'
    creative: '(1) "a개 이하 맞힐 확률"로 방향을 바꾸면 z 가 음수가 되어 부호 함정이 추가된다(★3 유지, 오답률은 올라감) (2) 양쪽 꼬리 |X - m| >= a 로 바꾸기(0481 골조 · ★3) (3) 맞힌 개수가 아니라 점수 기준으로 묻기(0482 골조 · ★3) (4) 확률 대신 "상위 2% 안에 들려면"으로 표현만 바꾸면 조건 해석이 한 겹 더해져 ★3 유지하되 체감 난도가 오른다.'
```

```yaml
- id: RPM-PROB-0480
  page: 80
  vendor_label: "유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    불량률 2%인 제품 2500개 중 불량품 수 X 에 대해 P(k <= X <= 57) = 0.6826 을 만족시키는 상수 k 구하기.
  category: "이항 정규근사 → 주어진 확률이 대칭 구간임을 간파 → 반대쪽 끝 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "오른쪽 끝을 표준화하면 z = 1 이고 0.6826 이 그 표값의 두 배이므로 구간이 평균에 대해 대칭임을 읽어내면 왼쪽 끝이 바로 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 대칭 구간에서 반대쪽 끝 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B(2500, 0.02)에서 m 과 s 를 구하고 알려진 끝값 57 을 표준화하면 z 가 나온다. 이때 주어진 확률이 그 z 까지의 표값의 정확히 두 배라는 것을 보면 구간이 평균 대칭이고 k 는 대칭점으로 결정된다.
    대칭을 못 보면 표를 뒤져 다른 z 를 찾느라 헤매게 되므로 이 간파가 풀이를 단축하는 핵심이다.
    [분류 이슈] 구역(유형 UP → ★3)과 난이도 표시(중 → ★2)가 서로 어긋난다. 통찰 1개와 M_total 7 을 근거로 구역 쪽을 따라 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: 'X ~ B(2500, 0.02) → m = 50, s = 7 → (57-50)/7 = 1, 0.6826 = 2 x 0.3413 → 대칭이므로 k = m - 7'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$43$'
  answer_source: "답지"
  figure: crop:fig-0480.png
  latex: latex-bank/rpm-prob/items/0480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '불량률과 생산 개수를 바꾼다. 제약: npq 가 완전제곱이어야 하고(2500·0.02·0.98 = 49), 주어진 확률은 표값의 2배(0.6826 · 0.3830 · 0.9544)여야 대칭 골조가 성립한다. 확률을 표값의 2배가 아닌 값으로 바꾸면 두 z 가 달라져 이 문항의 성격이 완전히 바뀐다.'
    creative: '(1) 대칭이 아닌 확률(예: 0.5328 = 0.1915 + 0.3413)로 주면 두 z 를 각각 읽어야 해 대칭 통찰이 사라지고 단순 역조회 ★3 (2) 미지수를 오른쪽 끝에 두기(부호만 바뀜 · ★3 유지) (3) 양끝을 모두 미지수로 두고 대칭 구간이라는 조건을 추가하면 ★3 유지 (4) 불량품 수가 아니라 정상품 수로 서술하면 0475 식 여집합 변환이 앞에 붙어 ★4.'
```

```yaml
- id: RPM-PROB-0481
  page: 80
  vendor_label: "유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    하이패스 이용률 60%, 차량 600대에서 이용 차량 수 X 에 대해 P(|X - 360| >= a) = 0.14 를 만족시키는 양수 a 구하기. 5지선다.
  category: "절댓값 조건 → 평균 대칭 두 꼬리 → 한쪽 꼬리 확률에서 z 역조회"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절댓값 조건의 기준 360 이 곧 평균이라는 것을 알아채면 두 꼬리가 대칭이라 전체 확률 0.14 를 한쪽 0.07 로 반 나눌 수 있다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한쪽 꼬리 0.07 을 0.5 - 0.43 으로 바꿔 표에서 z 를 거꾸로 읽고 a 를 복원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 절댓값(양쪽 꼬리) 조건에서 미지수 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B(600, 0.6)에서 m 과 s 를 구하면 절댓값 안의 360 이 정확히 평균이다. 따라서 조건은 평균에서 a 이상 떨어질 확률이고, 대칭이므로 한쪽 꼬리가 절반이다. 그다음은 0479 와 같은 역조회.
    [분류 이슈] 통찰 2개라 +1 후보에 해당하지만 둘 다 이 유형의 표준 도구(대칭 반 나누기 · 표 역조회)라서 올리지 않고 상중·유형 UP 출발점 ★3 을 유지했다. 기록만 한다.
  tier: star_3
  mechanism_primary: 'X ~ B(600, 0.6) → m = 360, s = 12 → 절댓값 조건을 양쪽 꼬리로 → 한쪽 0.07 → 표에서 z = 1.5 → a = 1.5s'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: crop:fig-0481.png
  latex: latex-bank/rpm-prob/items/0481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이용률과 차량 수를 바꾼다. 제약: npq 가 완전제곱(600·0.6·0.4 = 144)이어야 하고, 절댓값 기준은 반드시 평균과 같아야 대칭 골조가 산다. 주어진 확률은 (0.5 - 표값)의 2배 꼴(0.14 · 0.0456 · 0.3174)이어야 한다.'
    creative: '(1) 절댓값 기준을 평균이 아닌 값으로 두면 대칭이 깨져 두 꼬리를 따로 처리해야 하고 표만으로는 풀 수 없게 된다 — 반드시 평균으로 고정 (2) 부등호를 <= 로 바꿔 "가운데 구간" 확률로 주기(★3 유지) (3) 확률을 주는 대신 a 를 주고 확률을 묻기 → 역방향이 사라져 ★2 (4) 차량 수를 미지수 n 으로 두고 a 와 확률을 주면 n 을 구하는 방향이 되어 Ma 가 올라 ★4.'
```

```yaml
- id: RPM-PROB-0482
  page: 80
  vendor_label: "유형 UP 13 이항분포와 정규분포의 관계의 활용; 미지수의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    주사위에서 3의 배수면 4점 얻고 아니면 2점 잃는 게임을 288번 한 뒤 점수가 k점 이하일 확률이 0.31일 때 k 구하기. 5지선다.
  category: "점수를 횟수의 일차식으로 → 확률에서 z 역조회 → 점수 기준 복원"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점수를 3의 배수가 나온 횟수 X 의 일차식으로 세워 점수 조건을 X 의 부등식으로 되돌린다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 0.31 이 0.5 보다 작으므로 기준이 평균 왼쪽임을 판단하고 0.5 - 0.31 = 0.19 로 표를 거꾸로 읽어 음수 z 를 얻는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 점수 일차식과 확률 역조회 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0476 의 점수 일차식과 0479 의 확률 역조회를 이어 붙인 형태다. 3의 배수가 나올 확률 1/3 로 X 의 평균·표준편차를 구하고, 점수 조건을 X 의 부등식으로 옮긴 뒤 확률에서 z 를 거꾸로 읽는다.
    확률이 0.5 보다 작아 z 가 음수가 되는 것이 유일한 추가 함정이다.
    [분류 이슈] 통찰 2개로 +1 후보지만 두 통찰 모두 이 범위에서 이미 ★3 으로 평가한 표준 도구이고 결합만 되었으므로 ★3 유지. 기록만 한다.
  tier: star_3
  mechanism_primary: '점수 = 4X - 2(288 - X) → X ~ B(288, 1/3), m = 96, s = 8 → 0.5 - 0.31 = 0.19 → z = -0.5 → X 기준 → k'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0482.png
  latex: latex-bank/rpm-prob/items/0482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '득점·실점(4점/2점)과 시행 횟수, 목표 확률을 바꾼다. 제약: n·(1/3)(2/3)이 완전제곱이어야 하고(288 → 64), 확률은 0.5 ± (표값) 꼴이어야 하며, 역산된 X 값을 일차식에 넣은 점수 k 가 선택지로 쓸 만한 정수여야 한다. 선택지는 반드시 k 를 역산한 뒤 만든다.'
    creative: '(1) 확률을 0.5 보다 크게 주면 z 가 양수가 되어 부호 함정이 사라진다(★3, 체감은 내려감) (2) "k점 이상"으로 방향 바꾸기(★3 유지) (3) 3의 배수 대신 소수의 눈 등으로 p 를 바꾸면 n 을 다시 맞춰야 한다 (4) 게임 횟수 n 을 미지수로 두고 점수 기준과 확률을 주면 미지수가 둘이 되어 ★4.'
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0483
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구간마다 식이 다른 연속확률변수의 확률밀도함수가 주어질 때 상수 k 의 값 구하기.
  category: "확률밀도함수의 전체 넓이 = 1 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 성질(전체 넓이 1)로 상수 정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 구간의 그래프가 모두 직선이라 넓이는 삼각형 둘의 합이고, 그 합을 1 로 놓으면 k 가 바로 나온다. 적분 없이 도형 넓이로 끝난다.
    시험 구역 기본 ★2 출발이지만 통찰 없음 + M_total 4 로 −1 조건에 걸려 ★1.
  tier: star_1
  mechanism_primary: '두 구간의 그래프 넓이(삼각형 2개)의 합 = 1 → k'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간 경계(0, 2, 6)와 두 직선의 기울기를 바꾼다. 제약: 두 식이 경계에서 같은 값을 가져야 함수가 연속이고, 전체 넓이가 1 이 되는 k 가 간단한 유리수로 떨어지도록 밑변·높이를 잡는다.'
    creative: '(1) 두 구간 중 하나를 수평선으로 바꾸면 사다리꼴이 되어 ★1 유지 (2) k 를 주고 특정 구간의 확률을 묻기(★1~2) (3) k 를 구한 뒤 이어서 평균 E(X)를 묻게 하면 적분·모멘트가 더해져 ★3 (4) 구간을 셋으로 늘리면 계산만 늘고 통찰은 그대로라 ★ 변화 없음.'
```

```yaml
- id: RPM-PROB-0484
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    일차식으로 주어진 확률밀도함수에서 P(X <= k) = 3/4 를 만족시키는 상수 k 구하기. 5지선다.
  category: "누적 확률 = 넓이 → k 에 대한 이차방정식 → 정의역 안의 근 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 넓이로 미지수 구하기(누적 확률형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체가 직각삼각형이므로 P(X >= k) = 1/4 쪽(오른쪽 작은 삼각형)의 넓이를 쓰면 사다리꼴보다 계산이 짧다. 어느 쪽으로 가도 k 에 대한 이차방정식이 되고 0 이상 2 이하라는 정의역으로 근을 하나 고른다.
    근 선택이 T-범위 함정이지만 갈래 비교라고 볼 만큼 도구가 다르지는 않아 절차형으로 두었다. 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: '여사건 삼각형 넓이 = 1/4 → k 의 이차방정식 → 0 <= k <= 2 인 근 선택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기울기와 정의역 끝값, 목표 확률(3/4)을 바꾼다. 제약: 전체 넓이가 1 이어야 하고, 목표 확률이 완전제곱꼴로 정리되어야 k 가 유리수로 떨어진다(1/4 · 9/16 처럼 제곱수 분자를 쓴다).'
    creative: '(1) 증가하는 직선으로 바꾸면 여사건 방향이 반대가 된다(★2 유지) (2) 확률을 1/2 로 두면 중앙값을 묻는 문제가 된다(★2) (3) 0483 처럼 두 구간으로 쪼개면 k 가 어느 구간에 있는지부터 따져야 해 다중 해석이 생겨 ★3 (4) k 를 주고 확률을 묻는 방향으로 뒤집으면 ★1.'
```

```yaml
- id: RPM-PROB-0485
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    절댓값이 들어간 확률밀도함수에서 상수 k 를 정한 뒤 주어진 구간의 확률 구하기. 5지선다.
  category: "V 자 그래프 → 전체 넓이 1 로 k → 구간을 꺾인점에서 쪼개 넓이 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 확률밀도함수의 넓이 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값 그래프가 꺾인점에서 좌우 두 삼각형으로 나뉜다. 전체 넓이를 1 로 놓아 k 를 정하고, 물어본 구간도 꺾인점에서 잘라 두 삼각형 넓이를 더한다.
    단계는 많지 않지만 넓이 조각이 네 개라 실수가 잦다. 시험 구역 기본 ★2, 통찰 없음.
  tier: star_2
  mechanism_primary: '절댓값 그래프를 꺾인점 기준 두 삼각형으로 → 전체 넓이 1 로 k → 구간을 다시 쪼개 넓이 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '꺾인점 위치와 정의역 양끝, 물어보는 구간을 바꾼다. 제약: 좌우 두 삼각형의 넓이 합이 1 이 되게 k 가 정해지므로 밑변 길이를 단순한 정수로 두고, 물어보는 구간 끝이 꺾인점의 양쪽에 걸치도록 잡아야 쪼개기 단계가 살아난다.'
    creative: '(1) 물어보는 구간을 꺾인점 한쪽에만 두면 쪼개기가 사라져 ★1 (2) 절댓값 대신 위로 볼록한 지붕 모양으로 바꾸기(★2 유지) (3) 확률을 주고 구간 끝을 묻기 → 역방향으로 ★3 (4) 꺾인점 위치를 미지수로 두고 주어진 확률을 만족시키는 값을 찾게 하면 ★3~4.'
```

```yaml
- id: RPM-PROB-0486
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 과목의 평균·표준편차 표를 보고 두 정규분포 곡선의 위치·모양이 맞는 그래프 고르기. 5지선다.
  category: "평균 → 대칭축 위치, 표준편차 → 폭과 최고점 높이"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표의 두 수치(평균·표준편차)를 곡선의 기하적 특징(대칭축의 좌우 위치, 폭의 넓고 좁음과 그에 반대인 높이)으로 옮기는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포 곡선의 모양과 평균·표준편차의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 전혀 없고 두 가지만 판정하면 된다 — 평균이 큰 쪽 곡선이 오른쪽에 있고, 표준편차가 큰 쪽이 더 넓게 퍼지면서 최고점은 더 낮다.
    표준편차가 클수록 최고점이 낮아진다(전체 넓이가 1 로 같으므로)는 점이 T-표기 함정이다. 시험 구역 ★2, 통찰 1개로 유지.
  tier: star_2
  mechanism_primary: '표의 평균 → 두 곡선의 좌우 위치 / 표의 표준편차 → 폭과 높이(넓이 1 고정) → 선택지 판별'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: crop:fig-0486.png
  latex: latex-bank/rpm-prob/items/0486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표의 네 값(두 과목의 평균·표준편차)을 바꾼다. 제약: 두 평균이 서로 달라야 위치 판정이 살고, 두 표준편차도 달라야 폭 판정이 산다. 평균이 큰 쪽이 표준편차도 크면 판정이 한 방향으로 몰려 변별이 약해지므로 엇갈리게 두는 편이 좋다.'
    creative: '(1) 평균을 같게 두고 표준편차만 다르게 하면 폭·높이만 묻는 ★1 (2) 그래프를 주고 표를 채우게 하는 역방향(★2 유지) (3) 세 과목으로 늘리기(★2) (4) 곡선과 특정 확률의 대소까지 함께 물으면 0487 처럼 ★3.'
```

```yaml
- id: RPM-PROB-0487
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평균이 50인 정규분포에서 구간 확률의 대소를 비교하는 보기 ㄱ·ㄴ·ㄷ 중 옳은 것 고르기. 5지선다.
  category: "평균 대칭으로 구간 쪼개 비교 → 평행이동한 구간은 중심 거리로 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간을 평균 50 에서 잘라 좌우로 나누고 대칭을 써서 한쪽으로 모으면 두 확률의 대소가 계산 없이 보인다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ·ㄷ 은 모든 양수 a 에 대한 주장이므로 a 의 크기에 따라 결과가 갈리는지 따져 반례를 찾아야 한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포의 대칭성을 이용한 구간 확률의 대소 비교(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표준정규분포표 없이 대칭성과 "평균에서 멀어질수록 같은 길이 구간의 확률이 작아진다"는 성질만으로 판정한다. 주어진 구간이 평균에 대해 한쪽으로 치우쳐 있다는 점이 ㄱ 의 열쇠다.
    ㄴ·ㄷ 은 구간을 평행이동했을 때 중심이 평균에 가까워지는지 멀어지는지를 a 의 크기별로 따져야 해 반례 찾기가 필요하다.
    시험 구역 ★2 출발이나 통찰 2개·M_total 7 로 +1 → ★3.
  tier: star_3
  mechanism_primary: '구간을 평균에서 잘라 대칭으로 한쪽에 모으기 → 구간 중심과 평균의 거리로 확률 대소 판정 → a 의 크기별 반례 확인'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균 50 과 구간의 양끝(45, 60), 비교 대상 구간(50~55)을 바꾼다. 제약: 구간이 평균에 대해 비대칭이어야 ㄱ 형 주장이 성립하고, 좌우로 벌어진 길이의 비를 바꾸면 부등호 방향이 뒤집히므로 보기를 만들 때 반드시 방향을 다시 확인한다. 표준편차는 주지 않아도 된다(주면 오히려 계산으로 풀려 통찰이 사라진다).'
    creative: '(1) 보기를 두 개로 줄이면 ★2 (2) 표준편차를 주고 표까지 붙이면 계산 문제로 바뀌어 통찰이 사라진다 — 이 문항의 ★ 를 지우는 지점 (3) 두 개의 서로 다른 정규분포 사이의 비교로 바꾸면 표준화가 필요해져 0499 골조(★3) (4) "모든 a" 대신 "어떤 a"로 바꾸면 반례가 아니라 예시를 찾는 문제가 되어 체감이 내려간다.'
```

```yaml
- id: RPM-PROB-0488
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 다른 두 정규분포를 따르는 X, Y 에 대해 P(X >= k) = P(Y >= k) 를 만족시키는 상수 k 구하기. 5지선다.
  category: "두 꼬리 확률이 같음 → 표준화 값이 같음 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 방향 꼬리확률이 같다는 조건을 두 표준화 값이 같다는 등식으로 옮기면 표 없이 일차방정식만 남는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 정규분포의 확률이 같을 조건(표준화 값 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준정규분포표가 주어지지 않았다는 것 자체가 신호다. 확률값을 구하지 말고 두 z 를 같다고 놓으라는 뜻이고, 그러면 k 에 대한 일차방정식 한 줄로 끝난다.
    시험 구역 ★2, 통찰 1개·M_total 4 로 ★2 유지.
  tier: star_2
  mechanism_primary: '같은 방향 꼬리확률 일치 → (k - 8)/3 = (k - 9)/4 → k'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 정규분포의 평균·표준편차 네 값을 바꾼다. 제약: 두 표준편차가 달라야 일차방정식에 해가 하나 생기고(같으면 평균까지 같아야만 성립), 해 k 가 정수로 떨어지도록 평균과 표준편차의 조합을 고른다.'
    creative: '(1) 한쪽을 이하, 다른 쪽을 이상으로 두면 z 의 부호가 반대가 되어 함정이 추가된다(★3 · 0494 골조) (2) 평균 중 하나를 미지수로 두고 k 를 주기(★2 유지) (3) 두 확률이 같은 대신 한쪽이 다른 쪽보다 크다는 부등식으로 주면 범위를 구하는 문제가 되어 ★3(0502 골조) (4) 구간 확률끼리의 일치로 바꾸면 폭까지 맞춰야 해 ★3.'
```

```yaml
- id: RPM-PROB-0489
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평균 대칭 구간의 확률이 다른 정규분포의 구간 확률과 같다는 조건에서 V(2X + 1) 구하기.
  category: "대칭 구간 확률 일치 → 표준화 반지름 일치 → 표준편차 → 분산의 일차변환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 구간 모두 각자의 평균을 중심으로 한 대칭 구간이므로 확률이 같다는 것은 평균에서 떨어진 거리를 표준편차로 잰 값이 같다는 뜻"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭 구간의 확률 일치로 표준편차 구하기 + 분산의 일차변환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 구간이 모두 평균 ± 일정 거리 꼴이므로 표준화하면 각각 -c <= Z <= c 형태가 되고, 확률이 같으려면 c 가 같다. 여기서 X 의 표준편차가 나온다.
    마지막에 V(aX + b) = a^2 V(X) 를 한 번 쓰면 끝. 시험 구역 ★2, 통찰 1개·M_total 6 로 유지.
  tier: star_2
  mechanism_primary: '두 대칭 구간을 표준화 → 반지름 c 일치 → X 의 표준편차 → V(2X+1) = 4V(X)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'Y 의 평균·표준편차와 두 구간의 반지름, 마지막에 묻는 일차변환의 계수를 바꾼다. 제약: 두 구간이 반드시 각자의 평균에 대해 대칭이어야 하고, 반지름의 비가 표준편차의 비와 맞아떨어져 X 의 표준편차가 유리수로 나와야 한다.'
    creative: '(1) 마지막을 E(2X + 1)이나 표준편차로 바꾸기(★2 유지) (2) 구간 하나를 비대칭으로 두면 표만으로는 풀 수 없어 문제가 성립하지 않는다 — 대칭은 고정 (3) X 의 평균을 묻는 방향으로 바꾸면 조건이 하나 더 필요해 ★3 (4) 두 확률이 같은 대신 비가 주어지면 표 조회가 들어와 ★3.'
```

```yaml
- id: RPM-PROB-0490
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Y = 3X - a 이고 두 정규분포의 평균이 같으며 P(X <= 4) = P(Y >= a) 일 때, 표준정규분포표로 P(Y >= 9) 구하기. 5지선다.
  category: "일차변환의 평균·표준편차 → 평균 일치로 a 와 표준편차 → 꼬리 확률 일치로 평균 → 표 조회"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Y = 3X - a 이므로 Y 의 평균은 3m - a, 표준편차는 3배이고, 두 분포의 평균이 같다는 조건에서 a 와 Y 의 표준편차가 동시에 결정된다"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한쪽은 이하, 다른 쪽은 이상 확률이 같다는 조건은 두 표준화 값이 부호만 반대라는 뜻이므로 대칭을 써서 평균에 대한 일차방정식을 세운다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "일차변환된 정규분포의 모수 결정 + 대칭 조건으로 평균 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 ㈎ 가 모수 관계(평균·표준편차)를, 조건 ㈏ 가 위치 관계를 준다. 두 조건을 연립해야 m, a, 표준편차가 한꺼번에 정해지고 그제야 표를 쓸 수 있다.
    방향이 다른 두 확률이 같다는 것을 z 의 부호 반대로 옮기는 지점이 오답이 갈리는 곳이다.
    시험 구역 ★2~3 출발이지만 미지수 셋·통찰 2개·M_total 10 으로 실질 ★4. 교육청 기출 신호와도 맞는다.
  tier: star_4
  mechanism_primary: 'Y = 3X - a → 평균 3m - a = m, 표준편차 3배 → 두 꼬리 확률 일치를 z 부호 반대로 → m 결정 → P(Y >= 9) 표 조회'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-0490.png
  latex: latex-bank/rpm-prob/items/0490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차변환의 계수(3), X 의 표준편차(2), 마지막에 묻는 값(9)을 바꾼다. 제약: 평균 일치 조건에서 a 가 평균의 정수배로 떨어져야 하고, 최종 표준화 값이 표에 있는 z(0.5 · 1 · 1.5 · 2)가 되도록 마지막 값은 반드시 역산해서 정한다.'
    creative: '(1) 조건 ㈏ 를 같은 방향(둘 다 이상)으로 바꾸면 부호 대칭 통찰이 사라져 ★3 (2) 평균이 같다는 조건 대신 분산이 같다고 주면 다른 연립이 되어 ★4 유지 (3) 일차변환을 Y = aX + b 로 두 계수 모두 미지수로 만들면 조건이 하나 더 필요하고 ★4~5 (4) 묻는 것을 확률이 아니라 a 로 바꾸면 표가 필요 없어져 ★3.'
```

```yaml
- id: RPM-PROB-0491
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정규분포를 따르는 X 에 대해 P(X >= a) = 0.6915 를 만족시키는 상수 a 를 표준정규분포표로 구하기.
  category: "확률이 0.5 보다 큼 → 기준이 평균 왼쪽 → 음수 z 역조회"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률이 0.5 를 넘으므로 a 가 평균보다 작다고 먼저 판단하고 0.6915 - 0.5 를 표에서 찾아 z 를 음수로 복원한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포에서 확률로부터 기준값 역산(음수 z)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표는 0 이상 구간만 주므로 0.6915 를 0.5 와 0.1915 로 쪼개 표에서 z 를 읽고 부호를 음수로 되돌린다. 부호를 놓치면 평균 오른쪽으로 잘못 간다.
    단계 자체는 짧아 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: '0.6915 = 0.5 + 0.1915 → 표에서 z = 0.5 → a 는 평균 왼쪽이므로 (a - 50)/4 = -0.5 → a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$48$'
  answer_source: "답지"
  figure: crop:fig-0491.png
  latex: latex-bank/rpm-prob/items/0491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균·표준편차와 주어진 확률을 바꾼다. 제약: 확률은 0.5 ± (표에 있는 값) 꼴이어야 하고, 0.5 보다 크게 두면 음수 z, 작게 두면 양수 z 가 된다. a 가 정수가 되도록 표준편차와 z 를 맞춘다.'
    creative: '(1) 이하 확률로 방향 바꾸기(부호가 뒤집힘 · ★2 유지) (2) 양쪽 대칭 구간 확률을 주고 양끝을 묻기(★2~3 · 0503 골조) (3) 평균을 미지수로 두고 a 와 확률을 주면 평균을 역산하는 방향이 된다(★3) (4) 이항분포로 감싸면 0479 골조가 되어 ★3.'
```

```yaml
- id: RPM-PROB-0492
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    쿠키 한 개의 무게가 정규분포를 따를 때 무게가 29 g 이상 32 g 이하일 확률을 표준정규분포표로 구하기. 5지선다.
  category: "구간 양끝 표준화 → 평균 좌우로 나뉜 두 표값의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 구간 확률 구하기(기본형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평균과 표준편차가 그대로 주어져 있고 구간 양끝을 표준화하면 z 가 음수와 양수 하나씩 나온다. 평균을 사이에 두므로 두 표값을 더한다.
    더하는지 빼는지만 구분하면 되는 가장 기본형. 시험 구역 ★2 출발에서 통찰 0 · M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: '(29-30)/2 = -0.5, (32-30)/2 = 1 → 평균을 사이에 두므로 두 표값을 합'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '②'
  answer_source: "답지"
  figure: crop:fig-0492.png
  latex: latex-bank/rpm-prob/items/0492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균·표준편차와 구간 양끝을 바꾼다. 제약: 양끝이 평균에서 표준편차의 0.5 배수만큼 떨어져야 주어진 표로 답이 나온다. 구간을 평균 한쪽에만 두면 두 표값을 빼는 형태가 되어 함정이 바뀐다.'
    creative: '(1) 구간을 평균 한쪽에 몰아 두기(빼기형 · ★1~2) (2) 한쪽 꼬리로 바꾸기(0.5 와의 가감 · ★1) (3) 확률을 주고 구간 끝을 묻기(★2 · 0491 골조) (4) 쿠키 여러 개의 총 무게로 바꾸면 이 범위 밖(표본평균)의 도구가 필요해진다.'
```

```yaml
- id: RPM-PROB-0493
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    600명이 지원한 시험에서 합격 최저 점수가 주어질 때 정원 n 을 표준정규분포표로 구하기. 5지선다.
  category: "합격선 표준화 → 상위 꼬리 확률 → 지원자 수 x 확률 = 인원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 확률을 인원수로 환산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합격선을 표준화해 꼬리 확률을 구한 뒤 지원자 수를 곱하면 합격 인원, 곧 정원이 된다. 확률을 비율로 읽어 전체에 곱하는 마지막 환산이 이 문항의 성격이다.
    환산이 표준 절차라 통찰로 세지 않았다. 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: '(407 - 389)/12 = 1.5 → 상위 꼬리 확률 → 600 x 확률 = n'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: crop:fig-0493.png
  latex: latex-bank/rpm-prob/items/0493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균·표준편차·합격선·지원자 수를 바꾼다. 제약: 합격선이 평균에서 표준편차의 0.5 배수만큼 떨어져야 하고, 지원자 수와 꼬리 확률의 곱이 자연수로 떨어져야 한다. 지원자 수를 100 의 배수로 두면 맞추기 쉽다.'
    creative: '(1) 정원을 주고 합격 최저 점수를 묻는 역방향(★3 · 0495 골조) (2) "상위 몇 명 안에 들려면"으로 표현을 바꾸기(★2 유지) (3) 불합격 인원을 묻게 하면 여사건 한 줄 추가(★2) (4) 지원자 수까지 미지수로 두면 조건이 하나 더 필요해 ★3.'
```

```yaml
- id: RPM-PROB-0494
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평균·표준편차가 다른 두 제품의 중량 구간 확률이 서로 같을 때 상수 k 구하기. 5지선다.
  category: "두 구간을 표준화 → 표준정규분포의 대칭으로 구간 일치 → k"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준화한 두 구간이 그대로는 다르지만 표준정규분포가 원점 대칭이므로 한쪽 구간을 부호 반전해 겹치면 미지수 쪽 끝이 결정된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 정규분포의 구간 확률 일치(대칭 이용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 구간을 각각 표준화하면 한쪽은 양끝이 확정되고 다른 쪽은 한 끝이 미지수다. 표가 주어지지 않았으므로 확률을 계산하지 말고 두 표준화 구간이 대칭으로 같아지도록 맞추라는 뜻이다.
    A 쪽 구간의 두 끝 부호가 서로 달라 단순히 순서대로 대응시키면 틀린다.
    시험 구역 ★2~3 출발, 통찰 1개·M_total 8 → ★3. 평가원 기출 신호와도 맞는다.
  tier: star_3
  mechanism_primary: 'A 구간 표준화 → B 구간 표준화 → 두 구간이 대칭으로 일치하도록 부호 맞추기 → k'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 제품의 평균·표준편차와 A 쪽 구간의 양끝을 바꾼다. 제약: 표준화 값이 간단한 유리수로 떨어져야 하고, B 쪽 확정된 끝의 표준화 값이 A 쪽 두 끝 중 하나와 부호만 다른 값이어야 대칭 맞추기가 성립한다. 이 대응부터 먼저 설계한 뒤 나머지 수를 채운다.'
    creative: '(1) 두 구간이 부호 반전 없이 그대로 대응되게 두면 대칭 통찰이 사라져 ★2 (2) 한쪽을 꼬리 확률로 바꾸기(0488 골조 · ★2) (3) 표를 함께 주면 대칭을 안 써도 수치로 풀려 통찰이 약해진다 — 표를 주지 않는 것이 이 문항의 설계 (4) 미지수를 표준편차에 두면 방정식이 분수식이 되어 ★4.'
```

```yaml
- id: RPM-PROB-0495
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    마라톤 기록이 정규분포를 따를 때 상위 20% 안에 들려면 기록이 몇 분 이하여야 하는지 구하기.
  category: "상위 = 기록이 짧은 쪽 → 왼쪽 꼬리 0.2 → 음수 z → 기준 기록"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마라톤은 기록이 작을수록 좋으므로 상위 20% 는 오른쪽 꼬리가 아니라 왼쪽 꼬리 20% 라는 조건 해석이 먼저 필요하다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포에서 상위 비율에 해당하는 기준값 구하기(작을수록 상위인 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기록이 짧을수록 상위라는 점 때문에 꼬리 방향이 뒤집힌다. 이것만 잡으면 0.5 - 0.2 = 0.3 을 표에서 찾아 z 를 음수로 되돌리고 기준 기록을 계산하는 한 줄이다.
    성적·점수 문제와 부호가 반대라는 것이 유일한 함정. 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: '상위 20% = 왼쪽 꼬리 0.2 → 0.5 - 0.2 = 0.3 → z = -0.84 → 160 + (-0.84)(20)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$143.2$분'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균·표준편차와 상위 비율을 바꾼다. 제약: 0.5 - (상위 비율)이 함께 주어지는 표값과 일치해야 하므로 비율과 z 를 한 쌍으로 묶어 정한다(0.2 ↔ 0.84 · 0.1 ↔ 1.28 · 0.3 ↔ 0.52).'
    creative: '(1) 성적처럼 클수록 상위인 값으로 바꾸면 부호 함정이 사라져 ★1~2 (2) "하위 20%"로 바꾸면 부호가 다시 뒤집힌다(★2 유지) (3) 참가자 수를 주고 상위 몇 명까지인지 인원으로 묻기(0493 결합 · ★3) (4) 기준 기록을 주고 상위 몇 %인지 묻는 역방향(★2).'
```

```yaml
- id: RPM-PROB-0496
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이항분포 B(n, 1/2)에서 분산이 9 일 때 n 을 구한 뒤 표준정규분포표로 P(X <= 24) 구하기. 5지선다.
  category: "분산 조건으로 n 결정 → 이항 정규근사 → 한쪽 꼬리 확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 분산으로 n 을 정한 뒤 정규근사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    npq = 9 에 p = 1/2 를 넣어 n 을 구하는 것이 앞단계이고, 그다음은 0473 과 같은 한쪽 꼬리 계산이다.
    n 이 미지수로 한 번 등장할 뿐 도구는 모두 표준이라 통찰 없음. 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: 'npq = 9, p = 1/2 → n → m = n/2, s = 3 → (24 - m)/3 → 0.5 + 표값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-0496.png
  latex: latex-bank/rpm-prob/items/0496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 것을 분산 대신 표준편차나 평균으로 바꿀 수 있고 p 도 1/3·1/4 로 바꿀 수 있다. 제약: n 이 자연수로 떨어져야 하고(p = 1/2 이면 분산은 n/4 이므로 4 의 배수), 묻는 값이 평균에서 표준편차의 0.5 배수만큼 떨어져야 한다.'
    creative: '(1) 평균과 분산을 함께 주고 n 과 p 를 모두 구하게 하면 연립이 되어 ★3 (2) 구간 확률로 바꾸기(★2 유지) (3) 확률을 주고 기준값을 묻기(0479 골조 · ★3) (4) 분산 조건을 V(2X + 3) 같은 일차변환으로 감싸면 한 단계 늘어 ★3.'
```

```yaml
- id: RPM-PROB-0497
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    O 또는 X 로 답하는 256문제에 임의로 답할 때 120문제 이상 맞힐 확률을 표준정규분포표로 구하기. 5지선다.
  category: "이항분포 정규근사 → 기준이 평균보다 작은 한쪽 꼬리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기(한쪽 꼬리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O/X 이므로 p = 1/2 이고 B(256, 1/2)에서 평균과 표준편차가 바로 나온다. 기준 120 이 평균보다 작아 z 가 음수가 되고 0.5 에 표값을 더한다.
    0473 과 같은 골조에 부호만 반대. 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: 'B(256, 1/2) → m = 128, s = 8 → (120 - 128)/8 = -1 → 0.5 + 표값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: crop:fig-0497.png
  latex: latex-bank/rpm-prob/items/0497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '문항 수와 기준 개수를 바꾼다. 제약: p = 1/2 이면 표준편차는 (n 의 제곱근)/2 이므로 n 을 제곱수의 4배(256 · 400 · 576)로 두면 정수가 된다. 기준 개수는 평균에서 표준편차의 0.5 배수만큼 떨어지게 정한다.'
    creative: '(1) 오지선다로 바꾸면 p = 1/5 이라 n 을 다시 맞춰야 한다(★2 유지) (2) 구간으로 묻기(★2) (3) 맞힌 개수가 아니라 점수(맞으면 +5, 틀리면 -2)로 바꾸면 일차식 환원이 붙어 ★3 (4) 확률을 주고 기준 문항 수를 묻기(0479 골조 · ★3).'
```

```yaml
- id: RPM-PROB-0498
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    주사위를 던져 5 이상이면 1000원을 받고 4 이하면 300원을 내는 게임을 162번 했을 때 순이익이 25500원 이상일 확률 구하기.
  category: "금액을 성공 횟수의 일차식으로 → 횟수 범위로 환원 → 이항 정규근사"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상금에서 벌금을 뺀 금액을 성공 횟수 X 의 일차식으로 세우고 금액 조건을 X 의 부등식으로 되돌려야 표준화가 가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 금액의 일차식 환원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    5 이상의 눈이 나올 확률이 1/3 이므로 X 는 B(162, 1/3)을 따른다. 순이익은 1000X 에서 300(162 - X)를 뺀 일차식이고, 금액 조건을 X 의 부등식으로 옮긴 뒤 표준화한다.
    금액 단위와 횟수 단위를 섞으면 바로 틀리는 T-단위 함정이 본질. 0476 과 같은 골조라 ★3.
  tier: star_3
  mechanism_primary: '순이익 = 1000X - 300(162 - X) → 금액 조건을 X 범위로 → B(162, 1/3), m = 54, s = 6 → z = 0.5 → 0.5 - 표값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.3085$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0498.png
  latex: latex-bank/rpm-prob/items/0498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상금·벌금 금액과 시행 횟수, 기준 금액을 바꾼다. 제약: n(1/3)(2/3)이 완전제곱이어야 하고(162 → 36), 기준 금액을 일차식으로 되돌린 X 가 정수이며 평균에서 표준편차의 0.5 배수만큼 떨어져야 한다. 기준 금액은 반드시 X 쪽에서 역산한다.'
    creative: '(1) 벌금을 없애면 금액이 단순 비례가 되어 환원이 약해지고 ★2 (2) "손해를 볼 확률"로 기준을 0 으로 두기(★3 유지) (3) 확률을 주고 기준 금액을 묻기(0482 골조 · ★3) (4) 세 가지 결과(눈에 따라 금액 3종)로 늘리면 이항분포가 깨져 골조가 성립하지 않는다.'
```

```yaml
- id: RPM-PROB-0499
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 다른 세 정규분포에서 정의된 세 확률 a, b, c 의 대소 관계 구하기. 5지선다.
  category: "세 확률을 같은 방향 꼬리로 환원 → z 대소와 확률 대소의 역전 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "c 만 이하 방향이므로 표준정규분포의 대칭을 써서 같은 크기의 이상 방향 꼬리로 바꿔야 세 값을 한 자로 잴 수 있다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "같은 방향 꼬리확률은 z 가 클수록 작으므로 z 의 대소를 확률의 대소로 뒤집어 읽는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "표준화 값의 대소로 여러 정규분포의 확률 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표가 주어지지 않으므로 값을 구하지 말고 z 만 비교하라는 뜻이다. 세 확률 중 하나가 반대 방향이라 대칭으로 뒤집어 방향을 통일하는 것이 첫 관문이다.
    그다음 z 가 클수록 꼬리확률이 작다는 역전 관계를 쓰면 순서가 정해진다. 이 역전을 놓치면 정확히 반대 답을 고른다.
    시험 구역 ★2 출발, 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: '세 확률을 각각 표준화 → 이하 방향은 대칭으로 이상 방향으로 뒤집기 → z 대소의 역순이 확률 대소'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 정규분포의 평균·표준편차와 세 기준값을 바꾼다. 제약: 세 표준화 값이 서로 달라야 하고(같으면 등호가 들어간 선택지가 답이 된다), 적어도 하나는 반대 방향 부등호로 두어야 대칭 환원 단계가 살아난다. z 가 간단한 유리수로 떨어지게 기준값을 잡는다.'
    creative: '(1) 세 값 중 둘을 같게 만들어 등호가 들어간 답으로 설계하기(★3 유지) (2) 방향을 모두 같게 두면 대칭 환원이 사라져 ★2 (3) 표를 주고 실제 값을 계산하게 하면 통찰이 사라진다 — 표를 주지 않는 것이 설계 (4) 네 번째 확률을 미지수 분포로 두고 특정 순위가 되도록 평균 범위를 묻기(★4).'
```

```yaml
- id: RPM-PROB-0500
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    스트라이크 비율이 1/3 인 투수가 1458번 던질 때 스트라이크 개수가 a 이상일 확률이 0.0668 인 상수 a 구하기. 5지선다.
  category: "이항 정규근사 → 꼬리 확률에서 z 역조회 → 기준 개수 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 꼬리확률 0.0668 을 0.5 - 0.4332 로 분해해 표에서 z 를 거꾸로 읽고 기준 개수를 복원한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 활용; 확률에서 미지수 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B(1458, 1/3)에서 평균과 표준편차를 구하는 데 수가 커 계산 부담이 있다. 확률이 0.5 보다 작으므로 기준이 평균 오른쪽이고, 0.5 에서 빼 표값을 만들어 z 를 읽는다.
    0479 와 같은 골조이며 숫자만 커졌다. 시험 구역 ★2~3 출발, 통찰 1개·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: 'B(1458, 1/3) → m = 486, s = 18 → 0.0668 = 0.5 - 0.4332 → z = 1.5 → a = m + 1.5s'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '투구 수와 비율, 목표 확률을 바꾼다. 제약: n(1/3)(2/3)이 완전제곱이어야 하고(1458 → 324), 목표 확률은 0.5 - (표값) 꼴이어야 한다. 숫자가 커지면 계산 마찰만 늘고 통찰은 그대로이므로 n 을 무작정 키우지 않는다.'
    creative: '(1) "a 이하일 확률"로 바꾸면 z 가 음수가 되어 부호 함정 추가(★3 유지) (2) 양쪽 꼬리 조건으로 바꾸기(0481 골조 · ★3) (3) 스트라이크 개수 대신 볼넷 수 같은 여집합 변수로 서술하면 0475 식 변환이 앞에 붙어 ★4 (4) 확률 대신 "상위 몇 %"로 표현을 바꾸면 조건 해석이 한 겹 더해진다.'
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0501
  page: 84
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x) = kx (0 <= x <= 4) 를 확률밀도함수로 갖는 X 에 대해, t 에 대한 이차방정식이 실근을 가질 확률 구하기(서술형).
  category: "판별식 조건 → X 의 범위 → 확률밀도함수 넓이"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식이 실근을 가질 조건(판별식)이라는 다른 단원의 도구로 확률변수 X 의 범위를 먼저 만들어야 확률 계산으로 넘어갈 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률밀도함수 + 이차방정식의 실근 조건 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 전체 넓이 1 로 k 를 정하고, 다음으로 판별식이 0 이상이라는 조건을 X 에 대한 부등식으로 바꾼다. 이때 X 의 정의역이 0 이상이라 음수 쪽 해는 버려야 하는 것이 T-범위 함정이다.
    남은 범위의 확률은 여사건(작은 삼각형)으로 계산하면 한 줄이다.
    서술형 구역 ★3 출발, 단원 결합 통찰 1개로 유지.
  tier: star_3
  mechanism_primary: '전체 넓이 1 로 k → 판별식 조건을 X 의 범위로 → 정의역 안에서만 남기기 → 여사건 넓이로 확률'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{15}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정의역 끝(4)과 이차방정식의 계수를 바꾼다. 제약: 판별식에서 나오는 X 의 경계가 정의역 안쪽에 있어야 문제가 성립하고, 그 경계에서의 넓이가 간단한 분수가 되도록 정의역을 정한다. 경계가 정의역 밖으로 나가면 확률이 0 이나 1 이 되어 문제가 죽는다.'
    creative: '(1) 이차방정식을 "허근을 가질 확률"로 뒤집기(여사건 · ★3 유지) (2) 확률밀도함수를 상수함수(균등분포)로 바꾸면 넓이 계산이 쉬워져 ★2 (3) 조건을 "두 근이 모두 양수"로 바꾸면 근과 계수의 관계까지 들어와 조건이 여러 개가 되고 ★4 (4) 이차방정식 대신 절댓값 부등식이 실수해를 가질 조건으로 바꾸면 결합 단원이 달라지지만 ★ 는 유지.'
```

```yaml
- id: RPM-PROB-0502
  page: 84
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    Y 의 일차변환으로 주어진 평균·표준편차 조건과 두 확률의 부등식 조건에서 실수 k 의 값의 범위 구하기(서술형).
  category: "일차변환으로 Y 의 모수 결정 → 두 확률 부등식을 표준화 값의 부등식으로"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률의 대소를 표준화 값의 대소로 옮길 때 한쪽은 이하, 다른 쪽은 이상 방향이라 대칭으로 방향을 맞춘 뒤 부등호를 세워야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일차변환으로 모수 구하기 + 확률 부등식을 표준화 부등식으로"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 ㈎ 에서 E(2Y - 1)과 표준편차의 성질로 Y 의 평균과 표준편차가 바로 나온다(표준편차에는 절댓값이 붙는다는 점이 함정).
    조건 ㈏ 는 값이 아니라 대소이므로 양변을 같은 방향의 표준화 확률로 만든 뒤 z 부등식을 세운다. 부등호 방향을 뒤집지 않도록 방향 통일이 핵심.
    서술형 구역 ★3 출발, 통찰 1개로 유지.
  tier: star_3
  mechanism_primary: 'E(2Y-1)=9, s(2Y-1)=2 → Y 의 평균·표준편차 → 두 확률을 같은 방향으로 맞춰 z 부등식 → k 의 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k>7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'X 의 평균·표준편차, 일차변환의 계수, 조건 ㈏ 의 기준값을 바꾼다. 제약: 일차변환에서 나온 Y 의 표준편차가 양수로 떨어져야 하고, 두 표준화 값의 비교가 간단한 정수 z 에서 일어나도록 기준값을 잡아야 답이 깔끔한 부등식으로 나온다.'
    creative: '(1) 부등호를 등호로 바꾸면 값 하나를 구하는 ★2 (2) 일차변환 계수를 음수로 두면 표준편차의 절댓값 처리와 부등호 뒤집힘이 동시에 걸려 ★4 (3) 조건 ㈏ 를 구간 확률 비교로 바꾸면 폭까지 비교해야 해 ★4 (4) k 의 범위 대신 그 범위 안 정수 k 의 개수를 묻게 하면 마무리 한 단계만 추가(★3 유지).'
```

```yaml
- id: RPM-PROB-0503
  page: 84
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    정규분포를 따르는 X 에 대해 P(60 <= X <= a) = 0.9759 를 만족시키는 상수 a 를 표준정규분포표로 구하기(서술형).
  category: "구간을 평균에서 쪼개 알려진 쪽 표값을 빼고 남은 확률로 z 역조회"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 평균을 걸치므로 전체 확률에서 왼쪽 몫(알려진 끝의 표값)을 빼야 오른쪽 몫이 나오고, 그 값을 표에서 거꾸로 찾아 a 를 복원한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포에서 구간 확률로부터 한쪽 끝 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    알려진 끝 60 을 표준화하면 음수 z 가 나오고 그 표값이 왼쪽 몫이다. 주어진 전체 확률에서 이를 빼면 오른쪽 몫이 되고, 표를 거꾸로 읽어 z 를 얻은 뒤 a 를 복원한다.
    구간이 평균을 걸친다는 점을 놓치고 한 번에 표를 찾으려 하면 막힌다. 서술형 구역 ★3, 통찰 1개로 유지.
  tier: star_3
  mechanism_primary: '(60-100)/20 = -2 → 왼쪽 몫 표값 → 0.9759 - 표값 = 오른쪽 몫 → 표에서 z 역조회 → a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$160$'
  answer_source: "답지"
  figure: crop:fig-0503.png
  latex: latex-bank/rpm-prob/items/0503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평균·표준편차와 알려진 끝값, 주어진 확률을 바꾼다. 제약: 알려진 끝의 z 와 구하려는 z 가 모두 표에 있어야 하므로 두 z 를 먼저 정하고 거기서 확률과 끝값을 역산한다. 구간은 반드시 평균을 걸치게 둔다(한쪽에만 두면 뺄셈 구조가 달라진다).'
    creative: '(1) 구간을 평균 한쪽에만 두면 두 표값의 차가 되어 쪼개기 구조가 바뀐다(★2~3) (2) 미지수를 왼쪽 끝에 두기(부호만 반대 · ★3 유지) (3) 대칭 구간임을 확률로 암시하면 0480 골조가 되어 ★3 (4) 이항분포로 감싸면 미지수 역산 유형(0479)과 결합해 ★4.'
```

```yaml
- id: RPM-PROB-0504
  page: 84
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    동전 2개를 동시에 던지는 시행을 192번 반복할 때 둘 다 앞면이 나오는 횟수가 54 이상 60 이하일 확률 구하기(서술형).
  category: "동시 사건의 확률 → 이항분포 → 정규근사 → 구간 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사로 확률 구하기(기본형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    동전 2개가 모두 앞면일 확률 1/4 을 먼저 구하면 그다음은 0472·0473 과 완전히 같은 절차다. 구간 양끝이 모두 평균 오른쪽이라 두 표값을 뺀다.
    [분류 이슈] 서술형 주관식 구역은 ★3 출발이지만 통찰이 없고 이 범위에서 이미 ★2 로 평가한 기본 골조를 그대로 쓴다. 서술 형식 때문에 ★ 를 올리지 않고 ★2 로 두며 기록한다.
  tier: star_2
  mechanism_primary: 'p = 1/4 → B(192, 1/4) → m = 48, s = 6 → z = 1, 2 → 두 표값의 차'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.1359$'
  answer_source: "답지"
  figure: crop:fig-0504.png
  latex: latex-bank/rpm-prob/items/0504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '동전 개수(2개 → 3개면 p = 1/8)와 시행 횟수, 구간 양끝을 바꾼다. 제약: npq 가 완전제곱이어야 하고(192·(1/4)(3/4) = 36), 양끝이 평균에서 표준편차의 0.5 배수만큼 떨어져야 한다.'
    creative: '(1) 구간을 평균 양쪽에 걸치게 두면 두 표값을 더하는 형태로 바뀐다(★2 유지) (2) "적어도 하나가 앞면"으로 바꾸면 p = 3/4 이 되어 n 을 다시 맞춰야 한다 (3) 앞면 횟수로 점수를 매기면 일차식 환원이 붙어 ★3 (4) 확률을 주고 구간 끝을 묻기(★3).'
```

### 실력 Up

```yaml
- id: RPM-PROB-0505
  page: 84
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    분산이 같은 두 정규분포의 확률밀도함수에 대해 f(a) = f(3a) = g(2a), P(Y <= 2a) = 0.6915 일 때 P(0 <= X <= 3a) 구하기. 5지선다.
  category: "함숫값이 같은 두 점 → 평균은 그 중점 → 분산 일치로 g 의 평균 결정 → 확률로 표준편차 → 표 조회"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f(a) = f(3a) 는 정규분포 곡선이 평균에 대해 좌우 대칭이라는 뜻이므로 X 의 평균이 두 점의 중점이라는 결론이 곧바로 나온다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분산이 같아 두 곡선의 모양이 합동이므로 g(2a) 가 f(a) 와 같다는 것은 g 의 평균이 2a 에서 같은 거리만큼 떨어져 있다는 뜻이고, 주어진 확률이 0.5 보다 커서 어느 쪽인지가 정해진다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(Y <= 2a) = 0.6915 를 표에서 거꾸로 읽어 a 와 표준편차의 비를 확정한 뒤에야 X 쪽 확률을 표준화할 수 있다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "확률밀도함수의 함숫값 조건으로 두 정규분포의 평균·표준편차 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건이 모두 함숫값과 확률로만 주어지고 평균·표준편차는 하나도 직접 주어지지 않는다. 대칭으로 X 의 평균을 잡고, 합동인 두 곡선에서 g 의 평균 위치를 잡고, 확률로 표준편차를 a 의 배수로 확정하는 세 단계를 모두 통과해야 마지막 표준화가 가능하다.
    [분류 이슈] 통찰 3개에 I-SYM 이 포함돼 ★5 의 형식 조건(통찰 3개 이상 + SC/VF/SYM/XU)은 충족하지만, 통찰 조합이 시판에 흔한 표준 기출형이라 novelty_score 0 이고 실력 Up 출발점이 ★4 이므로 ★4 로 둔다. 기록만 한다.
  tier: star_4
  mechanism_primary: 'f(a)=f(3a) → X 의 평균 = 2a → 분산 일치 + g(2a)=f(a) → g 의 평균 = a → P(Y<=2a)=0.6915 로 표준편차 = 2a → P(0<=X<=3a) 표준화'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: crop:fig-0505.png
  latex: latex-bank/rpm-prob/items/0505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '함숫값을 맞추는 두 점(a, 3a)과 g 쪽 점(2a), 주어진 확률을 바꾼다. 제약: 분산이 같다는 조건이 있어야 두 곡선이 합동이 되어 g 의 평균을 잡을 수 있으므로 이 조건은 고정한다. 주어진 확률은 0.5 + (표값) 꼴이어야 하고, 마지막에 묻는 구간의 표준화 값도 표 안에 들어오도록 함께 역산한다.'
    creative: '(1) P(Y <= 2a) 를 0.5 보다 작게 주면 g 의 평균이 반대쪽이 되어 답만 달라진다(★4 유지) (2) 분산이 같다는 조건을 빼고 g 쪽에 별도 확률 조건을 주면 미지수가 늘어 ★5 후보 (3) f(a) = f(3a) 를 그래프로 보여 주면 대칭 통찰이 눈에 보여 ★3 으로 내려간다 — 이 문항의 ★ 를 만드는 지점이 여기다 (4) 마지막을 확률이 아니라 a 의 값으로 바꾸면 조건이 하나 더 필요하다.'
```

```yaml
- id: RPM-PROB-0506
  page: 84
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    Y = 2X - 24 인 두 정규분포 곡선과 두 직선으로 둘러싸인 두 넓이 S1, S2 의 차 구하기.
  category: "일차변환으로 Y 의 모수 → 넓이 차를 두 곡선 아래 넓이의 차로 → 확률의 차"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "두 곡선 사이의 도형 넓이를 그대로 구하려 하지 말고 같은 구간에서 f 아래 넓이와 g 아래 넓이의 차, 즉 두 확률의 차로 옮기는 기하-확률 표현 전환"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S1 과 S2 는 교점을 경계로 붙어 있어 차를 만들면 교점 좌표가 상쇄되고 구간 양끝(24 와 m)만 남는다는 조건 통합"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "정규분포 곡선 사이 넓이를 확률의 차로 환원하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    일차변환에서 Y 의 평균과 표준편차가 나오고 그림의 m 이 확정된다. 핵심은 S1 - S2 를 직접 구하지 않고, 두 넓이가 교점을 사이에 두고 맞붙어 있다는 점을 써서 24 부터 m 까지 구간에서 f 아래 넓이와 g 아래 넓이의 차로 바꾸는 것이다. 교점의 좌표를 몰라도 답이 나온다.
    그다음은 두 확률을 각각 표준화해 표에서 읽으면 끝. 실력 Up 구역 ★4 출발, 통찰 2개(RT depth 3 포함)로 유지.
  tier: star_4
  mechanism_primary: 'Y = 2X - 24 → Y 의 평균 m 과 표준편차 → S1 - S2 = P(24<=X<=m) - P(24<=Y<=m) → 각각 표준화해 표 조회'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0.4772$'
  answer_source: "답지"
  figure: crop:fig-0506.png
  latex: latex-bank/rpm-prob/items/0506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'X 의 평균·표준편차와 일차변환의 계수, 왼쪽 직선의 위치(24)를 바꾼다. 제약: 두 표준화 값이 모두 표 안의 z 가 되도록 왼쪽 직선 위치를 역산해서 정하고, 그림의 배치(f 의 봉우리가 왼쪽, 교점이 두 직선 사이)가 유지되도록 평균과 표준편차의 대소를 지킨다. 그림 라벨(24, m, S1, S2, f, g)은 고정한다.'
    creative: '(1) 오른쪽 직선을 m 이 아닌 다른 값으로 두면 상쇄가 덜 깔끔해지지만 골조는 유지(★4) (2) S1 + S2 를 묻게 하면 교점 좌표가 필요해져 이 도구로는 풀리지 않는다 — 반드시 차로 묻는다 (3) 일차변환 계수를 미지수로 두고 넓이 차를 주면 역방향이 되어 ★5 후보 (4) 두 곡선의 분산을 같게 하면 곡선이 평행이동 관계가 되어 대칭 상쇄가 더 강해지고 ★3.'
```

```yaml
- id: RPM-PROB-0507
  page: 84
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    음료 한 병의 양이 정규분포를 따를 때 불량 판정 기준으로 불량률을 구하고, 525병 중 불량품이 63병 이상일 확률 구하기.
  category: "정규분포로 불량률 p → 그 p 로 이항분포 → 다시 정규근사"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "불량 판정 기준을 한 병에 대한 확률로 옮겨 이항분포의 p 를 만든다 — 문제에 p 가 직접 주어져 있지 않다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "앞에서 구한 p 를 다시 525번 독립시행의 이항분포 모수로 넘겨 정규근사를 한 번 더 적용하는 이중 구조를 스스로 세워야 한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정규분포로 구한 확률을 이항분포의 p 로 넘겨 다시 정규근사하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정규분포를 두 번 쓰는데 역할이 다르다. 처음은 한 병의 양 분포에서 불량률 p 를 뽑는 데 쓰고, 두 번째는 525병 중 불량품 수라는 이항분포를 근사하는 데 쓴다. 이 이중 구조를 세우는 것이 이 문항의 전부다.
    병 수와 mL 라는 서로 다른 단위를 섞으면 바로 틀린다. 두 개의 표값이 따로 주어진 것도 두 단계가 있다는 신호다.
    실력 Up 구역 ★4 출발, 통찰 2개로 유지.
  tier: star_4
  mechanism_primary: '한 병 양 N(250, 5^2) → P(X <= 245) = p → 불량품 수 ~ B(525, p) → m, s → 표준화 → 표 조회'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0.99$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한 병의 평균·표준편차와 불량 기준, 병 수, 불량품 기준 개수를 바꾼다. 제약: 1단계 z 와 2단계 z 가 모두 주어진 표값에 있어야 하고, 1단계에서 나온 p 로 계산한 npq 가 완전제곱에 가까워 표준편차가 깔끔해야 한다(525 x 0.16 x 0.84 처럼 소수 표준편차까지 허용할지 먼저 정한다). 두 단계를 각각 역산해 맞물리게 설계한다.'
    creative: '(1) p 를 직접 주면 이중 구조가 사라져 0473 수준 ★2 로 떨어진다 — 이 문항의 ★ 를 만드는 지점 (2) 2단계를 "불량품이 a 병 이상일 확률이 0.99 가 되는 a"로 바꾸면 역조회가 더해져 ★4~5 (3) 불량 기준을 양쪽(너무 적거나 너무 많음)으로 두면 1단계 p 계산이 두 꼬리가 되어 ★4 유지 (4) 1단계를 이항분포, 2단계를 정규분포로 뒤집으면 골조가 성립하지 않는다.'
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 2 · ★2 16 · ★3 14 · ★4 4 · ★5 0
- 통찰형 25 · 절차형 11 · premium 0
- 통찰 유형 분포: I-EQV 12 · I-BW 6 · I-SYM 5 · I-RT 2 · I-CON 2 · I-MI 1 · I-XU 1 (총 29개 라벨 / 통찰형 25문)
- type_hint 상위 5:
  1. 「이항분포의 정규분포 근사 활용; 미지수 역산·일차식 환원」 8 (0475 · 0476 · 0479 · 0480 · 0481 · 0482 · 0498 · 0500)
  2. 「이항분포의 정규분포 근사로 확률 구하기(기본·한쪽 꼬리)」 5 (0472 · 0473 · 0474 · 0497 · 0504)
  3. 「표준화 값으로 서로 다른 정규분포 비교」 4 (0477 · 0478 · 0494 · 0499)
  4. 「확률밀도함수의 넓이로 상수·확률·미지수 구하기」 4 (0483 · 0484 · 0485 · 0501)
  5. 「정규분포에서 확률로부터 기준값 역산」 3 (0491 · 0495 · 0503)
- 그림: 21문 (0472 · 0473 · 0474 · 0475 · 0477 · 0479 · 0480 · 0481 · 0482 · 0486 · 0490 · 0491 · 0492 · 0493 · 0496 · 0497 · 0498 · 0503 · 0504 · 0505 · 0506). 이 중 18문은 표준정규분포표 크롭이라 골조에 영향이 없고, 실제로 내용을 읽어야 하는 그림은 0477(과목별 평균·표준편차 표) · 0486(두 과목 표와 곡선 선택지) · 0506(두 곡선과 S1 · S2 배치) 셋이다.
- 대상층: 하위권 2 · 중하위권 9 · 중위권 15 · 중상위권 7 · 상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0477 | 「유형 UP 12」 구역이라 ★3 출발이나 요구 단계는 표준화 세 번뿐(M_total 4 · 표 불필요) → ★2 로 기록 | ★2 / ★3 |
| RPM-PROB-0478 | 같은 구역 + 난이도 「상중」으로 ★3 출발이나 0477 과 골조가 같고 분수 비교만 추가 → ★2 로 기록 | ★2 / ★3 |
| RPM-PROB-0480 | 구역 신호(유형 UP → ★3)와 난이도 표시(중 → ★2)가 서로 어긋남. 대칭 간파 통찰 1개와 M_total 7 을 근거로 ★3 채택 | ★2 / ★3 |
| RPM-PROB-0481 | 통찰 2개(대칭 반 나누기 + 표 역조회)로 +1 후보지만 둘 다 이 유형의 표준 도구라 ★3 유지 | ★3 / ★4 |
| RPM-PROB-0482 | 통찰 2개지만 0476(일차식 환원) + 0479(역조회)의 단순 결합이고 둘 다 이미 ★3 이라 결합만으로 올리지 않음 | ★3 / ★4 |
| RPM-PROB-0504 | 「서술형 주관식」 구역은 ★3 출발이나 통찰 0 · 0472/0473 과 동일한 기본 골조 → 서술 형식만으로 올리지 않고 ★2 | ★2 / ★3 |
| RPM-PROB-0505 | 통찰 3개 + I-SYM 으로 ★5 의 형식 조건은 충족하나 통찰 조합이 시판에 흔해 novelty_score 0, 실력 Up 출발점대로 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형.** (1) 「이항분포 정규근사 — 확률 구하기」와 (2) 「이항분포 정규근사 — 미지수 역산」은 계산 방향이 반대라 반드시 분리한다(표를 순방향으로 읽는가 역방향으로 읽는가). (3) 「점수·금액의 일차식 환원」은 0476 · 0482 · 0498 이 같은 골조를 반복하므로 (1)·(2)의 하위 변형이 아니라 독립 유형으로 세우는 편이 변형 생산에 유리하다. (4) 「확률밀도함수의 넓이」(0483~0485 · 0501)는 정규분포와 도구가 완전히 달라 별도 유형군이다.
- **통합해도 될 유형.** 「유형 UP 12 표준화하여 확률 비교하기」(0477 · 0478)와 「서로 다른 정규분포의 확률 대소 비교」(0494 · 0499)는 결국 z 의 대소 비교 하나로 묶인다 — 전자는 표 없이 z 만, 후자는 대칭 환원이 한 겹 더해진 정도라 같은 유형의 depth 차이로 두면 된다.
- **★4 이상 슬롯 후보.** 이 범위에서 ★4 를 만든 장치는 네 가지다 — 모수를 직접 주지 않고 조건 연립으로 정하게 하기(0490 · 0505), 넓이를 확률로 옮기기(0506), 정규분포와 이항분포를 이중으로 겹치기(0507). 카탈로그에서 ★4·★5 변별 슬롯을 설계할 때 이 네 장치를 축으로 잡는다.
- **숫자 변형 공통 제약.** 이 단원 전체에서 npq 완전제곱 · 표준화 값이 표에 있는 z(0.5 단위) · 확률은 0.5 ± 표값 꼴이라는 세 조건이 거의 모든 문항에 걸린다. 변형 생성기를 만든다면 문항별 제약이 아니라 단원 공통 제약으로 먼저 구현하는 것이 효율적이다.
