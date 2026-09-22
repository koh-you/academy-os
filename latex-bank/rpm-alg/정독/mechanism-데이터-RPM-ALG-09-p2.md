---
name: mechanism-데이터-RPM-ALG-09-p2
description: RPM 대수 09 수열의 합(2/3 · 유형 03~11) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 09 수열의 합
  unit_code: ALG-09
  part: "2/3"
  extract_range: "133~137쪽 · 0980~1012"
  total_problems: 33
  unit_total: 104
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 09 수열의 합 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 09 수열의 합 단원(총 104문) 가운데 133~137쪽의 유형 03~11 구역 33문(0980~1012)을 다룬다. 전부 「유형 NN」 구역이며 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 난이도 「중하」「중」「상중」이 붙어 있고 「서술형」 태그가 두 문항(0995 · 1005)에 있다. 유형 UP·시험에 꼭 나오는 문제·서술형 주관식·실력 Up 구역은 이 범위에 없다. 그림은 1009 한 문항(`crop:fig-1009.png`).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조 한 줄) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조 유지 변형과 ★ 변동 지점)를 채웠다. 단원 성격상 대부분이 「일반항 정리 → ∑ 공식 또는 소거」 절차형이며, 통찰 라벨은 표현 전환(RT)·조건 변환(EQV)·타 단원 도구 결합(XU)이 풀이 시작을 여는 문항에만 depth 1 로 붙였다.

## 문항 데이터

### 유형 03 $\sum\limits_{k=1}^{n} r^k$의 꼴의 계산

```yaml
- id: RPM-ALG-0980
  page: 133
  vendor_label: '유형 03 $\sum\limits_{k=1}^{n} r^k$의 꼴의 계산'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑_{k=1}^{12} (5^k+3^k)/4^k 를 a(5/4)^12 + b(3/4)^12 + c 꼴로 나타낼 때 정수 a+b+c 의 값. 5지선다.
  category: "합을 두 등비수열로 분리 → 각각 등비합 공식 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ r^k 꼴의 계산(등비수열의 합 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (5/4)^k 와 (3/4)^k 두 등비수열로 나누면 각각 5{(5/4)^12−1}, 3{1−(3/4)^12}. 정리하면 5(5/4)^12 − 3(3/4)^12 − 2 → (a,b,c)=(5,−3,−2), a+b+c=0. 등비합 공식 두 번과 부호 정리가 전부인 절차형. 대표문제 출발·통찰 없음·M 6 → ★2.
  tier: star_2
  mechanism_primary: "분자 분리 (5/4)^k+(3/4)^k → 등비합 공식 두 번 → 5(5/4)^12−3(3/4)^12−2 → 계수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0980.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 조합 (5,3,4)·상한 12 는 자유(예: (7^k+2^k)/5^k · n=10). 제약: 두 공비가 1 이 아니어야 하고 계수 a,b,c 가 정수로 정리돼야 함 — r/(r−1) 이 정수가 되게 분모 밑 = 분자 밑 ± 1 로 두는 것이 안전."
    creative: "(1) 계수 대신 합의 값 자체를 묻기(★1~2) (2) ∑(2^k−3^k)/6^k 처럼 (1/3)^k−(1/2)^k 로 갈라져 부호가 섞이면 T-부호 추가(★2) (3) 상한을 n 으로 두고 a,b,c 가 n 에 무관한 상수임을 찾게 하면 Mₐ 상승(★2~3)."
```

```yaml
- id: RPM-ALG-0981
  page: 133
  vendor_label: '유형 03 $\sum\limits_{k=1}^{n} r^k$의 꼴의 계산'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일반항 a_n = 2^{-n} cos nπ 인 수열의 ∑_{k=1}^{10} a_k 의 값. 5지선다(등비합 꼴 보기).
  category: "cos nπ = (−1)^n 인식 → 공비 −1/2 등비수열 → 등비합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos nπ 를 (−1)^n 으로 읽어 a_n = (−1/2)^n 등비수열로 옮겨야 합 공식이 적용됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∑ r^k 꼴의 계산(등비수열의 합 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos nπ 가 n 의 홀짝에 따라 ∓1 이므로 a_n = (−1/2)^n. 첫째항 −1/2·공비 −1/2 등비합 = (−1/2){1−(1/2)^10}/(3/2) = −(1/3){1−(1/2)^10}. 삼각 표현을 부호 수열로 옮기는 전환 한 번(RT d1) 뒤는 공식·부호 정리(T-부호). 유형 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "cos nπ=(−1)^n → a_n=(−1/2)^n → 등비합 → −(1/3){1−(1/2)^10}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0981.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 (→ 3·4)·항 수 10 자유. cos nπ 를 유지하는 한 공비는 −1/밑. 제약: 보기가 1−(1/밑)^n 꼴로 정리되게 밑>1 유지, 첫째항 부호(−) 를 보기에 반영."
    creative: "(1) cos nπ 대신 (−1)^{n+1} 로 주면 RT 없어짐(★1~2) (2) cos(nπ/2) 로 바꾸면 주기 4 로 0 이 섞여 항 분류 필요(I-MI d1 · ★3) (3) 합 대신 ∑a_k 가 특정 값이 되는 n 을 묻기(지수방정식 · ★2)."
```

```yaml
- id: RPM-ALG-0982
  page: 133
  vendor_label: '유형 03 $\sum\limits_{k=1}^{n} r^k$의 꼴의 계산'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등비수열 1, 2, 2², … 의 첫째항부터 제k항까지의 합 S_k 에 대해 ∑_{k=1}^{n} S_k = a·2^n + bn + c 일 때 정수 a, b, c 의 곱 abc.
  category: "S_k = 2^k − 1 → ∑ 분리 → 등비합 + 상수합 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ r^k 꼴의 계산(등비수열의 합 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_k = 2^k − 1. ∑(2^k − 1) = (2^{n+1} − 2) − n = 2·2^n − n − 2 → (a,b,c)=(2,−1,−2), abc = 4. 등비합을 두 번 겹쳐 쓰고 상수항을 빼는 절차형·부호 함정 1개. 유형 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "S_k=2^k−1 → ∑(2^k−1) = 2^{n+1}−2−n → (a,b,c)=(2,−1,−2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0982.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·상한 n·묻는 값(abc → a+b+c) 자유. 제약: 공비를 3 으로 바꾸면 S_k = (3^k−1)/2 라 a=3/4 가 되어 '정수 a,b,c' 조건이 깨짐 — 공비 2 유지 또는 첫째항을 (r−1) 배로 조정."
    creative: "(1) S_k 대신 부분합의 부분합 없이 ∑ 2^k 만 묻기(★1) (2) ∑S_k 가 특정 값이 되는 n 을 묻기(지수방정식 · ★2) (3) 등차수열의 S_k 를 다시 ∑ 하면 거듭제곱의 합 유형으로 이동(★2)."
```

### 유형 04 $\sum$와 등차수열, 등비수열

