---
name: mechanism-데이터-GN-CM1-15-p3
description: 개념원리 공통수학1 15 이차방정식의 근과 계수의 관계(3/3 · 128~135쪽 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 15 이차방정식의 근과 계수의 관계
  unit_code: GN-CM1-15
  part: "3/3"
  extract_range: "128~135쪽 · 128-258~135-277"
  total_problems: 23
  unit_total: 48
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위 그림 3문 — fig-130-274.png · fig-135-e3.png · fig-135-277-2.png)
---

# 개념원리 공통수학1 · 15 이차방정식의 근과 계수의 관계 (3/3) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 128~135쪽, 단원 15 「이차방정식의 근과 계수의 관계」의 연습문제·특강 구역 23문항(128-258~135-277) 전수를 다룬다. 전사본 group section 은 네 개다 — 「연습문제 STEP 1」 6문(★2 출발) · 「연습문제 STEP 2」 8문(★3 출발) · 「연습문제 실력 UP」 3문(★4 출발) · 「특강」 6문(교육과정 예비 성격의 이차함수 · ★2 출발). 1/3·2/3 파트와 달리 벤더 신호가 level 로 명시돼 있어 vendor_level 을 그대로 옮겼고, 특강 구역만 level 이 없어 "-" 로 둔다. 「교육청 기출」 태그 3문(128-259 · 129-265 · 130-274)은 통찰 유무로만 ±0~1 을 판단했다. 그림 문항은 3문이다.

이 범위의 골조는 다섯 갈래다. ⑴ 합·곱으로 대칭식을 환원하는 연습(128쪽 전반), ⑵ 두 방정식의 근을 연결하거나 근의 식을 변형해 새 방정식을 만드는 2층 구조(128-260 · 128-262 · 130-270 · 130-273), ⑶ 근의 부호·절댓값·정수 조건으로 경우를 나누고 일부를 기각하는 갈래(129-264 · 129-269 · 130-272), ⑷ 근을 대입해 차수를 낮추는 진입(129-266), ⑸ 특강의 이차함수 — 꼭짓점·식 구하기·그래프와 계수의 부호(134~135쪽)다. 이 단원에서 ★4 가 처음 나오는 파트이며(129-266 · 130-272 · 130-273 · 130-274), 2/3 파트 말미에 적어 둔 「★4 후보는 3/3 파트를 본 뒤 결정」이 여기서 정리된다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 연습문제 STEP 1

```yaml
- id: GN-CM1-128-258
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-2x+3=0 의 두 근 α, β 에 대한 다섯 개의 대칭식 등식 중 옳지 않은 것 고르기. 5지선다.
  category: '근과 계수의 관계 → 선택지별 대칭식 변형 → 참·거짓 판정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 근의 합·곱으로 대칭식의 값 구하기(참·거짓 판정형)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=2, αβ=3 을 다섯 선택지에 각각 옮기는 반복 작업이다. 세제곱 합·(α-β)^2·분수식 변형이 모두 교재 직전 공식의 직접 적용이라 통찰 라벨이 붙는 단계가 없다. 허근인데 (α-β)^2 가 음수로 나오는 것이 유일한 함정(T-부호). 연습문제 STEP 1 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '합 2 · 곱 3 → 선택지마다 대칭식을 합·곱으로 환원 → 어긋나는 하나 지목'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항·상수항을 바꿔 합과 곱을 재설정한다. 제약: 판별식이 음수여야 (α-β)^2<0 함정이 살아 있고, 다섯 선택지 값이 모두 정수나 간단한 분수로 떨어지도록 곱을 작은 정수로 둔다.'
    creative: '(1) 옳은 것 고르기로 뒤집기(★2 유지) (2) 선택지 하나를 α^4+β^4 이나 1/α^3+1/β^3 로 올려 계산 층 늘리기(★2~3) (3) 두 근이 실수인지 허수인지까지 묻는 ㄱㄴㄷ 보기로 바꾸면 판별식 판단이 붙어 ★3.'
```

```yaml
- id: GN-CM1-128-259
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: ['교육청 기출']
  category_type: '연습문제'
  summary: |
    x^2+2x+k=0 의 서로 다른 두 근 α, β 가 α^2+β^2=8 을 만족시킬 때 상수 k. 5지선다.
  category: '근과 계수의 관계 → α^2+β^2 를 합·곱으로 환원 → k 결정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대칭식 조건으로 미정계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (α+β)^2-2αβ 한 번과 일차식 풀이가 전부다. 서로 다른 두 근 조건은 판별식 4-4k>0 으로 확인만 하면 되고 답을 거르는 역할은 하지 않는다(T-범위 하나). 교육청 기출 태그이지만 통찰이 없어 +0, STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '합 -2 · 곱 k → (α+β)^2-2αβ=8 → 4-2k=8'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'α^2+β^2 의 값과 일차항 계수를 바꿀 수 있다. 제약: 판별식 조건을 만족하는 k 가 나와야 하고, 선택지가 정수로 떨어지게 일차항 계수를 짝수로 둔다.'
    creative: '(1) α^2+β^2 대신 1/α+1/β 또는 (α-β)^2 로 바꾸기(★2 유지) (2) 조건식을 k 이차방정식이 되게 해 두 후보 중 하나를 판별식으로 기각시키면 ★3 (3) k 의 값 대신 k 의 범위를 묻는 부등식형으로 바꾸면 판별식 결합으로 ★3.'
```

```yaml
- id: GN-CM1-128-260
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2+ax+b=0 의 두 근이 α, β 이고 x^2-bx+a=0 의 두 근이 α+1, β+1 일 때 α^4+β^4. 5지선다.
  category: '두 방정식의 근 대응 → 합·곱 두 등식 연립 → a, b → 대칭식 2단 환원'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 번째 방정식의 근이 α+1, β+1 이라는 말을 (α+1)+(β+1)=b, (α+1)(β+1)=a 두 등식으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 이차방정식의 근을 연결해 미정계수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근 대응을 두 등식으로 옮기는 단계(EQV d1)가 먼저 있고, 그 뒤 a, b 연립 → x^2+x+1=0 의 α^2+β^2 → α^4+β^4 로 대칭식을 두 번 접는 계산이 이어져 M_total 8. STEP 1 출발점 ★2 에 층이 하나 더 얹혀 ★3.
  tier: star_3
  mechanism_primary: '두 방정식의 합·곱을 a, b 로 연립 → a=b=1 → α^2+β^2=-1 → α^4+β^4=(α^2+β^2)^2-2(αβ)^2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 번째 방정식의 근을 α+1, β+1 대신 α+2, β+2 나 2α, 2β 로, 계수 배치를 (a, b) → (b, a) 대신 (b, -a) 로 바꿀 수 있다. 제약: a, b 연립이 유일해를 갖고 결과 방정식의 대칭식이 정수로 떨어져야 선택지가 만들어진다.'
    creative: '(1) 묻는 값을 α^3+β^3 이나 α^6+β^6 으로 바꾸기(★3 유지) (2) a, b 를 구하지 않고 두 방정식의 관계만으로 α^4+β^4 를 묻게 하면 진입이 막혀 ★4 (3) 두 번째 방정식의 근을 1/α, 1/β 로 두면 역수 대응이 추가돼 ★3.'
```

