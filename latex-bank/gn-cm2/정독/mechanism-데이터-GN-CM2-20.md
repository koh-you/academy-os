---
name: mechanism-데이터-GN-CM2-20
description: 개념원리 공통수학2 20 명제 p → q(1/1 · 173-e3~175-421) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: '20 명제 $p \rightarrow q$'
  unit_code: CM2-20
  part: "1/1"
  extract_range: "173~175쪽 · 173-e3~175-421"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 20 명제 p → q (1/1) 정독 데이터 (v1.0)

이 파일은 20단원 12문 전수(173~175쪽 · 173-e3~175-421)를 다룬다. 구역은 「필수·발전 예제」 하나뿐이고(필수 예제 4 · 확인체크 8) 개념원리 익히기·연습문제·특강 구역은 이 단원 범위에 없다. 단원 전체가 **「명제 $p \rightarrow q$ 가 참 ⇔ $P \subset Q$」** 한 문장을 축으로 삼고 거기서 ⑴ 구체 조건의 참·거짓 판별과 반례 제시 ⑵ 추상 진리집합의 포함 관계(여집합·서로소·포함 사슬) ⑶ 범위 조건에서 명제가 참이 되도록 하는 상수의 값의 범위, 세 갈래로 뻗는 배열이다. 그림은 173-e4 한 문항(두 진리집합의 벤 다이어그램에 원소가 적힌 그림)뿐이고, 선택지 문항은 3문(174-e5 · 174-416 · 174-418), 나머지는 단답·서술이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · **tag 「확인체크」 문항도 구역 신호를 우선**해 바로 위 예제와 같은 ★2 출발점으로 두었다(통번호 「개념원리 익히기」의 ★1 과 구분한다). 출발점에서 다음 세 규칙으로만 ±1 했다 — (a) 통찰 0 · M_total ≤ 5 → −1 후보, (b) 통찰 2개 이상 또는 depth 3 → +1, (c) 통찰 1개라도 M_total ≥ 8 → +1 후보. 이 단원에서 매 문항 반복되는 **「명제의 참 ↔ 진리집합의 포함 관계」 번역은 이 절에서 직접 가르치는 표준 도구이므로 통찰로 세지 않았고**, 대신 그 위에 한 겹 더 얹히는 동치 변환($P^c \subset Q \Leftrightarrow P \cup Q = U$ · $P \cap Q = \varnothing \Leftrightarrow P \subset Q^c$ · 절댓값 부등식의 부정을 구간으로)만 I-EQV 로 라벨링했다. 반례 탐색·구간 경계 처리·정수 개수 세기는 통찰이 아니라 $M_t$(T-범위 · T-경계 · T-부호)에 반영했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-173-e3
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 실수 $x$, $y$ 에 대한 세 명제(3의 양의 배수이면 6의 양의 배수 · $x^2-3x+2=0$ 이면 $0<x<4$ · 두 무리수의 합도 무리수)의 참, 거짓을 각각 판별.
  category: "두 조건의 진리집합 구하기 → 포함 관계 확인 또는 반례 제시"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '명제 $p \longrightarrow q$ 의 참, 거짓 판별(진리집합 포함·반례)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 3, ⑶ 은 $\sqrt2$ 와 $-\sqrt2$ 처럼 반례 하나를 만들면 끝나고 ⑵ 는 근 1, 2 가 모두 $0<x<4$ 에 들어가는지 확인하면 된다.
    반례를 "찾는" 세 번의 시도가 단계 수를 올리지만 도구는 진리집합 포함 관계 하나뿐이라 통찰로 세지 않았다.
    통찰 0 · M_total 5 로 −1 후보이나 무리수의 합이 유리수가 되는 반례 구성이 하위권에 비자명해 필수 예제 출발점 ★2 를 유지했다. [분류 이슈] −1 후보 미적용.
  tier: star_2
  mechanism_primary: "각 명제의 진리집합 P·Q → P ⊂ Q 면 참 · 아니면 P 에 있고 Q 에 없는 원소를 반례로 제시"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 거짓 ⑵ 참 ⑶ 거짓'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/173-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 배수 쌍(3·6 → 4·8, 6·12), ⑵ 의 이차방정식 계수와 구간 끝(근이 모두 구간 안이면 참 · 하나라도 밖이면 거짓). 제약: ⑵ 는 인수분해되는 정수근이어야 하고 구간 끝의 등호 유무가 판정을 뒤집지 않도록 근과 경계를 겹치지 않게 둔다."
    creative: "(1) 거짓인 것만 골라 반례를 쓰게 하면 같은 골조 ★2 (2) ⑶ 을 '두 무리수의 곱도 무리수'로 바꾸면 반례가 $\\sqrt2 \\times \\sqrt2$ 로 더 쉬워져 ★1 (3) 각 명제의 역을 함께 판정하게 하면 조건 방향 혼동이 추가돼 ★3 · I-EQV d1."
