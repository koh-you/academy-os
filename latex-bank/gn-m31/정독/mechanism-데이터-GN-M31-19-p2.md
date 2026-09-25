---
name: mechanism-데이터-GN-M31-19-p2
description: 개념원리 중학 3-1 19 이차함수 (3)(2/2 · 182~187쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 19 이차함수 (3)
  unit_code: GN-M31-19
  part: "2/2"
  extract_range: "182~187쪽 · 182-01~187-u6"
  total_problems: 32
  unit_total: 52
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 14문 · crops.json)
---

# 개념원리 중학 3-1 · 19 이차함수 (3) (2/2) 정독 데이터 (v1.0)

이 파일은 「19 이차함수 (3)」의 뒷부분, 즉 소단원 본문이 끝난 뒤의 정리 구역 182~187쪽 32문항 전수를 다룬다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 12문(182~183쪽) · 「STEP 2 발전 문제」 9문(184~185쪽) · 「STEP 3 실력 UP」 3문(185쪽) · 「서술형 대비 문제」 8문(186~187쪽 · 예제 `쪽-eN` 과 유제 `쪽-uN`)이다. 내용은 $y=ax^2$ 의 폭·대칭, 평행이동과 $y=a(x-p)^2+q$ 의 꼭짓점·축, 그래프의 모양에서 계수의 부호를 읽어 내는 문항으로 채워져 있다.

개념원리 중학은 문항별 난이도 등급(`level`)이 없어 **구역 자체가 벤더 난이도 신호**다. STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 태그는 「꼭나와」(빈출 표시 · +0) 6문뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로, 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형)를 채웠다. 그림이 발문의 일부인 문항이 14문으로 많아, 숫자 변형 시 크롭을 다시 그려야 하는지를 `variation_notes.numeric` 에 표시했다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-182-01
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    다섯 식 중 $y$ 가 $x$ 에 대한 이차함수인 것 고르기. 5지선다.
  category: "각 식 전개·정리 → x^2 항의 계수가 0 이 아닌지 확인"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 뜻 — 정리했을 때 이차식인지 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선택지 다섯 개를 모두 전개해야 정리되는 꼴이 보인다. ③ 만 x^2 이 살아남고 ④⑤ 는 전개하면 x^2 이 소거돼 일차식, ② 는 분모에 x^2 이 있어 다항식이 아니다.
    전개 반복으로 M_k 2, 통찰은 없다. 기본 문제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지 전개 → x^2 의 계수 확인 → 0 이 아닌 것 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/182-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수와 상수항. 제약: 오답 선택지는 전개하면 x^2 이 반드시 소거돼야 하고(곱셈 공식 짝 맞추기), 분수식 선택지와 순수 일차식 선택지를 각 1 개씩 남긴다."
    creative: "(1) 정답을 둘로 늘려 「모두 고르면」(★2 유지) (2) 빈칸의 식을 채워 이차함수가 되게 하기(역방향 ★3) (3) 소거되는 항의 계수를 a 로 바꿔 이차함수가 될 a 의 조건을 묻기(182-02 골조 · ★2)."
```

```yaml
- id: GN-M31-182-02
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=ax^2+x(x-1)-4$ 가 $x$ 에 대한 이차함수일 때 상수 $a$ 의 값이 될 수 없는 것. 5지선다.
  category: "x^2 항 묶기 → 계수 a+1 ≠ 0 → 제외되는 값"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수가 될 조건 — x^2 의 계수가 0 이 아닐 것"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 (a+1)x^2-x-4 이므로 a+1≠0, 즉 a≠-1 하나만 답이 된다. 단계는 한 겹이지만 「될 수 없는 것」이라는 역방향 진술과 x^2 계수 소거 함정이 이 문항의 전부다.
    M_total 5 로 −1 후보이나 계수 소거 함정이 정답을 만드는 구조라 기본 문제 ★2 를 유지.
  tier: star_2
  mechanism_primary: "전개 → (a+1)x^2 → a+1≠0 → a≠-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/182-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x(x-1) 의 계수·상수항과 선택지 다섯 값. 제약: 선택지 안에 -(x^2 계수 소거값) 이 정확히 하나 들어가야 하고 나머지 넷은 모두 허용값이어야 한다."
    creative: "(1) 계수를 a 대신 a^2-1 로 주어 제외값이 둘이 되게 하기(★3 · I-MI d1) (2) 「이차함수가 되도록 하는 자연수 a 의 개수」로 되묻기(★2) (3) 일차함수가 되게 하는 a 를 묻기(같은 골조 · 답이 유일 ★2)."
```

```yaml
- id: GN-M31-182-03
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    이차함수 $f(x)=3x^2-2x+a$ 에서 $f(-2)=15$ 일 때 $f(3)$ 의 값.
  category: "함숫값 조건 → 미정계수 a 결정 → 다른 함숫값 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 함숫값과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(-2)=15 로 a 를 정한 뒤 같은 식에 x=3 을 넣는 2단 조립이다. 음수 대입에서 -2x 항의 부호만 조심하면 걸릴 곳이 없다.
    통찰 없음·M_total 6 → 기본 문제 ★2 유지. 「꼭나와」는 빈출 표시이므로 ★ 에 더하지 않았다.
  tier: star_2
  mechanism_primary: "f(-2)=15 → a 결정 → f(3) 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/182-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x^2-2x 의 계수, 조건 함숫값의 x 와 값, 물어보는 x. 제약: 조건 대입으로 a 가 정수가 되게 하고, 묻는 함숫값도 정수로 떨어지게 계수를 맞춘다."
    creative: "(1) f(-2)=15, f(1)=k 처럼 미정계수를 둘로 늘려 연립(187-u3 골조 · ★2) (2) f(x)=f(-x) 가 되도록 하는 계수를 묻기(★3 · I-SYM d1) (3) f(-2)=f(3) 조건으로 축을 묻기(★3 · I-EQV d1)."
```

```yaml
- id: GN-M31-182-04
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    세 이차함수 $y=ax^2$, $y=-3x^2$, $y=-\dfrac{1}{2}x^2$ 의 그래프가 그림과 같을 때 상수 $a$ 의 값이 될 수 있는 것 모두 고르기(정답 2개).
  category: "그래프의 폭 ↔ 계수의 절댓값 대소 → a 의 범위 → 선택지 거르기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax^2 의 폭·볼록 방향과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 y=ax^2 이 두 그래프 사이에 있으므로 폭의 대소가 곧 절댓값의 대소다. 위로 볼록이라 a<0 이고 1/2<|a|<3, 즉 -3<a<-1/2 이다.
    부호(T-부호)와 등호 제외(T-경계) 두 함정으로 M_t 2. 개념 자체가 이 단원의 표준이라 통찰로는 세지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "폭 대소 → 1/2<|a|<3 · 위로 볼록 → a<0 → -3<a<-1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③, ④"
  answer_source: "답지"
  figure: crop:fig-182-04.png
  latex: latex-bank/gn-m31/items/182-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기준 계수(-3, -1/2)와 선택지 다섯 값. 제약: 범위 안에 정확히 두 선택지가 들어가야 하고 경계값(-3, -1/2)을 선택지에 넣으면 오답이 된다. 기준 계수를 바꾸면 크롭(폭의 비)을 다시 그려야 한다."
    creative: "(1) 아래로 볼록 쪽으로 옮겨 a>0 범위로(★2 유지) (2) 부호가 다른 두 기준을 주어 폭만 비교하게 하면 절댓값 해석이 필요해 ★3 (3) 「a 가 될 수 있는 정수의 개수」로 되묻기(★2 · 경계 함정 강화)."