```yaml
- id: GN-CM1-128-261
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2+(k+2)x+9-k=0 의 두 근이 연속하는 정수일 때 모든 실수 k 의 값의 합.
  category: '두 근을 n, n+1 로 모수화 → 합·곱 두 식에서 k 소거 → n 이차방정식'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '연속하는 정수라는 조건을 두 근 n, n+1 이라는 하나의 모수로 옮겨 합·곱에 넣음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 근이 정수·연속정수인 조건에서 계수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모수화 착안(EQV d1) 하나 뒤는 k 소거와 이차방정식 풀이다. 묻는 것이 k 하나가 아니라 두 값의 합이라 두 정수해를 모두 살려야 하고, n 을 구한 뒤 k 로 되돌아가는 왕복이 있다(T-범위). STEP 1 ★2 출발 + 통찰 1 + M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '근 n, n+1 → 2n+1=-(k+2), n(n+1)=9-k → k 소거 → n=4, -3 → k 두 값의 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-8$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항과 일차항의 k 계수를 바꿀 수 있다. 제약: n 에 대한 이차방정식이 서로 다른 두 정수해를 가져야 k 가 두 값 나오고, 각 k 에서 원 방정식의 판별식이 양수인지 확인한다.'
    creative: '(1) 연속하는 짝수·홀수(n, n+2)로 바꾸기(★3 유지) (2) 두 근의 차가 3 인 조건으로 바꾸면 (α-β)^2 갈래가 생겨 ★3 (3) 연속하는 자연수로 좁히면 후보 하나가 기각돼 I-VF 가 붙고 ★3~4.'
```

```yaml
- id: GN-CM1-128-262
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-3x+1=0 의 두 근 α, β 에 대하여 α^2+1/β, β^2+1/α 를 두 근으로 하고 x^2 의 계수가 1 인 이차방정식 x^2+ax+b=0 의 a+b.
  category: 'αβ=1 을 써서 1/β=α 로 바꾸기 → 새 두 근의 합·곱 → a, b'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'αβ=1 이므로 1/β=α, 1/α=β 로 바꿔 새 근을 α^2+α, β^2+β 라는 다항식 꼴로 만드는 착안. 이것이 없으면 분수 대칭식 계산이 크게 무거워진다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 수를 근으로 하는 이차방정식 만들기(근의 식 변형 포함)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근의 곱이 1 이라는 것을 역수 치환에 쓰는 진입 착안(EQV d2)이 이 문제의 전부이고, 그 뒤 합=(α^2+β^2)+(α+β), 곱=αβ(α+1)(β+1) 은 표준이다. 합이 -a 라는 부호 규약을 놓치면 그대로 어긋난다(T-부호). STEP 1 ★2 출발 + d2 통찰 → ★3.
  tier: star_3
  mechanism_primary: 'αβ=1 → 1/β=α → 새 근 α^2+α, β^2+β → 합 10 · 곱 5 → a=-10, b=5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 방정식의 합만 바꾸고 곱은 1 로 고정한다. 제약: 곱이 1 이어야 역수 치환이 살아 있고, 합을 정수로 두어야 a, b 가 정수로 떨어진다. 곱을 1 이 아닌 값으로 바꾸면 이 유형이 아니라 분수 대칭식 계산 문제가 된다.'
    creative: '(1) 새 근을 α+1/β, β+1/α 로 낮추기(★2) (2) 곱을 -1 로 두면 1/β=-α 가 되어 부호 함정이 추가돼 ★3 (3) 새 방정식의 계수가 아니라 두 새 근의 차를 묻게 하면 판별식이 붙어 ★3~4.'
```

```yaml
- id: GN-CM1-128-263
  page: 128
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    유리수 a, b 에 대하여 x^2+ax+b=0 의 한 근이 2-√3 일 때, x^2+bx+a=0 의 두 근 α>β 에 대한 α^2-β^2.
  category: '무리수 켤레근으로 a, b 결정 → 새 방정식의 합·곱 → α^2-β^2=(α+β)(α-β)'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'α^2-β^2 을 (α+β)(α-β) 로 쪼개고 α-β 를 판별식의 제곱근으로 옮긴 뒤 α>β 로 부호를 확정'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '무리수 켤레근으로 계수 결정 후 두 근의 제곱차 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리수 계수라는 전제에서 켤레근 2+√3 을 쓰는 앞단은 교재 공식 그대로이고, 뒷단의 α^2-β^2 분해와 α-β 의 부호 확정이 라벨 대상(EQV d1)이다. α>β 를 놓치면 부호가 뒤집히고(T-부호) 유리수 계수 전제를 빼면 켤레근 자체가 성립하지 않는다(T-범위). 두 방정식을 왕복하는 구조로 M_total 9 → STEP 1 출발 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: '켤레근 2±√3 → a=-4, b=1 → x^2+x-4=0 → (α+β)(α-β) = (-1)·√17'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\sqrt{17}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/128-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 한 근을 p±q√r 꼴로 바꾼다. 제약: 계수가 유리수라는 전제를 반드시 남겨야 켤레근을 쓸 수 있고, 두 번째 방정식의 판별식이 양수여야 α>β 로 순서를 줄 수 있다.'
    creative: '(1) α^2-β^2 대신 α^3-β^3 을 묻기(★3 유지) (2) 한 근을 허수 1+2i 로 바꾸면 실수 계수 전제와 허근 처리로 옮겨 가 ★3 (3) a, b 를 구하지 않고 두 방정식의 계수 교환만으로 관계를 묻게 하면 추상도가 올라 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-129-264
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    절댓값 방정식 |x^2-2x-a+3|=1 의 모든 실근의 곱이 8 일 때 실수 a (단 a>3).
  category: '절댓값 분기로 두 이차방정식 → 각 판별식으로 실근 확인 → 두 근의 곱의 곱=8'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '절댓값이 1 이라는 조건을 두 개의 독립된 이차방정식으로 갈라, 두 분기의 근이 모두 답에 기여함을 인식'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '모든 실근의 곱을 각 방정식의 근의 곱 (2-a)(4-a) 로 옮기고, a>3 이 두 판별식을 모두 양수로 만드는 것을 확인'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: '절댓값 기호가 있는 이차방정식의 근의 곱 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분기는 둘이지만 각각이 표준 이차방정식이고 최종 식도 (2-a)(4-a)=8 한 줄이다. a>3 이 없으면 한 분기가 허근이 되어 답이 달라지므로 판별식 확인은 형식이 아니다(T-범위). 통찰 2 개라 규칙상 +1 후보이나 둘 다 depth 1 이고 계산 층이 얇아 STEP 2 출발점 ★3 을 유지했다. [분류 이슈] 통찰 2 개 규칙을 그대로 적용하면 ★4 후보.
  tier: star_3
  mechanism_primary: 'f(x)=±1 두 방정식 → 판별식으로 실근 4 개 확인 → (2-a)(4-a)=8 → a>3 에서 a=6'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '절댓값 안의 이차식과 우변 상수, 근의 곱 값을 바꿀 수 있다. 제약: 두 분기의 판별식이 모두 양수가 되는 범위 조건(여기서는 a>3)을 함께 주어야 실근 개수가 4 로 고정된다.'
    creative: '(1) 근의 곱 대신 모든 실근의 합을 묻기(합은 분기와 무관해 오히려 쉬워져 ★2~3) (2) 범위 조건을 빼고 실근의 개수를 a 로 분류하게 하면 기각 분기가 생겨 ★4 (3) 우변을 k 로 두고 실근이 3 개가 되는 k 를 묻는 형태면 중근 경계까지 들어와 ★4.'
```

