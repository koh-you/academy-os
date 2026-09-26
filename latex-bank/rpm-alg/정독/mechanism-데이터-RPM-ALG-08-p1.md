---
name: mechanism-데이터-RPM-ALG-08-p1
description: RPM 대수 08 등차수열과 등비수열(1/4 · 교과서 08-1~08-4 + 유형 01~03) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 08 등차수열과 등비수열
  unit_code: ALG-08
  part: "1/4"
  extract_range: "111~113쪽 · 0802~0835"
  total_problems: 34
  unit_total: 145
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 08 등차수열과 등비수열 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 08 단원의 첫 범위(111~113쪽 · 0802~0835 · 34문항)를 다룬다. 교과서 구역 22문(08-1 등차수열 7 · 08-2 등차수열의 합 4 · 08-3 등비수열 7 · 08-4 등비수열의 합 4)과 유형 구역 12문(유형 01 등차수열의 일반항 4 · 유형 02 항 사이의 관계가 주어진 등차수열 4 · 유형 03 조건을 만족시키는 등차수열의 항 구하기 4)이다. 벤더 난이도 신호는 교과서 구역이 난이도 표시 없이 ★1 출발, 유형 구역은 첫 문항이 「대표문제」 태그(난이도 없음 · ★2 출발)이고 나머지에 중하·중·상중 난이도가 붙어 있으며 「서술형」 태그 1문이 있다. 그림 문항은 없다. 이 범위의 ★ 조정 규칙: 유형 구역에서 통찰 0·M_total 4(공식 한 번 대입 수준)이면 −1, M_total 5 이상이면 출발점 유지, 통찰 1개 이상이면 출발점 이상.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형 코드·depth·근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 답은 전사본 answer 를 그대로 옮겼고 34문 모두 재계산으로 일치를 확인했다.

## 문항 데이터

### 교과서 08-1 등차수열

```yaml
- id: RPM-ALG-0802
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등차수열 1, 3, □, □, 9, … 의 빈칸 두 개에 알맞은 수 채우기.
  category: "인접 두 항의 차 → 공차 → 빈칸 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 공차 읽기와 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 두 항 1, 3 에서 공차 2 를 읽으면 빈칸은 5, 7 이고 다음 항 9 로 확인된다. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1, 3 → 공차 2 → 빈칸 5, 7 (9 로 검산)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5$, $7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0802.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(음수·분수 포함)와 빈칸 위치를 바꿀 수 있음. 제약: 빈칸 앞이나 뒤에 이웃한 두 항이 남아 공차가 하나로 정해져야 하고, 정수 수열이면 공차도 정수."
    creative: "(1) 빈칸을 첫째항 자리에 두기(★1 유지) (2) 이웃한 두 항이 없고 떨어진 두 항만 주어 공차를 (뒤 항-앞 항)/칸 수 로 구하게 하기(★1~2) (3) 두 수 사이에 세 수를 넣어 등차수열 만들기(등차중항·내분 감각 → ★2)."
```

```yaml
- id: RPM-ALG-0803
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등차수열 20, □, 10, 5, □, … 의 빈칸 두 개에 알맞은 수 채우기.
  category: "인접 두 항의 차 → 공차(음수) → 빈칸 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 공차 읽기와 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이웃한 10, 5 에서 공차 −5 를 읽고 앞뒤로 15, 0 을 채운다. 공차가 음수라 부호 주의(T-부호) 정도. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "10, 5 → 공차 -5 → 앞 빈칸 15, 뒤 빈칸 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$15$, $0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0803.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항과 음수 공차, 빈칸 위치(이웃한 두 항이 어디 남는지)를 바꿀 수 있음. 제약: 이웃한 두 항이 한 쌍은 남아야 공차가 정해짐. 0 이나 음수 항이 나오는 위치로 부호 함정을 조절."
    creative: "(1) 이웃한 항 쌍을 없애고 20, □, □, 5 처럼 두 칸 건너 주기(★1~2) (2) 공차를 분수로(★1) (3) 빈칸 값의 합·곱을 묻기(★1)."
```

```yaml
- id: RPM-ALG-0804
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 −2, 공차 5 인 등차수열의 일반항 a_n 구하기.
  category: "일반항 공식 a_n = a + (n-1)d 대입 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·공차가 주어진 등차수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = −2 + (n−1)·5 = 5n − 7. 공식 한 번 대입·정리. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = -2 + (n-1)·5 → 5n - 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=5n-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0804.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차를 정수·분수·음수로 바꿀 수 있음. 제약: 정리한 일반항이 pn+q 꼴로 깔끔해야 하고 (n-1)d 전개 실수(T-경계)를 유발하는 조합이면 함정 표시."
    creative: "(1) 일반항을 구한 뒤 특정 항(제20항)까지 묻기(★1) (2) 첫째항·공차를 문자 a, d 로 주고 a_n 을 문자식으로(Mₐ 2 → ★2) (3) 거꾸로 a_n = pn+q 를 주고 첫째항·공차 읽기(0825 골조 ★1)."
```

```yaml
- id: RPM-ALG-0805
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등차수열 3, 6, 9, 12, … 의 일반항 a_n 구하기.
  category: "나열된 항에서 첫째항·공차 읽기 → 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나열된 항이 주어진 등차수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항 3, 공차 3 → a_n = 3 + (n−1)·3 = 3n. 관찰만으로도 3의 배수. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "첫째항 3, 공차 3 → a_n = 3n"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=3n$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0805.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나열 항의 첫째항·공차(음수·분수)를 바꿀 수 있음. 제약: 네 항 이상 나열해 등차임이 보이게 하고, 첫째항 ≠ 공차인 조합(5, 8, 11, …)이면 a_n = 3n+2 처럼 상수항이 생겨 T-경계 함정이 됨."
    creative: "(1) 첫째항과 공차가 다른 수열로(★1) (2) 나열 항 사이에 빈칸을 섞어 공차부터 확정하게 하기(★1) (3) 일반항을 구한 뒤 특정 값이 제몇 항인지 묻기(0824 골조 ★1~2)."
```

