---
name: mechanism-데이터-GN-M31-20
description: 개념원리 중학 3-1 20 이차함수 (4)(1/1 · 192~198쪽 · 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 20 이차함수 (4)
  unit_code: GN-M31-20
  part: "1/1"
  extract_range: "192~198쪽 · 192-01~198-08"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 11문 · fig-192-01 · fig-192-04 · fig-193-h2 · fig-194-h4 · fig-196-h7 · fig-196-c7 · fig-196-h8 · fig-196-c8 · fig-197-03 · fig-198-07 · fig-198-08-2)
---

# 개념원리 중학 3-1 · 20 이차함수 (4) (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 스무 번째 소단원 「20 이차함수 (4)」 192~198쪽 28문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(192쪽) · 「핵심문제 익히기」 16문(193~196쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 8문(197~198쪽)이다. 이 단원에는 「계산력 강화하기」 구역이 없다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제 `쪽-hN` 에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼고, 짝 확인문제는 같은 type_hint 를 물려받되 골조가 갈라지는 곳에서는 더 정확한 이름으로 바꿨다.

이 범위의 도구는 사실상 하나다 — **$y=ax^2+bx+c$ 를 완전제곱해서 $y=a(x-p)^2+q$ 로 옮기기**. 꼭짓점·축·평행이동·증가와 감소·그래프 개형·최대 최소가 모두 이 한 변형 뒤에 붙는 읽기 단계다. 완전제곱 자체는 이 단원의 표준 절차이므로 통찰로 카운트하지 않았고, 대신 그 위에 얹히는 **되묻기 한 겹**을 통찰 판정 기준으로 삼았다. 이 범위에서 실제로 반복된 되묻기는 넷이다 — ⒜ 표준형을 다시 **그래프 개형**으로 옮겨 사분면 통과·개형 선지를 판정하기(193-c2 · 195-c5 · 198-05, I-RT), ⒝ 교점·꼭짓점 좌표를 **밑변과 높이라는 기하량**으로 옮기기(194-c4 · 196-h7 · 196-c7 · 198-07, I-RT), ⒞ 그림의 **축 위치를 $ab$ 의 부호**로 옮겨 $b$ 를 정하기(196-h8 · 196-c8 · 198-08, I-EQV), ⒟ 말로 준 조건(증감 경계·꼭짓점 일치·두 그래프 일치)을 **축이나 꼭짓점의 등식**으로 바꿔 미지수를 역산하기(193-c1 · 194-c3 · 195-h6, I-EQV). 나머지 14문은 표준형으로 옮긴 뒤 값을 바로 읽는 절차형이고 부담은 Mₖ(분수 계수 완전제곱)와 Mₜ(위로 볼록일 때 증감 반전 · 평행이동 부호)에 몰려 있다.

변형 설계 때는 축이 셋이다 — ⒜ 방향(식 → 값 / 값·그림 조건 → 미지 계수), ⒝ 읽어야 할 값의 층(꼭짓점 그 자체 / 사분면·개형 / 넓이 / 계수의 부호), ⒞ 그림 의존도(그림 없이 식만 / 그림이 조건 / 그림이 선지). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림이 11문으로 많고 그중 192-04 · 196-h8 · 196-c8 · 198-08 은 **그림이 곧 조건**, 193-h2 · 197-03 은 **그림이 곧 선지**이므로 숫자 변형 시 그림을 반드시 함께 다시 그려야 한다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-192-01
  page: 192
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 빈칸을 채워 $y=2x^2-8x+3$ 과 $y=-x^2-6x-5$ 를 완전제곱 꼴로 고치고,
    꼭짓점의 좌표·축의 방정식·$y$축과의 교점을 차례로 쓴 뒤 그래프를 좌표평면에 그리기.
  category: "완전제곱 변형 → 꼭짓점·축·y절편 → 그래프 그리기 (빈칸 안내형)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 를 $y=a(x-p)^2+q$ 꼴로 고쳐 그래프 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원의 도입 문항. 묶기 → 더하고 빼기 → 완전제곱의 세 칸이 식 안에 이미 뚫려 있어
    학생은 $(b/2)^2$ 만 계산해 채우면 된다. ⑵ 에서 $-1$ 로 묶는 부호 처리가 유일한 함정이고
    꼭짓점·축·$y$절편은 표준형에서 그대로 읽는다. 통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "x^2 계수로 묶기 → (b/2)^2 더하고 빼기 → a(x-p)^2+q → 꼭짓점 (p, q) · 축 x=p · y절편 c → 그래프"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$, $4$, $2$, $5$, $(2,\,-5)$, $x=2$, $(0,\,3)$ ⑵ $9$, $9$, $3$, $4$, $(-3,\,4)$, $x=-3$, $(0,\,-5)$ (그래프는 풀이 참조)'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-192-01.png"
  latex: latex-bank/gn-m31/items/192-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수와 $b$, $c$ 를 바꿀 수 있다. 제약: 빈칸이 정수로 채워지도록 $b$ 는 $2a$ 의 배수여야 하고, 모눈에 그래프를 그려야 하므로 꼭짓점과 $y$절편이 함께 모눈 안에 들어오는 크기로 둔다. ⑴ 은 아래로 볼록, ⑵ 는 위로 볼록이라는 대비를 유지한다.'
    creative: '(1) 빈칸을 지우고 완전제곱 꼴로 나타내라고만 하면 192-02 와 같아져 ★1 유지 (2) 꼭짓점과 $y$절편만 주고 원래 일반형을 복원하게 하면 역방향이 붙어 ★2 (3) 그래프를 먼저 주고 식을 쓰게 하면 기하 → 대수 표현 전환이 생겨 ★2~3.'
```

```yaml
- id: GN-M31-192-02
  page: 192
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ $y=x^2-8x+10$ 과 $y=-3x^2+12x-1$ 을 각각 $y=a(x-p)^2+q$ 꼴로 나타내기.
  category: "완전제곱 변형 (일반형 → 표준형)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수를 $y=a(x-p)^2+q$ 꼴로 고치기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원의 유일한 도구를 안내 없이 한 번씩 실행하는 문항. ⑴ 은 계수 1 이라 바로,
    ⑵ 는 $-3$ 으로 묶은 뒤 괄호 밖으로 나올 때 부호가 뒤집히는 처리가 전부다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "x^2 계수로 묶기 → (b/2)^2 더하고 빼기 → 괄호 밖 상수 정리 → a(x-p)^2+q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=(x-4)^2-6$ ⑵ $y=-3(x-2)^2+11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/192-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$, $b$, $c$ 를 자유롭게 바꿀 수 있다. 제약: $b$ 가 $2a$ 의 배수여야 $p$ 가 정수가 되고, 아니면 분수 꼭짓점이 나와 Mₖ 가 올라간다. ⑴ 은 $a=1$, ⑵ 는 $a<0$ 인 대비를 유지해야 부호 함정이 남는다.'
    creative: '(1) $a$ 를 분수로 두면($\dfrac{1}{2}$, $-\dfrac{1}{3}$) 계산 부담만 올라 ★1~2 (2) $y=a(x-p)^2+q$ 를 주고 일반형으로 전개하게 하면 역방향 ★1 (3) 두 식을 주고 꼭짓점이 같아지는 상수를 묻게 하면 193-c1 골조가 되어 ★2.'
