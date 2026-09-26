---
name: mechanism-데이터-RPM-ALG-02-p1
description: RPM 대수 02 로그(1/3 · 교과서 02-1~02-3) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 02 로그
  unit_code: ALG-02
  part: "1/3"
  extract_range: "19쪽 · 0110~0145"
  total_problems: 36
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 02 로그 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 02 로그 단원의 첫 범위(19쪽 · 0110~0145 · 36문)를 다룬다. 전부 「교과서 02-1 로그의 정의」「교과서 02-2 로그의 성질」「교과서 02-3 상용로그」 구역의 교과서 기본 문제이며, 공통 발문(예: 「다음 등식을 x=log_a N 의 꼴로 나타내시오」) 아래 짧은 식 하나가 문항인 드릴 형식이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·기출)로 나타나는데, 이 범위는 교과서 구역이라 난이도·태그가 없고 출발점은 모두 ★1 이다. 통찰이 있는 문항이 없어 M_total(4~5)로도 ★ 조정이 일어나지 않았다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 공통 발문은 각 블록 `summary` 에 요약해 넣었고, 발문 그룹이 바뀌는 지점에 굵은 안내 줄을 두었다. 0140·0141 은 상용로그표(크롭 `fig-g0140-0141.png` · 5.0~5.2 행 · 0~4 열)를 읽는 문항이다.

## 문항 데이터

### 교과서 02-1 로그의 정의

**공통 발문 (0110~0113)**: 다음 등식을 x=log_a N 의 꼴로 나타내시오.

```yaml
- id: RPM-ALG-0110
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 3^4=81 을 x=log_a N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 지수 등식을 로그 등식으로 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a^x=N ⇔ x=log_a N 정의를 한 번 적용. 밑 3·지수 4·진수 81 의 자리만 옮기면 끝이고 계산은 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3^4=81 → 밑 3 · 지수 4 · 진수 81 자리 확인 → 4=log_3 81"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4=\log_3 81$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수를 다른 자연수 거듭제곱(2^5=32, 5^3=125, 10^4=10000)으로. 제약: 밑은 1 이 아닌 양수, 진수는 양수, 등식이 실제로 성립하고 학생이 암산으로 확인할 수 있는 크기."
    creative: "(1) 밑을 분수·무리수(0111·0115 형)로 두어 밑 표기 주의(★1 유지) (2) 지수를 음수·분수로 두어 지수 확장과 결합(★1) (3) 거꾸로 로그 등식을 주고 지수 등식으로 바꾸기(0114 형 · ★1)."
```

```yaml
- id: RPM-ALG-0111
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 (1/2)^{-3}=8 을 x=log_a N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 지수 등식을 로그 등식으로 변환(분수 밑·음수 지수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 분수·지수가 음수여도 정의 적용은 같다. 밑 1/2 를 그대로 로그의 밑에 쓰고 지수 -3 을 로그값으로 옮기면 끝. 밑을 2 로 바꿔 log_2 8=3 으로 쓰면 다른 등식이 되므로 「주어진 밑 유지」가 유일한 주의점(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1/2)^{-3}=8 → 밑 1/2 · 지수 -3 · 진수 8 → -3=log_{1/2} 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3=\log_{\frac{1}{2}} 8$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 1/3·2/5·0.1 등 다른 분수·소수로, 지수를 -1·-2·-4 로. 제약: 밑은 1 이 아닌 양수, 진수는 양수, (밑)^(지수) 가 실제로 진수와 같아야 함."
    creative: "(1) 밑을 소수(0.5)로 주어 분수 변환을 한 단계 더 두기(★1) (2) 같은 값 8 을 밑 2·밑 1/2·밑 4 로 각각 로그 표현하게 해 밑에 따라 로그값이 달라짐을 대비(★1~2) (3) 「밑 2 로 바꿔 쓰면 log_2 8=3」처럼 원래 등식과 다른 등식이 됨을 지적하는 ㄱㄴㄷ 보기(★2)."
```

```yaml
- id: RPM-ALG-0112
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 25^{1/2}=5 를 x=log_a N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 지수 등식을 로그 등식으로 변환(유리수 지수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수가 1/2 이어도 정의 그대로. 25^{1/2}=√25=5 를 확인하는 것 외에 계산이 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "25^{1/2}=5 → 밑 25 · 지수 1/2 · 진수 5 → 1/2=log_25 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}=\log_{25} 5$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 8·지수 1/3·진수 2, 밑 16·지수 3/4·진수 8 등. 제약: 밑^(지수) 가 정확히 진수가 되는 완전거듭제곱 조합."
    creative: "(1) √25=5 처럼 근호 표기로 주고 지수 1/2 로 먼저 고치게 하기(지수 확장 결합 ★1) (2) 밑과 진수를 바꿔 log_5 25=2 와 비교(★1) (3) 같은 등식을 log_5 25 · log_25 5 두 가지로 쓰고 곱이 1 임을 관찰(0132 예고 ★2)."
```

```yaml
- id: RPM-ALG-0113
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 7^0=1 을 x=log_a N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 지수 등식을 로그 등식으로 변환(지수 0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a^0=1 ⇔ log_a 1=0 의 정의 확인. 어떤 밑이든 진수 1 이면 로그값 0. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "7^0=1 → 밑 7 · 지수 0 · 진수 1 → 0=log_7 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0=\log_7 1$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 아무 양수(2·10·1/3)로. 제약: 밑 ≠ 1, 진수는 1 로 고정(지수 0 의 골조)."
    creative: "(1) a^1=a → log_a a=1 과 짝지어 두 기본값을 함께 확인(★1) (2) log_a 1=0 이 밑과 무관함을 묻는 참·거짓(★1) (3) log_7 1+log_7 7 처럼 성질 계산과 결합(0124 형 ★1)."
```