```

```yaml
- id: GN-M31-182-05
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=\dfrac{3}{4}x^2$ 의 그래프를 $y$ 축의 방향으로 $k$ 만큼 평행이동한 그래프가 점 $(2,\,1)$ 을 지날 때 $k$ 의 값. 5지선다.
  category: "y축 평행이동 → y=(3/4)x^2+k → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y축 방향 평행이동과 지나는 점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행이동한 식을 쓰면 상수항만 k 가 붙고, 점 하나를 대입하면 3+k=1 로 끝난다. 함정도 분기도 없는 한 번 대입이다.
    통찰 0·M_total 5 → 기본 문제 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "y=(3/4)x^2+k → (2,1) 대입 → k=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/182-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3/4, 지나는 점의 좌표, 이동 방향. 제약: 계수와 점의 x 좌표를 맞춰 (계수)x^2 이 정수가 되게 해야 k 가 선택지로 쓸 정수가 된다."
    creative: "(1) x 축 방향 평행이동으로 바꾸면 꼭짓점 이동 해석이 붙어 ★2 (2) 두 방향 동시 이동으로 미지수를 둘로(★2~3 · 186-e1 골조) (3) 이동 뒤 그래프가 원점을 지나게 하는 k 를 묻기(★2 · 역방향)."
```

```yaml
- id: GN-M31-182-06
  page: 182
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $a>0$, $q<0$ 일 때 그림의 ㉮$\sim$㉱ 중 이차함수 $y=-ax^2+q$ 의 그래프로 알맞은 것 고르기.
  category: "계수의 부호 → 볼록 방향과 꼭짓점의 위치 → 그래프 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수의 부호로 y=ax^2+q 의 그래프 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>0 이므로 x^2 의 계수 -a 는 음수 → 위로 볼록, q<0 이므로 꼭짓점 (0,q) 가 x 축 아래다. 두 조건이 그림 네 개를 하나로 좁힌다.
    -a 의 부호를 a 의 부호로 착각하는 T-부호 함정이 핵심이라 M_t 2. 표준 개념 적용이라 통찰 0 · ★2 유지.
  tier: star_2
  mechanism_primary: "-a<0 → 위로 볼록 · q<0 → 꼭짓점 (0,q) 가 x 축 아래 → ㉱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "㉱"
  answer_source: "답지"
  figure: crop:fig-182-06.png
  latex: latex-bank/gn-m31/items/182-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 조건의 조합(a<0·q>0 등 네 가지). 제약: 어떤 조합이든 네 그림 중 정확히 하나만 맞게 그려야 하므로 크롭의 네 그래프를 그대로 두고 조건만 바꾸는 변형이 가장 싸다."
    creative: "(1) 식을 y=-a(x-q)^2 로 바꿔 축의 위치까지 부호로 정하게 하기(★3) (2) 그림을 주고 a, q 의 부호를 묻는 역방향(183-12 골조 · ★2) (3) 네 그림 중 「지나지 않는 사분면」을 함께 묻기(★3)."
```

```yaml
- id: GN-M31-183-07
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=2(x+7)^2$ 의 그래프가 $y=2x^2$ 을 $x$ 축 방향으로 $a$ 만큼 평행이동한 것이고 꼭짓점이 $(p,\,q)$ 일 때 $a-p+q$ 의 값. 5지선다.
  category: "이동량과 꼭짓점 읽기 → 세 값 조합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프의 식과 꼭짓점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+7)^2 이므로 이동량 a=-7, 꼭짓점은 (-7,0) 이라 p=-7, q=0 이다. 세 값을 a-p+q 에 넣으면 -7 과 +7 이 상쇄된다.
    +7 을 이동량 +7 로 읽는 T-부호와 a 와 p 를 같은 값으로 쓰는 T-표기 두 함정이 있어 M_t 2 · ★2 유지.
  tier: star_2
  mechanism_primary: "(x+7)^2 → a=-7 · 꼭짓점 (-7,0) → a-p+q=-7+7+0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/183-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 이동량 7, 묻는 조합 a-p+q. 제약: 조합을 바꾸면 상쇄가 사라져 답이 ±14 류로 커지므로 선택지 간격을 다시 잡아야 한다."
    creative: "(1) y 축 방향 이동을 더해 q≠0 으로(★2 유지) (2) a-p+q 대신 apq 를 묻기(0 이 되는 함정 · ★2) (3) 꼭짓점과 이동량을 주고 원래 식을 복원하기(역방향 ★3)."
```

```yaml
- id: GN-M31-183-08
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    다섯 이차함수 중 그래프의 축이 $y$ 축이 아닌 것 고르기.
  category: "식의 꼴 → 축의 방정식 x=p → p≠0 인 것"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프의 축의 방정식 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 가 (x-p)^2 꼴로 묶여 있는지만 보면 된다. ④ 는 -3(x^2+1) 로 괄호 안이 x^2 이라 축이 여전히 y 축이고, ⑤ 만 (x-1)^2 이다.
    계산도 분기도 없는 한 겹 판별 → 통찰 0·M_total 4 → 기본 문제 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "각 식을 y=a(x-p)^2+q 꼴로 보고 p≠0 인 것 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/183-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수·상수항. 제약: -3(x^2+1) 처럼 괄호가 있어도 축이 y 축인 미끼를 하나는 남기고, 정답은 (x-p)^2 꼴 하나만 둔다."
    creative: "(1) 축이 x=2 인 것을 고르게 하기(★1 유지) (2) 「축이 y 축인 것의 개수」로 되묻기(★1) (3) 식을 전개형으로 주어 완전제곱으로 고쳐야 축이 보이게 하면 ★3(중3 범위 밖 주의)."
```

```yaml
- id: GN-M31-183-09
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    이차함수 $y=-\dfrac{1}{3}(x-2)^2-1$ 의 그래프로 알맞은 것 고르기(그림 5지).
  category: "볼록 방향·꼭짓점·폭 → 그림 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a(x-p)^2+q 의 그래프 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=-1/3<0 이라 위로 볼록, 꼭짓점 (2,-1) 로 제4사분면, |a|<1 이라 폭이 넓다. 세 가지를 차례로 대면 그림 하나만 남는다.
    (x-2) 를 꼭짓점 x=-2 로 읽는 T-부호와 볼록 방향 T-부호가 겹쳐 M_t 2 · ★2 유지.
  tier: star_2
  mechanism_primary: "a<0 → 위로 볼록 · 꼭짓점 (2,-1) · |a|<1 → 폭 넓음 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-183-09.png
  latex: latex-bank/gn-m31/items/183-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 값과 꼭짓점 (p,q). 제약: 다섯 그림이 볼록 방향·꼭짓점 사분면·폭 세 축으로 갈라져야 하므로 숫자를 바꾸면 크롭 다섯 장을 다시 그려야 한다(변형 비용이 큰 문항)."
    creative: "(1) 그림을 주고 식을 고르는 역방향(★2 유지) (2) 그래프가 지나는 사분면을 함께 묻기(★3 · 184-18 골조) (3) 그림에 점 하나를 추가로 표시해 a 까지 결정하게 하기(★3)."
```

```yaml
- id: GN-M31-183-10
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=\dfrac{1}{4}(x+2)^2-3$ 의 그래프에 대한 다섯 설명(볼록 방향·꼭짓점·$y$ 절편·증감·평행이동) 중 옳지 않은 것.
  category: "꼭짓점·축 읽기 → 다섯 진술 각각 검증 → 증감 구간에서 오류 발견"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a(x-p)^2+q 의 그래프의 성질 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 (-2,-3)·a>0 을 잡으면 ①②⑤ 는 바로 참이고 ③ 은 x=0 대입으로 -2 확인이다. ④ 는 축의 오른쪽이라 증가해야 하므로 틀렸다.
    증감을 축의 왼쪽/오른쪽으로 나누는 T-범위와 (x+2) 의 T-부호 두 함정 → M_t 2. 진술 다섯 개를 훑는 절차형 ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (-2,-3)·a>0 → 다섯 진술 대조 → x>-2 는 증가 구간이므로 ④ 가 오류"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/183-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 값과 꼭짓점 (p,q). 제약: y 절편이 정수로 떨어지게 a 와 p 를 맞추고(여기서는 (1/4)·4=1), 오답 진술은 증감 구간 또는 부호 하나만 틀리게 만든다."
    creative: "(1) a<0 으로 바꿔 증감 진술을 통째로 뒤집기(★2 유지) (2) 「옳은 것의 개수」로 되묻기(★2) (3) 진술에 「제1사분면을 지난다」를 넣으면 사분면 판정이 붙어 ★3."