```

```yaml
- id: GN-M31-192-03
  page: 192
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ $y=5x^2+10x-3$ 과 $y=-\dfrac{1}{2}x^2+4x+1$ 의 그래프의
    꼭짓점의 좌표와 축의 방정식을 차례대로 구하기.
  category: "완전제곱 변형 → 꼭짓점의 좌표와 축의 방정식 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 꼭짓점과 축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    192-02 에 읽기 한 줄을 덧붙인 문항. 표준형으로 고친 뒤 $(p,\,q)$ 와 $x=p$ 를 그대로 옮기면 된다.
    ⑵ 의 분수 계수로 묶기가 유일하게 손이 가는 지점이고 부호 실수 외의 함정은 없다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "a(x-p)^2+q 로 변형 → 꼭짓점 (p, q) · 축 x=p"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(-1,\,-8)$, $x=-1$ ⑵ $(4,\,9)$, $x=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/192-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 셋을 모두 바꿀 수 있다. 제약: $p=-\dfrac{b}{2a}$ 가 정수가 되도록 $b$ 를 $2a$ 의 배수로 두고, 분수 계수를 남기려면 $a$ 의 분모가 $b$ 를 나누게 한다.'
    creative: '(1) 축의 방정식만 묻고 꼭짓점은 빼면 더 가벼운 ★1 (2) 꼭짓점이 $x$축 위에 있게 하는 $c$ 를 묻게 하면 역방향 ★2 (3) 두 함수의 축이 일치하는 조건으로 바꾸면 ★2.'
```

```yaml
- id: GN-M31-192-04
  page: 192
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    그림으로 주어진 $y=ax^2+bx+c$ 의 그래프를 보고, 아래로 볼록·축이 $y$축 왼쪽·
    $y$절편이 위쪽이라는 세 근거에 대응하는 $a$, $ab$, $b$, $c$ 의 부등호를 빈칸에 써넣기.
  category: "그래프 개형 → 계수의 부호 (근거가 제시된 빈칸형)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프의 볼록 방향·축 위치·$y$절편에서 $a$, $b$, $c$ 의 부호 정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부호 판정 유형의 도입판. 세 근거 문장과 $ab$ 를 거쳐 $b$ 로 가는 중간 단계까지 모두
    인쇄돼 있어 학생은 부등호 방향만 채운다. 축이 $y$축 왼쪽 ⇔ $ab>0$ 이라는 핵심 전환이
    이미 주어진 상태이므로 통찰로 카운트하지 않았다. 통찰 0 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "아래로 볼록 → a>0 · 축이 y축 왼쪽 → ab>0 → b>0 · y절편 위쪽 → c>0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$>$, $>$, $>$, $>$'
  answer_source: "답지"
  figure: "crop:fig-192-04.png"
  latex: latex-bank/gn-m31/items/192-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수치는 없고 그림의 세 특징(볼록 방향 · 축의 좌우 · $y$절편의 상하)만 8가지 조합으로 바꾼다. 제약: 그림을 바꾸면 빈칸 네 개의 답이 모두 바뀌므로 본문 근거 문장도 함께 고쳐야 한다.'
    creative: '(1) 근거 문장을 지우고 부호만 묻게 하면 196-h8 골조가 되어 ★2 (2) $abc$ 나 $a+b+c$ 의 부호를 추가로 묻게 하면 함숫값 읽기가 붙어 ★3 (3) 부호 조건을 주고 가능한 그래프 개형을 고르게 하면 역방향 ★2.'
```

### 핵심문제 익히기

```yaml
- id: GN-M31-193-h1
  page: 193
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-2x^2+kx-5$ 의 그래프가 점 $(-1,\,-11)$ 을 지날 때
    이 그래프의 꼭짓점의 좌표와 축의 방정식을 차례대로 구하기($k$ 는 상수).
  category: "점 대입 → 미지 계수 결정 → 완전제곱 → 꼭짓점·축"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 꼭짓점과 축"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지나는 점을 대입해 $k$ 를 먼저 확정한 뒤에야 완전제곱을 할 수 있다는 순서 하나가
    192-03 과의 차이다. 두 단계 모두 표준 절차이고 $x=-1$ 대입에서 $-2x^2$ 의 부호,
    $k$ 이항의 부호가 함정. 통찰 0 · M_total 6 · 핵심문제 구역 → ★2 유지.
  tier: star_2
  mechanism_primary: "점 (-1, -11) 대입 → k 결정 → 완전제곱 → 꼭짓점 (p, q) · 축 x=p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,-3)$, $x=1$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/193-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수·상수항과 지나는 점을 바꿀 수 있다. 제약: 대입식이 $k$ 에 대한 일차식이므로 $k$ 가 정수로 떨어지도록 점의 좌표를 고르고, 이어지는 완전제곱에서 꼭짓점이 정수가 되도록 $k$ 가 $2a$ 의 배수여야 한다.'
    creative: '(1) 미지수를 상수항 $c$ 에 두면 꼭짓점의 $y$좌표만 움직여 ★2 유지 (2) 꼭짓점이 주어지고 지나는 점을 묻게 하면 역방향 ★2 (3) 미지수를 $x^2$ 의 계수에 두면 두 미지수 연립이 되어 ★3.'
```

```yaml
- id: GN-M31-193-c1
  page: 193
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-x^2-4x+7$ 과 $y=x^2-2ax+b$ 의 그래프의 꼭짓점이 일치할 때
    상수 $a$, $b$ 에 대하여 $a+b$ 의 값 구하기.
  category: "양쪽을 표준형으로 → 꼭짓점 좌표끼리 등식 → 미지수 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼭짓점이 일치한다는 말을 문자 계수 그대로 완전제곱한 꼭짓점 $(a,\\,b-a^2)$ 와 $(-2,\\,11)$ 의 좌표별 등식 두 개로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 이차함수의 꼭짓점이 일치할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치 함수 쪽은 그냥 완전제곱이지만, 문자 계수 쪽은 $a$ 를 품은 채 완전제곱해
    꼭짓점을 $(a,\,b-a^2)$ 로 문자식으로 써 둬야 비교가 된다. 이 한 겹이 이 문항의 인지 부담(I-EQV d1)이고
    $b-a^2$ 에서 $a$ 를 먼저 쓴 뒤 $b$ 를 구하는 순서가 함정이다.
    통찰 1개 d1 로 +1 조건에는 못 미쳐 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "양쪽 완전제곱 → 꼭짓점 (-2, 11) 과 (a, b-a^2) → 좌표별 등식 → a, b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/193-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치 함수의 계수와 문자 함수의 $x^2$ 계수를 바꿀 수 있다. 제약: 문자 함수의 일차항이 $-2ax$ 꼴이어야 꼭짓점의 $x$좌표가 $a$ 로 깔끔하게 나오고, 아니면 $\dfrac{a}{2}$ 같은 분수가 생겨 Mₖ 가 오른다. 수치 함수의 꼭짓점 좌표는 둘 다 정수로 둔다.'
    creative: '(1) 축만 일치한다고 하면 등식이 하나뿐이라 ★2 아래 (2) 꼭짓점이 일치하고 $y$절편이 다르다는 조건으로 바꾸면 조건 통합이 늘어 ★3 (3) 문자 함수의 $x^2$ 계수도 미지수로 두고 두 그래프가 완전히 일치한다고 하면 197-01 골조 ★2.'
```

```yaml
- id: GN-M31-193-h2
  page: 193
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=\dfrac{1}{2}x^2+2x+3$ 의 그래프인 것을 다섯 개의 그래프 그림 중에서 고르기.
  category: "완전제곱 → 볼록 방향·꼭짓점·y절편으로 선지 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프 그리기(개형 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 $\dfrac{1}{2}(x+2)^2+1$ 로 고친 뒤 볼록 방향 → 꼭짓점 → $y$절편 순으로
    선지를 지워 나가는 대조 절차. 개형 읽기는 이 단원의 표준 도구라 통찰로 세지 않았다.
    분수 계수로 묶는 계산과 꼭짓점의 $x$좌표 부호가 함정. 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "a(x-p)^2+q 로 변형 → a 의 부호로 볼록 방향 → 꼭짓점 (p, q) → y절편으로 남은 선지 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "본문 답"
  figure: "crop:fig-193-h2.png"
  latex: latex-bank/gn-m31/items/193-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 셋을 바꿀 수 있으나 선지 그림 다섯 개를 반드시 함께 다시 그려야 한다. 제약: 꼭짓점이 정수여야 그림으로 구별되고, 오답 선지는 볼록 방향만 뒤집은 것·꼭짓점의 $x$ 부호만 뒤집은 것·$y$절편만 다른 것으로 구성해 변별 지점을 유지한다.'
    creative: '(1) 그림 선지를 지우고 꼭짓점과 $y$절편을 직접 쓰게 하면 ★1~2 (2) 그래프를 주고 식을 고르게 하면 방향이 뒤집혀 ★2 (3) 지나는 사분면을 함께 묻게 하면 193-c2 통찰이 붙어 ★2~3.'
