---
name: mechanism-데이터-GN-CM2-07-p2
description: 개념원리 공통수학2 07 원의 방정식(2/3 · 필수·발전 예제 69-e1~75-e9) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 07 원의 방정식
  unit_code: CM2-07
  part: "2/3"
  extract_range: "69~75쪽 · 69-e1~75-e9"
  total_problems: 23
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 07 원의 방정식 (2/3) 정독 데이터 (v1.0)

이 파일은 07단원 45문 중 가운데 23문(69~75쪽)을 다룬다. 전사본 기준 구역은 하나(「필수·발전 예제」)이고, 그 안에 상자 발문인 **필수 예제 9개**(id 「쪽-eN」 · tag 「필수」)와 각 예제 바로 뒤의 **확인 체크 통번호 14개**(tag 「확인체크」)가 짝을 이뤄 번갈아 실린다. 그림·선택지·기출 태그는 한 문항도 없고 vendor_level 은 전 문항 "-" 다. 내용은 원의 방정식의 표준형 결정(중심과 한 점 / 지름의 양 끝 점 / 중심이 직선 위 / 세 점) → 일반형과 원이 될 조건 → 좌표축에 접하는 원 → 원 밖의 점과의 거리 최대·최소로, 단원의 계산 골조가 한 번씩 나오는 배열이다.

벤더 신호와 ★ 출발점: 이 구역은 「필수·발전 예제」이므로 출발점이 ★2 이고, 확인 체크는 바로 앞 예제와 같은 유형의 쌍둥이 문항이라 같은 ★2 에서 출발시킨 뒤 M_total·통찰로 ±1 했다(개념원리 익히기 통번호의 ★1 출발과 구분). 실제로 도입부 세 문항(69-e1 · 69-e2 · 69-154)은 공식 한 줄 대입이라 M_total 4 · 통찰 0 으로 ★1 까지 내렸고, 문자 계수·분기·연립이 붙는 71-159 · 73-e7 · 73-163 · 74-e8 · 74-164 · 75-e9 는 ★3 으로 올렸다. 벤더 신호와 2단 이상 어긋난 문항은 없다.

통찰 카운트 기준(이 단원에서 반복되는 두 변환을 일관되게 처리하기 위해 미리 정한다): 「방정식이 원을 나타낸다 ⇔ (반지름)²>0」과 「좌표축에 접한다 ⇔ 반지름 = |중심의 해당 좌표|」는 개념원리가 KEY Point 로 제시한 공식이므로, 중심·반지름이 수로 바로 읽히는 **직접 대입형에서는 절차**로 본다. 같은 변환이라도 중심·반지름이 문자로 남아 부등식·연립이 되거나 사분면·두 원 같은 **분기를 학생이 스스로 확정해야 하면** 통찰(I-EQV · I-CON)로 셌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-69-e1
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    중심이 (-4, 3)이고 점 (1, 6)을 지나는 원의 방정식 구하기.
  category: "중심과 한 점 사이의 거리 → 반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심과 한 점이 주어진 원의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 (x-a)²+(y-b)²=r² 에서 중심은 주어지고 r² 만 두 점 사이의 거리로 구하면 끝난다.
    5²+3²=34 한 줄. 통찰 0 · M_total 4 → 필수 예제 출발점 ★2 에서 −1 하여 ★1.
    단원 도입의 정의 확인 문항이라 함정도 없다.
  tier: star_1
  mechanism_primary: "중심 (-4,3)과 점 (1,6)의 거리² → r²=34 → (x+4)²+(y-3)²=34"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x+4)^2+(y-3)^2=34$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/69-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심과 지나는 점의 좌표를 자유롭게 바꿀 수 있음. 제약: r² 이 정수로 떨어지게 두 점의 좌표차를 정수로 두고, 답을 r 까지 묻는다면 34 같은 비제곱수 대신 25·100 처럼 완전제곱수가 되도록 좌표차를 3-4-5 조합으로 잡는다."
    creative: "(1) 지나는 점 대신 「점 (1,6)까지의 거리가 최소인 원 위의 점」을 물으면 75-e9 골조로 넘어감(★3) (2) 중심을 (a, a-1) 처럼 문자로 두고 반지름을 주면 미지수 결정이 붙어 ★2 (3) 중심을 주지 않고 「두 점을 지나고 반지름이 √34」로 바꾸면 연립이 생겨 ★3."
```

```yaml
- id: GN-CM2-69-e2
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 A(0, 3), B(4, 1)을 지름의 양 끝 점으로 하는 원의 방정식 구하기.
  category: "지름의 양 끝 점 → 중점이 중심 · 거리의 절반이 반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지름의 양 끝 점이 주어진 원의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중점 (2,2)가 중심, 반지름은 AB 의 절반. r² 은 중심에서 A 까지의 거리²=4+1=5 로 바로 얻는다.
    두 공식(중점·거리)을 한 번씩 쓰는 정의 확인 문항. 통찰 0 · M_total 4 → ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "AB 의 중점 → 중심 (2,2) → 중심과 A 의 거리² → r²=5 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x-2)^2+(y-2)^2=5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/69-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있음. 제약: 중점이 정수 좌표가 되도록 두 점의 각 좌표 합을 짝수로 두고, r² 이 정수가 되게 한다(홀수 합이면 중심이 분수라 답이 지저분해짐 — 70-156 이 그 예)."
    creative: "(1) 원 위의 점 P 에 대해 ∠APB=90° 임을 이용하는 (x-x₁)(x-x₂)+(y-y₁)(y-y₂)=0 꼴로 묻기(같은 골조 · I-RT d1 · ★2) (2) 지름의 한 끝 점과 중심을 주고 다른 끝 점을 묻는 역방향(★2) (3) 지름의 양 끝 점이 좌표축 위에 있게 두고 원이 축에 접하는지 판정을 덧붙이면 73-e7 골조와 결합(★3)."
