---
name: mechanism-데이터-GN-M32-02
description: 개념원리 중학 3-2 02 30°·45°·60°의 삼각비의 값(1/1 · 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 02 30°·45°·60°의 삼각비의 값
  unit_code: GN-M32-02
  part: "1/1"
  extract_range: "17~20쪽 · 17-01~20-05"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 02 30°·45°·60°의 삼각비의 값 (1/1) 정독 데이터 (v1.0)

이 파일은 17~20쪽 17문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(17쪽) · 「핵심문제 익히기」 8문(18~19쪽 · 핵심문제 `h` 와 짝 확인문제 `c` 가 번갈아 배치) · 「이런 문제가 시험에 나온다」 5문(20쪽)이다. 개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라, ★ 출발점을 구역에서 잡고(확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3) M_total·통찰로 ±1 조정했다. 태그는 20-05 의 「UP」 하나뿐이다.

단원 내용은 특수각 삼각비 값의 (가) 직접 계산, (나) 값 → 각 크기 역참조(치환각 범위 확인 포함), (다) 직각삼각형·공통변을 통한 변의 길이, (라) 직선의 기울기 = tan(x축 양의 방향과 이루는 각) 네 갈래다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 특수각 단원 특성상 **숫자 변형의 자유도가 낮다**(각은 30·45·60 과 그 합성으로 제한, 변의 길이는 무리수가 정리되는 값으로 제한) — 그 제약을 `variation_notes.numeric` 에 문항별로 적었다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-17-01
  page: 17
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    30°·45°·60°에 대한 sin·cos·tan 값 9칸 표를 완성.
  category: "특수각 삼각비 정의 → 값 표 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "30°·45°·60°의 삼각비의 값(표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정삼각형 반쪽(1:2:√3)·직각이등변삼각형(1:1:√2)의 변의 비를 그대로 옮기는 정의 확인.
    단계·계산·추상도 모두 최소, 통찰 없음. 확인하기 구역 ★1 유지.
    [분류 이슈] 문항이라기보다 개념 정리표라 변형 원본으로는 부적합(표 자체가 답).
  tier: star_1
  mechanism_primary: "30-60-90 · 45-45-90 변의 비 → sin·cos·tan 9칸"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\sin A$: $\dfrac{1}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$ / $\cos A$: $\dfrac{\sqrt{3}}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{1}{2}$ / $\tan A$: $\dfrac{\sqrt{3}}{3}$, $1$, $\sqrt{3}$)'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-17-01.png'
  latex: latex-bank/gn-m32/items/17-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 수 없음(특수각 세 개와 그 값이 고정). 표의 빈칸 위치만 달리할 수 있다."
    creative: "(1) 값 하나를 주고 나머지를 유도하게 하기(★1) (2) 표 대신 정삼각형·정사각형 반쪽 그림에서 변의 비를 먼저 적게 하기(유도 과정 추가 · ★2 · I-RT d1) (3) sin/cos 의 대칭(sin30=cos60)을 찾게 하면 I-SYM d1 이 붙어 ★2."
```

```yaml
- id: GN-M32-17-02
  page: 17
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑷ 특수각 삼각비의 합·차·곱·나눗셈 계산. 예) sin45°+cos45°, tan60°÷cos30°.
  category: "특수각 값 대입 → 무리수 사칙계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "30°·45°·60°의 삼각비의 값(사칙계산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 값 대입 후 한두 줄 정리. 함정은 ⑵ 의 부호와 ⑷ 의 분수 나눗셈 정도(T-부호 1개).
    통찰 없음·M_total 5 로 이미 최저층. 확인하기 구역 ★1 유지.
  tier: star_1
  mechanism_primary: "특수각 값 대입 → 분모 유리화·약분 → 한 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{2}$ ⑵ $-\dfrac{1}{2}$ ⑶ $\dfrac{1}{2}$ ⑷ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/17-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30·45·60)과 연산자(+ − × ÷) 조합은 자유롭게 교체 가능. 제약: 답이 유리수 또는 √2·√3 의 단항이 되도록 조합하고, tan45=1 을 섞어 식이 0 이 되는 경우는 의도한 것만 쓴다."
    creative: "(1) 계산 결과가 같은 두 식을 찾게 하기(★1) (2) 소문항 수를 줄이고 sin²+cos² 꼴을 섞으면 ★2 (3) 결과값을 주고 빈칸의 각을 찾게 하면 역방향이 되어 ★2(17-03 과 합류)."
```

```yaml
- id: GN-M32-17-03
  page: 17
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑶ 0°<x<90° 에서 sin x·cos x·tan x 값이 주어질 때 x 의 크기.
  category: "삼각비 값 → 표 역참조 → 각의 크기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 각의 크기 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표를 거꾸로 읽는 한 단계. 각 범위 0°<x<90° 가 답을 유일하게 만들어 케이스 분기가 없다.
    역방향이지만 표준 역참조라 I-BW 로 인정하지 않는다(스키마 판별 기준). 확인하기 ★1.
  tier: star_1
  mechanism_primary: "주어진 값 → 특수각 표 역참조 → x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $45^\circ$ ⑵ $60^\circ$ ⑶ $30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/17-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값을 다른 특수각 값으로 교체(√3/2, 1, √3 등). 제약: 값이 표에 있는 9개 중 하나여야 하고, 범위 0°<x<90° 를 지워서는 안 된다(유일성 붕괴)."
    creative: "(1) 각 안에 일차식을 넣어 치환각으로 만들면 범위 이송이 생겨 ★2(18-h2 골조) (2) 두 조건(sin x 와 tan x)을 동시에 주고 모순 여부를 판단하게 하면 I-VF d2 · ★3 (3) 표에 없는 값(1/3)을 주고 '구할 수 없음'을 답하게 하면 I-MI d1 · ★2."
```

```yaml
- id: GN-M32-17-04
  page: 17
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴ ∠B=30°·빗변 4 인 직각삼각형, ⑵ ∠C=45°·한 변 7 인 직각삼각형에서 나머지 두 변 x, y.
  category: "직각삼각형의 한 각·한 변 → 삼각비로 나머지 변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 변의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 빗변×cos30·×sin30, ⑵ 는 45° 이등변성과 ×√2 로 각각 한 줄.
    어떤 삼각비를 고를지가 그림에서 바로 보이고 통찰 없음. 확인하기 ★1.
  tier: star_1
  mechanism_primary: "각과 아는 변의 위치 → 해당 삼각비 선택 → x, y 각각 한 줄"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=2\sqrt{3}$, $y=2$ ⑵ $x=7$, $y=7\sqrt{2}$'
  answer_source: "답지"
  figure: 'crop:fig-17-04.png'
  latex: latex-bank/gn-m32/items/17-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 변의 길이(4, 7)는 자유. 제약: 30° 쪽은 짝수로 두어야 x=길이×√3/2 가 정리되고, 45° 쪽은 어떤 값이어도 되지만 √2 가 남는다. 각은 30·45·60 만 가능하고 그림의 직각 위치·라벨(A·B·C, x·y)은 고정."
    creative: "(1) 주어진 변을 빗변 대신 밑변으로 바꾸면 tan 이 필요해져 같은 ★1 (2) 둘레나 넓이를 묻게 하면 계산이 한 단계 늘어 ★2 (3) 두 직각삼각형을 붙여 공통변을 만들면 17-04 → 19-c3 골조가 되어 ★2~3."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-18-h1
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑶ 특수각 삼각비의 혼합 계산. ⑶ 은 sin²45°+cos²45°.
  category: "특수각 값 대입 → 무리수 정리(제곱 포함)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "30°·45°·60°의 삼각비의 값(혼합 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17-02 와 같은 골조이나 항이 세 개로 늘고 ⑶ 에 제곱 표기가 들어와 계산 부담이 한 단계 위.
    ⑵ 처럼 결과가 0 이 되는 상쇄가 있어 부호 함정이 살아 있다. 통찰 없음·M_total 6 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "특수각 값 대입 → 동류항·유리화 정리 → 한 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2\sqrt{3}}{3}$ ⑵ $0$ ⑶ $1$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/18-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각·연산 조합 교체 자유. 제약: 항이 3개를 넘으면 계산 마찰만 늘어 질이 떨어진다(v3.8 §2.11). 답은 유리수 또는 a√3/3 꼴로 정리되게."
    creative: "(1) ⑶ 을 sin²30+sin²60 으로 바꿔 같은 1 이 나오는 이유를 묻게 하면 I-SYM d1 · ★3 (2) 식의 값이 0 이 되도록 빈칸 각을 채우게 하면 역방향 ★3 (3) 제곱 항을 (sin45+cos45)² 로 주면 곱셈 공식 한 단계 추가 ★2."
```

```yaml
- id: GN-M32-18-c1
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑶ 특수각 삼각비의 혼합 계산. ⑶ 은 (1+sin45°+sin30°)(1−cos45°+cos60°) 꼴의 곱.
  category: "특수각 값 대입 → 괄호 전개·정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "30°·45°·60°의 삼각비의 값(혼합 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 은 값을 넣으면 (3/2+√2/2)(3/2−√2/2) 가 되어 합·차의 곱으로 한 줄에 끝나지만,
    그대로 전개해도 풀리므로 통찰로 카운트하지 않는다(스키마 기준 표준 절차).
    18-h1 의 짝 확인문제로 계산 부담만 같은 층. 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "값 대입 → 괄호 안 정리 → 합·차의 곱(또는 전개) → 유리수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $2$ ⑶ $\dfrac{7}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/18-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수항(1)과 각 조합 교체 가능. 제약: 두 괄호가 a+b, a−b 꼴로 맞아떨어져야 답이 유리수로 정리된다(엇나가면 무리수 잔여항이 남아 계산 마찰만 증가)."
    creative: "(1) 합·차 짝을 일부러 깨서 전개가 강제되면 ★2 유지·질 저하 (2) 괄호를 (1+tan45)(1−tan45) 처럼 0 이 되게 하면 상쇄 착안 ★2 (3) 세 괄호 곱으로 늘리지 말 것 — 통찰 없이 마찰만 커진다."
```

```yaml
- id: GN-M32-18-h2
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    20°<x<110° 에서 cos(x−20°)=√3/2 를 만족시키는 x 의 크기.
  category: "치환각 범위 이송 → 값 역참조 → x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 각의 크기 구하기(치환각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x−20° 를 한 덩어리로 보고 0°<x−20°<90° 를 확인한 뒤 30° 로 역참조, 되돌려 50°.
    범위 이송(T-범위)이 실질 함정이고 통찰은 없다.
    [분류 이슈] 통찰 0·M_total 5 로 −1 후보이나 치환·범위 확인 단계가 확인하기보다 하나 많아 구역 신호 ★2 유지.
  tier: star_2
  mechanism_primary: "x−20°=t 로 보기 → t 범위 확인 → cos t=√3/2 → t=30° → x=50°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$50^\circ$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/18-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(20°)과 삼각비·값 교체 자유. 제약: 문제에 주어진 x 범위를 치환각 범위 0°~90° 와 정확히 대응시켜 해가 하나만 남게 맞춰야 한다(범위를 넓히면 답이 여러 개)."
    creative: "(1) 계수를 붙여 2x+a 꼴로 만들면 되돌림이 두 단계 ★2(18-c2) (2) 구한 각을 다시 다른 삼각비에 넣게 하면 연쇄 ★2~3(20-02) (3) 범위를 일부러 넓혀 해의 개수를 묻게 하면 I-MI d2 · ★3."
```

```yaml
- id: GN-M32-18-c2
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    0°<x<30° 에서 tan(2x+30°)=√3 일 때 ⑴ x 의 크기 ⑵ sin 3x 의 값.
  category: "치환각 역참조 → x → 다른 특수각 삼각비에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 각의 크기 구하기(치환각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x+30°=60° 에서 x=15°, 이어서 3x=45° 로 sin 값을 읽는 두 단계 연쇄.
    소문항이 순서를 유도해 주어 전략 선택이 없다. 범위 조건이 해를 하나로 고정(T-범위).
    핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "tan t=√3 → t=60° → x=15° → 3x=45° → sin45°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $15^\circ$ ⑵ $\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/18-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·이동량 30°·목표 배수 3 을 바꿀 수 있다. 제약: 치환각이 특수각이 되고 최종 각(3x 등)도 30·45·60 중 하나가 되도록 정수 각으로 맞춰야 한다. 범위는 해가 하나만 남게 조정."
    creative: "(1) ⑵ 를 tan(90°−3x) 처럼 여각으로 물으면 I-SYM d1 추가 ★3 (2) 소문항을 없애고 sin3x 만 물으면 유도가 사라져 ★3(20-02 형) (3) 두 조건 tan(2x+30°)·sin(x+k) 를 동시에 주고 x 를 찾게 하면 I-CON d2 · ★3."
```

```yaml
- id: GN-M32-19-h3
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ∠B=45°·∠C=60°·AB=9√2 cm 인 삼각형 ABC 에서 AH⊥BC 일 때 ⑴ AH ⑵ AC 의 길이.
  category: "수선으로 두 직각삼각형 분해 → 공통변 AH 매개 → 반대쪽 변"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 변의 길이 구하기(수선 분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직각삼각형이 아닌 삼각형을 수선 AH 로 나눠 45° 쪽에서 AH=AB sin45°=9, 60° 쪽에서 AC=AH÷sin60°=6√3.
    수선이 이미 그려져 있고 소문항이 AH → AC 순서를 지정해 주어 공통변 착안이 유도된다 → 통찰 카운트 없음.
    이 단원의 표준 골조이자 19-c3·20-03 의 원형. 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "AH=AB sin45° → 같은 AH 를 60° 직각삼각형에 넘김 → AC=AH÷sin60°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $9\,\mathrm{cm}$ ⑵ $6\sqrt{3}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: 'crop:fig-19-h3.png'
  latex: latex-bank/gn-m32/items/19-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=9√2 의 9 는 자유지만 √2 계수는 45° 쪽 약분을 위해 유지해야 AH 가 정수. 두 각은 (45°,60°)·(45°,30°)·(60°,30°) 조합만 가능하고 합이 180° 미만이어야 한다. 그림의 꼭짓점·수선 라벨(A·B·C·H)은 고정."
    creative: "(1) 소문항을 없애고 AC 만 물으면 공통변 착안이 통찰이 되어 ★3 (2) BC 전체 길이나 넓이를 묻게 하면 BH+HC 합성이 추가돼 ★3 (3) 각 하나를 미지수로 두면 Mₐ 상승 ★4 — 중3 범위를 넘을 위험."
```

```yaml
- id: GN-M32-19-c3
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ∠BAC=∠D=90°·∠B=60°·∠ACD=30°·AB=4 cm 인 그림에서 CD 의 길이.
  category: "직각삼각형 두 개의 공통변 AC → 연쇄 대입 → CD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 변의 길이 구하기(공통변 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각형 ABC 에서 AC=AB tan60°=4√3 을 먼저 구하고, 그 AC 를 삼각형 ACD 의 빗변으로 넘겨 CD=AC cos30°=6.
    소문항 유도는 없지만 직전 19-h3 에서 같은 공통변 골조를 배운 직후의 짝 확인문제라 표준 절차로 본다 → 통찰 0.
    핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "AC=AB tan60° → 공통변 AC 를 ACD 로 이송 → CD=AC cos30°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\,\mathrm{cm}$'
  answer_source: "답지"
  figure: 'crop:fig-19-c3.png'
  latex: latex-bank/gn-m32/items/19-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=4 는 자유(짝수면 √3 계수가 정리됨). 두 각은 (60°,30°)·(45°,45°)·(30°,60°) 조합만 가능하며 직각 위치(∠BAC·∠D)와 라벨은 그림에 고정되어 바꿀 수 없다."
    creative: "(1) 묻는 변을 AD 나 BC 로 바꾸면 같은 골조 ★2 (2) 중간 변 AC 를 주고 AB 를 역으로 묻게 하면 역방향 ★3 (3) 삼각형을 하나 더 이어 붙여 3단 연쇄로 만들면 ★3~4(누적 무리수 정리 주의)."
```

```yaml
- id: GN-M32-19-h4
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    직선 3x−3y+8=0 이 x축의 양의 방향과 이루는 예각의 크기.
  category: "직선의 방정식 → 기울기 → tan 값 → 각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'x축의 양의 방향과 이루는 각'을 기울기=tan(그 각)이라는 대수 조건으로 전환(기하→대수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선의 기울기와 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=x+8/3 로 고쳐 기울기 1 을 읽고 tanθ=1 에서 θ=45°.
    계산 자체는 두 줄이지만 기울기와 삼각비를 잇는 표현 전환이 이 유형의 본질이라 I-RT d1 로 카운트했다(단원에서 반복 학습되는 전환이라 depth 1).
    핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "일반형 → 기울기 1 → tanθ=1 → θ=45°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$45^\circ$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/19-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 조합은 자유지만 기울기가 √3, 1, √3/3 중 하나가 되어야 특수각이 나온다(예: √3x−y+k=0 → 60°). 상수항 8 은 답에 영향이 없으므로 아무 값이나 가능."
    creative: "(1) 기울기가 음수인 직선을 주고 '예각'의 의미를 따지게 하면 I-MI d2 · ★3 (2) 두 직선이 이루는 각을 묻게 하면 각의 합성이 필요해 ★4 (3) 각을 주고 직선의 방정식을 만들게 하면 역방향(19-c4)."
```

```yaml
- id: GN-M32-19-c4
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x절편이 −1 이고 x축의 양의 방향과 이루는 각이 60° 인 직선의 방정식.
  category: "각 → 기울기 tan60° → 한 점 통과 조건 → 직선의 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축과 이루는 각 60° 를 기울기 √3 이라는 대수 계수로 전환(기하→대수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선의 기울기와 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기=tan60°=√3, x절편 −1 에서 점 (−1, 0) 을 지나므로 y=√3(x+1).
    19-h4 의 역방향 짝이고 통과점 처리 한 단계가 더 있으나 여전히 두 줄. 통찰 1(RT d1)·M_total 5 → 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "60° → 기울기 √3 → 점 (−1,0) 대입 → y=√3x+√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=\sqrt{3}x+\sqrt{3}$'
  answer_source: "답지"
  figure: 'crop:fig-19-c4.png'
  latex: latex-bank/gn-m32/items/19-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x절편(−1)은 자유, 각은 30·45·60 만 가능. 제약: 절편이 정수가 아니면 y절편에 무리수 곱이 겹쳐 식이 지저분해진다. 그림의 각 표시 위치(원점 오른쪽 예각)는 고정."
    creative: "(1) x절편 대신 지나는 점을 주면 같은 ★2 (2) 각과 y절편을 함께 주면 20-04 형 (3) 이 직선과 x축·y축이 만드는 삼각형의 넓이를 묻게 하면 단계가 늘어 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-20-01
  page: 20
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    특수각 삼각비 계산식 다섯 개 중 옳지 않은 것 고르기(5지선다). 제곱·곱·나눗셈 혼합.
  category: "선택지별 값 대입 계산 → 참·거짓 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "30°·45°·60°의 삼각비의 값(혼합 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지를 각각 한 줄씩 계산해 대조. 계산량은 이 범위에서 가장 많지만 단계는 얕고 통찰이 없다.
    ⑤ 의 sin²60°+cos30°×tan30° 처럼 제곱·곱이 섞여 부호·유리화 실수가 함정.
    시험 구역 출발 ★2~3 중 통찰 0 이므로 하단 ★2.
  tier: star_2
  mechanism_primary: "선택지마다 특수각 값 대입 → 정리 → 등식 성립 여부 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/20-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 각·연산과 우변 값을 교체 가능. 제약: 틀린 선택지는 정확히 하나여야 하고, 오답 선택지의 우변은 '있음직한 실수 결과'(유리화 누락·제곱 빠뜨림)로 만들어야 변별이 산다."
    creative: "(1) '옳은 것을 모두 고르시오'로 바꾸면 전수 검증이 강제돼 I-VF d1 · ★3 (2) 등식이 성립하도록 빈칸 각을 채우게 하면 역방향 ★3 (3) 선택지를 3개로 줄이고 이유를 서술하게 하면 서술형 ★3."
```

```yaml
- id: GN-M32-20-02
  page: 20
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    5°<x<35° 에서 sin(3x−15°)=√2/2 일 때 tan(x+10°)의 값.
  category: "치환각 역참조 → x → 다른 각의 삼각비 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 각의 크기 구하기(치환각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x−15°=45° 에서 x=20°, 이어 tan30°=√3/3. 18-c2 에서 소문항 유도를 뺀 판이지만 경로가 하나뿐이라 전략 분기가 없다.
    범위 조건이 치환각을 0°~90° 로 가두는 것이 유일한 함정(T-범위). 통찰 0·M_total 5 → 시험 구역 하단 ★2.
  tier: star_2
  mechanism_primary: "sin t=√2/2 → t=45° → x=20° → tan(x+10°)=tan30°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/20-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·이동량 −15°·뒤 식 (x+10°)을 바꿀 수 있다. 제약: 앞 치환각과 뒤 각이 모두 특수각이 되도록 x 를 정수 각으로 떨어뜨려야 하고, 주어진 범위가 해를 하나로 가두어야 한다."
    creative: "(1) 뒤에서 묻는 값을 sin·cos 로 바꾸면 같은 ★2 (2) 앞뒤 각의 합이 90° 가 되게 설계해 여각 관계로 풀 수 있게 하면 I-SYM d2 · ★3 (3) 조건을 부등식(sin ≥ √2/2)으로 주면 I-MI d2 · ★3."
```

```yaml
- id: GN-M32-20-03
  page: 20
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    ∠ABC=∠BCD=90°·∠A=60°·∠D=45°·AB=√2 cm 인 그림에서 BD 의 길이.
  category: "직각삼각형 두 개의 공통변 BC → 연쇄 대입 → BD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 이용하여 변의 길이 구하기(공통변 연결)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC=AB tan60°=√6 을 구해 공통변으로 넘기고 BD=BC÷sin45°=2√3.
    19-c3 과 같은 골조이나 유도 소문항이 없고 AB=√2 라 중간값이 무리수(√6)로 나와 약분 부담이 한 단계 위.
    [분류 이슈] 골조만 보면 ★2, 시험 구역 신호와 무리수 처리로 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "BC=AB tan60° → 공통변 BC 를 BCD 로 이송 → BD=BC÷sin45°"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: 'crop:fig-20-03.png'
  latex: latex-bank/gn-m32/items/20-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=√2 는 45° 쪽 유리화를 위해 √2 배수로 두는 것이 좋다. 두 각은 (60°,45°)·(45°,60°)·(30°,45°) 조합 가능. 직각 위치(∠ABC·∠BCD)와 꼭짓점 라벨은 그림에 고정."
    creative: "(1) CD 나 AD 를 묻게 하면 같은 골조 ★3 (2) 사각형 ABCD 의 넓이를 묻게 하면 두 삼각형 합산이 추가돼 ★3~4 (3) BD 를 주고 AB 를 역으로 묻게 하면 역방향 ★4."
```

```yaml
- id: GN-M32-20-04
  page: 20
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    y절편이 −3 이고 x축의 양의 방향과 이루는 예각이 α 인 직선에서 cos α=√3/2 일 때 직선의 방정식.
  category: "cos 값 → 각 복원 → 기울기 tan α → 직선의 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축과 이루는 각 α 를 기울기=tan α 라는 대수 계수로 전환(기하→대수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선의 기울기와 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos α=√3/2 에서 α=30° 를 먼저 복원한 뒤 기울기 tan30°=√3/3, y절편 −3 을 그대로 붙인다.
    각이 문자 α 로만 주어져(Mₐ 2) 19-c4 보다 '값 → 각 → 다른 삼각비' 한 단계가 더 있다.
    통찰 1(RT d1) + 시험 구역 → 구역 상단 ★3.
  tier: star_3
  mechanism_primary: "cos α=√3/2 → α=30° → 기울기 tan30°=√3/3 → y=(√3/3)x−3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=\dfrac{\sqrt{3}}{3}x-3$'
  answer_source: "답지"
  figure: 'crop:fig-20-04.png'
  latex: latex-bank/gn-m32/items/20-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y절편(−3)은 자유, 주어지는 삼각비는 sin·cos·tan 어느 것이어도 되나 값은 특수각 표 안이어야 한다. 제약: 기울기가 tan α 이므로 α=45° 를 쓰면 무리수가 사라져 난이도가 17-04 수준으로 떨어진다."
    creative: "(1) sin α 를 주면 각 복원 단계가 같아 ★3 유지 (2) 각이 둔각일 수 있게 조건을 풀면 기울기 부호 분기로 I-MI d2 · ★4 (3) 이 직선이 x축·y축과 만드는 삼각형의 넓이까지 묻게 하면 ★4."
```

```yaml
- id: GN-M32-20-05
  page: 20
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "시험문제"
  summary: |
    그림에서 ∠B=90°·AB=1·∠CAB=60° 이고 점 C 는 BD 위에 있으며 AC=DC 일 때 tan 75° 의 값(5지선다).
  category: "이등변삼각형의 외각으로 75° 만들기 → 직각삼각형의 변의 비 → tan 75°"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AC=DC 와 외각 ∠ACB=30° 를 '∠ADB=15°, 곧 ∠BAD=75°' 라는 각 조건으로 옮김"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표에 없는 tan75° 를 직각삼각형 ABD 의 변의 비 BD/AB 로 전환해 계산"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "특수각을 합성해 75°(15°)의 삼각비 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB=1·∠A=60° 에서 BC=√3, AC=2 를 얻고 CD=CA 이므로 BD=BC+CD=2+√3.
    핵심은 이등변삼각형 CAD 의 외각 30°=2∠ADC 에서 ∠ADC=15°, 즉 ∠BAD=75° 임을 읽어 tan75°=BD/AB 로 바꾸는 것.
    특수각 표 밖의 각을 도형으로 합성하는 이 범위 유일한 문항. 통찰 2개(EQV d2·RT d1) + 「UP」 태그 → 시험 구역 상단에서 +1 하여 ★4.
    ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 필요해 해당 없음.
  tier: star_4
  mechanism_primary: "AB=1·60° → BC=√3·AC=2 → CD=CA 이등변 외각으로 ∠BAD=75° → tan75°=BD/AB=2+√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: 'crop:fig-20-05.png'
  latex: latex-bank/gn-m32/items/20-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=1 은 배율이므로 자유롭게 바꿀 수 있고(모든 변이 비례) 답은 같은 tan 값. 제약: ∠CAB 는 60°(→75°)·45°(→67.5°는 불가)처럼 외각의 절반이 특수하게 떨어지는 값만 쓸 수 있어 사실상 60°·30° 고정. 그림의 AC=DC 동일 표시와 직각 위치는 고정."
    creative: "(1) 같은 그림에서 tan15°(=∠ADB)를 묻게 하면 골조 유지 ★4 (2) ∠CAB=30° 로 바꾸면 ∠ADB=30°… 처럼 합성이 무너지므로 각 설계부터 다시 해야 함 (3) AD 나 삼각형 ABD 의 넓이를 묻게 하면 단계가 하나 늘어 ★4 유지 (4) 이등변 표시를 지우고 CD 길이를 수치로 주면 통찰 1개가 사라져 ★3."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 10 · ★3 2 · ★4 1 · ★5 0
- 통찰형 4 · 절차형 13 · premium 0
- 통찰 유형 분포: I-RT 4(직선의 기울기 3 + 20-05 변의 비 1) · I-EQV 1(20-05) · 나머지 8유형 0
- type_hint 상위: 「30°·45°·60°의 삼각비의 값(계산·표)」 5 · 「각의 크기 구하기(치환각)」 4 · 「변의 길이 구하기(공통변·수선)」 4 · 「직선의 기울기와 삼각비」 3 · 「특수각 합성 75°」 1
- 대상층: 하위권 4 · 중하위권 8 · 중위권 4 · 중상위권 1
- 그림: 8문(`crop:fig-17-01.png` · `fig-17-04` · `fig-19-h3` · `fig-19-c3` · `fig-19-c4` · `fig-20-03` · `fig-20-04` · `fig-20-05`)
- 범위 전체가 특수각 표 안에서 움직여 Mₐ(추상도)는 20-04 의 α 를 빼면 모두 1, Mₜ 도 T-범위·T-부호 1개 수준이다. 변별은 계산량(Mₖ)이 아니라 **표현 전환(직선 기울기)과 각 합성(75°)**에서만 생긴다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-17-01 | 표 완성형이라 문항이라기보다 개념 정리 — 변형 원본으로는 부적합(빈칸 위치만 바꿀 수 있음) | ★1 |
| GN-M32-18-h2 | 통찰 0·M_total 5 로 v3.8 −1 후보이나 치환·범위 확인 단계 때문에 구역 신호 ★2 유지 | ★1 / ★2 |
| GN-M32-20-03 | 19-c3(★2)과 공통변 연결 골조가 같음. 유도 소문항 부재·무리수 중간값·시험 구역으로 ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 갈래(값 계산 · 각 구하기 · 변의 길이 · 직선의 기울기)다. **따로 세워야 할 유형**은 「직선의 기울기와 삼각비」(유일하게 I-RT 가 상시 붙고 좌표평면 단원과 결합) 와 「특수각 합성(75°·15°)」(★4 변별 슬롯의 원천).
- **통합해도 될 유형**: 「값 계산(사칙·혼합)」 5문은 계산 항 수만 다를 뿐 골조가 같아 한 유형 + 난이도 파라미터로 충분하다. 「각 구하기(치환각)」 4문도 치환식의 계수·이동량만 다르다.
- 「변의 길이 구하기」는 카탈로그에서 **수선 분해(19-h3)** 와 **공통변 연결(19-c3·20-03)** 을 하위 갈래로 나누는 편이 변형 설계에 유리하다(전자는 한 꼭짓점에서 내린 수선, 후자는 두 직각삼각형이 변을 공유).
- base_star 후보: 값 계산 ★1~2 · 각 구하기 ★1~2 · 변의 길이 ★2~3 · 직선의 기울기 ★2~3 · 특수각 합성 ★4.
