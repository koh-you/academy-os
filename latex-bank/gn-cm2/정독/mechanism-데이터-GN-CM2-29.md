---
name: mechanism-데이터-GN-CM2-29
description: 개념원리 공통수학2 29 역함수(1/1 · 237-551~246-586) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 29 역함수
  unit_code: CM2-29
  part: "1/1"
  extract_range: "237~246쪽 · 237-551~246-586"
  total_problems: 42
  unit_total: 42
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 29 역함수 (1/1) 정독 데이터 (v1.0)

이 파일은 29단원 42문 전수(237~246쪽 · 237-551~246-586)를 다룬다. 구역은 다섯이다 — 「개념원리 익히기」 4문(237쪽 통번호), 「필수·발전 예제」 22문(필수 예제 6개와 그 아래 확인체크 16개가 6묶음으로 짝지어져 있다: 역함수 · 역함수가 존재하기 위한 조건 · 역함수 구하기 · 역함수의 성질 · 그래프를 이용한 역함숫값 · 역함수의 그래프의 성질), 「연습문제 STEP 1」 5문, 「연습문제 STEP 2」 7문, 「연습문제 실력 UP」 4문. 그림 문항은 7개(대응 그림 2 · 그래프 5)이고 선택지 문항은 2개(245-577 · 246-584), 나머지는 전부 단답이다. 이 단원에 「특강」 구역은 없다.

벤더 난이도 신호와 이 파일의 출발점 규약: 익히기 통번호 ★1 · 「필수」 예제 ★2 · tag 「확인체크」는 구역 신호를 우선해 바로 위 예제와 같은 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, 여기서 **−1 후보(통찰 0 이고 M_total ≤ 5)** 와 **+1 후보(통찰 2개 이상, depth 3 포함, 또는 M_total ≥ 8 이면서 depth 2 이상 통찰 보유)** 로 조정했다. ★4 이상은 통찰 2개 이상이거나 depth 3 이 있을 때만 주었고, ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 조건을 만족해도 탐색 범위가 좁으면 주지 않았다(246-584 · 분류 이슈 기록).

통찰 카운트 기준: 이 단원의 **정의·성질 자체**에 해당하는 네 도구 — `f^{-1}(p)=q ⟺ f(q)=p`, `(f∘g)^{-1}=g^{-1}∘f^{-1}`, `(f^{-1})^{-1}=f`, `f^{-1}∘f=f∘f^{-1}=I` — 는 단원의 표준 절차로 보고 **통찰로 세지 않고** Mₛ(단계 수)에 반영했다. 이 규약이 없으면 42문 전부가 통찰형이 되어 변별이 사라진다. 대신 ⑴ 「역함수가 존재한다」를 일대일대응·단조 조건(구간 기울기 동부호·정의역 끝점 대응)으로 옮기는 동치 변환(I-EQV), ⑵ 그래프에서 y=x 대칭을 써서 역함숫값을 읽는 표현 전환(I-RT), ⑶ 두 그래프의 교점을 y=x 위의 점으로 환원하는 대칭 활용(I-SYM), ⑷ 구간별 정의역으로 후보를 기각하는 사후 검증(I-VF), ⑸ 유한집합 대응에서의 경우 분기(I-MI)와 조건 결합(I-CON), ⑹ 역함수 등식을 원함수 항등식으로 뒤집는 역방향 사고(I-BW), ⑺ f⁻¹ 을 직접 구하지 않고 역순 성질로 우회할지 고르는 전략 분기(I-SC) 는 통찰로 셌다. 결과적으로 계산형 「역함수 구하기·합성 역함숫값」 묶음은 절차형 ★2 에, 「존재 조건」·「그래프 대칭」 묶음은 통찰형 ★3 에, 실력 UP 4문은 ★4 에 모였다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-237-551
  page: 237
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 ㄱ~ㄹ의 대응 그림(X에서 Y로의 함수 f) 중 역함수가 존재하는 것을 모두 고르기.
  category: "역함수 존재 ⟺ 일대일대응 → 대응 그림 네 개 판정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수가 존재할 조건(일대일대응) 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 그림에서 「서로 다른 원소가 서로 다른 상으로 가는가(일대일)」와 「Y의 모든 원소가 쓰였는가(위로의)」
    두 가지만 보면 끝난다. ㄴ은 1,2가 같은 b로, ㄹ은 치역이 Y와 다르다. 정의 확인 한 단계·통찰 없음.
    익히기 구역 출발 ★1 · M_total 5 → ★1 유지(하한 clamp).
  tier: star_1
  mechanism_primary: "각 대응 그림에서 일대일 여부 + 치역=공역 여부 확인 → 둘 다 만족하는 것만 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-237-551.png"
  latex: latex-bank/gn-cm2/items/237-551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X·Y의 원소 개수(3→4, 4→4)와 화살표 배치를 바꿀 수 있다. 제약: |X|<|Y|면 위로의 함수가 불가능해 자동 오답이 되므로 정답 보기는 반드시 |X|=|Y|이고 화살표가 완전 매칭이어야 한다. 그림 라벨(a,b,c,d)은 고정."
    creative: "(1) 그래프(직선·포물선·절댓값) 보기로 바꿔 수평선 판정으로 묻기(★1 유지) (2) 「역함수가 존재하지 않는 것」으로 뒤집어 묻기(★1) (3) 정의역을 제한하면 역함수가 생기는 보기를 섞어 제한 구간까지 답하게 하면 I-EQV 추가 → ★2~3."
```

```yaml
- id: GN-CM2-237-552
  page: 237
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ f(x)=-2x+3 일 때 f^{-1}(5)=a, f^{-1}(a)=-2 를 각각 만족시키는 상수 a.
  category: "f^{-1}(p)=q ⟺ f(q)=p 로 옮기기 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차함수의 역함숫값 구하기(정의 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 f(a)=5, ⑵는 f(-2)=a 로 바꾸면 각각 한 줄 대입이다. 역함수 정의를 양방향으로 쓰는 첫 연습이라
    단계도 계산도 최소. 익히기 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f^{-1}(5)=a → f(a)=5 로 옮겨 -2a+3=5 / f^{-1}(a)=-2 → f(-2)=a 로 직접 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $-1$ ⑵ $7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/237-552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기와 절편(-2, 3)을 다른 정수 쌍으로, 묻는 값 5·-2 도 자유. 제약: 기울기가 0이 아니어야 하고, 답이 정수·간단한 분수로 떨어지도록 (5-b)가 기울기로 나누어떨어지게 고른다."
    creative: "(1) f(x)=ax+b 에서 두 역함숫값을 주고 a, b를 되묻기(I-BW d1 · ★2) (2) f^{-1}(f(3)) 처럼 합성으로 물어 f^{-1}∘f=I 를 쓰게 하기(★1) (3) 분수함수·구간함수로 바꾸면 구간 선택이 생겨 ★2~3."
```

```yaml
- id: GN-CM2-237-553
  page: 237
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 일차함수 y=4x-2, y=-x/2+3/2 의 역함수를 각각 구하기.
  category: "y에 대해 풀기 → x와 y 바꾸기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차함수의 역함수 구하기(x에 대해 풀고 문자 교환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    역함수를 구하는 표준 2단계(x에 대해 풀기 → x와 y 교환)를 그대로 실행하면 된다.
    ⑵는 분수 계수라 양변에 -2를 곱하는 정리 한 줄이 더 붙을 뿐이다.
    익히기 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=ax+b 를 x=(y-b)/a 로 풀기 → x↔y 교환 → y=(x-b)/a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\dfrac{1}{4}x+\dfrac{1}{2}$ ⑵ $y=-2x+3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm2/items/237-553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 4·-1/2 와 상수항 -2·3/2 를 바꾼다. 제약: 기울기≠0. 역함수 계수가 지나친 분수가 되지 않게 기울기를 ±1/2, ±2, ±3, ±4 근처에서 고른다."
    creative: "(1) 정의역이 제한된 이차함수 y=(x-1)^2 (x≥1) 의 역함수 구하기로 올리면 T-범위가 붙어 ★2~3 (2) 역함수의 그래프를 그리게 해 y=x 대칭을 확인시키면 I-RT d1 · ★2 (3) 자기 자신이 역함수가 되는 조건을 묻기(244-572 골조 · ★2)."
```

```yaml
- id: GN-CM2-237-554
  page: 237
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 대응 그림으로 주어진 함수 f 에 대하여 f^{-1}(b), (f^{-1})^{-1}(2), (f^{-1}∘f)(4), (f∘f^{-1})(a) 의 값.
  category: "역함수 정의 + (f^{-1})^{-1}=f · f^{-1}∘f=f∘f^{-1}=I 를 그림에서 읽기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 기본 성질((f^{-1})^{-1}=f · 항등함수)을 대응 그림에서 확인"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑶⑷는 계산 없이 항등함수 성질만 알면 입력이 그대로 답이고, ⑴은 화살표를 거꾸로, ⑵는
    (f^{-1})^{-1}=f 로 되돌려 정방향으로 읽으면 된다. 이 단원 네 가지 표준 성질의 첫 확인 문항이라
    통찰로 세지 않았다. 익히기 ★1 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f^{-1}(b)는 화살표 역방향 읽기 → (f^{-1})^{-1}=f 로 ⑵ 정방향 → ⑶⑷는 항등함수라 입력 그대로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $1$ ⑵ $c$ ⑶ $4$ ⑷ $a$"
  answer_source: "답지"
  figure: "crop:fig-237-554.png"
  latex: latex-bank/gn-cm2/items/237-554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 대응(어느 원소가 어디로 가는지)만 바꾼다. 제약: 일대일대응이 유지되어야 f^{-1} 이 정의된다. 그림 라벨 a,b,c 와 정의역 원소는 고정하고 화살표만 재배치."
    creative: "(1) (f∘f)(2)·(f^{-1}∘f^{-1})(a) 를 섞어 2회 합성으로 올리기(★2) (2) 대응 그림 대신 표로 주기(같은 ★1) (3) 일부 화살표를 지우고 「역함수가 존재하도록 나머지 화살표를 그려라」로 뒤집으면 I-BW d2 · ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-238-e14
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ f(x)=ax+b 에서 f(-3)=-3, f^{-1}(7)=2 일 때 상수 a, b
    ⑵ f(x)=ax+b 에서 f^{-1}(2)=0, f(f(0))=3 일 때 f(6).
  category: "역함수 조건을 원함수 조건으로 옮기기 → 미정계수 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수 조건으로 일차함수의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 f^{-1}(7)=2 ⟺ f(2)=7 로 옮겨 f(-3)=-3 과 연립하는 두 점 문제다.
    ⑵는 f^{-1}(2)=0 ⟺ f(0)=2 에서 b가 먼저 정해지고, 그 값을 f(f(0))=f(2)=3 에 넣어 a를 얻는
    순차 대입이다. 역함수 정의 치환은 이 단원 표준 절차로 보아 통찰로 세지 않았다.
    필수 예제 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}(p)=q ⟺ f(q)=p 로 두 조건을 좌표점으로 바꾸기 → a, b 연립 → 필요한 함숫값 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $a=2$, $b=3$ ⑵ $5$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/238-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 두 점 (-3,-3)·(2,7), ⑵의 f(0)=2·f(2)=3·묻는 f(6) 을 바꾼다. 제약: 두 점의 x좌표가 달라야 a가 정해지고, a·b가 정수 또는 간단한 분수로 떨어지게 차이값이 나누어떨어지도록 고른다."
    creative: "(1) 조건을 f^{-1}(p)=q 두 개로 모두 주기(같은 ★2) (2) f(f(0))=3 대신 (f∘f)(k)=m 으로 바꿔 합성 단계를 늘리기(★2~3) (3) f 를 구간함수로 주면 어느 조각에 넣을지 판정이 생겨 I-VF · ★3."
