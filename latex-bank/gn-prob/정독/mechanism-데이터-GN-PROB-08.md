---
name: mechanism-데이터-GN-PROB-08
description: 개념원리 확률과 통계 08 확률의 덧셈정리(1/1 · 75~83쪽 · 38문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 08 확률의 덧셈정리
  unit_code: GN-PROB-08
  part: "1/1"
  extract_range: "75~83쪽 · 75-154~83-185"
  total_problems: 38
  unit_total: 38
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·tag·level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 확률과 통계 · 08 확률의 덧셈정리 (1/1) 정독 데이터 (v1.0)

75~83쪽 38문항 전수. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 23문(필수 예제 6 + 확인체크 유제 17) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다. 벤더 난이도 신호는 구역 · tag(필수 · 확인체크 · 평가원 기출) · level(STEP 1 · STEP 2 · 실력 UP) 세 가지이고, 이 범위에 그림 문항은 없다.

★ 출발점 관례(이 파일에서 일관 적용): 개념원리 익히기 ★1 · 필수 예제 ★2 · 확인체크 유제는 바로 앞 필수 예제와 같은 층(★2)에서 출발하되 **공식 직접 대입 한 단계이고 통찰 0 · M_total ≤ 5 이면 −1(★1)** · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 여기서 +1 은 **통찰의 effective_depth 합이 3 이상이거나 depth 3 통찰이 있을 때, 또는 M_total ≥ 8 일 때**만 적용했다. 이 단원의 여사건·드모르간·배반 분해는 교재가 직접 가르치는 표준 절차라 **단순 대입은 통찰로 세지 않았고**, 「적어도·아닌·이상」 같은 신호가 없는데도 학생이 스스로 여사건으로 갈아타야 하는 경우(I-SC)나 조건을 다른 언어로 옮겨야 하는 경우(I-EQV·I-RT)만 통찰로 잡았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-75-154
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 사건 A, B 의 확률이 주어질 때 ⑴ P(A), P(B), P(A∩B) 로 P(A∪B) 구하기 ⑵ P(A), P(B), P(A∪B) 로 P(A∩B) 구하기.
  category: "확률의 덧셈정리 → 정방향·역방향 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 직접 대입·역산(추상 사건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(A∪B)=P(A)+P(B)−P(A∩B) 한 식을 두 방향으로 쓰는 개념 확인. 변형·판단 단계가 없고 수치도 가볍다.
    개념원리 익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "덧셈정리 한 식 → ⑴ 미지항 P(A∪B) ⑵ 미지항 P(A∩B) 로 이항"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5}{6}$ ⑵ $0.1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/75-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률 중 둘을 주고 하나를 묻는 조합은 그대로 두고 값만 교체. 제약: 0 ≤ P(A∩B) ≤ min(P(A),P(B)) 이고 P(A∪B) ≤ 1 이어야 하며, ⑵ 처럼 소수로 주면 답도 소수로 떨어지게."
    creative: "(1) P(A∪B)=1 을 주고 배반 여부를 묻기(★1 유지) (2) P(A∩B) 대신 P(A^c∩B^c) 를 주어 드모르간 한 단계를 끼우기(★2 · I-EQV d1) (3) P(A), P(B) 만 주고 P(A∪B) 의 최댓값·최솟값을 묻기(★2~3 · 범위 통찰 추가)."
```

```yaml
- id: GN-PROB-75-155
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    주사위 한 개에서 A=짝수의 눈, B=4의 약수의 눈일 때 ⑴~⑷ P(A), P(B), P(A∩B), P(A∪B) 를 차례로 구하기.
  category: "표본공간 원소 나열 → 각 사건의 확률 → 덧셈정리 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본공간의 원소를 세어 구하는 사건의 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표본공간 6개 원소에서 A={2,4,6}, B={1,2,4} 를 직접 써 보고 교집합·합집합을 세는 문항.
    덧셈정리가 원소 세기와 일치함을 눈으로 확인시키는 도입. 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A·B 의 원소 나열 → 각 확률 → A∩B, A∪B 원소로 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{1}{2}$ ⑶ $\dfrac{1}{3}$ ⑷ $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/75-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 사건의 조건(3의 배수·소수·6의 약수 등)을 바꿔도 골조 동일. 제약: 두 사건이 배반이 되지 않도록 교집합이 비지 않게 고르고, 확률이 기약분수로 떨어지게."
    creative: "(1) 두 사건을 배반이 되게 골라 P(A∩B)=0 을 확인시키기(★1) (2) 주사위 두 개로 바꿔 표본공간 36개에서 세기(★2) (3) A∪B 를 먼저 주고 P(A∩B) 를 역으로 묻기(★2 · 역방향)."
```

```yaml
- id: GN-PROB-75-156
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ P(A) 가 주어질 때 여사건 확률 P(A^c) ⑵ P(A∩B) 가 주어질 때 P(A^c∪B^c) 구하기.
  category: "여사건의 확률 → 드모르간 법칙으로 옮기기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건·드모르간 법칙으로 확률 옮기기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 A^c∪B^c=(A∩B)^c 를 쓰면 1−P(A∩B) 한 줄. 드모르간 자체가 이 절의 학습 대상이라 표준 공식 대입으로 보고 통찰로 세지 않았다.
    개념원리 익히기 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A^c∪B^c=(A∩B)^c → 1−P(A∩B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5}{8}$ ⑵ $\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/75-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 값만 교체. 제약: P(A∩B) ≤ 1 이고 답이 기약분수가 되게."
    creative: "(1) P(A∪B) 를 주고 P(A^c∩B^c) 를 묻는 반대 방향(★1) (2) P(A^c) 와 P(B^c) 를 주고 배반일 때 P(A∪B) 를 묻기(★2) (3) 드모르간 두 식을 모두 써야 답이 나오도록 조건을 섞기(★2 · I-EQV d1)."
```

```yaml
- id: GN-PROB-75-157
  page: 75
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    1부터 30까지 적힌 공 30개에서 한 개를 꺼낼 때 ⑴ 6의 배수일 확률 ⑵ 6의 배수가 아닐 확률.
  category: "배수의 개수 세기 → 확률 → 여사건"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배수 조건의 확률과 여사건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    30 이하 6의 배수 5개 → 1/6, ⑵ 는 그 여사건 5/6. 배수 개수 세기와 여사건 정의를 한 번씩 쓰는 개념 확인.
    통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "30 이하 6의 배수 개수 5 → 5/30 → 여사건 1−1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{6}$ ⑵ $\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/75-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수(30·50·100)와 배수(4·6·7)를 바꿀 수 있음. 제약: 나눗셈 몫이 정수로 떨어져 답이 기약분수가 되도록 전체 개수를 배수의 배수로 두면 깔끔."
    creative: "(1) 6의 배수 또는 4의 배수로 바꿔 덧셈정리를 끼우기(★2) (2) 6의 배수도 4의 배수도 아닐 확률(★2 · 여사건+드모르간) (3) 전체 개수를 배수로 나누어떨어지지 않게 해 가우스 기호식 세기를 요구(★2 · T-경계)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-76-e8
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ P(A), P(B), P(A^c∩B^c) 가 주어질 때 P(A∩B) ⑵ A, B 가 배반이고 P(A^c), P(A∪B) 가 주어질 때 P(B^c) 구하기.
  category: "여사건·드모르간으로 조건 정리 → 덧셈정리 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건·드모르간 법칙으로 확률 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ P(A^c∩B^c)=P((A∪B)^c) 로 P(A∪B) 를 얻고 덧셈정리를 역으로 풀면 P(A∩B). ⑵ 배반이면 P(A∪B)=P(A)+P(B) 라는 정의를 쓰고 다시 여사건.
    각 단계가 모두 이 절이 가르치는 표준 공식이라 통찰 0. M_total 5 이지만 여사건·드모르간·배반 세 도구를 연결하므로 필수 예제 층 ★2 유지(−1 미적용).
  tier: star_2
  mechanism_primary: "P(A^c∩B^c)=1−P(A∪B) → 덧셈정리 역산 → P(A∩B) · 배반이면 P(A∪B)=P(A)+P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{4}$ ⑵ $\dfrac{2}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/76-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 12로 맞춘 분수 세트를 다른 공통분모(10·20)로 교체. 제약: P(A∩B) ≤ min(P(A),P(B)), ⑵ 에서는 배반이므로 P(A)+P(B) ≤ 1 을 반드시 지킬 것."
    creative: "(1) 주어진 조건과 묻는 값을 맞바꿔 P(A^c∩B^c) 를 묻기(★2) (2) 배반이라는 말을 빼고 P(A∩B) 를 추가로 주어 세 조건을 연립(★2) (3) 배반 조건을 A 와 B^c 가 배반으로 바꾸면 포함관계 해석이 필요해 ★3(82-179 골조)."
