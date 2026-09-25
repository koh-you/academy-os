---
name: mechanism-데이터-GN-GEO-29
description: 개념원리 기하 29 두 평면이 이루는 각(1/1 · 9문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 29 두 평면이 이루는 각
  unit_code: "29"
  part: "1/1"
  extract_range: "238~240쪽 · 238-e13~240-505"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 결정(비었으면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 기하 · 29 두 평면이 이루는 각 (1/1) 정독 데이터 (v1.0)

238~240쪽의 9문항 전수다. 전사본 group section 은 「필수·발전 예제」 하나뿐이고, 그 안이 필수 예제 3문(`238-e13` · `239-e14` · `240-e15`)과 각 예제 바로 아래의 확인체크 6문(`500`~`505`)으로 번갈아 놓여 있다. 이 단원의 도구는 네 개뿐이다 — 평면의 계수에서 법선벡터를 읽는 것, 직선의 표준형에서 방향벡터를 읽는 것(분자의 `2-y`·`3-z` 부호 뒤집기가 상시 함정), 두 평면의 각은 법선끼리의 예각(cos), 직선과 평면의 각은 방향벡터와 법선의 여각(sin). 평행·수직·「만나지 않는다」는 모두 이 네 도구의 동치 변환으로 환원된다.

벤더 난이도 신호는 구역과 태그다. 다만 이 범위의 확인체크는 「개념원리 익히기」 통번호 문항이면서 **필수 예제 바로 아래의 유제**라 예제와 같은 층이다. 그래서 확인체크의 ★ 출발점도 예제와 같은 ★2 로 잡고 M_total·통찰로 ±1 조정했으며, 원 규칙(확인체크 → ★1 출발)과 2단 이상 벌어진 문항만 파일 끝 이슈 표에 남겼다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-238-e13
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 두 평면 $3x-5y+4z=0$, $4x-5y-3z=1$이 이루는 각의 크기. ⑵ 평면 $x+2y+3z=4$와 $zx$평면이 이루는 각 $\theta$에 대한 $\cos\theta$.
  category: "두 평면 → 법선벡터 → 내적으로 예각 cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각의 크기(법선벡터 내적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 평면이 이루는 각 = 두 법선벡터가 이루는 예각. ⑴ (3,-5,4)·(4,-5,-3)=25 이고 두 벡터의 크기가 모두 같아 cos 이 1/2 로 떨어진다. ⑵ 는 zx평면의 법선이 (0,1,0) 임을 옮기면 한 줄.
    조건을 벡터로 옮기는 것 말고 별도 착안이 없어 절차형. 필수 예제 출발 ★2 · 통찰 0·M_total 5 로 −1 후보지만 소문항 2개이고 좌표평면 처리가 하나 더 있어 내리지 않았다.
  tier: star_2
  mechanism_primary: "평면의 계수 → 법선벡터 → 내적 / 크기 곱 → 예각 θ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60^\circ$ ⑵ $\dfrac{\sqrt{14}}{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/238-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 법선벡터의 성분 전부. 제약: cos 이 1/2·√2/2·√3/2 같은 특수각으로 떨어지려면 내적과 두 크기의 곱이 정수비로 정리돼야 한다(여기서는 두 크기가 모두 √50 인 대칭 설계). ⑵ 의 zx평면은 xy·yz 로 바꿔도 같은 골조."
    creative: "(1) 좌표평면 대신 일반 평면을 하나 더 주기(★2 유지) (2) 이루는 각이 60°가 되도록 하는 계수를 역으로 묻기(501 골조 · I-BW/I-VF → ★3) (3) 세 평면을 주고 두 쌍의 각을 비교시키면 Mₛ 상승 → ★3."
```

```yaml
- id: GN-GEO-238-500
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 $(1,0,0)$, $(0,2,0)$, $(0,0,1)$을 지나는 평면과 $xy$평면이 이루는 각 $\theta$에 대한 $\cos\theta$.
  category: "절편형 평면 방정식 → 법선벡터 → xy평면 법선과 내적"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점으로 정해진 평면과 좌표평면이 이루는 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 점이 모두 좌표축 위에 있으므로 절편형으로 평면을 바로 세운다: x/1+y/2+z/1=1, 즉 2x+y+2z=2. 법선 (2,1,2) 의 크기가 3 이고 xy평면 법선 (0,0,1) 과의 내적이 2 라 cos 이 정수비로 떨어진다.
    e13 과 같은 골조에 「평면을 먼저 구한다」가 한 단계 붙은 형태. 통찰 인정 없이 절차형이지만 그 한 단계 때문에 확인체크 출발 ★2 에서 내리지 않았다.
  tier: star_2
  mechanism_primary: "세 절편 → 절편형 평면 방정식 → 법선 (2,1,2) → (0,0,1)과 내적 → cos"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/238-500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 절편 (a,b,c) 와 비교 대상 좌표평면. 제약: 절편이 0 이면 절편형이 성립하지 않으므로 모두 0 이 아니어야 하고, 법선 크기가 정수로 떨어지는 (2,1,2)·(1,2,2)·(3,4,12) 류 조합을 써야 cos 이 유리수."
    creative: "(1) 묻는 좌표평면을 yz·zx 로 바꾸기(★2 유지) (2) 세 점을 축 위가 아닌 일반 점으로 주면 평면 결정에 외적·연립이 필요해 Mₛ·Mₖ 상승 → ★3 (3) 각 대신 삼각형과 그 정사영의 넓이 비로 cos 을 구하게 하면 I-RT 추가 → ★3."
```

```yaml
- id: GN-GEO-238-501
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 $\dfrac{x-2}{3}=\dfrac{y+1}{-2}=z-3$에 수직인 평면과 평면 $2x+y+az+5=0$이 이루는 각이 $60^\circ$일 때 정수 $a$.
  category: "직선⊥평면 → 법선=방향벡터 → 각 조건 → 이차방정식 → 정수근 선별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직선에 수직인 평면」을 그 직선의 방향벡터 (3,-2,1) 을 법선으로 갖는 평면으로 옮김 — 평면 자체는 끝까지 구하지 않는다"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변 제곱으로 얻은 이차방정식의 두 근 중 「정수」 조건을 만족하지 않는 쪽을 기각해야 답이 하나로 확정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "이루는 각이 주어졌을 때 평면의 미정계수(두 평면 판)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평면을 실제로 세우지 않고 「법선 = 직선의 방향벡터」만 옮기는 것이 첫 관문이다. cos60°=1/2 에서 2|a+4|=√14·√(a²+5), 제곱하면 a 에 대한 이차방정식이 되고 두 근 중 정수인 것만 남는다.
    동치 변환(d1) + 사후 필터(d1) 2개 · M_total 7 → 확인체크 출발 ★2 에서 +1.
    [분류 이슈] 벤더 구역 신호(개념 확인 → ★1 출발)와 판정 ★3 이 2단 차 — 라벨은 판정대로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "직선의 방향벡터를 법선으로 치환 → cos60° 식 → 양변 제곱 → 이차방정식 → 정수근 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/238-501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각(60°/45°)·직선의 방향벡터·평면의 계수 2,1. 제약: 제곱 후 이차방정식이 유리근을 가져야 하고, 두 근 중 정수가 정확히 하나여야 「정수 a」 발문이 유일한 답을 준다. 방향벡터는 크기가 정리되는 값으로."
    creative: "(1) 「정수」 조건을 빼고 모든 실수 a 를 묻기 — I-VF 가 사라져 ★2 (2) 각 조건을 평행·수직으로 바꾸면 비례식/내적 한 줄 → ★1~2 (3) 상대를 평면이 아니라 다른 직선으로 바꾸면 sin 공식 골조(e15·504)로 이동하되 ★3 유지."
```

```yaml
- id: GN-GEO-239-e14
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 평면 $\alpha\colon x+2y+(k-1)z+1=0$, $\beta\colon 2x+ky+6z-2=0$에 대해 ⑴ $\alpha\parallel\beta$ ⑵ $\alpha\perp\beta$ 가 되도록 하는 실수 $k$.
  category: "법선벡터 비례(평행)·내적 0(수직) 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 평행·수직 조건과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 법선의 세 성분 비가 같다는 식에서 k 를 잡고 상수항 비만 달라야 일치평면이 아님을 확인한다. ⑵ 는 내적이 k 의 일차식으로 떨어져 한 줄.
    두 조건 모두 단원의 정의식을 그대로 쓰는 자리라 통찰 인정 없음(후보가 여러 개 나와 기각되는 구조도 아니다). 필수 예제 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 법선벡터 → 평행이면 성분 비 일치(상수항 비는 제외) · 수직이면 내적 0 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/239-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 가 놓인 계수 자리와 나머지 상수. 제약: ⑴ 은 세 비가 동시에 같아지는 k 가 실제로 존재하도록 계수를 짝지어야 하고(여기서는 2번째·3번째 비가 함께 1/2), ⑵ 는 내적이 k 의 일차식으로 남아야 답이 하나."
    creative: "(1) 「두 평면이 일치할 조건」을 추가해 상수항까지 비교시키면 사후 검증이 붙어 ★3 (2) k 가 두 자리에 들어가 평행 조건이 이차식이 되게 하면 후보 기각(502 골조) → ★3 (3) 평행·수직 대신 이루는 각 60° 조건으로 바꾸면 501 골조 → ★3."
```

```yaml
- id: GN-GEO-239-502
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 평면 $\alpha\colon 3x+(8-a)y-z=0$, $\beta\colon ax+4y+(4-a)z+3=0$이 서로 평행하도록 하는 실수 $a$.
  category: "법선벡터 성분 비례식 → 후보 a → 남은 비로 기각"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "앞의 두 비에서 나온 a 의 두 후보 중 세 번째 성분 비를 만족하지 않는 쪽을 기각 — 검증을 빼면 틀린 값을 답으로 제출하게 된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 평면이 평행할 조건(법선벡터 비례·후보 기각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 ⇔ 세 성분 비가 모두 같음. 앞의 두 비만 쓰면 a 의 이차방정식이 되어 후보가 둘 나오고, 세 번째 비를 대입해야 하나가 떨어진다.
    골조 자체는 비례식 한 줄이고 통찰은 사후 필터 1개(d1) 뿐이라 확인체크 출발 ★2 유지. M_total 7 은 이차방정식 처리에서 온 노동량이지 변별 요인이 아니다.
  tier: star_2
  mechanism_primary: "세 성분 비례식 → 두 비로 이차방정식 → 남은 비로 후보 기각 → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/239-502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 가 들어가는 자리와 고정 계수 3, 4. 제약: 두 비에서 나온 이차방정식의 두 근 중 정확히 하나만 세 번째 비를 만족해야 기각 구조가 살아 있고, 상수항 비는 달라야 「평행」(일치가 아님)이 유지된다."
    creative: "(1) 평행 대신 수직으로 바꾸면 내적 일차식 한 줄 → ★1~2 (2) 상수항까지 비례하게 만들어 「두 평면이 일치할 조건」을 묻기 → ★3 (3) 만족하는 a 가 없도록 계수를 잡고 「존재하지 않음을 보이시오」로 바꾸면 I-BW 추가 → ★3."
```

```yaml
- id: GN-GEO-239-503
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(-1,1,-2)$를 지나고 두 평면 $x-3y+3z=0$, $x+y-2z=1$에 모두 수직인 평면의 방정식.
  category: "구하는 평면의 법선 ⊥ 두 법선 → 외적 → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 평면에 모두 수직」을 「구하는 평면의 법선벡터가 두 법선 (1,-3,3), (1,1,-2) 에 모두 수직」으로 두 번 옮겨야 계산이 시작된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면에 모두 수직인 평면의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평면⊥평면 ⇔ 법선⊥법선 을 두 번 적용하면 구하는 법선은 두 법선 모두에 수직인 벡터, 즉 외적 방향(또는 내적 0 인 연립의 해)이다. 성분이 정수로 떨어지고 지나는 점을 대입하면 상수항이 정해진다.
    번역이 유일한 관문이고 계산은 짧다. 통찰 1개(d2)·M_total 6 → 확인체크 출발 ★2 유지(+1 은 통찰 2개 또는 depth 3 에서만).
  tier: star_2
  mechanism_primary: "두 법선에 모두 수직인 벡터를 외적으로 구함 → 그것을 법선으로 → 지나는 점 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3x+5y+4z+6=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/239-503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수와 지나는 점. 제약: 두 법선이 평행하면 구하는 평면이 하나로 정해지지 않으므로 평행하지 않게 잡고, 외적 성분이 정수로 떨어지며 공약수로 약분되지 않게 한다. 두 평면의 상수항은 답에 영향이 없다."
    creative: "(1) 「두 평면의 교선을 포함하는 평면」으로 바꾸면 평면다발 골조로 이동 → ★3 (2) 수직 조건 하나를 「어떤 직선을 포함한다」로 바꿔도 같은 외적 골조 → ★2 (3) 지나는 점 대신 원점과의 거리 조건을 주면 상수항 후보가 둘 생겨 I-VF 추가 → ★3."
```

```yaml
- id: GN-GEO-240-e15
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 직선 $l\colon x-1=\dfrac{2-y}{4}=z-3$과 평면 $\alpha\colon x+2y-2z+5=0$이 이루는 각의 크기. ⑵ 직선 $l\colon \dfrac{x-2}{2}=\dfrac{1-y}{3}=\dfrac{6-z}{2}$와 평면 $\alpha\colon 3kx+(5-k)y+2kz=19$가 만나지 않도록 하는 실수 $k$.
  category: "방향벡터·법선벡터 → sin 으로 각 / 「만나지 않음」 ⇔ 평행"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 의 「직선과 평면이 만나지 않는다」를 「방향벡터와 법선벡터의 내적이 0 이고 직선이 평면에 포함되지 않는다」로 옮겨야 식이 선다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각·만나지 않을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 직선과 평면의 각이 방향벡터와 법선의 각의 여각이라는 것, 즉 cos 이 아니라 sin 자리에 내적을 놓는 것이 핵심이다. ⑵ 는 「만나지 않음」을 평행 + 비포함으로 옮기면 내적이 k 의 일차식으로 떨어진다.
    두 소문항 모두 분자가 2-y·1-y·6-z 라 방향벡터의 부호를 뒤집는 T-표기 함정이 겹쳐 있다.
    동치 변환 d2 · M_total 8 → 필수 예제 출발 ★2 에서 +1.
  mechanism_primary: "직선 표준형 → 방향벡터(부호 주의) → 법선과 내적 → ⑴ sin 으로 각 ⑵ 내적 0 으로 k"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $45^\circ$ ⑵ $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/240-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 방향벡터와 평면의 계수. 제약: ⑴ 은 |d·n| 과 |d||n| 의 비가 1/2·√2/2·√3/2 로 떨어져야 특수각이 나오고(여기서는 9 와 9√2), ⑵ 는 내적이 k 의 일차식이어야 답이 하나. 포함되지 않음을 확인할 수 있게 직선 위 한 점이 평면 밖이어야 한다."
    creative: "(1) ⑵ 를 「직선이 평면에 포함되도록 하는 k」로 바꾸면 점 대입까지 필요해 I-VF 추가 → ★3 유지~★4 (2) ⑴ 에서 각 대신 직선의 정사영 길이나 평면과 이루는 각의 tan 을 묻기(I-RT) → ★3 (3) 평면을 좌표평면으로 바꾸면 법선이 단위벡터가 되어 ★2."
```

```yaml
- id: GN-GEO-240-504
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 $x-1=\dfrac{y+2}{2}=3-z$와 평면 $ax+y+z=0$이 이루는 각이 $30^\circ$일 때 실수 $a$.
  category: "sin 공식 → 양변 제곱 → 이차방정식(중근)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이루는 각이 주어졌을 때 평면의 미정계수(직선-평면 판)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3-z 를 (z-3)/(-1) 로 읽어 방향벡터의 z 성분 부호를 뒤집는 것이 실수 포인트다. sin30°=1/2 식을 세우고 양변을 제곱하면 a 의 이차방정식이 되는데 중근이라 후보 기각 단계가 없다.
    공식 대입 뒤 이차방정식 한 번으로 끝나 통찰 인정 없음(501 과 달리 사후 필터가 없다). 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "방향벡터(부호 주의)·법선 → sin30° 식 → 양변 제곱 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/240-504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각(30°/45°/60°)·직선의 방향벡터·평면의 계수. 제약: 제곱 후 이차방정식이 유리근을 가져야 하고, 중근이 아니면 답이 둘이 되므로 「실수 a」 발문을 「양수 a」 같은 필터로 고쳐야 한다. 제곱 과정에서 무연근이 생기지 않게 좌변 절댓값이 음이 아닌 범위를 확인."
    creative: "(1) 근이 둘 나오게 계수를 바꾸고 「양수 a」 필터를 붙이면 I-VF 추가 → ★3 (2) 각 조건을 평행(내적 0)으로 바꾸면 일차식 한 줄 → ★1 (3) 직선을 두 평면의 교선으로 주면 방향벡터를 외적으로 먼저 구해야 해 ★3."
```

```yaml
- id: GN-GEO-240-505
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면 $\alpha\colon 4x+ay+2z+5=0$과 직선 $l\colon \dfrac{x-1}{2}=2-y=\dfrac{z+3}{b}$이 서로 수직일 때 $a+b$.
  category: "직선⊥평면 ⇔ 방향벡터∥법선벡터 → 성분 비례"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 조건(방향벡터와 법선벡터의 평행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2-y 를 (y-2)/(-1) 로 읽어 방향벡터의 y 성분을 -1 로 잡는 것만 넘기면, 수직 ⇔ 방향벡터와 법선벡터가 평행이라는 정의를 성분 비례식으로 한 줄 쓰는 것이 전부다.
    미지수가 둘이지만 비례상수가 x 성분에서 바로 정해져 연립이 아니다. 통찰 0 · M_total 5 · Mₛ 1 → 확인체크 출발 ★2 에서 −1 하여 ★1(원 벤더 규칙의 개념 확인 ★1 과 일치).
  tier: star_1
  mechanism_primary: "수직 ⇔ 방향벡터 ∥ 법선벡터 → 성분 비례식으로 a, b → a+b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/240-505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평면의 계수와 직선의 분모. 제약: 비례상수가 유리수로 떨어지도록 x 성분 비를 먼저 정하고 나머지를 맞춘다. 분자에 2-y 같은 부호 뒤집기 형태를 하나는 남겨야 함정이 유지되고, 평면의 상수항은 답에 영향이 없다."
    creative: "(1) 수직 대신 평행(내적 0)으로 바꾸면 미지수 하나가 자유로워져 관계식을 묻게 되고 ★2 (2) 「직선이 평면에 포함된다」로 바꾸면 점 대입이 추가돼 ★2~3 (3) a, b 중 하나를 이루는 각 조건으로 주면 501·504 골조 → ★3."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 1 · ★2 6 · ★3 2 · ★4 0 · ★5 0
- 통찰형 4(`238-501` · `239-502` · `239-503` · `240-e15`) · 절차형 5 · premium 0
- 통찰 유형 분포: I-EQV 3(501·503·e15) · I-VF 2(501·502). I-SC/I-VF/I-SYM/I-XU 중 ★4~5 자격을 주는 조합은 없다.
- type_hint 상위: 「두 평면이 이루는 각(법선 내적)」 2(e13·500) · 「이루는 각이 주어졌을 때 미정계수」 2(501 두 평면 판 · 504 직선-평면 판) · 「두 평면의 평행·수직 조건」 2(e14·502) · 「직선과 평면의 각·위치 관계」 2(e15·505) · 「두 평면에 모두 수직인 평면」 1(503)
- 그림: 0문(이 범위는 전 문항 그림 없음 · figure 전부 none)
- 구역: 전사본 group section 이 「필수·발전 예제」 하나뿐 — 필수 예제 3문 + 확인체크 6문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-238-501 | 벤더 구역 신호로는 확인체크(개념 확인 → ★1 출발)이나 M_total 7 · 통찰 2개(EQV+VF)로 실질은 예제보다 한 층 위. 라벨은 판정대로 ★3 으로 두고 2단 차를 기록 | ★2 / ★3 |
| GN-GEO-239-503 | 「두 평면에 모두 수직인 평면」이 〈평면의 방정식 구하기〉 유형인지 〈두 평면의 수직 조건〉 유형인지 갈림. 외적 골조를 기준으로 전자에 가깝지만 카탈로그 설계 때 결정 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 「법선벡터·방향벡터로 옮긴 뒤 내적 / 비례식」 하나의 상위 유형 아래 네 갈래로 깔끔히 나뉜다 — ① 두 평면의 각(cos) ② 두 평면의 평행·수직 ③ 직선과 평면의 각(sin)·위치 관계 ④ 두 평면에 모두 수직인 평면(외적). ①~③ 은 따로 세우는 편이 좋다(쓰는 공식 자리가 cos/비례/sin 으로 다르고 학생 오답도 갈린다).
- 반대로 **「이루는 각이 주어졌을 때 미정계수를 구한다」(501·504)** 는 ①·③ 각각의 하위(역문제) 변형으로 두면 충분하고 독립 유형으로 세울 필요는 없다. 다만 「후보가 둘 나와 정수·양수 조건으로 기각」이 붙는지(501·502)가 ★2 와 ★3 을 가르는 실제 지점이라 유형 속성으로 기록해 둘 가치가 있다.
- 「직선 표준형의 분자가 2-y·3-z 형태일 때 방향벡터 부호 뒤집기」는 이 단원 전반의 공통 함정(e15·504·505)이라 유형이 아니라 trap 카테고리(T-표기)로 관리하는 편이 낫다.
- ④(503)는 외적을 쓰느냐 연립을 쓰느냐로 풀이 길이가 크게 달라지는 유일한 자리라, 카탈로그에 올릴 때 [다른 풀이] 유무를 확인해 I-SC 승격 가능성을 재검토할 것.
