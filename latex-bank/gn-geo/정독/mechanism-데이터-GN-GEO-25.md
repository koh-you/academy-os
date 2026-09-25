---
name: mechanism-데이터-GN-GEO-25
description: 개념원리 기하 25 벡터의 내적과 두 벡터가 이루는 각(1/1 · 205~212쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 25 벡터의 내적과 두 벡터가 이루는 각
  unit_code: GEO-25
  part: "1/1"
  extract_range: "205~212쪽 · 205-e17~212-450"
  total_problems: 32
  unit_total: 32
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 유무로만 가름(빈 배열이면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 25 벡터의 내적과 두 벡터가 이루는 각 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 25단원 205~212쪽 전 32문항을 다룬다. 구성은 필수·발전 예제 구역 14문(필수 예제 4 + 각 예제에 딸린 확인체크 10), 특강 1문, 연습문제 STEP 1 7문, STEP 2 6문, 실력 UP 4문이다. 단원 도구는 좁다 — 내적의 성분 정의, `|a±b|²` 전개, 수직·평행 조건, 사잇각으로 이어지는 넓이 공식, 정사영 다섯 가지가 거의 전부이고 나머지는 이 다섯을 어떤 도형·어떤 미지수 배치에 얹느냐의 차이다. 그래서 ★ 가 ★2 에 크게 몰리고, 변별은 「기준벡터로 분해해야 하는가(정육각형·정사면체·평행사변형)」와 「크기·넓이 조건에서 내적을 역추적해야 하는가」 두 축에서만 생긴다.

벤더 난이도 신호는 개념원리 고등 표준대로 읽었다. 확인체크는 개념 확인이므로 ★1 출발, 필수 예제는 ★2, 특강은 ★2~3, 연습문제 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발이다. 여기에 이 범위에서 쓴 조정 규칙은 두 가지다 — 확인체크는 `M_total ≥ 6` 이거나 통찰이 1개 이상이면 +1, 어느 구역이든 통찰 0 이고 `M_total ≤ 5` 인 순수 공식 대입은 −1. `M_total` 이 높아도 그 원인이 연립·큰 수 같은 계산 마찰뿐이면 v3.8 §2.11 에 따라 ★ 상승 신호로 쓰지 않았다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-205-e17
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 세 벡터 $\vec{a}$, $\vec{b}$, $\vec{c}$ 의 성분이 주어질 때 $\vec{a}-\vec{b}$ 와 $\vec{a}-\vec{c}$ 가 이루는 각의 크기. ⑴ 평면 ⑵ 공간.
  category: "성분 차 벡터 → 내적·크기 → cosθ → 각"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 벡터가 이루는 각의 크기(평면·공간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분 뺄셈 → 내적 → 두 크기 → cosθ 한 사슬. 통찰 없음·M_total 5 라 −1 후보이지만 소문항 두 벌(평면 2성분·공간 3성분)로 평면·공간 정의를 함께 확인시키는 필수 예제라 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "a−b, a−c 성분 계산 → 내적과 두 크기 → cosθ = 내적/(크기 곱) → 각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60^\circ$ ⑵ $120^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/205-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터의 성분을 바꿀 수 있음. 제약: cosθ 가 0, ±1/2, ±√2/2, ±√3/2 중 하나로 떨어져야 특수각 답이 나오므로 차 벡터 두 개의 내적과 크기 곱을 먼저 설계한 뒤 성분을 역산할 것. 공간 소문항은 크기가 무리수라도 곱이 유리화되게."
    creative: "(1) 각 대신 cosθ 만 묻기(★2 유지) (2) 한 벡터에 미지수를 넣고 각이 90°가 되는 값을 묻기(★2 · 수직 조건형으로 전환) (3) 세 벡터를 점 좌표로 바꿔 ∠BAC 를 묻기(★2 · 시점 통일 단계 추가) (4) 각을 주고 성분 하나를 역으로 묻기(I-BW d1 추가 → ★3)."
```

```yaml
- id: GN-GEO-205-423
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면의 세 벡터 $\vec{a}=(3,1)$, $\vec{b}=(1,2)$, $\vec{c}=(-2,1)$ 에 대하여 $\vec{a}-\vec{b}$ 와 $\vec{a}+2\vec{c}$ 가 이루는 각의 크기.
  category: "성분 일차결합 → 내적·크기 → cosθ → 각"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 벡터가 이루는 각의 크기(평면·공간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e17 의 평면 소문항과 같은 골조에 일차결합 한 번만 얹은 드릴. 확인체크 출발점 ★1 에 통찰 0·M_total 4 라 조정 없음. 2성분 산술만 있고 함정도 없어 이 범위에서 가장 가벼운 문항 축에 든다.
  tier: star_1
  mechanism_primary: "a−b, a+2c 성분 계산 → 내적/(크기 곱) → cosθ = −√2/2 → 각"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$135^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/205-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 성분쌍과 계수 2 를 바꿀 수 있음. 제약: 두 결합 벡터의 크기 곱이 근호 안에서 정리돼 cosθ 가 특수각이 되도록 설계. 둔각 답을 유지하려면 내적이 음수가 되게 할 것."
    creative: "(1) 계수를 미지수로 두고 각이 45°가 되는 값을 묻기(★2) (2) 세 벡터를 점으로 주고 ∠ 를 묻기(★2) (3) 결합을 세 개로 늘려 크기 계산을 한 겹 추가(★2 · 계산 마찰뿐이라 ★ 상승 신호 아님)."
```

```yaml
- id: GN-GEO-205-424
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}=(x-1,3)$, $\vec{b}=(x,2)$ 이고 $\vec{a}\cdot\vec{b}=8$, $x>0$ 일 때 두 벡터가 이루는 각 $\theta$ 의 $\cos\theta$.
  category: "내적 조건 → 이차방정식으로 x 결정 → 성분 확정 → cosθ"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적 값 조건으로 미지수를 정한 뒤 cosθ 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내적 정의를 x 에 대한 이차방정식으로 쓰고 x>0 으로 한 근을 버린 뒤 성분을 확정해 다시 cosθ 를 계산하는 2단 구조. 두 근 중 하나를 버리는 것은 조건 재대입 통찰이 아니라 T-범위 함정으로 보아 Mₜ 에 넣었다. 확인체크 ★1 출발 + M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "a·b=8 을 x 이차식으로 → x>0 으로 근 선택 → 성분 확정 → cosθ = 내적/(크기 곱)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/205-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적 값 8 과 상수 성분 3, 2 를 바꿀 수 있음. 제약: x 이차방정식이 정수 인수분해되고 양근이 하나만 남아야 하며(x>0 조건이 실제로 하나를 걸러야 의미가 있음), 확정된 성분의 크기 곱이 유리화 가능해야 함."
    creative: "(1) x>0 을 빼고 가능한 cosθ 를 모두 묻기(두 근 모두 살아 I-MI d1 → ★3) (2) 내적 대신 |a−b| 를 주기(437 골조 · ★2) (3) cosθ 값을 주고 내적을 역으로 묻기(I-BW d1 → ★3) (4) 공간 3성분으로 올리면 계산만 늘고 골조는 그대로(★2)."
```

```yaml
- id: GN-GEO-205-425
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공간의 세 점 $\pt{A}(1,-1,0)$, $\pt{B}(2,3,-1)$, $\pt{C}(-2,2,-2)$ 에 대하여 $\angle\pt{ABC}=\theta$ 일 때 $\cos\theta$.
  category: "각의 꼭짓점 B 를 시점으로 BA·BC → cosθ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점으로 정해지는 각의 코사인(∠ABC → BA·BC)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 ABC 의 꼭짓점이 B 이므로 시점을 B 로 통일해 BA, BC 를 잡는 것이 유일한 갈림길이다. AB 로 잡으면 부호가 뒤집힌다(T-표기). 단원에서 가르치는 표준 전환이라 통찰로 세지 않고 Mₜ 에 반영했다. 확인체크 ★1 + M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "BA, BC 성분 계산(시점 B 통일) → 내적/(크기 곱) → cosθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/205-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: BA, BC 의 크기 곱이 근호에서 정리돼 cosθ 가 기약분수가 되게 할 것(예: |BA|²·|BC|² 가 완전제곱). 묻는 각의 꼭짓점을 A 나 C 로 옮기면 정답 분모가 통째로 바뀌므로 함께 재설계."
    creative: "(1) 묻는 각을 ∠BAC 로 바꿔 시점 통일을 다시 시키기(★2 유지) (2) 삼각형 ABC 가 직각인지 판정시키기(★2) (3) 좌표 하나를 미지수로 두고 ∠ABC=90° 인 값을 묻기(I-BW d1 → ★3) (4) 세 점으로 만든 삼각형의 넓이까지 잇기(433 공식 결합 → ★3)."
```

```yaml
- id: GN-GEO-206-e18
  page: 206
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $|\vec{a}|=3$, $|\vec{b}|=1$, $|\vec{a}-\vec{b}|=\sqrt{7}$ 일 때 두 벡터가 이루는 각의 크기.
  category: "크기 조건 제곱 전개 → 내적 추출 → cosθ → 각"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "성분이 없는 크기 조건 |a−b|=√7 을 제곱해 |a|²−2a·b+|b|² 로 옮겨야 비로소 내적이 미지수로 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "크기 조건 |a−b| 를 제곱해 내적을 끌어내 각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분이 없으므로 423 식 대입이 통하지 않고, 크기 조건을 제곱해 내적을 끌어내는 동치 변환(EQV d1)이 이 유형의 전부다. 이후는 cosθ=1/2 한 줄. 필수 예제 ★2 출발에 통찰 1·M_total 5 라 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "|a−b|² 전개 → a·b = 3/2 → cosθ = (a·b)/(|a||b|) = 1/2 → 60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/206-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|, |b|, |a−b| 세 값을 바꿀 수 있음. 제약: 삼각부등식 ||a|−|b|| ≤ |a−b| ≤ |a|+|b| 를 지켜야 실제 벡터가 존재하고, cosθ 가 특수각 값이 되도록 |a−b|² = |a|²+|b|²−2|a||b|cosθ 에서 역산할 것. |a+b| 를 주는 형태로 바꾸면 부호만 반대."
    creative: "(1) |a+b| 를 주고 같은 각을 묻기(★2 유지) (2) 각을 주고 |a−b| 를 묻는 역방향(★2) (3) a+b+c=0 조건으로 바꾸기(426 · 변환 한 겹 추가 ★2) (4) |ta+b| 의 최솟값까지 잇기(444 · I-RT d2 추가 → ★3)."
```

```yaml
- id: GN-GEO-206-426
  page: 206
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}+\vec{b}+\vec{c}=\vec{0}$ 이고 $|\vec{a}|=6$, $|\vec{b}|=10$, $|\vec{c}|=14$ 일 때 $\vec{a}$, $\vec{b}$ 가 이루는 각의 크기.
  category: "합이 0 인 조건을 c=−(a+b) 로 옮겨 제곱 → 내적 추출 → cosθ"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a+b+c=0 을 c=−(a+b) 로 옮기고 양변을 제곱해야 |c|² 안에 a·b 가 나타남 — 세 크기 조건이 한 식으로 연결됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "크기 조건 |a−b| 를 제곱해 내적을 끌어내 각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e18 과 같은 「제곱해서 내적 꺼내기」인데 크기 조건이 직접 주어지지 않고 합이 0 이라는 형태로 한 겹 감춰져 있다. 옮겨 제곱하는 착안(EQV d1) 뒤로는 산술뿐. 확인체크 ★1 출발 + 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "c = −(a+b) → |c|² = |a|²+2a·b+|b|² → a·b = 30 → cosθ = 1/2 → 60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/206-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 크기 6, 10, 14 를 바꿀 수 있음. 제약: |c|² − |a|² − |b|² 가 2|a||b| 의 특수각 배수여야 하고, 세 크기가 삼각형을 이루도록(합이 0 이므로 세 벡터는 삼각형 세 변) |a|+|b| ≥ |c| 를 지킬 것."
    creative: "(1) b, c 가 이루는 각을 묻기(같은 골조 · 답만 이동 ★2) (2) 세 벡터 중 하나의 크기를 미지수로 두고 각이 90°인 값을 묻기(I-BW d1 → ★3) (3) a+2b+3c=0 처럼 계수를 붙이면 제곱 전개가 무거워짐(★3 · 계산 마찰 주의) (4) |a+b| 를 묻는 형태로 뒤집기(★2)."
```

```yaml
- id: GN-GEO-206-427
  page: 206
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 $\pt{OAB}$ 에서 $|\overrightarrow{\pt{OA}}|=3$, $|\overrightarrow{\pt{OB}}|=2$, $\overrightarrow{\pt{OA}}\cdot\overrightarrow{\pt{OB}}=3\sqrt{2}$ 일 때 삼각형의 넓이.
  category: "내적 → cosθ → sinθ → 삼각형 넓이"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적으로 사잇각을 구해 삼각형·평행사변형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내적으로 cosθ 를 얻은 뒤 넓이 공식이 요구하는 sinθ 로 갈아타는 고정 사슬. 삼각형의 내각이라 sinθ>0 이 보장된다는 점만 챙기면 되고(T-부호) 갈림길이 없어 절차형으로 두었다. 확인체크 ★1 + M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cosθ = 3√2/6 = √2/2 → θ = 45° → S = ½·|OA|·|OB|·sinθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: crop:fig-206-427.png
  latex: latex-bank/gn-geo/items/206-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기 3, 2 와 내적 3√2 를 바꿀 수 있음. 제약: 내적/(크기 곱) 이 특수각 코사인이어야 sinθ 가 깔끔하고, |a·b| < |a||b| 여야 실제 삼각형이 됨(같으면 일직선). 그림 라벨 O, A, B 는 고정."
    creative: "(1) 넓이를 주고 내적을 역으로 묻기(434 골조 · I-BW d1 → ★2) (2) 평행사변형 넓이로 바꾸기(438 · 계수 2배 ★2) (3) 433 의 공식 S=½√(|a|²|b|²−(a·b)²) 로 각을 거치지 않고 풀게 유도(I-SC d1 → ★3) (4) 내적을 음수로 주어 둔각을 만들면 sinθ 부호 함정이 살아남(★2)."
```

```yaml
- id: GN-GEO-207-e19
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\vec{a}=(3,1)$, $\vec{b}=(1,2)$ 에 대하여 $\vec{a}-x\vec{b}$ 와 $\vec{a}+\vec{b}$ 가 서로 수직일 때 실수 $x$ 의 값.
  category: "수직 ⇔ 내적 0 → x 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 수직 조건으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「수직 ⇔ 내적 0」을 성분으로 옮기면 x 일차방정식 하나로 끝난다. 미지수가 벡터 안에 들어 있어 Mₐ=2 지만 갈림길도 함정도 없다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "a−xb, a+b 를 성분으로 쓰기 → 내적 = 0 → x 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/207-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 성분과 결합 계수를 바꿀 수 있음. 제약: 전개했을 때 x 계수가 0 이 되지 않아야 하고(0 이면 해가 없거나 항등식), 답이 기약분수로 떨어지게 설계. 미지수를 두 결합 모두에 넣으면 이차식이 되어 유형이 바뀜."
    creative: "(1) 미지수를 양쪽에 넣어 이차방정식으로 만들고 두 해를 모두 묻기(I-MI d1 → ★3) (2) 수직 대신 평행 조건으로 바꾸기(성분비 · ★2) (3) 두 조건을 동시에 걸어 벡터를 결정시키기(429 · ★2) (4) 이루는 각을 45°로 지정하면 근호가 붙는 이차방정식(★3)."
```

```yaml
- id: GN-GEO-207-428
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}=(-4,3)$, $\vec{b}=(2,1)$ 에 대하여 $2\vec{a}+\vec{b}$ 와 $\vec{a}+x\vec{b}$ 가 서로 수직일 때 실수 $x$ 의 값.
  category: "수직 ⇔ 내적 0 → x 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 수직 조건으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e19 와 같은 골조에 음수 성분만 섞인 드릴. 성분을 먼저 정리하고 내적을 0 으로 두면 일차방정식 한 줄이다. 확인체크 ★1 + M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2a+b, a+xb 를 성분으로 → 내적 = 0 → x 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/207-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 계수 2 를 바꿀 수 있음. 제약: x 계수가 0 이 아니어야 하고 답이 정수로 떨어지게 하려면 (2a+b)·b 가 (2a+b)·a 를 나누도록 설계. 음수 성분을 유지하면 부호 실수 지점이 살아 있음."
    creative: "(1) 두 결합 벡터가 평행일 조건으로 바꾸기(★2) (2) 답이 두 개 나오도록 x 를 양쪽에 넣기(I-MI d1 → ★3) (3) |a+xb| 의 최솟값으로 바꾸면 완전제곱 단계가 붙음(444 골조 · ★3) (4) 공간 3성분으로 올리기(440 · ★2)."
```

```yaml
- id: GN-GEO-207-429
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}=(3,0)$, $\vec{b}=(1,-3)$, $\vec{c}=(x,y)$ 에서 $\vec{c}-\vec{a}$ 와 $\vec{b}$ 가 평행하고 $\vec{a}$ 와 $\vec{c}$ 가 수직일 때 $|\vec{c}|$.
  category: "평행 ⇔ 실수배 치환 → 수직 조건과 연립 → c 결정 → 크기"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·수직 조건을 연립해 벡터 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건을 c−a = kb 로 두어 미지수를 x, y 둘에서 k 하나로 줄이고, 수직 조건 a·c=0 을 얹어 k 를 정한 뒤 크기를 낸다. 두 조건이 서로 다른 도구(실수배·내적 0)라 단계는 셋이지만 각각은 표준 대입이라 통찰로 세지 않았다. 확인체크 ★1 + M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "c−a = kb 로 치환 → a·c = 0 으로 k 결정 → c 성분 확정 → |c|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/207-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 성분을 바꿀 수 있음. 제약: a 가 (3,0) 처럼 축 방향이면 수직 조건이 성분 하나를 즉시 0 으로 만들어 쉬워지므로 난이도를 올리려면 일반 방향으로 둘 것. k 가 정수로 떨어지고 |c| 가 유리수가 되게 설계."
    creative: "(1) 평행·수직을 맞바꾸기(c−a ⊥ b, a ∥ c · ★2) (2) |c| 를 주고 성분을 묻기(부호 두 해 · I-MI d1 → ★3) (3) 공간으로 올려 조건을 하나 더 붙이기(430 · ★2) (4) c 가 만드는 삼각형의 넓이까지 잇기(★3)."