```yaml
- id: GN-CM1-129-265
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: ['교육청 기출']
  category_type: '연습문제'
  summary: |
    x^2+x-1=0 의 서로 다른 두 근 α, β 와 P(x)=2x^2-3x 에 대하여 βP(α)+αP(β). 5지선다.
  category: '전개 → 2αβ(α+β)-6αβ 로 묶기 → 합·곱 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '다항식에 두 근을 대입한 대칭식의 값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    형태는 낯설지만 전개하면 2α^2β+2αβ^2-3αβ-3αβ 가 되어 2αβ(α+β)-6αβ 로 바로 묶이고 합 -1 · 곱 -1 을 넣으면 끝난다. 라벨이 붙는 단계가 없어 절차형이고, M_total 6 이라 −1 조건(통찰 0 · M_total ≤ 5)에는 걸리지 않아 STEP 2 출발점 ★3 을 유지했다. [분류 이슈] 절차형 · M_total 6 이라 체감은 ★2 쪽.
  tier: star_3
  mechanism_primary: 'βP(α)+αP(β) 전개 → 2αβ(α+β)-6αβ → 합 -1 · 곱 -1 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'P(x) 의 계수와 원 방정식의 계수를 바꾼다. 제약: βP(α)+αP(β) 가 전개 후 αβ 로 묶이려면 P 의 상수항이 0 이어야 하고(상수항이 있으면 α+β 항이 따로 남는다) 선택지가 정수로 떨어지게 합·곱을 정수로 둔다.'
    creative: '(1) P 에 상수항을 넣어 묶임이 한 번에 끝나지 않게 하면 ★3 (2) αP(α)+βP(β) 로 바꾸면 대칭식 차수가 올라 ★3 (3) α^2=1-α 로 차수를 낮춰야만 풀리게 P 를 3 차로 올리면 진입 착안이 필요해 ★4.'
```

```yaml
- id: GN-CM1-129-266
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-4x+2=0 의 두 근 α, β 에 대하여 √(2α^3-7α^2+4α)+√(2β^3-7β^2+4β) 의 값.
  category: '근을 대입해 차수 낮추기 → 근호 안이 제곱 → √(α^2)=|α| → 두 근이 양수임을 확인'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'α^2=4α-2 를 써서 3 차식을 α(2α^2-7α+4)=α·α 로 낮추는 진입 착안. 이것이 없으면 무리식에 손을 댈 수 없다'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '√(α^2)=|α| 이므로 근호를 벗기려면 부호가 필요하고, 합 4>0 · 곱 2>0 에서 두 근이 모두 양수임을 확인'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '근을 대입해 차수 낮추기 + 무리식의 값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    3 차 무리식을 그대로 다룰 수 없고 α^2=4α-2 로 차수를 낮춰야 비로소 근호 안이 α^2 이 된다(진입 봉쇄형 d2). 벗긴 뒤에도 √(α^2)=α 로 바로 쓰면 틀릴 수 있어 두 근의 부호 확인이 필수다(T-부호·T-범위). STEP 2 출발점에서 진입 봉쇄 d2 + 부호 판정으로 +1 → ★4. [분류 이슈] 통찰이 I-EQV 둘뿐이라 §2.13 ★4 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 부재 YELLOW.
  tier: star_4
  mechanism_primary: '2α^3-7α^2+4α = α^2 → 근호가 벗겨져 |α|+|β| → 두 근 양수 → α+β=4'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 방정식의 합·곱과 근호 안 3 차식의 계수를 함께 조정한다. 제약: 차수를 낮췄을 때 근호 안이 α^2 이나 (α-c)^2 처럼 완전제곱이 되도록 계수를 역산해야 하고, 두 근이 모두 양수여야 절댓값이 그대로 벗겨진다.'
    creative: '(1) 곱을 음수로 두어 한 근이 음수가 되게 하면 |α|+|β|=|α-β| 로 갈려 ★4 유지이되 기각 단계가 생긴다 (2) 근호 안을 4 차식으로 올려 차수 낮추기를 두 번 하게 하면 ★4~5 (3) 근호를 빼고 2α^3-7α^2+4α 의 값만 물으면 차수 낮추기 한 단계만 남아 ★3.'
```

```yaml
- id: GN-CM1-129-267
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-(4k+1)x+2k+1=0 의 두 근 α, β 가 α^2β+αβ^2-α-β=6 을 만족시킬 때 정수 k.
  category: '조건식을 (α+β)(αβ-1) 로 묶기 → k 이차방정식 → 정수 조건으로 선택'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'α^2β+αβ^2-α-β 를 (α+β)(αβ-1) 한 덩어리로 묶어 합·곱만으로 쓰기'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 근의 대칭식 조건으로 계수 구하기(정수 조건)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묶기 착안(EQV d1) 하나 뒤는 (4k+1)·2k=6 을 풀고 두 해 중 정수를 고르는 일이다. 명시된 정수 조건으로 한 해를 버리는 마지막 줄은 사후 검증(I-VF)으로 볼 여지가 있으나 조건이 발문에 드러나 있어 카운트하지 않고 기록만 했다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '(α+β)(αβ-1)=6 → (4k+1)·2k=6 → 4k^2+k-3=0 → 정수 해 선택'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건식의 우변 값과 계수의 k 배치를 바꾼다. 제약: 묶었을 때 (α+β)(αβ-1) 꼴이 유지되도록 조건식을 설계하고, k 이차방정식이 정수 해 하나와 비정수 해 하나를 갖게 해야 정수 조건이 일한다.'
    creative: '(1) 정수 조건을 빼고 모든 k 의 합을 묻기(★3 유지) (2) 조건식을 α^2β+αβ^2+α+β 로 바꾸면 묶임이 (α+β)(αβ+1) 로 달라져 같은 ★3 변주 (3) 두 근이 모두 정수라는 조건을 덧붙이면 판별식이 완전제곱이어야 해 ★4.'
```

