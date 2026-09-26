---
name: mechanism-데이터-GN-M31-21
description: 개념원리 중학 3-1 21 이차함수의 식 구하기(1/1 · 200~203쪽 · 16문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 21 이차함수의 식 구하기
  unit_code: GN-M31-21
  part: "1/1"
  extract_range: "200~203쪽 · 200-01~203-04"
  total_problems: 16
  unit_total: 16
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 3문 · fig-201-h1 · fig-202-h4 · fig-203-02)
---

# 개념원리 중학 3-1 · 21 이차함수의 식 구하기 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 스물한 번째 소단원 「21 이차함수의 식 구하기」 200~203쪽 16문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(200쪽 · 빈칸 채우기 유도형) · 「핵심문제 익히기」 8문(201~202쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 4문(203쪽)이다. 이 단원에는 「계산력 강화하기」 구역이 없다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 도구는 넷이며, **주어진 조건이 곧 세워야 할 식의 꼴을 지정한다**는 점에서 구조가 거의 기계적이다 — ⑴ 꼭짓점 $(p,\,q)$ 를 알면 $y=a(x-p)^2+q$ 에 나머지 한 점을 대입, ⑵ 축 $x=p$ 만 알면 같은 꼴에서 $q$ 도 미지수로 두고 두 점으로 연립, ⑶ 세 점을 알면 $y=ax^2+bx+c$ 에 대입(이때 $y$ 절편이 주어지면 $c$ 가 먼저 결정되어 미지수가 둘로 줄어든다), ⑷ $x$ 축과의 두 교점 $(\alpha,\,0)$, $(\beta,\,0)$ 을 알면 $y=a(x-\alpha)(x-\beta)$ 에 나머지 한 점을 대입. 네 도구 모두 「꼴 선택 → 대입 → $a$(필요하면 $q$ 까지) 결정 → 전개」 한 사슬이고 그 적용 자체는 표준 절차이므로 이 파일에서 통찰로 카운트하지 않았다. 확인하기 4문은 그 사슬을 빈칸으로 쪼개 한 번씩 보여 주고, 핵심문제 8문은 같은 사슬을 네 도구에 한 번씩 대응시킨 격자이며, 시험대비 4문만 그 위에 **되묻기 한 겹**을 얹는다.

그래서 통찰 판정의 기준도 되묻기 층에 두었다 — 축과 한 교점의 대칭으로 나머지 교점을 만들어 조립을 단축하기(203-02 · I-SYM d1), 일반형으로 구한 식을 완전제곱해 표준형으로 다시 읽어 꼭짓점을 얻기(203-03 · I-RT d1). 나머지 14문은 도구를 곧바로 쓰는 절차형이며 부담은 Mₖ(연립과 전개)에 몰려 있고 Mₐ 는 전 문항 1(구체 수치)이다. 함정은 사실상 T-부호 하나다 — $y=a(x+2)^2$ 처럼 $p$ 의 부호를 뒤집어 대입하는 자리, 그리고 선택지가 전개형 다섯 개로 붙어 있는 객관식에서 $b$ 의 부호만 다른 선택지를 고르는 자리다.

변형 설계 때는 축이 셋이다 — ⒜ 어떤 조건을 주느냐(꼭짓점 / 축+두 점 / 세 점 / 두 교점+한 점 — 이것이 곧 유형), ⒝ 조건을 말로 주느냐 그림으로 주느냐(그림이면 숫자 변형 시 반드시 재작도), ⒞ 되묻기 층(식 자체 / 꼭짓점 좌표 / 계수의 곱 $abc$ / 다른 점의 $y$ 좌표 $k$). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-200-01
  page: 200
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    꼭짓점 $(-1,\,3)$ 이고 점 $(1,\,11)$ 을 지나는 포물선의 이차함수 식을
    $y=ax^2+bx+c$ 꼴로 구하는 과정의 빈칸 5개를 채우기.
  category: "꼭짓점 → 표준형 설정 → 한 점 대입 → $a$ → 전개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원의 첫 도구를 빈칸으로 쪼개 한 번 걸어 보는 도입 문항. 꼭짓점을 표준형의 $p$, $q$ 자리에
    옮기고 한 점을 대입해 $a$ 를 구한 뒤 전개하면 끝이며, 각 단계가 이미 문장으로 깔려 있어
    학생이 고를 것이 없다. 통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "꼭짓점 (-1,3) → y=a(x+1)^2+3 → 점 (1,11) 대입 → a=2 → 전개해 y=ax^2+bx+c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$, $11$, $3$, $2$, $2x^2+4x+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/200-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 좌표와 지나는 점을 바꿀 수 있다. 제약: 두 x 좌표의 차가 1~3 이어야 대입값이 암산 범위에 들고, a 가 정수(가능하면 절댓값 1~3)로 떨어지도록 (지나는 점의 y − q) 를 (차)^2 의 배수로 잡는다. 빈칸 순서가 답의 순서이므로 숫자를 바꾸면 5개 빈칸의 답을 모두 다시 쓴다."
    creative: "(1) 꼭짓점의 x 좌표를 양수로 바꿔 y=a(x−p)^2+q 부호를 반대로 연습시키기(★1 유지) (2) 마지막 빈칸을 식 대신 a+b+c 나 y 절편으로 바꾸면 되묻기 한 겹(★2) (3) 꼭짓점 대신 축의 방정식만 주고 점 둘을 주면 200-02 유형으로 이동(★1~2)."