```yaml
- id: RPM-ALG-0983
  page: 133
  vendor_label: '유형 04 $\sum$와 등차수열, 등비수열'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등차수열에서 a_3 = 2, a_7 = 18 일 때 ∑_{k=1}^{10} a_k 의 값. 5지선다.
  category: "두 항 → 공차·첫째항 → 등차수열 합 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 와 등차·등비수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_7 − a_3 = 4d = 16 → d = 4, a_1 = −6. S_10 = 10(−12+36)/2 = 120. 공차 결정 뒤 합 공식 한 번인 교과서급 절차. 대표문제 출발 ★2 이나 통찰 0·M 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "a_7−a_3=4d → d=4, a_1=−6 → S_10 공식 → 120"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0983.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 번호(3·7)와 값·합의 상한 10 자유. 제약: (a_7−a_3) 이 번호 차의 배수가 되게 해 공차를 정수로 유지하고 보기 간격(10)에 맞게 답 재계산."
    creative: "(1) a_3 + a_7 처럼 합 조건 하나만 주고 ∑_{1}^{9} 를 묻기(등차중항 a_5 · I-EQV d1 · ★2) (2) 두 항 대신 S_3, S_7 을 주기(연립 · ★2) (3) 합이 최대가 되는 n 을 묻기(부호 전환점 · ★2~3)."
```

```yaml
- id: RPM-ALG-0984
  page: 133
  vendor_label: '유형 04 $\sum$와 등차수열, 등비수열'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 항이 양수인 등비수열에서 a_1a_4 = 8, a_3a_6 = 128 일 때 ∑_{k=1}^{n} a_k = 511 이 되는 자연수 n.
  category: "두 곱 조건 → r^4 → 공비·첫째항 → 등비합 = 511 → 지수방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 와 등차·등비수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_1a_4 = a_1²r³ = 8, a_3a_6 = a_1²r⁷ = 128 → 나누면 r⁴ = 16, 양수 조건으로 r = 2, a_1 = 1. S_n = 2^n − 1 = 511 → n = 9. 곱 조건을 나눠 공비를 먼저 얻는 것이 편하지만 표준 절차 범위. 양수 조건(T-부호) 1개. 유형 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "a_3a_6/a_1a_4 = r^4 → r=2, a_1=1 → 2^n−1=511 → n=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0984.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱 조건의 항 번호 조합(1·4, 3·6 → 2·5, 4·7)과 값·목표합(511 = 2^9−1) 자유. 제약: r 이 양의 정수(2·3)로 떨어지고 목표합이 a_1(r^n−1)/(r−1) 꼴의 값이어야 n 이 자연수."
    creative: "(1) '모든 항이 양수' 를 빼면 r = −2 도 가능해져 두 경우 검토(I-MI d1 · ★3) (2) 등식 대신 ∑a_k > 500 이 되는 최소 n(부등식 · ★2) (3) 곱 조건 대신 a_2 + a_5 같은 합 조건으로 주면 인수분해가 필요(★2~3)."
```

```yaml
- id: RPM-ALG-0985
  page: 133
  vendor_label: '유형 04 $\sum$와 등차수열, 등비수열'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항이 3인 등차수열에서 a_8 − a_2 = 12 일 때 ∑_{k=11}^{20} a_k 의 값. 5지선다.
  category: "공차 결정 → 일반항 → 부분 범위 합(S_20 − S_10 또는 10항 직접 합)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 와 등차·등비수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6d = 12 → d = 2, a_n = 2n+1. 11~20항은 a_11 = 23, a_20 = 41 인 10항 등차합 = 320. 시작 번호 11 의 처리(T-범위)가 유일한 함정. 유형 중·M 5 → −1 후보이나 범위 함정을 고려해 ★2 유지.
  tier: star_2
  mechanism_primary: "a_8−a_2=6d → a_n=2n+1 → ∑_{11}^{20} = 10(a_11+a_20)/2 → 320"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0985.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·차 조건(a_8−a_2)·범위(11~20 → 21~40) 자유. 제약: 번호 차가 공차 정수를 만들고 범위 길이·공차가 보기 간격(4)으로 답을 구분하게 조정."
    creative: "(1) S_20 − S_10 경로와 10항 직접 합 경로의 택일(I-SC 약함 · ★2) (2) 짝수 번째 항만 더하기 ∑a_{2k}(부분수열도 등차 · ★2) (3) |a_k| 의 합으로 바꿔 부호 전환점 분석을 넣으면 I-MI d1 (★3)."
```

### 유형 05 자연수의 거듭제곱의 합

```yaml
- id: RPM-ALG-0986
  page: 134
  vendor_label: "유형 05 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑_{k=1}^{10}(2k−1)² + ∑_{k=1}^{10}(2k)² 의 값.
  category: "두 ∑ 를 전개해 합치거나 1²~20² 로 재해석 → 거듭제곱의 합 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 8∑k² − 4∑k + 10 = 3080 − 220 + 10 = 2870. 홀수²와 짝수² 를 합쳐 1²+…+20² = 20·21·41/6 으로 보면 한 줄이지만 전개 경로도 막힘없이 통하므로 통찰로 세지 않음. 대표문제·M 5 → ★2.
  tier: star_2
  mechanism_primary: "(2k−1)²+(2k)² 전개 → 8∑k²−4∑k+10 (또는 ∑_{1}^{20} j²) → 2870"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2870$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0986.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 10 (→ 12·15)·거듭제곱 차수(² → ³) 자유. 제약: 두 ∑ 의 상한이 같아야 홀·짝 합치기가 성립하고 답이 네 자리 이내."
    creative: "(1) ∑(2k−1)² 만 묻기(★2) (2) 두 ∑ 의 차로 바꾸면 항이 4k−1 로 정리돼 더 쉬움(★1~2) (3) 상한을 100 처럼 크게 주어 홀·짝을 합쳐 1²+…+200² 로 보게 강제하면 I-CON d1 (★3)."
```

```yaml
- id: RPM-ALG-0987
  page: 134
  vendor_label: "유형 05 자연수의 거듭제곱의 합"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=2}^{n}(2k−1) = 80 을 만족시키는 자연수 n (n ≥ 2).
  category: "시작 번호 2 → 전체 합 n² 에서 첫 항 제외 → n² − 1 = 80"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∑_{k=1}^{n}(2k−1) = n² 에서 k=1 항 1 을 빼면 n² − 1 = 80 → n = 9. 하한 2 (T-범위) 만 조심하면 한 줄. 유형 중하·통찰 0·M 4 → ★1.
  tier: star_1
  mechanism_primary: "∑_{2}^{n}(2k−1) = n²−1 → n²=81 → n=9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0987.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(2 → 3)·목표값(80)·일반항(2k−1 → 2k+1) 자유. 제약: 목표값 + 제외한 앞항의 합이 완전제곱수(또는 이차방정식이 자연수해)가 되게 역산."
    creative: "(1) ∑_{k=m}^{20}(2k−1) = 값 으로 하한 m 을 묻기(★2) (2) 등식 대신 합이 80 이하인 최대 n(부등식 · ★2) (3) 일반항을 k² 로 바꾸면 삼차식 인수분해가 필요(★2~3)."
```

```yaml
- id: RPM-ALG-0988
  page: 134
  vendor_label: "유형 05 자연수의 거듭제곱의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{20} (1+2+…+k)/(k+1) 의 값.
  category: "분자를 k(k+1)/2 로 정리 → (k+1) 약분 → ∑ k/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 = k(k+1)/2 이므로 항은 k/2. ∑_{1}^{20} k/2 = 210/2 = 105. 공식 대입 후 약분이 전부인 절차. 벤더 「중」이나 통찰 0·M 4 → −1 → ★1(1단 차이 기록).
  tier: star_1
  mechanism_primary: "1+…+k = k(k+1)/2 → 항 = k/2 → 210/2 = 105"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$105$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0988.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 20·분모 (k+1) (→ k·2k+2) 자유. 제약: 약분 뒤 단순 다항식이 돼야 함 — 분모를 k+2 로 바꾸면 약분되지 않아 다른 유형(부분분수)이 됨."
    creative: "(1) 분자를 1²+…+k² 로, 분모를 2k+1 로 두면 약분 뒤 k(k+1)/6 (★2) (2) 분자 1+…+k 를 분모로 옮기면 2/(k(k+1)) 부분분수 소거 유형(★2) (3) 분모를 (k+1)(k+2) 로 두면 k/(2(k+2)) 라 닫히지 않음 — 잘못된 변형 주의."
```

