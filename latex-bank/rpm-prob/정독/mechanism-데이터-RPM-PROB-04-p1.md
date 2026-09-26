---
name: mechanism-데이터-RPM-PROB-04-p1
description: RPM 확률과 통계 04 확률분포(1/3 · 교과서 04-1~04-5 + 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 04 확률분포 (1)
  unit_code: PROB-04
  part: "1/3"
  extract_range: "55~58쪽 · 0314~0342"
  total_problems: 29
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 04 확률분포 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 04단원 「확률분포」의 앞 1/3(55~58쪽 · 문항 0314~0342 · 29문)을 다룬다. 구성은 교과서 구역 22문(04-1 확률변수와 확률분포 6 · 04-2 이산확률변수의 확률분포 3 · 04-3 기댓값·분산·표준편차 3 · 04-4 확률변수 $aX+b$ 2 · 04-5 이항분포 8)과 유형 구역 7문(유형 01 확률질량함수의 성질 (1) 4 · 유형 02 확률질량함수의 성질 (2) 3)이다. 단원 도입부라 벤더 난이도 신호가 얕다 — 교과서 구역 22문에는 `level` 도 `tag` 도 없고, 유형 구역에서야 「대표문제」 2개와 `level` 중하 2 · 중 3 이 붙는다. 그래서 교과서 구역은 ★1 출발점에서 M_total 만으로 ±1 을 조정했고, 유형 구역은 구역 출발점 ★2(중하는 ★1~2)에서 통찰 유무로 조정했다.

이 범위의 실질적 변별점은 두 갈래다. 하나는 **확률의 총합이 1 이라는 한 줄짜리 조건을 어떤 식으로 옮기느냐**(표의 상수 · 구간별 정의 · 망원합 · 이차방정식 근 기각)이고, 다른 하나는 **말로 된 시행을 이항분포 $\mathrm{B}(n,\,p)$ 로 옮길 수 있느냐**(비복원 추출 반례 포함)다. 나머지는 $\mathrm{E}(X)=np$, $\mathrm{V}(X)=npq$, $\mathrm{E}(aX+b)=a\mathrm{E}(X)+b$ 같은 공식 적용이라 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 교과서 04-1 확률변수와 확률분포

```yaml
- id: RPM-PROB-0314
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위를 3번 던질 때 1의 눈이 나오는 횟수 X 가 이산확률변수인지 연속확률변수인지 판정.
  category: "X 의 값을 나열 → 유한개(셀 수 있음) → 이산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수와 연속확률변수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    X 가 가질 수 있는 값이 0,1,2,3 네 개뿐이므로 셀 수 있다. 정의 대조 한 단계로 끝난다.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "X 의 값 = 0,1,2,3 → 셀 수 있음 → 이산확률변수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "이산확률변수"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수(3 → 5 · 10)와 주목하는 눈(1 → 짝수의 눈)을 바꿔도 판정은 그대로. 제약: 값이 유한한 정수 집합이 되도록 '횟수'를 세는 형태를 유지해야 한다."
    creative: "(1) '3번 던지는 데 걸린 시간'으로 바꾸면 연속으로 뒤집힘(★1 유지 · 판정만 반대) (2) '1의 눈이 처음 나올 때까지 던진 횟수'는 값이 무한하지만 셀 수 있어 여전히 이산(★2 · 가산무한 개념 추가) (3) 네 상황을 ㄱㄴㄷ 보기로 묶어 이산인 것만 고르게 하면 ★2."
```

```yaml
- id: RPM-PROB-0315
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    어느 반 학생들의 키 X 가 이산확률변수인지 연속확률변수인지 판정.
  category: "키는 구간 안의 모든 실숫값을 취함 → 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수와 연속확률변수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    키는 어떤 구간 안의 값을 모두 취할 수 있으므로 연속. 정의 대조 한 단계.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "키 = 구간 안의 임의의 실숫값 → 셀 수 없음 → 연속확률변수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "연속확률변수"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "측정 대상(반 학생 → 신생아)과 측정량(키 → 몸무게·체온·통화 시간)을 바꿔도 연속 판정은 유지. 제약: 측정값이 구간 전체를 취하는 양이어야 한다."
    creative: "(1) '키가 170 cm 이상인 학생 수'로 바꾸면 이산으로 뒤집힘(★1) (2) 'cm 단위로 반올림한 키'로 주면 기록 방식 때문에 이산이 되어 '측정량 자체 vs 기록 방식' 함정이 생김(★2 · I-EQV d1) (3) 예시 네 개 중 연속인 것의 개수를 묻기(★2)."
```

```yaml
- id: RPM-PROB-0316
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    어느 공장에서 생산되는 제품의 개수 X 가 이산확률변수인지 연속확률변수인지 판정.
  category: "개수는 0 이상의 정수 → 셀 수 있음 → 이산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수와 연속확률변수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '개수'라는 말 자체가 정수값을 뜻하므로 이산. 정의 대조 한 단계.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "제품의 개수 = 0 이상의 정수 → 셀 수 있음 → 이산확률변수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "이산확률변수"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세는 대상(제품 개수 → 불량품 개수 · 하루 방문객 수)을 바꿔도 이산 판정 유지. 제약: 세는 단위가 쪼갤 수 없는 것이어야 한다."
    creative: "(1) '생산된 제품의 총 무게'로 바꾸면 연속(★1) (2) '생산량이 1000개를 넘을 때까지 걸린 시간'은 연속이면서 개수 조건이 섞여 판정 근거를 말로 쓰게 하면 ★2 (3) 이산·연속 예시를 짝지어 표를 채우게 하면 ★1~2."
```

```yaml
- id: RPM-PROB-0317
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    배차 간격이 7분인 버스를 기다리는 시간 X 가 이산확률변수인지 연속확률변수인지 판정.
  category: "기다리는 시간은 0 이상 7 미만의 모든 실숫값 → 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수와 연속확률변수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    시간은 구간 안의 값을 모두 취하므로 연속. '7분'이라는 수는 값의 범위만 정할 뿐 판정에는 쓰이지 않는다.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기다리는 시간 = 0 이상 7 이하의 임의 실숫값 → 셀 수 없음 → 연속확률변수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "연속확률변수"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배차 간격(7분 → 10분 · 15분)을 바꿔도 연속 판정 유지. 제약: 간격 값이 판정 근거가 아니므로 어떤 양수로 바꿔도 된다."
    creative: "(1) '버스가 올 때까지 지나간 지하철 수'로 바꾸면 이산(★1) (2) 이어서 X 의 범위를 함께 쓰게 하면 경계 처리(0 포함 · 7 포함 여부)가 붙어 ★2 (3) 기다리는 시간이 3분 이하일 확률까지 물으면 연속확률분포 도입 문항이 되어 ★2~3."
```

```yaml
- id: RPM-PROB-0318
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위 한 개를 던질 때 나오는 눈의 수 X 가 가질 수 있는 값을 모두 구하기.
  category: "표본공간의 원소를 그대로 X 의 값으로 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률변수가 가질 수 있는 값 나열"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    눈의 수가 곧 X 이므로 1~6 을 그대로 쓰면 된다. 변환 단계가 없다.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표본공간 {1,…,6} → X 의 값 1,2,3,4,5,6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$, $2$, $3$, $4$, $5$, $6$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위 면 수(6 → 8 · 12면체)를 바꾸면 값의 개수만 늘어남. 제약: 면의 눈이 1부터 연속된 정수여야 나열이 단순하다."
    creative: "(1) '눈의 수를 3으로 나눈 나머지'로 바꾸면 X 의 값이 0,1,2 로 줄어 대응을 한 번 거쳐야 함(★2 · I-EQV d1) (2) 주사위 2개의 눈의 합이면 2~12(★2) (3) 두 눈의 차의 절댓값이면 0~5 이고 0 이 빠지기 쉬워 함정이 생김(★2)."
```

```yaml
- id: RPM-PROB-0319
  page: 55
  vendor_label: "교과서 04-1 확률변수와 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    어떤 야구 선수가 4번 타석에 설 때 안타를 치는 횟수 X 가 가질 수 있는 값을 모두 구하기.
  category: "0회부터 전부 성공까지 → 0 이상 4 이하의 정수 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률변수가 가질 수 있는 값 나열"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    시행 횟수 4 에 대해 성공 횟수는 0 부터 4 까지. 0 을 빠뜨리는 것이 유일한 함정(T-범위)이다.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4회 시행의 성공 횟수 → 0,1,2,3,4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$, $1$, $2$, $3$, $4$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타석 수(4 → 3 · 5)를 바꾸면 값의 상한만 변함. 제약: 상한이 시행 횟수와 같아야 하고 하한은 항상 0 이다."
    creative: "(1) '적어도 1개의 안타를 친 경우만 생각한다'는 단서를 붙이면 하한이 1 로 올라가 조건 해석이 필요(★2 · I-EQV d1) (2) '안타 수 - 삼진 수'로 바꾸면 음수까지 포함해 범위가 넓어짐(★2~3) (3) 뒤이어 각 값의 확률을 이항분포로 묻게 하면 04-5 와 연결되어 ★2."
```

### 교과서 04-2 이산확률변수의 확률분포

```yaml
- id: RPM-PROB-0320
  page: 55
  vendor_label: "교과서 04-2 이산확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 서로 다른 동전 2개를 동시에 던질 때 앞면이 나오는 동전의 개수 X 가 가질 수 있는 값과 X 의 확률분포표.
  category: "표본공간 4가지 나열 → 값별 경우의 수 세기 → 확률분포표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행에서 확률분포표 만들기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (앞,앞)(앞,뒤)(뒤,앞)(뒤,뒤) 네 가지를 세어 1/4, 1/2, 1/4 로 배분한다. 계산은 한 줄.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "표본공간 4가지 → 앞면 개수별 경우의 수 1:2:1 → 확률 1/4, 1/2, 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0$, $1$, $2$ (2) 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{1}{4}$, $\mathrm{P}(X=1)=\dfrac{1}{2}$, $\mathrm{P}(X=2)=\dfrac{1}{4}$)'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(2 → 3 · 4)를 바꾸면 확률이 이항계수 비 1:3:3:1 등으로 늘어남. 제약: 동전을 '서로 다른'으로 두어야 경우의 수가 2^n 로 셀 수 있다."
    creative: "(1) 동전을 편향(앞면 확률 1/3)으로 바꾸면 분포가 비대칭이 되어 계산 부담만 늘고 ★는 유지 (2) '앞면과 뒷면 개수의 차'로 값을 바꾸면 값이 0,2 로 겹쳐 합산이 필요(★2 · I-EQV d1) (3) 분포표에 이어 E(X)·V(X)까지 묻게 하면 04-3 과 합쳐져 ★2."
```

```yaml
- id: RPM-PROB-0321
  page: 55
  vendor_label: "교과서 04-2 이산확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ 빨간 공 4개·파란 공 2개가 든 주머니에서 3개를 동시에 꺼낼 때 나오는 빨간 공의 개수 X 의 값·확률질량함수·확률분포표.
  category: "파란 공이 2개뿐 → X 의 범위 1~3 → 조합으로 확률질량함수 → 표"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'3개를 꺼낸다 + 파란 공은 2개뿐' 을 'X ≥ 1' 로 옮겨야 값의 범위가 0~3 이 아니라 1~3 임이 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조합으로 확률질량함수 세우기(비복원 추출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    범위 결정이 실제 관문이다 — 파란 공이 2개뿐이라 X=0 이 불가능한데 습관적으로 0 부터 쓰기 쉽다(T-범위).
    그 뒤는 C(4,x)C(2,3-x)/C(6,3) 을 x=1,2,3 에 대입하는 절차. 교과서 ★1 출발 · 조건 번역 통찰 1개(EQV d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "파란 공 2개 제한 → X = 1,2,3 → P(X=x)=C(4,x)C(2,3-x)/C(6,3) → 1/5, 3/5, 1/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '(1) $1$, $2$, $3$ (2) $\mathrm{P}(X=x)=\dfrac{{}_4\mathrm{C}_x\times{}_2\mathrm{C}_{3-x}}{{}_6\mathrm{C}_3}$ $(x=1,\,2,\,3)$ (3) 풀이 참조 ($\mathrm{P}(X=1)=\dfrac{1}{5}$, $\mathrm{P}(X=2)=\dfrac{3}{5}$, $\mathrm{P}(X=3)=\dfrac{1}{5}$)'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(빨강 4·파랑 2 → 빨강 5·파랑 3)와 꺼내는 개수(3 → 2 · 4)를 바꿀 수 있음. 제약: 꺼내는 개수가 한쪽 색의 개수보다 크면 X 의 하한이 0 보다 커지므로 답의 범위를 반드시 다시 계산해야 하고, 분모 C(n,r) 가 약분되어 간단한 분수가 되도록 고르는 편이 좋다."
    creative: "(1) 색을 3가지로 늘려 '빨간 공의 개수'를 묻기(범위 판단은 같고 조합만 복잡 · ★2 유지) (2) 한 개씩 비복원으로 꺼내 순서를 붙이면 같은 답이 나오는지 비교하게 해 I-SC(두 갈래 비교) 추가 → ★3 (3) 분포표를 주고 주머니 구성(빨강·파랑 개수)을 역추적하게 하면 I-BW → ★3~4."
```

```yaml
- id: RPM-PROB-0322
  page: 55
  vendor_label: "교과서 04-2 이산확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ X 의 확률분포표(X = -1, 0, 1, 2 에 확률 1/3, a, 2/9, 3a)가 주어질 때 상수 a, P(X=1 또는 X=2), P(-1 ≤ X ≤ 1).
  category: "확률의 총합 1 → a 결정 → 해당 칸 확률 합하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 총합 1 로 상수 결정 후 구간 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/3 + a + 2/9 + 3a = 1 에서 4a = 4/9 로 a 를 얻고, 나머지는 표의 칸을 골라 더하기만 한다.
    ⑶ 의 -1 ≤ X ≤ 1 은 양끝을 포함하는 경계 확인(T-경계)이 유일한 함정. 교과서 ★1 출발 · 통찰 없음 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "총합 1 → 4a = 4/9 → a = 1/9 → 해당 칸 확률을 더해 5/9, 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $\dfrac{1}{9}$ (2) $\dfrac{5}{9}$ (3) $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: crop:fig-0322.png
  latex: latex-bank/rpm-prob/items/0322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 확률(1/3, 2/9)과 a 의 계수(1, 3)를 바꿀 수 있음. 제약: 합이 1 이 될 때 a 가 양의 유리수여야 하고, 모든 칸의 확률이 0 이상 1 이하가 되어야 한다(계수 합이 커지면 a 가 너무 작아져 지저분해짐)."
    creative: "(1) a 를 a^2 이나 2a-1 로 바꾸면 이차방정식이 되고 근 하나가 확률 조건으로 기각되어 ★2 (0337 과 같은 골조) (2) ⑶ 을 P(|X| ≤ 1) 이나 P(X^2 ≤ 1) 로 바꾸면 사건 번역이 한 단계 붙어 ★2 (I-EQV d1) (3) a 를 주고 빠진 칸의 X 값을 역추적시키면 I-BW → ★3."
```

### 교과서 04-3 이산확률변수의 기댓값(평균), 분산, 표준편차

```yaml
- id: RPM-PROB-0323
  page: 55
  vendor_label: "교과서 04-3 이산확률변수의 기댓값(평균), 분산, 표준편차"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ X 의 확률분포표(X = 1, 2, 3, 4 에 확률 1/4, 1/8, 1/4, 3/8)가 주어질 때 E(X), V(X), σ(X).
  category: "표에서 Σx·P → E(X) → E(X^2) - {E(X)}^2 → V(X) → √V(X)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표에서 E(X)·V(X)·σ(X)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의식 그대로 두 번 합을 만들면 끝난다. 분모가 4·8 로 통분만 하면 되고 판단할 갈래가 없다.
    교과서 구역 ★1 출발 · 통찰 없음 · M_total 6 → ★1. 분수 통분량 때문에 Mₖ 만 2.
  tier: star_1
  mechanism_primary: "E(X)=Σx P(X=x) → E(X^2)=Σx^2 P(X=x) → V=E(X^2)-{E(X)}^2 → σ=√V"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{11}{4}$ (2) $\dfrac{23}{16}$ (3) $\dfrac{\sqrt{23}}{4}$'
  answer_source: "답지"
  figure: crop:fig-0323.png
  latex: latex-bank/rpm-prob/items/0323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 의 값(1~4)과 확률(분모 8 로 통일된 1/4, 1/8, 1/4, 3/8)을 바꿀 수 있음. 제약: 확률의 합이 1 이고 분모를 2의 거듭제곱으로 두면 E·V 가 깔끔한 분수로 떨어진다. σ 가 무리수가 되는 것은 허용(정답 형태가 √꼴)."
    creative: "(1) V(X)=Σ(x-m)^2 P 로 풀게 하면 같은 답에 다른 경로라 I-SC 비교 문항으로 확장 가능(★3) (2) 확률 한 칸을 미지수로 바꾸고 E(X) 값을 주면 역추적이 되어 I-BW → ★3 (3) 이어서 Y=4X+2 의 평균·분산을 묻게 하면 0327 과 같은 층(★2)."
```

```yaml
- id: RPM-PROB-0324
  page: 55
  vendor_label: "교과서 04-3 이산확률변수의 기댓값(평균), 분산, 표준편차"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 주사위를 2번 던질 때 3의 약수의 눈이 나오는 횟수 X 의 확률분포표를 완성하고 E(X), V(X), σ(X) 구하기.
  category: "3의 약수 = 1,3 → p = 1/3 → 독립시행 확률로 표 완성 → E·V·σ"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행에서 분포표를 만들어 E·V·σ"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 층이 이어 붙어 있다 — 먼저 시행에서 분포표를 만들고(3의 약수가 1,3 이라는 개수 세기 포함) 그 다음 정의식으로 E·V·σ.
    단계 수가 7 을 넘어 Mₛ=3. 교과서 ★1 출발 · 통찰 없음 · M_total 7 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "p=2/6=1/3 → P(X=k)=C(2,k)(1/3)^k(2/3)^{2-k} → 4/9, 4/9, 1/9 → E=2/3, V=4/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{4}{9}$, $\mathrm{P}(X=1)=\dfrac{4}{9}$, $\mathrm{P}(X=2)=\dfrac{1}{9}$) (2) $\mathrm{E}(X)=\dfrac{2}{3}$, $\mathrm{V}(X)=\dfrac{4}{9}$, $\sigma(X)=\dfrac{2}{3}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수(2 → 3)와 사건(3의 약수 → 6의 약수 p=2/3 · 소수의 눈 p=1/2)을 바꿀 수 있음. 제약: 횟수를 3 이상으로 올리면 표의 칸이 늘어 계산만 무거워지고 ★는 오르지 않는다(§2.11 YELLOW). p 는 분모가 2·3 인 값으로 두어야 E·V 가 깔끔하다."
    creative: "(1) '3의 약수' 를 '3의 배수' 나 '소수' 로 바꾸면 눈의 개수 세기가 함정이 됨(★2 유지) (2) E(X) 를 주고 던진 횟수 n 을 역추적하게 하면 I-BW → ★3 (3) 04-5 와 연결해 같은 상황을 B(2, 1/3) 으로 보고 np·npq 로 검산하게 하면 두 갈래 비교(I-SC) → ★3."
```

```yaml
- id: RPM-PROB-0325
  page: 55
  vendor_label: "교과서 04-3 이산확률변수의 기댓값(평균), 분산, 표준편차"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 50원짜리 동전 2개를 동시에 던질 때 앞면이 나온 동전의 금액의 합 X 원의 확률분포표와 기댓값.
  category: "앞면 개수 0,1,2 → 금액 0,50,100 으로 값만 교체 → 기댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "금액·점수로 값이 바뀐 확률변수의 기댓값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0320 과 같은 분포(1/4, 1/2, 1/4)에 X 의 값만 개수 대신 금액으로 바뀐 문항이다.
    기댓값은 0·1/4 + 50·1/2 + 100·1/4 = 50. 교과서 ★1 출발 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "앞면 개수 분포 1/4, 1/2, 1/4 → 값을 0, 50, 100 으로 → E(X)=50"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{1}{4}$, $\mathrm{P}(X=50)=\dfrac{1}{2}$, $\mathrm{P}(X=100)=\dfrac{1}{4}$) (2) $50$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전의 금액(50 → 100 · 500)과 개수(2 → 3)를 바꿀 수 있음. 제약: 같은 금액의 동전이면 값이 등차로 늘어서 E(X)=금액×개수×1/2 로 간단하지만, 서로 다른 금액(예: 100원 1개 + 500원 1개)으로 바꾸면 값이 겹치지 않아 표가 4칸으로 늘어난다."
    creative: "(1) 100원·500원 동전 한 개씩으로 바꾸면 값의 대응이 1대1 이 되어 표 만들기가 본체가 됨(★2) (2) '앞면 금액의 합이 50원 이상일 확률'을 덧붙이면 사건 번역 한 단계(★2) (3) 참가비를 받고 X 원을 돌려주는 게임의 유불리를 묻게 하면 E(X)-참가비 해석이 붙어 ★3(I-EQV d2)."
```

### 교과서 04-4 확률변수 $aX+b$의 평균, 분산, 표준편차

```yaml
- id: RPM-PROB-0326
  page: 57
  vendor_label: "교과서 04-4 확률변수 $aX+b$의 평균, 분산, 표준편차"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ E(X)=6, V(X)=3/2 일 때 2X-1 과 -(1/3)X+5 의 평균·분산·표준편차.
  category: "E(aX+b)=aE(X)+b · V(aX+b)=a^2 V(X) · σ(aX+b)=|a|σ(X) 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 의 평균·분산·표준편차 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 공식을 두 번 대입하는 문항. 분산에서 b 가 사라지고 a 가 제곱으로 들어가는 것, ⑵ 에서 a 가 음수라도
    표준편차는 |a|σ(X) 로 양수인 것이 함정(T-부호)이다. 교과서 ★1 출발 · 통찰 없음 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "E(aX+b)=aE(X)+b, V(aX+b)=a^2V(X), σ=|a|σ(X) 에 a=2,b=-1 과 a=-1/3,b=5 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) 평균: $11$, 분산: $6$, 표준편차: $\sqrt{6}$ (2) 평균: $3$, 분산: $\dfrac{1}{6}$, 표준편차: $\dfrac{\sqrt{6}}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X)·V(X) 의 값과 a, b 를 바꿀 수 있음. 제약: V(X) 를 a^2 배 했을 때 유리수로 남도록 a 를 정수나 단위분수로 두고, σ 가 √꼴로 정리되는지 확인한다. a 를 음수로 두는 ⑵ 는 함정 유지를 위해 남겨두는 편이 좋다."
    creative: "(1) 반대로 E(2X-1)=11, V(2X-1)=6 을 주고 E(X)·V(X) 를 역추적시키면 I-BW → ★2~3 (2) Y=(X-m)/σ 의 평균·분산을 묻게 하면 표준화 개념이 들어와 ★3 (3) E(X^2) 를 함께 묻게 하면 V=E(X^2)-{E(X)}^2 전환 관문이 붙어 ★2."
```

```yaml
- id: RPM-PROB-0327
  page: 57
  vendor_label: "교과서 04-4 확률변수 $aX+b$의 평균, 분산, 표준편차"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ X 의 확률분포표(X = 0, 1, 2, 4 에 확률 1/8, 1/4, 1/8, 1/2)가 주어질 때 E(4X+2), V(4X+2), σ(4X+2).
  category: "표에서 E(X)·V(X) 먼저 → 변환 공식 a=4, b=2 적용"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분포표에서 E·V 를 구한 뒤 aX+b 로 변환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0323(표 → E·V)과 0326(변환 공식)이 한 문항에 이어 붙어 단계 수가 7 을 넘는다(Mₛ=3).
    X 의 값이 0,1,2,4 로 등차가 아니어서 E(X^2) 계산에 주의가 필요하다. 교과서 ★1 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "표 → E(X), E(X^2) → V(X) → E(4X+2)=4E(X)+2, V(4X+2)=16V(X), σ=4σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $12$ (2) $40$ (3) $2\sqrt{10}$'
  answer_source: "답지"
  figure: crop:fig-0327.png
  latex: latex-bank/rpm-prob/items/0327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 의 값(0,1,2,4)·확률(분모 8)·변환 계수(a=4, b=2)를 바꿀 수 있음. 제약: 확률의 합이 1 이어야 하고, V(X) 에 a^2 를 곱한 값이 정수가 되도록 a 를 고르면 σ 가 √정수 꼴로 정리된다. b 는 분산에 영향이 없으므로 아무 값이나 가능."
    creative: "(1) a 를 음수(-3 등)로 바꾸면 σ 의 절댓값 함정이 추가되어 체감 난도가 오름(★는 유지) (2) E(4X+2)=12 를 주고 표의 빈칸 확률을 역추적시키면 I-BW → ★3 (3) 변환된 변수의 표준화 (Y-E(Y))/σ(Y) 를 묻게 하면 ★3."
```

### 교과서 04-5 이항분포

```yaml
- id: RPM-PROB-0328
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    동전 10개를 동시에 던질 때 뒷면이 나오는 동전의 개수 X 가 이항분포를 따르는지 확인하고 B(n, p) 로 나타내기.
  category: "독립시행 10회 · 성공확률 1/2 확인 → B(10, 1/2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는지 판정하고 B(n,p) 로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    동전 10개를 동시에 던지는 것은 한 개를 10번 던지는 것과 같은 독립시행이고 뒷면 확률은 매번 1/2 로 일정하다.
    n 과 p 를 읽어 쓰면 끝. 교과서 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "독립시행 n=10 · 성공(뒷면) 확률 p=1/2 → B(10, 1/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{B}\left(10,\,\dfrac{1}{2}\right)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(10 → 8 · 20)를 바꿔도 골조 동일. 제약: p 는 동전인 한 1/2 로 고정되므로 n 만 변수다."
    creative: "(1) '앞면이 뒷면보다 많을 확률' 까지 묻게 하면 대칭성 활용(I-SYM)으로 1/2 임을 바로 볼 수 있어 ★3 (2) 편향 동전(앞면 확률 0.6)으로 바꾸면 p 읽기가 한 단계 늘어 ★1~2 (3) 동전 10개 중 3개만 골라 던진다는 단서를 붙이면 n 결정이 함정이 됨(★2)."
```

```yaml
- id: RPM-PROB-0329
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    명중률이 1/3 인 양궁 선수가 7발을 쏠 때 명중하는 화살의 개수 X 가 이항분포를 따르는지 확인하고 B(n, p) 로 나타내기.
  category: "독립시행 7회 · 성공확률 1/3 확인 → B(7, 1/3)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는지 판정하고 B(n,p) 로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    명중률이 매 발 같고 각 발이 독립이므로 그대로 이항분포. n=7, p=1/3 을 읽어 쓰면 끝난다.
    교과서 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "독립시행 n=7 · 성공(명중) 확률 p=1/3 → B(7, 1/3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{B}\left(7,\,\dfrac{1}{3}\right)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "발 수(7 → 5 · 10)와 명중률(1/3 → 0.4 · 3/5)을 바꿀 수 있음. 제약: 소수로 주면 분수로 옮기는 단계가 하나 늘어난다(0332 참조)."
    creative: "(1) '명중하지 못하는 화살의 개수'로 바꾸면 p 가 2/3 으로 뒤집혀 여사건 해석이 필요(★2) (2) '앞의 3발이 모두 명중하면 남은 화살을 쏘지 않는다'는 단서를 붙이면 시행이 독립이 아니게 되어 0330 형 반례가 됨(★2~3) (3) E(X)=np 까지 묻게 하면 04-5 후반과 연결(★1~2)."
```

```yaml
- id: RPM-PROB-0330
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    당첨 제비 2개를 포함한 제비 10개에서 2개를 한 개씩 차례로 뽑을 때(비복원) 당첨 제비의 개수 X 가 이항분포를 따르는지 판정.
  category: "비복원 → 두 번째 시행의 성공확률이 첫 결과에 의존 → 독립시행 아님"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는지 판정하고 B(n,p) 로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞의 두 문항과 달리 '따르지 않는다' 가 답인 반례 문항이다. 꺼낸 제비를 다시 넣지 않으므로 두 번째 시행의
    당첨 확률이 1/9 또는 2/9 로 달라져 '매회 확률 일정' 조건이 깨진다(T-범위 함정 1개).
    판단은 정의 대조 한 단계라 M_total 4 · 통찰 없음 → 교과서 ★1 유지. [분류 이슈] 세 문항 중 유일하게 판정이 뒤집히는 자리여서 체감은 ★2 급.
  tier: star_1
  mechanism_primary: "비복원 추출 → 매회 성공확률이 일정하지 않음 → 독립시행 아님 → 이항분포 아님"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "이항분포를 따르지 않는다."
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제비 수(10)·당첨 수(2)·뽑는 수(2)를 바꿔도 비복원인 한 판정은 '아니다' 로 고정. 제약: 판정을 '맞다' 로 뒤집으려면 '꺼낸 제비를 다시 넣는다' 로 단서를 바꿔야 하고, 그때 p=1/5 로 일정해진다."
    creative: "(1) 복원·비복원 두 상황을 나란히 주고 어느 쪽이 이항분포인지 고르게 하면 대조가 본체가 되어 ★2(I-EQV d1) (2) 모집단을 10000개로 키워 '근사적으로 이항분포로 볼 수 있는가'를 묻게 하면 ★3 (3) 비복원일 때의 실제 분포(초기하)를 표로 만들게 해 이항분포와 값을 비교시키면 ★3."
```

```yaml
- id: RPM-PROB-0331
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ X 가 이항분포 B(4, 1/4) 을 따를 때 X 의 확률질량함수와 P(X=3).
  category: "이항분포의 확률질량함수 공식에 n=4, p=1/4 대입 → x=3 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 확률질량함수와 확률값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(X=x)=C(n,x)p^x(1-p)^{n-x} 에 n, p 를 넣어 일반형을 쓰고 x=3 을 대입하면 끝. x 의 범위 0~4 를 함께 적는 것이 감점 포인트.
    일반형을 x 로 쓰므로 Mₐ=2. 교과서 ★1 출발 · 통찰 없음 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "P(X=x)=C(4,x)(1/4)^x(3/4)^{4-x} → x=3 대입 → 3/64"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $\mathrm{P}(X=x)={}_4\mathrm{C}_x\left(\dfrac{1}{4}\right)^{x}\left(\dfrac{3}{4}\right)^{4-x}$ $(x=0,\,1,\,2,\,3,\,4)$ (2) $\dfrac{3}{64}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(4)·p(1/4)·묻는 x(3)를 바꿀 수 있음. 제약: p 의 분모를 2·3·4 로 두면 확률값이 간단한 분수가 되고, n 을 6 이상으로 올리면 계산만 무거워지고 ★는 오르지 않는다."
    creative: "(1) P(X ≥ 3) 으로 바꾸면 항을 두 개 더해야 해 ★2 (2) P(X ≤ 1) 을 여사건으로 처리하게 하면 두 갈래 비교(I-SC) → ★3 (3) P(X=3)=3/64 을 주고 p 를 역추적시키면 방정식이 생겨 I-BW → ★3~4."
```

```yaml
- id: RPM-PROB-0332
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ 자유투 성공률 0.6 인 선수가 5번 시도할 때 성공 횟수 X 를 B(n, p) 로 나타내고 확률질량함수와 P(X=2) 구하기.
  category: "말로 된 상황 → B(5, 3/5) → 확률질량함수 → x=2 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "말로 된 상황을 B(n,p) 로 옮겨 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0331 과 골조는 같지만 앞에 상황 → 모수 읽기가 붙고 0.6 을 3/5 로 옮겨야 답 형태가 맞는다.
    C(5,2)(3/5)^2(2/5)^3 의 분모가 5^5 라 계산량도 한 단계 위. 교과서 ★1 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "상황 → n=5, p=0.6=3/5 → P(X=x)=C(5,x)(3/5)^x(2/5)^{5-x} → x=2 → 144/625"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $\mathrm{B}\left(5,\,\dfrac{3}{5}\right)$ (2) $\mathrm{P}(X=x)={}_5\mathrm{C}_x\left(\dfrac{3}{5}\right)^{x}\left(\dfrac{2}{5}\right)^{5-x}$ $(x=0,\,1,\,2,\,3,\,4,\,5)$ (3) $\dfrac{144}{625}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시도 횟수(5 → 4 · 6)와 성공률(0.6 → 0.5 · 0.75)을 바꿀 수 있음. 제약: 소수를 분수로 옮겼을 때 분모가 작아야(2, 4, 5) 답이 정리된다. n 을 키우면 분모가 5^n 로 커져 계산 마찰만 는다."
    creative: "(1) '적어도 한 번 성공' 으로 바꾸면 여사건이 훨씬 빨라 I-SC 가 생김 → ★3 (2) 성공률을 미지수 p 로 두고 P(X=2)=P(X=3) 조건을 주면 방정식이 생겨 I-BW → ★3~4 (3) 두 선수의 성공률을 다르게 주고 누가 2번 성공할 확률이 큰지 비교시키면 ★3."
```

```yaml
- id: RPM-PROB-0333
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    X 가 이항분포 B(63, 1/3) 을 따를 때 E(X), V(X), σ(X).
  category: "E(X)=np · V(X)=npq · σ(X)=√npq 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 E(X)=np · V(X)=npq"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 세 개에 n=63, p=1/3, q=2/3 을 넣는 한 단계. V 에서 q 를 1-p 로 바꾸는 것만 확인하면 된다.
    교과서 ★1 출발 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "np=63·(1/3)=21 → npq=63·(1/3)·(2/3)=14 → σ=√14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{E}(X)=21$, $\mathrm{V}(X)=14$, $\sigma(X)=\sqrt{14}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p 를 바꿀 수 있음. 제약: np 와 npq 가 정수가 되도록 n 을 p 의 분모의 배수(여기서는 9의 배수)로 잡으면 답이 깔끔하다. σ 가 무리수여도 무방하지만 √정수 꼴로 정리되는지 확인한다."
    creative: "(1) E(X)=21, V(X)=14 를 주고 n, p 를 역추적시키면 연립이 생겨 I-BW → ★3 (2) E(X^2) 를 묻게 하면 V+{E(X)}^2 전환 관문이 붙어 ★2 (3) 같은 n 에서 p 를 바꿔 V 가 최대가 되는 p 를 묻게 하면 이차함수 최대 문제가 되어 ★3(I-XU)."
```

```yaml
- id: RPM-PROB-0334
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    X 가 이항분포 B(128, 3/4) 을 따를 때 E(X), V(X), σ(X).
  category: "E(X)=np · V(X)=npq · σ(X)=√npq 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 E(X)=np · V(X)=npq"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0333 과 같은 공식 대입이며 q=1/4 를 쓰는지만 다르다. σ=√24 를 2√6 으로 정리하는 마무리가 추가.
    교과서 ★1 출발 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "np=128·(3/4)=96 → npq=128·(3/4)·(1/4)=24 → σ=√24=2√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{E}(X)=96$, $\mathrm{V}(X)=24$, $\sigma(X)=2\sqrt{6}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(128)과 p(3/4)를 바꿀 수 있음. 제약: n 을 16의 배수로 두면 npq 가 정수가 되고 σ 가 √꼴로 정리된다. p 와 q 를 바꿔도(1/4 ↔ 3/4) V 는 같고 E 만 달라진다는 점을 이용할 수 있다."
    creative: "(1) p 와 1-p 의 두 경우를 함께 주고 V 가 같음을 설명하게 하면 대칭성 활용(I-SYM) → ★3 (2) σ(X) 가 정수가 되는 n 을 찾게 하면 정수 조건이 붙어 ★3 (3) E(2X-5)·V(2X-5) 를 묻게 하면 04-4 와 결합되어 ★2."
```

```yaml
- id: RPM-PROB-0335
  page: 57
  vendor_label: "교과서 04-5 이항분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ 주사위를 45번 던질 때 6의 약수의 눈이 나오는 횟수 X 의 E(X), V(X), σ(X).
  category: "6의 약수 = 1,2,3,6 → p = 2/3 → B(45, 2/3) → np, npq"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행에서 p 를 정한 뒤 이항분포의 np·npq"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0333·0334 와 같은 공식 문항에 p 를 직접 정하는 단계가 하나 붙었다 — 6의 약수가 1,2,3,6 네 개라는 개수 세기가
    유일한 함정이고(3으로 착각하면 p=1/2), 그 뒤는 45·(2/3), 45·(2/3)·(1/3) 대입. 교과서 ★1 출발 · 통찰 없음 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "6의 약수 {1,2,3,6} → p=4/6=2/3 → E=45·(2/3)=30, V=45·(2/3)(1/3)=10, σ=√10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $30$ (2) $10$ (3) $\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수(45)와 사건(6의 약수 → 3의 배수 p=1/3 · 소수의 눈 p=1/2)을 바꿀 수 있음. 제약: 횟수를 p 의 분모 제곱의 배수(여기서는 9의 배수)로 두어야 npq 가 정수로 떨어진다."
    creative: "(1) 사건을 '눈의 수가 4 이상' 처럼 부등식으로 주면 개수 세기가 한 단계 더 붙음(★2) (2) E(X)=30 을 주고 던진 횟수를 역추적시키면 I-BW → ★2~3 (3) E(3X-1)·σ(3X-1) 까지 묻게 하면 04-4 와 결합되어 ★2."
```

### 유형 01 확률질량함수의 성질 (1)

```yaml
- id: RPM-PROB-0336
  page: 58
  vendor_label: "유형 01 확률질량함수의 성질 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x) = k / {x(x-1)} (x = 2, 3, …, 9) 일 때 상수 k 의 값.
  category: "총합 1 → 부분분수 분해 → 망원합으로 소거 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/{x(x-1)} 을 1/(x-1) - 1/x 로 분해하면 이웃 항이 차례로 소거되는 망원 구조가 드러나 8개 항의 합이 1 - 1/9 한 줄로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 총합 1 — 부분분수 망원합으로 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 유형의 대표문제지만 실질은 망원합이다. 8개 항을 그대로 통분하려 들면 분모가 커져 막히고,
    부분분수로 바꾸면 양끝만 남는다는 구조를 스스로 보아야 한다. 그 뒤 k·(1 - 1/9) = 1 은 한 줄.
    유형 구역 level 없음 → ★2 출발 · 소거 구조 발견 통찰 1개(PD d2) → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "Σ P(X=x)=1 → k Σ (1/(x-1) - 1/x) = k(1 - 1/9) = 1 → k = 9/8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{9}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 범위(2~9 → 2~11 · 3~10)를 바꿀 수 있음. 제약: 망원합이 1/(a-1) - 1/b 로 남으므로 그 차가 간단한 분수가 되도록 양끝을 고르고, k 가 양수인지 확인한다. 분모를 x(x+1) 로 바꾸면 소거 방향만 반대가 된다."
    creative: "(1) k 를 주고 x 의 상한을 역추적시키면 I-BW 가 추가되어 ★4 (2) 분모를 x(x-1)(x-2) 로 키우면 부분분수 계수 결정이 한 단계 더 붙어 ★4 (3) 같은 분포에서 P(X ≥ 5) 를 묻게 하면 부분합도 망원으로 처리해야 해 ★3 유지·문항 길이만 늘어남 (4) 항 수만 100 개로 늘리는 변형은 ★를 올리지 못한다."
```

```yaml
- id: RPM-PROB-0337
  page: 58
  vendor_label: "유형 01 확률질량함수의 성질 (1)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 의 확률분포표(X = 0, 1, 2, 3 에 확률 3/8, a/4, a^2, 1/4)가 주어질 때 상수 a 의 값.
  category: "총합 1 → a 에 대한 이차방정식 → 확률 조건으로 음수 근 기각"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표의 상수가 이차식일 때 총합 1 로 결정(음수 근 기각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 1 을 세우면 8a^2 + 2a - 3 = 0 이 되어 근이 둘 나오고, 확률은 0 이상이어야 하므로 음수 근을 버린다.
    이 기각 단계는 조건 위배가 즉시 보이는 T-범위 함정으로 보아 통찰로 세지 않았다(형제 파일 0358 과 같은 처리).
    유형 구역 level 중하 → ★1~2 출발 · 통찰 없음 · M_total 7 → ★2. [분류 이슈] 근 기각을 I-VF 로 볼지 경계.
  tier: star_2
  mechanism_primary: "3/8 + a/4 + a^2 + 1/4 = 1 → 8a^2 + 2a - 3 = 0 → (4a+3)(2a-1)=0 → 음수 근 기각 → a = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: crop:fig-0337.png
  latex: latex-bank/rpm-prob/items/0337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 확률(3/8, 1/4)과 a 항의 형태(a/4, a^2)를 바꿀 수 있음. 제약: 이차방정식이 유리수 근을 갖도록 계수를 잡고, 두 근 중 하나만 '0 이상이면서 모든 칸이 1 이하' 를 만족해야 문제가 성립한다(둘 다 유효하면 답이 둘이 된다)."
    creative: "(1) 두 근이 모두 양수가 되게 만들고 다른 칸의 상한 조건으로 하나를 걸러내면 진짜 I-VF 가 되어 ★3 (2) a 를 구한 뒤 E(X)·V(X) 까지 묻게 하면 ★3 (3) a^2 을 a^3 으로 바꾸면 삼차가 되어 인수분해 부담만 늘고 ★는 그대로다."
```

```yaml
- id: RPM-PROB-0338
  page: 58
  vendor_label: "유형 01 확률질량함수의 성질 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 x = 0, 1, 2 에서 x/12 + a, x = 3, 4 에서 x/12 - a 로 구간별로 주어질 때 P(X=2).
  category: "구간별 식을 한 합으로 통합 → a 의 계수 (+3) + (-2) = +1 → a 결정 → x=2 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조각으로 나뉜 확률질량함수를 하나의 합으로 묶어 a 가 3번 더해지고 2번 빠져 계수가 +1 만 남는다는 것을 보아야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간별로 정의된 확률질량함수의 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조각이 둘이라 a 의 부호를 몇 번씩 세는지가 관문이다 — (0+1+2+3+4)/12 = 10/12 는 조각과 무관하게 합쳐지고
    a 는 +3a - 2a = +a 만 남아 a = 1/6. 그 뒤 P(X=2) = 2/12 + 1/6 은 대입 한 줄.
    유형 구역 level 중 → ★2 출발 · 통합 통찰 1개(EQV d1) 이지만 풀이의 본체는 절차 → ★2 유지.
  tier: star_2
  mechanism_primary: "Σ = 10/12 + (3a - 2a) = 1 → a = 1/6 → P(X=2) = 2/12 + 1/6 = 1/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(12)·구간의 경계(x ≤ 2 와 x ≥ 3)·묻는 x 값을 바꿀 수 있음. 제약: 분모는 0+1+…+n 의 합보다 커야 a 가 양수로 나오고, 경계를 옮기면 a 의 계수가 달라지므로(예: 2:3 이면 -a) 부호를 다시 세야 한다. 모든 칸이 0 이상이 되는지도 확인."
    creative: "(1) 조각을 셋으로 늘리면 계수 세기가 본체가 되어 ★3 (2) a 대신 ax 를 더하면 합이 Σx 에 비례해 계수가 달라져 ★3 (3) a 를 구한 뒤 가장 확률이 큰 x 를 묻게 하면 각 칸을 비교해야 해 ★2~3 (4) P(X=2) 값을 주고 경계 위치를 역추적시키면 I-BW → ★3~4."
```

```yaml
- id: RPM-PROB-0339
  page: 58
  vendor_label: "유형 01 확률질량함수의 성질 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x) = k / (√x + √(x+1)) (x = 1, 2, …, 15) 일 때 상수 k 의 값. 5지선다.
  category: "총합 1 → 분모 유리화 → 망원합으로 소거 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 유리화해 √(x+1) - √x 꼴로 바꾸면 이웃 항이 소거되어 15개 항의 합이 √16 - √1 한 줄로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 총합 1 — 분모 유리화 망원합으로 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0336 과 같은 망원합인데 소거를 만드는 도구가 부분분수 대신 분모의 유리화다. 유리화를 떠올리지 못하면
    15개 무리수 항 앞에서 멈춘다. 유리화 뒤에는 k(√16 - 1) = 3k = 1 한 줄.
    유형 구역 level 중 → ★2 출발 · 소거 구조 발견 통찰 1개(PD d2) → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "유리화 → P(X=x)=k(√(x+1) - √x) → Σ = k(√16 - √1) = 3k = 1 → k = 1/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 상한(15)을 바꿀 수 있음. 제약: 상한 + 1 이 완전제곱수여야(16, 25, 36) √이 정수로 떨어져 k 가 유리수가 된다 — 이 조건을 깨면 선택지가 무리수 분수로 지저분해진다. 하한을 1 이 아닌 값으로 옮기면 양끝이 둘 다 무리수가 되므로 주의."
    creative: "(1) k 를 주고 상한을 역추적시키면 I-BW 추가 → ★4 (2) 분모를 √x + √(x+2) 로 바꾸면 소거가 두 칸 건너뛰어 남는 항이 넷이 되므로 패턴 관찰이 한 단계 깊어짐 → ★4 (3) 같은 분포에서 P(X ≤ 8) 을 묻게 하면 부분 망원합 → ★3 유지 (4) 0336 과 짝지어 '두 문제의 공통 구조를 설명하라' 는 서술형으로 만들면 ★3~4."
```

### 유형 02 확률질량함수의 성질 (2)

```yaml
- id: RPM-PROB-0340
  page: 58
  vendor_label: "유형 02 확률질량함수의 성질 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X 의 확률분포표(X = 1, 2, 3, 4 에 확률 k/2, 3/8 - k^2, 1/8, k)가 주어질 때 P(X^2 - 5X + 6 = 0).
  category: "총합 1 → k 에 대한 이차방정식 → 확률 조건으로 근 하나 기각 → 사건을 X=2 또는 X=3 으로 번역 → 합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 기호 안의 방정식 X^2-5X+6=0 을 먼저 풀어 '사건 X=2 또는 X=3' 으로 옮겨야 표의 어느 칸을 더할지 정해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상수 결정 후 방정식으로 주어진 사건의 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 관문이 이어진다 — 합 1 에서 2k^2 - 3k + 1 = 0 을 풀어 k=1 을 확률 조건(3/8 - k^2 ≥ 0)으로 버리고,
    그 다음 P(…) 안의 방정식을 사건으로 번역한다. 뒤쪽이 이 유형의 이름값이고 학생이 가장 자주 멈추는 자리다.
    유형 구역 대표문제(level 없음) → ★2 출발 · 사건 번역 통찰 1개(EQV d2) · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "총합 1 → 2k^2-3k+1=0 → k=1 기각 → k=1/2 → P(X=2)+P(X=3) = 1/8 + 1/8 = 1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: crop:fig-0340.png
  latex: latex-bank/rpm-prob/items/0340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 고정 확률(1/8)과 k 항(k/2, 3/8 - k^2, k)의 계수를 바꿀 수 있음. 제약: 이차방정식이 유리수 근 둘을 갖되 하나만 모든 칸을 0 이상으로 만들어야 하고, 사건으로 뽑히는 두 칸의 확률 합이 간단한 분수가 되도록 계수를 맞춘다."
    creative: "(1) 사건을 X^2-5X+6 ≤ 0 으로 바꾸면 2 ≤ X ≤ 3 구간 해석이 되어 부등식 번역으로 층이 하나 올라감 → ★3~4 (2) (X-1)(X-4)=0 처럼 양끝 칸이 걸리게 하면 번역은 같고 답만 달라짐(★3 유지) (3) P(X^2-5X+6=0)=1/4 를 주고 k 를 역추적시키면 I-BW 가 더해져 ★4 (4) X 의 값을 음수까지 넓히면 방정식의 근 중 표에 없는 것을 버리는 I-VF 가 추가되어 ★4."
```

```yaml
- id: RPM-PROB-0341
  page: 58
  vendor_label: "유형 02 확률질량함수의 성질 (2)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x) = k x^2 (x = 1, 2, 3, 4) 일 때 P(X ≥ 3).
  category: "총합 1 → k(1+4+9+16)=1 → k 결정 → x=3,4 항만 합하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수의 상수 결정 후 P(X≥a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제곱수의 합 30 만 세면 k=1/30 이 바로 나오고, P(X ≥ 3) = k(9+16) = 25/30. 판단 갈래가 없는 두 단계 절차다.
    X ≥ 3 에 3 이 포함된다는 경계 확인(T-경계)이 유일한 함정. 유형 구역 level 중하 → ★1~2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "30k = 1 → k = 1/30 → P(X≥3) = (9+16)/30 = 5/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 범위(1~4 → 1~5)와 함수형(kx^2 → kx · k/x · k·2^x)을 바꿀 수 있음. 제약: 합이 간단한 정수가 되어야 k 가 깔끔한 단위분수가 된다(1~4 의 제곱합 30, 1~5 는 55). 묻는 꼬리 구간도 합이 약분되는 자리로 고른다."
    creative: "(1) P(X ≥ 3) 을 여사건 1 - P(X ≤ 2) 로 풀게 유도하면 두 갈래 비교(I-SC)가 생겨 ★3 (2) 함수형을 k(x^2 - 5x + 6) 처럼 음수가 되는 칸이 생기게 바꾸면 정의역을 걸러야 해 ★3 (3) P(X ≥ 3) = 5/6 을 주고 지수나 범위를 역추적시키면 I-BW → ★3."
```

```yaml
- id: RPM-PROB-0342
  page: 58
  vendor_label: "유형 02 확률질량함수의 성질 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 의 확률분포표(X = -1, 0, 1 에 확률 2p, (4/3)p, q)와 조건 P(X=1) = (1/3)P(X=-1) 이 주어질 때 P(0 ≤ X ≤ 1).
  category: "비례 조건으로 q 를 p 로 치환 → 총합 1 로 p 결정 → 해당 두 칸 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(X=1) = (1/3)P(X=-1) 을 q = (2/3)p 로 옮겨 미지수 둘을 하나로 줄여야 합 1 조건이 방정식 하나가 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 조건(총합 1·비례 관계)으로 미지수 2개 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 둘이므로 조건도 둘이 필요하다는 구조를 먼저 보아야 한다. 비례 조건을 q = (2/3)p 로 옮기면
    합 1 이 4p = 1 로 정리되고, 묻는 것은 P(X=0) + P(X=1) = (4/3)p + q = 1/3 + 1/6.
    유형 구역 level 중 → ★2 출발 · 치환 통찰 1개(EQV d1) 이나 풀이 본체는 연립 절차 → ★2 유지.
  tier: star_2
  mechanism_primary: "q = (2/3)p → 2p + (4/3)p + (2/3)p = 4p = 1 → p = 1/4 → P(0≤X≤1) = (4/3)p + q = 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: crop:fig-0342.png
  latex: latex-bank/rpm-prob/items/0342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 계수(2p, (4/3)p)와 비례 상수(1/3)를 바꿀 수 있음. 제약: 치환 후 p 의 계수 합이 간단한 수가 되어야 p 가 깔끔한 분수로 떨어지고, 모든 칸이 0 이상 1 이하여야 한다. X 의 값(-1, 0, 1)은 답의 구간 해석에만 쓰이므로 자유롭게 바꿀 수 있다."
    creative: "(1) 조건을 E(X)=0 으로 바꾸면 기댓값 정의를 거쳐야 해 층이 하나 올라감 → ★3 (2) 묻는 것을 P(|X| = 1) 이나 P(X^2 = 1) 로 바꾸면 사건 번역이 추가되어 ★3(I-EQV d2 · 0340 골조와 결합) (3) 칸을 넷으로 늘리고 조건을 둘 주면 연립이 본체가 되어 ★3 (4) p, q 를 모두 미지수로 두고 V(X) 값을 조건으로 주면 이차 연립이 되어 ★4."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 18 · ★2 8 · ★3 3 · ★4 0 · ★5 0 — 단원 도입부(교과서 구역 22문)라 ★1 이 압도적이고, ★3 은 모두 유형 구역에서 나왔다.
- insight_type 통찰형 3(0336 · 0339 · 0340) · 절차형 26 · premium 0 — 통찰 라벨이 1개 이상 붙은 문항은 6(dokdu-check 의 「통찰형」 집계 기준)
- 통찰 라벨: I-EQV 4(0321 · 0338 · 0340 · 0342) · I-PD 2(0336 · 0339) — 총 6개 단계 · insight_count 0 인 문항 23
- 구역 분포: 교과서 04-1 6 · 04-2 3 · 04-3 3 · 04-4 2 · 04-5 8 · 유형 01 4 · 유형 02 3
- 벤더 신호: 대표문제 2(0336 · 0340) · level 중하 2 · 중 3 · 나머지 24문은 level·tag 없음(교과서 구역 22 + 대표문제 2). 서술형·기출 태그 0.
- 그림: 6문(`crop:fig-0322.png` · `crop:fig-0323.png` · `crop:fig-0327.png` · `crop:fig-0337.png` · `crop:fig-0340.png` · `crop:fig-0342.png` — 모두 확률분포표). 0324 는 전사본 `figure` 필드가 없고 발문 안에 빈 분포표 이미지(`figures/fig-0324.png`)가 들어 있어 `figure: none` 으로 두었다.
- 대상층: 하위권 16 · 중하위권 7 · 중위권 4 · 중상위권 2 · 상위권 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0330 | 판정 단계는 한 줄(M_total 4)이라 ★1 로 두었으나, 같은 묶음 세 문항 중 유일하게 답이 '아니다' 로 뒤집히는 반례여서 실제 오답률은 ★2 급. 「반례 위치」를 ★ 에 반영할지 기준 필요 | ★1 / ★2 |
| RPM-PROB-0337 | 합 1 조건이 이차방정식이 되고 음수 근을 버리는 단계를 I-VF(사후 검증)로 볼지 단순 T-범위 함정으로 볼지 경계. 형제 파일 0358 과 같게 함정으로 처리해 ★2 유지 | ★2 / ★3 |
| RPM-PROB-0340 | 근 기각(k=1)과 사건 번역이 한 문항에 겹쳐 있는데 앞쪽은 함정, 뒤쪽만 통찰로 셌다. 둘 다 통찰로 보면 통찰 2개가 되어 ★4 후보가 된다 | ★3 / ★4 |
| RPM-PROB-0336 · 0339 | level 신호가 각각 없음·중(★2 출발)인데 망원합 발견을 d2 로 보아 ★3 으로 올렸다. RPM 이 이 둘을 유형 01 의 평범한 자리에 둔 것과 한 단 어긋남 | ★2 / ★3 |

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고할 이 구간의 반복 골조다.

- **반복된 type_hint 상위**: (1) 「확률의 총합 1 로 상수 결정」 8 — 0322 · 0336 · 0337 · 0338 · 0339 · 0340 · 0341 · 0342 (유형 01·02 전체 + 교과서 0322) (2) 「이항분포 판정과 B(n,p) 로 옮기기」 4 — 0328 · 0329 · 0330 · 0332 (3) 「이산·연속 확률변수의 구별」 4 — 0314 · 0315 · 0316 · 0317 (4) 「분포표·시행에서 E·V·σ」 3 — 0323 · 0324 · 0327 (5) 「이항분포의 np·npq」 3 — 0333 · 0334 · 0335.
- **따로 세워야 할 유형**: ① 「망원합으로 상수 결정」(0336 · 0339) — 겉보기에는 유형 01 의 다른 문항과 같은 '합 1' 이지만 도구가 부분분수·유리화라 사고가 전혀 다르다. 이 구간에서 유일하게 ★3 을 만드는 골조이므로 독립 유형이 맞다. ② 「이항분포가 아닌 반례(비복원)」(0330) — 정의를 부정 방향으로 쓰는 유일한 자리라 판정형 유형으로 따로 두면 변형 설계가 쉽다. ③ 「확률 기호 안의 방정식·부등식을 사건으로 번역」(0340) — 유형 02 의 이름값이자 이후 정규분포 단원에서 반복되는 관문이다. ④ 「구간별로 정의된 확률질량함수」(0338) — 조각 수와 부호 세기가 본체라 표 문항과 별개로 둔다.
- **통합해도 될 유형**: 유형 01 과 유형 02 는 「합 1 로 상수 결정」 이라는 같은 관문에 뒤에 무엇을 더 묻느냐(상수 자체 vs 사건의 확률)만 다르므로 하나의 유형 + 후속 질문 옵션으로 묶을 수 있다. 교과서 04-1 의 「이산·연속 구별」과 「값 나열」(0314~0319)도 정의 대조라는 한 유형으로 합쳐도 무방하다. 04-3 과 04-4 는 형제 파일(04-p2)의 유형 04·07 과 같은 이유로 '분포표 → E·V' 한 유형 + 변환 옵션으로 통합 가능하다.
- **변형 설계 메모**: 이 구간에서 ★ 를 한 단계 올리는 레버는 ① 상수를 주고 범위·계수를 역추적시키기(I-BW) ② 합 조건을 이차식으로 만들어 근 하나를 진짜로 기각시키기(I-VF — 단, 0337 처럼 음수 근이 뻔하면 함정에 그침) ③ 확률 기호 안의 조건을 방정식·부등식으로 주어 사건으로 번역시키기(I-EQV d2) ④ 항의 합을 소거 구조로 만들기(I-PD d2)다. 반대로 n·항 수·분모만 키우는 변형은 ★ 를 올리지 못하고 계산 마찰만 는다(§2.11 YELLOW).