```

```yaml
- id: GN-M31-200-02
  page: 200
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    축이 $x=4$ 이고 두 점 $(0,\,-7)$, $(3,\,8)$ 을 지나는 포물선의 이차함수 식을
    $y=ax^2+bx+c$ 꼴로 구하는 과정의 빈칸 6개를 채우기.
  category: "축 → $y=a(x-4)^2+q$ → 두 점 대입 → $a$, $q$ 연립 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축의 방정식과 두 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 문항과 달리 꼭짓점의 $y$ 좌표가 없어 $q$ 를 미지수로 남긴 채 두 점을 대입해 연립하는 것이
    이 유형의 전부다. 연립이 들어와 M_total 은 6 으로 오르지만 두 식이 모두 $a$, $q$ 일차라
    변수 하나를 소거하면 끝이고, 과정이 빈칸으로 깔려 있어 판단 지점이 없다.
    통찰 0 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "축 x=4 → y=a(x−4)^2+q → (0,−7)·(3,8) 대입 → 16a+q=−7, a+q=8 연립 → a=−1, q=9 → 전개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$, $16$, $8$, $-1$, $9$, $-x^2+8x-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/200-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 p 와 두 점을 바꿀 수 있다. 제약: 두 점의 (x−p)^2 값이 서로 달라야 연립이 풀리고, 그 차가 y 값 차를 나누어떨어지게 해야 a 가 정수로 나온다(여기서는 16−1=15 가 −7−8=−15 를 나눔). 한 점을 x=0 으로 두면 y 절편이 보너스로 검산 지점이 된다."
    creative: "(1) 두 점 중 하나를 x 축 위의 점으로 바꾸면 203-02 처럼 대칭으로 나머지 교점을 만드는 갈래가 생겨 ★2 (2) 축 대신 「꼭짓점의 x 좌표」라는 말로 바꿔 같은 조건을 다르게 읽히기(★1 유지) (3) q 를 묻지 않고 최댓값·최솟값을 묻게 하면 되묻기 한 겹(★2)."
```

```yaml
- id: GN-M31-200-03
  page: 200
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    세 점 $(0,\,4)$, $(2,\,0)$, $(1,\,-2)$ 를 지나는 포물선의 이차함수 식을
    $y=ax^2+bx+c$ 꼴로 구하는 과정의 빈칸 8개를 채우기.
  category: "$y$ 절편으로 $c$ 확정 → 남은 두 점으로 $a$, $b$ 연립"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 세 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 점 유형의 표준 절차를 그대로 밟는다. 핵심은 $x=0$ 인 점을 먼저 써서 $c$ 를 확정해
    미지수를 둘로 줄이는 순서인데, 그 순서조차 빈칸이 지정해 준다. 남는 것은 일차 연립 한 번.
    통찰 0 · M_total 6 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "(0,4)로 c=4 확정 → (2,0)·(1,−2) 대입 → 4a+2b=−4, a+b=−6 연립 → a=4, b=−10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$, $4$, $4$, $-2$, $4$, $4$, $-10$, $4x^2-10x+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/200-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꿀 수 있다. 제약: 한 점은 반드시 x=0 으로 두어 c 가 먼저 떨어지게 하고(빈칸 구조가 그 순서를 전제한다), 나머지 두 점의 x 는 작은 정수로 잡아 연립 계수가 한 자리에 머물게 한다. 세 점이 한 직선 위에 있으면 a=0 이 되어 이차함수가 아니므로 반드시 피한다."
    creative: "(1) x=0 인 점을 빼고 세 점을 모두 일반 위치로 두면 미지수 3개 연립이 되어 ★2~3 (2) 세 점 중 둘을 x 축 위의 점으로 주면 인수분해 꼴 조립이 훨씬 빨라 전략 갈래(I-SC)가 생김 → ★2 (3) 구한 식의 꼭짓점을 묻게 하면 203-03 유형(I-RT d1 · ★3)."