```

```yaml
- id: GN-PROB-76-158
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(A), P(B^c), P(A∪B) 가 주어질 때 P(A∩B) 를 구하기.
  category: "여사건으로 P(B) 복원 → 덧셈정리 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 직접 대입·역산(추상 사건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(B)=1−P(B^c) 한 줄 뒤 덧셈정리에 그대로 대입. 판단할 갈래가 없는 공식 두 번.
    확인체크 출발 ★2 이지만 통찰 0 · M_total 4 · 대입 한 단계라 −1 적용 → ★1.
  tier: star_1
  mechanism_primary: "P(B)=1−P(B^c) → P(A∩B)=P(A)+P(B)−P(A∪B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/76-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값을 같은 공통분모 위에서 교체. 제약: 계산 결과 P(A∩B) 가 0 이상이고 min(P(A),P(B)) 이하가 되게."
    creative: "(1) P(B^c) 대신 P(A^c) 를 주기(★1) (2) P(A∪B) 대신 P(A^c∩B^c) 를 주어 드모르간을 끼우기(★2) (3) 배반이라는 조건을 추가하고 모순을 찾게 하면 검증형 ★3."
```

```yaml
- id: GN-PROB-76-159
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(A^c∪B^c) 와 P(A∩B^c) 가 주어질 때 P(A^c) 를 구하기.
  category: "드모르간 → 사건 A 를 B·B^c 로 분할 → 여사건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 P(A) 를 P(A∩B)+P(A∩B^c) 로 분할해야 주어진 두 조건이 연결된다는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건·드모르간 법칙으로 확률 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    드모르간으로 P(A∩B)=1−P(A^c∪B^c) 를 얻은 뒤, A 를 B 와 B^c 로 쪼개 P(A)=P(A∩B)+P(A∩B^c) 로 묶어야 답이 나온다.
    분할이 공식으로 주어지지 않아 I-EQV d1 하나. 확인체크 출발 ★2 · depth 합 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "P(A∩B)=1−P(A^c∪B^c) → P(A)=P(A∩B)+P(A∩B^c) → P(A^c)=1−P(A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/76-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주어진 값을 분모 6·12 계열에서 교체. 제약: P(A∩B)+P(A∩B^c)=P(A) ≤ 1 이 되도록 두 값의 합을 통제."
    creative: "(1) 묻는 값을 P(B) 로 바꾸면 분할을 B 쪽으로 해야 해 같은 골조(★2) (2) P(A^c∩B) 를 추가로 주고 P(A∪B) 를 묻기(★2) (3) 벤 다이어그램 네 영역 중 두 개만 주고 나머지를 모두 채우게 하면 조건 통합 ★3(I-CON)."
```

```yaml
- id: GN-PROB-77-e9
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    1부터 50까지 적힌 카드 50장에서 한 장을 뽑을 때 적힌 수가 3의 배수이거나 4의 배수일 확률.
  category: "두 배수 사건 → 배반이 아니므로 12의 배수를 빼는 덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반이 아닌 두 사건의 합사건 확률(덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3의 배수 16개, 4의 배수 12개, 공통인 12의 배수 4개를 세어 (16+12−4)/50. 두 사건이 배반이 아님을 알아채는 것이 이 예제의 학습 목표이고 교재가 직접 지시하므로 통찰 0.
    필수 예제 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3의 배수 16 · 4의 배수 12 · 12의 배수 4 → (16+12−4)/50"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{12}{25}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/77-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 범위(50·100·120)와 두 배수(3·4 → 4·6, 5·6 등)를 교체. 제약: 두 수가 서로소가 아니면 교집합은 최소공배수의 배수이므로 최소공배수를 먼저 확인하고, 답이 기약분수로 떨어지게 전체 범위를 잡을 것."
    creative: "(1) 같은 조건에서 3의 배수도 4의 배수도 아닐 확률(★2 · 여사건, 79-e11 골조) (2) 배수를 셋으로 늘려 포함배제 3항(★3) (3) 전체 범위를 미지수 n 으로 두고 확률이 주어진 값이 되는 n 을 묻기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-77-160
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    버스 이용 40%, 지하철 이용 25%, 둘 다 이용 15% 일 때 임의의 한 명이 버스 또는 지하철을 이용할 확률.
  category: "비율 자료 → 덧셈정리 직접 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 직접 대입·역산(추상 사건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 세 비율을 그대로 0.4+0.25−0.15 에 넣는 한 줄. 자료를 사건으로 옮기는 부담도 거의 없다.
    확인체크 출발 ★2 이지만 통찰 0 · M_total 4 · 대입 한 단계 → −1 적용 ★1.
  tier: star_1
  mechanism_primary: "P(버스)+P(지하철)−P(둘 다) = 0.4+0.25−0.15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/77-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 백분율을 교체. 제약: 둘 다 이용하는 비율이 각 비율 이하이고 합집합 비율이 100% 를 넘지 않게."
    creative: "(1) 합집합 비율을 주고 둘 다 이용하는 비율을 묻는 역방향(★1) (2) 둘 다 이용하지 않는 비율을 묻기(★2 · 여사건) (3) 교통수단을 셋으로 늘려 포함배제(★3)."
```

```yaml
- id: GN-PROB-77-161
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A~G 가 적힌 카드 7장에서 3장을 동시에 뽑을 때 A 또는 G 가 적힌 카드를 뽑을 확률.
  category: "조합으로 표본공간 → A 뽑기·G 뽑기의 합사건(교집합 보정)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반이 아닌 두 사건의 합사건 확률(덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본공간 C(7,3)=35 에서 A 포함 C(6,2), G 포함 C(6,2), 둘 다 포함 C(5,1) 을 빼는 덧셈정리.
    두 사건이 배반이 아니라는 점만 주의하면 되고 갈래 선택이 강제되지 않아 통찰 0. 확인체크 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "C(7,3)=35 → [C(6,2)+C(6,2)−C(5,1)]/35"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/77-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수(7·8·9)와 뽑는 장수(2·3·4)를 교체. 제약: 뽑는 장수가 2 이상이어야 두 사건의 교집합이 비지 않고, C(n,r) 이 약분되어 답이 간단하게 떨어지도록."
    creative: "(1) 여사건(A 도 G 도 없음)으로 푸는 편이 빠르게 수를 잡으면 전략 선택이 생겨 ★3(I-SC) (2) 지정 문자를 셋으로 늘려 포함배제 3항(★3) (3) 카드를 한 장씩 차례로 뽑아 순서를 구분하면 순열 표본공간으로 바뀜(★2~3)."
```

```yaml
- id: GN-PROB-77-162
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={0,1,2}, Y={1,2,3,4} 에 대하여 X 에서 Y 로의 함수 f 를 만들 때 f(1)=1 이거나 f(2)=4 일 확률.
  category: "함수의 개수를 표본공간으로 전환 → 덧셈정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률 문제를 X 에서 Y 로의 함수 개수 세기(4^3 과 조건별 4^2)로 옮겨야 표본공간이 생김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반이 아닌 두 사건의 합사건 확률(덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 함수 4^3=64, f(1)=1 인 함수 4^2, f(2)=4 인 함수 4^2, 두 조건을 모두 만족하는 함수 4 → (16+16−4)/64.
    함수 개수 세기로 표현을 옮기는 단계가 핵심이라 I-RT d1. 확인체크 출발 ★2 · depth 합 1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 함수 4^3 → f(1)=1 은 4^2 · f(2)=4 는 4^2 · 둘 다는 4 → 덧셈정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/77-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역의 크기(3→4, 3→3, 4→4)와 지정한 함숫값을 교체. 제약: 두 조건이 서로 다른 정의역 원소에 걸려야 교집합이 곱으로 깔끔하게 나오고, 답의 분모가 공역 크기의 거듭제곱이 되게."
    creative: "(1) 두 조건을 같은 원소에 걸어(f(1)=1 이거나 f(1)=4) 배반사건으로 만들기(★2) (2) 일대일함수로 제한하면 순열 표본공간 + 교집합 계산이 달라져 ★3 (3) 치역 조건(치역의 원소 곱이 짝수 등)으로 바꾸면 여사건 전환이 필요해 ★3(79-167 골조)."