```

```yaml
- id: GN-CM2-69-153
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    중심이 (1, -2)이고 점 (4, 2)를 지나는 원이 점 (a, 1)을 지날 때 양수 a 의 값.
  category: "반지름 결정 → 원 위의 점 조건 대입 → 이차방정식 → 양수 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점 조건으로 미지수 구하기(중심과 한 점이 주어진 원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    69-e1 의 쌍둥이에 역방향 한 단계가 더 붙는다. r²=9+16=25 를 먼저 얻고 (a-1)²+9=25 →
    (a-1)²=16 → a=5 또는 -3 에서 양수 조건으로 하나를 고른다. 미정계수 직접 대입이라
    I-BW 로는 세지 않았다(스키마 §2.2 판별 기준). 통찰 0 · M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "r²=25 → (a-1)²+(1+2)²=25 → a=5 또는 -3 → 양수 조건으로 a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/69-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·지나는 점·묻는 점의 한 좌표를 바꿀 수 있음. 제약: (a-1)² 이 완전제곱수가 되도록 r² 과 y 좌표차를 3-4-5·5-12-13 조합으로 잡아야 a 가 정수로 떨어진다. 두 근 중 하나만 양수가 되게 중심의 x 좌표를 근의 중앙에 두는 것도 확인한다."
    creative: "(1) 「양수」 조건을 빼고 「모든 a 의 합」을 물으면 근과 계수 관계로 바로 답이 나와 ★2 유지(계산은 짧아짐) (2) 점 (a, 1) 대신 「직선 y=1 과 만나는 두 점 사이의 거리」를 물으면 현의 길이 골조로 ★3 (3) 중심을 (1, b) 로 두고 두 점을 모두 지나게 하면 70-e3 골조(★2)."
```

```yaml
- id: GN-CM2-69-154
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    두 점 A(5, 1), B(-1, 7)을 지름의 양 끝 점으로 하는 원이 (x-a)²+(y-b)²=c 일 때 a+b+c.
  category: "중점·반지름 → 표준형의 계수 읽기 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지름의 양 끝 점이 주어진 원의 방정식(계수 합 묻기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    69-e2 와 같은 골조에 「a, b, c 를 읽어 더하기」만 얹은 형태다. 중심 (2,4) · r²=9+9=18 을
    얻으면 끝이고 계수 대응도 표준형 그대로라 함정이 없다. 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB 의 중점 → 중심 (2,4) → r²=18 → a=2, b=4, c=18 → 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/69-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있음. 제약: 중점이 정수가 되도록 각 좌표의 합을 짝수로, r² 이 정수가 되도록 좌표차를 정수로 잡는다. c 가 지나치게 커지면 합 문항의 검산 부담만 늘어나므로 r² 은 50 이하로 둔다."
    creative: "(1) 「(x-a)²+(y-b)²=c 일 때 abc」처럼 묻는 식만 바꾸기(★1 유지) (2) 일반형 x²+y²+Ax+By+C=0 으로 답하게 하면 71-e4 의 역방향이 되어 ★2 (3) 지름의 양 끝 점 대신 「지름 위의 한 점과 중심」을 주고 나머지 끝 점을 찾게 하면 중점 역산이 붙어 ★2."
```

```yaml
- id: GN-CM2-70-e3
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    중심이 직선 y=3x-5 위에 있고 두 점 (1, 2), (5, -2)를 지나는 원의 방정식 구하기.
  category: "중심을 직선의 매개 표현으로 → 두 점까지 거리 같음 → 중심·반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심이 직선 위에 있는 원의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심을 (a, 3a-5)로 놓아 미지수를 하나로 줄이고, 두 점까지의 거리가 같다는 식을 세워
    a 를 구한 뒤 r² 을 계산한다. 개념원리가 이 유형의 표준 해법으로 제시한 매개 표현이라
    통찰로 세지 않았다. 제곱식 전개가 한 번 들어가 Mk 2 · M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "중심을 (a, 3a-5)로 놓기 → 두 점까지의 거리² 같음 → a 결정 → r²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-1)^2+(y+2)^2=16$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/70-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편과 두 점의 좌표를 바꿀 수 있음. 제약: 거리 같음 식에서 a² 이 소거되므로 a 는 일차방정식으로 결정된다 — a 가 정수가 되도록 두 점의 좌표 합을 조정하고, 중심이 직선 위 정수점이 되게 기울기를 정수로 둔다."
    creative: "(1) 직선을 x축·y축으로 바꾸면 70-155 (★2) (2) 두 점 대신 「두 점을 지나고 반지름이 최소인 원」을 물으면 두 점이 지름이 되는 순간을 찾는 I-BW 가 붙어 ★3 (3) 중심이 직선 위라는 조건을 「두 점의 수직이등분선과의 교점」으로 바꿔 풀게 하면 I-SC(대수 vs 기하 갈래) ★3."
```

```yaml
- id: GN-CM2-70-155
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    중심이 x축 위에 있고 두 점 (4, -3), (2, 3)을 지나는 원의 방정식 구하기.
  category: "중심을 (a, 0)으로 → 두 점까지 거리 같음 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심이 좌표축 위에 있는 원의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    70-e3 에서 직선이 x축(y=0)으로 단순해진 쌍둥이. 중심 (a, 0) → (a-4)²+9=(a-2)²+9 …
    형태의 거리 같음 식에서 a 가 일차로 결정되고 r² 을 한 번 더 계산하면 끝난다.
    전개가 가벼워 Mk 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "중심을 (a,0)으로 놓기 → 두 점까지의 거리² 같음 → a=3 → r²=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-3)^2+y^2=10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/70-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있음. 제약: 중심이 x축 위이므로 두 점의 y 좌표 제곱이 같거나 x 좌표가 충분히 달라야 a 가 정수로 떨어진다. r² 은 소수(10·13)로 두어도 표준형 답에는 문제가 없다."
    creative: "(1) 축을 y축으로 바꾸기(★2 유지) (2) 「중심이 x축 위이고 y축에 접하는 원」으로 바꾸면 접선 조건이 붙어 ★2~3 (3) 두 점 중 하나를 문자 (t, 3) 으로 두고 중심이 원점이 되는 t 를 묻는 역방향이면 I-BW d1 · ★3."
