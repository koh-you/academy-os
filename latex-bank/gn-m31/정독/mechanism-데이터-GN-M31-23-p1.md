---
name: mechanism-데이터-GN-M31-23-p1
description: 개념원리 중학 3-1 23 이차함수의 활용(1/2 · 210~213쪽 · 16문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 23 이차함수의 활용
  unit_code: GN-M31-23
  part: "1/2"
  extract_range: "210~213쪽 · 210-01~213-05"
  total_problems: 16
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 6문 · fig-210-01 · fig-212-h3 · fig-212-c4 · fig-213-03 · fig-213-04 · fig-213-05)
---

# 개념원리 중학 3-1 · 23 이차함수의 활용 (1/2) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 스물세 번째 소단원 「23 이차함수의 활용」 49문항 중 앞의 16문항(210~213쪽)을 다룬다. 구역은 「개념원리 확인하기」 3문(210쪽) · 「핵심문제 익히기」 8문(211~212쪽 · 핵심문제 `쪽-hN` 과 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 5문(213쪽)이다. 나머지 33문(중단원 마무리하기 · 서술형 대비)은 2/2 파일에서 다룬다.

개념원리 중학은 문항별 난이도 등급(`level`)이 없고 태그도 거의 붙지 않으므로 **구역 자체가 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 이 범위에서 태그가 붙은 문항은 213-05(`UP`) 하나뿐이다. 핵심문제에는 본문 `type`(예제 제목: 「합 또는 차가 일정한 두 수의 곱」·「쏘아 올린 물체」·「도형의 넓이」)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 골조는 사실상 하나다 — **⑴ 변수 하나를 잡고 ⑵ 구하려는 양을 그 변수의 이차식으로 세운 뒤 ⑶ 완전제곱식 $a(x-p)^2+q$ 로 고쳐 ⑷ 꼭짓점 $(p, q)$ 에서 최댓값·최솟값과 그때의 변수값을 읽는다.** 단원의 난이도는 ⑶⑷ 가 아니라 **⑵ 식 세우기 한 단계에 전부 몰려 있다.** 그래서 이 파일은 완전제곱 변형 자체를 통찰로 카운트하지 않았고(이 단원의 학습 목표이자 표준 절차), **식 세우기가 발문을 그대로 옮기는 수준을 넘어 조건 해석이나 표현 전환을 요구할 때만** 통찰로 인정했다 — 담벽 때문에 철망이 세 변뿐임을 읽어내기(212-c4 · I-EQV), 중1 부채꼴의 둘레·넓이 두 공식을 이차함수와 결합하기(212-c5 · I-XU), 접어 올린 단면·선분 분할·좌표평면의 점을 대수식으로 옮기기(213-03 · 213-04 · 213-05 · I-RT). 나머지 11문은 절차형이고 부담은 Mₖ(음수 계수나 $\frac{1}{2}$ 묶기)과 Mₜ(T-범위: 정의역 제한, T-부호: 줄이는 쪽과 늘리는 쪽)에 몰려 있다.

변형 설계 때는 축이 셋이다 — ⒜ 소재(두 수 → 쏘아 올린 물체 → 평면도형 → 좌표평면), ⒝ 식이 주어지는가(211-h2·211-c2·213-02 는 이차식을 발문이 주므로 완전제곱 드릴이고, 나머지는 학생이 세워야 한다), ⒞ 묻는 것(최댓값만 / 그때의 변수값만 / 둘 다). 특히 ⒝ 는 같은 소재에서 ★ 를 한 단 올리거나 내리는 가장 싼 손잡이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림은 6문이며 대부분 발문이 구조를 글로도 설명하지만, 210-01(빈칸 풀이 표)과 213-03(철판 전개도)은 그림이 곧 발문이므로 숫자를 바꾸면 그림을 반드시 다시 그려야 한다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-210-01
  page: 210
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    합이 $16$ 인 두 수의 곱의 최댓값과 그때의 두 수를 구하는 풀이의 빈칸 열 개를 채우기.
    한 수를 $x$ 로 두는 첫 칸부터 완전제곱식으로 고쳐 꼭짓점을 읽는 마지막 칸까지 과정이 그대로 인쇄돼 있다.
  category: "변수 설정 → 곱을 이차식으로 → 완전제곱 → 꼭짓점 읽기 (유도형 빈칸)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 일정한 두 수의 곱의 최댓값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원 전체의 골조(문장 → 이차식 → 완전제곱 → 꼭짓점)를 빈칸으로 한 번 따라 쓰는 도입 문항.
    두 수를 $x$ 와 $16-x$ 로 두는 첫 칸만 스스로 채우면 나머지는 인쇄된 식을 따라 읽으면 된다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "두 수를 x, 16-x 로 설정 → y=x(16-x)=-(x-8)^2+64 → 꼭짓점에서 최댓값 64, 두 수 8과 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16-x$, $16-x$, $16-x$, $8$, $64$, $8$, $64$, $64$, $8$, $8$'
  answer_source: "답지"
  figure: crop:fig-210-01.png
  latex: latex-bank/gn-m31/items/210-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 16 을 다른 수로 바꾼다. 제약: 합이 홀수면 최댓값이 (합/2)^2 = 분수가 되어 빈칸의 정수 꼴이 깨지므로 짝수로 두고, 최댓값이 세 자리 안쪽이 되게 20 이하를 쓴다. 빈칸 풀이가 그림으로 인쇄돼 있어 숫자를 바꾸면 그림을 다시 그려야 한다."
    creative: "(1) 합 대신 차가 일정한 두 수로 바꾸면 아래로 볼록이 되어 최솟값 문항(★1 유지 · 210-02 가 그 형태) (2) 빈칸을 모두 없애고 서술하게 하면 211-h1 과 같은 ★2 (3) '두 수가 자연수' 조건을 붙이면 꼭짓점이 답이 되지 않는 경우까지 따져야 해 사후 검증(I-VF)이 붙고 ★3."
