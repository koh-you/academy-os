---
name: mechanism-데이터-GN-M31-15
description: 개념원리 중학 3-1 15 이차방정식의 근의 개수(1/1 · 143~146쪽 · 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 15 이차방정식의 근의 개수
  unit_code: GN-M31-15
  part: "1/1"
  extract_range: "143~146쪽 · 143-01~146-05"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 1문 · fig-143-01)
---

# 개념원리 중학 3-1 · 15 이차방정식의 근의 개수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 열다섯 번째 소단원 「15 이차방정식의 근의 개수」 143~146쪽 17문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(143쪽) · 「핵심문제 익히기」 8문(144~145쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 5문(146쪽)이다. 이 단원에는 「계산력 강화하기」 구역이 없다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 도구는 둘뿐이다 — ⑴ **판별식 $b^2-4ac$ 의 부호 ↔ 근의 개수**(양수 2개 · 0 이면 중근 1개 · 음수 0개), ⑵ **두 근 $\alpha$, $\beta$ 와 $x^2$ 의 계수 $a$ 로부터 $a(x-\alpha)(x-\beta)=0$ 을 조립하기**(중근이면 $a(x-\alpha)^2=0$). 두 도구 모두 적용 자체는 표준 절차이므로 이 파일에서 통찰로 카운트하지 않았고, 대신 그 위에 얹히는 **되묻기 한 겹**을 통찰 판정의 기준으로 삼았다 — 부등식 해에서 정수 후보를 걸러내기(146-03), 먼저 구한 상수를 다음 방정식의 두 근으로 옮겨 읽기(145-c4), 두 근을 평행이동한 값으로 새 방정식을 조립하기(146-05). 나머지 14문은 도구를 곧바로 쓰는 절차형이며 부담은 Mₖ(판별식 반복 계산)과 Mₜ(등호 포함 여부 · $x^2$ 계수 $\ne 0$)에 몰려 있다.

변형 설계 때는 축이 셋이다 — ⒜ 방향(판별식 계산 → 근의 개수 / 근의 개수 조건 → 미지수), ⒝ 미지수의 위치($c$ 에만 / $b$ 에도 / $a$ 와 $c$ 에 동시에 → $k$ 에 대한 이차방정식), ⒞ 되묻기 층(값 자체 / 값들의 합 / 정수 최대값 / 그 값을 다시 근으로). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림은 143-01 한 문항뿐이며 표 자체가 발문이므로 숫자 변형 시 표를 반드시 함께 다시 그려야 한다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-143-01
  page: 143
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 네 이차방정식이 들어 있는 표에서 $b^2-4ac$ 의 값 칸과 근의 개수 칸을 채우기.
    ⑴ $x^2+3x-4=0$ 은 $b^2-4ac=25$ 가 예시로 채워져 있고 근의 개수만 쓰면 된다.
  category: "판별식 계산 → 부호로 근의 개수 판정 (표 채우기)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$b^2-4ac$ 의 부호로 이차방정식의 근의 개수 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원의 정의를 표 형식으로 한 번 훑는 도입 문항. $a$, $b$, $c$ 를 읽어 $b^2-4ac$ 를 계산하고
    부호를 2개/1개/0개로 옮기면 끝난다. ⑴ 의 계산 과정이 예시로 주어져 있어 남은 셋은 그대로 따라 쓰면 된다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "표의 각 식에서 a, b, c 읽기 → b^2-4ac 계산 → 부호(양/0/음) → 근 2개/1개/0개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $17$, $2$ ⑶ $-16$, $0$ ⑷ $0$, $1$'
  answer_source: "답지"
  figure: crop:fig-143-01.png
  latex: latex-bank/gn-m31/items/143-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 계수를 바꿀 수 있다. 제약: 세 부호(양수·0·음수)가 모두 한 번씩은 나오도록 배치해야 표의 교육 목적이 유지되고, $b^2-4ac$ 는 암산 가능한 두 자리 안쪽 값으로 둔다. ⑷ 의 $16x^2+8x+1$ 처럼 완전제곱식은 $(mx+n)^2$ 에서 역산해 만든다. 표 이미지가 발문이므로 숫자를 바꾸면 그림을 다시 그려야 한다."
    creative: "(1) 표의 방향을 뒤집어 근의 개수 칸을 주고 $b^2-4ac$ 의 부호 범위를 쓰게 하기(★1 유지) (2) 한 행의 상수항을 문자 $k$ 로 두고 각 근의 개수가 되는 $k$ 의 범위를 적게 하면 ★2 (3) 근의 개수 대신 그래프와 $x$ 축의 교점 개수를 묻게 바꾸면 표현 전환(I-RT d1)이 생겨 ★2."