```

```yaml
- id: GN-CM2-173-e4
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 조건 $p$, $q$ 의 진리집합 $P$, $Q$ 가 벤 다이어그램으로 주어질 때, 명제 $\sim p \longrightarrow q$ 가 거짓임을 보이는 원소(반례)를 모두 찾기.
  category: "반례의 정의 → 가정은 만족하고 결론은 만족하지 않는 원소 → 그림에서 읽기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거짓인 명제의 반례 — 진리집합 그림에서 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반례는 $\sim p$ 의 진리집합 $P^c$ 에는 속하고 $Q$ 에는 속하지 않는 원소, 즉 $P^c \cap Q^c = (P \cup Q)^c$ 의 원소다.
    그림에서 두 원 바깥의 원소만 읽으면 되고 계산이 없다. 통찰 0 · M_total 5 로 −1 후보이나, 가정이 $p$ 가 아니라 $\sim p$ 라서 여집합 방향을 뒤집는 지점이 실제 오답의 주 원인이라 필수 예제 출발점 ★2 를 유지했다. [분류 이슈] −1 후보 미적용.
  tier: star_2
  mechanism_primary: "반례 = $\\sim p$ 는 참이고 $q$ 는 거짓인 원소 → $P^c \\cap Q^c$ → 그림의 두 원 바깥"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$, $10$'
  answer_source: "본문 풀이"
  figure: crop:fig-173-e4.png
  latex: latex-bank/gn-cm2/items/173-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 안 원소의 수치와 개수(두 원 바깥 원소를 1개·3개로). 제약: 그림 라벨은 전사 크롭에 고정돼 있으므로 수치를 바꾸려면 그림도 다시 그려야 한다. 반례가 존재하도록 두 원 바깥이 비지 않게 둔다."
    creative: "(1) 묻는 명제를 $p \\longrightarrow q$ · $q \\longrightarrow \\sim p$ 등으로 바꾸면 읽어야 할 영역만 달라지고 ★2 유지 (2) 반례의 개수·합을 묻기(★2) (3) 그림 대신 조건식으로 주고 진리집합을 직접 구하게 하면 ★3 (4) 반례가 없는 명제를 섞어 '거짓임을 보이는 원소가 없는 것'을 고르게 하면 ★3 · I-MI d1."
```

```yaml
- id: GN-CM2-173-414
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 실수 $x$, $y$ 에 대한 두 명제($x^2=9$ 이면 $x^3=27$ · $(x-1)(y-3)=0$ 이면 $x=1$ 또는 $y=3$)의 참, 거짓을 판별.
  category: "진리집합 비교 → 반례 $x=-3$ / 곱이 0 인 조건의 동치"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '명제 $p \longrightarrow q$ 의 참, 거짓 판별(진리집합 포함·반례)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 $x=-3$ 한 개로 끝나고 ⑵ 는 「곱이 0 ⇔ 적어도 하나가 0」 이라 두 진리집합이 아예 같다.
    단계·계산·추상도 모두 최소이고 통찰 0 · M_total 4 라 확인체크 출발점 ★2 에서 −1 해 ★1 로 두었다(벤더 신호와 1단 차이라 이슈로 올리지 않음).
  tier: star_1
  mechanism_primary: "P 와 Q 를 직접 나열 → P ⊂ Q 확인 또는 반례 하나 제시"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 거짓 ⑵ 참'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/173-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 제곱수와 세제곱수(4·8, 25·125), ⑵ 의 인수 $(x-a)(y-b)$ 의 상수. 제약: ⑴ 은 음의 근이 반례가 되도록 짝수 제곱을 유지해야 하고, ⑵ 는 두 인수가 서로 다른 문자여야 동치가 성립한다."
    creative: "(1) ⑴ 의 가정·결론을 바꿔 $x^3=27$ 이면 $x^2=9$ 로 두면 참이 돼 역의 참·거짓 비교로 확장(★2) (2) ⑵ 를 '$x=1$ 이고 $y=3$' 으로 바꾸면 거짓이 되어 '또는/그리고' 구분을 묻는 문항(★2 · I-EQV d1) (3) 두 명제의 역·대우까지 표로 판정하면 ★3."