```yaml
- id: RPM-ALG-0806
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1 = 5, a_8 = 33 인 등차수열의 공차 구하기.
  category: "a_8 = a_1 + 7d → 일차방정식 → 공차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 항이 주어진 등차수열의 공차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    33 = 5 + 7d → d = 4. 공식 한 번·일차방정식 한 줄. 항 번호 차 7 을 8 로 잘못 세는 T-경계만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_8 = a_1 + 7d → 7d = 28 → d = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0806.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1 과 다른 한 항의 값·번호를 바꿀 수 있음. 제약: (항 값 차)/(항 번호 차)가 정수(또는 의도한 분수)가 되게 맞추고, 번호 차가 8-1 = 7 임을 세는 실수를 유발하는 번호 선택."
    creative: "(1) 두 항이 모두 첫째항이 아닌 a_m, a_n 으로 주기(0827 골조 ★2) (2) 공차 대신 일반항이나 특정 항을 묻기(★1~2) (3) 항 번호를 문자 k 로 주고 k 를 묻기(0826 골조 ★1~2)."
```

```yaml
- id: RPM-ALG-0807
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1 = −5, a_6 = −40 인 등차수열의 공차 구하기.
  category: "a_6 = a_1 + 5d → 일차방정식 → 공차(음수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 항이 주어진 등차수열의 공차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −40 = −5 + 5d → d = −7. 0806 과 같은 골조에 부호만 얹음(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_6 = a_1 + 5d → 5d = -35 → d = -7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0807.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·다른 항의 값과 번호를 바꿀 수 있음. 제약: 나누어떨어지게 맞추고, 두 항의 부호를 다르게 두면 부호 함정이 하나 더 생김."
    creative: "(1) 두 항 부호를 다르게(a_1 = 5, a_6 = -30 → ★1) (2) 공차를 구한 뒤 처음으로 -100 보다 작아지는 항을 묻기(유형 03 골조 ★2) (3) 두 항이 모두 첫째항이 아닌 경우(★2)."
```

```yaml
- id: RPM-ALG-0808
  page: 111
  vendor_label: "교과서 08-1 등차수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 수 1, x, 19 가 이 순서대로 등차수열을 이룰 때 x 의 값.
  category: "등차중항 2x = 1 + 19 → x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차중항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    등차중항 x = (1+19)/2 = 10. 정의 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2x = 1 + 19 → x = 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0808.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 두 수를 바꿀 수 있음(합이 짝수면 정수 답, 홀수면 분수 답). 제약: 세 수의 순서를 명시."
    creative: "(1) 양 끝을 문자식(x+1, 3x-2 등)으로 주어 일차방정식(★1~2) (2) 네 수가 등차 → 미지수 둘 연립(★2) (3) 세 수가 등차이면서 그중 두 수를 바꾸면 등비가 되는 조건(★3 · I-CON) (4) 등차중항을 이차식 근으로 연결(x², x, 1 등 → ★2)."
```

### 교과서 08-2 등차수열의 합

```yaml
- id: RPM-ALG-0809
  page: 111
  vendor_label: "교과서 08-2 등차수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 2, 제20항 40 인 등차수열의 첫째항부터 제20항까지의 합.
  category: "첫째항·끝항 합 공식 S_n = n(a+l)/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·끝항이 주어진 등차수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S_20 = 20(2+40)/2 = 420. 공식 한 번 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S_n = n(a + l)/2 → 20·42/2 = 420"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$420$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0809.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·끝항·항 수를 바꿀 수 있음. 제약: 공차를 묻지 않는 한 (끝항-첫째항)/(n-1) 이 정수일 필요는 없지만, 홀수 항 수·홀수 합이면 분수 답이 되므로 정수로 맞추는 게 보통."
    creative: "(1) 첫째항·공차 대신 끝항만 알려주고 공차부터 구하게 하기(★1~2) (2) 합을 주고 항 수를 묻기(★2) (3) 첫째항과 끝항이 아닌 제2항·제19항을 주기(a_2 + a_19 = a_1 + a_20 대칭 활용 → ★2 · I-SYM d1)."
```

```yaml
- id: RPM-ALG-0810
  page: 111
  vendor_label: "교과서 08-2 등차수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 4, 공차 −2 인 등차수열의 첫째항부터 제20항까지의 합.
  category: "첫째항·공차 합 공식 S_n = n{2a+(n-1)d}/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·공차가 주어진 등차수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S_20 = 20{2·4 + 19·(−2)}/2 = 10·(8−38) = −300. 공식 한 번·부호 처리(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S_n = n{2a + (n-1)d}/2 → 10·(8 - 38) = -300"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-300$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0810.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(부호)·항 수를 바꿀 수 있음. 제약: 항 수가 홀수면 n/2 가 분수가 되므로 2a+(n-1)d 가 짝수가 되게 맞추거나 짝수 항 수 유지."
    creative: "(1) 공차를 양수로 두고 합이 음수가 안 되게(★1) (2) 제20항을 먼저 구해 n(a+l)/2 로 풀게 하기(전략 두 갈래 비교 → ★1) (3) 제10항부터 제20항까지의 합(부분합 = S_20 - S_9 → ★2)."
```

```yaml
- id: RPM-ALG-0811
  page: 111
  vendor_label: "교과서 08-2 등차수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    33 + 30 + 27 + … + 3 의 값.
  category: "끝항으로 항 수 확정 → n(a+l)/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 수를 구한 뒤 더하는 등차수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3 = 33 − 3(n−1) → n = 11 → S = 11(33+3)/2 = 198. 항 수 세기(T-경계)와 합 공식 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "끝항 3 = 33 - 3(n-1) → n = 11 → S = 11·36/2 = 198"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$198$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0811.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차·끝항을 바꿀 수 있음. 제약: (첫째항-끝항)이 공차로 나누어떨어져 항 수가 자연수여야 하고, 항 수 = 몫 + 1 함정(T-경계)을 유지."
    creative: "(1) 끝항을 음수까지 이어 부호가 섞이게(★1) (2) 나열 대신 '100 이하의 3의 배수의 합'처럼 항 수를 조건으로 세게 하기(★2) (3) 홀수번째 항만 더하기(공차 두 배 재해석 → ★2 · I-EQV d1)."
```

