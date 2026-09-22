---
name: mechanism-데이터-RPM-ALG-08-p3
description: RPM 대수 08 등차수열과 등비수열(3/4 · 유형 14~23 등비수열) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 08 등차수열과 등비수열
  unit_code: ALG-08
  part: "3/4"
  extract_range: "118~123쪽 · 0873~0907"
  total_problems: 35
  unit_total: 145
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 08 등차수열과 등비수열 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 08 단원의 셋째 조각 — 118~123쪽, 유형 14 「항 사이의 관계가 주어진 등비수열」부터 유형 23 「등비수열의 합과 일반항 사이의 관계」까지 등비수열 유형 열 개, 0873~0907 의 35문항 전수 — 를 다룬다. 이 범위는 전부 「유형 NN」 구역이라 벤더 신호는 난이도(중하·중·상중)와 태그(대표문제·서술형)로만 온다. 출발점은 대표문제(난이도 없음)·중 → ★2, 중하 → ★1~2, 상중 → ★3 이고, 여기서 M_total·통찰로 ±1 조정했다: −1 은 통찰이 없고 M_total 4 이며 조건 해독이 한 번뿐인 직접 대입형에만, +1 은 통찰이 2 개 이상이면서 M_total ≥ 6 일 때만 적용했다. 벤더 난이도가 명시된 문항은 판정이 어긋나도 라벨을 유지하고 `[분류 이슈]` 로 기록했다. 유형 카탈로그가 없으므로 type_id·base_star 는 null, type_hint 에 「RPM 유형 제목 · 실제 골조」 꼴로 유형명을 제안했고 effective_star 는 star 와 같게 두었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거 — 그 유형의 표준 요령이라도 대입만으로는 안 되는 재배열·구조 발견은 depth 1 로 기록) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2 개 이상일 때 통찰형, 그 밖(depth 1 하나 포함)은 절차형이며, `depth_score` 는 effective_depth 의 평균이다. 답은 전사본 answer 를 그대로 옮겼고 35문 모두 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 14 항 사이의 관계가 주어진 등비수열

```yaml
- id: RPM-ALG-0873
  page: 118
  vendor_label: "유형 14 항 사이의 관계가 주어진 등비수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열에서 a_3=8, a_8=64a_5 일 때 a_4 의 값. 5지선다.
  category: "두 항의 비 → 공비의 거듭제곱 → 인접 항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등비수열 · 두 항의 비로 공비 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_8/a_5=r^3=64 → r=4, a_4=a_3·r=32 두 단계로 끝난다. 첫째항을 구할 필요가 없고 r^3=64 의 실근은 하나뿐이라 분기도 없다. 대표문제 출발점 ★2 이지만 통찰 없음·M_total 4·조건 해독 한 번의 직접 대입형이라 −1 → ★1.
  tier: star_1
  mechanism_primary: "a_8=64a_5 → r^3=64 → r=4 → a_4=a_3·r=32"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0873.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_3 의 값, 두 항의 번호 차(8−5=3)와 배수(64=4^3)를 바꿀 수 있음. 제약: 배수가 번호 차의 거듭제곱(8=2^3, 27=3^3, 1/8)이어야 공비가 정수·유리수로 떨어지고, 번호 차가 짝수면 r 의 부호 분기가 생기므로 '공비가 양수' 조건을 붙일지 결정."
    creative: "(1) 묻는 항을 a_1 이나 a_10 처럼 멀리 두기(★1 유지, Mk 소폭 상승) (2) 번호 차를 짝수로 바꿔 r=±k 두 경우와 '모든 a_4 의 값의 합' 을 묻기(I-MI d1 · ★2) (3) a_8=64a_5 를 a_8−a_5=63a_5 같은 차 조건으로 위장(★2)."
```

```yaml
- id: RPM-ALG-0874
  page: 118
  vendor_label: "유형 14 항 사이의 관계가 주어진 등비수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열에서 (a_1+a_2):(a_3+a_4)=1:√2 일 때 a_3:a_7. 5지선다.
  category: "묶음 비 → r^2 → 네 칸 떨어진 항의 비 r^4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등비수열 · 항의 합의 비 → 공비의 거듭제곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_3+a_4=r^2(a_1+a_2) 이므로 r^2=√2, a_7/a_3=r^4=(r^2)^2=2 → 1:2. 항의 합을 묶어 공비의 거듭제곱으로 읽는 것이 이 유형의 표준 절차이며, r 자체를 구하려 들면 네제곱근이 나와 헤매는 정도가 유일한 마찰. 조건 해독(묶음 비)과 답 변환(r^4) 두 번이 있어 −1 후보는 적용하지 않고 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "(a_3+a_4)=r^2(a_1+a_2) → r^2=√2 → a_3:a_7=1:r^4=1:2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0874.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 1:√2 를 1:3, 1:√3, 2:1 등으로, 묶음 간격(두 칸)과 묻는 항의 간격(네 칸)을 바꿀 수 있음. 제약: 묻는 간격이 묶음 간격의 배수여야 r 를 구하지 않고 답이 나오며, 선택지가 유리수 비로 정리돼야 함(√2 → r^4=2 처럼)."
    creative: "(1) 묶음을 세 항의 합으로 늘리기(같은 골조 ★2) (2) 묻는 간격을 묶음 간격의 배수가 아니게 해 r 의 부호 분기를 강제(I-MI d1 · ★3) (3) 합의 비 대신 차의 비 (a_3−a_1):(a_5−a_3) 로 위장(★2)."
```

```yaml
- id: RPM-ALG-0875
  page: 118
  vendor_label: "유형 14 항 사이의 관계가 주어진 등비수열"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    첫째항·공비가 0 이 아닌 등비수열에서 a_12/a_2+a_13/a_3+…+a_21/a_11=20 일 때 a_50/a_30 의 값. 서술형.
  category: "각 분수 = r^10 → 항 개수 세기 → r^20"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등비수열 · 항의 비의 합 → 공비의 거듭제곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_{k+10}/a_k=r^10 이 k=2~11 의 10개 더해져 10r^10=20, r^10=2. a_50/a_30=r^20=(r^10)^2=4. 골조는 앞 문항과 같고 '항이 10개' 를 정확히 세는 것(T-경계)이 유일한 마찰. 벤더 중·서술형 → ★2.
  tier: star_2
  mechanism_primary: "a_{k+10}/a_k=r^10 (10개) → 10r^10=20 → r^10=2 → a_50/a_30=r^20=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0875.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "간격 10, 항 개수 10, 합 20, 묻는 간격 20 을 바꿀 수 있음. 제약: 묻는 간격이 주어진 간격의 배수여야 하고, 합/개수 가 r^간격 의 값이 되므로 정수나 간단한 분수로 떨어지게 둠. '첫째항·공비가 0 이 아니다' 조건은 나눗셈 정당화용으로 유지."
    creative: "(1) 분수 대신 a_{k+10}·a_k 곱의 합을 주고 a_1 과 r 의 관계를 묻기(★2~3) (2) 항 개수를 n 으로 두고 합을 n 으로 표현하게 하기(Ma 상승 ★3) (3) 등차수열의 차 a_{k+10}−a_k=10d 로 바꾼 쌍둥이 문항(★2)."
```

```yaml
- id: RPM-ALG-0876
  page: 118
  vendor_label: "유형 14 항 사이의 관계가 주어진 등비수열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공비가 1 보다 큰 등비수열이 ㈎ a_2a_4a_6=64, ㈏ (a_3+a_7)/a_5=5/2 를 만족시킬 때 a_10 의 값.
  category: "세 항의 곱 → a_4 → 대칭 조건 r^2+r^{−2} → r^2 선택 → a_10"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등비수열 · 세 항의 곱과 대칭 조건에서 항 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ a_2a_4a_6=a_4^3=64 → a_4=4. ㈏ 의 좌변은 a_5 기준으로 r^{−2}+r^2=5/2 → r^2=2 또는 1/2, 공비>1 이므로 r^2=2. a_10=a_4·r^6=4·8=32. a_4·a_5 를 중심으로 읽으면 짧지만 a_1 r^k 로 펼쳐도 같은 식이 바로 나와 통찰로 세지 않았다. 마찰은 r^2 의 두 근 선택(T-범위)과 r=√2 의 부호(T-부호), 그리고 √2 의 거듭제곱 계산. 벤더 상중·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "a_2a_4a_6=a_4^3 → a_4=4 · (a_3+a_7)/a_5=r^2+r^{−2}=5/2 → r^2=2 (r>1) → a_10=a_4·r^6=32"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0876.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱 64(=4^3), 비 5/2(=2+1/2), 묻는 항 번호를 바꿀 수 있음. 제약: 곱은 완전세제곱, 비는 t+1/t 꼴 값(5/2, 10/3, 17/4)이어야 r^2 가 유리수로 떨어지고, 묻는 항이 a_4 에서 짝수 칸 떨어져야 √2 가 사라짐(홀수 칸이면 답에 √2 가 남음)."
    creative: "(1) '공비>1' 을 '모든 항이 양수' 로 바꿔 r=√2 와 r=1/√2 두 경우의 a_10 의 합을 묻기(I-MI d1 · ★3~4) (2) ㈎ 를 로그 조건 log_2 a_2+log_2 a_4+log_2 a_6=6 으로 위장(I-XU d1 · ★4) (3) 등차수열 버전 a_2+a_4+a_6=12, (a_3+a_7)−2a_5=0 은 항등식이 되므로 조건을 새로 짜야 함 — 등차로 바꾸면 ★2 로 내려감."
```

