---
name: mechanism-데이터-GN-CM2-21
description: 개념원리 공통수학2 21 ‘모든’이나 ‘어떤’을 포함한 명제(1/1 · 177~179쪽 13문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 · 전사본 latex-bank/gn-cm2
  section: 21 ‘모든’이나 ‘어떤’을 포함한 명제
  unit_code: GN-CM2-21
  part: "1/1"
  extract_range: "177~179쪽 · 177-e7~179-433"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 공통수학2 · 21 ‘모든’이나 ‘어떤’을 포함한 명제 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 177~179쪽, 단원 21 ‘모든’이나 ‘어떤’을 포함한 명제의 13문항 전수를 다룬다. 구역은 필수·발전 예제 3문(필수 예제 1 + 확인체크 2) · 연습문제 STEP 1 4문 · STEP 2 4문 · 실력 UP 2문이고, 그림 문항은 없다. 개념원리 고등의 난이도 신호는 구역과 태그에 실려 있어 확인체크는 ★1, 필수 예제와 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼고 M_total·통찰로 ±1 조정했다(179-431 의 「교육청 기출」 태그는 통찰이 1개뿐이라 가산하지 않았다).

이 단원은 한정사 명제의 참·거짓과 부정이라는 한 뿌리에서 시작해, 뒤로 갈수록 ⑴ 조건을 진리집합의 포함·서로소 관계로 번역하는 동치 변환과 ⑵ 그 관계를 개수 세기·구간 최대최소·판별식으로 옮기는 표현 전환이 주 통찰로 등장한다. 그래서 통찰 라벨은 I-EQV 8단계 · I-RT 2단계로 두 종류에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]`(단계별 통찰) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-177-e7
  page: 177
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ['필수']
  category_type: '필수 예제'
  summary: |
    전체집합이 U={-2,-1,0,1,2} 일 때 ㄱ~ㄹ 네 명제(‘모든 x’ 2개 · ‘어떤 x’ 2개)의 참·거짓을 판정해 참인 것만 고르기.
  category: '한정사 명제의 참·거짓 → 유한 전체집합에서 반례·사례 탐색'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '‘모든’이나 ‘어떤’을 포함한 명제의 참, 거짓'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ‘모든’은 반례 한 개, ‘어떤’은 성립하는 원소 한 개로 끝나는 표준 절차를 네 번 반복한다. 전체집합이 실수가 아니라 원소 5개의 유한집합이라는 점이 ㄴ·ㄹ 의 판정을 가르는 유일한 함정(T-범위)이다.
    [분류 이슈] 통찰 0·M_total 5 라 v3.8 산식의 −1 조건에 걸리지만, 보기 4개를 전수 판정해야 해 필수 예제 출발점 ★2 를 유지했다(후보 ★1/★2).
  tier: star_2
  mechanism_primary: '‘모든’ → 반례 1개 탐색 · ‘어떤’ → 성립 원소 1개 탐색 → U 의 원소 5개를 대입해 ㄱ~ㄹ 를 각각 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄷ'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-cm2/items/177-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체집합의 원소(-3~3 · 자연수 1~5 등)와 각 보기의 상수(2x-1<5 의 5 · |x|>2 의 2 · x^2>x+2 의 우변)를 바꿀 수 있다. 제약은 ‘모든’ 보기는 반례가 U 안에 있는지 없는지가 분명해야 하고, ‘어떤’ 보기는 성립 원소가 U 안에 적어도 하나 있어야 하며, 참인 보기 개수를 의도한 대로 맞추는 것.'
    creative: '(1) 거짓인 보기만 고르기로 뒤집기(★2 유지) (2) 전체집합을 실수 전체로 바꾸면 반례 탐색이 판별식·최대최소 판정으로 바뀌어 ★3 (3) 각 보기의 부정을 쓰고 그 부정의 참·거짓을 묻기(I-EQV d1 추가 ★2) (4) 보기가 참이 되도록 하는 상수의 범위를 묻는 역문제로 바꾸면 I-BW 가 붙어 ★3~4.'
```

