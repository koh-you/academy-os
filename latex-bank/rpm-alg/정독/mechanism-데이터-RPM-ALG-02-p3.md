---
name: mechanism-데이터-RPM-ALG-02-p3
description: RPM 대수 02 로그(3/3 · 유형 10 · 유형 UP 11~12 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 02 로그
  unit_code: ALG-02
  part: "3/3"
  extract_range: "24~29쪽 · 0182~0221"
  total_problems: 40
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 02 로그 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 02 로그 단원의 마지막 범위(24~29쪽 · 0182~0221 · 40문)를 다룬다. 「유형 10 상용로그의 실생활에의 활용」(3문) · 「유형 UP 11 로그의 정수 부분과 소수 부분」(4문) · 「유형 UP 12 상용로그의 소수 부분의 활용」(3문) · 「시험에 꼭 나오는 문제」(22문) · 「서술형 주관식」(4문) · 「실력 Up」(4문)으로, 단원의 심화 유형과 중단원 종합 구역이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상 · 이 범위는 유형·유형 UP 구역에만 중·상중 표시가 있음)·태그(대표문제·중요·평가원 기출·서술형)로 나타난다. 출발점은 유형 ★2 · 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 ★3 · 실력 Up ★4 로 두고 M_total·통찰로 ±1 조정했다. 통찰 없음·M_total ≤ 5 인 문항은 원칙적으로 −1 했으나, 실생활 문장형 해석이나 두 조각을 잇는 연결 단계가 있는 문항은 출발점을 유지하고 rationale 에 이유를 적었다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. `insight_type` 은 통찰이 ★3 이상의 변별을 실제로 만들 때 통찰형으로, d1 통찰 하나가 ★2 문항의 한 단계에 그칠 때(0200·0210)는 절차형으로 두었다. 0207 은 상용로그표(크롭 `fig-0207.png` · 2.6~2.8 행 · 0~4 열)를 읽는 문항이다. 판정이 애매한 문항은 `[분류 이슈]` 로 기록만 하고 파일 끝 표에 모았다.

## 문항 데이터

### 유형 10 상용로그의 실생활에의 활용

```yaml
- id: RPM-ALG-0182
  page: 24
  vendor_label: "유형 10 상용로그의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    소음 크기 D=10(log P+12) 관계식에서 소음 크기가 40 dB, 60 dB 인 두 자동차의 소음 세기의 비(B 가 A 의 몇 배). 5지선다.
  category: "관계식에 두 값 대입 → log P 의 차 → 10 의 거듭제곱 배율"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(관계식의 차·비 → 배율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D=40 → log P_A=−8, D=60 → log P_B=−6 이므로 P_B/P_A=10^2. 대입 두 번과 뺄셈뿐이라 통찰 없음·M_total 4 로 −1 후보였으나, 실생활 관계식을 읽어 두 사례를 세우는 문장형 해석 단계가 있어 유형 대표문제 출발점 ★2 를 유지.
  tier: star_2
  mechanism_primary: "D 두 값 대입 → log P 차 = 2 → P 비 = 10^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 dB 값(40·60 → 30·50, 45·75)을 바꿔 차가 10 의 배수면 정수 거듭제곱, 5 의 홀수배면 √10 배가 나오게 조절 가능. 계수 10 과 상수 12 는 바꿔도 되지만 차 계산에서 상수는 소거되므로 답에는 계수만 영향. 제약: 선택지가 10^{k/2} 꼴로 정리되도록 dB 차를 5 의 배수로."
    creative: "(1) 반대로 세기가 k 배일 때 dB 차를 묻기(★2 유지) (2) 세 자동차의 세기가 등비일 때 dB 가 등차임을 묻기(★2~3 · I-PD d1) (3) 관계식을 D=10 log(P/P_0) 꼴로 주고 P_0 소거를 스스로 하게 하면 I-EQV d1 → ★3."
```

```yaml
- id: RPM-ALG-0183
  page: 24
  vendor_label: "유형 10 상용로그의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    지진 에너지 E 와 리히터 규모 M 의 관계식 log 10E=11.8+1.5M 에서 규모 7 과 규모 3 의 에너지 비가 10^k 일 때 k.
  category: "두 규모 대입 → 두 식의 차 → log(E_7/E_3)=1.5×4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(관계식의 차·비 → 배율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 빼면 log(E_7/E_3)=1.5×(7−3)=6 → k=6. 좌변 log 10E 의 상수 1 과 11.8 이 모두 소거되므로 계산은 한 줄. 통찰 없음·M_total 4 로 −1 후보였으나 벤더 난이도 「중」과 실생활 관계식 해석 단계를 고려해 ★2 유지.
  tier: star_2
  mechanism_primary: "두 규모 대입 → 식의 차 → log(E_7/E_3)=1.5(7−3)=6 → k=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 규모(7·3 → 8·2, 6.5·4.5)와 계수 1.5·상수 11.8 을 바꿀 수 있음. 제약: 1.5×(규모 차)가 정수가 되도록 규모 차를 짝수로 두고, 상수는 차에서 소거되므로 아무 값이어도 됨."
    creative: "(1) 에너지 비 10^k 를 주고 규모 차를 묻기(역방향 · ★2) (2) 좌변을 log 10E 대신 log E 로 바꾼 두 관계식을 섞어 상수 소거 여부를 따지게 하는 함정 추가(Mₜ+1 · ★2) (3) 두 지진의 에너지 합이 세 번째 지진과 같다는 설정처럼 로그 합·차로 안 풀리는 조건을 넣으면 I-EQV d1 → ★3."
```

```yaml
- id: RPM-ALG-0184
  page: 24
  vendor_label: "유형 10 상용로그의 실생활에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    상대밀도 D=−98+66 log(R/√S) 에서 지반 A 의 S 가 B 의 2.56 배, R 가 2 배일 때, B 의 상대밀도 70 % 로부터 A 의 상대밀도 a. (log 2=0.3)
  category: "B 식에서 log(R/√S) 값 고정 → A 의 인수 비 log(2/1.6) 분리 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(관계식의 차·비 → 배율)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    70=−98+66 log(R_B/√S_B) 에서 log(R_B/√S_B)=28/11. A 는 R_A/√S_A=(2/√2.56)·(R_B/√S_B)=1.25·(R_B/√S_B) 이므로 log 값이 log 1.25=1−3 log 2=0.1 만큼 커지고 D_A=70+66×0.1=76.6. √2.56=1.6 과 log 1.25 의 log 2 환산 두 군데가 계산 부담(Mₖ 2). 절차형이지만 M_total 6 이라 −1 없음 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "B 의 D → log(R_B/√S_B) 고정 → A 인수 비 2/1.6=1.25 → D_A=D_B+66 log 1.25=70+6.6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$76.6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율(2.56·2 → 6.25·2.5, 1.44·3)과 D_B(70) 를 바꿀 수 있음. 제약: √S 비가 유리수(완전제곱 소수)이고 R 비/√S 비가 2·5 의 곱으로 log 값이 log 2 만으로 계산되어야 함(1.25=5/4, 2.5=5/2). 계수 66 은 답이 소수 첫째 자리에서 끝나도록 log 값과 맞춤."
    creative: "(1) A 의 D 를 주고 R 비를 역으로 묻기(표준 역방향 · ★3 유지) (2) 두 지반의 D 차만 묻게 하면 D_B 계산이 사라져 ★2 (3) S·R 을 모두 문자로 두고 D 차를 문자식으로 표현하게 하면 Mₐ 2 → ★3 유지, 문장 해석 부담 증가."
```

### 유형 UP 11 로그의 정수 부분과 소수 부분

```yaml
- id: RPM-ALG-0185
  page: 25
  vendor_label: "유형 UP 11 로그의 정수 부분과 소수 부분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    log_2 15 의 정수 부분 a, 소수 부분 b 에 대하여 8(a+2^b) 의 값.
  category: "2^3<15<2^4 → a=3 → b=log_2(15/8) → 2^b=15/8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정수 부분과 소수 부분(밑이 10 이 아닌 로그 · 밑^소수 부분 값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    8<15<16 에서 a=3, b=log_2 15−3=log_2(15/8) 이고 2^b=15/8 이므로 8(3+15/8)=39. 밑이 10 이 아닌 로그의 정수·소수 부분을 나누는 한 단계와 소수 부분의 거듭제곱 환산뿐. 통찰 없음·M_total 4 → 유형 UP 출발점 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "거듭제곱 사이 끼우기 → a=3 → 2^b=15/2^3 → 8(a+2^b)=39"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$39$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 15 를 2^n 과 2^{n+1} 사이의 다른 수(11, 13, 25 → a=4)로, 밑을 3(log_3 20 → a=2, 3^b=20/9)으로 바꿀 수 있음. 앞의 계수 8 은 2^a 와 같게 두어 답이 정수가 되게 함. 제약: 진수가 밑의 거듭제곱이 아니어야 소수 부분이 0 이 아님."
    creative: "(1) 2^{−b} 나 4^b 를 묻기(★2) (2) 정수 부분·소수 부분을 이차방정식의 두 근으로 주는 0188 골조로 확장(★3 · I-EQV d1) (3) log_2 N 의 소수 부분이 특정 값일 때 자연수 N 을 찾게 하면 역방향 I-BW d1 → ★3."
```

