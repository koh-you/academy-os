---
name: mechanism-데이터-GN-PROB-17
description: 개념원리 확률과 통계 17 이항분포와 정규분포의 관계(1/1 · 12문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 17 이항분포와 정규분포의 관계
  unit_code: PROB-17
  part: "1/1"
  extract_range: "162~164쪽 · 162-e21~164-367"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 17 이항분포와 정규분포의 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 162~164쪽 세 쪽에 걸친 17단원 12문항(`162-e21`~`164-367`) 전수를 다룬다. 단원 전체가 12문항이라 파트 분할이 없다. 개념원리 고등의 난이도 신호는 구역·태그·연습문제 STEP 으로 나타나며, 이 범위는 **필수 예제** 2문(★2 출발) + 그 아래 딸린 **확인체크** 5문(★1 출발) + **연습문제 STEP 1** 2문(★2) · **STEP 2** 2문(★3) · **실력 UP** 1문(★4) 로 구성된다. 기출 태그는 없다. 그림 4문은 모두 표준정규분포표 또는 자료 표이고, 이 중 `fig-164-364.png` 만 풀이에 필요한 수치(점유율)를 담고 있다.

단원 전체의 골조는 하나다 — **$n$ 이 충분히 클 때 $\mathrm{B}(n,\,p)$ 를 $\mathrm{N}(np,\,npq)$ 로 근사하고 표준화해 표준정규분포표를 읽는다.** 그래서 변별은 골조가 아니라 「그 앞에 무엇이 한 겹 더 있는가」에서 생긴다. ⑴ 이항분포가 그대로 주어짐(직독) ⑵ 확률질량함수 식·조합 항의 합·자료 표로 위장됨(표현 전환) ⑶ 성공확률을 스스로 만들어야 함 ⑷ 확률값이 주어지고 경계값·모수를 역산해야 함(역방향) ⑸ 점수·이득 구조를 확률변수의 일차식으로 환원해야 함. 이 다섯 겹이 그대로 ★1~★4 를 가른다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-162-e21
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 이항분포 $\mathrm{B}(600,\,\frac{2}{5})$ 를 따르는 $X$ 에 대해 표준정규분포표를 이용해 두 확률을 구하기. ⑴ $\mathrm{P}(204\le X\le 264)$ ⑵ $\mathrm{P}(X\le 252)$.
  category: "이항분포의 평균·표준편차 → 정규분포 근사 → 표준화 → 표준정규분포표 조회"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 — 구간 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n=600 이 충분히 커 X 는 근사적으로 N(240, 12²). 평균 240·표준편차 12 를 구해 두 구간을 표준화하면 ⑴ 은 -3~2, ⑵ 는 1 로 떨어져 표 값을 조합하면 끝난다. 전 과정이 정해진 순서의 표준 절차라 통찰 0. 필수 예제 구역 ★2 출발, M_total 6 이라 감점 조건(통찰 0·M_total ≤5)에 걸리지 않음 → ★2.
  tier: star_2
  mechanism_primary: "B(600, 2/5) → 평균 240·표준편차 12 → N(240, 12²) 근사 → 구간 표준화 → 표준정규분포표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0.9759$ ⑵ $0.8413$'
  answer_source: "본문 풀이"
  figure: "crop:fig-162-e21.png"
  latex: latex-bank/gn-prob/items/162-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p 는 npq 가 완전제곱이 되도록 고른다(600·(2/5)·(3/5)=144 → σ=12). 구간 끝값은 μ±kσ 꼴의 정수여야 z 가 표에 실린 값으로 떨어진다. 제약: np≥5, nq≥5 이고 z 가 표의 범위 안이어야 하며, 소문항 두 개는 양쪽 구간형·한쪽 꼬리형으로 갈라 두는 편이 좋다."
    creative: "(1) 두 확률을 하나로 합쳐 P(|X-240|≤24) 꼴로 묻기(대칭 활용이 생겨 ★2 유지) (2) 확률값을 주고 구간 끝을 역산하게 하면 I-BW 가 붙어 ★3 (3) 표 대신 P(0≤Z≤1)=0.3413 같은 값 하나만 주면 z 를 정수로 강제해야 해 ★2 유지."
```

```yaml
- id: GN-PROB-162-358
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $X$ 가 이항분포 $\mathrm{B}(48,\,\frac{3}{4})$ 를 따를 때 $\mathrm{P}(33\le X\le 39)$. $\mathrm{P}(0\le Z\le 1)=0.3413$ 제공.
  category: "이항분포의 평균·표준편차 → 정규분포 근사 → 대칭 구간 표준화"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사 — 구간 확률 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    μ=36, σ=3 이라 33·39 가 정확히 μ∓σ 로 떨어진다. 표준화 한 번에 P(-1≤Z≤1)=2×0.3413 으로 끝나는 가장 기본 형태. 확인체크 구역 ★1 출발이고 통찰 0·M_total 5 로 감점 후보지만 하한이라 ★1.
  tier: star_1
  mechanism_primary: "B(48, 3/4) → 평균 36·표준편차 3 → 표준화 → P(-1≤Z≤1)=2×0.3413"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.6826$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/162-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "npq 가 완전제곱이 되는 (n, p) 조합으로 교체(예: B(64, 1/4) → μ=16, σ=√3 은 불가 · B(100, 1/2) → μ=50, σ=5 는 가능). 구간을 μ±σ · μ±2σ 로만 잡으면 제공 확률 하나로 풀린다. 제약: 제공된 표 값(0.3413 등)과 구간 끝의 z 가 맞아야 한다."
    creative: "(1) 한쪽 꼬리 P(X≥39) 로 바꾸기(★1 유지) (2) 구간을 μ-σ~μ+2σ 로 비대칭화해 표 값 두 개를 쓰게 하기(★1~2) (3) p 를 숨기고 평균만 주면 p 역산 단계가 생겨 ★2."
```

```yaml
- id: GN-PROB-162-359
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)={}_{450}\mathrm{C}_x(\frac{2}{3})^{x}(\frac{1}{3})^{450-x}$ 로 주어졌을 때 $\mathrm{P}(X\ge 280)$. $\mathrm{P}(0\le Z\le 2)=0.4772$ 제공.
  category: "확률질량함수 식 → 이항분포 B(450, 2/3) 식별 → 정규분포 근사 → 한쪽 꼬리 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조합 꼴 확률질량함수 식에서 n=450, p=2/3 을 읽어내 X~B(450, 2/3) 이라는 풀이 가능한 형태로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률질량함수로 주어진 이항분포의 정규분포 근사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분포가 B(450, 2/3) 라고 말해 주지 않고 확률질량함수 식으로 위장했다. 이 식을 이항분포로 옮기는 한 단계(EQV d1)를 넘기면 μ=300·σ=10 이고 280 이 μ-2σ 라 0.5+0.4772 로 끝난다. 확인체크 ★1 출발이지만 분포 식별 단계가 더해져 ★2.
  tier: star_2
  mechanism_primary: "pmf 식 → B(450, 2/3) 식별 → 평균 300·표준편차 10 → P(Z≥-2)=0.5+0.4772"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.9772$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/162-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 꼴의 (n, p) 를 npq 가 완전제곱이 되게 바꾼다(450·(2/3)·(1/3)=100). 질문 경계는 μ±σ 또는 μ±2σ 의 정수로. 제약: pmf 식의 지수 합이 n 이 되도록 x 와 n-x 를 반드시 맞춰야 하고, p 와 q 를 뒤바꿔 쓰면 평균이 달라진다."
    creative: "(1) pmf 를 ₄₅₀Cₓ(1/3)^x(2/3)^{450-x} 로 뒤집어 p 를 반대로 읽는 함정 강화(★2 유지) (2) 평균·분산만 묻는 형태로 낮추면 절차형 ★1 (3) 확률값을 주고 경계를 역산하게 하면 EQV+BW 2단계 ★3."