```

```yaml
- id: GN-M31-210-02
  page: 210
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    차가 $4$ 인 두 수의 곱의 최솟값과 그때의 두 수 구하기.
    ⑴ 작은 수를 $x$ 라 할 때 곱 $y$ 를 $x$ 의 식으로 나타내기 ⑵ 곱의 최솟값 ⑶ 곱이 최소일 때의 두 수.
  category: "차가 일정 → 두 수를 x, x+4 로 → 아래로 볼록 이차식 → 꼭짓점에서 최솟값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "차가 일정한 두 수의 곱의 최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소문항 셋이 골조의 세 단계를 그대로 나눠 물으므로 학생은 각 단계를 한 줄씩만 쓰면 된다.
    합이 아니라 차가 일정하므로 $x^2$ 의 계수가 $+1$ 이고 아래로 볼록 → 최솟값이라는 방향만 놓치지 않으면 된다(T-부호).
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "작은 수를 x 로 두면 큰 수는 x+4 → y=x(x+4)=(x+2)^2-4 → x=-2 에서 최솟값 -4, 두 수 -2와 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=x(x+4)$ ⑵ $-4$ ⑶ $-2$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/210-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차 4 를 다른 짝수로 바꾼다. 제약: 차가 홀수면 꼭짓점의 $x$ 가 분수가 되어 ⑶ 의 두 수가 정수로 떨어지지 않는다. 차를 $d$ 라 하면 최솟값은 항상 $-(d/2)^2$ 이므로 답이 예측 가능한 꼴로 유지된다."
    creative: "(1) 큰 수를 $x$ 로 두게 유도해 $y=x(x-4)$ 로 세우면 같은 답·다른 식(★1 유지 · 두 설정이 같은 결론임을 묻는 소문항을 붙이면 ★2) (2) 소문항 유도를 없애고 한 문장으로 묻기(211-c1 의 ★2) (3) '두 수의 제곱의 합의 최솟값'으로 바꾸면 식 세우기가 한 겹 깊어져 ★2~3(213-04 골조)."
```

```yaml
- id: GN-M31-210-03
  page: 210
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    둘레의 길이가 $20\,\mathrm{cm}$ 인 직사각형의 최대 넓이와 그때의 가로·세로 구하기.
    ⑴ 가로를 $x$ 라 할 때 넓이 $y$ 를 $x$ 의 식으로 ⑵ 최대 넓이 ⑶ 넓이가 최대일 때의 가로와 세로.
  category: "둘레 조건 → 가로+세로=10 → 넓이 이차식 → 꼭짓점에서 최댓값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "둘레의 길이가 일정한 직사각형의 최대 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    둘레 $20$ 에서 곧바로 세로를 $20-x$ 로 쓰는 실수(둘레의 절반이 $10$ 이라는 T-단위 함정)만 넘기면
    이후는 210-01 과 같은 합이 일정한 두 수의 곱이다. ⑴ 이 식을 $y=x(10-x)$ 로 지정해 주어 그 함정마저 유도로 막아 준다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "둘레 20 → 가로+세로=10 → y=x(10-x)=-(x-5)^2+25 → x=5 에서 최대 넓이 25, 정사각형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=x(10-x)$ ⑵ $25\,\mathrm{cm}^2$ ⑶ $5\,\mathrm{cm}$, $5\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/210-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레 20 을 다른 4의 배수로 바꾸면 ⑶ 의 가로·세로가 정수로 떨어진다. 제약: 둘레가 4의 배수가 아니면 최댓값이 분수가 되고, 넓이 단위 cm^2 를 답에 유지해야 한다. 둘레를 그대로 두고 ⑴ 의 힌트 식만 지우면 난이도가 한 단 오른다."
    creative: "(1) 넓이를 주고 둘레의 최솟값을 묻는 역방향은 중3 범위 밖이므로 피하고, 대신 '넓이가 $24\\,\\mathrm{cm}^2$ 이상이 되는 가로의 범위'로 바꾸면 이차부등식이라 역시 범위 밖 (2) 둘레 일부가 벽이라 철망이 세 변뿐인 설정으로 바꾸면 212-c4 의 ★2 (3) 직사각형 대신 밑변과 높이의 합이 일정한 삼각형으로 바꾸면 $\\frac{1}{2}$ 계수가 붙어 212-c3 의 ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-211-h1
  page: 211
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    합이 $20$ 인 두 수의 곱의 최댓값과 그때의 두 수 구하기. 유도 소문항 없이 한 문장으로 묻는다.
  category: "변수 설정 → 곱의 이차식 → 완전제곱 → 최댓값과 그때의 두 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합 또는 차가 일정한 두 수의 곱 (본문 예제 제목)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    210-01 과 골조가 같지만 빈칸·소문항 유도가 모두 빠져 변수 설정부터 꼭짓점 읽기까지 네 단계를 스스로 세워야 한다(Mₛ 2).
    이 단원의 대표 예제이므로 이후 문항이 참조하는 기준 골조 역할을 한다.
    통찰 0 이라 −1 후보이지만 유도 제거로 식 세우기가 학생 몫이 된 점을 반영해 핵심문제 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "두 수를 x, 20-x 로 설정 → y=-(x-10)^2+100 → 최댓값 100, 두 수 10과 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$, $10$, $10$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/211-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 20 을 짝수 범위에서 바꾼다. 제약: 홀수면 두 수가 분수가 되어 '두 수를 구하시오'의 답이 지저분해진다. 최댓값 = (합/2)^2 이므로 합을 키우면 계산 부담만 커지고 골조는 그대로다."
    creative: "(1) 합을 음수로 주면 두 수가 음수 쌍이 되어 부호 함정이 생기고 ★2 유지 (2) '두 수의 곱이 $96$ 일 때 합의 최솟값'처럼 방향을 뒤집으면 중3 범위를 넘는다 — 대신 '곱이 최대일 때 두 수의 차'를 묻는 되묻기 한 겹이 ★2 안에서 가장 싸다 (3) 두 수에 '자연수' 조건을 붙여 꼭짓점 근처 정수 후보를 검증하게 하면 I-VF 가 붙어 ★3."
