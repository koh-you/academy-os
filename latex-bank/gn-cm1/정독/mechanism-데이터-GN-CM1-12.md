---
name: mechanism-데이터-GN-CM1-12
description: 개념원리 공통수학1 12 i의 거듭제곱·음수의 제곱근(1/1 · 96~101쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 12 i의 거듭제곱·음수의 제곱근
  unit_code: GN-CM1-12
  part: "1/1"
  extract_range: "96~101쪽 · 96-185~101-208"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위는 그림 문항 0개)
---

# 개념원리 공통수학1 · 12 i의 거듭제곱·음수의 제곱근 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 96~101쪽(전사본 id `96-185`~`101-208`, 28문항 전수)의 정독 데이터다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 13문(필수 예제 4 + 확인체크 9) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 2문이다. 이 범위에는 그림 문항이 없다.

벤더 난이도 신호는 구역과 태그다. 「개념원리 익히기」(통번호 · 개념 확인) → ★1 출발, 「필수 예제」(tag 「필수」) → ★2 출발, 필수 예제 뒤에 붙는 「확인체크」는 같은 예제의 연습이므로 예제와 같은 ★2 를 출발점으로 잡았다(가이드의 「개념원리 익히기 안 확인체크 → ★1」과 구분되는 위치라서 이 파일의 관례를 여기 명시한다). 「연습문제 STEP 1」 → ★2, 「STEP 2」 → ★3, 「실력 UP」 → ★4 출발이며 「교육청 기출」 태그는 통찰 유무로 +0~1 을 본다.

이 단원은 (ㄱ) $i^n$ 의 4주기 환원, (ㄴ) $(1\pm i)^2=\pm 2i$ 를 이용한 복소수 거듭제곱, (ㄷ) $\sqrt{a}\sqrt{b}=-\sqrt{ab}$ · $\frac{\sqrt{a}}{\sqrt{b}}=-\sqrt{\frac{a}{b}}$ 의 예외 조건 세 도구로 거의 전부가 설명된다. 4주기와 연속 네 항의 합이 0 이라는 성질은 이 단원이 직접 가르치는 내용이므로 그 자체를 통찰로 세지 않았고, 조건식에서 부호·범위를 역으로 확정하는 단계(I-EQV)와 조건을 만족하는 최소 $n$·개수를 역추적하는 단계(I-BW·I-PD·I-VF)만 통찰로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-96-185
  page: 96
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $i$와 $1\pm i$의 거듭제곱 계산. $i^6$ · $(-i)^{11}$ · $i^{100}+(-i)^{200}$ · $\frac{1}{i}+\frac{1}{i^2}+\frac{1}{i^3}+\frac{1}{i^4}$ · $(1-i)^4$ · $\left(\frac{1+i}{\sqrt{2}}\right)^6$.
  category: '$i$의 거듭제곱 4주기 환원 → 지수의 나머지로 값 결정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$i$의 거듭제곱 기본 계산(지수를 4로 나눈 나머지)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 소문항 모두 4주기 환원 한 도구로 끝난다. ⑸⑹만 $(1-i)^2=-2i$ · $\left(\frac{1+i}{\sqrt{2}}\right)^2=i$ 로 한 번 묶는 단계가 더 붙는다.
    $(-i)^{11}=-i^{11}$ 의 부호 처리(T-부호) 하나가 함정. 통찰 없음·M_total 6 이지만 개념 확인 구역이라 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '지수를 4로 나눈 나머지 → $i^n$ 값 → $(1\pm i)^2=\pm 2i$로 묶어 재환원'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-1$ ⑵ $i$ ⑶ $2$ ⑷ $0$ ⑸ $-4$ ⑹ $-i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/96-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수를 자유롭게(6→14, 11→23, 100→102, 4→8, 6→10). 제약: 나머지 0~3 이 고르게 나오도록 섞고, $(1\pm i)$ 꼴은 지수가 짝수여야 제곱 묶기가 깔끔하다. $\frac{1+i}{\sqrt{2}}$ 는 분모 $\sqrt{2}$ 를 빼면 크기가 붙어 답이 커진다.'
    creative: '(1) 밑을 $-i$·$\frac{1}{i}$ 로 바꿔 부호 함정만 키우기(★1 유지) (2) $i^n=1$ 이 되는 자연수 $n$ 을 묻는 역방향으로 바꾸면 I-BW d1 → ★2 (3) $(1+i)^n$ 이 실수가 되는 최소 $n$ 으로 바꾸면 ★3.'
```

```yaml
- id: GN-CM1-96-186
  page: 96
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 음수 $-5$ · $-10$ · $-20$ · $-\frac{1}{36}$ 의 제곱근 구하기.
  category: '음수의 제곱근 정의 → $\pm\sqrt{a}\,i$ 꼴로 쓰기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근 구하기($-a$의 제곱근은 $\pm\sqrt{a}\,i$)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 한 줄 적용. $\sqrt{-20}=2\sqrt{5}\,i$ 처럼 근호 안을 정리하는 산술만 더 붙는다.
    「제곱근」은 $\pm$ 둘 다라는 것(T-표기)이 유일한 함정. 통찰 0·M_total 4 로 −1 후보지만 하한이라 ★1.
  tier: star_1
  mechanism_primary: '$-a<0$ → 제곱근은 $\pm\sqrt{a}\,i$ → 근호 안 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\pm\sqrt{5}\,i$ ⑵ $\pm\sqrt{10}\,i$ ⑶ $\pm 2\sqrt{5}\,i$ ⑷ $\pm\dfrac{1}{6}i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/96-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '음수를 바꾸되 ⑶처럼 제곱인수가 있는 수($-12$, $-45$, $-72$)와 분수($-\frac{4}{25}$)를 한 개씩 섞는다. 제약: 근호 안이 유리수 제곱으로 딱 떨어지거나 간단한 무리수로 정리돼야 한다.'
    creative: '(1) $\sqrt{-a}$ 의 값과 「$-a$ 의 제곱근」을 함께 물어 표기 혼동을 노리기(★2 · T-표기) (2) 제곱근이 $\pm 3i$ 인 수를 되묻는 역방향(I-BW d1 · ★2) (3) 두 제곱근의 곱·합을 묻는 형태로 확장(★2).'