```yaml
- id: RPM-ALG-0989
  page: 134
  vendor_label: "유형 05 자연수의 거듭제곱의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{11}(k−c)(2k−c) 의 값이 최소가 되도록 하는 상수 c. 5지선다.
  category: "전개 → 거듭제곱의 합 공식 → c 의 이차함수 → 꼭짓점"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∑ 의 값을 상수 c 의 이차식 11c²−198c+1012 로 보고 최소 문제를 꼭짓점 찾기로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∑ 의 값을 상수의 이차함수로 보고 최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (k−c)(2k−c) = 2k² − 3ck + c². 합은 2·506 − 3c·66 + 11c² = 11c² − 198c + 1012, 최소는 c = 198/22 = 9. ∑ 를 상수 c 의 이차함수로 읽는 전환 하나(RT d1) 뒤는 공식·꼭짓점. 유형 중·M 7 → ★2.
  tier: star_2
  mechanism_primary: "전개 2k²−3ck+c² → ∑ 공식 → 11c²−198c+1012 → 꼭짓점 c=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0989.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 11·인수 (k−c)(2k−c) 의 계수 자유. 제약: 꼭짓점 c = 3∑k/(2n) = 3(n+1)/4 이 보기와 맞는 값(정수·반정수)이 되게 상한 n 을 고름(n = 11 → 9, n = 7 → 6)."
    creative: "(1) 최솟값 자체를 묻기(★2) (2) ∑(k−c)² 로 단순화하면 평균 개념과 연결(★2) (3) c 를 자연수로 제한하고 꼭짓점이 정수가 아니게 상한을 잡으면 양쪽 값 비교(I-VF d1 · ★3)."
```

### 유형 06 $\sum$를 이용한 여러 가지 수열의 합

```yaml
- id: RPM-ALG-0990
  page: 134
  vendor_label: '유형 06 $\sum$를 이용한 여러 가지 수열의 합'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수열 1²×2, 2²×3, 3²×4, 4²×5, … 의 첫째항부터 제10항까지의 합.
  category: "일반항 k²(k+1) → k³ + k² → 거듭제곱의 합 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항을 찾아 ∑ 로 계산하는 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_k = k²(k+1) = k³ + k². ∑_{1}^{10} = 55² + 385 = 3410. 항의 규칙에서 일반항을 읽고 공식 두 개를 쓰는 절차. 대표문제·M 5 → ★2.
  tier: star_2
  mechanism_primary: "a_k = k²(k+1) → ∑k³+∑k² → 3025+385 → 3410"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3410$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0990.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 10·일반항의 인수(k²(k+1) → k(k+1)²·k(k+2)) 자유. 제약: 전개가 3차 이하로 유지되고 답이 네 자리 안팎, 첫 네 항만으로 규칙이 유일하게 읽히도록 표기."
    creative: "(1) 합이 특정 값이 되는 항 수를 묻기(역산 · ★2) (2) 일반항을 k(k+1)(k+2) 로 두면 ∑ 공식 경로와 소거 공식 (1/4)k(k+1)(k+2)(k+3) 경로의 분기(I-SC d1 · ★3) (3) 항의 규칙을 세 항만 주고 일반항 추정부터 요구(I-PD d1 · ★2)."
```

```yaml
- id: RPM-ALG-0991
  page: 134
  vendor_label: '유형 06 $\sum$를 이용한 여러 가지 수열의 합'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    6 + 7 + 8 + … + n = 105 를 만족시키는 자연수 n. 5지선다.
  category: "1~n 합에서 1~5 합 제외 → n(n+1)/2 − 15 = 105 → 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항을 찾아 ∑ 로 계산하는 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n(n+1)/2 − 15 = 105 → n(n+1) = 240 → n = 15 (음근 −16 기각). 시작 항 6 의 처리(T-범위)와 이차방정식 인수분해. 등차합 공식 (n−5)(n+6)/2 로 직접 세워도 같은 방정식. 유형 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "n(n+1)/2 − 15 = 105 → n²+n−240=0 → n=15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0991.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 항 6·목표 105 자유. 제약: n(n+1) = 2(목표 + 시작 이전 합)이 연속 정수 곱이 되게 목표값을 역산(예: 시작 4, n = 20 → 목표 204)."
    creative: "(1) 전체−앞부분 경로와 등차합 공식 직접 경로의 택일(I-SC 약함 · ★2) (2) 6 + 8 + 10 + … + n 처럼 짝수만 더하면 항 수 계산이 추가(★2) (3) 합이 105 를 처음 넘는 n(부등식 · ★2)."
```

```yaml
- id: RPM-ALG-0992
  page: 134
  vendor_label: '유형 06 $\sum$를 이용한 여러 가지 수열의 합'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1×20 + 2×19 + 3×18 + … + 20×1 의 값. 5지선다.
  category: "일반항 k(21−k) → 21∑k − ∑k² → 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항을 찾아 ∑ 로 계산하는 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 번째 항은 k(21−k). ∑_{1}^{20}(21k − k²) = 21·210 − 2870 = 1540. 두 인수의 합이 21 로 일정하다는 관찰이 곧 일반항이고 뒤는 공식. 유형 중·M 5 → ★2.
  tier: star_2
  mechanism_primary: "a_k = k(21−k) → 21∑k − ∑k² → 4410−2870 → 1540"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0992.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 20 (→ 10·30: 일반항 k(n+1−k))·인수 관계(합 일정 → 차 일정 k(k+2)) 자유. 제약: 답이 보기 간격(20)으로 구분되게 재계산."
    creative: "(1) 1×n + 2×(n−1) + … + n×1 을 n 의 식으로(Mₐ 상승 · ★2) (2) 1×2 + 2×3 + … 이웃 곱으로 바꾸면 ∑ 공식과 소거 공식의 전략 분기(★2) (3) 항의 배치를 표·그림으로 주고 일반항을 읽게(I-PD d1 · ★2)."
```

```yaml
- id: RPM-ALG-0993
  page: 134
  vendor_label: '유형 06 $\sum$를 이용한 여러 가지 수열의 합'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수열 2, 2+4, 2+4+6, 2+4+6+8, … 의 첫째항부터 제12항까지의 합.
  category: "a_n = 2+4+…+2n = n(n+1) → ∑(k² + k) → 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항을 찾아 ∑ 로 계산하는 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = 2(1+…+n) = n(n+1). ∑_{1}^{12}(k² + k) = 650 + 78 = 728. 안쪽 합을 일반항으로 닫은 뒤 공식 두 개 — 0990 과 같은 골조. 벤더 「상중」이나 통찰 0·M 5 → −1 → ★2.
    [분류 이슈] 상중 라벨 대비 절차형 M 5 — 후보 ★2/★3, 라벨은 ★2 로 둠.
  tier: star_2
  mechanism_primary: "a_n = n(n+1) → ∑k²+∑k → 650+78 → 728"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$728$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0993.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 등차수열(2,4,6 → 1,3,5: a_n = n²)·바깥 항 수 12 자유. 제약: 안쪽 합이 n 의 이차식으로 닫혀야 하고 답이 세~네 자리."
    creative: "(1) 안쪽을 등비(1, 1+2, 1+2+4, …)로 바꾸면 a_n = 2^n − 1 → 등비합 + 상수(유형 03 이동 · ★2) (2) 바깥 합이 특정 값이 되는 항 수를 묻기(삼차 → 연속 정수 곱 · ★3) (3) 군수열처럼 특정 항의 번호를 물으면 I-PD d1 (★3)."
```

