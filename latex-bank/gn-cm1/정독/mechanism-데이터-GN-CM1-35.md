---
name: mechanism-데이터-GN-CM1-35
description: 개념원리 공통수학1 35 행렬의 곱셈의 성질(1/1 · 292~297쪽 · 27문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 35 행렬의 곱셈의 성질
  unit_code: "35"
  part: "1/1"
  extract_range: "292~297쪽 · 292-e1~297-654"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 35 행렬의 곱셈의 성질 (1/1) 정독 데이터 (v1.0)

292~297쪽 다섯 구역 27문항 전수다. 「특강」 2문(케일리-해밀턴의 정리), 「필수·발전 예제」 12문(상자 발문만 전사된 필수 예제 5문과 그 아래 딸린 확인체크 7문), 「연습문제 STEP 1」 7문 · 「STEP 2」 4문 · 「실력 UP」 2문으로 층이 올라간다. 개념원리 고등의 난이도 신호는 구역과 예제 태그(필수 ★2 · 발전/특강 ★3 · 확인체크 ★1~2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)이며, 이 범위는 예제에 딸린 확인체크가 예제 골조를 그대로 요구하므로 확인체크의 출발점을 짝 예제와 같은 ★2 로 잡고 M·I 판정으로 ±1 했다.

단원 전체를 관통하는 축은 **행렬 곱셈이 교환법칙을 만족하지 않는다**는 한 가지다. 그래서 (1) $A^2-B^2$ · $(A\pm B)^2$ 를 인수분해·전개로 묶을 수 없어 $A$, $B$ 를 각각 구하거나 $AB+BA$ 를 통째로 다뤄야 하고, (2) $AB=BA$ 자체가 조건으로 주어지는 미정계수 문제가 나오며, (3) $E$ 와 스칼라배는 교환 가능하다는 점을 이용해 $A^2=kE$ · $A^3=\pm E$ 같은 관계로 거듭제곱을 주기로 환원한다. 통찰 라벨은 거의 I-EQV(조건의 동치 변환)와 I-PD(거듭제곱 주기 발견) 둘로 모인다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 297-649 한 문(가격표·개수표 2개)뿐이다.

## 문항 데이터

### 특강

```yaml
- id: GN-CM1-292-e1
  page: 292
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    A=(2 1; 1 3) 일 때 A^2-5A 를 구하기.
  category: "케일리-해밀턴의 정리 → A^2-(tr A)A+(det A)E=O 대입"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "케일리-해밀턴의 정리로 A^2-pA 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각합 5, 행렬식 5 를 읽어 A^2-5A=-5E. 직접 A^2 을 계산해도 두 줄이라 통찰이 서지 않는다.
    특강 구역 출발점 ★2~3 에서 통찰 0·M_total 4 로 아래쪽인 ★2.
  tier: star_2
  mechanism_primary: "대각합·행렬식 읽기 → A^2-5A=-(det A)E → -5E"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\begin{pmatrix} -5 & 0 \\ 0 & -5 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/292-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 네 개를 자유롭게 바꿀 수 있고 빼는 계수는 반드시 대각합과 같게 둔다. 제약: A^2-(tr A)A 가 -(det A)E 가 되므로 답이 스칼라행렬이 되도록 하려면 계수=대각합을 유지해야 하고, 계수를 어긋나게 두면 답이 스칼라행렬이 아니게 된다."
    creative: "(1) A^2-5A+kE=O 의 k 를 묻기(★2 유지) (2) A^2 을 pA+qE 꼴로 나타내라고 하면 미정계수 두 개(★2) (3) A^3 을 pA+qE 로 환원하게 하면 케일리식을 두 번 써야 해 ★3."
```

```yaml
- id: GN-CM1-292-634
  page: 292
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A=(1 2; 3 4), E 가 단위행렬일 때 A^2-pA=2E 를 만족시키는 실수 p 구하기.
  category: "케일리-해밀턴의 정리 → 계수 비교로 p 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "케일리-해밀턴의 정리로 A^2=pA+qE 의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각합 5, 행렬식 -2 에서 A^2-5A+(-2)E=O 즉 A^2-5A=2E 이므로 p 는 대각합 그대로.
    A^2 을 직접 계산해 성분 비교해도 같은 길이다. 특강 확인체크 출발점 ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "케일리식 A^2-(tr A)A+(det A)E=O → 우변이 2E 가 되는 계수 → p=tr A"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/292-634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 바꾸되 -det A 가 우변의 스칼라(여기서는 2)와 맞아떨어지도록 고른다. 제약: 우변을 kE 로 미리 정하면 행렬식이 -k 인 행렬만 쓸 수 있고, 그렇지 않으면 p 가 존재하지 않는다."
    creative: "(1) A^2-pA=qE 에서 p+q 를 묻기(★2) (2) 우변을 영행렬로 두고 그런 A 를 찾게 하면 조건 탐색이 생겨 ★3 (3) p 를 주고 성분 하나를 미지수로 두면 역방향(I-BW)으로 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-293-e10
  page: 293
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 이차정사각행렬 A, B 에 대해 2A+B 와 A+2B 가 주어질 때 A^2-B^2 을 구하기.
  category: "행렬 연립 → A, B 각각 결정 → 각각 제곱한 뒤 차"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬 연립방정식으로 A, B 를 구해 A^2-B^2 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 더하고 빼서 A+B, A-B 를 얻은 뒤 A, B 를 따로 구하고 A^2, B^2 을 각각 계산한다.
    A^2-B^2 을 (A+B)(A-B) 로 묶는 길이 막혀 있는 것이 이 문항의 전부인데, 이는 새 전략을 찾는 통찰이 아니라
    비가환 표기 함정(T-표기)을 피하는 쪽이라 insights 는 비우고 Mt 로 잡았다. 필수 예제 ★2, 계산만 무거워 유지.
  tier: star_2
  mechanism_primary: "두 식의 합·차 → A+B, A-B → A, B 확정 → A^2 과 B^2 을 따로 계산해 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\begin{pmatrix} -5 & 0 \\ -2 & -4 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/293-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 행렬의 성분과 계수쌍(2,1)·(1,2)를 바꿀 수 있다. 제약: 계수행렬의 행렬식(2·2-1·1=3)으로 나누어떨어져야 A, B 가 정수 성분으로 나오고, 그렇지 않으면 분수 성분 제곱이 되어 Mk 만 올라간다."
    creative: "(1) A^2-B^2 대신 (A+B)(A-B) 를 구하게 해 두 값이 다름을 보이기(★3 · I-EQV d2) (2) A^2-B^2 의 한 성분만 묻기(★2) (3) AB-BA 를 구하게 하면 같은 재료로 비가환 자체를 겨누어 ★3."
```

```yaml
- id: GN-CM1-293-e11
  page: 293
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A=(1 0; -1 1) 일 때 A^n 의 (2,1) 성분이 -10 이 되는 자연수 n 구하기.
  category: "A^2, A^3 계산 → 일반항 추정 → 성분 비교"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2, A^3 을 계산해 (2,1) 성분이 -n 으로 커지는 규칙을 스스로 찾아 A^n 의 꼴을 추정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A^n 의 규칙 추정(거듭제곱의 일반항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각 성분이 1 로 고정된 삼각행렬이라 거듭제곱이 (2,1) 성분만 등차로 움직인다.
    두세 번 계산하고 규칙을 읽는 발견 절차가 있어 I-PD d1 을 붙였으나 패턴이 한 눈에 보이는 수준.
    필수 예제 ★2, 통찰 1·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "A^2·A^3 계산 → A^n 의 (2,1) 성분이 -n → -n=-10"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/293-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(2,1) 성분 -1 을 다른 수 c 로, 목표값을 c 의 배수로 바꾼다. 제약: 대각 성분은 1 로 두어야 A^n 의 (2,1) 성분이 nc 라는 등차 규칙이 유지되고, 대각을 1 이 아닌 수로 바꾸면 등비합이 되어 난도가 크게 오른다."
    creative: "(1) 위삼각으로 바꾸어 (1,2) 성분을 묻기(★2 유지) (2) 대각을 1, 1 이 아닌 2, 1 로 두어 A^n 의 성분이 등비합이 되게 하면 ★4 (3) A^n 을 직접 쓰고 증명까지 요구하면 I-PD d2 로 ★3."
```

```yaml
- id: GN-CM1-293-635
  page: 293
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A+B 와 A-B 가 주어진 두 이차정사각행렬에 대해 A^2-B^2 의 (2,1) 성분 구하기.
  category: "합·차로 A, B 결정 → 각각 제곱 → 지정 성분만 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A, B 를 각각 구해 A^2-B^2 계산(비가환이라 인수분해 불가)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A+B, A-B 가 그대로 주어져 있어 절반씩 더하고 빼면 A, B 가 바로 나온다.
    한 성분만 물어 계산량이 293-e10 보다 가볍다. 여기서도 (A+B)(A-B) 로 묶는 길이 막힌 것은 표기 함정(Mt)으로 잡았다.
    필수 예제 짝 확인체크 출발점 ★2, 통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "(A+B)±(A-B) 의 절반 → A, B → A^2 과 B^2 의 (2,1) 성분만 계산해 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/293-635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 행렬의 성분을 바꾸고 묻는 성분 위치를 (1,1)·(2,2) 등으로 옮긴다. 제약: 대응 성분의 합·차가 모두 짝수여야 A, B 가 정수 성분이 된다."
    creative: "(1) 모든 성분의 합을 묻기(★2 유지) (2) (A+B)(A-B) 와 A^2-B^2 의 차, 즉 BA-AB 를 묻기(★3 · I-EQV) (3) A+B 와 AB 를 주고 A^2+B^2 을 묻게 하면 전개 항등식이 필요해 ★3."
```

```yaml
- id: GN-CM1-293-636
  page: 293
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A=(1 4; 0 1) 에 대해 A^10 의 (1,2) 성분 k 구하기.
  category: "거듭제곱의 규칙 추정 → n=10 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2, A^3 의 (1,2) 성분이 8, 12 로 4씩 늘어남을 보고 A^n 의 (1,2) 성분이 4n 임을 추정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A^n 의 규칙 추정(단위삼각행렬의 거듭제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    293-e11 의 위삼각 판이며 (1,2) 성분이 4n 으로 커진다. 규칙을 읽는 단계 하나뿐이라 I-PD d1.
    M_total 4 로 가볍지만 통찰이 0 은 아니어서 -1 조건에 걸리지 않는다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "A^2·A^3 의 (1,2) 성분 → 4n → n=10 대입"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/293-636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1,2) 성분 4 와 지수 10 을 바꾼다. 제약: 대각 성분 두 개를 1 로 유지해야 (1,2) 성분이 등차로 늘고, 지수는 계산 없이 일반항에 대입만 하도록 충분히 크게 둔다."
    creative: "(1) k 를 주고 지수 n 을 묻는 역방향(★2) (2) A^n 의 모든 성분의 합을 묻기(★2) (3) 대각을 1, -1 로 바꾸면 부호가 번갈아 나와 주기 판정이 추가되어 ★3."
```

```yaml
- id: GN-CM1-294-e12
  page: 294
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A=(1 1; 1 0), B=(a b; 4 1) 에 대해 (A+B)(A-B)=A^2-B^2 이 성립하도록 하는 상수 a, b 구하기.
  category: "인수분해 성립 조건 → AB=BA 로 동치 변환 → 성분 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌변을 전개하면 A^2-AB+BA-B^2 이므로 주어진 등식이 AB=BA 와 동치임을 먼저 옮겨 놓음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(A+B)(A-B)=A^2-B^2 이 성립할 조건(AB=BA)으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등식을 그대로 전개해 비교하려 들면 계산이 폭발하고, AB=BA 로 옮기면 2×2 성분 비교 네 줄로 끝난다.
    조건을 쓸 수 있는 꼴로 바꾸는 단계가 명확해 I-EQV d1. 다만 이 변환은 이 단원에서 바로 가르치는 표준이라 d2 는 주지 않았다.
    필수 예제 ★2, 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "좌변 전개 → 조건이 AB=BA 와 동치 → AB, BA 성분 비교 → a, b"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$a=5$, $b=4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/294-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 성분과 B 의 고정 성분(4, 1)을 바꿀 수 있다. 제약: AB=BA 는 성분 네 개의 연립을 주는데 A 가 스칼라행렬이면 모든 B 가 답이 되어 문제가 성립하지 않으므로 A 는 스칼라행렬이 아니어야 하고, 미지수 두 개가 유일하게 결정되도록 B 의 고정 성분을 골라야 한다."
    creative: "(1) 조건식을 (A+B)^2=A^2+2AB+B^2 으로 바꾸기(같은 골조 ★2) (2) B 의 미지수를 네 개로 늘려 AB=BA 인 B 전체를 pA+qE 꼴로 기술하게 하면 ★4 (3) 등식이 성립하지 않을 때 좌우변의 차를 구하게 하면 ★3."
```

```yaml
- id: GN-CM1-294-e13
  page: 294
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차정사각행렬 A, B 가 A+B=O, AB=E 를 만족시킬 때 A^2023-B^2023 을 A 로 나타내기.
  category: "두 조건 결합 → A^2=-E → 지수 주기 환원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B=-A 를 AB=E 에 넣어 A^2=-E 라는 단일 관계로 통합하고, 이를 거듭제곱의 주기로 바꿔 써서 홀수 지수를 -A 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "A^2=kE 로 환원해 큰 지수의 거듭제곱 구하기(단위행렬의 성질)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    성분이 하나도 주어지지 않은 완전 추상 행렬이라 조건 두 개를 A 하나의 관계식으로 줄이는 것이 유일한 길이다.
    A^2=-E 에서 A^2023=(A^2)^1011·A=-A, B^2023=(-A)^2023=A 로 부호를 두 번 다뤄야 한다(T-부호).
    필수 예제 ★2 출발이지만 Ma 3·통찰 d2 로 한 단 올려 ★3.
  tier: star_3
  mechanism_primary: "B=-A → AB=-A^2=E → A^2=-E → 홀수 지수 환원 → -A-A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2A$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/294-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2023 을 다른 홀수로 바꾼다. 제약: A^2=-E 이므로 지수를 4로 나눈 나머지만 답을 가르고, 짝수 지수로 바꾸면 A 가 답에서 사라져 문제 취지가 무너진다."
    creative: "(1) A^2023+B^2023 을 묻기(답이 O 가 되어 ★2) (2) AB=-E 로 바꾸면 A^2=E 가 되어 주기가 2 로 짧아지고 ★2 (3) A+B=O, AB=2E 처럼 스칼라를 붙이면 A^2=-2E 로 계수 누적이 생겨 ★4."
```

```yaml
- id: GN-CM1-294-637
  page: 294
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A=(1 3; 2 4), B=(0 y; x 12) 에 대해 (A+B)^2=A^2+2AB+B^2 이 성립하도록 하는 상수 x, y 구하기.
  category: "전개 성립 조건 → AB=BA → 성분 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(A+B)^2=A^2+AB+BA+B^2 이므로 주어진 등식이 AB=BA 와 동치임을 먼저 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(A+B)^2 의 전개가 성립할 조건(AB=BA)으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    294-e12 와 같은 골조로 조건만 제곱 전개 쪽으로 바뀌었다. AB 와 BA 를 계산해 네 성분을 맞추면
    (1,2)·(2,2) 성분에서 y 가, (1,1) 성분에서 x 가 차례로 나온다. 확인체크 ★2, 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "제곱 전개 → 조건이 AB=BA 와 동치 → AB, BA 성분 비교 → x, y"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$x=8$, $y=12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/294-637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 성분과 B 의 고정 성분(0, 12)을 바꿀 수 있다. 제약: A 가 스칼라행렬이면 안 되고, AB=BA 의 네 식이 서로 모순되지 않으면서 x, y 가 유일하게 나오도록 고정 성분을 정해야 한다(여기서는 B 의 (1,1) 을 0 으로 두어 식이 한 줄 줄었다)."
    creative: "(1) x+y 나 xy 를 묻기(★2 유지) (2) (A-B)^2=A^2-2AB+B^2 으로 바꾸기(같은 조건 ★2) (3) 성립하지 않는 B 를 주고 (A+B)^2-(A^2+2AB+B^2) 을 구하게 하면 BA-AB 계산이 되어 ★3."
```

```yaml
- id: GN-CM1-294-638
  page: 294
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차정사각행렬 A, B 가 A+B=E, AB=O 를 만족시킬 때 A^3+B^3 을 간단히 하기.
  category: "B=E-A 대입 → A^2=A 도출 → 거듭제곱이 자기 자신"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B=E-A 를 AB=O 에 넣어 A^2=A(멱등)라는 단일 관계를 만들고, 같은 방식으로 B^2=B 를 얻어 세제곱을 1차로 낮춤"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "A+B=E, AB=O 에서 멱등 관계로 거듭제곱 낮추기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A^3+B^3 을 (A+B)^3 에서 되돌리려 하면 비가환 교차항 때문에 막히고, A^2=A 를 먼저 얻으면 A^3=A 로 바로 떨어진다.
    성분이 전혀 없는 추상 조건(Ma 3)에 조건 결합 한 단계가 들어가 294-e13 과 같은 층으로 보았다.
    확인체크 ★2 출발이나 통찰 d2·추상도로 ★3.
  tier: star_3
  mechanism_primary: "B=E-A → AB=A-A^2=O → A^2=A, B^2=B → A^3+B^3=A+B=E"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$E$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/294-638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 을 다른 자연수로 바꿔도 답은 그대로 E 다. 제약: A^2=A 라는 멱등 관계 때문에 지수에 무관하므로 숫자 변형의 여지가 거의 없고, 조건의 우변(E, O)을 바꾸면 관계식 자체가 달라진다."
    creative: "(1) A^n+B^n 을 묻고 답이 지수에 무관함을 설명하게 하기(★3 유지) (2) A+B=E, AB=O 에서 A^2-B^2 을 묻기(A-B 가 되어 ★3) (3) AB=O 를 AB=BA 로 약화하면 A^3+B^3=(A+B)^3-3AB(A+B) 를 쓸 수 있어 ★4."
```

```yaml
- id: GN-CM1-295-e14
  page: 295
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A=(0 -1; 1 0) 에 대해 ⑴ A^n=E 를 만족시키는 자연수 n 의 최솟값 ⑵ A^18 (x y)^T=(1 2)^T 일 때 상수 x, y.
  category: "A^2=-E 확인 → 주기 4 → 큰 지수를 나머지로 환원"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2=-E, A^4=E 를 계산해 거듭제곱이 주기 4 로 순환함을 발견하고 ⑵ 의 18 을 나머지 2 로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A^n=E 의 최소 주기와 큰 지수의 주기 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 이 주기를 찾아 주고 ⑵ 가 그것을 쓰게 하는 친절한 2단 구조라 스스로 전략을 세울 여지는 적다.
    A^18=A^2=-E 이므로 ⑵ 는 부호만 뒤집으면 끝난다. 필수 예제 ★2, 통찰 1·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "A^2=-E → A^4=E(주기 4) → A^18=A^2=-E → 열벡터에 -1 배"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $x=-1$, $y=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/295-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 지수 18 과 우변 열벡터를 바꾼다. 제약: 주기 4 이므로 지수를 4로 나눈 나머지가 0, 1, 2, 3 중 무엇인지에 따라 답의 꼴이 달라지고, 나머지가 1·3 이면 성분이 뒤섞여 계산이 한 단계 늘어난다."
    creative: "(1) ⑴ 을 빼고 ⑵ 만 묻기(주기를 스스로 찾아야 해 ★3) (2) A^18+A^19 처럼 이웃 지수의 합을 묻기(★3) (3) A 를 60도 회전 꼴로 바꾸면 주기가 6 이 되어 ★3."
```

```yaml
- id: GN-CM1-295-639
  page: 295
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A=(2 -3; 1 -1) 일 때 A^n=E 를 만족시키는 자연수 n 의 최솟값 구하기.
  category: "거듭제곱을 차례로 계산 → A^3=-E → 최소 주기 6"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2, A^3 을 차례로 계산해 A^3=-E 임을 발견하고 거기서 A^6=E 라는 최소 주기를 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A^n=E 를 만족시키는 최소 자연수(거듭제곱의 주기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A^3 이 E 가 아니라 -E 로 나오는 것이 이 문항의 눈이며, 여기서 한 번 더 제곱해 6 을 답해야 한다.
    A^3=-E 에서 멈추면 3 을 답하게 되는 자리다. 확인체크 ★2, 통찰 1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A^2 → A^3=-E → 양변 제곱 → A^6=E → 최솟값 6"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/295-639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 바꾸되 대각합과 행렬식이 주기를 결정한다. 제약: A^n=E 가 되려면 (대각합, 행렬식)이 (1,1)·(0,1)·(-1,1)·(2,1)·(-2,1) 같은 조합이어야 하고, 행렬식이 1 이 아니면 어떤 n 에서도 E 가 되지 않는다."
    creative: "(1) A^100 을 구하게 하기(주기 환원 ★2) (2) A^n=-E 인 최소 n 을 묻기(★2) (3) A^n=E 가 되는 A 를 직접 만들라고 하면 조건 설계가 되어 ★4."
```

```yaml
- id: GN-CM1-295-640
  page: 295
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A=(1 1; -3 -2) 에 대해 A^16 (x y)^T=(1 -6)^T 일 때 x-y 의 값 구하기.
  category: "주기 A^3=E 발견 → A^16=A → 연립방정식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2, A^3 을 계산해 A^3=E 를 발견하고 16=3·5+1 로 지수를 1 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱의 주기로 A^n(열벡터) 방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기를 찾고 나면 A(x y)^T=(1 -6)^T 라는 2원 1차 연립이 남는다.
    지수 환원과 연립 풀이 두 덩어리이고 주기 발견 자체는 계산 두 번이라 I-PD d1.
    확인체크 ★2, 통찰 1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A^3=E → A^16=A → A(x y)^T=(1 -6)^T 연립 → x-y"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/295-640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 16 과 우변 열벡터를 바꾼다. 제약: 지수를 3으로 나눈 나머지가 0 이면 A^n=E 가 되어 연립이 사라져 문제가 무너지므로 나머지가 1 또는 2 가 되게 두고, 우변은 연립의 해가 정수가 되도록 고른다."
    creative: "(1) 나머지가 2 가 되는 지수로 바꿔 A^2 의 연립을 풀게 하기(★3) (2) x, y 를 주고 우변을 구하게 하는 순방향(★2) (3) A^n 이 E 가 되는 최소 n 까지 함께 묻는 2단 문항(★3)."
```

```yaml
- id: GN-CM1-295-641
  page: 295
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A 가 (1/2)(1 -3; 1 1) 일 때 A+A^2+A^3+ ... +A^120 의 모든 성분의 합 구하기.
  category: "A^3=-E 발견 → 연속 6항의 합이 O → 20묶음 소거"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분수 계수 행렬의 거듭제곱을 계산해 A^3=-E, 곧 주기 6 을 찾아냄"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^4=-A, A^5=-A^2, A^6=-A^3 이므로 연속 6항의 합이 영행렬임을 알아채고 120항을 20개 묶음으로 통째 소거"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "거듭제곱의 주기를 이용한 행렬 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    120항을 직접 더할 수는 없고 주기 6 과 앞뒤 항이 부호로 상쇄된다는 두 가지를 모두 써야 O 가 나온다.
    묶음 소거를 놓치면 6항씩 더해도 끝나지 않는 자리다. 확인체크 ★2 출발이지만 통찰 2개 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "A^3=-E → A^(k+3)=-A^k → 연속 6항 합이 O → 120=6·20 → 합이 O → 성분 합 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/295-641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 120 을 6의 배수로 바꾸면 답은 그대로 0 이고, 6의 배수가 아닌 수로 두면 나머지 항만 남아 답이 달라진다. 제약: 계수 1/2 과 성분은 행렬식이 1, 대각합이 1 이 되도록 유지해야 A^3=-E 가 성립한다."
    creative: "(1) 항 수를 122 처럼 6의 배수가 아니게 두어 남는 항을 계산하게 하기(★4) (2) A+A^2+ ... +A^n=O 가 되는 최소 n 을 묻기(★4 · I-BW) (3) 성분의 합 대신 (1,1) 성분을 묻기(★3 유지)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-296-642
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    2×1 행렬 A, 1×2 행렬 B, 2×2 행렬 C 에 대해 곱을 정의할 수 없는 것 고르기. 5지선다.
  category: "앞 행렬의 열 수와 뒤 행렬의 행 수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 곱이 정의되는 조건(꼴 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 보기의 꼴을 (2×1)(1×2) 식으로 적어 가운데 두 수가 같은지만 보면 된다. 계산은 전혀 없다.
    STEP 1 출발점 ★2 이지만 통찰 0·M_total 4 이하라 -1 규칙을 적용해 ★1.
  tier: star_1
  mechanism_primary: "각 곱의 꼴을 (m×n)(n×l) 로 적기 → 가운데가 어긋나는 것 하나"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 값은 답에 전혀 영향이 없고 세 행렬의 꼴(2×1, 1×2, 2×2)만이 정답을 결정한다. 제약: 정의되지 않는 보기가 정확히 하나가 되도록 꼴을 배치해야 한다."
    creative: "(1) 정의되는 것을 모두 고르라고 바꾸기(★1 유지) (2) 곱이 정의되면서 결과가 1×1 인 것을 묻기(★2) (3) 3×2, 2×3 등으로 꼴을 늘리고 곱한 결과의 꼴까지 묻기(★2)."
```

```yaml
- id: GN-CM1-296-643
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A=(x 1; 1 y) 가 A^2+2A-E=O 를 만족시킬 때 x^2+y^2 의 값 구하기.
  category: "A^2 계산 → 성분별 방정식 → 대칭식 값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A^2+pA+qE=O 에서 성분 비교로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A^2 을 직접 계산해 네 성분을 0 으로 놓으면 대각에서 x^2+2x=0, y^2+2y=0 이 나오고
    비대각에서 x+y+2=0 이 나와 조합이 걸러진다. 세 식을 함께 푸는 표준 연립이라 통찰로 세지 않고
    잘못된 조합을 거르는 자리만 Mt 로 잡았다. STEP 1 ★2, M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "A^2 계산 → 성분별 방정식 → 비대각 식으로 조합 결정 → x^2+y^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 비대각 성분 1 과 식의 계수 2, -1 을 바꿀 수 있다. 제약: 대각 성분이 만족하는 이차방정식의 해가 유리수가 되도록 계수를 고르고, 비대각 식이 두 해의 조합을 하나로 걸러 주어야 답이 유일해진다."
    creative: "(1) x+y 나 xy 를 묻기(★2 유지) (2) 케일리-해밀턴으로 대각합·행렬식을 읽어 풀게 유도하면 ★3 (3) 조건을 만족시키는 A 가 몇 개인지 묻기(I-VF 가 붙어 ★3)."
```

```yaml
- id: GN-CM1-296-644
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차정사각행렬 A 에 대해 A(1 0)^T 와 A^2 (1 0)^T 가 주어질 때 A^3 (1 0)^T 의 모든 성분의 합 구하기.
  category: "결합법칙으로 앞 결과에 A 를 한 번 더 곱하기"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^3(1 0)^T=A(A^2(1 0)^T) 로 보아, A 를 다 구한 뒤 세제곱하는 대신 주어진 열벡터에 A 를 한 번 더 곱하는 구조로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "결합법칙으로 A^n(열벡터) 를 차례로 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A(1 0)^T 가 A 의 첫 열이라는 점과 A(1 3)^T 가 두 번째 조건이라는 점을 합치면 A 의 나머지 열이 정해진다.
    그 뒤 A 를 (-5 6)^T 에 곱하면 끝이라 A^3 을 실제로 만들 필요가 없다. STEP 1 ★2, 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "첫 조건 = A 의 첫 열 → 둘째 조건으로 남은 열 결정 → A 를 (-5 6)^T 에 한 번 더 곱해 성분 합"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$-26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 열벡터의 성분을 바꾼다. 제약: 첫 조건의 열벡터가 A 의 첫 열이 되므로 둘째 조건에서 나머지 성분이 정수로 떨어지려면 첫 열의 성분으로 나누어떨어지는 값을 골라야 한다."
    creative: "(1) A^4(1 0)^T 까지 늘리기(★2 유지) (2) (1 0)^T 대신 일반 열벡터로 바꾸면 A 를 전부 구해야 해 ★3 (3) A 자체를 구하게 하면 ★3."
```

```yaml
- id: GN-CM1-296-645
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A 가 대각성분 1, 2 인 대각행렬일 때 A^n 의 대각성분이 1, 64 가 되는 자연수 n 구하기.
  category: "대각행렬의 거듭제곱 → 지수방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대각행렬의 거듭제곱"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대각행렬은 거듭제곱해도 대각이고 각 성분이 그대로 거듭제곱된다는 사실을 쓰면 2^n=64 한 줄이다.
    이 사실은 단원에서 바로 제시되는 성질이라 패턴 발견으로 세지 않았다.
    STEP 1 ★2 출발이나 통찰 0·M_total 3 → -1 로 ★1.
  tier: star_1
  mechanism_primary: "대각행렬의 n제곱 = 성분의 n제곱 → 2^n=64 → n=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대각성분 2 와 목표 64 를 다른 거듭제곱쌍(3 과 81, 5 와 625)으로 바꾼다. 제약: 목표값이 밑의 정수 거듭제곱이어야 n 이 자연수로 나오고, 다른 대각성분은 1 로 두어야 조건이 한 줄로 줄어든다."
    creative: "(1) 두 대각성분을 모두 1 이 아닌 수로 두어 두 지수식을 동시에 만족시키게 하기(★2) (2) 대각이 아닌 성분을 하나 넣어 삼각행렬로 만들면 등비합이 생겨 ★3 (3) A^n 의 모든 성분의 합이 65 가 되는 n 을 묻기(★2)."
```

```yaml
- id: GN-CM1-296-646
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차정사각행렬 A, B, C 와 단위행렬 E, 영행렬 O 에 대한 다섯 명제 중 옳지 않은 것 고르기. 5지선다.
  category: "곱셈의 성질(결합·분배·E 와의 교환)과 영인자 반례 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 곱셈에 대한 성질의 참·거짓(반례 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E 의 스칼라배는 어떤 행렬과도 교환되므로 ①·③·⑤ 는 성립하고, A^2=-E 인 회전꼴 행렬이 실제로 있어 ④ 도 성립한다.
    남는 ② 는 A^2-B^2=(A+B)(A-B) 가 아니어서 실수 인수분해의 직관이 깨지는 자리다.
    보기별 판정이 각각 한 줄이라 통찰로 세지 않고 함정 두 가지(실수 대수 전이·영인자)를 Mt 2 로 잡았다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "E 와의 교환 가능성으로 참인 보기 확인 → 남는 보기에 비가환·영인자 반례"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "①의 계수 1, -3 처럼 E 의 스칼라배에 붙는 수만 바꿀 수 있고 나머지 보기는 수치가 없다. 제약: 거짓 보기가 정확히 하나가 되도록 나머지 넷은 E 나 결합·분배처럼 무조건 성립하는 문장으로 유지한다."
    creative: "(1) 옳은 것을 모두 고르는 ㄱㄴㄷ 형식으로 바꾸기(★3) (2) 거짓 보기에 대한 반례를 직접 쓰게 하면 구성 부담이 생겨 ★3 (3) AB=O 이면 A=O 또는 B=O 라는 영인자 명제를 넣으면 ★2 유지."
```

```yaml
- id: GN-CM1-296-647
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A=(0 -1; 1 0) 일 때 (2E+3A)(3E+2A)=xE+yA 를 만족시키는 실수 x, y 에 대해 x+y 구하기.
  category: "E 와 A 의 1차식 전개 → A^2=-E 로 환원 → 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개해서 나온 A^2 항을 -E 로 바꿔 넣어 식 전체를 E 와 A 의 1차식으로 내려 계수를 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A^2=kE 를 이용해 E 와 A 의 1차식으로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E 의 스칼라배는 A 와 교환되므로 실수처럼 전개해도 되고, 남는 A^2 만 -E 로 갈아 끼우면 된다.
    행렬 성분을 끝까지 곱해도 풀리지만 그 길은 계산이 길어진다. STEP 1 ★2, 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "실수처럼 전개 → A^2=-E 대입 → E 계수와 A 계수 비교 → x+y"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 1차식의 계수(2, 3)와 (3, 2)를 바꿀 수 있다. 제약: A 는 A^2 이 E 의 스칼라배가 되는 행렬로 유지해야 1차식 환원이 가능하고, 그렇지 않으면 xE+yA 꼴로 정리되지 않는다."
    creative: "(1) (E+A)^4 처럼 거듭제곱으로 바꾸기(★3) (2) xy 를 묻기(★2 유지) (3) A^2=E 인 행렬로 바꾸면 부호가 달라져 같은 골조로 ★2, A^2=A+E 꼴로 바꾸면 계수 누적이 생겨 ★3."
```

```yaml
- id: GN-CM1-296-648
  page: 296
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A=(2 -1; 3 -1) 에 대해 A^2025 (x y)^T=(-2 4)^T 일 때 x-y 의 값 구하기.
  category: "A^3=-E 발견 → 2025 를 주기로 환원 → 열벡터 비교"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^2, A^3 을 계산해 A^3=-E 를 찾고 2025 를 6(또는 3)으로 나눈 나머지로 지수를 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱의 주기로 A^n(열벡터) 방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A^3 이 -E 라 2025 를 나눈 뒤에도 부호를 따져야 하고, 환원이 끝나면 열벡터에 -1 을 곱하는 것으로 끝난다.
    295-640 과 같은 골조이며 지수만 커졌다. STEP 1 ★2, 통찰 1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "A^3=-E → A^2025=(A^3)^675=-E → -(x y)^T=(-2 4)^T → x-y"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/296-648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2025 와 우변 열벡터를 바꾼다. 제약: 지수를 3으로 나눈 나머지가 0 이면 A^n 이 ±E 가 되어 한 줄로 끝나고, 나머지가 1·2 면 연립을 풀어야 해 한 단계 늘어난다. 우변은 답이 정수가 되게 고른다."
    creative: "(1) 나머지가 1 인 지수로 바꿔 연립을 풀게 하기(★3) (2) x+y 대신 xy 를 묻기(★2 유지) (3) A^n 이 E 가 되는 최소 n 을 함께 묻는 2단 문항(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-297-649
  page: 297
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    문구점별 노트·펜 가격표 X 와 학생별 구입 개수표 Y 가 주어질 때, A 가 Q 문구점에서 구입한 가격을 나타내는 것 고르기. 5지선다.
  category: "표의 행·열 의미 → 행렬 곱의 어느 성분인지 번역"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가격표의 행이 문구점·열이 품목, 개수표의 행이 품목·열이 학생임을 읽어 곱하는 순서(XY 인지 YX 인지)와 성분 위치를 동시에 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실생활 표를 행렬 곱의 성분으로 번역"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱셈 자체는 하지 않아도 되고, 가격표의 행(문구점)과 개수표의 열(학생)이 각각 결과의 행·열이 된다는 대응만 잡으면 된다.
    순서를 뒤집으면 품목 축이 맞지 않아 곱이 의미를 잃는다는 점이 이 문항의 유일한 장벽이다.
    [분류 이슈] STEP 2(★3 출발)이나 계산 부담이 STEP 1 수준이라 ★2 성격도 있어 후보를 남긴다.
  tier: star_3
  mechanism_primary: "가격표 행=문구점·개수표 열=학생 → 두 표의 품목 축을 맞춰 XY → (Q행, A열) 성분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: crop:fig-297-649.png
  latex: latex-bank/gn-cm1/items/297-649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가격과 개수를 자유롭게 바꿔도 정답 보기는 바뀌지 않는다. 제약: 그림의 표 라벨(P·Q / 노트·펜 / A·B)과 행렬 X, Y 의 배치가 고정이므로 수치를 바꿔도 라벨과 행·열 대응은 그대로 두어야 하고, 라벨 배치를 바꾸면 크롭 이미지도 함께 바꿔야 한다."
    creative: "(1) B 가 P 문구점에서 산 가격을 묻기(★3 유지) (2) 두 학생이 각각 더 싼 문구점을 고르게 하면 네 성분 비교가 들어가 ★4 (3) 표를 세 문구점·세 품목으로 늘리면 성분 위치 판단이 같은 골조로 ★3."
```

```yaml
- id: GN-CM1-297-650
  page: 297
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차정사각행렬 A 에 대해 A(2a b)^T 와 A(a 2b)^T 가 주어질 때 A(2a 3b)^T 를 구하기(ab 는 0 이 아님).
  category: "분배법칙으로 A(a 0)^T, A(0 b)^T 를 미지 벡터로 두고 연립"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 구하는 대신 A(a 0)^T 와 A(0 b)^T 를 각각 한 덩어리 미지 벡터로 두고, 주어진 두 식을 그 벡터들의 연립으로 바꿔 목표를 그 선형결합으로 표현"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "행렬의 분배법칙(선형성)으로 A(열벡터) 값 합성"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 도 a, b 도 끝내 구해지지 않는다. 구할 필요가 없다는 것을 알아채는 것이 전부이며,
    목표 벡터 (2a 3b)^T 를 두 조건 벡터의 선형결합으로 나타내는 계수를 찾으면 끝난다.
    성분이 하나도 확정되지 않은 추상 상태(Ma 3)에서 구조만으로 답을 만든다. STEP 2 ★3, 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "A(a 0)^T=P, A(0 b)^T=Q 로 치환 → 2P+Q, P+2Q 연립 → 2P+3Q"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 5 \\ 1 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/297-650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건의 계수쌍(2,1)·(1,2)와 목표의 계수쌍(2,3), 우변 열벡터를 바꿀 수 있다. 제약: 두 조건의 계수행렬이 가역이어야(여기서는 행렬식 3) P, Q 가 결정되고, 목표 계수쌍이 그 두 조건의 실수 선형결합으로 표현돼야 답이 나온다."
    creative: "(1) 목표를 A(3a b)^T 등으로 바꾸기(★3 유지) (2) 조건을 세 개 주고 하나가 나머지의 결합인지 확인하게 하면 I-VF 가 붙어 ★4 (3) A 를 실제로 구하라고 하면 a, b 가 남아 불가능함을 설명해야 해 ★4."
```

```yaml
- id: GN-CM1-297-651
  page: 297
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 x^2-7x-1=0 의 두 근을 대각성분으로 갖는 A=(근1 1; 1 근2) 에 대해 A^2 의 두 대각성분의 합 구하기.
  category: "A^2 의 대각성분 → 두 근의 대칭식 → 근과 계수의 관계"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "행렬 거듭제곱에서 나온 두 대각성분의 합이 근의 제곱합이라는 대칭식임을 보고 이차방정식 단원의 근과 계수의 관계로 넘겨 값을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근과 계수의 관계를 이용한 행렬 거듭제곱의 성분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근을 실제로 구하면 무리수가 되어 계산이 커지고, 필요한 것은 대각성분 두 개뿐이라 제곱합으로 환원된다.
    행렬(MX)과 이차방정식(EQ) 두 단원의 도구가 모두 있어야 끊기지 않아 I-XU 로 잡았다.
    비대각 성분은 묻지 않으므로 계산할 필요가 없다는 점도 같이 읽어야 한다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "A^2 의 대각성분 = 근의 제곱+1 → 합이 근의 제곱합+2 → (합)^2-2(곱) 로 환원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$53$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/297-651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수(-7, -1)와 A 의 비대각 성분 1 을 바꾼다. 제약: 근을 직접 구하지 않게 하려면 판별식이 완전제곱이 아니어야 하고, 비대각 성분을 c 로 두면 대각성분 합에 2c^2 이 더해지므로 답이 정수가 되게 고른다."
    creative: "(1) A^2 의 모든 성분의 합을 묻기(비대각까지 필요해 ★3 유지) (2) A^3 의 대각합을 묻기(세제곱 대칭식이 되어 ★4) (3) 근이 대각이 아니라 비대각에 오도록 배치를 바꾸면 곱 형태가 나와 ★3."
```

```yaml
- id: GN-CM1-297-652
  page: 297
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 이차정사각행렬 A, B 에 대해 A+B 와 AB+BA 가 주어질 때 (A-B)^2 을 구하기.
  category: "비가환 전개 → (A-B)^2=(A+B)^2-2(AB+BA)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 제곱을 각각 교차항까지 전개해 비교하면 (A-B)^2=(A+B)^2-2(AB+BA) 라는 항등식이 나오고, 주어진 두 자료만으로 답이 결정됨을 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비가환 전개로 (A-B)^2 을 (A+B)^2 과 AB+BA 로 환원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB 와 BA 를 따로 알 수 없고 합만 주어졌다는 점이 핵심이다. (A+B)^2 과 (A-B)^2 이 교차항의 부호만 다르므로
    합 AB+BA 만으로 둘을 잇는 항등식이 만들어진다. A, B 를 각각 구하려 하면 조건이 모자라 막힌다.
    성분이 전혀 확정되지 않은 추상 상태(Ma 3)에 항등식 유도 한 단계. STEP 2 ★3, 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "(A+B)^2 과 (A-B)^2 을 교차항까지 전개 → 차이가 2(AB+BA) → 주어진 두 행렬로 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 20 & -3 \\ -12 & 5 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/297-652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주어진 행렬의 성분을 자유롭게 바꿀 수 있다. 제약: (A+B)^2 을 직접 계산하므로 성분이 작은 정수여야 하고, 답이 정수 행렬이 되도록 AB+BA 의 성분은 짝수로 두는 편이 안전하다."
    creative: "(1) A^2+B^2 을 묻기(같은 항등식 계열 ★3) (2) AB+BA 대신 AB-BA 를 주면 항등식이 성립하지 않아 답을 낼 수 없음을 설명하게 하는 논증형(★4) (3) (A+B)^3 을 묻기(교차항이 여섯 개로 늘어 ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-297-653
  page: 297
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    이차정사각행렬 A, B 가 AB=2BA 를 만족시킬 때 A^4 B^4 = k(AB)^4 를 만족시키는 상수 k 구하기.
  category: "BA 를 AB 로 바꾸는 교환 규칙 → 교환 횟수만큼 2의 거듭제곱 누적"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=2BA 를 BA 가 A 왼쪽으로 지나갈 때마다 1/2 배가 붙는 이동 규칙으로 바꿔 읽음"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(AB)^2, (AB)^3 을 정리해 보며 B 를 오른쪽으로 옮기는 교환 횟수가 1, 3, 6 으로 누적되어 (AB)^4 이 A^4 B^4 의 2^(-6) 배가 됨을 발견"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "AB=kBA 조건에서 (AB)^n 과 A^n B^n 의 관계"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    성분이 전혀 없이 교환 관계 하나로만 푸는 문항이다. (AB)^4 을 풀어 쓴 뒤 B 를 하나씩 오른쪽으로 보내면
    교환할 때마다 계수 1/2 이 붙고, 그 횟수가 1+2+3 으로 쌓인다는 규칙을 스스로 세워야 한다.
    규칙을 세우지 않고 기계적으로 옮기면 중간에 계수를 놓친다. 실력 UP ★4, 통찰 2개로 유지.
  tier: star_4
  mechanism_primary: "BA=(1/2)AB 이동 규칙 → (AB)^4 에서 B 를 오른쪽으로 모으며 1/2 을 여섯 번 누적 → A^4B^4=2^6 (AB)^4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/297-653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교환 계수 2 와 지수 4 를 바꾼다. 제약: 계수가 c 이고 지수가 n 이면 k=c^(n(n-1)/2) 이라는 구조가 그대로이므로 답이 지나치게 커지지 않게 c 와 n 을 고른다. c=1 로 두면 교환 가능해져 문제가 사라진다."
    creative: "(1) A^3B^3 과 (AB)^3 의 비를 묻기(★3 · 누적 횟수가 3 으로 짧아짐) (2) 일반 n 에 대해 k 를 n 으로 나타내게 하면 규칙 증명이 되어 ★5 급 (3) BA=2AB 로 뒤집어 부호 방향을 반대로 하기(★4 유지)."
```

```yaml
- id: GN-CM1-297-654
  page: 297
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A=(0 -1; 1 a) 가 A^2+A+E=O 를 만족시킬 때 A^101 의 모든 성분의 합 구하기.
  category: "성분 비교로 a 결정 → A^3=E 유도 → 지수 주기 환원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A^2+A+E=O 의 양변 왼쪽에 A-E 를 곱하면 A^3-E=O, 곧 A^3=E 임을 끌어내 101제곱을 주기 3 의 나머지로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "A^2+A+E=O 에서 A^3=E 로 지수 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A^2 을 직접 계산해 성분 비교로 a 를 정하는 앞부분은 절차지만, 101제곱은 거듭제곱을 세어서는 닿지 않는다.
    세제곱 인수분해 항등식을 행렬에 그대로 옮겨 A^3=E 를 얻는 단계가 이 문항의 문턱이고,
    그 뒤 A^101=A^2=-A-E 로 바꾸면 성분 합이 바로 나온다.
    [분류 이슈] 실력 UP(★4 출발)이나 통찰 1개·M_total 7 이라 ★3 성격도 있어 후보를 남긴다.
  tier: star_4
  mechanism_primary: "성분 비교로 a 결정 → (A-E)(A^2+A+E)=A^3-E → A^3=E → A^101=A^2=-A-E → 성분 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/297-654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 101 을 바꾸면 3으로 나눈 나머지에 따라 답이 E, A, A^2 중 하나로 바뀐다. 제약: 조건식이 A^2+A+E=O 여야 A^3=E 가 나오고, 상수항이나 계수를 바꾸면(예: A^2-A+E=O) 주기가 6 으로 달라진다. A 의 미지 성분 자리는 대각에 두어야 성분 비교로 유일하게 결정된다."
    creative: "(1) A^100+A^101+A^102 를 묻기(연속 세 항의 합이 O 가 되어 ★4 유지) (2) A^2-A+E=O 로 바꿔 주기 6 을 찾게 하기(★4) (3) a 를 주지 않고 조건을 만족시키는 A 가 존재함을 보이게 하면 ★5 급."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 2 · ★2 16 · ★3 7 · ★4 2 · ★5 0
- 통찰형 19 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 10 · I-PD 9 · I-RT 1 · I-XU 1 (총 21개 라벨 · 2개짜리 2문)
- type_hint 상위: 「거듭제곱의 주기·규칙으로 지수 환원」 9(293-e11·293-636·295-e14·295-639·295-640·295-641·296-645·296-648·297-654) · 「추상 조건 결합으로 A 의 관계식 도출」 4(294-e13·294-638·297-652·297-653) · 「A^n 이 열벡터에 작용하는 계산」 4(295-640·296-644·296-648·297-650) · 「AB=BA 성립 조건으로 미정계수」 2(294-e12·294-637) · 「A, B 를 각각 구해 A^2-B^2」 2(293-e10·293-635) · 「케일리-해밀턴으로 A^2 을 1차식 환원」 2(292-e1·292-634)
- M_total 분포: 3~4 가 4문 · 5~6 이 9문 · 7 이 8문 · 8~9 가 6문 (최대 297-653 의 9)
- 그림: 1문(`crop:fig-297-649.png` · 가격표와 개수표 2개)
- 구역별 ★ 중앙값: 특강 ★2 · 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 (벤더 신호와 대체로 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-294-638 | 태그만 보면 확인체크(★1 출발)인데 성분 없는 추상 조건 두 개를 멱등 관계로 결합해야 해 ★3 판정. 짝 필수 예제 294-e13 과 같은 골조라 확인체크 출발점을 ★2 로 보고 ★3 으로 둠 | ★2 / ★3 |
| GN-CM1-295-641 | 같은 사유. 확인체크 태그 기준 ★1 출발과 2단 차이. 주기 발견(I-PD d2)과 6항 묶음 소거(I-EQV) 두 통찰이 모두 필요해 ★3 | ★2 / ★3 |
| GN-CM1-297-649 | STEP 2(★3 출발)이나 곱셈을 실제로 하지 않고 표의 행·열 대응만 읽으면 끝나 계산 부담이 STEP 1 수준. 라벨은 벤더 신호를 따라 ★3 유지 | ★2 / ★3 |
| GN-CM1-297-654 | 실력 UP(★4 출발)이나 통찰 1개·M_total 7 로 STEP 2 문항들과 같은 층. A^3=E 유도가 문턱이라 라벨은 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「A^n 의 주기 환원」(A^k=±E 를 찾아 큰 지수를 나머지로 줄이는 계열 · 이 범위 9문으로 가장 두껍다). ⑵ 「A^n 이 열벡터에 작용」(A 를 다 구하지 않고 열벡터 쪽에서 처리하는 계열 · 296-644·297-650 처럼 분배법칙·결합법칙이 주도구). ⑶ 「비가환 전개 항등식」((A±B)^2·A^2-B^2·A^3+B^3 을 AB+BA 나 멱등 관계로 환원 · 294-638·297-652·297-653). ⑷ 「AB=BA 성립 조건 미정계수」(294-e12·294-637 은 조건식 겉모습만 다르고 완전히 같은 유형이므로 한 유형으로 묶고 발문 변형으로 처리).
- **통합해도 될 유형**: 292-e1·292-634 의 케일리-해밀턴은 296-647 의 「A^2=kE 1차식 환원」과 도구가 같으므로 「A^2 을 A 와 E 의 1차식으로 내리기」 한 유형으로 묶을 수 있다. 293-e11·293-636·296-645 의 삼각·대각행렬 거듭제곱도 「성분이 규칙적으로 늘어나는 행렬의 A^n」 하나로 충분하다.
- **경계 주의**: 「주기 환원」과 「열벡터 작용」이 겹친 295-640·296-648 은 어느 유형으로 등재하든 다른 쪽 통찰이 숨으므로, 카탈로그에서는 주 유형을 주기 쪽으로 두고 열벡터 처리는 변형 축으로 기록하는 편이 안전하다.
- 이 범위는 I-XU 가 297-651 한 문뿐이고 I-SC·I-VF·I-SYM 은 0 이다. ★5 자격(통찰 3개 이상 + SC/VF/SYM/XU)을 만족하는 문항이 없어 ★5 는 비어 있다.