**공통 발문 (0114~0117)**: 다음 등식을 a^x=N 의 꼴로 나타내시오.

```yaml
- id: RPM-ALG-0114
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 log_2 32=5 를 a^x=N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 로그 등식을 지수 등식으로 변환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=log_a N ⇔ a^x=N 의 역방향 적용. 밑 2·로그값 5·진수 32 의 자리를 확인하면 끝. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_2 32=5 → 밑 2 · 로그값 5 · 진수 32 → 2^5=32"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2^5=32$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·진수 81·로그값 4, 밑 10·진수 100000·로그값 5 등. 제약: 밑은 1 이 아닌 양수, 진수 양수, 등식이 실제로 성립."
    creative: "(1) 로그값을 빈칸으로 두어 정의와 미지수 구하기 결합(0118 형 ★1) (2) 밑·진수 위치를 바꾼 오답 보기를 섞은 ㄱㄴㄷ(★1~2) (3) 두 로그 등식을 지수 등식으로 바꿔 진수 사이 관계(32=2^5, 8=2^3 → 32=8^{5/3})를 묻기(★2)."
```

```yaml
- id: RPM-ALG-0115
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 log_{√3} 9=4 를 a^x=N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 로그 등식을 지수 등식으로 변환(무리수 밑)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 √3 이어도 정의 그대로. (√3)^4=9 확인이 전부이며 괄호를 빠뜨려 √3^4 로 쓰지 않는 표기 주의(T-표기 1)만 남는다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_{√3} 9=4 → 밑 √3 · 로그값 4 · 진수 9 → (√3)^4=9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(\sqrt{3})^4=9$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 √2·진수 8·로그값 6, 밑 ∛5·진수 25·로그값 6 등. 제약: (밑)^(로그값)=진수 가 실제로 성립하는 근호 밑."
    creative: "(1) 밑 √3 을 3^{1/2} 로 고쳐 log_{3^{1/2}} 9=2·log_3 9 와 대비(밑변환 예고 ★2) (2) 진수를 무리수로(log_3 √3=1/2 ★1) (3) 괄호 없는 √3^4 표기 오류를 찾게 하는 보기(★1)."
```

```yaml
- id: RPM-ALG-0116
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 log_{1/2} (1/64)=6 을 a^x=N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 로그 등식을 지수 등식으로 변환(분수 밑·분수 진수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분수 밑·분수 진수. (1/2)^6=1/64 확인이 전부. 밑을 2 로 바꾸면 지수 부호가 바뀌므로 주어진 밑을 유지하는 것만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_{1/2} (1/64)=6 → 밑 1/2 · 로그값 6 · 진수 1/64 → (1/2)^6=1/64"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\left(\dfrac{1}{2}\right)^6=\dfrac{1}{64}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/3·진수 1/81·로그값 4, 밑 2/3·진수 8/27·로그값 3 등. 제약: 진수 양수·등식 성립·분수 거듭제곱이 암산 범위."
    creative: "(1) 같은 진수 1/64 를 밑 2 로 표현해 로그값 -6 과 대비(★1) (2) 밑 1/2·진수 64 로 두어 로그값이 음수(-6)가 되게(★1) (3) 밑이 1 보다 작을 때 로그값 부호 규칙을 묻는 참·거짓(★2)."
```

```yaml
- id: RPM-ALG-0117
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등식 log_5 1=0 을 a^x=N 의 꼴로 나타내기(공통 발문).
  category: "로그의 정의 → 로그 등식을 지수 등식으로 변환(로그값 0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의(지수 등식 ↔ 로그 등식 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_a 1=0 ⇔ a^0=1. 0113 의 역방향으로 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_5 1=0 → 밑 5 · 로그값 0 · 진수 1 → 5^0=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5^0=1$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 아무 양수(2·10·√7)로. 제약: 밑 ≠ 1, 진수 1·로그값 0 고정."
    creative: "(1) log_5 5=1 과 짝지어 두 기본값 확인(★1) (2) 진수 1 인 로그가 밑에 관계없이 0 임을 여러 밑으로 확인(★1) (3) log_5 1-log_5 5 처럼 성질 계산과 결합(★1)."
```

**공통 발문 (0118~0121)**: 다음 등식을 만족시키는 x 의 값을 구하시오.

```yaml
- id: RPM-ALG-0118
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_2 x=3 을 만족시키는 x 의 값(공통 발문).
  category: "로그의 정의 → 진수 미지수를 지수 등식으로 구하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 미지수(진수·밑) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_2 x=3 ⇔ x=2^3. 정의를 지수 등식으로 옮겨 진수를 계산하는 한 단계. 진수 조건은 자동 만족. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_2 x=3 → x=2^3 → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·5·10, 로그값 2·4. 제약: (밑)^(로그값) 이 암산 범위의 정수, 진수 양수 자동 만족."
    creative: "(1) 로그값을 음수·분수로(log_2 x=-2 → 1/4, log_4 x=1/2 → 2 · ★1) (2) 밑을 분수로(0119 형 ★1) (3) 진수에 일차식(log_2 (x+1)=3 → x=7)을 넣어 진수 조건 확인 단계 추가(★1~2)."
```