```yaml
- id: GN-CM2-177-422
  page: 177
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ['확인체크']
  category_type: '확인체크'
  summary: |
    다섯 개의 한정사 명제(‘어떤 양의 정수’·‘어떤 무리수’·‘모든 실수’·‘모든 자연수’) 중 거짓인 것 고르기. 5지선다.
  category: '한정사 명제의 참·거짓 → 반례 하나로 기각'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '‘모든’이나 ‘어떤’을 포함한 명제의 참, 거짓'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ①②는 성립 원소를 하나 찾으면 끝이고 ③⑤는 최솟값 확인으로 즉시 참이다. ④만 x=y=0 이라는 경계 반례를 가지며 그것이 이 문항의 유일한 함정(T-경계)이다. 다섯 선지 모두 한 줄 판정이라 확인체크 출발점 ★1 을 유지했다.
  tier: star_1
  mechanism_primary: '각 선지를 ‘모든’이면 반례 탐색 · ‘어떤’이면 사례 탐색 → x=y=0 에서 x^2+y^2>0 이 깨짐'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '④'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/177-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 선지의 수(x-2=4 의 우변 · 무리수 조건의 근호 안 수 · x+y≥2 의 2)를 바꿀 수 있다. 제약은 거짓 선지가 정확히 하나여야 하고, 그 거짓이 0 이나 경계값 같은 한 점 반례로 드러나야 한다는 것.'
    creative: '(1) x^2+y^2>0 을 ≥0 으로 고쳐 모두 참으로 만든 뒤 참인 선지의 개수를 묻기(★1) (2) 전체집합을 유리수·무리수로 바꿔 ‘어떤’ 선지의 존재성이 실제로 깨지게 하면 ★2 (3) 거짓 선지의 부정을 쓰고 그 부정이 참임을 보이게 하면 I-EQV d1 추가 ★2.'
```

```yaml
- id: GN-CM2-177-423
  page: 177
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ['확인체크']
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 두 명제(‘어떤 실수 x 에 대하여 x^2≤0’ · ‘모든 실수 x 에 대하여 x^2-x+4>0’)의 부정을 말하고 그 부정의 참·거짓 판별하기.
  category: '한정사 명제의 부정 → 한정사 교환·부등호 반전 → 참·거짓 판정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '‘모든’이나 ‘어떤’을 포함한 명제의 부정'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ‘어떤 ~이다’의 부정은 ‘모든 ~아니다’, 부등호는 ≤ 와 > 가 서로 바뀐다는 규칙 적용이 전부다. 부정을 쓴 뒤의 판정은 ⑴ x=0 반례 한 개, ⑵ 판별식이 음수라는 한 줄로 끝난다. 등호를 어디에 붙이는지(T-경계)만 함정이라 확인체크 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '한정사 교환 + 부등호 부정 → ⑴ 모든 x 에서 x^2>0 은 x=0 반례로 거짓 · ⑵ 어떤 x 에서 x^2-x+4≤0 은 판별식이 음수라 거짓'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 모든 실수 $x$에 대하여 $x^2>0$이다. (거짓) ⑵ 어떤 실수 $x$에 대하여 $x^2-x+4\le 0$이다. (거짓)'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/177-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 부등호(≤ · <)와 ⑵ 의 이차식 계수·상수항을 바꿀 수 있다. 제약은 ⑵ 가 판별식으로 판정되도록 부호가 확정돼야 하고, 원 명제와 그 부정의 참·거짓이 항상 서로 반대라는 점이 유지돼야 한다는 것.'
    creative: '(1) 상수항을 낮춰 판별식을 양수로 만들면 부정이 참이 되어 답의 구조가 뒤집힘(★2) (2) 부정이 참이 되도록 하는 상수의 범위를 묻는 역문제는 I-EQV d2 가 붙어 ★3 (3) 부정만 쓰게 하고 참·거짓은 묻지 않으면 ★1 유지 (4) ‘모든’과 ‘어떤’이 겹친 이중 한정사 조건의 부정으로 확장하면 ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-178-424
  page: 178
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    전체집합이 |x|≤4 인 정수일 때 두 조건 p(x^2-4x=0) · q(x^2-2x-3≤0) 에 대하여 조건 ‘p 또는 ~q’의 진리집합의 원소의 개수 구하기.
  category: '조건의 진리집합 → ‘또는’·부정을 합집합·여집합으로 → 원소 개수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조건의 진리집합과 집합 연산 — ‘또는’·부정의 진리집합'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차방정식과 이차부등식을 풀어 두 진리집합을 얻은 뒤 ‘또는’을 합집합, ‘~’를 전체집합에 대한 여집합으로 옮기면 끝난다. 전체집합이 실수가 아니라 -4 이상 4 이하의 정수라는 제한(T-범위)만 지키면 되는 표준 절차라 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'p·q 의 진리집합 계산 → ~q 는 U 안에서의 여집합 → 두 집합의 합집합의 원소 개수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/178-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'U 의 범위(|x|≤4 → |x|≤5), p 의 이차방정식 근, q 의 이차부등식 계수를 바꿀 수 있다. 제약은 근과 부등식의 해가 모두 U 안의 정수로 떨어져야 하고, 여집합을 세는 문항이므로 U 의 원소 개수가 먼저 확정돼야 한다는 것.'
    creative: '(1) ‘p 그리고 q’로 바꿔 교집합을 묻기(★2 유지) (2) 원소 개수 대신 원소의 합·최댓값을 묻기(★2) (3) U 를 실수 전체로 바꾸고 구간의 길이를 묻게 하면 개수 세기가 구간 계산으로 바뀌어 I-RT d1 · ★3 (4) q 의 계수를 미지수로 두고 개수가 주어진 값이 되게 하는 조건을 묻는 역문제는 ★3~4.'
```