```

```yaml
- id: GN-M31-200-04
  page: 200
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    $x$ 축과 두 점 $(2,\,0)$, $(3,\,0)$ 에서 만나고 점 $(0,\,-12)$ 를 지나는 포물선의
    이차함수 식을 $y=ax^2+bx+c$ 꼴로 구하는 과정의 빈칸 4개를 채우기.
  category: "두 교점 → $y=a(x-2)(x-3)$ → 한 점 대입 → $a$ → 전개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$x$축과의 두 교점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 번째 도구인 인수분해 꼴 조립을 처음 보여 주는 문항. $x$ 축과의 교점이 곧 $(x-\alpha)(x-\beta)$
    의 $\alpha$, $\beta$ 라는 대응만 받아들이면 한 점 대입으로 $a$ 가 바로 나온다.
    통찰 0 · M_total 4 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "교점 2,3 → y=a(x−2)(x−3) → (0,−12) 대입 → 6a=−12 → a=−2 → 전개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$, $6$, $-2$, $-2x^2+10x-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/200-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 교점과 지나는 점을 바꿀 수 있다. 제약: 지나는 점을 x=0 으로 두면 대입값이 αβ 가 되므로 −12 처럼 αβ 의 배수로 잡아야 a 가 정수로 떨어진다. 교점을 음수까지 섞으면 (x+5) 꼴이 생겨 부호 연습이 되지만 전개 계수가 커지니 절댓값 5 이하로 둔다."
    creative: "(1) 지나는 점을 x=0 이 아닌 곳(예: 두 교점 사이의 최솟점 근처)으로 옮기면 대입 계산이 한 겹 늘어 ★2 (2) 두 교점 대신 「두 근이 2, 3 인 이차방정식의 그래프」라는 말로 주면 단원 14~15 와 이어지는 I-XU 후보(★2~3) (3) 구한 식에 다른 x 를 대입해 k 를 묻게 하면 203-04 유형(★2)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-201-h1
  page: 201
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    꼭짓점 $(-2,\,3)$ 이고 점 $(1,\,-6)$ 을 지나는 포물선의 이차함수 식을 5지선다에서 고르기.
    그림은 발문의 꼭짓점과 지나는 점을 그대로 표시한 보조 그림이다.
  category: "꼭짓점 → 표준형 → 한 점 대입 → 전개해 선택지와 대조"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    200-01 과 같은 사슬이지만 빈칸이 사라져 학생이 꼴 선택부터 해야 하고, 선택지 다섯이 모두
    전개형이라 $y=-(x+2)^2+3$ 을 끝까지 펼쳐 $b$ 의 부호까지 맞춰야 한다(①②③ 이 $-2x^2$, ④⑤ 가
    $-x^2$ 로 갈려 $a$ 를 틀리면 그대로 오답). 통찰 0 · M_total 5 로 −1 후보이지만 구역 대표문제이고
    전개·대조가 필수라 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (−2,3) → y=a(x+2)^2+3 → (1,−6) 대입 → 9a=−9 → a=−1 → 전개해 선택지 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 답"
  figure: crop:fig-201-h1.png
  latex: latex-bank/gn-m31/items/201-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점과 지나는 점을 바꿀 수 있다. 제약: (지나는 점의 y − q) 가 (x 차)^2 로 나누어떨어져 a 가 정수여야 하고, 오답 선택지는 a 를 틀린 경우·전개 시 b 의 부호를 틀린 경우·상수항을 q 로 잘못 쓴 경우 세 갈래로 만들어야 변별이 산다. 그림이 꼭짓점과 지나는 점을 라벨로 달고 있으므로 숫자를 바꾸면 반드시 재작도한다."
    creative: "(1) 그림에서 꼭짓점 좌표를 지우고 축만 표시하면 축+두 점 유형으로 이동(★2) (2) 선택지를 식 대신 a+b+c 값으로 바꾸면 되묻기 한 겹(★2~3) (3) 꼭짓점을 문자 (p, q) 로 두고 조건을 말로 주면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-M31-201-c1
  page: 201
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 꼭짓점과 지나는 한 점이 주어진 포물선의 이차함수 식을 $y=ax^2+bx+c$ 꼴로 나타내기.
    ⑴ 꼭짓점 $(2,\,-7)$ · 점 $(0,\,5)$, ⑵ 꼭짓점 $(-1,\,5)$ · 점 $(-3,\,-3)$.
  category: "꼭짓점 → 표준형 → 한 점 대입 → $a$ → 전개 (2회 반복)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    201-h1 의 짝 확인문제로 같은 사슬을 두 번 돌린다. ⑴ 은 지나는 점이 $y$ 절편이라 대입이 가볍고
    ⑵ 는 꼭짓점의 $x$ 가 음수여서 $(x+1)^2$ 부호 처리가 한 번 걸린다. 전개까지가 요구 형식이라
    Mₖ 가 2. 통찰 0 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "각 소문항에서 꼭짓점 → y=a(x−p)^2+q → 주어진 점 대입 → a → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=3x^2-12x+5$ ⑵ $y=-2x^2-4x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/201-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 소문항의 꼭짓점·점을 바꿀 수 있다. 제약: a 의 부호를 ⑴ 양수 ⑵ 음수로 갈라 두어야 두 문항이 서로 다른 연습이 되고, x 차는 2 이하로 두어 (x 차)^2 가 1 또는 4 에 머물게 한다. 전개 결과의 계수가 두 자리를 넘지 않게 q 를 작게 잡는다."
    creative: "(1) 한 소문항을 「최솟값이 −7 이고 x=2 에서 최소」처럼 말로 바꾸면 조건 해석 한 겹(I-EQV d1 · ★2~3) (2) 꼭짓점이 x 축 위에 있게 하면 중근·완전제곱식과 이어져 단원 15 와의 I-XU 후보(★3) (3) 지나는 점을 두 개 주고 꼭짓점의 y 좌표를 지우면 축+두 점 유형(★2)."
```

```yaml
- id: GN-M31-201-h2
  page: 201
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    축이 직선 $x=-1$ 이고 두 점 $(-3,\,0)$, $(2,\,5)$ 를 지나는 포물선의 이차함수 식을
    5지선다에서 고르기.
  category: "축 → $y=a(x+1)^2+q$ → 두 점 대입 → 연립 → 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축의 방정식과 두 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축만 주어져 $q$ 를 미지수로 남기고 두 점을 대입해 연립하는 이 구역의 두 번째 도구.
    선택지가 $-x^2$ 계열 둘과 $x^2$ 계열 셋으로 갈려 $a$ 의 부호를 먼저 확정해야 한다.
    주어진 $(-3,\,0)$ 이 $x$ 축 위의 점이라 축 대칭으로 나머지 교점 $1$ 을 만들어 인수분해 꼴로
    조립하는 갈래도 있으나, 구역이 지정한 표준 풀이는 연립이고 두 갈래의 길이가 비슷해
    전략 분기로 세지 않았다. 통찰 0 · M_total 6 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "축 x=−1 → y=a(x+1)^2+q → (−3,0)·(2,5) 대입 → 4a+q=0, 9a+q=5 연립 → a=1, q=−4 → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/201-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 p 와 두 점을 바꿀 수 있다. 제약: 두 점의 (x−p)^2 차가 y 값 차를 나누어떨어지게 해야 a 가 정수이고(여기서는 9−4=5 가 5−0=5 를 나눔), 선택지는 a 부호 오류·q 부호 오류·전개 상수항 오류를 각각 한 개씩 담게 만든다."
    creative: "(1) 두 점을 모두 x 축 위에 두면 대칭 정보가 남아돌아 인수분해 조립이 압도적으로 빨라지므로 전략 분기(I-SC d1 · ★3) (2) 축을 문자 x=k 로 두고 두 점만 주면 Mₐ 상승 ★3 (3) 답을 식 대신 꼭짓점 좌표나 최솟값으로 바꾸면 되묻기 한 겹(★2~3)."
