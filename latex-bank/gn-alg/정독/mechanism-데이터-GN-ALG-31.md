---
name: mechanism-데이터-GN-ALG-31
description: 개념원리 대수 31 수열의 귀납적 정의(1/1 · 36문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 31 수열의 귀납적 정의
  unit_code: GN-ALG-31
  part: "1/1"
  extract_range: "284~291쪽 · 284-661~291-688"
  total_problems: 36
  unit_total: 36
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 확인체크 유제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 31 수열의 귀납적 정의 (1/1) 정독 데이터 (v1.0)

284~291쪽 36문항 전수. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 16문(필수 예제 e1~e8 8문 + 확인체크 유제 8문) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 7문 · 「연습문제 실력 UP」 3문이다. 벤더 난이도 신호가 다섯 층으로 다 살아 있어 익히기 ★1 · 필수 예제와 그 확인체크 유제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, 거기서 M_total 과 통찰 라벨로 ±1 만 조정했다.

이 단원은 (가) 점화식에 차례로 대입해 몇 번째 항을 구하는 층, (나) 점화식의 모양을 보고 등차·등비로 판정해 일반항을 쓰는 층, (다) $a_{n+1}=a_n+f(n)$ · $a_{n+1}=a_nf(n)$ 을 계차의 누적합·연쇄곱으로 닫는 층, (라) 역수·유리화·인수분해로 점화식의 표현을 바꾸거나 주기를 발견하는 층, (마) $S_n$ 관계식·실생활 상황·첨자 분해를 점화식으로 옮기는 활용 층으로 쌓인다. 판정에서는 (라)·(마) 의 표현 전환·주기 발견·역추적·근 기각만 통찰로 셌다. 반면 **점화식의 꼴로 등차·등비를 판정하는 일(등차중항 $2a_{n+1}=a_n+a_{n+2}$ · 등비중항 $a_{n+1}^2=a_na_{n+2}$ 포함)과 $a_n=S_n-S_{n-1}$ 을 쓰는 일은 이 단원이 공식으로 가르치는 표준 절차로 보아 통찰에서 제외**하고 Mₐ·Mₜ 로 흡수했다(같은 기준을 GN-ALG-26 등차·등비 단원에서 썼다). 시작 항 번호가 $n\ge2$ 로 밀리거나 조건 분기가 $n$ 의 홀짝인지 $a_n$ 의 크기인지 헷갈리는 문항은 Mₜ 를 2 로 올렸다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-284-661
  page: 284
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 귀납적으로 정의된 수열에서 제4항 구하기. 일차 점화식 $a_{n+1}=2a_n+3$, 제곱 점화식 $a_{n+1}=a_n^2-1$, 역수 점화식 $a_{n+1}=\dfrac{1}{a_n}$, 역수가 등차인 점화식, 이웃 두 항의 합 $a_{n+2}=a_n+a_{n+1}$ 다섯 가지를 한 문항에 모았다.
  category: "점화식에 $n=1,2,3$ 차례 대입 → 제$4$항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '귀납적으로 정의된 수열의 항 구하기(차례로 대입)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 소문항 모두 첫째항에서 출발해 $n$ 을 1, 2, 3 으로 올리며 대입하는 한 골조다. ⑷ 는 $a_n$ 대신 $\dfrac{1}{a_n}$ 을 밀어 올린 뒤 역수를 되돌리고, ⑸ 는 앞의 두 항을 함께 밀어 올릴 뿐이다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 5 → ★1 유지. 소문항 5개를 한 블록으로 묶어 Mₛ=2 로 매겼다.
  tier: star_1
  mechanism_primary: '$a_1$ 에서 출발 → $n=1,2,3$ 을 점화식에 차례 대입 → 제$4$항'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $37$ ⑵ $0$ ⑶ $\dfrac{1}{2}$ ⑷ $\dfrac{1}{9}$ ⑸ $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/284-661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 계수를 바꿀 수 있다(⑴ $a_1=1$, $a_{n+1}=3a_n-2$ · ⑵ $a_1=2$, $a_{n+1}=a_n^2-3$ · ⑷ $a_1=\dfrac{1}{2}$, $\dfrac{1}{a_{n+1}}=\dfrac{1}{a_n}+3$). 제약: 제4항까지만 묻는 문항이므로 네 번 대입해도 분모·제곱이 커지지 않게 값을 잡고, ⑶ 처럼 역수를 쓰는 소문항은 $a_1\ne0$ 을 지킨다.'
    creative: '(1) 제4항 대신 제5항·제6항을 묻기(★1 유지) (2) ⑶ 처럼 주기가 생기는 점화식에서 제100항을 묻기(주기 발견이 필요해 ★2) (3) 제4항의 값을 주고 $a_1$ 을 되묻는 역방향으로 바꾸기(★2 · I-BW) (4) 다섯 점화식 중 등차·등비인 것을 고르게 하면 판정 층으로 올라가 ★2.'
```

```yaml
- id: GN-ALG-284-662
  page: 284
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 귀납적으로 정의된 수열의 일반항 구하기. 계차가 상수인 꼴, 비가 상수인 꼴, 등차중항 꼴 $2a_{n+1}=a_n+a_{n+2}$, 등비중항 꼴 $a_{n+1}^2=a_na_{n+2}$ 네 가지.
  category: "점화식의 꼴 → 등차·등비 판정 → 첫째항·공차(공비) → 일반항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등차·등비 꼴 점화식에서 일반항 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 계차·비가 상수임을 그대로 읽고, ⑶⑷ 는 등차중항·등비중항 꼴을 등차·등비로 판정한 뒤 주어진 두 항에서 공차 $-3$, 공비 $-2$ 를 얻는다. 네 소문항 모두 판정 한 줄 + 일반항 공식 한 줄이다.
    익히기 구역 출발 ★1 · 통찰 0(중항 판정은 이 단원의 표준 공식) · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: '점화식 꼴로 등차·등비 판정 → 주어진 두 항에서 $d$ 또는 $r$ → $a_n=a_1+(n-1)d$ 또는 $a_1r^{n-1}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=4n-8$ ⑵ $a_n=3^{n-1}$ ⑶ $a_n=-3n+15$ ⑷ $a_n=5\times(-2)^{n-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/284-662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·공차·공비를 바꿀 수 있다(⑴ $a_1=7$, $a_{n+1}-a_n=-2$ · ⑶ $a_1=20$, $a_2=17$ · ⑷ $a_1=3$, $a_2=-6$). 제약: ⑷ 는 공비가 음수인 경우를 하나 남겨 $(-2)^{n-1}$ 의 부호 처리를 살리고, ⑶ 은 공차가 음의 정수라 일반항이 $-3n+15$ 처럼 정수 계수로 떨어지게 한다.'
    creative: '(1) 일반항 대신 제20항이나 처음으로 음수가 되는 항을 묻기(★2) (2) 등차중항·등비중항 꼴을 섞어 어느 쪽인지 먼저 판별하게 하기(★2) (3) $a_2$ 를 주지 않고 $a_5$ 를 주어 공차를 역산하게 하면 Mₛ 상승 ★2 (4) 등차와 등비를 동시에 만족하는 수열을 묻기(★3 · I-CON).'
```

```yaml
- id: GN-ALG-284-663
  page: 284
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 귀납적으로 정의된 수열에서 제7항 구하기. ⑴ 은 계차가 $n^2$ 인 꼴 $a_{n+1}=a_n+n^2$, ⑵ 는 비가 $\dfrac{n+1}{n}$ 인 꼴.
  category: "계차의 누적합 · 비의 연쇄곱 → 제$7$항"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$a_{n+1}=a_n+f(n)$ · $a_{n+1}=a_nf(n)$ 꼴에서 특정 항 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 $a_7=a_1+\sum_{k=1}^{6}k^2=3+91$, ⑵ 는 $a_7=a_1\times\dfrac{2}{1}\times\dfrac{3}{2}\times\cdots\times\dfrac{7}{6}$ 으로 가운데가 모두 약분된다. 항 번호가 7 까지라 여섯 번 더하거나 곱하기만 해도 되는 자리다.
    익히기 구역 출발 ★1 · 통찰 0(누적합·연쇄곱은 이 단원의 표준 절차) · M_total 6 → ★1 유지. 익히기 셋 중 계산이 가장 무겁다.
  tier: star_1
  mechanism_primary: '$a_7=a_1+\sum_{k=1}^{6}f(k)$ 또는 $a_7=a_1\prod_{k=1}^{6}f(k)$ → 약분·거듭제곱 합 공식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $94$ ⑵ $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/284-663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 계차·비의 식을 바꿀 수 있다(⑴ $a_1=1$, $a_{n+1}=a_n+2n-1$ · ⑵ $a_1=2$, $a_{n+1}=\dfrac{n+2}{n}a_n$). 제약: 묻는 항 번호를 10 이하로 두어 직접 더하고 곱해도 풀리게 하고, ⑵ 는 분자·분모가 한 칸씩 어긋나 약분되는 꼴을 유지한다.'
    creative: '(1) 제7항 대신 일반항을 묻기(누적합 공식이 필요해 ★2) (2) $a_k=94$ 를 만족시키는 $k$ 를 묻는 역방향(★2 · I-BW) (3) ⑵ 의 비를 $\dfrac{n+2}{n}$ 로 바꿔 두 칸 어긋난 약분을 만들면 ★2~3 (4) 계차를 $n^2$ 대신 $(-1)^nn$ 으로 두면 부호 교대가 생겨 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-285-e1
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=50$, $a_{n+1}+3=a_n$ 으로 정의된 수열에서 $a_k=14$ 를 만족시키는 자연수 $k$ 구하기.
  category: "점화식 → 공차 $-3$ 인 등차 → 일반항 → $a_k=14$ 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등차수열의 귀납적 정의(일반항 세워 항 번호 역산)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{n+1}+3=a_n$ 을 $a_{n+1}-a_n=-3$ 으로 옮기면 공차 $-3$ 인 등차수열이고 $a_n=53-3n$ 이다. $53-3k=14$ 한 줄로 $k$ 가 나온다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 5 → −1 후보이나 이 단원의 등차 판정 대표 예제 자리라 ★2 유지.
  tier: star_2
  mechanism_primary: '$a_{n+1}-a_n=-3$ → $a_n=53-3n$ → $53-3k=14$ → $k=13$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/285-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·공차·목표값을 바꿀 수 있다($a_1=100$, $a_{n+1}+7=a_n$, $a_k=16$). 제약: 목표값이 일반항 위에 정확히 얹혀 $k$ 가 자연수로 떨어져야 하고, 공차가 음수일 때 $k$ 가 1 보다 큰 자연수로 나오게 첫째항을 충분히 크게 둔다.'
    creative: '(1) $a_k$ 가 처음으로 음수가 되는 $k$ 를 묻기(부등식이 붙어 ★2) (2) 점화식을 $a_{n+1}=a_n-3$ 이 아니라 $a_{n+2}-a_{n+1}=a_{n+1}-a_n$ 과 두 항으로 주기(★2) (3) $a_k=14$ 대신 $\sum_{k=1}^{m}a_k=0$ 이 되는 $m$ 을 묻기(부분합이 붙어 ★3) (4) 공차를 문자 $d$ 로 두고 $a_k=14$ 가 되게 하는 $d$ 를 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-285-e2
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=1$, $2a_{n+1}=a_n$ 으로 정의된 수열에서 $a_{50}=\dfrac{1}{2^k}$ 일 때 상수 $k$ 구하기.
  category: "점화식 → 공비 $\\dfrac{1}{2}$ 인 등비 → 일반항 → 지수 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비수열의 귀납적 정의(일반항 세워 지수 비교)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{a_{n+1}}{a_n}=\dfrac{1}{2}$ 이므로 $a_n=\left(\dfrac{1}{2}\right)^{n-1}$ 이고 $a_{50}=\dfrac{1}{2^{49}}$ 이다. 지수의 밑이 같으므로 비교 한 줄로 끝난다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 5 → −1 후보이나 등비 판정 대표 예제 자리라 ★2 유지. 항 번호 50 과 지수 49 가 한 칸 어긋나는 것이 유일한 함정(T-경계).
  tier: star_2
  mechanism_primary: '$\dfrac{a_{n+1}}{a_n}=\dfrac{1}{2}$ → $a_n=\dfrac{1}{2^{n-1}}$ → $a_{50}=\dfrac{1}{2^{49}}$ → $k=49$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$49$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/285-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공비와 항 번호를 바꿀 수 있다($3a_{n+1}=a_n$ 에서 $a_{40}=\dfrac{1}{3^k}$ · $a_1=2$, $2a_{n+1}=a_n$ 에서 $a_{30}=\dfrac{1}{2^k}$). 제약: 첫째항이 공비의 거듭제곱과 같은 밑이어야 지수 비교 한 줄로 끝나고, 아니면 Mₖ 가 올라간다.'
    creative: '(1) $a_k<\dfrac{1}{1000}$ 을 만족시키는 최소 $k$ 로 바꾸기(부등식·거듭제곱 비교가 붙어 ★2~3) (2) 공비를 $-\dfrac{1}{2}$ 로 두어 부호가 교대하게 하기(★2) (3) $a_{50}$ 대신 $\sum_{k=1}^{50}a_k$ 를 묻기(등비 부분합 ★2) (4) $2a_{n+1}=a_n$ 을 $\log$ 를 취해 등차로 바꾸게 유도하면 ★3 · I-RT.'
```

```yaml
- id: GN-ALG-285-664
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=-5$, $a_2=-3$, $a_{n+2}-a_{n+1}=a_{n+1}-a_n$ 으로 정의된 수열에서 $\sum_{k=1}^{20}a_k$ 구하기.
  category: "등차중항 꼴 → 등차 판정 → 공차 $2$ → 부분합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등차 꼴 점화식에서 첫째항부터 제n항까지의 합'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계차가 일정하다는 조건 그대로 등차수열이고 $a_2-a_1=2$ 가 공차다. 일반항 대신 $S_{20}=\dfrac{20\{2\times(-5)+19\times2\}}{2}$ 로 바로 들어가면 한 줄이다.
    확인체크 유제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지. 부분합 공식의 공차·항 수 대입이 유일한 계산 부담.
  tier: star_2
  mechanism_primary: '$a_{n+2}-a_{n+1}=a_{n+1}-a_n$ → 등차 $d=2$ → $S_{20}=\dfrac{20(2a_1+19d)}{2}=280$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$280$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/285-664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항과 합의 범위를 바꿀 수 있다($a_1=-8$, $a_2=-5$ 로 공차 3 · $\sum_{k=1}^{15}$). 제약: 첫째항이 음수이고 공차가 양수라 중간에 부호가 바뀌는 구조를 남겨 두면 학생이 절댓값 합과 헷갈리지 않는지 볼 수 있다.'
    creative: '(1) 합이 처음으로 양수가 되는 항 번호를 묻기(★3 · 부등식) (2) $\sum_{k=1}^{20}|a_k|$ 로 바꾸면 부호 경계 분기가 생겨 ★3 · I-MI (3) 등차중항 조건을 등비중항으로 바꿔 같은 자리에서 등비 부분합을 묻기(★2) (4) $a_1$, $a_2$ 대신 $a_3=1$, $a_7=9$ 를 주면 공차 역산이 앞에 붙어 ★2.'
```

```yaml
- id: GN-ALG-285-665
  page: 285
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=1$ 이고 $\dfrac{a_{n+1}}{a_n}=\dfrac{a_{n+2}}{a_{n+1}}$ 인 수열이 $\dfrac{a_6}{a_1}+\dfrac{a_8}{a_3}+\dfrac{a_{10}}{a_5}=15$ 를 만족시킬 때 $a_{21}$ 구하기.
  category: "등비 판정 → 항 번호 차가 같은 세 비는 모두 $r^5$ → $r^5=5$ → $a_{21}=(r^5)^4$"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 분수의 항 번호 차가 모두 5 임을 보고 $r$ 을 구하지 않은 채 $r^5$ 를 한 덩어리로 놓아 $3r^5=15$ 로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '등비수열에서 항의 비를 덩어리로 묶어 특정 항 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비가 일정하다는 조건에서 등비임을 읽는 것까지는 표준이지만, $\dfrac{a_6}{a_1}=\dfrac{a_8}{a_3}=\dfrac{a_{10}}{a_5}=r^5$ 임을 보고 $r$ 자체를 구하지 않는 것이 열쇠다. $a_{21}=a_1r^{20}=(r^5)^4=5^4$.
    확인체크 유제 출발 ★2 · 통찰 1개(EQV d2) → +1 조건(통찰 2개 또는 depth 3) 미달로 ★2 유지. [분류 이슈] 덩어리 처리가 풀이의 전부여서 ★3 후보.
  tier: star_2
  mechanism_primary: '등비 판정 → 세 비가 모두 $r^5$ → $3r^5=15$ → $a_{21}=a_1(r^5)^4=625$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$625$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/285-665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 분수의 항 번호 차와 합의 값을 바꿀 수 있다(차 3 인 세 비의 합이 $12$ → $r^3=4$, 묻는 항은 $a_{13}$). 제약: 세 분수의 항 번호 차가 모두 같아야 덩어리가 성립하고, 묻는 항의 지수가 그 차의 배수여서 $r$ 을 실제로 구하지 않아도 되게 맞춘다.'
    creative: '(1) 세 비의 합 대신 곱을 주기(지수 합으로 바뀌어 ★2) (2) 항 번호 차를 일부러 다르게 섞어 덩어리가 안 되게 하면 $r$ 을 직접 구해야 해서 ★3 (3) 묻는 항의 지수를 차의 배수가 아니게 두면 $r=5^{1/5}$ 가 남아 ★3~4 (4) 등비 대신 등차로 바꿔 항 번호 차가 같은 차들의 합을 주기(★2).'
```

```yaml
- id: GN-ALG-286-e3
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=3$, $a_{n+1}=a_n+\dfrac{1}{n(n+1)}$ 로 정의된 수열에서 $a_{100}$ 구하기.
  category: "계차의 누적합 → 부분분수 분해 → 망원합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$a_{n+1}=a_n+f(n)$ 꼴로 정의된 수열(계차 누적합)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{100}=a_1+\sum_{k=1}^{99}\dfrac{1}{k(k+1)}$ 로 옮긴 뒤 $\dfrac{1}{k}-\dfrac{1}{k+1}$ 로 갈라 가운데를 모두 지우는 두 단계다. 부분분수 분해는 앞 단원 시그마에서 공식으로 배운 도구라 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지. 합의 위끝이 99 라는 한 칸 어긋남이 유일한 함정(T-경계).
  tier: star_2
  mechanism_primary: '$a_{100}=a_1+\sum_{k=1}^{99}\dfrac{1}{k(k+1)}$ → $\sum\left(\dfrac{1}{k}-\dfrac{1}{k+1}\right)=1-\dfrac{1}{100}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{399}{100}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/286-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 계차의 분모를 바꿀 수 있다($a_1=1$, 계차 $\dfrac{1}{n(n+2)}$ · $a_1=2$, 계차 $\dfrac{2}{(2n-1)(2n+1)}$ · 묻는 항 $a_{50}$). 제약: 부분분수로 갈랐을 때 남는 항이 두 개 이하가 되도록 분모의 두 인수 차를 1 이나 2 로 유지한다.'
    creative: '(1) 계차를 $\dfrac{1}{\sqrt{k+1}+\sqrt{k}}$ 로 바꿔 유리화 망원으로 옮기기(★2~3 · I-RT) (2) $a_n>3.99$ 인 최소 $n$ 을 묻기(부등식이 붙어 ★3) (3) 계차를 $n\cdot n!$ 처럼 곱꼴 망원으로 바꾸기(★3) (4) $a_{100}$ 대신 일반항 $a_n$ 을 묻고 극한 느낌의 상한을 함께 묻기(★3).'
```

```yaml
- id: GN-ALG-286-e4
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=2$, $a_n=\left(1-\dfrac{1}{n^2}\right)a_{n-1}$ $(n\ge2)$ 로 정의된 수열에서 $a_{20}$ 구하기.
  category: "비의 연쇄곱 → $1-\\dfrac{1}{n^2}$ 인수분해 → 두 칸 어긋난 약분(망원곱)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$1-\\dfrac{1}{n^2}$ 를 $\\dfrac{(n-1)(n+1)}{n^2}$ 로 바꿔 분자와 분모가 두 칸 어긋나게 약분되는 곱으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$a_{n+1}=a_nf(n)$ 꼴로 정의된 수열(연쇄곱·망원곱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{20}=a_1\prod_{k=2}^{20}\dfrac{(k-1)(k+1)}{k^2}$ 에서 분자의 앞쪽과 뒤쪽이 분모와 두 칸씩 어긋나 양 끝의 $\dfrac{1}{20}$ 과 $\dfrac{21}{2}$ 만 남는다. 인수분해를 하지 않으면 곱이 정리되지 않는다는 점이 이 예제의 요지다.
    필수 예제 출발 ★2 · 통찰 1개(RT d1) → ★2 유지. 시작 항 번호가 $n\ge2$ 인 점이 함정(T-경계).
  tier: star_2
  mechanism_primary: '$1-\dfrac{1}{n^2}=\dfrac{(n-1)(n+1)}{n^2}$ → $a_{20}=2\prod_{k=2}^{20}\dfrac{(k-1)(k+1)}{k^2}$ → 양 끝만 남김'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{21}{20}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/286-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 묻는 항 번호를 바꿀 수 있다($a_1=3$, $a_{30}$ · 비를 $1-\dfrac{1}{(n+1)^2}$ 로 이동). 제약: 비가 항상 양수여야 부호가 흔들리지 않으므로 $n\ge2$ 범위를 유지하고, 남는 양 끝 두 인수가 간단한 유리수로 떨어지게 항 번호를 잡는다.'
    creative: '(1) 비를 $\dfrac{n}{n+1}$ 처럼 한 칸 어긋나게 바꾸면 더 쉬워져 ★1~2 (2) $a_n<1.06$ 인 최소 $n$ 을 묻기(★3) (3) 곱 대신 $\log$ 를 취해 합으로 바꾸게 유도하기(★3 · I-RT) (4) 비를 $1-\dfrac{1}{n^2}$ 와 $1+\dfrac{1}{n}$ 로 번갈아 주면 두 망원이 겹쳐 ★3~4.'
```

```yaml
- id: GN-ALG-286-666
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=5$, $a_{n+1}-a_n=2n$ 으로 정의된 수열에서 $a_k=115$ 를 만족시키는 자연수 $k$ 구하기.
  category: "계차 누적합 → 일반항 $n^2-n+5$ → 이차방정식으로 항 번호 역산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '계차수열 꼴 점화식에서 주어진 값이 되는 항 번호 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=5+\sum_{k=1}^{n-1}2k=n^2-n+5$ 까지가 표준 절차이고, $k^2-k-110=0$ 을 인수분해해 자연수 근만 취하는 것이 뒤에 붙는다. 음의 근을 버리는 것은 T-범위 함정으로 흡수했다.
    확인체크 유제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_n=5+\sum_{k=1}^{n-1}2k=n^2-n+5$ → $k^2-k-110=0$ → 자연수 근 $k=11$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/286-666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·계차·목표값을 바꿀 수 있다($a_1=3$, 계차 $2n+1$, $a_k=143$). 제약: 일반항이 이차식이 되므로 목표값을 대입한 이차방정식이 정수 인수분해되게 잡고, 두 근 중 자연수가 하나만 나오게 한다.'
    creative: '(1) $a_k>115$ 인 최소 $k$ 로 바꾸기(부등식 ★2) (2) 계차를 $2n$ 대신 $2^n$ 으로 바꾸면 지수 비교가 되어 ★2 (3) 목표값을 두 항이 동시에 만족하도록 만들어 근 두 개를 모두 살피게 하면 ★3 · I-MI (4) $a_k$ 가 처음으로 세 자리가 되는 항을 묻기(★3).'
```

```yaml
- id: GN-ALG-286-667
  page: 286
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=1$, $a_{n+1}=2^na_n$ 으로 정의된 수열에서 $a_k=2^{36}$ 을 만족시키는 자연수 $k$ 구하기.
  category: "연쇄곱 → 지수의 합 $\\dfrac{n(n-1)}{2}$ → 지수 비교로 항 번호 역산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '곱꼴 점화식에서 지수의 합을 비교해 항 번호 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=2^{1+2+\cdots+(n-1)}=2^{\frac{n(n-1)}{2}}$ 로 밑을 2 로 통일한 뒤 지수만 비교하면 $k(k-1)=72$ 다. 곱을 지수의 합으로 옮기는 것은 지수법칙 그대로라 통찰로 세지 않았다.
    확인체크 유제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지. 지수 합의 위끝이 $n-1$ 인 점이 함정(T-경계).
  tier: star_2
  mechanism_primary: '$a_n=2^{1+2+\cdots+(n-1)}$ → 지수 $\dfrac{k(k-1)}{2}=36$ → $k=9$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/286-667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 목표 지수를 바꿀 수 있다($a_{n+1}=3^na_n$ 에서 $a_k=3^{45}$ · $a_{n+1}=2^{2n}a_n$ 에서 $a_k=2^{56}$). 제약: 목표 지수가 $\dfrac{k(k-1)}{2}$ 꼴의 값(1, 3, 6, 10, 15, 21, 28, 36, …)이어야 $k$ 가 자연수로 떨어진다.'
    creative: '(1) $a_k$ 가 처음으로 $2^{100}$ 을 넘는 $k$ 를 묻기(★3) (2) 밑을 $\dfrac{1}{2}$ 로 바꿔 감소하는 수열로 뒤집기(★2) (3) $a_{n+1}=2^na_n$ 과 $a_{n+1}=a_n+2^n$ 을 나란히 주고 어느 쪽이 지수 합인지 고르게 하기(★2~3 · I-SC) (4) $\log_2a_n$ 을 새 수열로 보고 그 일반항을 묻기(★3 · I-RT).'
```

```yaml
- id: GN-ALG-287-e5
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=1$, $a_{n+1}=\dfrac{a_n}{a_n+1}$ 로 정의된 수열에서 $a_k=\dfrac{1}{40}$ 을 만족시키는 자연수 $k$ 구하기.
  category: "양변의 역수 → $\\dfrac{1}{a_n}$ 이 등차 → 일반항 → 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분수 점화식의 양변에 역수를 취해 $\\dfrac{1}{a_{n+1}}=\\dfrac{1}{a_n}+1$ 이라는 등차수열의 언어로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '여러 가지 수열의 귀납적 정의(역수를 취해 등차로 바꾸기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n$ 그대로는 분수가 중첩돼 진행되지 않고, 역수를 취하는 순간 공차 1 인 등차수열이 되어 $\dfrac{1}{a_n}=n$, 즉 $a_n=\dfrac{1}{n}$ 이 된다. 표현을 바꾸는 한 수가 풀이의 전부다.
    필수 예제 출발 ★2 · 통찰 1개(RT d2) → +1 조건 미달로 ★2 유지. 익히기 661⑷ 에서 역수 점화식을 미리 보여 준 자리다.
  tier: star_2
  mechanism_primary: '양변 역수 → $\dfrac{1}{a_{n+1}}=\dfrac{1}{a_n}+1$ → $\dfrac{1}{a_n}=n$ → $a_k=\dfrac{1}{40}$ 에서 $k=40$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/287-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 분모의 상수를 바꿀 수 있다($a_1=\dfrac{1}{2}$, $a_{n+1}=\dfrac{a_n}{2a_n+1}$ → $\dfrac{1}{a_n}=2n$ · 목표 $\dfrac{1}{50}$). 제약: 역수를 취했을 때 공차가 정수로 떨어져야 하고, 모든 항이 0 이 아니어야 하므로 첫째항을 양수로 둔다.'
    creative: '(1) 목표를 $a_k<\dfrac{1}{100}$ 인 최소 $k$ 로 바꾸기(★2~3) (2) 점화식을 $a_{n+1}=\dfrac{a_n}{2a_n+3}$ 으로 두면 역수 수열이 등비가 되어 ★3 (3) $\dfrac{1}{a_n}$ 대신 $\dfrac{1}{a_n+1}$ 을 잡아야 등차가 되게 비틀면 치환 착안이 한 겹 늘어 ★3~4 (4) $\sum_{k=1}^{40}a_ka_{k+1}$ 을 묻기(부분분수와 결합 ★3).'
```

```yaml
- id: GN-ALG-287-e6
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a_1=2$, $a_{n+1}=a_n+(-1)^n$ 으로 정의된 수열에서 $a_{2025}$ 구하기.
  category: "몇 항 나열 → 주기 $2$ 발견 → 항 번호의 홀짝 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$(-1)^n$ 때문에 더하고 빼기가 번갈아 일어나 $2,\\ 1,\\ 2,\\ 1,\\ \\cdots$ 로 주기 2 가 생김을 나열로 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '수가 반복되는 수열의 귀납적 정의(주기 발견)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_2=1$, $a_3=2$ 까지만 써 보면 홀수 번째 항은 2, 짝수 번째 항은 1 로 굳는다. 2025 가 홀수임을 확인하는 한 줄이 마지막이다.
    필수 예제 출발 ★2 · 통찰 1개(PD d1) → ★2 유지. 항 번호의 홀짝을 거꾸로 세는 것이 유일한 함정(T-경계).
  tier: star_2
  mechanism_primary: '몇 항 나열 → 주기 2 ($a_{홀}=2$, $a_{짝}=1$) → 2025 는 홀수 → $a_{2025}=2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/287-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 묻는 항 번호를 바꿀 수 있다($a_1=5$, $a_{2024}$ · 계차를 $2(-1)^n$ 으로). 제약: 주기가 2 로 유지되도록 $(-1)^n$ 의 계수를 상수로 두고, 묻는 항 번호의 홀짝을 문항마다 바꿔 가며 낸다.'
    creative: '(1) 계차를 $(-1)^nn$ 으로 두면 주기가 깨지고 부분합 계산이 되어 ★3 (2) $\sum_{k=1}^{2025}a_k$ 를 묻기(주기 합 ★2~3) (3) 주기를 3 으로 만드는 $a_{n+1}=a_n+\cos\frac{2n\pi}{3}$ 류로 확장(★3) (4) 주기를 주지 않고 $a_{2025}=2$ 가 되도록 $a_1$ 을 정하게 하는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-287-668
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=3$ 이고 $n$ 이 홀수이면 $a_{n+1}=2a_n$, $n$ 이 짝수이면 $a_{n+1}=a_n-1$ 로 정의된 수열에서 $a_{10}$ 구하기.
  category: "$n$ 의 홀짝에 따라 두 규칙을 번갈아 적용 → 제$10$항까지 나열"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$n$ 의 홀짝으로 갈라지는 점화식에서 특정 항 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 배 하고 1 을 빼는 조작을 번갈아 아홉 번 적용하면 된다. 분기의 기준이 $a_n$ 의 크기가 아니라 $n$ 의 홀짝이라는 점, 그리고 $a_{n+1}$ 을 만들 때 쓰는 $n$ 의 홀짝을 한 칸 밀려 읽기 쉽다는 점이 함정이다(T-표기·T-경계).
    확인체크 유제 출발 ★2 · 통찰 0(주기가 생기지 않아 나열이 유일한 길) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$n$ 홀수면 $\times2$, 짝수면 $-1$ 을 번갈아 → $3,6,5,10,9,18,17,34,33,66$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$66$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/287-668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 두 조작을 바꿀 수 있다($a_1=2$, 홀수에서 $3a_n$, 짝수에서 $a_n-2$ · 묻는 항 $a_9$). 제약: 묻는 항 번호를 12 이하로 두어 나열이 현실적이어야 하고, 두 조작을 번갈아 했을 때 값이 음수로 떨어지지 않게 뺄셈 상수를 작게 잡는다.'
    creative: '(1) 두 항씩 묶어 $a_{2k}$ 의 점화식을 세우게 하면 $b_k=a_{2k}$ 가 등비 꼴이 되어 ★3 (2) 분기 기준을 $a_n$ 의 크기로 바꾸면 값에 따라 경로가 달라져 ★3 · I-PD (3) $a_{10}$ 대신 $a_{50}$ 을 물어 나열을 막고 묶음 점화식을 강제하기(★3~4) (4) $a_{10}=66$ 이 되게 하는 $a_1$ 을 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-287-669
  page: 287
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $a_1=3$, $a_2=4$, $a_n+a_{n+1}+a_{n+2}=12$ 로 정의된 수열에서 $a_{50}$ 구하기.
  category: "이웃 세 항의 합이 일정 → 주기 $3$ → $50$ 을 $3$ 으로 나눈 나머지"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이웃 세 항의 합이 늘 12 이므로 $a_{n+3}=a_n$ 임을 보고 주기 3 을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '이웃 세 항의 합이 일정한 수열(주기 3)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_3=5$ 를 구한 뒤 $3,4,5$ 가 되풀이됨을 확인하거나, $a_n+a_{n+1}+a_{n+2}=a_{n+1}+a_{n+2}+a_{n+3}$ 에서 $a_{n+3}=a_n$ 을 바로 뽑아도 된다. $50=3\times16+2$ 이므로 $a_{50}=a_2$.
    확인체크 유제 출발 ★2 · 통찰 1개(PD d1) · M_total 5 → ★2 유지. 나머지 2 를 둘째항에 맞춰 읽는 것이 함정(T-경계).
  tier: star_2
  mechanism_primary: '연속한 두 관계식을 빼서 $a_{n+3}=a_n$ → 주기 3 → $50=3\times16+2$ → $a_{50}=a_2=4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/287-669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항과 합의 값을 바꿀 수 있다($a_1=1$, $a_2=6$, 합 $15$ · 묻는 항 $a_{100}$). 제약: 합에서 두 항을 뺀 셋째항이 문제의 맥락과 어긋나지 않게(예: 자연수) 잡고, 묻는 항 번호를 3 으로 나눈 나머지를 문항마다 바꾼다.'
    creative: '(1) $\sum_{k=1}^{50}a_k$ 를 묻기(주기 합 ★3) (2) 이웃 네 항의 합이 일정하게 바꿔 주기 4 로(★2) (3) 합을 $12$ 대신 $n$ 에 의존하게 두면 주기가 깨져 계차 문제로 바뀌어 ★3 (4) $a_{50}=4$ 가 되도록 $a_2$ 를 정하게 하는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-288-e7
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    첫째항부터 제$n$항까지의 합을 $S_n$ 이라 할 때 $a_1=1$, $S_n=4a_n-3$ 이 성립하는 수열에서 $a_{10}$ 구하기.
  category: "$S_{n+1}-S_n=a_{n+1}$ → 항 사이의 점화식 → 등비 판정 → 일반항"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$S_n$ 이 포함된 수열의 귀납적 정의(합과 항의 관계로 점화식 만들기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $S_{n+1}=4a_{n+1}-3$ 에서 $S_n$ 을 빼면 $a_{n+1}=4a_{n+1}-4a_n$, 즉 $3a_{n+1}=4a_n$ 으로 공비 $\dfrac{4}{3}$ 인 등비가 된다. $a_n=S_n-S_{n-1}$ 을 쓰는 일은 이 단원이 공식으로 가르치는 표준 절차라 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지. $S_n$ 이라는 추상 기호가 들어가 Mₐ=2.
  tier: star_2
  mechanism_primary: '$S_{n+1}-S_n=a_{n+1}$ → $3a_{n+1}=4a_n$ → 공비 $\dfrac{4}{3}$ → $a_{10}=\left(\dfrac{4}{3}\right)^9$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(\dfrac{4}{3}\right)^9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/288-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n$ 식의 계수와 상수를 바꿀 수 있다($S_n=3a_n-2$ → 공비 $\dfrac{3}{2}$ · $S_n=5a_n-4$ → 공비 $\dfrac{5}{4}$). 제약: 첫째항이 $S_1=a_1$ 과 모순되지 않아야 하므로 상수항을 계수에 맞춰 잡고(여기서는 $4\cdot1-3=1$), 공비가 1 이 되는 계수는 피한다.'
    creative: '(1) $a_{10}$ 대신 $S_{10}$ 을 묻기(★2) (2) $S_n=4a_n-3$ 을 $S_n=pa_n+q$ 로 두고 공비가 2 가 되는 $p$ 를 묻는 역방향(★3 · I-BW) (3) $a_1$ 을 주지 않고 $S_1=a_1$ 에서 스스로 찾게 하면 시작 조건 확인이 통찰로 올라가 ★3 (4) $S_n$ 관계식에 $n$ 을 섞어 $S_n=2a_n-n$ 으로 두면 등비가 아니게 되어 ★3~4.'
```

```yaml
- id: GN-ALG-288-e8
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 1시간마다 5마리가 죽고 나머지가 각각 3마리로 분열하는 미생물이 현재 10마리 있을 때, $n$시간 후 살아 있는 수 $a_n$ 의 $a_1$ 과 $a_n$, $a_{n+1}$ 사이의 관계식 구하기.
  category: "상황의 시간 순서(죽음 → 분열) → 점화식 모델링"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "말로 서술된 시행(5마리 죽고 나머지가 3배)을 $a_{n+1}=3(a_n-5)$ 라는 식의 언어로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '수열의 귀납적 정의의 활용(증가·감소 시행을 점화식으로)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    죽는 것이 먼저이고 분열이 나중이라는 순서를 그대로 괄호 위치에 옮기면 $a_{n+1}=3(a_n-5)=3a_n-15$ 다. $a_1=3(10-5)=15$ 도 같은 식에 $n=0$ 자리를 대입한 셈이다.
    필수 예제 출발 ★2 · 통찰 1개(RT d1) → ★2 유지. 순서를 뒤집어 $3a_n-5$ 로 쓰거나 현재 값을 $a_1$ 로 착각하는 것이 함정(T-단위·T-경계).
  tier: star_2
  mechanism_primary: '$n$시간 후 수 $a_n$ → 5 감소 후 3배 → $a_{n+1}=3(a_n-5)$ · $a_1=3(10-5)=15$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $15$ ⑵ $a_{n+1}=3a_n-15$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/288-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '죽는 수·분열 배수·처음 개체 수를 바꿀 수 있다(4마리 죽고 2배로 분열, 처음 20마리 → $a_{n+1}=2a_n-8$). 제약: 매 시행마다 개체 수가 음수가 되지 않도록 처음 값이 죽는 수보다 충분히 커야 하고, 배수는 2 이상으로 둔다.'
    creative: '(1) 순서를 바꿔 먼저 분열하고 나중에 5마리가 죽게 하면 $a_{n+1}=3a_n-5$ 로 달라짐을 비교시키기(★3 · I-SC) (2) $a_5$ 의 값까지 묻기(대입이 늘어 ★2) (3) $a_n-\alpha$ 가 등비가 되는 $\alpha$ 를 찾게 하면 일반항까지 나아가 ★3~4 (4) 처음 개체 수를 미지수로 두고 $a_3$ 이 주어졌을 때 처음 수를 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-288-670
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항부터 제$n$항까지의 합을 $S_n$ 이라 할 때 $a_1=\dfrac{1}{2}$, $S_n=-a_n+n$ 이 성립하는 수열에서 $a_8$ 구하기.
  category: "$S_{n+1}-S_n=a_{n+1}$ → $a_{n+1}=\\dfrac{a_n+1}{2}$ → 차례 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$S_n$ 관계식에서 얻은 점화식으로 특정 항 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 관계식을 빼면 $2a_{n+1}=a_n+1$ 이 되고, 여기서부터는 $\dfrac{1}{2},\dfrac{3}{4},\dfrac{7}{8},\cdots$ 로 일곱 번 대입하면 된다. $1-a_n$ 이 공비 $\dfrac{1}{2}$ 인 등비임을 보는 지름길도 있지만 제8항까지라 나열이 더 빠르다.
    확인체크 유제 출발 ★2 · 통찰 0(대입 경로가 그대로 열려 있음) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$S_{n+1}-S_n=a_{n+1}$ → $a_{n+1}=\dfrac{a_n+1}{2}$ → 여덟 항 나열 → $a_8=\dfrac{255}{256}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{255}{256}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/288-670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n$ 식의 계수와 묻는 항 번호를 바꿀 수 있다($S_n=-2a_n+n$, $a_6$ · $S_n=-a_n+2n$, $a_7$). 제약: $n=1$ 일 때 $S_1=a_1$ 과 모순되지 않게 첫째항을 맞추고, 분모가 2 의 거듭제곱으로 깔끔히 떨어지게 계수를 잡는다.'
    creative: '(1) $1-a_n$ 이 등비임을 유도 문장으로 주고 일반항을 묻기(★3 · I-RT) (2) $a_n>0.999$ 인 최소 $n$ 을 묻기(★3) (3) $S_n=-a_n+n^2$ 으로 바꾸면 계차가 $n$ 에 의존해 ★3 (4) 제8항 대신 $S_8$ 을 묻기(★2).'
```

```yaml
- id: GN-ALG-288-671
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 농도 5%인 소금물 100 g 에서 20 g 을 덜어 내고 물 20 g 을 넣는 시행을 반복할 때, $n$회 시행 후 농도 $a_n$%의 $a_1$ 과 $a_n$, $a_{n+1}$ 사이의 관계식 구하기.
  category: "소금의 양이 $\\dfrac{4}{5}$ 배 · 전체 양 불변 → 농도의 점화식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "덜어 내고 물을 넣는 시행을 소금의 양이 $\\dfrac{4}{5}$ 배, 전체 양은 100 g 으로 고정이라는 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '수열의 귀납적 정의의 활용(농도·비율 시행)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    20 g 을 덜어 내면 소금도 같은 비율로 빠져 $\dfrac{4}{5}$ 만 남고, 물을 더해 전체 양이 100 g 으로 되돌아오므로 농도도 그대로 $\dfrac{4}{5}$ 배다. $a_1=5\times\dfrac{4}{5}=4$.
    확인체크 유제 출발 ★2 · 통찰 1개(RT d1) → ★2 유지. 소금의 양과 농도를 섞어 쓰는 것이 함정(T-단위).
  tier: star_2
  mechanism_primary: '전체 양 100 g 고정 · 소금 $\dfrac{4}{5}$ 배 → $a_{n+1}=\dfrac{4}{5}a_n$ · $a_1=4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4$ ⑵ $a_{n+1}=\dfrac{4}{5}a_n$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/288-671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '처음 농도·전체 양·덜어 내는 양을 바꿀 수 있다(8%인 소금물 200 g 에서 50 g · 공비 $\dfrac{3}{4}$). 제약: 덜어 낸 만큼만 물을 넣어 전체 양이 일정해야 농도가 그대로 등비가 되고, 공비가 간단한 분수로 떨어지게 비율을 잡는다.'
    creative: '(1) 물 대신 같은 농도의 소금물을 넣으면 농도가 변하지 않음을 비교시키기(★2 · I-SC) (2) 물 대신 10%인 소금물을 넣으면 $a_{n+1}=\dfrac{4}{5}a_n+2$ 가 되어 ★3 (3) 농도가 처음으로 1% 미만이 되는 시행 횟수를 묻기(★3) (4) $a_n$ 의 일반항을 구해 $n$회 후 소금의 양까지 묻기(★2~3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-289-672
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a_2=2a_1$, $a_{n+2}-2a_{n+1}+a_n=0$ 을 만족시키는 수열에서 $a_{10}=20$ 일 때 $a_6$ 구하기.
  category: "등차 판정 → 공차가 첫째항과 같음 → $a_n=na_1$ → $a_{10}$ 에서 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '공차가 첫째항과 같은 등차 꼴 점화식에서 다른 항 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{n+2}-a_{n+1}=a_{n+1}-a_n$ 이므로 등차이고, $a_2=2a_1$ 에서 공차가 $a_1$ 과 같아 $a_n=na_1$ 이 된다. $a_{10}=10a_1=20$ 에서 $a_1=2$, 곧 $a_6=12$.
    STEP 1 출발 ★2 · 통찰 0(등차 판정은 표준 절차) · M_total 6 → ★2 유지. 첫째항이 미지수로 남는 동안 식을 다루는 점에서 Mₐ=2.
  tier: star_2
  mechanism_primary: '$a_{n+2}-2a_{n+1}+a_n=0$ → 등차 · $d=a_2-a_1=a_1$ → $a_n=na_1$ → $a_1=2$ → $a_6=12$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 항과 그 값, 묻는 항을 바꿀 수 있다($a_{12}=36$ 에서 $a_5$ · $a_2=3a_1$ 로 두면 $a_n=(2n-1)a_1$). 제약: 주어진 항의 값이 항 번호의 배수여야 $a_1$ 이 정수로 떨어지고, $a_2$ 와 $a_1$ 의 비를 바꾸면 일반항의 계수도 함께 맞춰야 한다.'
    creative: '(1) $a_{10}=20$ 대신 $\sum_{k=1}^{10}a_k=110$ 을 주기(부분합이 앞에 붙어 ★3) (2) $a_2=2a_1$ 을 없애고 $a_3=9$, $a_7=21$ 두 항을 주기(★2) (3) 등차 대신 $a_{n+2}a_n=a_{n+1}^2$ 인 등비로 바꾸고 $a_2=2a_1$ 을 유지하면 $a_n=2^{n-1}a_1$ 이 되어 ★2 (4) 모든 항이 자연수가 되는 $a_1$ 의 개수를 묻기(★3 · I-VF).'
```

```yaml
- id: GN-ALG-289-673
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a_1=1$, $a_2=3$, $a_{n+1}^2=a_na_{n+2}$ 로 정의된 수열에서 $\log_3a_{10}$ 구하기.
  category: "등비중항 꼴 → 공비 $3$ → $a_{10}=3^9$ → 로그 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비 꼴 점화식의 일반항과 로그 값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등비중항 조건 그대로 공비 3 인 등비수열이고 $a_{10}=3^9$ 이므로 밑이 3 인 로그를 취하면 지수만 남는다. 로그는 앞 단원 기호를 빌려 쓴 것뿐이라 단원 결합(I-XU)으로 세지 않았다.
    STEP 1 출발 ★2 · 통찰 0 · M_total 5 → −1 후보이나 연습문제 자리라 ★2 유지. [분류 이슈] 실질 난도는 익히기 수준.
  tier: star_2
  mechanism_primary: '$a_{n+1}^2=a_na_{n+2}$ → 등비 $r=3$ → $a_{10}=3^9$ → $\log_3a_{10}=9$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·둘째항과 묻는 항 번호를 바꿀 수 있다($a_1=2$, $a_2=6$ 이면 $\log_3\dfrac{a_{10}}{2}=9$ · $a_2=\dfrac{1}{3}$ 이면 공비가 $\dfrac{1}{3}$). 제약: 로그의 밑과 공비를 같게 두어야 지수만 남고, 첫째항이 1 이 아니면 로그 안에서 분리되는 값이 깔끔한지 확인한다.'
    creative: '(1) $\log_3(a_1a_2\cdots a_{10})$ 으로 바꾸면 지수의 합이 되어 ★3 (2) 공비를 미지수로 두고 $\log_3a_{10}=9$ 에서 공비를 역산하기(★2~3 · I-BW) (3) $a_{n+1}^2=a_na_{n+2}$ 대신 $\log a_n$ 이 등차임을 이용하게 유도하기(★3 · I-RT) (4) 공비가 음수인 경우를 섞어 로그가 정의되는지 따지게 하면 ★3 · I-VF.'
```

```yaml
- id: GN-ALG-289-674
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a_1=\sqrt{2}$, $a_{n+1}=a_n+\dfrac{1}{\sqrt{n+2}+\sqrt{n+1}}$ 로 정의된 수열에서 $a_n>10$ 을 만족시키는 자연수 $n$ 의 최솟값 구하기.
  category: "분모 유리화 → 계차가 근호의 차 → 망원합 $a_n=\\sqrt{n+1}$ → 부등식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\dfrac{1}{\\sqrt{n+2}+\\sqrt{n+1}}$ 를 유리화해 $\\sqrt{n+2}-\\sqrt{n+1}$ 이라는 차의 꼴로 옮겨 망원합이 되게 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분모를 유리화해 망원합으로 닫는 계차형 점화식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리화를 하지 않으면 계차의 합이 정리되지 않는다. 차의 꼴로 바꾸면 $a_n=\sqrt{2}+(\sqrt{n+1}-\sqrt{2})=\sqrt{n+1}$ 로 닫히고, $\sqrt{n+1}>10$ 에서 $n>99$ 가 나온다.
    STEP 1 출발 ★2 · 통찰 1개(RT d2) → +1 조건(통찰 2개 또는 depth 3) 미달로 ★2 유지. 경계 $n=99$ 와 $n=100$ 을 가르는 것이 함정(T-경계).
  tier: star_2
  mechanism_primary: '유리화 → 계차 $\sqrt{n+2}-\sqrt{n+1}$ → 망원합 → $a_n=\sqrt{n+1}$ → $n+1>100$ → $n=100$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 기준값을 바꿀 수 있다($a_1=1$, 계차 $\dfrac{1}{\sqrt{n+1}+\sqrt{n}}$, 기준 $8$ · 기준 $20$ 이면 $n=399$). 제약: 첫째항이 망원합의 첫 근호값과 맞아떨어져야 $a_n$ 이 근호 하나로 닫히고, 기준값을 정수로 두어 경계가 딱 떨어지게 한다.'
    creative: '(1) $a_n<10$ 인 항의 개수를 묻기(★2) (2) 계차를 $\dfrac{1}{\sqrt{n+2}-\sqrt{n+1}}$ 로 뒤집어 유리화 방향을 바꾸게 하기(★2~3) (3) 계차를 $\dfrac{1}{n+\sqrt{n^2+n}}$ 류로 바꿔 유리화 대상이 한 겹 더 숨게 하면 ★3 (4) $a_n$ 이 정수가 되는 $n$ 을 모두 구하게 하면 ★3 · I-VF.'
```

```yaml
- id: GN-ALG-289-675
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a_1=4$, $\sqrt{n+1}\,a_{n+1}=\sqrt{n}\,a_n$ 으로 정의된 수열에서 $a_{16}$ 구하기.
  category: "$\\sqrt{n}\\,a_n$ 을 한 덩어리로 → 모든 $n$ 에서 일정 → $a_n=\\dfrac{4}{\\sqrt{n}}$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점화식을 $b_n=\\sqrt{n}\\,a_n$ 이라 두면 $b_{n+1}=b_n$, 곧 모든 항이 같은 상수라는 조건으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sqrt{n}\,a_n$ 이 일정한 곱꼴 점화식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{n+1}=\sqrt{\dfrac{n}{n+1}}\,a_n$ 으로 놓고 연쇄곱을 해도 되지만, 양변을 $\sqrt{n}\,a_n$ 이라는 한 덩어리로 보면 값이 $\sqrt{1}\times4=4$ 로 고정이라 한 줄로 끝난다. $a_{16}=\dfrac{4}{\sqrt{16}}=1$.
    STEP 1 출발 ★2 · 통찰 1개(EQV d2) → ★2 유지. 묻는 항 번호가 제곱수라 근호가 정수로 떨어지게 설계된 자리다.
  tier: star_2
  mechanism_primary: '$\sqrt{n+1}\,a_{n+1}=\sqrt{n}\,a_n$ → $\sqrt{n}\,a_n=4$ 로 일정 → $a_{16}=\dfrac{4}{4}=1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 묻는 항 번호를 바꿀 수 있다($a_1=6$, $a_9$ · $(n+1)a_{n+1}=na_n$ 으로 근호를 없애면 $a_n=\dfrac{a_1}{n}$). 제약: 묻는 항 번호를 제곱수로 두어 근호가 정수로 떨어지게 하고, 첫째항을 그 제곱근의 배수로 잡아 답이 유리수가 되게 한다.'
    creative: '(1) $a_n<\dfrac{1}{2}$ 인 최소 $n$ 을 묻기(★2~3) (2) $\sqrt{n}\,a_n$ 이 일정이 아니라 등차가 되도록 점화식에 상수항을 더하기(★3) (3) $a_n$ 의 일반항을 묻고 $\sum a_n^2$ 까지 잇기(★3) (4) 덩어리를 $n\,a_n^2$ 로 숨겨 두 번 변형하게 하면 ★3~4.'
```

```yaml
- id: GN-ALG-289-676
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $a_1=12$ 이고 모든 자연수 $n$ 에 대하여 $a_{n+1}+a_n=(-1)^{n+1}\times n$ 을 만족시키는 수열에서 $a_k>a_1$ 인 자연수 $k$ 의 최솟값. 5지선다.
  category: "부호가 교대하는 합 점화식 → 항을 차례로 계산 → 처음으로 $12$ 를 넘는 항"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '부호가 교대하는 합 점화식에서 조건을 만족시키는 최소 항 번호'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{n+1}=(-1)^{n+1}n-a_n$ 으로 옮겨 $n=1$ 부터 차례로 계산하면 $12,-11,9,-6,2,3,-9,16$ 으로 여덟째 항에서 처음 12 를 넘는다. 주기도 닫힌 꼴도 생기지 않아 나열이 유일한 길이다.
    STEP 1 출발 ★2 · 평가원 기출 태그는 통찰이 없어 +0 · M_total 7 → ★2 유지. [분류 이슈] 계산량과 부호 함정만으로 ★3 을 볼 여지가 있으나 통찰 0 이라 올리지 않았다.
  tier: star_2
  mechanism_primary: '$a_{n+1}=(-1)^{n+1}n-a_n$ → 여덟 항 나열 → $a_8=16>12$ → $k=8$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 우변의 계수를 바꿀 수 있다($a_1=10$, 우변 $(-1)^{n+1}\times2n$ · $a_1=20$). 제약: 처음으로 조건을 넘는 항 번호가 10 이내가 되도록 첫째항을 잡고, 선택지에 그 앞뒤 항 번호를 함께 넣어 한 칸 밀림을 가려낸다.'
    creative: '(1) $a_k<a_1$ 인 최대 $k$ 를 묻는 방향으로 뒤집기(★2) (2) $\sum_{k=1}^{10}a_k$ 를 묻기(두 항씩 묶으면 합이 정리돼 ★3 · I-EQV) (3) 우변을 $(-1)^{n+1}\times n^2$ 으로 키우면 계산이 무거워지므로 묶음 착안을 강제해 ★3 (4) $a_1$ 을 미지수로 두고 $a_8=16$ 이 되게 하는 $a_1$ 을 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-289-677
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    첫째항이 $1$ 이고 $a_n<8$ 이면 $a_{n+1}=3a_n$, $a_n\ge8$ 이면 $a_{n+1}=a_n-8$ 인 수열에서 $a_{60}$ 구하기.
  category: "값의 크기로 갈라지는 점화식 → 몇 항 나열 → 주기 $3$ → $60$ 의 나머지"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$1,\\ 3,\\ 9$ 다음이 다시 $1$ 로 돌아오는 것을 보고 항이 주기 3 으로 순환함을 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$a_n$ 의 크기로 갈라지는 점화식에서 주기 발견'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분기의 기준이 항 번호가 아니라 항의 값이라 미리 규칙을 정할 수 없고, $1\to3\to9\to1$ 을 직접 밟아야 순환이 보인다. $60$ 이 3 의 배수이므로 $a_{60}=a_3=9$.
    STEP 1 출발 ★2 · 통찰 1개(PD d2) → +1 조건 미달로 ★2 유지. [분류 이슈] 값 기준 분기 + 주기 발견이 겹쳐 ★3 후보.
  tier: star_2
  mechanism_primary: '$1\to3\to9\to1$ 순환 확인 → 주기 3 → $60=3\times20$ → $a_{60}=a_3=9$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·배수·빼는 값을 바꿀 수 있다($a_1=2$, $a_n<10$ 이면 $2a_n$, 아니면 $a_n-10$ · 묻는 항 $a_{50}$). 제약: 몇 번 만에 처음 값으로 되돌아와야 주기가 생기므로 배수와 빼는 값을 맞춰 보고, 묻는 항 번호를 주기로 나눈 나머지를 0 이 아닌 값으로도 바꿔 본다.'
    creative: '(1) $\sum_{k=1}^{60}a_k$ 를 묻기(주기 합 ★3) (2) 첫째항을 바꿔 주기가 달라지는 경우를 모두 찾게 하기(★4 · I-MI) (3) 경계를 $a_n\le8$ 로 한 칸 옮겨 순환이 깨지는지 확인시키기(★3 · T-경계) (4) $a_{60}=9$ 가 되게 하는 첫째항을 모두 구하게 하는 역방향(★4 · I-BW+I-VF).'
```

```yaml
- id: GN-ALG-289-678
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    물 100 L 가 든 수족관에서 매일 전날 물의 반을 버리고 30 L 를 새로 넣을 때, $n$일 후 남은 물의 양 $a_n$ 에 대하여 $a_n$ 과 $a_{n+1}$ 사이의 관계식 구하기.
  category: "시행의 순서(반을 버림 → 30 L 추가) → 점화식 모델링"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "말로 서술된 매일의 시행을 $a_{n+1}=\\dfrac{1}{2}a_n+30$ 이라는 식의 언어로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '수열의 귀납적 정의의 활용(일정 비율을 버리고 일정량을 넣기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전날 양의 절반이 남고 거기에 30 L 가 더해지므로 관계식은 한 줄이다. 처음 100 L 는 $a_0$ 자리여서 답에 직접 쓰이지 않는다는 점만 주의하면 된다(T-경계).
    STEP 1 출발 ★2 · 통찰 1개(RT d1) · M_total 5 → 통찰이 있어 −1 하지 않고 ★2 유지. 관계식만 묻고 일반항은 묻지 않아 Mₛ=1.
  tier: star_2
  mechanism_primary: '전날 양의 절반 + 30 → $a_{n+1}=\dfrac{1}{2}a_n+30$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a_{n+1}=\dfrac{1}{2}a_n+30$ $(n=1,\,2,\,3,\,\cdots)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/289-678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '버리는 비율과 넣는 양, 처음 양을 바꿀 수 있다(3분의 1 을 버리고 40 L 추가 · 처음 200 L). 제약: 남는 비율이 1 보다 작아야 값이 한 곳으로 모이고, 넣는 양을 정수로 두어 며칠 뒤 값이 지저분해지지 않게 한다.'
    creative: '(1) $a_3$ 까지 값을 묻기(대입 ★2) (2) $a_n-60$ 이 등비임을 유도해 일반항까지 묻기(★3 · I-RT) (3) 물의 양이 처음으로 65 L 미만이 되는 날을 묻기(★3) (4) 버리는 비율을 미지수로 두고 며칠 뒤 양이 일정해지는 조건을 묻는 역방향(★4 · I-BW).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-290-679
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_1=1$, $(a_n+a_{n+1})^2=4a_na_{n+1}+4$ 를 만족시키는 증가수열에서 $a_{20}$ 구하기.
  category: "완전제곱 정리 → $(a_{n+1}-a_n)^2=4$ → 증가 조건으로 공차 $2$ → 일반항"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$4a_na_{n+1}$ 을 좌변으로 넘겨 $(a_n+a_{n+1})^2-4a_na_{n+1}=(a_{n+1}-a_n)^2$ 이라는 계차의 조건으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '완전제곱 꼴로 정리되는 점화식(계차의 부호 결정)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개해서 붙들고 있으면 이차식이 남지만, 곱셈 공식 $(x+y)^2-4xy=(x-y)^2$ 을 떠올리면 계차의 제곱이 4 라는 단순한 조건이 된다. 증가수열이라는 단서로 $a_{n+1}-a_n=2$ 만 남겨 등차로 닫는다.
    STEP 2 출발 ★3 · 통찰 1개(EQV d2) → ★3 유지. 계차가 $\pm2$ 중 어느 쪽인지 고르는 것이 함정(T-부호·T-범위).
  tier: star_3
  mechanism_primary: '$(a_{n+1}-a_n)^2=4$ → 증가수열이므로 $a_{n+1}-a_n=2$ → $a_n=2n-1$ → $a_{20}=39$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 우변의 상수를 바꿀 수 있다($a_1=2$, 우변 $4a_na_{n+1}+9$ 이면 계차 3 · 우변 $+16$ 이면 계차 4). 제약: 우변의 상수가 완전제곱수여야 계차가 유리수로 떨어지고, 증가·감소 조건을 반드시 함께 주어 부호가 하나로 정해지게 한다.'
    creative: '(1) 증가 조건을 빼고 가능한 $a_{20}$ 을 모두 구하게 하면 부호 분기가 살아나 ★4 · I-MI (2) 우변을 $4a_na_{n+1}+4n^2$ 으로 두면 계차가 $n$ 에 의존해 ★4 (3) $(a_n+a_{n+1})^2=4a_na_{n+1}$ 로 상수를 없애면 모든 항이 같아지는 극단을 보여 ★2 (4) $\sum_{k=1}^{20}a_k$ 로 묻기(★3).'
```

```yaml
- id: GN-ALG-290-680
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_2=3$, $a_6=355$, $a_{n+1}=a_n+3^n-p$ 를 만족시킬 때 상수 $p$ 구하기.
  category: "계차의 부분 누적($n=2$ 부터 $5$ 까지) → 등비 합과 $p$ 의 일차식 → 방정식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '계차에 미정상수가 들어 있는 점화식에서 상수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_6=a_2+\sum_{n=2}^{5}(3^n-p)$ 로 첫째항이 아니라 $a_2$ 에서 출발하는 부분 누적을 세우는 것이 요점이다. 등비 합 $9+27+81+243=360$ 과 $-4p$ 가 남아 일차방정식이 된다.
    STEP 2 출발 ★3 · 통찰 0(계차 누적은 표준 절차) · M_total 8 → ★3 유지. 더하는 항의 개수를 5 개로 잘못 세기 쉬운 자리(T-경계).
  tier: star_3
  mechanism_primary: '$a_6=a_2+\sum_{n=2}^{5}(3^n-p)$ → $355=3+360-4p$ → $p=2$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 두 항의 번호와 값, 계차의 밑을 바꿀 수 있다($a_1=1$, $a_5=76$, 계차 $2^n-p$). 제약: 두 항 사이의 등비 합이 정수로 떨어지고 $p$ 가 정수가 되도록 값을 역산해 잡는다.'
    creative: '(1) $p$ 대신 $a_2$ 를 묻는 방향으로 바꾸기(★3) (2) 계차를 $3^n-pn$ 으로 두면 $\sum n$ 이 더 붙어 ★3~4 (3) 모든 항이 자연수가 되는 $p$ 의 개수를 묻기(★4 · I-VF) (4) $a_6=355$ 대신 $\sum_{k=2}^{6}a_k$ 를 주면 이중 합이 되어 ★4.'
```

```yaml
- id: GN-ALG-290-681
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_1=2$ 이고 모든 자연수 $n$ 에 대하여 $a_{3n-1}=4a_n-1$, $a_{3n}=2a_n$, $a_{3n+1}=a_n+5$ 를 만족시키는 수열에서 $a_{11}+a_{12}+a_{13}$ 구하기.
  category: "첨자 $11,12,13$ 을 $n=4$ 의 세 꼴로 분해 → $a_4$ 로 환원 → $a_4$ 도 $n=1$ 의 꼴"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$11=3\\cdot4-1$, $12=3\\cdot4$, $13=3\\cdot4+1$ 로 읽어 세 항을 모두 $a_4$ 하나로 환원하고, $4=3\\cdot1+1$ 로 다시 $a_1$ 까지 내림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '첨자를 $3n-1$, $3n$, $3n+1$ 로 분해하는 점화식'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞에서부터 차례로 항을 만들 수 없고, 구하려는 첨자를 3 으로 나눈 몫과 나머지로 쪼개 아래로 내려가야 한다. 세 첨자가 같은 $n=4$ 에서 나온다는 것을 보면 $a_4=a_1+5=7$ 하나만 구하면 된다.
    STEP 2 출발 ★3 · 통찰 1개(EQV d2) → ★3 유지. 세 규칙 중 어느 것이 적용되는지 첨자를 잘못 맞추기 쉬운 자리(T-표기·T-경계).
  tier: star_3
  mechanism_primary: '$a_4=a_1+5=7$ → $a_{11}=4a_4-1$, $a_{12}=2a_4$, $a_{13}=a_4+5$ → 합 $53$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$53$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 규칙의 계수와 묻는 첨자를 바꿀 수 있다($a_{3n-1}=3a_n+1$, $a_{3n}=5a_n$, $a_{3n+1}=a_n-2$ · $a_{20}+a_{21}+a_{22}$). 제약: 묻는 세 첨자가 같은 $n$ 에서 나오도록 연속한 세 수로 고르고, 그 $n$ 이 다시 세 꼴 중 하나로 내려가 $a_1$ 에 닿는지 확인한다.'
    creative: '(1) 첨자를 $a_{11}+a_{13}$ 처럼 떨어뜨려 두 번 내려가게 하기(★3~4) (2) $a_{100}$ 처럼 세 번 이상 내려가야 하는 첨자를 묻기(★4) (3) $a_{11}=27$ 이 되게 하는 $a_1$ 을 묻는 역방향(★4 · I-BW) (4) 세 규칙 중 하나를 빼고 정의되지 않는 첨자를 찾게 하면 ★4 · I-VF.'
```

```yaml
- id: GN-ALG-290-682
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_1=2$ 인 수열에 대하여 이차방정식 $a_{n-1}x^2-a_nx+1=0$ $(n\ge2)$ 의 두 근 $\alpha$, $\beta$ 가 $3\alpha-\alpha\beta+3\beta=1$ 을 만족시킬 때 $a_5$ 구하기.
  category: "근과 계수의 관계 → 조건식을 $a_{n-1}$, $a_n$ 의 식으로 → 점화식 → 차례 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식의 근과 계수의 관계($\\alpha+\\beta=\\dfrac{a_n}{a_{n-1}}$, $\\alpha\\beta=\\dfrac{1}{a_{n-1}}$)를 끌어와 근의 조건을 수열의 점화식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '근과 계수의 관계로 만들어지는 점화식'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 직접 구할 수 없고, $3(\alpha+\beta)-\alpha\beta=1$ 로 묶어 근과 계수의 관계를 대입하면 $\dfrac{3a_n-1}{a_{n-1}}=1$, 곧 $a_n=\dfrac{a_{n-1}+1}{3}$ 이 된다. 뒤는 네 번 대입이다.
    STEP 2 출발 ★3 · 통찰 1개(XU d2 · 방정식 단원 도구가 없으면 풀이가 끊김) → ★3 유지. 분수가 쌓여 Mₖ=2.
  tier: star_3
  mechanism_primary: '$3(\alpha+\beta)-\alpha\beta=1$ → $3a_n-1=a_{n-1}$ → $a_n=\dfrac{a_{n-1}+1}{3}$ → $a_5=\dfrac{14}{27}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{14}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 조건식의 계수를 바꿀 수 있다($a_1=3$, $2\alpha-\alpha\beta+2\beta=1$ → $a_n=\dfrac{a_{n-1}+1}{2}$ · 묻는 항 $a_4$). 제약: 조건식이 $\alpha+\beta$ 와 $\alpha\beta$ 로만 묶여야 하고, 분모가 커지므로 묻는 항 번호를 6 이하로 둔다.'
    creative: '(1) 조건을 $\alpha^2+\beta^2=k$ 로 바꾸면 제곱 합 공식이 한 겹 더 붙어 ★4 (2) 이차방정식이 실근을 가질 조건(판별식)을 함께 묻기(★4 · I-VF) (3) $a_5$ 대신 일반항을 묻기(특성근 없이 $a_n-\dfrac{1}{2}$ 가 등비임을 보게 해 ★4) (4) 계수 배치를 $x^2-a_nx+a_{n-1}=0$ 으로 바꿔 관계식의 방향을 뒤집기(★3).'
```

```yaml
- id: GN-ALG-290-683
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_1=1$, $a_2=2$, $a_3=4$, $a_{n-1}a_{n+1}=a_na_{n+2}$ $(n\ge2)$ 로 정의된 수열에서 $\sum_{k=1}^{20}a_k$ 구하기.
  category: "$a_{n+2}=\\dfrac{a_{n-1}a_{n+1}}{a_n}$ 로 풀어 나열 → 주기 $4$ → 한 주기 합 $\\times5$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$1,\\ 2,\\ 4,\\ 2$ 가 되풀이됨을 나열에서 발견해 20 항을 다섯 주기로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이웃 네 항의 곱 관계에서 주기를 찾아 합 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    관계식을 $a_{n+2}$ 에 대해 풀면 $a_4=\dfrac{a_1a_3}{a_2}=2$, $a_5=\dfrac{a_2a_4}{a_3}=1$ 처럼 앞의 세 항으로 다음 항이 결정되고, 곧 $1,2,4,2$ 의 되풀이가 드러난다. 한 주기 합 9 에 5 를 곱한다.
    STEP 2 출발 ★3 · 통찰 1개(PD d2) → ★3 유지. 20 이 주기 4 로 딱 나누어떨어지는 설계라 나머지 처리는 없다.
  tier: star_3
  mechanism_primary: '$a_{n+2}=\dfrac{a_{n-1}a_{n+1}}{a_n}$ → $1,2,4,2$ 주기 4 → 한 주기 합 $9$ → $9\times5=45$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '처음 세 항과 합의 범위를 바꿀 수 있다($a_1=2$, $a_2=1$, $a_3=3$ · $\sum_{k=1}^{30}$). 제약: 세 항의 비가 주기를 만들도록 값을 고르고(비가 되풀이되는지 네 항까지 직접 확인), 합의 범위를 주기의 배수나 배수+나머지 중 어느 쪽으로 낼지 정한다.'
    creative: '(1) 합의 범위를 $22$ 로 두어 나머지 처리를 강제하기(★3) (2) 곱 $\prod_{k=1}^{20}a_k$ 를 묻기(지수 합으로 바뀌어 ★3~4) (3) 처음 세 항을 미지수로 두고 주기 4 가 되는 조건을 묻기(★4 · I-BW) (4) 관계식을 $a_{n-1}a_{n+2}=a_na_{n+1}$ 로 한 칸 옮겨 주기가 달라지는지 보게 하기(★4).'
```

```yaml
- id: GN-ALG-290-684
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a_1=1$ 이고 $a_n=\sum_{k=1}^{n-1}a_k$ $(n\ge2)$ 가 성립하는 수열에서 $a_{11}$ 구하기.
  category: "$a_n=S_{n-1}$ → 이웃 두 항을 빼서 $a_{n+1}=2a_n$ → $n\\ge2$ 부터 등비"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$a_n=S_{n-1}$ 꼴에서 두 배 점화식 끌어내기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_{n+1}=S_n=S_{n-1}+a_n=2a_n$ 이 나오지만 이 관계는 $n\ge2$ 에서만 쓸 수 있고, $a_2=a_1=1$ 로 시작점을 따로 잡아야 한다. 합과 항의 관계를 쓰는 일 자체는 이 단원의 표준 절차라 통찰로 세지 않았다.
    STEP 2 출발 ★3 · 통찰 0 · M_total 7 → ★3 유지. 공비 2 를 $a_1$ 부터 적용해 $a_{11}=2^{10}$ 으로 한 칸 밀리는 것이 이 문항의 핵심 함정(T-경계·T-범위).
  tier: star_3
  mechanism_primary: '$a_{n+1}=2a_n\ (n\ge2)$ · $a_2=a_1=1$ → $a_n=2^{n-2}\ (n\ge2)$ → $a_{11}=2^9=512$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$512$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 묻는 항 번호를 바꿀 수 있다($a_1=3$, $a_9$ · 조건을 $a_n=2\sum_{k=1}^{n-1}a_k$ 로 두면 공비 3). 제약: 시작점이 한 칸 밀리는 구조를 유지해야 이 유형의 요점이 살고, 묻는 항 번호를 12 이하로 두어 거듭제곱이 지나치게 커지지 않게 한다.'
    creative: '(1) $\sum_{k=1}^{11}a_k$ 를 묻기(정의상 $a_{12}$ 와 같아 한 줄이 되는 함정 ★3) (2) 조건을 $a_n=\sum_{k=1}^{n-1}ka_k$ 로 바꾸면 계수가 붙어 ★4 (3) $a_n$ 이 처음으로 1000 을 넘는 $n$ 을 묻기(★3) (4) $a_1$ 을 미지수로 두고 $a_{11}=1536$ 이 되게 하는 $a_1$ 을 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-290-685
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\sum_{k=1}^{n}a_k=S_n$ 이라 할 때 $a_1=0$, $a_2=1$, $2S_n=S_{n+1}+S_{n-1}-n^2$ $(n\ge2)$ 이 성립하는 수열에서 $a_{10}$ 구하기.
  category: "$S$ 의 관계식을 계차로 재배열 → $a_{n+1}=a_n+n^2$ → 부분 누적합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$2S_n=S_{n+1}+S_{n-1}-n^2$ 을 $S_{n+1}-S_n=S_n-S_{n-1}+n^2$ 으로 옮겨 합의 계차, 곧 항의 점화식으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$S_n$ 의 계차를 두 번 읽어 항의 점화식 만들기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $S$ 를 직접 구하려 하면 막히고, 항을 좌우로 갈라 $S_{n+1}-S_n$ 과 $S_n-S_{n-1}$ 을 만들면 그대로 $a_{n+1}=a_n+n^2$ 이 된다. $a_2=1$ 에서 출발해 $a_{10}=1+\sum_{n=2}^{9}n^2$ 을 더한다.
    STEP 2 출발 ★3 · 통찰 1개(EQV d2) → ★3 유지. 점화식이 $n\ge2$ 에서만 유효해 누적의 아래끝을 2 로 잡아야 한다(T-경계).
  tier: star_3
  mechanism_primary: '$S_{n+1}-S_n=S_n-S_{n-1}+n^2$ → $a_{n+1}=a_n+n^2\ (n\ge2)$ → $a_{10}=a_2+\sum_{n=2}^{9}n^2=285$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$285$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/290-685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 $n^2$ 과 처음 두 항을 바꿀 수 있다($-2n$ 으로 두면 계차가 일차 · $a_2=2$ · 묻는 항 $a_8$). 제약: 계차가 시그마 공식으로 닫히는 식이어야 하고, 누적의 아래끝이 2 라는 구조를 유지하도록 $a_1$, $a_2$ 를 함께 준다.'
    creative: '(1) $a_{10}$ 대신 $S_{10}$ 을 묻기(이중 누적이 되어 ★4) (2) 우변을 $-n^2$ 이 아니라 $-a_n$ 으로 두면 재귀가 얽혀 ★4 (3) $a_n$ 의 일반항을 묻기(★3~4) (4) $a_1=0$ 조건을 빼고 $a_1$ 이 정해지는지 따지게 하면 ★4 · I-VF.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-291-686
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $x$축 위의 점 $\mathrm{P}_n$ 과 곡선 $y=\sqrt{3x}$ 위의 점 $\mathrm{Q}_n$ 이 두 수직 조건을 만족시킬 때, $\mathrm{P}_1(1,\,0)$ 에서 삼각형 $\mathrm{OP}_{n+1}\mathrm{Q}_n$ 의 넓이 $A_n$ 을 구하는 과정의 빈칸 ㈎ $p$, ㈏ $f(n)$ 에 대하여 $p+f(8)$ 의 값. 5지선다.
  category: "직각삼각형 닮음 → $\\overline{\\mathrm{P}_n\\mathrm{P}_{n+1}}$ 이 상수 → 등차 일반항 → 넓이의 밑변"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 수직 조건이 만드는 닮음비 $\\overline{\\mathrm{OP}_n}:\\overline{\\mathrm{P}_n\\mathrm{Q}_n}=\\overline{\\mathrm{P}_n\\mathrm{Q}_n}:\\overline{\\mathrm{P}_n\\mathrm{P}_{n+1}}$ 를 $a_n$ 의 점화식으로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "빈칸 ㈏ 가 주어진 꼴 $\\dfrac{1}{2}\\times(\\ \\ )\\times\\sqrt{9n-6}$ 에서 높이가 아니라 밑변 $\\overline{\\mathrm{OP}_{n+1}}$ 자리임을 읽어 $f(n)=a_{n+1}$ 로 맞춤"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '닮음으로 얻은 점화식의 빈칸 추론(도형 활용)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\mathrm{Q}_n(a_n,\,\sqrt{3a_n})$ 이므로 닮음비에서 $\overline{\mathrm{P}_n\mathrm{P}_{n+1}}=\dfrac{3a_n}{a_n}=3$ 으로 $n$ 에 무관한 상수가 나오고, 이것이 $a_{n+1}=a_n+3$ 이라는 등차 점화식을 준다. $a_1=1$ 에서 $a_n=3n-2$, 넓이 식의 높이 $\sqrt{9n-6}=\sqrt{3a_n}$ 과 짝이 맞는 밑변은 $a_{n+1}=3n+1$ 이다.
    실력 UP 출발 ★4 · 통찰 2개(RT d2 + EQV d1) · 기출 태그 +0 → ★4 유지. 빈칸이 넓이 전체인지 밑변인지 고르는 것이 함정(T-표기).
  tier: star_4
  mechanism_primary: '닮음비 → $\overline{\mathrm{P}_n\mathrm{P}_{n+1}}=3$ → $a_n=3n-2$ → $f(n)=a_{n+1}=3n+1$ → $3+25=28$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-291-686.png"
  latex: latex-bank/gn-alg/items/291-686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곡선의 계수와 첫 점의 좌표를 바꿀 수 있다($y=\sqrt{2x}$ 이면 간격이 2 · $\mathrm{P}_1(2,\,0)$). 제약: 곡선이 $y=\sqrt{kx}$ 꼴이어야 닮음비에서 간격이 상수 $k$ 로 떨어지고, 그림의 점 이름과 수직 조건은 고정한다(그림 라벨 고정).'
    creative: '(1) 빈칸을 없애고 $A_n$ 을 직접 구하게 하면 유도가 사라져 ★4~5 (2) $\sum_{k=1}^{10}A_k^2$ 처럼 넓이의 수열을 다시 합하게 하기(★5) (3) 수직 조건 하나를 접선 조건으로 바꾸기(★5) (4) $\overline{\mathrm{P}_n\mathrm{P}_{n+1}}$ 이 상수가 아니게 곡선을 $y=x^2$ 으로 바꾸면 점화식이 비선형이 되어 ★5.'
```

```yaml
- id: GN-ALG-291-687
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $a_1>1$ 인 수열이 모든 자연수 $n$ 에 대하여 $a_{2n}=a_2\times a_n+1$, $a_{2n+1}=a_2\times a_n-2$ 를 만족시키고 $a_7=2$ 일 때 $a_{30}$ 구하기.
  category: "첨자를 반으로 줄여 $a_1$, $a_2$ 의 식으로 → 이차방정식 → 조건에 맞는 근만 채택"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_{2n}=a_2a_n+1$ 에 $n=1$ 을 넣으면 $a_2=a_2a_1+1$ 이라는 $a_1$ 과 $a_2$ 사이의 관계가 숨어 있음을 끌어냄"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_7=a_2a_3-2$, $a_3=a_2a_1-2$ 로 첨자를 반씩 줄여 주어진 값 $a_7=2$ 를 $a_1$, $a_2$ 만의 식으로 역추적"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 관계를 연립해 얻은 이차방정식의 두 근 가운데 $a_1>1$ 을 어기는 쪽을 기각하고 남은 근만 채택"
  insight_count: 3
  depth_score: 6.00
  type_id: null
  type_hint: '첨자를 반으로 줄이는 점화식에서 첫째항 역추적'
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    앞에서부터 항을 만들 수 없고 $a_2$ 조차 미지수인데, $n=1$ 을 넣으면 $a_2$ 가 $a_1$ 으로 표현된다는 점이 출발선이다. 거기에 $a_7$ 을 $a_3$, $a_1$ 로 되짚어 연립하면 $a_1$ 의 이차방정식이 나오고, 두 근 중 $a_1>1$ 을 만족시키는 쪽만 살아남는다. $a_1$, $a_2$ 가 정해진 뒤에는 $a_{30}=a_2a_{15}+1$, $a_{15}=a_2a_7-2$ 로 두 번 내려가면 된다.
    실력 UP 출발 ★4 · 통찰 3개(EQV·BW·VF) · I-VF 포함 → +1 로 ★5. 조건 $a_1>1$ 이 장식이 아니라 근을 고르는 장치라는 점이 이 문항의 급소다.
  tier: star_5
  mechanism_primary: '$n=1$ → $a_2=a_2a_1+1$ · $a_7=a_2(a_2a_1-2)-2=2$ → 이차방정식 → $a_1>1$ 로 근 선택 → $a_{30}=a_2a_{15}+1=5$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/291-687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 규칙의 상수와 주어지는 항을 바꿀 수 있다($a_{2n}=a_2a_n+2$, $a_{2n+1}=a_2a_n-1$ · $a_6=3$ 을 주기). 제약: 연립 결과가 정수 계수 이차방정식으로 떨어져야 하고, 두 근 중 하나만 $a_1>1$ 을 만족시키도록 조건 부등식을 함께 조정해야 기각 구조가 살아난다.'
    creative: '(1) $a_1>1$ 을 빼고 가능한 $a_{30}$ 을 모두 구하게 하면 분기가 모두 살아나 ★5 · I-MI (2) $a_{30}$ 대신 $a_{31}$ 을 물어 홀수 규칙으로 내려가게 하기(★5) (3) 첨자를 셋으로 쪼개는 $3n$, $3n+1$, $3n+2$ 규칙으로 확장(★5) (4) $a_7=2$ 대신 $a_7$ 이 자연수가 되는 $a_1$ 을 모두 구하게 하면 정수 조건이 붙어 ★5.'
```

```yaml
- id: GN-ALG-291-688
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    ㈎ $a_4=3$, ㈏ $a_n\ge0$ 이면 $a_{n+1}=a_n-4$, $a_n<0$ 이면 $a_{n+1}=-2a_n+1$ 인 모든 수열에 대하여 $\sum_{k=1}^{40}a_k$ 의 최댓값 $M$ 과 최솟값 $m$ 의 차 구하기.
  category: "$a_4$ 이후는 주기 $2$ 로 고정 → $a_3,a_2,a_1$ 을 두 갈래씩 역추적 → 조건 위배 갈래 기각 → 앞 세 항 합의 최대·최소"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_4=3$ 다음이 $-1,\\ 3,\\ -1,\\ \\cdots$ 로 굳는 것을 보고 제4항부터 제40항까지의 합이 경우에 관계없이 고정임을 확인"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "$a_{n+1}$ 값 하나에서 $a_n$ 후보를 두 규칙 각각으로 거슬러 올라가 $a_3$, $a_2$, $a_1$ 의 경우를 모두 펼침"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역추적으로 얻은 각 후보가 그 규칙이 요구하는 $a_n\\ge0$ 또는 $a_n<0$ 을 실제로 만족시키는지 되짚어 어긋나는 갈래를 기각"
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: '조건 분기 점화식의 역추적과 경우 기각(합의 최댓값·최솟값)'
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    앞으로 가는 방향은 $3,-1,3,-1$ 로 금세 닫히므로 제4항 이후의 합은 어떤 수열이든 같다. 남는 것은 $a_4=3$ 으로 들어오는 길이 몇 가지인가이고, 각 단계에서 $a_n-4$ 로 왔는지 $-2a_n+1$ 로 왔는지 두 갈래를 모두 펼친 뒤 각 후보가 자기 규칙의 부등호를 만족시키는지 확인해 일부를 버려야 한다. 살아남은 경우들의 $a_1+a_2+a_3$ 이 최댓값과 최솟값을 가른다.
    실력 UP 출발 ★4 · 통찰 3개(PD·BW d3·VF) · I-VF·I-BW 포함 → +1 로 ★5. 역추적 갈래를 기각 없이 모두 살리면 최댓값이 부풀려지는 구조다.
  tier: star_5
  mechanism_primary: '제4항 이후 주기 $3,-1$ 로 합 고정 → $a_3,a_2,a_1$ 을 두 갈래씩 역추적 → 부등호 위배 갈래 기각 → 앞 세 항 합의 최대 $-$ 최소 $=32$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/291-688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 항과 두 규칙의 상수를 바꿀 수 있다($a_5=2$ · $a_n-3$ 과 $-3a_n+1$ · 합의 범위 $30$). 제약: 주어진 항 이후가 반드시 주기로 닫혀야 뒤쪽 합이 고정되고, 역추적 갈래 중 적어도 하나가 부등호에 걸려 기각되도록 상수를 잡아야 이 유형의 급소가 산다.'
    creative: '(1) 조건을 $a_4=3$ 대신 $a_5=3$ 으로 한 칸 늦추면 역추적 갈래가 한 겹 늘어 ★5 (2) 합의 최댓값만 묻고 그때의 $a_1$ 까지 답하게 하기(★5) (3) 분기 경계를 $a_n>0$ 으로 바꿔 0 의 처리를 따지게 하기(★5 · T-경계) (4) 가능한 수열의 개수를 묻기(★5 · I-VF 중심).'
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 3 · ★2 23 · ★3 7 · ★4 1 · ★5 2
- 통찰형 19 · 절차형 17 · premium 0
- 통찰 라벨 24개의 유형 분포: I-RT 7 · I-EQV 7 · I-PD 5 · I-BW 2 · I-VF 2 · I-XU 1. depth 3 은 291-688 의 I-BW 하나뿐이고, ★5 두 문항은 모두 I-VF 를 포함한다.
- 구역별: 개념원리 익히기 3문(모두 ★1 · 절차형) · 필수·발전 예제 16문(모두 ★2 · 통찰형 7) · STEP 1 7문(모두 ★2 · 통찰형 4) · STEP 2 7문(모두 ★3 · 통찰형 5) · 실력 UP 3문(★4 1 · ★5 2 · 모두 통찰형). 벤더 신호와 판정이 한 단도 어긋나지 않아 ±1 조정이 실제로 적용된 블록은 없다.
- type_hint 상위 5: 「계차 누적합·연쇄곱으로 닫는 점화식」 7(284-663 · 286-e3 · 286-e4 · 286-666 · 286-667 · 289-674 · 290-680) · 「등차·등비 판정 후 일반항·항 구하기」 6(284-662 · 285-e1 · 285-e2 · 285-664 · 289-672 · 289-673) · 「주기가 생기는 점화식」 5(287-e6 · 287-669 · 289-677 · 290-683 · 287-668) · 「$S_n$ 이 포함된 점화식」 4(288-e7 · 288-670 · 290-684 · 290-685) · 「실생활 시행의 점화식 모델링」 3(288-e8 · 288-671 · 289-678)
- 그림: 1문(`crop:fig-291-686.png`) — 나머지 35문은 발문만으로 골조가 잡혀 크롭을 열지 않았다.
- 전사 답과 골조가 어긋난 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-285-665 | $r$ 을 구하지 않고 $r^5$ 를 덩어리로 다루는 착안이 풀이의 전부인데 통찰 1개(EQV d2)라 +1 조건에 미달. 확인체크 유제 출발점 ★2 유지 | ★2 / ★3 |
| GN-ALG-289-673 | 통찰 0 · M_total 5 로 −1 후보(실질 난도는 익히기 수준)이나 STEP 1 자리라 ★2 유지 | ★1 / ★2 |
| GN-ALG-289-676 | 평가원 기출 · 부호 교대 8항 나열 · M_total 7 이지만 통찰 0 이라 기출 가산을 +0 으로 두고 ★2 유지 | ★2 / ★3 |
| GN-ALG-289-677 | 값 기준 분기 + 주기 발견이 겹쳐 체감은 STEP 2 급이나 통찰 1개(PD d2)라 +1 조건 미달로 ★2 유지 | ★2 / ★3 |
| GN-ALG-291-687 · GN-ALG-291-688 | 작업 지시의 ★5 조건(통찰 3개 이상 + SC/VF/SYM/XU 포함)은 충족하나 `novelty_score` 를 일괄 0 으로 두는 규칙 탓에 schema §2.14 의 ★5 참신도 게이트와는 형식상 충돌. 라벨은 ★5 로 두고 기록만 함 | ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 계차형 $a_{n+1}=a_n+f(n)$ 과 곱형 $a_{n+1}=a_nf(n)$ 은 누적합과 연쇄곱으로 도구가 달라 한 유형으로 묶지 않는 것이 좋다. ② 「주기가 생기는 점화식」은 분기 기준이 *항 번호의 홀짝*(287-e6 · 287-668)인 것과 *항의 값*(289-677 · 291-688)인 것이 난도가 한 단 이상 벌어지므로 하위 유형으로 갈라야 한다. ③ 「첨자를 $kn+r$ 로 분해하는 점화식」(290-681 · 291-687)은 이 단원의 상위 변별 유형으로 독립시킬 값이 있다. ④ 「역추적 + 경우 기각」(291-688)은 I-BW·I-VF 를 함께 요구하는 ★5 전용 슬롯이다.
- **통합해도 될 유형**: ⑤ 「등차 꼴 점화식」과 「등비 꼴 점화식」의 일반항 구하기(284-662 · 285-e1 · 285-e2 · 285-664 · 289-672 · 289-673)는 판정 한 줄 + 공식 한 줄로 골조가 같아 하나의 base ★2 유형으로 묶고 변형 축(구하는 것이 항인지 항 번호인지 합인지)만 나누면 된다. ⑥ 「$S_n$ 이 포함된 점화식」(288-e7 · 288-670 · 290-684 · 290-685)은 모두 $a_n=S_n-S_{n-1}$ 한 도구로 열리므로 한 유형으로 두되, 시작 항 번호가 밀리는 함정(290-684)을 난도 조정 신호로 기록한다. ⑦ 「실생활 시행의 점화식 모델링」(288-e8 · 288-671 · 289-678)은 $a_{n+1}=pa_n+q$ 를 세우는 같은 골조여서 소재만 다른 한 유형이다.