```yaml
- id: RPM-ALG-0186
  page: 25
  vendor_label: "유형 UP 11 로그의 정수 부분과 소수 부분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    log a 의 정수 부분이 3 일 때 자연수 a 의 개수. 5지선다.
  category: "정수 부분 3 → 3≤log a<4 → 10^3≤a<10^4 → 개수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분이 주어진 자연수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3≤log a<4 ⇔ 1000≤a<10000 이므로 자연수 a 는 9999−1000+1=9000 개. 부등식 한 번과 개수 세기뿐이며 10000 포함 여부(T-경계)만 함정. 통찰 없음·M_total 4 → 유형 UP 출발점에서 −1 하여 ★2(벤더 「중」).
  tier: star_2
  mechanism_primary: "정수 부분 n → n≤log a<n+1 → 10^n≤a<10^{n+1} → 9·10^n 개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분 3 → 1·2·5 로 바꾸면 답은 9·10^n. 밑을 2 로(log_2 a 의 정수 부분이 5 → 32≤a<64 → 32 개) 바꾸면 밑의 거듭제곱 차. 제약: 자연수 조건이라 하한 포함·상한 제외 경계를 명시."
    creative: "(1) 정수 부분이 −2 인 양수 a 의 범위 묻기(음수 정수 부분 · Mₜ+1 · ★2) (2) log a 와 log a^2 의 정수 부분이 각각 주어질 때 교집합 범위(I-CON d1 · ★3) (3) 자릿수 표현으로 옮겨 a 가 몇 자리 수인지 묻기(★1)."
```

```yaml
- id: RPM-ALG-0187
  page: 25
  vendor_label: "유형 UP 11 로그의 정수 부분과 소수 부분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    log_5 10 의 정수 부분 x, 소수 부분 y 에 대하여 (5^y−5^{−y})/(5^x−5^{−x}) 의 값.
  category: "5<10<25 → x=1, y=log_5 2 → 5^y=2 → 분수 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정수 부분과 소수 부분(밑이 10 이 아닌 로그 · 밑^소수 부분 값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1, y=log_5 10−1=log_5 2 에서 5^y=2, 5^{−y}=1/2 이고 분자 3/2, 분모 5−1/5=24/5 → 5/16. 0185 골조에 분수 정리가 붙은 것으로 새 착안 없음. 통찰 없음·M_total 5 → 유형 UP 출발점 ★3 에서 −1 하여 ★2(벤더 「중」).
  tier: star_2
  mechanism_primary: "x=1, y=log_5 2 → 5^y=2 → (2−1/2)/(5−1/5)=5/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수 쌍(log_5 10 → log_3 12: x=2, 3^y=4/3 · log_2 12: x=3, 2^y=3/2)을 바꿀 수 있음. 제약: 진수/밑^x 가 간단한 유리수여야 분수식이 정리됨. 분자·분모의 합·차 부호 조합도 변형 가능."
    creative: "(1) 분모를 5^x+5^{−x} 로 바꾸기(★2) (2) 소수 부분을 t 로 두고 5^{2t}+5^{−2t} 를 묻기(곱셈 공식 결합 · ★2~3) (3) 소수 부분이 특정 값이 되는 진수 N 을 역으로 찾기(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0188
  page: 25
  vendor_label: "유형 UP 11 로그의 정수 부분과 소수 부분"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    log A 의 정수 부분과 소수 부분이 이차방정식 2x^2−5x+k−3=0 의 두 근일 때 상수 k. (서술형)
  category: "근의 합 5/2 → 정수부 2·소수부 1/2 확정 → 근의 곱으로 k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 근의 합 n+α=5/2 를 n 정수·0≤α<1 조건으로 읽어 n=2, α=1/2 하나로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정수 부분·소수 부분이 이차방정식의 두 근일 때 상수 구하기(근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근과 계수의 관계에서 n+α=5/2, nα=(k−3)/2. 첫 식을 정수 부분·소수 부분의 정의(0≤α<1)로 읽어 n=2, α=1/2 를 확정하는 단계가 이 유형의 핵심(EQV d1). 이후 nα=1 → k=5. 근과 계수의 관계는 표준 도구라 XU 로 세지 않음. 통찰 1·M_total 6 → 유형 UP 출발점 ★3 유지(벤더 「중」과 1단 차).
  tier: star_3
  mechanism_primary: "근의 합 n+α=5/2 → (n,α)=(2,1/2) → 근의 곱 nα=(k−3)/2 → k=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 5/2 를 7/3, 11/4 처럼 (정수)+(0 이상 1 미만 분수) 로 유일 분해되는 값으로, 이차항 계수를 그 분모로 맞춰 바꿀 수 있음. 제약: 합이 정수이면 α=0 이 되어 소수 부분 0 인 경우를 물어야 하므로 피함. k 는 정수가 되도록 근의 곱을 조절."
    creative: "(1) k 를 주고 A 의 값(10^{5/2})을 묻기(★3) (2) 두 근의 차나 제곱합을 조건으로 주어 n, α 를 연립(I-CON d1 추가 · ★3~4) (3) 합이 정수인 경우까지 포함해 가능한 k 의 개수를 묻기(I-MI d1 · ★4)."
```

### 유형 UP 12 상용로그의 소수 부분의 활용

```yaml
- id: RPM-ALG-0189
  page: 25
  vendor_label: "유형 UP 12 상용로그의 소수 부분의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    10<x<100 이고 log x 의 소수 부분과 log(1/x) 의 소수 부분이 같을 때 x^2 의 값. 5지선다.
  category: "소수 부분 같음 ⇔ log x−log(1/x)=2 log x 가 정수 → 범위에서 log x=3/2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 로그의 소수 부분이 같다 ⇔ 두 로그의 차 2 log x 가 정수 로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 소수 부분이 같을 조건(차가 정수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log x=1+α (0<α<1) 로 두면 log(1/x)=−2+(1−α) 이므로 소수 부분 1−α 와 α 가 같아 α=1/2, 즉 log x=3/2 → x^2=10^3. 「소수 부분이 같다 ⇔ 차가 정수」로 옮기면 2 log x∈Z 와 2<2 log x<4 에서 3 뿐. 이 동치 변환이 유형 UP 12 의 골조(EQV d1). 음수 로그의 소수 부분(T-부호)·구간 끝점(T-경계) 함정. 통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "소수 부분 같음 ⇔ 2 log x ∈ Z → 2<2 log x<4 → log x=3/2 → x^2=10^3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위(10<x<100 → 100<x<1000 이면 log x=5/2)와 묻는 식(x^2 → x, √x)을 바꿀 수 있음. 제약: 범위가 열린 구간이면 정수 로그 값이 제외됨을 이용해 답이 하나가 되도록 하고, 선택지는 10^{유리수} 꼴로 통일."
    creative: "(1) log x 와 log x^3 의 소수 부분이 같을 조건(0212 골조 · 4 log x∈Z · 여러 해 → I-MI d1 추가 · ★3~4) (2) 소수 부분의 합이 1 인 조건(0191 골조 · ★3) (3) 범위 없이 x>1 로만 주고 조건을 만족시키는 x 를 작은 것부터 나열하게 하면 I-PD d1 → ★4."
```

```yaml
- id: RPM-ALG-0190
  page: 25
  vendor_label: "유형 UP 12 상용로그의 소수 부분의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    log x 의 정수 부분이 1 일 때 log x^2−log(1/x) 의 값이 정수가 되는 모든 실수 x 의 곱. 5지선다.
  category: "식 정리 3 log x → 3≤3 log x<6 정수 열거 → 곱은 로그의 합으로"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그식의 값이 정수가 되는 x 열거(정수 부분 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log x^2−log(1/x)=3 log x 이고 1≤log x<2 이므로 3 log x∈{3,4,5}, log x=1, 4/3, 5/3. 세 x 의 곱은 10^{1+4/3+5/3}=10^4. 범위 열거와 곱→로그 합 환산은 모두 표준 절차라 통찰 없음. 하한 포함·상한 제외(T-경계)와 열거 범위(T-범위) 함정으로 Mₜ 2, M_total 6 → 유형 UP 출발점 ★3 유지.
    [분류 이슈] 통찰 없음·M_total 6 으로 ★3 을 유지했으나 벤더 「중」이고 체감은 ★2~3 경계. 후보 ★2/★3.
  tier: star_3
  mechanism_primary: "식 정리 → 3 log x 정수 → 3≤3 log x<6 열거 → 곱 = 10^{합}"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(1 → 2), 식의 계수(x^2, 1/x → x^3, √x 로 계수 3.5 등)를 바꿀 수 있음. 제약: 계수×구간 길이가 정수 해의 개수를 정하므로 해가 2~4 개가 되게 하고, 계수가 분수면 정수 조건 열거가 복잡해짐. 답은 10^{정수} 로 정리되도록 합을 조절."
    creative: "(1) 해의 개수만 묻기(★2) (2) 정수 대신 소수 부분이 1/3 인 조건으로 바꾸면 3 log x 의 소수 부분 재분해 → I-EQV d1 · ★3 (3) x 의 범위를 두 자리 자연수로 제한해 실제 자연수 해가 존재하는지 검증시키면 I-VF d1 → ★4."
```

