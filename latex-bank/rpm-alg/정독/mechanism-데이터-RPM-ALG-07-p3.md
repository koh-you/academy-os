---
name: mechanism-데이터-RPM-ALG-07-p3
description: RPM 대수 07 삼각함수의 활용(3/3 · 유형 14 + 유형 UP 15~16 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 07 삼각함수의 활용
  unit_code: ALG-07
  part: "3/3"
  extract_range: "102~107쪽 · 0764~0801"
  total_problems: 38
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 07 삼각함수의 활용 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 07 삼각함수의 활용 단원의 마지막 범위(102~107쪽 · 0764~0801 · 38문)를 다룬다. 102쪽 「유형 14 사각형의 넓이」 4문, 103쪽 「유형 UP 15 사인법칙의 실생활에서의 활용」 3문·「유형 UP 16 코사인법칙의 실생활에서의 활용」 3문, 104~106쪽 「시험에 꼭 나오는 문제」 21문, 107쪽 「서술형 주관식」 4문·「실력 Up」 3문이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·기출)로 나타나며, 이 범위는 유형 구역(대표문제 ★2 · 중 ★2 · 상중 ★3), 유형 UP 구역(★3 출발), 시험 구역(난이도 없음 → ★2 출발 · 중요·기출 태그), 서술형(★3 출발), 실력 Up(★4 출발)을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 한 공식에 대입만 하는 문항(0764·0774·0779·0782·0793)은 통찰 0·M_total 4 규칙으로 −1 해 ★1, 유형 UP·서술형 구역인데 골조가 한두 단계인 문항(0768·0769·0771·0796)은 −1 해 ★2 로 두었고, 실력 Up 0799 는 통찰 2개(모두 d1)·M_total 6 이라 ★3 으로 내렸다. 모두 1단 차이라 2단 이상 드리프트는 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위는 단원 종합 구역이라 통찰형이 20문(통찰 24개 = RT 8 · EQV 5 · XU 8 · CON 1 · VF 1 · MI 1 — 한 문항에 둘 있는 4문 포함)으로 절차형 18문보다 많다. 반복되는 통찰은 (a) 실생활·입체 배치를 계산 가능한 삼각형으로 옮기는 RT, (b) 중학 원 성질(접선-현 각·내접사각형 대각·방멱)을 사인·코사인법칙과 잇는 XU, (c) 합 일정 곱 최대(산술·기하평균)·이차함수 최소를 넓이·코사인법칙 결과에 결합하는 XU 이다. 그림이 있는 문항은 22문이며 모두 `crop:fig-<id>.png` 로 적었다. 답은 38문 모두 재계산 결과가 전사 answer 와 일치했다.

## 문항 데이터

### 유형 14 사각형의 넓이

```yaml
- id: RPM-ALG-0764
  page: 102
  vendor_label: "유형 14 사각형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    대각선 BD=4, 두 대각선이 이루는 각 120°, 넓이 3√3 인 사각형 ABCD 에서 대각선 AC 의 길이(그림).
  category: "사각형 넓이 공식 S=½·AC·BD·sinθ → AC 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ½·AC·4·sin120°=3√3 → √3·AC=3√3 → AC=3. 넓이 공식에 대입해 한 번에 역산하는 한 단계. 유형 대표문제 출발 ★2 이나 통찰 0·M_total 4 → −1 적용 ★1.
    [분류 이슈] 유형 14 의 대표문제라 벤더 신호는 ★2 이나 골조가 공식 한 줄이라 ★1 로 둠(1단 하향 · 기록).
  tier: star_1
  mechanism_primary: "S=½·AC·BD·sin120° 에 대입 → AC=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: crop:fig-0764.png
  latex: latex-bank/rpm-alg/items/0764.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BD(4 → 6·2√3)·각(120° → 60°·135°·150°)·넓이. 제약: sinθ 가 특수각 값이고 AC 가 정수나 간단한 무리수로 떨어지게 넓이를 역설계. 그림의 각 위치(대각선 교점의 각) 라벨 유지."
    creative: "(1) AC·BD 를 둘 다 주고 넓이를 묻기(★1 그대로) (2) 넓이와 한 대각선을 주고 각이 미지일 때 다른 대각선의 길이 범위(★2 · T-범위) (3) 두 대각선 길이의 합과 넓이를 주고 각을 구하기(★2 · 이차식)."
```

```yaml
- id: RPM-ALG-0765
  page: 102
  vendor_label: "유형 14 사각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 대각선의 길이가 a, b, 두 대각선이 이루는 예각 30°, 넓이 2, a+b=6 인 사각형에서 a²+b² 의 값(그림).
  category: "넓이 공식 → ab → 곱셈 공식 (a+b)²−2ab"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ½ab·sin30°=2 → ab=8. a²+b²=(a+b)²−2ab=36−16=20. 넓이 공식과 곱셈 공식을 잇는 두 단계 절차. 벤더 「중」 ★2 출발·통찰 0·M_total 4 → −1 후보이나 서로 다른 공식 둘을 잇는 구조라 ★2 유지(경계).
  tier: star_2
  mechanism_primary: "½ab·sin30°=2 → ab=8 → a²+b²=(a+b)²−2ab=20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20$'
  answer_source: "답지"
  figure: crop:fig-0765.png
  latex: latex-bank/rpm-alg/items/0765.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30° → 45°·60°)·넓이·a+b 값. 제약: ab 가 유리수이고 (a+b)² ≥ 4ab (양의 실수 a, b 가 실제로 존재). 예각 조건 유지."
    creative: "(1) a−b 를 주고 (a+b)² 을 묻기(★2) (2) a²+b² 와 넓이를 주고 a+b 를 묻는 역방향(★2) (3) 사잇각을 미지수로 두고 넓이 최대 조건과 결합(★3 · 0766 골조)."
```

```yaml
- id: RPM-ALG-0766
  page: 102
  vendor_label: "유형 14 사각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 대각선 길이의 합이 8, 두 대각선이 이루는 예각이 45° 인 사각형 넓이의 최댓값. 5지선다.
  category: "넓이 공식 → 합이 일정한 두 수의 곱 최대(산술·기하평균 또는 이차함수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "S=(√2/4)·pq 에서 p+q=8 고정 → pq ≤ ((p+q)/2)²=16 (산술·기하평균, 또는 p(8−p) 이차함수 꼭짓점) — 다른 단원의 최대·최소 도구를 넓이식에 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 활용과 최대·최소(산술·기하평균·이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 대각선을 p, q 로 두면 S=½pq·sin45°=(√2/4)pq. p+q=8 이므로 pq ≤ 16, 등호 p=q=4 → 최댓값 4√2. 넓이 공식 뒤 곱 최대 한 단계. 통찰 1(XU d1)·M_total 4 → 벤더 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "S=(√2/4)·pq → p+q=8 → pq ≤ 16 (p=q=4) → 4√2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0766.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합(8 → 10·12)·각(45° → 30°·60°·90°). 제약: 최댓값이 선택지 꼴(k√2 등)로 정리되고 등호 조건 p=q 가 예각 조건과 무관하게 성립."
    creative: "(1) 합 대신 p²+q² 일정을 주기(★2 · 같은 골조) (2) 사각형이 원에 내접한다는 조건을 붙여 대각선 사잇각을 원주각으로 읽게 하기(★3 · XU 추가) (3) 넓이 최댓값과 합을 주고 각을 역으로 묻기(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0767
  page: 102
  vendor_label: "유형 14 사각형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB=3, BC=4 인 평행사변형 ABCD 의 두 대각선이 이루는 각이 60° 일 때 넓이(그림).
  category: "대각선 이등분 → 반대각선 p, q 에 코사인법칙 두 번(60°·120°) → 차로 pq → S=√3·pq"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "△OAB(각 60°)·△OBC(각 120°) 의 코사인법칙 9=p²+q²−pq, 16=p²+q²+pq 를 빼서 pq=7/2 만 얻음 — 개별 대각선을 구하지 않고 넓이에 필요한 곱만 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형의 넓이와 대각선(코사인법칙 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 O 에서 OA=OC=p, OB=OD=q. AB<BC 이므로 △OAB 가 60°, △OBC 가 120° 를 끼고, 코사인법칙 9=p²+q²−pq, 16=p²+q²+pq. 차에서 pq=7/2, 넓이=4·½pq·sin60°=√3·pq=7√3/2. 두 식을 결합해 곱만 뽑는 통찰 1(CON d1)·M_total 6 → 벤더 「상중」 ★3 유지.
  tier: star_3
  mechanism_primary: "대각선 이등분(p, q) → 코사인법칙 두 식(60°·120°) → 차 → pq=7/2 → S=√3·pq=7√3/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: crop:fig-0767.png
  latex: latex-bank/rpm-alg/items/0767.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC(3, 4 → 2, 5 / 5, 7)·각(60° → 45°·30°). 제약: pq=(BC²−AB²)/(4cosθ) 가 간단한 유리수여야 하고, AB<BC 이면 60° 쪽이 AB 를 마주보는 배치(라벨 위치) 유지."
    creative: "(1) 두 변과 한 대각선을 주고 다른 대각선을 묻기(★2 · AC²+BD²=2(a²+b²)) (2) 대각선 사잇각 대신 ∠B 를 주면 S=ab·sinB 한 줄(★1) (3) 마름모·직사각형으로 특수화하면 대칭으로 즉시(★1~2 · SYM 후보) (4) 넓이를 주고 대각선 사잇각을 묻는 역방향(★3 · BW)."
```

### 유형 UP 15 사인법칙의 실생활에서의 활용