```yaml
- id: GN-CM1-129-268
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    ax^2+bx+c=0 에서 일차항 계수를 잘못 보고 푼 두 근과 상수항을 잘못 보고 푼 두 근이 각각 주어질 때 처음 이차방정식의 근.
  category: '잘못 본 항에 따라 보존되는 관계 판정 → 곱과 합 복원 → 근의 공식(허근)'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '일차항을 잘못 보면 두 근의 곱만, 상수항을 잘못 보면 두 근의 합만 그대로 남는다는 대응을 세우는 진입 착안'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '계수를 잘못 보고 푼 이차방정식'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    어느 관계가 살아남는지 짝짓는 한 착안(d2)이 전부이고 나머지는 분수 계산과 근의 공식이다. 합과 곱을 반대로 짝지으면 그대로 틀리는 구조이고(T-표기) 판별식이 음수라 허근 표기까지 요구된다(T-범위). STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '곱 c/a=7/3 · 합 -b/a=8/3 → 3x^2-8x+7=0 → 근의 공식으로 허근'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=\dfrac{4\pm\sqrt{5}\,i}{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '잘못 본 두 풀이의 근 네 개를 바꾼다. 제약: 곱과 합이 같은 분모로 정리돼 정수 계수 방정식이 되게 하고, 판별식의 부호(실근/허근)를 의도한 쪽으로 맞춘다.'
    creative: '(1) 잘못 본 항을 상수항과 이차항으로 바꾸면 보존되는 관계가 달라져 같은 ★3 변주 (2) 두 사람이 각각 잘못 본 설정으로 바꾸고 처음 방정식의 두 근의 합을 묻기(★3) (3) 잘못 본 계수의 값까지 되묻게 하면 역추적이 한 층 늘어 ★4.'
```

```yaml
- id: GN-CM1-129-269
  page: 129
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2+(m-5)x-18=0 의 두 근의 절댓값의 비가 2:1 이 되도록 하는 실수 m 을 모두 구하기.
  category: '곱이 음수 → 두 근의 부호 반대 → 근을 2t, -t 로 → 곱에서 t, 합에서 m'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '곱이 -18<0 이라 두 근의 부호가 반대임을 먼저 읽고, 절댓값의 비 2:1 을 2t 와 -t 라는 모수로 옮김'
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 't=3 과 t=-3 이 서로 다른 근의 배치를 주어 m 이 두 값 모두 답이 됨'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '두 근의 절댓값의 비 조건으로 계수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부호 반대 인식과 2t, -t 모수화가 진입의 핵심이지만(d2) 그 뒤 계산은 두 줄이고, 2/3 파트의 「두 근의 비」 유형(124-e11)에 절댓값이 얹힌 변주다. 부호를 놓치고 2t, t 로 두면 전부 틀린다(T-부호). 통찰 2 개로 +1 후보이나 유형 학습으로 해결되는 전형이라 STEP 2 출발점 ★3 을 유지했다. [분류 이슈] +1 규칙을 그대로 적용하면 ★4 후보.
  tier: star_3
  mechanism_primary: '곱 -18<0 → 근 2t, -t → -2t^2=-18 → t=±3 → 합에서 m 두 값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$, $8$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/129-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항(곱)과 비를 3:1, 3:2 등으로 바꾼다. 제약: 곱이 음수여야 부호 반대 골조가 살아 있고, t^2 이 완전제곱이 되어야 m 이 정수로 떨어진다. 곱을 양수로 바꾸면 두 근이 같은 부호가 되어 -t 모수화가 무너진다.'
    creative: '(1) 곱을 양수로 두고 비를 2:1 로 주면 근을 2t, t 로 두는 같은 ★3 변주 (2) 절댓값의 비 대신 절댓값의 합을 주면 130-272 의 부호 분기형으로 옮겨 가 ★4 (3) m 의 값 대신 m 의 개수나 합을 묻고 실근 조건을 덧붙이면 판별식이 결합돼 ★4.'
```

```yaml
- id: GN-CM1-130-270
  page: 130
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2+x-4=0 의 두 근 α, β 에 대하여 f(α)=f(β)=1 을 만족시키는 이차식 f(x) 구하기(이차항의 계수는 1).
  category: 'f(x)-1=0 의 두 근이 α, β 이고 최고차 계수가 1 → f(x)-1 = x^2+x-4'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f(α)=f(β)=1 을 「f(x)-1=0 의 두 근이 α, β」로 옮기는 착안. 미정계수 연립으로도 풀리지만 이 전환이면 한 줄로 끝난다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: 'f(x)=k 의 두 근이 주어진 이차식 결정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함숫값이 같다는 조건을 방정식의 근으로 바꾸는 한 착안(d2)이 전부이고 계산은 상수 이동뿐이다. f 가 구체 식이 아닌 미지의 이차식이라 표현 추상도가 이 파트 최고 수준(Mₐ=3)이고, 이차항 계수가 1 이라는 단서가 없으면 f 가 결정되지 않는다(T-표기). 미정계수 연립 갈래가 병존해 I-SC 로 볼 여지가 있으나 필수 경로가 아니라 카운트하지 않고 기록만 했다. STEP 2 ★3.
  tier: star_3
  mechanism_primary: 'f(x)-1 의 두 근 α, β · 최고차 1 → f(x)-1=x^2+x-4 → f(x)=x^2+x-3'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f(x)=x^2+x-3$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/130-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 방정식의 계수와 함숫값 1 을 바꾼다. 제약: 이차항 계수를 명시해야 f 가 유일하게 정해지고, 계수를 1 이 아닌 값으로 주면 f(x)-k 가 그 계수를 갖는 것까지 맞춰야 한다.'
    creative: '(1) f(α)=f(β)=α+β 처럼 우변을 대칭식으로 주면 한 층이 늘어 ★3~4 (2) 이차항 계수를 미지로 두고 f(0)=0 같은 조건을 추가하면 130-273 형태가 되어 ★4 (3) f(α)=f(β) 만 주고 f 의 축을 묻게 하면 대칭성 관점이 들어와 I-SYM 후보 ★4.'
```

