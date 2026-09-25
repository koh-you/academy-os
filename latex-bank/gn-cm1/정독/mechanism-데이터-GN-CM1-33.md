---
name: mechanism-데이터-GN-CM1-33
description: 개념원리 공통수학1 33 행렬의 덧셈·뺄셈과 실수배(1/1 · 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 33 행렬의 덧셈·뺄셈과 실수배
  unit_code: "33"
  part: "1/1"
  extract_range: "282~286쪽 · 282-615~286-629"
  total_problems: 19
  unit_total: 19
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 33 행렬의 덧셈·뺄셈과 실수배 (1/1) 정독 데이터 (v1.0)

282~286쪽 19문항 전수. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」(필수 예제 4 + 확인체크 5) 9문 · 「연습문제 STEP 1」 4문 · 「STEP 2」 2문 · 「실력 UP」 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그이므로 익히기 ★1 · 필수 예제와 그 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 두고 M_total·통찰로 ±1 조정했다.

이 단원은 행렬 연산의 도입부라 대부분이 절차형이다. 통찰 판정은 다음 기준으로 통일했다.

- **행렬 등식을 문자식처럼 이항·정리하는 단계**(616 · e5 · 619 · 620 · 625)는 이 단원이 직접 가르치는 표준 절차라 통찰로 세지 않는다.
- **행렬의 상등을 성분별 스칼라 연립으로 옮겨야 비로소 풀리는 문항**(e7 · 622 · 624 · 628)은 I-RT d1 로 센다. 원 표현(행렬 등식) 그대로는 풀이가 진행되지 않는다.
- **그림(도로망)을 행렬로 옮기는 문항**(623)도 I-RT d1.
- **구하는 것이 한 성분뿐이라 전체 행렬 대신 그 성분만 연립으로 줄일 수 있는 문항**(621 · 626)은 표준 갈래(A·B 를 모두 구하기)로도 곧 풀리므로 I-SC 로 세지 않고 단축 갈래를 variation_notes 에 적었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-282-615
  page: 282
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 주어진 두 이차정사각행렬의 합과 차를 계산.
  category: "행렬의 덧셈·뺄셈 정의 → 대응 성분끼리 가감"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 덧셈과 뺄셈 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대응 성분끼리 더하고 빼는 정의 확인. 소문항 4개지만 각각 한 줄이다.
    익히기 구역 출발점 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "합·차의 정의 → 대응 성분끼리 가감 → 결과 행렬"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\begin{pmatrix} 3 & -2 \\ 1 & -1 \end{pmatrix}$ ⑵ $\begin{pmatrix} -4 & 14 \\ 3 & -5 \end{pmatrix}$ ⑶ $\begin{pmatrix} 1 & -4 \\ 5 & -1 \end{pmatrix}$ ⑷ $\begin{pmatrix} -8 & 2 \\ 11 & -1 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/282-615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 8개를 자유롭게 바꿀 수 있다. 제약: 같은 꼴끼리만 더할 수 있으므로 두 행렬의 꼴을 반드시 같게 두고, 뺄셈 소문항의 답 성분이 정수로 떨어지게 한다."
    creative: "(1) 2x3·3x1 등 다른 꼴로 바꾸기(★1 유지) (2) 꼴이 다른 두 행렬을 섞어 계산할 수 없는 것을 고르게 하기(★2 · 정의 경계) (3) 합과 차를 주고 원래 두 행렬을 되묻기(역방향 ★2 · I-BW d1)."
```

```yaml
- id: GN-CM1-282-616
  page: 282
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 행렬 등식 A+X=B, X-A=B, A-X=B 를 만족시키는 행렬 X 를 구하기.
  category: "행렬 등식 이항 → X 를 합·차로 표현 → 성분 계산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 등식에서 미지행렬 X 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 번 이항해 X=B-A 또는 X=A-B 로 놓으면 끝. 미지행렬이 들어와 M_a 가 2 로 오르지만 단계는 하나다.
    ⑶ 은 A-X=B 이므로 X=A-B 순서가 뒤집히는 부호 함정이 유일한 걸림돌.
    익히기 출발점 ★1 · 통찰 없음 → ★1 유지.
  tier: star_1
  mechanism_primary: "행렬 등식을 문자식처럼 이항 → X=B-A(또는 A-B) → 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} 2 & 2 \\ -3 & -12 \end{pmatrix}$ ⑵ $\begin{pmatrix} 2 & 15 \\ 9 & 4 \end{pmatrix}$ ⑶ $\begin{pmatrix} 9 & -8 \\ 5 & 16 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/282-616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 행렬의 성분을 바꿀 수 있다. 제약: 세 소문항이 A+X · X-A · A-X 세 가지 이항 패턴을 한 번씩 덮도록 유지하고, 답 성분을 정수로 둔다."
    creative: "(1) X+A=B 대신 X+A=O(영행렬)로 두어 X=-A 를 묻기(★1 유지) (2) 2X 나 -X 처럼 실수배를 붙여 나눗셈 단계를 추가(★2) (3) X 가 양변에 모두 나오게 해 정리 단계를 늘리기(★2 · e5 골조)."
```

```yaml
- id: GN-CM1-282-617
  page: 282
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 이차정사각행렬 A, B 에 대하여 -3A, B 의 반, 2A+B, 3A-2B 를 계산.
  category: "행렬의 실수배 정의 → 일차결합 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 실수배와 일차결합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    실수배는 모든 성분에 같은 수를 곱한다는 정의 확인. ⑶⑷ 는 실수배 뒤 대응 성분 가감 한 줄.
    익히기 출발점 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "실수배 정의(모든 성분에 곱) → 대응 성분끼리 가감 → 결과 행렬"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\begin{pmatrix} 3 & 12 \\ -18 & -33 \end{pmatrix}$ ⑵ $\begin{pmatrix} \dfrac{3}{2} & 4 \\ 2 & -1 \end{pmatrix}$ ⑶ $\begin{pmatrix} 1 & 0 \\ 16 & 20 \end{pmatrix}$ ⑷ $\begin{pmatrix} -9 & -28 \\ 10 & 37 \end{pmatrix}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/282-617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 성분과 실수배 계수(-3, 1/2, 2, 3, -2)를 바꿀 수 있다. 제약: 분수배 소문항은 B 의 성분을 분모의 배수로 두어 답이 깔끔하게 나오게 하고, 음수배 소문항을 하나는 남겨 부호 실수를 유지한다."
    creative: "(1) kA+B 의 특정 성분이 0 이 되는 k 를 묻기(역방향 ★2 · I-BW d1) (2) 2A+B 와 3A-2B 를 주고 A, B 를 되묻기(★3 · 연립 골조) (3) A+B, A-B 를 주고 A 를 묻기(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-283-e4
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 두 이차정사각행렬 A, B 에 대하여 A+2B, 4A-B, 2A+5B, 2(A-B)-(A+B) 를 계산.
  category: "실수배·분배법칙으로 일차결합 정리 → 성분 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 덧셈·뺄셈과 실수배 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶ 은 실수배 뒤 가감. ⑷ 만 2(A-B)-(A+B)=A-3B 로 먼저 정리해야 계산이 짧아진다.
    행렬의 실수배가 수의 분배법칙과 같게 작동한다는 것을 쓰는 단계라 단계 수가 익히기보다 늘어난다.
    필수 예제 출발점 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  mechanism_primary: "괄호를 분배법칙으로 전개해 pA+qB 꼴로 정리 → 실수배 → 성분 가감"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} 4 & 5 \\ -3 & 1 \end{pmatrix}$ ⑵ $\begin{pmatrix} 7 & 2 \\ 6 & 13 \end{pmatrix}$ ⑶ $\begin{pmatrix} 9 & 12 \\ -8 & 1 \end{pmatrix}$ ⑷ $\begin{pmatrix} -1 & -5 \\ 7 & 6 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/283-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 성분과 계수쌍 (1,2)·(4,-1)·(2,5)·(2,-1,-1)을 바꿀 수 있다. 제약: 마지막 소문항은 전개하면 계수가 정수인 pA+qB 로 정리되도록 괄호 계수를 잡는다."
    creative: "(1) 괄호를 세 겹으로 늘려 정리 단계를 더하기(★2 · 625 골조) (2) A+2B 와 4A-B 를 주고 A, B 를 되묻기(★3) (3) 계수를 문자 k 로 두고 결과 행렬의 한 성분이 0 이 되는 k 를 묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-CM1-283-618
  page: 283
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 이차정사각행렬 A, B, C 에 대하여 A-B+C, 2C-B-A, 2(A+2C)+3(B-A) 를 계산.
  category: "세 행렬의 일차결합 정리 → 성분 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 행렬의 덧셈·뺄셈과 실수배 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e4 의 확인체크. 행렬이 셋으로 늘어 부호 관리가 늘지만 골조는 같다.
    ⑶ 은 전개해 -A+3B+4C 로 정리한 뒤 성분 계산하는 편이 짧다.
    필수 예제 확인체크 출발점 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 전개로 pA+qB+rC 정리 → 실수배 → 대응 성분 가감"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} 4 & -7 \\ -8 & 14 \end{pmatrix}$ ⑵ $\begin{pmatrix} -5 & -11 \\ -9 & 13 \end{pmatrix}$ ⑶ $\begin{pmatrix} 5 & -7 \\ 1 & -1 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/283-618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 행렬의 성분과 계수 조합을 바꿀 수 있다. 제약: 세 소문항이 단순 가감 · 부호 섞인 가감 · 괄호 전개 세 층을 한 번씩 덮게 하고 답 성분은 정수로 둔다."
    creative: "(1) A-B+C=O 가 되도록 C 를 되묻기(★2 · I-BW d1) (2) 2(A+2C)+3(B-A) 의 모든 성분의 합만 묻기(성분 합의 선형성 단축 갈래 · ★2) (3) 행렬을 넷으로 늘려 계수 정리를 강제(★3)."