```yaml
- id: RPM-ALG-0768
  page: 103
  vendor_label: "유형 UP 15 사인법칙의 실생활에서의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    50 m 떨어진 두 지점 A, B 에서 강 건너 C 를 본 각이 ∠A=60°, ∠B=75° 일 때 BC 의 거리. 5지선다(그림).
  category: "C=45° → 사인법칙 BC/sinA = AB/sinC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 실생활에서의 활용(거리·높이·입체)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C=180°−135°=45°. BC/sin60°=50/sin45° → BC=50·(√3/2)/(√2/2)=25√6. 사인법칙 한 번. 유형 UP 대표문제 출발 ★3 이나 통찰 0·M_total 4 → −1 → ★2.
    [분류 이슈] 유형 UP 구역이라 벤더 신호는 ★3 이나 골조가 사인법칙 한 줄(★2 · 1단 하향 · 기록).
  tier: star_2
  mechanism_primary: "C=45° → BC=AB·sinA/sinC=25√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0768.png
  latex: latex-bank/rpm-alg/items/0768.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(50 → 100·30)·두 각(60°·75° → 45°·60° / 30°·105°). 제약: 세 각이 모두 sin 값이 알려진 각이어야 하고 BC 가 k√n 꼴로 정리. 선택지 간격 유지."
    creative: "(1) AC 를 묻기(같은 골조 ★2) (2) 강폭(C 에서 AB 에 내린 수선의 길이)을 묻기 → 사인법칙 + 직각삼각형(★3) (3) 각을 재는 지점을 셋으로 늘려 두 삼각형을 연결(★3 · 0794 골조)."
```

```yaml
- id: RPM-ALG-0769
  page: 103
  vendor_label: "유형 UP 15 사인법칙의 실생활에서의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    높이 9 인 원기둥 물통의 윗면 원 위 세 점 A, B, C 에 대해 AB=5, A=70°, B=50° 일 때 물통의 부피(그림).
  category: "윗면 원 = △ABC 의 외접원 → C=60° → 2R=AB/sinC → 부피 πR²h"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "윗면 원을 삼각형 ABC 의 외접원으로 읽어 반지름을 사인법칙 2R=c/sinC 로 구함 — 입체(부피) 문제를 평면 외접원 문제로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사인법칙의 실생활에서의 활용(거리·높이·입체)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C=60°, 2R=5/sin60°=10/√3 → R²=25/3 → V=π·(25/3)·9=75π. 외접원으로 읽는 착안(RT d1) 뒤는 한 줄 계산. 유형 UP 「중」 출발 ★3 이나 통찰이 d1 하나뿐이고 M_total 4 로 골조가 두 단계라 ★2.
    [분류 이슈] 벤더 「중」·유형 UP(★3)이나 그림이 외접원 관계를 그대로 보여 주고 계산이 한 줄 — ★2 로 둠(1단 하향 · 기록).
  tier: star_2
  mechanism_primary: "윗면 원 = 외접원 → 2R=AB/sinC=10/√3 → V=πR²·9=75π"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$75\pi$'
  answer_source: "답지"
  figure: crop:fig-0769.png
  latex: latex-bank/rpm-alg/items/0769.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이(9 → 6·12)·AB(5 → √3·6)·두 각(70°·50° → 합이 120°·135°·150° 이 되는 조합). 제약: 제3의 각이 특수각, R² 이 유리수가 되게 AB 를 고르고 부피가 kπ 로 정리."
    creative: "(1) 부피를 주고 AB 를 역산(★2 · BW d1) (2) 원뿔·반구 등 다른 입체의 밑면 원으로(★2) (3) 세 변 길이만 주면 코사인법칙 → 사인법칙 두 단계(★3 · 0796 골조 + 입체)."
```

```yaml
- id: RPM-ALG-0770
  page: 103
  vendor_label: "유형 UP 15 사인법칙의 실생활에서의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    높이 30 m 건물의 아래에서 옆 건물 꼭대기를 올려다본 각 45°, 옥상에서 올려다본 각 15° 일 때 옆 건물의 높이(cos15° 값 제시·그림).
  category: "보조 삼각형(밑·옥상·옆 건물 꼭대기) 각 45°·105°·30° → 사인법칙 → 빗변 → 높이 = 빗변·sin45°"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "건물 배치에서 밑 P·옥상 Q·옆 꼭대기 T 를 잇는 삼각형을 잡고 ∠P=45°, ∠Q=90°+15°=105°, ∠T=30° 를 채워 사인법칙이 가능한 삼각형으로 옮김(cos15°=sin105° 힌트 활용)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사인법칙의 실생활에서의 활용(거리·높이·입체)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    PQ=30, ∠QPT=45°, ∠PQT=105°, ∠PTQ=30°. PT=30·sin105°/sin30°=60cos15°=15(√6+√2). 높이 = PT·sin45°=15(√3+1). tan15° 를 알면 h(1−tan15°)=30 으로도 되나 cos15° 힌트가 사인법칙 경로를 지정. 통찰 1(RT d2)·M_total 6 → 「상중」 ★3 유지.
  tier: star_3
  mechanism_primary: "△PQT: 45°·105°·30° → PT=30·sin105°/sin30° → h=PT·sin45°=15(√3+1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15(\sqrt{3}+1)\,\mathrm{m}$'
  answer_source: "답지"
  figure: crop:fig-0770.png
  latex: latex-bank/rpm-alg/items/0770.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "건물 높이(30 → 20·40)·두 각(45°·15° → 60°·30° 등). 제약: 보조 삼각형의 세 각이 특수각이거나 힌트로 준 각이어야 하고 답이 k(√a+√b) 꼴로 정리. 옥상 각 < 지면 각 유지(T-범위)."
    creative: "(1) 옆 건물 높이를 주고 두 건물 사이 거리를 묻기(★3 · 같은 골조) (2) 힌트를 tan15° 로 주면 직각삼각형 두 개 연립으로 경로 변경(★3 · SC 후보) (3) 옥상에서 내려다본 각(부각)으로 바꾸면 각 배치 반전(★3 · T-부호)."
```

### 유형 UP 16 코사인법칙의 실생활에서의 활용

```yaml
- id: RPM-ALG-0771
  page: 103
  vendor_label: "유형 UP 16 코사인법칙의 실생활에서의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    연못 양 끝 두 나무 A, B 와 지점 C 에 대해 AC=50 m, BC=60 m, ∠ACB=60° 일 때 A, B 사이의 거리(그림).
  category: "코사인법칙 AB²=AC²+BC²−2·AC·BC·cosC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 실생활에서의 활용(거리·높이·최단 경로)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB²=2500+3600−2·50·60·cos60°=3100 → AB=10√31. 코사인법칙 한 번. 유형 UP 대표문제 출발 ★3 이나 통찰 0·M_total 4 → −1 → ★2.
    [분류 이슈] 유형 UP 구역이라 벤더 신호는 ★3 이나 골조가 코사인법칙 한 줄(★2 · 1단 하향 · 기록).
  tier: star_2
  mechanism_primary: "AB²=50²+60²−2·50·60·cos60°=3100 → 10√31"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10\sqrt{31}\,\mathrm{m}$'
  answer_source: "답지"
  figure: crop:fig-0771.png
  latex: latex-bank/rpm-alg/items/0771.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변(50, 60 → 30, 40 / 20, 30)·각(60° → 120°·45°). 제약: cos 특수각, AB² 이 제곱수×소수라 k√n 으로 정리. 단위 m 유지."
    creative: "(1) AB 와 AC 를 주고 ∠C 를 묻기(★2) (2) 세 지점의 각 배치로 사인법칙과 결합(★3 · 0794) (3) 연못 면적(△ABC 넓이)까지 묻기(★2 · S=½ab·sinC 추가)."
```

```yaml
- id: RPM-ALG-0772
  page: 103
  vendor_label: "유형 UP 16 코사인법칙의 실생활에서의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    10 m 떨어진 두 지점 A, B 에서 가로등 꼭대기 D 를 올려다본 각이 30°, 45°, 발 C 에 대해 ∠ACB=30° 일 때 가로등의 높이. 5지선다(그림).
  category: "두 직각삼각형 → AC=√3h, BC=h → △ABC 코사인법칙 → h"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "높이 h 를 공통 변으로 두 직각삼각형에서 AC=h/tan30°, BC=h/tan45° 를 h 로 표현해 밑면 삼각형 ABC 하나의 코사인법칙으로 모음 — 입체 배치를 평면 삼각형으로 투영"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙의 실생활에서의 활용(거리·높이·최단 경로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AC=√3h, BC=h. 100=3h²+h²−2·√3h·h·cos30°=4h²−3h²=h² → h=10. 통찰 1(RT d1)·M_total 6 → 유형 UP 「중」 ★3 유지.
  tier: star_3
  mechanism_primary: "AC=√3h, BC=h → 100=3h²+h²−3h² → h=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-0772.png
  latex: latex-bank/rpm-alg/items/0772.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(10 → 20)·두 앙각(30°·45° → 30°·60° / 45°·60°)·∠ACB(30° → 60°·90°·120°). 제약: h² 의 계수 cot²α+cot²β−2cotα·cotβ·cosγ 가 간단한 양의 유리수(30°·45°·30° 이면 1)여야 하고 선택지 정수 유지."
    creative: "(1) 높이를 주고 AB 를 묻기(★2) (2) ∠ACB 대신 ∠ADB 를 주면 삼각형 ABD 로 옮겨 사인법칙(★3 · 경로 변경) (3) A, B, C 가 일직선이면 코사인법칙 대신 선형 관계(★2 · 골조 단순화)."
```