```

```yaml
- id: GN-M31-183-11
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=-2(x-3)^2+5$ 를 $x$ 축 방향 $2$, $y$ 축 방향 $-1$ 만큼 평행이동한 식을 $y=a(x-p)^2+q$ 라 할 때 $a+p+q$ 의 값.
  category: "꼭짓점 이동 → a 불변 → 세 상수의 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프의 식과 꼭짓점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동해도 x^2 의 계수는 그대로이고 꼭짓점 (3,5) 만 (5,4) 로 옮겨 간다. a=-2, p=5, q=4 를 더하면 된다.
    이동량을 식 안의 (x-3) 에 직접 더하려다 부호를 뒤집는 T-부호와 a 를 같이 옮기는 T-표기 함정 → M_t 2 · ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (3,5) → (5,4) · a=-2 불변 → a+p+q=-2+5+4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/183-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 식의 a·꼭짓점과 두 이동량. 제약: a 와 p, q 가 서로 상쇄돼 0 이 되지 않게 고르고, 합이 선택지 없이 답하기 좋은 한 자리 정수가 되게 맞춘다."
    creative: "(1) 이동 결과의 꼭짓점을 주고 이동량을 되묻기(역방향 ★3) (2) 이동량을 k, k+1 처럼 매개변수로(185-20 골조 · ★3) (3) 이동 후 그래프가 원점을 지날 조건으로 바꾸기(★3 · I-EQV d1)."
```

```yaml
- id: GN-M31-183-12
  page: 183
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    $y=a(x+p)^2+q$ 의 그래프가 그림과 같을 때 $a$, $p$, $q$ 의 부호에 대한 다섯 진술 중 옳은 것.
  category: "그래프 → 볼록 방향·꼭짓점 위치 → 세 상수의 부호 → 진술 대조"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프의 모양·위치로 a, p, q 의 부호 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    아래로 볼록이므로 a>0, 꼭짓점이 (-p,q) 이고 제1사분면에 있으므로 -p>0 즉 p<0, q>0 이다. 그러면 ap<0 이고 p-q<0 만 참이다.
    (x+p) 꼴이라 꼭짓점의 x 좌표가 -p 로 뒤집히는 T-부호가 핵심이고 곱 ap 의 부호 판정이 하나 더 붙는다.
    [분류 이슈] 기본 문제 구역(★2)이지만 골조가 서술형 186-e2·u2(★3)와 같다.
  tier: star_2
  mechanism_primary: "아래로 볼록 → a>0 · 꼭짓점 (-p,q) 가 제1사분면 → p<0, q>0 → p-q<0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-183-12.png
  latex: latex-bank/gn-m31/items/183-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점이 놓인 사분면(네 가지)과 볼록 방향(두 가지). 제약: 여덟 조합 중 어느 것을 골라도 다섯 진술 가운데 정확히 하나만 참이 되도록 진술을 다시 짜야 한다. 크롭은 꼭짓점 위치만 옮기면 된다."
    creative: "(1) 식을 y=a(x-p)^2+q 로 바꿔 부호 뒤집기를 없애면 ★1~2 (2) 읽은 부호로 다른 이차함수의 그래프를 그리게 하기(186-e2 골조 · ★3) (3) 진술을 ㄱㄴㄷ 보기로 바꿔 복수 선택(★3 · I-MI d1)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-184-13
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    그림의 네 포물선 $y=ax^2$ 과 $y=bx^2$, $y=cx^2$ 과 $y=dx^2$ 이 각각 $x$ 축에 대하여 대칭일 때 보기 ㄱ($a+b=0$) ㄴ($|b|>|d|$) ㄷ($a>c>b>d$) 중 옳은 것 모두 고르기.
  category: "x축 대칭 → 계수의 부호 반전 → 폭 비교로 절댓값 대소 → 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축에 대한 대칭을 두 계수의 부호만 뒤집는 관계 b=-a, d=-c 로 환원해 네 미지수를 두 개로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "y=ax^2 의 폭·x축 대칭과 계수의 대소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭에서 b=-a, d=-c 가 나오므로 ㄱ 은 참이다. 그림에서 a 쪽 포물선의 폭이 더 좁아 |a|>|c| 이고 그대로 |b|>|d| 이므로 ㄴ 도 참이다.
    ㄷ 은 음수 두 개의 대소가 절댓값과 반대로 뒤집혀 b<d 가 되므로 거짓이다. 대칭 통찰 1(SYM d1)·음수 대소 함정 → 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "x축 대칭 → b=-a, d=-c → 폭 비교로 |a|>|c| → ㄱㄴ 참, ㄷ 은 음수 대소가 뒤집혀 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-184-13.png
  latex: latex-bank/gn-m31/items/184-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 포물선의 폭 순서(크롭에서 정함)와 보기의 부등식. 제약: 대칭 쌍이 두 쌍이어야 ㄱ·ㄴ 이 성립하고, ㄷ 류 보기는 양수와 음수를 섞어 대소를 뒤집어야 오답이 된다."
    creative: "(1) y 축 대칭·원점 대칭으로 바꿔 부호 관계를 달리하기(★3 유지) (2) abcd 의 부호나 a+b+c+d 의 값을 묻기(★3) (3) 대칭축을 x=1 처럼 옮기면 평행이동까지 결합돼 ★4(I-SYM d2)."
```

```yaml
- id: GN-M31-184-14
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    직선 $y=4$ 가 $y$ 축과 만나는 점을 A, 두 이차함수 $y=ax^2$, $y=\dfrac{1}{2}x^2$ 의 그래프와 제1사분면에서 만나는 점을 각각 B, C 라 할 때 $\overline{AB}=\overline{BC}$ 이면 상수 $a$ 의 값.
  category: "y=4 대입 → 두 교점의 x좌표 → 선분 조건을 x좌표 비로 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "선분 조건 AB=BC 를 세 점이 같은 가로선 위에 있다는 사실과 묶어 x좌표 관계 (C의 x좌표)=2×(B의 x좌표) 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면 위 선분 조건으로 계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 점의 y 좌표가 모두 4 이므로 선분 길이는 x 좌표의 차다. AB=BC 는 C 의 x 좌표가 B 의 두 배라는 뜻이고, 여기에 y=4 를 두 식에 대입한 x 좌표를 넣으면 a 가 나온다.
    길이를 좌표 관계로 옮기는 통찰 1(EQV d1) · 제1사분면이라 양의 근만 쓰는 T-범위 → 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "y=4 대입 → B, C 의 x좌표 → AB=BC ⟺ (C의 x)=2×(B의 x) → a=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: crop:fig-184-14.png
  latex: latex-bank/gn-m31/items/184-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로선의 높이 4, 기준 계수 1/2, 길이 비 1:1. 제약: 두 교점의 x 좌표가 모두 근호 없이 떨어지도록 높이와 계수를 맞춰야 하고(여기서는 a=2 로 정수), 제1사분면 조건을 유지해야 부호 분기가 안 생긴다."
    creative: "(1) 길이 비를 AB:BC=1:2 로 바꾸기(★3 유지, 계수만 재계산) (2) 삼각형 ABС 대신 사각형 넓이를 묻기(★4 · 185-22 골조) (3) 가로선 대신 세로선 x=k 로 바꾸면 y 좌표 차가 되어 골조가 뒤집힘(★3)."