```

```yaml
- id: GN-PROB-163-e22
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    치유될 확률이 $0.6$ 인 약을 환자 $150$명에게 투여할 때 $99$명 이상이 치유될 확률을 표준정규분포표로 구하기.
  category: "실생활 반복 시행 → 이항분포 모델링 → 정규분포 근사 → 한쪽 꼬리 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포와 정규분포의 관계의 활용 — 실생활 비율 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성공확률과 시행 횟수가 문장에 그대로 있어 B(150, 0.6) 모델링은 직독 수준이다. μ=90·σ=6 → P(X≥99)=P(Z≥1.5)=0.5-0.4332. 통찰 0 의 표준 활용형. 필수 예제 ★2 출발·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "치유자 수 X~B(150, 0.6) → 평균 90·표준편차 6 → P(Z≥1.5)=0.5-0.4332"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0668$'
  answer_source: "본문 풀이"
  figure: "crop:fig-163-e22.png"
  latex: latex-bank/gn-prob/items/163-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치유 확률 p 와 인원 n 을 npq 가 완전제곱이 되게(150·0.6·0.4=36) 고른다. 기준 인원은 μ+1.5σ 처럼 표에 있는 z 로 떨어지는 값이어야 한다. 제약: 인원은 자연수이므로 μ±kσ 가 정수가 되는 조합만 쓸 수 있다."
    creative: "(1) '치유되지 않는 사람이 51명 이하' 로 여사건 서술하면 부호 함정이 생겨 ★2 유지 (2) 확률 0.0668 을 주고 기준 인원을 역산하게 하면 I-BW ★3 (3) 두 약(다른 p)을 비교해 어느 쪽 확률이 큰지 묻기(★3, 전략 비교)."
