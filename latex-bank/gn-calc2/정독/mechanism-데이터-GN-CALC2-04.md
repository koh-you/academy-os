---
name: mechanism-데이터-GN-CALC2-04
description: 개념원리 미적분Ⅱ 04 등비수열의 극한(1/1 · 30~36쪽 · 30문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star 는 null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 04 등비수열의 극한
  unit_code: CALC2-04
  part: "1/1"
  extract_range: "30~36쪽 · 30-40~36-65"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 미적분Ⅱ 는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 유무로만 가름(빈 배열이면 절차형). anchor_status 는 전 문항 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위는 그림 첨부 문항 없음)
---

# 개념원리 미적분Ⅱ · 04 등비수열의 극한 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 30~36쪽, 「04 등비수열의 극한」 단원 전체 30문항(`30-40`~`36-65`)을 다룬다. 구역은 개념원리 익히기 3문 · 필수·발전 예제 구역 10문(필수 예제 4 + 확인체크 6) · 연습문제 STEP 1 8문 · STEP 2 7문 · 실력 UP 2문이다. 그림 크롭이 붙은 문항은 없고(`36-61`·`36-64` 는 좌표평면 상황을 발문 글만으로 서술한다), 답은 전사·검수 단계에서 답지와 이미 대조된 값을 그대로 옮겼다.

벤더 난이도 신호는 구역과 태그로 읽었다. 개념원리 익히기(통번호)는 ★1, 필수 예제(`쪽-eN` · tag 「필수」)는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼았다. **필수·발전 예제 구역 안의 「확인체크」는 짝이 되는 바로 앞 필수 예제와 같은 골조를 반복하는 확인 문항이므로 개념원리 익히기의 ★1 이 아니라 그 예제와 같은 ★2 를 출발점으로 썼다**(이 범위에서만 쓰는 국소 규칙이 아니라 개념원리 고등 공통 구조). 출발점에서 M_total·통찰로 ±1 조정했다.

이 단원에서 「분모·분자를 밑이 가장 큰 항으로 나눈다」·「$\infty-\infty$ 꼴을 최대항으로 묶는다」는 단원의 **표준 절차**로 보고 통찰로 카운트하지 않았다. 그렇게 하면 거의 모든 문항이 통찰형이 되어 변별이 사라지기 때문이다. 대신 ⑴ 수렴하는 수열이 섞여 유계성을 써야 하는 경우(I-EQV) ⑵ 공비가 $r$·$x$ 같은 매개변수여서 $|r|<1$·$r=1$·$|r|>1$ 로 갈리는 경우(I-MI) ⑶ 첫째항 0 분기(I-MI) ⑷ 극한값을 주고 공비를 역추적하는 경우(I-BW) ⑸ 로그·삼각·나머지정리·약수 총합처럼 다른 단원 도구가 공비 자리에 들어오는 경우(I-XU) ⑹ 기하 배치를 지수 식으로 옮기는 경우(I-RT)를 통찰로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes.numeric` / `.creative` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-30-40
  page: 30
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 여섯 등비수열의 수렴·발산 조사. 공비가 $\dfrac{\sqrt2}{2}$, $-2$, $\left(\dfrac23\right)^{1-n}$,
    $\dfrac{(-3)^n}{2^{2n}}$, $5^n\times2^{-n}$, $\dfrac{4^{-n}}{3^{-n}}$ 처럼 지수법칙으로 정리해야 보이는 꼴.
  category: "지수법칙으로 공비 추출 → 수렴 조건 $-1<r\\le1$ 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열 {r^n} 의 수렴·발산 판정(공비 추출)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 항을 $r^n$ 한 덩어리로 정리하는 지수법칙 한 단계 + 수렴 조건 대조 한 단계가 전부다.
    ⑶ ⑹ 처럼 지수가 $1-n$·$-n$ 이라 공비가 역수로 뒤집히는 지점이 유일한 걸림돌.
    익히기 구역 출발점 ★1 · 통찰 0 · M_total 5 로 조정 없음.
  tier: star_1
  mechanism_primary: "지수법칙으로 $a\\,r^n$ 꼴로 정리 → 공비 $r$ 를 $-1<r\\le1$ 과 비교 → 수렴·발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 수렴 ⑵ 발산 ⑶ 발산 ⑷ 수렴 ⑸ 발산 ⑹ 수렴'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/30-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 지수를 바꿀 수 있다($\\sqrt3/2$, $(3/4)^{1-n}$, $(-5)^n/3^{2n}$ 등). 제약 — 정리 후 공비가 $-1<r\\le1$ 의 안·밖으로 명확히 갈려야 하고, $r=1$ 이나 $r=-1$ 을 경계 예로 넣으려면 수렴·발산 판정이 달라지므로 답을 다시 지정해야 한다."
    creative: "(1) 수렴하는 것만 고르는 5지선다로(★1 유지) (2) 공비를 $\\log$·삼각 식으로 감싸면 I-XU 가 붙어 ★2 (3) 공비에 미지수를 넣어 수렴 조건을 묻게 바꾸면 30-42 유형이 되어 ★2."
```

```yaml
- id: GN-CALC2-30-41
  page: 30
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 지수 분수꼴 수열 $\dfrac{2^{n+1}}{2^n+1}$, $\dfrac{4^n}{3^n-4^n}$, $\dfrac{3^n-5^n}{2^n-5^n}$,
    $\dfrac{2^n+7^n}{2^n+3^n}$ 의 수렴·발산 조사와 극한값.
  category: "밑이 가장 큰 항으로 분모·분자를 나누기 → 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수 유리식의 극한(최대 밑으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문제 모두 「밑이 가장 큰 항으로 나눈다」는 단원 표준 절차 한 가지로 끝난다.
    ⑷ 만 분자의 최대 밑 $7$ 이 분모의 최대 밑 $3$ 보다 커서 발산으로 갈리는 것이 판별점.
    익히기 ★1 출발 · 통찰 0 · M_total 6 이라 −1 조건(≤5)에도 걸리지 않아 ★1 유지.
  tier: star_1
  mechanism_primary: "분모·분자를 최대 밑의 거듭제곱으로 나누기 → $(작은밑/큰밑)^n\\to0$ → 극한값 또는 발산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $2$ ⑵ 수렴, $-1$ ⑶ 수렴, $1$ ⑷ 발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/30-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 조합(2·3·5·7)과 지수 이동($n+1$, $2n$, $n-1$)을 바꿀 수 있다. 제약 — 분모의 최대 밑이 분자의 최대 밑보다 작으면 발산, 같으면 계수비가 답이 되므로 의도한 답 유형(수렴/발산)에 맞춰 밑의 대소를 먼저 정한다."
    creative: "(1) 극한값을 주고 미지의 밑을 역추적하게 하면 I-BW 가 붙어 ★2~3 (2) 분모에 $\\sqrt{\\,}$ 를 씌워 밑을 반차수로 만들면 31-e10 ⑵ 골조(★2) (3) 수렴하는 것의 개수를 묻는 합답형으로 바꾸면 ★2."
```

```yaml
- id: GN-CALC2-30-42
  page: 30
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $1,\;2r,\;4r^2,\;8r^3,\cdots$ ⑵ $1,\;-\dfrac r2,\;\dfrac{r^2}4,\;-\dfrac{r^3}8,\cdots$
    이 수렴하도록 하는 실수 $r$ 의 값의 범위.
  category: "나열된 항에서 공비 읽기 → 수렴 조건 부등식 $-1<(공비)\\le1$ 풀기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공비에 미지수가 있는 등비수열의 수렴 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공비를 $2r$·$-\dfrac r2$ 로 읽어내는 한 단계 + 수렴 조건 부등식을 푸는 한 단계.
    통찰은 없지만 ⑵ 에서 음수로 나누며 부등호가 뒤집히고 $r=1$ 쪽 등호만 살아남는 T-부호·T-경계 함정이 둘 다 걸려 M_total 7.
    익히기 ★1 출발에서 +1 해 ★2.
  tier: star_2
  mechanism_primary: "항의 비로 공비 결정 → $-1<공비\\le1$ → 부등식 풀이(부호 반전·등호 위치 주의) → $r$ 범위"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{1}{2}<r\le\dfrac{1}{2}$ ⑵ $-2\le r<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/30-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 계수($2r\\to3r$, $-r/2\\to-r/3$)를 바꿀 수 있다. 제약 — 등호가 붙는 쪽이 공비 $=1$ 이 되는 끝점이므로 계수의 부호를 바꾸면 답의 등호 위치도 함께 뒤집어야 한다. 첫째항은 0 이 아니어야 분기가 안 생긴다."
    creative: "(1) 첫째항을 $r-1$ 처럼 0 이 될 수 있는 식으로 바꾸면 첫째항 0 분기(I-MI)가 생겨 32-e12 골조 ★3 (2) 공비를 이차식으로 주면 이차부등식이 추가돼 ★3 (3) 수렴 조건 대신 「수렴하는 정수 $r$ 의 개수」를 물으면 경계 처리 부담이 늘어 ★2 유지."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-31-e10
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\dfrac{8^{n+1}+3^{2n-2}}{3^{2n}-8^n}$ ⑵ $\dfrac{3^{n+1}+2^{n+1}}{\sqrt{9^n+2^n}}$ ⑶ $3^n-2^n$
    의 수렴·발산 조사와 극한값.
  category: "밑 통일($3^{2n}=9^n$, $\\sqrt{9^n}=3^n$) → 최대 밑으로 나누기 / 최대항으로 묶기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한 (1) — 밑 통일 후 최대 밑으로 나누기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $3^{2n}=9^n$ 으로 밑을 통일해야 $9^n$ 이 최대임이 보이고, ⑵ 는 근호 안을 $9^n$ 기준으로 봐야 분모가 $3^n$ 규모임이 보인다.
    ⑶ 은 $\infty-\infty$ 꼴을 $3^n\left(1-(2/3)^n\right)$ 로 묶는 단원 표준 처리.
    세 처리 모두 이 단원의 표준 절차라 통찰로 세지 않았고, 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지수를 같은 밑으로 정리 → 최대 밑으로 나누거나 최대항으로 묶기 → 극한"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $\dfrac{1}{9}$ ⑵ 수렴, $3$ ⑶ 발산'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/31-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 쌍(8 과 9, 2 와 3)과 지수 이동($n+1$, $2n-2$)을 바꿀 수 있다. 제약 — 밑을 통일했을 때 분모의 최대 밑이 분자의 최대 밑 이상이어야 수렴하고, 근호형은 근호 안 최고차 밑이 완전제곱이어야 답이 유리수로 떨어진다."
    creative: "(1) ⑵ 의 근호를 세제곱근으로 바꿔 $\\sqrt[3]{27^n}$ 꼴로(★2 유지) (2) ⑶ 을 $\\sqrt{9^n+3^n}-3^n$ 같은 유리화형으로 바꾸면 I-RT 가 붙어 ★3 (3) 분자·분모의 최대 밑을 같게 두고 계수만 남기면 극한이 계수비가 되어 ★1 로 내려간다."
```