### 유형 07 $\sum$로 표현된 수열의 합과 일반항 사이의 관계

```yaml
- id: RPM-ALG-0994
  page: 135
  vendor_label: '유형 07 $\sum$로 표현된 수열의 합과 일반항 사이의 관계'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑_{k=1}^{n} a_k = n² 일 때 ∑_{k=1}^{5} a_k² 의 값. 5지선다.
  category: "S_n − S_{n−1} → a_n = 2n−1 (a_1 확인) → 제곱의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 로 주어진 S_n 에서 a_n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = n² − (n−1)² = 2n−1 (n ≥ 2), a_1 = 1 도 일치. ∑_{1}^{5}(2k−1)² = 1+9+25+49+81 = 165. a_1 경계 확인(T-경계)이 있는 표준 절차. 대표문제·M 5 → ★2.
  tier: star_2
  mechanism_primary: "S_n=n² → a_n=2n−1 → ∑_{1}^{5}(2k−1)² → 165"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0994.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n (n² → n²+n·2n²−n)·묻는 합의 상한과 꼴(a_k² → a_k a_{k+1}) 자유. 제약: a_1 = S_1 이 일반식과 맞는지 확인 — S_n 에 상수항이 있으면 a_1 이 규칙에서 벗어나 함정이 하나 늘어남."
    creative: "(1) S_n = n² + 1 로 두면 a_1 이 규칙 밖 → T-경계 강화(★2~3) (2) ∑a_{2k} 같은 부분수열 합(★2) (3) a_n 의 역수 곱 합으로 이어 유형 09 와 결합(★2~3)."
```

```yaml
- id: RPM-ALG-0995
  page: 135
  vendor_label: '유형 07 $\sum$로 표현된 수열의 합과 일반항 사이의 관계'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∑_{k=1}^{n} a_k = n/(n+1) 일 때 ∑_{k=1}^{9} 1/a_k 의 값.
  category: "S_n − S_{n−1} 분수 정리 → a_n = 1/(n(n+1)) → 역수 합 ∑k(k+1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 로 주어진 S_n 에서 a_n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = n/(n+1) − (n−1)/n = 1/(n(n+1)) (n ≥ 2), a_1 = 1/2 도 일치. 1/a_k = k(k+1) 이므로 ∑_{1}^{9} = 285 + 45 = 330. 분수 차 정리(Mₖ)와 a_1 확인이 있는 절차. 유형 중·서술형 태그·M 6 → ★2.
  tier: star_2
  mechanism_primary: "S_n=n/(n+1) → a_n=1/(n(n+1)) → ∑k(k+1) = 285+45 → 330"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$330$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0995.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n (n/(n+1) → n/(2n+1)·2n/(n+2))·상한 9 자유. 제약: S_n − S_{n−1} 이 분자가 상수인 분수로 정리되는 유리식을 고르고 a_1 = S_1 일치 확인."
    creative: "(1) ∑ a_k a_{k+1} 로 바꾸면 부분분수 소거가 추가(★3) (2) S_n 을 log 꼴로 주면 유형 11 이동(★3) (3) 서술형에서 a_1 경계 확인을 채점 요소로 명시(★2)."
```

```yaml
- id: RPM-ALG-0996
  page: 135
  vendor_label: '유형 07 $\sum$로 표현된 수열의 합과 일반항 사이의 관계'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{n} a_k = 2^{n+1} − 2 일 때 ∑_{k=1}^{n} a_{3k} 를 n 의 식으로 나타내기. 5지선다.
  category: "S_n − S_{n−1} → a_n = 2^n → a_{3k} = 8^k → 등비합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 로 주어진 S_n 에서 a_n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = 2^{n+1} − 2^n = 2^n (n ≥ 2), a_1 = 2 일치. a_{3k} = 8^k 이므로 ∑_{1}^{n} 8^k = 8(8^n − 1)/7. 부분수열도 등비임을 쓰는 표준 절차·매개변수 n 으로 Mₐ 2. 유형 중·M 7 → ★2.
  tier: star_2
  mechanism_primary: "S_n=2^{n+1}−2 → a_n=2^n → a_{3k}=8^k → 8(8^n−1)/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0996.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 밑 2 (→ 3: S_n = (3^{n+1}−3)/2)·부분수열 간격 3 (→ 2·4) 자유. 제약: S_n − S_{n−1} 이 순수 등비 a_n 으로 떨어지게 S_n = c(r^n − 1) 꼴 유지, 보기 분모는 r^간격 − 1."
    creative: "(1) a_{3k−1} 처럼 위상을 옮긴 부분수열(★2) (2) ∑a_{3k} 가 특정 값이 되는 n(지수방정식 · ★2) (3) S_n = 2^{n+1} − 1 로 상수항을 바꾸면 a_1 ≠ 2 → 경계 함정(★3)."
```

```yaml
- id: RPM-ALG-0997
  page: 135
  vendor_label: '유형 07 $\sum$로 표현된 수열의 합과 일반항 사이의 관계'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1, a_2, …, a_n 의 평균이 n+1 일 때 ∑_{k=1}^{10} k a_k 의 값. 5지선다.
  category: "평균 조건 → S_n = n(n+1) → a_n = 2n → ∑ 2k²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균 n+1 을 부분합 S_n = n(n+1) 로 바꿔야 S_n − S_{n−1} 절차가 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∑ 로 주어진 S_n 에서 a_n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균 = S_n/n = n+1 → S_n = n(n+1) → a_n = 2n (a_1 = 2 일치). ∑_{1}^{10} k·2k = 2·385 = 770. 평균을 부분합으로 되읽는 조건 변환(EQV d1) 뒤 표준 절차. 유형 중·M 5 → ★2.
  tier: star_2
  mechanism_primary: "평균 n+1 → S_n=n(n+1) → a_n=2n → 2∑k² → 770"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0997.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균식(n+1 → 2n+1·n²)·묻는 합(k a_k → a_k²)·상한 10 자유. 제약: S_n = n × 평균이 다항식이 되고 a_1 = S_1 일치, 답이 보기 간격(10)에 맞게."
    creative: "(1) 평균 대신 분산 같은 통계량으로 감싸면 XU 결합(★3~4) (2) 평균을 (n+1)/2 로 주면 a_n = n 이라 ★1~2 (3) 짝수 항의 평균만 주기(부분수열 · I-EQV d2 · ★3)."
```

### 유형 08 $\sum$를 여러 개 포함한 식의 계산

