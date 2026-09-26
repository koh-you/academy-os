---
name: mechanism-데이터-GN-CM2-22
description: 개념원리 공통수학2 22 명제의 역과 대우(1/1 · 182-e8~183-437) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 22 명제의 역과 대우
  unit_code: CM2-22
  part: "1/1"
  extract_range: "182~183쪽 · 182-e8~183-437"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 22 명제의 역과 대우 (1/1) 정독 데이터 (v1.0)

이 파일은 22단원 7문 전수(182~183쪽 · 182-e8~183-437)를 다룬다. 구역은 「필수·발전 예제」 하나뿐이고(필수 예제 3 · 확인체크 4) 개념원리 익히기·연습문제·특강 구역은 이 단원에 없다. 단원 전체가 **대우는 원명제와 동치**라는 한 정리를 축으로 삼고 거기서 ⑴ 역·대우를 직접 써서 참·거짓 판정 ⑵ 「역과 대우가 모두 참」= 동치 판별 ⑶ 대우가 참이 되도록 하는 상수 구하기 ⑷ 대우로 화살표 방향을 맞춰 삼단논법 사슬 만들기, 네 갈래로 뻗는 배열이다. 그림·서술형 표시는 없고 선택지 문항은 2문(182-434 · 183-437)이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 이 범위는 전부 「필수·발전 예제」 구역이므로 **구역 신호를 우선**해 필수 예제와 그 유제인 확인체크를 모두 ★2 출발점으로 두었다(통번호 「개념원리 익히기」의 ★1 과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했고, 이 단원에서 반복되는 **대우는 원명제와 동치**·**반례 하나로 거짓 판정**은 교과서 정리의 직접 적용으로 보아 그 자체를 통찰로 세지 않았다. 대신 **원명제 그대로는 풀이가 진행되지 않아 대우로 옮겨야 비로소 대입·덧셈·사슬 연결이 가능해지는 단계**만 I-EQV 로 세었고(182-e8·182-435 처럼 정의를 그대로 적는 문항은 절차형), 조건이 문자 기호로만 주어져 Mₐ=3 이고 M_total ≥ 8 인 사슬 문항(183-e10 · 183-437)은 +1 후보로 보았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-182-e8
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 세 명제(x≥1이고 y≥1이면 x+y≥2 · xy≠2이면 x≠1 또는 y≠2 · A∪B=B이면 A⊂B)의
    역과 대우를 각각 말하고 그것의 참·거짓을 판별.
  category: '역·대우 작성(드모르간 부정) → 참·거짓 판별'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제의 역과 대우의 참, 거짓"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p→q 에서 역 q→p, 대우 ~q→~p 를 정의대로 쓰는 문항. 부정을 만들 때 「이고↔또는」 드모르간과
    부등호 경계 뒤집기(≥ → <)가 함정이라 Mₜ=2. 대우는 원명제와 동치라 원명제의 참·거짓을 그대로
    옮기면 끝나고, 역은 반례(⑴ x=0·y=3 · ⑵ x=2·y=1)로 판정한다. 세 소문항 모두 표준 절차라
    통찰 0 · M_total 7 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "p→q 에서 역 q→p·대우 ~q→~p 를 드모르간으로 작성 → 대우는 원명제와 동치로 판정 · 역은 반례 탐색"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 역: $x+y\ge 2$이면 $x\ge 1$이고 $y\ge 1$이다. (거짓), 대우: $x+y<2$이면 $x<1$ 또는 $y<1$이다. (참) ⑵ 역: $x\ne 1$ 또는 $y\ne 2$이면 $xy\ne 2$이다. (거짓), 대우: $x=1$이고 $y=2$이면 $xy=2$이다. (참) ⑶ 역: 두 집합 $A$, $B$에 대하여 $A\subset B$이면 $A\cup B=B$이다. (참), 대우: 두 집합 $A$, $B$에 대하여 $A\not\subset B$이면 $A\cup B\ne B$이다. (참)'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/182-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 경계 1·1·2 를 다른 쌍으로(x≥2이고 y≥3이면 x+y≥5), ⑵ 의 곱 2 와 두 값 1·2 를 다른 정수쌍으로 바꿀 수 있다. 제약: ⑴ 은 역의 반례가 남도록 두 경계의 합이 결론의 우변과 같아야 하고(x≥a, y≥b → x+y≥a+b), ⑵ 는 곱을 다르게 분해할 수 있는 값이라야 역의 반례(x=2·y=1)가 생긴다."
    creative: "(1) 역·대우 대신 「이(부정) 명제」나 「역의 대우」를 쓰게 하기(★2 유지) (2) ⑶ 의 집합 조건을 A∩B=A · A−B=∅ 같은 다른 동치 표현으로 바꾸면 집합 성질 확인이 한 단계 늘어 ★3 (3) 역·대우의 참·거짓만 주고 원명제를 되묻는 역방향 발문(I-BW 추가 · ★3)."
```

```yaml
- id: GN-CM2-182-434
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다섯 명제(x³=x이면 x=0 또는 x=1 · xy>1이면 x>1이고 y>1 · |x|+|y|=0이면 x=0이고 y=0 ·
    xy<0이면 x²+y²>0 · 합동이면 둘레가 같다) 중 역과 대우가 모두 참인 것 고르기. 5지선다.
  category: '대우=원명제 동치 → 원명제·역만 판정해 동치인 선지 고르기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「역과 대우가 모두 참」을 「p와 q가 동치」로 옮겨, 선지마다 대우를 따로 쓰지 않고 원명제·역 두 방향만 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역과 대우의 참·거짓 판별(선다형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대우는 원명제와 동치이므로 조건은 「원명제와 역이 모두 참」, 곧 두 조건의 진리집합이 같은 선지를
    찾는 것으로 줄어든다(EQV d1). ① 은 원명제가 거짓(x=−1), ② 도 원명제가 거짓(x=y=−2),
    ④·⑤ 는 역이 거짓이고, ③ 만 |x|+|y|=0 ⟺ x=y=0 으로 양방향이 성립한다.
    통찰 1(d1) · M_total 7 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "대우 참 ⟺ 원명제 참 → 「원명제와 역이 모두 참」인 선지 = p와 q의 진리집합이 같은 선지 고르기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/182-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선지의 식과 경계 수(x³=x · xy>1 · |x|+|y|=0 · xy<0)를 바꿀 수 있다. 제약: 정답 선지는 두 조건의 진리집합이 완전히 같아야 하고(동치), 나머지 네 선지는 한쪽 방향에만 반례가 있어야 역·대우 구분이 실제로 변별된다. 절댓값·제곱합처럼 0 에서만 성립하는 식이 동치 선지를 만드는 표준 재료다."
    creative: "(1) 「역이 참인 것」만 묻기(동치 치환 착안이 빠져 ★1~2) (2) 「역과 대우가 모두 참인 것의 개수」로 바꿔 다섯 선지를 전수 판정시키기(골조 유지 · 노동량만 상승 · ★2) (3) 선지에 집합·도형 조건(A⊂B · 합동)을 섞어 동치 판정의 근거가 단원을 넘게 하면 ★3."
```

```yaml
- id: GN-CM2-182-435
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    자연수 x, y 에 대한 보기 ㄱ~ㄷ(x 또는 y가 홀수이면 xy는 홀수 · x, y가 짝수이면 x+y는 짝수 ·
    x−3=0이면 x²−4x+3=0) 중 역이 거짓인 명제만 모두 고르기.
  category: '각 명제의 역 작성 → 반례 하나로 거짓 판정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역의 참·거짓과 반례 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 역 q→p 를 쓰고 반례를 하나 찾으면 끝나는 표준 절차. ㄱ 의 역(xy가 홀수이면 x 또는 y가
    홀수)은 참이고, ㄴ 은 x=1·y=3, ㄷ 은 x=1 이 반례다. 「또는」이 든 ㄱ 에서 역의 방향을 혼동하는
    것이 유일한 함정이라 Mₜ=1. 통찰 0 이지만 M_total 6 으로 −1 조건(M_total ≤ 5)에 못 미쳐
    구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "보기마다 역 q→p 작성 → 반례 하나로 거짓 판정(ㄴ: 1+3 · ㄷ: x=1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/182-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄷ 의 이차식 x²−4x+3 과 근 3 을 다른 인수분해되는 이차식으로, ㄱ·ㄴ 의 홀짝 조건을 배수 조건(3의 배수 등)으로 바꿀 수 있다. 제약: ㄷ 은 역이 거짓이 되도록 두 근이 서로 달라야 하고(중근이면 역도 참이 되어 답이 바뀐다), 홀짝·배수 보기는 자연수 범위 안에 반례가 있어야 한다."
    creative: "(1) 「역이 참인 것」으로 뒤집으면 반례 탐색이 증명 부담으로 바뀌어 ★3 (2) 보기에 대우를 섞어 역·대우를 동시에 묻기(★3) (3) 보기를 넷으로 늘리고 하나를 「역과 대우가 모두 참」으로 두면 동치 판정이 추가돼 ★3."
