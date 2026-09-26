---
name: mechanism-데이터-RPM-CALC2-01-p4
description: RPM 미적분Ⅱ 01 수열의 극한(4/4 · 유형 16 활용 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 01 수열의 극한
  unit_code: CALC2-01
  part: "4/4"
  extract_range: "19~23쪽 · 0107~0142"
  total_problems: 36
  unit_total: 142
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 01 수열의 극한 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 01 수열의 극한 단원의 마지막 범위(19~23쪽 · 0107~0142 · 36문항)를 다룬다. 구역은 「유형 16 수열의 극한의 활용」(6문 · 대표문제 1 · 난이도 중하~상중 · 그림 5) → 「시험에 꼭 나오는 문제」(23문 · 난이도 표시 없음 · 중요 4 · 교육청/평가원/수능 기출 3 · 그림 1) → 「서술형 주관식」(4문) → 「실력 Up」(3문 · 그림 1) 순이다. RPM 은 구역이 곧 난이도 층이므로 출발점을 유형(level 없음 ★2 · 중하 ★1~2 · 중 ★2 · 상중 ★3) · 시험에 꼭 나오는 문제(★2~3) · 서술형(★3) · 실력 Up(★4) 으로 두고 M_total·통찰로 ±1 조정했다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

판정 메모: `depth_score` 는 effective_depth 의 합. `insight_type` 은 depth 합이 2 이상일 때만 통찰형이고 단일 d1 통찰은 절차형으로 둔다(견본 준거). −1 조정은 통찰 없이 M_total 4 이거나, M_total 5 에서 단계·함정이 모두 최소(s=1, t=1)일 때만 적용했다. 「시험에 꼭 나오는 문제」는 출발 범위 ★2~3 안에서 M_total 7 이상 또는 통찰(depth 2 / 기출+통찰)이 있으면 ★3, 그 외 ★2 를 기본으로 했다. 유형 16(활용)의 도형→식 전환은 좌표를 바로 읽는 경우는 절차로, 교점·접선·닮음·접함 같은 기하 사실을 거쳐야 하는 경우만 I-RT 로 라벨링했다.

## 문항 데이터

### 유형 16 수열의 극한의 활용

```yaml
- id: RPM-CALC2-0107
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    함수 y=√x 위의 점 P_n(2n, √(2n)) 에서 x축에 내린 수선의 발이 Q_n 일 때 lim(OP_n − OQ_n) 의 값. 주관식. 그림 있음.
  category: "좌표로 길이 표현 → 근호 차 유리화 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 좌표로 주어진 길이·거리(근호 차 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OP_n=√(4n²+2n), OQ_n=2n 을 그림에서 바로 읽고 차를 유리화하면 2n/(√(4n²+2n)+2n) → 1/2. 좌표가 주어져 도형→식 전환이 자명하므로 통찰 없음. 유형 대표(level 없음) ★2 출발 · M_total 5 이나 유리화 단계가 있어(s=2) −1 미적용 → ★2.
  tier: star_2
  mechanism_primary: "P_n 좌표 → OP_n=√(4n²+2n), OQ_n=2n → 차 유리화 → 2n/(√(4n²+2n)+2n) → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0107.png"
  latex: latex-bank/rpm-calc2/items/0107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=√(mx) 로 바꾸면 답 m/2 · 점의 x좌표 배수 k(P_n(kn, √(mkn))) 는 답에 영향 없음. 제약: 근호 안이 n 의 이차식이고 최고차 계수가 완전제곱이어야 유리화 뒤 유한값 · 그림 라벨 P_n, Q_n, O 고정."
    creative: "(1) OP_n − P_nQ_n 처럼 다른 두 길이의 차로 바꾸기(★2 유지) (2) 곡선을 y=√(x²+x) 로 바꿔 OP_n² 이 사차식이 되게 하면 계산 부담만 상승(★2~3 · 질 저하 주의) (3) 삼각형 OP_nQ_n 의 넓이 비 lim S_{n+1}/S_n 으로 바꾸면 골조가 최고차 비교로 바뀜(★2)."
```

```yaml
- id: RPM-CALC2-0108
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=3x² 위의 두 점 P(n, f(n)), Q(n+1, f(n+1)) 사이의 거리를 a_n 이라 할 때 lim a_n/n 의 값. 주관식.
  category: "두 점 사이의 거리 → 근호 안 정리 → n 으로 나눠 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 좌표로 주어진 길이·거리(근호 안 최고차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(n+1)−f(n)=6n+3 이므로 a_n=√(1+(6n+3)²) 한 줄, a_n/n=√(1/n²+(6+3/n)²) → 6. 유리화 없이 근호 안 최고차만 보면 끝. 통찰 없음 · M_total 4 · 벤더 중하(★1~2) → ★1.
  tier: star_1
  mechanism_primary: "f(n+1)−f(n)=6n+3 → a_n=√(1+(6n+3)²) → a_n/n → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=ax² 의 a 와 두 점의 x좌표 간격 d(n, n+d) → 답 2ad. 제약: 나누는 차수가 n 이어야 유한값(n² 으로 나누면 0) · 답이 정수가 되게 a, d 선택."
    creative: "(1) 두 점을 (n, f(n)), (2n, f(2n)) 처럼 비례 간격으로 두면 a_n/n² 형(★1~2) (2) 곡선을 y=√x 로 바꾸면 근호 차 유리화가 필요(★2 · 0134 골조) (3) 거리 대신 선분 PQ 의 기울기의 극한을 물으면 발산 판정 ★1."
```

```yaml
- id: RPM-CALC2-0109
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    직선 2x+3y=8 이 x축과 만나는 점 A, 직선 y=(n/(3n+1))x 와 만나는 점 P_n 에 대해 삼각형 OAP_n 의 넓이 S_n 의 극한. 주관식. 그림 있음.
  category: "교점 좌표 → 넓이 = ½·OA·(P_n 의 y좌표) → 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 넓이를 밑변 OA=4 와 높이(교점 P_n 의 y좌표)로 읽어 교점의 y 좌표만 구하면 되도록 도형을 좌표식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 교점·접선·넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A(4,0). 두 직선을 연립하면 y_n=8n/(9n+2) 이고 S_n=½·4·y_n=16n/(9n+2) → 16/9. 넓이를 밑변 OA·높이 y_n 으로 읽는 표현 전환 1개(RT d1) 뒤 유리식 극한. 벤더 중 ★2 출발 · M_total 6 → ★2 유지. 서술형 태그는 답안 형식 신호.
  tier: star_2
  mechanism_primary: "A(4,0) → 두 직선 연립으로 y_n=8n/(9n+2) → S_n=2y_n → 16/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16}{9}$'
  answer_source: "해설"
  figure: "crop:fig-0109.png"
  latex: latex-bank/rpm-calc2/items/0109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 2x+3y=8(→ A 와 y_n 이 함께 바뀜) · 기울기 n/(3n+1) 의 극한 1/3 을 p/q 로. 답은 ½·OA·(극한 직선 y=(p/q)x 와 2x+3y=8 의 교점 y) 로 검산 가능. 제약: 기울기 극한이 양수여야 삼각형이 제1사분면에 놓임 · 그림 라벨 A, P_n, O 고정."
    creative: "(1) 극한 직선 y=x/3 과의 교점으로 먼저 푸는 지름길이 왜 정당한지 쓰게 하는 설명형(★2) (2) 넓이 대신 OP_n 의 길이 극한(근호 계산 추가 ★2) (3) n·(16/9 − S_n) 의 극한(오차 항)으로 바꾸면 통분·분자 정리 필요 → ★3."
```

```yaml
- id: RPM-CALC2-0110
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원 x²+y²=9ⁿ+1 위의 점 A_n(3ⁿ, 1) 에서의 접선이 x축과 만나는 점 B_n 에 대해 삼각형 A_nOB_n 의 넓이 S_n 의 비 lim S_{n+1}/S_n. 5지선다. 그림 있음.
  category: "접선의 방정식 → B_n → 넓이 = ½·OB_n·1 → 등비형 비의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원 위 점의 접선 3ⁿx+y=9ⁿ+1 로 B_n 의 x좌표를 얻고, 높이를 A_n 의 y좌표 1 로 읽어 넓이를 n 의 식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 교점·접선·넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 3ⁿx+y=9ⁿ+1 에서 OB_n=(9ⁿ+1)/3ⁿ, 높이는 A_n 의 y좌표 1 이라 S_n=(9ⁿ+1)/(2·3ⁿ). S_{n+1}/S_n=(9^{n+1}+1)/(3(9ⁿ+1)) → 3. 접선·넓이의 표현 전환 1개(RT d1) 뒤 등비형 최고차 비교. 벤더 중 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접선 3ⁿx+y=9ⁿ+1 → OB_n=(9ⁿ+1)/3ⁿ → S_n=(9ⁿ+1)/(2·3ⁿ) → S_{n+1}/S_n → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "해설"
  figure: "crop:fig-0110.png"
  latex: latex-bank/rpm-calc2/items/0110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3(원의 9=3² 과 함께 바꿈 · 답은 밑 그대로) · A_n 의 y좌표 1 을 상수 c 로 두면 원은 x²+y²=9ⁿ+c² 이고 답은 여전히 3. 제약: A_n 이 원 위에 있도록 반지름 제곱을 맞출 것 · 선택지에 밑과 그 근처 값을 배치 · 그림 라벨 A_n, B_n, O 고정."
    creative: "(1) 넓이 대신 OB_n − 3ⁿ = 3^{−n} 의 극한(★1) (2) 접선이 y축과 만나는 점 C_n 을 추가해 삼각형 OB_nC_n 넓이 비를 물으면 답 9 · 단계 +1(★2~3) (3) 원 대신 포물선 위 점의 접선(미분)으로 바꾸면 XU(미분) 결합 ★3."
```

```yaml
- id: RPM-CALC2-0111
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 y=(1/2)^{n−1}(x−1) 과 포물선 y=3x(x−1) 이 만나는 두 점 A(1,0), P_n. P_n 에서 x축에 내린 수선의 발 H_n 에 대해 lim P_nH_n/OH_n. 주관식. 그림 있음.
  category: "교점 x좌표(공통인수 x−1) → 길이의 비 = |y_n|/x_n → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P_nH_n/OH_n 을 |y_n/x_n| 즉 직선 OP_n 기울기의 절댓값으로 읽어 3(1−x_n) 으로 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 교점·접선·넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 방정식 (x−1)(3x−(1/2)^{n−1})=0 에서 x_n=(1/2)^{n−1}/3. 비 = |y_n|/x_n = |3(x_n−1)| = 3(1−x_n) 이고 x_n→0 이므로 3. 길이의 비를 좌표 비(기울기)로 읽는 표현 전환 1개(RT d1) · P_n 이 x축 아래라 부호 함정(T-부호). 벤더 중 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "(x−1)(3x−(1/2)^{n−1})=0 → x_n=(1/2)^{n−1}/3 → 비=|y_n|/x_n=3(1−x_n) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "해설"
  figure: "crop:fig-0111.png"
  latex: latex-bank/rpm-calc2/items/0111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=ax(x−1) 의 a(→ 답 a) · 직선 기울기 (1/2)^{n−1} 을 0 으로 수렴하는 다른 등비 rⁿ(0<r<1) 으로. 제약: 기울기가 0 으로 가야 x_n→0 이 되어 답이 a 로 떨어짐 · 기울기가 상수로 수렴하면 x_n 의 극한이 0 이 아니어서 답이 달라짐(의도적 변형 가능) · 그림 라벨 A, P_n, H_n 고정."
    creative: "(1) 기울기를 n/(n+1) 처럼 1 로 수렴하게 두면 x_n→1/3 이고 답 2 — 극한 위치가 바뀌는 변형(★2) (2) 삼각형 OP_nH_n 넓이 × 4ⁿ 의 극한처럼 등비 곱을 섞으면 ★3 (3) 포물선을 삼차 y=3x(x−1)(x−2) 로 바꾸면 인수분해 뒤 근 선택(T-부호) ★3."
```

```yaml
- id: RPM-CALC2-0112
  page: 19
  vendor_label: "유형 16 수열의 극한의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가로 n, 세로 30 인 직사각형 AOC_nB_n 에서 대각선 AC_n 과 선분 B_1C_1 의 교점을 D_n 이라 할 때 lim (AC_n − OC_n)/B_1D_n. 주관식. 그림 있음.
  category: "직선(닮음)으로 B_1D_n=30/n → 대각선 차 유리화 → 0/0 비의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 AB_1D_n 과 AB_nC_n 의 닮음(또는 대각선의 방정식)으로 그림의 길이 B_1D_n 을 30/n 으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 도형의 성질(닮음·접함)로 좌표 유도"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A(0,30), C_n(n,0) 으로 두면 AC_n: y=30−30x/n 이라 D_n 의 y=30(n−1)/n, B_1D_n=30/n. AC_n−OC_n=√(n²+900)−n=900/(√(n²+900)+n). 비 = 30n/(√(n²+900)+n) → 15. 닮음(또는 직선식)으로 B_1D_n 을 얻는 표현 전환 1개(RT d1) 뒤 유리화 · 0/0 꼴 비 정리. 벤더 상중 ★3 출발 · 통찰 1·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "좌표화 → B_1D_n=30/n(닮음) → AC_n−OC_n=900/(√(n²+900)+n) → 비=30n/(√(n²+900)+n) → 15"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$15$"
  answer_source: "답지"
  figure: "crop:fig-0112.png"
  latex: latex-bank/rpm-calc2/items/0112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세로 30 → h(답 h/2) · 선분 B_1C_1 대신 B_kC_k(k 고정 · B_kD_n=hk/n · 답 h/(2k)). 제약: 세로를 바꾸면 그림 라벨 30 도 바꿔야 함 · A, O, C_n, B_n, D_n 과 「C_1(D_1)」 표기는 고정."
    creative: "(1) 분자를 AC_n − AB_n 으로 표현만 바꿔 같은 답(★3 유지) (2) 비 대신 n·(AC_n−OC_n) 의 극한(450)으로 단순화하면 닮음이 빠져 ★2 (3) 대각선 AC_n 과 OB_n 의 교점(직사각형 중심)으로 바꾸면 닮음 없이 풀려 RT 가 사라짐 ★2 — 골조가 무너지는 지점."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0113
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    네 수열 1/7ⁿ · (2n−1)/(n+3) · (1−(−1)ⁿ)/2 · log(1/n) 중 수렴하는 것만 고르기. 5지선다(보기).
  category: "각 일반항의 수렴·발산 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정(보기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㄱ 0 · ㄴ 2 로 수렴, ㄷ 은 1, 0 이 반복되는 진동 · ㄹ 은 −log n → −∞ 발산. 정의 확인 네 번. 시험에 꼭 나오는 문제 ★2 출발 · 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ㄱ 등비 0 · ㄴ 유리식 2 · ㄷ 진동 · ㄹ −log n 발산 → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등비 1/7 → |r|<1 인 다른 r · 유리식의 차수 조합 · 진동 예를 (−1)ⁿ, cos(nπ) 등으로. 제약: 정답 조합이 선택지 중 하나가 되도록 수렴 항 개수를 맞춤."
    creative: "(1) 「발산하는 것의 개수」로 묻기(★1) (2) 진동 수열을 sin(nπ/2) 처럼 주기 4 로 바꾸면 항 나열 필요(★1~2) (3) 수렴하는 것의 극한값의 합을 물으면 계산이 붙어 ★2."
```

```yaml
- id: RPM-CALC2-0114
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    수렴하는 수열에서 lim(a_n−3)=1 일 때 lim(a_n²−2a_n+2) 의 값. 5지선다.
  category: "극한값 α 확정 → 다항식에 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 성질(사칙연산) — 극한값 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    lim a_n=4 → 16−8+2=10. 극한의 성질 한 번. ★2 출발 · 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "lim a_n=4 → 4²−2·4+2 → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 3, 1 과 이차식 계수. 제약: 선택지가 정수로 정리되게 α 를 정수로."
    creative: "(1) lim(2a_n+1)=9 처럼 일차 결합으로 조건을 주기(★1) (2) lim a_n² 만 주고 a_n 이 수렴한다고 하면 α=±k 두 갈래(MI d1) ★2 (3) (a_n+1)/(a_n−4) 처럼 분모가 0 으로 가면 발산 판정 ★2."
```

```yaml
- id: RPM-CALC2-0115
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim a_n/n=10, lim n²b_n=1/2 일 때 lim nb_n(3a_n−2n) 의 값. 5지선다.
  category: "식을 (n²b_n)·(3a_n/n − 2) 로 재구성 → 극한의 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 성질 — 주어진 극한의 곱·비로 재구성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    nb_n(3a_n−2n)=n²b_n·(3a_n/n−2) 로 묶으면 (1/2)(30−2)=14. 주어진 두 극한이 보이도록 n 을 배분하는 재구성이 고비지만 이 유형의 표준 절차. 일반 수열이라 추상도 2. ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "nb_n(3a_n−2n)=n²b_n·(3a_n/n−2) → (1/2)(30−2) → 14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10, 1/2 와 계수 3, 2. 제약: 재구성 뒤 (3·10−2)·(1/2) 가 선택지 정수가 되도록 · a_n/n 의 극한이 0 이 아니어야 의미 있음."
    creative: "(1) lim nb_n 만 주고 n²b_n 이 필요한 식을 물어 발산을 판정하게(★2) (2) 조건을 lim (a_n−10n)/n² 처럼 다음 차수로 주면 EQV d1 ★3 (3) b_n=1/(2n²+1) 을 구체로 주면 절차형 ★1."
```

```yaml
- id: RPM-CALC2-0116
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다섯 유리식 수열의 극한값 중 가장 큰 것 고르기. 5지선다(선택지가 극한식).
  category: "최고차항 비교 다섯 번 → 대소 비교"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 극한 계산 — 최고차항 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ① 1/2 ② 0 ③ 1 ④ 1/3 ⑤ 3/4 → ③. 유리식 극한 다섯 번의 반복 계산뿐. ★2 출발 · 통찰 없음·M_total 5(s=1, t=1) → ★1.
  tier: star_1
  mechanism_primary: "각 선택지 최고차 계수 비 → 1/2, 0, 1, 1/3, 3/4 → 최대 ③"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수(→ 극한값)와 차수 조합. 제약: 극한값이 서로 다르고 최댓값이 하나 · 분모가 0 이 되는 자연수 n 이 없도록."
    creative: "(1) 「극한값이 같은 것끼리 묶기」(★1) (2) 극한값의 합을 묻기(★1~2) (3) 선택지 하나를 근호 차 꼴로 바꾸면 유리화 한 단계 추가 ★2."
```

```yaml
- id: RPM-CALC2-0117
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등차수열 {a_n} 에 대해 lim (a_{2n}−3n)/(a_n+1)=3/2 일 때 a_3−a_1 의 값. 주관식.
  category: "일반항 a+(n−1)d 대입 → 일차식 계수 비 = 3/2 → d"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 극한 — 일반항 대입 후 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 (2d−3)n+(a−d), 분모 dn+(a−d+1). d≠0 이면 극한은 (2d−3)/d=3/2 → d=6 → a_3−a_1=2d=12. d=0 이면 극한이 존재하지 않아 자동 배제(T-경계). 계수 비교 표준 절차 · 매개변수 a, d. ★2 출발 · M_total 6 → ★2. 중요 태그 +0.
  tier: star_2
  mechanism_primary: "a_n=a+(n−1)d → (2d−3)/d=3/2 → d=6 → a_3−a_1=2d=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_{2n} 의 첨자 배수(→ 분자 최고차 계수) · 상수 3 · 극한값 3/2 · 묻는 항의 차. 제약: d 가 정수가 되도록 극한값 선택 · d=0 배제 근거가 남도록 분모에 d 가 들어가게."
    creative: "(1) 첫째항까지 묻도록 두 번째 조건(a_1+a_2 등)을 추가 ★2 (2) 등비수열로 바꾸면 최고차 밑 비교 골조(★2~3) (3) 극한값을 0 으로 주면 분자 차수가 낮아야 하므로 2d−3=0 → BW d1 ★3."
```

```yaml
- id: RPM-CALC2-0118
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 −2, 공차 5 인 등차수열의 첫째항부터 n 항까지의 합을 n² 으로 나눈 극한. 주관식.
  category: "등차수열 합 공식 → n² 계수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 극한 — 합 S_n 의 최고차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S_n=n(5n−9)/2 → 5/2. 합 공식 한 줄. ★2 출발 · 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S_n=n(5n−9)/2 → S_n/n² → 5/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차 d(→ 답 d/2 · 첫째항은 무관). 제약: 분모 n² 을 유지해야 유한값 · 분모를 n 으로 바꾸면 발산."
    creative: "(1) S_n/(n·a_n) 처럼 항과 합의 비로 바꾸면 답 1/2 로 고정되는 성질 관찰(★2) (2) 합을 Σ(2k−1)a_k 같은 가중합으로 바꾸면 Σ 계산 추가 ★2~3 (3) 첫째항이 무관함을 이용해 「공차만 주고 첫째항 미지」 변형 ★1."
```

```yaml
- id: RPM-CALC2-0119
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim (an²+bn+2)/(cn³+3n−2)=3 일 때 상수 a, b, c 에 대한 a+b−c 의 값. 5지선다.
  category: "0 아닌 유한 극한 → 분모·분자 차수 일치 → c=0, a=0, b/3=3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 0 이 아닌 유한값이려면 분모의 삼차항이 사라지고(c=0) 분자도 일차여야(a=0) 함을 결과 조건에서 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한값이 주어진 식의 미정계수 — 차수 맞추기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c≠0 이면 극한 0 이므로 c=0; 그러면 분모가 일차라 a=0 이어야 유한이고 b/3=3 → b=9. a+b−c=9. 극한값이 갖춰야 할 차수 조건을 먼저 분석하는 역추적 1개(BW d1) · 표준 유형. ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극한 3(≠0 유한) → c=0 → a=0 → b/3=3 → b=9 → a+b−c=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 · 분모 일차 계수 3 · 상수항. 제약: 극한값 ≠0 이어야 두 계수가 0 으로 강제됨 · 답이 선택지 정수로."
    creative: "(1) 극한값을 0 으로 주면 c 가 임의라 「모든 c」 조건 문제로 바뀜(MI) ★3 (2) 분자·분모 차수를 같게 주고 극한값만 주면 계수 하나 결정 ★1 (3) 분모를 근호 꼴로 바꾸면 최고차 계수 √ 처리 T-부호 ★2~3."
```

```yaml
- id: RPM-CALC2-0120
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (2n−√(4n²+1))/(n−√(n²+2)) 의 극한값. 5지선다.
  category: "분자·분모 각각 유리화 → 최고차 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한 계산 — 근호 차 유리화(분자·분모 이중)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 = −1/(2n+√(4n²+1)), 분모 = −2/(n+√(n²+2)) → 비 = (n+√(n²+2))/(2(2n+√(4n²+1))) → 2/8 = 1/4. 0/0 꼴이라 유리화 두 번 · 부호 정리. 통찰 없음 · ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분자 유리화 −1/(2n+√(4n²+1)) · 분모 유리화 −2/(n+√(n²+2)) → 비 → 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 p, q 와 최고차 계수 a, b(an−√(a²n²+p))/(bn−√(b²n²+q)) → 답 (p/q)·(b/a). 제약: 각 근호 안 최고차 계수가 완전제곱이어야 0/0 꼴 · p, q ≠ 0 · 답이 선택지 유리수."
    creative: "(1) 분모를 유리화 없이 n 으로 두면 극한 0 → 「0 이 아니게 하는」 조건 문제로 ★2 (2) 분자·분모 중 하나만 근호 차로 두고 다른 쪽에 1/n 을 두면 같은 골조 ★2 (3) 세제곱근 차로 바꾸면 a³−b³ 인수분해 유리화 ★3."
```

```yaml
- id: RPM-CALC2-0121
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이차방정식 x²+2nx−6n=0 의 양의 실근을 a_n 이라 할 때 lim a_n 의 값. 주관식.
  category: "근의 공식으로 양의 근 → 근호 차 유리화 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 근으로 정의된 수열의 극한 — 근의 공식·유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근의 곱 −6n<0 이라 양의 근은 하나: a_n=−n+√(n²+6n)=6n/(√(n²+6n)+n) → 3. 양의 근 선택(T-부호) 뒤 유리화. 통찰 없음 · ★2 출발 · M_total 5 이나 유리화 단계 포함(s=2) → ★2.
  tier: star_2
  mechanism_primary: "a_n=−n+√(n²+6n) → 유리화 6n/(√(n²+6n)+n) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²+2pnx−2qn=0 의 양의 근 → 답 q/p(여기선 p=1, q=3). 제약: 상수항이 음수여야 양의 근이 유일 · 근호 안 최고차 계수가 완전제곱."
    creative: "(1) 「두 근의 차」나 「음의 근 + n」의 극한으로 바꾸기(★2) (2) 근과 계수의 관계(합·곱)로 근호 없이 푸는 갈래를 열어 두 풀이를 비교하게 하면 SC 갈래(★3) (3) x²−2nx+n=0 처럼 두 양근으로 두면 「작은 근」 선택 + 유리화 ★2~3."
```

```yaml
- id: RPM-CALC2-0122
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(√(an²+n)−√(an²−an))=5/4 를 만족시키는 모든 양수 a 의 값의 합. 5지선다.
  category: "유리화 → (a+1)/(2√a)=5/4 → √a 의 이차방정식 → 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값이 주어진 식의 미정계수 — 근호 차 유리화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화하면 (a+1)n/(√(an²+n)+√(an²−an)) → (a+1)/(2√a)=5/4 → 2a−5√a+2=0 → √a=1/2, 2 → a=1/4, 4 → 합 17/4. a>0 이라 √(an²)=√a·n(T-부호). 통찰 없이 풀리나 매개변수 유리화 + √a 에 대한 이차방정식으로 계산 층이 두 겹. 출발 범위 ★2~3 중 M_total 7 → ★3. 기출 태그는 통찰 없어 +0.
    [분류 이슈] 통찰 0 인데 M_total 7 만으로 ★3 — 절차형 ★2 후보와 갈림.
  tier: star_3
  mechanism_primary: "유리화 → (a+1)/(2√a)=5/4 → 2a−5√a+2=0 → a=1/4, 4 → 합 17/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 5/4 → k((a+1)/(2√a)=k · k>1 이면 양근 두 개 · k=1 이면 a=1 하나) · 근호 안 일차항 n, −an. 제약: 두 근호의 n² 계수가 같아야 분모가 2√a·n · k≥1 이어야 실수해 · 답이 선택지 유리수."
    creative: "(1) 「양수 a 의 개수」로 바꾸면 판별식 판단만(★2) (2) 양변 제곱해 4a²−17a+4=0 의 근과 계수 관계로 합을 바로 구하는 지름길이 있음 — 두 풀이를 비교하게 하는 설명형(SC d1) ★3 (3) 극한값 k 를 매개변수로 두고 「해가 존재하는 k 의 범위」로 바꾸면 BW ★4."
```

```yaml
- id: RPM-CALC2-0123
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(√(n²+an+1)−√(bn²−3n+2))=10 일 때 상수 a, b 에 대한 a+b 의 값. 5지선다.
  category: "유한 극한 → 두 근호의 n² 계수 일치(b=1) → 유리화 → (a+3)/2=10"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 유한이려면 두 근호의 n² 계수가 같아야(b=1) 함을 결과 조건에서 역추적 — b≠1 이면 ±∞"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한값이 주어진 식의 미정계수 — 근호 차 유리화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b≠1 이면 두 근호가 서로 다른 속도로 발산해 극한이 ±∞ 이므로 b=1. 유리화하면 ((a+3)n−1)/(√(n²+an+1)+√(n²−3n+2)) → (a+3)/2=10 → a=17, a+b=18. 결과 조건에서 b 를 먼저 확정하는 역추적 1개(BW d1) + 매개변수 유리화. 출발 범위 ★2~3 중 통찰 1·M_total 7 → ★3. 중요 태그 +0.
  tier: star_3
  mechanism_primary: "유한 극한 → b=1 → 유리화 → (a+3)/2=10 → a=17 → a+b=18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 k(→ a=2k−3) · 두 번째 근호의 일차 계수 −3. 제약: 첫 근호의 n² 계수 1 을 바꾸면 b 도 그 값으로 · 답이 선택지에 맞는 정수."
    creative: "(1) 극한값 0 으로 주면 a=−3, b=1 두 조건 동시(★2~3) (2) √(bn²+…) 대신 cn 으로 바꾸면 「c=1 이어야 유한」 같은 BW 골조 ★2 (3) 「극한이 존재하도록 하는 b」 로 물으면 b=1 유일 → EQV ★2."
```

```yaml
- id: RPM-CALC2-0124
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim (−2a_n+1)/(5a_n−3)=−1 일 때 lim (a_n+1)/(a_n−1) 의 값. 5지선다.
  category: "b_n 으로 a_n 을 역표현 → lim a_n=2/3 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_n 의 수렴이 주어지지 않았으므로 b_n=(−2a_n+1)/(5a_n−3) 을 a_n=(1+3b_n)/(5b_n+2) 로 되풀어 a_n 의 수렴을 확보하는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴하는 수열의 극한값 — 조건식을 a_n 으로 역표현"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b_n=(−2a_n+1)/(5a_n−3) → a_n=(1+3b_n)/(5b_n+2), b_n→−1 이므로 a_n→2/3, (2/3+1)/(2/3−1)=−5. a_n 이 수렴한다고 가정해 (−2α+1)/(5α−3)=−1 을 푸는 지름길도 같은 답이지만, 조건을 a_n 에 대해 되풀어 수렴을 확보하는 동치 변환이 골조(EQV d1). ★2 출발 · M_total 6 → ★2.
    [분류 이슈] 엄밀 풀이(역표현)를 기준으로 하면 ★3 후보 · 지름길 기준 ★2 — 라벨은 ★2.
  tier: star_2
  mechanism_primary: "b_n=(−2a_n+1)/(5a_n−3) → a_n=(1+3b_n)/(5b_n+2) → lim a_n=2/3 → (a_n+1)/(a_n−1) → −5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수식 계수(−2, 1, 5, −3)와 극한값 −1, 묻는 식. 제약: 역표현의 분모 5b_n+2 가 극한에서 0 이 되지 않도록(b_n→−1 일 때 −3≠0) · 답이 선택지 정수."
    creative: "(1) 극한값을 −2/5(계수 비)로 주면 a_n 이 발산하는 경우로 바뀌어 MI d1 ★3 (2) 조건에 n 을 섞어 lim (na_n+1)/(a_n+n) 꼴로 주면 0125 골조와 결합 ★3 (3) 「a_n 이 수렴함을 보이시오」 서술형으로 바꾸면 EQV 가 답안의 핵심 ★3."
```

```yaml
- id: RPM-CALC2-0125
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim (a_n+2)/2=6 일 때 lim (na_n+1)/(a_n+2n) 의 값. 5지선다.
  category: "lim a_n=10 확정 → 분모·분자를 n 으로 나눔 → a_n/n→0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 성질 — 주어진 극한의 곱·비로 재구성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    lim a_n=10. 분모·분자를 n 으로 나누면 (a_n+1/n)/(a_n/n+2) → 10/2=5. a_n 이 수렴하므로 a_n/n→0 이라는 관찰이 유일한 고비지만 표준 절차. ★2 출발 · M_total 6 → ★2. 기출 태그는 통찰 없어 +0.
  tier: star_2
  mechanism_primary: "lim a_n=10 → (a_n+1/n)/(a_n/n+2) → 10/2 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 6(→ lim a_n=2·6−2=10) · 분모 2n 의 계수(→ 답 10/2). 제약: 분모에서 n 의 계수가 0 이 아니어야 · 답이 선택지 정수."
    creative: "(1) 분모를 a_n²+2n 처럼 바꿔 a_n²/n→0 을 쓰게(★2) (2) a_n 대신 na_n 의 극한을 주면 a_n→0 이 되어 골조가 뒤집힘(EQV) ★3 (3) lim (a_n−10)n 의 값을 추가로 주면 오차 항 처리 ★3~4."
```

```yaml
- id: RPM-CALC2-0126
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    모든 자연수 n 에 대해 a_n²−2na_n<n−n² 일 때 lim (a_n+n)/(4n+1) 의 값. 주관식.
  category: "완전제곱 (a_n−n)²<n → n−√n<a_n<n+√n → 샌드위치"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식을 (a_n−n)²<n 으로 묶고 제곱근 부등식으로 풀어 a_n 의 양쪽 범위 n±√n 을 끌어냄 — 조건이 직접 쓸 형태가 아니라 완전제곱·절댓값 두 층의 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수열의 극한의 대소 관계(샌드위치) — 완전제곱으로 범위 추출"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n²−2na_n+n²<n → (a_n−n)²<n → n−√n<a_n<n+√n. 양 끝을 (a_n+n)/(4n+1) 에 넣으면 둘 다 1/2 로 수렴해 샌드위치로 1/2. 조건을 완전제곱으로 묶고 제곱근 부등식으로 푸는 동치 변환이 핵심(EQV d2 · 부호·절댓값 처리 포함) 뒤 샌드위치 적용은 표준. 출발 범위 ★2~3 중 depth 2 → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "(a_n−n)²<n → n−√n<a_n<n+√n → (a_n+n)/(4n+1) 양쪽 극한 1/2 → 샌드위치 1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 식 (a_n+n)/(4n+1) 의 계수(→ 답 (1+1)/4 · 계수 바꾸면 답 변동) · 부등식 우변 n−n² 은 (a_n−n)²<n 을 만드는 조합으로 유지(우변을 kn−n² 로 두면 범위 n±√(kn)). 제약: 완전제곱 뒤 남는 항의 차수가 2 미만이어야 양 끝 극한이 같음 · 부등식 방향과 양변 부호."
    creative: "(1) 조건을 |a_n−n|<√n 으로 직접 주면 EQV 가 사라져 ★2 — 골조가 무너지는 지점 (2) 조건을 2na_n−a_n²>n²−n 처럼 부호를 뒤집어 제시하면 정리 단계 추가(★3 유지) (3) (a_n−n)/√n 의 극한을 물으면 범위만으로 결정되지 않아 「극한이 존재하지 않을 수 있음」 판단 ★4."
```

```yaml
- id: RPM-CALC2-0127
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 수열에 대한 세 명제 — ㄱ 차의 극한이 0 이면 극한이 같다 · ㄴ 제곱의 극한이 α² 이면 극한이 α 또는 −α · ㄷ 짝수항의 극한이 α 이면 전체 극한이 α — 의 참·거짓. 주관식(보기).
  category: "성질 증명(ㄱ) + 반례 구성(ㄴ·ㄷ)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ·ㄷ 이 거짓이 되려면 부분(제곱·짝수항)은 수렴하고 전체는 진동해야 함을 결론에서 역추적해 반례 (−1)ⁿ 을 구성"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한 성질의 참·거짓(반례 구성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 b_n=a_n−(a_n−b_n) 으로 참. ㄴ 은 a_n=(−1)ⁿα 이면 제곱은 수렴하나 a_n 은 진동, ㄷ 은 a_n=(−1)ⁿ 이면 짝수항만 수렴하므로 거짓 → ㄱ. 반례를 결론에서 거꾸로 짓는 사고 1개(BW d1) · 일반 수열 명제라 추상도 3. 출발 범위 ★2~3 중 M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "ㄱ b_n=a_n−(a_n−b_n) 참 → ㄴ·ㄷ 반례 (−1)ⁿ → ㄱ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제 자체가 대상이라 숫자 변형 여지 적음. 바꿀 수 있는 것: ㄴ 의 제곱을 세제곱(→ 참 · 단조성)으로, ㄷ 의 a_{2n} 을 a_{2n}·a_{2n+1} 동시 수렴(→ 참)으로. 제약: 참·거짓이 뒤집히는 조건을 정확히."
    creative: "(1) 「a_nb_n 이 수렴하고 a_n 이 0 아닌 값으로 수렴하면 b_n 수렴」 같은 곱 명제 추가(★3) (2) 반례를 직접 쓰게 하는 서술형(★3) (3) 참인 명제의 증명을 요구하면 성질 조합으로 쓰는 EQV ★3."
```

```yaml
- id: RPM-CALC2-0128
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    자연수 a, b 에 대한 연산 a◈b=lim ((b+1)aⁿ+(a−1)bⁿ)/(aⁿ+bⁿ) 을 정의할 때 (4◈2)◈6 의 값. 5지선다.
  category: "밑 비교(a>b 이면 b+1 · a<b 이면 a−1) → 두 번 적용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한 — 최고차 밑 비교(새 연산 정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    큰 밑으로 나누면 a>b 일 때 b+1, a<b 일 때 a−1. 4◈2=3, 3◈6=2. 새 연산 정의를 읽고 최고차 밑 비교를 두 번. 통찰 없음 · ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a>b: (b+1) · a<b: (a−1) → 4◈2=3 → 3◈6=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (b+1), (a−1) 과 피연산 자연수(4, 2, 6). 제약: a=b 이면 (a+b)/2 로 규칙이 달라지므로 같은 수를 넣으려면 그 경우를 의도할 것 · 첫 결과가 자연수여야 두 번째 연산 가능."
    creative: "(1) a=b 인 경우를 섞어 세 갈래 규칙을 모두 쓰게(MI d1) ★3 (2) 「a◈b=b◈a 인 (a, b) 쌍」을 물으면 BW ★3 (3) 밑에 음수를 허용하면 진동 판정 ★3."
```

```yaml
- id: RPM-CALC2-0129
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 1, 공비 r(>1) 인 등비수열의 합 S_n 에 대해 lim a_n/S_n=6/7 일 때 r 의 값. 5지선다.
  category: "a_n=r^{n−1}, S_n=(rⁿ−1)/(r−1) → rⁿ 으로 나눔 → (r−1)/r=6/7"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한 — 일반항·합의 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n/S_n=(r−1)r^{n−1}/(rⁿ−1) 을 rⁿ 으로 나누면 (r−1)/r·1/(1−r^{−n}) → (r−1)/r=6/7 → r=7. r>1 이라 r^{−n}→0. 표준 절차 · ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_n/S_n=(r−1)r^{n−1}/(rⁿ−1) → (r−1)/r=6/7 → r=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 k(→ (r−1)/r=k → r=1/(1−k)) · 첫째항은 답에 무관. 제약: 0<k<1 이어야 r>1 · r 이 선택지 정수."
    creative: "(1) 0<r<1 로 바꾸면 a_n/S_n→0 이라 조건을 바꿔야 함(T-범위 대조) ★2 (2) lim S_n/a_{n+1} 처럼 첨자를 어긋나게 하면 r 인수 처리 ★2 (3) 첫째항 a 를 미지로 두고 lim (S_n−a_n)/S_n 을 물으면 답 1/r 로 첫째항 무관 관찰 ★2."
```

```yaml
- id: RPM-CALC2-0130
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열 {(|x|/2−3)ⁿ} 이 수렴하도록 하는 정수 x 의 개수. 주관식.
  category: "−1<공비≤1 → 4<|x|≤8 → 정수 세기"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 — 공비 범위와 정수 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −1<|x|/2−3≤1 → 4<|x|≤8 → x=±5, ±6, ±7, ±8 의 8 개. 수렴 조건 한 줄이지만 경계(−1 제외·1 포함)와 절댓값 양쪽(음의 정수 포함) 두 함정(T-경계·T-범위). 통찰 없음 · ★2 출발 · M_total 5 이나 함정 2 → ★2 유지. 중요 +0.
  tier: star_2
  mechanism_primary: "−1<|x|/2−3≤1 → 4<|x|≤8 → ±5~±8 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|x|/2−3 의 계수·상수(→ 구간 길이 · 개수 = 2×(양의 정수 개수)). 제약: 구간 끝 경계가 정수인지에 따라 개수가 달라지므로 −1 제외·1 포함을 확인 · 절댓값 때문에 음수 쌍이 생김."
    creative: "(1) 공비를 x²−2x−1 처럼 이차식으로 두면 이차부등식 두 개(★2~3) (2) 「수렴하는 x 의 최댓값·최솟값의 합」으로 바꾸면 경계 처리 강조 ★2 (3) 등비급수(02 단원) 수렴 조건으로 옮기면 −1<r<1 로 경계가 달라지는 대조 문항 ★2."
```

```yaml
- id: RPM-CALC2-0131
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열 {rⁿ} 이 수렴할 때 항상 수렴하는 것 고르기 — ㄱ {(−r)ⁿ} · ㄴ {((1−r)/2)ⁿ} · ㄷ {r^{2n}}. 주관식(보기).
  category: "−1<r≤1 을 각 공비 범위로 옮김 → 경계 r=1 확인"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 — 공비 범위 전달(보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    −1<r≤1. ㄱ 은 r=1 이면 (−1)ⁿ 진동이라 항상은 아님. ㄴ 은 0≤(1−r)/2<1 이라 수렴, ㄷ 은 0≤r²≤1 이라 수렴 → ㄴ, ㄷ. 범위를 세 공비로 옮기는 반복 + 경계 r=1 이 ㄱ 을 뒤집는 함정(T-경계·T-범위). 통찰은 없으나 출발 범위 ★2~3 중 M_total 7(추상 r · 함정 2) → ★3.
    [분류 이슈] 통찰 0 · M_total 7 로 ★3 — 경계 함정을 아는 학생에겐 ★2.
  tier: star_3
  mechanism_primary: "−1<r≤1 → ㄱ r=1 에서 진동 ✗ · ㄴ (1−r)/2∈[0,1) ✓ · ㄷ r²∈[0,1] ✓ → ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 공비를 (r+1)/2, r³, −r² 등으로(각각 −1<r≤1 에서 범위 계산). 제약: 경계 r=1 과 r→−1 에서 공비가 −1 이 되는지 여부가 정답을 가르므로 각 보기의 끝점 판정을 명시."
    creative: "(1) 「{rⁿ} 이 수렴」 대신 「{(2r−1)ⁿ} 이 수렴」 처럼 r 의 범위를 한 번 더 풀게(★3) (2) 항상 수렴하는 것의 극한값까지 묻기(경우 나눔 MI) ★3 (3) 수렴하지 않는 반례 r 값을 쓰게 하는 서술형 ★3."
```

```yaml
- id: RPM-CALC2-0132
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열 {a_n} 에 대해 lim (a_n+1)/(3ⁿ+2^{2n−1})=3 일 때 a_2 의 값. 5지선다.
  category: "분모 주항 4ⁿ/2 파악 → 극한 유한·0 아님 → 공비 4 · 첫째항 6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 0 이 아닌 유한값이 되려면 a_n 의 공비가 분모 주항의 밑 4 와 같아야 함을 결과 조건에서 역추적(작으면 0 · 크면 발산)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 극한 — 극한값 조건으로 공비·첫째항 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2^{2n−1}=4ⁿ/2 이므로 분모의 주항은 4ⁿ/2. 공비가 4 보다 작으면 극한 0, 크면 발산 → 공비 4, 그리고 a·4^{n−1}/(4ⁿ/2)=a/2=3 → a=6 → a_2=24. 결과 조건에서 공비를 확정하는 역추적 1개(BW d1) + 2^{2n−1} 표기 정리(T-표기). 출발 범위 ★2~3 · 기출 + 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "2^{2n−1}=4ⁿ/2 → 공비 4 → a/2=3 → a=6 → a_2=24"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 밑(3, 4)과 극한값 3 · 묻는 항. 제약: 분모 두 항의 밑이 달라 주항이 하나여야 함 · 2^{2n−1} 처럼 지수 변형이 들어간 표기를 유지해야 T-표기 함정 유지."
    creative: "(1) 분모를 3ⁿ+4ⁿ 으로 단순화하면 표기 함정이 빠져 ★2 (2) 「극한이 존재하도록 하는 공비의 범위」로 바꾸면 MI(공비<4 → 0 · =4 → 값) ★3 (3) 분자에 a_n+a_{n+1} 처럼 두 항을 두면 (1+r) 인수 정리 ★3."
```

```yaml
- id: RPM-CALC2-0133
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=lim (x^{n+2}−6x+2)/(xⁿ+1) 로 정의된 함수에 대해 f(−1/2)+f(4) 의 값. 주관식.
  category: "|x|<1 이면 2−6x · |x|>1 이면 x² → 각 값 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 범위(|x|<1 · |x|>1 · x=1)에 따라 xⁿ 의 극한이 달라 함수식을 갈래별로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "xⁿ 을 포함한 극한으로 정의된 함수 — 범위 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |x|<1 이면 xⁿ→0 이라 f(x)=2−6x, |x|>1 이면 xⁿ 으로 나눠 f(x)=x². f(−1/2)=5, f(4)=16 → 21. 범위 분기 표준 1개(MI d1) · 묻는 두 값이 경계 ±1 을 피해 계산은 가벼움. ★2 출발 · M_total 6 → ★2. 중요 +0.
  tier: star_2
  mechanism_primary: "|x|<1: f=2−6x · |x|>1: f=x² → f(−1/2)=5, f(4)=16 → 21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$21$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 −6x+2 의 계수 · 지수 n+2(→ |x|>1 갈래 x²) · 묻는 점(경계 ±1 을 피하거나 포함). 제약: x=−1 에서 분모 (−1)ⁿ+1 이 0 이 되는 n 이 있어 정의되지 않으므로 f(−1) 을 묻지 말 것(또는 그것을 함정으로)."
    creative: "(1) f(1) 을 포함시키면 x=1 갈래 계산 추가(★2) (2) f(x)=x 가 되는 x 를 모두 구하게 하면 갈래별 방정식 + 범위 검증(VF) ★3~4 (3) 0141 처럼 합성 (f∘f) 조건으로 바꾸면 ★4."
```

```yaml
- id: RPM-CALC2-0134
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=√(x+4) 위의 두 점 (n, f(n)), (n+1, f(n+1)) 을 지나는 직선의 기울기를 a_n 이라 할 때 lim √n·a_n 의 값. 주관식.
  category: "기울기 = 근호 차 → 유리화 → √n 곱해 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 좌표로 주어진 길이·거리(근호 차 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n=√(n+5)−√(n+4)=1/(√(n+5)+√(n+4)) 이고 √n·a_n=√n/(√(n+5)+√(n+4)) → 1/2. 유리화 뒤 √n 으로 나누는 두 기법 사슬. 통찰 없음 · ★2 출발 · M_total 5 이나 유리화 포함(s=2) → ★2.
  tier: star_2
  mechanism_primary: "a_n=√(n+5)−√(n+4) → 1/(√(n+5)+√(n+4)) → √n 곱 → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=√(x+c) 의 c(답 무관) · 두 점 간격 d(→ 답 d/2) · 곱하는 √n 대신 √(kn)(→ √k·d/2). 제약: 곱하는 차수가 √n 이어야 유한값 · n 을 곱하면 발산."
    creative: "(1) √n 을 빼고 n·a_n 의 극한을 물어 발산을 판정하게(★2) (2) f(x)=∛x 로 바꾸면 세제곱근 차 유리화 ★3 (3) 두 점 사이 거리 √(1+a_n²) 의 극한으로 바꾸면 a_n→0 만 알면 되는 ★1."
```

```yaml
- id: RPM-CALC2-0135
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 곡선 y=3ˣ, y=5ˣ 과 직선 x=n 의 교점 P_n, Q_n 에 대해 lim P_{n+1}Q_{n+1}/P_nQ_n 의 값. 주관식. 그림 있음.
  category: "P_nQ_n=5ⁿ−3ⁿ → 등비형 비 → 큰 밑"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 좌표로 주어진 길이·거리(등비형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P_nQ_n=5ⁿ−3ⁿ 이고 비 (5^{n+1}−3^{n+1})/(5ⁿ−3ⁿ) 을 5ⁿ 으로 나누면 5. 좌표를 바로 읽고 최고차 밑 비교 한 번. ★2 출발 · 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P_nQ_n=5ⁿ−3ⁿ → (5^{n+1}−3^{n+1})/(5ⁿ−3ⁿ) → 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5$"
  answer_source: "답지"
  figure: "crop:fig-0135.png"
  latex: latex-bank/rpm-calc2/items/0135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 3, 5(→ 답 큰 밑) · 직선 x=n 을 x=2n 으로(→ 밑 제곱 · 답 25). 제약: 두 밑이 달라야 길이가 0 이 아님 · 그림 라벨 P_n, Q_n, x=n 고정."
    creative: "(1) 비 대신 P_nQ_n 과 다른 길이(예: P_n 에서 x축까지)의 비 ★1 (2) 직선 y=k 와의 교점으로 바꾸면 로그 좌표 log_3 k, log_5 k 가 나와 XU(지수·로그) ★2~3 (3) 사각형 P_nQ_nQ_{n+1}P_{n+1} 넓이의 비를 물으면 사다리꼴 공식 ★2."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0136
  page: 23
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    수렴하는 두 수열에 대해 lim(2a_n+b_n)=6, lim(3a_n−2b_n)=2 일 때 lim (3b_n−a_n)/(2a_n+3b_n) 의 값. 주관식(서술형).
  category: "극한값 α, β 연립 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 성질 — 극한값 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2α+β=6, 3α−2β=2 → α=β=2 → (6−2)/(4+6)=2/5. 두 수열이 수렴한다고 주어져 극한값을 미지수로 놓고 연립하면 끝. 서술형 ★3 출발 · 통찰 없음·M_total 5·단계 3(s=1) → ★2.
    [분류 이슈] 서술형 구역(★3 출발)이지만 실질은 극한의 성질 기본 연습 — 구역 신호와 1단 차이.
  tier: star_2
  mechanism_primary: "2α+β=6, 3α−2β=2 → α=β=2 → (3β−α)/(2α+3β) → 2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건의 계수·상수와 묻는 식. 제약: 분모 2α+3β≠0 · 연립 해가 유리수로 깔끔히 · 「수렴하는」 전제 유지(없으면 0124 골조)."
    creative: "(1) 「수렴하는」 전제를 빼고 c_n=2a_n+b_n, d_n=3a_n−2b_n 으로 a_n, b_n 을 역표현하게 하면 EQV d1 ★3 (2) 조건 하나를 lim a_nb_n 으로 주면 이차 연립(MI ±) ★3 (3) lim (2a_n+b_n)/n 처럼 차수를 섞으면 발산 판정 ★2."
```

```yaml
- id: RPM-CALC2-0137
  page: 23
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a_n=(1−2/3)(1−2/4)…(1−2/(n+2)), b_n=1²+2²+…+n² 일 때 lim a_nb_n/n 의 값. 주관식(서술형).
  category: "망원곱으로 a_n=2/((n+1)(n+2)) → 거듭제곱 합 공식 → 유리식 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 인수를 (k−2)/k 로 보고 곱이 망원 소거되어 2/((n+1)(n+2)) 로 닫히는 규칙을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "망원곱·자연수 거듭제곱 합의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1−2/k=(k−2)/k 라 곱은 (1·2)/((n+1)(n+2)). b_n=n(n+1)(2n+1)/6 이므로 a_nb_n/n=(2n+1)/(3(n+2)) → 2/3. 망원곱 규칙 발견 1개(PD d1) + 합 공식 · 인수 소거 계산. 서술형 ★3 출발 · 통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a_n=∏(k−2)/k=2/((n+1)(n+2)) → b_n=n(n+1)(2n+1)/6 → a_nb_n/n=(2n+1)/(3(n+2)) → 2/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 1−2/k 의 2 → m(1−m/k=(k−m)/k 망원곱 · 시작 첨자 m+1 · a_n 의 차수 −m) · b_n 을 Σk 또는 Σk³ 으로(→ 나누는 n 의 차수 조정). 제약: a_n 의 차수(−2)와 b_n 의 차수(+3)를 나누는 n 의 차수와 맞춰 유한값이 되게."
    creative: "(1) a_n 을 (1−1/2²)(1−1/3²)… 로 바꾸면 (k−1)(k+1)/k² 이중 망원곱 PD d2 ★4 (2) b_n 대신 Σ1/(k(k+1)) 같은 망원합을 두면 두 망원 결합 ★3 (3) a_n 의 일반항을 먼저 구하게 하는 서술 소문항 분리 ★3."
```

```yaml
- id: RPM-CALC2-0138
  page: 23
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    첫째항 3, 공차 2 인 등차수열의 합 S_n 에 대해 lim(√S_{n+1}−√S_n) 의 값. 주관식(서술형).
  category: "S_n=n(n+2) → 근호 차 유리화(분자 S_{n+1}−S_n=a_{n+1}) → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 극한 — 합의 근호 차 유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n=n²+2n. 유리화하면 (S_{n+1}−S_n)/(√S_{n+1}+√S_n)=(2n+3)/(√(n²+4n+3)+√(n²+2n)) → 1. 분자를 a_{n+1}=2n+3 으로 읽으면 계산이 한 줄. 서술형 ★3 출발 · 통찰 없음·M_total 5 → ★2.
    [분류 이슈] 서술형 구역(★3 출발)이나 실질은 합 공식 + 유리화 표준 — 구역 신호와 1단 차이.
  tier: star_2
  mechanism_primary: "S_n=n(n+2) → (S_{n+1}−S_n)/(√S_{n+1}+√S_n)=(2n+3)/(√(n²+4n+3)+√(n²+2n)) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(답 무관) · 공차 d(→ 답 √(d/2)). 제약: d/2 가 완전제곱(d=2, 8, 18)이어야 답이 유리수 · 근호 안 S_n 이 모든 n 에서 양수."
    creative: "(1) √S_{n+1}−√S_n 대신 S_{n+1}−S_n 의 극한(=a_{n+1} 발산)으로 발산 판정 ★1 (2) 등비수열 합으로 바꾸면 rⁿ 최고차 골조 ★2 (3) lim n(√S_{n+1}−√S_n−1) 처럼 다음 차수 오차를 물으면 이중 유리화 ★4."
```

```yaml
- id: RPM-CALC2-0139
  page: 23
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    lim (rⁿ+10ⁿ)/(rⁿ−10ⁿ)=−1 을 만족시키는 정수 r 의 개수(|r|≠10). 주관식(서술형).
  category: "|r|<10 · |r|>10 분기 → 극한 −1 인 갈래 선택 → 정수 세기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "r 과 10 의 크기 관계로 극한이 −1(|r|<10) 또는 1(|r|>10) 로 갈리는 범위 분기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "rⁿ 을 포함한 식의 극한 — 범위 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |r|<10 이면 (r/10)ⁿ→0 이라 극한 −1, |r|>10 이면 (10/r)ⁿ→0 이라 극한 1. 조건은 |r|<10 → r=−9~9 의 19 개. 범위 분기 1개(MI d1) · r=±10 제외와 0·음수 포함이 함정(T-범위·T-경계). 서술형 ★3 출발 · 통찰 1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "|r|<10: 극한 −1 · |r|>10: 극한 1 → |r|<10 → 정수 19 개"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$19$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 10 → m(개수 2m−1) · 극한값 −1 대신 1 로 두면 |r|>m 이라 무한 개(범위로 물어야 함). 제약: r=±m 제외 조건을 남겨야 분모 0·진동이 안 생김 · 개수가 유한한 갈래를 답으로."
    creative: "(1) (r^{2n}+10ⁿ)/(rⁿ+10ⁿ) 처럼 r² 과 10 비교로 바꾸면 √10 경계 ★3 (2) 「극한값이 존재하도록 하는 정수 r」 로 바꾸면 r=−10 진동 판정 포함 ★3 (3) 극한값을 r 의 함수 g(r) 로 정의하고 g(r)=g(2r) 인 r 을 물으면 갈래 조합 ★4."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0140
  page: 23
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    1 보다 큰 두 실수 a, b 에 대해 lim (2ⁿ+a^{n+1})/(2^{n+1}+aⁿ)=a, lim (aⁿ+b^{n+1})/(a^{n+1}+bⁿ)=4/a 일 때 a²+b² 의 값. 주관식.
  category: "밑 비교 분기(a 대 2 → a>2 범위) → 두 번째 분기(b 대 a) 기각 → a=b=4"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "첫 조건은 a>2 이면 극한이 a 로 항등 성립, a=2 이면 1, a<2 이면 1/2 — 값이 아니라 범위 a>2 만 나오는 분기"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 조건의 세 갈래 중 b>a 는 ab=4 가 a, b>2 와 모순, b<a 는 1=4 모순으로 기각하고 b=a 갈래만 1=4/a 로 채택 — 첫 단계 결과와 대조하는 사후 기각이 본질"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "rⁿ 을 포함한 식의 극한 — 범위 분기와 기각"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 조건은 a 를 결정하지 않고 a>2 라는 범위만 준다(a>2 이면 항등 성립). 둘째 조건에서 b>a 갈래는 ab=4 가 a, b>2 와 모순, b<a 갈래는 1=4 모순, b=a 갈래만 1=4/a 로 a=4 → a²+b²=32. 밑 크기 분기(MI d1) 뒤 첫 결과와 대조해 갈래를 기각하는 검증(VF d2)이 골조. 실력 Up ★4 출발 · 통찰 2·M_total 8 → ★4 유지(★5 는 통찰 3 필요). 통찰형.
    [분류 이슈] 통찰 2(MI+VF d2)·M_total 8 — ★5 조건(통찰 3) 미달로 ★4 · 카탈로그가 생기면 재검토.
  tier: star_4
  mechanism_primary: "조건1: a>2 (범위만) → 조건2: b>a·b<a 기각, b=a → 1=4/a → a=b=4 → 32"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2(→ a 의 하한) · 4/a 의 4(→ b=a 갈래에서 a=4 · 하한보다 커야 함) · 묻는 식. 제약: b>a 갈래의 ab=k 가 a, b>하한 과 모순이 되도록 k ≤ 하한² 유지(여기선 4=2²) — 아니면 해가 추가돼 답이 바뀜."
    creative: "(1) 4/a 를 9/a 로 바꾸면 b>a 갈래 ab=9 가 살아나 무한 해 → 「a+b 의 최솟값」 문제로 골조 변경 ★5 후보 (2) 첫 조건을 빼고 a>2 를 직접 주면 VF 만 남아 ★3 (3) 세 실수 a<b<c 로 조건 세 개를 주면 분기 트리 ★5."
```

```yaml
- id: RPM-CALC2-0141
  page: 23
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    f(x)=lim ((a−3)x^{2n+1}+3x)/(3x^{2n}+1) 로 정의된 함수에 대해 (f∘f)(1)=5/6 이 되도록 하는 모든 실수 a 의 값의 합. 주관식.
  category: "범위별 f 확정(|x|<1: 3x · |x|>1: (a−3)x/3 · x=±1) → f(1)=a/4 → f(a/4) 갈래별 방정식 → 범위 검증"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^{2n} 의 극한으로 |x|<1, |x|>1, x=±1 세 갈래 함수식을 확정"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(1)=a/4 의 위치에 따라 f(a/4) 식이 갈리므로 갈래별로 푼 후보 a=10/9, ±4, 5, −2 를 각 범위 조건에 재대입해 4, −4, −2 를 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "xⁿ 을 포함한 극한으로 정의된 함수 — 합성·범위 검증"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    |x|<1 이면 f=3x, |x|>1 이면 f=(a−3)x/3, f(1)=a/4, f(−1)=−a/4. (f∘f)(1)=f(a/4): |a/4|<1 갈래 3a/4=5/6 → a=10/9(적합), |a/4|>1 갈래 a(a−3)/12=5/6 → a=5(적합)·a=−2(|−1/2|<1 이라 기각), a/4=±1 갈래는 값이 1 이라 기각 → 합 55/9. 범위 분기(MI d1) 뒤 후보 다섯 중 셋을 범위로 기각하는 검증(VF d2)이 본질 · 합성과 매개변수로 추상도 3. 실력 Up ★4 출발 · 통찰 2·M_total 10 → ★4 유지(★5 는 통찰 3 필요). 통찰형.
    [분류 이슈] 통찰 2(MI+VF d2)·M_total 10 — ★5 후보이나 통찰 3 미달로 ★4.
  tier: star_4
  mechanism_primary: "f 갈래 확정 → f(1)=a/4 → f(a/4)=5/6 을 |a/4|<1·>1·=±1 로 풀기 → 범위 검증(4, −4, −2 기각) → 10/9+5=55/9"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{55}{9}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc2/items/0141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (a−3), 3, 3 과 목표값 5/6 · 합성 시작점 1(→ f(1)=a/4 · 다른 점이면 갈래가 달라짐). 제약: 목표값을 바꾸면 |a/4|>1 갈래 이차방정식의 두 근 중 하나만 범위 검증에서 기각되도록 판별식·근의 위치를 확인 · 짝수 지수 x^{2n} 을 유지해 x=−1 에서 분모가 0 이 되지 않게."
    creative: "(1) (f∘f)(1) 대신 f(f(x))=x 의 실근 개수로 바꾸면 갈래 곱이 늘어 ★5 후보(VF+MI+SC) (2) 합성을 빼고 f(k)=5/6 인 k 를 물으면 VF d1 ★3 (3) 지수를 x^{2n+1}/x^{2n} 대신 x^n 으로 바꾸면 x=−1 정의 문제가 생겨 T-표기 함정 추가 ★4."
```

```yaml
- id: RPM-CALC2-0142
  page: 23
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    점 (2, 0) 을 지나고 직선 y=x 와 점 (n, n) 에서 접하는 원의 중심 (a_n, b_n) 에 대해 lim (a_n+2b_n)/n² 의 값. 주관식. 그림 있음.
  category: "접점의 법선 위에 중심(a_n+b_n=2n) + 두 점까지 거리 같음 → a_n, b_n 을 n 의 이차식으로 → 최고차"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y=x 에 (n, n) 에서 접함」을 중심이 법선 x+y=2n 위에 있다는 식과 반지름 등식(중심~(n, n) 거리 = 중심~(2, 0) 거리) 두 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수열의 극한의 활용 — 도형의 성질(닮음·접함)로 좌표 유도"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접점에서 반지름이 접선에 수직이므로 b_n−n=−(a_n−n), 즉 a_n+b_n=2n. 중심에서 (n, n) 과 (2, 0) 까지 거리가 같다는 등식에 대입하면 2(a_n−n)²=(a_n−2)²+(2n−a_n)² → a_n=(n²+2)/2, b_n=(−n²+4n−2)/2. a_n+2b_n=(−n²+8n−2)/2 → n² 으로 나눠 −1/2. 접함 조건을 두 대수식으로 옮기는 표현 전환(RT d2) 뒤 이차식 정리가 무겁다(M_total 9). 실력 Up ★4 출발 · 통찰 1(d2)·M_total 9 → ★4 유지. 통찰형.
  tier: star_4
  mechanism_primary: "접선⊥반지름 → a_n+b_n=2n → 거리 등식 → a_n=(n²+2)/2, b_n=(4n−n²−2)/2 → (a_n+2b_n)/n² → −1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "해설"
  figure: "crop:fig-0142.png"
  latex: latex-bank/rpm-calc2/items/0142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (2, 0) → (p, 0)(a_n=n²/p+p/2, b_n=2n−a_n · 답 −1/p) · 묻는 식의 계수 조합. 제약: p≠0 · (a_n+b_n) 을 물으면 2n 이라 0 으로 퇴화하므로 계수 조합은 a_n 과 b_n 의 n² 계수가 상쇄되지 않게 · 그림의 접점 (n, n)·점 2 라벨 고정."
    creative: "(1) 접선을 y=x 대신 y=mx 로 두면 법선 기울기 −1/m 이 들어와 계수 처리 ★4 (2) 반지름 r_n 의 극한 r_n/n² 을 물으면 거리 식만으로 충분(RT d1) ★3 (3) 원이 두 직선 y=x, y=−x 에 모두 접하는 조건으로 바꾸면 대칭성으로 중심이 축 위 → SYM 골조 ★4."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 6 · ★2 18 · ★3 9 · ★4 3 · ★5 0
- 통찰형 4(0126 · 0140 · 0141 · 0142) · 절차형 32 · premium 0 · 통찰 라벨이 있는 블록 16(단일 d1 통찰 12 는 절차형으로 둠)
- 구역별: 유형 16 활용 6문(★1 1 · ★2 4 · ★3 1) · 시험에 꼭 나오는 문제 23문(★1 5 · ★2 12 · ★3 6) · 서술형 주관식 4문(★2 2 · ★3 2) · 실력 Up 3문(★4 3)
- type_hint 상위: 「수열의 극한의 활용」 9(좌표 직독 4 · 교점·접선·넓이 3 · 도형 성질(닮음·접함) 2) · 「등비수열의 극한·수렴 조건」 5 · 「수열의 극한의 성질(재구성·연립·대입)」 4 · 「rⁿ·xⁿ 범위 분기(정의된 함수 포함)」 4 · 「극한값이 주어진 식의 미정계수」 3 · 「등차수열의 극한」 3
- 통찰 유형 분포: I-RT 5(d1 4 · d2 1) · I-BW 4 · I-MI 4 · I-VF 2(d2) · I-EQV 2(d1 1 · d2 1) · I-PD 1
- 그림: 7문(`crop:fig-0107.png` · `crop:fig-0109.png` · `crop:fig-0110.png` · `crop:fig-0111.png` · `crop:fig-0112.png` · `crop:fig-0135.png` · `crop:fig-0142.png`)
- 전사 답 확인 필요: 없음(36문 전부 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0122 | 통찰 0 인데 M_total 7(매개변수 유리화 + √a 이차방정식)만으로 ★3 · 교육청 기출 — 절차형 ★2 후보와 갈림 | ★2 / ★3 |
| RPM-CALC2-0124 | 역표현(EQV d1) 엄밀 풀이 기준 ★3 · α 가정 지름길 기준 ★2 — 라벨 ★2 | ★2 / ★3 |
| RPM-CALC2-0131 | 통찰 0 · M_total 7(추상 r · 경계 함정 2)로 ★3 — 경계 함정을 아는 학생에겐 ★2 | ★2 / ★3 |
| RPM-CALC2-0136 | 서술형 구역(★3 출발)이지만 실질은 극한값 연립 대입 ★2 | ★2 |
| RPM-CALC2-0138 | 서술형 구역(★3 출발)이지만 실질은 합 공식 + 유리화 ★2 | ★2 |
| RPM-CALC2-0140 | 통찰 2(MI d1 + VF d2) · M_total 8 — ★5 조건(통찰 3 + VF)에서 통찰 수 미달로 ★4 · 카탈로그 생기면 재검토 | ★4 / ★5 |
| RPM-CALC2-0141 | 통찰 2(MI d1 + VF d2) · M_total 10 — ★5 후보이나 통찰 3 미달로 ★4 | ★4 / ★5 |
| 0113 · 0114 · 0116 · 0118 · 0135 | 「시험에 꼭 나오는 문제」 출발 ★2 보다 1단 낮은 ★1 — 종합 구역 앞부분의 복습 문항 패턴(M_total 4~5 · 통찰 0) | ★1 |
| 유형 16 활용(0107~0112 · 0134 · 0135 · 0142) | 좌표 직독 / 교점·접선·넓이 / 도형 성질 경유 세 갈래를 카탈로그에서 한 유형으로 둘지, RT 라벨 기준(직독=절차 · 기하 사실 경유=RT d1 · 두 조건 결합=RT d2)을 어디에 명문화할지 결정 필요 | — |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「수열의 극한의 활용」 9 · 「등비수열의 극한·수렴 조건」 5 · 「수열의 극한의 성질」 4 · 「rⁿ·xⁿ 범위 분기」 4 · 「극한값이 주어진 미정계수」 3 · 「등차수열의 극한」 3 · 그 외 단발(수렴·발산 판정 · 방정식 근 수열 · 역표현 · 샌드위치 · 참·거짓 · 망원곱) 6.
- 따로 세워야 할 유형: (a) 활용 중 「도형 성질(닮음·접함)로 좌표 유도」(0112 · 0142)는 base ★3~4 로 「좌표 직독」(0107 · 0108 · 0134 · 0135 · base ★1~2)과 분리. (b) rⁿ·xⁿ 범위 분기 중 「분기 뒤 기각(VF)」(0140 · 0141 · base ★4)은 「분기만」(0133 · 0139 · base ★2~3)과 분리. (c) 샌드위치 중 「완전제곱으로 범위 추출」(0126)은 base ★3 으로 「범위가 직접 주어진 샌드위치」와 구분.
- 통합해도 될 유형: 「극한값이 주어진 미정계수」의 차수 맞추기(0119) · 근호 차(0122 · 0123) · 등비 공비 결정(0132) · 등차 계수 비교(0117)는 모두 「극한값 조건 → 계수 역추적(BW d1)」 한 유형의 sub-variant 로 묶을 수 있음. 「수열의 극한의 성질」(0114 · 0115 · 0125 · 0136)과 「수렴 수열 역표현」(0124)는 한 유형에 두고 depth(직접 대입 0 · 재구성 0 · 역표현 EQV d1)로 구분.
- 이 범위의 ★4 세 문항은 모두 실력 Up 구역이며 통찰 조합이 MI+VF(0140 · 0141) 또는 RT d2(0142)로 서로 다르다. 카탈로그에서 ★4 슬롯 후보 유형으로 「범위 분기 + 사후 기각」과 「접함 조건의 대수화」 두 개를 우선 등록할 것.
