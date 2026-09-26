---
name: mechanism-데이터-RPM-CALC2-10-p1
description: RPM 미적분Ⅱ 10 정적분의 활용(1/3 · 교과서 10-1~10-6 + 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 10 정적분의 활용
  unit_code: CALC2-10
  part: "1/3"
  extract_range: "153~156쪽 · 1071~1105"
  total_problems: 35
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 10 정적분의 활용 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 10단원 「정적분의 활용」의 앞 1/3(153~156쪽 · 문항 1071~1105 · 35문)을 다룬다. 구역은 교과서 10-1 정적분과 급수의 합 사이의 관계, 10-2 곡선과 좌표축 사이의 넓이, 10-3 두 곡선 사이의 넓이, 10-4 입체도형의 부피, 10-5 속도와 거리, 10-6 곡선의 길이(총 28문)와 유형 01·02 정적분과 급수의 합 사이의 관계(총 7문)로 이루어진다. 이 범위는 단원의 **교과서 드릴 층**이 대부분이라 벤더 난이도 표시(level)가 붙은 문항이 유형 구역의 5문뿐이고, 나머지는 구역 자체가 난이도 신호다(교과서 구역 → ★1 출발 · 유형 구역 level 중하 → ★1~2 · 중 → ★2 · 상중 → ★3).

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 한 줄), `insights[]`(통찰 유형 코드·depth·근거), `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 이 범위의 골조는 크게 네 갈래다 — (가) 급수의 합을 `Δx·f(a+kΔx)` 꼴로 재배치해 정적분으로 옮기기, (나) 적분 변수를 x 로 둘지 y 로 둘지 고르고 위-아래(또는 좌-우)를 판정해 넓이 적분하기, (다) 단면의 넓이 함수를 높이에 대해 적분하기, (라) 속력 √((dx/dt)²+(dy/dt)²) 또는 √(1+(dy/dx)²) 의 근호 안이 완전제곱이 되도록 정리한 뒤 적분하기.

## 문항 데이터

### 교과서 10-1 정적분과 급수의 합 사이의 관계

```yaml
- id: RPM-CALC2-1071
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=x^2$ 과 $x$축, 직선 $x=1$ 로 둘러싸인 넓이 $S$ 를 구분구적법으로 구하는 과정의 빈칸 6개 채우기(소구간 오른쪽 끝 점 기준).
  category: "구분구적법 유도 과정 빈칸 → 소구간 폭·함숫값·극한 확인"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구분구적법으로 곡선 아래 넓이 구하기(유도 과정 빈칸 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간 n등분의 폭 1/n, 오른쪽 끝 점 함숫값 (k/n)^2, 합 공식 적용, n→∞ 순서가 문제에 이미 깔려 있고 학생은 각 자리만 채운다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "[0,1] n등분 → 폭 1/n · 높이 (k/n)^2 → Sn=(1/n^3)Σk^2 → n→∞ → 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{n}$, $\dfrac{1}{n}$, $\dfrac{1}{n}$, $k^2$, $2$, $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: crop:fig-1071.png
  latex: latex-bank/rpm-calc2/items/1071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=x^3·y=x^2+1 로, 구간을 [0,2]·[1,2] 로 바꿀 수 있음. 제약: Σk^2·Σk^3 처럼 합 공식이 있는 거듭제곱만 쓰고, 구간 끝이 정수라야 폭이 (b-a)/n 으로 깔끔하며, 최종 극한이 유리수로 떨어지게 둘 것."
    creative: "(1) 오른쪽 끝 점을 왼쪽 끝 점으로 바꿔 Σ(k-1)^2 이 되게 하기(★1 유지 · 극한값은 같음) (2) 빈칸을 없애고 과정 전체를 서술하게 하면 ★2 (3) 넓이가 아니라 부피(회전 대신 단면)로 물으면 단면적 함수 해석이 추가되어 ★2."
```

```yaml
- id: RPM-CALC2-1072
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=x^3$ 에서 구간 $[0,\,1]$ 을 $n$등분 하고 각 소구간의 **왼쪽** 끝 점 함숫값을 높이로 한 직사각형 넓이 합의 극한으로, 곡선과 $x$축·직선 $x=1$ 로 둘러싸인 넓이 구하기.
  category: "왼쪽 끝 점 구분구적법 → 합 공식 → 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구분구적법으로 곡선 아래 넓이 구하기(왼쪽 끝 점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    폭 1/n · 높이 ((k-1)/n)^3 으로 합을 세운 뒤 Σ(k-1)^3 을 n-1 까지의 세제곱 합으로 바꿔 극한을 취한다. 왼쪽 끝 점이라 지표가 하나 밀리는 것이 유일한 함정(T-표기). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "왼쪽 끝 점 직사각형 합 (1/n)Σ((k-1)/n)^3 → 세제곱 합 공식 → n→∞ → 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: crop:fig-1072.png
  latex: latex-bank/rpm-calc2/items/1072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 2·4 로, 구간을 [0,2] 로 바꿀 수 있음. 제약: 그림 라벨(직사각형 개수·구간 끝 1)은 크롭과 묶여 있으므로 구간을 바꾸면 그림도 함께 바꿔야 함."
    creative: "(1) 왼쪽·오른쪽 끝 점 두 합의 차가 0으로 간다는 것을 함께 묻기(★2 · I-EQV d1) (2) 소구간 개수 n 을 고정(예: n=4)하고 근삿값과 참값을 비교하게 하면 ★2 (3) 곡선을 y=1/x 처럼 합 공식이 없는 함수로 바꾸면 구분구적법 대신 정적분 정의로만 풀어야 해 ★3."
```

```yaml
- id: RPM-CALC2-1073
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\lim\limits_{n\to\infty}\sum\limits_{k=1}^{n}\left(\dfrac{2k}{n}\right)^{2}\times\dfrac{2}{n}$ 를 정적분으로 나타내어 구하기.
  category: "Δx=2/n 인식 → ∫(0→2) x^2 dx"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내어 극한값 구하기(기본꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2/n 이 이미 곱해져 있고 2k/n 이 그대로 적분변수라 구간 [0,2]·피적분함수 x^2 가 한눈에 보인다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "Δx=2/n · x=2k/n → ∫(0→2) x^2 dx → 8/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 2 를 3·1/2 로, 지수 2 를 3 으로 바꿀 수 있음. 제약: 괄호 안의 계수와 뒤에 곱한 Δx 의 계수가 같아야 기본꼴이 유지되고, 결과가 유리수로 떨어지게 둘 것."
    creative: "(1) Δx 의 계수를 괄호 안과 다르게(예: ×1/n) 두면 계수 조정 통찰이 생겨 ★2(I-RT d1) (2) x^2 을 e^x·sin x 로 바꾸면 적분 도구만 달라지고 ★1 유지 (3) 정적분 값을 주고 구간 끝을 역으로 묻게 하면 ★2."
```

```yaml
- id: RPM-CALC2-1074
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\lim\limits_{n\to\infty}\sum\limits_{k=1}^{n}\left(4+\dfrac{k}{n}\right)\times\dfrac{1}{n}$ 를 정적분으로 나타내어 구하기.
  category: "Δx=1/n · x=k/n → ∫(0→1) (4+x) dx"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내어 극한값 구하기(기본꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/n 이 곱해져 있고 k/n 이 그대로 변수라 ∫(0→1)(4+x)dx 로 바로 옮겨진다. 구간을 [4,5] 로 잡는 다른 표기도 가능하지만 값은 같다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "Δx=1/n · x=k/n → ∫(0→1) (4+x) dx → 9/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 4 를 다른 정수로, 안쪽 식을 (4+k/n)^2 처럼 거듭제곱으로 바꿀 수 있음. 제약: Δx 가 1/n 으로 남아 구간이 [0,1] 로 유지되어야 하고 결과가 유리수가 되게 둘 것."
    creative: "(1) 같은 식을 ∫(4→5) x dx 로도 쓸 수 있음을 함께 묻기(★2 · I-EQV d1 — 구간 이동의 동치) (2) 안쪽을 1/(4+k/n) 로 바꾸면 로그가 나와 ★2 (3) 상수항을 미지수 a 로 두고 극한값을 주면 역산이 되어 ★2(I-BW d1)."
```

```yaml
- id: RPM-CALC2-1075
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{3}{n}\left\{\left(\dfrac{n+1}{n}\right)^{2}+\cdots+\left(\dfrac{n+n}{n}\right)^{2}\right\}$ 를 정적분으로 나타내어 구하기.
  category: "(n+k)/n = 1+k/n 재배치 → 3∫(0→1)(1+x)^2 dx"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(적분구간 이동 · 상수 계수 분리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    나열된 합을 Σ 로 되돌리고 (n+k)/n 을 1+k/n 으로 본 뒤 상수 3 을 밖으로 빼면 3∫(0→1)(1+x)^2dx. 같은 식을 3∫(1→2)x^2dx 로 둘 수도 있다. 교과서 드릴 구역이고 재배치가 한 줄이라 통찰로 세지 않음 → ★1.
  tier: star_1
  mechanism_primary: "나열된 합 → Σ · (n+k)/n=1+k/n → 3∫(0→1)(1+x)^2 dx → 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 계수 3 과 지수 2, 그리고 (n+2n)/n 처럼 마지막 항의 배수를 바꿀 수 있음. 제약: 마지막 항이 (n+mn)/n 이면 구간이 [1,1+m] 로 늘어나 Δx 가 m/n 이 되므로 앞 계수를 그에 맞춰 조정해야 함."
    creative: "(1) 합을 Σ 기호 없이 나열한 형태를 유지하되 항 수를 2n 으로 늘려 구간이 [1,3] 이 되게 하기(★2 · I-RT d1) (2) 제곱을 √ 로 바꾸면 1102 와 같은 골조 (3) 앞 계수를 미지수로 두고 극한값을 주면 역산 ★2."
```

```yaml
- id: RPM-CALC2-1076
  page: 153
  vendor_label: "교과서 10-1 정적분과 급수의 합 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{\pi}{n}\left(\sin\dfrac{\pi}{n}+\sin\dfrac{2\pi}{n}+\cdots+\sin\dfrac{n\pi}{n}\right)$ 를 정적분으로 나타내어 구하기.
  category: "Δx=π/n · x=kπ/n → ∫(0→π) sin x dx"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(삼각함수 · Δx=π/n)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞의 π/n 이 그대로 Δx 이고 각이 kπ/n 이라 구간 [0,π] 에서 sin x 의 정적분이 된다. π∫(0→1)sin πx dx 로 두어도 같다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "Δx=π/n · x=kπ/n → ∫(0→π) sin x dx → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "π 를 2π·π/2 로, sin 을 cos 으로 바꿀 수 있음. 제약: 앞에 곱한 계수와 각의 계수가 같아야 Δx 로 맞아떨어지고, 구간이 [0,2π] 면 sin 의 정적분이 0 이 되어 답이 자명해지므로 피할 것."
    creative: "(1) 앞 계수를 1/n 으로만 두면 π 를 따로 끌어내야 해 계수 조정 통찰이 생겨 ★2(I-RT d1) (2) sin 을 sin^2 으로 바꾸면 반각 공식이 추가되어 ★2 (3) 합의 시작을 k=0 으로 바꿔 항 수가 n+1 이 되게 하면 극한은 같지만 경계 논의가 필요해 ★2(T-경계)."
```

### 교과서 10-2 곡선과 좌표축 사이의 넓이

```yaml
- id: RPM-CALC2-1077
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\sqrt{x}$ 와 직선 $x=9$ 및 $x$축으로 둘러싸인 도형의 넓이.
  category: "적분구간 [0,9] 확정 → ∫√x dx"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이(무리함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곡선이 x축과 만나는 x=0 이 하한, 직선 x=9 가 상한. 구간 전체에서 y≥0 이라 절댓값 논의가 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "교점 x=0 → ∫(0→9) √x dx → 18"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=9 를 다른 완전제곱수(4·16)로, 곡선을 y=√(x+k)·y=2√x 로 바꿀 수 있음. 제약: 상한이 완전제곱수여야 값이 정수로 떨어지고, 평행이동 시 x축 교점이 새 하한이 되는 것을 반영할 것."
    creative: "(1) 같은 도형을 y축 기준으로 적분하게 바꾸면(x=y^2 · 직사각형에서 빼기) I-RT d1 이 들어가 ★2 (2) 곡선 위·아래를 뒤집어 직선 y=3 과 곡선 사이로 물으면 ★2 (3) 넓이를 주고 상한 x=a 를 역산하게 하면 ★2(I-BW d1)."
```

```yaml
- id: RPM-CALC2-1078
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\sin x\ (0\le x\le\pi)$ 와 $x$축으로 둘러싸인 도형의 넓이.
  category: "구간 [0,π] 에서 sin x ≥ 0 확인 → 정적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이(삼각함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 구간에서 sin x 가 음수가 되지 않는지 먼저 확인한 뒤 그대로 적분한다(T-부호). 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "[0,π] 에서 sin x ≥ 0 → ∫(0→π) sin x dx → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 [0,π/2]·[π/6,π/2] 로, 함수를 cos x·sin 2x 로 바꿀 수 있음. 제약: 구간 안에서 부호가 바뀌면 절댓값 분할이 생겨 골조가 달라지므로 의도할 때만 바꿀 것."
    creative: "(1) 구간을 [0,2π] 로 넓혀 부호가 바뀌게 하면 절댓값 분할이 필수가 되어 ★2(T-부호) (2) y=sin x 와 y=cos x 사이의 넓이로 바꾸면 교점 계산이 붙어 ★2 (3) 넓이를 반으로 나누는 직선 x=a 를 묻게 하면 ★3(I-BW d2)."
```

```yaml
- id: RPM-CALC2-1079
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=e^{x}-e$ 와 직선 $x=0$ 및 $x$축으로 둘러싸인 도형의 넓이.
  category: "x축 교점 x=1 확정 → 구간에서 y<0 → 절댓값(부호 반전) 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이(x축 아래 구간 · 지수함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e^x-e=0 에서 x=1 이 다른 쪽 경계이고, [0,1] 전체에서 곡선이 x축 아래이므로 정적분 값의 절댓값(또는 부호를 뒤집어 적분)이 넓이다. 부호 처리 하나가 유일한 함정(T-부호). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "e^x-e=0 → x=1 · [0,1] 에서 y<0 → ∫(0→1)(e-e^x)dx → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 e 를 e^2 로(교점 x=2), 곡선을 y=e^x-1·y=2^x-4 로 바꿀 수 있음. 제약: 교점이 유리수·정수여야 구간이 깔끔하고, 부호가 한 구간에서만 음수로 유지되게 둘 것."
    creative: "(1) 직선을 x=2 로 바꿔 교점 x=1 을 기준으로 부호가 바뀌게 하면 구간 분할이 생겨 ★2 (2) 같은 도형을 y축 기준으로 적분하면 로그 역함수가 나와 ★2(I-RT d1) (3) 곡선과 직선 y=-e 사이로 바꾸면 두 곡선 사이 넓이 골조."
```

```yaml
- id: RPM-CALC2-1080
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\ln x$ 와 직선 $x=e$ 및 $x$축으로 둘러싸인 도형의 넓이.
  category: "x축 교점 x=1 확정 → ln x 부분적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이(로그함수 · 부분적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ln x=0 인 x=1 이 하한이라는 점(T-범위)만 잡으면 ∫(1→e) ln x dx 를 부분적분으로 처리하는 표준 절차다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "ln x=0 → x=1 → ∫(1→e) ln x dx 부분적분 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한을 e^2 로, 곡선을 y=ln 2x·y=2ln x 로 바꿀 수 있음. 제약: 상한이 e 의 거듭제곱이라야 값이 깔끔하고, 평행·배율 변형 시 x축 교점이 새 하한이 되는 것을 반영할 것."
    creative: "(1) 같은 도형을 y축 기준으로 적분(x=e^y 와 직사각형 빼기)하게 하면 I-RT d1 이 들어가 ★2 (2) 직선 x=e 대신 y=1 로 바꾸면 경계 해석이 갈려 ★2 (3) 넓이가 주어지고 상한 x=a 를 역산하면 초월방정식이 되어 ★3."
```

```yaml
- id: RPM-CALC2-1081
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $x=y^{2}+2y$ 와 $y$축으로 둘러싸인 도형의 넓이(그림 제시).
  category: "y축 교점 y=-2,0 확정 → y에 대한 적분 · 부호 반전"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(x=f(y) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=0 에서 y=-2, 0 을 얻고 그 사이에서 x<0 이므로 -(y^2+2y) 를 y 에 대해 적분한다. 식이 이미 x=f(y) 꼴로 주어지고 그림도 있어 변수 선택 판단이 필요 없다(T-부호만 주의). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y^2+2y=0 → y=-2,0 · 구간에서 x<0 → ∫(-2→0) -(y^2+2y) dy → 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: crop:fig-1081.png
  latex: latex-bank/rpm-calc2/items/1081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 x=y^2+4y·x=y^2-3y 로 바꿀 수 있음. 제약: 두 y절편이 모두 정수여야 구간이 깔끔하고, 그림의 봉우리 방향·라벨(y=-2, 0)이 크롭에 고정되어 있으므로 부호를 바꾸면 그림도 바꿔야 함."
    creative: "(1) 곡선을 x=-y^2+2y 로 뒤집어 x>0 구간이 되게 하면 부호 처리가 사라져 ★1 유지 (2) 곡선과 직선 x=3 사이로 바꾸면 교점 계산이 붙어 ★2 (3) 같은 도형을 x 에 대한 적분으로 구하게 하면 역함수 두 갈래를 다뤄야 해 ★3(I-SC d2)."
```

```yaml
- id: RPM-CALC2-1082
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=-\ln (x-2)$ 와 두 직선 $y=0$, $y=2$ 및 $y$축으로 둘러싸인 도형의 넓이.
  category: "x 를 y 로 표현(x=2+e^{-y}) → y에 대한 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(역함수로 고쳐 y에 대해 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 의 범위가 [0,2] 로 직접 주어지므로 곡선을 x=2+e^{-y} 로 고쳐 y 에 대해 적분하는 교과서 표준 절차. 구간 전체에서 x>0 이라 부호 논의도 없다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y=-ln(x-2) → x=2+e^{-y} → ∫(0→2)(2+e^{-y})dy → 5-1/e^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{e^2}+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 2 와 위쪽 경계 y=2 를 바꿀 수 있음(예: y=-ln(x-1), y=3). 제약: 역함수로 고쳤을 때 구간 전체에서 x>0 이어야 절댓값 분할이 생기지 않음."
    creative: "(1) 로그의 부호를 y=ln(x-2) 로 되돌리면 y 범위가 음수 쪽이 되어 경계 해석이 갈려 ★2 (2) 같은 도형을 x 에 대한 적분으로 구하게 하면 부분적분 + 직사각형 빼기가 되어 ★2(I-RT d1) (3) 위쪽 경계를 곡선 y=x 로 바꾸면 교점을 구해야 해 ★3."
```

```yaml
- id: RPM-CALC2-1083
  page: 153
  vendor_label: "교과서 10-2 곡선과 좌표축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\sqrt{x+4}$ 와 두 직선 $y=0$, $y=3$ 및 $y$축으로 둘러싸인 도형의 넓이.
  category: "x=y^2-4 로 고치기 → y=2 에서 부호 바뀜 → 구간 분할 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(부호가 바뀌는 구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=y^2-4 는 [0,2] 에서 음수, [2,3] 에서 양수라 y축까지의 거리를 두 구간으로 나눠 더해야 한다. 이 분할을 놓치면 값이 틀리는데, 절댓값 구간 분할은 표준 분기라 통찰로 세지 않고 T-부호로 처리했다. 교과서 구역 ★1 출발이나 M_total 7·필수 분할로 ★2. [분류 이슈] 교과서 구역 안에서 유일하게 분할이 필수 — ★1/★2 경계.
  tier: star_2
  mechanism_primary: "y=√(x+4) → x=y^2-4 · y=2 에서 부호 전환 → ∫(0→2)(4-y^2)dy + ∫(2→3)(y^2-4)dy → 23/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{23}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 4 와 위쪽 경계 y=3 을 바꿀 수 있음. 제약: 부호가 바뀌는 y=√4=2 가 경계 3 보다 작아야 분할이 생기고, 두 조각 모두 유리수로 떨어지게 둘 것."
    creative: "(1) 위쪽 경계를 y=2 로 낮추면 분할이 사라져 ★1 (2) 경계를 y=1, y=3 으로 두면 두 조각 모두 존재하되 아래 조각이 잘려 T-경계가 추가되어 ★2~3 (3) 넓이를 주고 위쪽 경계 y=a 를 역산하게 하면 분할 여부부터 따져야 해 ★3(I-MI d2)."
```

### 교과서 10-3 두 곡선 사이의 넓이

```yaml
- id: RPM-CALC2-1084
  page: 153
  vendor_label: "교과서 10-3 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\dfrac{2}{x}$ 와 직선 $y=-x+3$ 으로 둘러싸인 도형의 넓이.
  category: "교점 x=1,2 → (직선-곡선) 적분 · 로그 항 처리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선(곡선과 직선) 사이의 넓이(교점 구해 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2/x=-x+3 에서 x=1, 2 를 얻고 그 사이에서 직선이 위에 있으므로 ∫(1→2){(-x+3)-2/x}dx. 위-아래 판정과 1/x 적분(로그)이 전부다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2/x=-x+3 → x=1,2 · 직선이 위 → ∫(1→2){(3-x)-2/x}dx → 3/2-2ln2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{2}-2\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2 와 직선의 y절편 3 을 바꿀 수 있음(예: y=3/x, y=-x+4). 제약: 교점의 x좌표가 정수·유리수가 되도록 이차방정식 x^2-bx+a=0 의 판별식과 근이 깔끔해야 하고, 두 교점 모두 x>0 이어야 함."
    creative: "(1) 직선을 y=-x+c 로 두고 넓이를 주어 c 를 역산하면 ★3(I-BW d2) (2) 곡선을 y=2/x^2 으로 바꾸면 로그가 사라지고 ★1 유지 (3) 두 교점 사이가 아니라 x축까지 포함한 영역으로 물으면 분할이 생겨 ★2."
```

```yaml
- id: RPM-CALC2-1085
  page: 153
  vendor_label: "교과서 10-3 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 곡선 $y=\sqrt{x}$, $y=x^{2}$ 으로 둘러싸인 도형의 넓이.
  category: "교점 x=0,1 → (위 곡선 - 아래 곡선) 적분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이(교점 구해 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √x=x^2 에서 x=0, 1 이고 그 사이에서 √x 가 위. ∫(0→1)(√x-x^2)dx 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "√x=x^2 → x=0,1 · √x 가 위 → ∫(0→1)(√x-x^2)dx → 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 y=x^{1/3} 과 y=x^3, 또는 y=√(2x) 와 y=x^2 처럼 바꿀 수 있음. 제약: 두 곡선의 교점이 0 과 유리수라야 하고, 역함수 관계(y=x 대칭)를 유지할지 여부를 의도적으로 정할 것."
    creative: "(1) 두 곡선이 y=x 에 대해 대칭임을 이용해 넓이를 y=x 아래 부분의 2배로 구하게 하면 I-SYM d2 가 들어가 ★3 (2) 한쪽을 y=x^2+c 로 평행이동시키면 교점이 무리수가 되어 계산 마찰만 늘어나므로 피할 것 (3) y=x 와 두 곡선이 만드는 세 영역의 넓이 비를 묻게 하면 ★3."
```

### 교과서 10-4 입체도형의 부피

```yaml
- id: RPM-CALC2-1086
  page: 155
  vendor_label: "교과서 10-4 입체도형의 부피"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    깊이 $x\,\mathrm{cm}$ 일 때 수면의 넓이가 $(x+1)^{2}\,\mathrm{cm}^{2}$ 인 용기에 물을 $6\,\mathrm{cm}$ 깊이로 채웠을 때 물의 부피.
  category: "단면적 함수 → 깊이에 대해 정적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면의 넓이가 주어진 입체도형(용기 속 물)의 부피"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    V=∫(0→6)(x+1)^2dx 로 바로 세워지고 치환 없이 적분된다. 단면적이 이미 함수로 주어져 모델링 부담이 없다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "단면적 S(x)=(x+1)^2 → V=∫(0→6)(x+1)^2 dx → 114"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$114\,\mathrm{cm}^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "깊이 6 과 단면적 (x+1)^2 의 계수를 바꿀 수 있음(예: (2x+1)^2, 깊이 4). 제약: 적분 결과가 정수 cm^3 로 떨어지게 두고, 단면적이 항상 양수가 되게 할 것."
    creative: "(1) 부피를 주고 깊이를 역산하게 하면 삼차방정식이 되어 ★2~3(I-BW d1) (2) 단면적을 수면의 반지름으로 주면 πr^2 로 고치는 단계가 붙어 ★2(T-단위) (3) 물을 일정 속도로 부을 때 수면 상승 속도를 묻게 하면 미분이 결합되어 ★3(I-XU d2)."
```

```yaml
- id: RPM-CALC2-1087
  page: 155
  vendor_label: "교과서 10-4 입체도형의 부피"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    높이 $4\,\mathrm{cm}$ 인 그릇을 밑면에서 높이 $x\,\mathrm{cm}$ 에서 자른 단면의 넓이가 $(e^{2x}+x+2)\,\mathrm{cm}^{2}$ 일 때 그릇의 부피.
  category: "단면적 함수 → 높이에 대해 정적분(지수 항 포함)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면의 넓이가 주어진 입체도형의 부피(지수함수 단면)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    V=∫(0→4)(e^{2x}+x+2)dx 를 항별로 적분한다. e^{2x} 의 1/2 계수만 주의하면 되는 표준 계산(T-표기 수준). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "단면적 S(x)=e^{2x}+x+2 → V=∫(0→4) S(x) dx → e^8/2+31/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\left(\dfrac{1}{2}e^8+\dfrac{31}{2}\right)\mathrm{cm}^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 4 와 지수 계수 2, 일차항 계수를 바꿀 수 있음. 제약: 결과에 e 의 거듭제곱이 하나만 남아야 답이 읽히고, 단면적이 구간 전체에서 양수여야 함."
    creative: "(1) 단면을 한 변이 e^x 인 정사각형으로 주면 제곱 단계가 추가되어 ★2(T-단위) (2) 부피를 주고 그릇 높이를 역산하면 초월방정식이라 ★3 (3) 단면적을 구간별로 다른 식으로 주면 분할 적분이 되어 ★2."
```

```yaml
- id: RPM-CALC2-1088
  page: 155
  vendor_label: "교과서 10-4 입체도형의 부피"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    높이 $10$ 인 입체도형을 높이 $x$ 에서 자른 단면이 한 변의 길이가 $\sqrt{2x+4}$ 인 정사각형일 때 이 입체도형의 부피.
  category: "한 변 → 단면적 제곱으로 환산 → 정적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면의 한 변이 주어진 입체도형의 부피(넓이로 환산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 것이 넓이가 아니라 한 변이므로 제곱해 S(x)=2x+4 로 바꾸는 한 단계(T-단위)가 핵심이고, 그 뒤는 일차식 적분이다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "한 변 √(2x+4) → S(x)=2x+4 → V=∫(0→10)(2x+4)dx → 140"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$140$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 10 과 근호 안 2x+4 의 계수를 바꿀 수 있음. 제약: 구간 전체에서 근호 안이 양수라야 하고, 제곱 뒤 적분 결과가 정수로 떨어지게 둘 것."
    creative: "(1) 단면을 정삼각형·반원으로 바꾸면 넓이 공식(√3/4·a^2, πr^2/2)이 한 겹 더 붙어 ★2 (2) 한 변을 2x+4 로 주면 제곱해 이차식이 되어 계산만 늘어나므로 ★1 유지 (3) 밑면이 원이고 수직 단면이 정사각형인 고전적 설정으로 바꾸면 단면 변 길이를 스스로 세워야 해 ★3(I-RT d2)."
```

### 교과서 10-5 속도와 거리

```yaml
- id: RPM-CALC2-1089
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 $\pt{P}$ 의 속도가 $v(t)=e^{t}-1$ 일 때 ⑴ 시각 $t$ 에서의 위치 ⑵ $t=0$ 에서 $t=4$ 까지 움직인 거리.
  category: "위치=초기위치+∫v · 거리=∫|v| · 구간에서 v≥0 확인"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 위치와 움직인 거리(속도 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 0+∫(0→t)(e^s-1)ds 를 그대로 계산하고, ⑵ 는 t>0 에서 e^t-1>0 이라 절댓값이 벗겨져 위치 변화량과 같아진다. 부호 확인(T-부호) 한 번이 전부다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "위치=∫(0→t)(e^s-1)ds=e^t-t-1 · t>0 에서 v>0 → 거리=∫(0→4)v dt=e^4-5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $e^t-t-1$ \quad (2) $e^4-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속도를 v(t)=e^{2t}-1·2^t-1 로, 상한 4 를 다른 정수로 바꿀 수 있음. 제약: 관찰 구간 전체에서 v 의 부호가 일정해야 ⑵ 가 위치 변화량과 같아지고, 출발점이 원점이라야 적분상수가 0 이 됨."
    creative: "(1) 속도를 v(t)=e^t-2 처럼 두어 t=ln2 에서 부호가 바뀌게 하면 거리와 변화량이 달라져 ★2 (2) 출발점을 원점이 아닌 x=3 으로 두면 적분상수 처리가 추가되어 ★1~2 (3) '다시 원점을 지나는 시각'을 묻게 하면 초월방정식·역추적이 되어 ★3(I-BW d2)."
```

```yaml
- id: RPM-CALC2-1090
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 $\pt{P}$ 의 속도가 $v(t)=-\cos t$ 일 때 ⑴ $t=\dfrac{\pi}{2}$ 에서의 위치 ⑵ $t=0$ 에서 $t=\pi$ 까지 위치의 변화량 ⑶ 같은 구간에서 움직인 거리.
  category: "위치·변화량·거리 3개념 구분 → ∫v 와 ∫|v| 분리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치·위치의 변화량·움직인 거리 구분(삼각함수 속도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 는 ∫(0→π)v dt 로 0 이 되지만 ⑶ 은 t=π/2 에서 v 의 부호가 바뀌므로 ∫|v| 를 두 구간으로 나눠 2 가 된다. 같은 구간에서 변화량 0 과 거리 2 가 동시에 나오는 대비가 이 문항의 목적(T-부호). 교과서 구역 ★1 출발이나 세 개념 구분·필수 분할로 ★2.
  tier: star_2
  mechanism_primary: "위치=∫(0→t)(-cos s)ds=-sin t · 변화량=∫(0→π)v dt=0 · 거리=∫(0→π)|cos t|dt=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $-1$ \quad (2) $0$ \quad (3) $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속도를 v(t)=sin t·-cos 2t 로, 구간 상한을 2π·3π/2 로 바꿀 수 있음. 제약: 부호가 바뀌는 시각이 구간 안에 있어야 ⑵ 와 ⑶ 이 갈리고, 각 조각의 적분이 정수가 되게 둘 것."
    creative: "(1) 구간 상한을 2π 로 늘리면 부호 전환이 두 번이라 분할이 세 조각이 되어 ★2~3 (2) '가장 왼쪽에 있는 시각과 그때의 위치'를 묻게 하면 극값 판정이 붙어 ★3(I-XU d2 · 미분 결합) (3) 속도 대신 속도 그래프를 주고 넓이로 읽게 하면 I-RT d1 이 들어가 ★2."
```

```yaml
- id: RPM-CALC2-1091
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    좌표평면 위를 움직이는 점 $\pt{P}$ 의 위치가 $x=2t^{2}$, $y=-\dfrac{3}{2}t^{2}+1$ 일 때 $t=0$ 에서 $t=2$ 까지 움직인 거리.
  category: "성분 미분 → 속력 √((dx/dt)^2+(dy/dt)^2) → 적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위를 움직이는 점이 움직인 거리(매개변수 · 속력 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=4t, dy/dt=-3t 에서 근호 안이 25t^2 로 완전제곱이 되어 속력이 5t(t≥0)로 떨어진다. 3:4:5 로 설계된 전형 문항. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(4t, -3t) → 속력 5t → ∫(0→2)5t dt → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 성분의 계수를 피타고라스 수 쌍(3,4 · 5,12 · 8,15)에 맞춰 바꾸고 상한 t=2 를 조정할 수 있음. 제약: (dx/dt)^2+(dy/dt)^2 이 완전제곱이어야 근호가 벗겨지고, t≥0 이라 속력에 절댓값이 붙지 않음."
    creative: "(1) 계수를 피타고라스 쌍에서 벗어나게 하면 √ 가 남아 상수배 형태가 되어 ★1 유지(계산만 늘어남) (2) 시작 시각을 t=-1 로 두면 속력에 |t| 가 생겨 분할이 필요해 ★2(T-부호) (3) 자취가 직선임을 알아채 두 끝점 사이 거리로 구하게 하면 I-RT d2 가 들어가 ★3."
```

```yaml
- id: RPM-CALC2-1092
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 $\pt{P}$ 의 위치가 $x=\dfrac{4}{3}t\sqrt{t}$, $y=\dfrac{1}{2}t^{2}-t$ 일 때 $t=0$ 에서 $t=2$ 까지 움직인 거리.
  category: "성분 미분 → 근호 안 완전제곱 정리 → 적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위를 움직이는 점이 움직인 거리(근호 안 완전제곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=2√t, dy/dt=t-1 이므로 근호 안이 4t+(t-1)^2=(t+1)^2 로 정리되어 속력이 t+1 이 된다. 완전제곱으로 떨어지도록 설계된 교과서 드릴. 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(2√t, t-1) → 근호 안 (t+1)^2 → 속력 t+1 → ∫(0→2)(t+1)dt → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 성분 계수 4/3 과 y 성분의 일차항 계수를 함께 바꿔야 한다. 제약: (dx/dt)^2+(dy/dt)^2 이 (t+c)^2 꼴로 떨어지도록 계수를 맞춰야 하고, 구간 안에서 t+c>0 이어야 절댓값이 벗겨짐."
    creative: "(1) 구간을 t=-2 부터로 잡아 t+1 의 부호가 바뀌게 하면 분할이 필요해 ★2 (2) 완전제곱이 되지 않게 계수를 틀면 적분이 불가능해지므로 피할 것 — 이 유형의 설계 핵심 (3) 거리를 주고 상한 t=a 를 역산하면 이차방정식이 되어 ★2(I-BW d1)."
```

```yaml
- id: RPM-CALC2-1093
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 $\pt{P}$ 의 위치가 $x=\cos 2t$, $y=-\sin 2t+1$ 일 때 $t=0$ 에서 $t=2$ 까지 움직인 거리.
  category: "성분 미분 → sin^2+cos^2=1 로 속력 상수화 → 적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위를 움직이는 점이 움직인 거리(등속 원운동 · 삼각 항등식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=-2sin2t, dy/dt=-2cos2t 이므로 근호 안이 4(sin^2+cos^2)=4 로 속력이 상수 2. ∫(0→2)2dt=4. 삼각 항등식 한 번의 표준 절차다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(-2sin2t, -2cos2t) → 속력 2(상수) → ∫(0→2)2 dt → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(계수 1)과 각속도 2, 상한 t=2 를 바꿀 수 있음. 제약: 두 성분의 진폭이 같아야 속력이 상수가 되고, 진폭이 다르면 타원이 되어 적분이 초등함수로 안 됨."
    creative: "(1) 자취가 반지름 1 인 원임을 알아채 호의 길이 rθ 로 구하게 하면 I-RT d2 가 들어가 ★3 (2) 각속도를 t 의 함수로 두면 속력이 상수가 아니게 되어 ★2 (3) 두 성분의 진폭을 다르게 하면 타원 둘레라 이 단원 범위를 넘음 — 피할 것."
```

```yaml
- id: RPM-CALC2-1094
  page: 155
  vendor_label: "교과서 10-5 속도와 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 $\pt{P}$ 의 위치가 $x=e^{t}\cos t$, $y=e^{t}\sin t$ 일 때 $t=0$ 에서 $t=2$ 까지 움직인 거리.
  category: "곱의 미분 → 제곱합 전개 · 삼각 항등식 → 속력 √2 e^t 적분"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위를 움직이는 점이 움직인 거리(곱의 미분 + 삼각 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 성분 모두 곱의 미분이 필요하고, 제곱해 더할 때 교차항이 상쇄되며 sin^2+cos^2=1 로 정리되어야 속력 √2 e^t 가 나온다. 계산 단계가 이 구역에서 가장 길다(M_total 8). 교과서 구역 ★1 출발이나 다단계 대수 처리로 ★2.
  tier: star_2
  mechanism_primary: "곱의 미분 → (dx/dt)^2+(dy/dt)^2=2e^{2t} → 속력 √2 e^t → ∫(0→2) → √2(e^2-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{2}(e^2-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 e^{2t}·e^{-t} 로, 상한 t=2 를 바꿀 수 있음. 제약: 지수를 e^{at} 로 두면 속력이 √(a^2+1)e^{at} 가 되므로 근호 안 상수가 깔끔한 a 를 고를 것."
    creative: "(1) 자취가 로그나선임을 언급하고 극좌표적 해석을 덧붙이면 I-RT d2 로 ★3 (2) 지수를 빼고 x=cos t, y=sin t 로 두면 1093 골조로 내려가 ★1 (3) 거리가 주어지고 상한을 역산하면 로그가 나와 ★2(I-BW d1)."
```

### 교과서 10-6 곡선의 길이

```yaml
- id: RPM-CALC2-1095
  page: 155
  vendor_label: "교과서 10-6 곡선의 길이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $x=3t^{2}$, $y=1-t^{2}\ (0\le t\le 2)$ 의 길이.
  category: "매개변수 곡선 길이 공식 → 근호 안 상수배 t^2 → 적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 길이(기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=6t, dy/dt=-2t 에서 근호 안이 40t^2 이므로 피적분함수가 2√10·t(t≥0). ∫(0→2) 로 4√10. 매개변수 길이 공식의 직접 대입. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(6t, -2t) → √(40t^2)=2√10 t → ∫(0→2)2√10 t dt → 4√10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 성분의 계수와 구간 상한 2 를 바꿀 수 있음. 제약: t≥0 이라야 √(t^2)=t 로 벗겨지고, 근호 안 상수가 완전제곱이면 무리수가 사라져 더 쉬워짐."
    creative: "(1) 구간을 -1≤t≤2 로 하면 |t| 분할이 생겨 ★2(T-부호) (2) 자취가 직선 x+3y=3 의 일부임을 이용해 두 끝점 거리로 구하게 하면 I-RT d2 로 ★3 (3) 매개변수를 소거해 y=f(x) 꼴 길이 공식으로 풀게 하면 같은 값이지만 도구가 바뀌어 I-SC d2 ★3."
```

```yaml
- id: RPM-CALC2-1096
  page: 155
  vendor_label: "교과서 10-6 곡선의 길이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $x=2\sin t$, $y=1-2\cos t\ (0\le t\le\pi)$ 의 길이.
  category: "매개변수 길이 공식 → 삼각 항등식으로 상수화 → 적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 길이(원호 · 삼각 항등식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=2cos t, dy/dt=2sin t 이므로 근호 안이 4 로 상수. ∫(0→π)2dt=2π 이고, 반지름 2 인 반원의 호의 길이와 일치한다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(2cos t, 2sin t) → 속력 2(상수) → ∫(0→π)2 dt → 2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2 와 구간 상한 π 를 바꿀 수 있음(예: 반지름 3, 상한 π/2). 제약: 두 성분의 진폭이 같아야 근호가 상수로 떨어지고, 중심 평행이동(1-2cos t 의 1)은 길이에 영향이 없음."
    creative: "(1) 자취가 중심 (0,1)·반지름 2 인 원의 반임을 먼저 밝히고 rθ 로 구하게 하면 I-RT d2 로 ★3 (2) 진폭을 다르게 하면 타원 둘레라 범위를 넘음 — 피할 것 (3) 각을 2t 로 바꾸면 같은 구간에서 한 바퀴가 돌아 길이가 2배가 되는 대비를 묻기(★2)."
```

```yaml
- id: RPM-CALC2-1097
  page: 155
  vendor_label: "교과서 10-6 곡선의 길이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\dfrac{2}{3}x\sqrt{x}-\dfrac{1}{2}\sqrt{x}\ (0\le x\le 4)$ 의 길이.
  category: "y' 계산 → 1+(y')^2 완전제곱 정리 → 근호 벗기고 적분"
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f(x) 꼴 곡선의 길이(1+(y')^2 이 완전제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=√x-1/(4√x) 이므로 1+(y')^2 = x+1/2+1/(16x) = (√x+1/(4√x))^2 이 되어 근호가 벗겨진다. 교차항 -1/2 가 1 과 합쳐져 +1/2 가 되는 설계를 알아채야 하고, 그 뒤 항별 적분도 분수 지수라 부담이 있다. 교과서 구역 ★1 출발이나 M_total 7·완전제곱 착안으로 ★2. [분류 이슈] 완전제곱 착안을 I-RT 통찰로 셀지 표준 절차로 볼지 경계 — 이 유형의 설계가 항상 완전제곱이라 절차형으로 둠.
  tier: star_2
  mechanism_primary: "y'=√x-1/(4√x) → 1+(y')^2=(√x+1/(4√x))^2 → ∫(0→4)(√x+1/(4√x))dx → 19/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{19}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수 2/3 과 1/2, 상한 4 를 바꿀 수 있음. 제약: y=a·x^{3/2}+b·x^{1/2} 에서 1+(y')^2 이 완전제곱이 되려면 교차항이 -1 이 되도록 a,b 를 묶어야 하고, 상한은 √ 가 정수인 값으로 둘 것."
    creative: "(1) 지수를 x^2 과 ln x 조합(y=x^2/4-ln x/2)으로 바꿔도 같은 완전제곱 골조가 나와 ★2 (2) 하한을 0 이 아닌 1 로 올리면 1/(4√x) 의 특이점 논의가 사라져 ★1~2 (3) 길이를 주고 상한을 역산하면 ★3(I-BW d2)."
```

```yaml
- id: RPM-CALC2-1098
  page: 155
  vendor_label: "교과서 10-6 곡선의 길이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 $y=\dfrac{e^{x}+e^{-x}}{2}\ (-1\le x\le 1)$ 의 길이.
  category: "y' 계산 → 1+(y')^2 완전제곱 → 대칭 구간 적분"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f(x) 꼴 곡선의 길이(현수선 · 1+(y')^2 이 완전제곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=(e^x-e^{-x})/2 이고 1+(y')^2 = ((e^x+e^{-x})/2)^2 이라 피적분함수가 y 자신이 된다. 1097 과 같은 완전제곱 골조지만 정리가 한 줄이고 계산도 가볍다. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y'=(e^x-e^{-x})/2 → 1+(y')^2=((e^x+e^{-x})/2)^2 → ∫(-1→1)(e^x+e^{-x})/2 dx → e-1/e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e-\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 [0,1]·[-2,2] 로, 함수를 (e^{2x}+e^{-2x})/4 로 바꿀 수 있음. 제약: 1+(y')^2 이 완전제곱이 되려면 계수 관계가 현수선 꼴로 유지돼야 하고, 대칭 구간이면 짝함수 성질로 계산이 절반이 됨."
    creative: "(1) 피적분함수가 짝함수임을 이용해 2∫(0→1) 로 줄이게 하면 I-SYM d1 이 들어가 ★2 (2) 부호를 (e^x-e^{-x})/2 로 바꾸면 1+(y')^2 이 여전히 완전제곱이라 골조 유지 ★1 (3) 곡선 길이와 그 아래 넓이가 같음을 함께 묻게 하면 ★3(I-CON d2)."
```

### 유형 01 정적분과 급수의 합 사이의 관계 (1)

```yaml
- id: RPM-CALC2-1099
  page: 156
  vendor_label: "유형 01 정적분과 급수의 합 사이의 관계 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{1}{n}\sum\limits_{k=1}^{n}\sin\left(1+\dfrac{2k}{n}\right)=a\displaystyle\int_{b}^{c}\sin x\,dx$ 가 성립할 때($a>0$) 유리수 $a$, $b$, $c$ 에 대한 $abc$.
  category: "Δx 를 2/n 으로 맞추려 1/2 를 밖으로 → 구간 [1,3] 확정 → abc"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "급수를 정적분으로 옮길 때 1/n 을 (1/2)(2/n) 으로 쪼개 Δx=2/n 에 맞추고 x=1+2k/n 에서 구간 [1,3] 을 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(계수·적분구간 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 1/n 과 각 안의 2k/n 이 어긋나 있어 Δx 를 2/n 으로 맞추고 남는 1/2 를 상수 a 로 빼내는 것이 핵심이다. 구간은 k=1→x≈1, k=n→x=3 에서 [1,3](T-범위). a>0 조건이 표기를 하나로 묶어준다. 유형 대표문제·통찰 1개(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "1/n=(1/2)(2/n) → (1/2)∫(1→3) sin x dx → a=1/2, b=1, c=3 → abc=3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 안의 1 과 2k/n 의 계수 2, 함수 sin 을 바꿀 수 있음. 제약: a=1/(계수), b=상수항, c=상수항+계수 로 결정되므로 abc 가 유리수로 깔끔하게 떨어지는 조합을 고를 것. a>0 조건을 빼면 답이 여러 개가 됨."
    creative: "(1) 치환을 달리하면 (a,b,c) 표기가 여러 벌 나온다는 점을 살려 '가능한 abc 를 모두 구하라'로 바꾸면 I-MI d2 로 ★3 (2) sin 을 일반 연속함수 f 로 바꾸면 1101 골조 (3) 등식의 좌변에 f(1+2k/n) 대신 (k/n)f(...) 를 넣으면 1105 골조로 ★3."
```

```yaml
- id: RPM-CALC2-1100
  page: 156
  vendor_label: "유형 01 정적분과 급수의 합 사이의 관계 (1)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{1}{n^{2}}\sum\limits_{k=1}^{n}ke^{\frac{k}{n}}$ 의 값을 정적분으로 구하는 과정의 빈칸 ㈎, ㈏, ㈐ 채우기.
  category: "1/n^2 을 (1/n)(k/n) 으로 쪼개기 → ∫x e^x dx 부분적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(k/n 가중 · 빈칸 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㈎ 에는 Δx 인 1/n, ㈏ 에는 부분적분에서 e^x 의 부정적분인 e^x, ㈐ 에는 최종값이 들어간다. 재배치와 부분적분의 골조가 문제에 이미 인쇄되어 있어 학생은 자리만 메운다. 유형 구역·level 중하지만 유도 제시형이라 ★1.
  tier: star_1
  mechanism_primary: "1/n^2·k = (1/n)(k/n) → ∫(0→1) x e^x dx 부분적분 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (㈎ $\dfrac{1}{n}$, ㈏ $e^x$, ㈐ $1$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 e^{k/n} 을 e^{2k/n} 으로, 가중 k 를 k^2 으로 바꿀 수 있음. 제약: k^2 이면 앞이 1/n^3 이라야 하고, 부분적분 횟수가 늘어 빈칸 구조를 다시 짜야 함."
    creative: "(1) 빈칸을 없애고 값만 묻게 하면 재배치 통찰이 살아나 ★2(I-RT d1) (2) e^x 를 ln x·sin πx 로 바꾸면 부분적분 대상만 달라지고 ★2 (3) 빈칸 ㈎ 만 남기고 나머지를 지우면 난이도가 계단식으로 올라 ★2."
```

```yaml
- id: RPM-CALC2-1101
  page: 156
  vendor_label: "유형 01 정적분과 급수의 합 사이의 관계 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 $f(x)$ 에 대하여 $\displaystyle\int_{1}^{4}f(x)\,dx=12$ 일 때 $\lim\limits_{n\to\infty}\sum\limits_{k=1}^{n}\dfrac{2}{n}f\left(1+\dfrac{3k}{n}\right)$ 의 값. 5지선다.
  category: "Δx=3/n 로 맞추고 2/3 을 밖으로 → 주어진 정적분 값 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2/n 을 (2/3)(3/n) 으로 쪼개 Δx=3/n 에 맞추고 x=1+3k/n 에서 구간 [1,4] 를 읽어 주어진 ∫f=12 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반 연속함수 f 의 급수 합을 정적분으로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 의 식이 없고 정적분 값만 주어지므로(Mₐ=3) 적분 구간이 [1,4] 로 맞아떨어지도록 Δx 를 3/n 으로 고정하는 것이 유일한 길이다. 계수 2/n 과 Δx 3/n 의 비 2/3 을 밖으로 빼면 (2/3)×12. 유형 구역 level 중·통찰 1개(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "2/n=(2/3)(3/n) → (2/3)∫(1→4)f(x)dx=(2/3)(12) → 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분값 12, 구간 [1,4], 계수 2/n 을 바꿀 수 있음. 제약: 구간 폭과 각 안의 k 계수가 같아야 하고(여기서는 3), 계수 비가 유리수로 떨어져 선택지가 깔끔해야 함."
    creative: "(1) 구간을 [0,3] 으로 바꾸고 각 안을 3k/n 으로만 두면 상수항 확인이 빠져 ★1~2 (2) ∫(1→4)f 대신 ∫(1→2)f 와 ∫(2→4)f 를 나눠 주면 조건 통합이 생겨 ★3(I-CON d2) (3) f 에 우함수·주기 조건을 얹으면 대칭 활용이 추가되어 ★3~4(I-SYM d2)."
```

### 유형 02 정적분과 급수의 합 사이의 관계 (2)

```yaml
- id: RPM-CALC2-1102
  page: 156
  vendor_label: "유형 02 정적분과 급수의 합 사이의 관계 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{\sqrt{n}}{n^{2}}\left(\sqrt{n+1}+\sqrt{n+2}+\cdots+\sqrt{n+n}\right)$ 의 값.
  category: "√n/n^2 를 분배해 (1/n)√(1+k/n) 꼴로 재배치 → 정적분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밖의 √n/n^2 를 (1/n)·(1/√n) 으로 나눠 각 항 √(n+k) 에 √n 을 흡수시켜 √(1+k/n) 꼴로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(n 으로 나누어 k/n 꼴 만들기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Δx 와 f(k/n) 이 겉으로 보이지 않아, 밖의 계수를 쪼개 각 항의 √(n+k) 안으로 √n 을 넣어야 √(1+k/n) 이 드러난다. 그 뒤는 ∫(0→1)√(1+x)dx 의 표준 계산. 유형 대표문제·통찰 1개(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "√n/n^2·√(n+k) = (1/n)√(1+k/n) → ∫(0→1)√(1+x)dx → (2/3)(2√2-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}(2\sqrt{2}-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√ 를 세제곱근으로, 항의 개수를 2n 개(√(n+1)~√(n+2n))로 바꿀 수 있음. 제약: 밖의 n 거듭제곱 차수가 항 안의 차수와 맞아야 (1/n)f(k/n) 꼴이 되고, 항 수를 2n 으로 늘리면 구간이 [0,2] 가 됨."
    creative: "(1) 같은 식을 1/√n·Σ√(1+k/n)/√n 처럼 다른 분배로도 쓸 수 있음을 대비시키면 I-SC d2 로 ★3 (2) √(n+k) 를 √(n^2+k^2) 로 바꾸면 √(1+(k/n)^2) 가 되어 역삼각함수 적분이라 범위를 넘음 (3) 분모를 n^2+k^2 꼴 분수로 바꾸면 1104 골조."
```

```yaml
- id: RPM-CALC2-1103
  page: 156
  vendor_label: "유형 02 정적분과 급수의 합 사이의 관계 (2)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{1}{n}\left(e^{\frac{1}{n}}+e^{\frac{2}{n}}+\cdots+e^{\frac{n}{n}}\right)$ 의 값. 5지선다.
  category: "Δx=1/n · x=k/n → ∫(0→1) e^x dx"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(지수함수 기본꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    나열된 합을 Σ 로 되돌리기만 하면 1/n 이 그대로 Δx, e^{k/n} 이 그대로 f(k/n) 인 기본꼴이다. 유형 구역 level 중하 ★1~2 출발에서 통찰 없음·M_total 5 로 −1 조정 → ★1.
  tier: star_1
  mechanism_primary: "Δx=1/n · x=k/n → ∫(0→1) e^x dx → e-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 e^{2k/n}·e^{k/(2n)} 으로 바꿀 수 있음. 제약: 지수 계수를 바꾸면 Δx 와 어긋나 계수 조정이 필요하므로 기본꼴을 유지하려면 앞의 1/n 도 함께 바꿀 것."
    creative: "(1) 앞 계수를 1/n 이 아닌 2/n 으로 두면 계수 조정 통찰이 생겨 ★2(I-RT d1) (2) 항을 k=0 부터 시작시키면 항이 n+1 개라 경계 논의가 붙어 ★2(T-경계) (3) e^{k/n} 이 등비수열임을 이용해 등비합 공식으로도 풀 수 있게 하면 I-SC d2 로 ★3."
```

```yaml
- id: RPM-CALC2-1104
  page: 156
  vendor_label: "유형 02 정적분과 급수의 합 사이의 관계 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\lim\limits_{n\to\infty}\left(\dfrac{1^{2}}{n^{3}+1^{3}}+\dfrac{2^{2}}{n^{3}+2^{3}}+\cdots+\dfrac{n^{2}}{n^{3}+n^{3}}\right)$ 의 값.
  category: "분자·분모를 n^3 으로 나눠 (1/n)(k/n)^2/(1+(k/n)^3) 꼴로 → 치환적분"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Δx 가 보이지 않는 분수합을 분자·분모 모두 n^3 으로 나눠 (1/n)·(k/n)^2/(1+(k/n)^3) 으로 재배치해 정적분 꼴을 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(분수식 → 치환적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항 k^2/(n^3+k^3) 에는 Δx 가 드러나 있지 않아, 분자·분모를 n^3 으로 나눠 1/n 을 하나 떼어내는 재배치가 먼저 필요하다(RT d2). 그 뒤 ∫(0→1)x^2/(1+x^3)dx 를 1+x^3 치환으로 처리하면 (1/3)ln2. 유형 구역 level 중·통찰 1개(d2) → ★2.
  tier: star_2
  mechanism_primary: "k^2/(n^3+k^3) = (1/n)·(k/n)^2/(1+(k/n)^3) → ∫(0→1)x^2/(1+x^3)dx → (ln2)/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\ln 2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 차수를 k/(n^2+k^2) 처럼 한 단계 낮추거나 n^3+2k^3 처럼 계수를 넣을 수 있음. 제약: 분자가 분모의 도함수의 상수배라야 로그 치환으로 끝나고, 차수 차이가 1 이어야 1/n 이 정확히 하나 떨어짐."
    creative: "(1) 분모를 n^2+k^2 로 두면 ∫1/(1+x^2) 라 역삼각함수가 필요해 이 과목 범위를 넘음 — 피할 것 (2) 마지막 항을 n^2/(n^3+n^3) 대신 (n+1)^2/(n^3+(n+1)^3) 로 두면 항 수·구간 경계 논의가 생겨 ★3(T-경계) (3) 극한값을 주고 분모의 계수를 역산하게 하면 ★3(I-BW d2)."
```

```yaml
- id: RPM-CALC2-1105
  page: 156
  vendor_label: "유형 02 정적분과 급수의 합 사이의 관계 (2)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=\sin\pi x$ 에 대하여 $\lim\limits_{n\to\infty}\dfrac{\pi}{n^{2}}\left\{f\left(\dfrac{1}{n}\right)+2f\left(\dfrac{2}{n}\right)+\cdots+nf\left(\dfrac{n}{n}\right)\right\}$ 의 값.
  category: "k 가중을 (k/n) 로 흡수 → π∫x sin πx dx → 부분적분"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "π/n^2 의 1/n 하나를 가중치 k 와 묶어 (k/n) 로 만들고 남은 1/n 을 Δx 로 삼아 ∫x f(x)dx 꼴을 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 합을 정적분으로 나타내기(k 가중 · 부분적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합의 각 항에 붙은 가중치 k 를 1/n 하나와 묶어 (k/n) 로 바꾸는 재배치(RT d2)가 관문이고, 그 뒤 π∫(0→1)x sin πx dx 를 부분적분으로 처리해야 해 계산도 가장 무겁다(M_total 8). 유형 구역 level 상중 → ★3 출발 유지.
  tier: star_3
  mechanism_primary: "π/n^2·k f(k/n) = π(1/n)(k/n)f(k/n) → π∫(0→1)x sin πx dx 부분적분 → 1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 를 cos πx·e^x 로, 앞 계수 π 를 바꿀 수 있음. 제약: 앞 계수가 π 라야 부분적분에서 생기는 1/π 와 상쇄되어 답이 1 로 떨어지고, 가중치가 k 이므로 앞의 n 차수는 반드시 n^2 이어야 함."
    creative: "(1) 가중치를 k^2 으로 올리고 앞을 1/n^3 으로 두면 ∫x^2 f(x)dx 가 되어 부분적분 두 번 ★4 (2) f 를 일반 연속함수로 두고 ∫x f(x)dx 값을 주면 Mₐ 가 올라가고 계산은 빠져 ★3 유지 (3) 가중치를 (n-k) 로 바꾸면 (1-k/n) 로 흡수되어 구간 대칭 활용이 생겨 ★3~4(I-SYM d2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 26 · ★2 8 · ★3 1 · ★4 0 · ★5 0 — 이 범위의 28문이 교과서 드릴 구역(10-1~10-6)이라 ★1 비중이 높고, 유형 구역 7문에서만 ★2~3 이 나온다.
- 통찰형 5 · 절차형 30 · premium 0. 통찰은 모두 I-RT(급수 ↔ 정적분 표현 전환) 계열이며 depth 3 은 없다(d1 3문: 1099·1101·1102 / d2 2문: 1104·1105).
- 실제 insights[] 가 채워진 문항은 5문(1099·1101·1102·1104·1105)이고, 나머지 30문은 `insights: []` 인 절차형이다.
- type_hint 상위 5(묶음 기준): ① 급수의 합 → 정적분 전환 11문(1073~1076·1099~1105) ② 곡선과 좌표축 사이의 넓이 7문(1077~1083) ③ 매개변수 곡선의 속도·거리·길이 6문(1091~1096) ④ 입체도형의 부피 3문(1086~1088) ⑤ 두 곡선 사이의 넓이 2문(1084·1085) — 그 밖에 구분구적법 2문(1071·1072), 수직선 운동 2문(1089·1090), y=f(x) 꼴 곡선의 길이 2문(1097·1098).
- 벤더 난이도 표시(level)가 있는 문항은 5문뿐이다: 중하 2(1100·1103) · 중 2(1101·1104) · 상중 1(1105). 대표문제 태그 2문(1099·1102).
- 그림: 3문(`crop:fig-1071.png` · `crop:fig-1072.png` · `crop:fig-1081.png`). 세 장 모두 발문에 구조가 서술되어 있어 골조·답에 영향이 없다.
- 반복 골조: ㉠ Δx 와 f(a+kΔx) 를 맞추는 재배치, ㉡ 적분 변수를 x/y 중에 고르고 부호·위아래를 판정, ㉢ 단면적 함수의 높이 적분, ㉣ 근호 안 완전제곱 정리(1092·1094·1097·1098 — 이 범위에서 4번 반복).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(이 범위에 2단 이상 어긋난 문항은 없다).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-1083 | 교과서 구역(★1 출발)이지만 이 구역에서 유일하게 부호 전환 구간 분할이 필수(M_total 7). ★2 로 두고 기록 | ★1 / ★2 |
| RPM-CALC2-1090 | 교과서 구역이나 위치·변화량·거리 세 개념 구분 + 절댓값 분할로 ★2. 소문항 3개를 한 블록으로 묶은 점도 기록 | ★1 / ★2 |
| RPM-CALC2-1097 | 근호 안 완전제곱 착안을 I-RT 통찰로 셀지 이 유형의 표준 설계로 볼지 경계. 절차형 ★2 로 둠(1092·1098 과 같은 정책 적용) | ★2 / ★3 |
| RPM-CALC2-1099 | a, b, c 를 등식이 성립하도록 역산하는 부분을 I-BW 로 추가 인정할지 경계. I-RT d1 하나만 셈 | ★2 / ★3 |
| RPM-CALC2-1100 | 유형 구역 level 「중하」이나 풀이 골조가 인쇄된 빈칸 완성형이라 ★1 로 내림(1071 과 같은 정책) | ★1 / ★2 |
| RPM-CALC2-1104 | n^3 으로 나누는 재배치를 depth 1 로 볼지 2 로 볼지 경계. 치환적분이 뒤따르는 점을 반영해 d2 로 두되 ★ 는 2 유지 | ★2 / ★3 |

**카탈로그 차원 메모** (나중에 유형 카탈로그를 만들 때 참고)

- 이 범위에서 가장 많이 반복된 type_hint 는 「급수의 합을 정적분으로 나타내기」 계열 11문이다. 카탈로그에서는 한 유형으로 묶지 말고 최소 세 갈래로 나누는 것이 좋다 — ㉠ **기본꼴**(Δx 와 x=k/n 이 그대로 보임: 1073·1074·1076·1103), ㉡ **계수·구간 조정**(Δx 와 계수가 어긋나 상수를 빼내야 함: 1075·1099·1101·1102), ㉢ **가중·분수 재배치**(Δx 가 아예 보이지 않아 n 거듭제곱을 분배해야 함: 1100·1104·1105). ㉢ 만 통찰 depth 2 가 붙는다.
- 반대로 **통합해도 될 유형**: 「곡선과 x축 사이의 넓이」와 「곡선과 y축 사이의 넓이」는 적분 변수만 다르고 골조가 같으므로 한 유형 아래 두 변형으로 두는 편이 낫다(1077~1083). 「매개변수 곡선이 움직인 거리」(1091~1094)와 「매개변수 곡선의 길이」(1095·1096)도 공식이 같아 한 유형 + 문맥 두 갈래로 충분하다.
- 따로 세워야 할 유형: 「근호 안이 완전제곱이 되도록 설계된 길이·거리」(1092·1094·1097·1098)는 출제 시 계수 설계 제약이 강해 변형 규칙이 다른 유형과 다르므로 독립 유형으로 두는 것이 좋다. 「위치·위치의 변화량·움직인 거리 구분」(1090)도 개념 대비가 목적이라 단순 속도 적분과 분리할 것.
- 이 범위에는 ★4~5 후보가 없다. 단원의 2/3·3/3(유형 UP · 시험에 꼭 나오는 문제 · 실력 Up)에서 I-SC·I-VF·I-SYM·I-XU 가 나올 것으로 보이므로, 카탈로그의 상위 base ★ 는 그쪽 범위를 정독한 뒤 확정하는 것이 안전하다.