```

```yaml
- id: GN-CM2-173-415
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합이 20 이하의 자연수일 때 $p$: $x$ 는 4의 배수, $q$: $x$ 는 16의 약수. 명제 $p \longrightarrow q$ 가 거짓임을 보이는 모든 원소의 합.
  category: "두 진리집합 나열 → 차집합 $P-Q$ → 원소의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거짓인 명제의 반례 — 진리집합의 차집합 원소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $P=\{4,8,12,16,20\}$, $Q=\{1,2,4,8,16\}$ 을 나열하고 $P-Q$ 의 원소를 더하면 된다.
    「반례 전체 = $P-Q$」 로 옮기는 한 단계가 있고 두 집합을 모두 나열해야 해 173-414 보다 단계가 많다. 통찰 0 · M_total 5 이지만 −1 하지 않고 확인체크 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "P(4의 배수) · Q(16의 약수) 나열 → 반례 전체 = P − Q → 원소의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/173-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체집합의 상한(20 → 30·50), 배수·약수의 기준 수(4·16 → 3·27, 6·36). 제약: $Q$ 가 $P$ 에 포함되지 않아 반례가 남아야 하고, 약수 쪽 기준 수는 배수 쪽 기준 수의 거듭제곱이어야 답이 깔끔하다."
    creative: "(1) 합 대신 반례의 개수·최댓값을 묻기(★2 유지) (2) $q$ 를 '$x$ 는 16의 배수' 로 바꾸면 포함 방향이 뒤집혀 참·거짓 판정부터 다시 해야 함(★2) (3) 명제를 $\\sim q \\longrightarrow \\sim p$ 로 주어 대우의 반례를 묻기(★3 · I-EQV d1) (4) 전체집합을 문자로 두고 반례가 없도록 하는 상한을 묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-CM2-174-e5
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 조건 $p$, $q$ 의 진리집합이 $P$, $Q$ 일 때 명제 $\sim p \longrightarrow q$ 가 참이면 항상 옳은 것을 5지선다에서 고르기.
  category: "명제가 참 ⇔ 포함 관계 → 여집합 포함을 합집합 등식으로 동치 변환"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$P^c \\subset Q$ 를 선택지 형태인 $P \\cup Q = U$ 로 동치 변환(여집합 포함 → 합집합이 전체집합)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "명제의 참, 거짓과 진리집합의 포함 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sim p \longrightarrow q$ 가 참 ⇔ $P^c \subset Q$ 까지는 이 절의 표준 번역이고, 선택지에는 그 형태가 없어 「$P^c$ 의 원소가 모두 $Q$ 에 있다 = $P$ 와 $Q$ 를 합치면 $U$」 로 한 번 더 옮겨야 한다.
    이 동치 변환 한 단계만 통찰로 셌다(I-EQV d1). 진리집합이 완전히 추상($M_a=3$)이라 M_total 7 이지만 통찰 1개 · depth 1 이라 +1 조건에 못 미쳐 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$\\sim p \\longrightarrow q$ 참 → $P^c \\subset Q$ → $P \\cup Q = U$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/174-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항이라 숫자 변형 대상은 선택지 구성뿐이다. 제약: 오답 선택지는 조건이 참일 때 '항상은 아니지만 가능한' 관계($P \\subset Q$ 등)로 두어야 하고, 정답이 둘이 되지 않도록 동치인 표현을 중복해 넣지 않는다."
    creative: "(1) 가정·결론을 $p \\longrightarrow \\sim q$ · $\\sim p \\longrightarrow \\sim q$ 로 바꾸면 각각 $P \\cap Q = \\varnothing$ · $Q \\subset P$ 가 답이 되어 같은 골조 ★2 (2) 선택지 대신 벤 다이어그램에서 색칠된 영역을 고르게 하면 I-RT d1 추가 ★3 (3) 조건 두 개를 동시에 주고 세 집합의 관계를 묻기(★3~4 · I-CON d1)."