```

```yaml
- id: GN-CM2-70-156
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    중심이 직선 y=x+5 위에 있고 원점과 점 (1, 2)를 지나는 원의 방정식 구하기.
  category: "중심을 (a, a+5)로 → 원점·한 점까지 거리 같음 → 분수 중심·반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심이 직선 위에 있는 원의 방정식(원점을 지나는 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    70-e3 과 같은 골조이고 답의 중심이 (-5/2, 5/2) 로 분수라는 점만 다르다. 원점을 지나므로
    한쪽 거리²이 a²+(a+5)² 로 간단해지지만 전개·약분 부담이 있어 Mk 2 · M_total 6 → ★2.
    분수 중심을 표준형에 다시 넣을 때 부호를 틀리기 쉬운 것이 유일한 함정이다.
  tier: star_2
  mechanism_primary: "중심을 (a, a+5)로 놓기 → 원점·(1,2)까지 거리² 같음 → a=-5/2 → r²=25/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(x+\dfrac{5}{2}\right)^2+\left(y-\dfrac{5}{2}\right)^2=\dfrac{25}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/70-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 절편과 지나는 점을 바꿀 수 있음. 제약: 중심이 분수가 되는 것을 허용할지 먼저 정한다 — 정수 중심을 원하면 두 점의 좌표 제곱합 차가 직선 계수의 배수가 되도록 잡고, 분수 중심을 유지하려면 답을 dfrac 로 쓰는 형식만 맞춘다."
    creative: "(1) 원점을 지난다는 조건을 「일반형의 상수항 C=0」으로 바꿔 72-160 골조로 옮기기(★2) (2) 직선을 y=-x+5 로 바꾸면 중심이 정수가 되어 계산 마찰만 줄어듦(★2 유지) (3) 「중심이 직선 위이고 원점을 지나는 원 중 반지름이 최소인 것」이면 점과 직선 사이의 거리 최소 골조가 붙어 ★3."
```

```yaml
- id: GN-CM2-71-e4
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x²+y²-2x+8y+a=0 의 중심이 (1, b)이고 반지름이 3일 때 a+b (a 는 상수).
  category: "일반형 완전제곱 → 중심·반지름 읽기 → 미지 상수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 x²+y²+Ax+By+C=0 이 나타내는 원의 중심과 반지름"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 각각 완전제곱으로 묶어 (x-1)²+(y+4)²=17-a 를 만들면 b=-4 가 바로 읽히고
    17-a=9 에서 a=8 이 나온다. 일반형 → 표준형 변환의 정의 확인이라 통찰은 없고,
    상수 a 가 발문에 있어 Ma 2 · M_total 6 → 출발점 ★2 유지. 중심의 y 좌표 부호가 함정.
  tier: star_2
  mechanism_primary: "일반형 완전제곱 → (x-1)²+(y+4)²=17-a → b=-4, 17-a=9 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/71-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 의 일차항 계수와 반지름을 바꿀 수 있음. 제약: 일차항 계수는 짝수로 두어 중심이 정수가 되게 하고, (계수/2)² 의 합이 반지름² 보다 커야 a 가 양수 쪽으로 나온다. 반지름은 3·5 처럼 제곱이 정수인 값으로."
    creative: "(1) 반지름 대신 「원의 넓이가 9π」로 주기(★2 유지) (2) a 를 주고 반지름을 묻는 정방향으로 뒤집기(★1~2) (3) 「이 원이 x축에 접할 때 a」로 바꾸면 73-162 골조(★2) (4) 일차항 계수를 문자로 두면 71-159 처럼 중심이 문자로 남아 ★3."
```

```yaml
- id: GN-CM2-71-e5
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    방정식 x²+y²-2x+4y+k+1=0 이 나타내는 도형이 원이 되도록 하는 실수 k 의 값의 범위.
  category: "완전제곱 → (반지름)²>0 → k 의 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 원을 나타낼 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 (x-1)²+(y+2)²=4-k 를 만든 뒤 우변>0 을 풀면 된다. 원이 될 조건이
    개념원리 KEY Point 공식이라 직접 대입형인 이 문항은 절차로 두었다(파일 머리글의 기준).
    함정은 두 가지 — 등호를 포함하면 한 점이 되고(T-경계), 범위 표기 방향(T-범위). Mt 2 ·
    M_total 7 이지만 통찰 0 이라 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → (x-1)²+(y+2)²=4-k → 4-k>0 → k<4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k<4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/71-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항에 붙는 k 의 형태(k+1 · 2k · k²)를 바꿀 수 있음. 제약: 일차항 계수는 짝수로 두어 중심을 정수로 유지하고, k 가 일차로 남아야 답이 단순 부등식이 된다. k² 이 되면 이차부등식이라 난도가 한 단계 올라간다."
    creative: "(1) 「원이 되지 않도록 하는 k」·「한 점을 나타내도록 하는 k」로 뒤집기(★2, T-경계 강조) (2) 「반지름이 2 이하인 원이 되도록」처럼 상한을 덧붙이면 연립부등식 ★3 (3) 상수항을 k+1 대신 문자 계수로 두어 중심까지 k 에 의존하게 하면 71-159 골조(★3)."
```

```yaml
- id: GN-CM2-71-157
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    원 x²+y²+2x-4y-15+k=0 의 반지름이 5일 때 상수 k 의 값.
  category: "완전제곱 → (반지름)² 식 → k 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 원의 반지름 조건으로 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    71-e4 의 쌍둥이. (x+1)²+(y-2)²=20-k 로 묶고 20-k=25 를 풀면 k=-5 다.
    상수항이 -15+k 로 쪼개져 있어 부호를 옮길 때만 주의하면 되고 중심은 묻지 않는다.
    통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 우변 20-k → 20-k=5² → k=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/71-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수)·상수항·반지름을 바꿀 수 있음. 제약: (계수/2)² 의 합에서 상수항을 뺀 값이 반지름² 과 같아야 하므로 k 가 정수로 떨어지게 세 수를 맞춘다. 반지름은 3·5·√10 처럼 제곱이 정수인 값으로."
    creative: "(1) 반지름 대신 「원의 둘레가 10π」로 주기(★2 유지) (2) 「반지름이 5 이하가 되도록 하는 k 의 범위」로 바꾸면 71-e5 와 결합해 ★3 (3) 「이 원이 원점을 지날 때 k」로 바꾸면 대입 한 줄이라 ★1."
