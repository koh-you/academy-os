---
name: mechanism-데이터-GN-ALG-02-p2
description: 개념원리 대수 02 지수의 확장(2/3 · 21~25쪽 필수·발전 예제) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-alg
  section: 02 지수의 확장
  unit_code: ALG-02
  part: "2/3"
  extract_range: "21~25쪽 · 21-e5~25-26"
  total_problems: 23
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 대수 · 02 지수의 확장 (2/3) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 02단원 21~25쪽의 **필수·발전 예제** 구역 23문항(21-e5 ~ 25-26)을 다룬다. 단원 전체 45문항 중 두 번째 조각이며, 내용은 유리수·실수 지수의 지수법칙, 거듭제곱근을 유리수 지수로 고치기, 지수를 변형해 문자로 나타내기, 분수 지수 식의 곱셈 공식·인수분해, $a^{1/2}\pm a^{-1/2}$ 및 $a^x\pm a^{-x}$ 꼴 대칭식의 값으로 이어진다. 이 범위에 그림 문항은 없다.

벤더 난이도 신호는 구역과 태그다. 이 조각은 전부 「필수·발전 예제」 구역이고, 각 예제(id `쪽-eN` · tag 「필수」)와 그 뒤에 붙는 확인 문제(tag 「확인체크」)가 번갈아 놓인다. 확인체크는 「개념원리 익히기」의 통번호 확인 문제와 달리 바로 앞 필수 예제와 같은 골조·같은 난이도대를 겨냥하므로, 이 조각에서는 **필수·확인체크 모두 ★2 를 출발점**으로 잡고 M_total 과 통찰로 ±1 조정했다(통찰 0·M_total ≤ 5 → −1, 통찰 2개 이상·depth 2 이상·M_total ≥ 8 → +1). 개념원리 예제의 `type`(예제 제목)이 있으면 type_hint 의 기본 후보로 쓰되 실제 골조가 더 좁거나 넓으면 이름을 고쳤다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-ALG-21-e5
  page: 21
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴~⑶ 유리수·무리수 지수로 쓰인 곱·나눗셈 식 세 개를 계산.
    ⑴ $4^{2/3}\div 24^{1/3}\times 18^{2/3}$ ⑵ $\{(27/125)^{-1/3}\}^{3/2}\times(27/5)^{1/2}$ ⑶ $(5^{\sqrt2}\div 2^{\sqrt6})^{\sqrt2}\times 4^{\sqrt3}$.
  category: '밑을 소인수로 통일 → 유리수·실수 지수법칙 → 한 밑으로 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '유리수·실수 지수의 지수법칙 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 밑을 2·3·5 로 쪼갠 뒤 지수를 더하고 빼는 표준 절차. ⑶ 은 무리수 지수에도 같은 법칙이 성립함을 확인시키는 문항으로, $(5^{\sqrt2})^{\sqrt2}=5^2$ 처럼 지수끼리 곱하면 유리수가 되도록 설계돼 있다.
    착안 없음·M_total 6 → 필수·발전 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '밑 소인수분해 → 지수 덧셈·뺄셈 → 한 밑의 거듭제곱으로 정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ ⑵ $5$ ⑶ $25$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/21-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑을 이루는 소인수 조합(4·24·18 → 9·12·8 등)과 분수 지수의 분모(2·3·4)를 바꿀 수 있다. 제약: 최종 지수가 정수로 떨어져 답이 유리수여야 하고, ⑶ 은 무리수 지수끼리 곱했을 때 유리수가 되도록 $\sqrt2$·$\sqrt6$·$\sqrt3$ 같은 짝을 유지해야 한다.'
    creative: '(1) 답을 하나의 소인수 거듭제곱 꼴로 요구하기(★2 유지) (2) 계산 결과가 정수가 되도록 하는 지수를 거꾸로 묻기 → I-BW 추가 ★3 (3) 밑에 문자 $a>0$ 를 섞어 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-21-12
  page: 21
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑶ 지수법칙으로 계산.
    ⑴ $8^{1/4}\times 32^{-1/2}\div 2^{-3/4}$ ⑵ $\{(125/216)^{-1/3}\}^{5/2}\div(6/125)^{1/2}$ ⑶ $3^{2+2\sqrt2}\div 3^{2\sqrt2-1}-\{(-3)^6\}^{1/2}$.
  category: '밑 통일 → 지수 가감 → ⑶ 은 음수 밑의 짝수 거듭제곱을 먼저 양수로'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '유리수·실수 지수의 지수법칙 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제 21-e5 와 같은 골조. ⑶ 에서 $\{(-3)^6\}^{1/2}$ 을 $(-3)^3$ 으로 잘못 읽지 않고 $(-3)^6=3^6$ 을 먼저 양수로 만든 뒤 제곱근을 취해야 해 T-부호 함정 1개가 살아 있다.
    착안 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑을 2·3·5·6 으로 통일 → 지수 가감 → ⑶ 은 $\{(-3)^6\}^{1/2}=3^3$ 확인 후 차'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{36}{5}$ ⑶ $0$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/21-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(8·32·125·216)과 분수 지수의 분모를 바꿀 수 있다. 제약: ⑶ 은 음수 밑이 짝수 지수로 양수가 되는 구조를 유지해야 부호 함정이 살아 있고, 무리수 지수 항끼리는 나눗셈으로 상쇄돼야 한다.'
    creative: '(1) ⑶ 을 $\{(-a)^{2n}\}^{1/2}$ 일반형으로 물어 $|a|$ 처리를 요구하면 I-EQV ★3 (2) 세 값의 대소를 비교하게 하면 ★2 유지 (3) 무리수 지수 부분만 떼어 항등식이 되는 조건을 묻기 ★3.'