```

```yaml
- id: GN-M31-211-c1
  page: 211
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    차가 $8$ 인 두 수의 곱이 최소가 될 때의 두 수 구하기. 최솟값 자체는 묻지 않는다.
  category: "차가 일정 → 아래로 볼록 이차식 → 꼭짓점의 x → 두 수 복원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "차가 일정한 두 수의 곱이 최소일 때의 두 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    210-02 의 유도 없는 판이며, 묻는 것이 최솟값이 아니라 그때의 두 수라 꼭짓점의 $y$ 가 아닌 $x$ 를 읽고
    다시 $x$ 와 $x+8$ 로 되돌리는 한 겹이 더 붙는다. 답이 $-4$ 와 $4$ 로 부호가 갈리는 점이 확인 포인트(T-부호).
    통찰 0 · M_total 5 이지만 되돌리기 단계를 반영해 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "작은 수 x, 큰 수 x+8 → y=(x+4)^2-16 → x=-4 → 두 수 -4와 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/211-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차 8 을 짝수로 바꾼다. 제약: 홀수면 두 수가 반정수가 되어 답이 분수로 나온다. 차가 $d$ 면 답은 항상 $-d/2$ 와 $d/2$ 이므로 숫자 변형만으로는 난이도가 변하지 않는다."
    creative: "(1) 최솟값과 두 수를 함께 묻게 하면 210-02 와 같아지고 ★2 유지 (2) '두 수의 합의 최솟값'으로 바꾸면 곱이 아니라 합이 일차식이 되어 최솟값이 없어진다 — 함정 문항으로 쓰려면 정의역 제한을 붙여야 하고 중3 범위를 넘는다 (3) 차가 일정하고 '두 수의 제곱의 합'을 묻게 바꾸면 계수 2 가 붙는 이차식이 되어 ★2~3."
```

```yaml
- id: GN-M31-211-h2
  page: 211
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    지면에서 $120\,\mathrm{m}$ 높이에서 초속 $50\,\mathrm{m}$ 로 위로 던진 물체의 $t$ 초 후 높이가 $h=-5t^2+50t+120$ 일 때,
    최고 높이에 도달할 때까지 걸린 시간과 그때의 높이 구하기.
  category: "주어진 이차식 → 완전제곱 → 꼭짓점의 t 와 h 를 시간·높이로 해석"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체의 최고 높이와 그때의 시간 (본문 예제 제목)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식 세우기 단계가 발문에서 완제품으로 주어지므로 남는 일은 $-5$ 를 묶어 완전제곱으로 고치는 계산뿐이다(Mₖ 2).
    난이도는 골조가 아니라 음수 계수 묶기와 상수항 $120$ 을 마지막에 더하는 처리에 있다.
    통찰 0 · M_total 5 이지만 계수 $-5$ 처리 부담을 반영해 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "h=-5t^2+50t+120 → -5(t-5)^2+245 → t=5 에서 최고 높이 245"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$초, $245\,\mathrm{m}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/211-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속(일차항 계수)과 처음 높이(상수항)를 바꾼다. 제약: 중력 계수는 $-5$ 로 고정하고 일차항 계수를 $10$ 의 배수로 두어야 꼭짓점의 $t$ 가 정수로 떨어진다. 처음 높이는 최고 높이에만 더해지므로 어떤 값이어도 골조가 유지된다."
    creative: "(1) 완전제곱 대신 축 $t=-b/2a$ 로 시간만 먼저 구하고 대입하게 하면 같은 ★2 (2) '지면에 떨어질 때까지 걸린 시간'을 묻으면 $h=0$ 인 이차방정식이 되어 다른 단원과 결합(I-XU)되고 ★3 (3) '높이가 $200\\,\\mathrm{m}$ 이상인 시간의 범위'는 이차부등식이라 중3 범위를 넘는다."
```

```yaml
- id: GN-M31-211-c2
  page: 211
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    지면에서 초속 $30\,\mathrm{m}$ 로 쏘아 올린 물체의 $x$ 초 후 높이가 $y=30x-5x^2$ 일 때,
    최고 높이 도달 시간과 그때의 높이 구하기.
  category: "주어진 이차식(항 순서 뒤바뀜) → 내림차순 정리 → 완전제곱 → 꼭짓점 해석"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체의 최고 높이와 그때의 시간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    211-h2 와 같은 골조인데 식이 $30x-5x^2$ 로 내림차순이 아니게 인쇄돼 있어 정리 한 줄이 먼저 필요하다.
    지면에서 쏘았으므로 상수항이 없어 계산은 오히려 가볍다.
    통찰 0 · M_total 5 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "y=-5x^2+30x 로 정리 → -5(x-3)^2+45 → x=3 에서 최고 높이 45"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$초, $45\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/211-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속을 $10$ 의 배수로 바꾸면 꼭짓점의 $x$ 가 정수로 유지된다. 제약: 계수 $-5$ 고정. 항 순서를 뒤바꿔 인쇄하는 것 자체가 이 문항의 변형 포인트이므로 숫자를 바꿔도 그 배치는 유지한다."
    creative: "(1) 상수항(처음 높이)을 붙이면 211-h2 와 같은 ★2 (2) 그래프 개형을 함께 주고 꼭짓점 좌표를 읽게 하면 표현 전환(I-RT d1)이 붙어 ★2~3 (3) 두 물체의 식을 동시에 주고 어느 쪽이 더 높이 올라가는지 비교하게 하면 계산 두 벌 + 비교로 ★3."
