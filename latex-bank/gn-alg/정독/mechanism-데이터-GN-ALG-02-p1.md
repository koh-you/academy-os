---
name: mechanism-데이터-GN-ALG-02-p1
description: 개념원리 대수 02 지수의 확장(1/3 · 개념원리 익히기 20-9~20-11) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 02 지수의 확장
  unit_code: ALG-02
  part: "1/3"
  extract_range: "20~20쪽 · 20-9~20-11"
  total_problems: 3
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 02 지수의 확장 (1/3) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 02단원 「지수의 확장」의 첫 조각(20쪽 · 20-9~20-11 · 3문항)을 다룬다. 세 문항 모두 구역이 **개념원리 익히기**(통번호 · 개념 직후 확인 드릴)이며 level·tag 가 따로 붙어 있지 않다. 개념원리 고등의 난이도 신호는 구역이 곧 층이어서 이 구역은 ★1 출발이고, 여기에 M_total·통찰로 ±1 을 조정한다(필수·발전 예제 ★2~3 · 연습문제 STEP 1/2 ★2/★3 · 실력 UP ★4 는 이 조각에 없다). 내용상으로는 지수를 정수(0·음의 정수) → 유리수 → 실수로 확장하면서 **정의 대입**과 **밑 통일 후 지수법칙**만을 반복 확인하는 자리라 세 문항 모두 통찰 라벨이 붙지 않는 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-20-9
  page: 20
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 지수가 0 또는 음의 정수인 거듭제곱의 값 구하기($(2\sqrt{2})^{0}$ · $3^{-2}$ · $(1/2)^{-4}$ · 둘을 더한 $8^{0}+(1/4)^{-2}$).
  category: "0·음의 정수 지수의 정의 → 값 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0 또는 음의 정수인 지수의 정의(a^0=1 · a^(-n)=1/a^n)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 두 줄(a^0=1 · a^{-n}=1/a^n)을 그대로 대입하면 끝난다. ⑶⑷ 에서 밑이 분수일 때 음의 지수가 역수의 양의 지수가 된다는 표기만 확인하면 되고 그 외 변형 단계가 없다.
    통찰 0 · M_total 4(≤5) 로 −1 후보지만 개념원리 익히기 출발점 ★1 이 하한이라 ★1.
  tier: star_1
  mechanism_primary: "a^0=1 · a^(-n)=1/a^n 정의 대입 → (분수 밑은 역수로) → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $\dfrac{1}{9}$ ⑶ $16$ ⑷ $17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/20-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2√2 → 3√3 · 5^{1/2}), 음의 지수(−2 → −3), 분수 밑의 분모(1/2 → 1/3 · 2/3)를 자유롭게 바꿀 수 있다. 제약: 밑은 0 이 아니어야 하고(a^0 은 a≠0 에서만 정의), 답이 정수나 간단한 기약분수로 떨어지게 지수를 고른다. ⑷ 처럼 두 항을 더하는 꼴은 각 항이 정수가 되도록 맞춘다.'
    creative: '(1) 값을 주고 지수를 묻기(2^x=1/8 의 x) — 역방향이지만 여전히 정의 확인 ★1 (2) 「$(-2)^{-2}$ 와 $-2^{-2}$ 의 차이」처럼 부호·괄호 함정을 넣으면 M_t 상승 ★2 (3) $a^{-m}\times a^{m}=1$ 을 이용해 문자 밑으로 일반화하면 M_a 2 로 올라 ★2.'