```

```yaml
- id: GN-CM2-183-e9
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 실수 x, y 에 대하여 명제 「x+y>3이면 x>a 또는 y>1이다.」가 참일 때 실수 a 의 최댓값.
  category: '대우 전환 → 「이고」 가정에서 x+y 의 최댓값 비교 → a 의 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결론이 「또는」이라 원명제 그대로는 다룰 수 없고, 대우 「x≤a이고 y≤1이면 x+y≤3」으로 옮겨야 두 부등식을 더할 수 있다"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "모든 x, y 에서 성립할 조건을 x+y 의 최댓값 a+1 이 3 이하라는 부등식으로 역추적해 a 의 범위를 얻는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "명제의 대우가 참이 되도록 하는 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    결론이 「또는」인 원명제는 진리집합을 직접 비교하기 어렵다. 대우로 옮기면 가정이 「x≤a이고 y≤1」로
    바뀌어 두 부등식을 더한 x+y≤a+1 을 얻고, 이것이 언제나 x+y≤3 이려면 a+1≤3 이면 된다.
    대우 전환(EQV d2)과 최댓값 역추적(BW d1) 두 단계 · M_total 7 → 필수 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "대우 「x≤a이고 y≤1 → x+y≤3」 → 두 부등식을 더해 x+y≤a+1 → a+1≤3 → a 의 최댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/183-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "임계값 3 과 1 을 다른 실수쌍으로 바꿀 수 있다(x+y>k이면 x>a 또는 y>b). 제약: 대우에서 두 부등식을 더한 x+y≤a+b 가 결론 x+y≤k 를 덮어야 하므로 답은 언제나 a=k−b 이고, 원명제와 대우에서 부등호의 경계 포함 여부가 뒤집히므로 최댓값이 실제로 달성되는지(등호 성립) 확인해야 한다."
    creative: "(1) 최댓값 대신 「a 의 값의 범위」나 「조건을 만족시키는 정수 a 의 개수」를 묻기(★3 유지) (2) 결론을 「x>a이고 y>1」로 바꾸면 대우의 가정이 「또는」이 되어 케이스 분기가 생기고 ★4 (3) 변수를 x+y+z 로 늘리면 Mₛ만 오르고 골조는 그대로(★3) (4) 대우 대신 진리집합 포함관계로 풀게 유도하면 I-RT 가 추가돼 ★4."
