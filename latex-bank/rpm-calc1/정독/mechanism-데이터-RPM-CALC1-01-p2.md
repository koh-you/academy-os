---
name: mechanism-데이터-RPM-CALC1-01-p2
description: RPM 미적분Ⅰ 01 함수의 극한(2/3 · 유형 02~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 01 함수의 극한
  unit_code: CALC1-01
  part: "2/3"
  extract_range: "11~15쪽 · 0039~0073"
  total_problems: 35
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 01 함수의 극한 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 01 함수의 극한 중 11~15쪽 「유형 02 극한값 구하기」부터 「유형 09 미정계수의 결정」까지 여덟 유형 구역 35문항(0039~0073)을 다룬다. 이 범위는 교과서 구역이 끝난 뒤의 유형별 기본 문제 구역이라 벤더 난이도 신호는 「유형 NN」 구역 안의 난이도 표시(중하·중·상중)와 태그(대표문제·서술형)뿐이다. 각 유형의 첫 문항은 「대표문제」로 난이도 표시가 없고, 나머지는 중하~상중 사이에 분포한다. 그림은 그래프 읽기 3문(0039·0045·0050)에만 있다.

★ 는 벤더 신호를 출발점(대표문제·표시 없음 ★2 · 중하 ★1~2 · 중 ★2 · 상중 ★3)으로 두고 M_total·통찰로 조정했다. 통찰 0 에 M_total ≤ 4 이며 대입·읽기만으로 끝나는 문항은 −1 을 적용했고, M_total 5 이상이거나 함정 카테고리가 있으면 출발점을 유지했다. 절차형이라도 M_total 9 처럼 노동량이 큰 문항은 +1 을 적용했다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 수식이 들어가는 짧은 필드는 YAML 큰따옴표 안에서 역슬래시를 피하려고 √·→·∞ 같은 유니코드로 적었다.

## 문항 데이터

### 유형 02 극한값 구하기

```yaml
- id: RPM-CALC1-0039
  page: 11
  vendor_label: "유형 02 극한값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    계단·꺾은선 그래프로 주어진 y=f(x) 에 대하여 x→-1- 좌극한, x→0+ 우극한, x→1 극한의 합.
  category: "그래프에서 한쪽 극한 읽기 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 좌극한·우극한 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→-1- 는 왼쪽 수평선 3, x→0+ 는 원점에서 출발하는 선분이라 0, x→1 은 양쪽 모두 3(함숫값 f(1)=2 는 무관). 3+0+3=6.
    그래프 읽기 세 번뿐이라 M_total 4·통찰 없음. 유형 대표(★2 출발)지만 교과서 수준이라 −1 → ★1. 함정은 f(1)=2 와 극한 3 의 구분(T-경계) 하나.
  tier: star_1
  mechanism_primary: "그래프 → 각 방향의 접근값 읽기(좌 3 · 우 0 · 양쪽 3) → 합 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-0039.png"
  latex: latex-bank/rpm-calc1/items/0039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점(-1·0·1)과 방향(±)을 바꿔 다른 조합을 묻거나 함숫값 f(0)·f(1) 을 더하기. 제약: 그림 라벨(점의 열림·닫힘, 값 2·3)은 고정이며 x→1 처럼 양쪽 극한이 같아야 극한이 존재하므로 조합에 따라 '존재하지 않는다' 가 답이 되지 않게 확인."
    creative: "(1) 좌·우극한이 다른 점(x=0)의 양쪽 극한을 묻고 '존재 여부' 로 바꾸기(★1 유지) (2) f(x)+f(-x) 나 f(x)·f(x-1) 같은 합성 식의 한쪽 극한으로 바꾸면 방향 추적이 필요해 ★2 (3) 두 그래프 f·g 의 곱의 극한(0050 골조)으로 확장하면 ★2."
```

```yaml
- id: RPM-CALC1-0040
  page: 11
  vendor_label: "유형 02 극한값 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 구간(x<0 · 0≤x<1 · x≥1)으로 정의된 f(x) 에 대하여 x→0- 좌극한과 x→1+ 우극한의 합.
  category: "구간별 정의 → 해당 구간 식에 대입 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수의 좌극한·우극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→0- 는 x<0 구간 식 -x+1 → 1, x→1+ 는 x≥1 구간 상수 3. 합 4.
    구간 선택 두 번과 대입뿐. 벤더 중하(★1~2)에서 M_total 4·통찰 없음이라 ★1. 함정은 방향에 맞는 구간 고르기(T-경계).
  tier: star_1
  mechanism_primary: "접근 방향 → 해당 구간 식 선택 → 대입(1, 3) → 합 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 경계(0·1)와 각 구간의 식(일차·이차·상수)을 자유롭게. 제약: 묻는 방향의 구간 식만 답에 쓰이므로 경계에서 좌·우가 다르게 설계해야 '방향 고르기' 가 살아남고, 대입값이 정수가 되게."
    creative: "(1) x→1 양쪽 극한이 존재하는지 묻기(★1) (2) 경계에서 극한이 존재하도록 하는 상수 k 를 넣어 미정계수형으로(★2) (3) f(x)+f(-x) 의 극한처럼 방향이 뒤집히는 합성으로 바꾸면 ★2."
```

```yaml
- id: RPM-CALC1-0041
  page: 11
  vendor_label: "유형 02 극한값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(2x²-3x-2)/|x-2| 의 x→2+ 우극한 a 와 x→2- 좌극한 b 에 대하여 a-b.
  category: "분자 인수분해 → 절댓값 부호 분할 → 약분 → 한쪽 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 포함 함수의 좌극한·우극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 (2x+1)(x-2). x→2+ 에서 |x-2|=x-2 라 2x+1→5, x→2- 에서 |x-2|=-(x-2) 라 -(2x+1)→-5. a-b=10.
    절댓값 구간 분할은 표준 분기(통찰 아님). 인수분해·부호 분할·두 극한으로 M_total 5, 부호 함정(T-부호) 있어 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자 인수분해 (2x+1)(x-2) → |x-2| 를 방향별 부호로 → 약분 → 5, -5 → 차 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 이차식과 절댓값 안의 일차식을 바꾸되 분자가 (x-c) 를 인수로 가져야 함. 제약: 약분 뒤 남는 값이 0 이 아니어야 a≠b 가 되고, 답이 정수가 되게 c 와 계수를 조정."
    creative: "(1) a+b 나 ab 로 바꾸기(★2) (2) 극한이 존재하도록 하는 조건으로 뒤집으면 존재 조건 → 분자가 (x-c)² 인수를 가짐(★3 · I-EQV) (3) 절댓값이 분자·분모 양쪽에 있는 0055 골조로 합치면 ★2~3."
```

```yaml
- id: RPM-CALC1-0042
  page: 11
  vendor_label: "유형 02 극한값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가우스 기호 [x] 를 포함한 다섯 극한(x→1+, 0+, 0-, 3, ∞)의 값 중 옳지 않은 것 고르기. 5지선다.
  category: "각 극한에서 [ ] 안 값의 정수 구간 판정 → 상수로 치환 → 값 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→a± 방향에 따라 [ ] 안 식이 어느 정수 구간에 놓이는지 판정해 [ ] 를 상수로 바꾸는 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "가우스 기호 [x] 를 포함한 극한의 진위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ① [x]=1 → 1, ② [x+1]=1 → 1, ③ x→0- 에서 x-1→-1- 라 [x-1]=-2, 분모 -1 → 2 ≠ 1 (거짓), ④ (x-3)² 은 0+ 라 [ ]=0, ⑤ 5+2/x 는 5+ 라 [ ]=5.
    다섯 극한 각각에서 방향과 정수 경계를 따지는 해석이 한 단계 통찰(EQV d1). 함정은 정수 경계(T-경계)와 기호(T-표기). 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "각 보기 → [ ] 안 식의 접근 방향·정수 경계 판정 → [ ] 를 상수로 → 극한값 계산 → ③ 만 불일치"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점(1·0·3)과 [ ] 안 식의 상수를 바꾸기. 제약: 접근점이 정수일 때 방향(±)에 따라 [ ] 값이 달라지는 보기를 정확히 하나만 거짓으로 두고, ④·⑤ 처럼 [ ] 안이 정수에 한쪽에서 붙는 경우는 부호(0+ 인지 0- 인지)를 반드시 확인."
    creative: "(1) 옳은 것의 개수 묻기(★3 유지) (2) [x] 가 든 함수의 x→n 극한 존재 조건으로 바꾸면 좌·우 비교가 핵심(★3) (3) [x]·(x-1) 처럼 0×유계 꼴을 섞으면 경계 판정이 두 겹이라 ★4 후보."
```

### 유형 03 극한값 구하기; 치환

```yaml
- id: RPM-CALC1-0043
  page: 11
  vendor_label: "유형 03 극한값 구하기; 치환"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→5} f(x-5)=3 일 때 lim_{x→0} (1+4f(x))/(2-f(x)) 의 값.
  category: "치환 x-5=t → lim_{t→0} f(t)=3 → 대입"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 극한값(lim f(x-a) 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x-5=t 로 두면 x→5 일 때 t→0 이라 lim_{t→0} f(t)=3. 구하는 식은 (1+12)/(2-3)=-13.
    단순 치환은 표현 전환이 아니라 통찰 0. 미지 함수 f 라 Mₐ 3 으로 M_total 5, 치환 변환이 있어 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x-5=t 치환 → lim_{t→0} f(t)=3 → 분수식에 대입 → -13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 5, 극한값 3, 분수식 계수(1·4·2)를 바꾸기. 제약: 분모 2-f → 2-3 처럼 0 이 되지 않게 하고 답이 정수 또는 간단한 분수."
    creative: "(1) lim_{x→0} f(x+5) 처럼 이동 방향을 반대로(★2) (2) lim_{x→1} f(2x-2)=3 처럼 계수를 넣어 t=2x-2 치환(★2) (3) 한쪽 극한 lim_{x→5+} f(x-5) 로 주고 lim_{x→0-} f(-x) 를 물으면 방향 반전이 필요해 ★3(I-EQV · 0045 골조)."
```

```yaml
- id: RPM-CALC1-0044
  page: 11
  vendor_label: "유형 03 극한값 구하기; 치환"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→0} f(x)/x=2 일 때 lim_{x→3} f(x-3)/(x²-9) 의 값.
  category: "분모 인수분해 → 치환 x-3=t → f(t)/t 와 1/(t+6) 으로 분리"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 극한값(lim f(x-a) 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²-9=(x-3)(x+3), x-3=t 로 두면 f(t)/(t(t+6)) = f(t)/t · 1/(t+6) → 2·(1/6)=1/3.
    인수분해·치환·곱 분리·대입 네 단계라 Mₛ 2, 미지 함수라 Mₐ 3. 치환과 f(x)/x 꼴 만들기는 이 유형의 표준 절차라 통찰 0. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "x²-9 인수분해 → x-3=t 치환 → f(t)/t · 1/(t+6) 분리 → 2·1/6 = 1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 2, 이동량 3, 분모 이차식을 바꾸기. 제약: 분모가 (x-이동량) 을 인수로 가져야 하고 나머지 인수의 값이 0 이 아니어야 함. 답이 간단한 분수가 되게."
    creative: "(1) 분모를 x²-9 대신 √(x+1)-2 같은 무리식으로 두면 유리화가 추가돼 ★3 (2) 조건을 lim_{x→0} f(x)/x=2 대신 lim_{x→1} f(x-1)/(x-1)=2 로 주면 치환이 두 번(★3) (3) 구하는 식을 f(x-3)/x 처럼 분모가 0 으로 가지 않게 바꾸면 f(0)=0 판정이 필요(f 가 연속이란 조건 필요 · ★3 후보)."
```

```yaml
- id: RPM-CALC1-0045
  page: 11
  vendor_label: "유형 03 극한값 구하기; 치환"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프(x<0 곡선 · 0≤x<1 선분 · x>1 감소 직선, f(0)=1, f(1)=1)가 주어진 f 에 대하여 lim_{x→1-} f(x) + lim_{x→1+} f(1-x) 의 값. 5지선다.
  category: "그래프 읽기 + 치환 1-x=t 에서 접근 방향 반전"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→1+ 일 때 1-x→0- 로 접근 방향이 뒤집힘을 해석해 lim_{t→0-} f(t) 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환을 이용한 극한값 — 그래프·방향 반전"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x→1- 에서 선분은 (1,2) 로 다가가 2. x→1+ 이면 1-x→0- 이고 왼쪽 곡선이 원점으로 내려오므로 0. 합 2 → ②.
    치환에서 방향이 반전되는 해석이 통찰 한 단계(EQV d1). 함정은 방향(T-부호)과 f(0)=1, f(1)=1 같은 함숫값 혼동(T-경계). 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "그래프에서 x→1- 값 2 → 1-x=t 로 방향 반전(t→0-) → 그래프에서 0 → 합 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0045.png"
  latex: latex-bank/rpm-calc1/items/0045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 점(1)과 치환 식(1-x, x-1, 2-x)을 바꾸기. 제약: 그림 라벨(0·1·2, 열린 점·닫힌 점)은 고정. 치환 식의 부호가 방향 반전을 만들도록 유지하고 선택지가 정수가 되게."
    creative: "(1) lim_{x→0-} f(-x) 처럼 반전만 남기기(★2~3) (2) lim_{x→1+} f(f(x)) 처럼 합성으로 바꾸면 안쪽 값의 방향까지 추적해야 해 ★4 후보(EQV d2) (3) f(1-x)+f(x-1) 의 x→1 극한 존재 여부로 바꾸면 좌·우 비교 두 겹(★3)."
```

### 유형 04 함수의 극한에 대한 성질

```yaml
- id: RPM-CALC1-0046
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→1} f(x)=∞, lim_{x→1} {2f(x)-g(x)}=3 일 때 lim_{x→1} (f-3g)/(3f-g) 의 값.
  category: "수렴하는 결합식을 h 로 두어 g=2f-h → f 로 나누기 → h/f→0"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 존재하는 2f-g 를 한 식 h(→3) 로 두고 g=2f-h 로 바꿔, 발산하는 f 로 나누면 h/f→0 이 됨을 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한의 성질 — 발산 함수와 수렴식의 결합(f→∞)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2f-g=h, h→3 이라 g=2f-h. 대입하면 (f-6f+3h)/(3f-2f+h) = (-5f+3h)/(f+h). f 로 나누면 (-5+3h/f)/(1+h/f) → -5.
    수렴식 치환과 발산 함수로 나누기가 통찰 한 단계(EQV d1). 대수 정리 중간·미지 함수 둘이라 M_total 7. 대표문제 출발점 ★2 유지(1개 d1 로는 +1 없음).
  tier: star_2
  mechanism_primary: "2f-g=h(→3) → g=2f-h 대입 → 분자·분모를 f 로 나눔 → h/f→0 → -5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "결합식 계수(2, -1)와 극한값 3, 구하는 분수식 계수(1,-3,3,-1)를 바꾸기. 제약: 대입 뒤 분모의 f 계수가 0 이 되면 안 되고(3-2≠0 처럼), 답은 f 계수의 비(정수·분수)."
    creative: "(1) f→∞ 대신 f→-∞ 로 바꿔 부호 감각 확인(★2) (2) 조건을 lim {f·g}=3 처럼 곱으로 주면 g=h/f→0 해석(★2~3) (3) 두 결합식 lim (2f-g)=3, lim (f+g)=∞ 로 주고 f,g 각각의 발산을 판정하게 하면 조건 통합이 필요(★3 · I-CON 후보)."
```

```yaml
- id: RPM-CALC1-0047
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→1} f(x)=2, lim_{x→1} g(x)=a 일 때 lim_{x→1} (f+3g)/(fg-4)=1/2 를 만족시키는 실수 a.
  category: "극한값 대입 → a 의 일차방정식"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한의 성질 — 극한값 대입으로 상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    극한의 성질로 (2+3a)/(2a-4)=1/2 → 4+6a=2a-4 → a=-2. 분모 2a-4=-8≠0 확인.
    대입과 일차방정식뿐이라 통찰 0. 벤더 중하(★1~2) 범위에서 직접 대입형이라 ★1. 함정으로 볼 만한 것은 분모 0 확인 정도.
  tier: star_1
  mechanism_primary: "극한의 성질로 f→2, g→a 대입 → (2+3a)/(2a-4)=1/2 → a=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 극한값 2, 분수식 계수, 우변 1/2 을 바꾸기. 제약: a 에 대한 방정식이 일차가 되게(분모에 a 가 일차로만) 하고 해가 분모를 0 으로 만들지 않게."
    creative: "(1) 우변을 주고 a 가 아니라 f 의 극한값을 묻기(★1) (2) fg-4 대신 g²-4 로 두면 이차방정식과 분모 0 기각이 생겨 ★2(I-VF 후보) (3) g 의 극한이 존재하지 않는 경우와 비교하는 진위형으로 바꾸면 0051 골조(★3)."
```

```yaml
- id: RPM-CALC1-0048
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→0} f(x)/x=3 일 때 lim_{x→0} (5x-3f(x))/(7x+f(x)) 의 값.
  category: "분자·분모를 x 로 나눠 f/x 꼴 → 대입"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한의 성질 — f(x)/x 꼴 극한 이용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 로 나누면 (5-3f/x)/(7+f/x) → (5-9)/(7+3) = -2/5.
    나누기 한 번과 대입이라 통찰 0, M_total 5. x 로 나누는 변환이 있어 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모를 x 로 나눔 → f/x→3 대입 → (5-9)/(7+3) = -2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 과 계수(5,-3,7,1)를 바꾸기. 제약: 분모 7+3 처럼 0 이 되지 않게 하고 답이 기약분수."
    creative: "(1) 조건을 lim f(x)/x² =3 으로 주고 식에 x² 을 섞기(★2) (2) x→0 대신 x→∞ 로 바꾸면 0062 골조(f/x²→0 판단 · ★2) (3) 구하는 식에 f(2x) 를 넣으면 f(2x)/(2x)·2 치환이 필요해 ★3."
```

```yaml
- id: RPM-CALC1-0049
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    lim_{x→2} f(x)=-2, lim_{x→2} {2f(x)+g(x)}=6 일 때 lim_{x→2} g(x) 의 값. 서술형.
  category: "g=(2f+g)-2f 로 분리 → 극한의 성질로 계산"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한의 성질 — 결합식에서 한 함수의 극한 분리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g=(2f+g)-2f 이고 두 항의 극한이 모두 존재하므로 lim g = 6-2(-2) = 10.
    분리 한 단계와 대입뿐이라 통찰 0. 서술형이라 '두 극한이 존재하므로 성질을 쓸 수 있다' 는 근거 서술이 요구되지만 난이도는 그대로. 결합식을 분리하는 변환이 있어 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "g=(2f+g)-2f → 극한의 성질(존재하는 두 극한의 차) → 6-2(-2) = 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 극한값 -2, 결합식 계수 2, 결합 극한값 6 을 바꾸기. 제약: 답이 정수가 되게. 결합식을 fg 나 f/g 로 바꾸면 f 의 극한이 0 이 아닌지 확인해야 함."
    creative: "(1) 결합식을 곱 f·g=6 으로 바꾸면 g=(fg)/f 와 f→-2≠0 확인이 추가(★2) (2) lim f 대신 lim (f-g) 와 lim (f+g) 두 결합식을 주면 연립 분리(★2) (3) f 가 발산하는 경우로 바꾸면 0046 골조(★2~3)."
```

```yaml
- id: RPM-CALC1-0050
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    계단형 그래프 두 개 y=f(x), y=g(x)(|x|≤1 에서 각각 -1, 1 · 바깥에서 1, -1)가 주어질 때 보기 ㄱ~ㄷ(합의 한쪽 극한 비교 · 곱의 극한 비교 · 곱의 극한과 함숫값 곱 비교)의 진위.
  category: "각 점의 좌·우극한을 그래프에서 읽어 합·곱의 극한을 계산 → 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프 두 개의 합·곱의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: x→-1+ 에서 f→-1, g→1 이라 합 0, x→1- 도 -1+1=0 (참). ㄴ: x→-1 양쪽에서 fg=(1)(-1) 또는 (-1)(1)=-1 이라 극한 -1, x→1 도 -1 (참). ㄷ: lim_{x→1} fg=-1, f(-1)g(-1)=(-1)(1)=-1 (참). 답 ㄱ, ㄴ, ㄷ.
    여섯 개의 한쪽 극한을 읽고 합·곱을 계산하는 절차. 함정은 극한과 함숫값 구분(T-경계). 통찰 0·M_total 5 라 벤더 중 ★2 유지. g=-f 임을 보면 합 0·곱 -1 이 즉시 나오지만 필수는 아니어서 통찰로 세지 않음.
  tier: star_2
  mechanism_primary: "각 점(x=±1)의 좌·우극한을 두 그래프에서 읽기 → 합·곱의 극한 → 함숫값 곱과 비교 → ㄱㄴㄷ 모두 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0050.png"
  latex: latex-bank/rpm-calc1/items/0050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 접근점·방향과 합/곱/함숫값 조합을 바꾸기. 제약: 그림 라벨(±1, 열린 점·닫힌 점)은 고정이며 g=-f 구조라 합은 항상 0, 곱은 항상 -1 이 되므로 '거짓' 보기를 만들려면 f(x)g(x) 대신 f(x)+g(-x) 처럼 대칭을 깨는 식을 써야 함."
    creative: "(1) g=-f 대칭을 알아채면 즉시 끝나는 ㄱㄴㄷ 로 유지하되 보기 하나를 f(g(x)) 합성으로 바꾸면 안쪽 극한값에서의 바깥 함수 방향 판정이 필요해 ★3(I-EQV) (2) 그래프 하나를 대칭이 아닌 것으로 바꿔 곱의 극한이 존재하지 않는 점을 넣으면 '존재 여부' 판정형 ★3 (3) 0051 처럼 일반 명제와 섞으면 ★3."
```

```yaml
- id: RPM-CALC1-0051
  page: 12
  vendor_label: "유형 04 함수의 극한에 대한 성질"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    극한의 성질에 관한 명제 ㄱ(두 극한이 모두 없으면 합의 극한도 없다) · ㄴ(합과 차의 극한이 있으면 f 의 극한도 있다) · ㄷ(f 와 fg 의 극한이 있으면 g 의 극한도 있다)의 진위. 5지선다.
  category: "참 명제는 성질로 증명, 거짓 명제는 반례 구성"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ: 각각 발산하지만 합은 수렴하도록 두 함수를 거꾸로 설계(1/x 와 -1/x 류)하는 반례 구성"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ: lim f≠0 이면 g=fg/f 로 성립하지만 lim f=0 인 경우가 따로 있음을 따져 반례(f=x, g=1/x)를 만듦"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한에 대한 성질의 진위(반례)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 거짓(f=1/x, g=-1/x 는 각각 발산하나 합 0). ㄴ 참(f={(f+g)+(f-g)}/2 로 두 극한의 합). ㄷ 거짓(f=x, g=1/x 는 fg=1 로 수렴하나 g 는 발산). 답 ㄴ → ②.
    반례 구성(BW d1)과 lim f=0 인 경우 분리(MI d1) 두 통찰. 다만 두 반례 모두 교과서·유형서에 정착된 표준 반례라 +1 후보를 적용하지 않고 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "ㄴ 은 f=((f+g)+(f-g))/2 로 증명 → ㄱ·ㄷ 은 발산 쌍·f→0 반례로 기각 → ㄴ 만 참"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 변형 여지 없음(명제형). 보기 조합과 순서, 참인 보기의 개수를 바꾸는 정도."
    creative: "(1) 'f 와 f+g 의 극한이 있으면 g 도 있다'(참) 처럼 참 명제 하나를 넣어 참·거짓 균형(★3) (2) 'f/g 와 g 의 극한이 있으면 f 도 있다'(참 · fg 곱) 와 'f/g 와 f 의 극한이 있으면 g 도 있다'(거짓 · f→0) 로 f→0 분기를 두 번 묻게 하면 MI 가 두 겹(★4 후보) (3) 반례를 직접 쓰게 하는 서술형(★3)."
```

### 유형 05 $\dfrac{0}{0}$ 꼴의 극한: 유리식

```yaml
- id: RPM-CALC1-0052
  page: 13
  vendor_label: '유형 05 $\dfrac{0}{0}$ 꼴의 극한: 유리식'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→-2} (x³+8)/(2x²+3x-2) 의 값.
  category: "세제곱 합·이차식 인수분해 → (x+2) 약분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 유리식 극한 — 인수분해"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+2)(x²-2x+4)/((2x-1)(x+2)) → (4+4+4)/(-5) = -12/5.
    인수분해 두 번과 대입. 통찰 0·M_total 3 이라 대표문제 출발점 ★2 에서 −1 → ★1(교과서 예제 수준).
  tier: star_1
  mechanism_primary: "x³+8=(x+2)(x²-2x+4), 2x²+3x-2=(2x-1)(x+2) → (x+2) 약분 → 12/(-5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{12}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 c 와 분모 이차식을 바꾸되 x³+c³ 과 분모가 (x+c) 를 공통 인수로 가져야 함. 제약: 약분 뒤 분모가 0 이 아니게, 답은 기약분수."
    creative: "(1) 분자를 x⁴-16 처럼 두 번 인수분해되는 식으로(★1~2) (2) 분자에 상수 a 를 넣어 극한이 존재하도록 하는 a 를 묻게 하면 0067 골조(★2) (3) 분모를 |x+2| 로 바꾸면 좌·우극한 비교로 0041 골조(★2)."
```

```yaml
- id: RPM-CALC1-0053
  page: 13
  vendor_label: '유형 05 $\dfrac{0}{0}$ 꼴의 극한: 유리식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 에 대하여 lim_{x→1} 8(x⁴-1)/((x²-1)f(x))=2 일 때 f(1) 의 값. 5지선다.
  category: "x⁴-1=(x²-1)(x²+1) 약분 → 다항함수의 극한은 함숫값 → 방정식"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 유리식 극한 — 다항함수 f 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    약분하면 8(x²+1)/f(x) → 16/f(1)=2 → f(1)=8 → ①. 다항함수라 lim f(x)=f(1) 을 그대로 씀.
    약분 한 번과 대입. 통찰 0, 미지 다항함수라 Mₐ 3 으로 M_total 5. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "x⁴-1=(x²-1)(x²+1) 약분 → 8(x²+1)/f(x) → 16/f(1)=2 → f(1)=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 8, 극한값 2, 접근점 1 을 바꾸기. 제약: 분자가 분모의 (x²-1) 을 인수로 가져야 하고 f(1)≠0 이며 선택지가 정수."
    creative: "(1) f(1) 대신 f(x) 가 이차식이라는 조건을 추가해 f(x) 를 결정하게(★3 · 조건 부족 주의) (2) 분모를 (x-1)f(x) 로 두면 f(1)=0 이 강제되어 f(x)=(x-1)g(x) 로 쪼개는 미정계수형(★3 · I-BW) (3) 극한이 존재하지 않게 되는 f(1) 의 값을 묻는 반대 방향(★2)."
```

```yaml
- id: RPM-CALC1-0054
  page: 13
  vendor_label: '유형 05 $\dfrac{0}{0}$ 꼴의 극한: 유리식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x+4, g(x)=2x 일 때 lim_{x→-2} (f∘g)(x)/(x²-2x-8) − lim_{x→-4} (g∘f)(x)/(x²+2x-8) 의 값.
  category: "합성함수 계산 → 두 유리식 각각 인수분해·약분 → 차"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 유리식 극한 — 합성함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f∘g)(x)=2x+4=2(x+2), 분모 (x-4)(x+2) → 2/(-6)=-1/3. (g∘f)(x)=2x+8=2(x+4), 분모 (x+4)(x-2) → 2/(-6)=-1/3. 차 0.
    합성 두 번·인수분해 두 번·약분 두 번이라 Mₛ 2·Mₖ 2, 통찰 0. 벤더 중 ★2 유지. 함정은 f∘g 와 g∘f 순서 정도.
  tier: star_2
  mechanism_primary: "f∘g=2x+4, g∘f=2x+8 계산 → 각 분모 인수분해 → (x+2), (x+4) 약분 → -1/3 - (-1/3) = 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수와 접근점을 바꾸되 합성 결과가 분모의 인수와 맞아떨어져야 함. 제약: 두 극한이 같으면 답 0 이 되므로 다르게 만들려면 분모의 다른 인수 값을 조정."
    creative: "(1) f∘g 의 극한과 g∘f 의 극한을 각각 묻는 두 소문항으로 분리(★1~2) (2) g(x)=x² 처럼 이차로 두면 합성이 사차식이 되어 인수분해 부담 상승(★2~3) (3) f 를 그래프로 주고 (f∘g) 의 한쪽 극한을 물으면 안쪽 함수의 방향 판정이 필요(★3 · I-EQV)."
```

```yaml
- id: RPM-CALC1-0055
  page: 13
  vendor_label: '유형 05 $\dfrac{0}{0}$ 꼴의 극한: 유리식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→0+} x/(x+|x|)=a, lim_{x→-1+} (x²+x)/|x²-1|=b 일 때 ab 의 값.
  category: "방향에 따라 절댓값 부호 결정 → 인수분해 약분 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 절댓값 유리식의 좌극한·우극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→0+ 에서 |x|=x 라 x/(2x)=1/2=a. x→-1+ 에서 x²<1 이라 |x²-1|=-(x-1)(x+1), 분자 x(x+1) → -x/(x-1) → -(-1)/(-2)=-1/2=b. ab=-1/4.
    두 절댓값의 부호 판정과 약분. 절댓값 분할은 표준 분기라 통찰 0. 부호 함정(T-부호)이 있어 벤더 중 ★2 유지. -1+ 에서 x²-1 의 부호를 놓치기 쉬움.
  tier: star_2
  mechanism_primary: "x→0+: |x|=x → 1/2 · x→-1+: x²<1 → |x²-1|=1-x² → 인수분해 약분 → -1/2 → 곱 -1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점과 방향(0+, -1+ 를 0-, 1-, -1- 등)을 바꾸기. 제약: 접근점에서 분자·분모가 모두 0 이 되어야 0/0 꼴이며, 방향에 따라 절댓값 안의 부호가 확정되어야 함. 답은 기약분수."
    creative: "(1) 양쪽 극한을 모두 물어 극한 존재 여부를 판정하게(★2) (2) |x²-1| 대신 |x|(x²-1) 처럼 절댓값과 인수분해가 겹치게(★2~3) (3) 절댓값 안에 상수 a 를 넣어 극한이 존재하도록 하는 a 로 바꾸면 좌·우 일치 조건 → ★3(I-EQV)."
```

### 유형 06 $\dfrac{0}{0}$ 꼴의 극한: 무리식

```yaml
- id: RPM-CALC1-0056
  page: 13
  vendor_label: '유형 06 $\dfrac{0}{0}$ 꼴의 극한: 무리식'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→2} (√(x²+5)−3)/(x−2) 의 값. 5지선다.
  category: "분자 유리화 → (x-2) 약분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 무리식 극한 — 유리화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자에 √(x²+5)+3 을 곱하면 (x²-4)/((x-2)(√(x²+5)+3)) = (x+2)/(√(x²+5)+3) → 4/6=2/3 → ④.
    유리화 한 번과 약분. 통찰 0·M_total 3 이라 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "분자 유리화(켤레 곱) → x²-4=(x-2)(x+2) 약분 → 4/6 = 2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 c 와 근호 안 상수를 바꾸되 √(c²+k) 가 정수가 되게(k=5→ 3, k=7 은 불가). 제약: 유리화 뒤 분자가 (x-c) 인수를 가져야 하고 선택지는 기약분수."
    creative: "(1) 분모에도 근호(√(x+2)-2)를 넣어 이중 유리화(0057 골조 · ★2) (2) 근호 안 상수를 a 로 두고 극한이 존재하는 a 를 묻는 미정계수형(0071 골조 · ★2) (3) 세제곱근으로 바꾸면 a³-b³ 인수분해가 필요해 ★3(I-RT 후보)."
```

```yaml
- id: RPM-CALC1-0057
  page: 13
  vendor_label: '유형 06 $\dfrac{0}{0}$ 꼴의 극한: 무리식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→0} (√(1−x)−√(1+x))/(√(4+x)−√(4−x)) 의 값.
  category: "분자·분모 각각 유리화 → x 약분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 무리식 극한 — 분자·분모 이중 유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 유리화로 -2x/(√(1-x)+√(1+x)), 분모 유리화로 2x/(√(4+x)+√(4-x)). 나누면 -(√(4+x)+√(4-x))/(√(1-x)+√(1+x)) → -4/2=-2.
    유리화 두 번과 정리라 Mₛ 2·Mₖ 2. 통찰 0. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모 각각 켤레 곱 → -2x 와 2x → 약분 → -(2+2)/(1+1) = -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(1, 4)를 다른 완전제곱수(9, 16)로, ±x 의 계수를 바꾸기. 제약: 유리화 뒤 분자·분모가 모두 x 의 배수가 되도록 대칭 꼴(√(a+kx)-√(a-kx))을 유지하고 답이 정수 또는 간단한 분수."
    creative: "(1) 분모를 x 로 두어 단일 유리화로 축소(★1) (2) 근호 안을 √(1+x)-√(1-x²) 처럼 비대칭으로 두면 인수분해가 추가(★2~3) (3) 분모를 x 대신 √(a+x)-√a 로 두고 a 를 미정계수로 하면 0072 골조(★3)."
```

```yaml
- id: RPM-CALC1-0058
  page: 13
  vendor_label: '유형 06 $\dfrac{0}{0}$ 꼴의 극한: 무리식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→1} f(x)=3 일 때 lim_{x→1} f(x)(x−1)/(√x−1) 의 값. 5지선다.
  category: "(x-1)/(√x-1) 유리화 → 극한의 성질로 곱 분리"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 무리식 극한 — 극한값 주어진 f 와 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-1)/(√x-1) = √x+1 → 2. 극한의 성질로 f 의 극한 3 과 곱해 6 → ②.
    유리화(또는 x-1=(√x-1)(√x+1)) 한 번과 곱의 성질. 통찰 0, 미지 함수라 M_total 5. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "(x-1)/(√x-1)=√x+1 → 2 · 극한의 성질로 f→3 과 곱 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 극한값 3, 접근점 1(→4 면 √x-2), 근호 형태를 바꾸기. 제약: 무리식 부분의 극한이 정수가 되게(√c+√c 꼴) 하고 선택지가 정수."
    creative: "(1) 조건을 lim f(x)/(x-1)=3 으로 주면 f 자체가 0 으로 가는 구조라 곱 분리 방식이 달라짐(★2~3) (2) √x-1 을 분자로 옮겨 f(x)(√x-1)/(x-1) 로 두면 답이 3/2 (★2) (3) f 를 그래프로 주면 좌·우극한 판정이 추가(★3)."
```

### 유형 07 $\dfrac{\infty}{\infty}$ 꼴의 극한

```yaml
- id: RPM-CALC1-0059
  page: 14
  vendor_label: '유형 07 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→∞} (√(x²+3x)+x)/(√(x²−1)−√(3+x)) 의 값. 5지선다.
  category: "분자·분모를 x 로 나눔 → 근호 안은 x² 으로 → 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 무리식 극한 — 최고차항으로 나누기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 로 나누면 (√(1+3/x)+1)/(√(1-1/x²)-√(3/x²+1/x)) → (1+1)/(1-0)=2 → ④.
    최고차항으로 나누기 한 번. 통찰 0·M_total 3 이라 대표문제 출발점 ★2 에서 −1 → ★1. √(3+x) 를 x 로 나눌 때 x² 으로 넣는 처리만 주의.
  tier: star_1
  mechanism_primary: "분자·분모 ÷ x (근호 안은 ÷ x²) → √(1+0)+1 / (√(1-0)-0) → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 계수(3, -1, 3+x)와 근호 밖 x 의 계수를 바꾸기. 제약: 분자·분모의 최고차 계수 합이 답이 되므로 분모의 합이 0 이 되지 않게(√x²-x 처럼 되면 ∞-∞ 로 유형이 바뀜)."
    creative: "(1) x→-∞ 로 바꾸면 √x²=-x 부호 처리(0061 골조 · ★2) (2) 분모를 √(x²-1)-x 로 두면 분모가 0 으로 가 유리화가 추가되며 ★3 (3) 계수 a 를 넣어 극한값이 주어질 때 a 를 묻는 미정계수형(★2)."
```

```yaml
- id: RPM-CALC1-0060
  page: 14
  vendor_label: '유형 07 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x(x+1) 일 때 lim_{x→∞} (f(x+1)−f(x))/(x−1) 의 값.
  category: "f(x+1)-f(x) 전개·정리 → 차수 비교"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한 — f(x+1)−f(x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x+1)-f(x)=(x+1)(x+2)-x(x+1)=2(x+1). 2(x+1)/(x-1) → 2.
    전개 한 번과 최고차 계수 비. 통찰 0·M_total 3. 벤더 중하 → ★1.
  tier: star_1
  mechanism_primary: "f(x+1)-f(x)=(x+1)(x+2-x)=2(x+1) → 2(x+1)/(x-1) → 최고차 계수 비 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 이차식 계수와 분모 일차식을 바꾸기. 제약: f(x+1)-f(x) 는 f 가 이차이면 일차식이므로 분모도 일차여야 유한한 0 아닌 극한. f 를 삼차로 두면 분모를 x² 으로."
    creative: "(1) 분모를 x² 으로 두면 답 0, x⁰ 으로 두면 발산 — 차수 비교 판정형(★1~2) (2) f(2x)-f(x) 로 바꾸면 이차항이 남아 분모를 x² 으로(★2) (3) f 를 미지 이차함수로 두고 극한값 조건으로 최고차 계수를 묻게 하면 미정계수형(★2)."
```

```yaml
- id: RPM-CALC1-0061
  page: 14
  vendor_label: '유형 07 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→−∞} (5−3x²)/(x²−2x+1) + lim_{x→−∞} (√(x²+1)−2)/x 의 값.
  category: "유리식은 최고차 계수 비 · 무리식은 x=-t 치환(√x²=-x) → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→−∞ 극한 — 부호 처리(√x² = −x)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 극한은 최고차 계수 비 -3. 둘째는 x=-t(t→∞) 로 (√(t²+1)-2)/(-t) → -1. 합 -4.
    두 극한 계산과 x→-∞ 부호 처리. 통찰 0 이지만 √x²=-x 함정(T-부호)이 핵심이라 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "유리식 → 최고차 계수 비 -3 · 무리식 → x=-t 치환으로 √(t²+1)/(-t) → -1 → 합 -4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "유리식 계수(최고차 계수 비가 답의 일부)와 무리식 근호 안 상수를 바꾸기. 제약: 두 극한 모두 x→-∞ 로 두어 부호 처리를 유지하고 합이 정수가 되게."
    creative: "(1) 둘째 극한만 남기고 x→∞ 와 x→-∞ 를 함께 물어 부호 대비(★2) (2) 무리식을 (√(x²+1)+x) 로 바꾸면 ∞-∞ 꼴로 유리화가 필요해 0063 골조(★2) (3) 분모를 |x| 로 두면 방향별 부호 판정이 이중(★3)."
```

```yaml
- id: RPM-CALC1-0062
  page: 14
  vendor_label: '유형 07 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→∞} f(x)/x=3 일 때 lim_{x→∞} (3x²+4f(x))/(2x²−f(x)) 의 값. 5지선다.
  category: "x² 으로 나눔 → f/x²=(f/x)(1/x)→0 판정 → 대입"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f/x→3 을 'f 는 x 와 같은 차수' 로 해석해 f/x²=(f/x)·(1/x)→0 이 됨을 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴 — f(x)/x 극한값 이용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x² 으로 나누면 (3+4f/x²)/(2-f/x²). f/x²=(f/x)(1/x) → 3·0=0 이라 3/2 → ②.
    x 로 나누면 f/x 가 남지만 x² 항이 발산하므로 x² 으로 나누고 f/x² 을 0 으로 판정하는 해석이 통찰 한 단계(EQV d1). f/x² 을 3 으로 착각하는 차수 함정(T-단위). 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모 ÷ x² → f/x²=(f/x)(1/x)→0 → 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 과 계수(3,4,2,-1)를 바꾸기. 제약: 답은 x² 계수의 비(3/2)이며 f 의 계수는 답에 영향이 없음 — 이 '무관함' 이 함정의 핵심이라 유지."
    creative: "(1) 조건을 lim f(x)/x²=3 으로 바꾸면 f 항이 답에 기여(★2) (2) 분모를 2x-f(x) 로 두면 x 로 나눠 f/x 가 살아남아 -1 처럼 답이 바뀜(★2) (3) 조건과 식의 차수를 엇갈리게 두 개 주면(f/x→3, g/x²→1) 차수 판정이 두 겹(★3)."
```

### 유형 08 $\infty-\infty$, $\infty\times 0$ 꼴의 극한

```yaml
- id: RPM-CALC1-0063
  page: 14
  vendor_label: '유형 08 $\infty-\infty$, $\infty\times 0$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→−∞} (√(x²+2x+3)+x) 의 값. 5지선다.
  category: "x=-t 치환(부호) → 유리화 → 최고차 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 무리식 극한 — 유리화(x→−∞)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-t 로 √(t²-2t+3)-t = (-2t+3)/(√(t²-2t+3)+t) → -2/2=-1 → ③.
    치환·유리화·나누기 세 단계에 x→-∞ 부호 함정(T-부호). 통찰 0 이나 M_total 5·함정 있음이라 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=-t(t→∞) → √(t²-2t+3)-t 유리화 → (-2t+3)/(√+t) → -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차 계수 2 와 상수 3 을 바꾸기(답은 일차 계수의 -1/2 배). 제약: x→-∞ 와 +x 조합을 유지해야 ∞-∞ 가 되고(x→∞ 면 발산), 선택지가 정수."
    creative: "(1) x→∞ 에서 √(x²+2x+3)-x 로 바꾸면 부호 처리 없이 같은 골조(★1~2) (2) 계수 a 를 넣어 극한값이 주어질 때 a 를 묻는 0066 골조(★2) (3) √(x²+2x+3)+√(x²-2x) 처럼 두 근호로 두면 유리화 뒤 다시 ∞/∞ 처리(★3)."
```

```yaml
- id: RPM-CALC1-0064
  page: 14
  vendor_label: '유형 08 $\infty-\infty$, $\infty\times 0$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→1} 1/(x−1) · {1/(x+1)² − 1/4} 의 값.
  category: "중괄호 통분 → 분자 인수분해(제곱 차) → (x-1) 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴 극한 — 통분 후 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중괄호를 통분하면 (4-(x+1)²)/(4(x+1)²) = (1-x)(x+3)/(4(x+1)²). 1/(x-1) 을 곱하면 -(x+3)/(4(x+1)²) → -4/16=-1/4.
    통분·제곱 차 인수분해·부호 정리로 Mₛ 2·Mₖ 2, 1-x=-(x-1) 부호 함정(T-부호). 통찰 0. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "중괄호 통분 → 4-(x+1)²=(1-x)(x+3) → (x-1) 과 약분(부호 -) → -4/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 c 와 중괄호 안 상수를 바꾸되 상수가 1/(c+1)² 와 같아야 0 이 됨. 제약: 통분 뒤 분자가 (x-c) 인수를 가지도록 상수를 맞추고 답은 기약분수."
    creative: "(1) 중괄호 안을 1/(x+1) - 1/2 로 낮추면 인수분해 없이 통분만(★1) (2) 1/(x-1) 대신 1/(x²-1) 로 두면 약분 뒤 (x+1) 이 하나 더 남음(★2) (3) 중괄호 안을 √ 꼴로 바꾸면 통분 뒤 유리화까지(★3)."
```

```yaml
- id: RPM-CALC1-0065
  page: 14
  vendor_label: '유형 08 $\infty-\infty$, $\infty\times 0$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→−∞} x²(1 + x/√(x²+2)) 의 값.
  category: "x=-t 치환 → 괄호 통분 → 유리화 → 차수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴 극한 — 통분 후 유리화(x→−∞)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-t 로 t²(1-t/√(t²+2)) = t²(√(t²+2)-t)/√(t²+2) = 2t²/((√(t²+2)+t)√(t²+2)) → 2/(2·1)=1.
    부호 치환·통분·유리화·차수 비교 네 단계라 Mₛ 2·Mₖ 2, x→-∞ 부호 함정(T-부호). 이 유형의 표준 절차라 통찰 0. 벤더 중 ★2 유지(M_total 6 으로 ★3 에 가까운 노동량).
  tier: star_2
  mechanism_primary: "x=-t → 1-t/√(t²+2) 통분 → 유리화로 2/(√(t²+2)(√(t²+2)+t)) → t² 곱해 차수 비교 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 2 를 바꾸기(답은 상수의 1/2). 제약: 바깥 x² 의 차수가 유리화 뒤 남는 분모 차수(2)와 같아야 유한한 극한. x→-∞ 와 +x/√ 조합을 유지해야 0 으로 가는 괄호가 됨."
    creative: "(1) x→∞ 에서 x²(1 - x/√(x²+2)) 로 바꾸면 부호 처리 없이 같은 골조(★2) (2) 바깥을 x 로 낮추면 답 0, x³ 이면 발산 — 차수 판정형(★2) (3) 괄호 안을 1+x/√(x²+ax) 로 두고 극한값 조건으로 a 를 묻게 하면 미정계수형(★3)."
```

```yaml
- id: RPM-CALC1-0066
  page: 14
  vendor_label: '유형 08 $\infty-\infty$, $\infty\times 0$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→∞} (√(x²+ax) − √(x²−ax)) = 3 일 때 상수 a 의 값.
  category: "유리화 → 2ax/(√+√) → x 로 나눔 → a=3"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한 — 미정계수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    유리화하면 2ax/(√(x²+ax)+√(x²-ax)) → 2a/2=a. a=3.
    유리화 한 번과 나누기, 매개변수 하나. 통찰 0·M_total 4 이고 대표문제(0063)보다 부호 처리가 없어 쉬움 → 벤더 중에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "유리화 → 2ax/(√(x²+ax)+√(x²-ax)) → ÷x → a = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 과 근호 안 계수 비(a, -a → a, -2a 면 극한 3a/2)를 바꾸기. 제약: 두 근호의 x² 계수가 같아야 ∞-∞ 로 유한하고, 답이 정수가 되게 극한값을 맞춤."
    creative: "(1) x→-∞ 로 바꾸면 부호 처리로 답 -3(★2) (2) √(x²+ax)-x 꼴로 두고 극한값 2 를 주면 a=4 — 같은 골조(★1) (3) √(x²+ax+b)-(x+c)=0 처럼 상수 두 개로 두면 유리화 뒤 두 차수 조건이 생겨 ★3(0072 계열)."
```

### 유형 09 미정계수의 결정

```yaml
- id: RPM-CALC1-0067
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→1} (ax³+x+b)/(x−1)=7 일 때 상수 a, b 에 대하여 ab 의 값. 5지선다.
  category: "분모→0 이므로 분자→0 → b 소거 → 인수분해 → 극한값=7"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 0/0 꼴 다항식(분자→0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 존재하고 분모→0 이므로 분자→0: a+1+b=0. b=-a-1 을 넣으면 a(x³-1)+(x-1)=(x-1)(a(x²+x+1)+1) → 3a+1=7 → a=2, b=-3, ab=-6 → ①.
    '분모→0 이면 분자→0' 은 이 유형의 표준 규칙이라 통찰 0(단순 미정계수 대입은 BW 아님). 소거·인수분해·연립으로 M_total 6. 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 조건 a+1+b=0 → b 소거 → (x-1) 인수분해 → 3a+1=7 → a=2, b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 1, 극한값 7, 분자 차수(삼차→이차)를 바꾸기. 제약: 분자가 (x-접근점) 을 인수로 갖도록 b 가 결정되고 남는 인수의 값이 극한값과 맞아 a 가 정수가 되게."
    creative: "(1) 분모를 x²-1 로 두면 약분 뒤 (x+1) 이 남아 극한값 식이 달라짐(★2) (2) 극한값 조건 대신 '극한이 존재한다' 만 주고 가능한 (a,b) 관계를 묻게(★2) (3) 분모를 (x-1)² 으로 두면 분자가 (x-1)² 을 인수로 가져야 해 조건 두 개 → ★3(I-EQV)."
```

```yaml
- id: RPM-CALC1-0068
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→−1} (x²−1)/(3x²−x−a)=b (b≠0) 일 때 상수 a, b 에 대하여 ab 의 값.
  category: "분자→0·극한≠0 이므로 분모→0 → a 결정 → 약분 → b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 분모→0 조건(극한 ≠0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자→0 이고 b≠0 이므로 분모→0: 3+1-a=0, a=4. 3x²-x-4=(3x-4)(x+1) 이라 (x-1)/(3x-4) → -2/-7=2/7=b. ab=8/7.
    분모→0 규칙(반대 방향)과 인수분해. 통찰 0 이지만 b≠0 조건을 놓치면 a 가 결정되지 않는 함정(T-범위). 벤더 중하(★1~2)에서 M_total 6 이라 ★2.
  tier: star_2
  mechanism_primary: "분자→0 & 극한≠0 → 분모→0 → a=4 → (x+1) 약분 → b=2/7 → ab=8/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 -1 과 분모 이차식 계수를 바꾸기. 제약: 분자가 접근점에서 0 이 되게 하고, a 를 정한 뒤 분모가 (x-접근점) 으로 나누어떨어지며 남는 값이 0 이 아니게. 답은 기약분수."
    creative: "(1) b≠0 조건을 빼고 '극한이 존재한다' 만 주면 a≠4 도 가능(극한 0)해 답이 여러 개 — 조건의 역할을 묻는 진위형(★3 · I-MI) (2) 분자·분모 모두에 상수를 두고 극한값을 주면 연립(★2) (3) 0070 처럼 구한 a 를 다른 극한에 쓰는 2단 구성(★2)."
```

```yaml
- id: RPM-CALC1-0069
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→−3} (√(x²−x−3)+ax)/(x+3)=b 일 때 상수 a, b 에 대하여 a+b 의 값. 5지선다.
  category: "분자→0 으로 a 결정 → 유리화 → (x+3) 약분 → b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 무리식(분자→0 + 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모→0 이므로 분자→0: √9-3a=0, a=1. (√(x²-x-3)+x)/(x+3) 을 유리화하면 (-x-3)/((x+3)(√(x²-x-3)-x)) = -1/(√(x²-x-3)-x) → -1/(3+3)=-1/6=b. a+b=5/6 → ⑤.
    분자→0 규칙·유리화·부호 정리(√-x 에서 x=-3 이라 3-(-3)) 로 M_total 7, 부호 함정(T-부호). 통찰 0. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 → a=1 → 분자 유리화 → -(x+3) 약분 → -1/(√(x²-x-3)-x) → b=-1/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 c 와 근호 안 이차식을 바꾸되 √(c²-c-3) 가 정수(여기선 3)가 되게. 제약: 유리화 뒤 분자가 (x-c) 인수를 가지도록 a 가 결정되고, √-ax 의 부호 함정이 살아 있게 c<0 유지. 선택지는 기약분수."
    creative: "(1) c>0 으로 바꾸면 부호 함정이 사라져 ★2 그대로지만 쉬워짐 (2) 분자를 √(x²-x-3)-√(ax+b) 처럼 두 근호로 두면 조건이 둘(★3) (3) b 를 주고 a 만 묻되 a 의 부호에 따라 유리화 뒤 분모 값이 달라지도록 하면 기각 검증이 생겨 ★3(I-VF 후보)."
```

```yaml
- id: RPM-CALC1-0070
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→2} (x²+x−6)/(x²−a) 가 0 이 아닌 실수일 때 lim_{x→1} (x²−1)/(x²−ax+3) 의 값. 5지선다.
  category: "분자→0·극한≠0 이므로 분모→0 → a=4 → 둘째 극한에 대입해 약분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 분모→0 조건(극한 ≠0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→2 에서 분자 0 이고 극한이 0 아닌 실수이므로 분모→0: a=4(이때 (x+3)/(x+2)→5/4 로 조건 만족). 둘째는 (x-1)(x+1)/((x-1)(x-3)) → 2/-2=-1 → ①.
    분모→0 규칙과 인수분해 두 번. 통찰 0, '0 이 아닌 실수' 조건을 해석하는 함정(T-범위). 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 & 극한≠0 → 분모→0 → a=4 → x²-4x+3=(x-1)(x-3) 약분 → -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 극한의 접근점·분자 이차식과 둘째 극한의 분모를 바꾸기. 제약: 첫 극한 분자가 접근점에서 0, a 를 정한 뒤 둘째 극한 분모가 (x-1) 로 나누어떨어져야 함. 선택지는 정수·분수."
    creative: "(1) '0 이 아닌 실수' 를 '실수' 로 바꾸면 a 가 하나로 정해지지 않음을 묻는 진위형(★3 · I-MI) (2) 첫 조건을 극한값 5/4 로 주고 a 를 묻게 단순화(★2) (3) 둘째 극한의 접근점을 a 에 의존하게(x→a/4) 두면 조건 연쇄(★3)."
```

```yaml
- id: RPM-CALC1-0071
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→2} (√(x+a)−b)/(x−2)=1/4 일 때 상수 a, b 에 대하여 a−b 의 값.
  category: "분자→0 → b=√(2+a) → 유리화 → 1/(2b)=1/4 → b, a"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 무리식(분자→0 + 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모→0 이므로 √(2+a)=b, 즉 a=b²-2. 유리화하면 (x+a-b²)/((x-2)(√(x+a)+b)) = 1/(√(x+a)+b) → 1/(2b)=1/4, b=2, a=2. a-b=0.
    분자→0 규칙·유리화·연립. 통찰 0, M_total 5. b=√(2+a)≥0 이라 부호 분기 없음. 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 → a=b²-2 → 유리화로 (x-2) 약분 → 1/(2b)=1/4 → b=2, a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 2 와 극한값 1/4 을 바꾸기(b=1/(2·극한값), a=b²-접근점). 제약: b 가 양의 정수가 되도록 극한값을 1/(2n) 꼴로, a=b²-c 가 정수."
    creative: "(1) 근호를 분모로 옮겨 (x-2)/(√(x+a)-b) 로 두면 극한값이 2b 로 바뀜(★2) (2) 극한값을 주지 않고 '존재한다' 만 주면 a, b 관계식(★2) (3) √(x+a)-b 를 √(x+a)-√(x+b) 로 두면 분모→0 이 자동이 아니어서 ∞/∞ 아닌 0/0 판정부터(★3)."
```

```yaml
- id: RPM-CALC1-0072
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{x→0} (√(x²+ax+b)−a)/(√(a+x)−√(a−x))=1 (a>0, b>0) 일 때 상수 a, b 에 대하여 a+b 의 값.
  category: "분모→0 이므로 분자→0 → b=a² → 분자·분모 이중 유리화 → √a/2=1 → a, b"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 이중 유리화 + 두 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모→0(√a-√a) 이므로 분자→0: √b=a, b=a². 분자 유리화로 x(x+a)/(√(x²+ax+a²)+a), 분모 유리화로 2x/(√(a+x)+√(a-x)). 나누면 (x+a)(√(a+x)+√(a-x))/(2(√(x²+ax+a²)+a)) → a·2√a/(4a)=√a/2=1 → a=4, b=16, a+b=20.
    유리화 두 번·두 상수·근호 정리로 7단계 이상·다단계 대수라 M_total 9(Mₛ 3·Mₖ 3), a>0 조건이 √a 를 확정(T-범위). 통찰은 없지만 노동량이 이 범위 최대라 벤더 중 ★2 에서 +1 → ★3. [분류 이슈] 절차형 +1 은 M_total 기준 판정이라 카탈로그 생기면 재확인.
  tier: star_3
  mechanism_primary: "분모→0 ⇒ 분자→0 → b=a² → 분자·분모 각각 유리화 → x 약분 → √a/2=1 → a=4, b=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 1 을 바꾸면 √a/2=k 로 a=4k², b=16k⁴ — 정수가 되게 k 는 정수 또는 1/2. 제약: 분자 근호 안 상수항이 a² 이 되도록 b 가 결정되는 구조와 a>0, b>0 조건을 유지."
    creative: "(1) 분모를 x 로 바꿔 단일 유리화로 낮추면 ★2 (2) 분자를 √(x²+ax+b)-c 로 세 상수를 두고 극한값 조건 하나만 주면 부정형 — '추가로 필요한 조건' 을 묻는 개념형(★3) (3) a 의 부호 조건을 빼면 √a 정의로 a>0 이 강제됨을 스스로 찾게 하는 검증형(★3 · I-VF 후보)."
```

```yaml
- id: RPM-CALC1-0073
  page: 15
  vendor_label: "유형 09 미정계수의 결정"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=(ax²+bx+c)/(x²+x−2) 가 lim_{x→∞} f(x)=1, lim_{x→1} f(x)=−1 을 만족할 때 a−b+c 의 값. 서술형.
  category: "∞/∞ 로 a=1 → x→1 에서 분모→0 이므로 분자→0 → 인수분해 → 극한값 -1 로 b, c"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — ∞/∞ 와 0/0 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x→∞ 극한 1 이므로 최고차 계수 비 a=1. x→1 에서 분모 (x-1)(x+2)→0 이므로 분자→0: 1+b+c=0, c=-1-b. 분자 x²+bx-1-b=(x-1)(x+1+b) 라 (2+b)/3=-1, b=-5, c=4. a-b+c=10.
    두 조건을 차례로 쓰는 절차(∞/∞ 규칙 + 분자→0 규칙)라 통찰 0, M_total 6. 서술형은 근거 서술만 추가. 벤더 상중 ★3 을 유지하되 절차형이라 ★2 에 가까움(1단 차이라 이슈 아님).
  tier: star_3
  mechanism_primary: "x→∞ 극한 1 → a=1 → x→1 분자→0 → c=-1-b → (x-1) 인수분해 → (2+b)/3=-1 → b=-5, c=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값(1, -1)과 분모 이차식을 바꾸기. 제약: 분모가 인수분해되어 접근점이 그 근 중 하나여야 하고, 분자→0 뒤 남는 인수의 값이 극한값과 맞아 b, c 가 정수."
    creative: "(1) x→1 대신 x→-2(분모의 다른 근)로 바꾸면 같은 골조(★3) (2) 조건을 lim_{x→1} f(x)=-1 과 lim_{x→-2} f(x) 존재 로 주면 분자가 분모와 같은 두 인수를 가져 f 가 상수함수 꼴로 결정(★3 · I-EQV) (3) f(x) 의 점근선 y=1 을 그래프로 주고 극한 조건을 읽게 하면 표현 전환(★3 · I-RT)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 8 · ★2 22 · ★3 5 · ★4 0 · ★5 0
- 통찰형 5(0042 EQV · 0045 EQV · 0046 EQV · 0051 BW+MI · 0062 EQV) · 절차형 30 · premium 0
- type_hint 상위: 「미정계수의 결정 — …」 7 · 「∞/∞·∞−∞·∞×0 꼴 극한」 8(∞/∞ 4 · ∞−∞/∞×0 4) · 「0/0 꼴 극한(유리식 4 · 무리식 3)」 7 · 「극한의 성질 — …」 5 · 「좌극한·우극한 읽기(그래프·구간·절댓값·가우스)」 4 · 「치환을 이용한 극한값」 3
- 그림: 3문(`crop:fig-0039.png` · `crop:fig-0045.png` · `crop:fig-0050.png`)
- 벤더 신호와 라벨 차이: 2단 이상 없음. 1단 차이는 −1(0039·0052·0056·0059 대표문제 → ★1, 0066 중 → ★1)과 +1(0072 중 → ★3)뿐.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0072 | 벤더 「중」이나 통찰 없이 M_total 9(이중 유리화·두 상수). 절차형 +1 을 M_total 기준으로 적용해 ★3 — 카탈로그 base ★ 가 생기면 재확인 | ★2 / ★3 |
| RPM-CALC1-0051 | 통찰 2개(BW·MI)라 +1 후보이나 두 반례 모두 교과서 표준이라 미적용. 카탈로그에서 「극한 성질 진위」 유형의 base ★ 를 3 으로 둘지 결정 필요 | ★3 / ★4 |
| RPM-CALC1-0066 | 벤더 「중」이나 부호 처리 없는 단일 유리화·M_total 4 라 ★1. 같은 구역 대표문제 0063(★2)보다 쉬움 | ★1 / ★2 |
| RPM-CALC1-0050 | 두 그래프가 g=-f 대칭이라 SYM 지름길이 있으나 필수가 아니어서 통찰로 세지 않음(절차형 ★2). 변형에서 대칭을 깨면 난이도 상승 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「미정계수의 결정」 7문이 세 골조(분자→0 다항식 · 분자→0 무리식+유리화 · 분모→0(극한≠0))로 나뉜다. 카탈로그에서는 「분자→0」과 「분모→0(극한≠0)」을 별도 유형으로 세우는 편이 함정(0068·0070 의 조건 해석)을 반영하기 좋다.
- 「0/0 꼴 유리식」과 「0/0 꼴 무리식」은 RPM 이 구역을 나누지만 골조(공통 인수 만들기 → 약분)는 같아 base ★1 하나로 통합하고 무리식은 M 만 +1 로 처리해도 된다. 이중 유리화(0057·0072)는 M 상승 신호이지 유형 분기가 아니다.
- 「∞/∞·∞−∞·∞×0」 세 꼴은 하나의 base ★1~2 유형 안에서 x→−∞ 부호 처리(0061·0063·0065)를 T-부호 함정으로 다루면 된다. 부호 처리 유무가 이 범위에서 ★1 과 ★2 를 가르는 가장 뚜렷한 변수.
- 따로 세워야 할 유형: 「극한 성질의 진위(반례 구성)」(0051 · 통찰형 · base ★3), 「치환에서 접근 방향 반전」(0045 · 그래프 + 방향 · base ★3), 「가우스 기호 극한」(0042 · base ★3). 「극한의 성질 — 수렴식 치환(0046)」과 「f(x)/x 꼴 이용(0048·0062)」은 하나로 묶되 발산 함수로 나누기·차수 판정을 depth 로 구분.
- 「그래프에서 극한 읽기(0039·0050)」는 교과서 구역과 겹치므로 base ★1 로 두고 두 그래프의 합·곱은 M 상승으로만 처리.
