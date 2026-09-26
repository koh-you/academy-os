---
name: mechanism-데이터-GN-ALG-10
description: 개념원리 대수 10 로그함수의 뜻과 그래프(1/1 · 94~102쪽 94-215~102-245 · 39문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 10 로그함수의 뜻과 그래프
  unit_code: ALG-10
  part: "1/1"
  extract_range: "94~102쪽 · 94-215~102-245"
  total_problems: 39
  unit_total: 39
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 10 로그함수의 뜻과 그래프 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 10단원 「로그함수의 뜻과 그래프」 전체(94~102쪽 · 94-215~102-245 · 39문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 5문항(94-215~94-219 · 개념 직후 확인 드릴 · level·tag 없음), **필수·발전 예제** 20문항(95-e1~99-e8 의 tag 「필수」 예제 8개와 그 뒤에 붙는 tag 「확인체크」 12문항), **연습문제 STEP 1** 6문항, **연습문제 STEP 2** 6문항, **연습문제 실력 UP** 2문항이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제와 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 여기에 M_total·통찰로 ±1 을 조정했다(발전·특강 예제는 이 범위에 없고, 101-237 한 문항만 tag 「교육청 기출」이다).

단원 내용은 로그함수의 정의(지수함수의 역함수)·그래프의 평행이동과 대칭이동·대소 비교·역함수·그래프가 만드는 도형이다. 그래서 골조가 다섯 갈래로 반복된다. ⑴ 정의와 성질을 그대로 확인하기, ⑵ 진수의 계수를 묶어내 $\log_a(x-m)+n$ 꼴로 되돌리기, ⑶ 수를 같은 밑의 로그로 고쳐 진수만 비교하기, ⑷ $y=x$ 대칭(역함수)으로 한 곡선의 $y$좌표를 다른 곡선의 $x$좌표로 옮기는 계단 구조, ⑸ 두 곡선이 평행이동 관계임을 보고 둘러싸인 부분을 직사각형으로 환원하기다. 뒤 두 갈래(계단·평행이동 넓이)가 이 단원의 변별 장치이며 그림 문항 15개가 모두 여기에 몰려 있다. 통찰 라벨은 I-RT(대수↔기하 표현 전환)와 I-EQV(조건의 동치 변환)가 대부분이고, 두 조건을 한 식으로 묶는 I-CON 은 실력 UP 과 STEP 2 에서 세 번만 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 15개이고 `figure: crop:…` 로 적었다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-94-215
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $f(x)=\log_2 x$, $g(x)=\log_{\frac{1}{3}} x$ 에 대하여 $f(4)$ · $f(\frac{1}{2})$ · $f(1)$ · $g(\frac{1}{9})$ · $g(27)$ · $g(1)$ 의 값 구하기.
  category: '로그함수의 함숫값 → 진수를 밑의 거듭제곱으로 고쳐 지수 읽기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 함숫값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수를 밑의 거듭제곱으로 고쳐 지수를 읽는 한 단계씩 여섯 번이다. 밑이 $\frac{1}{3}$ 인 ⑷⑸ 에서 부호가 뒤집히는 것만 주의하면 된다.
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 로그함수 정의 확인 드릴이다.
  tier: star_1
  mechanism_primary: '진수를 밑의 거듭제곱 꼴로 → $\log_a a^k=k$ 로 지수 읽기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ \quad ⑵ $-1$ \quad ⑶ $0$ \quad ⑷ $2$ \quad ⑸ $-3$ \quad ⑹ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/94-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2 \to 5$, $\frac{1}{3} \to \frac{1}{2}$)과 진수(밑의 거듭제곱·역수·1·무리수 $\sqrt{a}$)를 교체. 제약: 밑은 $a>0,\ a\ne1$, 진수는 양수. 정수 지수·음의 지수·0 지수 사례를 각각 한 개 이상 남겨 정의 확인 폭을 유지한다.'
    creative: '(1) 진수를 $\sqrt[3]{a}$ 처럼 거듭제곱근으로 주면 분수 지수까지 확인 ★1 (2) $f(4)+g(27)$ 처럼 값을 조합해 묻기 ★1 (3) $f(k)=3$ 을 만족시키는 $k$ 로 뒤집으면 역방향 한 단계 ★2.'
```

```yaml
- id: GN-ALG-94-216
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ $f(x)=\log_a x$ 의 정의역·치역, $a>1$ 과 $0<a<1$ 일 때의 증감, 점근선을 빈칸에 써넣기.
  category: '로그함수의 기본 성질 → 정의역·치역·증감·점근선 확인'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 정의역·치역·증감·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    교과서 성질을 그대로 채우는 빈칸이다. 밑이 1보다 작으면 감소한다는 ⑷ 와 점근선이 $x$축이 아니라 $y$축이라는 ⑸ 가 유일한 함정이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '로그함수의 정의역 $x>0$ · 치역 실수 전체 · 밑의 크기에 따른 증감 · 점근선 $y$축을 그대로 적기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 양의 실수 \quad ⑵ 실수 \quad ⑶ $<$ \quad ⑷ $>$ \quad ⑸ $y$축'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/94-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수치가 사실상 없다. 밑을 구체수($2$ · $\frac{1}{3}$)로 고정한 판본과 문자 $a$ 판본을 따로 두는 정도. 제약: 정의역은 진수 조건에서만 나오므로 진수를 $x$ 그대로 두어야 이 유형이 유지된다.'
    creative: '(1) 지수함수 $y=a^x$ 와 나란히 놓고 정의역·치역이 뒤바뀜을 채우게 하기 ★1 (2) 옳은 것 고르기(보기형)로 바꾸면 판정 단계가 늘어 ★2 (3) 그래프 개형을 함께 그리게 하면 $M_s$ 상승 ★2.'
```

```yaml
- id: GN-ALG-94-217
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ $y=\log_3 (x-1)$, $y=\log_{\frac{1}{2}} x+2$ 의 그래프를 그리고 정의역·치역·점근선의 방정식 구하기.
  category: '로그함수 그래프의 평행이동 → 정의역·치역·점근선 읽기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 로그함수의 정의역·치역·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x$축 방향 이동은 정의역과 점근선을 함께 옮기고 $y$축 방향 이동은 둘 다 바꾸지 않는다는 것만 구분하면 된다. 그래프는 기본형을 통째로 옮겨 그린다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지. 진수 조건 $x-1>0$ 이 유일한 함정(T-범위)이다.
  tier: star_1
  mechanism_primary: '기본형 $y=\log_a x$ 에서 $x$축 방향 $m$ 이동 → 정의역 $x>m$ · 점근선 $x=m$, $y$축 방향 이동은 정의역·점근선 불변'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x>1\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=1$ \quad ⑵ 정의역: $\{x \mid x>0\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/94-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($3$ · $\frac{1}{2}$)과 이동량($x-1 \to x+2$, $+2 \to -3$)을 교체. 제약: $x$축 방향 이동량이 그대로 점근선이 되도록 진수는 $x\pm m$ 꼴(계수 1)로 두어야 이 난이도가 유지된다.'
    creative: '(1) 진수에 계수를 붙여 $y=\log_3(2x-2)$ 로 주면 계수를 묶어내는 단계가 추가돼 ★2 (2) 그래프만 주고 식을 묻는 역방향이면 ★2 (3) 두 그래프의 위치 관계(교점 개수)를 묻게 하면 ★3.'
```

```yaml
- id: GN-ALG-94-218
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ $y=\log_2 x$ 를 $x$축 방향 $-1$·$y$축 방향 $4$ 만큼 평행이동한 식과 $x$축에 대하여 대칭이동한 식 구하기.
  category: '그래프의 평행이동·대칭이동 → 식에 대응시키기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동과 대칭이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행이동은 $x \to x+1$, $y \to y-4$ 대입, $x$축 대칭은 $y \to -y$ 대입이다. 대칭이동 결과 $-\log_2 x$ 를 $\log_2 \frac{1}{x}$ 로 적는 표기 변환만 따라가면 된다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '평행이동은 $x \to x-m$·$y \to y-n$ 대입, $x$축 대칭은 $y \to -y$ 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\log_2 (x+1)+4$ \quad ⑵ $y=\log_2 \dfrac{1}{x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/94-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이동량($-1$, $4$)과 밑($2 \to \frac{1}{3}$)을 교체. 제약: 대칭축을 $y$축·원점·직선 $y=x$ 로 바꾸면 정의역이 바뀌므로 답 표기($\log$ 꼴 유지 여부)를 함께 조정한다.'
    creative: '(1) $y$축 대칭·원점 대칭을 추가해 네 가지를 한꺼번에 묻기 ★1~2 (2) 대칭이동 뒤 평행이동처럼 순서를 겹치면 ★2 (3) 이동 결과를 주고 이동량을 묻는 역방향이면 ★2.'
```

```yaml
- id: GN-ALG-94-219
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $y=6^x$ 의 역함수를 구하는 과정에서 치역·일대일대응·$x=\log_6 y$·역함수 식의 빈칸 ㈎~㈑ 채우기.
  category: '지수함수의 역함수 → 로그의 정의로 $x$에 대하여 풀고 $x$와 $y$ 바꾸기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 역함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    역함수 존재 조건(일대일대응)과 구하는 절차(로그의 정의로 $x$에 대하여 풀기 → $x$와 $y$ 교환)를 문장 그대로 따라가는 빈칸이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 로그함수가 지수함수의 역함수라는 단원 출발점을 확인한다.
  tier: star_1
  mechanism_primary: '$y=6^x$ → 로그의 정의로 $x=\log_6 y$ → $x$와 $y$ 교환 → $y=\log_6 x$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ 양의 실수 \quad ㈏ 일대일대응 \quad ㈐ $\log_6 y$ \quad ㈑ $\log_6 x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/94-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $6$ 을 다른 양수($2$ · $\frac{1}{5}$)로 교체. 제약: 밑이 1이면 일대일대응이 아니어서 역함수가 없으므로 $a\ne1$ 을 유지한다.'
    creative: '(1) 반대로 $y=\log_5 x$ 의 역함수를 구하는 과정으로 뒤집기 ★1 (2) 평행이동된 $y=6^{x-1}+2$ 로 두면 단계가 늘어 ★2 (3) 역함수가 존재할 밑의 조건을 함께 묻게 하면 $M_a$ 상승 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-95-e1
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\log_a (2x+3)+2$ 이고 $f(3)=4$ 일 때 $f(12)$ 의 값 ($a$ 는 상수).
  category: '함숫값 조건으로 밑 $a$ 결정 → 다시 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 함숫값 — 미정 밑 결정 후 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(3)=4$ 에서 $\log_a 9=2$ 이므로 $a^2=9$, 밑 조건 $a>0$ 으로 $a=3$ 이 하나로 정해진다. 그 뒤 $f(12)=\log_3 27+2$ 는 한 줄이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 밑 조건에서 음수 근을 버리는 것이 유일한 함정이다.
  tier: star_2
  mechanism_primary: '$f(3)=4$ → $\log_a 9=2$ → $a=3$(밑 조건) → $f(12)=\log_3 27+2=5$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/95-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 일차식($2x+3$)·상수항($+2$)·주어진 함숫값 쌍을 교체. 제약: 조건 대입 결과가 $a^k=$(밑의 거듭제곱) 꼴이 되어 $a$ 가 유리수로 떨어져야 하고, 묻는 $x$ 에서도 진수가 밑의 거듭제곱이어야 한다.'
    creative: '(1) $f(3)=4$ 대신 $f(a)=2$ 처럼 미지수를 겹쳐 주면 ★3 (2) 밑을 주고 상수항을 미지수로 돌리면 골조 동일 ★2 (3) $f(12)-f(3)$ 을 묻게 해 로그의 차로 정리시키면 ★2~3.'
```

```yaml
- id: GN-ALG-95-e2
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\log_5 x$ 에 대하여 보기 ㄱ~ㅁ(점 $(1,0)$ 통과 · 점근선 · 정의역 · 증가 · $y=5^x$ 와 $y=x$ 대칭) 중 옳은 것 모두 고르기.
  category: '로그함수의 성질 → 보기별 참거짓 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 성질 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기를 성질 표에 하나씩 대조한다. 점근선이 $x$축이라는 ㄴ(T-표기)과 정의역이 실수 전체라는 ㄷ(T-범위)이 함정이고, ㅁ 은 로그함수가 지수함수의 역함수라는 정의 그대로다.
    필수 예제 ★2 출발 · 통찰 0(성질 대조는 표준 절차) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '정의역 $x>0$ · 점근선 $y$축 · 밑 $>1$ 증가 · $y=a^x$ 와 $y=x$ 대칭을 보기마다 대조'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄹ, ㅁ'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/95-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $5$ 를 $\frac{1}{5}$ 로 바꾸면 증감 보기(ㄹ)의 참거짓이 뒤집힌다. 제약: 참인 보기와 거짓인 보기의 개수가 한쪽으로 쏠리지 않게 유지한다.'
    creative: '(1) 밑을 $0<a<1$ 로 두고 같은 보기를 판정시키면 부호 함정이 늘어 ★2 (2) 평행이동된 $y=\log_5(x-2)$ 로 바꾸면 정의역·점근선 보기가 살아나 ★2 (3) 옳지 않은 것의 개수를 묻게 하면 전수 판정이 강제돼 ★3.'
```

```yaml
- id: GN-ALG-95-220
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\left(\frac{1}{9}\right)^{x}$, $g(x)=\log_3 x^2$ 일 때 $(g \circ f)\left(-\frac{1}{2}\right)$ 의 값.
  category: '합성함수 → 지수 계산 후 로그 계산'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 로그함수의 합성함수 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽부터 계산한다. $\left(\frac{1}{9}\right)^{-\frac{1}{2}}=3$ 을 얻고 $g(3)=\log_3 9=2$ 로 끝난다. 음의 분수 지수 처리가 실질 난관이다.
    확인체크 ★2 출발 · 통찰 0 · M_total 5 → 1단 하향 후보지만 합성 + 음의 분수 지수 두 단계라 ★2 유지. [분류 이슈] ★1 후보와 경계.
  tier: star_2
  mechanism_primary: '$f\left(-\frac{1}{2}\right)=\left(\frac{1}{9}\right)^{-\frac{1}{2}}=3$ → $g(3)=\log_3 3^2=2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/95-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{1}{9} \to \frac{1}{8}$, $\log_3 \to \log_2$)과 대입값($-\frac{1}{2} \to -\frac{1}{3}$)을 교체. 제약: 두 밑이 거듭제곱 관계여야 $g$ 의 진수가 밑의 거듭제곱으로 떨어진다. 진수가 $x^2$ 이므로 $f$ 의 값이 음수여도 정의되지만 그 경우 절댓값 처리가 생긴다.'
    creative: '(1) $(f \circ g)$ 로 순서를 뒤집어 정의역을 따지게 하면 ★3 (2) $g(x)=\log_3 x^2$ 의 진수 제곱을 살려 $2\log_3 |x|$ 와의 차이를 묻게 하면 ★3 (3) 합성 결과가 상수가 되는 $x$ 를 묻는 역방향이면 ★3.'
```

```yaml
- id: GN-ALG-95-221
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\log_{\frac{1}{2}} x$ 에 대하여 보기 ㄱ~ㅁ(통과점 · 점근선 · 증감 · 일대일 · $y=\log_2 x$ 와의 대칭축) 중 옳은 것 모두 고르기.
  category: '밑이 1보다 작은 로그함수의 성질 → 보기별 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 성질 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑이 $\frac{1}{2}$ 이므로 감소함수(ㄷ 거짓)이고, $y=\log_2 x$ 와는 $y$축이 아니라 $x$축 대칭(ㅁ 거짓)이다. ㄱ 은 $f(1)=0$ 이라 거짓, ㄹ 은 단조성에서 참이다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 대칭축 혼동(T-표기)과 증감 반전(T-부호)이 함정이다.
  tier: star_2
  mechanism_primary: '밑 $0<a<1$ → 감소·일대일 확인, $\log_{\frac{1}{2}} x=-\log_2 x$ 로 $x$축 대칭 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/95-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{1}{2} \to \frac{1}{3}$)과 통과점 후보($\left(1,\frac{1}{2}\right) \to (2,-1)$)를 교체. 제약: 통과점 보기는 실제로 거짓이 되도록 $y$좌표를 살짝 어긋나게 둔다.'
    creative: '(1) 두 함수 $\log_2 x$ 와 $\log_{\frac{1}{2}} x$ 의 그래프 관계만 묻는 단문으로 줄이면 ★1~2 (2) 보기에 역함수 $y=\left(\frac{1}{2}\right)^x$ 관련 항을 넣으면 ★3 (3) 옳은 것의 개수를 묻게 하면 전수 판정 강제 ★3.'
```

```yaml
- id: GN-ALG-96-e3
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $y=\log_3 (x+1)+2$, $y=\log_3 (-x)-1$ 의 그래프를 그리고 정의역·치역·점근선의 방정식 구하기.
  category: '평행이동·$y$축 대칭이동한 로그함수 → 그래프와 정의역·점근선'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·대칭이동한 로그함수의 그래프와 정의역·점근선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 기본형을 왼쪽 1·위로 2 옮긴 것이고, ⑵ 는 진수가 $-x$ 라 $y$축 대칭이어서 정의역이 $x<0$ 으로 뒤집힌다. 그래프 개형은 증가·감소 방향까지 함께 뒤집어 그려야 한다.
    필수 예제 ★2 출발 · 통찰 0(이동 규칙 적용은 표준 절차) · M_total 6 → ★2 유지. 함정은 진수 조건(T-범위)과 대칭에 따른 방향 반전(T-부호) 둘이다.
  tier: star_2
  mechanism_primary: '진수를 0보다 크게 하는 범위로 정의역 결정 → 진수가 0이 되는 $x$ 가 점근선 → 이동·대칭 방향대로 개형 그리기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x>-1\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=-1$ \quad ⑵ 정의역: $\{x \mid x<0\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/96-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($3 \to \frac{1}{2}$)·이동량($+1$, $+2$, $-1$)을 교체. 제약: ⑵ 처럼 진수에 $-$ 가 붙는 판본을 한 개 남겨야 정의역 반전 확인이 유지된다.'
    creative: '(1) $y=\log_3(1-x)$ 처럼 대칭과 평행이동을 한 식에 겹치면 ★3 (2) 그래프를 주고 식을 고르게 하는 역방향이면 ★2 (3) 두 그래프의 교점 개수를 묻게 하면 ★3.'
```

```yaml
- id: GN-ALG-96-e4
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\log_2 x$ 를 $x$축 방향 $m$·$y$축 방향 $n$ 만큼 평행이동한 식이 $y=\log_2 (4x-8)+1$ 일 때 $m$, $n$ 의 값.
  category: '진수의 계수를 묶어내 $\log_2(x-m)+n$ 꼴로 환원 → 이동량 읽기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '진수 $4x-8=4(x-2)$ 로 묶어 $\log_2 4(x-2)=\log_2(x-2)+2$ 로 분리해야 이동 꼴이 드러남'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동 — 진수의 계수 분리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수를 $4(x-2)$ 로 묶고 로그의 성질로 $+2$ 를 떼어내면 $y=\log_2(x-2)+3$ 이 되어 $m=2$, $n=3$ 이 바로 읽힌다. 계수를 떼지 않고 $m=8$ 로 답하는 것이 전형적 오답이다.
    필수 예제 ★2 출발 · 통찰 1개(EQV d1) · M_total 7 → ★2 유지. 이 단원 변형의 핵심 골조 중 하나다.
  mechanism_primary: '$\log_2(4x-8)+1=\log_2 4(x-2)+1=\log_2(x-2)+3$ → $m=2$, $n=3$'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$m=2$, $n=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/96-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 계수와 상수항($4x-8 \to 9x+27$)·밑($2 \to 3$)·$y$절편 상수를 교체. 제약: 계수가 밑의 거듭제곱이어야 $\log_a(\text{계수})$ 가 정수로 떨어진다. 그렇지 않으면 $n$ 이 무리수가 되어 난이도가 튄다.'
    creative: '(1) $m$, $n$ 을 주고 이동한 식을 쓰게 하는 역방향 ★2 (2) 계수를 밑의 거듭제곱이 아닌 수로 두어 $n=1+\log_2 3$ 꼴을 답하게 하면 ★3 (3) 대칭이동을 한 번 섞으면 부호 판정이 추가돼 ★3.'
```

```yaml
- id: GN-ALG-96-222
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $y=\log_{\frac{1}{2}}(x+2)+1$, $y=\log_{\frac{1}{2}}(-x)-2$, $y=-\log_{\frac{1}{2}}(x-3)$ 의 그래프를 그리고 정의역·치역·점근선 구하기.
  category: '평행이동·$y$축 대칭·$x$축 대칭한 로그함수 → 그래프와 정의역·점근선'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·대칭이동한 로그함수의 그래프와 정의역·점근선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항이 평행이동·$y$축 대칭·$x$축 대칭을 하나씩 맡는다. 정의역과 점근선은 진수 조건에서만 나오므로 ⑶ 처럼 앞에 $-$ 가 붙어도 정의역은 변하지 않는다는 구분이 핵심이다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 함정은 진수 조건(T-범위)과 방향 반전(T-부호)이다.
  tier: star_2
  mechanism_primary: '진수 $>0$ 으로 정의역·점근선 결정 → 앞의 부호와 밑의 크기로 증감 방향 결정 → 개형 이동'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x>-2\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=-2$ \quad ⑵ 정의역: $\{x \mid x<0\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=0$ \quad ⑶ 정의역: $\{x \mid x>3\}$, 치역: $\{y \mid y$는 실수$\}$, 점근선의 방정식: $x=3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/96-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{1}{2} \to \frac{1}{3}$)과 이동량($+2$, $-2$, $-3$)을 교체. 제약: 세 소문항이 평행·$y$축 대칭·$x$축 대칭을 하나씩 담당하는 구성을 유지한다.'
    creative: '(1) 원점 대칭 판본을 추가해 네 갈래로 넓히면 ★2 (2) 세 그래프를 한 좌표평면에 그려 위치 관계를 묻게 하면 ★3 (3) 정의역만 주고 식을 고르게 하는 역방향이면 ★2.'
```

```yaml
- id: GN-ALG-96-223
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\log_3 x$ 를 $x$축 방향 $m$·$y$축 방향 $n$ 만큼 평행이동한 식이 $y=\log_3 (27x+9)$ 일 때 $mn$ 의 값.
  category: '진수의 계수를 묶어내 이동 꼴로 환원 → 이동량의 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '진수 $27x+9=27\left(x+\frac{1}{3}\right)$ 로 묶어 $\log_3 27$ 을 상수로 떼어내야 이동량이 보임'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동 — 진수의 계수 분리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    96-e4 와 같은 골조인데 이동량이 분수라 부호·분수 처리가 한 겹 더 있다. $\log_3 27\left(x+\frac{1}{3}\right)=\log_3\left(x+\frac{1}{3}\right)+3$ 에서 $m=-\frac{1}{3}$, $n=3$ 이다.
    확인체크 ★2 출발 · 통찰 1개(EQV d1) · M_total 7 → ★2 유지. $m$ 의 부호를 뒤집어 쓰는 실수가 전형적이다.
  tier: star_2
  mechanism_primary: '$\log_3(27x+9)=\log_3\left(x+\frac{1}{3}\right)+3$ → $m=-\frac{1}{3}$, $n=3$ → $mn$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/96-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 계수·상수항($27x+9 \to 8x-4$, 밑 $2$)을 교체. 제약: 계수가 밑의 거듭제곱이어야 $n$ 이 정수가 되고, 계수로 나눈 상수항이 간단한 분수로 떨어져야 한다.'
    creative: '(1) $m+n$ 이나 $m-n$ 을 묻게 하면 부호 실수의 영향이 달라짐 ★2 (2) 대칭이동을 섞어 $y=\log_3(-27x+9)$ 로 두면 ★3 (3) 이동 후 그래프가 특정 점을 지나는 조건을 붙이면 미정계수 결정이 추가돼 ★3.'
```

```yaml
- id: GN-ALG-96-224
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\log_{\frac{1}{5}} x$ 를 $x$축에 대하여 대칭이동한 뒤 $x$축 방향 $2$·$y$축 방향 $-3$ 만큼 평행이동한 그래프의 식.
  category: '대칭이동 → 밑의 역수 정리 → 평행이동'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 대칭이동 후 평행이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$축 대칭으로 $y=-\log_{\frac{1}{5}} x=\log_5 x$ 가 되고, 여기에 $x \to x-2$, $y \to y+3$ 을 넣는다. 순서를 뒤집으면 상수항이 달라지므로 대칭 먼저·평행 나중을 지켜야 한다.
    확인체크 ★2 출발 · 통찰 0(밑의 역수 변환은 공식 적용) · M_total 5 → 이동 두 번이 겹쳐 ★2 유지.
  tier: star_2
  mechanism_primary: '$x$축 대칭 $y \to -y$ → $\log_5 x$ → $x \to x-2$, $y \to y+3$ → $y=\log_5(x-2)-3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\log_5 (x-2)-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/96-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{1}{5} \to \frac{1}{4}$)과 이동량($2$, $-3$)을 교체. 제약: 밑을 역수로 바꾸는 단계를 살리려면 처음 밑을 1보다 작은 수로 둔다.'
    creative: '(1) 대칭축을 $y$축·원점으로 바꾸면 정의역까지 이동해 ★2~3 (2) 평행이동 먼저·대칭 나중 순서로 바꾼 판본과 비교하게 하면 ★3 (3) 결과 식을 주고 이동 과정을 복원시키면 역방향 ★3.'
```

```yaml
- id: GN-ALG-97-e5
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $3$, $\log_2 7$, $\log_4 63$ ⑵ $\log_{\frac{1}{3}} 2$, $\log_{\frac{1}{3}} \frac{1}{2}$, $-1$ 의 대소 비교.
  category: '밑을 통일하고 정수를 로그 꼴로 고쳐 → 진수 비교(밑<1이면 반전)'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '정수 $3$·$-1$ 을 같은 밑의 로그($3=\log_4 64$, $-1=\log_{\frac{1}{3}} 3$)로 고치고 밑을 하나로 통일해야 진수만 비교할 수 있음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수를 이용한 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\log_2 7=\log_4 49$ 로 밑을 4로 통일하면 $49<63<64$ 로 끝난다. ⑵ 는 밑이 1보다 작아 진수가 클수록 값이 작아지는 반전을 적용한다.
    필수 예제 ★2 출발 · 통찰 1개(EQV d1) · M_total 7 → ★2 유지. 밑<1 반전(T-부호)과 정수를 로그로 고치는 단계(T-표기)가 함정이다.
  tier: star_2
  mechanism_primary: '세 수를 같은 밑의 로그로 통일 → 밑>1이면 진수 순서 그대로, 밑<1이면 반대로'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\log_2 7<\log_4 63<3$ \quad ⑵ $-1<\log_{\frac{1}{3}} 2<\log_{\frac{1}{3}} \dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/97-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 쌍($2,4 \to 3,9$)과 진수($7,63 \to 5,26$)를 교체. 제약: 통일한 뒤 진수들이 가깝게 붙어야 비교가 의미 있고, 세 수의 대소가 실제로 갈라지도록 경계값($4^3=64$ 같은 기준)을 잡아 둔다.'
    creative: '(1) 세 수 중 하나를 $\sqrt{}$ 꼴로 주면 분수 지수 처리 추가 ★3 (2) 밑이 다른 세 수를 모두 밑 변환 공식으로 옮기게 하면 ★3 (3) 대소가 성립할 $a$ 의 범위를 묻는 역방향이면 ★3~4.'
```

```yaml
- id: GN-ALG-97-e6
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $y=3^{x-2}+1$ ⑵ $y=\log_2 (x-1)+1$ 의 역함수 구하기.
  category: '$x$에 대하여 풀기(로그·지수의 정의) → $x$와 $y$ 교환'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 로그함수의 역함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $y-1=3^{x-2}$ 에서 $x-2=\log_3(y-1)$, ⑵ 는 $y-1=\log_2(x-1)$ 에서 $x-1=2^{y-1}$ 로 옮긴 뒤 문자를 바꾼다. 상수항을 먼저 넘기는 순서만 지키면 된다.
    필수 예제 ★2 출발 · 통찰 0(정의 적용은 표준 절차) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '상수항 이항 → 지수·로그의 정의로 $x$에 대하여 풀기 → $x \leftrightarrow y$ 교환'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=\log_3 (x-1)+2$ \quad ⑵ $y=2^{x-1}+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/97-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($3$, $2$)과 이동량($-2$, $+1$)을 교체. 제약: 두 소문항이 지수→로그·로그→지수 양방향을 하나씩 담당하도록 유지한다.'
    creative: '(1) 역함수의 정의역·치역까지 함께 쓰게 하면 ★2~3 (2) 앞에 $-$ 가 붙은 $y=-\log_2(x-1)$ 로 두면 부호 처리 추가 ★3 (3) 원함수와 역함수의 교점을 $y=x$ 위에서 찾게 하면 ★3.'
```

```yaml
- id: GN-ALG-97-225
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\log_4 25$, $\log_8 80$, $2$ ⑵ $-2$, $\log_{\frac{1}{2}} 3$, $\log_{\frac{1}{2}} 5$ 의 대소 비교.
  category: '밑을 통일하고 정수를 로그 꼴로 고쳐 → 진수 비교(밑<1이면 반전)'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '밑 $4$·$8$ 을 밑 $2$ 로 통일하고 정수 $2$·$-2$ 를 같은 밑의 로그로 고쳐야 세 수가 한 줄에 놓임'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수를 이용한 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 밑 변환으로 $\log_4 25=\frac{1}{2}\log_2 25$, $\log_8 80=\frac{1}{3}\log_2 80$ 처럼 옮겨 비교하고, ⑵ 는 밑이 $\frac{1}{2}$ 이라 $-2=\log_{\frac{1}{2}} 4$ 를 끼워 넣어 진수 $3<4<5$ 를 뒤집는다.
    확인체크 ★2 출발 · 통찰 1개(EQV d1) · M_total 7 → ★2 유지. 97-e5 와 같은 골조이며 밑 변환 계산이 한 겹 더 있다.
  tier: star_2
  mechanism_primary: '밑 변환으로 밑 통일 → 정수를 같은 밑의 로그로 → 진수 비교(밑<1 반전)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2<\log_8 80<\log_4 25$ \quad ⑵ $\log_{\frac{1}{2}} 5<-2<\log_{\frac{1}{2}} 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/97-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($4,8 \to 9,27$)과 진수($25,80 \to 28,244$)를 교체. 제약: 통일한 뒤 거듭제곱 경계($2^6=64$, $2^9=512$)를 사이에 두고 대소가 갈라지게 진수를 고른다.'
    creative: '(1) 세 수 중 하나를 $\left(\log_2 3\right)^2$ 같은 꼴로 주면 ★3~4 (2) 대소 관계를 부등식으로 두고 진수의 범위를 묻는 역방향 ★3 (3) 네 수로 늘리면 비교 단계만 늘어 ★3.'
```

```yaml
- id: GN-ALG-97-226
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $y=2^{-x+1}-3$ ⑵ $y=\log_{\frac{1}{3}} (x-2)+1$ 의 역함수 구하기.
  category: '$x$에 대하여 풀기 → $x$와 $y$ 교환(지수의 부호·밑<1 처리)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 로그함수의 역함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $y+3=2^{-x+1}$ 에서 $-x+1=\log_2(y+3)$ 이라 부호를 한 번 더 뒤집어야 하고, ⑵ 는 밑이 $\frac{1}{3}$ 이라 역함수가 $\left(\frac{1}{3}\right)^{x-1}+2$ 로 나온다.
    확인체크 ★2 출발 · 통찰 0 · M_total 5 → 부호 처리가 겹쳐 ★2 유지.
  tier: star_2
  mechanism_primary: '상수항 이항 → 정의로 $x$에 대하여 풀기(지수의 $-$ 부호 정리) → $x \leftrightarrow y$ 교환'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=-\log_2 (x+3)+1$ \quad ⑵ $y=\left(\dfrac{1}{3}\right)^{x-1}+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/97-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$, $\frac{1}{3}$)·지수의 계수($-x+1$)·상수항($-3$, $+1$)을 교체. 제약: 지수에 $-$ 가 붙은 판본을 하나 남겨 부호 반전 확인을 유지한다.'
    creative: '(1) 지수의 계수를 $2x$ 로 두면 $\frac{1}{2}\log$ 가 나와 ★3 (2) 역함수가 자기 자신이 되는 조건을 묻게 하면 ★4 (3) 역함수의 정의역까지 요구하면 $M_t$ 상승 ★3.'
```

```yaml
- id: GN-ALG-97-227
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\log_4 (x+a)-3$ 의 역함수가 $y=4^{x+b}-1$ 일 때 상수 $a$, $b$ 에 대한 $a+b$ 의 값.
  category: '역함수를 직접 구해 주어진 식과 계수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 식 비교로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원함수의 역함수는 $y=4^{x+3}-a$ 이므로 주어진 $y=4^{x+b}-1$ 과 항끼리 맞추면 $b=3$, $a=1$ 이 동시에 나온다. 상수가 지수 쪽과 상수항 쪽에 엇갈려 들어가는 것이 함정이다.
    확인체크 ★2 출발 · 통찰 0(계수 비교는 표준 절차) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$y=\log_4(x+a)-3$ 의 역함수 $y=4^{x+3}-a$ → $y=4^{x+b}-1$ 과 계수 비교 → $a=1$, $b=3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/97-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($4 \to 5$)과 상수항($-3$, $-1$)을 교체. 제약: 원함수의 상수항이 역함수의 지수로, 원함수의 진수 상수가 역함수의 상수항으로 넘어가는 대응을 유지한다.'
    creative: '(1) $ab$ 나 $a-b$ 를 묻게 하면 부호 실수의 영향이 달라짐 ★2 (2) 역함수를 그래프로 주면 그림 읽기가 추가돼 ★3(100-235 꼴) (3) 원함수와 역함수가 만나는 점을 묻게 하면 ★3~4.'
```

```yaml
- id: GN-ALG-98-e7
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림에서 $y=\log_2 x$ 의 그래프와 직선 $y=x$ 가 만드는 계단으로 $x$축 위의 네 값 $a<b<c<d$ 가 정해질 때 $d-c$ 의 값(점선은 축에 평행).
  category: '직선 $y=x$ 로 $y$좌표를 $x$좌표로 옮기는 계단 → 이웃 값 사이 지수 관계'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '그림의 점선을 대수 관계로 옮김 — 곡선에서 읽은 $y$좌표가 직선 $y=x$ 를 거쳐 다음 점의 $x$좌표가 되므로 $a=\log_2 b$, 즉 $b=2^a$ 가 연쇄로 성립'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그 그래프와 직선 y=x 를 이용한 계단 대응"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점선을 따라가면 $b=2^a$, $c=2^b$, $d=2^c$ 의 연쇄가 되고 $a=1$ 에서 출발해 $c=4$, $d=16$ 이 나온다. 계산 자체는 가볍지만 그림의 점선이 무슨 등식인지 옮기는 진입 저항이 이 문항의 전부다.
    필수 예제 ★2 출발이나 미지수 네 개의 연쇄 구조 해독(RT d2)·M_total 7 로 +1 → ★3. 같은 골조가 98-228·100-236 으로 반복된다.
  tier: star_3
  mechanism_primary: '곡선의 $y$좌표 → 직선 $y=x$ 로 $x$좌표 복사 → $b=2^a$, $c=2^b$, $d=2^c$ → $d-c$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "본문 풀이"
  figure: "crop:fig-98-e7.png"
  latex: latex-bank/gn-alg/items/98-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2 \to 3$)과 계단의 시작값·단계 수를 교체. 제약: 각 단계가 밑의 거듭제곱으로 떨어져야 답이 정수로 나오고, 그림의 라벨 순서($a<b<c<d$)와 점선 위치는 고정해야 한다.'
    creative: '(1) $d-c$ 대신 $\frac{d}{c}$ 나 $c+d$ 를 묻기(골조 동일 ★3) (2) 계단을 한 칸 늘려 다섯 값으로 두면 수가 급격히 커져 ★3~4 (3) 곡선을 $y=\log_2 x$ 와 $y=2^x$ 두 개로 바꾸면 $y=x$ 없이도 같은 연쇄가 되어 ★3(98-228 꼴).'
```

```yaml
- id: GN-ALG-98-228
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림에서 $y=3^x$, $y=\log_3 x$ 의 그래프를 점선으로 오가며 정해지는 $x$축 위의 값 $a$ (점선은 축에 평행).
  category: '역함수 관계인 두 곡선 사이의 계단 → $y$좌표를 상대 곡선의 $x$좌표로'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 곡선이 역함수 관계여서 한 곡선에서 읽은 $y$값이 다른 곡선의 $x$값이 된다는 그림 구조를 등식으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그 그래프의 계단 대응"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=3^x$ 의 $y$절편 $1$ 에서 출발해 $\log_3 x=1$ 인 $x=3$, 다시 $3^3=27$, 그 높이에서 $\log_3 a=27$ 로 $a=3^{27}$ 이 된다. 세 칸짜리 계단이고 수치가 모두 구체적이다.
    확인체크 ★2 출발 · 통찰 1개(RT d2) · M_total 6 → ★2 유지. 98-e7 과 골조는 같지만 미지수가 하나뿐이라 한 단 아래로 둔다.
  tier: star_2
  mechanism_primary: '$1 \to 3 \to 27$ 로 두 곡선 사이를 오가며 좌표 교환 → $\log_3 a=27$ → $a=3^{27}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3^{27}$'
  answer_source: "답지"
  figure: "crop:fig-98-228.png"
  latex: latex-bank/gn-alg/items/98-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($3 \to 2$)과 계단 칸 수를 교체. 제약: 답이 $a=3^{27}$ 처럼 거듭제곱의 거듭제곱으로 커지므로 칸 수를 늘리면 표기가 감당이 안 된다. 그림의 시작점($y$절편 1)은 고정한다.'
    creative: '(1) 마지막에 $\log_3 a$ 의 값을 묻게 하면 표기가 가벼워져 ★2 (2) 계단의 중간 값을 미지수로 두면 역방향 추적 ★3 (3) 직선 $y=x$ 를 추가해 98-e7 꼴로 바꾸면 ★3.'
```

```yaml
- id: GN-ALG-98-229
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\log_2 x$, $y=\log_4 x$ 의 그래프와 직선 $x=k$ 의 교점을 $\mathrm{A}$, $\mathrm{B}$ 라 할 때 $\overline{\mathrm{AB}}=2$ 를 만족시키는 상수 $k$ ($k>1$).
  category: '세로 선분의 길이 = 두 함숫값의 차 → 밑 변환으로 한 문자 식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 그래프 위 두 점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=k$ 위의 두 점이므로 $\overline{\mathrm{AB}}=\log_2 k-\log_4 k$ 이고, 밑 변환으로 $\log_4 k=\frac{1}{2}\log_2 k$ 를 넣으면 $\frac{1}{2}\log_2 k=2$ 한 줄이 된다.
    확인체크 ★2 출발 · 통찰 0(세로 선분을 함숫값 차로 보는 것은 표준) · M_total 6 → ★2 유지. $k>1$ 조건이 부호를 확정해 준다.
  tier: star_2
  mechanism_primary: '$\overline{\mathrm{AB}}=\log_2 k-\log_4 k=\frac{1}{2}\log_2 k=2$ → $k=16$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: "crop:fig-98-229.png"
  latex: latex-bank/gn-alg/items/98-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑($2,4 \to 3,9$)과 선분 길이($2 \to 3$)를 교체. 제약: 두 밑이 거듭제곱 관계여야 밑 변환 뒤 계수가 간단한 분수가 되고 $k$ 가 정수로 떨어진다.'
    creative: '(1) $k$ 를 주고 $\overline{\mathrm{AB}}$ 를 묻는 정방향이면 ★2 (2) 세 곡선으로 늘려 두 선분의 비를 주면 ★3(102-244 꼴) (3) 직선 $x=k$ 대신 $y=k$ 로 바꾸면 가로 선분이 되어 지수 계산으로 옮겨 감 ★3.'
```

```yaml
- id: GN-ALG-99-e8
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림의 두 곡선 $y=\log_2 x$, $y=\log_2 (x+4)$ 와 $x$축에 평행한 두 직선 $\mathrm{AB}$, $\mathrm{CD}$ 로 둘러싸인 부분의 넓이.
  category: '두 곡선이 $x$축 방향 평행이동 관계 → 둘러싸인 부분을 직사각형으로 환원'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '곡선 사이 영역을 적분 없이 다루기 위해 한 곡선을 $x$축 방향으로 $4$ 만큼 옮기면 겹치므로, 둘러싸인 부분이 가로 $4$ 인 직사각형과 같은 넓이임을 도형으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수의 그래프와 도형의 넓이 — 평행이동 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=\log_2(x+4)$ 는 $y=\log_2 x$ 를 왼쪽으로 $4$ 옮긴 것이라 같은 높이에서 두 곡선의 가로 간격이 항상 $4$ 다. 따라서 둘러싸인 부분은 가로 $4$·세로 (두 직선의 높이 차)인 직사각형으로 옮겨진다.
    필수 예제 ★2 출발 · 통찰 1개(RT d2) · M_total 5 → ★2 유지. 이 단원 넓이 문항 전부(99-230·99-231·102-245)의 원형이다.
  tier: star_2
  mechanism_primary: '두 곡선의 가로 간격이 항상 $4$ → 둘러싸인 부분 = 가로 $4$ × 두 직선의 높이 차'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: "crop:fig-99-e8.png"
  latex: latex-bank/gn-alg/items/99-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평행이동량($+4$)과 두 직선의 높이 차를 교체. 제약: 두 곡선의 밑이 같아야 평행이동 관계가 성립하고, 넓이 = (이동량)×(높이 차) 가 유리수로 떨어지게 잡는다.'
    creative: '(1) 세로 평행이동판($y=\log_2 x+k$)으로 바꾸면 가로·세로가 뒤바뀐 같은 골조 ★2(99-230 꼴) (2) 넓이를 주고 이동량을 묻는 역방향 ★3 (3) 밑이 다른 두 곡선으로 두면 평행이동 관계가 깨져 골조 자체가 바뀜 ★4.'
```

```yaml
- id: GN-ALG-99-230
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림의 두 곡선 $y=\log_3 x$, $y=\log_3 x+1$ 과 두 직선 $x=3$, $x=4$ 로 둘러싸인 부분의 넓이.
  category: '$y$축 방향 평행이동 관계 → 직사각형으로 환원'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 곡선의 세로 간격이 어디서나 $1$ 로 일정하므로 둘러싸인 부분을 가로 $1$·세로 $1$ 인 직사각형으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수의 그래프와 도형의 넓이 — 평행이동 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세로 간격이 상수 $1$ 이고 가로 폭이 $4-3=1$ 이므로 넓이는 곱으로 끝난다. 99-e8 의 세로판이며 계산이라 할 것이 없다.
    확인체크 ★2 출발 · 통찰 1개(RT d1) · M_total 4 → ★2 유지. [분류 이슈] 노동량만 보면 ★1 후보다.
  tier: star_2
  mechanism_primary: '세로 간격 $1$ × 가로 폭 $(4-3)$ → 넓이 $1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-99-230.png"
  latex: latex-bank/gn-alg/items/99-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세로 이동량($+1 \to +2$)과 두 직선의 간격($x=3$, $x=4$)을 교체. 제약: 두 곡선의 밑이 같아야 하고, 직선의 $x$값은 정의역 안(양수)이어야 한다.'
    creative: '(1) $y=\log_3 x$ 와 $y=\log_3 9x$ 로 주면 세로 간격이 $2$ 임을 먼저 보아야 해 ★3 (2) 넓이를 주고 이동량을 묻는 역방향 ★3 (3) 가로 경계를 곡선으로 바꾸면 단원을 벗어남.'
```

```yaml
- id: GN-ALG-99-231
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림의 두 곡선 $y=\log_2 (x+1)$, $y=\log_2 (x+1)+2$ 와 두 직선 $x=0$, $x=3$ 으로 둘러싸인 부분의 넓이.
  category: '$y$축 방향 평행이동 관계 → 직사각형으로 환원'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 곡선의 세로 간격이 어디서나 $2$ 로 일정하므로 둘러싸인 부분을 가로 $3$·세로 $2$ 인 직사각형으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수의 그래프와 도형의 넓이 — 평행이동 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수가 $x+1$ 로 같아 두 곡선의 세로 간격은 상수 $2$ 이고 가로 폭은 $3$ 이다. 진수의 $+1$ 은 넓이에 영향을 주지 않는다는 점만 확인하면 된다.
    확인체크 ★2 출발 · 통찰 1개(RT d1) · M_total 4 → ★2 유지. 99-230 과 같은 골조에 가로 폭만 커졌다.
  tier: star_2
  mechanism_primary: '세로 간격 $2$ × 가로 폭 $(3-0)$ → 넓이 $6$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-99-231.png"
  latex: latex-bank/gn-alg/items/99-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세로 이동량($+2$)·가로 경계($x=0$, $x=3$)·진수의 이동($x+1$)을 교체. 제약: $x=0$ 이 정의역 안에 들어가려면 진수가 $x+k\ (k>0)$ 꼴이어야 한다.'
    creative: '(1) 진수를 $2(x+1)$ 로 바꾸면 세로 간격을 계산으로 구해야 해 ★3 (2) 넓이가 주어졌을 때 가로 경계를 묻는 역방향 ★3 (3) 두 곡선 사이에 세 번째 곡선을 끼워 두 영역의 넓이 비를 묻게 하면 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-100-232
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    $f(x)=\log_3 x+k\log_x 81$ 에서 $f(27)=f(9)$ 일 때 상수 $k$ 의 값.
  category: '밑변환으로 $\log_x 81$ 정리 → 두 함숫값 대입 → $k$ 에 대한 일차방정식'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑변환을 이용한 로그함수 함숫값 조건 — 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_{27}81=\frac43$, $\log_9 81=2$ 로 밑을 바꾼 뒤 $f(27)$, $f(9)$ 를 각각 $k$ 의 일차식으로 쓰고 같다고 놓으면 끝난다. 밑변환 공식 적용은 이 단원의 표준 절차라 통찰로 세지 않았다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지(M_total 이 $6$ 이라 하향 후보는 아니다).
  tier: star_2
  mechanism_primary: '$\log_x 81$ 밑변환 → $f(27)=3+\frac43 k$, $f(9)=2+2k$ → 일차방정식 → $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/100-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수 $81$ 과 대입하는 두 값 $27$·$9$ 를 같은 밑 $3$ 의 거듭제곱으로 교체($243$·$3$ 등). 제약: 두 대입값이 서로 달라야 $k$ 가 결정되고, 정리했을 때 $k$ 의 계수가 $0$ 이 되지 않게 잡아야 한다.'
    creative: '(1) 밑을 $2$ 로 바꾸고 진수를 $2$ 의 거듭제곱으로 두기($\log_2 x+k\log_x 64$) — 같은 골조 ★2 (2) $f(a)=f(b)$ 가 성립할 $a$, $b$ 의 관계를 묻게 하면 역방향이 되어 I-BW ★3 (3) $k$ 를 고정하고 $x>1$ 에서 $f(x)$ 의 최솟값을 묻게 하면 산술·기하 평균이 들어와 단원을 넘어 ★4.'
```

```yaml
- id: GN-ALG-100-233
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    그림과 같은 $y=\log_2 (x-a)+b$ 의 그래프에서 상수 $a$, $b$ 에 대한 $ab$ 의 값.
  category: '그림의 점근선 $x=-2$ → $a$ · 원점 통과 → $b$'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그림에서 읽을 수 있는 것이 점근선과 통과점뿐임을 보고, 두 기하 정보를 각각 평행이동량 $a$ 와 세로 이동량 $b$ 로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 점근선·통과점 읽어 평행이동한 로그함수의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선이 $x=-2$ 이므로 $a=-2$ 고, 그래프가 원점을 지나므로 $0=\log_2 2+b$ 에서 $b=-1$ 이다. 읽을 정보가 둘뿐이라 계산은 각각 한 줄이다.
    STEP 1 ★2 출발 · 통찰 1개(RT d1) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '점근선 $x=-2$ → $a=-2$ → 원점 대입 $0=1+b$ → $b=-1$ → $ab=2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-100-233.png"
  latex: latex-bank/gn-alg/items/100-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점근선 위치($-2$)와 통과점(원점)을 교체. 제약: 통과점의 $x$ 좌표가 점근선보다 커야 하고 진수가 $2$ 의 거듭제곱이 되게 잡아야 $b$ 가 정수로 떨어진다. 그림의 $-2$·O 라벨을 같이 고친다.'
    creative: '(1) 밑을 $\frac12$ 로 바꿔 감소 그래프로 두면 같은 골조 ★2 (2) 점근선 대신 두 통과점을 주면 연립이 되어 ★3(101-239 꼴) (3) $x$ 절편·$y$ 절편을 함께 주고 밑까지 미정으로 두면 ★3.'
```

```yaml
- id: GN-ALG-100-234
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    $y=\log_3 (x-5)+2$ 에 대한 설명 ①~⑤ 중 옳지 않은 것 고르기. 5지선다.
  category: '정의역·치역·평행이동·증감 확인 → 역함수 식을 직접 구해 ③ 판정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 성질 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②④⑤ 는 $y=\log_3 x$ 를 $x$ 축 방향 $5$·$y$ 축 방향 $2$ 만큼 옮긴 그래프의 성질 그대로다. ③ 만 역함수를 실제로 구해야 하는데 $x-5=3^{y-2}$ 에서 $y=3^{x-2}+5$ 이므로 지수의 부호가 다르다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 5 → 1단 하향 후보지만 선택지 다섯 개를 모두 점검해야 해 ★2 유지. [분류 이슈] ★1 후보와 경계.
  tier: star_2
  mechanism_primary: '평행이동 성질로 ①②④⑤ 확인 → 역함수 $y=3^{x-2}+5$ 계산 → ③ 이 틀림'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/100-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $3$ 과 이동량 $5$·$2$ 를 교체. 제약: 정의역 경계와 역함수 식의 상수항이 같은 수여야 하고, 오답 선택지는 부호나 이동 방향 하나만 틀리게 둔다.'
    creative: '(1) 옳은 것을 고르게 뒤집기(★2) (2) 밑을 $0<a<1$ 로 두어 증감 진술을 함정으로 쓰면 T-부호가 늘어 ★3 (3) 역함수의 정의역·치역까지 선택지에 넣으면 ★3.'
```

```yaml
- id: GN-ALG-100-235
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    $y=\log_a (x+b)-2$ 의 역함수 $f(x)$ 의 그래프가 그림과 같을 때 $ab$ 의 값($a$, $b$ 는 상수).
  category: '역함수 식 $f(x)=a^{x+2}-b$ → 그림의 점근선 $y=-2$ 로 $b$ · 통과점 $(0,\,1)$ 로 $a$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 그래프가 원함수가 아니라 역함수라는 점을 보고, 역함수 그래프의 점근선·통과점을 원함수의 미정계수 조건으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프에서 원함수의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=\log_a(x+b)-2$ 를 $x$ 에 대해 풀면 $f(x)=a^{x+2}-b$ 다. 그림의 점근선이 $y=-2$ 이므로 $b=2$, 통과점 $(0,\,1)$ 에서 $a^2-2=1$ 이므로 $a=\sqrt3$.
    STEP 1 ★2 출발 · 통찰 1개(RT d2) · M_total 7 → ★2 유지. [분류 이슈] 역함수 전환이 한 겹 더 있어 노동량은 STEP 2 급이다.
  tier: star_2
  mechanism_primary: '역함수 $f(x)=a^{x+2}-b$ → 점근선 $y=-2$ 로 $b=2$ → $(0,\,1)$ 대입 $a^2=3$ → $ab=2\sqrt3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-100-235.png"
  latex: latex-bank/gn-alg/items/100-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세로 이동량($-2$)과 통과점의 $y$ 좌표($1$)를 교체. 제약: $a>0$·$a\ne 1$ 이 되도록 $a$ 의 거듭제곱이 양수로 떨어져야 하고, 그림의 점근선·눈금 라벨을 같이 고쳐야 한다.'
    creative: '(1) 역함수 대신 원함수 그래프를 직접 주면 ★2 로 내려간다(100-233 꼴) (2) 통과점 하나 대신 두 점을 주면 연립이 되어 ★3 (3) $0<a<1$ 조건을 붙이고 역함수 그래프의 개형을 고르게 하면 ★3.'
```

```yaml
- id: GN-ALG-100-236
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "STEP 1"
  summary: |
    그림의 두 곡선 $y=2^x$, $y=\log_2 x$ 와 좌표축에 평행한 점선으로 이어진 점 $\mathrm{D}$ 의 $y$ 좌표.
  category: '$y=1$ 에서 출발해 두 곡선 사이를 번갈아 옮기는 계단 대응'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '점선이 한 곡선의 $y$ 좌표를 다른 곡선의 $x$ 좌표로 넘기는 장치임을 읽어, 그림의 계단을 $\log$ 와 지수의 교대 대입으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그 그래프의 계단 대응"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=1$ 인 점 $\mathrm{A}$ 는 $x=2$, 그 위의 $\mathrm{B}$ 는 $(2,\,4)$, 같은 높이에서 $\log_2 x=4$ 인 $\mathrm{C}$ 는 $x=16$, 그 위의 $\mathrm{D}$ 가 $2^{16}$ 이다. 네 번 옮기는 동안 계산은 매번 한 줄이다.
    STEP 1 ★2 출발 · 통찰 1개(RT d2) · M_total 4 → ★2 유지. 98-228·98-229 와 같은 계단 골조다.
  tier: star_2
  mechanism_primary: '$\mathrm{A}(2,\,1)$ → $\mathrm{B}(2,\,4)$ → $\mathrm{C}(16,\,4)$ → $\mathrm{D}$ 의 $y$ 좌표 $2^{16}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2^{16}$'
  answer_source: "답지"
  figure: "crop:fig-100-236.png"
  latex: latex-bank/gn-alg/items/100-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '출발 높이($1$)와 밑($2$)을 교체. 제약: 계단을 한 칸 옮길 때마다 지수가 제곱으로 커지므로 칸 수를 늘리면 답이 급격히 커진다. 그림의 눈금 $1$ 라벨을 같이 고친다.'
    creative: '(1) 계단을 한 칸 줄여 $\mathrm{C}$ 의 $x$ 좌표를 묻기(★2) (2) 끝점의 좌표를 주고 출발 높이를 묻는 역방향 ★3 (3) 두 곡선을 $y=3^x$ 와 $y=\log_2 x$ 로 밑을 다르게 두면 계단이 닫히지 않아 골조 자체가 바뀌며 ★4.'
```

```yaml
- id: GN-ALG-101-237
  page: 101
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "STEP 1"
  summary: |
    두 곡선 $y=\log_2 x$, $y=\log_a x\ (0<a<1)$ 이 $x$ 축 위의 점 $\mathrm{A}$ 에서 만나고 직선 $x=4$ 가 두 곡선과 만나는 점이 각각 $\mathrm{B}$, $\mathrm{C}$ 일 때, 삼각형 $\mathrm{ABC}$ 의 넓이가 $\frac92$ 인 상수 $a$. 5지선다.
  category: '두 곡선의 공통점 $\mathrm{A}(1,\,0)$ → 밑변 $\overline{\mathrm{BC}}$ 를 로그로 표현 → 넓이 조건 → $a$'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '삼각형의 넓이 조건을 밑변 $2-\log_a 4$ · 높이 $3$ 의 관계로 옮겨 $\log_a 4$ 에 대한 방정식으로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그함수의 그래프와 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 로그함수는 밑에 관계없이 $(1,\,0)$ 을 지나므로 $\mathrm{A}(1,\,0)$ 이고 높이는 $4-1=3$ 이다. $\mathrm{B}(4,\,2)$, $\mathrm{C}(4,\,\log_a 4)$ 이며 $0<a<1$ 이라 $\log_a 4<0$ 이므로 밑변은 $2-\log_a 4$ 다(부호를 놓치면 밑변이 뒤집힌다).
    STEP 1 ★2 출발 · tag 「교육청 기출」+1 · 통찰 1개(RT d2) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: '$\mathrm{A}(1,\,0)$ → 밑변 $2-\log_a 4$ · 높이 $3$ → $\frac12\cdot 3(2-\log_a 4)=\frac92$ → $\log_a 4=-1$ → $a=\frac14$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-101-237.png"
  latex: latex-bank/gn-alg/items/101-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선의 위치($x=4$)와 넓이($\frac92$)를 교체. 제약: 높이는 (직선의 $x$ 좌표)$-1$ 이고 밑변이 양수여야 하며, $\log_a 4$ 가 정수로 떨어지게 넓이를 잡아야 선택지가 간단한 분수가 된다.'
    creative: '(1) $a>1$ 로 두면 $\mathrm{C}$ 가 $x$ 축 위쪽이라 밑변이 두 로그의 차가 되는 같은 골조 ★3 (2) 넓이 대신 $\overline{\mathrm{BC}}$ 의 길이를 주면 ★2 (3) 직선 $x=k$ 를 미정으로 두고 넓이의 최솟값을 묻게 하면 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-101-238
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    보기 ㄱ~ㄹ 중 $y=\log_2 x$ 의 그래프를 평행이동 또는 대칭이동하여 겹쳐질 수 있는 것만 모두 고르기.
  category: '각 보기를 $\pm\log_2 x+c$ 꼴 또는 $y=x$ 대칭 꼴로 정리 → 계수가 바뀐 것만 제외'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄱ·ㄹ 을 밑변환과 로그 성질로 $-\log_2 x+c$ 꼴까지 고쳐 $x$ 축 대칭 뒤 평행이동임을 확인'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄷ 의 지수함수를 직선 $y=x$ 에 대한 대칭(역함수 관계)으로 로그함수와 연결'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "로그함수 그래프의 평행·대칭이동으로 겹쳐지는 그래프 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 $-\log_2 x-2$, ㄹ 은 $-\log_2 x$ 라 $x$ 축 대칭 뒤 평행이동이면 겹친다. ㄷ 은 $y=x$ 대칭으로 $y=2^x$ 와 겹치고 다시 평행이동하면 된다. ㄴ 만 $\frac12\log_2 x$ 라 세로로 줄어들어 어떤 이동으로도 겹치지 않는다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · RT d2) · M_total 5 → ★3 유지. 「이동으로 겹치지 않는 것은 상수배가 바뀐 것뿐」이 판정 기준이다.
  tier: star_3
  mechanism_primary: '각 보기를 $\pm\log_2 x+c$ 또는 $y=x$ 대칭 꼴로 정리 → 계수가 $\frac12$ 로 바뀐 ㄴ 만 제외'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/101-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '보기의 밑($\frac12$·$2$)과 진수($4x$·$\sqrt x$·$\frac1x$)를 교체. 제약: 「겹치지 않는」 보기는 반드시 $\log_2 x$ 의 상수배 꼴이어야 하고, 나머지는 $\pm\log_2 x+c$ 로 정리돼야 한다.'
    creative: '(1) 지수함수 보기를 빼면 $y=x$ 대칭 통찰이 사라져 ★2 (2) 겹칠 때의 이동량까지 쓰게 하면 ★3 유지에 계산만 증가 (3) 밑이 다른 $\log_3 x$ 보기를 넣어 상수배 관계까지 따지게 하면 ★4.'
```

```yaml
- id: GN-ALG-101-239
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    $y=\log_2 x+1$ 을 $x$ 축 방향 $a$, $y$ 축 방향 $b$ 만큼 평행이동한 $y=f(x)$ 의 그래프가 두 점 $(7,\,0)$, $(11,\,1)$ 을 지날 때 $a+b$ 의 값.
  category: '두 점 대입 → 두 식을 빼서 $b$ 소거 → 진수의 비로 $a$ → 되돌려 $b$'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '미지수 둘이 든 두 통과점 조건을 각각 풀지 않고 변끼리 빼서 $b$ 를 소거해 $\log_2\frac{11-a}{7-a}=1$ 한 식으로 통합'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동한 로그함수가 두 점을 지날 조건 — 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(x)=\log_2(x-a)+1+b$ 에 두 점을 넣으면 미지수가 둘인 식이 두 개다. 빼면 $b$ 가 사라지고 $\frac{11-a}{7-a}=2$ 에서 $a=3$, 되돌리면 $b=-3$ 이다.
    STEP 2 ★3 출발 · 통찰 1개(CON d2) · M_total 6 → ★3 유지. 두 식을 빼서 소거한다는 착안이 이 문항의 전부다.
  tier: star_3
  mechanism_primary: '두 점 대입 → 두 식의 차로 $b$ 소거 → $\frac{11-a}{7-a}=2$ → $a=3$ → $b=-3$ → $a+b=0$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/101-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 통과점 $(7,\,0)$·$(11,\,1)$ 의 좌표를 교체. 제약: 두 점의 $y$ 좌표 차가 $1$ 이면 진수의 비가 밑과 같아져 일차방정식이 되고, 두 $x$ 좌표가 모두 $a$ 보다 커야 정의역 안이다.'
    creative: '(1) $y$ 좌표 차를 $2$ 로 두면 비가 $4$ 가 되는 같은 골조 ★3 (2) 세 점을 주고 모순 없는 조합을 찾게 하면 검증이 강제되어 I-VF ★4 (3) 평행이동 대신 대칭이동을 섞으면 부호 함정이 늘어 ★4.'
```

```yaml
- id: GN-ALG-101-240
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    $1<a<2$ 일 때 $A=\log_2 a$, $B=\log_2 \frac1a$, $C=\log_a 2$ 의 대소 비교.
  category: '$t=\log_2 a$ 로 세 수를 통일 → $0<t<1$ 에서 $-t$, $t$, $\frac1t$ 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '밑이 다른 $\log_a 2$ 를 밑변환으로 $\frac1{\log_2 a}$ 로 바꿔 세 수를 한 변수 $t$ 의 식으로 통합'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그함수를 이용한 대소 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $1<a<2$ 에서 $t=\log_2 a$ 는 $0<t<1$ 이다. $B=-t<0<t=A$ 이고 $C=\frac1t>1>t$ 이므로 $B<A<C$.
    STEP 2 ★3 출발 · 통찰 1개(EQV d2) · M_total 6 → ★3 유지. 밑변환으로 변수를 하나로 줄이지 않으면 세 수의 비교가 흩어진다.
  tier: star_3
  mechanism_primary: '$t=\log_2 a\in(0,\,1)$ → $A=t$, $B=-t$, $C=\frac1t$ → $-t<t<\frac1t$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$B<A<C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/101-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$ 의 범위($1<a<2$)와 세 수의 밑·진수를 교체. 제약: 범위가 $t$ 의 부호와 $1$ 과의 대소를 정하므로 $0<t<1$ 이 깨지면 답의 순서가 통째로 바뀐다.'
    creative: '(1) $0<a<1$ 로 범위를 뒤집으면 순서가 달라지는 같은 골조 ★3 (2) 네 번째 수 $\log_a \frac12$ 를 추가하면 ★4 (3) 구체적 범위 없이 $a>1$ 만 주고 경우를 나누게 하면 I-MI 가 붙어 ★4.'
```

```yaml
- id: GN-ALG-101-241
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    한 변의 길이가 $4$ 인 정사각형 $\mathrm{ABCD}$ 에서 $\mathrm{D}$, $\mathrm{E}$ 가 곡선 $y=\log_2 x$ 위의 점이고 $\mathrm{B}$, $\mathrm{C}$ 가 $x$ 축 위의 점일 때 $\overline{\mathrm{BE}}$ 의 길이. 5지선다.
  category: '$\mathrm{D}$ 의 $y$ 좌표 $4$ → $\mathrm{D}$ 의 $x$ 좌표 → $\mathrm{B}$ 의 $x$ 좌표 → $\mathrm{E}$ 의 $y$ 좌표'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정사각형의 변 길이 $4$ 를 두 점의 좌표 차로 옮겨 곡선 위 점 $\mathrm{D}$ 의 $x$ 좌표를 확정하고, 다시 $\mathrm{E}$ 의 좌표로 넘김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그함수의 그래프와 정사각형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{B}$, $\mathrm{C}$ 가 $x$ 축 위이므로 $\mathrm{D}$ 의 $y$ 좌표는 $4$, 즉 $\log_2 x=4$ 에서 $\mathrm{D}$ 의 $x$ 좌표는 $16$ 이다. 변의 길이가 $4$ 라 $\mathrm{B}$ 의 $x$ 좌표는 $12$ 이고, $\mathrm{E}$ 는 같은 세로선 위의 곡선 위 점이므로 $\overline{\mathrm{BE}}=\log_2 12=2+\log_2 3$.
    STEP 2 ★3 출발 · 통찰 1개(RT d2) · M_total 4 → ★3 유지. 노동량은 가볍지만 「정사각형 조건 → 좌표」 전환이 핵심이다.
  tier: star_3
  mechanism_primary: '$\log_2 x=4$ → $\mathrm{D}(16,\,4)$ → $\mathrm{B}(12,\,0)$ → $\overline{\mathrm{BE}}=\log_2 12=2+\log_2 3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-101-241.png"
  latex: latex-bank/gn-alg/items/101-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정사각형의 한 변($4$)과 밑($2$)을 교체. 제약: 변의 길이와 $\mathrm{D}$ 의 $y$ 좌표가 같아야 그림이 성립하고, $\overline{\mathrm{BE}}$ 가 선택지로 쓸 만한 꼴($2+\log_2 3$ 등)로 떨어지게 잡는다. 그림의 점 라벨 배치는 고정한다.'
    creative: '(1) $\overline{\mathrm{BE}}$ 대신 사다리꼴 $\mathrm{BCDE}$ 의 넓이를 묻기 ★3 (2) 정사각형을 직사각형으로 바꾸고 가로·세로를 미정계수로 두면 ★4 (3) $\mathrm{E}$ 를 지나는 두 번째 곡선을 넣어 두 곡선의 관계를 쓰게 하면 ★4.'
```

```yaml
- id: GN-ALG-102-242
  page: 102
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    $y=g(x)$ 의 그래프가 $y=\log_2 (x-1)$ 의 그래프와 직선 $y=x$ 에 대하여 대칭이고, $y=g(x)$ 가 $\mathrm{P}(2,\,b)$ 를 $y=\log_2 (x-1)$ 이 $\mathrm{Q}(a,\,b)$ 를 지날 때 $a+b$ 의 값.
  category: '$y=x$ 대칭 → $g$ 는 역함수 $2^x+1$ → $b=g(2)$ → $b$ 를 로그식에 넣어 $a$'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「직선 $y=x$ 에 대하여 대칭」이라는 기하 조건을 역함수 식 $g(x)=2^x+1$ 로 옮겨 $b$ 를 직접 계산할 수 있게 만듦'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "y=x 대칭(역함수) 관계를 이용한 좌표 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y=\log_2(x-1)$ 을 $x$ 에 대해 풀면 $x=2^y+1$ 이므로 $g(x)=2^x+1$ 이고 $b=g(2)=5$ 다. $\mathrm{Q}$ 가 로그 곡선 위이므로 $\log_2(a-1)=5$ 에서 $a=33$.
    STEP 2 ★3 출발 · 통찰 1개(RT d2) · M_total 4 → ★3 유지. [분류 이슈] 노동량만 보면 STEP 1 급 ★2 후보다.
  tier: star_3
  mechanism_primary: '$y=x$ 대칭 → $g(x)=2^x+1$ → $b=5$ → $\log_2(a-1)=5$ → $a=33$ → $a+b=38$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$38$'
  answer_source: "답지"
  figure: "crop:fig-102-242.png"
  latex: latex-bank/gn-alg/items/102-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\mathrm{P}$ 의 $x$ 좌표($2$)와 진수의 이동량($-1$)을 교체. 제약: $b$ 가 정수로 떨어지게 $\mathrm{P}$ 의 $x$ 좌표를 정수로 두고, $a-1$ 이 $2$ 의 거듭제곱이 되게 한다.'
    creative: '(1) $\mathrm{Q}$ 의 좌표를 주고 $\mathrm{P}$ 를 묻는 역방향 ★3 (2) 대칭축을 $y=-x$ 로 바꾸면 부호 함정이 붙어 ★4 (3) $\mathrm{P}$, $\mathrm{Q}$ 사이의 거리를 묻게 하면 좌표 두 쌍을 모두 써야 해 ★4.'
```

```yaml
- id: GN-ALG-102-243
  page: 102
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "STEP 2"
  summary: |
    $y=\log_2 x$ 의 그래프와 두 점 $\mathrm{A}(2,\,0)$, $\mathrm{C}(16,\,0)$ 에 대하여 점 $\mathrm{E}$ 가 선분 $\mathrm{DF}$ 를 $1:2$ 로 내분할 때 점 $\mathrm{B}$ 의 $x$ 좌표.
  category: '$\mathrm{D}$·$\mathrm{F}$ 의 $y$ 좌표 = $\log_2 2$, $\log_2 16$ → 내분점으로 $\mathrm{E}$ 의 $y$ 좌표 → $\mathrm{B}$ 의 $x$ 좌표'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 축 위의 점과 $y$ 축 위의 점을 곡선이 짝지어 준다는 것을 읽어, 선분 위의 내분 조건을 로그값의 내분으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그함수의 그래프와 좌표 대응 — 내분점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{D}$, $\mathrm{F}$ 는 각각 $\mathrm{A}$, $\mathrm{C}$ 에 대응하는 $y$ 축 위의 점이라 $1$, $4$ 다. $\mathrm{E}$ 가 $\mathrm{DF}$ 를 $1:2$ 로 내분하므로 $\mathrm{E}$ 의 $y$ 좌표는 $2$ 이고, $\log_2 x=2$ 에서 $\mathrm{B}$ 의 $x$ 좌표는 $4$.
    STEP 2 ★3 출발 · 통찰 1개(RT d2) · M_total 4 → ★3 유지. [분류 이슈] 계산이 매 단계 한 줄이라 ★2 후보와 경계다.
  tier: star_3
  mechanism_primary: '$\mathrm{D}=1$, $\mathrm{F}=4$ → 내분 $1:2$ 로 $\mathrm{E}=2$ → $\log_2 x=2$ → $\mathrm{B}$ 의 $x$ 좌표 $4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-102-243.png"
  latex: latex-bank/gn-alg/items/102-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\mathrm{A}$·$\mathrm{C}$ 의 $x$ 좌표($2$·$16$)와 내분비($1:2$)를 교체. 제약: 두 $x$ 좌표는 $2$ 의 거듭제곱이어야 하고, 내분한 $y$ 좌표가 정수로 떨어지게 비를 잡아야 $\mathrm{B}$ 가 깔끔하다.'
    creative: '(1) 내분 대신 외분으로 바꾸면 범위 함정이 붙어 ★3 (2) $\mathrm{B}$ 를 주고 내분비를 묻는 역방향 ★3 (3) 세 $x$ 좌표가 등비수열을 이루면 로그값이 등차가 된다는 관계를 쓰게 하면 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-102-244
  page: 102
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    두 곡선 $y=\log_4 x$, $y=-\log_2 x$ 가 직선 $x=\alpha\ (0<\alpha<1)$ 와 만나는 점이 $\mathrm{P}$, $\mathrm{Q}$, 직선 $x=\beta\ (\beta>1)$ 와 만나는 점이 $\mathrm{R}$, $\mathrm{S}$ 일 때, $\overline{\mathrm{PR}}$ 의 중점의 $x$ 좌표가 $\frac94$ 이고 $\overline{\mathrm{PQ}}:\overline{\mathrm{RS}}=1:2$ 이면 $\beta-\alpha$ 의 값.
  category: '두 세로 선분을 $|\log_2 x|$ 의 상수배로 정리 → 길이 비로 $\beta=\alpha^{-2}$ → 중점 조건과 연립'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\log_4 x=\frac12\log_2 x$ 로 밑을 맞춰 두 선분 길이를 모두 $\frac32|\log_2 x|$ 하나로 정리하고, $0<\alpha<1$ 에서 부호가 뒤집히는 것까지 반영'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '길이 비에서 얻은 $\beta=\alpha^{-2}$ 와 중점 조건 $\alpha+\beta=\frac92$ 를 한 방정식으로 묶어 $\alpha$ 를 결정'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "두 로그 곡선 사이의 선분 길이 비와 중점 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\log_4 x=\frac12\log_2 x$ 이므로 같은 $x$ 에서 두 곡선의 세로 간격은 $\frac32|\log_2 x|$ 로 통일된다. 비 $1:2$ 는 $-\log_2\alpha:\log_2\beta=1:2$, 즉 $\beta=\alpha^{-2}$ 이고 중점 조건은 $\alpha+\beta=\frac92$ 다. 두 식에서 $\alpha=\frac12$, $\beta=4$.
    실력 UP ★4 출발 · 통찰 2개(EQV d2 · CON d2) · M_total 8 → ★4 유지. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 필요한데 해당이 없다.
  tier: star_4
  mechanism_primary: '세로 간격 $\frac32|\log_2 x|$ 로 통일 → 비 $1:2$ 로 $\beta=\alpha^{-2}$ → $\alpha+\beta=\frac92$ 연립 → $\beta-\alpha$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "답지"
  figure: "crop:fig-102-244.png"
  latex: latex-bank/gn-alg/items/102-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중점의 $x$ 좌표($\frac94$)와 길이 비($1:2$)를 교체. 제약: 비가 $1:k$ 면 $\beta=\alpha^{-k}$ 가 되므로 $\alpha+\beta$ 가 유리수 해를 갖도록 $\alpha$ 를 $\frac12$·$\frac13$ 같은 값으로 역산해 잡는다. $0<\alpha<1<\beta$ 는 고정.'
    creative: '(1) 두 곡선의 밑을 $8$ 과 $2$ 로 바꾸면 상수배만 달라지는 같은 골조 ★4 (2) 중점 조건 대신 $\overline{\mathrm{PR}}$ 의 길이를 주면 가로·세로를 함께 써야 해 ★5 후보 (3) $\overline{\mathrm{PQ}}+\overline{\mathrm{RS}}$ 의 최솟값을 묻게 하면 산술·기하 평균이 들어와 I-XU ★5.'
```

```yaml
- id: GN-ALG-102-245
  page: 102
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    두 곡선 $y=\log_2 5x$, $y=\log_2 x$ 가 직선 $y=a\ (a>0)$ 와 만나는 점이 $\mathrm{A}$, $\mathrm{B}$ 이고 $\mathrm{A}$, $\mathrm{B}$ 를 지나며 $y$ 축에 평행한 두 직선이 다른 곡선과 만나는 점이 $\mathrm{C}$, $\mathrm{D}$ 일 때, 두 직선과 두 곡선으로 둘러싸인 도형의 넓이가 $\log_2 125$ 이면 $2^a$ 의 값.
  category: '두 곡선이 세로 $\log_2 5$ 만큼의 평행이동 관계 → 둘러싸인 부분을 직사각형으로 환원 → 넓이 조건'
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\log_2 5x=\log_2 x+\log_2 5$ 이므로 두 곡선의 세로 간격이 항상 $\log_2 5$ 임을 보고, 둘러싸인 부분을 가로 $\overline{\mathrm{AB}}$·세로 $\log_2 5$ 인 직사각형으로 옮김'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '넓이 조건의 $\log_2 125$ 를 $3\log_2 5$ 로 고쳐 양변의 $\log_2 5$ 를 약분하고 $2^a$ 만 남김'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "로그함수의 그래프와 도형의 넓이 — 평행이동 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $y=a$ 위에서 $\mathrm{A}$ 의 $x$ 좌표는 $\frac{2^a}5$, $\mathrm{B}$ 의 $x$ 좌표는 $2^a$ 다. 두 곡선은 세로로 $\log_2 5$ 떨어진 평행이동 관계라 둘러싸인 부분은 가로 $2^a-\frac{2^a}5$·세로 $\log_2 5$ 인 직사각형과 넓이가 같다. 넓이 조건에서 $\frac45\cdot 2^a=3$.
    실력 UP ★4 출발 · 통찰 2개(RT d2 · EQV d2) · M_total 7 → ★4 유지. 99-e8·99-230·99-231 의 평행이동 환원 골조에 가로 폭까지 미지수로 둔 최종형이다.
  tier: star_4
  mechanism_primary: '세로 간격 $\log_2 5$ 고정 → 넓이 $=\left(2^a-\frac{2^a}5\right)\log_2 5=3\log_2 5$ → $2^a$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{15}{4}$'
  answer_source: "답지"
  figure: "crop:fig-102-245.png"
  latex: latex-bank/gn-alg/items/102-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 계수($5$)와 넓이($\log_2 125$)를 교체. 제약: 넓이는 (계수의 로그)의 정수배 꼴이어야 약분 뒤 $2^a$ 가 유리수로 남고, $a>0$ 이 유지되도록 배수를 잡는다.'
    creative: '(1) 세로 평행이동판($y=\log_2 x+c$)으로 바꾸면 가로·세로가 뒤바뀐 같은 골조 ★3 (2) $2^a$ 대신 $a$ 를 묻게 하면 로그 계산이 한 겹 늘어 ★4 (3) 밑이 다른 세 번째 곡선을 넣어 두 영역의 넓이 차를 묻게 하면 평행이동 관계가 깨져 ★5.'
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 5 · ★2 24 · ★3 8 · ★4 2 · ★5 0
- 통찰형 21 · 절차형 18 · premium 0
- 구역별 출발점과 결과: 개념원리 익히기 5문 전부 ★1 · 필수·발전 예제 20문(★2 19 · ★3 1) · STEP 1 6문(★2 5 · ★3 1) · STEP 2 6문 전부 ★3 · 실력 UP 2문 전부 ★4. 출발점에서 ±1 조정이 일어난 것은 101-237(교육청 기출 +1) 한 문항뿐이다.
- 통찰 유형 분포: I-RT 14 · I-EQV 8 · I-CON 2(101-239 · 102-244) · 나머지 0. I-SC·I-VF·I-SYM·I-XU 가 하나도 없어 이 범위에는 ★5 자격(저노출 유형) 문항이 없다.
- type_hint 상위: 「로그함수의 그래프와 도형의 넓이 — 평행이동 환원」 4 · 「로그함수를 이용한 대소 관계」 3 · 「로그함수의 성질 판정(보기형)」 3 · 「지수·로그 그래프의 계단 대응」 3(직선 $y=x$ 를 명시한 1문 포함) · 「지수함수와 로그함수의 역함수 구하기」 2 · 「평행·대칭이동한 로그함수의 그래프와 정의역·점근선」 2 · 「로그함수 그래프의 평행이동 — 진수의 계수 분리」 2
- 그림: 15문(`crop:fig-…` 15개). 그림 문항은 모두 계단 대응·도형의 넓이·좌표 읽기 세 골조에 몰려 있다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-95-220 | 확인체크 ★2 출발이나 통찰 0·M_total 5 → 하향 후보. 합성 + 음의 분수 지수 두 단계라 ★2 유지 | ★1 / ★2 |
| GN-ALG-99-230 | 통찰 1개(RT d1)지만 M_total 4 로 노동량만 보면 ★1 후보 | ★1 / ★2 |
| GN-ALG-100-234 | STEP 1 ★2 출발·통찰 0·M_total 5 → 하향 후보지만 선택지 5개 전수 점검 부담으로 ★2 유지 | ★1 / ★2 |
| GN-ALG-100-235 | STEP 1 라벨이나 역함수 전환이 한 겹 더 있어 M_total 7 로 STEP 2 급 | ★2 / ★3 |
| GN-ALG-102-242 | STEP 2 ★3 라벨이나 역함수 한 번 + 대입 한 번으로 M_total 4 | ★2 / ★3 |
| GN-ALG-102-243 | STEP 2 ★3 라벨이나 매 단계 계산이 한 줄이라 M_total 4 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **따로 세워야 할 유형**: ⑴ 「로그함수의 그래프와 도형의 넓이 — 평행이동 환원」(4문 · 99-e8 이 원형이고 99-230·99-231·102-245 가 변주). 세로 평행이동판과 가로 평행이동판이 같은 골조라 한 유형으로 묶되 base ★ 는 가로 폭이 미지수인지로 2↔4 를 가른다. ⑵ 「지수·로그 그래프의 계단 대응」(3문 · 98-228·98-229·100-236). ⑶ 「로그함수를 이용한 대소 관계」(3문 · 밑변환으로 한 변수로 줄이는 골조). 이 세 유형이 이 단원의 변별 장치 전부다.
- **통합해도 될 유형**: 「평행·대칭이동한 로그함수의 그래프와 정의역·점근선」과 「로그함수 그래프의 평행이동 — 진수의 계수 분리」는 모두 $\log_a(x-m)+n$ 꼴로 되돌리는 같은 절차라 한 유형의 하위 변주로 둘 수 있다. 「그래프에서 점근선·통과점 읽어 미정계수 결정」(100-233·100-235·101-239)도 읽는 대상이 원함수냐 역함수냐, 점이 하나냐 둘이냐만 다른 한 계열이다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 두었다. 특히 ★3 8문은 base ★ 가 2 로 잡히면 STEP 2 구역 전체가 한 단 내려간다. 분류 이슈 표의 여섯 문항이 재산정 1순위다.