```

```yaml
- id: GN-M31-201-c2
  page: 201
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 축의 방정식과 두 점이 주어진 포물선의 이차함수 식을 $y=ax^2+bx+c$ 꼴로 나타내기.
    ⑴ 축 $x=3$ · 두 점 $(-1,\,-11)$, $(4,\,4)$, ⑵ 축 $x=-4$ · 두 점 $(-6,\,1)$, $(2,\,17)$.
  category: "축 → 표준형 → 두 점 대입 → 연립 → 전개 (2회 반복)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축의 방정식과 두 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    201-h2 의 짝 확인문제. 골조는 같고 ⑵ 에서 $a=\dfrac{1}{2}$ 이 나와 전개할 때 분수 계수 처리가
    한 번 더 걸린다($32a=16$). 답 형식이 $y=ax^2+bx+c$ 로 고정돼 있어 표준형에서 멈출 수 없다.
    통찰 0 · M_total 6 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "각 소문항에서 축 → y=a(x−p)^2+q → 두 점 대입 → a, q 연립 → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=-x^2+6x-4$ ⑵ $y=\dfrac{1}{2}x^2+4x+7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/201-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축과 두 점을 바꿀 수 있다. 제약: ⑵ 처럼 a 를 분수로 두려면 (x−p)^2 차가 y 차보다 크게 잡고 약분 결과가 1/2, 1/3 처럼 단순하도록 한다. 전개 시 분수 × 짝수가 되게 p 를 짝수로 잡아야 b, c 가 정수로 떨어진다(여기서는 p=−4)."
    creative: "(1) 두 점 중 하나를 y 절편으로 고정하면 c 가 먼저 보여 검산 지점이 생김(★2 유지) (2) 축 대신 「x=p 에서 최댓값 q」로 주면 조건 해석 한 겹(I-EQV d1 · ★3) (3) 소문항을 셋으로 늘려 a 가 양수·음수·분수 세 경우를 한 번에 훑게 하면 드릴 가치가 커짐(★2 유지)."
```

```yaml
- id: GN-M31-202-h3
  page: 202
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    세 점 $(0,\,-2)$, $(-1,\,-13)$, $(2,\,2)$ 를 지나는 포물선의 이차함수 식 구하기.
  category: "$y$ 절편으로 $c$ 확정 → 남은 두 점으로 $a$, $b$ 연립"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 세 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 점 유형의 대표문제. $x=0$ 인 점이 섞여 있어 $c=-2$ 를 먼저 떼고 남은 두 점으로
    $a-b=-11$, $2a+b=2$ 를 연립하면 끝난다. 유도 빈칸이 없어 「어느 점을 먼저 쓸지」를 학생이
    정해야 하지만 $y$ 절편 우선은 이 단원의 고정 관례라 판단 부담으로 보지 않았다.
    통찰 0 · M_total 6 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "(0,−2)로 c 확정 → 나머지 두 점 대입 → a−b=−11, 2a+b=2 연립 → a=−3, b=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-3x^2+8x-2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/202-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꿀 수 있다. 제약: 한 점을 x=0 으로 두고 나머지 둘의 x 를 부호가 다른 작은 정수(−1 과 2 등)로 잡으면 연립이 더하기 한 번으로 끝난다. a 가 음수인 경우를 유지하면 전개 부호 연습이 남는다. 세 점이 일직선이 되지 않게 확인한다."
    creative: "(1) y 절편 점을 빼고 세 점을 일반 위치로 두면 미지수 3개 연립 ★3 (2) 세 점 중 하나의 좌표에 문자를 섞어 「이 그래프가 (3, k) 를 지난다」를 덧붙이면 203-04 형 되묻기(★2~3) (3) 구한 식의 꼭짓점·최댓값을 묻게 하면 I-RT d1 이 붙어 ★3(203-03 과 동일 골조)."
```

```yaml
- id: GN-M31-202-c3
  page: 202
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 주어진 세 점을 지나는 포물선의 이차함수 식을 $y=ax^2+bx+c$ 꼴로 나타내기.
    ⑴ $(0,\,1)$, $(1,\,2)$, $(-1,\,6)$, ⑵ $(0,\,-5)$, $(2,\,-3)$, $(4,\,-9)$.
  category: "$y$ 절편으로 $c$ 확정 → 남은 두 점으로 연립 (2회 반복)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 세 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    202-h3 의 짝 확인문제. ⑴ 은 $x=\pm1$ 대칭 배치라 두 식을 더하고 빼면 $a$, $b$ 가 즉시 나오고,
    ⑵ 는 $x=2$, $4$ 라 계수가 커져 $2a+b=1$, $4a+b=-1$ 로 정리하는 한 단계가 더 붙는다.
    통찰 0 · M_total 6 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "각 소문항에서 (0, c) 로 c 확정 → 나머지 두 점 대입 → a, b 일차 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=3x^2-2x+1$ ⑵ $y=-x^2+3x-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/202-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꿀 수 있다. 제약: ⑴ 처럼 x=±1 을 쓰면 가감법이 한 줄이므로 난이도를 낮추고, ⑵ 처럼 x 를 2, 4 로 벌리면 계수를 공약수로 나누는 단계가 생겨 난이도가 오른다. 두 소문항의 a 부호를 다르게 두는 배치는 유지한다."
    creative: "(1) 세 점 중 둘을 x 축 위에 두면 인수분해 꼴이 훨씬 빨라 전략 갈래(I-SC d1 · ★3) (2) 점 하나를 그림으로만 주면 그림 읽기 한 겹(★2~3) (3) 지나는 점 세 개 대신 「y 절편 1, x=1 과 x=−1 에서의 함숫값」으로 말을 바꾸면 조건 해석 한 겹(I-EQV d1 · ★2~3)."