```

```yaml
- id: GN-M31-184-15
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    그림은 $y=-3x^2$ 의 그래프를 $y$ 축의 방향으로 평행이동한 것이다. 이 그래프의 식을 $y=f(x)$ 라 할 때 $f(-1)-f(2)$ 의 값.
  category: "y축 평행이동 → 상수항 q → 함숫값의 차에서 q 소거"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y축 평행이동량 q 가 두 함숫값의 차에서 소거됨을 보면 그림에서 이동량을 읽지 않고도 답이 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동 상수가 소거되는 함숫값의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=-3x^2+q 로 두면 f(-1)-f(2)=(-3+q)-(-12+q) 라 q 가 사라진다. 그림에서 이동량을 읽어 대입해도 같은 값이 나오므로 두 길 모두 짧다.
    통찰 1(EQV d1)이지만 M_total 6 에 계산 두 줄이 전부다.
    [분류 이슈] 발전 문제 구역(★3 출발)에서 −1 하여 ★2 로 둠.
  tier: star_2
  mechanism_primary: "f(x)=-3x^2+q → f(-1)-f(2)=(-3+q)-(-12+q)=9 (q 소거)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$9$"
  answer_source: "답지"
  figure: crop:fig-184-15.png
  latex: latex-bank/gn-m31/items/184-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -3 과 두 x 값(-1, 2). 제약: 두 x 값의 제곱 차가 답을 정하므로 |x1|≠|x2| 여야 하고(같으면 답이 0), 그림의 이동량은 답에 영향을 주지 않으므로 자유롭게 둔다."
    creative: "(1) x 축 방향 평행이동으로 바꾸면 소거가 깨져 이동량을 반드시 읽어야 함(★3) (2) f(-1)+f(2) 를 묻기(q 가 2q 로 남아 그림 읽기 필수 · ★3) (3) f(a)=f(b) 인 a, b 관계를 묻기(★3 · I-SYM d1)."
```

```yaml
- id: GN-M31-184-16
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    ㈎ 꼭짓점의 좌표가 $(-2,\,0)$ ㈏ $y=x^2$ 의 그래프보다 폭이 좁다 ㈐ 제1사분면과 제2사분면을 지나지 않는다 를 모두 만족시키는 이차함수의 식.
  category: "세 조건을 각각 계수 조건으로 번역 → 선택지 거르기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「제1·2사분면을 지나지 않는다」를 「위로 볼록하고 그래프가 x축 아래(꼭짓점이 x축 위)」, 즉 a<0 으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 모두 만족시키는 이차함수의 식 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 로 (x+2)^2 꼴이 확정되고 ㈏ 로 |a|>1, ㈐ 로 a<0 이 되어 a=-4 만 남는다.
    ㈐ 의 사분면 진술을 부호 조건으로 옮기는 단계가 통찰 1(EQV d1)이고, 꼭짓점이 x축 위라 그래프가 제3·4사분면에만 놓인다는 점이 함정이다. 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "㈎ → (x+2)^2 꼴 · ㈐ → a<0 · ㈏ → |a|>1 → a=-4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/184-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 (-2,0), 비교 기준 y=x^2, 선택지 다섯 개의 a. 제약: 세 조건 중 둘만 맞는 미끼를 각각 하나씩 배치해야 하고(폭만 맞는 것·부호만 맞는 것), 꼭짓점이 x축 위에 있어야 ㈐ 가 깔끔하게 a 의 부호로 환원된다."
    creative: "(1) ㈐ 를 「제3사분면만 지난다」로 바꾸면 꼭짓점 위치까지 제약돼 ★4 (2) 조건을 주고 식을 직접 세우게 하는 서술형(★3 유지) (3) ㈏ 를 「y=-2x^2 보다 폭이 넓다」로 바꿔 절댓값 범위를 만들면 ★3(경계 함정 추가)."
```

```yaml
- id: GN-M31-184-17
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    그림과 같이 두 이차함수 $y=a(x-b)^2$, $y=x^2+c$ 의 그래프가 서로의 꼭짓점을 지날 때 상수 $a$, $b$, $c$ 에 대하여 $abc$ 의 값.
  category: "두 꼭짓점 읽기 → 서로 대입 → 남은 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「서로의 꼭짓점을 지난다」를 두 개의 점 대입식으로 바꿔 미지수 세 개를 두 식으로 닫음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 포물선이 서로의 꼭짓점을 지날 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에 표시된 두 꼭짓점 (3,0)·(0,-9) 에서 b=3, c=-9 가 바로 읽힌다. 남은 a 는 (0,-9) 를 y=a(x-3)^2 에 넣어 9a=-9 로 정한다.
    조건을 두 대입으로 옮기는 통찰 1(EQV d1)이고, 어느 꼭짓점을 어느 식에 넣는지 짝을 맞추는 것이 함정이다. 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "그림의 꼭짓점 (3,0)·(0,-9) → b=3, c=-9 → (0,-9) 를 y=a(x-3)^2 에 대입해 a=-1 → abc=27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$27$"
  answer_source: "답지"
  figure: crop:fig-184-17.png
  latex: latex-bank/gn-m31/items/184-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림에 적힌 두 수(3 과 -9). 제약: 두 꼭짓점이 서로의 그래프 위에 있어야 하므로 c=-b^2 이 강제되고, a 는 c=ab^2 에서 -1 로 고정된다. 즉 자유롭게 바꿀 수 있는 수는 b 하나이며 c 와 a 는 따라 정해진다(그림의 두 라벨을 함께 고쳐야 함)."
    creative: "(1) 한 꼭짓점만 그림에 주고 나머지는 조건으로 주기(★3 유지) (2) 두 그래프의 교점 좌표를 묻기(★4 · 연립 추가) (3) y=x^2+c 대신 y=k x^2+c 로 바꾸면 미지수가 넷이 되어 조건이 하나 더 필요(★4)."
```

```yaml
- id: GN-M31-184-18
  page: 184
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    다섯 이차함수 중 그래프가 모든 사분면을 지나는 것 고르기.
  category: "「모든 사분면」을 볼록 방향·꼭짓점·y절편 조건으로 번역 → 선택지 거르기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 사분면을 지난다」를 「위로 볼록하고 꼭짓점이 x축 위이며 y절편이 양수」로 바꿈 — 아래로 볼록이면 제3·4사분면 중 하나를 반드시 못 지난다는 관찰이 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프가 지나는 사분면 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아래로 볼록한 포물선은 위쪽으로만 뻗으므로 네 사분면을 다 지날 수 없다. 남는 후보는 위로 볼록한 ②③ 이고, 꼭짓점이 x축 위이면서 y절편이 양수인 ③ 만 x축을 두 번 가로질러 제2·3사분면까지 닿는다.
    사분면 진술을 세 계수 조건으로 옮기는 통찰 1(EQV d2)·선택지 훑기 → 발전 문제 ★3 유지.
  mechanism_primary: "아래로 볼록 배제 → a<0 · 꼭짓점의 y좌표>0 · y절편>0 → ③"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/184-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 a 와 꼭짓점 (p,q). 제약: 정답은 a<0, q>0, y절편 ap^2+q>0 셋을 모두 만족해야 하고, 미끼로 「위로 볼록이지만 꼭짓점이 x축 아래」와 「꼭짓점이 제1사분면이지만 아래로 볼록」을 각각 하나씩 둔다."
    creative: "(1) 「제3사분면을 지나지 않는 것」처럼 사분면 하나만 묻기(★2) (2) 계수를 a 로 두고 모든 사분면을 지날 a 의 범위를 묻기(185-24 골조 · ★4) (3) 지나는 사분면을 모두 쓰게 하는 서술형(186-e2 골조 · ★3)."