```

```yaml
- id: GN-CM2-174-416
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 조건 $p$, $q$ 의 진리집합이 $P$, $Q$ 일 때 명제 $p \longrightarrow \sim q$ 가 참이면 항상 옳은 것을 5지선다에서 고르기.
  category: "명제가 참 ⇔ $P \\subset Q^c$ → 여집합 포함의 방향 바꾸기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$P \\subset Q^c$ 와 $Q \\subset P^c$ 가 같은 조건(두 집합이 서로소)임을 알아보고 선택지 형태로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "명제의 참, 거짓과 진리집합의 포함 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준 번역으로 얻는 것은 $P \subset Q^c$ 인데 선택지에는 방향을 뒤집은 $Q \subset P^c$ 가 놓여 있다.
    두 표현이 모두 $P \cap Q = \varnothing$ 과 같다는 것을 보는 동치 변환 한 단계만 통찰로 셌다. 174-e5 와 같은 골조·같은 M 프로파일이라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$p \\longrightarrow \\sim q$ 참 → $P \\subset Q^c$ → $P \\cap Q = \\varnothing$ → $Q \\subset P^c$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/174-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 선택지 구성만 바꿀 수 있다. 제약: $P - Q = \\varnothing$ · $P^c \\cap Q = \\varnothing$ 처럼 '참일 수도 있는' 관계를 오답으로 배치하고 정답과 동치인 표현이 둘 이상 들어가지 않게 한다."
    creative: "(1) 명제를 $\\sim p \\longrightarrow \\sim q$ 로 바꾸면 답이 $Q \\subset P$ 가 되어 같은 골조 ★2 (2) 선택지를 모두 고르는 보기형으로 바꾸면 174-417 과 같은 구조 ★3 (3) '항상 옳은 것' 대신 '항상 옳다고 할 수 없는 것'으로 뒤집으면 부정 판정이 더해져 ★3 · I-EQV d2."
```

```yaml
- id: GN-CM2-174-417
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 조건 $p$, $q$ 의 진리집합 $P$, $Q$ 가 $P \cap Q = \varnothing$ 일 때, 보기 ㄱ~ㅁ 의 다섯 명제 중 항상 참인 것을 모두 고르기.
  category: "서로소 조건을 여집합 포함으로 변환 → 다섯 명제를 포함 관계로 각각 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$P \\cap Q = \\varnothing$ 을 $P \\subset Q^c$ 와 $Q \\subset P^c$ 두 포함 관계로 옮겨 다섯 보기를 한 기준으로 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "진리집합이 서로소일 때 항상 참인 명제 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    서로소라는 한 조건을 $P \subset Q^c$ · $Q \subset P^c$ 로 바꿔 두면 ㄷ, ㅁ 이 바로 걸리고 나머지는 포함이 보장되지 않는다.
    보기가 다섯이라 가정·결론과 부정의 조합을 매번 다시 번역해야 하고(여집합 방향 T-표기 · 역 혼동 T-범위) 진리집합은 완전 추상이다.
    통찰 1개지만 M_total 8 이라 확인체크 출발점 ★2 에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "$P \\cap Q = \\varnothing$ → $P \\subset Q^c$ · $Q \\subset P^c$ → 각 보기를 포함 관계로 번역해 참 판정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄷ, ㅁ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/174-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 보기의 개수와 구성만 조절한다. 제약: 참인 보기가 최소 1개는 남아야 하고, 서로소만으로는 판정되지 않는 명제($p \\longrightarrow q$ 등)를 반드시 섞어야 변별이 생긴다."
    creative: "(1) 주어진 조건을 $P \\cup Q = U$ · $P \\subset Q$ 로 바꾸면 참이 되는 보기 집합이 달라지고 골조는 그대로 ★3 (2) 보기를 벤 다이어그램 영역 표현으로 주면 I-RT d1 추가 ★3~4 (3) '항상 참인 명제의 개수'를 묻는 객관식으로 바꾸면 부분 정답이 사라져 체감 ★3 유지 (4) 조건을 두 개($P \\cap Q = \\varnothing$ 와 $P \\cup Q = U$)로 주면 $Q = P^c$ 가 확정돼 오히려 ★2 로 내려간다."