```yaml
- id: GN-CALC2-31-e11
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    수렴하는 수열 $\{a_n\}$ 에 대하여 $\lim\limits_{n\to\infty}\dfrac{4^{n+1}+2^na_n}{4^na_n-3^{n+2}}=2$ 일 때
    $\lim\limits_{n\to\infty}a_n$ 의 값.
  category: "분모·분자를 $4^n$ 으로 나누기 → 유계성으로 소멸항 처리 → 극한값 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\{a_n\\}$ 이 수렴하므로 유계 → $(2/4)^na_n\\to0$, $(3/4)^n\\to0$ 으로 처리해 $\\dfrac{4}{\\alpha}=2$ 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 극한 (2) — 수렴하는 수열이 섞인 지수 유리식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $4^n$ 으로 나누면 $\dfrac{4+(1/2)^na_n}{a_n-9\cdot(3/4)^n}$ 이 되고, 여기서 $a_n$ 이 수렴(=유계)이라는 조건을 써야
    $(1/2)^na_n\to0$ 을 정당화할 수 있다. 조건을 그냥 「$a_n\to\alpha$」로만 읽으면 이 항을 왜 버리는지 설명이 안 된다.
    통찰 1개(EQV d1) · M_total 7 · 필수 예제 ★2 출발 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "$4^n$ 으로 나누기 → 유계성으로 $(2/4)^na_n\\to0$ → $4/\\alpha=2$ → $\\alpha=2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/31-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지배 밑 $4$ 와 곁밑 $2$·$3$, 그리고 우변 극한값 $2$ 를 바꿀 수 있다. 제약 — $a_n$ 이 붙은 항 중 하나는 지배 밑과 같은 밑이어야 $\\alpha$ 가 식에 남고, 나머지 밑은 지배 밑보다 작아야 0 으로 사라진다. 우변 값이 0 이면 $\\alpha$ 가 무한대가 되어 모순이므로 0 은 피한다."
    creative: "(1) $a_n$ 을 분모에만 두고 분자를 상수로 하면 역수 관계가 되어 ★2 유지 (2) $\\{a_n\\}$ 이 수렴한다는 전제를 빼고 발산 가능성까지 따지게 하면 I-VF 가 추가돼 ★3(36-62 골조) (3) 극한값을 미지수 $k$ 로 두고 $\\alpha$ 를 $k$ 로 표현하게 하면 $M_a$ 가 올라 ★3."
```

```yaml
- id: GN-CALC2-31-43
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\dfrac{\sqrt{5^n}+1}{2^n}$ ⑵ $\dfrac{3^{n+1}-2^{2n}}{3^n+2^{2n+1}}$ ⑶ $\dfrac{3^n+3^{-n}}{3^n-3^{-n}}$
    의 수렴·발산 조사와 극한값.
  category: "밑 통일($\\sqrt{5^n}=(\\sqrt5)^n$, $2^{2n}=4^n$) → 최대 밑으로 나누기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한 (1) — 밑 통일 후 최대 밑으로 나누기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    31-e10 과 같은 골조의 확인 문항. ⑴ 은 $(\sqrt5/2)^n$ 의 공비가 1 보다 큼을 알아채면 끝,
    ⑵ 는 $2^{2n}=4^n$ 으로 통일해야 최대 밑이 보이고, ⑶ 은 $3^{-n}\to0$ 만 쓰면 된다.
    통찰 없음 · M_total 6 · 확인체크(필수 예제 짝) ★2 출발 유지.
  tier: star_2
  mechanism_primary: "$\\sqrt{5^n}=(\\sqrt5)^n$·$2^{2n}=4^n$ 으로 밑 통일 → 최대 밑으로 나누기 → 극한"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 발산 ⑵ 수렴, $-\dfrac{1}{2}$ ⑶ 수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/31-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 밑(5→7·3)과 계수(2배·3배)를 바꿀 수 있다. 제약 — ⑴ 은 $\\sqrt{밑}$ 과 분모 밑의 대소로 수렴·발산이 갈리므로 $\\sqrt5>2$ 같은 대소 관계를 먼저 확정한다. ⑶ 은 분모가 0 이 되지 않도록 $3^n>3^{-n}$ 을 유지."
    creative: "(1) ⑶ 을 $\\dfrac{a^n+a^{-n}}{a^n-a^{-n}}$ 로 일반화해 $a$ 의 범위별 극한을 묻게 하면 I-MI 가 붙어 ★3 (2) ⑴ 의 분모를 $(\\sqrt5)^n$ 과 같은 밑으로 맞추면 극한이 1 이 되어 ★1 (3) 세 수열의 극한값의 합을 묻는 단답형으로 묶으면 ★2 유지."
```

```yaml
- id: GN-CALC2-31-44
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수렴하는 수열 $\{a_n\}$ 에 대하여 $\lim\limits_{n\to\infty}\dfrac{3^na_n+5^{n+1}}{5^na_n-3^n}=2$ 일 때
    $\lim\limits_{n\to\infty}a_n$ 의 값.
  category: "분모·분자를 $5^n$ 으로 나누기 → 유계성으로 소멸항 처리 → 극한값 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\{a_n\\}$ 의 수렴(유계)을 써서 $(3/5)^na_n\\to0$ 을 정당화하고 $\\dfrac{5}{\\alpha}=2$ 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 극한 (2) — 수렴하는 수열이 섞인 지수 유리식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    31-e11 의 확인 문항. 지배 밑이 $5$ 이고 $a_n$ 이 붙은 항이 분자에서는 작은 밑($3^n$), 분모에서는 큰 밑($5^n$)이라
    나눈 뒤 분자에 상수 5, 분모에 $\alpha$ 만 남는다.
    통찰 1개(EQV d1) · M_total 7 · ★2 유지.
  tier: star_2
  mechanism_primary: "$5^n$ 으로 나누기 → $(3/5)^na_n\\to0$ → $5/\\alpha=2$ → $\\alpha=5/2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/31-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 쌍(3·5)과 지수 이동($n+1$), 우변 값 2 를 바꿀 수 있다. 제약 — $a_n$ 이 분모에서 지배 밑과 짝을 이뤄야 $\\alpha$ 가 분모에 남고, 우변 값이 답 $\\alpha$ 의 분모가 되므로 답을 유리수로 만들려면 우변을 정수·간단한 분수로 둔다."
    creative: "(1) $a_n$ 을 분자의 지배 밑 쪽에 붙이면 $\\alpha$ 가 분자로 가 답이 역수 관계로 바뀐다(★2 유지) (2) $a_n$ 이 수렴한다는 조건을 「$\\{a_n\\}$ 이 유계」로 약화하면 극한 존재를 스스로 논증해야 해 ★3 (3) 극한값 조건을 부등식으로 주면 I-MI 가 추가돼 ★3."
```

