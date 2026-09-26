---
name: mechanism-데이터-GN-M31-22
description: 개념원리 중학 3-1 · 22 이차함수의 최댓값과 최솟값(1/1 · 205~208쪽 · 16문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 수학 3-1 · 전사본 latex-bank/gn-m31
  section: 22 이차함수의 최댓값과 최솟값
  unit_code: "22"
  part: "1/1"
  extract_range: "205~208쪽 · 205-01~208-05"
  total_problems: 16
  unit_total: 16
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 22 이차함수의 최댓값과 최솟값 (1/1) 정독 데이터 (v1.0)

205~208쪽 16문항 전수. 구역은 「개념원리 확인하기」 3문 · 「핵심문제 익히기」 8문(핵심문제 h 4 + 짝 확인문제 c 4) · 「이런 문제가 시험에 나온다」 5문이다. 개념원리 중학은 난이도 표시(level)가 없고 **구역 자체가 난이도 층**이며, 추가 신호는 태그 「UP」(207-h4 · 208-05) 뿐이다. 그래서 ★ 출발점은 확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3(UP +1)으로 잡고 M_total·통찰로 ±1 조정했다.

단원 전체가 **"완전제곱식으로 고쳐 꼭짓점을 읽는다"** 하나의 도구에 얹혀 있어 절차형이 압도적이다. 통찰이 붙는 곳은 매개변수 k 가 들어간 세 문항(207-h4 · 207-c4 · 208-05)뿐이고, 여기서만 「k 를 상수로 본 최댓값 M」을 다시 「k 의 이차함수」로 보는 표현 전환(I-RT)이 필요하다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-205-01
  page: 205
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 이차함수의 그래프가 주어졌을 때 꼭짓점의 좌표와 최댓값·최솟값을 빈칸에 써넣기.
    ⑴ 아래로 볼록(최솟값만 존재) · ⑵ 위로 볼록(최댓값만 존재).
  category: "그래프에서 꼭짓점 읽기 → 볼록 방향으로 최대·최소 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 이차함수의 최댓값·최솟값 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그래프에서 꼭짓점을 읽고 볼록 방향으로 최대·최소 중 어느 쪽만 존재하는지 판단하는 정의 확인 한 단계.
    "최댓값은 없고"라는 빈칸 문형이 존재 여부 판단을 그대로 알려 주므로 함정도 약하다.
    확인하기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그래프의 꼭짓점 (p, q) 읽기 → 아래로 볼록이면 최솟값 q(최댓값 없음) · 위로 볼록이면 최댓값 q(최솟값 없음)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(1,\,-5)$, $-5$ ⑵ $(-3,\,4)$, $4$'
  answer_source: "답지"
  figure: "crop:fig-205-01.png"
  latex: latex-bank/gn-m31/items/205-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 좌표를 격자 위 다른 정수점으로 옮길 수 있음. 제약: 그림의 축 눈금·꼭짓점 라벨이 함께 바뀌어야 하고, 볼록 방향과 '최댓값/최솟값 중 어느 쪽이 없는가'가 짝이 맞아야 함. 꼭짓점 y좌표는 눈금에서 읽히는 정수로."
    creative: "(1) 꼭짓점이 x축 위(q=0)라 최솟값이 0인 그래프 — ★1 유지 (2) 그래프 대신 몇 개의 점을 표로 주고 대칭성으로 꼭짓점을 찾게 하면 I-SYM 1개 · ★2 (3) '최댓값이 없는 이유'를 서술하게 하면 서술형 ★2."
```

```yaml
- id: GN-M31-205-02
  page: 205
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 표준형으로 주어진 이차함수(y=x^2-7, y=-5(x-3)^2, y=3(x-4)^2+2, y=-2(x+1)^2-3)의
    최댓값 또는 최솟값과 그때의 x의 값 구하기.
  category: "표준형에서 a의 부호·꼭짓점 읽기 → 최대·최소 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준형 y=a(x-p)^2+q 의 최댓값·최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변형 없이 a의 부호와 꼭짓점을 그대로 읽는 정의 적용. 네 소문항이 같은 한 줄 절차의 반복이다.
    꼭짓점이 y축 위(⑴)·x축 위(⑵)인 특수형이 섞여 있는 것이 유일한 주의점.
    확인하기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=a(x-p)^2+q 에서 a의 부호 판정 → x=p 일 때 a>0 이면 최솟값 q, a<0 이면 최댓값 q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 최솟값: $-7$, $x=0$ ⑵ 최댓값: $0$, $x=3$ ⑶ 최솟값: $2$, $x=4$ ⑷ 최댓값: $-3$, $x=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/205-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, p, q 를 자유롭게 바꿀 수 있음(정수 또는 간단한 분수). 제약: a의 부호가 '최댓값이냐 최솟값이냐'를 결정하므로 네 소문항이 두 부호를 고루 담고, p=0 · q=0 특수형을 최소 하나씩 남길 것."
    creative: "(1) a>0 인데 최댓값을 묻는 오답 유도 문형(정답: 최댓값 없음) — ★2 (2) 네 함수 중 최솟값이 가장 큰 것을 고르게 하면 비교 단계 추가 · ★2 (3) 꼭짓점 좌표만 주고 식을 세우게 하는 역방향 — I-BW · ★2."
```

```yaml
- id: GN-M31-205-03
  page: 205
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 일반형 이차함수(y=(1/2)x^2+2x+5, y=-3x^2+6x-7)를 완전제곱식으로 고치는 과정의 빈칸
    (평행이동 값·최대·최소를 갖는 x의 값·그때의 최솟값 또는 최댓값)을 채우기.
  category: "계수로 묶기 → 완전제곱식 → 꼭짓점에서 최대·최소 읽기(빈칸 유도)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형을 완전제곱식으로 고쳐 최댓값·최솟값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변형 결과식이 이미 주어져 있어 학생은 괄호 안의 수와 꼭짓점만 채운다. 절차가 문항 안에 인쇄된 유도형.
    분수 계수(1/2)와 음수 계수(-3)로 묶는 부분만 계산 부담이 있어 Mₖ 2.
    확인하기 구역 · 통찰 없음 · 유도 제공 → ★1. (소문항마다 과정 삽화 fig-205-03 · fig-205-03-2 가 붙지만 전사본 figure 필드는 비어 있어 none 으로 둠.)
  tier: star_1
  mechanism_primary: "x^2 의 계수로 묶기 → 완전제곱식 만들기 → y=a(x-p)^2+q 의 꼭짓점에서 x=p 일 때 최솟값·최댓값 q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$, $-2$, $3$ ⑵ $1$, $1$, $-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/205-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수 a 와 일차항 계수 b 를 바꿀 수 있음. 제약: b/a 가 짝수라야 p 가 정수로 떨어져 빈칸이 정수 답이 되고, 상수 보정 후 q 도 정수(또는 간단한 분수)여야 인쇄된 유도식과 모양이 맞음."
    creative: "(1) 빈칸을 결과식이 아니라 중간식(묶는 단계)에 두면 단계 이해를 더 요구 · ★1~2 (2) 유도식을 지우고 전 과정을 쓰게 하면 206-h1 과 같은 ★2 (3) 완성한 표준형으로 그래프의 평행이동을 함께 묻는 결합 · ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-206-h1
  page: 206
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑵ 일반형 이차함수(y=2x^2-8x+5, y=-x^2-6x-4)의 최댓값 또는 최솟값과 그때의 x의 값 구하기.
  category: "완전제곱식 변형 → 꼭짓점 → a의 부호로 최대·최소 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형을 완전제곱식으로 고쳐 최댓값·최솟값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    205-03 과 같은 골조이나 유도식이 없어 묶기·완전제곱·상수 정리 4단계를 학생이 전부 쓴다(Mₛ 2).
    계수가 정수라 계산 부담은 낮다(Mₖ 1). 이 단원의 대표 절차 문항이라 통찰 0·M_total 5 라도 −1 하지 않고 핵심문제 출발점 ★2 유지.
    [분류 이슈] 「통찰 0 · M_total ≤ 5 → −1」 규칙만 보면 ★1 후보 — 구역 신호를 우선해 ★2 로 둠.
  tier: star_2
  mechanism_primary: "x^2 의 계수로 묶기 → 완전제곱식 → 꼭짓점 (p, q) → a>0 이면 x=p 에서 최솟값 q, a<0 이면 최댓값 q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최솟값: $-3$, $x=2$ ⑵ 최댓값: $5$, $x=-3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/206-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b, c 를 바꿀 수 있음. 제약: b 가 a 의 짝수배여야 p 가 정수, q 도 정수가 됨. 두 소문항이 a>0 과 a<0 을 하나씩 맡아야 '최댓값 또는 최솟값' 문형이 살아 있음."
    creative: "(1) 꼭짓점 x좌표를 분수로 만들면 계산 마찰만 늘고 통찰은 그대로여서 질 저하(권장 안 함 · v3.8 §2.11 YELLOW) (2) 두 함수의 최솟값·최댓값을 구해 합·차를 묻기 → 208-02 형 ★2 (3) 그래프를 x축 방향으로 m 만큼 평행이동한 뒤 최솟값을 묻기 → I-RT 1개 · ★3."
```

```yaml
- id: GN-M31-206-c1
  page: 206
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제(핵심문제 짝)"
  summary: |
    ⑴~⑵ 일반형 이차함수(y=3x^2+6x+4, y=-(1/2)x^2+2x-6)의 최댓값 또는 최솟값과 그때의 x의 값 구하기.
  category: "완전제곱식 변형 → 꼭짓점 → a의 부호로 최대·최소 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형을 완전제곱식으로 고쳐 최댓값·최솟값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    206-h1 의 짝 문제로 골조가 같다. ⑵ 의 -1/2 로 묶는 과정에서 분수 계수 처리가 더해져 Mₖ 2 · M_total 6.
    통찰 없음 · 핵심문제 익히기 구역 → ★2.
  tier: star_2
  mechanism_primary: "x^2 의 계수(분수 포함)로 묶기 → 완전제곱식 → 꼭짓점에서 최솟값·최댓값 읽기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최솟값: $1$, $x=-1$ ⑵ 최댓값: $-4$, $x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/206-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수의 분모(1/2, 1/3, 2/3)와 일차항 계수를 바꿀 수 있음. 제약: (일차항 계수)/(x^2 계수)가 짝수여야 p 가 정수이고 상수 보정 뒤 q 가 정수로 떨어짐."
    creative: "(1) 분모를 크게 키우는 변형은 계산 마찰만 늘리므로 피함 (2) 최솟값을 갖는 함수와 갖지 않는(최댓값만 있는) 함수를 섞어 '둘 다 최솟값'이라 답하는 오류를 유도 · ★2 (3) 최솟값이 정수가 되는 상수항을 거꾸로 묻기 → I-BW · ★3."
```

```yaml
- id: GN-M31-206-h2
  page: 206
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    y=-x^2+8x+2a-1 의 최댓값이 3 일 때 상수 a 의 값 구하기.
  category: "완전제곱식 변형 → 최댓값을 a의 식으로 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (1) — 상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 상수항에만 있어 완전제곱 변형이 a 의 영향을 받지 않는다. 꼭짓점 y좌표 = 15+2a 를 주어진 3 과 놓고 푸는 표준 절차.
    "최댓값이 주어졌다 → 꼭짓점 y좌표다"는 이 단원의 정의 적용이므로 역방향 통찰로 인정하지 않는다(§2.2 I-BW 판별의 미정계수 대입 제외 조항).
    핵심문제 구역 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱식으로 고쳐 최댓값을 a 의 식으로 표현 → 주어진 최댓값과 등식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/206-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수)·주어진 최댓값·미지수의 계수(2a → 3a 등)를 바꿀 수 있음. 제약: 미지수는 상수항에만 두어야 이 골조가 유지되고, 일차항 계수는 x^2 계수의 짝수배여야 꼭짓점이 정수."
    creative: "(1) 미지수를 x^2 의 계수에 넣으면 볼록 방향 분기가 생겨 I-MI 1개 · ★3 (2) 아래로 볼록으로 바꿔 최솟값을 주기 — ★2 유지(206-c2 가 그 형태) (3) '최댓값이 존재하지 않을 a 의 조건'을 물으면 조건 해석이 붙어 ★3."
