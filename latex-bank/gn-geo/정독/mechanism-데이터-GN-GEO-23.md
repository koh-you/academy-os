---
name: mechanism-데이터-GN-GEO-23
description: 개념원리 기하 23 공간벡터의 성분(1/1 · 190~195쪽 · 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 23 공간벡터의 성분
  unit_code: GEO-23
  part: "1/1"
  extract_range: "190~195쪽 · 190-388~195-411"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 23 공간벡터의 성분 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 23단원 공간벡터의 성분 190~195쪽의 28문항 전수를 다룬다. 구역은 「개념원리 익히기」 5문(388~392) · 「필수·발전 예제」 11문(필수 예제 4 · 확인체크 7) · 「연습문제 STEP 1」 6문 · 「STEP 2」 4문 · 「실력 UP」 2문이고, 벤더 난이도 신호는 구역과 태그(필수 · 확인체크 · STEP · 실력 UP)뿐이다. 내용상 도구는 넷밖에 없다 — 성분 표시와 기본벡터 표시의 상호 변환, 성분에 의한 덧셈·실수배와 크기, 두 벡터가 같을 조건(성분 비교 연립), 평행 조건(실수배). 난이도 차이는 이 네 도구 중 몇 개를 어떤 순서로 겹치느냐와, 기하 조건(한 직선 위 · 각의 이등분 · 평행사변형 · 정사영 · 정육면체)을 벡터 등식으로 옮기는 진입 단계가 있느냐에서만 생긴다. 그래서 ★1~★2 는 도구를 곧바로 쓰는 절차형에 몰려 있고, ★3 이상은 모두 조건 동치 변환(I-EQV)이나 표현 전환(I-RT)이 진입 관문인 문항이다. 확인체크 태그 문항은 앞의 필수 예제와 같은 골조의 짝이므로 ★2 를 출발점으로 잡았다(익히기 구역의 ★1 출발과 구분).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형)를 채웠다. 이 단원의 숫자 변형은 특히 제약이 뚜렷하다 — 성분에 0 이 들어가면 문제가 사실상 평면벡터로 내려앉고, 평행·상등 조건에서는 「숫자만 있는 성분」이 하나 있어야 실수배 k 를 먼저 잡을 수 있으며, 크기를 묻는 문항은 제곱합이 정수가 되도록 성분을 골라야 답이 정리된다. 블록마다 이 제약을 명시했다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-190-388
  page: 190
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 기본벡터 e1, e2, e3 로 나타낸 공간벡터는 성분으로, 성분으로 주어진 벡터는 기본벡터로 고쳐 쓰기.
  category: "기본벡터 표시 ↔ 성분 표시 상호 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본벡터 표시와 성분 표시의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기본벡터의 계수를 그대로 성분으로 읽고 거꾸로도 읽는 정의 확인. 빠진 항을 0 으로 채우는 것(⑵ ⑷)이 유일한 함정이다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기본벡터의 계수 = 성분 → 없는 항은 0 으로 채워 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\vec{a}=(2,\,-5,\,1)$ ⑵ $\vec{b}=(-1,\,0,\,5)$ ⑶ $\vec{c}=-2\vec{e_1}+2\vec{e_2}+\vec{e_3}$ ⑷ $\vec{d}=3\vec{e_1}-\vec{e_2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/190-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 벡터의 계수(2, -5, 1 / -1, 0, 5 / -2, 2, 1 / 3, -1, 0)는 자유롭게 바꿀 수 있다. 제약: 네 소문항 중 적어도 하나는 성분 0 을 포함시켜 「없는 기본벡터 = 성분 0」을 확인하게 남긴다. 분수·무리수 계수는 이 단계에서 의미가 없다."
    creative: "(1) 평면벡터 두 성분과 섞어 차원을 구분하게 하기(★1 유지) (2) 기저를 e1+e2, e2+e3, e3+e1 로 바꾸면 성분 읽기가 연립으로 바뀌어 ★2 (3) 변환한 벡터의 크기나 성분의 합을 함께 묻기(★1~2)."
```

```yaml
- id: GN-GEO-190-389
  page: 190
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ (1, 루트2, 루트3) ⑵ (2, -3, 6) 두 공간벡터의 크기 구하기.
  category: "성분 → 제곱의 합의 제곱근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    크기 공식에 성분을 넣는 한 줄. ⑴ 은 무리수 성분의 제곱이 정수로 떨어지고 ⑵ 는 (2, -3, 6) → 7 인 정수 조합이라 계산 부담도 낮다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "크기 = 세 성분의 제곱의 합의 제곱근 → 성분 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{6}$ ⑵ $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/190-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분은 제곱합이 정수 제곱이 되는 조합((1,2,2)→3 · (2,3,6)→7 · (1,4,8)→9 · (2,6,9)→11)으로 고르면 답이 정수. 무리수 성분을 쓸 때는 제곱이 정수가 되는 것(루트2, 루트3)만 쓴다. 부호는 크기에 영향이 없으므로 변형 자유도가 아니다."
    creative: "(1) 크기를 주고 미지 성분을 되묻기(역방향 · ★2) (2) 같은 방향 단위벡터로 고치기(★2) (3) 두 점 사이의 거리와 연결해 AB 의 크기로 묻기(★1~2)."