```

```yaml
- id: GN-M31-202-h4
  page: 202
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    그림으로 주어진 포물선(아래로 볼록 · $x$ 절편 $-4$ 와 $-1$ · $y$ 절편 $4$)의 이차함수 식을
    5지선다에서 고르기. 필요한 세 수가 모두 그림에만 있다.
  category: "그림에서 두 $x$ 절편·$y$ 절편 읽기 → $y=a(x+4)(x+1)$ → $a$ → 전개"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$x$축과의 두 교점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 그림뿐이라 학생이 먼저 할 일은 그림에서 쓸 수 있는 좌표 세 개를 뽑는 것이다.
    다만 뽑고 나면 200-04 와 같은 조립이고 $y$ 절편이 $x=0$ 대입값과 바로 맞아 $a=1$ 이 한 줄에
    나온다. 그림에서 절편을 읽는 것은 이 유형의 표준 제시 방식이라 표현 전환으로 세지 않았다.
    통찰 0 · M_total 5 · 핵심문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "그림에서 x 절편 −4, −1 과 y 절편 4 읽기 → y=a(x+4)(x+1) → 4a=4 → a=1 → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "본문 답"
  figure: crop:fig-202-h4.png
  latex: latex-bank/gn-m31/items/202-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 x 절편과 y 절편을 바꿀 수 있다. 제약: y 절편 = a·αβ 이므로 αβ 가 y 절편을 나누어떨어지게 잡아야 a 가 정수다. 선택지는 a 를 1 로 착각한 경우·두 절편의 부호를 뒤집은 경우·αβ 대신 α+β 를 쓴 경우로 구성한다. 그림이 곧 발문이므로 숫자를 바꾸면 반드시 재작도하고 볼록 방향도 a 의 부호에 맞춘다."
    creative: "(1) y 절편 대신 꼭짓점의 y 좌표를 그림에 표시하면 대칭으로 꼭짓점 x 를 먼저 찾아야 해 I-SYM d1 이 붙어 ★3 (2) 두 절편 중 하나만 표시하고 축을 함께 주면 203-02 유형(★3) (3) 답을 식 대신 a+b+c 나 꼭짓점 좌표로 바꾸면 되묻기 한 겹(★2~3)."
```

```yaml
- id: GN-M31-202-c4
  page: 202
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ $x$ 축과의 두 교점과 지나는 한 점이 주어진 포물선의 이차함수 식을 $y=ax^2+bx+c$ 꼴로 나타내기.
    ⑴ 교점 $(1,\,0)$, $(3,\,0)$ · 점 $(0,\,-15)$, ⑵ 교점 $(-2,\,0)$, $(4,\,0)$ · 점 $(3,\,-10)$.
  category: "두 교점 → 인수분해 꼴 → 한 점 대입 → $a$ → 전개 (2회 반복)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$x$축과의 두 교점과 다른 한 점을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    202-h4 의 짝 확인문제. ⑴ 은 지나는 점이 $y$ 절편이라 대입값이 $\alpha\beta$ 로 깔끔하지만,
    ⑵ 는 지나는 점 $x=3$ 이 두 교점 $-2$, $4$ 사이에 있어 $(3+2)(3-4)=-5$ 처럼 부호가 섞인 곱을
    다뤄야 한다. 전개까지 요구해 Mₖ 2. 통찰 0 · 확인문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "각 소문항에서 두 교점 → y=a(x−α)(x−β) → 주어진 점 대입 → a → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=-5x^2+20x-15$ ⑵ $y=2x^2-4x-16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/202-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 교점과 지나는 점을 바꿀 수 있다. 제약: 지나는 점의 x 를 두 교점 사이에 두면 대입값이 음수가 되어 a 의 부호 판정이 한 번 더 걸리고(⑵ 의 설계 의도), 바깥에 두면 양수가 된다. 두 소문항이 각각 한 경우씩 맡도록 배치를 유지하고, 대입값이 y 값을 나누어떨어지게 해 a 를 정수로 둔다."
    creative: "(1) 교점 두 개 대신 「이차방정식 ax^2+bx+c=0 의 두 근이 1, 3」으로 말을 바꾸면 단원 14 와 이어지는 I-XU 후보(★3) (2) 지나는 점을 꼭짓점으로 바꾸면 두 교점의 대칭으로 축을 먼저 구해야 해 I-SYM d1(★3) (3) 답을 두 교점 사이의 최솟값으로 바꾸면 되묻기 한 겹(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-203-01
  page: 203
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    꼭짓점 $(-1,\,-2)$ 이고 $y$ 축과의 교점의 $y$ 좌표가 $3$ 인 포물선의 이차함수 식을
    5지선다에서 고르기.
  category: '꼭짓점 → 표준형 → $y$ 절편을 점 $(0,\,3)$ 으로 읽어 대입 → $a$ → 전개'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점과 $y$절편을 알 때 이차함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    201-h1 과 같은 첫 도구이고, 달라진 것은 지나는 점을 좌표가 아니라 「$y$ 축과의 교점의 $y$ 좌표」
    라는 말로 준 것뿐이다. 그 말을 $(0,\,3)$ 으로 옮기는 것은 중3 수준에서 표준 읽기라 조건 해석
    통찰로 세지 않았다. 선택지가 모두 상수항 $3$ 을 공유해 $a$ 와 $b$ 의 부호로만 갈리므로
    전개를 끝까지 해야 한다. 통찰 0 · M_total 5 · 시험대비 구역 하단 → ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (−1,−2) → y=a(x+1)^2−2 → y 절편을 (0,3) 으로 읽어 대입 → a=5 → 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/203-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점과 y 절편을 바꿀 수 있다. 제약: y 절편 − q 가 p^2 으로 나누어떨어져야 a 가 정수이고(여기서는 3−(−2)=5 를 1^2 으로 나눔), p 의 절댓값을 1 이나 2 로 묶어 두면 암산 범위에 남는다. 선택지 다섯의 상수항을 모두 같게 두는 배치는 유지해야 a·b 변별이 산다."
    creative: "(1) y 절편 대신 「x=2 일 때의 함숫값」으로 바꾸면 같은 골조에 읽기만 달라짐(★2 유지) (2) 꼭짓점을 지우고 축과 y 절편·다른 한 점을 주면 연립 유형(★2) (3) 답을 식 대신 그래프가 지나지 않는 사분면으로 바꾸면 표현 전환이 붙어 ★3."