```

```yaml
- id: GN-CM2-183-e10
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 조건 p, q, r 에 대하여 두 명제 p→q, ~r→~q 가 모두 참일 때
    보기 ㄱ~ㅁ(p→r · ~r→~p · ~p→~r · ~q→~p · q→~r) 중 항상 참인 것만 모두 고르기.
  category: '대우로 화살표 방향 맞추기 → 삼단논법 사슬 → 보기별 방향 대조'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "~r→~q 는 그대로는 p→q 와 이어지지 않아 대우 q→r 로 바꿔야 p→q→r 한 줄 사슬이 생긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼단논법과 대우로 항상 참인 명제 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 두 명제를 대우로 정리해 p→q→r 사슬을 만들면 ㄱ(p→r)은 삼단논법이고 ㄴ(~r→~p)·ㄹ(~q→~p)은
    각각 p→r·p→q 의 대우라 참이다. ㄷ(~p→~r)은 r→p 의 대우라 사슬과 방향이 반대이고, ㅁ(q→~r)은
    q→r 과 어긋나 둘 다 보장되지 않는다. 조건이 문자 기호로만 주어져 Mₐ=3 · M_total 8 이고
    사슬 전환(EQV d2)이 풀이를 여닫는다 → 필수 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "~r→~q 를 대우 q→r 로 바꿔 p→q→r 사슬 구성 → 보기마다 사슬 또는 그 대우와 방향 대조"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ, ㄹ"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/183-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 자체는 없고 조건의 개수와 각 명제에 붙는 부정의 위치가 변형 변수다. 제약: 주어진 두 명제가 대우 한 번으로 한 줄 사슬(p→q→r)을 이루어야 하고, 보기에는 사슬·대우로 참인 것과 방향이 뒤집혀 판정 불가한 것이 함께 있어야 한다."
    creative: "(1) 보기 수를 줄이고 「항상 참이라 할 수 없는 것」으로 뒤집기(★2~3) (2) 조건에 구체적 부등식·집합(p: x>1 등)을 붙여 진리집합 포함관계로 확인하게 하면 I-RT 가 추가돼 ★4 (3) 두 명제 중 하나를 이미 ~q→~p 꼴로 주면 전환 통찰이 사라져 ★2 (4) 조건을 네 개로 늘려 사슬을 두 갈래로 만들면 183-437 골조가 된다(★3)."