```

```yaml
- id: GN-M31-206-c2
  page: 206
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제(핵심문제 짝)"
  summary: |
    y=2x^2-12x+a+7 의 최솟값이 -1 일 때 상수 a 의 값 구하기.
  category: "완전제곱식 변형 → 최솟값을 a의 식으로 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (1) — 상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    206-h2 의 짝 문제를 아래로 볼록(최솟값)으로 뒤집은 것. x^2 계수 2 로 묶는 단계가 하나 더 있지만 정수 계산이다.
    통찰 없음 · 핵심문제 익히기 구역 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2 로 묶어 완전제곱 → 최솟값을 a 의 식으로 표현 → 주어진 최솟값과 등식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/206-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수·일차항 계수·주어진 최솟값을 바꿀 수 있음. 제약: 일차항 계수가 x^2 계수의 짝수배여야 꼭짓점 x좌표가 정수이고, a 는 상수항에만."
    creative: "(1) 최솟값 대신 '꼭짓점이 직선 y=x 위에 있다'를 주면 조건 통합 · I-CON 후보 ★3 (2) a 를 두 개(일차항과 상수항)로 늘리면 조건이 하나 더 필요해 207-h3 형 ★2 (3) 최솟값이 자연수가 되는 a 의 최솟값을 묻는 범위형 · ★3."