```

```yaml
- id: GN-ALG-20-10
  page: 20
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑽ 지수가 유리수·무리수인 거듭제곱의 곱·나눗셈·거듭제곱 계산. 밑이 서로 다른 것($25$ 와 $5$ · $32$ 와 $4$ · $1/100$)과 지수가 무리수인 것($\sqrt{3}$ · $\pi$)이 섞여 있다.
  category: "밑 통일 → 지수법칙(곱·나눗셈·거듭제곱)으로 지수 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수법칙을 이용한 유리수·실수 지수의 계산(밑 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    골조는 열 문항 모두 같다 — 밑이 다르면 소인수 하나로 통일하고($25=5^2$ · $32=2^5$ · $4=2^2$ · $1/100=10^{-2}$) 지수법칙 세 개로 지수만 더하고 곱한다. ⑺ 는 $\sqrt{12}=2\sqrt{3}$ 으로 정리하면 지수가 유리수가 되고, ⑼⑽ 은 무리수 부분이 상쇄되도록 설계돼 있다.
    새 착안이 필요한 단계가 없어 통찰 0. 소문항 10개와 밑 통일·분수 지수 처리로 M_total 6 이라 −1 조정은 하지 않고 개념원리 익히기 출발점 ★1 유지.
    [분류 이슈] 밑 통일이 필요한 소문항(⑷⑸⑺)만 떼어 보면 체감은 ★2 에 가깝다. 구역 신호대로 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "밑을 한 소수로 통일 → a^m·a^n=a^(m+n) · a^m÷a^n=a^(m-n) · (a^m)^n=a^(mn) 으로 지수만 계산 → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $5$ ⑶ $\dfrac{1}{3}$ ⑷ $4$ ⑸ $10000$ ⑹ $256$ ⑺ $4096$ ⑻ $5^{2\sqrt{5}}$ ⑼ $81$ ⑽ $45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/20-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5·10)과 유리수 지수의 분모·분자를 바꿀 수 있고, 밑을 숨기는 수($25$·$32$·$1/100$ → $27$·$81$·$1/1000$)도 교체 가능하다. 제약: (1) 통일 후 최종 지수가 정수여야 답이 정수로 떨어진다 — 분모가 서로 다르면 통분 결과를 먼저 확인 (2) 무리수 지수는 ⑼⑽ 처럼 합이 유리수가 되도록 짝을 맞춘다($\sqrt{2}(\sqrt{2}+1)$ 과 $2-\sqrt{2}$) (3) ⑺ 은 $\sqrt{3}\times\sqrt{12}$ 처럼 곱이 유리수인 무리수 쌍이어야 한다.'
    creative: '(1) 답을 주고 빠진 지수를 묻기($2^{a}\times 2^{3/2}=8$ 의 $a$) — 역방향이나 골조·★1 유지 (2) 밑을 문자 $a>0$ 으로 바꾸면 M_a 2 로 올라 ★2(20-11 유형에 수렴) (3) 여러 밑이 섞인 식을 한 번에 정리하게 하면(⑽ 확장) 상쇄 구조를 읽어야 해서 I-EQV d1 이 붙고 ★2 (4) 밑을 통일할 수 없게 만들면($6^{1/2}\times 2^{1/2}$) 소인수분해 착안이 필요해 ★2.'