### 유형 15 조건을 만족시키는 등비수열의 항 구하기

```yaml
- id: RPM-ALG-0877
  page: 119
  vendor_label: "유형 15 조건을 만족시키는 등비수열의 항 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    제3항이 4, 제6항이 32 인 등비수열에서 처음으로 2000 보다 커지는 항. 5지선다.
  category: "두 항 → r, a_1 → 일반항 → 지수 부등식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 항의 번호 · 지수 부등식(처음으로 커지는 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r^3=8 → r=2, a_1=1, a_n=2^{n−1}. 2^{n−1}>2000 은 2^10=1024, 2^11=2048 에서 n−1=11, n=12. 2 의 거듭제곱 표를 알면 계산 없이 끝나고, 지수 n−1 과 항 번호 n 을 혼동하는 것(T-경계)이 유일한 함정. 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "a_6/a_3=r^3=8 → r=2, a_1=1 → 2^{n−1}>2000 → n−1=11 → 제12항"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0877.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 값(4, 32)과 번호, 기준값 2000 을 바꿀 수 있음. 제약: 공비가 2·3·5 같은 작은 정수여야 거듭제곱 표로 풀리고, 기준값이 거듭제곱 사이에 놓여 경계가 명확해야 함(2048 처럼 정확히 거듭제곱이면 '커지는' 과 '이상' 이 갈림)."
    creative: "(1) 공비를 1/2 로 두고 '처음으로 1/1000 보다 작아지는 항'(★2 · 0878 골조) (2) 공비를 음수로 두고 절댓값 조건으로 바꾸기(T-부호 추가 · ★3) (3) 기준값을 3^k 와 2^m 사이 비교로 두어 log 어림이 필요하게 하면 I-XU d1 · ★3."
```

```yaml
- id: RPM-ALG-0878
  page: 119
  vendor_label: "유형 15 조건을 만족시키는 등비수열의 항 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열에서 a_2=40, a_5=5 일 때 a_n<1/50 을 만족시키는 자연수 n 의 최솟값.
  category: "두 항 → r=1/2, a_1 → 일반항 → 지수 부등식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 항의 번호 · 지수 부등식(작아지는 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r^3=1/8 → r=1/2, a_1=80, a_n=80·(1/2)^{n−1}<1/50 ⇔ 2^{n−1}>4000. 2^12=4096 이므로 n=13. 부등식을 역수로 뒤집을 때 방향(모두 양수라 문제 없음)과 n−1 경계만 주의. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "a_5/a_2=r^3=1/8 → r=1/2, a_1=80 → 80/2^{n−1}<1/50 → 2^{n−1}>4000 → n=13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0878.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_2, a_5 의 값(비 1/8)과 기준 1/50 을 바꿀 수 있음. 제약: 공비가 1/2·1/3 같은 단위분수여야 2^k 비교로 떨어지고, a_1×기준의 역수(80·50=4000)가 거듭제곱 사이에 놓여야 경계가 분명함."
    creative: "(1) 'a_n<1/50 인 n 의 최솟값' 을 'a_n>1/50 인 n 의 개수' 로 바꾸기(★2) (2) 공비를 −1/2 로 두고 |a_n|<1/50 로 만들면 0879 골조(★3) (3) 조건을 S_n 부등식으로 바꾸면 유형 22 로 이동(★2~3)."
```

```yaml
- id: RPM-ALG-0879
  page: 119
  vendor_label: "유형 15 조건을 만족시키는 등비수열의 항 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열에서 a_2+a_3=6, a_3+a_4=−18 일 때 |1/a_n|>1/1000 을 만족시키는 모든 자연수 n 의 값의 합.
  category: "묶음 비 → r=−3 → a_1 → 역수 부등식 뒤집기 → 3^{n−1}<1000 → n 의 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|1/a_n|>1/1000 ⇔ |a_n|<1000 ⇔ 3^{n−1}<1000 — 음수 공비를 절댓값으로 흡수한 뒤 역수 부등식을 뒤집는 조건 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 항의 번호 · 음수 공비·절댓값·역수 부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (a_3+a_4)=r(a_2+a_3) → r=−3, a_2(1+r)=6 → a_2=−3, a_1=1, a_n=(−3)^{n−1}. 조건은 |a_n|<1000 ⇔ 3^{n−1}<1000 이고 3^6=729<1000<3^7 이므로 n≤7, 합 1+…+7=28. 음수 공비를 절댓값으로 처리하고 역수 부등식을 뒤집는 한 단계(EQV d1)가 상중의 이유. 함정은 부호와 '최솟값이 아니라 모든 n 의 합'(T-경계). 벤더 상중·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "(a_3+a_4)/(a_2+a_3)=r=−3 → a_1=1 → |1/a_n|>1/1000 ⇔ 3^{n−1}<1000 → n≤7 → 합 28"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$28$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0879.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 묶음 합(6, −18 → r=−3), 기준 1/1000 을 바꿀 수 있음. 제약: 공비의 절댓값이 2·3·5 여야 거듭제곱 비교가 쉽고, a_1 이 ±1 처럼 작아야 3^{n−1} 단독 비교가 됨. 기준의 역수가 거듭제곱과 겹치지 않게(729 와 1000 사이) 둠."
    creative: "(1) 합 대신 '개수' 나 'n 의 최댓값' 을 묻기(★2~3) (2) |1/a_n| 을 1/a_n^2 로 바꿔 부호 함정을 없애면 EQV 가 얕아져 ★2 (3) 조건을 |a_n|>1000 인 n 의 최솟값으로 바꾸면 유형 15 기본형 ★2. 역수·절댓값·음수 공비 셋이 함께 있을 때만 ★3 이 유지됨."
```

### 유형 16 두 수 사이에 수를 넣어서 만든 등비수열

```yaml
- id: RPM-ALG-0880
  page: 119
  vendor_label: "유형 16 두 수 사이에 수를 넣어서 만든 등비수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    3 과 40 사이에 10개의 수를 넣어 3, a_1, …, a_10, 40 이 등비수열을 이룰 때 a_2a_9 의 값. 5지선다.
  category: "항 개수 12 → r^11=40/3 → a_2a_9=9r^11"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣은 등비수열 · 대칭 위치 두 항의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    40 은 제12항이므로 3r^11=40. a_2=3r^2, a_9=3r^9 이므로 a_2a_9=9r^11=9·(40/3)=120. 양 끝에서 같은 거리의 두 항의 곱이 3·40 이라는 대칭으로 즉답할 수도 있지만, 직접 계산도 두 줄이라 통찰로 세지 않았다. 함정은 a_k 가 제(k+1)항이라는 번호 밀림(T-경계). 대표문제 ★2.
  tier: star_2
  mechanism_primary: "3r^11=40 → a_2a_9=(3r^2)(3r^9)=9r^11=120"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0880.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(3, 40), 넣는 개수 10, 묻는 두 항의 번호(2, 9)를 바꿀 수 있음. 제약: 두 번호의 합이 (개수+1) 이어야 r^{개수+1} 하나로 끝나며, 곱이 정수(3·40) 로 떨어지게 둠."
    creative: "(1) 번호 합이 개수+1 이 아닌 a_2a_8 을 묻고 r 의 값을 따로 알려 주기(★2) (2) a_1a_2…a_10 전체 곱을 묻기(I-SYM d1 · 0882 골조 ★2) (3) 등차수열 버전 a_2+a_9 로 바꾸면 ★1."
```

```yaml
- id: RPM-ALG-0881
  page: 119
  vendor_label: "유형 16 두 수 사이에 수를 넣어서 만든 등비수열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    18 과 2/729 사이에 n 개의 수를 넣어 공비가 1/3 인 등비수열을 이룰 때 n 의 값.
  category: "끝 항 = 첫 항·r^{n+1} → 지수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣은 등비수열 · 넣은 개수 n 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2/729=18·(1/3)^{n+1} → (1/3)^{n+1}=1/6561=(1/3)^8 → n+1=8, n=7. 항 개수 n+2 만 정확히 세면 한 줄. 벤더 중하(★1~2 출발)·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "18·(1/3)^{n+1}=2/729 → (1/3)^{n+1}=3^{−8} → n=7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0881.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수와 공비를 바꿀 수 있음. 제약: (끝/처음) 이 공비의 정수 거듭제곱이어야 하고(18 → 2/729 는 3^{−8}), 지수에서 1 을 빼는 항 개수 계산이 답이 되므로 지수는 3 이상으로."
    creative: "(1) 공비 대신 n 을 주고 공비를 묻기(같은 골조 ★1) (2) 공비를 −1/3 으로 두고 '넣은 수 중 음수의 개수' 를 묻기(★2) (3) 공비가 정해지지 않은 채 'r 가 자연수' 조건으로 n 의 가능한 값을 모두 찾게 하면 0883 골조 ★3."
```