```

```yaml
- id: GN-M31-143-02
  page: 143
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 네 이차방정식($x^2-6x+9=0$ · $x^2+5x+7=0$ · $3x^2-4x-2=0$ · $5x^2-3x+1=0$)의 근의 개수 구하기.
  category: "판별식 계산 → 부호로 근의 개수 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$b^2-4ac$ 의 부호로 이차방정식의 근의 개수 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    143-01 의 표를 걷어내고 같은 도구만 네 번 돌리는 드릴. ⑴ 은 완전제곱식이라 중근 1개,
    ⑶ 만 부호가 양수다. $a\ne1$ 인 ⑶⑷ 에서 $4ac$ 를 빠뜨리지 않는 것이 유일한 주의점.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "각 식의 b^2-4ac 계산 → 부호 → 근 2개/1개/0개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $0$ ⑶ $2$ ⑷ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/143-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 자유롭게 바꿀 수 있다. 제약: 네 문항의 답이 한쪽으로 몰리지 않도록 2개·1개·0개를 섞고, $x^2$ 의 계수가 1 이 아닌 식을 최소 하나 넣어 $4ac$ 누락을 잡는다. 중근 문항은 $(mx+n)^2$ 전개로 만든다."
    creative: "(1) 근의 개수가 같은 것끼리 짝짓게 하기(★1) (2) 이차항 계수를 문자로 두어 근이 2개가 되는 조건을 묻기(★2) (3) 네 식 중 근의 개수가 다른 하나를 고르는 객관식으로 바꾸면 146-01 과 같은 골조(★2)."
```

```yaml
- id: GN-M31-143-03
  page: 143
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 두 근(또는 중근)과 $x^2$ 의 계수가 주어질 때 이차방정식을 만드는 과정의 빈칸 채우기.
    ⑴ 두 근 $-1$, $4$ · 계수 $1$ → $(x+\square)(x-4)=0$ 에서 전개까지. ⑵ 중근 $5$ · 계수 $2$ → $2(x-\square)^2=0$ 에서 전개까지.
  category: "두 근·중근과 $x^2$ 의 계수 → 인수 형태 조립 → 전개 (안내 채우기)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근과 $x^2$ 의 계수가 주어진 이차방정식 만들기(안내 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $a(x-\alpha)(x-\beta)=0$ 과 $a(x-\alpha)^2=0$ 이라는 조립 규칙을 빈칸으로 안내한 도입 문항.
    근의 부호가 인수 안에서 뒤집힌다는 점(근 $-1$ → $(x+1)$)이 유일한 함정이고, 전개는 한 줄이다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "근 α, β → a(x-α)(x-β)=0 (중근은 a(x-α)^2=0) → 전개해 ax^2+bx+c=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$, $3$, $4$ ⑵ $5$, $20$, $50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/143-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 $x^2$ 의 계수를 바꿀 수 있다. 제약: 근의 부호가 섞여 있어야 인수 안 부호 뒤집기를 훈련할 수 있고, 전개 결과의 계수가 정수가 되도록 계수는 분모를 지우는 값으로 둔다(근이 분수면 계수를 그 분모의 배수로)."
    creative: "(1) 빈칸 위치를 전개식 쪽이 아니라 근 쪽으로 옮겨 역으로 근을 채우게 하기(★2 · 역추적) (2) 중근 항목을 '한 근이 다른 근의 2배'처럼 관계로 주면 ★2 (3) 안내 빈칸을 모두 없애면 143-04 와 같은 문항(★1~2)."
```

```yaml
- id: GN-M31-143-04
  page: 143
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑶ 조건을 만족시키는 이차방정식을 $ax^2+bx+c=0$ 꼴로 나타내기.
    ⑴ 두 근 $3$, $5$ · 계수 $1$ ⑵ 두 근 $-7$, $-2$ · 계수 $3$ ⑶ 중근 $-1$ · 계수 $5$.
  category: "두 근·중근과 $x^2$ 의 계수 → 인수 형태 조립 → 전개"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근과 $x^2$ 의 계수가 주어진 이차방정식 만들기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    143-03 의 안내 빈칸을 없앤 같은 조립 드릴. ⑵⑶ 은 $x^2$ 의 계수 $3$, $5$ 를 전개 뒤 모든 항에
    곱해야 해서 Mₖ 가 한 단 올라간다. 음수 근이 인수에서 $(x+7)$ 로 바뀌는 부호 처리가 주 함정.
    통찰 0 · M_total 5 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "근 α, β 와 계수 a → a(x-α)(x-β)=0 조립 → 전개 → ax^2+bx+c=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^2-8x+15=0$ ⑵ $3x^2+27x+42=0$ ⑶ $5x^2+10x+5=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/143-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근과 $x^2$ 의 계수를 바꿀 수 있다. 제약: 답이 약분되지 않은 $ax^2+bx+c=0$ 꼴 그대로여야 하므로 계수를 곱한 결과가 정수여야 하고, 세 소문항은 (양·양) · (음·음) · 중근으로 부호 패턴을 다르게 유지한다."
    creative: "(1) 근을 분수($\\frac{1}{3}$ 등)로 두고 계수를 분모에 맞추게 하면 ★2 (2) 완성된 방정식의 계수 합·곱을 추가로 묻는 되묻기(★2) (3) '두 근의 차가 2 이고 합이 8' 처럼 근을 간접 조건으로 주면 조건 통합이 한 겹 붙어 ★2~3."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-144-h1
  page: 144
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 개의 이차방정식 중 서로 다른 두 근을 갖는 것을 모두 고르는 5지선다(정답 2개).
  category: "각 선택지의 판별식 → 부호가 양수인 것 고르기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$b^2-4ac$ 의 부호로 이차방정식의 근의 개수 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    143-02 와 같은 도구이지만 방향이 뒤집혀 '서로 다른 두 근'이라는 서술을 $b^2-4ac>0$ 으로 옮긴 뒤
    선택지 다섯을 모두 스캔해야 한다. ⑤ $4x^2-12x+9=0$ 은 $b^2-4ac=0$ 인 미끼라 중근을 두 근으로
    세면 틀린다(T-경계). 통찰 0 · M_total 5 지만 선택지 스캔량과 경계 미끼가 있어 −1 후보를
    적용하지 않고 핵심문제 구역 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "'서로 다른 두 근' → b^2-4ac>0 → 선택지 5개의 판별식 계산 → 양수인 두 개 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①, ④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/144-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 선택지의 계수를 바꿀 수 있다. 제약: 정답이 2개가 되도록 판별식 양수인 식을 정확히 둘 두고, 오답에는 반드시 $b^2-4ac=0$ 인 완전제곱형을 하나 섞어 경계 미끼를 유지한다. 판별식은 암산 가능한 범위(두 자리 안쪽)로."
    creative: "(1) '중근을 갖는 것'·'근이 없는 것'으로 묻는 방향만 바꾸기(★2 유지 · 144-c1 형) (2) 선택지에 문자 계수를 하나 섞어 조건부로 만들면 ★3 (3) 근의 개수가 나머지와 다른 하나를 고르게 바꾸면 146-01 형(★2)."