```yaml
- id: RPM-ALG-0119
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_{1/3} x=-2 를 만족시키는 x 의 값(공통 발문).
  category: "로그의 정의 → 진수 미지수(분수 밑·음수 로그값)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 미지수(진수·밑) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=(1/3)^{-2}=3^2=9. 분수 밑에 음수 지수를 처리하는 지수 확장 한 단계가 더 있고 부호 실수(T-부호 1)가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_{1/3} x=-2 → x=(1/3)^{-2} → 3^2=9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/2·1/5, 로그값 -1·-3. 제약: (밑)^(로그값) 이 정수나 간단한 분수."
    creative: "(1) 밑 1/3 을 3^{-1} 로 보고 x=3^2 로 가는 지수법칙 결합 풀이 요구(★1) (2) 로그값 -2 는 두고 밑을 3 으로 바꿔 x=1/9 와 대비(★1) (3) log_{1/3} x=-2, log_3 y=2 를 함께 주고 x, y 비교(★1~2)."
```

```yaml
- id: RPM-ALG-0120
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_x 16=4 를 만족시키는 x 의 값(공통 발문).
  category: "로그의 정의 → 밑 미지수를 거듭제곱근으로 구하기(밑 조건)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 미지수(진수·밑) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^4=16 의 실근은 ±2 이나 밑 조건 x>0, x≠1 로 2 만 남는다. 정의 적용 뒤 밑 조건으로 음수 근을 버리는 것이 함정 하나(T-범위 1)이며 표준 절차라 통찰은 아니다. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_x 16=4 → x^4=16 → x=±2 → 밑 조건 x>0 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 81·로그값 4(x=3), 진수 27·로그값 3(x=3), 진수 32·로그값 5(x=2). 제약: 로그값이 짝수면 음수 근이 생겨 밑 조건으로 제외하는 단계가 남고, 홀수면 근이 하나(0121 형)."
    creative: "(1) 로그값을 홀수로 바꿔 음수 근 제외 단계를 없애기(★1) (2) 로그값을 분수(log_x 8=3/2 → x^{3/2}=8 → x=4)로 두어 유리수 지수 결합(★1~2) (3) 밑에 일차식(log_{x-1} 16=4 → x=3, x=-1 은 밑 조건 위배)을 넣어 밑 조건 검증을 필수로(★2)."
```

```yaml
- id: RPM-ALG-0121
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_x 2=5 를 만족시키는 x 의 값(공통 발문).
  category: "로그의 정의 → 밑 미지수를 홀수 거듭제곱근으로 구하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 미지수(진수·밑) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^5=2 → x=⁵√2 (양의 실근 하나). 밑 조건 x>0 은 자동 만족하고 답을 근호로 표기하는 것만 주의(T-표기 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_x 2=5 → x^5=2 → x=2^{1/5}=⁵√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt[5]{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 3·7, 로그값 3·4. 제약: 진수가 완전거듭제곱이 아니면 답이 근호 꼴이고, 로그값이 짝수면 ±근 중 양수를 골라야 함(0120 형)."
    creative: "(1) 답을 2^{1/5} 지수 꼴로 쓰게 하여 유리수 지수와 연결(★1) (2) log_x 2=5 와 log_2 x=1/5 가 같은 x 를 준다는 밑·진수 교환 관찰(밑변환 예고 ★2) (3) 진수를 1/2 로 두어 밑이 1 보다 작아지는 경우(★1)."
```

**공통 발문 (0122~0123)**: 다음이 정의되도록 하는 실수 x 의 값의 범위를 구하시오.

```yaml
- id: RPM-ALG-0122
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_3 (x+1) 이 정의되도록 하는 실수 x 의 범위(공통 발문).
  category: "로그의 정의 → 진수 조건(진수 > 0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 정의되기 위한 조건(밑·진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수 x+1>0 한 부등식. 밑 3 은 상수라 밑 조건은 이미 만족. 「진수 > 0」을 「진수 ≥ 0」으로 쓰는 경계 실수(T-경계 1) 외 함정 없음. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "진수 조건 x+1>0 → x>-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x>-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 x-2·2x+3·5-x 로. 제약: 일차 부등식 한 개, 밑은 1 이 아닌 양의 상수(부등호 방향이 바뀌는 5-x 형은 T-부호 추가)."
    creative: "(1) 진수를 이차식(x^2-4)으로 두어 이차부등식 결합(★2) (2) 밑에도 x 를 넣어 두 조건의 교집합(0123 형 ★2) (3) 진수를 |x-1| 처럼 절댓값으로 두어 x≠1 만 남기기(★2)."
```

```yaml
- id: RPM-ALG-0123
  page: 19
  vendor_label: "교과서 02-1 로그의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_{x-5} 4 가 정의되도록 하는 실수 x 의 범위(공통 발문).
  category: "로그의 정의 → 밑 조건(밑 > 0, 밑 ≠ 1) 두 개의 교집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 정의되기 위한 조건(밑·진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 x-5 에 대해 x-5>0 과 x-5≠1 두 조건. 진수 4 는 상수라 조건 없음. x≠6 을 빠뜨리는 것(T-경계)과 x>5 만 쓰는 것(T-범위)이 함정 두 종류라 Mₜ 2. 두 조건을 「5<x<6 또는 x>6」으로 나눠 쓰는 것까지가 표준 절차이고 통찰은 없다. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "밑 조건 x-5>0, x-5≠1 → x>5, x≠6 → 5<x<6 또는 x>6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5<x<6$ 또는 $x>6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 x-2·x+3·2x-1 로. 제약: 답이 「a<x<a+1 또는 x>a+1」 꼴이 되도록 밑은 일차식, 제외점(밑=1)을 답에 반드시 표기."
    creative: "(1) 밑과 진수 양쪽에 x 를 넣어 세 조건의 교집합(log_{x-5} (10-x) → 5<x<6 또는 6<x<10 · ★2) (2) 밑을 이차식(x^2-5x+7)으로 두어 밑≠1 이 이차방정식이 되게(★2) (3) 「정의되도록 하는 정수 x 의 개수」로 바꾸어 진수 조건과 결합(★2~3)."
```