```

```yaml
- id: GN-GEO-208-e20
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    공간의 세 벡터 $\vec{a}=(-3,y,1)$, $\vec{b}=(x,1,4)$, $\vec{c}=(-1,-2,z)$ 가 서로 수직일 때 $x$, $y$, $z$ 의 값.
  category: "서로 수직 → 세 쌍의 내적 0 → 3원 연립"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 수직 조건 연립으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「서로 수직」을 a·b = b·c = c·a = 0 세 쌍 전부로 읽는 것이 유일한 해석 지점이고, 그 뒤는 3원 연립 산술이다. 각 식에 미지수가 하나씩만 섞여 순차 대입으로 풀리므로 연립 부담도 낮다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "a·b = 0, b·c = 0, c·a = 0 세 식 → 순차 대입으로 x, y, z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=2$, $y=2$, $z=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/208-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 벡터의 고정 성분을 바꿀 수 있음. 제약: 세 내적 식이 x, y, z 에 대해 실제로 풀리는 연립이어야 하고(계수행렬이 특이하면 해가 없거나 무수히 많음) 해가 정수로 떨어지게 설계. 미지수 위치를 한 벡터에 몰면 유형이 바뀜."
    creative: "(1) 세 값의 곱 xyz 만 묻기(440 · ★2) (2) 두 벡터만 수직으로 주고 세 번째는 평행으로 바꾸기(430 · ★2) (3) 세 벡터가 서로 수직임을 이용해 부피·좌표계 문제로 잇기(I-XU d2 → ★4) (4) 미지수를 하나 줄이고 크기 조건을 추가(431 · I-MI d1 → ★2)."