```

```yaml
- id: GN-M31-203-02
  page: 203
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    그림으로 주어진 위로 볼록한 포물선($x$ 절편 $-2$ · $y$ 절편 $6$)이 직선 $x=2$ 를 축으로 하는
    이차함수 $y=ax^2+bx+c$ 의 그래프일 때 $abc$ 의 값을 5지선다에서 고르기.
  category: "축과 한 교점의 대칭 → 나머지 교점 → 인수분해 꼴 → $a$ → $abc$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축 $x=2$ 와 그림에서 읽은 $x$ 절편 $-2$ 의 대칭으로 나머지 교점 $6$ 을 만들어 $y=a(x+2)(x-6)$ 으로 바로 조립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "축과 그래프에서 읽은 교점으로 식을 구해 계수의 곱 $abc$ 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 정보가 흩어져 있는 유일한 문항이다 — 축은 글로, $x$ 절편과 $y$ 절편은 그림으로
    주어져 학생이 셋을 모아야 한다. 축과 한 교점의 대칭으로 나머지 교점 $6$ 을 만들면 조립이
    한 줄로 끝나고(I-SYM d1), 그러지 않으면 $y=a(x-2)^2+q$ 로 두고 연립해야 한다. 어느 갈래든
    $a$ 가 분수라 전개에서 부호·분수가 함께 걸리고, 답이 식이 아니라 $abc$ 라 계수를 다시 읽어
    곱하는 되묻기가 한 겹 더 있다. 통찰 1 · M_total 6 · 시험대비 구역 상단 → ★3.
    [분류 이슈] 대칭 활용이 필수는 아니고 꼭짓점 꼴 연립도 길이가 비슷해 I-SYM 를 세지 않으면 ★2.
  tier: star_3
  mechanism_primary: "축 x=2 와 x 절편 −2 의 대칭 → 나머지 교점 6 → y=a(x+2)(x−6) → y 절편 6 대입 → a=−1/2 → a, b, c 읽어 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-203-02.png
  latex: latex-bank/gn-m31/items/203-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 p, 왼쪽 x 절편 α, y 절편을 바꿀 수 있다. 제약: 나머지 교점은 2p−α 로 자동 결정되므로 세 수를 독립으로 고를 수 없고, y 절편 = a·(−α)(−(2p−α)) 가 정수 또는 단순 분수 a 를 주도록 맞춘다. a 가 분수여야 abc 의 부호·크기가 선택지에서 갈리므로 정수 a 로 바꾸면 변별이 약해진다. 그림이 절편 두 개와 볼록 방향을 담고 있어 숫자를 바꾸면 반드시 재작도한다."
    creative: "(1) abc 대신 a+b+c 나 꼭짓점 좌표를 묻기(★3 유지) (2) 축을 지우고 두 x 절편을 모두 그림에 표시하면 대칭이 필요 없어져 202-h4 수준 ★2 (3) 축과 y 절편만 주고 x 절편을 지우면 정보가 부족해지므로 대신 「그래프가 점 (5, 0) 을 지난다」를 추가해 대칭 방향을 반대로 쓰게 하기(★3 유지) (4) a, b, c 의 부호만 묻는 참거짓 보기로 바꾸면 식을 구하지 않고 그래프 성질로 판단하는 전혀 다른 골조(I-RT d2 · ★3~4)."
