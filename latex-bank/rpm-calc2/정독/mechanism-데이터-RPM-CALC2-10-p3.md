---
name: mechanism-데이터-RPM-CALC2-10-p3
description: RPM 미적분Ⅱ 10 정적분의 활용(3/3 · 유형 12~유형 UP 16 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 10 정적분의 활용
  unit_code: CALC2-10
  part: "3/3"
  extract_range: "161~166쪽 · 1139~1178"
  total_problems: 40
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 10 정적분의 활용 (3/3) 정독 데이터 (v1.0)

이 파일은 10단원의 마지막 3분의 1인 161~166쪽 40문항(1139~1178)을 다룬다. 구역은 「유형 12 직선 위의 점이 움직인 거리」·「유형 13 평면 위의 점이 움직인 거리」·「유형 14 곡선의 길이」·「유형 UP 15 정적분과 급수의 활용」·「유형 UP 16 역함수의 그래프와 넓이」와 중단원 마무리인 「시험에 꼭 나오는 문제」·「서술형 주관식」·「실력 Up」이다. 앞 두 파트가 넓이·부피를 다뤘다면 이 파트는 속도의 절댓값 적분(움직인 거리)·곡선의 길이·구분구적법·역함수 대칭으로 도구가 옮겨 가고, 마지막 세 구역에서 단원 전체(급수·넓이·부피·거리·길이)가 섞여 나온다.

RPM 의 난이도 신호는 구역이 먼저다. 「유형 NN」은 기본 유형(난이도 하·중하 → ★1~2 · 중 → ★2 · 상중 → ★3 · 상 → ★4), 「유형 UP NN」은 심화 유형으로 ★3 출발, 「시험에 꼭 나오는 문제」는 중단원 종합으로 level 이 없으면 ★2~3, 「서술형 주관식」은 ★3, 「실력 Up」은 ★4 출발이다. 여기에 tag(대표문제·중요·서술형·수능 기출)와 M_total·통찰 수로 ±1 조정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조를 끝낸 값을 그대로 옮겼고, 정독에서 수치를 다시 검산하지 않았다.

## 문항 데이터

### 유형 12 직선 위의 점이 움직인 거리

```yaml
- id: RPM-CALC2-1139
  page: 161
  vendor_label: "유형 12 직선 위의 점이 움직인 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 P 의 속도가 v(t)=e^t-e 일 때 t=0 에서 t=3 까지 움직인 거리.
  category: "속도의 부호 판정 → 구간 분할 → |v| 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 위의 점이 움직인 거리 — 속도의 절댓값 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    움직인 거리는 위치 변화가 아니라 ∫|v| 이므로 v=0 인 t=1 에서 구간을 나눠 부호를 뒤집어 더한다. 부호 분할은 이 유형의 표준 절차라 통찰로 세지 않았다. 유형 구역 대표문제 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "v(t)=0 인 t=1 로 구간 분할 → [0,1] 은 부호 반전 → ∫|v| 두 조각 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^3-3e+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 상수(e^t-e → 2^t-4, e^t-e^2)와 끝 시각 3 을 바꿀 수 있다. 제약: v=0 이 되는 시각이 구간 안에 정확히 하나 있어야 부호 분할이 한 번으로 끝나고, 적분 결과가 초월수 한 덩어리로 정리돼야 한다."
    creative: "(1) 같은 v 로 위치 변화(∫v)를 물으면 부호 분할이 사라져 ★1 (2) t=0~3 대신 「출발점으로 되돌아오는 시각」을 물으면 방정식 풀이가 붙어 ★3 (3) v 를 구간별로 정의된 함수로 주면 Mₛ 상승 ★3."
```

```yaml
- id: RPM-CALC2-1140
  page: 161
  vendor_label: "유형 12 직선 위의 점이 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    v(t)=sin t 인 점 P 가 t=0 에서 t=a 까지 움직인 거리가 6 일 때 양수 a. 5지선다.
  category: "|sin t| 의 반주기 넓이 2 → 누적 6 → a 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|sin t| 의 길이 π 구간 적분이 항상 2 라는 주기성을 써서 거리 6 을 π 단위 세 칸으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "움직인 거리 조건으로 시각 구하기(주기함수 속도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간마다 ∫|sin t| 를 따로 계산하면 길어지지만 반주기마다 넓이가 2 로 일정함을 쓰면 6=2×3 → a=3π 한 줄. 주기 인식 통찰 1개(PD d1) · M_total 6 → 유형 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "반주기 [kπ,(k+1)π] 마다 ∫|sin t|=2 → 6=2×3 → a=3π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리 값 6 을 2 의 배수(4·8·10)로, v 를 sin 2t·cos t 로 바꿀 수 있다. 제약: 거리가 반주기 넓이의 정수배여야 a 가 선택지에 넣을 수 있는 π 의 유리수배로 떨어진다. 정수배가 아니면 마지막 조각의 부분적분이 붙어 난이도가 튄다."
    creative: "(1) 거리를 5 처럼 반주기 넓이의 정수배가 아닌 값으로 주면 마지막 조각에서 arccos 가 나와 ★3 (2) v=|sin t| 로 직접 주면 부호 논의가 사라져 ★1 (3) 「위치가 처음으로 다시 0 이 되는 시각」을 물으면 골조가 1141 쪽으로 옮겨 간다."
```

```yaml
- id: RPM-CALC2-1141
  page: 161
  vendor_label: "유형 12 직선 위의 점이 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점에서 출발하고 v(t)=sin πt 인 점 P 가 0<t<10 에서 원점을 지나는 횟수.
  category: "속도 적분 → 위치함수 → 위치=0 의 근 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점을 지난다」를 위치함수 x(t)=∫₀ᵗ v 의 값이 0 이 되는 시각으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 적분으로 얻은 위치함수의 근 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리를 묻는 유형 안에 있지만 실제로는 위치함수 x(t)=(1-cos πt)/π 를 만들고 x(t)=0 의 근을 0<t<10 에서 세는 문제다. 조건 재해석 통찰 1개(EQV d1) · M_total 5 → ★2. t=0 을 세지 않는 열린 구간 경계가 함정.
  tier: star_2
  mechanism_primary: "x(t)=∫₀ᵗ sin πs ds=(1-cos πt)/π → x(t)=0 ⟺ cos πt=1 → 0<t<10 의 짝수 t 개수"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 계수 π 와 구간 끝 10 을 바꿀 수 있다(sin 2πt · 0<t<5 등). 제약: 구간 끝이 근과 겹치면 열린·닫힌 구간 처리로 답이 ±1 흔들리므로 끝값이 근이 아니도록 잡거나 의도적으로 겹치게 해 경계 함정을 노린다."
    creative: "(1) 「운동 방향을 바꾸는 횟수」로 바꾸면 v=0 의 근을 세게 되어 골조가 한 단계 짧아져 ★2 (2) 출발점을 원점이 아닌 x=1 로 두면 x(t)=0 이 cos 방정식이 되어 ★3 (3) v=sin πt + c 처럼 상수를 더하면 위치함수가 단조로 바뀌어 횟수가 0 이 되는 반례 문제로 쓸 수 있다."
```

```yaml
- id: RPM-CALC2-1142
  page: 161
  vendor_label: "유형 12 직선 위의 점이 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    v(t)=cos 2t-cos t 인 점 P 가 출발 후 처음으로 운동 방향을 바꿀 때까지 움직인 거리.
  category: "배각공식 → cos t 이차방정식 → 최소 양근까지 |v| 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "운동 방향이 바뀔 때까지 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방향 전환 시각은 v=0 의 부호 변화점이므로 cos 2t=2cos²t-1 로 고쳐 (2cos t+1)(cos t-1)=0 을 풀고 최소 양근 t=2π/3 을 얻는다. 그 구간에서 v<0 이므로 부호를 뒤집어 적분. 배각공식·부호 판정 모두 이 단원의 표준 절차라 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "cos 2t=2cos²t-1 → 이차방정식의 최소 양근 t=2π/3 → 그 구간 v<0 이므로 -∫v"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{3}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v 를 cos 2t-cos t 대신 cos 2t+cos t · sin 2t-sin t 등으로 바꿀 수 있다. 제약: 배각공식으로 정리했을 때 인수분해되는 이차식이어야 최소 양근이 특수각으로 떨어지고, 그 구간에서 v 의 부호가 한쪽으로 유지돼야 한 번의 적분으로 끝난다."
    creative: "(1) 「두 번째로 방향을 바꿀 때까지」로 바꾸면 부호가 두 번 뒤집혀 Mₛ·Mₜ 상승 ★3 (2) 같은 v 로 「위치의 최댓값」을 물으면 거리 대신 극값 판정이 되어 ★3 (3) v 에 매개변수 a 를 넣고 방향 전환 시각을 지정하면 역추적(I-BW)이 붙어 ★3."
```

### 유형 13 평면 위의 점이 움직인 거리

```yaml
- id: RPM-CALC2-1143
  page: 162
  vendor_label: "유형 13 평면 위의 점이 움직인 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    좌표평면 위의 점 P 의 위치가 x=2t-1, y=e^t+e^(-t) 일 때 t=0 에서 t=3 까지 움직인 거리.
  category: "속도 성분 → √(x'²+y'²) 완전제곱 정리 → 정적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위의 점이 움직인 거리 — 속력 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x'=2, y'=e^t-e^(-t) 를 넣으면 근호 안이 (e^t+e^(-t))² 로 완전제곱이 되어 근호가 풀린다. 이 유형의 문제는 모두 이 완전제곱 구조로 설계되어 있어 통찰로 세지 않았다. 통찰 0 · M_total 5 로 −1 후보지만 유형 대표문제이고 근호 정리 단계가 실질적이어서 ★2 유지.
  tier: star_2
  mechanism_primary: "x'=2, y'=e^t-e^(-t) → x'²+y'²=(e^t+e^(-t))² → ∫₀³ (e^t+e^(-t)) dt"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^3-\dfrac{1}{e^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 기울기 2 와 y 의 지수 계수, 끝 시각 3 을 바꿀 수 있다. 제약: x'²+y'² 가 완전제곱이 되려면 x' 상수 c 와 y'=a(e^t-e^(-t)) 사이에 c²=4a² 가 맞아야 한다(여기서는 c=2, a=1). 이 관계를 깨면 근호가 풀리지 않아 고교 범위를 벗어난다."
    creative: "(1) x=2t-1 대신 x=e^t-e^(-t) 로 두면 속력이 √2·(…) 꼴이 되어 ★2 유지 (2) 끝 시각을 미지수 a 로 두고 거리를 지정하면 역추적이 붙어 ★3(1171 과 같은 골조) (3) 같은 매개식으로 곡선의 길이를 묻는 유형 14 문제로 바꿔도 골조가 그대로다."
```

```yaml
- id: RPM-CALC2-1144
  page: 162
  vendor_label: "유형 13 평면 위의 점이 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=√3 sin t+cos t, y=√3 cos t-sin t 인 점 P 가 t=0 에서 t=a 까지 움직인 거리가 2π 일 때 양수 a.
  category: "속도 성분 제곱합이 상수 → 등속 → 거리=속력×시간"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "움직인 거리 조건으로 시각 구하기(평면 운동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x', y' 를 제곱해 더하면 교차항이 상쇄되어 4 가 남고 속력이 상수 2 가 된다(점 P 는 반지름 2 인 원 위를 등속으로 돈다). 거리 2a=2π → a=π. 삼각항 상쇄는 이 유형의 설계된 계산이라 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x'²+y'²=4 (상수) → 속력 2 → 2a=2π → a=π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√3 과 1 의 조합을 (a, b) 로 일반화하면 속력이 √(a²+b²) 상수가 되고 거리 조건 값도 그에 맞춰 바꿔야 한다. 제약: x, y 가 같은 진폭의 sin·cos 조합이어야 교차항이 상쇄되고 속력이 상수로 남는다."
    creative: "(1) x²+y²=4 임을 먼저 보이게 해 「점 P 의 자취」를 묻는 소문항을 붙이면 I-RT 가 생겨 ★3 (2) 진폭에 e^t 를 곱하면 속력이 상수가 아니게 되어 1145·1170 골조로 이동 (3) 거리 대신 「한 바퀴 도는 데 걸리는 시간」을 물으면 주기 논의로 ★2 유지."
```

```yaml
- id: RPM-CALC2-1145
  page: 162
  vendor_label: "유형 13 평면 위의 점이 움직인 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=e^(-t) sin t, y=e^(-t) cos t 인 점 P 가 t=0 에서 t=a 까지 움직인 거리 L 의 a→∞ 극한.
  category: "속력 √2·e^(-t) → ∫₀ᵃ → a→∞ 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 움직인 거리와 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분으로 x', y' 를 구하면 제곱합이 2e^(-2t) 로 정리되어 속력이 √2·e^(-t). L=√2(1-e^(-a)) 이고 a→∞ 에서 e^(-a)→0. 지수 감쇠 극한이 붙지만 각 단계가 표준이라 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x'²+y'²=2e^(-2t) → 속력 √2 e^(-t) → L=√2(1-e^(-a)) → a→∞ 에서 √2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "감쇠 지수 e^(-t) 를 e^(-2t)·e^(-kt) 로 바꾸면 극한값이 √(1+k²)/k 꼴로 바뀐다. 제약: 지수가 음수여야 극한이 유한하고, sin·cos 진폭이 같아야 교차항이 상쇄된다."
    creative: "(1) 유한 구간 [0, π] 거리로 바꾸면 극한이 사라져 ★2 이하 (2) 같은 매개식에서 「점 P 가 원점에 한없이 가까워짐」을 보이게 하면 자취·극한이 결합돼 ★3 (3) 지수를 e^t 로 뒤집으면 발산하므로 「거리가 M 을 넘는 최초 시각」 문제로 바꿀 수 있다(★3)."
```

```yaml
- id: RPM-CALC2-1146
  page: 162
  vendor_label: "유형 13 평면 위의 점이 움직인 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=sin²t, y=cos²t 인 점 P 가 출발 후 처음으로 속력이 0 이 될 때까지 움직인 거리. 5지선다.
  category: "속력 √2|sin 2t| → 속력 0 최초 시각 → 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x+y=1 이므로 점 P 가 선분 위를 왕복함을 알아보면 거리를 좌표 변화폭으로 바로 읽을 수 있음(대수 매개식 → 기하)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속력이 0 이 될 때까지 움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x'=sin 2t, y'=-sin 2t 이므로 속력은 √2|sin 2t| 이고 처음 0 이 되는 시각은 t=π/2. 그 구간에서 sin 2t≥0 이라 절댓값이 풀린다. x+y=1 을 알아보면 점이 선분 (0,1)→(1,0) 을 한 번 지나므로 거리 √2 가 기하적으로 바로 보인다(표현 전환 d1). 벤더 상중 유지 ★3. [분류 이슈] 직접 적분만으로도 두 줄에 끝나 ★2 후보.
  tier: star_3
  mechanism_primary: "x'=-y'=sin 2t → 속력 √2|sin 2t| → 최초 0 인 t=π/2 → ∫₀^(π/2) √2 sin 2t dt"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin²t·cos²t 를 sin²(kt)·cos²(kt) 로 바꾸면 속력 0 시각이 π/(2k) 로 줄고 거리는 그대로 √2 다. 제약: x+y 가 상수로 유지되는 조합이어야 선분 왕복 구조가 살아 있다."
    creative: "(1) 「두 번째로 속력이 0 이 될 때까지」로 바꾸면 왕복이 한 번 더해져 거리 2√2 · ★3 유지 (2) x=sin²t, y=sin t 처럼 상수합 구조를 깨면 근호가 안 풀려 고교 범위를 벗어난다 (3) 점 P 의 자취를 먼저 묻는 소문항을 붙이면 I-RT 가 명시되어 ★2 로 내려간다."
```

### 유형 14 곡선의 길이

```yaml
- id: RPM-CALC2-1147
  page: 162
  vendor_label: "유형 14 곡선의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 x=(1/2)(t+1/t), y=ln t (1≤t≤e) 의 길이. 5지선다.
  category: "매개변수 곡선의 길이 공식 → 근호 안 완전제곱 → 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x'=(1/2)(1-1/t²), y'=1/t 를 넣으면 x'²+y'² 가 {(1/2)(1+1/t²)}² 로 완전제곱이 되어 근호가 풀린다. 이 완전제곱 구조가 곡선의 길이 유형의 설계 전제라 통찰로 세지 않았다. 대표문제 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x'²+y'²={(1/2)(1+1/t²)}² → ∫₁^e (1/2)(1+1/t²) dt"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [1, e] 를 [1, e²]·[1/e, e] 로, 계수 1/2 를 a 로 바꿀 수 있다. 제약: x'²+y'² 가 완전제곱이 되려면 x=(a)(t+1/t), y=2a ln t 처럼 계수가 맞물려야 한다. 임의로 계수를 바꾸면 근호가 풀리지 않는다."
    creative: "(1) y=ln t 대신 x, y 를 맞바꾸면 같은 길이가 나오는 대칭 문제 ★2 (2) 구간 끝을 미지수 a 로 두고 길이를 지정하면 역추적이 붙어 ★3(1150 골조) (3) 같은 곡선을 y=f(x) 꼴로 고쳐 쓰라고 하면 역함수·쌍곡선 정리가 붙어 ★3."
```

```yaml
- id: RPM-CALC2-1148
  page: 162
  vendor_label: "유형 14 곡선의 길이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=(1/2)x²-(1/4)ln x (1≤x≤e) 의 길이.
  category: "y=f(x) 곡선의 길이 공식 → 1+y'² 완전제곱 → 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f(x) 꼴 곡선의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=x-1/(4x) 이므로 1+y'²=(x+1/(4x))² 로 완전제곱. 근호를 풀고 적분하면 끝난다. 서술형 태그라 과정 서술이 요구되지만 골조는 한 갈래 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "1+y'²=(x+1/(4x))² → ∫₁^e (x+1/(4x)) dx"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}e^2-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=(a/2)x²-(1/(8a))ln x 꼴로 계수를 맞물리게 바꾸면 1+y'² 가 계속 완전제곱으로 남는다. 제약: 이차항 계수 a 와 로그항 계수가 1/(8a) 관계를 만족해야 하고, ln 항의 부호가 음수여야 (x+…)² 로 정리된다."
    creative: "(1) 구간을 [1, e^k] 로 두고 길이를 지정해 k 를 묻는 역추적 ★3 (2) 같은 곡선의 x=1~e 회전체 부피를 물으면 도구가 바뀌어 단원 앞부분으로 이동 (3) 로그항의 부호를 +로 바꾸면 근호가 풀리지 않아 완전제곱 설계의 필요성을 보여 주는 반례로 쓸 수 있다."
```

```yaml
- id: RPM-CALC2-1149
  page: 162
  vendor_label: "유형 14 곡선의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 x=2t²-1, y=t³ (0≤t≤1) 의 길이.
  category: "매개변수 길이 적분 → t 를 밖으로 빼고 치환적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 곡선의 길이(치환적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x'=4t, y'=3t² 이라 근호 안이 t²(16+9t²) 이고 0≤t≤1 에서 t≥0 이므로 t 를 근호 밖으로 낸다. u=16+9t² 치환으로 끝. 부호 조건(t≥0) 확인이 유일한 함정 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "√(x'²+y'²)=t√(16+9t²) (t≥0) → u=16+9t² 치환 → ∫₁₆²⁵ √u du 꼴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{61}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·1 을 바꿔 (x=at², y=bt³) 로 두면 근호 안이 t²(4a²+9b²t²) 이 된다. 제약: 치환 후 상·하한이 완전제곱수가 되도록 계수를 고르면 답이 유리수로 떨어진다(여기서는 16 과 25)."
    creative: "(1) 구간을 [-1, 1] 로 넓히면 t<0 에서 |t| 처리가 필요해 Mₜ 상승 ★3 (2) 길이를 주고 구간 끝 a 를 묻는 역추적 ★3 (3) 같은 곡선을 y² 와 x 의 관계식으로 바꿔 y=f(x) 꼴 길이 공식으로 풀게 하면 I-RT 가 생겨 ★3."
```

```yaml
- id: RPM-CALC2-1150
  page: 162
  vendor_label: "유형 14 곡선의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤a 에서 곡선 y=(1/4)(e^(2x)+e^(-2x)) 의 길이가 15/16 일 때 양수 a.
  category: "길이 적분 완전제곱 → 길이식=15/16 → e^(2a) 이차방정식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 값이 먼저 주어지고 적분 상한 a 를 역추적 — u=e^(2a) 치환 이차방정식으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선의 길이 조건으로 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1+y'² 가 {(1/2)(e^(2x)+e^(-2x))}² 로 완전제곱이 되어 길이가 (1/4)(e^(2a)-e^(-2a)). 이를 15/16 과 놓고 u=e^(2a)>0 으로 치환하면 이차방정식이 되고 음근은 u>0 으로 기각한다. 역추적 통찰 1개 · M_total 8 → 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "1+y'² 완전제곱 → 길이 (1/4)(e^(2a)-e^(-2a))=15/16 → u=e^(2a) 이차방정식 → a=ln 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "길이 값 15/16 을 e^(2a) 가 정수(3·4·5)가 되게 고르면 a=ln(정수) 로 떨어진다. 제약: (1/4)(u-1/u)=L 의 양근이 유리수여야 하고, 계수 1/4·2 는 완전제곱 구조를 유지하도록 함께 바꿔야 한다."
    creative: "(1) 길이 대신 넓이 조건을 주면 적분식이 달라져 같은 ★3 (2) 구간을 [-a, a] 로 두면 대칭성(I-SYM)이 붙고 길이가 두 배 ★3 (3) a 를 주고 길이를 묻는 정방향으로 바꾸면 역추적이 사라져 ★2."
```

### 유형 UP 15 정적분과 급수의 활용

```yaml
- id: RPM-CALC2-1151
  page: 163
  vendor_label: "유형 UP 15 정적분과 급수의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    구간 [0,1] 의 n등분점 A_k 에서 y 축에 평행한 직선이 곡선 y=x² 과 만나는 점을 B_k 라 할 때 (1/n)Σ(k=1~n) 선분 A_kB_k 의 n→∞ 극한.
  category: "선분 길이를 k/n 의 함수로 → 구분구적법 → 정적분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하적 선분 길이의 합을 (1/n)Σf(k/n) 꼴로 옮겨 정적분으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구분구적법 — 선분 길이의 급수를 정적분으로"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A_k=(k/n, 0) 이므로 선분 A_kB_k=(k/n)². 합이 (1/n)Σ(k/n)² 이 되어 ∫₀¹ x² dx=1/3. 기하 → 급수 → 정적분 전환 통찰 1개 · 유형 UP 구역 ★3 출발 유지. 합의 범위가 k=1~n 인지 n-1 인지는 극한에서 차이가 없다는 점이 경계 함정.
  tier: star_3
  mechanism_primary: "A_kB_k=(k/n)² → (1/n)Σ(k/n)² → ∫₀¹ x² dx"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: "crop:fig-1151.png"
  latex: latex-bank/rpm-calc2/items/1151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=x³·y=√x·y=e^x 로, 구간을 [0,2] 로 바꿀 수 있다(구간을 바꾸면 Δx=2/n 이 되어 계수가 따라 바뀐다). 제약: 그림의 라벨 A_k·B_k·A_n(1,0) 은 고정이고, 정적분이 고교 범위에서 계산되는 함수여야 한다."
    creative: "(1) 선분 길이의 제곱 합을 물으면 ∫x⁴ 가 되어 ★3 유지 (2) 사다리꼴·직사각형 넓이의 합으로 바꾸면 넓이-구분구적 결합 ★3 (3) 두 곡선 사이의 선분 길이로 바꾸면 피적분함수가 차로 바뀌어 ★3, 곡선 중 하나를 매개변수로 두면 ★4."
```

```yaml
- id: RPM-CALC2-1152
  page: 163
  vendor_label: "유형 UP 15 정적분과 급수의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    AB=BC=1, ∠B=90° 인 직각이등변삼각형 ABC 에서 변 AB 의 n등분점 B_k 를 지나 BC 에 평행한 직선이 AC 와 만나는 점 C_k 일 때 (2/n)Σ(k=1~n-1) (선분 B_kC_k)³ 의 n→∞ 극한.
  category: "닮음비로 선분 길이 k/n → 구분구적법 → 2∫₀¹ x³ dx"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "닮음비로 얻은 선분 길이를 k/n 의 함수로 옮겨 급수를 정적분으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "닮음비로 얻은 선분 길이의 급수 → 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점 A 에 가까운 쪽부터 세므로 삼각형 AB_kC_k 와 ABC 의 닮음비가 k/n 이고 선분 B_kC_k=k/n. 합이 2·(1/n)Σ(k/n)³ → 2∫₀¹ x³ dx=1/2. 기하 → 급수 전환 통찰 1개 · 유형 UP ★3 유지. 번호를 A 쪽부터 매긴다는 조건을 놓치면 1-k/n 로 잘못 잡는 것이 함정.
  tier: star_3
  mechanism_primary: "닮음비 k/n → B_kC_k=k/n → (2/n)Σ(k/n)³ → 2∫₀¹ x³ dx"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-1152.png"
  latex: latex-bank/rpm-calc2/items/1152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거듭제곱 3 을 1·2·4 로, 앞의 계수 2/n 을 1/n·3/n 으로, 변의 길이 1 을 a 로 바꿀 수 있다. 제약: 그림의 점 번호가 A 에서 시작한다는 설정과 ∠B=90° 는 고정이고, 변의 길이를 바꾸면 선분 길이가 a·k/n 이 되어 답이 a 의 거듭제곱배가 된다."
    creative: "(1) 삼각형 AB_kC_k 의 넓이 합으로 바꾸면 피적분함수가 x² 가 되어 ★3 유지 (2) 번호를 B 쪽부터 매기면 1-k/n 이 되어 ∫₀¹(1-x)³ 으로 바뀌며 함정이 강해져 ★3 (3) 직각이등변을 30-60-90 으로 바꾸면 닮음비 계수가 달라져 계산만 무거워진다(질 저하 주의)."
```

```yaml
- id: RPM-CALC2-1153
  page: 163
  vendor_label: "유형 UP 15 정적분과 급수의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    반지름 2, 중심각 π/2 인 부채꼴 AOB 의 호 AB 를 n등분한 점 P_k 에서 선분 OA 에 내린 수선의 발이 Q_k 일 때 (1/n)Σ(k=1~n-1) 선분 P_kQ_k 의 n→∞ 극한.
  category: "호 등분 → 중심각 kπ/(2n) → P_kQ_k=2 sin → 구분구적법"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "호의 n등분을 중심각의 n등분으로 바꾸고 수선의 길이를 2 sin(kπ/2n) 으로 매개변수화해 급수를 ∫₀¹ 2 sin(πx/2) dx 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "호 등분과 수선 길이의 급수 → 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    호를 n등분하면 중심각이 등분되므로 ∠P_kOA=k(π/2)/n 이고 수선의 길이는 2 sin(kπ/2n). (1/n)Σ 꼴이므로 f(x)=2 sin(πx/2) 의 ∫₀¹ 로 옮긴다. 기하 → 삼각함수 매개변수 → 정적분의 2단 전환(RT d2) · 유형 UP ★3. [분류 이슈] 상중 + 통찰 d2 라 ★4 후보이나 골조가 표준 구분구적이라 ★3 유지.
  tier: star_3
  mechanism_primary: "호 등분 ⟹ 중심각 등분 → P_kQ_k=2 sin(kπ/2n) → (1/n)Σ → ∫₀¹ 2 sin(πx/2) dx"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{\pi}$'
  answer_source: "답지"
  figure: "crop:fig-1153.png"
  latex: latex-bank/rpm-calc2/items/1153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2 와 중심각 π/2 를 바꿀 수 있다(반지름 r, 중심각 θ → 답이 r 배·θ 에 따라 달라짐). 제약: 그림의 라벨(O·A·B·P_k·Q_k)과 「A 에 가까운 점부터」는 고정이고, 중심각이 π/2 를 넘으면 수선의 발이 선분 OA 의 연장 위로 나가 설정이 깨진다."
    creative: "(1) 수선의 발 대신 선분 OP_k 와 OA 가 이루는 삼각형의 넓이 합으로 바꾸면 sin·cos 곱 적분이 되어 ★4 (2) 선분 OQ_k(=2cos) 로 바꾸면 ∫cos 가 되어 ★3 유지 (3) 호 등분 대신 반지름 등분으로 바꾸면 각이 등분되지 않아 골조가 무너진다 — 이 설정이 통찰의 핵심."
```

### 유형 UP 16 역함수의 그래프와 넓이

```yaml
- id: RPM-CALC2-1154
  page: 163
  vendor_label: "유형 UP 16 역함수의 그래프와 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=√(3x-2) 의 역함수가 g(x) 일 때 두 곡선 y=f(x), y=g(x) 로 둘러싸인 도형의 넓이.
  category: "y=x 대칭 → f 와 y=x 사이 넓이의 2배"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 가 y=x 에 대칭이므로 두 곡선 사이 넓이를 f 와 y=x 사이 넓이의 두 배로 환원(g 를 직접 적분하지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프와 둘러싸인 넓이(y=x 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g 를 구해 적분하는 갈래도 있지만 y=x 대칭을 쓰면 f(x)=x 의 두 근 사이에서 f-x 를 적분해 두 배 하면 끝난다. 교점을 y=x 위에서 찾는 것도 같은 대칭에서 나온다. 대칭 활용 통찰 1개(d2) · 유형 UP ★3.
  tier: star_3
  mechanism_primary: "f(x)=x 의 두 근 구하기 → 2∫(f(x)-x)dx (y=x 대칭)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√(3x-2) 의 계수 3·2 를 바꿀 수 있다(√(ax-b)). 제약: f(x)=x 가 서로 다른 두 실근을 가져야 하고(판별식>0), 그 근이 정의역 x≥b/a 안에 있어야 한다. 근이 정수로 떨어지게 고르면 넓이가 유리수."
    creative: "(1) 넓이를 주고 계수를 묻는 역추적(1156 골조) ★3 (2) f 와 g 가 접하는 경우(중근)로 바꾸면 넓이가 0 이 되어 조건 판별 문제로 ★4 (3) f 를 log·지수로 바꾸면 f(x)=x 의 근이 특수값이어야 해 설계가 까다로워진다(1175 참조)."
```

```yaml
- id: RPM-CALC2-1155
  page: 163
  vendor_label: "유형 UP 16 역함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=e^x+1/2 의 역함수가 g(x) 일 때 ∫₀¹ f(x)dx + ∫(3/2 ~ e+1/2) g(x)dx 의 값.
  category: "역함수 정적분의 넓이 해석 → 직사각형 넓이로 합치기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 정적분을 좌표평면의 두 넓이로 읽고 합이 직사각형 하나가 됨을 보는 전환(적분 계산 → 넓이 분할)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정적분 — 직사각형 넓이 분할"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 구간의 끝이 f(0)=3/2, f(1)=e+1/2 로 맞춰져 있음을 알아채면 두 넓이가 x=0~1, y=0~f(1) 직사각형을 정확히 채워 답이 1×(e+1/2). g 를 실제로 구해 적분하면 훨씬 길다. 넓이 전환 통찰 1개(d2) · 유형 UP ★3. [분류 이슈] level 중 · M_total 5 라 ★2 후보.
  tier: star_3
  mechanism_primary: "적분 상·하한이 f(0), f(1) 임을 확인 → 두 넓이 합 = 1·f(1) - 0·f(0)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=e^x+c 의 c 와 구간 [0,1] 을 바꿀 수 있다. 제약: g 의 적분 구간이 반드시 [f(a), f(b)] 와 일치해야 직사각형 분할이 성립한다 — 이 대응을 깨면 문제가 성립하지 않는다."
    creative: "(1) 한쪽 적분값을 주고 다른 쪽을 묻는 형태로 바꿔도 ★3 유지 (2) 구간을 [f(a), f(b)] 가 아닌 값으로 어긋나게 주고 보정항을 계산하게 하면 ★4 (3) f 를 ln 계열로 바꾸면 g 가 지수가 되어 같은 골조 ★3."
```

```yaml
- id: RPM-CALC2-1156
  page: 163
  vendor_label: "유형 UP 16 역함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=√(kx) 와 역함수 g(x) 로 둘러싸인 도형의 넓이가 49/3 일 때 양수 k.
  category: "y=x 대칭 넓이 → k 의 식 → 넓이 조건으로 역추적"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=x 대칭으로 넓이를 2∫₀^k (√(kx)-x)dx 로 환원해 g 를 적분하지 않음"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 값 49/3 이 먼저 주어지고 k 를 역추적 — 넓이가 k²/3 임을 얻은 뒤 방정식"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "역함수 그래프로 둘러싸인 넓이 조건 → 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점은 √(kx)=x 에서 x=0, k. 대칭으로 넓이를 2∫₀^k(√(kx)-x)dx=k²/3 로 정리하고 49/3 과 놓으면 k=7. 대칭 + 역추적 통찰 2개로 +1 후보지만 적분 자체가 가벼워(계산 한 줄) 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "교점 x=0, k → 2∫₀^k(√(kx)-x)dx=k²/3 → k²/3=49/3 → k=7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 49/3 을 k²/3 이 되는 다른 값(16/3·25/3)으로 바꾸면 k 가 정수로 떨어진다. 제약: k>0 이어야 정의역과 교점이 살아 있고, 넓이는 반드시 k 의 제곱에 비례하므로 완전제곱 분자를 고른다."
    creative: "(1) f(x)=k√x 로 바꾸면 교점과 넓이 식이 달라져 같은 ★3 (2) 두 곡선이 접하는 k 를 묻는 문제로 바꾸면 판별식·접선 조건이 붙어 ★4 (3) 넓이 대신 교점 사이 거리를 주면 역추적이 단순해져 ★2."
```

```yaml
- id: RPM-CALC2-1157
  page: 163
  vendor_label: "유형 UP 16 역함수의 그래프와 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=x·e^x (0≤x≤1) 의 역함수가 g(x) 일 때 ∫₀^e g(x)dx 의 값. 그림에 y=f(x) 와 직선 y=x 가 주어짐.
  category: "역함수 적분 = 직사각형 - 원함수 적분 → 부분적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 의 정적분을 구하지 않고 넓이로 읽어 1·f(1) - ∫₀¹ f(x)dx 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정적분(직사각형 − 원함수 적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g 는 초등함수로 표현되지 않으므로 직접 적분이 불가능하고, 넓이 해석만이 길이다. f(0)=0, f(1)=e 이므로 ∫₀^e g = e·1 - ∫₀¹ xe^x dx 이고 뒤쪽은 부분적분. 넓이 전환 통찰 1개(d2) · 벤더 상중 ★3.
  tier: star_3
  mechanism_primary: "∫₀^e g(x)dx = 1·f(1) - ∫₀¹ f(x)dx → e - ∫₀¹ xe^x dx (부분적분)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: "crop:fig-1157.png"
  latex: latex-bank/rpm-calc2/items/1157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=xe^x 의 정의역 [0,1] 과 그에 맞춘 적분 상한 e=f(1) 을 함께 바꿔야 한다. 제약: 적분 상한이 반드시 f(정의역 끝) 이어야 직사각형 분할이 성립하고, f 는 구간에서 증가(일대일)해야 역함수가 존재한다. 그림의 y=x 보조선은 고정."
    creative: "(1) f(x)=x+ln x 처럼 역함수가 초등함수가 아닌 다른 예로 바꿔도 골조 유지 ★3 (2) ∫₀¹f + ∫₀^e g 를 한꺼번에 물으면 1155 의 직사각형 골조 ★3 (3) 정의역 끝을 미지수 a 로 두고 적분값을 지정하면 역추적이 겹쳐 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-1158
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    lim(n→∞) Σ(k=1~n) (ak²/n²)×(4/n) = ∫₀⁴ (-3x)² dx = b 일 때 상수 a, b 에 대하여 a+b.
  category: "급수를 [0,4] 구분구적으로 변환 → 두 정적분 비교 → a, b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Δx=4/n 에 맞춰 x=4k/n 으로 잡아 급수를 구간 [0,4] 의 정적분으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수를 정적분으로 바꾸어 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4/n 이 Δx 이므로 x=4k/n, 즉 k²/n²=x²/16 으로 바꿔야 [0,4] 적분이 된다. 이 계수 맞추기가 유일한 고비고 나머지는 다항식 적분. b 는 우변에서 바로 나오고 a 는 좌변 등식에서 역산. 전환 통찰 1개 · M_total 8 → 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "Δx=4/n, x=4k/n → 좌변=∫₀⁴ (a/16)x² dx → 우변 b=∫₀⁴ 9x² dx → a 역산 후 a+b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$336$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 4 와 우변의 (-3x)² 를 바꿀 수 있다. 제약: 좌변의 4/n 과 구간 끝이 같아야 하고, a 가 정수로 떨어지도록 우변 적분값이 좌변 계수의 배수여야 한다."
    creative: "(1) 좌변의 k²/n² 을 k³/n³ 으로 바꾸면 ∫x³ 이 되어 ★3 유지 (2) 구간을 [1,3] 처럼 0 에서 시작하지 않게 하면 x=1+2k/n 평행이동이 붙어 ★4 (3) 우변을 주지 않고 좌변만으로 극한값을 묻는 기본형으로 낮추면 ★2."
```

```yaml
- id: RPM-CALC2-1159
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    lim(n→∞) (π²/n²)(cos(π/n)+2cos(2π/n)+…+n cos(nπ/n)) 의 값. 5지선다.
  category: "급수를 ∫₀^π x cos x dx 로 환원 → 부분적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "π²/n² 을 (π/n)·(π/n) 로 쪼개 하나는 Δx, 하나는 x=kπ/n 의 계수로 배분해 ∫₀^π x cos x dx 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 극한 → 정적분(부분적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k cos(kπ/n) 의 k 를 (n/π)·(kπ/n) 로 보아 π²/n² 중 한 개의 π/n 을 x 에, 나머지를 Δx 에 배분하는 것이 핵심. 그 뒤 ∫₀^π x cos x dx 는 부분적분 한 번. 계수 배분 전환 통찰 1개(d2) · 중요 태그(+0) → ★3.
  tier: star_3
  mechanism_primary: "(π/n)Σ (kπ/n)cos(kπ/n) → ∫₀^π x cos x dx → 부분적분"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 을 sin 으로, 구간 끝 π 를 2π·π/2 로 바꿀 수 있다(앞 계수도 함께 제곱으로 바꿔야 한다). 제약: 앞 계수가 (구간 끝)²/n² 형태여야 x·Δx 배분이 맞고, 선택지가 정수로 떨어지려면 구간 끝이 π 의 정수배가 편하다."
    creative: "(1) k 대신 k² 을 곱하면 ∫x² cos x 가 되어 부분적분 두 번 ★4 (2) cos(kπ/n) 을 cos(kπ/2n) 으로 바꾸면 구간이 [0, π/2] 로 바뀌며 계수 배분 함정이 강해져 ★4 (3) 극한값을 주고 계수를 묻는 역추적 ★3."
```

```yaml
- id: RPM-CALC2-1160
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=x√(1+x) 와 x축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "교점 x=-1, 0 → 치환적분 → 절댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축으로 둘러싸인 넓이(치환적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역은 x≥-1 이고 x축과 만나는 점은 x=-1, 0 뿐. 그 사이에서 y<0 이므로 넓이는 적분값의 절댓값. u=1+x 치환으로 (u-1)√u 를 전개해 적분하면 끝. 통찰 0 · M_total 6 → 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "교점 x=-1, 0 → u=1+x 치환 → ∫₀¹(u-1)√u du 의 절댓값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x√(a+x) 의 a 나 y=(x-c)√(1+x) 의 c 를 바꿀 수 있다. 제약: 근호 안이 0 이 되는 점과 다른 x절편 사이에 도형이 닫혀야 하고, 치환 후 유리수 지수 적분이 되도록 근호는 하나만 둔다."
    creative: "(1) y=x√(1-x) 로 바꾸면 도형이 x≥0 쪽에 생겨 부호 함정이 사라져 ★2 유지 (2) 이 곡선과 직선 y=mx 로 둘러싸인 넓이로 바꾸면 교점 방정식이 붙어 ★3 (3) 넓이를 주고 a 를 묻는 역추적 ★3."
```

```yaml
- id: RPM-CALC2-1161
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=ln x 와 x축 및 두 직선 x=1/e, x=e² 으로 둘러싸인 도형의 넓이.
  category: "ln x 의 부호가 바뀌는 x=1 에서 분할 → 두 조각의 절댓값 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부호가 바뀌는 곡선과 x축 사이의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1 에서 ln x 의 부호가 바뀌므로 [1/e, 1] 은 뒤집고 [1, e²] 는 그대로 더한다. 각 조각은 ∫ln x = x ln x - x 를 부분적분으로 얻어 계산. 통찰 없이 절차만이지만 분할 + 부분적분 두 번으로 M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "x=1 에서 부호 분할 → -∫(1/e~1) ln x + ∫(1~e²) ln x → 각각 x ln x - x"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$e^2-\dfrac{2}{e}+2$'
  answer_source: "답지(1160 답 크롭 연속줄 · 답지 157쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선 x=1/e, x=e² 의 지수를 바꿀 수 있다(1/e², e 등). 제약: 두 끝이 x=1 을 사이에 두어야 부호 분할이 생기고, e 의 정수 거듭제곱으로 잡아야 답이 e 의 유한한 식으로 떨어진다."
    creative: "(1) 두 끝을 모두 1 보다 크게 잡으면 분할이 사라져 ★2 (2) y=|ln x| 로 바꿔 주면 부호 판단이 없어져 ★2 (3) 넓이를 주고 오른쪽 끝을 묻는 역추적이면 ln 방정식이 붙어 ★4."
```

```yaml
- id: RPM-CALC2-1162
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=ln(2x+k) 와 x축 및 y축으로 둘러싸인 도형의 넓이가 1/2 일 때 상수 k (k>1).
  category: "x절편·y절편으로 영역 확정 → 치환적분 → k 방정식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 1/2 이 먼저 주어지고 k 를 역추적 — 넓이를 k 의 식으로 정리한 뒤 방정식으로 푼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이 조건으로 상수 구하기(로그 곡선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k>1 이면 x절편 (1-k)/2 가 음수이고 그 구간에서 ln(2x+k)<0 이므로 넓이는 적분의 절댓값. u=2x+k 치환으로 ∫ln u 로 바꾸면 넓이가 k 의 식이 되고 1/2 과 놓아 k=e. 역추적 통찰 1개 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x절편 (1-k)/2, y절편 ln k → u=2x+k 치환 → 넓이=(1/2)|k ln k - k + 1|=1/2 → k=e"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=ln(ax+k) 의 a 와 넓이 값을 바꿀 수 있다. 제약: k>1 조건이 있어야 도형이 y축 왼쪽에 닫히고, 넓이 방정식 k ln k - k + 1 = c 가 e 의 거듭제곱에서 떨어지도록 c 를 고른다."
    creative: "(1) k 를 주고 넓이를 묻는 정방향이면 역추적이 사라져 ★2 (2) 곡선을 y=ln(2x+k) 와 직선 y=1 로 둘러싸인 넓이로 바꾸면 영역이 하나 더 생겨 ★4 (3) k>1 조건을 빼면 0<k<1 케이스가 생겨 I-MI 가 붙고 ★4."
```

```yaml
- id: RPM-CALC2-1163
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    곡선 y=x·e^x 과 직선 y=ex 로 둘러싸인 도형의 넓이. 5지선다.
  category: "교점 x=0, 1 → 대소 판정 → 부분적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선으로 둘러싸인 넓이 — 부분적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xe^x=ex 에서 x(e^x-e)=0 이므로 교점은 x=0, 1. 그 사이에서 직선이 위이므로 ∫₀¹(ex - xe^x)dx 이고 뒤쪽만 부분적분. 교점 인수분해와 부분적분 모두 표준 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x(e^x-e)=0 → 교점 0, 1 → ∫₀¹(ex - xe^x)dx (부분적분)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기 e 를 e^a 로 바꾸면 교점이 x=0, a 가 된다. 제약: 기울기가 e^a 꼴이어야 교점이 깔끔하게 떨어지고, 선택지가 e 의 일차식으로 정리된다."
    creative: "(1) 직선을 y=x 로 바꾸면 교점이 e^x=1 에서 x=0 하나뿐이라 도형이 닫히지 않는다 — 설계 반례 (2) 넓이를 주고 기울기를 묻는 역추적 ★3 (3) y=x²e^x 으로 올리면 부분적분 두 번 ★3."
```

```yaml
- id: RPM-CALC2-1164
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 곡선 y=e^(-x), y=-e^(-x) 과 y축 및 직선 x=n 으로 둘러싸인 도형의 넓이 S_n 의 n→∞ 극한 (n>0).
  category: "x축 대칭 두 곡선 → 폭 2e^(-x) 적분 → 극한"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이와 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선이 x축 대칭이므로 세로 폭이 2e^(-x). S_n=∫₀ⁿ 2e^(-x)dx=2(1-e^(-n)) 이고 n→∞ 에서 2. 대칭도 폭 계산 한 줄이라 통찰로 세지 않았다. 통찰 0 · M_total 5 → 종합 구역 출발점에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "세로 폭 2e^(-x) → S_n=2(1-e^(-n)) → n→∞ 에서 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(e^(-2x))와 두 곡선의 비대칭 계수(y=3e^(-x), y=-e^(-x))를 바꿀 수 있다. 제약: 지수가 음수여야 극한이 수렴하고, 두 곡선이 교차하지 않아야 폭이 부호 없이 하나로 정해진다."
    creative: "(1) 비대칭 계수로 바꾸면 폭이 4e^(-x) 가 되어 1169 의 부피 골조와 이어진다 ★2 (2) 넓이가 어떤 값을 넘는 최소 자연수 n 을 물으면 부등식이 붙어 ★3 (3) 두 곡선 사이 도형을 밑면으로 하는 입체의 부피로 바꾸면 1169 ★2~3."
```

```yaml
- id: RPM-CALC2-1165
  page: 164
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    0≤x≤π/2 에서 곡선 y=cos x 와 x축·y축으로 둘러싸인 도형을 곡선 y=(√3/3)sin x 가 두 부분 A, B 로 나눌 때 두 넓이의 비 S_A/S_B.
  category: "교점 tan x=√3 → 각 영역을 두 조각 적분으로 → 비"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선이 나눈 두 영역의 넓이 비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos x=(√3/3)sin x 에서 tan x=√3 → x=π/3 이 분할점. 전체 넓이 ∫₀^(π/2) cos x=1 을 먼저 구하고 아래쪽 영역만 [0, π/3] 은 sin 곡선, [π/3, π/2] 는 cos 곡선으로 두 조각 적분하면 나머지는 빼기로 얻는다. 영역을 그림에서 정확히 읽는 것이 고비지만 도구는 표준 · 통찰 0 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "교점 x=π/3 → 전체 넓이 1 → 아래 영역 = ∫₀^(π/3)(√3/3)sin x + ∫(π/3~π/2)cos x → 나머지와 비"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}+1}{2}$'
  answer_source: "답지(1164 답 크롭 연속줄 · 답지 157쪽 렌더)"
  figure: "crop:fig-1165.png"
  latex: latex-bank/rpm-calc2/items/1165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분할 곡선의 계수 √3/3 을 tan 의 특수각이 나오는 값(1 → π/4, √3 → π/6)으로 바꿀 수 있다. 제약: 교점이 0<x<π/2 안의 특수각이어야 하고, 그림의 A·B 라벨 위치(A 가 위쪽 조각)는 고정이다."
    creative: "(1) 넓이 비 대신 두 넓이의 차를 물으면 계산이 한 단계 줄어 ★2 (2) 비가 1 이 되는 계수를 묻는 역추적이면 I-BW 가 붙어 ★4 (3) 분할 곡선을 직선 y=mx 로 바꾸면 교점이 초월방정식이 되어 고교 범위를 벗어난다."
```

```yaml
- id: RPM-CALC2-1166
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=ln(x+1) 과 두 직선 x=0, y=k 로 둘러싸인 넓이와, 같은 곡선과 두 직선 x=e-1, y=k 로 둘러싸인 넓이가 같을 때 상수 k (0<k<1).
  category: "두 넓이가 같다 ⟺ 부호 있는 적분의 총합이 0 → k"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조각의 넓이가 같다는 조건을 ∫₀^(e-1){ln(x+1)-k}dx=0 이라는 하나의 등식으로 바꿔 분할점 x=e^k-1 을 구하지 않고 끝냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 넓이가 같을 조건 → 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선 y=k 가 곡선을 x=e^k-1 에서 자르고 왼쪽은 k 가 위, 오른쪽은 곡선이 위다. 두 넓이가 같으면 부호를 살린 적분의 합이 0 이므로 ∫₀^(e-1) ln(x+1)dx = k(e-1) 한 줄로 k 가 나온다. 동치 변환 통찰 1개(d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "두 넓이 같음 ⟺ ∫₀^(e-1){ln(x+1)-k}dx=0 → ∫₀^(e-1)ln(x+1)dx=1 → k=1/(e-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{e-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 직선 x=e-1 을 x=e²-1 로 바꾸면 ∫ln(x+1) 값이 달라져 k 도 그에 맞춰 바뀐다. 제약: 0<k<1 로 제한해야 분할점이 두 직선 사이에 있고, 오른쪽 끝을 e^m-1 꼴로 잡아야 적분값이 깔끔하다."
    creative: "(1) 곡선을 y=e^x 으로 바꾸고 두 직선을 x=0, x=1 로 두면 같은 골조 ★3 (2) 넓이의 비를 2:1 로 주면 등식이 ∫=k(e-1)·(1/3) 꼴로 바뀌며 ★4 (3) 분할점을 직접 구해 두 적분을 각각 계산하게 하면 통찰이 사라지고 계산만 무거워진다(질 저하 주의)."
```

```yaml
- id: RPM-CALC2-1167
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    높이가 (e-1)/2 인 그릇에서 물의 높이가 x 일 때 수면이 한 변의 길이 √(ln(2x+1)) 인 정사각형일 때 그릇의 부피.
  category: "단면적 = ln(2x+1) → 치환적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 정사각형인 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단면이 한 변 √(ln(2x+1)) 인 정사각형이므로 단면적이 ln(2x+1) 로 근호가 바로 사라진다. u=2x+1 치환 후 ∫ln u 부분적분. 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "단면적 = ln(2x+1) → V=∫₀^((e-1)/2) ln(2x+1)dx → u=2x+1 치환"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-1167.png"
  latex: latex-bank/rpm-calc2/items/1167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 (e-1)/2 와 ln(2x+1) 의 계수 2 를 함께 바꿔야 한다(치환 상한이 e 가 되도록). 제약: 한 변이 실수이려면 ln(2x+1)≥0, 즉 x≥0 이어야 하고, 상한을 e 의 거듭제곱에 맞춰야 답이 유리수."
    creative: "(1) 단면을 정삼각형으로 바꾸면 계수 √3/4 만 붙어 ★2 유지 (2) 물의 부피가 절반이 되는 높이를 묻는 역추적이면 ln 방정식이 붙어 ★4 (3) 한 변을 ln(2x+1) 로 두면 단면적이 (ln)² 가 되어 부분적분 두 번 ★3."
```

```yaml
- id: RPM-CALC2-1168
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "종합"
  summary: |
    곡선 y=√(sec²x+tan x) (0≤x≤π/3) 와 x축·y축 및 직선 x=π/3 으로 둘러싸인 부분을 밑면으로 하고 x축에 수직인 단면이 모두 정사각형인 입체의 부피. 5지선다.
  category: "단면적 = y² → 근호 소거 → sec²·tan 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "단면이 정사각형이라 한 변이 곡선의 y값이고 단면적이 y² 임을 보면 근호가 통째로 사라짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "단면이 정사각형인 입체의 부피(삼각함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑면이 곡선 아래 영역이고 단면이 정사각형이면 한 변이 y 이므로 단면적이 sec²x+tan x 로 정리된다. ∫sec²x=tan x, ∫tan x=ln|sec x| 를 쓰면 끝. 근호 소거 전환 통찰 1개(d1) · 수능 기출(통찰 얕아 +0) → ★3.
  tier: star_3
  mechanism_primary: "단면적 = y² = sec²x+tan x → V=∫₀^(π/3)(sec²x+tan x)dx = [tan x + ln|sec x|]"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-1168.png"
  latex: latex-bank/rpm-calc2/items/1168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 π/3 을 π/4 로, 근호 안을 sec²x+2tan x 등으로 바꿀 수 있다. 제약: 상한이 특수각이어야 tan·ln sec 값이 유리수·ln(정수)로 떨어지고, 근호 안은 구간에서 0 이상이어야 한다."
    creative: "(1) 단면을 정삼각형·반원으로 바꾸면 계수만 붙어 ★3 유지 (2) 근호 안을 sec²x 만 두면 단면적이 sec²x 하나라 ★2 (3) 밑면을 두 곡선 사이로 바꾸면 한 변이 차가 되어 제곱 전개가 생기고 ★4."
```

```yaml
- id: RPM-CALC2-1169
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    두 곡선 y=3e^(-x), y=-e^(-x) 과 두 직선 x=-1, x=1 로 둘러싸인 도형을 밑면으로 하고 x축에 수직인 단면이 모두 정삼각형인 입체의 부피.
  category: "한 변 4e^(-x) → 정삼각형 넓이 → 지수 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 정삼각형인 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선의 세로 간격이 3e^(-x)-(-e^(-x))=4e^(-x) 이고 단면이 정삼각형이므로 단면적은 (√3/4)(4e^(-x))². 지수 적분 한 번으로 끝난다. 중요 태그이나 통찰 0 · M_total 5 → −1 적용 ★2.
  tier: star_2
  mechanism_primary: "한 변 4e^(-x) → 단면적 4√3 e^(-2x) → V=∫(-1~1) 4√3 e^(-2x)dx"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}\left(e^2-\dfrac{1}{e^2}\right)$'
  answer_source: "답지"
  figure: "crop:fig-1169.png"
  latex: latex-bank/rpm-calc2/items/1169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 계수 3 과 -1, 구간 [-1, 1] 을 바꿀 수 있다. 제약: 두 곡선이 구간에서 교차하지 않아야 한 변이 부호 없이 정해지고, 지수 계수가 같아야 간격이 하나의 지수로 묶인다."
    creative: "(1) 단면을 반원으로 바꾸면 계수 π/8 이 붙어 ★2 유지 (2) 오른쪽 끝을 n 으로 두고 부피의 극한을 물으면 1164 의 극한이 결합되어 ★3 (3) 두 곡선의 지수를 다르게 하면(e^(-x)·e^(-2x)) 간격이 묶이지 않아 제곱 전개가 생기고 ★3."
```

```yaml
- id: RPM-CALC2-1170
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    x=√2 e^t cos t, y=√2 e^t sin t 인 점 P 가 t=0 에서 t=π 까지 움직인 거리. 5지선다.
  category: "속도 성분 제곱합 → 속력 2e^t → 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 움직인 거리(지수·삼각 매개변수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분 뒤 제곱해 더하면 삼각항이 상쇄되어 x'²+y'²=4e^(2t), 속력 2e^t. ∫₀^π 2e^t dt 한 줄. 1145 와 완전히 같은 골조 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x'²+y'²=4e^(2t) → 속력 2e^t → ∫₀^π 2e^t dt = 2e^π-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭 √2 와 지수 e^t, 끝 시각 π 를 바꿀 수 있다. 제약: x, y 의 진폭이 같아야 교차항이 상쇄되어 속력이 하나의 지수로 남고, 선택지가 e^π 의 일차식이 되도록 끝 시각은 π 의 배수로 둔다."
    creative: "(1) 끝 시각을 a 로 두고 거리를 지정하면 역추적 ★3 (2) 점 P 의 자취가 나선임을 보이게 하면 I-RT 가 붙어 ★3 (3) 지수를 e^(-t) 로 바꾸고 t→∞ 극한을 물으면 1145 골조 ★2."
```

```yaml
- id: RPM-CALC2-1171
  page: 165
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    x=(1/2)e^(2t)-at, y=2√a e^t 인 점 P 가 t=0 에서 t=1 까지 움직인 거리가 (1/2)(3e²-1) 일 때 양수 a.
  category: "속도 제곱합 완전제곱 (e^(2t)+a)² → 거리식 → a 역추적"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 값이 먼저 주어지고 매개변수 a 를 역추적 — 거리식이 a 의 일차식이라 바로 풀린다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "움직인 거리 조건으로 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x'=e^(2t)-a, y'=2√a e^t 이므로 제곱합이 (e^(2t)+a)² 로 완전제곱(교차항 -2ae^(2t) 와 4ae^(2t) 가 +2ae^(2t) 로 합쳐짐). 속력이 e^(2t)+a 이므로 거리는 (1/2)(e²-1)+a 이고 주어진 값과 놓으면 a=e². 완전제곱 설계 + 역추적 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x'²+y'²=(e^(2t)+a)² → 거리 (1/2)(e²-1)+a = (1/2)(3e²-1) → a=e²"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리 값 (1/2)(3e²-1) 을 (1/2)(e²-1)+a 가 되는 다른 값으로 바꾸면 a 가 원하는 수로 떨어진다. 제약: y=2√a e^t 의 계수 2√a 는 완전제곱을 만들기 위한 값이라 바꿀 수 없다 — a 가 양수여야 √a 가 정의된다."
    creative: "(1) a 를 주고 거리를 묻는 정방향이면 ★2 (2) 끝 시각을 미지수로 두면 지수방정식이 붙어 ★4 (3) y 의 계수를 2√a 가 아닌 값으로 두면 근호가 풀리지 않아 문제가 성립하지 않는다 — 완전제곱 설계가 이 유형의 전제."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-1172
  page: 166
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=ln x 일 때 lim(n→∞) Σ(k=1~n) (k/n²)f(1+k/n) 의 값.
  category: "급수 → ∫₀¹ x ln(1+x)dx → 부분적분 + 분수식 정리"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k/n² 을 (1/n)·(k/n) 로 쪼개 Δx 와 피적분함수의 인수로 배분해 ∫₀¹ x ln(1+x)dx 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 극한 → 정적분(부분적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k/n² 에서 1/n 을 Δx 로 떼고 남은 k/n 을 x 로 보면 ∫₀¹ x ln(1+x)dx. 부분적분 뒤 x²/(1+x) 를 x-1+1/(1+x) 로 나눠야 하는 대수 처리가 무겁다(Mₖ 3). 전환 통찰 1개(d2) · 서술형 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "(1/n)Σ(k/n)f(1+k/n) → ∫₀¹ x ln(1+x)dx → 부분적분 → x²/(1+x) 나눗셈"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 를 ln x 대신 1/x·√x 로, 앞의 k/n² 을 k²/n³ 으로 바꿀 수 있다. 제약: 1+k/n 이 x 의 평행이동이라 적분 구간이 [0,1] 로 유지되고, 피적분함수가 부분적분·부분분수로 고교 범위에서 끝나야 한다."
    creative: "(1) f(1+k/n) 대신 f(k/n) 로 바꾸면 ln 이 0 에서 발산해 설정이 깨진다 — 평행이동이 필수 (2) 치환 t=1+x 로 구간을 [1,2] 로 옮기는 별해를 요구하면 I-SC 가 붙어 ★4 (3) 앞 계수를 1/n 만 두면 ∫ln(1+x) 로 가벼워져 ★2."
```

```yaml
- id: RPM-CALC2-1173
  page: 166
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    높이 π/4 인 입체를 밑면에서 높이 x 인 곳에서 자른 단면이 한 변 tan x 인 정삼각형일 때 부피.
  category: "단면적 (√3/4)tan²x → sec²x-1 변환 → 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 정삼각형인 입체의 부피(tan)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단면적이 (√3/4)tan²x 이고 tan²x=sec²x-1 로 고치면 원시함수가 tan x - x. 서술형 구역 ★3 출발이지만 통찰 0 · M_total 5 이므로 −1 적용 ★2. [분류 이슈] 벤더 구역과 1단 차이.
  tier: star_2
  mechanism_primary: "단면적 (√3/4)tan²x → tan²x=sec²x-1 → V=(√3/4)[tan x - x]₀^(π/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{4}\left(1-\dfrac{\pi}{4}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 π/4 를 π/3·π/6 으로, 한 변을 tan x 대신 √(tan x)·sec x 로 바꿀 수 있다. 제약: 높이가 π/2 미만이어야 tan 이 유한하고, 특수각이어야 답이 유리수·π 의 유리수배로 떨어진다."
    creative: "(1) 단면을 정사각형으로 바꾸면 계수가 1 이 되어 ★2 유지 (2) 한 변을 sec x 로 두면 ∫sec²x 만 남아 더 쉬워진다 ★1~2 (3) 부피를 주고 높이를 묻는 역추적이면 tan x - x = c 가 초월방정식이라 특수각으로만 설계 가능 ★4."
```

```yaml
- id: RPM-CALC2-1174
  page: 166
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    0≤x≤π/6 에서 곡선 y=ln(cos x) 의 길이.
  category: "y'=-tan x → √(1+tan²x)=sec x → ∫sec x dx"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 길이(∫sec x)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y'=-tan x 이므로 1+y'²=sec²x 이고 구간에서 sec x>0 이라 근호가 그대로 풀린다. 남는 것은 ∫sec x dx = ln|sec x + tan x| 로, 이 원시함수를 기억·유도하는 것이 고비다. 통찰로 세지는 않았으나 계산 도구가 무거워 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "1+y'²=sec²x → 길이 ∫₀^(π/6) sec x dx = [ln|sec x + tan x|]"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}\ln 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 π/6 을 π/4·π/3 으로 바꿀 수 있다. 제약: 상한이 π/2 미만이어야 cos>0 으로 ln 이 정의되고, 특수각이어야 sec+tan 값이 ln(유리수) 로 떨어진다."
    creative: "(1) y=ln(sin x) 로 바꾸면 √(1+cot²x)=csc x 가 되어 같은 ★3 (2) 길이를 주고 상한을 묻는 역추적 ★4 (3) 같은 곡선의 넓이를 물으면 ∫ln(cos x) 라 고교 범위를 벗어난다 — 길이 쪽만 성립하는 설계."
```

```yaml
- id: RPM-CALC2-1175
  page: 166
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=e^(ax) 의 역함수가 g(x) 이고 두 곡선 y=f(x), y=g(x) 가 x=e 인 점에서 접할 때, 두 곡선과 x축·y축으로 둘러싸인 도형의 넓이 (a 는 양수).
  category: "역함수 접점은 y=x 위 → f(e)=e, f'(e)=1 → a 결정 → 넓이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 가 y=x 대칭이므로 두 곡선이 접하면 접점이 y=x 위에 있어야 함을 써서 f(e)=e 를 얻음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「접한다」를 f(e)=e 이고 f'(e)=1 이라는 두 식으로 바꿔 a 를 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수와 접하는 조건 → 둘러싸인 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접점이 y=x 위라는 대칭 성질이 없으면 a 를 정할 수 없다. f(e)=e 에서 ae=1 이므로 a=1/e 이고 f(x)=e^(x/e), g(x)=e ln x. 도형은 y축~곡선 f~접점~곡선 g~x축으로 닫히므로 넓이는 f 의 적분에서 g 의 적분을 빼면 된다. 대칭 + 동치 변환 통찰 2개 → 서술형 ★3 출발에서 +1 → ★4(저노출 유형 I-SYM 보유).
  tier: star_4
  mechanism_primary: "접점은 y=x 위 → f(e)=e, f'(e)=1 → a=1/e → 넓이 = ∫₀^e e^(x/e)dx - ∫₁^e e ln x dx"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$e^2-2e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표 e 를 다른 값 c 로 두면 a=1/c 가 되고 넓이가 c²-2c 꼴로 따라 바뀐다. 제약: a 가 양수여야 f 가 증가해 역함수가 존재하고, 접점은 반드시 y=x 위여야 한다(임의의 점을 접점으로 지정하면 모순)."
    creative: "(1) 「접한다」 대신 「서로 다른 두 점에서 만난다」로 바꾸면 a 의 범위를 구하는 부등식 문제가 되어 ★4~5 (2) f(x)=a^x 로 밑을 미지수로 두면 같은 골조 ★4 (3) 넓이를 주고 a 를 묻는 역추적으로 뒤집으면 접선 조건이 사라져 ★3."
```

### 실력 Up

```yaml
- id: RPM-CALC2-1176
  page: 166
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    자연수 n 에 대하여 구간 [(n-1/2)π, (n+1/2)π] 에서 곡선 y=(1/2)^n cos x 와 x축으로 둘러싸인 도형의 넓이를 S_n 이라 할 때 Σ(n=1~∞) S_n.
  category: "구간이 |cos| 의 반주기 → S_n=2(1/2)^n → 무한등비급수"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 n 에 따라 이동해도 길이 π 의 반주기라 ∫|cos x|dx 가 항상 2 로 같음을 발견 — n 에 의존하는 부분은 계수 (1/2)^n 뿐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주기 구간의 넓이와 무한등비급수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    구간을 n 마다 따로 적분하려 들면 막히고, 구간이 nπ 를 중심으로 한 길이 π 의 반주기라 ∫|cos| 가 언제나 2 임을 보면 S_n=2(1/2)^n 으로 단번에 정리된다. 그 뒤는 첫항 1, 공비 1/2 인 무한등비급수. 주기 발견 통찰 1개(d2) · 일반 자연수 n 추상(Mₐ 3) · 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "구간은 |cos| 의 반주기 → ∫|cos x|dx=2 → S_n=2(1/2)^n → 무한등비급수 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 1/2 을 1/3·2/3 로, cos 을 sin 으로(구간도 [nπ, (n+1)π] 로 함께) 바꿀 수 있다. 제약: 공비의 절댓값이 1 보다 작아야 급수가 수렴하고, 구간 길이가 정확히 π 여야 넓이가 n 과 무관한 2 로 고정된다."
    creative: "(1) 구간 길이를 π/2 로 줄이면 n 의 홀짝에 따라 넓이가 달라져 I-MI 가 붙고 ★5 후보 (2) 계수를 1/n 으로 바꾸면 조화급수가 되어 발산 — 수렴 판정을 묻는 문제로 전환 가능 (3) S_n 을 넓이 대신 곡선의 길이로 바꾸면 적분이 타원적분이 되어 고교 범위를 벗어난다."
```

```yaml
- id: RPM-CALC2-1177
  page: 166
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    곡선 y=(x²-a)sin x (0≤x≤π) 와 x축으로 둘러싸인 두 도형의 넓이가 서로 같을 때 상수 a (0<a<π²).
  category: "두 넓이가 같다 ⟺ ∫₀^π(x²-a)sin x dx=0 → a"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분할점 x=√a 를 구해 두 적분을 따로 계산하는 대신 「넓이가 같다」를 부호를 살린 전체 적분이 0 이라는 한 식으로 바꿈"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 조건이 먼저 주어지고 a 를 역추적 — 전체 적분이 a 의 일차식이라 바로 풀림"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 도형의 넓이가 같을 조건 → 상수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    0<x<π 에서 sin x>0 이므로 부호는 x²-a 가 정한다. 분할점 √a 를 기준으로 왼쪽은 음, 오른쪽은 양이고 두 넓이가 같으면 ∫₀^π(x²-a)sin x dx=0. ∫x²sin x 는 부분적분 두 번(Mₖ 3)이고 ∫a sin x=2a. 동치 변환 + 역추적 통찰 2개 · 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "두 넓이 같음 ⟺ ∫₀^π(x²-a)sin x dx=0 → ∫₀^π x² sin x dx = 2a → a"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\pi^2}{2}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²-a 를 x-a·x³-a 로, 구간을 [0, 2π] 로 바꿀 수 있다. 제약: 0<a<π² 조건이 분할점 √a 를 구간 안에 두므로 계수를 바꾸면 이 범위 조건도 함께 고쳐야 하고, sin x 가 구간에서 부호를 바꾸지 않아야 부호 판정이 x²-a 하나로 끝난다."
    creative: "(1) 구간을 [0, 2π] 로 넓히면 sin 의 부호도 바뀌어 분할이 네 조각이 되고 I-MI 가 붙어 ★5 후보 (2) 넓이의 비를 1:2 로 주면 전체 적분이 0 이라는 손쉬운 동치가 깨져 두 적분을 각각 계산해야 하고 ★5 (3) a 를 주고 넓이의 차를 묻는 정방향이면 ★3."
```

```yaml
- id: RPM-CALC2-1178
  page: 166
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    밑면의 반지름 2, 높이 4 인 원기둥을 밑면의 중심을 지나고 밑면과 60° 를 이루는 평면으로 자를 때 생기는 두 입체 중 작은 것의 부피.
  category: "자른 면에 수직인 단면을 직사각형으로 잡아 부피를 정적분으로"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체를 좌표로 옮기고 단면이 직사각형이 되는 방향(절단선에 수직인 축)으로 썰어 부피를 ∫(가로×세로)로 바꿈"
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "썰는 방향을 절단선에 수직으로 잡으면 단면이 직사각형, 평행으로 잡으면 삼각형이 되어 계산량이 크게 갈림 — 효율적인 갈래를 처음에 골라야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원기둥을 비스듬히 자른 입체의 부피"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑면을 x²+y²≤4 로 두고 절단선을 y축으로 잡으면 잘린 작은 쪽은 x≥0, 0≤z≤x tan60° 이고, x축에 수직인 단면이 가로 2√(4-x²)·세로 √3x 인 직사각형이 된다. V=∫₀² 2√3 x√(4-x²)dx 는 u=4-x² 치환으로 끝. 원기둥의 높이 4 는 자른 면이 옆면을 넘지 않는지 확인하는 데만 쓰이는 미끼(Mₜ). 표현 전환 + 단면 방향 선택 통찰 2개 · 실력 Up ★4.
  mechanism_primary: "밑면 원 x²+y²≤4, 절단선 = y축 → x축 수직 단면은 가로 2√(4-x²)·세로 √3x 직사각형 → V=∫₀² 2√3 x√(4-x²)dx"
  tier: star_4
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{16\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-1178.png"
  latex: latex-bank/rpm-calc2/items/1178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2 와 각 60° 를 바꿀 수 있다(각이 45° 면 tan=1 로 계산이 가벼워진다). 제약: 높이가 (반지름)×tan(각) 이상이어야 잘린 면이 윗면을 넘지 않는다 — 여기서는 2√3≈3.46<4 로 성립한다. 이 부등식이 깨지면 입체 모양 자체가 달라진다."
    creative: "(1) 두 입체 중 큰 쪽의 부피를 물으면 원기둥 전체에서 빼기만 붙어 ★4 유지 (2) 각을 45° 로 두고 두 입체의 부피 비를 물으면 계산이 가벼워져 ★3 (3) 원기둥 대신 원뿔을 같은 방식으로 자르면 단면이 사다리꼴이 되어 Mₛ 상승 ★5 후보."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 0 · ★2 17 · ★3 19 · ★4 4 · ★5 0
- insight_type 기준 통찰형 12 · 절차형 28 · premium 0 (★5 없음 — 통찰 3개 이상 + SC/VF/SYM/XU 조건을 만족하는 문항이 이 범위에 없음). 통찰 라벨이 하나라도 붙은 문항은 22문이며, 그중 10문은 d1 통찰 1개뿐이라 insight_type 을 절차형으로 두었다.
- 통찰 유형 분포: I-RT 11 · I-BW 5 · I-EQV 4 · I-SYM 3 · I-PD 2 · I-SC 1 (총 26 라벨 / 22문항)
- type_hint 상위: 「움직인 거리(직선·평면)」 10 · 「급수 → 정적분(구분구적법)」 6 · 「넓이(곡선·두 곡선 사이)」 6 · 「곡선의 길이」 5 · 「역함수 그래프와 넓이」 5 · 「단면으로 나타낸 입체의 부피」 5
- 구역별 ★ 평균: 유형 12~14 (12문) 2.2 · 유형 UP 15~16 (7문) 3.0 · 시험에 꼭 나오는 문제 (14문) 2.6 · 서술형 주관식 (4문) 3.0 · 실력 Up (3문) 4.0
- 그림: 9문(`crop:fig-1151.png` · `crop:fig-1152.png` · `crop:fig-1153.png` · `crop:fig-1157.png` · `crop:fig-1165.png` · `crop:fig-1167.png` · `crop:fig-1168.png` · `crop:fig-1169.png` · `crop:fig-1178.png` — 9개 파일)
- 이 범위의 설계 공통점: 「√(x'²+y'²) 또는 √(1+y'²) 가 완전제곱이 되도록 계수를 맞춘다」(1143·1147·1148·1150·1171)와 「두 넓이가 같다 → 부호를 살린 전체 적분이 0」(1166·1177)이 반복된다. 숫자 변형 때 이 두 구조를 깨면 문제가 고교 범위를 벗어나므로 `variation_notes.numeric` 에 제약으로 명시했다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-1146 | 벤더 「상중」이나 통찰 1(d1)·M_total 6 이고 직접 적분만으로 두 줄에 끝남 → ★2 후보. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-CALC2-1153 | 유형 UP + 「상중」이라 ★4 후보이나 골조가 표준 구분구적이라 ★3 유지 | ★3 / ★4 |
| RPM-CALC2-1155 | 유형 UP 구역(★3 출발)이나 level 「중」·M_total 5 로 노동량이 가벼움. 통찰(넓이 전환) 하나에 전적으로 기대는 문항 | ★2 / ★3 |
| RPM-CALC2-1169 | tag 「중요」이나 단면 부피 표준 절차·통찰 0·M_total 5 → −1 적용 ★2 | ★2 / ★3 |
| RPM-CALC2-1173 | 서술형 주관식 구역(★3 출발)이나 통찰 0·M_total 5 → −1 적용 ★2. 벤더 구역과 1단 차이 | ★2 / ★3 |
| RPM-CALC2-1176 | type_hint 가 「주기 구간의 넓이」와 「무한등비급수」 두 갈래 — 카탈로그 설계 때 넓이 계열과 급수 계열 중 어디에 둘지 결정 필요 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「속도의 절댓값 적분 = 움직인 거리」와 「위치함수의 근 개수」는 같은 유형 12 안에 있지만 골조가 다르다(1139·1142 vs 1141) — 분리 권장. (2) 「구분구적법으로 기하량의 급수를 정적분으로」(1151~1153·1158·1159·1172)는 이 단원에서 가장 자주 반복되는 골조라 단독 유형으로 세울 가치가 있고, 그 안에서 「계수 배분이 자명한 경우」(1151·1152)와 「Δx 와 x 의 계수를 나눠 배분해야 하는 경우」(1159·1172)를 base ★ 2 와 3 으로 나누면 좋다. (3) 「역함수의 정적분을 직사각형 넓이로」(1155·1157)와 「역함수 그래프로 둘러싸인 넓이(y=x 대칭)」(1154·1156·1175)는 도구가 달라 분리.
- **통합해도 될 유형**: 「단면이 정사각형/정삼각형/반원인 입체의 부피」(1167·1168·1169·1173)는 단면 모양의 계수만 다르고 골조가 동일하므로 하나의 유형에 모으고 단면 모양을 변형 축으로 둔다. 「움직인 거리 조건으로 시각·상수 역추적」(1140·1144·1150·1171)도 정방향 유형의 역추적 변형으로 묶을 수 있다.
- **★4 이상 후보 골조**: 이 범위에서 진짜 변별이 일어나는 자리는 「역함수와 접하는 조건」(1175 · I-SYM+I-EQV), 「구간 이동에도 적분값이 불변인 주기 구조」(1176 · I-PD), 「두 넓이가 같다 → 전체 적분 0」(1166·1177 · I-EQV), 「입체를 어느 방향으로 썰 것인가」(1178 · I-SC) 네 가지다. ★5 슬롯을 만들려면 이 중 둘 이상을 겹치거나(예: 1177 에 sin 의 부호 분기를 더해 I-MI 추가) 사후 검증(I-VF)을 강제하는 조건을 붙여야 한다.
