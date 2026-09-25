---
name: mechanism-데이터-GN-M32-01
description: 개념원리 중학 3-2 01 삼각비(1/1 · 11~15쪽 · 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 01 삼각비
  unit_code: GN-M32-01
  part: "1/1"
  extract_range: "11~15쪽 · 11-01~15-06"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 01 삼각비 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-2 의 01 삼각비 단원 11~15쪽 21문항 전수를 담는다. 구역은 세 층이다 — 「개념원리 확인하기」(11쪽 · 3문) → 「핵심문제 익히기」(12~14쪽 · 핵심문제 `쪽-hN` 과 짝을 이루는 확인문제 `쪽-cN` 12문) → 「이런 문제가 시험에 나온다」(15쪽 · 6문). 개념원리 중학에는 난이도 표기(`level`)가 없고 구역 자체가 난이도 층이며, 태그는 `UP` 두 개(14-h6 · 15-06 · 둘 다 입체도형 문항)뿐이다. 그래서 ★ 는 구역을 출발점(확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3)으로 잡고 M_total 과 통찰로 ±1 조정했다.

단원 전체가 삼각비의 정의를 도입하는 첫 단원이라 절차형이 많고, 변별은 「삼각비 값 ↔ 직각삼각형 그림」·「닮음으로 각 옮기기」·「직선의 방정식 ↔ 절편 삼각형」·「입체 → 평면 단면 추출」 네 가지 표현 전환에서 나온다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-11-01
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 세 변이 주어진 두 직각삼각형에서 한 예각(⑴ 각 A · ⑵ 각 B)의 sin, cos, tan 값을 빈칸에 써넣기.
  category: "기준각 지정 → 대변·이웃변·빗변 식별 → 삼각비 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 뜻 — 직각삼각형에서 sin·cos·tan 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 변이 모두 주어져 기준각만 정하면 정의가 그대로 대입되는 한 단계 문항.
    유일한 함정은 기준각이 바뀌면 대변과 이웃변이 서로 뒤바뀐다는 표기 혼동(T-표기).
    개념원리 확인하기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기준각 확정 → 대변·이웃변·빗변 지정 → sin·cos·tan 정의에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{15}{17}$, $\dfrac{8}{17}$, $\dfrac{15}{8}$ ⑵ $\dfrac{4}{5}$, $\dfrac{3}{5}$, $\dfrac{4}{3}$'
  answer_source: "답지"
  figure: "crop:fig-11-01.png"
  latex: latex-bank/gn-m32/items/11-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 다른 피타고라스 세 쌍(3·4·5, 5·12·13, 7·24·25, 20·21·29)으로 교체. 제약 — 세 변이 정수라야 삼각비가 기약분수로 떨어지고, 그림의 꼭짓점 라벨과 직각 표시 위치는 고정해야 어느 변이 빗변인지 흔들리지 않음."
    creative: "(1) 세 변 중 두 변만 주고 나머지를 피타고라스로 먼저 구하게 하기(★1 유지) (2) 한 변과 한 삼각비 값을 주는 역방향(★1~2) (3) 같은 그림에서 sin A 와 cos B 가 같음을 설명하게 하면 여각 전환 통찰이 생겨 ★2."
```

```yaml
- id: GN-M32-11-02
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 직각삼각형 ABC 에서 ⑴ 변 AC 의 길이, ⑵ 각 B 의 세 삼각비, ⑶ 각 C 의 세 삼각비를 구하기.
  category: "피타고라스로 남은 변 → 두 예각을 각각 기준으로 삼각비 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "남은 한 변을 구한 뒤 두 예각의 삼각비 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변 하나를 피타고라스로 채우면 나머지는 정의 대입뿐이다.
    ⑵와 ⑶ 사이에서 대변·이웃변이 통째로 맞바뀌는 것이 유일한 함정(T-표기).
    확인하기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "피타고라스로 AC 산출 → 각 B 기준 삼각비 → 각 C 기준으로 대변·이웃변을 맞바꿔 삼각비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\sqrt{3}$ ⑵ $\sin\pt{B}=\dfrac{\sqrt{3}}{2}$, $\cos\pt{B}=\dfrac{1}{2}$, $\tan\pt{B}=\sqrt{3}$ ⑶ $\sin\pt{C}=\dfrac{1}{2}$, $\cos\pt{C}=\dfrac{\sqrt{3}}{2}$, $\tan\pt{C}=\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-11-02.png"
  latex: latex-bank/gn-m32/items/11-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 변을 1·2(빗변 √5)·3·4(5)·1·√3(2) 처럼 바꿀 수 있음. 제약 — 30·60·90 비율이나 정수 세 쌍이라야 tan 의 유리화가 한 번으로 끝나고 ⑶의 답이 ⑵의 답과 짝을 이룸."
    creative: "(1) 구하는 변을 빗변이 아니라 다리로 바꾸기(★1 유지) (2) 각 B 의 삼각비만 주고 각 C 의 삼각비를 추론하게 하면 여각 관계 통찰이 붙어 ★2 (3) 삼각형의 넓이를 함께 묻는 한 단계 추가(★2)."
```

```yaml
- id: GN-M32-11-03
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 직각삼각형 ABC 에서 AC=9, sin C = 2/3 일 때 ⑴ AB, ⑵ BC 의 길이 구하기.
  category: "삼각비 값을 변의 비로 되읽어 한 변 결정 → 피타고라스로 나머지 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값이 주어질 때 변의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin C 를 AB/AC 로 되읽어 AB 를 얻고 피타고라스로 BC 를 채우는 2단계.
    역방향이긴 하나 정의 대입 수준이라 I-BW 로 세지 않는다(표준 절차).
    확인하기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin C = AB/AC 에 AC=9 대입 → AB 결정 → 피타고라스로 BC"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $3\sqrt{5}$'
  answer_source: "답지"
  figure: "crop:fig-11-03.png"
  latex: latex-bank/gn-m32/items/11-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin C 를 3/5·5/13·8/17 처럼 피타고라스 세 쌍에서 온 비로 두고 빗변을 그 분모의 배수로. 제약 — 빗변이 분모의 배수라야 두 다리가 정수로 떨어지고, 세 쌍이 아니면 나머지 변이 무리수가 되어 ⑵의 답에 √ 가 남음."
    creative: "(1) 주어진 삼각비를 cos·tan 으로 바꾸면 먼저 결정되는 변이 달라짐(★1 유지) (2) 넓이나 둘레를 이어서 묻기(★2) (3) 삼각비 값을 무리수로 주면 계산 마찰만 늘고 통찰은 그대로라 질이 떨어짐 — 피할 것."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-12-h1
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    직각삼각형 ABC 에 대한 다섯 개의 삼각비 값 중 옳지 않은 것 고르기. 5지선다.
  category: "선택지마다 기준각(A 또는 C)을 바꿔 정의 대입 → 틀린 하나 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값 — 두 예각 기준 전환이 섞인 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 변을 확정한 뒤 다섯 선택지를 모두 계산해야 하는 전수 확인형.
    각 A 와 각 C 사이에서 대변·이웃변이 뒤집히는 것이 오답의 주된 원인(T-표기).
    통찰은 없으나 확인 노동이 있어 핵심문제 구역 출발점 ★2 를 유지.
  tier: star_2
  mechanism_primary: "세 변 확정 → 선택지의 기준각에 맞춰 대변·이웃변·빗변 재지정 → 값 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 답"
  figure: "crop:fig-12-h1.png"
  latex: latex-bank/gn-m32/items/12-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변과 한 다리를 (4,3)에서 (5,3)·(13,5)·(5,4) 로 교체. 제약 — 나머지 변이 무리수면 선택지에 √ 가 들어가므로 유리화 표기를 다섯 선택지에서 통일해야 하고, 오답 선택지는 참값에서 한 군데(분모·분자 뒤집기 또는 기준각 바꿔치기)만 비틀 것."
    creative: "(1) 옳은 것 고르기로 뒤집기(★2 유지) (2) 그림 없이 세 변을 글로만 주면 학생이 직각삼각형을 스스로 그려야 해 ★2~3 (3) 선택지에 sin A 와 cos C 처럼 값이 같아지는 쌍을 넣어 여각 관계를 겨냥하면 ★3."
```

```yaml
- id: GN-M32-12-c1
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    직각삼각형 ABC 에서 tan A × sin C 의 값 구하기.
  category: "남은 변 구하기 → 서로 다른 두 기준각으로 삼각비 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 두 예각의 삼각비 곱 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산 자체는 정의 대입 두 번이지만 tan 은 각 A, sin 은 각 C 기준이라 대변·이웃변을 두 번 다시 지정해야 한다.
    통찰 없음 · M_total 5 · 핵심문제 구역의 확인 문항 → ★2 유지.
  tier: star_2
  mechanism_primary: "피타고라스로 남은 변 → tan A 와 sin C 를 각기 다른 기준각으로 읽음 → 두 값의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{5}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-12-c1.png"
  latex: latex-bank/gn-m32/items/12-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변을 (2,3)·(1,3)·(3,5) 로 교체. 제약 — 남은 변이 √ 꼴이면 답에 유리화가 붙으므로 분모가 정수로 남는 조합을 고를 것."
    creative: "(1) 곱 대신 합·차로 바꾸기(★2 유지) (2) tan A × tan C 처럼 항상 1 로 정리되는 조합을 쓰면 여각 대칭 통찰이 주가 되어 ★3 (3) 곱의 값을 주고 변의 길이를 되묻는 역방향(★2)."
```

```yaml
- id: GN-M32-12-h2
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    직각삼각형 ABC 에서 BC=8, tan B = 3/4 일 때 AB 의 길이 구하기.
  category: "tan 을 변의 비로 되읽어 대변 결정 → 피타고라스로 빗변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비를 이용하여 직각삼각형의 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan B = AC/BC 에 BC=8 을 넣어 AC 를 얻고 피타고라스로 빗변을 채우는 2단계.
    함정은 tan 의 분모가 이웃변이라는 것 하나(T-표기).
    [분류 이슈] 통찰 0 · M_total 4 로 −1 후보(★1)이나, 삼각비를 역방향으로 쓰는 첫 대표 유형이라 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "tan B = AC/BC 로 AC 산출 → 피타고라스로 AB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "본문 답"
  figure: "crop:fig-12-h2.png"
  latex: latex-bank/gn-m32/items/12-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan 값을 3/4·5/12·8/15·7/24 처럼 피타고라스 세 쌍의 비로 두고 주어진 변을 분모의 배수로. 제약 — 분모의 배수라야 두 다리와 빗변이 모두 정수."
    creative: "(1) 주어진 삼각비를 sin·cos 로 바꾸면 결정되는 변이 달라짐(★2 유지) (2) 넓이·둘레를 이어서 묻기(★2) (3) 직각삼각형 둘을 공통변으로 이어 붙여 한 삼각비에서 다른 삼각형의 변을 구하게 하면 ★3."
```

```yaml
- id: GN-M32-12-c2
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    직각삼각형 ABC 에서 AB=12, cos A = 2√2/3 일 때 BC 의 길이 구하기.
  category: "cos 을 변의 비로 되읽어 이웃변 결정 → 피타고라스로 대변"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값이 무리수일 때 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 핵심문제와 골조가 같으나 cos 에서 나온 이웃변이 무리수라 제곱 계산이 한 겹 무겁다.
    빗변과 다리를 뒤바꾸면 근호 안이 음수가 되는 것이 자기 점검 지점.
    통찰 없음 · M_total 5 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "cos A = AC/AB 로 이웃변 AC 산출 → 피타고라스로 BC"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: "crop:fig-12-c2.png"
  latex: latex-bank/gn-m32/items/12-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 값의 분모를 3·5·7 로 두고 분자를 √ 를 포함한 수로, 빗변을 분모의 배수로. 제약 — 분자의 제곱이 분모의 제곱보다 작아야 하고 (빗변² − 이웃변²) 이 완전제곱이라야 답이 정수."
    creative: "(1) cos 대신 sin 을 주기(★2 유지) (2) 답으로 무리수 변 자체를 묻는 것은 계산 마찰만 늘려 질이 떨어짐 — 피할 것 (3) 같은 조건에서 tan A 를 묻거나 넓이를 묻기(★2)."
```

```yaml
- id: GN-M32-13-h3
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    0°<A<90° 이고 sin A = 12/13 일 때 cos A 의 값 구하기.
  category: "삼각비 값 → 변의 길이를 가진 직각삼각형으로 옮기기 → 피타고라스 → 다른 삼각비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "값으로만 주어진 sin A 를 대변 12 · 빗변 13 인 직각삼각형 그림으로 옮겨야 남은 변이 계산된다(대수→기하)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 삼각비의 값을 알 때 다른 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식만 있는 조건을 도형 표현으로 바꿔야 나머지 변이 나온다(I-RT d1). 중3 과정에는 sin²+cos²=1 이 없어 직각삼각형 작도가 유일한 경로다.
    각의 범위 조건은 예각으로 한정해 부호 분기를 없애는 장치(T-범위).
    [분류 이슈] 이 전환은 교과서가 직접 가르치는 표준 절차여서 통찰로 셀지 애매하다. 13-c3 · 15-03 도 같은 판정을 따랐다. 핵심문제 구역 · 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "sin A = 12/13 을 대변 12 · 빗변 13 인 직각삼각형으로 옮김 → 피타고라스로 이웃변 → cos A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{13}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/13-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "12/13 을 3/5·8/17·24/25·20/29 등 피타고라스 세 쌍의 비로 교체. 제약 — 세 쌍이라야 남은 변이 정수이고 답이 기약분수, 아니면 √ 와 유리화가 붙어 난이도가 아니라 마찰만 늘어남."
    creative: "(1) 주는 값을 cos·tan 로 바꾸기(★2 유지) (2) 구하는 것을 두 삼각비의 곱·합으로 한 단계 늘리기(★2) (3) 각의 범위 조건을 빼면 부호 분기가 생기지만 중3 과정 밖이라 사용 금지."
```

```yaml
- id: GN-M32-13-c3
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    0°<A<90° 이고 cos A = 5/7 일 때 sin A × tan A 의 값 구하기.
  category: "삼각비 값 → 직각삼각형으로 옮기기 → 남은 변(무리수) → 두 삼각비의 곱 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos A 값을 이웃변 5 · 빗변 7 인 직각삼각형으로 옮겨야 대변이 구해지고 나머지 두 삼각비가 정의된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 삼각비의 값을 알 때 다른 삼각비의 곱 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표현 전환 골조는 앞 핵심문제와 같고(I-RT d1), 남은 변이 무리수라 곱을 정리할 때 근호가 제곱되어 사라지는 과정이 한 겹 더 붙는다.
    핵심문제 확인 문항 · 통찰 1개 d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cos A = 5/7 을 이웃변 5 · 빗변 7 인 직각삼각형으로 옮김 → 피타고라스로 대변 → sin A 와 tan A 를 곱해 근호 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{24}{35}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m32/items/13-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 값을 1/3·2/5·3/7·5/9 처럼 세 쌍이 아닌 비로 두면 남은 변이 무리수가 되고, sin×tan 에서는 그 근호가 제곱되어 답이 유리수로 떨어짐. 제약 — 분자<분모, 그리고 곱하는 두 삼각비에 근호가 짝수 번 들어가야 답이 유리수."
    creative: "(1) 곱을 sin/tan 이나 tan/cos 으로 바꾸면 남는 근호 개수가 달라져 답이 무리수가 됨(★2) (2) 세 삼각비의 곱을 묻기(★2) (3) cos A × tan A = sin A 처럼 항등 관계를 알아채면 계산 없이 끝나는 배치로 만들면 I-EQV 가 붙어 ★3."
```

```yaml
- id: GN-M32-13-h4
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ ∠BAC=90° 인 직각삼각형 ABC 에서 빗변에 수선 AH 를 내리고 ∠BAH=x 라 할 때 ⑴ sin x, ⑵ tan x 구하기.
  category: "직각삼각형의 닮음으로 ∠BAH 를 ∠C 로 바꿔 읽기 → 큰 삼각형의 세 변으로 삼각비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "빗변에 내린 수선이 만든 닮음에서 ∠BAH = ∠C 임을 알아내 작은 삼각형의 변을 구하지 않고 △ABC 의 세 변으로 삼각비를 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직각삼각형의 닮음과 삼각비 — 수선이 만든 각 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수선 AH 로 생긴 세 닮은 삼각형에서 x 가 ∠C 와 같다는 것을 보면 AH·BH 를 따로 구할 필요가 없다(I-EQV d2).
    각을 옮기지 못하면 길이 계산이 두 배로 늘어나므로 전환 여부가 곧 난이도다.
    핵심문제 구역 ★2 출발 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "△ABH 와 △CBA 의 닮음에서 x = ∠C → △ABC 의 세 변으로 sin x · tan x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{15}{17}$ ⑵ $\dfrac{15}{8}$'
  answer_source: "본문 답"
  figure: "crop:fig-13-h4.png"
  latex: latex-bank/gn-m32/items/13-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다리를 8·15(빗변 17) 대신 3·4(5)·5·12(13)·7·24(25) 로. 제약 — 정수 세 쌍이라야 옮긴 각의 삼각비가 기약분수로 떨어지고, 그림의 직각 표시와 점 H 의 위치 라벨은 고정."
    creative: "(1) ∠CAH=y 로 바꿔 묻기(같은 골조 ★2) (2) x 와 y 의 삼각비를 곱·합으로 함께 묻기(★3) (3) 각을 옮기지 않고 AH·BH 를 먼저 구하게 유도하면 계산만 무거워지고 통찰은 사라져 질이 떨어짐 — 피할 것."
```

```yaml
- id: GN-M32-13-c4
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ ∠A=90° 인 직각삼각형 ABC 에서 DE⊥BC 이고 ∠BDE=x 라 할 때 ⑴ cos x, ⑵ tan x 구하기.
  category: "공통각과 직각으로 생긴 닮음에서 ∠BDE 를 ∠C 로 바꿔 읽기 → 큰 삼각형의 세 변으로 삼각비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "△DBE 와 △CBA 가 각 B 를 공유하는 직각삼각형이므로 ∠BDE = ∠C 로 옮겨 읽고, 작은 삼각형의 변은 구하지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "닮음으로 옮긴 각의 삼각비 — 수선의 발이 변 위에 있는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수선의 발이 삼각형 안쪽 변 위로 옮겨졌을 뿐 각을 옮기는 골조는 앞 핵심문제와 같다(I-EQV d2).
    큰 삼각형의 빗변을 피타고라스로 먼저 채워야 하고 한 다리가 무리수라 tan 에서 유리화가 붙어 M_k 가 한 단 높다.
    통찰 1개 d2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 B 공유·직각에서 ∠BDE = ∠C → 피타고라스로 BC 를 채운 뒤 △ABC 의 세 변으로 cos x · tan x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{4\sqrt{2}}{9}$ ⑵ $\dfrac{7\sqrt{2}}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-13-c4.png"
  latex: latex-bank/gn-m32/items/13-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다리를 7·4√2(빗변 9) 대신 정수 세 쌍으로 바꾸면 유리화가 사라져 가벼워짐. 제약 — 두 다리의 제곱합이 완전제곱이라야 빗변이 정수이고, 점 D·E 의 위치와 수직 표시 라벨은 고정."
    creative: "(1) ∠DEC 같은 다른 각을 묻기(★2) (2) DE 의 길이를 함께 묻으면 닮음비 단계가 추가돼 ★3 (3) 점 D 를 변 AC 위로 옮기면 옮겨지는 각이 ∠B 로 바뀌어 같은 골조의 쌍둥이 문항이 됨(★2)."
```

```yaml
- id: GN-M32-14-h5
  page: 14
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    직선 y=2x+4 가 x축, y축과 만나는 점을 각각 A, B 라 할 때 이 직선이 x축의 양의 방향과 이루는 각 α 에 대해 sin α, cos α 의 값 구하기.
  category: "직선의 절편으로 직각삼각형 작도 → 두 다리와 빗변 → 삼각비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선의 방정식을 두 절편이 원점과 만드는 직각삼각형으로 옮겨야 각 α 의 대변·이웃변·빗변이 생긴다(대수↔기하)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선의 방정식과 삼각비 — 기울기를 tan 으로 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식만으로는 각이 보이지 않고 두 절편이 만드는 직각삼각형으로 옮겨야 삼각비가 정의된다(I-RT d2).
    기울기가 곧 tan α 임을 알면 변을 다시 세지 않아도 두 다리의 비가 바로 나온다.
    빗변은 무리수라 유리화가 한 번 붙는다. 핵심문제 구역 ★2 출발 · 통찰 1개 d2 → ★2.
  tier: star_2
  mechanism_primary: "x·y 절편으로 두 점 확정 → 원점과 이루는 직각삼각형의 두 다리와 빗변 → sin α · cos α 유리화"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sin\alpha=\dfrac{2\sqrt{5}}{5}$, $\cos\alpha=\dfrac{\sqrt{5}}{5}$'
  answer_source: "본문 답"
  figure: "crop:fig-14-h5.png"
  latex: latex-bank/gn-m32/items/14-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기를 2·3·1/2·3/4 로, 상수항을 기울기의 분모 배수로. 제약 — 기울기가 정수비라야 빗변이 √(p²+q²) 꼴로 한 번에 정리되고 유리화가 한 번으로 끝남. 상수항은 각 α 에 영향이 없으므로 비교적 자유."
    creative: "(1) 기울기를 음수로 두고 x축과 이루는 예각으로 한정하기(★2 유지) (2) sin α 값을 주고 직선의 방정식을 되묻는 역방향이면 I-BW 가 붙어 ★3 (3) 직선과 두 축이 만드는 삼각형의 넓이를 함께 묻기(★3)."
```

```yaml
- id: GN-M32-14-c5
  page: 14
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    일차방정식 3x−4y+12=0 의 그래프가 x축의 양의 방향과 이루는 예각을 α 라 할 때 cos α − sin α 의 값 구하기. 그림 없음.
  category: "방정식 → 두 절편 → 직각삼각형 작도 → 두 삼각비의 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림이 없는 상태에서 방정식을 좌표평면 위 절편 삼각형으로 직접 옮겨 그려야 삼각비가 정의된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선의 방정식과 삼각비 — 두 삼각비의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 앞 핵심문제와 같으나 그림이 주어지지 않아 절편 삼각형을 학생이 스스로 그려야 한다(I-RT d2).
    계수가 피타고라스 세 쌍이라 빗변이 정수로 떨어져 계산 부담은 오히려 가볍다.
    확인 문항 · 통찰 1개 d2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x·y 절편 산출 → 두 다리와 정수 빗변의 직각삼각형 → cos α − sin α"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/14-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 계수를 (3,−4)·(5,−12)·(8,−15) 처럼 피타고라스 세 쌍으로, 상수항을 두 계수의 공배수로. 제약 — 빗변이 정수라야 차가 기약분수로 떨어지고, 상수항 부호는 x절편이 음·y절편이 양이 되도록 유지해야 α 가 예각."
    creative: "(1) 차를 합·곱으로 바꾸기(★2 유지) (2) 그림을 함께 주면 표현 전환이 사라져 ★1~2 로 내려감 (3) 직선과 두 축이 만드는 삼각형의 넓이·둘레를 이어서 묻기(★3)."
```

```yaml
- id: GN-M32-14-h6
  page: 14
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    한 모서리의 길이가 6 인 정육면체에서 ∠BHF=x 라 할 때 cos x 의 값 구하기.
  category: "입체에서 직각삼각형 단면 추출 → 모서리·면대각선·대각선 → 삼각비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정육면체 안에서 BF 가 밑면에 수직임을 보고 직각삼각형 BFH 를 평면 단면으로 끄집어내야 삼각비를 쓸 수 있다(공간→평면)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "입체도형에서 삼각비의 값 구하기 — 정육면체의 대각선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    어느 삼각형이 직각인지 찾는 것이 문항의 전부다. BF 가 밑면 EFGH 에 수직이라 △BFH 가 직각삼각형이 되고, 면대각선과 대각선 길이만 있으면 cos 은 바로 나온다(I-RT d2).
    함정은 직각이 어느 꼭짓점에 있는지 오인하는 것(T-표기).
    핵심문제 구역 ★2 출발 + UP 태그(+1) → ★3.
  tier: star_3
  mechanism_primary: "직각삼각형 BFH 추출(모서리 BF · 면대각선 FH · 대각선 BH) → 각 H 기준 이웃변/빗변 → cos x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{6}}{3}$'
  answer_source: "본문 답"
  figure: "crop:fig-14-h6.png"
  latex: latex-bank/gn-m32/items/14-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리를 3·4·6·10 등 어떤 정수로 바꿔도 됨. 제약 — 정육면체에서는 모서리가 약분돼 답에 남지 않으므로 값 자체는 자유이고, 무리수 모서리는 계산 마찰만 늘어 권하지 않음."
    creative: "(1) 묻는 각을 ∠HBF 로 바꾸면 같은 삼각형에서 sin·tan 로 옮겨감(★3 유지) (2) 정육면체를 직육면체로 바꾸면 면대각선이 약분되지 않아 단계가 한 겹 늘어남(★3) (3) 대각선과 밑면이 이루는 각을 정삼각형 BDH 쪽으로 옮기면 단면을 새로 찾아야 해 ★3~4."
```

```yaml
- id: GN-M32-14-c6
  page: 14
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    밑면의 가로·세로가 4, 3 이고 높이가 5 인 직육면체에서 ∠AGE=x 라 할 때 sin x + cos x 의 값 구하기.
  category: "밑면 대각선을 먼저 구해 직각삼각형 단면 완성 → 두 삼각비의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모서리 AE 가 밑면에 수직임을 보고 직각삼각형 AEG 를 단면으로 추출한 뒤, 밑면 대각선 EG 를 피타고라스로 채워야 삼각비가 완성된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직육면체에서 대각선이 이루는 각의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정육면체와 달리 밑면 대각선을 피타고라스로 먼저 만들어야 직각삼각형 AEG 가 완성된다(I-RT d2).
    이 배치는 높이와 밑면 대각선이 같아 두 삼각비가 같아지는 특수 상황이라 합이 간단히 떨어진다.
    [분류 이슈] UP 태그는 없으나 입체 단면 추출 층이 짝 핵심문제(14-h6)와 같아 ★3 으로 두었다(후보 ★2).
  tier: star_3
  mechanism_primary: "밑면 대각선 EG 를 피타고라스로 산출 → 직각삼각형 AEG 추출 → 각 G 기준 sin·cos 의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-14-c6.png"
  latex: latex-bank/gn-m32/items/14-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 두 변과 높이를 (4,3,5)·(6,8,10)·(12,5,13) 로. 제약 — 밑면 두 변의 제곱합이 완전제곱이라야 밑면 대각선이 정수, 높이까지 정수로 정리되려면 (밑면 두 변, 높이)가 연이은 피타고라스 관계여야 함. 높이와 밑면 대각선이 같으면 지금처럼 답이 √2 로 떨어짐."
    creative: "(1) 합 대신 곱·차로 묻기(★3 유지) (2) 높이를 바꿔 밑면 대각선과 다르게 하면 두 삼각비가 갈라지고 유리화가 붙음(★3) (3) ∠AFH 처럼 다른 대각선 위의 각으로 옮기면 단면을 새로 찾아야 해 ★3~4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-15-01
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    직각삼각형 ABC 에 대한 다섯 개의 삼각비 값 중 옳은 것 고르기. 5지선다.
  category: "세 변 확정 → 선택지마다 기준각(A 또는 B)을 바꿔 정의 대입 → 맞는 하나 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값 판정 — 옳은 것 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 다리와 무리수 빗변을 잡으면 선택지마다 기준각을 바꿔 가며 다섯 번 대입하면 된다.
    오답 선택지가 유리화 결과를 한 겹씩 비틀어 놓아 유리화 습관과 기준각 전환이 함정(T-표기).
    시험에 나온다 구역 ★2 출발 · 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "피타고라스로 빗변 → 선택지의 기준각에 맞춰 대변·이웃변 재지정 → 유리화 후 값 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-15-01.png"
  latex: latex-bank/gn-m32/items/15-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다리를 (1,2)·(2,3)·(1,3) 으로 교체. 제약 — 빗변이 무리수라야 유리화 함정이 살아나고, 오답 선택지는 참값에서 분모·분자 뒤집기나 기준각 바꿔치기 한 가지씩만 비틀 것."
    creative: "(1) 옳지 않은 것 고르기로 뒤집기(★2 유지) (2) 선택지를 값이 아니라 대소 비교로 바꾸면 판단 단계가 늘어 ★3 (3) 두 다리 대신 한 다리와 빗변을 주면 피타고라스 단계가 앞에 붙음(★2)."
```

```yaml
- id: GN-M32-15-02
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    직각삼각형 ABC 에서 AC=15 cm, sin C = 3/5 일 때 삼각형 ABC 의 넓이 구하기.
  category: "삼각비를 변의 비로 되읽어 한 변 → 피타고라스로 나머지 변 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비로 변을 구해 직각삼각형의 넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각비 역읽기 → 피타고라스 → 두 다리의 곱의 반, 세 단계의 표준 절차.
    함정은 넓이 단위를 cm² 로 적는 것(T-단위)과 sin 의 분모가 빗변이라는 것뿐이다.
    통찰 없음 · M_total 5 → 시험에 나온다 구역에서 ★2.
  tier: star_2
  mechanism_primary: "sin C = AB/AC 로 AB 산출 → 피타고라스로 BC → 두 다리의 곱의 반으로 넓이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$54\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-15-02.png"
  latex: latex-bank/gn-m32/items/15-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(삼각비 값, 빗변)을 (3/5, 15)·(5/13, 26)·(8/17, 34) 로. 제약 — 빗변이 분모의 배수라야 두 다리가 정수이고 넓이도 정수. 단위를 바꾸면 그림 라벨과 답의 단위를 함께 바꿀 것."
    creative: "(1) 넓이 대신 둘레를 묻기(★2 유지) (2) 넓이를 주고 빗변이나 삼각비 값을 되묻는 역방향이면 I-BW 가 붙어 ★3 (3) 직각삼각형 둘을 붙인 사각형의 넓이로 확장(★3)."
```

```yaml
- id: GN-M32-15-03
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    0°<A<90° 이고 tan A = √2 일 때 sin A × cos A 의 값 구하기.
  category: "tan 값을 두 다리의 비로 옮기기 → 피타고라스로 빗변 → 두 삼각비의 곱 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tan A = √2 를 대변 √2 · 이웃변 1 인 직각삼각형으로 옮겨야 빗변이 생기고 sin·cos 가 정의된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 삼각비의 값을 알 때 다른 삼각비의 곱 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    값을 직각삼각형으로 옮기는 전환이 핵심이고(I-RT d1), 주어진 값이 무리수라 빗변까지 근호가 되어 곱을 정리할 때 유리화가 한 번 붙는다.
    sin×cos 는 (대변×이웃변)/빗변² 이라 근호가 한 번만 남는 구조.
    시험에 나온다 구역 ★2 출발 · 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "tan A 를 대변·이웃변 비로 옮김 → 피타고라스로 빗변 → sin A × cos A 를 유리화해 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{2}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m32/items/15-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan 값을 √2·√3·2·3/4 로 교체. 제약 — sin×cos = (대변×이웃변)/빗변² 이므로 빗변의 제곱이 정수면 답은 유리수이거나 유리화가 한 번으로 끝나는 꼴이 됨."
    creative: "(1) 곱 대신 합을 묻기(유리화가 두 겹이 되어 ★3) (2) 주는 값을 sin 이나 cos 으로 바꾸기(★2 유지) (3) tan A 와 sin A × cos A 사이의 관계를 문자 k 로 일반화해 묻기(Mₐ 상승 ★3)."
```

```yaml
- id: GN-M32-15-04
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    ∠BAC=90° 인 직각삼각형 ABC 에서 AH⊥BC 이고 ∠BAH=x, ∠CAH=y 일 때 cos x × tan y 의 값 구하기.
  category: "닮음으로 두 각을 동시에 옮기기 → 큰 삼각형의 세 변으로 두 삼각비 → 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수선이 만든 닮음에서 x=∠C, y=∠B 로 두 각을 모두 옮겨 AH·BH·CH 를 구하지 않고 △ABC 의 세 변만으로 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수선이 만든 두 각의 삼각비 곱 — 닮음으로 각 옮기기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    핵심문제(13-h4)와 달리 두 각을 동시에 옮겨야 하고, 옮긴 뒤에도 cos 은 각 C, tan 은 각 B 기준이라 대변·이웃변을 두 번 다시 지정한다(I-EQV d2).
    x+y=90° 라는 점을 놓치면 세 개의 작은 삼각형 변을 모두 계산하게 된다.
    시험에 나온다 구역 ★2~3 출발에서 두 각 전환 부담으로 ★3.
  tier: star_3
  mechanism_primary: "AH 가 만든 닮음에서 x=∠C · y=∠B → △ABC 의 세 변으로 cos x 와 tan y → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{6}$'
  answer_source: "답지"
  figure: "crop:fig-15-04.png"
  latex: latex-bank/gn-m32/items/15-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "△ABC 의 두 다리를 정수 세 쌍이나 1·√3(빗변 2) 같은 특수각 비로 교체. 제약 — 두 각의 삼각비를 곱하므로 근호가 짝수 번 들어가야 답이 간단하고, 점 H 의 위치와 직각 표시 라벨은 고정."
    creative: "(1) cos x × cos y 처럼 같은 종류로 맞추면 답이 대칭적으로 정리됨(★3 유지) (2) x+y=90° 를 이용해 sin x = cos y 임을 설명하게 하면 여각 통찰이 주가 됨(★3) (3) AH 의 길이를 함께 묻기(★3)."
```

```yaml
- id: GN-M32-15-05
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    직선 y=(1/3)x+2 가 x축, y축과 만나는 점을 각각 A, B 라 할 때 이 직선이 x축의 양의 방향과 이루는 각 α 에 대해 sin α + cos α 의 값 구하기.
  category: "직선의 절편으로 직각삼각형 작도 → 빗변 유리화 → 두 삼각비의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선의 방정식을 두 절편이 만드는 직각삼각형으로 옮겨야 각 α 의 대변·이웃변·빗변이 생긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선의 방정식과 삼각비 — 두 삼각비의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 14-h5 와 같다(I-RT d2). 기울기가 분수라 두 다리가 6과 2 로 커지고 빗변이 무리수여서 유리화 뒤 합치는 단계가 하나 더 붙는다.
    도구가 새로 추가되지는 않으므로 시험에 나온다 구역 ★2~3 출발에서 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "x·y 절편으로 두 다리 확정 → 피타고라스로 빗변 → sin α 와 cos α 를 유리화해 더함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{10}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-15-05.png"
  latex: latex-bank/gn-m32/items/15-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기를 1/3·2/5·3/4 로, 상수항을 기울기 분모의 배수로. 제약 — 상수항이 분모의 배수라야 x절편이 정수이고, 두 다리의 제곱합이 한 번에 정리돼야 유리화가 한 번으로 끝남."
    creative: "(1) 합을 차·곱으로 바꾸기(★2 유지) (2) 기울기를 정수로 바꾸면 빗변이 √5 꼴로 가벼워짐(★2) (3) 삼각비의 합 값을 주고 기울기를 되묻는 역방향이면 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-M32-15-06
  page: 15
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "시험에 나온다"
  summary: |
    한 모서리의 길이가 4 인 정육면체에서 ∠CEG=x 라 할 때 sin x 의 값 구하기.
  category: "입체에서 직각삼각형 단면 추출 → 모서리·면대각선·대각선 → 삼각비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "CG 가 밑면 EFGH 에 수직임을 보고 직각삼각형 CGE 를 평면 단면으로 끄집어내야 삼각비가 정의된다(공간→평면)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정육면체에서 대각선이 이루는 각의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    CG 가 밑면에 수직이라 △CGE 가 직각삼각형이 되고 면대각선과 대각선 길이만 있으면 끝난다(I-RT d2).
    어느 꼭짓점에 직각이 있는지 고르는 것이 전부이고 계산 자체는 가볍다.
    시험에 나온다 구역 ★2~3 출발 + UP 태그(+1) → ★3.
  tier: star_3
  mechanism_primary: "직각삼각형 CGE 추출(모서리 CG · 면대각선 EG · 대각선 CE) → 각 E 기준 대변/빗변 → sin x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-15-06.png"
  latex: latex-bank/gn-m32/items/15-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리를 3·4·6·10 등 어떤 정수로 바꿔도 답은 √3/3 으로 같음. 제약 — 정육면체에서는 모서리가 약분돼 사라지므로, 값을 바꿔 난이도를 조절하려면 직육면체로 바꿔야 함."
    creative: "(1) cos·tan 으로 바꿔 묻기(★3 유지) (2) 직육면체로 바꾸면 모서리가 약분되지 않아 세 변을 모두 계산해야 함(★3) (3) 두 면대각선과 대각선이 만드는 정삼각형(BDE 등) 위의 각으로 옮기면 단면을 새로 찾아야 해 ★4."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 3 · ★2 14 · ★3 4 · ★4 0 · ★5 0
- 통찰형 12 · 절차형 9 · premium 0
- 통찰 유형 분포: I-RT 9(값→직각삼각형 3 · 직선→절편 삼각형 3 · 입체→평면 단면 3) · I-EQV 3(닮음으로 각 옮기기) · 그 외 0. depth 는 전부 1~2 이고 depth 3 은 없다.
- 구역별: 개념원리 확인하기 3문(전부 ★1 절차형) · 핵심문제 익히기 12문(★2 10 · ★3 2) · 이런 문제가 시험에 나온다 6문(★2 4 · ★3 2).
- type_hint 상위 5: 「한 삼각비의 값을 알 때 다른 삼각비」 3 · 「직선의 방정식과 삼각비」 3 · 「입체도형에서 삼각비」 3 · 「닮음으로 옮긴 각의 삼각비」 3 · 「삼각비의 값 참·거짓 판정」 2.
- 그림: 17문에 크롭(`crop:fig-<id>.png`) · 그림 없음 4문(13-h3 · 13-c3 · 14-c5 · 15-03 — 모두 값·식만 주는 문항).
- 태그: `UP` 2문(14-h6 · 15-06 · 둘 다 입체도형). 벤더 난이도 표기(`level`)는 이 교재에 없어 전부 `-`.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-12-h2 | 통찰 0 · M_total 4 로 v3.8 의 −1 후보에 해당하나, 삼각비를 역방향으로 쓰는 첫 대표 유형이라 구역 출발점 ★2 를 유지 | ★1 / ★2 |
| GN-M32-13-h3 | 「삼각비 값 → 직각삼각형 작도」를 I-RT 로 셀지 애매(교과서가 직접 가르치는 표준 절차). 13-c3 · 15-03 도 같은 판정을 따랐으므로 카탈로그 확정 시 셋을 함께 재검토 | ★2 (통찰형/절차형 경계) |
| GN-M32-14-c6 | UP 태그가 없는데도 짝 핵심문제(14-h6)와 같은 입체 단면 추출 층이라 ★3 으로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 덩어리다 — (A) 삼각비의 정의·값 판정, (B) 한 삼각비 값에서 다른 삼각비, (C) 닮음으로 각 옮기기, (D) 좌표·입체로의 표현 전환.
- **따로 세워야 할 유형**: (C) 「직각삼각형의 닮음과 삼각비」는 `13-h4 · 13-c4 · 15-04` 셋이 같은 골조이고 다른 유형과 도구가 전혀 겹치지 않으므로 독립 유형(base ★2~3)으로 두는 것이 맞다. (D) 안에서도 「직선의 방정식과 삼각비」(`14-h5 · 14-c5 · 15-05`)와 「입체도형에서 삼각비」(`14-h6 · 14-c6 · 15-06`)는 추출해야 하는 대상(절편 삼각형 vs 단면 삼각형)이 달라 두 유형으로 분리해야 한다. 입체 쪽이 base ★3, 직선 쪽이 base ★2 로 갈릴 가능성이 크다.
- **통합해도 될 유형**: (A) 의 「삼각비의 뜻」(`11-01 · 11-02`)과 「참·거짓 판정」(`12-h1 · 15-01`)은 묻는 형식만 다르고 골조가 같아 한 유형의 출제 형태 변주로 묶어도 된다. (B) 의 `13-h3 · 13-c3 · 15-03` 도 구하는 대상(단일 값/곱)만 다르므로 한 유형으로 충분하다. 「삼각비로 변의 길이 구하기」(`11-03 · 12-h2 · 12-c2 · 15-02`)도 주어지는 삼각비 종류만 다른 한 유형이며, `15-02` 의 넓이 단계는 꼬리 변형으로 보는 편이 낫다.
- 이 단원에는 ★4~5 자격(SC/VF/SYM/XU 통찰)을 가진 문항이 하나도 없다. 카탈로그를 만들 때 01 삼각비의 base ★ 상한은 3 으로 잡고, ★4 이상은 뒤 단원(삼각비의 활용)에서 확보하는 것이 맞다.
- 이 교재의 `쪽-cN` id 는 「개념원리 확인하기」의 확인 문제가 아니라 **「핵심문제 익히기」 안에서 각 핵심문제와 짝을 이루는 확인 문항**이다(전사본 group section 기준). 그래서 이 파일에서는 `cN` 을 ★1 이 아니라 짝 핵심문제와 같은 층(★2~3)에서 출발시켰다.