### 교과서 02-2 로그의 성질

**공통 발문 (0124~0127)**: 다음 값을 구하시오.

```yaml
- id: RPM-ALG-0124
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_3 3-log_5 1 의 값(공통 발문).
  category: "로그의 기본 성질(log_a a=1, log_a 1=0) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질을 이용한 계산(기본 성질·합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_3 3=1, log_5 1=0 두 기본값을 대입해 1-0. 밑이 달라 합치는 성질은 쓸 수 없고 각 항 값만 안다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_3 3=1, log_5 1=0 → 1-0 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수를 다른 조합(log_7 7+log_2 1, log_10 10-log_3 1)으로. 제약: 각 항이 기본 성질로 바로 값이 나와야 함."
    creative: "(1) log_a a^k=k 항을 섞기(log_3 9-log_5 1 ★1) (2) 밑이 다른 두 로그의 합이 하나로 합쳐지지 않음을 묻는 참·거짓(★1~2) (3) a^{log_a b} 항(0135 형)을 추가해 세 기본 성질을 한 식에(★1)."
```

```yaml
- id: RPM-ALG-0125
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    3log_2 4+2log_2 √2 의 값(공통 발문).
  category: "로그의 실수배 성질 → 각 항 값 계산 후 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질을 이용한 계산(기본 성질·합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_2 4=2, log_2 √2=1/2 를 각각 구해 3·2+2·(1/2)=7. 실수배를 진수 지수로 넣어 log_2 (4^3·2)=log_2 128=7 로 가도 같다. 성질 한 번·계산 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_2 4=2, log_2 √2=1/2 → 3·2+2·(1/2) → 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 에 log_3 9·log_3 √3, 계수 2·4 등. 제약: 진수가 밑의 유리수 거듭제곱이라 각 항 값이 유리수이고 합이 정수."
    creative: "(1) 실수배를 진수 지수로 넣어 한 로그로 합치는 풀이(log_2 128)를 요구(★1) (2) 계수에 분수(1/2·log_2 16)를 두기(★1) (3) 밑이 다른 항을 섞어 밑변환이 필요하게(★2)."
```

```yaml
- id: RPM-ALG-0126
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_3 24+3log_3 (3/2) 의 값(공통 발문).
  category: "로그의 합·실수배 → 진수 합치기 → 밑의 거듭제곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질을 이용한 계산(기본 성질·합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3log_3 (3/2)=log_3 (27/8), 24·27/8=81=3^4 → 4. 실수배를 지수로 넣고 진수를 곱해 밑의 거듭제곱을 만드는 세 단계. 각 항을 log_3 2 로 풀어 상쇄시켜도 된다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3log_3 (3/2)=log_3 (27/8) → log_3 (24·27/8)=log_3 81 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 쌍을 곱이 밑의 거듭제곱이 되게(log_2 12+log_2 (4/3)=4, log_5 10+log_5 (5/2)=2). 제약: 실수배 계수를 진수 지수로 넣었을 때 곱이 밑의 정수 거듭제곱."
    creative: "(1) 뺄셈으로 바꿔 진수 나눗셈(0127 형 ★1) (2) 각 항을 log_3 2 로 풀어 상쇄시키는 풀이(log_3 24=3log_3 2+1, 3log_3 (3/2)=3-3log_3 2)를 요구(★1) (3) 세 항 이상·밑이 다른 항을 결합(★2)."
```

```yaml
- id: RPM-ALG-0127
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_2 18-2log_2 6 의 값(공통 발문).
  category: "로그의 차·실수배 → 진수 나누기 → 음수 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질을 이용한 계산(기본 성질·합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2log_2 6=log_2 36, 18/36=1/2 → log_2 (1/2)=-1. 진수 나눗셈 뒤 음수 값이 나오는 부호 처리(T-부호 1)가 유일한 주의점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2log_2 6=log_2 36 → log_2 (18/36)=log_2 (1/2) → -1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 쌍을 몫이 밑의 음의 거듭제곱이 되게(log_3 2-log_3 18=-2, log_5 4-2log_5 10=-2). 제약: 실수배를 지수로 넣은 뒤 몫이 밑의 정수 거듭제곱."
    creative: "(1) 순서를 바꿔 답이 양수가 되게(★1) (2) 18=2·3^2, 6=2·3 으로 분해해 log_2 3 항이 상쇄됨을 보이는 풀이(★1) (3) 미지수를 넣어 log_2 x-2log_2 6=-1 → x 구하기(★1~2)."
```

**공통 발문 (0128~0131)**: log_10 2=a, log_10 3=b 라 할 때, 다음을 a, b 로 나타내시오.