```yaml
- id: GN-CALC2-32-e12
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\{x^n(x-2)^n\}$ ⑵ $\{x(2-x)^n\}$ 이 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "공비 한 덩어리로 묶기 → $-1<공비\\le1$ · 첫째항 0 분기 → 이차부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 첫째항 $x=0$ 이면 공비와 무관하게 모든 항이 0 이라 수렴 — 공비 조건과 독립한 별도 경우로 따로 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 — 공비 부등식과 첫째항 0 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $x^n(x-2)^n=(x^2-2x)^n$ 으로 묶은 뒤 $-1<x^2-2x\le1$ 을 이차부등식 두 개로 나눠 풀어야 하고,
    왼쪽 부등식에서 $(x-1)^2>0$ 이 나와 $x\ne1$ 이 빠지는 것이 함정이다.
    ⑵ 는 $\{ar^n\}$ 꼴이라 $a=0$ 분기가 추가된다(I-MI d2).
    필수 ★2 출발이나 분기 + 이차부등식 + 무리수 경계로 M_total 8 → +1 해 ★3.
  tier: star_3
  mechanism_primary: "$(공비)^n$ 으로 묶기 → 첫째항 0 또는 $-1<공비\\le1$ → 이차부등식 풀이 → $x$ 범위 합집합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $1-\sqrt{2}\le x<1$ 또는 $1<x\le 1+\sqrt{2}$ ⑵ $x=0$ 또는 $1\le x<3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/32-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 인수($x$ 와 $x-2$ → $x$ 와 $x-4$ 등)와 ⑵ 의 첫째항·공비 식을 바꿀 수 있다. 제약 — ⑴ 은 $-1<f(x)$ 쪽이 완전제곱이 되도록 두면 「한 점 제외」 함정이 살아나고, 그렇지 않으면 답이 단순 구간이 된다. ⑵ 는 첫째항이 0 이 되는 $x$ 가 공비 조건 구간 밖에 있어야 분기가 의미를 갖는다."
    creative: "(1) 공비를 $\\log$·삼각 식으로 바꾸면 I-XU 가 더해져 ★3~4(32-46·34-54 골조) (2) 「수렴하는 정수 $x$ 의 개수」로 물으면 경계 등호 처리가 답에 직결돼 ★3 유지 (3) 첫째항을 $x-1$ 처럼 공비 구간 안에서 0 이 되게 두면 분기가 답을 바꾸지 않아 함정이 죽으므로 ★2 로 내려간다."
```

```yaml
- id: GN-CALC2-32-45
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\left\{\left(\dfrac{x^2-x}{2}\right)^n\right\}$ ⑵ $\left\{(x+2)\left(\dfrac{2x-1}{5}\right)^n\right\}$
    이 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "$-1<공비\\le1$ · 첫째항 0 분기 → 이차·일차부등식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 첫째항 $x+2=0$ 이면 공비 조건과 무관하게 수렴하므로 $x=-2$ 를 별도 경우로 포함해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비수열의 수렴 조건 — 공비 부등식과 첫째항 0 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $-2<x^2-x\le2$ 에서 왼쪽이 항상 참이라 오른쪽 이차부등식만 남아 32-e12 보다 가볍다.
    ⑵ 는 첫째항 0 분기(I-MI d2)가 있지만 $x=-2$ 가 공비 구간 $-2<x\le3$ 의 끝점에 딱 붙어
    답이 $-2\le x\le3$ 하나로 합쳐지는 점이 이 문항의 포인트.
    통찰 1개 · M_total 7 · 확인체크 ★2 출발 유지(경계가 모두 정수라 e12 보다 한 단 아래).
  tier: star_2
  mechanism_primary: "첫째항 0 또는 $-1<공비\\le1$ → 이차·일차부등식 → 두 경우의 합집합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-1\le x\le 2$ ⑵ $-2\le x\le 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/32-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 2 와 이차식, ⑵ 의 첫째항 $x+2$·공비 $\\dfrac{2x-1}{5}$ 의 계수를 바꿀 수 있다. 제약 — ⑴ 은 $-1<\\dfrac{f(x)}{k}$ 쪽 판별식이 음수여야 「항상 참」 구조가 유지된다. ⑵ 에서 첫째항의 근이 공비 구간 안이면 분기가 답에 아무 영향을 주지 않으므로, 함정을 살리려면 끝점이나 구간 밖에 두어야 한다."
    creative: "(1) 첫째항의 근을 공비 구간에서 멀리 떼면 답이 「고립점 + 구간」이 되어 분기의 존재가 눈에 보이게 되고 ★3 (2) 공비를 $\\dfrac{x^2-x}{2}$ 로 두고 첫째항까지 이차식으로 주면 M 이 올라 ★3 (3) 수렴 대신 「발산하도록 하는 $x$」로 뒤집으면 여집합 처리로 ★2 유지."
```

```yaml
- id: GN-CALC2-32-46
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등비수열 $\{(\log_3 x-1)^n\}$ 이 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "$-1<\\log_3x-1\\le1$ → 로그부등식 → 진수 범위"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공비 조건이 로그부등식으로 바뀌어 밑 3 의 단조성(과 진수 조건)을 써야 $x$ 범위가 나옴 — 수열 단원 도구만으로는 끊김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴 조건 — 공비에 로그·삼각식이 들어온 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴 조건 $-1<\log_3x-1\le1$ → $0<\log_3x\le2$ → $1<x\le9$ 로 두 단계.
    등비수열 쪽 처리는 가장 단순하지만 로그 단원 도구(밑>1 의 단조성·진수 조건)가 없으면 풀이가 끊겨 I-XU d1.
    $\log_3x=0$ 쪽 등호가 빠지고 $=2$ 쪽만 남는 경계가 함정(T-경계 + T-범위).
    확인체크 ★2 출발 · 통찰 1개 d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "$-1<\\log_3x-1\\le1$ → $0<\\log_3x\\le2$ → $1<x\\le9$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1<x\le 9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/32-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 밑(3→2·1/2)과 상수항($-1$→$-2$)을 바꿀 수 있다. 제약 — 밑이 1 보다 작으면 부등호가 뒤집혀 답 구간의 등호 위치가 반대가 되므로 답을 다시 지정해야 한다. 끝점이 $밑^{정수}$ 가 되도록 상수항을 고르면 답이 깔끔하다."
    creative: "(1) 밑을 $\\dfrac12$ 로 바꿔 부등호 반전을 의도적으로 넣으면 ★3 (2) 진수를 $x^2-x$ 같은 이차식으로 두면 진수 조건까지 겹쳐 ★3 (3) 첫째항을 $\\log_3x$ 로 붙이면 첫째항 0 분기(I-MI)가 더해져 ★3."
```

```yaml
- id: GN-CALC2-33-e13
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $r\ne-1$ 일 때 수열 $\left\{\dfrac{r^n}{1+r^n}\right\}$ 의 극한값을 $r$ 의 범위로 나누어 구하기.
  category: "$|r|<1$ · $r=1$ · $|r|>1$ 로 분기 → $|r|>1$ 에서는 $r^n$ 으로 나누기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$r^n$ 의 거동이 $|r|<1$·$r=1$·$|r|>1$ 에서 전혀 달라 세 경우를 모두 따져야 하고 각 경우가 서로 다른 답을 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$r^n$ 을 포함한 수열의 극한 — 공비 범위별 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $r$ 가 매개변수라 $r^n\to0$ / $r^n=1$ / $r^n\to\pm\infty$ 세 거동을 스스로 나눠야 하고,
    $|r|>1$ 에서는 분모·분자를 $r^n$ 으로 나눠 $\dfrac{1}{(1/r)^n+1}\to1$ 로 표현을 바꿔야 한다.
    $r=-1$ 이 제외 조건으로 이미 주어져 발산 케이스가 빠진 것이 난도를 한 단 낮춘다.
    필수 ★2 출발 + 분기 통찰 d2 · M_total 7 → ★3. 이 단원의 대표 골조.
  tier: star_3
  mechanism_primary: "$r$ 범위 3분기 → $|r|>1$ 은 $r^n$ 으로 나누기 → 0 / $\\tfrac12$ / 1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$|r|<1$일 때 $0$, $r=1$일 때 $\dfrac{1}{2}$, $|r|>1$일 때 $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/33-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 1 과 분자의 계수를 바꿀 수 있다($\\dfrac{2r^n}{3+r^n}$ 등). 제약 — $r=1$ 대입값과 $|r|>1$ 극한이 서로 달라야 분기가 의미를 갖고, $r=-1$ 에서 분모가 0 이 되는 경우는 제외 조건으로 명시해야 한다."
    creative: "(1) $r=-1$ 제외 조건을 빼면 발산 케이스가 추가돼 33-47 골조 ★3 (2) 지수를 $r^{2n}$ 으로 바꾸면 음수 공비가 흡수돼 분기가 둘로 줄어 ★2 (3) 극한값을 주고 $r$ 를 역추적하게 하면 I-BW 가 더해져 ★3~4(36-63 골조)."
```

```yaml
- id: GN-CALC2-33-47
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수열 $\left\{\dfrac{r^n}{r^{2n}+1}\right\}$ 의 극한을 $r$ 의 범위로 나누어 조사하기.
  category: "$|r|<1$ · $r=1$ · $|r|>1$ · $r=-1$ 로 분기 → $|r|>1$ 에서는 $r^{2n}$ 으로 나누기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$r=-1$ 이 제외되지 않아 $(-1)^n$ 이 진동하는 발산 케이스까지 네 경우를 빠짐없이 나눠야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$r^n$ 을 포함한 수열의 극한 — 공비 범위별 분기($r=-1$ 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    33-e13 의 확인 문항이지만 제외 조건이 없어 $r=-1$ 에서 $\dfrac{(-1)^n}{2}$ 가 진동·발산하는 네 번째 경우가 살아 있다.
    또 $|r|<1$ 과 $|r|>1$ 이 모두 0 으로 수렴해 「분기했는데 답이 같다」는 점도 학생이 놓치기 쉬운 지점.
    분기 통찰 d2 · M_total 8 · ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "$r$ 범위 4분기 → $|r|>1$ 은 $r^{2n}$ 으로 나누기 → 0 / $\\tfrac12$ / 0 / 발산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$|r|<1$일 때 $0$에 수렴, $r=1$일 때 $\dfrac{1}{2}$에 수렴, $|r|>1$일 때 $0$에 수렴, $r=-1$일 때 발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/33-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 $r^{2n}$ 계수와 상수항을 바꿀 수 있다($\\dfrac{r^n}{2r^{2n}+3}$ 등). 제약 — 분자 차수가 분모 최고차의 절반이라 $|r|>1$ 과 $|r|<1$ 이 같은 극한 0 을 주는 구조가 이 문항의 핵심이므로, 차수를 건드리면 분기 결과표를 다시 만들어야 한다."
    creative: "(1) 분자를 $r^{2n}$ 으로 올리면 $|r|>1$ 극한이 0 이 아닌 값이 되어 분기 대비가 선명해진다(★3 유지) (2) 「극한값이 존재하도록 하는 $r$ 의 범위」로 뒤집으면 I-BW 가 더해져 ★4 (3) $r$ 를 정수로 제한하고 개수를 물으면 33-48 골조."
```