```yaml
- id: RPM-ALG-0882
  page: 119
  vendor_label: "유형 16 두 수 사이에 수를 넣어서 만든 등비수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1 과 2 사이에 8개의 수를 넣어 등비수열을 이룰 때 a_1a_2…a_8 의 값. 5지선다.
  category: "r^9=2 → 곱 = r^{1+…+8}=r^36=(r^9)^4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양 끝에서 대칭인 쌍 a_k·a_{9−k}=1·2 가 네 쌍 → 2^4 (또는 지수 합 36 을 r^9 의 4제곱으로 묶기) — r 를 구하지 않고 곱을 처리하는 재배열"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣은 등비수열 · 넣은 수 전체의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2=1·r^9 이므로 r^9=2. 여덟 항의 곱은 r^{1+2+…+8}=r^36=(r^9)^4=16, 또는 대칭 쌍 a_1a_8=a_2a_7=a_3a_6=a_4a_5=2 로 2^4=16. r 자체(2^{1/9})는 쓸 수 없으므로 곱을 r^9 의 거듭제곱이나 대칭 쌍으로 묶는 한 번의 재배열(SYM d1)이 핵심. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "r^9=2 → a_1…a_8=r^36=(r^9)^4=16 (대칭 쌍 곱 2 × 4쌍)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0882.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(1, 2)와 넣는 개수 8 을 바꿀 수 있음. 제약: 넣는 개수 m 에 대해 지수 합 m(m+1)/2 가 (m+1) 의 배수여야(즉 m 이 짝수) 답이 (끝/처음)^{m/2} 로 떨어짐. 첫 항이 1 이 아니면 첫 항의 m 제곱도 곱해야 함."
    creative: "(1) 넣는 개수를 홀수(7)로 두면 가운데 항 √2 가 남아 답에 무리수 → 대칭 쌍이 '가운데 항 제곱' 으로 확장(★2~3) (2) 곱 대신 log_2 의 합을 묻기(I-XU d1 · ★3) (3) 등차수열 버전 '합' 으로 바꾸면 ★1."
```

```yaml
- id: RPM-ALG-0883
  page: 119
  vendor_label: "유형 16 두 수 사이에 수를 넣어서 만든 등비수열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    2 와 512 사이에 n 개의 수를 넣어 공비가 자연수 r 인 등비수열을 이룰 때 n+r 의 최솟값.
  category: "r^{n+1}=2^8 → r=2^k, k|8 케이스 → n+r 비교"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "r^{n+1}=256 에서 자연수 r 는 2 의 거듭제곱 2^k 이고 k(n+1)=8 — k 가 8 의 약수인 케이스(k=1,2,4,8)를 모두 나열해야 최솟값이 결정됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣은 등비수열 · 자연수 공비 케이스(r^{n+1}=p^m 의 정수해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2·r^{n+1}=512 → r^{n+1}=2^8. r 가 자연수이므로 r=2^k, k(n+1)=8: (r,n)=(2,7),(4,3),(16,1),(256,0). n+r 는 9, 7, 17, (256) → 최솟값 7 (r=256 은 n=0 이라 '수를 넣는' 조건에도 어긋남). 한 식이 여러 (r,n) 를 낳는다는 것을 보고 전부 나열하는 케이스 분기(MI d2)가 골조. 함정은 n≥1 (T-범위)과 항 개수(T-경계). 벤더 상중·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "2r^{n+1}=512 → r^{n+1}=2^8 → (r,n)=(2,7),(4,3),(16,1) → n+r 최소 7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0883.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 수(2, 512 → 비 2^8)를 바꿀 수 있음. 제약: 비가 소수의 거듭제곱 p^m 이어야 r=p^k 로 분해가 유일하고, m 의 약수 개수가 3~4 개(m=8, 9, 16)일 때 케이스 수가 적당함. 비가 2^12 처럼 약수가 많으면 케이스 6 개로 늘어남."
    creative: "(1) 'n+r 의 최솟값' 을 '가능한 n 의 값의 합' 으로 바꾸면 케이스 나열만 남아 ★2~3 (2) 비를 36=6^2=2^2·3^2 처럼 두 소수의 거듭제곱으로 두면 r=6 만 가능한지 따지는 I-VF 가 추가돼 ★4 (3) 'r 가 자연수' 를 'r 가 정수' 로 바꾸면 음수 공비 케이스(부호 분기)가 더해져 ★4."
```

### 유형 17 등비중항

```yaml
- id: RPM-ALG-0884
  page: 120
  vendor_label: "유형 17 등비중항"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 양수 x, x+2, 3x+11 이 이 순서대로 등비수열을 이룰 때 x 의 값.
  category: "등비중항 (x+2)^2=x(3x+11) → 이차방정식 → 양수 근"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비중항 · 세 식이 등비수열을 이룰 조건(이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+2)^2=x(3x+11) → 2x^2+7x−4=0 → (2x−1)(x+4)=0, 양수 조건으로 x=1/2. 등비중항 식 세우기·전개·인수분해·근 선택의 네 단계이며 x=−4 를 버리는 것(T-범위)이 함정. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "(x+2)^2=x(3x+11) → 2x^2+7x−4=0 → x=1/2 (x>0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0884.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 식의 계수·상수(x, x+2, 3x+11)를 바꿀 수 있음. 제약: 등비중항 식이 유리근을 갖는 이차식이어야 하고(판별식 완전제곱), 두 근 중 하나가 '양수' 조건으로 걸러지도록 부호를 배치. 세 수가 모두 양수가 되는지(x=1/2 → 1/2, 5/2, 25/2) 확인."
    creative: "(1) '세 양수' 조건을 없애고 '모든 x 의 값의 합' 을 묻기(★2) (2) 등차중항 조건을 하나 더 붙여 두 미지수 연립(0886 골조 ★2) (3) 세 수를 다항식 나머지로 위장(0885 골조 · I-XU d1 ★2~3)."
```

```yaml
- id: RPM-ALG-0885
  page: 120
  vendor_label: "유형 17 등비중항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2+ax+a 를 x−2, x, x+1 로 나눈 나머지가 이 순서대로 등비수열을 이룰 때 모든 상수 a 의 값의 합.
  category: "나머지정리 → 세 나머지 → 등비중항 → a 의 이차방정식 → 근의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나머지정리(다항식 단원)로 f(2)=3a+4, f(0)=a, f(−1)=1 을 얻어야 등비중항 조건이 세워짐 — 두 단원 도구의 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비중항 · 다항식 나머지가 등비수열(나머지정리 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2)=3a+4, f(0)=a, f(−1)=1 이 등비수열 → a^2=3a+4 → a^2−3a−4=0 → a=4, −1 (둘 다 세 수가 0 이 아니어서 유효: 16,4,1 / 1,−1,1). 합 3. 나머지정리 결합(XU d1)이 유일한 비절차 요소이고 이후는 0884 와 같은 골조. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "나머지정리 → (3a+4, a, 1) 등비 → a^2=3a+4 → a=4, −1 → 합 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0885.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x) 의 계수와 세 나눗셈 인자(x−2, x, x+1)를 바꿀 수 있음. 제약: 세 나머지가 a 의 일차식·상수로 나와 등비중항 식이 a 의 이차식이 되어야 하고, 근이 유리수(근의 합을 물으므로 정수 권장)여야 함. 어떤 근에서도 나머지가 0 이 되지 않게(등비수열 정의) 확인."
    creative: "(1) 근의 합 대신 '각 a 에 대한 공비의 곱' 을 묻기(★2) (2) 나머지가 a 의 이차식이 되도록 f 를 삼차식으로 두면 a 의 사차방정식 → Mk 상승 ★3 (3) 등비 대신 등차중항으로 바꾸면 I-XU 만 남아 ★2 유지."
```

```yaml
- id: RPM-ALG-0886
  page: 120
  vendor_label: "유형 17 등비중항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 정수 a, b 에 대하여 1, a, b 가 등차수열을, a, √3, b 가 등비수열을 이룰 때 a^2+b^2 의 값.
  category: "등차중항 2a=1+b + 등비중항 ab=3 → 연립 → 정수 조건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비중항 · 등차중항과 등비중항 연립(정수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a=1+b, ab=3 → a(2a−1)=3 → 2a^2−a−3=0 → (2a−3)(a+1)=0, 정수 조건으로 a=−1, b=−3, a^2+b^2=10. 두 중항 조건을 세워 연립하는 표준 절차이며 a=3/2 를 버리는 정수 조건(T-범위)이 함정. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "2a=1+b, ab=3 → 2a^2−a−3=0 → a=−1 (정수) → b=−3 → a^2+b^2=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0886.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등차 첫 항 1, 등비중항 √3(→ ab=3)을 바꿀 수 있음. 제약: 연립한 이차식의 한 근만 정수가 되도록 계수를 두고, ab 가 양수면 a, b 부호가 같아야 함(등비중항 √3 이 실수). 답 a^2+b^2 이 정수로 나오게."
    creative: "(1) '정수' 조건을 없애고 두 해 모두에 대한 a^2+b^2 의 합 묻기(★2) (2) 등차·등비 역할을 바꾸기 — 1,a,b 등비·a,√3,b 등차 → 무리수 처리 ★3 (3) a, b 를 이차방정식의 두 근으로 위장하면 0887 골조(I-XU d1 ★3)."
```

