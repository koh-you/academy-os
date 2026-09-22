---
name: mechanism-데이터-RPM-ALG-09-p3
description: RPM 대수 09 수열의 합(3/3 · 유형 UP 12~13 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 09 수열의 합
  unit_code: ALG-09
  part: "3/3"
  extract_range: "138~142쪽 · 1013~1050"
  total_problems: 38
  unit_total: 104
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 09 수열의 합 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 09 수열의 합 단원의 마지막 범위(138~142쪽 · 전사 id 1013~1050 · 38문항)를 다룬다. 구역은 「유형 UP 12 제k항이 n에 대한 식일 때의 수열의 합」(3문) · 「유형 UP 13 항을 묶었을 때 규칙을 갖는 수열」(4문) · 「시험에 꼭 나오는 문제」(23문) · 「서술형 주관식」(4문) · 「실력 Up」(4문)이다. 벤더 난이도 신호는 구역이 곧 층이고(유형 UP ★3 출발 · 시험 종합은 level 없음 ★2 출발 · 서술형 ★3 · 실력 Up ★4), 유형 UP 안에서만 난이도 표시(중·상중)와 태그(대표문제·서술형)가 붙으며 시험 구역에는 「중요」·「수능 기출」·「평가원 기출」 태그가 있다. 그림은 2문(1038 · 1042)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 `mechanism_primary`, 단계별 통찰 `insights[]`, 바꿔도 되는 수와 제약·통찰 골조를 유지한 변형 지점을 적은 `variation_notes` 를 채웠다. ★ 는 벤더 구역 출발점에서 M_total·통찰로 ±1 조정한 라벨이고, 형제 파일과 같은 관행(시험 구역: M_total 4·통찰 0 → ★1, M_total 5 → ★2, M_total 6 이상·통찰 1 → ★3)을 따랐다.

## 문항 데이터

### 유형 UP 12 제$k$항이 $n$에 대한 식일 때의 수열의 합

```yaml
- id: RPM-ALG-1013
  page: 138
  vendor_label: "유형 UP 12 제$k$항이 $n$에 대한 식일 때의 수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    1×n + 2×(n−1) + 3×(n−2) + … + n×1 을 n 에 대한 식으로 간단히 하기.
  category: "제k항 k(n+1−k) → Σ 분리(n 상수) → 인수분해"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "앞 인수 k·뒤 인수 n+1−k 가 반대로 움직이는 두 인덱스 구조를 읽어 제k항 k(n+1−k) 를 세움(n 은 상수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제k항이 n에 대한 식일 때의 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제k항 k(n+1−k) 를 세우면 (n+1)Σk − Σk² 로 갈라지고 n(n+1)/2·(n+1) − n(n+1)(2n+1)/6 = n(n+1)(n+2)/6. 앞·뒤 인수가 반대로 움직이는 구조를 n 을 상수로 두고 읽는 것이 유일한 고비(PD d1)이고 나머지는 Σ 공식·인수분해 정리. 유형 UP 구역 출발 ★3 · M_total 6 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "제k항 k(n+1−k) → (n+1)Σk − Σk² → n(n+1)(n+2)/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{n(n+1)(n+2)}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 인수를 n+1−k 대신 n+2−k(1×(n+1)+2×n+…+n×2) 나 2n+1−2k 로, 앞 인수를 2k−1 로 바꿀 수 있음. 제약: 마지막 항이 n×1 처럼 닫혀야 항 수가 n 으로 확정되고 결과가 n 의 3차식으로 인수분해돼야 함(선택지형이면 분모 6 유지)."
    creative: "(1) 답을 n(n+a)(n+b)/6 꼴로 주고 a+b 를 묻기(★3 유지 · 1015 와 같은 골조) (2) 제k항을 k(n+1−k)² 로 올리면 Σk³ 까지 필요 → 계산만 무거워지는 ★3~4(질 저하 주의) (3) 합이 특정 값(예 220)이 되는 n 을 묻는 역방향 → BW d1 추가 ★4 후보."
```

```yaml
- id: RPM-ALG-1014
  page: 138
  vendor_label: "유형 UP 12 제$k$항이 $n$에 대한 식일 때의 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    ((n+2)/n)² + ((n+4)/n)² + … + (3n/n)² 을 n 에 대한 식으로 간단히 나타내기. 5지선다.
  category: "제k항 ((n+2k)/n)²·항 수 n → 전개 → Σ 공식 → 통분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자 n+2k 로 제k항을 세우고 마지막 항 3n/n 에서 n+2k=3n → 항 수가 n 임을 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제k항이 n에 대한 식일 때의 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제k항 ((n+2k)/n)² = 1 + 4k/n + 4k²/n² 로 전개해 Σ 공식 세 개를 쓰고 통분하면 (13n²+12n+2)/(3n). 고비는 항 수를 n 으로 읽는 것(마지막 항 3n/n → k=n · T-경계)과 1/n² 을 밖으로 빼는 정리. 유형 UP 출발 ★3 · 난이도 중 · M_total 7 · PD d1 → ★3.
  tier: star_3
  mechanism_primary: "제k항 ((n+2k)/n)² · 항 수 n → 전개 → n + 2(n+1) + 2(n+1)(2n+1)/(3n) → 통분"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 증가폭 2 → 1·3, 마지막 항 3n/n → 2n/n·4n/n 등으로 바꿀 수 있음. 제약: 마지막 분자가 n+ck 꼴로 k=n(또는 정수 배)에서 닫혀 항 수가 정수로 확정돼야 하고, 선택지 오답은 항 수를 n−1·n+1 로 잘못 센 값과 분모 2n/3n 혼동값으로 구성."
    creative: "(1) 제곱 대신 세제곱으로 올리면 Σk³ 등장 ★3~4(계산 마찰) (2) 항 수를 n 이 아닌 2n 으로 두는 설정(분자 n+k, 마지막 3n/n)이면 경계 읽기가 한 단계 더 → ★3 유지 (3) 합의 값이 주어지고 n 을 구하는 역방향은 3차 방정식 정수해 → BW d1 ★4 후보."
```

```yaml
- id: RPM-ALG-1015
  page: 138
  vendor_label: "유형 UP 12 제$k$항이 $n$에 대한 식일 때의 수열의 합"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    1×(2n−1) + 2×(2n−3) + … + n×1 = n(n+a)(bn+c)/6 일 때 정수 a+b+c 의 값.
  category: "제k항 k(2n+1−2k) → (2n+1)Σk − 2Σk² → 인수분해 → 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "앞 인수 k·뒤 인수 2n+1−2k(홀수 내림차순)의 구조를 읽어 제k항을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제k항이 n에 대한 식일 때의 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제k항 k(2n+1−2k) 로 두면 (2n+1)·n(n+1)/2 − 2·n(n+1)(2n+1)/6 = n(n+1)(2n+1)(1/2 − 1/3) = n(n+1)(2n+1)/6 — 결과가 Σk² 와 같은 꼴이라 a=1, b=2, c=1. 1013 과 골조가 같고 뒤 인수가 홀수열로 바뀐 것뿐이며, 계수 매칭(T-표기)이 한 칸 추가. 유형 UP 출발 ★3 · 상중 · M_total 7 · PD d1 → ★3.
  tier: star_3
  mechanism_primary: "제k항 k(2n+1−2k) → (2n+1)Σk − 2Σk² → n(n+1)(2n+1)/6 → a+b+c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 인수를 2n+1−2k 대신 3n+1−3k·2n+2−2k(짝수열) 로, 앞 인수를 2k−1 로 바꿀 수 있음. 제약: 결과가 n(n+a)(bn+c)/6 꼴로 인수분해되고 a, b, c 가 정수로 유일하게 읽혀야 함(공통인수 배분이 두 가지가 되면 답이 갈림)."
    creative: "(1) 결과가 Σk² 와 같은 값임을 이용해 '두 합이 같음을 보여라' 는 서술형(★3 유지) (2) 앞·뒤 인수 모두 홀수열 (2k−1)(2n+1−2k) 로 두면 전개가 늘어 ★3~4 (3) 합 = 특정 값(예 385)인 n 을 묻는 역방향 → BW d1 ★4 후보."
```

### 유형 UP 13 항을 묶었을 때 규칙을 갖는 수열

```yaml
- id: RPM-ALG-1016
  page: 138
  vendor_label: "유형 UP 13 항을 묶었을 때 규칙을 갖는 수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    수열 1, 3, 1, 5, 3, 1, 7, 5, 3, 1, … 의 제95항. 5지선다.
  category: "군 나누기(제m군: 2m−1 부터 2씩 감소·m개) → 누적 항 수 → 군 내 위치"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1 이 나올 때마다 군이 끝난다는 규칙으로 제m군 = 2m−1, 2m−3, …, 1(m개)을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "군수열의 제k항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1 을 끝으로 군을 끊으면 제m군은 2m−1 부터 2씩 줄어 1 까지 m개. Σ_{m=1}^{13} m = 91 < 95 ≤ 105 이므로 제14군 4번째 항 = 27 − 2·3 = 21. 군 규칙 발견(PD d1)과 군 내 위치 계산(T-경계)이 전부. 유형 UP 대표문제 출발 ★3 · M_total 5 · 통찰 1 → ★3 유지. [분류 이슈] 같은 골조의 1041(시험 구역)은 ★2 — 구역 차이만으로 1단 갈리므로 카탈로그에서 base ★ 통일 필요.
  tier: star_3
  mechanism_primary: "군 규칙(제m군 첫항 2m−1·m개) → Σm ≤ 95 로 군 번호 14·위치 4 → 27 − 2·3 = 21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제95항 → 제80·120항, 군의 수열을 홀수 대신 짝수(2m, …, 2)나 등차(3m−2, …)로 바꿀 수 있음. 제약: 구하는 항이 군 경계(누적합 m(m+1)/2)에 걸리지 않도록 하거나, 걸리면 그것을 함정으로 명시. 선택지는 군 내 위치 ±1 오답으로 구성."
    creative: "(1) '제n항이 처음으로 k 가 되는 n' 을 묻는 역방향(BW d1 · ★3) (2) 첫째항부터 제95항까지의 합을 묻기 → 군별 합 Σ m² + 잔여 합 → M_total 상승 ★4 후보 (3) 군의 길이를 2m−1 로 바꾸면 누적 항 수가 m² 이 되어 규칙 발견이 한 단계 더 → ★3~4."
```

```yaml
- id: RPM-ALG-1017
  page: 138
  vendor_label: "유형 UP 13 항을 묶었을 때 규칙을 갖는 수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    수열 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, … 에서 12 가 마지막으로 나오는 항의 번호 m.
  category: "제m군 = m 이 m개 → 12군 끝 = Σ_{m=1}^{12} m"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "군수열의 제k항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    m 이 m번 나오는 규칙이 발문에 그대로 드러나므로 발견이 아니라 읽기. 12 가 마지막으로 나오는 위치는 제12군의 끝 = 1+2+…+12 = 78. 「마지막으로」를 「처음으로」(67)와 헷갈리는 T-경계 하나. 유형 UP 출발 ★3 이나 통찰 0 · M_total 4 → −1 → ★2.
  tier: star_2
  mechanism_primary: "제m군 = m 이 m개 → 12군의 끝 항 번호 = 12·13/2 = 78"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$78$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "12 → 15·20, 「마지막으로」 → 「처음으로」(Σ_{m=1}^{11} m + 1 = 67). 제약: 군 길이가 m 이면 답은 삼각수(또는 삼각수+1)이며, 군 길이를 2m−1 로 바꾸면 답이 m² 이 됨."
    creative: "(1) 제100항의 값을 묻기(누적합 경계 읽기 · ★2) (2) 첫째항부터 제78항까지의 합(Σ m² · ★3) (3) 군 길이를 2^{m−1} 로 두면 누적합이 등비합이 되어 규칙 발견 PD d1 → ★3."
```

```yaml
- id: RPM-ALG-1018
  page: 138
  vendor_label: "유형 UP 13 항을 묶었을 때 규칙을 갖는 수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    수열 1/1, 1/2, 2/2, 1/3, 2/3, 3/3, 1/4, … 에서 8/14 는 제몇 항인지.
  category: "제m군 = 분모 m·분자 1~m → 14군 8번째 = Σ_{m=1}^{13} m + 8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "군수열의 제k항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 같은 항끼리 묶으면 제m군은 분모 m, 분자 1~m 의 m개 — 발문에 3/3, 4/4 처럼 약분되지 않은 항이 보여 규칙이 드러난다. 8/14 는 제14군 8번째이므로 91 + 8 = 99. 유일한 함정은 8/14 를 4/7 로 약분해 제7군으로 가는 T-표기. 유형 UP 출발 ★3 이나 통찰 0 · M_total 5 → −1 → ★2.
  tier: star_2
  mechanism_primary: "군 규칙(분모 m·m개) → 8/14 = 14군 8번째 → 13·14/2 + 8 = 99"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$99$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8/14 → 5/20·9/16 등 약분 가능한 분수로 유지(함정 보존). 제약: 분자 ≤ 분모 이어야 수열에 존재하며, 답 = (m−1)m/2 + (분자)."
    creative: "(1) 제99항이 무엇인지 묻는 순방향(★2) (2) 첫째항부터 제99항까지의 합(각 군 합 (m+1)/2 → Σ(m+1)/2 + 잔여 · ★3) (3) 분모·분자 합이 일정한 배열(1041 골조)로 바꾸면 규칙 발견 PD d1 → ★2~3."
```

```yaml
- id: RPM-ALG-1019
  page: 138
  vendor_label: "유형 UP 13 항을 묶었을 때 규칙을 갖는 수열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    순서쌍 수열 (1,2), (2,1), (1,4), (2,2), (4,1), (1,8), (2,4), (4,2), (8,1), … 의 제100항을 (a, b) 라 할 때 a−b 의 값.
  category: "군 규칙(제m군: 곱 2^m·m+1개·a = 2^0~2^m) → 누적 항 수 m(m+3)/2 → 군 13 위치 10 → (2^9, 2^4)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 성분의 곱이 군마다 2^m 으로 일정하고 항 수가 m+1(등차가 아닌 +1 밀림)임을 함께 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "군수열의 제k항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a·b = 2^m 으로 군을 끊으면 제m군은 (2^0, 2^m), (2^1, 2^{m−1}), …, (2^m, 2^0) 의 m+1개. 누적 항 수 Σ(m+1) = m(m+3)/2 가 12군까지 90, 13군까지 104 이므로 제100항은 13군 10번째 = (2^9, 2^4), 차 512 − 16 = 496. 곱 일정 규칙 + 군 길이 m+1 의 두 겹 규칙 발견이 핵심(PD d2). 유형 UP 출발 ★3 · 상중 · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "군 규칙(곱 2^m · m+1개) → m(m+3)/2 ≤ 100 → 13군 10번째 → (2^9, 2^4) → 496"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$496$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 → 3, 제100항 → 제70·150항, a−b → a+b·ab. 제약: 군 길이 m+1 의 누적합 m(m+3)/2 가 구하는 번호를 넘는 첫 m 이 잘 정의되어야 하고 2 의 거듭제곱 계산이 무리하지 않도록(지수 ≤ 12)."
    creative: "(1) 순서쌍 대신 분수 2^i/2^j 로 표기해 군 규칙을 숨기면 PD d2 유지 ★3 (2) (a, b) 가 (512, 16) 이 되는 항 번호를 묻는 역방향 BW d1 추가 → ★4 후보 (3) 제100항까지 a 의 합(군별 등비합 2^{m+1}−1 의 Σ) → 계산 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-1020
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    S_n = 2^n + n² 일 때 Σ_{k=5}^{8} a_k 의 값. 5지선다.
  category: "부분 범위 합 = S_8 − S_4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ와 부분합 S_n의 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_5 + … + a_8 = S_8 − S_4 = (256+64) − (16+16) = 288. 일반항을 구할 필요 없이 부분합 차 한 줄. 함정은 S_5 를 빼는 T-경계뿐. 시험 구역 출발 ★2 · 통찰 0 · M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "Σ_{k=5}^{8} a_k = S_8 − S_4 → 320 − 32 = 288"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n = 3^n + 2n·2^n − n² 등, 범위 5~8 → 4~10. 제약: 2^n 계산이 2^{10} 이내이고 선택지 오답은 S_8 − S_5(경계 실수)·S_8 만(빼기 누락)으로 구성."
    creative: "(1) a_1 을 별도로 따져야 하는 Σ_{k=1}^{n} 일반항 문항(S_n − S_{n−1} 이 n=1 에서 다름 · T-경계 추가 ★2) (2) 짝수항만의 합 Σ a_{2k} 로 바꾸면 S 의 차로 안 되고 일반항 필요 → ★2~3 (3) S_n 대신 Σ(a_{k+1}−a_k) 형태(1021 골조)로 조건을 숨기면 EQV d1 ★2."
```

```yaml
- id: RPM-ALG-1021
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1 = 2 이고 Σ_{k=1}^{n}(a_{k+1} − a_k) = n² − 3n 일 때 a_13 의 값.
  category: "망원 합 a_{n+1} − a_1 = n² − 3n → a_{n+1} 식 → n = 12 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Σ(a_{k+1} − a_k) 가 망원 합 a_{n+1} − a_1 임을 읽어 조건을 a_{n+1} = n² − 3n + 2 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Σ와 부분합 S_n의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변이 망원 합이므로 a_{n+1} = 2 + n² − 3n. a_13 은 n = 12 를 넣어 144 − 36 + 2 = 110. 대안은 b_n = a_{n+1} − a_n = 2n − 4 를 S_n − S_{n−1} 로 뽑아 a_13 = a_1 + Σ_{k=1}^{12} b_k 로 가는 길이며 결과는 같다. 망원 인식(EQV d1)과 a_{n+1} 의 첨자 밀림(T-경계)이 고비. 시험 구역 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "Σ(a_{k+1} − a_k) = a_{n+1} − a_1 → a_{n+1} = n² − 3n + 2 → a_13 = a_{12+1} = 110"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$110$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1 = 2 → 다른 값, 우변 n² − 3n → 2n² + n·3^n − 1, a_13 → a_10·a_21. 제약: 답이 정수이고 첨자 밀림(n = 구하는 번호 − 1)이 유지되도록 구하는 항 번호 ≥ 2."
    creative: "(1) Σ_{k=1}^{n}(a_{k+2} − a_k) 처럼 두 칸 망원으로 바꾸면 a_{n+1} + a_{n+2} − a_1 − a_2 가 남아 EQV d2 → ★3 (2) Σ(a_{k+1} − a_k)/(a_k a_{k+1}) = Σ(1/a_k − 1/a_{k+1}) 로 역수 망원과 결합 → ★3 (3) a_{n+1} 의 최솟값을 묻기(이차식 완전제곱 · XU 이차함수) → ★3."
```

```yaml
- id: RPM-ALG-1022
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    n² 을 3 으로 나눈 나머지를 a_n 이라 할 때 Σ_{k=1}^{60} a_k 의 값.
  category: "나머지 규칙(1, 1, 0 반복) → 주기 3 → 20주기 × 2"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "n 을 3 으로 나눈 나머지별로 n² 의 나머지를 따져 1, 1, 0 이 주기 3 으로 반복됨을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나머지·홀짝·주기 조건 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n ≡ 0, 1, 2 (mod 3) 이면 n² ≡ 0, 1, 1 이므로 a_n 은 1, 1, 0 의 주기 3. 60 = 3·20 이니 합은 2·20 = 40. 주기 발견(PD d1) 뒤에는 산술뿐이고 60 이 주기의 배수라 잔여 처리도 없다. 시험 구역 출발 ★2 · M_total 4 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "n mod 3 → n² mod 3 = 1, 1, 0 → 주기 3 · 주기합 2 → 20 × 2 = 40"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 수 3 → 4(n² mod 4 = 1, 0 반복·주기 2)·5(1, 4, 4, 1, 0 주기 5), 항 수 60 → 50(잔여 항 처리 추가). 제약: 항 수가 주기의 배수가 아니면 잔여 합을 따로 더하는 T-경계가 생김을 의도적으로 쓸 것."
    creative: "(1) n³ mod 7 이나 2^n mod 5 처럼 주기가 덜 뻔한 규칙으로 바꾸면 PD d2 → ★3 (2) Σ k·a_k 로 가중치를 주면 주기별 등차 묶음 → ★3 (3) a_n 의 합이 처음으로 100 을 넘는 n 을 묻는 역방향 BW d1 → ★3."
```

```yaml
- id: RPM-ALG-1023
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ(a_k + b_k)² = 30, Σ a_k b_k = 6 일 때 Σ(a_k² + b_k²) 의 값. 5지선다.
  category: "전개 (a+b)² = a² + b² + 2ab → Σ 선형성 → 30 − 2·6"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ의 성질(선형성·범위 분할)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    Σ(a_k+b_k)² = Σ(a_k²+b_k²) + 2Σa_kb_k 이므로 구하는 값은 30 − 12 = 18. 곱셈 공식 전개와 Σ 의 선형성 두 줄이며 항 수 n 은 쓰이지 않는다. 시험 구역 출발 ★2 · 통찰 0 · M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "Σ(a+b)² = Σ(a²+b²) + 2Σab → 30 − 2·6 = 18"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "30·6 → 다른 값, (a_k − b_k)² 로 부호 바꾸기(+2ab). 제약: 답이 양수(제곱합)가 되도록 Σ(a+b)² ≥ 2Σab 가 성립하는 값만."
    creative: "(1) Σ(a_k+b_k)² 과 Σ(a_k−b_k)² 을 주고 Σa_kb_k 를 묻기(★1 유지) (2) Σ(a_k+1)² = 30, Σa_k = 6 에서 항 수 n 을 함께 묻는 형태로 바꾸면 Σ1 = n 을 세는 T-표기 추가 → ★2 (3) 조건에 Σ(a_k+b_k) 만 주고 Σa_kb_k 를 구하게 하면 정보 부족을 판단하는 EQV → 출제 부적합."
```

```yaml
- id: RPM-ALG-1024
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{1}^{10} a_k = 35, Σ_{1}^{20} a_k = 55, Σ_{1}^{10} b_k = 25, Σ_{1}^{20} b_k = 40 일 때 Σ_{k=11}^{20}(2a_k + b_k) 의 값. 5지선다.
  category: "범위 분할 Σ_{11}^{20} = Σ_{1}^{20} − Σ_{1}^{10} → 선형성"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ의 성질(선형성·범위 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σ_{11}^{20} a_k = 55 − 35 = 20, Σ_{11}^{20} b_k = 40 − 25 = 15 이므로 2·20 + 15 = 55. 범위 분할과 선형성만 쓰며 11~20 을 「20 까지 − 10 까지」로 읽는 T-경계 하나. 시험 구역 출발 ★2 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "Σ_{11}^{20} = Σ_{1}^{20} − Σ_{1}^{10} → 2·(55−35) + (40−25) = 55"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 부분합 값과 계수 2a_k + b_k → 3a_k − 2b_k, 범위 11~20 → 6~15(경계 5 까지 합 필요 → 조건 재설계). 제약: 선택지 오답은 범위 분할을 빠뜨린 값(2·55+40)·경계 실수 값으로."
    creative: "(1) Σ(2a_k + b_k + 1) 처럼 상수항을 넣어 Σ1 = 10 을 세게 하면 T-표기 추가 ★2 (2) Σa_kb_k 처럼 비선형 항을 섞으면 풀 수 없음을 판단(출제 부적합) (3) 부분합 S_n 이 식으로 주어지고 Σ_{11}^{20}(2a_k+b_k) 를 묻는 1020 결합형 ★2."
```

```yaml
- id: RPM-ALG-1025
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{1}^{10} a_k − Σ_{1}^{7} a_k/2 = 56, Σ_{1}^{10} 2a_k − Σ_{1}^{8} a_k = 100 일 때 a_8 의 값.
  category: "겹치는 Σ 범위를 S_7·a_8·(a_9+a_10) 덩어리로 → 두 식 연립 → 소거"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "범위가 7·8·10 으로 엇갈린 두 Σ 조건을 S_7, a_8, P = a_9 + a_10 세 덩어리의 연립으로 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Σ의 성질(선형성·범위 분할)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    S_7 = A, P = a_9 + a_10 으로 두면 첫 식은 A/2 + a_8 + P = 56, 둘째 식은 A + a_8 + 2P = 100. 첫 식을 두 배 해 빼면 a_8 = 112 − 100 = 12. 각 항을 구할 수 없음을 받아들이고 덩어리 셋으로 묶는 CON d1 이 핵심이며 분수 계수 정리와 범위 경계(T-경계)가 노동. 시험 구역 출발 ★2 · 수능 기출 · M_total 7 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "A = S_7, P = a_9+a_10 → A/2 + a_8 + P = 56, A + a_8 + 2P = 100 → 2·(첫 식) − (둘째 식) → a_8 = 12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "56·100, 계수 1/2·2, 범위 7·8·10 → 다른 조합. 제약: 소거 뒤 a_8(구하는 항)만 남도록 두 식의 A 와 P 계수 비가 같아야 함(예: (1/2, 1) 과 (1, 2)). 답이 정수가 되게 우변을 맞출 것."
    creative: "(1) 덩어리를 넷(S_6, a_7, a_8, a_9+a_10)으로 늘리고 식 셋을 주면 CON d2 → ★4 (2) 등차수열 조건을 추가해 덩어리 대신 a·d 연립으로 풀게 하면 표준 절차 ★2 로 하락 (3) 조건 하나를 Σ_{k=8}^{10} 꼴 부분 범위로 주면 범위 분할 T-경계만 추가 ★3 유지."
```

```yaml
- id: RPM-ALG-1026
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등차수열에서 a_2 = 1, a_8 = −17 일 때 Σ_{1}^{50} a_{2k} − Σ_{1}^{50} a_{2k+1} 의 값. 5지선다.
  category: "공차 d = −3 → 두 Σ 를 묶어 Σ(a_{2k} − a_{2k+1}) = Σ(−d) → 50·3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 Σ 를 항별로 짝지어 a_{2k} − a_{2k+1} = −d 가 상수임을 읽음(두 등차합을 따로 계산하지 않음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차·등비수열의 Σ 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_8 − a_2 = 6d = −18 에서 d = −3. 두 Σ 의 항 수가 같으므로 짝지으면 각 항의 차가 −d = 3 으로 일정하고 50·3 = 150. 각각 등차합으로 계산해도 되지만 짝 차이로 읽는 EQV d1 이 계산을 한 줄로 줄인다. 부호(T-부호)만 조심. 시험 구역 출발 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "6d = −18 → d = −3 → Σ(a_{2k} − a_{2k+1}) = 50·(−d) = 150"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_2·a_8 → 다른 두 항(d 가 정수가 되도록 첨자 차가 값 차를 나눔), 항 수 50 → 30·100, 짝수항 − 홀수항 → 홀수항 − 짝수항(부호 반전). 제약: 두 Σ 의 항 수가 같아야 짝 차이가 상수로 닫힘."
    creative: "(1) 항 수를 다르게(Σ_{1}^{50} a_{2k} − Σ_{1}^{49} a_{2k+1}) 주면 남는 항 하나를 따로 처리 → T-경계 ★2~3 (2) 등비수열로 바꾸면 짝 차이가 a_{2k}(1 − r) 로 등비합이 되어 ★3 (3) a_{2k} 와 a_{2k+1} 의 곱의 합이면 이차식 Σ → 계산 ★3."
```

```yaml
- id: RPM-ALG-1027
  page: 139
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    등비수열에서 a_2/a_1 − a_4/a_2 = 1/4, Σ_{1}^{6} a_k = 9 일 때 a_2 + a_4 + a_6 의 값.
  category: "r − r² = 1/4 → r = 1/2 → 짝수항 합 E = r·(홀수항 합 O) · O + E = 9 → E"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "여섯 항의 합을 홀수항 합 O 와 짝수항 합 E 로 나누고 E = rO 임을 읽어 a_1 없이 닫음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차·등비수열의 Σ 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_2/a_1 = r, a_4/a_2 = r² 이므로 r − r² = 1/4 → (r − 1/2)² = 0, r = 1/2. 짝수항은 바로 앞 홀수항의 r 배이므로 E = O/2 이고 O + E = 9 에서 E = 3. a_1 = 32/7 을 구해 직접 더하는 길도 있으나 홀·짝 분리(EQV d1)가 훨씬 짧다. 시험 구역 출발 ★2 · M_total 4 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "r − r² = 1/4 → r = 1/2 → E = rO, O + E = 9 → E = 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 조건을 r − r² = 1/4(중근) 대신 r² − r − 2 = 0(r = 2·−1 → 두 경우) 으로, 6항 합 9 → 다른 값, 짝수항 합 → 홀수항 합. 제약: 항 수가 짝수여야 홀·짝이 같은 개수로 갈리고 E = rO 가 성립함."
    creative: "(1) r 이 두 개 나오게 해 각 경우를 따지게 하면 MI d1 추가 → ★3 (2) 항 수를 홀수(7항)로 두면 E = rO 가 깨져 마지막 항을 따로 처리 → EQV d2 ★3 (3) a_1 + a_4 + a_7 처럼 3 칸 간격 합이면 세 묶음 비 1 : r : r² → ★3."
```

```yaml
- id: RPM-ALG-1028
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 3, 공차 2 인 등차수열에 대하여 Σ_{1}^{15}(3a_k − 1) 의 값.
  category: "a_k = 2k + 1 → 3a_k − 1 = 6k + 2 → Σ 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차·등비수열의 Σ 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_k = 2k + 1 이므로 Σ(6k + 2) = 6·120 + 30 = 750. 선형성으로 3Σa_k − 15 로 가도 같다. 일반항·Σ 공식 두 줄, 함정 없음. 시험 구역 출발 ★2 · 통찰 0 · M_total 3 → −1 → ★1.
  tier: star_1
  mechanism_primary: "a_k = 2k + 1 → Σ(6k + 2) = 6·120 + 2·15 = 750"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$750$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차·항 수·계수(3a_k − 1 → 2a_k + 5) 자유. 제약: 답이 정수이며 Σ1 = 15 (상수항 × 항 수)를 빠뜨리면 틀리는 구조 유지."
    creative: "(1) Σ(a_k)² 처럼 제곱을 넣으면 Σk² 공식 → ★2 (2) 등차 조건을 a_3 = 7, a_7 = 15 처럼 두 항으로 주면 d 계산 한 단계 추가 ★1~2 (3) Σ_{k=1}^{n}(3a_k − 1) = 750 인 n 을 묻는 역방향 → 이차방정식 ★2."
```

```yaml
- id: RPM-ALG-1029
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{k=1}^{12} k + Σ_{k=2}^{12} k + Σ_{k=3}^{12} k + … + Σ_{k=12}^{12} k 의 값. 5지선다.
  category: "합의 순서 교환(각 k 가 k 번 등장) → Σ k² → 12·13·25/6"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "열두 개의 Σ 를 하나씩 계산하는 대신 세로로 세어 k 가 k 번 더해짐을 읽음(이중 합 순서 교환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이중 Σ 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 는 시작 첨자가 1~k 인 Σ 에만 들어 있으므로 k 번 더해지고 전체는 Σ_{k=1}^{12} k² = 650. 대안은 Σ_{m=1}^{12}(78 − m(m−1)/2) = 936 − (650 − 78)/2 = 650 으로 결과는 같지만 Σk³ 없이 Σk²·Σk 만 쓰는 정리가 필요. 등장 횟수 세기(RT d1)와 횟수 경계(T-경계)가 고비. 시험 구역 출발 ★2 · M_total 6 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "k 의 등장 횟수 = k → Σ k·k = Σ k² → 650"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 12 → 10·20, 더하는 식 k → 2k+1·k². 제약: 세로 세기 결과가 Σ k·f(k) 로 닫히고 Σk³ 까지만 쓰이도록 f 는 2차 이하."
    creative: "(1) Σ_{k=1}^{12} k + Σ_{k=1}^{11} k + … + Σ_{k=1}^{1} k 로 상한을 줄이는 형태면 등장 횟수가 13 − k → ★3 유지 (2) Σ_{m=1}^{n} Σ_{k=m}^{n} k 로 일반화하고 값이 주어질 때 n 을 묻기 → BW d1 추가 ★4 후보 (3) 항을 등비 2^k 로 바꾸면 세로 세기 후 Σ k·2^k(등차×등비) → 단원 밖 ★4."
```

```yaml
- id: RPM-ALG-1030
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(n) = n (n 짝수), 1 (n 홀수) 일 때 Σ_{k=1}^{20} f(k²) 의 값.
  category: "k² 홀짝 = k 홀짝 → 짝수 k 는 k², 홀수 k 는 1 → 4Σ_{j=1}^{10} j² + 10"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지·홀짝·주기 조건 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k² 의 홀짝은 k 의 홀짝과 같으므로 짝수 k = 2j 에서 f(k²) = 4j², 홀수 k 에서 1. 합은 4·385 + 10 = 1550. 홀짝 분기는 정의에 명시된 표준 분기이고 k = 2j 재색인과 홀수 항 10개 세기(T-경계)가 노동. 시험 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(k²): 짝수 k → k², 홀수 k → 1 → 4Σ_{j=1}^{10} j² + 10 = 1550"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1550$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 20 → 30(짝수 15개·홀수 15개), 홀수일 때 값 1 → 0·−n, f(k²) → f(k³). 제약: 짝수항 재색인 (2j)² = 4j² 로 Σj² 공식이 쓰이도록 유지하고, 상한이 홀수면 홀·짝 개수가 달라짐을 함정으로."
    creative: "(1) f 를 3 으로 나눈 나머지 기준(1022 골조)으로 바꾸면 주기 발견 PD d1 → ★2~3 (2) Σ f(k)·f(k+1) 처럼 이웃 항 곱이면 케이스가 늘어 MI d1 → ★3 (3) Σ_{k=1}^{n} f(k²) = 1550 인 n 을 묻는 역방향 → 홀짝 케이스 + 삼차식 → ★3~4."
```

```yaml
- id: RPM-ALG-1031
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y = x² + x 와 직선 y = nx + 2 의 두 교점 A, B 에 대해 직선 OA, OB 의 기울기를 a_n, b_n 이라 할 때 Σ_{n=1}^{18}(a_n + b_n) 의 값.
  category: "교점 방정식 x² + (1−n)x − 2 = 0 → 기울기 y/x = x + 1 → 근과 계수 → a_n + b_n = n + 1 → Σ"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점 (α, α²+α) 에 대한 기울기 OA 를 α + 1 로 약분해 기하량을 근의 식으로 바꿈"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_n + b_n = α + β + 2 를 이차방정식 근과 계수의 관계(α + β = n − 1)로 닫아 수열의 합으로 연결"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "그래프·도형에서 정의된 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점의 x 좌표 α, β 는 x² + (1−n)x − 2 = 0 의 두 근이고 αβ = −2 ≠ 0 이라 기울기는 (α²+α)/α = α + 1. 따라서 a_n + b_n = (α+β) + 2 = n + 1 이고 Σ_{n=1}^{18}(n+1) = 189. 기울기를 근의 식으로 바꾸는 RT 와 근과 계수의 관계를 끌어오는 XU 두 단계가 핵심이며 계산은 가볍다. 시험 구역 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "x² + (1−n)x − 2 = 0 의 근 α, β → 기울기 α+1, β+1 → 합 = (α+β) + 2 = n + 1 → Σ_{1}^{18}(n+1) = 189"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$189$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y = x² + x → x² + 2x·x² − 3x, 직선 y = nx + 2 → nx − 1, 상한 18 → 20. 제약: 상수항이 0 이 아니어야 αβ ≠ 0 으로 약분이 안전하고, 판별식 (1−n)² + 8 > 0 처럼 모든 자연수 n 에서 두 교점이 보장돼야 함."
    creative: "(1) 기울기 합 대신 곱 a_n b_n = αβ + (α+β) + 1 = n − 2 를 묻기(★3 유지) (2) 선분 AB 의 길이 제곱 (1+n²)((α−β)²) 처럼 판별식이 들어가면 계산 ★4 (3) 교점 대신 접선 조건을 넣으면 판별식 = 0 → 수열이 아니라 방정식 문항으로 성격 변화(★3)."
```

```yaml
- id: RPM-ALG-1032
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    수열 1, 2+4, 3+6+9, 4+8+12+16, … 의 첫째항부터 제8항까지의 합. 5지선다.
  category: "제k항 = k(1+2+…+k) = k²(k+1)/2 → Σ(k³ + k²)/2"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제k항이 k 의 배수 k개의 합 k·(1+…+k) = k²(k+1)/2 임을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제k항을 찾아 Σ로 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제k항은 k 의 배수를 k개 더한 k·k(k+1)/2 = (k³ + k²)/2 이고 Σ_{k=1}^{8} = (1296 + 204)/2 = 750. 제k항 발견(PD d1) 뒤 Σk³·Σk² 공식 계산이 노동. 항이 k 만으로 닫혀 유형 UP 12(n 포함)보다 한 단계 가볍다. 시험 구역 출발 ★2 · M_total 5 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "제k항 k·k(k+1)/2 → (Σk³ + Σk²)/2 → (1296 + 204)/2 = 750"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 8 → 10, 배수 구조 k·(1+…+k) → k·(1+3+…+(2k−1)) = k³. 제약: Σk³ = (Σk)² 계산이 네 자리 이내이고 선택지 오답은 Σk² 만 쓰거나 1/2 를 빠뜨린 값으로."
    creative: "(1) 제k항을 k+2k+…+k² 처럼 항 수 k 인 등차합으로 바꾸면 발견이 한 단계 더 → PD d1 ★3 (2) 제8항까지의 합이 아니라 「제k항이 처음으로 1000 을 넘는 k」 → BW d1 ★3 (3) 각 항을 군으로 풀어 제30항까지 낱개 항의 합(군수열 결합 · 1016 골조) → ★3~4."
```

```yaml
- id: RPM-ALG-1033
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{k=1}^{n}(4k−3)/a_k = 2n² + 7n 일 때 a_5 × a_7 × a_9 = q/p (서로소) 의 p + q.
  category: "덩어리 b_k = (4k−3)/a_k 의 부분합 → b_n = S_n − S_{n−1} = 4n + 5 → a_n = (4n−3)/(4n+5) → 곱 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Σ 의 일반항을 (4k−3)/a_k 라는 한 덩어리로 보고 부분합 관계를 적용해 a_n 을 역으로 풂"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Σ와 부분합 S_n의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b_n = (2n²+7n) − (2(n−1)²+7(n−1)) = 4n + 5 (n ≥ 2) 이고 b_1 = 9 도 맞으므로 a_n = (4n−3)/(4n+5). a_5·a_7·a_9 = (17/25)(25/33)(33/41) = 17/41 로 중간 인수가 약분돼 p + q = 58. 덩어리를 일반항으로 보는 EQV d1 과 n = 1 확인(T-경계)이 고비. 시험 구역 출발 ★2 · 평가원 기출 · M_total 6 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "b_n = S_n − S_{n−1} = 4n + 5 → a_n = (4n−3)/(4n+5) → a_5 a_7 a_9 = 17/41 → 58"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$58$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 4k−3 → 2k+1, 부분합 2n²+7n → 3n²+2n, 곱하는 첨자 5·7·9 → 2 칸 간격 유지. 제약: b_n 의 분모·분자가 같은 공차라 이웃 약분이 일어나려면 분자 ak+b 와 b_n = a'n+b' 의 공차가 같아야 하고(4 와 4), n = 1 에서 b_1 = S_1 이 성립하도록 상수항을 맞출 것."
    creative: "(1) 곱 대신 Σ_{k=1}^{10} a_k 처럼 합을 물으면 약분이 없어 부분분수 ★3~4 (2) 부분합을 n = 1 에서 일반항과 어긋나게(예 2n²+7n+1) 주면 a_1 예외 처리 T-경계 강화 ★3 (3) 덩어리를 a_k·(k+1) 로 두고 a_k 의 합 → 부분분수 결합 ★4 후보."
```

```yaml
- id: RPM-ALG-1034
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{n=1}^{5}(Σ_{k=1}^{n} 2^{k+n−1}) 의 값.
  category: "안쪽 Σ 에서 2^{n−1} 상수 → 등비합 2^{n−1}(2^{n+1} − 2) = 4^n − 2^n → 바깥 Σ 두 등비합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 Σ 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{k+n−1} = 2^{n−1}·2^k 이므로 안쪽 합은 2^{n−1}(2^{n+1} − 2) = 4^n − 2^n. 바깥 합은 (4 + 16 + 64 + 256 + 1024) − (2 + 4 + 8 + 16 + 32) = 1364 − 62 = 1302. 지수 분리(T-표기)와 등비합 두 번의 계산이 노동이며 발견 요소는 없다. 시험 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2^{k+n−1} = 2^{n−1}·2^k → 안쪽 Σ = 4^n − 2^n → Σ_{n=1}^{5} = 1364 − 62 = 1302"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1302$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 → 3(3^{k+n−1} → (9^n − 3^n)/2), 상한 5 → 4·6, 지수 k+n−1 → k+n. 제약: 4^n 합이 다섯 자리 이내이고 답이 정수."
    creative: "(1) 안쪽 상한을 n 대신 2n 으로 두면 안쪽 합이 4^n·(…) 로 바뀌어 지수 정리 한 단계 추가 ★3 (2) 2^{k+n−1} 대신 2^{k−n} 로 주면 안쪽이 감소 등비 → 분수 처리 ★3 (3) Σ_{n=1}^{m}(…) = 1302 인 m 을 묻는 역방향은 지수 방정식 탐색 → ★3."
```

```yaml
- id: RPM-ALG-1035
  page: 140
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1/(1×4) + 1/(4×7) + 1/(7×10) + … + 1/(28×31) 의 값. 5지선다.
  category: "제k항 1/((3k−2)(3k+1)) → 부분분수 (1/3)(1/(3k−2) − 1/(3k+1)) → 망원 → (1/3)(1 − 1/31)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해를 이용한 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 인수가 3 씩 차이 나므로 1/((3k−2)(3k+1)) = (1/3)(1/(3k−2) − 1/(3k+1)). 항 수 10 (28 = 3·10 − 2) 이고 망원 뒤 (1/3)(1 − 1/31) = 10/31. 부분분수는 이 유형의 표준 절차이며 1/3 배와 항 수 세기(T-경계)만 조심. 시험 구역 출발 ★2 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "1/((3k−2)(3k+1)) = (1/3)(1/(3k−2) − 1/(3k+1)) → 망원 → (1/3)(1 − 1/31) = 10/31"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차 3 → 2·4(1/((2k−1)(2k+1)) 등), 마지막 항 28×31 → 다른 끝. 제약: 끝 인수가 3k+1 꼴에 맞아 항 수가 정수로 확정되고 선택지 오답은 1/3 배 누락·항 수 ±1 값으로."
    creative: "(1) 분모 인수 간격을 두 칸(1/(k(k+2)))으로 두면 남는 항이 넷 → EQV d1 ★3 (2) 합이 특정 값(예 10/31)이 되는 마지막 항 번호를 묻는 역방향 → 방정식 ★2~3 (3) 분모를 세 인수 1/(k(k+1)(k+2)) 로 올리면 차의 부분분수 → ★3."
```

```yaml
- id: RPM-ALG-1036
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_n = Σ_{k=1}^{n} k²/3 일 때 Σ_{k=1}^{17}(2k+1)/a_k 의 값. 5지선다.
  category: "a_n = n(n+1)(2n+1)/18 → (2k+1)/a_k = 18/(k(k+1)) → 부분분수 → 망원 18(1 − 1/18)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해를 이용한 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_k 를 닫힌꼴로 쓰면 분자 2k+1 이 약분되어 18/(k(k+1)) = 18(1/k − 1/(k+1)). Σ_{1}^{17} = 18(1 − 1/18) = 17. 약분 설계가 뻔히 보이도록 분자를 맞춰 두었고 부분분수·망원은 표준. 상한 17 과 1/18 의 경계(T-경계)만 주의. 시험 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_k = k(k+1)(2k+1)/18 → (2k+1)/a_k = 18(1/k − 1/(k+1)) → 18(1 − 1/18) = 17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/3 → 1/6(a_n = n(n+1)(2n+1)/36 → 계수 36), 상한 17 → 11·23, 분자 2k+1 → 유지(약분 설계). 제약: 답이 정수가 되려면 계수 c 와 상한 m 에 대해 c(1 − 1/(m+1)) 이 정수."
    creative: "(1) a_n = Σk(k+1) 로 바꾸면 a_n = n(n+1)(n+2)/3, 분자 3 을 주면 두 인수 부분분수 → EQV d1 ★3 (2) 분자를 (2k+1)² 처럼 약분이 반만 되게 하면 다항식 + 부분분수 → ★3 (3) Σ_{k=1}^{n}(2k+1)/a_k = 17 인 n 을 묻는 역방향 ★2."
```

```yaml
- id: RPM-ALG-1037
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x) = √(x+2) + √(x+3) 일 때 Σ_{k=1}^{n} 1/f(k) = 3√3 이 되도록 하는 자연수 n.
  category: "유리화 1/f(k) = √(k+3) − √(k+2) → 망원 √(n+3) − √3 = 3√3 → n + 3 = 48"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화를 이용한 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 유리화하면 √(k+3) − √(k+2) 로 망원되어 합은 √(n+3) − √3. 이것이 3√3 이면 √(n+3) = 4√3 = √48, n = 45. 유리화·망원은 이 유형의 표준이며 4√3 을 √48 로 바꾸는 표기(T-표기)만 함정. 시험 구역 출발 ★2 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "1/(√(k+2)+√(k+3)) = √(k+3) − √(k+2) → √(n+3) − √3 = 3√3 → n = 45"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√(x+2)+√(x+3) → √(x+1)+√(x+2)·√(2x+1)+√(2x+3)(간격 2 → 1/2 배), 목표 3√3 → 2√3·5. 제약: √(n+3) 이 √3 의 정수 배(또는 정수)로 떨어져 n 이 자연수."
    creative: "(1) 근호 간격을 두 칸(√(k+1)+√(k+3))으로 두면 남는 항 넷 → EQV d1 ★3 (2) Σ 1/f(k) ≥ 10 을 만족시키는 n 의 최솟값 → 부등식·정수 최소 → ★3 (3) 1038 처럼 f 를 도형 넓이로 감싸면 RT d1 → ★3."
```

```yaml
- id: RPM-ALG-1038
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y = √(−2x) 위의 점 A_n(x = −n), B_n(x = −n+1) 과 x축 위 수선의 발 C_n, D_n 이 이루는 사각형의 넓이 S_n 에 대해 Σ_{n=2}^{50} 1/S_n 의 값. 그림 있음.
  category: "사다리꼴 S_n = (√(2n) + √(2n−2))/2 → 1/S_n 유리화 = √(2n) − √(2n−2) → 망원 √100 − √2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 사각형을 높이 1·두 밑변 √(2n), √(2n−2) 인 사다리꼴로 읽어 S_n 을 닫힌 식으로 대수화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프·도형에서 정의된 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A_n(−n, √(2n)), B_n(−n+1, √(2n−2)) 이므로 S_n = (√(2n) + √(2n−2))·1/2. 역수를 유리화하면 2/(√(2n)+√(2n−2)) = √(2n) − √(2n−2) 로 망원되어 Σ_{n=2}^{50} = √100 − √2 = 10 − √2. 그림을 사다리꼴 식으로 옮기는 RT d1 이 핵심이고 뒤는 1037 과 같은 표준. 하한 n = 2 에서 남는 √2(T-경계) 주의. 시험 구역 출발 ★2 · M_total 6 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "S_n = (√(2n) + √(2n−2))/2 → 1/S_n = √(2n) − √(2n−2) → Σ_{2}^{50} = 10 − √2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10-\sqrt{2}$'
  answer_source: "답지"
  figure: crop:fig-1038.png
  latex: latex-bank/rpm-alg/items/1038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y = √(−2x) → √(−x)·√(−3x), 상한 50 → 32·72, 하한 2 → 3. 제약: 상한에서 √(2·상한) 이 정수(2·50 = 100)로 떨어지고 그림 라벨(A_n, B_n, C_n, D_n · x = −n, −n+1)은 고정."
    creative: "(1) 사각형 넓이 대신 삼각형 OA_nB_n 의 넓이로 바꾸면 밑변·높이 읽기 → RT d1 유지 ★3 (2) 직선 간격을 2(x = −n, −n+2)로 두면 두 칸 망원 → EQV d1 추가 ★4 후보 (3) Σ 1/S_n 이 처음으로 9 를 넘는 n 을 묻는 역방향 → ★3~4."
```

```yaml
- id: RPM-ALG-1039
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    Σ_{k=1}^{n} log(1 + 2/k) = 1 을 만족시키는 자연수 n.
  category: "log 의 합 → 곱의 log Π(k+2)/k → 두 칸 망원 곱 (n+1)(n+2)/2 → = 10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Σ log 를 log Π 로 옮기고 (k+2)/k 의 두 칸 간격 망원 곱에서 (n+1)(n+2)/(1·2) 만 남김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그가 포함된 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 + 2/k = (k+2)/k 이므로 합은 log[(3/1)(4/2)(5/3)…((n+2)/n)] = log[(n+1)(n+2)/2]. 이것이 1 이면 (n+1)(n+2) = 20, n = 3. 합을 곱으로 바꾸는 RT d1 과 두 칸 간격 망원에서 남는 항(T-경계)이 고비. 시험 구역 출발 ★2 · M_total 5 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "Σ log((k+2)/k) = log[(n+1)(n+2)/2] = 1 → (n+1)(n+2) = 20 → n = 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1 + 2/k → 1 + 1/k(한 칸 망원 · n+1 = 10)·1 + 3/k(세 칸), 우변 1 → 2·log 6. 제약: 남는 곱이 10 의 거듭제곱(또는 우변에 맞는 값)이 되는 자연수 n 이 존재해야 함."
    creative: "(1) log_2(1 + 1/k) 로 밑을 바꾸고 우변 3 을 주면 n + 1 = 8 → ★2 (2) Σ log(k+1)/k · log(k+2)/(k+1) 처럼 곱 안의 곱이면 EQV d2 ★3 (3) 1050 처럼 약수·부호를 섞으면 XU 후보 ★4."
```

```yaml
- id: RPM-ALG-1040
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (1 + 1/n)² + (1 + 2/n)² + … + (1 + n/n)² 을 n 에 대한 식으로 간단히 나타내기. 5지선다.
  category: "제k항 (1 + k/n)² → 전개 1 + 2k/n + k²/n² → Σ 공식 → 통분·인수분해"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제k항이 n에 대한 식일 때의 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제k항 (1 + k/n)² 과 항 수 n 이 발문에 그대로 보이므로 발견 없이 전개 → n + (n+1) + (n+1)(2n+1)/(6n) = (14n² + 9n + 1)/(6n) = (2n+1)(7n+1)/(6n). 통분과 인수분해 정리가 노동. 1014 와 같은 골조지만 제k항이 명시돼 한 단계 가볍다. 시험 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "제k항 (1 + k/n)² → n + 2(n+1)/2·… → (14n² + 9n + 1)/(6n) = (2n+1)(7n+1)/(6n)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1 + k/n)² → (2 + k/n)²·(1 − k/n)², 마지막 항 n/n → 2n/n(항 수 2n). 제약: 통분 결과가 두 일차식의 곱으로 인수분해되도록 계수를 맞추고 선택지 오답은 분모 3n·인수 (n+2) 혼동값으로."
    creative: "(1) 제k항을 (1 + k/n)³ 으로 올리면 Σk³ 등장 → 계산 ★3 (2) 값이 주어지고 n 을 묻는 역방향은 이차방정식 정수해 ★3 (3) 항을 (1 + (2k−1)/n)² 처럼 홀수로 두면 제k항 발견 PD d1 → ★3."
```

```yaml
- id: RPM-ALG-1041
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    수열 1/1, 1/2, 2/1, 1/3, 2/2, 3/1, 1/4, 2/3, 3/2, 4/1, … 의 제70항.
  category: "군 규칙(제m군: 분자+분모 = m+1 · 분자 1~m 오름 · m개) → 누적 66 → 12군 4번째 → 4/9"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자와 분모의 합이 군마다 일정(m+1)하고 분자가 1 부터 오름차순임을 발견해 군을 끊음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "군수열의 제k항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제m군은 분자+분모 = m+1 인 m개 항이고 분자가 1 부터 커진다. Σ_{m=1}^{11} m = 66 이므로 제70항은 제12군 4번째 = 4/(13 − 4) = 4/9. 합 일정 규칙 발견(PD d1)과 군 내 방향(분자 오름·분모 내림 · T-표기)이 고비이며 계산은 가볍다. 시험 구역 출발 ★2 · M_total 5 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "군 규칙(분자+분모 = m+1 · m개) → 66 < 70 ≤ 78 → 12군 4번째 → 4/9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제70항 → 제50·100항, 군 내 방향을 분자 내림(1018 과 반대)으로. 제약: 구하는 번호가 삼각수 경계에 걸리면 함정으로 명시하고, 답은 약분하지 않은 형태(4/9 는 기약)로 확인."
    creative: "(1) 5/8 이 제몇 항인지 묻는 역방향(군 12 · 5번째 → 71 · ★2) (2) 제70항까지의 합(군별 합 = (m+1)·H_m 꼴이라 닫히지 않음 → 출제 부적합) 대신 「값이 1 인 항이 제70항까지 몇 개」(홀수 군마다 하나 · PD d2 ★3) (3) 순서쌍 (분자, 분모) 로 표기하면 1019 골조와 통합 가능."
```

```yaml
- id: RPM-ALG-1042
  page: 141
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    격자 배열(1행 1, 2, 3, 4, … · 2행 1, 3, 5, 7, … · 3행 1, 4, 7, 10, … · 4행 1, 5, 9, 13, …)에서 위에서 50번째 줄과 왼쪽에서 30번째 줄이 만나는 수. 그림 있음.
  category: "i 행은 첫항 1·공차 i 인 등차수열 → (i, j) 성분 = 1 + i(j−1) → 1 + 50·29"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "행마다 첫항 1·공차가 행 번호인 등차수열이라는 규칙을 표에서 읽어 (i, j) 성분 1 + i(j−1) 로 일반화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표 배열의 규칙과 항 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    i 행은 1, 1+i, 1+2i, … 이므로 j 열 성분은 1 + i(j−1). 50행 30열은 1 + 50·29 = 1451. 규칙 읽기(PD d1)와 (j−1) 의 경계(T-경계)뿐. 열 기준(j 열은 첫항 j·공차 j−1)으로 읽어도 같다. 시험 구역 출발 ★2 · M_total 4 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "i 행 = 등차(첫항 1 · 공차 i) → (50, 30) 성분 = 1 + 50·29 = 1451"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1451$'
  answer_source: "답지"
  figure: crop:fig-1042.png
  latex: latex-bank/rpm-alg/items/1042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "50번째·30번째 → 다른 위치, 배열 규칙 1 + i(j−1) → i + (i+1)(j−1)·i·j(곱셈표). 제약: 그림의 4×4 표를 규칙에 맞게 다시 그려야 하며 첫 열이 모두 1 인 구조를 바꾸면 그림 라벨 재작성 필요."
    creative: "(1) 50행의 1열부터 30열까지의 합(등차합 · ★2) (2) 대각선 성분 (i, i) 의 일반항 1 + i(i−1) 과 Σ → ★3 (3) 어떤 수 1451 이 표에서 몇 번 나타나는지 (1450 의 약수 쌍 세기 · 정수론 결합 XU) → ★4."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-1043
  page: 142
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    1×3 + 3×5 + 5×7 + … + 19×21 의 값.
  category: "제k항 (2k−1)(2k+1) = 4k² − 1 · 항 수 10 → 4Σk² − 10"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제k항을 찾아 Σ로 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃한 홀수의 곱이므로 제k항 (2k−1)(2k+1) = 4k² − 1, 19 = 2·10 − 1 에서 항 수 10. 4·385 − 10 = 1530. 제k항 읽기·전개·Σk² 공식 세 줄이며 항 수 세기(T-경계)만 함정. 서술형 구역 출발 ★3 이나 통찰 0 · M_total 4 → −1 → ★2.
  tier: star_2
  mechanism_primary: "제k항 (2k−1)(2k+1) = 4k² − 1 → 4·385 − 10 = 1530"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1530$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "마지막 항 19×21 → 29×31(15항), 인수 간격 2 → 3(1×4 + 4×7 + … → (3k−2)(3k+1)), 세 인수 곱 1×3×5 + 3×5×7 + … 으로 확장. 제약: 항 수가 마지막 항에서 정수로 확정되고 Σk²·Σk³ 공식 안에서 닫힘."
    creative: "(1) 부호를 교대로(1×3 − 3×5 + …) 주면 짝 묶음 → EQV d1 ★3 (2) 1/(1×3) + 1/(3×5) + … 로 역수를 취하면 부분분수 유형으로 전환(★2) (3) 합이 특정 값이 되는 마지막 홀수를 묻는 역방향 → 삼차식 정수해 ★3."
```

```yaml
- id: RPM-ALG-1044
  page: 142
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    Σ_{m=1}^{n}{Σ_{k=1}^{m}(k+m)} = 90 을 만족시키는 자연수 n.
  category: "안쪽 Σ (m 상수) = m(m+1)/2 + m² → 바깥 Σ(3m²+m)/2 = n(n+1)²/2 → n(n+1)² = 180 → n = 5"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 Σ 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    안쪽에서 m 은 상수이므로 Σ_{k=1}^{m}(k+m) = m(m+1)/2 + m² = (3m² + m)/2. 바깥 합은 (1/2)[3·n(n+1)(2n+1)/6 + n(n+1)/2] = n(n+1)²/2 이고 이것이 90 이면 n(n+1)² = 180 = 5·36, n = 5. 이중 Σ 의 표준 절차이며 인수분해 정리와 정수해 탐색이 노동, 안쪽 Σ 에서 m 을 상수로 두는 표기(T-표기)가 함정. 서술형 구역 출발 ★3 · 통찰 0 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "안쪽 Σ = (3m² + m)/2 → 바깥 Σ = n(n+1)²/2 = 90 → n(n+1)² = 180 → n = 5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 항 k+m → 2k+m·k·m, 우변 90 → n(n+1)²/2 의 다른 값(n = 4 → 50, n = 6 → 147). 제약: 바깥 합이 인수분해되는 꼴로 닫히고 우변이 그 값 중 하나여야 자연수 해가 유일."
    creative: "(1) 안쪽 상한을 m 대신 n−m+1 로 두면 대칭 구조 → SYM 후보 ★4 (2) Σ_{m=1}^{n} Σ_{k=m}^{n}(k+m) 처럼 하한을 m 으로 두면 등장 횟수 세기(1029 골조) RT d1 → ★4 (3) 값 대신 「90 이하가 되는 n 의 최댓값」으로 바꾸면 부등식·정수 최대 ★3."
```

```yaml
- id: RPM-ALG-1045
  page: 142
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    Σ_{k=1}^{n} a_k = n² + 4n 일 때 Σ_{k=1}^{p} 1/(a_k a_{k+1}) = 2/25 를 만족시키는 자연수 p.
  category: "S_n → a_n = 2n + 3 → 1/((2k+3)(2k+5)) 부분분수 → 망원 (1/2)(1/5 − 1/(2p+5)) = 2/25 → p = 10"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해를 이용한 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n = S_n − S_{n−1} = 2n + 3 (a_1 = 5 도 일치). 1/(a_k a_{k+1}) = (1/2)(1/(2k+3) − 1/(2k+5)) 이므로 합은 (1/2)(1/5 − 1/(2p+5)) 이고 2/25 와 같으려면 1/(2p+5) = 1/25, p = 10. 부분합→일반항, 부분분수, 방정식의 표준 사슬 두 개를 이은 절차형이며 n = 1 확인과 1/2 배(T-경계)가 함정. 서술형 구역 출발 ★3 · 통찰 0 · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a_n = 2n + 3 → (1/2)Σ(1/(2k+3) − 1/(2k+5)) = (1/2)(1/5 − 1/(2p+5)) = 2/25 → p = 10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n = n² + 4n → n² + 2n·2n² + n, 우변 2/25 → (1/2)(1/5 − 1/(2p+5)) 의 다른 값. 제약: a_n 이 등차(부분합이 이차식·상수항 0)여야 부분분수가 닫히고, 우변에서 2p + 5 가 홀수 정수로 떨어져야 함."
    creative: "(1) S_n 에 상수항을 넣어(n² + 4n + 1) a_1 만 어긋나게 하면 첫 항 예외 처리 → EQV d1 ★3~4 (2) 1/(a_k a_{k+2}) 처럼 두 칸 간격으로 두면 남는 항 넷 → ★4 (3) Σ 1/(√a_k + √a_{k+1}) 로 바꾸면 1046 유리화 골조로 전환 ★3."
```

```yaml
- id: RPM-ALG-1046
  page: 142
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    첫째항과 공차가 모두 2 인 등차수열에 대하여 Σ_{k=1}^{15} 1/(√a_k + √a_{k+1}) 의 값.
  category: "a_k = 2k → 유리화 (√(2k+2) − √(2k))/2 → 망원 (√32 − √2)/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화를 이용한 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_k = 2k 이므로 1/(√(2k) + √(2k+2)) = (√(2k+2) − √(2k))/2 (분모 차가 공차 2). 망원하면 (√32 − √2)/2 = (4√2 − √2)/2 = 3√2/2. 유리화·망원의 표준이며 공차 2 로 나누는 것과 √32 = 4√2 정리(T-경계)가 함정. 서술형 구역 출발 ★3 이나 통찰 0 · M_total 5 → −1 → ★2.
  tier: star_2
  mechanism_primary: "a_k = 2k → 1/(√(2k)+√(2k+2)) = (√(2k+2) − √(2k))/2 → (√32 − √2)/2 = 3√2/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차 2 → 3·3(a_k = 3k · 분모 차 3), 상한 15 → 24·48. 제약: √(a_{상한+1}) 이 √(첫째항) 의 유리수 배로 정리되어 답이 한 항으로 닫히도록(2·16 = 32 = 16·2)."
    creative: "(1) 합이 5√2 이상이 되는 n 의 최솟값(부등식 · ★3) (2) 분모를 √a_k + √a_{k+2} 로 두면 두 칸 망원 → EQV d1 ★3 (3) 등차 조건을 a_3 = 6, a_7 = 14 처럼 두 항으로 주면 d 계산 단계 추가 ★2~3."
```

### 실력 Up

```yaml
- id: RPM-ALG-1047
  page: 142
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    x_1, …, x_10 이 각각 0, 1, 2 중 하나이고 Σx_k = 8, Σx_k² = 12 일 때 Σ|x_k − 1| 의 값. 5지선다.
  category: "값별 개수 p, q, r 로 재표현 → p+q+r = 10, q+2r = 8, q+4r = 12 → r = 2, q = 4, p = 4 → Σ|x−1| = p + r"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "열 개의 미지 항 대신 값 0, 1, 2 의 개수 p, q, r 로 두 Σ 조건과 목표 Σ|x_k − 1| 을 모두 개수 세기로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "값의 개수로 세는 Σ 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각 x_k 는 셋 중 하나이므로 0, 1, 2 의 개수를 p, q, r 로 두면 Σx = q + 2r = 8, Σx² = q + 4r = 12 에서 r = 2, q = 4, p = 4. |x_k − 1| 은 0 과 2 에서 1, 1 에서 0 이므로 합은 p + r = 6. 항을 개수로 바꾸는 RT d2 한 방이 전부이고 연립은 가볍다. 실력 Up 출발 ★4 · M_total 5 · 통찰 1(d2) → ★4 유지. [분류 이슈] 통찰 하나에 M_total 5 라 ★3 도 가능 — 라벨은 벤더 ★4 유지.
  tier: star_4
  mechanism_primary: "값별 개수 (p, q, r) → q + 2r = 8, q + 4r = 12 → (4, 4, 2) → Σ|x_k − 1| = p + r = 6"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 10 → 12, Σx·Σx² 값 → (p, q, r) 이 음이 아닌 정수가 되는 조합만(q + 2r = A, q + 4r = B 에서 r = (B−A)/2 정수 · q ≥ 0 · p = n − q − r ≥ 0), 목표 Σ|x_k − 1| → Σ(x_k − 1)²·Σx_k³. 제약: 값 집합 {0, 1, 2} 를 바꾸면 |x − 1| 의 대응표를 다시 세울 것."
    creative: "(1) 값 집합을 {−1, 0, 1} 로 바꾸면 Σx 만으로 부호 개수 차가 결정돼 조건 하나가 남는 여유 → 설계 주의(★3) (2) 조건을 Σx = 8 하나만 주고 Σx² 의 최댓값을 묻기(2 의 개수 최대 → 최적화 · BW d1 추가 ★4~5 후보) (3) 값 집합 넷({0, 1, 2, 3})이면 미지 개수 넷에 조건 셋 → 정수해 탐색 VF d1 추가 ★5 후보."
```

```yaml
- id: RPM-ALG-1048
  page: 142
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    등차수열에서 a_2 = 8, a_6 = 0 이고 S_n = Σ_{k=1}^{n}|a_k| 일 때 S_n ≥ 120 이 되도록 하는 자연수 n 의 최솟값.
  category: "a_n = 12 − 2n → 부호 경계 n = 6 → n ≥ 7 에서 S_n = 2T_6 − T_n = n² − 11n + 60 → ≥ 120 → n ≥ 15"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "n ≥ 7 에서 절댓값 합을 음수 구간을 따로 더하지 않고 2·(양수 구간 합 T_6) − T_n 으로 재표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열 절댓값의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    d = −2, a_n = 12 − 2n 이므로 a_6 = 0 을 경계로 n ≤ 6 은 양수(합 최대 T_6 = 30 < 120 → 기각), n ≥ 7 은 음수. 부호를 뒤집은 합은 S_n = 2T_6 − T_n = 60 − n(11 − n) = n² − 11n + 60 이고 ≥ 120 ⇔ (n − 15)(n + 4) ≥ 0, n ≥ 15 (n = 15 에서 등호 성립). 절댓값 구간 분리(T-부호)·등호 경계(T-경계)와 이차부등식이 노동이고 2T_6 − T_n 재표현(EQV d1)이 계산을 줄인다. 실력 Up 출발 ★4 · M_total 7 · 통찰 1 → ★4 유지. [분류 이슈] 절댓값 합은 08 단원 표준 유형이라 절차 비중이 크며 ★3 후보 — 라벨은 벤더 ★4 유지.
  tier: star_4
  mechanism_primary: "a_n = 12 − 2n → n ≥ 7: S_n = 2T_6 − T_n = n² − 11n + 60 ≥ 120 → (n−15)(n+4) ≥ 0 → n = 15"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_2 = 8, a_6 = 0 → 다른 두 항(어떤 항이 정확히 0 이거나 부호가 바뀌는 경계가 정수 사이), 120 → n² − 11n + 60 이 정수 n 에서 넘는 다른 값(102·150). 제약: 부등식이 인수분해되거나 판별식이 완전제곱이 되게 우변을 고르고, 양수 구간 최대 합이 우변보다 작아 n ≥ 7 분기만 살아남도록 유지."
    creative: "(1) a_6 ≠ 0 인 설정(a_2 = 9, a_6 = 1 → 경계 항이 0 이 아님)으로 바꾸면 부호 경계 판정이 한 단계 더 → ★4 유지 (2) S_n = 120 인 n 의 존재 여부(등호 성립 검증 VF d1) → ★4 (3) Σ|a_k| 대신 Σ|a_k − a_{k+1}| 처럼 이웃 차의 절댓값이면 상수 → ★2 로 하락."
```

```yaml
- id: RPM-ALG-1049
  page: 142
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    0 ≤ x < 1 에서 f(x) = 1 (x = 0), 5 (0 < x < 1) 이고 f(x+1) = f(x) 인 함수에 대하여 Σ_{k=1}^{25} k·f(√k)/5 의 값.
  category: "주기 1 + 구간 정의 → f(x) = 1 (x 정수), 5 (그 외) → √k 정수 ⇔ k 완전제곱 → 합 = Σk − 제곱수 합 + 제곱수 합/5"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+1) = f(x) 와 [0, 1) 의 정의를 합쳐 f 를 「x 가 정수이면 1, 아니면 5」로 동치 변환"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(√k) 의 조건을 k 가 완전제곱수인지로 옮겨 합을 제곱수 항과 비제곱수 항으로 분리"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "나머지·홀짝·주기 조건 수열의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    주기 1 이므로 f(x) 는 x 가 정수일 때만 1, 나머지 5. √k 가 정수인 k = 1, 4, 9, 16, 25 에서 k·f/5 = k/5, 나머지 스무 개 k 에서 k. 합 = (325 − 55) + 55/5 = 270 + 11 = 281. 주기 조건을 정수 판별로 바꾸는 EQV 와 √k 정수 ⇔ 완전제곱수로 합을 가르는 RT 두 단계가 핵심이고 계산은 가볍다. 25 를 완전제곱수에 포함하는 T-범위 주의. 실력 Up 출발 ★4 · M_total 6 · 통찰 2 → ★4.
  tier: star_4
  mechanism_primary: "f(x) = 1 ⇔ x ∈ ℤ → √k ∈ ℤ ⇔ k 완전제곱 → (325 − 55) + 55/5 = 281"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$281$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 25 → 36·30(완전제곱수 개수 변화), 함수값 1·5 → 1·3(나누는 수도 3 으로), √k → ∛k(세제곱수 1, 8, 27). 제약: 나누는 수를 비정수 구간의 함수값과 같게 두어 비제곱수 항이 k 로 닫히게 하고, 상한이 완전제곱수인지에 따른 경계 포함을 확인."
    creative: "(1) f(√k) 대신 f(k/3) 로 주면 3 의 배수 판별 → 1022 골조와 결합 ★3 (2) f(log_2 k) 로 바꾸면 2 의 거듭제곱 판별 + 로그 → XU 후보 ★4~5 (3) Σ f(√k) = 100 이 되는 n 을 묻는 역방향(제곱수 개수 [√n] 이 들어간 부등식 · BW d2) → ★5 후보."
```

```yaml
- id: RPM-ALG-1050
  page: 142
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    f(n) 을 n 의 양의 약수의 개수, 100 의 양의 약수를 a_1, …, a_9 라 할 때 Σ_{k=1}^{9}{(−1)^{f(a_k)} × log a_k} 의 값.
  category: "약수 개수 홀수 ⇔ 완전제곱수 → 부호 배정(1, 4, 25, 100 이 −) → Σ log = log Π → log(10^5) − log(10^4)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(−1)^{f(a)} 의 부호를 「약수 개수가 홀수 ⇔ a 가 완전제곱수」라는 정수론 사실로 동치 변환해 아홉 약수를 두 묶음으로 나눔"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "±log 의 합을 곱의 로그 log(비제곱수 곱 / 제곱수 곱) 로 옮겨 10 의 거듭제곱으로 정리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그가 포함된 수열의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    100 = 2²·5² 의 약수 아홉 개 중 완전제곱수 1, 4, 25, 100 은 약수 개수가 홀수라 부호 −, 나머지 2, 5, 10, 20, 50 은 +. 합 = log(2·5·10·20·50) − log(1·4·25·100) = log 10^5 − log 10^4 = 1. 약수 짝 d·(100/d) = 100 대칭으로 전체 log 합 9 를 먼저 얻고 제곱수 합 4 의 두 배를 빼도 같다. 부호 판별의 정수론 동치 변환(EQV d2)과 합→곱 전환(RT d1)이 핵심. 1 을 완전제곱수에 넣는 T-부호 주의. 실력 Up 출발 ★4 · M_total 7 · 통찰 2 → ★4. [분류 이슈] 약수 개수(정수론)·로그 성질·Σ 의 결합을 XU 로 볼지 EQV+RT 로 볼지 카탈로그 설계 때 결정 — 라벨 ★4 는 같음.
  tier: star_4
  mechanism_primary: "f(a) 홀수 ⇔ a 완전제곱 → 부호 배정 → log(2·5·10·20·50) − log(1·4·25·100) = 5 − 4 = 1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "100 → 36 (= 2²·3², 약수 9개 · 제곱수 1, 4, 9, 36)·400·1000(약수 16개 · 제곱수 1, 4, 25, 100), log → log_2·log_6. 제약: 약수 곱이 밑의 거듭제곱으로 떨어지도록 밑과 수를 맞추고(100 과 상용로그), 약수 개수와 제곱수 목록을 다시 셀 것."
    creative: "(1) (−1)^{f(a_k)} 대신 (−1)^{a_k} 로 두면 홀짝 판별로 하락 → ★3 (2) 약수의 개수 f(a_k) 자체의 합 Σ f(a_k) 를 묻기(약수의 약수 개수 · 정수론 PD) → ★4 (3) 100 의 약수 대신 「n 의 약수 합이 …」 처럼 n 을 구하는 역방향 BW d2 + VF → ★5 후보."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 3 · ★2 19 · ★3 12 · ★4 4 · ★5 0
- 통찰형 14 · 절차형 24 · premium 0 (insight_count ≥ 1 인 블록은 22 — ★2 이하에서 depth 1 통찰 하나뿐인 8문은 절차형으로 둠)
- type_hint 상위: 「군수열의 제k항」 5 · 「제k항이 n에 대한 식일 때의 수열의 합」 4 · 「Σ와 부분합 S_n의 관계」 3 · 「Σ의 성질(선형성·범위 분할)」 3 · 「등차·등비수열의 Σ 계산」 3 · 「이중 Σ 계산」 3 · 「부분분수 분해를 이용한 수열의 합」 3 · 「나머지·홀짝·주기 조건 수열의 합」 3 · 그 외(분모 유리화 2 · 그래프·도형 2 · 로그 2 · 제k항을 찾아 Σ 2 · 표 배열 1 · 값의 개수 1 · 등차 절댓값 합 1)
- 통찰 유형: PD 9 · EQV 7 · RT 7 · XU 1 · CON 1 (단계 수 기준 25)
- 그림: 2문(`crop:fig-1038.png` · `crop:fig-1042.png`)
- 구역별: 유형 UP 12 (3문) ★3 ×3 · 유형 UP 13 (4문) ★2 ×2 ★3 ×2 · 시험에 꼭 나오는 문제 (23문) ★1 ×3 ★2 ×15 ★3 ×5 · 서술형 주관식 (4문) ★2 ×2 ★3 ×2 · 실력 Up (4문) ★4 ×4
- 전사 답 확인 필요: 없음(38문 모두 풀이 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-1016 | 유형 UP 13 대표문제(출발 ★3)이나 골조는 시험 구역 1041(★2)과 같은 군수열 위치 찾기 — 구역 차이만으로 1단 갈림. 카탈로그에서 base ★ 를 하나로 통일 필요 | ★2 / ★3 |
| RPM-ALG-1047 | 실력 Up 출발 ★4 이나 통찰은 RT d2 하나·M_total 5 — 개수 변수 재표현 한 방이면 끝나 ★3 도 가능. 라벨은 벤더 ★4 유지 | ★3 / ★4 |
| RPM-ALG-1048 | 실력 Up 출발 ★4 이나 등차수열 절댓값의 합은 08 단원 표준 유형(EQV d1 · M_total 7) — 절차 비중이 크다. 라벨은 벤더 ★4 유지 | ★3 / ★4 |
| RPM-ALG-1050 | 약수 개수(정수론) + 로그 성질 + Σ 의 결합을 XU 한 개로 볼지 EQV d2 + RT d1 로 볼지 — 통찰 코드만 갈리고 ★4 는 같음. 카탈로그 설계 때 결정 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「군수열의 제k항」(5) · 「제k항이 n에 대한 식일 때의 수열의 합」(4) · 「Σ와 부분합 S_n의 관계」(3) · 「Σ의 성질」(3) · 「이중 Σ」(3) · 「부분분수」(3) · 「나머지·홀짝·주기」(3).
- 따로 세워야 할 유형: (a) 「제k항이 n에 대한 식」은 제k항이 명시된 경우(1040 · 절차형 ★2)와 두 인덱스 구조를 발견해야 하는 경우(1013·1014·1015 · PD d1 ★3)로 base ★ 를 나눠야 함. (b) 「군수열」은 규칙이 발문에 드러나는 경우(1017·1018 ★2)와 두 겹 규칙 발견(1019 PD d2 ★3)·합 일정 규칙(1041)으로 층이 다르므로 base ★2 에 통찰 depth 로 가산하는 구조가 맞음. (c) 「값의 개수로 세는 Σ 조건」(1047)과 「약수·로그 결합」(1050)은 이 단원 안에 짝이 없어 실력 Up 전용 소유형으로 따로 두는 편이 안전.
- 통합해도 될 유형: 「분모의 유리화」(1037·1046·1038 후반)와 「부분분수」(1035·1036·1045)는 모두 「망원 합」 하나의 하위 갈래로 묶고 분모 꼴(근호/곱)을 변형 축으로 두면 됨. 「이중 Σ」(1034·1044)와 「합의 순서 교환」(1029)도 같은 상위 유형 아래 두되 1029 처럼 세로 세기가 필요한 경우만 RT d1 가산. 「Σ와 부분합」(1020·1021·1033)은 08 단원의 S_n ↔ a_n 유형과 겹치므로 단원 경계를 넘는 공통 유형으로 등록하는 것이 중복을 줄임.
- 08 단원과의 경계: 1048(절댓값 합)·1026·1027(등차·등비 Σ)은 08 등차·등비수열 유형의 Σ 표기판이라 카탈로그에서는 08 유형의 변형으로 두고 09 에서는 참조만 하는 것이 낫다.