```

```yaml
- id: GN-PROB-163-360
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    불량률이 $10\,\%$ 인 제품 $100$개 중 불량품이 $7$개 이상 $16$개 이하일 확률을 표준정규분포표로 구하기.
  category: "불량률 → 이항분포 B(100, 0.1) → 정규분포 근사 → 비대칭 구간 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포와 정규분포의 관계의 활용 — 실생활 비율 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    μ=10·σ=3 이라 7 은 μ-σ, 16 은 μ+2σ. 비대칭 구간이지만 표 값 두 개를 더하는 표준 절차로 끝난다. 불량률을 확률로 옮기는 것도 직독. 확인체크 ★1 출발·통찰 0·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "불량품 수 X~B(100, 0.1) → 평균 10·표준편차 3 → P(-1≤Z≤2)=0.3413+0.4772"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.8185$'
  answer_source: "답지"
  figure: "crop:fig-163-360.png"
  latex: latex-bank/gn-prob/items/163-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불량률과 표본 크기를 npq 가 완전제곱이 되게 조정(100·0.1·0.9=9). 구간 끝은 μ-σ · μ+2σ 처럼 표의 z 로 떨어지는 정수로. 제약: np=10 이 5 이상이어야 정규근사 조건을 만족하므로 불량률을 지나치게 낮추지 않는다."
    creative: "(1) '정상품이 84개 이상' 으로 여사건 서술(부호 함정 추가·★1~2) (2) 구간 한쪽 끝을 미지수로 두고 확률을 주면 I-BW ★3 (3) 두 공장의 불량률을 주고 합친 표본의 확률을 묻기(★3)."