```

```yaml
- id: GN-M31-193-c2
  page: 193
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-x^2+6x-5$ 의 그래프가 지나지 않는 사분면 고르기(5지선다).
  category: "완전제곱 → 개형·절편으로 그래프를 그린 뒤 통과 사분면 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식에서 바로 읽을 수 없는 사분면 통과 여부를 판정하려고 꼭짓점·$x$절편·$y$절편을 좌표평면 위 개형으로 옮겨 그림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수의 그래프가 지나는(지나지 않는) 사분면"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 $(3,\,4)$ 와 위로 볼록까지는 표준 절차지만, 사분면 판정은 거기서 멈추면 안 되고
    $x$절편 두 개와 $y$절편까지 찍어 개형을 실제로 그려야 결정된다(I-RT d1). 꼭짓점이
    제1사분면에 있다고 제2사분면도 지난다고 넘겨짚는 것이 전형적 오답.
    통찰 1개 d1 · M_total 5 → 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "-(x-3)^2+4 로 변형 → 위로 볼록·꼭짓점 (3, 4) → x절편 1, 5 · y절편 -5 → 개형에서 통과 사분면 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/193-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: 답이 하나로 떨어지려면 $x$절편이 실수로 존재하고 부호가 한쪽으로 쏠려야 한다(여기서는 둘 다 양수라 제2사분면만 빠짐). $x$절편이 정수가 되도록 $-x^2+bx+c$ 가 인수분해되게 두고, 꼭짓점이 축의 어느 쪽에 오는지를 의도적으로 정한다.'
    creative: '(1) 지나는 사분면을 모두 고르게 하면 같은 골조 ★2 (2) 위로 볼록을 아래로 볼록으로 바꾸고 꼭짓점을 $x$축 아래로 내리면 네 사분면을 다 지나 답이 없음이 되어 함정형 ★3 (3) 계수에 미지수를 넣고 제3사분면을 지나지 않을 조건을 묻게 하면 역방향 ★3~4.'
```

```yaml
- id: GN-M31-194-h3
  page: 194
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=3x^2+6x+2$ 에서 $x$ 의 값이 증가할 때 $y$ 의 값은 감소하는
    $x$ 의 값의 범위 고르기(5지선다).
  category: "완전제곱 → 축과 볼록 방향 → 감소 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 증가·감소 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축 $x=-1$ 을 구한 뒤 아래로 볼록이므로 축 왼쪽이 감소 구간이라는 한 줄. 도구는 표준이지만
    볼록 방향에 따라 증감이 뒤집히는 T-부호 함정과 부등호 방향이 이 유형의 전부라 통찰은 없다.
    M_total 5 · 통찰 0 으로 −1 후보에 걸리나, 완전제곱과 볼록 판정 두 단계를 거치므로
    핵심문제 구역 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "3(x+1)^2-1 로 변형 → 축 x=-1 · 아래로 볼록 → 축 왼쪽이 감소 → x<-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/194-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 셋을 바꿀 수 있다. 제약: 축 $x=-\dfrac{b}{2a}$ 가 정수가 되도록 $b$ 를 $2a$ 의 배수로 두고, 선지가 $<$ 와 $>$ 를 섞어 부호 함정을 유지하도록 만든다. 상수항은 답에 영향이 없으므로 자유롭다.'
    creative: '(1) $a<0$ 으로 바꾸면 증감이 반대가 되어 같은 ★2 의 쌍둥이 문항 (2) 증가 구간과 감소 구간을 모두 쓰게 하면 ★2 유지 (3) 구간을 주고 계수를 역산하게 하면 194-c3 골조로 ★2, 구간에 미지수까지 넣으면 ★3.'
```

```yaml
- id: GN-M31-194-c3
  page: 194
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-\dfrac{1}{2}x^2+ax-4$ 가 $x<3$ 에서는 증가하고 $x>3$ 에서는 감소할 때
    상수 $a$ 의 값 구하기.
  category: "증감이 뒤바뀌는 경계 = 축 → 미지 계수 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "증가에서 감소로 바뀌는 경계가 $x=3$ 이라는 서술을 축의 방정식 $x=3$ 이라는 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "증가·감소 구간의 경계로 이차함수의 미지 계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    194-h3 의 역방향. 두 줄짜리 증감 서술을 축 하나로 압축하는 것이 유일한 인지 부담(I-EQV d1)이고,
    그 뒤는 $-\dfrac{1}{2}$ 로 묶어 축을 $a$ 로 표현하고 등식을 푸는 표준 절차다.
    $a<0$ 이라 증가 → 감소 순서가 맞는지 확인하는 부분이 함정.
    통찰 1개 d1 → 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "증가·감소 경계 x=3 → 축 x=3 → -1/2 로 묶어 축을 a 로 표현 → a=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/194-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수와 경계값을 바꿀 수 있다. 제약: $a$ 가 정수로 나오도록 경계값이 $x^2$ 계수의 $2$배와 맞아떨어져야 하고, 증가 → 감소 순서를 쓰려면 $x^2$ 의 계수가 음수여야 한다(양수로 바꾸면 서술도 감소 → 증가로 뒤집어야 한다).'
    creative: '(1) 미지수를 상수항에 두면 증감 조건으로는 결정이 안 되므로 조건을 하나 더 얹어야 해 ★3 (2) 경계값을 미지수로 주고 $a$ 와의 관계식을 묻게 하면 추상도가 올라 ★3 (3) 증감이 바뀌는 점의 함숫값(최댓값)까지 묻게 하면 ★2~3.'
```

```yaml
- id: GN-M31-194-h4
  page: 194
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    그림과 같이 $y=-x^2+5x+6$ 의 그래프가 $x$축과 만나는 두 점의 $x$좌표가
    $p$, $q\ (p<q)$ 이고 $y$축과 만나는 점의 $y$좌표가 $r$ 일 때 $p-q+r$ 의 값 구하기.
  category: "x절편 = 이차방정식의 근 · y절편 = 상수항 → 문자에 배정 후 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 $x$축·$y$축의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=0$ 으로 두어 근 $-1$, $6$ 을 얻고 $x=0$ 으로 두어 $6$ 을 얻는 두 표준 도구를 한 번씩 쓴다.
    $x$절편을 방정식의 근으로 보는 전환은 이 단원의 기본 도구라 통찰로 세지 않았다.
    실제 부담은 $p<q$ 라는 순서 지정과 $p-q$ 의 부호 처리(T-부호)에 있다.
    통찰 0 · M_total 6 · 핵심문제 구역 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=0 → -x^2+5x+6=0 의 근 -1, 6 → p<q 로 배정 · x=0 → r=6 → p-q+r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "본문 답"
  figure: "crop:fig-194-h4.png"
  latex: latex-bank/gn-m31/items/194-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: $x$절편이 정수가 되도록 이차식이 인수분해되어야 하고, 그림이 조건이므로 두 절편의 부호 배치(하나는 음수·하나는 양수)가 바뀌면 크롭도 다시 그려야 한다. 묻는 식($p-q+r$)의 부호 조합을 바꾸면 난도가 미세하게 움직인다.'
    creative: '(1) $pq$ 나 $p+q$ 를 묻게 하면 근과 계수의 관계로 절편을 구하지 않고도 풀려 ★2 (2) $\overline{\mathrm{AB}}$ 의 길이를 묻게 하면 194-c4 골조 ★2 (3) 세 점으로 삼각형의 넓이를 묻게 하면 196-c7 골조가 되어 ★2~3.'