```yaml
- id: GN-CALC2-33-48
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $|r|\ne5$ 일 때 수열 $\left\{\dfrac{r^n+5^n}{r^n-5^n}\right\}$ 의 극한값이 $-1$ 이 되도록 하는 정수 $r$ 의 개수.
  category: "$|r|$ 와 5 의 대소로 분기 → 극한값 $-1$ 을 주는 쪽 선택 → 정수 개수 세기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$|r|<5$ 면 $5^n$ 으로, $|r|>5$ 면 $r^n$ 으로 나눠야 해 극한이 $-1$ 과 $1$ 로 갈린다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 $-1$ 이라는 결과에서 $|r|<5$ 를 역추적하고, 다시 그 범위의 정수를 세는 역방향 구성"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$r^n$ 포함 수열의 극한 — 극한값 조건으로 공비 범위 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분기 방향이 답에서 거꾸로 주어진다. $|r|<5$ 면 $\dfrac{(r/5)^n+1}{(r/5)^n-1}\to-1$, $|r|>5$ 면 $\to1$ 이므로
    조건을 만족하는 것은 $-5<r<5$ 쪽이고, 여기서 정수 $r$ 는 $-4,\cdots,4$ 로 9 개.
    $r=0$ 도 $\dfrac{0+5^n}{0-5^n}=-1$ 로 조건을 만족한다는 점과 $|r|=5$ 가 제외라는 점이 개수 함정.
    통찰 2개(MI·BW d2) · M_total 8 · ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "$|r|\\lessgtr5$ 분기로 극한 $-1$ / $1$ → $-1$ 은 $|r|<5$ → 정수 $-4\\sim4$ 의 9 개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/33-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 밑 5 를 다른 자연수(3·7·10)로 바꾸면 개수가 $2k-1$ 로 따라 움직인다. 제약 — $|r|=k$ 는 분모가 0 이 되므로 반드시 제외 조건으로 남기고, $r=0$ 이 범위에 포함되는지(포함된다)를 답 개수에 반영한다."
    creative: "(1) 극한값을 $1$ 로 바꾸면 $|r|>5$ 쪽이 되어 정수 개수가 무한해지므로 범위 제한이 필요해진다(설계 주의 · ★3) (2) 분자·분모 계수를 달리해 극한값을 $-1$ 이 아닌 값으로 만들면 대소 판정 후 계수비까지 봐야 해 ★4 (3) $r$ 를 정수 대신 실수로 두고 범위를 답하게 하면 ★3 유지."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-34-49
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다섯 개의 등비수열 $\left\{\dfrac1{9^n}\right\}$, $\{0.99^n\}$, $\{(\sqrt{0.9})^n\}$,
    $\left\{\left(-\dfrac34\right)^n\right\}$, $\left\{\dfrac{2^{2n}}{3^n}\right\}$ 중 수렴하지 않는 것 고르기. 5지선다.
  category: "각 보기의 공비를 읽어 $-1<r\\le1$ 과 대조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열 {r^n} 의 수렴·발산 판정(공비 추출)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑤ 만 $\dfrac{2^{2n}}{3^n}=\left(\dfrac43\right)^n$ 로 정리하면 공비가 1 보다 커서 발산.
    나머지는 공비가 그대로 보이거나 $\sqrt{0.9}<1$ 만 확인하면 끝난다.
    STEP 1 ★2 출발이지만 통찰 0 · M_total 4 로 −1 조건에 걸려 ★1.
  tier: star_1
  mechanism_primary: "보기별 공비 정리 → $|r|<1$ 여부 확인 → $\\left(\\tfrac43\\right)^n$ 만 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 밑을 바꿀 수 있다($0.99\\to1.01$, $\\sqrt{0.9}\\to\\sqrt{1.1}$, $2^{2n}/3^n\\to3^n/2^{2n}$). 제약 — 정답 보기만 공비의 절댓값이 1 보다 크고 나머지는 $-1<r\\le1$ 안에 들어가도록 유지하며, $r=1$ 보기는 수렴 쪽이라는 점을 흔들지 않는다."
    creative: "(1) 「수렴하는 것의 개수」를 묻는 형태로 바꾸면 ★1 유지 (2) 공비를 $(-1)^n$ 이 섞인 꼴로 두면 진동 발산 판정이 추가돼 ★2 (3) 보기에 $\\{r^n\\}$ 의 극한값까지 묻게 하면 30-41 골조로 ★2."
```

```yaml
- id: GN-CALC2-34-50
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{5\times3^{n+1}-2^{n+1}}{3^n+2^n}$ 의 값.
  category: "분모·분자를 $3^n$ 으로 나누기 → 계수비"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수 유리식의 극한(최대 밑으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $3^n$ 으로 나누면 $\dfrac{15-2\cdot(2/3)^n}{1+(2/3)^n}\to15$ 로 한 줄.
    지수 이동 $3^{n+1}=3\cdot3^n$, $2^{n+1}=2\cdot2^n$ 을 계수로 빼내는 것이 전부다.
    STEP 1 ★2 출발이나 통찰 0 · M_total 5 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "$3^{n+1}=3\\cdot3^n$ 로 계수 정리 → $3^n$ 으로 나누기 → $15$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5 와 밑 쌍(3·2), 지수 이동을 바꿀 수 있다. 제약 — 분모의 최대 밑이 분자의 최대 밑과 같아야 극한이 계수비로 떨어진다. 분자 쪽 밑을 더 크게 하면 발산 문항이 된다."
    creative: "(1) 분모에 $\\sqrt{9^n+4^n}$ 을 넣으면 밑 통일 단계가 추가돼 ★2 (2) 극한값을 주고 계수를 역추적하면 I-BW 가 붙어 ★2 (3) 분자에 $a_n$ 을 섞으면 34-53 골조 ★2."
```

```yaml
- id: GN-CALC2-34-51
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 자연수 $n$ 에 대하여 $5^n-2^n<a_n<5^n+2^n$ 일 때 $\lim\limits_{n\to\infty}\dfrac{a_n}{5^{n+1}-2^n}$ 의 값.
  category: "부등식 양변을 양수 $5^{n+1}-2^n$ 으로 나누기 → 수열의 대소와 극한(샌드위치)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$a_n$ 의 값을 직접 알 수 없으므로 주어진 부등식을 양변 나누기로 「$\\dfrac{a_n}{5^{n+1}-2^n}$ 을 가두는 두 수열」 꼴로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 대소 관계(샌드위치)를 쓰는 지수 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n$ 이 식으로 주어지지 않고 부등식으로만 갇혀 있으므로, 목표식의 분모(양수)로 부등식 전체를 나눠
    양끝 수열의 극한이 모두 $\dfrac15$ 임을 보이는 구조. 나누는 수가 양수임을 확인하는 것이 논리 구멍.
    통찰 1개(EQV d1) · M_total 7 · STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "부등식을 $5^{n+1}-2^n(>0)$ 으로 나누기 → 양끝 극한 모두 $\\tfrac15$ → 샌드위치로 $\\tfrac15$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지배 밑 5 와 곁밑 2, 분모의 계수($5^{n+1}$ → $3\\times5^n$)를 바꿀 수 있다. 제약 — 부등식 양끝의 지배항이 같아야 샌드위치가 성립하고, 곁밑은 지배 밑보다 작아야 한다. 분모가 모든 $n$ 에서 양수인지 확인해야 부등호 방향이 유지된다."
    creative: "(1) 분모를 $2^n-5^n$ 처럼 음수로 두면 부등호가 뒤집혀 T-부호 함정이 커지고 ★3 (2) 부등식을 $|a_n-5^n|<2^n$ 꼴로 주면 절댓값 해석이 추가돼 ★3 (3) 극한값을 주고 곁밑을 역추적하면 ★3."
```

```yaml
- id: GN-CALC2-34-52
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수열 $2,\;4,\;8,\;16,\cdots$ 의 제$n$항을 $a_n$, 첫째항부터 제$n$항까지의 합을 $S_n$ 이라 할 때
    $\lim\limits_{n\to\infty}\dfrac{a_n}{S_n}$ 의 값.
  category: "등비수열의 일반항·합 공식 → 지수 유리식의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 $S_n$ 과 일반항의 비의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=2^n$, $S_n=2^{n+1}-2$ 를 공식으로 만든 뒤 $\dfrac{2^n}{2^{n+1}-2}$ 을 $2^n$ 으로 나누면 $\dfrac12$.
    등비수열의 합 공식은 이전 단원의 표준 공식 대입이라 I-XU 로 세지 않았다.
    통찰 0 · M_total 6 · STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "$a_n=2^n$·$S_n=2^{n+1}-2$ → $2^n$ 으로 나누기 → $\\tfrac12$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비를 바꿀 수 있다($3,9,27,\\cdots$ → 답 $\\tfrac23$). 제약 — 공비 $r>1$ 이어야 $S_n$ 이 발산해 극한이 $\\dfrac{r-1}{r}$ 로 떨어진다. $|r|<1$ 이면 $S_n$ 이 수렴해 $a_n/S_n\\to0$ 이 되므로 답 유형이 바뀐다."
    creative: "(1) 공비를 $\\dfrac12$ 로 바꿔 $S_n$ 이 수렴하는 경우와 대비시키면 I-MI 가 붙어 ★3 (2) 첫째항·공비를 미지수로 두고 극한값을 주면 I-BW 로 ★3 (3) $\\dfrac{S_{n+1}}{S_n}$ 을 묻게 하면 36-61 과 같은 비율 골조로 ★2 유지."
```

