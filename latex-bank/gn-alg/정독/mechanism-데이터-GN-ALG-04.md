---
name: mechanism-데이터-GN-ALG-04
description: 개념원리 대수 04 로그의 성질(1/1 · 35~43쪽 · 41문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 04 로그의 성질
  unit_code: ALG-04
  part: "1/1"
  extract_range: "35~43쪽 · 35-54~43-85"
  total_problems: 41
  unit_total: 41
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 대수 · 04 로그의 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 04단원 「로그의 성질」 35~43쪽의 전 41문항을 다룬다. 구역은 다섯이다 — 개념원리 익히기 5문(35쪽), 필수·발전 예제 22문(36~41쪽 · 필수 예제 11 + 그 짝인 확인체크 11), 연습문제 STEP 1 7문(42쪽), STEP 2 5문(43쪽), 실력 UP 2문(43쪽). 그림 문항은 없다.

벤더 난이도 신호는 구역과 태그다. 「개념원리 익히기」는 개념 확인이라 ★1 출발, 「필수 예제」(tag 「필수」)는 ★2 출발, 「연습문제 STEP 1」은 ★2 · 「STEP 2」는 ★3 · 「실력 UP」은 ★4 출발이며 「수능 기출」 태그는 통찰 유무에 따라 +0~1 이다. 한 가지 이 단원 특유의 해석을 밝혀 둔다: tag 「확인체크」 문항이 이 범위에서는 익히기 구역이 아니라 **필수 예제 바로 뒤에 짝으로 붙어 있어** 그 예제와 같은 난이도층을 겨냥한다. 그래서 예제 구역의 확인체크는 ★1 이 아니라 **짝 예제와 같은 ★2 를 출발점**으로 삼고, 통찰 수로만 ±1 했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다. 로그 단원 특성상 변형 제약의 핵심은 **밑 조건(양수·1 아님)과 진수 조건(양수)**, 그리고 값이 유리수로 떨어지도록 진수를 밑의 거듭제곱 꼴로 유지하는 것이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-35-54
  page: 35
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_5 5$, $\log_3 1$, $\log_4 4$, $\log_{1/2} 1$ 의 값을 각각 구하는 문제.
  category: "로그의 정의 → log_a a=1, log_a 1=0 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — log_a a 와 log_a 1 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑과 진수가 같으면 1, 진수가 1이면 0. 정의를 그대로 읽는 한 단계뿐이고 밑이 1/2 인 경우도 같은 규칙이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "로그의 정의 → 밑=진수면 1, 진수=1이면 0 → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $0$ ⑶ $1$ ⑷ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/35-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 임의의 양수(1 아님)로 바꿔도 답은 1 또는 0 으로 고정. 제약: 밑은 양수이고 1 이 아니어야 하며 진수는 양수여야 한다. 분수 밑(1/2, 1/3)을 한 칸 섞어 두는 배치를 유지하면 '밑이 1보다 작아도 규칙은 같다'는 확인이 살아 있다."
    creative: "(1) log_a a^k 형태로 확장해 답을 k 로(★1 유지) (2) 밑과 진수를 뒤섞어 log_a 1 과 log_1 a 의 차이를 묻는 참·거짓 보기(밑 조건 인식 → ★2) (3) 값이 0 이 되는 로그를 모두 고르게 하면 진수 조건 점검이 붙어 ★2."
```

```yaml
- id: GN-ALG-35-55
  page: 35
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_4 8+\log_4 2$, $\log_{10} 50-\log_{10} 5$, $\log_3 \frac{3}{4}+\log_3 12$, $\log_3 27\sqrt{3}$ 의 값.
  category: "로그의 합·차 → 진수의 곱·몫으로 묶기 → 밑의 거듭제곱 꼴로 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 기본 성질(합·차)로 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합은 진수의 곱, 차는 진수의 몫으로 묶으면 각각 16, 10, 9 가 되어 밑의 거듭제곱으로 떨어진다.
    ⑷ 만 27√3 을 3의 7/2제곱으로 보는 한 단계가 더 붙는다. 익히기 ★1 출발 · 통찰 0 → ★1.
  mechanism_primary: "로그의 합·차 → 진수 곱·몫으로 묶기 → 진수를 밑의 거듭제곱으로 → 지수가 답"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $1$ ⑶ $2$ ⑷ $\dfrac{7}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/35-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 쌍을 곱·몫이 밑의 거듭제곱이 되도록만 고르면 자유(예: 밑 4 → 32와 2, 밑 3 → 2/9와 54). 제약: 곱·몫이 밑의 유리수 거듭제곱이어야 답이 유리수로 떨어지고, 진수는 모두 양수여야 한다."
    creative: "(1) 세 항 합·차로 늘리기(★1 유지) (2) 한 항을 루트·세제곱근으로 두어 유리수 지수 처리를 강제(★2) (3) 값을 주고 빠진 진수를 찾게 하면 역방향이 되어 ★2."
```

```yaml
- id: GN-ALG-35-56
  page: 35
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $\log_{10} 2=a$, $\log_{10} 3=b$ 일 때 ⑴~⑷ $\log_{10} 6$, $\log_{10} 18$, $\log_{10} 5$, $\log_{10} \frac{9}{8}$ 를 $a$, $b$ 로 나타내기.
  category: "진수를 2·3·10 의 거듭제곱 곱으로 분해 → 로그의 성질로 a, b 결합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그를 문자 a, b 로 나타내기(진수의 소인수분해)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6=2·3, 18=2·3², 9/8=3²/2³ 은 곧바로 분해되고 ⑶ 만 5=10/2 로 보아 1-a 가 된다.
    이 단원에서 5 를 10/2 로 바꾸는 것은 본문에 제시된 표준 절차라 통찰로 세지 않았다. 익히기 ★1 출발 유지.
  tier: star_1
  mechanism_primary: "진수를 2·3·10 의 곱·몫으로 분해 → 로그의 합·차·지수 성질 → a, b 식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a+b$ ⑵ $a+2b$ ⑶ $1-a$ ⑷ $2b-3a$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/35-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2^p·3^q·5^r 꼴에서 고르면 그대로 성립(12, 0.6, 45, 16/27 등). 제약: 5 가 들어가면 반드시 10/2 경유가 필요하고, 7 같은 새 소인수가 들어가면 a, b 만으로 표현할 수 없다."
    creative: "(1) 문자 조건을 log 2=a, log 7=c 로 바꿔 28·0.35 를 묻기(★1 유지) (2) 밑을 3 으로 바꿔 밑의 변환이 한 번 더 필요하게(★2) (3) a, b 로 나타낸 식을 주고 원래 진수를 역추적하게 하면 I-BW 가 붙어 ★2~3."
```

```yaml
- id: GN-ALG-35-57
  page: 35
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_{16} 8$, $\log_{1000} \frac{1}{10}$, $2^{\log_2 5}$, $4^{\log_2 9}$ 의 값.
  category: "밑·진수를 같은 소수의 거듭제곱으로 → 지수 비로 로그값 / a^(log_a b)=b 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑과 진수가 같은 수의 거듭제곱인 로그 · a^(log_a b)=b"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 밑·진수를 2, 10 의 거듭제곱으로 바꾸면 지수의 비가 곧 값이다.
    ⑶ 은 성질 그대로, ⑷ 만 4=2² 로 바꿔 지수를 2배로 옮기는 한 단계가 더 붙는다. 익히기 ★1 출발 유지.
  tier: star_1
  mechanism_primary: "밑·진수를 같은 소수의 거듭제곱으로 통일 → 지수 비 / 4^(log_2 9)=2^(2log_2 9)=9^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{3}{4}$ ⑵ $-\dfrac{1}{3}$ ⑶ $5$ ⑷ $81$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/35-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수 쌍을 같은 소수의 거듭제곱에서 고르면 자유(log_27 81, log_100 0.001, 9^(log_3 5) 등). 제약: 밑과 진수의 공통 소수가 있어야 값이 유리수이고, 지수형은 밑이 로그 밑의 거듭제곱일 때만 정수답이 된다."
    creative: "(1) 값을 주고 밑을 찾게 하기(★2) (2) 세 개를 대소 비교로 묶기(★2) (3) 2^(log_2 5)+4^(log_2 3) 처럼 합으로 만들면 계산 단계가 늘어 ★2."
```

```yaml
- id: GN-ALG-35-58
  page: 35
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $\log_7 2$, $\log_3 8$, $\log_3 100$ 을 밑이 $10$ 인 로그로 나타내기.
  category: "밑의 변환 공식 → 상용로그 비 → 진수의 지수 앞으로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑의 변환 공식으로 상용로그로 고치기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑의 변환 공식을 한 번 쓰면 끝나고, ⑵ 는 8=2³ 로 지수를 앞으로 빼는 한 단계, ⑶ 은 분자 log 100=2 가 되는 한 단계가 더 있을 뿐이다.
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑의 변환 공식 → (상용로그 진수)/(상용로그 밑) → 지수는 앞으로, log 100=2 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\log_{10} 2}{\log_{10} 7}$ ⑵ $\dfrac{3\log_{10} 2}{\log_{10} 3}$ ⑶ $\dfrac{2}{\log_{10} 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/35-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수를 임의의 양수 쌍으로 교체 가능(log_5 9, log_2 1000). 제약: 진수를 10 의 거듭제곱으로 두면 분자가 정수가 되어 난도가 내려가고, 서로 소인 밑·진수를 쓰면 분수 꼴이 그대로 남는다."
    creative: "(1) 목표 밑을 2 로 바꾸기(★1 유지) (2) 두 로그의 곱이 1 이 되는 쌍을 찾게 하면 역수 관계 인식이 붙어 ★2 (3) 상용로그 값을 표로 주고 근삿값을 구하게 하면 계산형 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-36-e3
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 계수가 붙은 로그의 합·차 네 개의 값. 예) $\log_7 25+2\log_7 \frac{1}{5}$, $\frac{1}{3}\log_2 32+\log_2 \sqrt[3]{2}$.
  category: "계수를 지수로 올려 진수에 흡수 → 곱·몫으로 묶기 → 밑의 거듭제곱 꼴"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질(계수·거듭제곱근이 섞인 합·차)로 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수를 진수의 지수로 올린 뒤 하나의 진수로 묶으면 각각 1, 4, 1, 1/100 이 되어 값이 떨어진다.
    네 문항 모두 같은 절차를 반복하고 분기가 없다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "계수를 진수의 지수로 → 합·차를 곱·몫 하나로 묶기 → 진수를 밑의 거듭제곱으로 → 지수가 답"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0$ ⑵ $2$ ⑶ $0$ ⑷ $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/36-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 진수를 묶은 결과가 밑의 거듭제곱이 되도록만 맞추면 자유(밑 7 → 49와 1/7, 밑 10 → 2/5와 5/2). 제약: 진수는 양수, 최종 진수는 밑의 유리수 거듭제곱이어야 하며 거듭제곱근 항은 지수를 분수로 정확히 옮겨야 한다."
    creative: "(1) 항을 5개로 늘려 상쇄가 보이게(★2 유지) (2) 한 항의 계수를 미지수로 두고 값이 0 이 되게 하는 계수를 묻기(I-BW → ★3) (3) 밑이 서로 다른 두 항을 섞으면 밑의 변환이 필요해져 ★3."