```

```yaml
- id: GN-M31-207-h3
  page: 207
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    y=x^2+ax+b 가 x=-1 일 때 최솟값 4 를 가질 때 상수 a, b 에 대하여 a+b 의 값 구하기.
  category: "꼭짓점 조건 → 표준형 역구성 → 전개해 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (2) — 일차항·상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 일차항과 상수항 양쪽에 있어 206-h2 처럼 "변형 후 상수 비교" 한 줄로는 끝나지 않고, 꼭짓점 조건에서 y=(x+1)^2+4 를 먼저 세운 뒤 전개해 계수를 비교한다.
    이 역구성은 교재가 유형으로 명시한 표준 절차라 통찰로 카운트하지 않는다(§2.2 표준 공식 대입 제외).
    핵심문제 구역 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=p 에서 최솟값 q ⇒ y=(x-p)^2+q 로 역구성 → 전개해 a, b 와 계수 비교 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/207-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 x좌표 p, 최솟값 q, 묻는 조합(a+b · ab · b-a)을 바꿀 수 있음. 제약: x^2 계수를 1 이 아닌 수로 두면 a=-2(계수)p 가 되어 정수해가 되도록 p 를 잡아야 함."
    creative: "(1) 최솟값 대신 '그래프가 점 (0, k) 를 지난다'를 함께 주면 조건 통합 · ★3 (2) x^2 계수까지 미지수로 두면 조건 하나가 더 필요해 ★3 (3) a, b 를 구한 뒤 그래프와 x축의 교점을 묻는 결합 → I-XU(이차방정식) · ★3."