```yaml
- id: RPM-ALG-0998
  page: 135
  vendor_label: '유형 08 $\sum$를 여러 개 포함한 식의 계산'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑_{l=1}^{n}(∑_{k=1}^{l} k) = 35 를 만족시키는 자연수 n.
  category: "안쪽 합 l(l+1)/2 → 바깥 ∑ 공식 → n(n+1)(n+2)/6 = 35"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 를 여러 개 포함한 식의 계산(이중 ∑)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 = l(l+1)/2. 바깥 = (1/2)(∑l² + ∑l) = n(n+1)(n+2)/6 = 35 → n(n+1)(n+2) = 210 = 5·6·7 → n = 5. 이중 ∑ 를 안쪽부터 닫고 연속 정수 곱으로 푸는 표준 골조. 대표문제·M 7 → ★2.
  tier: star_2
  mechanism_primary: "안쪽 l(l+1)/2 → n(n+1)(n+2)/6 = 35 → 210 = 5·6·7 → n=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0998.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표값 35 (→ 56 (n=6)·84 (n=7): 삼각뿔수)·안쪽 일반항(k → 2k−1: 안쪽 l²) 자유. 제약: 목표가 n(n+1)(n+2)/6 꼴의 값이어야 자연수해."
    creative: "(1) 목표가 작을 때 누적합 1, 4, 10, 20, 35 를 직접 세는 길과 닫힌 식 길의 분기(I-SC d1 · ★2) (2) 안쪽 상한을 n−l+1 로 뒤집어 대칭 활용(I-SYM d1 · ★3) (3) 삼중 ∑ 로 한 겹 더(★3)."
```

```yaml
- id: RPM-ALG-0999
  page: 135
  vendor_label: '유형 08 $\sum$를 여러 개 포함한 식의 계산'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{i=1}^{10}(∑_{k=1}^{5} i²k) 의 값. 5지선다.
  category: "안쪽에서 i² 은 상수 → 15i² → 바깥 ∑i² → 385·15"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 를 여러 개 포함한 식의 계산(이중 ∑)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 ∑_{k=1}^{5} i²k = 15i². 바깥 15∑i² = 15·385 = 5775. 변수 분리 (∑i²)(∑k) 로 곱 구조를 보는 것이 핵심이나 유형 08 의 표준 절차. 안쪽에서 i 를 상수로 보는 표기 함정(T-표기). 유형 중·M 5 → ★2.
  tier: star_2
  mechanism_primary: "안쪽 i² 상수 → 15i² → 15·∑_{1}^{10} i² → 5775"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0999.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 (10, 5)·일반항 i²k (→ ik²·i(k+1)) 자유. 제약: 두 변수의 곱으로 분리되는 꼴이어야 곱 구조가 유지되고 답이 보기 간격과 맞음."
    creative: "(1) 일반항을 i + k 로 바꾸면 분리가 안 돼 안쪽부터 계산(★2) (2) 안쪽 상한을 i 로 바꾸면(∑_{k=1}^{i}) 삼차 합(★2~3) (3) ∑∑ik = (∑i)(∑k) 로 되돌리는 표현 전환 자체를 묻기(I-RT d1 · ★2)."
```

```yaml
- id: RPM-ALG-1000
  page: 135
  vendor_label: '유형 08 $\sum$를 여러 개 포함한 식의 계산'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{m=1}^{4}[∑_{l=1}^{m}{∑_{k=1}^{l}(2k−m+1)}] 의 값(삼중 ∑). 5지선다.
  category: "안쪽부터 m 을 상수로 닫기 → l² + (2−m)l → 가운데 ∑ 공식 → m 별 값의 합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑ 를 여러 개 포함한 식의 계산(이중 ∑)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 ∑(2k−m+1) = l(l+1) − (m−1)l = l² + (2−m)l. 가운데 ∑_{l=1}^{m} = m(m+1)(2m+1)/6 + (2−m)·m(m+1)/2. m = 1~4 를 넣으면 2, 5, 8, 10 → 25. 바깥 상한이 4 라 닫힌 식보다 m 별 대입이 빠르지만 어느 길이든 세 겹 계산이고 새 통찰은 없음. 유형 중 → ★2 유지.
    [분류 이슈] 절차형이지만 M 8(삼중 ∑·매개변수 m 두 겹) — 후보 ★2/★3, 계산량만으로 +1 하지 않고 ★2 로 둠.
  tier: star_2
  mechanism_primary: "안쪽 l²+(2−m)l → 가운데 ∑ 공식 → m=1..4 대입 2,5,8,10 → 25"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1000.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 상한 4 (→ 5·6)·안쪽 일반항 2k−m+1 (→ 2k−m·k+m) 자유. 제약: 바깥 상한이 작아야 m 별 대입 경로가 유지되고 답이 보기 간격(5)으로 구분됨."
    creative: "(1) 바깥 상한을 n 으로 두고 닫힌 식을 요구(Mₐ·Mₖ 상승 · ★3) (2) 안쪽 일반항에서 m 을 빼면 순수 삼각뿔수(0998 골조 · ★2) (3) 항을 m 행·l 열 표로 시각화해 규칙을 읽게 하면 I-PD d1 (★3)."
```

### 유형 09 분수의 꼴인 수열의 합

```yaml
- id: RPM-ALG-1001
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수열 1/(2²−1), 1/(4²−1), 1/(6²−1), … 의 첫째항부터 제10항까지의 합. 5지선다.
  category: "일반항 1/((2n−1)(2n+1)) → 부분분수 (1/2)(1/(2n−1) − 1/(2n+1)) → 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2n)² − 1 = (2n−1)(2n+1). 부분분수로 (1/2)(1/(2n−1) − 1/(2n+1)), 합은 (1/2)(1 − 1/21) = 10/21. 소거 합의 표준 골조. 대표문제·M 5 → ★2.
  tier: star_2
  mechanism_primary: "1/((2n−1)(2n+1)) = (1/2)(1/(2n−1) − 1/(2n+1)) → (1/2)(1−1/21) → 10/21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 (2n)²−1 (→ (3n)²−1: 인수 차 2 유지·(2n+1)²−1 = 2n(2n+2))·항 수 10 자유. 제약: 두 인수의 차가 상수라야 소거되고 부분분수 계수는 1/(인수 차)."
    creative: "(1) 합이 특정 값이 되는 항 수(역산 · ★2) (2) 분모 인수 차를 4 로 벌리면 두 항씩 남는 소거(T-범위 추가 · ★2~3) (3) 분자를 n 으로 바꾸면 부분분수 계수 결정이 미정계수법(★3)."
```

```yaml
- id: RPM-ALG-1002
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항식 x²+4x+3 을 x−n 으로 나눈 나머지가 a_n 일 때 ∑_{n=1}^{7} 1/a_n 의 값.
  category: "나머지정리 → a_n = (n+1)(n+3) → 부분분수(간격 2) → 두 항씩 남는 소거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나머지정리(다항식 단원)로 a_n = f(n) = (n+1)(n+3) 을 만들어야 수열의 합이 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나머지정리로 a_n = n² + 4n + 3 = (n+1)(n+3). 1/a_n = (1/2)(1/(n+1) − 1/(n+3)) 이고 n = 1~7 이면 (1/2)(1/2 + 1/3 − 1/9 − 1/10) = 14/45. 다항식 단원의 도구를 빌려 일반항을 만드는 결합(XU d1) 뒤 간격 2 소거. 유형 중·M 6 → ★2.
    [분류 이슈] XU 라벨은 대입 한 줄 수준이라 인정 여부는 카탈로그 설계 때 결정(라벨 ★ 에는 영향 없음).
  tier: star_2
  mechanism_primary: "나머지정리 a_n=(n+1)(n+3) → (1/2)(1/(n+1)−1/(n+3)) → 앞 둘·뒤 둘 남김 → 14/45"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{14}{45}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식(x²+4x+3 → x²+3x+2: 인수 차 1)·상한 7 자유. 제약: 다항식이 정수 인수분해되고 인수 차가 일정해야 소거, 남는 네 항의 합이 깔끔한 분수."
    creative: "(1) 나머지 대신 '이차방정식의 두 근의 합' 으로 a_n 을 만들면 1005 골조(★2) (2) x−2n 으로 나누면 인수 (2n+1)(2n+3) → 1001 골조(★2) (3) 나머지가 아니라 몫으로 정의하면 일차식 → 등차수열 합(★1~2)."
```