```yaml
- id: GN-CALC2-34-53
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수렴하는 수열 $\{a_n\}$ 에 대하여 $\lim\limits_{n\to\infty}\dfrac{4\times3^n-2^{n+1}a_n}{3^na_n+2^n}=3$ 일 때
    $\lim\limits_{n\to\infty}a_n$ 의 값.
  category: "분모·분자를 $3^n$ 으로 나누기 → 유계성으로 소멸항 처리 → 극한값 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\{a_n\\}$ 의 수렴(유계)을 근거로 $(2/3)^na_n\\to0$ 을 버리고 $\\dfrac{4}{\\alpha}=3$ 으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 극한 (2) — 수렴하는 수열이 섞인 지수 유리식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    31-e11·31-44 와 같은 골조로, 지배 밑 $3$ 으로 나누면 $\dfrac{4-2(2/3)^na_n}{a_n+(2/3)^n}$ 이 되고
    $a_n$ 이 유계라는 조건 덕분에 $(2/3)^na_n\to0$ 이 정당화된다.
    통찰 1개(EQV d1) · M_total 7 · STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "$3^n$ 으로 나누기 → $(2/3)^na_n\\to0$ → $4/\\alpha=3$ → $\\alpha=\\tfrac43$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·2 와 밑 쌍(3·2), 우변 3 을 바꿀 수 있다. 제약 — $a_n$ 이 분모에서 지배 밑과 짝이어야 $\\alpha$ 가 분모에 남는다. 우변이 0 이면 $\\alpha$ 가 존재하지 않으므로 피한다."
    creative: "(1) $a_n$ 을 분자의 지배 밑 쪽에도 붙여 $\\alpha$ 에 대한 일차방정식이 나오게 하면 ★3 (2) 수렴 전제를 빼면 발산 배제 논증이 추가돼 ★3 (3) 구하는 값을 $\\lim(a_n)^2$ 처럼 바꾸면 부호 분기가 생겨 ★3."
```

```yaml
- id: GN-CALC2-34-54
  page: 34
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-\dfrac\pi2\le x\le\dfrac\pi2$ 일 때 등비수열 $\{(2\sin x)^n\}$ 이 수렴하도록 하는 실수 $x$ 의 값의 범위.
  category: "$-1<2\\sin x\\le1$ → 삼각부등식 → 주어진 구간에서 $x$ 범위"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공비 조건이 $-\\tfrac12<\\sin x\\le\\tfrac12$ 라는 삼각부등식이 되어, 주어진 구간에서 $\\sin$ 의 단조성으로 $x$ 를 되돌려야 풀이가 이어짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴 조건 — 공비에 로그·삼각식이 들어온 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $-1<2\sin x\le1$ → $-\dfrac12<\sin x\le\dfrac12$ → 주어진 구간에서 $-\dfrac\pi6<x\le\dfrac\pi6$.
    등비수열 쪽은 한 단계이고 난도는 삼각부등식의 등호 위치와 구간 제한에서 온다(T-경계 + T-범위).
    32-46 과 같은 「다른 단원 식이 공비 자리에 온」 골조. 통찰 1개 d1 · M_total 6 · STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "$-1<2\\sin x\\le1$ → $-\\tfrac12<\\sin x\\le\\tfrac12$ → $-\\tfrac\\pi6<x\\le\\tfrac\\pi6$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{\pi}{6}<x\le\dfrac{\pi}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/34-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 계수 2 와 삼각함수($\\sin\\to\\cos\\to\\tan$), 주어진 $x$ 구간을 바꿀 수 있다. 제약 — 계수를 바꾸면 경계가 특수각이 되도록 골라야 답이 $\\pi$ 의 유리수배로 떨어진다. $\\cos$ 으로 바꾸면 주어진 구간에서 단조성이 달라 답이 두 구간으로 쪼개질 수 있다."
    creative: "(1) 구간을 $0\\le x\\le2\\pi$ 로 넓히면 해 구간이 여러 개로 갈라져 I-MI 가 추가되고 ★3 (2) 첫째항을 $\\cos x$ 로 붙이면 첫째항 0 분기까지 생겨 ★3~4 (3) 「수렴하는 $x$ 의 개수」를 특정 각 집합에서 세게 하면 ★2 유지."
```

```yaml
- id: GN-CALC2-35-55
  page: 35
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열 $\{r^n\}$ 이 수렴할 때 항상 수렴하는 수열을 보기 ㄱ $\{r^{3n}\}$, ㄴ $\left\{\left(\dfrac1r\right)^n\right\}$,
    ㄷ $\{(-r)^n\}$, ㄹ $\left\{\left(\dfrac{1-r}2\right)^n\right\}$ 에서 모두 고르기.
  category: "$-1<r\\le1$ 을 각 보기의 공비 범위로 전파 → 반례로 기각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\{r^n\\}$ 수렴을 $-1<r\\le1$ 로 바꾼 뒤, 각 보기의 공비가 그 범위에서 다시 $-1<\\cdot\\le1$ 안에 들어가는지로 조건을 옮김"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 은 $r\\to0$, ㄷ 은 $r=1$ 이라는 경계 반례를 실제로 대입해 기각해야 「항상」이 깨짐을 보일 수 있음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$\\{r^n\\}$ 수렴 조건에서 파생 수열의 수렴 판정(합답형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 $-1<r^3\le1$ 이 자동으로 따라오고, ㄹ 은 $-1<r\le1$ 에서 $0\le\dfrac{1-r}2<1$ 이라 항상 수렴.
    ㄴ·ㄷ 은 범위 전체에서 참이 아니고 끝점·0 근처의 반례로만 깨지므로, 「항상」이라는 한정사를 반례로 다루는 검증이 핵심이다.
    통찰 2개(EQV·VF d2) · M_total 7 · STEP 1 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "$-1<r\\le1$ → 보기별 공비 범위 계산 → ㄱ·ㄹ 항상 성립 · ㄴ·ㄷ 은 반례로 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 지수(3n → 2n·4n)와 ㄹ 의 일차식 계수를 바꿀 수 있다. 제약 — 홀수 지수는 부호를 보존해 수렴이 유지되지만 짝수 지수는 $r$ 가 음수여도 양의 공비가 되므로 판정이 달라진다. ㄹ 형은 $r$ 범위의 상이 $[0,1)$ 안에 들어가도록 계수를 골라야 「항상 수렴」이 된다."
    creative: "(1) 조건을 「$\\{r^n\\}$ 이 발산」으로 뒤집으면 여집합 추론이 되어 ★3 유지 (2) 보기를 $\\{r^n+(-r)^n\\}$ 처럼 합으로 두면 I-MI 가 추가돼 ★4 (3) 참인 보기의 개수만 묻는 형태로 줄이면 반례 탐색은 남고 서술 부담이 줄어 ★3 유지."
```