```

```yaml
- id: GN-CM2-238-555
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-2x+6 의 역함수를 g(x)라 할 때 g(8)+g^{-1}(3) 의 값.
  category: "g=f^{-1} · g^{-1}=f 로 되돌리기 → 두 값 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수와 그 역함수의 함숫값 계산((f^{-1})^{-1}=f)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(8)=f^{-1}(8) 은 -2x+6=8 에서, g^{-1}(3)=f(3) 은 바로 대입에서 나온다. 함수에 g 라는 새 이름이
    붙어 한 겹 추상이 생긴 것(Mₐ=2)이 유일한 난점이고 계산은 각각 한 줄이다.
    확인체크는 바로 위 필수 예제와 같은 출발점 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "g=f^{-1} 이므로 g(8)은 f(x)=8 의 해, g^{-1}=f 이므로 g^{-1}(3)=f(3) → 두 값을 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/238-555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기·절편(-2, 6)과 입력값 8·3 을 바꾼다. 제약: f(x)=8 의 해가 정수가 되도록 (6-8)이 기울기로 나누어떨어지게 맞춘다."
    creative: "(1) g(8)·g^{-1}(3) 대신 (g∘g)(k) 를 물으면 2회 합성 ★2 (2) g 를 명시하지 않고 「f의 역함수」라고만 서술(같은 ★2) (3) f 를 구간함수로 바꾸면 구간 판정 I-VF 가 붙어 ★3."
```

```yaml
- id: GN-CM2-238-556
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    일차함수 f 에 대하여 f^{-1}(1)=3, (f∘f)(3)=-2 일 때 f(-1) 의 값.
  category: "역함수·합성 조건을 두 좌표점으로 환원 → 일차함수 결정 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수·합성 조건으로 일차함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f^{-1}(1)=3 ⟺ f(3)=1 을 먼저 얻고, 이것을 (f∘f)(3)=f(f(3))=f(1)=-2 에 연쇄로 꽂으면 두 점
    (3,1), (1,-2) 가 나와 일차함수가 정해진다. 조건이 연쇄로 이어지긴 하지만 둘 다 정의 치환이라
    통찰로 세지 않았다. 확인체크 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}(1)=3 → f(3)=1 → (f∘f)(3)=f(1)=-2 → 두 점으로 f 결정 → f(-1) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/238-556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f^{-1}(1)=3 의 1·3 과 (f∘f)(3)=-2 의 -2, 묻는 f(-1) 을 바꾼다. 제약: 연쇄로 얻는 두 점의 x좌표가 달라야 하고(여기선 3과 1), 기울기가 간단한 분수로 떨어지게 y차와 x차를 맞춘다."
    creative: "(1) (f∘f)(3) 대신 (f^{-1}∘f^{-1})(k) 로 방향을 뒤집기(I-BW d1 · ★2~3) (2) 조건 하나를 f(f^{-1}(x))=x 항등식으로 위장해 무의미 조건을 섞으면 I-SC d1 · ★3 (3) f를 이차함수 제한정의역으로 바꾸면 ★3."
```

```yaml
- id: GN-CM2-238-557
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(2x+3)=-3x+4 일 때 f(7)+f^{-1}(7) 의 값.
  category: "매개변수 x 로 입력↔출력 대응 읽기 → 정방향 1회·역방향 1회"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f^{-1}(7) 은 f의 식을 구하지 않고 「출력이 7이 되는 매개변수 x」를 먼저 찾아 그때의 입력 2x+3 을 되읽는 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b) 꼴로 주어진 함수의 함숫값·역함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(7)은 입력 2x+3=7 에서 x=2 를 찾아 -3x+4 에 넣는 정방향, f^{-1}(7)은 출력 -3x+4=7 에서
    x=-1 을 찾아 입력 2x+3 을 되읽는 역방향이다. 같은 매개변수를 두 방향으로 쓰는 것이 이 문항의
    핵심이라 I-BW d1 하나를 셌다(f의 식을 복원하는 풀이도 가능하므로 depth는 1).
    확인체크 ★2 · 통찰 1개 d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "2x+3=7 → x=2 → f(7)=-2 / -3x+4=7 → x=-1 → 입력 2x+3=1 → f^{-1}(7)=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/238-557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "입력식 2x+3 과 출력식 -3x+4, 묻는 값 7 을 바꾼다. 제약: 두 식의 기울기가 0이 아니어야 하고, 2x+3=7 과 -3x+4=7 의 해가 모두 정수로 떨어지도록 7과 상수항의 차가 각 기울기로 나누어떨어지게 고른다."
    creative: "(1) f의 식을 먼저 구하게 유도한 뒤 f^{-1} 을 물으면 절차형 ★2 로 내려간다 (2) f(2x+3)=x^2 처럼 출력을 이차식으로 바꾸면 역방향에서 두 해 중 기각이 생겨 I-VF · ★3 (3) f(g(x))=h(x) 꼴로 g,h 를 함께 미지로 두면 ★3~4."