```yaml
- id: RPM-ALG-0887
  page: 120
  vendor_label: "유형 17 등비중항"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^2−6x+4=0 의 두 근 α, β 에 대하여 α, p, β 가 등차수열, α, q, β 가 등비수열(q>0)을 이룰 때 p, q 를 두 근으로 하는 이차방정식. 5지선다.
  category: "근과 계수 → 등차중항 p=(α+β)/2 · 등비중항 q^2=αβ → 새 이차방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α+β=6, αβ=4 (이차방정식 근과 계수의 관계)를 두 중항 식에 바로 넣어 근을 구하지 않고 p, q 를 얻는 단원 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비중항 · 이차방정식 두 근과 등차·등비중항(근과 계수 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α+β=6, αβ=4 → p=3, q^2=4, q>0 이므로 q=2 → x^2−5x+6=0. 근과 계수의 관계(XU d1)만 알면 세 줄이며, 근 3±√5 를 직접 구해도 같은 답이 곧 나온다. q 의 부호(T-부호)와 선택지의 부호 함정이 마찰의 전부. [분류 이슈] 벤더 상중이나 M_total 5·통찰 d1 하나로 판정은 ★2 에 가까움 — 라벨은 ★3 으로 두고 이슈 기록.
  tier: star_3
  mechanism_primary: "α+β=6, αβ=4 → p=3, q=2 (q>0) → x^2−(p+q)x+pq=x^2−5x+6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0887.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 이차방정식의 계수(합 6, 곱 4)를 바꿀 수 있음. 제약: 곱이 완전제곱수여야 q 가 정수·유리수이고, 합이 짝수여야 p 가 정수. 선택지에 부호만 다른 오답(x^2+5x+6)을 유지."
    creative: "(1) q>0 조건을 없애고 '가능한 이차방정식의 개수' 나 q<0 인 경우를 묻기(I-MI d1 · ★3) (2) α, β 를 삼차방정식의 세 근 중 둘로 두면 근 선택 분기 ★4 (3) p, q 대신 p^2+q^2 만 묻기(★2)."
```

### 유형 18 등비수열을 이루는 수

```yaml
- id: RPM-ALG-0888
  page: 120
  vendor_label: "유형 18 등비수열을 이루는 수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열을 이루는 세 실수의 합이 13, 곱이 27 일 때 세 수 중 가장 큰 수.
  category: "a/r, a, ar 대칭 매개화 → 곱 a^3 → 합 → r"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 수를 a/r, a, ar 로 두면 곱이 a^3 이 되어 가운데 수가 즉시 결정 — 첫 항·공비 대신 가운데 항 중심의 대칭 매개화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열을 이루는 세 수 · a/r, a, ar 대칭 매개화(합·곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a/r, a, ar 로 두면 a^3=27 → a=3, 3(1/r+1+r)=13 → 3r^2−10r+3=0 → r=3 또는 1/3. 어느 쪽이든 세 수는 1, 3, 9 로 가장 큰 수 9. 대칭 매개화(SYM d1)가 이 유형의 골조이고 나머지는 이차방정식 한 번. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "(a/r, a, ar) → a^3=27 → a=3 → r+1/r=10/3 → r=3 → 세 수 1,3,9 → 9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0888.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 13, 곱 27 을 바꿀 수 있음. 제약: 곱이 완전세제곱(8, 64, 125), 합/∛곱 −1 이 r+1/r 꼴 값(10/3, 5/2, 17/4)이어야 r 가 유리수. 세 수가 실수라는 조건은 유지(r 가 실수)."
    creative: "(1) 합·곱 대신 '합 13, 제곱의 합 91' 로 바꾸면 r^2+1/r^2 처리 ★3 (2) 세 수를 삼차방정식의 세 근으로 위장하면 0889 골조(I-XU d1 ★2) (3) 네 수가 등비수열(a/r^3, a/r, ar, ar^3)로 늘리면 대칭 매개화가 짝수 개로 바뀌어 ★3~4."
```

```yaml
- id: RPM-ALG-0889
  page: 120
  vendor_label: "유형 18 등비수열을 이루는 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차방정식 x^3−kx^2+56x−64=0 의 세 실근이 등비수열을 이룰 때 상수 k 의 값. 5지선다.
  category: "세 근 a/r, a, ar → 근과 계수(곱) → a → a 대입 또는 두 근 곱의 합 관계 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차방정식 근과 계수의 관계(곱 = 64)를 등비 세 근의 대칭 매개화 a/r, a, ar 에 적용해 가운데 근 a=∛64=4 를 바로 얻는 단원 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열을 이루는 세 수 · 삼차방정식 세 근이 등비(근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 근을 a/r, a, ar 로 두면 곱 a^3=64 → a=4. a=4 가 근이므로 대입 64−16k+224−64=0 → k=14 (두 근끼리의 곱의 합 a^2(1/r+1+r)=56 → 1/r+1+r=7/2 → 합 k=a·7/2=14 로도 같음). 근과 계수 결합(XU d1) 한 번이면 r 를 구하지 않고 끝난다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "세 근 (a/r,a,ar) → a^3=64 → a=4 → f(4)=0 → k=14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0889.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 64(=4^3)와 x 의 계수 56 을 바꿀 수 있음. 제약: 상수항이 완전세제곱이어야 가운데 근이 정수이고, (x 계수)/a^2 −1 이 r+1/r 꼴(7/2 → r=2)이어야 세 근이 실수·유리수. 세 근이 서로 다르도록 r≠1."
    creative: "(1) k 를 주고 상수항을 묻는 방향 바꾸기(★2) (2) '세 실근이 등차수열' 버전(합으로 가운데 근 → ★2) (3) 삼차방정식 대신 두 곡선의 교점으로 위장하면 0890 골조(I-RT + I-CON · ★3)."
```

```yaml
- id: RPM-ALG-0890
  page: 120
  vendor_label: "유형 18 등비수열을 이루는 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=x^3−4x^2+14x, y=3x^2+k 가 서로 다른 세 점에서 만나고 교점의 x 좌표가 등비수열을 이룰 때 상수 k 의 값.
  category: "교점 → 삼차방정식 → 세 근 대칭 매개화 → 합·쌍합의 비로 가운데 근 → k=곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선의 교점의 x 좌표 = x^3−7x^2+14x−k=0 의 세 실근 (기하 조건 → 방정식 근)"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱(=k)이 미지수라 0889 처럼 바로 못 쓰므로 합 a(1/r+1+r)=7 과 쌍합 a^2(1/r+1+r)=14 두 관계를 나눠 a=2 로 통합"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열을 이루는 세 수 · 두 곡선의 교점 x 좌표가 등비(합·쌍합 비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    연립하면 x^3−7x^2+14x−k=0. 세 근을 a/r, a, ar 로 두면 합 7=aS, 쌍합 14=a^2S (S=1/r+1+r) 이므로 나눠서 a=2, k=곱=a^3=8. 검산: x^3−7x^2+14x−8=(x−1)(x−2)(x−4), 근 1,2,4 는 서로 다른 등비수열. 교점→방정식 전환(RT d1)과 두 관계식의 비로 가운데 근을 잡는 조건 통합(CON d1) 두 단계가 필요해 0889 보다 한 단계 깊다. 벤더 중 → 통찰 2 개·M_total 6 으로 +1 → ★3 (0891 과 같은 골조). [분류 이슈] 벤더 중 ↔ 판정 ★3, 라벨 ★3 채택.
  tier: star_3
  mechanism_primary: "교점 → x^3−7x^2+14x−k=0 → 근 (a/r,a,ar) → 쌍합/합 = a = 2 → k=a^3=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0890.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 계수(x^2 계수 −4, 3 → 합 7; x 계수 14)를 바꿀 수 있음. 제약: (쌍합)/(합)=a 가 정수이고 k=a^3 이 정수, 합/a −1 = r+1/r 이 유리수 r(≠1)를 주어야 세 실근이 서로 다름. 'k 를 구하시오' 이므로 k 는 정수로."
    creative: "(1) 상수항을 주고 x 계수를 묻기(★2~3) (2) 교점의 x 좌표가 등차수열이면 합으로 가운데 근이 바로 나와 CON 이 사라짐 ★2 (3) 두 곡선을 y=f(x) 와 직선으로 두고 '기울기 m' 을 묻기(★3 유지 · Ma 2)."
```