```

```yaml
- id: GN-ALG-36-59
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 분수 계수·제곱근이 섞인 로그의 합·차 네 개의 값. 예) $\frac{1}{2}\log_2 \frac{9}{49}-\log_2 \frac{3}{14}$.
  category: "분수 계수를 거듭제곱근 지수로 → 하나의 진수로 묶기 → 밑의 거듭제곱 꼴"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 성질(분수 계수·제곱근이 섞인 합·차)로 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    36-e3 과 같은 절차이며 분수 계수와 √ 항이 더 붙어 진수 정리가 조금 무겁다(⑶ 은 5/3, 4/7, 3, 7 이 모두 약분되어 100 이 남는다).
    분기·착안 없이 같은 성질을 반복한다. 짝 예제와 같은 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "계수·√ 를 지수로 흡수 → 진수 하나로 묶고 약분 → 밑의 거듭제곱 꼴 → 지수가 답"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $1$ ⑶ $2$ ⑷ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/36-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항마다 진수의 소인수를 겹치게 두어 약분 후 밑의 거듭제곱만 남기면 자유. 제약: 분수 계수는 진수를 거듭제곱근으로 만들므로 진수가 완전제곱·완전세제곱이어야 정수로 떨어진다."
    creative: "(1) 항 수를 줄여 ★1 급으로 낮추기 (2) 답을 주고 빠진 한 항을 찾게 하기(I-BW → ★3) (3) 밑이 다른 항을 섞어 밑의 변환을 강제(★3)."
```

```yaml
- id: GN-ALG-36-60
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\log_2\left(1-\frac{1}{x+2}\right)$ 일 때 $f(1)+f(2)+\cdots+f(30)$ 의 값.
  category: "진수를 한 분수로 정리 → 로그의 합을 진수의 곱으로 → 연쇄 약분(망원)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "진수 1-1/(x+2) 를 (x+1)/(x+2) 한 분수로 정리해야 항끼리 약분될 꼴이 보인다"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "30개의 합을 진수의 곱으로 묶으면 이웃 항의 분자·분모가 연쇄로 약분되어 2/32 만 남는 망원 구조를 발견"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그의 합과 망원(연쇄 약분) 곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    30개를 일일이 계산하는 길과 곱으로 묶는 길이 갈리는데, 후자를 택해야 풀린다.
    진수 정리(EQV d1)와 망원 약분 발견(PD d2) 두 단계 → 확인체크 ★2 출발에서 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "진수를 (x+1)/(x+2) 로 정리 → 합을 곱의 로그로 → 연쇄 약분해 2/32 → log_2(1/16)=-4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/36-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 끝항(30)과 진수의 이동량(x+2 → x+k)을 바꿀 수 있다. 제약: 남는 분수가 밑의 거듭제곱(1/16 처럼)이어야 답이 정수로 떨어지므로 끝항은 2의 거듭제곱에 맞춰 고른다. 모든 항의 진수가 양수여야 하므로 시작값은 x≥1 로 유지."
    creative: "(1) f(x)=log_2((x+1)/(x+2)) 를 직접 주면 EQV 단계가 사라져 ★2 (2) 이동량을 2칸으로 두어 두 겹 망원으로(★4) (3) 합이 -4 가 되도록 하는 끝항 n 을 묻는 역방향(I-BW 추가 → ★4)."
```

```yaml
- id: GN-ALG-37-e4
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 밑이 다른 로그의 곱·지수식 값. 예) $(\log_3 2+\log_{27} 4)(\log_{16} 9+\log_{32} 81)$, $8^{\log_2 3}-9^{\log_3 \sqrt{10}}$, $\log_3 5\times\log_5 7\times\log_7 3$.
  category: "밑을 소수 거듭제곱으로 통일 → 밑의 변환 공식 → 곱의 연쇄 약분 / a^(log_a b) 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑의 변환 공식과 여러 가지 로그 성질(밑·진수 거듭제곱, 로그 곱의 연쇄)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑷ 는 log_(a^m) b^n = (n/m)log_a b 로 모두 log_3 2 · log_2 3 꼴로 통일하면 곧바로 정리되고,
    ⑵⑶ 은 지수의 로그를 한 덩어리로 묶어 a^(log_a b)=b 를 쓰는 본문 성질 그대로다. 필수 예제 ★2 출발 · 분기 없음 → ★2.
  tier: star_2
  mechanism_primary: "밑·진수를 같은 소수의 거듭제곱으로 → 계수를 밖으로 빼 밑의 변환 → 곱 연쇄 약분 / 지수의 로그를 묶어 진수로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{13}{6}$ ⑵ $10$ ⑶ $17$ ⑷ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/37-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수의 거듭제곱 지수(3과 27, 16과 32)를 같은 소수 안에서 바꾸면 자유. 제약: 두 괄호가 log_3 2 와 log_2 3 처럼 역수 쌍으로 만나야 유리수로 떨어지고, 지수형은 밑이 로그 밑의 거듭제곱일 때만 정수답이 된다."
    creative: "(1) 곱의 연쇄를 5개로 늘려 순환이 보이게(★2 유지) (2) 한 인수를 미지수로 두고 곱이 1 이 되게 하는 값을 묻기(I-BW → ★3) (3) 지수형과 로그형을 섞어 대소 비교로(★3)."
```

```yaml
- id: GN-ALG-37-61
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 밑이 다른 로그의 곱·지수식 값. 예) $(\log_2 3+\log_8 9)(\log_9 2+\log_{27} 16)$, $4^{\log_2 7}+27^{\log_3 2}$, $\log_2 3\times\log_3 5\times\log_5 6\times\log_6 8$.
  category: "밑·진수를 소수 거듭제곱으로 통일 → 밑의 변환 → 연쇄 약분 / a^(log_a b) 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑의 변환 공식과 여러 가지 로그 성질(밑·진수 거듭제곱, 로그 곱의 연쇄)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    37-e4 와 같은 골조다. ⑷ 는 곱이 연쇄로 약분되어 log_2 8=3 만 남고 ⑶ 은 밑을 2, 3 으로 통일해 7²과 2³ 를 얻는다.
    분기·착안 없이 성질 적용이 반복된다. 짝 예제와 같은 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "밑·진수 거듭제곱 지수를 밖으로 → 밑의 변환으로 통일 → 연쇄 약분 / 지수의 로그를 묶어 진수로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{55}{18}$ ⑵ $2$ ⑶ $57$ ⑷ $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/37-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연쇄 곱의 길이와 양 끝 밑·진수만 맞추면 중간은 자유(log_2 3 × log_3 5 × log_5 16 = 4). 제약: 양 끝이 같은 소수의 거듭제곱이어야 값이 유리수, 지수형 항은 밑이 로그 밑의 거듭제곱이어야 한다."
    creative: "(1) 연쇄 곱만 떼어 ★1~2 로 (2) 곱의 값이 정수가 되게 하는 마지막 진수를 묻기(I-BW → ★3) (3) 지수형 두 항의 차가 0 이 되도록 조건을 주면 ★3."
```

```yaml
- id: GN-ALG-37-62
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\log_2 3\times\log_4 a=\log_4 3$, ⑵ $(\log_2 3+2\log_4 5)\log_{\sqrt{15}} a=6$ 을 만족시키는 양수 $a$ 구하기.
  category: "모든 로그의 밑을 2로 통일 → 공통 인수 약분 → log_2 a 의 값 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑이 2, 4, √15 로 흩어진 로그를 모두 밑 2 로 옮기면 log_2 3(⑴)·log_2 15(⑵)가 통째로 약분되어 log_2 a 만 남는 꼴로 바뀐다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑의 변환으로 미지수가 든 로그 방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 에서 log_2 3+2log_4 5 = log_2 15 로 묶고 log_(√15) a = 2log_2 a / log_2 15 로 바꾸면 log_2 15 가 약분되어 2log_2 a=6 한 줄이 된다.
    약분을 노리고 밑을 2 로 통일하는 착안 1개(EQV d1). 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "모든 로그를 밑 2 로 변환 → 계수 붙은 항을 하나의 로그로 묶기 → 공통 인수 약분 → log_2 a 확정 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/37-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 진수(3, 15)와 우변 상수(6)를 바꿀 수 있다. 제약: 괄호가 하나의 로그로 묶여야 약분되고, 우변 상수는 log_2 a 가 정수가 되도록(2의 배수 등) 고른다. a 는 양수이고 밑으로도 쓰이면 1이 아니어야 한다."
    creative: "(1) 밑을 √a 로 두어 지수 처리를 한 번 더(★3) (2) 미지수를 밑 자리에 놓아 log_a 3 꼴로(★3) (3) 해가 두 개 나오도록 이차식으로 만들고 밑 조건으로 하나를 기각하면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-ALG-38-e5
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $A=2^{1+\log_2 4}$, $B=\log_3 81\sqrt{3}$, $C=2\log_4 64\sqrt{8}$ 의 대소 관계를 고르는 5지선다.
  category: "세 수를 각각 유리수 값으로 환산 → 수직선 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그·지수 값의 대소 비교(각 수를 유리수로 환산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 는 지수법칙으로 2·4, B 와 C 는 진수를 밑의 거듭제곱(3^{9/2}, 2^{15/2})으로 바꾸면 각각 값이 바로 나온다.
    세 값이 충분히 벌어져 있어 근삿값 비교나 분기가 필요 없다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A 는 지수법칙으로 분리 → B·C 는 진수를 밑의 거듭제곱으로 → 세 유리수 대소 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/38-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 밑·진수 지수를 조정해 세 값의 순서를 바꿀 수 있다. 제약: 세 값이 유리수로 떨어지도록 진수를 밑의 거듭제곱으로 두고, 값 간격이 1 이상이면 ★2, 1/10 이하로 좁히면 근삿값 비교가 필요해 난도가 오른다."
    creative: "(1) 네 수로 늘려 순서쌍을 고르게(★2 유지) (2) 밑을 1보다 작게(1/2, 1/4) 섞어 부호 반전 함정을 넣기(★3) (3) 값이 가장 큰 수를 문자 조건으로 정하게 하면 I-BW → ★3."
