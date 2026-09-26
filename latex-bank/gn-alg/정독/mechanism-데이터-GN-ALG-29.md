---
name: mechanism-데이터-GN-ALG-29
description: 개념원리 대수 29 자연수의 거듭제곱의 합(1/1 · 33문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 29 자연수의 거듭제곱의 합
  unit_code: GN-ALG-29
  part: "1/1"
  extract_range: "266~272쪽 · 266-613~272-640"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 그 확인체크 유제 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). ±1 은 「통찰 0 · M_total ≤ 5 → −1」 「통찰 2개 이상 또는 depth 3 → +1」 기준으로만 움직였다. depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 29 자연수의 거듭제곱의 합 (1/1) 정독 데이터 (v1.0)

266~272쪽 33문항 전수. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 12문(필수 예제 e5~e9 5문 + 확인체크 유제 7문) · 「연습문제 STEP 1」 8문 · 「연습문제 STEP 2」 7문 · 「연습문제 실력 UP」 3문으로, 이 단원은 벤더 난이도 신호가 네 층(익히기 → 예제 → STEP 1·2 → 실력 UP)으로 모두 살아 있다. 그래서 출발점은 구역에서 그대로 읽고, 거기서 M_total 과 통찰 라벨로만 ±1 을 조정했다. 확인체크 유제는 바로 앞 필수 예제와 같은 출발점(★2)을 썼다(GN-ALG-26 과 같은 결정).

내용은 (가) $\sum$ 의 성질과 $\sum k,\ \sum k^2,\ \sum k^3$ 공식에 바로 대입하는 층, (나) 상한·시작 index·더미 문자가 어긋난 $\sum$ 을 맞춰 붙이거나 떼는 층, (다) 부분합 $S_n$ 과 일반항 $a_n=S_n-S_{n-1}$ 을 오가는 층, (라) 나열된 수열·다항식 나머지·이차방정식의 근·좌표평면 도형에서 일반항을 먼저 만들어 $\sum$ 으로 옮기는 활용 층, (마) $\sum$ 이 두세 겹으로 중첩된 층의 다섯 겹으로 쌓인다. 판정에서는 두 $\sum$ 을 합쳐야 약분·상쇄가 생기는 착안, 나열된 수열의 일반항 발견, $S_n \leftrightarrow a_n$ 복원, 절댓값·홀짝의 대칭·분기, 이중합의 등장 횟수 세기만 통찰로 셌다. 공식 대입·전개·부분합 공식 적용·등비합 계산은 표준 절차로 보아 통찰에서 빼고 Mₖ 와 Mₜ(T-범위 상한/시작 index · T-표기 더미 문자 · T-부호 절댓값)로 흡수했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-266-613
  page: 266
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑸ 일차식·이차식·삼차식 꼴 $\sum$ 의 값 구하기. 곱 꼴 $(2k+1)(3k-1)$ · $k(k^2+2)$ 을 전개해야 공식이 붙는 형태까지 한 문항에 모았다.
  category: '괄호 전개 → $\sum$ 의 선형성 → $\sum k,\ \sum k^2,\ \sum k^3$ 공식 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '자연수의 거듭제곱의 합 공식으로 $\sum$(다항식) 계산하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 소문항 모두 전개 → 항별 분리 → 공식 대입의 같은 골조다. 곱 꼴 ⑷⑸ 만 전개 한 줄이 더 붙고 새 도구는 없다.
    상수항을 $\sum$ 하면 항의 개수만큼 곱해지는 것이 유일한 함정(T-표기)이라 Mₜ=1. 익히기 구역 출발 ★1 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: '전개해 $k$ 의 차수별로 분리 → $\sum k=\frac{n(n+1)}{2}$, $\sum k^2$, $\sum k^3$ 대입 → 수치'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $120$ ⑵ $161$ ⑶ $735$ ⑷ $1252$ ⑸ $483$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/266-613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한(10·7·5·8·6)과 계수는 자유롭게 바꿀 수 있다. 제약: 상한이 커지면 Mₖ 만 올라가고 골조는 그대로이므로 10 안팎을 유지하고, 답이 정수로 떨어지도록 $\sum k^3$ 이 섞인 문항은 상한을 작게 둔다.'
    creative: '(1) 곱 꼴을 삼차까지 올려 $\sum k^3$ 을 강제(★1 유지) (2) 상한을 $n$ 으로 두고 인수분해된 식으로 답하게 하면 Mₐ 상승 ★2 (3) 값을 주고 상한을 되묻는 역방향으로 바꾸면 267-e5 유형 ★2.'
```

```yaml
- id: GN-ALG-266-614
  page: 266
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑶ 상한이 같은 두 $\sum$ 의 차·합을 하나로 묶어 값 구하기. ⑶ 은 두 $\sum$ 의 더미 문자가 $k$ 와 $i$ 로 다르게 쓰여 있다.
  category: '$\sum$ 의 선형성으로 두 식을 한 $\sum$ 으로 묶기 → 상쇄 → 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '상한이 같은 두 $\sum$ 의 합·차 정리'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 각각 전개해 더하지 않고 먼저 한 $\sum$ 으로 묶으면 최고차항이 상쇄되어 일차·이차만 남는다. 묶는 것은 $\sum$ 의 기본 성질이라 통찰로 세지 않았다.
    더미 문자가 달라도 같은 합이라는 표기(T-표기)가 유일한 함정. 익히기 출발 ★1 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: '상한이 같으므로 $\sum\{f(k)-g(k)\}$ 로 묶기 → 최고차 상쇄 → 남은 낮은 차수에 공식 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-459$ ⑵ $340$ ⑶ $770$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/266-614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한(9·5·10)과 안쪽 식의 평행이동 폭($2k-3$ 의 $-3$, $(k\pm1)^3$ 의 $\pm1$)을 바꿀 수 있다. 제약: 묶었을 때 최고차가 상쇄되도록 두 식의 최고차항 계수를 같게 유지한다.'
    creative: '(1) 더미 문자를 셋 다 다르게 써서 T-표기 함정을 키우기(★1 유지) (2) 상한을 서로 다르게 주면 270-628 처럼 항을 떼어내야 해 ★2 (3) $\sum$ 의 차가 0 이 되는 평행이동 폭을 되묻는 역방향 ★2.'
```

```yaml
- id: GN-ALG-266-615
  page: 266
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑶ 점으로 이어진 수열의 합을 $\sum$ 으로 옮겨 구하기. 짝수의 합 · 홀수의 제곱합 · $5^3$ 부터 $15^3$ 까지의 세제곱합.
  category: '나열된 합의 일반항과 항의 개수 파악 → $\sum$ 으로 표현 → 공식'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '점으로 나열된 합을 $\sum$ 으로 고쳐 쓰고 계산하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ $2k$, ⑵ $(2k-1)^2$ 처럼 일반항을 읽고 마지막 항으로 항의 개수를 정하는 한 골조다. ⑶ 만 $1$ 부터의 합에서 $1^3$~$4^3$ 을 빼는 부분합 차이지만 이것도 교과서 표준 처리다.
    항의 개수(⑴ 25개 ⑵ 10개)와 ⑶ 의 시작점이 함정(T-범위·T-경계)이라 Mₜ=2. 익히기 출발 ★1 · 통찰 0 · M_total 7 → ★1 유지.
  tier: star_1
  mechanism_primary: '일반항과 항의 개수 결정 → $\sum$ 으로 고쳐 쓰기 → (⑶) 전체 합 − 앞부분 합 → 공식 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $650$ ⑵ $1330$ ⑶ $14300$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/266-615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '마지막 항(50 · $19^2$ · $15^3$)과 시작 항($5^3$)을 바꿀 수 있다. 제약: 마지막 항에서 항의 개수가 정수로 떨어져야 하고, ⑶ 처럼 도중부터 시작하면 빼는 앞부분 합이 공식으로 계산되는 범위여야 한다.'
    creative: '(1) $3$ 의 배수의 제곱합처럼 공차를 바꾸기(★1 유지) (2) 마지막 항을 $2n$ 으로 두고 $n$ 식으로 답하게 하면 ★2 (3) 합의 값을 주고 마지막 항을 되묻는 역방향은 이차방정식이 붙어 ★2~3.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-267-e5
  page: 267
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\sum_{k=1}^{n-1}(3k-2)=92$ 를 만족시키는 자연수 $n$ 구하기.
  category: '상한이 $n-1$ 인 $\sum$ 을 $n$ 의 이차식으로 → 방정식 → 자연수 근'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\sum$ 의 값이 주어졌을 때 상한(항의 개수) 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식의 $n$ 자리에 $n-1$ 을 넣어 $\frac{(n-1)(3n-4)}{2}$ 꼴을 만들고 $=92$ 를 이차방정식으로 푸는 표준 골조다. 도구가 하나뿐이라 통찰로는 세지 않았다.
    상한이 $n$ 이 아니라 $n-1$ 인 것(T-범위)과 음의 근을 버리는 것(T-경계)이 함정이라 Mₜ=2, 미지의 상한이라 Mₐ=2. 필수 예제 출발 ★2 · 통찰 0 · M_total 8 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sum_{k=1}^{n-1}(3k-2)$ 을 $n$ 의 이차식으로 정리 → $=92$ 이차방정식 → 자연수 근만 채택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/267-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일반항 $3k-2$ 의 계수와 우변 92 를 바꿀 수 있다. 제약: 정리한 이차방정식이 인수분해되고 양의 정수 근이 하나만 나오도록 우변을 고른다(상한이 $n-1$ 이므로 $n\ge2$ 도 확인).'
    creative: '(1) 상한을 $n+1$ 이나 $2n$ 으로 바꾸기(★2 유지) (2) 일반항을 $k^2$ 꼴로 올리면 삼차방정식이 되어 정수 근 추정이 필요 ★3 (3) 부등식 $\sum<92$ 를 만족하는 최대 $n$ 으로 바꾸면 T-경계가 핵심이 되어 ★3.'
