---
name: mechanism-데이터-GN-CM2-16
description: 개념원리 공통수학2 16 집합의 연산(1/1 · 141-336~149-369) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 16 집합의 연산
  unit_code: CM2-16
  part: "1/1"
  extract_range: "141~149쪽 · 141-336~149-369"
  total_problems: 42
  unit_total: 42
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 16 집합의 연산 (1/1) 정독 데이터 (v1.0)

이 파일은 16단원 「집합의 연산」 전체 42문(141~149쪽 · 141-336~149-369)을 다룬다. 구역은 다섯이다. 「개념원리 익히기」 5문(합집합·교집합·서로소·여집합·차집합의 정의 확인), 「필수·발전 예제」 25문(예제 8 + 확인체크 17 · 혼합 연산, 여집합과 차집합, 벤다이어그램으로 집합 복원, 미지수 구하기, 연산의 성질, 연산 조건과 부분집합의 개수), 「연습문제 STEP 1」 6문, 「STEP 2」 3문, 「실력 UP」 3문이다. 단원 특성상 계산량은 대체로 가볍고 변별은 **연산식을 포함관계로 옮기는 동치 변환**(A∩X=X ⟺ X⊂A 등)과 **미지수 후보의 사후 기각**에 몰려 있다.

개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다. 이 범위의 출발점은 다음과 같이 잡았다.

