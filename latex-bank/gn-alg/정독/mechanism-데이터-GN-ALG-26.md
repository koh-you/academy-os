---
name: mechanism-데이터-GN-ALG-26
description: 개념원리 대수 26 등비수열(1/1 · 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 26 등비수열
  unit_code: GN-ALG-26
  part: "1/1"
  extract_range: "239~244쪽 · 239-557~244-568"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 그 확인체크 유제 ★2)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 26 등비수열 (1/1) 정독 데이터 (v1.0)

239~244쪽 21문항 전수. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 18문(필수 예제 e16~e24 9문 + 확인체크 유제 9문)이다. 이 단원에는 연습문제 STEP 구역이 없어 벤더 난이도 신호가 두 층뿐이므로, 익히기 ★1 · 필수 예제 ★2 를 출발점으로 삼고 확인체크 유제는 바로 앞 필수 예제와 같은 출발점을 썼다(GN-ALG-08 · GN-ALG-19 와 같은 결정). 거기서 M_total 과 통찰 라벨로 ±1 만 조정했다.

이 단원은 (가) 정의와 일반항 $a_n=ar^{n-1}$ 을 그대로 쓰는 층, (나) 두 항이나 항 사이의 관계에서 $r$ 을 역산하는 층, (다) 등비중항 $b^2=ac$ 와 등차중항을 연립하는 층, (라) 세 수·세 근을 $\dfrac{a}{r},\ a,\ ar$ 로 대칭 배치하거나 도형의 반복 시행을 등비수열로 옮기는 활용 층의 네 겹으로 쌓인다. 판정에서는 (다)·(라) 의 조건 결합·대칭 설정·표현 전환만 통찰로 셌고, 일반항 대입·등비중항 공식 적용·공비의 부호를 주어진 조건으로 고르는 일은 표준 절차로 보아 통찰에서 제외하고 Mₜ(T-부호·T-범위·T-표기)로 흡수했다. 항의 개수·항 번호가 어긋나기 쉬운 문항(두 수 사이에 수 넣기 · 도형 시행)은 Mₜ 를 2 로 올렸다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-239-557
  page: 239
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑷ 주어진 수열이 등비수열을 이루도록 빈칸 두 개씩 채우기. 공비가 음의 정수인 경우, 분수인 경우, 빈칸이 앞쪽에 있는 경우, 무리수인 경우를 한 문항에 모았다.
  category: '이웃한 두 항의 비 → 공비 → 빈칸 채우기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비수열의 정의와 공비 구하기(빈칸 채우기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 이웃한 두 항의 비로 공비를 먼저 읽고 곱하거나 나누는 한 골조다. ⑶ 만 빈칸이 앞쪽이라 공비로 나누는 역방향이지만 여전히 정의 한 줄이다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 5 → ★1 유지. [분류 이슈] 소문항 4개를 한 블록으로 묶어 Mₛ=2 로 매김.
  tier: star_1
  mechanism_primary: '연속한 두 항의 비로 공비 $r$ 결정 → 뒤로는 곱하고 앞으로는 나누어 빈칸 채우기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$, $16$ ⑵ $\dfrac{1}{4}$, $\dfrac{1}{8}$ ⑶ $2$, $-6$ ⑷ $-\dfrac{\sqrt{2}}{2}$, $-\dfrac{\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/239-557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 공비를 다른 정수·분수·무리수로 바꿀 수 있다(⑴ 공비 $-3$, ⑵ 공비 $\dfrac{1}{3}$, ⑷ 공비 $\dfrac{1}{\sqrt{3}}$). 제약: 빈칸 자리의 항이 간단한 유리수·무리수로 떨어져야 하고, 부호가 번갈아 나오는 소문항을 하나 이상 남겨 공비가 음수인 경우의 판별을 살린다.'
    creative: '(1) 빈칸을 셋으로 늘리고 일반항까지 쓰게 하기(★1 유지) (2) 빈칸 대신 제 $10$ 항을 묻게 하면 일반항이 필요해 ★2 (3) 세 항 중 가운데만 비우면 등비중항이 되어 부호 두 갈래가 생기고 ★2 (4) 등차수열 빈칸과 섞어 어느 쪽인지 먼저 판별하게 하면 ★2.'
```

```yaml
- id: GN-ALG-239-558
  page: 239
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑹ 등비수열의 일반항 $a_n$ 구하기. ⑴~⑶ 은 첫째항과 공비가 직접 주어지고, ⑷~⑹ 은 처음 몇 항이 나열돼 있어 공비를 먼저 읽어야 한다.
  category: '첫째항·공비 확정 → $a_n=ar^{n-1}$ 대입'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비수열의 일반항 $a_n=ar^{n-1}$'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 하나에 첫째항과 공비를 넣는 한 단계뿐이고, ⑷~⑹ 만 공비를 두 항의 비로 먼저 읽는 단계가 앞에 붙는다. ⑸ 의 공비 $-\dfrac{3}{2}$ 와 ⑹ 의 $\sqrt{3}$ 은 부호·무리수 표기 함정(T-부호·T-표기) 하나에 해당한다.
    익히기 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '두 항의 비로 공비 $r$ → $a_n=a_1r^{n-1}$ 에 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=2^{n-1}$ ⑵ $a_n=5\times(-1)^{n-1}$ ⑶ $a_n=4\times\left(\dfrac{1}{3}\right)^{n-1}$ ⑷ $a_n=3\times(-2)^{n-1}$ ⑸ $a_n=-2\times\left(-\dfrac{3}{2}\right)^{n-1}$ ⑹ $a_n=2\times(\sqrt{3})^{n-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/239-558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 공비의 조합을 자유롭게 바꿀 수 있다. 제약: 공비가 $1$ 이나 $0$ 이 되면 등비수열 정의가 무너지므로 제외하고, 무리수 공비는 $a_n$ 이 $(\sqrt{k})^{n-1}$ 로 정리되는 값만 쓴다.'
    creative: '(1) 일반항 대신 제 $n$ 항이 $a$ 가 되는 $n$ 을 묻기(★2) (2) $a_n$ 을 주고 첫째항·공비를 역으로 읽게 하기(★1) (3) 수열 나열을 $a_2,\ a_4$ 처럼 건너뛴 항으로 주면 $r^2$ 단계가 생겨 ★2 (4) 일반항을 $2^{n-1}$ 처럼 밑 하나로 합치도록 요구하면 지수법칙이 붙어 ★2.'