```

```yaml
- id: GN-M31-185-19
  page: 185
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    $y=a(x-p)^2+q$ 의 그래프가 직선 $x=-3$ 을 축으로 하고 꼭짓점의 $y$ 좌표가 $-7$ 이며 점 $(0,\,2)$ 를 지날 때 $a+p-q$ 의 값. 5지선다.
  category: "축·꼭짓점에서 p, q 읽기 → 지나는 점 대입으로 a → 조합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축·꼭짓점·지나는 점으로 식 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축의 방정식이 x=p 이므로 p=-3, 꼭짓점의 y 좌표가 q 이므로 q=-7 이 그대로 읽힌다. (0,2) 를 넣으면 9a-7=2 로 a=1 이다.
    세 조건을 각각 한 자리에 옮기는 표준 절차로 통찰이 없다. p 의 부호와 -q 부호 두 함정만 있어 M_t 2.
    [분류 이슈] 발전 문제 구역(★3 출발)에서 −1 하여 ★2 로 둠.
  tier: star_2
  mechanism_primary: "축 x=-3 → p=-3 · 꼭짓점 y좌표 → q=-7 · (0,2) 대입 → a=1 → a+p-q=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/185-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 x=-3, 꼭짓점의 y 좌표 -7, 지나는 점 (0,2). 제약: 지나는 점의 x 좌표와 축의 거리 제곱이 (y차)를 나눠떨어지게 해야 a 가 정수가 된다(여기서는 9|9)."
    creative: "(1) 지나는 점 대신 y 절편을 주기(★2 유지) (2) 축과 두 x절편을 주어 대칭으로 축을 역산하게 하기(★3 · I-SYM d1) (3) a 의 부호만 조건으로 주고 가능한 식을 모두 구하게 하면 ★4."
```

```yaml
- id: GN-M31-185-20
  page: 185
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    $y=-2x^2+1$ 의 그래프를 $x$ 축 방향 $k$, $y$ 축 방향 $k+1$ 만큼 평행이동한 그래프의 꼭짓점이 직선 $y=-2x+8$ 위에 있을 때 $k$ 의 값.
  category: "꼭짓점 이동 → (k, k+2) → 직선에 대입해 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 꼭짓점이 직선 위에 있을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    꼭짓점 (0,1) 이 (k, 1+(k+1))=(k, k+2) 로 옮겨 가고, 이 점이 직선 위에 있다는 조건은 k+2=-2k+8 한 줄이다.
    이동량이 둘 다 k 로 묶여 있어 미지수가 하나로 유지되는 것이 이 문항의 설계다. 통찰로 셀 만큼의 재해석은 아니지만 매개변수 처리(M_a 2)와 이동량 합성이 있어 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "꼭짓점 (0,1) → (k, k+2) → 직선에 대입 k+2=-2k+8 → k=2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/185-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 식의 꼭짓점, 두 이동량의 k 조합, 직선의 기울기와 y절편. 제약: 직선의 기울기가 이동량의 비와 같으면 해가 없거나 무수히 많아지므로 피한다. k 가 정수로 떨어지게 y절편을 맞춘다."
    creative: "(1) 꼭짓점이 x축·y축 위에 있을 조건으로 바꾸기(★2) (2) 이동량을 k 와 k^2 으로 주면 이차방정식이 되어 해가 둘(★4 · I-VF d1 로 조건 검증 추가) (3) 꼭짓점이 제2사분면에 있을 k 의 범위를 묻기(★4 · I-MI d1)."
```

```yaml
- id: GN-M31-185-21
  page: 185
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    일차함수 $y=ax+b$ 의 그래프가 그림과 같을 때 이차함수 $y=a(x+b)^2$ 의 그래프로 알맞은 것 고르기(그림 5지).
  category: "직선의 기울기·y절편 부호 → 이차함수의 볼록 방향·축 위치 → 그림 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일차함수 그래프에서 읽은 계수의 부호를 이차함수의 볼록 방향과 축 x=-b 로 옮기는 표현 전환(직선 그림 → 포물선 그림)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차함수 그래프의 부호를 이차함수 그래프로 옮기기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선 그림에서 기울기 a 와 y 절편 b 의 부호를 읽은 뒤, 같은 문자를 이차함수에 넣어 볼록 방향(a)과 축의 위치(x=-b)를 정한다.
    두 그림 사이를 오가는 표현 전환 통찰 1(RT d1) · (x+b) 에서 축이 -b 로 뒤집히는 T-부호가 겹쳐 M_t 2. 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "직선 그림 → a, b 의 부호 → 볼록 방향은 a · 축은 x=-b → ④"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-185-21-5.png
  latex: latex-bank/gn-m31/items/185-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선이 지나는 사분면(부호 조합 네 가지)과 다섯 선택지 그림. 제약: 조건을 바꾸면 직선 크롭과 선택지 포물선 다섯 장을 모두 다시 그려야 한다(변형 비용이 이 범위에서 가장 큰 문항)."
    creative: "(1) 이차함수 그림을 주고 직선 그림을 고르게 하는 역방향(★3 유지) (2) y=b(x+a)^2 으로 문자를 맞바꿔 출제(★3) (3) 이차함수 쪽에 상수항을 더해 y=a(x+b)^2+ab 로 만들면 꼭짓점의 사분면까지 판정해야 해 ★4."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-185-22
  page: 185
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    $y=\dfrac{1}{2}x^2$, $y=-x^2$ 의 그래프 위의 네 점 A, B, C, D 를 꼭짓점으로 하는 정사각형 ABCD(각 변이 $x$ 축 또는 $y$ 축에 평행)에서 점 D 의 $x$ 좌표.
  category: "y축 대칭으로 한 문자화 → 가로·세로를 t 로 → 정사각형 조건 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 포물선이 모두 y축 대칭이고 변이 축에 평행하므로 네 점이 (±t, …) 로 묶여 미지수가 t 하나로 줄어듦"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정사각형이다」를 가로 길이 2t 와 세로 길이 (1/2)t^2+t^2 이 같다는 한 개의 방정식으로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "포물선 위의 점으로 만든 정사각형"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    대칭 덕분에 네 점의 좌표가 모두 t 로 쓰이고, 가로는 2t, 세로는 위 포물선과 아래 포물선의 y 좌표 차 (3/2)t^2 가 된다. 정사각형 조건 2t=(3/2)t^2 에서 t>0 인 해만 취한다.
    대칭 활용(SYM d2)과 도형 조건의 식 전환(EQV d2) 두 통찰 · t=0 을 버리는 검토까지 있어 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "D 의 x좌표를 t 로 → 대칭으로 가로=2t · 세로=(3/2)t^2 → 2t=(3/2)t^2 → t=4/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: crop:fig-185-22.png
  latex: latex-bank/gn-m31/items/185-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선의 계수(1/2 과 -1). 제약: 세로 길이는 두 계수의 절댓값 합에 비례하므로 t=2/(|a|+|b|)·2 꼴로 유리수가 되게 계수를 고른다. 두 계수의 부호가 달라야 위·아래로 갈라져 직사각형이 만들어진다."
    creative: "(1) 정사각형 대신 「가로가 세로의 2배인 직사각형」으로(★4 유지) (2) 정사각형의 넓이나 둘레를 묻기(★4) (3) 두 포물선을 같은 방향(둘 다 위로)으로 두면 네 점 배치를 학생이 다시 정해야 해 ★5 후보(I-MI 추가)."