```

```yaml
- id: GN-ALG-267-e6
  page: 267
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\sum_{k=1}^{10}\frac{1+2+3+\cdots+k}{k}$ 의 값 구하기.
  category: '분자의 부분합을 닫힌 식으로 → 약분 → 공식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sum$ 안에 또 들어 있는 부분합 $1+2+\cdots+k$ 를 $\frac{k(k+1)}{2}$ 로 바꿔야 분모 $k$ 와 약분되는 것이 보인다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum$ 안에 부분합이 들어 있는 식의 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 그대로 두면 진행이 안 되고 닫힌 식으로 바꾸는 순간 $\frac{k+1}{2}$ 한 줄로 내려앉는다. 동치 변환 통찰 1개(EQV d1).
    변환 뒤 계산은 $\frac{1}{2}(\sum k+10)$ 한 줄이라 Mₖ=1. 필수 예제 출발 ★2 · 통찰 1개 d1 → ★2 유지(통찰이 있어 −1 조건에 걸리지 않음).
  tier: star_2
  mechanism_primary: '분자 $1+2+\cdots+k=\frac{k(k+1)}{2}$ → $k$ 약분해 $\frac{k+1}{2}$ → $\sum$ 공식'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{65}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/267-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 10 과 분모 $k$ 를 $k+1$·$2k$ 로 바꿀 수 있다. 제약: 분자의 닫힌 식과 분모가 실제로 약분되어야 하므로 분모는 $k$ 또는 $k+1$ 계열로 제한된다.'
    creative: '(1) 분자를 $1^2+2^2+\cdots+k^2$ 로 올리고 분모를 $k(k+1)$ 로 두어 약분 구조 유지(★2 유지) (2) 값을 주고 상한을 되묻는 역방향 ★3 (3) 분모를 약분되지 않는 $k+3$ 으로 두면 267-616 처럼 두 $\sum$ 을 합쳐야 해 ★2~3.'
```

```yaml
- id: GN-ALG-267-616
  page: 267
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    분모가 같은 두 $\sum$ $\frac{k^3}{k+3}$ 과 $\frac{k(4k+3)}{k+3}$ 의 합(상한 10)의 값 구하기.
  category: '두 $\sum$ 을 먼저 합치기 → 분자 인수분해 → 약분 → 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '각각 계산하려 들면 막히고, 상한이 같으므로 먼저 한 $\sum$ 으로 묶어 분자를 $k(k+1)(k+3)$ 으로 인수분해해야 $k+3$ 이 약분된다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분모가 같은 두 $\sum$ 을 합쳐 약분하는 식의 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $k^3+4k^2+3k=k(k+1)(k+3)$ 이 보여야 $\sum k(k+1)$ 로 내려간다. 묶기와 인수분해가 한 단계로 붙어 있는 동치 변환 통찰 1개(EQV d2).
    확인체크 유제라 앞 필수 예제와 같은 출발 ★2 · 통찰 1개 d2(2개 미만이라 +1 조건 미달) → ★2 유지. 골조 자체는 예제보다 한 겹 두껍다.
  tier: star_2
  mechanism_primary: '두 $\sum$ 을 한 $\sum$ 으로 묶기 → 분자 $k(k+1)(k+3)$ 인수분해 → $k+3$ 약분 → $\sum(k^2+k)$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$440$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/267-616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 10 과 분모의 상수 3, 둘째 분자의 계수 $(4,3)$ 을 바꿀 수 있다. 제약: 두 분자의 합이 반드시 분모를 인수로 갖도록($k^3+ak^2+bk=k(k+p)(k+q)$, 분모 $k+q$) 계수를 맞춰야 한다.'
    creative: '(1) 분모를 $k+2$ 로 바꾸고 분자 계수를 그에 맞춰 재설계(★2 유지) (2) 두 $\sum$ 의 상한을 다르게 주면 항을 떼는 처리가 더해져 ★3 (3) 약분 후가 $\sum k^3$ 이 되도록 차수를 하나씩 올리면 Mₖ 만 오르고 ★ 는 그대로.'
```

```yaml
- id: GN-ALG-267-617
  page: 267
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $2x^2-x+1$ 을 $x-n$ 으로 나눈 나머지를 $a_n$ 이라 할 때 $\sum_{k=1}^{8}a_k$ 의 값 구하기.
  category: '나머지정리로 일반항 $a_n$ 확보 → $\sum$ 공식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '다항식의 나눗셈(나머지정리)으로 먼저 $a_n=2n^2-n+1$ 을 만들어야 수열 도구가 붙는다 — 두 단원의 도구가 모두 필요'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '나머지정리로 일반항을 구한 뒤 $\sum$ 계산하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 실제로 하지 않고 $x=n$ 을 대입하는 것이 첫 단계이고, 그 뒤는 이차식의 $\sum$ 이라 표준이다. 단원 경계 결합 통찰 1개(XU d1).
    일반항이 $n$ 으로 표현된 단계가 있어 Mₐ=2. 확인체크 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '나머지정리 $a_n=f(n)=2n^2-n+1$ → $\sum_{k=1}^{8}(2k^2-k+1)$ → 공식 대입'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$380$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/267-617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '다항식의 계수와 상한 8, 나누는 식 $x-n$ 의 $n$ 자리($x-2n$ 등)를 바꿀 수 있다. 제약: 나머지가 $n$ 에 대한 이차 이하 다항식이어야 거듭제곱의 합 공식으로 닫힌다.'
    creative: '(1) 나누는 식을 $x+n$ 으로 바꿔 부호 함정을 주기(★2 유지) (2) 삼차식을 $x-n$ 으로 나누게 하면 $\sum k^3$ 까지 필요 ★2 (3) 나머지가 아니라 몫의 상수항을 $a_n$ 으로 두면 나눗셈을 실제로 해야 해 ★3.'
```

```yaml
- id: GN-ALG-267-618
  page: 267
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\sum_{k=1}^{5}(1^2+2^2+3^2+\cdots+k^2)$ 의 값 구하기.
  category: '안쪽 제곱합을 닫힌 식으로 → 전개 → 바깥 $\sum$ 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '안쪽 합 $1^2+\cdots+k^2$ 을 $\frac{k(k+1)(2k+1)}{6}$ 로 닫아야 바깥 $\sum$ 에 공식을 쓸 수 있다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum$ 안에 제곱합이 들어 있는 식(이중합)의 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽을 닫아 $\frac{1}{6}(2k^3+3k^2+k)$ 로 만든 뒤 $\sum k^3,\ \sum k^2,\ \sum k$ 를 대입하는 골조다. 상한이 5 라 직접 더해도 되지만 정석은 닫는 쪽.
    동치 변환 통찰 1개(EQV d1) · 확인체크 출발 ★2 → ★2 유지. 상한이 작아 계산 부담은 중간(Mₖ=2).
  tier: star_2
  mechanism_primary: '안쪽 $\sum_{i=1}^{k}i^2=\frac{k(k+1)(2k+1)}{6}$ → 전개 → 바깥 $\sum_{k=1}^{5}$ 공식'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$105$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/267-618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 5 와 안쪽 합의 차수(제곱합 → 세제곱합)를 바꿀 수 있다. 제약: 상한을 키우면 직접 더하기가 막혀 공식 사용이 강제되므로 의도에 맞춰 고른다(7~10 이면 공식이 사실상 필수).'
    creative: '(1) 안쪽을 세제곱합으로 올려 $\sum k^4$ 없이 풀리는지 확인(사실상 $\{\frac{k(k+1)}{2}\}^2$ 전개 → ★3) (2) 상한을 $n$ 으로 두면 269-e9 ⑵ 와 같은 일반항 정리 ★3 (3) 값을 주고 상한을 되묻는 역방향 ★3.'
```

```yaml
- id: GN-ALG-268-e7
  page: 268
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    수열 $1\times3,\ 2\times5,\ 3\times7,\ 4\times9,\ \cdots$ 의 첫째항부터 제$n$항까지의 합을 $n$ 의 식으로 구하기.
  category: '나열된 곱에서 일반항 $k(2k+1)$ 발견 → $\sum$ → 인수분해 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 인자를 각각 $k$ 와 홀수 $2k+1$ 로 분리해 읽는 규칙 발견 — 일반항이 문제에 주어져 있지 않다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '나열된 수열의 일반항을 찾아 $\sum$ 으로 합 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항 $a_k=k(2k+1)=2k^2+k$ 만 세우면 나머지는 공식 두 개 대입이고, 답을 $\frac{n(n+1)(4n+5)}{6}$ 으로 묶는 인수분해가 마지막 손질이다.
    규칙 발견 통찰 1개(PD d1) · 일반 $n$ 식이라 Mₐ=2. 필수 예제 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_k=k(2k+1)$ → $\sum(2k^2+k)$ → $n(n+1)$ 로 묶어 $\frac{n(n+1)(4n+5)}{6}$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{n(n+1)(4n+5)}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/268-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 인자의 공차(여기서는 1 과 2)와 시작값을 바꿀 수 있다. 제약: 일반항이 $k$ 의 이차식이 되어야 하고, 답을 $n(n+1)(\cdots)$ 로 묶으려면 인수분해가 되는 계수 조합을 고른다.'
    creative: '(1) $2\times5,\ 4\times8,\ 6\times11,\cdots$ 처럼 두 인자 모두 공차를 주기(★2 유지) (2) 제$n$항까지의 합이 아니라 합이 처음 1000 을 넘는 $n$ 을 묻기(부등식 붙어 ★3) (3) 세 인자 곱으로 올리면 $\sum k^3$ 까지 필요 ★3.'