```yaml
- id: RPM-ALG-0891
  page: 120
  vendor_label: "유형 18 등비수열을 이루는 수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면의 가로·세로와 높이가 이 순서대로 등비수열을 이루는 직육면체의 모든 모서리 길이의 합이 104, 겉넓이가 312 일 때 부피.
  category: "세 변 a/r, a, ar → 모서리 합 4aS=104 · 겉넓이 2a^2S=312 → 나눠 a → 부피 a^3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 변을 a/r, a, ar 로 두면 부피가 a^3, 모서리 합·겉넓이가 각각 a·S, a^2·S (S=1/r+1+r) 로 같은 인자를 공유"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "aS=26, a^2S=156 을 나눠 r 를 구하지 않고 a=6 을 얻는 두 조건의 통합"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열을 이루는 세 수 · 직육면체 세 변이 등비(모서리 합·겉넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변을 a/r, a, ar 로 두면 4a(1/r+1+r)=104, 2a^2(1/r+1+r)=312 → aS=26, a^2S=156 → a=6 → V=a^3=216. r 를 구할 필요가 없다(실제로 S=13/3 → r=3, 변 2,6,18). 대칭 매개화(SYM d1)와 두 식의 비(CON d1)가 골조이며, 0890 과 같은 메커니즘을 입체도형으로 감싼 것. 벤더 상중 → ★3 유지(통찰 2 개이나 M_total 5 라 +1 은 적용하지 않음).
  tier: star_3
  mechanism_primary: "변 (a/r,a,ar) → 4aS=104, 2a^2S=312 → a=156/26=6 → V=a^3=216"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$216$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0891.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 합 104(=4·26), 겉넓이 312(=2·156)를 바꿀 수 있음. 제약: (겉넓이/2)/(모서리 합/4) = a 가 정수, a·S=모서리 합/4 에서 S−1=r+1/r 이 유리수 r 를 주도록(26/6−1=10/3 → r=3). 부피 a^3 이 정수."
    creative: "(1) 부피와 모서리 합을 주고 겉넓이를 묻기(★3) (2) 대각선 길이 조건 a^2(1/r^2+1+r^2) 으로 바꾸면 r^2+1/r^2 처리 ★4 (3) 세 변이 등차수열이면 합으로 가운데 변 → ★2."
```

### 유형 19 등비수열의 활용

```yaml
- id: RPM-ALG-0892
  page: 121
  vendor_label: "유형 19 등비수열의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 변이 1 인 정삼각형에서 매회 각 정삼각형의 중점을 이어 만든 가운데 정삼각형을 오려 낼 때 8회 시행 후 남은 넓이. 5지선다 · 그림.
  category: "처음 넓이 √3/4 → 매회 3/4 배 → (3/4)^8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 활용 · 도형 반복 시행에서 남은 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 넓이 √3/4. 한 번 시행하면 넓이가 1/4 인 삼각형 하나가 빠져 3/4 배가 되고, 이후 남은 각 삼각형에 같은 비가 적용되므로 n 회 후 (√3/4)(3/4)^n. n=8 → ④. 선택지가 (3/4)^7 (지수 밀림)·√3/4 누락으로 짜여 있어 T-경계 함정. 반복 시행 → 공비 읽기의 표준 절차. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "S_0=√3/4 → 매회 ×3/4 → S_8=(√3/4)(3/4)^8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0892.png"
  latex: latex-bank/rpm-alg/items/0892.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 변 길이 1, 시행 횟수 8 을 바꿀 수 있음. 제약: 공비 3/4 는 도형 규칙에 고정(그림에 라벨이 없어 변 길이는 자유), 변 길이를 2 로 두면 처음 넓이 √3 으로 정리. 선택지에 지수 ±1 오답과 초기 넓이 누락 오답을 유지."
    creative: "(1) '남은 넓이' 대신 '오려 낸 넓이의 합' 을 묻기(등비수열의 합 → 유형 20 결합 ★3) (2) 정사각형 9등분 버전(0893 골조 · 공비 8/9 ★2) (3) 남은 삼각형의 '개수' 와 '한 변의 길이' 를 각각 묻는 소문항으로 쪼개면 ★1~2."
```

```yaml
- id: RPM-ALG-0893
  page: 121
  vendor_label: "유형 19 등비수열의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변이 3 인 정사각형을 매회 9등분해 중앙을 버리는 시행을 10번 반복했을 때 남은 넓이가 2^p/3^q 일 때 p+q 의 값. 5지선다 · 그림.
  category: "처음 넓이 9 → 매회 8/9 배 → 9(8/9)^10 → 2^30/3^18"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 활용 · 도형 반복 시행에서 남은 넓이(소인수 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 넓이 3^2=9, 한 번에 8/9 배. 10회 후 9·(8/9)^10=3^2·2^30/3^20=2^30/3^18 → p+q=48. 공비 읽기는 0892 와 같고, 9=3^2 를 3^20 과 약분해 소인수 지수로 정리하는 계산(Mk 2)이 추가. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "S_0=9 → 매회 ×8/9 → 9(8/9)^10=2^30/3^18 → p+q=48"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0893.png"
  latex: latex-bank/rpm-alg/items/0893.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 변 길이 3, 시행 횟수 10 을 바꿀 수 있음. 제약: 변 길이를 3^m 으로 두어야 3 의 지수 정리가 깔끔하고(변 3 → 지수 20−2=18), 답이 p+q 이므로 2^p/3^q 가 기약 형태인지(약분 여부) 확인. 그림은 9등분 규칙만 보여 주므로 변 길이 라벨 없음."
    creative: "(1) '버린 넓이의 총합' 을 묻기(등비 합 ★3) (2) 남은 정사각형의 '개수' 8^10 과 '한 변의 길이' 3/3^10 을 따로 묻기(★1~2) (3) 시행 횟수 n 을 매개변수로 두고 넓이가 처음의 1/2 이하가 되는 최소 n 을 묻기(log 근사 · I-XU ★4)."
```

### 유형 20 등비수열의 합

```yaml
- id: RPM-ALG-0894
  page: 121
  vendor_label: "유형 20 등비수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    제3항이 32, 제6항이 4 인 등비수열의 첫째항부터 제8항까지의 합 S_8. 5지선다.
  category: "두 항 → r=1/2, a_1=128 → 합 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 · 두 항에서 공비·첫째항 복원 후 S_n"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r^3=1/8 → r=1/2, a_1=32·4=128, S_8=128(1−(1/2)^8)/(1−1/2)=256(1−1/256)=255. 공비·첫째항·합 공식의 표준 절차이고 선택지 255/256 은 1 을 빼먹는 실수를 노린 것(T-경계). 대표문제 ★2.
  tier: star_2
  mechanism_primary: "a_6/a_3=r^3=1/8 → r=1/2, a_1=128 → S_8=128(1−2^{−8})/(1/2)=255"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0894.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 값(32, 4)과 번호, 합의 항수 8 을 바꿀 수 있음. 제약: 비가 공비의 정수 거듭제곱이고, 첫째항이 2 의 거듭제곱이어야 S_n 이 정수로 떨어짐. 선택지에 ±1 오답 유지."
    creative: "(1) S_8 대신 a_1+a_3+…+a_7 (공비 r^2) 을 묻기(★2) (2) 공비를 음수 −1/2 로 두면 부호 처리 ★2~3 (3) 합을 주고 항수 n 을 묻는 방향으로 바꾸면 0895 골조 ★2."
```

```yaml
- id: RPM-ALG-0895
  page: 121
  vendor_label: "유형 20 등비수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 −6, 18, −54, 162, … 의 첫째항부터 제n항까지의 합 S_n 에 대하여 S_k=1092 를 만족시키는 k 의 값.
  category: "a=−6, r=−3 → 합 공식 → (−3)^k=729 → k 짝수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 · 합이 주어진 항수 k 구하기(음수 공비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_k=−6(1−(−3)^k)/(1+3)=−(3/2)(1−(−3)^k)=1092 → 1−(−3)^k=−728 → (−3)^k=729=3^6 → k=6 (짝수라 부호 일치). 음수 공비의 합 공식에서 분모 1−r=4 와 부호를 정확히 다루는 계산(Mk 2)과, (−3)^k=+729 가 k 짝수를 요구하는 T-부호·T-경계가 마찰. 통찰은 없어 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "S_k=−6(1−(−3)^k)/4=1092 → (−3)^k=729 → k=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0895.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 −6, 공비 −3, 합 1092 를 바꿀 수 있음. 제약: 합은 공식에서 (−3)^k 가 3 의 거듭제곱(홀짝 일치)으로 떨어지도록 역산해 만들 것(1092=−(3/2)(1−729)). 공비 절댓값 2·3 권장."
    creative: "(1) 합 대신 S_k 가 처음으로 1000 을 넘는 k 를 묻기(유형 22 · 부호 진동 때문에 짝수 k 만 → I-MI d1 ★3) (2) 공비를 양수로 바꾸면 ★1~2 (3) S_k=1092 와 a_k 를 함께 물어 두 답."
```

