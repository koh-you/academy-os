---
name: mechanism-데이터-GN-GEO-13
description: 개념원리 기하 13 정사영(1/1 · 105~111쪽 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 13 정사영
  unit_code: GEO-13
  part: "1/1"
  extract_range: "105~111쪽 · 105-196~111-218"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 13 정사영 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 13단원 「정사영」 105~111쪽 26문항 전수(105-196~111-218)를 다룬다. 구역은 「개념원리 익히기」 3문, 「필수·발전 예제」 9문(필수 예제 3 + 확인체크 6), 「연습문제 STEP 1」 5문, 「연습문제 STEP 2」 5문, 「연습문제 실력 UP」 4문이다.

개념원리 고등의 난이도 신호는 구역과 예제 태그다. 「개념원리 익히기」(통번호·확인체크)는 개념 확인 ★1 출발, 「필수」 예제와 그 아래 확인체크는 ★2, 「연습문제 STEP 1」은 ★2, 「STEP 2」는 ★3, 「실력 UP」은 ★4 출발이며 기출 태그는 통찰 유무로 +0~1 한다. 여기서 M_total 과 통찰로 ±1 조정한 값을 star 로 적었다.

이 단원은 도구가 세 개뿐이다 — 정사영의 정의(수선의 발), 길이 공식 `A'B' = AB cosθ`, 넓이 공식 `S' = S cosθ`. 그래서 난이도는 공식 자체가 아니라 **어느 평면 위로의 정사영인지 파악하고 그 각을 어떤 직각삼각형으로 잡느냐**에서 갈린다. 공식을 그대로 대입하는 단계는 이 단원의 표준 절차로 보아 통찰로 세지 않았고, (a) 면이 아닌 대각평면·비스듬한 평면 위로의 수선의 발 식별, (b) 교선 방향·수직 방향 성분 분해, (c) 넓이비를 역방향으로 써서 이면각을 복원, (d) 타원·부피 등 다른 단원 도구 결합, (e) 최솟값 조건 처리만 통찰로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-105-196
  page: 105
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정육면체에서 ⑴ 선분 AC의 평면 AEHD 위로의 정사영 ⑵ 선분 DC의 평면 BFGC 위로의 정사영 ⑶ 선분 DF의 평면 EFGH 위로의 정사영 ⑷ 삼각형 AFD의 평면 EFGH 위로의 정사영을 각각 구하기.
  category: "정사영의 정의 → 각 꼭짓점의 수선의 발 → 상의 꼴 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형의 평면 위로의 정사영 찾기(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 꼭짓점의 수선의 발만 찍으면 끝난다. ⑵ 는 선분 DC가 평면 BFGC에 수직이라 정사영이 점 C 로 축퇴하는 경우여서 정의 확인 포인트(T-경계 성격)가 된다.
    개념원리 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 꼭짓점의 수선의 발 → 상의 꼴(선분·점·삼각형) 판정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 선분~$\pt{AD}$ ⑵ 점~$\pt{C}$ ⑶ 선분~$\pt{HF}$ ⑷ 삼각형~$\pt{EFH}$'
  answer_source: "답지"
  figure: "crop:fig-105-196.png"
  latex: latex-bank/gn-geo/items/105-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 정의 문항이라 바꿀 수 있는 것은 묻는 선분·평면 쌍뿐이다. 정육면체 라벨 ABCD-EFGH 와 대응(A-E, B-F, C-G, D-H)은 그림에 고정돼 있으므로 유지한다. 제약: 정사영이 점으로 축퇴하는 쌍(선분이 그 평면에 수직)을 최소 1개 남겨야 확인 포인트가 유지된다."
    creative: "(1) 정사면체·정팔면체로 입체를 바꿔 같은 정의 확인(★1 유지) (2) 정사영이 원래 도형과 합동이 되는 쌍을 모두 고르게 하면 평행 판정이 붙어 ★2 (3) 상의 꼴 대신 길이·넓이를 묻게 바꾸면 공식 단계가 추가돼 ★2."
```

```yaml
- id: GN-GEO-105-197
  page: 105
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    선분 AB의 평면 α 위로의 정사영이 선분 A'B'이고 직선 AB와 α가 이루는 각이 θ일 때 ⑴ AB=10, θ=45°에서 A'B' ⑵ θ=60°, A'B'=8에서 AB ⑶ AB=4, A'B'=2√3에서 cosθ 를 구하기.
  category: "정사영의 길이 공식 → 세 값 중 하나를 미지수로 두고 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 길이 공식 기본 대입(길이·각 상호 계산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 A'B' = AB cosθ 하나에 세 방향(순·역·각 구하기)으로 대입하는 확인 문항. 그림도 없고 분기도 없다.
    개념원리 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A'B' = AB cosθ 에 주어진 두 값 대입 → 나머지 한 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{2}$ ⑵ $16$ ⑶ $\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/105-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "길이(10, 8, 4)와 각(45°, 60°)은 자유롭게 교체. 제약: θ 는 0° 초과 90° 미만이어야 하고 ⑶ 처럼 cosθ 를 묻는 경우 A'B' ≤ AB 여야 하며, 답이 특수각(30·45·60)이 되게 하려면 비가 √3/2, √2/2, 1/2 중 하나여야 한다."
    creative: "(1) ⑶ 을 θ 자체로 묻기(특수각 역산 ★1 유지) (2) 선분 대신 평면 위 도형의 넓이로 바꿔 S'=S cosθ 판으로 이식(★1) (3) A'B' 와 AB 의 차 또는 비를 조건으로 주고 θ 를 묻게 하면 식 정리가 한 단계 늘어 ★2."
```

```yaml
- id: GN-GEO-105-198
  page: 105
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    평면 α 위 도형의 넓이 S, 그 도형의 평면 β 위로의 정사영의 넓이 S', 두 평면이 이루는 각 θ 에 대하여 ⑴ S=12, θ=60°에서 S' ⑵ S'=8, θ=45°에서 S ⑶ S=4√3, S'=6에서 θ 를 구하기.
  category: "정사영의 넓이 공식 → 세 값 중 하나를 미지수로 두고 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 공식 기본 대입(넓이·각 상호 계산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    105-197 의 넓이판. S' = S cosθ 에 세 방향으로 대입하며 ⑶ 만 cosθ = 6/(4√3) 을 특수각으로 되돌리는 한 단계가 더 있다.
    개념원리 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S' = S cosθ 에 주어진 두 값 대입 → 나머지 한 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $8\sqrt{2}$ ⑶ $30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/105-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S, S', θ 중 둘을 주고 하나를 묻는 구조는 그대로 두고 값만 교체. 제약: S' ≤ S 이고 ⑶ 처럼 각을 묻는 경우 S'/S 가 √3/2, √2/2, 1/2 중 하나여야 특수각이 나온다. 무리수 넓이(4√3)는 약분 후 유리화가 되도록 짝을 맞춘다."
    creative: "(1) 도형을 구체화(정삼각형·정사각형·원)해 넓이 S 를 먼저 구하게 하면 ★2 (2) 두 평면이 이루는 각 대신 한 평면 위 도형과 다른 평면의 관계를 그림으로 주면 각 찾기가 추가돼 ★2 (3) S 와 S' 를 모두 미지수로 두고 비만 주면 Mₐ 상승 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-106-e10
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    한 모서리의 길이가 2인 정육면체에서 선분 AF의 평면 DHFB 위로의 정사영의 길이 구하기.
  category: "대각평면 위로의 정사영 → 점 A의 수선의 발 식별 → 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "면이 아닌 대각평면 DHFB 위로의 정사영이라 점 A의 수선의 발이 윗면 대각선 BD의 중점(윗면의 중심)임을 먼저 찾아야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 길이 — 정육면체의 대각평면 위로의 정사영"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A에서 평면 DHFB에 내린 수선의 발은 윗면의 중심 O(=BD의 중점)이고 AO는 윗면 대각선의 절반 √2. F는 평면 위에 있으므로 정사영은 선분 OF 이고 AF=2√2 에서 √(8-2)=√6.
    좌표 없이도 「빗변 AF·수선 AO·정사영 OF」 직각삼각형 하나로 끝난다. 필수 예제 ★2 출발, 통찰 1개(RT d1)·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "A의 수선의 발 = 윗면 중심 O → 직각삼각형 AOF → OF = √(AF² − AO²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{6}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-106-e10.png"
  latex: latex-bank/gn-geo/items/106-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 2 는 임의 양수 a 로 바꿀 수 있고 답은 a√6/2 꼴로 비례한다. 제약: 정육면체를 직육면체로 바꾸면 대각평면 DHFB가 더 이상 AF의 수선의 발을 대각선 중점으로 주지 않으므로 밑면은 정사각형으로 유지해야 같은 골조가 산다."
    creative: "(1) 선분 AG(공간대각선)의 같은 평면 위로의 정사영으로 바꾸기(★2 유지) (2) 정사영의 길이 대신 직선 AF와 평면 DHFB가 이루는 각의 cos 을 묻기(★2) (3) 대각평면을 AEGC 로 바꾸고 두 대각평면의 교선까지 걸치게 하면 수선의 발 식별이 두 번 필요해 ★3."
```

```yaml
- id: GN-GEO-106-199
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 4인 정육면체에서 모서리 BF의 중점을 M이라 할 때, 선분 DM의 평면 DHGC 위로의 정사영의 길이 구하기.
  category: "면 위로의 정사영 → M의 수선의 발 = CG의 중점 → 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 길이 — 정육면체의 한 면 위로의 정사영"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정사영하는 평면이 면 DHGC 자체라 M의 수선의 발이 CG의 중점으로 바로 보이고, D는 평면 위에 있다. DM=6, M에서 평면까지의 거리 4 → √(36−16)=2√5.
    e10 과 달리 수선의 발 식별에 착안이 필요 없어 통찰 0. 필수 예제 구역의 확인체크 ★2 출발, 통찰 0·M_total 5 로 −1 후보이나 입체 위치 파악 부담이 남아 ★2 유지.
  tier: star_2
  mechanism_primary: "M의 수선의 발 = CG의 중점 → 직각삼각형 → √(DM² − 4²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: "crop:fig-106-199.png"
  latex: latex-bank/gn-geo/items/106-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 4 와 M의 내분비(중점 → 1:3 등)를 바꿀 수 있다. 제약: 정사영의 길이가 √(DM² − BM에서 평면까지 거리²) 이므로 근호 안이 완전제곱 또는 깔끔한 무리수가 되도록 모서리를 짝수로 잡는다. 직육면체로 바꿔도 골조는 유지된다(이때 DC, CG 를 따로 지정)."
    creative: "(1) 정사영하는 평면을 ABFE 로 바꿔 수선의 발이 AE 위에 오게 하기(★2 유지) (2) 선분 DM 과 평면 DHGC 가 이루는 각의 cos 을 묻기(★2) (3) 평면을 대각평면 BDHF 로 바꾸면 수선의 발 식별 단계가 추가돼 ★3."
```

```yaml
- id: GN-GEO-106-200
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 6인 정사면체에서 모서리 AD의 평면 BCD 위로의 정사영의 길이 구하기.
  category: "정사면체의 꼭짓점 정사영 = 밑면의 무게중심 → 외접원의 반지름"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 길이 — 정사면체의 모서리를 밑면에 정사영"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 A의 정사영은 정삼각형 BCD의 무게중심 G(=외심)이고 D는 평면 위에 있으므로 정사영은 선분 GD = 중선의 2/3 = (2/3)(3√3) = 2√3.
    정사면체 표준 사실 하나로 끝나고 분기가 없다. 확인체크 ★2 출발, 통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "A의 정사영 = 밑면 정삼각형의 무게중심 G → GD = 중선의 2/3 = 외접원 반지름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-106-200.png"
  latex: latex-bank/gn-geo/items/106-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 6 은 임의 양수 a 로 교체 가능하고 답은 a/√3 = a√3/3. 제약: 답에 근호가 남으므로 3의 배수를 택하면 유리화가 깔끔하다. 정사면체를 유지해야 무게중심=외심 성질이 산다(일반 사면체로 바꾸면 골조가 깨짐)."
    creative: "(1) 정사면체의 높이를 묻기(√(AD² − GD²) ★2 유지) (2) 모서리 AD 와 밑면이 이루는 각의 cos 을 묻기(★2) (3) AD 의 중점을 잡아 그 점의 정사영을 묻게 하면 중점 보존 착안이 필요해 ★3(110-212 골조)."
```

```yaml
- id: GN-GEO-107-e11
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    밑면의 지름이 12인 원기둥을 밑면과 30°의 각을 이루는 평면으로 자른 단면이 타원일 때 그 타원의 넓이 구하기.
  category: "단면의 밑면 위로의 정사영 = 밑면 원 → 넓이 공식 역방향"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 타원의 넓이 S 가 아니라 그 정사영 S'(=밑면 원 36π)가 먼저 주어진 구조임을 보고 S = S'/cosθ 로 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 원기둥의 빗단면(타원) 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    타원 단면을 밑면에 정사영하면 반지름 6인 밑면 원 전체와 일치한다. 36π = S cos30° 에서 S = 24√3 π.
    타원의 장축·단축을 직접 구하지 않아도 되는 것이 이 단원의 착안점(BW d1). 필수 예제 ★2 출발, 통찰 1개·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "타원의 정사영 = 밑면 원(넓이 36π) → 36π = S cos30° → S = 24√3 π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$24\sqrt{3}\pi$'
  answer_source: "본문 풀이"
  figure: "crop:fig-107-e11.png"
  latex: latex-bank/gn-geo/items/107-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름 12(반지름 6)와 경사각 30°는 자유롭게 교체. 제약: cosθ 가 특수각 값이어야 답이 유리화되고, 원기둥 높이가 밑면 지름×tanθ 이상이어야 단면이 완전한 타원이 된다(작으면 잘려 타원이 아님)."
    creative: "(1) 타원의 넓이를 주고 경사각을 묻기(역방향 ★2 유지) (2) 타원의 장축 길이·두 초점 사이 거리로 바꾸면 이차곡선 단원 결합으로 ★3(110-211 골조) (3) 원기둥 대신 원뿔의 빗단면으로 바꾸면 정사영이 원이 아니어서 골조가 깨진다 — 변형 금지 지점."
```

```yaml
- id: GN-GEO-107-201
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 평면 α, β가 이루는 각이 60°일 때 평면 α 위의 한 변의 길이가 2인 정삼각형의 평면 β 위로의 정사영의 넓이 구하기.
  category: "정삼각형의 넓이 → 정사영의 넓이 공식 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 평면 위 도형의 넓이 먼저 구한 뒤 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정삼각형 넓이 √3 를 구하고 cos60°=1/2 을 곱하면 끝. 그림도 없고 각이 그대로 주어져 있다.
    확인체크 ★2 출발, 통찰 0·M_total 5 로 −1 후보이나 「도형 넓이 계산 + 공식」 두 단계라 ★2 유지.
  tier: star_2
  mechanism_primary: "정삼각형 넓이 √3 → S' = √3 cos60° = √3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/107-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 2 와 각 60°를 교체. 제약: 특수각으로 두면 답이 유리화되고, 도형을 정육각형·마름모로 바꿔도 넓이 공식만 달라질 뿐 골조는 같다."
    creative: "(1) 정사영의 넓이를 주고 원래 도형의 한 변을 묻기(역방향 ★2) (2) 도형을 반지름 r 인 원으로 바꿔 타원 넓이와 연결(★2) (3) 두 평면이 이루는 각을 직접 주지 않고 입체 안에서 찾게 하면 이면각 식별이 추가돼 ★3."
```

```yaml
- id: GN-GEO-107-202
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 변의 길이가 6인 정사각형을 밑면으로 하는 직육면체를 밑면과 45°의 각을 이루는 평면으로 잘랐을 때 잘린 단면의 넓이 구하기.
  category: "단면의 밑면 위로의 정사영 = 밑면 정사각형 → 넓이 공식 역방향"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "단면의 넓이를 직접 구하지 않고 그 정사영이 밑면 정사각형(넓이 36)임을 보고 36 = S cos45° 로 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 기둥의 빗단면 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 의 다각형판. 단면(평행사변형)의 밑면 위로의 정사영이 밑면 정사각형과 일치하므로 36 = S cos45°, S = 36√2.
    단면의 변 길이를 하나씩 구하려 들면 길어지고, 정사영 관계를 쓰면 한 줄이다(BW d1). 확인체크 ★2 출발, 통찰 1개·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "단면의 정사영 = 밑면 정사각형(36) → 36 = S cos45° → S = 36√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-107-202.png"
  latex: latex-bank/gn-geo/items/107-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 6 과 경사각 45°를 교체하되 밑면은 직사각형(가로·세로 따로)까지 확장 가능. 제약: 자르는 평면이 옆면 네 개를 모두 가로질러야 정사영이 밑면 전체와 같아지므로 직육면체의 높이가 충분히 커야 한다(짧으면 단면이 오각형이 되어 골조가 깨짐)."
    creative: "(1) 단면의 넓이를 주고 경사각을 묻기(★2 유지) (2) 밑면을 정삼각형·정육각형 기둥으로 바꾸기(★2) (3) 자르는 평면이 밑면 모서리를 지나가도록 해 단면이 밑면 전체가 아닌 일부의 정사영이 되게 하면 도형 분할이 추가돼 ★3."
```

```yaml
- id: GN-GEO-108-e12
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    밑면이 한 변 4인 정사각형이고 옆모서리가 모두 6인 사각뿔(옆면은 합동인 이등변삼각형)에서 ⑴ 삼각형 ABC의 평면 BCDE 위로의 정사영의 넓이 ⑵ 평면 ABC와 평면 BCDE가 이루는 각 θ에 대한 cosθ 구하기.
  category: "꼭짓점의 정사영 = 밑면의 중심 → 정사영 삼각형의 넓이 → 넓이비로 이면각"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼭짓점 A의 정사영이 밑면 정사각형의 중심 O 임을 보고 삼각형 ABC의 정사영을 삼각형 OBC 로 바꿔 넓이를 직접 계산"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각을 직접 그리지 않고 ⑴ 에서 얻은 정사영 넓이와 원래 삼각형 ABC의 넓이의 비로 cosθ 를 역산(삼수선 정리 경로를 대체)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정사영의 활용 — 정사영 넓이비로 두 평면이 이루는 각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ A의 정사영은 밑면의 중심 O 이므로 정사영은 삼각형 OBC, 넓이 = (1/2)·4·2 = 4.
    ⑵ 삼각형 ABC 는 밑변 4·옆모서리 6 인 이등변삼각형이라 높이 √(36−4)=4√2, 넓이 8√2. cosθ = 4/(8√2) = √2/4.
    ⑴ 이 ⑵ 의 재료가 되도록 설계된 유도형이라 「정사영 넓이 → 이면각」 골조가 이 단원에서 처음 드러나는 자리. 필수 예제 ★2 출발, 통찰 2개(RT d1·BW d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: "A의 정사영 = 밑면 중심 O → [OBC]=4 → cosθ = [OBC]/[ABC] = 4/(8√2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4$ ⑵ $\dfrac{\sqrt{2}}{4}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-108-e12.png"
  latex: latex-bank/gn-geo/items/108-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변 4·옆모서리 6 을 교체. 제약: 옆모서리 > 밑변/√2 여야 사각뿔이 성립하고, 삼각형 ABC의 높이 √(옆모서리² − (밑변/2)²) 가 깔끔한 무리수가 되도록 (4,6)·(6,10)·(8,12) 류로 맞춘다. 그림의 라벨 A(꼭짓점)-BCDE(밑면)은 고정."
    creative: "(1) cosθ 대신 tanθ 나 이면각의 크기를 묻기(★3 유지) (2) 삼각형 ABC 대신 옆면이 아닌 단면(예: 대각선을 포함한 평면 ABD)으로 바꾸면 정사영 도형 식별이 어려워져 ★3~4 (3) ⑴ 없이 ⑵ 만 단독 출제하면 유도가 사라져 ★4 (4) 사각뿔을 삼각뿔로 바꾸면 중심이 무게중심으로 바뀌어 106-200 골조와 결합."
```

```yaml
- id: GN-GEO-108-203
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직육면체에서 AB=AD=2, AE=3일 때 평면 AFC와 평면 EFGH가 이루는 각 θ에 대한 cosθ 구하기.
  category: "삼각형 AFC의 밑면 위로의 정사영 = 삼각형 EFG → 넓이비"
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 평면의 교선을 그려 이면각을 직접 잡는 대신 삼각형 AFC의 밑면 위로의 정사영이 삼각형 EFG 임을 보고 cosθ 를 넓이비로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이비로 두 평면이 이루는 각(직육면체 단면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A→E, F→F, C→G 이므로 정사영은 삼각형 EFG, 넓이 2. 삼각형 AFC 는 AF=FC=√13, AC=2√2 인 이등변삼각형이라 높이 √11, 넓이 √22. cosθ = 2/√22 = √22/11.
    평면 AFC와 밑면의 교선이 도형 밖으로 나가 이면각을 직접 그리기 어려운 배치라 넓이비 경로가 사실상 유일한 실용 해법(RT d2). 확인체크 ★2 출발이나 무리수 삼각형 넓이 계산과 통찰 1개(d2)·M_total 7 로 +1 → ★3.
  tier: star_3
  mechanism_primary: "[AFC]=√22, 정사영 [EFG]=2 → cosθ = [EFG]/[AFC] = √22/11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{22}}{11}$'
  answer_source: "답지"
  figure: "crop:fig-108-203.png"
  latex: latex-bank/gn-geo/items/108-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=AD=2, AE=3 의 세 모서리를 교체. 제약: AB=AD 를 유지해야 삼각형 AFC 가 이등변이 되어 높이 계산이 한 줄로 끝난다. AB≠AD 로 두면 헤론 공식이 필요해 Mₖ 가 크게 오른다. cosθ 가 유리화되도록 AE 를 정수로."
    creative: "(1) 평면 AFC 대신 평면 AFH·ACH 로 바꾸기(★3 유지) (2) 이면각 대신 점 E에서 평면 AFC까지의 거리를 묻으면 부피 이용 경로가 추가돼 ★4 (3) 밑면을 EFGH가 아니라 옆면 BFGC 로 바꾸면 정사영 도형이 달라져 식별 난도가 오르고 ★3~4."
```

```yaml
- id: GN-GEO-108-204
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 2인 정육면체에서 모서리 BF의 중점을 K라 할 때 평면 CEK와 평면 EFGH가 이루는 각 θ에 대한 cosθ 구하기.
  category: "삼각형 CEK의 밑면 위로의 정사영 = 삼각형 GEF → 넓이비"
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 CEK와 밑면의 교선이 그림에 보이지 않으므로 삼각형 CEK의 정사영이 삼각형 GEF 임을 보고 이면각을 넓이비로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이비로 두 평면이 이루는 각(정육면체 단면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C→G, E→E, K→F 이므로 정사영은 삼각형 GEF, 넓이 2. 삼각형 CEK 는 EK=CK=√5, EC=2√3 인 이등변삼각형이라 높이 √2, 넓이 √6. cosθ = 2/√6 = √6/3.
    203 과 같은 골조이며 세 변이 모두 무리수라 이등변임을 먼저 확인하는 손이 하나 더 든다. 확인체크 ★2 출발, 통찰 1개(d2)·M_total 7 → +1 → ★3.
  tier: star_3
  mechanism_primary: "[CEK]=√6, 정사영 [GEF]=2 → cosθ = 2/√6 = √6/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-108-204.png"
  latex: latex-bank/gn-geo/items/108-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 2 와 K의 위치(BF의 중점 → 1:3 내분 등)를 교체. 제약: K가 중점일 때만 EK=CK 인 이등변이 되어 높이가 한 줄로 나온다. 중점이 아니면 헤론 공식이 필요하므로 Mₖ 상승을 감수할 때만 바꾼다."
    creative: "(1) 평면 CEK 대신 평면 AGK 류로 바꾸기(★3 유지) (2) cosθ 가 아니라 삼각형 CEK의 넓이를 묻기(★2로 하락) (3) K를 모서리 위의 매개변수 점으로 두고 cosθ 를 최대로 하는 위치를 묻게 하면 Mₐ·통찰이 올라 ★4~5."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-109-205
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 모서리의 길이가 2인 정육면체에서 직선 DF와 평면 AEHD가 이루는 각 θ에 대한 cosθ 구하기.
  category: "직선과 평면이 이루는 각 → 정사영 DE 로 환원 → 길이비"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각 — 정사영의 길이비로 cos 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F의 수선의 발은 E, D는 평면 위이므로 DF의 정사영은 DE. DE=2√2, DF=2√3 → cosθ = 2√2/(2√3) = √6/3.
    정사영이 면 위라 수선의 발이 바로 보이고 분기가 없다. STEP 1 ★2 출발, 통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "F의 수선의 발 = E → 정사영 DE → cosθ = DE/DF = 2√2/2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-109-205.png"
  latex: latex-bank/gn-geo/items/109-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 2 는 임의 양수로 교체 가능하며 답은 모서리에 무관한 √6/3 로 고정된다. 제약: 직육면체로 바꾸면 값이 달라지므로 세 모서리를 모두 지정해야 하고, 이때 DE·DF 가 각각 두 항·세 항 피타고라스로 계산된다."
    creative: "(1) 같은 직선 DF와 다른 면(ABCD·ABFE)이 이루는 각으로 바꾸기(★2 유지) (2) sinθ·tanθ 를 묻기(★2) (3) 평면을 대각평면 AEGC 로 바꾸면 수선의 발 식별이 추가돼 ★3(110-210 골조)."
```

```yaml
- id: GN-GEO-109-206
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    평면 α 위의 한 변 6인 정사각형 ABCD의 평면 β 위로의 정사영이 사각형 A'B'C'D'이고 두 평면이 이루는 각이 30°, 직선 BC가 β와 평행할 때 사각형 A'B'C'D'의 둘레의 길이 구하기.
  category: "교선 평행 변은 길이 보존 · 수직 변만 cos30° 배 → 둘레"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사영은 길이를 일률적으로 cosθ 배 하지 않는다는 점을 조건 BC 평행에서 읽어, 교선과 평행한 BC·AD는 6 그대로, 교선에 수직인 AB·CD만 6cos30° 로 나누어 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 길이 — 방향에 따라 달라지는 축소(교선 평행·수직 성분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC가 β에 평행이므로 B'C'=6, AB는 교선에 수직이라 A'B'=6cos30°=3√3. 둘레 = 2(6+3√3)=12+6√3.
    둘레 전체에 cos30°를 곱하는 것이 전형적 오답(T-표기)이고, 방향별로 축소율이 다르다는 점이 문항의 전부다.
    [분류 이슈] STEP 1 라벨(★2 출발)이나 이 통찰(EQV d2)이 문항의 핵심이라 ★3 으로 기록.
  tier: star_3
  mechanism_primary: "BC는 교선 평행이라 보존(6) · AB는 수직이라 6cos30° → 둘레 12+6√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\sqrt{3}+12$'
  answer_source: "답지"
  figure: "crop:fig-109-206.png"
  latex: latex-bank/gn-geo/items/109-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 6 과 각 30°를 교체. 제약: cos 가 특수각이어야 둘레가 정리되고, 정사각형을 직사각형(가로 p·세로 q)으로 바꾸면 둘레 = 2(p + q cosθ) 로 일반화된다. 「BC가 β와 평행」 조건은 반드시 유지해야 방향별 축소율이 확정된다."
    creative: "(1) 둘레 대신 정사영 사각형의 넓이를 묻기(S cosθ 한 줄이라 ★2로 하락) (2) 정사각형을 교선과 45° 기울여 두면 두 변 모두 성분 분해가 필요해 ★4(111-215 골조) (3) 정사영 둘레를 주고 각을 묻는 역방향(★3 유지)."
```

```yaml
- id: GN-GEO-109-207
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    밑면이 한 변 2인 정사각형이고 OA=OB=OC=OD=a인 사각뿔에서 평면 OAB와 평면 ABCD가 이루는 각이 45°일 때 a의 값 구하기.
  category: "이면각의 평면각(밑면 중심 → AB의 중점) → 옆모서리 역산"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이면각 45°가 먼저 주어지고 옆모서리 a를 역추적하는 구조 — 밑면 중심 M과 AB의 중점 N을 잡아 직각삼각형 OMN 에서 ON을 먼저 복원한 뒤 a로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이면각이 주어진 사각뿔에서 모서리 길이 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O의 정사영은 밑면의 중심 M, AB의 중점 N에 대해 ON⊥AB, MN⊥AB 이므로 ∠ONM이 이면각. MN=1, cos45°=MN/ON → ON=√2, a=OA=√(ON²+1²)=√3.
    삼수선 정리 표준 배치이고 계산은 두 줄. STEP 1 ★2 출발, 통찰 1개(BW d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "∠ONM=45°(N=AB의 중점, M=밑면 중심) → ON=MN/cos45°=√2 → a=√(ON²+1)=√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-109-207.png"
  latex: latex-bank/gn-geo/items/109-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변 2 와 이면각 45°를 교체. 제약: a > (밑변/√2) 여야 사각뿔이 성립하므로 이면각이 0°보다 크게 나오는 조합만 허용되고, cos 가 특수각이어야 a가 깔끔하다. 옆모서리가 모두 같다는 조건은 유지해야 O의 정사영이 밑면 중심이 된다."
    creative: "(1) a를 주고 이면각을 묻는 순방향(★2 유지) (2) 옆면과 밑면이 이루는 각 대신 이웃한 두 옆면이 이루는 각을 묻기(교선이 옆모서리라 ★4) (3) 사각뿔의 부피·겉넓이를 함께 묻기(★3) (4) 108-e12 처럼 정사영 넓이비 경로로 풀게 조건을 바꾸면 ★3."
```

```yaml
- id: GN-GEO-109-208
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 모서리의 길이가 2인 정육면체에서 CG, DH의 중점을 각각 M, N이라 할 때 사각형 AEFB의 평면 NEFM 위로의 정사영의 넓이 구하기.
  category: "교선 EF에 수직인 단면에서 이면각 → 정사영의 넓이 공식"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 평면의 교선이 EF 임을 보고 EF에 수직인 단면(정사각형 AEHD)으로 옮겨 이면각을 평면각 ∠AEN 으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 비스듬한 평면 위로의 정사영(교선 수직 단면에서 각 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평면 AEFB와 평면 NEFM의 교선은 EF이고, EF에 수직인 면 AEHD 안에서 EA와 EN이 이루는 각이 이면각. EA=2, EN=√5 → cosθ=2/(2√5)=1/√5. [AEFB]=4 → 4/√5 = 4√5/5.
    교선을 찾고 그에 수직인 단면으로 옮기는 표준 절차 한 번이면 끝난다. STEP 1 ★2 출발, 통찰 1개(RT d1)·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "교선 EF → 수직 단면 AEHD 에서 cosθ=1/√5 → S'=4cosθ=4√5/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: "crop:fig-109-208.png"
  latex: latex-bank/gn-geo/items/109-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 2 와 M, N 의 내분비(중점 → 1:3 등)를 교체하되 M, N 의 높이는 같게 유지해야 NEFM 이 평면 사각형이 된다. 제약: 높이를 h로 두면 cosθ = 2/√(4+h²) 이므로 h를 2나 2√3 등으로 잡아야 답이 유리화된다."
    creative: "(1) 정사영하는 도형을 사각형 ABCD·DCGH 로 바꾸기(교선이 달라져 ★2~3) (2) 넓이 대신 두 평면이 이루는 각의 tan 을 묻기(★2) (3) M, N 을 각각 다른 높이에 두면 NEFM 이 평면이 아니게 되므로 변형 금지 지점."
```

```yaml
- id: GN-GEO-109-209
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구 모양의 애드벌룬이 지면 위에 떠 있고 태양 광선이 지면과 이루는 각이 60°일 때 그림자의 넓이가 6√3π m²이다. 애드벌룬의 반지름 구하기.
  category: "광선에 수직인 대원 → 그 평면과 지면이 이루는 각 30° → 정사영 넓이 역산"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구의 그림자를 광선에 수직인 대원(넓이 πr²)의 정사영으로 바꾸고, 광선이 지면과 이루는 각 60°를 대원의 평면과 지면이 이루는 각 30°(여각)로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 활용 — 구의 그림자(광선각의 여각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    광선 방향에서 본 구의 윤곽은 반지름 r인 대원이고, 그 평면은 광선에 수직이므로 지면과 30°를 이룬다. πr²/cos30° = 6√3π → r² = 9, r = 3.
    60°를 그대로 대입하면 틀리는 여각 함정(T-표기)이 이 문항의 전부이고, 「그림자 = 정사영」 번역도 한 단계다.
    [분류 이슈] STEP 1 라벨(★2 출발)이나 여각 변환 통찰(EQV d2)로 ★3 기록.
  tier: star_3
  mechanism_primary: "그림자 = 광선 수직 대원(πr²)의 정사영 → πr²/cos30° = 6√3π → r=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-109-209.png"
  latex: latex-bank/gn-geo/items/109-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "광선각 60°와 그림자 넓이 6√3π 를 교체. 제약: 여각의 cos 가 특수각 값이어야 r²이 완전제곱이 된다(광선각 60°→여각 30°, 45°→45°, 30°→60°). 반지름을 주고 그림자 넓이를 묻는 순방향도 같은 제약."
    creative: "(1) 반지름을 주고 그림자 넓이를 묻기(★2로 하락) (2) 애드벌룬을 원판·정사각형 판으로 바꾸면 여각 함정만 남아 ★2 (3) 그림자가 지면이 아니라 경사진 벽에 생기도록 하면 각 계산이 두 번이라 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-110-210
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정육면체에서 선분 BD와 평면 AHGB가 이루는 각 θ에 대한 sinθ 구하기.
  category: "대각평면까지의 거리 → 수선 길이와 BD의 비로 sin"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대각평면 AHGB 위로의 수선의 발이 한눈에 보이지 않으므로, 면 AEHD 단면으로 옮겨 D에서 대각선 AH에 내린 수선 길이를 D와 평면 사이의 거리로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각 — 대각평면까지의 거리 이용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B는 평면 위에 있으므로 sinθ = (D와 평면 AHGB 사이 거리)/BD. 모서리를 a라 하면 정사각형 AEHD 안에서 D→AH 수선 길이 = a/√2, BD = a√2 → sinθ = 1/2.
    모서리 길이가 주어지지 않아도 비로 정해지는 점, sin 을 묻는 점(정사영 cos 과 혼동하는 T-표기)이 확인 포인트.
    STEP 2 ★3 출발, 통찰 1개(RT d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "sinθ = (D에서 평면 AHGB까지 거리)/BD = (a/√2)/(a√2) = 1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-110-210.png"
  latex: latex-bank/gn-geo/items/110-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이가 발문에 없고 답이 모서리에 무관하므로 수를 바꿀 여지가 없다. 수치 변형을 넣으려면 직육면체로 바꾸고 세 모서리를 지정한다. 제약: 이때 D→AH 수선 길이가 더 이상 대각선의 절반이 아니므로 직각삼각형을 새로 세워야 한다."
    creative: "(1) sin 대신 cos·tan 을 묻기(★3 유지) (2) 선분 BD 대신 공간대각선 BH·AG 로 바꾸기(★3) (3) 평면을 AEGC·BDHF 로 바꿔 수선의 발이 대각선 중점에 오게 하기(★3) (4) 모서리를 a로 두고 sinθ 가 a에 무관함을 보이라고 하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-GEO-110-211
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    밑면의 반지름이 6인 원기둥을 밑면과 30°의 각을 이루는 평면으로 자른 단면이 타원일 때 이 타원의 두 초점 사이의 거리 구하기.
  category: "단축 = 밑면 지름 · 장축 = 지름/cos30° → 초점 공식"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간도형(정사영)에서 얻은 장축·단축을 이차곡선 단원의 초점 공식 c²=a²−b² 에 넘기는 단원 결합 — 어느 쪽이 정사영으로 보존되는 축인지도 함께 판정해야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원기둥의 빗단면 타원 — 장축·단축과 초점(정사영 + 이차곡선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    단면 타원을 밑면에 정사영하면 반지름 6인 원이므로 밑면에 평행한 축(단축)은 2b=12 로 보존되고, 경사 방향 축은 2a=12/cos30°=8√3. c=√(48−36)=2√3 → 두 초점 사이 거리 4√3.
    보존되는 축과 늘어나는 축을 뒤집으면 바로 틀린다(T-표기). 107-e11 의 넓이 대신 초점을 물어 이차곡선 단원과 결합한 판.
    STEP 2 ★3 출발, 통찰 1개(XU d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "단축 2b=12(보존) · 장축 2a=12/cos30°=8√3 → 2c=2√(a²−b²)=4√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/110-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 6 과 경사각 30°를 교체. 제약: a²−b² = r²(1/cos²θ − 1) = r²tan²θ 이므로 c = r tanθ 로 깔끔하다 — tanθ 가 특수각이면 답이 정리된다. 원기둥 높이가 2r tanθ 이상이어야 완전한 타원 단면이 된다."
    creative: "(1) 이심률을 묻기(e = sinθ 로 정리되는 좋은 확장 ★3) (2) 초점 사이 거리를 주고 경사각을 묻는 역방향(★3 유지) (3) 넓이·둘레로 바꾸면 넓이는 ★2(107-e11), 둘레는 초등함수로 안 나오므로 금지 (4) 원기둥을 타원기둥으로 바꾸면 단축도 변해 ★4."
```

```yaml
- id: GN-GEO-110-212
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 모서리의 길이가 2인 정사면체에서 AD의 중점을 M이라 할 때 삼각형 BCM의 평면 BCD 위로의 정사영의 넓이 구하기.
  category: "정사영은 중점을 보존 → M의 상 = GD의 중점 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각을 찾는 대신 정사영이 중점을 보존함을 이용해 M의 상을 A의 상(무게중심 G)과 D의 중점으로 특정하고, 정사영 삼각형의 넓이를 밑면 안에서 직접 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 정사면체에서 중점의 상 특정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A의 상은 무게중심 G, D의 상은 D이므로 M(=AD의 중점)의 상 M'은 GD의 중점. BC에서 D까지 거리 √3, G까지 √3/3 이므로 M'까지는 2√3/3, 정사영 넓이 = (1/2)·2·(2√3/3) = 2√3/3.
    삼각형 BCM의 넓이와 이면각을 각각 구하는 경로보다 상을 직접 그리는 쪽이 훨씬 짧다.
    STEP 2 ★3 출발, 통찰 1개(RT d2)·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "M의 상 = GD의 중점 M' → [BCM'] = (1/2)·BC·(M'과 BC 사이 거리) = 2√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-110-212.png"
  latex: latex-bank/gn-geo/items/110-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 2 를 임의 양수 a 로 바꾸면 답은 a²√3/6. M의 위치를 AD의 1:2 내분점 등으로 바꿔도 상이 같은 비로 내분되므로 골조가 유지된다. 제약: 정사면체를 유지해야 A의 상이 무게중심이 된다."
    creative: "(1) 삼각형 BCM의 넓이를 함께 묻고 cosθ 를 역산하게 하기(★3~4) (2) 정사영 평면을 BCD 대신 ABC 로 바꾸기(상 특정이 어려워져 ★4) (3) M을 AD 위의 매개변수 점으로 두고 정사영 넓이의 최솟값을 묻게 하면 ★4~5 (4) 111-217 처럼 사각형 도형으로 확장."
```

```yaml
- id: GN-GEO-110-213
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    AD=DC=2, AE=5인 직육면체에서 CG를 3:2로 내분하는 점을 P라 할 때 삼각형 GHF의 평면 PHF 위로의 정사영의 넓이 구하기.
  category: "교선 HF의 중점에서 삼수선으로 이면각 → 넓이 공식"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 평면의 교선 HF의 중점 L을 잡으면 GL⊥HF, PL⊥HF 가 되어 이면각이 평면각 ∠GLP 로 바뀌고, 직각삼각형 PGL 하나로 cosθ 가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 교선의 중점에서 삼수선 정리로 이면각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    [GHF] = (1/2)·2·2 = 2. HF의 중점 L에 대해 GL=√2, PG=2(CG=5를 3:2로 내분하므로 CP=3, PG=2), PL=√6 → cosθ = GL/PL = √3/3. 정사영 넓이 = 2·√3/3 = 2√3/3.
    3:2 내분에서 어느 쪽이 2인지 잘못 읽으면 바로 틀린다(T-표기).
    STEP 2 ★3 출발, 통찰 1개(RT d2)·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "HF의 중점 L → ∠GLP 가 이면각 → cosθ=GL/PL=√2/√6 → S'=2cosθ=2√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-110-213.png"
  latex: latex-bank/gn-geo/items/110-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD=DC=2, AE=5 와 내분비 3:2 를 교체. 제약: AD=DC 를 유지해야 GL 이 정사각형 대각선의 절반으로 바로 나온다. PG 와 GL 로 cosθ = GL/√(GL²+PG²) 이므로 근호가 정리되도록 PG 를 GL 의 정수배 근처로 잡는다."
    creative: "(1) 정사영의 넓이를 주고 P의 위치를 묻는 역방향(★4) (2) 삼각형 GHF 대신 사각형 EFGH 전체를 정사영(도형 분할이 필요해 ★4) (3) 이면각의 cos 자체를 묻기(★3 유지) (4) P를 CG 위의 매개변수 점으로 두고 정사영 넓이의 범위를 묻기(★4~5)."
```

```yaml
- id: GN-GEO-110-214
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 모서리의 길이가 4인 정육면체에서 두 모서리 AD, FG의 중점을 각각 M, N이라 할 때 평면 ABCD와 평면 CMEN이 이루는 각 θ에 대한 cosθ 구하기.
  category: "네 점이 이루는 평면 마름모의 넓이 → 정사영 넓이비로 이면각"
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C, M, E, N 이 실제로 한 평면 위의 마름모(네 변 2√5, 대각선 EC=4√3·MN=4√2)임을 확인하고 넓이를 대각선 곱의 절반으로 계산"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각을 교선(평면 CMEN과 윗면의 교선)에서 삼수선으로 직접 잡는 갈래 대신, 마름모의 윗면 위로의 정사영(사각형 A-M-C-BC의 중점, 넓이 8)을 써서 넓이비로 구하는 갈래를 택하면 계산이 크게 짧아진다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 넓이비로 두 평면이 이루는 각(평면 사각형 단면)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    EM과 EN을 합하면 EC가 되므로 네 점이 한 평면 위에 있고 EMCN 은 한 변 2√5 의 마름모, 넓이 = (1/2)(4√3)(4√2) = 8√6. 윗면 ABCD 위로의 정사영은 E→A, N→BC의 중점 이므로 사각형 A-M-C-(BC의 중점), 넓이 8. cosθ = 8/(8√6) = √6/6.
    교선이 정육면체 밖으로 나가 삼수선 경로가 길고, 「평면임을 확인 → 마름모 넓이 → 정사영 도형 결정」 세 손이 모두 필요하다.
    STEP 2 ★3 출발, 통찰 2개(RT d2·SC d2) → +1 → ★4(저노출 유형 RT·SC 포함으로 §2.13 충족).
  tier: star_4
  mechanism_primary: "EMCN은 평면 마름모(넓이 8√6) → 윗면 위로의 정사영 넓이 8 → cosθ = 8/(8√6) = √6/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{6}}{6}$'
  answer_source: "답지"
  figure: "crop:fig-110-214.png"
  latex: latex-bank/gn-geo/items/110-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 4 는 임의 양수 a 로 교체 가능하고 cosθ = √6/6 은 a에 무관하다. 제약: M, N 이 각각 AD, FG 의 중점일 때만 네 점이 한 평면 위에 놓이므로(EM+EN=EC) 내분비를 바꾸면 평면 조건이 깨진다 — 수치 변형은 모서리 길이만."
    creative: "(1) 마름모 EMCN 의 넓이 자체를 묻기(★3으로 하락) (2) 이면각 상대를 윗면 대신 대각평면 BDHF 로 바꾸기(★4 유지) (3) M, N 을 모서리 위 매개변수 점으로 두고 네 점이 한 평면 위에 있을 조건을 먼저 묻게 하면 ★5 (4) 단면의 둘레·대각선 길이를 묻는 보조 소문항을 붙이면 ★3~4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-111-215
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 평면 α, β가 이루는 각이 30°이고 α 위의 선분 AB가 두 평면의 교선과 이루는 각이 45°, AB=4일 때 AB의 β 위로의 정사영 A'B'의 길이 구하기.
  category: "교선 평행 성분(보존) · 수직 성분(cos30° 배) 분해 → 피타고라스"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "직선 AB가 β와 이루는 각을 직접 알 수 없으므로 AB를 교선에 평행한 성분(정사영에서 길이 보존)과 교선에 수직인 성분(cos30° 배로 축소)으로 분해하고, 두 성분이 여전히 수직임을 써서 피타고라스로 합성"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "정사영의 길이 — 교선 평행·수직 성분 분해(방향별 축소율)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교선 방향 성분 4cos45°=2√2 는 그대로 남고, 교선 수직 성분 4sin45°=2√2 는 2√2·cos30°=√6 로 줄어든다. 두 성분은 β 위에서도 수직이므로 A'B'=√(8+6)=√14.
    AB·cos30° 로 한 번에 처리하는 오답이 전형적(T-표기)이고, 이 단원에서 「정사영은 방향에 따라 다르게 줄어든다」를 가장 깊이 쓰는 자리(EQV d3).
    실력 UP ★4 출발, 통찰 1개(d3)·M_total 7 → ★4 유지.
  tier: star_4
  mechanism_primary: "교선 평행 성분 2√2 보존 · 수직 성분 2√2cos30°=√6 → A'B'=√(8+6)=√14"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{14}$'
  answer_source: "답지"
  figure: "crop:fig-111-215.png"
  latex: latex-bank/gn-geo/items/111-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=4, 이면각 30°, 교선과의 각 45°를 각각 교체. 제약: A'B'² = AB²(cos²φ + sin²φ cos²θ) 이므로 φ·θ 를 특수각으로 두어야 근호 안이 정수가 된다(45°/30° 조합이 √14 로 가장 깔끔). AB의 한 끝이 교선 위에 있다는 배치는 그림에 고정."
    creative: "(1) A'B' 를 주고 교선과 이루는 각을 묻는 역방향(★4 유지) (2) 직선 AB가 β와 이루는 각을 묻기(sinθ = sinφ sin30° 관계로 ★4) (3) 선분 대신 α 위의 정사각형을 교선과 45°로 놓고 정사영 둘레를 묻기(★5 후보) (4) 교선과의 각을 0°·90° 로 두면 109-206 의 단순판(★3)으로 내려간다."
```

```yaml
- id: GN-GEO-111-216
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    한 모서리의 길이가 2인 정육면체 ABCD-EFGH에서 DH의 중점을 M, GH의 중점을 N이라 하고 선분 FM 위의 점 P에 대하여 NP의 길이가 최소일 때, NP의 평면 FHM 위로의 정사영의 길이는? (5지선다)
  category: "NP 최소 = 수선의 발 → NP 길이 → 평면까지의 거리로 정사영 길이"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「NP가 최소」라는 결과 조건을 P가 N에서 직선 FM에 내린 수선의 발이라는 위치 조건으로 되돌리고, 삼각형 FMN의 넓이를 두 가지로 계산해 높이 NP를 얻는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "M이 DH의 중점이므로 평면 FHM이 대각평면 BFHD 임을 알아보고, 정사영의 길이를 빗변 NP와 N에서 그 평면까지의 거리로 만든 직각삼각형으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 길이 — 최소 조건으로 결정된 선분의 정사영(기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    FM=3, FN=√5, MN=√2 인 삼각형에서 N에서 FM에 내린 높이가 NP=1. 평면 FHM은 대각평면 BFHD 이고 N(GH의 중점)에서 그 평면까지의 거리는 √2/2 → 정사영 길이 = √(1−1/2) = √2/2.
    최소 조건 해석과 대각평면 인식이 각각 한 손씩 들고, NP 자체를 답하는 함정(T-표기)이 선택지에 깔려 있다.
    실력 UP ★4 출발, 통찰 2개(BW d2·RT d2)·기출 태그 → ★4(통찰 3개 미만이고 SC/VF/SYM/XU 부재라 ★5 조건 미달).
  tier: star_4
  mechanism_primary: "P = N에서 FM에 내린 수선의 발(NP=1) → N과 평면 FHM(=BFHD) 사이 거리 √2/2 → 정사영 = √(1−1/2) = √2/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-111-216.png"
  latex: latex-bank/gn-geo/items/111-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 2 는 임의 양수 a 로 교체 가능하고 답은 a에 비례한다(a=2 에서 √2/2). M, N 의 내분비를 바꾸면 삼각형 FMN의 세 변이 모두 무리수가 되어 Mₖ 가 크게 오른다. 제약: M이 DH의 중점일 때만 평면 FHM = 대각평면 BFHD 라는 단축 경로가 살아 있다 — 바꾸면 평면식을 새로 세워야 한다."
    creative: "(1) 정사영의 길이 대신 NP와 평면 FHM이 이루는 각을 묻기(★4 유지) (2) P를 FM 위의 매개변수 점으로 두고 정사영 길이의 최댓값을 묻기(★5 후보) (3) N을 다른 모서리의 중점으로 바꾸기(★4) (4) 최소 조건을 빼고 P를 특정 내분점으로 주면 ★3 으로 하락."
```

```yaml
- id: GN-GEO-111-217
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    한 모서리의 길이가 8인 정사면체에서 BC의 중점을 M, BD의 중점을 N이라 할 때 사각형 CDNM의 평면 AMN 위로의 정사영의 넓이 구하기.
  category: "사각형 넓이 = 밑면 − 작은 삼각형 → 교선 MN에서 이면각 → 넓이 공식"
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사다리꼴 CDNM 의 넓이를 직접 구하지 않고 [BCD] − [BMN] = 16√3 − 4√3 = 12√3 으로 바꿔 처리"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 평면의 교선이 MN 이고 A·무게중심 G 가 모두 MN 에서 같은 거리에 있으므로 MN의 중점 L을 잡아 이면각을 ∠ALG 로 환원, cosθ = GL/AL 로 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정사영의 넓이 — 정사면체 단면(교선이 중점 연결선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    [CDNM] = 12√3. 교선 MN의 중점 L에 대해 AL⊥MN, GL⊥MN 이므로 ∠ALG 가 이면각. GL=2√3/3, AL=2√11 → cosθ = 1/√33. 정사영 넓이 = 12√3/√33 = 12√11/11.
    정사영하는 평면이 밑면이 아니라 비스듬한 평면 AMN 이라 「어느 평면에서 보는가」를 뒤집어야 하고, 무게중심까지의 거리와 정사면체 높이가 모두 필요하다.
    실력 UP ★4 출발, 통찰 2개(EQV d1·RT d2)·M_total 7 → ★4 유지.
  tier: star_4
  mechanism_primary: "[CDNM]=[BCD]−[BMN]=12√3 → MN의 중점 L에서 cosθ=GL/AL=1/√33 → S'=12√11/11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{12\sqrt{11}}{11}$'
  answer_source: "답지"
  figure: "crop:fig-111-217.png"
  latex: latex-bank/gn-geo/items/111-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 8 은 임의 양수 a 로 교체 가능하고 넓이는 a²에 비례한다(cosθ=1/√33 은 a에 무관). 제약: M, N 이 중점이어야 MN∥CD 이고 A·G 가 MN 에서 같은 거리에 놓여 ∠ALG 환원이 성립한다. 내분비를 바꾸면 이면각을 새로 세워야 하므로 수치 변형은 모서리만."
    creative: "(1) 삼각형 BMN 의 평면 AMN 위로의 정사영으로 바꾸기(★3~4) (2) 평면 AMN과 밑면이 이루는 각의 cos 만 묻기(★3) (3) M, N 을 매개변수 내분점으로 두고 정사영 넓이의 최솟값을 묻기(★5 후보) (4) 정사면체를 정사각뿔로 바꾸면 무게중심이 밑면 중심으로 바뀌어 108-e12 계열과 합쳐진다."
```

```yaml
- id: GN-GEO-111-218
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    밑넓이가 12π이고 높이가 5인 원기둥 모양의 컵에 높이 3만큼 물이 채워져 있다. 물이 쏟아지기 직전까지 최대로 기울였을 때 수면의 넓이 구하기(컵의 두께는 무시).
  category: "부피 보존(중심 높이 3) → 최대 경사각 30° → 수면의 정사영 = 밑면 원"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "기울어진 수면이 완전한 타원이면 수면 아래 입체가 중심에 대해 대칭이므로 부피 = 밑넓이 × (양 끝 높이의 평균) — 기울여도 평균 높이가 3으로 유지된다는 대칭 논증"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「쏟아지기 직전까지 최대로」를 수면이 컵의 위 가장자리를 지나는 조건(한쪽 높이 5, 반대쪽 1)으로 번역하고 반대쪽 높이가 0 이상인지 확인"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수면(타원)의 밑면 위로의 정사영이 밑면 원 전체임을 보고 S = 밑넓이/cosθ 로 환원"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "정사영의 넓이 활용 — 기울인 원기둥 컵의 수면(부피 보존 + 최대 경사)"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    밑넓이 12π 에서 반지름 2√3. 부피 보존으로 양 끝 높이의 평균이 3, 최대 기울임에서 한쪽이 5이므로 반대쪽은 1. tanθ = (5−1)/(2·2√3) = 1/√3 → θ=30°. 수면의 정사영이 밑면 원이므로 S = 12π/cos30° = 8√3π.
    부피를 적분이나 분할 없이 대칭으로 처리하는 단계, 경계 조건 해석(T-경계), 정사영 환원이 모두 있어야 풀린다. 이 범위에서 통찰이 가장 두꺼운 문항.
    실력 UP ★4 출발, 통찰 3개 + I-SYM 포함 → +1 → ★5.
    [분류 이슈] §2.14 는 ★5 에 novelty_score > 0 을 요구하지만 이 자산은 규약상 novelty_score 0 고정이라 해당 게이트 판정은 보류한다.
  tier: star_5
  mechanism_primary: "부피 보존으로 양 끝 높이 평균 3 → 최대 기울임에서 5와 1 → tanθ=4/(4√3) → θ=30° → S=12π/cos30°=8√3π"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$8\sqrt{3}\pi$'
  answer_source: "답지"
  figure: "crop:fig-111-218.png"
  latex: latex-bank/gn-geo/items/111-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑넓이 12π(반지름 2√3), 높이 5, 물 높이 3 을 교체. 제약: 반대쪽 높이 = 2×(물 높이) − (컵 높이) 가 0 이상이어야 수면이 완전한 타원이 된다(물이 절반 이하이면 수면이 밑면에 닿아 골조가 깨짐). tanθ = (컵 높이 − 반대쪽 높이)/(2r) 이 특수각이 되도록 r 과 높이를 맞춘다."
    creative: "(1) 물의 높이를 묻는 역방향(수면 넓이를 주고 원래 수위 ★5 유지) (2) 반대쪽 높이가 음수가 되도록 물을 적게 넣어 수면이 밑면에 걸치게 하면 타원 일부가 잘려 정사영 골조가 깨진다 — 변형 금지 지점 (3) 기울일 때 흘러내리는 물의 부피를 묻기(★5) (4) 컵을 정육면체·각기둥으로 바꾸면 수면이 다각형이 되어 ★4 로 내려간다."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 3 · ★2 9 · ★3 9 · ★4 4 · ★5 1
- 통찰형 19 · 절차형 7 · premium 0
- 통찰 유형 분포(총 25개 라벨): I-RT 12 · I-EQV 5 · I-BW 5 · I-SC 1 · I-XU 1 · I-SYM 1 · I-MI 0 · I-PD 0 · I-CON 0 · I-VF 0
- depth 분포: d1 7 · d2 16 · d3 2 (감쇠 적용 없음 — effective_depth = depth)
- 대상층: 하위권 3 · 중하위권 4 · 중위권 13 · 중상위권 5 · 상위권 1
- type_hint 상위: 「정사영의 넓이비로 두 평면이 이루는 각」 4(108-e12·108-203·108-204·110-214) · 「정사영의 넓이(도형·빗단면)」 4(105-198·107-e11·107-201·107-202) · 「정사영의 길이(정의·공식·입체)」 4(105-197·106-e10·106-199·106-200) · 「정사영의 넓이(입체 속 도형·교선 수직 단면)」 4(109-208·110-212·110-213·111-217) · 「직선과 평면이 이루는 각」 2(109-205·110-210)
- 그림: 22문에 크롭 있음. 그림 없는 4문 = 105-197 · 105-198 · 107-201 · 110-211

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-107-201 | 통찰 0·M_total 5 로 v3.8 −1 규칙상 ★1 후보이나, 「도형 넓이 계산 + 공식 대입」 두 단계라 벤더 확인체크 신호대로 ★2 유지 | ★1 / ★2 |
| GN-GEO-109-206 | 벤더 STEP 1(★2 출발)이나 「교선 평행 변은 보존·수직 변만 축소」 통찰(EQV d2)이 문항의 전부라 ★3 판정 | ★2 / ★3 |
| GN-GEO-109-209 | 벤더 STEP 1 이나 광선각 60°를 여각 30°로 바꾸는 변환이 핵심 함정이라 ★3 판정 | ★2 / ★3 |
| GN-GEO-110-211 | type_hint 를 공간도형 쪽(「원기둥의 빗단면」)으로 둘지 이차곡선 쪽(「타원의 초점」)으로 둘지 두 갈래 — 카탈로그 설계 때 결정 | ★3 |
| GN-GEO-111-218 | ★5 조건(통찰 3개 + I-SYM)은 충족하나 §2.14 의 novelty_score > 0 게이트는 이 자산 규약상 novelty_score 0 고정이라 판정 보류 | ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 공식이 두 개(길이·넓이)뿐이라 유형을 공식으로 나누면 거의 구분이 안 된다. **무엇이 어려운가**로 세워야 한다. 이 범위에서 반복된 축은 세 개다 — (a) 정사영하는 평면이 면인가 대각평면·비스듬한 평면인가(106-e10 · 110-210 · 111-216), (b) 이면각을 삼수선으로 직접 잡는가 정사영 넓이비로 역산하는가(108-e12 · 108-203 · 108-204 · 110-214 vs 109-208 · 110-213 · 111-217), (c) 정사영이 방향에 따라 다르게 축소되는가(109-206 · 111-215).
- **따로 세워야 할 유형**: 「정사영 넓이비로 이면각 구하기」는 4문이 같은 골조이므로 독립 유형(★3~4 대)으로 세운다. 「교선 평행·수직 성분 분해」(109-206 · 111-215)도 오답 패턴이 뚜렷해 독립 유형(★3~4).
- **통합해도 될 유형**: 105-197·105-198 은 「공식 기본 대입」 하나로 묶어도 된다(길이판·넓이판 구분 불필요). 107-e11·107-202 도 「기둥의 빗단면 넓이」 한 유형으로 충분하다(원/다각형 차이는 도형 넓이 계산뿐).
- **base ★ 후보**: 공식 기본 대입 ★1, 한 면 위로의 정사영 길이 ★2, 기둥의 빗단면 넓이 ★2, 교선 수직 단면에서 이면각 ★2~3, 정사영 넓이비로 이면각 ★3, 대각평면까지의 거리 ★3, 성분 분해 ★4, 최소 조건 결합 ★4, 부피 보존 + 최대 경사 ★5.
- 이 단원은 단독 통찰이 얕고(대부분 RT d1~d2) 난이도는 **입체 안에서 도형을 식별하는 부담**에서 나온다. 카탈로그 설계 때 M 축(특히 Mₛ)과 「그림에서 교선이 보이는가」를 유형 속성으로 함께 기록하면 변별이 쉬워진다.