```

```yaml
- id: GN-ALG-268-e8
  page: 268
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\sum_{k=1}^{n}a_k=n^2+2n$ 일 때 짝수 번째 항만 모은 $\sum_{k=1}^{10}a_{2k}$ 의 값 구하기.
  category: '$a_n=S_n-S_{n-1}$ 로 일반항 복원 → 첨자 $2k$ 대입 → $\sum$ 공식'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '주어진 것은 부분합뿐이므로 $a_n=S_n-S_{n-1}$ 로 일반항을 복원해야 첨자 $2k$ 를 넣을 수 있다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum a_k$(부분합)가 주어질 때 일반항을 구해 다른 $\sum$ 계산하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=2n+1\ (n\ge2)$ 를 얻고 $a_1=S_1=3$ 이 같은 식에 들어맞는지 확인한 뒤 $a_{2k}=4k+1$ 로 바꿔 넣는 골조다.
    $n=1$ 을 따로 확인해야 하는 것(T-범위)과 첨자가 $k$ 가 아니라 $2k$ 인 것(T-표기)이 함정이라 Mₜ=2. 필수 예제 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_n=S_n-S_{n-1}=2n+1$($n=1$ 확인) → $a_{2k}=4k+1$ → $\sum_{k=1}^{10}(4k+1)$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$230$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/268-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '부분합 $n^2+2n$ 의 계수와 상한 10, 첨자 $2k$ 를 $2k-1$·$3k$ 로 바꿀 수 있다. 제약: $a_1=S_1$ 이 복원식에 맞는지 반드시 확인 — 상수항이 0 이 아니면 $n=1$ 에서 어긋나 답이 달라진다.'
    creative: '(1) 부분합에 상수항을 넣어 $n=1$ 이 예외가 되게 하면 T-범위가 핵심이 되어 ★3 (2) 홀수 번째 항만 묻기(★2 유지) (3) 부분합을 $3^n-1$ 같은 지수 꼴로 주면 268-620 처럼 비를 봐야 해 ★2~3.'
```

```yaml
- id: GN-ALG-268-619
  page: 268
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴ $1,\ 1+2,\ 1+2+3,\ \cdots$ ⑵ $2\times1^2,\ 3\times2^2,\ 4\times3^2,\ \cdots$ 의 첫째항부터 제8항까지의 합 구하기.
  category: '나열된 수열의 일반항 발견 → 전개 → $\sum$ 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑴ 제$k$항이 $\frac{k(k+1)}{2}$, ⑵ 제$k$항이 $(k+1)k^2$ 임을 나열에서 읽어내야 한다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '나열된 수열의 일반항을 찾아 $\sum$ 으로 합 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 일반항을 세우면 ⑴ $\frac{1}{2}\sum(k^2+k)$, ⑵ $\sum(k^3+k^2)$ 로 공식 두 개씩이다. ⑵ 는 앞 인자가 뒤 인자보다 1 큰 규칙을 놓치기 쉽다.
    규칙 발견 통찰 1개(PD d1) · 확인체크 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '제$k$항을 $k$ 의 식으로 세우기(⑴ $\frac{k(k+1)}{2}$ ⑵ $(k+1)k^2$) → 전개 → $\sum$ 공식'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $120$ ⑵ $1500$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/268-619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 개수 8 과 ⑵ 의 두 인자 간격(여기서는 1)을 바꿀 수 있다. 제약: 일반항이 삼차 이하가 되도록 유지해야 거듭제곱의 합 공식만으로 닫힌다.'
    creative: '(1) ⑴ 을 제곱합의 누적($1^2,\ 1^2+2^2,\cdots$)으로 올리기(★2~3) (2) 항의 개수를 $n$ 으로 두어 일반식으로 답하게 하면 ★3 (3) ⑵ 의 두 인자를 $(k+1)$ 과 $(k-1)^2$ 처럼 어긋나게 두면 시작 항 확인이 필요해 ★3.'
```

```yaml
- id: GN-ALG-268-620
  page: 268
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\sum_{k=1}^{n}a_k=3^n-1$ 일 때 $\sum_{k=1}^{11}\frac{ka_k}{a_{k+1}}$ 의 값 구하기.
  category: '$a_n=S_n-S_{n-1}$ 로 일반항 복원 → 이웃 항의 비가 상수 → $\sum k$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '부분합에서 $a_n=2\cdot3^{n-1}$ 을 복원하면 $\frac{a_k}{a_{k+1}}$ 가 $k$ 에 무관한 상수 $\frac{1}{3}$ 이 되어 $\sum$ 이 $\frac{1}{3}\sum k$ 로 내려간다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '부분합이 지수 꼴일 때 일반항을 구해 비가 포함된 $\sum$ 계산하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    복원식 $2\cdot3^{n-1}$ 에 $n=1$ 도 맞는지 확인하는 것이 필수 단계이고, 비를 약분하고 나면 $\frac{1}{3}\sum_{k=1}^{11}k$ 한 줄이다.
    $n=1$ 확인(T-범위)과 분모 첨자가 $k+1$ 인 것(T-표기)이 함정이라 Mₜ=2. 확인체크 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_n=S_n-S_{n-1}=2\cdot3^{n-1}$($n=1$ 확인) → $\frac{a_k}{a_{k+1}}=\frac{1}{3}$ → $\frac{1}{3}\sum_{k=1}^{11}k$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/268-620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 3 과 상한 11 을 바꿀 수 있다. 제약: 부분합이 $r^n-1$ 꼴이어야 $a_1$ 까지 한 식으로 맞고 비가 상수로 떨어진다. 상한은 $\sum k$ 가 밑으로 나누어떨어지도록 고르면 답이 정수.'
    creative: '(1) 부분합을 $3^n+1$ 로 바꿔 $n=1$ 이 예외가 되게 하면 T-범위가 핵심 ★3 (2) 분자를 $k^2a_k$ 로 올리기(★2 유지, Mₖ만 상승) (3) 비를 $\frac{a_{k+2}}{a_k}$ 로 두면 첨자 간격 처리로 ★3.'
```

```yaml
- id: GN-ALG-269-e9
  page: 269
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴ 이중합 $\sum_{m=1}^{7}\{\sum_{n=1}^{7}(m+n)\}$ 의 값 ⑵ 삼중합 $\sum_{m=1}^{n}[\sum_{l=1}^{m}\{\sum_{k=1}^{l}k\}]$ 을 $n$ 의 식으로 간단히 하기.
  category: '안쪽 $\sum$ 의 문자만 변수, 나머지는 상수 → 안에서 바깥으로 차례로 닫기'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '안쪽 $\sum$ 에서는 바깥 문자($m$·$l$)가 상수라는 것을 알아채고 $\sum_{n=1}^{7}m=7m$ 처럼 항의 개수 곱으로 바꿔야 겹이 한 겹씩 벗겨진다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sum$ 을 여러 개 포함한 식(이중·삼중합)의 계산'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 안쪽에서 $7m+28$ 을 얻고 바깥에서 다시 $\sum$, ⑵ 는 $\frac{l(l+1)}{2}$ → $\frac{m(m+1)(m+2)}{6}$ → $\frac{n(n+1)(n+2)(n+3)}{24}$ 로 같은 조작을 세 번 반복하며 계수 패턴이 이어진다.
    동치 변환 통찰 1개(EQV d2)지만 ⑵ 의 단계 수가 많아 Mₛ=3, 일반 $n$ 식이라 Mₐ=2, 문자 혼동(T-표기)과 상한 일치(T-범위)로 Mₜ=2 → M_total 9.
    필수 예제 출발 ★2 · M_total 9 로 구역 평균을 크게 웃돌아 +1 → ★3.
  tier: star_3
  mechanism_primary: '안쪽부터 닫기: 바깥 문자를 상수로 보고 $\sum$ 공식 적용 → 결과를 다음 $\sum$ 의 일반항으로 → 반복'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $392$ ⑵ $\dfrac{n(n+1)(n+2)(n+3)}{24}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/269-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 상한 7 과 안쪽 식 $m+n$ 을 $mn$·$m-n$ 으로, ⑵ 의 겹 수(3겹)를 2·4겹으로 바꿀 수 있다. 제약: 겹을 늘릴수록 답의 분모가 $2,6,24,120$ 으로 커지므로 정리된 인수분해 꼴이 나오는지 확인한다.'
    creative: '(1) ⑴ 에서 두 상한을 다르게(예: $m$ 은 5, $n$ 은 7) 두어 대칭을 깨기(★3 유지) (2) 안쪽 식을 $mn$ 으로 두면 두 $\sum$ 이 분리되어 오히려 쉬워짐 ★2 (3) ⑵ 의 결과가 조합 $\binom{n+3}{4}$ 임을 묻는 형태로 바꾸면 표현 전환이 더해져 ★4.'