```

```yaml
- id: GN-CM2-239-e15
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    구간함수 f(x)=2x (x≥1), 2(1-k)x+2k (x<1) 의 역함수가 존재하도록 하는 실수 k 의 값의 범위.
  category: "역함수 존재 ⟺ 일대일대응 ⟺ 두 조각이 같은 방향으로 단조 + 경계에서 이어짐"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「역함수가 존재한다」를 「두 조각의 기울기가 같은 부호이고 x=1 에서 값이 이어진다」는 계산 가능한 조건으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 역함수 존재 조건(기울기 부호·경계 일치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    존재 조건을 그래프의 단조성으로 옮기는 것이 전부이고, 그 뒤는 x=1 에서 두 식이 모두 2 로
    이어지는지 확인(자동 성립)하고 x≥1 쪽 기울기 2>0 과 같은 부호가 되도록 2(1-k)>0 을 푸는 것이다.
    T-부호(기울기 부호)와 T-경계(x=1 포함 여부) 두 함정이 붙어 Mₜ=2.
    필수 예제 ★2 출발 · M_total 8 · I-EQV d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "역함수 존재 → 일대일(단조) → x=1 에서 두 조각 값 일치 확인 → 기울기 동부호 2(1-k)>0 → k<1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$k<1$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/239-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x=1, 위쪽 기울기 2, 아래쪽 식 2(1-k)x+2k 의 계수를 바꾼다. 제약: 경계에서 두 식의 값이 자동으로 같아지도록 상수항을 설계해야 하고(그렇지 않으면 경계 일치가 추가 방정식이 된다), 부등식의 해가 한 구간으로 나오게 k의 계수 부호를 고정한다."
    creative: "(1) 경계 일치가 자동이 아니게 만들어 등식 조건 + 부등식 조건 두 개를 요구하면 I-CON 추가 ★4 (2) 아래 조각을 감소로 두어 「존재하지 않도록 하는 k」로 뒤집으면 ★3 (3) 한 조각을 이차식으로 바꾸면 꼭짓점 위치까지 따져 ★4."
```

```yaml
- id: GN-CM2-239-558
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간함수 f(x)=(3k-5)x+3(k-1) (x≥-1), -x+1 (x<-1) 의 역함수가 존재하도록 하는 정수 k 의 최댓값.
  category: "역함수 존재 ⟺ 두 조각 기울기 동부호 → 부등식 → 정수 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "존재 조건을 「아래 조각 기울기 -1<0 과 같은 부호」 즉 3k-5<0 이라는 부등식으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 역함수 존재 조건(기울기 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x<-1 쪽 기울기가 -1 이므로 위쪽 조각도 감소여야 한다는 점이 출발이고, x=-1 에서 두 식의 값은
    k와 무관하게 2 로 자동 일치하므로 남는 것은 3k-5<0 뿐이다. 마지막에 「정수」라는 필터로 답을
    하나로 좁히는 T-경계가 붙는다. 확인체크 ★2 출발 · M_total 8 · I-EQV d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "아래 조각 기울기 -1<0 → 위 조각도 음의 기울기 3k-5<0 → k<5/3 → 정수 최댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/239-558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 -1, 기울기식 3k-5, 상수항 3(k-1), 아래 조각 -x+1 을 바꾼다. 제약: 경계에서 값이 k에 무관하게 일치하도록 상수항을 설계해야 하고, k<5/3 처럼 경계가 정수가 아니게 두어야 「정수 최댓값」이 함정으로 작동한다."
    creative: "(1) 「정수 최솟값」·「정수 개수」로 묻기(★3 유지) (2) 아래 조각을 증가로 바꿔 부등호 방향을 뒤집기(★3) (3) 경계 일치를 깨서 등식 조건을 추가로 요구하면 I-CON · ★4."
```

```yaml
- id: GN-CM2-239-559
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={x | 0≤x≤a} 에서 Y={y | b≤y≤5} 로의 함수 f(x)=3x+2 의 역함수가 존재할 때 a+b.
  category: "역함수 존재 ⟺ 일대일대응 ⟺ 치역=공역 → 증가함수의 끝점 대응"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「역함수가 존재한다」를 「치역과 공역이 같다」로 옮기고, f가 증가하므로 양 끝점끼리 대응(f(0)=b, f(a)=5)한다는 조건으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정의역·공역이 제한된 일차함수의 역함수 존재 조건(끝점 대응)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일차함수는 이미 일대일이므로 남는 조건은 위로의 함수, 즉 치역=공역이다. 기울기 3>0 으로
    증가하므로 왼쪽 끝이 왼쪽 끝에, 오른쪽 끝이 오른쪽 끝에 대응한다는 한 줄이 전부다.
    T-범위(구간 끝점)·T-경계가 붙어 Mₜ=2. 확인체크 ★2 · 통찰 d1 → +1 조건(depth 2 이상) 미달 → ★2.
  tier: star_2
  mechanism_primary: "증가함수이므로 f(0)=b, f(a)=5 → b=2, a=1 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/239-559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f의 계수(3, 2)와 구간 끝값 0·5 를 바꾼다. 제약: 기울기가 양수면 끝점이 순서대로, 음수면 뒤집혀 대응하므로 부호를 정한 뒤 a가 양수로 나오게 끝값을 고른다."
    creative: "(1) 기울기를 음수로 바꿔 끝점 대응이 뒤집히게 하면 T-부호가 살아나 ★3 (2) f를 이차함수 제한정의역으로 바꾸면 꼭짓점 위치 판정이 붙어 ★3~4 (3) a, b 를 각각 묻지 않고 「가능한 a의 개수」로 물으면 ★2 유지."
```

```yaml
- id: GN-CM2-239-560
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 정의된 f(x)=ax+|x-2|+3-2a 의 역함수가 존재하도록 하는 실수 a 의 값의 범위.
  category: "절댓값을 x=2 기준 두 일차식으로 분해 → 두 기울기 동부호 → 이차부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 존재를 「분해한 두 조각의 기울기 a+1 과 a-1 이 같은 부호」 즉 (a+1)(a-1)>0 으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값을 포함한 함수의 역함수 존재 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |x-2| 를 벗기면 x≥2 에서 기울기 a+1, x<2 에서 기울기 a-1 이고 x=2 에서는 자동으로 이어진다.
    두 기울기가 같은 부호여야 단조가 되므로 곱이 양수라는 이차부등식으로 끝난다. 기울기 0 이
    되는 a=±1 을 제외하는 T-경계와 부호 판정 T-부호가 함께 붙는다.
    확인체크 ★2 출발 · M_total 8 · I-EQV d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "|x-2| 분해 → 기울기 a+1(x≥2), a-1(x<2) → (a+1)(a-1)>0 → a<-1 또는 a>1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$a<-1$ 또는 $a>1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/239-560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 x-2, 계수 a, 상수 3-2a 를 바꾼다. 제약: 절댓값 앞 계수가 ±1 이어야 두 기울기 차가 2 로 깔끔하고, 상수항은 경계에서 값이 자동으로 이어지도록(즉 절댓값만이 꺾임을 만들도록) 두어야 한다."
    creative: "(1) 절댓값 앞 계수를 2로 바꿔 기울기가 a+2, a-2 가 되게 하면 같은 골조·수만 달라짐(★3) (2) 절댓값 두 개(|x-1|+|x-3|)로 늘리면 조각이 셋이 되어 I-CON 추가 ★4 (3) 「일대일대응이 아니도록 하는 a」로 뒤집으면 여집합 처리로 ★3."
```

```yaml
- id: GN-CM2-240-e16
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=x/2+a 의 역함수가 f^{-1}(x)=bx-2 일 때 상수 a, b 에 대하여 a+b.
  category: "역함수를 직접 구해 주어진 식과 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 식을 비교하여 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=x/2+a 를 x에 대해 풀면 f^{-1}(x)=2x-2a 이고, 주어진 bx-2 와 항등적으로 같으려면
    b=2, -2a=-2 다. 계수 비교 한 줄이라 통찰 없음. 미지수가 둘이지만 일차항·상수항이 분리돼
    연립도 아니다. 필수 예제 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "f의 역함수 2x-2a 를 직접 구하기 → bx-2 와 계수 비교 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/240-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 1/2 와 역함수 쪽 상수 -2 를 바꾼다. 제약: 원함수의 기울기와 역함수의 기울기는 서로 역수여야 하므로 b는 자동으로 결정된다 — 역수 관계를 깨는 값을 주면 해가 없어진다."
    creative: "(1) f^{-1} 대신 f∘f 를 주고 비교하기(★2) (2) f(x)=ax+b 와 f^{-1}(x)=cx+d 의 계수 사이 관계(ac=1, b+ad=0)를 일반식으로 묻기 → Mₐ 상승 ★3 (3) f=f^{-1} 조건으로 바꾸면 244-572 골조 ★2."
```

```yaml
- id: GN-CM2-240-561
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=ax+b 의 역함수가 y=x/3+2 일 때 상수 a, b 에 대하여 ab.
  category: "(f^{-1})^{-1}=f → 주어진 역함수를 한 번 더 뒤집어 원함수 복원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수가 주어졌을 때 원함수의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 y=x/3+2 를 다시 역함수로 만들면 y=3x-6 이 원함수이므로 a=3, b=-6 이다.
    y=ax+b 의 역함수를 직접 구해 계수 비교해도 같다(두 갈래가 있지만 난이도 차가 없어 I-SC 로
    세지 않았다). 확인체크 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "역함수를 한 번 더 뒤집기: y=x/3+2 → y=3x-6 → a=3, b=-6 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/240-561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "역함수의 기울기 1/3 과 절편 2 를 바꾼다. 제약: 기울기≠0, 그리고 원함수 계수 a=1/(기울기), b=-(절편)/(기울기) 가 정수로 떨어지도록 기울기를 단위분수로 고른다."
    creative: "(1) ab 대신 a+b 나 f(1) 을 묻기(★2) (2) 역함수를 그래프로 주면 절편을 읽는 I-RT 가 붙어 ★2~3 (3) 역함수가 y=x 와 만나는 점을 함께 묻게 하면 I-SYM 추가 ★3."
```

```yaml
- id: GN-CM2-240-562
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-3x+1, g(x)=x-2 에 대하여 h=g∘f 일 때 h^{-1}(x) 를 구하기.
  category: "합성함수 h 를 먼저 정리 → 일차함수의 역함수 구하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 역함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h(x)=g(f(x))=-3x-1 로 먼저 정리한 뒤 x에 대해 풀면 끝이다. h^{-1}=f^{-1}∘g^{-1} 로 가는 길도
    있으나 계수가 단순해 직접 정리가 빠르고, 어느 쪽이든 난이도가 같아 전략 분기로 세지 않았다.
    확인체크 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "h(x)=g(f(x))=-3x-1 → x에 대해 풀고 문자 교환 → h^{-1}(x)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$h^{-1}(x)=-\dfrac{1}{3}x-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/240-562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수(-3, 1, 1, -2)를 바꾼다. 제약: 합성 기울기가 0이 아니어야 하고, 역함수 계수가 지나치게 복잡한 분수가 되지 않게 기울기를 ±1, ±2, ±3 에서 고른다."
    creative: "(1) h=f∘g 로 순서를 바꿔 합성 순서 함정을 만들기(★2) (2) h^{-1}(2) 처럼 한 값만 묻기(★2, 더 쉬움) (3) f 를 구간함수로 두면 조각 선택이 생겨 I-VF · ★3."
```

```yaml
- id: GN-CM2-240-563
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(3x-2)=6x+1 일 때 f^{-1}(x)=ax+b 이다. 상수 a, b 의 값.
  category: "치환으로 f의 식 복원 → 역함수 구해 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(ax+b) 꼴에서 f의 식을 복원해 역함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x-2=t 로 놓아 x=(t+2)/3 를 대입하면 f(t)=2t+5 로 식이 복원되고, 그 역함수를 구해
    x/2-5/2 와 계수를 맞추면 된다. 치환-복원-역함수의 세 단계가 모두 표준 절차라 통찰 없음.
    확인체크 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "3x-2=t 치환 → f(t)=2t+5 복원 → 역함수 (x-5)/2 → 계수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=\dfrac{1}{2}$, $b=-\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/240-563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "입력식 3x-2 와 출력식 6x+1 의 계수를 바꾼다. 제약: 출력 기울기가 입력 기울기로 나누어떨어져야 f가 정수계수 일차함수로 복원된다(여기선 6÷3=2)."
    creative: "(1) f(3x-2)=6x+1 에서 f^{-1}(7) 한 값만 묻기(238-557 골조 · ★2) (2) 출력을 이차식으로 두면 f가 이차함수가 되어 정의역 제한이 필요해지고 ★3~4 (3) f(g(x))=h(x) 에서 g 를 미지로 두면 I-BW · ★3."
```

```yaml
- id: GN-CM2-241-e17
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ f(x)=3x-1, g(x)=-2x+4 에 대하여 (g∘f)^{-1}(2) 와 (f∘(g∘f)^{-1})(-2) 의 값.
  category: "g∘f 를 먼저 한 식으로 정리 → 역함숫값은 방정식 풀이 → 필요하면 f 를 한 번 더 적용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 역함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (g∘f)(x)=-6x+6 으로 묶어 두면 ⑴은 -6x+6=2, ⑵는 -6x+6=-2 를 푼 뒤 그 x를 f에 넣는 것으로
    끝난다. 합성을 먼저 정리한다는 발상 자체가 이 유형의 표준이라 통찰로 세지 않았다.
    필수 예제 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "(g∘f)(x)=-6x+6 정리 → (g∘f)^{-1}(k) 는 -6x+6=k 의 해 → ⑵는 그 해를 f에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{3}$ ⑵ $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/241-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수(3,-1,-2,4)와 입력값 2·-2 를 바꾼다. 제약: 합성 기울기≠0, 그리고 답이 지나친 분수가 되지 않게 (6-k)가 6으로 나누어떨어지거나 간단한 기약분수가 되게 고른다."
    creative: "(1) ((g∘f)^{-1}∘f)(k) 로 순서를 바꾸기(★2~3) (2) f, g 중 하나를 미지의 일차함수로 두고 조건에서 결정하게 하면 I-BW · ★3 (3) f 를 구간함수로 두면 조각 판정이 붙어 ★3."
```

```yaml
- id: GN-CM2-241-564
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=2x-1, g(x)=x/2-1 에 대하여 (f^{-1}∘g)^{-1}(3) 의 값.
  category: "(f^{-1}∘g)^{-1}=g^{-1}∘f 로 풀기 → f(3) 계산 후 g^{-1} 적용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(f∘g)^{-1}=g^{-1}∘f^{-1} 을 이용한 역함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역순 성질로 (f^{-1}∘g)^{-1}=g^{-1}∘(f^{-1})^{-1}=g^{-1}∘f 가 되어 g^{-1}(f(3))=g^{-1}(5) 를
    계산하면 된다. f^{-1}∘g 를 직접 정리해 역함수를 구해도 같은 답이 나온다. 역순 성질은 이 단원의
    기본 성질이라 통찰로 세지 않았다. 확인체크 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "(f^{-1}∘g)^{-1}=g^{-1}∘f → f(3)=5 → g(x)=5 의 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm2/items/241-564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수(2,-1,1/2,-1)와 입력 3 을 바꾼다. 제약: g의 기울기가 단위분수면 g^{-1} 계산이 정수로 떨어진다. f와 g의 기울기를 서로 역수로 두면 합성이 평행이동만 남아 문제가 싱거워지므로 피한다."
    creative: "(1) (g∘f^{-1})^{-1} 로 순서를 바꾸기(★2) (2) g 를 구간함수로 바꾸면 g^{-1} 계산에 조각 판정이 붙어 ★3 (3) 결과를 미지수 a로 주고 a를 되묻으면 I-BW · ★3(241-566 골조)."
```

```yaml
- id: GN-CM2-241-565
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-2x+1, g(x)=x+4 에 대하여 (f∘(g∘f)^{-1}∘f)(x)=ax+b 일 때 상수 a, b.
  category: "g∘f 정리 → 역함수 식 구하기 → 안쪽부터 3중 합성을 일차식으로 정리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성·역함수가 섞인 식을 일차식으로 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (g∘f)(x)=-2x+5 → (g∘f)^{-1}(x)=(5-x)/2 를 구한 뒤 안쪽 f(x)=-2x+1 을 넣으면 x+2 로 단순해지고,
    바깥 f 를 한 번 더 적용하면 끝이다. 단계 수는 많지만(Mₛ=3) 각 단계가 모두 표준 절차라 통찰은 없다.
    확인체크 ★2 출발 · M_total 8 이지만 통찰 0 이라 +1 조건 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "(g∘f)^{-1}(x)=(5-x)/2 → 안쪽 f 대입해 x+2 → 바깥 f 적용 → -2x-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-2$, $b=-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/241-565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수(-2,1,1,4)를 바꾼다. 제약: (g∘f) 의 기울기≠0. f의 기울기가 ±1 이 아니면 중간 정리에서 분수가 남으므로 최종 계수가 정수가 되게 g의 절편을 조절한다."
    creative: "(1) (f∘(g∘f)^{-1}∘f)(2) 처럼 한 값만 묻기(★2, 더 쉬움) (2) 항등함수가 되도록 하는 g를 되묻기(I-BW d2 · ★3) (3) f∘f^{-1} 이 섞인 무의미 합성을 끼워 넣어 간소화 착안을 요구하면 I-SC · ★3."
```

```yaml
- id: GN-CM2-241-566
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=2x+1, g(x)=-x/3+4 에 대하여 ((f^{-1}∘g^{-1})∘f)(a)=1 을 만족시키는 상수 a.
  category: "f^{-1}∘g^{-1}=(g∘f)^{-1} 로 묶기 → 등식을 정방향으로 뒤집어 a 역추적"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "결과값 1 에서 출발해 (g∘f)^{-1}(f(a))=1 ⟺ f(a)=(g∘f)(1) 로 양변을 정방향으로 뒤집어 a 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수의 성질을 이용한 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f^{-1}∘g^{-1} 을 (g∘f)^{-1} 로 묶는 것이 첫 단추이고(순서 주의 · T-표기), 그 뒤 양변에 g∘f 를
    씌워 f(a)=(g∘f)(1)=3 으로 바꾸면 a가 한 줄에 나온다. 결과에서 거슬러 올라가는 방향성이
    이 문항의 실질이라 I-BW d1 을 셌다(뒤집기 자체는 정의 수준이라 depth 1).
    확인체크 ★2 출발 · M_total 8 이나 depth 1 이라 +1 조건 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}∘g^{-1}=(g∘f)^{-1} → (g∘f)^{-1}(f(a))=1 → f(a)=(g∘f)(1)=3 → 2a+1=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/241-566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수(2,1,-1/3,4)와 우변 1 을 바꾼다. 제약: g의 기울기를 단위분수의 음수로 두면 (g∘f) 계수가 정수로 떨어진다. 우변 값은 a가 정수로 나오도록 (g∘f)(우변) 에서 역산해 고른다."
    creative: "(1) (g^{-1}∘f^{-1})∘f 로 순서를 바꿔 묶는 식이 달라지게 하기(★2) (2) 우변을 x에 대한 항등식으로 주면 계수 비교가 되어 ★3(245-578 골조) (3) f 를 미지의 일차함수로 두고 a와 함께 결정하게 하면 ★3~4."
```

```yaml
- id: GN-CM2-242-e18
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=f(x) 의 그래프와 직선 y=x 가 그림과 같을 때 (f∘f)^{-1}(a) 의 값(그래프의 눈금 문자로 답).
  category: "(f∘f)^{-1}=f^{-1}∘f^{-1} → 그래프에서 y=x 를 거쳐 역함숫값 두 번 읽기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 없는 그래프에서 f^{-1}(a) 를 「세로 a 에서 곡선까지 간 뒤 y=x 로 가로 좌표를 옮겨 읽기」라는 기하 조작으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 역함수의 함숫값 읽기(y=x 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수식이 없으므로 대수 계산이 불가능하고(Mₐ=3), y=x 를 매개로 좌표를 옮겨 읽는 기하 조작이
    유일한 도구다. (f∘f)^{-1}=f^{-1}∘f^{-1} 로 바꾼 뒤 역방향 읽기를 두 번 반복하면 된다.
    필수 예제 ★2 · 통찰 1개 d2 · M_total 7 → +1 조건(M_total≥8) 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "(f∘f)^{-1}(a)=f^{-1}(f^{-1}(a)) → 그래프에서 f(?)=a 인 눈금을 y=x 로 옮겨 읽기를 두 번"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$c$"
  answer_source: "본문 풀이"
  figure: "crop:fig-242-e18.png"
  latex: latex-bank/gn-cm2/items/242-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 눈금 문자 배치와 묻는 입력값만 바꿀 수 있다. 제약: 그래프 라벨(a,b,c…)과 곡선 모양은 고정해야 답이 유일하게 읽히고, 입력값은 역방향으로 두 번 거슬러 올라갈 눈금이 그림 안에 남아 있어야 한다."
    creative: "(1) (f∘f∘f)^{-1} 로 횟수를 늘리기(★3) (2) 두 함수 f, g 를 함께 그려 (f∘g)^{-1} 을 묻기(242-568 골조 · ★3) (3) 그래프 대신 표로 주면 기하 전환이 사라져 절차형 ★1~2 로 내려간다."
```

```yaml
- id: GN-CM2-242-567
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=f(x) 와 y=x 의 그래프가 그림과 같을 때 (f∘f)^{-1}(x_3) 의 값(눈금 문자로 답).
  category: "(f∘f)^{-1}=f^{-1}∘f^{-1} → 그래프에서 역방향 읽기 2회"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프에서 f^{-1}(x_3) 를 「가로 눈금 위에서 f의 값이 x_3 가 되는 점을 찾아 y=x 로 되옮기기」로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 역함수의 함숫값 읽기(y=x 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e18 과 같은 골조이며 눈금이 x_1~x_5 로 세분돼 있어 읽어야 할 점이 늘었을 뿐이다.
    역방향으로 두 칸 거슬러 올라가는 동안 y=x 를 두 번 경유하는 것이 핵심.
    확인체크 ★2 · 통찰 1개 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}(x_3) 를 그래프에서 읽고, 그 값에 f^{-1} 을 한 번 더 적용해 x_5 를 얻기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$x_5$"
  answer_source: "답지"
  figure: "crop:fig-242-567.png"
  latex: latex-bank/gn-cm2/items/242-567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 입력 눈금(x_3)만 바꾼다. 제약: 그림의 눈금 라벨과 곡선은 고정이며, 역방향 2회가 그림 밖으로 나가지 않는 눈금을 골라야 답이 존재한다."
    creative: "(1) (f∘f)(x_3) 로 정방향을 물어 난이도를 낮추기(★1~2) (2) (f^{-1}∘f^{-1}∘f^{-1})(x_2) 로 3회 (★3) (3) 그래프와 y=x 의 교점 개수를 함께 묻게 하면 I-SYM 추가 ★3."
```

```yaml
- id: GN-CM2-242-568
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 함수 y=f(x), y=g(x) 의 그래프와 직선 y=x 가 그림과 같을 때 (f∘f∘g)^{-1}(c) 의 값.
  category: "(f∘f∘g)^{-1}=g^{-1}∘f^{-1}∘f^{-1} → 그래프에서 역방향 읽기 3회(두 곡선 번갈아)"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 겹 합성의 역함수를 역순으로 펼친 뒤, 각 단계를 두 곡선과 y=x 사이의 좌표 이동으로 전환해 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 함수의 그래프에서 합성 역함수의 값 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역순으로 펼치면 g^{-1}∘f^{-1}∘f^{-1} 이고, 세 번의 역방향 읽기에서 어느 곡선을 쓸지(f냐 g냐)를
    매번 갈아타야 한다는 점이 e18·567 보다 한 단계 무겁다(Mₛ=3, 순서 혼동이 T-표기 함정).
    확인체크 ★2 출발 · M_total 8 · I-RT d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "(f∘f∘g)^{-1}=g^{-1}∘f^{-1}∘f^{-1} → f 곡선에서 두 번 역방향 읽기 → 마지막에 g 곡선에서 역방향 읽기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$b$"
  answer_source: "답지"
  figure: "crop:fig-242-568.png"
  latex: latex-bank/gn-cm2/items/242-568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 입력 눈금(c)과 합성 순서만 바꾼다. 제약: 그림의 두 곡선·y=x·눈금 라벨은 고정. 역순으로 펼친 세 단계가 모두 그림 안 눈금에서 읽히는 입력을 골라야 한다."
    creative: "(1) (g∘f∘f)^{-1} 로 순서를 바꿔 어느 곡선부터 읽을지 뒤집기(★3) (2) 합성 겹을 둘로 줄여 ★2 (3) 두 곡선의 교점을 이용해 (f∘g)^{-1}=(g∘f)^{-1} 이 되는 입력을 찾게 하면 I-SC 추가 ★4."
```

```yaml
- id: GN-CM2-243-e19
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=3x+10 의 역함수를 f^{-1}(x)라 할 때 y=f(x) 와 y=f^{-1}(x) 의 그래프의 교점을 P 라 하자.
    원점 O 에 대하여 선분 OP 의 길이.
  category: "역함수 그래프는 y=x 대칭 → 교점을 y=x 위의 점으로 환원 → 거리 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 그래프가 y=x 에 대칭이고 f가 증가함수이므로 교점이 반드시 y=x 위에 있다는 대칭성을 써서 f(x)=f^{-1}(x) 를 f(x)=x 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프의 교점(y=x 대칭 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f^{-1} 을 직접 구해 연립하는 길도 있지만, y=x 대칭이라는 성질로 3x+10=x 한 줄로 끝내는 것이
    이 유형의 핵심이다(기울기가 양수여서 이 환원이 정당하다는 점이 숨은 전제). 교점을 얻은 뒤
    원점과의 거리는 표준 계산. 필수 예제 ★2 · 통찰 1개 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=x 대칭 → 교점은 f(x)=x 의 해 → P 좌표 → OP 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/243-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 3 과 절편 10 을 바꾼다. 제약: 기울기가 1이면 교점이 무수히 많거나 없어지므로 제외하고, f(x)=x 의 해가 정수로 떨어지도록 절편이 (기울기-1)로 나누어떨어지게 고른다. 기울기가 음수면 교점이 y=x 위에 없을 수도 있어 대칭 환원이 깨진다."
    creative: "(1) 교점의 좌표 자체나 두 좌표의 곱을 묻기(243-569 골조 · ★2) (2) 기울기를 음수로 두어 y=x 밖 교점까지 따지게 하면 I-MI 추가 ★4 (3) f 를 제한정의역 이차함수로 바꾸면 교점이 둘이 되어 ★3~4(243-570·246-585)."
```

```yaml
- id: GN-CM2-243-569
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-3x+8 에 대하여 y=f(x) 와 y=f^{-1}(x) 의 그래프의 교점의 좌표를 (p, q) 라 할 때 pq.
  category: "y=x 대칭으로 교점을 f(x)=x 의 해로 환원 → p=q 이므로 곱 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=x 대칭을 이용해 교점을 f(x)=x 의 해로 환원하고, 그 결과 p=q 임을 써서 pq=p^2 로 정리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프의 교점 좌표(y=x 대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -3x+8=x 에서 교점 (2,2) 를 얻고 pq=4 로 끝난다. 기울기가 음수라 「y=x 위에 있지 않은 교점」을
    걱정할 여지가 있으나 이 문제의 교점은 y=x 위에 있어 표준 환원이 그대로 통한다(그 점검이
    T-부호 함정). 확인체크 ★2 · 통찰 1개 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=x 대칭 → -3x+8=x → 교점 (2,2) → pq"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/243-569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 -3 과 절편 8 을 바꾼다. 제약: 기울기≠1, 그리고 절편이 (1-기울기)로 나누어떨어져야 교점 좌표가 정수다. 음의 기울기를 유지하려면 절편 부호를 함께 맞춘다."
    creative: "(1) p+q 나 선분 OP 길이를 묻기(★2) (2) 「교점이 제1사분면에 있도록 하는 절편의 범위」로 뒤집으면 I-BW · ★3 (3) f 를 구간함수로 두면 조각마다 교점을 따져 I-MI · ★4."
```

```yaml
- id: GN-CM2-243-570
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=(1/2)(x-2)^2+2 (x≥2) 에 대하여 y=f(x) 와 y=f^{-1}(x) 의 그래프가 서로 다른 두 점에서
    만날 때 그 두 점 사이의 거리.
  category: "제한정의역에서 증가 → 교점을 f(x)=x 의 해로 환원 → 두 해로 거리 계산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x≥2 에서 f가 증가하므로 두 그래프의 교점이 모두 y=x 위에 있다는 대칭 성질로 이차방정식 f(x)=x 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프와의 교점 — 제한정의역 이차함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1/2)(x-2)^2+2=x 를 정리하면 (x-2)(x-4)=0 이 되어 교점 (2,2), (4,4) 를 얻고, 두 점이 모두
    y=x 위에 있으므로 거리는 좌표 차의 √2 배다. 정의역 x≥2 를 만족하는지 확인하는 T-범위와
    꼭짓점이 경계인 T-경계가 함께 붙는다. 확인체크 ★2 출발 · M_total 8 · I-SYM d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "증가함수 → 교점은 f(x)=x 의 해 → (x-2)(x-4)=0 → 두 점 (2,2),(4,4) → 거리 √2·|4-2|"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/243-570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 1/2, 꼭짓점 (2,2), 정의역 경계 2 를 바꾼다. 제약: 꼭짓점의 x좌표와 정의역 경계를 같게 두어야 제한구간에서 증가(일대일)가 보장되고, f(x)=x 가 서로 다른 두 실근을 가지며 두 근이 모두 정의역 안에 있어야 한다."
    creative: "(1) 두 점 사이의 거리를 주고 계수를 되묻기(I-BW 추가 · ★4 · 246-585 골조) (2) 정의역을 x≤2 쪽으로 바꿔 감소함수로 만들면 y=x 밖 교점이 생겨 ★4 (3) 두 점과 원점이 이루는 삼각형 넓이를 묻기(★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-244-571
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    일차함수 f 에 대하여 y=f(x) 와 y=f^{-1}(x) 의 그래프가 모두 점 (-2, 5) 를 지날 때
    f(1)+f^{-1}(-1) 의 값.
  category: "역함수 그래프 위의 점 ↔ 원함수 위의 점 좌표 교환 → 두 점으로 f 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y=f^{-1}(x) 가 (-2,5) 를 지난다」를 「y=f(x) 가 (5,-2) 를 지난다」로 좌표를 맞바꿔 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프 위의 점을 이용한 일차함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 점 (-2,5) 가 두 그래프에 동시에 있다는 조건이, 좌표 교환을 통해 f 위의 서로 다른 두 점
    (-2,5) 와 (5,-2) 를 준다는 것이 이 문항의 전부다. 이후는 기울기 -1 의 일차함수를 세워 대입.
    STEP 1 ★2 · 통찰 1개 d2 · M_total 7 → +1 조건(M_total≥8) 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1} 그래프의 점 (-2,5) → f 그래프의 점 (5,-2) → 두 점으로 f(x)=-x+3 → f(1), f^{-1}(-1) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/244-571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통점 (-2,5) 와 묻는 입력 1·-1 을 바꾼다. 제약: 점의 두 좌표가 서로 달라야(x≠y) 교환으로 서로 다른 두 점이 생긴다 — y=x 위의 점을 주면 조건이 하나로 줄어 f가 정해지지 않는다."
    creative: "(1) 두 그래프가 만나는 점이 y=x 위에 있는 경우를 함께 따지게 하면 I-MI · ★3 (2) f(x)=ax+b 의 a, b 를 되묻기(★2) (3) 「두 그래프가 서로 다른 두 점에서 만나도록」 조건을 붙이면 기울기 -1 의 특수성을 다뤄야 해 ★4."