```

```yaml
- id: GN-PROB-163-361
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    동전 $2$개를 동시에 던지는 시행을 $432$번 반복할 때 $2$개 모두 앞면이 나오는 횟수가 $90$번 이하일 확률. $\mathrm{P}(0\le Z\le 2)=0.4772$ 제공.
  category: "한 번의 시행의 성공확률 계산 → 이항분포 B(432, 1/4) → 정규분포 근사"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반복 시행의 성공확률을 구한 뒤 정규분포 근사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 확인체크들과 달리 성공확률이 주어져 있지 않다. 동전 2개가 모두 앞면일 확률 1/4 을 먼저 만들어야 B(432, 1/4) 이 잡히고, 그 뒤 μ=108·σ=9 → P(Z≤-2)=0.5-0.4772. 새 도구는 없어 통찰 0 이지만 확인체크 ★1 출발에 성공확률 생성 단계가 얹혀 ★2.
  mechanism_primary: "P(둘 다 앞면)=1/4 → X~B(432, 1/4) → 평균 108·표준편차 9 → P(Z≤-2)=0.5-0.4772"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0228$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/163-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성공 사건을 바꿔 p 를 1/4·1/2·3/4 중에서 고르고, n 은 npq 가 완전제곱이 되게 맞춘다(432·(1/4)·(3/4)=81). 기준 횟수는 μ±kσ 정수. 제약: 동전·주사위의 사건을 바꾸면 p 가 먼저 바뀌므로 n 을 다시 골라야 한다."
    creative: "(1) 주사위 2개의 눈의 합이 특정 값인 횟수로 바꿔 성공확률 계산을 무겁게(★2 유지) (2) '적어도 한 개가 앞면' 으로 여사건 계산을 한 겹 더(★2) (3) 기준 횟수를 미지수로 두고 확률을 주면 I-BW ★3."
```

```yaml
- id: GN-PROB-163-362
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    친구와 가위바위보를 $72$번 할 때 $k$번 이상 이길 확률이 $0.16$ 이다. 실수 $k$ 의 값. $\mathrm{P}(0\le Z\le 1)=0.34$ 제공.
  category: "가위바위보의 승률 1/3 → 정규분포 근사 → 주어진 확률에서 z 를 읽어 경계값 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 0.16 을 0.5-0.34 로 분해해 경계의 표준화값이 z=1 임을 먼저 확정한 뒤 k 를 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규근사에서 확률이 주어질 때 경계값 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비기는 경우가 있어 이길 확률이 1/2 이 아닌 1/3 임을 먼저 잡아야 μ=24·σ=4 가 나온다. 이어 확률이 주어지고 경계를 찾는 역방향 구조(BW d2)라 0.16=0.5-0.34 분해가 관문이다. 매개변수 k 로 Mₐ=2, M_total 7. [분류 이슈] 벤더는 확인체크(★1 신호)지만 역산·매개변수 구조라 ★3 으로 기록만 한다.
  tier: star_3
  mechanism_primary: "승률 1/3 → X~B(72, 1/3) → 평균 24·표준편차 4 → 0.16=0.5-0.34 → z=1 → k=24+4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/163-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 은 npq 가 완전제곱이 되게(72·(1/3)·(2/3)=16). 주어지는 확률은 0.5-표값 또는 0.5+표값 꼴이어야 z 가 표의 값으로 떨어진다(0.16 → z=1, 0.0228 → z=2). 제약: k 가 정수로 떨어지도록 σ 와 z 의 곱이 정수여야 한다."
    creative: "(1) '이기거나 비길 확률' 로 바꿔 p=2/3 으로(★3 유지) (2) 확률을 주고 n 을 역산하게 하면 이차식이 생겨 ★4 (3) 'k번 이하' 로 방향을 뒤집어 부호 함정 강화(★3) (4) 확률만 주고 k 와 p 를 동시에 묻는 미정 2개로 올리면 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-164-363
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이항분포 $\mathrm{B}(100,\,p)$ 를 따르는 $X$ 에 대해 $\mathrm{P}(X\ge 25)=0.5$ 일 때 $\mathrm{V}(2X)$. 단 $\frac{1}{20}\le p\le\frac{19}{20}$.
  category: "확률 0.5 의 대칭성 → 평균이 25 → p 결정 → V(2X)=4V(X)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정규근사한 분포가 평균에 대해 대칭이라는 점을 써서 P(X≥25)=0.5 에서 곧바로 평균=25 를 읽어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "P(X≥k)=0.5 의 대칭성으로 p 를 정한 뒤 분산 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률 0.5 를 표에서 찾으려 하면 막히고, 정규분포의 평균 대칭성으로 25 가 평균임을 읽어야 한 줄에 100p=25 → p=1/4 이 나온다(SYM d2). 나머지는 V(2X)=4np(1-p) 대입. 2배 한 확률변수의 분산이 4배라는 T-표기 함정 1개. STEP 1 구역 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "P(X≥25)=0.5 → 평균 100p=25 → p=1/4 → V(2X)=4·100·(1/4)(3/4)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$75$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/164-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 기준값을 np 가 그 기준값과 같아지도록 짝지어 고른다(100·(1/4)=25). 묻는 값은 V(aX)=a²V(X) · E(aX+b) 등으로 교체 가능. 제약: p 의 범위 조건은 p=0 이나 p=1 의 자명한 해를 막기 위한 것이므로 함께 바꿔야 하고, np(1-p) 가 유리수로 깔끔히 떨어져야 한다."
    creative: "(1) P(X≤k)=0.5 로 방향만 바꾸기(★2 유지) (2) 확률을 0.5 가 아닌 표 값으로 주면 대칭성 대신 표준화 역산이 되어 I-SYM 이 I-BW 로 바뀌고 ★3 (3) E(X)·V(X) 를 동시에 주고 n, p 를 모두 역산하게 하면 연립이 생겨 ★3."