```

```yaml
- id: GN-ALG-269-621
  page: 269
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴ $\sum_{l=1}^{6}(\sum_{k=1}^{l}kl)$ ⑵ 상수 2 의 삼중합 $\sum_{k=1}^{9}[\sum_{j=1}^{k}\{\sum_{i=1}^{j}2\}]$ 의 값 구하기.
  category: '안쪽 $\sum$ 에서 바깥 문자는 상수로 묶어내기 → 차례로 닫기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑴ 안쪽에서 $l$ 을 상수로 보아 $l\sum k$ 로 빼내고, ⑵ 는 상수의 $\sum$ 이 항의 개수 곱이라는 것을 세 번 연달아 쓴다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum$ 을 여러 개 포함한 식(이중·삼중합)의 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\frac{l^3+l^2}{2}$, ⑵ 는 $2j \to j(j+1) \to$ 다시 $\sum$ 으로 내려가는 같은 반복이다. 앞 필수 예제 ⑵ 와 골조가 같고 문자가 구체 수치라 한 겹 가볍다.
    동치 변환 통찰 1개(EQV d1) · 문자 혼동(T-표기)과 상한 연동(T-범위)으로 Mₜ=2. 확인체크 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '안쪽 $\sum$ 에서 바깥 문자를 상수로 빼내기 → 안에서 바깥으로 차례로 $\sum$ 공식'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $266$ ⑵ $330$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/269-621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 6·9 와 ⑵ 의 상수 2 를 바꿀 수 있다. 제약: ⑴ 은 안쪽 상한이 바깥 문자 $l$ 에 연동되어야 하고, 상한을 키우면 $\sum l^3$ 계산만 무거워진다.'
    creative: '(1) ⑴ 의 안쪽 식을 $k+l$ 로 바꾸면 269-e9 ⑴ 과 같은 골조(★2 유지) (2) ⑵ 의 상수를 $i$ 로 바꾸면 269-e9 ⑵ 의 삼중합 ★3 (3) 값을 주고 상한을 되묻는 역방향은 269-622 유형 ★2~3.'