```

```yaml
- id: GN-ALG-38-e6
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    양수 $x$, $y$, $z$ 에 대하여 $\log_2 x+2\log_4 y+3\log_8 z=1$ 일 때 $\{(2^x)^y\}^z$ 의 값.
  category: "밑을 2로 통일 → 조건을 xyz=2 하나로 → 지수 탑을 2^(xyz) 로"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2log_4 y=log_2 y, 3log_8 z=log_2 z 로 밑을 통일하면 세 항이 log_2(xyz)=1, 즉 xyz=2 라는 단일 관계로 바뀐다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그의 성질의 활용 — 조건을 곱 xyz 하나로 묶어 지수식에 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y, z 를 각각 구하려 하면 풀리지 않고, 구하는 식이 2^(xyz) 이므로 조건도 xyz 한 덩어리로 바꿔야 한다는 것이 핵심이다.
    밑 통일로 조건을 단일 관계로 옮기는 착안 1개(EQV d2). 필수 예제 ★2 출발 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "계수를 이용해 밑을 2로 통일 → log_2(xyz)=1 → xyz=2 → {(2^x)^y}^z=2^(xyz)=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/38-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(1)와 지수 탑의 밑(2)을 바꿀 수 있다. 제약: 계수와 밑이 2log_4=log_2 처럼 정확히 맞아떨어져야 세 항이 한 로그로 묶이고, x·y·z 는 모두 양수여야 한다."
    creative: "(1) 네 변수로 늘리기(★2 유지) (2) 구하는 식을 2^x·2^y·2^z 로 바꾸면 조건이 합 x+y+z 로 바뀌어 밑 통일 방향이 달라짐(★2) (3) 조건을 두 개 주고 xyz 와 x+y+z 를 모두 써야 하게 만들면 I-CON 추가 → ★3."
```

```yaml
- id: GN-ALG-38-63
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $A=\frac{1}{3}\log_{1/4} 8$, $B=8^{\log_{1/8} 16}$, $C=\frac{1}{7}\log_{27} 3\sqrt{3}$ 의 대소 비교.
  category: "밑이 1보다 작은 로그를 음의 지수로 환산 → 세 유리수 대소 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수 밑 로그·지수 값의 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 1/4, 1/8 을 2의 음의 거듭제곱으로 보면 A=-1/2, B=2^{-4}=1/16, C=1/14 가 나온다.
    함정은 두 가지다 — 분수 밑에서 오는 부호 반전(T-부호)과 1/16 대 1/14 처럼 가까운 두 양수의 비교(T-경계).
    통찰 분기는 없고 정확한 환산이 관건이다. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑·진수를 2·3의 거듭제곱으로(분수 밑은 음의 지수) → 각 값을 유리수로 → 분모 통일해 대소 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$A<B<C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/38-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 밑의 지수(1/4, 1/8)와 앞 계수(1/3, 1/7)를 바꿀 수 있다. 제약: 값이 유리수로 떨어지려면 밑·진수가 같은 소수의 거듭제곱이어야 하고, 두 양수 값을 너무 가깝게 두면 분모 통일 없이는 판정이 안 되므로 계수 선택으로 간격을 조절한다."
    creative: "(1) 세 값의 부호만 묻기(★1~2) (2) 값이 가장 큰 것을 고르는 5지선다로(★2 유지) (3) 계수를 미지수로 두고 A<B<C 가 되게 하는 범위를 묻기(I-BW·I-MI → ★4)."
```

```yaml
- id: GN-ALG-38-64
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a>0$, $a\ne 1$, $b>0$ 이고 $a^2b^3=1$ 일 때 $\log_a a^3b^2$ 의 값.
  category: "구하는 식을 3+2log_a b 로 분해 → 조건에 밑 a 로그를 취해 log_a b 확정 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 a²b³=1 자체는 쓸 수 없고, 양변에 밑 a 로그를 취해 2+3log_a b=0, 즉 log_a b=-2/3 이라는 쓸 수 있는 형태로 옮겨야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수 조건에 로그를 취해 log_a b 의 값을 구하고 식에 대입하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 를 각각 구하려 하면 막히고, 구하는 식이 log_a b 하나로 표현된다는 점을 먼저 보아야 한다.
    조건에 로그를 취하는 동치 변환 착안 1개(EQV d2). 확인체크 ★2 출발 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "log_a a³b² = 3+2log_a b 로 분해 → 조건 a²b³=1 에 밑 a 로그 → log_a b=-2/3 → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/38-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 지수(2, 3)와 구하는 식의 지수(3, 2)를 바꿀 수 있다. 제약: a>0, a≠1, b>0 은 그대로 두어야 로그가 정의되고, 조건 우변을 1 이 아닌 a^k 로 두면 상수항이 하나 더 붙는다."
    creative: "(1) 구하는 식을 log_b a³b² 로 바꾸면 역수 전환이 한 번 더 붙어 ★3 (2) 조건을 두 개 주고 log_a b, log_a c 를 모두 쓰게 하면 ★3 (3) 값이 정수가 되게 하는 지수 쌍을 묻는 역방향(★3)."
```

```yaml
- id: GN-ALG-39-e7
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\log_{10} 2=a$, $\log_{10} 3=b$ 일 때 ⑴ $\log_{10} 1.08$, ⑵ $\log_{60} 300$ 을 $a$, $b$ 로 나타내기.
  category: "진수·밑을 2·3·10 의 거듭제곱 곱으로 분해 → (밑의 변환 후) a, b 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 문자로 나타내기 — log_a b=c 가 주어진 경우(소수·밑이 10이 아닌 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 1.08=2²·3³/10² 로 소인수분해하는 것이, ⑵ 는 밑의 변환 뒤 300=3·10², 60=6·10 으로 쪼개는 것이 전부다.
    두 절차 모두 본문에서 제시된 표준이고 분기가 없다. 필수 예제 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "소수는 분수로 고쳐 2·3·10 의 거듭제곱 곱으로 분해 → 밑이 10이 아니면 밑의 변환 → a, b 식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2a+3b-2$ ⑵ $\dfrac{b+2}{a+b+1}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/39-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2^p·3^q·10^r 꼴 소수(0.36, 1.2, 4.5)로, 밑을 2·3·10 의 곱(15, 18, 45)으로 바꿀 수 있다. 제약: 새 소인수(7, 11)가 들어가면 a, b 로 표현 불가하고, 밑은 1이 아닌 양수여야 한다."
    creative: "(1) 주어진 문자를 log 2=a, log 7=b 로 바꿔 진수를 14·0.28 계열로(★2 유지) (2) 결과 식을 주고 진수를 역추적(I-BW → ★3) (3) 두 식의 비가 정수가 되는 조건을 묻기(★3)."
```

```yaml
- id: GN-ALG-39-e8
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $10^x=a$, $10^y=b$, $10^z=c$ ($xyz\ne 0$) 일 때 ⑴ $\log_a b$, ⑵ $\log_{ab} c^2$, ⑶ $\log_{\sqrt{b}} c$ 를 $x$, $y$, $z$ 로 나타내기.
  category: "지수 조건을 상용로그로 전환 → 밑의 변환으로 상용로그 비 → x, y, z 식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10^x=a 를 x=log_10 a 로 읽는 지수↔로그 표현 전환이 있어야 밑의 변환 결과가 x, y, z 로 바로 쓰인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 문자로 나타내기 — a^x=b 가 주어진 경우(지수 조건의 로그 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 것은 지수식인데 구하는 것은 로그라, 조건을 로그 꼴로 뒤집는 전환이 출발점이다.
    그 뒤는 밑의 변환과 지수를 앞으로 빼는 성질뿐이다. 표현 전환 1개(RT d1) · 필수 예제 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "10^x=a ⇔ x=log a 전환 → 밑의 변환으로 상용로그 비 → 밑·진수의 지수를 계수로 빼 x, y, z 식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{y}{x}$ ⑵ $\dfrac{2z}{x+y}$ ⑶ $\dfrac{2z}{y}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/39-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 10 을 다른 양수(2, 3)로 바꾸고 구하는 로그의 밑·진수를 a^m b^n 꼴로 조합할 수 있다. 제약: xyz≠0 조건이 있어야 분모가 0 이 되지 않고, 밑에 오는 문자 곱은 1 이 아니어야 한다."
    creative: "(1) 구하는 식을 log_a b + log_b a 로 두면 역수 합이 되어 ★3 (2) 조건에 상수항(10^x=2a)을 섞어 분해 단계를 추가(★3) (3) 결과가 정수가 되게 하는 x, y 관계를 묻는 역방향(★3)."