```

```yaml
- id: GN-CM2-71-158
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    원 x²+y²-6x+ay+9=0 의 중심이 (b, -3)이고 반지름이 r 일 때 a+b+r (a 는 상수).
  category: "일반형 중심 공식 → a, b 결정 → 반지름 계산 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 원의 중심 조건으로 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심이 (3, -a/2) 이므로 b=3, -a/2=-3 에서 a=6 이 나오고 그 값으로 반지름을 계산한다.
    y 일차항 계수가 문자라 중심 공식을 문자 그대로 쓰는 단계가 하나 더 있지만 분기는 없다.
    통찰 0 · M_total 6 → ★2. 함정은 중심 y 좌표의 부호(-a/2)뿐이다.
  tier: star_2
  mechanism_primary: "중심 (3, -a/2)=(b,-3) → a=6, b=3 → 완전제곱으로 r=3 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/71-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 일차항 계수와 상수항, 중심의 y 좌표를 바꿀 수 있음. 제약: 문자 계수 a 는 짝수 해가 되도록 중심 좌표를 정수로 두고, (계수/2)² 합에서 상수항을 뺀 값이 완전제곱수가 되어야 r 가 정수로 나와 a+b+r 가 깔끔하다."
    creative: "(1) 묻는 식을 abr 로 바꾸기(★2 유지) (2) 중심을 주지 않고 「중심이 직선 y=x-6 위에 있을 때 a」로 바꾸면 조건 결합이 붙어 ★3 (3) 상수항까지 문자로 두고 「원이 되도록 하는 범위」를 얹으면 71-e5 와 결합 ★3."
```

```yaml
- id: GN-CM2-71-159
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    방정식 x²+y²-2(a+1)x+2ay+3a²-2=0 이 나타내는 도형이 원이 되도록 하는 정수 a 의 개수.
  category: "문자 계수 완전제곱 → (반지름)²>0 이차부등식 → 정수 해 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중심·반지름이 모두 a 에 의존하므로 「원이 된다」를 상수 부등식이 아니라 a 에 대한 이차부등식 -a²+2a+3>0 으로 옮겨야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "문자 계수 방정식이 원이 될 조건과 정수 해의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심이 (a+1, -a) 로 문자에 의존해 (반지름)²=(a+1)²+a²-(3a²-2) 를 정리하면 a² 이 살아남아
    이차부등식 a²-2a-3<0, 즉 -1<a<3 이 된다. 여기서 끝나지 않고 개구간의 정수만 세는 마지막
    단계가 붙는다(끝점 -1, 3 제외 — T-경계). 71-e5 의 직접 대입형과 달리 조건을 학생이
    이차부등식으로 옮겨야 해 I-EQV d2 · M_total 8 → 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "문자 계수 완전제곱 → (반지름)²=-a²+2a+3>0 → -1<a<3 → 정수 0,1,2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/71-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항의 문자 계수 조합과 상수항의 a² 계수를 바꿀 수 있음. 제약: 상수항의 a² 계수가 중심 좌표 제곱합의 a² 계수보다 커야 이차부등식이 위로 볼록 아래 구간(유한 구간)이 되어 정수 개수가 유한하다. 근이 정수가 되게 판별식을 완전제곱수로 맞추면 개구간 정수 세기가 깔끔하다."
    creative: "(1) 「정수 a 의 개수」를 「자연수 a 의 개수」·「a 의 최댓값」으로 바꾸기(★3 유지) (2) 「반지름이 최대가 되는 a 와 그때의 반지름」을 물으면 이차함수 최대 골조가 붙어 ★3~4 (3) 부등식이 유한 구간이 되지 않게 계수를 잡으면 「모든 실수 a」가 답이 되어 조건 판정 자체가 논점이 됨(★3 · I-MI 추가)."
```

```yaml
- id: GN-CM2-72-e6
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 점 (0, 0), (2, 2), (-2, 6)을 지나는 원의 방정식 구하기.
  category: "일반형으로 놓기 → 세 점 대입 연립 → 표준형으로 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 원의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형이 아니라 일반형 x²+y²+Ax+By+C=0 으로 놓는 것이 이 유형의 표준 해법이다.
    원점을 지나 C=0 이 먼저 정해지고 나머지 두 점으로 A, B 연립을 풀면 된다. 마지막에
    완전제곱으로 표준형까지 되돌리는 단계가 하나 더 붙는다. 연립 전개로 Mk 2 · M_total 6,
    통찰 0 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "일반형으로 놓기 → 원점에서 C=0 → 두 점으로 A, B 연립 → 완전제곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x+1)^2+(y-3)^2=10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/72-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: 세 점이 한 직선 위에 있으면 원이 없으므로 기울기가 다르게 잡는다. A, B 가 정수(가능하면 짝수)로 떨어져야 중심이 정수가 되므로 원점을 포함시켜 C=0 으로 두는 배치가 가장 안전하다."
    creative: "(1) 원점을 빼고 일반 세 점으로 두면 3원 연립이 되어 계산만 무거워짐(★2 유지 · 질은 떨어짐) (2) 「삼각형 ABC 의 외접원」으로 말만 바꾸면 기하 문맥 추가(★2) (3) 두 점만 주고 「반지름이 √10」을 덧붙이면 중심이 두 개 나와 ★3 (4) 세 점 중 하나를 문자로 두고 원이 x축에 접하게 하면 73-e7 과 결합 ★4."
```

```yaml
- id: GN-CM2-72-160
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    원점과 두 점 (-1, 2), (3, -1)을 지나는 원의 방정식 구하기.
  category: "일반형으로 놓기 → 원점에서 C=0 → 두 점 연립 → 표준형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 원의 방정식(원점 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-e6 의 쌍둥이로 골조가 같고 A, B 가 홀수로 나와 중심·반지름이 분수가 되는 점만 다르다.
    분수 중심을 표준형으로 되돌리는 마지막 정리가 계산 부담의 전부다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "일반형 → C=0 → 두 점 대입 연립으로 A=B=-5 → 완전제곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(x-\dfrac{5}{2}\right)^2+\left(y-\dfrac{5}{2}\right)^2=\dfrac{25}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/72-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있음. 제약: 정수 중심을 원하면 A, B 가 짝수로 나오도록 두 점의 좌표 제곱합을 맞춘다. 이 문항처럼 분수 중심을 유지할 거면 답 표기를 dfrac 로 통일한다(70-156 과 같은 답 형태)."
    creative: "(1) 「이 원의 넓이」·「중심의 좌표」만 묻게 바꾸면 표준형 복원이 빠져 ★2 이하 (2) 원점 대신 x축 위의 점을 주면 C 가 남아 3원 연립(★2, 계산만 증가) (3) 「세 점을 지나는 원이 존재하지 않도록 하는 좌표」를 묻는 역방향이면 세 점의 공선 조건이 논점이 되어 I-BW d2 · ★3."