```

```yaml
- id: GN-M31-212-h3
  page: 212
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    가로 $9\,\mathrm{cm}$, 세로 $5\,\mathrm{cm}$ 인 직사각형에서 가로를 $x\,\mathrm{cm}$ 줄이고 세로를 $x\,\mathrm{cm}$ 늘여 만든
    새 직사각형의 최대 넓이와 그때의 $x$ 값 구하기. 그림은 원래 직사각형과 늘고 주는 방향을 보여 준다.
  category: "줄고 느는 변을 x 로 표현 → 넓이 (9-x)(5+x) → 완전제곱 → 꼭짓점"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변의 길이를 늘이고 줄인 직사각형의 최대 넓이 (본문 예제 제목: 도형의 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 $x$ 가 한쪽에는 $-$, 다른 쪽에는 $+$ 로 붙는 것(T-부호)과 가로가 남아 있어야 하므로 $0<x<9$ 라는
    정의역 제한(T-범위)이 함정 둘이다. 식 세우기는 발문을 그대로 옮기는 수준이라 통찰로 카운트하지 않았다.
    전개 후 $-x^2+4x+45$ 를 완전제곱으로 고치는 계산이 이 구역에서 가장 무겁다(Mₖ 2) → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "새 가로 9-x, 새 세로 5+x → y=(9-x)(5+x)=-(x-2)^2+49 → x=2 에서 최대 넓이 49"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$49\,\mathrm{cm}^2$, $2$'
  answer_source: "본문 답"
  figure: crop:fig-212-h3.png
  latex: latex-bank/gn-m31/items/212-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로 9·세로 5 를 바꾼다. 제약: 꼭짓점 $x=($가로$-$세로$)/2$ 가 정수가 되려면 두 변의 차가 짝수여야 하고, 그 $x$ 가 $0<x<$가로 안에 있어야 답이 유효하다. 가로와 세로가 같으면 꼭짓점이 $x=0$ 이 되어 문항이 성립하지 않는다."
    creative: "(1) 줄이는 양과 늘리는 양을 $x$ 와 $2x$ 로 다르게 주면 $x^2$ 의 계수가 $-2$ 가 되어 ★3 (2) '넓이가 원래보다 커지는 $x$ 의 범위'를 물으면 이차부등식이라 범위 밖 (3) 둘레가 일정하다는 조건으로 바꾸면 210-03 의 ★1 로 내려간다 — 이 문항의 ★ 는 '한 변은 줄고 한 변은 는다'는 부호 대비에서 나온다."
```

```yaml
- id: GN-M31-212-c3
  page: 212
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    밑변의 길이와 높이의 합이 $12\,\mathrm{cm}$ 인 삼각형의 최대 넓이 구하기.
  category: "합이 일정한 두 길이 → 넓이 = 1/2 · 밑변 · 높이 → 완전제곱 → 최댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑변과 높이의 합이 일정한 삼각형의 최대 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    210-03(직사각형)과 같은 '합이 일정한 두 수의 곱'이지만 삼각형이라 $\frac{1}{2}$ 이 앞에 붙어
    $x^2$ 의 계수가 $-\frac{1}{2}$ 이 되고 완전제곱 계산이 분수로 흐른다(Mₖ 2). 골조 자체는 그대로다.
    통찰 0 · M_total 6 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "밑변 x, 높이 12-x → y=(1/2)x(12-x)=-(1/2)(x-6)^2+18 → x=6 에서 최대 넓이 18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/212-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 12 를 다른 짝수로 바꾼다. 제약: 합이 홀수면 꼭짓점의 $x$ 가 반정수가 되고 최댓값이 분수가 된다. 최댓값은 항상 (합/2)^2/2 이므로 합을 4의 배수로 두면 답도 정수로 떨어진다."
    creative: "(1) '최대 넓이일 때의 밑변과 높이'까지 묻게 하면 되묻기 한 겹(★2 유지) (2) 삼각형을 사다리꼴(윗변+아랫변이 일정, 높이 고정)로 바꾸면 이차식이 되지 않으니 대신 높이를 변수에 연동시켜야 하고 ★3 (3) 직각삼각형의 두 변의 합이 일정하다고 주고 빗변이 아니라 넓이를 묻는 설정으로 바꾸면 그림 해석이 붙어 ★2~3."
```

```yaml
- id: GN-M31-212-c4
  page: 212
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    길이가 $28\,\mathrm{m}$ 인 철망으로 한쪽 벽면(담벽)을 한 변으로 쓰는 직사각형 울타리를 만들 때 내부의 최대 넓이 구하기.
    담벽 쪽에는 철망을 치지 않으며 철망의 두께는 생각하지 않는다.
  category: "담벽 조건 → 철망은 세 변뿐 → 2x+y=28 → 넓이 이차식 → 완전제곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'담벽에는 철망을 치지 않는다'를 '둘레 네 변이 아니라 마주 보는 두 변 + 한 변만 28' 즉 2x+y=28 로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 변이 벽인 울타리(철망 길이 일정)의 최대 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘레가 일정한 직사각형(210-03)과 겉보기는 같지만 철망이 세 변뿐이라 조건식이 $2x+y=28$ 로 바뀌고,
    그 결과 $x^2$ 의 계수가 $-2$ 가 되어 꼭짓점이 '정사각형'이 아닌 곳에 생긴다. 이 조건 치환이 문항의 전부이고
    학생이 가장 많이 틀리는 지점이라 I-EQV d1 로 카운트했다. 통찰 1개·depth 1 이라 +1 조건에는 못 미쳐 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "벽과 수직인 두 변 x, 나머지 한 변 28-2x → S=x(28-2x)=-2(x-7)^2+98 → x=7 에서 최대 98"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$98\,\mathrm{m}^2$'
  answer_source: "답지"
  figure: crop:fig-212-c4.png
  latex: latex-bank/gn-m31/items/212-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철망 길이 28 을 다른 4의 배수로 바꾼다. 제약: 꼭짓점 $x=$ 길이$/4$ 가 정수여야 하고 최댓값은 길이$^2/8$ 이므로 길이를 4의 배수로 두면 둘 다 정수로 떨어진다. 벽에 닿는 변을 $x$ 로 잡으면 계수가 $-1/2$ 이 되므로 어느 변을 $x$ 로 둘지 답지와 맞춰 둔다."
    creative: "(1) 벽을 두 면(ㄱ자 모서리)으로 바꾸면 철망이 두 변뿐이라 210-03 과 같아져 ★2 로 내려간다 (2) 울타리를 가운데 칸막이로 나누는 설정을 더하면 조건식이 $3x+y=28$ 이 되어 계수가 $-3$, ★3 (3) '넓이가 최대일 때 벽에 닿는 변의 길이'를 함께 물으면 되묻기 한 겹이 붙고 ★2 유지."
```

```yaml
- id: GN-M31-212-c5
  page: 212
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    길이가 $20\,\mathrm{cm}$ 인 철사를 구부려 부채꼴을 만들 때, 넓이가 최대가 되는 부채꼴의 반지름의 길이 구하기.
  category: "부채꼴 둘레 2r+호 → 호를 r 로 표현 → 넓이 (1/2)·r·호 → 완전제곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중1 「원과 부채꼴」의 두 공식(둘레 = 2r + 호, 넓이 = (1/2)·r·호)을 함께 꺼내 호를 소거해야 이차함수로 넘어갈 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "둘레가 일정한 부채꼴의 최대 넓이(반지름)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 유일하게 다른 단원의 공식이 없으면 식 자체를 세울 수 없는 문항이다. 부채꼴의 둘레가
    호만이 아니라 반지름 두 개를 포함한다는 점, 넓이가 $\frac{1}{2}rl$ 로도 쓰인다는 점을 둘 다 알아야
    $l=20-2r$ 을 대입해 $S=r(10-r)$ 에 도달한다. 중심각을 구하려 들면 풀이가 막힌다는 점에서 진입 저항이 실제로 있다.
    I-XU d1 · M_total 6 → 확인문제 구역 ★2 에서 +1 해 ★3. [분류 이슈] 통찰 1개·depth 1 이라 +1 조건을 엄밀히는 충족하지 않음 — 후보 ★2/★3.
  tier: star_3
  mechanism_primary: "2r+l=20 → l=20-2r → S=(1/2)rl=r(10-r)=-(r-5)^2+25 → r=5 에서 최대"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/212-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철사 길이 20 을 다른 4의 배수로 바꾼다. 제약: 반지름은 길이$/4$, 최대 넓이는 길이$^2/16$ 이므로 4의 배수라야 둘 다 정수다. 호의 길이가 양수여야 하므로 $0<r<10$ 이라는 제한이 숨어 있고, 답 $r=5$ 는 이때 중심각이 $2$ 라디안 상당이 되어 중1 의 각도 표기로는 딱 떨어지지 않는다 — 중심각을 묻는 변형은 피한다."
    creative: "(1) 최대 넓이 자체를 묻게 바꾸면 같은 골조 ★3 (2) 부채꼴 대신 반원+직사각형(운동장 트랙) 설정으로 바꾸면 $\\pi$ 가 계수에 남아 답이 지저분해지므로 권하지 않는다 (3) 부채꼴을 원뿔의 전개도로 연결하면 단원 결합이 한 겹 더 붙어 ★4 후보."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-213-01
  page: 213
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    두 수 $x$, $y$ 에 대하여 $x+y=32$ 일 때 $xy$ 의 최댓값. 5지선다.
  category: "합이 일정 → y=32-x 대입 → 곱의 이차식 → 꼭짓점의 최댓값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 일정한 두 수의 곱의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    210-01·211-h1 과 완전히 같은 골조이고, 변수 설정조차 발문이 $x$, $y$ 로 대신 해 주어 대입 한 번이면 식이 선다.
    선택지가 있어 최댓값이 $16^2$ 꼴임을 알면 계산 없이도 고를 수 있다.
    [분류 이슈] 시험대비 구역은 ★2~3 출발이지만 통찰 0 · M_total 4 로 확인하기 수준이라 ★2 로 둠 — 후보 ★1/★2.
  tier: star_2
  mechanism_primary: "y=32-x 대입 → xy=x(32-x)=-(x-16)^2+256 → 최댓값 256"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/213-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 32 를 짝수로 바꾸고 선택지를 (합/2)^2 주변의 그럴듯한 값으로 재배치한다. 제약: 오답 선택지에 (합/2)^2 보다 큰 값을 하나 넣어야 '최댓값'의 의미를 확인할 수 있고, 합의 제곱을 그대로 쓴 값(1024 류)은 대표적인 오답이므로 넣어 둘 만하다."
    creative: "(1) $x-y=32$ 로 바꾸면 최솟값 문항이 되고 선택지가 음수가 되어 ★2 유지 (2) $x+y=32$ 에 '$x$, $y$ 는 자연수' 를 붙이면 꼭짓점이 정수라 답은 같지만 검증 한 겹이 생겨 ★2~3 (3) $x^2+y^2$ 의 최솟값으로 바꾸면 계수 2 가 붙어 213-04 골조가 되고 ★3."
```

```yaml
- id: GN-M31-213-02
  page: 213
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    높이 $30\,\mathrm{m}$ 인 건물 옥상에서 초속 $20\,\mathrm{m}$ 로 던진 공의 $x$ 초 후 높이가 $y=-5x^2+20x+30$ 일 때,
    가장 높이 올라가는 데 걸린 시간 구하기. 높이는 묻지 않는다.
  category: "주어진 이차식 → 완전제곱(또는 축) → 꼭짓점의 x 만 읽기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체가 최고 높이에 도달하는 시간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    211-h2 의 축소판으로, 최고 높이는 묻지 않고 시간만 요구하므로 상수항 $30$ 은 아예 쓸 일이 없다.
    $-5$ 를 묶어 $-5(x-2)^2+50$ 까지 가거나 축 $x=-b/2a$ 만 써도 되므로 두 경로가 모두 짧다.
    통찰 0 · M_total 5 · 시험대비 구역 출발점에서 골조가 핵심문제와 동일해 ★2.
  tier: star_2
  mechanism_primary: "y=-5x^2+20x+30 → 축 x=2 (또는 -5(x-2)^2+50) → 2초"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$초'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/213-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 $10$ 의 배수로 두면 꼭짓점의 $x$ 가 정수로 떨어진다. 제약: 계수 $-5$ 고정, 상수항(건물 높이)은 답에 영향이 없으므로 자유. 최고 높이까지 묻게 바꾸려면 상수항을 정수 답이 나오게 골라야 한다."
    creative: "(1) '최고 높이'까지 함께 물으면 211-h2 와 같아지고 ★2 유지 (2) '공이 던진 지점과 같은 높이로 돌아오는 시간'을 물으면 대칭성 활용(I-SYM d1)이 붙어 ★3 (3) '지면에 닿는 시간'은 이차방정식 풀이와 결합(I-XU)되어 ★3."
```

```yaml
- id: GN-M31-213-03
  page: 213
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    너비 $40\,\mathrm{cm}$ 인 철판의 양쪽을 $x\,\mathrm{cm}$ 씩 수직으로 접어 올려 단면이 직사각형인 물받이를 만들 때,
    빗금친 단면의 넓이가 최대가 되게 하는 $x$ 의 값 구하기. 그림은 접기 전 철판과 접은 뒤 단면을 함께 보여 준다.
  category: "전개도 → 단면의 가로 40-2x · 세로 x → 넓이 이차식 → 꼭짓점의 x"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접어 올린 입체(전개도)를 단면 직사각형으로 옮겨 가로가 40-x 가 아니라 40-2x 임을 읽어냄 — 기하 → 대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "양쪽을 접어 올린 물받이 단면의 최대 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    문항의 승부처는 완전제곱이 아니라 '양쪽'이라는 단어를 $2x$ 로 옮기는 한 줄이다($40-x$ 로 쓰면 그대로 틀린다).
    세로가 $x$, 가로가 $40-2x$ 이고 둘 다 양수라야 하므로 $0<x<20$ 이라는 정의역 제한(T-범위)과
    2배 처리(T-부호·T-단위 계열)가 함정 둘이다. I-RT d1 · M_total 7 · 시험대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "단면 세로 x, 가로 40-2x → S=x(40-2x)=-2(x-10)^2+200 → x=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: crop:fig-213-03.png
  latex: latex-bank/gn-m31/items/213-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "너비 40 을 다른 4의 배수로 바꾼다. 제약: 답 $x=$ 너비$/4$ 와 최대 넓이 너비$^2/8$ 이 모두 정수가 되려면 4의 배수라야 하고, 그림이 곧 발문이므로 숫자를 바꾸면 전개도의 치수 라벨($40$, $x$, $x$)을 다시 그려야 한다."
    creative: "(1) 한쪽만 접는 설정으로 바꾸면 $2x$ 가 사라져 통찰이 빠지고 ★2 (2) 양쪽을 다른 높이로 접게 하면 변수가 둘이라 중3 범위 밖 (3) 단면 넓이 대신 '물받이의 부피'(길이 일정)를 물으면 상수배만 붙어 ★3 유지 — 난이도를 올리려면 접은 뒤 양 끝을 다시 안쪽으로 접는 2단 설정이 필요하고 그때 계수가 $-4$ 가 되며 ★4."
```

```yaml
- id: GN-M31-213-04
  page: 213
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    길이가 $8\,\mathrm{cm}$ 인 선분 $\mathrm{AB}$ 위의 한 점 $\mathrm{P}$ 에 대하여 $\overline{\mathrm{AP}}$, $\overline{\mathrm{BP}}$ 를
    각각 한 변으로 하는 두 정사각형을 만들 때 두 넓이의 합의 최솟값 구하기.
  category: "선분 분할 x 와 8-x → 두 정사각형 넓이의 합 → 정리 후 완전제곱 → 최솟값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "선분 위 점의 위치 하나를 두 정사각형 넓이의 합 x^2+(8-x)^2 이라는 한 개의 이차식으로 옮김 — 도형 → 대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "선분을 나누어 만든 두 정사각형의 넓이의 합의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 유일하게 두 개의 도형 넓이를 더해 하나의 이차식으로 만드는 문항이라 전개·정리가 한 겹 더 든다.
    전개하면 $2x^2-16x+64$ 로 $x^2$ 의 계수가 $2$ 가 되어 완전제곱 묶기가 앞의 문항들과 다르고(Mₖ 2),
    $0<x<8$ 정의역과 '합이 아니라 곱이 아님'을 혼동하지 않는 것이 함정이다. I-RT d1 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "AP=x, BP=8-x → S=x^2+(8-x)^2=2(x-4)^2+32 → x=4 에서 최솟값 32"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$32\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: crop:fig-213-04.png
  latex: latex-bank/gn-m31/items/213-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 길이 8 을 다른 짝수로 바꾼다. 제약: 최솟값이 길이$^2/2$ 이므로 짝수라야 정수로 떨어지고, 홀수면 $\\mathrm{P}$ 가 중점이 아닌 반정수 위치가 되어 답이 분수가 된다. 그림의 $8\\,\\mathrm{cm}$ 라벨도 함께 고친다."
    creative: "(1) 정사각형 대신 두 원의 넓이의 합으로 바꾸면 $\\pi$ 가 공통 인수로 남아 답이 $\\pi$ 를 포함하는 ★3 (2) '넓이의 합이 최소일 때 $\\overline{\\mathrm{AP}}$ 의 길이'를 묻는 되묻기는 ★3 유지 (3) 두 정사각형의 둘레의 합으로 바꾸면 일차식이 되어 최솟값이 사라진다 — 오답 유도 보기로만 쓴다 (4) 정사각형 하나를 정삼각형으로 바꾸면 계수가 무리수가 되어 중3 범위 밖."
```

```yaml
- id: GN-M31-213-05
  page: 213
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "시험대비"
  summary: |
    직선 $y=-2x+8$ 위의 제$1$사분면 위의 점 $\mathrm{P}$ 에서 $x$ 축, $y$ 축에 내린 수선의 발을 각각 $\mathrm{Q}$, $\mathrm{R}$ 라 할 때
    직사각형 $\mathrm{OQPR}$ 의 넓이의 최댓값 구하기($\mathrm{O}$ 는 원점).
  category: "직선 위의 점을 (x, -2x+8) 로 → 변의 길이 = 좌표 → 넓이 이차식 → 꼭짓점"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 위의 점을 매개변수 (x, -2x+8) 로 두고 직사각형의 가로·세로를 그 좌표 자체로 읽음 — 좌표기하 → 대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선 위의 점으로 만든 직사각형의 넓이의 최댓값(좌표평면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 유일한 좌표평면 문항이고 M_total 8 로 최대다. 점의 좌표를 문자로 두는 것(Mₐ 2),
    가로 $=x$·세로 $=-2x+8$ 이 그대로 변의 길이라는 좌표기하 해석, 제$1$사분면 조건이 곧 $0<x<4$ 라는
    정의역 제한(T-범위)과 두 좌표가 모두 양수라는 부호 조건(T-부호)이 겹친다.
    [분류 이슈] `UP` 태그는 +1(★4)을 가리키지만 통찰 1개·depth 1 이고 골조는 표준 좌표 설정 한 겹이라 ★3 으로 둠 — 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "P(x, -2x+8) → S=x(-2x+8)=-2(x-2)^2+8 → x=2 에서 최댓값 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: crop:fig-213-05.png
  latex: latex-bank/gn-m31/items/213-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기와 $y$ 절편을 바꾼다. 제약: 기울기는 음수(제$1$사분면에 직사각형이 생기려면)여야 하고, 꼭짓점 $x=y$절편$/(2\\times|$기울기$|)$ 와 최댓값 $y$절편$^2/(4|$기울기$|)$ 가 정수로 떨어지게 $y$ 절편을 $|$기울기$|$ 의 배수로 둔다. 그림의 직선식 라벨을 함께 고친다."
    creative: "(1) 직사각형 대신 삼각형 $\\mathrm{OQP}$ 의 넓이로 바꾸면 $\\frac{1}{2}$ 만 붙어 ★3 유지 (2) 직선을 포물선 $y=-x^2+8$ 위의 점으로 바꾸면 넓이가 삼차식이 되어 중3 범위 밖 (3) 점 $\\mathrm{P}$ 를 두 직선 사이로 제한하거나 직사각형의 둘레가 일정하다는 조건을 더하면 조건 통합이 생겨 ★4 (4) '넓이가 최대일 때 점 $\\mathrm{P}$ 의 좌표'를 묻는 되묻기가 ★3 안에서 가장 싼 변형이다."
```

## 표본 판정 요약 (16문)

- ★ 분포: ★1 3 · ★2 9 · ★3 4 · ★4 0 · ★5 0
- 통찰형 5(212-c4 I-EQV · 212-c5 I-XU · 213-03 · 213-04 · 213-05 I-RT) · 절차형 11 · premium 0
- 통찰 유형 분포: I-RT 3 · I-EQV 1 · I-XU 1. 모두 depth 1 이며 depth 2 이상은 없다. 이 범위는 완전제곱 변형이 아니라 **식 세우기 한 단계**에서만 통찰이 발생한다.
- M_total: 4 가 4문(210-01·210-02·210-03·213-01) · 5 가 4문 · 6 이 2문 · 7 이 5문 · 8 이 1문(213-05, 최대). 부담은 Mₖ(음수 계수·$\frac{1}{2}$·계수 2 묶기)와 Mₜ(T-범위 정의역 제한 · T-부호 늘고 주는 방향)에 몰려 있다.
- type_hint 상위: 「합/차가 일정한 두 수의 곱」 5(210-01·210-02·211-h1·211-c1·213-01) · 「쏘아 올린 물체」 3(211-h2·211-c2·213-02) · 「길이 조건이 일정한 평면도형의 넓이」 4(210-03·212-h3·212-c3·212-c4) · 「전개도·분할 도형의 넓이」 2(213-03·213-04) · 「좌표평면 위의 직사각형」 1(213-05) · 「부채꼴」 1(212-c5)
- 대상층: 하위권 3 · 중하위권 8 · 중위권 4 · 중상위권 1(212-c5, I-XU 라 중위권 허용 유형 밖)
- 그림: 6문(`crop:fig-210-01.png` · `crop:fig-212-h3.png` · `crop:fig-212-c4.png` · `crop:fig-213-03.png` · `crop:fig-213-04.png` · `crop:fig-213-05.png`). 이 중 210-01(빈칸 풀이 표)과 213-03(철판 전개도)은 그림이 곧 발문이라 숫자 변형 시 그림을 반드시 다시 그려야 한다. 나머지 넷은 발문이 구조를 글로도 설명한다.
- 답 출처: 본문 답 3문(211-h1 · 211-h2 · 212-h3 — 핵심문제) · 답지 13문. 골조를 잡는 과정에서 전사본 answer 와 어긋나 보이는 문항은 없었다.
- 태그: `UP` 1문(213-05). 이 범위의 유일한 벤더 태그다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-212-c5 | 확인문제 구역(★2 출발)이나 중1 「원과 부채꼴」의 둘레·넓이 두 공식이 없으면 식 자체를 세울 수 없어 I-XU d1 로 +1 해 ★3 으로 올림. 다만 「통찰 2개 이상 또는 depth 3」이라는 +1 조건을 엄밀히는 충족하지 않는다 | ★2 / ★3 |
| GN-M31-213-01 | 시험대비 구역이라 ★2~3 이 출발점이지만 골조가 확인하기 210-01·핵심문제 211-h1 과 동일하고 변수 설정마저 발문이 대신 해 주어 통찰 0 · M_total 4(이 범위 최소 타이). ★2 로 두되 실질은 ★1 | ★1 / ★2 |
| GN-M31-213-05 | 이 범위의 유일한 `UP` 태그(+1 후보)이고 M_total 8 로 최대이나, 통찰은 I-RT d1 한 개뿐이고 골조는 「직선 위의 점을 매개변수로」라는 표준 한 겹이라 ★3 으로 둠 | ★3 / ★4 |
| GN-M31-212-c4 | 「담벽에는 철망을 치지 않는다」를 $2x+y=28$ 로 옮기는 조건 치환(I-EQV d1)이 문항의 전부이고 오답률이 높은 지점이지만, +1 조건 미달로 구역 ★2 유지. 짝 핵심문제가 없는 확인문제라 비교 기준이 없다 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ⑴ 「합 또는 차가 일정한 두 수의 곱」(base ★1~2 · 이 범위 5문으로 최다)과 ⑵ 「쏘아 올린 물체」(base ★2)는 **이차식이 주어지는가**로 갈린다 — ⑵ 는 식 세우기가 없어 사실상 완전제곱 드릴이므로 ⑴ 과 base ★ 가 달라야 한다. ⑶ 「길이 조건이 일정한 평면도형의 넓이」(base ★2)는 조건식이 $x+y=k$ 인지 $2x+y=k$ 인지로 다시 층이 갈리고(212-c4 가 후자), ⑷ 「전개도·분할 도형의 넓이」(base ★3 · 213-03·213-04)는 그림을 대수식으로 옮기는 I-RT 가 필수라 ⑶ 과 분리한다. ⑸ 「좌표평면 위의 도형의 넓이」(base ★3 · 213-05)는 도구가 좌표기하라 별도 뿌리.
- **통합해도 될 유형**: 「합이 일정한 두 수의 곱」과 「차가 일정한 두 수의 곱」은 $x^2$ 의 계수 부호(최대 대 최소)만 다르고 골조가 같으므로 한 유형의 두 변종으로 묶는다. 「직사각형의 최대 넓이(둘레 일정)」(210-03)와 「삼각형의 최대 넓이(밑변+높이 일정)」(212-c3)도 $\frac{1}{2}$ 계수 하나 차이이므로 같은 유형의 난이도 층으로 본다.
- 이 단원의 base ★ 를 정하는 축은 **식 세우기의 난이도 하나**다. 완전제곱 변형·꼭짓점 읽기는 전 문항 공통이므로 변별에 기여하지 않는다. 카탈로그를 세울 때 유형별 base ★ 는 「⒜ 식이 주어짐 ★2 → ⒝ 발문 문장을 그대로 옮기면 됨 ★2 → ⒞ 조건을 한 번 치환해야 함 ★2~3 → ⒟ 그림·좌표를 대수식으로 옮겨야 함 ★3」의 네 층으로 잡는 것이 이 범위 실측과 가장 잘 맞는다.
- **정의역 제한(T-범위)을 답에 쓰는 문항이 이 범위에 없다.** 212-h3·213-03·213-04·213-05 모두 꼭짓점이 정의역 안에 들어 있어 제한이 함정으로만 작동한다. 꼭짓점이 정의역 밖에 놓여 끝점에서 최댓값이 나오는 설정은 ★4~5 슬롯의 가장 강한 후보이며(I-VF 가 붙는다) 이 범위에는 한 문항도 없으므로 변형 출제 때 최우선으로 만들 축이다.
- ★4 이상이 0 문이다. 2/2 파일(중단원 마무리 STEP 2·3 · 서술형)에서 ★4 후보가 나올 것으로 보이며, 이 범위에서 ★4 슬롯이 필요하면 213-03(2단 접기) · 213-05(조건 추가)의 creative 변형이 가장 싸다.