```

```yaml
- id: GN-PROB-164-364
  page: 164
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    영화 $\mathrm{A}$~$\mathrm{D}$ 의 관객 점유율 표(각각 $20\,\%$, $40\,\%$, $15\,\%$, $25\,\%$)가 주어졌을 때, 관객 $150$명 중 $\mathrm{B}$ 영화를 관람하는 관객이 $54$명 이상일 확률. $\mathrm{P}(0\le Z\le 1)=0.3413$ 제공.
  category: "자료 표에서 점유율 읽기 → 이항분포 B(150, 0.4) → 정규분포 근사"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포와 정규분포의 관계의 활용 — 실생활 비율 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표에서 B 영화의 점유율 40% 를 골라 p=0.4 로 쓰는 것 외에는 표준 절차다. μ=60·σ=6 이라 54=μ-σ 로 떨어져 P(Z≥-1)=0.5+0.3413. 표에 쓰이지 않는 값(A·C·D)이 섞여 있다는 정도가 유일한 방해 요소. STEP 1 ★2 출발·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "표에서 p=0.4 → X~B(150, 0.4) → 평균 60·표준편차 6 → P(Z≥-1)=0.5+0.3413"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.8413$'
  answer_source: "답지"
  figure: "crop:fig-164-364.png"
  latex: latex-bank/gn-prob/items/164-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 점유율 배분을 바꾸되 합이 100% 이고 묻는 영화의 p 에 대해 npq 가 완전제곱이 되도록 n 을 맞춘다(150·0.4·0.6=36). 기준 인원은 μ±kσ 정수. 제약: 그림 안 표의 라벨(A~D·합계 100)은 이미지에 고정돼 있어 숫자를 바꾸려면 그림도 다시 만들어야 한다."
    creative: "(1) 묻는 대상을 'A 또는 C 를 보는 관객' 으로 바꾸면 p 를 합치는 단계가 생겨 ★2~3 (2) 인원 기준을 미지수로 두고 확률을 주면 I-BW ★3 (3) 두 영화의 관객 수 차이를 묻는 형태로 확장하면 확률변수 결합이 필요해 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-164-365
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    ${}_{100}\mathrm{C}_{22}(\frac{1}{5})^{22}(\frac{4}{5})^{78}+{}_{100}\mathrm{C}_{23}(\frac{1}{5})^{23}(\frac{4}{5})^{77}+\cdots+{}_{100}\mathrm{C}_{100}(\frac{1}{5})^{100}$ 의 값. $\mathrm{P}(0\le Z\le 0.5)=0.1915$ 제공.
  category: "조합 항의 긴 합 → 이항분포 B(100, 1/5) 의 P(X≥22) 로 전환 → 정규분포 근사"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조합·거듭제곱 항의 합이라는 대수 표현을 X~B(100, 1/5) 의 누적확률 P(X≥22) 라는 확률 표현으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조합 항의 합을 이항분포 확률로 전환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식만 보면 계산 불가능한 100항의 합이지만, 각 항이 B(100, 1/5) 의 확률질량함수 값이고 x=22 부터 100 까지 더한 것임을 알아보면 P(X≥22) 한 덩어리가 된다(RT d2). 그 뒤 μ=20·σ=4 → P(Z≥0.5)=0.5-0.1915. 표현 전환이 유일한 관문. STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "조합 항의 합 → P(X≥22), X~B(100, 1/5) → 평균 20·표준편차 4 → P(Z≥0.5)=0.5-0.1915"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.3085$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/164-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(n, p) 는 npq 가 완전제곱(100·(1/5)·(4/5)=16)이고 시작 항의 첨자가 μ+kσ 정수가 되게 고른다. 제약: 각 항의 두 지수 합이 반드시 n 이어야 하고, 마지막 항은 (4/5)^0 이 생략된 꼴이므로 표기를 맞춰야 한다. z 는 0.5·1·2 처럼 제공 값과 일치해야 한다."
    creative: "(1) 합의 시작을 0 부터 어떤 항까지로 바꿔 P(X≤k) 형태로(★3 유지) (2) 앞뒤 두 구간의 합으로 쪼개 구간확률을 묻기(★3) (3) 전체 합 1 에서 일부를 뺀 꼴로 제시하면 여사건 인식이 한 겹 더해져 ★4 (4) 일반항을 문자로 주면 Mₐ 가 올라 ★4."