```yaml
- id: RPM-ALG-0128
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 2=a, log 3=b 일 때 log 12 를 a, b 로 나타내기(공통 발문).
  category: "진수 소인수분해 → log 2, log 3 의 일차결합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    12=2^2·3 → log 12=2log 2+log 3=2a+b. 소인수분해 한 번·성질 한 번이고 매개변수 a, b 표현이라 Mₐ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "12=2^2·3 → log 12=2log 2+log 3 → 2a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2a+b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 18·24·36·72 등 2·3 만의 곱으로. 제약: 소인수가 2·3 뿐이어야 함(5 가 들어가면 log 5=1-a 처리가 필요해 별도 변형)."
    creative: "(1) 진수를 5·6·15 처럼 두어 log 5=1-log 2 가 필요하게(★2 · EQV d1 후보) (2) 진수를 소수(1.2=12/10)나 분수로 두어 log 10=1 결합(★1~2) (3) 역으로 2a+b 를 주고 원래 진수를 찾기(★2)."
```

```yaml
- id: RPM-ALG-0129
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 2=a, log 3=b 일 때 log (4/27) 을 a, b 로 나타내기(공통 발문).
  category: "진수 분수 → 로그의 차 → 일차결합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log 4-log 27=2log 2-3log 3=2a-3b. 분수 진수를 차로 쪼개고 소인수 지수를 계수로 옮기는 두 단계. 뺄셈 부호(T-부호 1)만 주의. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "log (4/27)=log 4-log 27 → 2log 2-3log 3 → 2a-3b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2a-3b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 8/9·27/16·3/8 로. 제약: 분자·분모가 2·3 의 거듭제곱."
    creative: "(1) 근호를 넣어 분수 계수(log √12=a+b/2 ★1) (2) 4/27 대신 0.4/2.7 처럼 소수를 두어 log 10 결합(★2) (3) a, b 의 근삿값(0.3010·0.4771)을 주고 수치 계산(★1)."
```

```yaml
- id: RPM-ALG-0130
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 2=a, log 3=b 일 때 log_3 16 을 a, b 로 나타내기(공통 발문).
  category: "밑변환 공식 → 분자·분모를 a, b 로"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_3 16=log 16/log 3=4log 2/log 3=4a/b. 밑이 10 이 아니므로 밑변환 공식(02-2 교과서 내용)을 먼저 쓰고 분자를 소인수분해. 표준 절차 두 단계·매개변수 표현 Mₐ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "log_3 16=log 16/log 3 → 4log 2/log 3 → 4a/b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4a}{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_2 27=3b/a, log_3 8=3a/b, log_9 4=a/b. 제약: 밑·진수가 각각 2 또는 3 의 거듭제곱(밑이 합성수면 0131 형)."
    creative: "(1) 밑을 6·12 처럼 합성수로(0131 형 ★1) (2) 조건을 log_2 3=c 로 주고 log_3 16 을 c 로(역수 관계 ★1~2) (3) log_3 16×log_2 9 처럼 곱으로 결합해 밑변환을 두 번(★2)."
```

```yaml
- id: RPM-ALG-0131
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 2=a, log 3=b 일 때 log_6 9 를 a, b 로 나타내기(공통 발문).
  category: "밑변환 → 분모 log 6 을 log 2+log 3 으로 분해"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_6 9=log 9/log 6, 분자 2log 3=2b, 분모 log 2+log 3=a+b. 밑변환 뒤 분모를 합으로 분해하는 세 단계로 이 그룹에서 가장 길지만 모두 표준 절차. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "log_6 9=log 9/log 6 → 2b/(log 2+log 3) → 2b/(a+b)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2b}{a+b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_6 4=2a/(a+b), log_12 9=2b/(2a+b), log_18 4=2a/(a+2b). 제약: 밑·진수가 2·3 의 곱."
    creative: "(1) 밑에 5 를 넣어 log 5=1-a 가 필요하게(log_15 9=2b/(1-a+b) ★2) (2) 진수·밑을 바꿔 역수 관계 확인(★1) (3) a, b 근삿값을 주고 수치 계산(★1)."
```

**공통 발문 (0132~0135)**: 다음 값을 구하시오.

```yaml
- id: RPM-ALG-0132
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_3 2×log_2 3 의 값(공통 발문).
  category: "밑변환 → 역수 관계 log_a b·log_b a=1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식과 그 활용(역수 관계·a^{log_a b})"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_2 3=1/log_3 2 (밑변환) → 곱 1. 밑을 10 으로 통일해 (log 2/log 3)·(log 3/log 2) 로 약분해도 같다. 공식 하나로 끝. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_2 3=1/log_3 2 → log_3 2·(1/log_3 2) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_5 7×log_7 5 등 아무 쌍. 제약: 밑·진수가 서로 바뀐 쌍이어야 곱이 1."
    creative: "(1) log_2 3·log_3 5·log_5 8 처럼 사슬 곱으로 밑변환 약분 사슬(★2) (2) log_4 9×log_3 2 처럼 지수가 붙어 값이 1 이 아니게(★2) (3) 조건 log_3 2=a 를 주고 log_2 3 을 a 로(★1)."
```

```yaml
- id: RPM-ALG-0133
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_27 81 의 값(공통 발문).
  category: "밑·진수를 같은 밑의 거듭제곱으로 → log_{a^m} a^n=n/m"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식과 그 활용(역수 관계·a^{log_a b})"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    27=3^3, 81=3^4 → 4/3. 밑변환으로 log 81/log 27=4log 3/3log 3 을 거쳐도 같다. 소인수 표현 한 단계·공식 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "27=3^3, 81=3^4 → log_{3^3} 3^4 → 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_8 32=5/3, log_4 32=5/2, log_9 27=3/2, log_25 125=3/2. 제약: 밑·진수가 같은 소수의 거듭제곱."
    creative: "(1) 진수를 밑보다 작게(log_81 27=3/4 ★1) (2) 근호 진수(log_9 √3=1/4 ★1) (3) 밑·진수 지수를 문자로(log_{a^m} a^n=n/m 증명 · ★2 · Mₐ 상승)."
```

