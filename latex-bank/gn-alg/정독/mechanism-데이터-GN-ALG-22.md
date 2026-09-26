---
name: mechanism-데이터-GN-ALG-22
description: 개념원리 대수 22 코사인법칙(1/1 · 203~208쪽 203-e6~208-487 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 22 코사인법칙
  unit_code: ALG-22
  part: "1/1"
  extract_range: "203~208쪽 · 203-e6~208-487"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 가 변하는 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 22 코사인법칙 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 22단원 「코사인법칙」 전체(203~208쪽 · 203-e6~208-487 · 26문항)를 다룬다. 구역은 넷이다. **필수·발전 예제** 10문(tag 「필수」 예제 다섯 203-e6·204-e7·204-e8·205-e9·205-e10 과 각각 뒤에 붙는 tag 「확인체크」 유제 다섯), **연습문제 STEP 1** 7문, **연습문제 STEP 2** 6문(208-484 는 「수능 기출」), **연습문제 실력 UP** 3문(208-485 는 「교육청 기출」)이다. 이 단원에는 「개념원리 익히기」 구역이 전사돼 있지 않다. 개념원리 고등은 구역이 곧 난이도 층이어서 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 예제 구역의 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제 쪽도 함께 보고 판정했고, 2단 이상 벌어진 한 문항(204-469)은 분류 이슈 표에 남겼다.

단원의 도구는 사실상 셋뿐이다. ① **코사인법칙 a²=b²+c²-2bc·cos A** 로 두 변과 끼인각에서 나머지 변을 구하거나, ② **변형꼴 cos A=(b²+c²-a²)/(2bc)** 로 세 변에서 각을 구하고, ③ **사인법칙 a/sin A=2R** 로 각 조건을 변 조건으로(또는 그 역으로) 옮긴다. 그래서 이 범위에서 실제 변별이 생기는 지점은 넷이다 — 사인 비·사인 관계식을 변의 비로 옮길 수 있는가(204-e8·206-474·206-476·208-487), 각의 합 A+B+C=180° 를 써서 (B+C-A)/2 같은 합성각을 한 각의 삼각비로 환원할 수 있는가(204-469·206-477), cos 을 변으로 모두 치환해 **변만의 식**으로 모양을 결정할 수 있는가(205-e9·205-470·206-477), 그리고 원에 내접하는 사각형·공간도형·내접원 같은 기하 배치를 **어느 삼각형에 코사인법칙을 쓸지**로 환원할 수 있는가(206-475·207-481·208-483·208-484·208-485). 통찰 라벨은 I-RT 와 I-EQV 에 집중되고 I-CON 이 원에 내접하는 사각형 문항에, I-SYM·I-MI 가 각각 한 번씩 붙는다. ★5 는 없다 — 통찰 3개짜리 두 문항(208-484·208-485)도 저노출 유형(SC/VF/SYM/XU)이 없어 ★4 에서 멈춘다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 숫자 변형에서 가장 자주 걸리는 제약은 두 가지다 — cos 값이 특수각(±1/2·±√2/2·±√3/2)으로 떨어져야 각을 답할 수 있다는 것, 그리고 세 변이 삼각형 부등식을 만족하고 최대변·최소변의 순서가 바뀌지 않아야 한다는 것이다. 그림 문항은 11문이며 그중 골조 판정에 크롭이 필요했던 것은 207-481(직육면체에서 θ 가 ∠FAH 임) 하나였고 나머지는 발문에 배치가 모두 적혀 있다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-ALG-203-e6
  page: 203
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 삼각형 ABC 에서 ⑴ 두 변과 끼인각(b=8, c=4, A=60°)이 주어질 때 a 와 나머지 두 각, ⑵ 세 변(a=√2, b=2, c=√3+1)이 주어질 때 세 각을 구한다.
  category: "코사인법칙 → 나머지 변·각"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 나머지 변·각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 a²=b²+c²-2bc·cos A 한 번, ⑵ 는 변형꼴 cos=(합-대변²)/(2·곱) 을 두 번 쓰고 세 번째 각은 180° 에서 뺀다. 도구 선택의 분기가 없는 단원 대표 드릴이라 통찰 0. M_total 5 로 −1 후보지만 소문항 둘에 (√3+1)² 전개·약분이 끼어 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "두 변+끼인각 → 코사인법칙으로 대변 → 변형꼴 cos 으로 나머지 각 → 180° 에서 마지막 각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=4\sqrt{3}$, $B=90^\circ$, $C=30^\circ$ ⑵ $A=30^\circ$, $B=45^\circ$, $C=105^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/203-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 (b, c, A) 와 ⑵ 의 세 변을 바꿀 수 있다. 제약: cos 값이 ±1/2·±√2/2·±√3/2 로 떨어져야 각을 각도로 답할 수 있고, ⑵ 처럼 무리수 변을 쓰면 (√3+1)² 같은 전개가 분모의 인수와 약분되도록 세 변을 함께 설계해야 한다. 세 변은 삼각형 부등식을 만족해야 한다."
    creative: "(1) ⑴ 에서 구한 B=90° 를 숨기고 '이 삼각형의 모양'을 묻기(★2 유지) (2) 세 각 대신 외접원의 반지름을 묻게 해 사인법칙을 한 단계 붙이기(★2) (3) 두 변과 끼인각이 아니라 두 변과 마주 보지 않는 한 각(SSA)을 주면 이차방정식·해의 개수 분기가 생겨 ★3."
```

```yaml
- id: GN-ALG-203-467
  page: 203
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑵ 삼각형 ABC 에서 ⑴ b=√2, c=3, A=135° 일 때 a, ⑵ a=√7, b=2, c=3 일 때 A 의 크기를 구한다.
  category: "코사인법칙 정·역방향 1회씩"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 나머지 변·각 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    203-e6 의 유제로 소문항이 각각 공식 한 번이다. ⑴ 은 cos135°=-√2/2 라 마지막 항의 부호가 뒤집혀 더해지는 것이 유일한 함정(T-부호), ⑵ 는 변형꼴에 세 변을 대입하면 1/2 이 바로 나온다. 통찰 0 · M_total 5 → 확인체크 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "⑴ 둔각의 cos 부호에 주의해 a²=b²+c²-2bc·cos A ⑵ cos A=(b²+c²-a²)/(2bc) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{17}$ ⑵ $60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/203-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 끼인각을 120°·150° 같은 다른 둔각으로, ⑵ 의 세 변을 cos 이 특수각이 되는 다른 조(예: 3, 5, 7 → 120°)로. 제약: ⑴ 에서 a² 가 근호 안에서 깔끔해지도록 b·c·cos 의 곱이 정수여야 하고, ⑵ 는 삼각형 부등식을 지켜야 한다."
    creative: "(1) ⑴ 의 답 √17 을 주고 끼인각을 되묻는 역방향(★2 · I-BW d1) (2) ⑵ 에서 '가장 큰 각'으로 묻기(최대변 판정 한 단계 추가 · ★2 유지) (3) 두 소문항을 한 삼각형으로 묶어 a 를 구한 뒤 그 a 로 다시 각을 묻는 연쇄(★2)."
```

```yaml
- id: GN-ALG-204-e7
  page: 204
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 변이 a=3, b=5, c=7 인 삼각형 ABC 의 최대각의 크기를 구한다.
  category: "최대변의 대각 → 코사인법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 최대각·최소각(최대변의 대각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '큰 변에 큰 각이 마주 본다'로 최대각을 C 로 확정한 뒤 변형꼴에 대입하면 cos C=-1/2. 이 단원에서 가르치는 표준 사실 한 줄이라 통찰로 세지 않았다. cos 이 음수 → 둔각이라는 부호 처리(T-부호)가 유일한 함정이고 M_total 5 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "최대변 c 확정 → cos C=(a²+b²-c²)/(2ab) → 음수 → 둔각 120°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/204-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 (2, 3, 4)·(5, 7, 8)·(7, 8, 13) 처럼 cos 이 특수각이 되는 조로 바꿀 수 있다. 제약: 삼각형 부등식(작은 두 변의 합 > 최대변)을 반드시 확인해야 하고, 최대변이 바뀌면 묻는 각의 문자도 함께 바뀐다."
    creative: "(1) 최소각으로 바꾸기(204-468 과 같은 골조 · ★2 유지) (2) 세 변을 3:5:7 비로만 주면 비례상수 도입이 한 단계 붙어 ★2 (3) 세 변을 x 의 다항식으로 주면 대소 비교·범위 판정이 붙어 ★4(208-486)."
```

```yaml
- id: GN-ALG-204-e8
  page: 204
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각형 ABC 에서 sin A : sin B : sin C = 7 : 3 : 8 일 때 A 의 크기를 구한다.
  category: "사인 비 → 변의 비 → 코사인법칙"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin 의 비를 변의 비로 옮기고 a=7k, b=3k, c=8k 로 놓아 각의 조건을 변의 조건으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사인법칙과 코사인법칙의 결합(변의 비 → 각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a:b:c=sin A:sin B:sin C 로 옮긴 뒤 비례상수 k 를 넣으면 변형꼴에서 k² 가 약분돼 cos A=1/2 만 남는다. 이 단원 후반 문항(206-474·206-476·208-487)이 모두 이 전환 위에 서 있어 골조가 원형이다. 통찰 1개(RT d1)·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin 비 → 사인법칙으로 변의 비 → a=7k, b=3k, c=8k → cos A 변형꼴에서 k² 약분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/204-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 7:3:8 을 cos 이 특수각으로 떨어지는 다른 조(3:5:7 → 120°, 5:7:8 → 60°)로. 제약: 세 수가 삼각형 부등식을 만족해야 하고, 묻는 각은 대응 변이 비의 어느 항인지 헷갈리지 않게 지정해야 한다."
    creative: "(1) 비를 sin A/6=sin B/5=sin C/4 꼴 등식으로 주기(204-469 형태 · ★2 유지) (2) 최대각을 묻게 해 비에서 최대항을 고르는 단계를 추가(★2) (3) 비 대신 sin A=√2 sin B=2 sin C 처럼 관계식으로 주면 비로 환원하는 단계가 하나 더 붙어 ★2~3(206-476)."
```

```yaml
- id: GN-ALG-204-468
  page: 204
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    삼각형 ABC 에서 a=√6, b=2, c=√3+1 일 때 최소각의 크기를 구한다.
  category: "최소변의 대각 → 코사인법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 최대각·최소각(최소변의 대각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    204-e7 의 유제인데 세 변이 모두 무리수라 최소변을 고르는 것 자체가 한 단계다(√6≈2.45, √3+1≈2.73 → 최소는 2). 그 뒤 변형꼴에 넣으면 분자 6+2√3 이 2√3(√3+1) 로 묶여 분모와 약분된다. 통찰 0 이지만 무리수 대소 비교와 약분 설계로 M_total 6 → 확인체크 출발점 ★1 에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "세 변의 대소 비교로 최소변 b 확정 → cos B=(a²+c²-b²)/(2ac) → 분자 인수분해·약분 → 45°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/204-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√3+1 자리에 √2+1·√5-1 같은 다른 무리수를 넣을 수 있다. 제약: 세 변의 대소 순서가 분명해야 하고(근삿값이 너무 가까우면 비교 자체가 함정이 아니라 사고가 된다) 분자가 분모의 인수(√3+1 등)로 묶여 약분되도록 맞춰야 한다."
    creative: "(1) 최대각으로 바꿔 묻기(★2 유지) (2) 최소각과 최대각의 차를 묻기(계산 두 번 · ★2~3) (3) 세 변 중 하나를 미지수로 두고 '최소각이 45° 가 되도록 하는 값'을 묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-ALG-204-469
  page: 204
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    삼각형 ABC 에서 sin A/6 = sin B/5 = sin C/4 일 때 sin((B+C-A)/2) 의 값을 구한다.
  category: "합성각 환원 + 사인 비 → 코사인법칙"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A+B+C=180° 를 써서 (B+C-A)/2=90°-A 로 바꾸고 sin(90°-A)=cos A 로 환원 — 구할 대상 자체를 코사인법칙이 다룰 수 있는 꼴로 옮김"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin A/6=sin B/5=sin C/4 를 사인법칙으로 a:b:c=6:5:4 로 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "각의 합 변환(90°-A)과 사인 비를 결합한 삼각비 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묻는 것이 sin 의 합성각이라 코사인법칙이 바로 붙지 않는다. 내각의 합으로 (B+C-A)/2=90°-A, 여기서 sin→cos 로 넘어가는 첫 단계를 못 잡으면 풀이가 시작되지 않는다. 그 뒤는 a:b:c=6:5:4 대입 한 줄. 통찰 2개(EQV d2 + RT d1)·M_total 6 → ★3. [분류 이슈] 벤더 확인체크(★1 출발)와 2단 차이 — 대응 필수 예제 204-e8(★2) 기준으로도 +1 이라 라벨은 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "(B+C-A)/2=90°-A → sin=cos A → 사인 비를 a:b:c=6:5:4 로 → cos A 변형꼴 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/204-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 6:5:4 를 다른 조로 바꿀 수 있다. 제약: 답이 특수각이 아니라 cos 값 자체이므로 특수각 제약은 없지만, 세 수가 삼각형 부등식을 만족하고 분수가 약분되는 조가 보기 좋다."
    creative: "(1) 묻는 대상을 cos((A+B-C)/2) 처럼 다른 합성각으로 바꾸기(같은 골조 ★3) (2) 합성각을 sin((B+C)/2)=cos(A/2) 로 주면 반각이 끼어 ★4 (3) 비 대신 세 변의 실제 값을 주면 첫 전환이 사라져 ★2."
```

```yaml
- id: GN-ALG-205-e9
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각형 ABC 에서 sin A = 2 cos B sin C 가 성립할 때 이 삼각형이 어떤 삼각형인지 판정한다.
  category: "각의 관계식 → 변만의 식 → 모양 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin A, sin C 를 a, c 로 바꿔 관계식을 a=2c·cos B 로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "남은 cos B 를 코사인법칙 변형꼴로 치환해 각이 하나도 없는 변만의 식 b²=c² 로 통합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각형의 모양 결정(사인·코사인법칙으로 변만의 식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모양 결정의 표준 전략은 '각을 전부 변으로 바꾼다'이고, 그 두 도구(사인법칙 · cos 의 변형꼴)를 연달아 써야 한다는 것이 이 문항의 전부다. b²=c² 에서 변의 길이는 양수이므로 b=c 만 남기는 마지막 처리가 T-범위 함정. 통찰 2개·M_total 7 → 필수 예제 출발점 ★2 에서 +1 한 ★3.
  tier: star_3
  mechanism_primary: "사인법칙으로 sin→변 → cos B 를 변형꼴로 치환 → 약분해 b²=c² → 양수 조건으로 b=c 이등변"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$b=c$인 이등변삼각형'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/205-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 를 바꾸면 결론이 달라진다(sin A=2cos B sin C 는 b=c, 계수를 빼면 직각·다른 관계). 제약: 최종 변만의 식이 b=c·a²=b²+c² 같은 '이름 있는 모양'으로 떨어져야 하므로 계수를 임의로 바꿀 수 없다 — 변형 시 결론 식을 먼저 정하고 역산할 것."
    creative: "(1) 결론을 직각삼각형으로 바꾸려면 a cos B=b cos A+c 꼴로(205-470 · ★2) (2) 합성각을 섞어 sin((A-B+C)/2)·sin C=sin A 로 주면 각 변환이 한 단계 더 붙어 ★3(206-477) (3) '어떤 삼각형인가'를 객관식 5지선다로 주면 역대입 확인이 가능해져 체감 ★2."
```

```yaml
- id: GN-ALG-205-e10
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    호수 양 끝의 두 나무 A, B 와 한 지점 C 에 대하여 AC=30 m, BC=50 m, ∠ACB=120° 일 때 두 나무 사이의 거리를 구한다.
  category: "실생활 배치 → 코사인법칙 1회"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 실생활 활용(직접 잴 수 없는 두 지점 사이 거리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 변과 끼인각이 그대로 주어져 AB²=30²+50²-2·30·50·cos120° 한 줄이다. cos120°=-1/2 이라 마지막 항이 더해지는 부호 처리만 함정(T-부호). 통찰 0 · M_total 4 → 필수 예제 출발점 ★2 에서 −1 한 ★1. 실생활 포장이 난이도를 올리지 않는 전형이다.
  tier: star_1
  mechanism_primary: "삼각형 ABC 로 보고 AB²=AC²+BC²-2·AC·BC·cos120° → 4900 → 70 m"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$70\,\mathrm{m}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-205-e10.png"
  latex: latex-bank/gn-alg/items/205-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 거리와 끼인각(30·50·120°)을 바꿀 수 있다. 제약: 결과가 근호 없이 떨어지도록 세 수를 맞추는 편이 좋고(30-50-120° → 70), 끼인각은 특수각이어야 한다. 단위는 그림 라벨과 일치시킨다."
    creative: "(1) 속력·시간을 줘서 두 변을 먼저 계산하게 하기(★2 · 207-478) (2) 거리 대신 삼각형의 넓이나 ∠CAB 를 묻기(한 단계 추가 ★2) (3) 두 나무 사이 거리를 주고 끼인각을 역으로 묻기(★2 · I-BW d1)."
```

```yaml
- id: GN-ALG-205-470
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    삼각형 ABC 에서 a cos B = b cos A + c 가 성립할 때 이 삼각형이 어떤 삼각형인지 판정한다.
  category: "각의 관계식 → 변만의 식 → 모양 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cos A, cos B 를 모두 코사인법칙 변형꼴로 치환해 각이 없는 변만의 식으로 통합 → 정리하면 a²=b²+c²"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 모양 결정(사인·코사인법칙으로 변만의 식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    205-e9 의 유제인데 좌·우변이 모두 변×cos 꼴이라 사인법칙 전환 없이 cos 두 개만 변형꼴로 바꾸면 분모 2c 가 공통으로 떨어지고 2a²-2b²=2c² 가 남는다. 통찰 1개(EQV d2)·M_total 6 → 확인체크 ★1 에서 +1 한 ★2(대응 예제 e9 보다 전환이 하나 적다).
  tier: star_2
  mechanism_primary: "cos A·cos B 를 변형꼴로 치환 → 2c 약분 → a²=b²+c² → A=90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$A=90^\circ$인 직각삼각형'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/205-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호와 항의 배치(a cos B - b cos A = c 등)를 바꾸면 결론이 직각에서 이등변으로 옮겨 간다. 제약: 최종 식이 a²=b²+c² 나 b=c 같은 이름 있는 모양으로 떨어지도록 역산해서 설계해야 한다."
    creative: "(1) 제1코사인법칙 c=a cos B+b cos A 를 아는 학생은 두 식을 빼서 2b cos A=0 으로 한 줄에 끝낸다 — 이 별해를 유도하는 '두 가지 방법으로 풀어라'형으로 바꾸면 I-SC 가 붙어 ★3 (2) 결론을 주고 관계식의 빈 계수를 묻는 역방향(★3) (3) sin 으로 표현해 사인법칙 전환을 강제하면 ★3(205-e9)."
```

```yaml
- id: GN-ALG-205-471
  page: 205
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    원형 연못가의 세 지점 A, B, C 에 대하여 AB=6 m, AC=10 m, ∠BAC=120° 일 때 연못의 반지름을 구한다.
  category: "코사인법칙으로 변 → 사인법칙으로 외접원 반지름"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'연못의 반지름'을 삼각형 ABC 의 외접원의 반지름으로 바꿔 읽고 사인법칙 a/sin A=2R 의 대상으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙+사인법칙으로 외접원의 반지름 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연못가의 세 점이 곧 외접원 위의 세 점이라는 읽기가 첫 단계고, 그 뒤는 BC²=36+100+60=196 으로 마주 보는 변을 만든 다음 BC/sin A=2R 에 넣는 두 법칙의 연결이다. 통찰 1개(RT d1)·M_total 5 → 확인체크 ★1 에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "코사인법칙으로 ∠A 의 대변 BC=14 → 사인법칙 BC/sin120°=2R → R=14√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{14\sqrt{3}}{3}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-205-471.png"
  latex: latex-bank/gn-alg/items/205-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AC·∠BAC 를 바꿀 수 있다. 제약: 끼인각은 특수각이어야 하고 BC² 가 완전제곱수로 떨어져야 반지름이 깔끔하다(6-10-120° → 196). 그림의 라벨 A·B·C 위치와 각의 표기는 고정."
    creative: "(1) 반지름 대신 연못의 넓이나 호 BC 의 길이를 묻기(★2~3) (2) 반지름을 주고 ∠BAC 를 역으로 묻기(★3 · I-BW d2) (3) 세 점 대신 원에 내접하는 사각형의 네 점을 주면 대각의 cos 부호 단계가 붙어 ★3(206-475·208-483)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-206-472
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼각형 ABC 에서 b=4, c=4√3, C=60° 일 때 a 의 값을 구한다.
  category: "코사인법칙 → a 에 대한 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 이차방정식을 세워 변 구하기(SSA)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 각 C 가 두 변 b, c 에 끼인 각이 아니어서 c²=a²+b²-2ab·cos C 를 미지수 a 에 대한 이차방정식 a²-4a-32=0 으로 보는 것이 골조다. 두 근 8, -4 중 변의 길이는 양수라 -4 를 버리는 T-범위 처리가 마지막. 표준 절차라 통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "c²=a²+b²-2ab·cos C 를 a 의 이차방정식으로 → (a-8)(a+4)=0 → 양수 조건으로 a=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/206-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b, c, C 를 바꿀 수 있다. 제약: 판별식이 완전제곱이어야 근이 정수로 떨어지고, 두 근이 모두 양수가 되면 삼각형이 둘 생겨 답이 두 개가 된다 — 한 근만 양수가 되도록(즉 상수항이 음수가 되도록) 잡을 것."
    creative: "(1) 두 근이 모두 양수가 되게 설계해 '모든 a 의 값'을 묻기(경우 분기 ★3 · I-MI d2) (2) a 대신 삼각형의 넓이나 외접원 반지름을 묻기(한 단계 추가 ★2~3) (3) a 를 주고 C 를 되묻기(★2)."
```

```yaml
- id: GN-ALG-206-473
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    반지름 3 인 원에 내접하는 삼각형 ABC 의 둘레가 12 일 때 sin A + sin B + sin C 의 값을 구한다.
  category: "사인법칙 → 사인의 합을 둘레로"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙 a=2R sin A 를 세 각에 모두 적용해 sin 의 합을 (a+b+c)/(2R), 즉 둘레로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사인법칙으로 sin 의 합을 둘레로 바꾸기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    개별 각을 구하려 들면 정보가 부족하고, sin A+sin B+sin C=(a+b+c)/(2R) 로 한꺼번에 옮겨야 12/6=2 로 끝난다. 이 '합째로 옮기기'가 문항의 전부라 계산은 한 줄(M_total 4)이지만 통찰 1개가 있어 −1 조건에 걸리지 않는다 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "사인법칙 a=2R sin A 를 세 각에 적용 → sin 합 = 둘레/(2R) = 12/6 = 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/206-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름과 둘레를 바꿀 수 있다. 제약: 둘레/(2R) 이 깔끔한 값이 되게 하고, 둘레가 외접원에 내접하는 삼각형에서 실제로 가능한 범위(0 < 둘레 ≤ 3√3·R)를 넘지 않게 할 것."
    creative: "(1) sin 의 합을 주고 둘레를 되묻기(★2) (2) sin A·sin B·sin C 나 sin²의 합으로 바꾸면 곱 꼴이라 한꺼번에 옮길 수 없어 ★3~4 (3) 둘레 대신 'a+b=8, c=4' 처럼 나눠 주고 cos C 까지 묻기(코사인법칙 결합 ★3)."
```

```yaml
- id: GN-ALG-206-474
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼각형 ABC 에서 a+b-2c=0, 2a-3b+3c=0 일 때 sin A : sin B : sin C 를 구한다.
  category: "변의 연립 관계식 → 변의 비 → 사인의 비"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin 의 비를 변의 비와 동일시해 답을 a:b:c 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변의 관계식 연립 → 변의 비(사인 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 셋에 식 둘이라 값은 정해지지 않고 비만 정해진다는 구조를 보는 것이 출발점이다. 한 변(c)을 기준으로 나머지를 c 로 표현하면 a=3c/5, b=7c/5 → 3:7:5. 마지막에 사인법칙으로 변의 비를 그대로 사인의 비로 읽는다. 통찰 1개(RT d1)·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "두 식을 연립해 a, b 를 c 로 표현 → a:b:c=3:7:5 → 사인법칙으로 sin 의 비도 같음"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3:7:5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/206-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 계수를 바꿀 수 있다. 제약: 연립이 유일한 비를 주도록 두 식이 서로 상수배가 아니어야 하고, 나온 비가 양수이며 삼각형 부등식을 만족해야 한다(3:7:5 는 3+5>7 로 성립)."
    creative: "(1) 비를 구한 뒤 최대각의 cos 까지 묻기(★2~3 · 206-476 골조) (2) 식 하나를 이차식으로 바꾸면 경우 분기가 생겨 ★3 (3) 사인 비를 주고 관계식의 미정계수를 묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-ALG-206-475
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원에 내접하는 사각형 ABCD 에서 AD=2, CD=3, cos B=1/4 일 때 선분 AC 의 길이를 구한다.
  category: "내접사각형의 대각 → cos D=-cos B → 코사인법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원에 내접하는 사각형은 대각의 합이 180° → D=180°-B → cos D=-cos B 로 조건을 삼각형 ACD 에서 쓸 수 있는 형태로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형과 코사인법칙(대각의 코사인 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 cos B 는 B 쪽 삼각형에 쓰려면 변이 모자라고, 변이 다 있는 쪽은 삼각형 ACD 다. 그래서 대각 관계로 cos D=-1/4 을 만들어 쓰는 부호 전환 한 번이 문항의 핵심이다. 그 뒤 AC²=4+9+3=16 한 줄. 통찰 1개(EQV d2)·M_total 5 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "대각의 합 180° → cos D=-cos B=-1/4 → 삼각형 ACD 에서 AC²=AD²+CD²-2·AD·CD·cos D → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-206-475.png"
  latex: latex-bank/gn-alg/items/206-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD, CD, cos B 를 바꿀 수 있다. 제약: AC² 가 완전제곱수로 떨어지게 맞추고(2·3·1/4 → 16), cos B 는 -1<cos B<1 이면서 사각형이 실제로 그려지는 값이어야 한다. 그림의 꼭짓점 순서 A-B-C-D 는 고정."
    creative: "(1) AB·BC 를 주고 AC 를 B 쪽에서 구한 뒤 D 쪽 변을 되묻기(연립 ★3 · 208-483) (2) AC 를 주고 cos B 를 묻는 역방향(★2) (3) 사각형의 넓이까지 묻게 하면 두 삼각형 넓이 합으로 ★3."
```

```yaml
- id: GN-ALG-206-476
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼각형 ABC 에서 sin A = √2 sin B = 2 sin C 일 때 최대각 θ 에 대하여 cos θ 의 값을 구한다.
  category: "사인 관계식 → 변의 비 → 최대각의 코사인"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin 의 관계식을 변의 관계식 a=√2 b=2c 로 옮기고 c 를 기준으로 a:b:c=2:√2:1 을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사인 비 → 변 비 → 최대각의 코사인"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관계식이 비가 아니라 등식 사슬로 주어져 한 문자를 기준으로 정리하는 단계가 하나 더 있다(c=1 로 두면 a=2, b=√2). 최대변 a 의 대각이 θ 이고 cos θ=(2+1-4)/(2√2)<0 으로 둔각이 나온다(T-부호). 통찰 1개(RT d1)·M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "사인법칙으로 a=√2 b=2c → a:b:c=2:√2:1 → 최대변 a 의 대각에 변형꼴 → cos θ=-√2/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/206-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사슬의 계수(√2, 2)를 바꿀 수 있다. 제약: 얻어진 세 변이 삼각형 부등식을 만족해야 하고(2, √2, 1 은 √2+1>2 로 성립) 최대변이 어느 것인지 바뀌면 묻는 각도 바뀐다. cos 이 유리화 가능한 꼴로 떨어지게 할 것."
    creative: "(1) θ 대신 최소각의 cos 을 묻기(★2) (2) 계수를 문자 k 로 두고 '둔각삼각형이 되는 k 의 범위'를 묻기(★4 · I-BW+I-MI) (3) cos θ 를 주고 사인 관계식의 계수를 되묻는 역방향(★3)."
```

```yaml
- id: GN-ALG-206-477
  page: 206
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼각형 ABC 에서 sin((A-B+C)/2)·sin C = sin A 가 성립할 때 삼각형의 모양을 고른다. 5지선다.
  category: "합성각 환원 → 변만의 식 → 모양 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내각의 합으로 (A-B+C)/2=90°-B 로 바꾸고 sin(90°-B)=cos B 로 환원해 식을 cos B·sin C=sin A 로 정리"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin→변, cos B 는 코사인법칙 변형꼴로 치환해 각이 없는 변만의 식 c²=a²+b² 로 통합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "각의 합 변환 + 코사인법칙으로 삼각형의 모양 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    205-e9(모양 결정) 앞에 204-469 의 합성각 환원이 한 겹 더 붙은 합성 문항이다. 90°-B 로 접는 첫 단계를 못 보면 식이 움직이지 않고, 그 뒤는 사인법칙·변형꼴 치환이라는 이 단원의 표준 골조다. 통찰 2개(EQV d2 + RT d1)·M_total 7 → STEP 1 출발점 ★2 에서 +1 한 ★3.
  tier: star_3
  mechanism_primary: "(A-B+C)/2=90°-B → cos B·sin C=sin A → 사인법칙·변형꼴 치환 → c²=a²+b² → C=90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/206-477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 거의 없는 문항이라 숫자 변형 여지는 작다. 바꿀 수 있는 것은 합성각의 부호 배치((A+B-C)/2 등)와 우변의 sin 문자이며, 최종 식이 이름 있는 모양(직각·이등변)으로 떨어지도록 역산해서 맞춰야 한다."
    creative: "(1) 객관식을 서술형 '어떤 삼각형인지 말하시오'로 바꾸면 역대입 확인이 막혀 체감 ★3~4 (2) 합성각을 반각((B+C)/2 → 90°-A/2)으로 바꾸면 반각 처리가 붙어 ★4 (3) 결론을 주고 관계식의 빈칸을 채우게 하는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-ALG-207-478
  page: 207
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 사람이 학교에서 동시에 출발해 120° 를 이루며 각각 분속 100 m, 60 m 로 직선으로 걸을 때 10분 후 두 사람 사이의 거리를 km 단위로 구한다.
  category: "속력×시간 → 두 변 → 코사인법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 실생활 활용(속력·시간 → 두 지점 사이 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    205-e10 앞에 '속력×시간으로 두 변을 먼저 만든다'가 붙은 형태다(1000 m, 600 m). 그 뒤 d²=1000²+600²+600000 으로 코사인법칙 한 줄이고, 마지막에 m 를 km 로 바꾸는 단위 처리(T-단위)가 함정. 통찰 0 이지만 단계 둘과 큰 수 제곱으로 M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "10분 이동거리 1000 m·600 m → 끼인각 120° 코사인법칙 → 1960000 → 1400 m = 1.4 km"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1.4\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-207-478.png"
  latex: latex-bank/gn-alg/items/207-478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 속력·시간·끼인각을 바꿀 수 있다. 제약: 끼인각은 특수각, 두 변의 조합은 제곱합이 완전제곱수가 되게(1000-600-120° → 1400). 답의 단위(km)와 발문의 단위(분속 m)가 다른 설계를 유지하면 T-단위 함정이 살아 있다."
    creative: "(1) 두 사람의 거리를 주고 사잇각을 되묻기(★2 · I-BW d1) (2) 한 사람의 속력을 미지수로 두고 '거리가 1.4 km 가 되는 속력'을 묻기(이차방정식 ★3) (3) 세 사람으로 늘려 두 쌍의 거리를 묻기(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-207-479
  page: 207
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 ABC 에서 AB=√5, AC=√2, C=45° 일 때 sin A 의 값을 구한다.
  category: "코사인법칙으로 변 → 사인법칙으로 각의 사인"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙으로 변을 정한 뒤 사인법칙으로 각의 사인 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 각 C 가 두 변에 끼인 각이 아니라 sin A 를 바로 사인법칙에 넣을 수 없다. 먼저 코사인법칙을 a 의 이차방정식 a²-2a-3=0 으로 보고 양근 a=3 을 얻은 뒤(음근 -1 기각) 사인법칙 a/sin A=c/sin C 로 넘어가는 두 단계 연결이 골조다. [분류 이슈] 통찰 0 의 순수 절차라 ★2 후보지만 단계 셋·M_total 7 이고 벤더 STEP 2 신호를 존중해 ★3 유지.
  tier: star_3
  mechanism_primary: "코사인법칙을 a 의 이차방정식으로 → a=3 → 사인법칙 a/sin A=c/sin C → sin A=3√10/10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3\sqrt{10}}{10}$'
  answer_source: "답지"
  figure: "crop:fig-207-479.png"
  latex: latex-bank/gn-alg/items/207-479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC, C 를 바꿀 수 있다. 제약: 이차방정식의 판별식이 완전제곱이어야 하고 양근이 하나만 나오도록(상수항이 음수) 잡아야 하며, 각 C 는 cos 이 특수값인 각이어야 한다."
    creative: "(1) 양근이 둘 나오게 설계해 'sin A 의 값을 모두 구하라'로 바꾸기(★4 · I-MI d2) (2) sin A 대신 삼각형의 넓이나 외접원 반지름을 묻기(★3 유지) (3) sin A 를 주고 C 를 되묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-ALG-207-480
  page: 207
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    지평면 위 40 m 떨어진 두 지점 A, B 에서 하늘의 드론 P 를 볼 때 ∠PAB=75°, ∠PBA=60°, ∠PAQ=30° 이다. 드론의 높이를 구한다.
  category: "수평 삼각형에서 사선 → 연직 삼각형에서 높이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간 배치를 '두 관측점과 드론이 만드는 삼각형 PAB' 와 '올려본각이 있는 연직 삼각형 PAQ' 두 평면으로 분해해 각각 사인법칙·삼각비의 대상으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "측량(높이) 문제 — 두 평면 삼각형으로 분해해 사인법칙+삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 삼각형만으로는 높이가 나오지 않는다. 먼저 삼각형 PAB 에서 ∠APB=180°-75°-60°=45° 를 만들고 사인법칙으로 사선 AP=20√6 을 구한 뒤, 올려본각 30° 가 있는 연직 삼각형에서 높이=AP·sin30° 로 내려오는 2단 구조가 전부다. 통찰 1개(RT d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "∠APB=45° → 사인법칙으로 AP=20√6 → 연직 삼각형에서 높이=AP·sin30°=10√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\sqrt{6}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-207-480.png"
  latex: latex-bank/gn-alg/items/207-480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 의 길이와 세 각(75°, 60°, 30°)을 바꿀 수 있다. 제약: 두 밑각의 합이 180° 보다 작아야 하고 ∠APB 가 특수각(30·45·60)이 되게 맞춰야 사인법칙에서 값이 떨어진다. 올려본각도 특수각이어야 한다. 그림의 Q(수선의 발) 라벨은 고정."
    creative: "(1) 높이를 주고 ∠PAB 를 되묻는 역방향(★4 · I-BW d2) (2) 관측점을 셋으로 늘려 두 삼각형을 연립하게 하면 ★4 (3) 드론이 AB 위가 아닌 곳으로 이동해 두 올려본각만 주면 tan 연립이 되어 ★3~4."
```

```yaml
- id: GN-ALG-207-481
  page: 207
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    직육면체 ABCD-EFGH 에서 AB=1, AD=2, BF=1 일 때 그림에 표시된 각 θ(=∠FAH)의 코사인을 구한다.
  category: "공간도형 → 평면 삼각형 환원 → 코사인법칙"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직육면체의 두 대각선이 이루는 각을 삼각형 AFH 라는 하나의 평면도형으로 옮기고, 세 변을 각각 직각삼각형의 피타고라스로 확보"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직육면체(공간도형)에서 두 대각선이 이루는 각의 코사인"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    θ 가 어느 삼각형의 내각인지(∠FAH) 그림에서 읽어 내는 것이 첫 관문이고, 그다음은 AF=√2, AH=√5, FH=√5 를 피타고라스로 각각 구해 코사인법칙에 넣는 기계적 처리다. 세 길이를 서로 다른 면·대각에서 가져와야 해 단계는 셋. 통찰 1개(RT d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AF·AH·FH 를 피타고라스로 확보 → 삼각형 AFH 에서 코사인법칙 → cos θ=√10/10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{10}}{10}$'
  answer_source: "답지"
  figure: "crop:fig-207-481.png"
  latex: latex-bank/gn-alg/items/207-481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 1, 2, 1 을 바꿀 수 있다. 제약: 세 변의 제곱이 코사인법칙에서 약분돼 cos 이 유리화 가능한 꼴로 떨어지게 잡을 것(1-2-1 은 AH=FH 인 이등변이라 특히 깔끔하다). 그림의 꼭짓점 라벨과 θ 의 위치는 고정이므로 모서리 값만 바꾼다."
    creative: "(1) θ 를 다른 두 대각선 쌍(∠AGE 등)으로 옮기기(같은 골조 ★3) (2) 삼각형 AFH 의 넓이까지 묻기(sin 으로 넘어가 ★3) (3) 모서리 하나를 미지수로 두고 'θ 가 60° 가 되는 값'을 묻는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-ALG-207-482
  page: 207
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    AB=BC=6 인 직각이등변삼각형 ABC 의 빗변 AC 를 삼등분하는 점을 D, E 라 할 때 ∠DBE=θ 의 코사인을 구한다.
  category: "코사인법칙 2회(끝 삼각형 → 가운데 삼각형)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB=BC 와 삼등분의 대칭으로 BE=BD 임을 보고 한쪽만 계산 — 대칭을 쓰지 않으면 코사인법칙을 한 번 더 돌려야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "빗변의 등분점과 사잇각 — 코사인법칙 2회"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    θ 가 낀 삼각형 BDE 의 세 변 중 DE=2√2 만 바로 알 수 있고 BD, BE 는 끝 삼각형 ABD 에서 ∠A=45° 를 써서 코사인법칙으로 만들어야 한다(BD=2√5). 이등변 대칭으로 BE 는 다시 계산하지 않는다. 코사인법칙을 층을 바꿔 두 번 쓰는 구조 · 통찰 1개(SYM d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AC=6√2·AD=2√2 → 삼각형 ABD 에서 코사인법칙으로 BD=2√5(대칭으로 BE 도 같음) → 삼각형 BDE 에서 코사인법칙 → cos θ=4/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: "crop:fig-207-482.png"
  latex: latex-bank/gn-alg/items/207-482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이 6 과 등분 수(삼등분)를 바꿀 수 있다. 제약: 대칭을 유지하려면 AB=BC 를 지켜야 하고, BD² 가 완전제곱수가 되도록 길이를 잡아야 cos 이 유리수로 떨어진다. 사등분·오등분으로 늘리면 점의 라벨과 대칭축이 함께 바뀐다."
    creative: "(1) AB≠BC 로 바꾸면 대칭이 깨져 코사인법칙 3회가 되고 ★4 (2) ∠ABD 를 묻게 해 한 겹만 쓰게 하면 ★2 (3) 삼각형 BDE 의 넓이를 묻기(sin θ 로 넘어가 ★3 유지) (4) 등분점을 사등분으로 늘려 ∠DBE 가 최대가 되는 점을 찾게 하면 ★4~5."
```

```yaml
- id: GN-ALG-208-483
  page: 208
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원에 내접하는 사각형 ABCD 에서 AB=1, BC=2, CD=3, DA=4 일 때 cos A 의 값을 구한다.
  category: "대각선을 두 삼각형에서 두 번 표현 → 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내접사각형의 대각 관계 C=180°-A 를 cos C=-cos A 로 바꿔 두 삼각형이 같은 미지수 하나만 쓰게 만듦"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대각선 BD² 를 삼각형 ABD 와 삼각형 CBD 에서 각각 표현하고 같다고 놓아 두 조건을 cos A 에 대한 일차식 하나로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 대각선(코사인법칙 2회 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 변만 주어져 어느 삼각형도 혼자서는 닫히지 않는다. 보조선 BD 를 긋고 같은 길이를 두 번 표현한 뒤 cos C=-cos A 로 미지수를 하나로 줄이면 17-8cos A=13+12cos A 라는 일차식이 남는다. [분류 이슈] 통찰 2개라 +1 후보지만 라벨이 EQV·CON 뿐이고(저노출 유형 SC/VF/SYM/XU·RT/PD/BW 없음) 내접사각형의 정형 골조라 STEP 2 출발점 ★3 을 유지했다 — 카탈로그 작성 때 ★4 재검토 대상.
  tier: star_3
  mechanism_primary: "대각선 BD 를 두 삼각형에서 코사인법칙으로 표현 → cos C=-cos A 로 미지수 통일 → 일차식 → cos A=1/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: "crop:fig-208-483.png"
  latex: latex-bank/gn-alg/items/208-483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 변 1, 2, 3, 4 를 바꿀 수 있다. 제약: 네 변이 원에 내접하는 사각형을 실제로 만들 수 있어야 하고(마주 보는 변의 조합 조건) 최종 cos 이 -1 과 1 사이의 유리수로 떨어지도록 잡을 것. 꼭짓점 순서 A-B-C-D 와 변의 대응은 그림과 고정."
    creative: "(1) cos A 대신 대각선 BD 나 사각형의 넓이를 묻기(★3 유지~★4) (2) 변 하나를 미지수로 두고 cos A=1/5 이 되게 하는 값을 묻는 역방향(★4 · I-BW d2) (3) 내접 조건을 빼면 사각형이 결정되지 않으므로 대신 한 각을 주면 ★2 로 내려간다."
```

```yaml
- id: GN-ALG-208-484
  page: 208
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    원에 내접하는 사각형 ABCD 에서 AB=5, AC=3√5, AD=7 이고 ∠BAC=∠CAD 일 때 이 원의 반지름을 구한다. 5지선다.
  category: "등각 → 등현 → 코사인법칙 연립 → 사인법칙"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠BAC=∠CAD 라는 각의 조건을 '같은 크기의 원주각이 마주 보는 현은 같다' 즉 BC=CD 라는 변의 조건으로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 ABC 와 삼각형 ACD 에서 BC², CD² 를 각각 코사인법칙으로 쓰고 같다고 놓아 공통 미지수 cos∠BAC 를 하나의 일차식으로 결정"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 BC 와 그 대각 ∠BAC 를 사인법칙 BC/sin∠BAC=2R 에 넣어 사각형의 외접원 반지름으로 환원"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "원에 내접하는 사각형·각의 이등분 → 코사인법칙 연립 → 외접원의 반지름"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각이 같다는 조건을 현이 같다는 조건으로 번역하지 못하면 미지수가 둘로 남아 풀리지 않는다. 번역 뒤에는 두 삼각형의 코사인법칙을 연립해 cos∠BAC=2√5/5 를 얻고, 다시 BC=√10 과 사인법칙으로 R 을 만든다. 도구를 세 번 갈아타는 구조 · 통찰 3개 · M_total 8 · 수능 기출 → STEP 2 출발점 ★3 에서 +1 한 ★4. SC/VF/SYM/XU 가 없어 ★5 는 아니다.
  tier: star_4
  mechanism_primary: "등각 → BC=CD → 두 삼각형의 코사인법칙 연립으로 cos∠BAC → BC=√10 → 사인법칙 BC/sin∠BAC=2R → R=5√2/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-208-484.png"
  latex: latex-bank/gn-alg/items/208-484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC, AD 를 바꿀 수 있다. 제약: 연립에서 나온 cos 이 -1<cos<1 이어야 하고 sin 이 유리화 가능한 무리수로 떨어져야 선택지가 깔끔하다. AB<AC<AD 순서와 ∠BAC=∠CAD 조건은 그림 배치와 함께 고정."
    creative: "(1) 반지름 대신 BC 나 사각형 ABCD 의 넓이를 묻기(★3~4) (2) ∠BAC=∠CAD 를 'AC 가 ∠A 를 이등분한다'로 바꿔 각의 이등분선 정리와의 갈래를 만들면 I-SC 가 붙어 ★5 후보 (3) AD 를 미지수로 두고 반지름이 주어진 값이 되게 하는 AD 를 묻는 역방향(★4~5)."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-208-485
  page: 208
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    ∠ABC=π/2 인 삼각형 ABC 에 내접하는 반지름 3 인 원의 중심을 O, 직선 AO 와 선분 BC 의 교점을 D 라 할 때 DB=4 이다. 삼각형 ADC 의 외접원의 넓이를 구한다. 5지선다.
  category: "내접원 배치 → 두 변 결정 → 사인법칙으로 외접원"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내접원의 중심이 직각인 꼭짓점 B 로부터 두 변 쪽으로 각각 3 만큼 떨어져 있다는 사실을 좌표(또는 닮은 삼각형)로 옮겨, A·O·D 가 한 직선이라는 조건에서 AB=12 를 뽑아냄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직각삼각형의 내접원 반지름 관계 r=(AB+BC-AC)/2=3 을 세워 남은 두 변 BC=9, AC=15 를 한 번에 결정"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 ADC 의 외접원을 AD 와 그 대각 C 의 사인법칙 AD/sin C=2R 로 환원(sin C 는 원래 직각삼각형에서 AB/AC)"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "직각삼각형의 내접원·각의 이등분선과 외접원의 넓이(사인법칙)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    주어진 것은 r=3 과 DB=4 뿐인데 구할 것은 다른 삼각형의 외접원 넓이라, 배치를 수치로 바꾸는 첫 단계가 전부를 좌우한다. B 를 원점으로 두면 O(3,3)·D(4,0) 이고 A·O·D 공선에서 AB=12, 이어서 직각삼각형 내접원 관계로 BC=9·AC=15 가 한꺼번에 나온다. 그 뒤 DC=5, AD=4√10, sin C=4/5 로 R=5√10/2. 통찰 3개·M_total 9·교육청 기출 → 실력 UP 출발점 ★4 유지. 라벨이 RT·EQV 뿐이라(SC/VF/SYM/XU 없음) ★5 는 아니다.
  tier: star_4
  mechanism_primary: "B 기준 좌표로 O(3,3)·D(4,0) → A·O·D 공선에서 AB=12 → r=(AB+BC-AC)/2 로 BC=9·AC=15 → 삼각형 ADC 에서 AD/sin C=2R → 넓이 125π/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-208-485.png"
  latex: latex-bank/gn-alg/items/208-485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내접원의 반지름 3 과 DB=4 를 바꿀 수 있다. 제약: 두 값이 정해지면 AB·BC·AC 가 모두 결정되므로 세 변이 정수(여기서는 12-9-15)로 떨어지는 조합을 역산해서 골라야 하고, DB>r 이어야 D 가 접점 바깥에 놓인다. 직각의 위치 B 와 점 O·D 의 라벨은 그림과 고정."
    creative: "(1) 넓이 대신 삼각형 ADC 의 외접원 반지름이나 AD 의 길이를 묻기(★4 유지) (2) 직각 조건을 빼고 세 변을 주면 내접원 중심 좌표를 못 써 각의 이등분선 정리로 갈래가 생기고 I-SC 가 붙어 ★5 (3) 삼각형 ABD 쪽 외접원으로 바꿔 물으면 sin 의 대응이 달라져 ★4."
```

```yaml
- id: GN-ALG-208-486
  page: 208
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    세 변의 길이가 x²+x+1, 2x+1, x²-1 인 삼각형의 최대각의 크기를 구한다.
  category: "문자 변의 대소 판정 → 코사인법칙 → 인수분해"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "변이 x 의 식이라 어느 것이 최대변인지 경우를 따져야 하고, 동시에 x²-1>0 과 삼각형 부등식에서 x>1 이라는 성립 범위를 스스로 확보해야 함"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "변형꼴의 분자를 전개하면 -(2x+1)(x²-1) 로 인수분해되어 분모 2(2x+1)(x²-1) 와 약분되고, cos 이 x 에 무관한 상수 -1/2 로 떨어진다는 것을 확인"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "문자 변을 가진 삼각형의 최대각(전개·인수분해로 cos 이 상수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수치 문항(204-e7)과 골조는 같지만 변이 문자식이라 두 관문이 생긴다 — x>1 범위에서 x²+x+1 이 최대변임을 확정하는 것과, 4차식 전개를 끝까지 밀어 -(2x+1)(x²-1) 로 묶이는 것을 보는 것이다. 전개하다 멈추면 '깔끔해지지 않는다'고 판단해 포기하기 쉽다. 통찰 2개·M_total 10 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "x>1 확인·최대변 x²+x+1 확정 → 변형꼴 분자 전개 → -(2x+1)(x²-1) 인수분해·약분 → cos=-1/2 → 120°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$120^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/208-486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 다항식을 바꾸려면 'cos 이 x 에 무관한 특수값'이라는 성질부터 역산해야 한다. 제약: 분자가 분모의 인수로 통째로 묶이는 조합만 성립하므로 계수를 임의로 손대면 상수로 떨어지지 않는다. 성립 범위(여기서는 x>1)가 공집합이 되지 않는지도 함께 확인할 것."
    creative: "(1) 최소각을 묻게 바꾸면 최소변 판정이 x 범위에 따라 갈려 I-MI 가 깊어지고 ★4~5 (2) '최대각이 120° 가 되게 하는 x'를 묻는 역방향으로 바꾸면 항등적으로 성립해 오히려 ★3 (3) 세 변을 x 의 일차식으로 낮추면 인수분해 관문이 사라져 ★3."
```

```yaml
- id: GN-ALG-208-487
  page: 208
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    삼각형 ABC 에서 sin A : sin B = √2 : 1 이고 c² = b² + ac 일 때 C 의 크기를 구한다.
  category: "사인 비 → 변 비 → 이차방정식 → 특수각 환원"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사인법칙으로 sin A:sin B=√2:1 을 변의 관계 a=√2 b 로 옮겨 조건식을 b, c 두 문자만의 식으로 줄임"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "c²-√2 bc-b²=0 을 c 에 대한 이차방정식으로 보고 근의 공식으로 c 를 b 로 표현, 길이는 양수이므로 c=(√2+√6)b/2 만 채택"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cos C=(√2-√6)/4 라는 낯선 값을 cos105°=cos(60°+45°) 로 되읽어 각으로 환원"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "사인 비와 변의 관계식 → 이차방정식 → 특수각(105°) 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 c²=b²+ac 를 그대로 코사인법칙에 넣으면 cos C=(2b²-√2bc)/(2√2b²) 까지는 가지만 c 를 b 로 표현하지 않으면 값이 나오지 않는다. 그래서 이차방정식으로 보는 단계가 필수고, 마지막에 (√2-√6)/4 를 특수각 105° 로 되읽는 관문이 하나 더 있다. 통찰 3개·M_total 9 → 실력 UP 출발점 ★4 유지. SC/VF/SYM/XU 가 없어 ★5 는 아니다.
  tier: star_4
  mechanism_primary: "사인 비 → a=√2 b → c²-√2bc-b²=0 의 양근으로 c 를 b 로 표현 → cos C=(√2-√6)/4 → 105°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$105^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/208-487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사인 비 √2:1 과 관계식 c²=b²+ac 의 계수를 바꿀 수 있다. 제약: 최종 cos 이 15·75·105·165° 같은 덧셈정리로 읽히는 값이나 특수각으로 떨어져야 각을 답할 수 있고, 이차방정식의 판별식이 양수이며 양근이 하나만 살아남아야 한다."
    creative: "(1) C 대신 A 또는 삼각형의 모양을 묻기(★4 유지) (2) 관계식을 c²=b²+ab 로 바꾸면 cos 이 특수각에서 벗어나 값만 묻는 ★3 (3) '이 삼각형이 둔각삼각형인지 판정하라'로 바꾸면 부호만 보면 되어 ★3 (4) 사인 비를 문자 k:1 로 두고 C=105° 가 되는 k 를 묻는 역방향(★5 후보 · I-BW d3)."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 2 · ★2 12 · ★3 8 · ★4 4 · ★5 0
- 통찰형 18 · 절차형 8 · premium 0
- 통찰 라벨 분포: I-RT 11 · I-EQV 9 · I-CON 2 · I-SYM 1 · I-MI 1 (총 24 라벨 · depth 3 없음)
- type_hint 상위(골조 계열로 묶음): 「사인 비·사인 관계식 → 변의 비 → 각」 4(204-e8 · 204-469 · 206-474 · 206-476) · 「원에 내접하는 사각형과 코사인법칙」 3(206-475 · 208-483 · 208-484) · 「변만의 식으로 삼각형의 모양 결정」 3(205-e9 · 205-470 · 206-477) · 「최대각·최소각(최대변·최소변의 대각)」 3(204-e7 · 204-468 · 208-486) · 「실생활·측량 활용」 3(205-e10 · 207-478 · 207-480) · 「코사인법칙 기본 대입·SSA 이차방정식」 3(203-e6 · 203-467 · 206-472)
- 대상층: 하위권 2 · 중하위권 6 · 중위권 12 · 중상위권 5 · 상위권 1
- 그림: 11문(`crop:fig-205-e10.png` · `crop:fig-205-471.png` · `crop:fig-206-475.png` · `crop:fig-207-478.png` · `crop:fig-207-479.png` · `crop:fig-207-480.png` · `crop:fig-207-481.png` · `crop:fig-207-482.png` · `crop:fig-208-483.png` · `crop:fig-208-484.png` · `crop:fig-208-485.png`). 이 중 발문만으로 배치가 복원되지 않아 크롭을 확인한 것은 207-481 하나(θ 가 ∠FAH 임)이고 나머지는 발문에 길이·각이 모두 적혀 있다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-204-469 | 벤더 「확인체크」(★1 출발)이지만 (B+C-A)/2=90°-A 환원 + 사인 비 전환으로 통찰 2개 → ★3. 벤더 신호와 2단 차이라 기록. 대응 필수 예제 204-e8(★2) 기준으로는 +1 | ★2 / ★3 |
| GN-ALG-207-479 | 벤더 STEP 2(★3 출발)이나 통찰 0 의 순수 2단 절차(코사인법칙 → 사인법칙). M_total 7 이라 −1 조건에는 걸리지 않아 ★3 유지 | ★2 / ★3 |
| GN-ALG-208-483 | 통찰 2개(EQV·CON)로 +1 후보지만 저노출 유형이 하나도 없고 내접사각형의 정형 골조라 ★3 유지. 카탈로그 작성 때 ★4 재검토 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「사인 비 → 변의 비 → 코사인법칙」(4문 · 이 단원의 사실상 대표 유형이고 뒤 단원까지 이어진다) ② 「변만의 식으로 삼각형의 모양 결정」(3문 · 사인법칙+변형꼴 치환이라는 고정 절차가 있어 독립 유형) ③ 「원에 내접하는 사각형」(3문 · cos 의 부호 전환 + 대각선 이중 표현이라는 고유 장치) ④ 「측량·실생활 활용」(3문 · 배치를 삼각형으로 옮기는 단계가 공통) ⑤ 「합성각 (B+C-A)/2 환원」(2문 · 204-469·206-477 은 코사인법칙보다 내각의 합이 주 장치여서 삼각함수 단원 쪽 유형과 겹칠 수 있다 — 소속을 정해야 함).
- **통합해도 될 유형**: 「코사인법칙 기본 대입」과 「최대각·최소각」은 최대변 판정 한 단계 차이뿐이라 한 유형의 난이도 2단계로 묶는 편이 낫다(203-e6 · 203-467 · 204-e7 · 204-468). 「공간도형에서 두 대각선이 이루는 각」(207-481)과 「삼각형 내부 선분의 사잇각」(207-482)도 '세 변을 따로 확보한 뒤 코사인법칙'이라는 같은 골조여서 한 유형으로 묶고 배치만 변형으로 둘 수 있다.
- **base ★ 제안**: 기본 대입 ★1~2 · 최대각/최소각 ★2 · 사인 비 환원 ★2 · 모양 결정 ★2~3 · 내접사각형 ★3 · 측량 ★2~3 · 공간/내부 선분 ★3 · 내접원+외접원 결합 ★4 · 문자 변 최대각 ★4.