```

```yaml
- id: GN-M31-207-c3
  page: 207
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제(핵심문제 짝)"
  summary: |
    y=-3x^2+ax+b 가 x=2 일 때 최댓값 6 을 가질 때 상수 a, b 에 대하여 b-a 의 값 구하기.
  category: "꼭짓점 조건 → 표준형 역구성(계수 -3) → 전개해 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (2) — 일차항·상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    207-h3 와 같은 골조이나 x^2 계수가 -3 이라 y=-3(x-2)^2+6 을 전개할 때 부호·분배 처리가 늘어 Mₖ 2 · M_total 7.
    위로 볼록이라 최댓값을 묻는 짝이 맞는지 확인하는 부호 함정(T-부호)이 하나 있다.
    통찰 없음 · 핵심문제 익히기 구역 → ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 최댓값 6 ⇒ y=-3(x-2)^2+6 으로 역구성 → 전개해 a, b 비교 → b-a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/207-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수(음수)·꼭짓점 x좌표·최댓값·묻는 조합을 바꿀 수 있음. 제약: 음수 계수를 유지해야 '최댓값' 문형이 성립하고, a=-2(계수)p 가 정수로 떨어지게 p 를 정수로."
    creative: "(1) 계수의 부호를 양수로 바꾸면서 문형은 '최댓값'으로 두면 '최댓값 없음'이 답인 판단형 · ★3 (2) 최댓값만 주고 꼭짓점 x좌표를 미지수로 두면 판별식·완전제곱 두 갈래가 생겨 I-SC · ★3~4 (3) a, b 를 구한 뒤 y절편을 묻는 결합 · ★2."