```yaml
- id: GN-CM1-130-271
  page: 130
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    실수 m, n 에 대하여 x^2+mx+n=0 의 한 근이 -1+2i 일 때, 1/m 과 1/n 을 두 근으로 하는 x^2+ax+b=0 의 a+b.
  category: '허수 켤레근으로 m, n 결정 → 역수 두 근의 합·곱 → a, b'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '허수 켤레근 + 두 수를 근으로 하는 이차방정식 만들기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    실수 계수이므로 켤레근 -1-2i 를 쓰는 앞단과 두 수를 근으로 하는 방정식을 만드는 뒷단, 교재 공식 두 개를 순서대로 잇는 2 단 절차라 라벨이 붙는 단계가 없다. 합이 -a 라는 부호 규약과 분수 합·곱 계산이 유일한 마찰이다. 통찰 0 이지만 M_total 7 로 −1 조건(≤5)에 걸리지 않아 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '켤레근 -1±2i → m=2, n=5 → 1/2, 1/5 의 합·곱 → a+b'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{3}{5}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/130-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 한 근을 p+qi 꼴로 바꾼다. 제약: 실수 계수 전제를 남겨야 켤레근을 쓸 수 있고, m, n 이 0 이 아니어야 역수를 두 근으로 삼을 수 있다.'
    creative: '(1) 1/m, 1/n 대신 m+n, mn 을 두 근으로 하기(★2~3) (2) 계수 m, n 이 유리수라고만 하고 한 근을 무리수로 주면 128-263 계열로 옮겨 간다(★3) (3) a+b 대신 새 방정식의 두 근의 차를 묻게 하면 판별식이 붙어 ★3~4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-130-272
  page: 130
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-4x+k=0 의 두 실근 α, β 가 |α|+|β|=6 을 만족시킬 때 실수 k.
  category: '두 근의 부호로 경우 나누기 → 같은 부호면 합, 반대 부호면 차 → 판별식으로 k'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '|α|+|β| 가 두 근의 부호에 따라 α+β 또는 |α-β| 로 갈린다는 것을 먼저 갈라 놓는 단계'
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 근이 모두 양수인 분기는 |α|+|β|=α+β=4≠6 이라 조건 위배로 기각되고, 살아남은 분기의 k<0 이 판별식과도 맞는지 재확인'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '두 실근의 절댓값의 합과 근의 부호'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    합이 4>0 이라 두 근이 모두 양수인 분기가 먼저 떠오르지만 그 분기는 조건과 정면으로 어긋나 기각된다(VF). 살아남은 분기에서 |α|+|β|=|α-β| 로 옮겨 √((α+β)^2-4αβ)=6 으로 풀고, 얻은 k 가 부호 가정(k<0)과 실근 조건을 동시에 만족하는지 되돌아봐야 한다. 실력 UP 출발점 ★4 에 분기·기각 구조가 실제로 있어 ★4 유지(★5 조건인 통찰 3 개에는 못 미친다).
  tier: star_4
  mechanism_primary: '합 4 · 곱 k → 부호 분기 → 같은 부호 분기 기각 → |α-β|=√(16-4k)=6'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-5$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/130-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수(합)와 절댓값의 합 값을 바꾼다. 제약: 절댓값의 합이 합보다 커야 부호 반대 분기가 살아남고, 16-4k 가 완전제곱이 되어야 k 가 정수로 떨어진다. 절댓값의 합을 합과 같은 값으로 두면 반대로 양수 분기만 남는다.'
    creative: '(1) |α|+|β| 대신 |α|-|β| 나 |αβ| 로 바꾸기(★3~4) (2) k 를 묻지 않고 |α|+|β| 의 최솟값을 묻게 하면 범위 문제로 올라가 ★4~5 (3) 두 실근 조건을 빼면 허근 분기가 추가돼 경우가 셋이 되고 ★4~5.'
```

```yaml
- id: GN-CM1-130-273
  page: 130
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x^2-5x+2=0 의 두 근 α, β 에 대하여 이차식 P(x) 가 P(x)+x-3=0 의 두 근으로 α+1, β+1 을 갖고 P(-1)=0 일 때 P(2).
  category: 'P(x)+x-3 을 최고차 a 와 두 근으로 인수 표현 → 평행이동된 근의 합·곱 → P(-1)=0 으로 a'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「P(x)+x-3=0 의 두 근이 α+1, β+1」을 P(x)+x-3=a(x-α-1)(x-β-1) 라는 인수 표현으로 옮기고, P 의 최고차 계수가 1 이라는 보장이 없으므로 a 를 살려 두는 착안'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '근이 평행이동된 이차식 P(x) 결정'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P 가 미지의 이차식이고 최고차 계수까지 미지라 인수 표현에 a 를 남겨야 한다(Mₐ=3). 최고차를 1 로 단정하면 그대로 틀리고(T-표기), P(x)+x-3 이 여전히 이차식이라는 점도 확인이 필요하다. 평행이동된 두 근의 합 7 · 곱 8 은 표준이지만 그 위에 미지 계수 결정과 함숫값 계산이 더 얹혀 M_total 10. 실력 UP ★4 출발 · d2 통찰 → ★4.
  tier: star_4
  mechanism_primary: 'P(x)+x-3=a(x^2-7x+8) → P(-1)=0 으로 a 결정 → P(2) 계산'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{2}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/130-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 방정식의 합·곱, 평행이동량, P(-1)=0 의 대입점, 마지막에 묻는 P 의 값을 바꿀 수 있다. 제약: a 를 결정하는 조건이 P(x)+x-3 의 두 근과 독립이어야 하고(근이 되는 점을 대입하면 a 가 소거된다) 결과가 간단한 분수로 떨어지게 대입점을 고른다.'
    creative: '(1) P(-1)=0 대신 P 의 최고차 계수를 직접 주면 진입이 크게 쉬워져 ★3 (2) P(x)+x-3 을 P(x)-x^2 처럼 이차항이 상쇄되는 형태로 바꾸면 차수 판단이 추가돼 ★4~5 (3) 두 근을 α+1, β+1 대신 1/α, 1/β 로 바꾸면 역수 대응이 붙어 ★4.'
```

```yaml
- id: GN-CM1-130-274
  page: 130
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: ['교육청 기출']
  category_type: '연습문제'
  summary: |
    x^2-4x+2=0 의 두 실근 α<β 를 두 변(AB=α, BC=β, 직각은 B)으로 하는 직각삼각형에 내접하는 정사각형의 넓이와 둘레를 두 근으로 하는 4x^2+mx+n=0 의 m+n. 5지선다.
  category: '닮음으로 정사각형 한 변을 αβ/(α+β) 로 → 합·곱 대입 → 넓이·둘레를 근으로 하는 방정식의 계수 비교'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 변이 AB, BC 위에 놓인 내접 정사각형이라는 도형 조건을 닮음비로 옮겨 한 변을 αβ/(α+β) 라는 대칭식으로 표현(기하 → 대수)'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '넓이와 둘레를 두 근으로 하는 방정식의 x^2 계수가 1 이 아니라 4 이므로 합·곱을 -m/4, n/4 에 맞춰 비교'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '직각삼각형에 내접하는 정사각형 + 근과 계수의 관계'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    기하에서 대수로 넘어가는 한 단계(RT d2)가 진입이고, α, β 를 개별로 구하지 않고 합 4 · 곱 2 만으로 한 변이 바로 나오는 것이 이 문제의 설계다. 마지막에 x^2 의 계수가 4 인 것을 놓치면 m, n 이 네 배 어긋난다(T-표기). 실력 UP ★4 출발 · RT d2 → ★4 유지이며 §2.13 의 ★4 저노출 유형 요건(RT)도 충족한다.
  tier: star_4
  mechanism_primary: '한 변 s=αβ/(α+β) → 넓이 s^2 · 둘레 4s → 4x^2+mx+n=0 의 합·곱과 계수 비교'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: '답지'
  figure: 'crop:fig-130-274.png'
  latex: latex-bank/gn-cm1/items/130-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원 방정식의 합·곱을 바꿔 s=αβ/(α+β) 가 간단한 분수가 되게 한다. 제약: 두 근이 양의 실수여야 변의 길이가 되고(판별식·부호 확인), 새 방정식의 x^2 계수 4 는 계수 비교 함정으로 유지한다. 그림의 A, B, C 배치와 AB=α, BC=β 라벨, 직각의 위치는 고정한다.'
    creative: '(1) 정사각형 대신 내접 직사각형의 넓이의 최댓값으로 바꾸면 이차함수 최대와 결합해 ★4~5 (2) 넓이와 둘레 대신 대각선 길이와 넓이를 두 근으로 하면 무리수 계수가 들어와 ★4 (3) 두 변 대신 빗변과 한 변을 두 근으로 주면 피타고라스 정리가 필요해 I-XU 가 생기고 ★5 후보.'
```

