---
name: mechanism-데이터-GN-CM2-17
description: 개념원리 공통수학2 17 집합의 연산 법칙(1/1 · 10문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정 · 학생용) · 전사본 latex-bank/gn-cm2
  section: 17 집합의 연산 법칙
  unit_code: "17"
  part: "1/1"
  extract_range: "152~155쪽 · 152-e9~155-375"
  total_problems: 10
  unit_total: 10
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학2 · 17 집합의 연산 법칙 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 17단원 「집합의 연산 법칙」 152~155쪽 10문항 전수를 정독해 옮긴 mechanism 데이터다. 구역은 두 개로, 「필수·발전 예제」 6문(필수 예제 2 + 확인체크 유제 4)과 「특강」 4문(특강 예제 2 + 확인체크 유제 2)이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — tag 「필수」 예제는 ★2, 「특강」은 ★3 을 출발점으로 삼고, 통번호 「확인체크」는 바로 앞 예제의 유제이므로 그 예제와 같거나 한 단 아래에서 출발시킨 뒤 M_total·통찰로 ±1 조정했다. 이 단원은 구체 수치가 거의 없고 전체집합의 부분집합 $A$, $B$, $C$ 를 다루므로 Mₐ 가 대부분 3이고, 대신 Mₖ 는 1에 머문다(계산이 아니라 법칙 적용 순서가 난이도의 전부다).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 추상 집합 단원이라 `variation_notes.numeric` 은 「바꿀 수 있는 수」가 아니라 집합의 개수, 연산 조합, 배수 집합의 $k$ 값 같은 구조 파라미터와 그 제약을 적었다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-152-e9
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    전체집합 U 의 두 부분집합 A, B 에 대하여 세 식을 집합의 연산 법칙으로 간단히 하기.
    ⑴ A 와 (A-B) 의 여집합의 교집합 ⑵ A 의 여집합과 (B-A) 의 여집합의 합집합 ⑶ B 에서 (B-A)∪(B-A의 여집합) 을 뺀 집합.
  category: '차집합을 $\cap$ 여집합으로 고쳐 쓰기 → 드모르간 → 분배법칙 → 여집합·항등 법칙'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 연산 법칙으로 식 간단히 하기(차집합·드모르간·분배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 A-B 를 A∩B^c 로 바꾼 뒤 드모르간과 분배법칙을 한 번씩 쓰면 끝나는 같은 사슬이다.
    ⑶ 은 (B-A)∪(B-A^c)=B 를 보는 단계가 하나 더 있지만 분배법칙의 직접 적용이라 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 7 이라 하향 조건(통찰 0 이고 M_total ≤ 5)에도 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: '차집합을 $\cap$ 여집합으로 고쳐 쓰기 → 드모르간 → 분배법칙 → $A\cap A^c=\varnothing$ · $A\cup A^c=U$ 로 정리'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑴ $A\cap B$ ⑵ $U$ ⑶ $\varnothing$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/152-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 것은 수가 아니라 구조 파라미터다 — 집합의 개수(2개 → 3개), 바깥 연산(∩ ↔ ∪), 여집합을 씌우는 위치. 제약: 간단히 한 결과가 A∩B · A · U · ∅ 처럼 한 덩어리로 떨어지는 조합만 고른다(A∪B^c 처럼 남으면 답 표기가 흔들리고 채점 기준이 갈린다)."
    creative: "(1) A, B 를 원소가 적힌 유한집합으로 주고 결과를 원소나열법으로 쓰게 하기(★1 · 절차형 유지) (2) 간단히 한 결과가 ∅ 가 되게 하는 A, B 의 조건을 묻기(★2~3 · I-EQV 1개 추가) (3) 세 집합 A, B, C 로 늘려 결합법칙·분배법칙을 2회 쓰게 하면 M_s 가 올라 ★3."
```

```yaml
- id: GN-CM2-152-370
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합 U 의 세 부분집합 A, B, C 에 대하여 두 식을 간단히 하기.
    ⑴ (A-B의 여집합)∪(B-A) ⑵ {A∩(A의 여집합∪B)}∪{B∩(B∪C)}.
  category: '차집합 고쳐 쓰기 → 분배법칙 → 흡수법칙'
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 연산 법칙으로 식 간단히 하기(차집합·드모르간·분배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 두 항이 각각 A∩B 와 B∩A^c 가 되어 B 로 묶이고, ⑵ 는 A∩(A^c∪B)=A∩B 와 흡수법칙 B∩(B∪C)=B 로 두 줄이면 끝난다.
    e9 의 유제이면서 소문항이 2개이고 각 소문항이 3단계 이내라 M_s 를 1로 내렸다(M_total 6).
    통찰 0 이지만 M_total 이 5를 넘어 하향 조건에 걸리지 않으므로 유제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '차집합을 $\cap$ 여집합으로 고쳐 쓰기 → 분배법칙으로 공통 집합 묶기 → 흡수법칙 $B\cap(B\cup C)=B$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑴ $B$ ⑵ $B$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/152-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구조 파라미터는 괄호 중첩 깊이와 등장 집합 수(여기서는 C 가 흡수법칙용 장식으로만 쓰임)다. 제약: ⑵ 처럼 답에 기여하지 않는 집합을 넣을 때는 흡수법칙으로 반드시 사라지도록 배치해야 한다(사라지지 않으면 답이 C 를 포함해 유형이 달라진다)."
    creative: "(1) 흡수법칙 쪽만 떼어 A∩(A∪B) 류 4지선다로(★1) (2) 간단히 한 결과를 먼저 주고 빈칸의 연산 기호를 채우게 하기(★3 · I-BW 추가) (3) A, B, C 벤다이어그램에서 결과 영역을 색칠하게 하면 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-CM2-152-371
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합 U 의 세 부분집합 A, B, C 에 대하여 등식 A-(B∪C)=(A-B)-C 가 성립함을
    집합의 연산 법칙과 드모르간의 법칙을 이용해 증명하기(서술형).
  category: '차집합 정의 → 드모르간 → 결합법칙 → 차집합으로 되돌리기(양변 사슬 증명)'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합 연산 등식의 증명(드모르간·결합법칙 사슬)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 A∩(B∪C)^c 로 고쳐 드모르간으로 A∩(B^c∩C^c) 를 만들고, 결합법칙으로 (A∩B^c)∩C^c 로 묶은 뒤 다시 차집합 표기로 되돌리는 5단계 사슬이다.
    각 단계가 모두 이 단원의 표준 법칙 직접 적용이라 통찰로 세지 않았다(정의 대입은 I-EQV 로 인정하지 않음).
    [분류 이슈] 서술형 증명이라 답안 작성 부담은 유제 평균보다 크지만 식 사슬 자체는 표준이라 ★ 에는 반영하지 않고 기록만 함.
  tier: star_2
  mechanism_primary: '$A-(B\cup C)=A\cap\comp{(B\cup C)}$ → 드모르간 $\comp{B}\cap\comp{C}$ → 결합법칙으로 $(A\cap\comp{B})\cap\comp{C}$ → $(A-B)-C$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '풀이 참조 ($A-(B\cup C)=A\cap\comp{(B\cup C)}$ $=A\cap(\comp{B}\cap\comp{C})$ $=(A\cap\comp{B})\cap\comp{C}$ $=(A-B)\cap\comp{C}$ $=(A-B)-C$)'
  answer_source: "계산(답지는 「풀이 78쪽」만 표시)"
  figure: none
  latex: latex-bank/gn-cm2/items/152-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명 대상 등식의 형태가 유일한 파라미터다 — A-(B∩C)=(A-B)∪(A-C), (A∪B)-C=(A-C)∪(B-C), A-(B-C)=(A-B)∪(A∩C) 등으로 교체 가능. 제약: 드모르간 1회 + 결합·분배 1회로 닫히는 등식만 고른다(두 방향 포함 증명이 필요한 등식은 난이도 층이 달라진다)."
    creative: "(1) 등식을 벤다이어그램 영역 대조로 설명하게 하면 I-RT 가 붙어 ★3 (2) 성립하지 않는 등식(예: A-(B-C)=(A-B)-C)을 주고 반례를 만들게 하면 I-MI·I-VF 가 붙어 ★4 (3) 원소 x 의 귀속 논증(x∈좌변 ⟺ x∈우변)으로 증명하게 하면 서술 유형이 바뀌며 ★3."
```

```yaml
- id: GN-CM2-153-e10
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    전체집합 U 의 두 부분집합 A, B 에 대하여 {(A의 여집합∪B의 여집합)∩(A∪B의 여집합)}∩A=∅ 이 성립할 때
    항상 옳은 포함 관계를 5지선다에서 고르기.
  category: '분배법칙으로 조건식 간단히 하기 → $A\cap\comp{B}=\varnothing$ → 포함 관계로 번역'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '간단히 한 조건 $A\cap\comp{B}=\varnothing$ 을 포함 관계 $A\subset B$ 로 옮겨 선택지와 대조'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연산 법칙으로 간단히 한 뒤 포함 관계 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 괄호 두 개는 공통 부분 B^c 를 묶는 분배법칙으로 (A^c∩A)∪B^c=B^c 가 되고, 조건은 A∩B^c=∅ 한 줄로 줄어든다.
    핵심은 그 다음 — 차집합이 공집합이라는 조건을 포함 관계 A⊂B 로 읽는 단계이며 이 단원의 주 통찰이다(I-EQV d1).
    필수 예제 출발 ★2 · 통찰 1개 d1 이라 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: '분배법칙으로 앞 두 괄호를 $\comp{B}$ 로 축약 → 조건이 $A\cap\comp{B}=\varnothing$ → $A\subset B$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/153-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파라미터는 조건식의 괄호 구성과 마지막에 교집합하는 집합(A ↔ B)이다. 여집합을 뒤집어 B∩A^c=∅ 형태로 만들면 답이 B⊂A 로 바뀐다. 제약: 간단히 한 결과가 A∩B^c 나 B∩A^c 처럼 차집합 한 덩어리가 되어야 포함 관계로 번역된다(A∩B 가 남으면 항상 옳은 선택지가 사라진다)."
    creative: "(1) 결론을 주고 성립하는 조건식을 고르게 하면 I-BW 가 붙어 ★3 (2) 보기 ㄱㄴㄷ 형태로 바꿔 여집합 뒤집기(A∪B^c=U)까지 묻게 하면 ★3 (3) 조건을 A△B=A 처럼 새 연산으로 포장하면 특강 유형과 합쳐져 ★3~4."
```

```yaml
- id: GN-CM2-153-372
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합 U 의 공집합이 아닌 두 부분집합 A, B 에 대하여 (A∪B)∩A의 여집합=∅ 일 때
    보기 ㄱ(A∩B=∅) ㄴ(A∪B=A) ㄷ(A∪B의 여집합=U) 중 항상 옳은 것만 고르기.
  category: '조건식 → $B\subset A$ 로 번역 → 보기 세 개를 포함 관계로 환원해 판정'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$(A\cup B)\cap\comp{A}=\varnothing$ 을 분배 후 $B\cap\comp{A}=\varnothing$ 즉 $B\subset A$ 로 동치 변환'
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄷ 의 $A\cup\comp{B}=U$ 를 $\comp{A}\subset\comp{B}$ 로 뒤집어 $B\subset A$ 와 같은 조건임을 확인'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "연산 법칙으로 간단히 한 뒤 포함 관계 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건은 B⊂A 한 줄로 줄지만, 보기 판정에서 두 함정이 걸린다 — A, B 가 공집합이 아니라는 단서 때문에 ㄱ(A∩B=∅)이 거짓이 되고(T-범위), ㄷ 은 합집합 등식을 여집합 포함 관계로 뒤집어야 참임이 보인다(T-표기).
    조건 번역(EQV d1)과 여집합 뒤집기(EQV d2) 두 단계를 통찰로 세었다.
    [분류 이슈] 확인체크 유제라 출발점은 ★2 지만 통찰 2개·M_total 8 로 +1 하여 짝 예제 153-e10(★2)보다 한 단 높게 판정했다.
  tier: star_3
  mechanism_primary: '$(A\cup B)\cap\comp{A}=\varnothing$ → $B\subset A$ → 보기 세 개를 각각 포함 관계·여집합 포함 관계로 환원해 참거짓 판정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/153-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파라미터는 보기 개수(3 → 4·5)와 참인 보기의 비율, 그리고 공집합 배제 단서의 유무다. 제약: 공집합이 아니라는 단서를 빼면 ㄱ 이 참이 될 여지가 생겨 정답이 바뀐다 — 단서와 정답을 함께 움직여야 한다."
    creative: "(1) 조건을 (A∩B)∪(A-B)=A 처럼 바꿔 같은 B⊂A 를 유도하게 하기(★3 유지) (2) 보기에 A-B=∅ 처럼 방향이 반대인 것을 섞어 기각하게 하면 I-VF 가 붙어 ★4 (3) 벤다이어그램 그림을 주고 조건을 고르게 하면 I-RT 로 대체되며 ★2~3."
```

```yaml
- id: GN-CM2-153-373
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합 U 의 두 부분집합 A, B 에 대하여 (A∪B)∩(B-A)의 여집합=A∩B 가 성립할 때
    항상 옳은 집합 등식을 5지선다에서 고르기.
  category: '좌변을 $A$ 로 축약 → 조건이 $A=A\cap B$ → $A\subset B$ → $A\cup B=B$'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '좌변이 $A$ 로 정리되므로 조건은 $A=A\cap B$ 즉 $A\subset B$ 이고 이를 선택지 표기 $A\cup B=B$ 로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연산 법칙으로 간단히 한 뒤 포함 관계 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (B-A)^c=A∪B^c 이므로 좌변은 (A∪B)∩(A∪B^c)=A∪(B∩B^c)=A 로 축약된다(분배법칙 역방향 묶기).
    조건 A=A∩B 를 포함 관계 A⊂B 로 읽고, 다시 선택지의 합집합 표기 A∪B=B 로 옮기는 것이 주 통찰(EQV d1)이다.
    오답 선택지가 모두 포함 방향이 반대이거나(②③) 무관한(①④) 형태라 방향 감각이 변별점. 유제 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\comp{(B-A)}=A\cup\comp{B}$ 로 고치기 → 분배법칙으로 좌변 $=A$ → $A=A\cap B$ → $A\subset B$ → $A\cup B=B$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/153-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파라미터는 좌변 괄호 구성과 우변에 놓는 집합(A∩B ↔ A∪B ↔ A)이다. 우변을 A∪B 로 바꾸면 조건이 B⊂A 로 뒤집힌다. 제약: 좌변이 A 나 B 한 덩어리로 축약되는 조합만 고른다(축약이 안 되면 항상 옳은 선택지를 만들 수 없다)."
    creative: "(1) 선택지를 모두 포함 관계 기호로 바꿔 표기 번역 단계를 없애면 ★2 아래로 내려감 (2) 조건이 성립하는 A, B 의 예를 하나 들게 하는 서술형(★2 · I-MI 없음) (3) 조건을 만족하는 A 의 개수를 묻는 부분집합 개수 문제로 확장하면 단원 결합으로 I-XU 가 붙어 ★4."
```

### 특강

```yaml
- id: GN-CM2-154-e1
  page: 154
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    연산 △ 를 A△B=(A-B)∪(B-A) 로 정의할 때, 다섯 개의 등식
    (A△A의 여집합=U, U△∅=U, A△∅=A, A△A=∅, A△U=A) 중 옳지 않은 것 고르기.
  category: '새로 정의된 연산에 특수 집합($\varnothing$·$U$·$\comp{A}$·자기 자신) 대입 → 차집합 계산'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "새로 정의된 집합 연산(대칭차집합)의 성질 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 선택지 모두 정의 대입 한두 줄로 끝난다 — 정의를 그대로 쓰는 단계는 통찰로 세지 않으므로 절차형이다.
    난이도는 특수 집합 대입의 경계 감각에서 온다: ⑤ 는 A-U=∅, U-A=A^c 이므로 A△U=A^c 이지 A 가 아니다(T-경계·T-표기 2범주 → M_t 2).
    특강 구역 출발 ★3 · 통찰 0 이지만 M_total 8 이라 하향 조건(M_total ≤ 5)에 걸리지 않아 ★3 유지.
  tier: star_3
  mechanism_primary: '정의 $A\triangle B=(A-B)\cup(B-A)$ 에 $\comp{A}$·$\varnothing$·$U$·$A$ 를 차례로 대입 → 각 차집합을 계산해 등식 참거짓 판정'
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/154-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파라미터는 정의식의 형태(대칭차 ↔ (A∪B)-(A∩B) ↔ (A∩B의 여집합)∪(A의 여집합∩B))와 선택지에 넣는 특수 집합의 조합이다. 제약: 다섯 선택지 중 정확히 하나만 거짓이어야 하고, 거짓인 것은 U 나 여집합처럼 경계 감각이 필요한 자리에 두어야 변별이 생긴다."
    creative: "(1) 정의를 벤다이어그램 색칠 영역으로 제시하면 I-RT 가 붙어 ★3 유지·체감 하락 (2) 교환법칙·결합법칙이 성립하는지 증명하게 하면 서술형 ★4 (3) A△B=∅ 또는 A△B=U 가 되는 A, B 의 조건을 묻게 하면 I-EQV 가 붙어 ★3~4."
```

```yaml
- id: GN-CM2-154-374
  page: 154
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(특강)"
  summary: |
    연산 ⊚ 를 A⊚B=(A∪B)-(A∩B) 로 정의할 때, (A⊚B)⊚A 와 항상 같은 집합을 5지선다에서 고르기.
  category: '$\circledcirc$ 를 대칭차집합으로 읽기 → $A\triangle A=\varnothing$ · 결합법칙으로 $A$ 소거 → $B$'
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\circledcirc$ 를 대칭차집합으로 읽고 벤다이어그램 영역 귀속으로 옮겨 이중 괄호 전개의 폭발을 피함'
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '정의를 그대로 두 번 전개하는 갈래와 $A\triangle A=\varnothing$ · 결합법칙으로 소거하는 갈래 중 뒤쪽을 선택'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "새로 정의된 집합 연산(대칭차집합)의 반복 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (A∪B)-(A∩B) 가 154-e1 의 A△B 와 같은 집합임을 알아보는 것이 첫 갈림길이다 — 알아보면 (A△B)△A=(A△A)△B=∅△B=B 한 줄, 못 알아보면 이중 괄호를 정의대로 전개해야 해서 M_k 가 2로 뛴다.
    표현 전환(RT d2)과 전략 선택(SC d1) 두 단계를 통찰로 세었다.
    [분류 이슈] 통찰 2개라 +1 후보(★4)였으나 효율 갈래를 잡으면 골조가 한 줄이고 답도 선택지 B 라서 특강 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '$A\circledcirc B$ 가 대칭차집합임을 알아보기 → 결합법칙으로 $(A\triangle A)\triangle B$ → $\varnothing\triangle B=B$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/154-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "파라미터는 연산 반복 횟수와 소거되는 집합이다 — (A⊚B)⊚B=A, ((A⊚B)⊚A)⊚B=∅ 처럼 늘릴 수 있다. 제약: 대칭차는 결합법칙과 A△A=∅ 가 성립하므로 A·B 의 등장 횟수 홀짝만으로 답이 결정된다 — 답이 선택지에 있는 집합(A·B·∅·A∩B 등)이 되도록 횟수를 맞춘다."
    creative: "(1) 세 집합으로 늘려 (A⊚B)⊚C 를 묻고 벤다이어그램 영역(홀수 번 덮인 영역)으로 해석하게 하면 I-RT d3 로 ★4 (2) A⊚B=B 를 만족하는 A 의 조건을 묻게 하면 I-BW 가 붙어 ★4 (3) 정의를 (A∩B의 여집합)∪(A의 여집합∩B) 로 바꿔 같은 집합임을 먼저 증명하게 하면 서술형 ★3~4."
```

```yaml
- id: GN-CM2-155-e2
  page: 155
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    자연수 k 의 양의 배수의 집합을 A_k 라 할 때 두 식을 간단히 하기.
    ⑴ (A_2∪A_3)∩A_4 ⑵ (A_6∪A_12)∩(A_9∪A_18).
  category: '$A_m\subset A_n \iff n$ 이 $m$ 의 약수 → $\cap$ 은 최소공배수 · $\cup$ 은 포함 관계로 흡수'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '집합의 포함 관계 $A_m\subset A_n$ 을 약수·배수 관계로 옮겨 $A_m\cap A_n=A_{\mathrm{lcm}(m,n)}$ 로 계산'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "배수의 집합 A_k 의 연산(포함 관계·최소공배수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 A_4⊂A_2 이므로 분배 후 A_4∪A_12=A_4, ⑵ 는 A_12⊂A_6 · A_18⊂A_9 로 각 괄호가 A_6, A_9 로 줄고 교집합이 A_18 이 된다.
    핵심은 집합 언어를 약수·배수 언어로 바꿔 읽는 전환(RT d2)이며, 여기서 흔한 두 함정은 합집합을 최대공약수 집합으로 착각하는 것(A_2∪A_3≠A_1)과 포함 방향을 뒤집는 것이다(T-표기·T-범위 → M_t 2).
    특강 예제 출발 ★3 · 통찰 1개 d2 로 조정 없이 ★3.
  tier: star_3
  mechanism_primary: '각 괄호에서 포함 관계로 흡수 → 남은 두 집합의 교집합을 최소공배수 집합 $A_{\mathrm{lcm}}$ 으로'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $A_4$ ⑵ $A_{18}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/155-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 수는 첨자 k 다. 제약: 합집합으로 묶는 두 첨자는 한쪽이 다른 쪽의 배수여야 흡수되고(6과 12, 9와 18), 교집합 결과는 lcm 이므로 답이 보기 좋은 수가 되게 고른다. 서로소 두 수의 합집합(A_2∪A_3)은 A_k 꼴로 정리되지 않으므로 반드시 교집합 상대와 함께 배치한다."
    creative: "(1) A_k 를 k 의 양의 약수의 집합으로 바꾸면 포함 방향이 뒤집혀 ∩ 이 최대공약수가 됨(★3 · 같은 RT 골조) (2) A_m∩A_n=A_36 이 되는 (m, n) 을 모두 구하게 하면 I-MI·I-VF 가 붙어 ★4 (3) 세 집합의 교집합·합집합을 섞어 분배법칙까지 요구하면 M_s 상승 ★4."
```

```yaml
- id: GN-CM2-155-375
  page: 155
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(특강)"
  summary: |
    A_k 를 자연수 k 의 배수의 집합이라 할 때 다음을 만족시키는 자연수 m 구하기.
    ⑴ (A_2∪A_8)∩(A_3∪A_9)=A_m ⑵ (A_6∩A_8)∪A_12=A_m.
  category: '포함 관계로 괄호 흡수 → $\cap$ 은 최소공배수 · $\cup$ 은 다시 포함 관계로 흡수'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$A_8\subset A_2$ · $A_9\subset A_3$ · $A_{24}\subset A_{12}$ 를 약수 관계로 읽어 흡수시키고 남은 교집합을 최소공배수로 계산'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "배수의 집합 A_k 의 연산(포함 관계·최소공배수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 두 괄호가 각각 A_2, A_3 로 흡수되고 교집합이 A_6, ⑵ 는 A_6∩A_8=A_24 가 A_12 에 흡수되어 A_12 가 된다.
    e2 와 같은 RT d2 골조이되 ⑵ 에서 교집합(lcm 24)을 먼저 구한 뒤 합집합에서 다시 흡수시키는 순서가 한 겹 더 있다.
    특강 유제 출발 ★3 · 통찰 1개 d2 로 조정 없이 ★3.
  tier: star_3
  mechanism_primary: '각 괄호를 포함 관계로 흡수 → 교집합은 $A_{\mathrm{lcm}}$ → 합집합에서 큰 첨자 집합을 다시 흡수 → $m$ 읽기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $6$ ⑵ $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/155-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첨자 k 가 유일한 수치 파라미터다. 제약: ⑴ 처럼 합집합 안의 두 첨자는 배수 관계(2와 8, 3과 9), 교집합 상대는 서로소로 두어야 답이 단순한 lcm 이 된다. ⑵ 처럼 교집합 결과가 합집합 상대의 배수여야 A_m 한 덩어리로 흡수된다 — 이 조건이 깨지면 답이 A_k 꼴이 아니어서 문제가 성립하지 않는다."
    creative: "(1) m 을 주고 빈칸의 첨자를 채우게 하면 I-BW 가 붙어 ★4 (2) 조건을 만족하는 m 이 존재하지 않는 조합을 섞어 판별하게 하면 I-VF 로 ★4 (3) A_k 의 원소 중 100 이하인 것의 개수를 묻는 문항으로 이으면 경우의 수 단원과 결합해 I-XU ★4."
```

## 표본 판정 요약 (10문)

- ★ 분포: ★1 0 · ★2 5 · ★3 5 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 4 · premium 0
- 통찰 유형 분포(총 8개 라벨): I-EQV 4 · I-RT 3 · I-SC 1. depth 2 라벨 4개, depth 3 라벨 0개.
- type_hint 상위: 「연산 법칙으로 간단히 한 뒤 포함 관계 판정」 3 · 「집합의 연산 법칙으로 식 간단히 하기」 2 · 「배수의 집합 A_k 의 연산」 2 · 「새로 정의된 집합 연산(대칭차집합)」 2 · 「집합 연산 등식의 증명」 1
- M 프로파일: Mₐ 는 3이 8문(추상 부분집합), 2가 2문(배수 집합 A_k). Mₖ 는 154-374 만 2이고 나머지는 1 — 이 단원의 난이도는 계산량이 아니라 법칙 적용 순서와 조건 번역에서 나온다.
- 대상층: 중위권 5 · 중상위권 5. 하위권·상위권 전용 문항 없음.
- 그림: 0문(이 범위에는 figure 가 있는 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-152-371 | 서술형 증명이라 답안 작성 부담은 다른 유제보다 크지만 식 사슬은 표준 5단계 — 서술 부담을 ★ 에 반영하지 않고 기록만 함 | ★2 / ★3 |
| GN-CM2-153-372 | 확인체크 유제인데 공집합 배제 단서(ㄱ)와 여집합 뒤집기(ㄷ) 때문에 짝 예제 153-e10(★2)보다 한 단 높은 ★3 으로 판정 | ★2 / ★3 |
| GN-CM2-154-374 | 통찰 2개(RT d2 · SC d1)로 +1 후보였으나 효율 갈래를 잡으면 골조가 한 줄이라 특강 출발점 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형 2개**. ① 「연산 법칙으로 간단히 하기」(152-e9 · 152-370 · 152-371)는 결과가 집합 식 자체이고, ② 「간단히 한 뒤 포함 관계 판정」(153-e10 · 153-372 · 153-373)은 결과가 $A\subset B$ 라는 관계다. 후자에만 I-EQV(공집합·등식 조건을 포함 관계로 번역)가 고정으로 붙으므로 base ★ 가 한 단 갈린다 — 같은 유형으로 묶으면 안 된다.
- **통합해도 될 유형**. 「대칭차집합의 성질 판정」(154-e1)과 「대칭차집합의 반복 계산」(154-374)은 정의를 읽는 도구가 같으므로 한 유형(base ★3)으로 묶고 반복 횟수를 난이도 파라미터로 두는 편이 낫다. 「배수의 집합 A_k 의 연산」(155-e2 · 155-375)도 둘이 같은 RT 골조라 한 유형이면 충분하다.
- **base ★ 제안**. 간단히 하기 ★2 · 포함 관계 판정 ★2~3 · 등식 증명 ★2(서술형 가중은 별도 축으로) · 대칭차집합 ★3 · 배수 집합 ★3.
- 이 범위는 depth 3 라벨이 하나도 없어 ★4~5 슬롯 후보가 없다. §2.13 저노출 유형(SC·VF·SYM·XU)이 필요한 슬롯은 `variation_notes.creative` 에 적은 확장(세 집합 대칭차의 벤다이어그램 해석, 반례 만들기, A_m∩A_n=A_36 의 (m, n) 전수)에서 만들어야 한다.
