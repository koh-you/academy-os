---
name: mechanism-데이터-RPM-ALG-10-p1
description: RPM 대수 10 수학적 귀납법(1/2 · 교과서 10-1~10-3 · 유형 01~06) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 10 수학적 귀납법
  unit_code: ALG-10
  part: "1/2"
  extract_range: "145~148쪽 · 1051~1087"
  total_problems: 37
  unit_total: 76
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 10 수학적 귀납법 (1/2) 정독 데이터 (v1.0)

이 파일은 RPM 대수 10 수학적 귀납법 단원의 앞부분, 145~148쪽 1051~1087 의 37문항을 다룬다. 구역은 교과서 10-1(수열의 귀납적 정의 · 직접 대입 4문) · 교과서 10-2(등차·등비수열을 나타내는 관계식 · 정의 세우기 4문, 일반항 4문, 제10항 4문) · 교과서 10-3(수학적 귀납법 증명 빈칸 1문) · 유형 01~06(등차·등비의 귀납적 정의, 계차 합, 비의 곱, 여러 가지 귀납적 정의, 수가 반복되는 수열 · 20문)이다. 벤더 난이도 신호는 RPM 공통 구조를 따른다: 교과서 구역은 ★1 출발, 유형 구역은 대표문제(level 없음)·중·상중 난이도와 「서술형」 태그로 ★2~3 출발점을 잡았다. 이 범위에는 그림 문항이 없다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조) · `insights[]`(통찰 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없어 `type_id`·`base_star` 는 null 이고 `type_hint` 에 RPM 유형 제목을 기본 후보로 한 유형명을 제안했다.

## 문항 데이터

### 교과서 10-1 수열의 귀납적 정의

```yaml
- id: RPM-ALG-1051
  page: 145
  vendor_label: "교과서 10-1 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=3, a_{n+1}=2a_n−1 로 귀납적으로 정의된 수열의 제4항.
  category: "점화식 직접 대입 → 제4항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적으로 정의된 수열의 항 구하기(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_2=5, a_3=9, a_4=17. 점화식에 차례로 대입하는 한 단계뿐이다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_1=3 → 점화식 3회 대입(5, 9) → a_4=17"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1(2, 4, 5)과 점화식 계수·상수(2a_n+1, 3a_n−2)를 바꿀 수 있음. 묻는 항을 제5·6항으로 늘리면 계산량만 증가. 제약: 항이 정수로 유지되도록 계수를 정수로."
    creative: "(1) 제4항 대신 특정 값이 되는 항 번호 묻기(★1) (2) a_1 을 미지수로 두고 a_4 값에서 a_1 역추적(★2 · 역대입 Mₛ 상승) (3) 일반항을 구해 큰 항(a_20)을 묻게 하면 a_{n+1}−1=2(a_n−1) 변환이 필요해 ★3(EQV)."
```

```yaml
- id: RPM-ALG-1052
  page: 145
  vendor_label: "교과서 10-1 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=−1, a_{n+1}=a_n²+1 로 귀납적으로 정의된 수열의 제4항.
  category: "점화식 직접 대입(제곱) → 제4항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적으로 정의된 수열의 항 구하기(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_2=(−1)²+1=2, a_3=5, a_4=26. 음수 초기값의 제곱 부호(T-부호) 하나가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_1=−1 → 제곱+1 반복(2, 5) → a_4=26"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1(±1, ±2, 0)과 점화식(a_n²−1, 2a_n²+1). 제약: 제곱 반복은 값이 급증하므로 묻는 항을 제4항 이내로, 초기값은 정수로."
    creative: "(1) 음수 초기값의 제곱 부호 처리를 그대로 두고 규칙만 바꾸기(★1) (2) a_4 값을 주고 가능한 a_1 을 모두 묻기(제곱근의 ± 분기 → I-MI · ★2~3) (3) a_{n+1}=a_n²−2 처럼 특수 초기값에서 닫히는 형태는 범위 밖."
```

```yaml
- id: RPM-ALG-1053
  page: 145
  vendor_label: "교과서 10-1 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=1, a_{n+1}=1/a_n+2 로 귀납적으로 정의된 수열의 제4항.
  category: "점화식 직접 대입(역수) → 제4항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적으로 정의된 수열의 항 구하기(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_2=3, a_3=1/3+2=7/3, a_4=3/7+2=17/7. 역수와 분수 덧셈이 한 줄씩. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_1=1 → 역수+2 반복(3, 7/3) → a_4=17/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{17}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기값(1, 2, 1/2)과 더하는 상수(1, 3). 제약: 역수 계산이 있으므로 도중에 0 이 나오지 않는 초기값, 분수 정리가 두 단계를 넘지 않게."
    creative: "(1) 분수 항을 기약분수로 답하게 하는 그대로 ★1 (2) a_n=p_n/q_n 으로 놓아 분자·분모 점화식을 세우게 하면 표현 전환(RT)·★3 (3) a_{n+1}=1/(1−a_n) 처럼 주기가 생기는 형태로 바꿔 a_100 을 묻기(주기 발견 PD · ★2)."
```

```yaml
- id: RPM-ALG-1054
  page: 145
  vendor_label: "교과서 10-1 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=1, a_2=3, a_{n+2}=2a_{n+1}+a_n 으로 귀납적으로 정의된 수열의 제4항.
  category: "이항 점화식 직접 대입 → 제4항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적으로 정의된 수열의 항 구하기(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_3=2·3+1=7, a_4=2·7+3=17. 초기항 둘을 쓰는 이항 점화식이지만 대입 두 번이면 끝. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 초기항 → 이항 점화식 2회 대입(7) → a_4=17"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기항 두 개와 계수(a_{n+2}=a_{n+1}+a_n 피보나치형, 3a_{n+1}−2a_n). 제약: 이항 점화식이므로 초기항 두 개를 반드시 주고 정수 유지."
    creative: "(1) 제5·6항으로 확장(★1) (2) a_3, a_4 를 주고 a_1, a_2 를 역추적(연립 · ★2) (3) 계수를 미지수 p 로 두고 a_4 조건에서 p 결정(매개변수 Mₐ 상승 · ★2)."
```

### 교과서 10-2 등차수열과 등비수열을 나타내는 관계식

```yaml
- id: RPM-ALG-1055
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 2, 공차 3 인 등차수열을 귀납적으로 정의(첫째항과 이웃 항 관계식으로 쓰기).
  category: "등차수열 → a_1 과 a_{n+1}=a_n+d 관계식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차·등비수열의 귀납적 정의 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공차 3 이므로 a_{n+1}=a_n+3, 첫째항 a_1=2 와 n 의 범위를 함께 쓴다. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "첫째항·공차 → a_1=2, a_{n+1}=a_n+3 (n=1, 2, 3, …)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_1=2$, $a_{n+1}=a_n+3$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/1055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(음수·분수 포함) 자유. 제약: 관계식과 n 의 범위(n=1, 2, 3, …)를 함께 쓰게 하는 답 형식 유지."
    creative: "(1) 공차 대신 두 항(a_3, a_7)을 주고 귀납적 정의 세우기(★1~2) (2) a_{n+1}−a_n=d 를 2a_{n+1}=a_n+a_{n+2} 등차중항 형식으로 표현하게(★1) (3) 일반항 a_n=3n−1 을 주고 귀납적 정의로 되돌리기(역방향 · ★2)."
```

```yaml
- id: RPM-ALG-1056
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 9, 공비 −1/3 인 등비수열을 귀납적으로 정의.
  category: "등비수열 → a_1 과 a_{n+1}=r·a_n 관계식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차·등비수열의 귀납적 정의 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 −1/3 이므로 a_{n+1}=−(1/3)a_n, a_1=9. 음의 공비 부호(T-부호)를 계수에 반영하는 것만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "첫째항·공비 → a_1=9, a_{n+1}=−(1/3)a_n (n=1, 2, 3, …)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_1=9$, $a_{n+1}=-\dfrac{1}{3}a_n$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/1056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(음수·분수) 자유. 제약: 공비 부호를 관계식 계수에 정확히 반영하는 부호 함정 유지."
    creative: "(1) 처음 몇 항(9, −3, 1, …)만 주고 귀납적 정의 세우기(★1) (2) a_{n+1}²=a_n a_{n+2} 등비중항 형식으로 표현하게(★1) (3) 일반항 9·(−1/3)^(n−1) 에서 거꾸로 관계식 쓰기(★2)."
```

```yaml
- id: RPM-ALG-1057
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 10, 6, 2, −2, −6, … 을 귀납적으로 정의.
  category: "항 나열 → 등차(공차 −4) 인식 → 관계식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차·등비수열의 귀납적 정의 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이웃 차가 −4 로 일정하므로 등차, a_1=10, a_{n+1}=a_n−4. 공차 부호(T-부호) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항 나열 → 이웃 차 −4 로 등차 인식 → a_1=10, a_{n+1}=a_n−4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_1=10$, $a_{n+1}=a_n-4$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/1057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(양수·분수) 자유. 제약: 등차임이 처음 4~5항에서 분명히 드러나야 함."
    creative: "(1) 등비 나열(1058)과 섞어 등차·등비 판별을 먼저 하게(★1) (2) 계차가 등차인 나열(1, 2, 4, 7, 11)로 바꾸면 a_{n+1}=a_n+n 꼴 · 계차 인식(★2) (3) 두 수열을 번갈아 섞은 나열은 유형 06(주기)로 넘어감."
```

```yaml
- id: RPM-ALG-1058
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 1, 2, 4, 8, 16, … 을 귀납적으로 정의.
  category: "항 나열 → 등비(공비 2) 인식 → 관계식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차·등비수열의 귀납적 정의 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이웃 비가 2 로 일정하므로 등비, a_1=1, a_{n+1}=2a_n. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항 나열 → 이웃 비 2 로 등비 인식 → a_1=1, a_{n+1}=2a_n"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_1=1$, $a_{n+1}=2a_n$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(3, 1/2, −2) 자유. 제약: 공비가 음수면 부호 교대가 나열에 보이도록 5항 이상 제시."
    creative: "(1) 등차 나열과 섞어 판별(★1) (2) 나열을 1, 3, 7, 15, 31 로 바꾸면 a_{n+1}=2a_n+1 꼴 · 등비가 아님을 알아채는 함정(★2) (3) 일반항 2^(n−1) 을 주고 관계식으로(★1)."
```

```yaml
- id: RPM-ALG-1059
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=3, a_{n+1}=a_n−3 으로 정의된 수열의 일반항.
  category: "a_{n+1}=a_n+d → 등차 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공차 −3 등차수열이므로 a_n=3+(n−1)(−3)=−3n+6. 일반항 공식 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}=a_n−3 → 공차 −3 등차 → a_n=3−3(n−1)=−3n+6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=-3n+6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차 자유(분수 포함). 제약: 일반항을 n 의 일차식으로 정리해 답하게 함."
    creative: "(1) 일반항 대신 특정 항(a_20)이나 처음 음수가 되는 항 번호를 묻기(★1~2) (2) a_{n+1}+3=a_n 처럼 상수를 좌변에 두어 부호 함정(1068 골조 · ★1) (3) 공차를 미지수 d 로 두고 a_k 값에서 d 결정(★2)."
```

```yaml
- id: RPM-ALG-1060
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=5, a_{n+1}=2a_n 으로 정의된 수열의 일반항.
  category: "a_{n+1}=r·a_n → 등비 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 2 등비수열이므로 a_n=5·2^(n−1). 지수 n−1(T-경계) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}=2a_n → 공비 2 등비 → a_n=5·2^(n−1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=5\times 2^{n-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(3, −2, 1/2) 자유. 제약: 지수 n−1 을 n 으로 쓰는 실수를 잡는 답 형식 유지."
    creative: "(1) log_2 a_n 을 묻거나 a_k>1000 인 최소 k(★1~2) (2) 관계식을 a_{n+1}²=a_n a_{n+2} 로 숨기기(1062 골조 · ★1) (3) 공비를 미지수로 두고 a_4 값에서 공비 결정(★2)."
```

```yaml
- id: RPM-ALG-1061
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=3, a_2=2, 2a_{n+1}=a_n+a_{n+2} 로 정의된 수열의 일반항.
  category: "등차중항 관계식 → 공차 a_2−a_1 → 등차 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a_{n+1}=a_n+a_{n+2} 는 등차중항 관계식이므로 등차수열, 공차 a_2−a_1=−1, a_n=3−(n−1)=−n+4. 관계식 형태를 등차로 읽는 표기 확인(T-표기) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2a_{n+1}=a_n+a_{n+2} → 등차중항 → 공차 −1 → a_n=−n+4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=-n+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초기항 자유. 제약: 관계식 형태(2a_{n+1}=a_n+a_{n+2}, a_{n+2}−a_{n+1}=a_{n+1}−a_n)를 바꿔 등차 인식을 연습하는 문항이므로 초기항 두 개는 필수."
    creative: "(1) 등비중항 형식(1062)과 짝으로 출제(★1) (2) 관계식을 a_{n+2}=2a_{n+1}−a_n 로 써서 등차임을 숨기기(★2 · EQV d1) (3) a_1, a_3 을 주고 a_2 를 등차중항으로 먼저 구하게(★1)."
```

```yaml
- id: RPM-ALG-1062
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=1, a_2=−2, a_{n+1}²=a_n a_{n+2} 로 정의된 수열의 일반항.
  category: "등비중항 관계식 → 공비 a_2/a_1 → 등비 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_{n+1}²=a_n a_{n+2} 는 등비중항 관계식이므로 등비수열, 공비 a_2/a_1=−2, a_n=(−2)^(n−1). 음의 공비 부호(T-부호) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}²=a_n a_{n+2} → 등비중항 → 공비 −2 → a_n=(−2)^(n−1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=(-2)^{n-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초기항 자유(공비가 분수·음수). 제약: 관계식 형태(a_{n+1}²=a_n a_{n+2}, a_{n+2}/a_{n+1}=a_{n+1}/a_n)를 바꿔 등비 인식을 연습, 0 이 아닌 초기항."
    creative: "(1) 등차중항 형식(1061)과 짝으로(★1) (2) 부호가 교대하는 수열의 짝수 번째 항의 합을 묻기(★2) (3) a_1, a_3 을 주고 a_2 를 등비중항으로 구하게 하면 ± 두 값(MI · ★2)."
```

```yaml
- id: RPM-ALG-1063
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=1, a_{n+1}=a_n+4n 으로 정의된 수열의 제10항.
  category: "계차 4n 누적 → a_10=a_1+Σ_{k=1}^{9} 4k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_{n+1}−a_n=4n 을 n=1~9 까지 더하면 a_10=1+4·45=181. 합의 상한이 9 라는 경계(T-경계) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}−a_n=4n → a_10=a_1+Σ_{k=1}^{9}4k=1+180 → 181"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$181$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1 과 계차 f(n)=4n 의 계수(2n, 3n, 2n+1). 제약: 합의 상한이 n−1 임을 연습하는 문항이라 묻는 항 번호를 10 안팎으로 유지."
    creative: "(1) 일반항 a_n=2n²−2n+1 을 묻기(★1~2) (2) f(n)=2^n 처럼 등비 계차로 바꾸기(★2) (3) a_k=181 이 되는 k 를 묻는 역방향(이차방정식 · ★2)."
```

```yaml
- id: RPM-ALG-1064
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=3, a_{n+1}−a_n=2n+1 로 정의된 수열의 제10항.
  category: "계차 2n+1 누적 → a_10=a_1+Σ_{k=1}^{9}(2k+1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    계차 2n+1 을 n=1~9 까지 더하면 90+9=99, a_10=3+99=102. 계차가 이미 차 꼴로 주어져 1063 과 같은 골조. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}−a_n=2n+1 → a_10=3+Σ_{k=1}^{9}(2k+1)=3+99 → 102"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$102$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/1064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·계차 일차식 계수·묻는 항 번호. 제약: 계차의 합이 Σk, 상수 합으로 닫히고 상한 n−1 함정 유지."
    creative: "(1) 계차를 홀수 2n−1 로 두면 a_n=a_1+(n−1)² 완전제곱 구조(★1~2) (2) a_10−a_5 처럼 구간 합 묻기(★2) (3) 계차가 등차인 수열의 일반항을 세워 Σ a_k 까지(1075 골조 · ★2)."
```

```yaml
- id: RPM-ALG-1065
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=2, a_{n+1}=(n/(n+1))a_n 으로 정의된 수열의 제10항.
  category: "비 n/(n+1) 의 곱 → 망원 상쇄 → a_n=2/n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    비 n/(n+1) 을 n=1~9 까지 곱하면 (1/2)(2/3)…(9/10)=1/10 으로 상쇄, a_10=2/10=1/5. 곱의 망원 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}/a_n=n/(n+1) → 곱의 상쇄 a_n=2/n → a_10=1/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1 과 비 f(n)=n/(n+1), (n+1)/n, (n+1)/(n+2). 제약: 곱이 망원으로 상쇄되어 닫힌 꼴이 나와야 함."
    creative: "(1) 일반항 a_n=2/n 을 묻기(★1) (2) 비를 (n+2)/n 처럼 두 칸 어긋나게(1078 골조 · ★2) (3) a_n a_{n+1} 의 합을 묻기(1080 골조 · ★3)."
```

```yaml
- id: RPM-ALG-1066
  page: 145
  vendor_label: "교과서 10-2 등차수열과 등비수열을 나타내는 관계식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1=1, a_{n+1}÷a_n=2^n 으로 정의된 수열의 제10항.
  category: "비 2^n 의 곱 → 지수 누적 1+2+…+9 → 2^45"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    비 2^n 을 n=1~9 까지 곱하면 지수가 1+2+…+9=45 로 쌓여 a_10=2^45. 지수 합의 상한 9(T-경계) 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}/a_n=2^n → 지수 누적 1+2+…+9=45 → 2^45"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2^{45}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 3, 5)과 지수 f(n)=n, 2n. 제약: 지수 합이 자연수 합 공식으로 닫히도록."
    creative: "(1) a_k=2^45 인 k 를 묻기(1079 골조 · ★2) (2) log_2 a_10 을 묻기(★1~2) (3) 비를 2^n·3^(−n) 으로 두 밑 섞기(★2)."
```

### 교과서 10-3 수학적 귀납법

```yaml
- id: RPM-ALG-1067
  page: 145
  vendor_label: "교과서 10-3 수학적 귀납법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    Σ 1/(k(k+1)) = n/(n+1) 의 수학적 귀납법 증명에서 n=k+1 단계의 빈칸 ㈎(양변에 더하는 항)·㈏(정리한 결과).
  category: "귀납법 (ii) 단계 → 양변에 다음 항 더하기 → 통분·정리"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명의 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n=k 가정식 양변에 다음 항 1/((k+1)(k+2)) 을 더하면 ㈎, 통분해 (k²+2k+1)/((k+1)(k+2))=(k+1)/(k+2) 가 ㈏. 더하는 항을 찾고 분수를 정리하는 표준 절차이며 통분·인수분해로 계산은 중간. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "n=k 가정 → 양변에 1/((k+1)(k+2)) 더하기 → k/(k+1)+1/((k+1)(k+2))=(k+1)/(k+2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $\dfrac{1}{(k+1)(k+2)}$ \quad ㈏ $\dfrac{k+1}{k+2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명 대상 등식(Σk=n(n+1)/2, Σ(2k−1)=n², 1+2+…+2^(n−1)=2^n−1)을 바꾸면 빈칸 값이 따라 바뀜. 제약: 빈칸은 (더하는 항, 정리 결과) 두 개 구조를 유지하고 통분이 한 번에 끝나야 함."
    creative: "(1) 부등식 증명(2^n>n 등)으로 바꾸면 빈칸 대신 부등호 방향의 근거를 묻게 됨(★2) (2) 배수 증명(n³+2n 이 3 의 배수)으로 바꾸면 f(k+1)−f(k) 를 3 의 배수로 나누는 단계(★2~3 · EQV) (3) 빈칸 대신 증명에서 틀린 부분 찾기(★3 · VF 성격)."
```

### 유형 01 등차수열의 귀납적 정의

```yaml
- id: RPM-ALG-1068
  page: 146
  vendor_label: "유형 01 등차수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=110, a_{n+1}+3=a_n 으로 정의된 수열에서 a_k=17 인 자연수 k.
  category: "a_{n+1}=a_n−3 등차 → 일반항 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 귀납적 정의"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_{n+1}=a_n−3 이므로 공차 −3, a_n=113−3n. 113−3k=17 에서 k=32. 등차 인식·일반항·일차방정식 세 단계에 상수 +3 이 좌변에 있는 부호 함정 하나. 유형 대표문제 출발 ★2 이나 통찰 없음·M_total 4 로 교과서 1059 와 같은 골조 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "a_{n+1}+3=a_n → 공차 −3 → a_n=113−3n → 113−3k=17 → k=32"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1(110)·공차(−3, −5)·목표값 17 을 바꾸되 (a_1−목표)/|d| 가 정수가 되게 조정. 제약: 부호 함정을 유지하려면 관계식을 a_{n+1}+3=a_n 꼴로 둠."
    creative: "(1) a_k<0 인 최소 k(1070 골조 · ★2) (2) 관계식을 a_{n+2}−a_{n+1}=a_{n+1}−a_n 로 숨기기(★2) (3) 두 등차수열의 공통항 번호 묻기(★3 · 배수 조건)."
```

```yaml
- id: RPM-ALG-1069
  page: 146
  vendor_label: "유형 01 등차수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=2, a_2=4, a_{n+2}−a_{n+1}=a_{n+1}−a_n 으로 정의된 수열에 대해 Σ_{k=1}^{20} 1/(a_k a_{k+1}). 5지선다.
  category: "계차 일정 → a_n=2n → 부분분수 망원합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 귀납적 정의"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관계식이 계차 일정(등차의 정의)이므로 a_n=2n. 합은 1/(4k(k+1))=(1/4)(1/k−1/(k+1)) 의 부분분수 망원으로 (1/4)(1−1/21)=5/21. 등차 인식과 부분분수 망원합 모두 표준 절차라 통찰 없음. 유형·중 출발 ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "계차 일정 → a_n=2n → 1/(a_k a_{k+1})=(1/4)(1/k−1/(k+1)) → (1/4)(1−1/21)=5/21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1, a_2(공차)와 합의 상한 20. 제약: a_n=dn 꼴(첫째항=공차)이면 1/(a_k a_{k+1}) 이 깔끔한 부분분수로 분해됨, 선택지에 (1/4) 누락값·상한 혼동값을 배치."
    creative: "(1) 합을 Σ 1/(√a_k+√a_{k+1}) 로 바꿔 유리화 망원(★2) (2) 합이 특정 값 이상이 되는 최소 상한(부등식 · ★3) (3) 등비수열의 귀납적 정의 + 로그를 취해 등차 합으로 바꾸는 결합(★3)."
```

```yaml
- id: RPM-ALG-1070
  page: 146
  vendor_label: "유형 01 등차수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=90, a_2=86, 2a_{n+1}=a_n+a_{n+2} 로 정의된 수열에서 a_k<0 인 자연수 k 의 최솟값.
  category: "등차중항 → a_n=94−4n → 일차부등식 → 최소 k"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 귀납적 정의"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등차중항 관계식에서 공차 −4, a_n=94−4n. 94−4k<0 에서 k>23.5 이므로 최소 자연수 24. 음의 공차(T-부호)와 23.5 다음 자연수(T-경계) 함정 둘. 통찰 없음·M_total 5 로 −1 후보이나 부등식과 경계 처리 단계가 있어 유형·중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "2a_{n+1}=a_n+a_{n+2} → 등차 d=−4 → 94−4k<0 → k>23.5 → 24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1, a_2·부등식 방향(a_k<0, a_k≤−10). 제약: 경계가 정수에 딱 떨어지지 않게(94/4=23.5) 두면 경계 함정이 유지되고, 딱 떨어지면 ≤ 와 < 구분 함정으로 바뀜."
    creative: "(1) 처음 음수가 되기 직전까지의 합 최댓값(등차 합 최대 · ★3) (2) |a_k| 가 최소인 k(★2) (3) a_k<0 대신 a_k a_{k+1}<0 조건으로 부호 변화 위치 묻기(★2)."
```

```yaml
- id: RPM-ALG-1071
  page: 146
  vendor_label: "유형 01 등차수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (a_{n+1}+a_n)²=4a_n a_{n+1}+36 을 만족하고 a_1=2 인 감소수열에서 a_10.
  category: "곱셈공식으로 (a_{n+1}−a_n)²=36 → 감소 조건으로 공차 −6 → a_10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(a_{n+1}+a_n)²−4a_n a_{n+1} 을 (a_{n+1}−a_n)² 으로 읽어 주어진 관계식을 계차가 상수인 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "관계식 변형으로 공차 결정(등차수열의 귀납적 정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 관계식은 그대로 쓸 수 없고 (x+y)²−4xy=(x−y)² 로 (a_{n+1}−a_n)²=36 을 얻어야 한다(EQV d1). 감소 조건에서 계차 −6 을 택하면 공차 −6 등차, a_10=2+9·(−6)=−52. 계차 부호 선택(T-부호) 하나. 유형·중 출발 ★2, 통찰 1개 d1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "(x+y)²−4xy=(x−y)² → (a_{n+1}−a_n)²=36 → 감소 → d=−6 → a_10=2−54=−52"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-52$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 36(완전제곱수 유지)·a_1·묻는 항. 제약: 감소(또는 증가) 조건이 없으면 ±6 두 답이 생기므로 단조 조건 필수, 36 을 완전제곱수가 아닌 값으로 바꾸면 무리수 공차."
    creative: "(1) 단조 조건을 빼고 a_10 의 가능한 값을 모두 묻기(MI 분기 · ★3) (2) 관계식을 a_{n+1}²−2a_n a_{n+1}+a_n²=36 으로 전개해 주면 EQV 가 사라져 절차형 ★2 (3) (a_{n+1}−a_n)(a_{n+1}+a_n)=상수 처럼 등차가 아닌 조건으로 바꾸면 a_n² 이 등차(★3~4 · EQV d2)."
```

### 유형 02 등비수열의 귀납적 정의

```yaml
- id: RPM-ALG-1072
  page: 146
  vendor_label: "유형 02 등비수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=4a_n 으로 정의된 수열에서 log_2 a_100. 5지선다.
  category: "등비 → a_100=4^99=2^198 → 로그"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 귀납적 정의"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 4 등비수열이므로 a_100=4^99, 밑을 2 로 바꾸면 2^198 이고 log_2 a_100=198. 지수 변환(4^99 를 2^99 로 잘못 읽는 선택지 ① 함정 · T-단위) 하나. 유형 대표문제 출발 ★2 이나 통찰 없음·M_total 4 로 교과서 1060 과 같은 골조 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "a_n=4^(n−1) → a_100=4^99=2^198 → log_2 a_100=198"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(8, 1/4)·항 번호·로그 밑. 제약: 공비가 로그 밑의 거듭제곱이어야 답이 정수, 선택지에 지수 변환 오류값(99, 100)을 둠."
    creative: "(1) log_2 a_k=100 인 k(역방향 · ★1~2) (2) Σ log_2 a_k 로 확장(등차 합 · ★2) (3) 공비를 −4 로 바꾸면 로그 진수 조건(양수)까지 살펴야 함(★2 · T-범위)."
```

```yaml
- id: RPM-ALG-1073
  page: 146
  vendor_label: "유형 02 등비수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}²=a_n a_{n+2}(등비) 이고 a_11/a_1+a_13/a_3+a_15/a_5+a_17/a_7=12 일 때 a_31. 5지선다.
  category: "등비중항 → 각 비 = r^10 → r^10=3 → a_31=(r^10)^3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 분수가 모두 항 번호 차 10 의 비 r^10 임을 읽고, r 이 아니라 r^10 을 단위로 a_31=a_1(r^10)^3 을 구함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 귀납적 정의"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등비중항 관계식이므로 등비수열. 조건의 네 분수는 항 번호 차가 10 으로 같아 모두 r^10, 즉 4r^10=12 에서 r^10=3. a_31=a_1 r^30=(r^10)^3=27 로 r 자체를 구하지 않는 것이 핵심(EQV d1). 공비가 미정인 매개변수 처리. 유형·중 출발 ★2, 통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "등비 인식 → a_{k+10}/a_k=r^10 네 개 합 4r^10=12 → r^10=3 → a_31=a_1 r^30=27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 번호 차(10)·분수 개수(4)·합(12)·묻는 항(31=1+3·10). 제약: (묻는 항 번호−1) 이 항 번호 차의 배수여야 r 없이 닫히고, 합/개수가 양의 정수."
    creative: "(1) 묻는 항을 차의 배수가 아닌 a_26 으로 두면 r^10=3 만으로 결정 불가 → 대신 a_21/a_6 같은 비를 묻기(★2) (2) 합 조건을 곱 조건(a_11 a_13 a_15 a_17 을 a_1 a_3 a_5 a_7 로 나눈 값)으로(★2) (3) 등차수열의 같은 골조(a_{k+10}−a_k=10d)로 병렬 변형(★1~2)."
```

```yaml
- id: RPM-ALG-1074
  page: 146
  vendor_label: "유형 02 등비수열의 귀납적 정의"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이웃 항의 비가 일정한(등비) 수열의 부분합이 S_3=78, S_6=2184 일 때 S_7. 서술형.
  category: "등비 → S_6=S_3(1+r^3) → r=3, a=6 → S_7=S_6+a_7"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "S_6−S_3=r^3·S_3(세 항 묶음이 공비 r^3 인 등비)으로 두 부분합 조건을 r 하나의 식 1+r^3=28 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 귀납적 정의(부분합 묶음으로 공비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비가 일정하므로 등비. a 와 r 을 모두 미정으로 두면 지수식 연립이 되지만 S_6−S_3=r^3 S_3 으로 읽으면 1+r^3=28 에서 r=3 이 바로 나온다(EQV d1). 이후 a(1+3+9)=78 에서 a=6, a_7=6·3^6=4374, S_7=2184+4374=6558 은 계산이며 곱셈이 다소 무겁다. 상중·서술형 출발 ★3, 통찰 1개·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "S_6/S_3=1+r^3=28 → r=3 → a(1+3+9)=78 → a=6 → S_7=2184+6·3^6=6558"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6558$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_3, S_6 을 (a, r) 에서 역산해 제시(r·a 정수 유지). 묻는 것을 S_7, a_7, S_9 로. 제약: S_6/S_3−1 이 완전세제곱수여야 r 이 정수."
    creative: "(1) S_n, S_2n, S_3n 관계로 S_9 를 묻기(등비 묶음 골조 강조 · ★3) (2) 등차수열 골조로 바꾸면 S_6−S_3=S_3+9d 로 EQV 가 약해져 ★2 (3) 부분합 대신 항의 곱 a_1 a_2 a_3 조건을 주면 등비중항으로 a_2 결정(★2)."
```

### 유형 03 $a_{n+1}=a_n+f(n)$의 꼴로 정의된 수열

```yaml
- id: RPM-ALG-1075
  page: 147
  vendor_label: "유형 03 $a_{n+1}=a_n+f(n)$의 꼴로 정의된 수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=−3, a_{n+1}=a_n+3n 으로 정의된 수열에서 Σ_{k=1}^{10} a_k. 5지선다.
  category: "계차 합으로 일반항 → Σ 공식으로 10항 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계차 3n 을 누적해 a_n=−3+3n(n−1)/2, 다시 10항 합을 Σk²=385·Σk=55 공식으로 −30+(3/2)(385−55)=465. 계차 합 → 합 공식의 표준 두 단계이고 계산은 중간. 통찰 없음. 유형 대표문제 출발 ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a_n=−3+3n(n−1)/2 → Σ_{k=1}^{10}a_k=−30+(3/2)(385−55)=465"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·계차 계수(2n, 4n+1)·합 상한 10. 제약: 계차가 n 의 일차식이면 일반항은 이차식·합은 Σk² 까지 필요, 선택지 간격을 상한 9/10 혼동 오류(10 단위)로 설계."
    creative: "(1) a_k=값 인 k 를 묻기(이차방정식 · ★2) (2) 계차 3n 을 2^n 으로 바꾸면 등비 합(★2) (3) Σ a_k 의 최솟값(a_n 부호가 바뀌는 지점 · ★3)."
```

```yaml
- id: RPM-ALG-1076
  page: 147
  vendor_label: "유형 03 $a_{n+1}=a_n+f(n)$의 꼴로 정의된 수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=2, a_{n+1}=a_n+1/(√(n+1)+√n) 으로 정의된 수열에서 a_k=13 인 자연수 k.
  category: "분모 유리화 → 계차 √(n+1)−√n → 망원합 a_n=1+√n → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계차의 분모를 유리화하면 √(n+1)−√n 이고 누적하면 망원되어 a_n=2+(√n−1)=1+√n. 1+√k=13 에서 k=144. 유리화 망원합은 수열의 합 단원의 표준 절차라 통찰로 세지 않았다. 유형·중 출발 ★2, M_total 5 로 −1 후보이나 유리화·망원·방정식 세 단계라 ★2 유지.
    [분류 이슈] 유리화 착안을 I-EQV d1 로 볼 여지가 있음 — 절차형으로 기록.
  tier: star_2
  mechanism_primary: "1/(√(n+1)+√n)=√(n+1)−√n → a_n=2+(√n−1)=1+√n → 1+√k=13 → k=144"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$144$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1(1+√n 의 상수부)·목표값 13(k=144 완전제곱수 유지). 분모를 √(n+2)+√n 으로 바꾸면 계차 (√(n+2)−√n)/2 로 두 줄 망원. 제약: (목표값−상수부) 가 자연수여야 k 가 완전제곱수."
    creative: "(1) Σ 1/(a_k+a_{k+1}) 처럼 유리화를 두 번 겹치기(★3) (2) 계차를 1/(n(n+1)) 로 바꾸면 부분분수 망원(★2) (3) a_k 가 정수가 되는 100 이하 k 의 개수(완전제곱수 세기 · ★2)."
```

```yaml
- id: RPM-ALG-1077
  page: 147
  vendor_label: "유형 03 $a_{n+1}=a_n+f(n)$의 꼴로 정의된 수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=a_n+f(n) 이고 Σ_{k=1}^{n} f(k)=n²−1 일 때 a_11.
  category: "계차 누적 = 주어진 부분합 → a_11=a_1+Σ_{k=1}^{10} f(k)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(n) 을 구하지 않고 a_11−a_1 이 f 의 부분합 S_10 과 같음을 읽어 조건을 바로 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계차 f(n) 을 S_n−S_{n−1} 로 구해 더할 수도 있지만 a_11−a_1=Σ_{k=1}^{10}f(k)=S_10=99 임을 바로 읽으면 한 줄(EQV d1), a_11=100. 함수 f 가 부분합으로만 주어져 추상도는 높고 계산은 없다. 합 상한 10(T-경계) 하나. 유형·중 출발 ★2, 통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_11−a_1=Σ_{k=1}^{10}f(k)=10²−1=99 → a_11=100"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 식(n²−1, 2^n−1, n(n+1))·a_1·묻는 항. 제약: 합 상한이 (묻는 항 번호−1) 임을 유지, S_n 이 n=0 에서 0 이 아니면 f(1)=S_1 함정이 생김."
    creative: "(1) a_{n+1}=a_n f(n) 과 Π f(k) 조건으로 곱 버전(★2) (2) f 의 부분합 대신 f(k) 의 등차 조건을 주면 절차형(★2) (3) Σ a_k 를 묻게 하면 f(n) 을 실제로 구해야 해 ★3."
```

### 유형 04 $a_{n+1}=a_nf(n)$의 꼴로 정의된 수열

```yaml
- id: RPM-ALG-1078
  page: 147
  vendor_label: "유형 04 $a_{n+1}=a_nf(n)$의 꼴로 정의된 수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=((n+2)/n)a_n 으로 정의된 수열에서 a_30. 5지선다.
  category: "비의 곱 → 두 칸 어긋난 상쇄 → a_n=n(n+1)/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비 (n+2)/n 을 n=1~29 까지 곱하면 분자 3·4·…·31, 분모 1·2·…·29 가 두 칸씩 어긋나 30·31/2=465 만 남는다. 어긋난 상쇄를 정리하는 계산이 중간. 통찰 없음. 유형 대표문제 출발 ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a_n=Π_{k=1}^{n−1}(k+2)/k=(3·4·…·(n+1))/(1·2·…·(n−1))=n(n+1)/2 → a_30=465"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 (n+3)/n, (n+2)/(n+1) 등 어긋남 칸수·a_1·묻는 항. 제약: 분자·분모가 같은 간격의 자연수 곱이어야 망원되고, 어긋남 칸수가 남는 인수 개수를 결정."
    creative: "(1) Σ 1/a_k (2/(n(n+1)) 부분분수 · ★3) (2) 비에 근호를 넣어 제곱합 묻기(1080 골조 · ★3) (3) a_k=465 인 k 를 묻는 역방향(이차방정식 · ★2)."
```

```yaml
- id: RPM-ALG-1079
  page: 147
  vendor_label: "유형 04 $a_{n+1}=a_nf(n)$의 꼴로 정의된 수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=5^n a_n 으로 정의된 수열에서 a_k=5^66 인 자연수 k. 5지선다.
  category: "비의 곱 → 지수 누적 n(n−1)/2 → k(k−1)=132"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비 5^n 을 곱하면 지수가 1+2+…+(n−1)=n(n−1)/2 로 쌓인다. k(k−1)/2=66 에서 k(k−1)=132, 자연수 k=12. 곱의 지수 합과 이차방정식의 표준 두 단계. 유형·중 출발 ★2, M_total 5 로 −1 후보이나 두 단계 구조라 ★2 유지.
  tier: star_2
  mechanism_primary: "a_n=5^(1+2+…+(n−1))=5^(n(n−1)/2) → k(k−1)/2=66 → k=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 3)·지수 f(n)(n, 2n, n+1)·목표 지수 66(삼각수 유지). 제약: 목표 지수가 삼각수여야 자연수 k, 선택지에 k(k+1)/2 혼동값(11, 13)을 둠."
    creative: "(1) log_5 a_k 로 묻기(★2) (2) 비를 5^n·2^(−n) 으로 두 밑 섞기(★2) (3) a_k 가 5^66 의 약수가 되는 k 의 개수(부등식 · ★3)."
```

```yaml
- id: RPM-ALG-1080
  page: 147
  vendor_label: "유형 04 $a_{n+1}=a_nf(n)$의 꼴로 정의된 수열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=1, √(n+2)·a_{n+1}=√(n+1)·a_n 으로 정의된 수열에서 Σ_{k=1}^{15} (a_k a_{k+1})².
  category: "비의 곱 → a_n²=2/(n+1) → 부분분수 망원합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호가 있는 a_n 대신 a_n²=2/(n+1) 로 옮겨 (a_k a_{k+1})² 을 4/((k+1)(k+2)) 부분분수 꼴로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비를 정리하면 a_{n+1}/a_n=√((n+1)/(n+2)) 이고 곱으로 망원하면 a_n=√(2/(n+1)). 묻는 것이 (a_k a_{k+1})² 이므로 a_n²=2/(n+1) 로 두면 4/((k+1)(k+2)) 의 부분분수 망원(EQV d1), 4(1/2−1/17)=30/17. 곱 망원 → 제곱 → 합 망원의 두 단계 절차에 계산은 중간. 상중 출발 ★3, 통찰 1개·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a_{n+1}/a_n=√((n+1)/(n+2)) → a_n=√(2/(n+1)) → (a_k a_{k+1})²=4/((k+1)(k+2)) → 4(1/2−1/17)=30/17"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{30}{17}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·근호 안 어긋남(√(n+3) 과 √(n+1))·합 상한 15. 제약: 제곱했을 때 이웃 정수의 곱이 되어 부분분수로 닫혀야 하고 답이 기약분수로 정리되게."
    creative: "(1) 제곱 없이 Σ a_k a_{k+1} 을 묻으면 근호 합이 닫히지 않아 출제 불가 → 대신 Σ 1/a_k² 등차 합(★2) (2) 비의 근호를 제거해 1078 골조로 낮추기(★2) (3) Σ (a_k a_{k+1})² 이 특정 값을 넘는 최소 상한(부등식 · ★3~4)."
```

### 유형 05 여러 가지 수열의 귀납적 정의

```yaml
- id: RPM-ALG-1081
  page: 148
  vendor_label: "유형 05 여러 가지 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=(a_n+2)/(4a_n−3) 으로 정의된 수열에서 a_4.
  category: "분수형 점화식 직접 대입 3회 → a_4"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적으로 정의된 수열의 항 구하기(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반항을 구하는 유형이 아니라 점화식에 세 번 대입하는 문항. a_2=3, a_3=5/9, a_4=(23/9)/(−7/9)=−23/7 로 분수 계산만 있다. 통찰 없음·M_total 5 이고 골조가 교과서 1051~1054 와 같아 유형 대표문제 출발 ★2 에서 −1 하여 ★1.
    [분류 이슈] 유형 05 대표문제이나 골조는 교과서 직접 대입과 동일 — 카탈로그에서 유형 05 의 base ★ 를 정할 때 이 문항을 대표로 삼지 않는 것이 좋음.
  tier: star_1
  mechanism_primary: "a_1=1 → a_2=3 → a_3=5/9 → a_4=(23/9)/(−7/9)=−23/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{23}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·분수 계수((a_n+1)/(2a_n−1) 등)·묻는 항(a_3~a_5). 제약: 도중에 분모 0 이 나오지 않게 계수를 고르고 분수 정리가 두 단계 이내."
    creative: "(1) 주기를 갖는 계수(a_{n+1}=1/(1−a_n))로 바꿔 a_100 을 묻기(주기 발견 PD · ★2) (2) a_4 값을 주고 a_1 을 역추적(1083 골조 · ★2) (3) 1/a_n 치환으로 등차가 되는 형태(a_{n+1}=a_n/(a_n+1))로 바꾸면 일반항 유도 EQV(★3)."
```

```yaml
- id: RPM-ALG-1082
  page: 148
  vendor_label: "유형 05 여러 가지 수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 자연수 n 에 대해 a_n+a_{n+1}=3n² 인 수열의 Σ_{k=1}^{20} a_k.
  category: "이웃 쌍 묶기 → Σ_{j=1}^{10} 3(2j−1)² → Σ 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "일반항을 구하지 않고 20항의 합을 홀수 번째에서 시작하는 10개 쌍으로 묶어 조건식 3n²(n=1, 3, …, 19) 의 합으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a_n+a_{n+1}=f(n) 꼴의 합(이웃 쌍 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n 자체는 결정되지 않지만 합은 결정된다는 구조를 읽어야 한다. 이웃 두 항씩 묶으면 n=1, 3, …, 19 에서의 3n² 의 합(EQV d2). Σ(2j−1)²=4Σj²−4Σj+10 을 전개해 3(1540−220+10)=3990. 짝 시작 위치(홀수 번째) 인덱스 함정 하나. 유형·중 출발 ★2, 통찰 1개 d2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(a_1+a_2)+(a_3+a_4)+…+(a_19+a_20)=Σ_{j=1}^{10}3(2j−1)²=3(4·385−4·55+10)=3990"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3990$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 f(n)(3n², 2n+1, 2^n)·합 상한(짝수 유지). 제약: 상한이 홀수면 마지막 항이 남아 a_1 없이는 결정되지 않음(출제 불가 또는 a_1 추가 조건 필요)."
    creative: "(1) 상한을 홀수로 두고 a_1 을 함께 주기(쌍 묶기 + 남는 항 · ★2~3) (2) a_n−a_{n+1}=f(n) 교대 합으로 바꾸면 부호 교대 처리(★3) (3) a_n+a_{n+1}+a_{n+2}=f(n) 세 항 묶음으로 나머지 항 처리(★3 · MI)."
```

```yaml
- id: RPM-ALG-1083
  page: 148
  vendor_label: "유형 05 여러 가지 수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 자연수 n 에 대해 a_{n+1}+4a_n=(−1)^n·n 이고 a_5=−144 일 때 a_1.
  category: "점화식을 n=4, 3, 2, 1 순으로 거꾸로 대입 → a_1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점화식 역대입으로 앞 항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_{n+1} 을 알면 a_n=((−1)^n n−a_{n+1})/4 로 앞 항이 결정되므로 n=4, 3, 2, 1 을 차례로 대입: a_4=37, a_3=−10, a_2=3, a_1=−1. (−1)^n 의 부호(T-부호)와 나눗셈이 네 번 반복돼 계산 중간. 역대입은 성질 분석 없는 표준 절차라 BW 로 세지 않았다. 유형·중 출발 ★2, M_total 6 → ★2.
    [분류 이슈] 결과에서 원인으로 가는 역대입을 I-BW 로 볼지 — 답이 갖출 성질을 분석하는 단계가 없어 절차형으로 기록.
  tier: star_2
  mechanism_primary: "a_5=−144 → a_4=37 → a_3=−10 → a_2=3 → a_1=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·부호항 (−1)^n·n·주어진 항 번호(a_5)와 값. 제약: 각 단계의 나눗셈이 정수로 떨어지도록 a_5 를 정방향 계산으로 미리 만들어 둠."
    creative: "(1) a_1 을 주고 a_5 를 묻는 정방향(★1~2) (2) a_{n+1}−4a_n 으로 바꿔 (−1)^n 과 결합한 부호 함정 강화(★2) (3) a_1 이 정수가 되기 위한 a_5 의 조건(역방향 성질 분석 · BW · ★3)."
```

```yaml
- id: RPM-ALG-1084
  page: 148
  vendor_label: "유형 05 여러 가지 수열의 귀납적 정의"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=−5, a_{n+1}=a_n+p (a_n≥0) / 3−a_n (a_n<0) 으로 정의된 수열에서 a_4=6 이 되는 모든 실수 p 의 곱.
  category: "a_2, a_3 계산 → a_3=8+p 의 부호로 분기 → 각 경우 p → 검증 → 곱"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_3=8+p 의 부호를 알 수 없어 두 경우로 나눠 각각 p 를 구하고, 각 해가 가정한 부호를 만족하는지 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건 분기 점화식의 매개변수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_1<0 이므로 a_2=8, a_2≥0 이므로 a_3=8+p. a_4 는 a_3 의 부호에 따라 달라지므로 p 에 대해 두 경우로 나눠 풀면(MI d2) 8+2p=6 에서 p=−1(a_3=7≥0 유효), −5−p=6 에서 p=−11(a_3=−3<0 유효). 둘 다 살아남아 곱 11. 매개변수 p 와 분기 경계(a_n≥0 / <0)·부호 함정으로 M_total 7. 상중 출발 ★3, 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "a_2=8 → a_3=8+p → (8+p≥0: 8+2p=6 → p=−1) / (8+p<0: −5−p=6 → p=−11) → 곱 11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·상수 3·목표 a_4=6·묻는 항. 제약: 두 경우의 p 가 모두 가정 부호를 만족하도록 값을 고르면 곱/합을 묻고, 하나가 기각되도록 고치면 VF 문항이 되어 답의 개수가 바뀜."
    creative: "(1) 한 경우가 부호 조건에 걸려 기각되게 수치를 조정(VF 추가 · ★4 후보) (2) a_5=값 조건으로 늘리면 분기가 최대 4 갈래(★4) (3) p 를 자연수로 제한해 답의 개수 묻기(★3 · MI+범위)."
```

### 유형 06 수가 반복되는 수열의 귀납적 정의

```yaml
- id: RPM-ALG-1085
  page: 148
  vendor_label: "유형 06 수가 반복되는 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=3, a_{n+1}=2a_n+1 (a_n≤1) / a_n−1 (a_n>1) 로 정의된 수열에서 a_200.
  category: "항 나열 → 주기 3 발견 → 200 을 3 으로 나눈 나머지"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "몇 항을 계산해 3, 2, 1 이 반복되는 주기 3 을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수가 반복되는 수열(주기 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_1=3>1 → 2 → 1(≤1) → 3 으로 되돌아와 주기 3. 200=3·66+2 이므로 a_200=a_2=2. 주기 발견은 계산으로 드러나는 얕은 통찰(PD d1)이고 나머지 인덱스 경계(T-경계) 함정 하나. 유형 대표문제 출발 ★2, 통찰 1개 → ★2.
    [분류 이슈] 유형 제목이 주기 반복을 예고하므로 PD 를 세지 않고 절차형 ★1 로 볼 여지 있음.
  tier: star_2
  mechanism_primary: "3, 2, 1, 3, 2, 1, … 주기 3 → 200=3·66+2 → a_200=a_2=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·분기 규칙(2a_n+1 / a_n−1)·경계 1·묻는 항 200. 제약: 몇 항 안에 주기가 닫히도록 규칙을 설계하고, 묻는 항 번호를 주기로 나눈 나머지가 0 이 되는 경우(주기의 마지막 항)도 출제해 경계 함정 유지."
    creative: "(1) a_1 을 바꿔 주기에 들어가기 전 꼬리 항이 생기면 나머지 계산에 보정 필요(★3) (2) Σ_{k=1}^{200} a_k(주기 합 · ★2) (3) 규칙을 홀짝 분기(짝수면 반, 홀수면 3배+1)로 바꿔 반복 구조 찾기(★2~3)."
```

```yaml
- id: RPM-ALG-1086
  page: 148
  vendor_label: "유형 06 수가 반복되는 수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=4, a_2=12, a_{n+2}=a_{n+1}−a_n 으로 정의된 수열에서 |a_k|=12 인 100 이하 자연수 k 의 개수.
  category: "항 나열 → 주기 6 → |a|=12 인 위치(k≡2, 5 mod 6) → 100 이하 개수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_{n+2}=a_{n+1}−a_n 을 여섯 항 계산해 부호가 뒤집힌 채 반복되는 주기 6 을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수가 반복되는 수열(주기 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여섯 항을 계산하면 4, 12, 8, −4, −12, −8 이 반복(주기 6 · PD d1). |a_k|=12 는 k≡2, 5 (mod 6) 두 잔여류이고 100 이하에서 각각 17개·16개로 33. 절댓값 부호(T-부호)와 100 경계에서 세는(T-경계) 함정 둘. 유형·중 출발 ★2, 통찰 1개 d1·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "4, 12, 8, −4, −12, −8 반복 → |a_k|=12 ⇔ k≡2 또는 5 (mod 6) → 17+16=33"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1, a_2(주기 6 은 점화식이 결정하므로 초기값 무관)·목표 절댓값·상한 100. 제약: 같은 절댓값이 한 주기에 두 번 나오는 구조를 유지하려면 목표값을 초기항 중 하나로, 상한을 6 의 배수가 아닌 값으로 두면 두 잔여류의 개수가 달라져 경계 함정 유지."
    creative: "(1) Σ_{k=1}^{100} a_k (주기 합 0 · 남는 4항 · ★2) (2) 점화식을 a_{n+2}=a_{n+1}+a_n 으로 바꾸면 주기가 없어 출제 불가 → 대신 3 으로 나눈 나머지의 주기(★3) (3) a_k=12 (절댓값 없이)로 줄이면 잔여류 하나 · 절차형 ★2."
```

```yaml
- id: RPM-ALG-1087
  page: 148
  vendor_label: "유형 06 수가 반복되는 수열의 귀납적 정의"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ a_{n+2}=a_n−3 (n=1, 3), a_n+3 (n=2, 4) ㈏ a_n=a_{n+6} 을 만족하고 a_1+a_2=7 인 수열의 Σ_{k=1}^{50} a_k.
  category: "a_3~a_6 을 a_1, a_2 로 표현 → 주기 6 합 = 3(a_1+a_2) → 50=6·8+2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_1, a_2 를 따로 모르는 채 ㈎의 ±3 이 상쇄되어 한 주기 합이 3(a_1+a_2) 로 닫힘을 읽고 ㈎·㈏·a_1+a_2=7 을 한 식으로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수가 반복되는 수열(주기 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎는 홀수 번째 항은 3 씩 줄고 짝수 번째 항은 3 씩 느는 규칙(n=1~4 에서만), ㈏로 주기 6. a_3=a_1−3, a_5=a_1−6, a_4=a_2+3, a_6=a_2+6 이므로 한 주기 합은 a_1, a_2 개별값 없이 3(a_1+a_2)=21 로 닫히는 것이 핵심(CON d2). 50=6·8+2 이므로 8·21+(a_1+a_2)=175. 매개변수 두 개·남는 항 경계(T-경계) 하나로 M_total 6. 상중 출발 ★3, 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "a_3=a_1−3, a_5=a_1−6, a_4=a_2+3, a_6=a_2+6 → 한 주기 합 3(a_1+a_2)=21 → 8·21+7=175"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$175$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증감 폭 3·주기 6·a_1+a_2 값·합 상한 50(50 mod 6 = 2 로 남는 항이 a_1+a_2 만 되게 설계). 제약: 남는 항 수를 3 이상으로 두면 a_1, a_2 개별값이 필요해 조건이 부족해짐 — 상한 mod 6 을 0 또는 2 로."
    creative: "(1) 남는 항이 3개가 되게 상한을 51 로 두고 a_1 값을 추가 조건으로 주기(★3) (2) ㈎의 ±3 을 비대칭(−3, +5)으로 바꾸면 주기 합이 a_1+a_2 만으로 닫히지 않아 조건 재설계 필요(★3~4) (3) 주기 조건 ㈏를 빼고 ㈎만으로 규칙을 추론하게 하면 정의 불충분 — 출제 불가."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 20 · ★2 13 · ★3 4 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 27 · premium 0
- 통찰 유형: I-EQV 6(1071 · 1073 · 1074 · 1077 · 1080 · 1082) · I-PD 2(1085 · 1086) · I-MI 1(1084) · I-CON 1(1087) · depth 2 는 1082 · 1084 · 1087 세 문항
- type_hint 상위: 「귀납적으로 정의된 수열의 항 구하기(직접 대입)」 5 · 「a_{n+1}=a_n+f(n) 꼴(계차 합)」 5 · 「a_{n+1}=a_n f(n) 꼴(비의 곱)」 5 · 「등차·등비수열의 귀납적 정의 세우기」 4 · 「귀납적 정의에서 등차·등비수열의 일반항」 4 · 「등차수열의 귀납적 정의」 3 · 「등비수열의 귀납적 정의」 2(+변형 1) · 「수가 반복되는 수열(주기 찾기)」 2(+주기 합 1)
- 벤더 출발점에서 조정한 문항: 유형 대표문제 −1 → ★1 세 문항(1068 · 1072 · 1081 — 모두 통찰 없음·M_total 4~5·교과서 구역과 같은 골조). 그 외는 벤더 출발점 유지. 2단 이상 어긋난 문항 없음.
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-1076 | 분모 유리화 → 망원합 착안을 표준 절차(절차형)로 두었으나 I-EQV d1 로 볼 여지 있음. ★ 는 어느 쪽이든 ★2 | ★2 |
| RPM-ALG-1081 | 유형 05 대표문제이나 골조는 교과서 10-1 직접 대입과 동일해 ★1 로 −1. 카탈로그에서 유형 05 base ★ 를 정할 때 이 문항을 대표로 삼지 말 것 | ★1 / ★2 |
| RPM-ALG-1083 | 결과(a_5)에서 앞 항으로 가는 역대입을 I-BW 로 볼지 — 성질 분석 없는 대입 반복이라 절차형으로 기록 | ★2 |
| RPM-ALG-1085 | 유형 제목이 주기 반복을 예고해 PD d1 인정이 애매. 절차형으로 보면 M_total 4 → ★1 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 다섯 갈래로 모인다: (a) 직접 대입으로 항 구하기(교과서 10-1 + 유형 05 대표) (b) 등차·등비의 귀납적 정의 ↔ 일반항(교과서 10-2 앞 8문 + 유형 01·02) (c) 계차 합 a_{n+1}=a_n+f(n)(교과서 10-2 뒤 2문 + 유형 03) (d) 비의 곱 a_{n+1}=a_n f(n)(교과서 10-2 뒤 2문 + 유형 04) (e) 주기 수열(유형 06).
- 따로 세워야 할 유형: 「관계식 변형으로 공차·공비 결정」(1071 · 1074 — 곱셈공식·부분합 묶음 같은 EQV 가 들어가 base ★ 가 한 단 높음), 「a_n+a_{n+1}=f(n) 꼴의 합(쌍 묶기)」(1082 — 일반항 없이 합만 결정되는 구조), 「조건 분기 점화식의 매개변수 결정」(1084 — MI/VF 로 ★3~4 슬롯 후보), 「주기 합」(1087 — 주기 찾기와 달리 매개변수 통합 CON 이 핵심).
- 통합해도 될 유형: 교과서 10-2 의 「정의 세우기」와 「일반항 구하기」는 같은 등차·등비 인식의 양방향이라 한 유형의 두 방향으로 두면 됨. 「점화식 역대입」(1083)은 직접 대입(a)의 역방향 변형으로 통합 가능.
- 수학적 귀납법 증명(교과서 10-3 · 1067)은 이 범위에 한 문항뿐이고 나머지는 2/2 범위(유형 07 이후)에 있으므로 base ★ 는 그쪽 판정과 함께 정한다.