```

```yaml
- id: GN-CM2-244-572
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    일차함수 f(x)=ax+1 에 대하여 f=f^{-1} 일 때 상수 a 의 값.
  category: "f=f^{-1} ⟺ f∘f=I (또는 역함수 식과 계수 비교) → a 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「f 와 f^{-1} 이 같은 함수」라는 진술을 계수 비교가 가능한 항등식(f(f(x))=x 또는 역함수 식의 계수 일치)으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f=f^{-1} 인 일차함수(자기역함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f^{-1}(x)=(x-1)/a 를 ax+1 과 비교하면 a=1/a 와 1=-1/a 를 동시에 만족해야 하므로 a=-1 만 남는다
    (a=1 은 상수항 조건에서 기각되는 T-경계 함정). f∘f=I 로 풀어도 같다.
    STEP 1 ★2 · 통찰 1개 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}(x)=(x-1)/a 와 ax+1 의 계수 비교 → a=1/a, 1=-1/a → a=-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/244-572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 1 을 다른 값 c 로 바꿔도 결과는 a=-1 로 같다(일차함수가 자기역함수이려면 기울기 -1 이거나 항등함수여야 한다). 제약: 상수항을 0으로 두면 a=±1 둘 다 답이 되어 문제가 달라진다."
    creative: "(1) f(x)=ax+b 에서 f=f^{-1} 이 되는 (a,b) 를 모두 구하게 하면 두 갈래(a=-1 임의 b / a=1,b=0)가 생겨 I-MI · ★3 (2) f∘f=I 를 직접 주고 a를 묻기(★2) (3) 제한정의역 이차함수로 자기역함수를 만들게 하면 ★4."