```yaml
- id: RPM-ALG-0812
  page: 111
  vendor_label: "교과서 08-2 등차수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    2 + 5 + 8 + … + 41 의 값.
  category: "끝항으로 항 수 확정 → n(a+l)/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 수를 구한 뒤 더하는 등차수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    41 = 2 + 3(n−1) → n = 14 → S = 14(2+41)/2 = 301. 0811 과 같은 골조(공차 양수). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "끝항 41 = 2 + 3(n-1) → n = 14 → S = 14·43/2 = 301"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$301$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0812.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차·끝항을 바꿀 수 있음. 제약: (끝항-첫째항)이 공차의 배수여야 하고, 항 수가 홀수·합이 홀수인 조합은 n(a+l)/2 계산에서 분수가 나오지 않도록 확인."
    creative: "(1) 끝항 대신 '50 이하'처럼 범위로 주어 끝항부터 찾게 하기(★2) (2) 첫 몇 항을 빼고 제5항부터 끝항까지 더하기(★2) (3) 합을 주고 끝항을 묻기(이차방정식 → ★2~3)."
```

### 교과서 08-3 등비수열

```yaml
- id: RPM-ALG-0813
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 3, 6, □, □, 48, … 의 빈칸 두 개에 알맞은 수 채우기.
  category: "인접 두 항의 비 → 공비 → 빈칸 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 공비 읽기와 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3, 6 에서 공비 2 → 12, 24 이고 다음 항 48 로 확인. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3, 6 → 공비 2 → 빈칸 12, 24 (48 로 검산)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$12$, $24$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0813.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(음수·분수 포함)와 빈칸 위치를 바꿀 수 있음. 제약: 이웃한 두 항이 한 쌍 남아 공비가 하나로 정해져야 하고, 확인용 항이 공비의 거듭제곱과 맞아야 함."
    creative: "(1) 이웃한 항 없이 두 항만 떨어뜨려 주면 공비의 거듭제곱근이 필요(짝수 제곱이면 ± 두 답 → ★2 · T-부호) (2) 공비를 음수로 두어 부호 교대(★1) (3) 두 수 사이에 두 수를 넣어 등비수열 만들기(★2)."
```

```yaml
- id: RPM-ALG-0814
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 2, −2, □, □, 2, … 의 빈칸 두 개에 알맞은 수 채우기.
  category: "인접 두 항의 비 → 공비 −1 → 부호 교대"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 공비 읽기와 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2, −2 에서 공비 −1 → 2, −2 로 부호만 교대. 공비가 음수인 첫 노출(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2, -2 → 공비 -1 → 빈칸 2, -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$, $-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0814.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항과 음수 공비(-2, -1/2 등)를 바꿀 수 있음. 제약: 공비가 -1 이면 값이 두 개만 반복되므로 '몇 번째 항'을 묻는 변형은 홀짝 판단이 됨."
    creative: "(1) 공비 -2 로 절댓값도 변하게(★1) (2) 제100항의 부호나 값을 묻기(홀짝 주기 → ★1~2 · I-PD d1 수준) (3) 빈칸 값의 합을 묻기(★1)."
```

```yaml
- id: RPM-ALG-0815
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 5, 공비 −3 인 등비수열의 일반항 a_n 구하기.
  category: "일반항 공식 a_n = a·r^(n-1) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·공비가 주어진 등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = 5·(−3)^(n−1). 공식 한 번. 음수 공비를 괄호로 묶는 표기(T-표기)만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = a·r^(n-1) → 5·(-3)^(n-1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=5\times(-3)^{n-1}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0815.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(양수·음수·분수)를 바꿀 수 있음. 제약: 답 표기를 a·r^(n-1) 꼴로 통일하고 음수 공비는 괄호 표기를 답 형식에 명시."
    creative: "(1) 일반항 뒤 제5항 값까지 묻기(★1) (2) 첫째항·공비를 문자로 주기(Mₐ 2 → ★2) (3) 일반항 5·(-3)^(n-1) 을 주고 첫째항·공비 읽기(★1) (4) a_n = 2·3^n 처럼 지수가 n 인 꼴에서 첫째항·공비 읽기(★2 · T-표기)."
```

```yaml
- id: RPM-ALG-0816
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 2, 2√2, 4, 4√2, … 의 일반항 a_n 구하기.
  category: "나열된 항에서 첫째항·공비(무리수) 읽기 → 일반항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나열된 항이 주어진 등비수열의 일반항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2√2/2 = √2 가 공비 → a_n = 2·(√2)^(n−1). 무리수 공비 읽기 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 √2 → a_n = 2·(√2)^(n-1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_n=2\times(\sqrt{2})^{n-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0816.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항과 무리수 공비(√3, 1/√2)를 바꿀 수 있음. 제약: 나열 네 항이 공비 관계로 정확히 이어져야 하고, 답 표기를 (√2)^(n-1) 로 두는지 2^((n-1)/2) 로 두는지 통일."
    creative: "(1) 공비를 유리화가 필요한 √2/2 로 두기(★1~2) (2) 제10항이 유리수임을 이용해 값을 묻기(지수 홀짝 → ★2) (3) 일반항을 2^(k) 꼴로 다시 쓰게 해 지수법칙과 결합(★2 · I-RT d1)."
```

```yaml
- id: RPM-ALG-0817
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1 = 2/27, a_4 = 2 인 등비수열의 공비 구하기.
  category: "a_4 = a_1·r^3 → r^3 = 27 → 실수 공비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 항이 주어진 등비수열의 공비"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2/27)·r^3 = 2 → r^3 = 27 → r = 3. 홀수 제곱이라 실수 공비 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_4 = a_1·r^3 → r^3 = 27 → r = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0817.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 값·번호를 바꿀 수 있음. 제약: 항 번호 차가 홀수면 실수 공비 하나, 짝수면 ± 두 개(0818)이므로 답 개수를 의도대로 맞춤. 비가 완전세제곱수가 되게."
    creative: "(1) 번호 차를 짝수로 바꿔 ± 두 답(★1 · T-부호) (2) 두 항이 모두 첫째항이 아닌 a_2, a_5 → 나눠서 r^3(★1~2) (3) 공비를 구한 뒤 특정 값이 제몇 항인지 묻기(★2)."
```

