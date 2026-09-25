---
name: mechanism-데이터-GN-GEO-16
description: 개념원리 기하 16 선분의 내분점(1/1 · 127~130쪽 · 18문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 16 선분의 내분점
  unit_code: GEO-16
  part: "1/1"
  extract_range: "127~130쪽 · 127-e7~130-261"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 16 선분의 내분점 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 16단원 「선분의 내분점」 127~130쪽의 전 18문항(`127-e7`~`130-261`)을 다룬다. 전사본의 구역은 넷이다 — 「필수·발전 예제」 12문(필수 예제 3 + 각 예제를 바로 확인하는 확인체크 9), 「연습문제 STEP 1」 3문, 「연습문제 STEP 2」 2문, 「연습문제 실력 UP」 1문. 벤더 난이도 신호는 구역과 예제 태그이므로 「필수」는 ★2, 「확인체크」는 ★1, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 확인체크는 실제로 두 층으로 갈린다 — 예제의 공식을 한 줄로 되풀이하는 것(★1)과 공식 둘 이상을 사슬로 엮거나 조건 해석이 한 번 더 들어가는 것(★2)이다. 이 갈림을 rationale 에 매번 적어 두었다.

이 단원의 골조는 사실상 세 공식(공간의 내분점·중점·무게중심)의 성분별 적용 하나이고, 변별은 **조건을 좌표 성분의 등식으로 옮기는 단계**에서 생긴다. 「`yz`평면 위」→ `x=0`, 「`x`축 위」→ `y=z=0`, 「직선 BC 가 `yz`평면에 평행」→ `x` 좌표가 같다, 「평행사변형 ABCD」→ 두 대각선의 중점이 일치, 「무게중심」→ 중선을 `2:1` 로 내분 — 통찰 라벨이 붙은 11문은 거의 전부 이 I-EQV 계열이고, 예외가 세 변의 내분점이 이루는 삼각형의 무게중심이 원래 삼각형과 같음을 쓰는 `129-255`(I-SYM)와 정육면체에 좌표를 도입하는 `130-261`(I-RT + I-SYM)이다. 그래서 이 파일의 주 용도인 숫자 변형·창의 변형에서는 「좌표·내분비 수치」와 「조건 문장(평면·축·평행·대칭)」을 서로 독립된 변형 손잡이로 다루는 편이 낫고, 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 기하 과목은 유형 카탈로그가 없으므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명 후보만 적어 둔다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-127-e7
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 공간의 세 점 A, B, C 가 주어졌을 때 선분 AB 를 2:1 로 내분하는 점 P 의 좌표,
    선분 BC 를 1:3 으로 내분하는 점 Q 의 좌표, 그리고 선분 PQ 의 중점의 좌표를 구하는 문항.
  category: "공간 내분점 공식 성분별 적용 → 중점 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간에서 선분의 내분점과 중점의 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식을 x·y·z 성분마다 그대로 쓰고, 마지막에 중점 공식을 한 번 더 쓰는 3단 절차.
    조건 해석이 전혀 없고 내분비도 문제에 숫자로 주어져 있다. 통찰 0·M_total 6 이라
    감점 조건(M_total ≤ 5)에 걸리지 않으므로 필수 예제 출발점 ★2 를 유지했다.
    이 단원 전체 골조의 원형 문항이라 변형의 기준점으로 쓰기 좋다.
  tier: star_2
  mechanism_primary: "AB 를 2:1 내분 → P · BC 를 1:3 내분 → Q · 두 점의 중점 공식 → PQ 의 중점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(3,\,3,\,1)$ ⑵ $(3,\,4,\,1)$ ⑶ $\left(3,\,\dfrac{7}{2},\,1\right)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/127-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 두 내분비(2:1, 1:3)를 자유롭게 바꿀 수 있다. 제약: ⑶ 의 중점이 지나치게 지저분해지지 않도록 P·Q 의 각 성분 합이 짝수이거나 분모가 2 로 끝나게 맞춘다. 내분비의 합(m+n)이 좌표 차의 약수이면 P·Q 가 정수점이 된다. AB 를 m:n 으로 쓰는 방향(A 쪽이 m)은 고정."
    creative: "(1) ⑶ 을 「PQ 를 2:1 로 내분하는 점」으로 바꾸면 ★2 유지 (2) 중점 대신 삼각형 APQ 의 무게중심을 묻기(★2, 129-e9 골조와 결합) (3) P 의 좌표를 주고 B 를 역산하게 하면 I-BW 가 붙어 ★3 (4) 「점 Q 가 어떤 좌표평면 위에 있는가」를 덧붙이면 조건 해석이 생겨 ★3."
```

```yaml
- id: GN-GEO-127-247
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공간의 세 점 A, B, C 에서 선분 AB 를 3:1 로 내분하는 점 P, 선분 BC 를 2:3 으로 내분하는
    점 Q 를 잡을 때 선분 PQ 의 길이를 구하는 문항.
  category: "내분점 두 번 → 공간 두 점 사이의 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점의 좌표를 구한 뒤 두 점 사이의 거리 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제와 같은 내분점 계산에 공간 거리 공식이 한 단계 더 붙는다. 조건 해석은 없지만
    공식 세 개를 사슬로 엮고 제곱합 계산까지 가므로 확인체크 출발점 ★1 에서 한 단 올려 ★2.
    같은 구역의 한 줄짜리 확인체크(128-250 · 129-253)와 구분되는 층이다.
  tier: star_2
  mechanism_primary: "AB 3:1 내분 → P · BC 2:3 내분 → Q · 공간 거리 공식 → 선분 PQ 의 길이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/127-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 두 내분비를 바꿀 수 있다. 제약: 답이 무리수로 지저분해지지 않도록 P·Q 의 성분 차가 피타고라스 수 조합(1,2,2)·(2,3,6)·(1,4,8) 이 되게 역설계한다. 내분비의 합이 좌표 차를 나누어떨어지게 하면 P·Q 가 정수점."
    creative: "(1) 길이 대신 선분 PQ 의 중점을 묻기(★2 아래) (2) 「PQ 의 길이가 3 이 되도록 하는 내분비 k:1」로 뒤집으면 역추적이 생겨 ★3 (3) 세 번째 내분점 R 을 추가해 삼각형 PQR 의 둘레를 묻기(계산만 늘어 ★2 유지 · 질 저하 주의) (4) C 를 미지수로 두고 PQ 의 길이 조건에서 C 를 찾게 하면 I-BW ★3."
```

```yaml
- id: GN-GEO-127-248
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A, B 에 대하여 선분 AB 를 k:1 로 내분하는 점이 yz평면 위에 있을 때
    양수 k 의 값을 구하는 문항.
  category: "yz평면 위 → x좌표 0 → 내분점 x성분 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「yz평면 위에 있다」를 「내분점의 x좌표가 0」이라는 방정식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "내분점이 좌표평면 위에 있을 조건으로 내분비 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌표를 구하는 문제가 아니라 조건을 성분 등식으로 옮기는 문제다. yz평면 → x=0 한 줄을
    세우면 분수방정식은 곱셈 한 번으로 끝난다. 조건 변환 통찰 1개(EQV d1)와 미지수 k 가
    들어간 표현(Mₐ=2) 때문에 확인체크 ★1 출발에서 ★2. 분모 k+1 과 k>0 이 T-범위 함정.
  tier: star_2
  mechanism_primary: "yz평면 위 → 내분점의 x좌표 = 0 → (k·1 + 1·(-2))/(k+1) = 0 → 양수 k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/127-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 x좌표 부호가 서로 달라야 양수 k 가 존재한다(같은 부호면 해 없음 또는 음수해). 제약: k = -(A의 x)/(B의 x) 가 양의 유리수, 되도록 자연수가 되게 x좌표를 고른다. y·z 좌표는 답에 영향이 없으므로 자유."
    creative: "(1) 조건 평면을 zx평면·xy평면으로 바꾸면 해당 성분만 바뀌고 ★2 유지 (2) 「x축 위에 있다」로 바꾸면 두 성분이 동시에 0 이어야 해서 미지수 하나로는 과잉조건 — B 에 문자를 하나 더 넣어야 하고 ★3 (3) 「k:1 내분점과 1:k 내분점이 모두 어떤 좌표평면 위」처럼 두 조건을 겹치면 I-CON 이 붙어 ★3 (4) 내분이 아니라 외분으로 바꾸면 부호 함정이 생겨 ★3."
```

```yaml
- id: GN-GEO-127-249
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A 는 좌표가 주어지고 B(a, b, c) 는 미지일 때, 선분 AB 를 3:2 로 내분하는 점이 zx평면 위에
    있고 선분 AB 의 중점이 y축 위에 있다는 두 조건에서 a+b+c 를 구하는 문항.
  category: "zx평면 → y=0 · y축 → x=z=0 · 내분점·중점 식 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「내분점이 zx평면 위」를 「내분점의 y좌표가 0」으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「중점이 y축 위」는 x좌표와 z좌표가 동시에 0 — 한 조건에서 두 개의 식이 나온다는 점을 학생이 스스로 세워야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "내분점·중점이 좌표평면 또는 좌표축 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건 두 개에서 식 세 개(y·x·z)를 뽑아 a, b, c 를 각각 결정하는 구조. 평면 조건은 성분 하나,
    축 조건은 성분 두 개라는 비대칭을 놓치면 식이 모자란다(T-표기·T-범위 2개). 통찰 2개라
    확인체크 ★1 출발에서 +1 하여 ★2. 계산 자체는 일차식 세 줄이라 더 올리지 않았다.
  tier: star_2
  mechanism_primary: "zx평면 → 내분점 y=0 으로 b · y축 → 중점의 x=0, z=0 으로 a, c → a+b+c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/127-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 내분비 3:2 를 바꿀 수 있다. 제약: 내분비의 합으로 나누어떨어져 b 가 정수가 되게 하고, 중점 조건이 a, c 를 정수로 주도록 A 의 x·z 좌표를 짝수로 잡는다. 평면 조건과 축 조건이 서로 다른 성분을 건드려야 식이 독립이다."
    creative: "(1) 평면·축을 다른 조합(xy평면 + x축 등)으로 바꾸면 ★2 유지 (2) 두 조건을 모두 평면 조건으로 바꾸면 식이 둘뿐이라 a+b+c 가 결정되지 않아 문항이 깨짐 — 축 조건이 골조의 핵 (3) 중점 대신 「AB 를 1:2 로 내분하는 점이 y축 위」로 바꾸면 계산만 늘고 ★2 유지 (4) a+b+c 대신 선분 AB 의 길이를 묻기(★3, 거리 공식 결합)."
```

```yaml
- id: GN-GEO-128-e8
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평행사변형 ABCD 에서 두 꼭짓점 A, B 의 좌표와 두 대각선의 교점의 좌표가 주어졌을 때
    나머지 두 꼭짓점 C, D 의 좌표를 구하는 문항.
  category: "대각선의 교점 = AC·BD 의 중점 → 중점 공식 역산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 대각선 교점(중점) 조건으로 꼭짓점 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「평행사변형의 두 대각선은 서로 다른 것을 이등분한다」는 중학 도형의 표준 성질이므로
    스키마 §2.2 의 「표준 공식 대입은 통찰로 인정하지 않는다」에 따라 절차형으로 뒀다.
    교점을 M 이라 하면 C = 2M − A, D = 2M − B 두 줄. 꼭짓점 이름 순서에서 대각선 짝을
    AC·BD 로 읽어야 하는 T-표기 함정 하나. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교점 M 은 AC·BD 의 중점 → C = 2M − A, D = 2M − B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pt{C}(2,\,7,\,-2)$, $\pt{D}(1,\,6,\,-11)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/128-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B, 교점의 좌표를 자유롭게 바꿀 수 있다. 제약: C, D 가 정수점이 되도록 교점의 각 성분을 A·B 와 같은 홀짝으로 맞춘다(2M − A 가 정수). 네 점이 한 직선 위에 오지 않게 A, B, M 이 일직선이 아니어야 한다."
    creative: "(1) 주어진 꼭짓점을 A, C(마주 보는 쌍)로 바꾸면 교점이 곧 중점이라 정보가 중복되어 문항이 깨짐 — 이웃한 두 꼭짓점을 주는 것이 골조의 핵 (2) 교점 대신 한 대각선의 길이를 주면 경우가 갈려 I-MI ★3 (3) 평행사변형을 마름모로 바꾸면 변의 길이 조건이 추가되어 ★3(128-252 골조) (4) 세 꼭짓점을 주고 네 번째를 묻되 「어느 세 점인지 지정하지 않으면」 세 가지 답이 나와 I-MI ★3."
```

```yaml
- id: GN-GEO-128-250
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행사변형 ABCD 의 세 꼭짓점 A, B, C 의 좌표가 주어졌을 때 점 D 의 좌표를 구하는 문항.
  category: "AC 의 중점 = BD 의 중점 → D = A + C − B"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 네 번째 꼭짓점 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 예제에서 제시한 대각선 중점 성질을 그대로 한 줄 적용한다. D = A + C − B 를 성분별로
    쓰면 끝이고 조건 해석·분기가 없다. 통찰 0·M_total 4(≤5)라 확인체크 출발점 ★1 에서
    감점 조건에 걸리지만 하한이므로 ★1. 이 범위에서 가장 가벼운 문항 둘 중 하나.
  tier: star_1
  mechanism_primary: "평행사변형 ABCD → AC 와 BD 의 중점 일치 → D = A + C − B"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(4,\,5,\,3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/128-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표는 거의 자유. 제약: 세 점이 한 직선 위에 있지 않아야 하고(평행사변형이 찌그러짐), D 가 정수점이 되도록 정수 좌표를 쓰면 된다. 꼭짓점 이름 순서 ABCD 는 고정 — 순서가 바뀌면 답이 달라진다."
    creative: "(1) 「사각형 ABCD 가 평행사변형」 대신 「네 점으로 평행사변형을 만들 때 가능한 D 를 모두」로 바꾸면 세 경우가 생겨 I-MI ★3 (2) D 대신 대각선 교점을 묻기(★1 유지) (3) 한 꼭짓점에 문자를 넣고 넓이·변의 길이 조건을 붙이면 ★3 (4) 평행사변형을 사다리꼴로 바꾸면 한 쌍만 평행이라 조건이 부족해져 문항이 성립하지 않음."
```

```yaml
- id: GN-GEO-128-251
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행사변형 ABCD 에서 두 꼭짓점 B, C 의 좌표와 두 대각선의 교점의 좌표가 주어졌을 때
    선분 AB 의 길이를 구하는 문항.
  category: "교점으로 A 역산(A = 2M − C) → 공간 거리 공식"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 대각선 교점으로 꼭짓점을 역산한 뒤 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 두 꼭짓점이 이웃한 B, C 이므로 A 의 짝은 C(대각선 AC)라는 것을 먼저 읽어야 한다.
    A = 2M − C 로 역산한 뒤 거리 공식 한 번. 성질 자체는 표준이라 통찰로 세지 않았지만
    대각선 짝 오인(T-표기)과 B 를 짝으로 잘못 잡는 실수(T-부호/순서)로 함정 2개.
    공식 두 개를 사슬로 엮으므로 확인체크 ★1 출발에서 ★2.
  tier: star_2
  mechanism_primary: "교점 M 은 AC 의 중점 → A = 2M − C → 거리 공식으로 선분 AB 의 길이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/128-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B, C, 교점의 좌표를 바꿀 수 있다. 제약: A = 2M − C 가 정수점이 되도록 M 과 C 의 성분 홀짝을 맞추고, |AB| 가 정수가 되도록 성분 차를 피타고라스 삼중(2,9,6 → 11 · 1,2,2 → 3 · 2,3,6 → 7)으로 역설계한다."
    creative: "(1) 묻는 것을 선분 AD 나 대각선 BD 의 길이로 바꾸면 짝을 다시 따져야 해서 ★2 유지 (2) 평행사변형의 둘레를 묻기(AB·BC 둘 다 필요 · ★2) (3) 「선분 AB 의 길이가 11 이 되도록 하는 교점의 z좌표」로 뒤집으면 이차방정식과 두 해 검증이 생겨 I-VF ★3 (4) 네 꼭짓점 중 두 개에 문자를 넣으면 ★3."
```

```yaml
- id: GN-GEO-128-252
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 A, B(a, -1, 3), C(b, 6, 3), D 로 이루어진 사각형 ABCD 가 마름모일 때 ab 의 값을
    구하는 문항(단, a < 0).
  category: "마름모 → 평행사변형 조건(b 를 a 로) + 이웃 두 변 길이 같음 → 이차방정식 → a<0 로 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「마름모」를 「대각선의 중점이 일치(평행사변형)」와 「이웃한 두 변의 길이가 같다」 두 개의 좌표 조건으로 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "마름모 조건(평행사변형 + 이웃 변 길이)으로 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    마름모라는 한 단어를 두 개의 좌표 조건으로 쪼개는 것이 관문이다. 먼저 A+C = B+D 로
    b 를 a 로 묶고, |AB| = |BC| 에서 이차방정식이 나와 두 해 중 a<0 을 고른다. 미지수 2개·
    이차방정식·부호 조건까지 있어 같은 구역의 다른 확인체크와 층이 다르다.
    [분류 이슈] 벤더 「확인체크」(★1 출발)와 판정 ★3 이 2단 어긋남 — 라벨은 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "A+C = B+D 로 b = a−1 → |AB| = |BC| 이차방정식 → a<0 로 a 결정 → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/128-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·D 의 좌표와 B·C 의 고정 성분을 바꿀 수 있다. 제약: (ⅰ) 평행사변형 조건이 x 성분 하나만 남기고 나머지 성분에서 자동으로 만족되도록 A+C 와 B+D 의 y·z 성분을 미리 맞춰야 한다 (ⅱ) |AB|² = |BC|² 이 a 에 대한 이차방정식이고 판별식이 완전제곱(여기서는 (a−1)² = 9)이 되게 고정 성분을 고른다 (ⅲ) 두 해의 부호가 갈려야 a<0 단서가 의미를 가진다."
    creative: "(1) 마름모를 직사각형으로 바꾸면 조건이 「대각선 길이가 같다」로 바뀌어 다른 이차식이 나오고 ★3 유지 (2) 정사각형으로 바꾸면 조건 둘이 동시에 붙어 과잉결정 위험 — 미지수를 셋으로 늘려야 함 (3) a<0 단서를 빼면 두 답을 모두 적어야 해서 I-MI 가 추가되어 ★4 후보 (4) ab 대신 마름모의 넓이를 묻기(대각선 곱 절반 · ★4, 거리 계산 부담 증가)."
```

```yaml
- id: GN-GEO-129-e9
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각형 ABC 의 두 꼭짓점 A, B 의 좌표와 나머지 꼭짓점 C(a, b, c), 그리고 무게중심의 좌표가
    주어졌을 때 a+b+c 의 값을 구하는 문항.
  category: "무게중심 공식 성분별 역산 → a, b, c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심 좌표 공식(역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무게중심 = 세 꼭짓점 좌표의 평균이라는 공식을 성분마다 역으로 푸는 것이 전부다.
    세 식을 더하면 a+b+c 를 한 줄로 얻을 수도 있지만 성분별로 풀어도 같은 분량이라
    전략 분기(I-SC)로 볼 정도는 아니다. 통찰 0·M_total 6 이므로 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "무게중심 각 성분 = 세 좌표의 평균 → a, b, c 각각 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/129-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 와 무게중심의 좌표를 바꿀 수 있다. 제약: 무게중심의 각 성분에 3 을 곱한 값에서 A·B 의 성분을 빼야 하므로 답을 정수로 두려면 무게중심을 정수점이나 분모 3 의 분수로 잡는다."
    creative: "(1) a+b+c 대신 점 C 의 좌표 자체를 묻기(129-253 · ★1) (2) 무게중심이 원점·좌표축 위라는 조건으로 바꾸면 조건 해석이 붙어 ★3(130-258 골조) (3) 꼭짓점 하나 대신 한 변의 중점을 주면 P+Q 를 묶는 단계가 생겨 ★3(130-260 골조) (4) 무게중심과 외심을 동시에 주면 단원을 넘는 결합(I-XU)이 되어 ★4."
```

```yaml
- id: GN-GEO-129-253
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 의 두 꼭짓점 A, B 의 좌표와 무게중심의 좌표가 주어졌을 때
    나머지 꼭짓점 C 의 좌표를 구하는 문항.
  category: "무게중심 공식 역산 → C = 3G − A − B"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무게중심에서 꼭짓점 역산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 예제의 공식을 그대로 뒤집어 C = 3G − A − B 를 성분별로 한 줄 계산한다. 조건 해석도
    분기도 없다. 통찰 0·M_total 4(≤5)로 감점 조건에 걸리므로 확인체크 출발점 ★1 유지.
    128-250 과 함께 이 범위의 최저층이며, 변형에서는 골조 확인용 워밍업으로 쓴다.
  tier: star_1
  mechanism_primary: "무게중심 공식 역산 → C = 3G − A − B"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(3,\,-2,\,-6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/129-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·무게중심의 좌표 전부 자유. 제약: C 가 정수점이 되도록 무게중심을 정수점으로 잡으면 3G 가 정수라 항상 안전하다. 세 점이 한 직선 위에 오지 않게만 확인."
    creative: "(1) C 대신 변 AB 의 중점이나 중선의 길이를 묻기(★2) (2) 무게중심 대신 「중선 AM 을 2:1 로 내분하는 점」이라는 말로 바꾸면 성질을 먼저 옮겨야 해서 ★2 (3) 무게중심이 좌표축 위라는 조건으로 바꾸면 미지수가 늘고 ★3 (4) 꼭짓점 셋 중 둘을 미지수로 두면 조건이 모자라 문항이 성립하지 않음 — 미지수는 한 점까지."
```

```yaml
- id: GN-GEO-129-254
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 P(1, 2, 3) 을 xy평면, yz평면, zx평면에 대하여 대칭이동한 점을 각각 A, B, C 라 할 때
    삼각형 ABC 의 무게중심의 좌표를 구하는 문항.
  category: "좌표평면 대칭 → 해당 성분 부호 반전 → 세 점의 평균"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「xy평면에 대하여 대칭」을 「z좌표의 부호만 바꾼다」로 옮김 — 세 평면마다 바뀌는 성분이 다르다는 대응을 세워야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면에 대한 대칭점 세 개가 이루는 삼각형의 무게중심"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 무게중심 공식 한 줄이지만, 그 앞에서 세 대칭점을 정확히 만들어야 한다.
    xy평면 대칭이 z 를, yz평면 대칭이 x 를, zx평면 대칭이 y 를 뒤집는다는 대응이 관문이고
    여기서 성분을 엇갈리게 짚는 것이 대표 오답(T-표기·T-부호 2개). 조건 변환 통찰 1개로
    확인체크 ★1 출발에서 ★2.
  mechanism_primary: "세 평면 대칭 → A, B, C 의 부호 반전 성분 결정 → 무게중심 공식으로 평균"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\left(\dfrac{1}{3},\,\dfrac{2}{3},\,1\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/129-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표만 바꾸면 된다(무게중심은 항상 P 의 각 성분에 1/3 을 곱한 점이 된다 — 세 대칭점의 합에서 각 성분이 한 번씩만 부호가 뒤집히기 때문). 제약: 답이 정수가 되게 하려면 P 의 성분을 3 의 배수로, 분수로 두려면 아무 정수나."
    creative: "(1) 대칭 대상을 세 좌표축(x축·y축·z축)으로 바꾸면 성분 두 개씩 뒤집혀 무게중심이 −P/3 이 되고 ★2 유지 (2) 원점 대칭을 하나 섞으면 대응 표가 길어져 ★3 (3) 「무게중심이 주어졌을 때 P 를 구하라」로 뒤집으면 I-BW ★3 (4) 삼각형 ABC 의 넓이나 무게중심과 P 사이의 거리를 묻기(★3, 계산 부담 증가)."
```

```yaml
- id: GN-GEO-129-255
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A, B, C 에 대하여 세 선분 AB, BC, CA 를 각각 2:1 로 내분하는 점을 P, Q, R 라 할 때
    삼각형 PQR 의 무게중심의 좌표를 구하는 문항.
  category: "세 내분점의 합 = 세 꼭짓점의 합 → 무게중심이 그대로 보존"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 변을 같은 비로 돌려가며 내분하면 P+Q+R 에서 A, B, C 의 계수가 순환 대칭으로 모여 합이 A+B+C 와 같아진다 — 세 점을 일일이 구하지 않고 무게중심이 보존됨을 바로 쓸 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 변의 내분점이 이루는 삼각형의 무게중심(원래 삼각형과 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 세 개를 성분별로 모두 계산해도 풀리지만(그 경로가 M_total 6), 순환 대칭을 보면
    P+Q+R = A+B+C 라 계산 없이 답이 나온다. 이 단원에서 유일하게 「계산을 건너뛰는 착안」이
    보상받는 문항이라 변형 원본으로 값이 높다. 확인체크 ★1 출발 + 통찰 1개(SYM d2) → ★2.
    대칭 활용 유형이라 대상층은 중위권 회피 목록에 걸려 중상위권으로 둔다.
  tier: star_2
  mechanism_primary: "세 변을 같은 비로 내분 → P+Q+R = A+B+C → 삼각형 PQR 의 무게중심 = 삼각형 ABC 의 무게중심"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(2,\,0,\,-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/129-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 공통 내분비(2:1)를 바꿀 수 있다. 제약: **세 변 모두 같은 비·같은 방향(AB, BC, CA 순환)** 이어야 무게중심 보존이 성립한다. 비가 하나라도 다르면 골조가 깨지고 그냥 계산 문제가 된다. 세 좌표의 성분 합이 3 의 배수면 답이 정수."
    creative: "(1) 내분비를 3:2 등으로 바꿔도 결론은 그대로 — 학생이 보존을 발견하게 하는 최소 변형(★2) (2) 「삼각형 PQR 의 무게중심이 삼각형 ABC 의 무게중심과 일치함을 보여라」 증명형으로 바꾸면 ★3 (3) 한 변만 다른 비로 내분하면 보존이 깨져 직접 계산이 강제되고 ★2 로 내려감(질은 낮아짐) (4) 삼각형 PQR 의 넓이와 ABC 의 넓이 비를 묻기(★4, 단원 밖 결합 I-XU)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-130-256
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 A(a, 2, -3), B(-10, 2, b) 를 이은 선분 AB 위의 점 P(-1, 2, -1) 이
    3·AP = 2·PB 를 만족시킬 때 ab 의 값을 구하는 문항.
  category: "길이 비 조건 → 내분비 2:3 → 내분점 성분 방정식 두 개"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「3·AP = 2·PB」를 「AP : PB = 2 : 3」으로 뒤집어 읽어야 함 — 계수와 비가 반대로 대응되는 곳이 이 문항의 관문"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "선분 위의 점의 길이 비 조건을 내분비로 바꾸어 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비가 숫자로 주어지지 않고 등식 3·AP = 2·PB 로 위장돼 있어, 계수를 그대로 3:2 로 읽으면
    끝까지 틀린다(T-표기·T-부호 2개). 비를 2:3 으로 옮기고 나면 x 성분에서 a, z 성분에서 b 가
    각각 일차방정식 한 줄로 나온다. y 성분은 세 점이 모두 2 라 정보가 없다는 것도 확인 포인트.
    STEP 1 출발점 ★2 에 통찰 1개(EQV d2)라 그대로 ★2.
  tier: star_2
  mechanism_primary: "3·AP = 2·PB → AP:PB = 2:3 → P 는 AB 의 2:3 내분점 → x·z 성분 방정식으로 a, b → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/130-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등식의 계수(3, 2)와 A·B·P 의 좌표를 바꿀 수 있다. 제약: 내분비 m:n 의 합 m+n 이 좌표 차를 나누어떨어지게 해야 a, b 가 정수로 떨어진다. P 가 선분 **내부** 에 오도록 P 의 각 성분이 A·B 성분 사이에 있어야 한다(밖이면 외분). y 성분처럼 세 점이 같은 값이면 그 성분은 정보가 없다."
    creative: "(1) 조건을 AP:PB = 2:3 으로 곧바로 주면 통찰이 사라져 ★1~2 절차형으로 내려감 — 위장이 이 문항의 값 (2) 「선분 AB 의 연장선 위」로 바꾸면 외분이 되어 부호 함정이 늘고 ★3 (3) 2·AP = 3·PB 처럼 비를 뒤집어 같은 좌표로 내면 오답 유인만 남고 난도는 동일 (4) P 를 미지수로 두고 ab 대신 P 의 좌표를 묻기(★2 유지)."
```

```yaml
- id: GN-GEO-130-257
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원점 O 와 세 점 A(p, 5, 3), B(-4, q, -2), C(2, 1, r) 가 선분 OA 와 선분 OC 를 이웃하는
    두 변으로 하는 평행사변형의 꼭짓점일 때 p+q+r 의 값을 구하는 문항.
  category: "OA·OC 가 이웃 변 → OB 가 대각선 → B = A + C 성분별"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「OA 와 OC 가 이웃하는 두 변」에서 B 가 O 의 맞은편 꼭짓점임을 읽어내 「OB 와 AC 의 중점이 일치」 곧 B = A + C 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원점과 두 점이 이웃 변을 이루는 평행사변형의 나머지 꼭짓점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 이름이 O-A-B-C 순으로 붙어 있지 않고 「이웃하는 두 변」이라는 말로만 배치가
    지정돼 있어, 어느 두 점이 대각선 짝인지 스스로 정해야 한다(T-표기 함정). B = A + C 를
    세우면 세 성분에서 p, q, r 이 한 줄씩. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "OA·OC 가 이웃 변 → 대각선은 OB 와 AC → B = A + C → p, q, r → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/130-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·C 의 고정 성분을 바꿀 수 있다. 제약: 각 성분에서 미지수가 정확히 하나만 남아야 한다(같은 성분에 문자가 둘이면 결정 불가). B = A + C 가 성립해야 하므로 미지수가 없는 성분은 미리 합이 맞게 넣어 둔다."
    creative: "(1) 기준점을 원점이 아닌 일반 점 D 로 바꾸면 B = A + C − D 가 되고 ★2 유지 (2) 「OA 와 OB 가 이웃 변」으로 말만 바꾸면 대각선 짝이 달라져 답이 바뀌는 쌍둥이 문항 (3) 어느 두 변이 이웃인지 지정하지 않으면 세 가지 배치가 생겨 I-MI ★3 (4) 평행사변형의 넓이나 대각선 길이를 묻기(★3)."
```

```yaml
- id: GN-GEO-130-258
  page: 130
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    세 점 A(2, a, -6), B(b, 2, 4), C(c, -5, d) 를 꼭짓점으로 하는 삼각형 ABC 에서
    직선 BC 가 yz평면에 평행하고 무게중심이 원점일 때 abcd 의 값을 구하는 문항.
  category: "BC ∥ yz평면 → b = c · 무게중심 원점 → 세 성분 평균 0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선 BC 가 yz평면에 평행」을 「B 와 C 의 x좌표가 같다」는 등식으로 옮김 — 공간의 위치 관계를 성분 등식으로 바꾸는 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선이 좌표평면에 평행할 조건과 무게중심 조건의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 넷인데 조건은 둘뿐이라, 평행 조건에서 b = c 를 뽑아 x 성분 식과 묶어야 비로소
    둘 다 결정된다. 「평면에 평행」을 성분 등식으로 옮기는 단계가 관문이고(EQV d2),
    평면 이름과 고정되는 성분의 대응(yz평면 → x)이 T-표기 함정이다. 통찰 1개지만 미지수 4개·
    조건 결합·M_total 8 이라 STEP 1 출발점 ★2 에서 한 단 올려 ★3(1단 차이라 이슈는 아님).
  tier: star_3
  mechanism_primary: "BC ∥ yz평면 → b = c · 무게중심 원점 → x 성분에서 b, c · y 성분에서 a · z 성분에서 d → abcd"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/130-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 고정 성분과 무게중심 위치를 바꿀 수 있다. 제약: x 성분 식 2 + b + c = 0 과 b = c 가 함께 정수해를 주려면 A 의 x좌표가 짝수여야 한다. 무게중심을 원점 대신 다른 점으로 옮겨도 되지만 세 성분 합이 3 의 배수가 되게 맞춘다."
    creative: "(1) 평행 조건을 「직선 BC 가 zx평면에 평행」으로 바꾸면 고정되는 성분이 y 로 옮겨져 같은 ★3 (2) 「직선 BC 가 x축에 평행」으로 바꾸면 성분 두 개가 동시에 같아야 해 조건이 강해지고 ★3~4 (3) 무게중심 조건을 「무게중심이 z축 위」로 약하게 하면 식이 하나 줄어 미지수를 하나 빼야 함 (4) 삼각형 ABC 의 넓이·수직 조건을 덧붙이면 단원 밖 결합으로 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-130-259
  page: 130
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    점 A(3, -1, a) 를 xy평면에 대하여 대칭이동한 점을 B 라 하고, 점 C(-3, b, 4) 에 대하여
    선분 BC 를 1:2 로 내분하는 점이 x축 위에 있을 때 a+b 의 값을 묻는 5지선다.
  category: "xy평면 대칭 → z 부호 반전 · x축 위 → 내분점의 y=0, z=0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「xy평면에 대하여 대칭」을 「z좌표의 부호만 바꾼 점 B(3, -1, -a)」로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「내분점이 x축 위」에서 y좌표와 z좌표가 동시에 0 이라는 두 개의 식을 세워야 b 와 a 가 각각 결정됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭이동한 점과의 내분점이 좌표축 위에 있을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 변환이 두 겹이다 — 대칭이동으로 B 를 만들고, 축 위 조건에서 성분 두 개를 0 으로
    놓는다. 미지수 a 가 대칭으로 부호가 뒤집힌 채 z 성분 식에 들어가는 지점이 대표 함정
    (T-부호·T-표기 2개). 통찰 2개라 +1 후보지만 두 통찰 모두 EQV 라 ★4 저노출 유형 요건
    (SC/VF/SYM/XU/RT/PD/BW)에 걸리지 않으므로 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "xy평면 대칭 → B(3, -1, -a) → BC 의 1:2 내분점 → y=0 에서 b, z=0 에서 a → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/130-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·C 의 고정 성분과 내분비 1:2 를 바꿀 수 있다. 제약: (ⅰ) 내분비의 합 3 으로 나누어떨어져 a, b 가 정수가 되게 성분을 고른다 (ⅱ) 선택지가 서로 다른 정수가 되도록 a+b 를 먼저 정하고 역설계한다 (ⅲ) 대칭 평면과 「축 위」 조건이 서로 다른 성분을 건드려야 두 식이 독립."
    creative: "(1) 대칭 평면을 yz평면으로 바꾸면 x 성분이 뒤집혀 내분점의 x 값이 달라지고 ★3 유지 (2) 「x축 위」를 「xy평면 위」로 약화하면 식이 하나뿐이라 미지수를 하나 빼야 함(★2) (3) 대칭이동을 원점 대칭으로 바꾸면 세 성분이 모두 뒤집혀 ★3 (4) 내분비를 미지수 k:1 로 두면 미지수가 셋이 되어 조건을 하나 더 줘야 하고 ★4."
```

```yaml
- id: GN-GEO-130-260
  page: 130
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 PQR 의 무게중심이 G(-1, 1, 6) 이고 선분 PQ 의 중점이 M(3, -4, 5) 일 때
    점 R 의 좌표를 구하는 문항.
  category: "P·Q 를 각각 구할 수 없음 → P+Q = 2M 으로 묶어 무게중심 식에 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P 와 Q 는 개별로 정해지지 않으므로 중점 조건을 P+Q = 2M 이라는 한 덩어리로 바꿔 무게중심 식 3G = P+Q+R 에 통째로 대입"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무게중심과 한 변의 중점으로 나머지 꼭짓점 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    꼭짓점 두 개가 아예 결정되지 않는데도 답은 하나로 정해진다는 구조가 이 문항의 핵심이다.
    P, Q 를 미지수 여섯 개로 두고 덤비면 막히고, P+Q 를 하나의 덩어리로 보면 R = 3G − 2M
    한 줄로 끝난다(무게중심이 중선 RM 을 2:1 로 내분한다는 성질로 읽어도 같다).
    STEP 2 출발점 ★3 유지 · 통찰 1개(EQV d2).
  tier: star_3
  mechanism_primary: "P+Q = 2M · 3G = P+Q+R → R = 3G − 2M"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(-9,\,11,\,8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/130-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "G 와 M 의 좌표를 바꿀 수 있다. 제약: R = 3G − 2M 이므로 어떤 정수점을 써도 R 은 정수점이 된다. G 와 M 이 일치하면 삼각형이 성립하지 않으므로 서로 다른 점으로 둔다."
    creative: "(1) 묻는 것을 「선분 RM 을 2:1 로 내분하는 점」으로 바꾸면 성질 확인용 ★2 (2) M 대신 다른 변의 중점을 주면 구하는 꼭짓점이 바뀌는 쌍둥이 문항 (3) 「R 의 좌표」 대신 「선분 RG 의 길이」를 물으면 거리 공식이 붙어 ★3 유지 (4) 중점 M 대신 「PQ 를 1:2 로 내분하는 점」을 주면 P+Q 로 묶이지 않아 조건이 부족해지고 문항이 깨짐 — 중점이라는 점이 골조의 핵."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-130-261
  page: 130
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    한 모서리의 길이가 2 인 정육면체에서 대각선 AG 를 1:m 으로 내분하는 점이 삼각형 BDE 의
    무게중심과 일치할 때 자연수 m 의 값을 구하는 문항(그림 제시).
  category: "정육면체에 좌표 도입 → 무게중심과 대각선 내분점을 같은 좌표로 놓기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림으로만 주어진 정육면체에 좌표축을 잡아(A 를 원점, 세 모서리를 축 방향) 도형 조건을 좌표 계산으로 옮김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B, D, E 는 A 에 이웃한 세 꼭짓점이라 무게중심이 대각선 AG 방향의 1/3 지점이라는 대칭 구조 — 세 성분이 모두 같아 한 성분만 비교하면 됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정육면체에 좌표를 도입해 대각선의 내분점과 삼각형의 무게중심을 일치시키기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌표가 하나도 주어지지 않은 입체 문항이라 먼저 좌표계를 스스로 잡아야 한다(I-RT).
    A 를 원점으로 두면 B, D, E 가 각 축 위에 놓이고 무게중심은 세 성분이 모두 같은 점이 되어,
    대각선 AG 위의 내분점과 한 성분만 비교하면 1:m 의 m 이 나온다(I-SYM). 통찰 2개에
    저노출 유형(RT·SYM)이 포함돼 실력 UP 출발점 ★4 유지. ★5 는 통찰 3개 이상 요건 미달.
  tier: star_4
  mechanism_primary: "A 를 원점으로 좌표 도입 → 삼각형 BDE 의 무게중심 = 모서리 길이의 1/3 지점 → AG 의 1:m 내분점과 성분 비교 → m"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-130-261.png
  latex: latex-bank/gn-geo/items/130-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이는 답에 영향을 주지 않는다(비만 남으므로 2 를 3·a 로 바꿔도 m 은 그대로 2). 제약: 그림의 꼭짓점 라벨(윗면 A·B·C·D, 아랫면 E·F·G·H 가 각각 위아래로 대응)은 고정이며, A 와 G 가 마주 보는 대각선, B·D·E 가 A 에 이웃한 세 꼭짓점이라는 관계가 유지돼야 한다. 직육면체로 바꾸면 무게중심이 여전히 AG 를 1:2 로 내분하므로 답은 같다."
    creative: "(1) 삼각형 BDE 대신 삼각형 CFH(G 에 이웃한 세 꼭짓점)로 바꾸면 내분비가 2:1 로 뒤집힌 쌍둥이 문항(★4 유지) (2) 「무게중심」 대신 「삼각형 BDE 가 놓인 평면과 AG 의 교점」으로 물으면 같은 답이지만 평면 방정식 착안이 필요해 ★4~5 (3) 삼각형 BDE 의 넓이나 AG 와의 수직 관계를 덧붙이면 단원 밖 결합(I-XU)으로 ★5 후보 (4) 정육면체를 직육면체로 바꾸고 모서리를 문자로 두면 Mₐ 가 올라 ★4 유지·계산만 무거워짐(질 저하 주의)."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 2 · ★2 11 · ★3 4 · ★4 1 · ★5 0
- 통찰형 11 · 절차형 7 · premium 0
- 통찰 유형 분포: I-EQV 11(전체 통찰 13개 중 11개) · I-SYM 2 · I-RT 1 — 사실상 「조건 문장 → 좌표 성분 등식」 한 종류로 수렴한다
- 구역 분포: 「필수·발전 예제」 12문(필수 예제 3 · 확인체크 9) · STEP 1 3문 · STEP 2 2문 · 실력 UP 1문
- type_hint 묶음 상위: 「평행사변형·마름모의 대각선 중점 조건」 5(128-e8 · 128-250 · 128-251 · 128-252 · 130-257) · 「무게중심 공식과 그 역산」 5(129-e9 · 129-253 · 129-254 · 129-255 · 130-260) · 「좌표평면·좌표축 위에 있을 조건」 4(127-248 · 127-249 · 130-258 · 130-259) · 「내분점 좌표 직접 계산」 3(127-e7 · 127-247 · 130-256) · 「입체도형에 좌표 도입」 1(130-261)
- M_total: 4 2문 · 6 8문 · 7 2문 · 8 5문(평균 6.4) · 함정은 T-표기(평면·축 이름과 성분의 대응, 대각선 짝, 비의 방향)가 압도적이고 T-부호(대칭이동)·T-범위(양수 조건·분모)가 뒤따른다
- 그림: 1문(`crop:fig-130-261.png`) — 나머지 17문은 좌표만으로 완결된다
- 대상층: 하위권 2 · 중하위권 5 · 중위권 9 · 중상위권 1 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-128-252 | 벤더 「확인체크」(★1 출발)이지만 마름모를 두 조건으로 분해 + 이차방정식 + a<0 선택까지 필요해 판정 ★3 — 2단 드리프트. 같은 구역의 다른 확인체크와 층이 확실히 다름 | ★1(벤더) / ★3(판정) |

그 밖에 `130-258`(STEP 1 ★2 출발 → 판정 ★3)은 1단 차이라 이슈로 올리지 않고 rationale 에만 근거를 적었다. `129-255` 도 확인체크지만 대칭 착안을 보상하는 문항이라 ★2 로 한 단 올렸다(1단).

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원에서 반복된 type_hint 는 크게 넷이다 — **①내분점·중점 직접 계산 ②평행사변형(마름모) 대각선 중점 ③무게중심 공식과 역산 ④조건 문장을 성분 등식으로**. ①③은 base ★1~2 의 계산 유형이므로 카탈로그에서 **「공간 좌표의 분점 공식 적용」 하나로 통합**하고, 묻는 대상(내분점/중점/무게중심)은 slot 속성으로 두는 편이 낫다. 같은 골조가 9문이나 반복되므로 유형을 셋으로 쪼개면 카탈로그가 비대해진다.
- 반대로 ④는 **따로 세워야 할 유형**이다(「좌표평면·좌표축·평행 조건을 성분 등식으로 옮기기」 · base ★2~3). 127-248 · 127-249 · 130-258 · 130-259 가 전부 여기 속하고, 이 유형에서만 미지수 개수와 조건 개수의 대응(평면 조건 = 식 1개 · 축 조건 = 식 2개)이 변별 지점이 된다. ①③과 섞으면 난이도 예측이 무너진다.
- ②는 base ★2 로 두되 **마름모·직사각형 변형(128-252)은 base ★3 의 별도 갈래**로 분리한다. 도형 이름이 하나 바뀔 때마다 추가되는 조건(변의 길이·대각선 길이·수직)이 곧 ★ 상승분이라, 갈래를 나눠 두면 변형 단계에서 ★ 를 설계하기 쉽다.
- `129-255`(세 변의 내분점 삼각형의 무게중심 보존)와 `130-261`(정육면체 좌표 도입)은 이 단원에서 유일하게 **계산을 건너뛰는 착안이 보상받는** 문항이다. 표본이 둘뿐이라 16단원 단독 항목으로는 얇고, 인접 단원(좌표공간의 점·평면의 방정식)과 묶어 「좌표 도입·대칭 활용」 상위 유형군 아래 ★4 슬롯 후보로 두는 편이 낫다.