```

```yaml
- id: GN-M31-194-c4
  page: 194
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=x^2-6x+8$ 의 그래프가 $x$축과 두 점 $\mathrm{A}$, $\mathrm{B}$ 에서 만날 때
    $\overline{\mathrm{AB}}$ 의 길이 구하기.
  category: "x절편 두 개 → 두 근의 차로 선분의 길이 환원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x$축 위 두 점 사이의 거리라는 기하량을 두 근의 차 $|q-p|$ 라는 대수량으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수의 그래프가 $x$축에서 잘라내는 선분의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근 $2$, $4$ 를 구하는 것까지는 194-h4 와 같고, 거기서 한 번 더 **좌표를 거리로** 옮기는 것이
    이 문항의 몫이다(I-RT d1). 두 점이 모두 $x$축 위라 거리 공식이 아니라 좌표의 차라는 점,
    순서에 관계없이 절댓값으로 처리해야 한다는 점이 함정.
    M_total 4 로 가볍지만 환원 한 겹이 있어 확인문제 구역 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "y=0 → x^2-6x+8=0 의 근 2, 4 → AB = |4-2| = 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/194-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: 두 근이 정수로 떨어지도록 인수분해되는 식을 쓰고, 근이 하나면(중근) 길이가 $0$ 이 되어 문항이 성립하지 않으므로 서로 다른 두 실근을 보장한다. 근의 부호를 서로 다르게 두면 차를 구할 때 부호 함정이 살아난다.'
    creative: '(1) $x$축이 아니라 직선 $y=k$ 와 잘라내는 선분의 길이로 바꾸면 이항 한 겹이 붙어 ★3 (2) 길이를 주고 상수항을 역산하게 하면 역방향 ★3 (3) 두 교점과 꼭짓점으로 삼각형의 넓이를 묻게 하면 196-h7 골조 ★2.'
```

```yaml
- id: GN-M31-195-h5
  page: 195
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-3x^2+12x-2$ 의 그래프에 대한 다섯 설명(꼭짓점·$y$절편·볼록 방향·
    $x$축과의 교점 개수·$x<2$ 에서의 증감) 중 옳지 않은 것 고르기.
  category: "완전제곱 후 표준형에서 다섯 성질을 차례로 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 성질(옳은·옳지 않은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 $-3(x-2)^2+10$ 하나를 만들어 두면 다섯 선지가 모두 거기서 읽힌다. 선지 수만큼
    반복이 있을 뿐 새 도구는 없어 절차형으로 두었다. 함정은 둘 — 위로 볼록이라 축 왼쪽이
    증가라는 T-부호(정답 선지 ⑤)와, 꼭짓점의 $y$좌표가 양수이고 위로 볼록이면 $x$축과
    두 점에서 만난다는 개수 판정(T-범위). 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "-3(x-2)^2+10 로 변형 → 꼭짓점·y절편·볼록 방향·꼭짓점 y부호로 x축 교점 개수·축 기준 증감 을 선지별로 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/195-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 셋과 어느 선지를 틀리게 할지를 바꿀 수 있다. 제약: 꼭짓점이 정수여야 선지 문장이 깔끔하고, $x$축 교점 개수 선지를 살리려면 꼭짓점의 $y$좌표 부호와 볼록 방향의 조합을 의도적으로 정해야 한다. 오답 선지는 하나만 두고 나머지 넷은 참이어야 한다.'
    creative: '(1) 옳은 것을 고르게 뒤집으면 넷을 틀리게 만들어야 해 작성 부담만 커지고 ★2 유지 (2) 사분면 통과 선지를 끼워 넣으면 개형 그리기가 필요해져 ★2~3(195-c5·198-05 골조) (3) 평행이동 선지를 넣으면 195-h6 도구가 섞여 ★3.'
```

```yaml
- id: GN-M31-195-c5
  page: 195
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=\dfrac{1}{2}x^2+3x+8$ 의 그래프에 대한 다섯 설명(축·$y$절편·지나는 사분면·
    평행이동·$x>-3$ 에서의 증감) 중 옳은 것 고르기.
  category: "완전제곱 후 표준형에서 성질 대조 + 사분면 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정답 선지인 사분면 통과를 판정하려고 꼭짓점의 $y$좌표가 양수이고 아래로 볼록이라는 정보를 그래프 개형으로 옮겨 $x$축 위쪽에만 있음을 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 성질(옳은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수 계수로 묶어 $\dfrac{1}{2}(x+3)^2+\dfrac{7}{2}$ 를 만드는 계산이 먼저다. 네 선지는
    표준형에서 바로 대조되지만 정답 ③ 만은 그래프가 $x$축 위쪽에만 있다는 개형 판단이 필요하다(I-RT d1).
    평행이동 선지의 $x$축 방향 $-3$, 증감 선지의 부등호 방향이 함정.
    통찰 1개 d1 → 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "1/2(x+3)^2+7/2 로 변형 → 축·y절편·평행이동량·증감 대조 → 최솟값 7/2>0 이므로 제1·제2사분면만 통과"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/195-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: 사분면 선지를 정답으로 두려면 꼭짓점의 $y$좌표와 볼록 방향이 같은 부호여야 하고(그래야 두 사분면만 통과), 분수 계수를 유지하려면 $b$ 가 $2a$ 의 배수여야 꼭짓점이 정수로 떨어진다. 평행이동 선지의 이동량은 꼭짓점 좌표와 부호까지 일치시켜야 오답이 된다.'
    creative: '(1) 꼭짓점을 $x$축 아래로 내리면 네 사분면을 모두 지나 사분면 선지가 오답이 되고 다른 선지를 정답으로 돌려야 함(★2) (2) 최댓값·최솟값 선지를 넣으면 다음 단원 도구가 섞여 ★3 (3) 옳지 않은 것 고르기로 뒤집으면 195-h5 와 같은 형태 ★2.'
```

```yaml
- id: GN-M31-195-h6
  page: 195
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=2x^2-8x+4$ 의 그래프를 $x$축 방향 $a$, $y$축 방향 $b$ 만큼 평행이동하면
    $y=2x^2+12x+17$ 의 그래프와 일치할 때 $a+b$ 의 값 구하기.
  category: "양쪽을 표준형으로 → 꼭짓점의 이동량으로 환원 → a, b 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 그래프가 일치한다는 조건을 꼭짓점 $(2,\\,-4)$ 가 $(-3,\\,-1)$ 로 옮겨간다는 한 점의 이동으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 평행이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형끼리는 비교가 안 되므로 양쪽을 표준형으로 고친 뒤, $x^2$ 의 계수가 같다는 점을 근거로
    모양은 같고 꼭짓점만 옮겨간 것으로 환원하는 것이 핵심(I-EQV d1). 그 뒤 $a=-3-2$,
    $b=-1-(-4)$ 는 뺄셈 두 번이다. 이동량이 음수라는 부호 처리가 함정.
    통찰 1개 d1 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "양쪽 완전제곱 → 꼭짓점 (2, -4) 와 (-3, -1) → a = -3-2, b = -1+4 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/195-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 식의 일차항·상수항을 바꿀 수 있다. 제약: $x^2$ 의 계수는 두 식이 반드시 같아야 평행이동으로 겹치고, 두 꼭짓점이 모두 정수가 되도록 각 식의 일차항 계수를 $2a$ 의 배수로 둔다. 이동량의 부호가 섞이도록 꼭짓점을 좌우·상하로 엇갈리게 배치하면 함정이 유지된다.'
    creative: '(1) 이동량을 주고 이동 후의 식을 쓰게 하면 195-c6 골조 ★2 (2) $x^2$ 의 계수를 다르게 두고 평행이동으로 겹칠 수 없음을 설명하게 하면 ★3 (3) 이동 후 그래프가 특정 점을 지난다는 조건을 덧붙이면 198-06 골조 ★2~3.'