```

```yaml
- id: GN-M31-185-23
  page: 185
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    $y=\dfrac{1}{2}x^2+2$, $y=\dfrac{1}{2}x^2-1$ 의 그래프와 두 직선 $x=-1$, $x=2$ 로 둘러싸인 부분의 넓이.
  category: "두 곡선이 평행이동 관계 → 세로 간격 일정 → 직사각형으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 포물선이 y축 방향 평행이동 관계라 세로 간격이 어디서나 3 으로 일정함을 보고, 곡선으로 둘러싸인 영역을 가로 3 · 세로 3 인 직사각형으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 포물선과 두 직선으로 둘러싸인 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    같은 x 에서 두 그래프의 y 좌표 차는 언제나 3 이므로, 굽은 위·아래 변을 평행이동으로 밀어 붙이면 밑변 3(=2-(-1)) · 높이 3 인 직사각형이 된다.
    M_total 5 로 계산은 한 줄뿐이지만, 곡선 영역을 직사각형으로 바꾸는 착안이 없으면 중3 도구로는 접근 자체가 막힌다.
    [분류 이슈] M 만 보면 ★2 급이나 진입 저항으로 실력 UP ★4 를 유지.
  tier: star_4
  mechanism_primary: "두 그래프의 세로 간격 = 3(일정) → 밑변 3 · 높이 3 직사각형 → 넓이 9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$9$"
  answer_source: "답지"
  figure: crop:fig-185-23.png
  latex: latex-bank/gn-m31/items/185-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수항(2 와 -1)과 두 직선 x=-1, x=2. 제약: 두 포물선의 x^2 계수가 반드시 같아야 간격이 일정해진다(다르면 중3 범위에서 풀 수 없다). 넓이는 (상수항 차)×(직선 간격) 이므로 둘 다 정수로 둔다."
    creative: "(1) 넓이를 주고 상수항이나 직선 위치를 되묻기(역방향 ★4) (2) 두 직선을 y=k 두 개로 바꾸면 가로 간격이 일정하지 않아 골조가 깨짐(출제 금지 축) (3) 세 번째 포물선을 넣어 영역을 두 조각으로 나누기(★4 유지, 계산량만 증가)."
```

```yaml
- id: GN-M31-185-24
  page: 185
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    $y=a(x-2)^2+5$ 의 그래프가 모든 사분면을 지나도록 하는 상수 $a$ 의 값이 될 수 있는 것. 5지선다.
  category: "사분면별 통과 조건 → 가장 강한 조건(y절편>0) → a 의 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점이 제1사분면에 고정돼 있으므로 「모든 사분면을 지난다」를 「위로 볼록(a<0)이고 y절편 4a+5 가 양수」로 환원"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 사분면의 통과 여부를 따로 확인해 제2사분면 조건이 나머지를 모두 함의하는 가장 강한 조건임을 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프가 지나는 사분면 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    꼭짓점 (2,5) 는 제1사분면이므로 a>0 이면 왼쪽 아래로 내려가지 못해 제3·4사분면을 놓친다. a<0 이면 오른쪽에서 제4사분면을 지나고, 왼쪽에서 x축을 x<0 에서 끊으려면 y절편 4a+5>0 이어야 한다.
    결국 -5/4<a<0 이고 선택지 중 -1/2 만 들어간다. 조건 환원(EQV d2)과 사분면별 확인(MI d1) 두 통찰 · 경계 함정 → 실력 UP ★4 유지.
    [분류 이슈] ★4 인데 통찰이 EQV·MI 뿐이라 저노출 유형이 없다(§2.13 YELLOW).
  tier: star_4
  mechanism_primary: "a<0(위로 볼록) + y절편 4a+5>0 → -5/4<a<0 → -1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/185-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 (2,5) 와 선택지 다섯 값. 제약: 범위의 경계가 -q/p^2 이므로 q 와 p^2 을 맞춰 경계를 유리수로 만들고, 경계값(-5/4)을 선택지에 넣으면 오답 미끼가 된다. 범위 안에 선택지가 정확히 하나만 들어가야 한다."
    creative: "(1) 「모든 사분면」을 「제3사분면을 지나지 않는다」로 바꿔 범위의 방향을 뒤집기(★4 유지) (2) a 의 범위를 직접 구하게 하는 서술형(★4) (3) 꼭짓점을 제2사분면으로 옮기면 대칭 위치가 바뀌어 조건식이 달라짐(★4 · 새 골조)."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-186-e1
  page: 186
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    원점을 꼭짓점으로 하고 점 $(-3,\,-6)$ 을 지나는 이차함수의 그래프를 $x$ 축 방향 $2$, $y$ 축 방향 $-1$ 만큼 평행이동한 그래프가 점 $(5,\,k)$ 를 지날 때 $k$ 의 값. [7점]
  category: "원점 꼭짓점 → y=ax^2 에 점 대입 → 평행이동 → 다시 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점 꼭짓점 포물선의 평행이동과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 원점이면 식은 y=ax^2 하나뿐이고, (-3,-6) 을 넣어 a 를 정한 뒤 이동식 y=a(x-2)^2-1 에 x=5 를 넣으면 끝난다.
    세 단계가 모두 대입이고 분기가 없다. 분수 계수 계산만 남아 서술형 ★3 출발에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "y=ax^2 에 (-3,-6) 대입 → a 결정 → y=a(x-2)^2-1 → x=5 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-7$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/186-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (-3,-6), 두 이동량, 묻는 x 값 5. 제약: 첫 대입에서 a 가 유리수로 떨어지게 하고, 묻는 x 와 이동량의 차의 제곱이 a 의 분모를 지워 k 가 정수가 되게 맞춘다(여기서는 (5-2)^2=9)."
    creative: "(1) k 를 주고 이동량을 되묻기(역방향 ★3) (2) 이동 후 그래프가 원점을 지날 조건으로 바꾸기(★3) (3) 꼭짓점을 원점이 아닌 점으로 주면 미지수가 셋이 되어 ★3."
```

```yaml
- id: GN-M31-186-u1
  page: 186
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    원점을 꼭짓점으로 하고 점 $\left(\dfrac{1}{2},\,1\right)$ 을 지나는 이차함수의 그래프를 $x$ 축 방향 $1$, $y$ 축 방향 $p$ 만큼 평행이동한 그래프가 점 $(2,\,7)$ 을 지날 때 $p$ 의 값. [7점]
  category: "원점 꼭짓점 → a 결정 → 평행이동식에 점 대입해 p"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점 꼭짓점 포물선의 평행이동과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    186-e1 의 짝 유제로 골조가 같고, 마지막에 묻는 것이 함숫값 대신 이동량 p 라는 점만 다르다. (1/2,1) 대입으로 a=4, 이어서 (2,7) 대입으로 p 가 나온다.
    통찰 없음·M_total 6 → 서술형 ★3 출발에서 −1 하여 ★2(짝 예제와 같은 층).
  tier: star_2
  mechanism_primary: "y=ax^2 에 (1/2,1) 대입 → a=4 → y=4(x-1)^2+p → (2,7) 대입 → p=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/186-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (1/2,1), x 방향 이동량 1, 두 번째 점 (2,7). 제약: 첫 점의 x 좌표를 분수로 두면 a 가 커져 계산이 깔끔해진다. 두 번째 점은 이동 후 축에서 정수 거리에 두어 p 가 정수가 되게 한다."
    creative: "(1) x 방향 이동량까지 미지수로 두면 조건이 하나 더 필요(★3) (2) 이동 뒤 꼭짓점의 좌표를 묻기(★2 유지) (3) 지나는 두 점을 주고 이동량 둘을 모두 구하게 하기(★3 · 연립)."
```

```yaml
- id: GN-M31-186-e2
  page: 186
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    $y=a(x-p)^2+q$ 의 그래프가 그림과 같을 때 이차함수 $y=q(x+a)^2-p$ 의 그래프가 지나는 사분면 모두 구하기. [8점]
  category: "그림 → a, p, q 의 부호 → 새 식의 볼록 방향·꼭짓점 → 사분면"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에서 읽은 부호를 그대로 새 이차함수의 계수 자리로 옮겨 다시 그래프의 모양·위치로 되돌리는 양방향 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프의 모양·위치로 a, p, q 의 부호 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 아래로 볼록·꼭짓점이 제4사분면이므로 a>0, p>0, q<0 이다. 새 식 y=q(x+a)^2-p 는 q<0 이라 위로 볼록이고 꼭짓점 (-a,-p) 가 제3사분면이라 그래프 전체가 x축 아래에 놓인다.
    읽은 부호를 다시 그림으로 되돌리는 표현 전환 통찰 1(RT d2) · 부호 자리바꿈 함정 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "그림 → a>0, p>0, q<0 → y=q(x+a)^2-p 는 위로 볼록·꼭짓점 (-a,-p) 가 제3사분면 → 제3·4사분면"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "제$3$사분면, 제$4$사분면"
  answer_source: "본문 답"
  figure: crop:fig-186-e2.png
  latex: latex-bank/gn-m31/items/186-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 그래프의 볼록 방향과 꼭짓점 사분면(여덟 조합). 제약: 새 식의 꼭짓점이 x축이나 y축 위에 놓이면 답이 달라지므로 세 상수 모두 0 이 아니어야 하고, 크롭은 꼭짓점 위치만 옮기면 된다."
    creative: "(1) 문자를 다르게 배치한 y=p(x-q)^2+a 로 출제(★3 유지 · 186-u2 가 이미 이 변형) (2) 지나지 않는 사분면을 묻기(★3) (3) 새 그래프가 원점을 지날 조건을 덧붙이면 대소까지 필요해 ★4."