```

```yaml
- id: GN-M31-203-03
  page: 203
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    세 점 $(0,\,3)$, $(-1,\,10)$, $(2,\,-5)$ 를 지나는 이차함수의 그래프의 꼭짓점 좌표 구하기.
  category: "세 점 → 일반형 결정 → 완전제곱으로 표준형 전환 → 꼭짓점 읽기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점으로 얻은 일반형 $y=x^2-6x+3$ 을 완전제곱해 표준형 $y=(x-3)^2-6$ 으로 옮겨야 꼭짓점이 읽힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점으로 구한 식의 꼭짓점 좌표 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 절반은 202-h3 와 같은 세 점 연립($c=3$ 을 떼고 $a-b=7$, $2a+b=-4$)이지만, 묻는 것이 식이
    아니라 꼭짓점이라 구한 일반형을 표준형으로 다시 옮기는 단계가 의무다. 이 단원이 계속
    「표준형으로 세워 일반형으로 답한다」를 시켜 온 뒤 방향을 뒤집는 배치라 학생이 멈추는 지점이
    분명하다. 통찰 1(I-RT d1) · M_total 6 · 시험대비 구역 상단 → ★3.
    [분류 이슈] 완전제곱은 단원 19 의 표준 절차이므로 통찰로 세지 않으면 ★2.
  tier: star_3
  mechanism_primary: "(0,3)로 c 확정 → 두 점 연립 → a=1, b=−6 → y=x^2−6x+3 완전제곱 → y=(x−3)^2−6 → 꼭짓점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3,\,-6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/203-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꿀 수 있다. 제약: 한 점은 x=0 으로 두어 c 를 먼저 떼고, b 가 짝수가 되도록 잡아야 완전제곱에서 분수가 생기지 않는다(여기서는 b=−6). a 를 1 로 두면 완전제곱이 한 줄이고, a 를 2 이상으로 두면 a 로 묶는 단계가 더 붙어 난이도가 한 단 오른다."
    creative: "(1) 꼭짓점 대신 최댓값·최솟값이나 축의 방정식을 묻기(★3 유지 · 골조 동일) (2) 세 점 중 둘을 x 축 위에 두면 대칭으로 축이 즉시 나와 완전제곱이 필요 없어져 ★2 (3) 구한 꼭짓점이 제 몇 사분면인지까지 물으면 되묻기 두 겹(★3~4) (4) a 를 2 나 −3 으로 두어 a 로 묶는 완전제곱을 강제하면 ★3 유지하되 Mₖ 상승."
```

```yaml
- id: GN-M31-203-04
  page: 203
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $x$ 축과 두 점 $(-5,\,0)$, $(2,\,0)$ 에서 만나고 점 $(-4,\,12)$ 를 지나는 이차함수의 그래프가
    점 $(3,\,k)$ 를 지날 때 $k$ 의 값을 5지선다에서 고르기.
  category: "두 교점 → 인수분해 꼴 → 한 점으로 $a$ → 다른 점 대입해 $k$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 교점과 한 점으로 구한 식에 다른 점을 대입해 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조립 자체는 202-c4 와 같고 마지막에 $x=3$ 을 대입하는 한 줄이 더 붙은 형태다. 계산에서는
    $(-4+5)(-4-2)=-6$ 처럼 부호가 섞인 곱이 두 번 나와 $a=-2$ 의 부호를 놓치기 쉽고, 전개하지
    않고 인수분해 꼴 그대로 대입하는 편이 훨씬 빠르다는 점이 이 문항의 실질적 요령이다.
    통찰 0 · M_total 6 · 시험대비 구역이지만 골조가 확인문제와 동일 → ★2.
    [분류 이슈] 되묻기 한 겹과 구역 신호만 보면 ★3 도 가능.
  tier: star_2
  mechanism_primary: "교점 −5, 2 → y=a(x+5)(x−2) → (−4,12) 대입 → −6a=12 → a=−2 → x=3 대입 → k=−16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/203-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 교점, 지나는 점, 묻는 점의 x 를 바꿀 수 있다. 제약: 지나는 점의 대입값이 12 를 나누어떨어지게 해야 a 가 정수이고, 묻는 점의 x 를 두 교점 바깥에 두면 k 의 부호가 a 의 부호와 같아져 선택지 다섯을 같은 부호로 채울 수 있다(여기서는 모두 음수). 교점 간격을 7 처럼 넓게 두면 전개 계수가 커지므로 인수분해 꼴 대입을 유도하게 된다."
    creative: "(1) k 대신 꼭짓점의 y 좌표(최솟값·최댓값)를 묻게 하면 대칭으로 축을 먼저 구해야 해 I-SYM d1 이 붙어 ★3 (2) 묻는 점을 (3, k) 대신 (t, 0) 으로 두고 t 를 묻게 하면 이미 아는 교점이 답이라 함정형 참거짓 문항이 됨(★3) (3) 지나는 점 (−4, 12) 를 그림으로 옮기면 202-h4 처럼 그림 읽기가 앞에 붙음(★2 유지) (4) 두 교점을 근으로 하는 이차방정식과 엮으면 단원 14 와의 I-XU(★3)."