```yaml
- id: RPM-ALG-0191
  page: 25
  vendor_label: "유형 UP 12 상용로그의 소수 부분의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    log x 의 정수 부분이 2 이고 log x 의 소수 부분과 log √x 의 소수 부분의 합이 1 일 때 log x 의 소수 부분.
  category: "log x=2+α → log √x=1+α/2 → 소수 부분 α/2 → α+α/2=1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log √x=(2+α)/2 를 정수 1 과 소수 부분 α/2(0≤α/2<1/2) 로 재분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 소수 부분의 재분해(log √x 등의 소수 부분 · 합 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    소수 부분을 α 로 두면 log √x=(2+α)/2=1+α/2 이고 0≤α/2<1/2 이므로 그대로 소수 부분. α+α/2=1 → α=2/3. 절반 로그의 정수·소수 재분해(EQV d1) 한 단계가 핵심이고 방정식은 한 줄. 통찰 1·M_total 5 → 벤더 「상중」 출발점 ★3 유지(정수 부분이 홀수면 재분해에 1/2 이 남아 어려워지는 0213·0217 과 구분).
  tier: star_3
  mechanism_primary: "log x=2+α → log √x=1+α/2 → α+α/2=1 → α=2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(2 → 4·6 짝수 유지)과 합(1 → 4/3 등 α+α/2<3/2 범위 안)을 바꿀 수 있음. 제약: 정수 부분이 홀수면 log √x 의 소수 부분이 1/2+α/2 로 바뀌어 골조가 0213 형으로 변함. 합은 0≤α<1 에서 도달 가능한 값(3/2 미만)이어야 함."
    creative: "(1) 정수 부분을 홀수(3)로 바꾸면 재분해에 1/2 이 남아 범위 검토가 필요 → EQV d2 · ★3 (2) log √x 대신 log ∛x 를 쓰면 α/3 과 정수 부분 몫 → ★3 (3) 두 소수 부분의 차가 주어질 때 x 의 개수(I-MI d1 · ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0192
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x=log_3 64 일 때 3^{x/3} 의 값.
  category: "로그의 정의 → 3^x=64 → 3^{x/3}=64^{1/3}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^{log_a b} 꼴의 지수 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3^{x/3}=(3^x)^{1/3}=64^{1/3}=4. 로그의 정의 한 번과 거듭제곱근 계산. 통찰 없음·M_total 4 → 시험 구역 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "x=log_3 64 → 3^x=64 → 3^{x/3}=64^{1/3}=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 64 를 세제곱수(27, 125)나 지수 분모에 맞는 거듭제곱(x/2 → 81, 49)으로. 제약: 진수가 (자연수)^{분모} 꼴이어야 정수 답."
    creative: "(1) 3^{−x/3} 처럼 음수 지수(★1) (2) 3^{x/3}+9^{x/6} 처럼 밑 통일이 필요한 합(★2) (3) 3^{x/3} 의 값이 4 가 되는 x 를 로그로 나타내기(역방향 · ★1)."
```

```yaml
- id: RPM-ALG-0193
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log_{a+2}(−a^2+a+12) 가 정의되도록 하는 모든 정수 a 의 합. 5지선다.
  category: "밑 조건 a+2>0, a+2≠1 → 진수 조건 이차부등식 → 정수 교집합의 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 정의되기 위한 조건(밑·진수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 조건 a>−2, a≠−1 과 진수 조건 (a−4)(a+3)<0 ⇔ −3<a<4 의 교집합 −2<a<4, a≠−1 에서 정수 0, 1, 2, 3 → 합 6. 표준 정의 조건 두 개를 세우고 a=−1 제외를 잊지 않는 것이 전부(T-범위·T-경계). 통찰 없음이나 M_total 7 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "밑 조건 ∩ 진수 조건 → −2<a<4, a≠−1 → 정수 합 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 a+2 를 a−1, 2a+1 로, 진수 이차식의 근을 바꿀 수 있음. 제약: 밑=1 이 되는 a 가 교집합 안에 들어와 실제로 제외되는 설계(여기서 a=−1)를 유지해야 함정이 살아 있음. 정수 해가 3~5 개가 되게 근을 조절."
    creative: "(1) 정수 개수를 묻기(★2) (2) 진수를 절댓값이나 두 일차식의 곱으로 주어 구간이 두 개가 되면 I-MI d1 → ★3 (3) a 가 실수일 때 조건을 만족시키는 a 의 범위 자체를 답하게 하면 경계 표기(≠) 정확성 요구 → ★2."
```

```yaml
- id: RPM-ALG-0194
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    5 log_3 √3 + (1/2) log_3 2 − log_3 √6 의 값. 5지선다.
  category: "각 항 지수 정리 → log_3 6=1+log_3 2 분리 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질을 이용한 계산(합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5/2+(1/2)log_3 2−(1/2)(1+log_3 2)=2. 거듭제곱근을 지수로 옮기고 6=2·3 을 분리하는 성질 계산. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "√ 를 1/2 지수로 → log_3 6=1+log_3 2 → 5/2−1/2=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 진수(√3, 2, √6)를 밑 2 · 진수(√2, 3, √12)처럼 바꿀 수 있음. 제약: log_3 2 항이 소거되도록 계수를 맞추고 답이 정수가 되게 상수항 조절."
    creative: "(1) 계수를 문자 k 로 두고 값이 정수가 되는 k(★2 · 미정계수) (2) 밑이 다른 항(log_9 2)을 섞어 밑변환 한 번 추가(★2) (3) 값이 log_3 2 의 일차식으로 남게 한 뒤 그 값을 log 2=a, log 3=b 로 나타내기(★2)."
```

```yaml
- id: RPM-ALG-0195
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 양수 x, y, z 가 log_3 x + log_3 2y + log_3 3z = 1 을 만족시킬 때 {(81^x)^y}^z 의 값. 5지선다.
  category: "로그 합 → log_3(6xyz)=1 → xyz=1/2 → 81^{xyz}"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 조건식에서 지수식의 값(xyz 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 로그를 합치면 6xyz=3, xyz=1/2 이고 목표식은 81^{xyz}=9. 두 조각(로그 합 → 곱 · 거듭제곱의 거듭제곱 → 지수 곱)을 잇는 것이 전부. 통찰 없음·M_total 5 로 −1 후보이나 조건과 목표식을 xyz 로 잇는 연결 단계가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "log 합 → 6xyz=3 → xyz=1/2 → 81^{1/2}=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2y, 3z)와 우변(1 → 2), 밑(81 → 27)을 바꿀 수 있음. 제약: 곱의 계수×xyz 가 밑의 거듭제곱이 되도록(6xyz=3^k) 맞추고 81^{xyz} 가 정수나 근호 하나로 떨어지게."
    creative: "(1) 조건을 곱이 아니라 합 x+y+z 로 이어지게(log 3^x 등) 바꿔 3^{x+y+z} 를 묻기(★2) (2) 두 조건식(합·곱)을 주고 두 값을 연립(I-CON d1 · ★3) (3) 우변을 문자 k 로 두면 답이 3^{k/2} 꼴 Mₐ 2 → ★2."
```

```yaml
- id: RPM-ALG-0196
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log_3 45 − (log_5 35)/(log_5 3) + (log_10 21)/(log_10 3) 의 값.
  category: "밑변환으로 전부 밑 3 통일 → 진수 곱·나눗셈 → log_3 27"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식을 이용한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분수 두 항이 밑변환 공식의 형태이므로 log_3 45−log_3 35+log_3 21=log_3(45·21/35)=log_3 27=3. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑변환 인식 → 밑 3 통일 → 진수 45·21/35=27 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 세 개(45·35·21)를 곱·나눗셈 결과가 밑의 거듭제곱이 되게(예: 12·8·18 → 27) 바꿀 수 있음. 제약: 분수 항의 분모가 같은 밑의 log_c 3 이어야 밑변환이 한눈에 보임."
    creative: "(1) 밑을 2 와 4 로 섞어 log_4 → (1/2)log_2 환산 추가(★2) (2) 분수 항을 log_5 35·log_3 5 처럼 곱으로 주어 역수 관계 인식(★2) (3) 진수에 미지수를 두고 값이 정수가 되게 하는 자연수 개수(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0197
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1 이 아닌 양수 a, b, c, x 에 대하여 log_a x=1, log_b x=2, log_c x=3 일 때 log_{abc} x 의 값.
  category: "역수 취해 밑 x 로 통일 → log_x abc = 1+1/2+1/3 → 다시 역수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑변환 공식(역수 관계)을 이용한 log_{abc} x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_x a=1, log_x b=1/2, log_x c=1/3 이므로 log_x abc=11/6, log_{abc} x=6/11. 밑을 x 로 뒤집어 합으로 만드는 표준 절차라 통찰 없음. M_total 5 로 −1 후보이나 역수 전환을 두 번 오가는 구조라 ★2 유지.
  tier: star_2
  mechanism_primary: "log_a x=1 → log_x a=1 (역수) → log_x abc=1+1/2+1/3 → 역수 6/11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{6}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값(1, 2, 3 → 2, 3, 6)을 바꾸면 답은 1/(역수 합). 제약: 역수 합이 간단한 분수가 되게 하고, log_{ab/c} x 처럼 나눗셈을 섞으면 부호 처리 추가."
    creative: "(1) log_{abc} x 를 주고 log_c x 를 역으로(★2) (2) log_{a^2 b} x 처럼 밑에 지수를 넣어 계수 처리(★2) (3) 세 값이 등차수열을 이룰 때 log_{abc} x 를 공차로 나타내기(Mₐ 2 · ★3)."
```