```

```yaml
- id: GN-CM1-284-e5
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 두 행렬 A, B 가 주어졌을 때 X 가 양변에 섞인 행렬 등식(2A+X=B, 2A-X=2X-B, 3X-2(A+2X)-B=-3B)을 만족시키는 X 를 구하기.
  category: "행렬 등식을 문자식처럼 정리 → X 의 계수로 나누기 → 성분 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등식을 만족시키는 행렬 X 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X 를 문자처럼 보고 이항·동류항 정리 후 X 의 계수로 나누는 골조. ⑵⑶ 은 X 가 양변에 있어 정리 단계가 늘고 ⑶ 은 괄호 전개에서 -X 가 되는 부호가 함정이다.
    행렬의 실수배가 수와 같은 계산 법칙을 따른다는 사실을 그대로 쓰는 표준 절차라 통찰로 세지 않았다.
    필수 예제 출발점 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "X 를 문자로 보고 이항·동류항 정리 → kX=(A, B 의 일차결합) → 계수로 나눠 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} -12 & 9 \\ 12 & 21 \end{pmatrix}$ ⑵ $\begin{pmatrix} 4 & -1 \\ -8 & -1 \end{pmatrix}$ ⑶ $\begin{pmatrix} -12 & 12 \\ 6 & 30 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/284-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 성분과 등식의 계수를 바꿀 수 있다. 제약: 정리 후 X 의 계수 k 로 나눌 때 성분이 정수로 떨어지도록 A·B 성분을 k 의 배수로 잡는다(원문도 3·6·9 로 맞춰져 있다)."
    creative: "(1) X 의 계수가 음수가 되도록 배치해 부호 함정 강화(★2) (2) X 와 Y 두 미지행렬을 넣어 연립으로 만들기(★3 · e6 골조) (3) 답 대신 X 의 모든 성분의 합만 묻기(★2 · 620 골조)."