```yaml
- id: RPM-ALG-0818
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a_1 = 1, a_5 = 1/81 인 등비수열의 공비 구하기.
  category: "a_5 = a_1·r^4 → r^4 = 1/81 → 공비 ±"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 항이 주어진 등비수열의 공비"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r^4 = 1/81 → r = ±1/3. 짝수 제곱이라 음수 공비를 빠뜨리기 쉬움(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_5 = a_1·r^4 → r^4 = 1/81 → r = ±1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{3}$ 또는 $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0818.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 값·번호(짝수 차)를 바꿀 수 있음. 제약: r^(짝수) = 양수 완전제곱 꼴이어야 실수 공비 ±가 나오고, '공비가 양수' 조건을 붙이면 답이 하나로 줄어듦."
    creative: "(1) '공비가 음수인' 조건을 붙여 답 하나(★1) (2) 공비 후보 두 개 각각의 제7항 값을 묻기(부호 분기 → ★2 · I-MI d1) (3) 두 항이 모두 첫째항이 아닌 경우로(★1~2)."
```

```yaml
- id: RPM-ALG-0819
  page: 111
  vendor_label: "교과서 08-3 등비수열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 수 3, x, 48 이 이 순서대로 등비수열을 이룰 때 x 의 값.
  category: "등비중항 x^2 = 3·48 → x = ±12"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비중항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2 = 144 → x = ±12. 등비중항 정의 한 줄에 부호 둘(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^2 = 3·48 = 144 → x = ±12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-12$ 또는 $12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0819.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 두 수를 바꿀 수 있음. 제약: 곱이 완전제곱수여야 정수 답, 양 끝 부호가 같아야 실수 답이 존재(부호가 다르면 등비중항 없음 → 함정 변형 가능)."
    creative: "(1) 양 끝을 문자식으로 주어 이차방정식(★2) (2) 세 수가 등차·등비 동시(0808 결합 → ★3 · I-CON) (3) 양 끝 부호가 달라 실수 x 가 없는 보기를 ㄱㄴㄷ 로(★2 · I-MI d1)."
```

### 교과서 08-4 등비수열의 합

```yaml
- id: RPM-ALG-0820
  page: 111
  vendor_label: "교과서 08-4 등비수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    첫째항 4, 공비 2 인 등비수열의 첫째항부터 제8항까지의 합.
  category: "등비수열 합 공식 a(r^n - 1)/(r - 1) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·공비가 주어진 등비수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S_8 = 4(2^8 − 1)/(2 − 1) = 4·255 = 1020. 공식 한 번·2^8 계산. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S_n = a(r^n - 1)/(r - 1) → 4·(256 - 1)/1 = 1020"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1020$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0820.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비·항 수를 바꿀 수 있음. 제약: r^n 이 손계산 가능한 크기(2^10, 3^6 이하)여야 하고 r ≠ 1. 공비 1 이면 na 임을 따로 묻는 변형 가능."
    creative: "(1) 합을 2^k 꼴로 두고 k 를 묻기(★1~2) (2) 공비 1/2 로 두어 분수 합(★1) (3) S_8 과 S_4 의 비를 묻기(공통 인수 (r^4 - 1) 약분 → ★2 · I-RT d1)."
```

```yaml
- id: RPM-ALG-0821
  page: 111
  vendor_label: "교과서 08-4 등비수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 3, −6, 12, −24, … 의 첫째항부터 제8항까지의 합.
  category: "나열 항에서 공비(음수) 읽기 → 합 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "첫째항·공비가 주어진 등비수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 −2 → S_8 = 3{1 − (−2)^8}/{1 − (−2)} = 3(1 − 256)/3 = −255. 음수 공비의 부호 처리(T-부호)가 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 -2 → S_8 = 3·(1 - 256)/(1 + 2) = -255"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-255$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0821.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·음수 공비·항 수를 바꿀 수 있음. 제약: 항 수 홀짝에 따라 (-r)^n 부호가 바뀌므로 합의 부호를 의도대로 두고, (-2)^8 = 256 처럼 손계산 범위 유지."
    creative: "(1) 항 수를 홀수(제7항까지)로 바꿔 합의 부호가 양이 되게(★1 · T-부호) (2) 절댓값 수열 3, 6, 12, … 의 합과 비교(★1) (3) 부분합 S_8 - S_4 로 제5항~제8항의 합(★2)."
```

```yaml
- id: RPM-ALG-0822
  page: 111
  vendor_label: "교과서 08-4 등비수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1 + 3 + 9 + … + 243 의 값.
  category: "끝항 = 3^5 로 항 수 확정 → 합 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 수를 구한 뒤 더하는 등비수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    243 = 3^5 이므로 제6항까지(T-경계: 지수 5 ≠ 항 수) → S_6 = (3^6 − 1)/(3 − 1) = 364. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "끝항 243 = 3^5 → n = 6 → S_6 = (729 - 1)/2 = 364"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$364$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0822.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비·끝항을 바꿀 수 있음. 제약: 끝항이 첫째항×공비의 거듭제곱이어야 하고(항 수 = 지수 + 1 함정 유지), r^n 이 손계산 범위."
    creative: "(1) 첫째항을 2 로 두어 2 + 6 + 18 + … + 486(★1) (2) 끝항 대신 '1000 이하'로 주어 끝항부터 찾게(★2) (3) 홀수번째 항만 더해 공비 9 로 재해석(★2 · I-EQV d1)."
```

```yaml
- id: RPM-ALG-0823
  page: 111
  vendor_label: "교과서 08-4 등비수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/2 − 1/4 + 1/8 − … − 1/256 의 값.
  category: "공비 −1/2 · 끝항으로 항 수 확정 → 분수 합 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 수를 구한 뒤 더하는 등비수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항 1/2, 공비 −1/2, 1/256 = (1/2)^8 이므로 제8항까지 → S_8 = (1/2){1 − (−1/2)^8}/(1 + 1/2) = (1/3)(255/256) = 85/256. 부호·분수 처리가 겹쳐 Mₖ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "공비 -1/2, n = 8 → S_8 = (1/2)(1 - 1/256)/(3/2) = 85/256"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{85}{256}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0823.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(-1/3 등)·끝항을 바꿀 수 있음. 제약: 끝항 부호가 항 수 홀짝과 맞아야 하고(마지막 항이 −이면 짝수 항 수), 분모가 손계산 가능한 크기."
    creative: "(1) 부호 교대 없이 1/2 + 1/4 + … 로 두고 1 − (1/2)^n 꼴 관찰(★1) (2) 합을 1/3 과 비교해 크기 판단(★2) (3) 합이 85/256 이 되는 항 수를 묻는 역문제(★2 · I-BW d1)."
```