```yaml
- id: RPM-ALG-0198
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (log_2 3 + log_{∛4} 9)(2 log_3 2 + (1/2) log_3 4) 의 값.
  category: "밑·진수의 지수 정리 → 4 log_2 3 · 3 log_3 2 → 곱 12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑변환 공식을 이용한 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{4^{1/3}} 9=(2/(2/3)) log_2 3=3 log_2 3 이라 첫 괄호는 4 log_2 3, 둘째 괄호는 3 log_3 2 이고 곱은 12·1. 밑과 진수의 지수를 앞으로 빼는 정리 네 번과 log_2 3·log_3 2=1. 통찰 없음·M_total 5 → 시험 구역 ★2(정리 횟수가 많아 −1 보류).
  tier: star_2
  mechanism_primary: "log_{a^m} b^n=(n/m) log_a b 정리 → (4 log_2 3)(3 log_3 2) → 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 거듭제곱근(∛4 → √8)·진수 지수(9 → 27)·계수를 바꾸면 답은 (계수 합)의 곱. 제약: 두 괄호가 서로 역수인 로그의 상수배로 정리되어 곱이 정수가 되게."
    creative: "(1) 두 괄호의 합이나 차를 묻게 하면 log_2 3=t 로 두고 t+1/t 꼴(★2~3) (2) 한 괄호에 log_3 6 처럼 분리가 필요한 항을 섞기(★2) (3) 곱이 12 임을 이용해 log_2 3 의 값을 근사(log 값 표 제공 · ★2)."
```

```yaml
- id: RPM-ALG-0199
  page: 26
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (5^{log_5 2 + log_5 6})^2 / 2^{(log_3 2 + log_3 4)·log_2 9} 의 값.
  category: "a^{log_a b}=b → 분자 12^2 · 지수 (log_3 8)(log_2 9)=6 → 144/64"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^{log_a b} 꼴의 지수 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자는 5^{log_5 12}=12 의 제곱 144, 분모 지수는 3 log_3 2·2 log_2 3=6 이라 2^6=64 → 9/4. a^{log_a b}=b 와 밑변환 역수 관계 두 도구를 순서대로 쓰는 절차. 통찰 없음·M_total 5 → ★2(중요 태그 +0).
  tier: star_2
  mechanism_primary: "5^{log_5 12}=12 → 144 · (log_3 8)(log_2 9)=6 → 2^6 → 144/64"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(2·6 → 3·4)와 밑(5, 2, 3)·지수 곱의 조합을 바꾸되 (log_3 2^p)(log_2 3^q)=pq 가 정수가 되게. 제약: 최종 분수가 기약분수로 간단히."
    creative: "(1) 분모를 2^{log_2 9·log_3 8} 처럼 순서를 바꿔 같은 값임을 확인(★2) (2) 5^{log_5 2}=2 를 모르는 학생이 log 로 전체를 취하게 유도하는 서술형(★2) (3) 지수에 x 를 두고 값이 정수가 되게 하는 x 를 역으로(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0200
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 점 (2, log_4 a), (3, log_2 b) 를 지나는 직선이 원점을 지날 때 log_a b 의 값. 5지선다. (평가원 기출)
  category: "원점 통과 → 두 점의 y/x 같음 → log_2 a/4 = log_2 b/3 → log_a b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점을 지나는 직선 조건을 두 점의 기울기 log_4 a /2 = log_2 b /3 로 옮기는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표 조건(직선)과 로그의 밑변환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점·두 점이 한 직선 위 ⇔ 기울기 같음 ⇔ log_4 a/2=log_2 b/3. log_4 a=(1/2) log_2 a 로 밑 통일하면 log_2 b/log_2 a=3/4=log_a b. 기하 조건을 비례식으로 옮기는 RT d1 이 유일한 착안이고 나머지는 밑변환 한 줄. 통찰 1·M_total 5 → 시험 구역 ★2 유지(기출 +1 은 M_total 6 이상일 때만 적용 · 3점 수준).
  tier: star_2
  mechanism_primary: "원점 통과 ⇔ 기울기 같음 → log_2 a/4=log_2 b/3 → log_a b=3/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 x 좌표(2, 3)와 밑(4, 2)을 바꾸면 답은 (x_1/x_2)·(밑 지수비). 제약: 답이 선택지에 맞는 간단한 유리수가 되게 하고 a≠1 조건을 유지."
    creative: "(1) 직선이 원점이 아니라 (0, 1) 을 지날 때(상수항 추가 → 로그 값 차 → ★3) (2) 세 점이 한 직선 위에 있을 조건(I-CON d1 · ★3) (3) 두 점을 지나는 직선의 기울기가 log_a b 가 되게 좌표를 역설계(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0201
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log 2=a, log 3=b 일 때 log_{0.2} 45 를 a, b 로 나타내기. 5지선다.
  category: "밑변환 → log 45=2b+(1−a) · log 0.2=a−1 → 부호 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값을 문자 a, b 로 나타내기(log 2=a, log 3=b)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_{0.2} 45=log 45/log 0.2, log 45=log 9+log 5=2b+1−a, log 0.2=−log 5=a−1 → (a−2b−1)/(1−a). log 5=1−log 2 환산과 분모 부호를 선택지 형태에 맞추는 정리가 함정(Mₜ 2: T-부호·T-표기). 통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑변환 → log 45=2b+1−a, log 0.2=a−1 → 분수 정리(부호)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(0.2 → 0.5, 2.5)·진수(45 → 12, 75)를 바꾸면 답은 a, b 의 일차식 비. 제약: log 5=1−a 환산이 한 번은 들어가도록 5 의 인수를 남기고, 선택지는 분모 부호를 뒤집은 오답을 포함."
    creative: "(1) log_{0.2} 45 의 값을 근사(a=0.3, b=0.48)로 묻기(★2) (2) log 5=c 를 추가로 주어 a+c=1 관계를 스스로 쓰게(★2) (3) log_6 45 처럼 분모도 a+b 로 나오게 해 나눗셈 정리(★2)."
```

```yaml
- id: RPM-ALG-0202
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 실수 x, y 가 2^x=5^y=80 을 만족시킬 때 (x−4)(y−1) 의 값.
  category: "x=log_2 80=4+log_2 5, y=log_5 80=1+4 log_5 2 → 곱 = 4·log_2 5·log_5 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x=b^y=k 꼴 조건식(역수 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    80=2^4·5 이므로 x−4=log_2 5, y−1=log_5 16=4 log_5 2 이고 곱은 4·log_2 5·log_5 2=4. 조건을 로그로 옮기고 80 을 소인수분해해 남는 로그가 서로 역수임을 보는 표준 골조. 통찰 없음·M_total 5 → ★2 유지(두 조각 연결).
  tier: star_2
  mechanism_primary: "2^x=5^y=80 → x−4=log_2 5, y−1=4 log_5 2 → 곱 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "80=2^4·5 를 다른 곱(2^3·5^2=200 → (x−3)(y−2)=6)으로 바꿀 수 있음. 제약: 우변이 두 밑의 거듭제곱 곱이어야 x−p, y−q 가 서로 역수인 로그로 남음."
    creative: "(1) 1/x+1/y 를 묻는 표준형(★2) (2) 세 밑 2, 3, 5 로 확장해 (x−a)(y−b)(z−c) 꼴(★3) (3) 80 을 문자 k 로 두고 (x−4)(y−1)=4 가 되는 k 를 역으로(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0203
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1 보다 큰 세 실수 a, b, c 가 log_a b = (log_b c)/2 = (log_c a)/4 를 만족시킬 때 log_a b + log_b c + log_c a 의 값. 5지선다. (평가원 기출)
  category: "공통값 k 매개화 → 순환 곱 log_a b·log_b c·log_c a=1 → 8k^3=1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 로그를 k, 2k, 4k 로 놓고 순환 곱 log_a b·log_b c·log_c a=1 항등식으로 세 조건을 한 식 8k^3=1 로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 로그의 비·순환 곱 조건(밑변환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log_a b=k, log_b c=2k, log_c a=4k 로 두면 밑변환에 의해 세 로그의 곱은 항상 1 이므로 8k^3=1, k=1/2 → 합 7k=7/2. 순환 곱=1 을 떠올려 세 조건을 한 식으로 묶는 CON d1 이 핵심(a, b, c>1 이라 k>0). 통찰 1·M_total 6·기출 → 시험 구역 상단 ★3.
  tier: star_3
  mechanism_primary: "k 매개화 → 순환 곱 =1 → 8k^3=1 → k=1/2 → 합 7k=7/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(1:2:4 → 1:3:9, 2:3:6)를 바꾸면 곱 계수가 달라져 k 가 세제곱근으로 결정됨. 제약: 계수 곱이 완전세제곱수(8, 27 은 가능, 36 은 불가)여야 k 가 유리수. a, b, c>1 조건으로 k>0 확정."
    creative: "(1) 비 대신 세 로그의 합과 곱 관계를 주고 세 값이 근인 삼차방정식(I-XU d1 · ★4) (2) 두 로그만 비로 주고 log_a c 를 묻기(★2) (3) 순환 곱=1 을 증명하게 하는 서술형(★3)."
```