```

```yaml
- id: GN-CM1-284-619
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 행렬 A, B 에 대하여 A-(B+X)=O 를 만족시키는 행렬 X 구하기(O 는 영행렬).
  category: "괄호 전개·이항 → X=A-B → 성분 계산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "영행렬이 포함된 행렬 등식에서 X 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    괄호를 풀고 이항하면 X=A-B 한 줄. 함정은 A-(B+X) 의 괄호를 풀 때 X 의 부호.
    [분류 이슈] 통찰 없음 · M_total 5 라 절차형 −1 규칙상 ★1 후보지만, 영행렬 O 와 괄호 앞 음부호가 처음 등장하는 확인체크여서 e5 와 같은 층의 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "괄호 전개 → A-B-X=O → X=A-B → 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\begin{pmatrix} 1 & 4 \\ 6 & -9 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/284-619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 성분을 바꿀 수 있다. 제약: 영행렬 조건을 쓰므로 두 행렬의 꼴을 같게 두고, 뺄셈 결과에 음수 성분이 하나 이상 남게 해 부호 확인을 유지한다."
    creative: "(1) A-(B-X)=O 로 바꿔 X=B-A 가 되게 하기(부호 함정 ★2) (2) 우변을 영행렬 대신 단위행렬 꼴로 주기(★2) (3) A-(B+X)=O 를 만족시키는 X 의 성분의 합을 묻기(★2)."
