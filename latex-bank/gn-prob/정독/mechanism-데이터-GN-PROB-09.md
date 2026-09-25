---
name: mechanism-데이터-GN-PROB-09
description: 개념원리 확률과 통계 09 조건부확률(1/1 · 88~96쪽 35문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 09 조건부확률
  unit_code: GN-PROB-09
  part: "1/1"
  extract_range: "88~96쪽 · 88-186~96-215"
  total_problems: 35
  unit_total: 35
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. anchor_status 는 전 문항 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 09 조건부확률 (1/1) 정독 데이터 (v1.0)

88~96쪽 35문항 전수(88-186~96-215). 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 17문(필수 예제 5 + 확인체크 12) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다. 단원의 도구는 조건부확률의 정의 P(B|A)=P(A∩B)/P(A), 확률의 곱셈정리 P(A∩B)=P(A)P(B|A), 전확률 분해 P(E)=P(A∩E)+P(Aᶜ∩E), 그리고 그 역방향인 사후확률(베이즈형) 네 가지로 거의 전부 덮인다. 계산 자체는 가볍고, 변별은 **어느 사건을 분모(조건)로 놓는가**와 **결과 조건에서 원인을 역추적하는가**에서 생긴다.

벤더 난이도 신호: 「개념원리 익히기」의 통번호와 tag 「확인체크」는 개념 확인(★1 출발), 「필수」 tag 가 붙은 상자 예제는 ★2 출발, 연습문제는 level 「STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 출발이다. 「평가원 기출」·「교육청 기출」 tag 는 통찰 유무에 따라 +0~1 로만 썼다. 출발점에서 M_total 과 통찰 수로 ±1 조정했고, 라벨을 벤더 신호에 억지로 맞추지 않았다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-88-186
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    P(A)=1/2, P(B)=2/5, P(A∩B)=1/10 일 때 ⑴ P(B|A) ⑵ P(A|B).
  category: "조건부확률 정의에 그대로 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률의 정의 — P(B|A)=P(A∩B)/P(A) 직접 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 확률이 모두 주어져 정의에 한 번 대입하면 끝난다. 분모가 조건 사건이라는 것만 확인하는 단계.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 3 → ★1 유지.
  tier: star_1
  mechanism_primary: "P(A∩B)를 조건 사건의 확률로 나눈다 → ⑴ (1/10)/(1/2) ⑵ (1/10)/(2/5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{5}$ ⑵ $\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/88-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(B)·P(A∩B) 세 수만 바꾸면 된다. 제약: P(A∩B) ≤ min(P(A),P(B)) 이고 P(A)+P(B)-P(A∩B) ≤ 1 이어야 한다. 답이 기약분수로 떨어지도록 분모를 맞춘다."
    creative: "(1) P(A∩B) 대신 P(A∪B)를 주어 덧셈정리를 한 번 끼우면 ★2 (2) 세 값 중 하나를 미지수로 두고 P(B|A) 값을 주면 역방향 ★2 (3) P(Bᶜ|A) 처럼 여사건 조건부를 묻게 바꾸면 한 단계 추가 ★2."
```

```yaml
- id: GN-PROB-88-187
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    주사위 한 개에서 A=짝수의 눈, B=소수의 눈일 때 ⑴ P(A) ⑵ P(A∩B) ⑶ P(B|A).
  category: "표본공간 원소 나열 → 교집합 → 조건부확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주사위 시행에서 사건을 원소로 나열해 구하는 조건부확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={2,4,6}, B={2,3,5}, A∩B={2} 를 나열한 뒤 정의에 대입. 소수에 1 을 넣거나 2 를 빼는 T-표기 함정만 있다.
    소문항이 ⑴→⑵→⑶ 으로 손을 잡아 주어 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "A·B 를 원소로 나열 → A∩B={2} → P(B|A)=(1/6)/(1/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{1}{6}$ ⑶ $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/88-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사건의 정의(3의 배수·4 이상·홀수 등)를 바꾼다. 제약: A∩B 가 공집합이 되면 조건부확률이 0 이라 문항이 무의미해지므로 겹치는 사건으로 고른다."
    creative: "(1) 주사위 두 개로 바꿔 표본공간 36 에서 세면 Mₖ 상승 ★2 (2) A 와 B 가 서로 독립인지 확인하게 하면 개념 하나 추가 ★2 (3) P(A|B) 와 P(B|A) 를 함께 묻고 두 값이 다른 이유를 설명하게 하면 ★2(I-EQV d1)."
```

```yaml
- id: GN-PROB-88-188
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    P(A)=0.2, P(B)=0.6, P(B|A)=0.3 일 때 ⑴ P(A∩B) ⑵ P(A|B).
  category: "곱셈정리로 P(A∩B) 복원 → 다른 쪽 조건부확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈정리 P(A∩B)=P(A)P(B|A) 로 교집합을 복원한 뒤 방향 바꾸기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건부확률이 주어진 쪽에서 곱셈정리로 P(A∩B)=0.06 을 만든 뒤 분모만 P(B)로 갈아 끼운다.
    P(A|B) 와 P(B|A) 를 같은 값으로 착각하는 T-표기 함정 하나. 익히기 ★1.
  tier: star_1
  mechanism_primary: "P(A∩B)=P(A)P(B|A)=0.06 → P(A|B)=0.06/P(B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0.06$ ⑵ $0.1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/88-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(B)·P(B|A) 를 바꾼다. 제약: P(A)P(B|A) ≤ P(B) 여야 P(A|B) ≤ 1 이 된다. 소수로 주면 나눗셈이 깔끔해지도록 P(B) 를 0.6·0.5·0.4 중에서 고른다."
    creative: "(1) P(B) 대신 P(A∪B) 를 주면 덧셈정리 한 단계 추가 ★2 (2) P(A|B) 를 주고 P(B) 를 되묻는 역방향 ★2 (3) 백분율 문장제(전체의 몇 %)로 옮기면 해석 함정이 생겨 ★2."
```

```yaml
- id: GN-PROB-88-189
  page: 88
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    당첨 3개를 포함한 제비 10개에서 비복원으로 두 번 뽑을 때 ⑴ P(A) ⑵ P(B|A) ⑶ P(A∩B). (A=첫 번째 당첨, B=두 번째 당첨)
  category: "비복원 시행 → 조건부확률 → 곱셈정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비복원 추출에서 곱셈정리로 연속 사건의 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫 번째 당첨 뒤 남은 제비가 9개·당첨 2개로 줄어든다는 것만 반영하면 ⑶ 은 ⑴×⑵.
    분모를 10 으로 그대로 두는 T-범위 함정 하나. 소문항 유도가 있어 익히기 ★1.
  tier: star_1
  mechanism_primary: "P(A)=3/10 → 남은 9개 중 당첨 2개로 P(B|A)=2/9 → 곱셈정리로 P(A∩B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{3}{10}$ ⑵ $\dfrac{2}{9}$ ⑶ $\dfrac{1}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/88-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수와 당첨 개수(10개 중 3개 → 12개 중 4개, 8개 중 2개)를 바꾼다. 제약: 당첨이 2개 이상이어야 P(B|A) 가 0 이 아니고, 답이 기약분수로 떨어지도록 전체 수를 고른다."
    creative: "(1) 복원추출로 바꿔 P(B|A)=P(B) 가 되는 독립 사례와 비교시키면 ★2 (2) P(B) 자체를 묻게 하면 전확률 분해가 필요해 ★2 (3) 「두 번째가 당첨일 때 첫 번째도 당첨」 역조건부로 바꾸면 ★3(I-BW d2)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-89-e1
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ P(A)=0.2, P(B)=0.4, P(Aᶜ∩Bᶜ)=0.5 일 때 P(A|B). ⑵ P(A)=2/5, P(B)=1/2, P(B|A)=3/4 일 때 P(Aᶜ∩Bᶜ).
  category: "드모르간·덧셈정리로 P(A∩B) 왕복 → 조건부확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률의 계산 — P(Aᶜ∩Bᶜ)=1-P(A∪B) 를 거쳐 P(A∩B) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 P(Aᶜ∩Bᶜ)=1-P(A∪B) → 덧셈정리로 P(A∩B)=0.1 → 정의 대입, ⑵ 는 같은 사슬을 거꾸로 탄다.
    드모르간과 덧셈정리는 표준 공식이라 통찰로 세지 않았다. 왕복 구조로 Mₛ·Mₖ 가 2 라 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "P(Aᶜ∩Bᶜ)=1-P(A∪B) → 덧셈정리로 P(A∩B) → 조건부확률 정의(또는 역순)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0.25$ ⑵ $\dfrac{2}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/89-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 P(A)·P(B)·P(Aᶜ∩Bᶜ) 를, ⑵ 는 P(A)·P(B)·P(B|A) 를 바꾼다. 제약: P(A)+P(B)+P(Aᶜ∩Bᶜ) ≥ 1 이어야 P(A∩B) ≥ 0 이고, P(A∩B) ≤ min(P(A),P(B)) 를 넘지 않아야 한다."
    creative: "(1) P(Aᶜ∪Bᶜ) 를 주어 여사건을 한 겹 더 씌우면 ★2 (2) P(A∩Bᶜ)·P(Aᶜ∩B) 를 주고 P(A|B) 를 묻는 분할 버전 ★2 (3) 미지수를 하나 넣고 P(A|B) 값을 조건으로 주면 역방향 방정식 ★3."
```

```yaml
- id: GN-PROB-89-190
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(A)=3/8, P(B)=1/2, P(A∩B)=1/4 일 때 P(Bᶜ|Aᶜ).
  category: "여사건 조건부 — 분자·분모를 모두 여사건으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 조건부확률 P(Bᶜ|Aᶜ)=(1-P(A∪B))/(1-P(A))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 P(Aᶜ∩Bᶜ)=1-P(A∪B)=3/8, 분모 P(Aᶜ)=5/8 로 두 번 여사건을 취한다.
    여사건이 분자·분모에 동시에 걸려 M_total 6. 확인체크 ★1 출발에서 +1 → ★2.
  tier: star_2
  mechanism_primary: "덧셈정리로 P(A∪B)=5/8 → P(Aᶜ∩Bᶜ)=3/8 → P(Aᶜ)=5/8 로 나눈다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/89-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률을 바꾼다. 제약: P(A)+P(B)-P(A∩B) < 1 이어야 P(Aᶜ∩Bᶜ) 가 양수이고, P(A) < 1 이어야 분모가 살아 있다."
    creative: "(1) P(Bᶜ|A)·P(B|Aᶜ) 처럼 한쪽만 여사건으로 바꾸면 ★2 유지 (2) P(Bᶜ|Aᶜ) 값을 주고 P(A∩B) 를 역으로 묻기 ★3 (3) 벤 다이어그램 네 영역을 채우게 하면 표현 전환이 생겨 ★2(I-RT d1)."
```

```yaml
- id: GN-PROB-89-191
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(A)=2/3, P(A∩Bᶜ)=1/4 일 때 P(B|A).
  category: "A 를 A∩B 와 A∩Bᶜ 로 분할 → 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "P(A)=P(A∩B)+P(A∩Bᶜ) 분할로 교집합 복원 후 조건부확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(A∩B)=P(A)-P(A∩Bᶜ)=5/12 한 줄 뒤 P(A)로 나누면 끝. 공식 하나, 계산 두 줄.
    확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "P(A∩B)=P(A)-P(A∩Bᶜ) → P(B|A)=P(A∩B)/P(A)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/89-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 와 P(A∩Bᶜ) 를 바꾼다. 제약: P(A∩Bᶜ) < P(A) 여야 하고 분모를 통분하기 쉬운 값(12분모·8분모)으로 잡으면 답이 기약분수가 된다."
    creative: "(1) P(Bᶜ|A) 를 묻게 하면 바로 P(A∩Bᶜ)/P(A) 라 ★1 유지 (2) P(B) 를 함께 주고 P(A|B) 까지 묻기 ★2 (3) P(B|A)+P(Bᶜ|A)=1 을 이용해 한 줄로 끝내는 별해를 유도하면 ★2(I-EQV d1)."
```

```yaml
- id: GN-PROB-89-192
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(A)=1/3, P(A|B)=1/4, P(Aᶜ∩Bᶜ)=1/6 일 때 P(B).
  category: "조건부확률 값을 곱 형태로 되돌려 P(B) 방정식 세우기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(A|B)=1/4 를 P(A∩B)=P(B)/4 로 바꿔 미지수 P(B) 한 문자의 방정식으로 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건부확률이 조건으로 주어진 문항에서 P(B) 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(Aᶜ∩Bᶜ)=1/6 → P(A∪B)=5/6 → 덧셈정리로 P(A∩B)=P(B)-1/2, 여기에 P(A∩B)=P(B)/4 를 겹치면 일차방정식.
    조건부확률 값을 곱 형태로 되돌리는 동치 변환 1개(EQV d1)·미지수가 하나라 Mₐ 2. 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "P(A∪B)=1-P(Aᶜ∩Bᶜ) → 덧셈정리로 P(A∩B)를 P(B)로 표현 → P(A∩B)=P(B)/4 와 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/89-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(A|B)·P(Aᶜ∩Bᶜ) 를 바꾼다. 제약: P(A|B) 가 1 이 아니어야 일차방정식의 계수가 살아 있고, 해 P(B) 가 0<P(B)≤1 이며 P(A∩B) ≤ min(P(A),P(B)) 를 만족해야 한다."
    creative: "(1) 미지수를 P(A) 쪽으로 옮기면 같은 골조 ★2 (2) P(B|A) 를 주면 곱셈정리가 바로 P(A∩B) 를 주어 방정식이 사라져 ★1 (3) P(A|B)·P(B|A) 를 동시에 주고 두 미지수를 연립하면 ★3(I-CON d2)."
```

```yaml
- id: GN-PROB-90-e2
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    A반·B반 50명의 안경 착용 표에서, 임의로 뽑은 한 명이 안경을 쓴 학생일 때 그 학생이 A반일 확률.
  category: "2×2 표 → 조건 사건을 새 분모로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분할표에서 읽는 조건부확률 — 조건 사건의 합계를 분모로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안경 쓴 20명을 새 표본공간으로 잡고 그중 A반 16명을 세면 16/20. 계산은 한 번의 나눗셈이다.
    분모를 전체 50 으로 잡는 T-범위 함정이 이 단원 오답의 대표이고, 조건부확률 개념의 대표 예제라 필수 ★2 유지(통찰 0·M_total 4 라 −1 후보이기는 하다).
  tier: star_2
  mechanism_primary: "조건 사건 「안경 씀」의 합계 20 을 분모로 → A반 안경 16 을 분자로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-90-e2.png"
  latex: latex-bank/gn-prob/items/90-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 네 칸(16·4·9·21)을 바꾼다. 제약: 행·열 합계가 맞아떨어져야 하고 그림 라벨(A반·B반·안경 씀·안경 안 씀)은 크롭 이미지가 고정하므로 숫자만 바꿔도 새 그림이 필요하다."
    creative: "(1) 「A반 학생이었을 때 안경을 썼을 확률」로 조건을 뒤집으면 같은 표로 ★2 유지 (2) 한 칸을 x 로 비우고 조건부확률 값을 주면 역방향 ★2 (3) 표를 문장(전체의 몇 %)으로 바꾸면 해석 단계가 늘어 ★2 (4) 세 반(3×2 표)으로 늘리면 베이즈형으로 확장 ★3."
```

```yaml
- id: GN-PROB-90-193
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A형이 전체의 30%, A형 남학생이 전체의 18%일 때, 임의로 뽑은 한 명이 A형이면 남학생일 확률.
  category: "백분율 문장 → 조건부확률 한 번 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "백분율로 주어진 확률에서 조건부확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「전체의 18%」를 P(A형∩남)으로 읽는 것이 전부이고 나머지는 0.18/0.30 한 번.
    「A형 중 18%」로 오독하는 T-범위 함정만 있다. 확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "P(A형∩남)=0.18, P(A형)=0.30 → 나눈다"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/90-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 백분율(30%·18%)을 바꾼다. 제약: 교집합 백분율 ≤ 조건 사건 백분율 이어야 하고, 몫이 소수 한 자리나 기약분수로 떨어지게 고른다."
    creative: "(1) 「A형인 학생 중 60%가 남학생」을 주고 전체 대비 비율을 역으로 묻기 ★1 (2) 혈액형을 셋으로 늘려 전확률·베이즈로 확장 ★3 (3) 남학생 비율을 따로 주고 「남학생일 때 A형」을 묻는 역조건부 ★2(I-BW d1)."
```

```yaml
- id: GN-PROB-90-194
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A, B를 포함한 6명 중 3명의 대표를 뽑을 때, A가 뽑혔다면 B도 뽑혔을 확률.
  category: "조합 확률 → 조건부 표본공간 축소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합으로 뽑는 대표에서의 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(A포함)=C(5,2)/C(6,3)=1/2, P(A,B 모두 포함)=C(4,1)/C(6,3)=1/5 로 나누면 2/5.
    A 를 고정하고 남은 5명 중 2자리에 B 가 들어갈 확률 2/5 로 바로 보는 별해도 있다. 조합 계산이 들어가 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "P(A∩B)=C(4,1)/C(6,3), P(A)=C(5,2)/C(6,3) → 나눈다(또는 A 고정 후 남은 5명 중 2자리)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/90-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원과 뽑는 수(6명 중 3명 → 7명 중 3명, 8명 중 4명)를 바꾼다. 제약: 뽑는 수가 2 이상이어야 B 가 들어갈 자리가 있고, 답이 기약분수로 떨어지도록 조합수를 고른다."
    creative: "(1) 「A가 뽑히지 않았을 때 B가 뽑혔을 확률」로 바꾸면 여사건 한 겹 ★2 (2) 대표를 회장·부회장처럼 순서 있게 뽑으면 순열로 표현이 바뀌어 ★2(I-RT d1) (3) 「A 또는 B 중 적어도 한 명이 뽑혔을 때」를 조건으로 주면 여사건 분모가 생겨 ★3."
```

```yaml
- id: GN-PROB-90-195
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A·B 공연 선호도 표(A공연 남 5·여 x, B공연 남 20·여 10)에서 여자 관객 중 A공연을 선호할 확률이 1/6일 때 x의 값.
  category: "표의 미지수 → 조건부확률 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분할표에 미지수가 있는 조건부확률 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 「여자」이므로 분모는 여자 합계 x+10, 분자는 x. x/(x+10)=1/6 을 풀면 x=2.
    분모를 전체(35+x)로 잡는 T-범위 함정이 핵심이고 방정식은 일차 하나. 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "여자 합계 x+10 을 분모로 → x/(x+10)=1/6 → x=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-90-195.png"
  latex: latex-bank/gn-prob/items/90-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 고정 수(5·20·10)와 목표 확률 1/6 을 바꾼다. 제약: 해 x 가 자연수여야 하므로 목표 확률을 1/k 꼴로 두고 (k-1)x=10 처럼 정수해가 나오게 맞춘다. 그림 라벨(남자·여자·A공연·B공연)은 크롭이 고정한다."
    creative: "(1) 조건을 「A공연 선호」로 바꾸면 분모가 5+x 가 되어 같은 골조 ★2 (2) 미지수를 두 칸에 넣고 두 조건부확률을 주면 연립 ★3(I-CON d2) (3) 전체 인원을 함께 주고 x 의 범위를 묻게 하면 부등식이 생겨 ★3."
```

```yaml
- id: GN-PROB-91-e3
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    흰 공 6개와 검은 공 4개가 든 주머니에서 비복원으로 한 개씩 두 번 꺼낼 때 두 번 모두 흰 공일 확률.
  category: "곱셈정리 P(A∩B)=P(A)P(B|A) 직접 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 곱셈정리 — 비복원 연속 추출"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (6/10)×(5/9) 한 줄. 두 번째 시행에서 분모와 분자가 모두 1씩 줄어드는 것만 반영한다.
    계산은 ★1 수준이지만 곱셈정리를 처음 쓰는 대표 예제이고 비복원 T-범위 함정이 있어 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "P(첫 흰)=6/10 → 남은 9개 중 흰 5개로 P(둘째 흰|첫 흰)=5/9 → 곱한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/91-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "흰·검은 공 개수(6·4 → 5·3, 7·5)를 바꾼다. 제약: 흰 공이 2개 이상이어야 하고, 약분이 잘 되도록 전체 개수를 10·12 같은 값으로 잡는다."
    creative: "(1) 「두 번 모두 같은 색」으로 바꾸면 경우가 둘이라 ★2 (2) 세 번 연속으로 늘리면 곱이 세 개 ★2 (3) 「두 번째가 흰 공」만 묻게 하면 전확률 분해가 필요해 ★3 (4) 복원추출과 비교시키면 독립 개념이 붙어 ★2."
```

```yaml
- id: GN-PROB-91-196
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    상자 A(사과 3·귤 2), 상자 B(사과 2·귤 4) 중 하나를 임의로 택해 과일 1개를 꺼낼 때, 그것이 상자 B의 사과일 확률.
  category: "2단 시행 — 상자 선택 확률 × 조건부확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상자를 먼저 택하는 2단 시행에서 곱셈정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(B 택함)=1/2, P(사과|B)=2/6=1/3 → 곱해서 1/6. 상자 A 는 아예 쓰지 않는다.
    상자를 고르는 확률 1/2 를 빼먹고 2/6 으로 답하는 T-범위 함정이 핵심. 2단 시행 구조라 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "P(B 택함)=1/2 → P(사과|B)=2/6 → 곱셈정리로 곱한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/91-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상자의 과일 구성(3·2 / 2·4)을 바꾼다. 제약: 답이 기약분수가 되도록 상자 B 의 전체 개수를 4·6 처럼 약분되는 값으로 잡는다. 상자를 고르는 확률을 1/2 이 아닌 비(2:1)로 주면 Mₖ 가 오른다."
    creative: "(1) 「꺼낸 과일이 사과일 확률」로 바꾸면 전확률 분해 ★2 (2) 「사과였을 때 상자 B 였을 확률」로 뒤집으면 베이즈형 ★3(I-BW d1) (3) 주사위 눈으로 상자를 정하게 하면 앞단 확률이 4/6·2/6 으로 바뀌어 ★2."
```

```yaml
- id: GN-PROB-91-197
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ○ 카드 6장과 × 카드 3장에서 A, B가 차례로 서로 다른 카드를 한 장씩 뒤집을 때 A는 ○, B는 ×를 뒤집을 확률.
  category: "비복원 2단 시행 → 곱셈정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 카드를 뒤집는 비복원 시행의 곱셈정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(A가 ○)=6/9, A가 ○를 가져갔으므로 남은 8장 중 × 는 그대로 3장 → P(B가 ×|A가 ○)=3/8. 곱하면 1/4.
    「서로 다른 카드」를 놓쳐 분모를 9로 유지하는 T-범위 함정. 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "P(A가 ○)=6/9 → 남은 8장 중 × 3장으로 P(B가 ×|A가 ○)=3/8 → 곱한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/91-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "○·× 장수(6·3 → 5·4, 8·4)를 바꾼다. 제약: 전체가 2장 이상 남아야 하고 약분이 되도록 전체를 9·12 처럼 잡는다."
    creative: "(1) 「A와 B가 서로 다른 표시를 뒤집을 확률」로 바꾸면 경우 두 개 ★2 (2) 「B가 × 를 뒤집었을 때 A가 ○ 였을 확률」로 뒤집으면 베이즈형 ★3 (3) 세 사람으로 늘리면 곱이 세 개 ★2."
```

```yaml
- id: GN-PROB-92-e4
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    비 오는 날 매진 확률 1/2, 비 오지 않는 날 매진 확률 2/3, 내일 비 올 확률 40%일 때 내일 매진될 확률.
  category: "전확률 분해 P(E)=P(A∩E)+P(Aᶜ∩E)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 곱셈정리 — 배반인 두 원인으로 나눈 전확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    매진 사건을 「비 옴∩매진」과 「비 안 옴∩매진」으로 쪼개 (2/5)(1/2)+(3/5)(2/3)=3/5.
    두 조건부확률을 그냥 더하거나 평균 내는 T-단위 함정이 대표 오답. 분해가 교과서 표준 절차라 통찰로 세지 않고 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "매진을 비 옴·비 안 옴 두 배반 경우로 분해 → 각각 곱셈정리 → 더한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/92-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건부확률(1/2·2/3)과 앞단 확률(40%)을 바꾼다. 제약: 가중평균이므로 답은 반드시 두 조건부확률 사이에 놓인다. 답이 기약분수로 떨어지게 분모를 맞춘다."
    creative: "(1) 매진되지 않을 확률로 바꾸면 여사건 한 겹 ★2 (2) 「매진되었을 때 비가 왔을 확률」로 뒤집으면 베이즈형 ★3(I-BW d1) (3) 날씨를 맑음·흐림·비 셋으로 늘리면 항이 세 개 ★3 (4) 앞단 확률을 미지수로 두고 전체 확률을 주면 역방향 ★3."
```

```yaml
- id: GN-PROB-92-198
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    흰 공 5개와 검은 공 10개가 든 주머니에서 A, B가 차례로 비복원으로 한 개씩 꺼낼 때 B가 흰 공을 꺼낼 확률.
  category: "앞사람 결과를 모르는 두 번째 시행 → 전확률 분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비복원 추출에서 두 번째 사람이 특정 색을 꺼낼 확률(전확률)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 의 결과를 모르므로 A가 흰·A가 검 두 경우로 쪼개 (5/15)(4/14)+(10/15)(5/14)=1/3.
    결과가 P(A가 흰)=1/3 과 같다는 것이 이 유형의 학습 포인트이지만, 교과서 표준 풀이는 전확률 분해라 통찰로 세지 않았다. 확인체크 ★1 출발 +1 → ★2.
    [분류 이슈] 대칭성(어느 자리든 흰 공일 확률이 같다)으로 한 줄에 끝내는 갈래를 통찰(I-SYM)로 인정하면 ★3 후보.
  tier: star_2
  mechanism_primary: "A가 흰·A가 검으로 분해 → 각각 곱셈정리 → 더하면 1/3(=P(A가 흰))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/92-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "흰·검은 공 개수(5·10 → 4·8, 6·9)를 바꾼다. 제약: 답은 언제나 흰 공의 비율과 같아지므로 비율이 기약분수가 되게 잡으면 검산이 쉽다."
    creative: "(1) 세 번째 사람으로 늘려도 답이 같음을 확인시키면 ★3(I-SYM d2) (2) 「B가 흰 공을 꺼냈을 때 A도 흰 공이었을 확률」로 뒤집으면 ★3(I-BW d2) (3) A가 꺼낸 공을 보지 않고 버린다는 설정으로 바꾸면 같은 골조 ★2."
```

```yaml
- id: GN-PROB-92-199
  page: 92
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A반과 B반의 학생 수의 비가 6:5이고 A반의 10%, B반의 20%가 축구 대회에 참가했을 때, 임의의 한 학생이 참가했을 확률.
  category: "비 → 확률 변환 후 전확률 분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인원 비가 주어진 두 집단의 전확률(가중평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비 6:5 를 확률 6/11, 5/11 로 옮긴 뒤 (6/11)(1/10)+(5/11)(1/5)=8/55.
    비를 그대로 6·5 로 곱하거나 10%·20% 를 단순 평균하는 T-단위 함정. 확인체크 ★1 출발 +1 → ★2.
  tier: star_2
  mechanism_primary: "비 6:5 → P(A반)=6/11, P(B반)=5/11 → 각 참가율을 곱해 더한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{55}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/92-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 비(6:5)와 두 참가율(10%·20%)을 바꾼다. 제약: 답이 두 참가율 사이에 오는 가중평균이어야 하고, 비의 합이 분모가 되므로 11·7·9 처럼 약분 여부를 미리 확인한다."
    creative: "(1) 「참가한 학생이 B반일 확률」로 뒤집으면 베이즈형 ★3 (2) 반을 셋으로 늘리면 항이 셋 ★3 (3) 전체 참가율을 주고 B반 참가율을 역산하게 하면 일차방정식 ★3 (4) 비 대신 실제 인원을 주면 표 문항으로 바뀌어 ★2."
```

```yaml
- id: GN-PROB-93-e5
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    상자 A(흰 2·검 4), 상자 B(흰 3·검 2) 중 하나를 택해 공 2개를 동시에 꺼냈더니 흰 1·검 1이었을 때, 택한 상자가 A일 확률.
  category: "곱셈정리로 두 경로 확률 → 사후확률(베이즈형)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과(흰1검1)가 이미 일어난 상태에서 원인(어느 상자)을 역추적해야 하므로, 두 상자 경로의 확률을 모두 만든 뒤 그중 A 경로의 비율로 답한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 곱셈정리와 조건부확률 — 결과에서 원인을 되묻는 사후확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 경로 (1/2)(2·4/C(6,2)), B 경로 (1/2)(3·2/C(5,2)) 를 각각 만들고 A 경로를 둘의 합으로 나눈다.
    조합으로 「흰1검1」 확률을 만드는 단계와 방향을 뒤집는 단계가 겹쳐 M_total 7. 필수 ★2 출발 + 역방향 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "P(A∩결과)=P(A)P(결과|A), P(B∩결과) 도 같은 방식 → P(A|결과)=P(A∩결과)/(둘의 합)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8}{17}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/93-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상자의 공 구성(2·4 / 3·2)과 꺼내는 개수(2개)를 바꾼다. 제약: 각 상자에 흰·검이 1개 이상 있어야 「흰1검1」이 가능하고, C(n,2) 가 작아 분모 통분이 감당되는 크기(5~7개)로 둔다."
    creative: "(1) 결과를 「둘 다 흰 공」으로 바꾸면 한 상자 경로가 0 이 될 수 있어 ★3 유지 (2) 상자를 고르는 확률을 주사위로 편향시키면 앞단 가중치가 바뀌어 ★3 (3) 상자를 셋으로 늘리면 항이 셋 ★4 (4) 결과를 말해 주지 않고 「흰1검1일 확률」만 묻게 하면 전확률로 내려가 ★2."
```

```yaml
- id: GN-PROB-93-200
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    제품의 40%는 A기계, 60%는 B기계가 만들고 불량률이 각각 5%, 3%일 때, 임의로 택한 제품이 불량품이면 B기계에서 나왔을 확률.
  category: "불량품 전확률 → 사후확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "불량이라는 결과를 먼저 받아들이고 두 기계 경로 중 B 경로가 차지하는 비율로 되돌아간다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "불량품 검사형 사후확률(베이즈 기본형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (0.6)(0.03) 을 (0.4)(0.05)+(0.6)(0.03) 으로 나누면 18/38=9/19.
    역방향 통찰은 있지만 경로가 둘뿐이고 계산이 소수 곱 두 번이라 가볍다. 확인체크 ★1 출발 + 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "P(B∩불량)=0.6×0.03 → 전체 불량 확률로 나눈다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{19}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/93-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "생산 비율(40:60)과 두 불량률(5%·3%)을 바꾼다. 제약: 분모 P(A)p₁+P(B)p₂ 가 기약분수로 떨어지도록 두 곱의 합을 미리 확인한다. 불량률은 0보다 크게 둔다."
    creative: "(1) 「정상품이었을 때 A기계일 확률」로 바꾸면 여사건 곱이 들어가 ★3 (2) 기계를 셋으로 늘리면 항이 셋 ★3 (3) 불량률 하나를 미지수로 두고 사후확률 값을 주면 역방향 방정식 ★3(I-BW d2) (4) 검사 오류(양성 판정)를 섞으면 2단 베이즈 ★4."
```

```yaml
- id: GN-PROB-93-201
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주사위 눈이 4 이하면 주머니 A(빨강 2·파랑 3), 5 이상이면 주머니 B(빨강 3·파랑 3)에서 구슬 1개를 꺼낸다. 빨간 구슬이 나왔을 때 그것이 주머니 A에서 나왔을 확률.
  category: "주사위로 갈린 앞단 확률 → 사후확률"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "빨간 구슬이라는 결과에서 어느 주머니였는지를 역추적해 두 경로 확률의 비로 답한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "앞단 확률이 주사위로 편향된 사후확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞단이 1/2 이 아니라 4/6·2/6 이라는 점만 다르고 골조는 93-e5 와 같다. (2/3)(2/5) 를 (2/3)(2/5)+(1/3)(1/2) 로 나눠 8/13.
    주사위 조건을 확률로 옮기는 단계가 하나 더 있어 M_total 7. 확인체크 ★1 출발 + 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "주사위 조건 → P(A)=4/6, P(B)=2/6 → 각 경로의 빨강 확률 → A 경로 비율"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8}{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/93-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위 경계(4 이하)와 두 주머니의 구슬 구성(2·3 / 3·3)을 바꾼다. 제약: 경계가 1~5 사이여야 두 경로가 모두 살아 있고, 분모 두 곱의 합이 약분되도록 구슬 수를 고른다."
    creative: "(1) 동전 두 개의 앞면 수로 주머니를 정하게 하면 앞단이 1/4·3/4 로 바뀌어 ★3 (2) 「파란 구슬이 나왔을 때」로 바꾸면 같은 골조 ★2 (3) 꺼낸 구슬을 다시 넣지 않고 두 번 꺼내면 조합이 들어가 ★3 (4) 경계 숫자를 미지수로 두고 사후확률 값을 주면 역방향 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-94-202
  page: 94
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    P(A)=0.3, P(B)=0.2, P(A∪B)=0.4 일 때 P(A|Bᶜ).
  category: "덧셈정리로 P(A∩B) → 차집합 분할 → 여사건 조건부"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건이 조건인 조건부확률 P(A|Bᶜ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    덧셈정리로 P(A∩B)=0.1 → P(A∩Bᶜ)=P(A)-P(A∩B)=0.2 → P(Bᶜ)=0.8 로 나눠 0.25.
    공식 세 개를 순서대로 쓰는 절차형이고 분기가 없다. STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "P(A∩B)=P(A)+P(B)-P(A∪B) → P(A∩Bᶜ)=P(A)-P(A∩B) → P(Bᶜ)로 나눈다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/94-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률(0.3·0.2·0.4)을 바꾼다. 제약: max(P(A),P(B)) ≤ P(A∪B) ≤ P(A)+P(B) 여야 하고 P(B) < 1 이어야 분모가 산다. 소수 한 자리로 유지하면 답도 소수로 떨어진다."
    creative: "(1) P(Aᶜ|Bᶜ) 로 바꾸면 여사건이 분자에도 걸려 ★2 유지 (2) P(A∪B) 대신 P(Aᶜ∩Bᶜ) 를 주면 드모르간 한 겹 추가 ★2 (3) P(A|Bᶜ) 값을 주고 P(A∪B) 를 역산시키면 ★3."
```

```yaml
- id: GN-PROB-94-203
  page: 94
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    서로 배반인 두 사건 A, B에 대하여 P(A)=1/4, P(B)=1/3일 때 P(B|Aᶜ).
  category: "배반 조건을 포함관계로 동치 변환"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "배반(A∩B=∅)을 B⊂Aᶜ 로 읽어 P(B∩Aᶜ)=P(B) 임을 확정한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건에서의 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    배반이면 B 는 통째로 Aᶜ 안에 있으므로 분자가 P(B)=1/3, 분모는 P(Aᶜ)=3/4 → 4/9.
    배반을 P(A∩B)=0 으로만 쓰고 분자를 0 으로 놓는 오답이 흔하다. 동치 변환 통찰 1개지만 계산이 한 줄이라 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "배반 → B⊂Aᶜ → P(B|Aᶜ)=P(B)/P(Aᶜ)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/94-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(B) 를 바꾼다. 제약: 배반이므로 P(A)+P(B) ≤ 1 이어야 하고, P(A) < 1 이어야 분모가 산다. 분모를 12 로 통분되는 값으로 잡으면 답이 깔끔하다."
    creative: "(1) P(A|Bᶜ) 로 방향을 바꾸면 같은 골조 ★2 (2) 배반 대신 독립을 주면 P(B|Aᶜ)=P(B) 가 되어 비교 문항 ★2(I-EQV d1) (3) A, B 가 배반이면서 A∪B 의 여사건 확률을 함께 묻게 하면 ★2 (4) 세 사건이 서로 배반인 경우로 늘리면 ★3."
```

```yaml
- id: GN-PROB-94-204
  page: 94
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "STEP 1"
  summary: |
    20명의 진로활동 A·B 선택 표(1학년 7·5, 2학년 4·4)에서, 진로활동 B를 선택한 학생일 때 그 학생이 1학년일 확률. 5지선다.
  category: "분할표 → 조건 사건 합계를 분모로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분할표에서 읽는 조건부확률(기출 기본형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 「진로활동 B 선택」이므로 분모는 B 열 합계 9, 분자는 그중 1학년 5 → 5/9.
    분모를 20 이나 1학년 합계 12 로 잡는 T-범위 함정이 전부다. 기출이지만 통찰 0·M_total 4 라 +0, STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "B 열 합계 9 를 분모로 → 1학년·B 칸 5 를 분자로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-94-204.png"
  latex: latex-bank/gn-prob/items/94-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 네 칸(7·5·4·4)을 바꾼다. 제약: 합계가 20 처럼 깔끔하게 맞아야 하고 선택지 다섯 개가 서로 다른 기약분수가 되도록 분모(B 열 합계)를 9·11 같은 값으로 잡는다. 그림 라벨(1학년·2학년·진로활동 A·B)은 크롭이 고정한다."
    creative: "(1) 조건을 「1학년일 때 B를 선택할 확률」로 뒤집으면 분모가 12 로 바뀌어 ★2 유지 (2) 한 칸을 미지수로 두고 조건부확률 값을 주면 역방향 ★2 (3) 학년을 셋으로 늘리면 표가 3×2 ★2 (4) 두 조건부확률의 대소를 비교시키면 판단 단계가 붙어 ★3."
```

```yaml
- id: GN-PROB-94-205
  page: 94
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "STEP 1"
  summary: |
    주사위를 두 번 던져 나온 눈을 차례로 a, b라 할 때 a×b가 4의 배수라는 조건에서 a+b≤7일 확률. 5지선다.
  category: "조건 사건을 경우로 세어 표본공간 축소"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ab가 4의 배수가 되는 경우를 「한쪽이 4의 배수」와 「양쪽 모두 짝수」로 갈라 중복 없이 빠짐없이 센다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주사위 두 번에서 조건 사건을 세어 구하는 조건부확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    36가지에서 ab가 4의 배수인 순서쌍을 먼저 모으고, 그 안에서 a+b≤7 인 것만 다시 센다. 분모가 36 이 아니라 조건 사건의 개수로 바뀌는 것이 핵심.
    (2,2)·(2,6)·(6,2)·(6,6) 처럼 「양쪽 모두 짝수」 경우를 빠뜨리는 T-범위 함정과 중복 계수 T-경계 함정이 겹쳐 Mₜ 2, 세는 양이 많아 Mₖ 3.
    STEP 1 ★2 출발 + 기출 + 분기 통찰 1 + M_total 8 → ★3.
  mechanism_primary: "ab가 4의 배수인 순서쌍을 분류해 세기 → 그 안에서 a+b≤7 을 세기 → 두 개수의 비"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/94-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 조건(4의 배수 → 3의 배수·6의 배수)과 합 조건(a+b≤7 → a+b≥8, a+b 가 짝수)을 바꾼다. 제약: 조건 사건의 개수가 0 이 아니어야 하고 선택지가 서로 다른 기약분수가 되도록 두 개수의 비를 확인한다. 주사위 눈 범위 1~6 은 고정."
    creative: "(1) 조건과 결론을 맞바꿔 「a+b≤7일 때 ab가 4의 배수」로 하면 분모가 21 로 바뀌어 ★3 유지 (2) 주사위를 세 번 던지면 경우 수가 216 으로 늘어 ★4 (3) a-b 의 절댓값 조건으로 바꾸면 대칭 착안이 붙어 ★3(I-SYM d1) (4) 배수 조건을 「ab가 제곱수」로 바꾸면 분류가 어려워져 ★4."
```

```yaml
- id: GN-PROB-94-206
  page: 94
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    1~12이 적힌 12장의 카드를 뒤집은 채로 두 번 뒤집을 때(뒤집은 카드는 그대로 둔다) 두 번 모두 3의 배수일 확률.
  category: "비복원 2회 추출 → 곱셈정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비복원 연속 추출에서 두 번 모두 조건을 만족할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3의 배수는 3·6·9·12 넉 장. (4/12)(3/11)=1/11 한 줄.
    「그대로 둔다」를 복원으로 오독해 (1/3)² 로 답하는 T-범위 함정이 유일한 변별점. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "3의 배수 4장 확인 → P(첫 3의 배수)=4/12 → P(둘째|첫)=3/11 → 곱한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/94-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수(12)와 배수 조건(3의 배수)을 바꾼다. 제약: 해당하는 카드가 2장 이상이어야 하고, 전체 수를 12·15·20 처럼 배수 개수가 깔끔한 값으로 둔다."
    creative: "(1) 「적어도 한 장이 3의 배수」로 바꾸면 여사건 ★2 (2) 「두 수의 합이 3의 배수」로 바꾸면 나머지 분류가 필요해 ★3(I-MI d2) (3) 세 번 뒤집으면 곱이 셋 ★2 (4) 「두 번째가 3의 배수였을 때 첫 번째도 3의 배수」로 뒤집으면 ★3(I-BW d2)."
```

```yaml
- id: GN-PROB-95-207
  page: 95
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    신입생의 40%가 기숙사를 신청했고 신청자의 45%, 미신청자의 55%가 남학생일 때, 임의로 택한 신입생이 남학생일 확률.
  category: "전확률 분해(가중평균)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 집단으로 나뉜 모집단의 전확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (0.4)(0.45)+(0.6)(0.55)=0.18+0.33=0.51. 92-e4·92-199 와 완전히 같은 골조를 소수로 옮긴 것.
    45%·55% 를 단순 평균하는 T-단위 함정만 있다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "신청·미신청 두 배반 경우로 분해 → 각 남학생 비율을 곱해 더한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{51}{100}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/95-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞단 비율(40:60)과 두 남학생 비율(45%·55%)을 바꾼다. 제약: 답은 두 비율 사이의 가중평균이라 45~55% 범위를 벗어날 수 없다. 백분율을 5의 배수로 두면 분모 100 으로 떨어진다."
    creative: "(1) 「남학생이었을 때 기숙사를 신청했을 확률」로 뒤집으면 베이즈형 ★3(I-BW d1) (2) 집단을 셋으로 늘리면 항이 셋 ★3 (3) 전체 남학생 비율을 주고 미신청자 남학생 비율을 역산시키면 일차방정식 ★3 (4) 여학생 비율로 바꿔 물으면 여사건 한 겹 ★2."
```

```yaml
- id: GN-PROB-95-208
  page: 95
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    ♥ 4장·◆ 2장에서 유리가 먼저 한 장, 수지가 남은 카드에서 한 장을 꺼냈다. 수지의 카드가 ♥일 때 유리의 카드도 ♥일 확률.
  category: "나중 결과를 조건으로 앞 시행을 되묻는 사후확률"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "시간 순서와 반대로 두 번째 사람의 결과를 조건으로 삼아 첫 번째 사람의 카드를 역추적한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시간을 거스르는 조건부확률(두 번째 결과 → 첫 번째 원인)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자 P(둘 다 ♥)=(4/6)(3/5), 분모 P(수지 ♥)=(4/6)(3/5)+(2/6)(4/5) 로 만들어 나누면 3/5.
    분모를 4/6 으로 두거나 조건을 무시하고 3/5 를 그냥 답하는 함정이 있다(우연히 값이 같아 더 헷갈린다).
    STEP 1 ★2 출발 + 역방향 통찰(d2) + M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "P(유리♥∩수지♥) 와 P(수지♥) 를 각각 전확률로 만들고 나눈다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/95-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "♥·◆ 장수(4·2 → 5·3, 6·4)를 바꾼다. 제약: ♥ 가 2장 이상이어야 분자가 살고, 전체가 6·8 처럼 약분되는 값이면 답이 기약분수로 떨어진다."
    creative: "(1) 「수지가 ◆를 꺼냈을 때 유리가 ♥였을 확률」로 바꾸면 같은 골조 ★3 (2) 세 사람으로 늘려 마지막 사람의 결과를 조건으로 주면 분기가 넷 ★4 (3) 유리의 카드를 보지 않고 버린다는 설정을 명시하면 표현만 바뀌어 ★3 유지 (4) 수지가 두 장을 동시에 꺼내면 조합이 들어가 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-95-209
  page: 95
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    남 18명·여 16명이 중국어와 일본어 중 하나를 듣고, 남학생 중 중국어가 12명, 여학생 중 일본어가 7명이다. 중국어 수업을 받는 학생일 때 여학생일 확률.
  category: "빈 칸을 역산해 분할표 복원 → 조건부확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일부만 주어진 분할표를 채운 뒤 구하는 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여학생 중국어 16-7=9 를 채우면 중국어 합계 12+9=21, 답은 9/21=3/7.
    주어지지 않은 칸을 여사건으로 채우는 한 단계가 전부이고 분기·통찰이 없다. 벤더 STEP 2(★3 출발)이지만 통찰 0·실질 2단계라 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "여학생 중국어=16-7 → 중국어 합계 → 여학생 중국어/중국어 합계"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/95-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남·여 인원(18·16)과 주어진 두 칸(12·7)을 바꾼다. 제약: 각 칸이 0 이상이어야 하고 답이 기약분수로 떨어지도록 중국어 합계를 21·14 처럼 잡는다."
    creative: "(1) 조건을 「일본어를 받는 학생일 때 남학생」으로 바꾸면 같은 골조 ★2 (2) 주어진 칸 하나를 미지수로 두고 조건부확률 값을 주면 역방향 ★3 (3) 과목을 셋으로 늘리면 표가 2×3 ★3 (4) 두 조건부확률의 대소 비교를 묻게 하면 판단 단계가 붙어 ★3."
```

```yaml
- id: GN-PROB-95-210
  page: 95
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    1등 1개·2등 3개를 포함한 제비 10개에서 2개를 동시에 뽑았더니 당첨 제비가 나왔을 때, 그 안에 2등 당첨 제비가 포함되어 있을 확률.
  category: "여사건으로 조건 사건 계산 + 포함관계로 교집합 확정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「당첨 제비가 나왔다」를 직접 세지 않고 여사건(둘 다 꽝)으로 돌리는 갈래를 고른다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2등 포함 사건이 조건 사건에 통째로 들어가므로 교집합 확률이 곧 P(2등 포함)임을 알아 분자를 확정한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "「적어도 하나」가 조건인 조합 추출의 조건부확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모 P(당첨 하나 이상)=1-C(6,2)/C(10,2), 분자 P(2등 포함)=1-C(7,2)/C(10,2). 분자에 굳이 조건을 다시 곱하지 않아도 되는 것이 요점.
    조건과 결론이 모두 「적어도 하나」 꼴이라 직접 세면 경우가 늘어나는 T-범위·중복 T-경계 함정이 있다.
    통찰 2개지만 둘 다 표준 여사건·포함관계라 +1 하지 않고 STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "여사건으로 P(당첨 하나 이상) → 2등 포함 ⊂ 당첨이므로 분자=1-C(7,2)/C(10,2) → 나눈다"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/95-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 제비 수(10), 1등·2등 개수(1·3), 뽑는 개수(2)를 바꾼다. 제약: 꽝이 2개 이상이어야 여사건이 0 이 아니고, C(n,2) 가 손계산 범위(n ≤ 12)에 머물도록 한다."
    creative: "(1) 조건을 「1등이 나왔을 때」로 바꾸면 분모가 훨씬 작아져 ★3 유지 (2) 「2등만 포함(1등은 없음)」으로 결론을 좁히면 분자에 배제 조건이 붙어 ★4(I-VF d2) (3) 3개를 동시에 뽑게 하면 여사건 계산이 한 단 무거워져 ★4 (4) 한 개씩 비복원으로 두 번 뽑는 순서형으로 바꾸면 표현 전환 ★3(I-RT d1)."
```

```yaml
- id: GN-PROB-95-211
  page: 95
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    빨간 구슬 n개와 파란 구슬 4개에서 비복원으로 두 번 꺼낼 때 첫 번째 빨강·두 번째 파랑일 확률이 1/5이다. 모든 n의 값의 합.
  category: "곱셈정리 → n에 대한 이차방정식 → 두 근 모두 채택"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률 값이 결과로 주어져 있어 곱셈정리 식을 세운 뒤 n 을 역추적한다"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식의 두 근이 모두 자연수 조건을 만족해 어느 하나를 버릴 수 없고, 「모든 n의 합」이라는 발문이 두 해를 모두 쓰게 한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "확률 조건에서 개수 n 을 역산하는 이차방정식형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n/(n+4)·4/(n+3)=1/5 를 정리하면 n 에 대한 이차방정식이 되고 두 근이 모두 자연수라 합을 답한다.
    분모가 n+4 와 n+3 으로 다르다는 비복원 처리(T-범위)와 근을 하나만 쓰는 실수가 함정. 역방향+분기 통찰 2개·M_total 8 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "P=n/(n+4)·4/(n+3)=1/5 → 이차방정식 정리 → 자연수 근 두 개를 모두 더한다"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/95-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파란 구슬 수(4)와 목표 확률(1/5)을 바꾼다. 제약: 정리된 이차방정식이 인수분해되고 두 근이 모두 양의 정수여야 「모든 n의 합」이 의미를 갖는다. 근이 하나만 자연수가 되면 발문을 「n의 값」으로 바꿔야 한다."
    creative: "(1) 「첫 번째 파랑·두 번째 빨강」으로 바꾸면 같은 식이 나와 ★3 유지 (2) 「서로 다른 색」으로 바꾸면 항이 둘이라 식이 무거워져 ★3 (3) 근 중 하나가 조건 위배로 기각되게 수를 조정하면 사후 검증이 생겨 ★4(I-VF d2) (4) 복원추출로 바꾸면 분모가 같아져 이차식이 단순해지고 ★2."
```

```yaml
- id: GN-PROB-96-212
  page: 96
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    주머니 A(흰 3·검 5), 주머니 B(흰 4·검 4) 중 하나를 택해 공 2개를 동시에 꺼낼 때 두 공의 색이 서로 다를 확률.
  category: "주머니별 조합 확률 → 전확률 분해"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주머니를 택한 뒤 조합으로 꺼내는 시행의 전확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 에서 서로 다른 색은 3·5/C(8,2), B 에서는 4·4/C(8,2) 이고 각각 1/2 을 곱해 더하면 31/56.
    「서로 다른 색」을 곱의 꼴로 세는 단계, 주머니 선택 확률을 곱하는 단계, 더하는 단계로 세 단계이고 분기 선택은 없다.
    통찰 0 이지만 M_total 7 이라 −1 하지 않고 STEP 2 ★3 유지(절차형 천장 ★4 안쪽).
  tier: star_3
  mechanism_primary: "각 주머니의 P(서로 다른 색)=흰×검/C(8,2) → 주머니 선택 확률 1/2 씩 곱해 더한다"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{31}{56}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/96-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주머니의 공 구성(3·5 / 4·4)과 꺼내는 개수(2)를 바꾼다. 제약: 각 주머니에 두 색이 모두 있어야 하고, 두 주머니의 전체 개수를 같게 두면 분모 C(n,2) 가 공통이라 계산이 가볍다. 다르게 두면 Mₖ 가 오른다."
    creative: "(1) 「같은 색일 확률」로 바꾸면 여사건 ★3 유지 (2) 「서로 다른 색이었을 때 주머니 A였을 확률」로 뒤집으면 베이즈형 ★4(I-BW d2) (3) 주머니를 동전·주사위로 편향되게 고르면 가중치가 바뀌어 ★3 (4) 3개를 동시에 꺼내면 경우가 늘어 ★4."
```

```yaml
- id: GN-PROB-96-213
  page: 96
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    양면 빨강·양면 파랑·한 면씩인 카드가 한 장씩 든 주머니에서 한 장을 꺼내 놓았더니 보이는 면이 빨간색이었을 때, 다른 면도 빨간색일 확률.
  category: "표본공간을 카드가 아니라 면으로 전환"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "카드 3장이 아니라 빨간 면 3개를 표본공간으로 옮겨 세야 한다. 카드 단위로 세면 1/2 이라는 틀린 답이 나온다"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "표본공간을 면 단위로 바꿔야 하는 조건부확률(베르트랑 상자형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    빨간 면은 모두 3개이고 그중 2개는 양면 빨강 카드의 면이므로 2/3. 계산은 한 줄이지만 표현 전환이 답을 좌우한다.
    「남은 카드는 두 장이니 1/2」이라는 직관이 강하게 작동해 T-범위·T-표기 함정이 동시에 걸린다.
    STEP 2 ★3 출발 + depth 3 통찰 → ★4. I-RT 가 있어 ★4 저노출 게이트는 통과.
    [분류 이슈] M_total 6·계산 한 줄로 노동량은 ★1~2 수준인데 통찰 깊이만 ★4 라 M 과 I 가 크게 갈린다.
  tier: star_4
  mechanism_primary: "빨간 면 3개를 표본공간으로 → 그중 뒷면도 빨강인 면 2개 → 2/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/96-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 구성(RR·BB·RB 각 1장)을 개수로 바꾼다(RR 2장·RB 1장 등). 제약: 면 단위로 세므로 각 카드가 면 2개를 기여한다는 전제가 유지되어야 하고, 한쪽 색 면이 2개 이상이어야 문항이 성립한다."
    creative: "(1) 색을 셋으로 늘려 세 종류 카드를 섞으면 면 세기가 무거워져 ★4 유지 (2) 주사위 6면 중 특정 면 배치 문제로 옮기면 같은 골조·다른 외피 ★4 (3) 카드를 두 장 꺼내 보이는 두 면이 모두 빨강인 경우로 바꾸면 조합이 붙어 ★5 후보 (4) 카드 단위 계산과 면 단위 계산을 나란히 제시하고 틀린 쪽을 고르게 하면 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-96-214
  page: 96
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    1~10이 적힌 공 10개에서 3개를 꺼내 작은 것부터 a, b, c라 할 때, b-a≥5라는 조건에서 c-a≥8일 확률.
  category: "부등식 조건을 만족하는 순서쌍 세기 → 조건부확률"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 계산을 포기하고 b-a≥5 를 만족하는 (a,b,c) 삼중쌍의 개수 세기로 문제를 통째로 옮긴다(분모 C(10,3)이 약분돼 사라진다)"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 의 값마다 b 의 가능 범위와 c 의 개수가 달라지므로 a=1,2,3,4 로 분기해 빠짐없이 센다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "크기 순으로 놓은 세 수의 부등식 조건에서의 조건부확률(경우 세기형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 사건과 목표 사건이 모두 「개수」라 분모 C(10,3) 이 약분되어 두 개수의 비만 남는다. a 를 기준으로 분기해 b·c 를 세는 것이 유일한 실행 경로.
    a 의 상한(b-a≥5 이면 a ≤ 5)과 c>b 경계를 놓치는 T-범위·T-경계 함정이 겹쳐 Mₜ 2, 세는 양이 많아 Mₖ 3.
    실력 UP ★4 출발 · 통찰 2 → ★4 유지(★5 요건인 통찰 3개·SC/VF/SYM/XU 는 미충족).
  tier: star_4
  mechanism_primary: "b-a≥5 인 (a,b,c) 개수를 a 로 분기해 세기 → 그중 c-a≥8 인 개수 → 두 개수의 비"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/96-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(10)와 두 간격 조건(b-a≥5, c-a≥8)을 바꾼다. 제약: 조건 사건이 비지 않도록 간격이 전체 범위보다 작아야 하고, 두 개수의 비가 기약분수로 떨어지게 조정한다. 결론 조건은 조건 사건보다 좁아야 확률이 1 미만이다."
    creative: "(1) 조건과 결론을 맞바꾸면 분모가 훨씬 커져 ★4 유지 (2) 공을 4개 꺼내 a<b<c<d 로 늘리면 분기가 한 층 깊어져 ★5 후보 (3) 「b-a 와 c-b 가 모두 3 이상」처럼 두 간격을 동시에 묶으면 조건 통합이 붙어 ★4(I-CON d2) (4) 간격 조건을 등차수열 조건으로 바꾸면 패턴 발견형 ★4(I-PD d2)."
```

```yaml
- id: GN-PROB-96-215
  page: 96
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 UP"
  summary: |
    주머니 A·B에 각각 흰 3·검 1이 있다. [실행 1] 동전이 앞면이면 A에서 2개, 뒷면이면 3개를 꺼내 B에 넣고 [실행 2] B에서 5개를 꺼내 A에 넣는다. 실행 2 후 B에 흰 공이 남아 있지 않을 때, 실행 1에서 B에 넣은 공 중 흰 공이 2개였을 확률이 q/p일 때 p+q의 값.
  category: "다단 시행의 사후확률 — 분기 나열·불가능 분기 기각·조건 사건 재구성"
  M: {s: 3, k: 3, a: 2, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "동전 결과(2개/3개)와 옮긴 공의 색 구성으로 네 갈래가 생기고, 「흰 공이 2개」라는 결론이 앞면-흰2 갈래와 뒷면-흰2검1 갈래에 걸쳐 있어 두 갈래를 모두 분자에 넣어야 한다"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "검은 공이 전체에 2개뿐이므로 뒷면-흰3 갈래에서는 B에 남는 2개가 모두 검은색일 수 없어 그 갈래가 확률 0 으로 기각된다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "실행 2 이후의 결과(B에 흰 공이 없음)를 조건으로 실행 1 의 구성을 역추적한다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "두 단계 시행의 결과 조건에서 1단계 구성을 되묻는 사후확률(다분기·기각 포함)"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    갈래마다 B 의 공 개수(6개 또는 7개)가 달라 남는 공 수(1개 또는 2개)가 바뀌고, 남는 공이 모두 검은색일 확률을 갈래별로 따로 만들어야 한다. 그 뒤 「흰 공 2개」에 해당하는 두 갈래의 합을 전체 조건 확률로 나눈다.
    「흰 공이 2개」가 앞면 갈래만이 아니라는 독해, 검은 공 총 2개 제약에 의한 갈래 기각, 시간 역방향 조건이 한 문항에 겹친다.
    실력 UP ★4 출발 + 통찰 3개(I-MI·I-VF·I-BW, 저노출 유형 I-VF 포함) → ★5. novelty_score 는 이 자산 규약상 전 문항 0 이라 §2.14 참신도 게이트는 적용하지 않는다.
    [분류 이슈] 벤더 라벨은 실력 UP(★4 출발)이고 ★5 는 이 범위에서 유일하므로, 카탈로그 정비 때 ★4/★5 경계를 재확인할 것.
  tier: star_5
  mechanism_primary: "동전×옮긴 공 구성으로 갈래 나열 → 갈래별 P(B에 남는 공이 모두 검정) 계산(불가능 갈래는 0) → 흰 2개 갈래의 합 / 전체 합 → p+q"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/96-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주머니의 초기 구성(흰 3·검 1), 옮기는 개수(2개/3개), 실행 2 에서 꺼내는 개수(5개)를 바꾼다. 제약: 실행 2 에서 꺼내는 개수가 B 의 공 수보다 작아야 남는 공이 생기고, 검은 공 총 개수가 남는 공 수보다 적으면 그 갈래가 통째로 0 이 되므로 기각 갈래가 하나쯤 생기도록 의도적으로 맞춘다. 답을 p+q 로 묻는 한 q/p 가 기약분수가 되어야 한다."
    creative: "(1) 동전 대신 주사위로 옮기는 개수를 정하면 앞단 가중치가 바뀌어 ★5 유지 (2) 조건을 「B에 검은 공이 남아 있지 않을 때」로 뒤집으면 기각되는 갈래가 달라져 ★4~5 (3) 실행 2 를 없애고 실행 1 직후 B의 구성을 조건으로 주면 분기가 단순해져 ★3 (4) 묻는 것을 확률 값 자체로 바꾸면 p+q 포장이 빠져 ★4 (5) 주머니를 셋으로 늘리면 갈래가 배로 늘어 손계산 범위를 벗어난다."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 6 · ★2 20 · ★3 6 · ★4 2 · ★5 1
- 통찰형 12 · 절차형 23 · premium 0
- 통찰 유형 분포(연 15개): I-BW 5 · I-MI 3 · I-EQV 3 · I-RT 2 · I-SC 1 · I-VF 1
- 구역별: 개념원리 익히기 4(전부 ★1) · 필수·발전 예제 17(★1 2 · ★2 14 · ★3 1) · STEP 1 7(★2 5 · ★3 2) · STEP 2 5(★2 1 · ★3 3 · ★4 1) · 실력 UP 2(★4 1 · ★5 1)
- type_hint 상위: 「조건부확률 정의·여사건 직접 계산」 8 · 「전확률 분해(가중평균)」 6 · 「사후확률(베이즈형)」 6 · 「분할표·백분율에서 읽는 조건부확률」 5 · 「비복원 연속 추출의 곱셈정리」 5 · 「조합·경우 세기 기반」 5
- 그림: 3문(`crop:fig-90-e2.png` · `crop:fig-90-195.png` · `crop:fig-94-204.png`) — 모두 분할표 크롭이라 숫자를 바꾸려면 그림을 다시 만들어야 한다
- 대상층: 하위권 6 · 중하위권 16 · 중위권 6 · 중상위권 6 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 M 층과 I 층이 크게 갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-92-198 | 교과서 표준 풀이는 전확률 분해(절차형)지만, 「어느 자리든 흰 공일 확률이 같다」는 대칭 갈래를 통찰(I-SYM)로 인정하면 통찰형이 된다. 이 파일은 교과서 풀이를 기준으로 절차형 ★2 로 두었다 | ★2 / ★3 |
| GN-PROB-96-213 | 계산은 한 줄(M_total 6)인데 표본공간을 면으로 옮기는 통찰 하나가 답 전체를 좌우한다(직관 오답 1/2). M 층으로는 ★1~2, I 층으로는 ★4 | ★3 / ★4 |
| GN-PROB-96-215 | 이 범위 유일한 ★5. 통찰 3개 + I-VF 로 요건은 충족하나 벤더 라벨은 실력 UP(★4 출발)이고 novelty_score 게이트는 이 자산 규약상 적용하지 않았다 | ★4 / ★5 |
| GN-PROB-90-e2 | 필수 예제(★2 출발)이나 통찰 0 · M_total 4 로 −1 후보. 조건 사건을 분모로 잡는 단원 대표 함정 때문에 ★2 로 유지했다 | ★1 / ★2 |
| GN-PROB-95-209 | 벤더 STEP 2(★3 출발)이나 빈 칸 역산 한 단계뿐이라 ★2 로 내렸다. 같은 구역의 다른 네 문항과 층이 다르다 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「분할표에서 읽는 조건부확률」(90-e2·90-195·94-204·95-209) — 표 해석과 미지수 역산이 함께 묶이는 독립 유형이고 그림 자산이 붙는다. ② 「사후확률(베이즈형)」(93-e5·93-200·93-201·95-208·96-212 변형·96-215) — 이 단원 ★3 이상의 대부분이 여기서 나오므로 base ★ 3 으로 별도 등재가 필요하다. ③ 「표본공간 전환형」(96-213) — 문항 수는 적지만 I-RT depth 3 짜리 저노출 유형이라 ★4~5 슬롯 재료로 따로 둔다. ④ 「확률 조건에서 개수 역산」(90-195·95-211) — 미지수가 분모에 들어가 일차·이차방정식으로 가는 골조.
- **통합해도 될 유형**: 「조건부확률의 정의 대입」과 「여사건 조건부확률」(88-186·88-188·89-e1·89-190·89-191·89-192·94-202·94-203)은 여사건을 몇 겹 씌우는가만 다르므로 한 유형 아래 난이도 층(★1~2)으로 묶는 편이 낫다. 「비복원 연속 추출의 곱셈정리」(88-189·91-e3·91-197·94-206)와 「2단 시행(상자·주머니 선택) 곱셈정리」(91-196·93-201)도 앞단 확률이 상수냐 조건부냐의 차이뿐이라 한 유형의 두 변형으로 충분하다.
- **base ★ 제안**: 정의·여사건 계산 ★1~2 · 분할표 ★2 · 곱셈정리(비복원·2단) ★2 · 전확률 분해 ★2 · 사후확률 ★3 · 경우 세기 기반 조건부확률 ★3 · 표본공간 전환 ★4 · 다단 시행 사후확률 ★5.