```

```yaml
- id: GN-ALG-39-65
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\log_{10} 2=a$, $\log_{10} 3=b$ 일 때 ⑴~⑷ $\log_{10} 25$, $\log_{10} 0.72$, $\log_{1/10} 15$, $\log_4 \sqrt{30}$ 을 $a$, $b$ 로 나타내기.
  category: "진수를 2·3·10 의 거듭제곱 곱으로 분해 → (분수 밑·밑의 변환 처리) → a, b 결합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그를 문자 a, b 로 나타내기(분수 밑·밑의 변환 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 25=10²/2², 0.72=2³·3²/10² 분해, ⑶ 은 밑 1/10 에서 오는 부호 반전(T-부호), ⑷ 는 밑 4 의 변환과 √ 지수 처리(T-단위)다.
    39-e7 과 같은 골조에 함정 두 가지가 추가된 형태로 분기는 없다. 확인체크 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "진수를 2·3·10 의 거듭제곱 곱으로 분해 → 분수 밑은 부호 반전, 밑이 10이 아니면 밑의 변환 → a, b 식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2(1-a)$ ⑵ $3a+2b-2$ ⑶ $a-b-1$ ⑷ $\dfrac{b+1}{4a}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/39-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2^p·3^q·10^r 계열(0.45, 1.25, √18)에서, 밑을 1/10·4·9 계열에서 고를 수 있다. 제약: 새 소인수가 들어가면 표현 불가, 분수 밑은 반드시 부호가 뒤집히므로 답의 부호를 확인해 둔다."
    creative: "(1) 네 항을 대소 비교로 묶기(★3) (2) 값이 음수인 것을 모두 고르게 하면 부호 판정 중심(★2) (3) 문자 조건을 log 2=a 하나만 주고 3 이 들어간 진수를 섞으면 표현 불가 항을 골라내는 판별 문제(I-VF → ★3)."