```yaml
- id: RPM-ALG-0134
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log_4 (1/8) 의 값(공통 발문).
  category: "밑·진수를 2 의 거듭제곱으로 → 음수 유리수 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식과 그 활용(역수 관계·a^{log_a b})"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4=2^2, 1/8=2^{-3} → -3/2. 0133 과 같은 골조에 음수 지수 처리(T-부호 1)가 더해진 것. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4=2^2, 1/8=2^{-3} → log_{2^2} 2^{-3} → -3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_9 (1/27)=-3/2, log_8 (1/4)=-2/3, log_{1/4} 8=-3/2. 제약: 밑·진수가 같은 소수의 거듭제곱."
    creative: "(1) 밑을 1/4 로 두어 부호가 다시 바뀌게(log_{1/4} (1/8)=3/2 ★1) (2) 진수를 소수 0.125 로 표기(★1) (3) 0133·0134 를 합해 log_27 81+log_4 (1/8) 같은 계산(★1)."
```

```yaml
- id: RPM-ALG-0135
  page: 19
  vendor_label: "교과서 02-2 로그의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    3^{log_3 10} 의 값(공통 발문).
  category: "a^{log_a b}=b 성질"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식과 그 활용(역수 관계·a^{log_a b})"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a^{log_a b}=b 를 적용하면 바로 10. 정의(log_3 10 은 3 을 밑으로 10 을 만드는 지수)로 직접 설명해도 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_3 10 = 3 을 밑으로 10 을 만드는 지수 → 3^{log_3 10}=10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "5^{log_5 7}, 2^{log_2 9} 등. 제약: 지수의 로그 밑과 거듭제곱의 밑이 같아야 성질이 그대로 적용."
    creative: "(1) 지수에 계수(3^{2log_3 5}=25 ★1) (2) 밑을 바꿔 9^{log_3 2}=4 처럼 9=3^2 로 보는 단계 추가(★2) (3) a^{log_b c}=c^{log_b a} 교환 성질(2^{log_3 5}=5^{log_3 2} · ★2~3 · RT 성격)."
```

### 교과서 02-3 상용로그

**공통 발문 (0136~0139)**: 다음 값을 구하시오.

```yaml
- id: RPM-ALG-0136
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 1000 의 값(공통 발문 · 밑 10 생략).
  category: "상용로그의 정의 → 10 의 거듭제곱 지수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(10 의 거듭제곱 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1000=10^3 → 3. 밑 10 이 생략된 표기임을 아는 것이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1000=10^3 → log 10^3 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 10·100·10000·10^6 으로. 제약: 10 의 정수 거듭제곱."
    creative: "(1) 유리수 지수 결합(log 1000√10=7/2 ★1) (2) log 1000-log 10 처럼 성질 결합(★1) (3) 2^3·5^3 처럼 소인수 곱으로 주어 10 의 거듭제곱임을 알아채게(★1~2)."
```

```yaml
- id: RPM-ALG-0137
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log (1/100) 의 값(공통 발문 · 밑 10 생략).
  category: "상용로그의 정의 → 분수 진수 → 음의 지수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(10 의 거듭제곱 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/100=10^{-2} → -2. 분수를 음의 지수로 고치는 부호 처리(T-부호 1)만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/100=10^{-2} → log 10^{-2} → -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 1/10·1/1000·1/10^5 로. 제약: 10 의 음의 정수 거듭제곱."
    creative: "(1) 소수 0.01 표기로 바꾸기(0138 형 ★1) (2) -log 100 과 같음을 확인하는 성질 결합(★1) (3) log (1/100)+log 1000 처럼 합해 상쇄(★1)."
```

```yaml
- id: RPM-ALG-0138
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 0.0001 의 값(공통 발문 · 밑 10 생략).
  category: "상용로그의 정의 → 소수 진수 → 음의 지수(자릿수 세기)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(10 의 거듭제곱 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.0001=10^{-4} → -4. 소수점 아래 자릿수를 세어 지수를 정하는 것(T-부호 1)이 유일한 주의점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.0001=10^{-4} → log 10^{-4} → -4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 0.001·0.00001 로. 제약: 1 앞 소수 자릿수 = |지수| 인 10 의 거듭제곱."
    creative: "(1) 0.0001 을 분수로 바꿔 쓰게(★1) (2) 0.001×100 처럼 곱으로 주어 성질 결합(★1) (3) 자릿수 개념(log 0.0001 의 정수 부분·소수 부분)으로 확장(★1~2)."
```

```yaml
- id: RPM-ALG-0139
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log ⁵√100 의 값(공통 발문 · 밑 10 생략).
  category: "상용로그의 정의 → 근호를 유리수 지수로 → 지수 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(10 의 거듭제곱 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⁵√100=(10^2)^{1/5}=10^{2/5} → 2/5. 근호를 유리수 지수로 고치는 한 단계. (1/5)·log 100 실수배 풀이도 같다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "⁵√100=(10^2)^{1/5}=10^{2/5} → 2/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∛100=2/3, √1000=3/2, ⁴√10=1/4. 제약: 진수가 10 의 유리수 거듭제곱."
    creative: "(1) (1/5)·log 100 실수배 풀이를 요구(★1) (2) 근호를 겹쳐(√⁵√100 → 1/5 ★1) (3) 밑을 바꿔 log_2 ⁵√32 처럼 0133 형과 결합(★1)."
```