```yaml
- id: RPM-ALG-0896
  page: 121
  vendor_label: "유형 20 등비수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열에서 a_2:a_5=1:27, a_16−a_1=3^15−1 일 때 첫째항부터 제15항까지의 합. 5지선다.
  category: "비 → r=3 · 차 조건 → a_1=1 → S_15"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 · 비 조건과 차 조건에서 공비·첫째항 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_5/a_2=r^3=27 → r=3. a_16−a_1=a_1(3^15−1)=3^15−1 → a_1=1. S_15=(3^15−1)/(3−1)=(3^15−1)/2 → ①. 두 조건을 각각 r 와 a_1 로 해독하는 두 단계가 있어 단순 대입형은 아니지만 통찰은 없다. 선택지가 3^15 와 3^16, 분모 2 의 유무로 갈리는 T-표기 함정. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "r^3=27 → r=3 · a_1(3^15−1)=3^15−1 → a_1=1 → S_15=(3^15−1)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0896.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 1:27, 차 조건의 항 번호(16, 1)와 값을 바꿀 수 있음. 제약: 차 조건의 값이 a_1(r^m−1) 꼴로 첫째항이 정수로 드러나야 하고, 묻는 합의 항수와 지수(3^15)가 대응하도록 맞출 것."
    creative: "(1) 합 대신 a_1+a_3+…+a_15 (공비 9) 을 묻기(★2) (2) 첫째항을 남기고 S_15/a_16 처럼 비를 묻기(★3) (3) 차 조건을 로그 조건 log_3 a_16=15 로 위장(I-XU d1 ★3)."
```

```yaml
- id: RPM-ALG-0897
  page: 121
  vendor_label: "유형 20 등비수열의 합"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    공비가 음수인 등비수열이 a_1+a_3=15, a_3+a_5=60 을 만족시킬 때 첫째항부터 제10항까지의 합. 서술형.
  category: "묶음 비 → r^2=4 → r=−2 → a_1=3 → S_10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 · 묶음 비로 공비 복원(음수 공비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a_3+a_5)=r^2(a_1+a_3) → r^2=4, 공비가 음수이므로 r=−2. a_1(1+4)=15 → a_1=3. S_10=3(1−(−2)^10)/(1−(−2))=3(1−1024)/3=−1023. 묶음 비·부호 선택·합 공식의 표준 절차이며 r 의 부호(T-부호)만 함정. 벤더 중·서술형 → ★2.
  tier: star_2
  mechanism_primary: "(a_3+a_5)/(a_1+a_3)=r^2=4 → r=−2 → a_1=3 → S_10=3(1−2^10)/3=−1023"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1023$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0897.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 묶음 합(15, 60 → r^2=4)과 항수 10 을 바꿀 수 있음. 제약: 비가 완전제곱이어야 r 정수, a_1=15/(1+r^2) 이 정수, 합의 항수가 짝수면 (−2)^n 이 양수라 부호 처리가 단순해짐(홀수로 두면 부호 함정 강화)."
    creative: "(1) '공비가 음수' 를 빼고 두 공비 각각의 S_10 의 합을 묻기(I-MI d1 ★3) (2) S_10 대신 |a_1|+|a_2|+…+|a_10| 를 묻기(절댓값 → 공비 2 등비 합 ★3) (3) 등차수열 버전 a_1+a_3=15, a_3+a_5=… 로 바꾸면 ★1~2."
```

### 유형 21 부분의 합이 주어진 등비수열의 합

```yaml
- id: RPM-ALG-0898
  page: 122
  vendor_label: "유형 21 부분의 합이 주어진 등비수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열의 합 S_n 에 대하여 S_10=4, S_20=44 일 때 S_30 의 값.
  category: "구간합 S_10, S_20−S_10, S_30−S_20 이 공비 r^10 등비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10항씩 묶은 구간합 4, 40, ? 가 공비 r^10 인 등비수열 — 첫째항·공비를 구하지 않고 합의 구조를 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분의 합이 주어진 등비수열의 합 · 구간합이 등비(S_10, S_20 → S_30)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_20−S_10=40=r^10·S_10 → r^10=10, S_30−S_20=400 → S_30=444. (또는 S_20/S_10=1+r^10=11 로 같은 결과.) 구간합이 등비수열을 이룬다는 구조 발견(PD d1)이 유형의 전부이며 이후 계산은 없다. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "S_10=4, S_20−S_10=40 → r^10=10 → S_30−S_20=400 → S_30=444"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$444$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0898.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_10, S_20 의 값(4, 44 → 구간합 비 10)과 구간 길이 10 을 바꿀 수 있음. 제약: (S_20−S_10)/S_10 이 간단한 양수(r^10 은 짝수 거듭제곱이라 양수)여야 하고 S_30 이 정수. 구간 길이가 홀수면 r^n 이 음수일 수도 있어 조건 추가."
    creative: "(1) S_30 대신 S_40 이나 a_21+…+a_30 을 묻기(★2) (2) 역수 수열의 합 T_n 으로 위장하면 0901 골조(I-EQV 추가 ★3) (3) S_n=75, S_2n=1275 처럼 n 을 미지수로 두면 0900 골조 ★3."
```

```yaml
- id: RPM-ALG-0899
  page: 122
  vendor_label: "유형 21 부분의 합이 주어진 등비수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항부터 제10항까지의 합이 2, 제11항부터 제20항까지의 합이 12 인 등비수열의 제21항부터 제30항까지의 합. 5지선다.
  category: "구간합 2, 12, ? 가 공비 6 등비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10항 구간합이 공비 r^10 인 등비수열이므로 2, 12 다음은 12·6=72 — 구간합 구조 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분의 합이 주어진 등비수열의 합 · 구간합이 등비(구간합 직접 제시)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제11~20항의 합은 제1~10항의 합에 r^10 을 곱한 것이므로 r^10=6, 제21~30항의 합은 12·6=72. 0898 보다 조건이 이미 구간합으로 주어져 더 짧다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "구간합 2, 12 → r^10=6 → 다음 구간합 72"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0899.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간합(2, 12)과 구간 길이 10 을 바꿀 수 있음. 제약: 비 12/2=6 이 r^10 이 되므로 양수면 충분하고 답이 정수가 되게. 선택지에 등차 오답(12+10=22 꼴)과 2·6^2=72 의 이웃값을 유지."
    creative: "(1) 세 구간합의 '합' S_30 을 묻기(★2) (2) 구간 길이를 다르게(1~5항, 6~15항) 두면 공비 지수가 달라 r^5 를 먼저 구해야 함 ★3 (3) 등차수열 버전(구간합이 등차)으로 바꾸면 ★2 유지."
```

```yaml
- id: RPM-ALG-0900
  page: 122
  vendor_label: "유형 21 부분의 합이 주어진 등비수열의 합"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항이 5 인 등비수열에서 S_n=75, S_2n=1275 일 때 a_1+a_3+a_5+…+a_{2n−1} 의 값.
  category: "구간합 비 → r^n=16 → 합 공식으로 r=2 → 홀수항 합(공비 r^2)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "S_2n−S_n=r^n·S_n → r^n=1200/75=16 — n 을 모른 채 r^n 을 먼저 뽑는 구간합 구조"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분의 합이 주어진 등비수열의 합 · S_n, S_2n 에서 r^n 복원 후 홀수항 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    S_2n−S_n=r^n S_n → r^n=16. S_n=5(r^n−1)/(r−1)=75/(r−1)=75 → r=2 (따라서 n=4). 홀수 번째 항은 첫째항 5, 공비 r^2=4 인 등비수열 n 항이므로 5(4^n−1)/3=5·255/3=425. 지름길로 짝수항 합=r×홀수항 합이므로 홀수항 합=S_2n/(1+r)=1275/3=425 도 된다. 구간합 구조(PD d1) 뒤에 r 를 복원하고 부분수열의 합을 다시 세우는 두 계층이 있어 상중. 벤더 상중·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "S_2n/S_n=1+r^n=17 → r^n=16 → S_n 공식 → r=2 → 홀수항 합 = 5(1−16^2)/(1−4) = 425 (= S_2n/(1+r))"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$425$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0900.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 5, S_n=75, S_2n=1275 를 바꿀 수 있음. 제약: (S_2n−S_n)/S_n=r^n 이 r 의 정수 거듭제곱이고, S_n=a_1(r^n−1)/(r−1) 에서 r 가 정수로 역산되도록 세 수를 r, n 에서 거꾸로 만들 것(r=2, n=4, a_1=5 → 75, 1275). 답이 S_2n/(1+r) 로 정수."
    creative: "(1) 짝수항 합을 묻거나 '홀수항 합 − 짝수항 합' 을 묻기(★3) (2) r 를 구하지 않도록 S_3n 을 묻는 형태로 줄이면 0898 골조 ★2 (3) 홀수항 합 = S_2n/(1+r) 관계 자체를 증명·활용하게 하면 I-EQV d2 ★4."
```

