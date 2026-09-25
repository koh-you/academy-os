---
name: mechanism-데이터-GN-ALG-25
description: 개념원리 대수 25 등차수열의 합(1/1 · 39문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 25 등차수열의 합
  unit_code: GN-ALG-25
  part: "1/1"
  extract_range: "229~237쪽 · 229-525~237-556"
  total_problems: 39
  unit_total: 39
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 확인체크 유제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 25 등차수열의 합 (1/1) 정독 데이터 (v1.0)

229~237쪽 39문항 전수. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 16문(필수 예제 e9~e15 7문 + 확인체크 유제 9문) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 8문 · 「연습문제 실력 UP」 4문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그이므로 익히기 ★1 · 필수 예제와 그 확인체크 유제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, M_total 과 통찰 라벨로 ±1 만 조정했다. 기출 태그(평가원·교육청)는 통찰이 있을 때만 +1 을 고려했다.

이 단원은 (가) 합 공식 $S_n=\dfrac{n(a+l)}{2}=\dfrac{n\{2a+(n-1)d\}}{2}$ 를 바로 대입하는 층, (나) 항의 개수 $n$ 이나 공차를 합 조건에서 역산하는 층, (다) 부분합·블록합을 다시 등차 구조로 보는 층, (라) $S_n$ 과 $a_n$ 을 $a_n=S_n-S_{n-1}\,(n\ge 2)$ 로 오가는 층, (마) 합의 최대·최소를 부호 전환점으로 옮기는 층의 다섯 겹으로 쌓인다. 판정에서는 합 공식 대입·항 수 역산 같은 표준 절차는 통찰로 세지 않고, 조건을 다른 꼴로 옮겨야만 풀이가 열리는 자리(양끝 제외 · 두 항의 합 → 중항 · 블록합 등차 · 마지막 양수 항까지가 최댓값)만 라벨링했다. $n=1$ 과 $n\ge 2$ 의 구분, 처음으로 부호가 바뀌는 항의 경계는 Mₜ(T-경계·T-부호)로 흡수했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-229-525
  page: 229
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 첫째항과 끝항, 또는 첫째항과 공차가 주어진 등차수열의 첫째항부터 제n항까지의 합을 구하기(⑸ 는 수열이 나열로 주어짐).
  category: "등차수열의 합 공식 두 꼴 → 주어진 자료에 맞는 쪽 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 공식 (첫째항·끝항 꼴 / 첫째항·공차 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 첫째항과 끝항이 있으므로 $\dfrac{n(a+l)}{2}$, ⑶⑷⑸ 는 공차가 있으므로 $\dfrac{n\{2a+(n-1)d\}}{2}$ 를 쓰면 각각 한 줄이다.
    어느 꼴을 쓸지 고르는 것 말고는 판단이 없고 ⑷ 의 분수 계산만 약간 무겁다. 익히기 구역·통찰 0·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '자료 확인(끝항 있음 / 공차 있음) → 대응하는 합 공식 대입 → 값'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $200$ ⑵ $52$ ⑶ $145$ ⑷ $-77$ ⑸ $80$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/229-525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·끝항·공차·항의 개수를 자유롭게 바꿀 수 있다. 제약: ⑴⑵ 처럼 끝항을 주는 꼴은 $(l-a)$ 가 $(n-1)$ 로 나누어떨어져 공차가 깔끔해야 하고, ⑷ 처럼 분수 공차를 쓰면 $\dfrac{n\{2a+(n-1)d\}}{2}$ 가 정수로 떨어지도록 $n$ 을 고른다.'
    creative: '(1) 합을 주고 항의 개수를 묻기(역산 한 단계 추가 ★2) (2) 나열된 수열에서 끝항을 주고 합을 묻기(항 수 역산 ★2 · 527 과 같은 골조) (3) 소문항 하나를 「합이 처음으로 100 을 넘는 n」 으로 바꾸면 부등식 판정이 붙어 ★2.'
```

```yaml
- id: GN-ALG-229-526
  page: 229
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 수열 1, 3, 5, 7, … 의 일반항, 23 이 제몇 항인지, 그리고 1+3+…+23 의 값.
  category: "일반항 → 끝항의 항 번호 → 그 번호까지의 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항과 합 (홀수의 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소문항이 $a_n=2n-1$ → $2n-1=23$ → $S_{12}$ 로 골조를 그대로 안내해 준다. 학생이 판단할 지점이 없다.
    익히기 구역·통찰 0·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: '$a_n=2n-1$ → $a_n=23$ 에서 $n=12$ → $S_{12}=\dfrac{12(1+23)}{2}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=2n-1$ ⑵ 제$12$항 ⑶ $144$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/229-526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 공차(3, 7, 11, … 이나 2, 5, 8, …), 끝항(23 대신 41 등)을 바꿀 수 있다. 제약: 끝항이 실제로 수열의 항이어야 하고(즉 $(l-a)$ 가 $d$ 의 배수) 항 번호가 자연수로 나와야 한다.'
    creative: '(1) 소문항 유도를 없애고 곧바로 합만 묻기(항 수 역산이 숨겨져 ★2) (2) 「$1+3+\cdots+(2n-1)=n^2$ 임을 보여라」 로 바꾸면 일반화라 ★2 (3) 홀수의 합과 짝수의 합의 차를 묻기(두 수열 결합 ★2~3).'
```

```yaml
- id: GN-ALG-229-527
  page: 229
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 첫째항부터 끝항까지 나열된 등차급수의 합(공차가 음수인 것, 분수인 것 포함).
  category: "공차 확인 → 끝항으로 항의 개수 역산 → 합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "끝항이 주어진 등차수열의 합 (항의 개수를 먼저 구하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항의 개수를 모른 채 합 공식을 쓸 수 없으므로 $a+(n-1)d=l$ 로 $n$ 을 먼저 구하는 한 단계가 525 보다 더 있다.
    항 수를 세는 자리에서 off-by-one(T-범위)이 유일한 걸림돌이고 판단 분기는 없다. 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: '$d$ 확인 → $a+(n-1)d=l$ 로 $n$ → $S_n=\dfrac{n(a+l)}{2}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-195$ ⑵ $15$ ⑶ $-40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/229-527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·공차·끝항 세 수를 바꾼다. 제약: $\dfrac{l-a}{d}$ 가 음이 아닌 정수여야 하고, ⑶ 처럼 분수 공차를 쓰면 분모를 통일해 $n$ 이 정수로 떨어지게 한다. 공차의 부호와 끝항의 부호가 어긋나면(감소인데 끝항이 더 큼) 문제가 성립하지 않는다.'
    creative: '(1) 합의 값을 주고 끝항을 묻기(이차방정식이 생겨 ★2 · 근 선별이 붙으면 ★3) (2) 「합이 음수가 되는 최소의 항의 개수」 로 바꾸면 부등식 판정 ★2 (3) 두 급수의 합의 차를 묻기(★2).'
```

```yaml
- id: GN-ALG-229-528
  page: 229
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $S_n=n^2+2n$, ⑵ $S_n=2n^2-1$ 일 때 일반항 $a_n$ 을 구하기.
  category: "$a_n=S_n-S_{n-1}\\,(n\\ge 2)$ → $a_1=S_1$ 확인 → 두 식 합치기/분리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합 $S_n$ 에서 일반항 $a_n$ 구하기 ($n=1$ 따로 확인)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 $S_n$ 에 상수항이 없어 $a_1$ 이 $n\ge 2$ 식에 포함되고, ⑵ 는 상수항 $-1$ 때문에 $a_1$ 이 따로 남는다. 답의 꼴이 갈리는 곳이 정확히 이 지점이다.
    교과서가 절차를 그대로 제시하므로 통찰로는 세지 않고 T-경계로 흡수했다. 익히기 ★1. [분류 이슈] 경계 판정이 본질이라 ★2 후보.
  tier: star_1
  mechanism_primary: '$n\ge 2$ 에서 $a_n=S_n-S_{n-1}$ → $a_1=S_1$ 과 대조 → 일치하면 하나로, 어긋나면 나눠 쓰기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a_n=2n+1$ ⑵ $a_1=1$, $a_n=4n-2\ (n\ge 2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/229-528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=pn^2+qn+r$ 의 세 계수를 바꾼다. 제약: 상수항 $r$ 이 0 이면 첫째항부터 등차, $r\ne 0$ 이면 $a_1$ 만 어긋난다 — 이 둘을 한 문제 안에 짝으로 넣어야 학습 효과가 난다. $p\ne 0$ 이어야 등차수열이 된다.'
    creative: '(1) $S_n$ 을 삼차식으로 주면 등차가 아니게 되어 개념 확인이 강해짐(★2) (2) 「첫째항부터 등차가 되도록 하는 상수」 를 묻기(537 골조 ★2) (3) $S_n$ 을 그래프나 표로 주고 $a_n$ 을 읽게 하면 I-RT ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-230-e9
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 첫째항 7, 공차 2 인 수열의 제k항이 33 일 때 제k항까지의 합. ⑵ 제3항 7, 제10항 21 인 수열의 제20항까지의 합.
  category: "일반항으로 미지수(항 번호 또는 첫째항·공차) 결정 → 합 공식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 (항 번호·두 항 조건에서 합 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $7+2(k-1)=33$ 으로 $k=14$ 를 얻고 합 공식, ⑵ 는 $a_3, a_{10}$ 두 식을 연립해 $a_1, d$ 를 얻고 합 공식이다. 이 단원의 기본 골조를 두 방향으로 보여 주는 자리다.
    통찰 0·M_total 5 라 v3.8 −1 후보지만, 단원 대표 골조를 처음 제시하는 필수 예제라 구역 출발점 ★2 를 유지했다. [분류 이슈] ★1 후보.
  tier: star_2
  mechanism_primary: '일반항 식으로 미지수 확정 → $S_n=\dfrac{n\{2a+(n-1)d\}}{2}$ 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $280$ ⑵ $440$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/230-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 첫째항·공차·끝항 값을, ⑵ 는 주어지는 두 항의 번호와 값을 바꾼다. 제약: ⑴ 에서 $\dfrac{l-a}{d}+1$ 이 자연수여야 하고, ⑵ 에서 두 항의 차가 번호 차로 나누어떨어져 공차가 정수가 되어야 한다.'
    creative: '(1) 합을 주고 항의 개수를 묻는 역방향으로 바꾸면 이차방정식 + 근 선별 ★3 (2) 두 항 대신 「제5항과 제12항의 합」 처럼 묶은 조건을 주면 I-EQV ★3 (3) 공차를 미지수로 두고 합이 최대가 되도록 하는 조건을 붙이면 ★3.'
```

```yaml
- id: GN-ALG-230-529
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    일반항이 $a_n=2n-6$ 인 등차수열의 첫째항부터 제15항까지의 합.
  category: "일반항에서 첫째항·끝항 읽기 → 합 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항이 주어진 등차수열의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $a_1=-4$, $a_{15}=24$ 를 읽어 $\dfrac{15(-4+24)}{2}$ 한 줄이다. 공차를 따로 구할 필요도 없다.
    e9 의 유제라 ★2 출발이지만 통찰 0·M_total 4 라 v3.8 −1 을 적용해 ★1.
  tier: star_1
  mechanism_primary: '$a_1=-4$, $a_{15}=24$ → $S_{15}=\dfrac{15(a_1+a_{15})}{2}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$150$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/230-529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_n=pn+q$ 의 $p, q$ 와 항의 개수를 바꾼다. 제약: 합이 정수로 떨어지려면 $n(a_1+a_n)$ 이 짝수여야 하고, 음수 항이 섞이게 $q$ 를 잡아야 부호 감각을 같이 볼 수 있다.'
    creative: '(1) $|a_n|$ 의 합으로 바꾸면 부호 전환점 분기가 생겨 ★4(556 골조) (2) 「합이 처음으로 양수가 되는 $n$」 으로 바꾸면 ★2 (3) 일반항을 말로만 주고(「제n항이 2n-6」) 수열을 직접 나열하게 하면 ★1 유지.'
```

```yaml
- id: GN-ALG-230-530
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    첫째항 50, 제n항 −10, 제n항까지의 합이 220 인 등차수열의 제10항.
  category: "합 공식에서 항의 개수 역산 → 공차 → 특정 항"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합 조건에서 항의 개수와 공차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫째항과 끝항이 모두 있으므로 $\dfrac{n(50-10)}{2}=220$ 이 $n$ 만의 일차식이 되어 $n=11$ 이 바로 나온다. 그다음 $a_{11}=-10$ 에서 $d$, 마지막에 $a_{10}$ 이다.
    세 단계가 일렬로 이어질 뿐 갈래가 없다. 확인체크 유제 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{n(a+l)}{2}=220$ → $n=11$ → $a_{11}=-10$ 에서 $d=-6$ → $a_{10}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/230-530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·끝항·합 세 수를 바꾼다. 제약: $\dfrac{2S}{a+l}$ 이 자연수 $n$ 으로 떨어져야 하고, $\dfrac{l-a}{n-1}$ 도 정수 공차가 되어야 한다. 이 두 나눗셈이 동시에 맞아야 하므로 먼저 $n$ 과 $d$ 를 정하고 역으로 $S$ 를 계산해 출제하는 편이 안전하다.'
    creative: '(1) 끝항 대신 공차를 주면 $n$ 에 대한 이차방정식이 되어 근 선별(I-VF) ★3 (2) 제10항 대신 「처음으로 음수가 되는 항」 을 물으면 부호 경계 ★2 (3) 합이 220 「이상」 이 되는 최소 $n$ 으로 바꾸면 부등식 ★3.'
```

```yaml
- id: GN-ALG-231-e10
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    −10 과 4 사이에 n 개의 수를 넣어 만든 등차수열의 모든 항의 합이 −24 일 때 n 의 값.
  category: "양끝 포함 항의 개수를 $n+2$ 로 잡기 → 합 공식 → $n$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣어 만든 등차수열의 합 (모든 항의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「모든 항의 합」 이므로 양끝 −10 과 4 가 포함되고 항의 개수는 $n+2$ 다. $\dfrac{(n+2)(-10+4)}{2}=-24$ 는 $n$ 에 대한 일차방정식이라 공차를 구할 필요조차 없다.
    걸림돌은 항의 개수를 $n$ 으로 착각하는 T-범위 하나뿐이라 통찰로 세지 않았다. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '항의 개수 $=n+2$ → $\dfrac{(n+2)(-10+4)}{2}=-24$ → $n=6$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/231-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양끝 두 수와 전체 합을 바꾼다. 제약: $\dfrac{2S}{a+l}$ 이 3 이상의 자연수여야 하고($n\ge 1$), 양끝의 합이 0 이면 전체 합도 0 이 되어 $n$ 을 정할 수 없으므로 $a+l\ne 0$ 이어야 한다.'
    creative: '(1) 「사이에 넣은 수들의 합」 으로 바꾸면 양끝을 빼는 변환이 필요해 I-EQV ★2(531·543 골조) (2) 합 대신 공차를 주고 $n$ 을 묻기(★2) (3) 넣은 수 중 특정 항의 값을 추가로 묻기(★2~3).'
```

```yaml
- id: GN-ALG-231-e11
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    제13항까지의 합이 52, 제20항까지의 합이 −60 인 등차수열의 제30항까지의 합.
  category: "두 부분합 → 첫째항·공차 연립 → 다른 부분합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분의 합이 주어진 등차수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $S_{13}$ 과 $S_{20}$ 을 각각 $a, d$ 의 식으로 쓰면 $a+6d=4$, $2a+19d=-6$ 이라는 평범한 연립일차방정식이 된다. 연립 후 $S_{30}$ 에 대입하면 끝난다.
    약분해서 계수를 줄이는 계산 요령 외에 판단 분기가 없다. 필수 예제 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$S_{13}=52$, $S_{20}=-60$ → $a, d$ 연립 → $S_{30}$ 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-390$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/231-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 부분합의 항 번호(13, 20)와 값(52, −60), 묻는 번호(30)를 바꾼다. 제약: 두 식의 연립해 $a, d$ 가 정수로 떨어지도록 값을 역산해 정한다. 항 번호를 홀수·짝수로 섞어야 약분 단계가 살아난다.'
    creative: '(1) 두 부분합 대신 두 구간합(제9~16항 등)을 주면 누적합으로 옮기는 I-EQV ★2(532 골조) (2) $S_{13}=S_{20}$ 처럼 같게 주면 최대·최소 골조로 바뀌어 ★3 (3) 부분합이 등차수열을 이룬다는 구조를 노출하면 블록합 관찰 ★3~4(549 골조).'
```

```yaml
- id: GN-ALG-231-531
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    −5 와 15 사이에 n 개의 수를 넣어 만든 등차수열에서 넣은 수들의 합이 90 일 때 n 의 값.
  category: "전체 합에서 양끝을 뺀 것이 넣은 수들의 합 → $n$"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 $x_1+\\cdots+x_n$ 을 「전체 항의 합 − 양끝 두 수」 로 옮겨야 합 공식이 쓰인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣어 만든 등차수열의 합 (양끝 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 달리 합의 범위가 양끝을 뺀 가운데 부분이다. 전체 $n+2$ 항의 합 $5(n+2)$ 에서 $-5+15=10$ 을 빼면 $5n=90$ 으로 정리된다.
    이 「빼기」 를 빠뜨리면 답이 어긋나므로 조건의 동치 변환 1개(EQV d1)로 라벨링했다. 유제 ★2 출발 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: '전체 합 $\dfrac{(n+2)(-5+15)}{2}$ → 양끝 10 을 뺀 값이 90 → $n=18$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/231-531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양끝 두 수와 가운데 합을 바꾼다. 제약: 「가운데 합 + 양끝의 합」 이 $\dfrac{(n+2)(a+l)}{2}$ 꼴로 자연수 $n$ 을 주어야 한다. 양끝의 합이 0 이면 가운데 합도 0 이 되어 $n$ 이 결정되지 않으므로 피한다.'
    creative: '(1) 양끝 포함으로 되돌리면 e10 과 같아져 ★2 (2) 「넣은 수 중 가장 큰 것」 을 같이 물으면 공차까지 필요해 ★3 (3) 양끝을 미지수로 두고 가운데 합과 $n$ 을 주면 역방향이라 I-BW ★3.'
```

```yaml
- id: GN-ALG-231-532
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    제8항까지의 합이 104, 제9항부터 제16항까지의 합이 360 인 등차수열의 제24항까지의 합.
  category: "구간합을 누적합의 차로 옮기기 → 연립 → $S_{24}$"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「제9항부터 제16항까지의 합」 을 $S_{16}-S_8$ 로 옮겨야 합 공식 연립이 가능해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분의 합이 주어진 등차수열의 합 (구간합 → 누적합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간합 360 을 그대로 쓸 수 없고 $S_{16}=104+360=464$ 로 바꾼 뒤 $S_8, S_{16}$ 연립으로 $a=-1$, $d=4$ 를 얻어 $S_{24}$ 를 구한다.
    구간합 → 누적합 변환 1개(EQV d1)만 인정했다. 유제 ★2 출발 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: '$S_{16}=S_8+360$ → $S_8, S_{16}$ 연립으로 $a, d$ → $S_{24}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1080$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/231-532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '블록 크기(8항)와 두 합의 값, 묻는 항 번호(24)를 바꾼다. 제약: 연립 결과 $a, d$ 가 정수가 되도록 값을 역산한다. 블록 크기를 똑같이 유지하면 세 블록합이 등차수열을 이루므로 549 의 지름길이 그대로 살아난다.'
    creative: '(1) 8항씩 세 블록의 합이 등차임을 이용해 제17~24항 합을 바로 묻기(I-PD ★3) (2) 구간을 제9~20항처럼 블록 크기가 다르게 주면 지름길이 막혀 ★3 (3) 두 구간합만 주고 첫째항을 묻는 역방향 ★3.'
```

```yaml
- id: GN-ALG-232-e12
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    첫째항이 7 이고 $S_3=S_5$ 인 등차수열에서 ⑴ 처음으로 음수가 되는 항, ⑵ $S_n$ 의 최댓값.
  category: "$S_3=S_5$ → 두 항의 합이 0 → 공차 → 부호 전환점 → 최댓값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$S_3=S_5$ 를 $a_4+a_5=0$ 으로 옮겨야 공차가 한 줄에 나온다"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「$S_n$ 의 최댓값」 을 「마지막 양수 항까지 더한 합」 으로 옮겨 $S_4$ 만 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등차수열의 합의 최대·최소 (처음 음수가 되는 항)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $S_3=S_5$ 는 $a_4+a_5=0$ 과 같고 여기서 $2\cdot 7+7d=0$, $d=-2$ 가 나온다. $a_n=9-2n<0$ 에서 제5항이 처음 음수, 그러므로 $S_4=16$ 이 최댓값이다.
    합의 등식을 항의 합으로 옮기는 변환과 최댓값을 부호 전환점으로 옮기는 변환 두 개를 모두 요구한다. 필수 예제 ★2 + 통찰 2 → ★3.
  tier: star_3
  mechanism_primary: '$S_3=S_5 \Rightarrow a_4+a_5=0$ → $d=-2$ → $a_n<0$ 인 첫 $n$ → 그 직전까지의 합이 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 제$5$항 ⑵ $16$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/232-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 $S_p=S_q$ 의 두 번호를 바꾼다. 제약: $2a+(p+q-1)d=0$ 에서 $d$ 가 정수로 떨어져야 하고, 공차가 음수라야 최댓값 문제가 된다(양수면 최솟값). 부호 전환이 항 번호 정중앙에서 일어나면 등호 처리(항이 0 인 경우)를 따로 물어야 한다.'
    creative: '(1) 공차를 양수로 만들어 최솟값을 묻기(533 골조 ★2) (2) $S_p=S_q$ 대신 두 항의 비를 주면 550 골조 ★3 (3) 어떤 항이 0 이 되게 설정해 최댓값을 주는 $n$ 이 두 개가 되도록 하면 I-VF 가 붙어 ★4.'
```

```yaml
- id: GN-ALG-232-533
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    제6항이 −9, 제10항이 7 인 등차수열의 $S_n$ 의 최솟값.
  category: "두 항 → 첫째항·공차 → 마지막 음수 항 → 그때까지의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「$S_n$ 의 최솟값」 을 「마지막 음수 항까지 더한 합」 으로 옮겨 $S_8$ 만 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 최소 (처음 양수가 되는 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_6=-9$, $a_{10}=7$ 에서 $d=4$, $a_1=-29$, $a_n=4n-33$ 이다. 공차가 양수이므로 음수 항을 모두 더한 $S_8$ 이 최솟값이다.
    최솟값을 부호 전환점으로 옮기는 변환 1개만 필요하고 나머지는 e12 와 같은 절차다. 유제 ★2 출발 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: '$a_6, a_{10}$ → $d=4$, $a_n=4n-33$ → $a_n<0$ 인 마지막 $n=8$ → $S_8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/232-533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항의 번호와 값을 바꾼다. 제약: 두 항의 차가 번호 차로 나누어떨어져 공차가 정수여야 하고, 첫째항이 음수·공차가 양수라야 최솟값 문제가 성립한다. $a_n=0$ 이 되는 $n$ 이 존재하면 최솟값을 주는 $n$ 이 둘이 되므로 의도한 것이 아니면 피한다.'
    creative: '(1) 부호를 뒤집어 최댓값으로 바꾸기(★2) (2) 「$S_n<0$ 을 만족시키는 자연수 $n$ 의 개수」 로 바꾸면 이차부등식이 붙어 ★3 (3) $a_n=0$ 인 항이 생기도록 설계해 최솟값을 주는 $n$ 을 모두 구하게 하면 I-VF ★3.'
```

```yaml
- id: GN-ALG-233-e13
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    100 미만의 자연수 중 3 으로 나눈 나머지가 1 인 수의 총합.
  category: "나머지 조건 → 첫째항·공차·끝항 확정 → 항의 개수 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지가 같은 자연수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 만족하는 수는 1, 4, 7, …, 97 로 공차 3 인 등차수열이다. 끝항 97 에서 항의 개수 33 을 구하고 합 공식을 쓴다.
    범위의 양끝(1 을 포함하는지, 100 미만이므로 97 이 끝인지)을 확인하는 T-범위 하나가 함정이고 그 외에는 표준 절차다. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '나머지 1 인 수를 나열 → 첫째항 1, 공차 3, 끝항 97 → $n=33$ → $\dfrac{33(1+97)}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1617$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/233-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '나누는 수·나머지·상한을 바꾼다. 제약: 첫째항이 나머지 자체인지(나머지 0 이면 첫 항이 나누는 수) 확인하고, 상한이 「미만」 인지 「이하」 인지에 따라 끝항이 달라진다 — 이 경계가 이 유형의 핵심이므로 값만 바꾸고 경계 표현은 흐리지 않는다.'
    creative: '(1) 하한까지 붙여 「100 과 200 사이」 로 만들기(534 골조 ★2) (2) 「4 또는 7 로 나누어떨어지는 수」 처럼 두 조건을 or 로 묶으면 중복 제거가 필요해 I-MI ★3(551 골조) (3) 나머지가 1 인 수의 개수 대신 그 수들의 제곱의 합을 묻기(단원 밖 ★4).'
```

```yaml
- id: GN-ALG-233-e14
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 직선 $y=x$, $y=2x$ 사이에 같은 간격으로 그은 y축에 평행한 10 개 선분에서 가장 짧은 것이 3, 가장 긴 것이 12 일 때 10 개 선분의 길이의 합(제1사분면).
  category: "등간격 선분의 길이 → 등차수열 → 첫째항·끝항으로 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 등간격 배치를 「길이가 등차수열을 이룬다」 는 수열 언어로 옮겨야 합 공식이 쓰인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 합의 활용 (등간격 선분의 길이의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 에서의 선분 길이는 $2x-x=x$ 이고 $x$ 가 등간격이므로 길이도 등차수열이다. 공차를 구할 필요 없이 첫째항 3, 끝항 12, 항의 개수 10 으로 $\dfrac{10(3+12)}{2}$ 가 끝이다.
    기하 배치를 수열로 옮기는 표현 전환 1개(RT d1)가 전부이고 계산은 한 줄이다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '선분 길이 $=2x-x=x$, $x$ 등간격 → 길이가 등차 → $\dfrac{10(3+12)}{2}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$75$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-233-e14.png'
  latex: latex-bank/gn-alg/items/233-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 기울기(길이가 기울기 차이 × $x$ 가 되도록), 선분의 개수, 최단·최장 길이를 바꾼다. 제약: 최단·최장이 양수이고 최장 > 최단이어야 하며, 등간격이라는 조건을 유지해야 등차가 된다. 그림 라벨(가장 짧은 선분·가장 긴 선분)은 고정한다.'
    creative: '(1) 직선 하나를 $y=-x$ 로 바꿔 선분이 두 사분면에 걸치게 하면 부호 처리 ★3 (2) 선분 개수를 미지수 $n$ 으로 두고 합을 주어 $n$ 을 묻기(★3) (3) 선분 대신 사다리꼴 넓이의 합으로 바꾸면 결합 구조가 생겨 ★3~4.'
```

```yaml
- id: GN-ALG-233-534
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    100 과 200 사이의 자연수 중 5 로 나눈 나머지가 2 인 수의 총합.
  category: "양쪽 경계에서 첫째항·끝항 찾기 → 항의 개수 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지가 같은 자연수의 합 (양쪽 범위 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e13 과 같은 골조인데 하한이 붙어 첫째항을 102 로, 끝항을 197 로 잡아야 한다. 항의 개수는 20 이다.
    「사이」 라는 말이 양끝을 포함하지 않는다는 경계 확인(T-범위)이 유일한 함정이다. 유제 ★2 유지.
  tier: star_2
  mechanism_primary: '첫째항 102, 끝항 197, 공차 5 → $n=20$ → $\dfrac{20(102+197)}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2990$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/233-534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '하한·상한·나누는 수·나머지를 바꾼다. 제약: 하한과 상한이 그 자체로 조건을 만족하는 수가 되면 「사이」 의 포함 여부가 답을 바꾸므로, 경계를 물을 의도가 없다면 하한·상한이 조건을 만족하지 않도록 고른다.'
    creative: '(1) 하한·상한을 조건을 만족하는 수로 잡아 포함 여부를 판단하게 만들면 T-경계가 본질이 되어 ★3 (2) 세 자리 자연수 중 조건을 만족하는 수의 개수와 합을 함께 묻기(★2) (3) 나머지가 2 「또는」 3 으로 바꾸면 두 수열의 합 ★3.'
```

```yaml
- id: GN-ALG-233-535
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    x축 위의 두 점 F, F′ 과 y축 위의 점 P(0, n) 으로 만든 직각이등변삼각형 PF′F 의 세 변 위의 격자점 개수를 $a_n$ 이라 할 때 $\{a_n\}$ 의 제8항까지의 합.
  category: "도형 위 격자점 세기 → 일반항 $a_n=4n$ 발견 → 등차수열의 합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\angle$FPF′$=90^\\circ$ 인 직각이등변 조건을 F$(n,0)$, F′$(-n,0)$ 이라는 좌표로 옮겨야 변 위의 점을 셀 수 있다"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 변의 격자점을 각각 세고 꼭짓점 3 개의 중복을 빼 $a_n=4n$ 이라는 일반항을 스스로 찾아내야 한다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "등차수열의 합의 활용 (도형의 변 위 격자점 개수의 일반항)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑변 위 $2n+1$ 개, 기울기 $\pm 1$ 인 두 빗변 위 각 $n+1$ 개에서 꼭짓점 3 개의 중복을 빼면 $a_n=4n$ 이다. 그다음은 $4(1+2+\cdots+8)$ 로 한 줄이다.
    좌표화(RT)와 일반항 발견(PD d2)이 모두 필요하고 중복 보정이 빠지면 답이 어긋난다. 유제 ★2 출발 + 통찰 2·depth 2 → ★3.
    [분류 이슈] 벤더 태그는 「확인체크」 지만 실제 요구는 STEP 2 급이다.
  tier: star_3
  mechanism_primary: 'F$(n,0)$, F′$(-n,0)$ → 세 변의 격자점 합 − 꼭짓점 중복 $=4n$ → $\sum_{n=1}^{8}4n$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$144$'
  answer_source: "답지"
  figure: 'crop:fig-233-535.png'
  latex: latex-bank/gn-alg/items/233-535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 개수(제8항 → 제10항 등)만 바꾸는 것이 안전하다. 제약: $P(0,n)$ 의 $n$ 이 자연수라야 빗변의 격자점이 $n+1$ 개로 떨어지고, 빗변의 기울기가 $\pm 1$ 이라야 격자점이 등간격으로 놓인다. 그림의 점 이름(F, F′, P)과 배치는 고정한다.'
    creative: '(1) 「변 위」 를 「내부와 둘레」 로 바꾸면 개수가 이차식이 되어 등차가 깨짐 — ★4 이상이 되고 이 단원을 벗어난다 (2) 직각이등변 대신 밑변과 높이의 비를 2:1 로 주면 빗변 격자점 세기가 달라져 ★4 (3) $a_n$ 의 일반항만 구하게 하고 합은 묻지 않으면 ★2.'
```

```yaml
- id: GN-ALG-234-e15
  page: 234
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $S_n=n^2+3n-1$ 일 때 $a_1+a_7$, ⑵ $S_n=n^2+n$ 일 때 $a_k=20$ 인 $k$.
  category: "$a_1=S_1$ · $a_n=S_n-S_{n-1}$ 로 나눠 쓰기 → 필요한 항만 계산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합과 일반항 사이의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 상수항 −1 때문에 $a_1$ 이 $n\ge 2$ 식에 들어가지 않으므로 $a_1=S_1$ 을 따로 구해야 하고, ⑵ 는 상수항이 없어 $a_n=2n$ 이 $n=1$ 에서도 맞는다.
    두 소문항이 정확히 이 대비를 노린 배치다. 절차 자체는 교과서가 제시한 대로라 통찰로 세지 않고 T-경계 2 로 흡수했다. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '$n\ge 2$ 에서 $a_n=S_n-S_{n-1}$ → $a_1=S_1$ 과 대조 → 필요한 항 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $19$ ⑵ $10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/234-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=pn^2+qn+r$ 의 계수와 묻는 항 번호를 바꾼다. 제약: $r\ne 0$ 인 소문항과 $r=0$ 인 소문항을 짝으로 두어야 이 유형의 대비가 살아난다. ⑵ 에서 $a_k$ 의 값은 $n\ge 2$ 식이 주는 값 중에서 고른다.'
    creative: '(1) $a_1+a_7$ 대신 $a_1+a_2+\cdots+a_7$ 을 물으면 그냥 $S_7$ 이라 오히려 ★1 (2) $S_n$ 에 미지 상수를 넣고 등차가 될 조건을 묻기(537 골조 ★2) (3) $a_k$ 의 범위 조건으로 바꾸면 부등식 개수 세기 ★2(536 골조).'
```

```yaml
- id: GN-ALG-234-536
  page: 234
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $S_n=2n^2-3n$ 일 때 $1\le a_n\le 50$ 을 만족시키는 자연수 n 의 개수.
  category: "$S_n$ → 일반항 → 부등식 → 자연수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$S_n$ 에서 구한 일반항의 범위 조건 (자연수 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=S_n-S_{n-1}=4n-5$ 이고 상수항이 없어 $n=1$ 에서도 성립한다. $1\le 4n-5\le 50$ 을 풀면 $\dfrac{3}{2}\le n\le \dfrac{55}{4}$ 이므로 $n=2, \cdots, 13$ 의 12 개다.
    $n=1$ 확인과 개수 세기의 양 끝 포함 여부가 함정(T-경계 2)이고 갈래는 없다. 유제 ★2.
  tier: star_2
  mechanism_primary: '$a_n=4n-5$($n=1$ 포함 확인) → $1\le 4n-5\le 50$ → 자연수 $n$ 의 개수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/234-536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n$ 의 계수와 부등식의 양 끝값을 바꾼다. 제약: $a_n$ 이 부등식의 경계값과 정확히 같아지는 $n$ 이 있으면 등호 처리로 개수가 하나 달라지므로 의도적으로만 쓴다. $S_n$ 에 상수항을 넣으면 $n=1$ 을 따로 세어야 해 난이도가 한 단 오른다.'
    creative: '(1) $S_n$ 에 상수항을 넣어 $a_1$ 이 예외가 되게 하기(★3) (2) 조건을 $|a_n|\le 50$ 으로 바꾸면 부호 분기 ★3 (3) 개수 대신 그 $n$ 들에 대한 $a_n$ 의 합을 묻기(등차수열의 합이 한 번 더 ★3).'
```

```yaml
- id: GN-ALG-234-537
  page: 234
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $S_n=n^2-2n+k$ 인 수열이 첫째항부터 등차수열을 이루도록 하는 상수 k 의 값.
  category: '「첫째항부터 등차」 ⟺ $a_1=S_1$ 이 $n\ge 2$ 식에 맞음 → k'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「첫째항부터 등차수열」 이라는 말을 「$S_1$ 이 $n\\ge 2$ 에서 얻은 일반항 식의 $n=1$ 값과 같다」 로 옮겨야 k 에 대한 식이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$S_n$ 의 상수항과 첫째항부터 등차가 될 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $n\ge 2$ 에서 $a_n=2n-3$ 이고 $a_1=S_1=k-1$ 이다. 첫째항부터 등차이려면 $k-1=2\cdot 1-3=-1$ 이므로 $k=0$ 이다.
    조건의 말을 식으로 옮기는 변환 1개(EQV d1)가 핵심이고 계산은 거의 없다. 유제 ★2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: '$a_n=2n-3\,(n\ge 2)$, $a_1=S_1=k-1$ → $k-1=-1$ → $k=0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/234-537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=pn^2+qn+k$ 의 $p, q$ 를 바꿔도 답은 항상 $k=0$ 이다. 제약: 답을 $0$ 이 아닌 값으로 만들려면 상수항 말고 다른 곳(예: $S_n=n^2+kn$ 에서 $a_2-a_1=a_3-a_2$)에 미지수를 넣어야 한다. $p\ne 0$ 은 유지한다.'
    creative: '(1) $S_n=n^2+kn+k$ 처럼 미지수를 두 자리에 넣어 답이 $0$ 이 아니게 만들기(★3) (2) 「등차수열을 이루지 않도록 하는 k 의 범위」 로 뒤집으면 여집합 사고 ★3 (3) $S_n$ 을 삼차식으로 주고 등차가 될 조건을 묻기(★4 · 단원 밖).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-235-538
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    등차수열에서 $a_3=\log_3 8$, $a_5=\log_3 32$ 일 때 $a_{10}$.
  category: "로그를 $\\log_3 2$ 의 배수로 정리 → 공차 → 특정 항"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "로그의 성질로 $\\log_3 8=3\\log_3 2$, $\\log_3 32=5\\log_3 2$ 로 옮겨야 두 항이 같은 단위의 배수로 보이고 공차가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그값이 항인 등차수열 (공차 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_3 2$ 를 한 덩어리로 보면 $a_3=3t$, $a_5=5t$ 이므로 $d=t$, $a_{10}=a_5+5d=10t$ 다.
    로그 단원의 도구를 끌어와야 수열 구조가 드러나므로 I-XU d1 하나. 계산은 없다시피 하고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '$\log_3 8=3\log_3 2$, $\log_3 32=5\log_3 2$ → $d=\log_3 2$ → $a_{10}=10\log_3 2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10\log_3 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(3)과 진수(8, 32), 항 번호를 바꾼다. 제약: 두 진수가 같은 수의 거듭제곱이라야 $\log$ 값이 같은 단위의 정수배가 되고 공차가 깔끔하다. 지수의 차가 번호 차로 나누어떨어져야 한다.'
    creative: '(1) 진수를 $2$ 와 $3$ 의 곱으로 섞으면 단위가 둘이 되어 항이 등차가 되지 않음 — 「등차가 되도록 하는 진수」 를 묻는 역방향으로 바꾸면 ★4 (2) 세 항이 등차임을 보이고 진수의 관계(등비)를 묻기(★3) (3) 로그 대신 지수 꼴로 주면 등비수열이 되어 다음 단원 연결(★3).'
```

```yaml
- id: GN-ALG-235-539
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    제2항과 제6항이 절댓값은 같고 부호가 반대이며 제3항이 −2 인 등차수열의 첫째항과 공차.
  category: "「절댓값 같고 부호 반대」 ⟺ 두 항의 합 0 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「절댓값이 같고 부호가 반대」 를 $a_2+a_6=0$ 이라는 하나의 식으로 옮겨야 절댓값 분기 없이 풀린다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값이 같고 부호가 반대인 두 항 (합이 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_2+a_6=0$ 은 $2a_1+6d=0$, 즉 $a_1=-3d$ 다. 여기에 $a_3=a_1+2d=-d=-2$ 를 넣으면 $d=2$, $a_1=-6$ 이다.
    말로 준 조건을 합이 0 인 식으로 옮기는 변환 1개(EQV d1)가 핵심이고, 절댓값을 그대로 두고 경우를 나누면 오히려 길어진다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '$a_2+a_6=0$ → $a_1=-3d$ → $a_3=-d=-2$ → $d=2$, $a_1=-6$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '첫째항: $-6$, 공차: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 항의 번호(2, 6)와 나머지 한 항의 번호·값을 바꾼다. 제약: 합이 0 인 두 항의 번호 합이 짝수면 중앙 항이 0 이 되어 조건이 자명해지므로 의도하지 않으면 피한다. $a_1, d$ 가 정수로 떨어지도록 값을 역산한다.'
    creative: '(1) 「절댓값이 같다」 로만 주면 합이 0 인 경우와 두 항이 같은 경우로 갈려 I-MI ★3 (2) 세 번째 조건을 합 $S_{10}$ 으로 주면 합 공식이 한 번 더 ★3 (3) 부호 조건을 빼고 $a_2a_6<0$ 으로 주면 부등식 판정 ★3.'
```

```yaml
- id: GN-ALG-235-540
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a_2=-37$, $a_6-a_3=9$ 인 등차수열이 제몇 항에서 처음으로 양수가 되는지.
  category: "항의 차 → 공차 → 일반항 → 부등식으로 첫 양수 항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "처음으로 양수가 되는 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_6-a_3=3d=9$ 에서 $d=3$, $a_2=-37$ 에서 $a_1=-40$, $a_n=3n-43>0$ 에서 $n>14.3\cdots$ 이므로 제15항이다.
    통찰 0·M_total 5 라 v3.8 −1 후보지만, 부등식의 해를 만족하는 최소의 자연수를 고르는 경계 판정(T-경계)이 STEP 1 에서 실제 오답을 만드는 지점이라 ★2 를 유지했다. [분류 이슈] ★1 후보.
  tier: star_2
  mechanism_primary: '$a_6-a_3=3d=9$ → $d=3$, $a_1=-40$ → $3n-43>0$ 인 최소 자연수 $n$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$15$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_2$ 의 값, 항 차의 번호와 값을 바꾼다. 제약: 공차가 정수로 떨어지도록 항 차의 값이 번호 차의 배수여야 하고, $a_n=0$ 이 되는 $n$ 이 자연수면 「처음으로 양수」 의 답이 한 칸 밀리므로 경계를 의도적으로만 쓴다.'
    creative: '(1) 「$S_n$ 이 처음으로 양수가 되는 $n$」 으로 바꾸면 이차부등식이 되어 ★3 (2) 공차를 음수로 만들어 처음 음수가 되는 항을 묻기(★2) (3) 조건을 $a_2+a_6=-37$ 처럼 합으로 주면 중항 변환이 붙어 ★3.'
```

```yaml
- id: GN-ALG-235-541
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    0 이 아닌 세 수 a, b, c 가 이 순서대로 등차수열이고 −c, 2b, 4a 도 이 순서대로 등차수열일 때 $\dfrac{a+b}{c}$ 의 값.
  category: "등차중항 두 식 → 한 문자로 환원 → 비의 값"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이 순서대로 등차수열」 을 $2b=a+c$, $4b=4a-c$ 라는 두 등차중항 식으로 옮긴 뒤 값이 아니라 비만 결정됨을 받아들여야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차중항 조건 두 개의 연립 (비의 값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 중항 조건에서 $c=2b-a$ 를 대입하면 $6b=5a$ 가 나와 $b=\dfrac{5}{6}a$, $c=\dfrac{2}{3}a$ 로 모두 $a$ 의 배수가 된다.
    세 수가 각각 정해지지 않고 비만 정해진다는 점만 받아들이면 대입 계산이다. STEP 1 ★2 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: '$2b=a+c$, $4b=4a-c$ → $6b=5a$ → $b, c$ 를 $a$ 로 표현 → $\dfrac{a+b}{c}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{11}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '둘째 수열의 계수(−c, 2b, 4a 의 −1, 2, 4)와 묻는 분수식을 바꾼다. 제약: 두 중항 식이 서로 독립이어야 하고(한 식이 다른 식의 상수배면 비가 결정되지 않음), 결과가 유리수 비로 떨어져야 한다. $c\ne 0$ 을 유지한다.'
    creative: '(1) 세 수의 합을 추가로 주면 값 자체가 결정되어 ★2 유지·계산만 늘어남 (2) 둘째 수열을 등비수열로 바꾸면 이차식이 생겨 근 선별 ★3~4 (3) $\dfrac{a+b}{c}$ 대신 $a:b:c$ 를 묻기(같은 골조 ★2).'
```

```yaml
- id: GN-ALG-235-542
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    연속하는 10 개의 자연수의 합이 525 일 때 가장 작은 수.
  category: "연속하는 자연수 = 공차 1 인 등차수열 → 합 공식 → 첫째항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속하는 자연수의 합 (첫째항 구하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항을 $a$ 로 두면 $10a+45=525$ 라는 일차방정식 한 줄이다. 연속하는 수가 공차 1 인 등차수열이라는 것만 알면 끝난다.
    STEP 1 ★2 출발이지만 통찰 0·M_total 4 라 v3.8 −1 을 적용해 ★1. [분류 이슈] 구역 신호와 한 단 차이.
  tier: star_1
  mechanism_primary: '첫째항 $a$, 공차 1 → $\dfrac{10\{2a+9\}}{2}=525$ → $a=48$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 개수와 합을 바꾼다. 제약: 개수가 짝수면 $\dfrac{n(n-1)}{2}$ 를 뺀 값이 $n$ 으로 나누어떨어져야 하고, 홀수면 합이 개수의 배수(중앙값 × 개수)여야 한다. 첫째항이 자연수로 나오도록 값을 역산한다.'
    creative: '(1) 개수를 미지수로 두고 「연속하는 몇 개의 자연수의 합이 525 인가」 를 모두 구하게 하면 약수 분해 + 검증이 붙어 I-VF ★4 (2) 연속하는 홀수·짝수로 바꾸면 공차 2 ★1~2 (3) 가장 작은 수 대신 중앙값을 물으면 대칭 관찰로 암산 ★1.'
```

```yaml
- id: GN-ALG-235-543
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1 과 2 사이에 18 개의 수를 넣어 만든 등차수열에서 넣은 18 개 수의 합.
  category: "전체 20 항의 합 − 양끝 두 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 합을 「전체 20 항의 합 − (1+2)」 로 옮기면 공차를 구하지 않고 끝난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣어 만든 등차수열의 합 (양끝 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 1 부터 2 까지 20 개 항이므로 합은 $\dfrac{20(1+2)}{2}=30$ 이고, 양끝 $1+2=3$ 을 빼면 27 이다.
    공차 $\dfrac{1}{19}$ 를 실제로 구하면 계산이 크게 늘어나므로 「전체에서 양끝 빼기」 로 옮기는 변환 1개(EQV d1)가 이 문항의 전부다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '전체 20 항의 합 $=30$ → 양끝 $1+2=3$ 을 빼서 $27$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양끝 두 수와 넣는 개수를 바꾼다. 제약: 공차를 직접 구하지 않아도 되도록 설계하는 것이 이 유형의 요점이므로 양끝의 합이 깔끔한 값이면 충분하고, 공차가 분수여도 무방하다.'
    creative: '(1) 넣은 수 중 하나의 값을 물으면 공차를 실제로 구해야 해 계산이 늘고 ★2 유지 (2) 합을 주고 넣은 개수를 묻기(531 골조 ★2) (3) 양끝 중 하나를 미지수로 두고 가운데 합을 주면 역방향 I-BW ★3.'
```

```yaml
- id: GN-ALG-235-544
  page: 235
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 수열의 제n항까지의 합이 각각 $n^2+kn+1$, $2n^2-3n-1$ 이고 $a_{10}=b_{10}$ 일 때 상수 k.
  category: "각 수열에서 $S_{10}-S_9$ 로 제10항 → 같다고 놓기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수열의 $S_n$ 에서 특정 항 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{10}=S_{10}-S_9=19+k$, $b_{10}=169-134=35$ 이므로 $k=16$ 이다.
    두 $S_n$ 에 모두 상수항이 있지만 $n=10$ 만 쓰므로 $n=1$ 예외를 따질 필요가 없다 — 이 「따질 필요 없음」 을 알아채는 것이 유일한 걸림돌이라 T-경계로 흡수하고 통찰로는 세지 않았다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '$a_{10}=S^a_{10}-S^a_9$, $b_{10}=S^b_{10}-S^b_9$ → 두 값을 같다고 놓고 $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/235-544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 $S_n$ 의 계수와 비교할 항 번호를 바꾼다. 제약: 비교 번호가 2 이상이어야 상수항이 사라지고, $k$ 가 정수로 떨어지도록 값을 잡는다. 번호를 1 로 하면 상수항이 살아나 완전히 다른 문제가 된다.'
    creative: '(1) 비교 번호를 1 로 바꿔 상수항이 개입하게 하면 함정형 ★3 (2) $a_n=b_n$ 을 만족시키는 $n$ 을 묻기(일차방정식 ★2) (3) $a_{10}>b_{10}$ 인 $k$ 의 범위로 바꾸면 부등식 ★2.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-236-545
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    공차가 −4 인 등차수열에서 $a_3a_6=220$, $a_7>0$ 일 때 $a_4$.
  category: "$a_3$ 를 미지수로 한 이차방정식 → 두 근 → 부호 조건으로 선별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 두 근 중 하나는 $a_7>0$ 을 위배하므로 답 도달 후 조건 재대입으로 기각해야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 항의 곱 조건 (이차방정식 → 부호 조건으로 근 선별)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_3=t$ 로 두면 $a_6=t-12$ 이므로 $t(t-12)=220$, 즉 $t=22$ 또는 $t=-10$ 이다. $a_7=t-16$ 이므로 $t=-10$ 은 $a_7>0$ 을 위배해 기각되고 $t=22$ 에서 $a_4=18$ 이다.
    두 후보 중 하나가 조건 위배로 걸러지는 사후 검증이 풀이의 마지막 단계에 의무적으로 붙는다(VF d1). STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '$a_3=t$ → $t(t-12)=220$ → $t=22, -10$ → $a_7=t-16>0$ 으로 선별 → $a_4=t-4$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공차, 곱의 값, 부호 조건이 붙는 항의 번호를 바꾼다. 제약: 곱의 값이 두 정수근을 주도록 역산하고, 부호 조건이 정확히 한 근만 걸러야 한다 — 두 근 모두 살아남거나 모두 걸러지면 I-VF 구조가 깨진다.'
    creative: '(1) 부호 조건을 빼면 답이 둘이 되어 모든 값을 구하게 하는 문제로 바뀜(I-MI ★3) (2) 곱 대신 두 항의 합의 제곱 조건을 주면 식이 복잡해져 ★4 (3) 조건을 $a_7>0$ 대신 $S_7>0$ 으로 바꾸면 합 공식이 한 번 더 ★4.'
```

```yaml
- id: GN-ALG-236-546
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 $x^2-nx+4(n-4)=0$ 이 서로 다른 두 실근 $\alpha<\beta$ 를 갖고 1, $\alpha$, $\beta$ 가 이 순서대로 등차수열일 때 자연수 n 의 값. 5지선다.
  category: "등차중항 → $\\beta=2\\alpha-1$ → 근과 계수의 관계 연립 → 자연수 선별"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「1, $\\alpha$, $\\beta$ 가 등차」 를 $2\\alpha=1+\\beta$ 라는 근 사이의 일차 관계로 옮긴다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근과 계수의 관계($\\alpha+\\beta=n$, $\\alpha\\beta=4(n-4)$)를 끌어와야 근을 직접 구하지 않고 n 의 방정식이 만들어진다"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$2n^2-35n+143=0$ 의 두 근 중 자연수가 아닌 쪽을 기각하고, 판별식 $>0$ 도 다시 확인해야 한다"
  insight_count: 3
  depth_score: 3.00
  type_id: null
  type_hint: "등차중항과 근과 계수의 관계 (자연수 조건 선별)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중항 조건으로 $\beta=2\alpha-1$ 을 얻고 합 $\alpha+\beta=n$ 에서 $\alpha=\dfrac{n+1}{3}$, $\beta=\dfrac{2n-1}{3}$ 로 두 근을 n 으로 표현한 뒤 곱 조건에 넣으면 n 의 이차방정식이 된다.
    수열 단원과 이차방정식 단원의 도구가 동시에 필요하고(XU), 마지막에 자연수·판별식 조건으로 후보를 거른다(VF). 통찰 3 → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '$2\alpha=1+\beta$ → 근과 계수로 $\alpha, \beta$ 를 $n$ 으로 → $\alpha\beta=4(n-4)$ 에 대입 → 자연수 근 선별'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차방정식의 계수와 등차수열의 첫 수(1)를 바꾼다. 제약: 최종 이차방정식의 두 근 중 정확히 하나만 자연수여야 선별 구조가 살고, 그 값에서 판별식이 양수라야 「서로 다른 두 실근」 이 지켜진다. 선택지는 자연수 다섯 개로 유지한다.'
    creative: '(1) $\alpha$, $\beta$, 1 처럼 순서를 바꾸면 중항 식이 달라져 다른 답이 나옴(★4 유지) (2) 「서로 다른 두 실근」 을 「중근」 으로 바꾸면 판별식이 주조건이 되어 ★3 (3) 세 수를 등비수열로 바꾸면 곱 조건이 되어 ★4 · 다음 단원 연결.'
```

```yaml
- id: GN-ALG-236-547
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    넓이가 54 이고 세 변의 길이가 등차수열을 이루는 직각삼각형의 세 변의 길이의 합.
  category: "세 변을 $a-d, a, a+d$ 로 → 피타고라스 → 3:4:5 → 넓이로 배율 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "피타고라스 정리를 등차 배치에 적용해 $a^2=4ad$, 즉 세 변의 비가 3:4:5 로 고정된다는 것을 끌어내야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 변이 등차수열인 직각삼각형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 변을 $a-d, a, a+d\,(d>0)$ 로 두면 가장 긴 변이 빗변이므로 $(a-d)^2+a^2=(a+d)^2$ 에서 $a=4d$, 곧 $3d, 4d, 5d$ 다. 넓이 $6d^2=54$ 에서 $d=3$ 이고 합은 $12d=36$ 이다.
    어느 변이 빗변인지 정하는 T-범위 판단과 도형 단원 결합(XU d1)이 요구된다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '세 변 $a-d, a, a+d$ → 피타고라스로 $3d, 4d, 5d$ → 넓이 $6d^2=54$ → 합 $12d$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '넓이 값만 바꾸는 것이 가장 안전하다. 제약: 세 변의 비가 항상 3:4:5 로 고정되므로 넓이는 $6d^2$ 꼴이고, $d$ 가 유리수로 떨어지려면 넓이가 6 의 배수이면서 몫이 제곱수여야 한다(54, 24, 96 등).'
    creative: '(1) 넓이 대신 둘레나 빗변의 길이를 주면 같은 골조에 마지막 대입만 바뀜(★3) (2) 직각 조건을 빼고 「한 각이 120°」 로 바꾸면 코사인법칙이 들어가 ★4 (3) 세 변이 등비수열인 직각삼각형으로 바꾸면 황금비가 나와 ★4~5.'
```

```yaml
- id: GN-ALG-236-548
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 등차수열의 첫째항의 합이 5, 공차의 합이 −2 일 때 두 수열의 제18항까지의 합을 더한 값.
  category: "$\\{a_n+b_n\\}$ 이 다시 등차수열 → 첫째항 5·공차 −2 로 합 공식 한 번"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 수열을 따로 구할 수 없고, 항별 합 $\\{a_n+b_n\\}$ 이 첫째항 5·공차 −2 인 하나의 등차수열임을 결합해야 풀린다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 등차수열의 합 (항별 합 수열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_1, b_1, d_a, d_b$ 를 개별로 정할 수 없는데도 합은 결정된다. $\{a_n+b_n\}$ 을 하나의 등차수열로 보면 $\dfrac{18\{2\cdot 5+17\cdot(-2)\}}{2}$ 한 줄이다.
    「각각 구하려 하면 막힌다」 가 이 문항의 벽이고 조건 결합(CON d1)이 그 열쇠다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '$\{a_n+b_n\}$ 은 첫째항 5, 공차 $-2$ 인 등차수열 → $S_{18}=\dfrac{18\{10+17(-2)\}}{2}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-216$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항의 합, 공차의 합, 항의 개수를 바꾼다. 제약: 개별 수열이 결정되지 않도록 조건을 「합」 으로만 주는 것이 이 유형의 핵심이므로, 실수로 개별 값을 특정할 수 있는 조건을 추가하면 골조가 무너진다.'
    creative: '(1) 곱 $\{a_nb_n\}$ 의 합을 물으면 등차가 아니게 되어 이 단원 밖(★5) (2) 「공차의 합」 대신 「$a_{10}+b_{10}$」 을 주면 중항으로 바로 합이 나와 ★3 유지·더 짧아짐 (3) 두 수열의 차 $\{a_n-b_n\}$ 의 합을 함께 물으면 조건이 하나 더 필요해 ★4.'
```

```yaml
- id: GN-ALG-236-549
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    등차수열에서 제1~10항의 합이 10, 제11~20항의 합이 50 일 때 제21~40항의 합.
  category: "10 항씩 묶은 블록합이 다시 등차수열 → 셋째·넷째 블록합"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 크기로 묶은 블록합이 공차 $100d$ 인 등차수열을 이룬다는 구조를 스스로 찾아야 한다"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$a_1, d$ 를 연립으로 구하는 정공법은 $d=\\dfrac{4}{45}$ 라는 분수를 낳아 길어지므로 블록 구조 쪽 갈래를 골라야 한다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "블록합이 이루는 등차수열"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    블록합 $T_1=10$, $T_2=50$ 이면 블록합의 공차는 40 이므로 $T_3=90$, $T_4=130$ 이고 답은 $T_3+T_4=220$ 이다.
    구조를 보면 암산이고 못 보면 분수 공차 연립으로 길어진다 — 전략 갈래(SC)가 실제로 갈린다.
    [분류 이슈] 통찰 2 라 +1(★4) 후보지만 구조를 알면 한 줄이고 M_total 5 라 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '블록합 $T_1=10, T_2=50$ → 블록합의 공차 40 → $T_3+T_4=90+130$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$220$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '블록 크기(10 항)와 두 블록합의 값, 묻는 구간을 바꾼다. 제약: 모든 블록의 크기가 같아야 블록합이 등차가 된다. 묻는 구간이 블록의 정수배로 끊어져야 하며(제21~40항 = 두 블록), 어긋나게 잡으면 지름길이 막힌다.'
    creative: '(1) 묻는 구간을 제21~35항처럼 블록과 어긋나게 주면 정공법이 강제되어 ★4 (2) 블록합이 등차임을 명시해 주면 ★2 로 내려감 (3) 블록합의 합이 처음으로 1000 을 넘는 블록 번호를 묻기(이차부등식 ★4).'
```

```yaml
- id: GN-ALG-236-550
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    제3항이 17 이고 제2항과 제7항의 비가 4:1 인 등차수열에서 $S_n$ 의 최댓값.
  category: "비 조건 → 일차식 → 첫째항·공차 → 마지막 양수 항까지의 합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「$a_2:a_7=4:1$」 을 $a_2=4a_7$ 이라는 일차식으로 옮겨야 $a_3=17$ 과 연립된다"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「$S_n$ 의 최댓값」 을 「마지막 양수 항까지 더한 합」 으로 옮겨 $S_8$ 만 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "비 조건이 주어진 등차수열의 합의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_2=4a_7$ 에서 $a_1+d=4(a_1+6d)$, 즉 $3a_1=-23d$ 이고 $a_1+2d=17$ 과 연립하면 $d=-3$, $a_1=23$ 이다. $a_n=26-3n>0$ 은 $n\le 8$ 이므로 $S_8=100$ 이 최댓값이다.
    [분류 이슈] 통찰 2 로 +1(★4) 후보지만 둘 다 이 단원의 표준 d1 변환이고 e12 에서 이미 다룬 골조라 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '$a_2=4a_7$ · $a_3=17$ → $d=-3$, $a_1=23$ → $a_n>0$ 인 마지막 $n=8$ → $S_8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제3항의 값, 비교하는 두 항의 번호와 비를 바꾼다. 제약: 연립 결과 $a_1, d$ 가 정수로 떨어져야 하고 $d<0$ 이라야 최댓값 문제가 된다. $a_n=0$ 이 되는 $n$ 이 생기면 최댓값을 주는 $n$ 이 둘이 되므로 확인한다.'
    creative: '(1) 비를 음수 비(예: $a_2:a_7=-4:1$)로 바꾸면 부호 처리가 붙어 ★4 (2) 최댓값 대신 「$S_n>0$ 인 최대의 $n$」 을 물으면 이차부등식 ★4 (3) $S_n$ 의 최댓값을 주고 첫째항을 역으로 묻기(I-BW ★4).'
```

```yaml
- id: GN-ALG-236-551
  page: 236
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 자리 자연수 중 4 또는 7 로 나누어떨어지는 수의 총합.
  category: "4 의 배수 합 + 7 의 배수 합 − 28 의 배수 합"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「또는」 을 두 등차수열의 합집합으로 읽고 두 번 세어진 28 의 배수를 빼야 한다(포함배제)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "4 또는 7 의 배수의 총합 (포함배제)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 자리 4 의 배수는 12~96 의 22 개(합 1188), 7 의 배수는 14~98 의 13 개(합 728), 둘 다인 28 의 배수는 28, 56, 84(합 168)이다. 1188+728−168 이 답이다.
    등차수열의 합 자체는 e13 과 같지만 중복 제거를 빠뜨리면 반드시 틀린다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '4 의 배수 합 + 7 의 배수 합 − 28 의 배수 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1748$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/236-551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 나누는 수와 자리수 범위를 바꾼다. 제약: 두 수가 서로소여야 중복이 최소공배수의 배수로 깔끔해지고, 서로소가 아니면 중복 항이 늘어 계산이 번거로워진다. 범위 양끝이 배수인지 매번 다시 확인한다.'
    creative: '(1) 「4 로도 7 로도 나누어떨어지지 않는 수의 합」 으로 뒤집으면 여집합 사고가 붙어 ★4 (2) 세 수(3, 4, 5)로 늘리면 포함배제 항이 7 개가 되어 ★4 (3) 합 대신 개수를 물으면 ★2 로 내려감.'
```

```yaml
- id: GN-ALG-237-552
  page: 237
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    공차가 2 인 등차수열에서 $S_k=-16$, $S_{k+2}=-12$ 를 만족시키는 자연수 k 에 대하여 $a_{2k}$. 5지선다.
  category: "$S_{k+2}-S_k=a_{k+1}+a_{k+2}$ → 첫째항을 k 로 표현 → $S_k$ 식으로 k 결정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$S_{k+2}-S_k$ 를 두 항의 합 $a_{k+1}+a_{k+2}$ 로 옮겨야 $a_1$ 이 $k$ 의 식으로 나온다"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미지수가 $a_1$ 과 $k$ 둘인 채로 $S_k=-16$ 에 대입해 $-k^2=-16$ 이라는 $k$ 만의 식을 만들어 역추적해야 한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$S_k$ 조건에서 항 구하기 (두 미지수 동시 처리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_{k+1}+a_{k+2}=4$ 에서 $a_1=1-2k$ 를 얻고, 이를 $S_k=ka_1+k(k-1)$ 에 넣으면 $S_k=-k^2=-16$ 이라 $k=4$ 다. 그러면 $a_1=-7$, $a_8=7$ 이다.
    미지수가 둘인 상태에서 $k$ 만 남는 식을 만들어 내는 것이 벽이다. 통찰 2(EQV·BW) → STEP 2 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '$S_{k+2}-S_k=a_{k+1}+a_{k+2}=4$ → $a_1=1-2k$ → $S_k=-k^2=-16$ → $k=4$ → $a_8$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/237-552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공차와 두 합의 값을 바꾼다. 제약: $S_k$ 가 $k$ 만의 간단한 식($-k^2$ 꼴)으로 정리되는 것이 이 문항의 급소이므로, 공차와 합의 차를 함께 조정해 그 단순화가 유지되도록 한다. $k$ 가 자연수로 떨어져야 하고 선택지는 $a_{2k}$ 값 다섯 개로 둔다.'
    creative: '(1) $S_{k+2}$ 대신 $S_{k+3}$ 을 주면 세 항의 합이 되어 중항 관찰이 붙고 ★4 유지 (2) 공차를 미지수로 두면 미지수가 셋이 되어 ★5 (3) $a_{2k}$ 대신 $S_{2k}$ 를 물으면 합 공식이 한 번 더 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-237-553
  page: 237
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    3×3 표의 가로줄·세로줄에 적힌 세 수가 각각 적힌 순서대로 등차수열을 이룰 때 $a+b-(d+f)$ 의 값(표에는 a, b, 2 / 1, c, d / e, 6, f 가 들어 있다).
  category: "여섯 개의 등차중항 조건 → 한 문자로 환원 → 묻는 조합에서 문자 소거"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로 3 줄·세로 3 줄의 중항 조건 여섯 개를 한 문자(예: b)로 결합해 $a=2b-2$, $d=b+5$, $e=4-2b$, $f=2b+8$ 로 모두 표현해야 한다"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 칸의 값은 하나로 정해지지 않는데도 묻는 조합 $a+b-(d+f)$ 에서는 문자가 소거되어 $-15$ 로 결정된다는 것을 역으로 확인해야 한다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "가로·세로가 등차수열인 표 (값이 아니라 조합만 결정되는 구조)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    여섯 조건이 서로 독립이 아니어서 표의 값은 한 문자만큼 자유롭게 남는다. 각 칸을 하나씩 확정하려 들면 끝까지 막히고, 한 문자로 전부 표현한 뒤 묻는 식에 넣으면 $3b-2-(3b+13)=-15$ 로 문자가 사라진다.
    「정해지지 않는데 답은 정해진다」 가 이 문항의 급소다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '여섯 중항 조건 → 모든 칸을 $b$ 로 표현 → $a+b-(d+f)=3b-2-(3b+13)=-15$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-15$'
  answer_source: "답지"
  figure: 'crop:fig-237-553.png'
  latex: latex-bank/gn-alg/items/237-553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표에 이미 적힌 세 수(2, 1, 6)와 묻는 조합을 바꾼다. 제약: 3×3 등차 표는 항상 자유도가 1 이므로 묻는 조합은 반드시 자유 문자가 소거되는 형태여야 한다 — 소거되지 않는 조합(예: $a+d$)을 물으면 답이 결정되지 않는다. 그림의 칸 배치와 문자 위치는 고정한다.'
    creative: '(1) 적힌 수를 하나 더 늘려 모든 칸이 확정되게 하면 연립 계산 문제로 내려가 ★3 (2) 「$a+d$ 처럼 값이 정해지지 않는 조합을 모두 찾아라」 로 바꾸면 자유도 구조 자체를 묻게 되어 ★5 (3) 4×4 표로 키우면 자유도가 늘어 ★5.'
```

```yaml
- id: GN-ALG-237-554
  page: 237
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    n 개의 항으로 이루어진 등차수열에서 ㈎ 처음 4 개 항의 합이 24, ㈏ 마지막 4 개 항의 합이 156, ㈐ 전체 합이 540 일 때 n 의 값.
  category: "처음 4 항 + 마지막 4 항 = $4(a_1+a_n)$ → 양끝의 합 → 전체 합 공식으로 n"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 와 ㈏ 를 더하면 공차 항이 상쇄되어 $4(a_1+a_n)=180$ 이 된다는 양끝 대칭을 써야 한다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "얻은 $a_1+a_n=45$ 를 ㈐ 의 $S_n=\\dfrac{n(a_1+a_n)}{2}$ 에 결합하면 $n$ 만의 일차식이 된다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "처음·마지막 몇 항의 합으로 항의 개수 구하기 (양끝 대칭)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $4a_1+6d$ 와 $4a_n-6d$ 를 더하면 $d$ 가 사라져 $a_1+a_n=45$ 다. 여기에 $\dfrac{45n}{2}=540$ 을 쓰면 $n=24$ 이고 $a_1, d, n$ 을 따로 구할 필요가 전혀 없다.
    미지수 셋을 그대로 두고 대칭 상쇄로 필요한 덩어리만 뽑는 구조다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '㈎+㈏ $\Rightarrow 4(a_1+a_n)=180$ → $a_1+a_n=45$ → $\dfrac{45n}{2}=540$ → $n=24$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/237-554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '묶는 항의 개수(4 개), 두 부분합, 전체 합을 바꾼다. 제약: 앞뒤로 같은 개수를 묶어야 공차가 상쇄된다. $\dfrac{2S}{a_1+a_n}$ 이 자연수 $n$ 으로 떨어져야 하고, $n$ 은 묶은 개수의 2 배 이상이라야 두 묶음이 겹치지 않는다.'
    creative: '(1) 앞뒤 묶음의 개수를 다르게 주면 상쇄가 안 되어 정공법 연립 ★4~5 (2) 전체 합 대신 공차를 주고 n 을 묻기(★3) (3) 두 묶음이 겹치도록 n 을 작게 설계해 「겹치지 않을 조건」 까지 묻게 하면 I-VF ★5.'
```

```yaml
- id: GN-ALG-237-555
  page: 237
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $a_3=42$ 인 등차수열에서 ㈎ $a_{k-3}+a_{k-1}=-24$, ㈏ $S_k=k^2$ 을 만족시키는 4 이상의 자연수 k. 5지선다.
  category: "두 항의 합 → 중항 $a_{k-2}=-12$ → 두 식에서 $(k-5)d$ 덩어리 소거 → k"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$a_{k-3}+a_{k-1}=-24$ 를 중항 $a_{k-2}=-12$ 로 옮기면 번호가 하나로 줄어든다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 와 ㈏ 를 각각 $a_1=42-2d$ 로 정리하면 둘 다 $(k-5)d$ 라는 같은 덩어리를 품고, 두 식을 빼면 $d$ 없이 $k$ 만 남는다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "조건 두 개로 k 결정하기 (중항 + $S_k=k^2$)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_1=42-2d$ 를 두 조건에 넣으면 ㈎ 는 $42+(k-5)d=-12$, ㈏ 는 $84+(k-5)d=2k$ 가 된다. 두 식을 빼면 $(k-5)d$ 가 통째로 사라져 $42=2k-30$, $k=15$ 다.
    미지수 $a_1, d, k$ 셋 중 둘을 직접 구하지 않고 공통 덩어리로 소거하는 것이 급소다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '$a_{k-2}=-12$ · $S_k=k^2$ → 둘 다 $(k-5)d$ 를 품는 식으로 → 빼서 $d$ 소거 → $k=15$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/237-555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_3$ 의 값, ㈎ 의 두 항 번호와 합, ㈏ 의 우변($k^2$ → $2k^2$ 등)을 바꾼다. 제약: ㈎ 의 두 항 번호가 $k$ 를 중심으로 대칭이라야 중항으로 줄고, 두 식이 같은 $(k-5)d$ 꼴 덩어리를 품어야 소거가 일어난다 — 주어지는 항 번호($a_3$)를 바꾸면 덩어리의 모양도 함께 조정해야 한다.'
    creative: '(1) ㈏ 의 우변을 $k$ 의 일차식으로 바꾸면 $d$ 가 남아 연립이 필요해져 ★5 (2) ㈎ 의 두 항 번호를 비대칭으로 주면 중항 변환이 막혀 ★5 (3) k 대신 공차를 묻기(같은 골조 ★4).'
```

```yaml
- id: GN-ALG-237-556
  page: 237
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $S_n=n^2-20n$ 일 때 $|a_1|+|a_2|+\cdots+|a_{15}|$ 의 값.
  category: "일반항 → 부호 전환점 찾기 → 음수 구간은 부호 바꿔 $S$ 로 조합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$a_n=2n-21$ 의 부호가 $n=10$ 과 $n=11$ 사이에서 바뀌므로 구간을 둘로 나눠 따져야 한다"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절댓값의 합을 $-S_{10}+(S_{15}-S_{10})=S_{15}-2S_{10}$ 으로 옮기면 개별 항을 더하지 않고 끝난다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "절댓값을 포함한 항의 합 (부호 전환점에서 $S_n$ 으로 분해)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_n=S_n-S_{n-1}=2n-21$ 이고 $n=1$ 에서도 맞는다. $n\le 10$ 에서 음수, $n\ge 11$ 에서 양수이므로 앞 구간은 부호를 뒤집어 $-S_{10}$, 뒤 구간은 $S_{15}-S_{10}$ 이다.
    절댓값을 구간 분기(MI)로 풀되 각 구간을 다시 $S_n$ 의 조합으로 옮기는 변환(EQV d2)까지 해야 15 개 항을 일일이 더하지 않는다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '$a_n=2n-21$ → $n\le 10$ 음수 → $S_{15}-2S_{10}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/237-556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=n^2+qn$ 의 $q$ 와 더하는 항의 개수(15)를 바꾼다. 제약: 부호 전환점이 더하는 범위 안에 들어와야 분기가 의미를 갖고, $a_n=0$ 이 되는 $n$ 이 생기면 어느 구간에 넣어도 같으므로 굳이 피하지 않아도 된다. $S_n$ 에 상수항을 넣으면 $a_1$ 예외까지 겹쳐 난이도가 한 단 더 오른다.'
    creative: '(1) $S_n$ 에 상수항을 넣어 $a_1$ 이 예외가 되게 하면 ★5 (2) 「$|a_1|+\cdots+|a_n|$ 이 처음으로 200 을 넘는 n」 으로 바꾸면 부등식이 붙어 ★5 (3) 절댓값 대신 $\max(a_n,0)$ 의 합으로 바꾸면 한쪽 구간만 남아 ★3.'
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 6 · ★2 19 · ★3 8 · ★4 6 · ★5 0
- 통찰형 23 · 절차형 16 · premium 0
- 통찰 라벨 분포: I-EQV 15 · I-CON 4 · I-XU 3 · I-RT 2 · I-PD 2 · I-VF 2 · I-BW 2 · I-MI 2 · I-SC 1 · I-SYM 1 (총 34 라벨). depth 2 는 7 개(233-535 PD · 236-549 PD · 237-553 CON · 237-554 SYM · 237-555 CON · 237-556 EQV), 나머지는 모두 depth 1 이고 depth_score 최댓값은 3.00 이다.
- M_total 분포: 4 가 5 문 · 5 가 5 문 · 6 이 8 문 · 7 이 9 문 · 8 이 5 문 · 9 가 7 문 (평균 6.6). Mₜ 가 2 인 7 문은 모두 「$n=1$ 과 $n\ge 2$ 의 구분」 아니면 「처음으로 부호가 바뀌는 항의 경계」 다.
- type_hint 묶음: 「$S_n \leftrightarrow a_n$ 관계」 7(229-528 · 234-e15 · 234-536 · 234-537 · 235-544 · 237-552 · 237-556) · 「등차중항 조건」 5(235-539 · 235-541 · 236-546 · 237-553 · 237-555) · 「합 공식 직접 대입」 4(229-525 · 229-526 · 230-529 · 235-542) · 「부분합·블록합」 4(231-e11 · 231-532 · 236-549 · 237-554) · 「두 수 사이에 수를 넣은 등차수열」 3(231-e10 · 231-531 · 235-543) · 「합의 최대·최소」 3(232-e12 · 232-533 · 236-550) · 「나머지·배수의 합」 3(233-e13 · 233-534 · 236-551)
- 대상층: 하위권 5 · 중하위권 11 · 중위권 10 · 중상위권 10 · 상위권 3
- 그림: 3문(`crop:fig-233-e14.png` · `crop:fig-233-535.png` · `crop:fig-237-553.png`). 앞의 둘은 발문에 배치가 모두 서술돼 있어 보조 그림이지만, 237-553 의 3×3 표는 문자의 칸 배치가 곧 조건이므로 그림이 필수다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (구역 규칙) 230-529 · 530 · 531 · 532 · 533 · 534 · 535 · 536 · 537 | 벤더 태그 「확인체크」만 보면 ★1 출발이지만 모두 바로 앞 필수 예제의 유제여서 대응 예제와 같은 ★2 출발을 썼다(GN-ALG-08 · 19 와 같은 결정). 그 위에서 M_total·통찰로 ±1 했다 | ★1 / ★2 |
| GN-ALG-229-528 | 익히기 구역 신호는 ★1 이지만 $n=1$ 과 $n\ge 2$ 를 나누는 경계 판정이 이 문항의 본질이라 ★2 후보 | ★1 / ★2 |
| GN-ALG-230-e9 | 통찰 0·M_total 5 라 v3.8 −1 후보(★1)이나 단원 대표 골조를 처음 제시하는 필수 예제 자리라 구역 출발점 ★2 유지 | ★1 / ★2 |
| GN-ALG-233-535 | 「확인체크」 유제인데 좌표화 + 격자점 일반항 발견(PD d2)이 필요해 ★3 으로 올렸다. 벤더 신호와 2단 차이 | ★2 / ★3 |
| GN-ALG-235-540 | STEP 1 · 통찰 0 · M_total 5 라 −1 후보지만 「처음으로 양수」 경계 판정 때문에 ★2 유지 | ★1 / ★2 |
| GN-ALG-235-542 | STEP 1 이지만 일차방정식 한 줄(통찰 0 · M_total 4)이라 −1 을 적용해 ★1 로 내렸다 | ★1 / ★2 |
| GN-ALG-236-549 | 통찰 2(PD d2 · SC)로 +1(★4) 후보지만 블록 구조를 보면 암산이고 M_total 5 라 ★3 유지 | ★3 / ★4 |
| GN-ALG-236-550 | 통찰 2 로 +1(★4) 후보지만 두 변환 모두 e12 에서 이미 나온 표준 d1 이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **이 단원의 축은 「합 공식 대입」 이 아니라 「무엇을 모른 채로 둘 것인가」 다.** 230-530(항의 개수 모름) · 231-531(공차 모름) · 236-548(개별 수열 모름) · 237-554(세 미지수 모두 모름) · 237-555($d$ 소거) · 237-553(자유도 1 이 남음)이 한 줄기다. 카탈로그에서는 이 줄기를 「미지수를 남긴 채 합만 결정하기」 로 따로 세우는 편이 ★3~5 슬롯 설계에 쓸모가 크다.
- 「$S_n$ 에서 $a_n$ 구하기」(7 문)는 하나의 유형으로 보이지만 실제 변별은 **$S_n$ 의 상수항 유무 하나**로 갈린다(229-528 · 234-e15 가 그 대비를 한 문제 안에 넣어 둔 표준 사례). base ★ 를 하나로 묶으면 235-544 처럼 「번호가 2 이상이라 상수항이 무관한」 인스턴스에 끌려 내려가므로, **「$n=1$ 예외가 있는 경우」 와 「없는 경우」 를 하위 유형으로 나눠 두는 것을 권한다.**
- 「두 수 사이에 수를 넣어 만든 등차수열」(3 문)은 **양끝을 포함하느냐(231-e10) 제외하느냐(231-531 · 235-543)** 로만 갈리고 골조는 동일하다. 통합해도 무방하되 포함/제외를 변형 축으로 명시해 둔다.
- 「합의 최대·최소」(3 문)는 232-e12 가 조건($S_p=S_q$)과 결론(최댓값)을 모두 보여 주는 대표 인스턴스다. 236-550 은 조건만 바꾼 같은 유형이므로 통합한다. 다만 $a_n=0$ 인 항이 생겨 최댓값을 주는 $n$ 이 둘이 되는 변종은 I-VF 가 붙어 체감이 한 단 오르므로 **별도 인스턴스로 등재**한다.
- 「부분합·블록합」(4 문)에서 231-e11 · 231-532 는 연립 절차형이고 236-549 · 237-554 는 블록 구조·대칭 상쇄를 쓰는 통찰형이다. **같은 유형으로 묶지 말고 「연립으로 $a_1, d$ 복원」 과 「블록·대칭으로 $a_1, d$ 를 건너뛰기」 를 분리**해야 base ★ 가 2 와 4 로 정상 분리된다.
- 이 범위에는 SC/VF/SYM/XU 라벨이 붙은 문항이 8 개뿐이고 그중 ★4 는 236-546 · 237-552 · 237-553 · 237-554 · 237-555 · 237-556 이다. **★5 자격(통찰 3 개 이상 + 초저노출 유형)을 가진 문항은 이 범위에 없다** — 236-546 이 통찰 3 개로 유일하게 근접하지만 참신도가 낮아(시판 빈출) novelty_score 0 이다.