```yaml
- id: RPM-ALG-0773
  page: 103
  vendor_label: "유형 UP 16 코사인법칙의 실생활에서의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    모선 3 km, 밑면 반지름 1 km 인 원뿔 모양 산에서 A 에서 출발해 모선 OB 위 BP=1 km 인 점 P 까지의 최단 등산로 길이(A, B 는 지름 양 끝·그림).
  category: "전개도 부채꼴(반지름 3·중심각 120°) → ∠AOB=60° → △AOP 코사인법칙(OA=3, OP=2)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곡면 위 최단 경로를 전개도의 선분으로 옮김: 부채꼴 중심각 = 2π·1/3 = 2π/3 이고 지름 양 끝 A·B 는 전개도에서 그 절반 60° 를 이룸 — 중심각 절반 함정까지 포함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "코사인법칙의 실생활에서의 활용(거리·높이·최단 경로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개도 부채꼴 반지름 3, 호 2π → 중심각 120°. A, B 가 지름 양 끝이므로 전개도에서 ∠AOB=60°. OP=3−1=2, AP²=9+4−2·3·2·cos60°=7 → √7. 통찰 1(RT d2 · 중심각 절반)·M_total 5 → 「상중」 ★3 유지.
  tier: star_3
  mechanism_primary: "전개도 중심각 120° → ∠AOB=60° → AP²=3²+2²−2·3·2·cos60°=7 → √7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{7}\,\mathrm{km}$'
  answer_source: "답지"
  figure: crop:fig-0773.png
  latex: latex-bank/rpm-alg/items/0773.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모선(3 → 4·6)·반지름(1 → 2)·BP(1 → 2). 제약: 중심각 = 360°·r/l 이 특수각의 2배(r/l = 1/3 → 120°, 1/4 → 90°, 1/2 → 180°)가 되게 하고 A, B 가 지름 양 끝일 때 절반각이 특수각. AP² 양수·간단."
    creative: "(1) A 에서 출발해 한 바퀴 돌아 A 로 돌아오는 최단 경로(★3 · 이등변삼각형 · 중심각 그대로) (2) P 가 OB 의 중점 등 비율 조건(★3) (3) 원뿔대·원기둥 옆면으로 바꾸면 전개도가 사다리꼴·직사각형 → 피타고라스(★2~3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0774
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    △ABC 에서 b=√6, B=60°, C=75° 일 때 a/cosA 의 값. 5지선다.
  category: "A=45° → 사인법칙 a=b·sinA/sinB → ÷cosA"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙으로 변의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A=45°. a=√6·(√2/2)/(√3/2)=2, a/cosA=2/(√2/2)=2√2. 사인법칙 한 번과 나눗셈. 시험 구역 출발 ★2 이나 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "A=45° → a=b·sinA/sinB=2 → a/cos45°=2√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0774.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(√6 → 2√3·√2)·B, C(60°·75° → 45°·60° 등, A 가 특수각이 되게). 제약: a 와 cosA 가 모두 특수각 값이라 몫이 선택지 꼴(k√n)로 정리."
    creative: "(1) a/cosA 대신 b/sinC 등 다른 비(★1) (2) 외접원 반지름 R 과 결합해 R·cosA 를 묻기(★2) (3) 두 각 대신 한 각과 두 변을 주면 코사인법칙 경로(★2)."
```

```yaml
- id: RPM-ALG-0775
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    원 O 의 접선 AC 와 현 AB 가 이루는 각이 60°, AB=10 일 때 원 O 의 넓이. 5지선다(그림).
  category: "접선-현 각 = 원주각 60° → 사인법칙 AB=2R·sin60° → R → πR²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선과 현이 이루는 각은 그 현에 대한 원주각과 같다(중학 원 성질)로 원주각 60° 를 얻어야 사인법칙 2R=AB/sin60° 가 열림 — 다른 단원 도구 없이는 풀이가 끊김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 외접원 반지름(사인법칙 2R=a/sinA)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    현 AB 에 대한 원주각 60° → 2R=10/sin60°=20/√3 → R²=100/3 → S=100π/3. 중학 원 성질 결합 통찰 1(XU d1)·M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "접선-현 각 60° = 원주각 → 2R=10/sin60° → R²=100/3 → 100π/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-0775.png
  latex: latex-bank/rpm-alg/items/0775.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(60° → 45°·30°·120°)·AB(10 → 6·4√3). 제약: R²=(AB/(2sinθ))² 이 유리수가 되게 AB 선택, 넓이 선택지 kπ 꼴."
    creative: "(1) 넓이 대신 호 AB 의 길이·부채꼴 넓이(★2 · 중심각 = 2×원주각) (2) 접선 대신 지름 조건으로 바꾸면 직각 → 정의 한 줄(★1) (3) 두 접선의 사잇각을 주면 중심각 → 현의 길이(★3 · 이등변 + 코사인법칙)."
```

```yaml
- id: RPM-ALG-0776
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    ∠C 가 직각이고 AC=BC=4 인 직각이등변삼각형에서 AC 의 중점 D 에 대해 △ABD 의 외접원 반지름(그림).
  category: "BD=√(4²+2²) → ∠A=45° → 2R=BD/sinA"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 외접원 반지름(사인법칙 2R=a/sinA)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    CD=2, BD=2√5. △ABD 에서 BD 의 대각 ∠A=45° → 2R=2√5/sin45°=2√10 → R=√10. 대각·대변 쌍(A, BD)을 고르는 것이 전부인 절차. 통찰 0·M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "BD=2√5, ∠A=45° → R=BD/(2sin45°)=√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{10}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0776.png
  latex: latex-bank/rpm-alg/items/0776.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC=BC(4 → 2·6)·D 의 위치(중점 → 1:3 내분). 제약: BD² 이 정수, ∠A=45° 유지(직각이등변). 답이 √n 꼴."
    creative: "(1) △BCD 의 외접원(직각 → 빗변 BD 가 지름 · ★1) (2) 정삼각형에서 한 변의 중점으로 바꾸면 ∠A=60°(★2) (3) △ABD 의 넓이와 외접원 넓이의 비(★2)."
```

```yaml
- id: RPM-ALG-0777
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    AB=10 을 지름으로 하는 원에 내접하는 △ABC 에서 √3·sinA = sinB 일 때 △ABC 의 넓이(그림).
  category: "지름 → C=90° → 사인법칙으로 √3a=b → a²+b²=100 → a=5, b=5√3 → S=½ab"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 변형(사인 비 ↔ 변 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지름 위 원주각 C=90°. √3sinA=sinB → √3a=b. a²+3a²=100 → a=5, b=5√3, S=½·5·5√3=25√3/2. 사인 비 → 변 비 치환은 유형 표준 절차라 통찰로 세지 않음. M_total 5 → 시험 구역 ★2(중요 태그 +0).
  tier: star_2
  mechanism_primary: "C=90° → √3a=b → a²+b²=10² → a=5, b=5√3 → S=25√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: crop:fig-0777.png
  latex: latex-bank/rpm-alg/items/0777.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름(10 → 4·2√3)·비(√3 → 1·√2·2). 제약: a²(1+k²)=d² 에서 a 가 간단, 넓이가 유리수 또는 k√n."
    creative: "(1) 넓이 대신 A 의 크기(★2 · sinA=1/2) (2) 지름 조건을 떼고 외접원 반지름 R 만 주면 c 를 모른 채 사인법칙 세 변 → 코사인법칙(★3) (3) sinA:sinB:sinC 를 주고 외접원 넓이(★2 · 0786 골조)."
```

```yaml
- id: RPM-ALG-0778
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    (2a−b):(2b−c):(2c−a)=9:6:1 일 때 sinA:sinB:sinC. 5지선다.
  category: "비를 k 로 두고 3원 연립 → a:b:c=7:5:4 → 사인법칙으로 사인 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙의 변형(사인 비 ↔ 변 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a−b=9k, 2b−c=6k, 2c−a=k 를 풀면 a=7k, b=5k, c=4k (세 식을 더해 a+b+c=16k 를 먼저 얻으면 빠름). sinA:sinB:sinC=a:b:c=7:5:4. 연립 풀이가 노동의 전부(M_total 6)·통찰 0 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "2a−b=9k, 2b−c=6k, 2c−a=k → (a, b, c)=(7, 5, 4)k → 사인 비 7:5:4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0778.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 9:6:1 을 바꾸기. 제약: 연립의 해 (a, b, c) 가 양의 정수비이고 삼각형 부등식을 만족. 계수 (2, −1) 패턴을 유지하거나 (a+b):(b+c):(c+a) 로 교체."
    creative: "(1) (a+b):(b+c):(c+a) 형태로 바꾸기(★2 · 합으로 즉시) (2) 사인 비를 주고 최대각의 cos 값을 묻기(★2 · 코사인법칙 추가) (3) 비와 넓이를 주고 변의 길이 결정(★3 · 0797 골조)."
```

```yaml
- id: RPM-ALG-0779
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a·sinA = b·sinB 가 성립하는 △ABC 의 모양. 5지선다.
  category: "사인법칙 sinA=a/2R 대입 → a²=b² → a=b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 모양 판별(사인·코사인법칙 변형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinA=a/2R, sinB=b/2R 대입 → a²=b² → a=b (양수). 치환 한 번. 시험 구역 출발 ★2 이나 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "sinA=a/2R, sinB=b/2R → a²=b² → a=b 이등변삼각형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0779.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "식을 a·cosA = b·cosB(두 갈래: a=b 또는 C=90°)·sin²A=sin²B+sin²C(직각) 등으로 바꾸기. 제약: 치환·인수분해 결과가 선택지 하나로 결정되게(둘 이상이면 발문을 '~일 수 있는 것' 으로)."
    creative: "(1) a·cosA = b·cosB 로 바꾸면 (a²−b²)(a²+b²−c²)=0 두 갈래 → MI(★3) (2) sin²A = sin²B + sin²C 로 바꾸면 피타고라스 → 직각(★2) (3) 조건 두 개 결합(0787 골조 · ★3)."
```