```

```yaml
- id: GN-M31-195-c6
  page: 195
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-\dfrac{1}{3}x^2-2x+1$ 의 그래프를 $x$축 방향 $6$, $y$축 방향 $-2$ 만큼
    평행이동한 그래프의 꼭짓점의 좌표와 축의 방정식 구하기.
  category: "완전제곱 → 꼭짓점에 이동량 더하기 → 새 꼭짓점·축"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 이차함수의 그래프의 꼭짓점과 축"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    195-h6 의 순방향. 분수 계수로 묶어 꼭짓점 $(-3,\,4)$ 를 구한 뒤 이동량을 좌표에 그대로
    더하면 끝이고, 식을 다시 전개할 필요가 없다는 점만 알면 된다. 음수 이동량의 부호가 함정.
    통찰 0 · M_total 5 로 −1 후보이나 분수 완전제곱 계산이 얹혀 확인문제 구역 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "-1/3(x+3)^2+4 로 변형 → 꼭짓점 (-3, 4) → (-3+6, 4-2) = (3, 2) · 축 x=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(3,\,2)$, $x=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/195-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수와 이동량을 바꿀 수 있다. 제약: 분수 계수를 유지하려면 일차항이 그 분모와 맞물려 꼭짓점이 정수로 나오게 하고, 이동량의 부호는 $x$·$y$ 중 하나를 음수로 두어 부호 함정을 남긴다.'
    creative: '(1) 이동 후의 식을 일반형으로 쓰게 하면 전개 부담만 늘어 ★2 (2) 이동 후 꼭짓점이 원점·$x$축 위에 오도록 이동량을 역산하게 하면 ★2~3 (3) 이동 후 그래프가 지나는 점을 묻게 하면 198-06 골조 ★2.'
```

```yaml
- id: GN-M31-196-h7
  page: 196
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    그림과 같이 $y=x^2-2x-3$ 의 그래프와 $x$축의 두 교점을 $\mathrm{A}$, $\mathrm{B}$,
    꼭짓점을 $\mathrm{C}$ 라 할 때 $\triangle\mathrm{ABC}$ 의 넓이 구하기.
  category: "x절편의 차 = 밑변 · 꼭짓점의 y좌표의 절댓값 = 높이 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 세 좌표를 그대로 쓰지 않고 밑변 $\\overline{\\mathrm{AB}}$ 와 높이(꼭짓점의 $y$좌표의 절댓값)라는 기하량으로 옮겨 넓이 공식에 넣음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수의 그래프와 $x$축이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$절편 $-1$, $3$ 과 꼭짓점 $(1,\,-4)$ 를 구하는 데까지는 앞 문항들의 도구 그대로다.
    나머지 한 겹은 밑변이 $x$축 위에 있으므로 높이가 꼭짓점의 $y$좌표의 **절댓값**이라는
    좌표 → 기하량 전환(I-RT d1). 꼭짓점이 $x$축 아래라 부호를 그대로 넣으면 음수 넓이가 되는 것이 함정.
    통찰 1개 d1 · M_total 5 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "y=0 → 근 -1, 3 → 밑변 4 · 꼭짓점 (1, -4) → 높이 4 → 1/2 x 4 x 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "본문 답"
  figure: "crop:fig-196-h7.png"
  latex: latex-bank/gn-m31/items/196-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: $x$절편이 정수로 떨어지게 인수분해되는 식을 쓰고, 꼭짓점이 $x$축 아래(아래로 볼록일 때)에 오도록 판별식이 양수여야 삼각형이 생긴다. 그림이 조건이므로 볼록 방향이나 절편의 부호 배치를 바꾸면 크롭도 다시 그려야 한다. 넓이가 정수가 되도록 밑변과 높이 중 하나를 짝수로 둔다.'
    creative: '(1) 꼭짓점 대신 $y$절편을 세 번째 점으로 쓰면 196-c7 골조 ★2 (2) 넓이를 주고 상수항을 역산하게 하면 역방향 ★3 (3) 네 점(두 $x$절편·꼭짓점·$y$절편)으로 사각형의 넓이를 묻게 하면 분할이 필요해 ★3~4.'
```

```yaml
- id: GN-M31-196-c7
  page: 196
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림과 같이 $y=-x^2+x+2$ 의 그래프와 $x$축의 두 교점을 $\mathrm{A}$, $\mathrm{B}$,
    $y$축과의 교점을 $\mathrm{C}$ 라 할 때 $\triangle\mathrm{ABC}$ 의 넓이 구하기.
  category: "x절편의 차 = 밑변 · y절편 = 높이 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑변은 두 $x$절편의 차, 높이는 꼭짓점이 아니라 $y$절편(상수항)임을 좌표 배치에서 읽어 기하량으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수의 그래프와 좌표축이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    196-h7 에서 세 번째 꼭짓점만 $y$절편으로 바뀐 짝 문항. 높이를 꼭짓점의 $y$좌표로 잘못 잡는 것이
    이 문항의 주된 오답이고, $y$축 위의 점이 밑변에서 얼마나 떨어져 있는지가 곧 상수항이라는
    전환이 핵심(I-RT d1). $-x^2$ 을 정리해 인수분해하는 부호 처리가 함정.
    통찰 1개 d1 → 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "y=0 → 근 -1, 2 → 밑변 3 · x=0 → C(0, 2) → 높이 2 → 1/2 x 3 x 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-196-c7.png"
  latex: latex-bank/gn-m31/items/196-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: $x$절편이 정수로 떨어져야 하고 상수항(= 높이)은 $0$ 이 아니어야 삼각형이 생긴다. 위로 볼록·$y$절편 양수라는 그림 배치를 유지하지 않으면 크롭을 다시 그려야 한다.'
    creative: '(1) 세 번째 점을 꼭짓점으로 바꾸면 196-h7 골조 ★2 (2) $y$절편과 꼭짓점과 원점으로 삼각형을 만들면 198-07 골조가 되어 높이를 $x$좌표에서 읽어야 하므로 ★3 (3) 넓이가 주어진 값이 되도록 계수를 역산하게 하면 ★3.'
```

```yaml
- id: GN-M31-196-h8
  page: 196
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    그림으로 주어진 $y=ax^2+bx+c$ 의 그래프를 보고 상수 $a$, $b$, $c$ 의 부호 조합 고르기(5지선다).
  category: "그래프 개형 → 볼록 방향·축 위치·y절편으로 세 계수의 부호"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축이 $y$축의 어느 쪽인가라는 그림 정보를 $-\\dfrac{b}{2a}$ 의 부호, 곧 $ab$ 의 부호로 옮긴 뒤 이미 정한 $a$ 로 나누어 $b$ 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프에서 $a$, $b$, $c$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    볼록 방향에서 $a$, $y$절편에서 $c$ 를 읽는 두 단계는 정의 확인이지만, $b$ 만은 그림에서 직접
    보이지 않고 축의 위치를 거쳐야 한다. 이 우회 한 겹(I-EQV d1)이 문항의 실질이고
    $a<0$ 일 때 $ab>0$ 에서 $b$ 의 부호가 뒤집히는 나눗셈이 전형적 오답 지점이다.
    통찰 1개 d1 → 핵심문제 구역 ★2 유지.
    [분류 이슈] $b$ 의 부호 단계가 학생 오답이 몰리는 곳이라 실제 체감은 ★3 에 가깝다 — 카탈로그 설계 때 결정.
  tier: star_2
  mechanism_primary: "볼록 방향 → a · 축의 좌우 → ab 의 부호 → b · y절편의 상하 → c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "본문 답"
  figure: "crop:fig-196-h8.png"
  latex: latex-bank/gn-m31/items/196-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수치가 없는 그림 조건형이다. 그림의 세 특징(볼록 방향 · 축의 좌우 · $y$절편의 상하)을 8가지 중 하나로 바꾸고 선지 다섯 개의 부호 조합을 함께 다시 만든다. 제약: 오답 선지는 $b$ 만 뒤집은 것을 반드시 포함해야 변별이 유지된다.'
    creative: '(1) 축이 $y$축과 겹치게 두면 $b=0$ 이 되어 부등호가 아닌 등호 답이 나오는 변형 ★2~3 (2) $abc$ 나 $\dfrac{b}{a}$ 처럼 곱·몫의 부호를 묻게 하면 한 겹 더해 ★3 (3) $a+b+c$ 나 $a-b+c$ 의 부호를 함께 묻게 하면 198-08 골조 ★3.'
