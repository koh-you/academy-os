---
name: mechanism-데이터-GN-M32-11-p2
description: 개념원리 중학 3-2 11 접선과 현이 이루는 각(2/2 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 11 접선과 현이 이루는 각
  unit_code: GN-M32-11
  part: "2/2"
  extract_range: "106~111쪽 · 106-01~111-u6"
  total_problems: 32
  unit_total: 52
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 11 접선과 현이 이루는 각 (2/2) 정독 데이터 (v1.0)

이 파일은 106~111쪽 32문항 전수를 다룬다. 11단원 후반은 개념 학습이 끝난 뒤의 **정리 구역**만으로 이루어져 있다 — 「중단원 마무리하기 STEP 1 기본 문제」 12문(106~107쪽) · 「STEP 2 발전 문제」 9문(108~109쪽) · 「STEP 3 실력 UP」 3문(109쪽) · 「서술형 대비 문제」 8문(110~111쪽 · 예제 `e` 2문 + 유제 `u` 6문). 개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라 ★ 출발점을 구역에서 잡았다(STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3). 태그는 「꼭나와」 7문(106-03 · 106-05 · 107-08 · 107-11 · 108-14 · 108-18 · 109-21)뿐이고 「UP」 태그는 없다. 그림이 없는 블록은 107-09(보기 사각형 판정) 하나뿐이다.

단원 내용은 (가) 원주각과 중심각(호의 길이 비례 포함), (나) 원에 내접하는 사각형의 대각의 합과 한 외각, (다) 네 점이 한 원 위에 있을 조건, (라) 접선과 현이 이루는 각(접현각), (마) 두 현·두 할선이 만드는 교점각 다섯 갈래다. 정리 구역이라 한 문항이 (가)~(마) 중 둘 이상을 사슬로 엮는 경우가 많고, 그 이음매가 이 범위 통찰의 대부분(주로 I-EQV — 호 조건 ↔ 각 조건 ↔ 길이 조건을 서로 옮기는 동치 변환)이다. 나머지는 여러 조건을 한 식으로 묶는 I-CON(108-14 · 108-18 · 109-22), 호 대칭으로 미지 호를 상쇄하는 I-SYM(108-17), 삼각비·닮음을 끌어오는 I-XU(109-21 · 109-23 · 110-e2), 원을 건널 때마다 되풀이되는 보각 사슬을 읽는 I-PD(109-19)다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 **숫자 변형 제약은 각이 만드는 조건**이다 — 원주각의 2배인 중심각이 360°를 넘지 않아야 하고, 교점각 공식에서 나온 호가 양수여야 하며, 호의 길이 비를 바꿀 때는 둘레의 분수가 360°의 약수로 떨어져야 하고, 그림에 찍힌 라벨(점 이름·접점·직각 표시·호의 등호 표시)은 그대로 두어야 한다. 그 제약을 문항별로 `variation_notes.numeric` 에 적었다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-106-01
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 ∠PAO=25°, ∠PBO=35°일 때 중심에 표시된 ∠x의 크기. 5지선다.
  category: "반지름 이등변삼각형 → 원주각 ∠APB → 중심각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OA=OP, OB=OP 라는 길이 조건을 이등변 밑각으로 바꿔 ∠APB를 두 각의 합으로 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각과 중심각의 크기(반지름 이등변삼각형 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 두 각은 원주각 자체가 아니라 반지름이 잘라낸 조각이다. OA=OP·OB=OP로 이등변 두 개를 만들어 ∠APB=25°+35°=60°를 먼저 복원해야 중심각으로 넘어간다.
    그 복원이 이 문항의 전부이고 나머지는 2배 한 줄이라 M_total 5. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "OA=OP·OB=OP 이등변 → ∠APB=25°+35°=60° → 중심각 ∠x=2×60°=120°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-106-01.png"
  latex: latex-bank/gn-m32/items/106-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각 25°·35°를 바꿀 수 있음. 제약: (1) 두 각의 합의 2배가 360° 미만이어야 중심각이 성립(합 < 180°) (2) 선택지가 10°·5° 간격으로 떨어지게 두 각의 합을 정수로 (3) 두 각이 서로 달라야 「합」을 쓰는 골조가 드러남."
    creative: "(1) 중심각을 주고 ∠PAO를 묻는 역방향(I-BW 추가 · ★3) (2) P를 원 위가 아니라 원 밖에 두면 교점각 공식으로 골조가 바뀜(★3) (3) ∠APB를 직접 주면 이등변 복원이 사라져 ★1 (4) 사각형 OAPB의 내각 합으로 푸는 다른 풀이를 요구하면 I-SC 추가(★3)."
```

```yaml
- id: GN-M32-106-02
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 ∠ACD=60°, ∠EOD=64°일 때 ∠x(호 AE의 원주각)의 크기. 5지선다.
  category: "원주각 → 중심각 → 중심각의 차 → 다시 원주각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기(중심각의 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ACD=60°를 중심각 ∠AOD=120°로 올리고 거기서 주어진 ∠EOD=64°를 빼 ∠AOE=56°를 얻은 뒤 다시 반으로 내리는 3단 왕복이다.
    도구는 「원주각=중심각의 절반」 하나뿐이고 왕복이 표준 절차라 통찰로 세지 않았다. 3단이라 M_total 6이고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠ACD=60° → 중심각 ∠AOD=120° → ∠AOE=120°-64°=56° → 호 AE의 원주각 x=28°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-106-02.png"
  latex: latex-bank/gn-m32/items/106-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "60°와 64°를 바꿀 수 있음. 제약: (1) 2×(첫 각) > 둘째 각이어야 차가 양수 (2) 차가 짝수여야 마지막 원주각이 정수 (3) 2×(첫 각) < 360°-(다른 호) 로 두어 그림의 점 순서 A-E-D가 유지되게."
    creative: "(1) ∠x를 주고 ∠EOD를 묻는 역방향(★2 유지) (2) 호의 길이 비로 조건을 바꾸면 I-EQV 추가(★3) (3) 중심각을 두 번 쪼개 세 번 왕복하게 만들면 Mₛ 상승(★3) (4) E를 호 AD 밖으로 옮기면 차가 아니라 합이 되는 함정 판(★3)."
```

```yaml
- id: GN-M32-106-03
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    AB가 원 O의 지름이고 ∠DEB=50°일 때 ∠ACD의 크기. 주관식.
  category: "같은 호의 원주각 이동 → 반원의 직각 → 다시 원주각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지름 조건을 ∠ADB=90°라는 각 조건으로 바꿔 두 원주각 사이를 잇는 다리로 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "반원에 대한 원주각(지름의 직각으로 각 옮기기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 ∠ACD와 주어진 ∠DEB는 서로 다른 호의 원주각이라 직접 이어지지 않는다. 지름을 ∠ADB=90°로 바꿔 삼각형 ABD 안에서 ∠ABD=40°를 만들어야 호 AD로 건너갈 수 있다.
    지름=직각 변환 하나가 통찰이고 나머지는 「같은 호의 원주각은 같다」 두 번. 빈출 태그이며 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠DEB=50° → 같은 호의 ∠DAB=50° → 지름이라 ∠ADB=90° → ∠ABD=40° → 호 AD의 원주각 ∠ACD=40°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40^\circ$'
  answer_source: "답지"
  figure: "crop:fig-106-03.png"
  latex: latex-bank/gn-m32/items/106-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "50°를 바꿀 수 있음. 제약: (1) 0°<각<90° 여야 ∠ABD가 양수 (2) 정수 답이 나오도록 90°에서 빼는 값이 정수 (3) 그림의 점 순서(C와 E가 호 AB의 같은 쪽/반대쪽)를 바꾸면 보각이 되므로 고정."
    creative: "(1) ∠ACD를 주고 ∠DEB를 묻는 역방향(★2 유지) (2) 지름 조건을 「호 AB가 반원」으로 바꿔 말하면 I-EQV 깊이 상승(★3) (3) AB를 지름이 아닌 현으로 바꾸고 중심각을 주면 단계 추가(★3) (4) ∠ACD+∠DEB 꼴로 물어 두 각을 동시에 다루게 하면 ★3."
```

```yaml
- id: GN-M32-106-04
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 호 BC=호 CD이고 ∠BAC=32°일 때 중심각 ∠x와 원주각 ∠y의 차 ∠x-∠y. 5지선다.
  category: "호 상등 → 원주각 상등 → 중심각 합성 → 차"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "호의 길이 상등을 원주각·중심각 상등으로 바꿔 32°를 호 CD 쪽으로 복사"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "호의 길이와 원주각(같은 호에 대한 원주각 · 중심각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    호 BC=호 CD를 각으로 옮기면 두 호의 중심각이 각각 64°가 되어 ∠x=∠BOD=128°, 원주각 ∠y=32°가 한꺼번에 결정된다.
    복사 한 번 뒤에는 덧셈·뺄셈만 남아 M_total 6. 두 값을 각각 구해 빼는 형식이라 계산 실수(T-부호) 여지가 있으나 골조는 기본이어서 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠BAC=32° → 호 BC의 중심각 64° → 호 BC=호 CD로 ∠x=∠BOD=128°, ∠y=호 CD의 원주각=32° → x-y=96°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-106-04.png"
  latex: latex-bank/gn-m32/items/106-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "32°를 바꿀 수 있음. 제약: (1) 4×각 < 360° 여야 중심각 ∠BOD가 성립 (2) 선택지 간격이 2°이므로 답이 4의 배수로 떨어지게 (3) 호를 셋으로 나누는 판(호 BC=호 CD=호 DE)으로 바꾸면 6배가 되어 범위 조건을 다시 확인."
    creative: "(1) x+y 를 묻기(★2 유지) (2) 호 BC=2호 CD 처럼 비를 주면 비례 계산 추가(★3) (3) x를 주고 ∠BAC를 묻는 역방향(I-BW · ★3) (4) 호 상등 표시를 지우고 「BC=CD(현)」로 주면 현 상등 → 호 상등 한 다리가 늘어 ★3."
```

```yaml
- id: GN-M32-106-05
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    두 현 AB, CD의 교점이 P이고 호 AD=10cm, 호 BC=8cm, ∠ACP=60°일 때 ∠CPB의 크기. 주관식.
  category: "호의 길이 비례 → 다른 원주각 → 삼각형 내각·외각"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "호의 길이 비를 원주각의 비로 바꿔 주어지지 않은 ∠CAB를 60°×(8/10)로 계산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "호의 길이와 원주각의 크기(비례식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 현의 교점각은 삼각형 하나만 보면 되지만, 그 삼각형의 나머지 각 ∠CAB가 문제에 없다. 호 10cm:8cm를 원주각 60°:48°로 옮기는 비례가 유일한 진입로다.
    비례 뒤에는 내각 합 한 줄. 길이 단위와 각이 섞여 Mₖ 2. 빈출 태그이며 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "호의 길이 ∝ 원주각 → ∠CAB=60°×(8/10)=48° → △ACP에서 ∠APC=72° → ∠CPB=108°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$108^\circ$'
  answer_source: "답지"
  figure: "crop:fig-106-05.png"
  latex: latex-bank/gn-m32/items/106-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10cm·8cm·60°를 바꿀 수 있음. 제약: (1) 60°×(호 BC/호 AD)가 정수여야 하므로 호의 비가 60의 약수 관계 (2) 두 원주각의 합이 180° 미만 (3) 호를 길이가 아닌 중심각으로 주면 비례가 사라지므로 단위 cm 유지."
    creative: "(1) ∠CPB를 주고 호 BC를 묻는 역방향(I-BW · ★3) (2) P를 원 밖으로 빼 두 할선의 교점으로 바꾸면 합이 아니라 차가 되는 판(★3) (3) 호의 길이 대신 원의 둘레 대비 분수로 주면 110-e1 골조(★2) (4) 원의 반지름을 추가로 주고 호의 길이까지 묻게 하면 I-XU 추가(★3)."
```

```yaml
- id: GN-M32-106-06
  page: 106
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    다섯 개의 그림 중 네 점 A, B, C, D가 한 원 위에 있는 것을 모두 고르기. 정답 2개.
  category: "판정 기준 선택 → 같은 쪽 각 상등 또는 대각의 합 180°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건(판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 배치가 달라 「한 선분의 같은 쪽 각이 같은가」와 「사각형 대각의 합이 180°인가」 중 맞는 기준을 골라 대입하면 끝난다.
    각 판정은 한 줄이고 다섯 번 반복할 뿐이라 통찰로 세지 않았다. 정답 2개라 한쪽만 찾고 멈추는 함정(T-경계)이 있어 Mₜ 1. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "보기별로 같은 쪽 각 상등(∠ACB=∠ADB) 또는 대각의 합 180°를 확인 → 성립하는 두 개 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ④"
  answer_source: "답지"
  figure: "crop:fig-106-06.png"
  latex: latex-bank/gn-m32/items/106-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 각도를 바꿀 수 있음. 제약: (1) 참인 보기는 각 상등 또는 대각 합 180°가 정확히 맞아떨어져야 함 (2) 거짓 보기는 1°~5° 정도만 어긋나게 두어야 눈대중 판정이 안 됨 (3) 정답 개수를 바꾸면 발문의 「정답 2개」도 함께 고칠 것."
    creative: "(1) 한 원 위에 있지 않은 것을 고르게 뒤집기(★2 유지) (2) 보기 중 하나를 내접사각형의 한 외각 판정으로 바꾸면 기준이 셋이 되어 I-SC 추가(★3) (3) 참인 이유를 서술하게 하면 서술형 판(★3) (4) 그림 대신 각의 값만 표로 주면 기하 배치 판단이 빠져 ★1."
```

```yaml
- id: GN-M32-107-07
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원에 내접하는 사각형 ABCD에서 ∠ADB=40°, ∠BAC=65°, ∠BCD=100°일 때 ∠x(=∠CAD)와 ∠y(=B의 외각)의 합. 주관식.
  category: "대각의 합 → 각의 분할 → 한 외각 = 내대각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질(대각의 합 · 한 외각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x는 대각의 합으로 얻은 ∠BAD=80°에서 65°를 빼는 분할, y는 ∠ADC=40°+65°=105°를 그대로 옮기는 외각=내대각이다. 두 성질을 각각 한 번씩 쓰는 병렬 구조라 서로 얽히지 않는다.
    두 성질 모두 이 단원의 표준 정리 직접 대입이라 통찰 0. 두 값을 따로 구해 더하는 만큼 Mₛ 3. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠BCD=100° → ∠BAD=80° → x=80°-65°=15°; ∠BDC=∠BAC=65° → ∠ADC=105° → y=∠ADC=105° → x+y=120°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120^\circ$'
  answer_source: "답지"
  figure: "crop:fig-107-07.png"
  latex: latex-bank/gn-m32/items/107-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "40°·65°·100°를 바꿀 수 있음. 제약: (1) ∠BAC < 180°-∠BCD 여야 x가 양수 (2) ∠ADB+∠BAC < 180° 여야 y가 성립 (3) 세 값이 같은 사각형에서 동시에 성립하도록 ∠ADB+∠BAC+∠BCD 를 180°~210° 사이로."
    creative: "(1) x·y 를 따로 묻지 않고 ∠ADC 만 묻기(★1~2) (2) 외각 y 대신 그 보각을 물으면 T-경계 함정 추가(★2) (3) ∠BCD 를 빼고 호의 비를 주면 비례 단계 추가(★3) (4) 점 E를 연장선 교점으로 두면 108-18 골조로 승격(★3)."
```

```yaml
- id: GN-M32-107-08
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    오각형 ABCDE가 원 O에 내접하고 ∠AOB=72°, ∠BCD=110°일 때 ∠AED의 크기. 5지선다.
  category: "보조선으로 오각형 분할 → 내접사각형 + 원주각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BE를 그어 오각형을 내접사각형 BCDE와 삼각형으로 갈라 두 정리를 각각 쓸 수 있는 꼴로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 다각형(보조선으로 내접사각형 만들기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    오각형에는 쓸 정리가 없다. BE를 그어야 ∠BED=180°-110°=70°(내접사각형)와 ∠AEB=36°(호 AB의 원주각)가 각각 살아나고 둘을 더하면 끝난다.
    보조선 착안 하나가 통찰이고 계산은 두 줄. 보조선 위치가 사실상 유일해 깊이 2로 두고, 꼭나와 기본 구역이므로 ★2 유지.
  tier: star_2
  mechanism_primary: "BE 연결 → 호 AB의 원주각 ∠AEB=36°, 내접사각형 BCDE에서 ∠BED=180°-110°=70° → ∠AED=106°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-107-08.png"
  latex: latex-bank/gn-m32/items/107-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "72°·110°를 바꿀 수 있음. 제약: (1) ∠AOB가 짝수여야 원주각이 정수 (2) ∠BCD > 90° 라야 ∠BED가 예각으로 그림과 맞음 (3) ∠AOB/2 + (180°-∠BCD) < 180° 유지 (4) 선택지 간격 4°에 맞춰 답이 짝수로."
    creative: "(1) ∠AED를 주고 ∠BCD를 묻는 역방향(I-BW · ★3) (2) 육각형으로 늘려 보조선을 두 개 긋게 하면 Mₛ 상승(★3) (3) ∠AOB 대신 호 AB의 길이 비를 주면 비례 추가(★3) (4) AD를 긋는 다른 분할도 되게 만들면 I-SC 추가(★3)."
```

```yaml
- id: GN-M32-107-09
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    평행사변형·정사각형·등변사다리꼴·마름모·직사각형·사다리꼴 중 항상 원에 내접하는 것을 모두 고르기. 5지선다.
  category: "사각형 종류별 대각의 합 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형이 되는 조건(사각형 종류 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「대각의 합이 항상 180°인가」 하나만 여섯 보기에 대입하면 된다. 평행사변형·마름모는 대각이 같아 직사각형일 때만 180°, 등변사다리꼴은 항상 180°라는 암기 판정이다.
    계산도 배치 판단도 없고 통찰 0·M_total 4라 v3.8 -1 규칙대로 STEP 1 출발점 ★2에서 ★1로 내렸다. 이 범위 유일한 ★1. [분류 이슈] 구역 신호와 1단 차.
  tier: star_1
  mechanism_primary: "각 사각형이 「대각의 합 180°」를 항상 만족하는지 판정 → 정사각형·등변사다리꼴·직사각형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/107-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자가 없는 문항이라 수치 변형 여지가 없음. 제약: 보기 목록(여섯 종류)을 바꾸는 것이 유일한 변형이고, 참인 보기가 정확히 세 개가 되도록 선택지를 다시 짤 것."
    creative: "(1) 「항상」을 빼고 「내접할 수도 있는」으로 바꾸면 조건 판정이 뒤집혀 ★2 (2) 각 판정의 근거를 쓰게 하면 서술형(★2) (3) 평행사변형이 원에 내접하면 직사각형임을 증명하게 하면 I-BW 추가(★3) (4) 등변사다리꼴을 그림으로 주고 각을 계산하게 하면 ★2."
```

```yaml
- id: GN-M32-107-10
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    PT가 원의 접선(T는 접점)이고 BT=BP, ∠PAT=40°일 때 ∠ATB의 크기. 5지선다.
  category: "접현각 → 이등변삼각형 → 외각 → 삼각형 내각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BT=BP라는 길이 조건을 ∠BPT=∠BTP라는 각 조건으로 바꿔 접현각과 같은 사슬에 올림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각(접현각 + 이등변삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접현각 ∠BTP=∠BAT=40°가 출발이고, 길이 조건 BT=BP를 각으로 바꾸어야 ∠BPT=40°가 나와 삼각형 ATP의 외각으로 ∠TBA=80°를 얻는다.
    길이→각 변환 하나만 통찰로 세고 나머지는 외각·내각 합. 도구가 셋(접현각·이등변·외각)이지만 각각 한 줄이라 M_total 6, STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접현각 ∠BTP=∠BAT=40° → BT=BP로 ∠BPT=40° → △BTP 외각 ∠TBA=80° → △ATB에서 ∠ATB=60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-107-10.png"
  latex: latex-bank/gn-m32/items/107-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "40°를 바꿀 수 있음. 제약: (1) 3×각 < 180° 여야 ∠ATB=180°-3×각 이 양수이므로 각 < 60° (2) 선택지 간격 5°에 맞춰 각을 5의 배수로 (3) BT=BP 표시는 그림 라벨이므로 유지."
    creative: "(1) ∠ATB를 주고 ∠PAT을 묻는 역방향(I-BW · ★3) (2) BT=BP를 BT=AT로 바꾸면 이등변의 위치가 달라져 사슬이 한 칸 늘어남(★3) (3) 접선을 두 개로 늘려 접선 길이 상등까지 쓰게 하면 ★3 (4) ∠ATB 대신 ∠ABT를 물으면 보각 함정(★2)."
```

```yaml
- id: GN-M32-107-11
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O가 삼각형 ABC의 내접원이면서 삼각형 DEF의 외접원이고, D·E·F가 접점이며 ∠BAC=46°, ∠DFE=50°일 때 ∠BCA의 크기. 주관식.
  category: "접선 길이 상등 이등변 → 접현각 → 접점삼각형 각 ↔ 꼭지각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선의 길이가 같다는 조건을 이등변 밑각(=90°-꼭지각/2)으로 바꿔 접점삼각형의 각과 잇는다"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 접점삼각형의 각 50°에서 원래 삼각형의 꼭지각(=180°-2×50°)을 거꾸로 되짚는다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "삼각형의 내접원과 접점삼각형(접현각으로 각 옮기기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 원이 겹친 그림이지만 실제로는 「접선 길이가 같다 → 이등변 → 밑각 90°-꼭지각/2」라는 한 관계를 두 꼭짓점에서 쓰는 문항이다. ∠A=46°에서 접점삼각형의 한 각 67°가 나오고, 주어진 50°에서 대응 꼭지각 80°를 역으로 되짚으면 나머지 꼭지각이 결정된다.
    길이→각 변환(d2)과 역추적(d1) 두 통찰이 겹쳐 STEP 1 출발점 ★2에서 +1. 같은 골조가 111-u5에서 서술형으로 한 번 더 나온다.
  tier: star_3
  mechanism_primary: "접선 길이 상등 → 이등변 밑각으로 접점삼각형의 각 = 90°-(대응 꼭지각)/2 → ∠DFE=50°에서 대응 꼭지각 80° → ∠BCA=180°-46°-80°=54°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$54^\circ$'
  answer_source: "답지"
  figure: "crop:fig-107-11.png"
  latex: latex-bank/gn-m32/items/107-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "46°·50°를 바꿀 수 있음. 제약: (1) 180°-2×(접점삼각형 각) 이 양수이고 (2) 그 값과 ∠A의 합이 180° 미만이어야 세 번째 각이 양수 (3) 두 값 모두 짝수로 두면 밑각이 정수 (4) 접점 이름 D·E·F와 어느 변에 붙는지는 그림 라벨이므로 고정."
    creative: "(1) ∠BCA 대신 접점삼각형의 나머지 각을 묻기(★3 유지) (2) 세 꼭지각을 모두 구하게 하면 Mₛ 상승(★3) (3) 내접원의 반지름이나 접선 길이까지 엮으면 I-XU 추가(★4) (4) 접점삼각형의 두 각을 주고 ∠A를 묻는 완전 역방향(★4)."
```

```yaml
- id: GN-M32-107-12
  page: 107
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    두 원 O, O'이 C, D에서 만나고 직선 PQ가 원 O'의 접선(T는 접점)일 때, ∠ABD=65°, ∠CTP=70°이면 ∠CTD의 크기. 5지선다.
  category: "내접사각형 외각 → 공통현 CD로 건너기 → 접현각 → 삼각형 내각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A·C·T가 한 직선이라는 배치를 이용해 원 O의 내접사각형 외각=내대각으로 65°를 ∠DCT로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 원의 서로 다른 성질(내접사각형 · 접현각)을 공통현 CD 하나를 낀 삼각형 CDT로 묶어 내각 합으로 환원"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "두 원과 접선(공통현으로 각 옮기기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 원이 각각 하나씩 정보를 갖고 있어 그대로는 이어지지 않는다. 공통현 CD를 낀 삼각형 CDT를 목표로 잡고, 왼쪽 원에서 외각=내대각으로 ∠DCT=65°, 오른쪽 원에서 접현각으로 ∠CDT=70°를 모아야 내각 합 한 줄로 끝난다.
    「어느 삼각형으로 모을지」를 먼저 정해야 하는 구조라 통찰 2개, STEP 1 출발점 ★2에서 +1.
    [분류 이슈] 두 원 결합·통찰 2개로 체감은 STEP 2급이나 벤더는 기본 문제 구역에 두었다.
  tier: star_3
  mechanism_primary: "원 O의 내접사각형 외각 ∠DCT=∠ABD=65° → 원 O'의 접현각 ∠CDT=∠CTP=70° → △CDT 내각 합 → ∠CTD=45°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-107-12.png"
  latex: latex-bank/gn-m32/items/107-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "65°·70°를 바꿀 수 있음. 제약: (1) 두 각의 합이 180° 미만이어야 ∠CTD가 양수 (2) 선택지 간격 5°에 맞춰 두 각을 5의 배수로 (3) 접점 T가 원 O' 위에 있고 A·C·T, B·D·T가 각각 한 직선이라는 배치는 그림 조건이므로 고정."
    creative: "(1) ∠CTD를 주고 ∠ABD를 묻는 역방향(★4) (2) 접선을 두 원의 공통접선으로 바꾸면 109-24 골조(★4) (3) 두 원이 접하는 경우로 바꿔 C=D가 되게 하면 골조가 완전히 달라짐(★4) (4) ∠CTP 대신 원 O' 안의 원주각을 주면 접현각 단계가 빠져 ★2."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-108-13
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    PT가 원 O의 접선(T는 접점)이고 PB가 원의 중심을 지나며 ∠BPT=14°일 때 ∠x의 크기. 주관식.
  category: "접선⊥반지름 → 직각삼각형 → 중심각 → 원주각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「PB가 중심을 지난다」를 OT⊥PT인 직각삼각형 OPT로 바꿔 중심각 ∠TOP=76°를 확보"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 반지름(접선⊥반지름 → 중심각 → 원주각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 14°는 원 밖의 각이라 원주각으로 바로 쓸 수 없다. 중심을 지나는 선과 접점 반지름이 만드는 직각삼각형을 세워야 ∠TOP=76°가 나오고, 그 보각 104°가 중심각이 되어 절반인 52°로 내려온다.
    직각삼각형 세우기 하나가 통찰이고 그 뒤는 뺄셈·2로 나누기. 발전 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "OT⊥PT → △OPT에서 ∠TOP=76° → 중심각 ∠TOB=180°-76°=104° → 원주각 x=52°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$52^\circ$'
  answer_source: "답지"
  figure: "crop:fig-108-13.png"
  latex: latex-bank/gn-m32/items/108-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "14°를 바꿀 수 있음. 제약: (1) 0°<각<90° (2) 90°+각 이 짝수여야 원주각이 정수이므로 각을 짝수로 (3) 각이 커질수록 P가 원에 가까워지므로 30° 이하로 두어야 그림 비율이 유지됨."
    creative: "(1) x를 주고 ∠BPT를 묻는 역방향(★3 유지) (2) 접현각으로 바로 답하는 다른 풀이를 요구하면 I-SC 추가(★4) (3) 반지름과 OP의 길이를 주고 접선 길이까지 묻게 하면 I-XU 추가(★4) (4) 접선을 두 개 그어 두 접점 사이의 각을 묻기(★3)."
```

```yaml
- id: GN-M32-108-14
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    두 현 AB, CD의 연장선의 교점이 P, 두 현 AD, BC의 교점이 E일 때 ∠BPD=20°, ∠BED=50°이면 ∠x의 크기. 5지선다.
  category: "외부 교점각과 내부 교점각을 같은 원주각으로 연결 → 일차방정식"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 밖 교점각과 원 안 교점각을 삼각형 외각으로 각각 전개해 ∠BED=∠BPD+2∠x 라는 한 식으로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 현의 교점과 연장선의 교점이 이루는 각(두 각의 관계)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 교점각이 따로 주어지고 구하는 각은 어느 쪽에도 직접 붙어 있지 않다. 두 교점에서 삼각형 외각을 한 번씩 쓰면 같은 원주각 x가 양쪽에 한 번씩 들어가 50°=20°+2x 라는 한 줄 방정식으로 합쳐진다.
    「두 각의 차가 x의 2배」라는 결합이 이 문항의 전부이고 계산은 없다. 미지수를 세우므로 Mₐ 2. 꼭나와 태그이며 발전 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "삼각형 외각 두 번 → ∠BED=∠BPD+2∠x → 50°=20°+2x → x=15°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-108-14.png"
  latex: latex-bank/gn-m32/items/108-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "20°·50°를 바꿀 수 있음. 제약: (1) ∠BED > ∠BPD 여야 x가 양수 (2) 두 각의 차가 짝수여야 x가 정수 (3) 선택지 간격 5°에 맞춰 차를 10의 배수로 (4) ∠BED < 90°로 두어야 그림의 교점 배치가 유지됨."
    creative: "(1) x와 ∠BPD를 주고 ∠BED를 묻기(★3 유지) (2) 호의 길이로 조건을 바꾸면 비례 단계 추가(★4) (3) 두 교점을 모두 원 밖에 두면 109-22 골조로 승격(★4) (4) 두 각의 관계식 자체를 증명하게 하면 서술형(★4)."
```

```yaml
- id: GN-M32-108-15
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    AB가 원 O의 지름이고 두 할선의 교점 P에서 ∠APB=65°일 때 중심각 ∠x의 크기. 5지선다.
  category: "보조선으로 반원의 직각 확보 → 삼각형 내각 → 원주각의 2배"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD를 그어 지름 조건을 ∠ADB=90°로 바꾸고, 원 밖의 65°를 삼각형 APD 안의 원주각 문제로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "반원에 대한 원주각과 두 할선의 교점각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원 밖 교점각을 그대로 쓰면 호의 차를 다뤄야 해 중3 도구를 벗어난다. 보조선 AD로 반원의 직각을 끌어오면 직각삼각형 APD에서 ∠CAD=25°가 바로 나오고, 그 2배가 구하는 중심각이다.
    보조선을 어디에 긋는지가 유일한 갈림길이라 통찰 1개(d2). 발전 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AD 연결 → 지름의 원주각 ∠ADB=90° → △APD에서 ∠CAD=90°-65°=25° → 중심각 x=2×25°=50°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-108-15.png"
  latex: latex-bank/gn-m32/items/108-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "65°를 바꿀 수 있음. 제약: (1) 0°<각<90° 여야 ∠CAD가 양수 (2) 90°-각 이 5의 배수라야 선택지 간격 5°와 맞음 (3) 각이 작을수록 P가 멀어지므로 45°~75°로 두어야 그림 비율이 유지됨."
    creative: "(1) x를 주고 ∠APB를 묻는 역방향(★3 유지) (2) AB를 지름이 아닌 현으로 바꾸고 중심각을 주면 단계 추가(★4) (3) BC를 긋는 다른 보조선 풀이도 되게 만들면 I-SC 추가(★4) (4) 중심각 대신 호 CD의 길이를 물으면 I-XU 추가(★4)."
```

```yaml
- id: GN-M32-108-16
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    두 현 AB, CD의 교점이 P이고 원 O의 반지름이 9cm, ∠APC=30°일 때 호 AD와 호 BEC의 길이의 합. 주관식.
  category: "교점각의 보각 → 두 호의 중심각 합 → 둘레 비례"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 호를 따로 구하려 하지 않고, 보각 ∠APD=150°로 「두 호의 합」만 확보하면 충분함을 알아차림"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각(중심각 합 300°)을 둘레에 대한 비로 옮겨 호의 길이로 바꿈"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 현의 교점이 이루는 각과 호의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    호 AD와 호 BEC는 각각으로는 결정되지 않는다. 교점각의 보각 150°가 「두 호의 중심각의 합의 절반」이라는 점을 써서 합 300°만 잡고, 둘레 18π의 300/360으로 내려가는 구조다.
    합만 필요하다는 판단(d2)과 각→길이 전환(d1)으로 통찰 2개라 +1 후보이지만, 교점각 공식과 호 비례 모두 이 단원의 표준 도구라 발전 구역 출발점 ★3을 유지했다.
    [분류 이슈] +1 후보를 적용하지 않은 문항.
  tier: star_3
  mechanism_primary: "∠APD=180°-30°=150° → 두 호의 중심각 합=2×150°=300° → 둘레 18π의 300/360 → 15π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\pi\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-108-16.png"
  latex: latex-bank/gn-m32/items/108-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 9cm와 30°를 바꿀 수 있음. 제약: (1) 2×(180°-각)/360 × 2πr 이 정리되려면 반지름이 3 또는 6의 배수 (2) 각이 예각이어야 그림의 교점 배치 유지 (3) 답을 π 꼴로 두려면 반지름을 정수로."
    creative: "(1) 호 AC와 호 BD의 합을 묻기(같은 골조 · ★3) (2) 두 호의 합 대신 두 호에 낀 부채꼴 넓이의 합을 묻기(★4) (3) 호의 합을 주고 ∠APC를 묻는 역방향(I-BW · ★4) (4) P를 원 밖으로 빼면 차가 되어 판정이 뒤집힘(★4)."
```

```yaml
- id: GN-M32-108-17
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    원 위에서 호 AB=호 AE이고 ∠ADC=70°일 때 두 현 AC, BE의 교점 F에서의 각 ∠x. 5지선다.
  category: "원주각 → 호의 합 확보 → 호 상등으로 미지 호 상쇄 → 교점각"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A를 기준으로 호 AB=호 AE인 대칭을 써서, 결정되지 않는 호 AB를 식에서 그대로 상쇄시킴"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠ADC=70°를 호 ABC=140°라는 호 조건으로 바꿔 나머지 호를 360°에서 역산"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "호의 길이와 두 현의 교점각(호 상등으로 미지 호 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    호 AB의 크기는 끝까지 결정되지 않는다. 교점각을 ∠CAE+∠AEB(삼각형 AFE의 외각)로 쪼개면 앞은 호 CDE의 절반, 뒤는 호 AB의 절반이고, 호 AB=호 AE 덕분에 미지수가 그대로 사라져 값이 하나로 고정된다.
    「구할 수 없는 양이 상쇄된다」를 먼저 보아야 손이 움직이는 구조라 대칭 통찰(d2)이 주축이다. 통찰 2개로 발전 구역 출발점 ★3에서 +1.
  tier: star_4
  mechanism_primary: "△AFE 외각 → x=∠CAE+∠AEB=(호 CDE+호 AB)/2 → ∠ADC=70°로 호 ABC=140° → 호 AB=호 AE가 상쇄 → x=110°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-108-17.png"
  latex: latex-bank/gn-m32/items/108-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "70°를 바꿀 수 있음. 제약: (1) x=180°-(∠ADC의 보각 관계)로 정해지므로 ∠ADC가 짝수라야 정수 (2) 호 ABC=2×∠ADC < 360°-(호 AE) (3) 선택지 간격 2°에 맞춰 답이 짝수로 (4) 호 AB=호 AE 표시는 상쇄의 핵심이므로 절대 지우지 말 것."
    creative: "(1) 호 AB=2호 AE로 바꾸면 상쇄가 깨져 값이 하나로 안 나오는 함정 판(출제 불가 · 조건 추가 필요) (2) x를 주고 ∠ADC를 묻는 역방향(★4 유지) (3) 상쇄 이유를 서술하게 하면 서술형 ★5 후보(novelty 필요) (4) 교점을 원 밖으로 빼면 차가 되어 골조가 뒤집힘(★4)."
```

```yaml
- id: GN-M32-108-18
  page: 108
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    원에 내접하는 사각형 ABCD에서 AB와 CD의 연장선의 교점이 E, AD와 BC의 연장선의 교점이 F이고 ∠AED=35°, ∠DFC=25°일 때 ∠ADC의 크기. 5지선다.
  category: "내각 하나를 미지수로 → 두 외부 삼각형에서 두 식 → 연립"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "서로 반대편에 있는 두 교점 조건을 내각 ∠ABC 하나로 묶어 35°+25°+2∠ABC=180° 한 식으로 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형과 두 연장선의 교점(두 외각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    E와 F는 사각형의 반대편 모서리 밖에 있어 따로 보면 미지수가 둘이다. ∠ABC=b 하나로 놓고 두 삼각형에서 각각 전개하면 b가 두 번 들어와 35°+25°+2b=180°로 합쳐진다.
    미지수를 어디에 놓느냐가 갈림길이라 조건 통합 하나. 계산은 일차방정식 한 줄이고 대각의 합으로 답을 뒤집는 마지막 한 걸음(T-경계)이 남는다. 꼭나와 태그이며 발전 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "∠ABC=b로 놓고 두 외부 삼각형 전개 → 35°+25°+2b=180° → b=60° → ∠ADC=180°-60°=120°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-108-18.png"
  latex: latex-bank/gn-m32/items/108-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "35°·25°를 바꿀 수 있음. 제약: (1) 두 각의 합 < 180° (2) 180°-(두 각의 합)이 짝수여야 b가 정수 (3) 선택지 간격 10°에 맞춰 답이 10의 배수로 (4) 두 각이 모두 예각이라야 E·F가 그림처럼 사각형 바깥에 놓임."
    creative: "(1) ∠ABC를 묻기(마지막 보각 단계가 빠져 ★3 유지) (2) ∠ADC를 주고 ∠AED를 묻는 역방향(I-BW · ★4) (3) 한 교점만 남기고 호 조건을 추가하면 ★3 (4) ∠E+∠F와 ∠ADC의 일반 관계식을 유도하게 하면 서술형 ★4."
```

```yaml
- id: GN-M32-109-19
  page: 109
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    세 원이 두 직선 위에서 줄지어 겹친 그림에서 ∠RDC=89°, ∠SCD=92°일 때 왼쪽 끝의 ∠x의 크기. 주관식.
  category: "내접사각형 대각의 합 + 일직선 보각을 세 번 되풀이"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원을 하나 건널 때마다 「대각의 합 180° → 일직선 보각」이 되풀이돼 각이 원래 값으로 되돌아온다는 주기 구조를 발견"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위아래 두 직선 위의 점들이 공선이라는 배치를 보각 관계로 바꿔 이웃 원으로 넘어가는 다리로 씀"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 연쇄(여러 원을 건너 각 옮기기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    오른쪽 끝의 각을 왼쪽 끝까지 세 원에 걸쳐 나르는 문항이다. 원 안에서는 대각의 합으로 180°-각, 직선 위에서는 다시 180°-각이 되어 한 원을 건널 때마다 값이 제자리로 돌아온다. 그 되풀이를 보면 ∠x=∠SCD의 보각 88°로 한 번에 끝나고, 못 보면 여섯 단계를 손으로 밟는다.
    되풀이 구조 발견(d2)과 공선 배치 이용(d1)으로 통찰 2개, 발전 구역 출발점 ★3에서 +1.
    [분류 이슈] 주어진 두 각 중 ∠RDC=89°는 왼쪽 끝 ∠x 사슬에는 쓰이지 않고 아래쪽 각(∠ABQ=91°)을 정한다.
  tier: star_4
  mechanism_primary: "내접사각형 RDCS에서 ∠DRS=180°-92°=88° → 일직선으로 ∠PRS=92° → 원 2에서 ∠PQS=88° → 일직선으로 ∠PQB=92° → 원 1에서 x=∠PAB=88°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$88^\circ$'
  answer_source: "답지"
  figure: "crop:fig-109-19.png"
  latex: latex-bank/gn-m32/items/109-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "89°·92°를 바꿀 수 있음. 제약: (1) 두 각 모두 90° 근처로 두어야 그림의 직사각형 비슷한 배치가 유지됨 (2) 답은 180°-∠SCD 로 고정이므로 ∠SCD만 바꾸면 답이 따라 바뀜 (3) 두 각의 합을 181° 근처로 두어 「거의 내접사각형」처럼 보이는 착시를 유지."
    creative: "(1) 원을 네 개로 늘려 주기를 한 번 더 돌게 하기(★4 유지 · 되풀이 구조가 더 선명) (2) 원을 두 개만 두면 ∠x=∠SCD 가 되어 ★3 (3) 각이 원을 건널 때 값이 변하지 않는 이유를 서술하게 하면 ★5 후보(novelty 필요) (4) 아래 직선을 꺾어 공선 조건을 깨면 사슬이 끊겨 출제 불가."
```

```yaml
- id: GN-M32-109-20
  page: 109
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    삼각형 ABC에서 AD⊥BC, BE⊥CA, CF⊥AB일 때 다섯 개의 사각형 중 원에 내접하지 않는 것 고르기. 5지선다.
  category: "직각 두 개의 배치 판정 → 대각의 합 또는 같은 쪽 각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "보기마다 두 직각이 마주 보는지(대각의 합 180°) 같은 쪽에 있는지(같은 쪽 각 상등)를 먼저 가려 맞는 판정 도구를 고름"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건(직각 두 개 · 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 보기가 모두 직각 두 개를 품고 있지만, 그 두 직각이 대각에 있으면 합 180°로, 한 변의 같은 쪽에 있으면 각 상등으로 판정해야 한다. 판정 도구를 잘못 고르면 참·거짓이 뒤집힌다.
    FBDE만 두 직각이 같은 사각형에 들어오지 않아 어느 기준도 쓸 수 없다. 도구 선택이 통찰 1개(d1)이고 계산은 없다. 발전 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "보기별로 두 직각의 위치 확인 → 마주 보면 대각의 합 180°, 같은 쪽이면 각 상등 → 어느 쪽도 아닌 FBDE가 답"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-109-20.png"
  latex: latex-bank/gn-m32/items/109-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 판정 문항이라 각도 변형 여지가 없음. 제약: 세 수선의 발 D·E·F와 교점 O의 이름은 그림 라벨이므로 고정하고, 보기 다섯 개 중 거짓이 정확히 하나가 되도록 조합을 고를 것."
    creative: "(1) 내접하는 것을 모두 고르게 뒤집기(★3 유지) (2) 삼각형을 둔각삼각형으로 바꿔 수심이 밖으로 나가면 배치 판정이 어려워짐(★4) (3) 한 보기의 네 점이 한 원 위에 있음을 증명하게 하면 서술형(★4) (4) 구체적 각을 주고 사각형 안의 각을 계산하게 하면 판정이 빠져 ★2."
```

```yaml
- id: GN-M32-109-21
  page: 109
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    직선 CP가 원 O의 접선(C는 접점)이고 AB가 지름, AB=10, AP=8, ∠APC=90°일 때 AC의 길이. 5지선다.
  category: "접현각 + 반원의 직각 → 두 직각삼각형 닮음 → 비례식"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접현각 ∠ACP=∠ABC를 끌어내 각 조건을 두 삼각형의 닮음 조건으로 바꿈"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원의 각 성질(이 단원)과 닮음비·제곱근(중2~3 대수)을 이어 붙여 AC²=AP·AB 꼴로 길이를 구함"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 + 닮음(AC²=AP·AB)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각만으로는 길이가 나오지 않고, 길이만으로는 두 삼각형이 이어지지 않는다. 접현각으로 ∠ACP=∠ABC를 만들고 지름으로 ∠ACB=90°를 세워야 두 직각삼각형이 AA 닮음이 되고, 그제야 AC²=AP·AB=80이라는 비례식이 선다.
    각→닮음 변환(d2)에 단원 밖 도구(닮음·제곱근)가 얹혀 통찰 2개. 꼭나와 태그이지만 발전 구역 출발점 ★3에서 +1.
  tier: star_4
  mechanism_primary: "지름이라 ∠ACB=90°, 접현각 ∠ACP=∠ABC → △APC∽△ACB(AA) → AC²=AP·AB=80 → AC=4√5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-109-21.png"
  latex: latex-bank/gn-m32/items/109-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=10, AP=8을 바꿀 수 있음. 제약: (1) AP < AB 여야 P가 원 밖의 올바른 위치 (2) AP·AB가 완전제곱이면 정수 답, 아니면 k√m 꼴로 정리되는 값만 (3) 선택지에 2√17·6√2 같은 근접값이 섞이므로 답과 헷갈리지 않게 곱이 뚜렷한 값으로."
    creative: "(1) AC를 주고 AP를 묻는 역방향(★4 유지) (2) PC의 길이까지 묻게 하면 피타고라스 한 단계 추가(★4) (3) ∠APC=90° 조건을 빼고 각을 주면 삼각비로 넘어가 109-23 골조(★4) (4) AB가 지름이 아니면 ∠ACB=90°가 깨져 출제 불가."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-109-22
  page: 109
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    원 O에 내접하는 사각형 ABCD에서 두 쌍의 대변의 연장선이 만드는 두 외부 교점의 각이 ∠P=42°, ∠Q=38°일 때 중심각 ∠x의 크기. 주관식.
  category: "네 호를 미지수로 → 두 외부 교점각 식 + 호의 합 360° 연립 → 중심각"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "네 호를 미지수로 세워 두 외부 교점각 조건과 호의 합 360°를 하나의 연립으로 묶고, 개별 호가 아니라 필요한 두 호의 합만 뽑아냄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "외부 교점각을 「두 호의 차의 절반」이라는 호 조건으로 바꿔 두 조건을 같은 언어로 정렬"
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: "원에 내접하는 사각형과 두 외부 교점(호를 미지수로 연립)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 교점각은 각각 「두 호의 차」만 알려 주고 개별 호는 끝까지 결정되지 않는다. 네 호를 a, b, c, d로 놓으면 d-b=84, a-c=76이고 여기에 a+b+c+d=360을 더해야 구하는 호 b+c=100이 나온다. 차 두 개와 합 하나로 합 하나를 뽑는 구조다.
    미지수 넷을 세우고 필요한 조합만 추출하는 통합이 깊이 3. 실력 UP 구역 출발점 ★4 유지(★5는 SC/VF/SYM/XU와 novelty가 필요).
  tier: star_4
  mechanism_primary: "네 호를 미지수로 → ∠P·∠Q를 호의 차로 전개 → 호의 합 360°와 연립 → 호 BCD=100° → 중심각 x=100°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$100^\circ$'
  answer_source: "답지"
  figure: "crop:fig-109-22.png"
  latex: latex-bank/gn-m32/items/109-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "42°·38°를 바꿀 수 있음. 제약: (1) 두 각의 합 < 90° 라야 구하는 호가 양수이고 그림 배치가 유지됨 (2) 답 x=180°-2×(∠P+∠Q)이므로 두 각의 합이 정수면 답도 정수 (3) 두 각이 서로 달라야 대칭 함정이 생기지 않음."
    creative: "(1) 중심각 대신 원주각을 묻기(마지막 2배가 빠져 ★3) (2) x를 주고 ∠P를 묻는 역방향(I-BW 추가 · ★5 후보) (3) 교점 하나를 원 안으로 넣으면 108-14 골조로 내려감(★3) (4) x=180°-2(∠P+∠Q)라는 일반식을 유도하게 하면 서술형 ★5 후보(novelty 필요)."
```

```yaml
- id: GN-M32-109-23
  page: 109
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    PT가 원 O의 접선(T는 접점)이고 ∠ATP=∠x에서 tan x=1/3, AT=2일 때 원 O의 넓이. 주관식.
  category: "접현각 → 지름 보조선으로 직각삼각형 → 삼각비로 지름 → 넓이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접현각으로 원 밖의 x를 원 안의 원주각으로 옮겨 삼각비를 쓸 자리를 만든다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "T를 지나는 지름을 그어 반원의 직각을 만들고, 각 조건을 직각삼각형의 변의 길이 조건으로 전환"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각비(다른 단원)와 피타고라스를 원의 성질에 얹어 지름 → 반지름 → 넓이로 내려감"
  insight_count: 3
  depth_score: 6.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 + 삼각비(원의 반지름 구하기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    tan 값 하나와 현 하나로 원의 크기를 정하는 문항이다. 접현각으로 x를 원주각으로 옮기고, T에서 지름을 그어 직각삼각형을 만들어야 tan x=AT/TC로 남은 변 6이 나오고 빗변이 곧 지름 2√10이 된다.
    보조선 없이는 삼각비를 걸 곳이 없다. 통찰 3개에 I-XU가 있어 형식상 ★5 자격을 갖추지만 novelty_score 0이라 ★5는 RED이며 실력 UP 구역 출발점 ★4로 둔다.
    [분류 이슈] ★5 형식 요건 충족 · novelty 부족으로 ★4 유지.
  tier: star_4
  mechanism_primary: "접현각으로 x를 원주각으로 이동 → T를 지나는 지름을 그어 직각삼각형 → tan x=AT/TC=1/3로 TC=6 → 지름=2√10 → r=√10 → 넓이 10π"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10\pi$'
  answer_source: "답지"
  figure: "crop:fig-109-23.png"
  latex: latex-bank/gn-m32/items/109-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan x=1/3과 AT=2를 바꿀 수 있음. 제약: (1) tan 값을 1/n 꼴로 두면 다른 변이 정수로 떨어짐 (2) AT²(1+n²)이 정리되는 값이라야 넓이가 kπ 꼴 (3) tan 대신 sin·cos을 주면 지름이 바로 나와 단계가 하나 줄어듦 (4) x가 예각이어야 그림 배치 유지."
    creative: "(1) 넓이를 주고 AT를 묻는 역방향(I-BW 추가 · ★5 후보) (2) 원의 둘레나 호의 길이를 묻기(★4 유지) (3) 접선 PT의 길이까지 묻게 하면 단계 추가(★5 후보) (4) tan 대신 두 변의 길이를 주면 삼각비가 빠져 닮음 문제(109-21 골조 · ★4)."
```

```yaml
- id: GN-M32-109-24
  page: 109
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    두 원이 점 T에서 접하고 A·T·C와 B·T·D가 각각 한 직선 위에 있으며 ∠CDB=50°일 때 ∠x의 크기. 주관식.
  category: "공통접선 보조선 → 접현각 두 번 → 중심각 → 반지름 이등변"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에 없는 공통접선을 T에 그어 두 원의 접현각을 맞꼭지각으로 잇고, 작은 원의 각을 큰 원의 각으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 원이 접할 때 공통접선과 접현각"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 원을 잇는 정보는 접점 T 하나뿐이고, 그 T에서 공통접선을 긋기 전에는 오른쪽 원의 50°를 왼쪽 원으로 가져올 길이 없다. 접선을 그으면 양쪽 접현각이 맞꼭지각으로 같아져 ∠ABT=50°가 서고, 중심각 100°와 반지름 이등변으로 x=40°가 나온다.
    보조선 하나에 전부가 걸려 있고 그 뒤는 두 줄이라 통찰 1개(d2)·M_total 6. 실력 UP 구역 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "T에 공통접선 → 접현각 두 번(맞꼭지각) → ∠ABT=∠CDT=50° → 중심각 ∠AOT=100° → OA=OT 이등변 → x=40°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$40^\circ$'
  answer_source: "답지"
  figure: "crop:fig-109-24.png"
  latex: latex-bank/gn-m32/items/109-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "50°를 바꿀 수 있음. 제약: (1) 2×각 < 180° 라야 이등변의 밑각 90°-각 이 양수이므로 각 < 90° (2) 90°-각 이 정수로 떨어지게 (3) 두 원이 외접하는 배치와 A·T·C, B·T·D 공선 조건은 그림 라벨이므로 고정."
    creative: "(1) AB∥CD임을 보이게 하는 서술형(같은 보조선 · ★4) (2) 두 원이 내접하는 배치로 바꾸면 접현각의 방향이 같아져 골조가 바뀜(★5 후보) (3) x 대신 ∠ATB를 물으면 이등변 단계가 빠져 ★3 (4) 두 반지름의 비까지 주고 길이를 묻게 하면 I-XU 추가(★5 후보)."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-110-e1
  page: 110
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    호 BD의 길이가 원의 둘레의 1/8이고 호 AC=2호 BD일 때 두 현의 교점에서의 ∠BPD의 크기. 서술형 [6점]
  category: "둘레의 비 → 중심각 → 두 현의 교점각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레에 대한 분수라는 길이 조건을 중심각(360°의 분수)으로 바꿔 각 계산으로 넘김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "호의 길이 비와 두 현의 교점각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    360°×1/8=45°, 그 2배인 90°를 얻고 나면 교점각 공식 한 줄로 끝난다. 원의 반지름도 호의 실제 길이도 필요 없다.
    비→중심각 변환 하나가 통찰이고 그 뒤는 평균 계산. 서술형 예제(풀이 제공)이고 M_total 5·통찰 1이라 서술형 출발점 ★3에서 ★2로 내렸다.
    [분류 이슈] 구역 신호와 1단 차.
  tier: star_2
  mechanism_primary: "호 BD=360°×1/8=45°, 호 AC=90° → 두 현의 교점각 ∠BPD=(45°+90°)/2=67.5°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$67.5^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-110-e1.png"
  latex: latex-bank/gn-m32/items/110-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/8과 배수 2를 바꿀 수 있음. 제약: (1) 분모가 360°의 약수라야 중심각이 정수 (2) 두 호의 합의 절반이 답이므로 합이 짝수면 정수 답, 아니면 이 문항처럼 0.5° 단위 (3) 두 호의 합 < 360° 유지."
    creative: "(1) ∠BPD를 주고 호 BD의 비를 묻는 역방향(I-BW · ★3) (2) P를 원 밖으로 빼면 합이 아니라 차(★3) (3) 반지름을 함께 주고 호의 실제 길이까지 묻게 하면 I-XU 추가(★3) (4) 세 현의 교점으로 늘리면 단계 추가(★3)."
```

```yaml
- id: GN-M32-110-u1
  page: 110
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    호 AC, 호 BD의 길이가 각각 원의 둘레의 1/5, 1/15일 때 두 현의 교점에서의 ∠APC의 크기. 서술형 [6점]
  category: "둘레의 비 → 중심각 → 두 현의 교점각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 분모의 둘레 비를 각각 중심각 72°·24°로 바꿔 같은 단위로 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "호의 길이 비와 두 현의 교점각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    110-e1의 유제로 골조가 같다. 분모가 5와 15로 달라 통분 대신 각각 360°에 곱해 72°·24°로 내리는 편이 빠르다는 점만 다르다.
    변환 한 번 뒤에는 평균 한 줄. M_total 5·통찰 1로 서술형 출발점 ★3에서 ★2로 내렸다.
    [분류 이슈] 구역 신호와 1단 차(110-e1과 동일 처리).
  tier: star_2
  mechanism_primary: "호 AC=360°×1/5=72°, 호 BD=360°×1/15=24° → ∠APC=(72°+24°)/2=48°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$48^\circ$'
  answer_source: "답지"
  figure: "crop:fig-110-u1.png"
  latex: latex-bank/gn-m32/items/110-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/5과 1/15를 바꿀 수 있음. 제약: (1) 두 분모 모두 360°의 약수 (2) 두 중심각의 합이 짝수라야 정수 답 (3) 두 호의 합 < 360° (4) 두 분수를 서로 다르게 두어야 통분 판단이 살아 있음."
    creative: "(1) 한 호만 주고 교점각을 함께 주어 나머지 호를 묻기(I-BW · ★3) (2) 두 호의 비만 주고 교점각을 주면 연립(★3) (3) 교점을 원 밖으로 빼기(★3) (4) 호의 길이를 cm로 주고 반지름까지 묻게 하면 I-XU 추가(★3)."
```

```yaml
- id: GN-M32-110-e2
  page: 110
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    직선 PT가 반지름 8cm인 원 O의 접선(T는 접점)이고 BP가 중심을 지나며 ∠PTA=30°일 때 PT의 길이. 서술형 [7점]
  category: "접현각 → 중심각 → 접선⊥반지름 직각삼각형 → 특수각 비"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원의 각 성질로 60°를 만든 뒤 30°-60°-90° 직각삼각형의 변의 비(삼각비)를 끌어와 길이로 내려감"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 + 특수각 직각삼각형(접선의 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접현각 30°는 호 AT의 중심각 60°를 뜻하고, 중심을 지나는 선 위에 P가 있으므로 그 60°가 그대로 직각삼각형 OTP의 한 예각이 된다. 접선⊥반지름으로 직각을 세우면 PT=8×√3이 특수각 비 한 줄로 나온다.
    각에서 길이로 건너가는 지점 하나가 통찰이고, 원 성질 자체는 표준이라 서술형 출발점 ★3 유지. 예제(풀이 제공)라 더 올리지 않았다.
  tier: star_3
  mechanism_primary: "접현각 ∠PTA=30° → 호 AT의 중심각 60° → ∠TOP=60°, OT⊥PT → PT=8×tan60°=8√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8\sqrt{3}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-110-e2.png"
  latex: latex-bank/gn-m32/items/110-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 8cm와 30°를 바꿀 수 있음. 제약: (1) 각은 15°·22.5°·30°·45° 중 2배가 특수각(30°·45°·60°)이 되는 값만 (2) 45°로 두면 PT=반지름 (3) 반지름을 정수로 두어야 답이 k√3 꼴로 정리 (4) 2×각 < 90° 라야 직각삼각형이 성립."
    creative: "(1) PT를 주고 반지름을 묻는 역방향(I-BW · ★4) (2) OP나 AP의 길이까지 묻게 하면 단계 추가(★4) (3) 특수각이 아닌 tan 값을 주면 109-23 골조(★4) (4) 접선을 두 개 그어 두 접선 길이의 합을 묻기(★3)."
```

```yaml
- id: GN-M32-110-u2
  page: 110
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    PT가 원 O의 접선(T는 접점)이고 AP가 중심을 지나며 ∠BAT=30°, AB=8cm일 때 BP의 길이. 서술형 [7점]
  category: "지름의 직각 → 특수각으로 현 길이 → 접현각 → 이등변삼각형"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접현각 ∠BTP=∠BAT=30°로 각을 옮겨 △BTP를 이등변으로 만들고, 구하는 길이를 이미 구한 BT와 같게 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 + 반원의 직각(길이 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB가 지름이므로 ∠ATB=90°이고 30°대변으로 BT=4cm가 먼저 나온다. 구하는 BP는 삼각형 BTP에서 ∠BTP=∠BPT=30°가 되어 BT와 같아지는데, 그 이등변을 세우려면 접현각으로 각을 한 번 옮겨야 한다.
    「BP를 직접 재지 않고 BT와 같다고 바꾸는」 지점이 통찰 하나(d2). 나머지는 특수각 비와 내각 합이라 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB 지름 → ∠ATB=90° → BT=AB/2=4 → 접현각 ∠BTP=∠BAT=30° → ∠BPT=30° → 이등변 BP=BT=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-110-u2.png"
  latex: latex-bank/gn-m32/items/110-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "30°와 AB=8cm를 바꿀 수 있음. 제약: (1) 각이 30°일 때만 BT=AB/2로 깔끔 (2) 45°로 두면 BT=AB/√2 (3) AB를 짝수로 두어야 30° 판에서 정수 답 (4) 각 < 45° 라야 P가 그림처럼 바깥에 놓임."
    creative: "(1) AT나 PT의 길이를 묻기(피타고라스 추가 · ★4) (2) BP를 주고 AB를 묻는 역방향(★4) (3) AB를 지름이 아닌 현으로 바꾸면 ∠ATB=90°가 깨져 중심각 단계가 추가됨(★4) (4) 원의 넓이까지 묻게 하면 단계 하나 추가(★3)."
```

```yaml
- id: GN-M32-111-u3
  page: 111
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    호 AB=3π cm이고 ∠DAP=42°, ∠APB=78°일 때 이 원의 둘레의 길이. 서술형 [6점]
  category: "삼각형의 외각으로 원주각 분리 → 중심각 → 호와 둘레의 비"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점각 78°를 삼각형의 외각으로 보고 42°를 떼어내 호 AB의 원주각 36°만 남김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "호의 길이와 원주각(원의 둘레 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구하는 것이 둘레이므로 호 3π가 둘레의 몇 분의 몇인지를 알아야 하고, 그 비는 호 AB의 중심각에서 온다. 78°는 두 각이 합쳐진 값이라 42°를 떼어내는 외각 분리가 먼저다.
    분리 한 번(d2) 뒤에는 36°→72°→1/5→15π의 비례 계산. 구하는 방향이 거꾸로지만 절차는 표준이라 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "△의 외각 → 호 AB의 원주각=78°-42°=36° → 중심각 72° → 호:둘레=72:360=1:5 → 둘레=15π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\pi\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-111-u3.png"
  latex: latex-bank/gn-m32/items/111-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3π·42°·78°를 바꿀 수 있음. 제약: (1) ∠APB > ∠DAP 여야 원주각이 양수 (2) 2×(차)가 360°의 약수라야 둘레가 깔끔한 π 꼴 (3) 호의 길이를 π의 정수배로 두어야 답도 정수배 (4) 두 각의 차를 36°·30°·45° 등으로."
    creative: "(1) 둘레를 주고 호 AB의 길이를 묻기(★3 유지) (2) 반지름이나 원의 넓이를 묻게 하면 단계 하나 추가(★3) (3) P를 원 안으로 넣으면 합이 되어 외각 분리가 사라짐(★2) (4) 호 AB와 호 CD를 모두 미지로 두고 두 조건을 주면 연립(★4)."
```

```yaml
- id: GN-M32-111-u4
  page: 111
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    두 원 O, O'이 두 점 P, Q에서 만나고 ∠BAP=96°일 때 원 O'의 중심각 ∠PO'C의 크기. 서술형 [7점]
  category: "내접사각형 대각의 합 → 공통현으로 건너기 → 일직선 보각 → 중심각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통현 PQ를 두 원의 다리로 삼아, 원 O의 대각 조건을 Q에서의 보각으로 바꾼 뒤 원 O'의 내접사각형 조건에 넘김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 원과 공통현(내접사각형으로 각 옮기기 → 중심각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    96°는 왼쪽 원에, 구하는 중심각은 오른쪽 원에 있다. 두 원이 공유하는 것은 현 PQ뿐이라 Q에 모인 각들을 징검다리로 써야 한다 — 왼쪽에서 대각의 합으로 84°, 일직선에서 96°, 오른쪽에서 다시 대각의 합으로 84°, 마지막에 2배.
    다리를 PQ로 잡는 판단 하나가 통찰이고 나머지는 보각·2배의 반복이라 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "원 O의 내접사각형 → ∠BQP=180°-96°=84° → 일직선이라 ∠PQC=96° → 원 O'의 내접사각형 → ∠PDC=84° → 중심각 ∠PO'C=2×84°=168°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$168^\circ$'
  answer_source: "답지"
  figure: "crop:fig-111-u4.png"
  latex: latex-bank/gn-m32/items/111-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "96°를 바꿀 수 있음. 제약: (1) 90°<각<180° 라야 그림처럼 중심각이 180°보다 작은 쪽으로 표시됨 (2) 2×(180°-각)이 답이므로 각이 짝수면 정수 (3) 각이 90°면 중심각이 180°가 되어 P·O'·C가 한 직선이 되는 퇴화 배치."
    creative: "(1) 중심각을 주고 ∠BAP을 묻는 역방향(I-BW · ★4) (2) 중심각 대신 ∠PDC를 물으면 마지막 2배가 빠져 ★2 (3) 두 원이 접하는 배치로 바꾸면 공통현이 사라져 109-24 골조(★4) (4) ∠BAP과 ∠PO'C의 일반 관계를 쓰게 하면 ★4."
```

```yaml
- id: GN-M32-111-u5
  page: 111
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    원 O가 삼각형 ABC의 내접원이면서 삼각형 DEF의 외접원이고, D·E·F가 접점이며 ∠BAC=62°, ∠EFD=52°일 때 ∠FBD의 크기. 서술형 [7점]
  category: "접선 길이 상등 이등변 → 접현각 → 접점삼각형 각 ↔ 꼭지각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AE=AF라는 접선 길이 조건을 이등변 밑각 59°로 바꿔 접점삼각형의 각과 한 직선 위에 올림"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점삼각형의 각 52°에서 거꾸로 ∠BFD=69°를 얻고 다시 꼭지각 ∠FBD를 되짚음"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "삼각형의 내접원과 접점삼각형(접현각으로 각 옮기기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    107-11과 같은 골조의 서술형 판이다. 접선 길이가 같아 생기는 이등변 밑각 (180°-62°)/2=59°를 세우고, 접점 F에서 세 각이 일직선을 이루는 것을 써 ∠BFD=69°를 얻은 뒤 다시 이등변으로 꼭지각을 되짚는다.
    통찰 2개로 +1 후보이지만 서술형 출발점이 이미 ★3이고 107-11(★3)과 체감이 같아 ★3을 유지했다.
    [분류 이슈] 107-11과 같은 골조인데 구역 출발점이 달라 두 문항의 ★가 우연히 같아짐 — 카탈로그에서 한 유형으로 묶을 것.
  tier: star_3
  mechanism_primary: "AE=AF 이등변 → ∠AFE=(180°-62°)/2=59° → 일직선에서 ∠BFD=180°-59°-52°=69° → BF=BD 이등변 → ∠FBD=180°-2×69°=42°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$42^\circ$'
  answer_source: "답지"
  figure: "crop:fig-111-u5.png"
  latex: latex-bank/gn-m32/items/111-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "62°·52°를 바꿀 수 있음. 제약: (1) (180°-∠A)/2 + ∠EFD < 180° 라야 ∠BFD가 양수 (2) ∠A가 짝수라야 밑각이 정수 (3) 180°-2∠BFD > 0 (4) 세 꼭지각의 합이 180°가 되는지 마지막에 확인."
    creative: "(1) ∠BCA까지 함께 구하게 하면 단계 하나 추가(★3 유지) (2) 접점삼각형의 두 각을 주고 ∠A를 묻는 완전 역방향(★4) (3) 내접원의 반지름이나 접선 길이를 엮으면 I-XU 추가(★4) (4) 접점삼각형 각=90°-꼭지각/2 를 증명하게 하면 ★4."
```

```yaml
- id: GN-M32-111-u6
  page: 111
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    직선 CP가 원 O의 접선(C는 접점)이고 AD가 지름이며 ∠ABC=115°일 때 ∠DCP의 크기. 서술형 [7점]
  category: "내접사각형 대각의 합 → 반원의 직각 → 접현각"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 접선 쪽 각을 접현각으로 원 안의 원주각 ∠DAC로 바꿔, 사각형·지름 조건과 같은 그림 안에서 잇는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형 + 반원의 직각 + 접현각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 문항에 세 도구가 순서대로 들어간다 — 대각의 합으로 ∠ADC=65°, 지름으로 ∠ACD=90°, 삼각형 내각으로 ∠DAC=25°, 마지막에 접현각으로 그 값을 접선 쪽으로 내보낸다.
    마지막 접현각 전환 하나만 통찰로 세고 앞 두 단계는 표준 대입. 세 도구를 순서대로 꿰는 구조라 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "내접사각형 → ∠ADC=180°-115°=65° → AD 지름이라 ∠ACD=90° → ∠DAC=25° → 접현각 ∠DCP=∠DAC=25°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25^\circ$'
  answer_source: "답지"
  figure: "crop:fig-111-u6.png"
  latex: latex-bank/gn-m32/items/111-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "115°를 바꿀 수 있음. 제약: (1) 90°<각<180° 라야 ∠ADC가 예각이고 ∠DAC가 양수 (2) 각이 5의 배수면 답도 5의 배수 (3) 180°-각 < 90° 유지 (4) AD가 지름이라는 표시는 ∠ACD=90°의 근거이므로 고정."
    creative: "(1) ∠DCP를 주고 ∠ABC를 묻는 역방향(I-BW · ★4) (2) ∠ACP까지 함께 묻게 하면 보각 단계 추가(★3 유지) (3) AD를 지름이 아닌 현으로 바꾸고 중심각을 주면 단계 추가(★4) (4) 접점을 지나는 다른 현을 추가해 접현각을 두 번 쓰게 하면 ★4."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 11 · ★3 14 · ★4 6 · ★5 0
- 통찰형 28 · 절차형 4(106-02 · 106-06 · 107-07 · 107-09) · premium 0
- 구역별 ★ 중앙값: STEP 1 기본 ★2(12문) · STEP 2 발전 ★3(9문) · STEP 3 실력 UP ★4(3문) · 서술형 대비 ★3(8문). 벤더 구역 출발점과 대체로 일치하고, 내린 것은 107-09(★2→★1) · 110-e1·110-u1(★3→★2) 셋, 올린 것은 107-11·107-12(★2→★3)와 108-17·109-19·109-21(★3→★4) 다섯이다.
- 통찰 유형 분포: I-EQV 24 · I-CON 4 · I-XU 3 · I-BW 2 · I-RT 2 · I-SYM 1 · I-PD 1 · I-SC 1 (총 38 라벨 / 28문). 이 단원의 통찰은 압도적으로 **호 조건 ↔ 각 조건 ↔ 길이 조건을 서로 옮기는 동치 변환(I-EQV)** 이고, 그다음이 흩어진 조건을 한 식으로 묶는 I-CON(108-14 · 108-18 · 109-22 · 107-12)이다. 삼각비·닮음이 얹히는 I-XU는 109-21 · 109-23 · 110-e2 셋뿐이다.
- type_hint 상위 5: 「접현각을 낀 사슬」 9(107-10 · 107-12 · 108-13 · 109-21 · 109-23 · 109-24 · 110-e2 · 110-u2 · 111-u6) · 「호의 길이와 원주각·교점각」 7(106-04 · 106-05 · 108-16 · 108-17 · 110-e1 · 110-u1 · 111-u3) · 「원에 내접하는 사각형의 성질」 6(107-07 · 107-08 · 108-18 · 109-19 · 109-22 · 111-u4) · 「원주각과 중심각(반원의 직각 포함)」 4(106-01 · 106-02 · 106-03 · 108-15) · 「네 점이 한 원 위에 있을 조건」 3(106-06 · 107-09 · 109-20).
- 나머지 2문은 「삼각형의 내접원과 접점삼각형」(107-11 · 111-u5)으로 같은 골조가 STEP 1과 서술형에서 한 번씩 반복된다.
- 그림: 31문이 그림 문항(`crop:fig-<id>.png`)이고 `figure: none`은 107-09 하나뿐이다. 발문만으로 배치가 확정되지 않아 크롭을 실제로 연 문항은 106-02 · 106-04 · 107-07 · 107-12 · 108-15 · 108-17 · 109-19 · 109-22 · 109-24 · 111-u4 열 개다.
- 답 형태: 5지선다 15 · 각도 주관식 13 · 길이·넓이 주관식 4(108-16 · 109-23 · 110-e2 · 111-u3). 숫자 변형의 가장 강한 제약은 「중심각이 원주각의 2배이므로 2배·4배 한 값이 360°를 넘지 않을 것」과 「호의 분수가 360°의 약수로 떨어질 것」 둘이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-107-09 | STEP 1 기본(★2 출발)이지만 판정 한 줄·M_total 4·통찰 0 이라 v3.8 -1 규칙대로 ★1 로 내림. 이 범위 유일한 ★1 | ★1 / ★2 |
| GN-M32-107-12 | 두 원 결합·통찰 2개로 체감은 STEP 2 급이나 벤더는 기본 문제 구역에 둠. ★3 으로 올렸지만 구역과 1단 차 | ★3 / ★4 |
| GN-M32-108-16 | 통찰 2개(EQV+RT)로 +1 후보이나 교점각 공식과 호 비례 모두 이 단원 표준 도구라 ★3 유지 | ★3 / ★4 |
| GN-M32-109-19 | 주어진 두 각 중 ∠RDC=89°는 ∠x 사슬에 쓰이지 않고 반대쪽 각을 정한다. 문항 오류가 아니라 여분 조건 | ★4 |
| GN-M32-109-23 | 통찰 3개 + I-XU 로 형식상 ★5 자격을 갖추지만 novelty_score 0 이라 ★5 는 RED → ★4 유지 | ★4 / ★5 |
| GN-M32-111-u5 | 107-11 과 같은 골조인데 구역 출발점이 달라(STEP1 +1 vs 서술형 유지) 두 문항의 ★ 가 우연히 같아짐 | ★3 / ★4 |
| GN-M32-110-e1 · 110-u1 | 서술형 대비(★3 출발)이지만 비→중심각 변환 한 줄 + 평균 한 줄이라 ★2 로 내림. 예제·유제 쌍이라 함께 처리 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「접현각」은 *각만 묻는 형*(107-10 · 108-13 · 111-u6)과 *길이까지 내려가는 형*(109-21 · 109-23 · 110-e2 · 110-u2, 모두 I-XU 또는 닮음 동반)이 학생 체감이 확연히 달라 분리해야 한다. (2) 「교점각」도 *원 안 교점*(106-05 · 108-16 · 110-e1 · 110-u1)과 *원 밖 교점*(108-15 · 111-u3)은 합/차가 뒤집히는 함정이 반대라 따로 세우는 편이 낫다. (3) 「두 원을 건너는 각 옮기기」(107-12 · 109-24 · 111-u4)는 공통현·공통접선이라는 고정된 다리를 쓰는 독립 유형 자격이 충분하다. (4) 「삼각형의 내접원과 접점삼각형」(107-11 · 111-u5)은 이 범위에서 2회 반복되고 골조가 완전히 같아 독립 유형이다.
- **통합해도 될 유형**: (1) 「호의 길이 비 → 중심각 → 교점각」(106-05 · 110-e1 · 110-u1 · 111-u3)은 조건이 cm·분수·π 로 다를 뿐 한 골조라 한 유형 + 난이도 층(★2~★3)으로 묶으면 된다. (2) 「네 점이 한 원 위에 있을 조건」(106-06 · 107-09 · 109-20)은 판정 기준이 둘(대각의 합 · 같은 쪽 각)뿐이라 한 유형의 세 난이도로 충분하다. (3) 「내접사각형의 대각·외각」(107-07 · 107-08 · 111-u4)도 한 유형이며, 두 외부 교점이 붙는 108-18 · 109-22 만 상위 변형으로 갈라 붙이면 된다.
- **base_star 초안 제안**: 위 통합 기준으로 유형을 세울 때 base ★ 는 「원주각·중심각」 2 · 「네 점이 한 원 위에」 2 · 「내접사각형 대각·외각」 2 · 「호의 길이 비와 교점각」 2 · 「접현각(각)」 2 · 「내접원과 접점삼각형」 3 · 「두 외부 교점 연립」 3 · 「두 원 건너기」 4 · 「접현각 + 삼각비·닮음」 4 가 이 범위의 실제 체감에 맞는다. 통찰이 상쇄·주기 구조에 걸린 108-17 · 109-19 는 어느 유형에도 잘 붙지 않아 「호 상쇄」·「내접사각형 연쇄」로 따로 세워 base ★ 4 를 주는 편이 낫다.