```

```yaml
- id: GN-M31-186-u2
  page: 186
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    $y=a(x+p)^2+q$ 의 그래프가 그림과 같을 때 이차함수 $y=-p(x-q)^2-a$ 의 그래프가 지나는 사분면 모두 구하기. [8점]
  category: "그림 → a, p 의 부호 → 새 식의 볼록 방향·꼭짓점의 높이 → 사분면"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "읽은 부호를 새 식의 계수로 옮겨 그래프를 되그리되, q 는 축의 위치만 정해 답에 영향을 주지 않음을 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프의 모양·위치로 a, p, q 의 부호 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 위로 볼록이므로 a<0 이고 꼭짓점의 x 좌표가 -p>0 이라 p<0 이다. 새 식은 -p>0 이라 아래로 볼록, 꼭짓점 (q,-a) 의 y 좌표 -a>0 이라 그래프 전체가 x축 위에 놓인다.
    q 의 부호는 축을 좌우로 옮길 뿐 답을 바꾸지 않는다는 점이 이 문항의 숨은 포인트다. 표현 전환 통찰 1(RT d2) → 서술형 ★3 유지(186-e2 의 짝 유제).
  tier: star_3
  mechanism_primary: "그림 → a<0, p<0 → y=-p(x-q)^2-a 는 아래로 볼록·꼭짓점 (q,-a) 가 x축 위 → 제1·2사분면"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "제$1$사분면, 제$2$사분면"
  answer_source: "답지"
  figure: crop:fig-186-u2.png
  latex: latex-bank/gn-m31/items/186-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 그래프의 볼록 방향과 꼭짓점 위치. 제약: 새 식에서 꼭짓점의 y 좌표 -a 의 부호만 정해지면 답이 확정되므로, q 를 답에 쓰이지 않는 자리에 두는 설계를 유지한다."
    creative: "(1) q 가 답에 관여하도록 새 식을 y=-p(x-a)^2-q 로 바꾸기(★3~4) (2) 새 그래프와 x축의 교점 개수를 묻기(★3) (3) 원래 그래프의 y절편 부호를 추가로 표시해 세 부호를 모두 확정하게 하기(★3)."
```

```yaml
- id: GN-M31-187-u3
  page: 187
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    이차함수 $f(x)=x^2+ax+b$ 에 대하여 $f(-1)=7$, $f(3)=-1$ 일 때 $f(-2)$ 의 값. [6점]
  category: "두 함숫값 → a, b 연립 → 다른 함숫값 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 함숫값과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 대입하면 a, b 에 대한 일차연립방정식이 되고, 풀어 얻은 계수로 f(-2) 를 계산한다.
    182-03 을 미지수 두 개로 늘린 표준 골조로 통찰이 없다. 음수 대입 부호만 조심하면 되므로 서술형 ★3 출발에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "f(-1)=7, f(3)=-1 → a, b 연립 → f(-2) 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/187-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건의 x 와 함숫값, 묻는 x. 제약: 두 조건의 x 차가 계수를 나눠떨어지게 해야 a, b 가 정수가 된다(여기서는 4a=-16). x^2 의 계수를 1 이 아닌 값으로 두면 계산만 무거워진다."
    creative: "(1) 조건을 f(1)=f(5) 처럼 대칭으로 주면 축을 먼저 읽는 골조가 됨(★3 · I-SYM d1) (2) 미지수를 셋으로 늘려 y=ax^2+bx+c 로(★3) (3) f(-2) 대신 f 의 최솟값이나 꼭짓점을 묻기(중3 범위 확인 필요 · ★3)."
```

```yaml
- id: GN-M31-187-u4
  page: 187
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    $y=-\dfrac{3}{5}x^2$ 의 그래프가 점 $(-5,\,a)$ 를 지나고, $y=bx^2$ 의 그래프와 $x$ 축에 대하여 대칭일 때 $ab$ 의 값. [6점]
  category: "점 대입으로 a → x축 대칭으로 b → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ax^2 의 x축 대칭과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-5 를 넣어 a 를 구하고, x축 대칭은 x^2 의 계수 부호만 뒤집는 것이므로 b 가 바로 나온다. 두 단계가 서로 독립이라 순서도 자유롭다.
    대칭이 이 단원의 표준 개념이라 통찰로 세지 않았다. M_total 5·통찰 0 이나 두 갈래를 각각 처리해야 해 서술형 ★3 에서 −1 한 ★2 로 둠.
  tier: star_2
  mechanism_primary: "x=-5 대입 → a=-15 · x축 대칭 → b=3/5 → ab=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/187-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -3/5 와 지나는 점의 x 좌표 -5. 제약: x 좌표의 제곱이 분모를 지워 a 가 정수가 되게 한다(25/5). ab 가 정수가 되도록 분자·분모를 맞춘다."
    creative: "(1) y축 대칭·원점 대칭으로 바꿔 부호 관계를 달리하기(★2 유지) (2) 대칭인 두 그래프와 직선으로 둘러싸인 넓이를 묻기(★4 · 185-23 골조) (3) a 를 주고 계수를 되묻는 역방향(★2)."
```

```yaml
- id: GN-M31-187-u5
  page: 187
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    $y=ax^2$ 의 그래프를 $x$ 축 방향으로 $p$ 만큼 평행이동한 그래프의 축의 방정식이 $x=5$ 이고, 그 그래프가 점 $(2,\,3)$ 을 지날 때 $p-6a$ 의 값. [7점]
  category: "축의 방정식 → p → 점 대입으로 a → 조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프의 축과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 축 방향 이동량이 곧 축의 방정식이므로 p=5 이고, y=a(x-5)^2 에 (2,3) 을 넣으면 9a=3 이다.
    두 번의 대입이 전부이고 분기가 없다. 통찰 0·M_total 5 → 서술형 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "축 x=5 → p=5 → y=a(x-5)^2 에 (2,3) 대입 → a=1/3 → p-6a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/187-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축의 위치 5, 지나는 점 (2,3), 묻는 조합 p-6a. 제약: (점의 x - 축)^2 이 점의 y 값을 나눠떨어지게 해야 a 가 간단한 분수가 되고, 조합의 계수 6 은 a 의 분모를 지우도록 고른다."
    creative: "(1) y 축 방향 이동까지 더해 미지수를 셋으로(★3) (2) 축 대신 꼭짓점을 주기(★2 유지) (3) 지나는 점을 둘 주고 축을 역산하게 하기(★3 · I-SYM d1)."