```yaml
- id: GN-CALC2-35-56
  page: 35
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\lim\limits_{n\to\infty}\dfrac{1-r^n}{1+r^n}$ 의 값이 $|r|>1$ 이면 $a$, $r=1$ 이면 $b$, $|r|<1$ 이면 $c$ 일 때 $a+b-c$ 의 값.
  category: "$r$ 범위 3분기로 극한값 각각 계산 → 식에 대입"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 식이 $r$ 의 범위에 따라 $-1$·$0$·$1$ 세 값을 가지므로 세 경우를 모두 계산해야 하고 각각이 답에 기여함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$r^n$ 을 포함한 수열의 극한 — 공비 범위별 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $|r|>1$ 이면 $r^n$ 으로 나눠 $-1$, $r=1$ 이면 $\dfrac{0}{2}=0$, $|r|<1$ 이면 $\dfrac11=1$.
    33-e13 과 같은 분기 골조인데 세 값을 문자 $a,b,c$ 로 받아 한 번에 조합하는 형태라 각 분기를 빠뜨리면 바로 틀린다.
    분기 통찰 d2 · M_total 7 · STEP 1 ★2 유지(분기 수가 셋으로 고정되어 있고 계산은 각 한 줄).
  tier: star_2
  mechanism_primary: "3분기 극한 $-1$/$0$/$1$ → $a+b-c=-1+0-1=-2$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 상수와 계수를 바꿀 수 있다($\\dfrac{2-3r^n}{1+r^n}$ 등). 제약 — 세 분기의 값이 서로 달라야 조합식이 의미를 갖고, $r=-1$ 에서 분모가 0 이 되는 경우는 분기 목록에서 빠져 있으므로 발문의 범위 표기와 충돌하지 않게 둔다."
    creative: "(1) $r=-1$ 케이스를 추가해 「발산하는 경우를 제외한 값들의 합」으로 물으면 ★3 (2) $a+b-c$ 대신 $abc$ 나 대소 비교를 묻게 하면 ★2 유지 (3) 반대로 $a+b-c$ 값을 주고 분자의 계수를 역추적하게 하면 I-BW 로 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-35-57
  page: 35
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 $x^2+2x-1=0$ 의 두 근을 $\alpha,\;\beta$ 라 할 때
    $\lim\limits_{n\to\infty}\dfrac{\alpha^{n+1}+\beta^{n+1}}{\alpha^n+\beta^n}$ 의 값.
  category: "두 근 계산 → 절댓값 비교로 지배근 판별 → 지배근의 $n$제곱으로 나누기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$|\\beta|>1>|\\alpha|$ 임을 확인해 $(\\alpha/\\beta)^n\\to0$ 이 되도록 $\\beta^n$ 으로 나누는 것으로 조건을 옮김 — 어느 근으로 나눌지가 답을 가름"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 두 근으로 만든 지수 유리식의 극한 — 지배근 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근은 $-1\pm\sqrt2$ 이고 $|-1-\sqrt2|>1>|-1+\sqrt2|$ 이므로 절댓값이 큰 $\beta=-1-\sqrt2$ 로 나눠야
    $\dfrac{\beta+\alpha(\alpha/\beta)^n}{1+(\alpha/\beta)^n}\to\beta$ 가 된다.
    「어느 항이 지배하는가」를 근의 크기 비교로 먼저 정해야 하는 점이 이 단원 표준 절차 위에 얹힌 한 단계.
    통찰 1개 d2 · M_total 8 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "$\\alpha,\\beta=-1\\pm\\sqrt2$ → $|\\beta|$ 가 크므로 $\\beta^n$ 으로 나누기 → $\\beta=-1-\\sqrt2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1-\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수를 바꿀 수 있다($x^2-4x+1=0$ 등). 제약 — 두 근의 절댓값이 서로 달라야 지배근이 정해지고, 절댓값이 같으면($x^2-1=0$) 극한이 진동해 답이 없어진다. 두 근이 모두 절댓값 1 미만이면 극한이 0/0 꼴로 무너지므로 큰 근의 절댓값이 1 보다 크게 둔다."
    creative: "(1) 근과 계수의 관계만으로 답을 유도하게 하면 I-XU 가 더해져 ★4 (2) 지수를 $\\alpha^{2n}$ 으로 올려 절댓값 비교를 한 번 더 시키면 ★4 (3) 두 근의 절댓값이 같은 방정식을 섞어 「극한이 존재하는 계수」를 묻게 하면 I-BW·I-VF 로 ★4."
```

```yaml
- id: GN-CALC2-35-58
  page: 35
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $n$ 에 대하여 두 직선 $3x+y=3^n$, $2x+3y=2^n$ 의 교점의 좌표를 $(a_n,\,b_n)$ 이라 할 때
    $\lim\limits_{n\to\infty}\dfrac{b_n}{a_n}$ 의 값.
  category: "연립일차방정식으로 교점 좌표 → 지수 유리식의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다른 단원 상황에서 정의된 지수 수열의 극한 — 두 직선의 교점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 식을 연립해 $a_n,\,b_n$ 을 $3^n$ 과 $2^n$ 의 일차결합으로 구한 뒤 $3^n$ 으로 나누면 끝난다.
    「교점의 좌표를 $(a_n,b_n)$ 이라 하자」로 대수화가 이미 주어져 표현 전환 부담이 없어 통찰은 세지 않았다.
    난도는 계수가 지저분한 연립 계산에서만 온다.
    [분류 이슈] STEP 2 출발 ★3 이나 통찰 0·순수 계산이라 ★2 후보 — 라벨은 벤더 신호대로 ★3 유지.
  tier: star_3
  mechanism_primary: "연립으로 $a_n,b_n$ 을 $3^n,2^n$ 의 일차결합으로 → $3^n$ 으로 나누기 → $-\\tfrac23$"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 계수와 우변의 밑(3·2)을 바꿀 수 있다. 제약 — 두 직선이 평행하지 않도록 계수행렬의 값이 0 이 아니어야 하고, 우변 두 밑의 대소가 극한을 결정하므로 지배 밑을 먼저 정한다. 지배 밑이 두 좌표 모두에서 살아남아야 극한이 유한하다."
    creative: "(1) 교점 대신 두 직선이 이루는 삼각형의 넓이를 지수로 주면 I-RT 가 붙어 ★3~4 (2) 우변을 $r^n$ 으로 두고 극한값 조건을 주면 I-BW·I-MI 로 ★4 (3) 세 직선의 공점 조건으로 바꾸면 M 이 올라 ★4."
```

```yaml
- id: GN-CALC2-35-59
  page: 35
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $n$ 에 대하여 $3^n$ 의 양의 약수의 총합을 $a_n$ 이라 할 때 $\lim\limits_{n\to\infty}\dfrac{a_n}{3^n}$ 의 값.
  category: "약수의 총합 → 등비수열의 합 → 지수 유리식의 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$3^n$ 의 양의 약수가 $1,3,\\cdots,3^n$ 임을 알아내 약수의 총합을 등비수열의 합으로 옮겨야 함 — 수열 도구만으로는 $a_n$ 을 만들 수 없음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다른 단원 상황에서 정의된 지수 수열의 극한 — 약수의 총합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_n=1+3+\cdots+3^n=\dfrac{3^{n+1}-1}{2}$ 를 세우는 것이 전부이고, 그다음 $3^n$ 으로 나누면 $\dfrac32$.
    약수의 총합이라는 정수 단원 표현을 등비급수의 합으로 옮기는 한 단계가 유일한 진입 저항(I-XU d1).
    [분류 이슈] M_total 5 · 계산 한 줄이라 ★2 후보이지만, 진입 저항이 통찰 쪽이라 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "약수 $1,3,\\cdots,3^n$ → $a_n=\\dfrac{3^{n+1}-1}{2}$ → $3^n$ 으로 나누기 → $\\tfrac32$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 다른 소수(2·5·7)로 바꾸면 답이 $\\dfrac{p}{p-1}$ 로 따라간다. 제약 — 밑이 소수여야 약수가 거듭제곱만으로 나열돼 등비수열의 합이 된다. 합성수($6^n$)로 바꾸면 약수의 총합 공식이 곱 형태가 되어 골조가 달라진다."
    creative: "(1) $6^n$ 이나 $12^n$ 의 약수의 총합으로 바꾸면 약수 총합 공식의 곱 구조를 써야 해 ★4 (2) 약수의 개수를 분모로 두면 지수 대 일차의 비가 되어 극한이 0 으로 바뀌고 ★3 유지 (3) 극한값을 주고 밑을 역추적하게 하면 I-BW 로 ★4."
```

```yaml
- id: GN-CALC2-35-60
  page: 35
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $n$ 에 대하여 $f(x)=2^nx^2+3^nx+1$ 을 $x-1$, $x-2$ 로 나눈 나머지를 각각 $a_n$, $b_n$ 이라 할 때
    $\lim\limits_{n\to\infty}\dfrac{a_n}{b_n}$ 의 값.
  category: "나머지정리로 $a_n=f(1)$, $b_n=f(2)$ → 지수 유리식의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나머지를 직접 나눗셈하지 않고 나머지정리로 $f(1)$·$f(2)$ 로 바꿔야 $a_n,b_n$ 이 지수식으로 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다른 단원 상황에서 정의된 지수 수열의 극한 — 나머지정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_n=f(1)=2^n+3^n+1$, $b_n=f(2)=2^{n+2}+2\cdot3^n+1$ 을 만든 뒤 지배 밑 $3^n$ 으로 나누면 $\dfrac12$.
    $x=2$ 를 넣을 때 $2^n\cdot4=2^{n+2}$ 로 커지지만 여전히 $3^n$ 이 지배한다는 점이 계산 함정.
    통찰 1개(XU d1) · M_total 6 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "나머지정리로 $a_n=f(1)$·$b_n=f(2)$ → $3^n$ 으로 나누기 → $\\tfrac12$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/35-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식의 계수 밑(2·3)과 나누는 일차식($x-1$·$x-2$ → $x+1$·$x-3$)을 바꿀 수 있다. 제약 — 대입값이 커지면 $2^n$ 쪽 계수가 커지지만 지배 밑은 여전히 큰 밑이어야 극한이 계수비로 떨어진다. 대입값이 음수면 $3^n$ 항의 부호가 뒤집혀 답의 부호가 달라진다."
    creative: "(1) 나누는 식을 이차식으로 바꿔 나머지가 일차식이 되게 하면 계수 비교가 추가돼 ★4 (2) $f(x)$ 를 $x^2-1$ 로 나눈 나머지의 계수 수열로 바꾸면 ★4 (3) 몫의 상수항을 수열로 두면 구조 파악 부담이 커져 ★4."
```

