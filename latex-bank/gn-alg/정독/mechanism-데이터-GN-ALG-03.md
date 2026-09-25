---
name: mechanism-데이터-GN-ALG-03
description: 개념원리 대수 03 로그(1/1 · 31~32쪽 31-46~32-53 · 10문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 03 로그
  unit_code: ALG-03
  part: "1/1"
  extract_range: "31~32쪽 · 31-46~32-53"
  total_problems: 10
  unit_total: 10
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 03 로그 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 03단원 「로그」 전체(31~32쪽 · 31-46~32-53 · 10문항)를 다룬다. 구역은 두 개다. **개념원리 익히기**(통번호 31-46~31-50 · 개념 직후 확인 드릴 · level·tag 없음)가 5문항, **필수·발전 예제**(32-e1 「로그의 정의」 · 32-e2 「로그의 밑과 진수의 조건」 tag 「필수」와, 그 뒤에 붙는 tag 「확인체크」 문항 32-51~32-53)가 5문항이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기는 ★1, 필수 예제는 ★2 를 출발점으로 삼고 여기에 M_total·통찰로 ±1 을 조정했다(발전·특강·연습문제 STEP 1/2·실력 UP 은 이 범위에 없다).

단원 내용은 로그의 **정의**($a^x=N \iff x=\log_a N$)와 **밑·진수의 조건**($a>0,\ a\ne1,\ N>0$) 둘뿐이다. 그래서 골조는 「정의로 자리 옮기기」·「밑을 통일해 지수 읽기」·「밑 조건과 진수 조건을 모두 세워 교집합 잡기」 세 갈래로 반복되고, 열 문항 중 아홉이 통찰 라벨이 붙지 않는 절차형이다. 예외는 32-53 한 문항으로, 조건을 풀어 얻은 자연수 후보 가운데 밑 조건 $x-2\ne1$ 을 위배하는 값을 되돌려 기각해야 답이 맞으므로 I-VF(사후 검증 강제) 한 단계를 셌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-31-46
  page: 31
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $4^2=16$ · $10^{-3}=0.001$ · $4^0=1$ · $5^1=5$ · $5^{\frac{1}{2}}=\sqrt{5}$ · $(\sqrt{3})^4=9$ 를 각각 $x=\log_a N$ 꼴로 고치기.
  category: '로그의 정의 → 지수 등식을 로그 등식으로'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 지수 꼴을 로그 꼴로 고치기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $a^x=N \iff x=\log_a N$ 을 여섯 번 그대로 대입한다. 밑이 무리수인 ⑹ 나 지수가 분수인 ⑸ 도 밑·지수·진수의 자리만 확인하면 끝난다.
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 계산이라 할 것이 없어 정의 암기 확인용 드릴이다.
  tier: star_1
  mechanism_primary: '$a^x=N$ 에서 밑 $a$·지수 $x$·진수 $N$ 식별 → $x=\log_a N$ 으로 옮겨 적기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2=\log_4 16$ ⑵ $-3=\log_{10} 0.001$ ⑶ $0=\log_4 1$ ⑷ $1=\log_5 5$ ⑸ $\dfrac{1}{2}=\log_5 \sqrt{5}$ ⑹ $4=\log_{\sqrt{3}} 9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/31-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑·지수 조합 교체($2^5=32$ · $10^{-2}=0.01$ · $9^{\frac{1}{2}}=3$ · $(\sqrt{2})^6=8$). 제약: 밑은 $a>0,\ a\ne1$, 진수는 양수. 0 지수·음의 정수 지수·분수 지수·무리수 밑 사례를 각각 한 개 이상 남겨 정의 확인의 폭을 유지한다.'
    creative: '(1) 지수 등식과 로그 등식을 섞어 놓고 짝짓게 하기(골조 동일 ★1) (2) 로그 꼴로 고친 뒤 값까지 구하게 하면 두 단계 ★1~2 (3) 밑을 문자 $a$ 로 두고 성립 조건 $a>0,\ a\ne1$ 까지 답하게 하면 $M_a$ 상승 ★2.'
```

```yaml
- id: GN-ALG-31-47
  page: 31
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_3 81=4$ · $\log_{\sqrt{2}} 4=4$ · $\log_{\frac{1}{3}} \frac{1}{27}=3$ · $\log_5 1=0$ 을 각각 $a^x=N$ 꼴로 고치기.
  category: '로그의 정의 → 로그 등식을 지수 등식으로'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 로그 꼴을 지수 꼴로 고치기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    31-46 의 역방향. $x=\log_a N \iff a^x=N$ 에서 로그의 밑이 거듭제곱의 밑, 로그 값이 지수가 된다는 대응만 쓴다.
    밑이 무리수·분수인 ⑵⑶ 이 혼동 지점이지만 자리 대응 한 번으로 끝난다. 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$\log_a N=x$ 에서 밑 $a$ 는 그대로 밑, 로그 값 $x$ 는 지수로 → $a^x=N$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3^4=81$ ⑵ $(\sqrt{2})^4=4$ ⑶ $\left(\dfrac{1}{3}\right)^3=\dfrac{1}{27}$ ⑷ $5^0=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/31-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\log_2 32=5$ · $\log_{\sqrt{3}} 9=4$ · $\log_{\frac{1}{2}} \frac{1}{8}=3$ 처럼 밑과 로그 값을 교체. 제약: 밑 $a>0,\ a\ne1$ · 진수 양수이고, 등식이 실제로 참이 되도록 진수를 밑의 거듭제곱으로 맞춘다.'
    creative: '(1) 참·거짓 판정으로 바꿔 $\log_4 8=2$ 같은 거짓 등식을 섞기(★2 · 값 계산까지 필요) (2) 31-46 과 묶어 양방향 변환을 한 문항으로(★1) (3) $\log_a 8=3$ 처럼 밑을 미지수로 두면 역산이 들어가 ★2.'
```

```yaml
- id: GN-ALG-31-48
  page: 31
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_2 16$ · $\log_3 \frac{1}{81}$ · $\log_4 64$ · $\log_{\frac{1}{5}} 125$ 의 값 구하기.
  category: '진수를 밑의 거듭제곱으로 고치기 → 지수가 곧 로그 값'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 값 구하기 — 밑 통일 후 지수 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\log_a N=x$ 를 $a^x=N$ 으로 놓고 진수를 밑의 거듭제곱으로 고치면 지수가 답이다. ⑶ 은 $64=4^3$, ⑷ 는 $125=\left(\frac{1}{5}\right)^{-3}$ 로 밑이 분수일 때 지수의 부호가 뒤집히는 것이 유일한 함정.
    구역 ★1 출발 · 통찰 0 · M_total 4 → ★1. 밑을 통일하는 한 줄이 전부라 절차형.
  tier: star_1
  mechanism_primary: '$\log_a N=x \Rightarrow a^x=N$ → 진수를 밑의 거듭제곱으로 표현 → 지수 비교로 $x$ 확정'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $-4$ ⑶ $3$ ⑷ $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/31-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑·진수를 같은 소수의 거듭제곱 쌍으로 교체($\log_2 \frac{1}{32}$ · $\log_9 27$ · $\log_{\frac{1}{3}} 81$). 제약: 진수가 밑의 유리수 지수 거듭제곱이어야 답이 유리수로 떨어진다. 분수 밑·역수 진수 사례를 남겨 부호 함정을 유지한다.'
    creative: '(1) $\log_4 8$ 처럼 지수가 분수로 나오게 하면 $M_k$ 상승 ★2 (2) 네 값을 구한 뒤 대소 비교·합을 묻기(★2) (3) $\log_{\sqrt{2}} 8$ 처럼 밑을 무리수로 두면 밑 통일 단계가 하나 늘어 ★2.'
```

```yaml
- id: GN-ALG-31-49
  page: 31
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\log_3 N=-2$ · $\log_{\frac{1}{4}} N=3$ · $\log_2 N=1$ · $\log_6 N=0$ 을 만족시키는 진수 $N$ 구하기.
  category: '로그의 정의 → 진수를 거듭제곱으로 계산'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의로 진수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\log_a N=x \Rightarrow N=a^x$ 한 줄 대입. 음의 지수(⑴)와 분수 밑(⑵)에서 역수·거듭제곱 처리만 주의하고, ⑶⑷ 는 $a^1=a$·$a^0=1$ 확인이다.
    구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$\log_a N=x$ 를 $N=a^x$ 로 옮기고 밑의 거듭제곱을 계산'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{9}$ ⑵ $\dfrac{1}{64}$ ⑶ $2$ ⑷ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/31-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 로그 값을 교체($\log_2 N=-3$ · $\log_{\frac{1}{3}} N=2$ · $\log_{\sqrt{2}} N=4$). 제약: 밑 $a>0,\ a\ne1$ 이고 $N=a^x$ 가 자동으로 양수이므로 진수 조건은 따로 걸리지 않는다. 음의 지수·0 지수 사례를 한 개씩 남긴다.'
    creative: '(1) 밑을 미지수로 바꿔 $\log_x 16=4$ 형태로(밑 조건 확인이 붙어 ★2) (2) $\log_2 N=\frac{3}{2}$ 처럼 분수 지수로 두면 무리수 답 ★2 (3) 두 식을 주고 $N_1 N_2$ 를 묻는 32-52 형태로 확장하면 ★2.'
```

```yaml
- id: GN-ALG-31-50
  page: 31
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ $\log_2 (x+4)$ · $\log_{2x} 5$ 가 정의되도록 하는 실수 $x$ 의 값의 범위 구하기.
  category: '로그의 밑 조건·진수 조건 → 부등식 풀이'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 정의될 조건 — 밑과 진수의 범위"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 진수 조건 $x+4>0$ 하나, ⑵ 는 밑 조건 $2x>0$ 과 $2x\ne1$ 두 개를 모두 세워야 한다. 함정은 T-범위(진수·밑 양수)와 T-경계(밑에서 $1$ 만 제외)로 $M_t=2$.
    밑이 $1$ 이면 안 된다는 조건을 빠뜨리면 $x>0$ 으로 답해 틀린다. 구역 ★1 출발 · 통찰 0 · M_total 5 → 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: '로그가 정의될 조건(밑 $>0$·밑 $\ne1$·진수 $>0$)을 모두 세워 일차부등식으로 풀고 제외값을 빼기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x>-4$ ⑵ $0<x<\dfrac{1}{2}$ 또는 $x>\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/31-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수·밑의 일차식 계수를 교체($\log_3 (2x-6)$ · $\log_{3x-1} 7$ · $\log_{x+2} 5$). 제약: 밑 쪽은 $>0$ 과 $\ne1$ 두 부등식이 모두 살아 있어야 하고, 제외값이 부등식 구간 안에 들어오도록 상수를 잡는다.'
    creative: '(1) 밑과 진수에 모두 $x$ 를 넣으면 조건 세 개의 교집합이 되어 32-e2 급 ★2 (2) 진수를 이차식으로 바꾸면 이차부등식이 붙어 ★2 (3) 범위 안의 정수 개수·합을 묻게 하면 사후 필터가 생겨 ★2(32-53 골조).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-32-e1
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑹ $\log_{16} x=\frac{1}{2}$ · $\log_x 9=2$ · $\log_{\sqrt{2}} 16=x$ · $\log_{\frac{1}{4}} x^2=0$ · $\log_x 27=-\frac{3}{2}$ · $\log_4 (\log_{16} x)=-1$ 을 만족시키는 $x$ 구하기.
  category: '로그의 정의로 지수 등식 전환 → 밑·진수·로그 값 중 미지 자리 역산'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 밑·진수·로그 값 중 미지 자리 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모두 $a^x=N$ 으로 옮긴 뒤 미지수가 놓인 자리에 따라 거듭제곱(⑴⑷) · 거듭제곱근 역산(⑵⑸) · 지수 비교(⑶) 로 갈라진다. ⑹ 은 바깥 로그부터 안쪽으로 정의를 두 번 적용하는 중첩 꼴.
    함정은 ⑷ 의 진수가 $x^2$ 이라 음수 해 $-1$ 도 살아남는 T-부호와, 밑이 미지수인 ⑵⑸ 의 $x>0,\ x\ne1$ 확인(T-범위)으로 $M_t=2$. 갈래가 갈리지만 각 갈래가 표준 역산이라 통찰 라벨은 붙이지 않았다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '각 등식을 $a^x=N$ 으로 전환 → 미지 자리가 진수면 거듭제곱, 밑이면 유리수 지수 역산, 지수면 밑 통일 후 비교(중첩 로그는 바깥부터 두 번)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $3$ ⑶ $8$ ⑷ $\pm 1$ ⑸ $\dfrac{1}{9}$ ⑹ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/32-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑·진수·로그 값을 같은 소수 계열로 교체($\log_{27} x=\frac{2}{3}$ · $\log_x 25=2$ · $\log_{\sqrt{3}} 81=x$ · $\log_x 8=-\frac{3}{4}$ · $\log_3 (\log_9 x)=-1$). 제약: 밑이 미지수인 문항은 $x>0,\ x\ne1$ 을 만족하는 답만 남아야 하고, 중첩 로그는 안쪽 로그 값이 양수가 되도록 바깥 로그 값을 잡는다. ⑷ 처럼 진수가 $x^2$ 인 자리는 답이 $\pm$ 두 개로 유지되게 상수를 고른다.'
    creative: '(1) ⑷ 를 $\log_a x^2=0$ 에서 「모든 해의 곱」으로 물으면 부호 함정이 답에 직접 반영돼 ★2 (2) 중첩을 삼중으로 늘리면 32-51⑸ 골조 ★2 (3) 밑이 미지수인 등식에서 조건을 만족하는 $x$ 의 개수를 묻게 하면 기각 단계가 생겨 I-VF ★3 (4) 좌변을 $\log_x 27=k$ 로 두고 $k$ 가 정수가 되는 자연수 $x$ 를 찾게 하면 ★3.'
```

```yaml
- id: GN-ALG-32-e2
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $\log_4 (x-2)^2$ · $\log_{x-3} (-x^2+5x-4)$ 가 정의되도록 하는 실수 $x$ 의 값의 범위 구하기.
  category: '밑 조건·진수 조건을 모두 세워 이차부등식 풀고 교집합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 밑과 진수의 조건 — 이차식 진수·문자 밑"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 진수가 완전제곱이라 $(x-2)^2>0 \iff x\ne2$ 로, $x>2$ 로 답하기 쉬운 T-경계 함정. ⑵ 는 밑 조건 $x-3>0,\ x-3\ne1$ 과 진수 조건 $-x^2+5x-4>0 \Rightarrow 1<x<4$ 를 모두 세워 교집합을 잡으면 $3<x<4$ 이고 제외값 $x=4$ 는 구간 밖이라 저절로 사라진다.
    조건 나열과 교집합은 표준 절차로 보아 통찰 라벨을 붙이지 않았다(스키마 §2.2 I-CON 단순 교집합 제외). 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑 $>0$·밑 $\ne1$·진수 $>0$ 세 조건 나열 → 이차부등식 인수분해로 진수 구간 → 교집합과 제외값 정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x\ne 2$인 모든 실수 ⑵ $3<x<4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/32-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 완전제곱 중심과 ⑵ 의 밑 일차식·진수 이차식 계수를 교체($\log_3 (x+1)^2$ · $\log_{x-2}(-x^2+7x-10)$). 제약: 진수 이차식은 인수분해되어 유한 구간을 주어야 하고, 밑의 제외값($밑=1$ 이 되는 $x$)이 그 구간 안인지 밖인지를 의도적으로 정해 답의 꼴(구간 하나 또는 구간에서 한 점 제외)을 통제한다.'
    creative: '(1) 제외값이 진수 구간 **안**에 오게 계수를 잡으면 답이 「구간에서 한 점 제외」가 되어 T-경계 비중이 커지며 ★3 (2) 범위 안의 정수 개수·합을 묻게 하면 사후 필터가 붙어 32-53 골조 ★2~3 (3) 진수를 $x^2-2x+k$ 로 두고 항상 정의되도록 하는 $k$ 를 묻는 역방향으로 바꾸면 판별식이 들어와 I-BW ★3.'
```

```yaml
- id: GN-ALG-32-51
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑸ $\log_8 0.25=x$ · $\log_{0.1} 0.001=x$ · $\log_x 81=-\frac{4}{3}$ · $\log_{\frac{1}{\sqrt{2}}} x=-2$ · $\log_4 \{\log_3 (\log_2 x)\}=0$ 을 만족시키는 $x$ 구하기.
  category: '소수·무리수 밑을 거듭제곱으로 통일 → 지수 비교 또는 유리수 지수 역산'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의 — 소수·무리수 밑과 중첩 로그"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 소수를 $0.25=2^{-2}$·$0.001=10^{-3}$ 처럼 거듭제곱으로 바꿔 밑을 통일한 뒤 지수를 비교하고, ⑶⑷ 는 미지수가 밑·진수인 유리수 지수 역산이다. ⑸ 는 바깥부터 정의를 세 번 적용하는 삼중 중첩.
    32-e1 과 같은 골조를 소수·무리수 밑으로 옮긴 확인 문항이라 필수 예제와 같은 ★2 를 출발점으로 잡았다. 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '소수·무리수 밑과 진수를 같은 소수의 거듭제곱으로 통일 → 지수 비교, 미지 자리가 밑·진수면 유리수 지수로 역산(중첩은 바깥부터 차례로)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{2}{3}$ ⑵ $3$ ⑶ $\dfrac{1}{27}$ ⑷ $2$ ⑸ $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/32-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '소수·무리수 밑 조합을 교체($\log_{27} 0.\overline{3}$ 대신 $\log_9 0.2$ 같은 무리한 조합은 피하고 $\log_4 0.125$ · $\log_{0.2} 0.008$ · $\log_x 32=-\frac{5}{2}$ · $\log_{\frac{1}{\sqrt{3}}} x=-4$). 제약: 밑과 진수가 같은 소수의 거듭제곱이어야 지수가 유리수로 떨어지고, 밑이 미지수인 문항은 $x>0,\ x\ne1$ 을 만족해야 한다. 중첩은 안쪽 로그 값이 양수로 유지되도록 바깥 값을 잡는다.'
    creative: '(1) ⑸ 의 중첩에서 안쪽 밑을 미지수로 두면 조건 확인이 붙어 ★3 (2) 다섯 답의 곱·합을 묻게 하면 한 자리만 틀려도 답이 어긋나는 검산형 ★2 (3) $\log_8 0.25$ 를 $\log_2$ 로 바꿔 쓰는 밑변환 예고 문항으로 확장하면 다음 단원 연결 ★2~3.'
```

```yaml
- id: GN-ALG-32-52
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\log_a 27=-2$, $\log_{\sqrt{3}} b=3$ 일 때 $ab$ 의 값 구하기.
  category: '두 로그 등식을 지수 꼴로 역산 → 두 값의 곱'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의로 밑·진수를 구해 식의 값 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 식은 밑이 미지수라 $a^{-2}=27$ 에서 $a=3^{-\frac{3}{2}}$, 뒤 식은 진수가 미지수라 $b=(\sqrt{3})^3=3^{\frac{3}{2}}$. 두 수를 $3$ 의 거듭제곱으로 통일해 두면 지수의 합이 $0$ 이라 곱이 $1$ 로 떨어진다.
    각 로그를 따로 역산해 곱하는 표준 두 단계라 통찰 라벨은 없다. 무리수 지수 정리가 있어 $M_k=2$, M_total 6.
    [분류 이슈] tag 「확인체크」의 벤더 신호는 ★1 출발이지만 직전 필수 예제 ★2 의 확인 문항이고 유리수 지수 역산이 두 번이라 ★2 로 두었다(1단 차이 · 기록만).
  tier: star_2
  mechanism_primary: '$\log_a 27=-2 \Rightarrow a=3^{-\frac{3}{2}}$ · $\log_{\sqrt{3}} b=3 \Rightarrow b=3^{\frac{3}{2}}$ → 지수 합 $0$ 이므로 $ab=1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/32-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 로그 값과 진수를 교체($\log_a 16=-4$, $\log_{\sqrt{2}} b=6$ 등). 제약: 밑으로 구해지는 $a$ 는 $a>0,\ a\ne1$ 을 만족해야 하고, 두 수를 같은 소수의 거듭제곱으로 쓸 수 있어야 $ab$ 가 깔끔한 유리수가 된다. 지수의 합을 $0$ 으로 맞추면 답이 $1$ 로 고정된다.'
    creative: '(1) $ab$ 대신 $\frac{a}{b}$ 나 $a^2 b$ 를 묻기(같은 골조 ★2) (2) 세 로그 등식을 주고 $abc$ 를 묻게 하면 단계가 늘어 ★2~3 (3) $\log_a 27=-2$ 를 만족하는 $a$ 의 존재 조건을 함께 묻게 하면 밑 조건 검증이 붙어 ★3 (4) 답이 $1$ 인 구조를 숨기고 「지수의 합」을 묻는 형태로 바꾸면 I-SYM 계열 착안이 생겨 ★3.'
```

```yaml
- id: GN-ALG-32-53
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\log_{x-2} (-x^2+8x-7)$ 이 정의되도록 하는 모든 자연수 $x$ 의 값의 합 구하기.
  category: '밑 조건·진수 조건 → 공통 범위 → 자연수 후보 중 제외값 기각 후 합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '공통 범위에서 뽑은 자연수 후보 가운데 밑 조건 $x-2\ne1$ 을 위배하는 $x=3$ 을 되돌려 기각해야 함 — 이 필터를 빠뜨리면 합이 $18$ 로 틀린다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그가 정의될 조건을 만족하는 정수 해의 개수·합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 조건 $x-2>0,\ x-2\ne1$ 과 진수 조건 $-x^2+8x-7>0 \Rightarrow 1<x<7$ 을 합치면 $2<x<7$ 에서 $x\ne3$. 자연수 후보 $3,4,5,6$ 중 $x=3$ 을 기각해 $4+5+6$ 을 더한다.
    후보를 나열한 뒤 일부를 조건 위배로 기각하는 사후 필터가 답을 가르므로 I-VF d1 한 단계를 셌다(§2.2 — 검증을 빼면 틀린 답에 도달).
    확인체크지만 조건 세 개 통합 + 정수 필터라 ★2. 통찰 1개 · M_total 6 → ★2 유지(+1 은 통찰 2개 이상일 때).
    [분류 이슈] 마지막 기각 단계를 별도 통찰로 셀지, 밑 조건의 표준 확인으로 볼지는 경계 — 통찰형 라벨을 유지하되 기록만 한다.
  tier: star_2
  mechanism_primary: '밑 조건과 진수 이차부등식을 세워 $2<x<7,\ x\ne3$ → 자연수 후보 나열 → 제외값 기각 → 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/32-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 일차식과 진수 이차식을 교체($\log_{x-1}(-x^2+9x-14)$ 등). 제약: 진수 이차식은 인수분해되어 유한 구간을 주고, 밑이 $1$ 이 되는 제외값이 그 구간 **안의 자연수**여야 기각 단계가 살아 있다. 구간 안 자연수가 3~5개 정도여야 나열 부담이 적정하다.'
    creative: '(1) 합 대신 개수·최댓값을 묻기(골조 동일 ★2) (2) 제외값이 구간 밖으로 나가게 계수를 잡으면 기각 단계가 사라져 절차형 ★2 로 내려간다 (3) 진수를 삼차식이나 절댓값 식으로 바꾸면 구간이 둘로 갈려 I-MI 가 추가돼 ★3 (4) 「정의되도록 하는 자연수 $x$ 가 3개」가 되도록 상수를 정하는 역방향으로 바꾸면 I-BW ★3~4.'
```

## 표본 판정 요약 (10문)

- ★ 분포: ★1 5 · ★2 5 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(32-53 · I-VF d1) · 절차형 9 · premium 0
- 구역별: 개념원리 익히기 5문(전부 ★1) · 필수 예제 2문(★2) · 확인체크 3문(★2)
- M_total 분포: 4 (4문) · 5 (1문) · 6 (4문) · 7 (1문) — 이 단원은 노동량 자체가 가볍고, 변별은 조건 누락(밑 $\ne1$·진수 $>0$)에서만 생긴다
- type_hint 상위: 「로그의 정의로 미지 자리 구하기」 4(31-49 · 32-e1 · 32-51 · 32-52) · 「로그가 정의될 조건」 3(31-50 · 32-e2 · 32-53) · 「지수 꼴 ↔ 로그 꼴 변환」 2(31-46 · 31-47) · 「로그의 값 구하기(밑 통일)」 1(31-48)
- 함정 분포: T-범위 6문 · T-경계 4문 · T-부호 2문(31-48⑷ · 32-e1⑷)
- 그림: 0문 · 선택형 0문(전부 단답·서술 지시형)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-32-52 | tag 「확인체크」의 벤더 신호는 ★1 출발이나 직전 필수 예제(★2)의 확인 문항이고 유리수 지수 역산이 두 번이라 ★2 로 둠(1단 차이). 32-51·32-53 도 같은 근거로 ★2 | ★1 / ★2 |
| GN-ALG-32-53 | 자연수 후보 중 밑 조건 위배값을 기각하는 마지막 단계를 I-VF 통찰로 셀지, 밑 조건의 표준 확인으로 볼지 경계. 통찰형 라벨 유지 | ★2 (통찰형/절차형 경계) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint 는 사실상 두 축**이다. ① 로그의 정의(자리 바꾸기·값 구하기·미지 자리 역산) ② 로그가 정의될 조건(밑·진수 범위). 10문항이 모두 이 둘 안에 들어온다.
- **통합해도 되는 것**: 31-46(지수→로그)과 31-47(로그→지수)은 같은 정의의 양방향이라 한 유형으로 묶어도 된다. 31-48(값 구하기)·31-49(진수 구하기)·32-52(밑·진수 역산 후 식의 값)도 「정의 대입으로 한 자리 구하기」 하나로 묶을 수 있다.
- **따로 세워야 할 것**: ① **밑이 미지수**인 경우($\log_x 9=2$ · $\log_x 27=-\frac{3}{2}$) — $x>0,\ x\ne1$ 검증이 붙어 답 기각이 생긴다. ② **중첩 로그**($\log_4(\log_{16}x)=-1$ · 삼중 $\log_4\{\log_3(\log_2 x)\}=0$) — 안쪽 로그 값의 부호 조건이 별도 함정이다. ③ **정의될 조건을 만족하는 정수 해의 개수·합**(32-53) — 조건 통합 뒤 사후 필터가 붙어 위 두 축의 단순 합이 아니다.
- 이 범위에는 ★3 이상이 없다. 다음 단원(로그의 성질·밑의 변환)과 묶어야 ★3~4 슬롯이 생기므로, 카탈로그의 base ★ 는 03단원 단독이 아니라 로그 전체 범위에서 잡는 것이 맞다.