```

```yaml
- id: GN-ALG-239-559
  page: 239
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    세 수 $2$, $x$, $18$ 이 이 순서대로 등비수열을 이룰 때 $x$ 의 값 구하기.
  category: '등비중항 $x^2=2\times18$ → 제곱근 두 값'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비중항 $b^2=ac$ (가운데 항 구하기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    등비중항 공식을 그대로 한 번 쓰는 문항이다. 유일한 함정은 $x^2=36$ 에서 음의 근 $-6$ 을 빠뜨리는 것(T-부호)이고, 등차중항과 달리 답이 둘이라는 점이 이 단원의 첫 경고다.
    익히기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$x^2=2\times18=36$ → $x=\pm6$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-6$ 또는 $6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/239-559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양 끝 두 수를 곱이 완전제곱수가 되는 다른 쌍($3$ 과 $27$, $5$ 와 $20$, $\dfrac{1}{2}$ 와 $8$)으로 바꿀 수 있다. 제약: 곱이 양수여야 실수 해가 존재하고, 완전제곱이 아니면 답이 $\pm\sqrt{ac}$ 무리수가 되어 익히기 난이도를 넘는다.'
    creative: '(1) 양 끝 중 하나를 미지수로 돌려 $2$, $6$, $y$ 꼴로 묻기(★1) (2) 「$x$ 가 양수일 때」 조건을 붙여 답을 하나로 만들기(★1) (3) 세 수를 문자식 $x-1$, $x+1$, $x+7$ 로 주면 이차방정식이 생겨 ★2 (4) 등차중항 조건까지 동시에 걸면 연립이 되어 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-240-e16
  page: 240
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    첫째항이 $\dfrac{1}{4}$, 제 $4$ 항이 $16$ 인 등비수열의 일반항 $a_n$ 구하기.
  category: '$a_1r^3=16$ → 공비 → 일반항을 거듭제곱 하나로 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비수열의 일반항(첫째항과 한 항이 주어진 경우)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{4}r^3=16$ 에서 $r^3=64$, $r=4$ 를 얻고 $a_n=\dfrac{1}{4}\times4^{n-1}$ 을 $4^{n-2}$ 로 합치는 두 단계다. 세제곱근이 실수 하나뿐이라 부호 분기가 없고, 마지막 지수 정리만 계산 부담이 있어 Mₖ=2.
    필수 예제 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_1r^3=a_4$ → $r^3=64$ → $r=4$ → $a_n=\dfrac{1}{4}\times4^{n-1}=4^{n-2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a_n=4^{n-2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/240-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 주어진 항의 번호·값을 바꿀 수 있다($\dfrac{1}{9}$ 과 제 $4$ 항 $3$ → $r=3$, $\dfrac{1}{2}$ 와 제 $5$ 항 $8$ → $r=2$). 제약: 비 $\dfrac{a_k}{a_1}$ 가 정수 거듭제곱이어야 $r$ 이 유리수로 떨어지고, 짝수 번째 차수면 $r$ 의 부호 두 갈래가 생겨 조건을 하나 더 줘야 한다.'
    creative: '(1) 제 $4$ 항 대신 제 $5$ 항을 주어 $r^4$ 이 되면 부호 분기가 생겨 ★2~3 (2) 일반항 대신 $a_k=1024$ 인 $k$ 를 묻기(★2) (3) 첫째항을 미지수로 두고 두 항의 조건을 주면 연립이 되어 ★2 (4) 답을 밑 하나의 거듭제곱으로 정리하도록 강제하면 지수법칙이 단원 경계를 넘어 ★3.'
```

```yaml
- id: GN-ALG-240-e17
  page: 240
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    제 $2$ 항이 $-6$, 제 $4$ 항이 $-\dfrac{2}{3}$ 이고 공비가 음수인 등비수열의 제 $7$ 항 구하기.
  category: '두 항의 비 → $r^2$ → 부호 조건으로 $r$ 확정 → 제 $7$ 항'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 항이 주어진 등비수열(공비의 부호 결정)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{a_4}{a_2}=r^2=\dfrac{1}{9}$ 에서 $r=\pm\dfrac{1}{3}$ 이 나오고, 「공비가 음수」라는 단서가 한쪽을 지운다. 부호 분기가 문제 안에 이미 해소돼 있어 통찰이 아니라 T-부호 함정으로 본다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$r^2=\dfrac{a_4}{a_2}=\dfrac{1}{9}$ → 음수 조건으로 $r=-\dfrac{1}{3}$ → $a_7=a_2r^5$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{81}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/240-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항의 번호 간격을 $2$ 로 유지한 채 값을 바꾸면 골조가 같다(제 $3$ 항 $12$, 제 $5$ 항 $3$ → $r=\pm\dfrac{1}{2}$). 제약: 비가 완전제곱수여야 $r$ 이 유리수로 떨어지고, 간격이 홀수면 $r$ 이 하나로 정해져 「공비가 음수」 단서가 무의미해진다.'
    creative: '(1) 부호 단서를 빼고 가능한 제 $7$ 항을 모두 구하게 하면 분기가 살아나 I-MI d1 · ★3 (2) 「모든 항이 양수」로 바꾸기(★2) (3) 제 $7$ 항 대신 $a_k=\dfrac{2}{81}$ 인 $k$ 를 묻기(★2) (4) 두 항의 곱과 비를 주면 연립 구조가 되어 ★3.'
```

```yaml
- id: GN-ALG-240-560
  page: 240
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 공비가 $-2$, 제 $3$ 항이 $8$ 인 등비수열에서 일반항 $a_n$ 을 구하고, $a_k=-64$ 를 만족시키는 $k$ 를 구하기.
  category: '$a_1r^2=a_3$ → 일반항 → 거듭제곱 비교로 항 번호'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비수열의 일반항과 항 번호 구하기($a_k=c$)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $4a_1=8$ 로 첫째항을 얻는 한 줄이고, ⑵ 는 $2\times(-2)^{k-1}=-64$ 에서 $(-2)^{k-1}=-32$ 가 되어 지수가 홀수여야 한다는 부호 판정이 핵심(T-부호)이다.
    필수 예제 e16 의 확인체크 유제라 같은 출발점 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$a_1=\dfrac{8}{(-2)^2}=2$ → $a_n=2\times(-2)^{n-1}$ → $(-2)^{k-1}=-32$ → $k=6$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a_n=2\times(-2)^{n-1}$ ⑵ $6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/240-560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공비를 $-3$, 제 $3$ 항을 $18$ 로 바꾸면 같은 골조에 $a_1=2$ 가 유지된다. 제약: ⑵ 의 목표값은 부호까지 맞아야 해가 존재하므로 공비가 음수일 때 목표값의 부호와 지수의 홀짝을 함께 설계한다.'
    creative: '(1) 목표값의 부호를 공비와 어긋나게 주어 「그런 $k$ 는 없다」가 답이 되게 하면 I-VF d2 · ★3 (2) $a_k>100$ 인 최소 $k$ 로 바꾸면 절댓값 비교가 붙어 ★3 (3) 공비를 미지수로 두고 두 항 조건을 주기(★2) (4) 홀수 번째 항만 모은 부분수열의 공비를 묻기(★3).'
```

```yaml
- id: GN-ALG-240-561
  page: 240
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    제 $3$ 항이 $\dfrac{1}{9}$, 제 $6$ 항이 $-3$ 인 등비수열에서 $-27$ 이 제몇 항인지 구하기.
  category: '두 항의 비 → $r^3$ → 일반항 → 거듭제곱 비교로 항 번호'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 항이 주어진 등비수열에서 항 번호 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항 번호 차가 $3$ 이라 $r^3=-27$ 에서 $r=-3$ 이 하나로 정해지고 부호 분기가 없다. 이어 $a_1=\dfrac{1}{81}$ 을 얻어 $-27$ 을 $3$ 의 거듭제곱으로 맞추는 지수 비교가 계산의 전부다.
    필수 예제 e17 의 확인체크 유제 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$r^3=\dfrac{a_6}{a_3}=-27$ → $r=-3$, $a_1=\dfrac{1}{81}$ → $a_n=-27$ 인 $n$ 을 지수 비교로'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$8$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/240-561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항의 번호 간격을 $3$ 으로 유지하고 값만 바꿀 수 있다(제 $2$ 항 $\dfrac{1}{4}$, 제 $5$ 항 $-2$ → $r=-2$). 제약: 간격이 홀수여야 세제곱근이 하나로 정해져 부호 조건 없이도 풀리고, 목표값은 $a_1$ 과 $r$ 의 거듭제곱으로 정확히 떨어져야 한다.'
    creative: '(1) 간격을 짝수로 바꿔 부호 분기를 만들고 조건을 하나 더 주기(★3) (2) 목표값을 $27$ 로 바꾸면 부호가 맞지 않아 존재하지 않음을 밝혀야 해 I-VF d2 · ★3 (3) 항 번호 대신 제 $10$ 항의 값을 묻기(★2) (4) 두 항의 곱이 주어진 형태로 바꾸면 I-SYM 이 생겨 ★3.'
```

```yaml
- id: GN-ALG-241-e18
  page: 241
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    모든 항이 양수인 등비수열에서 $a_1+a_2=60$, $a_3+a_4=240$ 일 때 $a_7$ 구하기.
  category: '두 합의 비 → $r^2$ → 첫째항 → 제 $7$ 항'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a_3+a_4=r^2(a_1+a_2)$ 로 두 번째 조건을 첫 번째 조건의 배수로 옮겨 $a_1$ 을 소거'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '항 사이의 관계가 주어진 등비수열(조건식의 비로 공비 구하기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_1$, $r$ 두 미지수의 연립으로 밀면 길지만, 뒤 두 항이 앞 두 항의 $r^2$ 배라는 것을 보면 $r^2=4$ 한 줄로 끝난다. 이 묶어 보기가 이 문항의 유일한 판단이라 I-EQV d1 로 셌다.
    「모든 항이 양수」가 $r=\pm2$ 중 한쪽을 지우는 T-부호 함정. 필수 예제 출발 ★2 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_3+a_4=r^2(a_1+a_2)$ → $r^2=4$, 양수 조건으로 $r=2$ → $a_1=20$ → $a_7=a_1r^6$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1280$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/241-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 합의 비가 완전제곱이 되도록 값을 고르면 된다($a_1+a_2=12$, $a_3+a_4=108$ → $r^2=9$). 제약: 비가 $r^2$ 이므로 완전제곱수여야 $r$ 이 유리수이고, 「모든 항이 양수」를 빼면 음의 공비까지 살아나 답이 둘이 된다.'
    creative: '(1) 묻는 항을 $a_5+a_6$ 으로 바꾸면 비 구조가 한 번 더 쓰여 ★2 유지 (2) 양수 조건을 빼고 가능한 $a_7$ 을 모두 구하게 하면 I-MI d1 추가 · ★3 (3) 조건을 $a_1+a_3=c$, $a_2+a_4=d$ 로 어긋나게 주면 비가 $r$ 이 되어 부호 분기가 사라진다(★2) (4) 두 조건을 곱의 형태로 주면 I-SYM 으로 갈아탄다(★3).'
```

```yaml
- id: GN-ALG-241-e19
  page: 241
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    등비수열 $2,\ 4,\ 8,\ \cdots$ 에서 처음으로 $500$ 보다 커지는 항이 제몇 항인지 구하기.
  category: '일반항 $2^n$ → 부등식 $2^n>500$ → 최소 자연수 $n$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조건을 만족시키는 등비수열의 항 구하기(처음으로 $k$ 보다 커지는 항)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항이 $2^n$ 으로 바로 나오고 $2^8=256<500<512=2^9$ 을 확인하면 끝난다. 「처음으로」가 최소 자연수 해를 요구하는 T-경계 함정 하나뿐이다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 5 → v3.8 산식으로는 −1 후보(★1)이지만 이 단원의 부등식 골조를 처음 제시하는 필수 예제 자리라 ★2 유지. [분류 이슈] 기록.
  tier: star_2
  mechanism_primary: '$a_n=2^n$ → $2^n>500$ → $2^9=512$ → 제 $9$ 항'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$9$항'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/241-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준값과 공비를 바꿀 수 있다($3,\ 9,\ 27,\ \cdots$ 에서 $1000$ 초과 · $5,\ 10,\ 20,\ \cdots$ 에서 $300$ 초과). 제약: 기준값이 항의 값과 정확히 같아지면 「처음으로 커지는」 항이 한 칸 밀리므로 두 거듭제곱 사이에 오도록 고른다.'
    creative: '(1) 「처음으로 $\dfrac{1}{500}$ 보다 작아지는 항」으로 뒤집어 공비를 분수로 두기(★2) (2) 공비를 음수로 바꾸면 홀짝에 따라 부호가 갈려 I-MI d1 · ★3 (3) 상용로그를 쓰게 만드는 기준값(예: $10^{10}$)을 주면 단원 경계를 넘어 I-XU d2 · ★3 (4) 처음으로 커지는 항의 값까지 묻기(★2).'
```

```yaml
- id: GN-ALG-241-562
  page: 241
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    등비수열 $\{a_n\}$ 에서 $a_1-a_4=56$, $a_1+a_2+a_3=14$ 일 때 $a_5$ 구하기.
  category: '$1-r^3$ 인수분해 → 두 조건의 비로 $r$ → 첫째항 → 제 $5$ 항'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a_1-a_4=a_1(1-r^3)=a_1(1-r)(1+r+r^2)$ 로 인수분해해 두 번째 조건 $a_1(1+r+r^2)=14$ 로 나누면 $1-r=4$ 한 줄'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '항 사이의 관계가 주어진 등비수열(조건식의 비로 공비 구하기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 그대로 연립하면 $r$ 의 삼차식이 남는다. $1-r^3$ 을 $(1-r)(1+r+r^2)$ 로 쪼개야 두 번째 조건이 통째로 약분되고 $r=-3$ 이 한 줄에 나온다. 앞 예제 e18 의 「비로 소거」보다 인수분해 한 겹이 더 깊다.
    확인체크 유제 출발 ★2 · 통찰 1(d2) → +1 해 ★3. [분류 이슈] 규칙상 +1 기준은 통찰 2개 또는 depth 3 이라 벤더 신호만 보면 ★2.
  tier: star_3
  mechanism_primary: '$a_1(1-r)(1+r+r^2)=56$ 을 $a_1(1+r+r^2)=14$ 로 나눔 → $1-r=4$ → $r=-3$, $a_1=2$ → $a_5=a_1r^4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$162$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/241-562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$1-r$ 이 정수로 떨어지도록 두 조건값의 비를 정수로 잡는다(비 $4$ → $r=-3$, 비 $3$ → $r=-2$). 제약: 두 값의 비가 곧 $1-r$ 이므로 비가 $1$ 이면 $r=0$ 이 되어 등비수열이 깨지고, 비가 음수면 $r>1$ 이 되어 값이 커진다.'
    creative: '(1) $a_1+a_4$ 와 $a_1-a_2+a_3$ 처럼 $1+r^3$ 인수분해로 바꾸기(★3 유지) (2) 세 항의 합 대신 곱을 주면 I-SYM 골조로 갈아탄다(★3) (3) 인수분해를 못 보게 $a_1-a_4$ 대신 $a_2-a_5$ 를 주면 $r$ 이 공통으로 빠져 난이도가 같다(★3) (4) 항 번호를 하나 늘려 $1-r^4$ 로 만들면 인수분해가 두 겹이 되어 ★4.'
```

```yaml
- id: GN-ALG-241-563
  page: 241
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    제 $2$ 항이 $6$, 공비가 $3$ 인 등비수열에서 처음으로 $1000$ 보다 커지는 항이 제몇 항인지 구하기.
  category: '첫째항 역산 → 일반항 → 부등식 → 최소 자연수 $n$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조건을 만족시키는 등비수열의 항 구하기(처음으로 $k$ 보다 커지는 항)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_1=\dfrac{6}{3}=2$ 를 먼저 되짚는 한 단계가 e19 보다 앞에 붙을 뿐, 이후는 $2\times3^{n-1}>1000$ 에서 $3^6=729$ 를 확인하는 같은 골조다.
    확인체크 유제 출발 ★2 · 통찰 0 · M_total 5 → −1 후보이나 유제 자리라 ★2 유지. [분류 이슈] 기록.
  tier: star_2
  mechanism_primary: '$a_1=2$ → $a_n=2\times3^{n-1}$ → $3^{n-1}>500$ → $3^6=729$ → 제 $7$ 항'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$7$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/241-563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 항의 번호와 기준값을 바꿀 수 있다(제 $3$ 항 $12$, 공비 $2$, 기준 $500$). 제약: 기준값이 어떤 항의 값과 같아지지 않도록 두 거듭제곱 사이에 두고, 첫째항 역산이 정수로 떨어지게 공비의 배수를 쓴다.'
    creative: '(1) 공비를 $\dfrac{1}{3}$ 로 바꿔 「처음으로 $\dfrac{1}{100}$ 보다 작아지는 항」으로 뒤집기(★2) (2) 주어진 항을 제 $2$ 항 대신 제 $5$ 항으로 밀면 역산이 길어져 ★2 유지 (3) 공비를 음수로 두고 「처음으로 절댓값이 $1000$ 을 넘는 항」을 묻기(★3) (4) $1000$ 보다 커지는 항이 몇 개인지를 유한 구간 안에서 세게 하면 ★3.'
```

```yaml
- id: GN-ALG-242-e20
  page: 242
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $2$ 와 $20$ 사이에 $10$ 개의 수를 넣어 만든 수열 $2,\ a_1,\ a_2,\ \cdots,\ a_{10},\ 20$ 이 등비수열일 때 $a_1a_{10}$ 구하기.
  category: '양 끝에서 같은 거리의 두 항의 곱 = 양 끝 두 항의 곱'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a_1=2r$, $a_{10}=\dfrac{20}{r}$ 이라 곱하면 $r$ 이 상쇄된다는 등비수열의 좌우 대칭을 써서 공비를 구하지 않고 끝냄'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 수 사이에 수를 넣어 만든 등비수열(양 끝에서 같은 거리의 두 항의 곱)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    공비를 정직하게 구하면 $r^{11}=10$ 이라는 풀 수 없는 식이 나온다. $a_1$ 과 $a_{10}$ 이 양 끝에서 같은 거리에 있어 곱하면 $r$ 이 사라진다는 대칭을 보아야만 $2\times20=40$ 으로 끝난다.
    노동량은 적지만($M_total$ 5) 이 한 수를 못 보면 풀이가 막히는 구조라 필수 예제 출발 ★2 에서 +1 해 ★3. 저노출 통찰 I-SYM 이 이 단원에서 처음 나오는 자리다.
  tier: star_3
  mechanism_primary: '$a_1a_{10}=(2r)\left(\dfrac{20}{r}\right)=2\times20=40$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$40$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/242-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양 끝 두 수와 사이에 넣는 개수를 자유롭게 바꿔도 골조가 유지된다($3$ 과 $27$ 사이에 $8$ 개 → $a_1a_8=81$). 제약: 묻는 두 항이 양 끝에서 같은 거리에 있어야 하고, 그렇지 않으면 $r$ 이 남아 풀 수 없는 문제가 된다.'
    creative: '(1) $a_2a_9$ 나 $a_3a_8$ 처럼 다른 대칭 쌍으로 바꾸기(★3 유지) (2) $a_1a_2\cdots a_{10}$ 전체 곱을 묻게 하면 대칭 쌍 다섯 개를 묶어야 해 ★4 (3) 거리가 다른 $a_1a_9$ 를 묻고 공비를 구할 수 있는 값으로 양 끝을 잡으면 대칭이 죽고 ★2 (4) 등차수열로 바꿔 $a_1+a_{10}$ 을 묻기(★2).'
```

```yaml
- id: GN-ALG-242-e21
  page: 242
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    세 수 $x+2$, $x-4$, $\dfrac{x-1}{3}$ 이 이 순서대로 등비수열을 이루도록 하는 모든 실수 $x$ 의 값의 합 구하기.
  category: '등비중항 → $x$ 의 이차방정식 → 두 근의 합'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '등비중항 조건이 문자식으로 주어진 경우'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x-4)^2=(x+2)\times\dfrac{x-1}{3}$ 을 정리하면 $x$ 의 이차방정식 하나가 되고, 「모든 값의 합」이므로 근과 계수의 관계로 바로 읽으면 한 줄이다. 다만 두 근을 직접 구해 더해도 같은 길이라 전략 선택이 강제되지 않아 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지. [분류 이슈] 근과 계수의 관계를 쓰면 단원 경계를 넘지만 필수 경로가 아니라 I-XU 를 붙이지 않음.
  tier: star_2
  mechanism_primary: '$(x-4)^2=(x+2)\dfrac{x-1}{3}$ → $2x^2-25x+50=0$ → 두 근의 합 $\dfrac{25}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/242-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 문자식의 상수항과 분모를 바꿀 수 있다($x+1$, $x-2$, $\dfrac{x+4}{2}$ 등). 제약: 전개 후 이차항 계수가 $0$ 이 되면 일차방정식이 되어 「모든 값의 합」이 무의미해지고, 판별식이 음수면 실수 $x$ 가 없다. 어느 항도 $0$ 이 되지 않는지도 함께 확인해야 한다.'
    creative: '(1) 「모든 값의 곱」으로 바꾸기(★2 유지) (2) 세 수 중 하나가 $0$ 이 되는 근이 나오도록 설계해 기각 단계를 강제하면 I-VF d2 · ★3 (3) 가운데 항을 등차중항 조건과 동시에 걸면 연립이 되어 ★3 (4) 실수 $x$ 가 존재할 조건을 판별식으로 묻는 역문제로 바꾸면 I-BW d2 · ★3.'
```

```yaml
- id: GN-ALG-242-564
  page: 242
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $1$ 과 $729$ 사이에 $n$ 개의 수를 넣어 만든 수열이 공비 $\sqrt{3}$ 인 등비수열일 때 $n$ 구하기.
  category: '항의 개수 $n+2$ → $(\sqrt{3})^{n+1}=729$ → 지수 비교'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 수 사이에 $n$ 개의 수를 넣어 만든 등비수열(항의 개수와 공비)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    마지막 항이 제 $n+2$ 항이므로 공비의 지수는 $n+1$ 이라는 항 번호 세기(T-표기)와, $729=3^6=(\sqrt{3})^{12}$ 로 밑을 통일하는 지수 정리(T-단위)가 두 개의 함정이다. 골조 자체는 지수 비교 한 줄.
    확인체크 유제 출발 ★2 · 통찰 0 · M_total 8 → ★2 유지(노동량은 크지만 판단 분기가 없다).
  tier: star_2
  mechanism_primary: '$1\times(\sqrt{3})^{n+1}=729=(\sqrt{3})^{12}$ → $n+1=12$ → $n=11$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/242-564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝 값과 공비를 같은 밑의 거듭제곱으로 맞춰 바꾼다($1$ 과 $256$ 사이, 공비 $\sqrt{2}$ → $n=15$). 제약: 끝 값이 공비의 정수 거듭제곱이어야 $n$ 이 자연수로 떨어지고, 첫 항이 $1$ 이 아니면 비를 먼저 나눠야 한다.'
    creative: '(1) 공비를 묻고 개수를 주는 역문제로 바꾸기(★2) (2) 공비가 음수일 수도 있게 두면 끝 값의 부호로 갈래를 따져야 해 I-MI d1 · ★3 (3) 넣은 수들의 곱을 묻게 하면 대칭 쌍 묶기가 필요해 I-SYM d2 · ★4 (4) 사이에 넣는 수가 모두 정수일 조건을 묻는 역문제(★4 · I-BW).'
```

```yaml
- id: GN-ALG-242-565
  page: 242
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $f(x)=x^2+2x+a$ 를 $x+1$, $x-1$, $x-2$ 로 나눈 나머지가 이 순서대로 등비수열을 이룰 때, $f(x)$ 를 $x+2$ 로 나눈 나머지 구하기($a$ 는 상수).
  category: '나머지정리로 세 나머지 → 등비중항 → 상수 $a$ → $f(-2)$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '다항식의 나머지를 나머지정리로 $f(-1)$, $f(1)$, $f(2)$ 로 바꿔 수열 조건이 걸릴 수 있는 수 세 개로 옮김(방정식 단원의 도구가 없으면 풀이가 시작되지 않음)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '나머지정리와 등비중항의 결합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「나머지가 등비수열」이라는 말은 그 자체로는 수열 조건이 아니다. 나머지정리로 세 나머지를 $a-1$, $a+3$, $a+8$ 로 바꾼 뒤에야 등비중항을 걸 수 있고, 그 뒤 $(a+3)^2=(a-1)(a+8)$ 에서 이차항이 상쇄돼 $a$ 가 일차식으로 떨어진다.
    단원 경계를 넘는 도구가 필수라 I-XU d2. 확인체크 유제 출발 ★2 · 통찰 1(d2) → ★3.
  tier: star_3
  mechanism_primary: '나머지정리 → $a-1,\ a+3,\ a+8$ → $(a+3)^2=(a-1)(a+8)$ → $a=17$ → $f(-2)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/242-565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f(x)$ 의 일차항 계수와 나누는 일차식 세 개를 바꿀 수 있다($f(x)=x^2-4x+a$ 를 $x-1,\ x-2,\ x-4$ 로). 제약: 세 나머지가 $a$ 에 대한 일차식이어야 등비중항에서 $a^2$ 이 상쇄돼 일차방정식이 되고, 그렇지 않으면 $a$ 가 둘 나와 기각 단계가 필요하다.'
    creative: '(1) 등비수열 대신 등차수열로 바꾸면 난이도가 한 단계 내려간다(★2) (2) 나머지 순서를 어긋나게 주어 어느 것이 가운데 항인지 스스로 정하게 하면 I-MI d2 · ★4 (3) $f(x)$ 를 삼차식으로 올려 나머지가 이차식이 되게 하면 계산만 무거워진다(질 저하 · 권장하지 않음) (4) $a$ 가 두 값 나오되 하나가 등비수열을 깨도록 설계하면 I-VF d2 · ★4.'
```

```yaml
- id: GN-ALG-243-e22
  page: 243
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    세 수 $2$, $a$, $b$ 가 등비수열이고 세 수 $a$, $b$, $30$ 이 등차수열일 때 $b-a$ 구하기($a>0$, $b>0$).
  category: '등비중항과 등차중항을 연립 → 한 문자의 이차방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a^2=2b$ 와 $2b=a+30$ 의 우변이 같은 $2b$ 라는 점을 써서 두 조건을 $a^2=a+30$ 한 식으로 결합'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '등차중항과 등비중항의 결합(두 중항 조건 연립)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 중항 조건을 각각 세우는 것까지는 공식 적용이지만, 두 식이 모두 $2b$ 를 품고 있음을 보아 $b$ 를 소거하면 $a$ 만의 이차식 하나로 합쳐진다. 이 결합이 풀이의 축이라 I-CON d2.
    $a>0$ 조건이 $a=-5$ 를 지우는 T-범위 함정. 필수 예제 출발 ★2 · 통찰 1(d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '$a^2=2b$, $2b=a+30$ → $a^2=a+30$ → $a=6$(양수 조건), $b=18$ → $b-a=12$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/243-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 수 $2$ 와 마지막 수 $30$ 을 바꾸면 결합식이 $a^2=ka+m$ 꼴로 유지된다($3$ 과 $24$ 등). 제약: 결합된 이차방정식이 인수분해되도록 두 수를 고르고, 양수 조건으로 지울 음의 근이 실제로 생기게 곱을 음수로 둔다.'
    creative: '(1) 등비·등차의 순서를 바꿔 $a$, $b$, $30$ 이 등비이고 $2$, $a$, $b$ 가 등차이게 하기(★3 유지) (2) 양수 조건을 빼고 가능한 $b-a$ 를 모두 구하게 하면 I-MI d1 추가 · ★4 (3) 묻는 값을 $ab$ 나 $a+b$ 로 바꾸기(★3) (4) 세 번째 조건을 더 얹어 세 문자 연립으로 키우면 ★4.'
```

```yaml
- id: GN-ALG-243-e23
  page: 243
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    등비수열을 이루는 세 실수의 합이 $\dfrac{3}{2}$, 곱이 $-1$ 일 때 세 실수 구하기.
  category: '세 수를 $\dfrac{a}{r},\ a,\ ar$ 로 대칭 배치 → 곱에서 $a$ → 합에서 $r$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 수를 $a,\ ar,\ ar^2$ 이 아니라 $\dfrac{a}{r},\ a,\ ar$ 로 놓으면 곱이 $a^3$ 으로 떨어져 미지수가 한 번에 하나씩 결정됨'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '등비수열을 이루는 세 수($\dfrac{a}{r},\ a,\ ar$ 대칭 설정)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a,\ ar,\ ar^2$ 로 놓으면 곱이 $a^3r^3$, 합이 $a(1+r+r^2)$ 로 두 미지수가 엉킨다. 가운데를 $a$ 로 두는 대칭 배치를 쓰면 곱이 $a^3=-1$ 로 $a$ 를 즉시 주고, 남은 합 조건이 $r+\dfrac{1}{r}$ 의 이차식이 된다.
    이 배치를 아는가가 갈림길이라 I-SYM d2. 필수 예제 출발 ★2 · 통찰 1(d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '$\dfrac{a}{r}\times a\times ar=a^3=-1$ → $a=-1$ → 합 조건에서 $2r^2+5r+2=0$ → 세 수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$, $-1$, $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/243-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곱을 세제곱수로, 합을 그에 맞는 유리수로 바꾼다(곱 $8$, 합 $7$ → $a=2$, $r+\dfrac{1}{r}=\dfrac{5}{2}$). 제약: 곱이 세제곱수여야 $a$ 가 유리수이고, $r+\dfrac{1}{r}$ 의 값은 절댓값이 $2$ 이상이어야 실수 $r$ 가 존재한다.'
    creative: '(1) 세 수의 합 대신 제곱의 합을 주기(★4 · 대칭식 전개가 한 겹 더) (2) 네 수가 등비수열인 경우로 늘리면 $\dfrac{a}{r^3},\ \dfrac{a}{r},\ ar,\ ar^3$ 배치가 필요해 ★4 (3) 세 수가 모두 양수라는 조건을 붙이면 곱이 양수여야 해 설정이 바뀐다(★3) (4) 세 수를 삼차방정식의 근으로 제시하면 근과 계수의 관계가 붙어 ★4.'
```

```yaml
- id: GN-ALG-243-566
  page: 243
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    세 양수 $a$, $b$, $c$ 에 대하여 $4$, $a$, $b$ 와 $b$, $c$, $64$ 가 각각 등비수열이고 $a$, $b$, $c$ 가 등차수열일 때 $a+b+c$ 구하기.
  category: '두 등비중항 + 한 등차중항 → 한 문자로 정리'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a^2=4b$, $c^2=64b$ 에서 $b$ 를 공통으로 소거해 $c=4a$ 를 얻고, 이를 등차중항 $2b=a+c$ 에 넣어 세 조건을 $a$ 하나의 식으로 결합'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '등차중항·등비중항 연립(세 조건 결합)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 셋이라 아무 순서로나 대입하면 길어진다. 두 등비중항이 같은 $b$ 를 품고 있어 나누면 $c^2=16a^2$, 즉 $c=4a$ 가 바로 나오고, 그 뒤 등차중항이 $a$ 만의 식으로 닫힌다.
    양수 조건이 $c=-4a$ 를 지우는 T-부호 함정. 확인체크 유제 출발 ★2 · 통찰 1(d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '$a^2=4b$, $c^2=64b$ → $c=4a$ → $2b=a+c=5a$ 와 $b=\dfrac{a^2}{4}$ → $a=10$, $b=25$, $c=40$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$75$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/243-566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양 끝의 두 수 $4$ 와 $64$ 를 비가 완전제곱인 다른 쌍으로 바꾼다($9$ 와 $144$ → $c=4a$ 유지). 제약: 두 수의 비가 완전제곱수여야 $c$ 가 $a$ 의 유리수배로 떨어지고, 마지막 이차방정식이 $0$ 이 아닌 양의 근을 가져야 한다.'
    creative: '(1) 묻는 값을 $abc$ 로 바꾸면 대칭 곱 계산이 붙어 ★3 유지 (2) 등차·등비의 역할을 맞바꾸기(★3) (3) 양수 조건을 빼면 $c=\pm4a$ 두 갈래가 살아나 I-MI d2 · ★4 (4) 세 수를 삼차방정식의 근으로 제시하면 근과 계수의 관계가 겹쳐 ★4.'
```

```yaml
- id: GN-ALG-243-567
  page: 243
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    삼차방정식 $x^3-6x^2-24x+k=0$ 의 세 근이 등비수열을 이룰 때 상수 $k$ 구하기.
  category: '세 근을 대칭 배치 → 근과 계수의 관계 두 식의 비 → 가운데 근 → $k$'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 근을 $\dfrac{a}{r},\ a,\ ar$ 로 대칭 배치해 근의 곱이 $a^3$, 근의 합과 두 근씩의 곱이 모두 $\left(\dfrac{1}{r}+1+r\right)$ 을 공통 인수로 갖게 만듦'
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '삼차방정식의 근과 계수의 관계(방정식 단원)를 등비수열 조건과 겹쳐, 합과 두 근씩의 곱의 비를 취해 공통 인수를 지우고 $a$ 를 한 번에 결정'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '세 근이 등비수열을 이루는 삼차방정식(근과 계수의 관계)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 근을 $\dfrac{a}{r},\ a,\ ar$ 로 놓으면 근의 합 $a\left(\dfrac{1}{r}+1+r\right)=6$ 과 두 근씩의 곱의 합 $a^2\left(\dfrac{1}{r}+1+r\right)=-24$ 가 같은 인수를 공유한다. 둘을 나누면 $a=-4$ 가 $r$ 없이 나오고 $k=-a^3$ 으로 끝난다.
    대칭 설정(SYM)과 단원 경계 결합(XU)이 모두 필수라 통찰 2개·M_total 8 로 ★4 후보다. [분류 이슈] 벤더 구역은 ★2 출발이어서 2단 차이를 피해 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: '세 근 $\dfrac{a}{r},\ a,\ ar$ → 근과 계수의 두 식을 나눠 $a=-4$ → 근의 곱 $a^3=-k$ → $k=64$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/243-567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수와 $x$ 의 계수를 바꾸면 가운데 근 $a$ 가 두 계수의 비로 결정된다(합 $3$, 두 근씩의 곱 $-6$ → $a=-2$). 제약: 두 계수의 비가 곧 $a$ 이므로 정수로 떨어지게 잡고, 실제로 그 $a$ 에서 $r$ 가 실수로 존재하는지(세 근이 모두 실수인지) 확인해야 한다.'
    creative: '(1) $k$ 대신 세 근을 모두 구하게 하면 $r$ 까지 필요해 ★4 (2) 세 근이 등차수열인 경우로 바꾸면 가운데 근이 합의 $\dfrac{1}{3}$ 이라 ★3 으로 내려간다 (3) 사차방정식으로 올려 네 근이 등비수열이게 하면 ★5 후보(SYM+XU 유지) (4) 세 근이 모두 양수일 조건을 함께 묻게 하면 기각 단계가 생겨 I-VF d2 · ★4.'
```

```yaml
- id: GN-ALG-244-e24
  page: 244
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    한 변의 길이가 $2$ 인 정삼각형에서 각 변의 중점을 이은 정삼각형을 오려 내고 남은 부분을 $S_1$, 같은 시행을 반복해 얻은 부분을 $S_2$, $S_3$, $\cdots$ 이라 할 때 $S_{10}$ 의 넓이 구하기.
  category: '한 시행에서 남는 넓이의 비 $\dfrac{3}{4}$ → 넓이의 등비수열 → 제 $10$ 항'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '도형을 오려 내는 반복 시행을 넓이의 수열로 옮기고, 중점 삼각형의 넓이가 항상 원래의 $\dfrac{1}{4}$ 이라 남는 넓이가 직전의 $\dfrac{3}{4}$ 임을 읽음'
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$S_1$, $S_2$ 를 관찰해 시행 횟수가 곧 지수가 되는 $S_n=\sqrt{3}\left(\dfrac{3}{4}\right)^n$ 을 확정'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '도형의 반복 시행과 등비수열의 활용(넓이)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    개수가 $1\to3\to9$ 로 늘고 한 변은 절반씩 줄지만, 매 시행에서 남는 넓이의 비는 항상 $\dfrac{3}{4}$ 로 일정하다는 것을 보면 수열 하나로 압축된다. 원래 넓이 $\sqrt{3}$ 을 첫 항이 아니라 제 $0$ 항으로 두어야 $S_{10}$ 의 지수가 $10$ 이 되는 항 번호 함정(T-표기)과, 길이 비 $\dfrac{1}{2}$ 과 넓이 비 $\dfrac{1}{4}$ 을 혼동하는 함정(T-단위)이 겹친다.
    필수 예제 출발 ★2 · 통찰 2(RT d2 · PD d1) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '정삼각형 넓이 $\sqrt{3}$ → 매 시행 남는 비 $\dfrac{3}{4}$ → $S_n=\sqrt{3}\left(\dfrac{3}{4}\right)^n$ → $n=10$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{3}\times\left(\dfrac{3}{4}\right)^{10}$'
  answer_source: "본문 풀이"
  figure: crop:fig-244-e24.png
  latex: latex-bank/gn-alg/items/244-e24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '처음 정삼각형의 한 변과 묻는 시행 횟수를 바꿀 수 있다(한 변 $4$ · $S_6$). 제약: 오려 내는 도형이 중점 삼각형인 한 비는 항상 $\dfrac{3}{4}$ 로 고정이므로 비를 바꾸려면 자르는 규칙 자체를 바꿔야 하고, 그림 라벨 $S_1$ 이 첫 시행 후를 가리킨다는 규약은 유지한다.'
    creative: '(1) 넓이 대신 남은 부분의 둘레를 묻게 하면 공비가 $\dfrac{3}{2}$ 로 바뀌어 발산하는 수열이 된다(★3) (2) 정사각형을 $9$ 등분해 가운데를 빼는 규칙으로 바꾸면 공비 $\dfrac{8}{9}$(★3 유지) (3) $S_n<\dfrac{1}{10}S_0$ 이 되는 최소 $n$ 을 묻게 하면 로그가 붙어 I-XU d2 · ★4 (4) 오려 낸 조각들의 넓이의 합을 묻기(★4 · 급수 직전 단계).'
```

```yaml
- id: GN-ALG-244-568
  page: 244
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    한 변의 길이가 $4$ 인 정사각형에서 각 변의 중점을 이어 새 정사각형을 만드는 시행을 반복할 때, $10$ 번째 정사각형의 둘레의 길이 구하기.
  category: '중점 사각형의 한 변의 비 $\dfrac{1}{\sqrt{2}}$ → 둘레의 등비수열 → 제 $10$ 항'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '중점을 이은 정사각형의 한 변이 직각이등변삼각형의 빗변이라 직전의 $\dfrac{1}{\sqrt{2}}$ 배임을 읽어 둘레를 공비 $\dfrac{1}{\sqrt{2}}$ 인 등비수열로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '도형의 반복 시행과 등비수열의 활용(길이·둘레)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    넓이가 절반이 된다는 것은 쉽게 보이지만 이 문제가 묻는 것은 둘레이므로 길이 비 $\dfrac{1}{\sqrt{2}}$ 로 옮겨야 한다(T-단위). 처음 정사각형을 제 $0$ 항으로 두어야 $A_{10}$ 의 지수가 $10$ 이 되는 항 번호 함정(T-표기)도 함께 있다.
    확인체크 유제 출발 ★2 · 통찰 1(RT d2) · M_total 7 → ★3. 골조는 e24 와 같고 비만 길이 쪽이다.
  tier: star_3
  mechanism_primary: '처음 둘레 $16$ → 공비 $\dfrac{1}{\sqrt{2}}$ → $16\left(\dfrac{1}{\sqrt{2}}\right)^{10}=\dfrac{16}{32}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: crop:fig-244-568.png
  latex: latex-bank/gn-alg/items/244-568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '처음 한 변의 길이와 시행 횟수를 바꾼다(한 변 $8$ · $6$ 번째 → $32\left(\dfrac{1}{\sqrt{2}}\right)^6$). 제약: 시행 횟수가 짝수여야 $(\sqrt{2})$ 가 답에서 사라져 유리수로 떨어지고, 그림의 라벨 $\pt{A_1B_1C_1D_1}$ 이 첫 시행 후를 가리킨다는 규약은 고정한다.'
    creative: '(1) 둘레 대신 넓이를 묻게 하면 공비가 $\dfrac{1}{2}$ 로 바뀌어 계산이 쉬워진다(★2) (2) 정삼각형의 중점 삼각형으로 바꾸면 길이 비가 $\dfrac{1}{2}$(★2) (3) 둘레가 처음으로 $1$ 보다 작아지는 시행 횟수를 묻게 하면 부등식이 붙어 ★3 유지 (4) 모든 정사각형의 둘레의 합을 묻기(★4 · 급수 직전 단계).'
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 3 · ★2 9 · ★3 9 · ★4 0 · ★5 0
- 통찰형 10(241-e18 · 241-562 · 242-e20 · 242-565 · 243-e22 · 243-e23 · 243-566 · 243-567 · 244-e24 · 244-568) · 절차형 11 · premium 0
- 통찰 라벨 분포: I-SYM 3 · I-EQV 2 · I-XU 2 · I-CON 2 · I-RT 2 · I-PD 1 (총 12 라벨 · depth 3 은 없고 d2 가 10 · d1 이 2 · depth_score 최대 4.00 은 243-567). 감쇠(Step 1.5)는 depth 3 이 없어 적용 대상이 없다.
- M_total 분포: 4 한 문 · 5 네 문 · 6 여섯 문 · 7 여섯 문 · 8 네 문 (평균 6.4). Mₜ 가 2 인 세 문(242-564 · 244-e24 · 244-568)은 모두 「항 번호를 어디서 세기 시작하는가」 함정이다.
- type_hint 분포(예제와 그 확인체크 유제가 짝을 이룬다): 「항 사이의 관계가 주어진 등비수열」 2 · 「처음으로 $k$ 보다 커지는 항」 2 · 「두 수 사이에 수를 넣어 만든 등비수열」 2 · 「등차중항·등비중항의 결합」 2 · 「도형의 반복 시행과 등비수열의 활용」 2 · 「등비중항」 2 · 나머지는 각 1
- 대상층: 하위권 3 · 중하위권 7 · 중위권 3 · 중상위권 8
- 그림: 2문(`crop:fig-244-e24.png` · `crop:fig-244-568.png`) — 둘 다 반복 시행의 모양을 보여 주는 삽화이고 시행 규칙이 발문에 전부 서술돼 있어 골조·답에 영향이 없다.
- ★4·★5 자격: 저노출 통찰(SC/VF/SYM/XU)이 네 문항(242-e20 · 242-565 · 243-e23 · 243-567)에 있으나 통찰 수·depth 가 ★4 기준에 못 미쳐 이 범위에 ★4 이상은 두지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-240-560 · 561 · 241-562 · 563 · 242-564 · 565 · 243-566 · 567 · 244-568 | 벤더 태그 「확인체크」만 보면 ★1 출발이지만 모두 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2)을 썼다(GN-ALG-08 · 19 와 같은 결정) | 각 ★2~★3 |
| GN-ALG-241-e19 · 241-563 | 통찰 0 · M_total 5 라 v3.8 산식의 −1 후보(★1)이지만, 이 단원의 부등식 골조를 처음 제시하는 필수 예제와 그 유제 자리라 구역 출발점 ★2 를 유지 | ★1 / ★2 |
| GN-ALG-241-562 | 통찰 1개이고 depth 2 라 규칙상 +1 기준(통찰 2개 또는 depth 3)에 못 미치지만, $1-r^3$ 인수분해를 못 보면 삼차식에 막히는 구조라 ★3 으로 올렸다 | ★2 / ★3 |
| GN-ALG-242-e20 | M_total 5 로 노동량은 익히기 수준인데 대칭을 못 보면 $r^{11}=10$ 에서 풀이가 끊긴다. 노동량 기준 −1 과 통찰 기준 +1 이 맞서는 자리 | ★2 / ★3 |
| GN-ALG-242-e21 | 「모든 실수 $x$ 의 값의 합」이라 근과 계수의 관계를 쓰면 단원 경계를 넘지만, 두 근을 직접 구해 더해도 길이가 같아 I-XU 를 붙이지 않고 절차형으로 두었다 | ★2 / ★3 |
| GN-ALG-242-564 | M_total 8 로 이 범위 상위인데 판단 분기가 없어 ★2 로 두었다. 노동량만 보면 ★3 | ★2 / ★3 |
| GN-ALG-243-567 | 통찰 2개(SYM·XU) · M_total 8 로 ★4 후보이나 벤더 구역이 ★2 출발이라 2단 차이를 피해 ★3 유지 | ★3 / ★4 |
| GN-ALG-239-557 · 558 | 소문항 4개·6개를 각각 한 블록으로 묶어 Mₛ=2 로 매김. 쪼개면 개별 소문항은 모두 M_total 4 | ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 개념원리 자신의 예제 제목이 이미 **일반항 / 항이 주어진 경우 / 항 사이의 관계 / 조건을 만족시키는 항 / 두 수 사이에 넣기 / 등비중항 / 등차중항과 등비중항 / 세 수 / 활용** 아홉 갈래로 나눠 두었고, 필수 예제와 확인체크 유제가 1:1 로 붙어 있어 유형 경계가 드물게 깨끗하다. 카탈로그를 세울 때 이 아홉을 그대로 쓰되 아래 조정을 권한다.
- **「등비수열의 일반항」과 「두 항이 주어진 경우」는 통합해도 된다.** 실제 도구가 $a_n=ar^{n-1}$ 하나뿐이고, 240-e16 과 240-e17 의 차이는 항 번호 간격이 홀수냐 짝수냐(= 공비의 부호 분기가 생기느냐)뿐이다. 이 분기 유무를 난이도 슬롯(★2 / ★3)으로 두면 충분하다.
- **「항 사이의 관계가 주어진 등비수열」은 따로 세워야 한다.** 241-e18 과 241-562 는 겉보기에 같은 연립이지만, 전자는 $r^2$ 로 묶어 보기(d1), 후자는 $1-r^3$ 인수분해(d2)라 학생 체감이 한 단계 다르다. 한 유형 안의 두 난이도 슬롯으로 두는 것이 정확하다.
- **「등비중항」은 수 대상(239-559)·문자식 대상(242-e21)·다른 단원 산출물 대상(242-565)의 세 슬롯으로 벌려 두는 편이 좋다.** 특히 242-565 처럼 나머지정리·삼각함수·이차함수의 산출물 셋을 등비수열 조건에 얹는 꼴은 이 단원 고유가 아니라 **가로지르는 유형**이므로, 단원별로 중복 정의하지 말고 상위 유형 하나를 세운 뒤 산출물만 갈아 끼우는 편이 낫다.
- **$\dfrac{a}{r},\ a,\ ar$ 대칭 배치는 유형이 아니라 도구다.** 243-e23(세 수)과 243-567(삼차방정식 세 근)이 같은 도구를 쓰지만 결합 대상이 달라 유형은 둘로 세우고, 도구 태그(I-SYM)로 묶어 검색되게 하는 편이 변형 단계에 유용하다.
- **도형의 반복 시행(244-e24 · 568)은 등비수열 단원이 아니라 활용 유형 묶음으로 따로 관리한다.** 두 문항의 유일한 변별은 **길이 비냐 넓이 비냐**이고, 이 판정이 등비수열 본체 유형에는 존재하지 않는다. 또한 여기서 「모든 조각의 합」으로 한 걸음만 더 가면 등비급수 단원으로 넘어가므로 유형 카탈로그에서 인접 단원과 연결선을 남겨 둬야 한다.
- 이 단원만으로는 ★4·★5 슬롯을 만들 재료가 부족하다(SC·VF 가 한 번도 나오지 않았고 depth 3 통찰이 없다). ★4 이상이 필요하면 243-567 의 「사차방정식 네 근」, 242-564 의 「넣은 수들의 곱」, 244 문항들의 「합」처럼 각 블록 `variation_notes.creative` 에 적어 둔 확장 경로를 써야 한다.