### 유형 01 등차수열의 일반항

```yaml
- id: RPM-ALG-0824
  page: 112
  vendor_label: "유형 01 등차수열의 일반항"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등차수열 20, 17, 14, 11, … 에서 −118 은 제몇 항인지.
  category: "공차 읽기 → 일반항 → a_n = -118 방정식 → n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항 — 특정 값이 제몇 항인지"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공차 −3 → a_n = 20 − 3(n−1) = 23 − 3n. 23 − 3n = −118 → n = 47. 일반항 세우기와 일차방정식 세 단계, 통찰 없음. 유형 대표문제라 ★2 출발이지만 M_total 4·통찰 0 으로 교과서 08-1 과 같은 골조 → −1 → ★1.
  tier: star_1
  mechanism_primary: "공차 -3 → a_n = 23 - 3n → 23 - 3n = -118 → n = 47"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$47$항"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0824.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차·목표 값을 바꿀 수 있음. 제약: (목표 값 − 첫째항)이 공차의 배수여야 n 이 자연수(아니면 '항이 아니다'가 답이 되는 함정 변형)."
    creative: "(1) 목표 값을 수열에 없는 수로 두고 '제몇 항인가 또는 없는가' 판단(★2 · I-VF d1) (2) 나열 대신 두 항 조건으로 수열을 확정한 뒤 같은 질문(0827 결합 ★2) (3) −118 대신 '처음으로 −100 보다 작아지는 항'으로 바꾸면 유형 03 골조(★2)."
```

```yaml
- id: RPM-ALG-0825
  page: 112
  vendor_label: "유형 01 등차수열의 일반항"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일반항이 a_n = −4n + 14 인 등차수열의 첫째항과 공차의 곱. 5지선다.
  category: "일반항에서 첫째항(a_1)·공차(n 의 계수) 읽기 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항 — 일반항에서 첫째항·공차 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_1 = 10, 공차 = n 의 계수 −4 → 곱 −40 (③). 읽기 한 단계, 공차 부호(T-부호)만 주의. 벤더 「중하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = -4n + 14 → a_1 = 10, d = -4 → 곱 -40"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0825.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반항의 계수·상수항을 바꿀 수 있음. 제약: 선택지가 첫째항·공차 혼동(상수항을 첫째항으로 읽는 오답 −56 등)을 포함하도록 배치."
    creative: "(1) 곱 대신 합·차를 묻기(★1) (2) a_n = pn + q 에서 p, q 조건으로 일반항 역결정(★2) (3) 일반항이 n 에 대한 일차식일 때 등차수열임을 보이는 ㄱㄴㄷ(★2 · I-EQV d1)."
```

```yaml
- id: RPM-ALG-0826
  page: 112
  vendor_label: "유형 01 등차수열의 일반항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공차 4 인 등차수열에서 a_5 = −2 일 때 a_k = 38 을 만족시키는 k.
  category: "a_k = a_5 + (k-5)d → 일차방정식 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항 — 한 항·공차에서 항 번호 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_1 = −2 − 16 = −18 → a_n = 4n − 22 → 4k − 22 = 38 → k = 15. 또는 a_k = a_5 + 4(k−5) 로 바로 k − 5 = 10. 세 단계 안·통찰 없음. 벤더 「중」이지만 M_total 4 → −1 → ★1. [분류 이슈] 유형 01 안에서 0824·0825 와 같은 ★1 이 됨.
  tier: star_1
  mechanism_primary: "a_1 = a_5 - 4d = -18 → a_n = 4n - 22 → 4k - 22 = 38 → k = 15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0826.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차·기준 항(번호·값)·목표 값을 바꿀 수 있음. 제약: (목표 값 − 기준 항 값)이 공차의 배수여야 k 가 자연수이고 k > 기준 번호."
    creative: "(1) 목표 값을 기준 항보다 작게 두어 k < 5 인 경우(★1) (2) 공차를 주지 않고 다른 한 항을 더 주기(0827 골조 ★2) (3) a_k 가 처음으로 38 이상이 되는 k 로 바꾸면 유형 03 골조(★2)."
```

```yaml
- id: RPM-ALG-0827
  page: 112
  vendor_label: "유형 01 등차수열의 일반항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    제2항이 10, 제5항이 43 인 등차수열의 제50항.
  category: "두 항 조건 → a, d 연립 → 일반항 → 제50항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항 — 두 항이 주어진 수열의 특정 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a + d = 10, a + 4d = 43 → 3d = 33, d = 11, a = −1 → a_50 = −1 + 49·11 = 538. 두 식 세우기·연립·일반항·대입 네 단계(Mₛ 2). 통찰 없음. 벤더 「중」·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "a + d = 10, a + 4d = 43 → d = 11, a = -1 → a_50 = -1 + 49·11 = 538"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$538$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0827.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호·값과 목표 항 번호를 바꿀 수 있음. 제약: (값 차)/(번호 차)가 정수 공차가 되게 하고, 49·11 처럼 곱셈 한 번으로 끝나는 크기."
    creative: "(1) 번호 차로 바로 d 를 구하는 지름길(a_5 − a_2 = 3d)을 쓰게 두 항 번호를 멀리 두기(★2) (2) 제50항 대신 '538 은 제몇 항'으로 역문제(★2) (3) 두 항 대신 a_2 + a_5 = 53, a_5 − a_2 = 33 처럼 합·차 조건으로 주면 유형 02 골조(★2)."
```

### 유형 02 항 사이의 관계가 주어진 등차수열