```yaml
- id: GN-CM2-178-425
  page: 178
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    실수 x, y 에 대한 ㄱ~ㄹ 네 명제(8의 배수와 4의 배수 · xy=0 이면 x^2+y^2=0 · 양수의 곱과 절댓값 · 이등변삼각형의 두 각)의 참·거짓을 판정해 참인 것만 고르기.
  category: '명제의 참·거짓 → 가정 집합이 결론 집합에 포함되는지 확인 · 반례 제시'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '명제의 참·거짓과 반례'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 명제 모두 가정에서 결론이 항상 따라오는지 확인하는 표준 판정이다. ㄴ 은 (x,y)=(0,1), ㄹ 은 같은 두 변이 다른 쌍인 이등변삼각형이라는 반례 한 개씩으로 끝난다. 도형 서술이 섞여 있을 뿐 노동량이 가볍고 통찰이 없어 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 명제의 가정 집합이 결론 집합에 포함되는지 확인 → 포함되지 않으면 반례 원소 한 개 제시'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄷ'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/178-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'ㄱ 의 배수 관계(8과 4 → 12와 3 등)와 ㄷ 의 부호 조건을 바꿀 수 있다. 제약은 참인 보기는 가정 집합이 결론 집합에 실제로 포함돼야 하고(배수 관계는 큰 수가 작은 수의 배수일 때만 참), 거짓 보기는 주어진 수 범위 안에 반례가 있어야 한다는 것.'
    creative: '(1) 각 보기의 역·대우까지 함께 판정하게 하면 I-EQV d1 이 붙어 ★3 (2) 거짓 보기의 반례를 직접 쓰게 하는 서술형(★2 유지) (3) ㄴ 을 역방향(x^2+y^2=0 이면 xy=0)으로 바꿔 참인 보기를 늘리면 ★2 (4) 보기를 여섯 개로 늘리고 도형·정수 조건을 섞으면 판정 횟수만 늘어 ★2~3.'
```