```

## 표본 판정 요약 (16문)

- ★ 분포: ★1 4 · ★2 10 · ★3 2 · ★4 0 · ★5 0
- 구역별: 개념원리 확인하기 4문(전부 ★1 · 빈칸 유도형) · 핵심문제 익히기 8문(전부 ★2) · 이런 문제가 시험에 나온다 4문(★2 2 · ★3 2)
- 통찰형 2 · 절차형 14 · premium 0. 통찰은 둘 다 depth 1 이고 유형은 I-SYM 1(203-02) · I-RT 1(203-03)뿐이다. 이 단원의 네 도구(꼭짓점 / 축+두 점 / 세 점 / 두 교점+한 점)를 적용하는 것 자체는 조건이 꼴을 지정해 주는 표준 절차로 보고 통찰로 세지 않았고, 그 위에 얹히는 되묻기 층만 통찰로 보았다.
- type_hint 상위 5: 「꼭짓점과 다른 한 점을 알 때」 3문(200-01 · 201-h1 · 201-c1) · 「축의 방정식과 두 점을 알 때」 3문(200-02 · 201-h2 · 201-c2) · 「서로 다른 세 점을 알 때」 3문(200-03 · 202-h3 · 202-c3) · 「$x$축과의 두 교점과 다른 한 점을 알 때」 3문(200-04 · 202-h4 · 202-c4) · 시험대비 4문은 네 유형의 되묻기 변형이라 각각 다른 이름 1문씩(203-01 꼭짓점+$y$절편 · 203-02 $abc$ · 203-03 꼭짓점 좌표 · 203-04 함숫값 $k$)
- M_total 분포: 4 → 2문 · 5 → 5문 · 6 → 9문. Mₐ 는 16문 전부 1(구체 수치 · 문자 조건이 하나도 없다)이고 Mₜ 도 전부 1(T-부호 하나)이어서 변별이 사실상 Mₛ·Mₖ 두 축에서만 일어난다. 이 범위가 이 책에서 가장 균질한 단원 중 하나다.
- 대상층: 하위권 4 · 중하위권 10 · 중위권 1(203-03) · 중상위권 1(203-02). 상위권 슬롯은 없다.
- 그림: 3문(`crop:fig-201-h1.png` · `crop:fig-202-h4.png` · `crop:fig-203-02.png`). 201-h1 의 그림은 발문에 이미 있는 꼭짓점·지나는 점을 되풀이하는 보조 그림이지만, 202-h4 와 203-02 는 **그림에만 있는 수**(절편·볼록 방향)가 풀이에 필수이므로 숫자 변형 시 반드시 재작도해야 한다.
- 답 출처: 본문 답 4문(201-h1 · 201-h2 · 202-h3 · 202-h4 — 핵심문제) · 답지 12문. 골조를 잡는 과정에서 전사본 answer 와 어긋나 보이는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-201-h1 (외 201-c1 · 202-c4 · 202-h4 · 203-01) | 통찰 0 · M_total 5 라 v3.8 Step 2 의 −1 조정 대상이지만, 다섯 문항 모두 구역 대표·짝 확인문제이고 전개와 선택지 대조가 필수라 구역 출발점 ★2 를 유지했다. 이 단원은 조건이 식의 꼴을 지정해 주는 구조라 M 이 구조적으로 낮게 나온다 | ★1 / ★2 |
| GN-M31-203-02 | 축과 한 교점의 대칭으로 나머지 교점을 만드는 것을 I-SYM d1 로 셌으나, 꼭짓점 꼴 연립도 길이가 비슷해 대칭이 필수는 아니다. 통찰을 세지 않으면 ★2 | ★2 / ★3 |
| GN-M31-203-03 | 일반형 → 표준형 완전제곱을 I-RT d1 로 셌으나 이는 단원 19 의 표준 절차이기도 하다. 통찰을 세지 않으면 202-h3(★2)와 같은 세 점 연립 + 한 줄 | ★2 / ★3 |
| GN-M31-203-04 | 시험대비 구역 신호와 되묻기 한 겹만 보면 ★3 이지만, 조립 골조가 확인문제 202-c4 와 동일하고 마지막 대입이 한 줄이라 ★2 로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: 이 단원은 「주어진 조건 → 세울 식의 꼴」 대응이 곧 유형이므로 네 뿌리를 그대로 세우는 것이 맞다 — ⑴ 꼭짓점 + 한 점(base ★1~2) ⑵ 축 + 두 점(base ★2 · 연립이 필수라 ⑴보다 한 단 위) ⑶ 세 점(base ★2) ⑷ $x$축과의 두 교점 + 한 점(base ★1~2). ⑵ 와 ⑶ 은 둘 다 연립이지만 미지수가 $(a,\,q)$ 냐 $(a,\,b)$ 냐로 갈리고 $y$ 절편 처리 관례가 달라 통합하면 손해다.
- **통합해도 될 유형**: 「꼭짓점 + 한 점」과 「꼭짓점 + $y$절편」(203-01)은 조건 표현만 다른 같은 뿌리이므로 한 유형의 제시 변형으로 묶는다. 마찬가지로 「두 교점 + 한 점」의 세 제시 방식 — 좌표로(200-04 · 202-c4) · 그림으로(202-h4) · 근으로 — 도 한 유형의 난이도 층이다.
- 시험대비 4문은 독립 유형이 아니라 네 뿌리에 붙는 **되묻기 카드**다. 카드는 넷 — $abc$ 또는 $a+b+c$ 같은 계수 되읽기(203-02) · 꼭짓점·최댓값으로 되읽기(203-03) · 다른 점의 함숫값(203-04) · 조건을 말로 바꿔 주기(203-01). 카탈로그에서는 유형이 아니라 변형 슬롯으로 관리하고 네 뿌리 × 네 카드 격자로 출제하면 이 단원 문항은 거의 전부 생성된다.
- 이 범위에는 문자 조건이 하나도 없어(Mₐ 전부 1) ★4 이상 슬롯을 만들 재료가 없다. 필요하면 ⒜ 꼭짓점·축을 문자 $p$ 로 두거나 ⒝ 두 교점을 이차방정식의 근으로 바꿔 단원 14~15 와 묶는 I-XU 를 쓰는 두 축만 남는다. 둘 다 이 단원 안에서는 새 유형이 아니라 카탈로그의 상위 난이도 층으로 붙이는 편이 낫다.
- ★1 슬롯이 필요하면 200-01·200-04 를 숫자 변형해 늘리는 것이 가장 싸다(빈칸 구조라 답이 여러 개이므로 빈칸 답 목록을 함께 다시 쓴다). 그림 문항 202-h4·203-02 는 재작도 비용이 있으므로 숫자 변형 대상에서는 후순위다.