```

```yaml
- id: GN-PROB-78-e10
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    흰 공 4개와 빨간 공 3개가 든 주머니에서 2개를 동시에 꺼낼 때 두 공이 같은 색일 확률.
  category: "같은 색 → 흰 2개·빨강 2개의 배반 분해 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반인 두 사건으로 분해한 합사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 색 = (흰 2개) 또는 (빨강 2개) 이고 두 사건이 동시에 일어날 수 없으므로 단순히 더한다. [C(4,2)+C(3,2)]/C(7,2).
    배반 분해가 이 예제의 학습 목표이자 지시 사항이라 통찰 0. 필수 예제 층 ★2 유지(M_total 5 이나 −1 미적용).
  tier: star_2
  mechanism_primary: "같은 색 = 흰2 ∪ 빨강2(배반) → [C(4,2)+C(3,2)]/C(7,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/78-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 색의 개수(4,3 → 5,4 또는 6,3)와 꺼내는 개수(2·3)를 교체. 제약: 각 색의 개수가 꺼내는 개수 이상이어야 두 항이 모두 살아 있고, C(n,r) 이 약분되어 기약분수가 되게."
    creative: "(1) 다른 색일 확률을 묻는 여사건(★2) (2) 색을 셋으로 늘려 배반 3항(★2~3) (3) 꺼낸 3개 중 같은 색이 2개 이상일 확률로 바꾸면 여사건 전환과 케이스 분리가 생겨 ★3."
```

```yaml
- id: GN-PROB-78-163
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 두 주사위를 동시에 던질 때 두 눈의 수의 합이 5 이거나 차가 5 일 확률.
  category: "두 조건을 각각 나열 → 배반이므로 개수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반인 두 사건으로 분해한 합사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본공간 36 에서 합이 5 인 순서쌍 4개, 차가 5 인 순서쌍 2개를 세고 두 사건이 동시에 일어날 수 없으므로 더한다.
    차가 5 인 경우를 양방향 모두 세는지가 유일한 함정. 통찰 0 · M_total 6 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "합=5 의 순서쌍 4 · 차=5 의 순서쌍 2(배반) → 6/36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/78-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(5·6·7)과 차의 값(4·5)을 교체. 제약: 두 조건이 동시에 성립하지 않아야 배반으로 더할 수 있으므로 합과 차의 홀짝을 확인할 것(합과 차가 같은 홀짝이면 교집합이 생김)."
    creative: "(1) 합이 5 이거나 곱이 6 처럼 교집합이 생기게 바꾸면 덧셈정리 보정이 필요해 ★2~3 (2) 주사위를 셋으로 늘리기(★3) (3) 합이 5 의 배수일 확률로 바꾸면 케이스가 늘어 ★3."
```

```yaml
- id: GN-PROB-78-164
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    6개의 문자 A~F 를 일렬로 나열할 때 A 가 맨 앞에 오거나 맨 뒤에 올 확률.
  category: "두 자리 지정 사건이 배반 → 각 5! 을 더해 6! 로 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반인 두 사건으로 분해한 합사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 가 맨 앞인 경우와 맨 뒤인 경우는 동시에 일어날 수 없으므로 (5!+5!)/6!.
    순열 표본공간을 세우는 단계가 있어 −1 은 적용하지 않고 확인체크 층 ★2 유지. 통찰 0.
  tier: star_2
  mechanism_primary: "A 맨 앞 5! · A 맨 뒤 5!(배반) → 2·5!/6!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/78-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 개수(5·6·7)와 지정 자리(맨 앞·맨 뒤·가운데)를 교체. 제약: 지정한 두 자리가 서로 다른 자리여야 배반이 유지됨."
    creative: "(1) A 가 맨 앞이거나 B 가 맨 뒤로 바꾸면 교집합이 생겨 덧셈정리 보정 ★2 (2) A 가 양 끝에 오지 않을 확률(★2 · 여사건) (3) A 와 B 가 이웃하거나 양 끝에 올 확률로 묶으면 ★3."
```

```yaml
- id: GN-PROB-78-165
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    딸기 맛 4개와 포도 맛 5개가 든 상자에서 5개를 동시에 꺼낼 때 딸기 맛이 포도 맛보다 많을 확률.
  category: "개수 대소 조건 → 딸기 개수 범위로 변환 → 배반 케이스 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "딸기가 포도보다 많다는 대소 조건을 꺼낸 5개 중 딸기가 3개 이상이라는 개수 범위로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반인 두 사건으로 분해한 합사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    딸기 k 개면 포도는 5−k 개이므로 k > 5−k 즉 k ≥ 3, 그런데 딸기는 4개뿐이라 k=3,4 두 배반 케이스.
    [C(4,3)C(5,2)+C(4,4)C(5,1)]/C(9,5). 대소 조건을 범위로 옮기는 I-EQV d1 하나 · depth 합 1 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "딸기 k · 포도 5−k → k ≥ 3 → k=3,4 배반 합 / C(9,5)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/78-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 종류의 개수(4,5)와 꺼내는 개수(5)를 교체. 제약: 꺼내는 개수를 홀수로 두면 같은 개수가 되는 경우가 없어 경계 처리가 단순해지고, 각 케이스에서 C(n,k) 가 정의되도록 보유 개수를 넘지 않게 할 것."
    creative: "(1) 꺼내는 개수를 짝수로 바꿔 같은 개수인 경우를 경계로 끼우면 T-경계가 생겨 ★3 (2) 딸기가 포도보다 적지 않을 확률(★2 · 여사건) (3) 세 가지 맛으로 늘려 최다 맛을 묻기(★4)."
```

```yaml
- id: GN-PROB-79-e11
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    1부터 100까지 적힌 카드 100장에서 한 장을 뽑을 때 적힌 수가 4의 배수도 아니고 5의 배수도 아닐 확률.
  category: "둘 다 아니다 → 합집합의 여사건 → 덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배수 조건의 확률과 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4의 배수 25개, 5의 배수 20개, 20의 배수 5개로 P(A∪B)=40/100 을 구한 뒤 1 에서 뺀다.
    아니다 라는 신호가 발문에 그대로 있고 여사건 전환이 이 예제의 학습 목표라 통찰 0. 필수 예제 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "4의 배수 25 · 5의 배수 20 · 20의 배수 5 → P(A∪B)=0.4 → 1−0.4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/79-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 범위(100·150·200)와 두 배수(4,5 → 3,5 또는 6,10)를 교체. 제약: 교집합은 최소공배수의 배수이므로 최소공배수를 먼저 잡고, 전체 범위가 최소공배수로 나누어떨어지면 개수 세기가 깔끔."
    creative: "(1) 4의 배수이거나 5의 배수일 확률(★2 · 여사건 없이 덧셈정리) (2) 배수를 셋으로 늘려 포함배제 3항 + 여사건(★3) (3) 서로소 조건으로 바꾸면 배수 조건으로 번역하는 단계가 추가되어 ★2~3(79-168 골조)."
```

```yaml
- id: GN-PROB-79-166
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A, B 를 포함한 5명이 일렬로 설 때 A 와 B 가 이웃하지 않을 확률.
  category: "이웃하지 않음 → 이웃 사건의 여사건 → 묶음 순열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이웃하지 않을 확률(이웃 사건의 여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃하는 경우를 한 덩어리로 묶어 4!·2! 로 세고 5! 로 나눈 뒤 1 에서 뺀다.
    이웃 묶음 순열과 여사건 모두 표준 절차라 통찰 0. 순열 설계 단계가 있어 −1 미적용 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "이웃 = 4!·2! → 1 − 4!·2!/5!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/79-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 수(5·6·7)와 이웃 조건에 걸리는 사람 수(2·3)를 교체. 제약: 묶음 안의 순서 2! 또는 3! 을 빠뜨리지 않게 하고, 답이 기약분수로 떨어지도록 인원을 잡을 것."
    creative: "(1) 두 사람 사이에 적어도 한 명(★2 · 같은 여사건, 82-177 골조) (2) 세 사람이 모두 이웃하지 않을 확률로 바꾸면 여사건이 여러 겹이라 ★4 (3) 원형 배열로 바꾸면 표본공간이 (n−1)! 이 되어 ★3."