```yaml
- id: RPM-ALG-1003
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_n = 2n² + 3n 일 때 1/(a_1a_2) + 1/(a_2a_3) + … + 1/(a_5a_6) 의 값.
  category: "S_n → a_n = 4n+1 → 1/((4k+1)(4k+5)) 부분분수 → 소거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n = S_n − S_{n−1} = 4n + 1 (a_1 = 5 일치). 1/(a_k a_{k+1}) = (1/4)(1/(4k+1) − 1/(4k+5)), 합은 (1/4)(1/5 − 1/25) = 1/25. 유형 07 앞단과 유형 09 소거를 잇는 절차. 유형 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "S_n=2n²+3n → a_n=4n+1 → (1/4)(1/5 − 1/25) → 1/25"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n (2n²+3n → n²+2n: a_n = 2n+1)·항 수 5 자유. 제약: a_n 이 등차(일차)여야 이웃 곱의 역수가 부분분수로 떨어지고 계수 = 1/공차."
    creative: "(1) S_n 에 상수항을 넣어 a_1 예외를 만들기(T-경계 · ★3) (2) 1/(a_k a_{k+2}) 로 간격 2(★3) (3) 합이 1/25 가 되는 항 수를 묻기(★2)."
```

```yaml
- id: RPM-ALG-1004
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    자연수 정의역의 f(n) = 2n+1, g(n) = (n−1)(n+1) 에 대해 ∑_{n=1}^{11} 8/((g∘f)(n)) 의 값. 5지선다.
  category: "합성 g(f(n)) = 4n(n+1) → 2/(n(n+1)) 부분분수 → 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (g∘f)(n) = (2n)(2n+2) = 4n(n+1). 8/(4n(n+1)) = 2(1/n − 1/(n+1)), 합은 2(1 − 1/12) = 11/6. 합성함수 표기는 대입 한 번이라 절차로 봄. 유형 중·M 5 → ★2.
  tier: star_2
  mechanism_primary: "g(f(n))=4n(n+1) → 2(1/n−1/(n+1)) → 2(1−1/12) → 11/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 식(f = 2n+1·g = (n−1)(n+1) → f = n+1·g = n(n+2))·분자 8·상한 11 자유. 제약: 합성 결과가 인수 차 일정한 이차식이어야 소거되고 분자는 계수 정리용 배수."
    creative: "(1) f∘g 로 순서를 바꾸면 사차식이라 소거 불가 — 잘못된 변형 주의 (2) g 를 √ 로 바꾸면 유형 10 이동(★2) (3) 합성 대신 역함수 f^{-1} 로 정의하면 함수 단원 결합(I-XU d1 · ★3)."
```

```yaml
- id: RPM-ALG-1005
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이차방정식 x² + 4x − (2n−1)(2n+1) = 0 의 두 실근 α_n, β_n 에 대해 ∑_{n=1}^{15}(1/α_n + 1/β_n) 의 값.
  category: "근과 계수 관계 → (α+β)/(αβ) = 4/((2n−1)(2n+1)) → 부분분수 소거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근과 계수 관계(이차방정식 단원)로 α_n+β_n = −4, α_nβ_n = −(2n−1)(2n+1) 을 만들어 수열의 항으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β = −4, αβ = −(2n−1)(2n+1) 이므로 1/α + 1/β = 4/((2n−1)(2n+1)) = 2(1/(2n−1) − 1/(2n+1)). 합은 2(1 − 1/31) = 60/31. 부호 두 번(T-부호) 정리 뒤 소거. 이차방정식 도구 결합(XU d1). 유형 중·서술형·M 6 → ★2.
  tier: star_2
  mechanism_primary: "근과 계수 → 4/((2n−1)(2n+1)) → 2(1/(2n−1)−1/(2n+1)) → 2(1−1/31) → 60/31"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{60}{31}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 4·상수항 인수 (2n−1)(2n+1) (→ n(n+1))·상한 15 자유. 제약: 판별식 > 0 이 모든 n 에서 성립(상수항이 음수면 자동)·(α+β)/(αβ) 의 부호 정리."
    creative: "(1) 1/α² + 1/β² 를 물으면 (α+β)² − 2αβ 한 단계 추가(★3) (2) 근을 등차수열의 항으로 두는 역방향(I-BW d1 · ★3) (3) 서술형에서 실근 존재 확인을 서술 조건으로(★2~3)."
```

```yaml
- id: RPM-ALG-1006
  page: 136
  vendor_label: "유형 09 분수의 꼴인 수열의 합"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3/1² + 5/(1²+2²) + 7/(1²+2²+3²) + … + 27/(1²+…+13²) 의 값. 5지선다.
  category: "일반항 (2k+1)/∑i² → 공식 대입 → (2k+1) 약분 → 6/(k(k+1)) 소거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 1²+…+k² 를 k(k+1)(2k+1)/6 으로 바꾸면 분자 2k+1 이 약분되어 소거 가능한 6/(k(k+1)) 로 바뀜을 봐야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분분수 분해로 소거되는 분수 수열의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 번째 항 = (2k+1)/(k(k+1)(2k+1)/6) = 6/(k(k+1)) = 6(1/k − 1/(k+1)). k = 1~13 이면 6(1 − 1/14) = 39/7. 분모 공식과 분자의 약분 구조를 봐야 소거가 열림(EQV d1). 유형 상중·M 6 → ★3.
  tier: star_3
  mechanism_primary: "(2k+1)/(k(k+1)(2k+1)/6) = 6/(k(k+1)) → 6(1−1/14) → 39/7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 13 (→ 20: 6(1−1/21))·분자 2k+1 은 분모 공식의 인수와 일치해야 하므로 고정 권장. 제약: 분자를 k+1 로 바꾸면 6/(k(2k+1)) 이라 소거 불가."
    creative: "(1) 분모를 1+2+…+k 로 바꾸면 2/(k(k+1)) 로 더 쉬움(★2) (2) 분모를 1³+…+k³ 로 두고 분자 (k+1)² 이면 4/k² 라 닫히지 않음 — 변형 시 소거 여부 재검(★3) (3) 합이 특정 값이 되는 항 수를 묻기(★3)."
```

### 유형 10 무리식을 포함한 수열의 합

```yaml
- id: RPM-ALG-1007
  page: 137
  vendor_label: "유형 10 무리식을 포함한 수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_n = 1/(√(n+1) + √(n+2)) 인 수열의 첫째항부터 제k항까지의 합이 √2 일 때 자연수 k.
  category: "분모 유리화 → √(n+2) − √(n+1) → 소거 → √(k+2) − √2 = √2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 유리화로 소거되는 무리식 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리화하면 a_n = √(n+2) − √(n+1). 합 = √(k+2) − √2 = √2 → √(k+2) = 2√2 → k = 6. 유리화 후 소거·제곱 한 번. 대표문제·M 5 → ★2.
  tier: star_2
  mechanism_primary: "유리화 √(n+2)−√(n+1) → 합 √(k+2)−√2 = √2 → k+2 = 8 → k=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 오프셋 (n+1, n+2) (→ (n, n+1))·목표합 √2 (→ 2√2·3√2) 자유. 제약: √(k+2) = 목표 + √2 가 √(정수) 로 떨어지게 목표를 √2 의 정수배로 둠(목표 2 는 무리수 합이라 불가)."
    creative: "(1) 합의 값 자체를 묻기(★1~2) (2) 분모 간격 2 (√n + √(n+2)) 로 두 항씩 남기기(1008 골조 · ★2) (3) 합이 처음으로 3 을 넘는 k(부등식 · ★2)."
```