```

```yaml
- id: GN-M31-144-c1
  page: 144
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 개의 이차방정식 중 근이 없는 것을 고르는 5지선다. 한 선택지는 $x^2$ 의 계수가 $\dfrac{1}{3}$ 인 분수 계수식이다.
  category: "각 선택지의 판별식 → 부호가 음수인 것 고르기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$b^2-4ac$ 의 부호로 이차방정식의 근의 개수 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    144-h1 의 짝 확인문제로 방향만 '근이 없는 것'으로 뒤집었다. ②⑤ 가 완전제곱형($b^2-4ac=0$)이라
    '근이 없다'와 '중근'을 혼동하면 걸린다. ③ 의 분수 계수는 $4ac=4\times\frac{1}{3}\times2$ 계산을
    한 단 무겁게 만들 뿐 골조는 같다. 통찰 0 · M_total 5 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "'근이 없다' → b^2-4ac<0 → 선택지 5개의 판별식 계산 → 음수인 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/144-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿀 수 있다. 제약: 판별식이 음수인 식이 정확히 하나여야 하고, 완전제곱형($b^2-4ac=0$) 오답을 최소 하나 유지한다. 분수 계수 선택지는 $4ac$ 가 정수가 되도록 분모와 상수항을 맞춘다."
    creative: "(1) '실수인 근을 갖는 것의 개수'를 묻기(★2) (2) 분수 계수 대신 문자 계수를 넣어 근이 없을 조건을 덧붙이면 ★3 (3) 보기를 ㄱㄴㄷ 형으로 바꿔 복수 조건을 동시에 판정하게 하면 ★2~3."
```

```yaml
- id: GN-M31-144-h2
  page: 144
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $4x^2-4x+k-5=0$ 이 중근을 가질 때 ⑴ 상수 $k$ 의 값 ⑵ 그때의 중근을 차례로 구하기.
  category: "중근 조건 $b^2-4ac=0$ → $k$ → 완전제곱식으로 중근"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건으로 미지수와 중근 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $16-16(k-5)=0$ 으로 $k$ 를 얻고, 그 $k$ 를 되돌려 넣어 $4x^2-4x+1=(2x-1)^2=0$ 에서 중근을 읽는
    두 계단짜리 표준 절차. ⑴⑵ 소문항이 계단을 대신 놓아 주어 전략 선택의 여지가 없다.
    미지수 $k$ 가 상수항에만 들어가 Mₐ 는 2. 통찰 0 · M_total 6 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "중근 → b^2-4ac=0 → k 결정 → k 를 대입해 완전제곱식으로 정리 → 중근 x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ ⑵ $x=\dfrac{1}{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/144-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x^2$ 의 계수와 일차항 계수를 바꿀 수 있다. 제약: $b^2-4ac=0$ 에서 나오는 $k$ 가 정수여야 하고, 중근 $-\\frac{b}{2a}$ 도 간단한 유리수가 되도록 $b$ 를 $2a$ 의 배수 근처로 둔다. 미지수는 상수항에만 두어야 소문항 계단이 유지된다."
    creative: "(1) 소문항을 없애고 '중근을 구하시오'만 묻기(계단이 사라져 ★3) (2) 미지수를 일차항 계수로 옮기면 $k$ 가 두 값이 되어 ★3 (3) '중근' 대신 '한 근이 $\\frac{1}{2}$' 로 주고 $k$ 를 되묻는 역방향(★2~3)."