```

```yaml
- id: GN-CM2-174-418
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 조건 $p$, $q$, $r$ 의 진리집합 $P$, $Q$, $R$ 에 대하여 $P \cup Q = P$, $Q \cap R = R$ 일 때, 다섯 명제 중 항상 참이라고 할 수 없는 것을 고르기.
  category: "집합 연산 등식을 포함 관계로 변환 → 포함 사슬로 통합 → 각 명제 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$P \\cup Q = P$ 를 $Q \\subset P$ 로, $Q \\cap R = R$ 을 $R \\subset Q$ 로 동치 변환"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "독립된 두 포함 관계를 $R \\subset Q \\subset P$ 한 사슬로 통합해 다섯 명제를 사슬 방향 하나로 판정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "진리집합의 포함 사슬과 명제의 참, 거짓"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 등식을 포함 관계로 바꿔 $R \subset Q \subset P$ 를 세우면 사슬 방향(좁은 쪽 → 넓은 쪽)으로 가는 명제는 모두 참이고, 역방향인 $P \subset R$ 를 요구하는 ⑤ 만 보장되지 않는다.
    대우 형태(②③⑤)는 원명제로 되돌려야 방향이 보이므로 여집합 뒤집기가 한 겹 더 붙는다.
    통찰 2개(I-EQV · I-CON)라 확인체크 출발점 ★2 에서 +1 해 ★3. [분류 이슈] 포함 사슬 통합을 I-CON 으로 셀지(단순 추이 관계로 보아 통찰 1개로 줄일지)는 카탈로그 설계 때 통일 필요.
  tier: star_3
  mechanism_primary: "$P \\cup Q = P \\Rightarrow Q \\subset P$ · $Q \\cap R = R \\Rightarrow R \\subset Q$ → $R \\subset Q \\subset P$ → 사슬 역방향을 요구하는 명제 찾기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/174-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 조건 등식의 형태($P - Q = \\varnothing$, $P^c \\cup Q = U$ 등)와 선택지 다섯의 방향 조합을 바꾼다. 제약: 두 조건이 하나의 사슬을 만들어야 하고(공유 집합 $Q$ 필요), 정답 하나만 사슬 역방향이 되도록 배치한다."
    creative: "(1) '항상 참인 것'으로 뒤집으면 판정 부담이 네 번으로 늘어 ★3 유지 (2) 사슬을 $R \\subset Q \\subset P$ 대신 $Q \\subset P$, $Q \\cap R = \\varnothing$ 처럼 방향이 엇갈리게 주면 케이스가 갈려 ★4 · I-MI d1 (3) 벤 다이어그램을 그려 세 집합의 배치를 묻기(★3 · I-RT d1) (4) 조건을 명제 형태($q \\longrightarrow p$, $r \\longrightarrow q$)로 주고 집합으로 옮기게 하면 방향이 한 번 더 뒤집혀 ★3."