```

```yaml
- id: GN-CM2-244-573
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=4x+k 에서 f^{-1}(2)=1 일 때 (f∘(f∘f)^{-1})(4) 의 값(k 는 상수).
  category: "역함수 조건으로 k 결정 → f∘f 정리 → 역함숫값 구해 f 에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 역함수를 이용한 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f^{-1}(2)=1 ⟺ f(1)=2 로 k=-2 를 먼저 얻고, (f∘f)(x)=16x-10 을 정리해 16x-10=4 를 푼 뒤
    그 x를 f에 넣으면 끝이다. 세 단계 모두 이 단원의 표준 절차라 통찰 없음.
    STEP 1 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(1)=2 → k=-2 → (f∘f)(x)=16x-10 → (f∘f)^{-1}(4) → f 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/244-573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 4, 조건 f^{-1}(2)=1, 묻는 입력 4 를 바꾼다. 제약: (f∘f) 의 기울기가 기울기의 제곱이라 커지므로 답이 지나친 분수가 되지 않도록 기울기를 2~4 정도로 제한하고 입력값을 역산해 고른다."
    creative: "(1) ((f∘f)^{-1}∘f)(4) 로 순서를 바꾸기(★2) (2) k 를 묻지 않고 조건을 (f∘f)(1)=m 으로 주면 이차 관계가 생겨 ★3 (3) f 를 구간함수로 두면 조각 판정이 붙어 ★3."
```

```yaml
- id: GN-CM2-244-574
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구간함수 f(x)=x^2+1 (x≥0), x+1 (x<0) 과 g(x)=x+1 에 대하여 ((f^{-1}∘g)^{-1}∘f)(-2) 의 값.
  category: "역순 성질로 (f^{-1}∘g)^{-1}=g^{-1}∘f 로 바꿔 f^{-1} 계산을 피하기 → 조각 선택하며 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간함수 f 의 역함수를 직접 구하는 갈래 대신 (f^{-1}∘g)^{-1}=g^{-1}∘f 로 펼쳐 f^{-1} 을 아예 쓰지 않는 갈래를 선택(전자는 x≥0 쪽 제곱근 처리가 붙어 훨씬 무겁다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별 함수의 역함수를 피하는 합성 역함수 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (f^{-1}∘g)^{-1}=g^{-1}∘(f^{-1})^{-1}=g^{-1}∘f 로 펼치면 남는 계산은 f(-2), f(-1), g^{-1} 뿐이고
    f^{-1} 은 한 번도 필요 없다. 반대로 f^{-1} 을 먼저 구하려 들면 √ 와 구간 조건이 겹쳐 크게 막힌다
    — 전략 갈래가 갈리므로 I-SC d2. 구간 선택(x<0)이 두 번 필요해 T-범위·T-경계 두 함정.
    STEP 1 ★2 출발 · M_total 8 · I-SC d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "(f^{-1}∘g)^{-1}∘f = g^{-1}∘f∘f → f(-2)=-1 → f(-1)=0 → g^{-1}(0)=-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/244-574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 조각(x^2+1, x+1)과 경계 0, g 의 절편 1, 입력 -2 를 바꾼다. 제약: 경계에서 두 조각의 값이 이어져야 f 가 일대일이 되고, 중간에 나오는 값들이 계속 음수 조각에 머물러야 제곱근 계산 없이 끝난다."
    creative: "(1) 입력을 양수로 바꿔 x^2 조각을 쓰게 하면 제곱근·부호 판정이 붙어 ★4 (2) g 를 구간함수로 바꾸면 g^{-1} 에도 조각 판정이 생겨 ★4 (3) f^{-1} 의 식을 구간별로 직접 쓰게 하면 절차형 ★3."
