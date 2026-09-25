---
name: mechanism-데이터-GN-CM1-34
description: 개념원리 공통수학1 34 행렬의 곱셈(1/1 · 288~289쪽 · 6문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 34 행렬의 곱셈
  unit_code: "34"
  part: "1/1"
  extract_range: "288~289쪽 · 288-630~289-633"
  total_problems: 6
  unit_total: 6
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 34 행렬의 곱셈 (1/1) 정독 데이터 (v1.0)

288~289쪽 두 구역 6문항 전수다. 「개념원리 익히기」 2문(288-630·288-631)은 통번호 개념 확인 문항이고, 「필수·발전 예제」 4문은 상자 발문만 전사된 필수 예제 2문(289-e8·289-e9)과 그 아래 딸린 확인체크 2문(289-632·289-633)이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그(필수 ★2 · 발전/특강 ★3 · 익히기·확인체크 ★1)이며, 이 범위는 단원 도입부라 태그상 신호가 ★1~2에 몰려 있다. 그러나 예제에 딸린 확인체크 2문은 실제로는 예제 골조를 그대로 요구하므로 벤더 신호를 그대로 쓰지 않고 M·I 판정을 우선했고, 2단 이상 벌어진 문항은 아래 「분류 이슈 목록」에 기록만 했다.

이 단원은 행렬 곱의 정의(행 × 열) 확인 → 성분 비교로 미지수 결정 → 미지 행렬 $A$ 를 모른 채 열벡터의 선형결합으로 답을 얻는 「곱셈의 변형」 순으로 층이 올라간다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-288-630
  page: 288
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑿ 주어진 두 행렬의 곱을 계산. 1×2 · 2×1 · 2×2 의 조합 12개(행벡터 × 열벡터, 행벡터 × 2×2, 열벡터 × 행벡터, 2×2 × 열벡터, 2×2 × 2×2).
  category: '행렬 곱의 정의(행 × 열) → 성분별 곱의 합 계산'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 곱셈의 정의에 따른 곱 계산(꼴별 12제)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 그대로 대입하는 계산 12개. 논리 단계는 한 단계이고 반복 계산량만 있어 Mₖ 2·M_total 5.
    ⑸⑹의 2×1 × 1×2 가 2×2 로 커지는 꼴(T-표기)이 유일한 함정. 통찰 0·M_total ≤ 5 → 익히기 출발 ★1 유지.
  tier: star_1
  mechanism_primary: '앞 행렬의 i행 · 뒤 행렬의 j열의 대응 성분 곱의 합 → (i, j) 성분'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\begin{pmatrix} 10 \end{pmatrix}$ ⑵ $\begin{pmatrix} -13 \end{pmatrix}$ ⑶ $\begin{pmatrix} 10 & 26 \end{pmatrix}$ ⑷ $\begin{pmatrix} 11 & -1 \end{pmatrix}$ ⑸ $\begin{pmatrix} 6 & -2 \\ 3 & -1 \end{pmatrix}$ ⑹ $\begin{pmatrix} -10 & 15 \\ -14 & 21 \end{pmatrix}$ ⑺ $\begin{pmatrix} 6 \\ -2 \end{pmatrix}$ ⑻ $\begin{pmatrix} 31 \\ -19 \end{pmatrix}$ ⑼ $\begin{pmatrix} 12 & 3 \\ 26 & -15 \end{pmatrix}$ ⑽ $\begin{pmatrix} 9 & 20 \\ 8 & 10 \end{pmatrix}$ ⑾ $\begin{pmatrix} -1 & -2 \\ 7 & 10 \end{pmatrix}$ ⑿ $\begin{pmatrix} 8 & 2 \\ 5 & 3 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/288-630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '성분을 한 자리 정수(음수 포함)로 자유롭게 교체 가능. 제약: 곱이 정의되도록 앞 행렬의 열 수 = 뒤 행렬의 행 수를 유지하고, 꼴(1×2·2×1·2×2)의 조합 구성을 그대로 두어 결과 크기(1×1 · 1×2 · 2×1 · 2×2)가 골고루 나오게 한다. 답을 정수로 유지.'
    creative: '(1) 같은 두 행렬로 $AB$ 와 $BA$ 를 함께 묻기 → 교환법칙 불성립 확인(★2 · I-EQV 여지) (2) 한 성분을 문자로 바꿔 곱의 특정 성분만 묻기(★2) (3) 곱이 정의되지 않는 조합을 섞어 「계산할 수 없는 것을 고르시오」로 바꾸면 정의역 판정이 주 통찰이 되어 ★2.'
```

```yaml
- id: GN-CM1-288-631
  page: 288
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 미지수 $x$, $y$ 가 든 두 2×2 행렬의 곱이 주어진 행렬과 같을 때 상수 $x$, $y$ 의 값 구하기.
  category: '좌변 곱을 $x$, $y$ 의 식으로 계산 → 행렬의 상등(성분 비교) → 연립 풀이'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 곱의 성분 비교로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱을 문자식으로 전개한 뒤 네 성분 중 $x$ 만·$y$ 만 들어간 성분을 골라 쓰면 연립 없이 끝난다. 착안은 없고 표준 절차.
    미지수 2개(Mₐ 2)·문자 전개(Mₖ 2)로 M_total 7 → 익히기 출발 ★1 에서 노동량 기준 +1 하여 ★2.
  tier: star_2
  mechanism_primary: '곱을 $x$, $y$ 의 식으로 전개 → 대응 성분 비교 → $x$, $y$ 결정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=2$, $y=-4$ ⑵ $x=6$, $y=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/288-631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수 성분과 우변 행렬 값을 바꿀 수 있다. 제약: 미지수가 한 성분에만 들어가는 위치를 최소 하나 남겨야 연립이 일차로 풀리고, 해가 정수가 되도록 우변을 곱 결과로부터 역산해서 만든다. 미지수 자리를 같은 행·열에 몰면 곱 성분에서 $xy$ 가 생겨 이차가 되므로 주의.'
    creative: '(1) 미지수를 우변에 두고 좌변을 수치로 주면 역방향(★2 · I-BW 여지) (2) $x$, $y$ 가 곱 성분에서 $xy$ 로 결합되게 배치하면 연립이 이차가 되고 해 검증이 필요해 ★3(289-e8 골조) (3) 해가 존재하지 않는 우변을 주고 「이런 $x$, $y$ 가 없음을 보여라」로 바꾸면 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-289-e8
  page: 289
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    미지수 $x$, $y$ 가 든 두 행렬의 곱이 우변의 실수배 행렬과 다른 행렬의 합과 같도록 하는 실수 $x$, $y$ 의 값 구하기.
  category: '양변 성분 계산 → 성분 비교로 세 식 → 두 식으로 후보 구한 뒤 남은 식으로 기각·확정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 성분 식으로 얻은 해 후보 두 쌍 중 남은 성분 식을 만족하지 않는 쪽을 기각해야 답이 하나로 정해짐'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "행렬 곱셈·실수배 등식의 성분 비교(과잉조건에서 해 검증)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변 곱과 우변 실수배·합을 각각 성분으로 정리하면 미지수 2개에 식이 셋 붙는 과잉 결정 연립이 된다.
    일차식 쪽 두 식만 쓰면 후보가 두 쌍 나오고, 남은 제곱합 성분으로 한 쪽을 기각해야 한다(I-VF d2). 검증을 건너뛰면 틀린 쌍을 답으로 쓴다.
    함정 2개(우변 실수배 전개 · 후보 기각 누락)로 Mₜ 2·M_total 8 → 필수 예제 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '양변을 성분으로 정리 → 일차 관계 두 개로 후보 두 쌍 → 남은 성분 식으로 한 쌍 기각 → $x$, $y$ 확정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x=3$, $y=4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/289-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 실수배의 계수(2)와 상수 행렬 성분을 바꿀 수 있다. 제약: 해가 정수쌍이 되도록 먼저 $(x, y)$ 를 정하고 우변을 역산해 만든다. 후보가 두 쌍 나오되 그중 정확히 하나만 남는 구조(기각이 실제로 일어나는 배치)를 유지해야 I-VF 통찰이 살아 있다. 무리수 해가 나오는 계수는 피한다.'
    creative: '(1) 우변을 $kA+B$ 꼴 문자 계수로 주면 미지수가 셋이 되어 Mₐ 상승 ★4 (2) 검증 단계가 필요 없도록 조건을 딱 맞게 주면 절차형 ★2 로 내려간다 — I-VF 여부가 ★ 변동 지점 (3) 「이런 실수 $x$, $y$ 가 존재하도록 하는 상수의 범위」로 묻으면 I-BW 가 추가되어 ★4.'
```

```yaml
- id: GN-CM1-289-e9
  page: 289
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차정사각행렬 $A$ 에 대하여 $A$ 와 두 열벡터의 곱이 각각 주어졌을 때, 두 열벡터의 일차결합 $(2a+3c,\ 2b+3d)$ 에 $A$ 를 곱한 값 구하기.
  category: '구하는 열벡터를 주어진 두 열벡터의 일차결합으로 분해 → 곱셈의 분배·실수배 성질 → 주어진 값 대입'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구하는 열벡터를 주어진 두 열벡터의 2배와 3배의 합으로 다시 쓰는 동치 변환 — 이 변환 없이는 $A$ 를 모르므로 계산이 시작되지 않음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "열벡터의 일차결합 분해로 미지 행렬의 곱 구하기(행렬 곱셈의 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $A$ 의 성분을 미지수 넷으로 놓고 연립을 세우는 갈래는 식이 모자라 풀리지 않는다.
    구하는 열벡터가 주어진 두 열벡터의 2배·3배의 합이라는 것을 보고 분배·실수배 성질로 옮기는 것이 유일한 경로(I-EQV d2).
    미지 행렬 + 문자 성분으로 Mₐ 3·M_total 7 → 필수 예제 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '$(2a+3c,\ 2b+3d)$ 를 두 열벡터의 일차결합으로 분해 → $A$ 의 분배·실수배 → 주어진 두 값의 2배와 3배의 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 5 \\ 1 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/289-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '결합 계수(2, 3)와 주어진 두 결과 벡터의 성분을 자유롭게 바꿀 수 있다. 제약: 구하는 열벡터의 계수가 주어진 두 열벡터의 계수와 같은 비로 대응돼야 분해가 성립한다($(pa+qc,\ pb+qd)$ 꼴 유지). 음수·분수 계수도 가능하지만 답이 정수로 떨어지게 둔다.'
    creative: '(1) 세 개의 주어진 곱과 세 항 결합으로 늘리면 같은 골조 ★3 (2) 결합 계수를 문자로 두고 결과가 특정 벡터가 되도록 하는 계수를 묻게 하면 I-BW 추가 ★4 (3) 주어진 두 열벡터를 일차종속으로 만들어 분해가 불가능한 경우를 판별하게 하면 ★4 (4) 계수를 그대로 노출하지 않고 $(a+c,\ b+d)$ 처럼 1로 두면 분해 착안이 쉬워져 ★2.'
```

```yaml
- id: GN-CM1-289-632
  page: 289
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미지수 $x$, $y$ 가 든 행렬 $A$ 와 주어진 행렬 $B$ 에 대하여 $AB$ 가 영행렬일 때 $xy$ 의 값 구하기.
  category: '$AB$ 를 $x$, $y$ 의 식으로 전개 → 모든 성분 $=0$ → $x$, $y$ → 곱'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱이 영행렬이 되는 미지 성분 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $AB$ 네 성분을 각각 0 으로 놓으면 $x$ 를 주는 식과 $y$ 를 주는 식이 따로 나와 연립도 필요 없다. 착안 없음.
    $A \ne O$, $B \ne O$ 인데 $AB=O$ 이라는 개념 함정(T-표기)은 있으나 답을 구하는 절차에는 영향이 없다.
    통찰 0·M_total 6 → 확인체크 출발 ★1 에서 미지수 전개 부담으로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: '$AB$ 성분 전개 → 각 성분 $=0$ → $x$, $y$ 확정 → $xy$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/289-632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$B$ 의 성분과 $A$ 의 상수 성분을 바꿀 수 있다. 제약: $B$ 의 두 열이 서로 비례(즉 $B$ 가 정칙이 아님)해야 $A \ne O$ 인 해가 존재한다. 정칙인 $B$ 를 주면 $A=O$ 밖에 없어 문항이 성립하지 않는다. 해가 정수가 되도록 비를 정수로 잡는다.'
    creative: '(1) $BA=O$ 로 바꾸면 조건이 달라져 순서 함정이 주제가 된다(★2~3) (2) 「$AB=O$ 이지만 $A \ne O$, $B \ne O$ 인 예를 하나 만들어라」로 열면 구성 문제 ★3 (3) $AB=O$ 를 만족시키는 $A$ 가 존재할 $B$ 의 조건을 묻게 하면 I-BW·I-EQV 추가 ★4 (4) $x$, $y$ 를 같은 행에 몰아 $AB$ 성분에서 결합되게 하면 해 검증이 필요해 ★3.'
```

```yaml
- id: GN-CM1-289-633
  page: 289
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차정사각행렬 $A$ 에 대하여 $A$ 와 두 열벡터 $(2a,\ 0)$, $(0,\ 3b)$ 의 곱이 각각 주어졌을 때 $A$ 와 $(a,\ b)$ 의 곱 구하기.
  category: '주어진 두 곱을 실수배로 정규화 → $(a,\ b)$ 를 두 열벡터의 합으로 분해 → 더하기'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(a,\ b)$ 를 $(a,\ 0)$ 과 $(0,\ b)$ 의 합으로 바꿔 쓰는 동치 변환 — 그 전에 주어진 곱을 각각 1/2배, 1/3배로 정규화해야 두 조각이 맞는다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "열벡터의 일차결합 분해로 미지 행렬의 곱 구하기(행렬 곱셈의 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    289-e9 와 같은 골조에 실수배 정규화 한 단계가 앞에 붙은 꼴이다. 주어진 벡터가 $2a$, $3b$ 로 늘어나 있어 그대로 더하면 틀린다.
    분해 착안(I-EQV d2)과 미지 행렬·문자 성분(Mₐ 3)으로 M_total 7. 확인체크 태그(★1 출발)와는 2단 벌어지지만 요구 골조가 필수 예제와 동일해 ★3 으로 두고 기록만 한다.
    [분류 이슈] 벤더 신호(확인체크 → ★1)와 판정(★3)이 2단 차 — 예제에 딸린 확인체크라 태그 신호를 그대로 쓰기 어려움.
  tier: star_3
  mechanism_primary: '주어진 두 곱을 각각 $1/2$배·$1/3$배 → $(a,\ b) = (a,\ 0) + (0,\ b)$ 분해 → 두 결과의 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 1 \\ -1 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/289-633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정규화 배수(2, 3)와 주어진 두 결과 벡터의 성분을 바꿀 수 있다. 제약: 결과 벡터의 성분이 배수로 나누어떨어져야 정수 답이 나온다(예: 배수 2 면 결과 성분이 모두 짝수). 두 열벡터는 각각 한 성분만 0 이 아닌 꼴을 유지해야 합 분해가 성립한다.'
    creative: '(1) 묻는 것을 $(2a,\ 3b)$ 처럼 정규화가 필요 없는 결합으로 바꾸면 ★2 로 내려간다 — 정규화 단계 유무가 ★ 변동 지점 (2) 묻는 것을 $(pa,\ qb)$ 문자 계수로 두면 Mₐ 상승 ★4 (3) 두 열벡터를 일반 위치(둘 다 성분 두 개)로 바꾸면 289-e9 와 같은 일차결합 골조가 되고 계수를 찾는 단계가 추가되어 ★4.'
```

## 표본 판정 요약 (6문)

- ★ 분포: ★1 1 · ★2 2 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(289-e8 I-VF · 289-e9 I-EQV · 289-633 I-EQV) · 절차형 3 · premium 0
- 통찰 유형 분포: I-EQV 2 · I-VF 1 (모두 depth 2 · 감쇠 대상 없음)
- M_total 분포: 5 / 6 / 7 ×3 / 8
- type_hint 상위: 「열벡터의 일차결합 분해로 미지 행렬의 곱 구하기(행렬 곱셈의 변형)」 2 · 「행렬 곱셈의 정의에 따른 곱 계산」 1 · 「행렬 곱의 성분 비교로 미지수 구하기」 1 · 「행렬 곱셈·실수배 등식의 성분 비교(과잉조건에서 해 검증)」 1 · 「곱이 영행렬이 되는 미지 성분 구하기」 1
- 대상층: 하위권 1 · 중하위권 2 · 중위권 2 · 중상위권 1
- 그림: 0문 · 선택형 0문(전부 주관식)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-289-633 | 벤더 태그는 「확인체크」(★1 출발)이나 요구 골조가 필수 예제 289-e9 와 같고 정규화 단계가 더 붙어 ★3 으로 판정 — 2단 차. 개념원리의 「예제에 딸린 확인체크」를 익히기와 같은 ★1 출발로 볼지 예제와 같은 ★2 출발로 볼지 기준 필요 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 유일하게 반복된 type_hint 는 「열벡터의 일차결합 분해로 미지 행렬의 곱 구하기(행렬 곱셈의 변형)」(289-e9 · 289-633)다. 교재 예제 제목 「행렬의 곱셈의 변형」과 대응하므로 **MX 카탈로그에 독립 유형으로 세울 것**. 하위 변형으로 「좌표축 방향 벡터 분해(정규화 포함)」와 「일반 일차결합 분해」를 묶어도 된다.
- 288-630(정의 계산)과 288-631(성분 비교)은 통합하지 말고 「곱셈의 정의·꼴 판정」과 「상등을 이용한 미지수 결정」 두 유형으로 나누는 것이 좋다. 후자는 289-e8·289-632 와 같은 가지이며, 셋의 차이는 성립하는 식의 개수(정확·과잉)와 $AB=O$ 라는 특수 조건뿐이다.
- 289-e8(과잉조건 해 검증)은 「상등을 이용한 미지수 결정」의 상위 슬롯으로 두되, I-VF 가 붙는지 여부가 base ★2 ↔ ★3 을 가른다는 점을 카탈로그 비고에 남길 것.
- 289-632 는 「$AB=O$ 와 영인자」라는 개념 논점이 딸려 있어 계산 난도(★2)와 개념 난도가 어긋난다. 카탈로그에서는 계산형 슬롯과 개념 판별형(「$AB=O$ 이면 $A=O$ 또는 $B=O$ 인가」) 슬롯을 따로 세우는 편이 낫다.