```yaml
- id: RPM-ALG-0828
  page: 112
  vendor_label: "유형 02 항 사이의 관계가 주어진 등차수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등차수열에서 a_8 = 26, a_6 : a_10 = 5 : 8 일 때 a_30 의 값. 5지선다.
  category: "비례식 → a, d 관계 → a_8 조건과 연립 → 일반항 → a_30"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등차수열 — 비례 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    8(a + 5d) = 5(a + 9d) → 3a = 5d, a + 7d = 26 → 26d/3 = 26 → d = 3, a = 5 → a_30 = 5 + 29·3 = 92 (③). 지름길: a_6 + a_10 = 2a_8 = 52 를 5 : 8 로 나누면 a_6 = 20, a_10 = 32 → d = 3. 비례식 정리와 분수 연립으로 Mₖ 2, 통찰은 없음(등차중항 지름길은 선택 사항). 유형 대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "8(a + 5d) = 5(a + 9d) → 3a = 5d → a + 7d = 26 → d = 3, a = 5 → a_30 = 92"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0828.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_8 의 값·비 5 : 8·두 항 번호·목표 항을 바꿀 수 있음. 제약: 두 항이 a_8 을 중심으로 대칭(6, 10)이면 등차중항 지름길이 살아 있고, 비의 합(13)이 2a_8 의 약수가 되어야 정수 공차."
    creative: "(1) 두 항을 a_8 대칭이 아닌 a_5, a_10 으로 두어 지름길을 막기(연립만 가능 → ★2 유지·Mₖ 상승) (2) 비 대신 차 a_10 − a_6 = 12 로 주면 유형 01 수준(★1~2) (3) 비 조건에 첫째항 부호 조건을 더해 두 갈래 중 하나를 기각(★3 · I-VF d1) (4) 등차중항으로 a_6, a_10 을 바로 확정하는 풀이를 요구하는 서술형(I-SYM d1 → ★2~3)."
```

```yaml
- id: RPM-ALG-0829
  page: 112
  vendor_label: "유형 02 항 사이의 관계가 주어진 등차수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등차수열에서 a_2 + a_6 = 20, a_4 + a_5 = 24 일 때 a_8 의 값.
  category: "두 합 조건 → a, d 연립 → a_8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등차수열 — 두 합 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a + 6d = 20, 2a + 7d = 24 → d = 4, a = −2 → a_8 = 26. 지름길: a_2 + a_6 = 2a_4 → a_4 = 10, a_5 = 14 → d = 4 → a_8 = a_5 + 3d. 식 두 개·연립·대입 네 단계(Mₛ 2), 통찰 없음. 벤더 「중」·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "2a + 6d = 20, 2a + 7d = 24 → d = 4, a = -2 → a_8 = 26"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$26$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0829.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합 조건의 항 번호·값과 목표 항을 바꿀 수 있음. 제약: 두 식의 d 계수 차가 1 이면 빼기 한 번으로 d 가 나오고, 정수해가 되도록 값 조정."
    creative: "(1) 합 조건 하나를 곱 조건 a_4·a_5 = 140 으로 바꾸면 이차방정식·부호 분기(★3 · I-MI d1) (2) a_2 + a_6 = 2a_4 등차중항으로 바로 a_4, a_5 를 얻는 풀이 요구(I-SYM d1 → ★2) (3) 세 항 합 a_1 + a_2 + a_3 = 6 처럼 합 조건을 합 공식과 연결(★2)."
```

```yaml
- id: RPM-ALG-0830
  page: 112
  vendor_label: "유형 02 항 사이의 관계가 주어진 등차수열"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    첫째항 −6 인 등차수열의 제2항과 제6항이 절댓값이 같고 부호가 반대일 때 12 는 제몇 항인지. 서술형.
  category: "말 조건 → a_2 + a_6 = 0 → 공차 → 일반항 → 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「절댓값이 같고 부호가 반대」를 a_2 + a_6 = 0 (a_2 = −a_6) 한 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등차수열 — 절댓값·부호 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_2 + a_6 = 0 → (−6 + d) + (−6 + 5d) = 0 → d = 2 → a_n = 2n − 8 → 2n − 8 = 12 → n = 10. 조건을 합 0 으로 옮기는 동치 변환 하나(EQV d1 · a_2 = a_6 로 잘못 세우면 d = 0 이 되는 T-부호), 뒤는 유형 01 절차. 벤더 「중」·서술형·M_total 5 → ★2 유지. [분류 이슈] 유형 02 정형 문구라 절차형으로 봐도 ★ 동일.
  tier: star_2
  mechanism_primary: "a_2 + a_6 = 0 → 6d - 12 = 0 → d = 2 → a_n = 2n - 8 = 12 → n = 10"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "제$10$항"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0830.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·두 항 번호·목표 값을 바꿀 수 있음. 제약: 두 번호의 평균 (2+6)/2 = 4 가 0 이 되는 항이므로 첫째항과 번호 차에서 공차가 정수로 나오게 하고, 목표 값이 수열에 실제로 있어야 함."
    creative: "(1) 두 항 번호의 합이 홀수(a_2, a_7)로 두면 0 인 항이 없어 a = −(9/2)d 계산이 조금 무거움(★2) (2) 첫째항 대신 '첫째항이 음수'만 주고 처음으로 양수가 되는 항을 묻기(0835 골조 ★3) (3) 조건을 '제2항과 제6항의 합이 제4항의 두 배' 처럼 항상 성립하는 문장으로 바꿔 함정 보기(★2 · I-MI d1)."
```

```yaml
- id: RPM-ALG-0831
  page: 112
  vendor_label: "유형 02 항 사이의 관계가 주어진 등차수열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공차가 양수인 등차수열에서 a_4 + a_8 = 0, |a_5| = |a_6| + 2 일 때 a_3 의 값.
  category: "a_4 + a_8 = 0 → a_6 = 0 → 절댓값 조건이 d 한 식으로 → 부호 조건으로 d 확정 → a_3"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_4 + a_8 = 0 을 a_6 = 0 (a = −5d) 로 바꿔 절댓값 조건을 |−d| = 2 한 식으로 무너뜨림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등차수열 — 절댓값·부호 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_4 + a_8 = 2a_6 = 0 → a_6 = 0, a_5 = −d → |−d| = 0 + 2 → d = 2 (공차 양수로 −2 기각) → a_3 = a_6 − 3d = −6. 첫 조건을 a_6 = 0 으로 옮기면 절댓값 두 개가 한 번에 풀리는 것이 핵심(EQV d1). 공차 부호 조건 사용(T-범위)과 절댓값 부호(T-부호)로 Mₜ 2. 벤더 「상중」·통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a_4 + a_8 = 0 → a_6 = 0 → |a_5| = |−d| = 2 → d = 2 (d > 0) → a_3 = -6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0831.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합이 0 인 두 항의 번호(중점이 자연수 번호가 되게)·절댓값 차 2·목표 항을 바꿀 수 있음. 제약: 절댓값 식이 |−d| = 상수 꼴로 떨어지려면 절댓값 두 항 중 하나가 0 인 항(a_6)이어야 하고, 공차 부호 조건이 없으면 답이 둘."
    creative: "(1) 공차 부호 조건을 빼고 가능한 a_3 의 값을 모두 구하기(두 갈래 모두 답 → ★3 · I-MI d1) (2) 절댓값 항을 0 인 항과 떨어뜨려 |a_4| = |a_7| + 2 처럼 두면 부호 케이스 분기(★4 · I-MI d2) (3) a_4 + a_8 = 0 을 a_4 + a_9 = 0 으로 바꾸면 a_6 = 0 이 안 되어 분수 처리(★3 유지·Mₖ 상승)."
```