```

```yaml
- id: GN-CM2-244-575
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    세 그래프 y=f(x), y=g(x), y=x 가 그림과 같을 때 (g∘f^{-1})(6)+(f^{-1}∘g)(5) 의 값.
  category: "그래프에서 f^{-1} 값을 y=x 로 읽기 → 두 합성값을 각각 구해 더하기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 없는 두 그래프에서 f^{-1}(6) 과 g(5) 를 y=x 를 매개로 좌표를 옮겨 읽는 기하 조작으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 함수의 그래프에서 합성·역함숫값 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 항의 합성 순서가 서로 반대라 어느 곡선을 먼저 읽을지 매번 확인해야 하지만(T-표기),
    각 항은 「역방향 1회 + 정방향 1회」로 짧다. 그래프만 주어져 대수 계산이 불가능한 것이 Mₐ=3.
    STEP 1 ★2 · 통찰 1개 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f^{-1}(6) 을 그래프에서 읽어 g 에 넣기 / g(5) 를 읽어 f^{-1} 에 넣기 → 두 값의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: "crop:fig-244-575.png"
  latex: latex-bank/gn-cm2/items/244-575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 입력 6·5 만 바꾼다. 제약: 그림의 두 그래프·눈금은 고정이며, 역방향으로 읽을 값이 f의 치역 안에, 정방향으로 읽을 값이 정의역 안에 있어야 한다."
    creative: "(1) (g∘f^{-1})(6) 한 항만 묻기(★2, 더 쉬움) (2) (f^{-1}∘g^{-1})(k) 로 두 역함수를 겹치면 ★3 (3) 두 그래프의 교점과 y=x 의 관계를 함께 묻게 하면 I-SYM 추가 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-244-576
  page: 244
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    구간함수 f(x)=3x (x≥2), -x^2+5x (x<2) 에 대하여 (f∘f)(3)+f^{-1}(-6) 의 값.
  category: "정방향은 조각 선택해 2회 대입 → 역방향은 두 조각에서 후보를 구한 뒤 정의역으로 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=-6 의 후보를 두 조각에서 모두 구한 뒤(3x=-6 → x=-2 / -x^2+5x=-6 → x=-1, 6) 각 후보를 그 조각의 정의역에 재대입해 일부를 기각하고 하나만 남김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별 함수의 역함숫값(후보 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정방향 (f∘f)(3) 은 두 번 모두 위쪽 조각이라 단순하고, 승부는 f^{-1}(-6) 이다. 두 조각에서 나온
    세 후보 중 자기 조각의 정의역을 만족하는 것만 남기는 사후 기각이 없으면 틀린 답에 도달한다
    (T-범위·T-경계). STEP 2 ★3 출발 · M_total 8 · I-VF d2 → +1 후보이나 ★4 는 통찰 2개 이상이
    필요하고 계산 자체는 가벼워 ★3 유지.
  tier: star_3
  mechanism_primary: "f(3)=9 → f(9)=27 / f(x)=-6 후보를 두 조각에서 구해 정의역으로 기각 → f^{-1}(-6)=-1 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$26$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/244-576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 2, 위 조각 3x, 아래 조각 -x^2+5x, 묻는 값 3·-6 을 바꾼다. 제약: 아래 조각의 이차방정식이 정수근을 갖도록 상수를 고르고, 두 근 중 정확히 하나만 정의역 안에 들어가야 기각 구조가 살아난다."
    creative: "(1) 아래 조각의 두 근이 모두 정의역 안에 들어가게 만들면 역함수가 존재하지 않는 상황이 되어 「역함수가 존재하도록 경계를 정하라」로 뒤집을 수 있다(I-BW · ★4) (2) f^{-1}(k) 를 k에 대한 식으로 구하게 하면 Mₐ 상승 ★4 (3) (f∘f)(3) 을 (f∘f∘f)(1) 로 늘리면 조각 판정 횟수가 늘어 ★3 유지."
```

```yaml
- id: GN-CM2-245-577
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    X={1,2,3,4,5} 에서 X 로의 함수 f 의 역함수가 존재하고 f(1)+2f(3)=12,
    f^{-1}(1)-f^{-1}(3)=2 일 때 f(4)+f^{-1}(4) 의 값. 5지선다.
  category: "일대일대응(순열) 제약 아래 정수 조건을 만족하는 대응 탐색 → 남은 값 배치 확정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(1)+2f(3)=12 를 만족하는 (f(1), f(3)) 조합을 1~5 범위에서 모두 나열하는 케이스 분기"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나열한 후보와 f^{-1}(1)-f^{-1}(3)=2 의 후보를 일대일대응(값 중복 금지) 조건에 재대입해 대부분을 기각하고 남은 하나로 나머지 대응까지 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "일대일대응 조건을 만족하는 함수 결정(유한집합 대응 탐색)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 조건 모두 「값을 직접 주지 않는」 정수 제약이라, 가능한 조합을 나열하고 중복을 기각하는
    탐색이 풀이의 본체다. 특히 f(1)+2f(3)=12 에서 나오는 후보 중 f(1)=f(3) 이 되는 것을 일대일
    조건으로 버리는 단계와, f^{-1} 의 차 조건에서 이미 쓰인 값을 배제하는 단계가 모두 기각이다.
    STEP 2 ★3 출발 · 교육청 기출 · 통찰 2개(MI·VF) · M_total 10 → +1 → ★4.
  tier: star_4
  mechanism_primary: "f(1)+2f(3)=12 의 정수 조합 나열 → 일대일 조건으로 기각해 f(1), f(3) 확정 → f^{-1} 차 조건으로 남은 대응 배치 → f(4)+f^{-1}(4)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/245-577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 크기 5, 계수식 f(1)+2f(3)=12, 차 조건 f^{-1}(1)-f^{-1}(3)=2, 묻는 f(4)+f^{-1}(4) 를 바꾼다. 제약: 두 조건을 모두 만족하는 일대일대응이 정확히 하나만 남도록 계수와 합을 골라야 하고, 남은 값들이 자동으로 배치되어야 답이 유일해진다."
    creative: "(1) 조건을 하나 줄이고 「가능한 f 의 개수」를 묻기(I-MI 강화 · ★4) (2) f∘f=I 같은 대칭 조건을 추가하면 I-SYM 이 붙어 ★5 후보 (3) 집합을 {1,…,4} 로 줄이면 탐색이 짧아져 ★3."
```

```yaml
- id: GN-CM2-245-578
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=ax+b, g(x)=x+c 에 대하여 (f∘g)^{-1}(2x+1)=x, f^{-1}(3)=-1 일 때 a+b+c.
  category: "역함수 등식을 원함수 항등식으로 뒤집기 → 계수 비교 → 남은 조건으로 상수 확정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(f∘g)^{-1}(2x+1)=x 를 역함수의 정의로 뒤집어 (f∘g)(x)=2x+1 이라는 x에 대한 항등식으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 등식을 원함수 항등식으로 바꿔 계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역함수가 씌워진 채로는 계수를 비교할 수 없고, (f∘g)(x)=2x+1 로 뒤집는 한 수가 전부를 연다.
    그 뒤 a(x+c)+b=2x+1 에서 a=2, ac+b=1 을 얻고 f^{-1}(3)=-1 ⟺ f(-1)=3 으로 b, 이어서 c 가
    순서대로 정해진다. STEP 2 ★3 · M_total 8 · I-EQV d2 → +1 후보이나 ★4 는 통찰 2개 이상
    조건에 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: "(f∘g)^{-1}(2x+1)=x → (f∘g)(x)=2x+1 항등식 → a=2, ac+b=1 → f(-1)=3 으로 b → c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/245-578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 항등식 2x+1 과 조건 f^{-1}(3)=-1 을 바꾼다. 제약: 우변의 기울기가 a 를 직접 결정하므로 0이 아니어야 하고, ac+b=상수 와 f(-1)=3 이 모순되지 않게 값을 역산해 고른다."
    creative: "(1) (g∘f)^{-1}(2x+1)=x 로 순서를 바꾸면 계수 관계가 달라져 같은 ★3 (2) 조건 f^{-1}(3)=-1 대신 f=f^{-1} 을 주면 I-EQV 가 하나 더 붙어 ★4 (3) g 를 이차함수로 두면 정의역 제한이 필요해져 ★4."
```

```yaml
- id: GN-CM2-245-579
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    일대일대응인 세 함수 f, g, h 에 대하여 (f∘g)(x)=2x-3, h(x)=x+1 일 때
    (h^{-1}∘g^{-1}∘f^{-1})(1) 의 값.
  category: "g^{-1}∘f^{-1}=(f∘g)^{-1} 로 묶어 미지의 f, g 를 소거 → 알려진 식으로 계산"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 를 각각 모르는 상태에서 g^{-1}∘f^{-1} 을 (f∘g)^{-1} 한 덩어리로 묶어, 주어진 (f∘g)(x)=2x-3 만으로 계산이 되게 만드는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미지의 함수들의 합성 역함수 묶기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f, g 가 개별적으로 전혀 주어지지 않았으므로(Mₐ=3) 묶지 않으면 한 걸음도 나아가지 못한다.
    (f∘g)^{-1}(1) 은 2x-3=1 에서 x=2, 이어서 h^{-1}(2)=1 로 끝난다. 계산량은 작지만 묶는 착안이
    없으면 풀이가 성립하지 않는 구조. STEP 2 ★3 · 통찰 1개 d2 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "h^{-1}∘g^{-1}∘f^{-1}=h^{-1}∘(f∘g)^{-1} → (f∘g)^{-1}(1)=2 → h^{-1}(2)=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/245-579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(f∘g)(x)=2x-3 의 계수, h(x)=x+1 의 절편, 입력 1 을 바꾼다. 제약: (f∘g) 의 기울기≠0 이고, 2x-3=입력 의 해가 정수로 떨어지도록 입력을 상수항과 같은 홀짝으로 맞춘다."
    creative: "(1) 합성 순서를 (g^{-1}∘f^{-1}∘h^{-1})(1) 로 바꿔 어느 것을 먼저 묶을지 달라지게 하기(★3) (2) (g∘f)(x) 를 주고 f^{-1}∘g^{-1} 을 묻는 순서 함정으로 바꾸면 T-표기 강화 ★3 (3) h 도 미지로 두고 조건을 하나 더 주면 I-CON · ★4."