```

```yaml
- id: GN-PROB-164-366
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    주사위를 $450$번 던질 때 $1$ 또는 $2$ 의 눈이 $130$번 이상 $c$번 이하로 나올 확률이 $0.8185$ 이다. 자연수 $c$ 의 값. $\mathrm{P}(0\le Z\le 1)=0.3413$, $\mathrm{P}(0\le Z\le 2)=0.4772$ 제공.
  category: "성공확률 1/3 → 정규분포 근사 → 주어진 구간확률에서 왼쪽 몫을 떼고 오른쪽 경계 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확정된 왼쪽 경계의 확률 0.4772 를 주어진 0.8185 에서 떼어 남은 0.3413 로부터 오른쪽 경계의 z=1 을 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정규근사에서 확률이 주어질 때 경계값 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p=1/3 이라 μ=150·σ=10 이고 왼쪽 끝 130 은 μ-2σ 로 확정된다. 주어진 0.8185 에서 왼쪽 몫 0.4772 를 떼면 0.3413 만 남아 오른쪽 z=1 → c=160 이 나오는 역방향 구조(BW d2). 구간확률을 두 조각으로 나눠 보는 관점이 관문이고 나머지는 절차. STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "X~B(450, 1/3) → 평균 150·표준편차 10 → 130=μ-2σ → 0.8185-0.4772=0.3413 → z=1 → c=150+10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$160$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/164-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 은 npq 가 완전제곱이 되게(450·(1/3)·(2/3)=100). 왼쪽 끝은 μ-kσ 정수로 고정하고, 주어진 확률은 표의 두 값의 합으로만 만든다(0.4772+0.3413=0.8185). 제약: 남은 몫이 표에 있는 값과 정확히 일치해야 c 가 정수로 떨어진다."
    creative: "(1) 오른쪽 끝을 고정하고 왼쪽을 묻기(★3 유지) (2) 두 경계를 모두 미지수로 두고 대칭 구간이라는 조건을 주면 I-SYM 이 추가돼 ★4 (3) 확률을 주고 n 을 역산하게 하면 σ 가 미지가 되어 ★4 (4) '1 또는 2' 를 '3 이하' 로 바꿔 p 계산을 한 겹 더하면 ★3 유지."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-164-367
  page: 164
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    한 번의 시행에서 $10$점을 얻을 확률이 $\frac{1}{5}$, $2$점을 잃을 확률이 $\frac{4}{5}$ 인 게임을 $0$점에서 시작해 $1600$번 독립 시행할 때 점수가 $832$점 이상일 확률. $\mathrm{P}(0\le Z\le 1)=0.3413$ 제공.
  category: "점수를 성공 횟수의 일차식으로 표현 → 점수 조건을 횟수 조건으로 환원 → 이항분포의 정규분포 근사"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "얻고 잃는 점수 구조를 성공 횟수 X 하나의 일차식(10X-2(1600-X)=12X-3200)으로 옮겨 확률변수를 하나로 만듦"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점수 조건 '832점 이상' 을 풀이에 쓸 수 있는 횟수 조건 X≥336 으로 동치 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "점수·이득 구조를 이항분포 확률변수의 일차식으로 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    점수가 직접 이항분포를 따르지 않는다는 것이 이 문항의 벽이다. 성공 횟수 X~B(1600, 1/5) 를 잡고 점수를 12X-3200 으로 표현(RT d2)한 뒤 832점 이상을 X≥336 으로 환원해야(EQV d1) 비로소 표준 골조로 들어간다. 그 뒤 μ=320·σ=16 → P(Z≥1)=0.5-0.3413. 잃는 점수의 부호와 횟수의 정수 경계 함정 2개. 실력 UP 구역 ★4 출발, 통찰 2개라 유지.
  tier: star_4
  mechanism_primary: "점수=10X-2(1600-X)=12X-3200 → 832점 이상 ⟺ X≥336 → X~B(1600, 1/5) 평균 320·표준편차 16 → P(Z≥1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0.1587$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/164-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "얻는 점수 a·잃는 점수 b 와 (n, p) 를 함께 고른다. 제약 세 가지: npq 가 완전제곱이어야 하고(1600·(1/5)·(4/5)=256 → σ=16), 기준 점수가 (a+b)X-bn 꼴에서 정수 X 로 떨어져야 하며(832+3200=4032=12·336), 그 X 가 μ±kσ 의 정수여야 z 가 표의 값이 된다."
    creative: "(1) '점수가 0점 이하' 처럼 기준을 부호가 바뀌는 쪽으로 옮기면 T-부호 함정이 강해지고 ★4 유지 (2) 확률을 주고 기준 점수를 역산하게 하면 RT+BW 로 ★4~5 후보(단 I-BW 는 저노출 유형이라 ★5 는 통찰 3개 이상일 때만) (3) 얻는 점수·잃는 점수를 문자 a, b 로 두면 Mₐ 가 3 이 되어 ★5 후보 (4) 두 게임의 점수 합을 비교하면 확률변수 결합이 더해져 ★5."
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 2 · ★2 6 · ★3 3 · ★4 1 · ★5 0
- 통찰형 6 (`162-359` · `163-362` · `164-363` · `164-365` · `164-366` · `164-367`) · 절차형 6 · premium 0
- 통찰 라벨 7단계: I-BW 2 · I-RT 2 · I-EQV 2 · I-SYM 1 (`164-367` 만 2단계, 나머지 통찰형은 1단계씩)
- type_hint 상위 5: 「이항분포와 정규분포의 관계의 활용 — 실생활 비율 확률」 3 · 「이항분포의 정규분포 근사 — 구간 확률 계산」 2 · 「정규근사에서 확률이 주어질 때 경계값 역산」 2 · 「확률질량함수로 주어진 이항분포의 정규분포 근사」 1 · 「반복 시행의 성공확률을 구한 뒤 정규분포 근사」 1 (그 밖에 대칭성으로 p 결정 1 · 조합 항의 합 전환 1 · 점수 구조 환원 1)
- 그림: 4문(`crop:fig-162-e21.png` · `crop:fig-163-e22.png` · `crop:fig-163-360.png` · `crop:fig-164-364.png`). 앞의 셋은 곁에 붙은 표준정규분포표이고, `fig-164-364.png` 만 풀이에 필요한 수치(관객 점유율 A 20 · B 40 · C 15 · D 25)를 담고 있다.
- M_total 분포: 5 가 3문 · 6 이 6문 · 7 이 3문. 이 단원은 골조가 하나로 고정돼 있어 Mₛ 는 전 문항 2 로 평탄하고, 변별은 Mₐ(매개변수 유무)와 통찰 유무에서 나온다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-163-362 | 벤더는 본문 예제에 딸린 「확인체크」(★1 신호)지만 승률 1/3 판단 + 확률에서 경계 역산(I-BW d2) + 매개변수 k 로 M_total 7. 2단 상승이라 기록 | ★1 / ★3 |