```yaml
- id: RPM-ALG-0780
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    AB=x, AC=4/x, A=120° 인 △ABC 에서 BC 의 길이의 최솟값.
  category: "코사인법칙 BC²=x²+16/x²+4 → 산술·기하평균 → 최소 12"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x²+16/x² ≥ 2·4 (산술·기하평균, 등호 x²=4) 로 최솟값 — 코사인법칙에서 곱 x·(4/x)=4 가 상수로 사라진 뒤 절대부등식 단원 도구를 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 활용과 최대·최소(산술·기하평균·이차함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC²=x²+16/x²−2·x·(4/x)·cos120°=x²+16/x²+4 ≥ 8+4=12 (x=2). BC ≥ 2√3. cos120°=−1/2 의 부호(T-부호)와 등호 조건 확인(T-경계)이 함정. 통찰 1(XU d1)·M_total 7 → 시험 구역 ★3.
  tier: star_3
  mechanism_primary: "BC²=x²+16/x²+4 → 산술·기하평균 x²+16/x² ≥ 8 → BC_min=2√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0780.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC=4/x 의 상수(4 → 9·1)·각(120° → 60°: 부호 반전으로 −4 → 최솟값 재계산). 제약: AB·AC 가 상수가 되게 곱 형태 유지, 산술·기하평균 등호 x=√k 가 양수 실수. 최솟값이 k√n 꼴."
    creative: "(1) 최솟값 대신 그때의 x 값(★3) (2) AB=x, AC=6−x 로 합이 상수이면 이차함수 최소 + 범위(★3 · T-범위) (3) 넓이 S=½·x·(4/x)·sin120° 가 x 와 무관한 상수임을 묻는 함정형(★2)."
```

```yaml
- id: RPM-ALG-0781
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험"
  summary: |
    AB=3, BC=2, AC>3, cos(∠BAC)=7/8 인 △ABC 에서 AC 의 중점 M, 외접원과 직선 BM 의 교점 D(≠B) 에 대해 MD 의 길이. 5지선다(그림).
  category: "코사인법칙 → AC 이차방정식 두 근 → AC>3 으로 기각 → BM(코사인법칙) → 방멱 AM·MC=BM·MD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "4=9+b²−(21/4)b → 4b²−21b+20=0 → b=4 또는 5/4, AC>3 조건으로 5/4 를 기각하는 사후 필터가 답을 결정"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "MD 는 외접원 안 두 현 AC·BD 의 교점 M 에서 방멱 AM·MC=BM·MD 로만 닫힘 — 중학 원 성질을 코사인법칙 결과(BM)와 결합해야 마지막 단계가 열림"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "외접원 위의 점과 원의 성질 결합(방멱·내접사각형 · 기출)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    코사인법칙으로 b=4(5/4 기각 · VF). △ABM 에서 BM²=9+4−2·3·2·(7/8)=5/2. 방멱 2·2=BM·MD → MD=4/(√10/2)=4√10/5. 통찰 2(VF d1 · XU d2)·M_total 6 → 시험 구역 ★2 출발 +1 → ★3. 기출 태그(+0~1)와 일치.
    [분류 이슈] 통찰 2개(XU d2 포함)라 ★4 후보로 볼 여지 있으나 각 단계가 정형(코사인법칙·방멱)이라 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "코사인법칙 → AC=4(5/4 기각) → BM=√10/2 → AM·MC=BM·MD → MD=4√10/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0781.png
  latex: latex-bank/rpm-alg/items/0781.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC·cosA(3, 2, 7/8 → 이차방정식이 두 양근을 갖고 하나만 조건을 만족하는 조합)·M 의 위치(중점 → 1:3). 제약: 판별식 완전제곱(두 근 유리수), 기각 근이 양수라 조건 AC>3 이 살아 있어야 함(VF 유지), BM² 이 양의 유리수, MD 가 선택지 꼴 k√10/m."
    creative: "(1) AC>3 을 AC<3 으로 바꾸면 기각되는 근이 반대(★3 · VF 유지) (2) 방멱 대신 △BCD 에서 원주각이 같음을 이용해 사인법칙으로 BD 를 구하게 유도(★3 · SC 후보) (3) M 을 외접원 중심으로 바꾸면 방멱 소멸·반지름 계산(★2~3) (4) 두 근 모두 조건을 만족하게 하면 MI 로 바뀌며 답 두 개(★4)."
```

```yaml
- id: RPM-ALG-0782
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    c²−3ab=(a−b)² 일 때 C 의 크기.
  category: "전개 → c²=a²+b²+ab → cosC=−1/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변·각 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    c²=a²−2ab+b²+3ab=a²+b²+ab. cosC=(a²+b²−c²)/2ab=−ab/2ab=−1/2 → C=120°. 전개와 코사인법칙 비교 두 줄. 시험 구역 출발 ★2 이나 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "c²=a²+b²+ab → cosC=−1/2 → C=120°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$120^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0782.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(−3ab → −ab · +ab → cosC=±1/2 · 0). 제약: 정리 뒤 (a²+b²−c²)/(2ab) 가 특수각 cos 값(0, ±1/2, ±√2/2, ±√3/2)이 되게."
    creative: "(1) 세 변 비 a:b:c 를 주고 최대각(★1~2) (2) 조건을 (a+b+c)(a+b−c)=3ab 처럼 인수 형태로 주면 전개 방향 인식(★2) (3) C 를 구한 뒤 외접원·넓이와 결합(★2~3)."
```

```yaml
- id: RPM-ALG-0783
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    정사각형 ABCD 의 변 AD, CD 를 각각 1:2 로 내분하는 점 E, F 에 대해 ∠EBF=θ 일 때 cosθ 의 값(그림).
  category: "한 변 3 설정 → BE, BF, EF 피타고라스 → △BEF 코사인법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변·각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 변 3 → AE=CF=1, DE=DF=2. BE=BF=√10, EF=2√2. cosθ=(10+10−8)/(2·10)=3/5. 길이 정규화 뒤 코사인법칙 한 번(비 문제의 표준 절차). 통찰 0·M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "변 3 → BE=BF=√10, EF=2√2 → cosθ=(10+10−8)/20=3/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: crop:fig-0783.png
  latex: latex-bank/rpm-alg/items/0783.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비(1:2 → 1:1·1:3·2:1)·정사각형 → 직사각형(가로세로 비 제시). 제약: 비의 합을 한 변으로 두면 모든 길이가 정수, 대칭 배치(BE=BF) 유지 시 cosθ 가 유리수."
    creative: "(1) sinθ 나 △BEF 의 넓이(★2) (2) 두 내분비를 다르게 해 BE≠BF 로 만들면 곱에 무리수 → 유리화(★2~3 · Mₖ 상승) (3) tanθ 를 좌표(기울기)로 구하는 경로와 비교(★2 · SC 후보)."
```

```yaml
- id: RPM-ALG-0784
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    AD∥BC, AB=6, BC=10, CD=8, AD=4 인 사각형 ABCD 에서 대각선 AC 의 길이. 5지선다(그림).
  category: "평행 → ∠ACB=∠CAD(엇각) → 두 삼각형에서 cos 등치 → AC²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AD∥BC 를 '∠ACB=∠CAD' 로 옮겨 △ABC·△ACD 의 코사인법칙 (x²+64)/(20x)=(x²−48)/(8x) 로 잇는 것이 골조 — 평행 조건의 사용처를 학생이 찾아야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙으로 변·각 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AC=x. cos∠ACB=(100+x²−36)/(20x), cos∠CAD=(16+x²−64)/(8x). 등치 → 8(x²+64)=20(x²−48) → 12x²=1472 → x²=368/3 → x=4√69/3. 좌표(A 에서 BC 에 수선)로도 되나 결국 같은 연립. 통찰 1(EQV d1)·M_total 6 → 시험 구역 ★3.
  tier: star_3
  mechanism_primary: "∠ACB=∠CAD → (x²+64)/(20x)=(x²−48)/(8x) → x²=368/3 → 4√69/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-0784.png
  latex: latex-bank/rpm-alg/items/0784.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 변(6, 10, 8, 4). 제약: 사다리꼴 존재 조건(|AB−CD| < BC−AD < AB+CD)과 x² 이 양수·선택지 꼴 k√n/m 이 되게 조정. 평행한 두 변 라벨(AD∥BC) 고정."
    creative: "(1) 다른 대각선 BD 를 묻기(★3 · 대칭 골조) (2) 등변사다리꼴(AB=CD)로 특수화하면 대칭 → 수선 하나로 피타고라스(★2 · SYM) (3) 두 대각선의 교점에서 이루는 각의 cos 값까지(★4 · 0798 역방향)."
```