```

```yaml
- id: GN-M31-207-h4
  page: 207
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    ⑴~⑵ y=-x^2+2kx-4k+1(k 는 상수)의 최댓값을 M 이라 할 때, ⑴ M 을 k 에 대한 식으로 나타내고
    ⑵ M 의 최솟값 구하기.
  category: "k를 상수로 본 최댓값 M(k) → M을 k의 이차함수로 다시 보고 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 를 상수로 보고 얻은 최댓값 M 을 이번에는 k 를 변수로 하는 이차함수로 바꿔 보는 표현 전환(⑴⑵ 소문항이 전환 지점을 알려 줌)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최댓값의 최솟값 · 최솟값의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1단계는 x 에 대한 완전제곱(표준 절차), 2단계에서 매개변수 k 가 변수로 승격되는 이중 최적화가 이 문항의 본질이다.
    ⑴⑵ 로 전환 지점이 유도돼 통찰 깊이는 1 에 머문다(유도가 없으면 207-c4 처럼 depth 2).
    핵심문제 출발점 ★2 + UP 태그 및 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "x 에 대해 완전제곱 → M=k^2-4k+1 → M 을 k 의 이차함수로 보고 다시 완전제곱 → 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $M=k^2-4k+1$ ⑵ $-3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/207-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 2k 와 상수항 -4k+1 의 계수를 바꿀 수 있음. 제약: x 에 대한 완전제곱 뒤 남는 M(k) 가 이차식이어야 하고, M(k) 의 일차항 계수가 짝수라야 두 번째 꼭짓점의 k 값과 최솟값이 정수로 떨어짐."
    creative: "(1) 아래로 볼록으로 바꿔 '최솟값 m 의 최댓값'을 묻기 → 207-c4 · ★3 유지 (2) 유도 소문항 ⑴ 을 없애고 한 번에 묻기 → 통찰 depth 2 · ★3(208-05 형) (3) k 에 범위(예: 0 ≤ k ≤ 3)를 주면 정의역 제한 최대·최소로 바뀌어 케이스 분기 I-MI 가 추가되고 ★4."