```

```yaml
- id: GN-M31-144-c2
  page: 144
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $kx^2+12x+k+5=0$ 이 중근을 갖도록 하는 상수 $k$ 의 값을 모두 구하기.
  category: "$x^2$ 계수와 상수항에 동시에 든 $k$ → $b^2-4ac=0$ 이 $k$ 의 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건으로 미지수 구하기($x^2$ 계수에도 미지수가 있는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    144-h2 와 같은 중근 조건이지만 $k$ 가 $x^2$ 의 계수와 상수항에 동시에 들어가 $144-4k(k+5)=0$ 이
    다시 $k$ 에 대한 이차방정식이 되고, 인수분해해 두 값을 모두 답해야 한다. 이차방정식이려면
    $k\ne0$ 을 먼저 확인해야 하는 T-범위 함정과 '모두' 라는 복수 답 요구가 겹친다.
    통찰 0 이지만 M_total 8 로 이 범위 최대 · 핵심문제 구역 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "k≠0 확인 → b^2-4ac=0 → k 에 대한 이차방정식 → 인수분해 → 두 값 모두"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-9$, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/144-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항의 덧셈 상수를 바꿀 수 있다. 제약: $b^2-4ac=0$ 을 정리한 $k$ 의 이차방정식이 정수 범위에서 인수분해돼야 하고, 두 해가 모두 $0$ 이 아니어야 한다(하나가 $0$ 이면 이차방정식 조건에 걸려 답이 하나로 줄고 난이도 성격이 바뀐다)."
    creative: "(1) 두 $k$ 값의 합·곱을 되묻기(146-02 형 · ★3) (2) 해 중 하나가 $k=0$ 이 되도록 설계해 기각 단계를 강제하면 I-VF 가 붙어 ★4 (3) '중근' 대신 '근을 갖지 않는다'로 바꾸면 $k$ 의 범위 + $k\\ne0$ 이 되어 ★3~4."