```

```yaml
- id: GN-PROB-79-167
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={3,4,5} 에 대하여 X 에서 X 로의 함수 중 하나를 택할 때 치역의 모든 원소의 곱이 짝수일 확률.
  category: "치역의 곱이 짝수 ⇔ 치역에 4 포함 → 여사건(모든 함숫값이 홀수)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "치역의 원소 곱이 짝수라는 조건을 치역에 4 가 들어 있다, 즉 어떤 함숫값도 4 가 아닌 경우의 여사건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수·치역 조건의 확률(여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 함수 3^3=27. 곱이 홀수이려면 치역에 4 가 없어야 하고 그런 함수는 함숫값이 모두 3 또는 5 인 2^3=8개 → 1−8/27.
    치역 조건을 함숫값 조건으로 번역하는 I-EQV d2 가 진입 장벽이고 치역과 공역을 혼동하기 쉽다(T-표기).
    확인체크 출발 ★2 이지만 M_total 8 → +1 적용 ★3. [분류 이슈] 벤더 층(개념 확인)과 1단 어긋남.
  tier: star_3
  mechanism_primary: "전체 3^3 → 곱이 홀수 = 함숫값 모두 홀수 2^3 → 1 − 8/27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{19}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/79-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합의 원소(3,4,5)와 크기(3·4)를 교체. 제약: 짝수 원소의 개수가 1개면 여사건이 한 덩어리로 깔끔하고, 2개 이상이면 여사건이 (홀수 원소 개수)^n 으로 바뀌므로 분모 n^n 과 함께 확인할 것."
    creative: "(1) 치역의 합이 짝수로 바꾸면 홀짝 케이스가 늘어 ★4 (2) 일대일대응으로 제한하면 표본공간이 3! 이라 ★2 (3) 치역의 원소 개수가 2 이하일 확률처럼 치역 크기를 묻는 조건으로 바꾸면 ★4."
```

```yaml
- id: GN-PROB-79-168
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1부터 50까지의 자연수 중 한 개를 택할 때 택한 수가 10 과 서로소일 확률.
  category: "10 과 서로소 ⇔ 2의 배수도 5의 배수도 아님 → 여사건·덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로소라는 조건을 10 의 소인수 2, 5 의 배수가 아니라는 조건으로 옮겨야 개수를 셀 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배수 조건의 확률과 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2의 배수 25개, 5의 배수 10개, 10의 배수 5개 → 합집합 30개, 여사건 20개 → 2/5.
    서로소를 소인수의 배수 조건으로 번역하는 I-EQV d1 이 유일한 통찰 · depth 합 1 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "서로소 = 2의 배수도 5의 배수도 아님 → 1 − (25+10−5)/50"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/79-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 범위(50·100)와 기준 수(10 → 12·15·30)를 교체. 제약: 기준 수의 서로 다른 소인수가 2개면 포함배제 2항, 3개면 3항이 되므로 난도가 달라짐. 전체 범위가 소인수의 곱으로 나누어떨어지면 개수가 정수로 떨어짐."
    creative: "(1) 기준 수를 30 으로 바꿔 소인수 2,3,5 의 포함배제 3항으로 확장(★3) (2) 서로소가 아닐 확률을 묻기(★2) (3) 두 수를 뽑아 둘이 서로소일 확률로 바꾸면 쌍 단위 카운트라 ★4."
```

```yaml
- id: GN-PROB-80-e12
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    흰 공 5개와 검은 공 3개가 든 주머니에서 2개를 동시에 꺼낼 때 적어도 1개가 흰 공일 확률.
  category: "적어도 1개 → 여사건(모두 검은 공) → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적어도 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적어도 1개 흰 공의 여사건은 2개 모두 검은 공 → 1 − C(3,2)/C(8,2).
    적어도 라는 신호가 발문에 그대로 있고 여사건 전환을 교재가 직접 지시하므로 통찰 0. 필수 예제 층 ★2 유지.
  tier: star_2
  mechanism_primary: "여사건 = 모두 검은 공 C(3,2) → 1 − 3/C(8,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{28}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/80-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 색의 개수(5,3)와 꺼내는 개수(2·3)를 교체. 제약: 여사건이 존재하려면 검은 공 개수가 꺼내는 개수 이상이어야 하고, C(n,r) 약분으로 기약분수가 되게."
    creative: "(1) 적어도 2개가 흰 공으로 바꾸면 여사건이 두 케이스라 ★3(81-173 골조) (2) 당첨 개수를 미지수로 두고 확률을 주어 역으로 묻기(★3 · I-BW, 80-171 골조) (3) 색을 셋으로 늘려 적어도 한 색씩 조건(★4)."
```

```yaml
- id: GN-PROB-80-169
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    남자 4명과 여자 6명으로 이루어진 동호회에서 대표 3명을 뽑을 때 적어도 한 명은 남자일 확률.
  category: "적어도 한 명 남자 → 여사건(모두 여자)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적어도 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 − C(6,3)/C(10,3). 적어도 신호가 명시돼 있고 여사건이 한 덩어리라 판단 갈래가 없다.
    통찰 0 · 조합 표본공간 설계 단계가 있어 −1 미적용 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "여사건 = 모두 여자 C(6,3) → 1 − 20/C(10,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/80-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(4,6)과 뽑는 인원(3·4)을 교체. 제약: 여자 수가 뽑는 인원 이상이어야 여사건이 0 이 되지 않고, 답이 기약분수로 떨어지게."
    creative: "(1) 남녀를 적어도 한 명씩으로 바꾸면 여사건이 두 배반 케이스라 ★2~3(82-178 골조) (2) 특정 인물 포함 조건을 더해 덧셈정리와 섞기(★3) (3) 대표에 직책을 주어 순열로 바꾸기(★2)."
```

```yaml
- id: GN-PROB-80-170
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    여학생 3명과 남학생 4명을 일렬로 세울 때 적어도 한쪽 끝에 여학생을 세울 확률.
  category: "적어도 한쪽 끝 → 여사건(양 끝 모두 남학생) → 순열"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적어도 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건은 양 끝이 모두 남학생 → 양 끝에 남학생 2명을 배치하는 4P2 와 나머지 5! → 1 − 4P2·5!/7!.
    적어도 한쪽과 양쪽을 뒤집어 읽는 T-경계 함정이 있으나 여사건 전환 자체는 표준이라 통찰 0. M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "여사건 = 양 끝 모두 남학생 4P2·5! → 1 − 1440/7!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/80-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(3,4 → 2,5 또는 4,4)을 교체. 제약: 남학생 수가 2 이상이어야 여사건이 존재하고, 4P2·5!/7! 가 약분되어 기약분수가 되게."
    creative: "(1) 양 끝 모두 여학생일 확률(★2 · 여사건 없이 직접) (2) 여학생끼리 이웃하지 않을 확률로 바꾸면 사이 끼워넣기 모형이라 ★3 (3) 적어도 한쪽 끝에 특정 두 명 중 한 명으로 바꾸면 덧셈정리 보정 ★3."
```

```yaml
- id: GN-PROB-80-171
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    당첨 제비 n 개가 든 20개의 제비에서 2개를 동시에 뽑을 때 적어도 1개가 당첨일 확률이 7/19 일 때 n 의 값.
  category: "여사건 확률식을 n 에 대한 방정식으로 → 정수해"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률값이 먼저 주어지고 미지수 n 을 역추적해야 하므로 여사건 식을 n 에 대한 방정식으로 세우고 정수해를 고름"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여사건 확률로 미지수 정하기(역방향)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1 − C(20−n,2)/C(20,2) = 7/19 를 정리하면 (20−n)(19−n) 이 정해진 값이 되고, 연속한 두 정수의 곱으로 보아 n 을 읽는다.
    확률에서 미지수로 거슬러 올라가는 I-BW d2 · M_total 8 → 확인체크 출발 ★2 에서 +1 → ★3. [분류 이슈] 벤더 층과 1단 어긋남.
  tier: star_3
  mechanism_primary: "1 − C(20−n,2)/C(20,2) = 7/19 → (20−n)(19−n) 값 확정 → 연속 정수 곱으로 n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/80-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 제비 수(20·15·12)와 주어진 확률을 교체. 제약: (전체−n)(전체−1−n) 이 연속한 두 정수의 곱으로 떨어져 n 이 자연수 해를 갖도록 확률을 역산해 정할 것. 0 < n < 전체 범위도 확인."
    creative: "(1) 뽑는 개수를 3개로 늘리면 3차식이 되어 ★4 (2) n 의 범위만 주고 확률의 최댓값을 묻기(★4) (3) 적어도 1개가 당첨일 확률이 1/2 이상이 되는 최소 n 을 묻는 부등식 형태(★3~4 · T-경계)."
```

```yaml
- id: GN-PROB-81-e13
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    서로 다른 두 주사위를 동시에 던질 때 두 눈의 수의 합이 5 이상일 확률.
  category: "합이 5 이상 → 여사건(합이 4 이하)의 경우를 나열"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이상·이하 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 5 이상인 경우를 다 세는 대신 여사건인 합 2, 3, 4 의 1+2+3=6 가지를 세어 1 − 6/36.
    이상 의 여사건이 이하 라는 경계 뒤집기(T-경계)가 학습 목표이고 교재가 직접 지시하므로 통찰 0. 필수 예제 층 ★2.
  tier: star_2
  mechanism_primary: "여사건 = 합 4 이하(2,3,4) 6가지 → 1 − 6/36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/81-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 합(5·6·9)을 교체. 제약: 기준을 9 이상처럼 크게 잡으면 여사건이 더 무거워지므로 여사건 쪽 경우가 더 적어지는 기준을 고를 것. 이상/초과 표기를 바꾸면 경계 한 줄이 달라짐."
    creative: "(1) 합이 5 이상 9 이하처럼 양쪽 범위로 바꾸면 두 여사건 ★3 (2) 주사위를 셋으로 늘리기(★3~4) (3) 두 눈의 곱이 기준 이상으로 바꾸면 여사건 나열이 불규칙해 ★3."
```

```yaml
- id: GN-PROB-81-172
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초코 우유 8개와 딸기 우유 4개가 진열된 매대에서 3개를 동시에 택할 때 딸기 우유가 2개 이하일 확률.
  category: "2개 이하 → 여사건(딸기 3개)의 한 덩어리"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이상·이하 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3개를 택하므로 딸기가 2개 이하의 여사건은 딸기 3개 하나뿐 → 1 − C(4,3)/C(12,3).
    여사건이 한 덩어리로 끝나 판단 갈래가 없다. 경계(2개 이하에 2개 포함) 확인만 필요. 통찰 0 · M_total 6 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "여사건 = 딸기 3개 C(4,3) → 1 − 4/C(12,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{54}{55}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/81-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 종류의 개수(8,4)와 택하는 개수(3·4)를 교체. 제약: 기준 개수를 택하는 개수보다 1 작게 두어야 여사건이 한 덩어리로 끝남. 그렇지 않으면 여사건이 여러 케이스가 되어 난도가 올라감."
    creative: "(1) 딸기가 1개 이하로 바꾸면 여사건이 두 케이스라 ★3(81-173 골조) (2) 딸기가 적어도 1개(★2) (3) 두 종류의 개수를 미지수로 두고 확률을 주어 역산(★3~4 · I-BW)."
```

```yaml
- id: GN-PROB-81-173
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    빨간 공 6개와 파란 공 4개가 든 주머니에서 4개를 동시에 꺼낼 때 빨간 공이 2개 이상일 확률.
  category: "2개 이상 → 여사건(빨강 0개·1개)을 배반 분해해 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이상·이하 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건이 빨강 0개와 빨강 1개 두 배반 케이스 → 1 − [C(4,4)+C(6,1)C(4,3)]/C(10,4).
    여사건을 다시 배반 분해하는 두 겹 구조이지만 두 절차 모두 이 단원의 표준이라 통찰 0. M_total 7 → 확인체크 층 ★2.
  tier: star_2
  mechanism_primary: "여사건 = 빨강 0개 ∪ 빨강 1개(배반) → 1 − (1+24)/C(10,4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{37}{42}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/81-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 색의 개수(6,4)와 꺼내는 개수(4)를 교체. 제약: 파란 공 개수가 꺼내는 개수 이상이어야 빨강 0개 케이스가 살아 있고, 기준을 올리면 여사건 케이스 수가 늘어나므로 계산량을 확인할 것."
    creative: "(1) 빨간 공이 3개 이상으로 바꾸면 여사건이 세 케이스라 ★3 (2) 빨간 공과 파란 공의 개수가 같을 확률(★2) (3) 빨간 공 개수의 조건을 이상·이하 양쪽으로 묶으면 ★3."
```

```yaml
- id: GN-PROB-81-174
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1, 2, 3, 4, 5 중 서로 다른 4개를 이용해 네 자리 자연수를 만들 때 그 수가 4500 이하일 확률.
  category: "4500 이하 → 천의 자리·백의 자리 조건으로 분해 → 순열 카운트"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "4500 이하라는 크기 조건을 천의 자리가 1~3 인 경우와 천의 자리가 4 이면서 백의 자리가 5 미만인 경우로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이상·이하 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 5P4=120. 천의 자리가 1,2,3 이면 무조건 4500 이하라 3·4P3, 천의 자리가 4 면 백의 자리가 1,2,3 일 때만 조건을 만족해 3·3P2.
    크기 조건을 자릿수 조건으로 옮기는 I-EQV d1 · depth 합 1 → 확인체크 층 ★2. 0 이 없어 4500 자체는 만들 수 없다는 경계 확인이 함정.
  tier: star_2
  mechanism_primary: "천의 자리 1~3 → 3·4P3 · 천의 자리 4 & 백의 자리 1~3 → 3·3P2 → 합 / 5P4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/81-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사용 숫자 집합(1~5 → 1~6)과 기준 수(4500·3200)를 교체. 제약: 기준 수의 각 자리가 사용 가능한 숫자 범위 안에 있어야 분해가 의미 있고, 기준 수 자체가 만들어질 수 있는지(0 포함 여부)를 확인해 경계를 명시할 것."
    creative: "(1) 0 을 포함한 숫자 집합으로 바꾸면 맨 앞자리 제외 조건이 추가되어 ★3 (2) 기준보다 큰 경우를 세는 여사건이 더 짧게 되도록 기준을 높여 전략 선택을 만들면 ★3(I-SC) (3) 짝수이면서 4500 이하처럼 조건을 겹치면 덧셈정리 보정 ★3~4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-82-175
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    배반인 두 사건 A, B 에 대하여 P(A∪B)=2/3 이고 P(A) 가 1/5 이상 3/5 이하일 때 P(B) 의 최솟값.
  category: "배반 → P(B)=P(A∪B)−P(A) → P(A) 최대일 때 최소"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "배반 조건으로 P(B) 를 P(A) 의 일차 감소식으로 바꾸어 P(A) 의 범위 끝에서 최솟값이 나옴을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건과 확률의 범위 조건에서 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    배반이므로 P(B)=2/3−P(A) 이고 P(A) 가 클수록 P(B) 가 작아지니 P(A)=3/5 에서 최솟값.
    범위의 어느 끝을 써야 하는지 판단하는 I-EQV d1 하나 · depth 합 1 → STEP 1 층 ★2 유지. 부등식 방향 뒤집기가 T-부호 함정.
  tier: star_2
  mechanism_primary: "배반 → P(B)=2/3−P(A) → P(A) 최대 3/5 에서 P(B) 최소"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∪B) 값과 P(A) 의 범위를 교체. 제약: 범위의 양 끝이 모두 0 이상 P(A∪B) 이하여야 P(B) 가 확률로 살아 있고, 최댓값을 물으려면 범위의 아래 끝을 쓰게 될 것."
    creative: "(1) 최댓값을 묻기(★2 · 같은 골조, 범위 반대 끝) (2) 배반 조건을 빼고 P(A∩B) 의 범위를 추가하면 조건 통합이 필요해 ★3 (3) P(A) 와 P(B) 의 곱의 최댓값처럼 이차식 최적화를 붙이면 ★4."