**공통 발문 (0140~0141)**: 아래 상용로그표를 이용하여 다음 값을 구하시오. (표: 5.0~5.2 행 · 0~4 열 · 크롭 `fig-g0140-0141.png`)

```yaml
- id: RPM-ALG-0140
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주어진 상용로그표(5.0~5.2 행 · 0~4 열)에서 log 5.13 의 값 읽기(공통 발문).
  category: "상용로그표 → 행(5.1)·열(3) 교차 칸 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그표를 이용한 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에서 5.1 행과 3 열이 만나는 칸 .7101 을 읽는다. 계산이 없고 행(앞 두 자리)·열(셋째 자리)을 나누는 규칙만 알면 된다. 교과서 구역·통찰 없음·M_total 4 → ★1. 표 값(5.1 행 3 열 .7101) 확인 완료.
  tier: star_1
  mechanism_primary: "5.13 → 행 5.1 · 열 3 → 표 값 .7101 → 0.7101"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.7101$'
  answer_source: "해설"
  figure: "crop:fig-g0140-0141.png"
  latex: latex-bank/rpm-alg/items/0140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표 안의 다른 칸(5.01 → 0.6998, 5.24 → 0.7193). 제약: 주어진 표(5.0~5.2 행 · 0~4 열)에 있는 값만 쓸 수 있고, 표를 바꾸면 답도 표에서 다시 읽어야 함(그림 라벨 고정)."
    creative: "(1) 역으로 로그값 0.7084 를 주고 진수 5.11 찾기(★1) (2) 51.3 처럼 표 밖 수를 주어 정수 부분 결합(0142 형 ★1~2) (3) 표 두 칸의 차(log 5.13-log 5.12)로 log (5.13/5.12) 근삿값 묻기(★2)."
```

```yaml
- id: RPM-ALG-0141
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주어진 상용로그표(5.0~5.2 행 · 0~4 열)에서 log 5.02 의 값 읽기(공통 발문).
  category: "상용로그표 → 행(5.0)·열(2) 교차 칸 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그표를 이용한 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5.0 행과 2 열이 만나는 칸 .7007. 0140 과 같은 골조이며 행이 5.0 이라 「5.02 의 앞 두 자리는 5.0」을 정확히 나누는 것만 주의(T-표기 1). 교과서 구역·통찰 없음·M_total 4 → ★1. 표 값(5.0 행 2 열 .7007) 확인 완료.
  tier: star_1
  mechanism_primary: "5.02 → 행 5.0 · 열 2 → 표 값 .7007 → 0.7007"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.7007$'
  answer_source: "해설"
  figure: "crop:fig-g0140-0141.png"
  latex: latex-bank/rpm-alg/items/0141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "5.03 → 0.7016, 5.20 → 0.7160, 5.14 → 0.7110. 제약: 주어진 표 범위 안의 칸만(그림 라벨 고정)."
    creative: "(1) log 502·log 0.0502 로 정수 부분 결합(★1~2) (2) 10^{0.7007} 이 5.02 임을 묻는 역방향(★1) (3) log 2.51=log 5.02-log 2 처럼 표 밖 수를 log 2 와 결합(★2)."
```

**공통 발문 (0142~0145)**: log 1.54=0.1875 임을 이용하여 다음 값을 구하시오.

```yaml
- id: RPM-ALG-0142
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 1.54=0.1875 를 이용해 log 15.4 의 값 구하기(공통 발문).
  category: "15.4=1.54×10 → 로그의 합 → 정수 부분 + 소수 부분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분(주어진 상용로그 값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log (1.54×10)=log 1.54+log 10=0.1875+1=1.1875. 소수점 한 자리 이동 = +1. 성질 한 번·덧셈 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "15.4=1.54×10 → log 1.54+log 10 → 0.1875+1 → 1.1875"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1.1875$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 값을 log 2.31=0.3636 등 다른 값으로, 배율을 10^2·10^4 로. 제약: 진수의 유효숫자가 주어진 수(1.54)와 같아야 하고 소수 부분 0.1875 는 그대로 남아야 함."
    creative: "(1) 154·15400 등 정수 부분만 바꾸기(★1) (2) 음의 지수(0.154 · 0144 형 ★1) (3) 1.54^2·√1.54 처럼 지수를 걸어 실수배 성질 결합(log 154^2=2×2.1875 ★1~2)."
```

```yaml
- id: RPM-ALG-0143
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 1.54=0.1875 를 이용해 log 1540 의 값 구하기(공통 발문).
  category: "1540=1.54×10^3 → 로그의 합 → 정수 부분 3 + 소수 부분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분(주어진 상용로그 값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log (1.54×10^3)=0.1875+3=3.1875. 0142 와 같은 골조에서 소수점 이동 자릿수(3)만 세면 된다(T-단위 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1540=1.54×10^3 → log 1.54+3 → 3.1875"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3.1875$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "154000(→5.1875)·154(→2.1875). 제약: 유효숫자 1.54 고정, 정수 부분 = 소수점 이동 자릿수."
    creative: "(1) log 1540 의 정수 부분·소수 부분을 따로 묻기(★1) (2) 1540 이 몇 자리 정수인지와 정수 부분 3 의 관계 묻기(★1~2) (3) log 1540-log 15.4 처럼 두 값의 차가 정수임을 확인(★1)."
```

