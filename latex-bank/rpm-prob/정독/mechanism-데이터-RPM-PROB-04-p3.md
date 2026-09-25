---
name: mechanism-데이터-RPM-PROB-04-p3
description: RPM 확률과 통계 04 확률분포 (1)(3/3 · 유형 11 이항분포의 평균·분산 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 04 확률분포 (1)
  unit_code: PROB-04
  part: "3/3"
  extract_range: "63~67쪽 · 0372~0406"
  total_problems: 35
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 04 확률분포 (1) (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 04 확률분포 (1)의 끝 범위(63~67쪽 · 0372~0406 · 35문 · 6구역)를 다룬다. 유형 11 이항분포에서의 평균·분산·표준편차(이항분포가 주어지지 않은 경우) 5문, 유형 12 확률변수 $aX+b$의 평균·분산·표준편차(이항분포를 따르는 경우) 4문, 유형 UP 13 기댓값 3문, 중단원 종합인 시험에 꼭 나오는 문제 16문, 서술형 주관식 4문, 실력 Up 3문으로 구성된다. 벤더 신호는 구역과 문항별 난이도(중하·중·상중), 태그(대표문제 3 · 중요 2 · 서술형 1 · 평가원 기출 2 · 수능 기출 1)로 나타난다. 종합·서술형·실력 Up 구역에는 난이도 표시가 없어 구역 자체가 출발점이다. 그림(표 크롭) 문항은 6문(0385 · 0388 · 0392 · 0399 · 0400 · 0404)이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 유형 구역(대표문제·난이도 없음·중하·중) ★2 · 상중 ★3 · 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 주관식 ★3 · 실력 Up ★4 이고, 통찰 0 이면서 M_total ≤ 4 인 실질 한 줄 풀이만 −1 했으며, +1 은 통찰 2개 이상 또는 depth 3 일 때만 적용했다. (2) 이 단원의 표준 도구(확률의 합 = 1 · E(X)=Σxp · V(X)=E(X²)−{E(X)}² · E(aX+b)=aE(X)+b · V(aX+b)=a²V(X) · σ(aX+b)=|a|σ(X) · B(n,p)의 np·npq·√(npq) · 독립시행의 확률 · 조합으로 세는 초기하 확률)는 통찰로 세지 않고 `mechanism_primary` 에만 적었고, 조건을 쓸 수 있는 형태로 옮겨야 풀이가 진행되는 손질(사건을 확률변수의 정수값으로 환원 · 상황을 이항확률변수의 일차식으로 세우기 · σ=E 같은 관계식을 모멘트 방정식으로 바꾸기 · 대칭분포에서 평균을 즉시 읽기 · 시행 횟수의 상한 간파와 경우 분기)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 미지수 $n$·$p$·$a$ 를 문자로 다루는 문항은 Mₐ 를 2 로 두었다.

## 문항 데이터

### 유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우

```yaml
- id: RPM-PROB-0372
  page: 63
  vendor_label: "유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    동전 3개를 던지는 시행 6번에서 앞면 2개·뒷면 1개가 나오는 횟수 X의 평균.
  category: "1회 시행의 성공 확률 → B(n,p) → np"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포가 주어지지 않은 경우의 평균(성공 확률을 먼저 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    동전 3개의 시행 1회에서 「앞 2·뒤 1」 확률을 조합으로 먼저 구해 p=3/8 을 얻고,
    그 시행을 6번 반복하므로 X~B(6,3/8) → np 한 줄. 확률을 두 번 겹쳐 쓰는 구조지만
    모두 표준 도구다. 유형 구역 대표문제·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "시행 1회의 성공 확률 p=3C2(1/2)^3 → X~B(6,p) → E(X)=6p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(3→4)·반복 횟수(6→8·12)·요구 조합(앞 3·뒤 1)을 바꿀 수 있음. 제약: 1회 성공 확률이 기약분수로 떨어지고 np 가 분모 작은 유리수가 되도록 반복 횟수를 성공 확률의 분모 배수로 잡는다."
    creative: "(1) 평균 대신 분산·표준편차를 묻기(★2 유지 · npq 가 제곱근 밖으로 나오게 p 선택) (2) 주사위 3개에서 특정 눈 2개로 바꿔 p 계산을 한 단계 늘리기(★2) (3) 평균을 주고 반복 횟수를 역산시키면 미지수 도입으로 Mₐ 상승 ★3."
```

```yaml
- id: RPM-PROB-0373
  page: 63
  vendor_label: "유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    완주율 60%인 마라톤 참가자 50명 중 완주자 수 X의 표준편차. 5지선다.
  category: "백분율 → B(50,0.6) → √(npq)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 표준편차 √(npq)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    백분율을 확률로 읽어 n=50, p=3/5 를 넣으면 √12 한 줄.
    유형 구역 중하 ★2 출발이나 통찰 0·M_total 4(실질 한 줄) → ★1.
  tier: star_1
  mechanism_primary: "X~B(50,3/5) → σ=√(npq)=√12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원수(50→100·75)와 완주율(60%→40%·80%)을 바꿀 수 있음. 제약: npq 가 완전제곱수이거나 √의 정리가 깔끔한 값이 되도록 n 을 분모의 제곱 배수로 잡는다."
    creative: "(1) 분산을 묻기(★1) (2) 완주하지 못하는 사람 수의 표준편차와 같음을 함께 묻기(p↔q 대칭 · ★2) (3) 표준편차를 주고 인원수를 역산시키면 ★2."
```

```yaml
- id: RPM-PROB-0374
  page: 63
  vendor_label: "유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평평한 면이 나올 확률 3/5인 윷가락 4개를 25번 던질 때 걸(평평 3·둥근 1)이 나오는 횟수 X의 평균. 5지선다.
  category: "독립시행으로 1회 성공 확률 → B(25,p) → np"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포가 주어지지 않은 경우의 평균(성공 확률을 먼저 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    윷가락 4개에서 걸이 나올 확률을 4C3(3/5)³(2/5) 로 구한 뒤 25배. 0372 와 같은 골조이고
    성공 확률의 분모가 5⁴ 이라 Mₖ 만 올라간다. 유형 중 ★2 출발·통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "p=4C3(3/5)^3(2/5)=216/625 → X~B(25,p) → E(X)=25p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평평한 면의 확률(3/5→1/2·2/3)·윷가락 수·반복 횟수(25)를 바꿀 수 있음. 제약: 반복 횟수를 성공 확률 분모의 배수로 잡아야 평균이 정리된 유리수가 되고, 선택지가 서로 구별되도록 근접값을 피한다."
    creative: "(1) 걸 대신 개(평평 2·둥근 2)로 바꿔 조합계수를 6으로(★2) (2) 분산을 묻기(Mₖ 상승 ★2~3) (3) 평균이 주어진 상태에서 윷가락의 평평한 면 확률을 역산시키면 미지수 도입 ★3."
```

```yaml
- id: RPM-PROB-0375
  page: 63
  vendor_label: "유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    장난감 불량률 1/10, 상자 불량률 1/9일 때 100개 상품 중 둘 다 정상인 상품 수 X의 분산.
  category: "여사건 두 번 → 독립 곱 → B(100,p) → npq"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립인 두 사건의 곱으로 성공 확률을 만든 이항분포의 분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 값이 불량률이라 정상 확률 9/10·8/9 로 뒤집고 곱해 p=4/5 를 얻는 것이 전부.
    분모 9가 약분되어 계산은 가볍다. 유형 중 ★2·통찰 0·함정 1(불량↔정상 반전) → ★2.
  tier: star_2
  mechanism_primary: "정상 확률 9/10 × 8/9 = 4/5 → X~B(100,4/5) → V=npq=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$16$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 불량률(1/10·1/9)과 상품 수(100)를 바꿀 수 있음. 제약: 두 정상 확률의 곱이 약분되어 간단한 p 가 되도록 분모·분자를 맞물리게 잡고, npq 가 정수가 되도록 상품 수를 p 분모의 제곱 배수로 둔다."
    creative: "(1) 불량품 개수의 분산을 묻기(p↔q · ★2) (2) 평균과 분산을 함께 주고 상품 수를 역산(★3) (3) 두 공정이 독립이 아니라 조건부로 주어지면 단원 결합 I-XU ★3~4."
```

```yaml
- id: RPM-PROB-0376
  page: 63
  vendor_label: "유형 11 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어지지 않은 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    흰 공 4개·검은 공 m개에서 복원추출 n번 중 흰 공이 나온 횟수 X의 평균이 40, 분산이 24일 때 n−m.
  category: "np·npq 연립 → q → p → m, n"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 평균·분산에서 n, p 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    npq/np = q 로 q=3/5 를 먼저 뽑고 p=2/5 → 4/(4+m)=2/5 로 m, 이어 np=40 으로 n 을 얻는다.
    미지수가 n·m 둘이라 Mₐ 가 올라가지만 순서는 유형의 표준 절차다.
    유형 상중 ★3 출발·통찰 0·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "V/E=q → p=1−q → 4/(4+m)=p 로 m → np=40 으로 n → n−m"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$94$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·분산 쌍(40, 24)과 흰 공 개수(4)를 바꿀 수 있음. 제약: q=V/E 가 0과 1 사이 유리수여야 하고, 4/(4+m)=p 가 자연수 m 을, np=E 가 자연수 n 을 주도록 p 의 분자가 흰 공 개수를 나누어야 한다."
    creative: "(1) n+m 이나 m 만 묻기(★3 유지) (2) 분산 대신 표준편차를 주면 제곱 단계가 하나 늘어 ★3 (3) 검은 공을 꺼낼 확률로 조건을 바꿔 p↔q 를 헷갈리게 하면 함정 1개 추가 ★3 (4) 평균·분산 대신 P(X=0) 같은 확률값을 주면 지수 방정식으로 바뀌어 ★4."
```

### 유형 12 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 이항분포를 따르는 경우

```yaml
- id: RPM-PROB-0377
  page: 64
  vendor_label: "유형 12 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 이항분포를 따르는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X가 B(n, 1/3)을 따르고 V(2X+3)=32일 때 E(2X+3).
  category: "V(aX+b)=a²V(X) → n → E(aX+b)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는 aX+b 의 평균·분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4V(X)=32 → V(X)=8=2n/9 로 n=36 을 역산한 뒤 다시 E(2X+3)=2np+3 에 넣는 두 단계.
    변환 공식을 역방향·순방향으로 한 번씩 쓰는 유형의 표준 골조다.
    유형 대표문제·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "V(2X+3)=4V(X)=4·n·(1/3)(2/3) → n → E(2X+3)=2·n/3+3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$27$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p(1/3)·계수(2, 3)·분산값(32)을 바꿀 수 있음. 제약: V(X)=npq 가 a² 로 나누어떨어져 n 이 자연수가 되어야 하고, np 도 정수가 되도록 n 을 p 분모의 배수로 잡는다."
    creative: "(1) 분산을 주고 σ(aX+b) 를 묻기(절댓값 주의 ★2) (2) E(aX+b) 를 주고 V 를 묻는 역방향(★2) (3) a 를 미지수로 두고 조건 두 개로 a, n 을 동시에 결정하면 연립 ★3."
```

```yaml
- id: RPM-PROB-0378
  page: 64
  vendor_label: "유형 12 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 이항분포를 따르는 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    손님의 30%가 식빵을 살 때 손님 500명 중 식빵 구매자 수 X에 대하여 V(X/3−1).
  category: "B(500,0.3) → npq → a²V(X)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는 aX+b 의 분산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    V(X)=500·0.3·0.7=105 를 구해 1/9 을 곱하면 끝. 상수항 −1 은 분산에 영향이 없다는 확인뿐.
    유형 중하 ★2 출발이나 통찰 0·M_total 4(한 줄) → ★1.
  tier: star_1
  mechanism_primary: "X~B(500,3/10) → V(X)=npq=105 → V(X/3−1)=V(X)/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{35}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "손님 수(500)·비율(30%)·계수(1/3, −1)를 바꿀 수 있음. 제약: npq 가 a² 의 배수여야 답이 간단한 유리수가 되고, 비율은 분모가 10 이하인 값으로 둔다."
    creative: "(1) 평균을 함께 묻기(★1) (2) σ(X/3−1) 로 바꿔 제곱근 처리를 넣기(★2) (3) 식빵을 사지 않는 손님 수로 정의를 바꿔 p↔q 반전을 넣으면 함정 1개 ★2."
```

```yaml
- id: RPM-PROB-0379
  page: 64
  vendor_label: "유형 12 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 이항분포를 따르는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    동전 5번에서 앞면 수 X에 대하여 aX+b의 평균이 2, 분산이 20(a>0)일 때 ab. 5지선다.
  category: "E·V 공식 → a²V(X)=20 으로 a → b → ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 의 평균·분산에서 상수 a, b 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X~B(5,1/2) 에서 E=5/2, V=5/4 를 먼저 구하고 a²·5/4=20 으로 a=4(a>0 으로 −4 배제),
    a·5/2+b=2 로 b 를 얻는 연립. 조건 a>0 이 명시돼 있어 기각 판단은 가볍다.
    유형 중 ★2 출발·통찰 0·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "X~B(5,1/2)의 E=5/2·V=5/4 → a²V=20 으로 a → aE+b=2 로 b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던진 횟수(5)·평균값(2)·분산값(20)을 바꿀 수 있음. 제약: 분산 조건이 a² 을 완전제곱수로 만들어야 a 가 유리수로 떨어지고, 그때 b 도 정수가 되도록 평균값을 맞춘다."
    creative: "(1) a>0 조건을 빼고 가능한 ab 를 모두 구하게 하면 분기·기각이 생겨 I-MI ★3 (2) a+b 를 묻기(★2) (3) 동전을 주사위 특정 눈으로 바꿔 p=1/6 이면 계산만 무거워짐(질 저하 주의 ★2)."
```

```yaml
- id: RPM-PROB-0380
  page: 64
  vendor_label: "유형 12 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 이항분포를 따르는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주사위 30번에서 3의 배수면 +3, 아니면 −1 이동하는 점 P의 좌표 X의 평균.
  category: "성공 횟수 Y 도입 → X=4Y−30 → E"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직선 위 이동이라는 상황을 「3의 배수가 나온 횟수 Y」의 일차식 X=3Y−(30−Y)=4Y−30 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점의 좌표를 이항확률변수의 일차식으로 나타내 평균 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표를 직접 확률분포로 만들면 막히고, 성공 횟수 Y~B(30,1/3) 을 세운 뒤 X=4Y−30 으로 옮겨야
    E(X)=4·10−30 한 줄로 끝난다. 표현 전환 1개(RT d1)가 골조의 전부다.
    유형 상중 ★3 출발·통찰 1(d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "Y=3의 배수가 나온 횟수~B(30,1/3) → X=4Y−30 → E(X)=4E(Y)−30"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(+3, −1)·던진 횟수(30)·성공 조건(3의 배수 → 소수·짝수)을 바꿀 수 있음. 제약: X=(a+b)Y−bn 의 계수가 정수여야 하고, 던진 횟수를 p 분모의 배수로 잡아 E(Y) 가 정수가 되게 한다."
    creative: "(1) V(X)·σ(X) 를 묻기(a² 배 · ★3) (2) 좌표가 양수일 확률을 묻는 부등식 조건으로 바꾸면 Y 범위 환원이 추가돼 ★4 (3) 이동량을 미지수로 두고 평균이 0이 되는 조건을 역산시키면 I-BW ★4."
```

### 유형 UP 13 기댓값

```yaml
- id: RPM-PROB-0381
  page: 64
  vendor_label: "유형 UP 13 기댓값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    50원 1개·100원 2개를 동시에 던져 앞면이 나온 동전을 받을 때 받는 금액의 기댓값. 5지선다.
  category: "동전별 기댓값 합(기댓값의 선형성)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "금액의 기댓값(각 항목의 기댓값 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    동전마다 「금액 × 1/2」을 더하면 25+50+50 로 끝나고, 금액별 확률분포표를 만들어도 같은 값이다.
    유형 UP 구역 ★3 출발이나 통찰 0·M_total 4(실질 한 줄) → ★2.
  tier: star_2
  mechanism_primary: "각 동전의 기댓값 = 금액 × 1/2 → 합 = 25+100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 금액(50·100)과 개수를 바꿀 수 있음. 제약: 앞면 확률이 1/2 이므로 총액의 절반이 답이 되어 선택지가 서로 충분히 벌어지도록 금액 조합을 잡는다."
    creative: "(1) 받는 금액의 분산을 묻기(분포표 필요 · ★3) (2) 동전마다 앞면 확률이 다른 편향 동전으로 바꾸기(★3) (3) 참가비를 두고 공정한 게임이 되는 금액을 묻기(기댓값 = 참가비 동치 · ★3)."
```

```yaml
- id: RPM-PROB-0382
  page: 64
  vendor_label: "유형 UP 13 기댓값"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    빨간 구슬 3개·노란 구슬 a개에서 1개를 꺼내 빨강이면 5000원을 받고 노랑이면 1500원을 낼 때 기댓값이 450원이면 a.
  category: "기댓값 식 → a의 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기댓값이 주어진 게임에서 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    5000·3/(3+a) − 1500·a/(3+a) = 450 을 세우고 분모를 없애면 a 에 대한 일차방정식 하나.
    지불을 음수 금액으로 읽는 부호 처리가 유일한 함정이다.
    유형 UP ★3 출발·통찰 0·M_total 7 → ★3 유지. [분류 이슈] 구역(★3)과 난이도 표시(중 → ★2) 신호가 엇갈림.
  tier: star_3
  mechanism_primary: "E = 5000·3/(3+a) + (−1500)·a/(3+a) = 450 → 일차방정식 → a"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$7$"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "받는 금액(5000)·내는 금액(1500)·기댓값(450)·빨간 구슬 수(3)를 바꿀 수 있음. 제약: 정리된 일차방정식의 해가 자연수 a 가 되도록 (받는 금액−기댓값)·구슬 수가 (기댓값+내는 금액)으로 나누어떨어지게 잡는다."
    creative: "(1) 기댓값이 0(공정한 게임)이 되는 a 를 묻기(★3) (2) 구슬을 2개 꺼내는 시행으로 바꾸면 조합 확률이 들어가 ★4 (3) 기댓값이 양수가 되는 a 의 범위를 묻는 부등식으로 바꾸면 I-EQV ★4."
```

```yaml
- id: RPM-PROB-0383
  page: 64
  vendor_label: "유형 UP 13 기댓값"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    1~12에서 서로 다른 3개를 적는 응모권에서 3개·2개·1개를 맞히면 각각 11만·2만 2천·5천 5백 원을 줄 때, 손해를 보지 않을 응모권의 최소 가격.
  category: "맞힌 개수의 확률(조합) → 당첨금 기댓값 → 가격 ≥ 기댓값"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「가게가 손해를 보지 않는다」를 「응모권 가격 ≥ 당첨금의 기댓값」으로 옮기고 최소 가격 = 기댓값으로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "당첨금의 기댓값과 손해를 보지 않는 최소 가격"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    맞힌 개수 X 의 확률을 12C3=220 을 분모로 3C3, 3C2·9C1, 3C1·9C2 로 세운 뒤 당첨금 기댓값을 계산한다.
    마지막에 손익 조건을 기댓값 이상으로 옮기는 동치 변환이 핵심이고 그 앞은 표준 조합 확률이다.
    유형 UP 상중 ★3 출발·통찰 1(d2) → ★3. [분류 이슈] M_total 8·기댓값 계산 부담으로 ★4 후보이기도 함.
  tier: star_3
  mechanism_primary: "맞힌 개수 X 의 확률을 12C3 분모로 계산 → 당첨금 기댓값 → 최소 가격 = 기댓값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$5900$원"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수의 범위(1~12)·고르는 개수(3)·당첨금 3종을 바꿀 수 있음. 제약: 당첨금이 전체 경우의 수 12C3=220 으로 나누어떨어져 기댓값이 정수 원이 되도록 금액을 220의 배수 조합으로 잡는다."
    creative: "(1) 가격을 주고 가게의 1장당 기대 이익을 묻기(★3) (2) 1개 맞힘 당첨금을 미지수로 두고 최소 가격을 고정해 역산(I-BW ★4) (3) 맞힌 개수의 분산까지 묻기(Mₖ 상승 ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0384
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    P(X=x)=k/(|x|+1) (x=−2,−1,0,1,2)일 때 상수 k.
  category: "확률의 총합 = 1 → k"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수의 상수 결정(총합 = 1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 에 다섯 값을 넣어 k(1/3+1/2+1+1/2+1/3)=1 로 정리하면 끝이고, 절댓값 때문에 좌우가 같은 값이 되는 것만 보면 된다.
    종합 구역 ★2 출발·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "Σ k/(|x|+1) = 1 → k·(8/3)=1 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역(x=−2~2)과 분모 꼴(|x|+1 → |x|+2 · x²+1)을 바꿀 수 있음. 제약: 분수의 합이 기약분수로 떨어져 k 가 간단해야 하고 모든 확률이 0 이상이어야 한다."
    creative: "(1) k 를 구한 뒤 P(|X|≤1) 을 이어 묻기(★2) (2) E(X) 를 묻기(절댓값 대칭으로 0 · I-SYM d1 ★2) (3) 분자를 kx+c 로 바꿔 음수 확률을 배제하는 범위 조건을 넣으면 ★3."
```

```yaml
- id: RPM-PROB-0385
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    X가 −5, 0, 5 값을 확률 a, a/2, a²으로 가질 때 P(X²=25).
  category: "총합 = 1 이차방정식 → a → 사건 환원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사건 X²=25 를 X=−5 또는 X=5 로 바꿔 표의 두 확률의 합으로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률분포표의 미지수(합 = 1)와 사건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+a/2+a²=1 에서 2a²+3a−2=0 → a=1/2 (확률 조건으로 음근 배제) 뒤,
    X²=25 를 X=±5 로 옮겨 a+a² 를 더한다. 이차방정식이 한 단계 들어가지만 골조는 표준이다.
    종합 구역 ★2 출발·통찰 1(d1) → ★2.
  tier: star_2
  mechanism_primary: "a+a/2+a²=1 → a=1/2 (음근 배제) → P(X²=25)=P(−5)+P(5)=a+a²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: 'crop:fig-0385.png'
  latex: latex-bank/rpm-prob/items/0385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값(−5, 0, 5)과 확률 꼴(a, a/2, a²)을 바꿀 수 있음. 제약: 총합 = 1 이차방정식이 유리수 근을 가져야 하고 양근 하나만 0<a<1 을 만족해야 한다. 표 그림(fig-0385)의 라벨은 고정."
    creative: "(1) P(X≥0) 이나 E(X) 로 묻는 사건을 바꾸기(★2) (2) 세 확률을 a, 2a, a² 로 바꿔 음근 배제를 더 분명히(★2) (3) V(X) 까지 묻기(Mₖ 상승 ★3) (4) X²=25 대신 |X|≥3 같은 부등식 사건으로 바꾸면 환원이 한 겹 늘어 ★3."
```

```yaml
- id: RPM-PROB-0386
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1~6이 적힌 6장에서 2장을 뽑을 때 두 수의 차 X에 대하여 P(X²−6X+8<0). 5지선다.
  category: "이차부등식 → X의 정수값 → 경우의 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식 2<X<4 를 X 가 자연수임을 써서 X=3 하나로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률변수에 대한 부등식 조건을 정수값으로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (X−2)(X−4)<0 → 2<X<4 이고 X 는 두 수의 차라 정수이므로 X=3 뿐이다.
    이후는 차가 3인 쌍 3가지를 6C2=15 로 나누는 셈. 부등식을 정수값으로 좁히는 한 수가 전부다.
    종합 구역 ★2 출발·통찰 1(d1) → ★2.
  tier: star_2
  mechanism_primary: "(X−2)(X−4)<0 → X=3 → 차가 3인 쌍 3가지 / 6C2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수(6)와 이차부등식의 두 근(2, 4)을 바꿀 수 있음. 제약: 부등식의 해 구간 안에 정수가 한둘만 들어가야 하고, 그 값이 두 수의 차로 실제 가능한 범위(1~5)여야 한다."
    creative: "(1) 근 사이 구간을 넓혀 X=2, 3 두 값이 들어가게 하면 경우 합산이 늘어 ★2~3 (2) 차 대신 두 수의 합으로 정의를 바꾸기(분포가 대칭 · ★3) (3) E(X) 를 묻기(분포표 전체 필요 · ★3)."
```

```yaml
- id: RPM-PROB-0387
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1학년 6명·2학년 4명에서 3명을 뽑을 때 2학년 학생 수 X에 대하여 P(X≥2).
  category: "조합으로 세는 확률 → X=2, 3 확률의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "뽑은 인원 구성으로 정의된 확률변수의 P(X≥k)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X≥2 를 X=2 와 X=3 으로 나눠 4C2·6C1 + 4C3 를 10C3 으로 나누면 된다.
    여사건으로 가도 계산량이 비슷해 전략 선택의 여지는 없다.
    종합 구역 ★2 출발·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P(X≥2)=[4C2·6C1 + 4C3]/10C3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학년별 인원(6, 4)과 뽑는 수(3)를 바꿀 수 있음. 제약: 분모 조합이 작아 약분이 되도록 인원을 잡고, X 의 가능한 값 범위가 뽑는 수를 넘지 않게 한다."
    creative: "(1) P(X≤1) 로 물어 여사건을 쓰게 하기(★2) (2) E(X) 를 묻기(분포표 전체 · ★3) (3) 2학년이 적어도 1명 포함되는 조건부확률로 바꾸면 단원 결합 I-XU ★3~4."
```

```yaml
- id: RPM-PROB-0388
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    X가 0, 1, a를 확률 1/10, 1/2, 2/5로 가지고 σ(X)=E(X)(a>1)일 때 E(X²)+E(X).
  category: "σ=E → V=E² → E(X²)=2E(X)² → a"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "σ(X)=E(X) 를 양변 제곱해 V(X)=E(X)², 곧 E(X²)=2E(X)² 이라는 모멘트 방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "σ(X)=E(X) 조건에서 E(X²)=2E(X)² 로 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표준편차와 평균을 그대로 비교하면 근호가 남으므로 제곱해 V=E² 로 바꾸고,
    V=E(X²)−E(X)² 를 써서 E(X²)=2E(X)² 인 a 의 이차방정식을 만든다. a>1 로 근을 고르면 끝.
    종합 구역 ★2~3·평가원 기출·통찰 1(d2)·M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "σ=E → E(X²)=2E(X)² → a 의 이차방정식 → a>1 인 근 → E(X²)+E(X)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: 'crop:fig-0388.png'
  latex: latex-bank/rpm-prob/items/0388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 확률(1/10, 1/2, 2/5)과 앞의 두 값(0, 1)을 바꿀 수 있음. 제약: 확률의 합이 1 이고 a 의 이차방정식이 유리수 근을 가져야 하며, a>1 조건이 근 하나만 남기도록 계수를 잡는다. 표 그림(fig-0388)의 라벨은 고정."
    creative: "(1) 조건을 V(X)=E(X) 로 바꾸면 방정식 차수가 같아 난이도 유지(★3) (2) a 를 주고 확률 하나를 미지수로 돌리기(★3) (3) σ(X)=E(X) 를 만족시키는 a 가 둘 다 유효하도록 조건을 없애면 분기·기각이 생겨 I-VF ★4."
```

```yaml
- id: RPM-PROB-0389
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1, 1, 2, 3이 적힌 4개의 공에서 2개를 꺼낼 때 남은 공에 적힌 수의 합 X의 표준편차.
  category: "남은 합 = 전체 합 − 꺼낸 합 → 분포표 → σ"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「남아 있는 공의 합」을 7 − (꺼낸 두 공의 합)으로 바꿔 꺼낸 쪽 경우만 세도록 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "남은 공의 합으로 정의된 확률변수의 표준편차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 합이 7 이므로 남은 합은 꺼낸 합의 여로 정해지고, 4C2=6 가지에서 같은 숫자 1이 둘이라
    합이 겹치는 경우를 정확히 세야 한다. 이후는 분포표 → E(X²)−E(X)² → 근호 정리.
    종합 구역 ★2~3·통찰 1(d1)·M_total 8(중복 숫자 처리) → ★3.
  tier: star_3
  mechanism_primary: "X = 7 − (꺼낸 두 수의 합) → 4C2 경우로 분포표 → V=E(X²)−E(X)² → σ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{33}}{6}$'
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공에 적힌 수(1, 1, 2, 3)와 꺼내는 개수(2)를 바꿀 수 있음. 제약: 중복 숫자가 있어야 같은 합이 묶이고, 분산이 근호 안에서 정리되도록 합의 분포를 좌우 대칭에 가깝게 잡는다."
    creative: "(1) 꺼낸 공의 합으로 정의를 바꾸기(같은 분포의 대칭 이동 · ★3) (2) E(X) 만 묻기(★2) (3) 공을 1개씩 두 번 비복원으로 꺼내 순서를 주면 표본공간이 커져 ★3 (4) 중복 숫자를 없애면 경우 세기가 단순해져 ★2."
```

```yaml
- id: RPM-PROB-0390
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    동전 4개의 앞면 수 X에 대하여 Y=X (X가 0 또는 1), Y=2 (X가 2 이상)로 정의할 때 E(Y). 5지선다.
  category: "X의 이항분포 → 2 이상을 한 값으로 묶기 → E(Y)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "X 의 다섯 값 분포를 Y 의 세 값 분포로 접어(X≥2 를 한 칸으로) 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간을 묶어 새로 정의한 확률변수의 기댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X~B(4,1/2) 의 P(0)=1/16, P(1)=4/16 만 따로 쓰고 나머지를 P(X≥2)=11/16 로 묶어 Y 분포를 만든다.
    묶는 착안만 보이면 계산은 세 항 합. 종합 구역 ★2 출발·수능 기출·통찰 1(d1) → ★2.
    [분류 이슈] 수능 기출 태그 대비 실제 부담은 낮아 ★3 신호와 1단 어긋남.
  tier: star_2
  mechanism_primary: "X~B(4,1/2) → Y 분포(0, 1, 2) 에서 P(Y=2)=P(X≥2) → E(Y)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(4)와 묶는 경계(X 가 2 이상)를 바꿀 수 있음. 제약: 묶이지 않는 값이 두세 개만 남아야 손 계산이 가능하고, 분모가 2ⁿ 이라 답이 기약분수로 정리되게 경계를 잡는다."
    creative: "(1) V(Y) 를 묻기(E(Y²) 추가 · ★3) (2) 묶는 값을 2가 아니라 X 의 최댓값으로 두면 절단 위치가 바뀜(★2) (3) 동전을 편향 동전으로 바꾸면 이항계수 계산이 늘어 ★3."
```

```yaml
- id: RPM-PROB-0391
  page: 65
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    E(2X+4)=12, V(2X)=36일 때 E(X²).
  category: "선형 변환 역산 → E, V → E(X²)=V+E²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "E(aX+b)·V(aX) 에서 E(X²) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2E(X)+4=12 로 E(X)=4, 4V(X)=36 으로 V(X)=9 를 얻고 E(X²)=V+E² 에 넣으면 끝.
    분포표도 필요 없다. 종합 구역 ★2 출발이나 통찰 0·M_total 4(한 줄) → ★1.
  tier: star_1
  mechanism_primary: "E(X)=4, V(X)=9 → E(X²)=V(X)+{E(X)}²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$25$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 4)와 두 값(12, 36)을 바꿀 수 있음. 제약: V 가 a² 로 나누어떨어져야 하고 E(X) 도 정수가 되도록 상수항을 맞춘다."
    creative: "(1) σ(3X−1) 을 묻기(절댓값 · ★1~2) (2) E(X²) 를 주고 V(aX+b) 를 역으로 묻기(★2) (3) E(X²)=2E(X)² 같은 관계식으로 바꾸면 방정식이 생겨 ★3."
```

```yaml
- id: RPM-PROB-0392
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    X가 −2, −1, 0을 확률 4/9, 4/9, 1/9로 가질 때 Y=−3X+7의 표준편차.
  category: "분포표 → V(X) → σ(Y)=|a|σ(X)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Y=aX+b 의 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(X)=−4/3, E(X²)=20/9 에서 V(X)=4/9, σ(X)=2/3 을 구하고 |−3|을 곱한다.
    음수 계수의 절댓값 처리가 유일한 함정이다. 종합 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분포표로 E(X)·E(X²) → V(X) → σ(Y)=|−3|σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: 'crop:fig-0392.png'
  latex: latex-bank/rpm-prob/items/0392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값(−2, −1, 0)·확률(4/9, 4/9, 1/9)·계수(−3, 7)를 바꿀 수 있음. 제약: 확률의 합이 1 이고 V(X) 가 완전제곱 유리수여야 σ 가 근호 없이 떨어진다. 표 그림(fig-0392)의 라벨은 고정."
    creative: "(1) V(Y) 만 묻기(★2) (2) 계수 a 를 미지수로 두고 σ(Y)=6 이 되는 a 를 묻기(절댓값 분기 I-MI ★3) (3) 확률 하나를 미지수로 돌려 합 = 1 단계를 추가(★2~3)."
```

```yaml
- id: RPM-PROB-0393
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    P(X=x)=(ax+2)/10 (x=−1, 0, 1, 2)일 때 V(−5X+1).
  category: "총합 = 1 → a → 분포표 → a²V(X)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수의 상수를 구한 뒤 V(aX+b)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 확률의 합 (2a+8)/10 = 1 로 a=1 을 정한 뒤 분포표를 만들어 E(X)=1, E(X²)=2 → V(X)=1,
    마지막에 25를 곱한다. 단계는 셋이지만 모두 표준 도구다.
    종합 구역 ★2·통찰 0·M_total 8 → ★2 유지.
  tier: star_2
  mechanism_primary: "Σ(ax+2)/10 = 1 → a → 분포표 → V(X) → V(−5X+1)=25V(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$25$"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역(x=−1~2)·분모(10)·계수(−5, 1)를 바꿀 수 있음. 제약: 모든 확률이 0 이상이어야 하고 a 가 정수로 떨어지도록 분모를 x 합에 맞춘다."
    creative: "(1) E(−5X+1) 을 함께 묻기(★2) (2) 분자를 ax+b 두 미지수로 두고 조건 하나를 추가하면 연립 ★3 (3) 확률이 음이 되지 않을 a 의 범위를 묻기(I-EQV ★3)."
```

```yaml
- id: RPM-PROB-0394
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    X가 B(10, 1/2)를 따를 때 P(X≤2)=q/p (p, q는 서로소인 자연수)에서 p+q.
  category: "이항확률 세 항 합 → 기약분수 → p+q"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 누적확률 P(X≤k)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (10C0+10C1+10C2)/2¹⁰ = 56/1024 를 약분해 7/128 을 만들고 분모·분자를 더한다.
    서로소 조건 때문에 약분을 끝까지 해야 하는 것이 유일한 함정이다.
    종합 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P(X≤2)=(10C0+10C1+10C2)/2^10 → 기약분수 7/128 → p+q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$135$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시행 횟수(10)·경계(X≤2)·확률(1/2)을 바꿀 수 있음. 제약: p=1/2 이어야 분모가 2ⁿ 으로 통일돼 손 계산이 가능하고, 항 수가 셋을 넘지 않게 경계를 잡는다."
    creative: "(1) P(X≥8) 로 바꿔 대칭성을 쓰게 하기(I-SYM d1 ★3) (2) P(X≤2) 대신 여사건 P(X≥3) 을 묻기(★2) (3) p=1/3 으로 바꾸면 분모가 3¹⁰ 이 되어 계산만 무거워짐(질 저하 주의)."
```

```yaml
- id: RPM-PROB-0395
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    X가 B(n, p)를 따르고 E(X)=6, E(X²)=40일 때 n. 5지선다.
  category: "E(X²)−E(X)² = npq → q → p → n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "E(X)·E(X²) 에서 이항분포의 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    V(X)=40−36=4 를 먼저 만들고 npq/np=q=2/3 → p=1/3 → n=18 로 간다.
    0376 과 같은 역산 골조이고 E(X²) 를 V 로 바꾸는 한 칸이 앞에 붙었다.
    종합 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "V=E(X²)−{E(X)}²=4 → V/E=q → p=1−q → n=E/p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X)(6)·E(X²)(40)를 바꿀 수 있음. 제약: V=E(X²)−E(X)² 이 양수이고 q=V/E 가 0과 1 사이여야 하며 n=E/p 가 자연수가 되어야 한다."
    creative: "(1) p 를 묻기(★2) (2) σ(X) 를 주고 E(X²) 를 묻는 역방향(★2) (3) n 과 p 를 모두 미지수로 두고 조건을 확률값 P(X=0) 으로 주면 지수방정식 ★4."
```

```yaml
- id: RPM-PROB-0396
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    빨간 공 2개·파란 공 6개에서 복원추출 n번 중 빨간 공이 나온 횟수 X에 대하여 E(X²)=11/2일 때 n.
  category: "p=1/4 → E(X²)=npq+(np)² → n의 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "E(X²)=V+E² 로 이항분포의 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=2/8=1/4 를 읽고 3n/16 + n²/16 = 11/2 를 세우면 n²+3n−88=0 인 이차방정식 하나.
    자연수 근만 취하는 마지막 확인은 가볍다. 종합 구역 ★2·통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "p=1/4 → E(X²)=npq+(np)² = (3n+n²)/16 = 11/2 → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(2, 6)와 E(X²) 값을 바꿀 수 있음. 제약: 이차방정식이 자연수 근을 하나만 갖도록 상수항을 잡고(음근은 자동 기각), p 는 분모가 작은 유리수로 둔다."
    creative: "(1) V(X) 를 주고 n 을 묻기(일차 · ★2) (2) E(X²) 대신 E((X−1)²) 로 바꿔 전개 단계를 추가(★3) (3) 공을 비복원으로 꺼내면 이항분포가 깨져 분포표를 새로 세워야 함 ★4."
```

```yaml
- id: RPM-PROB-0397
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    주사위 180번에서 3의 눈이 나온 횟수 X에 대하여 Y=2X−15일 때 E(Y)−σ(Y). 5지선다.
  category: "B(180,1/6) → E·σ → 선형 변환"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 E(aX+b)−σ(aX+b)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(X)=30, V(X)=25 에서 σ(X)=5 를 얻고 E(Y)=45, σ(Y)=2·5=10 을 빼면 끝.
    상수항이 표준편차에 영향을 주지 않는다는 점이 유일한 확인 지점이다.
    종합 구역 ★2·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "X~B(180,1/6) → E=30, σ=5 → E(Y)=2·30−15, σ(Y)=2·5 → 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던진 횟수(180)·계수(2, −15)를 바꿀 수 있음. 제약: npq 가 완전제곱수여야 σ 가 정수로 떨어지므로 횟수를 36의 배수로 잡는다."
    creative: "(1) E(Y)+σ(Y) 나 V(Y) 로 묻기(★2) (2) 계수를 음수로 바꿔 σ 의 절댓값 처리를 넣기(★2) (3) E(Y)=σ(Y) 가 되는 계수를 역산시키면 방정식이 생겨 ★3."
```

```yaml
- id: RPM-PROB-0398
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    주사위 두 개를 160번 던져 두 눈의 곱이 홀수인 횟수 X에 대하여 f(a)=E((X−a)²)의 최솟값.
  category: "E((X−a)²) 전개 → a의 이차함수 → 최솟값 = V(X)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "E((X−a)²)=V(X)+(E(X)−a)² 로 옮겨 a 의 이차함수로 보고 a=E(X) 에서 최솟값이 V(X) 임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "E((X−a)²) 의 최솟값 = V(X)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 곱이 홀수 = 두 눈 모두 홀수 → p=1/4 로 X~B(160,1/4) 를 세운다.
    이어 f(a)=E(X²)−2aE(X)+a² 를 a 에 대한 이차식으로 보고 꼭짓점에서 최솟값 V(X)=30 을 읽는다.
    확률 단계와 이차함수 최솟값 단계가 겹친 구조. 종합 구역 ★2~3·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "p=1/2·1/2 → X~B(160,1/4) → f(a)=V(X)+(E(X)−a)² → 최솟값 V(X)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반복 횟수(160)와 성공 조건(곱이 홀수 → 합이 짝수·곱이 3의 배수)을 바꿀 수 있음. 제약: npq 가 정수가 되도록 횟수를 p 분모의 제곱 배수로 잡고, 조건 확률이 손으로 셀 수 있는 값이어야 한다."
    creative: "(1) f(a) 가 최소가 되는 a 를 묻기(답이 E(X) · ★3) (2) f(a)=k 를 만족시키는 a 의 개수를 묻는 이차부등식으로 바꾸면 I-MI 추가 ★4 (3) X 를 이항분포가 아닌 표 분포로 주면 계산 비중만 늘어남(★3)."
```

```yaml
- id: RPM-PROB-0399
  page: 66
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1등(10만 원) 1개·2등(1만 원) 5개인 제비뽑기에서 1개를 뽑아 받는 상금의 기댓값이 100원일 때 전체 제비 개수.
  category: "상금 기댓값 식 → 전체 개수 n 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상금의 기댓값에서 전체 개수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (100000·1 + 10000·5)/n = 100 한 줄에서 n 을 역산한다. 꽝의 상금이 0 이라 항이 둘뿐이고,
    만 원 단위를 원으로 맞추는 단위 처리만 조심하면 된다.
    종합 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "E = (100000·1 + 10000·5)/n = 100 → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1500$"
  answer_source: "해설(쪽 렌더)"
  figure: 'crop:fig-0399.png'
  latex: latex-bank/rpm-prob/items/0399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상금(10만·1만)·당첨 제비 개수(1, 5)·기댓값(100원)을 바꿀 수 있음. 제약: 상금 총액이 기댓값으로 나누어떨어져 n 이 자연수여야 하고, 당첨 제비 수가 n 보다 작아야 한다. 표 그림(fig-0399)의 라벨은 고정."
    creative: "(1) 전체 개수를 주고 2등 제비 수를 역산시키기(★2~3) (2) 참가비를 두고 기대 이익이 0 이 되는 조건으로 바꾸기(★3) (3) 제비를 2개 뽑는 시행으로 바꾸면 조합 확률이 들어가 ★4."
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0400
  page: 67
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    X가 −1, 0, 1, 2를 확률 (5−a)/6, 1/3, (a−2)/6, 1/6으로 가지고 P(0≤X≤2)=5/6일 때 V(aX+3).
  category: "구간 확률 조건 → a → 분포표 V(X) → a²V(X)"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률 조건으로 표의 미지수를 정한 뒤 V(aX+b)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(0≤X≤2)=5/6 에 세 칸을 더해 a=4 를 정하고(P(X=−1)=1/6 로 확인 가능),
    분포표에서 E(X)=1/2, E(X²)=7/6 → V(X)=11/12 를 구한 뒤 같은 a 가 변환 계수로 다시 쓰여 16배가 된다.
    미지수 a 가 확률 안과 계수 양쪽에 등장하는 것이 함정. 서술형 구역 ★3·통찰 0·M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "P(0≤X≤2)=5/6 → a=4 → 분포표로 V(X) → V(aX+3)=a²V(X)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{44}{3}$'
  answer_source: "해설(쪽 렌더)"
  figure: 'crop:fig-0400.png'
  latex: latex-bank/rpm-prob/items/0400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값(−1~2)·분모(6)·구간 확률(5/6)을 바꿀 수 있음. 제약: 모든 확률이 0 이상 1 이하가 되는 a 여야 하고, V(X) 와 a²V(X) 가 정리된 분수가 되도록 분모를 맞춘다. 표 그림(fig-0400)의 라벨은 고정."
    creative: "(1) 변환 계수를 a 가 아닌 다른 상수로 바꾸면 함정이 사라져 ★2~3 (2) E(aX+3) 을 함께 묻기(★3) (3) 조건을 P(X≥1)=1/2 처럼 다른 구간으로 바꾸기(★3) (4) a 의 가능한 범위를 먼저 묻는 소문항을 붙이면 I-EQV ★4."
```

```yaml
- id: RPM-PROB-0401
  page: 67
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    1학년 5명·2학년 2명에서 3명을 뽑을 때 뽑힌 1학년 수 X에 대하여 E(7X−5).
  category: "조합 확률 분포표 → E(X) → 7E(X)−5"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "뽑은 인원으로 정의된 확률변수의 E(aX+b)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    X=1, 2, 3 의 확률을 5C1·2C2, 5C2·2C1, 5C3 를 7C3=35 로 나눠 만들고 E(X)=15/7 을 구한 뒤
    7 을 곱해 약분되는 구조다. X 의 최솟값이 0 이 아니라 1 임을 놓치지 않는 것이 함정.
    서술형 구역 ★3 출발·통찰 0·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "X=1,2,3 의 조합 확률 → E(X)=15/7 → E(7X−5)=7E(X)−5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학년별 인원(5, 2)·뽑는 수(3)·계수(7, −5)를 바꿀 수 있음. 제약: 계수를 전체 조합 수의 약수 배수로 잡아야 기댓값의 분모가 약분되고, X 의 최솟값이 0 이 되는지 1 이 되는지 인원 구성으로 조절한다."
    creative: "(1) V(7X−5) 로 바꾸면 E(X²) 가 필요해 ★3~4 (2) 2학년 수로 정의를 바꾸면 X 범위가 0~2 로 이동(★3) (3) 뽑는 수를 4로 늘리면 항이 늘어 Mₖ 상승(★3)."
```

```yaml
- id: RPM-PROB-0402
  page: 67
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    승률 80%인 팀이 10경기를 할 때 승수 X에 대하여 P(X≤1)=k/5^10일 때 상수 k.
  category: "이항확률 두 항 → 분모 5^10 으로 통일 → k"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 누적확률을 지수 형태로 정리하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(X=0)=(1/5)¹⁰, P(X=1)=10·(4/5)(1/5)⁹ 를 모두 분모 5¹⁰ 으로 맞추면 (1+40)/5¹⁰.
    지수를 맞추는 정리가 이 문항의 전부이고 착안이라 부를 새 수는 없다.
    서술형 구역 ★3 출발·통찰 0·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "P(X≤1)=(1/5)^10 + 10(4/5)(1/5)^9 → 분모 5^10 통일 → k=1+40"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$41$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "승률(80%)·경기 수(10)·경계(X≤1)를 바꿀 수 있음. 제약: 확률의 분모가 하나의 소수 거듭제곱(5ⁿ)이 되도록 승률을 분모 5 꼴로 잡고, 항 수가 둘셋을 넘지 않게 경계를 정한다."
    creative: "(1) P(X≥9) 로 바꿔 지수를 4 쪽으로 몰기(★3) (2) 경계를 X≤2 로 늘려 항을 셋으로(Mₖ 상승 ★3) (3) k 를 주고 경기 수를 역산시키면 I-BW ★4."
```

```yaml
- id: RPM-PROB-0403
  page: 67
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    정사면체를 80번 던져 바닥 면의 수가 1인 횟수 X에 대하여 X²의 평균.
  category: "B(80,1/4) → E(X²)=V+E²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 E(X²) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(X)=20, V(X)=15 를 넣어 E(X²)=15+400 한 줄. 정사면체는 p=1/4 를 주는 장치일 뿐이다.
    서술형 구역 ★3 출발이나 통찰 0·M_total 4(한 줄) → ★2.
  tier: star_2
  mechanism_primary: "X~B(80,1/4) → E=20, V=15 → E(X²)=V+E²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$415$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던진 횟수(80)와 면의 수(정사면체 → 정육면체)를 바꿀 수 있음. 제약: npq 가 정수가 되도록 횟수를 p 분모의 제곱 배수로 잡는다."
    creative: "(1) E((X−20)²) 로 바꾸면 분산 자체가 답(★2) (2) E(X²)=415 를 주고 횟수를 역산시키면 이차방정식 ★3 (3) X 대신 2X+1 의 제곱 평균을 묻기(전개 한 단계 추가 ★3)."
```

### 실력 Up

```yaml
- id: RPM-PROB-0404
  page: 67
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    1, 3, 5, 7, 9에 대하여 X의 확률이 a, b, c, b, a이고 Y의 확률이 a+1/20, b, c−1/10, b, a+1/20일 때, V(X)=31/5이면 10×V(Y).
  category: "대칭분포 → 평균 5 고정 → V의 변화분만 계산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 분포가 5에 대해 좌우 대칭이므로 E(X)=E(Y)=5 를 계산 없이 읽음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "V=Σ(x−5)²p 로 쓰면 X 와 Y 의 차이가 바뀐 확률 항에만 남아 V(Y)=V(X)+증분 으로 환원"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "대칭인 두 확률분포의 분산 비교"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a, b, c 를 각각 구하려 들면 미지수 셋에 식이 둘이라 막히고, 대칭으로 평균을 5 로 고정한 뒤
    V=Σ(x−5)²p 의 형태로 두 분포의 차이(양 끝 +1/20 씩, 가운데 −1/10)만 더하면 V(Y)−V(X) 가 나온다.
    실력 Up ★4 출발·통찰 2(SYM d2 + EQV d2) → ★4. 통찰 3개 미만이라 ★5 는 아님.
  tier: star_4
  mechanism_primary: "대칭 → E=5 → V=Σ(x−5)²p → 바뀐 확률 항의 증분만 더해 V(Y)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$78$"
  answer_source: "답지"
  figure: 'crop:fig-0404.png'
  latex: latex-bank/rpm-prob/items/0404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "값(1, 3, 5, 7, 9)·확률 증분(1/20, 1/10)·V(X)(31/5)를 바꿀 수 있음. 제약: 좌우 대칭이 유지되도록 증분을 양 끝에 같은 값으로 주고 가운데에서 그 두 배를 빼며, 모든 확률이 0 이상이어야 한다. 표 그림(fig-0404)의 라벨은 고정."
    creative: "(1) 증분을 가운데가 아니라 3·7 에서 빼면 (x−5)² 가중치가 달라져 계산은 같고 값만 바뀜(★4) (2) V(Y)−V(X) 를 직접 묻기(골조 노출로 ★3) (3) 대칭을 깨뜨려 a, b, c 를 실제로 연립하게 하면 통찰이 사라지고 Mₖ 만 늘어 ★3 (4) E(XY) 류를 묻지 말 것(범위 밖)."
```

```yaml
- id: RPM-PROB-0405
  page: 67
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    주사위를 나온 눈의 합이 3 이상이 될 때까지 던질 때 던진 횟수 X의 평균.
  category: "X의 최댓값 3 간파 → 경우별 확률 → E"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「합이 3 이상이 될 때까지」를 첫 눈이 3 이상이면 1회, 1이나 2면 계속으로 옮겨 X ≤ 3 임을 확정"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "X=2 가 되는 첫 눈 1·2 각각의 경우와 X=3 이 되는 (1,1) 경우를 빠짐없이 갈라 셈"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "정지 조건이 있는 시행 횟수의 기댓값(경우 분기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    무한히 이어지는 시행처럼 보이지만 눈의 최솟값이 1 이라 두 번이면 합이 최소 2, 세 번이면 반드시 3 이상이어서
    X 는 1, 2, 3 뿐이다. 그 상한을 먼저 잡고 첫 눈이 1·2 인 분기를 정확히 세는 것이 골조다.
    실력 Up ★4 출발·통찰 2(EQV d2 + MI d2) → ★4.
    [분류 이슈] 첫 통찰을 정지 조건의 동치 변환(EQV)으로 볼지 역방향 사고(BW)로 볼지 갈림.
  tier: star_4
  mechanism_primary: "첫 눈 ≥3 → X=1 / 첫 눈 1·2 → 둘째 시행 / (1,1) → X=3 → 확률 합해 E(X)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{49}{36}$'
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정지 기준(합 3 이상 → 4 이상·5 이상)을 바꿀 수 있음. 제약: 기준을 올리면 X 의 최댓값도 올라 경우 수가 급격히 늘므로 4 이상까지가 손 계산 한계이고, 분모는 6의 거듭제곱으로 떨어진다."
    creative: "(1) 기준을 4 이상으로 올려 X=1~4 분기로 키우기(★4~5) (2) V(X) 를 묻기(분포표 그대로 · ★4) (3) 주사위를 동전이나 정사면체로 바꿔 분기 수를 줄이면 ★3 (4) 합이 정확히 3 이 될 확률로 바꾸면 사후 기각이 생겨 I-VF ★4."
```

```yaml
- id: RPM-PROB-0406
  page: 67
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    B(n, p)를 따르는 X의 분산이 1이고 P(X=n−1)=4P(X=n)일 때 P(|X−m|<σ). (m은 평균, σ는 표준편차)
  category: "이항확률의 비 → nq=4p → 분산 1 → n, p → 사건 환원"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(X=n−1)=4P(X=n) 의 이항확률을 약분해 nq=4p 라는 간단한 관계식으로 옮김"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|X−m|<σ 를 m−σ<X<m+σ 의 정수해, 곧 X=2 하나로 환원"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "이항확률의 비 조건과 분산으로 n, p 를 정한 뒤 P(|X−m|<σ)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 확률을 그대로 두면 지수식이 남지만 비를 잡으면 pⁿ 이 약분돼 nq=4p 만 남는다.
    이를 npq=1 과 함께 풀어 p=1/2, n=4 를 얻고 m=2, σ=1 에서 절댓값 부등식을 정수값 X=2 로 좁힌다.
    실력 Up ★4 출발·통찰 2(EQV d2 + EQV d1) → ★4. 통찰 3개 미만이라 ★5 는 아님.
  tier: star_4
  mechanism_primary: "P(X=n−1)/P(X=n)=4 → nq=4p → npq=1 과 연립해 p=1/2, n=4 → P(|X−2|<1)=P(X=2)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비의 계수(4)와 분산값(1)을 바꿀 수 있음. 제약: 연립 결과 p 가 0과 1 사이 유리수, n 이 자연수여야 하고, σ 가 정수여야 |X−m|<σ 가 정수 구간으로 깔끔히 좁혀진다."
    creative: "(1) P(|X−m|≤σ) 로 바꾸면 경계 포함으로 답이 달라짐(T-경계 강조 ★4) (2) 조건을 P(X=1)=4P(X=0) 처럼 반대쪽 꼬리로 주기(★4) (3) 분산 대신 평균을 주면 연립이 쉬워져 ★3 (4) n 을 크게 만드는 비 계수를 잡으면 마지막 확률 계산만 무거워짐(질 저하 주의)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 3 · ★2 19 · ★3 10 · ★4 3 · ★5 0
- 통찰형 6(0383 · 0388 · 0398 · 0404 · 0405 · 0406) · 절차형 29 · premium 0
- 통찰 라벨이 붙은 문항 11문(위 6문 + d1 하나뿐이라 절차형으로 분류한 0380 · 0385 · 0386 · 0389 · 0390). 유형 분포는 I-EQV 8 · I-RT 2 · I-SYM 1 · I-MI 1
- 구역별 ★ 중앙값: 유형 11 ★2 · 유형 12 ★2 · 유형 UP 13 ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 주관식 ★3 · 실력 Up ★4 — 벤더 구역 신호와 일치
- M_total 분포: 4~5 가 9문 · 6~7 이 14문 · 8~9 가 12문. 이 범위는 계산보다 조건 역산(np·npq 연립, 총합 = 1)이 많아 Mₛ 2~3 · Mₖ 1~3 에 몰림
- 그림: 6문(`crop:fig-0385.png` · `crop:fig-0388.png` · `crop:fig-0392.png` · `crop:fig-0399.png` · `crop:fig-0400.png` · `crop:fig-0404.png`) — 모두 확률분포표·상금표 크롭이라 표의 수치가 발문 조건 자체다
- type_hint 상위: 「이항분포의 평균·분산·표준편차와 n, p 역산」 8(0372·0373·0374·0375·0376·0395·0396·0403) · 「aX+b 의 평균·분산·표준편차」 6(0377·0378·0379·0391·0392·0397) · 「확률분포표·확률질량함수의 미지수 결정」 4(0384·0385·0393·0400) · 「기댓값(금액·상금)」 4(0381·0382·0383·0399) · 「조합으로 세는 확률변수의 확률·기댓값」 3(0387·0389·0401)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0382 | 구역(유형 UP → ★3)과 난이도 표시(중 → ★2) 신호가 엇갈림. 실제 골조는 기댓값 식 하나의 일차방정식 | ★2 / ★3 |
| RPM-PROB-0383 | 통찰 1개(EQV d2)라 ★3 으로 두었으나 조합 확률 3종 + 기댓값 계산으로 M_total 8 → ★4 후보 | ★3 / ★4 |
| RPM-PROB-0390 | 수능 기출 태그(★3 신호)이나 X≥2 를 한 칸으로 묶는 착안 외에는 세 항 합이라 ★2 | ★2 / ★3 |
| RPM-PROB-0405 | 첫 통찰을 정지 조건의 동치 변환(I-EQV)으로 볼지, 「합 3 이상」에서 X 의 상한을 역추적하는 I-BW 로 볼지 갈림 | ★4 (고정) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 따로 세워야 할 유형: (1) **이항분포가 주어지지 않은 경우**(0372·0374·0375 — 1회 시행의 성공 확률을 조합·독립곱으로 먼저 만드는 앞 단계가 별개의 학습 지점) (2) **평균·분산에서 n, p 역산**(0376·0395·0396 — V/E=q 를 쓰는 고정 골조) (3) **aX+b 변환**(0377~0379·0391·0392·0397 — 계수 제곱·절댓값 처리) (4) **기댓값과 공정 가격**(0381~0383·0399 — 손익 조건을 기댓값 이상으로 옮기는 EQV 가 공통) (5) **확률분포표의 미지수 결정**(0384·0385·0393·0400).
- 통합해도 될 유형: 「E(X²)=V+E² 로 묻는 문항」(0391·0396·0403)은 위 (2)·(3)의 변형이라 별도 유형이 아니라 하위 항목으로 두면 충분하다. 「초기하 상황의 확률·기댓값」(0387·0401)은 04 단원이 아니라 확률 단원 카탈로그와 겹치므로 교차 참조로 처리한다.
- ★4 이상 슬롯 후보: 0404(SYM) · 0405(MI) · 0406(EQV 2단)만 저노출 통찰을 갖는다. ★5 는 이 범위에 없다(통찰 3개 이상 조건 미달).