- 「개념원리 익히기」 ★1 출발. 다만 141-340 처럼 전체집합의 임의 부분집합 A, B 를 다루는 추상 판정(Mₐ=3)은 +1 했다.
- 「필수·발전 예제」 구역의 통번호 문항은 tag 가 「확인체크」이지만 직전 예제를 그대로 확인하는 자리이므로 **예제 태그를 출발점**으로 삼았다(이 범위의 예제 8개는 모두 「필수」 → ★2). 골조가 예제보다 단순하면 −1, 동치 변환 통찰(depth 2)이 골조의 중심이면 +1 했다.
- 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 출발. 「교육청 기출」 태그는 통찰이 실제로 있을 때만 +1 을 고려했다.
- 조건제시법으로 준 집합을 원소나열로 옮기는 일은 이 단원의 기본 작업이므로 통찰(I-RT)로 세지 않고 Mₖ·Mₐ 로만 반영했다. 반대로 「수직선 위의 구간」·「벤다이어그램 영역」처럼 **표현 자체가 바뀌어야 풀리는** 경우만 I-RT 로 인정했다.
- `\cond{}` 로 명시된 「a 는 상수이다」 류 단서는 학생이 스스로 발견하는 조건이 아니므로 통찰로 세지 않았다.
- v3.8 에서 계산 마찰은 ★ 상승 신호가 아니므로, 소문항이 6개인 141-339 처럼 반복 계산만 많은 문항은 ★1 에 머물게 두었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-141-336
  page: 141
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 두 집합 A, B 가 주어질 때 A∪B 를 구한다. ⑵⑶ 은 한쪽이
    조건제시법(6의 양의 약수 · 4 이하의 자연수 · 이차방정식의 해)이다.
  category: "조건제시법을 원소나열로 → 합집합 정의 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합집합 구하기(원소나열·조건제시법 혼합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항이 「조건제시법을 원소로 펼친다 → 두 집합의 원소를 모은다」 두 단계다.
    ⑶ 의 (x+2)(x-1)=0 도 정수해 두 개로 끝난다. 통찰 없음·M_total 4 ·
    익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "조건제시법 → 원소나열 → 두 집합의 원소를 모아 A∪B"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{a,\,b,\,c,\,d,\,e\}$ ⑵ $\{1,\,2,\,3,\,6,\,9\}$ ⑶ $\{-2,\,1,\,2,\,3,\,4\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/141-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원소 문자·수, 약수를 만드는 밑수(6 → 8, 12), 이차방정식의 계수를 바꾼다. 제약: ① 조건제시법으로 준 집합이 유한하고 원소 수가 5개 이하여야 ★1 이 유지된다 ② 이차방정식의 해는 정수로 떨어뜨린다 ③ A⊂B 인 ⑴ 같은 배치를 하나쯤 남겨 합집합이 B 가 되는 확인 효과를 살린다."
    creative: "(1) A∪B 대신 n(A∪B) 를 묻기(★1 유지) (2) 한쪽을 무한집합(짝수 전체)으로 두면 답이 조건제시법이 되어 표현 전환이 생김(★2 · I-RT d1) (3) A∪B 를 주고 B 를 되묻는 역방향(★2 · I-BW d1) (4) 세 집합 A∪B∪C 로 늘리면 Mₛ 만 올라가고 ★ 는 그대로."
```

```yaml
- id: GN-CM2-141-337
  page: 141
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 두 집합 A, B 가 주어질 때 A∩B 를 구한다. ⑵ 는 공통 원소가
    하나뿐이고 ⑶ 은 무한집합(짝수)과 유한집합의 교집합이다.
  category: "공통 원소 추출 → 교집합 정의 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "교집합 구하기(원소나열·조건제시법 혼합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 집합의 공통 원소를 고르는 한 단계. ⑶ 은 무한집합이 섞였지만 상대가
    10 이하로 유한해 결과가 유한하다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 집합의 원소를 대조 → 공통 원소만 모아 A∩B"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{2,\,4\}$ ⑵ $\{d\}$ ⑶ $\{2,\,4,\,6,\,8,\,10\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/141-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원소 값과 ⑶ 의 상한(10 → 15, 20), 무한집합의 조건(짝수 → 3의 배수)을 바꾼다. 제약: ① 무한집합이 들어가는 소문항은 상대 집합이 반드시 유한이어야 답이 나열 가능하다 ② 교집합이 공집합이 되는 소문항을 하나 두면 다음 문항(서로소)과 연결된다."
    creative: "(1) A∩B=∅ 인 배치를 넣어 서로소 용어를 도입(★1 유지) (2) n(A∩B) 를 묻기(★1) (3) A∩B 를 주고 미지 원소를 되묻기(★2 · I-BW d1) (4) A∪B 와 A∩B 를 동시에 주고 A, B 를 복원하면 벤다이어그램 골조로 올라가 ★2."
```

```yaml
- id: GN-CM2-141-338
  page: 141
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 ㄱ~ㄹ 의 네 쌍 (A, B) 중에서 서로소인 것만 모두 고른다.
    ㄴ 은 (x-2)²=0 의 해, ㄷ 은 4와 9의 양의 약수, ㄹ 은 음·양의 정수다.
  category: "각 보기를 원소나열로 → A∩B=∅ 인지 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로소인 두 집합 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기 네 개를 각각 원소로 펼쳐 공통 원소 유무만 본다. ㄷ 은 1 이 공통,
    ㄴ 은 2 가 공통이라 서로소가 아니다. 0 이 양·음 어느 쪽도 아니라는
    점이 ㄹ 의 유일한 확인 지점이라 Mₜ=1. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "보기별 원소나열 → 공통 원소 유무 → A∩B=∅ 인 보기 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/141-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "약수 쌍(4와 9 → 8과 15 · 6과 35)과 이차방정식의 중근 값을 바꾼다. 제약: ① 서로소가 아닌 보기는 공통 원소가 1 하나뿐인 배치(약수 쌍)가 함정으로 좋다 ② 서로 다른 종류의 원소(문자 vs 수)를 쓰는 보기를 하나는 남겨 정의 확인 효과를 살린다."
    creative: "(1) 서로소가 아닌 것만 고르게 뒤집기(★1 유지) (2) 보기에 부등식으로 준 실수 구간을 넣으면 경계 판정이 생겨 ★2(Mₜ 상승) (3) 「서로소인 쌍의 개수」로 묻기(★1) (4) 한 보기를 미지수 포함 집합으로 두고 서로소가 되게 하는 a 범위를 묻는 형태로 바꾸면 I-EQV d1 · ★3."
```

```yaml
- id: GN-CM2-141-339
  page: 141
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    U 가 20 이하의 소수일 때 A={2,5,11,17}, B={5,7,17,19} 에 대하여
    ⑴~⑹ A^c, B^c, A-B, B-A, (A∪B)^c, (A∩B)^c 를 차례로 구한다.
  category: "전체집합 원소나열 → 여집합·차집합 정의 6회 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여집합과 차집합 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    U={2,3,5,7,11,13,17,19} 을 먼저 적으면 여섯 소문항이 모두 원소 대조로
    끝난다. 소문항 수 때문에 Mₖ=2 지만 v3.8 에서 계산 마찰은 ★ 상승 신호가
    아니다. 통찰 없음·익히기 구역 → ★1 유지.
  tier: star_1
  mechanism_primary: "U 를 원소나열 → 각 정의(여집합·차집합)를 원소 대조로 6회 적용"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{3,\,7,\,13,\,19\}$ ⑵ $\{2,\,3,\,11,\,13\}$ ⑶ $\{2,\,11\}$ ⑷ $\{7,\,19\}$ ⑸ $\{3,\,13\}$ ⑹ $\{2,\,3,\,7,\,11,\,13,\,19\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/141-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체집합의 기준(20 이하의 소수 → 20 이하의 홀수 · 24의 양의 약수)과 A, B 의 원소를 바꾼다. 제약: ① U 의 원소 수는 8~10개가 적당하며 더 늘리면 계산 마찰만 커진다 ② A∩B 가 2개 이상이어야 ⑸⑹ 의 결과가 구별된다 ③ A∪B≠U 여야 ⑸ 가 공집합이 되지 않는다."
    creative: "(1) ⑸⑹ 을 드모르간 법칙으로 검산하게 하면 확인 단계가 붙어 ★2 (2) 여섯 소문항 중 결과가 같은 쌍(A^c-B 와 (A∪B)^c)을 찾게 하면 I-EQV d1 · ★2 (3) 원소의 합을 묻는 형태로 바꾸면 ★1 유지 (4) A, B 를 감추고 A^c, B^c 만 주어 A-B 를 묻는 역방향은 ★2 · I-BW d1."
```

```yaml
- id: GN-CM2-141-340
  page: 141
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    전체집합 U 의 두 부분집합 A, B 에 대하여 연산 등식 5개 중 옳지 않은
    것을 고른다(A∩A^c=∅, U-A^c=A, (A^c)^c∩U=A, B∩A^c=B-A,
    A∪(A∩B)=B).
  category: "연산의 성질(여집합·차집합·흡수법칙) 판정 → 반례 지목"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 연산의 성질(항등식 참·거짓 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지가 모두 교과서 성질이고 ⑤ 만 흡수법칙 A∪(A∩B)=A 를 B 로
    잘못 쓴 것이다. 구체 수치가 없고 임의의 부분집합을 다루므로 Mₐ=3.
    통찰은 없지만 추상도 때문에 익히기 출발점 ★1 에서 +1 → ★2.
  tier: star_2
  mechanism_primary: "각 선택지를 벤다이어그램·정의로 환원 → 흡수법칙 위반인 ⑤ 지목"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/141-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 문항에는 바꿀 수가 없다. 대신 오답 선택지를 만드는 성질(흡수법칙 → 드모르간 · 분배법칙)을 교체한다. 제약: ① 오답은 한 글자만 틀린 형태(A 를 B 로)여야 변별이 생긴다 ② 나머지 넷은 반드시 항상 참인 성질이어야 한다."
    creative: "(1) 「항상 옳은 것」으로 뒤집기(★2 유지) (2) 구체적인 U, A, B 를 주고 다섯 식의 값을 계산하게 하면 ★1 로 내려간다 (3) 반례가 되는 A, B 를 직접 제시하라고 하면 I-MI d1 · ★3 (4) 보기를 ㄱㄴㄷ 형으로 늘리고 「B⊂A 일 때」 조건을 붙이면 포함관계 결합으로 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-142-e1
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    A={3,5,7}, B 는 4<x<9 인 정수, C 는 12의 양의 약수일 때
    ⑴ A∩(B∪C) ⑵ (A∩B)∪C 를 구한다.
  category: "세 집합 원소나열 → 괄호 안부터 순서대로 연산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합집합과 교집합의 혼합 연산(괄호 순서)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B={5,6,7,8}, C={1,2,3,4,6,12} 로 펼친 뒤 괄호 안을 먼저 계산하는 순서
    지키기가 전부다. ⑴ 과 ⑵ 의 결과가 크게 달라 연산 순서의 중요성을
    보여 주는 자리. 통찰 없음·M_total 6 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "세 집합 원소나열 → 괄호 안 연산 → 바깥 연산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\{3,\,5,\,7\}$ ⑵ $\{1,\,2,\,3,\,4,\,5,\,6,\,7,\,12\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/142-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등식 범위(4<x<9), 약수의 밑수(12 → 18, 20), A 의 원소를 바꾼다. 제약: ① A⊂B∪C 가 되도록 맞추면 ⑴ 의 답이 A 자신이 되어 대비 효과가 살아난다 ② B 는 부등호가 모두 순부등호여야 경계 확인이 생긴다 ③ 세 집합에 공통 원소가 하나쯤 있어야 한다."
    creative: "(1) (A∩B)∪(A∩C) 와 A∩(B∪C) 를 함께 묻어 분배법칙을 확인시키기(★2 · I-EQV d1) (2) 세 집합 벤다이어그램에 색칠하게 하면 I-RT d1 · ★2 (3) n(A∪B∪C) 를 묻기(★2) (4) C 를 미지수 포함 집합으로 바꾸면 미지수 구하기 골조로 넘어가 ★3."
```

```yaml
- id: GN-CM2-142-e2
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    조건제시법으로 준 다섯 쌍 (A, B) 중 서로소인 것을 고른다.
    ② 는 x²=16 과 x<-4, ④ 는 2n 꼴과 3n+1 꼴이다.
  category: "각 선택지를 원소나열·구간으로 → 공통 원소 유무 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로소인 두 집합 판정(조건제시법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ② 가 정답인 이유는 A={-4,4} 인데 B 가 x<-4 로 -4 를 포함하지 않기
    때문이다. 경계를 포함하는지(T-경계)와 「음이 아닌 정수」가 0 을
    포함하는지(T-범위)가 겹쳐 Mₜ=2. 판정 자체는 표준 절차라 통찰 0 ·
    필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "선택지별 집합을 원소·구간으로 환원 → 공통 원소 유무 → 서로소인 ② 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/142-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱 값(16 → 9, 25), 경계 부등식(x<-4 → x≤-4 로 바꾸면 정답이 사라진다), 배수 꼴(2n 과 3n+1 → 3n 과 4n+2)을 바꾼다. 제약: ① 정답 선택지는 경계가 열린 부등식이어야 한다 ② 배수 꼴 두 쌍은 공통항이 존재하는지 합동식으로 먼저 확인해야 오답으로 쓸 수 있다."
    creative: "(1) 부등식의 등호를 넣거나 빼서 정답이 이동하게 만들기(★2 유지) (2) 「서로소인 것의 개수」로 묻기(★2) (3) 배수 꼴 두 집합이 서로소일 조건을 묻는 형태(★4 · I-EQV d2 — 최대공약수 논증) (4) 한 선택지에 미지수를 넣고 서로소가 되게 하는 a 를 묻기(★3 · I-VF d1)."
```

```yaml
- id: GN-CM2-142-341
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A 는 3 이하의 자연수, B 는 4의 양의 약수, C 는 1≤x≤8 인 홀수일 때
    다섯 연산식 중 옳지 않은 것을 고른다.
  category: "세 집합 원소나열 → 다섯 연산식 각각 계산 → 불일치 지목"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합집합과 교집합의 혼합 연산(선택지 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={1,2,3}, B={1,2,4}, C={1,3,5,7} 로 펼친 뒤 다섯 식을 계산한다.
    ③ 은 (A∪B)∩C 가 {1,3} 인데 {3} 으로 적혀 있어 1 의 누락이 함정이다.
    통찰 없음·M_total 6 · 직전 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "세 집합 원소나열 → 선택지별 괄호 순서대로 계산 → 다른 하나 지목"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/142-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(3 이하 · 8 이하)과 약수의 밑수(4 → 6, 8)를 바꾼다. 제약: ① 오답 선택지는 원소 하나만 빠뜨린 형태로 만들어야 변별이 된다 ② 세 집합에 1 처럼 모두 공통인 원소를 두면 그 원소의 누락이 자연스러운 함정이 된다 ③ 결과 집합의 크기는 4개 이하로 유지한다."
    creative: "(1) 「옳은 것」으로 뒤집기(★2 유지) (2) 다섯 식의 결과를 모두 적게 하면 ★1~2 (3) A∪(B∩C) 와 (A∪B)∩(A∪C) 를 나란히 두어 분배법칙을 확인시키기(★2 · I-EQV d1) (4) 세 집합을 임의의 부분집합으로 추상화하면 Mₐ=3 · ★3."
```

```yaml
- id: GN-CM2-142-342
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={a,b,c,d} 의 부분집합 중에서 B={a,c} 와 서로소인 집합의 개수.
  category: "서로소 조건 → 특정 원소를 갖지 않는 부분집합 → 2^(n-k)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「B 와 서로소」를 「a, c 를 원소로 갖지 않는 A 의 부분집합」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "서로소 조건을 만족시키는 부분집합의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    서로소를 「a, c 가 들어가면 안 된다」로 옮기면 남은 b, d 만 자유로워
    2²=4 로 끝난다. 이 동치 변환을 못 하면 16개 부분집합을 일일이 확인하게
    되므로 통찰 1개(EQV d1)로 인정. M_total 5 · 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "B 와 서로소 → a, c 제외 → 남은 원소 2개의 부분집합 2²=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/142-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 원소 수 n 과 B 의 원소 수 k 를 바꾸면 답은 2^(n-k). 제약: ① B⊂A 여야 공식이 그대로 쓰인다 ② B 에 A 밖의 원소가 섞이면 그 원소는 개수에 영향이 없다는 점이 새 함정이 되므로 의도한 경우에만 쓴다 ③ n-k 는 4 이하로 두어 검산이 가능하게 한다."
    creative: "(1) 「공집합이 아닌」 단서를 붙여 2^(n-k)-1 로 만들기(★2 · Mₜ 상승) (2) B 와 서로소가 아닌 부분집합의 개수를 묻는 여사건(★3 · I-SC d2) (3) B 를 A 의 부분집합이 아니게 두기(★2) (4) 「B 를 포함하는 부분집합」과 함께 묻어 두 조건의 차이를 보게 하면 ★3."
```

```yaml
- id: GN-CM2-143-e3
  page: 143
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 12 이하의 자연수, A 는 짝수, B 는 3의 배수일 때
    ⑴ (A∪B)^c ⑵ (A∩B)^c ⑶ A^c-B ⑷ B^c-A^c 를 구한다.
  category: "U·A·B 원소나열 → 여집합·차집합 정의 4회 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여집합과 차집합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={2,4,6,8,10,12}, B={3,6,9,12} 로 펼치면 네 소문항이 대조로 끝난다.
    ⑷ B^c-A^c 가 A-B 와 같다는 것을 알면 빨라지지만 직접 계산으로도
    같은 답에 도달하므로 통찰로 세지 않았다. 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "U·A·B 원소나열 → 정의대로 여집합·차집합 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\{1,\,5,\,7,\,11\}$ ⑵ $\{1,\,2,\,3,\,4,\,5,\,7,\,8,\,9,\,10,\,11\}$ ⑶ $\{1,\,5,\,7,\,11\}$ ⑷ $\{2,\,4,\,8,\,10\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/143-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(12 → 15, 20)과 A, B 의 배수 기준(2와 3 → 3과 4)을 바꾼다. 제약: ① 두 기준의 최소공배수가 U 안에 있어야 A∩B 가 공집합이 되지 않는다 ② ⑴ 과 ⑶ 의 답이 같아지도록 기준을 잡으면 드모르간을 실감하게 된다 ③ U 원소 수는 12~15 를 넘기지 않는다."
    creative: "(1) ⑴ 과 ⑶ 이 같은 이유를 쓰게 하면 I-EQV d2 · ★3 (2) 답을 조건제시법으로 요구하면 I-RT d1 · ★2 (3) 원소의 합·개수를 묻기(★2) (4) A, B 를 감추고 네 결과만 주어 A, B 를 복원하는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-CM2-143-343
  page: 143
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 10 이하의 자연수, A 가 소수의 집합일 때 n(A^c)-n(A) 의 값.
  category: "A 원소나열 → 개수 세기 → n(A^c)=n(U)-n(A)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여집합의 원소의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={2,3,5,7} 이므로 n(A)=4, n(A^c)=10-4=6, 차는 2. 1 이 소수가 아니라는
    점만 확인하면 끝나는 한 단계 문항이다. 통찰 없음·M_total 4 →
    필수 예제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "소수 나열 → n(A)=4 → n(A^c)=n(U)-n(A)=6 → 차 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/143-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(10 → 20, 30)과 A 의 조건(소수 → 3의 배수 · 완전제곱수)을 바꾼다. 제약: ① n(U) 와 n(A) 의 차가 정수로 깔끔히 나오게 상한을 고른다 ② 소수를 쓰면 1 의 처리가 함정으로 남으므로 그대로 두는 편이 좋다."
    creative: "(1) n(A^c) 만 묻기(★1) (2) A^c 의 원소의 합을 묻기(★1~2) (3) n(A∪B)=n(A)+n(B)-n(A∩B) 가 필요한 두 집합 버전(★2 · I-EQV d1) (4) n(A^c)-n(A)=k 가 되게 하는 U 의 상한을 되묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-143-344
  page: 143
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={2,5,6,8,9}, B 가 홀수인 한 자리 자연수일 때
    (A∪B)-(A∩B) 를 구한다.
  category: "합집합·교집합 각각 계산 → 차집합(대칭차)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합집합에서 교집합을 뺀 집합(대칭차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B={1,3,5,7,9} 로 펼친 뒤 A∪B 와 A∩B={5,9} 를 각각 구하고 빼면 된다.
    「양쪽에 다 있는 원소만 버린다」는 구조를 알면 한 줄이지만 순서대로
    계산해도 같은 답이다. 통찰 없음·M_total 6 · 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A∪B 와 A∩B 계산 → 차집합 → 한쪽에만 있는 원소들"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{1,\,2,\,3,\,6,\,7,\,8\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/143-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 원소와 B 의 조건(홀수 한 자리 → 3의 배수 · 소수)을 바꾼다. 제약: ① A∩B 가 2개 이상이어야 대칭차가 A∪B 와 구별된다 ② 결과 원소가 8개를 넘지 않게 A, B 크기를 잡는다 ③ A, B 어느 쪽도 다른 쪽을 포함하지 않아야 한다."
    creative: "(1) (A-B)∪(B-A) 로 표기만 바꾸어 같은 답임을 확인시키기(★2 · I-EQV d1) (2) 결과의 원소의 합·개수를 묻기(★2) (3) 결과를 주고 B 를 복원하기(★3 · I-BW d2) (4) 미지수를 넣어 대칭차가 특정 집합이 되게 하는 a 를 묻기(★4 — 149-365 골조)."
```

```yaml
- id: GN-CM2-143-345
  page: 143
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U={1,2,…,8} 의 두 부분집합 A(8의 약수), B(6의 약수)에 대하여
    (A-B)^c 의 모든 원소의 합.
  category: "A-B 계산 → 여집합 → 원소의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "차집합의 여집합과 원소의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={1,2,4,8}, B={1,2,3,6} 이므로 A-B={4,8}, 여집합은 U 에서 이 둘을
    뺀 집합이다. U 전체 합에서 4+8 을 빼면 바로 나온다는 단축이 있지만
    직접 나열해도 같다. 통찰 없음·M_total 6 · 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A-B={4,8} → 여집합 = U-{4,8} → 원소의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$24$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/143-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(8 → 10, 12)과 두 약수 기준(8과 6 → 12와 10)을 바꾼다. 제약: ① A-B 의 원소가 2~3개여야 「전체 합에서 빼기」 단축이 의미를 갖는다 ② 답이 두 자리 정수로 떨어지게 U 를 고른다 ③ A⊄B, B⊄A 가 되도록 기준을 잡는다."
    creative: "(1) (B-A)^c 를 함께 묻어 비대칭을 보게 하기(★2) (2) 원소의 곱을 묻기(★2 · Mₖ 상승) (3) (A-B)^c 대신 A^c∪B 로 표기를 바꿔 같은 집합임을 확인시키기(★3 · I-EQV d2) (4) 원소의 합이 주어진 값이 되게 하는 U 의 상한을 되묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-144-e4
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    B={1,2,4,5}, A∩B={2,5}, A∪B={1,2,3,4,5,6,7} 일 때 집합 A 를 구한다.
  category: "세 조건을 벤다이어그램 네 영역에 배치 → A 영역 회수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연산 조건들을 벤다이어그램의 네 영역(A-B, A∩B, B-A, 바깥) 배치로 옮겨 A 를 읽어 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램을 이용한 집합의 연산(집합 복원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 에만 있는 원소는 B-(A∩B)={1,4} 이고, A∪B 에서 이를 빼면 A 가 된다.
    식만 보고는 막히지만 다이어그램에 세 조건을 얹으면 한눈에 읽히므로
    표현 전환 통찰 1개(RT d1). 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "B-A = B-(A∩B)={1,4} → A = (A∪B)-(B-A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\{2,\,3,\,5,\,6,\,7\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/144-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B 의 원소, A∩B 의 크기, A∪B 의 원소를 바꾼다. 제약: ① A∩B⊂B⊂A∪B 가 반드시 성립해야 모순이 없다 ② B-A 가 비면 A=A∪B 로 시시해지므로 1개 이상 남긴다 ③ A-B 에도 2개 이상 남겨 다이어그램 네 영역이 모두 채워지게 한다."
    creative: "(1) A 대신 A-B 나 n(A) 를 묻기(★2 유지) (2) 조건 하나를 여집합 형태((A∪B)^c)로 바꾸면 전체집합이 필요해져 ★2~3 (144-346 골조) (3) 세 조건 중 하나를 빼고 「가능한 A 의 개수」를 묻기(★4 · I-MI d2) (4) 원소에 미지수를 섞으면 미지수 구하기와 결합해 ★4."
```

```yaml
- id: GN-CM2-144-346
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 9 이하의 자연수이고 (A∪B)^c={2}, A∩B={5,8}, A-B={1,6,7}
    일 때 집합 B 를 구한다.
  category: "여집합 조건 → A∪B 회수 → 벤다이어그램 영역 배치 → B"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 조건을 벤다이어그램 네 영역에 채워 B=(A∩B)∪(B-A) 를 읽어 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램을 이용한 집합의 연산(집합 복원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (A∪B)^c={2} 에서 A∪B=U-{2} 를 먼저 회수하는 단계가 e4 보다 하나 더
    있다. 남은 영역을 A∩B={5,8}, A-B={1,6,7} 로 채우면 B-A={3,4,9} 가
    떨어진다. RT d1 · M_total 7 · 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A∪B=U-{2} → B-A = (A∪B)-(A-B)-(A∩B) → B=(A∩B)∪(B-A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\{3,\,4,\,5,\,8,\,9\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/144-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(9 → 10, 12), (A∪B)^c 의 원소 수, A∩B·A-B 의 원소를 바꾼다. 제약: ① 세 영역(A∩B, A-B, (A∪B)^c)이 서로소이고 U 안에 있어야 한다 ② 남는 영역 B-A 가 비지 않도록 원소 수를 맞춘다 ③ U 원소 수는 12 이하로."
    creative: "(1) B 대신 B 의 원소의 합·개수를 묻기(★2 유지) (2) A-B 를 A^c∩B 같은 표기로 바꿔 한 단계 더 환원시키기(★3 · I-EQV d2) (3) 조건을 하나 줄이고 가능한 B 의 개수를 묻기(★4 · I-MI d2) (4) 세 집합 A, B, C 의 벤다이어그램으로 확장(★4)."
```

```yaml
- id: GN-CM2-144-347
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 8 이하의 자연수이고 B={4,5,8}, A∩B=∅, A∪B=U 일 때
    집합 A 의 모든 원소의 합.
  category: "A∩B=∅ 이고 A∪B=U → A=B^c → 원소의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조건(서로소 · 합집합이 U)을 한꺼번에 A=B^c 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "서로소이고 합집합이 전체집합일 때(여집합 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 동시에 성립하면 A 는 B 의 여집합이 될 수밖에 없다. 이
    동치 변환을 하면 A={1,2,3,6,7} 을 바로 적고 합만 내면 된다.
    EQV d1 · M_total 6 · 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A∩B=∅ 이고 A∪B=U → A=B^c={1,2,3,6,7} → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$19$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/144-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(8 → 10, 12)과 B 의 원소를 바꾼다. 제약: ① B⊂U 여야 하고 ② B 가 U 의 절반 이하일 때 A 의 합이 충분히 커서 답이 두 자리로 떨어진다 ③ B 에 1 을 넣으면 A 의 합 계산이 단조로워지니 피한다."
    creative: "(1) A 자체나 n(A) 를 묻기(★2 유지) (2) A∩B=∅ 만 주고 A 의 개수를 묻기(★3 · 부분집합 개수 골조) (3) A∪B=U 를 A^c⊂B 로 바꿔 쓰면 포함관계 환원이 하나 더 붙어 ★3 (4) 「A 와 B 가 U 의 분할」이라는 말로 바꾸면 용어 해석이 더해져 ★3."
```

```yaml
- id: GN-CM2-144-348
  page: 144
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 1≤x≤11 인 홀수이고 A-B={1,11}, B-A={5,9},
    (A∩B)^c={1,5,7,9,11} 일 때 집합 B 의 모든 원소의 합.
  category: "여집합 조건 → A∩B 회수 → B=(A∩B)∪(B-A) → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(A∩B)^c 를 다이어그램의 「가운데를 뺀 나머지」로 읽어 A∩B={3} 를 회수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램을 이용한 집합의 연산(집합 복원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    U={1,3,5,7,9,11} 에서 (A∩B)^c 를 빼면 A∩B={3} 이 남는다. 여기에
    B-A={5,9} 를 더한 것이 B 다. 여집합에서 가운데 영역을 역산하는
    단계가 핵심이라 RT d1. M_total 7 · 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A∩B = U-(A∩B)^c = {3} → B = (A∩B)∪(B-A) = {3,5,9} → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$17$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/144-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 범위(1~11 홀수 → 1~13 홀수 · 10 이하 짝수)와 세 영역의 원소 배치를 바꾼다. 제약: ① A-B, B-A, A∩B 가 서로소이고 합이 U 를 넘지 않아야 한다 ② (A∩B)^c 는 나머지 셋의 합집합과 정확히 일치해야 모순이 없다 ③ A∩B 는 1~2개로 두어야 역산이 깔끔하다."
    creative: "(1) A 의 원소의 합을 묻기(★2 유지) (2) (A∪B)^c 를 추가로 주어 U 밖 영역까지 채우게 하기(★3) (3) 조건 하나를 지우고 가능한 B 를 모두 구하게 하면 I-MI d2 · ★4 (4) 원소를 문자로 바꾸고 합 대신 개수를 묻기(★2)."
```

```yaml
- id: GN-CM2-145-e5
  page: 145
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    A={2,3,a²+4}, B={a+1,4,2a+3} 에 대하여 A∩B={2,5} 일 때
    상수 a 의 값.
  category: "교집합 원소의 소속 조건 → a 후보 → 원 조건 재대입으로 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a=1 과 a=-1 을 모두 A, B 에 되돌려 넣어 A∩B={2,5} 가 되는 쪽만 남김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "집합의 연산을 만족시키는 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5 는 A 의 원소여야 하므로 a²+4=5 에서 a=±1, 2 는 B 의 원소여야 하므로
    a+1=2 또는 2a+3=2 다. 두 조건을 모두 만족하는 후보만 남기고 실제로
    A, B 를 적어 교집합을 확인하는 사후 검증이 필수(VF d1). 필수 예제
    출발 ★2 유지 — 각 단계는 표준이고 후보가 둘뿐이다.
  tier: star_2
  mechanism_primary: "5∈A → a²+4=5 → a=±1 → B 에도 2 가 들어가는 a 만 남김 → 재대입 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$a=1$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/145-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A∩B 의 원소 값(2, 5), a 의 이차식(a²+4), B 의 일차식(a+1, 2a+3) 계수를 바꾼다. 제약: ① 이차식에서 나온 두 근 중 하나만 살아남아야 검증 단계가 의미를 갖는다 ② 살아남는 a 는 정수로 두고 ③ 기각되는 후보는 교집합이 실제로 달라지도록(원소가 겹치지 않도록) 배치한다 ④ 두 집합의 원소가 서로 같아져 원소 수가 줄지 않게 확인한다."
    creative: "(1) A∪B 나 A-B 를 조건으로 바꾸기(같은 골조 ★2~3) (2) a 가 두 개 나오게 해 「모든 a 의 합」을 묻기(★3 · I-MI d1) (3) a 의 이차식을 두 집합 양쪽에 넣으면 연립이 되어 ★3~4 (4) 「a 가 자연수」 단서를 붙여 검증 축을 바꾸면 ★2 유지."
```

```yaml
- id: GN-CM2-145-349
  page: 145
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={1,4,a²+2}, B={3,3a-5,a²+2a-2} 에 대하여 A∩B={1,6} 일 때
    상수 a 의 값.
  category: "교집합 원소의 소속 조건 → a 후보 → 재대입 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a²+2=6 의 두 근과 1∈B 에서 나온 근들을 교차 확인해 공통 후보만 남김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "집합의 연산을 만족시키는 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6∈A 에서 a²+2=6 → a=±2, 1∈B 에서 3a-5=1 또는 a²+2a-2=1 이 나온다.
    후보 집합의 교집합을 취한 뒤 실제로 A, B 를 적어 A∩B={1,6} 인지
    확인해야 한다(VF d1). e5 와 같은 골조·같은 난이도 → ★2 유지.
  tier: star_2
  mechanism_primary: "6∈A → a=±2 → 1∈B 를 만족하는 a 와 교차 → 재대입 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/145-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교집합 원소(1, 6), 이차식 a²+2·a²+2a-2, 일차식 3a-5 의 계수를 바꾼다. 제약: ① 두 경로에서 나온 후보의 교집합이 정확히 한 값이어야 답이 단일하다 ② 이차식의 근은 정수로 떨어뜨린다 ③ 기각되는 a 에서 집합의 원소가 중복되어 원소 수가 줄지 않는지 확인한다."
    creative: "(1) A∩B 를 A-B 로 바꾸기(★3 — 145-350 골조) (2) a 값을 두 개로 만들고 곱·합을 묻기(★3 · I-MI d1) (3) 집합 B 자체를 답으로 요구하면 검증이 강제되어 ★3 (4) 「A∩B 의 원소가 2개」라는 개수 조건으로 바꾸면 경우가 늘어 I-MI d2 · ★4."
```

```yaml
- id: GN-CM2-145-350
  page: 145
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={1,a²-a,3,5}, B={a²,a-1,a+6} 에 대하여 A-B={2,3} 일 때
    집합 B 를 구한다(a 는 상수).
  category: "차집합 조건 → A 의 나머지 원소는 B 에 속함 → a 후보 → 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A-B={2,3} 을 「2, 3 은 B 에 없고 A 의 나머지 원소 1, 5 는 B 에 있다」로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a²-a=2 의 두 근 a=2, a=-1 을 B 에 되돌려 넣어 1, 5 가 모두 들어가는 쪽만 남김"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "차집합 조건을 만족시키는 미지수와 집합 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차집합 조건이 「빠진 원소」와 「남은 원소」 두 방향의 정보를 동시에
    주는 것이 핵심이다. a²-a=2 에서 후보 둘을 얻은 뒤 1, 5 가 B 에
    들어가는지까지 확인해야 하나가 기각된다. 동치 변환 + 사후 검증
    통찰 2개 → 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "A-B={2,3} → 2=a²-a 이고 1,5∈B → a 후보 → 재대입해 살아남는 a 로 B 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\{-2,\,1,\,5\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/145-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A-B 의 원소(2, 3), 이차식 a²-a·a², 일차식 a-1·a+6 의 계수를 바꾼다. 제약: ① A 의 원소 중 차집합에 없는 것들이 B 의 세 원소와 정확히 대응돼야 한다 ② 이차식의 두 근 중 한쪽만 대응에 성공해야 기각 단계가 살아난다 ③ B 의 원소끼리 값이 겹쳐 개수가 줄지 않는지 확인한다."
    creative: "(1) A-B 대신 B-A 를 주면 정보 방향이 바뀌어 같은 ★3 (2) 집합 B 대신 a 값을 묻기(★2~3) (3) A∩B 와 A-B 를 함께 주어 과잉 조건의 일관성을 확인시키면 ★4 (4) a 가 두 값 모두 살아남게 설계해 B 를 모두 구하게 하면 I-MI d2 · ★4."
```

```yaml
- id: GN-CM2-145-351
  page: 145
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={2,5,a-1}, B={4,2a-3} 에 대하여 A∪B={2,4,5,7} 일 때
    집합 B 의 모든 원소의 합(a 는 상수).
  category: "합집합 원소 대조 → 미지 원소의 값 경우 나누기 → 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2a-3 이 합집합의 어느 원소와 같은지로 경우를 나눔(2, 5, 7 세 갈래)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 갈래의 a 를 a-1 에 되돌려 넣어 A∪B 가 정확히 네 원소가 되는 갈래만 남김"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "합집합 조건을 만족시키는 미지수와 집합 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A∪B 에 새로 등장한 7 은 a-1 이거나 2a-3 이다. 두 미지 원소가 동시에
    합집합 안에 들어가야 하므로 경우를 나눈 뒤 나머지 원소까지 확인해야
    한다. 분기(MI d1) + 사후 기각(VF d1) 2개 → 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "7 은 a-1 또는 2a-3 → a 후보별로 두 미지 원소를 모두 확인 → 살아남는 a 로 B 의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/145-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A∪B 의 원소(2,4,5,7), 일차식 a-1·2a-3 의 계수를 바꾼다. 제약: ① A∪B 의 원소 수는 A 와 B 의 원소 수 합보다 작아야 겹침이 생긴다 ② 두 일차식의 계수를 다르게 해야 한 갈래만 살아남는다 ③ a 는 정수로 떨어뜨리고 ④ 기각 갈래에서는 a-1 이 A∪B 밖 값이 되도록 설계한다."
    creative: "(1) B 대신 a 값이나 A 를 묻기(★3 유지) (2) A∩B 조건을 추가로 주면 과잉 조건 일관성 확인으로 ★4 (3) 일차식을 이차식으로 바꾸면 근이 늘어 기각이 두 번 필요해져 ★4 (4) A∪B 의 원소 수만 주고 가능한 a 를 모두 구하게 하면 I-MI d2 · ★4."
```

```yaml
- id: GN-CM2-146-e6
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    전체집합 U 의 두 부분집합 A, B 에 대하여 다섯 식 중 항상 옳은 것을
    고른다(A⊂U^c, (A∪B)⊂A, (A∩B)⊂B, U∩B^c=B, U⊂(A∪B)).
  category: "연산 결과와 포함관계의 기본 성질 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 연산의 성질(포함관계 항상 성립 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A∩B 는 언제나 A 와 B 양쪽에 포함된다는 기본 성질이 ③ 이다. 나머지는
    U^c=∅, A∪B⊇A, U∩B^c=B^c 처럼 한 글자씩 뒤집힌 형태라 정의만 알면
    걸러진다. 임의 부분집합이라 Mₐ=3 이지만 통찰은 없다. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "각 식을 정의·벤다이어그램으로 환원 → 항상 성립하는 (A∩B)⊂B 선택"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/146-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 오답 선택지를 만드는 성질(U^c=∅, A⊂A∪B, 여집합의 여집합)을 교체한다. 제약: ① 정답 선택지는 조건 없이 항상 참인 성질이어야 한다 ② 오답은 포함 방향만 뒤집은 형태가 변별에 좋다."
    creative: "(1) 「항상 옳지 않은 것」으로 뒤집기(★2 유지) (2) 구체적인 U, A, B 를 주고 다섯 식을 계산시키면 ★1 (3) 「A⊂B 일 때」 단서를 붙이면 포함관계가 결합돼 ★2~3(146-e7 골조) (4) 반례를 직접 만들게 하면 I-MI d1 · ★3."
```

```yaml
- id: GN-CM2-146-e7
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    U 의 서로 다른 두 부분집합 A, B 에 대하여 B⊂A 일 때 항상 옳은 것을
    고른다(A∩B=B, A∪B=B, A-B=∅, A^c∪B=U, B^c⊂A^c).
  category: "포함관계 B⊂A → 연산 결과로 번역 → 선택지 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 연산의 성질과 포함 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B⊂A 를 벤다이어그램으로 그리면 A∩B=B, A∪B=A 가 바로 보인다. ⑤ 는
    여집합을 취하면 포함 방향이 뒤집혀 A^c⊂B^c 가 되어야 하므로 거짓이고,
    ③ 은 A-B 가 아니라 B-A 가 공집합이다. 방향 뒤집힘 함정 둘(T-부호·
    T-범위)로 Mₜ=2. 성질 암기 확인이라 통찰 0 · 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "B⊂A 를 다이어그램으로 → 각 선택지의 연산 결과와 포함 방향 확인 → A∩B=B"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/146-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 전제 조건(B⊂A)을 A∩B=∅ 이나 A∪B=U 로 교체해 같은 판정 구조를 재활용한다. 제약: ① 전제는 한 줄로 그림이 그려지는 관계여야 한다 ② 오답 중 하나는 반드시 여집합의 포함 방향을 뒤집은 것으로 둔다."
    creative: "(1) 「항상 옳지 않은 것」으로 뒤집기(★2 유지 · 148-362 골조) (2) 전제를 B^c⊂A^c 처럼 여집합으로 주면 한 번 더 환원해야 해 ★2~3(146-353 골조) (3) 보기를 ㄱㄴㄷ 형으로 늘려 모두 고르게 하기(★3) (4) 전제를 결론으로 되묻는 역방향(A∩B=B 이면 무엇이 성립하는가)은 ★3 · I-EQV d2."
```

```yaml
- id: GN-CM2-146-352
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    공집합이 아닌 서로 다른 두 부분집합 A, B 에 대하여 다섯 연산식 중
    나머지 넷과 다른 하나를 고른다(A-B^c, (A∪A^c)∪B, (U-A^c)∩B,
    (A^c)^c∩(U-B^c), (A∩B)∪(B∩B^c)).
  category: "다섯 식을 각각 가장 간단한 형태로 환원 → 정규형이 다른 하나 지목"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "복잡한 다섯 식을 여집합·항등원 성질로 모두 A∩B 꼴 정규형으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산의 성질(식 간단히 하기와 동치 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ①③④⑤ 는 모두 A∩B 로 줄고 ② 만 A∪A^c=U 때문에 U 가 된다. 각 식을
    「일단 간단히 한다」는 방향을 잡지 못하면 다섯 개를 그림으로 일일이
    비교하게 된다. 정규형 환원 통찰(EQV d2)이 골조의 중심 → 출발점 ★2
    에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "각 식을 여집합·항등 성질로 간단히 → 넷은 A∩B, ② 만 U → ② 지목"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/146-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 공통 정규형(A∩B)을 A∪B 나 A-B 로 바꾸고 다섯 식을 그에 맞게 다시 쓴다. 제약: ① 서로 다른 하나는 ∅ 이나 U 처럼 극단값으로 두면 발견이 쉬워지므로 난도를 올리려면 A 나 B 자체로 둔다 ② 각 식에 여집합의 여집합·U-X 표기를 한 번씩 섞어 환원 단계를 만든다."
    creative: "(1) 다섯 식을 모두 간단히 적게 하면 ★3 유지 (2) 「같은 것끼리 짝 지으라」로 바꾸면 비교 부담이 늘어 ★4 (3) 세 집합 A, B, C 로 늘려 분배법칙을 섞기(★4 · I-EQV d2) (4) A∩B=∅ 같은 전제를 붙여 정규형이 공집합이 되게 하면 판정이 뒤집혀 ★3."
```

```yaml
- id: GN-CM2-146-353
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 의 두 부분집합 A, B 에 대하여 B^c⊂A^c 일 때 항상 성립한다고 할 수
    없는 것을 고른다(A⊂B, A∪B=B, A-B=∅, A∪B^c=U, A∩B=A).
  category: "여집합 포함관계 → 원래 포함관계로 뒤집기 → 선택지 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B^c⊂A^c 를 A⊂B 로 뒤집어야 나머지 선택지가 모두 판정 가능해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여집합의 포함 관계와 연산의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 여집합을 취하면 A⊂B 다. 이 뒤집기만 하면 ①②③⑤ 는 즉시
    참이고 ④ 만 반례(A 의 밖이면서 B 안인 원소)가 있다. 방향 뒤집힘이
    핵심 함정이라 Mₜ=2. 통찰 1개(EQV d2)지만 e7 의 확인체크 자리라
    출발점 ★2 유지.
    [분류 이슈] 여집합 뒤집기 + ④ 반례 탐색을 합치면 ★3 후보 — 라벨은 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "B^c⊂A^c → A⊂B → 네 선택지는 참, A∪B^c=U 만 반례 존재"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/146-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 전제를 A^c⊂B^c, A∩B^c=∅, A-B=∅ 등 같은 뜻의 다른 표기로 교체한다. 제약: ① 오답 선택지는 반례가 실제로 존재해야 하고 ② 나머지 넷은 전제에서 한 줄로 따라 나와야 한다."
    creative: "(1) 「항상 성립하는 것」으로 뒤집기(★2 유지) (2) 반례가 되는 A, B 를 구체적으로 제시하게 하면 I-MI d1 추가 · ★3 (3) 전제를 두 개(B^c⊂A^c 와 A≠B)로 늘리면 진부분집합 판정이 붙어 ★3 (4) 보기를 ㄱㄴㄷㄹ 로 늘려 모두 고르기(★3 · 146-354 골조)."
```

```yaml
- id: GN-CM2-146-354
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    공집합이 아닌 두 부분집합 A, B 가 서로소일 때 보기 ㄱ~ㅂ 여섯 개
    중 항상 옳은 것을 모두 고른다(A-B=∅, A⊂B^c, A∪B^c=B^c,
    B∩A^c=B, A∩(B-A)=∅, A-(U-B)=A).
  category: "서로소를 A⊂B^c 로 변환 → 여섯 보기 일괄 판정"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A∩B=∅ 을 A⊂B^c 로 옮기면 ㄴㄷㄹ 이 포함관계 한 줄로 동시에 판정됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로소인 두 집합의 연산의 성질(보기 모두 고르기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    서로소를 포함관계 A⊂B^c 로 바꾸면 ㄴㄷㄹ 이 한꺼번에 참으로 정리되고,
    ㅁ 은 서로소와 무관하게 항상 참이다. 거짓인 ㄱ 은 A-B=A 이고 ㅂ 은
    A-(U-B)=A∩B=∅ 이라 A 가 아니다. 보기가 여섯 개로 많아 Mₛ=3 이고
    U-B 를 B^c 로 읽는 표기 함정이 겹쳐 Mₜ=2. EQV d2 → ★3.
  tier: star_3
  mechanism_primary: "A∩B=∅ → A⊂B^c → 여섯 보기를 포함관계·여집합 정의로 일괄 판정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ, ㄹ, ㅁ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/146-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 보기 수(6개)와 전제(서로소 → B⊂A)를 교체한다. 제약: ① 참·거짓 보기가 모두 있어야 하고 ② 거짓 보기는 A-B=∅ 처럼 방향만 뒤집은 형태가 좋다 ③ U-B 같은 다른 표기를 최소 하나 섞는다."
    creative: "(1) 전제를 B⊂A 로 바꾸기(★3 유지) (2) 옳은 것의 개수만 묻기(★2~3) (3) 거짓인 보기마다 반례를 들게 하면 I-MI d2 추가 · ★4 (4) A, B, C 세 집합이 서로소일 때로 확장하면 ★4."
```

```yaml
- id: GN-CM2-147-e8
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    A={a,b,c,d,e}, B={d,e} 에 대하여 A∩X=X, (A-B)∪X=X 를 만족시키는
    집합 X 의 개수.
  category: "연산 등식 → 포함관계 → 부분집합 개수 2^(n-k)"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A∩X=X 를 X⊂A 로, (A-B)∪X=X 를 (A-B)⊂X 로 옮겨 X 를 양쪽에서 가둠"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산과 부분집합의 개수(연산식을 포함관계로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원의 핵심 동치 변환 두 개가 한 문항에 같이 나온다. A-B={a,b,c}
    이므로 {a,b,c}⊂X⊂A 이고 자유로운 원소는 d, e 둘 → 2²=4. 변환을 못
    하면 32개 부분집합을 일일이 검사하게 되므로 EQV d2 가 골조의 중심 →
    필수 예제 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "A∩X=X → X⊂A · (A-B)∪X=X → (A-B)⊂X → 2^(5-3)=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/147-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 원소 수 n 과 B 의 원소 수를 바꾸면 답은 2^(n-|A-B|). 제약: ① B⊂A 여야 A-B 가 의도대로 줄어든다 ② 자유 원소 수는 2~4 로 두어 답이 4~16 이 되게 한다 ③ A-B 가 공집합이 되면 조건 하나가 무력해지니 피한다."
    creative: "(1) A∩B 를 하한으로 주기(147-355 골조 · ★3 유지) (2) 조건을 A-X=∅ 처럼 차집합으로 바꾸기(147-356 골조 · ★3) (3) 「X 가 공집합이 아니다」를 붙여 1 을 빼게 하기(★3 · Mₜ 상승) (4) 상·하한 집합을 미지수로 주고 개수가 k 가 되게 하는 값을 되묻기(★4 · I-BW d2)."
```

```yaml
- id: GN-CM2-147-355
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    A={1,2,3,4,5,6}, B={4,5,6,7,8} 에 대하여 A∩X=X, (A∩B)∪X=X 를
    만족시키는 집합 X 의 개수.
  category: "연산 등식 → (A∩B)⊂X⊂A → 부분집합 개수"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 연산 등식을 (A∩B)⊂X⊂A 라는 이중 포함관계로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산과 부분집합의 개수(연산식을 포함관계로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A∩B={4,5,6} 이므로 {4,5,6}⊂X⊂A 이고 자유 원소는 1, 2, 3 → 2³=8.
    e8 과 같은 골조이고 하한이 A-B 대신 A∩B 로 바뀐 것뿐이라 같은 ★3.
    변환 없이는 64개 부분집합을 검사해야 한다.
  tier: star_3
  mechanism_primary: "X⊂A 이고 (A∩B)⊂X → 자유 원소 3개 → 2³=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/147-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 원소 수와 겹치는 원소 수를 바꾼다. 답은 2^(n(A)-n(A∩B)). 제약: ① A∩B 가 공집합이 아니어야 하한이 의미를 갖고 ② B 에 A 밖의 원소를 남겨 두어야 A∩B 를 실제로 계산하게 된다 ③ 지수는 4 이하로."
    creative: "(1) 하한을 A-B 로 바꾸기(★3 유지) (2) 상한을 A∪B 로 키우면 자유 원소가 늘어 ★3 (3) 개수를 주고 B 를 되묻는 역방향(★4 · I-BW d2) (4) X 의 원소의 합의 최댓값처럼 다른 값을 묻기(★3)."
```

```yaml
- id: GN-CM2-147-356
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U 가 15 이하의 소수이고 A={2,7}, B={3,13} 일 때 A-X=∅, B-X=B 를
    만족시키는 U 의 부분집합 X 의 개수.
  category: "차집합 등식 → A⊂X 이고 X⊂B^c → 부분집합 개수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A-X=∅ 을 A⊂X 로, B-X=B 를 B∩X=∅ 즉 X⊂B^c 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산과 부분집합의 개수(차집합 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    U={2,3,5,7,11,13} 이고 두 조건은 「A 는 반드시 넣고 B 는 절대 넣지
    않는다」로 정리된다. 남는 자유 원소는 5, 11 둘 → 2²=4. 차집합 등식
    두 개가 서로 반대 방향(포함·배제)이라는 점이 함정이라 Mₜ=2.
    EQV d2 → 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "A-X=∅ → A⊂X · B-X=B → B∩X=∅ → 자유 원소 2개 → 2²=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/147-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 기준(15 이하의 소수 → 20 이하의 소수 · 24의 양의 약수)과 A, B 의 원소를 바꾼다. 답은 2^(n(U)-n(A)-n(B)). 제약: ① A 와 B 는 서로소여야 모순이 없다 ② A∪B 가 U 전체를 덮으면 답이 1 이 되어 시시해진다 ③ 자유 원소는 2~4개."
    creative: "(1) 조건을 A∪X=X, B∩X=∅ 로 표기만 바꾸기(★3 유지 · 148-363 골조) (2) 「X 가 공집합이 아니다」를 붙이기(★3) (3) X 의 원소의 합이 짝수인 경우로 제한하면 사후 필터가 붙어 I-VF d2 · ★4 (4) 개수를 주고 U 의 기준을 되묻기(★4 · I-BW d2)."
```

```yaml
- id: GN-CM2-147-357
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    U={1,3,5,7,9,11,13} 의 두 부분집합 A={1,5,9,13}, B={7,9,11} 에
    대하여 (A∪X)⊂(B∪X) 를 만족시키는 U 의 부분집합 X 의 개수.
  category: "합집합 포함 조건 → (A-B)⊂X → 부분집합 개수"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(A∪X)⊂(B∪X) 를 「A 의 원소 중 B 에 없는 것은 X 에 있어야 한다」 즉 (A-B)⊂X 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합집합의 포함 관계를 만족시키는 부분집합의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 X 를 양변에 모두 포함해 겉보기에 손댈 곳이 없어 보인다. A 의
    원소만 따져 보면 B∪X 에 들어가려면 B 에 없는 1, 5, 13 이 X 안이어야
    한다는 결론이 나온다. A-B={1,5,13} 이 하한이고 상한은 U 이므로
    2^(7-3)=16. 조건을 다루기 좋은 꼴로 바꾸는 EQV d2 → ★3.
  tier: star_3
  mechanism_primary: "(A∪X)⊂(B∪X) → (A-B)⊂X⊂U → 2^(7-3)=16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/147-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 원소 수와 A-B 의 원소 수를 바꾼다. 답은 2^(n(U)-n(A-B)). 제약: ① A⊄B 여야 조건이 비지 않는다 ② A∩B 를 비우지 않아야 「B 에 없는 것만」이라는 단서가 살아난다 ③ 지수는 4~5 이하."
    creative: "(1) 조건을 (A∩X)⊂(B∩X) 로 바꾸면 방향이 뒤집혀 다른 하한이 나옴(★4) (2) 상한을 A∪B 로 좁히기(★3 유지) (3) X 가 A 와 서로소라는 단서를 더하면 두 조건이 충돌해 개수가 0 이 되는 함정 문항(★4 · I-VF d2) (4) 개수 16 을 주고 U 의 크기를 되묻기(★4 · I-BW d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-148-358
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={x | -2≤x≤3}, B={x | x≤a} 가 서로소일 때 정수 a 의 최댓값.
  category: "구간을 수직선에 → 겹치지 않을 조건 → 경계 처리 → 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 집합을 수직선 위의 구간으로 옮겨야 서로소 조건이 부등식 a<-2 로 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직선 위의 두 집합이 서로소일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=-2 면 -2 가 두 집합에 모두 들어가므로 서로소가 아니다. 따라서
    a<-2 이고 정수 최댓값은 -3. 부등식의 등호 포함 여부(T-경계)와
    「정수」 제한(T-범위)이 겹쳐 Mₜ=2. 수직선 표현 전환 RT d1 ·
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "수직선에 두 구간 배치 → 겹치지 않으려면 a<-2 → 정수 최댓값 -3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/148-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 구간 양 끝(-2, 3)과 B 의 부등호 방향·등호 포함을 바꾼다. 제약: ① B 의 부등호에 등호가 있으면 a<-2, 없으면 a≤-2 로 답이 한 칸 달라지므로 반드시 확인한다 ② A 의 왼쪽 끝을 정수로 두어야 최댓값이 깔끔하다 ③ B 가 오른쪽으로 열린 구간이면 A 의 오른쪽 끝을 쓰게 된다."
    creative: "(1) A⊂B 조건으로 바꾸면 포함 조건이 되어 ★3 (2) A∩B≠∅ 인 a 의 범위를 묻기(★2 유지) (3) B 를 양쪽이 막힌 구간으로 바꾸면 두 부등식 연립이 되어 ★3 (4) 「정수 a 의 개수」를 묻는 형태로 바꾸면 양끝 경계 판정이 두 번 필요해져 ★3 · I-VF d1."
```

```yaml
- id: GN-CM2-148-359
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    A={1,2,3,4} 이고 집합 B 가 B-A={5,6} 을 만족시킨다. B 의 모든
    원소의 합이 12 일 때 A-B 의 모든 원소의 합.
  category: "B 를 B-A 와 A∩B 로 분해 → 합 조건으로 A∩B 역추적 → A-B"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B 의 원소의 합이라는 결과 조건에서 A∩B 의 원소를 역추적(12-11=1 → A∩B={1})"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "차집합과 원소의 합 조건으로 집합 복원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B 는 B-A={5,6} 와 A∩B 로 쪼개진다. 합 12 에서 5+6 을 빼면 A∩B 의
    합이 1 이고, A 의 원소 중 합이 1 인 부분집합은 {1} 뿐이라는 역추적이
    핵심이다. 그 뒤 A-B 는 나머지 {2,3,4}. 결과 조건에서 원인을 되짚는
    BW d2 · 교육청 기출 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "B=(B-A)∪(A∩B) → A∩B 의 합=12-11=1 → A∩B={1} → A-B={2,3,4} 의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/148-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 원소, B-A 의 원소, B 의 원소의 합을 바꾼다. 제약: ① 합에서 B-A 부분을 뺀 나머지가 A 의 부분집합 중 정확히 하나로만 만들어져야 답이 단일하다 ② A={1,2,4,8} 처럼 합이 유일 분해되는 배치를 쓰면 안전하다 ③ 나머지 합이 0 이면 A∩B 가 공집합이 되어 문항이 싱거워진다."
    creative: "(1) A-B 대신 n(A∩B) 나 집합 B 자체를 묻기(★3 유지) (2) 합 대신 곱을 주면 소인수 분해가 필요해 ★4 (3) 합이 되는 방법이 두 가지가 되게 설계하고 추가 단서로 하나를 기각시키면 I-VF d2 · ★4 (4) A 를 조건제시법으로 감추면 Mₐ 가 올라 ★3~4."
```

```yaml
- id: GN-CM2-148-360
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 원 A, B, C 가 그려진 벤다이어그램에서 색칠한 부분(A 와 B 가
    겹치는 부분 및 A 와 C 가 겹치는 부분)을 나타내는 식을 고른다.
  category: "색칠 영역 → 집합식으로 번역 → 선택지 대조"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 색칠 영역을 「A 안이면서 B 또는 C 안」이라는 집합식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램의 색칠한 부분을 나타내는 집합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    색칠된 곳은 모두 A 안에 있고, A 단독 영역은 비어 있으며 B 와 C 각각
    과 겹치는 부분(가운데 삼중 영역 포함)이 칠해져 있다. 「A 안이면서
    B 또는 C 안」 = A∩(B∪C). 그림에서 식으로 옮기는 표현 전환이 전부라
    RT d1 · STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "색칠 영역이 모두 A 안 → B 또는 C 와 겹치는 부분 → A∩(B∪C)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-148-360.png"
  latex: latex-bank/gn-cm2/items/148-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 대신 색칠 영역을 옮긴다(A 단독만 · 삼중 교집합 제외 · A^c 쪽). 제약: ① 그림의 원 배치와 라벨 A, B, C 의 위치는 고정하고 색칠만 바꾼다 ② 삼중 교집합을 포함하는지 여부가 답을 가르므로 크롭 이미지와 정답이 반드시 일치해야 한다 ③ 오답 선택지는 A 와 A^c 를 바꾼 형태를 하나 둔다."
    creative: "(1) 식을 주고 색칠하게 하는 역방향(★2 유지) (2) 삼중 교집합을 빼서 (A∩B)∪(A∩C)-(A∩B∩C) 가 되게 하면 ★3 (3) 색칠 영역을 두 가지 식으로 쓰게 해 분배법칙을 확인시키기(★3 · I-EQV d2) (4) 원소 개수를 넣어 n(색칠 영역) 을 묻는 형태로 바꾸면 ★3."
```

```yaml
- id: GN-CM2-148-361
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={-2,2a-3,a+1}, B={3,2-a²} 에 대하여 B-A=∅ 일 때 상수 a 의 값.
  category: "B-A=∅ → B⊂A → 원소 대응 경우 나누기 → 재대입 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B-A=∅ 을 B⊂A 로 옮겨 B 의 두 원소가 모두 A 에 들어간다는 조건으로 바꿈"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3∈A 에서 나온 a=3, a=2 를 2-a² 가 A 에 들어가는지로 검증해 하나를 기각"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "차집합 조건을 만족시키는 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B-A=∅ 은 B⊂A 와 같다. 3 이 A 의 어느 원소와 같은지로 a 후보가 둘
    나오고, 나머지 원소 2-a² 까지 A 안에 있는지 확인해야 하나가 남는다.
    동치 변환 + 사후 기각 통찰 2개 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "B-A=∅ → B⊂A → 3=2a-3 또는 3=a+1 → 2-a²∈A 확인 → a 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/148-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B 의 상수 원소(3), 이차식 2-a², A 의 두 일차식 계수를 바꾼다. 제약: ① 두 일차식의 계수를 다르게 해야 후보가 둘 생긴다 ② 기각되는 후보에서 이차식 값이 A 밖으로 확실히 벗어나야 한다 ③ 살아남는 a 에서 A 의 세 원소가 서로 달라야 집합이 성립한다."
    creative: "(1) A-B=∅ 로 방향을 바꾸면 포함 방향이 반대가 되어 조건이 더 빡빡해짐(★3~4) (2) A∩B=B 로 표기만 바꾸기(★3 유지) (3) a 가 둘 다 살아남게 설계해 모든 a 의 합을 묻기(★4 · I-MI d2) (4) B 의 원소를 셋으로 늘리면 대응 경우가 늘어 ★4."
```

```yaml
- id: GN-CM2-148-362
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    U 의 두 부분집합 A, B 에 대하여 B-(A∩B)=∅ 일 때 항상 성립한다고
    할 수 없는 것을 고른다(B⊂A, A∩B=B, A∪B=A, A-B=∅, A∪B^c=U).
  category: "B-(A∩B)=∅ → B⊂A 로 환원 → 선택지 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B-(A∩B)=∅ 이라는 낯선 조건을 B⊂A 라는 표준 포함관계로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산의 성질과 포함 관계(반례 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 에서 A∩B 를 뺀 것이 공집합이라는 말은 B 의 모든 원소가 A 에도
    있다는 뜻, 즉 B⊂A 다. 그러면 ①②③⑤ 는 참이고 ④ A-B=∅ 만 방향이
    반대라 거짓이다. B⊂A 와 A⊂B 를 혼동하는 것이 유일한 함정(Mₜ=2).
    EQV d2 지만 146-e7 의 반복 확인 성격이라 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "B-(A∩B)=∅ → B⊂A → 네 선택지 참, A-B=∅ 만 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/148-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 없다. 전제를 A-(A∩B)=∅ 나 (A∪B)-B=∅ 처럼 같은 뜻의 다른 표기로 교체한다. 제약: ① 전제는 한 번의 환원으로 포함관계가 되어야 한다 ② 거짓 선택지는 포함 방향을 뒤집은 것으로 둔다 ③ A≠B 단서를 넣으면 ⑤ 의 판정이 달라질 수 있으니 확인한다."
    creative: "(1) 「항상 성립하는 것」으로 뒤집기(★2 유지) (2) 전제를 A∪B^c=U 로 주고 나머지를 판정하게 하면 환원이 한 단계 늘어 ★3 (3) 반례를 직접 들게 하기(★3 · I-MI d1) (4) 보기를 ㄱㄴㄷㄹ 로 늘려 모두 고르기(★3)."
```

```yaml
- id: GN-CM2-148-363
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    U 가 50 이하의 자연수이고 A 는 6의 배수, B 는 4의 배수일 때
    A∪X=A 이고 B∩X=∅ 인 집합 X 의 개수.
  category: "연산 등식 → X⊂A-B → 배수·공배수 개수 세기 → 2^k"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A∪X=A 를 X⊂A 로, B∩X=∅ 를 X⊂B^c 로 옮겨 두 조건을 X⊂A-B 하나로 합침"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산과 부분집합의 개수(배수 집합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 연산 조건을 포함관계로 바꾸면 X 는 A-B 의 부분집합이 된다. A 는
    6의 배수 8개, A∩B 는 12의 배수 4개이므로 A-B 의 원소는 4개 →
    2⁴=16. 6과 4 의 공배수가 12 라는 점(최소공배수)을 놓치면 개수가
    틀어진다. EQV d2 · 교육청 기출 → 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "X⊂A 이고 X∩B=∅ → X⊂A-B → n(A)=8, n(A∩B)=4 → 2⁴=16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/148-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(50)과 두 배수 기준(6, 4)을 바꾼다. 제약: ① 두 기준의 최소공배수로 A∩B 의 개수를 세야 하므로 서로소가 아닌 쌍(6과 4, 6과 9)을 써야 함정이 살아난다 ② n(A-B) 가 3~5 가 되게 상한을 고르면 답이 8~32 로 떨어진다 ③ 상한을 최소공배수의 배수로 잡으면 개수 계산이 깔끔하다."
    creative: "(1) 답을 개수 대신 X 의 원소의 합의 최댓값으로 묻기(★3 유지) (2) B∩X=∅ 를 B⊂X 로 뒤집으면 조건이 충돌해 개수가 0 이 되는 함정(★4 · I-VF d2) (3) 세 배수 집합으로 늘리면 포함배제가 필요해 ★4 (4) 개수 16 을 주고 U 의 상한을 되묻기(★4 · I-BW d2)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-149-364
  page: 149
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={x | x³-3x²+2x=0}, B={x | x²+x+a=0} 에 대하여 A-B={0,1} 일 때
    집합 B-A 를 구한다(a 는 상수).
  category: "삼차방정식 해 → A-B 로 공통 원소 역추적 → a 결정 → B 확정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A-B={0,1} 이라는 결과에서 「A 의 나머지 원소 2 만 B 에 속한다」를 역추적해 a 를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "방정식의 해집합과 차집합 조건으로 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x(x-1)(x-2)=0 에서 A={0,1,2} 다. A-B 에 2 가 없다는 것은 2 가 B 의
    원소라는 뜻이므로 2 를 B 의 이차식에 넣어 a 를 얻고, 그 이차식을
    다시 풀어 나머지 근을 구한다. 결과 조건에서 원인을 되짚는 BW d2 ·
    STEP 2 출발점 ★3 유지(각 계산은 표준).
  tier: star_3
  mechanism_primary: "A={0,1,2} → 2∈B 로 a 결정 → 이차식의 나머지 근 → B-A"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\{-3\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 근(0, 1, 2), 이차식의 일차항 계수를 바꾼다. 제약: ① 삼차식은 정수근 세 개로 인수분해돼야 한다 ② A 중 정확히 하나만 B 에 들어가야 a 가 단일하게 결정된다 ③ 이차식의 나머지 근이 A 밖의 정수로 떨어지게 계수를 맞춘다 ④ 판별식이 양수인지 확인한다."
    creative: "(1) B-A 대신 A∩B 나 a 값을 묻기(★3 유지) (2) A-B={0} 처럼 공통 원소가 둘이 되게 하면 이차식의 두 근이 모두 결정돼 연립이 되어 ★4 (3) 이차식을 계수 미지수 두 개로 두면 ★4 (4) 전체집합을 유리수로 제한해 무리근을 기각시키면 I-VF d2 · ★4."
```

```yaml
- id: GN-CM2-149-365
  page: 149
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={2,9,a+2}, B={a³-2a,a+7} 에 대하여 (A-B)∪(B-A)={2,9,b} 일 때
    a+b 의 값(a, b 는 상수).
  category: "대칭차의 원소 수 → 공통 원소 개수 결정 → 삼차식 풀이 → 재대입 기각"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭차의 원소가 3개라는 사실을 n(A)+n(B)-2n(A∩B)=3 으로 읽어 공통 원소가 하나임을 확정"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차방정식의 두 근을 되돌려 넣어 공통 원소가 실제로 하나가 되는 a 만 남김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭차 조건을 만족시키는 미지수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    대칭차에 2 와 9 가 그대로 남았으므로 겹치는 원소는 a+2 쪽이고, a+2 가
    B 의 원소와 같아야 한다. a+2=a³-2a 를 풀면 (a+1)²(a-2)=0 이라 후보가
    둘인데, 한쪽은 공통 원소가 둘이 되어 대칭차 크기가 맞지 않아 기각된다.
    삼차 인수분해 + 원소 수 논증 + 기각으로 M_total 10 · 통찰 2개 →
    STEP 2 출발점 ★3 에서 +1 → ★4.
    [분류 이슈] 벤더 STEP 2 신호는 ★3 — 인수분해·기각 부담으로 ★4 라벨을 붙이고 기록만 함.
  tier: star_4
  mechanism_primary: "대칭차 원소 3개 → 공통 원소 1개 → a+2=a³-2a → 후보 중 기각 → b 결정 → a+b"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 상수 원소(2, 9), 삼차식 a³-2a, 일차식 a+2·a+7 의 계수를 바꾼다. 제약: ① 삼차방정식이 정수근으로 인수분해돼야 한다 ② 후보 중 하나는 반드시 집합의 원소 중복(원소 수 감소)이나 대칭차 크기 불일치로 기각돼야 한다 ③ 살아남는 a 에서 b 가 정수로 떨어지게 한다."
    creative: "(1) 대칭차를 (A∪B)-(A∩B) 표기로 바꾸기(★4 유지) (2) 대칭차의 원소 수만 주고 가능한 a 를 모두 구하게 하면 I-MI d2 추가 · ★5 후보 (3) 삼차식을 이차식으로 낮추면 계산이 가벼워져 ★3 (4) A∩B 를 직접 주면 기각 단계가 사라져 ★3."
```

```yaml
- id: GN-CM2-149-366
  page: 149
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    U 가 24의 양의 약수, A 는 6의 약수, B={2,4,6,8} 일 때
    (A-B)∩C={3}, B∩C=B 를 만족시키는 U 의 부분집합 C 의 개수.
  category: "두 연산 조건 → 반드시 넣을 원소·절대 못 넣을 원소 분류 → 2^k"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(A-B)∩C={3} 과 B∩C=B 를 「3 과 B 의 원소는 넣고 1 은 빼라」는 원소별 포함·배제 규칙으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 연산 조건을 만족시키는 부분집합의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    U={1,2,3,4,6,8,12,24}, A={1,2,3,6} 이므로 A-B={1,3} 이다. 교집합이
    {3} 이라는 말은 3 은 C 에 넣고 1 은 넣지 말라는 뜻이고, B∩C=B 는
    B⊂C 를 뜻한다. 확정된 원소를 빼면 자유 원소는 12, 24 둘 → 2²=4.
    「=∅ 이 아니라 ={3}」이라 포함과 배제가 동시에 나오는 것이 함정.
    EQV d2 · STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "A-B={1,3} → 3∈C, 1∉C · B⊂C → 자유 원소 {12,24} → 2²=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 기준(24의 약수 → 36의 약수), A 의 기준(6의 약수 → 12의 약수), B 의 원소를 바꾼다. 제약: ① B⊂U 여야 하고 ② A-B 에 원소가 둘 이상 있어야 포함·배제가 동시에 생긴다 ③ 자유 원소는 2~4개로 남긴다 ④ 교집합으로 지정한 원소가 실제로 A-B 안에 있어야 모순이 없다."
    creative: "(1) (A-B)∩C=∅ 로 바꾸면 배제만 남아 ★2~3 (2) C 의 원소의 합의 최솟값을 묻기(★3 유지) (3) 조건을 하나 더 얹어 자유 원소가 0 이 되게 하면 개수가 1 인 함정 문항(★4) (4) C 가 공집합이 아니라는 단서와 개수 조건을 같이 주고 U 를 되묻기(★4 · I-BW d2)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-149-367
  page: 149
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={-2,3}, B={x | ax+2=2x} 에 대하여 A∩B=B 를 만족시키는 모든
    실수 a 의 값의 곱.
  category: "A∩B=B → B⊂A → 일차방정식 해의 개수 분기(해 없음 포함) → a 수집"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(a-2)x=-2 에서 a=2 이면 해가 없어 B=∅ 이 되고 이것도 B⊂A 를 만족한다는 갈래를 따로 따져야 함"
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A∩B=B 를 B⊂A 로 옮겨 B 의 원소가 -2 또는 3 이어야 한다는 조건으로 바꿈"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "일차방정식의 해집합과 포함 관계(공집합 경우 포함)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    방정식을 (a-2)x=-2 로 정리하면 a=2 일 때 해가 없어 B=∅ 이고,
    공집합은 모든 집합의 부분집합이므로 이 a 도 답에 포함된다. 나머지는
    해가 -2 또는 3 이 되게 하는 a 둘이다. 공집합 갈래를 빠뜨리면 답이
    달라지는 것이 이 문항의 전부라 MI d2 · 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "A∩B=B → B⊂A → (a-2)x=-2 에서 B=∅ 갈래와 해가 -2·3 인 갈래 → a 세 값의 곱"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 두 원소(-2, 3)와 방정식의 상수항·계수를 바꾼다. 제약: ① 방정식은 x 의 계수가 a 를 포함하는 일차식이어야 공집합 갈래가 생긴다 ② 각 원소에 대응하는 a 가 정수나 간단한 유리수로 떨어지게 한다 ③ 세 a 값이 서로 달라야 곱이 의미를 갖는다 ④ 곱이 정수가 되도록 A 의 원소를 고른다."
    creative: "(1) 모든 a 의 합을 묻기(★4 유지) (2) A 의 원소를 셋으로 늘리기(★4) (3) 방정식을 이차식으로 바꾸면 판별식 분기가 더해져 ★5 후보(I-MI d2 + I-VF d2) (4) 「B≠∅」 단서를 붙이면 공집합 갈래가 사라져 ★3 으로 내려간다."
```

```yaml
- id: GN-CM2-149-368
  page: 149
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    U 가 11 이하의 소수이고 S(X) 를 X 의 모든 원소의 합이라 할 때,
    공집합이 아닌 A 와 B 가 ㈎ A-B=∅ ㈏ S(B)-S(A)=10
    ㈐ S(B)<S(B^c) 를 만족시킨다. 집합 B 를 구한다.
  category: "합의 부등식으로 S(B) 범위 확정 → 후보 열거 → A⊂B 로 기각"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S(B^c)=S(U)-S(B) 로 바꿔 조건 ㈐ 를 S(B)<14 라는 수의 범위로 환원"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A≠∅ 과 ㈏ 로 S(B) 의 하한을 잡아 가능한 S(B) 값마다 B 후보를 모두 열거"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 후보를 A⊂B 와 S(A)=S(B)-10 에 되돌려 넣어 A 가 실제로 존재하지 않는 후보를 기각"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "원소의 합 조건을 만족시키는 부분집합 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    U={2,3,5,7,11} 이라 S(U)=28 이고 ㈐ 는 S(B)<14 가 된다. A≠∅ 이므로
    S(A)≥2 이고 ㈏ 에서 S(B)≥12 라 S(B) 는 12 또는 13 뿐이다. 각 값마다
    합이 그렇게 되는 B 를 모두 적은 뒤, A⊂B 이면서 S(A)=S(B)-10 인 A 가
    실제로 존재하는지 확인하면 하나만 살아남는다. 범위 환원·후보 열거·
    사후 기각 통찰 3개.
    [분류 이슈] v3.8 산식(통찰 3개 + I-VF 보유)으로는 ★5 게이트를 통과하나 각 단계가 표준 열거라 ★4 라벨 — 기록만 함.
  tier: star_4
  mechanism_primary: "S(B^c)=28-S(B) → S(B)<14 · A≠∅ → S(B)∈{12,13} → B 후보 열거 → A⊂B 로 기각"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\{2,\,3,\,7\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 기준(11 이하의 소수 → 13 이하의 소수 · 10 이하의 자연수)과 차 10 을 바꾼다. 제약: ① S(U) 가 홀수면 S(B)<S(B^c) 의 경계가 반정수가 되니 짝수로 두는 편이 깔끔하다 ② S(B) 후보가 2~3개로 좁혀지도록 차 값을 고른다 ③ 최종적으로 살아남는 B 가 정확히 하나여야 한다 ④ A≠∅ 단서를 빼면 답이 늘어난다."
    creative: "(1) 집합 A 를 묻기(★4 유지) (2) ㈐ 를 S(B)>S(B^c) 로 뒤집으면 후보 범위가 반대로 이동해 ★4 (3) 조건 ㈏ 의 차를 미지수로 두고 가능한 값을 모두 구하게 하면 ★5 후보 (4) 「A 와 B 의 순서쌍의 개수」를 묻으면 열거 부담이 커져 ★5 후보."
```

```yaml
- id: GN-CM2-149-369
  page: 149
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    U 가 5 이하의 자연수이고 A={1,2}, B={2,3,4} 일 때
    X∩A≠∅, X∩B≠∅ 을 만족시키는 U 의 부분집합 X 의 개수.
  category: "두 부정 조건 → 여사건과 포함배제 → 전체에서 빼기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조건을 동시에 만족하는 X 를 직접 세는 갈래 대신 여사건·포함배제로 전체에서 빼는 갈래를 선택"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "X∩A≠∅ 의 부정을 X⊂A^c 로 옮겨 여사건의 개수를 2^k 로 셈"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "교집합이 공집합이 아닐 조건을 만족시키는 부분집합의 개수(여사건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직접 세면 경우가 뒤엉키지만 여사건으로 가면 전체 2⁵ 에서 X∩A=∅
    인 경우와 X∩B=∅ 인 경우를 빼고 둘 다 ∅ 인 경우를 다시 더하면
    된다. A∩B={2} 때문에 두 여사건이 겹쳐 포함배제가 필요한 것이
    핵심이다. 전략 선택 SC d2 + 여사건 환원 EQV d1 · 교육청 기출 ·
    실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "전체 2⁵ - (X⊂A^c) - (X⊂B^c) + (X⊂(A∪B)^c) = 32-8-4+2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$22$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/149-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "U 의 상한(5 → 6, 7)과 A, B 의 원소·겹침을 바꾼다. 제약: ① A∩B 가 비어 있지 않아야 포함배제 항이 살아난다 ② A∪B 가 U 를 덮으면 마지막 항이 1 이 되어 단조로워진다 ③ 지수가 5~7 을 넘으면 검산이 어렵다 ④ 세 여사건 항의 지수를 미리 계산해 답이 정수로 맞는지 확인한다."
    creative: "(1) 조건을 하나만 두면 여사건 한 번으로 끝나 ★3 (2) 세 집합 A, B, C 로 늘리면 포함배제 항이 넷이 되어 ★5 후보 (3) X∩A≠∅ 대신 n(X∩A)=1 로 바꾸면 직접 세기가 유리해져 전략 분기가 뒤집힘(★4 유지) (4) X 가 공집합이 아니라는 단서를 추가하면 여사건 계산에 보정이 붙어 ★4."
```

## 표본 판정 요약 (42문)

- ★ 분포: ★1 5 · ★2 20 · ★3 13 · ★4 4 · ★5 0
- 통찰형 28 · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 17 · I-VF 6 · I-RT 6 · I-BW 2 · I-MI 3 · I-SC 1 (총 35 라벨 · depth 3 없음)
- type_hint 상위: 「연산식을 포함관계로 바꾼 부분집합의 개수」 8 · 「집합의 연산의 성질·항상 옳은 것 판정」 7 · 「연산 조건을 만족시키는 미지수 구하기」 6 · 「여집합·차집합 구하기」 5 · 「벤다이어그램으로 집합 복원·영역 읽기」 4
- 구역별: 개념원리 익히기 5(★1 4 · ★2 1) · 필수·발전 예제 25(★1 1 · ★2 15 · ★3 9) · STEP 1 6(★2 3 · ★3 3) · STEP 2 3(★3 2 · ★4 1) · 실력 UP 3(★4 3)
- 그림: 1문(`crop:fig-148-360.png` — 세 원 벤다이어그램의 색칠 영역)
- 대상층: 하위권 5 · 중하위권 9 · 중위권 11 · 중상위권 13 · 상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-146-353 | 확인체크(출발 ★2)이나 여집합 포함 뒤집기(EQV d2) + ④ 반례 탐색이 겹침. 라벨은 ★2 로 두고 기록 | ★2 / ★3 |
| GN-CM2-149-365 | 벤더 STEP 2 신호는 ★3 인데 삼차 인수분해 + 대칭차 원소 수 논증 + 후보 기각으로 M_total 10. ★4 라벨 | ★3 / ★4 |
| GN-CM2-149-368 | v3.8 산식으로는 통찰 3개 + I-VF 보유라 ★5 게이트를 통과하지만 각 단계가 표준 열거라 ★4 라벨 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「연산식을 포함관계로 바꾼 부분집합의 개수」(A∩X=X, A∪X=X, A-X=∅, B-X=B, (A∪X)⊂(B∪X) 계열 8문). 이 단원에서 가장 자주 나오고 ★3 의 하한을 결정하는 핵심 유형이다. ② 「연산 조건을 만족시키는 미지수 구하기」(6문) — 후보 기각(I-VF)이 항상 붙어 ★2~4 로 넓게 퍼지므로 base ★ 를 2 로 두고 기각 단계 수로 올리는 설계가 맞다. ③ 「벤다이어그램으로 집합 복원」(3문)과 「벤다이어그램 색칠 영역 읽기」(1문)는 정보 방향이 반대(식→그림 / 그림→식)이므로 별도 유형으로 둔다.
- **통합해도 될 유형** — 「합집합 구하기」·「교집합 구하기」·「혼합 연산」(4문)은 모두 정의 확인 ★1~2 라 「집합의 연산 기본 계산」 하나로 묶어도 된다. 「집합의 연산의 성질 판정」(7문)은 선택지형·보기형·전제 있음/없음으로 갈려 보이지만 골조가 전부 「식을 정규형으로 환원 후 비교」라 하나로 묶고 전제 유무를 난이도 파라미터로 두는 편이 낫다.
- **★5 부재** — 이 범위에는 ★5 가 없다. I-SC 는 149-369 한 문항, I-XU·I-SYM·I-PD 는 0 이다. 16단원에서 ★5 슬롯을 만들려면 부분집합 개수 세기에 포함배제·경우 분기를 겹치거나(149-369 확장) 합·곱 조건과 결합(149-368 확장)해야 한다.