```

```yaml
- id: GN-PROB-82-176
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    주사위를 두 번 던져 나온 두 눈의 수의 합을 a 라 할 때 a 와 12 가 서로소일 확률.
  category: "12 와 서로소 ⇔ a 가 2의 배수도 3의 배수도 아님 → 해당 a 의 경우 수 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "12 와 서로소라는 조건을 a 가 2 로도 3 으로도 나누어떨어지지 않는다는 조건으로 옮겨 2~12 중 해당하는 a 만 고름"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "배수 조건의 확률과 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12 의 소인수는 2, 3 이므로 a 가 둘 중 어느 배수도 아니어야 한다. 2~12 에서 남는 a 를 고르고 각 a 의 순서쌍 개수를 더해 36 으로 나눈다.
    서로소를 소인수 조건으로 번역하는 I-EQV d2 가 진입 장벽 · depth 합 2 · M_total 7 → STEP 1 층 ★2 유지.
  tier: star_2
  mechanism_primary: "a 가 2·3 의 배수가 아님 → 해당 a 별 순서쌍 개수 합 / 36"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 수(12 → 6·10·15)와 던지는 횟수를 교체. 제약: 기준 수의 소인수 개수가 늘면 걸러지는 a 가 급감하므로 남는 a 가 최소 두세 개는 되게 고르고, 합 a 의 도수 분포(1,2,3,4,5,6,5,4,3,2,1)를 이용해 답이 깔끔하게 약분되도록."
    creative: "(1) 두 눈의 곱이 12 와 서로소로 바꾸면 곱의 소인수 판정이라 ★3 (2) a 가 12 의 약수일 확률(★2) (3) 세 번 던져 합이 기준과 서로소로 확장(★4)."