```yaml
- id: RPM-ALG-0785
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    세 변이 5−x, 5, 5+x 인 삼각형의 최소각이 30° 일 때 양수 x 의 값. 5지선다.
  category: "최소각 ↔ 최단변 5−x 의 대각 → 코사인법칙 → x 일차식 → 유리화"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'최소각 30°' 를 '가장 짧은 변 5−x 의 대각이 30°' 로 옮겨야 코사인법칙을 세울 수 있음(x>0 이므로 5−x 가 최단)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙으로 변·각 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (5−x)²=5²+(5+x)²−2·5·(5+x)·cos30° → x² 항 소거 → −20x+5√3x=25−25√3 → x=5(√3−1)/(4−√3)=(15√3−5)/13 (≈1.61, 삼각형 부등식 x<2.5 안). 조건 번역 통찰 1(EQV d1)·유리화 포함 M_total 7 → 시험 구역 ★3.
  tier: star_3
  mechanism_primary: "최소각 = (5−x) 의 대각 → (5−x)²=25+(5+x)²−10(5+x)cos30° → x=(15√3−5)/13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0785.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 변(5 → 4·6)·각(30° → 45°·60°). 제약: (5−x)²·(5+x)² 의 x² 항이 상쇄되는 등차 구조를 유지해 x 의 일차방정식이 되게 하고, 답이 삼각형 부등식 범위(x < 가운데 변/2) 안인지 확인."
    creative: "(1) 최대각이 120° 로 바꾸면 5+x 의 대각(★3 · 같은 골조·부호) (2) 세 변이 x, x+1, x+2 이고 최대각 120° → 정수해(★2 · 3, 5, 7) (3) 최소각의 sin 값을 묻고 넓이까지(★3~4)."
```

```yaml
- id: RPM-ALG-0786
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    a=3 이고 7/sinA=5/sinB=3/sinC 일 때 △ABC 의 외접원의 넓이. 5지선다.
  category: "sinA:sinB:sinC=7:5:3 → a:b:c → cosA=−1/2 → 2R=a/sinA"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 외접원 반지름(사인법칙 2R=a/sinA)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 비의 공통값을 k 로 두면 sinA:sinB:sinC=7:5:3 (역수로 읽는 T-표기 함정) → a:b:c=7:5:3 → b=15/7, c=9/7. cosA=(b²+c²−a²)/2bc=−1/2 → A=120°, sinA=√3/2. 2R=3/(√3/2)=2√3 → R=√3 → 3π. 7:5:3 이 120° 삼각형임을 알면 코사인법칙 생략. 절차 3단계·M_total 6 → 시험 구역 ★2(중요 태그 +0).
  tier: star_2
  mechanism_primary: "사인 비 7:5:3 → 변 비 7:5:3 → cosA=−1/2 → 2R=3/sin120° → R=√3 → 3π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0786.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(7:5:3 → 3:5:7 배치·7:8:13 등 특수각 삼각형)·a 값. 제약: 변 비가 특수각(60°·90°·120°)을 갖는 정수비(3:5:7, 7:8:13, 3:4:5)여야 sin 이 특수값이고 R² 이 유리수."
    creative: "(1) 넓이 대신 R 자체·둘레(★2) (2) 비를 sin 대신 cos 조건으로 주면 코사인법칙 두 번(★3) (3) 외접원 넓이와 비를 주고 a 를 역산(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0787
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    ㈎ sinA+sinC=2sin(B+C), ㈏ sinA/sinB=cosC 를 만족시키는 △ABC 의 모양. 5지선다.
  category: "sin(B+C)=sinA → c=a · 사인/코사인법칙 치환 → a²+c²=b² → B=90° 직각이등변"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈎ 의 sin(B+C) 를 내각 합 조건으로 sin(π−A)=sinA 로 바꿔야 sinC=sinA → c=a 로 풀림 — 조건을 풀이 가능한 등가 형태로 학생이 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 모양 판별(사인·코사인법칙 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ → sinA+sinC=2sinA → c=a. ㈏ → a/b=(a²+b²−c²)/(2ab) → 2a²=a²+b²−c² → a²+c²=b² → B=90°. 두 조건을 각각 변 관계로 번역해 결합. 통찰 1(EQV d1)·M_total 6 → 시험 구역 ★3.
  tier: star_3
  mechanism_primary: "㈎ sin(B+C)=sinA → c=a · ㈏ 사인·코사인법칙 → a²+c²=b² → B=90° 직각이등변삼각형"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0787.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 계수 2 → 다른 대칭 조건(sinB+sinC=2sinA 등)·㈏ 를 sinB/sinA=cosC 로. 제약: 두 조건의 변 관계가 서로 모순 없이 하나의 삼각형 모양으로 결정되고 선택지에 그 모양이 있어야 함."
    creative: "(1) 조건 하나만 주고 모양 판별(★2) (2) ㈏ 를 a·cosB = b·cosA 처럼 두 갈래(a=b 또는 직각)로 바꿔 ㈎ 로 갈래를 소거(★3~4 · MI+VF) (3) 삼각형이 결정된 뒤 외접원 넓이까지(★3)."
```

```yaml
- id: RPM-ALG-0788
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험"
  summary: |
    중심각 π/3 인 부채꼴 OAB 에서 OA 를 3:1, OB 를 1:2 로 내분하는 점 P, Q 에 대해 △OPQ 의 넓이가 4√3 일 때 호 AB 의 길이. 5지선다(그림).
  category: "OP=3r/4, OQ=r/3 → S=½·OP·OQ·sin(π/3) → r=8 → 호 rθ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이(두 변과 끼인각)와 부채꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름 r 에서 OP=3r/4, OQ=r/3. ½·(3r/4)·(r/3)·(√3/2)=√3r²/16=4√3 → r²=64 → r=8. 호=8·π/3=8π/3. 내분 길이·넓이 공식·호 길이 세 단계 절차. M_total 5 → 시험 구역 ★2(기출 태그 · 통찰 없음 +0).
  tier: star_2
  mechanism_primary: "OP=3r/4, OQ=r/3 → √3r²/16=4√3 → r=8 → 호=8π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-0788.png
  latex: latex-bank/rpm-alg/items/0788.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비(3:1·1:2)·중심각(π/3 → π/4·π/6)·넓이. 제약: OP·OQ 의 r² 계수와 sin 값의 곱으로 r² 이 완전제곱수가 되게 넓이 역설계. 호 길이 선택지 kπ."
    creative: "(1) 호 길이 대신 부채꼴 넓이·PQ 길이(코사인법칙 추가 ★2~3) (2) 넓이 대신 PQ 길이를 주면 코사인법칙으로 r(★3) (3) △OPQ 넓이가 부채꼴 넓이의 몇 배인지 비율로(★2)."
```

```yaml
- id: RPM-ALG-0789
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a+c=10, B=30° 인 △ABC 의 넓이의 최댓값.
  category: "S=½ac·sin30°=ac/4 → 합이 일정 → ac ≤ 25"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ac ≤ ((a+c)/2)²=25 (산술·기하평균 또는 a(10−a) 이차함수) — 합 일정 곱 최대 도구를 넓이식에 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 활용과 최대·최소(산술·기하평균·이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S=½·a·c·sin30°=ac/4, a+c=10 → ac ≤ 25 (a=c=5) → 25/4. 넓이 공식 뒤 곱 최대 한 단계. 통찰 1(XU d1)·M_total 4 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "S=ac/4 → a+c=10 → ac ≤ 25 → S_max=25/4"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0789.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합(10 → 12·8)·각(30° → 60°·120°·150°). 제약: sin 특수각, 최댓값 (합/2)²·sinB/2 가 간단한 유리수 또는 k√n."
    creative: "(1) 최댓값일 때 b 의 길이(★3 · 코사인법칙 추가) (2) a+c 대신 ac 일정과 각을 주면 넓이는 상수 → 함정형(★2) (3) 둘레 일정 조건으로 바꾸면 이차식 최대(★3~4)."
```

```yaml
- id: RPM-ALG-0790
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    원에 내접하는 사각형 ABCD 에서 AB=2, BC=6, CD=2√2, AD=2√2, ∠BCD=45° 일 때 넓이(그림).
  category: "내접 → ∠BAD=135° → 대각선 BD 로 분할 → 두 삼각형 넓이 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원에 내접 → ∠BAD=180°−45°=135° (중학 원 성질 · 대각 보각) 로 두 삼각형 넓이의 sin 값이 같아짐 — 이 성질 없이는 △ABD 의 각을 모름"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 넓이(대각 보각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    △BCD=½·6·2√2·sin45°=6, △ABD=½·2·2√2·sin135°=2 → 8. (BD²=20 이 양쪽 코사인법칙에서 일치해 내접 가능.) 내접사각형 대각 보각 통찰 1(XU d1)·M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "∠BAD=135° → S=½·6·2√2·sin45°+½·2·2√2·sin135°=6+2=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: crop:fig-0790.png
  latex: latex-bank/rpm-alg/items/0790.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 변(2, 6, 2√2, 2√2)·각(45° → 60°·120°). 제약: 두 삼각형이 같은 sin 값을 쓰므로 변 곱이 유리수·√2 조합으로 정리되고, 실제로 내접 가능하도록 BD² 이 양쪽 코사인법칙에서 일치."
    creative: "(1) ∠BCD 를 주지 않고 네 변만 주면 각을 θ 로 두고 두 코사인법칙을 등치 → cosθ(★3~4 · CON) (2) 대각선 BD 의 길이(★2) (3) 외접원 반지름까지(★3 · △BCD 사인법칙)."
```

