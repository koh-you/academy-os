---
name: mechanism-데이터-GN-CM2-23
description: 개념원리 공통수학2 23 충분조건과 필요조건(1/1 · 185-e11~190-458) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 23 충분조건과 필요조건
  unit_code: CM2-23
  part: "1/1"
  extract_range: "185~190쪽 · 185-e11~190-458"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 23 충분조건과 필요조건 (1/1) 정독 데이터 (v1.0)

이 파일은 23단원 24문 전수(185~190쪽 · 185-e11~190-458)를 다룬다. 구역은 「필수·발전 예제」 9문(필수 예제 3 · 확인체크 6) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 4문이고, 이 단원에는 「개념원리 익히기」 통번호 구역과 「특강」이 없다. 단원 전체가 **「p ⟹ q ⟺ P ⊂ Q」 한 축**에서 ⑴ 두 조건의 진리집합을 구해 포함 관계로 충분·필요·필요충분을 판정 ⑵ 진리집합 기호(P, Q, R)만으로 주어진 포함 관계·여집합을 조건 언어로 되옮기기 ⑶ 부등식·방정식 조건에서 상수의 값·범위를 역으로 구하기 ⑷ 여러 함의를 사슬·사이클로 이어 동치류를 찾기, 네 갈래로 뻗는 배열이다. 그림은 188-448 한 문항(U 안의 P, Q, R 벤다이어그램)뿐이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 · 「교육청 기출」 태그는 통찰이 있으면 +1. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(★2)으로 두었다. 통찰 계상에서 이 단원의 **표준 절차는 통찰로 세지 않았다** — 「충분조건/필요조건 → 포함 방향 결정」과 「대우로 뒤집기·삼단논법 연결」은 이 단원이 가르치는 절차 그 자체이므로 I-EQV 로 세지 않고, ⑴ 조건식을 비자명하게 동치 변환해야 할 때(x+|x|=0 → x ≤ 0 · x²+y²=0 ⟺ x=y=0 · ≠ 조건의 대우 · 부등식 조건의 부정) ⑵ 서로 다른 조건·포함 관계를 이어 새 관계를 만들 때(I-CON) ⑶ 경우 분기가 모두 답에 기여할 때(I-MI) ⑷ 그림을 조건 언어로 옮길 때(I-RT) ⑸ 목표 명제에서 빠진 고리를 역추적할 때(I-BW) ⑹ 분기 결과를 원 조건에 되돌려 검증할 때(I-VF)만 라벨링했다. ★5 는 통찰 3개 + 저노출 유형 요건을 채운 문항이 있어도 novelty_score 0 이므로 두지 않았다(★4 상한).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-185-e11
  page: 185
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 두 조건 p, q가 주어질 때 p가 q이기 위한 어떤 조건인지 말하기.
    ⑴ p: x<0, q: x+|x|=0 ⑵ p: x²+y²=0, q: |x|+|y|=0 ⑶ p: 이등변삼각형, q: 정삼각형.
  category: "각 조건의 진리집합 확정 → 포함 관계 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x+|x|=0 을 x ≤ 0 으로, x²+y²=0 과 |x|+|y|=0 을 각각 x=y=0 으로 옮겨야 비교 가능한 진리집합이 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "충분조건, 필요조건, 필요충분조건 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 「진리집합을 구해 포함 관계를 본다」 한 골조. ⑴은 x<0 ⊊ x ≤ 0 이라 충분, ⑵는 양변 모두 x=y=0 이라 필요충분, ⑶은 도형 포함이 반대라 필요.
    조건식을 그대로 두면 비교가 안 되고 동치 변환이 필요해 I-EQV d1 하나. 필수 예제 출발 ★2 · M_total 5 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 조건을 진리집합으로 동치 변환 → 두 집합의 포함 방향 → 충분/필요/필요충분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 충분조건 ⑵ 필요충분조건 ⑶ 필요조건'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/185-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 부등호 기준값(0 → 다른 수)과 절댓값 식(x-|x|=0 → x ≥ 0)을 바꿀 수 있음. 제약: 한쪽 진리집합이 다른 쪽에 진부분집합으로 들어가야 답이 「충분」 또는 「필요」로 갈리고, 등호 포함 여부가 바뀌면 필요충분으로 뒤집힘."
    creative: "(1) ⑵를 x²+y²=0 대 xy=0 으로 바꾸면 포함 방향이 반대(★2 유지) (2) 도형 소문항을 평행사변형·마름모·정사각형 계열로 교체(★2) (3) 세 조건 p, q, r를 한 번에 주고 서로의 관계를 모두 말하게 하면 단계 수가 늘어 ★3."