```

```yaml
- id: GN-CM2-183-436
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    명제 「x²−ax+7≠0이면 x−1≠0이다.」가 참일 때 상수 a 의 값.
  category: '양쪽이 ≠ 인 명제 → 대우로 전환 → x=1 대입'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가정·결론이 모두 「≠」라 대입할 값이 없고, 대우 「x=1이면 x²−ax+7=0」으로 옮겨야 x=1 을 넣을 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대우가 참임을 이용해 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원명제는 양쪽이 모두 부정형이라 손댈 곳이 없다. 대우로 옮기면 가정이 x=1 로 확정되어
    1−a+7=0 한 줄로 끝난다. 대우 전환이 유일한 착안(EQV d2)이고 그 뒤는 일차식 정리뿐이라
    Mₖ=1 · M_total 7 → 구역 출발점 ★2 유지(+1 근거인 통찰 2개·depth 3 에 못 미침).
  tier: star_2
  mechanism_primary: "대우 「x=1이면 x²−ax+7=0」 → x=1 대입 → 1−a+7=0 에서 a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/183-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 7 과 결론의 근 1 을 바꿀 수 있다(x−c≠0 · x²−ax+k≠0). 제약: 대우의 가정 x=c 를 대입한 c²−ac+k=0 이 a 에 대해 일차식으로 풀려야 하므로 c≠0 이어야 하고, a 가 정수로 떨어지려면 c 가 c²+k 의 약수여야 한다."
    creative: "(1) 부정을 뗀 「x²−ax+7=0이면 x−1=0이다.」로 주면 중근 조건이 붙어 판별식까지 필요해 ★3 (2) 결론을 「x≠1이고 x≠2」로 늘리면 대우의 가정이 두 값이 되어 연립이 생기고 ★3 (3) 상수를 a, b 둘로 두고 조건 명제를 둘 주면 연립 ★3 (4) a 의 값 대신 「a 의 값의 범위」를 묻는 부등식 꼴로 바꾸면 I-BW 추가 ★3."
```

```yaml
- id: GN-CM2-183-437
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 조건 p, q, r, s 에 대하여 세 명제 p→q, ~q→~r, s→~q 가 모두 참일 때
    다섯 명제 중 항상 참이라고 할 수 없는 것 고르기. 5지선다.
  category: '세 명제를 대우로 정리 → 두 갈래 사슬 → 사슬에 없는 방향을 요구하는 선지 기각'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "~q→~r 와 s→~q 를 각각 대우 r→q, q→~s 로 바꿔야 p→q→~s · r→q→~s 두 갈래 사슬로 모인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼단논법과 대우로 항상 참인 명제 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대우로 정리하면 p→q→~s 와 r→q→~s 두 갈래가 나온다. ① 은 p→q 의 대우, ②·④ 는 각 갈래의
    삼단논법, ⑤ 는 ② 의 대우라 모두 참이고, ③ p→r 만 r→q 를 거꾸로 읽어야 해서 보장되지 않는다.
    화살표 방향 역전이 핵심 함정이며 조건이 기호뿐이라 Mₐ=3 · M_total 8 → 구역 출발점 ★2 에서 +1 → ★3.
    [분류 이슈] tag 는 「확인체크」이지만 183-e10(필수 예제)보다 조건이 하나 많고 대우 전환이 두 번이다.
  tier: star_3
  mechanism_primary: "세 명제를 대우로 정리해 p→q→~s · r→q→~s 두 갈래 사슬 구성 → 사슬에 없는 방향(q→r)을 요구하는 선지 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/183-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 대신 명제의 개수(3개)와 각 명제에 붙는 부정의 위치가 변형 변수다. 제약: 대우로 정리한 뒤 사슬이 두 갈래로 모여야 하고, 오답 선지는 정확히 하나만 사슬에 없는 방향(q→r)을 요구해야 한다 — 둘 이상이면 「할 수 없는 것」 단수 발문과 어긋난다."
    creative: "(1) 「항상 참인 것을 모두 고르는」 보기형으로 바꾸기(★3 유지) (2) 조건을 다섯 개로 늘려 사슬이 세 갈래가 되면 Mₛ 상승 ★4 (3) 각 조건에 진리집합을 주고 벤다이어그램 포함관계로 판정하게 하면 I-RT 추가 ★4 (4) 세 명제 중 하나를 거짓으로 바꿔 모순을 찾게 하면 I-VF 가 붙어 ★4."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 0 · ★2 4 · ★3 3 · ★4 0 · ★5 0