```

```yaml
- id: GN-ALG-20-11
  page: 20
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ $a>0$ 일 때 거듭제곱근의 곱·나눗셈($\sqrt{a}\times\sqrt[3]{a}$ · $\sqrt[4]{a^{5}}\div\sqrt[6]{a^{9}}$)을 $a^{k}$ 꼴로 나타내기.
  category: "거듭제곱근 → 유리수 지수 전환 → 지수 덧·뺄셈"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 유리수 지수로 바꿔 a^k 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n제곱근을 유리수 지수로 옮기는 정의($\sqrt[n]{a^{m}}=a^{m/n}$)를 쓰고 지수를 통분해 더하거나 빼면 끝난다. 발문이 이미 「$a^{k}$ 의 꼴로」라고 목적지를 지정해 표현 전환을 학생이 착안할 여지가 없으므로 I-RT 는 붙이지 않는다(표준 공식 대입).
    밑이 문자라 M_a 2 이지만 단계·계산은 최소. 통찰 0 · M_total 5 로 −1 후보이나 출발점 ★1 이 하한이라 ★1. 문자 밑이라 대상층은 중하위권.
  tier: star_1
  mechanism_primary: "n제곱근 → 유리수 지수 a^(m/n) 로 전환 → 지수 통분 후 덧·뺄셈 → a^k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a^{\frac{5}{6}}$ ⑵ $a^{-\frac{1}{4}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/20-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호의 차수 $n$ 과 안쪽 지수 $m$ 을 바꿀 수 있다($\sqrt[3]{a^{2}}\times\sqrt[4]{a}$ 등). 제약: (1) $a>0$ 조건을 반드시 유지해야 짝수 차수 근호가 정의되고 지수법칙을 쓸 수 있다 (2) 최종 지수는 기약분수로 떨어지게 분모를 고른다 (3) ⑵ 처럼 답을 음의 지수로 만들려면 나누는 쪽 지수를 더 크게 둔다.'
    creative: '(1) 세 개 이상의 거듭제곱근을 중첩시키면($\sqrt{a\sqrt{a}}$ · $\sqrt[3]{a\sqrt[4]{a}}$) 안에서부터 정리하는 단계가 늘어 M_s 2 → ★2 (2) 답 $a^{k}$ 의 $k$ 를 주고 근호 차수를 묻기 — 역방향 ★2 (3) $a>0$ 조건을 빼고 $a$ 의 부호를 따지게 하면 짝수·홀수 차수 구분이 생겨 I-MI d1 · T-범위 → ★3 (4) $a^{k}$ 가 정수가 되는 $a$ 를 묻는 정수해 문제로 바꾸면 I-BW d1 → ★3.'
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 3 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 3 · premium 0
- type_hint: 「0·음의 정수 지수의 정의」 1 · 「지수법칙을 이용한 유리수·실수 지수의 계산(밑 통일)」 1 · 「거듭제곱근을 유리수 지수로 바꿔 a^k 꼴로」 1
- M_total: 4 · 6 · 5 (평균 5.0) · 대상층: 하위권 2 · 중하위권 1
- 그림: 0문 · 구역: 개념원리 익히기 3문(벤더 level·tag 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-20-10 | 구역(개념원리 익히기) 신호는 ★1 출발이고 통찰 0 이라 조정 없음 → ★1. 다만 밑을 숨긴 소문항(⑷ $32^{1/2}\div4^{1/4}$ · ⑸ $\{(1/100)^{3/4}\}^{-8/3}$ · ⑺ $(4^{\sqrt{3}})^{\sqrt{12}}$)은 소인수 통일 한 단계가 더 있어 체감 ★2. 소문항 10개 묶음을 한 블록으로 판정하는 관례 때문에 평균이 눌린 사례 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 조각에서 나온 type_hint 셋은 모두 「지수의 확장」 도입부의 **정의 확인 드릴**이며 서로 다른 단계(정수 지수 → 유리수·실수 지수 → 거듭제곱근 전환)를 맡고 있다. 카탈로그에서 **따로 세워야 할 유형**은 「0·음의 정수 지수의 정의」와 「거듭제곱근 ↔ 유리수 지수 전환」 둘이다(전자는 정의 암기, 후자는 표현 전환 골조라 변형 경로가 완전히 다르다).
- **통합해도 될 유형**: 「지수법칙 계산(밑 통일)」은 뒤 조각(02-p2·p3)의 지수법칙 계산 유형과 같은 골조일 가능성이 높으므로 하나로 묶고, 밑 통일 필요 여부를 난이도 변수(★1 ↔ ★2)로 두는 편이 낫다.
- 소문항 10개짜리 묶음 문항(20-10)은 카탈로그 설계 시 **묶음 단위 ★**과 **소문항 단위 ★**을 구분하는 규칙이 필요하다. 현재는 묶음 전체의 골조로 판정해 ★가 낮게 나온다.