```yaml
- id: RPM-ALG-0144
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 1.54=0.1875 를 이용해 log 0.154 의 값 구하기(공통 발문).
  category: "0.154=1.54×10^{-1} → 음의 정수 부분 + 양의 소수 부분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분(주어진 상용로그 값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log (1.54×10^{-1})=-1+0.1875=-0.8125. 음의 정수 부분과 양의 소수 부분을 더하는 부호 처리(T-부호 1)가 함정이며 -1.1875 가 전형적 오답. 골조 자체는 0142 와 같은 표준 절차. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.154=1.54×10^{-1} → log 1.54-1 → 0.1875-1 → -0.8125"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-0.8125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0.0154(0145)·0.00154(→-2.8125). 제약: 소수 부분 0.1875 고정, 정수 부분만 -1·-2·-3 으로; 최종 답은 부호를 합친 한 수."
    creative: "(1) 답을 「-1+0.1875」 꼴(정수 부분·소수 부분 분리)로 쓰게 하기(★1) (2) log 0.154 의 정수 부분과 소수 부분을 각각 묻기(★1~2) (3) 0.154=154/1000 으로 보고 log 154-3 풀이 요구(★1)."
```

```yaml
- id: RPM-ALG-0145
  page: 19
  vendor_label: "교과서 02-3 상용로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    log 1.54=0.1875 를 이용해 log 0.0154 의 값 구하기(공통 발문).
  category: "0.0154=1.54×10^{-2} → 음의 정수 부분 + 양의 소수 부분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분(주어진 상용로그 값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log (1.54×10^{-2})=-2+0.1875=-1.8125. 0144 와 같은 골조에서 소수점 이동 두 자리. 부호 처리(T-부호 1)가 함정이며 -2.1875 가 전형적 오답. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0.0154=1.54×10^{-2} → log 1.54-2 → 0.1875-2 → -1.8125"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1.8125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0.00154(→-2.8125)·0.000154(→-3.8125). 제약: 소수 부분 0.1875 고정, 정수 부분 = -(소수점 아래 0 의 개수+1)."
    creative: "(1) 0142~0145 네 값을 한 표로 주고 규칙(정수 부분만 변함)을 말하게(★1 · PD 라기엔 명시적) (2) log 0.0154 와 log 15.4 의 합·차 묻기(★1) (3) 10^{-1.8125} 의 값을 1.54 로 되묻는 역방향(★1~2)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 36 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 36 · premium 0
- type_hint 상위: 「로그의 정의(지수 등식 ↔ 로그 등식 변환)」 8 · 「로그의 정의를 이용한 미지수(진수·밑) 구하기」 4 · 「로그의 성질을 이용한 계산(기본 성질·합·차·실수배)」 4 · 「로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)」 4 · 「로그의 밑변환 공식과 그 활용(역수 관계·a^{log_a b})」 4 · (이하 「상용로그의 값(10 의 거듭제곱 꼴)」 4 · 「상용로그의 정수 부분과 소수 부분」 4 · 「로그가 정의되기 위한 조건」 2 · 「상용로그표를 이용한 값 구하기」 2)
- M_total: 4 ×31 · 5 ×5 (0123 Mₜ 2 · 0128~0131 Mₐ 2)
- target_cohort: 하위권 31 · 중하위권 5 (0123 · 0128~0131)
- 그림: 2문(0140 · 0141 `crop:fig-g0140-0141.png` · 상용로그표 5.0~5.2 행 · 0~4 열)
- 답 대조: 36문 모두 재계산 결과가 전사 answer 와 일치(표 읽기 2문은 크롭 이미지에서 확인). 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위는 전부 교과서 구역 드릴이라 벤더 출발점 ★1 과 M·I 판정(통찰 0 · M_total 4~5)이 모두 일치. 분류 이슈 0건 | — |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 9종 — 정의 변환 8 · 미지수 구하기 4 · 성질 계산 4 · 문자 a, b 표현 4 · 밑변환 활용 4 · 상용로그 값 4 · 정수 부분·소수 부분 4 · 정의 조건 2 · 상용로그표 2.
- 따로 세워야 할 유형: 「로그가 정의되기 위한 조건(밑·진수 조건)」 — 이후 유형 구역에서 이차부등식·정수 개수와 결합해 ★2~3 으로 자라는 독립 유형이며 Mₜ(T-범위·T-경계)가 특징. 「상용로그의 정수 부분과 소수 부분」 — 음의 정수 부분 처리(T-부호)·자릿수 문제로 확장되는 독립 유형. 「로그의 밑변환 공식과 그 활용」 — 역수 관계·사슬 곱·a^{log_a b}·교환 성질까지 한 유형으로 묶되 base ★ 는 유형 구역 문항으로 정해야 함.
- 통합해도 될 유형: 「지수 등식 → 로그 등식」과 「로그 등식 → 지수 등식」은 하나의 「로그의 정의」 유형(0110~0117)으로 통합. 「로그의 값을 문자 a, b 로」(0128~0131)는 밑변환이 섞여 있어 유형 구역의 「log 2=a, log 3=b 로 나타내기(밑변환 포함)」 하나로 통합 가능. 「상용로그의 값(10 의 거듭제곱)」과 「상용로그표 읽기」는 「상용로그의 값 구하기」 기본 유형으로 통합.
- 이 범위 36문은 모두 ★1 절차형이라 변형 자산으로는 숫자 변형(밑·진수·지수 교체)이 주 용도이고, 창의 변형에서 ★ 가 오르는 지점은 (a) 밑·진수에 미지수 일차식을 넣어 정의 조건을 결합할 때(0120~0123 계열 ★2), (b) log 5=1-log 2 같은 동치 변환이 필요할 때(0128·0131 계열 ★2 · EQV 후보), (c) a^{log_b c}=c^{log_b a} 교환 성질(0135 계열 ★2~3 · RT 후보)이다.