- 통찰형 5 · 절차형 2 · premium 0
- 구역: 「필수·발전 예제」 7문(필수 예제 3 · 확인체크 4) — 개념원리 익히기·연습문제·특강 없음
- 통찰 유형 분포: I-EQV 5(d1 1 · d2 4) · I-BW 1 — 전부 **대우로 옮겨야 풀이가 시작된다**는 한 갈래
- type_hint 상위: 「삼단논법과 대우로 항상 참인 명제 찾기」 2 · 「명제의 역과 대우의 참, 거짓」 1 · 「역과 대우의 참·거짓 판별(선다형)」 1 · 「역의 참·거짓과 반례 찾기」 1 · 「명제의 대우가 참이 되도록 하는 상수 구하기」 1 · 「대우가 참임을 이용해 상수 구하기」 1
- 그림 0문 · 선택지 문항 2문(182-434 · 183-437) · 소문항 문항 1문(182-e8)
- 답 출처: 답지 4 · 본문 풀이 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-183-437 | tag 는 「확인체크」지만 조건 4개·대우 전환 2회·두 갈래 사슬로 필수 예제 183-e10 보다 무겁다. 구역(필수·발전 예제) 신호를 우선해 ★2 출발 후 +1 → ★3 으로 두었으나, 통번호 「개념원리 익히기」 기준(★1)으로 보면 2단 차이 | ★2 / ★3 |
| GN-CM2-182-434 | 「역과 대우가 모두 참 ⟺ 두 조건이 동치」를 통찰(I-EQV d1)로 셀지, 교과서 정리의 직접 적용으로 보아 절차형으로 둘지 갈린다. 통찰을 빼면 절차형 ★2(라벨은 그대로) | ★2 |
| GN-CM2-182-435 | 통찰 0 · M_total 6 으로 −1 조건(M_total ≤ 5)에 한 칸 못 미쳐 ★2 로 남았다. 보기 3개 각각 반례 하나면 끝나 체감은 ★1 에 가깝다 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 **「삼단논법과 대우로 항상 참인 명제 찾기」 2문**(183-e10 · 183-437)뿐이다. 두 문항은 골조가 같고(대우로 화살표 방향을 맞춰 사슬 구성 → 보기·선지 방향 대조) 조건 수와 사슬 갈래 수만 다르므로 **하나의 유형으로 통합**하고 base ★ 3, 조건 5개 이상·사슬 3갈래를 ★4 변별 슬롯으로 두면 된다.
- **따로 세워야 할 유형**: ⑴ 「역·대우를 직접 서술하고 참·거짓 판별」(182-e8 · 182-435 · 182-434) — 산출물이 *문장*이라 채점 방식이 다르고 통찰이 붙지 않는 절차형 축, base ★ 2. ⑵ 「대우가 참이 되도록 하는 상수」(183-e9 · 183-436) — 대우 전환 뒤 *대입*으로 끝나는 것(436)과 *부등식 범위 역추적*까지 가는 것(e9)이 한 단계 차이라 base ★ 2 와 ★ 3 두 슬롯으로 나누는 편이 낫다.
- **통합해도 될 유형**: 182-434(선다형 동치 판별)와 182-435(보기형 역 판별)는 출제 형식만 다르고 판정 도구가 같으므로 한 유형의 형식 변형으로 묶어도 된다.
- 단원 전체가 I-EQV 한 유형에 몰려 있어 §2.9 감쇠 대상(단원별 학습 자산화 상위 3유형) 후보다. 카탈로그 작성 시 이 단원의 I-EQV d2 는 **P1~P6 signal_ref 가 없으면 d1 로 감쇠**하는 규칙을 검토할 것.