```

```yaml
- id: GN-GEO-208-430
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}=(4,-2,p)$, $\vec{b}=(2,3,q)$, $\vec{c}=(8,-4,2)$ 에서 $\vec{a}\perp\vec{b}$, $\vec{a}\parallel\vec{c}$ 일 때 $p^2+q^2$.
  category: "평행 → 성분비로 p 결정 → 수직 → q 결정"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·수직 조건을 연립해 벡터 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건에서 c = 2a 를 읽어 p 를 먼저 확정하고, 그 p 와 무관하게 수직 조건이 q 를 결정하는 순차 구조라 연립이 아니라 두 번의 단발 대입이다. 확인체크 ★1 + M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a ∥ c 성분비로 비례상수 2 → p 결정 → a·b = 0 → q 결정 → p²+q²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/208-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터의 고정 성분과 비례상수를 바꿀 수 있음. 제약: c 의 앞 두 성분이 a 의 앞 두 성분의 같은 배수여야 평행이 성립하고(아니면 조건 모순), p, q 가 정수로 떨어지게 설계. p²+q² 대신 pq 를 물으면 부호 함정이 살아남."
    creative: "(1) 평행 상수를 미지수로 두고 함께 묻기(★2) (2) c 를 빼고 a 에 수직인 크기 3 벡터를 묻기(431 · I-MI d1 → ★2) (3) 세 벡터가 한 평면 위에 있을 조건으로 바꾸기(I-XU d2 → ★4) (4) p, q 에 범위를 주어 후보를 거르게 하기(I-VF d1 → ★3)."