```

```yaml
- id: GN-CM1-284-620
  page: 284
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x3 행렬 A, B 에 대하여 (A+2B)의 1/3 과 (A-X)의 1/2 이 같을 때 행렬 X 의 모든 성분의 합 구하기.
  category: "분모 정리 → X 를 A, B 의 일차결합으로 → 성분의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수 계수 행렬 등식에서 X 를 구하고 성분의 합 묻기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 6 을 곱해 분모를 없애고 정리하면 3X=A-4B, 즉 X 는 A, B 의 일차결합. 2x3 행렬이라 성분이 6개로 늘어 계산량이 오른다.
    확인체크 출발점 ★2 · M_total 7 → ★2 유지.
    [분류 이슈] 성분의 합만 물으므로 X 를 다 구하지 않고 합의 선형성으로 (A 의 합 - 4 x B 의 합)/3 으로 줄일 수도 있다. 이 단축 갈래를 I-SC 로 셀지 애매하나 2x3 이라 표준 갈래도 부담이 적어 절차형으로 두었다.
  tier: star_2
  mechanism_primary: "양변에 6 을 곱해 분모 제거 → 3X=A-4B → X 의 성분을 구해 합산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/284-620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 여섯 성분과 분모 3, 2 를 바꿀 수 있다. 제약: 정리 후 X 의 계수로 나눌 때 각 성분이 정수로 떨어져야 하므로 A-4B 의 모든 성분을 3 의 배수로 잡는다."
    creative: "(1) 특정 (i,j) 성분만 묻기(★2 · 621 골조) (2) 행렬 꼴을 3x3 으로 키워 합의 선형성 갈래가 확실히 유리하게 만들기(★3 · I-SC d1) (3) X 의 성분 합이 주어지고 A 의 미지 성분을 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-CM1-285-e6
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 이차정사각행렬 X, Y 에 대하여 X-Y 와 2X+Y 가 각각 주어졌을 때 X+Y 구하기.
  category: "두 행렬 등식의 가감법 → X, Y 결정 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 연립방정식(가감법)으로 X, Y 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 더하면 3X 가 나와 X 가 정해지고, 다시 대입해 Y 를 얻은 뒤 X+Y 를 계산하는 연립 골조. 미지수가 수 대신 행렬일 뿐 가감법 절차가 그대로라 통찰로 세지 않았다.
    함정은 3X 를 3 으로 나눌 때 성분마다 나눈다는 실수배 정의 확인.
    필수 예제 출발점 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 행렬 등식을 더해 3X → X → 대입해 Y → X+Y 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\begin{pmatrix} -1 & -5 \\ -3 & 3 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/285-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 행렬의 성분과 좌변 계수쌍(1,-1)·(2,1)을 바꿀 수 있다. 제약: 가감법으로 소거한 뒤 나누는 계수가 우변 성분을 정수로 남기도록 맞춘다(계수행렬식이 0 이 되면 X, Y 가 정해지지 않으므로 두 식이 독립이어야 한다)."
    creative: "(1) X+Y 를 두 식의 일차결합으로 바로 만드는 계수를 찾게 하기(★3 · I-SC d1) (2) X, Y 를 각각 묻지 않고 X-2Y 의 한 성분만 묻기(★2 · 621 골조) (3) 계수를 문자로 두어 해가 없을 조건을 묻기(★4 · I-BW d2)."
```

```yaml
- id: GN-CM1-285-e7
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 이차정사각행렬 A, B, C 에 대하여 실수 x, y 가 xA+yB=C 를 만족시킬 때 x, y 의 값 구하기.
  category: "행렬의 상등 → 성분별 연립일차방정식 → x, y"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "행렬 등식 xA+yB=C 를 대응 성분끼리의 연립일차방정식으로 옮겨야 비로소 x, y 를 다룰 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "xA+yB=C 꼴에서 실수 x, y 구하기(행렬의 상등)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 실수배·덧셈으로 하나의 행렬로 모은 뒤 상등 정의로 성분식 네 개를 만들고, 그중 두 식으로 x, y 를 정하면 나머지 두 식은 자동으로 맞는다. 행렬 표현 그대로는 진행되지 않으므로 상등 전환을 I-RT d1 로 셌다.
    필수 예제 출발점 ★2 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "xA+yB 를 한 행렬로 정리 → 상등으로 성분별 연립 → 두 식으로 x, y 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=-3$, $y=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/285-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·C 의 성분을 바꿀 수 있다. 제약: 성분식 네 개가 모두 같은 (x, y) 를 주어야 하므로 C 를 먼저 xA+yB 로 만들어 두고 역으로 문제를 만든다. 0 성분을 한둘 남기면 연립이 짧아진다."
    creative: "(1) C 에 미지수를 넣어 x, y 와 함께 되묻기(★3 · 628 골조) (2) xA+yB=C 를 만족시키는 실수가 존재하지 않게 C 를 잡고 그 이유를 묻기(★4 · I-BW d2) (3) 행렬을 셋으로 늘려 xA+yB+zC=D 로 확장(★3)."