```

```yaml
- id: GN-PROB-82-177
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    부모님을 포함한 6명의 가족을 일렬로 세울 때 부모님 사이에 적어도 한 명을 세울 확률.
  category: "사이에 적어도 한 명 ⇔ 이웃하지 않음 → 이웃 사건의 여사건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부모님 사이에 적어도 한 명이라는 조건을 부모님이 이웃하지 않는다는 조건으로 옮겨 묶음 순열의 여사건으로 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이웃하지 않을 확률(이웃 사건의 여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사이에 아무도 없다 = 이웃이므로 여사건은 부모님을 묶은 5!·2! → 1 − 5!·2!/6!.
    발문이 이웃이라는 말을 쓰지 않아 조건을 바꿔 읽는 I-EQV d1 이 필요 · depth 합 1 → STEP 1 층 ★2.
  tier: star_2
  mechanism_primary: "사이에 적어도 한 명 = 이웃하지 않음 → 1 − 5!·2!/6!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가족 수(6·7·8)를 교체. 제약: 묶음 순열의 내부 순서 2! 를 빠뜨리지 않게 하고, (n−1)!·2!/n! = 2/n 로 약분되므로 답이 기약분수가 되는 n 을 고를 것."
    creative: "(1) 부모님 사이에 정확히 한 명으로 바꾸면 자리 고정 카운트라 ★3 (2) 부모님 사이에 적어도 두 명(★3 · 여사건이 두 케이스) (3) 원형 배열로 바꾸면 표본공간이 (n−1)! 이 되어 ★3."
```

```yaml
- id: GN-PROB-82-178
  page: 82
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    남자 6명과 여자 5명 중에서 4명을 뽑을 때 남녀를 적어도 한 명씩 뽑을 확률.
  category: "적어도 한 명씩 → 여사건(모두 남 또는 모두 여)을 배반 분해"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남녀 적어도 한 명씩이라는 두 방향 조건의 여사건이 한 성별로만 뽑는 두 배반 사건임을 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적어도 조건의 여사건 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건은 4명 모두 남자이거나 모두 여자 → 1 − [C(6,4)+C(5,4)]/C(11,4).
    적어도 가 남녀 양쪽에 걸려 여사건이 두 덩어리가 되는 점이 판단 지점이라 I-EQV d1 · depth 합 1 → STEP 1 층 ★2.
  tier: star_2
  mechanism_primary: "여사건 = 모두 남 ∪ 모두 여(배반) → 1 − [C(6,4)+C(5,4)]/C(11,4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{31}{33}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(6,5)과 뽑는 인원(4·5)을 교체. 제약: 양쪽 인원이 모두 뽑는 인원 이상이어야 여사건 두 항이 살아 있고, 한쪽이 부족하면 항이 하나로 줄어 난도가 내려감."
    creative: "(1) 남자를 2명 이상 뽑을 확률로 바꾸면 여사건이 0명·1명 두 케이스(★2~3) (2) 세 그룹으로 늘려 적어도 한 명씩(★4 · 포함배제) (3) 뽑은 4명을 일렬로 세우는 조건을 더해 순열과 섞기(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-82-179
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    A 와 B^c 가 배반이고 P(A∩B)=1/5, P(A)+P(B)=7/10 일 때 P(A^c∩B) 의 값. 5지선다.
  category: "A 와 B^c 배반 ⇔ A ⊂ B → P(A)=P(A∩B) → 차집합 확률"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 와 B^c 가 배반, 즉 A∩B^c 가 공사건이라는 조건을 A 가 B 에 포함된다는 관계로 옮겨 P(A)=P(A∩B) 를 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "배반 조건을 포함관계로 해석하는 확률 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A∩B^c 가 공사건이면 A ⊂ B 이므로 P(A)=P(A∩B)=1/5, 따라서 P(B)=7/10−1/5, 구하는 값은 P(B)−P(A∩B).
    배반 조건을 포함관계로 읽는 I-EQV d2 가 이 문항의 전부이고 계산은 가볍다. STEP 2 층 ★3 · 기출 보정 +0 → ★3.
  tier: star_3
  mechanism_primary: "A 와 B^c 배반 → A ⊂ B → P(A)=P(A∩B) → P(A^c∩B)=P(B)−P(A∩B)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∩B) 와 P(A)+P(B) 값을 교체. 제약: 포함관계 때문에 P(A) ≤ P(B) 가 자동으로 요구되므로 P(A∩B) 가 합의 절반 이하가 되게 하고, 선택지가 같은 분모로 정리되게 할 것."
    creative: "(1) 배반 조건을 A^c 와 B 로 바꾸면 B ⊂ A 가 되어 대칭 변형(★3) (2) P(A^c∩B^c) 를 묻기(★3) (3) 포함관계를 말로 직접 주고 세 조건을 연립하게 하면 ★2 로 내려감."
```

```yaml
- id: GN-PROB-82-180
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A, B 를 포함한 7명이 임의의 순서로 발표할 때 A 가 B 보다 먼저 발표하거나 A 와 B 사이에 한 명이 발표할 확률.
  category: "A·B 의 상대 위치만 남기는 축소 → 두 사건의 교집합 보정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 가 B 보다 먼저일 확률은 두 사람의 순서 대칭으로 곧바로 1/2 로 결정"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "7명 배열을 A·B 두 사람이 차지하는 자리의 순서쌍 모형으로 옮겨 사이에 한 명인 경우와 교집합을 셈"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "배반이 아닌 두 사건의 합사건 확률(덧셈정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 사건이 배반이 아니므로 교집합(A 가 먼저이면서 사이에 한 명)을 반드시 빼야 한다. 나머지 5명은 어떤 경우에도 자유라 A·B 의 자리 순서쌍만 세면 된다.
    대칭 활용과 모형 축소 두 통찰이 있으나 둘 다 depth 1 이고 계산이 가벼워 +1 을 적용하지 않고 STEP 2 층 ★3 유지. [분류 이슈] 후보 ★4.
  tier: star_3
  mechanism_primary: "A·B 자리 순서쌍 42가지 → P(먼저)=1/2 · P(사이 한 명)=10/42 · 교집합 5/42 → 덧셈정리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{13}{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/82-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 수(7·6·8)와 사이 인원(한 명·두 명)을 교체. 제약: 사이 인원 k 에 대해 가능한 자리 쌍이 n−1−k 개이므로 k 가 커지면 경우가 줄고, 교집합은 그 절반임을 이용해 답이 기약분수가 되게."
    creative: "(1) 두 조건을 배반이 되게 바꾸면(예: A 가 먼저 이거나 A 가 맨 뒤) 보정이 사라져 ★2 (2) 사이에 적어도 한 명으로 바꾸면 여사건과 섞여 ★4 (3) 세 사람의 상대 순서 조건으로 확장하면 대칭 인수가 커져 ★4."