### 유형 03 조건을 만족시키는 등차수열의 항 구하기

```yaml
- id: RPM-ALG-0832
  page: 113
  vendor_label: "유형 03 조건을 만족시키는 등차수열의 항 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    제3항이 63, 제10항이 35 인 등차수열에서 처음으로 음수가 되는 항은 제몇 항인지. 5지선다.
  category: "두 항 → 공차·첫째항 → 일반항 → a_n < 0 부등식 → 최소 자연수 n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등차수열의 항 — 처음으로 음수가 되는 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    7d = 35 − 63 = −28 → d = −4, a = 71 → a_n = 75 − 4n < 0 → n > 18.75 → 제19항 (②). 공차·첫째항·일반항·부등식·최소 자연수 다섯 단계(Mₛ 2). '처음으로 음수' 를 a_n < 0 의 최소 자연수 해로 옮기는 것은 이 유형의 표준 절차라 통찰로 세지 않음. 경계 18.75 → 19 (T-경계). 유형 대표문제·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "a_10 - a_3 = 7d → d = -4, a = 71 → a_n = 75 - 4n < 0 → n > 18.75 → 제19항"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0832.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호·값(감소수열이 되게 뒤 항이 작아야 함)을 바꿀 수 있음. 제약: 번호 차가 값 차를 나누어 정수 공차, 경계 n 이 정수가 아니게(a_n = 0 인 항이 없게) 두어야 '처음으로 음수' 가 하나로 정해짐. a_n = 0 인 항이 생기면 그 항은 음수가 아님을 묻는 함정 변형."
    creative: "(1) a_n = 0 이 되는 n 이 자연수가 되게 만들어 '음수' 와 '0' 경계를 시험(★2~3 · T-경계) (2) '처음으로 음수가 되는 항' 을 '합 S_n 이 최대가 되는 n' 으로 바꾸면 같은 골조에서 합 개념 결합(★3 · I-EQV d1) (3) 두 항 대신 비례 조건(0828 골조)으로 수열을 확정한 뒤 같은 질문(★3)."
```

```yaml
- id: RPM-ALG-0833
  page: 113
  vendor_label: "유형 03 조건을 만족시키는 등차수열의 항 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 −62, 공차 5 인 등차수열에서 처음으로 양수가 되는 항은 제몇 항인지. 5지선다.
  category: "일반항 → a_n > 0 부등식 → 최소 자연수 n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등차수열의 항 — 처음으로 양수가 되는 항"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = 5n − 67 > 0 → n > 13.4 → 제14항 (③). 첫째항·공차가 그대로 주어져 일반항·부등식·최소 자연수 세 단계. 경계 13.4 → 14 (T-경계). 벤더 「중하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = 5n - 67 > 0 → n > 13.4 → 제14항"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0833.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(음수)·공차(양수)를 바꿀 수 있음. 제약: 경계 n = (67/5 등)이 정수가 아니게 두거나, 정수가 되게 두면 그 항은 0 이라 '양수' 가 아님을 선택지에 함정으로 배치."
    creative: "(1) '처음으로 100 보다 커지는 항' 처럼 기준을 0 이 아닌 수로(0834 골조 ★2) (2) 첫째항·공차 대신 두 항을 주기(0832 골조 ★2) (3) 양수가 되는 항부터 제20항까지의 합을 묻기(부분합 결합 ★3)."
```

```yaml
- id: RPM-ALG-0834
  page: 113
  vendor_label: "유형 03 조건을 만족시키는 등차수열의 항 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 5, a_6 − a_4 = 8 인 등차수열에서 처음으로 100 보다 커지는 항은 제몇 항인지.
  category: "a_6 − a_4 = 2d → 공차 → 일반항 → a_n > 100 부등식 → 최소 자연수 n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등차수열의 항 — 처음으로 기준값을 넘는 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_6 − a_4 = 2d = 8 → d = 4 → a_n = 4n + 1 > 100 → n > 24.75 → 제25항. 항 차에서 공차·일반항·부등식·최소 자연수 네 단계(Mₛ 2). 통찰 없음(a_6 − a_4 = 2d 는 표준). 경계 24.75 → 25 (T-경계). 벤더 「중」·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "a_6 - a_4 = 2d = 8 → d = 4 → a_n = 4n + 1 > 100 → n > 24.75 → 제25항"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "제$25$항"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0834.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·항 차 조건(번호 차와 값)·기준값 100 을 바꿀 수 있음. 제약: 값 차가 번호 차의 배수여야 정수 공차, 기준값이 수열의 항과 같으면 '커지는' 과 '이상' 의 경계 함정(T-경계)."
    creative: "(1) 기준값을 수열의 항(101)으로 두고 '101 이상' 과 '101 보다 큰' 을 대비(★2 · T-경계) (2) 공차를 음수로 두고 '처음으로 −100 보다 작아지는 항'(★2 · T-부호) (3) a_6 − a_4 대신 a_6 + a_4 = 50 처럼 합 조건으로 주면 연립이 하나 늘어남(★2)."
```

