---
name: mechanism-데이터-GN-CM1-30
description: 개념원리 공통수학1 30 순열(1/1 · 246~255쪽 41문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 30 순열
  unit_code: "30"
  part: "1/1"
  extract_range: "246~255쪽 · 246-537~255-571"
  total_problems: 41
  unit_total: 41
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 30 순열 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 246~255쪽 30단원 순열 전 41문항을 다룬다. 전사본의 group section 은 「개념원리 익히기」 4 · 「필수·발전 예제」 20(필수 5 · 발전 1 · 확인체크 14) · 「연습문제 STEP 1」 7 · 「연습문제 STEP 2」 5 · 「연습문제 실력 UP」 5 로, 절도 그 순서를 따랐다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」 통번호는 ★1, 예제에 딸린 「확인체크」는 그 예제와 같은 유형이라 ★2, 「필수」 예제 ★2 · 「발전」 예제 ★3, STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 잡고 M_total 과 통찰로 ±1 조정했다.

단원의 골조는 여섯 갈래로 갈린다. ⑴ nPr·계승의 계산과 등식에서 n·r 구하기, ⑵ 순열의 수 기본(일렬로 세우기·뽑아 세우기·자리 배정), ⑶ 이웃·비이웃(묶음 · 자음 배열 뒤 사이 자리 끼워넣기 · 여사건), ⑷ 자리 조건(양 끝·사이 문자 수·적어도 한쪽), ⑸ 0 을 포함한 자연수 개수(짝수·배수 조건), ⑹ 사전식 배열(순서 ↔ 누적 개수, 정방향·역방향). 함정은 T-범위(n ≥ r · 맨 앞에 0 불가 · 남은 개수 갱신)와 T-경계(교대 배치에서 어느 쪽이 먼저인지 · 「적어도」의 여사건 경계)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 2문(253-558 · 254-562)이고 255-568 은 본문에 표가 들어 있다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-246-537
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 5P2 · 4P0 · 4! · 6P2×3! 의 값 구하기.
  category: "순열 기호·계승의 정의 → 값 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nPr 과 n! 의 값 계산(nP0=1 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    nPr 을 n 부터 r 개 내려 곱하고 n! 을 정의대로 펴면 끝나는 정의 확인.
    ⑵ 의 4P0=1 만 표기 약속을 알아야 하므로 T-표기 하나로 잡았다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "nPr = n(n-1)…(r개) · n! 정의 적용 → 곱셈"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $20$ ⑵ $1$ ⑶ $24$ ⑷ $180$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/246-537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n, r 을 n ≥ r ≥ 0 범위에서 자유롭게(7P3 · 5P0 · 6! 등). 제약: 값이 세 자리 안에서 정리되도록 n ≤ 7 정도로 두고, r=0 인 항 하나는 남겨 nP0=1 약속을 계속 확인시킨다."
    creative: "(1) nPn 과 n! 이 같음을 보이는 항 추가(★1 유지) (2) 5P2 + 4P2 처럼 두 값을 더하거나 비로 묻기(★1) (3) nPr 을 n!/(n-r)! 꼴로 고쳐 쓰게 하면 표현 전환이 들어가 ★2."
```

```yaml
- id: GN-CM1-246-538
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ nP3=24 · nPn=720 · 8Pr=56 · 10Pr=1 · 6P3=6!/n! · 9Pr=9!/4! 를 만족시키는 n 또는 r 구하기.
  category: "nPr 을 곱 꼴 또는 n!/(n-r)! 꼴로 펴기 → 미지수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nPr 을 포함한 등식에서 n 또는 r 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 네 문항은 연속하는 정수의 곱으로 펴서 값을 맞추고, 뒤 두 문항은 nPr = n!/(n-r)! 꼴로 옮겨 분모를 비교하는 두 가지 도구를 번갈아 쓴다.
    미지수가 지수 자리(r)에도 오고 n ≥ r ≥ 0 범위를 확인해야 해서 T-범위 하나.
    익히기 ★1 출발이지만 6개 소문항이 두 표현을 모두 요구하고 M_total 7 이라 +1 → ★2.
  tier: star_2
  mechanism_primary: "nPr 을 연속 정수의 곱 또는 n!/(n-r)! 로 펴기 → 양변 비교 → n ≥ r 범위 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $6$ ⑶ $2$ ⑷ $0$ ⑸ $3$ ⑹ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/246-538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 값을 연속 정수의 곱으로 분해되는 수로만 바꾼다(nP3=60 → n=5, nP2=90 → n=10). 제약: 해가 자연수 하나로 떨어져야 하고, 팩토리얼 꼴 소문항은 n!/(n-r)! 의 분모가 실제 남는 항과 일치해야 한다."
    creative: "(1) nPn=720 을 n!=720 으로 바꿔 두 기호가 같음을 확인시키기(★1) (2) 10Pr=1 처럼 r=0 을 답으로 두는 항을 남겨 경계 확인(★2 유지) (3) 등식을 부등식 nPr ≤ 값 으로 바꾸면 범위 제약이 답을 자르므로 ★3."
```

```yaml
- id: GN-CM1-246-539
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ 7명을 일렬로 세우는 방법의 수 ⑵ 1~5 가 적힌 카드 5장 중 3장을 뽑아 만드는 세 자리 자연수의 개수.
  category: "일렬로 세우기 → n! · 뽑아 나열 → nPr"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열의 수 기본 — 일렬로 세우기·뽑아 나열하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 7! 한 줄, ⑵ 는 0 이 없어 자리 제한이 없으므로 5P3 한 줄이다.
    상황을 순열 기호로 옮기는 것 말고 다른 단계가 없다.
    익히기 ★1 출발 · 통찰 0 · M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "전부 세우면 n! · 일부만 뽑아 세우면 nPr 로 바로 대응"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5040$ ⑵ $60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/246-539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수·카드 수와 뽑는 자리 수를 바꾼다(6명 → 720, 6장 중 4장 → 360). 제약: 카드에 0 이 섞이면 맨 앞 제한이 생겨 유형이 251-e12 쪽으로 넘어가므로 0 은 넣지 않는다."
    creative: "(1) 세 자리 자연수 대신 세 자리 홀수를 묻기(자리 제한 추가 · ★2) (2) 카드 중 특정 한 장을 반드시 쓰게 하기(★2) (3) 7명 중 3명만 세우는 수와 7! 의 비를 묻기(★2)."
```

```yaml
- id: GN-CM1-246-540
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    1 ≤ r < n 일 때 nPr = (n-1)Pr + r×(n-1)P(r-1) 의 증명 과정에서 빈칸 ㈎, ㈏ 채우기.
  category: "팩토리얼 꼴로 펴기 → 공통인수로 묶기 → n×(n-1)!=n! 확인"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열의 수 성질 nPr = (n-1)Pr + r·(n-1)P(r-1) 의 증명"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분한 분자에서 (n-r)+r=n 을 읽고 n×(n-1)!=n! 을 확인하면 끝난다.
    변형 순서가 문제에 모두 주어진 빈칸 채우기라 통찰로 세지 않았다.
    다만 n, r 이 모두 문자인 일반식이라 Mₐ=3 이고 n ≥ r 범위를 의식해야 한다.
    익히기 ★1 출발이지만 일반 문자식 증명이라 +1 → ★2.
  tier: star_2
  mechanism_primary: "두 항을 (n-1)!/(n-r)! 꼴로 통분 → (n-r)+r=n 으로 묶기 → n(n-1)!=n! → nPr"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '㈎ $n$ ㈏ $n!$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/246-540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈칸 위치를 통분 직전 단계나 마지막 단계로 옮길 수 있고, n=6·r=3 처럼 구체 수치로 성립을 확인시키는 소문항을 덧붙일 수 있다. 제약: 1 ≤ r < n 조건을 빼면 (n-1)P(r-1) 이 정의되지 않는 경우가 생긴다."
    creative: "(1) nPr = (n-1)P(r-1)×n 을 같은 방식으로 증명시키기(★2) (2) 빈칸 없이 전체 증명을 서술하게 하면 변형 순서를 스스로 잡아야 해 I-EQV 가 생겨 ★3 (3) 같은 등식을 '맨 앞자리에 특정 원소를 쓰는가'로 세어 조합적으로 설명하게 하면 표현 전환 I-RT → ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-247-e8
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ nP2=5n · 5Pr×6!=43200 · nP5=30×nP3 을 만족시키는 n 또는 r 구하기.
  category: "nPr 을 곱 꼴로 펴기 → 공통인수 약분 → 방정식 풀고 범위로 걸러내기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nPr 의 계산 — 등식을 만족시키는 n·r 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 n(n-1)=5n 에서 n 을 약분, ⑶ 은 nP5 = nP3×(n-3)(n-4) 로 보고 nP3 을 약분하면 이차방정식 한 줄로 줄어든다.
    ⑵ 는 6!=720 으로 나눠 5Pr=60 을 찾는 역계산.
    약분 전에 n ≥ 5, r ≤ 5 범위를 확인해 n=0 류 해를 버리는 T-범위 하나.
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  mechanism_primary: "양변을 nPr 의 공통인수로 약분 → 남은 이차·일차 방정식 → n ≥ r 범위로 해 걸러내기"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $n=6$ ⑵ $r=3$ ⑶ $n=9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/247-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수(5n · 30 · 43200)를 바꾼다. 제약: 약분 뒤 남는 이차방정식이 정수해를 갖고 그 해가 n ≥ r 을 만족해야 하며, ⑵ 처럼 팩토리얼로 나누는 항은 값이 nPr 표에 있는 수로 떨어져야 한다."
    creative: "(1) nP4 = 20×nP2 처럼 약분 뒤 차수가 남는 조합으로(★2 유지) (2) 두 해 중 하나가 범위에 걸려 기각되는 계수로 잡으면 사후 검증이 생겨 ★3 (3) nPr = (n-1)Pr × n/(n-r) 성질을 쓰게 하면 표현 전환 ★3."
```

```yaml
- id: GN-CM1-247-541
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ (n+2)P3=10×nP2 · 4×nP3=5×(n-1)P3 · nP3+3×nP2=5×(n+1)P2 · nP3 : (n+2)P3 = 5 : 12 를 만족시키는 n 구하기.
  category: "양변을 연속 정수의 곱으로 펴기 → 공통인수 약분 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nPr 등식·비례식에서 n 구하기(공통인수 약분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항 모두 양변을 펴서 공통인수 n 또는 (n-1)(n-2) 를 약분한 뒤 이차방정식을 푸는 같은 골조다.
    ⑷ 의 비례식만 내항·외항 곱으로 한 번 더 옮긴다.
    범위 확인으로 음수·작은 해를 버리는 T-범위 하나.
    확인체크는 앞 필수 예제와 같은 유형이라 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "양변을 연속 정수 곱으로 펴기 → 공통인수 약분 → 이차방정식 → n ≥ r 로 해 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$ 또는 $4$ ⑵ $15$ ⑶ $6$ ⑷ $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/247-541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 10 · 4 · 5 · 비 5:12 를 바꾼다. 제약: 약분 뒤 이차식이 인수분해되는 계수여야 하고, ⑴ 처럼 두 해가 모두 범위 안에 남는 경우와 한 해만 남는 경우를 의도적으로 구분해 잡는다."
    creative: "(1) 해가 하나만 범위에 남게 만들어 기각 단계를 넣으면 I-VF → ★3 (2) n 대신 r 을 미지수로 두기(★2) (3) 등식을 부등식으로 바꾸면 해의 집합을 다루게 되어 253-555 와 같은 ★3 유형."
```

```yaml
- id: GN-CM1-248-e9
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 5명을 일렬로 세우는 수 · 5명 중 3명을 뽑아 세우는 수 · 5명 중 대표 1명과 부대표 1명을 뽑는 수.
  category: "상황을 순열로 옮기기 → 5! · 5P3 · 5P2"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열의 수 — 일렬로 세우기·뽑아 세우기·직책 뽑기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 기호 하나로 끝나고, ⑶ 의 '대표와 부대표는 구별된다'만 순서를 세는 근거로 짚으면 된다.
    [분류 이슈] 필수 예제(★2 출발)지만 통찰 0·M_total 3 이라 v3.8 감점 규칙대로 −1 하여 ★1 로 두었다.
  tier: star_1
  mechanism_primary: "전부 세우기 5! · 뽑아 세우기 5P3 · 순서 있는 직책 뽑기 5P2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $120$ ⑵ $60$ ⑶ $20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/248-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 수와 뽑는 수를 바꾼다(6명 중 2명 → 30). 제약: 세 소문항이 n! · nPr · nP2 세 형태를 한 번씩 보여주는 구성을 유지한다."
    creative: "(1) 대표·부대표·총무 3직책으로 늘리기(★1 유지) (2) 특정 한 명이 반드시 대표가 되는 조건 추가(★2) (3) 직책을 구별하지 않는 경우와 비교시키면 조합과의 대비가 생겨 ★2."
```

```yaml
- id: GN-CM1-248-542
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 7가지 색으로 지도의 세 나라 A, B, C 를 모두 다른 색으로 칠하는 방법의 수.
  category: "구별된 세 자리에 서로 다른 색 배정 → 7P3"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 것을 구별된 자리에 배정하기(색칠 → 순열)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    나라 세 곳이 서로 구별되고 색이 모두 달라야 하므로 7×6×5 한 줄이다.
    인접 조건이 따로 없어 경우 나누기가 생기지 않는다.
    확인체크 ★2 출발이나 통찰 0·M_total 3 이라 −1 → ★1.
  tier: star_1
  mechanism_primary: "나라 A·B·C 를 구별된 자리로 보고 7가지 색에서 3개를 순서 있게 배정 → 7P3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$210$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/248-542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수와 나라 수를 바꾼다(6색·4나라 → 360). 제약: 색 개수 ≥ 나라 수여야 하고, 모두 다른 색 조건을 유지해야 순열이 된다."
    creative: "(1) '이웃한 나라만 다른 색' 으로 바꾸면 인접 구조에 따라 경우가 갈려 ★3 (2) 같은 색을 다시 써도 되게 하면 중복순열이라 교육과정 밖 (3) 특정 나라의 색을 고정하면 남은 자리 배정으로 ★2."
```

```yaml
- id: GN-CM1-248-543
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 6개의 좌석에 3명을 앉히는 방법의 수.
  category: "사람을 나열 대상으로 보고 좌석 6개 중 3개를 순서 있게 배정 → 6P3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자리가 사람보다 많은 배정 — 자리를 뽑아 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6P3 한 줄이지만 '뽑는 대상이 사람이 아니라 좌석' 이라 n 과 r 을 뒤집어 놓기 쉬운 자리라 T-표기 하나를 잡았다.
    앞 예제와 같은 기호를 쓰는 확인 문항이다.
    확인체크 ★2 출발이나 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "사람 3명 각각에 앉을 좌석을 순서대로 배정 → 6×5×4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/248-543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌석 수와 사람 수를 바꾼다(8좌석·3명 → 336). 제약: 좌석 수 ≥ 사람 수, 좌석이 서로 구별된다는 조건 유지."
    creative: "(1) 특정 두 사람이 이웃한 좌석에 앉는 조건 추가(★3) (2) 좌석이 원형이면 교육과정 밖 (3) 빈 좌석 3개를 구별하지 않는 배열로 보면 같은 수임을 설명시키기(★2)."
```

```yaml
- id: GN-CM1-248-544
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    학생 9명 중 n명을 뽑아 일렬로 세우는 방법의 수가 504 일 때 n 의 값.
  category: "9Pn=504 → 연속 정수의 곱으로 분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nPr = 주어진 값 에서 r 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    504 를 9 부터 시작하는 연속 정수의 곱 9×8×7 로 분해해 n=3 을 읽는다.
    미지수가 지수 자리에 있어 방정식 풀이가 아니라 분해·시행으로 가고, n ≤ 9 범위를 확인해야 한다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "9Pn 을 9부터 내려 곱한 값과 504 를 비교 → 곱하는 항의 개수 n 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/248-544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원과 목표값을 함께 바꾼다(7Pn=210 → n=3, 6Pn=360 → n=4). 제약: 목표값이 그 인원에서 시작하는 연속 정수의 곱으로만 분해돼야 답이 하나로 정해진다."
    creative: "(1) nP3=504 로 바꿔 미지수를 n 쪽으로 옮기기(★2) (2) 값을 504 대신 부등식 ≥ 500 으로 주면 범위 판정이 필요해 ★3 (3) 9명 중 n명을 세우는 수가 9명 전부를 세우는 수의 1/120 이라는 식으로 주면 팩토리얼 비교 ★3."
```

```yaml
- id: GN-CM1-249-e10
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    남자 4명과 여자 3명을 일렬로 세울 때 ⑴ 여자 3명이 이웃 ⑵ 여자끼리 이웃하지 않음 ⑶ 남녀 교대로 서는 방법의 수.
  category: "이웃은 묶음 → 비이웃은 남자 배열 뒤 사이·양 끝 자리 배정 → 교대는 자리 패턴 고정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'여자끼리 이웃하지 않는다'를 '남자 4명을 먼저 세운 뒤 생기는 사이·양 끝 5자리 중 3곳에 여자를 배정한다'로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이웃하거나 이웃하지 않는 순열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 여자 3명을 한 덩이로 묶어 5!×3!, ⑵ 는 남자를 먼저 세우고 빈 5자리에 여자를 넣어 4!×5P3, ⑶ 은 인원이 4와 3이라 남자로 시작하는 배치 하나뿐이라 4!×3!.
    묶음 안 순서를 곱하는 것(T-표기)과 ⑶ 에서 시작이 남자로 고정되는 경계(T-경계)가 함정 둘.
    비이웃을 끼워넣기로 바꾸는 한 단계만 통찰로 세었고 나머지는 이 단원의 표준 절차다.
    필수 예제 ★2 출발 · 통찰 1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "이웃 → 묶어서 (n-k+1)!×k! · 비이웃 → 나머지 배열 후 사이 자리에 nPr · 교대 → 패턴 확정 후 각 집단 배열"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $720$ ⑵ $1440$ ⑶ $144$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/249-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원을 바꾼다. 제약: ⑵ 는 (남자 수)+1 ≥ (여자 수) 여야 답이 0 이 아니고, ⑶ 은 두 집단의 수가 같거나 1 차이여야 교대가 가능하다(같으면 시작이 두 가지라 2배)."
    creative: "(1) 여자 3명 중 특정 두 명만 이웃하게 하기(★3) (2) 남녀 수를 같게 해 교대 배치의 시작이 두 가지가 되게 하면 경계 분기가 생겨 ★3 (3) '여자가 적어도 두 명 이웃'으로 바꾸면 여사건 전환이 추가돼 ★3."
```

```yaml
- id: GN-CM1-249-545
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 a~f 6개를 일렬로 나열할 때 ⑴ a 와 b 가 이웃 ⑵ a 와 b 가 이웃하지 않는 방법의 수.
  category: "이웃은 묶음 5!×2! → 비이웃은 전체에서 이웃을 뺀 여사건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'이웃하지 않는다'를 '전체 6! 에서 이웃하는 경우를 뺀다'로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 문자가 이웃하거나 이웃하지 않는 나열의 수(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 ab 를 한 덩이로 묶어 5!×2!=240, ⑵ 는 720-240=480 으로 여사건이 가장 짧다.
    묶음 안 순서 2! 를 빠뜨리는 것이 이 유형의 전형적 함정이다.
    확인체크 ★2 출발 · 통찰 1(여사건 전환) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 문자 묶어 5!×2! → 비이웃 = 전체 6! − 이웃"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $240$ ⑵ $480$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/249-545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 개수를 바꾼다(5개 → 이웃 48·비이웃 72). 제약: 묶는 문자가 2개일 때만 여사건이 한 줄로 끝나고, 3개 이상이면 '모두 이웃'과 '어느 둘도 이웃 안 함'이 여사건 관계가 아니게 된다."
    creative: "(1) 묶을 문자를 3개로 늘려 여사건이 성립하지 않음을 확인시키면 250-550 골조로 ★3 (2) a 와 b 사이에 정확히 1개 문자를 넣게 하기(★2) (3) a 가 b 보다 앞에 오는 경우만 세게 하면 대칭 이용 ★2."
```

```yaml
- id: GN-CM1-249-546
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    남학생 5명과 여학생 4명이 한 줄로 설 때 남녀가 교대로 서는 방법의 수.
  category: "교대 배치 패턴 확정(남자로 시작하는 한 가지) → 각 집단 배열 곱"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "남녀가 교대로 서는 순열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인원이 5와 4라 남-여-남-…-남 배치 하나뿐이고 5!×4!=2880 으로 끝난다.
    수가 같을 때처럼 2를 곱하거나, 여자로 시작하는 배치를 더하면 틀리는 T-경계가 이 문항의 핵심 함정이다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "인원 차가 1 → 많은 쪽이 양 끝을 차지하는 패턴 하나 → 5!×4!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2880$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/249-546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원을 바꾸되 두 집단의 차가 0 또는 1 이어야 한다. 제약: 차가 0 이면 시작이 두 가지라 2×n!×n!, 차가 2 이상이면 답이 0 이다(이 경계를 묻는 변형이 가치 있다)."
    creative: "(1) 남녀 수를 같게 해 2배가 붙는 경우와 비교(★2) (2) 교대 조건에 '특정 학생이 맨 앞' 을 더하기(★3) (3) 남학생끼리는 이웃해도 되지만 여학생은 이웃 금지로 바꾸면 끼워넣기 골조 ★3."
```

```yaml
- id: GN-CM1-249-547
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    남학생 3명과 여학생 n명을 일렬로 세울 때 남학생끼리 이웃하게 세우는 방법의 수가 36 이 되는 n 의 값.
  category: "남자 묶음 → (n+1)!×3! = 36 → n 역추적"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방법의 수 36 이라는 결과 조건에서 (n+1)!=6 을 거쳐 인원 n 을 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이웃 조건 배열의 수가 주어졌을 때 인원 구하기(역추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    남학생 3명을 한 덩이로 묶으면 대상이 n+1 개라 (n+1)!×3!=36, 곧 (n+1)!=6 에서 n=2.
    앞 문항들과 달리 결과가 먼저 주어져 인원을 거꾸로 찾는 한 단계가 들어간다.
    확인체크 ★2 출발 · 통찰 1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "남자 묶어 (n+1)!×3! 식 세우기 → 36 과 비교 → (n+1)!=6 → n=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/249-547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남학생 수와 목표 방법의 수를 함께 바꾼다(남 2명·방법 48 → n=3). 제약: 목표값이 (묶음 인원)! 로 나누어떨어지고 몫이 팩토리얼 값이어야 n 이 자연수로 떨어진다."
    creative: "(1) 여학생끼리 이웃 조건으로 바꾸기(★2) (2) '남학생끼리 이웃하지 않는' 수가 주어지게 하면 끼워넣기 식을 역으로 풀어야 해 ★3 (3) 방법의 수에 부등식(100 이하)을 주면 범위 판정 ★3."
```

```yaml
- id: GN-CM1-250-e11
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    triangle 의 8개 문자를 일렬로 나열할 때 ⑴ t 가 맨 앞·l 이 맨 뒤 ⑵ t 와 a 사이에 문자 2개 ⑶ 적어도 한쪽 끝에 자음이 오는 경우의 수.
  category: "자리 고정 → 사이 문자 수 조건은 블록 위치 세기 → 적어도 조건은 여사건"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'t 와 a 사이에 2개' 조건을 길이 4 블록의 위치 세기(자리 5가지 × 양끝 순서 2 × 속 문자 배열)로 전환"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'적어도 한쪽 끝에 자음'을 '전체 − 양 끝이 모두 모음'으로 동치 변환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건을 만족시키는 순열의 수(자리 지정·사이 문자 수·적어도)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 양 끝을 고정하고 남은 6! , ⑵ 는 t·a 와 그 사이 2문자를 길이 4 덩이로 보고 덩이의 위치·양끝 순서·속 문자·나머지를 곱한다.
    ⑶ 은 모음이 i, a, e 3개뿐임을 확인해 양 끝이 모두 모음인 3P2×6! 을 전체에서 뺀다.
    블록 위치를 빠뜨리거나 여사건 경계를 잘못 잡는 T-범위·T-경계 둘.
    필수 예제 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "고정 자리 빼고 나머지 배열 → 사이 조건은 블록 길이·위치로 세기 → 적어도는 여사건"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $720$ ⑵ $7200$ ⑶ $36000$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/250-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사이에 넣는 문자 수(2 → 3)와 단어를 바꾼다. 제약: 문자가 모두 서로 달라야 하고(중복 문자가 있으면 같은 것이 있는 순열로 단원이 바뀐다), 블록 길이 ≤ 전체 문자 수여야 위치 수가 양수다."
    creative: "(1) '양 끝이 모두 자음'으로 바꾸면 여사건 없이 직접 세기 ★2 (2) 't 가 a 보다 앞'을 추가하면 대칭으로 절반 ★3 (3) 사이 문자 수를 '적어도 2개'로 바꾸면 여사건과 블록 세기가 겹쳐 ★4."
```

```yaml
- id: GN-CM1-250-548
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 a~f 6개를 일렬로 나열할 때 ⑴ a 가 맨 앞·b 가 맨 뒤 ⑵ a 와 b 사이에 문자 3개가 오는 경우의 수.
  category: "자리 고정 후 나머지 배열 → 사이 문자 수 조건은 블록 위치 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'a 와 b 사이에 3개' 조건을 길이 5 블록의 위치 2가지 × 양끝 순서 2 × 속 문자 4P3 으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 문자 사이에 정해진 개수의 문자가 오는 나열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 4!=24 로 바로 끝나고, ⑵ 가 이 문항의 본체다.
    a□□□b 덩이가 6자리 안에서 놓일 위치가 2곳뿐임을 세는 것이 핵심이고, 속 문자 4P3 과 남은 문자 배치를 곱한다.
    확인체크 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "a·b 와 사이 3문자를 길이 5 덩이로 → 덩이 위치 × 양끝 순서 × 속 문자 배열 × 나머지"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $24$ ⑵ $96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/250-548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수와 사이 문자 수를 바꾼다(7문자·사이 2개). 제약: (사이 문자 수)+2 ≤ 전체 문자 수여야 하고, 덩이 위치 수 = 전체 − 덩이 길이 + 1 이 양수여야 한다."
    creative: "(1) 사이 문자 수를 묻지 않고 '적어도 2개'로 바꾸면 여러 길이를 더해야 해 ★3 (2) a 가 b 보다 앞이라는 순서 제한 추가(★2) (3) 사이 문자를 특정 문자들로 제한하면 선택 단계가 늘어 ★3."
```

```yaml
- id: GN-CM1-250-549
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    남학생 5명과 여학생 4명을 일렬로 세울 때 남학생을 양 끝에 세우는 방법의 수.
  category: "제한된 자리(양 끝) 먼저 배정 5P2 → 남은 7명 배열 7!"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "양 끝에 특정 집단을 세우는 순열의 수(제한 자리 먼저)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제한이 있는 양 끝을 먼저 채워 5P2, 남은 7명을 7! 로 세우는 표준 순서다.
    양 끝을 채우고 남은 인원을 9가 아니라 7로 갱신하는 것이 T-범위 함정.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "제한 자리(양 끝) 먼저 5P2 → 남은 7명 7! → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100800$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/250-549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원을 바꾼다(남 4·여 5 → 4P2×7!). 제약: 양 끝에 세울 집단의 인원이 2명 이상이어야 하고 나머지 인원 배열은 (전체−2)! 로 갱신한다."
    creative: "(1) 양 끝을 여학생으로 바꿔 비교(★2) (2) '양 끝 중 한쪽만 남학생'으로 바꾸면 경우 분기 ★3 (3) '적어도 한쪽 끝이 남학생'으로 바꾸면 여사건 ★3(254-563 골조)."
```

```yaml
- id: GN-CM1-250-550
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    promise 의 7개 문자를 일렬로 나열할 때 적어도 2개의 모음이 이웃하는 경우의 수.
  category: "적어도 2개 이웃 → 여사건(어느 모음도 이웃하지 않음) → 자음 배열 뒤 끼워넣기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'적어도 2개의 모음이 이웃'의 여사건이 '어느 두 모음도 이웃하지 않음'임을 파악(모음 3개라 이웃 경우를 직접 세면 중복이 생김)"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "비이웃 배치를 자음 4개 배열 뒤 생기는 5자리 중 3곳에 모음을 넣는 4!×5P3 으로 전환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "적어도 몇 개가 이웃하는 나열의 수(여사건 + 끼워넣기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모음 o, i, e 3개와 자음 p, r, m, s 4개로 갈라 전체 7! 에서 모음이 하나도 이웃하지 않는 4!×5P3 을 뺀다.
    모음이 3개라 '두 개 이웃'을 직접 세면 세 개가 모두 이웃하는 경우가 겹치는 것이 이 문항의 진짜 난점이다(T-경계).
    확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "전체 7! − (자음 4! × 사이 5자리 중 3곳 5P3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3600$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/250-550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 바꿔 모음·자음 개수를 조정한다. 제약: 문자가 모두 서로 달라야 하고 (자음 수)+1 ≥ (모음 수) 여야 여사건이 0 이 아니다."
    creative: "(1) '모음이 모두 이웃'으로 바꾸면 묶음 하나라 ★2 (2) '자음이 이웃하지 않게'로 대상을 바꾸면 개수 관계가 빡빡해져 ★3 (3) 모음 3개 중 정확히 2개만 이웃하는 경우로 바꾸면 겹침 보정이 필요해 ★4."
```

```yaml
- id: GN-CM1-251-e12
  page: 251
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    0~5 의 6개 숫자에서 서로 다른 4개를 택해 네 자리 자연수를 만들 때 ⑴ 자연수의 개수 ⑵ 짝수의 개수 ⑶ 4의 배수의 개수.
  category: "맨 앞 0 제외 → 짝수·4의 배수는 끝자리(끝 두 자리)로 경우 분기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "짝수 조건에서 일의 자리가 0 인 경우와 2·4 인 경우가 맨 앞 제한과 얽혀 독립된 두 시나리오로 갈림"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'4의 배수'를 '끝 두 자리가 만드는 수가 4의 배수'로 동치 변환해 끝 두 자리 후보를 먼저 나열"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "0 을 포함한 숫자로 만드는 자연수의 개수(짝수·배수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 천의 자리에 0 을 뺀 5가지 뒤 5P3, ⑵ 는 일의 자리 0 과 2·4 로 갈라 세되 후자는 맨 앞에서 0 과 그 짝수를 동시에 제외해야 한다.
    ⑶ 은 끝 두 자리가 4의 배수인 쌍을 먼저 나열하고 그중 0 이 앞에 오는 경우를 따로 처리한다.
    맨 앞 0 제외(T-범위)와 0 이 끝자리·앞자리 어디에 있느냐(T-경계)가 함정 둘.
    필수 예제 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "끝자리 조건으로 경우 나누기 → 각 경우에서 맨 앞 0 을 뺀 자리 수 곱하기 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $300$ ⑵ $156$ ⑶ $72$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/251-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합과 자리 수를 바꾼다(0~6 에서 3개 → 세 자리). 제약: 0 은 반드시 포함해야 맨 앞 제한이 살아 있고, 배수 조건은 끝 두 자리로 판정되는 4·25 정도여야 교육과정 안에서 끝난다."
    creative: "(1) 홀수의 개수로 바꾸면 0 분기가 사라져 ★2 (2) 5의 배수로 바꾸면 끝자리 0·5 분기 ★3 (3) 3의 배수로 바꾸면 자리 합 조건으로 숫자 조합을 먼저 골라야 해 ★4(251-551⑶ 골조)."
```

```yaml
- id: GN-CM1-251-551
  page: 251
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    0~4 의 5개 숫자에서 서로 다른 3개를 택해 세 자리 자연수를 만들 때 ⑴ 자연수의 개수 ⑵ 홀수의 개수 ⑶ 3의 배수의 개수.
  category: "맨 앞 0 제외 → 홀수는 끝자리 고정 → 3의 배수는 자리 합 조건으로 숫자 조합 먼저"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'3의 배수'를 '세 자리 숫자의 합이 3의 배수'로 옮겨 배열이 아니라 숫자 조합을 먼저 고르는 문제로 전환"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "고른 조합에 0 이 포함된 경우와 아닌 경우가 세는 방식이 달라 두 갈래로 분기"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "0 을 포함한 숫자로 만드는 자연수의 개수(홀수·3의 배수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 4×4P2, ⑵ 는 일의 자리를 1 또는 3 으로 고정한 뒤 맨 앞에서 0 을 빼고 센다.
    ⑶ 이 본체로, 합이 3의 배수인 세 수의 조합을 먼저 찾고 0 이 든 조합만 맨 앞 제한을 적용한다.
    확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "끝자리·합 조건으로 숫자 조합 결정 → 0 포함 여부로 나눠 배열 수 계산 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $48$ ⑵ $18$ ⑶ $20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/251-551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합을 0~5 로 넓히거나 배수를 3 대신 4 로 바꾼다. 제약: 3의 배수 변형은 합이 3의 배수인 조합의 개수가 손으로 셀 만큼(5개 이내)이어야 하고, 0 이 포함된 조합이 적어도 하나 있어야 분기가 살아 있다."
    creative: "(1) 짝수의 개수로 바꾸면 0 끝자리 분기(★3 유지) (2) '3의 배수가 아닌 수'로 바꾸면 여사건 ★3 (3) 각 자리 숫자가 커지는 수만 세게 하면 조합과 배열의 관계가 드러나 ★4."
```

```yaml
- id: GN-CM1-252-e13
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    문자 a~e 5개를 한 번씩 써서 사전식으로 배열할 때 ⑴ cebda 는 몇 번째인지 ⑵ 100번째 문자열은 무엇인지.
  category: "앞자리를 고정한 묶음의 크기(4!·3!·…) 누적 → 순서와 문자열의 상호 변환"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사전식 '순서'를 '앞자리를 고정했을 때 그 아래 놓인 문자열의 개수(4!, 3!, …)의 누적'으로 전환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "100번째라는 결과에서 누적 구간을 거꾸로 좁혀 각 자리의 문자를 차례로 확정"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "사전식 배열에서 순서 구하기·순서로 문자열 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 a□□□□, b□□□□ 가 각각 24개임을 세어 c 로 시작하는 구간 안에서 다시 좁혀 간다.
    ⑵ 는 같은 표를 거꾸로 읽어 100 이 들어가는 구간을 자리마다 확정한다.
    구간의 시작·끝을 하나 어긋나게 세는 것(T-경계)과 남은 문자 집합 갱신(T-범위)이 함정이다.
    [분류 이슈] 통찰 2개라 +1 후보지만 두 통찰 모두 이 단원의 표준 학습 자산이라 발전 예제 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "앞자리 고정 묶음의 크기를 누적 → 목표 문자열은 누적합으로, 목표 순서는 구간 좁히기로"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $70$번째 ⑵ $eacdb$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/252-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 개수와 목표 문자열·목표 순서를 바꾼다. 제약: 목표 순서는 1 이상 n! 이하여야 하고, 구간 경계값(24의 배수 등)을 일부러 목표로 잡으면 경계 판정이 함정이 된다."
    creative: "(1) 두 소문항 중 하나만 내면 ★2~3 (2) 문자에 중복이 있으면 같은 것이 있는 순열이라 단원 밖 (3) '사전식으로 배열했을 때 cebda 의 바로 다음 문자열'을 묻기(★3) (4) 숫자로 바꿔 맨 앞 0 제한을 넣으면 252-552 골조 ★3."
```

```yaml
- id: GN-CM1-252-552
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    0~4 의 5개 숫자를 한 번씩 써서 만든 다섯 자리 자연수를 작은 수부터 나열할 때 50번째 수.
  category: "만의 자리 0 제외 → 앞자리 고정 묶음(4!·3!) 누적 → 50번째 구간 좁히기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'작은 수부터의 순서'를 앞자리 고정 묶음 크기(4!=24, 3!=6)의 누적으로 전환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "50번째라는 순서에서 만의 자리·천의 자리를 차례로 역추적해 수를 확정"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "크기 순으로 나열한 자연수에서 k번째 수 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    만의 자리에 0 이 올 수 없어 1□□□□ 부터 24개씩 묶이고, 50 은 세 번째 묶음(3 으로 시작) 안의 2번째다.
    사전식 배열과 같은 골조지만 0 때문에 첫 묶음이 사라지는 것이 추가 함정(T-범위)이다.
    확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "앞자리별 개수 24개씩 누적 → 50 이 든 구간의 만의 자리 확정 → 남은 자리에서 같은 방법 반복"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30142$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/252-552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순서 50 을 다른 값으로 바꾼다(1 이상 96 이하). 제약: 0 을 포함하므로 전체 개수가 4×4!=96 이고, 24의 배수 근처 값을 고르면 구간 경계 판정이 함정이 된다."
    creative: "(1) 반대로 어떤 수가 몇 번째인지 묻기(★2) (2) 0 을 빼고 1~5 로 하면 맨 앞 제한이 사라져 ★2 (3) '50번째로 큰 수'로 바꾸면 역순 누적이라 ★3 (4) 짝수만 크기 순으로 나열하면 조건이 겹쳐 ★4."
```

```yaml
- id: GN-CM1-252-553
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1~5 의 5개 숫자를 한 번씩 써서 만든 다섯 자리 자연수 중 34000 보다 큰 수의 개수.
  category: "부등식 조건을 앞자리부터 비교 → 만의 자리·천의 자리로 경우 분기 후 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'34000 보다 크다'를 앞자리부터의 대소 비교(만의 자리가 4 이상 / 만의 자리 3 이면서 천의 자리 4 이상)로 동치 변환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "만의 자리 4·5 묶음, 35□□□ 묶음, 34□□□ 묶음이 서로 독립인 세 시나리오로 갈림"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "특정 값보다 큰(작은) 자연수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    만의 자리가 4 또는 5 이면 무조건 크므로 2×4!, 3 으로 시작하면 천의 자리로 다시 갈라 35□□□ 와 34□□□ 를 센다.
    34□□□ 가 모두 34000 보다 큰지(경계 포함 여부)를 확인하는 T-경계가 이 문항의 함정이다.
    확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "앞자리부터 고정하며 조건을 만족하는 묶음 세기 → 경계 묶음만 다음 자리로 내려가 반복 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/252-553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 34000 을 바꾼다(25000 · 43000 등). 제약: 기준값의 각 자리 숫자가 주어진 숫자 집합 안에 있어야 경계 묶음이 생기고, 기준값 자체를 만들 수 있는지(등호 포함 여부)를 확인해야 한다."
    creative: "(1) '34000 보다 작은 수'로 바꾸면 여사건 또는 직접 세기 비교 ★3 (2) 0 을 포함한 숫자 집합으로 바꾸면 맨 앞 제한이 겹쳐 ★4 (3) 기준값보다 큰 짝수로 바꾸면 조건 둘이 겹쳐 ★4(254-565 골조)."
```

```yaml
- id: GN-CM1-252-554
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    FRIEND 의 6개 문자를 한 번씩 써서 사전식으로 배열할 때 FDIENR 는 몇 번째인지.
  category: "알파벳 순서 재배열 → 앞자리 고정 묶음(5!·4!·…) 누적"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사전식 순서를 D·E·F·I·N·R 로 정렬한 뒤 앞자리 고정 묶음 개수의 누적으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사전식 배열에서 주어진 문자열의 순서 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 단어의 철자 순서가 아니라 알파벳 순서 D, E, F, I, N, R 로 다시 세우는 것이 첫 단계다.
    D□, E□ 로 시작하는 120개씩을 지나고 F 구간 안에서 다시 자리마다 앞선 문자 수를 세어 더한다.
    확인체크 ★2 출발 · 통찰 1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "알파벳 순 정렬 → 각 자리에서 앞서는 문자 수 × 남은 자리의 계승 → 누적 합 + 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$247$번째'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/252-554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어와 목표 문자열을 바꾼다(GERMANY · KOREA 등). 제약: 문자가 모두 서로 달라야 하고, 알파벳 순서가 원 단어의 철자 순서와 다르게 섞여 있어야 첫 단계가 살아 있다."
    creative: "(1) 반대로 k번째 문자열을 묻기(★3) (2) 원 단어 자신이 몇 번째인지 묻기(★2) (3) 두 문자열 사이의 개수를 묻기(★4 · 254-566 골조)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-253-555
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    부등식 16P(2r+1) ≤ 4×16P(2r) 를 만족시키는 모든 자연수 r 의 값의 합.
  category: "nP(r+1) = nPr × (n-r) 로 약분 → 일차부등식 → 정의 범위로 해 자르기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 순열 기호를 각각 펴지 않고 16P(2r+1) = 16P(2r) × (16-2r) 로 보아 공통인수를 약분, 부등식을 16-2r ≤ 4 한 줄로 동치 변환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "r ≥ 6 을 얻은 뒤 2r+1 ≤ 16 이라는 기호의 정의 범위를 다시 대입해 r ≥ 8 쪽 후보를 기각해야 답이 유한해짐"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "nPr 을 포함한 부등식의 해(정의 범위 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    약분하면 16-2r ≤ 4, 곧 r ≥ 6 이지만 그대로 두면 해가 무한하다.
    16P(2r+1) 이 정의되려면 2r+1 ≤ 16 이어야 한다는 범위를 사후에 적용해 r=6, 7 만 남기는 것이 이 문항의 본체다(T-범위·T-경계).
    STEP 1 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "공통인수 약분 → 16-2r ≤ 4 → r ≥ 6 → 2r+1 ≤ 16 으로 상한 적용 → r=6, 7 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 16 과 계수 4 를 바꾼다(20P(2r+1) ≤ 6×20P(2r) 등). 제약: 약분 뒤 남는 일차부등식의 해가 정의 범위와 겹쳐 유한한 자연수 몇 개만 남아야 하고, 그 개수가 2~3개 정도여야 합을 묻는 의미가 있다."
    creative: "(1) 부등호를 ≥ 로 뒤집으면 하한이 아니라 상한이 잘려 ★3 유지 (2) 첨자를 r+1, r 로 단순화하면 범위 함정이 약해져 ★2 (3) 해의 합이 아니라 해의 개수를 묻기(★3) (4) 등식으로 바꾸면 247-541 수준 ★2."
```

```yaml
- id: GN-CM1-253-556
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A~F 의 6명을 일렬로 세울 때 A 를 맨 앞에 세우고 B 는 A 와 이웃하지 않게 세우는 방법의 수.
  category: "A 자리 고정 → 비이웃 조건을 'B 가 두 번째 자리가 아님'으로 → 나머지 배열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 가 맨 앞으로 고정되면 'B 가 A 와 이웃하지 않는다'가 'B 가 두 번째 자리에 오지 않는다'는 자리 조건으로 바뀜"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자리 고정 + 특정 두 사람이 이웃하지 않는 순열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 를 맨 앞에 두면 A 와 이웃한 자리는 두 번째 하나뿐이므로 B 는 남은 4자리 중 하나, 나머지 4명은 4!.
    묶음이나 여사건 없이 자리 조건으로 바로 바뀌는 것이 이 문항의 요령이다.
    STEP 1 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "A 맨 앞 고정 → B 는 2번 자리를 뺀 4자리 → 남은 4명 4! → 4×4!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원을 바꾼다(7명 → 5×5!). 제약: A 가 끝자리에 고정될 때만 이웃 자리가 하나이고, A 를 가운데 자리에 고정하면 이웃 자리가 둘이라 계수가 달라진다."
    creative: "(1) A 를 두 번째 자리에 고정하면 이웃 자리가 둘이 되어 ★2 유지·계산만 달라짐 (2) A 자리를 고정하지 않고 'A 와 B 가 이웃하지 않는' 전체로 바꾸면 여사건 ★2 (3) C 도 A 와 이웃하지 않게 추가하면 자리 배정 분기 ★3."
```

```yaml
- id: GN-CM1-253-557
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    남학생 3명·여학생 5명·선생님 2명을 일렬로 세울 때 남학생끼리, 여학생끼리 각각 이웃하게 세우는 방법의 수.
  category: "두 집단을 각각 묶음으로 → 묶음 2개와 선생님 2명 배열 → 묶음 속 배열 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 집단이 각각 이웃하는 순열의 수(묶음 2개)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    남학생 덩이·여학생 덩이·선생님 2명 해서 대상 4개를 4! 로 세우고 덩이 속을 3!·5! 로 센다.
    묶음이 둘로 늘었을 뿐 249-e10⑴ 과 같은 표준 절차라 통찰로 세지 않았다.
    묶음 속 순서를 빠뜨리는 T-표기 하나.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "남자 묶음·여자 묶음·선생님 2명 → 4!×3!×5!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17280$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 집단의 인원을 바꾼다. 제약: 묶는 집단이 늘수록 (묶음 수 + 남은 인원)! 의 값이 커지므로 답이 여섯 자리를 넘지 않게 인원을 조절한다."
    creative: "(1) 선생님 2명도 이웃하게 하면 묶음 3개라 3!×3!×5!×2!(★2) (2) 남학생 묶음과 여학생 묶음이 서로 이웃하지 않게 하면 끼워넣기가 겹쳐 ★3 (3) 선생님이 양 끝에 서는 조건을 더하면 제한 자리 처리 ★3."
```

```yaml
- id: GN-CM1-253-558
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    1~5 가 하나씩 적힌 카드 5장을 일렬로 나열할 때 짝수 카드끼리 이웃하지 않게 나열하는 경우의 수. 5지선다.
  category: "홀수 3장 먼저 배열 → 사이·양 끝 4자리 중 2곳에 짝수 배정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'짝수끼리 이웃하지 않음'을 '홀수 3장을 먼저 세운 뒤 생기는 4자리 중 2곳에 짝수를 넣음'으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "특정 집단이 서로 이웃하지 않는 나열의 수(끼워넣기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝수는 2, 4 둘뿐이므로 홀수 1, 3, 5 를 3! 로 세우고 생긴 4자리 중 2곳에 4P2 로 넣는다.
    여사건으로 가도 되지만 끼워넣기가 한 줄 더 짧다.
    교육청 기출이나 통찰 1개·M_total 5 라 가산 없음.
    STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "홀수 3! → 사이·양 끝 4자리 중 2곳에 짝수 4P2 → 3!×4P2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: "crop:fig-253-558.png"
  latex: latex-bank/gn-cm1/items/253-558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수와 짝수·홀수 개수를 바꾼다(1~6 → 홀 3·짝 3 이면 3!×4P3). 제약: (홀수 개수)+1 ≥ (짝수 개수) 여야 답이 0 이 아니다. 선택지는 답 주변 값으로 24 간격 정도가 자연스럽다."
    creative: "(1) '짝수끼리 이웃'으로 바꾸면 묶음 ★2 (2) 짝수 카드가 3장이 되게 숫자 범위를 넓히면 자리 수 제약이 빡빡해져 ★3 (3) 카드에 0 을 넣어 자연수 만들기로 바꾸면 맨 앞 제한이 겹쳐 ★3."
```

```yaml
- id: GN-CM1-253-559
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    문자 a~f 6개를 일렬로 나열할 때 b 와 e 사이에 적어도 1개의 문자가 들어가는 경우의 수.
  category: "'사이에 적어도 1개' = 'b, e 가 이웃하지 않음' → 전체 − 이웃"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'사이에 적어도 1개의 문자'를 '두 문자가 이웃하지 않는다'로 옮기고 다시 전체에서 이웃하는 경우를 빼는 여사건으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 문자 사이에 적어도 k개가 들어가는 나열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사이에 1개 · 2개 · 3개 · 4개를 각각 세어 더할 수도 있지만, '적어도 1개' 가 곧 '이웃하지 않음' 임을 보면 720−240 한 줄로 끝난다.
    이 동치를 놓치면 네 경우를 모두 세게 되는 것이 함정(T-경계)이다.
    STEP 1 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "적어도 1개 = 비이웃 → 6! − (묶음 5!×2!)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$480$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수를 바꾼다(7문자 → 5040−1440=3600). 제약: '적어도 1개' 일 때만 여사건이 한 줄이고, '적어도 2개' 로 올리면 이웃과 사이 1개를 모두 빼야 하므로 계산 단계가 늘어난다."
    creative: "(1) '적어도 2개'로 올리면 두 가지를 빼야 해 ★3 (2) '정확히 2개'로 바꾸면 블록 위치 세기 ★2(250-548 골조) (3) b 가 e 보다 앞이라는 조건을 더하면 대칭으로 절반 ★3."
```

```yaml
- id: GN-CM1-253-560
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1~7 에서 서로 다른 4개를 택해 만든 네 자리 자연수 중 천의 자리와 일의 자리가 모두 홀수인 것의 개수.
  category: "제한된 두 자리를 홀수 4개로 먼저 채우기 → 남은 5개에서 가운데 두 자리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 자리에 조건이 붙은 자연수의 개수(제한 자리 먼저)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수는 1, 3, 5, 7 넷이므로 천의 자리·일의 자리를 4P2 로 채우고 남은 5개에서 가운데 두 자리를 5P2 로 채운다.
    0 이 없어 맨 앞 제한이 없고, 남은 숫자 개수를 7이 아니라 5로 갱신하는 것만 주의하면 된다(T-범위).
    제한 자리 먼저라는 표준 절차뿐이라 통찰 0.
    STEP 1 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "제한 자리(천·일) 4P2 → 남은 5개에서 가운데 두 자리 5P2 → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$240$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 범위와 제한 자리를 바꾼다(1~8, 양 끝이 짝수 → 4P2×6P2). 제약: 제한 조건에 맞는 숫자 개수가 제한 자리 수 이상이어야 하고, 0 을 넣으면 맨 앞 제한이 겹쳐 유형이 바뀐다."
    creative: "(1) '천의 자리만 홀수'로 줄이면 ★2 (2) 숫자 집합에 0 을 넣으면 맨 앞·끝자리 조건이 얽혀 ★3 (3) '천의 자리와 일의 자리의 합이 짝수'로 바꾸면 홀홀·짝짝 분기가 생겨 ★3."
```

```yaml
- id: GN-CM1-253-561
  page: 253
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A~E 의 5개 문자를 한 번씩 써서 사전식으로 배열할 때 86번째 문자열의 마지막 문자.
  category: "앞자리 고정 묶음(4!·3!) 누적 → 86 이 든 구간을 자리마다 좁혀 문자열 확정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사전식 순서를 첫 문자별 24개, 둘째 문자별 6개 묶음의 누적 개수로 전환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "86 이라는 순서에서 구간을 거꾸로 좁혀 각 자리 문자를 확정하고 마지막 문자까지 내려감"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "사전식 배열에서 k번째 문자열 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A~C 로 시작하는 72개를 지나 D 구간의 14번째, 다시 6개씩 묶어 DC 구간의 2번째로 좁힌다.
    마지막 문자만 묻지만 문자열 전체를 확정해야 답이 나오므로 구간 경계를 하나씩 어긋나게 세는 T-경계가 핵심 함정이다.
    STEP 1 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "첫 문자 24개씩·둘째 문자 6개씩 누적 → 86 이 든 구간 확정 → 남은 문자로 반복 → 마지막 문자"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{B}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/253-561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순서 86 을 1 이상 120 이하의 다른 값으로 바꾼다. 제약: 24·6 의 배수 바로 앞뒤 값을 고르면 구간 경계 판정이 함정이 되고, 묻는 대상을 '첫 문자'로 바꾸면 한 단계만에 끝나 난도가 급락한다."
    creative: "(1) 문자열 전체를 묻기(★3 유지) (2) 반대로 특정 문자열의 순서를 묻기(★2) (3) 문자 개수를 6개로 늘리면 누적 단계가 하나 더 생겨 ★3 (4) 'B 로 끝나는 문자열은 몇 번째부터 몇 번째까지인가'로 바꾸면 구간 자체를 묻는 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-254-562
  page: 254
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    2인용 의자 4개가 있는 마차에서 마부가 맨 앞 의자의 오른쪽에 앉을 때, 관광객 7명이 ㈎ A 와 B 는 같은 의자에 이웃하여 앉고 ㈏ C 와 D 는 같은 의자에 앉지 않도록 빈 7자리에 앉는 경우의 수.
  category: "좌석 구조를 '2자리 남은 의자 3개 + 1자리 의자 1개'로 환원 → A·B 의자 배정 → 나머지는 전체 − (C·D 같은 의자)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 좌석 배치를 '마부 때문에 앞 의자는 1자리만 빔 → 두 자리가 모두 빈 의자는 3개'라는 의자 단위 모형으로 전환"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'C 와 D 가 같은 의자에 앉지 않는다'를 '남은 5명 배치 전체 − C·D 가 같은 의자에 앉는 배치'의 여사건으로 변환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "자리 구조가 주어진 배치에서 조건부 순열의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    마부석 때문에 두 자리가 모두 빈 의자가 3개뿐이라는 것을 읽어야 ㈎ 의 경우가 3×2 로 확정된다.
    남은 5명을 5개 자리에 앉히는 5! 에서 C·D 가 한 의자를 차지하는 경우를 빼는 여사건이 ㈏ 의 처리다.
    좌석이 서로 구별된다는 점(T-표기)과 앞 의자 한 자리를 빠뜨리는 것(T-경계)이 함정이다.
    STEP 2 ★3 출발 · 통찰 2 → +1 → ★4.
  tier: star_4
  mechanism_primary: "빈 2인 의자 3개 중 A·B 의자 선택 ×2 → 남은 5자리 5! 에서 C·D 같은 의자(2의자×2×3!) 빼기 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$576$'
  answer_source: "답지"
  figure: "crop:fig-254-562.png"
  latex: latex-bank/gn-cm1/items/254-562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "의자 수와 관광객 수를 함께 바꾼다(의자 3개·마부 1석·관광객 5명). 제약: (빈 자리 수) = (관광객 수) 여야 하고, 두 자리가 모두 빈 의자가 2개 이상 남아야 ㈏ 의 여사건이 0 이 아니다."
    creative: "(1) 마부석을 없애면 구조 파악 단계가 사라져 ★3 (2) ㈏ 를 'C 와 D 는 앞뒤로도 이웃하지 않는다'로 강화하면 인접 관계가 2차원이 되어 ★5 (3) A·B 가 같은 의자가 아니라 같은 줄이면 조건이 느슨해져 ★3."
```

```yaml
- id: GN-CM1-254-563
  page: 254
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    서로 다른 한 자리 자연수 6개를 일렬로 나열할 때 적어도 한쪽 끝에 홀수가 오는 경우의 수가 432 일 때 홀수의 개수.
  category: "적어도 → 여사건(양 끝이 모두 짝수) → 홀수 개수를 미지수로 둔 방정식 역추적"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'적어도 한쪽 끝에 홀수'를 '전체 6! − 양 끝이 모두 짝수'로 동치 변환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과 432 에서 짝수의 개수를 미지수로 둔 식 (짝수 개수)P2 × 4! 를 세우고 개수를 역추적"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "경우의 수가 주어졌을 때 집단의 인원 역추적(적어도 + 여사건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 720 에서 432 를 빼면 양 끝이 모두 짝수인 경우가 288 이고, 짝수를 k개라 하면 kP2×4!=288 에서 k(k-1)=12 로 줄어든다.
    '적어도' 를 직접 세면 한쪽 끝만 홀수인 경우와 양쪽 다 홀수인 경우가 겹쳐 틀리는 것(T-경계)이 이 문항의 함정이다.
    묻는 것이 홀수 개수인데 식은 짝수 개수로 세워진다는 점도 마지막에 되돌려야 한다.
    STEP 2 ★3 출발 · 통찰 2 → +1 → ★4.
  tier: star_4
  mechanism_primary: "전체 6! − 432 = 양 끝 모두 짝수 → kP2×4!=288 → k=4 → 홀수 6−k=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/254-563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수와 목표 경우의 수를 함께 바꾼다(5개·목표 108 등). 제약: 전체 n! 에서 목표를 뺀 값이 kP2×(n-2)! 로 나누어떨어져 k 가 자연수로 나와야 하고, k ≤ n 이어야 한다."
    creative: "(1) '양 끝이 모두 홀수'로 바꾸면 여사건 없이 직접 ★3 (2) 목표를 부등식(400 이상)으로 주면 범위 판정 ★4 (3) 끝이 아니라 '가운데 두 자리' 조건으로 바꾸면 자리 수만 달라져 ★4 유지."
```

```yaml
- id: GN-CM1-254-564
  page: 254
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    1~7 에서 서로 다른 5개를 택해 만든 다섯 자리 자연수 중 각 자리에 짝수와 홀수를 교대로 쓴 것의 개수.
  category: "교대 패턴이 홀 시작·짝 시작 두 가지 → 각 패턴에서 홀수·짝수를 자리에 배정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'교대'가 홀짝홀짝홀(홀 3·짝 2)과 짝홀짝홀짝(짝 3·홀 2) 두 개의 독립 시나리오로 갈리고, 사용할 수 있는 홀수 4개·짝수 3개와 맞는지를 각각 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "짝수와 홀수를 교대로 쓰는 자연수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1~7 에는 홀수 1, 3, 5, 7 넷과 짝수 2, 4, 6 셋이 있어 홀수로 시작하면 4P3×3P2, 짝수로 시작하면 3P3×4P2 다.
    다섯 자리라 두 패턴 모두 가능하고 어느 한쪽만 세면 답이 절반 가까이 빠지는 T-경계가 함정이다.
    STEP 2 ★3 출발 · 통찰 1 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "교대 패턴 두 가지 확정 → 각 패턴에서 홀수 자리·짝수 자리에 nPr 배정 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$216$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/254-564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 범위와 자리 수를 바꾼다(1~9 에서 4개 → 짝홀 패턴 둘 다 가능). 제약: 자리 수가 홀수면 두 패턴 중 어느 쪽이든 많은 쪽 숫자가 (자리 수+1)/2 개 이상이어야 하고, 짝수 자리 수면 두 패턴의 필요 개수가 같아진다."
    creative: "(1) 숫자 집합에 0 을 넣으면 맨 앞 제한이 겹쳐 ★4 (2) '홀수로 시작' 조건을 명시하면 분기가 사라져 ★2 (3) 교대 대신 '이웃한 두 자리의 합이 홀수'로 바꾸면 같은 조건의 다른 표현이라 I-EQV 가 추가돼 ★4."
```

```yaml
- id: GN-CM1-254-565
  page: 254
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    2~6 의 5개 숫자를 한 번씩 써서 만든 다섯 자리 자연수 중 54000 보다 작은 짝수의 개수.
  category: "만의 자리로 분기 → 5 로 시작하면 천의 자리까지 제한 → 각 경우에서 끝자리 짝수 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'54000 보다 작다'와 '짝수' 두 조건이 만의 자리 2·3·4 묶음과 5 로 시작하는 경계 묶음으로 갈리고, 경계 묶음 안에서 천의 자리로 한 번 더 분기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "크기 조건과 끝자리 조건이 겹친 자연수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    만의 자리가 2, 3, 4 면 크기 조건은 자동이고 일의 자리에 남은 짝수를 넣는 수만 세면 된다.
    만의 자리가 5 인 경계 묶음에서만 천의 자리를 2 또는 3 으로 제한하고 다시 끝자리 짝수를 센다.
    만의 자리로 쓴 숫자가 짝수면 끝자리 후보가 하나 줄어드는 것(T-범위)이 계속 걸린다.
    STEP 2 ★3 출발 · 통찰 1 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "만의 자리 분기 → (5 로 시작하면 천의 자리 추가 제한) → 각 경우 일의 자리 짝수 고르고 남은 자리 배열 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$52$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/254-565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 54000 과 숫자 집합을 바꾼다. 제약: 기준값의 앞 두 자리가 모두 주어진 숫자 집합에 있어야 경계 묶음이 생기고, 짝수 조건을 유지하려면 집합에 짝수가 2개 이상 있어야 한다."
    creative: "(1) '큰 짝수'로 뒤집으면 여사건과 직접 세기를 비교하게 되어 ★4 (2) 짝수 대신 3의 배수로 바꾸면 자리 합 조건이라 ★4 (3) 숫자 집합에 0 을 넣으면 맨 앞 제한까지 겹쳐 ★4."
```

```yaml
- id: GN-CM1-254-566
  page: 254
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    GERMANY 의 7개 문자를 한 번씩 써서 사전식으로 배열할 때 GYRNMEA 와 NGEAMRY 사이에 있는 문자열의 개수.
  category: "두 문자열의 순서를 각각 누적 개수로 구하기 → 차에서 양 끝 제외"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사전식 순서를 A·E·G·M·N·R·Y 정렬 기준의 앞자리 고정 묶음(6!, 5!, …) 누적으로 전환해 두 문자열의 순위를 각각 계산"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 문자열 사이의 개수'를 '순위의 차 − 1'로 동치 변환(양 끝 문자열 자신은 제외)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "사전식 배열에서 두 문자열 사이의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 문자열의 순위를 각각 구하는 것 자체가 252-554 를 두 번 하는 일이고, 여기에 '사이'의 경계 처리가 붙는다.
    GYRNMEA 는 G 구간의 끝 쪽, NGEAMRY 는 N 구간의 앞쪽이라 누적 묶음을 자리마다 정확히 세야 한다.
    양 끝 두 문자열을 포함할지 말지(T-경계)와 알파벳 정렬 순서(T-표기)가 함정이다.
    STEP 2 ★3 출발 · 통찰 2 → +1 → ★4.
  tier: star_4
  mechanism_primary: "알파벳 순 정렬 → 두 문자열의 순위를 각각 누적 계산 → (큰 순위 − 작은 순위 − 1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$984$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/254-566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어와 두 문자열을 바꾼다. 제약: 문자가 모두 서로 달라야 하고, 두 문자열의 첫 문자가 다르면 순위 차가 큰 묶음 단위로 계산돼 난도가 떨어진다(같은 첫 문자면 더 어려워짐)."
    creative: "(1) 한쪽을 단어 자신(GERMANY)으로 고정하면 계산이 짧아져 ★3 (2) '사이' 대신 '이상 이하'로 바꾸면 경계 포함 판정만 달라져 ★4 유지 (3) 두 문자열의 첫 문자를 같게 잡으면 누적 단계가 깊어져 ★5 후보."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-255-567
  page: 255
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    장미 3송이·튤립 2송이·해바라기 1송이를 3명의 학생에게 각자 한 송이씩 나누어 주는 경우의 수(같은 종류의 꽃은 구분하지 않음). 5지선다.
  category: "학생마다 꽃 '종류'를 배정하는 문제로 전환 → 전체 배정에서 보유 수를 넘는 경우 제외"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 종류를 구분하지 않으므로 '꽃을 나누어 준다'를 '학생 3명 각각에게 장미·튤립·해바라기 중 한 종류를 정해 준다'는 종류 배정 세기로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "보유 수 제한(튤립 2송이·해바라기 1송이)을 '전체 배정에서 튤립 3명·해바라기 2명 이상인 배정을 뺀다'는 여사건 조건으로 변환"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "개수 제한이 있는 종류를 사람에게 배정하는 경우의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    같은 종류를 구분하지 않는다는 단서가 이 문항의 전부다 — 세는 대상이 꽃 한 송이 한 송이가 아니라 학생별 종류다.
    학생 3명에게 종류를 배정하는 전체 경우에서 튤립이 3명, 해바라기가 2명 이상에게 가는 배정을 빼면 된다.
    [분류 이슈] 순열 단원에 있지만 실제 골조는 제한이 있는 종류 배정이라 순열 공식이 직접 쓰이지 않는다.
    실력 UP ★4 출발 · 통찰 2 → ★4 유지(★5 게이트인 통찰 3개 미달).
  tier: star_4
  mechanism_primary: "학생별 종류 배정 전체 3^3 → 튤립 3명·해바라기 2명 이상인 배정 제외 → 19"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/255-567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꽃의 종류별 송이 수와 학생 수를 바꾼다(장미 4·튤립 2·백합 1 에 학생 3명). 제약: (총 송이 수) ≥ (학생 수) 여야 하고, 적어도 한 종류의 송이 수가 학생 수보다 작아야 제외 단계가 살아 있다."
    creative: "(1) 모든 종류가 학생 수 이상이면 제외 단계가 사라져 3^3 뿐이라 ★2 (2) 꽃을 모두 다른 종류로 주게 하면 단순 순열 ★2 (3) 학생마다 받는 송이 수를 다르게 하면 분배 문제로 넘어가 ★5 (4) 같은 종류를 구분한다고 바꾸면 순열 6P3 이라 ★2."
```

```yaml
- id: GN-CM1-255-568
  page: 255
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    8칸(가로 2줄 × 세로 4칸)으로 나누어진 직사각형의 각 칸에 1, 3, 5, 7, 8, 10, 12, 14 를 하나씩 써넣을 때 각 세로줄 네 수의 합이 서로 같은 경우의 수.
  category: "두 줄의 합이 같다 → 각 줄 합 30 → 합이 30 인 네 수 조합 찾기 → 각 줄 안의 배열 4!×4!"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 세로줄의 합이 서로 같다'를 '전체 합 60 의 절반인 30 이 각 줄의 합'이라는 구체 조건으로 동치 변환"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합이 30 인 네 수의 조합 후보를 홀수 개수(0·2·4)별로 훑고 홀수 4개만 모인 조합(합 16)처럼 조건을 못 채우는 후보를 기각해야 개수가 확정됨"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "합이 같도록 수를 두 묶음으로 나누고 각 묶음 안을 배열하는 경우의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 합이 60 이므로 각 줄은 30 이고, 홀수 네 개(1, 3, 5, 7)의 합이 16 이라 한 줄에 홀수가 2개씩 들어가는 조합만 살아남는다.
    조합을 확정하면 어느 줄에 넣을지와 줄 안의 순서가 남아 4!×4! 를 곱한다.
    칸이 서로 구별된다는 점(T-표기)과 줄을 바꾼 배치를 중복으로 셀지(T-경계)가 함정이다.
    [분류 이슈] 통찰 3개 이상이면 ★5 후보지만 조합 탐색이 두 통찰로 정리돼 실력 UP ★4 유지. 후보 ★4/★5.
  tier: star_4
  mechanism_primary: "전체 합 60 → 각 줄 30 → 합 30 인 네 수 조합 찾기 → 줄 배정 × 줄 안 배열 4!×4!"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4608$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/255-568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8개의 수를 바꾸되 전체 합이 짝수이고 절반을 만드는 네 수 조합이 손으로 셀 만큼(10개 이내) 있어야 한다. 제약: 홀수의 개수를 4개로 유지하면 '한 줄에 홀수 2개' 라는 축약이 살아 있고, 홀수가 홀수 개면 답이 0 이 된다."
    creative: "(1) 칸을 3줄로 늘리면 조합 탐색이 폭발해 ★5 (2) '각 가로줄의 합이 같다'로 바꾸면 조건 수가 늘어 ★5 (3) 합이 같은 경우가 아니라 합의 차가 최소인 경우를 묻기(★4) (4) 수를 연속한 자연수로 주면 조합이 규칙적이어서 ★3."
```

```yaml
- id: GN-CM1-255-569
  page: 255
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    자음 ㄱ, ㄴ, ㄷ, ㄹ, ㅁ 5개를 일렬로 나열할 때 ㄴ과 ㄹ 또는 ㄹ과 ㅁ이 서로 이웃하는 경우의 수.
  category: "'또는' → 두 이웃 사건의 합집합 → 각각의 묶음 수를 더하고 동시에 이웃하는 경우를 빼기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'A 또는 B'를 '(A 인 경우) + (B 인 경우) − (A 이면서 B 인 경우)'의 합집합 세기로 동치 변환"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 사건이 ㄹ 을 공유하므로 교집합이 'ㄴㄹㅁ 또는 ㅁㄹㄴ 이라는 세 문자 묶음'이 되는 구조를 따로 파악"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 이웃 조건이 '또는'으로 묶인 나열의 수(합집합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄴㄹ 묶음과 ㄹㅁ 묶음이 각각 2×4! 이고, 둘 다 만족하는 경우는 ㄹ 이 가운데인 세 문자 묶음이라 2×3! 이다.
    단순히 두 경우를 더하면 겹치는 부분을 두 번 세는 것(T-경계)이 이 문항의 함정이다.
    ㄹ 이 두 조건에 공통으로 들어간다는 구조를 못 보면 교집합을 잘못 잡는다.
    실력 UP ★4 출발 · 통찰 2 → ★4 유지.
  tier: star_4
  mechanism_primary: "(ㄴㄹ 묶음 2×4!) + (ㄹㅁ 묶음 2×4!) − (ㄴㄹㅁ 묶음 2×3!)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$84$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/255-569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 개수를 바꾼다(6문자 → 2×5!+2×5!−2×4!). 제약: 두 이웃 쌍이 한 문자를 공유해야 교집합이 세 문자 묶음이 되고, 공유하지 않으면 교집합이 두 묶음의 곱이라 식이 달라진다."
    creative: "(1) 두 쌍이 문자를 공유하지 않게 하면 교집합 계산이 달라져 ★4 유지 (2) '또는'을 '이면서'로 바꾸면 세 문자 묶음 하나라 ★2 (3) 세 쌍의 합집합으로 늘리면 포함배제가 깊어져 ★5 (4) '둘 중 정확히 하나만 이웃'으로 바꾸면 교집합을 두 번 빼야 해 ★5."
```

```yaml
- id: GN-CM1-255-570
  page: 255
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    2~9 의 8개 자연수 중 어느 두 수의 합도 11 이 되지 않도록 서로 다른 4개를 뽑아 만드는 네 자리 자연수의 개수.
  category: "합이 11 인 짝 구조 발견 → 네 짝에서 각각 하나씩 뽑기 → 뽑은 4개를 4! 로 배열"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2~9 가 (2,9)(3,8)(4,7)(5,6) 네 짝으로 완전히 갈리는 11 에 대한 대칭 구조를 발견"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'어느 두 수의 합도 11 이 아니다'를 '각 짝에서 많아야 하나를 뽑는다'로, 4개를 뽑아야 하므로 '각 짝에서 정확히 하나씩'으로 동치 변환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "합이 일정한 짝을 피해 뽑아 만드는 자연수의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    합이 11 인 짝이 정확히 네 쌍이고 8개 수가 남김없이 나뉘므로, 4개를 뽑으려면 각 짝에서 하나씩 뽑을 수밖에 없다.
    짝마다 2가지씩 고른 뒤 뽑힌 네 수를 4! 로 배열한다(0 이 없어 맨 앞 제한 없음).
    짝 구조를 못 보면 조합을 일일이 세다가 중복·누락이 생긴다(T-범위).
    실력 UP ★4 출발 · 통찰 2 → ★4 유지.
  tier: star_4
  mechanism_primary: "합 11 인 네 짝으로 분할 → 각 짝에서 하나씩 2^4 가지 → 각 조합마다 4! 배열"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$384$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/255-570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수의 범위와 금지 합을 함께 바꾼다(1~10 에서 합 11 → 다섯 짝). 제약: 금지 합이 (최솟값+최댓값) 이어야 모든 수가 짝을 이루고, 뽑는 개수가 짝의 개수와 같아야 '각 짝에서 하나씩'으로 확정된다."
    creative: "(1) 뽑는 개수를 짝의 개수보다 적게 하면 어느 짝을 비울지 고르는 단계가 추가돼 ★5 (2) 금지 합을 짝이 맞지 않는 값(예: 10)으로 두면 짝 없는 수가 생겨 분기가 늘어 ★5 (3) 배열하지 않고 뽑기만 세면 조합 단원 ★3."
```

```yaml
- id: GN-CM1-255-571
  page: 255
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    1, 2, 2, 3, 3, 3, 4, 5 가 적힌 8장의 카드 중 4장을 뽑아 나열해 만든 네 자리 자연수 중 같은 숫자끼리 이웃하지 않는 것의 개수.
  category: "뽑은 4장의 중복 구성으로 경우 분기 → 각 구성에서 (전체 나열 − 같은 숫자 이웃)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "뽑은 4장이 모두 다른 경우 · 한 숫자만 2장인 경우 · 2와 3이 각각 2장인 경우 · 3이 3장인 경우로 갈려 각각 세는 방식이 다름"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 구성에서 '같은 숫자가 이웃하지 않는 나열'을 '같은 것이 있는 전체 나열 − 같은 숫자를 묶은 나열'의 여사건으로 변환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3 이 3장인 구성은 네 자리 안에서 어떻게 놓아도 3 끼리 이웃하므로 0 으로 기각해야 하고, 이 기각을 빠뜨리면 답이 커짐"
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: "중복 카드가 섞인 뽑아 나열에서 같은 숫자가 이웃하지 않는 자연수의 개수"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    카드에 2 가 2장, 3 이 3장 있어 뽑은 4장의 구성부터 갈라야 하고, 구성마다 '같은 것이 있는 순열'과 묶음 여사건을 따로 적용해야 한다.
    3 이 3장인 구성은 네 자리에서 반드시 이웃이 생겨 0 으로 기각되고, 2 와 3 이 각각 2장인 구성만 2323·3232 두 개로 남는다.
    구성 분기(T-범위)와 중복 카드의 나열 수 계산(T-표기)이 모두 걸려 이 단원에서 가장 무겁다.
    실력 UP ★4 출발 · 통찰 3(MI d3 + EQV + VF) → +1 → ★5. §2.13 저노출 유형(I-VF) 요건 충족.
    [분류 이슈] novelty_score 는 정독 규약상 0 이라 §2.14 ★5 참신도 게이트는 이 파일에서 적용하지 않았다.
  tier: star_5
  mechanism_primary: "뽑은 4장의 중복 구성 분기 → 구성별 (같은 것이 있는 순열 − 같은 숫자 묶음) → 불가능 구성 기각 → 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$194$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/255-571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 구성(1, 2, 2, 3, 3, 3, 4, 5)과 뽑는 장수를 바꾼다. 제약: 중복 숫자가 2종류 이하여야 경우 분기가 손으로 정리되고, 어떤 숫자의 장수가 (뽑는 장수+1)/2 를 넘으면 그 구성은 자동으로 0 이 되어 기각 단계가 생긴다."
    creative: "(1) 뽑는 장수를 3장으로 줄이면 구성이 줄어 ★4 (2) '같은 숫자끼리 이웃해도 된다'로 풀면 구성별 나열 수 합만 남아 ★4 (3) 네 자리 자연수가 아니라 문자열로 바꿔도 골조는 같음(★5 유지) (4) 카드에 0 을 넣으면 맨 앞 제한까지 겹쳐 ★5."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 5 · ★2 17 · ★3 11 · ★4 7 · ★5 1
- 통찰형 27 · 절차형 14 · premium 0
- 구역별 ★ 중앙값: 개념원리 익히기 ★1~2 · 필수·발전 예제 ★2(예제 5문 중 3문이 ★2~3) · STEP 1 ★2 · STEP 2 ★3~4 · 실력 UP ★4
- 통찰 유형 분포: I-EQV 16 · I-RT 8 · I-MI 7 · I-BW 5 · I-VF 3 · I-SYM 1 (I-XU·I-PD·I-CON·I-SC 0)
- type_hint 상위: 「nPr 등식에서 n·r 구하기」 4 · 「사전식 배열(순서↔문자열)」 4 · 「이웃·비이웃 순열」 4 · 「0 을 포함한 자연수의 개수」 3 · 「순열의 수 기본(세우기·뽑아 세우기)」 3
- 그림: 2문(`crop:fig-253-558.png` · `crop:fig-254-562.png`) · 255-568 은 본문 표
- 대상층: 하위권 5 · 중하위권 9 · 중위권 10 · 중상위권 13 · 상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-248-e9 | 「필수」 예제(★2 출발)지만 5!·5P3·5P2 한 줄씩이라 통찰 0·M_total 3. v3.8 감점 규칙대로 −1 하여 ★1 로 둠 | ★1 / ★2 |
| GN-CM1-252-e13 | 「발전」 예제. 통찰 2개(I-RT·I-BW)라 +1 후보지만 사전식 누적은 이 단원의 표준 학습 자산이라 ★3 유지. 252-552·253-561·254-566 과 같은 골조를 카탈로그에서 한 유형으로 묶을지 정방향·역방향으로 나눌지 결정 필요 | ★3 / ★4 |
| GN-CM1-255-567 | 순열 단원에 실려 있으나 실제 골조는 개수 제한이 있는 종류 배정이라 nPr 이 직접 쓰이지 않음. 카탈로그에서 순열 유형으로 둘지 별도 유형으로 뺄지 결정 필요 | ★4 |
| GN-CM1-255-568 | 조합 탐색의 양은 ★5 급이나 통찰이 2개(I-EQV·I-VF)로 정리돼 ★5 게이트(통찰 3개 이상) 미달. 실력 UP 출발점 ★4 유지 | ★4 / ★5 |
| GN-CM1-255-571 | ★5 게이트(통찰 3개 + I-VF)는 충족하나 정독 규약상 novelty_score 가 0 이라 §2.14 참신도 게이트는 적용하지 않음. 출제 슬롯으로 쓸 때 재판정 필요 | ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고)

- 이 범위에서 반복된 type_hint 는 다섯 덩이다: ⑴ nPr·계승의 계산과 등식·부등식(246-537, 246-538, 246-540, 247-e8, 247-541, 248-544, 253-555), ⑵ 순열의 수 기본(246-539, 248-e9, 248-542, 248-543), ⑶ 이웃·비이웃(249-e10, 249-545, 249-546, 249-547, 250-550, 253-556, 253-557, 253-558, 253-559, 255-569), ⑷ 자리 조건과 자연수의 개수(250-e11, 250-548, 250-549, 251-e12, 251-551, 252-553, 253-560, 254-564, 254-565, 255-570), ⑸ 사전식 배열(252-e13, 252-552, 252-554, 253-561, 254-566).
- 따로 세워야 할 유형: 「사전식 배열에서 k번째 찾기(역방향)」는 「몇 번째인지 구하기(정방향)」와 통찰 구성이 달라(I-BW 유무) base ★ 가 한 단계 벌어진다. 「합이 일정한 짝을 피해 뽑기」(255-570)와 「개수 제한이 있는 종류 배정」(255-567)은 순열 공식을 직접 쓰지 않으므로 별도 유형이 맞다.
- 통합해도 될 유형: 「이웃 묶음」과 「비이웃 끼워넣기」는 여사건으로 오가는 한 쌍이라 한 유형 아래 두 변형으로 묶을 수 있다. 「0 을 포함한 자연수의 개수」와 「특정 값보다 큰·작은 수의 개수」도 '앞자리부터 제한을 적용해 묶음을 센다'는 같은 골조다.
- 이 단원에는 I-XU·I-PD·I-CON·I-SC 통찰이 한 번도 나오지 않았다. 순열 단원 단독으로는 단원 경계를 넘는 결합(I-XU)이 잘 생기지 않으므로, ★5 슬롯을 만들려면 255-571 처럼 중복 카드·기각이 들어간 구성이나 다른 단원(경우의 수·확률)과의 결합이 필요하다.