```yaml
- id: RPM-ALG-0204
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1 이 아닌 세 양수 x, y, z 가 x^3=y^4=z^5 을 만족시킬 때 A=log_x y, B=log_y z, C=log_z x 의 대소 관계. 5지선다.
  category: "공통값 k 로 x=k^{1/3}, y=k^{1/4}, z=k^{1/5} → A=3/4, B=4/5, C=5/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^p=y^q=z^r 꼴에서 로그의 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^3=y^4=z^5=k 로 두면 log_x y=log k^{1/4}/log k^{1/3}=3/4, 같은 식으로 B=4/5, C=5/3 → A<B<C. 매개화 뒤 지수 비만 남으므로 k 의 값(0<k<1 포함)에 무관. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x^3=y^4=z^5=k → 각 로그 = 지수 비 → 3/4<4/5<5/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(3, 4, 5 → 2, 3, 6)를 바꾸면 세 비가 달라져 순서가 바뀔 수 있음. 제약: 세 비가 서로 다르게, 두 개는 1 보다 작고 하나는 1 보다 크게 두면 변별이 쉬움. 1 이 아닌 조건 유지."
    creative: "(1) A·B·C 의 곱이 1 임을 이용해 하나만 구하게(★2) (2) x, y, z 자체의 대소 관계를 묻기(k>1 과 0<k<1 분기 → I-MI d1 · ★3) (3) 지수를 문자 p, q, r 로 두고 A+B+C 의 최솟값(산술·기하평균 결합 · I-XU d1 · ★4)."
```

```yaml
- id: RPM-ALG-0205
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이차방정식 x^2−4x+2=0 의 두 근이 log_3 a, log_3 b 일 때 log_a ∛b + log_b ∛a 의 값.
  category: "근과 계수 p+q=4, pq=2 → 목표식 (1/3)(q/p+p/q) → 대칭식 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그와 이차방정식의 근과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=log_3 a, q=log_3 b 로 두면 밑변환으로 목표식은 (1/3)(q/p+p/q)=(p^2+q^2)/(3pq)=((p+q)^2−2pq)/(3pq)=(16−4)/6=2. 밑변환 → 대칭식 → 근과 계수의 표준 연쇄라 통찰 없음. M_total 5 → ★2 유지(세 도구 연결).
  tier: star_2
  mechanism_primary: "p, q 근 → log_a b=q/p → (1/3)(p^2+q^2)/(pq) → 근과 계수 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수(합 4·곱 2 → 합 6·곱 3)와 근호 차수(∛ → √)를 바꿀 수 있음. 제약: (합^2−2곱)/(차수·곱) 이 정수가 되게 조절. 두 근이 0 이 아니어야(곱≠0) 밑이 1 이 되지 않음."
    creative: "(1) log_a b·log_b a=1 을 이용해 두 값의 곱만 묻는 단순형(★1) (2) 두 근을 log_2 a, log_4 b 처럼 밑을 다르게 주어 밑 통일 추가(★3) (3) 계수를 문자로 두고 값이 정수가 되는 조건(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0206
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log √x=0.612 일 때 log x^4 + log ∛x 의 값.
  category: "log x=1.224 → (4+1/3) log x=(13/3)·1.224"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(log √x 주어질 때 log x^n)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log x=2×0.612=1.224 이고 목표식은 (13/3) log x=13×0.408=5.304. 계수 정리와 소수 곱뿐. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log √x → log x=1.224 → (4+1/3)·1.224=5.304"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5.304$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 값(0.612)과 지수 조합(x^4, ∛x → x^3, √x)을 바꿀 수 있음. 제약: 계수 합이 log x 의 값과 곱해 유한소수가 되게(분모 3 이면 log x 가 3 의 배수 소수)."
    creative: "(1) 답을 정수 부분·소수 부분으로 나눠 묻기(★2) (2) log x^4+log ∛x 의 값이 정수가 되는 x 를 역으로(I-BW d1 · ★3) (3) 두 조건 log √x, log ∛y 를 주고 log(xy) 계산(★1)."
```

```yaml
- id: RPM-ALG-0207
  page: 27
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    상용로그표(2.6~2.8 행 · 0~4 열)를 이용해 log(28.2×260) 의 값. 5지선다.
  category: "log 28.2=1+log 2.82 · log 260=2+log 2.6 → 표 값 합"
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
    28.2=2.82×10, 260=2.6×10^2 이므로 log=3+0.4502+0.4150=3.8652. 표 읽기(2.8 행 2 열 · 2.6 행 0 열)와 정수 부분 세기(T-단위). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "곱 → 로그 합 → 각각 10^n×(1~10) 분리 → 표 값 + 정수 부분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0207.png"
  latex: latex-bank/rpm-alg/items/0207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 수(28.2, 260)를 표 범위(2.60~2.84) 안 값에 10 의 거듭제곱을 곱한 다른 수로 바꿀 수 있음(예: 2730×0.264). 제약: 표에 있는 유효숫자 세 자리만 쓰고, 정수 부분 합이 선택지에서 변별되게 오답에 정수 부분 오류(2.xxxx)를 배치. 표 라벨(행·열)은 그림 고정."
    creative: "(1) 나눗셈 log(28.2/260) 을 묻기(음수 정수 부분 · Mₜ+1 · ★2) (2) 표에서 역으로 log x=1.4346 인 x 를 찾기(★1) (3) √(28.2×260) 의 자릿수를 묻기(로그 ↔ 자릿수 · ★2)."
```

```yaml
- id: RPM-ALG-0208
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log y=−1.5986 일 때 10^4(log 2520−y) 의 값. (log 2.52=0.4014 로 계산)
  category: "−1.5986=−2+0.4014 → y=2.52×10^{−2} · log 2520=3.4014 → 차 ×10^4"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log y=−1.5986 을 −2+0.4014 로 고쳐 소수 부분이 log 2.52 와 같음을 읽고 y=0.0252 로 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "음수 상용로그의 정수·소수 부분과 진수 복원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    음수 상용로그를 (정수)+(0 이상 1 미만) 으로 고쳐야 y=2.52×10^{−2}=0.0252 가 나오고, log 2520=3+0.4014 와 함께 10^4(3.4014−0.0252)=33762. 음수 로그의 재분해가 유일한 착안(EQV d1)이며 소수 넷째 자리 산술이 부담(Mₖ 2 · T-부호·T-단위). 통찰 1·M_total 7 → 시험 구역 상단 ★3.
  tier: star_3
  mechanism_primary: "−1.5986=−2+0.4014 → y=0.0252 · log 2520=3.4014 → 10^4×3.3762"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$33762$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log 값(−1.5986 → −2.5986: y=0.00252)과 진수(2520 → 252000), 배율 10^4 을 바꿀 수 있음. 제약: 소수 부분이 주어진 표 값(0.4014)과 정확히 맞아야 하고 최종 곱이 정수가 되도록 배율 지수를 소수 자릿수에 맞춤."
    creative: "(1) y 의 값만 묻기(★2) (2) log y 의 소수 부분이 log 2.52 와 같고 정수 부분이 −2 인 y 를 찾기(정의 확인 · ★2) (3) log y 와 log 2520 의 소수 부분이 같음을 이용해 y=2520×10^n 임을 보이게 하면 I-EQV d1 유지 ★3, 서술형."
```

```yaml
- id: RPM-ALG-0209
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    소리 크기 D=10 log(P/k) 에서 B 지역의 강도가 A 의 500 배일 때 두 지역의 소리 크기 차(dB). (log 2=0.3)
  category: "차 → 10 log(P_B/P_A)=10 log 500 → 10(2+log 5)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(관계식의 차·비 → 배율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D_B−D_A=10 log(P_B/P_A)=10 log 500=10(2+1−log 2)=27. 상수 k 는 차에서 소거되고 log 5=1−log 2 환산 한 줄. 통찰 없음·M_total 4 로 −1 후보이나 문장형 관계식 해석·상수 소거를 고려해 ★2 유지(중요 태그).
  tier: star_2
  mechanism_primary: "D 차 = 10 log(P 비) → log 500=2+log 5=2.7 → 27"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27\,\mathrm{dB}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율(500 → 250, 2000)과 계수 10, log 2 값을 바꿀 수 있음. 제약: 배율이 2 와 5·10 의 곱이어야 log 2 만으로 계산됨. 답 단위 dB 표기 유지."
    creative: "(1) dB 차를 주고 배율을 묻기(10^{2.7} → log 5 역인식 · I-EQV d1 · ★2~3) (2) 세 지역 A, B, C 의 강도가 등비일 때 D 의 등차성(★2) (3) k 를 실제 값(10^{−12})으로 주고 절대 크기를 묻기(★2)."
```

```yaml
- id: RPM-ALG-0210
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    pH=−log X 에서 정상 비(pH 5.6)와 산성비(pH 4.82)의 수소 이온 농도 비 → 오염 물질의 양이 정상의 몇 배. (log 2=0.30, log 3=0.48)
  category: "X=10^{−pH} → 비 10^{5.6−4.82}=10^{0.78} → 0.78=log 2+log 3 → 6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10^{0.78} 을 주어진 log 값의 합 0.30+0.48=log 6 으로 역인식해 6 배로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(관계식의 차·비 → 배율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 농도는 10^{−5.6}, 10^{−4.82} 이고 비는 10^{0.78}. 0.78 을 log 2+log 3=log 6 으로 읽어야 6 배가 나오므로 이 역인식이 유일한 착안(EQV d1). 부호(−log) 처리 외 계산 없음. 통찰 1·M_total 5 → ★2(시험 구역·실생활).
  tier: star_2
  mechanism_primary: "pH 차 0.78 → 농도 비 10^{0.78} → 0.78=log 2+log 3 → 6 배"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$6$배"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 pH 값의 차를 log 값 조합(0.30·0.48·0.70)의 합이 되게 조절(차 0.6 → 4 배, 0.9 → 8 배, 1.08 → 12 배). 제약: 차가 주어진 log 값의 정수 계수 합으로 정확히 표현되어야 함."
    creative: "(1) 배율을 주고 pH 를 역으로(★2) (2) 두 비를 같은 부피로 섞을 때 pH(농도 평균 → 로그 재계산 · I-XU d1 · ★4) (3) 차가 log 값 조합으로 딱 안 떨어지게 하고 몇 배에 가장 가까운지 묻기(근사 · ★2)."
```