```

```yaml
- id: GN-CM2-175-e6
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 범위로 주어진 두 조건에 대하여 명제가 참이 되도록 하는 실수 $a$ 의 값의 범위 구하기. ⑴ $p:\ -2<x<a+1$, $q:\ -2a\le x\le 4$ 에서 $p \longrightarrow q$. ⑵ $p:\ x<-3$ 또는 $x\ge 3$, $q:\ a-1<x\le a+6$ 에서 $\sim p \longrightarrow q$.
  category: "명제가 참 ⇔ 구간의 포함 → 양 끝 비교 부등식 연립 → $a$ 의 범위"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 에서 '$x<-3$ 또는 $x\\ge 3$' 의 부정을 하나의 구간 $-3\\le x<3$ 으로 바꿔야 포함 비교가 가능해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "명제가 참이 되도록 하는 상수의 값의 범위(구간 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항 모두 $P \subset Q$ 를 수직선에 옮겨 왼쪽 끝·오른쪽 끝을 각각 비교하는 부등식 두 개를 세우고 교집합을 취한다.
    ⑴ 은 왼쪽 끝에 $-2a$ 가 있어 부등식을 세울 때 부호가 뒤집히는 지점(T-부호)이 있고, ⑵ 는 $\sim p$ 를 먼저 한 구간으로 모으는 동치 변환과 열린 끝·닫힌 끝의 등호 처리(T-경계)가 핵심이다.
    통찰 1개지만 M_total 8 이라 필수 예제 출발점 ★2 에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "가정의 진리집합을 한 구간으로 정리 → $P \\subset Q$ 를 양 끝 부등식 두 개로 → 연립해 $a$ 의 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1\le a\le 3$ ⑵ $-3\le a<-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/175-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 상수(-2, 4, -3, 3, 6)와 $a$ 의 계수(-2a → 3a 등). 제약: 답이 빈 범위가 되지 않도록 두 부등식이 겹쳐야 하고, 가정 구간이 공집합이 되는 $a$ 대(본문 풀이가 다루지 않는 경우)가 답 범위에 끼어들지 않게 상수를 잡는다. 등호 유무는 답의 경계가 열린지 닫힌지를 그대로 바꾸므로 한 벌로 고정해 출제한다."
    creative: "(1) 명제를 $q \\longrightarrow p$ 로 뒤집으면 포함 방향이 반대가 되어 같은 골조 ★3 (2) 결론 쪽에만 $a$ 를 두면 부등식이 한쪽으로 몰려 ★2 (3) 가정과 결론 양쪽에 모두 $a$ 를 넣으면 구간 자체가 움직여 케이스 분기가 생기고 ★4 · I-MI d1 (4) '항상 참이 되도록' 대신 '거짓이 되도록 하는 $a$' 로 바꾸면 여집합 범위를 취하는 단계가 붙어 ★4 · I-BW d1."