```

```yaml
- id: GN-CM2-245-580
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=-x|x|+k 에서 f^{-1}(2)=1 이고 g(x)=2x+1 일 때 (g^{-1}∘f)^{-1}(2) 의 값(k 는 상수).
  category: "f(1)=2 로 k 결정 → (g^{-1}∘f)^{-1}=f^{-1}∘g 로 펼치기 → 절댓값 함수의 역함숫값을 구간별로"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(g^{-1}∘f)^{-1}=f^{-1}∘g 로 펼쳐 f^{-1}(g(2)) 로 바꾸고, -x|x| 를 부호에 따라 -x^2 / x^2 두 식으로 나눠 해당 구간의 해만 취함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값을 포함한 함수의 역함숫값과 합성 역함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=2 에서 k=3 이 먼저 나오고, 역순 성질로 f^{-1}(g(2))=f^{-1}(5) 로 바뀐 뒤 -x|x|+3=5 를
    풀 때 x<0 구간의 식 x^2+3=5 를 써야 한다는 부호 판정이 승부처다(T-부호·T-범위).
    무리수 답이 나오는 것도 이 부호 판정 때문. STEP 2 ★3 · M_total 9 · I-EQV d2 → +1 후보이나
    통찰 1개라 ★4 조건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: "f(1)=2 → k=3 → (g^{-1}∘f)^{-1}=f^{-1}∘g → g(2)=5 → -x|x|+3=5 를 x<0 조각에서 풀기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/245-580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 f^{-1}(2)=1, g 의 계수(2,1), 묻는 입력 2 를 바꾼다. 제약: -x|x| 는 항상 감소라 역함수는 늘 존재하지만, 최종 해가 어느 부호 구간에 떨어지는지가 답의 형태를 바꾸므로 g(입력) 값이 k 보다 큰지 작은지를 의도적으로 정해야 한다."
    creative: "(1) g(입력) 이 k 보다 작아지게 해 양수 구간 해가 나오게 하면 같은 골조·다른 부호(★3) (2) f(x)=x|x|+k 로 바꿔 증가함수로 만들기(★3) (3) f^{-1} 의 식을 구간별로 모두 쓰게 하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CM2-245-581
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A={x | 0≤x≤1} 에서 A 로의 함수 y=f(x) 의 그래프가 그림과 같고 g=f^{-1} 일 때
    (g∘g)(1/2) 의 값(그림의 눈금 문자로 답).
  category: "그래프에서 f^{-1} 값을 y=x 로 읽기를 두 번 반복"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 없는 그래프에서 g(1/2)=f^{-1}(1/2) 를 「세로 1/2 높이에서 곡선을 만나는 점의 가로 좌표」로 전환해 읽고, 그 값에 같은 조작을 한 번 더 적용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 역함수를 두 번 적용한 값 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정의역·공역이 모두 [0,1] 로 닫혀 있어 역함수를 두 번 적용해도 구간을 벗어나지 않는다는 점이
    문제 설계의 핵심이고, 학생은 그래프 위에서 가로↔세로를 두 번 갈아타며 눈금을 읽어야 한다.
    식이 없어 대수 계산이 불가능(Mₐ=3). STEP 2 ★3 · 통찰 1개 d2 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "g(1/2)=f^{-1}(1/2) 를 그래프에서 읽기 → 그 값에 f^{-1} 을 한 번 더 적용 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$a$"
  answer_source: "답지"
  figure: "crop:fig-245-581.png"
  latex: latex-bank/gn-cm2/items/245-581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 입력 1/2 만 바꾼다. 제약: 그림의 곡선·눈금 라벨은 고정이며, 역함수를 두 번 적용한 결과가 여전히 그림 안 눈금으로 읽혀야 한다."
    creative: "(1) (f∘g)(1/2) 처럼 항등함수가 되는 조합을 섞어 함정을 만들기(★2~3) (2) (g∘g∘g) 로 횟수를 늘리기(★3) (3) f 와 y=x 의 교점을 표시하고 그 좌표를 함께 묻게 하면 I-SYM 추가 ★4."
```

```yaml
- id: GN-CM2-245-582
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=(1/2)x^2+a (x≥0) 와 그 역함수 g(x) 에 대하여 방정식 f(x)=g(x) 가 실근을 갖도록 하는
    실수 a 의 값의 범위.
  category: "증가함수 → f(x)=g(x) 를 f(x)=x 로 환원 → 이차방정식의 실근 조건(판별식)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x≥0 에서 f가 증가하므로 y=f(x) 와 y=g(x) 의 교점이 y=x 위에만 존재한다는 대칭 성질로 f(x)=g(x) 를 f(x)=x 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(x)=f^{-1}(x) 의 실근 조건(y=x 환원 + 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g 를 직접 구하면 무리식이 되어 다루기 어렵고, 증가함수라는 전제 아래 y=x 환원을 쓰면
    x^2-2x+2a=0 의 실근 조건으로 단번에 내려간다. 판별식 자체는 표준 절차라 통찰로 세지 않았고,
    환원의 정당성(증가·정의역 x≥0)을 확인하는 데 T-범위·T-경계가 붙는다.
    STEP 2 ★3 · M_total 9 · I-SYM d2 → +1 후보이나 통찰 1개라 ★4 조건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: "증가함수 → f(x)=g(x) ⟺ f(x)=x → (1/2)x^2+a=x → x^2-2x+2a=0 의 판별식 ≥0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a\le\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/245-582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 1/2 와 정의역 경계 0 을 바꾼다. 제약: 정의역이 꼭짓점 오른쪽이어야 증가(일대일)가 되고, 판별식 조건에서 얻은 근이 정의역 안에 들어가는지까지 확인해야 하므로 경계와 꼭짓점의 관계를 고정해 두는 편이 안전하다."
    creative: "(1) 「서로 다른 두 실근」으로 강화하면 등호가 빠지고 근의 위치 조건이 추가돼 ★4 (2) 실근의 개수를 a 에 따라 분류하게 하면 I-MI 추가 ★4 (3) f 를 감소함수(정의역 x≤0)로 바꾸면 y=x 밖 교점까지 따져야 해 ★4~5."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-246-583
  page: 246
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x) 의 역함수를 g(x) 라 할 때 함수 f(3x+1) 의 역함수가 ag(x)+b 이다. 상수 a, b 에 대하여 ab.
  category: "f(3x+1)=f∘h (h(x)=3x+1) 로 보기 → 역순 성질로 h^{-1}∘g → 계수 비교"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(3x+1) 을 「f 에 일차함수 h(x)=3x+1 을 합성한 것」으로 다시 보아 합성함수의 역함수 규칙을 쓸 수 있는 형태로 바꿈"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=f(3x+1) 에서 x 를 역추적해 3x+1=g(y) → x=(g(y)-1)/3 을 얻고, 이것을 ag(x)+b 와 계수 비교"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "일반 함수에 일차식을 합성한 함수의 역함수를 원래 역함수로 표현"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 가 구체적으로 주어지지 않아(Mₐ=3) 계산이 불가능하고, 「f∘h 의 역함수 = h^{-1}∘f^{-1}=h^{-1}∘g」
    라는 구조적 추론만으로 a=1/3, b=-1/3 을 얻어야 한다. y=f(3x+1) 에서 x 를 직접 역추적하는
    길도 같은 두 단계를 밟는다. 실력 UP ★4 출발 · 통찰 2개(EQV·BW) · M_total 9 → ★4 유지.
  tier: star_4
  mechanism_primary: "f(3x+1)=f∘h → 역함수 = h^{-1}∘g → (g(x)-1)/3 → a=1/3, b=-1/3 → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/246-583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내부 일차식 3x+1 의 계수를 바꾼다. 제약: 기울기≠0. 답이 ab=-(절편)/(기울기)^2 꼴이므로 기울기를 작은 정수로 두어야 분모가 커지지 않는다."
    creative: "(1) f(3x+1) 대신 3f(x)+1 로 바꾸면 역함수가 g((x-1)/3) 이 되어 바깥/안쪽 구분이 핵심이 되는 대비 문항(★4) (2) f(ax+b) 의 역함수를 a,b 일반형으로 표현하게 하면 Mₐ 최대 ★4~5 (3) f 에 구체적 일차식을 주면 검산 가능한 ★2~3."
```

```yaml
- id: GN-CM2-246-584
  page: 246
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    X={1,2,3,4}, Y={2,3,4,5}, Z={3,4,5} 와 f:X→Y, g:Y→Z 가 ㈎ f 는 일대일대응, ㈏ x∈X∩Y 이면
    g(x)-f(x)=1 을 만족할 때 보기 ㄱ(g∘f 의 치역은 Z), ㄴ(f^{-1}(5)≥2), ㄷ(f(3)<g(2)<f(1) 이면
    f(4)+g(2)=6) 중 옳은 것. 5지선다.
  category: "두 조건을 결합해 가능한 대응을 좁히기 → 보기별로 반례를 찾아 참거짓 판정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈎(f 일대일대응)와 ㈏(X∩Y={2,3,4} 위에서 g=f+1)를 결합해 g 의 일부 값이 f 에 의해 강제되고 Z 의 원소 범위가 f 의 값을 제한한다는 관계로 묶음"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "보기마다 가능한 f 의 배치가 여러 갈래로 갈리므로, 각 보기에 대해 전 배치를 훑어 항상 성립하는지 따져야 함"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ·ㄷ 은 조건을 모두 만족하면서도 결론이 깨지는 배치를 하나 찾아 기각(반례 구성)해야 판정이 끝남"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "일대일대응·조건부 대응에서 보기(ㄱㄴㄷ) 참거짓 판정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈏ 가 X∩Y={2,3,4} 에서만 작동한다는 점, g 의 값이 Z={3,4,5} 안에 있어야 해서 그 위에서
    f(x)≤4 가 강제된다는 점을 먼저 묶어야 배치가 좁혀진다. ㄱ 은 모든 배치에서 성립하고, ㄴ·ㄷ 은
    반례 한 개로 무너지는 구조라 「항상 참인가」를 배치 전체에 대해 확인하는 부담이 크다.
    실력 UP ★4 출발 · 교육청 기출 · 통찰 3개(CON·MI d3·VF) · M_total 10 → ★4.
    [분류 이슈] ★5 형식 요건(통찰 3개 이상 + VF 보유)은 충족하지만 집합 크기가 4·3 으로 작아
    탐색이 손으로 끝나므로 ★4 로 두었다.
  tier: star_4
  mechanism_primary: "㈏ 를 X∩Y 위에서 g=f+1 로 읽고 Z 범위로 f 값 제한 → 가능한 일대일대응 배치 나열 → 보기별로 전 배치 확인 또는 반례 구성"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/246-584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 집합의 원소와 조건 ㈏ 의 차이값 1 을 바꾼다. 제약: X∩Y 가 비지 않아야 ㈏ 가 작동하고, g 의 값이 Z 를 벗어나지 않도록 차이값과 Z 의 범위를 맞춰야 한다. 보기 ㄷ 의 부등식 사슬은 가능한 배치가 남도록 설계해야 한다."
    creative: "(1) 보기를 빼고 「가능한 f 의 개수」를 묻는 카운팅 문항으로 바꾸면 I-MI 중심 ★4 (2) g 도 일대일대응이라는 조건을 추가하면 배치가 급격히 줄어 ★3~4 (3) 차이값을 |g(x)-f(x)|=1 로 바꾸면 갈래가 배로 늘어 I-MI d3 강화 ★5 후보."
