---
name: mechanism-데이터-RPM-CALC2-02-p3
description: RPM 미적분Ⅱ 02 급수(3/3 · 유형 14~유형 UP 17·시험에 꼭 나오는 문제·서술형·실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 02 급수
  unit_code: CALC2-02
  part: "3/3"
  extract_range: "33~39쪽 · 0214~0256"
  total_problems: 43
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 02 급수 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 02 급수 단원의 마지막 범위(33~39쪽 · 0214~0256 · 43문항)를 다룬다. 구역은 유형 14·15(등비급수의 도형 활용 — 길이·둘레 · 8문) → 유형 UP 16·17(넓이·실생활 · 8문) → 시험에 꼭 나오는 문제(21문) → 서술형 주관식(4문) → 실력 Up(2문) 순이다. 유형 구역에는 level(중·상중)과 tag(대표문제·서술형)가 붙어 있고, 종합 구역(시험에 꼭 나오는 문제 이후)에는 tag(중요·수능 기출·평가원 기출)만 있고 level 이 없다. 그림은 18문(도형 활용 전부와 종합 구역의 도형 문항 0248·0249·0254·0255·0256).

★ 는 벤더 신호를 출발점(유형 ★2 · level 상중 ★3 · 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 ★3 · 실력 Up ★4)으로 두고 다음 규칙으로 ±1 조정했다. 통찰 없음·M_total 4 이면 −1(단 서로 다른 개념 도구를 둘 이상 엮는 문항은 ★2 유지) · 출발점 ★3 이상인데 통찰 없음·M_total ≤ 5 이면 −1 · 통찰 없음·M_total ≥ 7 이면 +1(절차형은 ★3 까지) · 통찰 1개(d1~2)는 M_total 6 이상일 때 ★3 · depth 3 또는 통찰 2개 이상은 +1. 결과는 ★1 1 · ★2 24 · ★3 17 · ★4 1 이다. insights 는 12문에 기록했고, 그중 공비를 얻는 보조선·실생활 모델링 착안(RT d1)만 있는 4문(0218·0228·0229·0249)은 견본 0041 과 같은 기준으로 insight_type 을 절차형으로 두었다(통찰형 8문). 답은 43문 모두 재계산해 전사 answer 와 일치했다.

주 용도는 숫자 변형·창의 변형의 원본이다. 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠고, 도형 문항의 `variation_notes.numeric` 에는 「공비의 원천이 되는 조건(각·내분비·내접 관계·그림 라벨)은 고정」 을 명시했다. 유형 카탈로그가 없는 과목이라 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다(도형 활용은 벤더 제목 「길이/둘레/넓이」 를 그대로 쓰되 괄호로 공비를 얻는 도구를 표시).

## 문항 데이터

### 유형 14 등비급수의 도형에의 활용: 길이

```yaml
- id: RPM-CALC2-0214
  page: 33
  vendor_label: "유형 14 등비급수의 도형에의 활용: 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    30° 로 벌어진 두 반직선 OX, OY 에서 OP₁ = 4 인 점부터 번갈아 수선의 발 P₂, P₃, … 을 내릴 때 Σ P_nP_{n+1} 의 값. 5지선다.
  category: "첫 수선 길이 → 닮음(삼각비)으로 공비 → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 길이(수선의 발 반복)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P₁P₂ = 4 sin30° = 2, OP₂ = 4 cos30° 이므로 P₂P₃ = OP₂ sin30° — 닮은 직각삼각형이 반복되어 공비 cos30° = √3/2. 합 2/(1−√3/2) = 4/(2−√3) = 4(2+√3). 삼각비로 첫째항·공비를 읽고 분모를 유리화하는 표준 골조라 통찰 없음. 유형 대표문제 ★2 출발·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "OP₁=4, 각 30° → 첫째항 4sin30°=2 · 공비 cos30° → 2/(1−√3/2) = 4(2+√3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0214.png"
  latex: latex-bank/rpm-calc2/items/0214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP₁ 의 길이(2·6·8)와 각(30°·45°·60°)을 바꿀 수 있음. 제약: 공비는 cos θ 로 0<θ<90° 이면 자동으로 |r|<1, 선택지가 유리화된 꼴로 정리되도록 각은 특수각 유지. 그림 라벨(P₁ 은 OY 위, 첫 수선은 OX 로)은 고정."
    creative: "(1) 합을 Σ OP_n 이나 Σ P_nP_{n+2} 로 바꿔 첫째항·공비만 재산정(★2 유지) (2) 각을 θ 로 두고 합이 주어진 값이 되는 cos θ 를 역산(I-BW d1 · ★3) (3) 수선 대신 각의 이등분선을 내려 공비를 삼각비가 아닌 닮음비로 얻게 하면 골조가 바뀌어 ★3."
```

```yaml
- id: RPM-CALC2-0215
  page: 33
  vendor_label: "유형 14 등비급수의 도형에의 활용: 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    빗변 √2 인 직각이등변삼각형 POQ 에서 OP, OQ 의 중점 P₁, Q₁ 을 잡는 과정을 반복할 때 PQ + P₁Q₁ + P₂Q₂ + … 의 값. 5지선다.
  category: "빗변 → 변의 길이 → 중점 반복(공비 1/2) → 등비급수 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 길이(중점·닮음 반복)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빗변 √2 이므로 PQ = OQ = 1(그림에서 직각은 Q). 중점 연결이라 P₁Q₁ = 1/2, 공비 1/2 → 1/(1−1/2) = 2. 그림에서 직각의 위치를 읽어 PQ 가 빗변이 아님을 확인하는 것이 유일한 주의점. 유형·중 ★2 출발·통찰 없음·M_total 5 → ★2 유지(하단).
  tier: star_2
  mechanism_primary: "빗변 √2 → 다리 PQ=1 → 중점 반복 공비 1/2 → 1/(1−1/2) = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0215.png"
  latex: latex-bank/rpm-calc2/items/0215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변의 길이(2√2·3√2)나 내분 비율(중점 → 1:2 내분)로 공비를 1/2 에서 1/3·2/3 으로. 제약: 직각이등변이 아닌 일반 직각삼각형으로 바꾸면 PQ 를 따로 구해야 하고, 빗변 대신 다리 길이를 주면 첫째항이 그대로 주어져 더 쉬워짐."
    creative: "(1) 합 대상을 삼각형 P_nOQ_n 의 둘레로 바꾸면 유형 15 골조(★2) (2) 첫 몇 항만 더한 부분합 S_n 을 묻고 lim 을 붙이면 급수 정의 확인(★2) (3) 중점 대신 「OP_n 위의 점 P_{n+1} 로 OP_{n+1}:P_{n+1}P_n = 2:1」 처럼 비를 문자 k 로 주고 합이 3 이 되는 k 를 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0216
  page: 33
  vendor_label: "유형 14 등비급수의 도형에의 활용: 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    자연수 n 에 대해 이차함수 y = 27ⁿx² − (9ⁿ+2·3ⁿ)x + 2 의 그래프가 x 축과 만나는 두 점 사이의 거리를 l_n 이라 할 때 Σ l_n 의 값. 5지선다.
  category: "지수식 계수의 이차식 인수분해 → 두 근의 차 → 두 등비급수의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 길이(좌표·이차함수 근의 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27ⁿx² − (9ⁿ+2·3ⁿ)x + 2 = (3ⁿx − 1)(9ⁿx − 2) 로 인수분해되어 두 근 1/3ⁿ, 2/9ⁿ. l_n = 1/3ⁿ − 2/9ⁿ (n≥1 에서 양수)이므로 Σ = 1/2 − 2·(1/8) = 1/4. 판별식 (9ⁿ−2·3ⁿ)² 으로 가도 같은 식. 지수 계수의 인수분해가 계산 부담이지만 골조는 「근 → 거리 → 등비급수 두 개」 표준이라 통찰 없음. 유형·중 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(3ⁿx−1)(9ⁿx−2)=0 → l_n = 3^(−n) − 2·9^(−n) → Σ = 1/2 − 1/4 = 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3·9·27 → 2·4·8)과 상수항(2 → 3)을 바꾸되 계수가 (aⁿx − p)(bⁿx − q) 로 인수분해되도록 유지. 제약: 두 근의 차가 n≥1 전체에서 한 부호여야 절댓값 처리가 없고, 각 등비급수의 공비가 1 보다 작아야 함."
    creative: "(1) 근 대신 꼭짓점의 y 좌표나 y 절편으로 l_n 을 정의(★2) (2) 인수분해가 안 되는 계수로 주고 판별식 √D 가 완전제곱이 되도록 설계하면 근과 계수의 관계 사용이 강제되어 Mₖ 상승 ★3 (3) 두 근을 α_n, β_n 으로 두고 Σ α_nβ_n 이나 Σ(α_n+β_n) 을 물으면 근과 계수의 관계 결합(★2~3)."
```

```yaml
- id: RPM-CALC2-0217
  page: 33
  vendor_label: "유형 14 등비급수의 도형에의 활용: 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A₁(2, 0) 에서 직선 y=x, y 축, 직선 y=−x, x 축에 차례로 수선의 발 A₂, A₃, A₄, A₅, … 를 내릴 때 A₁A₂ + A₂A₃ + A₃A₄ + … 의 값.
  category: "좌표에서 첫 수선 길이 → 45° 직각삼각형 반복(공비 1/√2) → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 길이(수선의 발 반복)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A₂ = (1, 1) 이므로 A₁A₂ = √2, A₃ = (0, 1) 이므로 A₂A₃ = 1 — 매 단계 45° 직각이등변삼각형의 빗변에서 다리로 가므로 공비 1/√2. 합 √2/(1−1/√2) = 2/(√2−1) = 2(√2+1). 45° 직선의 수선의 발은 좌표로 바로 읽히므로 통찰 없음. 유형·중 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A₁A₂ = √2(45° 삼각형) → 공비 1/√2 → √2/(1−1/√2) = 2(1+√2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2(1+\sqrt{2})$'
  answer_source: "답지"
  figure: "crop:fig-0217.png"
  latex: latex-bank/rpm-calc2/items/0217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A₁ 의 위치(2 → 4·2√2)를 바꾸면 첫째항만 바뀜. 제약: 회전 순서(y=x → y축 → y=−x → x축)와 그림 라벨은 고정, 답은 (첫째항)·(2+√2)/… 꼴로 유리화되어야 함."
    creative: "(1) Σ OA_n 이나 삼각형 OA_nA_{n+1} 의 넓이의 합으로 바꾸면 공비가 1/2 이 되어 ★2 유지 (2) 직선을 y = √3x 처럼 60° 로 바꾸면 수선의 발 좌표를 실제로 계산해야 해 I-RT d1·★3 (3) A_n 의 극한점(나선의 중심)을 묻는 변형은 좌표 급수 두 개 → ★3."
```

```yaml
- id: RPM-CALC2-0218
  page: 33
  vendor_label: "유형 14 등비급수의 도형에의 활용: 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(0, 2) 에서 직선 x+y=4 에 내린 수선의 발 P₁, P₁ 에서 x 축에 내린 수선의 발 Q₁, Q₁ 에서 다시 직선에 내린 수선의 발 P₂, … 를 반복할 때 Σ P_nQ_n 의 값.
  category: "좌표로 P₁ → 첫 수선 길이 3 → 45° 구조로 공비 1/2 → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 x+y=4 의 기울기 −1 을 45° 직각이등변삼각형 사슬로 읽어 P_nQ_n = h → Q_nP_{n+1} = h/√2 → P_{n+1}Q_{n+1} = h/2, 공비 1/2 를 좌표 계산 없이 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 길이(수선의 발 반복)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 를 지나는 수직선 y = x+2 와 x+y=4 의 교점 P₁(1, 3) → P₁Q₁ = 3. 이후 Q_n 에서 직선까지 45° 직각이등변삼각형이 두 번 이어져 P_{n+1}Q_{n+1} = P_nQ_n/2, 공비 1/2 → 3/(1−1/2) = 6. 첫째항은 좌표 계산, 공비는 기하 구조(RT d1)로 얻는 두 도구 사슬. 유형·상중 ★3 출발·M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "P₁ = (1,3) → P₁Q₁ = 3 → 45° 사슬 공비 1/2 → 3/(1−1/2) = 6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0218.png"
  latex: latex-bank/rpm-calc2/items/0218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A(0, a) 와 직선 x+y=k 의 a, k 를 바꾸면 첫째항 P₁Q₁ = (a+k)/2 만 바뀜. 제약: A 는 직선 아래쪽(a<k), 기울기 −1 은 공비 1/2 의 원천이라 고정, 그림 라벨 순서 유지."
    creative: "(1) Σ Q_nP_{n+1} 을 물으면 첫째항이 3/√2 로 바뀌어 유리화 추가(★3) (2) 직선 기울기를 −√3 으로 바꾸면 공비가 cos²30° 로 삼각비 계산이 들어가 ★3~4 (3) 합이 12 가 되도록 A(0, a) 의 a 를 역산(I-BW d1 · ★3)."
```

### 유형 15 등비급수의 도형에의 활용: 둘레의 길이

```yaml
- id: RPM-CALC2-0219
  page: 34
  vendor_label: "유형 15 등비급수의 도형에의 활용: 둘레의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 변이 1 인 정사각형 ABCD 의 각 변의 중점을 이어 정사각형 A₁B₁C₁D₁ 을, 다시 그 중점을 이어 A₂B₂C₂D₂ 를 … 만들 때 정사각형 A_nB_nC_nD_n 의 둘레 l_n 의 급수 Σ l_n 의 값.
  category: "중점 연결 정사각형의 변 비 1/√2 → 첫째항 l₁ = 2√2 → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 둘레의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점을 이은 정사각형의 변은 원래 변의 1/√2 배. l_n 은 A_nB_nC_nD_n 부터이므로 첫째항 l₁ = 4·(√2/2) = 2√2 (ABCD 의 둘레 4 를 넣으면 오답), 공비 1/√2 → 2√2/(1−1/√2) = 4/(√2−1) = 4(√2+1). 첫째항 경계(T-경계)와 유리화가 부담이나 골조는 표준. 유형 대표문제 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "변 비 1/√2 → l₁ = 2√2 · 공비 1/√2 → 2√2/(1−1/√2) = 4(1+√2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4(1+\sqrt{2})$'
  answer_source: "답지"
  figure: "crop:fig-0219.png"
  latex: latex-bank/rpm-calc2/items/0219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 변의 길이(1 → 2·4)와 첨자 시작(l₁ 을 ABCD 로 잡을지)만 바꿀 수 있음. 제약: 중점 연결이면 공비 1/√2 고정, 답은 4a(1+√2) 꼴 또는 ABCD 포함 시 4a(2+√2)."
    creative: "(1) 둘레 대신 대각선의 합·넓이의 합(공비 1/2)으로 바꾸면 유형 16 골조(★2) (2) 중점 대신 각 변을 1:2 로 내분한 점을 이으면 변 비가 √5/3 이 되어 피타고라스로 공비를 구하는 단계 추가(★3) (3) 정사각형을 정삼각형으로 바꾸면 공비 1/2·둘레 첫째항 재산정(★2)."
```

```yaml
- id: RPM-CALC2-0220
  page: 34
  vendor_label: "유형 15 등비급수의 도형에의 활용: 둘레의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB = BC = 1, ∠B = 90° 인 직각이등변삼각형 내부에 한 꼭짓점이 AC 위에 오도록 정사각형 R₁, R₂, R₃, … 을 한없이 그릴 때 모든 정사각형의 둘레의 길이의 합.
  category: "R₁ 의 변 s: 2s = 1 → 남는 직각이등변삼각형이 절반 → 공비 1/2 → 둘레 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 둘레의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    R₁ 의 한 변을 s 라 하면 꼭짓점 (s, s) 가 AC(x+y=1) 위 → s = 1/2. R₁ 오른쪽에 남는 직각이등변삼각형의 다리가 1/2 이라 R₂ 의 변은 1/4, 공비 1/2. 둘레 합 4·(1/2)/(1−1/2) = 4. 닮은 삼각형이 절반씩 남는 구조를 그림에서 읽는 것이 전부. 유형·중 ★2·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "s = 1/2 → 공비 1/2 → 둘레 4·(1/2)/(1−1/2) = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: "crop:fig-0220.png"
  latex: latex-bank/rpm-calc2/items/0220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다리 길이(1 → 2·3)를 바꾸면 답이 4a. 제약: 직각이등변이어야 「남는 삼각형이 닮음」 이 자동으로 성립, 일반 직각삼각형(다리 a, b)이면 s = ab/(a+b) 와 공비 b/(a+b) 를 따로 구해야 함."
    creative: "(1) 둘레 대신 넓이의 합(공비 1/4 · 답 1/3)으로 유형 16 화(★2) (2) 다리 3, 4 인 직각삼각형으로 바꿔 s = 12/7·공비 4/7 을 닮음으로 구하게 하면 ★3 (3) 정사각형이 아니라 「AC 위에 두 꼭짓점이 있는 정사각형」 배치로 바꾸면 s = 1/3 골조로 첫째항 계산이 달라짐(★2~3)."
```

```yaml
- id: RPM-CALC2-0221
  page: 34
  vendor_label: "유형 15 등비급수의 도형에의 활용: 둘레의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    넓이 4π 인 원 C₁ 에 내접하는 정사각형, 그 정사각형에 내접하는 원 C₂, … 를 반복할 때 원 C_n 의 둘레 l_n 의 급수 Σ l_n 의 값.
  category: "넓이 → 반지름 2 → 내접 정사각형·내접원 교대로 반지름 비 1/√2 → 둘레 급수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 둘레의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    r₁ = 2, 내접 정사각형의 변 2√2, 그 내접원 r₂ = √2 → 반지름 비 1/√2. l₁ = 4π 이므로 4π/(1−1/√2) = 4√2π/(√2−1) = 4(2+√2)π. 원↔정사각형 교대에서 「내접원 반지름 = 변/2, 내접 정사각형 변 = 반지름·√2」 두 관계만 쓰는 표준 골조라 통찰 없음. 유형·상중 ★3 출발·M_total 6 → ★3 유지(하단 · 실제 체감은 ★2~3).
  tier: star_3
  mechanism_primary: "4π → r₁=2 → 반지름 비 1/√2 → 4π/(1−1/√2) = 4(2+√2)π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4(2+\sqrt{2})\pi$'
  answer_source: "답지"
  figure: "crop:fig-0221.png"
  latex: latex-bank/rpm-calc2/items/0221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "C₁ 의 넓이(4π → 9π·16π)나 반지름을 직접 주는 형태로. 제약: 원·정사각형 교대이면 반지름 비 1/√2 고정, 정삼각형 내접 교대로 바꾸면 비 1/2(내접원 반지름 = 외접원 반지름의 절반)."
    creative: "(1) 둘레 대신 원의 넓이 합(공비 1/2 · 8π)으로(★2) (2) 원 대신 정사각형의 둘레 합을 물어 첫째항이 8√2 인 같은 급수(★3) (3) 정사각형·원 사이의 「색칠한 부분(원 − 정사각형)」 넓이 합으로 바꾸면 유형 16 골조에 π 계산이 붙어 ★3."
```

### 유형 UP 16 등비급수의 도형에의 활용: 넓이

```yaml
- id: RPM-CALC2-0222
  page: 34
  vendor_label: "유형 UP 16 등비급수의 도형에의 활용: 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    반지름 4 인 원 C₁ 의 중심을 지나며 내접하는 원 C₂, C₂ 의 중심을 지나며 내접하는 원 C₃, … 을 반복할 때 모든 원의 넓이의 합. 5지선다.
  category: "반지름이 절반씩(중심을 지나며 내접) → 넓이 공비 1/4 → 등비급수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심을 지나며 내접하면 지름이 이전 반지름 → 반지름 4, 2, 1, … 넓이 16π, 4π, … 공비 1/4. 합 16π/(1−1/4) = 64π/3. 한 단계 관찰로 끝나는 대표문제. 유형 UP ★3 출발이나 통찰 없음·M_total 4 → −1 → ★2. [분류 이슈] 유형 UP 구역이지만 유형 15 기본 문항보다 쉬움(1단 차).
  tier: star_2
  mechanism_primary: "반지름 4 → 2 → 1 → 넓이 공비 1/4 → 16π/(3/4) = 64π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0222.png"
  latex: latex-bank/rpm-calc2/items/0222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(4 → 3·6)만 바꾸면 답 4r²π/3. 제약: 「중심을 지나며 내접」 조건이 공비 1/4 의 원천이라 유지, 선택지는 …π/3 꼴."
    creative: "(1) 색칠 부분(C_n − C_{n+1})의 넓이 합을 물으면 첫째항 12π·공비 1/4 로 같은 급수(★2) (2) 「반지름을 1/3 씩」 처럼 비를 바꾸고 둘레·넓이 두 합을 동시에(★2) (3) 내접원 대신 「C_n 의 지름을 한 변으로 하는 정사각형」 을 끼워 넣어 두 종류 도형의 합이면 0225 골조(★3)."
```

```yaml
- id: RPM-CALC2-0223
  page: 34
  vendor_label: "유형 UP 16 등비급수의 도형에의 활용: 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    한 변이 4 인 정삼각형 A₁B₁C₁ 의 각 변의 중점을 이어 정삼각형 A₂B₂C₂ 를, 다시 그 중점을 이어 A₃B₃C₃ 을 … 만들 때 삼각형 A_nB_nC_n 의 넓이 S_n 의 급수 Σ S_n 의 값.
  category: "정삼각형 넓이 공식 → 중점 연결 넓이 공비 1/4 → 등비급수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S₁ = (√3/4)·16 = 4√3, 중점 연결 삼각형은 넓이 1/4 → 4√3/(1−1/4) = 16√3/3. 정삼각형 넓이 공식 한 번과 공비 1/4 로 끝. 서술형 태그는 풀이 서술 요구일 뿐 골조 추가 없음. 유형 UP ★3 출발·통찰 없음·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "S₁ = 4√3 · 공비 1/4 → 4√3/(3/4) = 16√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0223.png"
  latex: latex-bank/rpm-calc2/items/0223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(4 → 2·6)를 바꾸면 답 (√3/3)a². 제약: 첨자 시작이 A₁B₁C₁(원래 삼각형)이라 S₁ 포함, 중점 연결이면 공비 1/4 고정."
    creative: "(1) 가운데 삼각형만 색칠한 「색칠 부분의 넓이 합」(첫째항 √3 · 공비 1/4)으로(★2) (2) 시에르핀스키처럼 매 단계 세 귀퉁이 삼각형에 계속 반복해 넓이 합이 3/4 씩 곱해지는 구조로 바꾸면 항 개수 세기가 붙어 ★3 (3) 정삼각형을 「한 변 4·끼인각 60° 인 삼각형」 으로 일반화해도 넓이 공비 1/4 는 유지(★2)."
```

```yaml
- id: RPM-CALC2-0224
  page: 35
  vendor_label: "유형 UP 16 등비급수의 도형에의 활용: 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    대각선이 2 인 정사각형 R₁ 의 한 변을 대각선으로 하는 정사각형 R₂, R₂ 의 한 변을 대각선으로 하는 R₃, … 을 반복할 때 R_n 의 넓이 S_n 의 급수 Σ S_n 의 값.
  category: "정사각형 넓이 = 대각선²/2 → 변이 다음 대각선 → 넓이 공비 1/2 → 등비급수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S₁ = 2²/2 = 2, R₁ 의 변 √2 가 R₂ 의 대각선이라 S₂ = 1, 공비 1/2 → 2/(1−1/2) = 4. 「넓이 = 대각선²/2」 를 쓰면 변을 구할 필요도 없다. 유형 UP ★3 출발·통찰 없음·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "S₁ = 2²/2 = 2 · 공비 (1/√2)² = 1/2 → 2/(1/2) = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0224.png"
  latex: latex-bank/rpm-calc2/items/0224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대각선 길이(2 → 4·√2)만 바꾸면 답 d². 제약: 「변 → 다음 대각선」 규칙이 공비 1/2 의 원천이라 고정, 그림의 R₁~R₄ 라벨 배치 유지."
    creative: "(1) 둘레의 합(공비 1/√2 · 유리화)으로 바꾸면 유형 15 골조 ★2 (2) 「한 변을 지름으로 하는 원」 을 끼워 넣어 두 도형의 넓이 합이면 ★3 (3) 넓이 합이 8 이 되도록 대각선 길이 d 를 역산(★2)."
```

```yaml
- id: RPM-CALC2-0225
  page: 35
  vendor_label: "유형 UP 16 등비급수의 도형에의 활용: 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    한 변이 2 인 정사각형 A₁ 의 한 변을 빗변으로 하는 직각이등변삼각형 B₁, 그 삼각형의 빗변 아닌 변을 한 변으로 하는 정사각형 A₂, … 를 반복할 때 모든 정사각형과 직각이등변삼각형의 넓이의 합. 5지선다.
  category: "빗변 → 다리(1/√2 배) → 한 단계 묶음(정사각형+삼각형) 넓이 공비 1/2 → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A₁ = 4, B₁ 은 빗변 2 → 다리 √2 → 넓이 1, A₂ 는 변 √2 → 넓이 2, B₂ = 1/2, … 정사각형 합 4/(1−1/2) = 8, 삼각형 합 1/(1−1/2) = 2 → 10. 또는 한 단계 A_n + B_n = 5 에 공비 1/2 → 10. 두 종류 도형을 따로 또는 묶어 처리하는 노동이 있으나 각 단계는 표준. 유형 UP·상중 ★3 출발·M_total 6 → ★3(하단).
  tier: star_3
  mechanism_primary: "A₁=4, B₁=1 → 단계 묶음 5 · 공비 1/2 → 5/(1−1/2) = 10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0225.png"
  latex: latex-bank/rpm-calc2/items/0225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 변의 길이(2 → 1·4)를 바꾸면 답 (5/2)a². 제약: 직각이등변이어야 다음 정사각형 변이 1/√2 배로 고정, 선택지가 정수가 되도록 a 는 짝수 권장."
    creative: "(1) 정사각형만 또는 삼각형만의 합을 물으면 단일 급수(★2) (2) 삼각형을 「한 변을 빗변으로 하는 30°-60° 직각삼각형의 짧은 변」 으로 바꾸면 공비 1/4·√3 계산(★3) (3) 색칠 순서를 격단계로(A₁, B₂, A₃, …) 두면 공비 재조합 I-MI d1 → ★3~4."
```

```yaml
- id: RPM-CALC2-0226
  page: 35
  vendor_label: "유형 UP 16 등비급수의 도형에의 활용: 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    반지름 4 인 사분원 OAB 에 내접하는 정사각형 OA₁C₁B₁, 사분원 OA₁B₁ 에 내접하는 정사각형 OA₂C₂B₂, … 를 반복할 때 색칠한 부분(정사각형 안·다음 사분원 밖)의 넓이의 합.
  category: "대각선 = 반지름 → 정사각형 변 2√2 → 색칠 = 정사각형 − 사분원 → 넓이 공비 1/2 → 급수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OC₁ = 4 가 대각선이므로 변 2√2, 정사각형 넓이 8 에서 반지름 2√2 인 사분원 2π 를 빼 첫째항 8 − 2π. 다음 사분원 반지름이 2√2 라 길이 비 1/√2, 넓이 공비 1/2 → (8−2π)/(1/2) = 16 − 4π. 색칠 영역이 무엇인지 그림에서 읽고 두 도형의 차를 첫째항으로 잡는 노동이 핵심. 유형 UP·상중 ★3·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "변 = 4/√2 → 첫째항 8 − 2π · 공비 1/2 → 16 − 4π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16-4\pi$'
  answer_source: "답지"
  figure: "crop:fig-0226.png"
  latex: latex-bank/rpm-calc2/items/0226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(4 → 2·6)만 바꾸면 답 (1 − π/4)·r². 제약: 「사분원에 내접하는 정사각형」 은 대각선 = 반지름으로 고정, 색칠 영역 정의(정사각형 − 사분원)는 그림과 일치해야 함."
    creative: "(1) 색칠을 「사분원 − 정사각형」 으로 뒤집으면 첫째항 4π − 8(★3) (2) 정사각형 대신 「사분원에 내접하는 반원」 등으로 바꾸면 반지름 비를 따로 구해야 해 ★3~4 (3) n 번째 색칠 영역 넓이 a_n 을 먼저 일반항으로 쓰게 하고 Σ 를 묻는 서술형화(★3)."
```

### 유형 UP 17 등비급수의 실생활에의 활용

```yaml
- id: RPM-CALC2-0227
  page: 35
  vendor_label: "유형 UP 17 등비급수의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    생산된 종이의 80 % 가 수거되고 수거분의 75 % 가 재생산될 때, 처음 2000 kg 에서 출발해 한없이 반복하면 재생산되는 종이의 총 무게.
  category: "한 주기 재생 비율 0.8×0.75 = 0.6 → 첫째항 1200 → 등비급수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 실생활 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    매 주기 0.6 배가 재생산되므로 재생산량은 1200, 720, … → 1200/(1−0.6) = 3000 kg. 처음 2000 kg 은 「재생산」 이 아니므로 합에 넣지 않는 것(T-경계)이 유일한 주의점. 유형 UP ★3 출발·통찰 없음·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "재생 비율 0.6 → 1200/(1−0.6) = 3000"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3000\,\mathrm{kg}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 비율(80 %·75 %)과 초기량(2000)을 바꾸되 곱이 유한소수·분수로 깔끔하게. 제약: 곱은 1 미만, 「재생산되는 총량」 이면 초기량 제외·「생산되는 총량」 이면 포함으로 발문과 첫째항을 일치시킬 것."
    creative: "(1) 「생산되는 종이 전체」 를 물어 첫째항이 2000 이 되게(★2) (2) 첫 회만 80 %, 이후 60 % 처럼 비율이 달라지는 두 단계로 두면 첫 항 분리(★3) (3) 총량이 5000 kg 이 되도록 재생 비율 p 를 역산(★2)."
```

```yaml
- id: RPM-CALC2-0228
  page: 35
  vendor_label: "유형 UP 17 등비급수의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    길이 24 cm 진자를 θ = 75° 에서 놓으면 반대쪽으로 이전 각의 4/5 배만큼 올라가는 과정을 반복할 때 추가 멈출 때까지 움직인 거리.
  category: "호의 길이 rθ(라디안) → 첫 호 + 이후 호는 두 번씩 → 등비급수 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "진자 운동을 「처음 내려오는 호 한 번 + 이후 각 각도의 호는 올라가고 내려오며 두 번」 으로 옮겨 10π + 2·(8π + 8π·4/5 + …) 로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 실생활 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    75° = 5π/12 → 첫 호 24·5π/12 = 10π. 다음 각 60° 의 호 8π 부터는 올라갔다 내려오므로 두 번씩: 10π + 2·8π/(1−4/5) = 10π + 80π = 90π cm. 도(°)→라디안(T-단위)과 첫 호만 한 번(T-경계) 두 함정이 있고, 운동을 급수 식으로 옮기는 RT d1 이 골조. 유형 UP·중 ★3 출발·M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "호 = 24·θ(rad) → 10π + 2·[8π/(1−4/5)] = 90π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$90\pi\,\mathrm{cm}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0228.png"
  latex: latex-bank/rpm-calc2/items/0228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진자 길이(24 → 12·36), 처음 각(75° → 60°·90°), 감쇠 비(4/5 → 3/4·2/3)를 바꾸되 첫 호와 이후 호의 라디안 값이 π 의 유리수 배가 되도록. 제약: 비는 1 미만, 답이 kπ cm 꼴로 정리되는지 확인."
    creative: "(1) 「n 번째로 반대쪽에 올라갔을 때의 각」 을 묻는 유한항 버전(★1~2) (2) 왼쪽·오른쪽 감쇠 비를 다르게(4/5 와 3/4 교대) 주면 두 항씩 묶는 등비급수로 I-MI d1 → ★4 (3) 총 거리가 100π 가 되도록 감쇠 비 r 를 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0229
  page: 35
  vendor_label: "유형 UP 17 등비급수의 실생활에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    올해 초 기금 20 억에서 매년 10 % 이익을 내고 연말에 (기금+이익)의 25 % 를 기부할 때, n 번째 해 기부액 a_n 의 급수 Σ a_n 의 값.
  category: "한 해 규칙 → 기부 a₁ = 20·1.1·0.25 · 남는 기금 ×(1.1·0.75) → 공비 0.825 → 급수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기금 운용 규칙을 「기부액은 그해 기금의 1.1×0.25, 다음 해 기금은 1.1×0.75 배」 두 줄 점화 관계로 옮겨 a_n 이 공비 0.825 인 등비수열임을 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 실생활 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a₁ = 20·1.1·0.25 = 5.5, 기부 후 기금 20·1.1·0.75 = 16.5 이므로 a₂ = 16.5·1.1·0.25, 공비 1.1·0.75 = 0.825. 합 5.5/(1−0.825) = 5.5/0.175 = 220/7. 「이익을 낸 뒤 기부, 기부하고 남은 금액이 다음 해 기금」 이라는 두 단계 규칙을 등비 모델로 세우는 것(RT d1)이 골조이고 소수 공비 계산이 부담. 유형 UP·상중 ★3·M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "a₁ = 20·1.1·0.25 = 5.5 · 공비 1.1·0.75 = 0.825 → 5.5/0.175 = 220/7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{220}{7}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 기금(20 → 10·40), 이익률(10 % → 20 %), 기부율(25 % → 20 %·50 %)을 바꾸되 공비 (1+이익률)(1−기부율) 이 1 미만이고 답이 간단한 분수가 되도록. 제약: 「기금과 이익을 합한 금액의 25 %」 처럼 기부 기준이 이익 후 총액임을 발문에 명시."
    creative: "(1) 기부를 「이익의 25 %」 로 바꾸면 기금이 매년 1.075 배로 늘어 급수 발산 → 「기부액의 극한」 을 묻는 극한 문제로 전환(★2) (2) 매년 초 일정액을 추가 조성하는 규칙을 넣으면 등비 + 상수 점화식(★4) (3) 총 기부액이 40 억이 되는 기부율 p 를 역산(I-BW d1 · ★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0230
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 2, 공차 d>0 인 등차수열 {a_n} 에 대해 Σ (n/a_n − (n+1)/a_{n+1}) = 1/5 일 때 d 의 값.
  category: "망원급수 부분합 → 꼬리항 (n+1)/a_{n+1} 의 극한 1/d (0 아님) → 방정식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합의 극한(망원급수)으로 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    S_n = 1/a₁ − (n+1)/a_{n+1} = 1/2 − (n+1)/(2+nd) 이고 꼬리항의 극한이 0 이 아니라 1/d 이므로 급수의 합은 1/2 − 1/d. = 1/5 에서 d = 10/3. 망원급수는 표준이지만 꼬리항을 0 으로 버리면(T-경계) 식이 안 풀리고, d>0 이 극한값 1/d 의 근거(T-범위)라는 두 함정이 변별점. 통찰 없음·M_total 7 → ★2 출발 +1 → ★3. [분류 이슈] 꼬리항 극한 처리를 통찰(I-EQV)로 볼지 함정으로 볼지 애매 — 함정으로 두고 절차형 ★3.
  tier: star_3
  mechanism_primary: "S_n = 1/2 − (n+1)/(2+nd) → lim = 1/2 − 1/d = 1/5 → d = 10/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{10}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(2 → 1·3), 급수의 값(1/5 → 1/4·1/10)을 바꾸되 d = 1/(1/a₁ − 값) 이 양수가 되도록. 제약: 꼬리항 극한 1/d 가 살아 있으려면 분자 차수 = 분모 차수 유지."
    creative: "(1) 꼬리항이 0 으로 가는 Σ(1/a_n − 1/a_{n+1}) 로 바꾸면 표준 부분분수(★2) (2) 등비수열 a_n = 2·rⁿ 으로 바꿔 꼬리 (n+1)/a_{n+1} → 0 이 되면 극한 판단이 반대로 필요(★3) (3) Σ(b_n − b_{n+1}) = b₁ − lim b_n 을 일반화해 「lim b_n = 3 이고 급수가 2 일 때 b₁」 을 묻는 개념 확인형(★2)."
```

```yaml
- id: RPM-CALC2-0231
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    급수 4/(2²−1) + 4/(3²−1) + 4/(4²−1) + … 의 합.
  category: "부분분수 4/((k−1)(k+1)) = 2(1/(k−1) − 1/(k+1)) → 두 항 남는 망원합 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항 4/(k²−1) = 2[1/(k−1) − 1/(k+1)] 을 k=2 부터 더하면 2[1 + 1/2 − 1/N − 1/(N+1)] → 3. 첨자 차이가 2 라 살아남는 항이 두 개(1, 1/2)인 것이 유일한 주의점. 중요 태그이나 골조는 표준. M_total 5·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "4/(k²−1) = 2(1/(k−1) − 1/(k+1)) → 2(1 + 1/2) = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자(4 → 2·6)와 시작 첨자(k=2 → k=3)를 바꾸면 답은 (분자/2)·(살아남는 항의 합). 제약: 분모는 (k−a)(k+a) 꼴로 첨자 차이 2a 를 유지하고 시작 첨자에서 분모가 0 이 되지 않아야 함."
    creative: "(1) 분모를 k(k+1)(k+2) 로 바꾸면 3항 부분분수(★3) (2) 급수의 값이 주어지고 분자 상수 c 를 묻는 역산(★2) (3) Σ 1/(k²−1) 과 Σ 1/(k²+k) 를 비교해 대소를 묻는 진위형으로 확장(★3)."
```

```yaml
- id: RPM-CALC2-0232
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 양수·공차 2 인 등차수열 {a_n} 과 양의 수열 {b_n} 이 log a_n + log a_{n+1} + log b_n = 0 을 만족하고 Σ b_n = 5/6 일 때 a₁ 의 값.
  category: "로그 조건 → b_n = 1/(a_n a_{n+1}) → 부분분수(공차 2) → 1/(2a₁) = 5/6"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그 합이 0 이므로 a_n a_{n+1} b_n = 1, b_n = 1/(a_n a_{n+1}) = (1/2)(1/a_n − 1/a_{n+1}). a_n → ∞ 이라 Σ b_n = 1/(2a₁) = 5/6 → a₁ = 3/5. 로그 해독·공차 2 의 부분분수 계수 1/2·미지 첫째항 a₁ 로 노동량이 쌓이지만 각 단계는 표준. 통찰 없음·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "log 합 0 → b_n = 1/(a_n a_{n+1}) → Σ = 1/(2a₁) = 5/6 → a₁ = 3/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차(2 → 1·3)와 급수 값(5/6 → 1/2·1/4)을 바꾸면 a₁ = 1/(공차·값). 제약: a₁ > 0, 로그 조건은 진수 양수 유지, 공차 d 이면 부분분수 계수 1/d."
    creative: "(1) 로그 대신 「a_n a_{n+1} b_n = 1」 로 직접 주면 해독 단계가 빠져 ★2 (2) 조건을 log b_n = −log a_n − log a_{n+2} 로 바꿔 첨자 간격 2 의 부분분수(살아남는 항 두 개)로 ★3 (3) 로그의 밑을 a_n 으로 두는 등 로그 성질을 더 얹으면 I-EQV d1 통찰형 ★3~4."
```

```yaml
- id: RPM-CALC2-0233
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    급수 Σ_{n=2}^∞ log(1 − 1/n²) 의 합. 5지선다.
  category: "log((n−1)(n+1)/n²) = log((n−1)/n) − log(n/(n+1)) → 망원합 → 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 포함된 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 − 1/n² = (n−1)(n+1)/n² 이므로 로그를 log((n−1)/n) − log(n/(n+1)) 로 쪼개면 부분합은 log(1/2) − log(N/(N+1)) → −log 2. 곱으로 보고 Π (n−1)(n+1)/n² = (1/2)·(N+1)/N → 1/2 로 가도 같다. 로그 급수의 표준 골조(이 책 유형 「로그가 포함된 급수」)라 통찰 없음. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "log(1−1/n²) = log((n−1)/n) − log(n/(n+1)) → log(1/2) → −log 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 첨자(2 → 3)나 안쪽 식(1 − 1/n² → 1 − 4/n² 등)을 바꾸면 남는 항이 달라짐(1 − 4/n² 은 첨자 차이 4 라 네 항). 제약: 진수 양수, 곱이 유한값으로 수렴해야 함."
    creative: "(1) log(1 + 1/n) 처럼 곱이 발산하는 급수로 바꿔 「발산함」 을 진위로 묻기(★2) (2) 밑을 2 로 두고 합이 정수가 되도록 안쪽 식을 설계(★2) (3) Σ log(a_n/a_{n+1}) 꼴로 일반화해 lim a_n 을 주고 급수 값을 묻는 개념형(★3)."
```

```yaml
- id: RPM-CALC2-0234
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ (a_n/n² − 1) = 6 일 때 lim (2n² + a_n)/(4n² − n + a_n) 의 값. 5지선다.
  category: "급수 수렴 → 일반항 → 0 → a_n/n² → 1 → n² 으로 나눈 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴과 일반항의 극한(Σ(a_n − b_n) 수렴 → lim a_n)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    급수가 수렴하므로 a_n/n² − 1 → 0, 즉 a_n/n² → 1. 분모·분자를 n² 으로 나누면 (2 + a_n/n²)/(4 − 1/n + a_n/n²) → 3/5. 급수 값 6 은 쓰이지 않는 미끼. 「급수 수렴 → 항의 극한 0」 성질 한 번과 유리식 극한 한 번의 표준 골조. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "Σ 수렴 → a_n/n² → 1 → (2+1)/(4+1) = 3/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_n/n² 의 극한값(1 → 2·3)과 유리식 계수를 바꾸면 답이 (2+L)/(4+L) 꼴. 제약: 급수 값(6)은 무관하므로 어떤 수라도 되지만 발문에 남겨 미끼로 유지."
    creative: "(1) 급수 조건을 Σ (a_n − 3n)/n = 2 처럼 바꿔 a_n ~ 3n 을 읽게 하면 차수 판단 추가(★2~3) (2) 극한을 lim (√(a_n+3n) − √a_n) 처럼 무리식으로 바꾸면 유리화 뒤 √a_n ~ n 을 쓰는 결합(★3) (3) 「급수 값 6 이 답에 쓰이는가」 를 묻는 진위형으로 개념 확인(★2)."
```

```yaml
- id: RPM-CALC2-0235
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    급수 Σ (a_n − 2ⁿ/(2^{n+1}+3)) 이 수렴할 때 lim 5^{n+1}a_n/(5ⁿ + a_{n+1}) 의 값. 5지선다.
  category: "급수 수렴 → a_n − (등비식) → 0 → lim a_n = 1/2 → 5ⁿ 으로 나눈 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴과 일반항의 극한(Σ(a_n − b_n) 수렴 → lim a_n)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴하는 급수의 일반항은 0 으로 가므로 lim a_n = lim 2ⁿ/(2^{n+1}+3) = 1/2. 5ⁿ 으로 나누면 5a_n/(1 + a_{n+1}/5ⁿ) → 5·(1/2)/1 = 5/2. 등비식 극한과 a_{n+1}/5ⁿ → 0 처리로 계산이 조금 늘지만 골조는 0234 와 같다. M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "Σ 수렴 → a_n → 1/2 → 5·a_n/(1 + a_{n+1}/5ⁿ) → 5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등비식(2ⁿ/(2^{n+1}+3) → 3ⁿ/(3^{n+1}−1))과 극한식의 밑(5 → 2·3)을 바꾸면 답 = 밑 × lim a_n. 제약: a_{n+1}/밑ⁿ → 0 이 되려면 a_n 이 수렴(유계)해야 하고 극한값은 양수로 두어 분모 0 을 피함."
    creative: "(1) a_n 의 극한이 0 이 되는 등비식(2ⁿ/3ⁿ)으로 바꾸면 분모 0 판단이 붙어 함정형(★3) (2) 급수 조건을 두 개 주고 a_n + b_n 의 극한을 묻기(★2) (3) 극한식을 lim (a_n)ⁿ 처럼 지수에 n 을 두면 등비수열 극한과 결합(★3)."
```

```yaml
- id: RPM-CALC2-0236
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    보기의 진위 — ㄱ 1 − 1/2 + 1/2 − 1/4 + 1/4 − … 은 발산 · ㄴ 1/2 + 4/5 + 7/8 + … 은 발산 · ㄷ lim a_n = 0 이면 Σ a_n 수렴. 옳은 것만 고르기. 5지선다.
  category: "ㄱ 짝수·홀수 부분합 → 같은 극한 1(수렴) · ㄴ 일반항 → 1 ≠ 0(발산) · ㄷ 역은 거짓(1/n)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ 을 S_{2n} = 1 − 1/2ⁿ, S_{2n−1} = 1 두 경우로 나눠 둘 다 1 로 수렴함을 확인 — 항이 상쇄되어 보이지만 부분합의 짝·홀을 따로 봐야 판정이 확정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(진위·보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 괄호 없이 나열된 급수라 S_{2n} 과 S_{2n−1} 을 따로 계산해 같은 극한 1 을 확인해야 「수렴」(발산이 아님). ㄴ 은 (3n−2)/(3n−1) → 1 ≠ 0 이라 발산. ㄷ 은 조화급수 반례. 답 ㄴ. 짝·홀 부분합 분기(MI d1)와 「항 → 0 의 역은 거짓」 개념이 변별점. M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "ㄱ S_{2n}, S_{2n−1} → 1 수렴 · ㄴ 항 → 1 발산 · ㄷ 반례 1/n → 답 ㄴ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 상쇄 패턴(1/2ⁿ → 1/3ⁿ)과 ㄴ 의 일반항((3n−2)/(3n−1) → n/(n+1))을 바꿔도 판정 구조는 같음. 제약: ㄱ 은 짝·홀 부분합의 극한이 같은 경우와 다른 경우(1 − 1 + 1 − …)를 구분해 설계, ㄷ 의 반례가 교과 범위(1/n) 안에 있어야 함."
    creative: "(1) ㄱ 을 (−1)^{n+1}(1 + 1/2ⁿ) 처럼 짝·홀 부분합의 극한이 다른 꼴로 바꾸면 「발산」 이 참이 되어 답이 바뀜(I-MI d1 유지 · ★3) (2) ㄷ 을 「Σ a_n 수렴이면 lim a_n = 0」 으로 뒤집어 참 명제로(★2) (3) 「Σ(a_n + a_{n+1}) 수렴이면 Σ a_n 수렴」 같은 항 재배열 명제를 추가하면 반례 구성이 붙어 I-VF d1 ★4."
```

```yaml
- id: RPM-CALC2-0237
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ log a_n, Σ log b_n 이 모두 수렴하고 Σ log(a_n²b_n) = 7, Σ log(a_n/b_n) = 2 일 때 Σ log(b_n²/a_n) 의 값.
  category: "로그 분해 → A = Σlog a_n, B = Σlog b_n 의 연립 2A+B=7, A−B=2 → 2B−A"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형성)로 급수의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴하는 급수의 선형성으로 2A + B = 7, A − B = 2 → A = 3, B = 1, 구하는 값 2B − A = −1. 로그 법칙·급수 성질·연립 세 도구가 한 줄씩 들어가는 개념 확인형. 통찰 없음·M_total 4 이나 도구가 셋이라 ★2 유지(★1 후보).
  tier: star_2
  mechanism_primary: "A=Σlog a_n, B=Σlog b_n → 2A+B=7, A−B=2 → 2B−A = −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 급수 값(7, 2)과 로그 안의 지수 조합(a²b, a/b → ab², a³/b)을 바꾸면 연립만 달라짐. 제약: 계수 행렬이 정칙이고 답이 정수가 되도록, 「모두 수렴」 조건은 선형성의 전제라 반드시 남길 것."
    creative: "(1) 로그 없이 Σ(2a_n + b_n) = 7, Σ(a_n − b_n) = 2 로 주면 순수 선형성(★1) (2) Σ a_n 만 수렴하고 Σ b_n 은 발산일 때 Σ(a_n + b_n) 의 발산을 묻는 진위(★2) (3) 등비급수 값으로 A, B 를 구체화해 a_n 의 공비까지 묻기(★2~3)."
```

```yaml
- id: RPM-CALC2-0238
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다섯 급수(1+2+3+…, 2−4+6−…, 1−1+1−…, 2+1+1/2+…, 1+2/3+3/5+…) 중 수렴하는 것 고르기. 5지선다.
  category: "일반항 → 0 인지 확인(발산 판정) → 등비급수 |r|<1 만 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(진위·보기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ①②⑤ 는 일반항이 0 으로 가지 않고(⑤ 는 n/(2n−1) → 1/2), ③ 은 부분합이 진동. ④ 는 공비 1/2 등비급수로 수렴. 「항 → 0 아니면 발산」 과 등비급수 수렴 조건만으로 끝나는 개념 확인. 통찰 없음·M_total 4·단일 도구 → ★2 출발 −1 → ★1. [분류 이슈] 시험에 꼭 나오는 문제 구역(★2~3 출발) 대비 ★1 — 개념 확인형이라 기록만.
  tier: star_1
  mechanism_primary: "항 → 0 아님(①②⑤) · 진동(③) · 공비 1/2(④) → 답 ④"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 등비급수 공비(1/2 → 1/3·−1/2)와 유리식 항(n/(2n−1) → (2n+1)/(3n))을 바꿔도 판정 구조 유지. 제약: 정답이 하나뿐이도록 수렴 보기는 |r|<1 등비급수 하나만."
    creative: "(1) 수렴하는 보기를 망원급수(Σ 1/(n(n+1)))로 바꾸면 부분합 계산 필요(★2) (2) 「발산하는 것의 개수」 를 묻기(★1) (3) 진동 발산·양의 무한대 발산을 구분해 짝짓기(★2)."
```

```yaml
- id: RPM-CALC2-0239
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = sin x − sin²x + sin³x − …, g(x) = cos x + cos²x + cos³x + … 일 때 f(π/6) + g(π/6) 의 값.
  category: "삼각함수 값이 공비인 등비급수 두 개 → 첫째항/(1−공비) → 유리화"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값을 공비로 하는 등비급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 는 첫째항 sin x, 공비 −sin x 이므로 sin x/(1+sin x) = (1/2)/(3/2) = 1/3. g 는 cos x/(1−cos x) = (√3/2)/(1−√3/2) = √3/(2−√3) = 3 + 2√3. 합 10/3 + 2√3. 교대 부호를 공비 −sin x 로 읽는 것(T-부호)과 유리화가 부담이고 골조는 표준. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f = sin x/(1+sin x) = 1/3 · g = cos x/(1−cos x) = 3+2√3 → 10/3 + 2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{10}{3}+2\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입 각(π/6 → π/3·π/4)을 바꾸면 값만 바뀜. 제약: |sin x|<1, |cos x|<1 이어야 수렴(x = 0, π/2 는 제외), 답이 유리화된 꼴로 정리되도록 특수각 유지."
    creative: "(1) f(x) = 1/2 을 만족하는 x 의 값(0<x<π)을 역산하면 삼각방정식 결합(★3) (2) 공비를 sin²x 로 두고 f(x)+g(x) 가 상수가 되는 항등식형(★3) (3) f(x) 의 수렴 범위(x 의 조건)를 묻는 개념형(★2)."
```

```yaml
- id: RPM-CALC2-0240
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_n 이 홀수 항 4, 짝수 항 1 일 때 Σ a_n/5ⁿ 의 값.
  category: "홀·짝 항을 두 등비급수로 분리(또는 연속 두 항 묶기) → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "홀·짝 항이 다른 수열의 등비급수 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 항 4·(1/5 + 1/5³ + …) = 4·(1/5)/(1−1/25) = 5/6, 짝수 항 (1/25)/(1−1/25) = 1/24 → 합 7/8. 두 항씩 묶어 (4/5^{2k−1} + 1/5^{2k}) = 21/25^k 로 가면 한 급수로 끝난다. 분리·묶기 모두 표준이라 통찰 없음. 공비 1/25 계산이 부담. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "홀 4·(1/5)/(1−1/25) + 짝 (1/25)/(1−1/25) = 5/6 + 1/24 = 7/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀·짝 값(4, 1 → 3, 2), 밑(5 → 3·4)을 바꾸면 답 (4·b + 1)/(b²−1) 꼴. 제약: 밑은 1 보다 큰 자연수, 답이 기약분수로 정리되는지 확인."
    creative: "(1) a_n 을 주기 3(4, 1, 2, 4, 1, 2, …)으로 늘리면 세 항 묶기(★3) (2) a_n = (−1)ⁿ + 3 처럼 식으로 주면 홀·짝 해석이 먼저 필요(I-EQV d1 · ★3) (3) 합이 1 이 되도록 짝수 항 값 c 를 역산(★2)."
```

```yaml
- id: RPM-CALC2-0241
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 수열에 대한 보기 진위 — ㄱ Σ a_nb_n 수렴이면 lim a_n = 0 또는 lim b_n = 0 · ㄴ Σ a_n 수렴이면 Σ a_{n+2} 도 수렴 · ㄷ Σ a_n = α, Σ b_n = β 이면 Σ a_nb_n = αβ. 5지선다.
  category: "ㄱ 반례(홀짝으로 역할을 바꾸는 두 수열) · ㄴ 앞 두 항 제거는 수렴 유지 · ㄷ 곱의 급수 ≠ 급수의 곱"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ 을 깨려면 a_nb_n → 0 이면서 두 수열 모두 0 으로 가지 않아야 한다는 결과 조건에서 역으로 「홀수 항은 a_n = 1, b_n = 1/n², 짝수 항은 반대」 처럼 역할을 교대하는 반례를 구성"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(진위·보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 a_nb_n → 0 이 필요조건일 뿐 a_n, b_n 중 하나가 0 으로 갈 필요는 없다 — 홀·짝으로 역할을 바꾸는 반례가 필요(BW d1). ㄴ 은 유한 개 항 제거라 참. ㄷ 은 a_n = b_n = (1/2)ⁿ 만 넣어도 αβ = 1 ≠ Σ (1/4)ⁿ = 1/3 로 거짓. 답 ㄴ. 일반 수열 명제(Mₐ 3)와 반례 구성이 변별점. M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "ㄱ 역할 교대 반례 → 거짓 · ㄴ 유한 항 제거 → 참 · ㄷ (1/2)ⁿ 반례 → 거짓 → 답 ㄴ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄴ 의 첨자 이동(a_{n+2} → a_{n+5})과 ㄷ 의 αβ 를 α+β 로 바꿔도 판정 구조 유지(a_{2n} 으로 바꾸면 부분수열이라 별개 명제). 제약: 반례가 교과 범위(등비·1/n·1/n²)로 만들어져야 함."
    creative: "(1) ㄱ 을 「lim a_n = 0 이고 lim b_n = 0 이면 Σ a_nb_n 수렴」 으로 바꾸면 반례(a_n = b_n = 1/√n)가 필요해 ★3 유지 (2) ㄴ 을 「Σ a_{2n} 수렴이면 Σ a_n 수렴」 으로 뒤집어 거짓 명제화(반례: 홀수 항 1, 짝수 항 0)(★3) (3) 반례를 직접 쓰게 하는 서술형(★3~4)."
```

```yaml
- id: RPM-CALC2-0242
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 a, 공비 r 인 등비수열에 대해 Σ a_n = 2, Σ a_n³ = 24 일 때 a + r 의 값. 5지선다.
  category: "a/(1−r) = 2, a³/(1−r³) = 24 → 대입·약분 → 2r²+5r+2 = 0 → |r|<1 로 r = −1/2 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 두 근 r = −1/2, −2 중 등비급수 수렴 조건 |r|<1 로 r = −2 를 기각 — 기각하지 않으면 a = 6, a + r = 4 로 선택지 ④ 에 걸림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수 두 조건으로 첫째항·공비 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a = 2(1−r) 을 a³/(1−r³) = 24 에 넣고 1−r³ = (1−r)(1+r+r²) 으로 약분하면 8(1−r)² = 24(1+r+r²) → 2r² + 5r + 2 = 0. r = −1/2 (r = −2 는 |r|<1 위배로 기각) → a = 3, a + r = 5/2. 세제곱 차 인수분해와 수렴 조건 검증(VF d1)이 골조. M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "a = 2(1−r) → 8(1−r)²/(1+r+r²) = 24 → r = −1/2 (−2 기각) → a + r = 5/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 급수 값(2, 24)을 바꾸되 정리된 이차방정식이 유리근을 갖고 한 근만 |r|<1 이 되도록. 제약: Σ a_n³ 의 공비 r³ 도 |r³|<1 자동, a ≠ 0."
    creative: "(1) Σ a_n² = 12 로 바꾸면 (1−r²) = (1−r)(1+r) 약분으로 일차식이 되어 기각 단계가 사라져 ★2 (2) 두 근이 모두 |r|<1 이 되도록 값을 설계하면 두 답의 합을 묻는 I-MI d1(★3) (3) Σ a_{2n} 과 Σ a_{2n−1} 두 급수 값으로 주면 r 이 바로 비로 나와 ★2."
```

```yaml
- id: RPM-CALC2-0243
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열 {a_n} 에 대해 Σ (a_{2n−1} − a_{2n}) = 3, Σ a_n² = 6 일 때 Σ a_n 의 값. 5지선다.
  category: "Σ(a_{2n−1} − a_{2n}) = a/(1+r), Σ a_n² = a²/(1−r²) → 두 식의 비가 곧 Σ a_n = a/(1−r) → 2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, r 를 직접 푸는 갈래(a = 12/5, r = −1/5) 대신 a²/(1−r²) = [a/(1+r)]·[a/(1−r)] 이라는 구조로 Σ a_n = 6/3 = 2 를 즉시 얻는 갈래를 택함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수 두 조건으로 첫째항·공비 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 급수는 a(1−r)/(1−r²) = a/(1+r) = 3, 둘째는 a²/(1−r²) = 6. 두 식을 나누면 a/(1−r) = 2 가 바로 Σ a_n. 직접 풀면 r = −1/5, a = 12/5 로 같은 결론. 첫 급수를 a/(1+r) 로 정리하는 식 조작이 필수이고, 관계식을 보면 계산이 한 줄로 줄어드는 전략 분기(SC d1). 수능 기출·M_total 7·통찰 1 → ★3. [분류 이슈] 직접 풀이도 4~5줄이라 절차형 ★3 으로 봐도 무방 — 통찰형 라벨은 변형 설계용 기록.
  tier: star_3
  mechanism_primary: "a/(1+r) = 3, a²/(1−r²) = 6 → a/(1−r) = 6/3 = 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 급수 값(3, 6)을 바꾸면 답은 (둘째)/(첫째). 제약: 직접 풀이도 가능하도록 r 가 |r|<1 안에 있어야 함(3, 6 → r = −1/5), a ≠ 0."
    creative: "(1) a/(1−r) 와 a/(1+r) 를 두 조건으로 주고 Σ a_n² 을 묻는 역방향(곱 관계 · ★3) (2) 조건을 Σ a_n = 2, Σ a_n² = 6 으로 주고 Σ(a_{2n−1} − a_{2n}) 을 묻기(★3) (3) Σ a_n³ 을 끼우면 세제곱 인수분해로 SC 가 사라지고 계산형 ★3."
```

```yaml
- id: RPM-CALC2-0244
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비급수 Σ (x²+x+1)ⁿ 이 수렴하도록 하는 실수 x 의 값의 범위.
  category: "수렴 조건 −1 < 공비 < 1 → 좌측은 항상 성립(판별식) → x²+x < 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건(x 의 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공비 x²+x+1 은 판별식 < 0 이라 항상 양수이므로 −1 보다 크다는 조건은 자동. x²+x+1 < 1 에서 x(x+1) < 0 → −1 < x < 0. 수렴 조건과 이차부등식 두 도구의 한 줄 결합. 통찰 없음·M_total 4 이나 도구 둘 → ★2 유지.
  tier: star_2
  mechanism_primary: "−1 < x²+x+1 < 1 → 좌측 자동 · x²+x < 0 → −1 < x < 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1<x<0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 x² − 2x + 1 · x² + 3x + 1 등으로 바꾸되 우측 부등식이 인수분해되고 좌측이 자동 성립하거나 실제 범위를 좁히도록 설계. 제약: 답이 열린구간, 공비가 0 이 되는 x 는 포함(0 의 등비급수는 수렴)."
    creative: "(1) 공비를 x² − 3 처럼 좌측 조건도 살아 있게 바꾸면 두 부등식 교집합 T-경계(★2) (2) 첫째항에 (x−1) 을 곱해 「첫째항 0」 분기를 넣으면 0245 골조(I-MI d1 · ★3) (3) 「수렴하도록 하는 정수 x 의 개수」 로 바꾸면 경계 포함 판단(★2)."
```

```yaml
- id: RPM-CALC2-0245
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비급수 Σ (x+1)(1 − x/2)ⁿ 이 수렴하도록 하는 모든 정수 x 의 값의 합.
  category: "첫째항 0(x = −1) 또는 −1 < 1 − x/2 < 1(0 < x < 4) → 정수 −1, 1, 2, 3 → 합 5"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수렴 조건을 「첫째항 x+1 = 0」 과 「|공비| < 1」 두 독립 경우로 나눠 x = −1 을 답에 포함 — 공비 조건만 보면 합 6 으로 오답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 수렴 조건(x 의 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    공비 조건 −1 < 1 − x/2 < 1 → 0 < x < 4 → 정수 1, 2, 3. 여기에 첫째항 (x+1) = 0 인 x = −1 도 모든 항이 0 이라 수렴하므로 포함 → 합 5. 「첫째항 0」 경우 분기(MI d1)와 경계값 처리(T-경계·T-범위)가 변별점. M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "x+1 = 0 또는 0 < x < 4 → x = −1, 1, 2, 3 → 합 5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 인수(x+1 → x−2·2x+1 — 정수해가 있어야 분기가 살아남음)와 공비(1 − x/2 → (x−1)/3)를 바꾸면 정수 집합만 달라짐. 제약: 첫째항 0 이 되는 x 가 공비 범위 밖에 있어야 「추가 답」 이 되고, 안에 있으면 중복이라 함정이 사라짐."
    creative: "(1) 첫째항 인수를 빼면 순수 공비 조건(0244 골조 · ★2) (2) 첫째항을 x² − 1 로 두면 분기 답이 두 개(±1)로 늘어 I-MI d1 유지 ★3 (3) 「수렴할 때 급수의 합 S(x) 의 최댓값」 으로 확장하면 함수 최댓값 결합(★4)."
```

```yaml
- id: RPM-CALC2-0246
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    S_n 이 log₃(S_n + 1) = n 을 만족할 때 급수 Σ 1/a_n 의 합. 5지선다.
  category: "S_n = 3ⁿ − 1 → a_n = S_n − S_{n−1} = 2·3^{n−1}(a₁ 확인) → Σ 1/a_n 등비급수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 이 주어진 수열의 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = 3ⁿ − 1 이므로 a₁ = 2, a_n = 3ⁿ − 3^{n−1} = 2·3^{n−1} (n ≥ 2, n = 1 도 일치). 1/a_n = (1/2)(1/3)^{n−1} → (1/2)/(1−1/3) = 3/4. 로그 해독·S_n → a_n·n = 1 확인(T-경계)·등비급수 합의 표준 사슬. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "S_n = 3ⁿ − 1 → a_n = 2·3^(n−1) → Σ 1/a_n = (1/2)/(2/3) = 3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2·4)과 상수(S_n + 1 → S_n + 2)를 바꾸면 a_n 이 등비수열인지 확인 필요(S_n = 3ⁿ − 2 이면 a₁ = 1 로 n = 1 이 깨져 첫 항 분리). 제약: 답이 선택지에 맞는 유리수."
    creative: "(1) S_n = 3ⁿ − 2 로 바꿔 a₁ 만 등비에서 벗어나게 하면 첫 항 분리 T-경계 강화(★3) (2) log₃(S_n + 1) = n 대신 S_n = 3ⁿ − 1 을 직접 주면 ★2 (3) Σ a_{n+1}/(S_nS_{n+1}) 처럼 S_n 을 이용한 부분분수(1/S_n − 1/S_{n+1})로 확장(★3~4)."
```

```yaml
- id: RPM-CALC2-0247
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 0.2̇9̇, 공비 0.ẋ 인 등비수열의 급수의 합이 2.6̇3̇ 일 때 한 자리 자연수 x 의 값.
  category: "순환소수 → 분수(29/99, x/9, 261/99) → a/(1−r) 방정식 → x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수와 등비급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.2̇9̇ = 29/99, 2.6̇3̇ = 261/99, 0.ẋ = x/9. (29/99)/(1 − x/9) = 261/99 → 1/(1 − x/9) = 9 → x = 8. 순환소수 변환이 계산 부담(Mₖ 2)이고 골조는 등비급수 공식 한 줄. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "29/99 ÷ (1 − x/9) = 261/99 → 1 − x/9 = 1/9 → x = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·합의 순환소수를 바꾸되 (합)/(첫째항) = 1/(1 − x/9) = 9/(9−x) 가 정수 x(1~8)를 주도록. 제약: 공비 0.ẋ 는 x ≤ 8 이어야 |r|<1 (0.9̇ = 1)."
    creative: "(1) 공비를 0.0ẋ 로 두면 x/90(★2) (2) 「순환소수 0.ȧḃ 를 등비급수로 나타내고 합을 구하라」 는 개념 서술형(★1~2) (3) 첫째항과 합을 문자로 주고 공비의 순환마디를 묻는 역산(★2~3)."
```

```yaml
- id: RPM-CALC2-0248
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    길이 6 인 선분 A₁A₂ 를 1:3 으로 내분한 A₃, 선분 A₂A₃ 을 1:3 으로 내분한 A₄, … 를 잡을 때 선분 A_nA_{n+1} 을 지름으로 하는 반원의 호의 길이 l_n 의 급수 Σ l_n 의 값. 5지선다.
  category: "내분 1:3 → 다음 선분은 3/4 배 → 반원 호 = π·지름/2 → 등비급수(첫째항 3π · 공비 3/4)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 둘레의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A₂A₃ = 6·3/4 = 9/2, A₃A₄ = (9/2)·3/4 이므로 A_nA_{n+1} = 6·(3/4)^{n−1}. 호의 길이 l_n = (π/2)·A_nA_{n+1} = 3π(3/4)^{n−1} → 3π/(1−3/4) = 12π. 내분점에서 「긴 쪽 3/4 이 남는다」 는 읽기(T-표기)와 반원 호 공식으로 끝. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A_nA_{n+1} = 6·(3/4)^(n−1) → l_n = 3π(3/4)^(n−1) → 3π/(1/4) = 12π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0248.png"
  latex: latex-bank/rpm-calc2/items/0248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 길이(6 → 4·8)와 내분비(1:3 → 1:2·2:3)를 바꾸면 공비가 (긴 쪽 비율)로 바뀜. 제약: 내분이면 공비 < 1 자동, 답 선택지는 …π 정수 배가 되도록 첫째항 조정."
    creative: "(1) 호의 길이 대신 반원의 넓이 합(공비 (3/4)²)으로(★2) (2) 내분점을 번갈아 1:3, 1:2 로 두면 두 항 묶기(I-MI d1 · ★3) (3) 「A_n 이 수렴하는 점의 위치」 를 묻는 교대급수형(변위 공비 −3/4 · 극한 24/7)으로 바꾸면 ★3."
```

```yaml
- id: RPM-CALC2-0249
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    길이 6 인 A₁B₁ 을 지름으로 하는 반원 O₁ 에 내접하는 이등변삼각형 A₁B₁C₁, 그 삼각형에 내접하는 반원 O₂, 다시 내접하는 이등변삼각형, … 을 반복할 때 색칠한 부분(반원 − 삼각형)의 넓이의 합.
  category: "반원 − 직각이등변삼각형 = 9π/2 − 9 → 내접 반원 반지름 = 중심에서 변까지 거리 3/√2 → 넓이 공비 1/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형에 내접하는 반원 O₂ 의 반지름을 「지름의 중점(= O₁ 의 중심)에서 변 A₁C₁ 까지의 거리」 로 옮겨 3·sin45° = 3/√2 로 구함 — 이 수선 보조선이 없으면 공비를 얻지 못함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    r₁ = 3, 내접 이등변삼각형은 직각이등변(빗변 6·높이 3)이라 색칠 첫째항 9π/2 − 9. 다음 반원은 중심이 같고 반지름이 중심에서 변까지 거리 3/√2 → 길이 비 1/√2, 넓이 공비 1/2 → (9π/2 − 9)·2 = 9π − 18. 공비를 얻는 수선 보조선(RT d1)이 핵심. 벤더 level 없음·M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "첫째항 9π/2 − 9 · r₂ = 3/√2 → 공비 1/2 → 9π − 18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$9\pi-18$'
  answer_source: "답지"
  figure: "crop:fig-0249.png"
  latex: latex-bank/rpm-calc2/items/0249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름(6 → 4·8)만 바꾸면 답 (π − 2)r². 제약: 삼각형이 직각이등변(반원에 내접·꼭짓점이 호의 중점)이어야 공비 1/2·내접 반원 중심이 지름 중점에 오는 구조가 유지됨."
    creative: "(1) 색칠 대상을 삼각형 − 다음 반원으로 바꾸면 첫째항 9 − 9π/4(★3) (2) 삼각형을 「반원에 내접하는 30°-60° 직각삼각형」 으로 바꾸면 내접 반원 반지름이 대칭으로 나오지 않아 ★4 (3) 반원 호의 길이 합(공비 1/√2 · 유리화)으로 바꾸면 유형 15 골조 ★3."
```

```yaml
- id: RPM-CALC2-0250
  page: 38
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    낙하 거리의 1/3 만큼 튀어 오르는 공을 높이 15 m 에서 떨어뜨릴 때 정지할 때까지 움직인 거리.
  category: "첫 낙하 15 + 이후 오르내림 2·(5 + 5/3 + …) → 등비급수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 실생활 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 15 m 는 한 번, 이후 5, 5/3, … 는 올라갔다 내려와 두 번씩: 15 + 2·5/(1−1/3) = 15 + 15 = 30 m. 「첫 낙하만 한 번」(T-경계)이 유일한 함정. 실생활 등비급수의 가장 기본형. 통찰 없음·M_total 4 이나 왕복 구조 + 급수 두 도구 → ★2 유지.
  tier: star_2
  mechanism_primary: "15 + 2·[5/(1−1/3)] = 30"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30\,\mathrm{m}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이(15 → 10·12)와 반발 비(1/3 → 1/2·2/5)를 바꾸면 답 h(1+r)/(1−r). 제약: 비 < 1, 답이 정수·간단한 분수가 되도록 h 를 (1−r) 의 배수로."
    creative: "(1) 「n 번째로 튀어 오른 높이」 나 「처음으로 1 m 이하가 되는 회차」 로 등비수열·로그 결합(★2~3) (2) 「두 번째 낙하부터 반발 비가 1/2」 로 바꿔 첫 항 분리(★3) (3) 총 거리가 40 m 가 되도록 반발 비 r 를 역산(I-BW d1 · ★3)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0251
  page: 39
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    직선 (3n−2)x + (3n+1)y = 1 과 두 축으로 둘러싸인 삼각형의 넓이 a_n 의 급수 Σ a_n 의 합을 부분합을 이용해 구하기.
  category: "절편 1/(3n−2), 1/(3n+1) → a_n = (1/6)(1/(3n−2) − 1/(3n+1)) → 부분합 → 극한 1/6"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x 절편 1/(3n−2), y 절편 1/(3n+1) 이므로 a_n = 1/(2(3n−2)(3n+1)) = (1/6)[1/(3n−2) − 1/(3n+1)]. S_n = (1/6)(1 − 1/(3n+1)) → 1/6. 절편 → 넓이 → 부분분수(계수 1/3 이 붙어 1/6)의 표준 사슬로 통찰 없음. 서술형 ★3 출발·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a_n = 1/(2(3n−2)(3n+1)) = (1/6)(1/(3n−2) − 1/(3n+1)) → S_n → 1/6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3n−2, 3n+1) → (2n−1, 2n+1)·(4n−3, 4n+1) 처럼 「공차 = 두 계수 차」 를 유지하면 부분분수 계수가 1/차. 제약: 계수가 n ≥ 1 에서 양수, 답은 1/(2·차·첫 절편 분모)."
    creative: "(1) 직선 대신 원 (x−n)² + y² = … 의 현 길이 등으로 a_n 을 정의하면 기하 계산 결합(★3~4) (2) 넓이 대신 「빗변의 길이 제곱」 으로 바꾸면 급수가 발산해 발산 판정형(★3) (3) 「부분합을 이용하여」 대신 S_n 을 먼저 구하고 lim 을 묻는 두 단계 서술형(★3)."
```

```yaml
- id: RPM-CALC2-0252
  page: 39
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    Σ (3a_n − 5) = 4 일 때 lim a_n = r 라 하고 lim (r^{n+2} − 1)/(rⁿ + 2) 의 값.
  category: "급수 수렴 → 3a_n − 5 → 0 → r = 5/3 > 1 → rⁿ 으로 나눈 극한 r² = 25/9"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴과 일반항의 극한(Σ(a_n − b_n) 수렴 → lim a_n)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    급수 수렴에서 3a_n − 5 → 0, r = 5/3. r > 1 이므로 rⁿ 으로 나누면 (r² − r^{−n})/(1 + 2r^{−n}) → r² = 25/9. 「수렴 급수의 항 → 0」 과 등비수열 극한(r>1 분기)의 두 단계 표준. 서술형 ★3 출발이나 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "Σ 수렴 → a_n → 5/3 = r → (r² − r^(−n))/(1 + 2r^(−n)) → 25/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3a_n − 5 → 2a_n − 1)로 r 를 바꾸되 r > 1 이면 답 r², 0 < r < 1 이면 −1/2 로 갈라짐. 제약: r 가 ±1 이면 극한식 판정이 달라지므로 피하거나 의도적으로 사용."
    creative: "(1) r 가 1/2 이 되도록 바꿔 rⁿ → 0 분기(답 −1/2)로 ★2 (2) r 를 −1 로 만들면 짝·홀 진동으로 극한이 없는 함정(★3) (3) 급수 조건을 Σ(a_n − r)² 수렴처럼 주면 같은 골조에 제곱 해석(★3)."
```

```yaml
- id: RPM-CALC2-0253
  page: 39
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    등비수열 {a_n} 에 대해 lim 5ⁿ/(a_n + 2ⁿ) = 10 일 때 Σ 1/a_n 의 값.
  category: "극한이 0·∞ 가 아닌 10 → a_n 은 5ⁿ 과 같은 차수(r = 5) → 5/a = 10 → a = 1/2 → Σ 1/a_n 등비급수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 10 이라는 결과에서 원인을 역추적 — 공비 r < 5 면 극한 ∞, r > 5 면 0, r = −5 면 진동이므로 r = 5 여야 하고, 그때 5ⁿ/(a·5^{n−1} + 2ⁿ) → 5/a = 10 으로 첫째항까지 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건에서 등비수열 결정 후 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    등비수열 a_n = a·r^{n−1} 에 대해 극한이 유한 양수 10 이 되려면 분모가 5ⁿ 과 같은 차수 — r = 5(r<5 이면 ∞, r>5 이면 0)이고 5/a = 10 에서 a = 1/2. 1/a_n = 2·(1/5)^{n−1} → 2/(1−1/5) = 5/2. 공비를 극한값에서 역으로 결정하는 BW d2 가 골조이고 이후는 등비급수 한 줄. 서술형 ★3·M_total 6·통찰 1(d2) → ★3.
  tier: star_3
  mechanism_primary: "lim 5ⁿ/(a_n+2ⁿ) = 10 → r = 5, a = 1/2 → Σ 1/a_n = 2/(1−1/5) = 5/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5 → 3·4), 극한값(10 → 6), 더해진 항(2ⁿ → 1·n)을 바꾸면 a = 밑/극한값. 제약: 더해진 항의 차수가 밑ⁿ 보다 낮아야 하고 극한값 > 0, 답 Σ 1/a_n = (1/a)/(1 − 1/r) 이 간단한 분수."
    creative: "(1) 극한을 lim (a_n + 2ⁿ)/5ⁿ = 1/10 로 뒤집어 같은 골조(★3) (2) 극한값을 0 으로 주고 「가능한 공비의 범위」 를 묻는 I-MI 형(★3) (3) a_n 을 등차수열로 바꿔 lim (a_n + 2ⁿ)/n = 3 처럼 주면 차수 판단이 다항식으로 이동(★3)."
```

```yaml
- id: RPM-CALC2-0254
  page: 39
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    OA = OB = 4 인 직각이등변삼각형 OAB 에서 AB 의 중점 M₁ 에서 OA, OB 에 내린 수선의 발 A₁, B₁ 로 삼각형 A₁M₁B₁ 을, 다시 A₁B₁ 의 중점 M₂ 에서 … 를 반복할 때 삼각형 A_nM_nB_n 의 외접원 둘레 l_n 의 급수 Σ l_n 의 값.
  category: "OA₁M₁B₁ 은 정사각형 → ∠M₁ = 90° → 외접원 지름 = 빗변 A₁B₁ = 2√2 → 공비 1/2 → 급수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 둘레의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    M₁(2, 2) 에서 내린 수선으로 OA₁M₁B₁ 이 한 변 2 인 정사각형이므로 △A₁M₁B₁ 은 직각이등변, 외접원 지름은 빗변 A₁B₁ = 2√2 → l₁ = 2√2π. 다음 삼각형 OA₁B₁ 이 다리 2 인 같은 꼴이라 공비 1/2 → 2√2π/(1−1/2) = 4√2π. 「직각삼각형의 외접원 지름 = 빗변」 회상과 공비 1/2 로 끝. 서술형 ★3 출발이나 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A₁B₁ = 2√2 = 외접원 지름 → l₁ = 2√2π · 공비 1/2 → 4√2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{2}\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0254.png"
  latex: latex-bank/rpm-calc2/items/0254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다리 길이(4 → 2·6)만 바꾸면 답 √2πa. 제약: M_n 은 중점이어야 OA_nB_n 이 원래 삼각형과 닮음(비 1/2)으로 유지됨(1:2 내분점으로 바꾸면 닮음이 깨져 등비가 아님), 첨자는 A₁M₁B₁ 부터."
    creative: "(1) 외접원 둘레 대신 내접원 둘레(r = (2+2−2√2)/2)로 바꾸면 내접원 반지름 공식 결합(★3) (2) 외접원의 넓이 합(공비 1/4)으로(★2) (3) OA = 4, OB = 8 인 일반 직각삼각형으로 바꾸면 OA₁M₁B₁ 이 직사각형·닮음비 1/2 는 유지되고 외접원 지름 A₁B₁ = 2√5 만 바뀜(★3)."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0255
  page: 39
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    A_n(n, 0) 에서 원 x² + (y−n)² = 9 에 그은 두 접선의 접점 B_n, C_n 에 대해 a_n = A_nB_n + A_nC_n 일 때 Σ_{n=4}^∞ 16/(a_n² + 16n + 36) 의 값(n 은 3 보다 큰 자연수).
  category: "접선의 길이 √(2n² − 9) → a_n² = 8n² − 36 → 분모 8n(n+2) → 부분분수 → n = 4 부터 망원합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원의 접선 길이(도형의 방정식: 중심까지 거리² − r² = 2n² − 9)로 a_n 을 닫힌 식으로 만든 뒤에야 급수 단원의 부분분수 골조가 시작됨 — 두 단원 도구가 모두 필요"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원의 접선 길이로 정의된 수열의 부분분수 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 (0, n) 과 A_n 의 거리 n√2 이므로 접선 길이 √(2n² − 9), a_n = 2√(2n² − 9), a_n² = 8n² − 36. 분모 8n² + 16n = 8n(n+2) → 항 2/(n(n+2)) = 1/n − 1/(n+2), n = 4 부터 더하면 1/4 + 1/5 = 9/20. 접선 길이(XU d1)만 넘으면 첨자 4 시작·간격 2 의 망원합 표준이라 실력 Up ★4 출발 대비 체감이 낮아 ★3 으로 라벨(1단 차). [분류 이슈] 실력 Up 구역 ★4 출발 vs ★3 — 접선 길이 회상 뒤는 표준 절차.
  tier: star_3
  mechanism_primary: "접선 길이 √(2n²−9) → a_n² + 16n + 36 = 8n(n+2) → Σ(1/n − 1/(n+2)) = 1/4 + 1/5 = 9/20"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{9}{20}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0255.png"
  latex: latex-bank/rpm-calc2/items/0255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(3 → 2·4)과 분모 보정항(16n + 36)을 함께 바꿔 a_n² + (보정) 이 8n(n+k) 로 인수분해되도록. 제약: n 의 시작값은 접선이 존재하는 2n² > r² 범위(r = 3 이면 n ≥ 3, 발문은 n > 3), 시작 첨자와 간격에 따라 살아남는 항이 달라짐."
    creative: "(1) 접선 길이 대신 「A_n 에서 원의 중심까지의 거리」 로 a_n 을 정의하면 XU 가 사라져 ★2 (2) 원의 중심을 (n, n) 처럼 옮겨 거리 n 으로 두면 a_n² = 4(n² − 9) 로 (n−3)(n+3) 부분분수 → 첨자 4 시작이 필수(★3) (3) 두 접점 사이 거리 B_nC_n 으로 a_n 을 정의하면 닮음·현의 길이 계산이 추가되어 ★4."
```

```yaml
- id: RPM-CALC2-0256
  page: 39
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    A₁B₁ = 4, A₁D₁ = 1 인 직사각형에서 대각선 교점 E₁ 을 잡고 D₁E₁, C₁E₁ 을 한 변으로 하는 직각이등변삼각형 두 개를 색칠해 R₁ 을, 그 꼭짓점 A₂, B₂ 를 긴 변으로 하는 닮은 직사각형(4:1)에서 같은 과정을 반복해 R_n 을 만들 때 색칠 넓이 S_n 의 극한. 5지선다.
  category: "D₁E₁ = √17/2 → 삼각형 두 개 17/4 → 회전 성분으로 A₂B₂ = 3 → 닮음비 3/4 → 넓이 공비 9/16 → 급수"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A₂ 의 위치를 「D₁E₁ 벡터 (2, −1/2) 를 90° 돌린 (1/2, 2)」 로 읽어 A₂ 가 D₁ 에서 안쪽으로 1/2 들어온 점임을 확인 → A₂B₂ = 4 − 2·(1/2) = 3. 회전한 합동 직각삼각형의 가로·세로 성분을 좌표로 옮기는 전환이 없으면 닮음비를 못 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 도형 활용: 넓이(평가원 R_n 반복 도형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    대각선 √17 의 절반 √17/2 가 직각이등변삼각형의 다리이므로 한 개 넓이 17/8, S₁ = 17/4. A₂ 는 D₁E₁ 을 D₁ 에서 90° 회전한 끝점이라 가로 성분이 1/2 → A₂B₂ = 3, 닮음비 3/4, 넓이 공비 9/16. lim S_n = (17/4)/(1 − 9/16) = 68/7. 넓이 첫째항은 표준이나 다음 직사각형의 길이를 회전 성분 분해로 얻는 RT d2 가 변별점이고 단계 수도 7 이상. 실력 Up·평가원 기출 ★4 출발·M_total 7·통찰 d2 → ★4.
  tier: star_4
  mechanism_primary: "S₁ = 2·(1/2)(√17/2)² = 17/4 → A₂B₂ = 3 → 공비 (3/4)² → (17/4)/(7/16) = 68/7"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0256.png"
  latex: latex-bank/rpm-calc2/items/0256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직사각형 비(4:1 → 3:1·2:1)를 바꾸면 D₁E₁ = √(a²+1)/2, A₂ 의 가로 성분이 1/2 로 같아 A₂B₂ = a − 1, 닮음비 (a−1)/a, 극한 (a²+1)a²/(4(2a−1)). 제약: a > 1 정수, 선택지가 분모 (2a−1) 꼴로 정리되도록."
    creative: "(1) 색칠 삼각형을 정삼각형으로 바꾸면 A₂ 의 성분이 60° 회전으로 바뀌어 삼각비 결합(★4~5) (2) 삼각형 대신 D₁E₁ 을 지름으로 하는 반원을 색칠하면 넓이만 바뀌고 닮음비 골조 유지(★4) (3) 다음 직사각형을 A₂B₂ 위가 아니라 「E₁ 을 중심으로 축소」 로 정의하면 회전 성분 계산이 빠져 ★3."
```

## 표본 판정 요약 (43문)

- ★ 분포: ★1 1 · ★2 24 · ★3 17 · ★4 1 · ★5 0
- 통찰형(insight_type) 8 · 절차형 35 · premium 0 — insights 기록은 12문(RT d1 만 있는 0218·0228·0229·0249 는 절차형으로 둠). 통찰 유형: RT 6(d1 5 · d2 1) · MI 2 · BW 2(d1 1 · d2 1) · VF 1 · SC 1 · XU 1
- 구역별: 유형 14 ★2 4·★3 1 / 유형 15 ★2 2·★3 1 / 유형 UP 16 ★2 3·★3 2 / 유형 UP 17 ★2 1·★3 2 / 시험에 꼭 나오는 문제 ★1 1·★2 13·★3 7 / 서술형 ★2 2·★3 2 / 실력 Up ★3 1·★4 1
- type_hint 상위: 「등비급수의 도형 활용: 넓이」 7(0222·0223·0224·0225·0226·0249 + 0256 평가원 R_n) · 「등비급수의 도형 활용: 둘레의 길이」 5(0219·0220·0221·0248·0254) · 「등비급수의 도형 활용: 길이」 5(수선의 발 반복 0214·0217·0218 · 중점 0215 · 좌표 근의 거리 0216) · 「등비급수의 실생활 활용」 4(0227·0228·0229·0250) · 「부분분수 분해로 급수의 합」 3(0231·0232·0251) + 「부분합의 극한(망원급수)」 1(0230) · 「급수의 수렴·발산 판정(진위·보기)」 3(0236·0238·0241) · 「급수의 수렴과 일반항의 극한」 3(0234·0235·0252) · 「등비급수 두 조건으로 첫째항·공비」 2(0242·0243) · 「등비급수의 수렴 조건」 2(0244·0245) · 단독 8(0233 로그 급수 · 0237 선형성 · 0239 삼각함수 공비 · 0240 홀짝 · 0246 S_n · 0247 순환소수 · 0253 극한 조건 등비수열 · 0255 접선 길이 부분분수)
- 대상층: 하위권 1(0238) · 중하위권 24 · 중위권 10(0218·0221·0225·0226·0228·0229·0230·0232·0249·0251) · 중상위권 7(0236·0241·0242·0243·0245·0253·0255) · 상위권 1(0256)
- 그림: 18문(`crop:fig-0214` `0215` `0217` `0218` `0219` `0220` `0221` `0222` `0223` `0224` `0225` `0226` `0228` `0248` `0249` `0254` `0255` `0256`)
- 전사 답 확인 필요: 없음(43문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0238 | 시험에 꼭 나오는 문제 구역(★2~3 출발)이나 수렴·발산 판정 개념 확인형·M_total 4·단일 도구 → ★1. 구역 상단(★3) 기준으로는 2단 차 | ★1 / ★2 |
| RPM-CALC2-0222 | 유형 UP 16 대표문제(★3 출발)이나 반지름 절반 관찰 한 단계·M_total 4 → ★2. 같은 구역 0223·0224 와 유형 UP 17 의 0227 도 같은 이유로 ★2 라 「유형 UP」 신호가 이 범위에선 유형 15 수준 | ★2 / ★3 |
| RPM-CALC2-0255 | 실력 Up(★4 출발)이나 접선 길이(XU d1) 회상 뒤는 첨자 4 시작 망원합 표준 → ★3 | ★3 / ★4 |
| RPM-CALC2-0243 | SC d1(구조식 우회)로 통찰형 라벨했으나 직접 풀이도 4~5줄이라 절차형 ★3 으로 봐도 무방 — 변형 설계용으로 통찰 기록 유지 | ★3 |
| RPM-CALC2-0230 | 꼬리항 (n+1)/a_{n+1} 의 극한 ≠ 0 처리를 통찰(I-EQV)이 아니라 함정(T-경계·T-범위)으로 두어 절차형 ★3. 카탈로그에서 「꼬리 ≠ 0 망원급수」 하위 항목을 세우면 통찰형으로 재분류 가능 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 도형 활용 3 유형(길이·둘레·넓이 · 이 범위 17문)은 「첫째항 계산 + 닮음비 → 공비 + 등비급수 합」 한 골조라 하나의 대유형(base ★2)으로 통합하고, 하위 구분은 벤더의 길이/둘레/넓이가 아니라 **공비를 얻는 도구**(중점·내분 → 1/2·3/4 / 삼각비·45° 직각삼각형 → cos θ·1/√2 / 내접·외접 반지름 관계 / 좌표 계산)로 두는 편이 정확하다. 길이·둘레·넓이 구분은 공비가 제곱이 되는지와 답의 단위만 바꾼다.
- 유형 UP 16 「넓이」 는 이 범위 5문 중 3문(0222·0223·0224)이 M_total 4 로 ★2 → 카탈로그에서 「유형 UP」 벤더 신호를 base ★3 으로 그대로 받지 말 것. 넓이 유형이 ★3 이 되는 조건은 「두 도형의 차·합을 첫째항으로 잡거나(0225·0226·0249) 공비가 수선 보조선으로만 나옴(0249)」 일 때이고, ★4 는 0256 처럼 다음 도형의 크기를 회전·성분 분해로 구해야 할 때.
- 실생활 활용은 「한 방향 반복(0227·0229)」 과 「왕복 구조(첫 항 한 번 + 이후 두 번 · 0228·0250)」 두 하위 유형으로 나눠야 한다. 왕복형은 T-경계(첫 항)·T-단위(도→라디안) 함정이 정형화되어 있고, 한 방향형은 두 단계 규칙(이익 후 기부)을 점화 관계로 옮기는 모델링이 ★3 의 원천.
- 「급수의 수렴 → 일반항 → 0」(0234·0235·0252)은 한 유형(base ★2)으로 두고, 뒤에 붙는 극한 계산(유리식·지수식·등비수열 r>1 분기)은 태그로 둔다. 급수 값이 미끼인 것이 이 유형의 고정 함정.
- 「부분분수·망원급수」 는 base ★2 이나 꼬리항 극한이 0 이 아닌 변형(0230)과 로그 해독·매개변수가 붙는 변형(0232)이 ★3 으로 갈리므로 카탈로그에 「꼬리 ≠ 0」 하위 항목을 따로 둘 것. 절편·넓이로 a_n 을 만드는 0251 은 같은 유형의 서술형 표준.
- 「등비급수 조건으로 a·r 결정」(0242·0243·0247·0253)은 통합 가능하나, 수렴 조건으로 근을 기각하는 VF(0242)·구조식으로 우회하는 SC(0243)·극한 차수로 r 를 결정하는 BW d2(0253)가 각각 다른 통찰이라 카탈로그에서 통찰 태그를 남겨야 변형 설계에 쓸 수 있다. 0247 순환소수는 계산형(★2)으로 별도.
- 진위(ㄱㄴㄷ) 3문(0236·0238·0241)은 「급수·수열 극한의 명제 판정」 한 유형(base ★2, 반례 구성 시 ★3)이며 반례 목록(1/n · 홀짝 교대 수열 · (1/2)ⁿ 곱 · 짝·홀 부분합 극한이 다른 급수)을 카탈로그 부록으로 두면 변형이 쉽다.
- 「등비급수의 수렴 조건」(0244·0245)은 base ★2 로 두되 「첫째항 0」 분기(0245)를 하위 항목으로 명시해야 MI d1 통찰형(★3)과 구분된다.
- ★4 슬롯 후보는 0256 하나. 평가원 「R_n 반복 도형」 은 별도 유형(base ★4 · RT d2 회전 성분)으로 세워야 하고, 0255 는 「다른 단원 도구로 a_n 을 만든 뒤 급수」 유형(XU · base ★3)으로 두면 된다. 이 범위에 ★5 는 없다.