```

```yaml
- id: GN-CM2-72-161
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    세 점 A(-3, 4), B(1, 0), C(3, 4)를 지나는 원의 넓이.
  category: "세 점을 지나는 원 → 중심·반지름 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 원의 반지름·넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-e6 골조에 마지막 넓이 πr² 한 줄이 붙는다. 표준 해법인 일반형 3점 대입으로 풀면
    통찰 없이 연립만 남으므로 절차형 ★2 로 두었다.
    [분류 이슈] A(-3,4)와 C(3,4)가 y축 대칭이라 중심이 x=0 위에 있음을 먼저 보면 미지수가
    하나로 줄어 풀이가 절반이 된다(I-SYM d1 후보). 표준 해법에는 없는 선택적 단축이라
    절차형으로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "세 점 대입 연립(또는 AC 의 y축 대칭으로 중심 x=0) → 중심 (0,3), r²=10 → 넓이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/72-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: 대칭 단축을 살리려면 두 점의 y 좌표를 같게(x 좌표는 부호만 다르게) 두고, r² 이 정수가 되게 나머지 한 점을 잡는다. 대칭을 없애려면 세 점의 x 좌표를 모두 다르게 둔다 — 그러면 단축이 사라지고 연립 계산만 남는다."
    creative: "(1) 「삼각형 ABC 의 외접원의 넓이」로 문맥 바꾸기(★2 유지) (2) 대칭축을 y축이 아니라 직선 y=x 로 두면 대칭 인식이 어려워져 ★3 (3) 「넓이」 대신 「원 위를 움직이는 점 P 에 대하여 삼각형 ABP 의 넓이의 최댓값」을 물으면 거리 최대 골조(75-e9)와 결합 ★4."
```

```yaml
- id: GN-CM2-73-e7
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 원 x²+y²-10x+4y+20=0 과 중심이 같고 x축에 접하는 원, ⑵ 두 점 (1, 0), (2, -1)을
    지나고 y축에 접하는 원의 방정식 구하기.
  category: "축에 접함 ⇔ 반지름 = |중심의 해당 좌표| → 중심 결정 → 표준형"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵에서 중심이 미지인 채로 「y축에 접한다」를 r=|중심의 x좌표| 로 옮겨 두 점 조건과 함께 연립해야 한다 — 접선 조건을 반지름 식으로 바꾸는 변환이 풀이의 출발점"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축 또는 y축에 접하는 원의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 일반형에서 중심 (5,-2)를 읽고 x축 접이므로 r=|-2|=2 로 끝나는 직접 대입형이다.
    ⑵는 중심을 (a,b) 로 두고 r=|a| 를 세운 뒤 두 점 조건과 연립해 b²=2a-1, a=b+2 를 거쳐
    b 의 이차방정식으로 가고 두 원이 모두 답이 된다. 소문항 두 개의 난도 차가 크고
    ⑵에서 해가 둘이라는 점(T-범위)·절댓값 부호(T-부호)가 함정. I-EQV d2 · M_total 8 →
    출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "⑴ 중심 읽기 → r=|중심의 y좌표| / ⑵ 중심 (a,b)·r=|a| → 두 점 대입 연립 → 두 원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x-5)^2+(y+2)^2=4$ ⑵ $(x-1)^2+(y+1)^2=1$, $(x-5)^2+(y-3)^2=25$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/73-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 일반형의 계수(짝수 일차항)와 접하는 축, ⑵ 두 점의 좌표를 바꿀 수 있음. 제약: ⑵는 연립 뒤 이차방정식의 판별식이 양수여야 원이 두 개 나오고, 근이 정수가 되게 두 점을 잡아야 답이 깔끔하다. 접하는 축을 바꾸면 절댓값 안의 좌표도 함께 바뀐다."
    creative: "(1) ⑵에서 두 점 대신 「한 점을 지나고 반지름이 주어진」으로 바꾸면 원이 하나로 줄어 ★2 (2) 「x축에 접하고 y축과 만나는 현의 길이가 4」처럼 축과의 현 조건을 얹으면 ★4 (3) 두 축 중 어디에 접하는지를 주지 않고 「어느 한 축에 접한다」로 두면 갈래가 둘로 늘어 I-MI d2 · ★4."
```

```yaml
- id: GN-CM2-73-162
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    원 x²+y²-8x+10y+k=0 이 x축에 접할 때 상수 k 의 값.
  category: "일반형 중심·반지름 → x축 접 조건 대입 → k 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축에 접하는 조건으로 일반형의 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (4,-5)가 수로 바로 읽히므로 x축 접 조건이 r=|-5|=5 한 줄로 확정되고 41-k=25 에서
    k=16 이 나온다. 접선 조건을 쓰긴 하지만 중심이 미지가 아니어서 직접 대입형이다
    (파일 머리글의 통찰 카운트 기준). 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심 (4,-5), r²=41-k → r=|-5| → 41-k=25 → k=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/73-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수)와 접하는 축을 바꿀 수 있음. 제약: 접하는 축의 반대 좌표 제곱이 (계수/2)² 합보다 작아야 k 가 실수로 나오고, k 가 정수로 떨어지도록 계수를 정수로 둔다. y축 접으로 바꾸면 절댓값 안이 x 좌표로 바뀐다."
    creative: "(1) 「x축에 접하고 y축과 두 점에서 만날 때 k 의 범위」로 바꾸면 부등식이 붙어 ★3 (2) 「두 축에 동시에 접할 때」로 바꾸면 계수 두 개가 얽혀 74-165 골조(★2~3) (3) k 대신 일차항 계수를 문자로 두면 중심이 문자가 되어 ★3."