```

```yaml
- id: GN-ALG-39-66
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $3^x=a$, $3^y=b$ ($x\ne 0$) 일 때 $\log_{a^3} \sqrt[4]{a^3b}$ 를 $x$, $y$ 로 나타내기.
  category: "지수 조건을 밑 3 로그로 전환 → 밑·진수의 지수를 계수로 빼기 → x, y 비"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3^x=a 를 x=log_3 a 로 뒤집어 읽어야 밑의 변환 결과(log_3 a, log_3 b 의 비)가 x, y 로 그대로 옮겨진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수 조건이 주어진 로그를 문자로 나타내기(밑·진수 모두 거듭제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    39-e8 과 같은 전환 골조이며, 밑이 a³ 이고 진수가 네제곱근이라 지수 3 과 1/4 을 양쪽에서 빼는 처리가 더 붙는다.
    분모에 3x 가 남으므로 x≠0 조건이 살아 있다. 표현 전환 1개(RT d1) · 확인체크 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "3^x=a ⇔ x=log_3 a 전환 → 밑 3 로 변환 → 밑의 지수 3, 진수의 지수 1/4 을 계수로 → (3x+y)/(12x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3x+y}{12x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/39-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 지수(3), 근호의 차수(4), 진수 안 지수(3, 1)를 바꿀 수 있다. 제약: x≠0(밑 a³≠1) 조건을 유지해야 하고, 지수 조합에 따라 분모가 12x 처럼 달라지므로 약분 여부를 확인한다."
    creative: "(1) 진수를 a^m/b^n 으로 두어 부호가 섞이게(★2 유지) (2) 밑을 √(ab) 로 두면 분모가 x+y 가 되어 ★3 (3) 결과가 1/2 이 되게 하는 x:y 비를 묻는 역방향(I-BW → ★3)."
```

```yaml
- id: GN-ALG-40-e9
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $25^x=4^y=10$ 일 때 $\frac{1}{x}+\frac{1}{y}$ 의 값.
  category: "지수 조건을 로그로 → 역수가 상용로그임을 이용 → 합을 진수의 곱으로"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "25^x=10 에서 x=log_25 10 이고 그 역수 1/x=log_10 25 임을 보는 전환. 구하는 것이 x 가 아니라 1/x 의 합이므로 이 뒤집기가 풀이의 전부다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x=b^y=k 조건에서 1/x+1/y 의 값(역수 로그 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 를 각각 구해 더하려 하면 막히고, 1/x=log 25, 1/y=log 4 로 뒤집으면 합이 log 100=2 한 줄이 된다.
    역수 로그 전환 착안 1개(RT d2). 필수 예제 ★2 출발 · 통찰 1 → ★2 유지. 이 골조는 40-67, 40-68, 43-82 에서 반복된다.
  tier: star_2
  mechanism_primary: "25^x=10 ⇔ 1/x=log 25 → 1/y=log 4 → 합을 log(25·4)=log 100 으로 → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/40-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(25, 4)과 공통값(10)을 바꿀 수 있다. 제약: 두 밑의 곱이 공통값의 거듭제곱이어야 답이 유리수로 떨어지고(25·4=100=10²), x·y 가 0 이 되지 않도록 공통값은 1 이 아니어야 한다."
    creative: "(1) 세 항으로 늘려 1/x+1/y+1/z(★2 유지) (2) 부호를 섞어 1/x-1/y 로 두면 몫이 되어 ★2~3 (3) 공통값을 미지수 k 로 두고 1/x+1/y=3 이 되게 하는 k 를 묻는 역방향(I-BW → ★3)."
```

```yaml
- id: GN-ALG-40-67
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $32^x=243^y=216$ 일 때 $\frac{1}{x}+\frac{1}{y}$ 의 값.
  category: "지수 조건의 역수를 밑 216 로그로 → 합을 진수의 곱으로 → 같은 소수 거듭제곱 비"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/x=log_216 32, 1/y=log_216 243 으로 뒤집고 합을 log_216(32·243)=log_216 7776 으로 묶은 뒤 7776=6^5, 216=6³ 임을 보는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x=b^y=k 조건에서 1/x+1/y 의 값(역수 로그 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    40-e9 와 같은 골조이고, 공통값이 10 이 아니라 216 이라 마지막에 32·243=7776=6^5 을 알아보는 계산이 한 겹 더 있다.
    역수 로그 전환 1개(RT d2) · 확인체크 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "1/x=log_216 32, 1/y=log_216 243 → 합=log_216 7776 → 7776=6^5, 216=6³ → 5/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/40-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑과 공통값을 바꾸되 두 밑의 곱이 공통값의 거듭제곱이 되도록 고른다(8·27=216=6³ 등). 제약: 곱이 공통값의 거듭제곱이 아니면 답이 무리수가 되고, 공통값은 1 이 아니어야 한다."
    creative: "(1) 공통값을 두 밑의 곱 자체로 두면 답이 1 로 떨어져 ★1~2 (2) 1/x-1/y 로 바꿔 몫을 만들기(★2) (3) 세 지수식으로 늘리고 계수를 붙여 1/x+1/y-3/z 꼴로(43-82 골조 → ★3)."
```

```yaml
- id: GN-ALG-40-68
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $3.45^x=100$, $0.00345^y=100$ 일 때 $\frac{1}{x}-\frac{1}{y}$ 의 값.
  category: "지수 조건의 역수를 밑 100 로그로 → 차를 진수의 몫으로 → 소수점 자리 상쇄"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/x=log_100 3.45, 1/y=log_100 0.00345 로 뒤집고 차를 log_100(3.45/0.00345) 한 덩어리로 묶으면 지저분한 소수가 통째로 약분된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x=b^y=k 조건에서 1/x-1/y 의 값(역수 로그 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    40-e9 의 차 버전이다. 두 밑이 소수점 위치만 다른 같은 숫자라는 점이 설계 핵심이고, 몫으로 묶으면 1000 만 남는다.
    소수점 자리(T-단위)와 밑이 1보다 작은 쪽의 부호(T-부호)가 함정이다. 역수 전환 1개(RT d2) · 확인체크 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "1/x=log_100 3.45, 1/y=log_100 0.00345 → 차=log_100(3.45/0.00345)=log_100 1000 → 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/40-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑의 소수점 자리 차이(3자리)와 공통값(100)을 바꿀 수 있다. 제약: 두 밑의 비가 10의 거듭제곱이어야 하고, 그 지수와 공통값의 지수 비가 답이 되므로 유리수가 되도록 맞춘다. 두 밑 모두 양수·1 아님."
    creative: "(1) 소수점 차이를 2자리로 줄여 답을 1 로(★2 유지) (2) 1/x+1/y 로 바꾸면 곱 3.45×0.00345 가 정리되지 않아 설계가 깨짐 — 반례로 쓸 수 있음 (3) 공통값을 문자 k 로 두고 결과가 k 에 무관함을 보이게 하면 추상도가 올라 ★3."
```

```yaml
- id: GN-ALG-41-e10
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차방정식 $x^2-5x+5=0$ 의 두 실근을 $\alpha$, $\beta$ ($\alpha>\beta$) 라 할 때 $\log_{\alpha-\beta} \alpha+\log_{\alpha-\beta} \beta$ 의 값.
  category: "로그의 합을 진수의 곱으로 → 근과 계수의 관계로 αβ 와 α-β 확정 → 값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 로그를 합쳐 진수를 αβ 로 만든 뒤 근과 계수의 관계(αβ=5)를 끌어오는, 로그 단원과 이차방정식 단원의 결합"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 α-β 를 직접 구하지 않고 (α-β)²=(α+β)²-4αβ 로 바꾼 뒤 α>β 조건으로 양의 근 √5 를 택한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계를 로그의 밑·진수에 대입"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 직접 구하면 무리수라 계산이 터지고, 진수는 곱으로 밑은 차의 제곱으로 각각 근과 계수의 관계에 태워야 한다.
    밑이 α-β 라 α>β 조건(T-부호)과 밑>0·밑≠1(T-범위)이 동시에 걸린다. 통찰 2개 → 필수 예제 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "로그 합 → log_(α-β)(αβ) → αβ=5, (α-β)²=25-20=5 이고 α>β 이므로 α-β=√5 → log_(√5)5=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/41-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수를 바꿔 αβ 와 (α+β)²-4αβ 를 조절한다. 제약: 판별식>0(두 실근), αβ>0(진수 양수), α-β>0 이고 1 이 아니어야 하며, αβ 가 (α-β)의 거듭제곱이어야 답이 유리수로 떨어진다(여기서는 5=(√5)²)."
    creative: "(1) 밑을 α+β 로 바꾸면 부호 조건이 사라져 ★2 (2) 구하는 식을 log_(α-β)α × log_(α-β)β 로 두면 곱이 되어 근을 실제로 구해야 함(★4) (3) 두 근을 로그 값으로 주는 41-70·43-83 계열로 확장하면 ★3~4."
```

```yaml
- id: GN-ALG-41-e11
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\log_2 7$ 의 정수 부분을 $a$, 소수 부분을 $b$ 라 할 때 $4(3^a+2^b)$ 의 값.
  category: "로그 값을 이웃한 두 정수 사이에 가두기 → 정수·소수 부분 분리 → 2^b 를 진수로 되돌리기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4<7<8 에서 2<log_2 7<3 으로 가두어 a=2, b=log_2 7-2 로 분리한다 — 로그 값을 직접 계산하지 않는다는 것이 요점"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2^b=2^(log_2 7-2)=7/4 로, 지수 자리의 로그를 다시 진수로 되돌리는 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log_2 7 은 무리수라 값을 구할 수 없고, 범위로 정수 부분을 잡은 뒤 소수 부분을 지수에 넣어 다시 진수로 되돌리는 왕복이 골조다.
    0≤b<1 경계(T-경계)와 밑·진수 범위(T-범위)가 함정이다. 통찰 2개 → 필수 예제 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "2<log_2 7<3 → a=2, b=log_2 7-2 → 2^b=7/4 → 4(9+7/4)=43"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$43$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/41-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 진수(log_2 7 → log_3 20, log_5 100)를 바꾸고 바깥 식의 계수·밑(4, 3^a, 2^b)을 조정할 수 있다. 제약: 진수는 밑의 거듭제곱이 아니어야 소수 부분이 0 이 되지 않고, 2^b 가 유리수가 되려면 바깥 지수의 밑이 로그의 밑과 같아야 한다."
    creative: "(1) 3^a 를 a^3 으로 바꿔 정수 부분만 쓰게 하면 ★2 (2) 2^b 대신 2^(1/b) 를 묻는 41-71 형(밑 변환이 한 번 더 → ★3) (3) a+b 관계식을 주고 진수를 역추적(I-BW → ★4)."
```

```yaml
- id: GN-ALG-41-69
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-9x+3=0$ 의 두 실근을 $\alpha$, $\beta$ 라 할 때 $\log_3 (\alpha^{-1}+\beta^{-1})$ 의 값.
  category: "역수의 합을 (α+β)/(αβ) 로 → 근과 계수의 관계 대입 → 로그 값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α⁻¹+β⁻¹ 를 (α+β)/(αβ) 로 바꿔 근과 계수의 관계를 쓰는, 이차방정식 단원과의 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그와 이차방정식 — 근과 계수의 관계로 진수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수만 근과 계수의 관계로 바꾸면 9/3=3 이 되고 log_3 3=1 로 끝난다. 밑이 상수라 41-e10 같은 부호·범위 분기가 없다.
    결합 1개(XU d1) · 확인체크 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "α⁻¹+β⁻¹=(α+β)/(αβ)=9/3=3 → log_3 3=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/41-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수를 바꿔 (α+β)/(αβ) 가 밑의 거듭제곱이 되게 한다. 제약: 판별식>0, αβ≠0, 진수 (α+β)/(αβ)>0 이어야 하고 밑 3 의 거듭제곱일 때만 값이 유리수다."
    creative: "(1) 진수를 α²+β² 로 바꾸면 곱셈 공식이 한 겹 더(★3) (2) 밑을 α-β 로 두면 41-e10 이 되어 ★3 (3) 값이 2 가 되게 하는 계수를 묻는 역방향(I-BW → ★3)."
```

```yaml
- id: GN-ALG-41-70
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-5x+3=0$ 의 두 실근이 $\log_{10} \alpha$, $\log_{10} \beta$ 일 때 $\log_\alpha \beta+\log_\beta \alpha$ 의 값.
  category: "밑의 변환으로 상용로그 비 → 근과 계수의 관계 + 대칭식 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 식을 밑의 변환으로 (log β)/(log α)+(log α)/(log β) 로 옮겨야 근인 log α, log β 를 쓸 수 있다"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "통분한 분자 (log α)²+(log β)² 를 합·곱의 대칭식으로 전개하고 근과 계수의 관계(합 5, 곱 3)를 대입"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 근이 로그 값인 이차방정식 — 대칭식과 근과 계수의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근 자체가 로그 값이므로 구하는 식도 상용로그의 비로 통일해야 연결된다. 그 뒤는 대칭식 전개 한 번이다.
    α, β 를 구하려 들면 막힌다는 점이 이 유형의 분기점이다. 통찰 2개 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "밑의 변환 → (logβ)/(logα)+(logα)/(logβ) → 통분해 ((logα)²+(logβ)²)/(logα·logβ) → (25-6)/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{19}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/41-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 합·곱(5, 3)을 바꾸면 답이 (합²-2곱)/곱 로 따라 움직인다. 제약: 판별식>0, 곱≠0(분모), α·β 가 1 이 아니어야 로그의 밑으로 쓸 수 있다(즉 두 근이 0 이 아니어야 한다)."
    creative: "(1) 구하는 식을 log_α β × log_β α 로 두면 항상 1 이라 ★1 급 함정 문제 (2) 차를 묻는 43-83 형으로 바꾸면 부호 확정이 붙어 ★4 (3) 근을 log_2 α, log_2 β 로 바꾸면 밑 통일 단계가 하나 더(★3 유지)."
```

```yaml
- id: GN-ALG-41-71
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\log_5 100$ 의 정수 부분을 $a$, 소수 부분을 $b$ 라 할 때 $4^a+4^{1/b}$ 의 값.
  category: "로그 값을 두 정수 사이에 가두기 → 소수 부분의 역수를 밑의 변환으로 → 지수 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "25<100<125 에서 2<log_5 100<3 으로 가두어 a=2, b=log_5 100-2=log_5 4 로 분리"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분의 역수 1/b=1/log_5 4=log_4 5 로 뒤집어야 4^(1/b)=4^(log_4 5)=5 가 된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "로그의 정수 부분과 소수 부분(소수 부분의 역수 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    41-e11 과 같은 가두기 골조에 소수 부분의 역수를 밑의 변환으로 뒤집는 단계가 하나 더 붙었다.
    b=log_5 4 를 log_5(100/25) 로 정리하는 것과 역수 전환이 모두 필요하다. 통찰 2개 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "2<log_5 100<3 → a=2, b=log_5 4 → 1/b=log_4 5 → 16+4^(log_4 5)=16+5=21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/41-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·진수(log_5 100 → log_3 50, log_2 30)와 바깥 지수의 밑(4)을 바꿀 수 있다. 제약: 소수 부분이 log_밑(진수/밑^a) 로 깔끔히 떨어져야 하고, 4^(1/b) 가 유리수가 되려면 바깥 밑이 그 진수와 같아야 한다(여기서는 4)."
    creative: "(1) 4^b 를 묻는 41-e11 형으로 낮추기(★3 유지, 역수 단계 제거 시 ★2) (2) a·b 를 모두 쓰는 (a+1/b) 꼴로(★3) (3) a=2 가 되는 진수의 범위를 묻는 역방향(I-BW·I-MI → ★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-42-72
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x=\log_2 (2+\sqrt{3})$ 일 때 $2^x+2^{-x}$ 의 값.
  category: "로그의 정의로 2^x 확정 → 역수 유리화 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의로 지수식의 값 구하기(역수 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의에서 2^x=2+√3 이고 2^(-x) 는 그 역수라 유리화하면 2-√3 이므로 합은 4 다.
    정의 적용과 분모 유리화 모두 표준 절차이고 분기가 없다. STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=log_2(2+√3) ⇔ 2^x=2+√3 → 2^(-x)=1/(2+√3)=2-√3 → 합 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 켤레 유리화가 되는 꼴(3+2√2, 5+2√6)로 바꾸면 그대로 성립. 제약: 진수는 양수여야 하고, 켤레와의 곱이 1 일 때만 역수가 켤레가 되어 합이 정수로 떨어진다."
    creative: "(1) 2^x-2^(-x) 를 묻기(★2 유지) (2) 2^(2x)+2^(-2x) 로 올리면 곱셈 공식이 한 겹 더(★3) (3) 합이 주어졌을 때 x 를 역추적하면 I-BW → ★3."
```

```yaml
- id: GN-ALG-42-73
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\alpha=\frac{2}{\sqrt{3}-1}$ 일 때 $\log_3 (\alpha^3-1)-\log_3 (\alpha^2+\alpha+1)$ 의 값.
  category: "로그의 차를 몫으로 → α³-1 인수분해 약분 → α-1 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 로그를 몫으로 묶은 뒤 α³-1=(α-1)(α²+α+1) 인수분해로 분모를 약분하는 착안. α 를 먼저 대입해 세제곱을 계산하는 길은 훨씬 무겁다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그의 차와 인수분해 약분(세제곱 차 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α 를 유리화하면 √3+1 이므로 약분 뒤 남는 것은 log_3 √3 뿐이다.
    인수분해를 먼저 볼 것인가 대입을 먼저 할 것인가에서 계산량이 크게 갈린다. 인수분해 착안 1개(RT d1) · STEP 1 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "로그 차 → log_3((α³-1)/(α²+α+1))=log_3(α-1) → α=√3+1 → log_3 √3=1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "α 를 유리화 결과가 √k+1 이 되도록 고르고 밑을 k 로 맞춘다(α=2/(√5-1)·밑 5 등). 제약: 약분 후 남는 α-1 이 밑의 유리수 거듭제곱이어야 답이 유리수이고, α³-1>0·α²+α+1>0 이어야 로그가 정의된다."
    creative: "(1) 세제곱 합(α³+1)과 α²-α+1 로 바꾸기(★2 유지) (2) 차 대신 합으로 두면 약분이 안 되어 직접 계산이 필요(★3) (3) 값이 1 이 되게 하는 α 를 묻는 역방향(I-BW → ★3)."
```

```yaml
- id: GN-ALG-42-74
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_a (\log_3 2)+\log_a (\log_4 3)+\cdots+\log_a (\log_{64} 63)=-1$ 을 만족시키는 상수 $a$ 의 값.
  category: "로그의 합을 진수의 곱으로 → 밑의 변환 후 연쇄 약분 → 지수 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "62개 항의 합을 log_a(진수들의 곱) 한 덩어리로 묶어야 개별 항을 계산하지 않고 진행할 수 있다"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 진수를 밑의 변환으로 (log k)/(log(k+1)) 꼴로 바꾸면 이웃끼리 연쇄 약분되어 (log 2)/(log 64)=1/6 만 남는 망원 구조를 발견"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그의 합과 망원 곱으로 만든 로그 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    항이 62개라 하나씩 계산하는 길은 처음부터 막혀 있고, 곱으로 묶어 밑을 통일하는 순서를 정확히 밟아야 1/6 이 남는다.
    마지막에 log_a(1/6)=-1 에서 a=6 으로 역추적한다. 통찰 2개 → STEP 1 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "합을 log_a(곱)으로 → 각 항 밑의 변환 → 연쇄 약분해 (log2)/(log64)=1/6 → log_a(1/6)=-1 → a=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연쇄의 양 끝(log_3 2 시작, log_64 63 끝)과 우변 상수(-1)를 바꿀 수 있다. 제약: 끝 진수/시작 밑이 유리수 비가 되도록(2와 64 처럼 같은 소수의 거듭제곱) 잡아야 a 가 유리수로 떨어지고, a>0·a≠1 이어야 한다."
    creative: "(1) 우변을 -2 로 두면 a 가 √6 이 되어 계산이 한 단계 늘고 ★3 유지 (2) 연쇄를 log_2 3 × log_3 4 × ... 곱 형태로 직접 주면 로그 합 단계가 빠져 ★2 (3) 끝항을 미지수로 두고 a 가 정수가 되는 조건을 묻기(I-VF → ★4)."
```

```yaml
- id: GN-ALG-42-75
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_a x=\frac{1}{4}$, $\log_b x=\frac{1}{5}$, $\log_c x=\frac{1}{6}$ 일 때 $\frac{2}{\log_{abc} x}$ 의 값.
  category: "역수를 취해 밑을 x 로 통일 → log_x a+log_x b+log_x c 로 결합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 값과 구하는 식 모두 역수를 취해 log_x a=4, log_x b=5, log_x c=6, 1/log_(abc)x=log_x(abc) 로 밑을 x 로 뒤집으면 세 값이 그대로 더해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그의 역수 관계로 밑을 통일해 합으로 결합하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b, c 를 x 의 거듭제곱으로 각각 구해도 되지만, 역수를 취하는 순간 밑이 x 로 통일되어 4+5+6 한 줄로 끝난다.
    구하는 식이 분모에 로그를 둔 형태라는 점이 역수 전환의 신호다. 전환 1개(RT d2) · STEP 1 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "역수 전환 → log_x a=4, log_x b=5, log_x c=6 → 1/log_(abc)x=log_x(abc)=15 → 2×15=30"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값(1/4, 1/5, 1/6)과 바깥 계수(2)를 자유롭게 바꿀 수 있다. 제약: 값이 0 이면 역수가 없으므로 모두 0 이 아니어야 하고, a·b·c·x 는 양수이며 밑으로 쓰이는 것은 1 이 아니어야 한다."
    creative: "(1) 밑을 ab/c 로 두면 합이 차로 바뀜(★2 유지) (2) 값을 분수가 아닌 정수로 주면 역수 전환의 필요성이 드러나 ★2 (3) log_(abc)x 가 주어지고 세 값 중 하나를 역추적하면 I-BW → ★3."
```

```yaml
- id: GN-ALG-42-76
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $A=(\sqrt{3})^{\log_2 12-\log_2 3}$, $B=(4\sqrt{2})^{-\log_2 \frac{\sqrt{3}}{3}}$, $C=\log_4 2+\log_9 3$ 의 대소 비교.
  category: "지수 자리의 로그를 먼저 정리 → 세 수를 같은 밑의 거듭제곱으로 → 지수 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지수 자리의 로그를 먼저 하나의 값으로 정리한다(log_2 12-log_2 3=2, -log_2(√3/3)=(1/2)log_2 3). 밑을 건드리기 전에 지수를 정리해야 꼴이 드러난다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정리된 A·B 를 밑 3 의 거듭제곱(3, 3^(5/4))으로 통일해 지수만으로 대소를 판정 — C 는 1 이므로 세 수가 한 줄에 놓인다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수 자리에 로그가 있는 수의 대소 비교(같은 밑으로 통일)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A, B 는 값을 직접 낼 수 없고 밑 3 의 거듭제곱으로 통일해야 비교가 가능하다. B 의 지수는 음의 로그라 부호 반전(T-부호)이,
    4√2=2^(5/2) 처리는 지수 단위(T-단위)가 함정이다. 통찰 2개 → STEP 1 ★2 출발에서 +1 → ★3.
    [분류 이슈] STEP 1 구역에서 유일하게 ★3 으로 올린 문항 — 구역 신호와 1단 어긋남.
  tier: star_3
  mechanism_primary: "지수 자리 로그 정리 → A=3, B=2^((5/4)log_2 3)=3^(5/4), C=1 → 밑 3 지수 비교 → C<A<B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$C<A<B$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(√3, 4√2)과 지수 자리 로그의 진수를 바꿀 수 있다. 제약: 정리 후 세 수가 같은 밑의 거듭제곱이 되어야 지수 비교가 가능하고, 지수가 너무 가까우면(3^1 대 3^(9/8)) 판정이 불안정해진다."
    creative: "(1) 세 수를 모두 2 의 거듭제곱으로 통일하는 버전(★3 유지) (2) 가장 큰 수만 고르는 5지선다로 낮추기(★2) (3) 한 수의 지수를 미지수로 두고 A<B<C 가 되는 범위를 묻기(I-MI → ★4)."
```

```yaml
- id: GN-ALG-42-77
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_5 2=a$, $\log_5 3=b$ 일 때 $\log_5 \sqrt{2.4}$ 를 $a$, $b$ 로 나타내기.
  category: "√ 를 1/2 지수로 → 2.4 를 12/5 로 분해 → a, b 와 log_5 5=1 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 10이 아닌 로그를 문자 a, b 로 나타내기(소수 진수 분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √ 를 계수 1/2 로 빼고 2.4=24/10=12/5=2²·3/5 로 분해하면 (1/2)(2a+b-1) 이 된다.
    밑이 5 이므로 분해에서 나온 log_5 5=1 이 그대로 상수항이 되는 점만 챙기면 되고 분기는 없다. STEP 1 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "√ 를 1/2 계수로 → 2.4=2²·3/5 분해 → 2a+b-log_5 5 → (1/2)(2a+b-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}(2a+b-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2^p·3^q·5^r 꼴 소수(1.2, 0.45, 7.5)로 바꾸고 근호 차수를 3 으로 올릴 수 있다. 제약: 밑이 5 이므로 분모의 5 가 상수항으로 빠지고, 새 소인수가 들어가면 a, b 로 표현할 수 없다."
    creative: "(1) 밑을 6 으로 바꾸면 log_6 2, log_6 3 의 합이 1 이라는 관계가 추가되어 ★3 (2) 결과 식을 주고 진수를 역추적(I-BW → ★3) (3) 두 개를 대소 비교로 묶기(★3)."
```

```yaml
- id: GN-ALG-42-78
  page: 42
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_a b=\frac{1}{5}$ 일 때 $\log_{b^2} a$ 의 정수 부분.
  category: "역수로 log_b a 확정 → 밑의 거듭제곱을 계수로 → 정수 부분 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 역수·밑의 거듭제곱 성질과 정수 부분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_b a=5 이고 밑이 b² 이므로 계수 1/2 이 붙어 5/2 가 된다. 마지막에 2<5/2<3 에서 정수 부분 2 를 읽는다.
    세 단계 모두 본문 성질의 직접 적용이고 분기가 없다. STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "log_a b=1/5 → log_b a=5 → log_(b²)a=(1/2)log_b a=5/2 → 정수 부분 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/42-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 값(1/5)과 밑의 지수(2)를 바꾸면 결과가 (1/지수)×(값의 역수)로 따라 움직인다. 제약: 값이 0 이 아니어야 역수가 있고, a·b 는 양수이며 1 이 아니어야 한다. 정수 부분이 흥미로우려면 결과가 정수로 딱 떨어지지 않게 고른다."
    creative: "(1) 소수 부분까지 묻기(★2 유지) (2) 밑을 √b 로 두어 계수가 2 가 되게(★2) (3) 정수 부분이 3 이 되게 하는 값의 범위를 묻는 역방향(I-BW·T-경계 → ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-43-79
  page: 43
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수 $x$ 에 대하여 $\log_{a-1} (ax^2-ax+2)$ 가 정의되도록 하는 모든 정수 $a$ 의 값의 합.
  category: "로그의 정의 조건을 밑·진수 부등식으로 → 이차식 양수 조건(판별식) → 정수 후보 선별"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'정의되도록'을 밑 조건(a-1>0, a-1≠1)과 진수 조건(모든 x 에서 ax²-ax+2>0) 두 부등식으로 옮긴다"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "진수 조건은 a=0(상수 2>0)과 a>0·판별식<0 두 경우로 갈린다 — 밑 조건이 a>1 이라 결국 후자만 남는다"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1<a<8 에서 얻은 정수 후보 2~7 중 밑이 1 이 되는 a=2 를 되돌아가 기각해야 한다 — 이 검증을 빠뜨리면 합이 27 이 된다"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "로그가 정의될 조건(밑·진수)과 이차부등식의 정수해"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    로그의 정의 조건, 이차식의 항상 양수 조건, 정수 후보의 사후 기각이 한 문항에 모여 있다.
    특히 a=2 기각(T-경계)과 이차항 계수 부호(T-부호)가 답을 25 와 27 로 가른다.
    통찰 3개(EQV·MI·VF) → STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 요건은 I-VF 로 충족.
  tier: star_4
  mechanism_primary: "정의 조건 → a-1>0·a-1≠1 과 판별식 a²-8a<0 → 1<a<8 → 정수 2~7 중 a=2 기각 → 합 25"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 이차식의 상수항(2)과 일차항 계수를 바꾸면 판별식 범위가 바뀐다. 제약: 판별식 조건이 정수 구간을 만들 만큼 넓어야 하고, 밑에서 제외되는 값(a-1=1)이 그 구간 안에 들어가야 검증 단계가 살아 있다."
    creative: "(1) 밑을 상수로 두고 진수만 조건으로 주면 이차부등식 문제로 내려가 ★3 (2) 정수 개수 대신 합을 최대로 하는 설정(★4 유지) (3) 진수를 일차식으로 바꾸면 '모든 실수 x' 가 불가능해져 조건 해석을 묻는 참·거짓 문항(★3)."
```

```yaml
- id: GN-ALG-43-80
  page: 43
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_2 (a+b)=3$, $\log_2 a+\log_2 b=3$ 일 때 $a^3+b^3$ 의 값.
  category: "두 로그 조건을 합·곱으로 → 세제곱 합 공식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조건을 각각 a+b=8, ab=8 로 옮겨 a, b 를 구하지 않고 기본 대칭식만 확보한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그 조건을 합·곱으로 바꿔 대칭식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건이 각각 합과 곱을 주고, 구하는 것이 대칭식이라 a³+b³=(a+b)³-3ab(a+b) 에 바로 대입하면 끝난다.
    a, b 를 실제로 구할 필요가 없다는 점 외에 분기나 검증이 없다.
    [분류 이슈] 벤더 STEP 2(★3 출발)이나 통찰 1개·표준 대칭식 계산이라 체감은 ★2 에 가깝다. 라벨은 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "log 조건 → a+b=8, ab=8 → a³+b³=(a+b)³-3ab(a+b)=512-192=320"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$320$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 우변 상수(3, 3)를 바꿔 합·곱을 조절한다. 제약: a, b 가 양수이고 (a+b)²≥4ab 여야 실수해가 존재하며, 여기서는 64=4·16 보다 크므로 성립. 구하는 식은 대칭식이어야 한다."
    creative: "(1) a²+b² 나 a³-b³ 를 묻기(차는 부호 확정이 붙어 ★4) (2) 조건 하나를 log_2(a-b) 로 바꾸면 부호·범위 검토가 추가되어 ★4 (3) a, b 가 정수가 되게 하는 상수 쌍을 묻는 역방향(I-VF → ★4)."
```

```yaml
- id: GN-ALG-43-81
  page: 43
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    $1<a<b$ 에서 두 점 $(a,\log_2 a)$, $(b,\log_2 b)$ 를 지나는 직선과 두 점 $(a,\log_4 a)$, $(b,\log_4 b)$ 를 지나는 직선의 $y$절편이 같다. $f(x)=a^{bx}+b^{ax}$, $f(1)=40$ 일 때 $f(2)$ 의 값(5지선다).
  category: "log_4=½log_2 로 두 절편의 비례 관계 → 절편 0 → a^b=b^a → f(1) 이 두 배임을 이용"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 직선은 첫째 직선의 y좌표를 모두 반으로 줄인 것이므로 절편도 정확히 절반 — 두 절편이 같다는 기하 조건이 '절편=0' 으로 환원된다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절편 0 은 직선이 원점을 지남, 즉 (log_2 a)/a=(log_2 b)/b 이고 정리하면 a^b=b^a 라는 대수 조건이 된다"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^b=b^a 이므로 f(1)=a^b+b^a=2a^b 이고 f(2)=(a^b)²+(b^a)²=2(a^b)² — 두 항이 같다는 대칭으로 a, b 를 구하지 않고 끝난다"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "로그함수 위 두 점을 지나는 직선의 y절편 조건과 지수식의 값(수능 기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    기하 조건(두 절편이 같다)을 좌표 계산으로 밀면 식이 커지고, log_4=½log_2 라는 비례를 보면 절편=0 한 줄로 끝난다.
    거기서 얻은 a^b=b^a 가 f(1), f(2) 의 두 항을 같게 만들어 a, b 자체는 끝까지 필요 없다.
    통찰 3개(RT·EQV·SYM) · 수능 기출 → STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 요건은 I-SYM·I-RT 로 충족.
  tier: star_4
  mechanism_primary: "log_4=½log_2 → 둘째 절편=첫째 절편의 절반 → 절편 0 → a^b=b^a → f(1)=2a^b=40 → f(2)=2(a^b)²=800"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1) 의 값(40)과 f(2)·f(3) 중 무엇을 묻는지를 바꿀 수 있다. 제약: 두 로그의 밑이 한쪽이 다른 쪽의 거듭제곱이어야(2와 4) 절편 비례가 성립하고, 1<a<b 조건이 있어야 a^b=b^a 를 만족하는 쌍이 존재한다."
    creative: "(1) f(3) 을 묻기(★4 유지) (2) 밑을 2 와 8 로 바꾸면 비례계수가 1/3 이 되어 여전히 절편 0(★4 유지) (3) 절편이 같다는 조건 대신 기울기가 같다고 주면 조건이 모순임을 보이는 판별 문항(I-VF → ★4~5)."
```

```yaml
- id: GN-ALG-43-82
  page: 43
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $5^x=2^y=(\sqrt[3]{10})^z$ ($xyz\ne 0$) 일 때 $\frac{1}{x}+\frac{1}{y}-\frac{3}{z}$ 의 값.
  category: "공통값을 k 로 두고 역수를 밑 k 로그로 → 세 항을 진수의 곱·몫으로 묶기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통값을 k 로 두면 1/x=log_k 5, 1/y=log_k 2, 3/z=3log_k ∛10=log_k 10 이 되어 세 항이 같은 밑의 로그로 모인다. 계수 3 이 세제곱근을 정확히 되돌린다는 점이 설계의 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x=b^y=c^z 조건에서 지수 역수의 합·차(역수 로그 전환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    40-e9·40-67·40-68 과 같은 역수 전환 골조이고, 항이 셋이며 세제곱근과 계수 3 이 맞물려 log_k 10 으로 복원된다.
    5·2=10 이므로 합과 차가 통째로 상쇄되어 0 이 된다. 전환 1개(RT d2) · STEP 2 ★3 출발 유지 → ★3.
  tier: star_3
  mechanism_primary: "공통값 k → 1/x+1/y=log_k 10, 3/z=log_k 10 → 차 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 밑(5, 2, ∛10)과 세 계수(1, 1, 3)를 바꿀 수 있다. 제약: 앞 두 진수의 곱이 셋째 항의 진수와 같아야 0 이 되고, 계수는 근호 차수와 정확히 맞아야 한다. xyz≠0 이어야 역수가 존재한다."
    creative: "(1) 셋째 계수를 2 로 어긋나게 해 답이 0 이 아닌 값이 되게(★3 유지) (2) 네 항으로 늘리기(★3) (3) 결과가 0 이 되게 하는 근호 차수를 묻는 역방향(I-BW → ★4)."
```

```yaml
- id: GN-ALG-43-83
  page: 43
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 $x^2-3x+1=0$ 의 두 실근이 $\log_{10}\alpha$, $\log_{10}\beta$ ($\log_{10}\alpha<\log_{10}\beta$) 일 때 $2\log_{\alpha^2}\beta-\frac{1}{3}\log_\beta \alpha^3$ 의 값.
  category: "밑·진수의 지수를 계수로 빼 상용로그 비로 → 대칭식 전개 → 차의 부호 확정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2log_(α²)β=log_α β, (1/3)log_β α³=log_β α 로 지수를 정리한 뒤 밑의 변환으로 상용로그 비 p=log α, q=log β 의 식으로 옮긴다"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "q/p-p/q=(q²-p²)/(pq)=((q-p)(q+p))/(pq) 로 묶고, 근과 계수의 관계와 (q-p)²=(p+q)²-4pq, 그리고 p<q 조건으로 q-p=+√5 를 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 근이 로그 값인 이차방정식 — 대칭식의 차와 근의 대소 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    41-70 의 차 버전이다. 합 버전과 달리 (q-p)² 에서 양·음 두 값이 나오므로 주어진 대소 조건으로 부호를 확정해야 하고(T-부호),
    밑·진수 양쪽의 지수를 먼저 정리하지 않으면 식이 정리되지 않는다(T-표기). 통찰 2개 → STEP 2 ★3 출발에서 +1 → ★4.
    ★4 저노출 요건은 I-RT·I-XU 로 충족.
  tier: star_4
  mechanism_primary: "지수 정리 → log_α β-log_β α=(q²-p²)/(pq) → (q-p)(q+p)/(pq), q-p=√5, q+p=3, pq=1 → 3√5"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 합·곱(3, 1)을 바꾸면 답이 (합)×√(합²-4곱)/곱 로 따라 움직인다. 제약: 판별식>0, 곱≠0, 두 근이 0 이 아니어야 α·β 를 로그의 밑으로 쓸 수 있고, 대소 조건이 있어야 부호가 하나로 정해진다."
    creative: "(1) 대소 조건을 빼면 답이 ±3√5 두 개가 되어 I-MI 가 추가되고 ★4 유지 (2) 합 버전으로 낮추면 41-70 과 같은 ★3 (3) 밑·진수의 지수를 미지수로 두고 값이 유리수가 되는 조건을 묻기(I-VF → ★5 후보)."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-43-84
  page: 43
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    $\log_4 2n^2-\frac{1}{2}\log_2 \sqrt{n}$ 의 값이 $40$ 이하의 자연수가 되도록 하는 자연수 $n$ 의 개수.
  category: "밑을 2로 통일해 식을 log_2 n 의 일차식으로 → 값이 자연수일 조건 역추적 → n 이 자연수일 조건으로 선별"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 4 와 √ 를 모두 밑 2 로 옮겨 식을 1/2+(3/4)log_2 n 이라는 log_2 n 에 대한 일차식으로 정리"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "값을 자연수 m 으로 두고 log_2 n=(4m-2)/3, 즉 n=2^((4m-2)/3) 으로 n 을 역추적한다"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n 이 자연수이려면 지수 (4m-2)/3 이 정수여야 하므로 1~40 의 m 중 3으로 나눈 나머지가 2 인 것만 남긴다 — 이 필터를 빠뜨리면 40 이 답이 된다"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "로그식의 값이 자연수가 되는 자연수 n 의 개수(정수 조건 선별)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    식 정리(밑 통일) → 값을 자연수로 두고 n 을 역추적 → n 이 자연수가 되는 m 만 남기기, 세 단계가 모두 필요하다.
    40 이하라는 상한(T-경계)과 지수의 정수 조건(T-단위)이 답을 40 과 13 으로 가른다.
    통찰 3개(EQV·BW·VF) · 수능 기출 → 실력 UP ★4 출발 유지 → ★4. ★5 자격(통찰 3 + VF)은 충족하나 조합 자체는 흔해 ★4 에 둔다.
  tier: star_4
  mechanism_primary: "밑 2 통일 → 1/2+(3/4)log_2 n=m → n=2^((4m-2)/3) → (4m-2)가 3의 배수인 m(1~40) 세기 → 13"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(40)과 두 항의 계수·근호 차수를 바꿀 수 있다. 제약: 정리 후 log_2 n 의 계수가 분수여야 정수 조건 필터가 살아 있고(계수가 1 이면 모든 m 이 통과), 상수항이 있어야 합동식이 자명해지지 않는다. n 은 자연수이므로 지수가 0 이상이어야 한다."
    creative: "(1) 상한을 100 으로 올려 개수만 키우기(★4 유지) (2) '자연수' 를 '정수' 로 바꾸면 음의 지수가 허용되지 않아 조건이 달라짐(★4) (3) 개수가 주어졌을 때 상한을 역추적하면 이중 역방향으로 ★5 후보."
```

```yaml
- id: GN-ALG-43-85
  page: 43
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 양수 $a$, $b$, $c$ 가 $a^2=b^3=c^5$, $\log_4 a+\log_4 b+\log_4 c=31$ 을 만족할 때 $\log_8 a\times\log_8 b\times\log_8 c$ 의 값.
  category: "공통값을 두어 log_2 a : log_2 b : log_2 c 비례로 → 둘째 조건으로 비례상수 확정 → 밑 8 로 환산해 곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a²=b³=c⁵ 에 밑 2 로그를 취해 2log_2 a=3log_2 b=5log_2 c=t 로 두면 세 로그가 t/2, t/3, t/5 라는 하나의 매개변수로 묶인다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 조건 log_4(abc)=31 을 같은 t 로 표현해 (1/2)·t(1/2+1/3+1/5)=31, 즉 t=60 으로 두 조건을 하나로 합친다"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 값은 밑이 8 이므로 log_8=(1/3)log_2 로 환산해 10, 20/3, 4 의 곱으로 정리"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "세 양수의 거듭제곱이 같을 때 로그의 비례와 조건 결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a, b, c 를 각각 구하려 하면 지수가 분수로 흩어지고, 공통값을 매개변수 t 로 두어 세 로그를 비례로 묶는 것이 유일한 길이다.
    밑이 4, 8, 2 로 세 번 바뀌므로 환산 계수를 놓치면 t 가 틀어진다. 통찰 3개(EQV·CON·RT) → 실력 UP ★4 출발 유지 → ★4.
    ★5 는 통찰 3개에 더해 SC·VF·SYM·XU 중 하나가 필요한데 여기에는 없어 ★4 에 둔다.
  tier: star_4
  mechanism_primary: "2log_2 a=3log_2 b=5log_2 c=t → log_4(abc)=(1/2)(31t/30)=31 → t=60 → log_8 값 10, 20/3, 4 의 곱"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{800}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/43-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 지수(2, 3, 5)와 둘째 조건의 상수(31), 두 밑(4, 8)을 바꿀 수 있다. 제약: 세 지수의 역수 합이 상수와 맞아떨어져야 t 가 정수로 떨어지고(1/2+1/3+1/5=31/30 과 31 이 맞물림), a·b·c 는 모두 양수여야 한다."
    creative: "(1) 곱 대신 합 log_8 a+log_8 b+log_8 c 를 묻기(★3 으로 내려감) (2) 지수를 2, 3, 7 로 바꾸고 상수를 맞춰 재설계(★4 유지) (3) 세 지수 중 하나를 미지수로 두고 t 가 정수가 되는 조건을 묻기(I-VF 추가 → ★5 후보)."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 5 · ★2 22 · ★3 9 · ★4 5 · ★5 0
- 통찰형 25 · 절차형 16 · premium 0
- 구역별 ★ 평균: 개념원리 익히기 1.0(5문) · 필수 예제 2.2(11문) · 확인체크 2.5(11문) · STEP 1 2.3(7문) · STEP 2 3.6(5문) · 실력 UP 4.0(2문)
- type_hint 상위: 「지수 조건의 로그 전환(a^x=b^y=k 형 포함)」 6 · 「조건을 한 덩어리로 묶어 대입」 5 · 「밑의 변환 공식과 여러 성질」 4 · 「로그를 문자 a, b 로 나타내기」 4 · 「로그와 이차방정식(근과 계수)」 4
- 통찰 유형 분포: I-RT 12 · I-EQV 11 · I-XU 4 · I-PD 2 · I-VF 3 · I-MI 1 · I-BW 1 · I-SYM 1 · I-CON 1 (I-SC 0)
- 그림: 0문(이 범위에는 그림 문항이 없다)
- 소문항 묶음 문항: 13문(⑴~⑷ 형식 — 익히기 5, 필수 예제 4, 확인체크 4)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (구역 해석) | tag 「확인체크」가 이 범위에서는 익히기 구역이 아니라 필수 예제 뒤에 짝으로 붙어 있어, 가이드의 「확인체크 → ★1 출발」 대신 **짝 예제와 같은 ★2 출발**로 해석했다. 카탈로그 설계 때 확인체크의 층을 확정해야 한다 | — |
| GN-ALG-38-63 | 통찰 0 이나 분수 밑의 부호 반전 + 1/16 대 1/14 근접값 비교로 M_total 7. 규칙상 ★2 유지했으나 체감은 ★3 | ★2 / ★3 |
| GN-ALG-42-76 | STEP 1 구역에서 유일하게 통찰 2개로 ★3 까지 올림 — 구역 신호와 1단 어긋남 | ★2 / ★3 |
| GN-ALG-43-80 | 벤더 STEP 2(★3 출발)이나 두 조건 → 합·곱 → 세제곱 합 공식의 표준 절차라 체감 ★2 | ★2 / ★3 |
| GN-ALG-43-83 | STEP 2 이지만 통찰 2개 + 차의 부호 확정까지 필요해 실력 UP 과 같은 ★4 로 라벨 | ★3 / ★4 |
| GN-ALG-43-84 | 통찰 3개 + I-VF 로 ★5 자격 요건은 충족하나 통찰 조합이 흔해(novelty 0) ★4 에 둠 | ★4 / ★5 |

## 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 참고할 기록이다.

**이 범위에서 반복된 type_hint (독립 유형으로 세울 후보)**

1. **지수 조건의 로그 전환** — 39-e8, 39-66(a^x=b 를 x=log_a b 로), 40-e9, 40-67, 40-68, 43-82(a^x=b^y=k 에서 1/x±1/y). 6문으로 이 단원 최다. 다만 앞 둘(문자로 나타내기)과 뒤 넷(지수 역수의 합·차)은 **답의 형태와 착안 지점이 달라 두 유형으로 분리**하는 편이 낫다.
2. **로그를 문자 a, b 로 나타내기** — 35-56, 39-e7, 39-65, 42-77. 밑이 10인 것과 아닌 것(42-77 은 밑 5)의 차이는 밑의 변환 한 단계뿐이므로 **한 유형으로 통합** 가능.
3. **로그와 이차방정식** — 41-e10, 41-69(근이 α, β), 41-70, 43-83(근이 log α, log β). 앞 둘과 뒤 둘은 근과 계수의 관계를 **어디에 대입하는지**가 달라 base ★ 가 1단 벌어진다. **두 유형으로 분리** 권장.
4. **로그 값의 대소 비교** — 38-e5, 38-63, 42-76. 세 수를 유리수로 환산하는 유형(38-e5, 38-63)과 같은 밑의 거듭제곱으로 통일하는 유형(42-76)은 착안이 다르다. 분리 여부는 추가 표본을 본 뒤 결정.
5. **정수 부분과 소수 부분** — 41-e11, 41-71, 42-78. 소수 부분의 역수를 쓰는 41-71 이 한 단계 위. **한 유형 + 난도 변형**으로 두면 충분하다.
6. **망원(연쇄 약분)** — 36-60(로그의 합), 42-74(로그 방정식). 표본은 2문이지만 착안이 선명하고 base ★ 3 으로 안정적이라 **독립 유형**으로 세울 만하다.

**통합해도 될 것**: 「로그의 성질로 값 구하기」(35-55, 36-e3, 36-59)와 「밑의 변환 공식과 여러 성질」(35-57, 35-58, 37-e4, 37-61)은 계수·밑 처리의 정도 차이일 뿐이라 한 유형의 난도 단계(★1~2)로 묶을 수 있다.

**따로 세워야 할 것**: 43-79(로그가 정의될 조건 + 이차부등식 정수해)와 43-81(로그함수 그래프 위 두 점과 직선의 절편)은 이 범위에서 각 1문뿐이지만 다른 문항과 골조가 전혀 겹치지 않는 ★4 변별 유형이다. 43-85(거듭제곱이 같은 세 수의 로그 비례)도 마찬가지다.