```

```yaml
- id: GN-ALG-21-13
  page: 21
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $2^x=3$ 일 때 $\left(\dfrac{1}{8}\right)^{x/3}$ 의 값.
  category: '밑을 2로 통일 → 지수가 $-x$ → $1/2^x$ 에 대입'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$a^x$ 의 값이 주어질 때 같은 밑의 다른 거듭제곱 값 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $1/8=2^{-3}$ 으로 바꾸면 지수가 $-x$ 로 한 번에 정리되는 1~2단계짜리 확인 문제. 미지수 $x$ 를 직접 구하지 않는다는 점만 알면 막히는 곳이 없다.
    착안 없음·M_total 5 → 구역 출발점 ★2 에서 −1 → ★1. [분류 이슈] 구역 신호(★2)와 1단 차이라 라벨은 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: '$(1/8)^{x/3}=(2^{-3})^{x/3}=2^{-x}=1/2^x$ → $1/3$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/21-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 등식($2^x=3$)의 밑과 값, 묻는 식의 밑($1/16$·$\sqrt2$ 등)을 바꿀 수 있다. 제약: 묻는 식의 밑이 주어진 밑의 거듭제곱이어야 지수가 $x$ 의 유리수배로 떨어진다.'
    creative: '(1) $4^x$ 처럼 양의 지수로 물어 역수 처리를 없애면 ★1 유지 (2) $2^x=3$ 과 $3^y=2$ 를 함께 주고 $xy$ 를 물으면 I-EQV 추가 ★3 (3) $2^x+2^{-x}$ 꼴로 바꾸면 곱셈 공식이 필요해 ★2.'
```

```yaml
- id: GN-ALG-22-e6
  page: 22
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴⑵ 중첩 거듭제곱근 식을 $2^k$·$a^k$ 꼴로 고쳤을 때 유리수 $k$.
    ⑴ $\sqrt{2\times\sqrt[3]{4}\times\sqrt[4]{8}}$ ⑵ $\sqrt{a\sqrt{a\sqrt{a}}}\times\sqrt{\sqrt[4]{a}}$ ($a>0$, $a\ne1$).
  category: '거듭제곱근 → 유리수 지수 → 안쪽부터 지수 합산 → 양변 지수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '중첩 거듭제곱근을 유리수 지수로 고쳐 지수 비교하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt[n]{a^m}=a^{m/n}$ 이라는 표준 공식을 중첩 구조에 안쪽부터 순서대로 적용하는 절차. 순서만 지키면 걸리는 곳이 없고, 조건 $a\ne1$ 이 마지막 지수 비교를 정당화한다.
    착안 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '근호를 유리수 지수로 고쳐 안쪽부터 지수를 모음 → 양변 지수 비교로 $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{29}{24}$ ⑵ $1$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/22-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중첩 근호의 차수(2·3·4)와 밑(2, 문자 $a$)을 바꿀 수 있다. 제약: 지수 합이 유리수로 떨어져야 하고, 문자 밑은 $a>0$·$a\ne1$ 을 유지해야 지수 비교가 성립한다.'
    creative: '(1) $k$ 대신 식 전체의 값을 묻기(★2 유지) (2) 중첩 단계를 $n$ 겹 일반형으로 주면 I-PD 추가 ★4 (3) $\sqrt[3]{a}\times\sqrt[4]{a}=\sqrt[n]{a}$ 가 되는 $n$ 을 역으로 묻기 → I-BW ★3.'
```

```yaml
- id: GN-ALG-22-14
  page: 22
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴⑵ $a>0$, $a\ne1$ 에서 거듭제곱근 식을 $a^k$ 꼴로 고쳤을 때 유리수 $k$.
    ⑴ $\sqrt[3]{a^2}\div\sqrt[4]{a}\times\sqrt[12]{a}=a^k$ ⑵ $\sqrt[3]{a^2}=\sqrt[4]{a\sqrt{a^k}}$.
  category: '양변을 $a$ 의 유리수 지수로 통일 → 지수 비교 → $k$ 에 대한 일차식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근을 유리수 지수로 고쳐 지수 비교로 $k$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 지수의 가감만 하면 되고, ⑵ 는 오른쪽 중첩 근호를 $k$ 가 든 지수로 정리한 뒤 양변 지수를 같다고 놓는 일차방정식. $k$ 가 근호 안쪽에 들어 있다는 점만 다를 뿐 22-e6 과 같은 골조다.
    착안 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '근호 → 유리수 지수 → 양변을 $a$ 의 한 지수로 정리 → 지수 비교로 $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{10}{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/22-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 차수(3·4·12)와 $a^2$ 의 지수를 바꿀 수 있다. 제약: ⑵ 에서 $k$ 의 계수가 0 이 되지 않아야 하고 답이 유리수로 떨어져야 한다.'
    creative: '(1) $k$ 가 자연수가 되는 조건을 묻기 → I-EQV ★3 (2) $k$ 를 더 깊은 근호 안쪽에 두어 정리 단계를 늘리면 Mₛ 상승 ★3 (3) 밑을 수치 2 로 고정하면 Mₐ 하락 ★2 유지.'
```

```yaml
- id: GN-ALG-22-15
  page: 22
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\sqrt[3]{6\sqrt{6}\times\dfrac{6}{\sqrt[4]{6}}}=6^k$ 일 때 유리수 $k$.
  category: '근호 안을 6의 유리수 지수로 정리 → 바깥 세제곱근으로 $\times\frac13$ → 지수 비교'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '중첩 거듭제곱근을 유리수 지수로 고쳐 지수 비교하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 곱·나눗셈을 6의 지수로 모은 뒤 바깥 세제곱근을 지수 $1/3$ 배로 처리하는 두 단계. 밑이 수치 하나로 고정돼 있어 Mₐ 1 로 22-e6 보다 가볍다.
    착안 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '근호 안 $6^{3/2}\times 6^{3/4}=6^{9/4}$ → 세제곱근으로 지수 $\times\frac13$ → $k=\frac34$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/22-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 6 과 안쪽 근호 차수(2·4), 바깥 근호 차수 3 을 바꿀 수 있다. 제약: 바깥 차수로 나눈 지수가 유리수로 깔끔히 떨어져야 한다.'
    creative: '(1) $k$ 를 주고 안쪽 근호 차수를 묻기 → I-BW ★3 (2) 밑을 문자 $a>0$ 로 바꾸면 Mₐ 상승 ★2 유지 (3) 식 전체가 자연수가 되는 밑의 조건으로 확장하면 I-EQV ★3.'