```

```yaml
- id: GN-ALG-269-622
  page: 269
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\sum_{n=1}^{m}(\sum_{i=1}^{n}i)=56$ 일 때 자연수 $m$ 의 값 구하기.
  category: '이중합을 $m$ 의 삼차식으로 닫기 → 방정식 → 자연수 근'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '합의 값 56 에서 상한 $m$ 을 역추적한다 — 삼차식 $\frac{m(m+1)(m+2)}{6}=56$ 을 연속한 세 자연수의 곱 $336=6\cdot7\cdot8$ 로 읽어야 빠르다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum$ 의 값이 주어졌을 때 상한 구하기(이중합)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽을 $\frac{n(n+1)}{2}$ 로 닫고 바깥을 $\frac{m(m+1)(m+2)}{6}$ 로 정리한 뒤 $=56$ 을 푸는 골조다. 삼차방정식을 전개해 풀지 않고 연속한 세 수의 곱으로 보는 것이 요령.
    역방향 통찰 1개(BW d1) · 확인체크 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '안쪽 $\frac{n(n+1)}{2}$ → 바깥 $\frac{m(m+1)(m+2)}{6}=56$ → $m(m+1)(m+2)=336$ → $m=6$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/269-622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 56 을 바꿀 수 있다. 제약: $\frac{m(m+1)(m+2)}{6}$ 이 정확히 그 값이 되는 자연수 $m$ 이 존재해야 한다(84 → $m=7$, 120 → $m=8$).'
    creative: '(1) 안쪽을 제곱합으로 올리면 사차식이 되어 정수 근 추정이 어려워짐 ★3 (2) 부등식 $\sum\le56$ 을 만족하는 최대 $m$ 으로 바꾸면 T-경계가 핵심 ★3 (3) 삼중합으로 겹을 늘리면 269-e9 ⑵ 의 결과식을 쓰는 ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-270-623
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $\sum_{k=0}^{9}(2k+2)^2+\sum_{k=1}^{10}(2k-1)^2$ 과 값이 같은 것을 5지선다에서 고르기.
  category: '두 $\sum$ 이 짝수 제곱합·홀수 제곱합임을 읽기 → 합치면 연속 제곱합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '앞은 $2^2+4^2+\cdots+20^2$, 뒤는 $1^2+3^2+\cdots+19^2$ 이므로 합치면 $1^2$ 부터 $20^2$ 까지 빠짐없이 한 번씩 — 실제로 값을 계산하지 않고 구조로 판정한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sum$ 의 항을 풀어 써서 같은 값의 식 찾기(짝수·홀수 제곱합 합치기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    시작 index 가 $k=0$ 이라 앞 $\sum$ 의 항이 $2^2$ 부터 $20^2$ 까지 10개라는 것을 먼저 확인해야 한다(T-범위·T-표기로 Mₜ=2).
    두 $\sum$ 을 합치면 $\sum_{k=1}^{20}k^2$ 이라는 동치 변환 통찰 1개(EQV d2). 계산은 필요 없어 Mₖ=1.
    STEP 1 출발 ★2 · 통찰 1개 d2(2개 미만이라 +1 미달) → ★2 유지.
  mechanism_primary: '$\sum_{k=0}^{9}(2k+2)^2$ = 짝수 제곱합, $\sum_{k=1}^{10}(2k-1)^2$ = 홀수 제곱합 → 합 = $\sum_{k=1}^{20}k^2$'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 9·10(즉 20까지)을 바꿀 수 있다. 제약: 두 $\sum$ 의 항이 겹치지도 빠지지도 않게 짝수 쪽과 홀수 쪽의 마지막 항을 맞춰야 하고, 시작 index 를 $k=0$ 으로 둔 장치는 유지해야 함정이 산다.'
    creative: '(1) 세제곱으로 올려 $\sum_{k=1}^{20}k^3$ 이 되게 하기(★2 유지) (2) 한쪽 상한을 하나 어긋나게 해 답이 $\sum_{k=1}^{20}k^2-20^2$ 이 되도록(★3) (3) 값을 직접 구하게 하면 통찰이 죽고 계산만 남아 ★1~2.'
```

```yaml
- id: GN-ALG-270-624
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $n^2$ 을 2로 나눈 나머지를 $a_n$ 이라 할 때 $\sum_{k=1}^{100}a_k$ 의 값 구하기.
  category: '$n$ 의 홀짝에 따라 나머지가 1·0 → 1의 개수 세기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a_n$ 이 $1,0,1,0,\cdots$ 으로 주기 2 를 이룬다는 것을 발견하면 $\sum$ 공식 없이 1의 개수만 세면 된다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '나머지로 정의된 수열의 주기를 찾아 $\sum$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거듭제곱의 합 공식이 전혀 쓰이지 않고, 일반항이 주기수열임을 본 뒤 1 이 나오는 홀수 항의 개수 50 을 세는 것이 전부다.
    주기 발견 통찰 1개(PD d1) · $n$ 으로 정의된 일반항이라 Mₐ=2. STEP 1 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$n$ 홀수 → $a_n=1$, 짝수 → $a_n=0$ → $1\sim100$ 중 홀수 50개 → 합 50'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '나누는 수 2 와 상한 100 을 바꿀 수 있다. 제약: 나누는 수를 3·4 로 바꾸면 주기가 3·4 가 되므로 상한을 주기의 배수로 두어야 나머지 항 처리가 깔끔하다.'
    creative: '(1) $n^2$ 을 3으로 나눈 나머지로 바꾸면 주기 3, 값 $1,1,0$ 반복 ★2~3 (2) $2^n$ 을 5로 나눈 나머지로 두면 주기 4 ★3 (3) 상한을 주기의 배수가 아닌 수로 두면 T-경계가 핵심이 되어 ★3.'
```

```yaml
- id: GN-ALG-270-625
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    상한이 15·9·10 으로 뒤섞인 두 $\sum$ 조건이 주어질 때 $a_{10}$ 의 값 구하기.
  category: '모든 $\sum$ 을 부분합 $S_n$ 으로 바꾸기 → 두 조건 결합 → $a_{10}=S_{10}-S_9$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 조건을 $S_{15},S_9,S_{10}$ 의 식으로 옮긴 뒤 $S_{15}$ 를 소거하면 $S_{10}-S_9$ 가 통째로 나온다 — 개별 값을 구할 필요가 없다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sum$ 으로 주어진 두 조건에서 특정 항 구하기($S_n$ 결합)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 식을 2배 해 $2S_{15}-S_9$ 를 만들고 둘째 식 $2S_{15}-S_{10}$ 과 빼면 $S_{10}-S_9=a_{10}$ 이 바로 나온다. $S_{15}$ 나 $S_{10}$ 각각을 구하려 들면 미지수가 부족해 막힌다.
    조건 통합 통찰 1개(CON d2)이고 「구하려는 것이 두 부분합의 차」라는 목표 역산이 붙어 STEP 1 평균보다 한 층 위 → 출발 ★2 에서 +1 하여 ★3.
    [분류 이슈] 벤더 STEP 1(★2 출발)과 1단 차이 — 라벨은 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: '$\sum$ 을 $S_n$ 표기로 → 첫 식 $\times2$ → 둘째 식과 차를 취해 $S_{15}$ 소거 → $a_{10}=S_{10}-S_9$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 75·120 과 계수 $\frac{1}{2}$·2 를 바꿀 수 있다. 제약: 두 식에서 $S_{15}$ 가 소거되도록 계수 비를 맞춰야 하고, 남는 것이 정확히 인접한 두 부분합의 차여야 한 항이 결정된다.'
    creative: '(1) 상한을 $15,9,10$ 에서 $20,12,13$ 으로 옮기기(★3 유지) (2) 소거 후 $S_{12}-S_9$ 가 남게 설계하면 세 항의 합을 묻는 문제로 ★3 (3) 세 조건·세 미지 부분합으로 늘리면 연립이 무거워져 Mₖ 만 상승 ★3.'
```

```yaml
- id: GN-ALG-270-626
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $a_n=2^n\cos n\pi$ 일 때 $\sum_{k=1}^{9}a_k$ 의 값 구하기.
  category: '$\cos n\pi=(-1)^n$ 로 바꾸기 → 공비 $-2$ 의 등비수열 합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '삼각함수 표현 $\cos n\pi$ 를 부호 표현 $(-1)^n$ 으로 옮겨야 수열 도구가 붙는다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\cos n\pi$ 등 부호가 교대하는 일반항의 $\sum$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표현만 바꾸면 첫째항 $-2$, 공비 $-2$, 9항인 등비수열의 합이라 거듭제곱의 합 공식이 아니라 등비수열 합 공식이 쓰인다.
    표현 전환 통찰 1개(RT d1) · 공비가 음수라 부호 실수가 잦고(T-부호) 항수 9 가 홀수라 마지막 부호가 음(T-경계) → Mₜ=2.
    STEP 1 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\cos n\pi=(-1)^n$ → $a_n=(-2)^n$ → 첫째항 $-2$·공비 $-2$·9항 등비합'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$-342$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 2 와 항수 9 를 바꿀 수 있다. 제약: 항수의 홀짝에 따라 부호가 달라지므로 답의 부호를 확인하고, 공비가 $-1$ 이 되는 밑 1 은 피한다.'
    creative: '(1) $\sin\frac{n\pi}{2}$ 로 바꾸면 $0,1,0,-1$ 주기 4 가 되어 주기 처리 ★3 (2) $n^2\cos n\pi$ 로 두면 교대 부호의 제곱합을 두 묶음으로 갈라야 해 ★3 (3) $(-1)^n$ 을 그대로 써 주면 통찰이 사라져 ★1~2.'
```

```yaml
- id: GN-ALG-270-627
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    이차방정식 $(n^2+3n+2)x^2-(n+2)x+1=0$ 의 두 근의 합을 $a_n$ 이라 할 때 $\sum_{k=1}^{11}\frac{1}{a_k}$ 의 값 구하기.
  category: '근과 계수의 관계로 $a_n$ → 인수분해 약분 → $\frac{1}{a_k}$ 가 일차식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '이차방정식의 근과 계수의 관계로 두 근의 합을 계수만으로 얻고, $n^2+3n+2=(n+1)(n+2)$ 로 약분해야 수열이 단순해진다 — 방정식과 수열 두 단원의 도구'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '근과 계수의 관계로 일반항을 만든 뒤 $\sum$ 계산하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근을 직접 구하지 않고 $a_n=\frac{n+2}{(n+1)(n+2)}=\frac{1}{n+1}$ 까지 줄이면 $\frac{1}{a_k}=k+1$ 이라 남은 것은 $\sum(k+1)$ 한 줄이다.
    단원 경계 결합 통찰 1개(XU d1) · 계수가 $n$ 의 식이라 Mₐ=2. STEP 1 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '두 근의 합 $a_n=\frac{n+2}{n^2+3n+2}=\frac{1}{n+1}$ → $\frac{1}{a_k}=k+1$ → $\sum_{k=1}^{11}(k+1)$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$77$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수의 인수분해 꼴 $(n+1)(n+2)$ 와 일차항 계수 $n+2$, 상한 11 을 바꿀 수 있다. 제약: 일차항 계수가 이차항 계수의 인수여야 약분되어 $a_n$ 이 간단한 분수가 된다.'
    creative: '(1) 두 근의 곱을 $a_n$ 으로 두면 $a_n=\frac{1}{(n+1)(n+2)}$ 이 되어 부분분수 텔레스코핑으로 이어짐 ★3 (2) 두 근의 제곱의 합을 묻기(곱셈 공식 한 겹 추가 ★3) (3) 약분되지 않는 계수로 두면 $\sum$ 이 닫히지 않아 문제 자체가 성립하지 않음.'
```

```yaml
- id: GN-ALG-270-628
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    시작 index 가 1 과 2 로 다른 두 $\sum$ $(3k^2+2)$, $(3k^2-2)$ 의 합(상한 모두 10)의 값 구하기.
  category: '시작 index 를 1 로 맞추고 $k=1$ 항을 떼어내기 → 묶어서 공식'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '시작 index 가 다른 두 $\sum$ 의 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘째 $\sum$ 을 $k=1$ 부터로 되돌리고 $3\cdot1^2-2=1$ 을 빼면 두 식이 묶여 $6\sum k^2$ 만 남는다. 도구는 $\sum$ 의 성질 하나뿐이라 통찰로 세지 않았다.
    시작 index 차이(T-범위)와 상수항 $\pm2$ 의 개수 차이(T-표기)가 함정이라 Mₜ=2. STEP 1 출발 ★2 · 통찰 0 · M_total 7(−1 조건 미해당) → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sum_{k=2}^{10}$ 을 $\sum_{k=1}^{10}$ − ($k=1$ 항)으로 고치기 → 두 $\sum$ 묶어 $6\sum_{k=1}^{10}k^2$ → 상수항 정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2309$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작 index(2)와 상한 10, 상수항 $\pm2$ 를 바꿀 수 있다. 제약: 두 $\sum$ 의 $k^2$ 계수를 같게 두어야 묶는 이점이 살고, 시작 index 를 3 이상으로 올리면 떼어낼 항이 늘어 Mₖ 만 커진다.'
    creative: '(1) 상수항 부호를 같게 해 상쇄가 아니라 누적이 되게 하기(★2 유지) (2) 한쪽 상한을 9 로 낮춰 끝 항도 떼어내게 하면 양끝 처리로 ★3 (3) 시작 index 를 $n$ 으로 두어 일반식으로 답하게 하면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-270-629
  page: 270
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $1\times19+2\times18+3\times17+\cdots+19\times1$ 의 값 구하기.
  category: '두 인자의 합이 20 인 규칙 발견 → 일반항 $k(20-k)$ → $\sum$'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '앞 인자가 1씩 늘고 뒤 인자가 1씩 줄어 두 인자의 합이 항상 20 이라는 규칙에서 일반항 $k(20-k)$ 를 세운다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 인자의 합이 일정한 곱의 합을 $\sum$ 으로 계산하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항만 세우면 $\sum(20k-k^2)$ 로 공식 두 개다. 항의 개수가 19 이지 20 이 아니라는 점(T-범위)과 마지막 항이 $19\times1$ 로 대칭이라는 점(T-경계)이 함정이라 Mₜ=2.
    규칙 발견 통찰 1개(PD d1) · STEP 1 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '두 인자의 합 = 20 → 일반항 $k(20-k)$, $k=1\sim19$ → $20\sum k-\sum k^2$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$1330$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/270-629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 인자의 합 20(즉 마지막 항의 위치)을 바꿀 수 있다. 제약: 항의 개수가 합보다 1 작다는 것을 유지해야 하고, 합을 홀수로 두면 가운데 대칭 항이 없어져 구조가 달라진다.'
    creative: '(1) $1\times20+2\times19+\cdots+20\times1$ 처럼 항수를 합과 같게 두어 T-범위 함정을 바꾸기(★2 유지) (2) 곱을 제곱 곱 $k^2(20-k)$ 로 올리면 $\sum k^3$ 까지 필요 ★3 (3) 두 인자의 곱이 아니라 차의 절댓값의 합으로 바꾸면 대칭 분할이 필요해 ★3.'
```

```yaml
- id: GN-ALG-271-630
  page: 271
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $\sum_{k=1}^{n}a_k=\frac{n}{n+1}$ 일 때 $\sum_{k=1}^{12}\frac{1}{a_k}$ 의 값 구하기.
  category: '$a_n=S_n-S_{n-1}$ 로 일반항 복원 → 역수는 $k(k+1)$ → $\sum$ 공식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '부분합에서 $a_n=\frac{n}{n+1}-\frac{n-1}{n}=\frac{1}{n(n+1)}$ 을 복원해야 역수가 다항식이 되어 거듭제곱의 합 공식이 붙는다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '부분합이 분수식일 때 일반항의 역수의 $\sum$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수의 차를 통분해 $\frac{1}{n(n+1)}$ 까지 정리하는 것이 계산의 고비이고($n=1$ 이 복원식에 맞는지도 확인), 그 뒤 $\frac{1}{a_k}=k^2+k$ 는 공식 두 개다.
    동치 변환 통찰 1개(EQV d1) · $n=1$ 확인(T-범위)과 역수 취급(T-표기)으로 Mₜ=2 → M_total 8.
    STEP 1 출발 ★2 · 통찰 1개 d1(+1 조건 미달) → ★2 유지. 계산 부담만 STEP 1 상단.
  tier: star_2
  mechanism_primary: '$a_n=S_n-S_{n-1}=\frac{1}{n(n+1)}$($n=1$ 확인) → $\frac{1}{a_k}=k(k+1)$ → $\sum_{k=1}^{12}(k^2+k)$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$728$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '부분합 $\frac{n}{n+1}$ 의 꼴($\frac{n}{2n+1}$ 등)과 상한 12 를 바꿀 수 있다. 제약: 복원한 $a_n$ 의 역수가 다항식이 되어야 공식으로 닫히므로 분자·분모가 인접한 형태를 유지한다.'
    creative: '(1) 부분합을 $\frac{n}{n+2}$ 로 바꾸기(역수가 $\frac{(k+1)(k+2)}{2}$ 꼴 ★2~3) (2) $\sum a_k$ 자체를 텔레스코핑으로 되묻기(★2) (3) $\sum\frac{1}{a_k}$ 의 값을 주고 상한을 되묻는 역방향 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-271-631
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제 STEP 2'
  summary: |
    $a_1=-4$ 이고 모든 자연수 $n$ 에서 $\sum_{k=1}^{n}\frac{a_{k+1}-a_k}{a_ka_{k+1}}=\frac{1}{n}$ 일 때 $a_{13}$ 의 값 구하기. 5지선다.
  category: '분자를 쪼개 $\frac{1}{a_k}-\frac{1}{a_{k+1}}$ → 소거(망원) → $\frac{1}{a_{n+1}}$ 식'
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\frac{a_{k+1}-a_k}{a_ka_{k+1}}=\frac{1}{a_k}-\frac{1}{a_{k+1}}$ 로 쪼개야 $\sum$ 이 중간 항 소거로 $\frac{1}{a_1}-\frac{1}{a_{n+1}}$ 한 덩어리가 된다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분자가 차인 분수 수열의 $\sum$ — 부분분수 소거(망원합)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수열 $\{a_n\}$ 의 일반항은 끝까지 모르는 채로 $\frac{1}{a_{n+1}}$ 만 조건식에서 읽어내고 $n=12$ 를 넣어 $a_{13}$ 에 도달하는 골조다.
    쪼개기+소거 통찰 1개(EQV d2) · 일반 수열이 그대로 남아 Mₐ=3 · 첨자 $n+1$ 과 목표 $a_{13}$ 의 어긋남(T-표기)과 음수 부호(T-부호)로 Mₜ=2 → M_total 9.
    STEP 2 출발 ★3 · 평가원 기출 +0~1 이나 통찰 1개 d2 로 +1 조건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: '분자를 쪼개 $\frac{1}{a_k}-\frac{1}{a_{k+1}}$ → 망원 소거 → $\frac{1}{a_1}-\frac{1}{a_{n+1}}=\frac{1}{n}$ → $n=12$ 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_1=-4$ 와 우변 $\frac{1}{n}$ 의 계수, 구하는 항 번호 13 을 바꿀 수 있다. 제약: $\frac{1}{a_1}-\frac{1}{n}$ 이 0 이 되는 $n$ 에서는 $a_{n+1}$ 이 정의되지 않으므로 그 값을 피하고, 선택지가 정수로 떨어지도록 $a_1$ 을 고른다.'
    creative: '(1) 우변을 $\frac{n}{n+1}$ 로 바꿔 소거 후 식을 한 겹 더 정리하게 하기(★3 유지) (2) $a_1$ 대신 $a_{13}$ 을 주고 $a_1$ 을 되묻는 역방향(★3, BW 추가) (3) 분자를 $a_{k+1}+a_k$ 로 바꾸면 소거가 안 되어 골조가 무너짐 — 변형 금지 지점.'
```

```yaml
- id: GN-ALG-271-632
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    부분합 $S_n$ 이 상한 $n+1$ 과 $n$ 으로 어긋난 두 $\sum$ 의 차로 주어질 때 제10항 구하기.
  category: '상한을 맞춰 $k^2$ 상쇄 → $S_n$ 을 $n$ 의 이차식으로 → $a_{10}=S_{10}-S_9$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '앞 $\sum$ 에서 $k=n+1$ 항을 떼어내 상한을 맞추면 $k^2$ 이 통째로 상쇄되고 $\sum 2$ 만 남는다 — 두 $\sum$ 을 각각 공식으로 펼치면 삼차식 계산으로 길어진다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '상한이 어긋난 두 $\sum$ 의 차로 주어진 $S_n$ 에서 일반항 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상한 맞추기 → 상쇄 → $S_n=n^2+4n+2$ → $a_{10}=S_{10}-S_9$ 의 두 겹 골조다. $S_n$ 을 구해 놓고 $a_{10}$ 을 $S_{10}$ 으로 착각하기 쉬운 점이 함정.
    동치 변환 통찰 1개(EQV d2) · 상한 $n+1$(T-범위)과 항 번호(T-표기)로 Mₜ=2. STEP 2 출발 ★3 · +1 조건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: '$k=n+1$ 항 분리로 상한 맞추기 → $k^2$ 상쇄 → $S_n=2n+(n+1)^2+1$ → $a_{10}=S_{10}-S_9$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 $\sum$ 안의 상수항 $\pm1$ 과 구하는 항 번호 10, 상한 어긋남 폭(여기서는 1)을 바꿀 수 있다. 제약: 두 일반항의 $k^2$ 계수를 같게 두어야 상쇄 이점이 살고, 어긋남 폭을 2 로 늘리면 떼어낼 항이 둘로 늘어난다.'
    creative: '(1) 상한을 $n+2$ 와 $n$ 으로 벌리기(★3 유지, Mₖ 상승) (2) 두 일반항의 차수를 $k^3$ 으로 올리면 상쇄 후 이차식이 남아 ★3 (3) $S_n$ 이 아니라 $\sum_{k=1}^{n}ka_k$ 로 주면 271-636 골조와 결합해 ★4.'
```

```yaml
- id: GN-ALG-271-633
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    $\sum_{k=1}^{n}(1+2+2^2+\cdots+2^{k-1})=a\times2^n+bn+c$ 일 때 상수 $a,b,c$ 의 곱 구하기.
  category: '안쪽 등비 부분합을 $2^k-1$ 로 닫기 → 다시 등비합 → 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '안쪽 합을 등비수열의 합 $2^k-1$ 로 닫아야 바깥 $\sum$ 이 다시 등비합 + 상수합으로 갈라진다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\sum$ 안에 등비 부분합이 들어 있는 식의 계산과 계수 비교'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\sum(2^k-1)=2^{n+1}-2-n$ 을 $a\cdot2^n+bn+c$ 꼴로 보아 $a=2,\ b=-1,\ c=-2$ 를 읽는 항등식 비교가 마지막 단계다.
    동치 변환 통찰 1개(EQV d1) · 상수 $a,b,c$ 가 미지수로 남아 Mₐ=2. STEP 2 출발 ★3 · 통찰 1개 d1 → ★3 유지(골조 자체는 STEP 2 하단).
  tier: star_3
  mechanism_primary: '안쪽 등비합 $=2^k-1$ → $\sum_{k=1}^{n}(2^k-1)=2^{n+1}-2-n$ → $2\cdot2^n-n-2$ 와 계수 비교'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공비 2 와 우변의 꼴($a\times3^n+bn+c$ 등)을 바꿀 수 있다. 제약: 안쪽 등비합이 $\frac{r^k-1}{r-1}$ 이므로 $r-1$ 이 나누어떨어지게 공비를 고르면 $a,b,c$ 가 정수로 떨어진다.'
    creative: '(1) 안쪽을 $1+3+3^2+\cdots$ 로 바꿔 분모 2 가 생기게 하기(★3 유지) (2) 안쪽을 등차 부분합으로 두면 267-e6·267-618 골조로 내려가 ★2 (3) $a+b+c$ 가 아니라 $abc$ 처럼 부호가 곱해지게 두면 T-부호 함정이 커져 ★3.'
```

```yaml
- id: GN-ALG-271-634
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    공차가 양수인 등차수열에서 $a_6=15$, $\sum_{k=4}^{8}|2a_k-30|=24$ 일 때 $a_7$ 의 값 구하기.
  category: '$2a_k-30=2(a_k-a_6)$ → $k=6$ 대칭 거리 → 절댓값 합이 $12d$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$30=2a_6$ 이므로 $|2a_k-30|=2|k-6|d$ 가 되어 $k=4\sim8$ 이 $a_6$ 을 중심으로 대칭 — 절댓값을 경우로 나누지 않고 거리 $2,1,0,1,2$ 의 합으로 한 번에 처리한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '절댓값이 포함된 등차수열의 $\sum$ 에서 공차 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭을 못 보면 $d$ 를 미지수로 두고 다섯 항의 절댓값을 부호로 나눠야 하지만, $a_6$ 이 중심임을 보면 $12d=24$ 한 줄이다. 공차가 양수라는 조건이 부호 결정을 대신해 준다.
    대칭 활용 통찰 1개(SYM d2) · 절댓값 부호(T-부호)와 시작 index 4(T-범위)로 Mₜ=2. STEP 2 출발 ★3 · 통찰 1개(+1 조건 미달) → ★3 유지.
  tier: star_3
  mechanism_primary: '$a_6=15$ → $|2a_k-30|=2|k-6|d$ → $\sum_{k=4}^{8}=12d=24$ → $d=2$ → $a_7=a_6+d$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_6=15$ 와 합 24, 범위 $k=4\sim8$ 을 바꿀 수 있다. 제약: 30 이 정확히 $2a_6$ 이어야 대칭 중심이 생기고, 범위는 중심 6 을 기준으로 좌우 같은 폭이어야 한다. 합은 폭의 합(여기 6)의 $2d$ 배이므로 $d$ 가 유리수로 떨어지게 고른다.'
    creative: '(1) 범위를 $k=3\sim9$ 로 넓혀 거리 합을 12 로 만들기(★3 유지) (2) 중심을 벗어나게 $k=5\sim9$ 로 두면 대칭이 깨져 경우를 나눠야 하고 ★4 (3) 공차의 부호 조건을 빼면 두 경우를 모두 따져 기각해야 해 I-VF 가 붙어 ★4.'
```

```yaml
- id: GN-ALG-271-635
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    시작 index 가 $1,2,3,\cdots,10$ 으로 하나씩 커지는 $\sum_{k=m}^{10}k^2$ 을 $m=1$ 부터 10 까지 모두 더한 값 구하기.
  category: '각 $k^2$ 이 몇 번 더해지는지 세기 → $\sum k\cdot k^2=\sum k^3$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '열 개의 $\sum$ 을 차례로 계산하지 않고 「$k^2$ 은 시작 index 가 $1\sim k$ 인 $\sum$ 에 들어가므로 정확히 $k$ 번 나온다」로 세는 쪽으로 표현을 바꾸면 전체가 $\sum k^3$ 하나가 된다'
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: '시작 index 가 변하는 $\sum$ 의 누적 — 등장 횟수로 세어 $\sum k^3$ 으로 바꾸기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정직하게 열 개를 계산하면 이차·삼차 공식을 열 번 쓰는 중노동이 되고, 등장 횟수로 세면 $\sum_{k=1}^{10}k^3=\left(\frac{10\cdot11}{2}\right)^2$ 한 줄로 끝난다. 합의 순서를 바꾸는 발상이 이 문항의 전부다.
    표현 전환 통찰 1개이지만 깊이 3(d3) — 이중합을 「어느 항이 몇 번 세어지는가」로 다시 읽는 층위. STEP 2 출발 ★3 · depth 3 → +1 하여 ★4(저노출 유형 RT 포함).
  tier: star_4
  mechanism_primary: '$k^2$ 의 등장 횟수 = $k$ → 전체 $=\sum_{k=1}^{10}k\cdot k^2=\sum_{k=1}^{10}k^3$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3025$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 10 을 바꿀 수 있다. 제약: 안쪽 일반항이 $k^2$ 이라 결과가 $\sum k^3$ 으로 예쁘게 닫히는 것이므로, 상한만 바꾸고 차수 구조는 유지해야 「등장 횟수」 발상이 그대로 산다.'
    creative: '(1) 안쪽을 $k$ 로 낮추면 결과가 $\sum k^2$ 이 되어 ★3 (2) 시작 index 를 고정하고 상한을 1 씩 키우는 방향으로 뒤집으면 등장 횟수가 $11-k$ 가 되어 ★4 유지 (3) 상한을 $n$ 으로 두고 일반식으로 답하게 하면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-ALG-271-636
  page: 271
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    $a_1+2a_2+3a_3+\cdots+na_n=\frac{n(n+1)(n+2)}{6}$ 일 때 $\sum_{k=1}^{10}a_k$ 의 값 구하기.
  category: '가중합 $T_n$ 에 $na_n=T_n-T_{n-1}$ 적용 → $a_n$ → $\sum$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '좌변은 $\{a_n\}$ 의 부분합이 아니라 $\{na_n\}$ 의 부분합이라는 것을 알아채고 $na_n=T_n-T_{n-1}$ 로 복원한 뒤 $n$ 으로 나눠야 $a_n$ 이 나온다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '가중합 $\sum ka_k$ 가 주어질 때 일반항을 구해 $\sum a_k$ 계산하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $T_n-T_{n-1}=\frac{n(n+1)}{2}$ 까지 오면 $a_n=\frac{n+1}{2}$ 이고 $\sum_{k=1}^{10}a_k=\frac{1}{2}(\sum k+10)$ 이라 267-e6 과 같은 마무리가 된다.
    「부분합의 주인이 $a_n$ 이 아니라 $na_n$」이라는 동치 변환 통찰 1개(EQV d2) · $n=1$ 확인(T-범위)과 가중치 첨자(T-표기)로 Mₜ=2.
    STEP 2 출발 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$T_n=\sum ka_k$ → $na_n=T_n-T_{n-1}=\frac{n(n+1)}{2}$ → $a_n=\frac{n+1}{2}$ → $\sum_{k=1}^{10}a_k$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{65}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/271-636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 삼차식과 상한 10 을 바꿀 수 있다. 제약: $T_n-T_{n-1}$ 이 $n$ 으로 나누어떨어져야 $a_n$ 이 깔끔한 식이 된다(연속한 세 수의 곱 꼴이 가장 안전).'
    creative: '(1) 가중치를 $k^2$ 으로 올려 $k^2a_k$ 의 부분합으로 주기(★3~4) (2) 우변을 사차식으로 두면 $a_n$ 이 이차식이 되어 Mₖ 만 상승 ★3 (3) $a_1$ 만 따로 어긋나게 설계하면 $n=1$ 확인이 핵심이 되어 ★4.'
```

```yaml
- id: GN-ALG-272-637
  page: 272
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    이중합 $\sum_{j=1}^{5}\{\sum_{k=1}^{5}(3k-1)2^{j-1}\}$ 의 값 구하기.
  category: '안쪽에서 $2^{j-1}$ 을 상수로 빼내기 → 두 $\sum$ 의 곱으로 분리 → 등차합 × 등비합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '안쪽 $\sum$ 의 변수는 $k$ 뿐이므로 $2^{j-1}$ 을 밖으로 빼면 전체가 $\left(\sum(3k-1)\right)\times\left(\sum 2^{j-1}\right)$ 의 곱으로 갈라진다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '변수가 분리되는 이중합 — 두 $\sum$ 의 곱으로 나누기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분리하고 나면 $40\times31$ 곱 하나이고, 거듭제곱의 합과 등비수열의 합이 한 문항에서 만난다.
    변수 분리 통찰 1개(EQV d1)로 269-621 과 같은 골조라 실제 체감은 STEP 2 하단이지만, 통찰이 있어 −1 조건에 걸리지 않으므로 STEP 2 출발 ★3 을 유지했다.
    [분류 이슈] M_total 6 으로 같은 구역의 다른 문항보다 가볍다 — 라벨 ★3, 후보 ★2.
  tier: star_3
  mechanism_primary: '$2^{j-1}$ 을 안쪽 $\sum$ 밖으로 → $\left(\sum_{k=1}^{5}(3k-1)\right)\left(\sum_{j=1}^{5}2^{j-1}\right)=40\times31$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1240$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/272-637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 상한 5·5 와 일차식 $3k-1$, 공비 2 를 바꿀 수 있다. 제약: 안쪽 식이 $k$ 만의 식 × $j$ 만의 식으로 완전히 갈라져야 곱 분리가 성립한다.'
    creative: '(1) 안쪽 식을 $(3k-1)(2j-1)$ 로 두어 등차 × 등차로 바꾸기(★3 유지) (2) $(3k-1)2^{k-1}$ 처럼 같은 문자로 묶으면 분리가 막혀 $\sum k\cdot r^k$ 계열의 다른 도구가 필요 ★4 (3) 바깥 상한을 $n$ 으로 두면 일반식 정리로 ★3.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-272-638
  page: 272
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    공차가 정수인 등차수열에서 $a_4+a_6=0$, $\sum_{k=1}^{8}(|a_k|+a_k)=48$ 일 때 $a_{10}$ 의 값 구하기.
  category: '$a_5=0$ 확정 → $|a|+a$ 는 양수 항만 2배 → 공차 부호 분기 → 정수 조건으로 기각'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$|a_k|+a_k$ 가 $a_k>0$ 이면 $2a_k$, $a_k\le0$ 이면 0 이라는 것을 보면 합이 「양수 항만 골라 2배」로 바뀐다 — 절댓값을 항마다 펼칠 필요가 없다'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a_4+a_6=2a_5=0$ 에서 $a_5=0$ 이므로 공차의 부호에 따라 양수 항이 $k=6,7,8$ 또는 $k=1\sim4$ 로 갈리고, 음의 공차 쪽은 공차가 정수가 아니어서 기각된다 — 기각 없이는 답이 둘이 된다'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '절댓값이 포함된 $\sum$ 조건에서 등차수열 결정하기(부호 분기 + 정수 조건 기각)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_5=0$ 을 먼저 뽑아내는 것, 절댓값 합을 양수 항의 2배로 읽는 것, 공차의 부호 두 갈래를 모두 세운 뒤 「공차가 정수」로 한쪽을 버리는 것까지 세 겹이다.
    동치 변환(EQV d2)과 사후 검증 강제(VF d2) 통찰 2개 · 부호(T-부호)와 항의 범위(T-범위)로 Mₜ=2 → M_total 9.
    실력 UP 출발 ★4 · 통찰 2개로 유지(★5 는 통찰 3개 이상이 조건이라 미달) → ★4.
  tier: star_4
  mechanism_primary: '$2a_5=0$ → $a_5=0$ → $\sum(|a_k|+a_k)$ = 양수 항의 2배 → $d>0$ 이면 $12d=48$, $d<0$ 갈래는 정수 조건으로 기각 → $a_{10}=5d$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/272-638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합 48 과 조건 $a_4+a_6=0$ 의 항 번호, 상한 8 을 바꿀 수 있다. 제약: 두 항의 번호는 평균이 정수가 되도록 같은 홀짝이어야 $a_m=0$ 이 나오고, 「공차가 정수」가 기각 장치이므로 한 갈래만 정수 공차를 주도록 합을 고른다.'
    creative: '(1) 공차 정수 조건을 「공차가 자연수」로 바꾸면 기각이 더 빨라져 ★3~4 (2) 정수 조건을 빼면 답이 둘이 되어 「모든 $a_{10}$ 의 합」을 묻는 문제로 ★4 유지 (3) $|a_k|-a_k$ 로 뒤집으면 음수 항만 세는 대칭 변형(★4 유지) — 바꾸면 ★ 가 내려가는 지점은 $a_m=0$ 이 아니라 양수부터 시작하게 만들어 분기를 없애는 경우.'
```

```yaml
- id: GN-ALG-272-639
  page: 272
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    $n$ 이 홀수일 때 $\frac{(n-1)^2}{2}$, 짝수일 때 $\frac{n^2}{2}-n$ 으로 정의된 수열의 $\sum_{n=1}^{20}a_n$ 구하기.
  category: '홀수 항·짝수 항을 각각 $n=2m-1$, $n=2m$ 으로 재색인 → 두 $\sum$ 으로 분리'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$n$ 에 대한 한 덩어리 $\sum$ 을 $n=2m-1$·$n=2m$ 의 두 $\sum$($m=1\sim10$)으로 다시 쓰면 각각 $m$ 의 이차식이 되어 공식이 붙는다'
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '홀수 쪽과 짝수 쪽이 서로 다른 식이므로 두 경우를 모두 세어 합쳐야 하고, 20 항이 홀·짝 10개씩이라는 개수 확인이 필요하다'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '홀수 항·짝수 항이 다른 식으로 정의된 수열의 $\sum$ 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    재색인하면 홀수 쪽은 $2(m-1)^2$, 짝수 쪽은 $2m^2-2m$ 이 되어 $\sum m^2,\ \sum m$ 공식으로 닫힌다. 짝수 식이 $\frac{(n-1)^2-1}{2}$ 과 같다는 것을 보면 한 $\sum$ 으로 합치는 더 빠른 길도 있다.
    표현 전환(RT d2)과 경우 분기(MI d1) 통찰 2개 · 재색인에서 $m$ 의 범위(T-범위)와 첨자 혼동(T-표기)으로 Mₜ=2.
    실력 UP 출발 ★4 · 통찰 2개 → ★4 유지.
  tier: star_4
  mechanism_primary: '$n=2m-1$ → $2(m-1)^2$, $n=2m$ → $2m^2-2m$ ($m=1\sim10$) → 두 $\sum$ 을 공식으로 계산해 더하기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1230$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/272-639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 20 과 두 분기 식의 계수를 바꿀 수 있다. 제약: 상한이 짝수여야 홀·짝 개수가 같아 재색인이 깔끔하고, 홀수로 두면 한쪽 개수가 하나 많아져 T-경계 함정이 추가된다.'
    creative: '(1) 상한을 21 처럼 홀수로 두어 개수 어긋남을 만들기(★4 유지, T-경계 강화) (2) 분기를 3으로 나눈 나머지 세 갈래로 늘리면 재색인이 셋이 되어 ★4~5 (3) 두 식을 하나의 닫힌 식으로 합칠 수 있게 설계하면 통찰이 SC 쪽으로 옮겨가고, 반대로 두 식을 같게 두면 분기가 사라져 ★2 로 내려간다.'
```

```yaml
- id: GN-ALG-272-640
  page: 272
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: '연습문제 실력 UP'
  summary: |
    점 $\mathrm{A}_n(n,n^2)$ 을 지나고 직선 $y=nx$ 에 수직인 직선이 $x$ 축과 만나는 점을 $\mathrm{B}_n$ 이라 할 때 삼각형 $\mathrm{A}_n\mathrm{OB}_n$ 의 넓이 $S_n$ 으로 $\sum_{n=1}^{8}\frac{S_n}{n^3}$ 을 구하는 빈칸 채우기. ㈎ ㈏ 에 알맞은 식을 $f(n),g(n)$, ㈐ 의 수를 $r$ 라 할 때 $f(1)+g(2)+r$ 의 값. 5지선다.
  category: '수직 조건으로 직선식 → $x$ 절편 $\mathrm{B}_n$ → 넓이 $S_n$ → $n^3$ 으로 나눠 $\sum$'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '좌표평면의 수직 조건(기울기 곱 $=-1$)·$x$ 절편·삼각형 넓이를 먼저 $n$ 의 식으로 만들어야 수열의 $\sum$ 도구가 붙는다 — 도형과 수열 두 단원이 모두 필요'
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '밑변을 $x$ 축 위의 $\overline{\mathrm{OB}_n}$, 높이를 $\mathrm{A}_n$ 의 $y$ 좌표로 잡아 도형 정보를 넓이 식 하나로 옮긴다'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '좌표평면의 도형에서 $S_n$ 을 구해 $\sum$ 으로 계산하기(빈칸 채우기)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $y=nx$ 에 수직이므로 기울기 $-\frac{1}{n}$, 절편식을 정리하면 상수항이 $n^2+1$ 로 맞아떨어지고 $\mathrm{B}_n$ 의 $x$ 좌표가 $n(n^2+1)$, 넓이가 $\frac{n^2\cdot n(n^2+1)}{2}$ 이다. $n^3$ 으로 나누면 $\frac{n^2+1}{2}$ 이 되어 $\sum$ 공식이 붙는다.
    단원 경계 결합(XU d2)과 도형→식 전환(RT d1) 통찰 2개 · 빈칸 세 개의 값을 각각 다른 자리($f(1),g(2),r$)에 대입해야 하는 표기 함정(T-표기)과 절편 부호(T-부호)로 Mₜ=2 → M_total 9.
    실력 UP 출발 ★4 · 통찰 2개 → ★4 유지.
  tier: star_4
  mechanism_primary: '수직 기울기 $-\frac{1}{n}$ → $\mathrm{B}_n\left(n^3+n,0\right)$ → $S_n=\frac{n^3(n^2+1)}{2}\div n \cdot$ 정리 → $\frac{S_n}{n^3}=\frac{n^2+1}{2}$ → $\sum_{n=1}^{8}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑤'
  answer_source: "답지"
  figure: 'crop:fig-272-640.png'
  latex: latex-bank/gn-alg/items/272-640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표 $(n,n^2)$ 와 직선 $y=nx$ 의 기울기, 상한 8 을 바꿀 수 있다. 제약: $\frac{S_n}{n^3}$ 이 $n$ 의 이차 이하 다항식으로 떨어져야 거듭제곱의 합 공식으로 닫히므로, 좌표의 차수와 나누는 $n^3$ 을 함께 맞춰야 한다. 그림의 라벨($\mathrm{A}_n,\mathrm{O},\mathrm{B}_n$ 과 제1사분면 배치)은 고정.'
    creative: '(1) $\mathrm{B}_n$ 을 $y$ 축과의 교점으로 바꾸면 넓이 식의 밑변·높이가 뒤바뀜(★4 유지) (2) 빈칸을 없애고 $\sum\frac{S_n}{n^3}$ 만 묻게 하면 유도가 사라져 ★4~5 로 올라감 (3) 수직 대신 평행으로 바꾸면 $x$ 절편이 $n$ 에 무관해져 통찰이 줄고 ★3.'
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 3 · ★2 18 · ★3 8 · ★4 4 · ★5 0
- 통찰형 28 · 절차형 5 · premium 0
- 통찰 유형 분포: I-EQV 15 · I-PD 4 · I-RT 4 · I-XU 3 · I-BW 1 · I-CON 1 · I-SYM 1 · I-MI 1 · I-VF 1 (라벨 31개 · depth 3 은 271-635 하나)
- type_hint 상위 5: 「$\sum$ 을 여러 개 포함한 식(이중·삼중합)의 계산」 2 · 「나열된 수열의 일반항을 찾아 $\sum$ 으로 합 구하기」 2 · 「$\sum$ 의 값이 주어졌을 때 상한 구하기」 2 · 「부분합에서 일반항 복원 후 $\sum$」 계열 4(268-e8 · 268-620 · 271-630 · 271-636) · 「자연수의 거듭제곱의 합 공식으로 $\sum$(다항식) 계산하기」 1
- 그림: 1문(`crop:fig-272-640.png`) · 나머지 32문은 `none`
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 전 구역에서 일치했고 2단 이상 어긋난 문항은 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-270-625 | 벤더 STEP 1(★2 출발)이지만 두 조건을 결합해 $S_{15}$ 를 소거하는 골조가 구역 평균보다 한 층 위 → 라벨 ★3 | ★2 / ★3 |
| GN-ALG-272-637 | 벤더 STEP 2(★3 출발)이나 변수 분리 한 줄로 끝나고 M_total 6 → 체감은 269-621(★2)과 같음. 라벨은 ★3 유지 | ★2 / ★3 |
| GN-ALG-271-635 | 통찰 1개인데 depth 3 하나로 ★4 까지 올린 유일한 문항 — 「등장 횟수로 세기」를 RT d3 으로 볼지 별도 유형(합의 순서 교환)으로 세울지는 카탈로그 설계 때 결정 | ★3 / ★4 |
| GN-ALG-267-616 | 두 $\sum$ 을 합쳐 인수분해·약분하는 착안(EQV d2)이 확인체크 유제치고 두꺼움 → 라벨 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 **「부분합 $S_n$ ↔ 일반항 $a_n$ 복원」**(268-e8 · 268-620 · 271-630 · 271-632 · 271-636 · 270-625)로, 카탈로그에서는 하나의 유형으로 세우고 「부분합이 다항식 / 지수 / 분수」와 「가중합 $\sum ka_k$」를 하위 갈래로 두는 것이 맞다. 특히 271-636(가중합)은 나머지와 복원 대상이 달라 별도 하위 유형이 필요하다.
- **「$\sum$ 의 상한·시작 index 를 맞추는 처리」**(266-614 · 270-623 · 270-628 · 271-632)는 지금은 각각 다른 type_hint 로 흩어져 있으나 실제 도구는 하나다 — 통합 후보.
- **「$\sum$ 을 여러 개 포함한 식(이중·삼중합)」**(269-e9 · 269-621 · 272-637 · 271-635)은 통합해서는 안 된다. 앞 셋은 「안쪽부터 닫기 / 변수 분리」로 ★2~3 이지만 271-635 는 「등장 횟수로 세기(합의 순서 교환)」라 층이 다르다. 카탈로그에서는 최소 두 유형으로 분리한다.
- **「나열된 수열의 일반항 발견」**(268-e7 · 268-619 · 270-629 · 266-615)은 하나의 유형으로 묶되, 266-615 처럼 점으로 이어진 합을 $\sum$ 표기로 고쳐 쓰는 층(★1)과 268-e7 처럼 두 인자의 규칙을 읽는 층(★2)을 base ★ 로 구분한다.
- **「절댓값·홀짝 분기」**(271-634 · 272-638 · 272-639)는 이 단원에서 ★3~4 를 만드는 유일한 통로다. 카탈로그에서 SYM·VF·MI 를 쓰는 고 ★ 슬롯으로 따로 세울 가치가 있다.
- ★5 후보는 이 범위에 없다(통찰 3개 이상 + SC/VF/SYM/XU 조합이 나오는 문항이 없음). 이 단원에서 ★5 를 만들려면 272-638 의 기각 구조와 271-635 의 순서 교환을 겹쳐야 한다.