### 특강

```yaml
- id: GN-CM1-134-e1
  page: 134
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['특강']
  category_type: '특강 예제'
  summary: |
    이차함수 y=-2x^2+4ax-3a^2-b^2-6b 의 그래프의 꼭짓점이 (4, -7) 일 때 상수 a, b 에 대한 ab.
  category: '완전제곱으로 꼭짓점 좌표 → 좌표 비교 → b 의 중근'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이차함수의 꼭짓점 좌표로 미정계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 → 꼭짓점 좌표 비교 → 이차방정식이라는 표준 절차만으로 끝나고 라벨이 붙는 단계가 없다. 문자가 둘이라 계수 정리가 길어 M_total 8 이지만 전부 계산량이며, y 좌표 조건이 (b+3)^2=0 이라는 중근으로 떨어지는 것도 설계된 편의다. 특강 구역의 예제이고 단원 15 본문이 아니라 이차함수 예비 성격이라 출발점 ★2 유지. [분류 이슈] M_total 8 만 보면 ★3 도 가능.
  tier: star_2
  mechanism_primary: '완전제곱 → 꼭짓점 (a, -a^2-b^2-6b) → a=4 · b^2+6b+9=0'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-cm1/items/134-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수와 꼭짓점 좌표를 바꾼다. 제약: x 좌표 조건이 a 를 바로 주도록 일차항을 4ax 꼴로 유지하고, y 좌표 조건이 b 의 완전제곱(중근)이 되게 상수항을 역산해야 b 가 유일하게 정해진다.'
    creative: '(1) y 좌표 조건을 중근이 아니게 해 b 후보를 둘로 만들고 조건으로 하나를 기각시키면 I-VF 가 붙어 ★3 (2) 꼭짓점 대신 최댓값과 축을 주기(★2 유지) (3) 꼭짓점이 특정 직선이나 포물선 위에 있게 하면 134-275 형태가 되어 ★2~3.'
```

```yaml
- id: GN-CM1-134-e2
  page: 134
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['특강']
  category_type: '특강 예제'
  summary: |
    축의 방정식이 x=1 이고 두 점 (-1, 0), (4, -5) 를 지나는 이차함수의 그래프가 y 축과 만나는 점의 좌표.
  category: '축이 주어짐 → y=a(x-1)^2+q 표준형 → 두 점 대입 연립 → x=0 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '축의 방정식이 주어진 이차함수의 식 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 정보(축)에 맞는 표준형을 고르고 두 점을 대입해 연립하는 표준 절차다. 꼭짓점형·일반형·인수분해형 중 어느 것을 쓰느냐가 전략 갈래처럼 보이지만 축이 명시돼 사실상 결정돼 있어 I-SC 로 카운트하지 않았다. 구한 뒤 x=0 을 대입하는 마무리 한 줄까지 포함해도 통찰 0 · M_total 7 → 특강 예제 ★2.
  tier: star_2
  mechanism_primary: 'y=a(x-1)^2+q → 두 점 대입 연립 → a, q → x=0 의 함숫값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,3)$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-cm1/items/134-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '축의 위치와 두 점의 좌표를 바꾼다. 제약: 두 점의 x 좌표가 축에 대해 대칭이 아니어야 연립이 유일해를 갖고, a 와 q 가 정수로 떨어지게 좌표를 고른다.'
    creative: '(1) 축 대신 꼭짓점의 y 좌표(최댓값)를 주면 같은 ★2 변주 (2) 두 점이 축에 대해 대칭이라는 사실을 이용해야 풀리게 하면 I-SYM 이 붙어 ★3 (3) y 축 교점 대신 x 축과 만나는 두 점의 좌표를 묻게 하면 근과 계수의 관계와 이어져 ★3.'
```

```yaml
- id: GN-CM1-134-275
  page: 134
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['확인체크']
  category_type: '특강 확인체크'
  summary: |
    이차함수 y=-3x^2+6kx-k^2-k-5 의 그래프의 꼭짓점이 직선 y=x-1 위에 있을 때 양수 k.
  category: '완전제곱으로 꼭짓점 좌표 → 직선 식에 대입 → 두 해 중 양수 선택'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이차함수의 꼭짓점이 직선 위에 있을 조건'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    134-e1 과 같은 완전제곱 골조에 꼭짓점을 직선에 대입하는 한 줄이 붙었을 뿐이고 그 뒤는 이차방정식 풀이다. 두 해 중 양수 하나를 고르는 마지막 줄은 발문에 조건이 드러나 있어 사후 검증(I-VF)으로 카운트하지 않고 기록만 한다. 특강 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '꼭짓점 (k, 2k^2-k-5) → 2k^2-k-5=k-1 → k^2-k-2=0 → 양수 해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/134-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수, 상수항의 k 항, 직선의 식을 바꾼다. 제약: 꼭짓점의 y 좌표가 k 이차식이 되게 두고, 대입 후 k 이차방정식이 서로 다른 두 실근(하나는 양수, 하나는 음수)을 갖게 해야 양수 조건이 일한다.'
    creative: '(1) 직선 대신 포물선 y=x^2 위에 꼭짓점이 있게 하면 차수가 올라 ★3 (2) 양수 조건을 빼고 모든 k 의 합을 묻기(★2 유지) (3) 꼭짓점이 제1사분면에 있을 조건으로 바꾸면 부등식 두 개가 결합돼 ★3.'
```