```yaml
- id: RPM-ALG-1008
  page: 137
  vendor_label: "유형 10 무리식을 포함한 수열의 합"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{80} 2/(√(k−1) + √(k+1)) 의 값. 5지선다.
  category: "유리화 → √(k+1) − √(k−1) → 간격 2 소거 → 남는 항 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 유리화로 소거되는 무리식 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리화하면 항 = √(k+1) − √(k−1). 두 칸 건너 소거되어 (√81 + √80) − (√0 + √1) = 9 + 4√5 − 1 = 8 + 4√5. 어느 항이 남는지(T-범위)와 √80 정리가 핵심. 유형 중하·M 6 → ★2.
  tier: star_2
  mechanism_primary: "유리화 √(k+1)−√(k−1) → 두 칸 소거 → (√81+√80)−(√0+√1) → 8+4√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 80 (→ 48: √49 + √48 = 7 + 4√3)·분자 2(= 인수 차) 고정. 제약: 상한 + 1 이 완전제곱수여야 정리되고 √상한 이 보기용 무리수로 남음."
    creative: "(1) 상한을 n 으로 두고 √(n+1) + √n − 1 을 식으로(Mₐ 상승 · ★2) (2) 간격 3 으로 늘려 세 항씩 남기기(★3) (3) 합이 유리수가 되는 상한 n 을 찾게 하면 √n·√(n+1) 동시 정수 불가 검토(I-VF d1 · ★3)."
```

```yaml
- id: RPM-ALG-1009
  page: 137
  vendor_label: "유형 10 무리식을 포함한 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 x = n 이 두 곡선 y = √(x+1), y = √x 와 만나는 점을 각각 A_n, B_n 이라 할 때 ∑_{n=1}^{120} (선분 A_nB_n 의 길이) 의 값. 그림 있음.
  category: "선분 길이 = 함수값 차 √(n+1) − √n → 소거 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 세로 선분 A_nB_n 을 두 함수값의 차 √(n+1) − √n 으로 옮겨야 합이 시작됨(기하 → 대수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분모 유리화로 소거되는 무리식 수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A_n(n, √(n+1)), B_n(n, √n) 이므로 A_nB_n = √(n+1) − √n. ∑_{1}^{120} = √121 − √1 = 10. 기하 → 대수 전환(RT d1) 뒤 소거 한 줄. 유형 중·M 4 → ★2(통찰이 있어 −1 미적용).
  tier: star_2
  mechanism_primary: "A_nB_n = √(n+1)−√n → 소거 → √121−1 → 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "답지"
  figure: "crop:fig-1009.png"
  latex: latex-bank/rpm-alg/items/1009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 120 (→ 상한 + 1 이 완전제곱: 63·80·99)·곡선 오프셋 (x+1, x) (→ (x+2, x): 간격 2 소거) 자유. 제약: 그림 라벨(A_n 위·B_n 아래·x = n·x 절편 −1, O)은 고정하고 곡선 식만 바꿈."
    creative: "(1) 선분 길이 대신 삼각형 OA_nB_n 의 넓이 합으로 바꾸면 n 이 곱해져 소거되지 않음 — 다른 유형 (2) 두 곡선을 y = log 꼴로 바꾸면 유형 11 이동(★2) (3) 합이 특정 값이 되는 n 을 묻기(★2)."
```

### 유형 11 로그를 포함한 수열의 합

```yaml
- id: RPM-ALG-1010
  page: 137
  vendor_label: "유형 11 로그를 포함한 수열의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    첫째항과 공비가 모두 3인 등비수열 {a_n} 에 대해 ∑_{k=1}^{20} log_9 a_k 의 값.
  category: "a_k = 3^k → log_9 3^k = k/2 → 등차합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 포함한 수열의 합(등비수열의 로그 → 등차합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_k = 3^k, log_9 3^k = k/2. ∑_{1}^{20} k/2 = 105. 로그 성질 한 번에 등차합. 대표문제 출발 ★2 이나 통찰 0·M 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "a_k=3^k → log_9 3^k = k/2 → 210/2 → 105"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$105$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비(3, 3 → 2, 4: log_2(2·4^{k−1}) = 2k−1)·밑 9 (→ 27: k/3)·상한 20 자유. 제약: 로그의 밑이 공비의 거듭제곱이어야 항이 k 의 일차식으로 떨어짐."
    creative: "(1) ∑ log a_k 가 특정 값이 되는 항 수(★2) (2) 첫째항이 공비의 거듭제곱이 아니면 상수항 로그가 남아 정리 한 단계 추가(★2) (3) log_{a_k} 9 처럼 밑에 a_k 를 두면 2/k 의 합이라 닫히지 않음 — 금지."
```