```yaml
- id: GN-CM2-178-426
  page: 178
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    전체집합 U 에서 두 조건 p, q 의 진리집합이 P, Q 일 때 명제 p → ~q 가 거짓임을 보이는 원소가 속하는 집합 고르기. 5지선다.
  category: '명제가 거짓임을 보이는 원소 → 진리집합의 포함 관계의 부정'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '‘p → ~q 가 거짓’을 ‘P 가 ~q 의 진리집합인 Q 의 여집합에 포함되지 않는다’, 곧 P 와 Q 의 교집합이 비지 않는다로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '명제의 참·거짓과 진리집합의 포함 관계 — 반례 원소가 속하는 집합'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    명제 p → q 가 참일 조건이 P 가 Q 에 포함되는 것이라는 기본형에 부정이 한 겹 더 붙은 형태다. 결론이 ~q 이므로 반례 원소는 P 에 있으면서 Q 의 여집합에는 없는 원소, 곧 P 와 Q 의 교집합에 속한다. 부정을 두 번 처리하는 동치 변환 통찰 1개(EQV d1)·M_total 5 로 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'p → ~q 가 거짓 ⟺ P 가 Q 의 여집합에 포함되지 않음 ⟺ P 와 Q 의 교집합이 비지 않음 → 반례 원소는 P∩Q 에 속함'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/178-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치가 없는 추상 문항이라 바꿀 수 있는 것은 부정의 위치(p → ~q · ~p → q · ~p → ~q)와 선지의 집합 연산 조합이다. 제약은 정답이 되는 영역이 선지 안에 정확히 하나만 나타나고 나머지 선지가 서로 다른 영역을 가리켜야 한다는 것.'
    creative: '(1) U 와 P, Q 를 구체적인 수의 집합으로 주고 반례 원소를 직접 구하게 하면 절차형 ★2 (2) 반대로 명제가 참임을 보장하는 포함 관계를 고르게 하면 ★2 (3) 조건을 셋으로 늘려 p → (q 또는 ~r) 의 반례 영역을 묻게 하면 벤 다이어그램 분할이 필요해 I-RT d1 추가 ★3 (4) 반례 원소의 개수를 묻는 구체형으로 바꾸면 개수 세기가 붙어 ★3.'
```

```yaml
- id: GN-CM2-178-427
  page: 178
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    세 조건 p(x<2a-5) · q(4x-1=27) · r(x^2-3x-4=0) 에 대하여 명제 q → ~p 와 r → p 가 모두 참이 되도록 하는 정수 a 의 개수 구하기.
  category: '명제가 참일 조건 → 진리집합의 포함 관계 → 미정계수의 범위 → 정수 개수'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 명제가 참이라는 조건을 ‘q 의 해 7 이 P 밖에 있다’와 ‘r 의 두 근이 모두 P 안에 있다’는 부등식 두 개로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '명제가 참이 되도록 하는 미정계수의 값의 범위'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    q, r 의 진리집합은 원소가 각각 1개·2개인 유한집합이라 포함 관계가 곧 경계 부등식이 된다. q → ~p 는 7 이 P 에 속하지 않을 조건, r → p 는 두 근이 모두 P 에 속할 조건이고 둘을 합치면 a 가 좁은 구간에 갇힌다. 등호 포함 여부(T-경계)와 정수만 센다는 점(T-범위)이 함정이며 통찰 1개·M_total 7 로 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'q·r 의 해 구하기 → q→~p 참은 7 이 P 밖 · r→p 참은 두 근이 P 안 → 두 부등식의 공통 범위에서 정수 a 세기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/178-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차방정식 4x-1=27 의 우변, 이차방정식 x^2-3x-4=0 의 근, p 의 경계식 2a-5 의 계수를 바꿀 수 있다. 제약은 r 의 최대 근과 q 의 해 사이에 정수 a 가 남을 만큼 간격이 있어야 하고, p 의 부등호가 < 인지 ≤ 인지에 따라 경계 정수의 포함 여부가 달라지므로 부등호를 고정해야 한다는 것.'
    creative: '(1) 정수 a 의 개수 대신 a 의 최댓값·최솟값을 묻기(★2 유지) (2) p 를 구간 조건 a≤x≤a+3 으로 바꾸면 양끝 부등식이 두 개 생겨 ★3 (3) r 의 근을 미지수로 두고 두 명제가 모두 참이 될 근의 조건을 묻는 역문제는 I-BW d2 가 붙어 ★3~4 (4) q → ~p 를 대우로 바꿔 쓰게 하면 I-EQV d1 을 유지한 채 ★2.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-178-428
  page: 178
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    실수 x, y, z 에 대한 조건 (x-y)^2+(y-z)^2+(z-x)^2=0 의 부정으로 옳은 것 고르기. 5지선다.
  category: '제곱의 합이 0 인 조건 → 세 수가 모두 같다로 동치 변환 → 그 부정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '실수의 제곱의 합이 0 이면 각 항이 0 이라는 성질로 조건을 x=y=z 로 바꿔 씀'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '‘세 수가 모두 같다’의 부정이 ‘모두 서로 다르다’가 아니라 ‘적어도 두 수가 서로 다르다’임을 구별'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '조건의 부정 — ‘모두’와 ‘적어도 하나’의 부정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건을 x=y=z 로 옮기지 못하면 선지를 비교할 수조차 없고, 옮긴 뒤에도 ‘모두 같다’의 부정을 ③④ 처럼 ‘모두 다르다’로 잘못 읽는 것이 이 문항의 본체다. 계산은 사실상 없고 동치 변환과 부정의 범위 판단 두 단계가 전부라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '제곱의 합이 0 → x=y=z → 그 부정은 세 수 중 적어도 두 수가 서로 다름'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/178-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제곱의 합에 들어가는 항의 개수와 문자 수(두 문자·네 문자)를 바꿀 수 있다. 제약은 실수 범위여야 제곱의 합이 0 인 것과 각 항이 0 인 것이 동치가 되고, 선지에 ‘모두’ 표현과 ‘적어도’ 표현이 함께 있어야 함정이 살아 있다는 것.'
    creative: '(1) 조건을 |x-y|+|y-z|=0 으로 바꿔도 골조 유지(★3) (2) 부정 대신 원 조건을 만족시키는 순서쌍을 묻는 구체형은 ★2 (3) 실수 조건을 빼고 복소수 범위로 두면 제곱의 합이 0 이어도 x=y=z 가 따라오지 않아 ★4 (4) 세 조건의 부정을 ㄱㄴㄷ 보기로 묶어 물으면 판정 횟수가 늘어 ★3 유지.'
```