```

```yaml
- id: GN-M31-196-c8
  page: 196
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림으로 주어진 $y=ax^2+bx+c$ 의 그래프를 보고 상수 $a$, $b$, $c$ 의 부호를 구하기(주관식).
  category: "그래프 개형 → 볼록 방향·축 위치·y절편으로 세 계수의 부호"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축이 $y$축 오른쪽이라는 그림 정보를 $ab<0$ 으로 옮긴 뒤 $a>0$ 으로 나누어 $b<0$ 을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프에서 $a$, $b$, $c$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    196-h8 의 짝 문항으로 그림의 볼록 방향과 $y$절편이 반대쪽이고 선지가 없다. 선지가 없으므로
    소거법이 막혀 세 부호를 모두 스스로 확정해야 하고, 축이 $y$축 오른쪽 ⇔ $ab<0$ 전환이 그대로 핵심(I-EQV d1).
    통찰 1개 d1 → 확인문제 구역 ★2 유지.
    [분류 이슈] 196-h8 과 같은 유형이지만 선지 소거가 불가능해 체감 난도가 한 단 높다 — 카탈로그 설계 때 분리 여부 결정.
  tier: star_2
  mechanism_primary: "아래로 볼록 → a>0 · 축이 y축 오른쪽 → ab<0 → b<0 · y절편 아래쪽 → c<0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a>0$, $b<0$, $c<0$'
  answer_source: "답지"
  figure: "crop:fig-196-c8.png"
  latex: latex-bank/gn-m31/items/196-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '그림의 세 특징만 8가지 조합으로 바꾼다. 제약: 축이 $y$축에 겹치거나 $y$절편이 원점이면 등호 답이 되므로 부등호로만 답하게 하려면 피한다. 짝 문항 196-h8 과는 일부러 다른 조합을 써야 두 문항이 겹치지 않는다.'
    creative: '(1) 부호를 주고 알맞은 그래프 개형을 그리게 하면 역방향 ★2 (2) $b^2-4ac$ 의 부호를 함께 묻게 하면 근의 개수 단원과 묶여 ★3(I-XU) (3) 그림 없이 문장 조건(위로 볼록·축은 $y$축 왼쪽 등)으로 주면 그림 의존이 사라져 ★2.'
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-197-01
  page: 197
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=2x^2+4x+1$ 의 그래프와 $y=2(x-p)^2+q$ 의 그래프가 일치할 때
    상수 $p$, $q$ 에 대하여 $pq$ 의 값 고르기(5지선다).
  category: "완전제곱 → 표준형 계수 비교 → p, q"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱하여 $y=a(x-p)^2+q$ 와 계수 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 그래프가 일치 = 표준형이 같다는 것뿐이라 완전제곱 한 번과 계수 비교 한 줄로 끝난다.
    $2(x+1)^2-1$ 에서 $p=-1$ 로 읽어야 하는 $(x-p)$ 꼴의 부호가 유일한 함정이고
    $pq$ 는 곱 한 번. 통찰 0 · M_total 5 → 시험 구역 ★2~3 중 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "2(x+1)^2-1 로 변형 → p=-1, q=-1 → pq"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/197-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일반형의 계수 셋을 바꿀 수 있다. 제약: $p$, $q$ 가 정수가 되도록 일차항 계수를 $2a$ 의 배수로 두고, $p$ 를 음수로 두어야 $(x-p)$ 부호 함정이 남는다. 선지가 서로 구별되도록 $pq$ 값이 겹치지 않게 만든다.'
    creative: '(1) $p+q$ 나 $p-q$ 를 묻게 하면 부호 함정이 더 드러나 ★2 유지 (2) $x^2$ 의 계수까지 미지수 $a$ 로 두면 비교할 등식이 셋이 되어 ★2~3 (3) 두 식이 일치하지 않고 평행이동으로 겹친다고 하면 195-h6 골조 ★2.'
```

```yaml
- id: GN-M31-197-02
  page: 197
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=-\dfrac{1}{2}x^2+2x+k$ 의 그래프의 꼭짓점의 좌표가 $(p,\,3)$ 일 때
    $k+p$ 의 값 구하기($k$ 는 상수).
  category: "미지 상수항을 남긴 채 완전제곱 → 꼭짓점 좌표 비교 → k, p"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점의 좌표로 이차함수의 미지 계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항에만 미지수가 있어 완전제곱을 해도 꼭짓점의 $x$좌표는 $k$ 와 무관하게 먼저 확정되고,
    $y$좌표만 $k$ 를 품는다. 이 분리를 알면 $p$ 를 읽고 등식 하나만 풀면 된다.
    분수 계수로 묶기와 괄호 밖으로 나올 때의 부호가 함정. 통찰 0 · M_total 6 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "-1/2(x-2)^2+2+k 로 변형 → p=2 · 2+k=3 → k=1 → k+p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/197-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수·일차항 계수·꼭짓점의 $y$좌표를 바꿀 수 있다. 제약: 일차항 계수가 $2a$ 의 배수여야 $p$ 가 정수가 되고, 미지수는 상수항에만 두어야 한 단계로 풀린다.'
    creative: '(1) 미지수를 일차항 계수에 두면 꼭짓점의 두 좌표가 모두 그 문자에 걸려 연립이 되어 ★3 (2) 꼭짓점이 $x$축 위에 있을 조건으로 바꾸면 판별식 단원과 묶여 ★3 (3) 꼭짓점의 $x$좌표만 주고 $k$ 의 범위를 묻게 하면 부등식이 붙어 ★3.'
```

```yaml
- id: GN-M31-197-03
  page: 197
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=\dfrac{2}{3}x^2-4x+2$ 의 그래프인 것을 다섯 개의 그래프 그림 중에서 고르기.
  category: "완전제곱 → 볼록 방향·꼭짓점·y절편으로 선지 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프 그리기(개형 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    193-h2 와 같은 골조이고 계수가 분수 $\dfrac{2}{3}$ 이라 묶는 계산만 조금 무겁다.
    표준형 $\dfrac{2}{3}(x-3)^2-4$ 에서 볼록 방향 → 꼭짓점 → $y$절편 순으로 선지를 지운다.
    통찰 0 · M_total 5 → 시험 구역 ★2~3 중 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "2/3(x-3)^2-4 로 변형 → 아래로 볼록·꼭짓점 (3, -4) → y절편 2 로 남은 선지 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: "crop:fig-197-03.png"
  latex: latex-bank/gn-m31/items/197-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있으나 선지 그림 다섯 개를 함께 다시 그려야 한다. 제약: 분수 계수를 유지하려면 일차항이 그 분모와 맞물려 꼭짓점이 정수로 나와야 하고, 오답 선지는 볼록 방향·꼭짓점의 부호·$y$절편 중 하나씩만 틀리게 구성한다.'
    creative: '(1) 그림 선지를 없애고 꼭짓점·$y$절편을 쓰게 하면 ★1~2 (2) 그래프를 주고 식을 고르게 하면 역방향 ★2 (3) 그래프가 지나는 사분면이나 $x$절편의 개수를 함께 묻게 하면 개형 판단이 깊어져 ★3.'