```

```yaml
- id: GN-CM1-96-187
  page: 96
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 근호 안이 음수인 곱·나눗셈 계산. $\sqrt{-5}\sqrt{-9}$ · $\sqrt{3}\sqrt{-6}$ · $\frac{\sqrt{12}}{\sqrt{-4}}$ · $\frac{\sqrt{-4}}{\sqrt{-2}}$.
  category: '$\sqrt{-a}=\sqrt{a}\,i$ 로 바꾸기 → $i^2=-1$ 처리 → 부호 결정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근의 곱·나눗셈(예외 조건 $\sqrt{a}\sqrt{b}=-\sqrt{ab}$)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 경우(음·음, 양·음, 양/음, 음/음)를 모두 $i$ 로 바꿔 계산하면 기계적으로 끝난다. 규칙을 외워 쓰면 ⑴은 $-$, ⑷는 $+$ 로 갈리는 지점이 함정(T-부호 · T-표기 2종).
    통찰 없음이지만 부호 분기가 둘이라 M_total 6. 개념 확인 구역 → ★1 유지, 대상층만 중하위권으로 올림.
  tier: star_1
  mechanism_primary: '각 근호를 $\sqrt{a}\,i$ 꼴로 분해 → $i$ 끼리 곱·약분 → $i^2=-1$ 로 부호 확정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-3\sqrt{5}$ ⑵ $3\sqrt{2}\,i$ ⑶ $-\sqrt{3}\,i$ ⑷ $\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/96-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 수를 바꾸되 네 부호 조합(음·음 / 양·음 / 양÷음 / 음÷음)은 그대로 유지한다. 제약: 나눗셈은 몫의 근호가 정수·간단한 무리수가 되게 약수 관계로 고른다($\frac{\sqrt{-20}}{\sqrt{-5}}$ 꼴).'
    creative: '(1) 세 근호의 곱으로 늘려 $i^3$ 이 나오게 하기(★2) (2) 「$\sqrt{a}\sqrt{b}=-\sqrt{ab}$ 가 성립하는 것을 모두 고르시오」 보기형으로 바꾸기(★2 · 100-200 형태) (3) 계산 결과가 실수가 되도록 빈칸의 부호를 정하는 역방향(I-BW d1 · ★3).'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-97-e9
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $i$의 거듭제곱의 합. $i+i^2+\cdots+i^{201}$ 과 $1+\frac{1}{i}+\frac{1}{i^2}+\cdots+\frac{1}{i^{50}}$.
  category: '연속한 네 항의 합 $=0$ → 4개씩 묶기 → 나머지 항만 계산'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$i$의 거듭제곱의 합(4개씩 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항 수를 4로 나눈 나머지만 남기는 표준 절차. ⑵는 $\frac{1}{i}=-i$ 로 바꿔 밑을 $-i$ 로 통일한 뒤 같은 묶기를 쓰고, 상수항 1 을 빼먹지 않는 것(T-경계)이 함정.
    4주기와 「연속 네 항의 합 $=0$」은 이 단원이 직접 가르치는 내용이라 통찰로 세지 않았다. 필수 예제 → ★2 유지.
  tier: star_2
  mechanism_primary: '항 수를 4로 나눈 나머지 확인 → 묶음은 0 → 남는 1~3항만 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $i$ ⑵ $-i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/97-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '마지막 지수를 바꿔 나머지가 0~3 중 다른 값이 되게 한다(201→198, 50→53). 제약: 시작 항이 $i^0$ 인지 $i^1$ 인지에 따라 묶음 경계가 한 칸 밀리므로 항 수를 직접 세어 나머지를 정한다.'
    creative: '(1) 합이 0 이 되도록 하는 마지막 지수를 묻는 역방향(I-BW d1 · ★3) (2) $i+i^2+\cdots+i^n$ 의 값이 가질 수 있는 모든 값을 묻기(I-PD d1 · ★3) (3) 분모형과 분자형을 한 식에 섞어 밑 통일 단계를 강제(★3).'
```

```yaml
- id: GN-CM1-97-188
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ $i$의 거듭제곱의 합. $1+i+i^2+\cdots+i^{144}$ 와 $\frac{1}{i}+\frac{1}{i^2}+\cdots+\frac{1}{i^{2023}}$.
  category: '연속한 네 항의 합 $=0$ → 4개씩 묶기 → 나머지 항만 계산'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$i$의 거듭제곱의 합(4개씩 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e9 와 같은 골조. ⑴은 $i^0=1$ 부터라 항이 145개(나머지 1), ⑵는 $\frac{1}{i}$ 부터라 밑이 $-i$ 이고 항이 2023개(나머지 3)다.
    시작 항과 항 수 세기(T-경계)가 유일한 변별점. 통찰 없음·확인체크 → ★2.
  tier: star_2
  mechanism_primary: '시작 항 확인 → 항 수를 4로 나눈 나머지 → 남는 항만 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/97-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 지수를 144→146, 2023→2026 처럼 바꾼다. 제약: 답이 $1$·$-1$·$i$·$-i$·$0$ 중 하나로 떨어지므로 나머지를 먼저 정하고 지수를 역산하면 출제가 빠르다.'
    creative: '(1) 합이 $0$ 이 되는 $n$ 의 조건을 묻기(I-PD d1 · ★3) (2) $1+i+\cdots+i^n$ 과 $\frac{1}{i}+\cdots+\frac{1}{i^n}$ 의 합을 한 번에 묻기(★3) (3) 합을 $a+bi$ 로 놓고 $a+b$ 를 묻는 형태(★2 유지).'
```

```yaml
- id: GN-CM1-97-189
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    계수가 붙은 $i$의 거듭제곱의 합 $i+2i^2+3i^3+\cdots+10i^{10}$ 계산.
  category: '$i^n$ 값을 4주기로 대입 → 실수부·허수부를 따로 합산'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '계수가 붙은 $i$의 거듭제곱의 합(네 항씩 묶으면 묶음 합이 상수)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수가 붙어 「합 $=0$」 묶기가 그대로는 안 먹고, 네 항씩 묶으면 각 묶음이 $(2-2i)$ 꼴 상수가 되거나 $i^n$ 값을 대입해 실수부·허수부를 따로 더하면 된다.
    10항이라 직접 대입이 더 빠르고 분기도 없다. 계산량만 늘어난 절차형 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$i^n$ 을 4주기 값으로 치환 → 실수부 $(-2+4-6+8-10)$ · 허수부 따로 합산'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6+5i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/97-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 항을 $10i^{10}$→$12i^{12}$·$20i^{20}$ 으로. 제약: 항 수가 4의 배수면 묶음 상수 $\times$ 묶음 수 로 떨어지고 4의 배수가 아니면 꼬리 항을 따로 더해야 하므로 난이도가 한 단 오른다.'
    creative: '(1) 계수를 등차 대신 $1,2,4,8$ 등비로 바꾸기(★3) (2) 부호를 번갈아 붙여 $i-2i^2+3i^3-\cdots$ 로(100-197 형태 · ★2) (3) 결과가 실수가 되는 마지막 항의 지수를 묻는 역방향(I-BW d1 · ★3).'
```

```yaml
- id: GN-CM1-97-190
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\frac{1}{i}+\frac{2}{i^2}+\cdots+\frac{50}{i^{50}}=a+bi$ 일 때 실수 $a$, $b$에 대한 $b-a$의 값.
  category: '$\frac{1}{i}=-i$ 로 밑 통일 → 4주기 대입 → 실수부·허수부 분리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '계수가 붙은 $\frac{1}{i^n}$ 꼴의 합과 실수부·허수부 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    189 와 같은 골조에 밑이 $\frac{1}{i}=-i$ 로 바뀐 것. 50항이라 네 항씩 묶어 묶음 합(상수)을 구한 뒤 묶음 수를 곱하고 꼬리 2항을 더하는 편이 빠르다.
    항 수 50이 4의 배수가 아니라는 처리(T-경계)가 함정. 통찰 없음·확인체크 → ★2.
  tier: star_2
  mechanism_primary: '$\frac{1}{i^n}=(-i)^n$ 으로 통일 → 네 항씩 묶어 상수합 $\times$ 12묶음 → 꼬리 2항 → $a$, $b$ 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/97-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 항 50→48(딱 떨어짐)·52. 묻는 값을 $b-a$→$a+b$·$ab$ 로. 제약: 꼬리 항 수(0~3)가 난이도를 정하므로 의도한 만큼만 남긴다.'
    creative: '(1) $a$, $b$ 를 각각 묻지 않고 $a+bi$ 의 켤레를 묻기(★2) (2) 분모형과 분자형 합의 차를 묻기(★3) (3) $b-a$ 의 값이 주어지고 끝 항의 지수를 찾는 역방향(I-BW d2 · ★3).'
```

```yaml
- id: GN-CM1-98-e10
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 복소수의 거듭제곱. $(1+i)^{10}$ · $\left(\frac{1-i}{\sqrt{2}}\right)^{50}$ · $\left(\frac{1+i}{1-i}\right)^{502}+\left(\frac{1-i}{1+i}\right)^{502}$.
  category: '먼저 제곱해 $\pm 2i$·$\pm i$ 로 만들기 → 지수법칙으로 $i$의 거듭제곱 환원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '복소수의 거듭제곱($(1\pm i)^2=\pm 2i$ 로 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문항 모두 「먼저 제곱하라」 한 도구. $(1+i)^2=2i$, $\left(\frac{1-i}{\sqrt{2}}\right)^2=-i$, $\frac{1+i}{1-i}=i$ 로 바꾼 뒤 지수를 4로 나눈다.
    ⑶은 두 항이 서로 역수(켤레)라 $i^{502}+(-i)^{502}$ 로 정리된다. 이 단원이 가르치는 표준 절차 → 통찰 없음, 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '밑을 제곱해 $\pm 2i$·$\pm i$ 로 → 지수를 2로 나눠 $i^k$ → 4주기 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $32i$ ⑵ $-i$ ⑶ $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/98-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 10→12·14, 50→52, 502→500. 제약: 짝수 지수여야 제곱 묶기가 딱 떨어지고, 홀수로 두면 $(1+i)$ 한 개가 남아 답이 $a+bi$ 꼴이 된다(난이도 +1).'
    creative: '(1) $\frac{1+i}{1-i}$ 를 먼저 간단히 하는 단계를 없애고 $(1+i)^{502}$ 와 $(1-i)^{502}$ 를 각각 구해 더하게 하기(★3) (2) 값이 실수가 되는 지수 조건 묻기(I-BW d2 · ★3) (3) 밑을 $\frac{\sqrt{3}+i}{2}$ 처럼 6주기로 바꾸면 교육과정 밖.'
```

```yaml
- id: GN-CM1-98-191
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 복소수의 거듭제곱. $(1-i)^{56}$ · $\left(\frac{1-i}{1+i}\right)^{2026}$ · $\left(\frac{1+i}{\sqrt{2}\,i}\right)^{100}+\left(\frac{1-i}{\sqrt{2}\,i}\right)^{100}$.
  category: '밑을 제곱해 $\pm 2i$·$\pm i$ 로 → 지수법칙 → 4주기 환원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '복소수의 거듭제곱($(1\pm i)^2=\pm 2i$ 로 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 의 연습. ⑶은 분모의 $i$ 를 먼저 밖으로 빼거나 $\frac{1+i}{\sqrt{2}\,i}$ 를 제곱해 처리한다.
    ⑴에서 $2^{28}$ 처럼 큰 거듭제곱을 그대로 두는 표기(T-표기)가 함정. 통찰 없음·확인체크 → ★2.
  tier: star_2
  mechanism_primary: '밑 제곱 → $i$의 거듭제곱 + $2$의 거듭제곱으로 분리 → 4주기 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2^{28}$ ⑵ $-1$ ⑶ $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/98-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 56→60, 2026→2024, 100→102. 제약: $(1-i)^{2m}=(-2i)^m$ 이므로 $m$ 을 4로 나눈 나머지가 답의 부호·허수 여부를 정한다. 나머지를 먼저 골라 지수를 역산한다.'
    creative: '(1) 답을 $2^k$ 꼴로 쓰게 해 지수법칙 표기를 강제(★2) (2) $(1-i)^{2n}=2^n i$ 처럼 조건식으로 바꾸면 101-207 형태(★4) (3) 세 항의 합이 실수가 되는지 판정하게 하기(I-SYM d1 · ★3).'
```

```yaml
- id: GN-CM1-98-192
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $z=\frac{\sqrt{2}}{1+i}$ 일 때 $z^2+z^4+z^6+z^8+z^{10}$ 의 값.
  category: '분모 실수화 → $z^2=-i$ → 밑 $-i$의 거듭제곱 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '복소수의 거듭제곱의 합($z^2$ 을 $\pm i$로 환원)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 유리화해 $z=\frac{1-i}{\sqrt{2}}$ 로 만들면 $z^2=-i$. 구하는 식은 $(-i)^1+\cdots+(-i)^5$ 이고 앞 네 항이 0 이라 마지막 항만 남는다.
    두 도구(유리화 · 4주기)가 이어 붙지만 분기는 없다. 확인체크 → ★2.
  tier: star_2
  mechanism_primary: '$z$ 유리화 → $z^2=-i$ → 연속 네 항 합 $=0$ → 남는 $z^{10}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/98-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항 수를 5→4(합 0)·6·8 로 바꾸거나 $z=\frac{\sqrt{2}}{1-i}$ 로. 제약: 짝수 지수만 쓰므로 실제 밑은 $z^2=\mp i$ 이고, 항 수를 4로 나눈 나머지가 답을 정한다.'
    creative: '(1) 홀수 지수까지 섞어 $z+z^2+\cdots$ 로 만들면 8주기가 되어 ★3 (2) 합이 0 이 되는 항 수를 묻는 역방향(I-BW d1 · ★3) (3) $z^n$ 이 실수가 되는 최소 $n$(101-205 형태 · ★3).'
```

```yaml
- id: GN-CM1-98-193
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\left(\frac{i+1}{i-1}\right)^n=i$ 를 만족시키는 자연수 $n$의 최솟값.
  category: '밑을 $-i$로 간단히 → $(-i)^n$ 주기표에서 $i$가 되는 $n$ 역추적'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '값이 $i$ 가 되도록 하는 지수를 주기표에서 거꾸로 찾는 역추적(최솟값 조건 포함)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$z^n$ 이 주어진 값이 되는 자연수 $n$의 최솟값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\frac{i+1}{i-1}$ 을 유리화하면 $-i$. 그다음은 $(-i)^1=-i$, $(-i)^2=-1$, $(-i)^3=i$ 주기표를 세워 $i$ 가 되는 첫 지수를 읽는다.
    계산은 가볍지만 「만족시키는 최솟값」이라는 역방향 진입이 있어 I-BW d1 1개. 확인체크 ★2 출발점 유지(통찰 1개는 +1 조건 아님).
  tier: star_2
  mechanism_primary: '밑 유리화 → $-i$ → $(-i)^n$ 4주기표 → $i$ 가 되는 최소 $n$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/98-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 $i$→$-1$·$-i$·$1$ 로, 밑을 $\frac{1+i}{1-i}$(=$i$)로. 제약: 밑이 $\pm i$ 면 답이 1~4 안에서 결정되고, 밑을 $1+i$ 로 두면 크기 때문에 해가 없어진다.'
    creative: '(1) 「$100$ 이하의 자연수 $n$의 개수」로 바꾸면 I-PD 가 붙어 ★3~4(101-207 형태) (2) 우변을 실수로 두고 최소 $n$(101-205 형태 · ★3) (3) 조건을 만족하는 $n$ 을 모두 구하는 일반형 $n=4k+3$ 표현(★3).'
```

```yaml
- id: GN-CM1-99-e11
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\sqrt{-3}\sqrt{12}+\sqrt{-3}\sqrt{-12}+\frac{\sqrt{12}}{\sqrt{-3}}+\frac{\sqrt{-12}}{\sqrt{-3}}$ 계산.
  category: '네 부호 조합을 각각 $i$ 꼴로 분해 → 실수부·허수부 합산'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근의 곱·나눗셈 종합 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 식 안에 (음·양), (음·음), (양÷음), (음÷음) 네 조합을 다 넣어 둔 종합 연습. 각 항을 $\sqrt{a}\,i$ 로 바꿔 계산하면 규칙 암기 없이도 끝난다.
    둘째 항의 $-$, 넷째 항의 $+$ 가 갈리는 지점이 함정(T-부호·T-표기). 통찰 없음·필수 예제 → ★2.
  tier: star_2
  mechanism_primary: '각 근호를 $i$ 꼴로 분해 → 항별 계산 → 실수부·허수부 따로 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4+4i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/99-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$3$, $12$ 를 $2$, $8$ 또는 $5$, $20$ 처럼 배수 관계로 바꾼다. 제약: 나눗셈 항의 몫이 정수 제곱이 되도록 $\frac{\text{큰 수}}{\text{작은 수}}$ 를 완전제곱으로 유지해야 답이 깔끔하다.'
    creative: '(1) 항 하나를 빼고 값이 실수가 되게 만들기(★2) (2) 결과를 $a+bi$ 로 두고 $\frac{a}{b}$ 를 묻기(100-201 형태 · ★2) (3) 근호 안에 문자를 넣어 부호를 판정하게 하면 I-EQV 가 붙어 ★3.'
```

```yaml
- id: GN-CM1-99-e12
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $0$이 아닌 두 실수 $a$, $b$에 대하여 $\sqrt{a}\sqrt{b}=-\sqrt{ab}$ 일 때 $\sqrt{(a+b)^2}+|b|+\sqrt{(-a)^2}$ 을 간단히 하기.
  category: '조건 → $a<0$, $b<0$ 확정 → 절댓값 벗기기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sqrt{a}\sqrt{b}=-\sqrt{ab}$ 라는 등식을 「$a<0$ 이고 $b<0$」이라는 부호 조건으로 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음수의 제곱근의 성질을 이용한 식의 간단화(부호 판정 → 절댓값)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등식 자체는 계산 대상이 아니라 부호 정보다. $a<0$, $b<0$ 을 얻은 뒤 $\sqrt{(a+b)^2}=|a+b|=-(a+b)$, $|b|=-b$, $\sqrt{(-a)^2}=|a|=-a$ 로 각각 벗긴다.
    $\sqrt{(-a)^2}$ 가 $-a$ 가 아니라 $|a|$ 라는 표기 함정(T-표기)과 부호 함정(T-부호) 2종. 통찰 I-EQV d2 1개지만 +1 조건(2개 이상·depth 3)이 아니라 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '조건식 → $a<0$, $b<0$ → 각 절댓값의 부호 결정 → $-2a-2b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2a-2b$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/99-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '간단히 할 식의 항을 $\sqrt{(a-b)^2}$·$|a+2b|$·$\sqrt{4a^2}$ 등으로 교체. 제약: $a<0$, $b<0$ 만으로 부호가 확정되는 식만 써야 한다($a-b$ 는 부호가 정해지지 않아 쓸 수 없다).'
    creative: '(1) 조건을 $\frac{\sqrt{a}}{\sqrt{b}}=-\sqrt{\frac{a}{b}}$ 로 바꿔 $a>0$, $b<0$ 이 되게 하기(99-195 형태 · ★2) (2) 문자 세 개로 늘려 조건 두 개를 결합(100-202 형태 · ★2) (3) $a$, $b$ 자리에 $a-4$, $1-a$ 같은 식을 넣어 범위를 구하게 하기(99-196 형태 · ★2).'
```

```yaml
- id: GN-CM1-99-194
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 음수의 제곱근이 섞인 곱·나눗셈 종합 계산. $\sqrt{-4}\sqrt{-8}+\sqrt{3}\sqrt{-3}+\frac{\sqrt{8}}{\sqrt{-2}}$ 와 $\frac{\sqrt{-20}}{\sqrt{-5}}+\sqrt{-9}\sqrt{-4}+\frac{\sqrt{81}}{\sqrt{-9}}$.
  category: '각 항을 $i$ 꼴로 분해 → 항별 부호 결정 → 실수부·허수부 합산'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근의 곱·나눗셈 종합 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 의 연습. 항마다 부호 조합이 달라 규칙을 외워 쓰면 실수하기 쉽고, $\sqrt{-a}=\sqrt{a}\,i$ 로 바꿔 계산하면 안전하다.
    ⑵의 $\frac{\sqrt{-20}}{\sqrt{-5}}$(둘 다 음수 → 그대로 $\sqrt{4}$)가 핵심 분기. 통찰 없음·확인체크 → ★2.
  tier: star_2
  mechanism_primary: '근호를 $\sqrt{a}\,i$ 로 분해 → 항별 계산 → 실수부·허수부 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-4\sqrt{2}+i$ ⑵ $-4-3i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/99-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 수를 바꾸되 항별 부호 조합(음·음 / 양·음 / 양÷음 / 음÷음)은 한 식에 최소 세 가지가 들어가게 유지. 제약: 나눗셈 몫이 완전제곱이어야 무리수 없이 정리된다.'
    creative: '(1) 결과를 $a+bi$ 로 두고 $a+b$·$\frac{a}{b}$ 를 묻기(★2) (2) 값이 실수가 되도록 빠진 항의 부호를 정하기(I-BW d1 · ★3) (3) 「옳은 것의 개수」 보기형으로 바꾸기(100-200 형태 · ★2).'
```

```yaml
- id: GN-CM1-99-195
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0$이 아닌 두 실수 $a$, $b$에 대하여 $\frac{\sqrt{a}}{\sqrt{b}}=-\sqrt{\frac{a}{b}}$ 일 때 $|a|+\sqrt{(a-b)^2}-\sqrt{b^2}$ 을 간단히 하기.
  category: '조건 → $a>0$, $b<0$ 확정 → 절댓값 벗기기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '나눗셈 꼴 예외 등식을 「$a>0$ 이고 $b<0$」이라는 부호 조건으로 동치 변환(곱 꼴과 조건이 다르다는 점이 핵심)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음수의 제곱근의 성질을 이용한 식의 간단화(나눗셈 꼴 조건)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 와 쌍을 이루는 문제. 곱 꼴은 「둘 다 음수」, 나눗셈 꼴은 「분자 양수·분모 음수」라는 차이를 정확히 알아야 한다.
    $a>0$, $b<0$ 이면 $a-b>0$ 이라는 파생 부호까지 따라가는 것이 두 번째 함정. 통찰 I-EQV d2 1개 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '조건식 → $a>0$, $b<0$ → $a-b>0$ 파생 → 절댓값 벗겨 $2a$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2a$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/99-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '식의 항을 $\sqrt{(b-a)^2}$·$|a+b|$·$\sqrt{9b^2}$ 로 교체. 제약: $a>0$, $b<0$ 에서 부호가 확정되는 식만 쓴다($a+b$ 는 확정되지 않아 못 쓴다 — e12 와 정반대).'
    creative: '(1) 조건과 결론을 뒤집어 간단히 한 결과를 주고 조건 식을 고르게 하기(I-BW d2 · ★3) (2) 곱 꼴·나눗셈 꼴 조건을 함께 주기(100-202 형태 · ★2) (3) $a$, $b$ 대신 $x+1$, $x-1$ 같은 식을 넣어 범위를 구하게 하기(★3).'
```

```yaml
- id: GN-CM1-99-196
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 $a$에 대하여 $\sqrt{a-4}\sqrt{1-a}=-\sqrt{(a-4)(1-a)}$ 일 때 $\sqrt{(a-4)^2}+|a-1|$ 을 간단히 하기($a\ne 1$, $a\ne 4$).
  category: '조건 → $a-4<0$, $1-a<0$ → $1<a<4$ → 절댓값 벗기기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '근호 안의 두 식이 모두 음수라는 조건을 $a$ 의 범위 $1<a<4$ 로 옮기는 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음수의 제곱근의 성질로 문자의 범위 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문자가 두 개가 아니라 한 개이므로 조건이 부호가 아니라 구간 $1<a<4$ 로 나온다. 그 범위에서 $\sqrt{(a-4)^2}=4-a$, $|a-1|=a-1$ 이 되어 $a$ 가 소거되고 상수 3 만 남는다.
    범위 함정(T-범위)과 절댓값 부호(T-부호) 2종. 통찰 I-EQV d2 1개 → 확인체크 ★2 유지(간단화 결과가 상수라 실수해도 눈치채기 어렵다).
  tier: star_2
  mechanism_primary: '조건 → $1<a<4$ → $\sqrt{(a-4)^2}=4-a$, $|a-1|=a-1$ → 합 $3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/99-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a-4$, $1-a$ 의 경계값을 바꿔 $2<a<7$ 처럼 만든다($\sqrt{a-7}\sqrt{2-a}$). 제약: 두 식의 부호가 동시에 음수가 되는 구간이 비지 않아야 하고, 간단화 식은 그 구간에서 부호가 확정돼야 한다.'
    creative: '(1) 간단화 결과가 상수가 되지 않게 계수를 어긋나게 해 $a$ 가 남게 하기(★3) (2) 조건을 나눗셈 꼴로 바꿔 구간이 반대로 되게 하기(★2) (3) 구간의 정수 $a$ 의 개수를 묻기(I-VF d1 · ★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-100-197
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $i-2i^2+3i^3-4i^4+\cdots-30i^{30}=p+qi$ 일 때 실수 $p$, $q$에 대한 $p-q$의 값.
  category: '부호를 밑에 흡수해 $(-i)^n$ 으로 → 4주기 대입 → 실수부·허수부 분리'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '계수가 붙은 $i$의 거듭제곱의 합(부호 교대형)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(-1)^{n+1}i^n=-(-i)^n$ 으로 부호를 밑에 흡수하면 189·190 과 완전히 같은 골조가 되고, 그대로 $i^n$ 값을 대입해 실수부·허수부를 따로 더해도 된다.
    교대 부호와 계수가 겹쳐 T-부호·T-경계 2종이 붙지만 분기는 없다. 30항이 4의 배수가 아닌 처리까지 절차형 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '부호를 밑으로 흡수 $\to(-i)^n$ → 네 항씩 묶어 상수합 → 꼬리 항 → $p$, $q$ 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 항 30→28(4의 배수)·32 로, 묻는 값을 $p-q$→$p+q$·$pq$ 로. 제약: 부호 교대의 시작(첫 항이 $+$ 인지 $-$ 인지)에 따라 답의 부호가 통째로 바뀌므로 발문에 명시된 처음 두 항을 그대로 둔다.'
    creative: '(1) 계수를 홀수만($i+3i^3+5i^5+\cdots$) 남겨 밑의 주기를 2로 줄이기(★2) (2) $p=q$ 가 되는 끝 항의 지수를 찾는 역방향(I-BW d2 · ★3) (3) 합을 $n$ 에 대한 일반식으로 표현하게 하기(I-PD d2 · ★4).'
```

```yaml
- id: GN-CM1-100-198
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    자연수 $n$이 짝수일 때 $\left(\frac{1+i}{\sqrt{2}}\right)^{4n}+\left(\frac{1-i}{\sqrt{2}}\right)^{4n+2}$ 의 값.
  category: '밑을 제곱해 $\pm i$ → 지수를 $n$의 홀짝으로 환원'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「$n$ 이 짝수」라는 조건을 $(-1)^n=1$ 로 옮겨 $n$ 이 남은 식을 상수로 확정'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '복소수의 거듭제곱 — 지수에 문자가 있는 꼴($n$의 홀짝 조건)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\left(\frac{1+i}{\sqrt{2}}\right)^2=i$, $\left(\frac{1-i}{\sqrt{2}}\right)^2=-i$ 까지는 e10 과 같다. 다른 점은 지수가 $4n$, $4n+2$ 라 값이 $n$ 에 남고, 「짝수」 조건을 $(-1)^n=1$ 로 옮겨야 상수로 확정된다는 것.
    문자 지수(Mₐ 2)와 조건 사용이 있어 I-EQV d1 1개. 통찰 1개는 +1 조건이 아니라 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '밑 제곱 → $i^{2n}=(-1)^n$, $(-i)^{2n+1}=(-1)^n(-i)$ → 짝수 조건 대입 → $1-i$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1-i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수를 $4n\to 4n+1$·$2n$ 으로, 조건을 「짝수」→「홀수」·「$3$의 배수」로. 제약: 지수를 2로 나눈 뒤 남는 $i$ 의 지수가 $n$ 의 홀짝만으로 결정돼야 값이 상수로 떨어진다.'
    creative: '(1) 조건을 없애고 $n$ 에 대한 경우로 답을 나눠 쓰게 하면 I-MI d1 → ★3 (2) 식의 값이 실수가 되는 $n$ 의 조건을 묻는 역방향(I-BW d2 · ★3) (3) 두 항의 곱으로 바꿔 켤레 대칭을 쓰게 하기(I-SYM d1 · ★3).'
```

```yaml
- id: GN-CM1-100-199
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x=\frac{1-i}{1+i}$ 일 때 $1+x+x^2+\cdots+x^{2000}$ 의 값.
  category: '밑을 $-i$로 간단히 → 연속 네 항의 합 $=0$ → 나머지 항만'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$i$의 거듭제곱의 합(4개씩 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 유리화로 $x=-i$ 를 얻은 뒤 e9 와 같은 묶기. 항이 $x^0$ 부터 $x^{2000}$ 까지 2001개라 500묶음 + 1항이 남는다.
    항 수 세기(T-경계)가 유일한 함정이고 두 도구가 순서대로 붙을 뿐 분기는 없다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '$x$ 유리화 $\to -i$ → 항 수 2001 → 500묶음은 0 → 남는 $x^{2000}=1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 지수 2000→2001·2002, 밑을 $\frac{1+i}{1-i}$(=$i$)로. 제약: 시작이 $x^0$ 이므로 항 수는 (끝 지수 $+1$) 이다 — 나머지를 먼저 정하고 지수를 역산한다.'
    creative: '(1) 등비수열의 합 공식으로도 풀리게 해 두 갈래를 만들면 I-SC d1 → ★3 (2) 합이 0 이 되는 끝 지수를 묻기(I-BW d1 · ★3) (3) $1+x+\cdots+x^{n}$ 의 값이 될 수 있는 수를 모두 묻기(I-PD d1 · ★3).'
```

```yaml
- id: GN-CM1-100-200
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    보기 ㄱ~ㅁ 중 옳은 것의 개수. 근호 안이 음수인 곱·나눗셈 등식 $\frac{\sqrt{-5}}{\sqrt{-2}}=\sqrt{\frac{-5}{-2}}$ 등 5개의 참·거짓 판정.
  category: '예외 조건(곱은 둘 다 음수 · 나눗셈은 분자 양수·분모 음수) 대조 → 참·거짓'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근의 성질 — 등식의 참·거짓 판정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기를 각각 $i$ 꼴로 바꿔 좌·우변을 비교하면 된다. 예외가 걸리는 것은 나눗셈에서 (양÷음)인 ㄷ 과 곱에서 (음·음)인 ㅁ 둘뿐.
    다섯 개를 따지지만 각각은 한 줄 판정이라 독립 분기가 아니며 통찰로 세지 않았다. 예외 조건을 정확히 기억하는지만 보는 T-부호·T-범위 2종 → STEP 1 ★2.
  tier: star_2
  mechanism_primary: '보기마다 근호를 $i$ 꼴로 분해 → 좌·우변 비교 → 예외 두 개만 거짓'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 수만 바꾸고 다섯 보기의 부호 조합은 유지한다. 제약: 참인 보기와 거짓인 보기의 개수를 먼저 정하고 조합을 배치해야 답(개수)이 통제된다.'
    creative: '(1) 「옳은 것만 있는 대로 고르시오」 5지선다로 바꾸기(★2) (2) 등식이 성립하도록 근호 안 수의 부호 조건을 채우게 하는 역방향(I-BW d2 · ★3) (3) 보기에 문자를 넣어 $a$, $b$ 의 부호 조건까지 묻기(I-EQV d2 · ★3).'
```

```yaml
- id: GN-CM1-100-201
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $(\sqrt{-5})^2-\sqrt{-9}\sqrt{-12}+\sqrt{3}\sqrt{-3}+\frac{\sqrt{-75}}{\sqrt{-3}}-\frac{\sqrt{36}}{\sqrt{-4}}=a+bi$ 일 때 실수 $a$, $b$에 대한 $\frac{a}{b}$ 의 값.
  category: '항별로 $i$ 꼴 분해 → 실수부·허수부 합산 → 비 구하기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음수의 제곱근의 곱·나눗셈 종합 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 항이 모두 다른 부호 조합이고 $(\sqrt{-5})^2=-5$ 라는 제곱 처리까지 섞여 있다. 항별로 $i$ 꼴로 바꿔 더하면 끝.
    앞의 부호($-$, $+$, $-$)가 항 자체의 부호와 겹쳐 T-부호·T-표기 2종. 통찰 없음·계산 종합형 → STEP 1 ★2.
  tier: star_2
  mechanism_primary: '각 항을 $i$ 꼴로 분해 → 실수부·허수부 각각 합 → $\frac{a}{b}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 수를 바꾸되 $\frac{\sqrt{-75}}{\sqrt{-3}}$ 처럼 몫이 완전제곱이 되는 짝은 유지한다. 제약: 답이 $\frac{a}{b}$ 이므로 $b\ne 0$ 이 되도록 허수부가 남게 항을 배치해야 한다.'
    creative: '(1) 묻는 값을 $a+b$·$ab$ 로 바꾸기(★2) (2) 식의 값이 순허수가 되도록 한 항의 근호 안 수를 정하는 역방향(I-BW d2 · ★3) (3) 근호 안에 문자를 넣어 부호 판정을 먼저 하게 하기(I-EQV d2 · ★3).'
```

```yaml
- id: GN-CM1-100-202
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $0$이 아닌 세 실수 $a$, $b$, $c$에 대하여 $\sqrt{a}\sqrt{b}=-\sqrt{ab}$, $\frac{\sqrt{c}}{\sqrt{b}}=-\sqrt{\frac{c}{b}}$ 일 때 $\sqrt{(a+b)^2}+|c-a|-\sqrt{b^2}+\sqrt{c^2}$ 를 간단히 하기.
  category: '두 조건 → $a<0$, $b<0$, $c>0$ 확정 → 절댓값 벗기기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '곱 꼴·나눗셈 꼴 두 조건을 이어 붙여 세 문자의 부호 $a<0$, $b<0$, $c>0$ 를 한 번에 확정'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음수의 제곱근의 성질을 이용한 식의 간단화(조건 2개·문자 3개)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12(곱 꼴)와 195(나눗셈 꼴)를 한 문제에 합친 형태. 두 조건이 $b$ 를 공유하므로 $b<0$ 을 먼저 확정하면 $a<0$, $c>0$ 가 따라 나온다.
    $c-a>0$ 같은 파생 부호까지 끌고 가는 것이 함정(T-부호·T-범위). 조건 결합이지만 CM1 에서는 I-CON 을 보수적으로 보고 I-EQV d2 1개로 처리 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '조건 두 개 → $b<0$ → $a<0$, $c>0$ → 각 절댓값 부호 결정 → $-2a+2c$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2a+2c$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/100-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '간단히 할 식의 항을 $\sqrt{(b+c)^2}$·$|a-c|$·$\sqrt{4a^2}$ 로 교체. 제약: $a<0$, $b<0$, $c>0$ 에서 부호가 확정되는 식만 쓴다($a+c$·$b+c$ 는 확정되지 않는다).'
    creative: '(1) 조건을 세 개로 늘려 문자 네 개로 확장(★3) (2) 부호 조건만 주고 원래의 근호 등식을 되묻는 역방향(I-BW d2 · ★3) (3) 간단히 한 결과가 $0$ 이 되도록 하는 관계를 묻기(★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-101-203
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    임의의 자연수 $n$에 대하여 $f(n)=\frac{i^n}{2-i^n}$ 일 때 $f(7)+f(77)$ 의 값.
  category: '$i^7=-i$, $i^{77}=i$ 로 환원 → 켤레 두 항의 합 → 분모 실수화'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$f(7)$ 과 $f(77)$ 이 서로 켤레라는 것을 보고 합이 실수임을 이용해 유리화를 한 번으로 줄임'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$i^n$ 을 포함한 식의 값(주기 환원 + 켤레 합)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 $7=4\cdot1+3$, $77=4\cdot19+1$ 로 $i^7=-i$, $i^{77}=i$ 를 얻는다. 그러면 두 항이 $\frac{-i}{2+i}$, $\frac{i}{2-i}$ 로 켤레 관계가 되어 합이 실수임이 보이고 유리화를 한 번만 해도 된다.
    함수 표기($f(n)$)로 한 겹 감싼 추상(Mₐ 2)과 대칭 착안이 붙어 STEP 2 출발점 ★3 유지. 대칭을 못 보면 두 번 유리화하는 절차형 풀이로도 풀린다(그래서 +1 은 하지 않음).
  tier: star_3
  mechanism_primary: '$n$ 을 4로 나눈 나머지 → $i^n$ 확정 → 켤레 두 분수의 합 → 분모 실수화'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f$ 의 분모 상수 $2$ 를 $3$·$1$ 로, 인수 $7$·$77$ 을 나머지가 $3$과 $1$ 인 다른 쌍(예: $11$·$101$)으로. 제약: 두 지수의 나머지가 켤레쌍($1$과 $3$)이어야 합이 실수로 떨어진다. 나머지가 같으면 그냥 2배가 된다.'
    creative: '(1) $f(1)+f(2)+f(3)+f(4)$ 처럼 한 주기를 모두 더하게 하기(★3) (2) $f(n)$ 이 실수가 되는 $n$ 의 조건(I-BW d2 · ★4) (3) $f(n)f(n+2)$ 의 값이 $n$ 에 무관함을 보이기(I-SYM d2 · ★4).'
```

```yaml
- id: GN-CM1-101-204
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $z=\frac{1+i+i^2+\cdots+i^{101}}{1-i}$ 일 때 $z^3+z+7$ 의 값. 5지선다.
  category: '분자는 4개씩 묶어 $1+i$ → $z=i$ → 거듭제곱 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$i$의 거듭제곱의 합(4개씩 묶기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자는 $i^0$ 부터 $i^{101}$ 까지 102항이라 25묶음(합 0) 뒤 $i^{100}+i^{101}=1+i$ 만 남는다. 그러면 $z=\frac{1+i}{1-i}=i$ 이고 $z^3+z=-i+i=0$.
    합 묶기 → 유리화 → 거듭제곱 세 도구가 한 줄로 이어지지만 분기·역추적이 없어 절차형. STEP 2 출발점 ★3 유지(M_total 6 으로 −1 조건에는 못 미침).
  tier: star_3
  mechanism_primary: '분자 102항 → 25묶음은 0 → $1+i$ → $z=i$ → $z^3+z+7$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 지수 101→102·103 으로 바꾸면 $z$ 가 $\frac{1+i+i^2}{1-i}$ 등으로 바뀐다. 제약: 분자의 나머지 항 합이 $0$ 이면 $z=0$ 이 되어 문제가 무너지므로 나머지가 1~3 이 되게 지수를 고른다.'
    creative: '(1) 묻는 식을 $z^{10}+z^5$ 로 키워 주기를 다시 쓰게 하기(★3) (2) 분모를 $1+i$ 로 바꿔 $z=-i$ 가 되게 하기(★3) (3) $z$ 가 실수가 되도록 분자의 끝 지수를 정하는 역방향(I-BW d2 · ★4).'
```

```yaml
- id: GN-CM1-101-205
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    복소수 $z=\frac{1+i}{i}$ 에 대하여 $z^n$이 양의 정수가 되도록 하는 자연수 $n$의 최솟값.
  category: '$z=1-i$ → $z^2=-2i$ → 거듭제곱 표에서 양의 정수 조건 역추적'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「양의 정수」라는 결과 조건에서 지수를 역추적 — $z^4=-4$ 는 정수지만 음수라 기각되고 $z^8=16$ 까지 올라가야 한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$z^n$ 이 주어진 조건을 만족하는 자연수 $n$의 최솟값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\frac{1}{i}=-i$ 로 $z=1-i$ 를 얻고 $z^2=-2i$, $z^4=-4$, $z^8=16$ 표를 세운다. 「정수」가 아니라 「양의 정수」라 $n=4$ 를 기각하는 한 단계가 이 문제의 전부다.
    조건을 놓치면 $4$ 라는 오답에 그대로 도달한다(T-부호). 역추적 + 기각의 I-BW d2 1개 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '$z$ 정리 $\to 1-i$ → $z^2=-2i$ → 거듭제곱 표 → 양수 조건으로 $n=4$ 기각 → $n=8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 「양의 정수」→「음의 실수」·「순허수」로 바꾸면 답이 $4$·$2$ 로 내려간다. 밑을 $\frac{1-i}{i}$·$\frac{1+i}{\sqrt{2}}$ 로 바꿀 수 있다. 제약: 밑에 크기가 붙어 있어야($|z|\ne1$) 「정수」 조건이 의미를 갖는다.'
    creative: '(1) 「$100$ 이하의 자연수 $n$ 의 개수」로 바꾸면 I-PD 가 붙어 ★4 (2) $z^n$ 이 실수가 되는 $n$ 을 모두 구해 일반형으로 쓰기(★3) (3) $z^n$ 이 $2^k$ 꼴이 되는 $(n,k)$ 쌍을 묻기(I-VF d1 · ★4).'
```

```yaml
- id: GN-CM1-101-206
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $0$이 아닌 두 실수 $x$, $y$가 $\sqrt{x}\sqrt{y}=-\sqrt{xy}$ 를 만족시키고 $z=x^2+3x-yi-18+i$ 에 대하여 $z^2=-16$ 일 때 $xy$의 값.
  category: '조건 → $x<0$, $y<0$ → $z^2=-16$ → $z$ 는 순허수 $\pm 4i$ → 후보 기각'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sqrt{x}\sqrt{y}=-\sqrt{xy}$ 를 「$x<0$ 이고 $y<0$」이라는 부호 조건으로 동치 변환'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$z^2=-16$ 이라는 결과에서 $z$ 가 순허수 $\pm 4i$ 임을 역추적해 실수부 $x^2+3x-18=0$, 허수부 $1-y=\pm4$ 로 분리'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x=3,-6$ 과 $y=-3,5$ 중 음수 조건을 만족하지 않는 후보를 각각 기각해 $(x,y)=(-6,-3)$ 만 남김'
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: '음수의 제곱근의 성질 + 복소수가 실수·순허수가 될 조건'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 도구가 겹친다. ① 근호 조건으로 부호 확정 ② $z^2=-16<0$ 에서 $z$ 가 순허수라는 역추적 ③ 이차방정식과 절댓값에서 나온 후보 넷 중 부호 조건 위배분 기각.
    ③이 없으면 $xy$ 가 $-9$·$30$ 같은 오답으로도 도달한다(I-VF 의 전형). 통찰 3개(2개 이상 → +1) 로 STEP 2 출발점 ★3 에서 ★4 로 올렸다. [분류 이슈] 벤더 STEP 2 와 1단 차 — 표에 기록.
  tier: star_4
  mechanism_primary: '조건 → $x<0,y<0$ → $z^2=-16$ → 실수부 $=0$ 이차방정식 · 허수부 $=\pm4$ → 부호로 후보 기각 → $xy$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$z^2=-16\to-4$·$-36$, 실수부 이차식의 상수항 $-18\to-10$($x=2,-5$). 제약: 이차방정식의 두 근이 부호가 서로 달라야 기각 단계가 살아 있고, 허수부 $1-y=\pm k$ 의 두 값도 부호가 갈려야 한다.'
    creative: '(1) 조건을 나눗셈 꼴로 바꿔 $x>0$, $y<0$ 이 되게 하면 기각되는 후보가 뒤바뀐다(★4 유지) (2) $z^2$ 이 양의 실수가 되게 해 $z$ 가 실수인 경우로 바꾸기(★3) (3) $x+y$ 의 최댓값을 묻는 형태로 확장(★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-101-207
  page: 101
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $100$ 이하의 자연수 $n$에 대하여 $(1-i)^{2n}=2^n i$ 를 만족시키는 모든 $n$의 개수.
  category: '$(1-i)^{2n}=(-2i)^n$ → $2^n$ 약분 → $(-i)^n=i$ → $n\equiv3\pmod4$ 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(1-i)^{2n}$ 을 $(-2i)^n=2^n(-i)^n$ 으로 묶어 조건식을 크기 부분과 $(-i)^n=i$ 라는 순수 주기 조건으로 분리'
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$(-i)^n$ 의 4주기에서 $i$ 가 되는 것은 $n\equiv3\pmod4$ 임을 찾아 $100$ 이하의 개수로 환산'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '조건을 만족시키는 자연수 $n$의 개수($i$의 거듭제곱의 주기 + 개수 세기)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $(1-i)^2=-2i$ 까지는 e10 과 같지만, 지수에 문자가 있어 $2^n$ 을 양변에서 걷어내고 남은 $(-i)^n=i$ 를 주기 조건으로 읽어야 한다.
    그다음은 $n=3,7,\ldots,99$ 를 세는 문제로 바뀐다($100$ 이하라는 경계 처리 — T-범위). 통찰 2개(EQV d2 + PD d1)로 실력 UP 출발점 ★4 유지, 기출 태그 +0.
  tier: star_4
  mechanism_primary: '$(1-i)^{2n}=2^n(-i)^n$ → $2^n$ 소거 → $(-i)^n=i$ → $n\equiv3\pmod 4$ → $100$ 이하 개수 $25$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 $100\to 200$·$50$, 우변을 $2^n i\to -2^n i$·$2^n$ 으로(나머지가 $1$·$0$ 으로 바뀐다), 밑을 $1+i$ 로. 제약: 좌변의 크기 $2^n$ 과 우변의 계수가 정확히 같아야 약분되고, 다르면 해가 없다.'
    creative: '(1) 만족시키는 $n$ 의 총합을 묻기(등차수열 합이 붙어 ★4) (2) $(1-i)^{2n}$ 이 양의 실수가 되는 $n$ 의 개수로 바꾸기(★4) (3) 조건을 $(1-i)^{m}=2^n i$ 처럼 문자 두 개로 두고 쌍의 개수를 묻기(I-VF d2 · ★5 후보).'
```

```yaml
- id: GN-CM1-101-208
  page: 101
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $-1<x<1$ 일 때 $\sqrt{x+1}\sqrt{x-1}\sqrt{1-x}\sqrt{-1-x}$ 를 간단히 하기.
  category: '범위로 네 근호의 부호 판정 → 음수인 것만 $i$ 로 분리 → $i^2=-1$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$-1<x<1$ 을 네 근호 안 식의 부호($x+1>0$, $x-1<0$, $1-x>0$, $-1-x<0$)로 옮겨, 음수인 두 개만 $\sqrt{\;}\,i$ 로 분리해야 함을 확정'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음수의 제곱근의 성질 — 문자 범위에서 근호 곱 간단히 하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\sqrt{a}\sqrt{b}=\sqrt{ab}$ 를 네 번 그냥 쓰면 $\sqrt{(x^2-1)^2}=1-x^2$ 라는 오답에 그대로 도달한다. 범위에서 부호를 먼저 판정해 $\sqrt{x-1}=\sqrt{1-x}\,i$, $\sqrt{-1-x}=\sqrt{1+x}\,i$ 로 바꾼 뒤 $i^2=-1$ 을 내는 것이 전부다.
    도구는 하나지만 네 근호를 모두 따로 판정해야 하고 실패 시 부호가 통째로 뒤집힌다(T-부호·T-범위). 실력 UP 출발점 ★4 유지. [분류 이슈] 통찰이 I-EQV 하나뿐이라 ★3 으로 볼 여지 — 표에 기록.
  tier: star_4
  mechanism_primary: '범위 → 네 근호의 부호 판정 → 음수 둘을 $i$ 로 분리 → $i^2\cdot(1+x)(1-x)$ → $x^2-1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x^2-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/101-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간을 $-2<x<2$ 로 옮기고 근호를 $\sqrt{x+2}$·$\sqrt{x-2}$·$\sqrt{2-x}$·$\sqrt{-2-x}$ 로. 제약: 네 근호 중 음수가 되는 것이 짝수 개여야 결과가 실수로 떨어진다(홀수 개면 답에 $i$ 가 남는다).'
    creative: '(1) 근호를 세 개만 남겨 답이 순허수가 되게 하기(★4) (2) 범위를 주지 않고 결과가 $x^2-1$ 이 되는 $x$ 의 범위를 묻는 역방향(I-BW d2 · ★5 후보) (3) $\sqrt{x+1}\sqrt{x-1}$ 과 $\sqrt{(x+1)(x-1)}$ 의 차를 묻기(★4).'
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 3 · ★2 19 · ★3 3 · ★4 3 · ★5 0
- 통찰형 11 · 절차형 17 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-BW 3 · I-PD 1 · I-SYM 1 · I-VF 1 (총 14 라벨 / 11문)
- type_hint 계열 상위: 「$i$의 거듭제곱의 합(4개씩 묶기)」 계열 7 · 「음수의 제곱근의 성질 → 부호 판정·간단화」 6 · 「음수의 제곱근의 곱·나눗셈 계산」 5 · 「복소수의 거듭제곱($(1\pm i)^2=\pm 2i$)」 5 · 「조건을 만족하는 자연수 $n$(최솟값·개수)」 3
- 대상층: 하위권 2 · 중하위권 12 · 중위권 9 · 중상위권 5 · 상위권 0
- M_total 분포: 4 (1문) · 5 (2문) · 6 (10문) · 7 (11문) · 8 (2문) · 9 (1문) — 평균 약 6.6
- 그림: 0문 (이 범위는 모든 문항이 순수 식 계산)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-101-206 | 벤더 STEP 2(★3 출발)이나 통찰 3개(EQV·BW·VF)·M_total 9 로 +1 하여 ★4 로 라벨. 1단 차이라 그대로 두고 기록 | ★3 / ★4 |
| GN-CM1-101-208 | 실력 UP(★4 출발)이지만 통찰이 I-EQV d2 하나뿐이라 §2.13 「★4 슬롯 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 부재」 YELLOW. 네 근호 부호를 모두 판정해야 하는 체감을 존중해 ★4 유지 | ★3 / ★4 |
| GN-CM1-99-196 | 확인체크(★2)지만 조건을 구간 $1<a<4$ 로 옮기고 $a$ 가 소거돼 상수가 되는 구조는 STEP 1 상단과 같은 수준. 벤더 신호를 따라 ★2 유지 | ★2 / ★3 |
| GN-CM1-97-e9 외 확인체크 9문 | 「필수·발전 예제」 구역 안의 확인체크는 가이드의 「개념원리 익히기 안 확인체크 → ★1」이 아니라 같은 구역 필수 예제와 같은 ★2 를 출발점으로 삼았다(이 파일의 관례 · 구역 위치가 다름) | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「$i$의 거듭제곱의 합 — 4개씩 묶기」(순수형: e9·188·199·204)와 ② 「계수가 붙은 $i$의 거듭제곱의 합」(189·190·197)은 묶음 합이 $0$ 이냐 상수냐로 골조가 갈리므로 분리한다. ③ 「음수의 제곱근의 곱·나눗셈 계산」(96-187·e11·194·200·201)과 ④ 「음수의 제곱근의 성질 → 부호 판정 후 절댓값 간단화」(e12·195·196·202·206·208)도 전자는 수치 계산, 후자는 조건 → 부호 역추적이라 base ★ 가 다르다(전자 ★2, 후자 ★2~4).
- **통합해도 될 유형** 「$z^n$ 이 주어진 값이 되는 최소 $n$」(193·205)과 「조건을 만족시키는 $n$ 의 개수」(207)는 같은 주기표 역추적 골조이고 개수 세기만 덧붙는다 — 한 유형 + 난이도 변형으로 묶을 수 있다. 「복소수의 거듭제곱」(185⑸⑹·e10·191·192·198)도 밑을 제곱해 $\pm i$ 로 만드는 한 도구라 단일 유형으로 충분하다.
- 이 범위에서 base ★ 가 4 이상이 될 수 있는 유형은 ④ 계열(문자 범위·복소수 조건이 얹힐 때)과 ⑤ 「조건을 만족시키는 $n$ 의 개수」뿐이다. 나머지는 계산량을 늘려도 ★3 을 넘기 어렵다(§2.11 friction 경고 대상).