```

```yaml
- id: GN-PROB-83-181
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    a, b, c, d 에서 중복을 허락해 4개를 택해 만든 문자열 중 하나를 택할 때 a 가 한 개만 들어 있거나 b 가 한 개만 들어 있을 확률. 5지선다.
  category: "정확히 한 개 카운트 → 두 사건의 덧셈정리(교집합 동시 조건)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 개만 포함을 적어도 한 개와 구별해 자리 하나를 고르고 남은 자리는 그 문자를 제외한 3가지로 채우는 카운트로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조건을 동시에 만족하는 교집합을 a 자리·b 자리를 따로 고르고 남은 두 자리를 c, d 로만 채우는 하나의 배열 모형으로 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "배반이 아닌 두 사건의 합사건 확률(덧셈정리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 4^4 중 a 가 정확히 하나인 문자열은 자리 4가지와 나머지 3^3, b 도 같다. 교집합은 a 자리 4가지·b 자리 3가지와 남은 두 자리 2^2.
    정확히 한 개 조건의 카운트와 교집합 결합 두 통찰(depth 합 3) → STEP 2 층 ★3 에서 +1 → ★4. 기출 보정은 통찰에 이미 반영해 추가하지 않음.
  tier: star_4
  mechanism_primary: "전체 4^4 → a 하나만 4·3^3 · b 하나만 4·3^3 · 둘 다 하나씩 4·3·2^2 → 덧셈정리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/83-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 종류 수(4)와 문자열 길이(4·5)를 교체. 제약: 교집합이 살아 있으려면 길이가 2 이상이어야 하고, 남은 자리를 채울 문자 종류가 종류 수에서 2 를 뺀 값이므로 종류 수는 3 이상이어야 함. 분모가 종류 수의 길이 제곱이 되므로 선택지 분모를 맞출 것."
    creative: "(1) a 가 적어도 한 개이거나 b 가 적어도 한 개로 바꾸면 여사건 조합이라 ★4 (2) a 가 두 개만 포함으로 바꾸면 조합 계수가 커져 ★4 (3) 문자열을 중복 없는 순열로 제한하면 표본공간이 순열이 되어 ★3."
```

```yaml
- id: GN-PROB-83-182
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    1부터 7까지 중 서로 다른 4개를 택해 그 곱을 a, 택하지 않은 3개의 곱을 b 라 할 때 a 와 b 가 모두 짝수일 확률.
  category: "곱이 짝수 ⇔ 짝수 원소를 포함 → 여사건(한쪽이 홀수)의 두 배반 케이스"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱이 짝수를 짝수 원소를 적어도 하나 포함으로 바꾸고, 양쪽 모두 짝수의 여사건이 한쪽이 짝수를 하나도 갖지 않는 두 배반 경우임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "신호 없는 문제에서 여사건 전략을 스스로 선택"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1~7 의 짝수는 2, 4, 6 세 개. a 가 홀수이려면 택한 4개가 모두 홀수여야 하고, b 가 홀수이려면 짝수 3개를 모두 택해야 한다. 두 경우는 동시에 일어날 수 없다.
    조건을 짝수 원소의 분배로 번역하는 I-EQV d2 하나 · depth 합 2 → STEP 2 층 ★3 유지.
  tier: star_3
  mechanism_primary: "여사건 = (택한 4개 모두 홀수) ∪ (짝수 3개를 모두 택함) → 1 − 5/C(7,4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{6}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/83-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 범위(1~7 → 1~8·1~9)와 택하는 개수를 교체. 제약: 홀수 개수가 택하는 개수 이상이어야 첫 여사건이 살아 있고, 짝수 개수가 남기는 개수 이하여야 둘째 여사건이 살아 있다. 두 여사건이 겹치지 않는지도 확인할 것."
    creative: "(1) a 와 b 중 하나만 짝수일 확률로 바꾸면 배반 두 항 직접 계산 ★3 (2) 곱이 4의 배수 조건으로 바꾸면 2의 지수를 따져야 해 ★4 (3) 합의 홀짝 조건으로 바꾸면 잉여류 분류라 ★4."
```

```yaml
- id: GN-PROB-83-183
  page: 83
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    S={1,2,3,4,5,6} 의 부분집합 중 하나를 택할 때 그 집합의 모든 원소의 합이 4 이상일 확률(공집합의 합은 0).
  category: "합 4 이상 → 여사건(합 3 이하)의 부분집합을 직접 나열"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "64개 부분집합의 합을 직접 분류하는 갈래 대신 합이 3 이하인 부분집합만 나열하는 여사건 갈래를 스스로 선택해야 계산이 끝남"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "신호 없는 문제에서 여사건 전략을 스스로 선택"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 부분집합 2^6=64. 합이 3 이하인 것은 공집합과 원소의 합이 작은 몇 개뿐이라 나열이 끝난다.
    발문에 아닌·적어도 같은 여사건 신호가 없는데도 갈래를 바꿔야 하는 I-SC d2 이고 공집합 경계(T-경계)까지 걸린다. M_total 8 → STEP 2 층 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "전체 2^6 → 여사건 = 원소합 3 이하인 부분집합 나열 → 1 − 5/64"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{59}{64}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/83-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원소 집합(1~6 → 1~7)과 기준 합(4·5·6)을 교체. 제약: 기준을 올리면 여사건 나열이 급격히 길어지므로 기준은 작게 두고, 분모가 2^n 이라 답이 2^n 분모의 기약분수가 되도록 여사건 개수를 확인할 것."
    creative: "(1) 원소의 곱이 기준 이상으로 바꾸면 공집합·1 처리가 달라져 ★4 (2) 원소 개수가 3 이상이면서 합이 기준 이상으로 조건을 겹치면 ★4~5 (3) 기준을 절반 근처로 올려 여사건이 더 이상 짧지 않게 하면 전략 선택이 사라져 ★3 으로 내려감."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-83-184
  page: 83
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    1부터 11까지 중 서로 다른 3개를 택할 때 택한 세 수의 곱이 5의 배수이고 합이 3의 배수일 확률.
  category: "곱 조건 → 5 또는 10 포함 · 합 조건 → 3으로 나눈 나머지 조합 → 두 조건 결합"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱이 5의 배수라는 조건을 5 또는 10 중 적어도 하나를 택한다는 원소 포함 조건으로 옮김"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합이 3의 배수라는 조건을 1~11 을 3으로 나눈 나머지 0·1·2 그룹의 개수 문제로 전환해 (0,0,0),(1,1,1),(2,2,2),(0,1,2) 조합만 남김"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지 그룹 조합마다 5 또는 10 포함 조건을 겹쳐 두 조건을 만족하는 경우만 남기도록 결합"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "두 배수 조건을 동시에 만족하는 선택의 확률"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    표본공간 C(11,3)=165. 나머지류 그룹은 0 이 3개, 1 이 4개, 2 가 4개이고 5 와 10 은 각각 나머지 2, 1 그룹에 속한다. 허용되는 네 가지 나머지 조합 안에서 5 또는 10 을 포함하는 경우만 세면 된다.
    두 조건을 서로 다른 언어로 번역해 겹쳐야 하는 문항으로 통찰 3개(EQV·RT·CON) · M_total 10. 실력 UP 층 ★4 유지 — ★5 는 SC/VF/SYM/XU 가 없어 자격 미달.
  tier: star_4
  mechanism_primary: "5 또는 10 포함(곱 조건) ∩ 나머지 조합 (0,0,0)·(1,1,1)·(2,2,2)·(0,1,2)(합 조건) → 경우 수 / C(11,3)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{9}{55}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/83-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 범위(1~11 → 1~12·1~15)와 두 기준(5의 배수·3의 배수)을 교체. 제약: 범위를 바꾸면 나머지류 그룹의 크기가 달라지므로 세 그룹 크기를 먼저 확정하고, 곱 조건에 걸리는 원소가 어느 나머지 그룹에 속하는지 표로 확인할 것. 택하는 개수를 3 으로 유지해야 나머지 조합이 네 가지로 끝남."
    creative: "(1) 곱이 10의 배수로 바꾸면 짝수 조건까지 겹쳐 ★5 급(I-CON 강화) (2) 합이 3의 배수를 합이 짝수로 바꾸면 홀짝 두 그룹이라 ★3 (3) 여사건 쪽이 더 짧아지도록 조건을 뒤집으면 전략 선택 I-SC 가 추가되어 ★5 후보."
```

```yaml
- id: GN-PROB-83-185
  page: 83
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    x+y+z=10 의 음이 아닌 정수해 순서쌍 중 하나를 택할 때 (x−y)(y−z)(z−x) 가 0 이 아닐 확률.
  category: "곱이 0 이 아님 ⇔ 세 수가 모두 다름 → 여사건(두 개 이상 같음) 카운트"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 인수의 곱이 0 이 아니라는 대수 조건을 x, y, z 가 서로 모두 다르다는 조건으로 옮김"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모두 다른 순서쌍을 직접 세는 갈래 대신 두 개 이상이 같은 여사건을 세는 갈래를 선택해야 계산이 끝남"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 개가 같은 경우를 2a+b=10 으로 세면서 a=b 가 되는 경우(세 수가 모두 같은 경우)가 실제로 존재하는지 검증해 중복·불가 케이스를 걸러냄"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "신호 없는 문제에서 여사건 전략을 스스로 선택"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    표본공간은 중복조합으로 구한 음이 아닌 정수해의 개수. 여사건은 적어도 두 값이 같은 경우이고 2a+b=10 의 해마다 같은 값이 놓일 자리 3가지를 곱한다. 세 값이 모두 같은 경우는 10 이 3으로 나누어떨어지지 않아 존재하지 않는다.
    통찰 3개에 I-SC·I-VF 가 있어 ★5 요건을 형식상 충족하나 novelty_score 0 이고 실력 UP 층이라 ★4 로 둔다. [분류 이슈] 후보 ★4/★5.
  tier: star_4
  mechanism_primary: "표본공간 = x+y+z=10 의 중복조합 해 → 여사건 = 두 값이 같은 (2a+b=10, 자리 3가지) → 1 − 18/66"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{8}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/83-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(10 → 9·11·12)과 변수 개수(3)를 교체. 제약: 합이 3의 배수이면 세 값이 모두 같은 경우가 생겨 여사건 카운트에 항이 하나 더 붙으므로 반드시 따로 확인할 것. 변수 개수를 늘리면 여사건 분류가 분할 문제로 커진다."
    creative: "(1) 합을 3의 배수로 바꿔 모두 같은 경우가 생기게 하면 검증 부담이 커져 ★5 (2) 양의 정수해로 제한하면 표본공간이 바뀌어 같은 골조 ★4 (3) (x−y)(y−z)(z−x) > 0 처럼 부호 조건으로 바꾸면 대칭성 활용이 필요해 ★5(I-SYM)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 6 · ★2 23 · ★3 5 · ★4 4 · ★5 0
- 통찰형 18 · 절차형 20 · premium 0
- 통찰 유형 분포: I-EQV 14 · I-RT 3 · I-SC 2 · I-CON 2 · I-BW 1 · I-SYM 1 · I-VF 1 (총 24개 라벨 · 문항당 평균 0.63)
- type_hint 상위 5: 「배반이 아닌 두 사건의 합사건 확률(덧셈정리)」 5 · 「배수 조건의 확률과 여사건」 4 · 「배반인 두 사건으로 분해한 합사건 확률」 4 · 「적어도 조건의 여사건 확률」 4 · 「이상·이하 조건의 여사건 확률」 4
- 구역별 ★: 개념원리 익히기 4문 모두 ★1 · 필수·발전 예제 23문(★1 2 · ★2 19 · ★3 2) · STEP 1 4문 모두 ★2 · STEP 2 5문(★3 3 · ★4 2) · 실력 UP 2문 모두 ★4
- 그림: 0문(이 범위에 그림 문항 없음)
- 대상층: 하위권 6 · 중하위권 14 · 중위권 13 · 중상위권 3 · 상위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-79-167 | 벤더는 확인체크(개념 확인 층)이나 치역 조건을 함숫값 조건으로 번역하는 I-EQV d2 + M_total 8 → ★3 으로 올림. 같은 구역 다른 확인체크와 1단 차이 | ★2 / ★3 |
| GN-PROB-80-171 | 확인체크이지만 확률값에서 미지수 n 을 역추적하는 I-BW d2 + 정수해 판정 → ★3. 벤더 층과 1단 어긋남 | ★2 / ★3 |
| GN-PROB-82-180 | 통찰 2개(I-SYM·I-RT)지만 둘 다 depth 1 이고 계산이 가벼워 +1 을 적용하지 않고 STEP 2 층 ★3 유지 | ★3 / ★4 |
| GN-PROB-83-185 | 통찰 3개 + I-SC·I-VF 로 v3.8 의 ★5 저노출 유형 요건을 형식상 충족하나 novelty_score 0(§2.14 RED) 이고 실력 UP 층이라 ★4 로 둠 | ★4 / ★5 |

전 범위 공통 관례 이슈: 「필수·발전 예제」 구역의 확인체크 유제를 지시서 문면대로 ★1 출발로 보면 이 구역 23문 중 17문이 ★1 이 되어 벤더 난이도 층과 어긋난다. 이 파일은 확인체크를 바로 앞 필수 예제와 같은 층(★2)에서 출발시키고, 공식 직접 대입 한 단계인 76-158·77-160 만 −1 해 ★1 로 내렸다. 카탈로그 확정 시 이 관례를 먼저 정할 것.

## 카탈로그 차원 메모

확률과 통계 유형 카탈로그를 만들 때 이 범위에서 관찰한 것.

- **따로 세워야 할 유형**: ① 「추상 사건의 확률 계산」(75-154·75-156·76-e8·76-158·76-159·82-175·82-179) — 표본공간 없이 P(A), P(B), P(A∩B) 의 관계식만 다루는 계열로, 아래 경우의 수 기반 계열과 학생 체감이 전혀 다르다. ② 「여사건 전환의 신호 유무」 — 발문에 적어도·아닌·이상 이 있는 표준형(80-e12·80-169·81-e13·81-172 등 ★2 대)과, 신호 없이 학생이 갈래를 바꿔야 하는 형(83-182·83-183·83-185 ★3~4)은 base ★ 가 두 단 차이라 같은 유형으로 묶으면 안 된다. ③ 「확률식에서 미지수 역산」(80-171) — 이 단원에 한 문항뿐이지만 역방향 골조가 독립적이라 별도 유형 가치가 있다.
- **통합해도 될 유형**: 「적어도 조건의 여사건」과 「이상·이하 조건의 여사건」은 골조가 1 − (여사건 경우 수)/(전체) 로 동일하고 차이는 여사건이 한 덩어리인지 두세 케이스인지뿐이다. 하나의 유형으로 두고 **여사건 케이스 수**를 base ★ 조정 파라미터(1개 → ★2, 2개 이상 → ★3)로 두는 편이 낫다. 「배반인 두 사건 분해」(78 계열)도 같은 파라미터로 흡수 가능하다.
- **반복된 type_hint**: 「여사건」이 들어간 type_hint 가 38문 중 22문으로 이 단원의 중심축이고, 「덧셈정리」 계열(직접 대입 · 배반 아닌 합사건 · 배반 분해)이 12문이다. 카탈로그는 이 두 축을 상위 분류로 두고 표본공간(추상 사건 / 배수·약수 / 순열 / 조합 / 함수 / 부분집합 / 중복조합)을 하위 파라미터로 붙이는 2차원 구조가 이 범위의 38문을 빠짐없이 덮는다.
- **다른 단원과의 경계**: 79-167·77-162(함수), 83-181(중복순열), 83-185(중복조합)은 경우의 수 단원의 카운트 유형을 그대로 쓰고 확률은 마지막 나눗셈 한 번뿐이다. 카탈로그에서 확률 유형으로 등재하되 카운트 유형을 signal_ref 로 연결해 두면 변형 시 원본을 찾기 쉽다.