```

```yaml
- id: GN-M31-207-c4
  page: 207
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제(핵심문제 짝)"
  summary: |
    y=x^2-4kx+8k-3(k 는 상수)의 최솟값을 m 이라 할 때 m 의 최댓값 구하기.
  category: "k를 상수로 본 최솟값 m(k) → m을 k의 이차함수로 다시 보고 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유도 소문항 없이, 최솟값 m 을 k 의 이차함수로 승격시켜야 함을 스스로 알아채야 하는 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최댓값의 최솟값 · 최솟값의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    207-h4 의 짝이지만 소문항 유도가 없어 "m 을 k 의 식으로 쓴다"는 전환을 학생이 먼저 떠올려야 한다(depth 2).
    m(k) 가 위로 볼록이 되어 이번에는 최댓값을 묻는 점에서 부호 방향이 h4 와 반대라 T-부호 주의가 있다.
    핵심문제 출발점 ★2 + 통찰 1개(depth 2) → ★3.
  tier: star_3
  mechanism_primary: "x 에 대해 완전제곱 → m=-4k^2+8k-3 → m 을 k 의 이차함수로 보고 완전제곱 → 최댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/207-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -4k 와 상수항 8k-3 을 바꿀 수 있음. 제약: 전환 뒤 m(k) 의 x^2 계수가 음수여야 '최댓값'을 물을 수 있고, m(k) 의 꼭짓점 k 값이 정수가 되도록 계수를 맞출 것."
    creative: "(1) 유도 소문항을 붙이면 depth 1 로 내려가 ★3 하한(207-h4) (2) m 의 최댓값을 주고 거꾸로 상수항 계수를 묻기 → I-BW 추가 · ★4 (3) 두 매개변수(k, 상수)로 늘리면 ★4~5 후보이나 중3 범위 밖."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-208-01
  page: 208
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    다섯 개의 이차함수(표준형) 중 최댓값이 -2 인 것을 고르는 5지선다.
  category: "선지마다 볼록 방향 판정 → 위로 볼록인 것의 꼭짓점 y좌표와 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준형 y=a(x-p)^2+q 의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 선지에서 a<0 인지(최댓값이 존재하는지)를 먼저 거른 뒤 꼭짓점 y좌표를 읽는 반복 판정. 계산은 없다.
    아래로 볼록인데 q=-2 인 선지가 섞여 있어 '최솟값 -2'를 최댓값으로 착각하는 T-부호 함정이 작동한다.
    [분류 이슈] 통찰 0 · M_total 5 만 보면 −1 로 ★1 후보이나, 존재 조건 판정이 선지마다 필요해 시험 구역 출발점 ★2 를 유지함.
  tier: star_2
  mechanism_primary: "각 선지의 a 부호 확인 → a<0 인 선지만 꼭짓점 y좌표 q 를 최댓값으로 보고 -2 와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/208-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 최댓값(-2)과 각 선지의 (a, p, q) 를 바꿀 수 있음. 제약: 아래로 볼록 선지에도 같은 q 를 심어야 존재 조건을 안 거른 학생이 걸리고, 조건을 만족하는 선지는 정확히 하나여야 함."
    creative: "(1) '최솟값이 2 인 것'으로 뒤집기 — ★2 유지 (2) 선지에 일반형을 섞으면 완전제곱 단계가 붙어 ★3 (3) '최댓값이 존재하는 것의 개수'를 물으면 전수 판정형 ★2."
```

```yaml
- id: GN-M31-208-02
  page: 208
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    y=3x^2+12x 의 최솟값을 m, y=-(1/3)x^2+2x+1 의 최댓값을 M 이라 할 때 M-m 의 값 구하기.
  category: "두 함수 각각 완전제곱 변형 → 최솟값·최댓값 → 두 값의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차함수의 최솟값·최댓값 결합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    206-h1 골조를 두 번 반복하고 마지막에 차를 구하는 결합형. 분수 계수(-1/3)로 묶는 부분이 계산 부담(Mₖ 2).
    m 이 음수라 M-m 에서 부호 처리를 틀리기 쉬운 T-부호 함정이 있다.
    통찰 없음 · 시험 구역 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 함수를 각각 완전제곱 → 아래로 볼록에서 최솟값 m, 위로 볼록에서 최댓값 M → M-m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/208-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 계수와 묻는 결합(M-m · M+m · Mm)을 바꿀 수 있음. 제약: 각 함수의 (일차항 계수)/(x^2 계수)가 짝수여야 꼭짓점이 정수이고, 두 함수의 볼록 방향이 서로 반대여야 m 과 M 을 한 번씩 쓸 수 있음."
    creative: "(1) 두 함수의 볼록 방향을 같게 하면 한쪽은 '최댓값 없음'이 되어 판단형 ★3 (2) 두 그래프의 꼭짓점 사이 거리를 묻기 → I-RT(대수↔기하) · ★3 (3) m, M 대신 두 꼭짓점을 지나는 직선의 식을 묻는 결합 · ★3."