```

```yaml
- id: GN-CM2-73-163
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    중심이 직선 y=x+2 위에 있고 y축에 접하는 원 중 점 (4, 4)를 지나는 두 원의
    반지름의 길이의 합.
  category: "세 조건(중심이 직선 위·y축 접·점 지남)을 한 문자의 이차방정식으로 통합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중심을 (a, a+2)로, 반지름을 |a| 로 놓아 서로 다른 세 조건을 a 에 대한 이차방정식 하나로 결합해야 두 원이 한 번에 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "중심이 직선 위에 있고 좌표축에 접하는 원(두 해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    70-e3(중심이 직선 위)과 73-e7(y축 접)을 겹친 문항이다. 중심 (a, a+2)·r=|a| 로 통합해
    (4-a)²+(2-a)²=a² 를 풀면 a²-12a+20=0 이 되고 두 근이 그대로 두 반지름이 된다.
    「두 원이 존재한다」가 발문에 명시돼 기각 단계는 없지만, 반지름이 |a| 라는 절댓값
    처리와 두 해를 모두 살리는 점이 함정(Mt 2). 조건 결합 I-CON d2 · M_total 7 → ★3.
    두 근의 합이 곧 답이라 근과 계수 관계로 이차방정식을 풀지 않고 끝낼 수도 있다.
  tier: star_3
  mechanism_primary: "중심 (a, a+2)·r=|a| → (4,4) 대입 → a²-12a+20=0 → 두 근의 합 12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/73-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편, 지나는 점, 접하는 축을 바꿀 수 있음. 제약: 이차방정식의 두 근이 모두 양수여야 반지름 |a|=a 로 부호 처리 없이 합이 근과 계수 관계와 같아진다(근이 음수면 절댓값 때문에 합이 달라짐 — 여기서 난도를 올릴 수 있다). 판별식이 양수인지도 확인한다."
    creative: "(1) 「두 반지름의 곱」·「두 중심 사이의 거리」로 묻는 것만 바꾸기(★3 유지 · 74-164 와 같은 마무리) (2) 직선의 기울기를 음수로 두어 두 근의 부호가 갈리게 하면 절댓값 기각이 생겨 I-VF d2 · ★4 (3) 「점 (4,4)를 지난다」를 「x축과의 현의 길이가 6」으로 바꾸면 ★4."
```

```yaml
- id: GN-CM2-74-e8
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (2, 4)를 지나고 x축과 y축에 동시에 접하는 원의 방정식을 모두 구하기.
  category: "두 축 동시 접 ⇔ |중심의 두 좌표| = 반지름 → 사분면으로 갈래 확정 → 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 축에 동시에 접한다」를 |중심의 x좌표|=|중심의 y좌표|=반지름 으로 옮기고, 지나는 점이 제1사분면이므로 중심이 직선 y=x 위(y=-x 가 아님)라는 갈래까지 확정해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축과 y축에 동시에 접하는 원의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심을 (a, a)(a>0), 반지름을 a 로 놓는 순간 (2-a)²+(4-a)²=a² 한 줄로 끝나지만, 그
    치환에 도달하려면 동시 접 조건을 절댓값 등식으로 옮기고 점의 사분면으로 y=x 갈래를
    골라야 한다(T-부호·T-범위). 이차방정식의 두 근 2, 10 이 모두 유효해 답이 원 두 개인 것도
    놓치기 쉽다. I-EQV d2 · M_total 7 → 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "중심 (a,a)·r=a → (2-a)²+(4-a)²=a² → a=2 또는 10 → 원 두 개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x-2)^2+(y-2)^2=4$, $(x-10)^2+(y-10)^2=100$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/74-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표를 바꿀 수 있음. 제약: 점이 제1사분면이면 중심은 y=x 위, 제2·제4사분면이면 y=-x 위다(74-164 참조). 두 근이 모두 양수·정수가 되도록 좌표를 잡고(판별식이 완전제곱수), 점이 직선 y=x 위에 있으면 원이 하나로 줄어드는 것도 확인한다."
    creative: "(1) 「두 원의 중심 사이의 거리」·「두 반지름의 곱」으로 마무리만 바꾸기(★3 유지 · 74-164) (2) 점을 주지 않고 「중심이 직선 위」로 바꾸면 74-166(★2) (3) 「점을 지나고 x축에만 접하는 원 중 반지름이 최소인 것」이면 최소 조건이 붙어 ★4 (4) 지나는 점을 (t, 4) 로 두고 원이 두 개 생길 t 의 범위를 물으면 판별식 조건 ★4."
```

```yaml
- id: GN-CM2-74-164
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    점 (-2, 1)을 지나고 x축과 y축에 동시에 접하는 두 원의 중심 사이의 거리.
  category: "두 축 동시 접 → 제2사분면 갈래 → 두 중심 → 거리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "동시 접 조건을 |중심 좌표|=반지름 으로 옮기되, 점이 제2사분면이므로 중심이 직선 y=-x 위라는 갈래를 학생이 직접 골라야 한다(74-e8 과 부호가 반대)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축과 y축에 동시에 접하는 원(두 중심 사이의 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    74-e8 의 쌍둥이인데 점이 제2사분면이라 중심을 (-t, t)(t>0) 로 잡아야 하는 부호 갈래가
    핵심이다. 대입하면 t²-6t+5=0 에서 t=1, 5 가 나오고 두 중심의 거리를 계산해 마무리한다.
    두 중심이 모두 y=-x 위에 있어 거리가 √2 배로 정리되는 점이 마지막 계산 요령이다.
    I-EQV d2 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "중심 (-t, t)·r=t → (-2+t)²+(1-t)²=t² → t=1, 5 → 두 중심의 거리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/74-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표(제2·제4사분면)를 바꿀 수 있음. 제약: 두 근이 양수·정수가 되도록 판별식을 완전제곱수로 맞추고, 답이 k√2 꼴로 정리되도록 두 중심이 같은 대각선 위에 있다는 점을 이용한다. 점을 제1사분면으로 옮기면 74-e8 과 같은 문항이 된다."
    creative: "(1) 「두 반지름의 합·곱」으로 묻기(근과 계수 관계로 바로 — ★3 유지) (2) 「두 원의 공통외접선의 개수」를 물으면 두 원의 위치 관계가 붙어 08단원과 결합 ★4 (3) 점을 문자 (a, 1) 로 두고 두 원이 생기지 않는 a 의 범위를 물으면 판별식 조건 ★4."
```

```yaml
- id: GN-CM2-74-165
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    원 x²+y²+2ax+6y+7-b=0 이 x축과 y축에 동시에 접할 때 a+b (a>0 인 상수).
  category: "일반형 중심 읽기 → |중심 두 좌표| = 반지름 → a, b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동시 접 조건을 |중심의 x좌표|=|중심의 y좌표|=반지름 으로 옮겨 a>0 조건과 함께 a 를 확정한 뒤 반지름 식으로 b 를 구한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반형 원이 두 축에 동시에 접할 조건으로 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심이 (-a, -3) 으로 읽히므로 동시 접 조건이 |-a|=|-3|=r 이 되고 a>0 에서 a=3, r=3 이
    바로 확정된다. 그다음 r²=a²+9-(7-b) 에 넣어 b 를 구하면 끝. 74-e8 계열이지만 중심이
    미지 문자 하나뿐이고 이차방정식·두 해 분기가 없어 통찰은 d1 에 그친다.
    M_total 7 · 통찰 1(d1) → ★2 유지.
    [분류 이슈] 쌍둥이 예제 74-e8(★3)과 한 단계 차이. 분기 유무로 갈랐다.
  tier: star_2
  mechanism_primary: "중심 (-a,-3) → |-a|=|-3|=r, a>0 → a=3, r=3 → r² 식으로 b=-2 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/74-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 일차항 계수(짝수)와 상수항의 b 형태를 바꿀 수 있음. 제약: 두 축에 접하려면 |중심 x|=|중심 y| 여야 하므로 x 일차항의 문자 계수와 y 일차항 상수 계수의 절댓값이 같아지는 해가 존재해야 한다. a>0 같은 부호 조건을 빼면 답이 둘로 늘어난다."
    creative: "(1) a>0 조건을 빼면 중심이 제3사분면 갈래까지 생겨 답 두 쌍 → ★3 (2) 「동시에 접한다」를 「x축에 접하고 y축과 만나지 않는다」로 바꾸면 부등식 ★3 (3) b 를 주고 a 의 값의 합을 물으면 근과 계수 관계 마무리(★2~3)."
```

```yaml
- id: GN-CM2-74-166
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인 체크"
  summary: |
    중심이 직선 x+3y+6=0 위에 있고 x축과 y축에 동시에 접하는 원의 방정식
    (중심은 제4사분면 위).
  category: "제4사분면 + 동시 접 → 중심 (a, -a) → 직선에 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동시 접 + 제4사분면 조건을 「중심 (a, -a), 반지름 a (a>0)」라는 한 문자 표현으로 옮기면 직선 조건은 일차방정식 하나로 끝난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중심이 직선 위에 있고 두 축에 동시에 접하는 원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사분면이 지정돼 있어 74-e8 의 갈래 선택 부담이 없고, 중심 (a, -a) 를 직선에 넣으면
    a=3 이 일차로 나온다. 함정은 제4사분면에서 y 좌표가 음수라 반지름이 |-a|=a 라는 부호
    처리(T-부호)와 사분면 조건을 빼면 답이 늘어난다는 점(T-범위). 통찰 1(d1) · M_total 6 →
    ★2 유지.
  tier: star_2
  mechanism_primary: "중심 (a, -a)·r=a (a>0) → a-3a+6=0 → a=3 → (x-3)²+(y+3)²=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x-3)^2+(y+3)^2=9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/74-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수와 지정 사분면을 바꿀 수 있음. 제약: 중심이 y=x(제1·제3사분면) 위인지 y=-x(제2·제4사분면) 위인지가 사분면으로 정해지므로, 대입 후 a 가 양수 정수로 나오도록 직선의 상수항을 잡는다. 직선이 y=±x 와 평행하면 해가 없다."
    creative: "(1) 사분면 조건을 빼면 y=x 갈래와 y=-x 갈래가 모두 살아 답이 둘 → I-MI d1 · ★3 (2) 직선을 「점 (4,-2)를 지나고」로 바꿔 두 조건을 모두 문자로 두면 ★3 (3) 「이 원과 중심이 같고 반지름이 2배인 원이 x축과 만나는 두 점 사이의 거리」를 덧붙이면 현의 길이 결합 ★3~4."
```

```yaml
- id: GN-CM2-75-e9
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 P(6, 2)와 원 x²+y²+4x-8y+10=0 위의 점 Q 에 대하여 선분 PQ 의 길이의 최댓값 M,
    최솟값 m 일 때 Mm 의 값.
  category: "원 밖의 점과 원 위의 점 사이 거리 → 중심을 지나는 직선 위의 두 점 → M=d+r, m=d-r"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PQ 를 좌표식으로 두지 않고 「중심까지의 거리 d 와 반지름 r 의 합·차」라는 기하 배치로 옮겨야 최대·최소가 한 줄에 나온다(대수 → 기하 표현 전환)"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최대·최소가 d 를 중심으로 ±r 대칭이므로 Mm=(d+r)(d-r)=d²-r² 로 묶으면 무리수 d, r 를 각각 구하지 않고 끝난다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원 밖의 점과 원 위의 점 사이의 거리의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반형에서 중심 (-2,4)·r²=10 을 얻고, P 와 중심의 거리² d²=68 을 구한 뒤 M=d+r, m=d-r
    로 놓는다. 곱을 묻고 있으므로 d²-r²=68-10 으로 정리하면 √ 계산이 전혀 필요 없다.
    함정은 P 가 원 밖인지 먼저 확인해야 한다는 것(원 안이면 m=r-d · T-범위)과 최솟값의
    부호(T-부호). 통찰 2개(RT d2 + SYM d1) → 출발점 ★2 에서 +1 하여 ★3. 이 범위에서
    유일하게 기하 표현 전환이 필요한 문항이다.
  tier: star_3
  mechanism_primary: "중심·반지름 → d²=|PC|²=68 → M=d+r, m=d-r → Mm=d²-r²=58"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$58$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/75-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표와 원의 계수를 바꿀 수 있음. 제약: P 는 반드시 원 밖에 있어야 하고(d>r), 곱 Mm=d²-r² 를 묻는 한 d·r 가 무리수여도 답은 정수다. M+m(=2d)·M-m(=2r)·M²+m² 를 물으려면 d, r 가 각각 유리수가 되게 좌표를 조정한다."
    creative: "(1) 「M+m」·「M-m」으로 바꾸면 d, r 를 각각 구해야 해 계산은 늘고 통찰은 줄어듦(★3 유지 또는 ★2) (2) P 를 원 안의 점으로 두면 m=r-d 로 식이 바뀌어 케이스 판정이 핵심이 됨(I-MI 추가 · ★4) (3) P 를 직선 위를 움직이는 점으로 두면 점과 직선 사이의 거리와 결합해 ★4 (4) 두 원 위의 두 점 사이의 거리 최대·최소로 확장하면 중심거리 골조 ★4."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 3 · ★2 14 · ★3 6 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 15 · premium 0
- 통찰 유형 분포: I-EQV 6(71-159 · 73-e7 · 74-e8 · 74-164 · 74-165 · 74-166) · I-CON 1(73-163) · I-RT 1 + I-SYM 1(75-e9). depth 2 가 6개, depth 1 이 3개이고 depth 3 은 없다. 통찰이 둘인 문항은 75-e9 하나뿐이라 ★4 이상은 나오지 않았다.
- M_total 분포: 4 가 3문 · 5 가 2문 · 6 이 9문 · 7 이 6문 · 8 이 3문. Ma 는 상수·미지수가 발문에 등장하는 8문만 2 이고 나머지는 1, Mt 2 는 절댓값·사분면·경계가 걸리는 8문이다.
- type_hint 상위 5: 「좌표축에 접하는 원」 계열 7(73-e7 · 73-162 · 73-163 · 74-e8 · 74-164 · 74-165 · 74-166) · 「일반형의 중심·반지름과 상수 결정」 3(71-e4 · 71-157 · 71-158) · 「세 점을 지나는 원」 3(72-e6 · 72-160 · 72-161) · 「중심이 직선·좌표축 위에 있는 원」 3(70-e3 · 70-155 · 70-156) · 「중심과 한 점 / 지름의 양 끝 점」 4(69-e1 · 69-153 / 69-e2 · 69-154).
- 구역 0문 그림 · 0문 선택지 · 0문 기출 태그 · 전 문항 vendor_level "-". 필수 예제 9문(69-e1 · 69-e2 · 70-e3 · 71-e4 · 71-e5 · 72-e6 · 73-e7 · 74-e8 · 75-e9)과 확인 체크 14문이 번갈아 배치된다.
- 예제-확인 체크 쌍의 난도 차: 대체로 같은 ★ 이지만 69-e1(★1) → 69-153(★2), 74-e8(★3) → 74-165(★2)처럼 한 단계 벌어지는 쌍이 있다. 확인 체크가 예제보다 쉬운 경우는 74-165 하나다.
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 어긋나는 조건은 발견되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-72-161 | A(-3,4)·C(3,4)가 y축 대칭이라 중심이 x=0 위임을 쓰면 미지수가 하나로 줄어 풀이가 절반(I-SYM d1 후보). 표준 해법(일반형 3점 대입)에는 없는 선택적 단축이라 절차형으로 두고 기록 | ★2 (통찰 인정 시에도 ★2) |
| GN-CM2-73-163 | 세 조건 결합을 I-CON d2 한 개로 셀지, I-EQV d1(직선 위 매개화) + I-EQV d1(y축 접 → r=\|a\|) 두 개로 쪼갤지 경계. 쪼개면 통찰 2개가 되어 ★4 후보가 된다. CM2 부터 I-CON 인정이라는 스키마 §2.2 경계 정책을 따라 CON 한 개로 두었다 | ★3 / ★4 |
| GN-CM2-74-165 | 쌍둥이 예제 74-e8(★3)과 같은 「두 축 동시 접」 유형인데 중심이 일반형에서 바로 읽히고 a>0 이 주어져 이차방정식·두 해 분기가 없다. 분기 유무로 ★2 로 내렸으나 M_total 7 은 e8 과 같다 | ★2 / ★3 |

벤더 신호(구역 「필수·발전 예제」 → ★2 출발)와 2단 이상 어긋난 문항은 없다. 가장 크게 벌어진 것이 ★1 로 내린 세 문항(69-e1 · 69-e2 · 69-154)과 ★3 으로 올린 여섯 문항으로 모두 1단 차이다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **이 범위에서 가장 크게 반복된 type_hint 는 「좌표축에 접하는 원」 7문**이다. 한 덩어리로 묶되 소분류 세 개(한 축에 접 / 두 축에 동시에 접 / 접 조건으로 일반형 상수 결정)를 두는 편이 좋다. 세 갈래의 base ★ 가 각각 다르다 — 중심이 수로 읽히는 직접 대입형은 ★2(73-162 · 74-165), 중심이 미지라 연립·분기가 생기면 ★3(73-e7 · 73-163 · 74-e8 · 74-164)이다.
- **통합 후보**: 「중심과 한 점」 · 「지름의 양 끝 점」 · 「중심이 직선·좌표축 위」 · 「세 점을 지나는 원」은 모두 「원을 결정하는 조건을 받아 중심과 반지름을 구한다」는 한 골조다. 상위 유형 「원의 방정식 — 결정 조건별 표준형」 하나에 소분류 네 개를 다는 것을 제안한다. base ★ 는 2 이고, 중심이 그대로 주어지는 도입 두 문항(69-e1 · 69-e2)만 ★1 로 내려 쓴다.
- **따로 세울 유형 1 — 「이차방정식이 원을 나타낼 조건」**(71-e5 · 71-159): 등식이 아니라 부등식으로 답하는 유일한 갈래이고, 문자 계수가 중심까지 움직이면(71-159) 이차부등식 + 정수 개수로 한 단계 올라간다. base ★ 2, 문자 계수 변형은 ★3.
- **따로 세울 유형 2 — 「원 밖의 점과 원 위의 점 사이의 거리 최대·최소」**(75-e9): 이 범위에서 유일하게 대수 → 기하 표현 전환(I-RT)이 필요한 골조이고 08단원(원과 직선)에서 점과 직선 사이의 거리, 두 원의 위치 관계로 계속 재등장한다. base ★ 3.
- **일반형 관련**: 「일반형 → 중심·반지름」(71-e4 · 71-157 · 71-158)은 위 유형들의 **전처리 단계**로 거의 모든 문항에 섞여 들어간다. 독립 유형으로 세우되 base ★ 2 로 낮게 두고, 다른 유형의 선수 기능으로 링크를 거는 편이 실용적이다.
- 07단원 마지막 조각(07-p3 · 연습문제 STEP 1/2·실력 UP)을 정독한 뒤 위 base ★ 가 ★4 구간까지 이어지는지, 「두 원의 위치 관계」를 07 에 둘지 08 로 넘길지 확정한다.
