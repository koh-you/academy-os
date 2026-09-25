---
name: mechanism-데이터-GN-M32-04
description: 개념원리 중학 3-2 04 길이 구하기(1/1 · 24문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 04 길이 구하기
  unit_code: "04"
  part: "1/1"
  extract_range: "38~43쪽 · 38-01~43-06"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 04 길이 구하기 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-2 의 **04 길이 구하기** 38~43쪽 24문항 전수를 다룬다. 구역은 「개념원리 확인하기」 6문 · 「핵심문제 익히기」 12문(핵심문제 `쪽-hN` 6 + 확인문제 `쪽-cN` 6) · 「이런 문제가 시험에 나온다」 6문이다. 개념원리 중학은 난이도 `level` 표시가 없고 **구역 자체가 난이도 층**이라, ★ 출발점은 확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3 으로 잡고 M_total·통찰로 ±1 조정했다. `tag` 도 이 범위에는 없다.

단원 전체가 **직각삼각형의 삼각비 → 일반 삼각형으로 확장**이라는 하나의 도구 사슬로 굴러간다. 그래서 통찰 판정 기준을 이 파일 안에서 다음과 같이 고정했다. (가) **수선(보조선)을 문제·소문항·그림이 이미 제시하면 절차형**, 학생이 스스로 세워야 하면 `I-RT` d1. (나) **높이를 h 로 놓고 BH±CH=BC 라는 식으로 옮기는 단계**는 `I-EQV` d1, H 가 변의 연장 위에 놓여 차를 써야 하는 둔각 배치는 `I-EQV` d2. (다) 소문항이 그 단계들을 모두 유도해 주면 통찰을 지운다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-38-01
  page: 38
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    직각삼각형 ABC 에서 sin C · cos C · tan C 의 정의식을 세우고, 각 변 a·b·c 를 다른 변과 삼각비로 나타내는 빈칸 채우기.
  category: "삼각비의 정의 → 변에 대해 정리"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형에서 삼각비로 변의 길이 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼각비 정의식을 한 번 이항해 변을 표현하는 것이 전부다. 변이 문자 a·b·c 라 Mₐ 만 2, 계산·함정 없음.
    확인하기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지(하한).
  tier: star_1
  mechanism_primary: "삼각비 정의식 → 구하려는 변에 대해 정리 → b=c/sin C · a=b cos C · c=a tan C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $b\sin\pt{C}$ ⑵ $\dfrac{a}{b}$, $\dfrac{a}{\cos\pt{C}}$ ⑶ $\dfrac{c}{a}$, $\dfrac{c}{\tan\pt{C}}$, $a\tan\pt{C}$'
  answer_source: "답지"
  figure: "crop:fig-38-01.png"
  latex: latex-bank/gn-m32/items/38-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의만 묻는 문항이라 바꿀 수 있는 수가 없다. 변 문자(a·b·c)나 기준각(C→A)만 교체 가능. 제약: 그림의 직각 위치와 문자 배치가 반드시 함께 바뀌어야 하고, 기준각의 대변·이웃변 관계가 뒤집히면 세 식 전부 다시 써야 한다."
    creative: "(1) 기준각을 ∠A 로 옮겨 여각 관계(sin C=cos A)까지 묻기 — I-EQV d1 이 붙어 ★2 (2) 빈칸 대신 '변 b 를 나타내는 식을 모두 고르시오' 5지선다로 바꾸면 오답 매력도가 생겨 ★2 (3) 세 변 중 두 개를 수치로 주고 나머지를 삼각비로 나타내게 하면 ★1 유지."
```

```yaml
- id: GN-M32-38-02
  page: 38
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    직각삼각형 ABC 에서 BC=9, ∠B=30° 일 때 AB·AC 를 구하는 과정의 빈칸 채우기(⑴ AB ⑵ AC).
  category: "특수각 삼각비 → 빗변·대변 계산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 변과 한 예각을 아는 직각삼각형의 나머지 변 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    쓸 삼각비와 식이 발문에 이미 적혀 있고 학생은 30° 의 값만 대입한다. 단계 2·계산 한 줄.
    확인하기 출발 ★1 · 통찰 0 · M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "cos30°=9/AB → AB=9/cos30°=6√3 · tan30°=AC/9 → AC=9 tan30°=3√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$, $6\sqrt{3}$ ⑵ $9$, $3\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-38-02.png"
  latex: latex-bank/gn-m32/items/38-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC 의 길이(6·12·15)와 각(30°/45°/60°)을 자유롭게. 제약: 45° 는 두 답이 같아져 변별이 사라지고, 60° 는 AB=2BC 로 유리수가 되어 무리수 정리 연습이 빠진다. 주어진 변이 빗변인지 밑변인지에 따라 쓸 삼각비가 바뀌므로 그림 라벨을 같이 고쳐야 한다."
    creative: "(1) 빈칸을 지우고 'AB+AC 의 값'만 묻기 — 같은 골조 ★1 (2) 주어진 변을 빗변으로 바꿔 학생이 쓸 삼각비를 고르게 하면 ★2 (3) 삼각비표 값(sin42° 등)을 주고 소수 계산으로 바꾸면 Mₖ 만 오르고 ★1 유지."
```

```yaml
- id: GN-M32-38-03
  page: 38
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    △ABC 에서 AB=6, BC=10, ∠B=60° 일 때 AC 를 구하는 과정의 빈칸 채우기. 수선의 발 H 와 계산 틀이 발문에 제시돼 있다.
  category: "수선 발로 직각삼각형 분할 → 피타고라스"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 변과 끼인각을 아는 일반 삼각형의 나머지 변 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원의 핵심 통찰인 '수선 AH 를 긋는다'가 발문에 이미 제시돼 학생은 60° 값 대입과 뺄셈만 한다.
    단계 4(AH·BH·CH·피타고라스)라 Mₛ 2. 확인하기 출발 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "A 에서 BC 에 수선 AH → AH=6 sin60°=3√3 · BH=6 cos60°=3 → CH=10−3=7 → AC=√(27+49)=2√19"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$, $3$, $7$, $7$, $2\sqrt{19}$'
  answer_source: "답지"
  figure: "crop:fig-38-03.png"
  latex: latex-bank/gn-m32/items/38-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(4·8·12) · BC(8·12·14) · 끼인각(30°/45°/60°)을 교체. 제약: AB 가 끼인각의 코사인으로 정수 BH 를 만들어야 CH 가 깔끔하고, BH<BC 라야 H 가 변 위에 놓여 그림과 발문의 '10−□' 틀이 유지된다. BH>BC 가 되면 둔각 배치로 골조 자체가 바뀐다."
    creative: "(1) 빈칸을 없애고 AC 만 묻기 — 수선 착안이 학생 몫이 되어 I-RT d1 ★2 (2) AC 대신 △ABC 의 넓이를 묻기 ★2 (3) 끼인각을 120° 로 바꿔 H 가 BC 의 연장 위에 오게 하면 I-EQV d2 가 붙어 ★3."
```

```yaml
- id: GN-M32-39-04
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    △ABC 에서 AB=10, ∠A=75°, ∠B=60° 일 때 AC 를 구하는 과정의 빈칸 채우기. 수선의 발 H 와 ∠C=45° 가 발문에 제시돼 있다.
  category: "수선 발 → 두 직각삼각형을 공통변으로 연결"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 변과 그 양 끝 각을 아는 일반 삼각형의 나머지 변 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공통변 AH 를 다리로 두 직각삼각형을 잇는 골조인데, 수선 위치와 ∠C 가 모두 발문에 제시돼 대입만 남는다.
    확인하기 출발 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A 에서 BC 에 수선 AH → AH=10 sin60°=5√3 → ∠C=45° → AC=AH/sin45°=5√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5\sqrt{3}$, $5\sqrt{3}$, $5\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-39-04.png"
  latex: latex-bank/gn-m32/items/39-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(8·12·20)와 각 쌍을 교체. 제약: 두 번 쓰는 각이 모두 특수각(30·45·60)이어야 하므로 세 내각 중 두 개를 특수각으로 잡고 나머지를 75°·105° 로 두는 조합만 가능하다. 수선을 내리는 꼭짓점은 '특수각 두 개를 끼는' 쪽으로 고정된다."
    creative: "(1) 빈칸을 없애고 AC 만 묻기 — 수선 꼭짓점 선택이 학생 몫 ★2 (2) AC 대신 BC 를 묻기(같은 골조 ★2) (3) 두 각을 40°·65° 같은 일반각으로 바꾸고 답을 tan 식으로 고르게 하면 계산이 사라지고 골조만 남아 ★3."
```

```yaml
- id: GN-M32-39-05
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    △ABC 에서 BC=18, ∠B=45°, ∠C=30°, AH=h 일 때 ⑴ ∠BAH·∠CAH ⑵ BH ⑶ CH 를 h 로 ⑷ h 의 값.
  category: "높이를 h 로 두고 BH+CH=BC 방정식"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(주어진 각이 모두 예각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 유형의 통찰(h 를 미지수로 두고 BH+CH=BC 로 옮기기)을 소문항 ⑴~⑶ 이 전부 유도해 준다.
    학생은 tan 대입과 마지막 유리화만 한다. h 매개변수라 Mₐ 2. 확인하기 출발 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "∠BAH=45°·∠CAH=60° → BH=h tan45°=h · CH=h tan60°=√3h → h+√3h=18 → h=9(√3−1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $45^\circ$, $60^\circ$ ⑵ $h$ ⑶ $\sqrt{3}h$ ⑷ $9(\sqrt{3}-1)$'
  answer_source: "답지"
  figure: "crop:fig-39-05.png"
  latex: latex-bank/gn-m32/items/39-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(12·20·24)와 각 쌍(45°·30° / 30°·60° / 45°·60°)을 교체. 제약: 두 각 모두 예각이라야 BH+CH=BC 형태가 유지되고, 30°·60° 조합은 h(1/√3+√3)=BC 라 BC 가 4 의 배수여야 h 가 깔끔하다. 45°·30° 조합은 분모가 1+√3 이라 유리화가 반드시 들어간다."
    creative: "(1) 소문항을 지우고 h 만 묻기 — 유도가 사라져 I-EQV d1 ★2 (2) ⑷ 다음에 △ABC 의 넓이를 추가(★2) (3) ∠C 를 120° 로 바꿔 H 를 BC 의 연장 위로 보내면 BH−CH=BC 가 되어 I-EQV d2 ★3."
```

```yaml
- id: GN-M32-39-06
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인"
  summary: |
    △ABC 에서 BC=4, ∠B=30°, ∠ACB=120°, AH=h 일 때 ⑴ ∠BAH·∠CAH ⑵ BH ⑶ CH 를 h 로 ⑷ h 의 값. 둔각이라 H 가 BC 의 연장 위에 있다.
  category: "둔각 배치 높이 — BH−CH=BC 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(주어진 각 중 한 각이 둔각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    둔각 배치라 BC=BH−CH 로 '차'를 써야 하는 것이 이 문항의 급소인데(T-경계 → Mₜ 1),
    소문항 ⑴~⑶ 이 두 각과 BH·CH 를 모두 지정해 마지막 뺄셈만 남긴다. 통찰 0 · 확인하기 출발 ★1 → ★1.
    [분류 이슈] 비유도형 같은 골조(43-06)는 ★3 으로 판정돼 같은 유형 안에서 2단 차가 난다.
  tier: star_1
  mechanism_primary: "∠BAH=60°·∠CAH=30° → BH=√3h · CH=(√3/3)h → 둔각이라 BH−CH=4 → h=2√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $60^\circ$, $30^\circ$ ⑵ $\sqrt{3}h$ ⑶ $\dfrac{\sqrt{3}}{3}h$ ⑷ $2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-39-06.png"
  latex: latex-bank/gn-m32/items/39-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(6·8·12)와 (∠B, ∠ACB)=(30°,120°)/(45°,135°)/(30°,135°) 를 교체. 제약: ∠ACB 가 둔각이라야 H 가 연장 위로 나가 차 구조가 유지되고, 두 보각(180°−∠ACB)과 ∠B 가 모두 특수각이라야 tan 값이 정리된다. BH>CH 가 항상 성립하므로 부호 걱정은 없다."
    creative: "(1) 소문항을 지우고 h 만 묻기 — I-EQV d2 ★3 (2) ⑷ 대신 △ABC 의 넓이를 묻기 ★3 (3) 그림 없이 '∠ACB=120°' 만 주고 배치를 학생이 판단하게 하면 I-MI 가 붙어 ★3~4."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-40-h1
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    직각삼각형 ABC 에서 빗변 BC=10 cm, ∠B=42° 일 때 두 변 x·y 에 대하여 x−y 의 값. sin42°·cos42° 의 값이 주어진다.
  category: "삼각비표 값 대입 → 두 변의 차"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형의 변의 길이 구하기(삼각비의 값이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    쓸 삼각비가 그림에서 바로 정해지고 주어진 소수를 두 번 곱해 빼면 끝난다. 소수 곱셈 때문에 Mₖ 만 2.
    핵심문제 구역 출발 ★2 이나 통찰 0 · M_total 4 → −1 하여 ★1.
    [분류 이슈] 벤더 구역(★2)과 1단 차 — 라벨은 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "빗변 10·42° → x=10 cos42°=7.431 · y=10 sin42°=6.691 → x−y=0.74"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.74$'
  answer_source: "본문 답"
  figure: "crop:fig-40-h1.png"
  latex: latex-bank/gn-m32/items/40-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변(8·12·25)과 각(37°·42°·58°)을 교체하되 주어진 삼각비 값을 함께 갈아야 한다. 제약: 제시하지 않은 삼각비(여기서는 tan42°)가 필요한 변을 묻지 말 것. x−y 가 음수가 되지 않도록 x 를 cos 쪽(큰 변)에 배정한다."
    creative: "(1) x−y 대신 x+y 나 xy 를 묻기(★1 유지) (2) 삼각비 값을 주지 않고 표를 읽게 하면 표 읽기 단계가 붙어 ★2 (3) 두 변 중 하나만 주고 나머지와 각을 역으로 구하게 하면 I-BW d1 ★2."
```

```yaml
- id: GN-M32-40-c1
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    직각삼각형 ABC 에서 AC=5, ∠C=35° 일 때 BC 의 길이를 나타내는 식을 5지선다에서 모두 고르기(정답 2개).
  category: "변을 나타내는 삼각비 식 — 여각 관계로 동치 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BC=5 cos35° 를 여각 관계로 5 sin55° 와 같은 식으로 보아 두 답을 모두 찾음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각삼각형의 변을 나타내는 삼각비 식 고르기(여각 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 식(5 cos35°)은 정의에서 바로 나오지만 나머지 한 답은 sin(90°−θ)=cosθ 로 옮겨야 보인다.
    '정답 2개'라는 지시가 그 동치 변환을 강제한다(오답 5 sin35°·5 cos55° 는 대변 혼동 T-표기 → Mₜ 1).
    핵심문제 출발 ★2 · 통찰 1(EQV d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "BC 는 ∠C 의 이웃변 → BC=5 cos35° → 여각 관계로 5 sin55° 도 같은 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②, ③"
  answer_source: "답지"
  figure: "crop:fig-40-c1.png"
  latex: latex-bank/gn-m32/items/40-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변(4·8·10)과 각(25°·35°·48°)을 교체. 제약: 각이 45° 면 여각이 자기 자신이 되어 두 답이 겹치므로 피한다. 선택지에는 반드시 (i) 정답의 여각 짝 (ii) 대변·이웃변을 바꾼 오답 (iii) tan 으로 만든 오답을 함께 배치해야 변별이 산다."
    creative: "(1) BC 대신 AB 를 묻기(같은 골조 ★2) (2) '나타내지 않는 것'을 고르게 뒤집으면 I-VF 성격이 약하게 붙어 ★2~3 (3) 주어진 변을 빗변이 아닌 밑변으로 바꾸면 tan·1/cos 식이 섞여 ★3."
```

```yaml
- id: GN-M32-40-h2
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    가로등에서 3 m 떨어진 곳에서 꼭대기 A 를 올려본각 45°, 밑 B 를 내려본각 30° 일 때 ⑴ AH ⑵ BH ⑶ 가로등의 높이.
  category: "눈높이 기준 두 직각삼각형 → 높이 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활에서 직각삼각형의 변의 길이의 활용(올려본각·내려본각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    눈높이 H 를 기준으로 위(AH)·아래(BH) 두 직각삼각형을 따로 구하고 더하는 골조인데, 소문항 ⑴⑵⑶ 이 그 분해를 그대로 유도한다 → 통찰 0.
    다만 ⑶ 에서 AH 만 답하는 실수가 표준 함정이라(T-경계) Mₜ 1. M_total 5 이지만 합산 실수 지점이 실제 변별을 만들어 −1 하지 않고 핵심문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "눈높이 H 기준 수평거리 3 → AH=3 tan45°=3 · BH=3 tan30°=√3 → 높이=AH+BH=3+√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3\,\mathrm{m}$ ⑵ $\sqrt{3}\,\mathrm{m}$ ⑶ $(3+\sqrt{3})\,\mathrm{m}$'
  answer_source: "본문 답"
  figure: "crop:fig-40-h2.png"
  latex: latex-bank/gn-m32/items/40-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수평거리(4·6·10)와 두 각(45°/30°, 60°/30°, 45°/60°)을 교체. 제약: 두 각 모두 특수각이어야 tan 값이 정리되고, 올려본각이 내려본각보다 커야 그림의 상하 배치가 자연스럽다. 거리를 √3 의 배수로 잡으면 답이 유리수로 떨어진다."
    creative: "(1) 소문항을 지우고 가로등 높이만 묻기 — 눈높이 분해가 학생 몫이 되어 I-RT d1 ★2 (2) 높이를 주고 수평거리를 역으로 묻기 — I-BW d1 ★3 (3) 내려본각 대신 관측자 눈높이(1.5 m)를 수치로 주면 골조가 40-c2 형으로 바뀌며 ★2."
```

```yaml
- id: GN-M32-40-c2
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    눈높이 1.6 m 인 사람이 연을 올려본각 21°, 눈에서 연까지 거리 50 m 일 때 지면으로부터 연까지의 높이. sin21°=0.36 이 주어진다.
  category: "빗변·올려본각으로 수직 높이 → 눈높이 더하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활에서 직각삼각형의 변의 길이의 활용(눈높이 보정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빗변 50 과 21° 로 대변을 구하는 한 줄 계산 뒤 눈높이 1.6 을 더하면 끝이다.
    '지면으로부터'라는 단서를 놓쳐 18 로 답하는 것이 표준 함정(T-경계 → Mₜ 1)이라 40-h2 와 같은 ★2 로 둔다(통찰 0·M_total 4 이지만 −1 하지 않음).
  tier: star_2
  mechanism_primary: "50 sin21°=18 → 지면 기준 높이=18+1.6=19.6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$19.6\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-40-c2.png"
  latex: latex-bank/gn-m32/items/40-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "눈높이(1.5·1.7)·거리(40·60·80)·각과 그 sin 값을 함께 교체. 제약: 주어진 삼각비 하나로 풀리도록 '빗변과 각'을 주고 대변을 묻는 배치를 유지해야 한다. 눈높이를 더한 답이 소수 첫째 자리에서 끝나게 수를 고른다."
    creative: "(1) 눈높이 대신 언덕 높이를 주기(★2 유지) (2) 지면 높이를 주고 연까지의 거리를 역으로 묻기 — I-BW d1 ★3 (3) 올려본각과 실의 길이를 주고 '수평 거리'까지 함께 묻으면 cos 가 추가돼 ★2."
```

```yaml
- id: GN-M32-41-h3
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    △ABC 에서 AB=8√3 cm, BC=20 cm, ∠B=30° 일 때 AC 의 길이.
  category: "두 변과 끼인각 → 수선 분할 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일반 삼각형을 그대로는 다룰 수 없어 수선 AH 를 그어 두 직각삼각형으로 표현을 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 삼각형의 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    38-03 과 같은 골조지만 수선이 발문에 제시되지 않아 보조선 착안이 학생 몫이다(I-RT d1).
    8√3 의 sin·cos 와 √112 정리로 무리수 계산이 다단계라 Mₖ 2. 핵심문제 출발 ★2 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "A 에서 BC 에 수선 AH → AH=8√3 sin30°=4√3 · BH=12 → CH=8 → AC=√(48+64)=4√7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{7}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-41-h3.png"
  latex: latex-bank/gn-m32/items/41-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 를 √3 배수(4√3·6√3·10√3), BC 를 정수(12·16·24), 끼인각을 30°/60° 로 교체. 제약: AB cos∠B 가 정수 BH 이고 BH<BC 여야 H 가 변 위에 놓인다. AC²=AH²+CH² 가 제곱수 인수를 가져야 답이 k√m 꼴로 정리된다."
    creative: "(1) AC 대신 넓이나 ∠C 의 tan 값을 묻기(★2) (2) 끼인각을 120° 로 바꿔 H 를 연장 위로 보내면 I-EQV d2 가 추가돼 ★3 (3) AC 를 주고 BC 를 역으로 묻기 — I-BW d1 + 이차방정식으로 ★3~4."
```

```yaml
- id: GN-M32-41-c3
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    △ABC 에서 AC=6 cm, BC=5 cm, ∠C=60° 일 때 AB 의 길이.
  category: "두 변과 끼인각 → 수선 분할 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선 BH 를 그어 일반 삼각형을 두 직각삼각형으로 바꿔야 피타고라스로 넘어감"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 삼각형의 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    41-h3 과 같은 골조이며 끼인각이 ∠C 라 수선을 B 에서 AC 로 내려야 한다는 점만 다르다.
    BH·CH 가 분수(5√3/2, 5/2)로 나와 제곱 정리가 번거로워 Mₖ 2. 핵심문제 구역 출발 ★2 · 통찰 1(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "B 에서 AC 에 수선 BH → BH=5 sin60° · CH=5 cos60° → AH=6−CH → AB=√(BH²+AH²)=√31"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{31}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-41-c3.png"
  latex: latex-bank/gn-m32/items/41-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변(4·5·8·10)과 끼인각(60°·120°)을 교체. 제약: 끼인각 60° 면 AB²=a²+b²−ab 가 되어 정수, 120° 면 a²+b²+ab 가 된다 — 어느 쪽이든 답이 √(정수) 로 떨어지므로 그 정수가 제곱 인수를 갖는지로 답 모양을 조절한다. CH<AC 여야 H 가 변 위에 놓인다."
    creative: "(1) AB 대신 △ABC 의 넓이를 묻기(★2) (2) 끼인각을 120° 로 바꿔 H 를 AC 의 연장 위로 보내면 I-EQV d2 ★3 (3) 세 변 중 하나를 미지수로 두고 AB 값을 주면 I-BW ★3."
```

```yaml
- id: GN-M32-41-h4
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    △ABC 에서 AB=8 cm, ∠B=75°, ∠C=45° 일 때 BC 의 길이.
  category: "한 변과 양 끝 각 → 특수각 쪽으로 수선 → 공통변 연결"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠A=60° 를 먼저 구해 특수각이 두 번 쓰이는 꼭짓점 B 에서 수선을 내려 두 직각삼각형으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 삼각형의 변의 길이 구하기(한 변과 그 양 끝 각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    75° 는 삼각비 값을 모르므로 그 각을 피해 수선을 내려야 한다 — 수선을 어느 꼭짓점에서 내리는지가 급소(T-표기 → Mₜ 1).
    공통변 BH 를 다리로 8 → BC 로 넘어간다. 핵심문제 출발 ★2 · 통찰 1(RT d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "∠A=60° → B 에서 AC 에 수선 BH → BH=8 sin60°=4√3 → BC=BH/sin45°=4√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{6}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-41-h4.png"
  latex: latex-bank/gn-m32/items/41-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(6·10·12)와 각 조합을 교체. 제약: 세 내각 중 **두 개**가 특수각이어야 하므로 (75°,45°,60°) · (105°,45°,30°) · (75°,60°,45°) 처럼 비특수각 하나만 남기는 조합만 쓸 수 있다. 주어진 변은 비특수각을 한 끝으로 갖는 변이라야 수선 선택이 의미를 갖는다."
    creative: "(1) BC 대신 AC 를 묻기(같은 골조 ★2) (2) 두 각을 40°·65° 같은 일반각으로 바꾸고 답을 식으로 고르게 하면 계산이 빠지고 골조만 남아 ★3 (3) 실생활 관측 상황(두 지점에서 배 바라보기)으로 옮기면 모델링이 붙어 ★3 — 43-04 가 그 형태."
```

```yaml
- id: GN-M32-41-c4
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    △ABC 에서 BC=4 cm, ∠B=30°, ∠C=105° 일 때 AC 의 길이.
  category: "한 변과 양 끝 각 → 특수각 쪽으로 수선 → 공통변 연결"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠A=45° 를 구한 뒤 105° 를 피해 C 에서 AB 로 수선을 내려 두 직각삼각형으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 삼각형의 변의 길이 구하기(한 변과 그 양 끝 각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    41-h4 와 같은 골조. ∠C=105° 가 둔각이라 수선의 발이 AB 위에 놓이는지 확인이 필요해 T-표기 함정 1개(Mₜ 1).
    공통변 CH 를 다리로 BC → AC 로 넘어간다. 핵심문제 구역 출발 ★2 · 통찰 1(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "∠A=45° → C 에서 AB 에 수선 CH → CH=4 sin30°=2 → AC=CH/sin45°=2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-41-c4.png"
  latex: latex-bank/gn-m32/items/41-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(6·8·10)와 (∠B,∠C)=(30°,105°)/(45°,75°)/(60°,75°) 를 교체. 제약: 남은 ∠A 와 주어진 ∠B 가 모두 특수각이라야 두 번의 삼각비가 계산된다. 답이 k√2·k√3 꼴로 떨어지도록 BC 를 2 의 배수로 잡는다."
    creative: "(1) AC 대신 AB 나 높이를 묻기(★2) (2) ∠C 를 120° 로 키우고 '넓이'까지 묻기 ★3 (3) 두 각을 일반각으로 바꿔 식 고르기 5지선다로 만들면 ★3."
```

```yaml
- id: GN-M32-42-h5
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    △ABC 에서 BC=20 cm, ∠B=30°, ∠C=60° 일 때 높이 AH 의 길이.
  category: "높이를 h 로 두고 BH+CH=BC 방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 높이를 h 로 놓고 BH·CH 를 h tan 으로 표현해 BH+CH=BC 라는 h 방정식으로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(주어진 각이 모두 예각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    39-05 와 같은 골조지만 소문항 유도가 없어 '구하려는 것을 미지수로 두고 변의 길이로 조건을 회수'하는 단계가 학생 몫이다(I-EQV d1).
    여각(∠BAH=60°·∠CAH=30°)으로 tan 을 잡고 유리화까지 가야 해 Mₖ 2·Mₐ 2. 핵심문제 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: "AH=h → BH=h tan60°=√3h · CH=h tan30°=h/√3 → √3h+h/√3=20 → h=5√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\sqrt{3}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-42-h5.png"
  latex: latex-bank/gn-m32/items/42-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(12·14·18·24)와 각 쌍(30°·60° / 45°·30° / 45°·60°)을 교체. 제약: 두 각 모두 예각이라야 합 구조가 유지된다. 30°·60° 조합은 계수가 4/√3 이라 BC 가 4 의 배수일 때 h 가 깔끔하고, 45° 가 낀 조합은 분모 1+√3 유리화가 반드시 들어간다."
    creative: "(1) AH 대신 AB·AC 나 넓이를 묻기(★2) (2) 한 각을 둔각으로 바꾸면 차 구조가 되어 I-EQV d2 ★3 (3) 각을 40°·65° 같은 일반각으로 바꾸고 AH 를 tan 식으로 고르게 하면 계산이 빠지고 골조만 남아 ★3 — 43-05 가 그 형태."
```

```yaml
- id: GN-M32-42-c5
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    △ABC 에서 BC=14 cm, ∠B=45°, ∠C=30° 일 때 ⑴ 높이 AH ⑵ △ABC 의 넓이.
  category: "높이를 h 로 두고 BH+CH=BC → 넓이"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "높이를 h 로 놓고 BH=h·CH=√3h 로 표현해 h+√3h=14 라는 h 방정식으로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(주어진 각이 모두 예각) · 넓이 연결"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 이 h 를 직접 묻기만 할 뿐 BH·CH 를 유도해 주지 않아 방정식을 세우는 단계가 학생 몫이다(I-EQV d1).
    분모 1+√3 유리화 뒤 ⑵ 에서 그 무리수 높이를 다시 넓이 공식에 넣어야 해 Mₖ 2. 확인문제 출발 ★2 → ★2.
  tier: star_2
  mechanism_primary: "AH=h → BH=h tan45°=h · CH=h tan60°=√3h → h+√3h=14 → h=7(√3−1) → 넓이=½·14·h"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $7(\sqrt{3}-1)\,\mathrm{cm}$ ⑵ $49(\sqrt{3}-1)\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-42-c5.png"
  latex: latex-bank/gn-m32/items/42-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(8·12·16·20)와 예각 쌍(45°·30° / 45°·60° / 30°·60°)을 교체. 제약: 넓이까지 묻으므로 BC 를 짝수로 잡아 ½·BC 가 정수가 되게 한다. 45°·30° 조합은 h 가 k(√3−1) 꼴이라 넓이도 같은 꼴로 예쁘게 떨어진다."
    creative: "(1) ⑵ 를 'AB 의 길이'로 바꾸기(★2) (2) 넓이를 주고 BC 를 역으로 묻기 — I-BW d1 ★3 (3) ∠C 를 120° 로 바꿔 차 구조로 만들면 I-EQV d2 ★3."
```

```yaml
- id: GN-M32-42-h6
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    △ABC 에서 BC=8 cm, ∠B=45°, ∠ACH=60° 일 때 높이 AH 의 길이. 수선의 발 H 가 BC 의 연장 위에 있는 둔각 배치.
  category: "둔각 배치 높이 — BH−CH=BC 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "높이를 h 로 놓되 H 가 BC 의 연장 위에 있음을 읽어 BC=BH−CH 라는 '차' 방정식으로 조건을 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(주어진 각 중 한 각이 둔각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    예각형의 합 구조를 그대로 쓰면 틀리고, H 의 위치를 보고 차로 바꾸는 것이 급소다(T-경계 → Mₜ 1).
    ∠ACH 가 △ABC 의 내각이 아니라 그 외각이라는 점도 읽어야 한다. 분모 1−1/√3 유리화까지 더해 M_total 7 로 이 범위 최상.
    핵심문제 출발 ★2 · 통찰 1(EQV d2) · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "AH=h → BH=h tan45°=h · CH=h/tan60°=h/√3 → 둔각이라 h−h/√3=8 → h=4(3+√3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4(3+\sqrt{3})\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-42-h6.png"
  latex: latex-bank/gn-m32/items/42-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(6·10·12)와 (∠B, ∠ACH)=(45°,60°)/(30°,45°)/(45°,30°) 를 교체. 제약: ∠ACH(외각)가 ∠B 보다 커야 BH>CH 로 차가 양수가 된다. 두 각이 모두 특수각이라야 tan 값이 정리되고, 유리화 뒤 답이 k(a+√b) 꼴로 남는다."
    creative: "(1) AH 대신 △ABC 의 넓이를 묻기 — 43-06 형태 ★3 (2) 외각 ∠ACH 대신 내각 ∠ACB=120° 로 주면 보각을 한 번 더 거쳐 ★3 유지~상승 (3) 소문항으로 BH·CH 를 유도해 주면 통찰이 사라져 ★1~2 — 39-06 이 그 형태."
```

```yaml
- id: GN-M32-42-c6
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    10 km 떨어진 두 관측소 A, B 에서 인공위성 C 를 올려본각이 각각 30°, 45° 일 때 지면으로부터 인공위성까지의 높이.
  category: "같은 쪽 두 관측점 → 밑변의 차로 높이 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "높이를 h 로 놓고 두 관측점이 수선의 발 기준 같은 쪽에 있음을 읽어 10=(h/tan30°)−(h/tan45°) 라는 차 방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실생활 높이 구하기(두 관측점이 같은 쪽에 있는 둔각 배치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 관측소가 위성의 수선 발 기준 같은 쪽이라 42-h6 과 같은 '차' 구조다. 합으로 세우면 틀린다(T-경계 → Mₜ 1).
    작은 각 쪽이 먼 관측소라는 대응까지 읽어야 하고, 분모 √3−1 유리화가 들어간다.
    확인문제 출발 ★2 · 통찰 1(EQV d2) · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "높이 h → 먼 관측소까지 √3h · 가까운 관측소까지 h → √3h−h=10 → h=5(√3+1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5(\sqrt{3}+1)\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-42-c6.png"
  latex: latex-bank/gn-m32/items/42-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 관측소 거리(6·12·20)와 각 쌍(30°·45° / 30°·60° / 45°·60°)을 교체. 제약: 두 각이 서로 달라야 하고 모두 특수각이어야 한다. 30°·60° 조합은 계수가 (√3−1/√3)=2/√3 이라 거리를 2 의 배수로 잡으면 답이 정리된다. 각이 클수록 가까운 관측소임을 그림 배치와 일치시켜야 한다."
    creative: "(1) 인공위성 대신 산 높이·열기구로 소재만 바꾸기(★3 유지) (2) 두 관측소를 위성의 양쪽에 두면 합 구조가 되어 ★2 로 내려간다 (3) 높이를 주고 두 관측소 사이 거리를 역으로 묻기 — I-BW d1 추가 ★3~4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-43-01
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    밑면의 반지름이 3 cm 인 원뿔에서 ∠ABO=60° 일 때 원뿔의 부피.
  category: "원뿔의 축단면 직각삼각형 → 높이 → 부피 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각비로 구한 높이를 중1 입체도형의 원뿔 부피 공식에 이어 붙여야 답이 나옴(단원 경계 결합)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비를 이용한 입체도형의 부피·겉넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    입체를 축단면 직각삼각형 ABO 로 보고 OA=OB tan60° 로 높이를 얻은 뒤 중1 의 V=⅓πr²h 로 넘어간다 — 두 단원의 도구가 모두 필요(I-XU d1).
    ∠ABO 가 모선과 밑면이 이루는 각임을 읽는 표기 함정 1개(Mₜ 1). 시험 구역 출발 ★2~3 · 통찰 1(d1) · M_total 5 → ★2.
    [분류 이슈] 부피 공식 적용을 단원 경계 결합으로 볼지 표준 절차로 볼지에 따라 절차형 ★2 로도 읽힌다.
  tier: star_2
  mechanism_primary: "축단면 △ABO → 높이 AO=3 tan60°=3√3 → V=⅓π·3²·3√3=9√3π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9\sqrt{3}\pi\,\mathrm{cm}^3$'
  answer_source: "답지"
  figure: "crop:fig-43-01.png"
  latex: latex-bank/gn-m32/items/43-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(2·4·6)과 각(30°·45°·60°)을 교체. 제약: 45° 면 h=r 로 무리수가 사라져 변별이 약해지고, 30° 면 h=r/√3 라 부피에 유리화가 들어간다. 반지름을 3 의 배수로 잡으면 ⅓πr² 이 정수로 떨어진다."
    creative: "(1) 부피 대신 겉넓이(모선 길이 필요 → 1/cos 추가)를 묻기 ★3 (2) 각 대신 모선 길이를 주고 높이를 피타고라스로 구하게 하면 삼각비가 빠져 ★1~2 (3) 원뿔을 사각뿔·원기둥으로 바꾸고 옆면의 경사각을 주면 골조 유지 ★2~3."
```

```yaml
- id: GN-M32-43-02
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    수직으로 서 있던 나무가 부러져 지면과 30° 를 이룰 때, 부러지기 전 나무의 높이. 그림에서 밑동 B 와 쓰러진 끝 C 사이가 15 m 이다.
  category: "남은 기둥 + 부러진 부분(빗변) 의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'부러지기 전 높이'를 '남아 있는 기둥 AC + 부러진 부분 AB' 의 합으로 다시 읽어야 함(한 변만 구하면 오답)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실생활 활용 — 부러진 나무·기울어진 기둥의 원래 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산 자체는 tan30° 와 1/cos30° 두 줄이지만, 묻는 것이 '한 변'이 아니라 '두 변의 합'이라는 재해석이 급소다(T-경계 → Mₜ 1).
    부러진 부분이 빗변이라 cos 을 나눠 써야 하는 것도 자주 틀린다. 시험 구역 출발 ★2~3 · 통찰 1(EQV d2) → ★3.
  tier: star_3
  mechanism_primary: "밑동에서 15 m·30° → 남은 기둥 15 tan30°=5√3 · 부러진 부분 15/cos30°=10√3 → 합 15√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\sqrt{3}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-43-02.png"
  latex: latex-bank/gn-m32/items/43-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수평거리(9·12·20)와 각(30°·45°·60°)을 교체. 제약: 45° 면 합이 d(1+√2) 로 남고 60° 면 d(√3+2) 가 된다 — 어느 쪽이든 한 줄로 정리되지만 30° 조합만 답이 단일 무리수(15√3)로 떨어져 채점이 깔끔하다. 그림의 15 m 라벨은 밑동~끝 사이 수평거리로 고정해야 한다."
    creative: "(1) 부러진 부분의 길이만 묻기 — 합 재해석이 빠져 ★2 (2) 부러지기 전 높이를 주고 부러진 지점의 높이를 역으로 묻기 — I-BW d1 ★3~4 (3) 나무 대신 접힌 사다리·기울어진 전봇대로 소재만 바꾸기(★3 유지)."
```

```yaml
- id: GN-M32-43-03
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    △ABC 에서 AB=4√2 cm, BC=6 cm, ∠B=45° 일 때 AC 의 길이.
  category: "두 변과 끼인각 → 수선 분할 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선 AH 를 그어 일반 삼각형을 두 직각삼각형으로 바꿔야 피타고라스로 넘어감"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 삼각형의 변의 길이 구하기(두 변과 끼인각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    41-h3 과 같은 골조이며 4√2·45° 로 AH·BH 가 모두 정수 4 로 떨어져 계산이 오히려 가볍다.
    시험 구역 출발 ★2~3 이지만 통찰 1개(RT d1)·M_total 5 로 핵심문제와 같은 수준 → ★2.
  tier: star_2
  mechanism_primary: "A 에서 BC 에 수선 AH → AH=BH=4√2 sin45°=4 → CH=2 → AC=√(16+4)=2√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{5}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-43-03.png"
  latex: latex-bank/gn-m32/items/43-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 를 √2 배수(3√2·5√2·6√2), BC 를 정수(5·8·10), 끼인각을 45° 로 두면 AH=BH 가 정수라 계산이 가볍다. 제약: BH<BC 여야 H 가 변 위에 놓이고, AH²+CH² 가 제곱 인수를 가져야 답이 k√m 으로 정리된다."
    creative: "(1) BC 를 4 미만으로 줄여 H 가 BC 밖으로 나가게 하면 CH=BH−BC 가 되어 I-EQV d2 ★3 (2) AC 대신 ∠C 의 삼각비를 묻기 ★3 (3) 넓이를 함께 묻기(★2 유지)."
```

```yaml
- id: GN-M32-43-04
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    120 m 떨어진 해안의 두 지점 B, C 에서 배 A 를 바라본 각이 각각 60°, 75° 일 때 A, C 사이의 거리.
  category: "한 변과 양 끝 각(실생활) → 특수각 쪽으로 수선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "관측 상황을 △ABC 로 모델링하고 75° 를 피해 C 에서 AB 로 수선을 내려 두 직각삼각형으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실생활 활용 — 한 변과 그 양 끝 각을 아는 삼각형의 변의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 41-h4 와 같지만 보조선도 삼각형 이름도 제시되지 않아 모델링부터 학생 몫이고, ∠A=45° 를 먼저 구해 수선을 내릴 꼭짓점을 고르는 판단이 붙는다(Mₜ 1).
    60√3·√2 정리까지 무리수 계산이 다단계. 시험 구역 출발 ★2~3 · 통찰 1(RT d1) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "∠A=45° → C 에서 AB 에 수선 CH → CH=120 sin60°=60√3 → AC=CH/sin45°=60√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60\sqrt{6}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-43-04.png"
  latex: latex-bank/gn-m32/items/43-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(60·90·150)와 각 조합(60°·75° / 45°·75° / 30°·105°)을 교체. 제약: 세 내각 중 두 개가 특수각이어야 하고, 구하는 변이 비특수각과 마주 보지 않도록 배치한다. BC 를 60 의 배수로 잡으면 √6 계수가 정수로 떨어진다."
    creative: "(1) AC 대신 AB 나 배에서 해안까지의 최단거리(높이)를 묻기 ★3 (2) 두 각을 일반각으로 바꿔 답을 식으로 고르게 하면 ★3 유지 (3) 배가 해안선 반대쪽으로 이동해 한 각이 둔각이 되면 I-EQV d2 가 추가돼 ★4."
```

```yaml
- id: GN-M32-43-05
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    △ABC 에서 BC=5, ∠B=40°, ∠C=65° 일 때 높이 AH 를 나타내는 식을 5지선다에서 고르기.
  category: "일반각 높이 — 여각 tan 으로 BH+CH=BC 를 식으로"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AH=h 로 놓고 밑각이 아니라 여각(∠BAH=50°·∠CAH=25°)의 tan 으로 BH·CH 를 써야 BH+CH=BC 가 성립함을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 높이를 삼각비 식으로 나타내기(일반각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    특수각이 아니라 수치 계산이 아예 없고 골조만 남은 문항이다. 오답 ①②⑤ 가 모두 '밑각 tan 을 그대로 쓰기'·'차로 쓰기' 라서
    여각 변환(50°·25°)과 합 구조를 동시에 맞혀야 한다(T-표기 → Mₜ 1). 시험 구역 출발 ★2~3 · 통찰 1(EQV d2) → ★3.
  tier: star_3
  mechanism_primary: "AH=h → BH=h tan50° · CH=h tan25° → h(tan50°+tan25°)=5 → h=5/(tan50°+tan25°)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-43-05.png"
  latex: latex-bank/gn-m32/items/43-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(4·6·10)와 두 밑각(40°·65° / 35°·55° / 28°·70°)을 교체. 제약: 두 각 모두 예각이라야 합 구조가 유지되고, 여각(90°−각)이 선택지에서 밑각과 뚜렷이 구별되도록 두 각을 서로 다르게 잡는다. 계산이 없으므로 수치의 제약은 거의 없다."
    creative: "(1) 한 각을 둔각으로 바꿔 차 구조 식을 고르게 하면 ★3~4 (2) 밑각의 tan 을 쓰는 '높이=BC/(1/tan B+1/tan C)' 형태 선택지를 섞으면 동치 판정이 추가돼 ★4 (3) 특수각으로 바꿔 값까지 구하게 하면 계산만 늘고 ★2~3."
```

```yaml
- id: GN-M32-43-06
  page: 43
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    △ABC 에서 BC=6 cm, ∠B=30°, ∠ACB=120° 일 때 △ABC 의 넓이.
  category: "둔각 배치 높이(BH−CH=BC) → 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "높이를 h 로 놓고 ∠ACB 가 둔각이라 H 가 BC 의 연장 위임을 읽어 BC=BH−CH 로 조건을 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 높이 구하기(한 각이 둔각) · 넓이 연결"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    39-06 과 같은 둔각 골조인데 소문항 유도가 전혀 없고 넓이까지 한 단계 더 간다.
    120° 의 보각 60° 를 거쳐 ∠CAH=30° 를 얻고, 합이 아니라 차로 방정식을 세워야 한다(T-경계 → Mₜ 1).
    시험 구역 출발 ★2~3 · 통찰 1(EQV d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "AH=h → BH=√3h · CH=h/√3 → 둔각이라 √3h−h/√3=6 → h=3√3 → 넓이=½·6·3√3=9√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-43-06.png"
  latex: latex-bank/gn-m32/items/43-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(4·8·12)와 (∠B, ∠ACB)=(30°,120°)/(45°,135°)/(30°,135°) 를 교체. 제약: ∠ACB 가 둔각이라야 차 구조가 유지되고, ∠B 와 보각이 모두 특수각이라야 tan 이 정리된다. 넓이까지 묻으므로 BC 를 짝수로 잡아 ½·BC 를 정수로 만든다."
    creative: "(1) 넓이 대신 AB·AC 의 길이를 묻기(★3 유지) (2) 넓이를 주고 BC 를 역으로 묻기 — I-BW d1 추가 ★4 (3) 소문항으로 BH·CH 를 유도해 주면 통찰이 사라져 ★1 — 39-06 이 그 형태."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 7 · ★2 11 · ★3 6 · ★4 0 · ★5 0
- 통찰형 15 · 절차형 9 · premium 0
- 통찰 유형 분포: I-EQV 8(d1 4 · d2 4) · I-RT 6(모두 d1) · I-XU 1(d1). I-SC·I-VF·I-SYM·I-PD 는 0 이라 ★4~5 자격 문항이 이 범위에 없다.
- 구역별 ★: 개념원리 확인하기 6문 모두 ★1(소문항이 모든 단계를 유도) · 핵심문제 익히기 12문은 ★1 1 · ★2 9 · ★3 2 · 이런 문제가 시험에 나온다 6문은 ★2 2 · ★3 4.
- type_hint 상위: 「일반 삼각형의 변의 길이(두 변과 끼인각)」 4 · 「삼각형의 높이 구하기(예각)」 3 · 「일반 삼각형의 변의 길이(한 변과 양 끝 각)」 3 · 「삼각형의 높이 구하기(둔각)」 3 · 「실생활에서 직각삼각형의 변의 길이 활용」 3.
- 그림: 24문 전부 `crop:fig-<id>.png`. 발문에 수치가 없고 그림에만 있는 문항은 43-02(밑동~끝 15 m) 한 문뿐이라 이 한 장만 열어 확인했다.
- M_total 분포: 3 1 · 4 7 · 5 9 · 6 4 · 7 3. 최상위 7 은 둔각 높이 3문(42-h6 · 42-c6 · 43-06).

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-39-06 | 둔각 높이 골조이나 소문항 ⑴~⑶ 이 두 각·BH·CH 를 모두 유도해 절차형 ★1. 비유도형 같은 골조 43-06 은 ★3 → 같은 유형 안에서 2단 차 | ★1 / ★3 |
| GN-M32-40-h1 | 벤더 「핵심문제 익히기」(★2 구역)이나 주어진 삼각비 값 두 번 대입 후 뺄셈뿐(통찰 0 · M_total 4) → ★1 로 내렸다 | ★1 / ★2 |
| GN-M32-43-01 | 원뿔 부피 공식(중1 입체) 적용을 I-XU 로 볼지 표준 절차로 볼지에 따라 통찰형·절차형이 갈린다. ★ 는 어느 쪽이든 2 | ★2 |
| GN-M32-40-h2 · 40-c2 | 통찰 0 · M_total 4~5 라 산식상 −1 후보(★1)지만, '눈높이/지면 기준 합산 누락'이 이 유형의 실제 변별 지점이라 ★2 를 유지했다 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 사실상 **다섯 유형**으로 수렴한다 — (A) 직각삼각형에서 변 구하기·나타내기 (B) 두 변과 끼인각 (C) 한 변과 양 끝 각 (D) 삼각형의 높이 (E) 실생활 활용.
- (D) 는 **예각형과 둔각형을 반드시 따로 세워야 한다**. 합(BH+CH=BC) 과 차(BH−CH=BC) 의 차이가 이 단원 최대 오답 원인이고, M_total 도 6 대 7 로 갈린다. 각각 base ★2 · ★3 이 적절하다.
- (B) 와 (C) 는 둘 다 '수선을 그어 직각삼각형으로 바꾼다'는 같은 도구를 쓰지만, (B) 는 피타고라스로 닫히고 (C) 는 공통변을 다리로 다른 변으로 건너간다 — **통합하지 말고 따로 세울 것**. (C) 에는 '수선을 내릴 꼭짓점을 특수각 쪽으로 고른다'는 선택이 항상 들어간다.
- (E) 실생활은 골조가 (A)·(D) 중 하나와 같으므로 **독립 유형 대신 (A)·(D) 의 맥락 변형 태그**로 두는 편이 낫다. 다만 '눈높이·지면 기준 합산'(40-h2 · 40-c2 · 43-02)은 오답 패턴이 공통이라 하위 유형 하나로 묶을 값어치가 있다.
- 43-01(입체도형과의 결합)은 이 다섯 유형 어디에도 들어가지 않는다. 카탈로그에서는 '삼각비의 입체도형 활용'으로 별도 유형을 세우는 것이 맞다.
- **소문항 유도 유무**를 유형 속성으로 둘지 결정이 필요하다. 39-05·39-06·40-h2·42-c5 처럼 유도가 붙으면 같은 유형이라도 통찰이 사라져 ★ 가 1~2단 내려간다. 카탈로그 base ★ 는 비유도형 기준으로 잡고, 유도형은 −1 보정으로 처리하는 편이 일관된다.