```yaml
- id: RPM-ALG-0901
  page: 122
  vendor_label: "유형 21 부분의 합이 주어진 등비수열의 합"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    등비수열의 역수의 합 T_n=1/a_1+…+1/a_n 에 대하여 T_3=1/4, T_6=1 일 때 T_9 의 값. 서술형.
  category: "역수 수열이 공비 1/r 등비 → 구간합 T_3, T_6−T_3, T_9−T_6 등비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "{1/a_n} 도 첫째항 1/a_1, 공비 1/r 인 등비수열 — T_n 을 새 등비수열의 합으로 읽는 조건 변환"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3항 구간합 1/4, 3/4, ? 가 공비 (1/r)^3=3 인 등비수열 — 구간합 구조 발견"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "부분의 합이 주어진 등비수열의 합 · 역수 수열의 구간합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1/a_n 은 공비 1/r 인 등비수열이므로 T_3, T_6−T_3, T_9−T_6 이 등비: 1/4, 3/4, 9/4 → T_9=1+9/4=13/4. 역수 수열도 등비라는 변환(EQV d1)과 구간합 구조(PD d1) 두 단계가 겹쳐 0898 보다 한 층 깊지만 계산은 거의 없다. 벤더 상중·서술형 → ★3 (통찰 2 개이나 M_total 5 라 +1 은 적용하지 않음).
  tier: star_3
  mechanism_primary: "{1/a_n} 공비 1/r → 구간합 1/4, 3/4 → 비 3 → T_9=1+(3/4)·3=13/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{13}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0901.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "T_3, T_6 의 값(1/4, 1 → 구간합 비 3)과 구간 길이 3 을 바꿀 수 있음. 제약: (T_6−T_3)/T_3 이 (1/r)^3 이므로 임의의 양수·음수가 가능하나 답이 간단한 분수가 되게. 홀수 구간이라 비가 음수여도 성립."
    creative: "(1) T_9 대신 a_1a_2…a_n 같은 곱 조건과 섞기(★4) (2) 역수 대신 제곱 수열 a_n^2 의 합으로 바꾸면 공비 r^2 → 같은 골조 ★3 (3) 역수 조건을 없애고 S_3, S_6 → S_9 로 두면 0898 골조 ★2."
```

### 유형 22 조건을 만족시키는 등비수열의 합

```yaml
- id: RPM-ALG-0902
  page: 122
  vendor_label: "유형 22 조건을 만족시키는 등비수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    제2항이 3, 제5항이 24 인 등비수열에서 첫째항부터 제 몇 항까지의 합이 처음으로 720 보다 커지는지.
  category: "두 항 → r=2, a_1=3/2 → S_n 부등식 → 2^n>481"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 합 · S_n 이 처음으로 기준을 넘는 항수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r^3=8 → r=2, a_1=3/2, S_n=(3/2)(2^n−1)>720 → 2^n>481 → 2^9=512 → n=9, 제9항. 첫째항이 분수(3/2)라 부등식 정리에 계산이 조금 붙고, '처음으로 커지는' 의 경계(T-경계)를 지키면 된다. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "r^3=8 → r=2, a_1=3/2 → (3/2)(2^n−1)>720 → 2^n>481 → n=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "제$9$항"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0902.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항(3, 24)과 기준 720 을 바꿀 수 있음. 제약: 공비가 2·3 정수, 기준/a_1+1 이 거듭제곱 사이(481 은 256 과 512 사이)에 놓이도록. 첫째항이 분수면 계산 마찰(Mk)만 늘고 ★ 는 그대로."
    creative: "(1) '합이 720 보다 작은 n 의 최댓값' 으로 바꾸면 경계 처리 ★2 (2) 공비를 1/2 로 두고 |2a_1−S_n|<ε 꼴로 바꾸면 0903 골조 ★2 (3) 첫째항을 남긴 채 S_n>100a_1 로 상대화하면 0904 골조 ★3."
```

```yaml
- id: RPM-ALG-0903
  page: 122
  vendor_label: "유형 22 조건을 만족시키는 등비수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 1, 1/2, 1/4, … 의 합 S_n 에 대하여 |2−S_n|<0.05 를 만족시키는 자연수 n 의 최솟값. 5지선다.
  category: "S_n=2−(1/2)^{n−1} → |2−S_n|=(1/2)^{n−1} → 2^{n−1}>20"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 합 · |극한값−S_n| 오차 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n=(1−(1/2)^n)/(1−1/2)=2−(1/2)^{n−1} 이므로 2−S_n=(1/2)^{n−1}>0, 조건은 2^{n−1}>20 → n−1=5 → n=6. 절댓값은 부호가 정해져 바로 벗겨지고, 0.05=1/20 환산(T-단위)과 지수 n−1 경계(T-경계)가 함정. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "S_n=2−2^{1−n} → 2^{1−n}<1/20 → 2^{n−1}>20 → n=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0903.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 1, 공비 1/2, 허용 오차 0.05 를 바꿀 수 있음. 제약: 극한값 a_1/(1−r) 가 간단한 수(2), 오차의 역수(20)가 거듭제곱 사이에 놓이게. 공비 1/3 이면 3^{n−1} 비교."
    creative: "(1) 공비를 −1/2 로 두면 2−S_n 의 부호가 진동해 절댓값이 진짜로 필요 → T-부호 추가 ★3 (2) 'S_n>1.95 인 n 의 최솟값' 으로 절댓값 없이 위장(★2) (3) 오차를 10^{−3} 으로 두어 log 어림을 요구하면 I-XU d1 ★3."
```

```yaml
- id: RPM-ALG-0904
  page: 122
  vendor_label: "유형 22 조건을 만족시키는 등비수열의 합"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 항이 양수인 등비수열에서 (a_1+a_2):(a_3+a_4)=1:4 일 때 S_n>100a_1 을 만족시키는 자연수 n 의 최솟값.
  category: "묶음 비 → r^2=4 → r=2 → S_n/a_1=2^n−1>100"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "S_n>100a_1 을 S_n/a_1=(2^n−1)>100 으로 바꿔 첫째항이 없어도 되는 상대 조건으로 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 만족시키는 등비수열의 합 · 첫째항 상대 조건 S_n>k·a_1"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (a_3+a_4)=r^2(a_1+a_2) → r^2=4, 양수 조건으로 r=2. S_n=a_1(2^n−1) 이므로 S_n>100a_1 ⇔ 2^n>101 → 2^7=128 → n=7. 첫째항이 주어지지 않아 a_1 을 약분하는 조건 읽기(EQV d1)가 필요하고, r 의 부호(T-부호)·경계(T-경계)가 함정. 벤더 상중·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "(a_3+a_4)/(a_1+a_2)=r^2=4 → r=2 (양수) → a_1(2^n−1)>100a_1 → 2^n>101 → n=7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0904.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 1:4 (r^2=4)와 배수 100 을 바꿀 수 있음. 제약: 비가 완전제곱이어야 r 정수, 배수+1 이 거듭제곱 사이(101 → 128)에 놓이게. '모든 항이 양수' 는 r=−2 를 배제하는 조건이므로 유지하거나 의도적으로 빼서 분기."
    creative: "(1) '모든 항이 양수' 를 빼고 r=±2 각각의 최소 n 을 묻기(I-MI d1 · 음수 공비면 S_n 부호 진동 ★4) (2) S_n>100a_1 을 S_n>100a_k 로 바꾸면 2^n−1>100·2^{k−1} ★3 (3) 조건을 a_n>100a_1 로 바꾸면 유형 15 기본형 ★2."
```

### 유형 23 등비수열의 합과 일반항 사이의 관계

```yaml
- id: RPM-ALG-0905
  page: 123
  vendor_label: "유형 23 등비수열의 합과 일반항 사이의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    합 S_n 이 2S_n+1=5^n 을 만족시키는 수열의 일반항이 a_n=a·r^{n−1} 일 때 a−r 의 값. 5지선다.
  category: "S_n 정리 → a_1=S_1 · a_n=S_n−S_{n−1} → 2·5^{n−1} → a, r"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합과 일반항의 관계 · S_n → a_n (첫째항부터 등비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n=(5^n−1)/2. a_1=S_1=2, n≥2 에서 a_n=(5^n−5^{n−1})/2=2·5^{n−1}, n=1 도 만족. a=2, r=5 → a−r=−3. S_n→a_n 의 표준 절차이며 5^n−5^{n−1}=4·5^{n−1} 정리(Mk 2)와 n=1 확인(T-경계)이 전부. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "S_n=(5^n−1)/2 → a_n=S_n−S_{n−1}=2·5^{n−1} (n≥2, n=1 도 성립) → a=2, r=5 → −3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0905.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5, 계수 2, 상수 1 을 바꿀 수 있음. 제약: S_n=(p^n−1)/2 처럼 상수항이 −(p^0 의 계수) 여야 첫째항부터 등비(그렇지 않으면 n=1 예외가 생겨 문제 취지가 0906 형으로 바뀜). 선택지가 a−r 이므로 정수."
    creative: "(1) 2S_n+1=5^n 을 S_n 에 대한 다른 일차식(3S_n−2=…)으로 위장(★2) (2) 상수를 어긋나게 두어 a_1 만 따로인 수열로 만들면 0906 골조 ★2 (3) 상수 k 를 미지수로 두고 등비가 되는 k 를 묻기(0907 골조 · I-EQV d1 ★2)."
```