```yaml
- id: RPM-ALG-0791
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    AB=4, BC=5, 넓이 10√3 (90°<B<180°) 인 평행사변형 ABCD 에서 대각선 AC 의 길이. 5지선다.
  category: "S=AB·BC·sinB → sinB=√3/2 → B=120°(둔각) → 코사인법칙 AC²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이와 대각선(코사인법칙 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4·5·sinB=10√3 → sinB=√3/2 → 조건으로 B=120°(T-범위). AC²=16+25−40·cos120°=41+20=61. 조건이 60°/120° 분기를 미리 잘라 절차형. M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "20·sinB=10√3 → B=120° → AC²=41+20=61 → √61"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0791.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC(4, 5 → 3, 4 / 6, 8)·넓이(sinB 가 특수각 값이 되게). 제약: 둔각 조건 유지 시 cos 음수 → AC²=a²+b²+2ab|cosB| 가 선택지 꼴. 예각으로 바꾸면 BD 가 긴 대각선."
    creative: "(1) 범위 조건을 떼면 B=60° 또는 120° 두 갈래 → '대각선 AC 의 길이로 가능한 값의 합'(★3 · MI) (2) 짧은 대각선 BD(★2) (3) 두 대각선 길이의 비(★3)."
```

```yaml
- id: RPM-ALG-0792
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    두 대각선이 이루는 각 30°, 넓이 16 인 등변사다리꼴 ABCD 의 한 대각선의 길이. 5지선다(그림).
  category: "등변사다리꼴 → 두 대각선 같음(d) → ½d²·sin30°=16"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'등변사다리꼴' 을 '두 대각선의 길이가 같다' 로 번역해야 넓이식이 d 하나의 식이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등변사다리꼴의 두 대각선은 길이가 같으므로 ½·d·d·sin30°=d²/4=16 → d=8. 성질 번역 통찰 1(EQV d1)·M_total 4 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "등변사다리꼴 → AC=BD=d → d²/4=16 → d=8"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0792.png
  latex: latex-bank/rpm-alg/items/0792.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30° → 45°·60°·150°)·넓이. 제약: d²·sinθ/2 = S 에서 d 가 정수(선택지 정수)."
    creative: "(1) 등변사다리꼴 대신 직사각형(대각선 같음 + 사잇각)으로(★1~2) (2) 대각선 길이와 넓이를 주고 각을 묻기(예각·둔각 두 답 → MI ★3) (3) 윗변·아랫변 합까지 결합(★3~4 · 대각선 사잇각의 보조선)."
```

```yaml
- id: RPM-ALG-0793
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    넓이 100 인 사각형 ABCD 에서 대각선 AC 를 20 % 줄이고 BD 를 10 % 늘려 만든 새 사각형의 넓이(그림).
  category: "S=½·AC·BD·sinθ 가 대각선 곱에 비례 → 0.8×1.1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    사잇각이 같으므로 S'=½·(0.8AC)·(1.1BD)·sinθ=0.88·S=88. 비례 인식 한 줄. 시험 구역 출발 ★2 이나 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "S'=½(0.8AC)(1.1BD)sinθ=0.88·100=88"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$88$'
  answer_source: "답지"
  figure: crop:fig-0793.png
  latex: latex-bank/rpm-alg/items/0793.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율(−20 %·+10 % → −10 %·+30 % 등)·원래 넓이. 제약: 곱 (1+p)(1+q)·S 가 정수, 사잇각 불변 가정을 발문에 유지."
    creative: "(1) 사잇각도 30° → 60° 로 바꾸면 sin 비까지 곱(★2) (2) 새 넓이를 주고 늘린 비율을 역산(★2 · BW d1) (3) 두 대각선을 같은 비율로 줄일 때 넓이 비(제곱 비 · ★1)."
```

```yaml
- id: RPM-ALG-0794
  page: 106
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    강 한쪽 두 지점 A, B(AB=30 m)와 건너편 C, D 에 대해 ∠BAC=90°, ∠ABC=30°, ∠BAD=30°, ∠ABD=60° 일 때 C, D 사이의 거리(그림).
  category: "직각삼각형 두 개 → AC=10√3, AD=15√3 → ∠CAD=60° → △ACD 코사인법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 CD 를 품은 삼각형 ACD 를 고르고 ∠CAD=90°−30°=60° 를 읽어 두 직각삼각형의 결과를 코사인법칙 하나로 모음 — 실생활 배치를 계산 가능한 삼각형으로 옮기는 단계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙의 실생활에서의 활용(거리·높이·최단 경로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABC: AC=30·tan30°=10√3. △ABD: ∠ADB=90° → AD=30·cos30°=15√3. ∠CAD=60° → CD²=300+675−2·10√3·15√3·½=525 → 5√21. 통찰 1(RT d1)·M_total 6 → 시험 구역 ★3(유형 UP 16 골조와 같은 수준).
  tier: star_3
  mechanism_primary: "AC=10√3, AD=15√3, ∠CAD=60° → CD²=975−450=525 → 5√21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\sqrt{21}\,\mathrm{m}$'
  answer_source: "답지"
  figure: crop:fig-0794.png
  latex: latex-bank/rpm-alg/items/0794.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(30 → 20·60)·네 각(직각·30°·60° 조합 유지 또는 45°·60°). 제약: 두 삼각형에서 AC·AD 가 특수각으로 계산되고 ∠CAD 가 특수각, CD² 이 k²·소수 꼴. 배치(C, D 가 강 건너 같은 쪽) 유지."
    creative: "(1) 두 삼각형이 직각이 아니면 사인법칙 두 번 → 코사인법칙(★3~4 · Mₛ 상승) (2) CD 대신 △ACD 의 넓이(★3) (3) CD 를 주고 AB 를 역산(★4 · BW · 이차식)."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0795
  page: 107
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    x 에 대한 이차방정식 (cosA+cosB)x²+2x·sinC+(cosA−cosB)=0 이 중근을 가질 때 △ABC 의 모양(서술형).
  category: "중근 → D/4=0 → sin²C−cos²A+cos²B=0 → sin²A+sin²C=sin²B → a²+c²=b²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "판별식 sin²C=cos²A−cos²B 를 cos²=1−sin² 로 sin²A+sin²C=sin²B 로 바꾼 뒤 사인법칙으로 변 관계 a²+c²=b² 로 옮김 — 삼각함수 관계식을 변의 관계로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 모양 판별(사인·코사인법칙 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    D/4=sin²C−(cosA+cosB)(cosA−cosB)=sin²C−cos²A+cos²B=0 → sin²C+(1−sin²B)=1−sin²A → sin²A+sin²C=sin²B → a²+c²=b² → B=90°. 판별식 세우기는 표준(통찰로 세지 않음), 코사인 → 사인 → 변 번역이 골조(RT d1). cosA+cosB≠0(이차방정식 조건) 언급이 서술형 채점 포인트. M_total 6 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "D/4=0 → sin²C=cos²A−cos²B → sin²A+sin²C=sin²B → a²+c²=b² → B=90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$B=90^\circ$인 직각삼각형'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0795.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 배치(cosA±cosB · 2x·sinC)를 (sinA+sinB)x²+2x·sinC+(sinA−sinB) 등으로. 제약: 판별식이 사인법칙으로 변 관계(피타고라스 또는 등변)로 닫히게 항등식 1−sin²=cos² 가 맞물리도록 설계."
    creative: "(1) '중근' 대신 '실근을 가질 조건' 으로 바꾸면 부등식 → 각의 범위(★4 · EQV+RT) (2) 근이 1 이라는 조건으로 바꾸면 대입 → cosA+sinC=0 류(★2~3) (3) 모양이 정해진 뒤 넓이·외접원 결합(★3)."
```

```yaml
- id: RPM-ALG-0796
  page: 107
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    세 변의 길이가 4, 5, 7 인 삼각형의 외접원의 반지름(서술형).
  category: "코사인법칙 → cos=−1/5 → sin=2√6/5 → 2R=7/sin"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 외접원 반지름(사인법칙 2R=a/sinA)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    7 의 대각 θ: cosθ=(16+25−49)/40=−1/5, sinθ=2√6/5. 2R=7/(2√6/5)=35/(2√6) → R=35√6/24. 코사인 → 사인 → 사인법칙 세 단계 표준 절차. 서술형 출발 ★3 이나 통찰 0·M_total 5 → −1 → ★2.
    [분류 이슈] 서술형 구역(★3)이나 골조가 「세 변 → R」 표준 3단계 · 통찰 0 이라 ★2 로 둠(1단 하향 · 기록).
  tier: star_2
  mechanism_primary: "cosθ=−1/5 → sinθ=2√6/5 → R=7/(2sinθ)=35√6/24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{35\sqrt{6}}{24}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0796.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변(4, 5, 7 → 3, 5, 7 / 5, 6, 7 / 2, 3, 4). 제약: 삼각형 부등식, cos 이 간단한 유리수, sin 의 근호가 간단(3, 5, 7 이면 120° 특수각)."
    creative: "(1) 내접원 반지름(넓이 = r·s · ★3 · 헤론 또는 sin 넓이) (2) 외접원 넓이와 두 변을 주고 셋째 변(★3 · BW) (3) R 을 구한 뒤 원 위 다른 점으로 넓이 최대(★3~4 · 0801 골조)."
```

```yaml
- id: RPM-ALG-0797
  page: 107
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    (a+b):(b+c):(c+a)=7:5:6 이고 △ABC 의 넓이가 3√15 일 때 a 의 값(서술형).
  category: "합 비 → a:b:c=4:3:2 (k) → cosA=−1/4 → sinA=√15/4 → S=½bc·sinA → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이와 변 비(넓이 → 변 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a+b=7k, b+c=5k, c+a=6k → a=4k, b=3k, c=2k. cosA=(9+4−16)/12=−1/4, sinA=√15/4. S=½·3k·2k·√15/4=3√15k²/4=3√15 → k²=4 → a=8. 연립·코사인·넓이 세 국면 절차. 매개변수 k(Mₐ 2)·M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "a+b=7k 등 → (a, b, c)=(4, 3, 2)k → cosA=−1/4 → sinA=√15/4 → 3√15k²/4=3√15 → k=2 → a=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0797.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(7:5:6 → 합 비를 풀면 정수비가 되는 다른 조합)·넓이. 제약: 변 비 (p, q, r) 가 삼각형 부등식을 만족하고 cos 이 간단한 유리수, 넓이 = (상수)·k² 로 k 가 정수."
    creative: "(1) 넓이 대신 외접원 반지름을 주고 a 결정(★3) (2) 비를 sin 비로 주기(★3 · 0786 결합) (3) a 대신 최대각의 크기나 내접원 반지름(★3~4)."
```