```yaml
- id: GN-CALC2-36-61
  page: 36
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $n$ 에 대하여 두 곡선 $y=2^x$, $y=4^x$ 과 직선 $x=n$ 의 교점을 각각 $\pt{P}_n$, $\pt{Q}_n$ 이라 하고
    삼각형 $\pt{OP}_n\pt{Q}_n$ 의 넓이를 $S_n$ 이라 할 때 $\lim\limits_{n\to\infty}\dfrac{S_{n+1}}{S_n}$ 의 값.
  category: "교점 좌표 → 삼각형 넓이 식 → 이웃 항의 비의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림 없이 주어진 좌표평면 배치를 「밑변 $\\overline{\\pt{P}_n\\pt{Q}_n}=4^n-2^n$, 높이 $n$」 이라는 지수 식으로 옮겨야 $S_n$ 이 만들어짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "다른 단원 상황에서 정의된 지수 수열의 극한 — 곡선 위의 점과 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\pt{P}_n(n,2^n)$, $\pt{Q}_n(n,4^n)$ 이므로 두 점이 같은 세로선 위에 있고 원점까지의 거리 $n$ 이 높이가 되어
    $S_n=\dfrac12 n(4^n-2^n)$. 비를 만들면 $\dfrac{n+1}{n}\to1$ 과 $\dfrac{4^{n+1}-2^{n+1}}{4^n-2^n}\to4$ 로 갈라진다.
    다항 인자와 지수 인자가 섞여 있고 지수 쪽만 극한에 기여한다는 점이 판별점.
    통찰 1개(RT d2) · M_total 6 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "$S_n=\\tfrac12n(4^n-2^n)$ → $\\dfrac{S_{n+1}}{S_n}=\\dfrac{n+1}{n}\\cdot\\dfrac{4^{n+1}-2^{n+1}}{4^n-2^n}$ → $1\\times4=4$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/36-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 밑(2·4 → 3·9)과 직선 $x=n$ 을 $x=2n$ 등으로 바꿀 수 있다. 제약 — 두 밑이 달라야 밑변 길이가 0 이 되지 않고, 큰 밑이 극한값을 결정한다. 직선을 $x=2n$ 으로 바꾸면 비가 큰 밑의 제곱이 되므로 답을 다시 정해야 한다."
    creative: "(1) 삼각형 대신 사다리꼴·사각형 넓이로 바꾸면 36-64 골조로 ★4 (2) 밑을 $a$ 로 두고 극한값 조건에서 $a$ 를 역추적하면 I-BW·I-MI 로 ★4 (3) $\\lim S_n$ 자체를 묻게 하면 발산이라 판정 문항이 되고 ★2 로 내려간다."
```

```yaml
- id: GN-CALC2-36-62
  page: 36
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수열 $\{a_n\}$ 에 대하여 $\lim\limits_{n\to\infty}\dfrac{4a_n-4}{5a_n+1}=2$ 일 때
    $\lim\limits_{n\to\infty}\dfrac{3^na_n}{3^n+a_n}$ 의 값.
  category: "첫 조건에서 $\\lim a_n$ 역추적 → 둘째 식에 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\{a_n\\}$ 이 수렴한다는 말이 없어 발산 가능성을 먼저 따져야 함 — 발산이면 좌변이 $\\tfrac45$ 로 가서 2 와 모순이므로 기각되고 수렴만 남음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한 조건을 $\\alpha$ 에 대한 일차방정식 $\\dfrac{4\\alpha-4}{5\\alpha+1}=2$ 로 옮겨 $\\alpha=-1$ 을 얻음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건식에서 $\\lim a_n$ 을 역추적한 뒤 지수 유리식에 대입"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수렴 전제가 발문에 없다는 점이 31-e11 계열과의 결정적 차이다. $a_n$ 이 발산하면 좌변이 $\dfrac45$ 로 수렴해
    조건 2 와 어긋나므로 수렴만 남고, 거기서 $\alpha=-1$.
    둘째 식은 분모·분자를 $3^n$ 으로 나누면 $\dfrac{a_n}{1+a_n/3^n}\to\dfrac{-1}{1+0}=-1$.
    [분류 이슈] 통찰 2개(VF·EQV d2)로 +1 후보였으나 실제 계산은 각 한 줄이라 ★4 로 올리지 않고 STEP 2 출발 ★3 을 유지.
  tier: star_3
  mechanism_primary: "발산 케이스 기각 → $\\dfrac{4\\alpha-4}{5\\alpha+1}=2$ 로 $\\alpha=-1$ → $3^n$ 으로 나눠 $-1$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/36-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식의 계수(4·$-4$·5·1)와 우변 2 를 바꿀 수 있다. 제약 — 우변이 분자·분모 최고차 계수비($\\tfrac45$)와 같으면 $\\alpha$ 방정식이 해를 잃으므로 그 값은 피한다. $\\alpha$ 가 $5\\alpha+1=0$ 을 만족하면 원식이 정의되지 않으므로 $\\alpha\\ne-\\tfrac15$ 를 유지한다."
    creative: "(1) 우변을 $\\tfrac45$ 로 두어 「$a_n$ 이 발산」을 답하게 하면 I-VF 가 주역이 되어 ★4 (2) 둘째 식을 $\\dfrac{3^na_n}{2^n+a_n}$ 처럼 밑이 다른 꼴로 바꾸면 지배항 판정이 추가돼 ★4 (3) $\\alpha$ 를 이차방정식으로 만들면 두 해 중 하나를 기각하는 검증이 생겨 ★4."
```

```yaml
- id: GN-CALC2-36-63
  page: 36
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $r\ne-1$ 일 때 $\lim\limits_{n\to\infty}\dfrac{r^{n+1}-1}{r^n+1}=3$ 을 만족시키는 실수 $r$ 의 값.
  category: "$r$ 범위 3분기로 극한 계산 → 값이 3 이 되는 분기 선택 → 조건 확인"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$|r|<1$·$r=1$·$|r|>1$ 에서 극한이 각각 $-1$·$0$·$r$ 로 완전히 달라 세 경우를 모두 계산해야 함"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 3 이라는 결과에서 $|r|>1$ 분기만 가능함을 역추적하고, 얻은 $r=3$ 이 그 분기 조건을 만족하는지 되짚어야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$r^n$ 포함 수열의 극한 — 극한값 조건으로 공비 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $|r|<1$ 이면 $\dfrac{0-1}{0+1}=-1$, $r=1$ 이면 0, $|r|>1$ 이면 $r^n$ 으로 나눠 극한이 $r$ 자신.
    따라서 3 이 되려면 $|r|>1$ 분기여야 하고 $r=3$, 이 값이 실제로 $|r|>1$ 을 만족하는지 확인해야 완결된다.
    통찰 2개(MI·BW d2) · M_total 7 · STEP 2 ★3 유지(+1 후보였으나 각 분기의 계산이 한 줄).
  tier: star_3
  mechanism_primary: "3분기 극한 $-1$/$0$/$r$ → 값 3 은 $|r|>1$ 분기 → $r=3$ (분기 조건 재확인)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/36-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 이동($r^{n+1}$ → $r^{n+2}$)과 분자·분모의 상수를 바꿀 수 있다. 제약 — $|r|>1$ 분기의 극한이 $r$ 의 일차식이어야 해가 하나로 정해지고, 주어진 극한값이 $-1$ 이나 0 이면 다른 분기와 충돌해 해가 무수히 많아지거나 없어진다."
    creative: "(1) 극한값을 $-1$ 로 두어 「$|r|<1$ 전체」가 답이 되게 하면 범위 답 문항으로 ★3 유지 (2) $r^{n+2}$ 로 올리면 $r^2=3$ 이 되어 $r=\\pm\\sqrt3$ 중 조건을 만족하는 것을 고르는 I-VF 가 추가돼 ★4 (3) 정수 $r$ 의 개수를 묻는 33-48 형태로 바꾸면 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-36-64
  page: 36
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    $a>0$, $a\ne1$ 에서 직선 $y=n$ 이 $y$축, 곡선 $y=\log_a(x-1)$ 과 만나는 점을 $\pt{A}_n$, $\pt{B}_n$ 이라 하고
    사각형 $\pt{A}_n\pt{B}_n\pt{B}_{n+1}\pt{A}_{n+1}$ 의 넓이를 $S_n$ 이라 할 때
    $\lim\limits_{n\to\infty}\dfrac{\overline{\pt{B}_n\pt{B}_{n+1}}}{S_n}=\dfrac3{2a+2}$ 를 만족시키는 모든 $a$ 의 값의 합. 5지선다.
  category: "로그의 역함수로 점 좌표 → 길이·사다리꼴 넓이 → $a>1$ / $0<a<1$ 분기 → $a$ 역추적"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$y=n$ 과 $y=\\log_a(x-1)$ 의 교점을 역함수로 풀어 $\\pt{B}_n(a^n+1,\\,n)$ 으로 옮겨야 도형량이 지수식이 됨"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a>1$ 이면 $a^n\\to\\infty$, $0<a<1$ 이면 $a^n\\to0$ 이라 좌변 극한이 전혀 다른 식이 되므로 두 경우를 각각 풀어야 하고 둘 다 해를 준다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 극한값 $\\dfrac{3}{2a+2}$ 에서 각 분기의 $a$ 를 역추적하고 그 값이 해당 분기 조건 안에 있는지 확인"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "곡선·직선의 교점으로 만든 도형의 길이와 넓이의 비의 극한(밑 분기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\pt{A}_n(0,n)$, $\pt{B}_n(a^n+1,n)$ 이므로 $S_n$ 은 윗변·아랫변이 $a^n+1$, $a^{n+1}+1$ 이고 높이 1 인 사다리꼴,
    $\overline{\pt{B}_n\pt{B}_{n+1}}=\sqrt{(a^{n+1}-a^n)^2+1}$ 이다.
    $a>1$ 이면 분자·분모 모두 $a^n$ 규모라 비가 $\dfrac{2(a-1)}{a+1}$ 로, $0<a<1$ 이면 $a^n\to0$ 이라 비가 1 로 간다.
    두 분기가 모두 해를 내고 그 합을 묻는 구조라 어느 한쪽만 풀면 답이 어긋난다.
    실력 UP ★4 출발 · 통찰 3개 · M_total 9 → ★4. SC/VF/SYM/XU 가 없어 ★5 자격에는 미달.
  tier: star_4
  mechanism_primary: "$\\pt{B}_n(a^n+1,n)$ → 사다리꼴 $S_n$ 과 $\\overline{\\pt{B}_n\\pt{B}_{n+1}}$ → $a>1$/$0<a<1$ 분기 → 두 $a$ 의 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/36-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 평행이동($x-1$ → $x-2$)과 우변 $\\dfrac{3}{2a+2}$ 의 계수를 바꿀 수 있다. 제약 — 우변이 $a$ 를 포함해야 두 분기에서 각각 해가 나오고, $a>1$ 쪽 해는 1 보다 커야, $0<a<1$ 쪽 해는 0 과 1 사이여야 유효하다. 우변을 상수로 두면 한쪽 분기가 해를 잃어 「모든 $a$ 의 합」이라는 발문이 무의미해진다."
    creative: "(1) 사각형을 삼각형으로 바꾸면 36-61 골조로 내려가 ★3 (2) $\\overline{\\pt{B}_n\\pt{B}_{n+1}}$ 대신 $\\overline{\\pt{A}_n\\pt{B}_n}$ 을 쓰면 근호가 사라져 계산이 가벼워지고 ★3 (3) 분기별 해의 유효성 검증을 강제하도록 우변을 조정해 한 분기를 기각시키면 I-VF 가 추가돼 ★5 자격에 근접."
```