```

```yaml
- id: GN-GEO-190-390
  page: 190
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 두 공간벡터 a, b 가 서로 같을 때 미지수 l, m, n 의 값 구하기. 성분에 문자가 섞여 있다.
  category: "성분별 비교 → 일차방정식 연쇄"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터가 서로 같을 조건(성분 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a = b 를 대응 성분끼리의 등식 셋으로 바꾸면 끝. ⑵ 는 y 성분에서 m 을 먼저 정하고 그 값을 z 성분으로 넘기는 순서 의존이 있지만 연립이랄 것은 없다.
    익히기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "a = b ⟺ 대응하는 성분이 각각 같다 → 성분별 일차방정식 → l, m, n"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $l=5$, $m=5$, $n=2$ ⑵ $l=3$, $m=-5$, $n=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/190-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 성분의 계수와 상수. 제약: 한 성분에 미지수가 하나씩만 들어가도록 두면 ★1 이 유지되고, 두 미지수가 같은 성분에 함께 들어가면 3원 연립이 되어 ★2 로 올라간다. 해가 정수로 떨어지게 계수를 1 이나 2 로 유지."
    creative: "(1) a = -b 로 바꿔 부호 함정을 넣기(★1~2) (2) 크기만 같다(|a|=|b|)로 바꾸면 성분 상등이 아니어서 해가 여럿(★2 · I-MI) (3) l+m+n 만 묻기(계산 축소 ★1)."
```

```yaml
- id: GN-GEO-190-391
  page: 190
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    a=(2,-1,0), b=(0,3,4) 일 때 ⑴ -a+3b ⑵ -(a-2b)+3(a-2b) 를 각각 성분으로 나타내기.
  category: "실수배·덧셈의 성분 계산 · ⑵ 는 동류항 정리가 먼저"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 덧셈·뺄셈·실수배의 성분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 같은 덩어리 (a-2b) 를 묶어 2(a-2b) 로 보면 한 줄이지만, 그대로 전개해도 난이도가 오르지 않으므로 통찰로 세지 않는다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "식을 먼저 정리(⑵ 는 2(a-2b)) → 성분별로 실수배와 덧셈"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(-2,\,10,\,12)$ ⑵ $(4,\,-14,\,-16)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/190-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 성분과 실수배 계수. 제약: 성분에 0 이 둘 이상 들어가면 사실상 평면 계산이 되므로 0 은 한 자리로 제한한다. 계수는 정수로 두어야 이 단계에서 계산 마찰이 생기지 않는다."
    creative: "(1) 같은 덩어리를 세 번 반복해 묶기를 강제하기(★2 후보) (2) 결과의 크기까지 묻기(★2) (3) 결과가 기본벡터 e2 의 실수배가 되도록 설계해 방향을 되묻기(★2)."
```

```yaml
- id: GN-GEO-190-392
  page: 190
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 좌표공간의 두 점 A, B 의 좌표가 주어질 때 벡터 AB 를 성분으로 나타내고 그 크기 구하기.
  category: "AB = (끝점) - (시작점) → 크기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 좌표로 정해지는 공간벡터와 그 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    뺄셈 방향(B - A)만 지키면 성분과 크기가 각각 한 줄. ⑵ 는 z 성분이 0 이 되어 실질적으로 평면 계산이다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B - A 로 성분 → 제곱의 합의 제곱근으로 크기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\vecAB{AB}=(-4,\,3,\,-2)$, $|\vecAB{AB}|=\sqrt{29}$ ⑵ $\vecAB{AB}=(-3,\,-1,\,0)$, $|\vecAB{AB}|=\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/190-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표. 제약: 차의 제곱합이 정수 제곱이 되게 하려면 (2,3,6)·(1,2,2) 계열 차를 쓴다. 그렇지 않으면 답이 무리수로 남는데(√29 처럼) 이 단원에서는 그대로 허용된다. 두 점의 한 좌표를 같게 두면 성분 0 이 생겨 난이도가 내려간다."
    creative: "(1) BA 를 함께 물어 방향 반대를 확인시키기(★1) (2) |AB| 를 주고 미지 좌표를 되묻기(★2 · 역방향) (3) 세 점으로 늘려 삼각형의 둘레나 이등변 판정으로 확장(★2~3)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-191-e10
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 2a-3x = 3b-4x 를 만족시키는 벡터 x 를 성분으로 나타내기. ⑵ 3(a+2b)-2(a+b+2c) 의 크기 구하기.
  category: "벡터방정식 정리 → 성분 대입 → (⑵) 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 연산과 크기(벡터방정식을 정리한 뒤 성분 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 수에 대한 일차방정식처럼 x 를 한쪽으로 이항해 x = 3b - 2a 로 만든 뒤 성분을 넣고, ⑵ 는 전개해 a+4b-4c 로 줄인 뒤 성분을 넣는다.
    성분을 먼저 대입하고 계산해도 같은 답이지만 계산량만 늘 뿐 새 착안은 없다. 필수 예제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x 항을 한쪽으로 모아 x = 3b - 2a → 성분 대입 · (⑵) 정리식 a+4b-4c 의 성분 → 크기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(1,\,-4,\,6)$ ⑵ $\sqrt{110}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/191-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터의 성분과 괄호 앞 계수. 제약: ⑴ 은 x 의 계수가 소거 뒤 ±1 이 되도록(-3x 와 -4x 처럼 차가 1) 두어야 나눗셈 없이 끝난다. ⑵ 는 정리식의 성분 제곱합이 너무 커지지 않게 계수를 3, 2 근처로 유지."
    creative: "(1) x 의 계수가 2 로 남아 나눗셈이 필요하게 만들기(★2 유지) (2) 답을 x 의 크기나 성분의 합으로 바꾸기(★2) (3) x 가 어떤 벡터와 평행하다는 조건을 덧붙이면 평행 조건과 결합해 ★3."
```

```yaml
- id: GN-GEO-191-393
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(-1,3,2), b=(3,5,4) 에 대하여 x - a = 3b - x 를 만족시키는 벡터 x 의 모든 성분의 합 구하기.
  category: "벡터방정식 → x = (a+3b)/2 → 성분의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 연산과 크기(벡터방정식을 정리한 뒤 성분 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 ⑴ 과 같은 골조에 「성분의 합」 한 단계만 붙었다. 2 로 나눌 때 세 성분이 모두 정수로 떨어지도록 설계돼 있어 계산 부담이 낮다.
    확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x 항을 모아 2x = a + 3b → x 의 성분 → 세 성분의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/191-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 성분과 3b 의 계수. 제약: a + 3b 의 세 성분이 모두 짝수여야 x 가 정수 벡터로 떨어진다(여기서는 (8,18,14)). 계수를 바꾸면 이 짝수 조건을 다시 맞춰야 한다."
    creative: "(1) 답을 x 의 크기로 바꾸면 제곱합 조건이 추가돼 설계가 까다로워짐(★2) (2) 미지 벡터를 둘로 늘려 연립으로 만들기(★2 · 194-401 골조) (3) x 가 어떤 점의 위치벡터라 보고 점의 좌표를 묻기(★2)."
```

```yaml
- id: GN-GEO-191-394
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(1,2,1), b=(-1,0,1), c=(-2,5,3) 에 대하여 벡터 3(a-2b)-2(3a-c) 의 크기 구하기.
  category: "괄호 정리(-3a-6b+2c) → 성분 → 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 연산과 크기(벡터방정식을 정리한 뒤 성분 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 ⑵ 의 확인체크판. -2 를 3a 와 -c 에 모두 분배하는 부호 처리가 유일한 함정이고, 정리하고 나면 성분 계산 세 줄과 크기 한 줄.
    확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "괄호 전개·동류항 정리로 -3a-6b+2c → 성분 대입 → 제곱의 합의 제곱근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{26}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/191-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터의 성분과 괄호 앞 계수 3, 2. 제약: 정리식의 성분이 한 자리 수로 남게(여기서는 (-1,4,-3)) 계수를 고른다. 제곱합이 큰 소수가 되면 답이 지저분한 무리수로 남는다."
    creative: "(1) 크기 대신 결과 벡터와 평행한 단위벡터를 묻기(★2) (2) 정리식이 0 벡터가 되도록 계수를 설계해 「크기가 0」을 판정시키기(★2 · 함정) (3) 계수 하나를 미지수로 두고 크기가 최소가 되게 하면 194-402 골조로 ★3."
```

```yaml
- id: GN-GEO-192-e11
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    네 벡터 a=(2,1,2), b=(2,-1,0), c=(2,1,-1), d=(4,0,5) 에 대하여 d = la+mb+nc 를 만족시키는 실수 l, m, n 구하기.
  category: "성분 비교 → 3원 연립일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 공간벡터의 일차결합으로 나타내기(성분 연립방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벡터 등식을 성분 등식 셋으로 바꾸는 이 단원의 표준 절차 그대로다. z 성분에 n 이 거의 홀로 남는 등 소거 순서가 잡혀 있어 연립이 가볍다.
    필수 예제·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "la+mb+nc 를 성분으로 쓰고 d 와 성분별로 비교 → 3원 연립 → l, m, n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$l=2$, $m=1$, $n=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/192-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 벡터의 성분. 제약: a, b, c 가 일차독립이어야 해가 하나로 정해진다(세 성분을 행으로 본 행렬식이 0 이 아니어야 함). 해 l, m, n 이 정수가 되도록 d 를 먼저 정한 뒤 역으로 만드는 것이 안전하다."
    creative: "(1) 답을 l+m+n 이나 lmn 으로 바꾸기(★2) (2) a, b, c 를 대칭형 (0,1,1),(1,0,1),(1,1,0) 으로 바꾸면 세 식을 더하는 지름길이 생겨 I-SYM 통찰 추가(192-395 골조) (3) c 를 a, b 의 일차결합으로 두어 해가 없거나 무수히 많게 만들면 ★3 이상(존재 조건 판정)."
```

```yaml
- id: GN-GEO-192-e12
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    a=(5,2,-1) 과 b=(3x-1,-4,y+3) 이 서로 평행할 때 x, y 의 값 구하기.
  category: "평행 ⟺ b = ka → 성분 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터의 평행 조건(실수배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건을 실수배로 쓰는 것이 이 예제가 가르치는 정의 자체라 통찰로 세지 않는다. 숫자만 들어 있는 y 성분(2 와 -4)에서 k 를 먼저 확정하는 순서만 잡으면 나머지는 대입.
    필수 예제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "b = ka 로 두고 숫자만 있는 성분에서 k = -2 → 나머지 두 성분에서 x, y"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-3$, $y=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/192-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 성분과 b 의 문자식. 제약: b 의 세 성분 중 정확히 하나는 숫자만 있어야 k 를 먼저 잡을 수 있다. 그 성분이 a 의 대응 성분으로 나누어떨어지게 두면 k 가 정수. 세 성분 모두에 문자를 넣으면 k 가 미지수로 남아 ★3 으로 올라간다."
    creative: "(1) k 를 미지수로 남겨 x, y, k 를 모두 묻기(★3) (2) 평행 대신 「같은 방향」으로 바꿔 k > 0 조건을 추가(★2~3 · 부호 검증) (3) |b| 값을 함께 주면 195-407 골조로 ★3."
```

```yaml
- id: GN-GEO-192-395
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(0,1,1), b=(1,0,1), c=(1,1,0), d=(3,-4,5) 에 대하여 d = pa+qb+rc 일 때 pqr 의 값 구하기.
  category: "성분 비교 → 대칭형 연립 → 세 식 더하기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 식 q+r, p+r, p+q 가 p, q, r 에 대해 완전히 대칭임을 보고 세 식을 더해 p+q+r 을 먼저 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭형 기저에 대한 일차결합 계수(연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분 비교로 얻는 세 식이 p, q, r 에 대해 대칭이라 그대로 더하면 2(p+q+r) 이 나오고, 각 값은 뺄셈 한 번으로 떨어진다. 대칭을 못 보면 정석 소거를 세 번 해야 한다.
    대칭 활용 통찰 1개(SYM d1)·확인체크 출발 ★2 → ★2 유지.
    [분류 이슈] 대칭 지름길을 쓰지 않고 정석 소거로 풀어도 난이도가 크게 다르지 않아 절차형 판정도 가능하다(★ 변동은 없음).
  tier: star_2
  mechanism_primary: "성분 비교로 q+r, p+r, p+q → 세 식을 더해 p+q+r → 각 값 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/192-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "d 의 성분만 바꾸면 된다(기저 (0,1,1),(1,0,1),(1,1,0) 은 대칭 골조의 핵심이라 고정). 제약: d 의 세 성분의 합이 짝수여야 p+q+r 이 정수로 떨어지고 pqr 이 정수가 된다."
    creative: "(1) 답을 p+q+r 로 바꾸면 세 식의 합 한 줄로 끝나 ★1~2 (2) 기저를 비대칭으로 바꾸면 대칭 지름길이 사라져 순수 연립 ★2(194-403 골조) (3) 기저를 (1,1,0),(0,1,1),(1,0,1) 로 두고 d 를 문자로 주면 일반해를 구하는 ★3."
```

```yaml
- id: GN-GEO-192-396
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(3,y,-2), b=(x+1,-4,8) 에 대하여 a 와 b 가 평행할 때 a+b 를 성분으로 나타내기.
  category: "평행 → 실수배 k 확정 → x, y → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터의 평행 조건(실수배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 와 같은 골조에 「a+b 를 성분으로」 한 단계가 붙었다. 숫자만 있는 z 성분(-2 와 8)에서 k = -4 를 먼저 잡는 것이 정석이고, 그 뒤는 대입과 덧셈.
    확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "b = ka 로 두고 z 성분에서 k = -4 → x, y 확정 → a+b 성분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-9,\,-3,\,6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/192-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 숫자 성분과 문자 자리. 제약: 숫자만 있는 성분 쌍(-2, 8)의 비가 정수여야 k 가 정수로 떨어진다. 문자가 든 성분은 서로 다른 자리에 하나씩 두어야 풀이 순서가 한 방향으로 정해진다."
    creative: "(1) a+b 대신 a-b 나 |a+b| 를 묻기(★2) (2) k 를 분수로 만들어 계산 부담만 올리기(질 저하 · 권장 안 함) (3) 평행 조건을 「세 점이 한 직선 위」로 바꿔 진입 단계를 추가하면 ★2~3(193-398 골조)."
```

```yaml
- id: GN-GEO-193-e13
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    네 점 A(2,-1,2), B(-2,3,-1), C(3,0,3), D(a,b,c) 에 대하여 AB = 2CD 일 때 abc 의 값 구하기.
  category: "두 점 벡터 성분 → 상등·실수배 비교 → 미지 좌표"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점으로 정해진 벡터의 상등 조건에서 미지 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB = B - A, CD = D - C 로 성분을 만든 뒤 AB = 2CD 를 성분별로 비교하면 a, b, c 가 각각 한 줄에 나온다. CD 를 DC 로 뒤집지 않는 방향 관리가 함정.
    필수 예제·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "AB = B-A, CD = D-C 성분 → AB = 2CD 성분 비교 → a, b, c → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/193-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표와 실수배 계수 2. 제약: AB 의 각 성분이 계수로 나누어떨어지면 D 의 좌표가 정수가 된다(여기서는 z 성분만 분수). 답을 abc 로 물으므로 분수가 하나 남아도 곱에서 정리되게 설계한다."
    creative: "(1) AB = 2CD 대신 AB + CD = 0 으로 바꿔 방향 함정을 강화(★2) (2) D 를 조건 두 개(AB = 2CD 와 |CD| 값)로 묶기(★3) (3) 네 점이 평행사변형을 이루게 하는 D 를 묻기(★3 · 195-409 골조)."
```

```yaml
- id: GN-GEO-193-397
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 A(-1,4,0), B(2,0,-5), C(1,1,3), D(0,-1,8) 에 대하여 벡터 2AB - DC 의 크기 구하기.
  category: "두 점 벡터 성분 → 일차결합 → 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점으로 정해진 벡터의 일차결합과 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    DC 를 CD 로 잘못 잡는 방향 함정 하나가 변별의 전부이고, 그 뒤는 성분 계산과 크기 공식.
    확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB = B-A, DC = C-D 성분 → 2AB - DC → 제곱의 합의 제곱근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/193-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표와 계수 2. 제약: 결과 성분의 제곱합이 깔끔한 꼴(여기서는 150 = 25·6)이 되게 좌표를 고른다. 방향 함정을 유지하려면 DC 와 CD 의 성분이 확실히 달라야 하므로 C, D 를 대칭 위치에 두지 않는다."
    creative: "(1) 시점을 섞어 AB + BC + CD 처럼 연결하면 합이 AD 로 접히는 통찰 추가(★3 · I-EQV) (2) 크기 대신 결과 벡터가 어떤 좌표평면에 평행한지 묻기(★2~3) (3) 계수를 미지수로 두고 크기가 최소가 되게 하면 ★3(194-402 골조)."
```

```yaml
- id: GN-GEO-193-398
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(1,5,-2), B(2,4,1), C(a,3,b+2) 가 한 직선 위에 있을 때 a+b 의 값 구하기.
  category: "공선 조건 → AB 와 AC 가 평행 → 미지 좌표"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 점이 한 직선 위에 있다」는 기하 조건을 AC = k·AB 라는 벡터의 평행 조건으로 바꿔 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건(벡터의 평행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「한 직선 위」를 두 벡터의 평행으로 옮기는 한 걸음이 관문이고, 옮기고 나면 e12·396 과 같은 성분 비교다. 숫자만 있는 y 성분에서 k = 2 를 잡는다.
    조건 동치 변환 통찰 1개(EQV d1)·확인체크 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: "세 점 공선 ⟺ AB 와 AC 가 평행 → AC = kAB, y 성분에서 k=2 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/193-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 C 의 문자 자리. 제약: C 의 세 성분 중 정확히 하나는 숫자여야 k 를 먼저 잡을 수 있고, 그 성분의 차가 AB 의 대응 성분으로 나누어떨어져야 k 가 정수. a, b 가 정수로 떨어지게 설계한다."
    creative: "(1) 답을 ab 나 점 C 의 좌표 자체로 바꾸기(★2) (2) 미지수를 두 점에 나눠 넣으면 관계식이 남아 ★3 (3) 「한 직선 위」를 「AB, AC, AD 가 한 평면 위」로 올리면 일차결합 조건이 되어 ★4 (공간도형 결합)."
```

```yaml
- id: GN-GEO-193-399
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(0,-1,3), B(1,3,-2), C(2,1,-1) 에 대하여 |PA+PB+PC| = 6 을 만족시키는 점 P 가 나타내는 도형이 중심 (a,b,c) 반지름 r 인 구일 때 a+b+c+r 의 값.
  category: "세 벡터의 합 → 무게중심에 대한 3|PG| → 구의 중심과 반지름"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "시점이 P 인 세 벡터의 합을 PA+PB+PC = 3PG (G 는 삼각형 ABC 의 무게중심)로 통합해 한 벡터 조건으로 바꿈"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|PG| = 2 라는 벡터 등식을 「G 를 중심으로 하는 반지름 2 인 구」라는 도형으로 읽음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "PA+PB+PC 꼴 조건이 나타내는 도형(무게중심과 구)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 벡터를 각각 성분으로 풀어 써도 되지만, P 를 기준으로 묶어 무게중심 G 한 점으로 통합하는 것이 이 문제의 관문이다. 통합 뒤 |PG| = 2 를 구로 읽는 전환이 한 번 더 있고 계산은 무게중심 좌표 한 줄뿐.
    통찰 2개(EQV d2 · RT d1)·확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "PA+PB+PC = 3PG (G = 무게중심) → |PG| = 2 → 중심 G 반지름 2 인 구 → a+b+c+r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/193-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 우변 6. 제약: 세 점의 좌표 합이 각 성분마다 3 의 배수여야 무게중심이 정수점이 되고, 우변은 3 의 배수여야 반지름이 정수. 두 조건을 깨면 답이 분수로 지저분해진다."
    creative: "(1) 계수를 비대칭으로(PA+2PB+3PC) 바꾸면 무게중심 대신 가중 내분점이 되어 ★4 (2) 점을 둘로 줄이면(|PA+PB| = k) 중점 기준 구가 되어 ★2~3 (3) |PA+PB+PC| 의 최솟값을 묻는 형태로 바꾸면 P 가 G 일 때로 귀착돼 ★3 (4) 구 위의 점과 원점 사이 거리의 최대·최소로 확장하면 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-194-400
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    a=(3,1,-2), b=(1,2,-1), c=(-4,2,1) 에 대하여 벡터 2(a-b-c)-(a+b-c) 의 크기 구하기.
  category: "괄호 정리(a-3b-c) → 성분 → 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 일차결합을 정리한 뒤 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    391·394 와 같은 골조. 괄호 앞 부호를 정확히 분배해 a-3b-c 로 줄이면 성분 세 줄과 크기 한 줄이다. c 의 계수가 -2+1 로 상쇄되지 않고 -1 로 남는 점만 주의.
    STEP 1 출발·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "괄호를 정리해 a-3b-c → 성분 대입 → 제곱의 합의 제곱근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{65}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터의 성분과 괄호 앞 계수. 제약: 정리 뒤 계수가 0 이 되는 벡터가 생기면 문제가 급격히 쉬워지므로 세 벡터가 모두 살아남게 계수를 고른다. 결과 성분의 제곱합이 두 자리 수로 남게 유지."
    creative: "(1) 정리식이 0 벡터가 되도록 설계해 「크기 0」을 판정시키기(★2 · 함정형) (2) 크기 대신 그 벡터와 평행한 단위벡터를 묻기(★2 · 194-404 결합) (3) 계수 하나를 t 로 두고 최소 크기를 묻기(★3 · 194-402 골조)."
```

```yaml
- id: GN-GEO-194-401
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x+y = (3,6,2), -x+2y = (3,0,4) 일 때 x-y 를 성분으로 나타내기.
  category: "벡터에 대한 연립방정식 → 가감법 → x-y"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터에 대한 연립방정식(성분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 벡터일 뿐 수에 대한 연립과 다루는 법이 같다는 것만 받아들이면 가감법 한 번으로 y 가 나오고 x 가 따라 나온다.
    두 식의 일차결합으로 x-y 를 바로 만드는 지름길도 있으나 계산량 차이가 작아 통찰로 세지 않는다. STEP 1·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 식을 더해 3y → y → x → x-y 성분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,2,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 두 벡터의 성분과 좌변 계수. 제약: 가감 후 나오는 계수(여기서는 3)로 우변 성분이 나누어떨어져야 x, y 가 정수 벡터가 된다. 우변에 0 성분을 넣으면 그 자리만 쉬워지므로 한 자리로 제한."
    creative: "(1) x, y 를 각각 묻지 않고 |x-y| 나 x+2y 처럼 결합만 묻기(★2) (2) 세 벡터 미지수로 늘리기(★3) (3) 한 식을 크기 조건(|x| = k)으로 바꾸면 이차식이 되어 ★3~4."
```

```yaml
- id: GN-GEO-194-402
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    a=(1,-2,3), b=(-1,1,-1) 에 대하여 |a+tb| 가 최소가 되는 실수 t 를 α, 그때의 최솟값을 β 라 할 때 α²+β² 의 값.
  category: "크기를 제곱해 t 에 대한 이차함수로 → 최소"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "벡터 크기의 최솟값 문제를 제곱해 t 에 대한 이차함수의 최솟값 문제로 옮김(근호 상태로는 진행되지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "|a+tb| 의 최솟값(t 에 대한 이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+tb 의 성분을 t 의 일차식으로 쓴 뒤 크기를 제곱해 t 의 이차함수로 옮기는 것이 관문이고, 옮긴 다음은 완전제곱 한 번이다. 크기의 최솟값 β 는 이차함수 최솟값의 제곱근이라 β² 가 그 최솟값 그대로라는 점이 마지막 함정.
    [분류 이슈] 제곱 전환 통찰의 깊이를 2 로 인정하면 ★3 후보이지만, STEP 1 출발·통찰 1개라 ★2 로 둔다(1단 차).
  tier: star_2
  mechanism_primary: "a+tb 성분 → |a+tb|² 를 t 이차함수로 → 꼭짓점에서 α, 최솟값에서 β² "
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 성분. 제약: 이차함수의 꼭짓점 t 가 정수 또는 간단한 분수로 떨어지게 성분을 고른다(여기서는 3t²-12t+14 로 t=2). 최솟값이 완전제곱이면 β 가 유리수가 되어 답이 더 깔끔해진다."
    creative: "(1) 최솟값이 되는 t 에서 a+tb 가 b 와 수직임을 확인시키면 내적 단원과 결합해 ★4(I-XU) (2) t 의 범위를 제한해 꼭짓점이 범위 밖이 되게 하면 경계 판정이 추가돼 ★3 (3) a+tb 의 크기가 주어진 값이 되는 t 의 개수를 묻기(★3 · 판별식)."
```

```yaml
- id: GN-GEO-194-403
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    a=(1,1,1), b=(0,-1,2), c=(-2,3,0) 에 대하여 pa+qb+rc = (2,4,-2) 일 때 p+q+r 의 값.
  category: "성분 비교 → 3원 연립 → 계수의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 공간벡터의 일차결합 계수 구하기(성분 연립방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11·395 와 같은 골조이지만 기저가 대칭이 아니어서 세 식을 더하는 지름길이 없고 정석 소거가 필요하다. 성분에 0 이 여럿 있어 소거 자체는 가볍다.
    STEP 1 출발·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "성분별로 세 일차식 → 소거로 r → p, q → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 기저 벡터와 우변의 성분. 제약: 세 벡터가 일차독립이어야 해가 하나. 해 p, q, r 를 먼저 정수로 정하고 우변을 역산해 만드는 것이 안전하다. 성분의 0 자리를 줄이면 소거 부담만 늘어난다(질 저하 주의)."
    creative: "(1) 답을 pqr 로 바꾸기(★2 · 192-395 골조) (2) 기저를 대칭형으로 바꿔 세 식 더하기 지름길을 만들기(★2 · I-SYM 추가) (3) 우변을 문자로 두고 p, q, r 가 존재할 조건을 묻기(★4)."
```

```yaml
- id: GN-GEO-194-404
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 A(1,-4,2), B(3,-2,1) 에 대하여 벡터 AB 와 방향이 반대인 단위벡터를 성분으로 나타내기.
  category: "AB 성분 → 크기로 나누기 → 부호 반전"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 벡터와 방향이 같거나 반대인 단위벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 의 성분을 구해 크기 3 으로 나누고 부호를 뒤집으면 끝. 「방향이 반대」의 마이너스를 빠뜨리는 T-부호 함정이 유일한 변별점이다.
    통찰 0·M_total 5 로 v3.8 Step 2 의 −1 후보이지만, STEP 1 구역 신호와 「크기로 나눈다」는 두 번째 도구를 존중해 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: "AB = B-A → |AB| = 3 → -AB/|AB|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(-\dfrac{2}{3},\,-\dfrac{2}{3},\,\dfrac{1}{3}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표. 제약: AB 의 성분이 (2,2,-1)·(1,2,2)·(2,3,6) 처럼 제곱합이 완전제곱이 되는 조합이어야 단위벡터 성분이 유리수로 떨어진다. 이 제약을 깨면 답이 무리수 분모가 되어 지저분해진다."
    creative: "(1) 「방향이 같은」으로 바꿔 부호 함정을 제거하면 ★1~2 (2) 크기가 6 인 벡터를 묻기(실수배 확장 ★2) (3) 두 단위벡터의 합이 나타내는 방향(각의 이등분)으로 잇기(★3 · 195-406 골조)."
```

```yaml
- id: GN-GEO-194-405
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    세 점 A(1,-2,0), B(2,0,-5), C(4,x,y) 에 대하여 두 벡터 AB, AC 가 평행할 때 x+y 의 값.
  category: "평행 → AC = kAB → x, y"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터의 평행 조건(미지 좌표 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이 발문에 직접 주어져 「한 직선 위」를 벡터로 옮기는 진입 단계가 없다(193-398 과 다른 점). 숫자만 있는 x 성분에서 k = 3 을 잡으면 나머지는 대입.
    STEP 1 출발·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB, AC 성분 → AC = kAB, x 성분에서 k=3 → x, y → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/194-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표. 제약: C 의 x 좌표가 숫자여야 k 를 먼저 확정할 수 있고, (C의 x) - (A의 x) 가 (B의 x) - (A의 x) 로 나누어떨어져야 k 가 정수. 미지수는 서로 다른 성분에 하나씩."
    creative: "(1) 「평행」을 「한 직선 위」로 바꾸면 조건 변환 통찰이 붙어 ★2(통찰형 · 193-398) (2) 답을 xy 나 점 C 의 좌표로 바꾸기(★2) (3) AB 와 AC 가 평행하지 않을 조건(삼각형을 이룰 조건)으로 뒤집으면 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-195-406
  page: 195
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    OA=(1,1,0), OB=(4,1,1) 이고 선분 AB 위의 점 P 에 대하여 직선 OP 가 각 AOB 를 이등분할 때 벡터 OP 의 모든 성분의 합.
  category: "각의 이등분 → AP:PB = |OA|:|OB| → 내분점 벡터"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「OP 가 각 AOB 를 이등분한다」를 삼각형의 내각 이등분선 성질로 옮겨 P 가 AB 를 |OA| : |OB| 로 내분한다는 조건으로 바꿔 씀"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선과 내분점 벡터(성분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 벡터의 크기를 재어 |OA| : |OB| = 1 : 3 을 얻고, 각 이등분 조건을 내분비로 옮기는 한 걸음이 이 문제의 전부다. 옮긴 뒤는 내분점의 위치벡터 공식에 대입하는 절차.
    두 단위벡터의 합 방향으로 OP 를 잡는 다른 갈래도 같은 답을 준다. 통찰 1개(EQV d2)·STEP 2 출발 → ★3.
  tier: star_3
  mechanism_primary: "|OA| : |OB| = 1 : 3 → P 는 AB 의 1:3 내분점 → OP = (3·OA + OB)/4 → 성분의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/195-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA, OB 의 성분. 제약: 두 크기의 비가 간단한 정수비가 되도록(여기서는 √2 : 3√2 = 1:3) 골라야 내분비가 깔끔하다. 크기가 같은 두 벡터로 두면 중점이 되어 난이도가 내려간다."
    creative: "(1) 외각의 이등분선으로 바꾸면 외분점이 되어 부호 함정 추가(★3~4) (2) OP 의 크기나 P 의 좌표를 묻기(★3) (3) 이등분 조건을 내적의 코사인 같음으로 주면 내적 단원 결합 ★4(I-XU) (4) 세 벡터로 늘려 공간의 내심 방향으로 확장(★4~5)."
```

```yaml
- id: GN-GEO-195-407
  page: 195
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    a=(2,-1,0), b=(0,2,x), c=(4,α,β) 에 대하여 a+b 와 c 가 서로 평행하고 |c| = 6 일 때 양수 x 의 값.
  category: "평행으로 실수배 확정 → 크기 조건 → 양수 조건으로 하나 채택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행 조건과 크기 조건의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a+b = (2,1,x) 를 만든 뒤 c 의 첫 성분이 숫자라는 점에서 실수배 k = 2 를 먼저 확정하고, 남은 미지수 x 를 크기 조건으로 잡는 2단 결합이다. 각 단계는 e12·389 수준의 기지 절차이고, x² = 4 에서 양수 조건으로 하나를 버리는 것이 유일한 함정.
    [분류 이슈] 통찰 0 · 기지 절차 2개의 결합이라 판정은 ★2 쪽이지만 STEP 2 구역 신호를 존중해 ★3 으로 둔다(1단 차).
  tier: star_3
  mechanism_primary: "a+b=(2,1,x) → c = k(a+b) 의 첫 성분에서 k=2 → |c|=6 → x²=4 → 양수 x"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/195-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 성분과 c 의 첫 성분, 크기 6. 제약: c 의 성분 중 하나는 숫자여야 k 가 먼저 정해지고, 크기의 제곱에서 x² 의 값이 완전제곱이 되어야 x 가 정수. 양수 조건을 살리려면 x² 방정식이 ±해를 가져야 한다."
    creative: "(1) 양수 조건을 빼고 x 의 모든 값의 합을 묻기(★3 · I-MI) (2) α, β 까지 묻기(★3) (3) 평행 대신 「같은 방향」으로 바꿔 k > 0 검증을 추가하면 I-VF 후보 ★3~4 (4) |c| 대신 c 가 어떤 좌표평면과 이루는 관계를 주면 ★4."
```

```yaml
- id: GN-GEO-195-408
  page: 195
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    세 점 A(1,-2,-1), B(a,-1,3), C(3/2,-3/2,b) 가 한 직선 위에 있을 때 벡터 BC 의 크기 구하기.
  category: "공선 → AC = kAB → a, b → BC 성분 → 크기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 점이 한 직선 위에 있다」를 AC = k·AB 라는 평행 조건으로 바꿔 쓰고, 문자가 없는 y 성분 짝을 골라 k 를 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건과 벡터의 크기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    398 과 같은 공선 → 평행 전환이지만, 미지수가 B 와 C 두 점에 나뉘어 있고 좌표가 분수라 어느 두 벡터를 짝지을지 고르는 부담과 계산 단계가 늘었다. 마지막에 BC 성분을 새로 구해 크기를 재는 단계가 하나 더 붙는다.
    통찰 1개(EQV d1)·STEP 2 출발 → ★3.
  tier: star_3
  mechanism_primary: "AB 와 AC 가 평행 → y 성분에서 k = 1/2 → a, b → BC = C-B → 크기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/195-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표(분수 포함). 제약: 문자가 없는 성분 짝이 한 쌍 있어야 k 를 먼저 잡을 수 있다. k 가 1/2 처럼 간단한 분수면 좌표가 정수·반정수로 떨어지고, 마지막 BC 의 제곱합이 깔끔한 분수가 되도록 C 를 배치한다."
    creative: "(1) BC 대신 AB : BC 의 비를 묻기(★3) (2) 세 점이 한 직선 위에 있지 않을 조건으로 뒤집기(★3~4) (3) 네 점으로 늘려 한 평면 위 조건을 주면 일차결합 존재 조건이 되어 ★4 (4) 좌표를 모두 문자로 바꾸면 일반 공선 조건 증명 ★4."
```

```yaml
- id: GN-GEO-195-409
  page: 195
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    네 점 A(0,1,2), B(-1,0,3), C(2,-3,0), D(3,-2,-1) 을 꼭짓점으로 하는 사각형 ABCD 가 평행사변형임을 벡터를 이용해 보이는 서술형.
  category: "평행사변형 ⟺ 한 쌍의 대변 벡터가 상등 → AB = DC 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「사각형 ABCD 가 평행사변형」을 「한 쌍의 대변이 평행하고 길이가 같다」를 거쳐 AB = DC 라는 벡터 상등으로 바꿔 씀(꼭짓점 순서에 맞는 대변 짝을 고르는 것이 핵심)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "벡터의 상등으로 평행사변형임을 증명하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산은 뺄셈 두 번뿐이고, 「평행사변형」을 어떤 벡터 등식으로 바꿔 써야 하는지 고르는 것이 문제의 전부다. 꼭짓점 순서 ABCD 에 맞는 짝은 AB 와 DC 이며 AB 와 CD 로 잡으면 부호가 뒤집힌다.
    서술형이라 결론 문장(한 쌍의 대변이 평행하고 길이가 같다)까지 써야 완결된다. 통찰 1개(EQV d2)·STEP 2 → ★3.
  tier: star_3
  mechanism_primary: "AB = B-A, DC = C-D 성분 → 두 성분이 같다 → 한 쌍의 대변이 평행하고 길이가 같다 → 평행사변형"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 ($\vecAB{AB}=(-1,\,-1,\,1)$, $\vecAB{DC}=(-1,\,-1,\,1)$이므로 $\vecAB{AB}=\vecAB{DC}$이다. 따라서 사각형~$\pt{ABCD}$는 평행사변형이다.)'
  answer_source: "계산(답지 「풀이 85쪽」)"
  figure: none
  latex: latex-bank/gn-geo/items/195-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표. 제약: AB = DC 가 성립하도록 D = A + C - B 로 역산해 만든다. 네 점이 한 직선 위에 놓이면(AB 와 AD 가 평행) 사각형이 되지 않으므로 그 경우를 피한다."
    creative: "(1) 평행사변형이 되도록 하는 D 의 좌표를 묻는 계산형으로 바꾸기(★2~3) (2) 마름모·직사각형임을 보이라고 하면 크기·내적 조건이 추가돼 ★4(I-XU) (3) 네 점이 한 평면 위에 있음을 먼저 보이게 하면 단계가 하나 늘어 ★4 (4) 대각선의 중점이 일치함을 이용하는 다른 갈래를 요구하면 I-SC 추가 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-195-410
  page: 195
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    OP=(-1,1,-1) 의 xy평면, yz평면, zx평면 위로의 정사영을 각각 OA, OB, OC 라 할 때 OP = a·OA + b·OB + c·OC 를 만족시키는 실수 a, b, c 에 대하여 abc 의 값.
  category: "정사영 → 해당 성분을 0 으로 → 대칭형 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「좌표평면 위로의 정사영」이라는 기하 조작을 그 평면에 없는 성분을 0 으로 바꾸는 성분 조작으로 옮김(OA=(-1,1,0) 등)"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "성분 비교로 얻은 세 식이 a, b, c 에 대해 대칭이라 세 식을 더해 한 미지수를 먼저 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "좌표평면 위로의 정사영 벡터와 일차결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    「좌표평면 위로의 정사영」을 성분 하나를 0 으로 지우는 조작으로 읽어 내는 것이 첫 관문이고(여기서 막히면 손도 못 댄다), 그 뒤 세 식이 대칭이라 더해서 한 번에 푸는 것이 둘째 관문이다. 두 관문을 넘으면 계산은 가볍고 답도 분수 하나.
    실력 UP 구역·통찰 2개(RT d2 · SYM d1) → ★4. §2.13 저노출 유형(RT·SYM) 보유로 ★4 슬롯 자격 충족.
  tier: star_4
  mechanism_primary: "정사영 = 그 평면에 없는 성분을 0 으로 → OA, OB, OC 성분 → 대칭 연립(세 식 합) → a, b, c → 곱"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/195-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP 의 성분. 제약: 세 성분이 모두 0 이 아니어야 세 정사영이 모두 살아 있고 연립이 성립한다. 성분의 절댓값이 모두 같으면(여기서는 1) a=b=c 인 대칭해가 나와 답이 깔끔하고, 다르게 두면 세 값이 모두 달라져 계산 부담만 커진다."
    creative: "(1) 세 좌표축 위로의 정사영으로 바꾸면 기본벡터 표시가 되어 ★1~2 로 급락(난이도 조절 지점) (2) a+b+c 나 a, b, c 각각을 묻기(★3~4) (3) 정사영 벡터들의 크기의 합을 묻기(★3) (4) OP 를 문자 성분으로 두고 a, b, c 를 일반식으로 나타내게 하면 ★5 후보(추상도 상승)."
```

```yaml
- id: GN-GEO-195-411
  page: 195
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    한 모서리의 길이가 1 인 정육면체(윗면 ABCD · 아랫면 EFGH)에서 |AG + DF| 의 값 구하기. 그림 제시.
  category: "정육면체에 좌표 도입 → 두 대각선 벡터 성분 → 합의 크기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정육면체 그림을 한 꼭짓점을 원점으로 하는 좌표공간으로 옮겨 두 대각선을 성분 벡터로 바꿔 씀(그림 상태로는 합의 크기를 잴 수 없음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정육면체의 대각선 벡터(좌표 도입 후 성분 계산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림의 꼭짓점 대응(A-E, B-F, C-G, D-H)을 좌표로 옮기는 한 걸음이 관문이고, 옮기고 나면 AG 와 DF 는 서로 다른 두 대각선 벡터라 합이 (2,0,-2) 꼴로 정리되어 크기 계산 한 줄이다. 좌표 없이 평행이동으로 합 벡터를 그려도 된다.
    [분류 이슈] 실력 UP 라벨(★4 출발)이지만 통찰 1개·M_total 6 이라 ★3 으로 둔다(1단 차).
  tier: star_3
  mechanism_primary: "한 꼭짓점을 원점으로 좌표 도입 → AG, DF 를 성분으로 → 합 → 제곱의 합의 제곱근"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-195-411.png"
  latex: latex-bank/gn-geo/items/195-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리의 길이(1 → a). 제약: 정육면체이므로 세 방향 길이가 같아야 하고, 직육면체로 바꾸면 세 성분이 달라져 답이 무리수로 지저분해질 수 있다. 그림의 꼭짓점 이름은 고정(문제의 AG·DF 가 어떤 대각선인지가 그림에 묶여 있음)."
    creative: "(1) 두 벡터를 같은 대각선 쌍이 아닌 AG 와 BH 처럼 바꾸면 합이 0 벡터에 가까워져 판정형 ★3 (2) |AG - DF| 로 바꾸기(★3) (3) 모서리 벡터 세 개로 AG, DF 를 나타내게 하면 기저 표현 문제 ★3~4 (4) 두 대각선이 이루는 각을 묻는 형태로 올리면 내적 단원 결합 ★4(I-XU)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 5 · ★2 16 · ★3 6 · ★4 1 · ★5 0
- 통찰형 9 · 절차형 19 · premium 0 (★5 없음 — 이 단원 단독으로는 SC·VF·XU 급 통찰이 나올 자리가 없다)
- 통찰 분포: I-EQV 5(193-398 · 193-399 · 195-406 · 195-408 · 195-409) · I-RT 4(193-399 · 194-402 · 195-410 · 195-411) · I-SYM 2(192-395 · 195-410). 모두 「기하·언어 조건을 벡터 등식으로」 또는 「벡터를 성분·이차함수로」 옮기는 진입형 통찰이고, 풀이 도중에 갈래가 갈리는 SC·VF 형은 없다.
- type_hint 상위 5: 「공간벡터의 연산과 크기(벡터방정식 정리 후 성분 계산)」 3(191-e10 · 191-393 · 191-394) · 「두 공간벡터의 평행 조건(실수배)」 3(192-e12 · 192-396 · 194-405) · 「세 공간벡터의 일차결합 계수(성분 연립)」 3(192-e11 · 192-395 · 194-403) · 「두 점으로 정해진 벡터와 크기」 3(190-392 · 193-e13 · 193-397) · 「세 점이 한 직선 위에 있을 조건」 2(193-398 · 195-408)
- 그림: 1문(`crop:fig-195-411.png`) — 정육면체 꼭짓점 이름이 풀이에 직접 필요해 크롭 확인이 필수인 유일한 문항이다.
- 구역별 ★: 익히기 5문 전부 ★1 · 필수·발전 예제 11문은 ★2 10 + ★3 1(193-399) · STEP 1 6문 전부 ★2 · STEP 2 4문 전부 ★3 · 실력 UP 2문은 ★4 1 + ★3 1. 벤더 구역 신호와 판정이 대체로 일치하며, 어긋난 4문은 아래 표에 모았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-192-395 | 세 식을 더하는 대칭 지름길을 I-SYM 통찰로 인정했으나 정석 소거로 풀어도 난이도 차이가 작아 절차형 판정도 가능(★ 변동은 없음) | ★2 |
| GN-GEO-194-402 | 제곱해 t 이차함수로 옮기는 전환을 depth 2 로 보면 ★3 후보. STEP 1 출발·통찰 1개라 ★2 로 둠(1단 차) | ★2 / ★3 |
| GN-GEO-195-407 | 통찰 0 · 기지 절차 2개(평행 → k, 크기 → x)의 결합이라 판정은 ★2 쪽이나 STEP 2 구역 신호를 존중해 ★3 | ★2 / ★3 |
| GN-GEO-195-411 | 실력 UP(★4 출발) 라벨 대비 통찰 1개·M_total 6 → ★3. 좌표를 도입하면 계산이 세 줄로 끝남 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 「연산과 크기」 계열 5문(191-e10 · 191-393 · 191-394 · 194-400 · 194-401), 「평행 조건(실수배)」 계열 4문(192-e12 · 192-396 · 194-405 · 195-407), 「일차결합 계수 연립」 계열 3문(192-e11 · 192-395 · 194-403), 「두 점으로 정해진 벡터」 계열 3문(190-392 · 193-e13 · 193-397)이다.
- **통합해도 되는 것**: 「벡터방정식 정리 후 성분 계산」과 「일차결합 정리 후 크기」는 괄호를 정리해 성분을 넣는 같은 골조이므로 하나로 묶고, 소문항 수·항 수·마지막에 묻는 것(성분 / 크기 / 성분의 합)을 변형 파라미터로 둔다. 190-388·190-389·190-391 같은 익히기 문항도 이 유형의 base ★ 1 판으로 흡수된다.
- **따로 세워야 하는 것**: 「평행 조건(실수배)」과 「세 점이 한 직선 위」는 마지막 성분 비교가 같지만 진입 단계(조건 동치 변환 I-EQV)의 유무가 다르므로 base ★ 2 / 3 으로 분리한다. 194-405 와 193-398 이 정확히 이 대비를 이룬다.
- 「일차결합 계수 연립」은 기저가 대칭형이냐(192-395 · I-SYM 지름길 있음) 아니냐(194-403 · 정석 소거)로 체감이 갈린다. 한 유형으로 두되 「기저 대칭성」을 변형 파라미터로 명시하는 편이 낫다.
- 이 단원 단독으로 ★4 자격이 있는 것은 195-410(정사영 → 성분 조작) 하나뿐이다. 나머지 상위 슬롯을 세우려면 내적(각·수직)·직선과 평면의 방정식·구의 방정식과 묶어 I-XU 결합 유형을 만들어야 한다. 194-402(최솟값)와 195-406(각의 이등분)이 그 결합의 자연스러운 접점이다.
- 193-399(PA+PB+PC → 무게중심·구)는 평면벡터 단원의 같은 골조 유형과 base ★ 를 공유하도록 카탈로그에서 묶는 것이 맞다. 공간이라고 난이도가 오르지 않고 성분이 하나 늘 뿐이다.