```yaml
- id: RPM-ALG-0798
  page: 107
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    두 대각선 AC, BD 의 교점 P 에 대해 AP=3, BP=6, CP=4, DP=2, CD=4 인 사각형 ABCD 의 넓이(서술형·그림).
  category: "△CPD 코사인법칙 → cos∠CPD=1/4 → sin=√15/4 → S=½·AC·BD·sin"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos∠CPD=(16+4−16)/(2·4·2)=1/4 → sin=√15/4. AC=7, BD=8 → S=½·7·8·√15/4=7√15. 대각선 사잇각을 한 조각 삼각형에서 구해 넓이 공식에 넣는 표준 절차. 통찰 0·M_total 6 → 서술형 ★3 유지.
    [분류 이슈] 절차형 4단계라 ★2 로 볼 여지 있으나 M_total 6 이라 −1 규칙 미해당 → 서술형 출발 ★3 유지, 후보 ★2 기록.
  tier: star_3
  mechanism_primary: "cos∠CPD=1/4 → sin=√15/4 → S=½·7·8·sin=7√15"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$7\sqrt{15}$'
  answer_source: "답지"
  figure: crop:fig-0798.png
  latex: latex-bank/rpm-alg/items/0798.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 조각 길이(3, 6, 4, 2)·CD(4). 제약: △CPD 삼각형 부등식, cos 이 간단한 유리수, AC·BD 곱과 sin 의 곱이 k√n. CD 대신 AB 를 주면 △APB 사용."
    creative: "(1) CD 대신 AB 나 AD 를 주기(다른 조각 삼각형 · ★3) (2) 넓이를 주고 CD 를 역산(★3 · BW) (3) 사각형이 원에 내접하면 방멱 AP·CP=BP·DP 로 한 조각을 숨김(★4 · XU)."
```

### 실력 Up

```yaml
- id: RPM-ALG-0799
  page: 107
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    반지름 R 인 원에 내접하는 △ABC 에서 a/R 의 값이 정수가 되도록 하는 모든 A 의 크기의 합.
  category: "a/R=2sinA → 0<2sinA≤2 정수 → sinA=1/2, 1 → A=30°, 150°, 90°"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a/R 을 사인법칙 a=2R·sinA 로 '2sinA' 라는 각의 함수로 바꿔야 정수 조건이 삼각방정식이 됨"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2sinA 가 정수 → 1 또는 2 두 경우, sinA=1/2 는 30°·150° 둘(0°<A<180°)·sinA=1 은 90° — 모든 경우가 답에 기여(150° 누락이 흔한 T-범위)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "사인법칙의 변형 a=2R·sinA 와 각의 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=2R·sinA → a/R=2sinA ∈ (0, 2] → 정수 1, 2. sinA=1/2 → A=30°, 150°; sinA=1 → A=90°. 합 270°. 통찰 2(RT d1 · MI d1)·M_total 6. 실력 Up 출발 ★4 이나 골조가 두 단계로 짧고 통찰이 모두 d1 이라 ★3.
    [분류 이슈] 실력 Up 구역(★4)이나 M_total 6·통찰 2개 모두 d1 이고 계산이 없어 ★3 으로 둠(1단 하향 · 기록). 150° 누락 함정 때문에 체감은 ★3~4.
  tier: star_3
  mechanism_primary: "a/R=2sinA → 정수 1, 2 → sinA=1/2, 1 → A=30°, 150°, 90° → 합 270°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$270^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0799.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2sinA 의 범위 (0, 2] 를 유지하면 정수는 1, 2 뿐이라 값 목록은 바뀌지 않음 — 대신 'a/R=√3' 처럼 특정값을 주고 각 두 개의 합(★2), 또는 조건을 'a/R 이 1/2 의 배수' 로 바꿔 경우 확장. 제약: 0°<A<180° 에서 sinA 의 치역 (0, 1]."
    creative: "(1) a/R 이 정수인 A 의 '개수' 만 묻기(★2) (2) (a+b)/R 이 정수·최댓값 조건으로 확장(★4 · 두 각 결합) (3) 각 A 마다 삼각형 넓이의 최댓값까지(★4 · XU)."
```

```yaml
- id: RPM-ALG-0800
  page: 107
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    AB=AC, BC=8, A=120° 인 △ABC 에서 변 AC 위를 움직이는 점 P 에 대해 BP²+CP² 의 최솟값.
  category: "C=30°, AC=8/√3 → CP=t → △BCP 코사인법칙 → 2t²−8√3t+64 → 꼭짓점(범위 확인)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동점 P 의 위치를 CP=t 로 두고 △BCP(∠C=30°) 의 코사인법칙으로 BP² 을 t 의 식으로 — 기하 최소 문제를 이차식으로 번역"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2t²−8√3t+64=2(t−2√3)²+40 의 꼭짓점 t=2√3 이 0 ≤ t ≤ 8/√3 안에 있는지 확인해 최솟값 — 이차함수 최대·최소 도구를 결합(T-범위)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 활용과 최대·최소(산술·기하평균·이차함수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    B=C=30°, AB=AC=8/√3. CP=t (0 ≤ t ≤ 8/√3) 로 두면 BP²=64+t²−2·8·t·cos30°=t²−8√3t+64, BP²+CP²=2t²−8√3t+64=2(t−2√3)²+40. t=2√3 이 범위 안 → 최솟값 40. △ABP(120°)로 잡아도 같은 식. 통찰 2(RT d1 · XU d1)·M_total 8(T-범위·T-부호) → 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "CP=t → BP²=t²−8√3t+64 → BP²+CP²=2(t−2√3)²+40 → 최솟값 40"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0800.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(8 → 4·6)·A(120° → 90°·60°: 정삼각형이면 대칭). 제약: 이차식 꼭짓점 t=BC·cosC 가 0 ≤ t ≤ AC 안에 있어야 최솟값이 내부에서 나오고(밖이면 경계 · T-경계 변형), 최솟값이 정수."
    creative: "(1) 꼭짓점이 범위 밖이 되도록 각을 바꿔 경계에서 최소(★4 · T-경계) (2) BP+CP 의 최솟값(대칭점 반사 · ★4 · SYM) (3) P 를 BC 위로 옮기면 중선 정리로 한 줄(★2~3 · 파푸스)."
```