```yaml
- id: GN-CM1-134-276
  page: 134
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['확인체크']
  category_type: '특강 확인체크'
  summary: |
    x 축과 두 점 (-3, 0), (1, 0) 에서 만나고 y 축과 (0, 3) 에서 만나는 이차함수의 그래프가 (2, k) 를 지날 때 k.
  category: 'x 절편 두 개 → y=a(x+3)(x-1) 인수분해형 → 한 점으로 a → x=2 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'x 절편이 주어진 이차함수의 식 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 절편 두 개가 주어졌을 때 인수분해형을 고르는 표준 절차이고, a 결정과 대입이 각각 한 줄이라 계산 부담도 가장 가볍다. 통찰 0 이지만 M_total 6 이라 −1 조건(≤5)에는 닿지 않아 특강 확인체크 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: 'y=a(x+3)(x-1) → (0, 3) 으로 a=-1 → x=2 의 함숫값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm1/items/134-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 x 절편과 y 절편, 묻는 점의 x 좌표를 바꾼다. 제약: y 절편 값이 a·(절편의 곱) 으로 정수 a 를 주도록 고르고, 두 절편이 서로 달라야 인수분해형이 성립한다.'
    creative: '(1) y 절편 대신 꼭짓점의 y 좌표를 주면 축을 먼저 구해야 해 ★2~3 (2) 두 x 절편을 어떤 이차방정식의 두 근으로 주면 근과 계수의 관계와 이어져 ★3 (3) 지나는 점의 좌표 (2, k) 대신 k 의 부호만 묻게 하면 그래프 개형 판단형(135-e3 계열)으로 옮겨 간다.'
```

```yaml
- id: GN-CM1-135-e3
  page: 135
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['특강']
  category_type: '특강 예제'
  summary: |
    위로 볼록하고 x 축과 -1, 2 에서 만나는 y=ax^2+bx+c 의 그래프를 보고, a·b·c 로 이루어진 다섯 개의 부등식·등식 중 옳지 않은 것 고르기. 5지선다.
  category: '그래프 개형에서 a, b, c 의 부호 → 각 선택지를 부호의 곱 또는 특정 x 의 함숫값으로 환원'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '그래프(기하)를 계수의 부호(대수)로 옮기고, 나아가 a+b+c · 4a+2b+c · a-2b+4c 를 각각 f(1), f(2), 4f(-1/2) 라는 함숫값으로 되읽는 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이차함수의 그래프와 계수 a, b, c 의 부호'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계수를 하나씩 부호로 옮기는 앞단보다, 계수의 일차결합을 그래프 위의 함숫값으로 되읽는 뒷단이 이 유형의 진짜 도구다(RT d2). 특히 a-2b+4c 를 4f(-1/2) 로 보지 못하면 부호를 찍게 된다. 볼록 방향·축의 위치·y 절편이 겹치는 이중 함정(T-부호·T-범위)이라 M_total 8. 특강 예제 ★2 출발에서 d2 통찰로 +1 → ★3.
  tier: star_3
  mechanism_primary: '위로 볼록 → a<0 · 축 x=1/2>0 → b>0 · y 절편 c>0 → 각 식을 부호 곱과 f(1), f(2), f(-1/2) 로 판정'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: '본문 풀이'
  figure: 'crop:fig-135-e3.png'
  latex: latex-bank/gn-cm1/items/135-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '그래프의 볼록 방향과 두 x 절편 위치(따라서 축의 부호와 y 절편의 부호)를 바꾼다. 제약: 선택지의 일차결합은 반드시 f(정수) 나 4f(반정수) 로 되읽히는 조합이어야 하고, 그림의 절편 라벨(-1, 2)과 선택지의 대입점이 서로 맞물리게 고정한다.'
    creative: '(1) 절편 하나를 그림에서 지우고 축만 표시하면 정보가 줄어 ★3~4 (2) 옳은 것의 개수를 묻는 ㄱㄴㄷㄹ 보기형으로 바꾸기(135-277 형태 ★3) (3) a, b, c 대신 b^2-4ac 나 a+b+c 의 부호만 묻게 하면 판별식·함숫값 해석으로 좁혀져 ★2~3.'
```