```

```yaml
- id: GN-M31-208-03
  page: 208
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    y=-2x^2+4x+k 의 최댓값이 5 일 때 상수 k 의 값 구하기.
  category: "완전제곱식 변형 → 최댓값을 k의 식으로 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (1) — 상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    206-h2 와 같은 골조. -2 로 묶는 단계에서 부호 처리만 주의하면 꼭짓점 y좌표 = 2+k 를 5 와 놓는 한 줄이다.
    통찰 없음 · 시험 구역 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "-2 로 묶어 완전제곱 → 최댓값을 k 의 식으로 → 주어진 최댓값과 등식 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/208-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수(음수)·일차항 계수·주어진 최댓값을 바꿀 수 있음. 제약: 일차항 계수가 x^2 계수의 짝수배여야 꼭짓점이 정수이고, 미지수는 상수항에만 두어야 골조 유지."
    creative: "(1) 최댓값 대신 '최댓값이 5 이하가 되는 k 의 범위'를 물으면 부등식으로 확장 · ★3 (2) 미지수를 일차항에 옮기면 207-h3 형 ★2 (3) 그래프가 x축과 만나지 않을 조건을 함께 물으면 I-XU(이차방정식 판별) · ★3~4."
```

```yaml
- id: GN-M31-208-04
  page: 208
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    y=(1/2)x^2+ax+b 가 x=2 일 때 최솟값 -3/2 를 가질 때 상수 a, b 에 대하여 ab 의 값을 묻는 5지선다.
  category: "꼭짓점 조건 → 표준형 역구성(계수 1/2) → 전개해 계수 비교 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 미지수 구하기 (2) — 일차항·상수항에 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    207-h3 골조에 x^2 계수 1/2 과 분수 최솟값이 붙은 형태라 전개·정리에서 분수 계산이 늘어난다(Mₖ 2 · M_total 7).
    구한 a, b 를 그대로 답하지 않고 곱 ab 를 묻는 한 단계가 더 있다.
    통찰 없음 · 시험 구역 → ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 최솟값 -3/2 ⇒ y=(1/2)(x-2)^2-3/2 로 역구성 → 전개해 a, b 비교 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/208-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수(분수)·꼭짓점 x좌표·최솟값·묻는 조합(ab · a+b · a-b)을 바꿀 수 있음. 제약: a=-2(계수)p, b=(계수)p^2+q 가 선지로 쓸 만한 유리수가 되도록 p 를 정수로, q 는 분모가 같은 분수로."
    creative: "(1) 선지를 a, b 순서쌍으로 주면 판정만 남아 ★1~2 로 내려감 (2) 최솟값 대신 그래프가 지나는 두 점을 주면 연립으로 바뀌어 ★3 (3) ab 대신 a, b 를 계수로 갖는 다른 이차함수의 최솟값을 묻는 이중 구조 · ★3."
```

```yaml
- id: GN-M31-208-05
  page: 208
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "시험에 나온다"
  summary: |
    y=-x^2-6kx+18k-5(k 는 상수)의 최댓값을 M 이라 할 때 M 의 최솟값 구하기.
  category: "k를 상수로 본 최댓값 M(k) → M을 k의 이차함수로 다시 보고 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유도 소문항 없이 매개변수 k 를 변수로 승격시켜 M(k) 의 최솟값을 다시 완전제곱으로 구해야 하는 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최댓값의 최솟값 · 최솟값의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    207-h4·207-c4 와 같은 이중 최적화이나 유도 소문항이 없고 일차항 계수가 -6k 라 중간식 M(k)=9k^2+18k-5 에서 계수 9 가 나오는 대수 처리가 더 무겁다.
    위로 볼록(최댓값) → 아래로 볼록(최솟값)으로 방향이 두 번 바뀌어 T-부호 혼동이 잦은 자리다.
    시험 구역 출발점 ★2~3 + UP 태그 · 통찰 1개(depth 2) → ★3.
  tier: star_3
  mechanism_primary: "x 에 대해 완전제곱 → M=9k^2+18k-5 → M 을 k 의 이차함수로 보고 완전제곱 → 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/208-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -6k 와 상수항 18k-5 를 바꿀 수 있음. 제약: 일차항 계수가 짝수배여야 x 에 대한 꼭짓점이 k 의 정수배로 떨어지고, 그 결과 M(k) 의 꼭짓점 k 값과 최솟값이 정수가 됨."
    creative: "(1) 아래로 볼록으로 바꿔 '최솟값의 최댓값'을 묻기 → ★3 유지 (2) M 의 최솟값을 주고 상수항의 계수를 거꾸로 묻기 → I-BW 추가 · ★4 (3) k 에 정수 조건이나 범위를 주면 후보 점검·기각이 생겨 I-VF · ★4."