```

```yaml
- id: GN-M31-187-u6
  page: 187
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    $y=a(x+p)^2+q$ 의 그래프가 그림과 같을 때 상수 $a$, $p$, $q$ 에 대하여 $apq$ 의 값. [7점]
  category: "그림의 꼭짓점 → p, q → 지나는 점 대입으로 a → 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그림에서 꼭짓점·지나는 점을 읽어 식 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림의 꼭짓점 (-3,3) 에서 -p=-3 이므로 p=3, q=3 이다. y 절편 1 을 넣으면 9a+3=1 이라 a 는 분수로 나오고, 세 값을 곱하면 분모가 지워진다.
    (x+p) 꼴이라 p 의 부호가 뒤집히는 T-부호와 분수 계수 계산(T-표기) 두 함정 · 통찰 없이 세 단계 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "그림의 꼭짓점 (-3,3) → p=3, q=3 → y절편 (0,1) 대입 → a=-2/9 → apq=-2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-2$"
  answer_source: "답지"
  figure: crop:fig-187-u6.png
  latex: latex-bank/gn-m31/items/187-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림에 적힌 세 수(꼭짓점 -3, 3 과 y절편 1). 제약: (꼭짓점의 x)^2 이 (q - y절편)을 나눈 몫이 a 이므로, apq 가 정수가 되려면 p^2 이 p·q 와 약분돼야 한다(여기서 9 와 3·3). 숫자를 바꾸면 크롭의 세 라벨을 함께 고쳐야 한다."
    creative: "(1) 꼭짓점 대신 두 x절편을 표시해 대칭으로 축을 찾게 하기(★4 · I-SYM d1) (2) apq 대신 a+p+q 를 묻기(분모가 남아 분수 답 · ★3) (3) 그림을 빼고 「꼭짓점이 제2사분면이고 y절편이 1」처럼 말로 주면 위치 해석이 붙어 ★4."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 2 · ★2 17 · ★3 10 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 20 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 4 · I-SYM 2 · I-MI 1 (총 14 라벨 / 12 문항). depth 2 가 8 개로, 「사분면 통과 조건 환원」과 「그림 ↔ 식 양방향 전환」이 이 범위의 깊은 단계다.
- 구역별 라벨: STEP 1 기본 문제 12문(★1 2 · ★2 10) · STEP 2 발전 문제 9문(★2 2 · ★3 7) · STEP 3 실력 UP 3문(★4 3) · 서술형 대비 문제 8문(★2 5 · ★3 3). 구역 출발점과 라벨이 2단 이상 어긋난 문항은 없다.
- type_hint 상위: 「그래프의 모양·위치로 a, p, q 의 부호 판정」 3(183-12 · 186-e2 · 186-u2) · 「평행이동한 그래프의 식과 꼭짓점 좌표」 2(183-07 · 183-11) · 「이차함수의 함숫값과 미정계수」 2(182-03 · 187-u3) · 「그래프가 지나는 사분면 조건」 2(184-18 · 185-24) · 「원점 꼭짓점 포물선의 평행이동과 지나는 점」 2(186-e1 · 186-u1). 이름은 달라도 평행이동 계열로 묶이는 문항이 7문(182-05 · 183-07 · 183-11 · 185-20 · 186-e1 · 186-u1 · 187-u5)으로 이 범위 최대 덩어리다.
- 그림: 14문(`crop:fig-182-04` · `fig-182-06` · `fig-183-09` · `fig-183-12` · `fig-184-13` · `fig-184-14` · `fig-184-15` · `fig-184-17` · `fig-185-21-5` · `fig-185-22` · `fig-185-23` · `fig-186-e2` · `fig-186-u2` · `fig-187-u6`). 이 가운데 183-09 와 185-21 은 선택지 자체가 그림 5 장이어서 숫자 변형 비용이 가장 크고, 184-17 · 187-u6 은 그림의 라벨 숫자가 곧 조건이라 변형 시 크롭을 함께 고쳐야 한다.
- 태그: 「꼭나와」 6문(182-03 · 182-04 · 183-10 · 184-14 · 184-18 · 185-21) — 빈출 표시로만 보고 ★ 에 더하지 않았다.
- 답 출처: 본문 답 2문(186-e1 · 186-e2 — 서술형 예제) · 답지 30문. 골조를 잡는 과정에서 전사본 answer 와 어긋나 보이는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-183-12 | 기본 문제 구역(★2 출발)이나 골조가 서술형 186-e2·186-u2(★3)와 사실상 같다. 진술 다섯 개를 모두 검증해야 해 M_total 7 로 이 구역 최대 | ★2 / ★3 |
| GN-M31-184-15 | 발전 문제 구역(★3 출발)이나 평행이동 상수 $q$ 가 함숫값의 차에서 소거돼 계산이 두 줄이다. 통찰 1(EQV d1)만으로는 ★3 을 지탱하지 못해 ★2 로 내림 | ★2 / ★3 |
| GN-M31-185-19 | 발전 문제 구역이나 축·꼭짓점·지나는 점을 각각 한 자리에 옮기는 표준 절차(통찰 0 · M_total 6)라 ★2. 같은 구역의 185-20(★3)과 한 단 차이 | ★2 / ★3 |
| GN-M31-185-23 | M_total 5 로 이 범위 최저급이지만, 곡선 영역을 평행이동 불변으로 직사각형에 환원하는 착안이 없으면 중3 도구로는 손을 못 댄다. 노동량과 진입 저항이 정반대로 갈리는 문항 | ★3 / ★4 |
| GN-M31-185-24 | ★4 슬롯인데 통찰이 I-EQV·I-MI 뿐이라 §2.13 의 저노출 유형(SC/VF/SYM/XU/RT/PD/BW)이 없다 → YELLOW. 실력 UP 구역과 경계 함정을 근거로 ★4 를 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ⑴ 「평행이동한 식 세우기」(이동량 → 식 · 182-05 · 183-07 · 183-11 · 186-e1 · 186-u1 · 187-u5)와 ⑵ 「평행이동 결과에 조건을 건 역방향」(185-20 · 186-u1 의 $p$ 되묻기)은 base ★ 가 달라야 한다(전자 ★1~2, 후자 ★3). ⑶ 「그래프의 모양에서 계수의 부호 읽기」(183-12 · 185-21 · 186-e2 · 186-u2)는 이 단원 고유의 뿌리 유형으로 base ★2~3, 여기에 「읽은 부호로 다른 그래프를 되그리기」가 붙으면 한 층 올라간다. ⑷ 「지나는 사분면 조건」(184-16 · 184-18 · 185-24)은 선택지 거르기(★3)와 범위 구하기(★4)로 층이 갈린다.
- **통합해도 될 유형**: 「$y=ax^2$ 의 폭·대칭과 계수」의 세 변종 — 폭 비교로 범위 구하기(182-04) · $x$축 대칭 쌍의 대소 비교(184-13) · 대칭인 계수 구하기(187-u4) — 은 한 유형의 난이도 층으로 묶는 편이 낫다. 절댓값과 부호 중 어느 쪽을 물으냐가 곧 base ★ 를 정하는 축이다. 「이차함수의 뜻·함숫값」(182-01 · 182-02 · 182-03 · 187-u3)도 미지수 개수만 다른 한 뿌리다.
- 「그래프가 지나는 사분면」은 이 범위에서 세 번(184-16 · 184-18 · 185-24) 나왔고 서술형 두 문(186-e2 · 186-u2)까지 합치면 다섯 문이다. 카탈로그에서는 단원 유형이라기보다 **여러 유형에 얹는 되묻기 카드**로 등록해 부호 판정·범위 구하기 양쪽에 재사용하는 편이 낫다.
- 좌표평면 위 도형 문항(184-14 선분 · 185-22 정사각형 · 185-23 넓이)은 셋 다 통찰형이고 이 범위 ★4 세 문 중 둘이 여기서 나왔다. 변형 출제 때 가장 먼저 쓸 축이며, 공통 골조는 「포물선 위의 점을 한 문자로 두고 도형 조건을 방정식으로 바꾸기」다. 카탈로그에서는 이 골조를 별도 뿌리로 세우고 도형(선분·직사각형·정사각형·넓이)을 변형 슬롯으로 붙인다.
- ★1 슬롯이 182-05·183-08 둘뿐이라 이 구역만으로는 하위권 드릴이 모자란다. 필요하면 183-08(축 판별)과 182-05(한 번 대입)를 숫자 변형해 늘리는 것이 가장 싸고, 그림이 없어 변형 비용도 0 이다.