```yaml
- id: RPM-ALG-0211
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    자연수 N 에 대하여 log N 의 정수 부분을 f(N) 이라 할 때 f(1)+f(2)+⋯+f(200) 의 값.
  category: "f(N)=자릿수−1 → 1~9: 0, 10~99: 1, 100~200: 2 → 구간별 개수×값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log N 의 정수 부분을 N 의 자릿수−1 로 옮겨 구간별 상수 함수로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "log N 의 정수 부분의 합(자릿수 세기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 한 자리 0, 두 자리 1, 세 자리 2 이므로 합은 9·0+90·1+101·2=292. 로그 ↔ 자릿수 전환(RT d1) 뒤 구간 개수 세기(100~200 이 101 개 · T-경계). 통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "f(N)=자릿수−1 → 구간 개수 9·90·101 → 0+90+202=292"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$292$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(200 → 500, 1000)을 바꾸면 마지막 구간 개수와 f=3 구간 추가 여부가 달라짐. 제약: 상한 포함 개수(상한−100+1) 를 정확히 세게 하고, 밑을 2 로 바꾸면 2 의 거듭제곱 구간으로 같은 골조."
    creative: "(1) f(N)=2 인 N 의 개수만(★2) (2) 합이 처음으로 1000 을 넘는 N 의 최솟값(누적 합 역추적 · I-BW d1 · ★4) (3) f(N)−f(N−1)=1 인 N 의 개수(경계 넘는 순간 · 0221 골조 · ★3)."
```

```yaml
- id: RPM-ALG-0212
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    (가) log x 의 정수 부분이 2, (나) log x^3 의 소수 부분과 log(1/x) 의 소수 부분이 같음을 만족시키는 실수 x 의 최댓값 k 에 대하여 100 log k 의 값.
  category: "(나) ⇔ 3 log x+log x=4 log x 정수 → 8≤4 log x<12 → 최대 11/4"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 소수 부분이 같다 ⇔ 차 log x^3−log(1/x)=4 log x 가 정수 로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 소수 부분이 같을 조건(차가 정수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (나)를 「차가 정수」로 옮기면 4 log x∈Z, (가)에서 8≤4 log x<12 → 4 log x=8, 9, 10, 11 이고 최대 log k=11/4 → 275. 동치 변환(EQV d1) 뒤 범위 열거·상한 제외(T-경계)·음수 로그(T-부호). 통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "소수 부분 같음 ⇔ 4 log x ∈ Z → 8≤4 log x<12 → log k=11/4 → 275"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$275$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(2 → 3), 식(x^3·1/x → x^2·1/x^3: 계수 5), 배율 100 을 바꿀 수 있음. 제약: 계수×구간 길이가 정수 해 3~4 개를 만들고, 최댓값이 상한(정수 부분+1)을 넘지 않게 상한 제외를 확인. 100 log k 가 정수가 되도록 분모를 4 나 5 로."
    creative: "(1) 만족하는 모든 x 의 곱(0190 골조 · ★3) (2) (나)를 소수 부분의 합이 1 인 조건으로 바꾸면 4 log x 가 정수+1 조건 → 같은 EQV 골조 ★3 (3) 최댓값과 최솟값의 비를 묻기(★3)."
```

```yaml
- id: RPM-ALG-0213
  page: 28
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    log x 의 정수 부분이 3 이고 log √x 의 소수 부분과 log ∛x 의 소수 부분의 합이 1 일 때 log x^2 의 소수 부분. 5지선다.
  category: "log x=3+α → log √x=1+(1/2+α/2), log ∛x=1+α/3 → 합 1 → α=3/5 → 2 log x 의 소수 부분"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log √x=(3+α)/2 를 정수 1 과 소수 부분 1/2+α/2 로 재분해하고(0≤α<1 이므로 1 미만 확인), log ∛x 의 소수 부분은 α/3 으로 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상용로그의 소수 부분의 재분해(log √x 등의 소수 부분 · 합 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정수 부분이 홀수라 log √x 의 소수 부분에 1/2 이 남고(1/2+α/2<1 검토 필요) log ∛x 의 소수 부분은 α/3. 합 1 에서 5α/6=1/2, α=3/5 → log x^2=7.2 의 소수 부분 1/5. 두 로그의 재분해와 범위 확인이 핵심(EQV d2)이며 마지막에 다시 소수 부분을 취하는 단계(T-경계·T-범위). 통찰 1(d2)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "log x=3+α → 소수부 (1/2+α/2)+(α/3)=1 → α=3/5 → 2 log x=7.2 → 1/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(3 → 5 홀수 유지)과 근호 차수(√, ∛ → √, ∜)를 바꿀 수 있음. 제약: 정수 부분/차수의 나머지가 소수 부분에 남는 구조를 유지하고, α 가 [0,1) 안에 하나로 정해지며 최종식 log x^2 의 소수 부분이 선택지와 맞게."
    creative: "(1) 정수 부분을 짝수로 바꾸면 1/2 이 사라져 0191 형 ★3(d1) (2) 합 대신 차가 주어지면 부호에 따라 두 케이스 → I-MI d1 추가 · ★4 (3) x 의 값 자체(10^{3.6})를 묻고 log 2=0.3 으로 자연수 근사(★3)."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0214
  page: 29
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a=log_9(2−√3) 일 때 (27^a−27^{−a})/(3^a+3^{−a}) 의 값.
  category: "3^{2a}=2−√3 → 켤레 역수 → t=3^a 의 합·차 제곱 → 부호 결정 → 세제곱 차 인수분해"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "27^a=(3^a)^3 으로 보고 t^3−t^{−3}=(t−t^{−1})(t^2+1+t^{−2}) 로 인수분해해 t+t^{−1}, t−t^{−1}, t^2+t^{−2} 의 값 문제로 환원(또는 u=3^{2a} 치환으로 분수식 정리)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(t−t^{−1})^2=2 의 두 후보 ±√2 중 t^2=2−√3<1 ⇒ t<1 로 −√2 만 채택(양수 후보 기각)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "a^x±a^{-x} 꼴 식의 값(로그로 정의된 지수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    log_9 → 3^{2a}=2−√3, 3^{−2a}=2+√3(켤레)이므로 t^2+t^{−2}=4, (t+t^{−1})^2=6, (t−t^{−1})^2=2. 부호 판정 후 분자 =(−√2)·5, 분모 √6 → −5/√3=−5√3/3. 인수분해 착안(RT d1)과 부호 기각(VF d1) 두 통찰·M_total 8 → 서술형 출발점 ★3 에서 +1 하여 ★4.
    [분류 이슈] u=3^{2a} 로 놓고 (u^3−1)/(u^2+u)=5(u−1)/(u+1) 로 정리하는 경로는 부호 분기가 없어 통찰 1 개(RT d1)·★3 후보. 라벨은 ★4 로 두고 기록. 후보 ★3/★4.
  tier: star_4
  mechanism_primary: "3^{2a}=2−√3 → 켤레 역수 → 합·차 제곱(6, 2) → 부호(t<1) → 세제곱 차 인수분해 → −5√3/3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-\dfrac{5\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 2−√3 을 켤레 곱이 1 인 다른 수(√2−1, 3−2√2, (√5−1)/2)로, 밑 9 를 3·27 로, 분자·분모 지수 조합(27^a±27^{−a} / 3^a±3^{−a})을 바꿀 수 있음. 제약: 3^{2a} 의 역수가 켤레로 바로 나오도록 진수의 켤레 곱을 1 로 유지하고, 진수<1 이면 차의 부호가 음수임을 답에 반영."
    creative: "(1) 분모를 3^a−3^{−a} 로 바꾸면 세제곱 차/차 가 바로 약분되어 부호 분기 소멸 → ★3 (2) 진수를 2+√3 으로 바꾸면 t>1 로 부호가 양 → VF 는 남지만 함정 약화 ★3~4 (3) u=3^{2a} 치환 경로와 합·차 제곱 경로를 모두 쓰게 하는 서술형 두 풀이(I-SC d1 명시 · ★4)."
```