```

```yaml
- id: GN-CM2-185-438
  page: 185
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ~ㄷ 중 p가 q이기 위한 필요충분조건인 것을 모두 고르기.
    ㄱ |x|<1 대 x<1, ㄴ |x|=|y| 대 x²=y², ㄷ (x-y)(y-z)=0 대 x=y=z.
  category: "보기별 진리집합 일치 여부 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|x|=|y| ⟺ x²=y² 임을 확인하고, ㄷ의 곱이 0 인 조건을 x=y 또는 y=z 로 풀어 x=y=z 와 다름을 보는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "필요충분조건인 보기 고르기(진리집합 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    필요충분 = 두 진리집합이 같음. ㄱ은 한쪽만 포함, ㄴ은 절댓값과 제곱이 같은 집합, ㄷ은 곱이 0 인 조건이 「둘 중 하나만 같아도 참」이라 x=y=z 보다 넓다.
    ㄴ·ㄷ의 동치 변환 한 단계를 I-EQV d1 로 셈. 확인체크 출발 ★2 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "보기마다 양쪽 진리집합을 구해 같은지 확인 → 같은 것만 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄴ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/185-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 경계값 1 과 부등호, ㄴ의 지수(제곱 → 네제곱), ㄷ의 인수 배치를 바꿀 수 있음. 제약: 정답 보기가 정확히 하나 남도록 나머지 보기는 한 방향만 성립하게 둘 것."
    creative: "(1) 「충분조건이지만 필요조건이 아닌 것」으로 물음을 바꾸면 정답 보기가 ㄱ으로 이동(★2) (2) 보기에 xy>0 대 x>0이고 y>0 같은 부호 함정을 추가(★2~3) (3) 보기 수를 5개로 늘리고 복수 정답으로 하면 ★3."
```

```yaml
- id: GN-CM2-186-e12
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    진리집합이 P, Q인 두 조건에 대해 ~p가 ~q이기 위한 필요조건일 때 항상 옳은 집합 관계를 5지선다에서 고르기.
  category: "부정 조건의 필요조건 → 대우 → 진리집합 포함 → 선택지 동치 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "충분조건, 필요조건과 진리집합의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ~q ⟹ ~p 를 대우로 p ⟹ q 로 옮기면 P ⊂ Q. 선택지는 이 한 관계를 집합 연산으로 바꿔 쓴 것뿐이라 P∩Q=P 가 답.
    부정·대우·포함 방향 전환은 모두 이 단원이 가르치는 표준 절차라 통찰로 세지 않음. 다만 진리집합만 주어진 추상 표현이라 Mₐ=3, M_total 7 이라 −1 조건(통찰 0 그리고 M_total ≤ 5)에는 걸리지 않음 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "~p는 ~q의 필요조건 → 대우로 p ⟹ q → P ⊂ Q → 선택지를 집합 연산 동치로 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/186-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 없는 추상 문항. 대신 조건 자리(p ↔ q)와 부정 개수(~p 대 ~q / p 대 ~q)를 바꿔 포함 방향을 뒤집을 수 있음. 제약: 선택지 다섯 개 중 정확히 하나만 P ⊂ Q 와 동치가 되도록 유지."
    creative: "(1) 답을 여집합 표현(Qᶜ ⊂ Pᶜ)으로 두어 여집합 감각을 묻기(★2) (2) 세 조건 p, q, r로 늘려 두 포함을 이어야 답이 나오게 하면 I-CON 추가로 ★3 (3) 「항상 옳은 것만 있는 대로」 복수 정답형으로 바꾸면 ★3."
```

```yaml
- id: GN-CM2-186-439
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 진리집합 P, Q, R가 P∩Q=∅, Q∪R=Q를 만족할 때 q와 ~p, ~r와 ~q, p와 ~r 사이에 충분·필요·필요충분 중 알맞은 말 써넣기.
  category: "집합 조건을 포함 관계로 정리 → 여집합 방향으로 조건 관계 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶은 P∩Q=∅ 와 R ⊂ Q 두 조건을 이어 P∩R=∅ 즉 P ⊂ Rᶜ 를 새로 만들어야 판정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "진리집합의 포함·서로소 관계에서 조건 관계 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P∩Q=∅ 는 Q ⊂ Pᶜ, Q∪R=Q 는 R ⊂ Q. ⑴·⑵는 이 두 관계를 그대로 읽으면 끝나고, ⑶만 두 관계를 연결해 P와 R가 서로소임을 얻어야 한다.
    조건 결합 한 단계를 I-CON d1 로 셈(공통수학2라 CON 인정). 확인체크 출발 ★2 · 통찰 1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "P∩Q=∅ → Q ⊂ Pᶜ, Q∪R=Q → R ⊂ Q → 두 관계를 이어 P ⊂ Rᶜ → 각 소문항 방향 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 충분 ⑵ 필요 ⑶ 충분'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/186-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 추상 문항. 주어진 두 집합 조건을 P∪Q=U, P∩R=R 등 다른 형태로 교체할 수 있음. 제약: 세 소문항 모두 답이 결정되려면 주어진 조건이 P, Q, R 사이 두 관계를 완전히 고정해야 함."
    creative: "(1) 벤다이어그램을 주고 같은 것을 묻기(I-RT 추가 · ★2) (2) 조건을 하나 빼고 「항상 옳다고 할 수 없는 것」을 고르게 하면 반례 구성이 들어가 ★3 (3) P, Q, R를 구체적 부등식 진리집합으로 바꾸면 계산이 붙어 ★3."
```

```yaml
- id: GN-CM2-186-440
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    p는 ~r이기 위한 필요조건, r는 q이기 위한 충분조건일 때 보기 ㄱ~ㄷ(R ⊂ Q, P∪Rᶜ=P, P-Q=Qᶜ) 중 항상 옳은 것 모두 고르기.
  category: "두 조건 문장을 포함 관계로 → 여집합 사슬로 보기 판정"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ은 R ⊂ Q 의 여집합 Qᶜ ⊂ Rᶜ 와 Rᶜ ⊂ P 를 이어 Qᶜ ⊂ P 를 만들어야 P-Q=Qᶜ 가 나옴(두 포함의 2단 연결)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건 관계에서 항상 옳은 집합 관계 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 두 문장은 Rᶜ ⊂ P 와 R ⊂ Q. ㄱ은 그대로, ㄴ은 Rᶜ ⊂ P 의 합집합 표현이라 바로 보이고, ㄷ만 여집합을 한 번 더 뒤집어 두 포함을 잇는 2단 연결이 필요하다.
    연결 한 단계를 I-CON d2 로 셈. 규칙상 +1 요건(통찰 2개 이상 또는 depth 3)에 못 미쳐 확인체크 출발 ★2 유지 — ㄷ만 보면 ★3 후보다.
  tier: star_2
  mechanism_primary: "필요·충분 문장 → Rᶜ ⊂ P, R ⊂ Q → 여집합 뒤집어 Qᶜ ⊂ Rᶜ ⊂ P → 세 보기 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/186-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 보기의 집합 연산 표현(P∪Rᶜ=P / P∩Rᶜ=Rᶜ, P-Q=Qᶜ / Q∪P=U)만 등가 형태로 교체 가능. 제약: 세 보기 중 적어도 하나는 2단 연결이 필요해야 난도가 유지됨."
    creative: "(1) 보기 하나를 항상 옳지 않은 것(R ⊂ P 등)으로 바꿔 반례를 요구(★3) (2) 조건을 p는 ~r의 충분조건으로 뒤집어 방향 함정을 만들기(★2) (3) 같은 조건에서 P, Q, R의 벤다이어그램을 직접 그리게 하는 서술형(★3)."
```

```yaml
- id: GN-CM2-187-e13
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ p: -2 ≤ x ≤ 5 가 q: |x| ≤ a 이기 위한 충분조건일 때 양수 a의 값의 범위.
    ⑵ x+3 ≠ 0 이 x²+3ax+27 ≠ 0 이기 위한 필요조건일 때 상수 a의 값.
  category: "충분·필요 → 진리집합 포함 → 상수 조건(부등식 / 근 조건)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵의 ≠ 조건은 진리집합이 여집합이라 그대로 비교되지 않음 — 대우로 옮겨 x=-3 이 x²+3ax+27=0 의 근이어야 한다는 등식 조건으로 바꿔야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "충분조건, 필요조건이 되도록 하는 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 [-2, 5] ⊂ [-a, a] 를 양 끝에서 비교해 a ≥ 5. ⑵는 ≠ 조건 두 개의 포함 관계를 대우로 뒤집어 「x=-3 이 이차방정식의 근」으로 옮긴 뒤 대입.
    ≠ 조건의 대우 전환 한 단계를 I-EQV d2 로 셈. 함정은 T-경계(등호 포함)와 T-범위(양수 a) 둘 → Mₜ=2. 필수 예제 출발 ★2 · 통찰 1(d2) → +1 요건 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "충분·필요를 포함 방향으로 → ⑴ 구간 양 끝 비교 → ⑵ 대우로 근 조건 전환 후 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a\ge 5$ ⑵ $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/187-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 구간 끝값(-2, 5)과 ⑵의 상수항 27·일차항 계수 3a 를 바꿀 수 있음. 제약: ⑴은 |x| ≤ a 가 원점 대칭이라 |끝값| 중 큰 쪽이 a 의 하한을 결정해야 하고, ⑵는 x=-3 대입이 a 에 대한 일차식이 되어 유일한 값이 나와야 함."
    creative: "(1) ⑴을 필요조건으로 바꾸면 포함 방향이 뒤집혀 a 의 상한 문제가 됨(★2) (2) ⑵를 필요충분으로 바꾸면 남은 근까지 따져야 해 ★3 (3) a 를 정수로 제한하고 개수를 묻는 형태로 바꾸면 경계 함정이 커져 ★3."
```

```yaml
- id: GN-CM2-187-441
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    p: -1 ≤ x ≤ k 가 q: -k/6 ≤ x ≤ 4 이기 위한 필요조건일 때 양수 k의 값의 범위.
  category: "필요조건 → Q ⊂ P → 양 끝 부등식 → k 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간 조건이 충분·필요조건이 되도록 하는 상수의 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p가 q의 필요조건이므로 Q ⊂ P. 양 끝을 각각 비교해 -1 ≤ -k/6 과 4 ≤ k 를 얻고 양수 조건과 함께 정리하면 범위가 닫힌 구간으로 나온다.
    포함 방향 결정도 구간 끝 비교도 이 단원의 표준 절차라 통찰 없음. 다만 양쪽 끝에 k 가 모두 들어가 있어 부등식이 두 개 생기고 경계 등호·양수 제한이 함정 → Mₜ=2, M_total 7 이라 −1 없음 → ★2.
  tier: star_2
  mechanism_primary: "필요조건 → Q ⊂ P → 왼쪽 끝·오른쪽 끝 두 부등식 → 양수 k 와 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\le k\le 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/187-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝의 상수(-1, 4)와 k 의 계수(-k/6 의 분모 6)를 바꿀 수 있음. 제약: 양 끝 부등식이 서로 모순되지 않아 k 의 범위가 비지 않아야 하고, 양수 조건을 붙인 뒤에도 구간이 남아야 함."
    creative: "(1) 충분조건으로 바꿔 P ⊂ Q 방향으로 뒤집기(★2) (2) k 의 정수 개수를 묻는 형태(★2, 경계 함정 강화) (3) q 를 두 구간의 합집합으로 주면 어느 조각에 들어가는지 따져야 해 ★3."
```

```yaml
- id: GN-CM2-187-442
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    p: x²-x+a=0 이 q: (x+3)(x-4)²=0 이기 위한 필요충분조건일 때 상수 a의 값.
  category: "필요충분 → 해집합 일치 → 근과 계수의 관계"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차식의 해집합은 중근 4를 원소로 한 번만 가져 {-3, 4} — 필요충분을 「두 해집합이 같다」로 옮겨 이차방정식의 두 근을 -3, 4로 고정하는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 조건이 필요충분조건이 되도록 하는 상수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    q의 진리집합은 중근을 합쳐 {-3, 4}. 필요충분이므로 p의 해집합도 같아야 하고, 두 근이 -3, 4 이면 근과 계수의 관계로 a 는 곱에서 바로 나온다.
    중근을 원소 하나로 세는 동치 변환이 유일한 고비라 I-EQV d1. 확인체크 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "q의 해집합 {-3, 4} → 필요충분이므로 p의 두 근도 -3, 4 → 근과 계수의 관계로 a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/187-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "q의 두 근(-3, 4)과 중근이 붙는 자리를 바꿀 수 있음. 제약: p가 이차방정식이므로 두 근의 합이 x 의 계수와 맞아떨어져야 하고(여기서는 -3+4=1), 그렇지 않으면 a 가 존재하지 않는 문항이 된다."
    creative: "(1) p를 x²+bx+a=0 으로 두고 a+b 를 묻기(★2) (2) 필요조건으로 바꾸면 해집합이 부분집합이면 되어 경우가 늘고 ★3 (3) q를 사차식으로 올려 중근 두 개를 넣으면 해집합 감각이 더 필요해 ★3."
```

```yaml
- id: GN-CM2-187-443
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    p: -2<x<1 또는 x>3, q: x>a, r: x>b에서 q는 p의 필요조건, r는 p의 충분조건일 때 a의 최댓값과 b의 최솟값의 곱.
  category: "두 방향 포함 관계 → 반직선과 두 구간 합집합의 비교"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "r ⟹ p 는 반직선 (b, ∞) 가 두 구간의 합집합에 들어가야 한다는 뜻 — 유계 구간에는 반직선이 들어갈 수 없으므로 위쪽 구간만 후보라는 변환이 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합집합 꼴 조건에서 충분·필요조건이 되도록 하는 상수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    q가 p의 필요조건이면 P ⊂ Q 라 a 는 P의 왼쪽 끝 -2 이하, r가 p의 충분조건이면 R ⊂ P 인데 R가 반직선이라 위쪽 구간 x>3 안에만 들어갈 수 있어 b ≥ 3.
    반직선이 합집합에 포함될 조건을 옮기는 단계가 고비라 I-EQV d2. 확인체크 출발 ★2 · 통찰 1(d2) → ★2 유지(경계 등호와 열린 구간이 Mₜ=2).
  tier: star_2
  mechanism_primary: "필요 → P ⊂ Q 로 a 상한, 충분 → R ⊂ P 이고 R가 반직선이라 위쪽 구간만 → b 하한 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/187-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p의 세 경계값(-2, 1, 3)을 바꿀 수 있음. 제약: 위쪽 조각이 반직선으로 남아야 b 의 최솟값이 정해지고, a 의 최댓값은 항상 P의 가장 왼쪽 끝이 되도록 구간 배치를 유지할 것."
    creative: "(1) q, r를 x<a, x<b 로 바꿔 왼쪽 반직선으로 뒤집기(★2) (2) p를 세 조각 합집합으로 늘리면 후보 구간 고르기가 늘어 ★3 (3) a의 최댓값과 b의 최솟값의 합·차를 묻는 형태로 바꿔도 골조는 그대로(★2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-188-444
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    명제 「x²>100 이면 x ≠ k 이다」가 참이 되도록 하는 정수 k의 개수.
  category: "≠ 결론 명제 → 대우 → k의 범위 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결론이 ≠ 라 진리집합이 여집합 — 대우로 옮겨 「x=k 이면 x² ≤ 100」 즉 k 가 x²>100 의 진리집합에 들어가지 않아야 한다는 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "명제가 참이 되도록 하는 상수의 개수(대우 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x ≠ k 를 그대로 다루면 진행이 안 되고, 대우 「x=k ⟹ x² ≤ 100」으로 옮기면 k² ≤ 100 즉 -10 ≤ k ≤ 10.
    대우 전환 한 단계를 I-EQV d2 로 셈. 함정은 등호 포함과 정수 개수 세기(양 끝 포함 21개) 둘 → Mₜ=2. STEP 1 출발 ★2 · 통찰 1(d2) → ★2 유지.
  tier: star_2
  mechanism_primary: "대우 x=k ⟹ x² ≤ 100 → k² ≤ 100 → -10 ≤ k ≤ 10 → 정수 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/188-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 100 을 다른 완전제곱수(36, 144)로 바꾸면 개수가 2√N+1 로 따라 변함. 제약: 경계 √N 이 정수여야 개수가 깔끔하고, 부등호를 x² ≥ 100 으로 바꾸면 경계가 빠져 개수가 달라짐."
    creative: "(1) 결론을 x ≠ k 대신 x>k 로 바꿔 범위형으로(★2) (2) 가정을 |x|>10 으로 써서 같은 문항을 절댓값으로 위장(★2) (3) k 를 정수에서 자연수·소수로 제한해 사후 필터를 넣으면 I-VF 가 붙어 ★3."
```

```yaml
- id: GN-CM2-188-445
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    p ⟶ q, ~s ⟶ ~q, s ⟶ r가 모두 참일 때 5지선다에서 항상 참이라고 할 수 없는 명제 고르기.
  category: "대우 정리 → 함의 사슬 연결 → 방향이 반대인 것 찾기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "참인 명제들의 삼단논법 연결로 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ~s ⟶ ~q 의 대우 q ⟶ s 를 세우면 p ⟶ q ⟶ s ⟶ r 사슬이 완성되고, 선택지 넷은 이 사슬(또는 그 대우)에 그대로 들어간다. 남는 하나는 사슬을 거꾸로 타는 r ⟶ ~q.
    대우 전환과 삼단논법은 이 단원의 표준 절차라 통찰 없음. 조건이 기호만으로 주어져 Mₐ=3, M_total 7 → −1 없음 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "대우로 q ⟶ s 확보 → p ⟶ q ⟶ s ⟶ r 사슬 → 사슬·대우로 설명되지 않는 선택지 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/188-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 주어지는 세 명제의 부정 위치(~s ⟶ ~q 를 q ⟶ s 로 직접 주기 등)와 사슬 길이를 조절 가능. 제약: 선택지 다섯 중 정확히 하나만 사슬로 유도되지 않아야 함."
    creative: "(1) 「항상 참인 것」을 묻는 긍정형으로 뒤집기(★2) (2) 명제 하나를 필요·충분 문장으로 바꿔 진술 해석을 추가(★2) (3) 사슬이 사이클이 되도록 한 명제를 더 주면 동치류 판단이 들어가 ★3."
```

```yaml
- id: GN-CM2-188-446
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    5지선다에서 p가 q이기 위한 필요조건이지만 충분조건은 아닌 것 고르기(약수·부등식·유리수·사각형·집합 보기).
  category: "선택지마다 양방향 참·거짓 판정 → 한 방향만 성립하는 것 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "필요조건이지만 충분조건은 아닌 것 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 선택지에서 q ⟹ p 는 성립하고 p ⟹ q 는 반례로 깨지는지만 보면 된다. xy>1 과 x>1이고 y>1 은 음수 반례(x=y=-2)로 역이 깨지고, 나머지는 방향이 반대이거나 양방향 동치라 탈락.
    반례 찾기는 짧고 보기마다 같은 절차를 반복하는 구조라 통찰로 세지 않음. 부호 반례와 포함 방향이 함정이라 Mₜ=2, M_total 7 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지마다 q ⟹ p 확인 → p ⟹ q 의 반례 탐색 → 한 방향만 성립하는 보기 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/188-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "①의 두 수(6, 18)와 ②의 기준값 1 을 바꿀 수 있음. 제약: ①은 한쪽 약수 집합이 다른 쪽에 포함되도록 배수 관계를 유지해야 하고, ②는 음수 반례가 살아 있도록 기준값을 양수로 둘 것."
    creative: "(1) 「충분조건이지만 필요조건은 아닌 것」으로 물음을 뒤집으면 정답이 ①로 이동(★2) (2) 보기를 도형 조건만으로 채우면 기하 지식 부담으로 ★3 (3) 각 보기에서 필요·충분·필요충분 중 무엇인지 모두 적게 하는 서술형(★3)."
```

```yaml
- id: GN-CM2-188-447
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    p는 ~r이기 위한 충분조건, r는 q이기 위한 필요조건일 때 5지선다에서 항상 참인 명제 고르기.
  category: "조건 문장을 함의로 → 대우 연결 → 참인 명제 선택"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "충분·필요조건 문장에서 항상 참인 명제 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 문장은 p ⟹ ~r 와 q ⟹ r. 뒤쪽의 대우 ~r ⟹ ~q 를 앞에 이으면 p ⟹ ~r ⟹ ~q 가 되어 p ⟶ ~q 가 항상 참.
    부정이 섞인 문장을 함의로 옮기고 대우로 잇는 것은 이 단원의 표준 절차라 통찰로 세지 않음. 기호만의 추상 표현이라 Mₐ=3, M_total 7 → −1 없음 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "충분·필요 문장 → p ⟹ ~r, q ⟹ r → 대우 ~r ⟹ ~q 를 이어 p ⟶ ~q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/188-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 부정이 붙는 자리(~r 대신 ~q)와 충분·필요의 배치만 교체 가능. 제약: 두 문장을 이어 정확히 하나의 선택지만 도출되도록 방향을 맞출 것."
    creative: "(1) 「항상 참이라고 할 수 없는 것」으로 뒤집기(★2) (2) 진리집합 표현으로 같은 것을 묻기(★2) (3) 조건을 셋에서 넷으로 늘려 두 번 이어야 답이 나오게 하면 ★3."
```

```yaml
- id: GN-CM2-188-448
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    진리집합 P, Q, R의 포함 관계가 그림(Q가 P 안, P와 R는 겹치고 Q는 R와 만나지 않음)과 같을 때 옳은 조건 관계를 5지선다에서 고르기.
  category: "벤다이어그램의 포함·교차 관계를 조건 언어로 번역"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에서 Q ⊂ P, P∩R ≠ ∅(서로 포함 아님), Q∩R=∅ 를 읽어내 충분·필요·필요충분 진술로 옮기는 기하 → 명제 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램에서 충분·필요조건 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림이 주는 관계는 Q ⊂ P 하나와 두 개의 비포함(P와 R는 겹치기만, Q와 R는 서로소)뿐이다. Q ⊂ P 는 q ⟹ p 이므로 대우로 ~p ⟹ ~q, 즉 ~q가 ~p의 필요조건이라는 선택지만 항상 옳다.
    그림을 조건 언어로 옮기는 단계를 I-RT d1 로 셈. STEP 1 출발 ★2 · 통찰 1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "그림에서 Q ⊂ P·Q∩R=∅ 읽기 → 포함을 함의로 → 대우까지 확인해 옳은 선택지"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: 'crop:fig-188-448.png'
  latex: latex-bank/gn-cm2/items/188-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 그림의 배치(R를 P 안으로 넣기 · Q를 P∩R 안에 놓기)를 바꾸면 정답 선택지가 이동함. 제약: 그림 라벨 U, P, Q, R와 겹침 여부는 문항 본문이 아니라 크롭 이미지에 고정돼 있으므로 배치를 바꾸면 그림을 새로 그려야 함."
    creative: "(1) 그림 대신 P∩Q=Q, Q∩R=∅ 같은 식으로 주면 I-RT가 빠져 절차형(★2) (2) 「옳은 것만 있는 대로 고르시오」 복수 정답형(★3) (3) 그림에 네 번째 집합을 추가해 2단 연결을 요구하면 ★3."
```

```yaml
- id: GN-CM2-189-449
  page: 189
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    p: x³-4x²-x+4=0 이 q: 2x+a=0 이기 위한 필요조건이 되도록 하는 모든 실수 a의 값의 곱.
  category: "필요조건 → Q ⊂ P → 한원소집합이 삼차방정식의 근 → 경우별 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q가 한원소집합이라 Q ⊂ P 는 그 원소가 세 근 중 하나면 된다는 뜻 — 세 경우가 모두 a 를 하나씩 주고 모두 답에 기여"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 조건이 충분·필요조건이 되도록 하는 상수의 값(모든 값의 합·곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼차식을 인수분해하면 P는 세 원소, q의 진리집합은 원소 하나. 필요조건이므로 Q ⊂ P, 즉 -a/2 가 세 근 중 어느 하나여도 되고 그때마다 a 가 하나씩 나온다.
    「모든 a」라는 표현이 세 경우를 모두 요구하므로 I-MI d1. 인수분해 계산이 붙어 Mₖ=2. STEP 1 출발 ★2 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "삼차식 인수분해로 P의 세 근 → Q ⊂ P 이므로 -a/2 가 각 근 → 세 a 의 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 세 근과 q의 일차식 계수(2x+a 의 2)를 바꿀 수 있음. 제약: 삼차식이 유리수 범위에서 인수분해돼 근이 모두 실수여야 하고, 근의 개수가 곧 a 의 개수이므로 합·곱을 묻는 물음과 맞아야 함."
    creative: "(1) 충분조건으로 뒤집으면 P ⊂ Q 가 되어 해가 없는 문항이 되므로 q를 이차식으로 바꿔야 함(★3) (2) a 를 정수로 제한하고 개수를 묻기(★2) (3) q: x²+ax+b=0 으로 올리면 두 근을 고르는 조합이 생겨 ★3."
```

```yaml
- id: GN-CM2-189-450
  page: 189
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    p: x²-4x-12=0 이 ~q(q: |x-3|>k)이기 위한 충분조건이 되도록 하는 자연수 k의 최솟값. 5지선다.
  category: "부정 조건의 진리집합 → 두 해가 닫힌 구간에 포함 → k 하한"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "q가 절댓값 부등식이라 ~q 를 직접 |x-3| ≤ k 즉 닫힌 구간으로 뒤집어야 포함 관계를 쓸 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정 조건이 충분·필요조건이 되도록 하는 상수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p의 진리집합은 이차방정식의 두 해로 이루어진 두 원소 집합. p ⟹ ~q 이므로 두 해가 모두 ~q의 구간 3-k ≤ x ≤ 3+k 안에 들어가야 하고, 멀리 있는 해가 하한을 결정한다.
    부정 조건을 구간으로 뒤집는 단계가 고비라 I-EQV d2. STEP 1 출발 ★2 이나 교육청 기출 태그 +1(통찰 있음) → ★3.
  tier: star_3
  mechanism_primary: "p의 두 해 구하기 → ~q: 3-k ≤ x ≤ 3+k → 두 해가 모두 구간 안 → k 하한 → 자연수 최솟값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 두 해와 절댓값 중심 3 을 바꿀 수 있음. 제약: 중심에서 더 먼 해가 k 의 하한을 결정하므로 두 해가 중심에 대해 비대칭이어야 문항이 살고, 자연수 최솟값을 묻는다면 하한이 정수 근처에 오도록 둘 것."
    creative: "(1) 최댓값을 묻도록 포함 방향을 뒤집기(p가 ~q의 필요조건 · ★3) (2) p를 부등식 조건으로 바꾸면 구간 대 구간 비교가 되어 ★3 (3) k 의 범위 전체를 구하는 서술형으로 바꾸면 경계 등호 판단이 남아 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-189-451
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    p: |x+2| ≥ k, q: |x+3|<4에 대하여 명제 p ⟶ ~q의 역이 참이 되도록 하는 양수 k의 최댓값.
  category: "역 명제 방향 확정 → 두 여집합형 반직선의 포함 비교 → k 상한"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역 ~q ⟶ p 로 방향을 확정한 뒤 ~q(|x+3| ≥ 4)와 p(|x+2| ≥ k)를 각각 두 반직선의 합집합으로 풀어야 비교가 가능"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "왼쪽 반직선끼리·오른쪽 반직선끼리 각각 포함 조건을 세우고 두 부등식을 모두 만족시켜야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "역·대우가 참이 되도록 하는 절댓값 조건의 상수 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역은 ~q ⟶ p 이므로 ~q의 진리집합이 p의 진리집합에 포함돼야 한다. 둘 다 절댓값이 크거나 같은 꼴이라 각각 바깥쪽 두 반직선이고, 왼쪽·오른쪽 끝을 각각 비교하면 k 의 상한이 두 개 나와 작은 쪽이 답.
    부정과 역이 겹친 방향 정리(I-EQV d2)와 두 반직선 동시 비교(I-MI d1) 두 단계. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "역 ~q ⟶ p → ~q: x ≤ -7 또는 x ≥ 1, p: x ≤ -2-k 또는 x ≥ -2+k → 양쪽 끝 비교 → k 최댓값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 절댓값의 중심(-2, -3)과 q의 반지름 4 를 바꿀 수 있음. 제약: 두 중심이 다르면 좌·우 두 부등식이 서로 다른 상한을 주어 문항이 살고, 중심이 같으면 한 부등식으로 줄어 난도가 떨어짐. k 는 양수라야 p가 두 반직선으로 갈라짐."
    creative: "(1) 대우가 참이 되도록으로 바꾸면 원 명제와 같아져 방향이 반대(★3) (2) q를 이차부등식으로 바꾸면 구간 계산이 추가돼 ★3~4 (3) k 의 범위 전체와 정수 개수를 묻기(★3)."
```

```yaml
- id: GN-CM2-189-452
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    q ⟶ ~p, ~r ⟶ s가 참일 때 명제 p ⟶ r가 참임을 보이기 위해 더 필요한 참인 명제를 5지선다에서 고르기.
  category: "목표 명제의 대우에서 빠진 고리 역추적"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "목표 p ⟶ r 의 대우 ~r ⟶ ~p 를 먼저 세우고, 주어진 ~r ⟶ s 와 q ⟶ ~p 사이의 빈 고리가 s ⟶ q 임을 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "명제가 참임을 보이기 위해 추가로 필요한 명제 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 두 명제는 시작점과 끝점이 맞지 않아 그대로 이어지지 않는다. 목표의 대우로 ~r 에서 출발해 ~p 로 끝나는 길을 그리면 ~r ⟶ s 와 q ⟶ ~p 사이를 s ⟶ q 로 메워야 함이 드러난다.
    결과에서 거꾸로 필요한 고리를 찾는 구조라 I-BW d2. 선택지에는 방향이 뒤집힌 함정(q ⟶ ~r 등)이 섞여 있다. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "p ⟶ r 의 대우 ~r ⟶ ~p → ~r ⟶ s, q ⟶ ~p 사이의 빈 고리 → s ⟶ q"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 주어진 두 명제의 부정 위치와 목표 명제를 바꿔 빈 고리의 자리를 이동시킬 수 있음. 제약: 선택지 중 정확히 하나만 사슬을 완성해야 하고, 나머지는 방향이 반대이거나 대우로도 이어지지 않아야 함."
    creative: "(1) 빈 고리를 직접 쓰게 하는 서술형(★3) (2) 명제를 충분·필요 문장으로 바꿔 진술 해석을 추가(★3) (3) 주어진 명제를 셋으로 늘리고 두 고리를 찾게 하면 ★4."
```

```yaml
- id: GN-CM2-189-453
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    다섯 조건 p, q, r, s, t 사이에 필요·충분 관계 다섯 개가 주어질 때 p, q, s, t 중 r이기 위한 필요충분조건인 것의 개수.
  category: "조건 문장을 함의로 → 사슬이 사이클을 이루는지 확인 → 동치류 크기"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "다섯 함의를 한 줄로 늘어놓지 않고 r ⟹ q ⟹ p ⟹ t ⟹ r 처럼 닫힌 고리로 이어야 네 조건이 서로 동치임이 한 번에 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여러 조건의 함의 사슬에서 필요충분조건 개수 세기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 문장을 모두 함의로 바꾸면(대우를 쓰는 것 하나 포함) r 에서 출발해 r 로 돌아오는 고리가 만들어지고, 고리 위의 조건은 모두 서로 필요충분이 된다. 고리 밖으로만 나가는 s 는 필요조건일 뿐이라 제외.
    사이클을 닫는 결합이 핵심이라 I-CON d2. STEP 2 출발 ★3 유지(통찰 2개 이상 요건에는 미달하지만 단계 수가 많아 Mₛ=3).
  tier: star_3
  mechanism_primary: "다섯 문장을 함의로 정리 → r ⟹ q ⟹ p ⟹ t ⟹ r 고리 확인 → 고리 위 조건만 필요충분 → 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 개수(5개)와 고리에 들어가지 않는 조건의 수를 바꿀 수 있음. 제약: 고리가 실제로 닫혀야 필요충분이 생기고, 고리 밖 조건은 한 방향으로만 연결돼야 답이 유일해짐."
    creative: "(1) 고리를 일부러 끊어 필요충분이 하나도 없게 만들기(★3) (2) 각 조건 쌍의 관계를 모두 답하게 하는 서술형(★4) (3) 조건을 구체적 부등식으로 채우면 진리집합 계산이 붙어 ★4."
```

```yaml
- id: GN-CM2-189-454
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    p: |x|>a(a>0), q: x>b, r: -5<x<-2 또는 x>5에서 p는 r의 필요조건, q는 r의 충분조건일 때 a의 최댓값과 b의 최솟값의 합.
  category: "두 방향 포함 관계 → 조각난 집합과 두 반직선의 대응 → a, b 경계"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "p는 |x|>a 라 두 반직선의 합집합 — R ⊂ P 를 쓰려면 R의 왼쪽 조각은 P의 왼쪽 반직선에, 오른쪽 조각은 오른쪽 반직선에 들어가야 한다는 대응으로 옮겨야 함"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조각이 각각 주는 a 조건을 모두 만족시켜야 하고(더 빡빡한 쪽이 최댓값 결정), Q ⊂ R 쪽은 반직선이라 위쪽 조각만 후보"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "합집합 꼴 조건에서 충분·필요조건이 되도록 하는 상수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    r ⟹ p 에서 R의 두 조각이 각각 P의 두 반직선에 들어가야 하므로 a 에 대한 조건이 둘 생기고 더 강한 쪽이 최댓값을 준다. q ⟹ r 에서는 반직선 (b, ∞) 가 유계 구간에 들어갈 수 없어 위쪽 조각만 후보라 b 하한이 정해진다.
    조각 대응(I-EQV d2)과 두 조건 동시 만족(I-MI d1) 두 단계. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "r ⟹ p: 두 조각을 각각 |x|>a 의 두 반직선에 대응 → a 상한 → q ⟹ r: 반직선은 위쪽 조각에만 → b 하한 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/189-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r의 네 경계값(-5, -2, 5)과 a>0 조건을 바꿀 수 있음. 제약: 왼쪽 조각이 유계라야 b 후보가 오른쪽 조각으로 한정되고, 두 조각이 주는 a 조건 중 하나가 더 강해야 최댓값이 한 값으로 정해짐."
    creative: "(1) p를 |x|<a 로 바꾸면 유계 구간 대 합집합이 되어 포함 자체가 불가능해지므로 r를 유계로 바꿔야 함(★3) (2) a 의 최댓값과 b 의 최솟값의 곱으로 묻기(★3, 골조 동일) (3) a, b 를 정수로 제한해 순서쌍 개수를 묻기(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-190-455
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    p: (x²-kx+k)(x²-x-6) ≤ 0, q: x²-x-6 ≤ 0에 대하여 명제 p ⟶ q가 참이 되도록 하는 실수 k의 최댓값 M과 최솟값 m에 대한 12Mm의 값.
  category: "곱 부등식의 진리집합 → 구간 밖에서 이차식이 항상 양수 → 근의 위치 조건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P ⊂ Q 를 「q의 구간 밖에서는 p가 거짓」으로 옮기고, 그 바깥에서 x²-x-6>0 이므로 결국 x²-kx+k>0 이 구간 밖 전체에서 성립해야 한다는 조건으로 변환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간 밖에서 양수일 조건이 판별식이 음인 경우와 두 근이 모두 구간 안에 놓이는 경우 두 갈래로 갈리고 두 경우 모두 k 범위에 기여"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근이 구간 끝에 걸리는 경계 k 값에서 부등호가 여전히 성립하는지 되짚어야 최댓값·최솟값의 등호 포함이 결정됨"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "곱 꼴 이차부등식 조건에서 명제가 참이 되도록 하는 상수의 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    q의 진리집합은 이차부등식의 닫힌 구간. p ⟶ q 가 참이려면 그 구간 밖에서 곱이 양수여야 하는데 바깥에서 두 번째 인수가 양수이므로 첫 인수가 구간 밖 전체에서 양수여야 한다.
    이 조건은 판별식이 음이거나 두 근이 모두 구간 안인 두 갈래로 갈리고, 두 갈래의 합집합이 k 의 범위가 된다. 변환(EQV d2)·분기(MI d2)·경계 검증(VF d1) 세 단계.
    실력 UP 출발 ★4 · 통찰 3개라 +1 후보지만 근의 위치 조건은 표준 도구이고 novelty_score 0 이라 ★5 로 올리지 않음(★4 상한 규약).
  tier: star_4
  mechanism_primary: "P ⊂ Q → 구간 밖에서 x²-kx+k>0 → 판별식 음 또는 두 근이 구간 안 → k 범위 합집합 → 12Mm"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-72$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/190-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "q의 이차식(x²-x-6)의 두 근과 p의 첫 인수 계수 배치(x²-kx+k 의 상수항이 k 인 점)를 바꿀 수 있음. 제약: 두 갈래가 이어져 k 범위가 하나의 구간이 되도록 판별식 경계와 근의 위치 경계가 맞물려야 하고, 최댓값·최솟값이 유리수로 떨어져야 12Mm 이 정수가 됨."
    creative: "(1) 부등호를 <, > 로 바꿔 경계 포함 여부를 뒤집기(★4) (2) 명제를 q ⟶ p 로 뒤집으면 포함 방향이 반대라 조건이 훨씬 단순해져 ★3 (3) k 를 정수로 제한해 개수를 묻기(★4) (4) 첫 인수를 x²-kx+2k 로 바꾸면 판별식 경계가 이동해 같은 골조로 수치만 달라짐."
```

```yaml
- id: GN-CM2-190-456
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 참인 명제(㈎ 판매량이 증가하지 않으면 인지도가 높아지지 않는다, ㈏ 가격이 상승하면 수입이 증가한다)에 더해 「인지도가 높아지면 수입이 증가한다」를 참으로 만들려면 어떤 명제가 더 필요한지 5지선다에서 2개 고르기.
  category: "일상 문장 → 명제 기호 → 대우 정리 → 빠진 고리 역추적(복수 정답)"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일상 문장 네 개를 판매량·인지도·가격·수입 네 조건의 함의로 옮기고 부정문은 대우로 정리해야 사슬을 볼 수 있음"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "목표 인지도 ⟹ 수입 에서 출발해 ㈏의 시작점 가격 까지 이어야 하므로 인지도에서 가격으로 가는 고리가 필요함을 역추적"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "고리를 직접 잇는 선택지와 ㈎의 대우(인지도 ⟹ 판매량)를 한 번 경유해 잇는 선택지 두 가지가 모두 답이 되므로 두 경로를 모두 찾아야 함"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "일상 문장 명제의 삼단논법 — 추가로 필요한 명제 찾기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎는 대우로 인지도 ⟹ 판매량, ㈏는 가격 ⟹ 수입. 목표는 인지도 ⟹ 수입이므로 인지도(또는 판매량)에서 가격으로 가는 고리 하나가 있으면 사슬이 완성된다.
    직접 잇는 ③과 판매량을 거쳐 잇는 ⑤(대우로 판매량 ⟹ 가격)가 모두 답. 문장 번역(RT d1)·역추적(BW d2)·두 경로(MI d1) 세 단계다.
    실력 UP 출발 ★4 유지. 통찰 3개지만 저노출 유형(SC/VF/SYM/XU)이 없고 novelty 0 이라 ★5 로 올리지 않음.
  tier: star_4
  mechanism_primary: "문장을 함의로·부정문은 대우로 → 인지도 ⟹ 판매량, 가격 ⟹ 수입 → 사이를 잇는 고리 두 경로 찾기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/190-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 등장 개념 수(4개)와 부정문으로 주는 문장의 개수를 조절 가능. 제약: 정답 개수를 2개로 유지하려면 직접 고리와 한 번 경유하는 고리가 모두 선택지에 있어야 하고, 나머지 셋은 방향이 반대여야 함."
    creative: "(1) 정답 1개짜리로 줄이면 ★3 (2) 개념을 5개로 늘려 두 고리를 요구하면 ★4~5 (3) 필요한 명제를 직접 문장으로 쓰게 하는 서술형(★4) (4) 소재를 수학 조건(부등식)으로 바꾸면 I-RT가 빠져 ★3."
```

```yaml
- id: GN-CM2-190-457
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    P={4}, Q={a², b}, R={a-1, ab}일 때 p는 q의 충분조건, r는 p의 필요조건이면 a+b의 최댓값.
  category: "포함 관계를 원소 소속으로 → 네 갈래 경우 분기 → 최댓값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P가 한원소집합이라 P ⊂ Q 와 P ⊂ R 가 각각 4 ∈ Q, 4 ∈ R 라는 원소 소속 조건으로 바뀜"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4가 Q의 어느 원소인지(a²=4 또는 b=4)와 R의 어느 원소인지(a-1=4 또는 ab=4)가 각각 갈려 네 조합을 모두 따진 뒤 a+b 를 비교해야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "진리집합이 원소로 주어진 조건에서 충분·필요조건과 상수의 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    p ⟹ q 는 4 ∈ Q, p ⟹ r 는 4 ∈ R. 각각 두 가지 경우라 조합이 넷이고, 경우마다 a, b 가 정해진다. b=4 이면서 a-1=4 인 조합이 a+b 를 가장 크게 만든다.
    포함을 원소 소속으로 옮기는 변환(EQV d1)과 네 갈래 분기(MI d2) 두 단계. 집합 원소가 서로 달라야 한다는 점과 필요·충분 방향이 함정이라 Mₜ=2.
    실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "충분·필요 → 4 ∈ Q, 4 ∈ R → a²=4 / b=4 와 a-1=4 / ab=4 네 조합 → a+b 최댓값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/190-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P의 원소 4 와 Q, R의 원소식(a², b / a-1, ab)을 바꿀 수 있음. 제약: 각 집합의 두 원소가 서로 달라야 하고, 네 조합에서 실수 a, b 가 모두 존재해야 최댓값 비교가 의미를 가짐."
    creative: "(1) a+b 의 최솟값을 묻기(★4, 같은 분기에서 다른 조합 선택) (2) a, b 를 정수로 제한하고 순서쌍 개수를 묻기(★4) (3) P를 두 원소 집합으로 늘리면 분기가 배로 늘어 ★5 후보 (4) 필요·충분 방향을 서로 바꾸면 포함이 반대가 되어 해가 거의 사라지므로 집합 크기를 함께 조정해야 함."
```

```yaml
- id: GN-CM2-190-458
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    p: x²+2ax+1 ≥ 0, q: x²+2bx+9 ≤ 0에 대하여 「모든 실수 x에 대하여 p」와 「p는 ~q이기 위한 충분조건」이 모두 참이 되도록 하는 정수 순서쌍 (a, b)의 개수. 5지선다.
  category: "전칭 명제 → 판별식 → p의 진리집합이 전체집합 → q의 진리집합이 공집합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "첫 문장에서 p의 진리집합이 전체집합이라는 사실을 둘째 문장에 넣으면 ~q도 전체집합이어야 한다는 강한 조건으로 합쳐짐"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "~q가 전체집합 ⟺ q의 진리집합이 공집합 ⟺ 이차부등식 x²+2bx+9 ≤ 0 의 해가 없다 ⟺ 판별식이 음수, 로 옮겨야 b 조건이 나옴"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차부등식 조건이 항상 참·충분조건이 되도록 하는 정수 순서쌍의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 문장은 판별식 조건으로 a 의 범위를 준다. 여기서 p의 진리집합이 전체집합임을 알아채면 둘째 문장 p ⟹ ~q 는 ~q 역시 전체집합, 즉 q의 진리집합이 공집합이라는 뜻이 되어 b 도 판별식 조건만 남는다.
    두 문장을 합치는 단계(CON d2)와 공집합 조건을 판별식으로 옮기는 단계(EQV d2) 둘. 경계 등호(첫 조건은 ≤, 둘째는 <)와 정수 개수 세기가 함정이라 Mₜ=2.
    실력 UP 출발 ★4 유지(기출 +1 여지는 있으나 ★5 요건인 통찰 3개·저노출 유형이 없어 올리지 않음).
  tier: star_4
  mechanism_primary: "모든 x에서 p → 판별식 ≤ 0 으로 a 범위 → p의 진리집합이 전체 → ~q도 전체 → q 해 없음 → 판별식 < 0 으로 b 범위 → 정수 개수 곱"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/190-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 상수항(1, 9)을 바꾸면 a, b 의 범위가 각각 √(상수항) 로 따라 움직임. 제약: 두 상수항이 완전제곱수라야 정수 개수가 깔끔하게 떨어지고, 첫 조건은 등호를 포함(≥ 0)하고 둘째는 포함하지 않아(해 없음) 개수가 달라지는 점을 유지할 것."
    creative: "(1) 둘째 조건을 「p는 q이기 위한 필요조건」으로 바꾸면 방향이 달라져 q의 해가 존재해도 되므로 ★4~5 (2) 순서쌍 대신 a+b 의 최댓값을 묻기(★4) (3) 첫 문장을 「어떤 실수 x에 대하여 p」로 바꾸면 전칭·존재 구분이 추가돼 ★4."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 0 · ★2 15 · ★3 5 · ★4 4 · ★5 0
- 통찰형 19 · 절차형 5 · premium 0
- 통찰 유형 분포(라벨 27개): I-EQV 12 · I-MI 6 · I-CON 4 · I-BW 2 · I-RT 2 · I-VF 1 (I-XU · I-PD · I-SYM · I-SC 0)
- depth 분포: d1 12 · d2 15 · d3 0 — 이 단원은 한 단계짜리 동치 변환이 반복되고 d3 급 통찰은 없다.
- type_hint 상위 5: 「조건이 충분·필요조건이 되도록 하는 상수의 값·범위·최대최소」 11 · 「함의 사슬 연결·추가로 필요한 명제 찾기」 5 · 「진리집합·벤다이어그램의 포함 관계에서 조건 관계 판정」 4 · 「두 조건의 충분·필요·필요충분 판정·고르기」 3 · 「명제가 참이 되도록 하는 상수의 개수(대우)」 1
- 그림: 1문(`crop:fig-188-448.png` · U 안의 P, Q, R 벤다이어그램)
- 구역별 ★: 필수·발전 예제 9문 모두 ★2 · STEP 1 7문 중 ★2 6 · ★3 1(교육청 기출) · STEP 2 4문 모두 ★3 · 실력 UP 4문 모두 ★4 — 벤더 구역 순서와 ★ 순서가 한 번도 역전되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-186-440 | ㄷ 보기만 여집합 2단 연결(I-CON d2)이라 체감은 ★3 이지만 +1 요건(통찰 2개 이상 또는 depth 3)에 미달해 확인체크 출발점 ★2 유지 | ★2 / ★3 |
| GN-CM2-190-455 | 통찰 3개 + I-VF 보유로 ★5 자격 요건은 충족하나 근의 위치 조건이 표준 도구이고 novelty_score 0(§2.14 게이트)이라 ★4 로 둠 | ★4 / ★5 |
| GN-CM2-190-456 | 통찰 3개지만 저노출 유형(SC/VF/SYM/XU) 부재 — ★5 불가 규약에 따라 ★4. 일상 문장 번역이라 체감 난도는 문항 배치보다 높을 수 있음 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 **「충분/필요 → 진리집합 포함 → 상수의 값·범위」**(187-e13 · 187-441 · 187-442 · 187-443 · 189-449 · 189-450 · 189-454 · 190-455)다. 카탈로그에서는 이를 조건의 형태에 따라 ⑴ 구간 대 구간(base ★2) ⑵ 방정식 해집합(base ★2) ⑶ 합집합·두 반직선 꼴(base ★3) ⑷ 이차식 계수에 상수가 들어가 근의 위치가 필요한 것(base ★4) 네 유형으로 **따로 세우는 것**이 좋다 — 같은 문장 구조인데 실제 도구와 난도가 확연히 갈린다.
- **「진리집합 기호만으로 주어진 포함·여집합 판정」**(186-e12 · 186-439 · 186-440 · 188-448)은 그림으로 주느냐 식으로 주느냐만 다르고 골조가 같으므로 **한 유형으로 통합**하고 그림 제시를 변형 축으로 두면 된다.
- **「함의 사슬·대우 연결」**(188-445 · 188-447 · 189-452 · 189-453 · 190-456)도 한 유형으로 묶되, 사슬이 닫혀 동치류가 생기는 것(189-453)과 빠진 고리를 역추적하는 것(189-452 · 190-456)은 통찰 유형이 I-CON / I-BW 로 갈리므로 **하위 유형 두 개**로 나누는 것을 권한다.
- 22단원(명제)과 공유되는 골조(대우·삼단논법)가 많아, 카탈로그를 만들 때 23단원 전용 유형은 「진리집합 포함으로 상수 구하기」 계열에 집중하고 명제 논리 계열은 22단원 유형을 참조하도록 두는 편이 중복이 적다.