```yaml
- id: GN-CALC2-36-65
  page: 36
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    함수 $f(x)=\lim\limits_{n\to\infty}\dfrac{2x^{2n-1}+4}{x^{2n}+1}$ 의 그래프와 직선 $y=2x+k$ 가
    서로 다른 두 점에서 만나도록 하는 모든 정수 $k$ 의 값의 합.
  category: "$|x|<1$·$x=1$·$x=-1$·$|x|>1$ 분기로 $f$ 를 구간별로 확정 → 그래프와 직선의 교점 개수 → 정수 $k$ 합"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x^{2n}$ 의 거동이 $|x|<1$·$|x|>1$ 에서 갈리고 $x=1$·$x=-1$ 은 각각 따로 대입해야 해 네 경우가 모두 $f$ 의 일부를 이룸"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간별 식(상수 4 · 고립점 3 과 1 · 유리함수 $2/x$)을 좌표평면 그래프로 옮겨야 직선과의 교점을 셀 수 있음"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=\\pm1$ 의 고립점이 직선 위에 놓이는지, 경계가 포함인지 제외인지를 $k$ 마다 되짚어 교점이 정확히 둘인 $k$ 만 남겨야 함"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "극한으로 정의된 함수의 그래프와 직선의 교점 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $|x|<1$ 에서 $f(x)=4$, $x=1$ 에서 3, $x=-1$ 에서 1, $|x|>1$ 에서 $f(x)=\dfrac2x$ 로 구간마다 다른 식이 되고
    $x=\pm1$ 은 그래프에서 고립된 점으로 남는다. 기울기 2 인 직선을 평행이동하며 교점이 정확히 둘이 되는 $k$ 를
    고립점 통과 여부까지 포함해 세야 하므로 검증 부담이 크다.
    실력 UP ★4 출발 · 통찰 3개 · M_total 10 → ★4.
    [분류 이슈] 통찰 3개 + I-VF 로 ★5 의 저노출 유형 게이트(§2.13)는 통과하나 novelty_score 0 이라 §2.14 에 걸려 ★4 로 둠.
  tier: star_4
  mechanism_primary: "$x$ 범위 4분기로 $f$ 확정(상수 4 · 고립점 · $2/x$) → 그래프와 $y=2x+k$ 의 교점 2 개 조건 → 정수 $k$ 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/36-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(2·4)와 직선의 기울기 2 를 바꿀 수 있다. 제약 — 분자 지수가 $2n-1$(홀수)이어야 $x=-1$ 에서 부호가 뒤집혀 고립점이 생긴다. 지수를 $2n$ 으로 바꾸면 $x=\\pm1$ 값이 같아져 고립점 함정이 사라진다. 직선의 기울기를 0 으로 두면 교점 개수 세기가 단순해져 골조가 달라진다."
    creative: "(1) 「두 점」을 「세 점」·「한 점」으로 바꾸면 같은 그래프에서 $k$ 범위만 달라져 ★4 유지 (2) 직선을 $y=k$ 로 바꾸면 고립점 판정만 남아 ★3 (3) $f$ 의 불연속점 개수나 $f$ 가 연속이 되도록 하는 계수를 묻게 하면 연속 단원과 결합해 I-XU 가 더해지고 ★5 자격에 근접."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 4 · ★2 12 · ★3 12 · ★4 2 · ★5 0
- 통찰형 21 · 절차형 9 · premium 0
- 통찰 유형 분포(연 29개 라벨): I-MI 9 · I-EQV 7 · I-XU 4 · I-BW 3 · I-VF 3 · I-RT 3 (I-SC·I-SYM·I-PD·I-CON 0)
- depth 분포: d1 8 · d2 21 · d3 0
- type_hint 상위: 「다른 단원 상황에서 정의된 지수 수열의 극한」 4(35-58·35-59·35-60·36-61) · 「$r^n$ 포함 수열의 극한 — 공비 범위별 분기」 3(33-e13·33-47·35-56) · 「등비수열의 극한 (2) — 수렴하는 수열이 섞인 지수 유리식」 3(31-e11·31-44·34-53) · 「등비수열 {r^n} 의 수렴·발산 판정」 2(30-40·34-49) · 「지수 유리식의 극한(최대 밑으로 나누기)」 2(30-41·34-50). 그 밖에 「수렴 조건 — 첫째항 0 분기」 2 · 「수렴 조건 — 로그·삼각식 공비」 2 · 「밑 통일 후 최대 밑으로 나누기」 2 · 「극한값 조건으로 공비 역추적」 2.
- 그림: 0문(이 범위에 크롭이 붙은 문항 없음. `36-61`·`36-64` 는 좌표평면 배치를 발문 글로만 서술한다)
- 대상층: 하위권 3 · 중하위권 5 · 중위권 7 · 중상위권 13 · 상위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-35-58 | STEP 2 출발 ★3 이나 통찰 0 · 순수 연립 계산이라 절차형 ★2 가 실질에 가까움. 라벨은 벤더 신호대로 ★3 유지 | ★2 / ★3 |
| GN-CALC2-35-59 | M_total 5 · 계산 한 줄이라 ★2 후보이나, 진입 저항이 「약수의 총합 → 등비급수」 결합(I-XU)이라 ★3 유지 | ★2 / ★3 |
| GN-CALC2-36-62 | 통찰 2개(I-VF·I-EQV d2)로 +1 후보였으나 각 단계 계산이 한 줄이라 ★4 로 올리지 않음 | ★3 / ★4 |
| GN-CALC2-36-65 | 통찰 3개 + I-VF 로 ★5 의 저노출 유형 게이트(§2.13)는 통과하지만 novelty_score 0 이라 §2.14 RED 를 피해 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 미적분Ⅱ 유형 카탈로그를 만들 때 참고).

- **따로 세워야 할 유형**: ⑴ 「$r^n$ 을 포함한 수열의 극한 — 공비 범위별 분기」(33-e13·33-47·35-56)와 ⑵ 「극한값 조건으로 공비를 역추적」(33-48·36-63)은 M·I 프로파일이 확연히 달라(⑵ 는 I-BW 가 필수) 한 유형으로 묶으면 안 된다. ⑶ 「수렴하는 수열이 섞인 지수 유리식」(31-e11·31-44·34-53)은 유계성 논증이 골조라 단순 지수 유리식과 분리한다. ⑷ 「극한으로 정의된 함수」(36-65)는 이 단원 안에서 유일하게 함수·그래프 층위로 올라가므로 별도 base ★4 유형이 필요하다.
- **통합해도 될 유형**: 「밑 통일 후 최대 밑으로 나누기」(31-e10·31-43)와 「지수 유리식의 극한」(30-41·34-50)은 밑 통일 한 단계 차이뿐이라 한 유형(base ★1~2)의 난이도 변형으로 묶을 수 있다. 「공비에 로그식」(32-46)과 「공비에 삼각식」(34-54)도 「다른 단원 식이 공비 자리에 온 수렴 조건」 하나로 묶고 어떤 함수인지를 변형 축으로 두는 편이 낫다. 「다른 단원 상황에서 정의된 지수 수열의 극한」(35-58·35-59·35-60·36-61)은 상황(교점·약수·나머지·넓이)만 갈아끼운 같은 골조라 한 유형 + 상황 슬롯으로 설계하면 변형 생산성이 가장 높다.
- **출발점 규칙 메모**: 필수·발전 예제 구역의 「확인체크」 6문(31-43·31-44·32-45·32-46·33-47·33-48)은 태그만 보면 개념원리 익히기와 같은 ★1 신호지만 실제로는 바로 앞 필수 예제의 짝 문항이다. 이 파일은 짝 예제와 같은 ★2 를 출발점으로 썼다. 카탈로그를 만들 때 이 구조를 벤더 신호 표에 명시해 두는 편이 낫다.
- **미사용 통찰 유형**: 이 단원 30문에서 I-SC·I-SYM·I-PD·I-CON 라벨이 하나도 나오지 않았다. ★5 자격(SC/VF/SYM/XU 중 하나 + 통찰 3개)을 채우려면 창의 변형에서 이 축을 의도적으로 넣어야 한다.