```yaml
- id: RPM-ALG-0215
  page: 29
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    이차방정식 x^2+x log_2 12+2 log_2 3=0 의 두 근 α, β 에 대하여 2^α+2^β 의 값.
  category: "log_2 12=2+log_2 3 → (x+2)(x+log_2 3)=0 → 2^{−2}+2^{−log_2 3}"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2^α+2^β 는 α+β·αβ 의 대칭식으로 못 만드니 근과 계수 갈래를 버리고, log_2 12=2+log_2 3 분해로 인수분해해 근을 직접 구하는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그와 이차방정식의 근과 계수의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근과 계수로 가면 2^{α+β}=1/12 뿐 합이 안 나와 막힘. log_2 12=2+log_2 3 을 보면 합 −(2+log_2 3)·곱 2 log_2 3 에서 두 근 −2, −log_2 3 이 보이고 2^{−2}+2^{−log_2 3}=1/4+1/3=7/12. 갈래 선택(SC d1) 하나가 핵심이고 계산은 짧음. 통찰 1·M_total 5 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log_2 12=2+log_2 3 → 근 −2, −log_2 3 → 2^{−2}+1/3=7/12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 log_2 12 를 log_2 (2^p·q) 꼴로 바꾸고 상수항을 p·log_2 q 로 맞추면 근은 −p, −log_2 q. 제약: 상수항이 두 근의 곱과 일치해야 인수분해가 성립하고, 답 2^{−p}+1/q 가 간단한 분수."
    creative: "(1) 2^α·2^β 를 묻기(근과 계수만 · ★1) (2) 4^α+4^β 를 묻기(같은 SC 골조 · ★3) (3) 근 하나를 −2 로 주고 다른 근으로 상수항의 로그 진수를 역추적(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0216
  page: 29
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    1 보다 큰 세 실수 a, b, c 에 대하여 log_a c : log_b c = 2 : 1 일 때 log_a b + log_b a 의 값.
  category: "비 → log_a c=2 log_b c → 밑변환으로 log_a b=2 → 2+1/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 로그의 비·순환 곱 조건(밑변환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log_a c/log_b c=log_a c·log_c b=log_a b=2 이므로 log_b a=1/2, 합 5/2. 밑변환 공식 한 번으로 비 조건이 log_a b 로 바뀌는 표준 절차라 통찰 없음. M_total 6·서술형 출발점 → ★3 유지.
    [분류 이슈] 서술형 구역(★3 출발)이나 통찰 없음·계산 두 줄이라 체감은 ★2~3 경계. 후보 ★2/★3.
  tier: star_3
  mechanism_primary: "log_a c : log_b c = 2:1 → log_a b=2 → 2+1/2=5/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2:1 → 3:1, 3:2)를 바꾸면 log_a b=비 값 r, 답은 r+1/r. 제약: a, b, c>1 로 로그 값 양수 유지, 비가 유리수면 답도 유리수."
    creative: "(1) log_a b+log_b a 의 값(5/2)을 주고 비를 역으로(이차방정식 r+1/r=5/2 · I-BW d1 · ★3) (2) 세 로그의 비 log_a c:log_b c:log_c a 를 주어 0203 골조로(★3~4) (3) log_a b+log_b a≥2 최솟값 문제(산술·기하평균 · I-XU d1 · ★3)."
```

```yaml
- id: RPM-ALG-0217
  page: 29
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    log x 의 정수 부분이 7 이고 log √x 의 소수 부분이 0.8 일 때 log(1/x)=n+α (n 정수, 0≤α<1) 의 10α.
  category: "log x=7+β → log √x=3+(1/2+β/2) → 1/2+β/2=0.8 → β=0.6 → log(1/x)=−7.6=−8+0.4"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log √x=(7+β)/2=3+(1/2+β/2) 로 재분해해 소수 부분 1/2+β/2=0.8"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log(1/x)=−7.6 을 −8+0.4 로 고쳐 소수 부분 α=0.4(n=−8)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 소수 부분의 재분해(log √x 등의 소수 부분 · 합 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정수 부분이 홀수라 log √x 의 소수 부분이 1/2+β/2 이고 0.8 과 같으므로 β=0.6, log x=7.6. log(1/x)=−7.6 의 소수 부분은 −0.6 이 아니라 0.4(n=−8) → 10α=4. 홀수 절반 재분해와 음수 로그 재분해 두 단계가 각각 EQV d1(T-경계·T-부호).
    [분류 이슈] 통찰 2 개로 +1 후보였으나 둘 다 이 유형의 표준 재분해(d1)이고 M_total 6 이라 서술형 출발점 ★3 유지. 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "log x=7+β → 1/2+β/2=0.8 → β=0.6 → −7.6=−8+0.4 → 10α=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(7 → 5 홀수 유지)과 소수 부분 값(0.8 → 0.7, 0.9)을 바꿀 수 있음. 제약: 소수 부분 값이 1/2 이상이어야 1/2+β/2 와 맞아 β∈[0,1) 가 나옴(0.3 이면 해 없음). 최종 10α 가 정수가 되게 β 를 소수 한 자리로."
    creative: "(1) 소수 부분 값을 0.3 으로 주고 해가 없음을 설명하게(I-VF d1 · ★3~4) (2) log(1/x) 대신 log(1/√x) 의 소수 부분(재분해 두 번 → ★3) (3) 정수 부분 7 을 미지수 m 으로 두고 log(1/x) 의 정수 부분을 m 으로 나타내기(Mₐ 2 · ★3)."
```

### 실력 Up

```yaml
- id: RPM-ALG-0218
  page: 29
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    네 자연수 a, b, c, d 가 (가) a log_360 2 + b log_360 3 + c log_360 5 = d, (나) a, b, c 의 최대공약수 3 을 만족시킬 때 a+b+c+d.
  category: "로그 합 → 2^a3^b5^c=360^d=2^{3d}3^{2d}5^d → 지수 비교 (a,b,c)=(3d,2d,d) → gcd=d=3"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "로그 등식을 2^a·3^b·5^c=360^d 로 바꾼 뒤 360=2^3·3^2·5 의 소인수분해 유일성으로 지수 비교 a=3d, b=2d, c=d 로 동치 변환"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "gcd(3d, 2d, d)=d 이므로 (나)의 최대공약수 3 에서 d=3 을 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그 조건식의 소인수 지수 비교(자연수 해)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    (가)의 좌변을 하나의 로그로 묶으면 2^a3^b5^c=360^d 이고 소인수 지수 비교로 (a,b,c)=(3d,2d,d). 이 셋의 최대공약수가 d 이므로 (나)에서 d=3, (a,b,c,d)=(9,6,3,3), 합 21. 소인수 지수 비교(EQV d2)와 gcd 역추적(BW d1) 두 통찰·M_total 7 → 실력 Up 출발점 ★4 유지(+1 후보이나 ★5 조건 미달: 통찰 3 개·SC/VF/SYM/XU 부재).
  tier: star_4
  mechanism_primary: "로그 합 → 2^a3^b5^c=360^d → 지수 비교 (3d,2d,d) → gcd=d=3 → 21"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$21$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 360=2^3·3^2·5 를 다른 소인수분해(72=2^3·3^2 → 두 항, 1500=2^2·3·5^3)로, 최대공약수 3 을 다른 값으로 바꿀 수 있음. 제약: 밑의 소인수 지수가 서로소가 아니면 gcd 가 d 의 배수가 되어 d 가 유일하게 결정되지 않으므로 지수 (3,2,1) 처럼 gcd 1 유지."
    creative: "(1) (나) 를 a+b+c=36 처럼 합 조건으로 바꾸기(★3) (2) d 를 고정하고 (a,b,c) 의 최대공약수를 묻기(★3) (3) 밑을 2^2·3^2 처럼 지수 gcd≠1 로 두어 d 후보가 여러 개 생기게 하고 조건으로 기각(I-VF d1 추가 · ★5 후보)."
```

```yaml
- id: RPM-ALG-0219
  page: 29
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    log_27 3n^2 + (1/3) log_3 √n 의 값이 30 이하의 자연수가 되도록 하는 자연수 n 의 개수.
  category: "식 정리 1/3+(5/6) log_3 n=m → log_3 n=(6m−2)/5 → 자연수 n ⇔ 지수 정수 → m≡2 (mod 5)"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n 이 자연수 ⇔ 3^{(6m−2)/5} 가 자연수 ⇔ (6m−2)/5 가 음이 아닌 정수 로 결과 조건을 지수 조건으로 역추적"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "6m−2≡0 (mod 5) ⇔ m≡2 (mod 5) 의 주기 5 규칙으로 m=2, 7, …, 27 열거"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그식의 값이 자연수가 되는 자연수 n 의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑 통일로 식은 1/3+(5/6) log_3 n 이고 이것이 자연수 m 이면 log_3 n=(6m−2)/5. n 이 자연수이려면 이 지수가 음이 아닌 정수여야 하므로 6m≡2 (mod 5), m≡2 (mod 5) → 1≤m≤30 에서 2, 7, 12, 17, 22, 27 의 6 개(각각 n=3^2, 3^8, …). 역추적(BW d2)과 주기 규칙(PD d1) 두 통찰·M_total 8(T-범위·T-경계) → 실력 Up 출발점 ★4 유지(★5 조건 미달).
  tier: star_4
  mechanism_primary: "밑 통일 → (5/6) log_3 n=m−1/3 → 지수 (6m−2)/5 ∈ Z → m≡2 (mod 5) → 6 개"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(log_27 → log_9, 1/3 → 1/2)와 상한 30 을 바꾸면 합동식의 법과 주기가 달라짐. 제약: 정리한 계수의 분모가 5 처럼 소수이면 m 의 잉여류 하나만 답이 되어 깔끔하고, 상한/주기 로 개수가 정해짐. 3^{지수} 가 자연수이려면 지수 정수 조건이 필수임을 답지에 명시."
    creative: "(1) 값이 정수(음수 포함)가 되는 n 의 개수 → 지수≥0 조건 검토(I-VF d1 · ★4) (2) n 이 아니라 값 m 의 최댓값·최솟값 묻기(★3) (3) log_3 n 을 log_2 n 으로 바꾸어 n=2^k 로 같은 골조(★4)."
```