```

```yaml
- id: GN-ALG-22-16
  page: 22
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $100$ 이하의 자연수 $n$ 에 대하여 $\sqrt[5]{2^n}$ 이 자연수가 되도록 하는 $n$ 의 개수.
  category: '$\sqrt[5]{2^n}=2^{n/5}$ → 자연수 조건을 $n$ 이 5의 배수로 → 범위 안 개수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sqrt[5]{2^n}$ 이 자연수라는 조건을 지수 $n/5$ 가 자연수라는 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '거듭제곱근이 자연수가 되도록 하는 지수 조건'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호를 지수로 바꾼 뒤 「자연수」를 「지수가 정수」로 옮기는 동치 변환 한 번이 전부이고, 나머지는 100 이하 5의 배수를 세는 일. 밑이 소수 2 라서 이 동치가 깨지지 않는다는 점이 설계의 핵심이다.
    통찰 1개(EQV d1)·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$2^{n/5}$ 가 자연수 ⟺ $n/5$ 가 자연수 → $n=5m$ → $1\le 5m\le 100$ 에서 20개'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/22-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 차수 5, 밑 2, 상한 100 을 바꿀 수 있다. 제약: 밑이 소수여야 「지수가 정수」라는 동치가 유지된다(밑이 4면 $n$ 이 5의 배수가 아니어도 자연수가 될 수 있다).'
    creative: '(1) 밑을 4나 8로 바꿔 동치 조건이 달라지게 하면 I-MI 추가 ★3 (2) $\sqrt[n]{2^{100}}$ 으로 뒤집어 약수 개수 문제로 만들면 I-RT ★3 (3) 개수 대신 $n$ 의 최댓값을 물으면 ★2 유지.'
```

```yaml
- id: GN-ALG-23-e7
  page: 23
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $2^6=a$, $3^5=b$ 일 때 ⑴ $6^{11}$ ⑵ $18^5$ 을 $a$, $b$ 로 나타내기.
  category: '$2=a^{1/6}$, $3=b^{1/5}$ 로 뒤집기 → 소인수분해 → 지수 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a=2^6$ 조건을 $2=a^{1/6}$ 로 뒤집어 밑 자체를 $a$ 의 유리수 거듭제곱으로 교체'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '주어진 거듭제곱 값을 이용해 다른 수를 문자로 나타내기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 등식을 그대로 쓰지 않고 좌우를 뒤집어 밑을 $a^{1/6}$·$b^{1/5}$ 로 바꾸는 착안이 이 유형의 전부다. 뒤집고 나면 $6^{11}=2^{11}3^{11}$ 처럼 소인수분해한 뒤 지수를 곱하는 절차.
    통찰 1개(EQV d1)·M_total 7 → 필수 예제 ★2 유지. [분류 이슈] 이 「뒤집기」를 통찰로 셀지 표준 절차로 볼지 경계 — 카탈로그 설계 때 통일이 필요하다.
  tier: star_2
  mechanism_primary: '$2=a^{1/6}$, $3=b^{1/5}$ → $6^{11}=2^{11}3^{11}$ 에 대입 → $a^{11/6}b^{11/5}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a^{\frac{11}{6}}b^{\frac{11}{5}}$ ⑵ $a^{\frac{5}{6}}b^{2}$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/23-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 지수(6·5)와 묻는 수의 지수(11·5)를 바꿀 수 있다. 제약: 묻는 수의 소인수가 주어진 두 밑으로만 이루어져야 하고, 지수 나눗셈이 유리수로 떨어져야 한다.'
    creative: '(1) 세 번째 소인수(5)를 섞어 문자 $c$ 를 추가하면 Mₛ 상승 ★3 (2) $a$, $b$ 로 나타낸 식을 주고 원래 수를 묻는 역방향 → I-BW ★3 (3) 거듭제곱근 꼴로 물으면 23-18 과 같은 골조 ★2 유지.'