```yaml
- id: GN-CM1-135-277
  page: 135
  vendor_label: '특강'
  vendor_level: '-'
  vendor_tags: ['확인체크']
  category_type: '특강 확인체크'
  summary: |
    아래로 볼록하고 원점과 (-2, 0) 을 지나는 y=ax^2+bx+c 의 그래프를 보고, 보기 ㄱ~ㄹ 중 옳은 것만 모두 고르기.
  category: '그래프에서 a>0 · c=0 · 축 x=-1 → b=2a → 각 보기를 a 한 문자로 환원'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '그래프가 원점을 지나 c=0 이고 두 x 절편이 -2 와 0 이라 b=2a 임을 읽어, 네 보기를 모두 a 하나의 부호 문제로 바꾸는 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이차함수의 그래프와 계수 a, b, c 의 부호(보기형)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    135-e3 과 같은 RT 골조이되 c=0 이 걸려 있어 보기마다 a 한 문자로 정리된다는 점이 다르다. 원점을 지난다는 것에서 c=0 을 읽지 못하면 ㄹ 의 부호를 정할 수 없고(T-범위), ㄴ 처럼 두 계수의 차는 부호의 곱과 달리 크기 비교라 따로 다뤄야 한다(T-부호). 특강 확인체크 ★2 출발 + RT d2 → ★3.
  tier: star_3
  mechanism_primary: 'a>0 · c=0 · b=2a → ㄱ ab=2a^2 · ㄴ a-b=-a · ㄷ 4a-2b+c=f(-2) · ㄹ a+3b+9c=7a 의 부호 판정'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄷ, ㄹ'
  answer_source: '답지'
  figure: 'crop:fig-135-277-2.png'
  latex: latex-bank/gn-cm1/items/135-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원점을 지나는 설정을 유지한 채 다른 x 절편을 -2 에서 다른 음수로 바꾸면 b=ka 의 비가 달라진다. 제약: 보기의 일차결합이 f(정수) 로 되읽히거나 a 한 문자로 정리되도록 계수 조합을 설계하고, 그림의 절편 라벨과 보기의 대입점을 맞물리게 고정한다.'
    creative: '(1) 원점 통과를 빼면 c 의 부호가 살아나 보기마다 문자가 둘이 되어 ★3~4 (2) 보기에 b^2-4ac 의 부호를 넣으면 판별식 해석이 추가돼 ★3 (3) 그래프를 주지 않고 a>0, c=0, f(-2)=0 만 주면 기하 단서가 사라져 추상도가 올라 ★4.'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 0 · ★2 6 · ★3 13 · ★4 4 · ★5 0
- 통찰형 15 · 절차형 8 · premium 0
- 통찰 라벨 20 개: I-EQV 13 · I-MI 3 · I-RT 3 · I-VF 1 (depth 1 이 10 · depth 2 가 10 · depth 3 없음). I-XU·I-SC·I-SYM·I-PD·I-BW 는 0 이라 ★5 조건(통찰 3 개 이상 + SC/VF/SYM/XU)을 넘는 문항이 없다
- 구역: 연습문제 STEP 1 6문(★2 2 · ★3 4) · 연습문제 STEP 2 8문(★3 7 · ★4 1) · 연습문제 실력 UP 3문(★4 3) · 특강 6문(★2 4 · ★3 2). 벤더 level 신호와 라벨이 2 단 이상 어긋난 문항은 없다
- type_hint 상위 5(묶음 기준): 「이차함수의 그래프와 계수의 부호」 2(135-e3 · 135-277) · 「이차함수의 꼭짓점으로 미정계수」 2(134-e1 · 134-275) · 「이차함수의 식 구하기」 2(134-e2 · 134-276) · 「대칭식 조건으로 미정계수 구하기」 2(128-259 · 129-267) · 「두 수를 근으로 하는 이차방정식 만들기」 2(128-262 · 130-271). 나머지 13 개는 1 회씩이며 이 파트가 단원의 응용·심화 구역이라 유형이 넓게 흩어져 있다
- M_total 분포: 6 이 3문 · 7 이 4문 · 8 이 8문 · 9 이 6문 · 10 이 1문(평균 8.0). Mₐ=3 은 130-270 · 130-273 둘뿐(미지의 이차식 f, P)이고 둘 다 target_cohort 가 중상위권이다
- 그림: 3문(`crop:fig-130-274.png` · `crop:fig-135-e3.png` · `crop:fig-135-277-2.png`). 130-274 는 직각이 B 인 삼각형과 두 변 위에 놓인 내접 정사각형, 135-e3 은 위로 볼록·절편 -1 과 2, 135-277 은 아래로 볼록·원점과 -2 통과다
- ★4 4문의 상승 경로: 진입 봉쇄형 d2 통찰(129-266 차수 낮추기) · 분기와 기각(130-272 MI d2 + VF) · 미지 최고차 계수와 Mₐ=3(130-273) · 기하에서 대수로의 전환(130-274 RT d2)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-129-264 | 통찰 2 개(I-MI d1 + I-EQV d1)라 규칙상 +1 후보이나 두 분기 모두 표준 이차방정식이고 최종 식이 한 줄이라 ★3 유지 | ★3 / ★4 |
| GN-CM1-129-269 | 통찰 2 개(I-EQV d2 + I-MI d1)로 +1 후보이나 2/3 파트 「두 근의 비」 유형의 절댓값 변주이고 계산이 두 줄이라 ★3 유지 | ★3 / ★4 |
| GN-CM1-129-265 | STEP 2(★3 출발)인데 절차형 · M_total 6. −1 조건(통찰 0 · M_total ≤ 5)에 걸리지 않아 ★3 으로 두었으나 체감은 ★2 | ★2 / ★3 |
| GN-CM1-129-266 | ★4 인데 통찰이 I-EQV 둘뿐이라 §2.13 의 ★4 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 부재 YELLOW. 차수 낮추기를 I-RT 로 볼지는 카탈로그 설계 때 결정 | ★4 (YELLOW) |
| GN-CM1-129-267 · GN-CM1-134-275 | 발문에 명시된 「정수 k」·「양수 k」 필터로 두 해 중 하나를 버리는 마지막 줄을 I-VF d1 로 볼지 경계. 조건이 드러나 있어 두 문항 모두 카운트하지 않고 통일 | ★3 / ★2 |
| GN-CM1-130-270 | 미정계수 연립 갈래가 병존해 I-SC d1 로 볼 여지가 있으나 필수 경로가 아니라 카운트하지 않음(2/3 파트 124-249 와 같은 처리) | ★3 |
| GN-CM1-134-e1 | 특강 예제(★2 출발)인데 문자 둘의 완전제곱 정리로 M_total 8. 통찰 0 이라 +1 근거가 계산량뿐이어서 ★2 로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **통합해도 되는 것**: ⑴ 「대칭식의 값·대칭식 조건으로 미정계수」(128-258 · 128-259 · 129-265 · 129-267)는 묻는 방향(값이냐 계수냐)과 묶는 대상만 다르므로 1/3·2/3 파트의 대칭식 유형과 한 유형(base ★2) + 변주 목록으로 묶는다. ⑵ 「두 수를 근으로 하는 이차방정식 만들기」(128-262 · 130-271)도 새 근이 역수냐 근의 식이냐만 다르므로 2/3 파트의 125-e12 계열과 같은 유형(base ★2)이고, 근의 식 변형이 들어간 128-262 만 소유형으로 둔다. ⑶ 특강의 「이차함수 식 구하기」(134-e2 · 134-276)는 주어진 단서가 축이냐 x 절편이냐로만 갈려 표준형 선택 변주 하나로 충분하다(base ★2).
- **따로 세워야 하는 것**: ⑴ 「근의 부호·절댓값 조건」(129-269 · 130-272)은 곱의 부호로 근의 부호를 먼저 정하고 절댓값을 합 또는 차로 갈라야 해서 대칭식 유형과 분리한다(base ★3, 절댓값의 비 / 절댓값의 합 두 소유형, 130-272 는 기각 분기가 있어 base ★4). ⑵ 「근을 대입해 차수 낮추기」(129-266)는 2/3 파트 122-245 와 같은 도구이고 여기서 무리식까지 붙었으므로 독립 유형(base ★3, 무리식 결합 변주 ★4). ⑶ 「미지의 이차식 결정」(130-270 · 130-273)은 이 파트에서 유일하게 Mₐ=3 이고 최고차 계수의 미지 여부가 난도를 가르므로 독립 유형(base ★3, 최고차 미지 변주 ★4). ⑷ 「도형 조건 + 근과 계수의 관계」(130-274)는 기하 → 대수 전환이 필수라 단원 15 안에서 유일한 I-RT 축이므로 따로 세운다(base ★4). ⑸ 「계수를 잘못 보고 푼 이차방정식」(129-268)은 어느 관계가 보존되는지 짝짓는 도구가 전용이라 독립 유형(base ★3). ⑹ 특강의 「그래프와 계수의 부호」(135-e3 · 135-277)는 계수의 일차결합을 함숫값으로 되읽는 RT 가 본질이라 꼭짓점·식 구하기 유형과 분리한다(base ★3).
- 단원 15 전체(48문 · 3 파트) 종합: ★1 2 · ★2 24 · ★3 18 · ★4 4 · ★5 0 이며 ★4 는 전부 이 3/3 파트의 STEP 2 최상단과 실력 UP 에 몰려 있다. ★5 후보는 없다 — 통찰이 I-EQV 에 크게 치우쳐 있고(3 파트 합계에서 압도적) I-XU·I-SC·I-SYM 이 한 번도 나오지 않기 때문이다. 카탈로그를 만들 때 이 단원의 ★5 슬롯은 기존 문항을 올리는 대신 130-274 의 도형 결합이나 판별식·이차함수 최대와의 단원 경계 결합으로 새로 설계하는 편이 맞다.