```

```yaml
- id: GN-CM1-285-621
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 이차정사각행렬 A, B 에 대하여 A-2B 와 2A+B 가 주어졌을 때 행렬 A-B 의 (1,2) 성분 구하기.
  category: "두 행렬 등식의 가감법 → A, B → 지정 성분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 연립방정식에서 특정 성분만 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 의 확인체크. 두 식을 가감법으로 풀어 A, B 를 얻고 A-B 의 (1,2) 성분을 읽는다.
    두 식의 (1,2) 성분만 뽑아 미지수 두 개짜리 수 연립으로 줄이면 훨씬 짧지만, 표준 갈래(A·B 를 모두 구하기)로도 곧 끝나므로 I-SC 로 세지 않고 단축 갈래는 variation_notes 에 적었다.
    확인체크 출발점 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 행렬 등식을 가감법으로 풀어 A, B → A-B → (1,2) 성분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/285-621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 행렬의 성분과 좌변 계수쌍(1,-2)·(2,1)을 바꿀 수 있다. 제약: 두 식이 독립이어야 하고(계수 비가 같으면 A, B 가 정해지지 않음), 소거 후 나누는 계수가 정수 성분을 남기게 잡는다. 묻는 성분 위치도 바꿀 수 있다."
    creative: "(1) A-B 대신 2A+3B 의 성분을 묻기(★2 유지) (2) 행렬을 3x3 으로 키워 성분 하나만 뽑는 단축 갈래가 확실히 유리하게 만들기(★3 · I-SC d1) (3) (1,2) 성분 값을 주고 우변 행렬의 미지 성분을 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-CM1-285-622
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 열행렬 A, B 에 대하여 xA+yB 가 주어진 열행렬과 같을 때 실수 x, y 의 값 구하기.
  category: "행렬의 상등 → 성분별 연립일차방정식 → x, y"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "열행렬 등식 xA+yB=C 를 대응 성분끼리의 연립일차방정식으로 옮겨야 x, y 를 다룰 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "xA+yB=C 꼴에서 실수 x, y 구하기(열행렬)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e7 의 확인체크. 2x1 열행렬이라 성분식이 두 개뿐이고 미지수도 둘이라 연립이 바로 정해진다.
    상등 전환은 e7 과 같은 관문이므로 I-RT d1 로 셌고 계산 부담은 e7 보다 가볍다(M_k 1).
    확인체크 출발점 ★2 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "xA+yB 를 한 열행렬로 정리 → 상등으로 성분식 두 개 → 연립으로 x, y"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=2$, $y=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/285-622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·우변의 성분 여섯 개를 바꿀 수 있다. 제약: 두 열행렬이 평행하면(성분 비가 같으면) 해가 없거나 무수히 많아지므로 A, B 의 성분 비를 다르게 두고, 답 x, y 가 정수가 되도록 우변을 xA+yB 에서 역산해 만든다."
    creative: "(1) 3x1 열행렬로 늘려 성분식 세 개 중 두 개로 풀고 나머지로 검증하게 하기(★3 · I-VF d1) (2) 우변에 미지 성분을 넣기(★3 · 628 골조) (3) x, y 가 존재하지 않는 우변을 제시하고 이유를 묻기(★4 · I-BW d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-286-623
  page: 286
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 도시 사이의 일방통행 도로망 그림에서 i 도시에서 j 도시로 직접 가는 도로의 수를 (i,j) 성분으로 하는 삼차정사각행렬 A 구하기.
  category: "도로망 그림 → 방향별 도로 수 세기 → 행렬 표현"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림(도로망)의 화살표 정보를 행렬의 (i,j) 성분 배열로 옮기는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도로망 그림을 행렬로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 없고 화살표를 세기만 하지만, 그림을 행렬 표현으로 옮기는 것이 이 문항의 전부라 I-RT d1 로 셌다.
    함정 두 가지: (i,j) 의 i 가 출발 도시(행)·j 가 도착 도시(열)라는 방향 구분(T-표기), 그리고 도시 1 에 붙은 자기 자신으로 가는 도로 두 개가 (1,1) 성분 2 로 들어간다는 점(T-범위).
    STEP 1 출발점 ★2 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "화살표를 출발·도착으로 읽어 도로 수 세기 → (i,j) 성분에 배치 → 3x3 행렬"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 2 & 0 & 1 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-286-623.png"
  latex: latex-bank/gn-cm1/items/286-623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "화살표의 개수와 방향을 바꿀 수 있다. 제약: 그림 라벨(도시 번호 1, 2, 3)은 고정하고, 자기 자신으로 가는 도로와 양방향 도로를 각각 하나 이상 남겨 (i,i) 성분과 대칭성 확인 요소를 유지한다. 그림을 바꾸면 크롭도 새로 만들어야 하므로 숫자 변형보다 창의 변형이 적합하다."
    creative: "(1) 모든 도로가 양방향이 되게 해 대칭행렬이 나오도록 하기(★2 · I-SYM d1) (2) 행렬을 주고 도로망 그림을 되그리게 하기(역방향 ★3 · I-BW d1) (3) 성분의 합이 전체 도로 수임을 묻기(★2) (4) 한 도시를 거쳐 가는 경로 수로 확장(★4 · 행렬의 곱 단원과 결합 · I-XU d2)."