```yaml
- id: GN-CM2-179-429
  page: 179
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    세 조건 p, q, r 의 진리집합 P, Q, R 가 P ⊂ (Q-R) 을 만족할 때 항상 참인 명제를 모두 고르기. 5지선다(정답 2개).
  category: '차집합 포함 조건 → 두 개의 독립 관계로 분해 → 각 선지 판정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'P ⊂ (Q-R) 을 ‘P 가 Q 에 포함된다’와 ‘P 와 R 가 서로소다’ 두 개의 독립 정보로 분해'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '진리집합의 포함 관계로 명제의 참·거짓 판정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차집합 한 줄을 두 관계로 쪼개는 순간 ①(P 가 R 의 여집합에 포함)과 그 대우인 ④가 바로 확정된다. 나머지 ②③⑤는 포함 관계의 역이나 Q 와 R 사이의 관계를 요구하는데 주어진 조건이 그것을 보장하지 않으므로 벤 다이어그램 반례로 기각된다. 분해 통찰 1개(EQV d2)·계산 없음으로 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'P ⊂ (Q-R) → P ⊂ Q 이고 P 와 R 는 서로소 → ①과 그 대우 ④만 항상 참'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①, ④'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/179-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '추상 문항이라 바꿀 수 있는 것은 주어진 포함 조건의 형태(P ⊂ Q-R · P-Q ⊂ R · P∪Q ⊂ R)와 선지에 쓰인 부정의 위치다. 제약은 항상 참인 선지가 의도한 개수만큼만 나오도록, 그리고 그중 둘이 서로 대우가 되도록 배치하는 것.'
    creative: '(1) 항상 참인 명제의 개수를 묻기(★3 유지) (2) 조건을 벤 다이어그램 그림으로 주면 표현 전환이 사라져 ★2 (3) P, Q, R 를 구체적인 수의 집합으로 주면 절차형 ★2 (4) 조건을 두 줄로 늘려 P ⊂ Q-R 와 R ⊂ S 의 연쇄 추론을 요구하면 ★4.'
```