```yaml
- id: RPM-ALG-0906
  page: 123
  vendor_label: "유형 23 등비수열의 합과 일반항 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_n=2^n−2 인 수열의 a_1+a_3+a_5 의 값. 5지선다.
  category: "a_1=S_1=0 · a_n=2^{n−1} (n≥2) → 첫째항 예외 처리 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합과 일반항의 관계 · S_n → a_n 첫째항 예외"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_1=S_1=0. n≥2 에서 a_n=2^n−2^{n−1}=2^{n−1} 이고 n=1 을 넣은 값 1 과 다르므로 a_1=0 은 예외. a_1+a_3+a_5=0+4+16=20. 예외를 놓치면 1+4+16=21(③) 로 빠지도록 짜인 T-경계 함정 문항. 절차는 표준. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "S_1=0 → a_1=0 · a_n=S_n−S_{n−1}=2^{n−1} (n≥2) → 0+4+16=20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0906.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n=2^n−2 의 밑 2 와 상수 −2 를 바꿀 수 있음. 제약: 상수가 −1 이면 첫째항부터 등비가 되어 예외가 사라지므로 −1 이 아닌 값을 유지(예외 만들기). 묻는 항에 a_1 을 반드시 포함해야 함정이 작동함."
    creative: "(1) a_1 을 포함하지 않는 a_2+a_4+a_6 을 묻기(함정 제거 ★1) (2) 'a_n=2^{n−1} 이 성립하는 n 의 범위' 를 묻기(★2) (3) S_n=2^n+k 에서 a_1+a_3+a_5=20 이 되도록 하는 k 를 역으로 묻기(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0907
  page: 123
  vendor_label: "유형 23 등비수열의 합과 일반항 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_n=3^{n−1}+k 인 수열이 첫째항부터 등비수열을 이루도록 하는 상수 k 의 값.
  category: "a_1=1+k · a_n=2·3^{n−2} (n≥2) → a_1 이 일반식에 맞을 조건 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'첫째항부터 등비' ⇔ a_1=S_1 이 n≥2 일반식 2·3^{n−2} 의 n=1 값 2/3 과 같다 — 조건을 첫째항 일치식으로 변환 (S_n=A·r^n+B 는 A+B=0 일 때 첫째항부터 등비)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합과 일반항의 관계 · 첫째항부터 등비가 되는 상수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_1=S_1=1+k, n≥2 에서 a_n=3^{n−1}−3^{n−2}=2·3^{n−2}. 첫째항부터 등비이려면 1+k=2·3^{−1}=2/3 → k=−1/3. (S_n=(1/3)·3^n+k 에서 1/3+k=0 으로도 같다.) 조건을 '첫째항 일치' 로 옮기는 EQV d1 이 핵심이고 계산은 가볍다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "a_1=1+k · a_n=2·3^{n−2} (n≥2) → 1+k=2/3 → k=−1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0907.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 지수 밀림(n−1)을 바꿀 수 있음. 제약: S_n=A·r^n+k 꼴에서 답은 k=−A 이므로 A 가 분수(3^{n−1}=(1/3)·3^n → A=1/3)가 되게 두어야 답이 −1/3 처럼 비자명. 지수 n−1 을 n+1 로 바꾸면 k=−3."
    creative: "(1) k 를 주고 '첫째항부터 등비가 되는가' 를 판별하는 참거짓(★1) (2) S_n=A·3^n+k 에서 a_2 의 값 조건과 함께 A, k 두 미지수(★3) (3) 등차수열 버전 S_n=an^2+bn+c 가 첫째항부터 등차일 조건 c=0 (★2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 2 · ★2 24 · ★3 9 · ★4 0 · ★5 0
- 통찰형 4(0883 · 0890 · 0891 · 0901) · 절차형 31 · premium 0 · insights 가 비어 있지 않은 블록 15(depth 1 단독 11 포함 — check 도구의 「통찰형」 수는 이 15 를 센다)
- 통찰 유형 빈도(18건): I-EQV 4 · I-PD 4 · I-SYM 3 · I-XU 3 · I-CON 2 · I-MI 1(d2) · I-RT 1
- M_total: 4 → 6문 · 5 → 16문 · 6 → 8문 · 7 → 5문 (최고 7 · ★3 는 M_total 5~7)
- 벤더 라벨 대비 조정: −1 적용 1문(0873 대표문제 → ★1) · +1 적용 1문(0890 중 → ★3) · 중하 출발 ★1 채택 1문(0881) · 나머지 32문 출발점 유지
- type_hint 상위: 「항 사이의 관계가 주어진 등비수열」 4 · 「두 수 사이에 수를 넣은 등비수열」 4 · 「등비중항」 4 · 「등비수열을 이루는 세 수(대칭 매개화)」 4 · 「등비수열의 합(공비·첫째항 복원)」 4 · 「부분의 합이 주어진 등비수열의 합(구간합 등비)」 4 — 그다음 「조건을 만족시키는 항의 번호(지수 부등식)」 3 · 「조건을 만족시키는 등비수열의 합(지수 부등식)」 3 · 「S_n 과 a_n 의 관계(첫째항 확인)」 3 · 「등비수열의 활용(도형 반복 시행)」 2
- 그림: 2문(`crop:fig-0892.png` · `crop:fig-0893.png`)
- target_cohort: 하위권 2 · 중하위권 24 · 중위권 5(0876 · 0879 · 0887 · 0900 · 0904) · 중상위권 4(0883 · 0890 · 0891 · 0901) · 상위권 0
- 전사 답 확인 필요: 없음(35문 모두 재풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0887 | 벤더 상중이나 M_total 5·통찰은 근과 계수 결합 XU d1 하나뿐(근을 직접 구해도 세 줄) → 판정은 ★2 에 가까움. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-ALG-0890 | 벤더 중이나 교점→방정식(RT d1) + 합·쌍합 비(CON d1) 통찰 2 개·M_total 6 → +1 규칙으로 ★3 채택. 같은 골조의 0891 이 벤더 상중(★3)인 것과 정합 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 RPM 유형 제목과 거의 1:1 이다(위 요약의 상위 6개가 각 4문). 다만 유형 제목이 「포장」이고 실제 골조는 더 적은 수로 묶인다.
- 따로 세워야 할 유형: (a) 「구간합이 등비」(유형 21, 0898~0901)는 등차 버전(구간합이 등차)과 별개 골조이므로 별도 유형으로 두되, 「역수·제곱 수열로의 변환 뒤 구간합」(0901)과 「S_n·S_2n 에서 r^n 복원 뒤 부분수열 합」(0900)을 하위형으로 표기. (b) 「세 수 대칭 매개화 a/r, a, ar」(유형 18)은 합·곱(0888), 삼차방정식 근(0889), 곡선 교점(0890), 직육면체(0891)로 포장이 달라도 한 유형이며, 「합·쌍합 비로 가운데 항」(0890·0891 의 CON) 을 하위 변형으로 표기. (c) 「S_n → a_n 첫째항 확인」(유형 23)은 등차·등비 공통 골조라 단원 공통 유형으로 두는 편이 맞음. (d) 0883 은 유형 16 에 있으나 실제 골조는 「r^{n+1}=p^m 의 자연수 해 케이스」로, 정수 조건 케이스 유형(I-MI)으로 따로 표기해야 base ★ 가 맞는다.
- 통합해도 될 유형: 유형 15(항의 번호 부등식, 0877~0879)와 유형 22(합의 부등식, 0902~0904)는 「지수 부등식으로 n 의 최솟값」 골조가 같아 한 유형의 두 하위형으로 통합 가능. 유형 14(항 사이의 관계)와 유형 20 앞부분(두 항 → 공비·첫째항 복원, 0894·0896·0897)도 「묶음 비·항의 비로 공비 복원」 공통 골조. 유형 17(등비중항)과 유형 18(세 수)은 「가운데 항 중심」 공통 아이디어가 있으나 매개화 방식(중항 식 vs a/r, a, ar)이 달라 분리 유지.
- 단원 결합(I-XU)이 붙는 자리: 나머지정리(0885)·이차방정식 근과 계수(0887)·삼차방정식 근과 계수(0889)는 모두 「다른 단원의 표준 도구 한 번」 수준(depth 1)이라 base ★ 를 올리는 근거로 쓰지 말고, 변형 시 도구를 바꾸는 축(로그·지수 조건으로 위장)으로만 활용.