```

```yaml
- id: GN-CM1-286-624
  page: 286
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    성분에 미지수가 든 두 1x2 행렬 A, B 가 같을 때 상수 x, y 에 대한 xy 의 값 구하기.
  category: "행렬의 상등 → 성분별 연립일차방정식 → xy"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 행렬이 같다는 조건을 대응 성분이 각각 같다는 연립일차방정식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "행렬의 상등으로 미지 성분 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상등 정의로 성분식 두 개를 만들고 연립하면 x, y 가 분수로 나온다. 표현 전환이 관문이라 I-RT d1.
    함정은 묻는 값이 x, y 가 아니라 곱 xy 라는 점과 분수 계산.
    STEP 1 출발점 ★2 · 통찰 1(d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "행렬의 상등 → 성분식 두 개 연립 → x, y → 곱 xy"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{14}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분식의 계수(3, x+y, 2y+1)를 바꿀 수 있다. 제약: 두 성분식이 독립이어야 하고, 답을 정수로 만들고 싶으면 상수항을 조정한다(원문은 일부러 분수 답이 나오게 잡혀 있다)."
    creative: "(1) 2x2 로 키워 성분식 네 개 중 두 개로 풀고 나머지로 검증하게 하기(★3 · I-VF d1) (2) 상등 조건을 만족시키는 x, y 가 없도록 만들고 이유를 묻기(★3 · I-BW d1) (3) 성분에 이차식을 넣어 해가 둘이 되게 하고 조건으로 걸러내기(★4 · I-MI d2)."
```

```yaml
- id: GN-CM1-286-625
  page: 286
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 행렬 A, B 에 대하여 괄호가 이중으로 겹친 행렬 등식을 만족시키는 행렬 X 의 모든 성분의 합 구하기.
  category: "이중 괄호 전개 → X 항 정리 → 성분의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복잡한 괄호 행렬 등식 정리 후 X 의 성분의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 괄호부터 전개해 X 항을 좌변, A·B 항을 우변으로 모으면 kX 가 A, B 의 일차결합으로 정리되고, 나눈 뒤 성분을 더한다. e5 와 같은 골조에 괄호만 한 겹 더 있다.
    함정은 중괄호 안 3X+2A 를 3배 할 때 두 항 모두에 곱하는 분배(T-표기)와 X 계수의 부호.
    STEP 1 출발점 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "이중 괄호 전개 → X 항 이항·정리 → kX=(A, B 의 일차결합) → 나눈 뒤 성분 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 성분과 바깥·안쪽 괄호 계수(2, 3, 2)를 바꿀 수 있다. 제약: 정리 후 X 의 계수가 0 이 되지 않아야 하고(0 이면 X 가 정해지지 않음), 우변 성분이 그 계수로 나누어떨어져야 한다."
    creative: "(1) 괄호를 한 겹 더 늘리기(★3) (2) X 를 다 구하지 않고 성분 합의 선형성만으로 답을 내게 유도(★3 · I-SC d1) (3) 성분 합이 주어지고 B 의 미지 성분을 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-CM1-286-626
  page: 286
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 이차정사각행렬 A, B 에 대하여 A-2B 와 3A+B 가 주어졌을 때 행렬 A+B 의 (2,1) 성분 구하기.
  category: "두 행렬 등식의 가감법 → A, B → 지정 성분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 연립방정식에서 특정 성분만 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    621 과 같은 골조. 가감법으로 A, B 를 구한 뒤 A+B 의 (2,1) 성분을 읽거나, 두 식의 (2,1) 성분만 뽑아 수 연립으로 줄인다.
    단축 갈래가 있지만 표준 갈래로도 곧 끝나므로 I-SC 로 세지 않았다.
    STEP 1 출발점 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 행렬 등식을 가감법으로 풀어 A, B → A+B → (2,1) 성분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 행렬의 성분과 좌변 계수쌍(1,-2)·(3,1)을 바꿀 수 있다. 제약: 두 식이 독립이어야 하고(계수 비가 같으면 불능·부정), 소거 뒤 나누는 계수가 정수 성분을 남기도록 잡는다."
    creative: "(1) A+B 대신 A-3B 의 성분을 묻기(★2 유지) (2) 묻는 성분을 두 개로 늘려 합을 묻기(★2) (3) 좌변 계수 하나를 문자로 두고 A, B 가 정해지지 않을 조건을 묻기(★4 · I-BW d2)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-286-627
  page: 286
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    삼차정사각행렬 A 의 (i,j) 성분이 i>j, i=j, i<j 세 경우로 나뉘어 정의될 때 A 의 모든 성분의 합 구하기.
  category: "성분 정의식의 경우 분류 → 아홉 성분 계산 → 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분이 규칙으로 정의된 행렬과 성분의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아홉 개 (i,j) 를 i 와 j 의 대소로 나눠 세 식 중 맞는 것에 대입하고 더하는 나열형. 대각 3개·아래 3개·위 3개로 묶으면 계산이 정돈된다.
    함정 둘: i 가 행·j 가 열이라는 표기(T-표기)와 i=j 경계를 어느 식에 넣는지(T-경계)라 M_t 2.
    [분류 이슈] 통찰 0 의 순수 나열인데 벤더는 STEP 2 — 체감은 ★2 쪽이나 성분 수와 경우 분류 부담을 보아 라벨 ★3 유지.
  tier: star_3
  mechanism_primary: "(i,j) 아홉 쌍을 i>j · i=j · i<j 로 분류 → 해당 식에 대입 → 아홉 성분 합산"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 정의식(2i+j, ij, i-2j)과 행렬의 크기(2x2·3x3·2x3)를 바꿀 수 있다. 제약: 세 경우가 모두 실제로 쓰이도록 정사각행렬을 유지하고(직사각이면 i=j 성분 수가 달라짐), 성분 합이 정수로 떨어지게 한다."
    creative: "(1) 대각 성분의 합만 묻기(★2) (2) 성분 정의식에 문자 k 를 넣고 합이 주어진 값이 되는 k 를 묻기(★3 · I-BW d1) (3) 정의식을 i+j 의 홀짝으로 나눠 주기 패턴을 만들기(★4 · I-PD d2) (4) 두 규칙 행렬의 합·실수배를 묻기(★3)."
```

```yaml
- id: GN-CM1-286-628
  page: 286
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 이차정사각행렬 A, B, C 에 대하여 C 의 두 성분이 상수 z, w 로 주어졌을 때 xA+yB=C 를 만족시키는 실수 x, y 에 대한 xy+zw 의 값 구하기.
  category: "행렬의 상등 → 성분식 네 개 → x, y 결정 후 z, w 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "행렬 등식 xA+yB=C 를 성분별 연립으로 옮기고, x·y 만 든 두 식을 먼저 골라 풀어야 z·w 가 결정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "xA+yB=C 꼴에서 미지 성분까지 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e7 골조에 미지수 z, w 가 더 붙은 형태. 성분식 네 개 중 상수만 있는 두 식으로 x, y 를 먼저 정하고, 남은 두 식에 대입해 z, w 를 얻는 순서가 핵심이다.
    상등 전환을 I-RT d1 로 셌고, 미지수가 넷으로 늘어 결정 순서를 스스로 잡아야 한다는 점이 STEP 1 과의 차이다.
    STEP 2 출발점 ★3 · 통찰 1(d1) · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "xA+yB 정리 → 상등으로 성분식 4개 → 상수 성분식 2개로 x, y → 나머지로 z, w → xy+zw"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 성분과 C 의 상수 성분을 바꿀 수 있다. 제약: 상수만 든 성분식이 두 개 이상 남아야 x, y 가 결정되므로 C 의 미지 성분은 최대 두 개로 두고, A·B 의 대응 성분 비가 서로 달라야 연립이 유일해를 갖는다."
    creative: "(1) 미지 성분을 세 개로 늘려 x, y 가 한 식에서만 정해지게 하기(★4) (2) xy+zw 대신 z, w 가 만족시키는 관계식을 묻기(★4 · I-EQV d2) (3) x, y 가 존재할 조건을 A, B 의 성분으로 묻기(★4 · I-BW d2)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-286-629
  page: 286
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    성분에 x, y 가 든 세 이차정사각행렬의 등식(두 행렬의 합에서 a, b 가 든 행렬의 2배를 뺀 것이 영행렬)을 만족시키는 실수 a, b 에 대한 a 제곱 + b 제곱의 값 구하기.
  category: "행렬의 상등 → x+y·xy 확보 → 곱셈 공식으로 대칭식 → a, b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "행렬 상등에서 나온 네 성분식을 곱셈 공식·기본 대칭식(다항식 단원 도구)으로 처리해야 a, b 가 나옴 — 행렬 단원 도구만으로는 끊김"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x, y 를 각각 구하지 않고 대칭식 x+y 와 xy 만으로 x 제곱+y 제곱, x 세제곱+y 세제곱을 만들어 a, b 로 연결"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "행렬의 상등과 대칭식(곱셈 공식) 결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    네 성분식 중 (1,2) 와 (2,1) 이 각각 xy 와 x+y 를 바로 주고, 나머지 두 식이 x 제곱+y 제곱 · x 세제곱+y 세제곱을 2a, 2b 와 잇는다. 곱셈 공식으로 대칭식을 변형하는 다항식 단원 도구가 필수라 I-XU d2, x·y 를 개별로 구하지 않고 대칭식만으로 끝내는 착안이 I-SYM d2.
    상등에서 성분식을 뽑는 단계는 이 단원의 표준 진입이라 따로 세지 않았다(통찰 2개 유지 → ★5 게이트 미해당).
    실력 UP 출발점 ★4 · 통찰 2(d2, d2) → ★4 유지. 저노출 유형 SYM·XU 보유로 ★4 게이트 통과.
  tier: star_4
  mechanism_primary: "성분별 상등 → (1,2)에서 xy · (2,1)에서 x+y → 곱셈 공식으로 x 제곱+y 제곱, x 세제곱+y 세제곱 → 2a, 2b → a 제곱+b 제곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$436$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/286-629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뺄 행렬의 상수 성분(1, 2)과 각 성분의 차수를 바꿀 수 있다. 제약: (1,2)·(2,1) 성분이 xy 와 x+y 를 정수로 주어야 하고, 그 값으로 x 제곱+y 제곱·x 세제곱+y 세제곱이 짝수가 되어야 a, b 가 정수로 떨어진다. x, y 자체는 실수면 되고 유리수일 필요는 없다."
    creative: "(1) x 세제곱+y 세제곱 대신 x 네제곱+y 네제곱을 넣어 대칭식 변형을 한 단계 더 요구(★4 유지) (2) a, b 를 주고 x+y·xy 를 되묻기(역방향 ★4 · I-BW d2) (3) x, y 가 실수라는 조건을 판별식으로 검증해 일부 후보를 기각하게 만들기(★5 · I-VF d2 추가) (4) 성분에 x-y 를 섞어 대칭식만으로는 안 되게 하면 ★ 가 올라가는 대신 골조가 바뀐다."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 3 · ★2 13 · ★3 2 · ★4 1 · ★5 0
- 통찰형 6(285-e7 · 285-622 · 286-623 · 286-624 · 286-628 · 286-629) · 절차형 13 · premium 0
- 통찰 유형 분포: I-RT 5(모두 depth 1) · I-XU 1(d2) · I-SYM 1(d2). depth 3 없음.
- type_hint 상위 5(계열로 묶음): 「등식을 만족시키는 행렬 X」 5문(616 · e5 · 619 · 620 · 625) · 「행렬의 덧셈·뺄셈과 실수배 계산」 4문(615 · 617 · e4 · 618) · 「xA+yB=C 꼴 상등」 4문(e7 · 622 · 624 · 628) · 「행렬 연립방정식(가감법)」 3문(e6 · 621 · 626) · 단독 3문(623 도로망 · 627 성분 규칙 · 629 상등+대칭식)
- 대상층: 하위권 2 · 중하위권 10 · 중위권 6 · 중상위권 1
- 그림: 1문(`crop:fig-286-623.png` · 세 도시 일방통행 도로망 · 도시 1 에 자기 자신으로 가는 도로 2개)
- 벤더 신호와의 정합: 라벨이 출발점과 2단 이상 어긋난 문항은 없고 ±1 조정을 적용한 문항도 없다. 절차형 −1 후보였던 619 만 근거를 남기고 출발점 ★2 를 유지했다.

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-284-619 | 예제 확인체크(출발 ★2)지만 괄호 전개+이항 한 단계로 끝나고 M_total 5 → 절차형 −1 규칙상 ★1 후보. 영행렬·괄호 앞 음부호가 처음 나오는 자리라 ★2 유지 | ★1 / ★2 |
| GN-CM1-284-620 | 성분의 합만 물으므로 X 를 구하지 않고 합의 선형성으로 끝내는 단축 갈래가 있음. I-SC 로 셀지 표준 갈래로 볼지 애매 — 2x3 이라 표준 갈래도 부담이 적어 절차형으로 둠 | ★2 / ★3(통찰형으로 셀 경우) |
| GN-CM1-286-627 | 통찰 0 의 순수 나열(아홉 성분 대입·합)인데 벤더는 STEP 2. 체감은 ★2 쪽이나 경우 분류·성분 수 부담으로 ★3 유지 | ★2 / ★3 |
| GN-CM1-285-621, GN-CM1-286-626 | 골조가 완전히 같은데 한쪽은 예제 확인체크, 한쪽은 STEP 1. 같은 유형으로 통합할지 「특정 성분만 구하기」를 따로 세울지 카탈로그 설계 때 결정 | 둘 다 ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「행렬 등식에서 X 구하기」는 한 번 이항으로 끝나는 층(616 · 619)과 X 가 양변에 있어 동류항 정리가 필요한 층(e5 · 625)이 체감이 다르므로 base ★ 1 / 2 로 분리. ② 「도로망 → 행렬」(623)은 계산이 없고 표현 전환만 있는 독립 유형이며, 뒤 단원의 행렬의 곱(경로 수)과 이어지는 앵커이므로 별도 유형으로 둔다. ③ 「성분이 규칙으로 정의된 행렬」(627)도 연산이 아니라 정의 읽기 유형이라 별도.
- **통합해도 될 유형**: ① 615 · 617 · e4 · 618 은 「행렬의 덧셈·뺄셈과 실수배 계산」 한 유형으로 묶고 소문항 수·괄호 겹수로 base ★ 1~2 를 나눈다. ② e7 · 622 · 624 · 628 은 「행렬의 상등으로 미지수 구하기」 한 유형(base ★2)으로 묶고, 미지 성분이 추가되는 628 만 파생으로 둔다. ③ e6 · 621 · 626 은 「행렬 연립방정식」 한 유형(base ★2).
- **다른 단원과 겹치는 지점**: 629 는 행렬 단원이 아니라 다항식(곱셈 공식·기본 대칭식) 유형의 옷을 갈아입힌 문항이다. 카탈로그에서는 행렬 쪽 base ★ 를 낮게 두고 대칭식 유형과의 교차 참조를 남기는 편이 정확하다.
