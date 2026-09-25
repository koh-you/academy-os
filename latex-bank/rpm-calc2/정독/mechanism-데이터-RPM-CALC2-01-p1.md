---
name: mechanism-데이터-RPM-CALC2-01-p1
description: RPM 미적분Ⅱ 01 수열의 극한(1/4 · 교과서 01-1~01-5) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 01 수열의 극한
  unit_code: CALC2-01
  part: "1/4"
  extract_range: "7~9쪽 · 0001~0035"
  total_problems: 35
  unit_total: 142
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 01 수열의 극한 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 01 수열의 극한 단원의 첫 범위(7~9쪽 · 0001~0035 · 35문항)를 다룬다. 범위 전체가 「교과서 01-1 ~ 01-5」 구역(수열의 수렴과 발산 · 극한에 대한 성질 · 극한값의 계산 · 극한의 대소 관계 · 등비수열의 극한)의 교과서 기본 문제이며, 난이도 표시(level)·태그·그림이 하나도 없다. RPM 은 구역이 곧 난이도 층(교과서 → 유형 → 유형 UP → 시험에 꼭 나오는 문제 → 서술형 → 실력 Up)이므로 이 범위는 모두 ★1 출발이고, M_total·통찰로만 ±1 조정했다. 결과는 ★1 34문 · ★2 1문(0029 · 유리화 뒤 다시 n 으로 나누는 두 기법 사슬)이며 통찰형은 없다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(이 범위는 전부 절차형이라 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 교과서 01-2 구역은 전사본에서 세 group(0013 단독 · 0014~0017 「α, β 로 나타내기」 · 0018~0021 「극한값 구하기」)으로 나뉘어 있으나 section 이름이 같아 한 절로 묶고 group 경계를 한 줄로 표시했다.

## 문항 데이터

### 교과서 01-1 수열의 수렴과 발산

공통 발문(0001~0012): 다음 수열의 수렴과 발산을 조사하고, 수렴하면 그 극한값을 구하시오. 0001~0007 은 항을 나열하고 일반항을 함께 준 꼴, 0008~0012 는 `{a_n}` 표기.

```yaml
- id: RPM-CALC2-0001
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 1/n 인 수열 1, 1/2, 1/3, 1/4, … 의 수렴·발산을 조사하고 수렴하면 극한값을 구하기.
  category: "일반항 관찰 → 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 으로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n 이 커질수록 1/n 이 0 에 한없이 가까워지므로 수렴, 극한값 0. 수렴의 정의를 확인하는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 1/n → n→∞ 에서 0 에 한없이 가까워짐 → 수렴, 극한값 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반항을 1/(n+1), 2/n, 1/n² 등으로 바꾸고 나열된 앞 네 항을 그에 맞게 다시 적는다. 제약: 나열 항과 일반항이 일치해야 하고, 극한값 0 을 유지하려면 분모 차수 > 분자 차수."
    creative: "(1) 일반항을 감추고 앞 다섯 항만 주어 일반항을 추정한 뒤 수렴 판정(★1~2 · 규칙이 뻔하면 I-PD 아님) (2) 1/n 과 (n+1)/n 을 짝지어 둘 다 「점점 작아지는데」 극한값이 0 과 1 로 갈리는 이유를 묻는 ㄱㄴㄷ(★2) (3) 극한값이 0 이 아닌 상수로 수렴하는 수열로 바꿔도 ★ 변동 없음."
```

```yaml
- id: RPM-CALC2-0002
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 2n 인 수열 2, 4, 6, 8, … 의 수렴·발산을 조사하기.
  category: "일반항 관찰 → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 무한대로 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2n 은 n 과 함께 한없이 커지므로 양의 무한대로 발산. 답은 「발산」이며 극한값을 쓰지 않는 표기가 핵심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 2n → n→∞ 에서 한없이 커짐 → 양의 무한대로 발산(극한값 없음)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(3n, 2n+1)나 n² 같은 다른 증가 일반항으로 바꿔도 발산 결론 유지. 제약: 등차수열이면 공차 ≠ 0 이어야 발산하고, 나열 항이 일반항과 맞아야 함."
    creative: "(1) 공차를 음수로 바꿔 음의 무한대(★1) (2) 「발산하는 수열은 극한값이 없다」 같은 표기 개념을 묻는 ㄱㄴㄷ(★2 · T-표기) (3) 등차수열 {a_n} 이 수렴할 조건 → 공차 0 인 상수수열(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0003
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 (n+1)/n 인 수열 2, 3/2, 4/3, 5/4, … 의 수렴·발산과 극한값.
  category: "일반항을 1+1/n 으로 분리 → 1 로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 아닌 상수로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (n+1)/n = 1 + 1/n 으로 쓰면 1 로 가는 것이 보인다. 항이 점점 작아지지만 0 이 아니라 1 로 수렴함을 확인하는 첫 예. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(n+1)/n = 1 + 1/n → 1/n → 0 → 수렴, 극한값 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(n+2)/n, (2n+1)/n, (n-1)/n 등으로. 제약: 분자·분모 차수가 같아야 0 아닌 극한값이 나오고, 나열된 앞 네 항이 일반항과 맞아야 함."
    creative: "(1) 나열만 주고 일반항을 찾게(★1~2) (2) 극한값 1 과 n 번째 항의 차가 1/100 미만이 되는 최소 n(★2 · 부등식) (3) 0001 과 짝지어 「감소수열의 극한값은 왜 0 이 아닐 수 있나」 서술(★2)."
```

```yaml
- id: RPM-CALC2-0004
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 (1/5)^(n-1) 인 수열 1, 1/5, 1/25, 1/125, … 의 수렴·발산과 극한값.
  category: "등비수열 |r|<1 → 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 으로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 1/5 인 등비수열이고 절댓값이 1 보다 작으니 0 으로 수렴. 01-5 등비수열의 극한을 앞서 보는 예. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 1/5, |r|<1 → (1/5)^(n-1) → 0 → 수렴, 극한값 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 1/3, 0.1, -1/2 로, 첫째항을 2·3 으로. 제약: |r|<1 을 유지해야 수렴하고, 첫째항이 바뀌면 나열 항도 함께 바꾼다."
    creative: "(1) 공비를 2 로 바꿔 발산(★1) (2) 공비 -1/2 로 부호가 번갈아도 0 으로 수렴함을 확인(★1) (3) 첫째항 a, 공비 r 을 매개변수로 두고 수렴 조건을 r 의 범위로(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0005
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 -2n+10 인 수열 8, 6, 4, 2, … 의 수렴·발산을 조사하기.
  category: "일반항 관찰 → 음의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 무한대로 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 항들은 양수지만 n 이 커지면 음수가 되어 한없이 작아진다. 앞 몇 항의 부호에 속지 않고 일반항의 최고차항 계수(-2)를 보는 것(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-2n+10 → n 이 커지면 음수로 한없이 작아짐 → 음의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차(-3n+20, -n+7). 제약: 공차가 음수여야 음의 무한대로 발산하고, 나열 항이 일반항과 맞아야 함."
    creative: "(1) 앞 항이 양수라 「0 으로 수렴」으로 착각하게 하는 함정 보기(★2) (2) 처음으로 음수가 되는 항의 번호(★1 · 부등식) (3) 등차수열의 수렴 조건(공차 0)과 결합한 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC2-0006
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 항이 4 인 상수수열 4, 4, 4, … 의 수렴·발산과 극한값.
  category: "상수수열 → 그 상수로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 아닌 상수로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상수수열은 수렴하고 극한값은 그 상수. 「값이 변하지 않으니 극한이 없다」는 오개념을 잡는 정의 확인. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "모든 항이 4 → 4 에 한없이 가까움(항상 같음) → 수렴, 극한값 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 값만 바꾼다(-3, 1/2). 제약: 없음(모든 상수수열은 수렴)."
    creative: "(1) 4, 4, 4, … 를 4+0·n, 4·1^n, (-2)² 처럼 다르게 쓴 것이 같은 수열임을 확인(★1) (2) 상수수열과 진동수열 1, 3, 1, 3 을 나란히 두고 수렴·발산을 가르는 ㄱㄴㄷ(★2) (3) 등비수열 r=1 → 수렴(01-5)과 연결(★1)."
```

```yaml
- id: RPM-CALC2-0007
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일반항이 2+(-1)^n 인 수열 1, 3, 1, 3, … 의 수렴·발산을 조사하기.
  category: "부호 교대 → 두 값 사이 진동 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 진동 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항이 1 과 3 을 오가며 한 값에 가까워지지 않으므로 발산. 「무한대로 가지 않으면 수렴」이라는 오개념을 잡는 진동 발산의 대표. (-1)^n 의 부호 교대 읽기(T-표기). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(-1)^n 이 -1, 1 반복 → 항이 1, 3 을 오감 → 한 값에 가까워지지 않음 → 발산(진동)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 진폭 계수(3+2(-1)^n → 1, 5 반복). 제약: 진폭 계수가 0 이면 상수수열로 바뀌어 수렴."
    creative: "(1) (-1)^n/n 처럼 진폭이 줄어드는 수열로 바꾸면 0 으로 수렴 → 「부호가 바뀌면 발산」 오개념 검사(★2) (2) 짝수항·홀수항의 극한이 다르면 발산임을 서술(★2 · I-EQV d1) (3) cos nπ(0012)와 같은 골조임을 확인(★1)."
```

```yaml
- id: RPM-CALC2-0008
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {1/(3n-2)} 의 수렴·발산과 극한값.
  category: "일반항 관찰 → 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 으로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 3n-2 가 한없이 커지므로 0 으로 수렴. 나열 대신 {a_n} 표기로 준 첫 예. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3n-2 → ∞ → 1/(3n-2) → 0 → 수렴, 극한값 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 일차식 계수(2n+1, 5n-3). 제약: 분모가 0 이 되는 자연수 n 이 없어야 함."
    creative: "(1) 분자를 n 으로 바꿔 n/(3n-2) → 1/3(★1 · 01-3 골조) (2) 부호를 붙여 -1/(3n-2)(★1) (3) 「1/(3n-2) < 0.01 인 최소 n」 같은 부등식 결합(★2)."
```

```yaml
- id: RPM-CALC2-0009
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {5+3^n} 의 수렴·발산을 조사하기.
  category: "지수항 3^n → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 무한대로 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 3 > 1 인 지수항이 한없이 커지므로 발산. 상수 5 는 극한에 영향이 없다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3^n → ∞ → 5+3^n → ∞ → 양의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2^n, 10^n)과 상수 5. 제약: 밑 > 1 이어야 발산, 밑이 0 과 1 사이면 상수로 수렴."
    creative: "(1) 5+(1/3)^n 으로 바꾸면 5 로 수렴(★1) (2) 5+(-3)^n 으로 진동 발산(★1) (3) 5+a^n 의 수렴 조건을 a 의 범위로(★2 · I-EQV d1 · 01-5 골조)."
```

```yaml
- id: RPM-CALC2-0010
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {-1/n²} 의 수렴·발산과 극한값.
  category: "일반항 관찰 → 음수 쪽에서 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 으로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항이 모두 음수지만 0 에 한없이 가까워지므로 수렴, 극한값 0. 항의 부호와 극한값을 혼동하지 않는 것(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/n² → 0 → -1/n² → 0 → 수렴, 극한값 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 차수·계수(-2/n, -1/n³). 제약: 분모 차수 ≥ 1 이면 0 으로 수렴."
    creative: "(1) -1/n² 과 -n² 을 나란히 두어 부호는 같은데 결론이 다른 이유를 묻기(★2) (2) 「극한값이 음수인가 0 인가」 개념 보기(★1) (3) (-1)^n/n² 으로 부호를 교대시켜도 수렴함을 확인(★1~2)."
```

```yaml
- id: RPM-CALC2-0011
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {1-(-1/2)^n} 의 수렴·발산과 극한값.
  category: "등비항 |r|<1 → 0 → 상수 1 로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 0 아닌 상수로 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (-1/2)^n 은 부호가 번갈아 바뀌지만 절댓값이 줄어 0 으로 가므로 전체는 1 로 수렴. 진동처럼 보이는 항이 수렴함을 확인(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(-1/2)^n → 0 (|r|<1) → 1-(-1/2)^n → 1 → 수렴, 극한값 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(-1/3, 1/2)와 상수 1(2, -3). 제약: |r|<1 이어야 상수로 수렴."
    creative: "(1) 공비를 -2 로 바꾸면 진동 발산(★1) (2) 항들이 1 을 중심으로 번갈아 위아래에 있음을 수직선에 표시하고 극한을 읽게(★1) (3) 「|a_n - 1| < 1/100 인 최소 n」 부등식 결합(★2)."
```

```yaml
- id: RPM-CALC2-0012
  page: 7
  vendor_label: "교과서 01-1 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {cos nπ} 의 수렴·발산을 조사하기.
  category: "cos nπ = (-1)^n 로 읽기 → 진동 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 조사(일반항 관찰) — 진동 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼각함수 표기를 (-1)^n 으로 읽으면 0007 과 같은 진동 발산. 표기 해석이 풀이의 전부(T-표기). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos nπ = (-1)^n → -1, 1 반복 → 발산(진동)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 2nπ(상수 1 로 수렴), sin(nπ/2)(0, 1, 0, -1 진동), cos nπ / n(0 으로 수렴). 제약: 자연수 n 에서 삼각함수 값이 간단히 떨어지는 각이어야 함."
    creative: "(1) sin(nπ/2) 처럼 주기 4 로 늘려 진동 발산(★1~2) (2) cos nπ / n 으로 바꿔 수렴 0 → 진동과 수렴 구분(★2) (3) 「-1 ≤ cos nπ ≤ 1 로 유계이므로 수렴한다」는 오류 찾기(★2)."
```

### 교과서 01-2 수열의 극한에 대한 성질

전사본 group 셋: 0013 단독(극한값 2, -1 이 주어진 여섯 소문항) · 0014~0017 공통 발문 「수렴하는 두 수열 {a_n}, {b_n} 의 극한값이 α, β 일 때 다음 수열의 극한값을 α, β 로 나타내시오(a_n ≠ 0, α ≠ 0)」 · 0018~0021 공통 발문 「다음 극한값을 구하시오」.

```yaml
- id: RPM-CALC2-0013
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim a_n = 2, lim b_n = -1 일 때 ⑴~⑹ 2-a_n · a_n+b_n · 3a_n+4b_n · 3a_nb_n · 2a_n/(5b_n) · (a_n-3)/(6b_n) 의 극한값.
  category: "극한의 기본 성질(합·차·실수배·곱·몫) → 극한값 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소문항마다 극한의 성질 하나를 적용해 2, -1 을 대입하는 산술. 몫에서는 분모 극한 ≠ 0 을 확인. 여섯 소문항이라 M_s 2 이지만 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "극한의 기본 성질로 a_n → 2, b_n → -1 을 각 식에 대입 → 산술"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0$ (2) $1$ (3) $2$ (4) $-6$ (5) $-\dfrac{4}{5}$ (6) $\dfrac{1}{6}$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 2, -1 을 다른 정수·분수로, 각 식의 계수·상수. 제약: 몫 소문항의 분모 극한이 0 이 되지 않게(b_n 의 극한 ≠ 0)."
    creative: "(1) 분모 극한이 0 인 몫을 넣어 성질을 바로 못 쓰는 경우를 판별(★2 · I-EQV d1) (2) lim a_n b_n 과 lim a_n 을 주고 lim b_n 을 구하는 역문제(★2 · I-BW d1) (3) 소문항 수를 줄이면 M_s 1 로 ★1 유지."
```

```yaml
- id: RPM-CALC2-0014
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim a_n = α, lim b_n = β 일 때 수열 {4a_n+5} 의 극한값을 α, β 로 나타내기.
  category: "실수배·상수 합의 성질 → 문자로 표현"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    실수배와 상수 합의 성질을 한 번 적용. 값 대신 문자 α 로 쓰는 것이 0013 과의 유일한 차이(M_a 2). 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "실수배·합의 성질 → 4·lim a_n + 5 → 4α+5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\alpha+5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4 와 상수 5. 제약: 없음(합·실수배는 항상 성립)."
    creative: "(1) α, β 대신 α+β=3, αβ=2 같은 관계로 주고 극한을 수로 구하게(★2 · I-CON d1) (2) 4a_n+5 의 극한이 13 일 때 α 를 역산(★1) (3) 0013 과 통합해 숫자 → 문자 이행 문항으로(★1)."
```

```yaml
- id: RPM-CALC2-0015
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim a_n = α, lim b_n = β 일 때 수열 {2a_n-3b_n} 의 극한값을 α, β 로 나타내기.
  category: "실수배·차의 성질 → 문자로 표현"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    실수배와 차의 성질을 한 번 적용해 2α-3β. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "실수배·차의 성질 → 2·lim a_n - 3·lim b_n → 2α-3β"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\alpha-3\beta$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, -3. 제약: 없음."
    creative: "(1) 2a_n-3b_n 의 극한과 a_n+b_n 의 극한을 주고 α, β 를 연립으로 구하기(★2 · I-CON d1) (2) 세 수열로 늘려도 골조 동일(★1) (3) 극한이 존재하지 않는 수열의 실수배를 섞어 성질의 전제(수렴)를 묻는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC2-0016
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim a_n = α, lim b_n = β 일 때 수열 {-a_n² b_n} 의 극한값을 α, β 로 나타내기.
  category: "곱의 성질(같은 수열의 곱 포함) → 문자로 표현"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 성질을 a_n·a_n·b_n 에 적용하면 α²β, 부호를 붙여 -α²β. 거듭제곱도 곱의 성질임을 확인. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "곱의 성질 → a_n² → α², ×b_n → α²β → 부호 → -α²β"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\alpha^2\beta$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(a_n³ b_n)·부호·계수. 제약: 없음."
    creative: "(1) (a_n+b_n)² 처럼 전개 뒤 성질을 쓰거나 바로 (α+β)² 로 가는 두 길 확인(★1) (2) a_n² 의 극한만 알려 주고 α 를 물으면 부호 두 갈래(★2 · I-MI d1) (3) 곱의 극한이 0 일 때 어느 한 수열의 극한이 0 인지 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC2-0017
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim a_n = α, lim b_n = β (a_n ≠ 0, α ≠ 0) 일 때 수열 {(b_n²-2)/a_n} 의 극한값을 α, β 로 나타내기.
  category: "곱·차의 성질로 분자 → 몫의 성질(분모 극한 ≠ 0) → 문자로 표현"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자는 곱·차의 성질로 β²-2, 분모는 α ≠ 0 이므로 몫의 성질을 써서 (β²-2)/α. 조건 a_n ≠ 0, α ≠ 0 이 몫의 성질의 전제임을 읽는 것(T-범위). 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분자 b_n²-2 → β²-2 · 분모 a_n → α ≠ 0 → 몫의 성질 → (β²-2)/α"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\beta^2-2}{\alpha}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 지수·상수(b_n²-2 → 3b_n+1), 분자·분모 자리 바꾸기(그때는 β ≠ 0 조건으로). 제약: 분모 수열의 극한이 0 이 아니어야 하고 조건문에 그것을 명시."
    creative: "(1) 조건 α ≠ 0 을 빼고 「몫의 성질을 쓸 수 있는가」를 묻는 ㄱㄴㄷ(★2 · I-EQV d1) (2) α = 0 이면서 몫이 수렴하는 예(a_n = 1/n, b_n² - 2 → 0 꼴)를 찾게(★3 · I-BW d1) (3) 숫자 극한값을 주어 0013 형으로 낮추기(★1)."
```

```yaml
- id: RPM-CALC2-0018
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim (2 + 1/n) 의 값.
  category: "1/n → 0 과 합의 성질 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/n → 0 을 알고 합의 성질을 쓰면 2+0 = 2. 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/n → 0 → 합의 성질 → 2+0 = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 1/n 의 계수·차수(3 - 2/n²). 제약: 없음."
    creative: "(1) 2 + (-1)^n/n 처럼 부호 교대 항을 붙여도 2 로 수렴함을 확인(★1) (2) 2 + 1/n 을 (2n+1)/n 으로 합쳐 01-3 의 최고차항 나누기와 연결(★1) (3) 극한값이 2 가 되는 수열을 여럿 만들게 하는 개방형(★1)."
```

```yaml
- id: RPM-CALC2-0019
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim (2/n - 1/n³) 의 값.
  category: "각 항 → 0 과 차의 성질 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2/n → 0, 1/n³ → 0 이므로 차의 성질로 0. 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2/n → 0, 1/n³ → 0 → 차의 성질 → 0-0 = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 분모 차수(5/n² + 3/n). 제약: 분모 차수 ≥ 1 이면 각 항 0."
    creative: "(1) 2/n - 1/n³ 을 통분해 (2n²-1)/n³ 으로 주면 01-3 형(★1) (2) 항 하나를 상수로 바꿔 극한값이 0 이 아니게(★1) (3) 「각 항이 0 으로 가면 합도 0」이 무한 개 항에서는 안 되는 예(1/n 을 n 개 더한 합)를 대비시키는 ㄱㄴㄷ(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC2-0020
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim (3 - 1/n)(2 + 5/n) 의 값.
  category: "각 인수의 극한 → 곱의 성질 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    전개하지 않고 각 인수의 극한 3, 2 를 구한 뒤 곱의 성질로 6. 전개해서 풀어도 같은 답이라 전략 분기는 아니다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 인수 극한 3, 2 → 곱의 성질 → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 3, 2 와 1/n 항의 계수. 제약: 없음."
    creative: "(1) 인수를 셋으로(★1) (2) 한 인수를 n(발산)으로 바꿔 「곱의 성질은 수렴할 때만」을 확인(★2 · I-EQV d1) (3) (3 - 1/n)(2 + 5/n) 을 전개해 통분한 유리식으로 주면 01-3 형(★1)."
```

```yaml
- id: RPM-CALC2-0021
  page: 7
  vendor_label: "교과서 01-2 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim (1 + 1/n)/(2 - 1/n²) 의 값.
  category: "분자·분모 극한 → 몫의 성질(분모 극한 ≠ 0) → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 → 1, 분모 → 2 (≠ 0) 이므로 몫의 성질로 1/2. 분모 극한이 0 이 아님을 확인하는 것이 유일한 주의점. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분자 1+1/n → 1 · 분모 2-1/n² → 2 ≠ 0 → 몫의 성질 → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 상수(1, 2)와 1/n 항의 계수·차수. 제약: 분모 상수 ≠ 0 이어야 몫의 성질 적용."
    creative: "(1) 분자·분모에 n² 을 곱해 (n²+n)/(2n²-1) 로 주면 01-3 의 최고차항 나누기가 됨 → 사실상 같은 문제임을 확인(★1) (2) 분모 상수를 0 으로 바꿔(1/n 만 남게) 몫의 성질이 안 되는 경우 → 발산 판정(★2 · I-EQV d1) (3) 극한값이 1/2 이 되도록 상수 하나를 미정계수로(★1)."
```

### 교과서 01-3 수열의 극한값의 계산

공통 발문(0022~0029): 다음 수열의 수렴과 발산을 조사하고, 수렴하면 그 극한값을 구하시오. 0022~0025 유리식(∞/∞) · 0026~0027 다항식 발산 · 0028~0029 무리식(∞−∞).

```yaml
- id: RPM-CALC2-0022
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {(n-1)/(2n+3)} 의 수렴·발산과 극한값.
  category: "∞/∞ 꼴 → 분모 최고차항으로 나누기 → 최고차항 계수의 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 수열의 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모가 모두 발산하므로 몫의 성질을 바로 못 쓰고 n 으로 나눈다. 차수가 같으니 최고차항 계수의 비 1/2. 표준 절차·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞/∞ 꼴 → 분자·분모를 n 으로 나눔 → (1-1/n)/(2+3/n) → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수((3n-1)/(5n+2)). 제약: 자연수 n 에서 분모 ≠ 0, 차수를 같게 두면 극한값은 최고차항 계수의 비."
    creative: "(1) 극한값이 1/2 이 되도록 하는 미정계수 a 를 역산(★1 · 표준 미정계수) (2) 분자·분모 차수를 달리해 0(0024)·발산(0025)과 한 세트로 묶는 ㄱㄴㄷ(★2) (3) 「최고차항 계수의 비만 보면 되는 이유」를 오류 찾기로(★2)."
```

```yaml
- id: RPM-CALC2-0023
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {(3n²-3n+1)/(n²+5n+1)} 의 수렴·발산과 극한값.
  category: "∞/∞ 꼴 → n² 으로 나누기 → 최고차항 계수의 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 수열의 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 최고차항 n² 으로 나누면 (3-3/n+1/n²)/(1+5/n+1/n²) → 3. 이차식이라 항이 많을 뿐 0022 와 같은 골조. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞/∞ 꼴 → n² 으로 나눔 → (3-3/n+1/n²)/(1+5/n+1/n²) → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수. 제약: 분모가 자연수 n 에서 0 이 되지 않고, 최고차항 계수의 비가 답."
    creative: "(1) 분자를 (3n-1)(n+2) 처럼 곱 꼴로 주어 전개 없이 차수·계수만 읽게(★1) (2) 극한값 3 을 조건으로 미정계수 두 개(★2 · 계수 비교) (3) 분모를 n²+5n+1 대신 |n²-5n| 로 바꿔 부호 처리를 얹기(★2 · T-부호)."
```

```yaml
- id: RPM-CALC2-0024
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {(3n+1)/(n²+2n)} 의 수렴·발산과 극한값.
  category: "∞/∞ 꼴, 분자 차수 < 분모 차수 → 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 수열의 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 최고차항 n² 으로 나누면 분자 → 0, 분모 → 1 이므로 0. 분자 차수가 낮으면 0 으로 수렴하는 경우. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞/∞ 꼴 → n² 으로 나눔 → (3/n+1/n²)/(1+2/n) → 0/1 = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수, 분모 차수를 3 으로. 제약: 분자 차수 < 분모 차수를 유지하면 극한값 0."
    creative: "(1) 분자를 n 으로 나누는 실수(분모의 최고차항이 아닌 것으로 나눔)를 보인 풀이에서 오류 찾기(★2) (2) 0022·0024·0025 를 한 문항의 ㄱㄴㄷ 로 묶어 차수 비교 규칙을 세우게(★2) (3) 분모를 √(n⁴+1) 처럼 무리식으로 바꿔도 같은 골조(★2)."
```

```yaml
- id: RPM-CALC2-0025
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {(2n²+n-5)/(6n-1)} 의 수렴·발산과 극한값.
  category: "∞/∞ 꼴, 분자 차수 > 분모 차수 → 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 수열의 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 최고차항 n 으로 나누면 분자 2n+1-5/n → ∞, 분모 → 6 이므로 양의 무한대로 발산. 답을 「발산」으로만 쓰고 극한값을 적지 않는 표기(T-표기). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞/∞ 꼴 → n 으로 나눔 → (2n+1-5/n)/(6-1/n) → 분자 → ∞, 분모 → 6 → 양의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수, 분자 차수를 3 으로. 제약: 분자 차수 > 분모 차수를 유지하면 발산, 최고차항 계수 부호가 발산 방향을 정함."
    creative: "(1) 분자 최고차항 계수를 음수로 바꿔 음의 무한대(★1 · T-부호) (2) 분모를 1-6n 으로 바꿔 부호 반전(★1) (3) 「수렴하도록 분자의 이차항 계수 a 를 정하라」 → a=0 이어야 함(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0026
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {1+2n-n²} 의 수렴·발산과 극한값.
  category: "다항식 → 최고차항으로 묶기 → 계수 부호로 발산 방향"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 수열의 발산 판정(최고차항으로 묶기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n² 으로 묶으면 n²(1/n²+2/n-1) 이고 괄호 → -1 이므로 음의 무한대로 발산. 앞 항(2, 1, -2, …)이 양수로 시작해 「수렴」으로 착각하기 쉬운 T-부호. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n² 으로 묶음 → n²(1/n²+2/n-1) → n² → ∞, 괄호 → -1 → 음의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수, 차수 3. 제약: 최고차항 계수 ≠ 0, 부호가 발산 방향을 정함."
    creative: "(1) 계수를 양수로 바꿔 양의 무한대(0027 형) (2) -n²+2n+1 = -(n-1)²+2 로 완전제곱해 최대값 2 뒤 계속 감소함을 보이는 다른 풀이 비교(★1) (3) 「모든 항이 양수인 수열은 발산해도 음의 무한대는 아니다」 같은 명제 참·거짓(★2)."
```

```yaml
- id: RPM-CALC2-0027
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {5n²-4n} 의 수렴·발산과 극한값.
  category: "다항식 → 최고차항으로 묶기 → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 수열의 발산 판정(최고차항으로 묶기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n² 으로 묶으면 n²(5-4/n), 괄호 → 5 > 0 이므로 양의 무한대로 발산. 0026 과 같은 골조에서 부호만 양수. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n² 으로 묶음 → n²(5-4/n) → 양의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수, 차수. 제약: 최고차항 계수 > 0 이면 양의 무한대."
    creative: "(1) 5n²-4n 을 n(5n-4) 로 인수분해해 두 인수가 모두 발산함을 보이는 풀이(★1) (2) 5n²-4n 과 4n-5n² 의 짝(★1 · T-부호) (3) 5n²-4n 을 분모에 두어 1/(5n²-4n) → 0 과 대비(★1)."
```

```yaml
- id: RPM-CALC2-0028
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {√(n+1) - √n} 의 수렴·발산과 극한값.
  category: "∞−∞ 꼴 → 분자 유리화 → 분모 발산 → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 무리식 수열의 극한(유리화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 항이 모두 발산하는 ∞−∞ 꼴이라 차의 성질을 못 쓰고 켤레식을 곱해 1/(√(n+1)+√n). 분모가 한없이 커지니 0. 유리화는 교과서가 제시하는 표준 절차. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞−∞ 꼴 → 분자 유리화 → 1/(√(n+1)+√n) → 분모 → ∞ → 수렴, 극한값 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√(n+a) - √(n+b) 꼴의 a, b(모두 0 으로 수렴). 제약: 근호 안이 자연수 n 에서 양수. 근호 안 차수를 2 로 올리면(√(n²+n) - n) 유리화 뒤 다시 n 으로 나누는 0029 형이 되어 ★2."
    creative: "(1) √(n²+n) - n 으로 바꿔 두 기법 사슬(★2) (2) 「√(n+1) - √n 은 ∞−∞ 이므로 0」 이라는 오류 풀이 찾기(★2 · I-EQV d1) (3) √n(√(n+1) - √n) 처럼 앞에 발산 인수를 곱해 극한값 1/2 이 되게(★2)."
```

```yaml
- id: RPM-CALC2-0029
  page: 9
  vendor_label: "교과서 01-3 수열의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {1/(√(n²+3n) - n)} 의 수렴·발산과 극한값.
  category: "분모 ∞−∞ 꼴 → 분모 유리화 → n 으로 나누기 → 극한값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 무리식 수열의 극한(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 ∞−∞ 꼴이라 켤레식을 곱하면 (√(n²+3n)+n)/(3n). 분자에 근호가 남으므로 다시 n 으로 나누어 √(1+3/n)+1 → 2, 따라서 2/3. 유리화와 최고차항 나누기 두 기법을 이어야 하고 √(n²+3n)/n = √(1+3/n) 처리까지 있어 M_total 6. 통찰은 없지만 이 범위의 최고 노동량이라 ★2. [분류 이슈] 교과서 구역(★1 출발)이나 유형 구역 「무리식의 극한」 기본 문항과 같은 골조라 ★2 로 둠 — 1단 차이, 기록만.
  tier: star_2
  mechanism_primary: "분모 유리화 → (√(n²+3n)+n)/(3n) → n 으로 나눔 → (√(1+3/n)+1)/3 → 수렴, 극한값 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '수렴, $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차항 계수 3(→ 극한값 2/3 은 2/계수)·부호(√(n²-3n)-n 이면 분모가 음수, 극한값 -2/3). 제약: 근호 안이 자연수 n 에서 양수, 분모 √(n²+an) - n ≠ 0(a ≠ 0)."
    creative: "(1) 분모를 √(n²+3n) - √(n²-3n) 로 바꾸면 유리화 뒤 분모 6n, 극한값 1/3(★2) (2) √(n²+an) - n 의 극한이 3/2 가 되는 a 를 역산(★2 · 표준 미정계수) (3) √(n²+an+b) - (n+c) 처럼 상수 두 개를 두고 수렴 조건과 극한값을 함께 묻기(★3 · I-EQV d1 · 발산·수렴 갈림)."
```

### 교과서 01-4 수열의 극한의 대소 관계

```yaml
- id: RPM-CALC2-0030
  page: 9
  vendor_label: "교과서 01-4 수열의 극한의 대소 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 자연수 n 에 대해 n/(4n+5) < a_n < (n+6)/(4n+3) 일 때 lim a_n 의 값.
  category: "양쪽 수열의 극한 계산 → 극한의 대소 관계로 극한값 확정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한의 대소 관계(샌드위치 정리)로 극한값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양쪽 유리식의 극한이 모두 1/4 이므로 사이에 낀 a_n 의 극한도 1/4. 정리를 그대로 적용하며 노동은 유리식 극한 두 번. a_n 이 일반 수열이라 M_a 2. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "양변 극한 n/(4n+5) → 1/4, (n+6)/(4n+3) → 1/4 → 대소 관계 정리 → lim a_n = 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양쪽 분모 계수 4 와 상수항. 제약: 양쪽 극한이 같아야 하고, 부등식이 모든 자연수 n 에서 실제로 성립해야 함(좌변 < 우변 확인: n(4n+3) < (n+6)(4n+5))."
    creative: "(1) 양쪽 극한을 다르게 주어 「극한값을 정할 수 없다」 판정(★2 · I-EQV d1) (2) 2n < n·a_n < 2n+1 처럼 n·a_n 꼴로 주어 n 으로 나눠서 쓰게(★2) (3) 위·아래 수열을 등비꼴이나 삼각함수 유계(-1 ≤ sin n ≤ 1)로 바꿔 sin n / n → 0 유도(★2 · I-RT d1)."
```

### 교과서 01-5 등비수열의 극한

공통 발문(0031~0035): 다음 등비수열의 수렴과 발산을 조사하시오. 극한값은 묻지 않으므로 답은 「수렴」「발산」만.

```yaml
- id: RPM-CALC2-0031
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {(3/2)^n} 의 수렴·발산 조사.
  category: "공비 r > 1 → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴·발산 판정(공비의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 3/2 > 1 이므로 양의 무한대로 발산. 공비의 범위 네 갈래(r>1 · r=1 · -1<r<1 · r≤-1) 중 하나를 읽는 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 3/2 > 1 → 양의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 다른 1 초과 유리수·소수(1.2, 5/4)로. 제약: r > 1 유지."
    creative: "(1) 공비를 1 로 바꿔 상수수열 수렴(★1) (2) 2·(3/2)^n 처럼 첫째항 계수를 붙여도 판정 불변임을 확인(★1) (3) (3/2)^n 과 (2/3)^n 을 짝지어 역수 관계로 수렴·발산이 뒤집힘을 묻기(★1)."
```

```yaml
- id: RPM-CALC2-0032
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {0.7^n} 의 수렴·발산 조사.
  category: "공비 -1 < r < 1 → 0 으로 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴·발산 판정(공비의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 0.7 은 -1 < r < 1 이므로 0 으로 수렴. 소수 공비도 같은 규칙. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 0.7, -1 < r < 1 → 0 으로 수렴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 0.99, 1/√2, -0.3 으로. 제약: |r| < 1 유지."
    creative: "(1) 공비를 0.7 대신 (√3/2) 같은 무리수로 주어 1 과의 대소 비교를 한 번 시키기(★1~2) (2) 수렴하는 등비수열 중 극한값이 0 이 아닌 것은 r=1 뿐임을 묻는 ㄱㄴㄷ(★2) (3) 0.7^n < 0.01 인 최소 n 을 상용로그로(★2 · I-XU d1 · 지수·로그 단원 결합)."
```

```yaml
- id: RPM-CALC2-0033
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {(-4/3)^n} 의 수렴·발산 조사.
  category: "공비 r < -1 → 진동하며 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴·발산 판정(공비의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 -4/3 < -1 이므로 부호가 번갈아 바뀌며 절댓값이 한없이 커져 발산(진동). 음수 공비의 절댓값을 1 과 비교하는 것(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "공비 -4/3 < -1 → 절댓값 한없이 커지며 부호 교대 → 발산(진동)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 -2, -1.5 로. 제약: r < -1 유지(r = -1 이면 -1, 1 진동으로 역시 발산이지만 절댓값이 커지진 않음)."
    creative: "(1) 공비를 -1 로 바꿔 유계 진동 발산(★1) (2) 공비를 -3/4 로 바꿔 부호 교대에도 수렴(★1 · T-부호) (3) (-4/3)^n 과 |(-4/3)^n| 을 짝지어 절댓값 수열의 발산 방향을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0034
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {3^n / (-5)^n} 의 수렴·발산 조사.
  category: "지수 정리 → 공비 -3/5 읽기 → |r| < 1 수렴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴·발산 판정(공비의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3^n/(-5)^n = (-3/5)^n 으로 정리하면 공비 -3/5, 절댓값이 1 보다 작으니 0 으로 수렴. 두 지수를 한 공비로 합치는 한 단계(지수법칙)와 음수 공비 처리(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3^n/(-5)^n = (-3/5)^n → |r| = 3/5 < 1 → 0 으로 수렴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '수렴'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3, -5 를 다른 정수 쌍으로. 제약: |분자 밑| < |분모 밑| 이면 수렴, 크면 발산, 같으면 부호에 따라 상수 또는 진동."
    creative: "(1) (-5)^n/3^n 으로 뒤집어 진동 발산(★1) (2) 3^n/(-3)^n = (-1)^n 으로 바꿔 유계 진동(★1) (3) 2^n·3^n/(-5)^n 처럼 지수법칙을 한 번 더 요구(★1~2)."
```

```yaml
- id: RPM-CALC2-0035
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {4^n / 3^(n+1)} 의 수렴·발산 조사.
  category: "3^(n+1) = 3·3^n 정리 → 공비 4/3 읽기 → r > 1 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴·발산 판정(공비의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4^n/3^(n+1) = (1/3)·(4/3)^n 으로 정리하면 첫째항 4/9, 공비 4/3 > 1 이므로 양의 무한대로 발산. 지수 n+1 을 n 으로 맞추는 한 단계가 0034 와의 차이. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4^n/3^(n+1) = (1/3)·(4/3)^n → 공비 4/3 > 1 → 양의 무한대로 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 4, 3 과 지수 어긋남(n+1 → n+2, n-1). 제약: 밑의 비가 1 보다 크면 발산, 작으면 수렴, 상수 인수는 판정에 영향 없음."
    creative: "(1) 3^(n+1)/4^n 으로 뒤집어 수렴(★1) (2) 4^n/3^(2n) = (4/9)^n 처럼 지수에 2n 을 넣어 지수법칙 한 단계 추가(★1~2) (3) 4^n/(3^(n+1)+a) 꼴로 바꾸면 01-3 최고차항(등비) 나누기와 결합(★2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 34 · ★2 1 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 35 · premium 0
- type_hint 상위: 「수열의 수렴·발산 조사(일반항 관찰)」 12(0 으로 수렴 5 · 0 아닌 상수로 수렴 3 · 무한대로 발산 3 · 진동 발산 2 — 접미어는 하위 구분) · 「수열의 극한에 대한 기본 성질(합·차·실수배·곱·몫)」 9 · 「등비수열의 수렴·발산 판정(공비의 범위)」 5 · 「∞/∞ 꼴 유리식 수열의 극한(최고차항으로 나누기)」 4 · 「∞−∞ 꼴 무리식 수열의 극한(유리화)」 2 · 「다항식 수열의 발산 판정(최고차항으로 묶기)」 2 · 「수열의 극한의 대소 관계(샌드위치 정리)」 1
- 대상층: 하위권 29 · 중하위권 6(0014~0017 · 0029 · 0030)
- 그림: 0문
- 전사 답 확인 필요: 없음(35문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0029 | 교과서 구역(★1 출발)이지만 분모 유리화 → n 으로 나누기 두 기법 사슬·M_total 6 으로 범위 내 최고 노동량. 유형 구역 「무리식의 극한」 기본 문항(★2)과 골조가 같아 ★2 로 라벨(1단 차·통찰 없음) | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 7종은 교과서 소절(01-1~01-5)과 거의 1:1 이다. 「수열의 수렴·발산 조사」는 수렴(0·상수)/무한대 발산/진동 발산으로 유형을 쪼개지 말고 한 유형(base ★1)으로 두되 「진동 발산」 만 tag 로 남기면 된다(0007·0012 는 (-1)^n 읽기라는 표기 함정이 유일한 차이).
- 「극한에 대한 기본 성질」은 숫자 대입(0013·0018~0021)과 문자 표현(0014~0017)을 통합해도 된다(M_a 만 1→2). 유형 구역에서 「lim a_n b_n 을 알 때 lim b_n」 같은 역산이 붙으면 별도 유형(★2 · I-BW)으로 세울 후보.
- 「∞/∞ 꼴 유리식」과 「다항식 발산」은 같은 「최고차항」 골조라 통합 가능하지만, 답 표기(극한값 vs 발산)와 부호 함정(0026)이 달라 하위 항목으로 나누는 편이 좋다.
- 「∞−∞ 꼴 무리식」은 유형 구역에서 별도 유형으로 세워야 한다. 단독 유리화(0028 · ★1)와 유리화+최고차항 나누기(0029 · ★2)로 base ★ 가 갈리므로 카탈로그에서 두 단계로 두는 것이 정확하다.
- 「등비수열의 수렴·발산」은 공비 네 범위 판정 단독 유형(base ★1). 유형 구역에서 공비에 x 나 매개변수가 들어가면(수렴 조건 · 「r^n 을 포함한 식의 극한」) 다른 유형이 된다.
- 「대소 관계(샌드위치)」는 단독 유형. 유형 구역에서 부등식 변형(n·a_n 꼴 · 합 S_n 꼴)이 붙으면 ★2, 유계 진동항(sin n)을 끼우면 I-RT 가 생겨 ★2~3.