```

```yaml
- id: GN-CM2-246-585
  page: 246
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=x^2-4x+a (x≥2) 에 대하여 y=f(x) 와 y=f^{-1}(x) 의 그래프가 서로 다른 두 점에서 만나고
    그 두 점 사이의 거리가 √2 일 때 상수 a.
  category: "증가함수 → 교점을 f(x)=x 의 두 근으로 환원 → 거리 조건을 근의 차로 바꿔 근과 계수 관계"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x≥2 에서 f가 증가하므로 두 그래프의 교점이 모두 y=x 위에 있다는 대칭 성질로 교점을 x^2-5x+a=0 의 두 근으로 환원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 교점이 y=x 위에 있으므로 「두 점 사이의 거리 √2」를 「두 근의 차의 절댓값 1」로 바꾸고, 이를 (α+β)^2-4αβ 로 a 에 대한 방정식으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프 교점 사이의 거리와 근과 계수의 관계"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점을 구하지 않고 두 근의 합·곱만으로 거리 조건을 처리하는 것이 핵심이다. y=x 위의 두 점
    사이 거리는 좌표 차의 √2 배이므로 |α-β|=1, 즉 25-4a=1 로 a 가 나온다. 마지막에 두 근이
    정의역 x≥2 안에 있는지 확인이 필요(T-범위·T-경계).
    실력 UP ★4 · 통찰 2개(SYM·EQV) · M_total 9 → ★4 유지.
  tier: star_4
  mechanism_primary: "증가 → 교점은 x^2-5x+a=0 의 두 근 → 거리 √2·|α-β|=√2 → (α+β)^2-4αβ=1 → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/246-585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 일차항 계수 -4(꼭짓점 x=2)와 정의역 경계 2, 거리 √2 를 바꾼다. 제약: 꼭짓점의 x좌표와 정의역 경계를 같게 두어야 일대일이 되고, 거리 조건에서 나온 두 근이 모두 경계 이상이어야 한다. 거리는 √2 의 정수배로 두면 |α-β| 가 정수가 되어 계산이 깔끔하다."
    creative: "(1) 거리 대신 「두 교점과 원점이 이루는 삼각형의 넓이」를 주면 같은 골조·다른 대수 처리 ★4 (2) 교점이 한 점뿐이도록 하는 a 를 묻기(판별식=0 · ★3~4) (3) 정의역을 x≤2 로 바꾸면 감소함수가 되어 y=x 밖 교점까지 따져야 해 ★5 후보."
```

```yaml
- id: GN-CM2-246-586
  page: 246
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    구간함수 f(x)=2x-3 (x≥1), x/2-3/2 (x<1) 에 대하여 y=f(x) 의 그래프와 그 역함수
    y=f^{-1}(x) 의 그래프로 둘러싸인 도형의 넓이.
  category: "두 그래프가 y=x 대칭 → 교점을 f(x)=x 로 찾고, 대칭을 이용해 넓이를 한쪽의 2배로 계산"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "두 그래프가 y=x 에 대칭임을 써서 둘러싸인 도형이 y=x 에 대해 대칭인 사각형임을 파악하고, 한쪽(그래프와 y=x 사이) 넓이의 2배로 환원"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간함수 두 조각과 그 대칭상이 만드는 꼭짓점 좌표를 모두 읽어내 대수 조건을 평면 도형(삼각형·사각형)의 넓이 계산으로 전환"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "역함수 그래프와 둘러싸인 도형의 넓이(y=x 대칭 활용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x=1 에서 두 조각이 -1 로 이어져 f 가 전체에서 증가하므로 교점은 f(x)=x 의 해 x=3, x=-3
    두 개이고, 이 두 점을 대각으로 하는 도형이 y=x 에 대해 대칭이다. 꺾인 점(1,-1)과 그
    대칭점(-1,1)이 나머지 두 꼭짓점이 되어 넓이가 계산된다. 넓이 계산까지 가는 단계와 계산량이
    이 단원에서 가장 크고(Mₛ=3, Mₖ=3), 대칭을 쓰지 않으면 사실상 풀 수 없다.
    실력 UP ★4 · 통찰 2개(SYM d3·RT d2) · M_total 10 → ★4(★5 는 통찰 3개 이상 요건 미달).
  tier: star_4
  mechanism_primary: "두 조각이 x=1 에서 이어져 증가 → 교점은 f(x)=x 의 해 (3,3),(-3,-3) → 꺾인 점 (1,-1)과 대칭점 (-1,1) → 네 점이 이루는 도형의 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/246-586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 기울기 2·1/2 와 경계 1, 공통 절편 -3/2 계열 값을 바꾼다. 제약: 경계에서 두 조각의 값이 반드시 일치해야 f 가 일대일이 되고, 두 조각의 기울기가 서로 역수여야 도형이 대칭 사각형으로 닫힌다. f(x)=x 의 해가 양쪽 조각에서 하나씩 나와야 둘러싸인 도형이 생긴다."
    creative: "(1) 둘러싸인 도형의 넓이를 주고 절편을 되묻기(I-BW 추가 · ★5 후보) (2) 조각을 셋으로 늘리면 꼭짓점이 늘어 Mₖ 상승 ★4~5 (3) 넓이 대신 도형의 둘레나 대각선 길이를 묻기(★4)."
```

## 표본 판정 요약 (42문)

- ★ 분포: ★1 4 · ★2 21 · ★3 12 · ★4 5 · ★5 0
- 통찰형 27 · 절차형 15 · premium 0
- 통찰 유형 분포(연 30회): I-EQV 10 · I-RT 6 · I-SYM 6 · I-VF 3 · I-BW 3 · I-SC 1 · I-MI 2 · I-CON 1. depth 3 은 2회(246-584 I-MI · 246-586 I-SYM)뿐이고 나머지는 d1~d2 에 몰려 있다.
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 구역 단위로는 어긋나지 않았다.
- type_hint 상위 5: 「역함수 존재 조건(구간·절댓값·제한정의역)」 5 · 「그래프에서 역함숫값 읽기(y=x)」 5 · 「역함수 그래프의 교점(y=x 대칭)」 4 · 「합성·역함수가 섞인 식의 계산」 4 · 「역함수 조건으로 일차함수 미정계수 결정」 4
- 대상층: 하위권 4 · 중하위권 11 · 중위권 16 · 중상위권 9 · 상위권 2
- 그림: 7문(`crop:fig-237-551.png` · `crop:fig-237-554.png` · `crop:fig-242-e18.png` · `crop:fig-242-567.png` · `crop:fig-242-568.png` · `crop:fig-244-575.png` · `crop:fig-245-581.png`). 선택지 문항 2(245-577 · 246-584), 나머지 40은 단답·서술.
- 답과 어긋나는 골조는 발견되지 않았다(「전사 답 확인 필요」 표시 0건).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-246-584 | ★5 형식 요건(통찰 3개 이상 + I-VF 보유)은 충족하지만 집합 크기가 4·3 으로 작아 탐색이 손으로 끝난다. ★4 로 두고 기록 | ★4 / ★5 |
| GN-CM2-241-565 | M_total 8(3중 합성 정리)이나 통찰이 0 이라 +1 을 주지 않았다. 노동량 기준으로는 ★3 도 가능 | ★2 / ★3 |
| GN-CM2-244-576 | I-VF d2 · M_total 8 로 +1 후보이지만 계산 자체가 가볍고 통찰이 1개뿐이라 ★3 유지 | ★3 / ★4 |
| GN-CM2-245-580 | M_total 9 로 이 구역에서 가장 무겁지만 통찰 1개라 ★4 조건 미달. 부호 판정 실패율을 감안하면 ★4 여지 | ★3 / ★4 |
| GN-CM2-243-569 | 기울기가 음수(-3)여서 「교점은 반드시 y=x 위」라는 표준 환원이 일반적으로는 성립하지 않는다. 이 문제의 교점은 y=x 위에 있어 답에는 영향이 없으나, 변형 시 이 전제를 반드시 점검해야 함 | ★2 |
| GN-CM2-238-e14 외 12문 | `f^{-1}(p)=q ⟺ f(q)=p` 치환을 I-EQV d1 로 세는 관례를 택하면 이 범위의 절차형 15문 중 12문이 통찰형으로 바뀐다. 이 파일은 단원 정의 자체로 보아 세지 않았다(파일 머리글 규약) | 절차형 / 통찰형 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「역함수가 존재할 조건」 — 구간함수 기울기 동부호(239-e15 · 239-558), 절댓값 분해(239-560), 정의역·공역 제한 끝점 대응(239-559)은 판정 도구가 서로 달라 한 유형으로 묶으면 변형 설계가 무너진다. 최소 2개(구간·단조형 / 제한정의역형)로 쪼갠다. ⑵ 「역함수 그래프의 교점」 — 일차(243-e19 · 243-569)는 ★2, 제한정의역 이차(243-570 · 245-582 · 246-585)는 ★3~4 로 층이 갈린다. ⑶ 「그래프에서 역함숫값 읽기」 — 곡선 1개(242-e18 · 242-567 · 245-581)와 곡선 2개 교차 읽기(242-568 · 244-575)는 Mₛ 가 한 단계 다르다.
- **통합해도 될 유형** 「일차함수의 역함수 구하기」(237-553 · 240-e16 · 240-561)와 「역함수 조건으로 미정계수 결정」(238-e14 · 238-556 · 244-571)은 결국 같은 두 점 결정 골조라 한 유형의 난이도 층으로 묶을 수 있다. 「합성 역함수의 순서 성질」(241-e17 · 241-564 · 241-565 · 241-566 · 245-579)도 한 유형 안에서 겹 수(2겹/3겹)로 층을 나누면 충분하다.
- **카탈로그에 base ★ 를 붙일 때의 기준점 제안**: 「역함수 구하기·합성 역함숫값」 base ★2, 「역함수 존재 조건」 base ★3, 「역함수 그래프 교점·대칭」 base ★3, 「유한집합 일대일대응 탐색」 base ★4, 「일반 함수의 역함수 구조 추론」 base ★4.
