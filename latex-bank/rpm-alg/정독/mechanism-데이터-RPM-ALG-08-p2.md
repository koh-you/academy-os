---
name: mechanism-데이터-RPM-ALG-08-p2
description: RPM 대수 08 등차수열과 등비수열(2/4 · 유형 04~유형 13) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 08 등차수열과 등비수열
  unit_code: ALG-08
  part: "2/4"
  extract_range: "113~118쪽 · 0836~0872"
  total_problems: 37
  unit_total: 145
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 08 등차수열과 등비수열 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 08 등차수열과 등비수열 단원의 두 번째 조각으로, 113~118쪽의 유형 04(두 수 사이에 수를 넣어서 만든 등차수열)부터 유형 13(등비수열의 일반항)까지 열 유형 구역 37문항(0836~0872)을 전수 정독한 것이다. 이 범위는 모두 「유형 NN」 구역이라 벤더 난이도 신호는 구역 자체(유형별 기본 문제)와 각 문항의 난이도 표시(중하·중·상중)·태그(대표문제 10 · 서술형 2)로 읽었다. 대표문제는 난이도 표시가 없는 그 유형의 첫 문항이고, 상중은 0851·0854·0861 세 문항(0851·0861 은 서술형), 그림이 있는 문항은 없다. 유형 04~12 는 등차수열(삽입·등차중항·등차를 이루는 수·합·합의 최대최소·나머지 수의 합·S_n 과 a_n), 유형 13 부터 등비수열이 시작된다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]` · 절차형이면 빈 배열), 그리고 바꿔도 되는 수와 제약(`variation_notes.numeric`)·통찰 골조를 유지한 채 바꿀 수 있는 설정과 ★ 변동 지점(`variation_notes.creative`)을 채웠다. ★ 는 위 frontmatter 의 조정 규칙대로 벤더 출발점에서 M_total·통찰로 ±1 만 움직였고(통찰 없음·M_total 4 는 −1, 통찰 d1 하나는 출발점 유지), 판정이 애매한 문항은 라벨을 억지로 맞추지 않고 `[분류 이슈]` 로 기록해 파일 끝 표에 모았다. 답은 전사본 answer 를 그대로 옮겼고 37문항 모두 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 04 두 수 사이에 수를 넣어서 만든 등차수열

```yaml
- id: RPM-ALG-0836
  page: 113
  vendor_label: "유형 04 두 수 사이에 수를 넣어서 만든 등차수열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1 과 100 사이에 10개의 수를 넣어 등차수열을 만들 때 삽입된 수 중 a_7 의 값. 단답형.
  category: "삽입 등차수열의 항 수(n+2) → 공차 → 특정 항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 n개를 넣은 등차수열(항 수 n+2·공차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    전체 12항 등차수열이므로 100 = 1 + 11d → d = 9, a_7 은 전체의 제8항이라 1 + 7·9 = 64. 유형 대표문항이지만 항 수 파악·공차·대입 세 단계뿐이고 통찰 없음·M_total 4 → 출발점 ★2 에서 −1 해 ★1. 함정은 삽입된 a_7 이 전체 수열의 제8항이라는 인덱스 어긋남(T-표기) 하나.
  tier: star_1
  mechanism_primary: "삽입 10개 → 전체 12항 → d = (100−1)/11 = 9 → a_7 = 1 + 7d = 64"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0836.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수와 삽입 개수 n, 묻는 항의 번호를 바꿀 수 있음. 제약: (끝 − 처음) 이 n+1 로 나누어떨어져 공차가 정수가 되게 하고, 묻는 항 번호는 1~n 안. 음수 끝값·감소 수열도 가능."
    creative: "(1) 공차 대신 삽입된 특정 항의 값을 주고 삽입 개수 n 을 묻기(★1 유지) (2) 삽입된 수 중 3의 배수인 것의 개수·합(★2 · 나머지 조건 EQV d1) (3) 양끝을 log 값이나 거듭제곱으로 주면 로그·지수 단원과 결합(★2~3 · XU)."
```

```yaml
- id: RPM-ALG-0837
  page: 113
  vendor_label: "유형 04 두 수 사이에 수를 넣어서 만든 등차수열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3 과 23 사이에 세 수 x, y, z 를 넣어 등차수열이 될 때 x, y, z 의 값. 단답형.
  category: "삽입 등차수열의 항 수(5) → 공차 → 삽입된 항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 n개를 넣은 등차수열(항 수 n+2·공차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5항 등차수열이므로 23 = 3 + 4d → d = 5, x·y·z = 8·13·18. 공차 하나 구해 순서대로 더하는 한 단계 문제. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5항 등차 → d = (23−3)/4 = 5 → x, y, z = 8, 13, 18"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=8$, $y=13$, $z=18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0837.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수·삽입 개수(2~4개)를 바꾸되 (끝 − 처음) 이 (삽입 개수 + 1) 의 배수. 분수 공차를 허용하면 ★ 그대로이나 계산만 늘어남."
    creative: "(1) x, y, z 대신 x+z 또는 y 만 묻기(★1 · 등차중항 y = 13 직결) (2) 삽입된 세 수의 곱이나 제곱합을 묻기(★1~2) (3) 양끝을 미지수로 두고 삽입된 두 수의 값을 주어 양끝을 역산(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0838
  page: 113
  vendor_label: "유형 04 두 수 사이에 수를 넣어서 만든 등차수열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    −20 과 100 사이에 n 개의 수를 넣은 등차수열의 공차가 4 일 때 n 의 값. 단답형.
  category: "삽입 등차수열의 끝항 = 첫항 + (n+1)d → n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 n개를 넣은 등차수열(항 수 n+2·공차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    끝항이 제(n+2)항이므로 100 = −20 + (n+1)·4 → n+1 = 30 → n = 29. 한 줄 방정식. 함정은 (n+1) 과 (n+2) 를 혼동하는 인덱스(T-표기) 하나. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "100 = −20 + (n+1)·4 → n+1 = 30 → n = 29"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0838.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수·공차를 바꾸되 (끝 − 처음)/공차 가 2 이상의 정수. 음수 공차(감소 수열)도 가능."
    creative: "(1) 공차 대신 「삽입된 수의 합」을 주고 n 을 묻기(★2 · 유형 08 골조) (2) 공차가 정수라는 조건만 주고 가능한 n 의 개수 묻기(★2 · 약수 조건 EQV d1) (3) 두 수열을 겹쳐 공통 항 개수 묻기(★3 · CON)."
```

```yaml
- id: RPM-ALG-0839
  page: 113
  vendor_label: "유형 04 두 수 사이에 수를 넣어서 만든 등차수열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    2 와 107 사이에 n 개의 수를 넣어 등차수열을 만들 때 공차가 될 수 없는 것. 5지선다.
  category: "공차 = 105/(n+1) → n+1 이 105 의 약수 → 약수 아닌 보기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「n 이 자연수」를 「105/d − 1 이 자연수 ⇔ d 가 105 의 약수(≤ 35)」로 옮겨야 보기를 판정할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삽입 등차수열의 공차 가능값(약수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    107 = 2 + (n+1)d 에서 (n+1)d = 105 = 3·5·7. 공차가 될 수 있으려면 n+1(≥ 2) 이 105 의 약수여야 하므로 d ∈ {1, 3, 5, 7, 15, 21, 35}. 30 은 105 의 약수가 아님. 자연수 조건을 약수 조건으로 옮기는 착안(EQV d1) 하나·M_total 4 → 유형 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(n+1)d = 105 → n+1 은 105 의 약수(≥2) → d 는 105 의 약수(≤35) → 30 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0839.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "105 자리를 약수가 적당히 많은 수(60·72·84·120)로 바꾸고 보기에 약수 아닌 수를 하나 섞음. 제약: n ≥ 1 이므로 d = 전체 차 자체는 불가(n+1 = 1)이며 보기에서 이 경계를 쓸지 결정."
    creative: "(1) 「공차가 될 수 있는 자연수의 개수」로 바꾸면 약수 개수 세기(★2 · 같은 EQV) (2) 공차가 정수라는 조건 아래 삽입 개수 n 의 최댓값·최솟값(★2) (3) 양끝을 두 자리 소수의 곱으로 두고 n 을 고정해 「모든 항이 정수가 되게 하는 양끝」을 묻기(★3 · BW)."
```

### 유형 05 등차중항

```yaml
- id: RPM-ALG-0840
  page: 114
  vendor_label: "유형 05 등차중항"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 수 x−1, x², 3x+7 이 이 순서로 등차수열을 이룰 때 모든 실수 x 의 값의 합. 단답형.
  category: "등차중항 2b = a + c → 이차방정식 → 근의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차중항 조건으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x² = (x−1) + (3x+7) → x² − 2x − 3 = 0 → (x−3)(x+1) = 0, 두 실근의 합 2(근과 계수 관계로도 즉시). 판별식이 양수라 실수 조건은 자동 충족. 대표문항이지만 등차중항 식 하나·이차방정식 하나뿐·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2x² = (x−1) + (3x+7) → x² − 2x − 3 = 0 → 근의 합 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0840.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 식의 계수를 바꾸되 정리한 이차방정식이 서로 다른 두 실근을 갖도록(D > 0) 함. 근이 정수가 아니어도 「합」은 근과 계수 관계로 유리수."
    creative: "(1) 「합」 대신 「곱」이나 「양수인 x」로 바꾸면 인수분해가 필수(★1) (2) 세 수에 |x| 나 x² 을 두 개 넣어 실근 개수가 갈리게(★2 · MI d1) (3) 등차와 등비를 섞어 「x 가 등차·y 가 등비」 연립(★3 · 유형 20 계열)."