```yaml
- id: RPM-ALG-1011
  page: 137
  vendor_label: "유형 11 로그를 포함한 수열의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{39} log_3 {log_{2k+1}(2k+3)} 의 값. 5지선다(log_3 꼴 보기).
  category: "로그의 합 → 곱의 로그 → 밑변환으로 곱이 소거 → log_3 81 = 4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∑log_3(·) 을 log_3 ∏(·) 로 바꾸고 안쪽 log_{2k+1}(2k+3) = log(2k+3)/log(2k+1) 의 곱이 소거됨을 봐야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 수열의 합(로그의 합 → 곱의 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 = log_3 ∏ log_{2k+1}(2k+3) = log_3 [∏ log(2k+3)/log(2k+1)] = log_3 (log 81/log 3) = log_3 4. 합 → 곱 전환과 밑변환 소거의 두 겹을 RT d1 한 단계로 셈. 유형 중·M 6 → ★2.
    [분류 이슈] 두 겹 소거라 체감은 ★3 후보 — 통찰 1개 d1 이라 +1 조건 미달, ★2 로 둠.
  tier: star_2
  mechanism_primary: "∑log_3 → log_3 ∏ → 밑변환 소거 ∏ = log_3 81 = 4 → log_3 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 39 (2·39+3 = 81 = 3⁴)·안쪽 밑·진수 (2k+1, 2k+3) (→ (k+2, k+3): 상한 78 → log 81/log 3) 자유. 제약: 첫 밑과 마지막 진수가 모두 3 의 거듭제곱이어야 바깥 log_3 값이 정수 log_3 m 으로 정리됨."
    creative: "(1) 바깥 log_3 를 빼고 ∏ 만 묻기(★2) (2) 밑·진수 간격을 4 로 두면 곱이 두 개 남음(★3) (3) 안쪽을 log_k(k+1) 로 두고 ∑ 가 자연수가 되는 상한 n 을 묻기(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-1012
  page: 137
  vendor_label: "유형 11 로그를 포함한 수열의 합"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{n} a_k = log_2 {(n+1)(n+2)/2} 를 만족시키는 수열에 대해 ∑_{k=1}^{10} a_{2k} = p 일 때 8^p 의 값.
  category: "S_n − S_{n−1} 로그 차 → a_n = log_2((n+2)/n) → a_{2k} = log_2((k+1)/k) → 곱 소거 → 8^p"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∑a_{2k} = ∑log_2((k+1)/k) 를 log_2 ∏(k+1)/k 로 바꿔 곱이 소거되게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 수열의 합(로그의 합 → 곱의 소거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n = S_n − S_{n−1} = log_2((n+2)/n) (n ≥ 2, a_1 = log_2 3 일치). a_{2k} = log_2((k+1)/k). ∑_{1}^{10} = log_2 ∏(k+1)/k = log_2 11 = p, 8^p = 2^{3p} = 11³ = 1331. 유형 07 앞단·부분수열·로그 곱 소거(RT d1)·지수 정리까지 네 토막. 유형 상중·M 6 → ★3.
  tier: star_3
  mechanism_primary: "S_n 차 → a_n=log_2((n+2)/n) → a_{2k}=log_2((k+1)/k) → log_2 11 → 8^p=11³ → 1331"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1331$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 진수 (n+1)(n+2)/2 (→ (n+1)(n+2)(n+3)/6: 차가 log_2((n+3)/n))·부분수열 간격 2·상한 10·최종 밑 8 (= 2³) 자유. 제약: a_1 = S_1 일치, ∏ 가 소거돼 정수가 되게 간격과 상한을 맞춤."
    creative: "(1) a_{2k−1} 홀수 항 합으로 바꾸면 log_2((2k+1)/(2k−1)) → log_2 21 (★3) (2) 8^p 대신 p 가 정수가 되는 상한 조건을 묻기(I-BW d1 · ★3) (3) 로그 밑을 3 으로 바꾸고 27^p 로(★3)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 4 · ★2 27 · ★3 2 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 24 · premium 0
- 통찰 유형: I-RT 5(0981 · 0989 · 1009 · 1011 · 1012) · I-EQV 2(0997 · 1006) · I-XU 2(1002 · 1005) · 모두 depth 1
- type_hint 상위: 「부분분수 분해로 소거되는 분수 수열의 합」 6 · 「∑ 로 주어진 S_n 에서 a_n 구하기」 4 · 「일반항을 찾아 ∑ 로 계산하는 수열의 합」 4 · 「∑ r^k 꼴의 계산」 3 · 「∑ 와 등차·등비수열의 합」 3 · 「자연수의 거듭제곱의 합 공식 적용」 3 · 「이중 ∑」 3 · 「분모 유리화 소거」 3 · 「로그의 합 → 곱의 소거」 2 · 「등비수열의 로그 → 등차합」 1 · 「∑ 의 값을 상수의 이차함수로 보고 최소」 1
- 그림: 1문(`crop:fig-1009.png`)
- 벤더 신호: 대표문제 9 · 중하 2 · 중 18 · 상중 3 · 서술형 태그 2(0995 · 1005)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0993 | 벤더 「상중」이나 a_n = n(n+1) 정리 뒤 거듭제곱의 합 공식 두 개로 끝나는 절차형·M 5 → −1 적용. 같은 골조의 0990(대표문제)과 동급 | ★2 / ★3 |
| RPM-ALG-1000 | 삼중 ∑ 절차형·M 8 — 계산량만으로는 +1 하지 않는 원칙에 따라 ★2 유지. 체감은 ★3 후보 | ★2 / ★3 |
| RPM-ALG-1011 | 로그 합 → 곱 전환 + 밑변환 소거의 두 겹 골조를 RT d1 한 단계로 셈 — 두 통찰로 나누면 +1 조건 충족 | ★2 / ★3 |
| RPM-ALG-1002 · 1005 | 나머지정리·근과 계수 관계는 타 단원 도구이나 대입 한 줄 수준 — I-XU d1 인정 여부는 카탈로그 설계 때 결정(★ 에는 영향 없음) | ★2 |
| RPM-ALG-0983 · 1010 | 대표문제(출발 ★2)이나 통찰 0·M 4 → ★1. 교과서 구역과 같은 수준 | ★1 / ★2 |
| RPM-ALG-0988 | 벤더 「중」이나 공식 대입·약분뿐인 M 4 → ★1 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **소거(telescoping) 합을 하나의 상위 유형으로 통합** 권장: 유형 09(부분분수 · 6문)·유형 10(유리화 · 3문)·유형 11 의 「로그의 합 → 곱의 소거」(2문)는 「일반항을 차 꼴로 바꿔 소거」라는 같은 골조다. 하위 구분은 (a) 차 꼴을 만드는 도구(부분분수/유리화/log 성질), (b) 소거 간격(1 · 2 · 그 이상 → 남는 항 수·T-범위)로 두면 된다. base ★2, 간격 2 이상 또는 두 겹 소거(1011)·앞단 결합(1003 · 1012)이면 +1.
- **일반항 생성기는 유형이 아니라 변형 차원**: 1002(나머지정리) · 1004(합성함수) · 1005(근과 계수) · 1009(그래프 선분)는 모두 「a_n 을 다른 단원의 정의로 감싼 뒤 소거」다. 카탈로그에서 별도 유형으로 세우지 말고 「a_n 생성기: 다항식 나머지/함수 합성/이차방정식 근/도형 길이」 변형 축으로 둔다. XU 라벨은 생성기가 정리 수준(나머지정리 · 근과 계수)일 때만 d1 로 인정하는 기준을 정해야 한다.
- **「S_n → a_n」(유형 07 · 4문)은 독립 유형이면서 앞단 모듈**: 0994~0997 은 단독 유형 base ★2, 1003 · 1012 처럼 다른 유형 앞에 붙으면 결합 +0~1. 카탈로그에 「앞단 결합 가능」 플래그를 두면 변형 조합이 쉬워진다. a_1 = S_1 경계 확인(T-경계)이 이 유형의 고정 함정이다.
- **유형 05 · 06 통합 가능**: 「거듭제곱의 합 공식 적용」(3문)과 「일반항을 찾아 ∑ 로 계산」(4문)은 일반항이 주어졌느냐 찾느냐만 다르고 골조(전개 → ∑k, ∑k², ∑k³ 공식)는 같다. base ★2 로 하나의 유형에 두고 「일반항 찾기 필요」를 +0(패턴이 자명)~+1(I-PD d1) 변형 차원으로. 0989(∑ 를 상수의 이차함수로 보고 최소)는 골조가 달라 **따로 세운다**(base ★2, I-RT d1 고정).
- **유형 03 · 04(∑ 와 등차·등비)**: 등비합 공식 적용(3문)과 등차·등비 결정 후 ∑(3문)은 08 단원(등차·등비수열) 유형의 재등장이라 카탈로그에서는 08 단원 유형을 참조하는 얇은 유형(base ★1~2)으로 두면 충분하다. 0981(cos nπ 공비)·0982(S_k 를 다시 ∑) 같은 포장은 변형 차원.
- **유형 08 이중 ∑(3문)**: 「변수 분리 곱」(0999)과 「안쪽부터 닫기」(0998 · 1000)는 전략이 다르므로 하위 두 갈래로. 삼중 이상은 Mₖ 상승만 있고 통찰이 늘지 않으므로 base ★2 유지, ★3 은 상한을 문자로 두거나 대칭(I-SYM)을 넣을 때만.
- 이 범위에서 ★4 이상·통찰 depth 2 이상은 없었다. 유형 구역의 특성상 카탈로그 base ★ 는 대부분 ★2 이고, 이 단원의 ★3~4 슬롯은 3/3 범위(유형 UP·시험에 꼭 나오는 문제·실력 Up)에서 채워질 것으로 보인다.