```

```yaml
- id: GN-ALG-23-e8
  page: 23
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $x>0$, $y>0$ 에서 ⑴ $(x+y^{-1})\div(x^{1/3}+y^{-1/3})$ ⑵ $(x^{1/4}+y^{-1/4})(x^{1/4}-y^{-1/4})(x^{1/2}+y^{-1/2})$ 를 간단히 하기.
  category: '$A=x^{1/3}$, $B=y^{-1/3}$ 로 보아 세제곱 합 인수분해 → 약분 / 합차 공식 두 번'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수 지수 식을 $A$, $B$ 의 세제곱 합·제곱 차 다항식 표현으로 옮겨 공식을 적용'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '분수 지수 식에 곱셈 공식·인수분해 공식 적용하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 $1/3$·$1/4$ 를 보고 원식을 $A^3+B^3$ 과 $(A+B)(A-B)$ 구조로 알아보는 것이 관건이고, 알아본 뒤는 공식 대입과 약분뿐이다. ⑵ 는 합차 공식을 두 번 연달아 쓰면 $x-1/y$ 로 끝난다.
    통찰 1개(RT d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '⑴ $x+y^{-1}=A^3+B^3=(A+B)(A^2-AB+B^2)$ 로 보아 약분 ⑵ 합차 공식 두 번'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x^{\frac{2}{3}}-x^{\frac{1}{3}}y^{-\frac{1}{3}}+y^{-\frac{2}{3}}$ ⑵ $x-\dfrac{1}{y}$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/23-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분수 지수의 분모(3·4)와 문자 자리($y^{-1}$ 대신 $y$)를 바꿀 수 있다. 제약: 나뉘는 쪽과 나누는 쪽의 지수 비가 3배·2배여야 세제곱 합·제곱 차 공식이 들어맞는다.'
    creative: '(1) 나눗셈을 곱셈으로 바꿔 전개만 하게 하면 절차형 ★2 (2) 세제곱 합과 차를 섞어 부호 판단을 추가하면 ★3 (3) 결과가 $x-1/y$ 가 되는 세 인수를 역으로 찾게 하면 I-BW ★3.'
```

```yaml
- id: GN-ALG-23-17
  page: 23
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $2^3=a$, $3^4=b$ 일 때 $12^8$ 을 $a$, $b$ 로 나타내기.
  category: '$2=a^{1/3}$, $3=b^{1/4}$ 로 뒤집기 → $12^8=2^{16}3^8$ → 지수 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a=2^3$ 조건을 $2=a^{1/3}$ 로 뒤집어 밑을 $a$ 의 유리수 거듭제곱으로 교체'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '주어진 거듭제곱 값을 이용해 다른 수를 문자로 나타내기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    23-e7 과 같은 골조. $12=2^2\times3$ 이므로 $12^8=2^{16}3^8$ 로 쪼갠 뒤 밑을 $a$, $b$ 의 유리수 거듭제곱으로 교체한다. $2^2$ 때문에 지수가 두 배로 커지는 것만 주의하면 된다.
    통찰 1개(EQV d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$2=a^{1/3}$, $3=b^{1/4}$ → $12^8=2^{16}3^8$ → $a^{16/3}b^2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a^{\frac{16}{3}}b^{2}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/23-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 지수(3·4)와 묻는 수 $12^8$ 의 밑·지수를 바꿀 수 있다. 제약: 묻는 수의 소인수가 주어진 두 밑으로만 구성돼야 하고 지수 나눗셈이 유리수로 떨어져야 한다.'
    creative: '(1) $12^8$ 대신 $\sqrt[3]{12}$ 같은 거듭제곱근으로 물으면 23-18 골조 ★2 유지 (2) 세 번째 소인수를 섞으면 Mₛ 상승 ★3 (3) 결과 식을 주고 원래 수를 묻는 역방향 → I-BW ★3.'
```

```yaml
- id: GN-ALG-23-18
  page: 23
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a=\sqrt[3]{6}$, $b=\sqrt{7}$ 일 때 $\sqrt[9]{42}$ 를 $a$, $b$ 로 나타내기.
  category: '$6=a^3$, $7=b^2$ 로 뒤집기 → $42=6\times7$ 분해 → 지수 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a=\sqrt[3]{6}$ 조건을 $6=a^3$ 으로 뒤집어 밑을 문자의 거듭제곱으로 교체'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '주어진 거듭제곱 값을 이용해 다른 수를 문자로 나타내기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호를 유리수 지수로 바꾼 뒤 $6=a^3$, $7=b^2$ 로 밑을 교체하는 같은 착안. 주어진 쪽이 근호 꼴이라 뒤집으면 정수 지수가 되고, $42=6\times7$ 로 쪼개는 단계가 하나 더 붙는다.
    통찰 1개(EQV d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$6=a^3$, $7=b^2$ → $\sqrt[9]{42}=6^{1/9}7^{1/9}$ → $a^{1/3}b^{2/9}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a^{\frac{1}{3}}b^{\frac{2}{9}}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/23-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$, $b$ 의 근호 차수(3·2)와 묻는 $\sqrt[9]{42}$ 의 차수·밑을 바꿀 수 있다. 제약: 묻는 수가 두 밑의 곱으로 소인수분해돼야 하고 지수가 유리수로 떨어져야 한다.'
    creative: '(1) 42 대신 $6^2\times7$ 처럼 지수를 키우면 계산만 늘어 ★2 유지 (2) $a$, $b$ 로 나타낸 식을 주고 원래 수를 묻기 → I-BW ★3 (3) 세 번째 문자 $c=\sqrt[5]{5}$ 를 더해 210 으로 확장하면 Mₛ 상승 ★3.'
```

```yaml
- id: GN-ALG-23-19
  page: 23
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a>0$, $b>0$ 에서 ⑴ $(a^{1/3}-b^{1/3})(a^{2/3}+a^{1/3}b^{1/3}+b^{2/3})$ ⑵ $(3^{1/2}+1)(3^{1/2}-1)(8^{1/6}+1)(8^{1/6}-1)$ 을 간단히 하기.
  category: '세제곱 차 공식 직접 대입 / 합차 공식 두 번'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '분수 지수 식에 곱셈 공식·인수분해 공식 적용하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $(A-B)(A^2+AB+B^2)$ 모양이 그대로 보여 공식을 대입만 하면 되고, ⑵ 도 합차 공식을 두 번 쓰는 표준 절차($8^{1/6}$ 을 제곱하면 $8^{1/3}=2$). 23-e8 과 달리 식의 구조를 알아내는 단계가 필요 없다.
    착안 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '⑴ $(A-B)(A^2+AB+B^2)=A^3-B^3=a-b$ ⑵ $(3-1)(8^{1/3}-1)=2\times1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a-b$ ⑵ $2$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/23-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분수 지수의 분모(3·6)와 수치 밑(3·8)을 바꿀 수 있다. 제약: ⑵ 는 제곱했을 때 정수가 되는 밑이어야 답이 정수로 떨어진다.'
    creative: '(1) 한 인수를 지우고 무엇을 곱해야 $a-b$ 가 되는지 묻기 → I-BW ★3 (2) 문자와 수치를 섞어 Mₐ 상승 ★2 유지 (3) 네제곱 차까지 확장해 인수를 네 개로 늘리면 Mₛ 상승 ★3.'
```

```yaml
- id: GN-ALG-24-e9
  page: 24
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $x>0$, $x^{1/2}+x^{-1/2}=3$ 일 때 ⑴ $x+x^{-1}$ ⑵ $x^2+x^{-2}$ ⑶ $x^{3/2}+x^{-3/2}$ 의 값.
  category: '$A=x^{1/2}$, $B=x^{-1/2}$, $AB=1$ → 제곱·세제곱 공식으로 지수를 차례로 올리기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수 지수 식을 $A+B$ 가 주어지고 $AB=1$ 인 대칭식으로 옮겨 곱셈 공식을 단계적으로 적용'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$a^{1/2}\pm a^{-1/2}$ 꼴 조건에서 대칭식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    핵심은 $x^{1/2}\times x^{-1/2}=1$ 을 곱 항으로 쓰는 것이고, 나머지는 제곱·세제곱 공식을 순서대로 적용해 지수를 $1/2\to1\to2$, $1/2\to3/2$ 로 올리는 절차다. ⑵ 는 ⑴ 의 결과를 다시 제곱해 쓴다.
    통찰 1개(RT d1)·M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '$AB=1$ 을 써서 $(A+B)^2$ → $x+x^{-1}$ → 다시 제곱 → $x^2+x^{-2}$, $(A+B)^3$ → $x^{3/2}+x^{-3/2}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $7$ ⑵ $47$ ⑶ $18$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/24-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 값 3 과 묻는 지수(1·2·3/2)를 바꿀 수 있다. 제약: $x>0$ 이어야 $x^{1/2}$ 가 정의되고, 합 꼴은 주어진 값이 2 이상이어야 실수 $x$ 가 존재한다.'
    creative: '(1) $x^{1/2}-x^{-1/2}$ 를 주면 제곱할 때 $-2$ 가 붙고 부호 판단이 생겨 ★3 (2) 값을 거꾸로 주고 조건을 묻는 25-25 꼴이면 I-BW ★3 (3) 값 대신 $x$ 자체를 구하게 하면 이차방정식이 붙어 Mₛ 상승 ★3.'
```

```yaml
- id: GN-ALG-24-e10
  page: 24
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $a=2^{1/3}+2^{-1/3}$ 일 때 $2a^3-6a+5$ 의 값.
  category: '$a^3$ 전개에서 $3\times1\times a$ 항을 분리 → $a$ 에 관한 관계식 → 문제의 다항식에 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a$ 를 직접 계산하지 않고 $a^3$ 전개식을 $a$ 의 일차식으로 바꿔 문제의 다항식과 맞춤'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '세제곱 전개를 역이용해 무리수 $x$ 의 다항식 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a$ 가 무리수라 직접 대입이 막히고, $(p+q)^3=p^3+q^3+3pq(p+q)$ 에서 $pq=2^{1/3}2^{-1/3}=1$ 임을 이용해 $a^3$ 을 $a$ 의 일차식으로 바꾸는 재구성이 핵심이다. 문제의 계수 $2$·$-6$ 이 그 관계식과 정확히 맞물려 $a$ 항이 소거된다.
    통찰 1개이나 depth 2 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$a^3=2+\frac12+3\times1\times a=\frac52+3a$ → $2a^3=5+6a$ → $2a^3-6a+5=10$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/24-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 2 와 다항식의 계수($2a^3-6a+5$ 의 2·6·5)를 바꿀 수 있다. 제약: $3pq$ 의 값이 $a$ 의 계수와 맞아떨어져야 $a$ 항이 사라지고 답이 유리수가 된다.'
    creative: '(1) $a=2^{1/3}-2^{-1/3}$ 로 바꿔 $-3pq(p-q)$ 부호를 다루게 하기(★3 유지) (2) 계수를 어긋나게 하면 $a$ 항이 남아 답이 무리수가 되므로 설계가 성립하지 않는다 (3) $a$ 를 근으로 갖는 삼차방정식을 구하라고 하면 I-BW 추가 ★4.'
```

```yaml
- id: GN-ALG-24-20
  page: 24
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $x>0$, $x^{1/2}-x^{-1/2}=1$ 일 때 $x^3+x^{-3}$ 의 값.
  category: '제곱해서 $x+x^{-1}$ → 세제곱 공식으로 $x^3+x^{-3}$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수 지수 조건을 $AB=1$ 인 대칭식으로 옮겨 제곱·세제곱 공식으로 지수를 두 배·세 배로 올림'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$a^{1/2}\pm a^{-1/2}$ 꼴 조건에서 대칭식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 꼴이라 제곱할 때 $-2$ 가 붙는 것만 주의하면 24-e9 와 같은 골조다. 두 번의 공식 적용으로 지수를 $1/2\to1\to3$ 으로 올리고, 마지막은 $(x+x^{-1})^3-3(x+x^{-1})$ 한 줄.
    통찰 1개(RT d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$(x^{1/2}-x^{-1/2})^2=x+x^{-1}-2$ → $x+x^{-1}=3$ → $(x+x^{-1})^3-3(x+x^{-1})$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/24-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 값 1 과 묻는 지수 3 을 바꿀 수 있다. 제약: 차 꼴은 어떤 실수 값이어도 $x>0$ 인 해가 있어 자유롭지만, 답이 정수로 떨어지려면 $x+x^{-1}$ 이 정수여야 한다.'
    creative: '(1) $x^3-x^{-3}$ 를 물으면 $x^{1/2}-x^{-1/2}$ 의 부호가 답에 남아 ★3 (2) $x^5+x^{-5}$ 까지 올리면 Mₛ 상승 ★3 (3) 조건과 답을 바꿔 역방향으로 물으면 I-BW ★3.'
```

```yaml
- id: GN-ALG-24-21
  page: 24
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a>0$, $a^{1/2}+a^{-1/2}=4$ 일 때 $\dfrac{a^{3/2}+a^{-3/2}-4}{a^2+a^{-2}-2}$ 의 값.
  category: '분자·분모를 각각 대칭식 공식으로 환산 → 약분'
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수 지수 식을 $AB=1$ 인 대칭식으로 옮겨 분자·분모를 각각 곱셈 공식으로 환산'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$a^{1/2}\pm a^{-1/2}$ 꼴 조건에서 분수식의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 24-e9 와 같지만 $a+a^{-1}$, $a^{3/2}+a^{-3/2}$, $a^2+a^{-2}$ 세 값을 각각 다른 공식으로 만들고 마지막에 분수 약분까지 해야 해 계산 부담이 한 단계 높다(Mₖ 3).
    통찰 1개(RT d1)이나 M_total 8 → ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$a+a^{-1}=14$ → $a^{3/2}+a^{-3/2}=4^3-3\times4=52$, $a^2+a^{-2}=14^2-2=194$ → $48/192$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/24-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 값 4 와 분자·분모의 상수($-4$·$-2$)를 바꿀 수 있다. 제약: 합 꼴이므로 주어진 값이 2 이상이어야 실수 $a>0$ 이 존재하고, 약분 결과가 유리수로 떨어져야 한다.'
    creative: '(1) 상수를 조정해 분자·분모가 각각 인수분해되도록 설계하면 약분 착안이 생겨 ★4 (2) 분모만 묻는 단순형으로 낮추면 ★2 (3) 주어진 값을 문자 $k$ 로 두고 일반식을 구하게 하면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-ALG-24-22
  page: 24
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $x=4^{1/3}+2^{1/3}$ 일 때 $x^3-6x$ 의 값.
  category: '$x^3$ 전개에서 $3\times2\times x$ 항을 분리 → $x$ 에 관한 관계식 → 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 를 직접 계산하지 않고 $x^3$ 전개식을 $x$ 의 일차식으로 바꿔 문제의 다항식과 맞춤'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '세제곱 전개를 역이용해 무리수 $x$ 의 다항식 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    24-e10 과 같은 재구성. 두 항의 곱 $4^{1/3}\times2^{1/3}=8^{1/3}=2$ 가 유리수가 되는 것이 열쇠이고, 문제의 $-6x$ 가 전개식의 $3pq\,x=6x$ 와 정확히 상쇄된다.
    통찰 1개이나 depth 2 → ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$4^{1/3}2^{1/3}=2$ → $x^3=4+2+3\times2\times x=6+6x$ → $x^3-6x=6$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/24-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 세제곱근의 밑(4·2)과 $x$ 의 계수 6 을 바꿀 수 있다. 제약: 두 밑의 곱이 완전세제곱수여야 $pq$ 가 유리수가 되고, $x$ 의 계수는 $3pq$ 와 같아야 한다.'
    creative: '(1) $x=4^{1/3}-2^{1/3}$ 로 바꿔 부호를 다루게 하기(★3 유지) (2) 계수를 어긋내면 $x$ 항이 남아 답이 무리수가 되므로 설계가 성립하지 않는다 (3) $x$ 를 근으로 하는 삼차방정식을 세우라고 하면 I-BW 추가 ★4.'
```

```yaml
- id: GN-ALG-25-e11
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $a>0$, $a^{2x}=5$ 일 때 ⑴ $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$ ⑵ $\dfrac{a^{3x}+a^{-3x}}{a^x+a^{-x}}$ 의 값.
  category: '⑴ 분자·분모에 $a^x$ 곱해 $a^{2x}$ 식으로 / ⑵ 세제곱 합 인수분해 → 약분'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분자를 $(a^x)^3+(a^{-x})^3$ 로 보고 세제곱 합 인수분해로 분모를 약분'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$(a^x\pm a^{-x})/(a^x\mp a^{-x})$ 꼴 식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 분자·분모에 $a^x$ 를 곱해 주어진 $a^{2x}$ 만 남기는 정리, ⑵ 는 인수분해로 약분한 뒤 $a^{2x}+a^{-2x}-1$ 한 줄. $a^x a^{-x}=1$ 이 두 소문항의 공통 열쇠이고 $a^x$ 를 직접 구하지 않는다.
    통찰 1개(RT d1)·M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '⑴ $a^x$ 를 곱해 $(a^{2x}-1)/(a^{2x}+1)$ ⑵ $A^3+B^3=(A+B)(A^2-AB+B^2)$ 로 약분해 $a^{2x}+a^{-2x}-1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}$ ⑵ $\dfrac{21}{5}$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/25-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a^{2x}$ 의 값 5 와 분자·분모의 차수 조합을 바꿀 수 있다. 제약: 세제곱 합·차 인수분해가 되는 차수여야 약분되고, 답이 유리수로 정리돼야 한다.'
    creative: '(1) 분자·분모 차수를 어긋나게 해 약분이 막히면 곱셈 공식 두 번 ★3 (2) 값을 거꾸로 주고 $a^{2x}$ 를 묻기 → I-BW ★3 (3) 조건을 $a^x+a^{-x}=k$ 매개변수로 주면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-25-e12
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $13^x=27$, $117^y=81$ 일 때 $\dfrac{3}{x}-\dfrac{4}{y}$ 의 값.
  category: '두 조건을 밑 3 의 거듭제곱으로 뒤집기 → $117=9\times13$ 으로 연결 → 지수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 조건을 각각 밑 3 의 거듭제곱으로 뒤집고 $117=9\times13$ 분해로 두 식을 하나로 이음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$a^x=b^y$ 꼴 조건에서 지수를 변형해 $1/x$, $1/y$ 식의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x$, $y$ 를 각각 구하려 하면 막히고, 두 조건을 $13=3^{3/x}$·$117=3^{4/y}$ 로 뒤집은 뒤 $117$ 을 $9\times13$ 으로 쪼개 연결해야 지수 비교가 성립한다. 밑 사이의 관계를 찾아 두 식을 잇는 재구성이라 depth 2.
    통찰 depth 2 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$13=3^{3/x}$, $117=3^{4/y}$ → $117=9\times13=3^{2+3/x}$ → $4/y=2+3/x$ → $-2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/25-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 13·117 과 값 27·81 을 바꿀 수 있다. 제약: 두 밑이 $117=3^2\times13$ 처럼 「같은 소수의 거듭제곱 배」 관계여야 연결이 되고, 두 값이 같은 소수의 거듭제곱이어야 지수 비교가 성립한다.'
    creative: '(1) 조건을 셋으로 늘려 연쇄를 길게 하면 Mₛ 상승 ★4 (2) $xy$ 나 $x/y$ 를 물으면 지수 비교만으로는 안 돼 ★4 (3) $117$ 을 숨기고 밑 관계를 학생이 찾게 하면 I-BW 추가 ★4.'
```

```yaml
- id: GN-ALG-25-23
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $x^{-2}=6$ 일 때 $\dfrac{x^3-x^{-3}}{x+x^{-1}}$ 의 값.
  category: '세제곱 차 인수분해 → 남은 $(x-x^{-1})/(x+x^{-1})$ 를 $x^2$ 만의 식으로 → 대입'
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분자를 세제곱 차로 인수분해한 뒤 남은 $(x-x^{-1})/(x+x^{-1})$ 를 $x$ 를 곱해 $x^2$ 만의 식으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$(a^x\pm a^{-x})/(a^x\mp a^{-x})$ 꼴 식의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자·분모가 바로 약분되지 않아 인수분해 뒤 남은 비를 한 번 더 $x^2$ 식으로 옮겨야 한다. 주어진 것이 $x^{-2}$ 라 $x^2=1/6$ 로 뒤집는 역수 처리가 겹쳐 계산 부담이 크다(Mₖ 3). $x$ 의 부호는 비에서 상쇄돼 답에 영향이 없다.
    통찰 1개이나 M_total 8 → ★2 에서 +1 → ★3. [분류 이슈] 25-24 와 골조가 같은데 계산 부담 차이만으로 ★3/★2 로 갈린다.
  tier: star_3
  mechanism_primary: '$x^3-x^{-3}=(x-x^{-1})(x^2+1+x^{-2})$ → $(x^2-1)/(x^2+1)\times(x^2+1+x^{-2})$ 로 환산 → $x^2=1/6$ 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{215}{42}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/25-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^{-2}$ 의 값 6 과 분자·분모의 차수를 바꿀 수 있다. 제약: $x\times x^{-1}=1$ 구조를 유지해야 하고, 답이 유리수로 정리되려면 주어진 값이 유리수여야 한다.'
    creative: '(1) $x^{-2}$ 대신 $x^2$ 를 주면 역수 처리가 빠져 ★2 (2) $x$ 의 부호를 특정해 $x-x^{-1}$ 만 묻게 하면 T-부호가 살아나 ★3 유지 (3) 분자·분모를 모두 세제곱 꼴로 두면 한 번에 약분돼 ★2.'
```

```yaml
- id: GN-ALG-25-24
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $9^x=2$ 일 때 $\dfrac{27^x-27^{-x}}{3^x+3^{-x}}$ 의 값.
  category: '밑을 3으로 통일 → 세제곱 차 인수분해 → $3^{2x}=2$ 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$27^{x}$ 을 $(3^x)^3$ 으로 보고 세제곱 차 인수분해로 분모와 묶음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$(a^x\pm a^{-x})/(a^x\mp a^{-x})$ 꼴 식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9와 27을 3의 거듭제곱으로 통일하는 첫 단계만 더 붙을 뿐 25-23 과 같은 골조다. $3^{2x}=2$ 가 깔끔해 분자·분모 환산 후 수치가 바로 떨어진다(Mₖ 2).
    통찰 1개(RT d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$27^{\pm x}=(3^x)^{\pm3}$ → $A^3-B^3=(A-B)(A^2+AB+B^2)$ → $(3^{2x}-1)/(3^{2x}+1)\times(3^{2x}+1+3^{-2x})$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{6}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/25-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$9^x$ 의 값 2 와 분자·분모의 밑(27·3)을 바꿀 수 있다. 제약: 분자의 밑이 분모 밑의 세제곱이어야 인수분해가 들어맞는다.'
    creative: '(1) 분자를 $27^x+27^{-x}$ 로 바꿔 세제곱 합 공식으로(★2 유지) (2) 분모를 $9^x+9^{-x}$ 로 두면 차수가 어긋나 약분이 막혀 ★3 (3) 값을 거꾸로 주고 $9^x$ 를 묻기 → I-BW ★3.'
```

```yaml
- id: GN-ALG-25-25
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a>0$, $\dfrac{a^x+a^{-x}}{a^x-a^{-x}}=2$ 일 때 $a^x$ 의 값.
  category: '분자·분모에 $a^x$ 곱하기 → $a^{2x}$ 를 미지수로 → 일차방정식 → 양의 값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '식의 값을 계산하는 방향이 아니라 $a^{2x}$ 를 미지수로 세워 주어진 값에서 거꾸로 결정'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분수식의 값이 주어질 때 $a^x$ 를 역으로 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    25-e11 의 골조를 뒤집은 역방향 문항이다. 분자·분모에 $a^x$ 를 곱해 $t=a^{2x}$ 한 문자로 줄인 뒤 $(t+1)/(t-1)=2$ 를 풀고, 마지막에 $a^x>0$ 이라는 조건으로 양의 값만 택한다.
    역추적 착안 depth 2 → ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$t=a^{2x}$ 로 놓아 $(t+1)/(t-1)=2$ → $t=3$ → $a^x>0$ 이므로 $\sqrt{3}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/25-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 값 2 를 바꿀 수 있다. 제약: 값이 1 이면 방정식이 성립하지 않고, $t=a^{2x}>0$ 이어야 하므로 값이 1 보다 커야 한다.'
    creative: '(1) $a^x-a^{-x}$ 의 값까지 이어서 묻게 하면 단계가 늘어 ★3 유지 (2) $a$ 와 $x$ 를 따로 묻게 하면 조건이 부족해 설계가 성립하지 않는다 (3) 분자와 분모를 바꿔 값이 $1/2$ 이 되게 하면 같은 골조 ★3.'
```

```yaml
- id: GN-ALG-25-26
  page: 25
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $xyz\ne0$, $4^x=9^y=6^z$ 일 때 $\dfrac{1}{x}+\dfrac{1}{y}-\dfrac{2}{z}$ 의 값.
  category: '공통값 $k$ 로 놓기 → 각 밑을 $k$ 의 거듭제곱으로 뒤집기 → $4\times9=6^2$ 로 지수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 조건을 공통값 $k$ 로 묶고 밑을 $k$ 의 유리수 거듭제곱으로 뒤집어 $4\times9=6^2$ 라는 밑 사이 관계를 지수 관계로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$a^x=b^y=c^z$ 조건에서 $1/x$, $1/y$, $1/z$ 식의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그 없이 푸는 표준 착안으로, 공통값 $k$ 를 하나 세우고 $4=k^{1/x}$ 처럼 밑을 뒤집은 뒤 밑끼리의 곱 관계 $4\times9=36=6^2$ 를 찾아야 한다. 이 관계를 못 찾으면 진행이 막히고, $xyz\ne0$ 조건이 역수를 쓸 수 있게 해 준다.
    조건을 잇는 재구성 depth 2 → ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$k=4^x=9^y=6^z$ → $4=k^{1/x}$, $9=k^{1/y}$, $6=k^{1/z}$ → $4\times9=6^2$ 에서 $1/x+1/y=2/z$ → $0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/25-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 밑(4·9·6)과 물음의 계수(1·1·$-2$)를 바꿀 수 있다. 제약: 세 밑 사이에 $ab=c^2$ 같은 곱 관계가 성립해야 하고, 계수가 그 관계의 지수와 맞아야 답이 0 으로 떨어진다.'
    creative: '(1) 밑을 $2^p3^q$ 꼴 일반형으로 두면 Mₐ 상승 ★4 (2) 계수를 어긋내 답이 0 이 아닌 값이 되게 하기(★3 유지) (3) 밑을 넷으로 늘려 두 관계를 동시에 쓰게 하면 I-CON ★4.'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 1 · ★2 15 · ★3 7 · ★4 0 · ★5 0
- 통찰형 16 · 절차형 7 · premium 0
- 통찰 유형: I-EQV 8 · I-RT 7 · I-BW 1 (depth 2 는 6문 — 24-e10 · 24-22 · 25-e12 · 25-25 · 25-26, 나머지는 d1)
- type_hint 상위: 「주어진 거듭제곱 값을 이용해 다른 수를 문자로 나타내기」 3 · 「$(a^x\pm a^{-x})/(a^x\mp a^{-x})$ 꼴 식의 값」 3 · 「유리수·실수 지수의 지수법칙 계산」 2 · 「중첩 거듭제곱근을 유리수 지수로 고쳐 지수 비교」 2 · 「분수 지수 식에 곱셈 공식·인수분해 공식 적용」 2 · 「$a^{1/2}\pm a^{-1/2}$ 꼴 조건에서 대칭식의 값」 2 · 「세제곱 전개를 역이용해 무리수 $x$ 의 다항식 값」 2
- 벤더 태그: 필수 예제 8문(21-e5 · 22-e6 · 23-e7 · 23-e8 · 24-e9 · 24-e10 · 25-e11 · 25-e12) · 확인체크 15문
- 그림: 0문(이 범위는 그림 문항 없음)
- 대상층: 하위권 1 · 중하위권 6 · 중위권 16

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-21-13 | 「필수·발전 예제」 구역이지만 밑 통일 한 번으로 끝나는 1~2단계 확인 문제 → −1 한 ★1. 구역 신호(★2)와 1단 차이 | ★1 / ★2 |
| GN-ALG-23-e7 | 「$a=2^6$ 을 $2=a^{1/6}$ 로 뒤집기」를 통찰(I-EQV d1)로 셀지 표준 절차로 볼지 경계. 23-17 · 23-18 도 같은 처리로 통일했다 | ★2 / ★3 |
| GN-ALG-25-23 | 25-24 와 골조가 같은데 역수·분수 처리로 인한 Mₖ 차이(3 vs 2)만으로 ★3/★2 로 갈림 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「거듭제곱근·중첩 근호를 유리수 지수로 고쳐 지수 비교」(22-e6 · 22-14 · 22-15) ② 「주어진 거듭제곱 값으로 다른 수를 문자로 나타내기」(23-e7 · 23-17 · 23-18) ③ 「$a^{1/2}\pm a^{-1/2}$ 대칭식의 값」(24-e9 · 24-20 · 24-21) ④ 「$(a^x\pm a^{-x})/(a^x\mp a^{-x})$ 분수식의 값」(25-e11 · 25-23 · 25-24) ⑤ 「세제곱 전개 역이용」(24-e10 · 24-22) ⑥ 「$a^x=b^y=c^z$ 공통값 치환」(25-e12 · 25-26). ①②④는 각 3문으로 이 단원의 기둥 유형이고, ⑤⑥은 2문씩이지만 착안(depth 2)이 뚜렷해 base ★3 후보다.
- **통합해도 될 유형**: 21-e5 · 21-12 의 「지수법칙 계산」과 21-13 의 「같은 밑 다른 거듭제곱 값」은 base ★ 가 같은 계산 유형이므로 한 유형(★1~2)으로 묶고 소문항 난이도로 구분하면 된다. 23-e8 과 23-19 도 「분수 지수 곱셈 공식·인수분해」 한 유형이며, 구조를 알아내야 하는지(23-e8) 공식이 그대로 보이는지(23-19)는 base ★ 가 아니라 통찰 라벨로 구분하는 편이 맞다.
- **경계 결정 필요**: 「주어진 등식을 뒤집어 밑을 교체」를 통찰 카드로 셀지 여부(23-e7 계열 3문에 일괄 영향) · 「$AB=1$ 대칭식 전환」을 I-RT 로 둘지 별도 코드로 둘지(24·25쪽 7문에 일괄 영향). 두 결정이 이 단원의 통찰형 비율(현재 16/23)을 크게 좌우한다.
