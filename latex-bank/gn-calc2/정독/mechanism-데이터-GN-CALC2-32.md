---
name: mechanism-데이터-GN-CALC2-32
description: 개념원리 미적분Ⅱ 32 정적분과 급수(1/1 · 259~260쪽 · 9문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 32 정적분과 급수
  unit_code: "32"
  part: "1/1"
  extract_range: "259~260쪽 · 259-e3~260-529"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 결정(비면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 32 정적분과 급수 (1/1) 정독 데이터 (v1.0)

이 파일은 259~260쪽 9문항 전수를 다룬다. 구역은 「필수·발전 예제」(필수 예제 1 + 확인체크 2) · 「연습문제 STEP 1」 3 · 「연습문제 STEP 2」 2 · 「연습문제 실력 UP」 1 이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그이며, 이 단원에서는 예제·확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다.

이 단원의 도구는 하나뿐이다 — 급수의 극한을 Δx·f(x_k) 꼴로 복원해 정적분으로 옮기는 것. 그래서 모든 문항이 그 전환을 쓴다. 이 전환 자체를 매번 통찰로 세면 변별 정보가 사라지므로, **합의 일반항이 이미 (b-a)/n · f(a+(b-a)k/n) 꼴로 주어져 읽기만 하면 되는 문항은 절차형**으로, **Σ 앞 계수와 x_k 간격이 어긋나 상수를 따로 뽑아내야 하거나 · Δx 를 인위적으로 만들어야 하거나 · 생략기호 항의 규칙과 끝항을 복원해야 하거나 · 기하 설정을 대수식으로 옮겨야 하는 문항**만 I-RT·I-PD·I-EQV 로 카운트했다. 판정 기준은 각 블록 rationale 에 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-259-e3
  page: 259
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정적분을 이용해 두 극한값을 구하기. ⑴ 계수 2/n 와 지수 1+2k/n 이 그대로 맞물린 표준형 지수 급수 ⑵ (1/n^4)(1^3+2^3+…+n^3) 형태의 거듭제곱 합.
  category: "급수를 Δx·f(x_k) 꼴로 읽기 → 정적분 → 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 극한을 정적분으로 나타내어 계산하기(정적분과 급수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 Σ 앞 계수 2/n 이 x_k 간격과 일치해 구간 [0,2] · f(x)=e^{1+x} 를 바로 읽는다. ⑵ 는 1/n^4 를 (1/n)(k/n)^3 으로 나눠 구간 [0,1] · f(x)=x^3 으로 옮기는 교과 공식 ①의 직접 적용.
    이 단원이 가르치는 두 표준형을 그대로 보여주는 필수 예제라 재구성 통찰 없음. 통찰 0·M_total 5 로 −1 후보지만, 서로 다른 두 표준형을 한 문항에서 다루는 예제 신호를 존중해 ★2 유지.
  tier: star_2
  mechanism_primary: "Σ 를 (b-a)/n · f(a+(b-a)k/n) 꼴로 읽기 → 구간·피적분함수 확정 → 정적분 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $e^3-e$ ⑵ $\dfrac{1}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/259-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 계수와 지수의 쌍(2/n · 1+2k/n → 3/n · 2+3k/n 등)을 함께 바꾼다. 제약: Σ 앞 계수와 x_k 간격이 같아야 표준형이 유지되고, 어긋나면 상수 추출 단계가 생겨 통찰형으로 성격이 바뀐다. ⑵ 지수를 1·2·4제곱으로 바꿔도 되지만 답이 1/(m+1) 로 떨어지도록 분모 차수를 n^{m+1} 에 맞춘다."
    creative: "(1) 밑을 e 대신 2 로 바꿔 ∫2^x 가 나오게(★2 유지) (2) Σ 앞 계수만 어긋나게 주어 상수 추출을 강제(I-RT d1 · ★2 상단) (3) ⑵ 를 (1^3+2^3+…+n^3)/(n^4) 대신 거듭제곱 합 공식으로 직접 극한을 구하게 하면 정적분을 안 써도 되어 이 단원의 골조가 사라진다 — 변형 시 피할 방향."
```

```yaml
- id: GN-CALC2-259-522
  page: 259
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정적분을 이용해 두 극한값을 구하기. ⑴ 계수 π/n 에 일반항 tan^2(kπ/4n) ⑵ 계수 1/n 에 일반항 ln((n+k)/n).
  category: "상수 추출로 Δx 복원 → 정적분 → 삼각·로그 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ Σ 앞 계수 π/n 과 x_k 간격 π/4n 의 불일치를 보고 4 를 밖으로 빼 4∫_0^{π/4} 로 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수와 x_k 간격이 다른 급수를 상수 추출로 정적분화하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 x_k=kπ/4n 이므로 Δx 가 π/4n 인데 앞 계수가 π/n 이다. 4 를 추출하지 않으면 답이 4배 틀린다 — 이 단원 오답의 주된 원인이라 I-RT d1 로 기록. 뒤는 tan^2 x = sec^2 x − 1 의 표준 적분.
    ⑵ 는 계수 1/n · x_k=k/n 이 일치하는 표준형이고 ∫_0^1 ln(1+x)dx 의 부분적분만 남는다. 확인체크 신호는 ★1 출발이나 예제 구역에 붙어 있고 상수 추출·부분적분이 겹쳐 ★2.
  tier: star_2
  mechanism_primary: "x_k 간격으로 Δx 를 정하고 남는 상수를 밖으로 추출 → 구간 확정 → tan^2 = sec^2 − 1 · ln 부분적분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4-\pi$ ⑵ $2\ln 2-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/259-522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 각 계수 kπ/4n 을 kπ/3n · kπ/6n 으로 바꾸면 구간이 [0,π/3]·[0,π/6] 이 되고 추출 상수도 따라 바뀐다. 제약: tan 의 값이 정의되는 구간 안이어야 하고(π/2 배제) 결과가 유리수+π 꼴로 떨어지도록 끝값을 특수각으로 유지. ⑵ 는 (n+k)/n 을 (n+2k)/n 으로 바꾸면 구간이 [0,2] 로 늘어나며 부분적분 결과만 달라진다."
    creative: "(1) 피적분함수를 tan^2 대신 sec^2·cot^2 로 바꿔 같은 상수 추출 골조 유지(★2) (2) 추출 상수를 문자 a 로 두고 극한값이 주어졌을 때 a 를 구하게 하면 역방향 I-BW 가 붙어 ★3 (3) ⑵ 의 로그 안을 (n+k)/(n+2k) 로 바꾸면 ln 두 개의 차로 갈라져 부분적분이 두 번, Mₖ 상승 ★3."
```

```yaml
- id: GN-CALC2-259-523
  page: 259
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정적분을 이용해 두 극한값을 구하기. ⑴ (1/n)(e^{2/n}+e^{4/n}+…+e^{2n/n}) ⑵ (1/n)(sin(π/n)+sin(2π/n)+…+sin(nπ/n)).
  category: "생략기호 합을 Σ 로 복원 → 정적분 → 지수·삼각 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "생략기호로 쓴 합의 극한을 정적분으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 항의 규칙(e^{2k/n} · sin(kπ/n))이 첫 세 항에서 바로 보이고 끝항이 k=n 을 명시해 준다. Σ 로 복원하면 계수 1/n 과 x_k=k/n 이 맞아떨어져 f(x)=e^{2x} · sin(πx) 를 그대로 읽는다.
    복원에 추가 재구성이 없어 절차형. 통찰 0·M_total 5 로 −1 후보지만 소문항 두 개가 지수·삼각 적분을 각각 요구해 ★2 유지(확인체크 ★1 출발 +1).
  tier: star_2
  mechanism_primary: "생략기호 항 → Σ_{k=1}^{n} 복원 → 계수 1/n 을 Δx 로 읽어 [0,1] 정적분 → 지수·삼각 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}(e^2-1)$ ⑵ $\dfrac{2}{\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/259-523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수 배수 2 를 3·1/2 로 바꾸면 f(x)=e^{3x}·e^{x/2} 가 되고 답이 (e^3−1)/3 꼴로 따라간다. ⑵ 의 π 를 2π 로 바꾸면 ∫_0^1 sin 2πx dx = 0 이 되어 답이 0 이 되므로 피한다(반주기가 사라짐). 제약: 끝항이 k=n 임이 생략기호에서 분명히 읽혀야 한다."
    creative: "(1) 끝항을 e^{2(n-1)/n} 로 바꿔 k=n−1 까지로 만들면 극한값은 같지만 경계 처리 T-경계가 추가(★2 상단) (2) 계수를 2/n 으로 바꾸고 지수는 그대로 두어 상수 추출을 강제하면 I-RT d1 · ★2 (3) sin 대신 sin^2 을 넣어 반각 변환을 요구하면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-260-524
  page: 260
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 y=x^3 과 직선 x=1, x축으로 둘러싸인 도형의 넓이를 구분구적법으로 구하기.
  category: "구간 n등분 → 직사각형 넓이 합 → 극한 → 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구분구적법으로 곡선 아래 넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 방법(구분구적법)을 지정하므로 [0,1] 을 n등분해 (1/n)Σ(k/n)^3 을 세우는 절차가 그대로 지시돼 있다. 거듭제곱 합 공식으로 직접 극한을 잡아도 되고 정적분으로 옮겨도 되지만 두 갈래의 부담 차이가 작아 전략 선택(I-SC)으로 보지 않는다.
    교과서가 정의로 제시하는 표준 절차라 절차형. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "[0,1] n등분 → 직사각형 넓이 합 (1/n)Σ(k/n)^3 → 극한 → ∫_0^1 x^3 dx"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/260-524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=x^2·y=x^4 로, 직선을 x=2 로 바꿀 수 있다. 제약: x=a 로 바꾸면 Δx=a/n · x_k=ak/n 이 되어 a^{m+1} 이 밖으로 빠지므로 거듭제곱 합 공식이 여전히 쓸 수 있는 차수(1~3)로 유지한다."
    creative: "(1) 둘러싸는 직선을 x=1 대신 y=1 로 바꿔 가로 분할을 요구하면 역함수 관점이 붙어 I-RT d1 · ★3 (2) 두 곡선 사이 넓이로 확장하면 차 함수의 분할 합이 되어 ★3 (3) 구분구적법 지정을 빼고 '넓이를 구하시오'로만 두면 정적분 한 줄이 되어 ★1 로 내려간다."
```

```yaml
- id: GN-CALC2-260-525
  page: 260
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    Σ(3+2k/n)^2 × (1/n) 의 극한을 정적분으로 바르게 나타낸 것을 보기 ㄱ·ㄴ·ㄷ 에서 모두 고르기.
  category: "Δx 와 구간의 동치 판정 → 보기 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Σ 앞 계수 1/n 이 Δx 이므로 구간 길이는 1 임을 먼저 확정하고, 각 보기의 구간·피적분함수 쌍이 원 급수와 동치인지 대조"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 정적분 표현이 동치인지 판정하기(구간과 Δx 의 대응)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x_k 가 3+2k/n 이라 구간을 [3,5] 로 보고 싶어지지만 Σ 앞 계수가 1/n 이므로 Δx=1/n, 즉 구간 길이는 1 이다. ㄱ·ㄴ 은 Δx 를 2/n 로 본 것이라 값이 2배가 되고 ㄷ 만 동치다.
    보기 셋을 원 급수와 각각 대조해 기각하는 구조라 I-EQV d1. 함정이 구간(T-범위)과 계수(T-단위) 둘이라 Mₜ=2. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "Σ 앞 계수 = Δx 로 구간 길이 확정 → 치환으로 각 보기를 원 급수 꼴로 환원 → 일치하는 것만 채택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/260-525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반항의 3·2 를 (1+3k/n)^2 등으로 바꾸고 보기의 구간도 따라 바꾼다. 제약: 오답 보기는 Δx 를 x_k 간격으로 착각했을 때 나오는 꼴이어야 함정이 살아 있고, 정답 보기는 정확히 하나만 남도록 배수 관계를 조정한다."
    creative: "(1) 계수를 2/n 으로 바꿔 ㄱ·ㄴ 이 정답이 되고 ㄷ 이 오답이 되게 뒤집기(★2 유지 · 같은 골조) (2) 보기를 두 개 이상 정답으로 만들어 치환 동치까지 확인하게 하면 ★3 (3) 정적분 표현을 고르는 대신 값을 구하게 하면 판정 골조가 사라지고 단순 계산 ★1~2."
```

```yaml
- id: GN-CALC2-260-526
  page: 260
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=2√x 에 대하여 Σ (6/n) f'(1+3k/n) 의 극한값 구하기.
  category: "도함수 계산 → 상수 추출로 Δx 복원 → 정적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x_k 간격이 3/n 인데 앞 계수가 6/n 이므로 2 를 추출해 2∫_1^4 f'(x)dx 로 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수가 들어간 급수를 정적분으로 나타내어 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=1/√x 를 먼저 구한 뒤, 6/n = 2·(3/n) 로 갈라 구간 [1,4] 와 상수 2 를 분리하는 것이 골조다. 추출을 놓치면 답이 절반이 된다 — I-RT d1.
    마무리는 ∫_1^4 f'(x)dx = f(4)−f(1) 로 미적분 기본정리를 그대로 써도 되고 x^{-1/2} 를 직접 적분해도 같아 전략 분기로 보지 않았다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x) 계산 → 6/n = 2·(3/n) 로 상수 추출 → 구간 [1,4] 확정 → 2{f(4)−f(1)}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/260-526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=2√x 의 계수와 시작점 1, 간격 3k/n, 앞 계수 6/n 을 함께 바꾼다. 제약: 앞 계수는 x_k 간격의 정수배로 두어야 추출 함정이 살아 있고, 구간 끝값(여기서는 4)은 √ 가 유리수로 떨어지는 완전제곱수로 유지한다."
    creative: "(1) f 를 ln x·e^x 로 바꿔 같은 추출 골조 유지(★2) (2) f' 대신 f 를 넣으면 실제 적분이 필요해져 Mₖ 상승(★2~3) (3) 극한값을 주고 앞 계수나 구간 끝값을 역으로 구하게 하면 I-BW 가 붙어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-260-527
  page: 260
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정적분을 이용해 (1/√n)(1/√2 + 1/√4 + 1/√6 + … + 1/√(2n)) 의 극한값 구하기.
  category: "항 규칙 복원 → 1/n 인위적 분배로 Δx 생성 → 정적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Δx 가 겉으로 없는 1/√(2nk) 꼴을 (1/n)·(1/√2)·(k/n)^{-1/2} 로 재배치해 Δx·f(x_k) 를 인위적으로 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "Δx 가 드러나지 않는 합을 1/n 분배로 정적분화하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반항은 1/√(2nk) 이고 앞에 1/n 이 보이지 않는다. √n 을 n 으로 바꾸는 재배치(1/√(2nk) = (1/n)·(1/√2)·(n/k)^{1/2})를 스스로 만들어야 구간 [0,1] · f(x)=x^{-1/2} 가 나온다 — 앞 문항들의 상수 추출보다 한 단계 깊어 I-RT d2.
    분모가 0 이 되는 x=0 경계(T-경계)와 구간 설정(T-범위)으로 Mₜ=2. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "항 규칙 1/√(2k) 복원 → 1/√n 을 (1/n)·√n 으로 나눠 Δx 생성 → (1/√2)∫_0^1 x^{-1/2}dx"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/260-527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 √(2k) 를 √(3k)·√(k) 로 바꾸면 밖으로 빠지는 상수만 1/√3·1 로 달라진다. 제약: 거듭제곱 지수는 −1 보다 커야 x=0 근처 적분이 수렴하고(−1/2 가 표준), 답이 무리수 한 항으로 떨어지도록 상수를 고른다."
    creative: "(1) 1/√ 를 1/∛ 로 바꿔 지수만 −1/3 으로(★3 유지) (2) 분모를 √(n+k) 로 바꾸면 구간이 [1,2] 로 옮겨가고 재배치가 (1/n)(1+k/n)^{-1/2} 로 더 표준이 되어 ★2 로 내려간다 (3) 지수를 −1 로 만들면 발산해 ★ 가 아니라 문제가 성립하지 않는다 — 변형 금지선."
```

```yaml
- id: GN-CALC2-260-528
  page: 260
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    AB=2, BC=1, ∠B=π/2 인 직각삼각형 ABC 에서 변 AB 를 n등분한 점 B_k 에서 BC 에 평행한 선분을 그어 AC 와 만나는 점을 C_k 라 할 때, (2/n)Σ_{k=1}^{n-1} (B_kC_k)^2 의 극한값 구하기.
  category: "닮음비로 선분 길이 표현 → 제곱 합 → 정적분"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 AB_kC_k 와 ABC 의 닮음비 k/n 을 읽어 기하 설정을 B_kC_k = k/n 이라는 대수식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형의 n등분에서 생기는 길이의 제곱 합을 정적분으로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB_k = 2k/n 이므로 닮음비가 k/n 이고 BC=1 에 대응하는 B_kC_k 가 k/n 이다. 여기까지가 이 문항의 전부이며, 그 뒤 (2/n)Σ(k/n)^2 은 2∫_0^1 x^2 dx 로 바로 옮겨진다. 기하 → 대수 전환이 핵심이라 I-RT d2.
    합이 k=n−1 까지라 항 하나가 빠지지만 극한에서는 영향이 없다는 경계 판단(T-경계)과 구간 설정(T-범위)으로 Mₜ=2, 설정이 일반 n 에 대한 매개변수 표현이라 Mₐ=2. 그림은 발문이 구성 전체를 서술하고 있어 골조·답에 영향이 없다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "닮음비 k/n → B_kC_k = k/n → (2/n)Σ(k/n)^2 → 2∫_0^1 x^2 dx"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: "crop:fig-260-528.png"
  latex: latex-bank/gn-calc2/items/260-528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC 의 길이(2·1)와 Σ 앞 계수 2/n 을 함께 바꾼다. 제약: 그림의 라벨(B_k·C_k 의 번호 방향, A 에서 가까운 쪽부터)은 고정해야 닮음비가 k/n 으로 유지되고, 앞 계수를 바꾸면 추출 상수가 달라지므로 답의 분모와 맞춰 둔다."
    creative: "(1) 제곱 합 대신 선분 길이의 합으로 바꾸면 ∫x dx 가 되어 계산은 쉬워지나 골조는 유지(★2~3) (2) B_kC_k 를 지름으로 하는 반원 넓이의 합으로 바꾸면 π/2 배만 붙고 같은 골조(★3) (3) 등분 대상을 빗변 AC 로 바꾸면 닮음비가 그대로 k/n 이 아니어서 좌표 설정이 필요해지고 ★4 로 올라간다."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-260-529
  page: 260
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정적분을 이용해 n/(n^2+1^2) + n/(n^2+2^2) + n/(n^2+3^2) + … + n/(2n^2) 의 극한값 구하기.
  category: "끝항으로 항 수 확정 → n^2 로 나눠 Δx 복원 → 삼각치환 정적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "끝항 n/(2n^2) 를 n/(n^2+n^2) 로 읽어 일반항 n/(n^2+k^2) 와 k 가 n 까지임을 확정"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 n^2 로 나눠 (1/n)·1/(1+(k/n)^2) 로 재배치해 Δx·f(x_k) 꼴을 만들어 냄"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "n/(n^2+k^2) 꼴 합의 극한을 정적분과 삼각치환으로 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    끝항이 n/(2n^2) 로 위장돼 있어 n/(n^2+n^2) 로 되읽지 않으면 항 수를 못 정한다(I-PD d1). 이어서 분모를 n^2 로 나눠야 (1/n)·1/(1+(k/n)^2) 가 드러나고 구간 [0,1] · f(x)=1/(1+x^2) 가 나온다(I-RT d2).
    마지막 ∫_0^1 dx/(1+x^2) 는 x=tanθ 치환이 필요해 앞 문항들의 직접 적분과 부담이 다르다. 실력 UP ★4 출발 · 통찰 2개(RT·PD 로 §2.13 ★4 게이트 통과) → ★4 유지.
    [분류 이슈] 통찰 두 개가 모두 이 단원 표준 도구의 변형이라 학생 체감은 ★3 에 가까울 수 있음. 벤더 실력 UP 신호를 따라 라벨은 ★4 로 두고 기록만 함(1단 차이).
  tier: star_4
  mechanism_primary: "끝항 n/(2n^2)=n/(n^2+n^2) 로 항 수 확정 → 분모 n^2 로 나눠 (1/n)·1/(1+(k/n)^2) → ∫_0^1 dx/(1+x^2) 를 x=tanθ 치환"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/260-529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 n 을 2n·kn 으로, 분모의 n^2+k^2 를 n^2+2k^2·4n^2+k^2 로 바꿀 수 있다. 제약: 끝항을 반드시 약분된 꼴(2n^2 처럼)로 제시해야 항 수 복원 함정이 살아 있고, 치환 뒤 적분 상한이 특수각(π/4·π/3·π/6)이 되도록 계수를 고른다."
    creative: "(1) 분자를 k 로 바꾸면 (1/n)·(k/n)/(1+(k/n)^2) 가 되어 로그 적분으로 바뀌고 치환 유형만 교체(★3~4) (2) 합을 k=1 부터 2n 까지로 늘리면 구간이 [0,2] 가 되어 끝항 해석이 더 어려워지고 ★4 상단 (3) 끝항을 n/(2n^2) 대신 n/(n^2+n^2) 그대로 적으면 I-PD 가 사라져 ★3 으로 내려간다 — 이 문항의 ★4 를 지탱하는 지점."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 0 · ★2 6 · ★3 2 · ★4 1 · ★5 0
- 통찰형 6 · 절차형 3 · premium 0
- 통찰 유형 분포: I-RT 5 · I-EQV 1 · I-PD 1 (총 7건 · depth 1 이 4건 · depth 2 가 3건)
- type_hint 상위: 「상수 추출·Δx 복원으로 정적분화」 3(259-522 · 260-526 · 260-527) · 「표준형 급수를 정적분으로 나타내기」 2(259-e3 · 259-523) · 「구분구적법으로 넓이」 1 · 「정적분 표현의 동치 판정」 1 · 「도형 n등분 길이 제곱 합」 1 · 「n/(n^2+k^2) 꼴」 1
- 대상층: 중하위권 3 · 중위권 5 · 중상위권 1
- 그림: 1문(`crop:fig-260-528.png`) — 발문이 구성을 전부 서술해 골조·답 판정에 크롭을 열 필요가 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-260-529 | 벤더 「실력 UP」 ★4 이나 통찰 두 개가 모두 단원 표준 도구(끝항 복원·분모 나누기)의 변형이라 체감은 ★3 에 가까움. 라벨은 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 축은 하나다 — **급수 ↔ 정적분 전환**. 따로 세워야 할 유형은 전환의 *난이도를 가르는 지점*이지 피적분함수의 종류가 아니다.
- 따로 세울 유형 세 가지: ① **표준형 판독**(Σ 앞 계수와 x_k 간격이 일치 · 259-e3 · 259-523) ② **상수 추출형**(계수와 간격 불일치 · 259-522 · 260-526) ③ **Δx 생성형**(1/n 이 겉으로 없어 재배치가 필요 · 260-527 · 260-529). 이 셋이 ★2 / ★2~3 / ★3~4 로 자연스럽게 갈린다.
- 통합해도 될 유형: 피적분함수만 다른 지수·로그·삼각 변주(259-e3 ⑴ · 259-522 ⑵ · 259-523)는 별도 유형이 아니라 같은 유형의 numeric 변형으로 묶는다.
- 별도 계열로 둘 것: **구분구적법 서술형**(260-524)과 **기하 설정 → 급수**(260-528)는 급수 식이 주어지지 않고 학생이 세워야 하므로, 위 3유형과 다른 계열(「급수 세우기」)로 분리한다.
- **정적분 표현의 동치 판정**(260-525)은 값을 구하지 않는 유일한 문항으로, 보기 판정형 소유형이 필요하다.