```yaml
- id: GN-CM2-179-430
  page: 179
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    전체집합이 13 이하의 자연수이고 조건 p 가 ‘x 는 소수’일 때 명제 ~p → q 가 참이 되도록 하는 진리집합 Q 의 개수 구하기.
  category: '명제가 참일 조건 → 특정 원소를 반드시 포함하는 집합 → 부분집합의 개수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '‘Q 가 P 의 여집합을 반드시 포함한다’는 포함 조건을 남은 원소들의 부분집합 개수 2의 거듭제곱 세기로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '명제가 참이 되도록 하는 진리집합의 개수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ~p → q 가 참인 것이 ‘P 의 여집합이 Q 에 포함된다’와 같다는 데까지는 표준이고, 그 다음 Q 를 하나씩 나열하지 않고 ‘여집합은 반드시 넣고 소수들은 넣거나 말거나’로 보는 개수 세기 전환이 본체다. 1 을 소수로 착각하면 개수가 통째로 어긋난다(T-범위). 전환 통찰 1개(RT d2)로 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '13 이하 소수로 P 결정 → ~p→q 참은 P 의 여집합이 Q 에 포함 → Q 는 여집합에 소수들의 임의 부분집합을 더한 것 → 2의 거듭제곱'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$64$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/179-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체집합의 상한(13 → 20 · 30)과 조건 p(소수 · 짝수 · 3의 배수)를 바꿀 수 있다. 제약은 답이 P 의 원소 개수만으로 2의 거듭제곱으로 결정되므로 상한을 바꿀 때 해당 원소 개수를 다시 세야 하고, Q 가 U 의 부분집합이라는 범위를 발문에 남겨야 한다는 것.'
    creative: '(1) 명제를 q → ~p 로 바꾸면 Q 가 P 의 여집합에 포함되는 조건이 되어 같은 거듭제곱 골조 유지(★3) (2) 조건을 하나 더 주고 두 명제가 모두 참이 되는 Q 의 개수를 묻기(★4) (3) 개수 대신 Q 의 원소의 합의 최솟값을 묻기(★3) (4) U 를 소수만으로 바꾸면 여집합이 비어 답이 전체 부분집합 개수로 단순해짐(★2).'
```

```yaml
- id: GN-CM2-179-431
  page: 179
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: ['교육청 기출']
  category_type: '연습문제 STEP 2'
  summary: |
    명제 ‘2≤x≤5 인 어떤 실수 x 에 대하여 x^2-8x+n≥0 이다’가 참이 되도록 하는 자연수 n 의 최솟값 구하기. 5지선다.
  category: '‘어떤 x’ 명제가 참일 조건 → 제한된 구간에서 이차함수의 최댓값 조건'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '‘구간 안의 어떤 x 에서 f(x)≥0’을 ‘그 구간에서 f 의 최댓값이 0 이상’으로 옮김(‘모든’이면 최솟값 조건이 되는 것과 구별)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '‘어떤 x’를 포함한 명제가 참이 될 조건 — 제한된 구간에서의 최대·최소'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한정사가 ‘어떤’인지 ‘모든’인지에 따라 최댓값 조건인지 최솟값 조건인지가 갈리는 것이 이 문항의 전부이고, 그 뒤는 축이 구간 안에 있으므로 축에서 먼 쪽 끝점에서 최댓값을 잡는 표준 절차다. 구간 제한(T-범위)과 등호 포함(T-경계)이 함정이며, 교육청 기출이지만 통찰 1개·계산 한 줄이라 STEP 2 출발점 ★3 유지(기출 가산 없음).
  tier: star_3
  mechanism_primary: '‘어떤 x’ 참 ⟺ 구간에서 f 의 최댓값이 0 이상 → 축에서 먼 끝점 x=2 의 값이 0 이상 → n 의 최솟값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/179-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간의 양끝(2≤x≤5), 일차항 계수(-8 → 축의 위치), 부등호 방향을 바꿀 수 있다. 제약은 축이 구간 안인지 밖인지, 축과 구간 중점의 대소가 어떤지에 따라 최댓값을 주는 끝점이 달라지므로 그것을 먼저 고정해야 하고, 답이 자연수로 떨어지도록 상수를 맞춰야 한다는 것.'
    creative: '(1) ‘어떤’을 ‘모든’으로 바꾸면 최솟값 조건이 되어 축의 함숫값이 답을 결정(★3 유지 · 골조 반전) (2) 부등호를 < 로 바꿔 부정을 거쳐 풀게 하면 동치 변환이 한 겹 늘어 ★4 (3) n 의 최솟값 대신 n 의 값의 범위나 정수 개수를 묻기(★3) (4) 구간을 매개변수 a≤x≤a+3 으로 두면 축의 위치 분기가 생겨 I-MI d2 추가 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-179-432
  page: 179
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    실수 전체에서 명제 ‘어떤 실수 x 에 대하여 x^2-2kx+k+6<0 이다’의 부정이 참이 되도록 하는 정수 k 의 개수 구하기.
  category: '명제의 부정 → 모든 실수에서 이차부등식 성립 → 판별식 → 정수 개수'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '원 명제의 부정을 ‘모든 실수 x 에서 f(x)≥0’으로 쓴 뒤 그것을 다시 판별식이 0 이하라는 조건으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '‘어떤 x’ 명제의 부정이 참이 될 조건 — 판별식'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    부정을 먼저 취해 전칭명제로 바꾸는 한 수만 놓치지 않으면, 뒤는 모든 실수에서 이차식이 음이 아닐 조건을 판별식으로 풀어 정수를 세는 표준 절차다. 원 부등호가 < 이므로 부정에서 등호가 살아나 경계 정수 두 개가 답에 포함되는 것이 함정(T-경계)이다.
    [분류 이슈] 벤더 실력 UP 출발점은 ★4 이나 통찰이 EQV 한 개뿐이고 골조가 판별식 한 줄이라 체감은 ★3 에 가깝다(§2.13 저노출 유형 부재 YELLOW). 라벨은 벤더 신호대로 ★4 로 두고 기록만 한다.
  tier: star_4
  mechanism_primary: '‘어떤 x 에서 f(x)<0’의 부정은 ‘모든 x 에서 f(x)≥0’ → 판별식이 0 이하 → k 의 닫힌 구간에서 정수 개수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/179-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 -2k 와 상수항 k+6 의 계수를 바꿀 수 있다. 제약은 판별식이 k 에 대한 이차부등식이 되어 해가 닫힌 구간으로 나와야 하고, 구간의 양끝이 정수로 떨어져야 개수가 깔끔하며, 원 부등호가 < 여야 부정에서 등호가 살아나 경계 정수가 포함된다는 것.'
    creative: '(1) 부정을 거치지 않고 ‘모든 실수 x 에서 f(x)≥0’을 직접 물으면 통찰이 하나 빠져 ★3 (2) 원 명제 자체가 참이 되도록 하는 k 를 물으면 판별식이 양수인 여집합 구간이 답(★4 유지) (3) 실수 전체 대신 1≤x≤4 로 구간을 제한하면 판별식 대신 구간 최대·최소 분기가 생겨 I-MI d2 추가 ★4~5 (4) 정수 개수 대신 k 의 최댓값과 최솟값의 합을 묻기(★4 유지).'
```

