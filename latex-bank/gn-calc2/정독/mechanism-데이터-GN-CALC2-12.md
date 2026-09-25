---
name: mechanism-데이터-GN-CALC2-12
description: 개념원리 미적분Ⅱ 12 삼각함수의 덧셈정리(1/1 · 101~107쪽 · 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 12 삼각함수의 덧셈정리
  unit_code: GN-CALC2-12
  part: "1/1"
  extract_range: "101~107쪽 · 101-201~107-219"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 12 삼각함수의 덧셈정리 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 12단원 「삼각함수의 덧셈정리」 101~107쪽 23문항 전수(101-201~107-219)를 다룬다. 구역은 개념원리 익히기 3문 · 필수·발전 예제 구역 11문(필수 예제 3 + 확인체크 8) · 특강 3문(특강 예제 1 + 확인체크 2) · 연습문제 STEP 1 2문 · STEP 2 3문 · 실력 UP 1문이다.

개념원리 고등의 난이도 신호는 구역과 태그다. 「개념원리 익히기」의 통번호 문항은 개념 확인이라 ★1 출발, 「필수」 예제는 ★2, 「특강」 예제와 그 확인체크는 교육과정 심화라 ★2~3, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이다. 여기에 M_total 과 통찰로 ±1 만 조정했고, 벤더 신호와 2단 이상 어긋난 문항은 없다. 이 단원은 덧셈정리 → 배각 → 두 직선이 이루는 각 → 삼각함수의 합성으로 도구가 한 줄로 이어져, 같은 골조를 각도·사분면·계수만 바꿔 반복하는 문항이 많다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-101-201
  page: 101
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $\cos 75^\circ$ 를 $45^\circ+30^\circ$ 으로 분해해 코사인 덧셈정리로 전개하는 과정의 빈칸을 채우는 문제.
  category: '특수각 분해 → 코사인 덧셈정리 전개 → 특수각 값 대입'
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '특수각 분해와 덧셈정리로 삼각함수 값 구하기(과정 빈칸 채우기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 전개 순서를 그대로 제시하므로 학생은 분해각과 공식의 각 항만 채운다. 판단 단계는 75°=45°+30° 하나. 개념원리 익히기 구역·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: '75°=45°+30° 분해 → cos(A+B)=cosAcosB−sinAsinB 전개 → 특수각 값 대입 → (√6−√2)/4'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$, $\cos 30^\circ$, $\sin 45^\circ$, $\sin 30^\circ$, $\dfrac{\sqrt{3}}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{1}{2}$, $\dfrac{\sqrt{6}-\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/101-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분해 대상 각을 15°(45°−30°) · 105°(60°+45°) · 165°(120°+45°) 로 바꿀 수 있다. 제약: 두 특수각의 합·차로 떨어져야 하고, 빈칸 수가 전개 항 수와 맞아야 하며 마지막 값이 유리화된 꼴로 정리돼야 한다.'
    creative: '(1) sin 75° · tan 75° 로 공식만 교체(★1 유지) (2) 분해각 빈칸을 없애고 학생이 분해를 정하게 하면 ★2 (3) 완성한 결과로 cos 15° 를 여각 관계에서 즉시 쓰게 하면 동치 변환 통찰이 들어가 ★2.'
```

```yaml
- id: GN-CALC2-101-202
  page: 101
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\sin 15^\circ$, $\cos\dfrac{\pi}{12}$, $\tan\dfrac{5}{12}\pi$, $\sec 105^\circ$ 의 값을 구한다(특수각의 합·차로 분해).
  category: '특수각 합·차 분해 → 덧셈정리 → 유리화'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '특수각의 합·차로 분해하여 삼각함수 값 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 특수각 두 개의 합·차로 분해해 공식에 대입하는 같은 골조다. ⑶은 탄젠트 덧셈정리 뒤 유리화, ⑷는 sec=1/cos 로 되돌린 뒤 유리화가 한 단계 더 붙지만 판단은 늘어나지 않는다. 익히기·통찰 없음 → ★1.
    [분류 이슈] 유리화가 네 번 들어가 M_total 6 이라 계산량만 보면 ★2 후보. 구역 신호(개념 확인)를 따라 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: '각을 45°±30° · 60°+45° 꼴로 분해 → 해당 덧셈정리 → 분모 유리화(⑷는 sec=1/cos 먼저)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\sqrt{6}-\sqrt{2}}{4}$ ⑵ $\dfrac{\sqrt{2}+\sqrt{6}}{4}$ ⑶ $2+\sqrt{3}$ ⑷ $-\sqrt{2}-\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/101-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 75° · 7π/12 · 13π/12 · 195° 등으로 교체 가능. 제약: 특수각(30·45·60·90의 배수) 두 개의 합·차여야 하고, tan 은 1−tanAtanB 가 0 이 되는 조합(예: 90°)을 피해야 한다. csc·cot 로 바꾸면 역수 단계가 하나 더 붙는다.'
    creative: '(1) 값이 아니라 두 값의 곱·합(sin15°·cos15°)을 묻기(배각과 연결 ★2) (2) 분해를 여러 갈래로 만들 수 있는 각(105°=60°+45°=150°−45°)을 주고 같은 값임을 확인시키면 전략 선택이 들어가 ★2 (3) 유리화 없이 대소 비교만 묻기(★1).'
```

```yaml
- id: GN-CALC2-101-203
  page: 101
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 주어진 식을 덧셈정리의 우변으로 보고 한 각의 삼각함수로 묶어 값을 구한다. ⑷ $\sin 80^\circ\sin 125^\circ-\sin 10^\circ\sin 35^\circ$ 는 여각 변환을 먼저 거쳐야 코사인 덧셈정리 꼴이 된다.
  category: '식을 덧셈정리 우변으로 인식 → 한 각으로 묶기 → 특수각 값'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'sin 80°=cos 10°, sin 125°=cos 35° 로 여각 변환해야 cos(10°+35°) 꼴이 드러난다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '덧셈정리 공식의 역방향 인식(주어진 식을 한 각으로 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶은 공식 우변을 좌변으로 되읽는 한 단계다. ⑷만 sin 을 cos 으로 여각 변환해야 같은 골조가 보이므로 동치 변환 통찰 1개(EQV d1). 익히기 출발 ★1 에 이 한 단계를 반영해 ★2.
  tier: star_2
  mechanism_primary: '식의 꼴로 덧셈정리 우변 판별 → 두 각을 합·차로 묶기 → 특수각 값(⑷는 여각 변환 선행)'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{\sqrt{3}}{2}$ ⑵ $\dfrac{\sqrt{3}}{2}$ ⑶ $\dfrac{\sqrt{3}}{3}$ ⑷ $\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/101-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 각의 합·차가 특수각이 되도록 짝을 바꾸면 된다(35°+25° · 50°−20° · 65°+55°). 제약: 묶은 각이 특수각이어야 하고, tan 꼴은 분모가 1−tanAtanB 형태로 정확히 맞아야 한다.'
    creative: '(1) 부호를 어긋나게 주어 덧셈정리 꼴이 아님을 판별하게 하기(★2) (2) 여각 변환이 필요한 소문항 비중을 늘리면 ★3 (3) sin(A+B)+sin(A−B) 처럼 두 식을 더해 곱으로 정리하게 하면 합·곱 변환으로 확장 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-102-e6
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    제1사분면의 각 $\alpha$, $\beta$ 에 대해 $\sin\alpha=\dfrac{5}{13}$, $\sin\beta=\dfrac{3}{5}$ 일 때 ⑴ $\sin(\alpha+\beta)$ ⑵ $\cos(\alpha-\beta)$ ⑶ $\tan(\alpha-\beta)$.
  category: '사분면으로 나머지 삼각비 부호 결정 → 덧셈정리 세 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수의 덧셈정리(사분면 조건으로 부호 결정 후 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피타고라스 항등식으로 cos 값을 구하고 제1사분면이므로 모두 양수로 확정한 뒤 공식 세 번 대입한다. 판단 분기가 없는 표준 절차이며 13-5-12, 5-3-4 두 정수 직각삼각형이라 계산도 가볍다. 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'sin 에서 cos 을 피타고라스로 → 제1사분면이라 양수 확정 → sin(α+β) · cos(α−β) · tan(α−β) 공식 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{56}{65}$ ⑵ $\dfrac{63}{65}$ ⑶ $-\dfrac{16}{63}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/102-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sin 값을 다른 정수 직각삼각형 비(8/17 · 7/25 · 24/25)로 교체. 제약: 두 값이 모두 정수 삼각형이어야 답이 기약분수로 떨어지고, 제1사분면을 유지하면 부호 판단이 빠진다.'
    creative: '(1) α 만 제2사분면으로 옮겨 부호 판단을 넣기(★2 유지, T-부호 추가) (2) 하나를 cos 으로 주고 다른 하나를 tan 으로 주면 변환 단계가 늘어 ★2~3 (3) α+β 가 예각인지까지 판정하게 하면 검증 단계가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-102-204
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<\alpha<\dfrac{\pi}{2}$, $\pi<\beta<\dfrac{3}{2}\pi$ 이고 $\sin\alpha=\dfrac{4}{5}$, $\cos\beta=-\dfrac{3\sqrt{10}}{10}$ 일 때 ⑴ $\sin(\alpha-\beta)$ ⑵ $\cos(\alpha+\beta)$ ⑶ $\tan(\alpha+\beta)$.
  category: '각의 범위로 부호 결정 → 덧셈정리 세 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수의 덧셈정리(사분면 조건으로 부호 결정 후 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 과 같은 골조이나 β 가 제3사분면이라 sinβ 를 음수로 확정하는 T-부호 판단이 들어간다. 무리수 비(√10)라 계산이 조금 무겁지만 분기는 없다. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'cosα=3/5 · sinβ=−√10/10 을 범위로 확정 → 덧셈정리 대입 → tan 은 sin/cos 으로 정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{9\sqrt{10}}{50}$ ⑵ $-\dfrac{\sqrt{10}}{10}$ ⑶ $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/102-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'β 의 범위를 제2·제4사분면으로 옮기고 cosβ 값을 −√5/5 · −2√5/5 등으로 교체. 제약: 주어진 값이 범위와 모순되지 않아야 하고(제3사분면이면 cosβ<0), 유리화된 형태로 답이 정리돼야 한다.'
    creative: '(1) 범위를 주지 않고 가능한 값을 모두 구하게 하면 다중 해석이 생겨 ★3 (2) sin(α−β) 값만 주고 역으로 β 의 범위를 판정하게 하면 역추적 ★3 (3) tan(α+β) 만 묻고 탄젠트 덧셈정리로 직접 가게 하면 ★2.'
```

```yaml
- id: GN-CALC2-102-205
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<\alpha<\dfrac{\pi}{2}$, $\dfrac{\pi}{2}<\beta<\pi$ 이고 $\sin\alpha=\dfrac{3}{5}$, $\sin\beta=\dfrac{4}{5}$ 일 때 $\sin(\alpha+\beta)-\cos(\alpha-\beta)$ 의 값.
  category: '범위로 cos 부호 결정 → 두 덧셈정리 전개 → 차 계산'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수의 덧셈정리(사분면 조건으로 부호 결정 후 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cosα=4/5(양) · cosβ=−3/5(음)만 정확히 잡으면 두 식을 전개해 빼는 한 줄이다. 두 각의 sin 이 3/5, 4/5 로 비슷해 부호를 놓치기 쉬운 것이 유일한 함정. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: 'cosα=4/5 · cosβ=−3/5 확정 → sin(α+β)와 cos(α−β) 전개 → 두 값의 차'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/102-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sin 값을 5-12-13 조합(5/13, 12/13)으로 바꾸고 사분면을 조정. 제약: 같은 정수 삼각형을 쓰면 답이 분모 169 로 깔끔하게 떨어지고, 두 각의 범위가 겹치지 않아야 부호가 하나로 결정된다.'
    creative: '(1) 두 식의 합으로 바꾸면 교차항이 소거돼 더 짧아진다(★2 이하) (2) sin(α+β)−cos(α−β) 를 먼저 정리해 (sinα−cosα)(cosβ+sinβ) 꼴로 묶게 하면 인수분해 착안 ★3 (3) α+β 의 사분면까지 판정시키면 ★3.'
```

```yaml
- id: GN-CALC2-102-206
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $2x^2-4x+1=0$ 의 두 근이 $\tan\alpha$, $\tan\beta$ 일 때 $\tan(\alpha+\beta)$ 의 값.
  category: '근과 계수의 관계 → 탄젠트 덧셈정리 대입'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '이차방정식의 근과 계수의 관계로 두 근의 합·곱을 읽어 탄젠트 덧셈정리 분자·분모에 그대로 넣는 결합'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '이차방정식의 두 근이 tanα, tanβ일 때 tan(α+β)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근을 직접 구하지 않고 합 2 · 곱 1/2 만 쓰면 tan(α+β)=2/(1−1/2)=4 한 줄이다. 방정식 단원 도구와 덧셈정리를 잇는 결합 통찰 1개(XU d1)이지만 대응이 1:1 로 고정된 표준 유형이라 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '근과 계수의 관계로 tanα+tanβ=2, tanαtanβ=1/2 → tan(α+β)=합/(1−곱)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/102-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿔 합·곱을 조절한다(x²−5x+2 → 합 5 곱 2 → −5). 제약: 1−(두 근의 곱) ≠ 0 이어야 하고(곱이 1 이면 α+β=π/2 로 정의되지 않음), 판별식 D>0 으로 실근이 존재해야 한다.'
    creative: '(1) 두 근의 곱이 1 인 방정식을 주고 α+β 를 묻기(정의되지 않는 경계 판정 ★3) (2) tan(α+β) 값을 주고 계수를 역추적(★3, BW) (3) 두 근이 tanα, tanβ 이고 α+β 가 예각·둔각인지까지 묻기(부호 판정 ★3).'
```

```yaml
- id: GN-CALC2-103-e7
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\cos\alpha=-\dfrac{3}{4}$, $\dfrac{\pi}{2}<\alpha<\pi$ 일 때 ⑴ $\sin 2\alpha$ ⑵ $\cos 2\alpha$ ⑶ $\tan 2\alpha$.
  category: '범위로 sinα 부호 결정 → 배각의 공식 세 개'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '배각의 공식(사분면 조건으로 부호 결정 후 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sinα=√7/4(제2사분면이므로 양수)를 잡고 배각 세 공식에 대입한다. cos2α 는 2cos²α−1 을 쓰면 sinα 없이도 나와 계산이 짧다. 분기 없는 표준 절차라 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: 'sinα=√7/4 확정 → sin2α=2sinαcosα · cos2α=2cos²α−1 · tan2α=sin2α/cos2α'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{3\sqrt{7}}{8}$ ⑵ $\dfrac{1}{8}$ ⑶ $-3\sqrt{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/103-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'cosα 를 −1/3 · 2/5 · −4/5 로, 범위를 다른 사분면으로 교체. 제약: 무리수가 남는 값이면 tan2α 유리화가 필요하고, cos2α 가 0 이 되는 값(cos²α=1/2)은 tan2α 가 정의되지 않으므로 피한다.'
    creative: '(1) 2α 의 사분면까지 판정하게 하기(★3) (2) sin2α 값을 주고 cosα 를 역추적(BW ★3) (3) 반각으로 바꿔 α/2 의 값을 묻기(범위 판정이 핵심이 되어 ★3).'
```

```yaml
- id: GN-CALC2-103-207
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\sin\alpha=-\dfrac{2\sqrt{2}}{3}$, $\dfrac{3}{2}\pi<\alpha<2\pi$ 일 때 ⑴ $\sin 2\alpha$ ⑵ $\cos 2\alpha$ ⑶ $\tan 2\alpha$.
  category: '범위로 cosα 부호 결정 → 배각의 공식 세 개'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '배각의 공식(사분면 조건으로 부호 결정 후 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e7 과 같은 골조. 제4사분면이라 cosα=1/3(양수)로 확정한 뒤 배각 세 공식에 넣는다. cos2α 는 1−2sin²α 를 쓰면 무리수가 사라진다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: 'cosα=1/3 확정 → sin2α=2sinαcosα · cos2α=1−2sin²α · tan2α=sin2α/cos2α'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{4\sqrt{2}}{9}$ ⑵ $-\dfrac{7}{9}$ ⑶ $\dfrac{4\sqrt{2}}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/103-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sinα 를 −√3/2 · 3/5 · −1/4 로 바꾸고 범위를 맞춘다. 제약: |sinα|≤1 과 범위의 부호가 일치해야 하고, cos2α=0 이 되는 값은 tan2α 정의를 깨므로 제외.'
    creative: '(1) sin2α 와 cos2α 의 부호만 판정하게 하면 ★2 (2) 2α 의 범위(3π<2α<4π)를 함께 묻게 하면 범위 처리 ★3 (3) sinα+cosα 값을 매개로 주면 103-208 골조로 넘어가 ★3.'
```

```yaml
- id: GN-CALC2-103-208
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\sin\alpha+\cos\alpha=\dfrac{1}{2}$, $\dfrac{\pi}{2}<\alpha<\dfrac{3}{4}\pi$ 일 때 $\sin 2\alpha$, $\cos 2\alpha$, $\tan 2\alpha$ 의 값.
  category: '조건 제곱 → sin2α → 합·차의 곱으로 cos2α → 범위로 부호 확정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 합을 제곱하면 1+sin2α 가 되어 조건이 배각 값으로 바로 바뀐다는 동치 변환'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'cos2α=(cosα+sinα)(cosα−sinα) 에서 cosα−sinα 의 두 부호 후보 중 주어진 범위에 맞지 않는 쪽을 기각'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: 'sinα+cosα 꼴 조건에서 배각의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    값이 직접 주어지지 않아 조건을 제곱해 sin2α 로 옮기는 착안이 먼저 필요하고, cos2α 는 합과 차의 곱으로 보되 차의 부호를 범위로 확정해야 한다(제2사분면 앞쪽이라 cosα−sinα<0). 확인체크 출발 ★2 에 통찰 2개(EQV d2 · VF d1) 반영해 ★3.
  tier: star_3
  mechanism_primary: '조건 제곱 → sin2α=−3/4 → cos2α=(cosα+sinα)(cosα−sinα) 에서 차의 부호를 범위로 확정 → tan2α'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sin 2\alpha=-\dfrac{3}{4}$, $\cos 2\alpha=-\dfrac{\sqrt{7}}{4}$, $\tan 2\alpha=\dfrac{3\sqrt{7}}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/103-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합의 값을 1/3 · −1/2 · √2/2 로 바꾸고 범위를 그에 맞게 준다. 제약: |sinα+cosα|≤√2 여야 하고, 범위가 cosα−sinα 의 부호를 하나로 결정할 만큼 좁아야 한다(π/4 를 걸치면 부호가 갈린다).'
    creative: '(1) 범위를 넓게 주어 두 경우를 모두 답하게 하면 다중 해석 ★4 (2) sinα−cosα 값을 주고 sin2α 를 묻는 대칭 변형(★3 유지) (3) sin³α+cos³α 를 묻도록 확장하면 세제곱 합 인수분해가 붙어 ★4.'
```

```yaml
- id: GN-CALC2-104-e8
  page: 104
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 직선 $y=-3x+4$, $y=2x+5$ 가 이루는 예각의 크기를 $\theta$ 라 할 때 $\tan\theta$ 의 값.
  category: '기울기를 각의 탄젠트로 읽기 → 탄젠트 뺄셈정리 → 예각이므로 절댓값'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 직선이 이루는 각'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기가 곧 경사각의 탄젠트라는 대응과 tan(θ1−θ2) 공식이 이 예제의 본문 도구로 제시되므로 통찰이 아니라 표준 절차로 본다. |(−3−2)/(1+(−3)·2)|=1 한 줄. 필수 예제 ★2 유지.
    [분류 이슈] 기울기↔탄젠트 대응을 표현 전환(I-RT)으로 세면 이 구역 전체(e8·209·210)가 통찰형이 된다. 본문이 공식으로 제시하는 점을 따라 절차형으로 통일하고 기록만 한다.
  tier: star_2
  mechanism_primary: '기울기 −3, 2 를 tanθ1, tanθ2 로 읽기 → tan(θ1−θ2) 공식 → 예각이므로 절댓값 1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/104-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기울기 쌍을 (1/2, 3) · (−2, 1/3) · (4, −1) 로 교체. 제약: 1+m1m2 ≠ 0(0 이면 수직이라 각이 π/2), y절편은 각에 영향이 없으므로 자유롭게 두어도 된다.'
    creative: '(1) 한 직선을 x축·y축으로 두어 경사각 자체를 묻기(★1~2) (2) 이루는 각의 이등분선의 기울기를 묻기(반각 ★4) (3) 세 직선을 주고 가장 작은 예각을 고르게 하면 비교 단계가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-104-209
  page: 104
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $y=-\dfrac{1}{5}x+\dfrac{3}{5}$, $y=\dfrac{2}{3}x+\dfrac{1}{3}$ 이 이루는 예각의 크기.
  category: '두 기울기 → 탄젠트 뺄셈정리 → 특수각 판정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 직선이 이루는 각'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e8 과 같은 공식이되 기울기가 분수라 분수 계산이 한 단계 더 있고, tan 값 1 에서 예각 π/4 를 역으로 읽는 마무리가 붙는다. 분기는 없다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '기울기 −1/5, 2/3 → |(m1−m2)/(1+m1m2)|=1 → 예각 π/4'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/104-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'tan 값이 특수각(1 · √3 · √3/3)이 되도록 기울기 쌍을 고른다(예: 1/3 과 −1/2 → 1). 제약: 1+m1m2 ≠ 0 이고, 각의 크기를 묻는 문제이므로 결과 tan 값이 반드시 특수각이어야 한다.'
    creative: '(1) 각의 크기 대신 tan 값·sec² 값을 묻기(★2, 210 골조) (2) 한 직선을 매개변수로 두고 각이 π/3 이 되게 하는 값을 묻기(BW ★3) (3) 두 직선의 교점과 각을 함께 묻는 도형 문제로 확장(★3).'
```

```yaml
- id: GN-CALC2-104-210
  page: 104
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $x-3y-4=0$, $2x+y-3=0$ 이 이루는 예각의 크기를 $\theta$ 라 할 때 $\sec^2\theta$ 의 값.
  category: '일반형에서 기울기 읽기 → 탄젠트 뺄셈정리 → sec²=1+tan²'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 직선이 이루는 각'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형을 기울기 꼴로 고치는 단계와 마지막에 sec²=1+tan² 로 옮기는 단계가 e8 보다 하나씩 더 있을 뿐 골조는 같다. tanθ=7 에서 50. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '기울기 1/3, −2 → |(m1−m2)/(1+m1m2)|=7 → sec²θ=1+tan²θ=50'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/104-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿔 기울기를 (2, −1/4) · (3, 1/2) 등으로. 제약: 1+m1m2 ≠ 0, 묻는 값이 sec² 이므로 tan 이 무리수여도 답이 유리수로 떨어져 오히려 자유롭다.'
    creative: '(1) cos²θ · sinθcosθ 로 묻는 값을 바꾸기(★2 유지) (2) 예각이 아니라 둔각의 sec² 을 묻기(부호 판정 ★3) (3) 두 직선이 이루는 각의 코사인을 벡터 없이 구하게 하면 표현 전환 ★3.'
```

```yaml
- id: GN-CALC2-104-211
  page: 104
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $x-3y+2=0$, $kx-2y-1=0$ 이 이루는 예각의 크기가 $\dfrac{\pi}{4}$ 가 되도록 하는 상수 $k$ 의 값을 모두 구하시오.
  category: '각 조건 → 탄젠트 공식에 매개변수 대입 → 절댓값 두 경우 → k'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '이루는 각이 π/4 라는 결과 조건에서 tan 값 1 을 거쳐 기울기 속 매개변수 k 를 역추적'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 직선이 이루는 각이 주어질 때 기울기·상수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 가 분자와 분모에 동시에 들어간 절댓값 방정식이라 두 개의 일차방정식으로 갈라져 해가 둘 나온다(절댓값 분기는 표준 T-부호 처리로 보고 통찰로 세지 않았다). 확인체크 출발 ★2 에 매개변수 역추적과 두 해 처리로 +1 → ★3.
  tier: star_3
  mechanism_primary: '기울기 1/3, k/2 → |(1/3−k/2)/(1+k/6)|=1 → 절댓값 두 경우 → k=−1, 4'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/104-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 직선의 기울기와 목표 각을 바꾼다(기울기 2 · 각 π/4 → 두 해). 제약: 목표 각이 특수각이어야 tan 값이 유리수로 떨어지고, 1+m1m2=0 이 되는 k 는 해에서 제외해야 하며, 분모가 0 이 되는 k 도 검토 대상이다.'
    creative: '(1) 각을 π/3 으로 바꾸면 무리수 계수 방정식이 되어 ★4 (2) 해가 하나뿐이 되도록 조건을 조정하고 이유를 쓰게 하면 검증 강제 ★4 (3) k 의 범위(예각이 π/4 보다 작을 조건)를 묻는 부등식 문제로 바꾸면 ★4.'
```

### 특강

```yaml
- id: GN-CALC2-106-e1
  page: 106
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    ⑴ $y=\sqrt{3}\sin x-\cos x+1$ 을 $y=r\sin(x+\alpha)+1$ ($r>0$, $0<\alpha<2\pi$) 꼴로 나타내고 ⑵ 최댓값과 최솟값을 구한다.
  category: '삼각함수의 합성 → 진폭으로 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '서로 다른 두 삼각함수의 합을 하나의 사인 함수로 옮겨야 최대·최소가 읽히고, α 는 cosα·sinα 의 부호 쌍과 0<α<2π 조건으로 특정한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각함수의 합성을 이용하여 최댓값과 최솟값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    r=√(3+1)=2 는 기계적이지만 cosα=√3/2, sinα=−1/2 를 만족하는 α 를 0<α<2π 안에서 11π/6 으로 고르는 범위 처리가 실제 실수 지점이다. 합성은 표현 전환 통찰 1개(RT d2). 특강 예제 출발 ★3 유지.
  tier: star_3
  mechanism_primary: 'r=2 로 합성 → cosα=√3/2 · sinα=−1/2 에서 α=11π/6 → 2sin(x+α)+1 의 치역 [−1, 3]'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $y=2\sin\left(x+\dfrac{11}{6}\pi\right)+1$ ⑵ 최댓값: $3$, 최솟값: $-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/106-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 쌍을 (1, √3) · (−1, 1) · (3, 4) 로, 상수항을 −2 · 5 로 바꾼다. 제약: α 를 특수각으로 떨어뜨리려면 계수 비가 1:1 · 1:√3 이어야 하고, α 의 범위 조건(0<α<2π 인지 −π<α<π 인지)에 따라 답이 달라지므로 발문과 일치시켜야 한다.'
    creative: '(1) 코사인 꼴 r cos(x−α) 로 합성하게 하기(★3 유지) (2) 정의역을 0≤x≤π 로 제한해 끝점 비교를 넣으면 ★4 (3) 합성한 함수의 주기·그래프 평행이동까지 묻기(★3).'
```

```yaml
- id: GN-CALC2-106-212
  page: 106
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $y=-\sin x-\cos x$ ⑵ $y=3\sin x+4\cos x-2$ 의 최댓값과 최솟값을 구한다.
  category: '삼각함수의 합성 → 진폭 r 과 상수항으로 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 삼각함수의 합을 한 개의 사인 함수로 합성해야 진폭에서 최대·최소가 읽힌다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '삼각함수의 합성을 이용하여 최댓값과 최솟값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α 를 구할 필요 없이 r=√(a²+b²) 만 계산하면 끝난다(⑴ √2, ⑵ 5 에 상수 −2). 합성이라는 표현 전환 1개(RT d1)뿐이고 계산은 한 줄. 특강 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'r=√(a²+b²) 로 합성 → 치역 [−r, r] → 상수항 더하기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 최댓값: $\sqrt{2}$, 최솟값: $-\sqrt{2}$ ⑵ 최댓값: $3$, 최솟값: $-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/106-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 (5, 12) · (−8, 6) · (√3, 1) 로, 상수항을 1 · −3 으로 교체. 제약: r 이 정수로 떨어지는 피타고라스 쌍을 쓰면 답이 깔끔하고, 계수 부호는 r 에 영향을 주지 않으므로 자유롭다.'
    creative: '(1) 최댓값과 최솟값의 합·곱을 묻기(★2) (2) 정의역을 제한해 합성 후 각의 범위를 따지게 하면 ★3~4 (3) y=a sinx+b cosx 의 최댓값이 주어질 때 a, b 관계를 묻는 역방향(★3, 213 골조).'
```

```yaml
- id: GN-CALC2-106-213
  page: 106
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 $y=-\sin x+\sqrt{a}\cos x$ 의 최솟값이 $-2$ 일 때 상수 $a$ 의 값.
  category: '합성 → 최솟값 −r 조건 → 매개변수 역추적'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '합성해 진폭 r=√(1+a) 로 옮겨야 최솟값이 −r 이라는 관계가 보인다'
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '최솟값 −2 라는 결과 조건에서 r=2 를 거쳐 a 를 역추적'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: '합성한 함수의 최댓값·최솟값 조건에서 미지수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성 뒤 −√(1+a)=−2 한 줄로 a=3 이다. 통찰 2개지만 둘 다 d1 이고 계산이 한 줄이라 +1 조정은 하지 않고 특강 확인체크 출발 ★2 를 유지했다. √a 때문에 a≥0 만 확인하면 된다.
    [분류 이슈] 통찰 2개 이상이면 +1 후보이나 노동량이 M_total 6 에 계산 한 줄이라 ★3 으로 올리지 않았다. 후보 ★3.
  tier: star_2
  mechanism_primary: 'r=√(1+a) 로 합성 → 최솟값 −r=−2 → a=3'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/106-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최솟값을 −3 · −√5 로, 계수를 a sinx+√3 cosx 꼴로 바꾼다. 제약: 근호 안이 음이 아니어야 하고(a≥0), 최솟값의 절댓값이 r 로 실현 가능한 값이어야 하며 답이 유일해지도록 미지수를 하나만 둔다.'
    creative: '(1) 최댓값과 최솟값을 동시에 주고 두 미지수를 구하게 하면 연립이 되어 ★3 (2) 최솟값이 −2 이상이 되도록 하는 a 의 범위를 묻는 부등식(★3) (3) 상수항까지 미지수로 두면 조건 통합 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-107-214
  page: 107
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $2\cos\alpha=3\sin\alpha$ 이고 $\tan(\alpha+\beta)=1$ 일 때 $\tan\beta$ 의 값. 5지선다.
  category: '조건식에서 tanα → 각의 분해 → 탄젠트 뺄셈정리'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'β 를 (α+β)−α 로 다시 써야 이미 아는 두 탄젠트 값만으로 계산이 닫힌다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '각의 분해(β=(α+β)−α)를 이용한 tan 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2cosα=3sinα 를 양변 cosα 로 나눠 tanα=2/3 을 얻는 것은 절차이고, β 를 두 알려진 각의 차로 보는 분해가 핵심 한 수다. 분해만 떠올리면 (1−2/3)/(1+2/3) 한 줄. 기출 태그지만 통찰 1개 d1 이라 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'tanα=2/3 → β=(α+β)−α → tan 뺄셈정리 → 1/5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/107-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 3cosα=4sinα(→ tanα=3/4) 로, tan(α+β) 값을 2 · −1 로 바꾼다. 제약: 1+tanαtan(α+β) ≠ 0 이어야 하고, 선택지가 기약분수로 떨어지도록 값을 고른다.'
    creative: '(1) tanβ 대신 tan(2α+β) 를 묻기(배각이 붙어 ★3) (2) 조건을 sinα+2cosα=0 처럼 부호가 섞인 꼴로 주면 사분면 판정이 붙어 ★3 (3) α, β 의 범위를 주고 β 의 크기 자체를 묻게 하면 범위 처리 ★3.'
```

```yaml
- id: GN-CALC2-107-215
  page: 107
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차방정식 $x^2+6x+4=0$ 의 두 근이 $\tan\alpha$, $\tan\beta$ 일 때 $\sec^2(\alpha+\beta)$ 의 값.
  category: '근과 계수의 관계 → 탄젠트 덧셈정리 → sec²=1+tan²'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '근과 계수의 관계로 두 근의 합 −6 · 곱 4 를 읽어 탄젠트 덧셈정리에 바로 넣는 결합'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '이차방정식의 두 근이 tanα, tanβ일 때 tan(α+β)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    102-206 과 같은 골조에 sec²=1+tan² 한 단계만 얹은 문제다. tan(α+β)=−6/(1−4)=2 → 5. 결합 통찰 1개(XU d1)이고 계산이 가벼워 STEP 1 출발 ★2 유지.
    [분류 이슈] 102-206(확인체크)과 골조·유형명이 같은데 구역만 다르다. 카탈로그를 만들 때 한 유형으로 묶고 sec² 마무리는 하위 변형으로 둘지 결정 필요.
  tier: star_2
  mechanism_primary: '근과 계수의 관계 → tan(α+β)=−6/(1−4)=2 → sec²=1+tan²=5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/107-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 x²−4x+7 · 2x²+3x−1 등으로 바꾼다. 제약: 두 근의 곱 ≠ 1(분모 0 방지), 판별식 D>0, sec² 을 묻으므로 tan 이 무리수여도 답은 유리수로 떨어진다.'
    creative: '(1) cos²(α+β) · tan(α−β) 로 묻는 값을 바꾸기(α−β 는 근의 차라 판별식이 필요해 ★3) (2) sec²(α+β)=5 를 주고 계수를 역추적(BW ★3) (3) 세 근이 tanα, tanβ, tanγ 인 삼차방정식으로 확장하면 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-107-216
  page: 107
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\sin\alpha+\sin\beta=-\dfrac{\sqrt{5}}{5}$, $\cos\alpha-\cos\beta=\dfrac{\sqrt{5}}{5}$ 일 때 $\cos(\alpha+\beta)$ 의 값.
  category: '두 조건 제곱 후 합 → 교차항을 덧셈정리로 묶기'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '각을 따로 구할 수 없으므로 두 조건을 각각 제곱해 더하면 제곱합이 1+1 로 접힌다는 착안'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '남은 교차항 2(sinαsinβ−cosαcosβ) 를 −cos(α+β) 한 덩어리로 결합해 미지수를 하나로 만든다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: 'sin 합·cos 차 조건을 제곱해 더해 cos(α+β) 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α, β 를 개별로 구할 수 없다는 것을 알아채고 제곱·합산으로 넘어가는 진입 판단이 전부다. 더한 결과가 2−2cos(α+β)=2/5 로 정리되는 것을 보려면 교차항의 부호가 cos 덧셈정리와 반대임을 읽어야 한다. 통찰 2개(EQV d2 · CON d2)지만 제곱해서 더하는 처리가 이 단원의 표준 STEP 2 유형이라 +1 하지 않고 ★3 유지.
    [분류 이슈] 통찰 2개 d2 만 보면 ★4 후보다. 유형 노출도가 높아 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: '두 식 제곱 후 더하기 → 2−2cos(α+β)=2/5 → cos(α+β)=4/5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/107-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건 값을 1/2 · √3/3 · 2/5 등으로 바꾼다. 제약: 제곱합이 2 를 넘지 않아야 하고(|cos(α+β)|≤1), 두 식의 부호 배치(sin 은 합·cos 은 차)가 바뀌면 묶이는 각이 α−β 로 달라진다.'
    creative: '(1) sin 합·cos 합으로 바꾸면 cos(α−β) 가 나온다(★3 유지, 부호 판정만 달라짐) (2) 세 식을 주고 sin(α+β) 까지 묻기(★4) (3) 값 대신 cos(α+β) 의 최댓값을 묻는 범위 문제로 바꾸면 ★4.'
```

```yaml
- id: GN-CALC2-107-217
  page: 107
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 $\mathrm{ABC}$ 에서 $\cos A=\dfrac{12}{13}$, $\cos B=\dfrac{3}{5}$ 일 때 $\cos C$ 의 값.
  category: '내각의 합 → cosC=−cos(A+B) → 덧셈정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'C=π−(A+B) 라는 삼각형 조건을 써서 cosC 를 −cos(A+B) 로 옮겨야 주어진 두 값만으로 풀린다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각형의 내각 관계와 덧셈정리'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C 에 대한 정보가 직접 없으므로 내각의 합을 조건으로 끌어와 −cos(A+B) 로 바꾸는 변환이 핵심이고, 삼각형의 내각이라 sinA·sinB 는 양수로 확정된다. 앞의 부호를 빠뜨리면 답이 통째로 뒤집히는 T-부호 함정. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: 'sinA=5/13 · sinB=4/5(내각이라 양수) → cos(A+B)=16/65 → cosC=−cos(A+B)=−16/65'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{16}{65}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/107-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'cosA · cosB 를 다른 정수 삼각형 비(4/5, 7/25, 8/17)로 교체. 제약: 두 각의 합이 π 보다 작아 삼각형이 실제로 존재해야 하고(cos(A+B) 가 −1 초과), 한 각을 둔각으로 두려면 cos 을 음수로 주어야 한다.'
    creative: '(1) sinC · tanC 를 묻기(★3 유지) (2) 한 각의 cos 을 음수로 주어 둔각삼각형 여부까지 판정하게 하면 ★4 (3) cosC 값을 주고 cosB 를 역추적하면 역방향 ★4 (4) 세 변의 길이 비까지 연결하면 사인법칙 결합 ★4.'
```

```yaml
- id: GN-CALC2-107-218
  page: 107
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    직선 $y=-2x$ 를 그 위의 점 $\mathrm{P}(-1,\,2)$ 를 중심으로 시계 방향으로 $45^\circ$ 만큼 회전시킨 직선을 $y=ax+b$ 라 할 때 $ab$ 의 값. 그림 제시.
  category: '회전을 경사각의 차로 옮기기 → 기울기 → 지나는 점으로 절편'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '기하적 회전을 경사각의 뺄셈으로 옮겨 a=tan(θ−45°), tanθ=−2 로 계산하는 표현 전환'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '회전 중심 P 가 원래 직선 위의 점이므로 회전한 직선도 P 를 지난다는 조건으로 b 를 결정'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '직선의 회전과 두 직선이 이루는 각'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    회전이라는 도형 조작을 기울기의 탄젠트 뺄셈정리로 번역하는 단계가 진입 장벽이고, 시계 방향이므로 각이 −45° 라는 부호를 놓치면 다른 직선이 나온다. 중심이 원 직선 위 점이라는 관찰로 절편이 바로 정해진다. STEP 2 출발 ★3 에 통찰 2개(RT d2 포함) 반영해 ★4.
  tier: star_4
  mechanism_primary: 'tanθ=−2 → a=tan(θ−45°)=3 → P(−1, 2) 를 지나는 직선 y=3x+5 → ab=15'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$15$'
  answer_source: "답지"
  figure: "crop:fig-107-218.png"
  latex: latex-bank/gn-calc2/items/107-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 직선의 기울기(−3 · 1/2)와 회전각(45° · 60°)과 중심 좌표를 바꾼다. 제약: 중심은 원 직선 위의 점이어야 b 를 한 번에 얻을 수 있고(아니면 회전 중심까지 옮겨야 한다), 회전각이 특수각이어야 tan 값이 유리수로 떨어지며 1+m tan(회전각) ≠ 0 이어야 수직이 되지 않는다. 그림의 좌표 라벨은 발문 값과 반드시 일치시킨다.'
    creative: '(1) 반시계 방향으로 바꿔 부호 판정만 뒤집기(★4 유지) (2) 회전 중심을 직선 밖의 점으로 두면 평행 조건이 추가돼 ★5 근처 (3) 회전 후 직선이 원점을 지나도록 하는 회전각을 묻는 역방향(BW ★4~5) (4) 두 번 회전시켜 합성 각을 묻기(★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-107-219
  page: 107
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    눈높이가 $1.5\,\mathrm{m}$ 인 사람이 건물에서 $6\,\mathrm{m}$ 떨어진 지점에서 건물의 위 끝을 올려다본 각이 $\theta$, 아래 끝을 내려다본 각이 $\theta-\dfrac{\pi}{4}$ 일 때 건물의 높이. 그림 제시.
  category: '올려본각·내려본각을 두 직각삼각형으로 → 각의 차에서 tanθ 복원 → 높이 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '실생활 상황을 눈높이 수평선을 공유하는 두 직각삼각형으로 옮겨 각 각의 탄젠트를 거리와 높이의 비로 읽는다'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '아래쪽 삼각형에서 얻은 tan(θ−π/4)=1/4 로부터 덧셈정리를 역으로 써서 미지의 tanθ 를 복원'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '덧셈정리의 실생활 활용(올려본각·내려본각과 높이)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    주어진 각이 θ 자체가 아니라 θ−π/4 라 값이 아래쪽 삼각형에서만 나오고, 거기서 덧셈정리를 거꾸로 써 tanθ 를 만들어야 위쪽 높이를 구할 수 있다. 마지막에 눈높이 1.5 를 더하지 않으면 10 으로 끝나는 단위·기준선 함정이 있다. 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: 'tan(θ−π/4)=1.5/6=1/4 → 덧셈정리로 tanθ=5/3 → 눈높이 위 높이 6·(5/3)=10 → 1.5 를 더해 11.5'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11.5\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-107-219.png"
  latex: latex-bank/gn-calc2/items/107-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '눈높이(1.6 m) · 거리(8 m · 12 m) · 각의 차(π/4 → π/3)를 바꾼다. 제약: 내려본각의 tan 이 눈높이/거리로 먼저 결정되므로 그 값과 각의 차가 모순되지 않아야 하고, 각의 차가 특수각이어야 tanθ 가 유리수로 떨어지며 1−tan(θ−각차)tan(각차) ≠ 0 이어야 한다. 그림의 눈높이·거리 라벨은 발문 값과 고정으로 맞춘다.'
    creative: '(1) 건물 높이를 주고 거리를 묻는 역방향(★4 유지) (2) 두 건물을 세워 사이 거리를 묻게 하면 조건 통합 ★5 근처 (3) 사람이 앞으로 걸어가 각이 두 배가 되는 지점을 묻기(배각 결합 ★5) (4) 각을 θ+π/4 로 바꿔 올려본각 쪽에서 복원하게 하기(★4).'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 2 · ★2 14 · ★3 5 · ★4 2 · ★5 0
- 통찰형 13 · 절차형 10 · premium 0
- 통찰 유형 분포(연 15개): I-RT 5 · I-EQV 5 · I-BW 3 · I-XU 2 · I-CON 1 · I-VF 1 · I-SYM 0 · I-MI 0 · I-PD 0 · I-SC 0
- type_hint 상위: 「두 직선이 이루는 각」 4(104-e8·209·210·211) · 「덧셈정리 · 사분면 부호 결정」 3(102-e6·204·205) · 「배각의 공식」 3(103-e7·207·208) · 「삼각함수의 합성과 최대·최소」 3(106-e1·212·213) · 「이차방정식의 두 근이 tanα, tanβ」 2(102-206·107-215)
- 구역별 ★ 평균: 개념원리 익히기 1.3 · 필수·발전 예제 2.2 · 특강 2.3 · STEP 1 2.0 · STEP 2 3.3 · 실력 UP 4.0
- 그림: 2문(`crop:fig-107-218.png` · `crop:fig-107-219.png`) — 두 문항 모두 발문에 좌표·거리·각이 모두 적혀 있어 그림은 배치 확인용이다.
- 벤더 신호와 2단 이상 어긋난 문항 0. 조정은 모두 ±1 이내.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-101-202 | 유리화 4회로 M_total 6 이라 계산량만 보면 ★2 후보. 개념 확인 구역 신호를 따라 ★1 유지 | ★1 / ★2 |
| GN-CALC2-104-e8 | 기울기↔경사각 탄젠트 대응을 표현 전환(I-RT)으로 세면 104-e8·209·210 이 모두 통찰형이 된다. 본문이 공식으로 제시하므로 절차형으로 통일 | ★2 |
| GN-CALC2-106-213 | 통찰 2개(RT d1 · BW d1)라 +1 후보지만 계산이 한 줄이라 ★2 유지 | ★2 / ★3 |
| GN-CALC2-107-215 | 102-206(확인체크)과 골조·유형명이 같은데 구역만 다르다. 카탈로그에서 한 유형으로 묶을지 결정 필요 | ★2 |
| GN-CALC2-107-216 | 통찰 2개가 모두 d2 라 산식상 ★4 후보이나 제곱·합산이 이 단원 표준 처리라 ★3 유지 | ★3 / ★4 |

### 카탈로그 차원 메모

나중에 미적분Ⅱ 유형 카탈로그를 만들 때 참고할 이 범위의 관찰이다.

- **따로 세워야 할 유형**: ① 「두 직선이 이루는 각」 — 값 구하기(104-e8·209·210)와 각 조건에서 상수 역추적(104-211)은 base ★ 가 다르므로 분리한다. ② 「직선의 회전」(107-218)은 두 직선이 이루는 각의 하위가 아니라 별도 유형으로 두는 편이 낫다(회전 방향 부호·중심 처리가 추가된다). ③ 「삼각함수의 합성」은 최대·최소 구하기(106-e1·212)와 조건에서 미지수 구하기(106-213)로 나눈다.
- **통합해도 될 유형**: ① 「사분면 조건으로 부호 결정 후 덧셈정리」(102-e6·204·205)는 묻는 값만 다른 한 유형이다. ② 「배각의 공식」(103-e7·207)도 같은 유형이며 103-208(합 조건에서 배각)만 별도 하위 유형으로 둔다. ③ 「이차방정식의 두 근이 tanα, tanβ」(102-206·107-215)는 한 유형으로 묶고 sec² 마무리는 변형으로 둔다.
- **base ★ 제안**: 특수각 분해·공식 역방향 인식 ★1, 부호 결정 후 덧셈정리·배각·두 직선이 이루는 각 값 구하기·합성 최대최소 ★2, 합 조건에서 배각·각 조건에서 상수 역추적·삼각형 내각·제곱 합산 ★3, 직선의 회전·실생활 올려본각 모델링 ★4.
- 이 단원에는 I-SYM·I-PD·I-SC 가 한 번도 나오지 않았다. ★5 는 §2.13 저노출 유형 요건(SC·VF·SYM·XU 중 하나)을 만족시키기 어려워 이 범위에서는 0 이다.