```

```yaml
- id: GN-M31-197-04
  page: 197
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=ax^2-3x+7$ 의 그래프가 $x$축과 서로 다른 두 점에서 만나고 한 교점이 $(2,\,0)$ 일 때
    다른 한 교점의 좌표 구하기($a$ 는 상수).
  category: "교점 대입 → a 결정 → 이차방정식 다시 풀어 나머지 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x$축과의 교점을 $y=0$ 인 이차방정식의 근으로 옮기는 전환을 두 방향으로 씀 — 먼저 주어진 근으로 $a$ 를 정하고, 다시 그 방정식을 풀어 나머지 근을 좌표로 되돌림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$x$축과의 한 교점으로 미지 계수를 정하고 나머지 교점 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 → 근 → 계수 → 다시 근 → 교점으로 왕복하는 구조가 이 범위에서 가장 길다(I-RT d1).
    $(2,\,0)$ 대입으로 $a=-\dfrac{1}{4}$ 을 얻은 뒤 분수 계수를 정수화해야 인수분해가 되고,
    구한 두 근 중 이미 아는 $2$ 를 버리고 나머지를 답으로 골라 좌표 꼴로 써야 한다.
    M_total 7 · 통찰 1개 · 시험 구역 ★2~3 → ★3.
  tier: star_3
  mechanism_primary: "(2, 0) 대입 → a 결정 → ax^2-3x+7=0 을 정수화해 인수분해 → 아는 근 2 외의 근 → 좌표"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(-14,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/197-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수·상수항과 주어진 교점의 $x$좌표를 바꿀 수 있다. 제약: 대입식이 $a$ 에 대한 일차식이므로 $a$ 는 늘 정해지지만, 나머지 근이 정수로 떨어지도록 정수화한 이차식이 인수분해되어야 한다. 서로 다른 두 점에서 만난다는 단서를 살리려면 판별식이 양수여야 하고 $a \ne 0$ 을 유지한다.'
    creative: '(1) 근과 계수의 관계로 나머지 근을 바로 구하게 하면 단계가 줄어 ★2 (2) 두 교점 사이의 거리를 묻게 하면 194-c4 도구가 얹혀 ★3 (3) 교점 하나와 꼭짓점을 주고 식을 복원하게 하면 미지수 둘 연립으로 ★3~4.'
```

```yaml
- id: GN-M31-198-05
  page: 198
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=-x^2-10x-15$ 의 그래프에 대한 다섯 설명(꼭짓점·축·$y$절편·$x<-5$ 에서의 증감·
    모든 사분면 통과) 중 옳지 않은 것 고르기.
  category: "완전제곱 후 성질 대조 + 절편 부호로 사분면 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정답 선지인 모든 사분면 통과를 판정하려고 위로 볼록·꼭짓점 $(-5,\\,10)$ 에 $x$절편이 둘 다 음수라는 정보를 더해 개형을 실제로 그림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=ax^2+bx+c$ 의 그래프의 성질(옳지 않은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 네 선지는 표준형 $-(x+5)^2+10$ 에서 바로 읽히고, 정답 ⑤ 만 사분면 판정이라 개형이 필요하다(I-RT d1).
    꼭짓점이 $y$축 왼쪽 위에 있고 $x$절편 둘이 모두 음수여서 제1사분면을 지나지 않는다는 것이 핵심이며,
    위로 볼록일 때 축 왼쪽이 증가라는 T-부호가 ④ 의 함정.
    195-h5·195-c5 와 골조가 같아 구역 출발 ★2~3 중 아래쪽 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "-(x+5)^2+10 로 변형 → 꼭짓점·축·y절편·증감 대조 → x절편 두 개가 모두 음수 → 제1사분면 미통과"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/198-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: 사분면 선지를 정답으로 유지하려면 꼭짓점이 축의 한쪽으로 치우쳐 $x$절편 두 개의 부호가 같아야 한다. 꼭짓점이 정수로 나오도록 일차항을 짝수로 두고, 나머지 네 선지는 모두 참이 되게 값을 맞춘다.'
    creative: '(1) 꼭짓점을 $y$축 근처로 옮겨 $x$절편의 부호가 갈리면 네 사분면을 모두 지나 ⑤ 가 참이 되고 다른 선지를 정답으로 돌려야 함(★2) (2) 평행이동 선지를 끼우면 195-h6 도구가 섞여 ★3 (3) $x$축과의 교점의 개수를 묻는 선지를 넣으면 판별식 단원과 묶여 ★3.'
```

```yaml
- id: GN-M31-198-06
  page: 198
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    $y=\dfrac{1}{3}x^2+2x-4$ 의 그래프를 $x$축 방향 $3$, $y$축 방향 $-1$ 만큼 평행이동한
    그래프가 점 $(3,\,n)$ 을 지날 때 $n$ 의 값 구하기.
  category: "완전제곱 → 꼭짓점 이동 → 이동한 식에 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 이차함수의 그래프가 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동으로 이동한 식을 먼저 확정하고 나서야 점을 대입할 수 있다는 순서가 전부다.
    꼭짓점 $(-3,\,-7)$ 이 $(0,\,-8)$ 로 옮겨가 식이 $\dfrac{1}{3}x^2-8$ 로 단순해지는 것이
    계산을 크게 줄여 준다. 분수 계수 묶기와 $y$축 방향 $-1$ 의 부호가 함정.
    통찰 0 · M_total 5 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "1/3(x+3)^2-7 로 변형 → 꼭짓점 (-3, -7) → (0, -8) → y=1/3 x^2-8 에 x=3 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/198-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수·이동량·대입할 $x$좌표를 바꿀 수 있다. 제약: 꼭짓점이 정수가 되도록 일차항을 $2a$ 의 배수로 두고, 대입값이 정수로 떨어지도록 분수 계수와 $x$좌표를 맞춘다. 이동 후 꼭짓점이 $y$축 위에 오게 두면 계산이 짧아지고 그렇지 않게 두면 Mₖ 가 오른다.'
    creative: '(1) 지나는 점을 주고 이동량을 역산하게 하면 역방향 ★3 (2) 이동 후의 그래프가 $x$축과 만나는 점을 묻게 하면 근 구하기가 붙어 ★2~3 (3) 이동 후 꼭짓점의 좌표를 묻게 하면 195-c6 골조 ★2.'
```

```yaml
- id: GN-M31-198-07
  page: 198
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    그림과 같이 $y=\dfrac{1}{4}x^2-x-3$ 의 그래프와 $y$축과의 교점을 $\mathrm{A}$,
    꼭짓점을 $\mathrm{B}$ 라 할 때 $\triangle\mathrm{OAB}$ 의 넓이 구하기($\mathrm{O}$ 는 원점).
  category: "y축 위 선분 OA = 밑변 · 꼭짓점의 x좌표 = 높이 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑변을 $y$축 위의 선분 $\\overline{\\mathrm{OA}}$ 로 잡고 그때 높이는 꼭짓점의 $y$좌표가 아니라 $x$좌표의 절댓값임을 좌표 배치에서 읽어 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수의 그래프와 $y$축·원점이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    196-h7·196-c7 과 달리 밑변이 $x$축이 아니라 $y$축 위에 있어서, 높이를 꼭짓점의 $y$좌표로
    잡으면 틀린다. 밑변을 세로로 두면 높이는 가로 거리, 곧 꼭짓점의 $x$좌표라는 축 바꿔 읽기가
    이 문항의 몫(I-RT d1)이고 $\mathrm{A}$ 가 원점 아래라 길이를 절댓값으로 처리해야 한다.
    같은 넓이 골조에 축 전환 한 겹이 더 있고 시험 구역(★2~3) → ★3.
  tier: star_3
  mechanism_primary: "x=0 → A(0, -3) → 밑변 OA=3 · 1/4(x-2)^2-4 로 변형 → B(2, -4) → 높이 2 → 1/2 x 3 x 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-198-07.png"
  latex: latex-bank/gn-m31/items/198-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿀 수 있다. 제약: 꼭짓점이 정수여야 높이가 깔끔하고, 상수항이 $0$ 이면 $\mathrm{A}$ 가 원점과 겹쳐 삼각형이 사라진다. 꼭짓점이 $y$축 오른쪽에 있고 $\mathrm{A}$ 가 원점 아래라는 그림 배치를 바꾸면 크롭도 다시 그려야 한다.'
    creative: '(1) 세 번째 점을 $x$절편으로 바꾸면 밑변이 다시 가로가 되어 ★2 (2) 원점 대신 다른 $x$절편을 써 사각형의 넓이를 묻게 하면 분할이 필요해 ★4 (3) 넓이를 주고 상수항을 역산하게 하면 역방향 ★3~4.'
```

```yaml
- id: GN-M31-198-08
  page: 198
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    그림으로 주어진 $y=ax^2+bx+c$ 의 그래프에 대하여 보기 ㄱ($b<0$)·ㄴ($c<0$)·
    ㄷ($a+b+c>0$)·ㄹ($a-b+c<0$) 중 옳은 것을 모두 고르기.
  category: "계수의 부호 판정 + a±b+c 를 f(1), f(-1) 로 읽어 그래프에서 부호 결정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축의 위치를 $ab$ 의 부호로 옮겨 ㄱ 의 $b$ 부호를 정하고 $y$절편에서 ㄴ 의 $c$ 를 정함"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수의 식 $a+b+c$·$a-b+c$ 를 각각 $x=1$, $x=-1$ 에서의 함숫값으로 바꿔 읽고, 그 부호를 그래프가 그 자리에서 $x$축 위인지 아래인지로 판정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프에서 $a$, $b$, $c$ 의 부호와 $f(1)$, $f(-1)$ 의 부호 판정(보기 고르기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ·ㄴ 은 196-h8 과 같은 부호 판정이지만, ㄷ·ㄹ 은 계수의 합을 계수로 보지 않고
    $x=1$, $x=-1$ 을 대입한 함숫값으로 다시 읽어야 풀린다. 이 대수식 → 그래프 위 한 점의
    높이라는 전환(I-RT d2)이 이 범위 전체에서 가장 깊은 되묻기다. 네 보기를 독립적으로
    판정해야 하고 부호가 섞여 있어 T-부호·T-표기 함정도 둘.
    통찰 2개(d1·d2) · M_total 7 · 시험 구역 ★2~3 → +1 조건 충족으로 ★3.
  tier: star_3
  mechanism_primary: "볼록 방향·축 위치·y절편 → a, b, c 부호 → a+b+c = f(1) · a-b+c = f(-1) → 그래프에서 그 두 자리의 높이 부호 읽기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-198-08-2.png"
  latex: latex-bank/gn-m31/items/198-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수치가 없는 그림 조건형이다. 그림에서 바꿀 수 있는 것은 볼록 방향 · 축의 좌우 · $y$절편의 상하 · $x=1$ 과 $x=-1$ 이 두 $x$절편의 안쪽인지 바깥쪽인지 넷이며, 보기 네 개의 참거짓과 선지 다섯 개를 함께 다시 만들어야 한다. 제약: $x=\pm1$ 이 $x$절편과 겹치면 등호가 되어 보기가 성립하지 않으므로 피한다.'
    creative: '(1) 보기를 $abc$·$\dfrac{c}{a}$ 같은 곱과 몫으로 바꾸면 부호 조합만 늘어 ★3 유지 (2) $f(2)$·$f(-2)$ 처럼 절편 바깥의 값을 묻게 하면 그림에서 읽을 근거가 약해져 출제가 위태로움 (3) $b^2-4ac$ 의 부호를 보기에 넣으면 근의 개수 단원과 묶여 I-XU 가 붙고 ★4 후보.'
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 4 · ★2 21 · ★3 3 · ★4 0 · ★5 0
- 통찰형 14 · 절차형 14 · premium 0
- 통찰 유형 분포: I-RT 8 · I-EQV 6 (depth 3 없음 · depth 2 는 198-08 의 I-RT 하나뿐 · depth_score 최대 1.50)
- M_total 분포: 4 가 5문 · 5 가 10문 · 6 가 8문 · 7 가 5문 (최대 7 · 8 이상 없음)
- type_hint 상위: 「그래프에서 $a$, $b$, $c$ 의 부호」 4(192-04 · 196-h8 · 196-c8 · 198-08) · 「이차함수의 그래프가 만드는 삼각형의 넓이」 3(196-h7 · 196-c7 · 198-07) · 「그래프의 성질 고르기」 3(195-h5 · 195-c5 · 198-05) · 「완전제곱해 표준형으로 고치기·꼭짓점과 축」 5(192-01 · 192-02 · 192-03 · 193-h1 · 197-01) · 「평행이동」 3(195-h6 · 195-c6 · 198-06)
- 구역별: 개념원리 확인하기 4문 전부 ★1 절차형 · 핵심문제 익히기 16문 전부 ★2(통찰형 8) · 이런 문제가 시험에 나온다 8문은 ★2 5 · ★3 3
- 그림: 11문(`crop:fig-192-01.png` · `fig-192-04` · `fig-193-h2` · `fig-194-h4` · `fig-196-h7` · `fig-196-c7` · `fig-196-h8` · `fig-196-c8` · `fig-197-03` · `fig-198-07` · `fig-198-08-2`). 이 중 192-04 · 196-h8 · 196-c8 · 198-08 은 그림이 곧 조건, 193-h2 · 197-03 은 그림이 곧 선지여서 숫자 변형 시 크롭을 반드시 다시 만들어야 한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-194-c4 | M_total 4 로 확인하기 구역 문항과 같은 무게지만 좌표 → 거리 환원 한 겹(I-RT d1)이 있어 구역 ★2 를 유지 | ★1 / ★2 |
| GN-M31-196-h8 | 축의 위치 → $ab$ → $b$ 단계에 학생 오답이 몰려 체감은 ★3 에 가까움. 벤더 구역은 ★2 | ★2 / ★3 |
| GN-M31-196-c8 | 196-h8 과 같은 유형이나 선지 소거가 불가능한 주관식이라 체감 한 단 높음. 카탈로그에서 분리할지 결정 필요 | ★2 / ★3 |
| GN-M31-198-05 | 195-h5·195-c5 와 골조가 같은데 구역만 한 단 위(시험 구역 ★2~3). 구역만으로 ★3 을 주지 않고 ★2 로 둠 | ★2 / ★3 |
| GN-M31-198-07 | 196-h7·196-c7 과 같은 넓이 유형이지만 밑변이 $y$축 위라 높이를 $x$좌표에서 읽는 축 전환이 추가. 같은 유형으로 묶을지 분리할지 결정 필요 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ⑴ 「$a$, $b$, $c$ 의 부호」는 192-04(근거 제시 빈칸) · 196-h8/c8(부호만) · 198-08($f(1)$, $f(-1)$ 까지)로 **깊이가 세 층**이라 하나의 유형으로 묶으면 ★1 부터 ★3 까지 섞인다. 최소 두 유형(계수 부호 / 계수 부호 + 함숫값 부호)으로 나눠야 한다. ⑵ 「삼각형의 넓이」는 밑변이 $x$축인 경우(196-h7 · 196-c7)와 $y$축인 경우(198-07)가 높이를 읽는 좌표축이 달라 실질이 다르다.
- **통합해도 될 유형** — ⑴ 「완전제곱해 표준형으로 고치기」(192-02) · 「꼭짓점과 축 구하기」(192-03 · 193-h1) · 「두 그래프가 일치할 조건」(197-01)은 모두 표준형 변형 한 번 + 읽기 한 줄이므로 base ★1~2 의 한 유형으로 묶고 되묻기 층으로 변별하면 된다. ⑵ 「그래프의 성질 고르기」(195-h5 · 195-c5 · 198-05)는 선지 구성만 다를 뿐 도구가 같아 한 유형이며, 사분면 선지 포함 여부를 ★ 조정 신호로 쓰는 편이 낫다. ⑶ 평행이동은 순방향(195-c6 · 198-06)과 역방향(195-h6)을 한 유형 안의 방향 변형으로 두면 충분하다.
- **이 범위의 통찰 상한** — depth 3 이나 I-SC·I-VF·I-SYM·I-XU 가 한 문항도 없어 ★4·★5 슬롯 자격을 가진 문항이 없다. 이 단원에서 ★4 이상을 만들려면 근의 개수(판별식) 단원이나 최대·최소를 끌어와 I-XU 를 만드는 방향이 유일하다(198-08 창의 변형 (3) 참조).