```

```yaml
- id: GN-CM2-175-419
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    명제 '$-1<x<4$ 이면 $x\le k-2$ 이다.' 가 참이 되도록 하는 실수 $k$ 의 값의 범위 구하기.
  category: "구간 포함 → 오른쪽 끝 비교 한 개 → $k$ 의 범위"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제가 참이 되도록 하는 상수의 값의 범위(구간 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(-1,\,4) \subset (-\infty,\,k-2]$ 이려면 오른쪽 끝만 비교하면 되고 왼쪽은 자동으로 성립한다.
    가정의 오른쪽 끝이 열려 있어 $k-2$ 가 4 보다 작으면 바로 반례가 생긴다는 경계 처리(T-경계)가 유일한 걸림돌이다.
    통찰 없고 단계도 짧지만 M_total 6 이라 −1 조건에 걸리지 않아 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$P \\subset Q$ → 오른쪽 끝 비교 $k-2 \\ge 4$ → $k \\ge 6$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\ge 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/175-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가정 구간의 두 끝(-1, 4)과 결론의 상수항(k-2 → 2k, k+3). 제약: 결론이 한쪽만 제한하는 꼴이어야 비교가 한 번으로 끝나고, $k$ 의 계수가 음수가 되면 부등호가 뒤집히므로(그러면 난이도가 올라감) 의도한 ★에 맞춰 부호를 고른다."
    creative: "(1) 결론을 $x \\ge k-2$ 로 바꾸면 왼쪽 끝 비교로 대칭 이동 ★2 (2) 결론을 양쪽이 막힌 구간으로 두면 부등식 두 개 ★2~3 (3) 가정의 끝을 닫힌 구간으로 바꾸면 경계 등호 판단이 한 번 더 필요해 체감이 올라감(★2 유지) (4) 'k 의 최솟값'을 묻기(★2)."
```

```yaml
- id: GN-CM2-175-420
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 조건 $p:\ 2a-1\le x\le a+2$, $q:\ 0\le x\le 5$ 에 대하여 명제 $p \longrightarrow q$ 가 참이 되도록 하는 정수 $a$ 의 개수 구하기.
  category: "구간 포함 → 양 끝 부등식 연립 → 정수 개수 세기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제가 참이 되도록 하는 정수 상수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $P \subset Q$ 에서 $2a-1 \ge 0$ 과 $a+2 \le 5$ 를 얻고, 가정 구간이 뒤집히지 않도록 $2a-1 \le a+2$ 도 함께 본 뒤 정수만 센다.
    실수 범위를 구한 뒤 정수로 좁히는 마지막 필터가 있지만 새 도구가 아니라 경계·범위 처리(T-경계 · T-범위)라 통찰로 세지 않았다.
    M_total 8 이나 통찰 0 이라 +1 규칙에 해당하지 않아 확인체크 출발점 ★2 유지. [분류 이슈] 정수 개수 세기 부담으로 ★3 후보.
  tier: star_2
  mechanism_primary: "$P \\subset Q$ → $2a-1 \\ge 0$ · $a+2 \\le 5$ (와 구간이 비지 않을 조건) → 정수 $a$ 세기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/175-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가정 구간의 $a$ 계수(2a-1, a+2)와 결론 구간의 두 끝(0, 5). 제약: 정수 해의 개수가 0 이 되지 않게 범위 폭을 잡고, 분수 경계($a \\ge 1/2$)가 나오도록 두면 '정수만' 이라는 조건이 실제로 작동한다."
    creative: "(1) 정수 대신 '자연수 $a$ 의 개수' · '$a$ 의 최댓값'을 묻기(★2 유지) (2) 가정 구간이 공집합이어도 명제가 참임을 함께 따지게 하면 케이스가 갈려 ★4 · I-MI d1 + I-VF d1 (3) 결론 쪽에 $a$ 를 옮기면 포함 방향이 반대가 되어 ★3 (4) 두 구간이 모두 $a$ 를 포함하도록 바꾸면 상대 위치 분기가 생겨 ★4."
```

```yaml
- id: GN-CM2-175-421
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 조건 $p:\ |x-1|\ge a$, $q:\ -6<x<6$ 에 대하여 명제 $\sim p \longrightarrow q$ 가 참이 되도록 하는 양수 $a$ 의 최댓값 구하기.
  category: "부정 조건을 절댓값 부등식으로 → 구간으로 → 포함 비교 → 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$|x-1| \\ge a$ 의 부정을 $|x-1| < a$ 로 잡고 다시 구간 $1-a < x < 1+a$ 로 두 번 옮겨야 포함 비교가 가능해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정 조건의 구간 포함으로 상수의 최댓값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\sim p$ 를 $1-a < x < 1+a$ 로 바꾸면 중심이 1 인 구간이 $(-6,\,6)$ 안에 들어가야 하므로 $1-a \ge -6$ 과 $1+a \le 6$ 두 부등식이 나오고 더 빡빡한 쪽이 답을 정한다.
    부정·절댓값·구간의 세 표현을 잇는 동치 변환 한 단계를 통찰로 셌고, 양수 조건과 등호 처리는 $M_t$ 로 넘겼다.
    통찰 1개 + M_total 8 이라 확인체크 출발점 ★2 에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "$\\sim p:\\ |x-1| < a$ → $1-a < x < 1+a$ → $(-6,\\,6)$ 에 포함 → $a \\le 5$ → 최댓값 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/175-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 중심(x-1 → x+2), 결론 구간의 두 끝(-6, 6). 제약: 중심이 결론 구간의 한가운데가 아니어야 두 부등식 중 한쪽만 답을 정해 '더 빡빡한 쪽'을 고르는 의미가 살고, 양수 $a$ 의 답이 존재하도록 중심을 결론 구간 안에 둔다."
    creative: "(1) $a$ 의 최댓값 대신 '가능한 정수 $a$ 의 개수'를 묻기(★3 유지) (2) 명제를 $q \\longrightarrow \\sim p$ 로 뒤집으면 포함 방향이 반대가 되어 $a$ 의 최솟값 문제로 ★3 (3) 결론도 절댓값 꼴 $|x-c| < d$ 로 주면 두 절댓값 구간의 포함이라 표현 전환이 한 겹 더 ★4 · I-RT d1 (4) $a$ 가 양수라는 단서를 빼면 $a \\le 0$ 일 때 $\\sim p$ 가 공집합이 되는 경우를 따져야 해 ★4 · I-VF d1."
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 1 · ★2 7 · ★3 4 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 6 · premium 0 (통찰은 모두 depth 1 · 라벨은 I-EQV 6회 · I-CON 1회 · SC/VF/SYM/XU 없음 → ★4 이상 없음)
- 구역: 「필수·발전 예제」 12(필수 예제 4 · 확인체크 8) · 다른 구역은 이 단원 범위에 없음
- type_hint 상위: 「명제 $p \longrightarrow q$ 의 참, 거짓 판별(진리집합 포함·반례)」 2 · 「명제가 참이 되도록 하는 상수의 값의 범위(구간 포함)」 2 · 「명제의 참, 거짓과 진리집합의 포함 관계」 2 · 「거짓인 명제의 반례(그림·차집합)」 2 · 나머지 단발 4(서로소 보기 판정 · 포함 사슬 · 정수 개수 · 부정 조건 최댓값)
- 대상층: 하위권 1 · 중하위권 5 · 중위권 2 · 중상위권 4
- 그림: 1문(`crop:fig-173-e4.png`) · 선택지 문항 3(174-e5 · 174-416 · 174-418) · 보기형 1(174-417)
- 세 갈래 배열: 참·거짓 판별과 반례 4(173-e3 · 173-e4 · 173-414 · 173-415) · 추상 진리집합의 포함 관계 4(174-e5 · 174-416 · 174-417 · 174-418) · 범위 조건에서 상수 구하기 4(175-e6 · 175-419 · 175-420 · 175-421)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-173-e3 | 통찰 0 · M_total 5 로 −1 후보이나 무리수 반례 구성의 비자명함을 보아 필수 예제 출발점 ★2 유지 | ★1 / ★2 |
| GN-CM2-173-e4 | 통찰 0 · M_total 5 로 −1 후보이나 $\sim p$ 의 여집합 방향 뒤집기가 실제 오답 원인이라 ★2 유지 | ★1 / ★2 |
| GN-CM2-174-418 | 포함 사슬 통합을 I-CON 으로 세어 통찰 2개(+1) 로 판정. 단순 추이 관계로 보면 통찰 1개 · ★2 | ★2 / ★3 |
| GN-CM2-175-420 | 절차형인데 M_total 8. 통찰이 없어 +1 규칙에 해당하지 않아 ★2 로 두었으나 정수 개수 세기 부담은 ★3 급 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 사실상 **한 유형의 네 겹 변주**다. 「명제가 참 ⇔ $P \subset Q$」 하나를 ⑴ 구체 조건(참·거짓 판별·반례) ⑵ 추상 진리집합(여집합·서로소·포함 사슬) ⑶ 범위 조건(상수 구하기) 으로 나눈 것이므로, 카탈로그에서는 **이 세 갈래를 각각 독립 유형으로 세우는 것이 맞다**. 세 갈래는 학생이 실제로 막히는 지점(반례 구성 / 여집합 방향 / 구간 경계)이 서로 다르다.
- 통합해도 될 것: 173-e3 과 173-414(참·거짓 판별) · 174-e5 와 174-416(포함 관계 선택지) · 175-e6 와 175-419(구간 포함으로 상수 범위)는 각각 예제와 그 확인체크 쌍이라 한 유형으로 묶어도 된다.
- 따로 세워야 할 것: 174-417(서로소에서 보기 전체 판정) · 174-418(포함 사슬) · 175-420(정수 개수) · 175-421(부정 + 절댓값)은 앞 유형의 유제가 아니라 각각 추가 도구를 요구하므로 별도 유형 후보다.
- 이 단원 전체의 통찰 라벨이 I-EQV 에 몰려 있다(6/7). 카탈로그를 만들 때 「조건의 동치 변환」이 CM2 명제 단원의 **학습 자산화 상위 유형**이 될 가능성이 높으므로, 나중에 §2.9 감쇠 대상 유형 지정 시 이 단원을 함께 검토해야 한다.