```yaml
- id: RPM-ALG-0801
  page: 107
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    2AB=BC, cos(∠ABC)=−5/8 인 △ABC 의 외접원 O 위의 점 P 중 △PAC 의 넓이가 최대인 점을 Q 라 하면 QA=6√10. AC 위의 점 D 에 대해 ∠CDB=2π/3 일 때 △CDB 의 외접원의 반지름. 5지선다(그림).
  category: "AB=k, BC=2k → AC²=(15/2)k² · Q=호 AC 중점 → QA=QC, ∠AQC=π−B → AC²=2QA²(1−5/8)=270 → k=6 → R'=BC/(2sin(2π/3))"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'△PAC 넓이 최대' 를 'P 가 AC 에서 가장 먼 점 = AC 의 수직이등분선과 원의 교점(B 반대쪽 호의 중점)' 으로 번역 → QA=QC 인 이등변삼각형"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ABCQ 가 원에 내접 → ∠AQC=π−∠ABC (대각 보각 · 중학 원 성질) → cos∠AQC=5/8 로 △QAC 의 코사인법칙이 닫힘"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "외접원 위의 점과 원의 성질 결합(방멱·내접사각형 · 기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB=k, BC=2k: AC²=k²+4k²+2·k·2k·(5/8)=(15/2)k². Q 는 B 반대쪽 호 AC 의 중점이므로 QA=QC=6√10, ∠AQC=π−B, cos=5/8 → AC²=2·360·(1−5/8)=270 → (15/2)k²=270 → k=6, BC=12. △CDB 에서 BC 의 대각이 ∠CDB=2π/3 이므로 R'=12/(2·sin(2π/3))=4√3 — D 의 위치와 무관함을 읽는 것이 마지막 포인트. 통찰 2(EQV d2 · XU d1)·M_total 8 → 실력 Up ★4 유지. ★5 는 통찰 3개 조건 미달.
  tier: star_4
  mechanism_primary: "AB=k, BC=2k → AC²=(15/2)k² · Q=호 AC 중점 → QA=QC, cos∠AQC=5/8 → AC²=270 → k=6 → R'=BC/(2sin120°)=4√3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0801.png
  latex: latex-bank/rpm-alg/items/0801.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2AB=BC → 3AB=2BC)·cosB(−5/8 → −1/4·−3/5)·QA(6√10). 제약: B 둔각 유지(Q 가 B 반대쪽 호이고 ∠AQC=π−B 가 예각), AC² 이 두 경로에서 일치해 k 가 정수, ∠CDB 가 특수각이라 R' 이 선택지 꼴. 그림의 P·Q·D 배치 라벨 고정."
    creative: "(1) Q 를 '△PAC 의 둘레 최대' 로 바꿔도 같은 점(★4 · EQV 유지) (2) B 를 예각으로 바꾸면 Q 가 B 와 같은 쪽 호 → ∠AQC=B(★4 · T-부호 반전) (3) 마지막 질문을 △CDB 의 넓이가 최대인 D 의 위치로 바꾸면 사인법칙+범위(★5 후보 · 통찰 3) (4) 외접원 반지름을 주고 QA 를 역산(★4 · BW)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 5 · ★2 17 · ★3 14 · ★4 2 · ★5 0
- 통찰형 20 · 절차형 18 · premium 0 — 통찰 24개 = RT 8(0769·0770·0772·0773·0794·0795·0799·0800) · XU 8(0766·0775·0780·0781·0789·0790·0800·0801) · EQV 5(0784·0785·0787·0792·0801) · CON 1(0767) · VF 1(0781) · MI 1(0799) · 통찰 2개 문항 4(0781·0799·0800·0801)
- type_hint 상위: 「두 대각선의 길이와 사잇각으로 사각형의 넓이(S=½·AC·BD·sinθ)」 5 · 「코사인법칙으로 변·각 구하기」 4 · 「코사인법칙의 실생활에서의 활용(거리·높이·최단 경로)」 4 · 「삼각형의 외접원 반지름(사인법칙 2R=a/sinA)」 4 · 「삼각함수의 활용과 최대·최소(산술·기하평균·이차함수)」 4 · (이하 「사인법칙의 실생활에서의 활용(거리·높이·입체)」 3 · 「삼각형의 모양 판별(사인·코사인법칙 변형)」 3 · 「사인법칙의 변형(사인 비 ↔ 변 비)」 2 · 「평행사변형의 넓이와 대각선(코사인법칙 결합)」 2 · 「외접원 위의 점과 원의 성질 결합(방멱·내접사각형 · 기출)」 2 · 「사인법칙으로 변의 길이 구하기」 1 · 「삼각형의 넓이(두 변과 끼인각)와 부채꼴」 1 · 「원에 내접하는 사각형의 넓이(대각 보각)」 1 · 「삼각형의 넓이와 변 비(넓이 → 변 결정)」 1 · 「사인법칙의 변형 a=2R·sinA 와 각의 범위」 1)
- M_total: 4 ×12 · 5 ×9 · 6 ×12 · 7 ×3(0780·0785·0797) · 8 ×2(0800·0801)
- target_cohort: 하위권 5 · 중하위권 15 · 중위권 11 · 중상위권 5(0767·0773·0780·0781·0799) · 상위권 2(0800·0801)
- 벤더 신호: 유형 14 4문(대표문제 1 · 중 2 · 상중 1) · 유형 UP 15 3문(대표문제 1 · 중 1 · 상중 1) · 유형 UP 16 3문(대표문제 1 · 중 1 · 상중 1) · 시험에 꼭 나오는 문제 21문(중요 2 · 평가원 기출 1 · 교육청 기출 1 · 무태그 17) · 서술형 주관식 4문 · 실력 Up 3문(교육청 기출 1)
- 그림: 22문(`crop:fig-0764.png` · 0765 · 0767 · 0768 · 0769 · 0770 · 0771 · 0772 · 0773 · 0775 · 0776 · 0777 · 0781 · 0783 · 0784 · 0788 · 0790 · 0792 · 0793 · 0794 · 0798 · 0801)
- 답 대조: 38문 모두 재계산 결과가 전사 answer 와 일치. 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없고, 아래는 벤더 출발점에서 1단 조정했거나 후보 ★ 를 함께 적어 둔 경계 문항이다. 시험 구역의 0774·0779·0782·0793 은 「통찰 0·M_total 4 → −1」 규칙을 그대로 적용해 ★1 로 둔 경우라 표에 넣지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0764 | 유형 14 대표문제(★2 출발)이나 넓이 공식 한 줄 역산 · 통찰 0 · M_total 4 → ★1 로 둠 | ★1 / ★2 |
| RPM-ALG-0768 | 유형 UP 15 대표문제(★3 출발)이나 사인법칙 한 번 · 통찰 0 · M_total 4 → ★2 | ★2 / ★3 |
| RPM-ALG-0769 | 유형 UP 15 「중」(★3 출발)이나 외접원 착안(RT d1) 뒤 한 줄 계산 · M_total 4 → ★2. 통찰이 있어 −1 규칙 밖이지만 골조 길이로 판단 | ★2 / ★3 |
| RPM-ALG-0771 | 유형 UP 16 대표문제(★3 출발)이나 코사인법칙 한 번 · 통찰 0 · M_total 4 → ★2 | ★2 / ★3 |
| RPM-ALG-0781 | 평가원 기출 · 통찰 2(VF d1 · XU d2)로 ★4 후보이나 각 단계가 정형(코사인법칙·방멱)이라 ★3 | ★3 / ★4 |
| RPM-ALG-0796 | 서술형(★3 출발)이나 「세 변 → R」 표준 3단계 · 통찰 0 · M_total 5 → ★2 | ★2 / ★3 |
| RPM-ALG-0798 | 서술형(★3 출발) · 절차형 4단계 · M_total 6 이라 −1 규칙 미해당 → ★3 유지, 체감 ★2 | ★3 / ★2 |
| RPM-ALG-0799 | 실력 Up(★4 출발)이나 M_total 6 · 통찰 2개 모두 d1 · 계산 없음 → ★3. 150° 누락 함정으로 체감은 ★3~4 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 15종 — 사각형 넓이(대각선·사잇각) 5 · 코사인법칙 변·각 4 · 코사인법칙 실생활 4 · 외접원 반지름 4 · 최대·최소 결합 4 · 사인법칙 실생활 3 · 모양 판별 3 · 사인법칙 변형(비) 2 · 평행사변형 넓이·대각선 2 · 외접원 위의 점과 원의 성질(기출) 2 · 사인법칙 변 1 · 넓이+부채꼴 1 · 내접사각형 넓이 1 · 넓이+변 비 1 · a=2R·sinA 와 각의 범위 1.
- 따로 세워야 할 유형: 「삼각함수의 활용과 최대·최소」(0766·0780·0789·0800) — 넓이·코사인법칙 결과에 산술·기하평균이나 이차함수를 결합하는 XU 가 골조이고 ★2(합 일정 곱 최대) ↔ ★3~4(동점 매개변수 + 범위) 로 폭이 넓어 base ★ 를 두 층으로 나눠야 한다. 「외접원 위의 점과 원의 성질 결합」(0781·0801) — 방멱·내접사각형 대각·호의 중점(넓이 최대점)을 사인·코사인법칙과 잇는 기출형이며 ★3~4 변별 슬롯의 주 후보라 독립 유형으로 두는 편이 낫다. 「사인법칙의 변형 a=2R·sinA 와 각의 범위」(0799) — 변/R 비를 각의 함수로 읽고 치역으로 경우를 세는 골조는 이 범위에서 1문뿐이지만 다른 벤더 실력 문항에서 반복되므로 별도 항목 후보. 「코사인법칙의 실생활에서의 활용」 안의 원뿔 전개도 최단 경로(0773)는 RT d2 로 나머지 3문(투영·두 삼각형 연결)과 골조가 달라 하위 유형으로 분리.
- 통합해도 될 유형: 「사인법칙으로 변의 길이 구하기」(0774)·「삼각형의 외접원 반지름」(0775·0776·0786·0796) 은 카탈로그에서 「사인법칙(변·외접원 반지름)」 하나로 묶고 base ★1(직접 대입)·★2(원의 성질이나 코사인법칙 선행) 로 층만 나눈다. 「사인법칙의 변형(비)」(0777·0778)·「삼각형의 모양 판별」(0779·0787·0795)·「넓이+변 비」(0797) 는 모두 「사인·코사인법칙의 변형(비 → 변 · 조건식 → 변 관계)」 로 통합 가능하며 조건 개수(1 vs 2)와 판별식 결합 여부로 ★1~3 을 나눈다. 「원에 내접하는 사각형의 넓이」(0790)·「평행사변형의 넓이와 대각선」(0767·0791)·「사각형 넓이(대각선·사잇각)」(0764·0765·0792·0793·0798) 는 RPM 유형 13~14 제목대로 「사각형의 넓이」 한 유형(base ★2)으로 두되 대각선 곱을 코사인법칙 두 식의 차로 얻는 0767 골조(CON)는 ★3 변형 예시로 기록. 실생활 활용 두 유형(15·16)은 「삼각함수의 실생활 활용」 하나로 묶고 사인/코사인은 하위 태그로.
- 이 범위 38문 중 통찰형 20문이라 변형 자산으로는 창의 변형이 주 용도이고, ★ 가 오르는 지점은 (a) 실생활·입체 배치에서 보조 삼각형을 직접 찾게 할 때(0770·0773·0794 계열 ★3 · RT d2), (b) 중학 원 성질(접선-현 각·대각 보각·방멱·호의 중점)을 조건에 숨길 때(0775·0781·0790·0801 계열 ★3~4 · XU), (c) 최대·최소를 산술·기하평균에서 동점 매개변수 + 이차함수 + 범위로 옮길 때(0766·0789 → 0800 계열 ★2 → ★4), (d) 이차방정식의 두 근 중 하나를 조건으로 기각하게 하거나 sinA=1/2 같은 두 각을 모두 세게 할 때(0781·0799 계열 · VF/MI), (e) 모양 판별에서 조건을 두 개로 늘리거나 두 갈래(a=b 또는 직각)를 다른 조건으로 소거하게 할 때(0787·0795 계열 ★3~4 · MI+VF)이다.