```

```yaml
- id: RPM-ALG-0841
  page: 114
  vendor_label: "유형 05 등차중항"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    −9, x, −1 과 −1, y, 5 가 각각 이 순서로 등차수열일 때 x + y 의 값. 5지선다.
  category: "등차중항 두 번 → x, y → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차중항 조건으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x = (−9 + (−1))/2 = −5, y = (−1 + 5)/2 = 2 → x + y = −3. 등차중항 공식 두 번 적용. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x = (−9−1)/2 = −5 · y = (−1+5)/2 = 2 → x + y = −3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0841.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 세 수의 양끝을 바꾸되 합이 짝수(정수 중항)이거나 분수 답을 허용. 두 수열이 한 수(−1)를 공유하는 구조는 유지해도 되고 풀어도 됨."
    creative: "(1) 두 수열이 공유하는 수를 미지수로 두고 x, y 의 관계식만 주기(★2 · CON d1) (2) 「x, y, z 가 이 순서로 등차」처럼 사슬 세 개를 연결(★2) (3) 중항이 아니라 양끝을 미지수로 두고 곱을 묻기(★2)."
```

```yaml
- id: RPM-ALG-0842
  page: 114
  vendor_label: "유형 05 등차중항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차식 ax² + x + 4 를 x+1, x−2, x−3 으로 나눈 나머지가 이 순서로 등차수열일 때 상수 a 의 값. 5지선다.
  category: "나머지정리로 세 나머지 → 등차중항 → a 의 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나머지정리(공통수학1 다항식)로 세 나머지를 a 의 식으로 바꿔야 등차중항(수열)이 적용됨 — 두 단원 도구가 모두 필요"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차중항 + 나머지정리(나머지가 등차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(−1) = a + 3, f(2) = 4a + 6, f(3) = 9a + 7 이고 2(4a+6) = (a+3) + (9a+7) → 2a = 2 → a = 1. 나머지정리(다른 단원)를 빼면 시작이 안 되므로 얕은 XU d1 로 기록. 매개변수 a 로 Mₐ 2·M_total 5, 유형 중 → ★2.
    [분류 이슈] 나머지정리 한 번 차용을 XU 로 셀지(공식 대입 수준이라 절차형으로 볼 수도) — 카탈로그에서 「타 단원 공식 단순 차용」의 XU 인정 기준 결정 필요. ★ 는 어느 쪽이든 2.
  tier: star_2
  mechanism_primary: "f(−1), f(2), f(3) = a+3, 4a+6, 9a+7 → 2(4a+6) = (a+3)+(9a+7) → a = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0842.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 나누는 세 일차식(x−p, x−q, x−r)을 바꿀 수 있음. 제약: a 는 한 항의 계수에만 두어 등차중항 식이 a 의 일차방정식이 되게 하고 답이 보기 안 정수."
    creative: "(1) 나머지가 등비를 이루도록 바꾸면 이차방정식 → a 의 두 값(★2 · 유형 14 골조) (2) 삼차식을 두 이차식으로 나눈 나머지(일차식)의 계수가 등차(★3 · 계산 부담 Mₖ 상승) (3) 나눗셈 대신 「f(1), f(2), f(3) 이 등차인 이차함수」로 바꾸면 이차함수 단원 결합(★2 · XU)."
```

```yaml
- id: RPM-ALG-0843
  page: 114
  vendor_label: "유형 05 등차중항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 두 자연수 a, b 에 대하여 log a, log 3, log b 가 이 순서로 등차수열일 때 a + b 의 값. 단답형.
  category: "로그의 등차중항 → 진수의 곱 ab = 9 → 서로 다른 자연수 쌍"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2 log 3 = log a + log b 를 로그 성질로 ab = 9 로 옮겨야 자연수 조건을 쓸 수 있음(로그 등차 ⇔ 진수 등비)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그가 등차중항 → 진수의 곱 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2 log 3 = log a + log b → log 9 = log ab → ab = 9. 서로 다른 자연수 쌍은 (1, 9), (9, 1) 뿐이고 (3, 3) 은 「서로 다른」 조건으로 빠지므로 a + b = 10. 로그 성질로 조건을 곱으로 옮기는 착안(EQV d1)·(3, 3) 배제(T-범위)·M_total 4 → 유형 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "2 log 3 = log a + log b → ab = 9 → 서로 다른 자연수 → (1, 9) → a + b = 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0843.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 로그의 진수를 다른 자연수(2·4·6·10·12)로 바꾸면 ab 가 그 제곱이 되어 약수 쌍이 늘어남. 제약: 「서로 다른」 조건으로 제곱근 쌍이 빠지며, 답이 유일하려면 쌍이 하나(진수가 소수)이거나 「최댓값·최솟값」으로 묻기."
    creative: "(1) 밑을 2 로 두고 log₂ a, 2, log₂ b 처럼 중항을 수로 주기(★2 · 같은 EQV) (2) 「a + b 의 최솟값」으로 바꾸면 산술·기하평균이나 약수 쌍 비교(★3 · XU) (3) 로그 대신 지수(2^a, 2^b 가 등비중항)로 뒤집기(★2 · 유형 14)."
```

### 유형 06 등차수열을 이루는 수

```yaml
- id: RPM-ALG-0844
  page: 114
  vendor_label: "유형 06 등차수열을 이루는 수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등차수열을 이루는 세 수의 합이 15, 곱이 −55 일 때 세 수의 제곱의 합. 단답형.
  category: "세 수를 a−d, a, a+d 로 설정 → 합으로 a → 곱으로 d² → 제곱합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열을 이루는 세 수·네 수(대칭 설정 a±d)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a−d, a, a+d 로 두면 3a = 15 → a = 5, a(a² − d²) = −55 → d² = 36. 제곱합은 3a² + 2d² = 75 + 72 = 147(세 수 −1, 5, 11 로 직접 계산해도 같음). 대칭 설정은 이 유형의 표준 절차라 통찰로 세지 않음. 대표문항·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a−d, a, a+d → 3a = 15 → a(a²−d²) = −55 → d² = 36 → 3a² + 2d² = 147"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$147$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0844.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합(3a)과 곱 a(a²−d²) 을 바꾸되 d² 이 완전제곱수가 되게 함. 제곱합 대신 「가장 큰 수」·「세 수의 역수의 합」을 묻는 것도 같은 골조."
    creative: "(1) 합과 제곱합을 주고 곱을 묻기(★2 · 역방향이지만 같은 식) (2) 「세 수가 삼각형의 세 변」 조건을 붙여 d 의 부호·범위 검증(★3 · VF d1) (3) 세 수가 어떤 삼차방정식의 세 근이라는 설정으로 바꾸면 근과 계수 결합(★2 · XU · 0845 골조)."
```

```yaml
- id: RPM-ALG-0845
  page: 114
  vendor_label: "유형 06 등차수열을 이루는 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차방정식 x³ − 6x² + kx + 24 = 0 의 세 실근이 등차수열을 이룰 때 상수 k 의 값. 5지선다.
  category: "세 근 a−d, a, a+d → 근의 합으로 중항 a = 2 → x = 2 대입 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차방정식 근과 계수 관계(세 근의 합 = 6 · 공통수학1)와 등차 대칭 설정을 결합해 중항 2 가 근임을 끌어내야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차방정식의 세 근이 등차(근과 계수 + 대칭 설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 근을 a−d, a, a+d 로 두면 합 3a = 6 → a = 2 가 근. x = 2 대입: 8 − 24 + 2k + 24 = 0 → k = −4. 실제 인수분해하면 (x−2)(x−6)(x+2) 로 근 −2, 2, 6 이 등차임을 확인. 근과 계수 관계 결합(XU d1)·매개변수 k·M_total 5 → 유형 중 ★2.
    [분류 이슈] 0842 와 같은 얕은 XU(근과 계수 관계 한 번 차용) — 카탈로그에서 XU 인정 기준을 정하면 절차형으로 바뀔 수 있음. ★ 는 어느 쪽이든 2.
  tier: star_2
  mechanism_primary: "세 근 a−d, a, a+d → 3a = 6 → x = 2 가 근 → 8 − 24 + 2k + 24 = 0 → k = −4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0845.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수(−3a)와 상수항(−a(a²−d²))을 등차 세 정수근에서 역산해 만들고 k 를 묻기. 제약: 중항이 정수가 되게 x² 계수는 3 의 배수, 답이 보기 안."
    creative: "(1) k 대신 「세 근의 곱」이나 「공차」를 묻기(★2 · 곱 조건 사용) (2) 「세 근이 등비수열」로 바꾸면 곱으로 중항 결정(★2 · 유형 15 골조) (3) 사차방정식의 네 실근이 등차인 조건(★3~4 · 짝함수 대칭 SYM)."
```

```yaml
- id: RPM-ALG-0846
  page: 114
  vendor_label: "유형 06 등차수열을 이루는 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등차수열을 이루는 네 수의 합이 8, 가장 큰 수가 가장 작은 수의 3배일 때 네 수의 곱. 단답형.
  category: "네 수를 a−3d, a−d, a+d, a+3d 로 설정 → 합으로 a → 비율 조건으로 d → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열을 이루는 세 수·네 수(대칭 설정 a±d)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4a = 8 → a = 2. d > 0 으로 두면 a+3d = 3(a−3d) → 12d = 4 → d = 1/3, 네 수 1, 5/3, 7/3, 3 → 곱 35/3(d < 0 이면 같은 집합). 네 수 대칭 설정(공차 2d)은 이 유형의 표준 절차. 함정은 d 의 부호에 따라 「가장 큰 수」가 어느 항인지(T-부호). 유형 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "a−3d, a−d, a+d, a+3d → 4a = 8 → a+3d = 3(a−3d) → d = 1/3 → 곱 35/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{35}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0846.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합(4a)과 비율(가장 큰 = m × 가장 작은)을 바꾸되 d 가 양의 유리수로 풀리고 네 수가 모두 양수(비율 조건이 의미 있으려면)가 되게 함. 곱 대신 제곱합·가운데 두 수의 곱을 묻는 것도 같은 골조."
    creative: "(1) 비율 대신 「제곱의 합」을 주면 이차식 → d² (★2) (2) 네 수가 어떤 사각형의 네 내각(합 360°)이라는 기하 설정(★2 · RT d1) (3) 다섯 수(a−2d, …, a+2d)로 늘리고 곱 조건을 주면 인수분해 부담(★3 · Mₖ 상승)."
```

```yaml
- id: RPM-ALG-0847
  page: 114
  vendor_label: "유형 06 등차수열을 이루는 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 변의 길이가 등차수열을 이루는 직각삼각형의 빗변이 15 일 때 그 넓이. 단답형.
  category: "세 변 a−d, a, a+d(빗변) → 피타고라스 → a = 4d → 3:4:5 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직각삼각형」이라는 기하 조건을 (a−d)² + a² = (a+d)² 라는 대수 식으로 옮겨야 진행됨 — 정리하면 a = 4d 로 3:4:5 비율이 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열을 이루는 직각삼각형 세 변(3:4:5)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빗변은 가장 큰 변 a+d = 15. (a−d)² + a² = (a+d)² → a² = 4ad → a = 4d, 따라서 5d = 15 → d = 3, 세 변 9, 12, 15 → 넓이 54. 기하 → 대수 전환(RT d1)이 핵심이며 한 번 전개하면 계산은 가벼움. 유형 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "빗변 a+d = 15 → (a−d)² + a² = (a+d)² → a = 4d → 9, 12, 15 → 넓이 54"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0847.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변을 5 의 배수(10·20·25·30)로 바꾸면 3:4:5 의 배수로 정수 변. 빗변 대신 「가장 짧은 변」이나 「둘레」를 주어도 같은 골조. 제약: 등차 직각삼각형은 항상 3:4:5 이므로 비율이 고정됨."
    creative: "(1) 「둘레가 24」로 바꾸면 a = 8 → 6, 8, 10(★2) (2) 「세 변이 등비수열인 직각삼각형」으로 바꾸면 황금비 방정식 r⁴ = r² + 1(★3 · 무리수 처리) (3) 「내접원 반지름」을 묻기(★3 · 넓이 = rs · 기하 결합 XU)."
```

### 유형 07 등차수열의 합

```yaml
- id: RPM-ALG-0848
  page: 115
  vendor_label: "유형 07 등차수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등차수열에서 a_6 = 44, a_18 = 116 이고 첫째항부터 제n항까지의 합이 280 일 때 n 의 값. 5지선다.
  category: "두 항으로 a_1, d → S_n 식 → n 의 이차방정식 → 자연수 근"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 공식으로 n·항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12d = 72 → d = 6, a_1 = 14. S_n = n/2 {28 + 6(n−1)} = n(3n + 11) = 280 → 3n² + 11n − 280 = 0 → (3n + 35)(n − 8) = 0 → n = 8. 공차·첫째항·합 공식·이차방정식 네 단계에 인수분해 계산이 한 번 실려 M_total 6. 통찰 없음. 대표문항 ★2 유지.
  tier: star_2
  mechanism_primary: "a_6, a_18 → d = 6, a_1 = 14 → n(3n+11) = 280 → (3n+35)(n−8) = 0 → n = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0848.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호·값과 합 280 을 바꾸되 이차방정식이 자연수 근 하나(다른 근은 음수·분수)로 인수분해되게 역산. 합 대신 S_n 의 값을 여러 개 보기로 주어도 됨."
    creative: "(1) 「S_n = 280 이 되는 n」을 「S_n > 280 이 되는 최소 n」으로 바꾸면 부등식(★2 · 0849 골조) (2) a_6 + a_18 = 160 만 주고 S_23 을 묻기(★2 · 등거리 항 합 SYM d1) (3) 두 항의 합과 곱을 주어 a_1, d 를 이차방정식으로 정하면 케이스 분기(★3 · MI)."
```

```yaml
- id: RPM-ALG-0849
  page: 115
  vendor_label: "유형 07 등차수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 −100, 공차 8 인 등차수열의 합 S_n 이 양수가 되는 자연수 n 의 최솟값. 단답형.
  category: "S_n 식 세우기 → 인수분해 4n(n−26) → 부등식 → 경계 처리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 공식으로 n·항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = n/2 {−200 + 8(n−1)} = 4n² − 104n = 4n(n − 26) > 0 → n > 26 → 최솟값 27. n = 26 에서 S = 0 이라 「> 0」 경계(T-경계)가 유일한 함정. 합 공식을 n 의 식으로 정리하는 계산이 한 줄을 넘어 Mₖ 2·M_total 5, 통찰 없음 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "S_n = 4n² − 104n = 4n(n−26) > 0 → n > 26 → 27"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0849.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(음수)·공차(양수)를 바꾸되 S_n = 0 이 되는 n 이 자연수(2|a_1|/d + 1 이 자연수)가 되게 하면 경계 함정이 살아남. 자연수가 아니게 하면 경계 함정이 사라져 ★1 후보."
    creative: "(1) 「S_n < 0 이 되는 n 의 최댓값」으로 뒤집기(★2) (2) 「a_n > 0 이 되는 최소 n」과 함께 물어 항의 부호와 합의 부호가 다른 n 에서 바뀜을 대비(★2 · EQV d1) (3) S_n 이 처음으로 어떤 값(예: 100)을 넘는 n 으로 바꾸면 이차부등식 근의 공식(★2~3 · Mₖ 상승)."
```

```yaml
- id: RPM-ALG-0850
  page: 115
  vendor_label: "유형 07 등차수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 15, 제n항 −6 인 등차수열의 첫째항부터 제n항까지의 합이 36 일 때 a_5 의 값. 단답형.
  category: "양끝항 합 공식 n(a_1 + a_n)/2 = 36 → n = 8 → 공차 → a_5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 공식으로 n·항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = n(15 − 6)/2 = 36 → n = 8. a_8 = 15 + 7d = −6 → d = −3 → a_5 = 15 − 12 = 3. 첫째항과 끝항이 주어졌으므로 양끝항 합 공식을 고르는 것이 이 유형의 표준 절차(2a + (n−1)d 공식으로 가도 (n−1)d = −21 을 대입하면 같은 식). 통찰 없음·M_total 5 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "n(15 + (−6))/2 = 36 → n = 8 → 15 + 7d = −6 → d = −3 → a_5 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0850.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·끝항·합을 바꾸되 2S/(a_1 + a_n) 이 자연수이고 (a_n − a_1)/(n−1) 이 정수가 되게 함. 묻는 항 번호는 1~n 사이."
    creative: "(1) a_5 대신 「공차」나 「항의 개수」만 묻기(★1) (2) 끝항 대신 「마지막 세 항의 합」을 주면 끝항 역산 한 단계 추가(★2 · SYM d1) (3) 첫째항·끝항·합을 모두 문자로 두고 a_k 를 표현(★3 · Mₐ 3)."
```

```yaml
- id: RPM-ALG-0851
  page: 115
  vendor_label: "유형 07 등차수열의 합"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    등차수열에서 a_1 = 6, a_10 = −12 일 때 |a_1| + |a_2| + … + |a_20| 의 값. 서술형 단답.
  category: "a_n = 8 − 2n → 부호가 바뀌는 항(a_4 = 0) → 양수 구간 합 − 음수 구간 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값 합을 「부호가 바뀌는 항을 경계로 S_4 − (S_20 − S_4) = 2S_4 − S_20」 으로 옮겨야 합 공식이 쓰임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열 절댓값의 합(부호 전환 항 기준 구간 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    9d = −18 → d = −2, a_n = 8 − 2n. a_4 = 0, n ≥ 5 에서 음수. S_4 = 12, S_20 = 10(12 − 38) = −260 이므로 합 = S_4 − (S_20 − S_4) = 12 + 272 = 284. 절댓값 합을 두 구간 합의 차로 바꾸는 착안(EQV d1)에 S_20 계산이 얹혀 M_total 6. 상중·서술형 출발점 ★3 유지. 절댓값 구간 분할 자체는 T-부호 함정으로만 셈.
  tier: star_3
  mechanism_primary: "d = −2 → a_n = 8 − 2n → a_4 = 0 경계 → 절댓값 합 = 2S_4 − S_20 = 24 + 260 = 284"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$284$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0851.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1, a_10 을 바꾸어 공차·부호 전환 위치를 옮기고 항 수(20)를 바꿀 수 있음. 제약: 부호 전환 항이 항 수 안쪽에 있어야 하며, a_k = 0 인 항을 만들지 여부로 경계 처리 난이도 조절(0 이 있으면 어느 구간에 넣어도 같음)."
    creative: "(1) 「|a_1| + … + |a_n| 이 처음으로 300 이상이 되는 n」(★3 · 부등식 결합) (2) 「Σ|a_k − 3|」 처럼 상수를 빼서 전환 위치를 옮기기(★3 · 같은 EQV) (3) 첫째항·공차를 문자로 두고 절댓값 합의 일반식을 n 의 범위별로 쓰기(★4 · MI d2)."
```

### 유형 08 두 수 사이에 수를 넣어서 만든 등차수열의 합

```yaml
- id: RPM-ALG-0852
  page: 115
  vendor_label: "유형 08 두 수 사이에 수를 넣어서 만든 등차수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    24 와 −44 사이에 n 개의 수를 넣어 등차수열을 만들 때 삽입된 n 개의 합이 −120 이면 n 의 값. 단답형.
  category: "전체 (n+2)항 합 = (n+2)(24 − 44)/2 → 양끝 제외 → n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이 삽입 등차수열의 합(양끝항 공식으로 n)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 합 = (n+2)(24 + (−44))/2 = −10(n + 2). 삽입된 수의 합 = −10(n+2) − 24 + 44 = −120 → n + 2 = 14 → n = 12. 공차를 구하지 않고 양끝항 합 공식으로 가는 것이 유형의 표준 절차이고, 함정은 양끝을 빼는 것과 항 수 n+2(T-표기). 대표문항·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 합 −10(n+2) → 양끝 빼기: −10(n+2) + 20 = −120 → n = 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0852.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수와 삽입된 수의 합을 바꾸되 (양끝 합)/2 가 정수이고 n 이 자연수로 떨어지게 역산. 삽입 합 대신 「전체 합」을 주면 양끝 빼기 단계가 없어져 ★1 후보."
    creative: "(1) 합과 함께 「공차」를 묻기(★2 · 0853 골조) (2) 삽입된 수 중 양수의 합만 주기(★3 · 부호 전환 항 + 합 · EQV d1) (3) 두 수 사이에 n 개를 넣은 수열 두 개의 합이 같게 하는 n 관계(★3 · CON)."
```

```yaml
- id: RPM-ALG-0853
  page: 115
  vendor_label: "유형 08 두 수 사이에 수를 넣어서 만든 등차수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    −9 와 31 사이에 n 개의 수를 넣은 등차수열의 모든 항의 합이 231 일 때 공차 d 에 대하여 n + d 의 값. 5지선다.
  category: "전체 합 (n+2)(−9 + 31)/2 = 231 → n → 공차 40/(n+1) → n + d"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이 삽입 등차수열의 합(양끝항 공식으로 n)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    11(n + 2) = 231 → n = 19. d = (31 − (−9))/(n + 1) = 40/20 = 2 → n + d = 21. 합으로 항 수, 항 수로 공차를 잇는 두 단계. 통찰 없음·M_total 5 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "(n+2)·22/2 = 231 → n = 19 → d = 40/20 = 2 → n + d = 21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0853.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수·전체 합을 바꾸되 (양끝 합)/2 가 전체 합의 약수이고 (끝 − 처음)/(n+1) 이 정수가 되게 역산. 보기는 n + d 근처 연속 정수로."
    creative: "(1) 전체 합 대신 「가운데 항(중앙값)」과 합을 주기(★2 · 항 수 홀수 조건) (2) 「합이 231 이 되도록 하는 자연수 n 이 존재하기 위한 양끝 조건」(★3 · BW) (3) 공차가 정수라는 조건만 주고 합의 가능한 값들의 합(★3 · 약수 나열 MI)."
```

```yaml
- id: RPM-ALG-0854
  page: 115
  vendor_label: "유형 08 두 수 사이에 수를 넣어서 만든 등차수열의 합"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    2 와 37 사이에 n 개의 수를 넣은 등차수열의 모든 항이 자연수일 때 모든 항의 합의 최솟값. 단답형.
  category: "합 = 39(n+2)/2 → n 최소 → 자연수 조건 ⇔ n+1 이 35 의 약수 → n = 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 항이 자연수」를 「공차 35/(n+1) 이 자연수 ⇔ n+1 이 35 의 약수」로 옮겨야 가능한 n 이 4, 6, 34 로 좁혀짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삽입 등차수열의 합의 최솟값(모든 항 자연수 → 약수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양끝이 고정이라 합 = (n+2)(2 + 37)/2 = 39(n+2)/2 는 n 이 작을수록 작다. 모든 항이 자연수이려면 d = 35/(n+1) 이 자연수 → n+1 ∈ {5, 7, 35}(n+1 = 1 은 n = 0 이라 제외) → n 최소 4 → 합 39·6/2 = 117. 자연수 조건을 약수 조건으로 바꾸는 착안(EQV d1)과 n = 0 배제(T-범위). 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "합 = 39(n+2)/2 → n 최소 → d = 35/(n+1) 자연수 → n+1 = 5 → n = 4 → 117"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$117$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0854.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수를 바꾸되 (끝 − 처음) 의 약수가 여럿(예: 45·60·72)이고 n ≥ 1 인 최소 n 이 하나로 정해지게 함. 「최댓값」으로 바꾸면 n+1 = 끝 − 처음(d = 1) 로 항 수가 최대."
    creative: "(1) 「합의 최댓값」 또는 「가능한 합의 개수」(★3 · 같은 EQV) (2) 「모든 항이 짝수」·「모든 항이 3 의 배수」 조건으로 약수 조건을 비틀기(★3 · EQV d2) (3) 양끝을 문자 p, q 로 두고 합의 최솟값이 특정 값이 되게 하는 조건(★4 · BW + 약수)."
```

### 유형 09 부분의 합이 주어진 등차수열의 합

```yaml
- id: RPM-ALG-0855
  page: 116
  vendor_label: "유형 09 부분의 합이 주어진 등차수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    첫째항부터 제20항까지의 합이 120, 제30항까지의 합이 300 인 등차수열의 첫째항부터 제10항까지의 합. 5지선다.
  category: "S_n = An² + Bn 으로 두고 연립 → A, B → S_10 (또는 구간합 등차 성질)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합이 주어진 등차수열의 합(S_n=An²+Bn·구간합 등차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = An² + Bn 에서 400A + 20B = 120, 900A + 30B = 300 → A = 2/5, B = −2 → S_10 = 40 − 20 = 20. 또는 S_10, S_20 − S_10, S_30 − S_20 이 등차이므로 x, 120 − x, 180 에서 2(120 − x) = x + 180 → x = 20. 두 풀이 모두 이 유형의 표준 절차라 전략 분기로 세지 않음. 연립 계산 Mₖ 2·M_total 6. 대표문항 ★2 유지.
    [분류 이슈] 연립 vs 구간합 등차 두 풀이가 있으나 속도 차가 작아 SC 를 세지 않음 — 0857 과 함께 「구간합 등차 성질」을 카탈로그에서 별도 유형(또는 전략 축)으로 세울지 결정 필요.
  tier: star_2
  mechanism_primary: "S_n = An² + Bn → 20A + B = 6, 30A + B = 10 → A = 2/5, B = −2 → S_10 = 20 (구간합 x, 120−x, 180 등차로도 즉시)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0855.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_20, S_30 값을 바꾸되 A, B 가 유리수이고 S_10 이 보기 안 정수. 구간(10·20·30)을 5·10·15 등 등간격으로 두면 구간합 등차 풀이가 유지되고, 비등간격(8·20·30)으로 두면 연립만 가능해 Mₖ 상승."
    creative: "(1) S_10, S_20 을 주고 S_30 을 묻기(★2 · 같은 골조) (2) 「S_10 = S_20」 조건으로 S_30 을 a_1 로 표현(★2 · 합이 0 인 구간 SYM d1) (3) 구간을 비등간격으로 두고 a_1, d 를 문자로 남겨 S_n 최대 조건까지 잇기(★3 · 유형 10 결합)."
```

```yaml
- id: RPM-ALG-0856
  page: 116
  vendor_label: "유형 09 부분의 합이 주어진 등차수열의 합"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항이 10 인 등차수열의 첫째항부터 제12항까지의 합이 252 일 때 첫째항부터 제15항까지의 합. 단답형.
  category: "S_12 로 공차 → S_15 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합이 주어진 등차수열의 합(S_n=An²+Bn·구간합 등차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S_12 = 6(20 + 11d) = 252 → 11d = 22 → d = 2. S_15 = 15/2 (20 + 28) = 360. 공차 하나 구해 합 공식에 넣는 두 줄. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "6(20 + 11d) = 252 → d = 2 → S_15 = 15(20 + 28)/2 = 360"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0856.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·S_12 를 바꾸되 공차가 정수로 떨어지게(S_12 − 120 이 66 의 배수). 항 수 12·15 를 다른 조합으로 바꿔도 같은 골조."
    creative: "(1) 첫째항 대신 「제5항」을 주기(★1) (2) S_12 = 252 와 「S_15 − S_12 = 108」 두 조건으로 첫째항까지 묻기(★2 · 연립) (3) 「S_n 이 처음으로 500 을 넘는 n」으로 이어 부등식(★2 · 0849 골조)."
```

```yaml
- id: RPM-ALG-0857
  page: 116
  vendor_label: "유형 09 부분의 합이 주어진 등차수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등차수열의 합 S_n 에 대하여 S_10 = 55, S_20 = 210 일 때 S_15 − S_5 의 값. 5지선다.
  category: "S_n = An² + Bn 연립 → S_15 − S_5 (또는 a_6 + … + a_15 = 5(a_1 + a_20) = S_20/2)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합이 주어진 등차수열의 합(S_n=An²+Bn·구간합 등차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    100A + 10B = 55, 400A + 20B = 210 → A = B = 1/2 → S_n = n(n+1)/2 → S_15 − S_5 = 120 − 15 = 105. 등거리 항 합 a_6 + a_15 = a_1 + a_20 을 쓰면 S_15 − S_5 = 5(a_1 + a_20) = S_20/2 = 105 로 한 줄이지만, 연립도 충분히 빨라 전략 분기로 세지 않음. 연립 계산 Mₖ 2·M_total 6 → 유형 중 ★2.
    [분류 이슈] 0855 와 같은 「연립 vs 구간합·등거리 항 합」 두 풀이 — 지름길을 SYM 또는 SC d1 로 셀지 카탈로그 설계 때 결정. 세면 ★2 유지, 안 세도 ★2.
  tier: star_2
  mechanism_primary: "S_n = An² + Bn → 10A + B = 5.5, 20A + B = 10.5 → S_n = n(n+1)/2 → S_15 − S_5 = 105 (= S_20/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0857.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_10, S_20 을 바꾸되 A, B 유리수·답이 보기 안 정수. 묻는 구간을 (S_15 − S_5) 처럼 S_20 의 절반이 되는 대칭 구간으로 두면 지름길이 살아 있고, (S_12 − S_3) 처럼 비대칭으로 두면 연립만 남음."
    creative: "(1) S_15 − S_5 대신 「a_6 + a_15」 만 묻기(★2 · SYM d1 이 정면으로) (2) S_10 = S_20 조건으로 S_30 을 묻기(★2 · 0 인 구간합) (3) 등비수열 버전(S_10, S_20 으로 S_30)으로 옮기면 구간합이 등비(★3 · 유형 18 골조)."
```

### 유형 10 등차수열의 합의 최대·최소

```yaml
- id: RPM-ALG-0858
  page: 116
  vendor_label: "유형 10 등차수열의 합의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    제5항이 11, 제15항이 −9 인 등차수열의 첫째항부터 제n항까지의 합 S_n 의 최댓값. 단답형.
  category: "두 항으로 a_1, d → a_n ≥ 0 인 마지막 n → S_10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소(부호 전환 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    10d = −20 → d = −2, a_1 = 19, a_n = 21 − 2n. a_10 = 1 > 0, a_11 = −1 < 0 이므로 양수항까지 더한 S_10 = 10(19 + 1)/2 = 100 이 최대(S_n = −n² + 20n 의 꼭짓점 n = 10 으로도 같음). 「합의 최대 = 양수항까지」는 유형의 표준 절차. 대표문항·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "d = −2, a_1 = 19 → a_n = 21 − 2n > 0 ⇔ n ≤ 10 → S_10 = 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0858.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호·값을 바꾸되 공차가 정수이고 a_n = 0 이 되는 n 이 자연수가 아니게(경계가 하나) 하거나, 일부러 a_k = 0 을 만들어 최댓값이 두 n 에서 같게 하기. 감소 수열(합 최대)·증가 수열(합 최소)을 대칭으로 바꿀 수 있음."
    creative: "(1) 「S_n 이 최대가 되는 n」만 묻기(★1~2) (2) 「S_n = S_m (n ≠ m) 인 쌍」으로 대칭축 n = 10 을 묻기(★2 · SYM d1) (3) 공차를 문자로 두고 「n = 10 에서만 최대」가 되는 공차 범위(★3 · BW · 0860 골조)."
```

```yaml
- id: RPM-ALG-0859
  page: 116
  vendor_label: "유형 10 등차수열의 합의 최대·최소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 −5/2, 공차 1/3 인 등차수열의 합 S_n 이 최소가 되는 n 의 값. 단답형.
  category: "a_n ≤ 0 인 마지막 n → S_n 최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소(부호 전환 항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n = −5/2 + (n−1)/3 < 0 ⇔ n − 1 < 15/2 ⇔ n ≤ 8 (a_8 = −1/6, a_9 = 1/6). 음수항까지 더한 S_8 이 최소이므로 n = 8. 분수 계산이지만 부등식 한 줄. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_n = −5/2 + (n−1)/3 < 0 → n < 8.5 → n = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0859.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(음수)·공차(양수 분수)를 바꾸되 a_n = 0 의 해가 자연수가 아니게 하면 답 하나. 정수 공차로 바꾸면 ★1 유지에 계산만 줄어듦."
    creative: "(1) 「S_n 의 최솟값」까지 묻기(★2 · 분수 합 계산) (2) 「S_n < 0 인 n 의 개수」로 바꾸면 합의 부호 전환(n = 16 근처)이 항의 부호 전환과 다름을 대비(★2 · EQV d1) (3) 공차를 문자로 두고 최소가 n = 8 에서 나오는 공차 범위(★3 · BW)."
```

```yaml
- id: RPM-ALG-0860
  page: 116
  vendor_label: "유형 10 등차수열의 합의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 100, 공차가 정수인 등차수열의 합 S_n 이 n = 17 에서 최대일 때 a_10 의 값. 5지선다.
  category: "S_n 최대 위치 → a_17 > 0, a_18 < 0 → 정수 d 범위 → d = −6 → a_10"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「n = 17 에서 최대」라는 결과 조건을 「a_17 > 0 이고 a_18 < 0」 이라는 항의 부호 조건으로 역추적해야 d 의 부등식이 생김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소(부호 전환 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    100 + 16d > 0 → d > −6.25, 100 + 17d < 0 → d < −5.88 → 정수 d = −6 (a_18 = 0 이 되려면 d 가 정수가 아니므로 경계는 저절로 정리됨). a_10 = 100 − 54 = 46. 최대 위치를 부호 조건으로 뒤집는 BW d1, 정수 조건(T-범위)과 경계 등호(T-경계) 두 함정으로 Mₜ 2·M_total 7. 유형 중 ★2.
  tier: star_2
  mechanism_primary: "S_n 최대 n = 17 → a_17 > 0, a_18 < 0 → −6.25 < d < −5.88 → d = −6 → a_10 = 46"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0860.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·최대 위치 n 을 바꾸되 두 부등식 사이에 정수가 정확히 하나 들어가게(−첫째항/(n−1) 과 −첫째항/n 사이) 역산. 첫째항이 n 의 배수이면 a_(n+1) = 0 이 생겨 「두 n 에서 최대」 경계 논의가 추가됨(★3 후보)."
    creative: "(1) 「n = 17 에서 최대」를 「S_17 = S_18 이 최대」로 바꾸면 a_18 = 0 등호 처리(★2~3 · T-경계 강화) (2) 공차 대신 첫째항을 미지의 정수로 두기(★2) (3) 「최댓값이 800 이상」 같은 값 조건을 덧붙여 d 를 두 방향에서 조이기(★3 · CON)."
```

```yaml
- id: RPM-ALG-0861
  page: 116
  vendor_label: "유형 10 등차수열의 합의 최대·최소"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    −28 과 44 사이에 k 개의 수를 넣은 등차수열의 모든 항의 합이 200 일 때, 삽입된 수열 {a_n} 의 첫째항부터 제n항까지의 합 S_n 의 최솟값. 서술형 단답.
  category: "전체 합으로 k → 공차 → {a_n} 의 첫째항 −25 → a_n ≤ 0 인 마지막 n → S_9"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소(부호 전환 항)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (k+2)(−28 + 44)/2 = 200 → k = 23, d = 72/24 = 3. 수열 {a_n} 은 삽입된 수들이라 a_1 = −25, a_n = 3n − 28. a_9 = −1 < 0, a_10 = 2 > 0 이므로 S_9 = 9(−25 − 1)/2 = −117 이 최소. 유형 08(합으로 k·d) 과 유형 10(부호 전환)의 표준 절차를 이은 절차형이지만 단계가 여섯이고, {a_n} 의 첫째항을 −28 로 두는 실수(T-표기)와 마지막 음수항 경계(T-경계)가 겹쳐 M_total 7. 상중·서술형 출발점 ★3 유지.
    [분류 이슈] 통찰 없는 절차형인데 M_total 7 로 ★3 을 유지 — 절차형 ★3 허용(스키마 절차형 천장 ★4)에는 맞지만, 카탈로그 base ★ 가 2 로 잡히면 ★2 로 내려갈 후보.
  tier: star_3
  mechanism_primary: "(k+2)·8 = 200 → k = 23 → d = 3 → a_1 = −25, a_n = 3n − 28 → a_9 < 0 < a_10 → S_9 = −117"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-117$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0861.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 수·전체 합을 바꾸되 k 가 자연수, d 가 정수, 부호 전환 항이 1~k 안에 있게 역산. a_j = 0 인 항을 만들면 최솟값이 두 n 에서 같아져 서술형 논의가 늘어남."
    creative: "(1) 「S_n 의 최댓값」(양끝 부호를 뒤집어 감소 수열)으로 대칭 변형(★3) (2) {a_n} 을 양끝 포함 전체 수열로 정의를 바꾸면 첫째항 함정이 사라져 ★2 후보 (3) 「S_n 이 최소가 되는 n 이 두 개」가 되도록 하는 전체 합 조건을 묻기(★4 · BW + 경계)."
```

### 유형 11 나머지가 같은 자연수의 합

```yaml
- id: RPM-ALG-0862
  page: 117
  vendor_label: "유형 11 나머지가 같은 자연수의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 자리 자연수 중 7 로 나눈 나머지가 2 인 수의 총합. 5지선다.
  category: "7k + 2 꼴 두 자리 수 → 첫항 16·끝항 93·항 수 12 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지가 같은 자연수의 합(등차수열로 표현)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16, 23, …, 93 은 첫째항 16, 공차 7 인 등차수열이고 93 = 16 + 7(n−1) → n = 12. 합 = 12(16 + 93)/2 = 654. 나머지 조건을 등차수열로 읽는 것은 유형 자체의 정의라 통찰로 세지 않음. 함정은 두 자리 범위의 첫항·끝항(9 가 아니라 16, 100 아님)과 항 수 세기(T-범위). 대표문항·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "7k + 2, 10 ≤ · ≤ 99 → 16, 23, …, 93 → n = 12 → 12(16 + 93)/2 = 654"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0862.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 수(3~9)·나머지·자릿수 범위(두 자리·100 이하·세 자리)를 바꿀 수 있음. 제약: 첫항·끝항이 범위 경계와 가깝게(예: 나머지가 범위 시작 바로 아래) 두면 경계 함정이 살아남."
    creative: "(1) 「7 로 나누어떨어지지 않는 두 자리 수의 합」으로 여사건(★2 · SC d1) (2) 「7 로 나눈 나머지가 2 또는 5」 두 수열 합치기(★2 · MI d1) (3) 「7 로 나눈 나머지가 2 인 두 자리 수를 모두 곱한 값을 7 로 나눈 나머지」로 옮기면 정수론 결합(★3 · XU)."
```

```yaml
- id: RPM-ALG-0863
  page: 117
  vendor_label: "유형 11 나머지가 같은 자연수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    50 이하의 자연수 중 4 또는 6 으로 나누어떨어지는 수의 총합. 단답형.
  category: "4 의 배수 합 + 6 의 배수 합 − 12 의 배수 합(포함·배제)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「4 또는 6 으로 나누어떨어짐」을 「4 의 배수 ∪ 6 의 배수 = 두 합 − 12 의 배수 합」 으로 옮겨야 중복 없이 셈(집합의 원소 개수 논리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "4 또는 6 의 배수 합(포함·배제)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4 의 배수 4~48 은 12 개 합 312, 6 의 배수 6~48 은 8 개 합 216, 공통인 12 의 배수 12~48 은 4 개 합 120 → 312 + 216 − 120 = 408. 「또는」을 합집합 포함·배제로 옮기는 착안(EQV d1)에 세 등차수열 합 계산이 실려 M_total 6. 유형 중 ★2.
  tier: star_2
  mechanism_primary: "Σ(4 의 배수) 312 + Σ(6 의 배수) 216 − Σ(12 의 배수) 120 = 408"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$408$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0863.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(50·100·200)과 두 수(4·6 → 3·5, 6·9, 4·10)를 바꿀 수 있음. 제약: 두 수가 서로소가 아니면 공통 배수가 최소공배수의 배수임을 짚어야 하고(6·9 → 18), 서로소이면 곱이 최소공배수라 함정이 약해짐."
    creative: "(1) 「4 로도 6 으로도 나누어떨어지지 않는 수의 합」 여사건(★2 · SC d1) (2) 「4 의 배수이지만 6 의 배수가 아닌 수」 차집합(★2) (3) 세 수(3·4·5) 합집합으로 포함·배제 세 겹(★3 · Mₖ 상승·MI)."
```

```yaml
- id: RPM-ALG-0864
  page: 117
  vendor_label: "유형 11 나머지가 같은 자연수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    6 으로 나눈 나머지가 5, 8 로 나눈 나머지가 3 인 자연수를 작은 순으로 a_1, a_2, … 라 할 때 a_1 + … + a_8 의 값. 5지선다.
  category: "두 나머지 조건을 동시에 만족하는 최소 수 11 → 공차 lcm(6, 8) = 24 → 8 항 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 독립인 두 나머지 조건을 「첫째항 11, 공차 24(최소공배수) 인 등차수열」 하나로 통합해야 합 공식이 쓰임 — 공차를 48 로 두는 오류 지점"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 나머지 조건 동시 만족 수열(공차 = 최소공배수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    8 로 나눈 나머지 3 인 수 3, 11, 19, … 중 6 으로 나눈 나머지 5 인 첫 수는 11. 이후 두 조건을 유지하려면 24 씩 커지므로 a_n = 24n − 13, a_8 = 179 → 합 8(11 + 179)/2 = 760. 두 조건을 한 등차수열로 묶는 CON d1(공차가 6·8 = 48 이 아니라 lcm 24). 첫 항 탐색·합 계산은 가벼움·M_total 5 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "나열로 a_1 = 11 → 공차 lcm(6, 8) = 24 → a_n = 24n − 13 → S_8 = 8(11 + 179)/2 = 760"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0864.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 나누는 수와 나머지를 바꾸되 해가 존재하고(두 나머지 차가 gcd 의 배수) 첫 항이 작게 나오게 함. 서로소인 쌍(5·7)으로 바꾸면 공차 = 곱이라 함정이 약해지고, 서로소가 아닌 쌍(6·8, 4·10)이 lcm 함정을 살림."
    creative: "(1) 「세 자리 자연수 중 이런 수의 개수」로 범위 세기(★2) (2) 세 조건(mod 3·4·5)으로 늘리면 첫 항 찾기 부담(★3 · CON d2) (3) 「a_k 가 처음으로 500 을 넘는 k」와 합을 함께 물어 부등식 결합(★3)."
```

### 유형 12 등차수열의 합과 일반항 사이의 관계

```yaml
- id: RPM-ALG-0865
  page: 117
  vendor_label: "유형 12 등차수열의 합과 일반항 사이의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    합 S_n = −3n² + 2n 인 수열에서 a_1 + a_10 의 값. 5지선다.
  category: "a_1 = S_1 · a_10 = S_10 − S_9 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n → a_n (a_1=S_1·a_n=S_n−S_(n−1))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_1 = S_1 = −1, a_10 = S_10 − S_9 = −280 − (−225) = −55 → 합 −56 (상수항이 0 이라 a_n = −6n + 5 가 n = 1 에도 성립). 정의 두 번 적용. 대표문항이나 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_1 = S_1 = −1 · a_10 = S_10 − S_9 = −55 → −56"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0865.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 계수(A, B)와 묻는 항 번호를 바꿀 수 있음. 상수항을 0 이 아닌 값으로 두면 a_1 이 일반항 식과 달라져 T-경계 함정이 생김(★2 후보 · 0868 골조)."
    creative: "(1) 「a_n 의 일반항」과 「공차」를 묻기(★1) (2) S_n 에 상수항을 넣고 「등차가 아닌 이유」 또는 「a_1 만 다른 값」을 묻기(★2 · EQV d1) (3) S_n 을 이차식이 아닌 2ⁿ 꼴로 주면 등비수열 버전(★2 · 유형 19)."
```

```yaml
- id: RPM-ALG-0866
  page: 117
  vendor_label: "유형 12 등차수열의 합과 일반항 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    합이 각각 n² + kn, 2n² + n 인 두 수열 {a_n}, {b_n} 에 대하여 a_8 = b_8 일 때 상수 k 의 값. 단답형.
  category: "a_8 = S_8 − S_7 = 15 + k · b_8 = 31 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n → a_n (a_1=S_1·a_n=S_n−S_(n−1))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_8 = (64 + 8k) − (49 + 7k) = 15 + k, b_8 = 136 − 105 = 31 → k = 16 (일반항 a_n = 2n − 1 + k, b_n = 4n − 1 로도 같음). 정의를 두 수열에 적용해 일차방정식. 매개변수 k 로 Mₐ 2·M_total 5, 통찰 없음 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "a_8 = S_8 − S_7 = 15 + k · b_8 = T_8 − T_7 = 31 → k = 16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0866.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합의 계수와 비교하는 항 번호를 바꾸되 k 가 정수로 떨어지게. n ≥ 2 에서만 비교하면 상수항이 있어도 무방하고, 제1항 비교로 바꾸면 S_1 을 써야 함."
    creative: "(1) 「a_n = b_n 인 n」을 묻기(★2 · n 의 방정식) (2) 「a_n > b_n 인 n 의 개수」(★2 · 부등식) (3) 두 수열의 합 S_n + T_n 이 등차수열의 합이 되도록 하는 조건(★2~3 · EQV)."
```

```yaml
- id: RPM-ALG-0867
  page: 117
  vendor_label: "유형 12 등차수열의 합과 일반항 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    합 S_n = −(n−2)² + k 인 수열이 첫째항부터 등차수열을 이룰 때 a_1 + k 의 값(k 는 상수). 단답형.
  category: "S_n 전개 → 첫째항부터 등차 ⇔ 상수항 0 → k = 4 → a_1 = S_1 = 3 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「첫째항부터 등차」를 「S_n = An² + Bn 꼴, 즉 상수항 −4 + k = 0」 으로 옮겨야 k 가 정해짐(a_1 = S_1 이 n ≥ 2 의 일반항 식과 일치할 조건)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "첫째항부터 등차 조건(S_n 상수항 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_n = −n² + 4n − 4 + k. n ≥ 2 에서 a_n = −2n + 5 이고 a_1 = S_1 = 3 + (k − 4). 첫째항부터 등차이려면 a_1 = 3 = −2 + 5 → k = 4, a_1 + k = 7. 등차 조건을 상수항 조건으로 옮기는 EQV d1 이 핵심이고 계산은 전개 한 줄. 매개변수 k·M_total 6 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "S_n = −n² + 4n + (k − 4) → 첫째항부터 등차 ⇔ k − 4 = 0 → k = 4, a_1 = 3 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0867.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "완전제곱 꼴의 중심(n−2)과 이차 계수를 바꾸면 상수항 조건이 바뀜. 제약: 답이 a_1 + k 처럼 두 값을 묶는 형태면 k 와 a_1 이 모두 정수가 되게."
    creative: "(1) 「제2항부터 등차이고 첫째항만 다른 수열의 a_1 − a_2」(★2 · 경계 함정 정면) (2) S_n = An² + Bn + C 에서 「등차가 되기 위한 A, B, C 조건」 일반화(★2 · Mₐ 3) (3) 등비수열 버전 S_n = 3ⁿ + k 가 첫째항부터 등비일 조건(★2 · 유형 19 · k = −1)."
```

```yaml
- id: RPM-ALG-0868
  page: 117
  vendor_label: "유형 12 등차수열의 합과 일반항 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    합 S_n = n² + 3n + 1 인 수열에서 a_1 + a_3 + a_5 + … + a_21 의 값. 단답형.
  category: "a_1 = S_1 = 5 (별도) · a_n = 2n + 2 (n ≥ 2) → 홀수항 a_3~a_21 은 공차 4 등차 → 합 + a_1"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n → a_n (a_1=S_1·a_n=S_n−S_(n−1))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 1 때문에 a_1 = S_1 = 5 이고 n ≥ 2 에서 a_n = 2n + 2. a_3, a_5, …, a_21 은 8, 12, …, 44 의 10 항 등차(공차 4)라 합 260, 여기에 a_1 = 5 를 더해 265. 일반항 식을 n = 1 에 그대로 써서 4 로 두는 실수(T-경계)와 홀수항 개수 세기(T-범위)가 겹쳐 Mₜ 2·M_total 7. 통찰 없음 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "a_1 = 5 (S_1) · a_n = 2n + 2 (n ≥ 2) → a_3 + … + a_21 = 10(8 + 44)/2 = 260 → 265"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$265$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0868.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 계수·상수항과 더하는 항의 범위(홀수항·짝수항·3 의 배수 항)를 바꿀 수 있음. 제약: 범위에 a_1 이 포함돼야 경계 함정이 살고, 짝수항만 더하면 함정이 사라져 ★1~2."
    creative: "(1) 「a_2 + a_4 + … + a_20」 으로 바꾸면 함정 제거(★1~2) (2) 「a_1 부터 a_n 까지의 합이 처음으로 300 을 넘는 n」 처럼 S_n 을 되묻기(★2 · 순환) (3) S_n 이 상수항을 갖는 이유를 「첫째항만 예외인 수열」로 서술하게 하기(★2 · EQV d1)."
```

### 유형 13 등비수열의 일반항

```yaml
- id: RPM-ALG-0869
  page: 118
  vendor_label: "유형 13 등비수열의 일반항"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열에서 a_2 = 2, a_5 = 16 일 때 a_10 의 값. 5지선다.
  category: "두 항의 비 r³ = 8 → r = 2 → a_1 = 1 → a_10"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 일반항(공비·첫째항 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_5/a_2 = r³ = 8 → r = 2(실수), a_1 = 1 → a_10 = 2⁹ = 512 (a_10 = a_5·r⁵ = 16·32 로도 즉시). 등비 정의 한 번. 대표문항이나 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "r³ = 16/2 = 8 → r = 2 → a_10 = a_5·r⁵ = 512"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0869.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호 차와 값의 비를 바꾸되 r 이 실수 하나로 정해지게(번호 차가 홀수이거나 「공비가 양수」 조건). 번호 차가 짝수이고 조건이 없으면 r = ±2 두 경우로 MI d1(★2)."
    creative: "(1) 「a_2·a_5 = 32, a_3 = 4」 처럼 곱 조건으로 바꾸기(★2 · 등비중항) (2) 「a_n > 1000 인 최소 n」 으로 부등식(★2) (3) 두 항 사이에 등비 조건 대신 「a_5 = a_2 + 14」 를 주면 r³ 의 방정식(★2 · EQV)."
```

```yaml
- id: RPM-ALG-0870
  page: 118
  vendor_label: "유형 13 등비수열의 일반항"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일반항 a_n = 2 × 3^(1−2n) 인 등비수열의 첫째항과 공비. 단답형.
  category: "n = 1 대입 → 첫째항 · a_2/a_1 (또는 3^(−2n) 정리) → 공비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 일반항(공비·첫째항 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_1 = 2·3^(−1) = 2/3, a_2 = 2·3^(−3) = 2/27 → r = 1/9 (a_n = 6·(1/9)ⁿ 으로 정리해도 같음). 지수법칙 한 줄, 함정은 3^(1−2n) 을 3·9^(−n) 으로 읽는 표기(T-표기). 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a_1 = 2·3^(−1) = 2/3 · r = a_2/a_1 = 3^(−2) = 1/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '첫째항: $\dfrac{2}{3}$, 공비: $\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0870.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·5)과 지수의 일차식(1−2n, 3n−2, 2−n)을 바꾸면 첫째항·공비가 밑의 거듭제곱으로 정해짐. 제약: 지수의 n 계수가 공비의 지수, 상수항이 첫째항 보정."
    creative: "(1) 일반항을 a_n = 3^n + 3^(n+1) 처럼 두 항으로 주어 정리하게(★1~2) (2) a_n = (−2)^n·5^(1−n) 처럼 밑 두 개면 공비 −2/5(★2) (3) 「첫째항과 공비가 모두 정수가 되도록 하는 정수 k」 조건으로 뒤집기(★2 · BW)."
```

```yaml
- id: RPM-ALG-0871
  page: 118
  vendor_label: "유형 13 등비수열의 일반항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 1/4, −1/2, 1, … 에서 256 이 제몇 항인지. 단답형.
  category: "공비 −2 → a_n = (1/4)(−2)^(n−1) = 256 → (−2)^(n−1) = 2^10 → n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 일반항(공비·첫째항 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r = −2, a_n = (1/4)(−2)^(n−1). 256 = 2⁸ 이므로 (−2)^(n−1) = 2^10, 양수이므로 n − 1 이 짝수여야 하고 n − 1 = 10 → 제11항. 지수 방정식 한 줄에 부호·짝수 확인(T-부호)이 붙음. 중 라벨이나 통찰 없음·M_total 4 → −1 해 ★1(1단 하향 · 기록만).
  tier: star_1
  mechanism_primary: "r = −2 → (1/4)(−2)^(n−1) = 256 → (−2)^(n−1) = 2^10 → n = 11"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '제$11$항'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0871.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(2 의 거듭제곱)·공비(±2, ±3, ±1/2)·묻는 값(같은 밑의 거듭제곱)을 바꾸되 지수가 자연수로 떨어지게. 음수 공비를 유지하면 부호 확인이 남고, 묻는 값이 음수면 n−1 이 홀수."
    creative: "(1) 「−256 은 제몇 항인가」로 바꾸면 홀수 지수 확인이 정면(★1~2) (2) 「처음으로 절댓값이 1000 을 넘는 항」 부등식(★2) (3) 첫째항·공비를 √2 같은 무리수로 두면 지수 정리 부담(★2 · 0872 골조)."
```

```yaml
- id: RPM-ALG-0872
  page: 118
  vendor_label: "유형 13 등비수열의 일반항"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 √2+1, 1, √2−1, 3−2√2, … 의 일반항을 a_n 이라 할 때 a_100 의 값. 단답형.
  category: "공비 1/(√2+1) 유리화 → √2−1 → 첫째항 = (√2−1)^(−1) → a_n = (√2−1)^(n−2) → a_100"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수 공비 등비수열의 일반항(유리화·곱이 1 인 켤레)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r = 1/(√2+1) = √2−1 이고 첫째항 √2+1 = (√2−1)^(−1) 이므로 a_n = (√2−1)^(n−2), a_100 = (√2−1)^98 ((√2+1)(√2−1)^99 에서 (√2+1)(√2−1) = 1 로 정리해도 같음). 단계는 셋이지만 유리화와 지수 정리가 두 줄이라 Mₖ 2·M_total 5. 통찰 없음 → 유형 중 ★2.
  tier: star_2
  mechanism_primary: "r = √2−1 · a_1 = (√2−1)^(−1) → a_n = (√2−1)^(n−2) → a_100 = (√2−1)^98"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(\sqrt{2}-1)^{98}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0872.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "켤레 무리수 쌍(√3+√2 와 √3−√2, 2+√3 과 2−√3)으로 바꾸면 같은 「곱이 1」 구조. 묻는 항 번호는 지수가 정리되는 어떤 값이든 가능. 제약: 첫째항이 공비의 역수라는 관계를 유지해야 한 식으로 정리됨."
    creative: "(1) 「a_n 이 유리수가 되는 n」을 묻기(★2 · (√2−1)^k 전개의 홀짝 · MI d1) (2) a_k·a_m = 1 이 되는 (k, m) 조건(★2 · 지수 합) (3) 첫째항을 공비의 역수가 아닌 값으로 두면 두 인수를 따로 들고 가야 해 정리 부담(★2)."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 11 · ★2 23 · ★3 3 · ★4 0 · ★5 0
- 통찰형(insight_type) 0 · 절차형 37 · premium 0. 통찰 라벨을 가진 문항은 11(모두 d1 표준 착안): 0839·0843·0851·0854·0863·0867 EQV · 0842·0845 XU · 0847 RT · 0860 BW · 0864 CON
- 벤더 신호 대비: 대표문제 10 중 4 가 M_total 4 로 ★1(0836·0840·0865·0869), 6 이 ★2 · 「중」 18 중 1 이 ★1(0871), 17 이 ★2 · 「상중」 3 모두 ★3(0851·0854·0861) · 「중하」 6 모두 ★1(0837·0838·0841·0856·0859·0870)
- type_hint 상위: 「등차수열의 합의 최대·최소(부호 전환 항)」 4 · 「두 수 사이에 n개를 넣은 등차수열(항 수 n+2·공차)」 3 · 「등차수열의 합 공식으로 n·항 구하기」 3 · 「부분합이 주어진 등차수열의 합(S_n=An²+Bn·구간합 등차)」 3 · 「S_n → a_n (a_1=S_1·a_n=S_n−S_(n−1))」 3 · 「등비수열의 일반항(공비·첫째항 결정)」 3 · 「등차중항 조건으로 미지수 구하기」 2 · 「등차수열을 이루는 세 수·네 수(대칭 설정 a±d)」 2 · 「두 수 사이 삽입 등차수열의 합(양끝항 공식으로 n)」 2
- 그림: 없음 · 서술형 2문(0851·0861) · 대표문제 10문(0836·0840·0844·0848·0852·0855·0858·0862·0865·0869)
- 답: 37문 모두 다시 풀어 전사본 answer 와 일치(전사 답 확인 필요 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없고, 아래는 통찰 인정 경계와 절차형 ★3 에 관한 판정 애매 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0842 | 나머지정리 한 번 차용을 XU d1 로 셌으나 공식 대입 수준이라 절차형으로 볼 수도 있음 — 카탈로그에서 「타 단원 공식 단순 차용」의 XU 인정 기준 결정 필요 | ★2 |
| RPM-ALG-0845 | 위와 같은 얕은 XU(삼차방정식 근과 계수 관계 한 번 차용) | ★2 |
| RPM-ALG-0855 | 연립(S_n=An²+Bn) vs 구간합 등차 두 풀이가 있으나 속도 차가 작아 SC 를 세지 않음 — 「구간합 등차 성질」을 별도 유형 또는 전략 축으로 세울지 결정 | ★2 |
| RPM-ALG-0857 | 0855 와 같은 두 풀이(연립 vs 등거리 항 합 a_6+a_15 = a_1+a_20 = S_20/10) — 지름길을 SYM 또는 SC d1 로 셀지 결정 | ★2 |
| RPM-ALG-0861 | 통찰 없는 절차형(유형 08 + 유형 10 연결)인데 M_total 7 로 상중·서술형 출발점 ★3 유지 — 카탈로그 base ★ 가 2 로 잡히면 ★2 후보 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **삽입 등차수열 통합**: 유형 04(0836~0839)와 유형 08(0852~0854), 그리고 0861 의 앞부분은 모두 「양끝 고정 · 항 수 n+2 · d = (끝−처음)/(n+1)」 한 골조다. 카탈로그에서는 「삽입 등차수열」 하나로 세우고 「공차·특정 항」「합」「정수 공차·약수 조건(0839·0854)」을 변형 축으로 두면 된다. 약수 조건 변형(EQV d1)이 이 유형의 ★3 진입로.
- **등차중항(유형 05)과 등차를 이루는 수(유형 06)**: 0840·0841 과 0844·0846 은 「대칭 설정(a±d · a±d, a±3d)」으로 통합 가능. 0842(나머지정리)·0843(로그)·0845(삼차방정식 근)·0847(직각삼각형)은 같은 골조에 타 단원 조건을 붙인 XU/RT 변형 축이므로 별도 유형이 아니라 「결합 조건」 태그로 관리.
- **합 공식(유형 07)**: 0848~0850 은 「a_1, d(또는 a_1, a_n) 결정 → S_n 식 → n 의 방정식/부등식」. 0851(절댓값 합)은 유형 10 의 부호 전환과 같은 뿌리이므로 「부호 전환 항」 유형 아래 「절댓값 합」 하위 변형으로 두는 편이 자연스럽다.
- **부분합(유형 09)**: 「S_n = An² + Bn 연립」과 「구간합 등차(S_10, S_20−S_10, S_30−S_20)」 두 도구를 한 유형 안 전략 축으로 기록. 0856 처럼 첫째항이 주어지면 ★1 로 내려가는 단순 케이스도 같은 유형.
- **합의 최대·최소(유형 10)**: 이 범위 최다(4문). 「a_n 부호 전환」과 「S_n 이차함수 꼭짓점」 두 풀이를 함께 기록하고, 0860 형(최대 위치 → 정수 공차 역산 · BW)과 0861 형(삽입 수열 복합)을 ★2~3 변형 축으로.
- **나머지가 같은 수의 합(유형 11)**: 「단일 나머지(0862)」·「합집합 포함·배제(0863)」·「연립 나머지 · 공차 = lcm(0864)」 세 하위 유형이 뚜렷하므로 카탈로그에서는 셋을 구분해 두는 것이 변형에 유리.
- **S_n 과 a_n(유형 12)**: 「S_n → a_n 계산(0865·0866·0868)」과 「첫째항부터 등차 조건 ⇔ 상수항 0(0867)」 둘로. 상수항 유무가 T-경계 함정의 스위치라는 점을 유형 설명에 명시.
- **등비수열 일반항(유형 13)**: 이 범위에 4문뿐이라 다음 조각(08-p3 의 유형 14 이후)과 합쳐서 결정. 0872 형(켤레 무리수 · 곱이 1)은 등비 일반항 안의 계산 변형 축.