```

```yaml
- id: GN-M31-145-h3
  page: 145
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $x^2+4x+2k+1=0$ 의 ⑴ 근을 갖는 경우 ⑵ 근을 갖지 않는 경우에 대하여 상수 $k$ 의 값의 범위 구하기.
  category: "근의 존재 조건 → 판별식 부등식 → $k$ 의 범위"
  M: {s: 1, k: 2, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근을 가질 조건에 따른 미지수의 값의 범위 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '근을 갖는다'가 중근까지 포함하므로 $b^2-4ac\ge0$(등호 포함)이고 ⑵ 는 그 여집합이라는 것이
    이 문항의 전부다. 등호 포함 여부(T-경계)와 부등식을 $-8k\ge-12$ 에서 나눌 때의 부호 뒤집기
    (T-부호)가 겹쳐 Mₜ 2. 두 소문항이 서로의 답을 검산해 주므로 전략 분기는 없다.
    통찰 0 · M_total 7 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "근을 갖는다 → b^2-4ac≥0 / 갖지 않는다 → b^2-4ac<0 → k 부등식 풀기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k\le\dfrac{3}{2}$ ⑵ $k>\dfrac{3}{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/145-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항의 $k$ 계수를 바꿀 수 있다. 제약: 경계값이 분수로 나오게 두면 등호 처리 훈련이 살아나고(정수 경계면 다음 문항 146-03 과 성격이 겹친다), $k$ 의 계수 부호를 음수로 만들면 부등호 뒤집기가 추가된다."
    creative: "(1) '서로 다른 두 근'으로 바꿔 등호를 빼기(★2 · 경계 대비용 짝문항) (2) 범위 대신 그 범위 안 자연수 $k$ 의 개수를 묻기(사후 필터 I-VF d1 → ★3) (3) $x^2$ 의 계수에도 $k$ 를 넣어 $k\\ne0$ 을 함께 걸면 ★3~4."
```

```yaml
- id: GN-M31-145-c3
  page: 145
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $2x^2-6x+k-1=0$ 이 서로 다른 두 근을 갖도록 하는 상수 $k$ 의 값이 아닌 것을 고르는 5지선다.
  category: "판별식 부등식으로 $k$ 의 범위 → 선택지 중 범위 밖인 값 고르기"
  M: {s: 1, k: 2, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근을 가질 조건에 따른 미지수의 값의 범위 구하기(선택지 판정형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $36-8(k-1)>0$ 에서 $k<\frac{11}{2}$ 를 얻은 뒤 선택지 다섯을 대입해 범위 밖인 것을 고른다.
    '아닌 것'이라는 부정 발문(T-표기)과 부등식의 등호 없음(T-경계)이 함정이지만, 선택지가
    범위 판정을 대신해 주어 145-h3 보다 오히려 마무리가 쉽다. 통찰 0 · M_total 7 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "서로 다른 두 근 → b^2-4ac>0 → k<11/2 → 선택지 대입해 범위 밖 값 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/145-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 선택지 값을 바꿀 수 있다. 제약: 경계값이 선택지들 사이에 오도록 배치해 범위 밖 선택지가 정확히 하나가 되게 하고, 경계값 자체를 선택지에 넣어 등호 여부를 시험하려면 부등호를 $\\ge$ 로 바꾸지 말 것(정답이 둘이 된다)."
    creative: "(1) '근을 갖지 않도록 하는 값인 것'으로 방향 뒤집기(★2) (2) 선택지를 없애고 범위 안 정수 $k$ 의 개수를 묻기(★3) (3) 경계값을 선택지에 넣고 발문을 '중근을 갖는 것'으로 바꾸면 경계 판정만으로 답이 갈려 ★2~3."
```

```yaml
- id: GN-M31-145-h4
  page: 145
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $3x^2+ax+b=0$ 의 두 근이 $-1$, $\dfrac{1}{3}$ 일 때 상수 $a$, $b$ 에 대하여 $a-2b$ 의 값 구하기.
  category: "두 근과 $x^2$ 계수로 방정식 조립 → 계수 비교 → 식의 값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 주어질 때 이차방정식 구하기(계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $3(x+1)\left(x-\frac{1}{3}\right)=0$ 을 전개해 $3x^2+2x-1=0$ 을 얻고 계수 비교로 $a$, $b$ 를 읽은 뒤
    $a-2b$ 로 되묻는 3계단 절차. 근이 분수라 전개에서 $3$ 을 분배하는 계산이 함정이지만 도구는
    143-04 와 같다. 되묻기가 한 겹 붙어도 표준 절차라 통찰로 세지 않았다. M_total 7 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "두 근 α, β 와 계수 3 → 3(x-α)(x-β)=0 전개 → a, b 계수 비교 → a-2b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/145-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 $x^2$ 의 계수, 되묻는 식($a-2b$)을 바꿀 수 있다. 제약: 분수 근의 분모가 $x^2$ 계수를 나눠야 $a$, $b$ 가 정수로 떨어지고, 되묻는 식은 $a$, $b$ 부호가 섞이도록 짜야 계수 비교 실수가 드러난다."
    creative: "(1) 근 하나만 주고 나머지 근과 $b$ 를 함께 묻기(★3) (2) $a$, $b$ 를 다시 다른 방정식의 두 근으로 쓰게 하면 145-c4 골조(★2~3) (3) '두 근의 비가 $1:(-3)$' 처럼 간접 조건으로 주면 조건 통합이 붙어 ★3."
```

```yaml
- id: GN-M31-145-c4
  page: 145
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $x^2-ax+b=0$ 의 두 근이 $1$, $3$ 일 때, 상수 $a$, $b$ 를 두 근으로 하고 $x^2$ 의 계수가 $2$ 인 이차방정식을 고르는 5지선다.
  category: "계수 비교로 $a$, $b$ → 그 값을 새 방정식의 두 근으로 재조립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "첫 방정식에서 구한 '계수' $a$, $b$ 를 그대로 다음 방정식의 '두 근'으로 옮겨 읽는 층위 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근으로 구한 계수를 다시 두 근으로 쓰는 이차방정식 만들기(2단 조립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x-1)(x-3)=x^2-4x+3$ 과 계수 비교해 $a=4$, $b=3$ 을 얻은 뒤, 이번에는 그 두 값을 근으로 보고
    $2(x-4)(x-3)=0$ 을 다시 조립한다. 같은 문자가 한 단계에서는 계수, 다음 단계에서는 근으로
    역할이 바뀌는 지점이 이 문항의 유일한 인지 부담(I-EQV d1)이고 $-a$ 의 부호 처리가 함정이다.
    통찰 1개 d1 로 +1 조건(2개 이상 또는 depth 3)에는 못 미쳐 확인문제 구역 ★2 유지.
    [분류 이슈] 짝 핵심문제 145-h4(★2)보다 단계가 한 겹 많아 ★3 후보 — 카탈로그 설계 때 결정.
  tier: star_2
  mechanism_primary: "두 근 1, 3 → 계수 비교로 a, b → a, b 를 근으로 2(x-a)(x-b)=0 조립 → 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/145-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 방정식의 두 근과 새 방정식의 $x^2$ 계수를 바꿀 수 있다. 제약: $-a$ 형태 때문에 부호 함정이 유지되도록 첫 방정식은 $x^2-ax+b$ 꼴을 지키고, 최종 전개 계수가 선택지에서 서로 구별되도록 $a\\ne b$ 로 둔다."
    creative: "(1) 새 방정식의 두 근을 $a+b$, $ab$ 로 바꾸면 한 겹 더(★3) (2) 첫 방정식의 근을 하나만 주고 나머지를 미지수로 두면 역추적이 붙어 ★3 (3) 객관식을 주관식으로 바꾸면 전개 부담만 늘고 골조는 그대로(★2~3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-146-01
  page: 146
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    다섯 개의 이차방정식 중 근의 개수가 나머지 넷과 다른 하나를 고르는 5지선다.
  category: "선택지 다섯의 판별식 → 부호가 혼자 다른 것 고르기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$b^2-4ac$ 의 부호로 이차방정식의 근의 개수 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    넷은 판별식이 음수(근 0개)이고 ③ 만 양수(근 2개)다. '나머지 넷과 다른 하나'라는 비교 발문이
    붙었지만 실제로는 다섯 개의 판별식을 모두 계산하는 144-h1 과 같은 스캔 작업이다.
    통찰 0 · M_total 5 → 시험대비 구역 출발(★2~3)에서 −1 쪽을 택해 ★2.
    [분류 이슈] 구역은 ★3 도 가능하나 골조가 143-02 드릴과 동일해 ★2 로 둠.
  tier: star_2
  mechanism_primary: "선택지 5개의 b^2-4ac 계산 → 부호 분류 → 혼자 다른 부호 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/146-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 선택지의 계수를 바꿀 수 있다. 제약: 네 개의 판별식 부호가 같고 하나만 달라야 하며, 다수 쪽을 근 0개가 아니라 중근(판별식 0)으로 두면 완전제곱식 다섯 개를 만들어야 해 계수 설계가 까다로워진다. 판별식은 암산 범위로."
    creative: "(1) 다수 쪽을 중근으로 바꿔 완전제곱 인식을 묻기(★2~3) (2) 선택지 하나에 문자 계수를 넣어 조건부 판정을 강제하면 ★3 (3) '근의 개수의 총합'을 묻는 주관식으로 바꾸면 전부 계산이 강제돼 ★2."
```

```yaml
- id: GN-M31-146-02
  page: 146
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $x^2+2kx+4k-3=0$ 이 중근을 갖도록 하는 모든 상수 $k$ 의 값의 합 구하기.
  category: "$b^2-4ac=0$ 이 $k$ 의 이차방정식 → 두 해 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건으로 미지수 구하기(미지수가 두 계수에 걸친 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $k$ 가 일차항과 상수항에 동시에 들어가 $(2k)^2-4(4k-3)=0$ 이 다시 $k$ 에 대한 이차방정식
    $k^2-4k+3=0$ 이 된다. 인수분해로 두 해를 모두 찾고 '합'으로 한 겹 되묻는 3계단이라
    한 해만 쓰고 멈추면 틀린다. 골조는 144-c2 와 같은 계열이고 $k\ne0$ 함정만 없다.
    통찰 0 이지만 M_total 7 · 시험대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "중근 → b^2-4ac=0 → k 의 이차방정식 → 인수분해로 두 해 → 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/146-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$2k$ 의 계수와 상수항의 $k$ 계수·상수를 바꿀 수 있다. 제약: 정리한 $k$ 의 이차방정식이 정수 범위에서 인수분해돼야 하고, 두 해가 서로 달라야 '모든 값의 합'이라는 되묻기가 의미를 갖는다(중복근이면 문항이 무너진다)."
    creative: "(1) 합 대신 곱·차를 묻기(★3 유지) (2) 두 $k$ 값 각각에 대한 중근을 모두 구하게 하면 계단이 한 겹 더해져 ★3~4 (3) $x^2$ 의 계수에도 $k$ 를 넣어 $k\\ne0$ 기각 단계를 만들면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-M31-146-03
  page: 146
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $4x^2-3x-k=0$ 의 근이 존재하지 않도록 하는 상수 $k$ 의 값 중 가장 큰 정수 구하기.
  category: "판별식 부등식으로 $k$ 의 범위 → 범위 안 최대 정수 고르기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연속 범위 $k<-\\dfrac{9}{16}$ 에서 정수라는 사후 필터로 후보를 걸러 최대값을 고르는 단계(경계값 자체는 정수가 아니어서 기각)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근을 가질 조건에 따른 미지수의 범위 구하고 조건을 만족하는 정수 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $9+16k<0$ 에서 $k<-\frac{9}{16}$ 까지는 145-h3·145-c3 과 같은 도구이지만, 여기서 멈추지 않고
    그 범위 안의 정수 중 가장 큰 것을 골라야 한다. 경계값이 $-1$ 과 $0$ 사이 분수라 부등식 해를
    수직선 위 정수로 옮겨 읽지 않으면 $0$ 이나 $-\frac{9}{16}$ 을 답하게 된다(T-경계 · T-부호).
    사후 필터가 풀이의 마지막 본질 단계(I-VF d1) · M_total 8 · 시험대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "근 없음 → b^2-4ac<0 → k<-9/16 → 범위 안 정수 중 최대값 -1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/146-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x^2$ 계수와 일차항 계수를 바꿀 수 있다. 제약: 경계값이 정수가 아니어야 정수 필터가 살아난다(정수면 등호 처리와 답이 흐려진다). 경계값이 $0$ 과 $-1$ 사이처럼 부호가 갈리는 위치에 오면 함정이 가장 잘 작동한다. 상수항 부호를 $-k$ 로 두어 부등호 방향이 한 번 뒤집히게 유지한다."
    creative: "(1) '가장 작은 정수'·'정수의 개수'로 되묻기를 바꾸기(★3 유지) (2) 범위를 양쪽으로 제한해(예: 중근도 아니고 두 근도 아닌) 정수 후보가 유한 개가 되게 하면 ★3~4 (3) 정수 대신 자연수 조건으로 바꿔 해가 없음을 답하게 하면 기각 단계가 강해져 ★4."
```

```yaml
- id: GN-M31-146-04
  page: 146
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $2x^2+ax+b=0$ 이 중근 $-1$ 을 가질 때 상수 $a$, $b$ 에 대하여 $ab$ 의 값을 고르는 5지선다.
  category: "중근과 $x^2$ 계수로 $2(x+1)^2=0$ 조립 → 계수 비교 → $ab$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근이 주어질 때 이차방정식의 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중근이 값까지 주어져 있으므로 판별식으로 돌아갈 필요 없이 $2(x+1)^2=2x^2+4x+2$ 로 바로
    조립하고 계수 비교로 $a$, $b$ 를 읽으면 된다. 143-04 의 조립 도구를 그대로 쓰는 문항이고
    $ab$ 되묻기도 한 줄이다. 판별식 경로를 택하면 연립이 되어 느려지지만 그 갈림이 답을 가르지는
    않으므로 전략 통찰로 세지 않았다. 통찰 0 · M_total 6 · 시험대비 구역에서 −1 쪽을 택해 ★2.
  tier: star_2
  mechanism_primary: "중근 -1 · x^2 계수 2 → 2(x+1)^2=0 전개 → a, b 계수 비교 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/146-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근의 값과 $x^2$ 의 계수를 바꿀 수 있다. 제약: 전개 계수가 정수로 떨어지도록 중근이 분수면 $x^2$ 계수를 그 분모의 제곱 배수로 두고, 되묻는 식($ab$)의 값이 선택지에서 구별되도록 $a$, $b$ 가 모두 $0$ 이 아니게 한다."
    creative: "(1) 중근 값을 감추고 '중근을 가질 때 $a+b$ 의 최솟값'처럼 범위를 묻기(★3) (2) $a$ 만 주고 중근과 $b$ 를 구하게 하는 역방향(★2~3) (3) $x^2$ 의 계수를 문자로 두면 미지수 3개 연립이 되어 ★3~4."
```

```yaml
- id: GN-M31-146-05
  page: 146
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $x^2-3x+2=0$ 의 두 근을 $\alpha$, $\beta$ 라 할 때 $\alpha+1$, $\beta+1$ 을 두 근으로 하고
    $x^2$ 의 계수가 $3$ 인 이차방정식을 고르는 5지선다.
  category: "두 근 구하기 → 각 근에 $1$ 더하기 → 새 근으로 방정식 재조립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 근을 답으로 쓰지 않고 $\\alpha+1$, $\\beta+1$ 로 평행이동한 값을 다시 '두 근'으로 놓아 방정식을 재조립하는 층위 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 이차방정식의 두 근을 변형한 값을 근으로 하는 이차방정식 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^2-3x+2=0$ 을 인수분해해 $\alpha=1$, $\beta=2$ 를 얻고, 각각에 $1$ 을 더한 $2$, $3$ 을 두 근으로
    $3(x-2)(x-3)=0$ 을 다시 조립한다. 앞 단계의 '답'이 뒤 단계의 '재료'로 역할이 바뀌는 지점이
    이 범위에서 가장 긴 사슬이고(I-EQV d1), $x^2$ 의 계수 $3$ 을 전개 뒤 모든 항에 분배해야 한다.
    선택지가 $3x^2-9x+6=0$(원래 근 그대로)과 $3x^2-21x+36=0$(근을 2배·3배로 오인) 같은 오답을
    깔아 두어 중간 단계 실수가 그대로 선택지로 유도된다. 통찰 1 · M_total 7 · 시험대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "x^2-3x+2=0 인수분해 → α=1, β=2 → 새 근 2, 3 → 3(x-2)(x-3)=0 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/146-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 방정식의 두 근과 평행이동 값, 새 $x^2$ 계수를 바꿀 수 있다. 제약: 원래 방정식이 정수 범위에서 인수분해돼야 중3 도구로 풀리고(판별식으로는 근을 못 얻는다), 이동한 두 근이 서로 달라야 하며, 오답 선택지가 '이동하지 않은 근'·'근을 상수배한 근'에서 나오도록 숫자를 배치한다."
    creative: "(1) 변형을 $2\\alpha$, $2\\beta$ 나 $\\alpha-1$, $\\beta-1$ 로 바꾸기(★3 유지) (2) $\\alpha+\\beta$, $\\alpha\\beta$ 를 두 근으로 두면 한 겹 더해져 ★3~4 (3) 원래 방정식을 인수분해되지 않게 만들면 중3 범위에서 근과 계수의 관계가 필요해져 단원 밖(★4 · I-XU)."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 9 · ★3 4 · ★4 0 · ★5 0
- 구역별: 개념원리 확인하기 4문(전부 ★1) · 핵심문제 익히기 8문(★2 7 · ★3 1) · 이런 문제가 시험에 나온다 5문(★2 2 · ★3 3)
- 통찰형 3 · 절차형 14 · premium 0. 통찰은 모두 depth 1 이고 유형은 I-EQV 2(145-c4 · 146-05) · I-VF 1(146-03)뿐이다. 단원의 두 도구(판별식 부호 판정 · 두 근으로 방정식 조립)를 적용하는 것 자체는 표준 절차로 보고 통찰로 세지 않았다.
- type_hint 상위 5: 「$b^2-4ac$ 의 부호로 근의 개수 판정」 5문(143-01 · 143-02 · 144-h1 · 144-c1 · 146-01) · 「중근을 가질 조건으로 미지수 구하기」 4문(144-h2 · 144-c2 · 146-02 · 146-04) · 「근을 가질 조건에 따른 미지수의 범위」 3문(145-h3 · 145-c3 · 146-03) · 「두 근과 $x^2$ 계수로 이차방정식 만들기」 3문(143-03 · 143-04 · 145-h4) · 「구한 값을 다시 두 근으로 쓰는 2단 조립」 2문(145-c4 · 146-05)
- M_total 분포: 4 → 3문 · 5 → 4문 · 6 → 2문 · 7 → 6문 · 8 → 2문. Mₛ 은 대부분 1~2 로 낮고 부담은 Mₖ(판별식 반복 계산)와 Mₐ(미지수 $k$)·Mₜ(등호 포함 · $x^2$ 계수 $\ne0$)에 몰려 있다.
- 대상층: 하위권 4 · 중하위권 8 · 중위권 4 · 중상위권 1(146-03). 상위권 슬롯은 없다.
- 그림: 1문(`crop:fig-143-01.png` · 143-01 의 3열 표). 표 자체가 발문이므로 숫자 변형 시 그림을 다시 그려야 한다.
- 답 출처: 본문 답 4문(144-h1 · 144-h2 · 145-h3 · 145-h4 — 핵심문제) · 답지 13문. 골조를 잡는 과정에서 전사본 answer 와 어긋나 보이는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-144-c2 | 확인문제 구역(★2 출발)이나 $k$ 가 $x^2$ 계수와 상수항에 동시에 들어가 $k$ 의 이차방정식 + $k\ne0$ 검토까지 필요해 M_total 8(이 범위 최대)로 ★3 으로 올림. 짝 핵심문제 144-h2(★2)와 한 단 차이 | ★2 / ★3 |
| GN-M31-145-c4 | 통찰 1개(I-EQV d1)로 +1 조건에는 못 미쳐 구역 ★2 를 유지했으나, 짝 핵심문제 145-h4(★2)보다 단계가 한 겹 많다. 카탈로그를 만들 때 「구한 계수를 다시 근으로」를 별도 유형으로 세울지에 따라 ★3 | ★2 / ★3 |
| GN-M31-146-01 | 시험대비 구역이라 ★3 도 가능하나 골조가 확인하기 143-02 드릴과 동일한 판별식 스캔(통찰 0 · M_total 5)이라 ★2 로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ⑴ 「판별식의 부호로 근의 개수 판정」(계산 방향)과 ⑵ 「근의 개수 조건으로 미지수 구하기」(역방향)는 base ★ 가 달라야 한다(전자 ★1~2, 후자 ★2~3). ⑶ 「중근 조건」과 ⑷ 「근의 존재 조건(부등식)」은 산출물이 값 대 범위로 갈리고 등호 처리 함정이 후자에만 있으므로 분리한다. ⑸ 「두 근과 $x^2$ 의 계수로 방정식 조립」은 앞의 판별식 계열과 도구가 전혀 달라 별도 뿌리(base ★1~2).
- **통합해도 될 유형**: 「중근을 가질 조건으로 미지수 구하기」의 세 변종 — 미지수가 상수항에만(144-h2 · ★2) · 두 계수에 걸쳐 $k$ 의 이차방정식이 되는 경우(144-c2 · 146-02 · ★3) · 중근 값까지 주어진 경우(146-04 · ★2) — 은 한 유형의 난이도 층으로 묶는 편이 낫다. 미지수의 위치가 곧 base ★ 를 정하는 축이다.
- 「구한 값을 다시 두 근으로 쓰는 2단 조립」(145-c4 · 146-05)은 독립 유형이라기보다 조립 유형(⑸)에 붙는 **되묻기 변형**이므로 카탈로그에서는 변형 슬롯으로 관리하는 편이 낫다. 다만 이 범위에서 통찰형 3문 중 2문이 여기서 나왔으므로 변형 출제 때 가장 먼저 쓸 축이다.
- 「범위를 구한 뒤 정수 후보를 거르는 되묻기」(146-03)는 이 단원 고유가 아니라 부등식 계열 전반에 붙는 사후 필터(I-VF)다. 카탈로그에서는 단원 유형이 아니라 **공통 되묻기 카드**로 등록해 여러 유형에 얹는 편이 재사용성이 높다.
- 이 단원에는 「계산력 강화하기」 구역이 없어 순수 드릴 문항이 확인하기 4문뿐이다. ★1 슬롯이 필요하면 143-02·143-04 를 숫자 변형해 늘리는 것이 가장 싸다.