```

## 표본 판정 요약 (16문)

- ★ 분포: ★1 3 · ★2 10 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(207-h4 · 207-c4 · 208-05 · 모두 I-RT) · 절차형 13 · premium 0
- M_total 분포: 4 → 2문 · 5 → 3문 · 6 → 6문 · 7 → 5문 (Mₜ 는 전 문항 1 · 함정 카테고리는 대부분 T-부호 하나)
- type_hint 상위 5: 「최댓값·최솟값이 주어질 때 미지수 구하기 (1)」 3 · 「같은 유형 (2)」 3 · 「최댓값의 최솟값 · 최솟값의 최댓값」 3 · 「일반형을 완전제곱식으로 고쳐 최댓값·최솟값」 3 · 「표준형 y=a(x-p)^2+q 의 최댓값·최솟값」 2 (나머지: 그래프에서 읽기 1 · 두 함수 결합 1)
- 대상층: 하위권 3 · 중하위권 10 · 중위권 3
- 그림: 1문(`crop:fig-205-01.png`). 205-03 은 소문항 본문에 과정 삽화 2장(fig-205-03 · fig-205-03-2)이 들어 있으나 전사본 figure 필드가 비어 있어 `none`.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 드리프트가 없고, 아래 둘은 「통찰 0 · M_total ≤ 5 → −1」 규칙을 적용하지 않은 1단 차이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-206-h1 | M_total 5 · 통찰 0 → 산식상 −1(★1) 후보이나 핵심문제 구역의 대표 절차 문항이라 ★2 유지 | ★1 / ★2 |
| GN-M31-208-01 | M_total 5 · 통찰 0 → −1(★1) 후보이나 선지마다 최댓값 존재 조건을 거르는 판정이 필요해 ★2 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 사실상 5종이고 각각 2~3문씩 반복된다. 핵심문제(h)와 짝 확인문제(c)가 같은 유형을 정확히 한 번씩 더 쓰는 구조라, 카탈로그에서는 h/c 를 같은 유형의 난이도 쌍으로 묶는 편이 낫다.
- **따로 세워야 할 유형**: 「미지수 구하기 (1) 상수항형」과 「(2) 일차항·상수항형」은 교재가 한 이름 아래 (1)(2) 로 나눠 둔 것처럼 골조가 다르다 — 전자는 꼭짓점 y좌표 = 주어진 값 한 줄, 후자는 표준형 역구성 후 계수 비교라 단계 수와 Mₖ 가 다르다.
- **통합해도 될 유형**: 「그래프에서 읽기」(205-01)와 「표준형에서 읽기」(205-02 · 208-01)는 입력 표현만 다를 뿐 골조가 같다. base ★1 하나로 두고 입력 표현(그래프/식/선지)을 변형 파라미터로 두면 충분하다.
- 「최댓값의 최솟값 · 최솟값의 최댓값」은 이 단원에서 유일하게 통찰(I-RT)이 붙는 유형이다. 유도 소문항 유무로 depth 1/2 가 갈리므로 base ★3 하나로 두고 '유도 제공 여부'와 '볼록 방향'을 변형 파라미터로 기록하는 것이 적절하다. k 에 범위를 주는 순간 정의역 제한 최대·최소(중3 범위 밖)로 넘어가므로 카탈로그에서는 경계를 명시할 것.