```yaml
- id: RPM-ALG-0835
  page: 113
  vendor_label: "유형 03 조건을 만족시키는 등차수열의 항 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항이 양수인 등차수열의 제10항과 제16항이 절댓값이 같고 부호가 반대일 때 처음으로 음수가 되는 항은 제몇 항인지.
  category: "말 조건 → a_10 + a_16 = 0 → a = −12d · d < 0 → (n − 13)d < 0 부등식 → 최소 n"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「절댓값 같고 부호 반대」→ a_10 + a_16 = 0 → a = −12d 와 「첫째항 양수」→ d < 0 을 함께 옮겨야 (n − 13)d < 0 의 부등호 방향이 정해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건을 만족시키는 등차수열의 항 — 절댓값·부호 조건 뒤 처음으로 음수가 되는 항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_10 + a_16 = 0 → 2a + 24d = 0 → a = −12d, 첫째항 양수 → d < 0. a_n = (n − 13)d < 0 ⇔ n − 13 > 0 (d < 0 으로 부등호 반전) → 제14항. 지름길: a_10 + a_16 = 2a_13 = 0 → a_13 = 0 이고 감소수열이므로 바로 제14항. 두 말 조건을 매개변수 d 하나로 옮기고(EQV d2), d 가 남은 채 부등식을 풀어 Mₐ 2, 부등호 반전(T-부호)·13 과 14 경계(T-경계)로 Mₜ 2. 벤더 「상중」·통찰 1·M_total 7 → ★3. [분류 이슈] 합 0 변환과 d < 0 추론을 통찰 2개로 세면 +1 후보(★4) — 한 EQV d2 로 묶어 ★3 유지.
  tier: star_3
  mechanism_primary: "a_10 + a_16 = 0 → a = -12d, d < 0 → a_n = (n - 13)d < 0 → n > 13 → 제14항"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "제$14$항"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0835.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호(10, 16)와 첫째항 부호를 바꿀 수 있음. 제약: 번호 합이 짝수면 0 인 항 a_((m+n)/2) 이 존재해 답이 그 다음 항으로 깔끔하고, 번호 합이 홀수면 0 인 항이 없어 (2n − m − n − ...)d 꼴 부등식 처리가 필요(★ 유지·Mₖ 상승). 첫째항 부호를 음수로 바꾸면 '처음으로 양수' 로 질문을 맞춤."
    creative: "(1) 번호 합을 홀수(a_10, a_15)로 두어 등차중항 지름길을 막기(★3 유지) (2) 첫째항 부호 조건을 빼고 '처음으로 음수가 되는 항이 존재하는가' 를 포함해 케이스 분기(★4 · I-MI d1 추가) (3) 같은 조건에서 합 S_n 이 최대가 되는 n 을 묻기(a_13 = 0 이라 n = 12, 13 두 값 → ★4 · I-EQV d2 + I-VF d1) (4) 지름길 a_13 = 0 을 요구하는 서술형(I-SYM d1 명시 → ★3)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 26 · ★2 6 · ★3 2 · ★4 0 · ★5 0
- 통찰형 3(RPM-ALG-0830 EQV d1 · 0831 EQV d1 · 0835 EQV d2) · 절차형 31 · premium 0
- type_hint 상위: 「등차수열의 일반항(유형 01 계열)」 4 · 「항 사이의 관계가 주어진 등차수열(유형 02 계열)」 4 · 「조건을 만족시키는 등차수열의 항(유형 03 계열)」 4 · 「항 수를 구한 뒤 더하는 등차/등비수열의 합」 4 · 「공차/공비 읽기와 빈칸 채우기」 4 · 「두 항이 주어진 등차/등비수열의 공차·공비」 4
- 벤더 신호 대비: 교과서 22문 전부 ★1 · 유형 대표문제 3문(0824 ★1 · 0828 ★2 · 0832 ★2) · 중하 2문 ★1 · 중 5문(★1 1 · ★2 4) · 상중 2문 ★3 · 서술형 1문 ★2
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0826 | 벤더 「중」이나 M_total 4·통찰 0 → −1 적용 ★1. 유형 01 안에서 대표문제 0824·「중하」 0825 와 같은 ★1 이 되어 벤더 층위가 평탄해짐 | ★1 / ★2 |
| RPM-ALG-0830 | 「절댓값이 같고 부호가 반대 → 합 0」을 EQV d1 로 인정했으나 유형 02 정형 문구라 절차형으로 봐도 무방. ★ 영향 없음 | ★2 |
| RPM-ALG-0835 | 「합 0 → a = −12d」와 「첫째항 양수 → d < 0 → 부등호 반전」을 별개 통찰 2개로 세면 +1 후보(★4). 한 EQV d2 로 묶어 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 유형 01·02·03 계열이 각 4문, 교과서 소유형 15개가 각 1~2문. 교과서 소유형은 「등차수열의 일반항 기본(빈칸·나열·두 항 공차·등차중항)」「등비수열의 일반항 기본(빈칸·나열·두 항 공비·등비중항)」「등차수열의 합 기본(첫째항·끝항 / 첫째항·공차 / 항 수 확정)」「등비수열의 합 기본(첫째항·공비 / 항 수 확정)」 네 유형으로 통합해도 ★ 변별에 손실이 없다(전부 base ★1).
- 따로 세워야 할 유형: (a) 「등차수열의 항 번호 구하기」(0824·0826 — 값 → n 역문제, base ★1~2) (b) 「항 사이의 관계가 주어진 등차수열」(base ★2)에 하위 태그 비례(0828)·합(0829)·절댓값·부호(0830·0831)를 두고, 절댓값·부호 조건은 ★3 슬롯 자격으로 분리 (c) 「처음으로 음수·양수·기준값을 넘는 항」(부등식의 최소 자연수 해 · base ★2 · 0832~0834)과 그 위에 절댓값·부호 조건이 얹힌 결합형(0835 · base ★3)을 구분 (d) 「등차중항·등비중항」은 세 수 조건형(★1)과 문자식·이차방정식 결합형(★2~3)으로 나뉘므로 따로.
- 반복 골조 메모: 등차중항 대칭 a_m + a_n = 2a_((m+n)/2) 가 0828·0829·0831·0835 네 문항에서 지름길로 쓰인다. 카탈로그에서 이 지름길을 I-SYM d1 로 인정할지(서술형에서 요구할 때만) 기준을 정해 두면 유형 02·03 의 ★2/★3 경계가 일관해진다. 짝수 제곱근의 ± 함정(0818·0819)은 등비 소유형 전체의 표준 T-부호로 표에 명시.