```yaml
- id: RPM-ALG-0220
  page: 29
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    1 이 아닌 세 양수 a, b, c 에 대하여 a^x=(∛(b^2))^y=(⁵√c)^z=64, ab/c=2^{18} 일 때 1/x+3/(2y)−5/z 의 값.
  category: "a=64^{1/x}, b=64^{3/(2y)}, c=64^{5/z} → ab/c=64^{목표식}=64^3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/x=log_64 a, 3/(2y)=log_64 b, 5/z=log_64 c 로 읽어 목표식을 log_64(ab/c) 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a^x=b^y=k 꼴 조건식(역수 로그)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 등식을 로그로 바꾸면 1/x=log_64 a, 3/(2y)=log_64 b, 5/z=log_64 c 이므로 목표식=log_64(ab/c)=log_64 2^{18}=3. a^x=b^y=k 유형의 표준 골조(역수 로그)라 EQV d1 하나·M_total 6 이고 계산이 짧아 ★3.
    [분류 이슈] 실력 Up 구역(★4 출발)이나 통찰 1(EQV d1)·M_total 6 의 표준 골조라 ★3 라벨. 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "각 식 → 1/x=log_64 a 등 → 목표식 = log_64(ab/c) = log_64 2^{18} = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수(∛b^2 → √b^3, ⁵√c → ∛c)와 목표식 계수를 맞춰 바꾸고, 우변 64=2^6 과 ab/c=2^{18} 을 2 의 다른 거듭제곱으로. 제약: 목표식 계수가 각 밑의 로그 계수(지수의 역수)와 정확히 일치해야 하고 답 = log_64(2^{18}) 이 정수가 되게 지수를 6 의 배수로."
    creative: "(1) 목표식을 1/x+1/y+1/z 로 단순화(★2) (2) ab/c 대신 a^2 b/c^3 을 주어 계수 맞추기(★3) (3) 64 를 문자 k 로 두고 목표식이 k 에 무관함을 보이게(Mₐ 3 · ★3~4)."
```

```yaml
- id: RPM-ALG-0221
  page: 29
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    양수 x 에 대하여 log x 의 정수 부분을 f(x) 라 할 때 f(2n)=f(n)+1 을 만족시키는 100 이하의 자연수 n 의 개수.
  category: "f(2n)=f(n)+1 ⇔ n<10^{k+1}≤2n ⇔ 5·10^k≤n<10^{k+1} → k=0,1 열거 · n=100 기각"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정수 부분이 1 커진다 ⇔ n 과 2n 사이에 10 의 거듭제곱이 끼어 있다 ⇔ 5·10^k≤n<10^{k+1} 로 조건을 구간으로 동치 변환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k=0 (5~9), k=1 (50~99) 는 채택, k=2 후보 n=100 은 f(200)=f(100) 이라 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "log 의 정수 부분 함수 조건 f(2n)=f(n)+1 세기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f(n)=k 이면 10^k≤n<10^{k+1} 이고 f(2n)=k+1 이려면 2n≥10^{k+1}, 즉 5·10^k≤n<10^{k+1}. 100 이하에서 5~9 (5 개), 50~99 (50 개), n=100 은 2n=200 의 정수 부분이 그대로 2 라 제외 → 55. 조건의 구간 동치 변환(EQV d2)과 끝 후보 기각(VF d1) 두 통찰·M_total 8(T-경계: 5·10·50·100 · T-범위) → 실력 Up 출발점 ★4 유지(★5 조건 미달).
  tier: star_4
  mechanism_primary: "f(2n)=f(n)+1 ⇔ 5·10^k≤n<10^{k+1} → 5~9, 50~99 → 55 (n=100 기각)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$55$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율 2(→ 3: 10^{k+1}/3≤n → 4~9, 34~99)와 상한 100(→ 1000)을 바꿀 수 있음. 제약: 배율이 10 의 약수가 아니면 하한이 정수가 아니어서 올림 처리(T-경계)가 들어가고, 상한이 10 의 거듭제곱이면 그 값 자체의 기각 검토가 필요."
    creative: "(1) f(2n)=f(n) 인 n 의 개수(여사건 · I-SC d1 · ★4) (2) f(3n)=f(n)+1 로 바꾸면 하한 올림 → ★4 (3) f(n^2)=2f(n)+1 인 n 의 개수(√10 경계 → 3.16… 무리수 경계 · Mₖ 2 · ★4~5)."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 5 · ★2 17 · ★3 14 · ★4 4 · ★5 0
- 통찰형 15 · 절차형 25 · premium 0 (insights 가 비어 있지 않은 블록은 17 — 0200·0210 은 d1 하나가 ★2 문항의 한 단계라 절차형으로 분류)
- type_hint 상위: 「상용로그의 실생활 활용(관계식의 차·비 → 배율)」 5 · 「상용로그의 소수 부분의 재분해(log √x 등의 소수 부분 · 합 조건)」 3 · 「로그의 정수 부분과 소수 부분(밑이 10 이 아닌 로그 · 밑^소수 부분 값)」 2 · 「상용로그의 소수 부분이 같을 조건(차가 정수)」 2 · 「로그의 밑변환 공식을 이용한 계산」 2 · (이하 2: 「a^{log_a b} 꼴의 지수 계산」 · 「a^x=b^y=k 꼴 조건식(역수 로그)」 · 「세 로그의 비·순환 곱 조건(밑변환)」 · 「로그와 이차방정식의 근과 계수의 관계」 · 나머지 18 유형은 1 문씩 · 총 27 유형명)
- 그림: 1문(`crop:fig-0207.png` · 상용로그표 2.6~2.8 행 · 0~4 열)
- 구역별: 유형 10 3문(★2 2 · ★3 1) · 유형 UP 11 4문(★2 3 · ★3 1) · 유형 UP 12 3문(★3 3) · 시험에 꼭 나오는 문제 22문(★1 5 · ★2 12 · ★3 5) · 서술형 주관식 4문(★3 3 · ★4 1) · 실력 Up 4문(★3 1 · ★4 3)
- target_cohort: 하위권 5 · 중하위권 15 · 중위권 14 · 중상위권 2 · 상위권 4
- M_total: 4 ×10 · 5 ×11 · 6 ×12 · 7 ×4 · 8 ×3
- 통찰 유형 빈도(단계 수): I-EQV 12 · I-RT 3 · I-VF 2 · I-BW 2 · I-CON 1 · I-SC 1 · I-PD 1 (depth 2 는 0213·0218·0219·0221 의 4 단계)
- 전사 답 확인: 40문 모두 직접 풀어 전사본 answer 와 일치. 「전사 답 확인 필요」 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0190 | 유형 UP 「중」. 통찰 없음이나 M_total 6(Mₜ 2)이라 −1 없이 ★3 유지. 체감은 ★2~3 경계 | ★2 / ★3 |
| RPM-ALG-0214 | 서술형. 합·차 제곱 경로는 RT d1+VF d1(부호 기각)로 ★4 이나, u=3^{2a} 치환 경로는 부호 분기가 없어 통찰 1·★3. 라벨 ★4 | ★3 / ★4 |
| RPM-ALG-0216 | 서술형 구역(★3 출발)이나 밑변환 한 번·계산 두 줄의 절차형. 라벨 ★3 | ★2 / ★3 |
| RPM-ALG-0217 | 서술형. EQV d1 두 단계(홀수 절반 재분해 · 음수 로그 재분해)로 +1 후보였으나 둘 다 표준 재분해라 ★3 유지 | ★3 / ★4 |
| RPM-ALG-0220 | 실력 Up 구역(★4 출발)이나 a^x=b^y=k 표준 골조 EQV d1·M_total 6 이라 ★3 라벨(1단 하향) | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: (1) 「상용로그의 소수 부분이 같을 조건(차가 정수)」(0189·0212) — 동치 변환 EQV 가 골조인 유형 UP 12 의 대표 골조. (2) 「상용로그의 소수 부분의 재분해」(0191·0213·0217) — 정수 부분의 홀짝에 따라 d1/d2 가 갈리므로 카탈로그에서 base ★를 정수 부분 짝수형 ★3(d1)·홀수형 ★3(d2)로 나누거나 홀수형을 상위 변형으로 표기. (3) 「log 의 정수 부분 함수 열거」(0211·0221) — 자릿수 전환(RT)과 구간 동치 변환(EQV d2)+기각(VF)으로 ★3 과 ★4 가 갈리며, 0211 골조(합)와 0221 골조(경계 넘김 조건)를 한 유형의 두 층으로 둘 수 있음. (4) 「로그 조건식의 소인수 지수 비교」(0218) — 이 범위 유일이지만 실력 Up 전형이라 ★4 base 후보.
- **통합해도 될 유형**: (1) 「a^x=b^y=k 꼴 조건식」(0202·0220) — 0220 은 근호 차수만 붙은 같은 골조. (2) 「세 로그의 비·순환 곱 조건」(0203·0216) — 0216 은 두 로그 비, 0203 은 세 로그 순환 곱으로 같은 밑변환 골조의 두 층(★3·★3). (3) 「로그와 이차방정식의 근과 계수」(0205·0215)와 0188 — 0188 은 정수·소수 부분이 근인 특수형이므로 하위 태그로. (4) 「상용로그의 실생활 활용」 5 문은 「관계식의 차 → 배율」(0182·0183·0209·0210)과 「인수 비 → 값 계산」(0184)의 두 층으로 base ★2/★3 을 두면 됨.
- **★ 출발점 메모**: 이 범위에서 유형 UP 「중」 표시 문항(0186·0187·0190)은 절차형이면 ★2 로 떨어졌고, 통찰 1 개가 있으면 ★3 에 머물렀다. 실력 Up 4 문 중 1 문(0220)은 ★3 으로 내려갔으므로 실력 Up base 를 일괄 ★4 로 두지 말고 골조별로 정하는 편이 맞다.