```yaml
- id: GN-CM2-179-433
  page: 179
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    세 조건 p, q, r 의 진리집합 P, Q, R 가 ㈎ 어떤 x∈P 에 대하여 x∉Q · ㈏ 모든 x∈Q 에 대하여 x∉R 를 만족할 때 ㄱ~ㄷ 중 항상 참인 명제만 고르기.
  category: '한정사 조건 → 집합의 비포함·서로소 관계로 번역 → 각 명제 판정'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '㈎ 를 ‘P 가 Q 에 포함되지는 않는다’, ㈏ 를 ‘Q 와 R 는 서로소다’로 번역'
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '번역한 관계를 벤 다이어그램 배치로 옮겨 ㄱ·ㄷ 이 깨지는 반례를 직접 구성'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '한정사 조건이 주어진 진리집합의 포함 관계와 명제의 참·거짓'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 는 P 와 Q 에 대해 ‘완전히 포함되지는 않는다’는 약한 정보만 주고, ㈏ 는 Q 와 R 가 서로소라는 강한 정보를 준다. 강한 쪽에서 곧바로 나오는 ㄴ 만 항상 참이고 ㄱ·ㄷ 은 나머지 영역을 자유롭게 놓은 벤 다이어그램으로 기각된다. ㈎ 를 ‘Q 가 P 에 포함된다’처럼 뒤집어 읽는 것이 주 함정(T-표기)이다. 번역·반례 구성 통찰 2개로 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: '㈎ → P 는 Q 에 포함되지 않음 · ㈏ → Q 와 R 는 서로소 → ㄴ 만 ㈏ 와 동치이고 ㄱ·ㄷ 은 반례 배치로 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄴ'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-cm2/items/179-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치가 없으므로 바꿀 수 있는 것은 두 조건의 한정사(‘어떤’·‘모든’)와 소속 부정의 위치, 그리고 보기 명제의 조합이다. 제약은 항상 참인 보기가 의도한 개수만 나오도록 강한 조건(서로소)과 약한 조건(비포함)을 하나씩 섞고, 약한 조건에서 역방향 포함이 따라 나오지 않게 두는 것.'
    creative: '(1) ㈎ 를 ‘모든 x∈P 에 대하여 x∉Q’로 바꾸면 P 와 Q 도 서로소가 되어 참인 보기가 늘고 ★3 (2) P, Q, R 를 구체적인 수의 집합으로 주면 절차형 ★2 (3) 보기에 역·대우를 섞으면 판정 횟수가 늘어 ★4 유지 (4) 집합을 넷으로 늘려 연쇄 포함을 묻게 하면 ★5 후보이나 SC·VF·SYM·XU 중 하나가 필요.'
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 2 · ★2 5 · ★3 4 · ★4 2 · ★5 0
- 통찰형 8 · 절차형 5 · premium 0
- 통찰 유형 분포(단계 기준 · 총 10단계): I-EQV 8 · I-RT 2. SC·VF·SYM·XU 는 0 이라 ★5 자격 문항 없음
- type_hint 상위: 「진리집합의 포함 관계로 명제의 참·거짓 판정」 3(178-426 · 179-429 · 179-433) · 「‘모든’·‘어떤’ 명제의 참·거짓」 2(177-e7 · 177-422) · 「한정사 명제·조건의 부정」 2(177-423 · 178-428) · 「한정사 명제가 참일 조건(구간 최대최소·판별식)」 2(179-431 · 179-432) · 「명제가 참이 되도록 하는 미정계수·진리집합」 2(178-427 · 179-430)
- 구역별 ★: 필수 예제 ★2 · 확인체크 ★1 2문 · STEP 1 ★2 4문 · STEP 2 ★3 4문 · 실력 UP ★4 2문 — 벤더 신호와 라벨이 모두 1단 이내
- 그림: 0문(이 범위는 그림 문항 없음) · 소문항 문항: 1문(177-423 ⑴⑵)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-177-e7 | 통찰 0·M_total 5 라 v3.8 산식의 −1 조건에 걸리지만 보기 4개 전수 판정이라 필수 예제 출발점 ★2 유지 | ★1 / ★2 |
| GN-CM2-179-432 | 벤더 실력 UP(★4 출발)이나 통찰이 I-EQV 한 개뿐이고 골조가 판별식 한 줄 — §2.13 저노출 유형 부재 YELLOW. 라벨은 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형** — 「진리집합의 포함 관계로 명제의 참·거짓 판정」(178-426 · 179-429 · 179-433)은 이 범위에서 3번 반복되고 수치가 전혀 없는 추상형이다. 구체 수치형(178-424 · 179-430)과는 학생 체감이 달라 별도 유형으로 세우는 것이 낫다.
- **통합해도 될 유형** — 「‘모든’·‘어떤’ 명제의 참·거짓」(177-e7 · 177-422)과 「그 명제의 부정」(177-423 · 178-428)은 한정사 교환·부등호 반전이라는 같은 규칙의 앞뒤라 한 유형의 두 갈래로 묶어도 된다.
- **도구가 달라 분리 권장** — 「명제가 참이 되도록 하는 미정계수의 범위」는 진리집합이 유한집합일 때(178-427)는 경계 부등식, 실수 전체일 때(179-432)는 판별식, 구간 제한일 때(179-431)는 최대·최소로 도구가 갈린다. 한 유형으로 묶으면 base ★ 가 ★2~4 로 벌어진다.
- **다른 단원과 겹치는 유형** — 179-430 의 「진리집합의 개수」는 집합 단원의 「특정 원소를 포함하는 부분집합의 개수」와 골조가 같다. 카탈로그에서는 명제 단원에 두되 집합 단원 유형을 참조로 연결하는 편이 좋다.
- 이 범위 전체에 SC·VF·SYM·XU 통찰이 하나도 없어 ★5 슬롯 원본으로 쓸 문항은 없다. ★5 가 필요하면 179-433 의 집합 수를 늘리거나 179-431·179-432 에 구간 분기를 넣는 창의 변형이 출발점이다.
