---
name: mechanism-데이터-GN-PROB-06
description: 개념원리 확률과 통계 06 시행과 사건(1/1 · 필수·발전 예제 3문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 06 시행과 사건
  unit_code: PROB-06
  part: "1/1"
  extract_range: "61~61쪽 · 61-e1~61-122"
  total_problems: 3
  unit_total: 3
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 06 시행과 사건 (1/1) 정독 데이터 (v1.0)

이 파일은 61쪽 한 쪽에 들어 있는 「필수·발전 예제」 구역 3문항(`61-e1` · `61-121` · `61-122`) 전수를 다룬다. 단원 전체가 3문항이라 파트 분할이 없다. 개념원리 고등의 난이도 신호는 구역과 태그로 나타나는데, 이 범위에서는 상자 발문인 **필수 예제**(tag 「필수」 · ★2 출발) 한 문항과 그 아래 딸린 **확인체크**(개념 확인 · ★1 출발) 두 문항이 전부이고, 기출 태그·STEP 구분·그림은 없다. 세 문항 모두 「배반사건」 개념의 첫 확인 단계로, 사건을 원소로 나열해 교집합이 공집합인지 보는 판정형과, 「어떤 사건과 배반인 사건의 개수」를 여사건의 부분집합 개수 $2^n$ 으로 옮기는 개수형 두 골조로 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-61-e1
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 배반사건 두 갈래. ⑴ 주사위 한 개를 던질 때 짝수의 눈 $A$, 홀수의 눈 $B$, $4$의 약수의 눈 $C$ 중 서로 배반인 두 사건 찾기. ⑵ $1$~$8$ 이 적힌 카드에서 한 장을 뽑을 때 $6$의 약수가 나오는 사건 $A$ 와 서로 배반인 사건의 개수.
  category: "배반사건의 정의(교집합이 공집합) → 쌍별 판정 / 여사건의 부분집합 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 'A 와 서로 배반인 사건' 을 'A 의 여사건의 부분집합' 으로 옮겨 개수 세기로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건의 판정과 주어진 사건과 배반인 사건의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 세 사건을 원소로 나열해 세 쌍의 교집합만 보면 끝나는 정의 확인. ⑵ 는 '배반' 조건을 'A 의 여사건에 포함' 으로 옮겨야 개수 세기가 되고, 그 뒤는 원소 4개의 부분집합 $2^4$ 한 줄이다(EQV d1). 공집합도 배반인 사건에 들어간다는 경계 처리가 유일한 함정(T-경계).
    필수 예제 구역 출발 ★2 · 통찰 1개 · M_total 5 → ★2 유지.
    [분류 이슈] 한 문항이 판정형(⑴)과 개수형(⑵) 두 유형을 겹쳐 갖는다 — 카탈로그 설계 때 분리 여부 결정.
  tier: star_2
  mechanism_primary: "세 사건 원소 나열 → 쌍별 교집합이 공집합인 쌍 판정 / 'A 와 배반' → A 의 여사건의 부분집합 → $2^4$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $A$와 $B$ ⑵ $16$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/61-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 주사위의 세 사건을 다른 약수·배수·소수 조건으로 교체 가능. 제약: 배반인 쌍이 정확히 하나만 나오도록 나머지 두 쌍은 원소가 겹치게 둘 것. ⑵ 카드 수 $n$ 과 사건 $A$ 의 원소 수 $r$ 을 바꾸면 답은 $2^{n-r}$ — $n-r$ 이 커지면 개념이 아니라 지수 크기 문제가 되므로 $n \\le 10$, $n-r \\le 5$ 권장."
    creative: "(1) '배반이 아닌 쌍' 을 고르게 뒤집기(골조 동일 ★2 유지) (2) 'A 와 배반인 사건 중 원소가 2개인 것의 개수' 처럼 조건을 덧붙이면 조합 계산이 한 겹 더해져 ★3 (3) 여사건과 배반사건의 관계를 참·거짓 보기로 묻기(정의 구분이 분기를 만들어 I-MI · ★3)."
```

```yaml
- id: GN-PROB-61-121
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $1$~$7$ 이 적힌 공 7개에서 한 개를 꺼낼 때 $5$의 약수 $A$, $3$의 배수 $B$, 소수 $C$ 중 서로 배반사건인 쌍을 보기 ㄱ($A$·$B$) ㄴ($B$·$C$) ㄷ($A$·$C$) 에서 모두 고르기.
  category: "세 사건을 원소로 나열 → 쌍별 교집합이 공집합인 것 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건의 판정(교집합이 공집합인 쌍 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 사건을 원소로 적으면 $A$ 와 $B$ 만 공통 원소가 없고 나머지 두 쌍은 원소를 공유한다. 정의를 한 번 적용하는 절차형이고 다른 도구가 필요 없다.
    함정은 $1$ 을 소수로 세지 않는 것 하나(T-범위). 확인체크 신호 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "$A$, $B$, $C$ 의 원소 나열 → 세 쌍의 교집합이 공집합인 것만 고르기 → ㄱ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄱ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/61-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(7 → 9·10)와 세 사건의 정의(약수·배수·소수·제곱수)를 바꿀 수 있음. 제약: 보기 셋 중 배반인 쌍이 하나만 되도록 나머지 두 쌍에 공통 원소를 남기고, 어느 사건도 공집합이 되지 않게 할 것."
    creative: "(1) 보기를 네 쌍으로 늘리고 배반 쌍을 둘로 만들면 확인 단계만 늘어 ★1~2 (2) '서로 배반이면서 여사건은 아닌 쌍' 을 묻기 — 배반과 여사건의 구분이 필요해 EQV 한 단계가 붙어 ★2 (3) 세 사건이 표본공간을 분할하는지 묻기(★2)."
```

```yaml
- id: GN-PROB-61-122
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    표본공간 $S=\{1,2,3,4,5,6\}$ 에서 $A=\{1,2,3\}$, $B=\{2,3,4\}$ 일 때 두 사건 $A$, $B$ 와 모두 배반인 사건의 개수.
  category: "두 사건과 모두 배반 → 합집합의 여집합의 부분집합 개수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'A 와도 B 와도 배반' 을 'A∪B 의 여집합의 부분집합' 하나의 조건으로 묶어 개수 세기로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 사건과 모두 배반인 사건의 개수(합집합의 여집합의 부분집합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 배반 조건을 따로 따지면 경우가 늘지만, $A \cup B$ 의 여집합에 들어가는 사건이라는 한 조건으로 묶으면 남는 원소는 둘뿐이고 답은 부분집합 개수 $2^2$ 다(EQV d1).
    확인체크 출발 ★1 이지만 필수예제 ⑵ 의 한 사건 버전을 두 사건으로 통합하는 단계가 더해져 ★2 로 한 단 올림. 공집합도 배반인 사건에 포함된다는 경계 처리가 유일한 함정(T-경계).
  tier: star_2
  mechanism_primary: '$A \cup B$ 계산 → 여집합 $\{5,6\}$ → 부분집합 개수 $2^2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/61-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본공간 크기 $n$ 과 $A$, $B$ 의 원소를 바꾸면 답은 $2^{n-|A \\cup B|}$. 제약: $A \\cup B$ 가 $S$ 전체가 되면 답이 1(공집합뿐)이 되어 문항이 무의미하므로 여집합에 원소를 2개 이상 남기고, $A \\cap B \\ne \\varnothing$ 이어야 합집합 계산 단계가 살아 있음."
    creative: "(1) 'A 와는 배반이지만 B 와는 배반이 아닌 사건의 개수' 로 바꾸면 여집합 개수 빼기 한 단계가 더해져 ★3 (2) '공집합을 제외한다' 는 단서를 붙이면 경계 처리가 핵심이 됨(★2 유지) (3) $A$, $B$ 를 원소 나열 대신 '짝수' · '3의 배수' 같은 조건으로 주면 Mₐ 가 올라 ★2~3."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 1 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2 · 절차형 1 · premium 0
- 통찰 유형 분포: I-EQV 2건(모두 depth 1) · 그 외 0
- type_hint 상위: 「배반사건의 판정」 2건 성격(`61-e1` ⑴ · `61-121`) · 「…와 배반인 사건의 개수」 2건 성격(`61-e1` ⑵ · `61-122`) — 블록 3개 중 `61-e1` 이 두 유형을 겹쳐 가짐
- 그림: 0문(이 범위에 figure 있는 문항 없음)
- 벤더 신호: 필수 1 · 확인체크 2 · 기출 태그 0 · STEP 구분 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-61-e1 | 한 문항이 판정형(⑴)과 개수형(⑵) 두 골조를 겹쳐 가짐 — type_hint 를 어느 쪽으로 둘지, 카탈로그에서 소문항별로 쪼갤지 설계 때 결정 | ★2 |

벤더 신호와 2단 이상 어긋난 문항은 없다. `61-122` 는 확인체크(★1 출발)에서 ★2 로 한 단 올렸으나 1단 차이라 이슈로 올리지 않고 rationale 에만 근거를 남겼다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 실질 유형은 둘이다. ① **배반사건의 판정** — 사건을 원소로 나열해 교집합이 공집합인 쌍을 고르는 절차형(★1~2). ② **배반인 사건의 개수** — 배반 조건을 여사건(또는 합집합의 여집합)의 부분집합으로 옮겨 $2^n$ 으로 세는 형(★2).
- ②의 「한 사건과 배반」(`61-e1` ⑵)과 「두 사건과 모두 배반」(`61-122`)은 골조가 같고 합집합 한 단계만 다르므로 **같은 유형의 난이도 변형으로 통합**하고, base ★ 는 2 로 두는 것이 적절하다.
- ①과 ②는 요구하는 사고가 다르므로(정의 확인 vs 조건 동치 변환 후 개수 세기) **따로 세우는 것**을 권한다. 이 단원의 문항 수가 3개뿐이라 카탈로그를 만들 때는 07 이후의 확률 단원과 묶어 「시행과 사건」 계열 유형군으로 정리하는 편이 낫다.