1단 차이로 이슈 표에 올리지 않은 조정: `162-359`(확인체크 → ★2, 확률질량함수 식 식별 단계), `163-361`(확인체크 → ★2, 성공확률 1/4 을 스스로 만드는 단계).

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때의 참고다.

- **반복된 type_hint**: 「이항분포와 정규분포의 관계의 활용 — 실생활 비율 확률」(3문) 과 「이항분포의 정규분포 근사 — 구간 확률 계산」(2문) 은 골조가 완전히 같다. 카탈로그에서는 **하나의 기본 유형(이항분포의 정규근사 확률 계산, base ★2)** 으로 통합하고, 실생활 포장 여부는 유형이 아니라 변형 축으로 두는 것이 낫다.
- **따로 세워야 할 유형**: ⑴ 「정규근사 역산형」(`163-362` · `164-366` · 확률이 주어지고 경계값·모수를 찾음 · I-BW 고정 · base ★3) ⑵ 「분포 위장형」(`162-359` 확률질량함수 식 · `164-365` 조합 항의 합 · `164-364` 자료 표 · 이항분포임을 알아보는 단계가 관문 · base ★2~3, 위장의 두께로 갈림) ⑶ 「확률변수 재정의형」(`164-367` 점수·이득을 성공 횟수의 일차식으로 환원 · base ★4). 이 셋은 표준 계산형과 학생 체감이 뚜렷이 다르므로 base ★ 를 분리해야 v3.8 산식이 제대로 작동한다.
- **통합해도 될 유형**: 「반복 시행의 성공확률을 구한 뒤 정규분포 근사」(`163-361`)는 독립 유형이라기보다 기본 유형에 성공확률 계산 한 겹을 얹은 것이므로 기본 유형의 변형으로 흡수해도 된다. 「대칭성으로 p 결정」(`164-363`)도 역산형의 특수 사례(확률 0.5 → z=0)로 묶을 수 있으나, I-SYM 이 저노출 유형이라 ★4 이상 출제에 쓸모가 있어 별도 소유형으로 남겨 두는 편이 유리하다.
- **이 단원의 ★5 공백**: 12문 모두 ★4 이하다. 골조가 하나로 고정돼 통찰을 3개 이상 쌓기 어렵기 때문이며, ★5 슬롯이 필요하면 `164-367` 계열(확률변수 재정의)에 역산이나 문자 모수를 더해 I-RT + I-BW + I-SYM 을 겹치는 방향이 유일하게 현실적이다.