```

```yaml
- id: GN-GEO-208-431
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\vec{a}=(2,2,1)$, $\vec{b}=(2,-3,-4)$ 와 각각 수직이고 크기가 $3$ 인 모든 벡터 $\vec{p}$ 를 성분으로 나타내기.
  category: "두 수직 조건 → 성분 비 결정 → 크기 조건으로 배율 확정(± 두 벌)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "크기 조건이 제곱식이라 배율이 ± 두 값으로 갈리고 「모든 벡터」라는 발문이 두 벡터를 모두 답에 넣을 것을 요구함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 벡터에 수직이고 크기가 주어진 벡터 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 두 식으로 성분 사이의 비만 정해지고, 마지막에 크기 조건이 배율을 ±로 갈라 답이 두 벡터가 된다. 한쪽만 쓰면 「모든」을 어기므로 MI d1 로 세었다. 확인체크 ★1 + 통찰 1 → ★2. [분류 이슈] M_total 8·연립+제곱 조건이라 ★3 후보이나 각 단계는 표준 대입이라 ★2 로 둠.
  tier: star_2
  mechanism_primary: "p=(x,y,z) 로 두고 a·p=0, b·p=0 으로 성분 비 → |p|=3 으로 배율 ± 확정 → 두 벡터"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\vec{p}=(1,\,-2,\,2)$, $\vec{p}=(-1,\,2,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/208-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 성분과 크기 3 을 바꿀 수 있음. 제약: a, b 가 평행하면 안 되고(그러면 p 가 무수히 많음), 두 수직식에서 나오는 성분 비가 정수비여야 하며 그 비 벡터의 크기가 주어진 크기를 나누어 떨어뜨려야 답이 정수 성분이 됨."
    creative: "(1) 크기 대신 한 성분 값을 주어 답을 하나로 만들기(MI 사라져 절차형 ★2) (2) 「크기가 3 이하인 정수 성분 벡터를 모두」로 바꾸면 사후 필터가 생김(I-VF d2 → ★3) (3) a, b 가 만드는 평면의 법선이라는 해석을 묻기(I-RT d2 → ★3) (4) 두 답 벡터가 이루는 각을 이어서 묻기(★2)."
```

```yaml
- id: GN-GEO-208-432
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정사면체 $\pt{OABC}$ 에서 $\overrightarrow{\pt{OA}}=\vec{a}$, $\overrightarrow{\pt{OB}}=\vec{b}$, $\overrightarrow{\pt{OC}}=\vec{c}$ 일 때 내적을 이용하여 $\overrightarrow{\pt{OA}}\perp\overrightarrow{\pt{BC}}$ 임을 보이는 증명.
  category: "수직 증명 → 내적 0 으로 환원 → 기준벡터 분해 → 대칭으로 두 내적 상쇄"
  M: {s: 3, k: 1, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하적 명제 OA ⊥ BC 를 OA·BC = 0 이라는 대수 등식으로 바꾸고 BC 를 c−b 로 분해해야 계산 대상이 생김"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정사면체의 대칭으로 a·b 와 a·c 가 모두 k²cos60° 로 같다는 것을 쓰면 전개식이 그대로 상쇄됨"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정사면체에서 내적으로 수직 증명하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    값을 구하는 문항이 아니라 증명이라 채점 축이 다르다. 모서리 길이를 k 로 두고 모든 쌍 내적이 같음을 쓰면 a·(c−b)=0 한 줄로 끝나므로 노동량은 작고, 착안 둘(RT·SYM)이 전부다. 확인체크 ★1 + 통찰 2 → ★2. [분류 이슈] 증명 서술형이라 ★3 후보로도 볼 수 있어 기록만 함.
  tier: star_2
  mechanism_primary: "OA·BC = a·(c−b) = a·c − a·b, 정사면체라 두 내적이 k²/2 로 같음 → 0 → 수직"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 (정사면체의 한 모서리의 길이를 $k$라 하면 $\vec{a}\cdot\vec{b}=\vec{a}\cdot\vec{c}=k^2\cos60^\circ=\dfrac{k^2}{2}$이므로 $\overrightarrow{\pt{OA}}\cdot\overrightarrow{\pt{BC}}=\vec{a}\cdot(\vec{c}-\vec{b})=\vec{a}\cdot\vec{c}-\vec{a}\cdot\vec{b}=0$. 따라서 $\overrightarrow{\pt{OA}}\perp\overrightarrow{\pt{BC}}$)'
  answer_source: "계산(답지 「풀이 90쪽」)"
  figure: crop:fig-208-432.png
  latex: latex-bank/gn-geo/items/208-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이를 k 대신 구체 수(1, 2)로 고정할 수 있음. 제약: 정사면체라는 대칭이 상쇄의 근거이므로 모서리 길이를 서로 다르게 주면 명제 자체가 깨짐. 그림의 꼭짓점 라벨 O, A, B, C 는 고정."
    creative: "(1) 다른 대변쌍 OB ⊥ AC 를 증명시키기(대칭 · ★2 유지) (2) 정사면체 대신 세 모서리가 서로 수직인 사면체로 바꾸면 상쇄 근거가 달라짐(★3) (3) 수직임을 이용해 MA·MD 값을 잇기(442 · ★3) (4) 등변사면체(대변 길이만 같은)로 일반화하면 SYM d2 로 깊어짐(★3)."
```

### 특강

```yaml
- id: GN-GEO-209-433
  page: 209
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    ⑴⑵ 원점 $\pt{O}$ 와 두 점 $\pt{A}$, $\pt{B}$ 를 꼭짓점으로 하는 삼각형 $\pt{AOB}$ 의 넓이. ⑴ 평면 ⑵ 공간.
  category: "위치벡터 성분 → 넓이 공식 S=½√(|a|²|b|²−(a·b)²) 대입"
  M: {s: 2, k: 3, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터로 이루는 삼각형의 넓이 공식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    특강에서 유도한 넓이 공식을 평면·공간 두 벌에 그대로 대입하는 확인 문항이다. 사잇각을 거치지 않는다는 점이 공식의 요지이고 학생이 결정할 것은 없다. ⑵ 에서 |a|²|b|² 가 세 자리 수가 되어 Mₖ=3 이지만 계산 마찰은 ★ 상승 신호로 쓰지 않았다. 특강 ★2~3 중 ★2.
  tier: star_2
  mechanism_primary: "OA, OB 성분 → |a|², |b|², a·b 계산 → S = ½√(|a|²|b|² − (a·b)²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{7}{2}$ ⑵ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/209-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있음. 제약: |a|²|b|² − (a·b)² 가 완전제곱이어야 답이 유리수로 떨어지고(평면에서는 |x₁y₂−x₂y₁| 와 같으므로 이 값을 먼저 정해 역산), 두 점이 원점과 일직선이면 넓이가 0 이 되므로 피할 것."
    creative: "(1) 꼭짓점을 원점 아닌 세 점으로 옮기기(446 · 시점 통일 한 단계 추가 ★2) (2) 넓이를 주고 좌표 하나를 묻기(I-BW d1 → ★3) (3) 평행사변형 넓이로 바꾸기(계수 2 · ★2) (4) 사잇각 경로와 공식 경로를 비교시키면 전략 선택이 생김(I-SC d2 → ★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-210-434
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    예각삼각형 $\pt{ABC}$ 에서 $|\overrightarrow{\pt{AB}}|=4$, $|\overrightarrow{\pt{AC}}|=5$ 이고 넓이가 $5\sqrt{3}$ 일 때 $\overrightarrow{\pt{AB}}\cdot\overrightarrow{\pt{AC}}$.
  category: "넓이 조건 → sinA → 예각으로 각 확정 → cosA → 내적"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 것이 내적인데 주어진 것은 넓이라, 넓이 공식을 거꾸로 읽어 sinA 를 얻고 다시 cosA 로 되돌아가는 역방향 사슬을 학생이 먼저 설계해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이 조건에서 사잇각을 역추적해 내적 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    427 의 「내적 → 각 → 넓이」를 뒤집은 문항이다. sinA=√3/2 에서 A 가 60°와 120° 두 갈래인데 「예각삼각형」이 120°를 잘라내므로 이 조건을 놓치면 내적 부호가 통째로 뒤집힌다(T-범위). STEP 1 ★2 출발에 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "S = ½·4·5·sinA = 5√3 → sinA = √3/2 → 예각이므로 A = 60° → 내적 = 4·5·cos60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: crop:fig-210-434.png
  latex: latex-bank/gn-geo/items/210-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변 4, 5 와 넓이 5√3 을 바꿀 수 있음. 제약: 2S/(|AB||AC|) 가 특수각 사인이어야 하고 1 이하여야 삼각형이 존재함. 넓이에서 나온 sinA 가 √3/2, √2/2, 1/2 중 하나일 때만 cosA 가 깔끔함. 그림의 예각 표시와 라벨은 고정."
    creative: "(1) 「예각」을 빼고 가능한 내적 값을 모두 묻기(두 갈래 살아나 I-MI d1 추가 → ★3) (2) 내적을 주고 넓이를 묻는 정방향으로 되돌리기(427 · ★2) (3) 평행사변형·사각형 넓이로 바꾸기(438 · ★2) (4) 넓이와 |AB·AC| 를 동시에 주고 두 변의 길이를 묻기(연립 · ★3)."
```

```yaml
- id: GN-GEO-210-435
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    네 점 $\pt{A}(1,x)$, $\pt{B}(2,-1)$, $\pt{C}(5,2)$, $\pt{D}(x+2,0)$ 에 대하여 $\overrightarrow{\pt{AC}}\cdot\overrightarrow{\pt{BD}}=14$ 일 때 $x$ 의 값.
  category: "두 점 차로 성분 → 내적 = 14 → x 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분 내적 조건으로 미지수 정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AC, BD 를 성분으로 쓰면 x 에 대한 일차식이 되고 방정식 한 줄로 끝난다. 미지수가 두 점에 나뉘어 있지만 전개하면 이차항이 생기지 않는다. 통찰 0·M_total 5 라 STEP 1 ★2 출발에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "AC = C−A, BD = D−B 성분 → 내적 = 3x+2 = 14 → x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/210-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표와 내적 값 14 를 바꿀 수 있음. 제약: 전개했을 때 x² 항이 소거되어야 일차방정식으로 남고(그러려면 미지수가 두 벡터의 서로 다른 성분 자리에 들어가야 함) 해가 정수가 되게 설계."
    creative: "(1) 미지수를 같은 성분 자리에 넣어 이차방정식으로 만들고 두 해를 묻기(I-MI d1 → ★2) (2) 내적 값 대신 AC ⊥ BD 를 주기(★1 유지) (3) 이어서 두 벡터가 이루는 각을 묻기(★2) (4) 네 점이 평행사변형을 이룰 조건과 결합(★3)."
```

```yaml
- id: GN-GEO-210-436
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $|\vec{a}|=3$, $|\vec{b}|=2$ 이고 두 벡터가 이루는 각이 $60^\circ$ 일 때 $|2\vec{a}-3\vec{b}|$.
  category: "크기 제곱 전개 → 내적 대입 → 제곱근"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "|ma+nb| 를 제곱해 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e18 의 역방향이지만 각이 이미 주어져 있어 a·b=3 을 바로 얻고, |2a−3b|² 전개에 대입하는 고정 절차만 남는다. 학생이 결정할 것은 없고 계수 제곱과 교차항 부호만 조심하면 된다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "a·b = |a||b|cos60° = 3 → |2a−3b|² = 4|a|² − 12a·b + 9|b|² = 36 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/210-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기, 사잇각, 계수 2·3 을 바꿀 수 있음. 제약: 전개값이 완전제곱이어야 답이 정수. 사잇각이 둔각이면 교차항 부호가 뒤집히므로 값이 커지는 방향을 확인할 것."
    creative: "(1) |2a−3b| 를 주고 사잇각을 묻는 역방향(e18 골조 · I-EQV d1 → ★2) (2) 계수를 미지수 t 로 두고 최솟값을 묻기(444 · I-RT d2 → ★3) (3) 2a−3b 와 a 가 이루는 각까지 잇기(★3) (4) 성분이 주어진 벡터로 바꾸면 통찰이 사라짐(★1)."
```

```yaml
- id: GN-GEO-210-437
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\vec{a}=(x,-1)$, $\vec{b}=(2x-1,x+2)$ 이고 $|\vec{b}-\vec{a}|=2\sqrt{10}$, $x>0$ 일 때 두 벡터가 이루는 각 $\theta$ 의 $\cos\theta$.
  category: "크기 조건 → 이차방정식으로 x 결정 → 성분 확정 → cosθ"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "크기 조건으로 미지수를 정한 뒤 cosθ 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    424 와 같은 2단 구조인데 조건이 내적 대신 크기라 제곱 단계가 하나 더 붙는다. x>0 이 음근을 걸러내므로 이 조건을 놓치면 성분이 통째로 달라진다(T-범위). 단계는 많지만 각각 표준이라 통찰 0, M_total 8 이어도 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "b−a 성분 → |b−a|² = 40 을 x 이차식으로 → x>0 으로 근 선택 → 성분 확정 → cosθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/210-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 성분식과 크기 2√10 을 바꿀 수 있음. 제약: x 이차방정식이 정수 인수분해되고 양근이 하나만 남아야 하며, 확정된 두 벡터의 크기 곱이 유리화되어 cosθ 가 기약이 되도록 설계."
    creative: "(1) x>0 을 빼고 두 경우의 cosθ 를 모두 묻기(I-MI d1 → ★3) (2) 크기 대신 내적 값을 주기(424 · ★2) (3) 두 벡터가 수직이 되는 x 를 묻기(★2) (4) 이어서 삼각형 넓이를 묻기(433 공식 · ★3)."
```

```yaml
- id: GN-GEO-210-438
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    평행사변형 $\pt{ABCD}$ 에서 $\overrightarrow{\pt{AB}}=\vec{a}$, $\overrightarrow{\pt{AD}}=\vec{b}$, $|\vec{a}|=6$, $|\vec{b}|=5$, $\vec{a}\cdot\vec{b}=-15$ 일 때 평행사변형의 넓이.
  category: "내적 → cosθ(둔각) → sinθ → 평행사변형 넓이"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적으로 사잇각을 구해 삼각형·평행사변형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    427 과 같은 사슬에 평행사변형이라 계수만 2배다. 내적이 음수라 사잇각이 120°인데 넓이에는 sin 이 들어가 양수로 남는다 — 부호를 각에서 멈추지 않고 sin 까지 끌고 가는 것이 유일한 실수 지점(T-부호). STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "cosθ = −15/30 = −1/2 → θ = 120° → S = |a||b|sinθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/210-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기와 내적 값을 바꿀 수 있음. 제약: 내적/(크기 곱) 이 특수각 코사인이고 절댓값이 1 미만이어야 하며, 음수로 두어야 둔각 함정이 유지됨. 넓이를 정수·간단한 무리수로 만들려면 sinθ 가 √3/2 또는 1 이 되게 설계."
    creative: "(1) 삼각형 ABD 의 넓이로 바꾸기(계수 절반 · ★2) (2) 넓이를 주고 내적을 묻는 역방향(434 · I-BW d1 → ★2) (3) 대각선 길이 |a+b| 를 함께 묻기(★2) (4) 433 의 공식으로 각을 거치지 않고 풀게 유도해 두 경로를 비교(I-SC d2 → ★3)."
```

```yaml
- id: GN-GEO-210-439
  page: 210
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    세 벡터에 대한 보기 ㄱ($\vec{a}\cdot\vec{a}=\vec{b}\cdot\vec{b}$ 이면 $|\vec{a}|=|\vec{b}|$), ㄴ($\vec{a}\cdot\vec{b}=\vec{a}\cdot\vec{c}$ 이면 $\vec{b}=\vec{c}$), ㄷ($\vec{a}\cdot\vec{b}=\vec{a}\cdot\vec{a}$ 이면 $\vec{a}$ 와 $\vec{b}-\vec{a}$ 가 수직) 중 옳은 것 고르기.
  category: "내적 성질 참·거짓 → 이항 후 a·(b−c)=0 해석 → 반례 구성"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ·ㄷ 모두 a·b=a·c 를 a·(b−c)=0 으로 옮기는 같은 변형인데, 이것이 「b=c」가 아니라 「a 와 b−c 가 수직이거나 b=c」라는 두 가능성을 뜻한다는 해석이 참·거짓을 가름 — 내적에는 소거법칙이 없다는 것"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "내적의 연산 성질 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    성분이 하나도 없는 일반 벡터 명제라 Mₐ=3 이고, 세 보기가 모두 같은 이항 변형 위에 서 있다. ㄴ 을 거짓으로 판정하려면 a ⊥ (b−c) 인 반례를 스스로 떠올려야 하고, 같은 변형이 ㄷ 에서는 참의 근거가 된다는 대칭이 이 문항의 핵심이다(EQV d2). STEP 1 ★2 출발 + depth 2 통찰 → ★3.
  tier: star_3
  mechanism_primary: "각 보기를 a·(b−c)=0 꼴로 이항 → ㄱ 크기 정의로 참 · ㄴ 수직 반례로 거짓 · ㄷ 수직의 정의 그대로 참"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/210-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형이라 숫자 변형 여지는 거의 없다. 제약: 보기를 바꿀 때 a ≠ 0 같은 단서 조건을 함께 조정해야 참·거짓이 뒤집히지 않음(ㄴ 은 a ≠ 0 이 없으면 자명하게 거짓)."
    creative: "(1) 보기를 |a+b|=|a|+|b| 이면 a ∥ b 처럼 크기 부등식으로 바꾸기(★3) (2) (a·b)c = a(b·c) 같은 결합법칙 반례를 넣기(★3) (3) 반례를 직접 성분으로 제시하라는 서술형으로 바꾸기(★3) (4) 참인 보기만 남기면 절차형 ★2 로 내려감."
```

```yaml
- id: GN-GEO-211-440
  page: 211
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    공간의 세 벡터 $\vec{a}=(2,4,p)$, $\vec{b}=(1,q,-7)$, $\vec{c}=(r,1,-1)$ 이 서로 수직일 때 $pqr$ 의 값.
  category: "서로 수직 → 세 쌍의 내적 0 → 3원 연립 → 곱"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 수직 조건 연립으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e20 과 같은 유형이지만 세 식에 미지수가 섞여 순차 대입이 안 되고 실제 3원 연립을 풀어야 한다. 늘어난 것은 계산량뿐이고 착안은 e20 과 동일하다. [분류 이슈] M_total 8 이라 ★3 후보로 보일 수 있으나 상승 원인이 연립 마찰뿐이라 v3.8 §2.11 에 따라 ★ 상승 신호로 쓰지 않고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "a·b = 0, b·c = 0, c·a = 0 세 식 → 3원 연립으로 p, q, r → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/211-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 성분을 바꿀 수 있음. 제약: 세 내적 식의 연립이 유일해를 가져야 하고(계수행렬이 특이하지 않을 것) p, q, r 이 정수로 떨어지게 역산할 것. 곱 대신 합을 물으면 부호 실수가 덜 드러남."
    creative: "(1) 세 미지수를 각각 묻기(e20 · ★2) (2) 조건 하나를 평행으로 바꾸기(430 · ★2) (3) 세 벡터의 크기가 모두 같다는 조건을 추가해 후보를 거르게 하기(I-VF d2 → ★3) (4) 세 벡터가 좌표축 역할을 한다는 해석으로 부피를 잇기(I-XU d2 → ★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-211-441
  page: 211
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 변의 길이가 $2$ 인 정육각형 $\pt{ABCDEF}$ 에서 $(\overrightarrow{\pt{AB}}+\overrightarrow{\pt{AF}})\cdot\overrightarrow{\pt{AC}}$.
  category: "정육각형에 기준(좌표) 도입 → 벡터 합을 대각선으로 → 내적"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 변의 길이만 주어진 정육각형을 좌표(또는 두 기준벡터)로 옮겨야 AB, AF, AC 가 계산 가능한 성분이 됨"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB+AF 가 마름모 ABOF 의 대각선, 즉 정육각형의 중심으로 가는 벡터임을 대칭으로 읽으면 크기 2·AC 와의 사잇각 30° 로 좌표 없이 한 줄에 끝남"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정다각형에서 기준벡터 분해로 내적 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수치가 「한 변 2」뿐이라 학생이 먼저 기준을 세워야 한다는 점이 STEP 1 과 갈리는 지점이다. 좌표를 잡아 성분으로 밀어도 되고, AB+AF 를 중심 방향 대각선으로 읽어 |AB+AF|=2, 사잇각 30° 로 끝내도 된다. 후자가 정육각형 대칭을 쓰는 본 풀이(SYM d2). 통찰 2 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "정육각형에 좌표 도입 → AB+AF 가 중심 방향(크기 2) → AC(크기 2√3)와 30° → 내적"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: crop:fig-211-441.png
  latex: latex-bank/gn-geo/items/211-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이 2 만 바꿀 수 있고 답은 그 제곱에 비례한다. 제약: 정육각형이라는 대칭이 풀이의 근거이므로 변의 길이를 서로 다르게 줄 수 없음. 그림의 꼭짓점 순서 A~F 와 방향은 고정."
    creative: "(1) 묻는 벡터를 AD 나 AE 로 옮기기(같은 골조 · ★3) (2) 정팔각형·정삼각형으로 바꾸면 사잇각이 달라져 대칭 읽기 난도가 오름(★3~4) (3) (AB+AF)와 AC 가 이루는 각을 묻기(★3) (4) 한 변의 길이를 미지수로 두고 내적 값을 주어 역으로 묻기(I-BW d1 추가 → ★4)."
```

```yaml
- id: GN-GEO-211-442
  page: 211
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 모서리의 길이가 $2$ 인 정사면체 $\pt{ABCD}$ 에서 $\seg{BC}$ 의 중점을 $\pt{M}$ 이라 할 때 $\overrightarrow{\pt{MA}}\cdot\overrightarrow{\pt{MD}}$.
  category: "공간도형 → 삼각형 AMD 평면으로 환원 → 중선 길이와 코사인법칙 → 내적"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사면체라는 입체를 MA, MD, AD 세 변으로 이루어진 한 평면 삼각형으로 환원하면 공간 좌표 없이 코사인법칙만으로 사잇각의 코사인이 나옴(또는 MA, MD 를 기준벡터로 분해)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사면체·공간도형에서 내적 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    MA, MD 가 모두 정삼각형의 중선이라 길이가 √3 으로 같고 AD=2 이므로 삼각형 AMD 하나로 문제가 닫힌다. 이 환원을 못 보면 공간 좌표를 잡아야 해서 계산이 크게 늘어난다. 통찰 1(RT d2) · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "MA = MD = √3(정삼각형 중선), AD = 2 → 삼각형 AMD 에 코사인법칙으로 cos∠AMD = 1/3 → 내적 = 3·(1/3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: crop:fig-211-442.png
  latex: latex-bank/gn-geo/items/211-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 2 만 바꿀 수 있고 답은 그 제곱에 비례한다. 제약: 정사면체 대칭이 MA=MD 의 근거이므로 모서리를 서로 다르게 주면 골조가 깨짐. M 을 다른 모서리의 중점으로 옮기면 대응 관계만 바뀌고 값은 같음."
    creative: "(1) M 을 내분점 1:2 로 바꾸면 대칭이 깨져 기준벡터 분해가 강제됨(★4) (2) MA 와 MD 가 이루는 각을 묻기(★3) (3) 정사면체 대신 정팔면체·직육면체로 바꾸기(449 · ★3) (4) 무게중심을 섞어 OG·GM 형태로 올리기(448 · SYM d2 추가 → ★4)."
```

```yaml
- id: GN-GEO-211-443
  page: 211
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    좌표공간의 세 점 $\pt{O}(0,0,0)$, $\pt{A}(2,3,-1)$, $\pt{B}(-1,2,2)$ 에 대하여 $\overrightarrow{\pt{OA}}$ 의 직선 $\pt{OB}$ 위로의 정사영의 크기.
  category: "정사영의 크기 = |OA·OB|/|OB| 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 크기(내적/|b|)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정사영의 크기가 |a|cosθ = |a·b|/|b| 라는 단원 공식을 성분에 한 번 대입하면 끝난다. 「크기」이므로 절댓값을 취한다는 것만 챙기면 되고(T-표기) 갈림길이 없다. [분류 이슈] STEP 2 ★3 출발이지만 통찰 0·M_total 5 라 −1 하여 ★2 로 둠.
  tier: star_2
  mechanism_primary: "OA·OB = 2 → 정사영의 크기 = |OA·OB| / |OB| = 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/211-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있음. 제약: |OB| 가 정수(성분 제곱합이 완전제곱)여야 답이 유리수로 떨어짐. 내적이 음수가 되게 두면 절댓값 함정이 실제로 작동함."
    creative: "(1) 정사영의 크기가 아니라 정사영 벡터 OH 를 묻기(450 · I-RT d2 → ★3) (2) 두 벡터가 이루는 각의 코사인을 함께 묻기(★2) (3) 평면 위로의 정사영으로 바꾸면 단원을 넘어감(I-XU d2 → ★4) (4) 정사영의 크기를 주고 좌표 하나를 역으로 묻기(★3)."
```

```yaml
- id: GN-GEO-211-444
  page: 211
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $|\vec{a}|=4$, $|\vec{b}|=2$, $|\vec{a}-\vec{b}|=2\sqrt{3}$ 일 때 실수 $t$ 에 대한 $|t\vec{a}+\vec{b}|$ 의 최솟값.
  category: "크기 조건 제곱 → 내적 추출 → |ta+b|² 를 t 이차식으로 → 완전제곱 최솟값"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|a−b|=2√3 을 제곱해 a·b=4 를 끌어내야 이후 전개에 넣을 수치가 생김"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "벡터 크기의 최솟값 문제를 |ta+b|² = 16t²+8t+4 라는 t 이차함수 문제로 옮기고 완전제곱으로 꼭짓점을 찾는 전환 — 크기 자체가 아니라 제곱을 최소화해도 된다는 판단 포함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "|ta+b| 의 최솟값(이차식 완전제곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e18 의 제곱 전개(EQV d1) 위에 「벡터 최솟값 → 이차함수 최솟값」 전환(RT d2)이 얹힌 2층 구조다. 제곱근이 증가함수라 |ta+b|² 를 최소화해도 된다는 것까지가 전환의 내용이다. 통찰 2 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "|a−b|² 전개로 a·b = 4 → |ta+b|² = 16t² + 8t + 4 = 16(t+1/4)² + 3 → 최솟값 √3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/211-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|, |b|, |a−b| 를 바꿀 수 있음. 제약: 삼각부등식을 지켜 실제 벡터가 존재해야 하고, 이차식의 최솟값 |b|²−(a·b)²/|a|² 이 완전제곱이어야 답이 간단한 무리수로 떨어짐. t 계수는 |a|² 이므로 |a| 를 바꾸면 꼭짓점 위치가 함께 이동."
    creative: "(1) 최솟값을 갖는 t 를 묻기(★3 유지) (2) |a+tb| 로 역할을 바꾸기(★3) (3) 최솟값을 주고 |a−b| 를 역으로 묻기(I-BW d1 추가 → ★4) (4) 최솟값일 때 ta+b 가 a 와 수직임을 보이게 하면 정사영 의미가 드러남(I-RT d2 유지 · ★4)."
```

```yaml
- id: GN-GEO-211-445
  page: 211
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    영벡터가 아닌 두 벡터가 $2|\vec{a}|=|\vec{b}|$ 이고 $\vec{a}+\vec{b}$ 와 $5\vec{a}-2\vec{b}$ 가 서로 수직일 때 두 벡터가 이루는 각의 크기.
  category: "크기 비를 매개변수로 통합 → 수직 조건 전개 → 내적을 크기로 표현 → cosθ"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "크기 비 조건과 수직 조건이라는 성격이 다른 두 조건을 |a|=k 하나로 묶어 전개해야 미지수가 사라지고 내적이 k² 로 표현됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직 조건에서 두 벡터가 이루는 각 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 벡터의 크기가 수치로 주어지지 않고 비로만 주어져 있어 |a|=k 로 두는 통합이 먼저다. 수직 조건을 전개하면 k² 항끼리 정리되어 a·b=k² 가 나오고 cosθ 에서 k 가 약분된다 — 미지수가 스스로 사라지는 구조를 예상하고 들어가야 한다. 통찰 1 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "|a|=k, |b|=2k 로 통합 → (a+b)·(5a−2b)=0 전개 → a·b = k² → cosθ = k²/(2k²) = 1/2 → 60°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/211-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기 비 2 와 결합 계수 (1,1), (5,−2) 를 바꿀 수 있음. 제약: 전개식에서 a·b 의 계수가 0 이 아니어야 하고, 얻어진 cosθ 가 절댓값 1 이하이면서 특수각이어야 함. 계수를 무턱대고 바꾸면 |cosθ|>1 이 되어 존재하지 않는 배치가 나오므로 역산 필수."
    creative: "(1) 각을 주고 크기 비를 묻는 역방향(I-BW d1 → ★3) (2) 수직 대신 평행 조건으로 바꾸기(★3) (3) |a+b| 와 |a−b| 의 비를 조건으로 주기(★3) (4) 계수 하나를 미지수로 두고 수직이 되는 값을 묻기(★3)."
```

```yaml
- id: GN-GEO-212-446
  page: 212
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    좌표평면의 세 점 $\pt{A}(1,1)$, $\pt{B}(-1,3)$, $\pt{C}(-3,0)$ 을 꼭짓점으로 하는 삼각형 $\pt{ABC}$ 의 넓이를 벡터로 구하기.
  category: "시점 A 로 통일한 두 벡터 → 넓이 공식 S=½√(|a|²|b|²−(a·b)²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터로 이루는 삼각형의 넓이 공식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    433 과 같은 공식인데 꼭짓점이 원점이 아니라 한 꼭짓점을 시점으로 통일하는 단계가 하나 붙었을 뿐이다. 「벡터를 이용하여」라는 지시가 경로까지 지정해 전략 선택도 없다. 통찰 0·M_total 5 라 STEP 2 ★3 출발에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "AB, AC 성분(시점 A 통일) → |AB|², |AC|², AB·AC → S = ½√(|AB|²|AC|² − (AB·AC)²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/212-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: |AB|²|AC|² − (AB·AC)² 이 완전제곱이어야 답이 유리수(평면에서는 |x₁y₂−x₂y₁| 와 같으므로 이 값을 먼저 정해 역산). 세 점이 일직선이면 넓이가 0 이 되므로 피할 것."
    creative: "(1) 시점을 B 나 C 로 지정해 같은 답이 나옴을 확인시키기(★2) (2) 「벡터를 이용하여」를 빼고 신발끈·밑변높이와 비교시키면 전략 선택이 생김(I-SC d2 → ★3) (3) 공간의 세 점으로 올리기(433 ⑵ · ★2) (4) 넓이를 주고 좌표 하나를 묻기(I-BW d1 → ★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-212-447
  page: 212
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\seg{AB}=3$, $\seg{AD}=4$, $\angle\pt{ABC}=60^\circ$ 인 평행사변형 $\pt{ABCD}$ 에서 $\seg{AB}$ 를 $1:2$ 로 내분하는 점을 $\pt{P}$, $\seg{BC}$ 의 중점을 $\pt{Q}$ 라 할 때 $\overrightarrow{\pt{PQ}}\cdot\overrightarrow{\pt{CD}}$.
  category: "두 기준벡터로 분해 → 내분·중점을 계수로 → 전개 후 세 내적 대입"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "길이와 한 각만 주어진 평행사변형에서 AB, AD 를 기준벡터로 잡고 P, Q, C, D 를 그 일차결합으로 옮겨야 PQ 와 CD 가 계산 가능한 식이 됨"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 각은 꼭짓점 B 의 내각 60° 인데 기준벡터 AB, AD 의 사잇각은 그 보각 120° 이므로, 평행사변형의 이웃각 관계로 조건을 바꿔 써야 내적의 부호가 맞음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "평행사변형에서 기준벡터 분해로 내적 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분해 계수(내분 1:2, 중점, CD = −AB)를 하나라도 틀리면 답이 통째로 어긋나고, 그 위에 각 60°→120° 전환이라는 부호 함정이 겹친다. 계산 자체는 전개 한 번이지만 조건 번역이 두 겹이라 실력 UP ★4 출발을 통찰 2 로 유지했다.
  tier: star_4
  mechanism_primary: "AB=u, AD=v 로 분해 → PQ = (2/3)u + (1/2)v, CD = −u, u·v = 12cos120° = −6 → 전개 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: crop:fig-212-447.png
  latex: latex-bank/gn-geo/items/212-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변 3, 4 와 각 60°, 내분비 1:2 를 바꿀 수 있음. 제약: 주어지는 각이 어느 꼭짓점의 내각인지에 따라 기준벡터 사잇각이 보각으로 바뀌므로 함께 조정할 것. 특수각으로 두어야 u·v 가 유리수가 되고, 내분비를 바꾸면 계수 2/3 자리만 움직임."
    creative: "(1) PQ·AC 나 PQ·BD 로 상대 벡터를 바꾸기(★4 유지) (2) 각을 ∠BAD 로 주면 보각 전환이 사라져 ★3 으로 내려감 (3) 마름모·직사각형으로 특수화하면 u·v 가 0 이나 대칭값이 되어 ★3 (4) PQ ⊥ CD 가 되는 내분비를 묻는 역방향(I-BW d1 추가 → ★4~5 후보)."
```

```yaml
- id: GN-GEO-212-448
  page: 212
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    한 모서리의 길이가 $1$ 인 정사면체 $\pt{OABC}$ 에서 $\overrightarrow{\pt{OA}}=\vec{a}$, $\overrightarrow{\pt{OB}}=\vec{b}$, $\overrightarrow{\pt{OC}}=\vec{c}$ 라 하고 삼각형 $\pt{OAB}$ 의 무게중심을 $\pt{G}$, 모서리 $\pt{BC}$ 의 중점을 $\pt{M}$ 이라 할 때 $\overrightarrow{\pt{OG}}\cdot\overrightarrow{\pt{GM}}$.
  category: "무게중심·중점을 기준벡터 일차결합으로 → 전개 → 정사면체 대칭으로 모든 쌍 내적 대입"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무게중심 OG=(a+b)/3 과 중점 OM=(b+c)/2 로 점을 벡터로 옮기고 GM=OM−OG 로 차를 만들어야 계산 대상이 생김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사면체 대칭으로 a·a=b·b=c·c=1, a·b=b·c=c·a=1/2 임을 한꺼번에 확보해야 전개된 여섯 항을 좌표 없이 수치로 정리할 수 있음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정사면체·공간도형에서 내적 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    432·442 의 정사면체 내적을 무게중심과 중점 두 겹 위에 올린 문항이다. GM 을 O 시점으로 되돌리는 차 계산에서 계수가 −1/3, 1/6, 1/2 로 지저분해지고 전개 항이 여섯 개라 정리 부담이 크다. 분해(RT d2)와 대칭 내적표(SYM d2) 둘 다 필요해 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "OG=(a+b)/3, GM=(b+c)/2 − (a+b)/3 → 전개 → 모든 쌍 내적이 1 또는 1/2 → 1/12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: crop:fig-212-448.png
  latex: latex-bank/gn-geo/items/212-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 1 만 바꿀 수 있고 답은 그 제곱에 비례한다. 제약: 정사면체 대칭이 내적표의 근거라 모서리를 다르게 줄 수 없음. G, M 을 다른 면의 무게중심·다른 모서리의 중점으로 옮기면 계수만 바뀌고 골조는 같음."
    creative: "(1) OG·OM 이나 AG·CM 처럼 짝을 바꾸기(★4 유지) (2) G 를 내심·외심으로 바꾸면 대칭 좌표가 필요해짐(★5 후보 · SYM d3) (3) |GM| 을 묻기(크기 계산 추가 ★4) (4) OG ⊥ GM 인지 판정시키기(432 골조 결합 · ★4)."
```

```yaml
- id: GN-GEO-212-449
  page: 212
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    가로·세로·높이가 각각 $4$, $2$, $2$ 인 직육면체에서 두 대각선 벡터 $\overrightarrow{\pt{DF}}$, $\overrightarrow{\pt{BG}}$ 가 이루는 각의 크기.
  category: "직육면체에 좌표 도입 → 두 벡터 성분 → 내적 0 → 90°"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점 라벨만 있는 입체를 한 꼭짓점을 원점으로 하는 좌표로 옮겨야 DF, BG 가 성분으로 쓰이고, 어느 모서리가 4·2·2 인지 그림에서 읽어 축에 맞추는 것까지가 이 전환의 내용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직육면체에서 두 벡터가 이루는 각(좌표 도입)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표만 제대로 잡으면 내적이 곧바로 0 이 되어 각 계산도 크기 계산도 필요 없다. 부담은 전부 꼭짓점 대응(DF 는 면대각선, BG 는 옆면의 대각선)을 그림에서 정확히 읽는 데 있다(T-표기). [분류 이슈] 실력 UP ★4 출발이나 좌표 뒤 한 줄이라 −1 하여 ★3.
  tier: star_3
  mechanism_primary: "한 꼭짓점을 원점으로 좌표 도입 → DF, BG 성분 → 내적 = 0 → 90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90^\circ$'
  answer_source: "답지"
  figure: crop:fig-212-449.png
  latex: latex-bank/gn-geo/items/212-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이를 바꿀 수 있으나 수직이 성립하는 것은 특정 비(세로와 높이가 같을 때)뿐이다. 제약: 답을 90° 로 유지하려면 두 대각선의 성분 내적이 0 이 되는 조건을 먼저 세우고 길이를 역산할 것. 그림의 꼭짓점 라벨 A~H 배치는 고정."
    creative: "(1) 높이를 바꿔 수직이 깨지면 cosθ 를 묻는 일반형이 됨(★3) (2) 수직이 되도록 하는 높이를 묻는 역방향(I-BW d1 추가 → ★4) (3) 정육면체로 특수화하면 대칭으로 좌표 없이도 보임(SYM d2 · ★3) (4) 두 대각선의 교점·정사영을 잇기(450 골조 결합 → ★4)."
```

```yaml
- id: GN-GEO-212-450
  page: 212
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    세 점 $\pt{O}(0,0)$, $\pt{P}(2,2)$, $\pt{Q}(4,2)$ 에서 점 $\pt{P}$ 에서 직선 $\pt{OQ}$ 에 내린 수선의 발을 $\pt{H}$ 라 할 때 $\overrightarrow{\pt{OH}}=(m,n)$ 의 $m+n$ 을 벡터의 내적으로 구하기.
  category: "수선의 발 → OH = kOQ 로 두고 PH ⊥ OQ → k 결정(정사영 벡터)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「수선의 발」이라는 기하 조건을 OH = kOQ(직선 위) 와 (OH−OP)·OQ = 0(수직) 두 대수 조건으로 옮겨야 k 가 정해짐 — 결과가 정사영 벡터 공식 OH = (OP·OQ/|OQ|²)OQ"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수선의 발과 정사영 벡터"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    443 이 정사영의 「크기」였다면 여기는 정사영 「벡터」다. H 가 직선 OQ 위에 있다는 것을 실수배로, 수선이라는 것을 내적 0 으로 각각 옮겨 연립하는 번역이 전부이고 그 뒤는 성분 산술이다. [분류 이슈] 실력 UP ★4 출발이나 통찰 1·정사영 공식 한 번이라 −1 하여 ★3.
  tier: star_3
  mechanism_primary: "OH = kOQ 로 두고 (OH−OP)·OQ = 0 → k = OP·OQ/|OQ|² = 3/5 → OH 성분 → m+n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{18}{5}$'
  answer_source: "답지"
  figure: crop:fig-212-450.png
  latex: latex-bank/gn-geo/items/212-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P, Q 의 좌표를 바꿀 수 있음. 제약: |OQ|² 가 OP·OQ 를 나누면 k 가 정수·간단한 기약분수가 되어 성분이 깔끔함. Q 가 축 위에 있으면 수선의 발이 자명해지므로 일반 방향으로 둘 것. 그림의 O, P, Q, H 배치는 고정."
    creative: "(1) 선분 PH 의 길이(점과 직선 사이의 거리)를 묻기(★3) (2) 정사영의 크기만 묻기(443 · ★2) (3) 공간의 세 점으로 올리기(★3) (4) H 가 선분 OQ 를 내분하는 비를 묻기(★4) (5) Q 를 미지수로 두고 OH 가 주어졌을 때 역으로 묻기(I-BW d1 추가 → ★4)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 2 · ★2 21 · ★3 7 · ★4 2 · ★5 0
- 통찰형 14 · 절차형 18 · premium 0 · novelty_score 는 전부 0
- 통찰 유형 분포(연 18회): I-RT 8 · I-SYM 3 · I-EQV 4 · I-MI 1 · I-BW 1 · I-CON 1. 이 단원 변별의 8할이 「기하 배치 → 기준벡터·좌표로 옮기기(RT)」와 「크기·넓이 조건을 제곱·역산해 내적 꺼내기(EQV·BW)」 둘에서 나온다. SC·VF·XU·PD 는 0 이라 ★5 자격(§2.13)을 갖춘 문항이 이 범위에 없다.
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · 특강 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★3.5. 벤더 층이 대체로 유지되나 STEP 2 와 실력 UP 에서 각각 −1 이 두 건씩 나왔다(443·446 / 449·450).
- type_hint 상위: 「평면·공간벡터의 수직 조건으로 미지수 정하기」 4(e19·428·e20·440) · 「정사면체·공간도형·정다각형에서 기준벡터 분해로 내적」 4(432·442·448 + 441) · 「내적으로 사잇각을 구해 넓이 / 넓이 공식」 4(427·438 + 433·446) · 「크기 조건을 제곱해 내적 끌어내기」 3(e18·426·436) · 「성분으로 주어진 두 벡터가 이루는 각」 2(e17·423)
- 그림: 9문(`crop:fig-206-427.png` · `crop:fig-208-432.png` · `crop:fig-210-434.png` · `crop:fig-211-441.png` · `crop:fig-211-442.png` · `crop:fig-212-447.png` · `crop:fig-212-448.png` · `crop:fig-212-449.png` · `crop:fig-212-450.png`). 이 중 판정에 그림 확인이 실제로 필요했던 것은 212-449 하나(모서리 4·2·2 와 꼭짓점 배치가 발문에 없음)이고 나머지는 발문이 구조를 모두 서술한다.
- 답 확인 필요 표기: 없음. 골조를 잡는 과정에서 전사본 answer 와 어긋나 보이는 문항은 나오지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-208-431 | 확인체크(★1 출발)인데 수직 2식 연립 + 크기 제곱 조건으로 M_total 8, 답이 ± 두 벡터. 각 단계는 표준 대입이라 ★2 로 두었으나 노동량만 보면 ★3 | ★2 / ★3 |
| GN-GEO-208-432 | 값이 아니라 수직 「증명」이라 채점 축이 다름. 통찰 2(RT·SYM)이지만 전개는 한 줄 | ★2 / ★3 |
| GN-GEO-211-440 | M_total 8 이나 상승 원인이 3원 연립 계산 마찰뿐. v3.8 §2.11 에 따라 ★ 상승 신호로 쓰지 않고 e20 과 같은 ★2 로 둠 | ★2 / ★3 |
| GN-GEO-211-443 | STEP 2(★3 출발)인데 정사영 크기 공식 한 번 대입·통찰 0·M_total 5. −1 하여 ★2 | ★2 / ★3 |
| GN-GEO-212-449 | 실력 UP(★4 출발)인데 좌표만 잡으면 내적 0 한 줄. 부담이 그림 판독에 쏠려 있어 −1 하여 ★3 | ★3 / ★4 |
| GN-GEO-212-450 | 실력 UP(★4 출발)이나 정사영 벡터 공식 한 번으로 닫힘. 443 과 같은 유형의 벡터판이라 −1 하여 ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「수직·평행 조건으로 미지수 정하기」는 평면 2성분(e19·428)과 공간 3성분 연립(e20·440)이 연립 부담에서 갈리므로 base ★ 를 나눠 둘 것. (2) 「기준벡터 분해형 내적」은 평면 정다각형·평행사변형(441·447)과 공간 정사면체(432·442·448)가 같은 착안이지만 항 수와 내적표 확보 난도가 달라 분리 권장. (3) 「정사영」은 크기(443)와 벡터·수선의 발(450)이 공식은 하나지만 요구 산출물이 달라 별도 유형이 맞다.
- **통합해도 될 유형**: (1) 「크기 조건 제곱 → 내적 추출」(e18·426·436·444)은 조건이 |a−b| 든 a+b+c=0 이든 계수 결합이든 같은 한 유형으로 묶고 base ★ 를 내적 추출 이후 단계 수로만 가르면 된다. (2) 「내적 → 사잇각 → 넓이」(427·438)와 「넓이 공식 직접 대입」(433·446)은 경로만 다른 한 유형(삼각형·평행사변형 넓이)으로 두고 I-SC 를 붙일지로 변별하는 편이 낫다. (3) 「미지수를 정한 뒤 cosθ」(424·437)는 조건이 내적이냐 크기냐의 차이뿐이라 한 유형.
- **카탈로그 설계 시 주의**: 이 단원은 base ★ 가 ★2 에 몰릴 수밖에 없는 구조(도구 다섯 개)라, ★4 이상 슬롯은 「조건 번역이 두 겹 이상」(447 의 보각 전환 + 분해, 448 의 무게중심 + 대칭 내적표)인 경우로 한정하는 것이 학생 체감과 맞는다. ★5 는 이 범위에 없다 — SC·VF·SYM·XU 중 하나를 깊이 요구하는 문항이 필요하다.
