---
name: mechanism-데이터-RPM-PROB-05-p1
description: RPM 확률과 통계 05 확률분포 (2)(1/3 · 교과서 05-1 ~ 유형 02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 05 확률분포 (2)
  unit_code: PROB-05
  part: "1/3"
  extract_range: "69~72쪽 · 0407~0437"
  total_problems: 31
  unit_total: 101
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 05 확률분포 (2) (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 5단원의 앞 3분의 1(69~72쪽 · 전사본 0407~0437 · 31문항)을 다룬다. 구역은 「교과서 05-1 연속확률변수의 확률분포」 5문 · 「교과서 05-2 정규분포」 3문 · 「교과서 05-3 정규분포곡선의 성질」 1문 · 「교과서 05-4 표준정규분포」 10문 · 「교과서 05-5 정규분포의 표준화」 3문 · 「교과서 05-6 이항분포와 정규분포의 관계」 3문 · 「유형 01 확률밀도함수의 성질」 3문 · 「유형 02 연속확률변수의 확률 구하기」 3문으로, 25문이 교과서 구역이고 유형 구역은 6문뿐이다. 단원 도입부라 개념 정의 확인과 표준정규분포표 조작이 대부분을 차지한다.

벤더 난이도 신호는 구역(교과서 / 유형) · 난이도 표시(하~상) · 태그(대표문제 · 서술형)의 세 가지다. 이 범위에서 level 표시가 붙은 문항은 유형 구역의 5문(0433 중하 · 0434 중 · 0436 중 · 0437 중)뿐이고 교과서 25문은 모두 표시가 없어 ★1 출발점을 썼다. 골조가 「넓이 = 1」·「표준화 후 표 조회」 둘로 수렴해 통찰 라벨이 붙은 문항이 1문(0425)에 그치는, 전형적인 단원 도입 절차형 구간이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`) · 통찰 라벨(`insights[]`) · 변형 여지와 제약(`variation_notes`)을 채웠다. 특히 표준정규분포표를 쓰는 문항은 표에 실린 z 값(0.5 · 1 · 1.5 · 2)과 확률값이 한 쌍으로 묶여 있어 숫자 변형 제약이 강하다는 점을 `variation_notes.numeric` 에 명시했다. 답(`answer`)은 전사·검수 단계에서 답지 대조를 마친 값을 그대로 옮긴 것이며, 여기서 재검산하지 않았다.

## 문항 데이터

### 교과서 05-1 연속확률변수의 확률분포

```yaml
- id: RPM-PROB-0407
  page: 69
  vendor_label: "교과서 05-1 연속확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $0\le x\le 1$ 에서 확률밀도함수가 될 수 있는 것을 보기 ㄱ~ㄹ($1$, $x$, $x-\dfrac{1}{2}$, $2-2x$)에서 모두 고르기.
  category: "확률밀도함수의 두 조건(비음 · 넓이 1) → 보기별 판별"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수가 될 조건(f(x)≥0 · 넓이 1) 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기 네 개에 같은 두 조건을 기계적으로 대입하는 정의 확인 문항. ㄴ은 넓이가 부족하고 ㄷ은 구간 일부에서 음수라 탈락한다.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "각 보기에 f(x)≥0 확인 → [0,1] 위 넓이가 1인지 확인 → 둘 다 만족하는 것 고르기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 [0,2]·[0,3] 으로 바꾸고 보기의 일차식 계수를 그에 맞춰 조정. 제약: 정답 보기는 넓이가 정확히 1이어야 하고, 오답 보기는 '넓이 부족/초과' 와 '음수 구간' 두 종류를 각각 최소 하나씩 남겨야 판별 의미가 산다."
    creative: "(1) 보기를 그래프로 주면 0433 과 같은 골조(★2) (2) 보기에 상수 k 를 넣어 '확률밀도함수가 되도록 하는 k' 로 바꾸면 역방향이 되어 ★2 (3) 구간별로 정의된 조각함수를 보기에 섞으면 넓이 계산이 두 조각이 되어 ★2."
```

```yaml
- id: RPM-PROB-0408
  page: 69
  vendor_label: "교과서 05-1 연속확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $f(x)=\dfrac{1}{3}\ (0\le x\le 3)$ 일 때 $\mathrm{P}(X\ge 1)$ 구하기.
  category: "균등분포 → 직사각형 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상수 확률밀도함수(균등분포)에서 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑변 2, 높이 1/3 인 직사각형 넓이 한 줄. 연속확률변수에서 확률 = 넓이라는 정의를 처음 쓰는 문항.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(X≥1) = 구간 [1,3] 직사각형 넓이 = 2 × 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이 L 과 묻는 경계를 바꿀 수 있음(예: [0,5]·P(X≤2)). 제약: 높이는 1/L 로 자동 결정되고, 답이 보기 좋은 분수가 되려면 경계가 정수여야 한다."
    creative: "(1) 확률값을 주고 경계를 묻는 역방향(★1~2) (2) 상수 k 를 미지수로 두고 k 와 확률을 함께 묻기 = 0410 골조(★1) (3) '두 구간 중 어느 쪽 확률이 큰가' 비교로 바꾸면 계산 없이 그림으로 판단 가능해 ★1 유지."
```

```yaml
- id: RPM-PROB-0409
  page: 69
  vendor_label: "교과서 05-1 연속확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $f(x)=\dfrac{1}{8}x\ (0\le x\le 4)$ 일 때 $\mathrm{P}(0\le X\le 3)$ 구하기.
  category: "일차 확률밀도함수 → 삼각형 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차 확률밀도함수 그래프 아래 삼각형 넓이로 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원점을 지나는 직선이므로 [0,3] 구간 확률은 밑변 3, 높이 f(3)=3/8 인 삼각형 넓이. 적분 없이 도형 넓이로 처리하는 교과서 기본형.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(3)=3/8 → 삼각형 넓이 (1/2)×3×(3/8)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 [0,a] 와 묻는 상한 b 를 바꿀 수 있음. 제약: 기울기는 2/a^2 로 고정되어 전체 넓이 1을 유지해야 하고, 답은 (b/a)^2 이므로 b/a 가 간단한 분수일 때만 답이 깔끔하다."
    creative: "(1) 상한을 묻는 역방향(확률 1/4 이 되는 b)으로 바꾸면 제곱근이 나와 ★2 (2) P(X≥b) 로 바꿔 여사건을 쓰게 하기(★1) (3) 직선이 원점을 지나지 않게 하면 사다리꼴이 되어 계산 단계가 늘고 ★2."
```

```yaml
- id: RPM-PROB-0410
  page: 69
  vendor_label: "교과서 05-1 연속확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $f(x)=k\ (-3\le x\le 3)$ 일 때 ⑴ 상수 $k$ ⑵ $\mathrm{P}(X\ge 2)$ 구하기.
  category: "전체 넓이 1 → k 결정 → 부분 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "균등분포의 상수 결정과 구간 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 6k=1 로 k 를 정하고 ⑵ 그 k 를 폭 1 짜리 구간에 곱한다. 소문항이 상수 결정 → 확률 계산 순서를 그대로 보여 주는 유도형 배치.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "전체 넓이 6k=1 → k=1/6 → P(X≥2) = 1 × k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{6}$ (2) $\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 [-a,a] 와 ⑵의 경계를 바꿀 수 있음. 제약: k=1/(2a) 이므로 답이 분수로 정리되려면 경계까지의 폭이 정수여야 하고, 여기처럼 ⑴과 ⑵의 답이 같아지는 우연은 폭이 1일 때만 생긴다."
    creative: "(1) ⑵를 P(|X|≤1) 로 바꿔 절댓값 조건을 넣기(★1~2) (2) ⑵를 조건부확률 P(X≥2 | X≥0) 로 바꾸면 단원 결합이 되어 ★3 (3) k 를 그림으로만 주고 식을 세우게 하면 0432 골조."
```

```yaml
- id: RPM-PROB-0411
  page: 69
  vendor_label: "교과서 05-1 연속확률변수의 확률분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $0\le x\le 2$ 에서 정의된 확률밀도함수의 그래프(원점에서 시작하는 직선)가 주어질 때 ⑴ $f(x)$ 의 식 ⑵ $\mathrm{P}(1\le X\le 2)$ ⑶ $\mathrm{P}\left(X\le \dfrac{3}{2}\right)$ 구하기.
  category: "그래프 → 식 복원 → 부분 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 확률밀도함수의 식을 읽고 구간 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 전체 삼각형 넓이 1 조건에서 f(2)=1 이 나와 식이 정해지고, ⑵⑶은 그 직선 아래 삼각형 넓이. ⑵는 여사건(작은 삼각형 빼기)이 빠르다.
    그래프 읽기가 앞 문항보다 한 단계 더 붙었지만 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "전체 삼각형 넓이 1 → f(x)=x/2 → 구간별 삼각형 넓이로 ⑵⑶ 계산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $f(x)=\dfrac{1}{2}x$ (2) $\dfrac{3}{4}$ (3) $\dfrac{9}{16}$'
  answer_source: "답지"
  figure: crop:fig-0411-2.png
  latex: latex-bank/rpm-prob/items/0411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 상한과 ⑵⑶의 경계를 바꿀 수 있음. 제약: 그림의 축 눈금 라벨(0, 1, 2)이 고정되어 있으므로 숫자를 바꾸면 크롭을 다시 만들어야 하고, 기울기는 2/a^2 로 넓이 1을 유지해야 한다."
    creative: "(1) 직선을 오른쪽에서 왼쪽으로 내려가는 모양으로 뒤집기(★1) (2) 꼭짓점이 중간에 있는 이등변 삼각형으로 바꾸면 0436 골조(★2) (3) 그래프를 주지 않고 'f(0)=0 인 일차함수' 라는 말로만 주면 그림 의존이 사라지면서 ★2."
```

### 교과서 05-2 정규분포

```yaml
- id: RPM-PROB-0412
  page: 69
  vendor_label: "교과서 05-2 정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평균과 분산이 $\mathrm{E}(X)=6$, $\mathrm{V}(X)=4$ 인 연속확률변수가 따르는 정규분포를 $\mathrm{N}(m,\,\sigma^2)$ 꼴로 나타내기.
  category: "평균·분산 → 정규분포 기호"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균·분산으로 정규분포를 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m=E(X), 두 번째 자리는 분산을 제곱꼴로 적는다는 표기 약속만 확인하는 문항. 분산 4를 2^2 으로 쓰는 T-표기 지점이 유일한 걸림돌이다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "m=E(X)=6 · 분산 4를 2^2 으로 표기 → N(6, 2^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{N}(6,\,2^2)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균은 아무 값이나, 분산은 완전제곱수(9·16·25)로. 제약: 분산이 완전제곱수가 아니면 기호 안에 근호가 들어가 교과서 기본 문항의 의도를 벗어난다."
    creative: "(1) 분산 대신 표준편차를 주기(★1) (2) N(m, sigma^2) 를 주고 평균·분산을 되묻는 역방향(★1) (3) 두 확률변수의 N 표기를 주고 어느 쪽이 더 퍼져 있는지 묻기 = 0415 의 ㄹ 보기와 같은 초점(★1~2)."
```

```yaml
- id: RPM-PROB-0413
  page: 69
  vendor_label: "교과서 05-2 정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평균과 분산이 $\mathrm{E}(X)=8$, $\mathrm{V}(X)=9$ 인 연속확률변수가 따르는 정규분포를 $\mathrm{N}(m,\,\sigma^2)$ 꼴로 나타내기.
  category: "평균·분산 → 정규분포 기호"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균·분산으로 정규분포를 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0412 와 같은 골조로 숫자만 바뀐 쌍둥이 문항. 분산 9를 3^2 으로 적는 표기 확인이 전부다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "m=E(X)=8 · 분산 9를 3^2 으로 표기 → N(8, 3^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{N}(8,\,3^2)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0412 와 동일. 두 문항이 한 쌍이므로 변형할 때도 분산이 완전제곱수인 쌍으로 묶어 난도를 맞춘다."
    creative: "(1) 한쪽만 표준편차로 주어 표기 혼동을 시험하기(★1) (2) V(X) 대신 sigma(X) 를 주고 N 표기를 묻기(★1) (3) E(2X+1), V(2X+1) 을 묻는 일차변환으로 확장하면 0414 골조(★1~2)."
```

```yaml
- id: RPM-PROB-0414
  page: 69
  vendor_label: "교과서 05-2 정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 $\mathrm{N}(10,\,3^2)$ 을 따를 때 $Y=2X-1$ 에 대하여 ⑴ $\mathrm{E}(Y)$, $\sigma(Y)$ ⑵ $Y$ 가 따르는 정규분포를 기호로 나타내기.
  category: "일차변환의 평균·표준편차 → 정규성 보존"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포를 따르는 확률변수의 일차변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    E(aX+b)=aE(X)+b, sigma(aX+b)=|a|sigma(X) 두 공식을 쓴 뒤, 정규분포의 일차변환이 다시 정규분포라는 성질로 ⑵를 마무리한다.
    표준편차에 절댓값이 붙는 T-부호 지점이 있지만 여기선 a>0 이라 드러나지 않는다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "E(Y)=2·10-1 · sigma(Y)=|2|·3 → 정규성 보존으로 N(19, 6^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\mathrm{E}(Y)=19$, $\sigma(Y)=6$ (2) $\mathrm{N}(19,\,6^2)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, sigma 와 일차변환의 계수 a, b 를 바꿀 수 있음. 제약: |a|·sigma 가 정수여야 N 표기가 깔끔하고, a<0 으로 두면 표준편차의 절댓값 처리가 핵심 함정이 되어 난도가 한 단계 오른다."
    creative: "(1) a 를 음수로 두어 sigma(Y)=|a|sigma(X) 를 확인시키기(★2 · T-부호) (2) Y 의 분포를 주고 a, b 를 역으로 찾게 하면 I-BW 가 붙어 ★2~3 (3) 표준화 Z=(X-m)/sigma 가 일차변환의 특수한 경우임을 묻는 서술형으로 확장(★3)."
```

### 교과서 05-3 정규분포곡선의 성질

```yaml
- id: RPM-PROB-0415
  page: 69
  vendor_label: "교과서 05-3 정규분포곡선의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\mathrm{N}(m,\,\sigma^2)$ 을 따르는 $X$ 의 확률밀도함수 그래프에 대한 보기 ㄱ~ㄹ(넓이 1 · $x=m$ 대칭 · $x=m$ 에서 최댓값 · $\sigma$ 가 작아질수록 넓게 퍼짐) 중 옳은 것 모두 고르기.
  category: "정규분포곡선의 성질 → 보기별 진위 판정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포곡선의 성질(대칭축·최댓값·전체 넓이·σ와 폭)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    계산이 전혀 없고 곡선의 네 성질을 기억하는지만 묻는다. ㄹ만 방향이 뒤집혀 있어(σ 가 작아지면 좁고 높아진다) 유일한 오답 보기다.
    m, σ 가 문자로 주어져 Mₐ=2 이지만 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "정규분포곡선의 네 성질과 각 보기 대조 → σ와 폭의 방향만 뒤집힌 ㄹ 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자가 없는 성질 문항이라 수치 변형 여지가 없다. 변형은 보기 문장 교체로 한다."
    creative: "(1) 오답 보기를 'm 이 커지면 곡선 모양이 변한다'(평행이동일 뿐) 로 바꾸기(★1) (2) 두 정규분포곡선 그림을 주고 m·σ 대소를 비교하게 하면 그림 해석이 더해져 ★2 (3) '곡선과 x축이 만난다' 같은 점근선 성질을 넣으면 ★2."
```

### 교과서 05-4 표준정규분포

```yaml
- id: RPM-PROB-0416
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(0.5\le Z\le 2)$ 구하기.
  category: "표준정규분포표 → 두 표값의 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표로 양수 구간의 확률 구하기(표값의 차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표가 P(0≤Z≤z) 형태로 주어지므로 두 구간이 모두 0의 오른쪽일 때는 큰 표값에서 작은 표값을 빼면 된다.
    표 조회 두 번과 뺄셈 한 번. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(0≤Z≤2) − P(0≤Z≤0.5) 로 분해 → 표값 차"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.2857$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 경계를 바꿀 수 있지만 반드시 곁들인 표준정규분포표에 실린 z 값(여기서는 0.5·1·1.5·2)만 써야 한다. 표에 없는 z 를 쓰면 답이 나오지 않으므로 표를 함께 바꾸지 않는 한 자유 변형 불가."
    creative: "(1) 두 경계를 0 양쪽으로 벌려 합으로 바꾸기(★1) (2) 확률값을 주고 경계를 묻는 역방향 = 0422~0425 골조(★1~2) (3) 표준화가 필요한 X 로 감싸면 0428 골조(★1~2)."
```

```yaml
- id: RPM-PROB-0417
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(Z\ge 2)$ 구하기.
  category: "전체의 절반 − 표값(오른쪽 꼬리)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표로 꼬리 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표는 0부터 z 까지만 주므로 오른쪽 꼬리는 0.5에서 표값을 뺀다. P(Z≥0)=0.5 라는 대칭 사실이 전제다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(Z≥2) = 0.5 − P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.0228$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 z 를 표에 실린 값으로만 교체 가능(0.5·1·1.5·2). 제약: 표가 바뀌지 않으면 다른 z 는 쓸 수 없다."
    creative: "(1) 왼쪽 꼬리 P(Z≤−2) 로 바꿔 대칭을 한 번 더 쓰게 하기 = 0419 골조(★1) (2) '0.0228 이 되는 경계' 로 뒤집어 역참조(★1) (3) P(Z≥2) 를 이용해 P(|Z|≥2) 를 묻는 2단 구성(★2)."
```

```yaml
- id: RPM-PROB-0418
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(Z\le 1)$ 구하기.
  category: "전체의 절반 + 표값(왼쪽 누적)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표로 누적 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0 왼쪽 절반(0.5)에 0부터 1까지의 표값을 더한다. 0417 과 부호 방향만 다른 짝 문항.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(Z≤1) = 0.5 + P(0≤Z≤1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.8413$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계를 표에 실린 z 로만 교체. 제약: 0417 과 합이 1이 되는 쌍(P(Z≤z)+P(Z≥z)=1)을 유지하면 검산 장치로 쓸 수 있다."
    creative: "(1) 0 왼쪽 경계 P(Z≤−1) 로 바꾸면 대칭이 한 번 더 필요해 ★1 (2) P(Z≤z)=0.8413 인 z 를 묻는 역참조 = 0422 골조(★1) (3) 두 누적확률의 차로 구간 확률을 만들게 하면 ★2."
```

```yaml
- id: RPM-PROB-0419
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(Z\le -1.5)$ 구하기.
  category: "대칭 이동 → 꼬리 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음수 경계의 확률을 대칭으로 옮겨 표에서 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에 음수 z 가 없으므로 P(Z≤−1.5)=P(Z≥1.5) 로 대칭 이동한 뒤 0.5에서 표값을 뺀다.
    부호를 옮기는 T-부호 지점이 이 구역의 유일한 함정이지만 표준정규분포의 대칭은 표준 절차라 통찰로 세지 않았다. M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "대칭으로 P(Z≤−1.5)=P(Z≥1.5) → 0.5 − P(0≤Z≤1.5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.0668$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계를 표에 실린 음수 z 로만 교체. 제약: 반드시 음수여야 대칭 이동 단계가 살아 있고, 양수로 바꾸면 0418 과 같은 문항이 된다."
    creative: "(1) P(−1.5≤Z≤0) 로 바꿔 대칭 후 표값 그대로 읽기(★1) (2) P(Z≤−a)=0.0668 인 a 를 묻는 역참조(★1~2) (3) 음수·양수 경계를 섞은 P(−1.5≤Z≤1) 로 확장하면 두 조각 합이 되어 ★1~2."
```

```yaml
- id: RPM-PROB-0420
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(-0.5\le Z\le 0.5)$ 구하기.
  category: "0 대칭 구간 → 표값의 2배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0에 대하여 대칭인 구간의 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간이 0을 중심으로 대칭이므로 P(0≤Z≤0.5) 를 두 배 한다. 표를 한 번만 보면 되는 가장 짧은 유형.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "대칭 구간 → 2 × P(0≤Z≤0.5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.383$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭 폭 a 를 표에 실린 값으로만 교체. 제약: 두 경계의 절댓값이 같아야 '2배' 골조가 유지되고, 다르면 0419 처럼 조각 합/차로 바뀐다."
    creative: "(1) P(|Z|≥0.5) 로 여사건을 씌우기(★1) (2) P(−a≤Z≤a)=0.8664 인 a 를 묻는 역참조 = 0424 골조(★1) (3) 경계를 비대칭(−0.5, 2)으로 바꾸면 조각 합이 되어 ★1~2."
```

```yaml
- id: RPM-PROB-0421
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 표준정규분포표를 이용하여 $\mathrm{P}(Z\ge -0.5)$ 구하기.
  category: "음수 경계 오른쪽 → 표값 + 0.5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음수 경계에서 오른쪽 전체의 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간을 [−0.5, 0] 과 [0, ∞) 로 쪼개고 앞쪽은 대칭으로 표값, 뒤쪽은 0.5 를 쓴다.
    이 구역 여섯 문항(0416~0421)이 '차 · 꼬리 · 누적 · 대칭이동 · 2배 · 합' 여섯 패턴을 한 번씩 훑는 구성이다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(−0.5≤Z≤0) + P(Z≥0) = P(0≤Z≤0.5) + 0.5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.6915$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계를 표에 실린 음수 z 로만 교체. 제약: 0418 과 답이 같아지는 쌍(P(Z≥−z)=P(Z≤z))을 의도적으로 만들면 대칭 이해를 확인하는 장치가 된다."
    creative: "(1) P(Z≥−0.5) 와 P(Z≤0.5) 가 같은 이유를 묻는 서술형(★2) (2) 확률값을 주고 경계를 묻는 역참조(★1~2) (3) X 로 감싸 표준화를 먼저 하게 하면 0428 골조(★1~2)."
```

```yaml
- id: RPM-PROB-0422
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 $\mathrm{P}(Z\le a)=0.9772$ 를 만족시키는 상수 $a$ 구하기.
  category: "누적확률 → 표값으로 환산 → 역참조"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표 역참조로 상수 구하기(누적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.9772 에서 왼쪽 절반 0.5 를 떼어 내 P(0≤Z≤a)=0.4772 로 바꾼 뒤 표에서 a 를 거꾸로 읽는다.
    조건이 결과 쪽에서 주어지지만 표 역참조는 이 단원의 표준 절차라 I-BW 로 세지 않았다. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "0.9772 − 0.5 = P(0≤Z≤a) → 표에서 a 역참조"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 확률값은 표에 실린 표값 + 0.5 여야 한다(0.6915 · 0.8413 · 0.9332 · 0.9772). 제약: 임의의 확률을 주면 표에서 읽히지 않으므로 표와 한 쌍으로만 변형한다."
    creative: "(1) P(Z≥a) 꼴로 바꾸기 = 0423 골조(★1) (2) 확률을 0.5 미만으로 주어 a 가 음수가 되게 하면 부호 함정이 생겨 ★2 (3) X 를 표준화한 뒤 상수를 묻게 하면 단계가 하나 늘어 ★2."
```

```yaml
- id: RPM-PROB-0423
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 $\mathrm{P}(Z\ge a)=0.3085$ 를 만족시키는 상수 $a$ 구하기.
  category: "꼬리확률 → 표값으로 환산 → 역참조"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표 역참조로 상수 구하기(꼬리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0.3085 가 0.5 보다 작으므로 a 는 양수. 0.5 − 0.3085 = P(0≤Z≤a) 로 바꿔 표에서 읽는다.
    확률이 0.5 보다 큰지 작은지로 a 의 부호를 먼저 가늠하는 것이 이 구역의 T-부호 지점이다. M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "0.5 − 0.3085 = P(0≤Z≤a) → 표에서 a 역참조"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 확률은 0.5 − 표값 꼴이어야 한다(0.3085 · 0.1587 · 0.0668 · 0.0228). 제약: 0.5 를 넘는 값을 주면 a 가 음수가 되어 골조가 바뀐다."
    creative: "(1) 확률을 0.6915 로 주어 a 가 음수가 되게 하기(★2 · T-부호) (2) P(Z≤a) 꼴로 뒤집기 = 0422 골조(★1) (3) P(Z≥a)=P(Z≤2a) 처럼 두 확률을 같게 놓으면 대칭 조건이 되어 ★2~3."
```

```yaml
- id: RPM-PROB-0424
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 $\mathrm{P}(-a\le Z\le a)=0.8664$ 를 만족시키는 상수 $a$ 구하기.
  category: "대칭 구간 → 절반으로 환산 → 역참조"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭 구간 확률로부터 상수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간이 0 대칭이므로 0.8664 를 2로 나눠 P(0≤Z≤a)=0.4332 로 만든 뒤 표에서 a 를 읽는다. 0420 의 역방향.
    2로 나누는 한 단계만 추가된 표준 절차. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "0.8664 ÷ 2 = P(0≤Z≤a) → 표에서 a 역참조"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1.5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 확률은 표값의 2배여야 한다(0.383 · 0.6826 · 0.8664 · 0.9544). 제약: 2배가 표에 없는 값이면 a 를 읽을 수 없다."
    creative: "(1) P(|Z|≥a)=0.1336 으로 여사건을 씌우기(★1~2) (2) 구간을 비대칭 −a ~ 2a 로 바꾸면 한 번에 역참조가 안 되어 ★2 = 0425 골조 (3) X 의 대칭 구간 P(m−k≤X≤m+k) 로 감싸면 표준화가 더해져 ★2."
```

```yaml
- id: RPM-PROB-0425
  page: 71
  vendor_label: "교과서 05-4 표준정규분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $Z$ 가 $\mathrm{N}(0,\,1)$ 을 따를 때 $\mathrm{P}(-a\le Z\le 2a)=0.8185$ 를 만족시키는 상수 $a$ 구하기.
  category: "비대칭 구간 → 두 표값의 합 → a 역추적"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미지수가 두 경계에 동시에 들어가 표 역참조가 한 번에 되지 않으므로, P(0≤Z≤a)+P(0≤Z≤2a)=0.8185 를 만족하는 a 를 표값 조합에서 거꾸로 찾아야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "비대칭 구간 확률로부터 상수 구하기(표값 합 역추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0 에서 구간을 쪼개면 P(0≤Z≤a)+P(0≤Z≤2a)=0.8185 인데, 미지수가 양쪽에 걸려 있어 0422~0424 처럼 단번에 표를 거꾸로 읽을 수 없다.
    표에 실린 z 값 중 a 와 2a 가 모두 존재하는 후보를 놓고 합을 맞춰 봐야 한다는 점이 앞 네 문항과 갈리는 지점이다.
    교과서 ★1 출발이지만 역추적 통찰 1개(BW d1)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "0에서 분할 → P(0≤Z≤a)+P(0≤Z≤2a)=0.8185 → 표값 조합으로 a 역추적"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 비율을 −a ~ 3a 등으로 바꿀 수 있지만 a 와 그 배수가 모두 표에 실려 있어야 한다(표가 0.5·1·1.5·2 만 담고 있으면 (a, 2a)=(0.5,1)·(1,2) 두 쌍뿐). 제약: 확률값은 그 두 표값의 합으로 역산해 적는다."
    creative: "(1) 경계를 −2a ~ a 로 뒤집기(★2 유지) (2) X 를 표준화하면 a 가 m·σ 에 걸려 ★3 (3) 답이 되는 a 후보가 둘 나오도록 구성한 뒤 하나를 조건 위배로 기각시키면 I-VF 가 붙어 ★3."
```

### 교과서 05-5 정규분포의 표준화

```yaml
- id: RPM-PROB-0426
  page: 71
  vendor_label: "교과서 05-5 정규분포의 표준화"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 $\mathrm{N}(5,\,2^2)$ 을 따를 때 $X$ 를 표준정규분포 $\mathrm{N}(0,\,1)$ 을 따르는 $Z$ 로 표준화하기.
  category: "표준화 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 표준화 식 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    Z=(X−m)/sigma 에 m=5, sigma=2 를 넣는 한 줄. 기호 안의 두 번째 자리가 제곱꼴로 적혀 있어 sigma 를 바로 읽을 수 있다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "Z=(X−m)/sigma 에 m=5, sigma=2 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$Z=\dfrac{X-5}{2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 과 sigma 를 자유롭게 교체. 제약: sigma 가 정수라야 분모가 깔끔하고, 기호의 두 번째 자리를 제곱꼴로 쓸지 그냥 값으로 쓸지에 따라 난도가 갈린다(0427 참조)."
    creative: "(1) 두 번째 자리를 제곱꼴이 아닌 수로 주기 = 0427 골조(★1) (2) 표준화한 Z 로 특정 확률을 묻게 하면 0428 골조(★1) (3) 표준화 식을 주고 원래 분포를 역으로 묻기(★1~2)."
```

```yaml
- id: RPM-PROB-0427
  page: 71
  vendor_label: "교과서 05-5 정규분포의 표준화"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 $\mathrm{N}(30,\,9)$ 를 따를 때 $X$ 를 표준정규분포 $\mathrm{N}(0,\,1)$ 을 따르는 $Z$ 로 표준화하기.
  category: "분산에서 표준편차 복원 → 표준화 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 표준화 식 세우기(분산 표기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 번째 자리 9 는 분산이므로 분모에는 sigma=3 이 들어간다. 9 를 그대로 분모에 쓰는 것이 이 구역의 대표적인 T-표기 함정.
    0426 과 한 쌍으로 제곱꼴 표기와 값 표기를 모두 겪게 하는 배치다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분산 9 → sigma=3 → Z=(X−30)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$Z=\dfrac{X-30}{3}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분산을 완전제곱수(4·16·25·36)로 교체. 제약: 완전제곱수가 아니면 분모에 근호가 생겨 교과서 기본 의도를 벗어나고, 제곱꼴로 적어 버리면 함정이 사라진다."
    creative: "(1) 표준편차를 주고 분산으로 착각하게 유도(★1 · T-표기) (2) 표준화 뒤 확률까지 묻는 2단 = 0428 골조(★1) (3) B(n,p) 를 먼저 근사시켜 표준화하게 하면 0431 골조(★1~2)."
```

```yaml
- id: RPM-PROB-0428
  page: 71
  vendor_label: "교과서 05-5 정규분포의 표준화"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 $\mathrm{N}(8,\,4^2)$ 을 따를 때 ⑴ $X$ 를 $Z$ 로 표준화 ⑵ 표준정규분포표를 이용하여 $\mathrm{P}(4\le X\le 14)$ 구하기.
  category: "표준화 → 구간 경계 환산 → 표값 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화 후 표준정규분포표로 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴에서 세운 Z 식에 구간의 두 경계를 넣어 −1 과 1.5 로 바꾸고, 0 을 사이에 두므로 두 표값을 더한다.
    표준화 → 경계 환산 → 표 조회의 3단이 이 단원의 기본 골조이며 이후 문항이 모두 이 위에 얹힌다. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "Z=(X−8)/4 → 경계 4, 14 를 −1, 1.5 로 환산 → P(0≤Z≤1)+P(0≤Z≤1.5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $Z=\dfrac{X-8}{4}$ (2) $0.7745$'
  answer_source: "답지"
  figure: crop:fig-0428.png
  latex: latex-bank/rpm-prob/items/0428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, sigma 와 구간 경계를 바꿀 수 있지만 환산된 z 값이 곁들인 표에 실린 값(0.5·1·1.5·2)이어야 한다. 제약: 경계는 m ± (표에 있는 z)×sigma 로 역산해 정한다."
    creative: "(1) 경계를 둘 다 평균의 같은 쪽에 두어 표값의 차로 바꾸기(★1) (2) 확률을 주고 경계 또는 m 을 묻는 역방향(★2) (3) 두 정규분포의 같은 확률을 비교하게 하면 표준화의 의미를 묻는 ★3."
```

### 교과서 05-6 이항분포와 정규분포의 관계

```yaml
- id: RPM-PROB-0429
  page: 71
  vendor_label: "교과서 05-6 이항분포와 정규분포의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 이항분포 $\mathrm{B}\left(48,\,\dfrac{1}{4}\right)$ 를 따를 때 근사적으로 따르는 정규분포를 기호로 나타내기.
  category: "이항분포의 평균·분산 → 정규분포 기호"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사를 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m=np, 분산=npq 를 계산해 N 기호에 넣는다. q=1−p 를 빠뜨리는 것이 유일한 함정.
    분산 9 를 3^2 으로 적는 표기까지가 한 세트다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "m=np=12 · 분산=npq=9 → N(12, 3^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{N}(12,\,3^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p 를 바꾸되 npq 가 완전제곱수가 되어야 한다(48·1/4 → 9, 180·5/6 → 25, 162·1/3 → 36). 제약: n 이 충분히 커야 근사가 성립한다는 전제도 같이 지킨다."
    creative: "(1) p 를 1/2 로 두어 좌우대칭 근사를 만들기(★1) (2) 근사 분포를 주고 n, p 를 역으로 찾게 하면 연립이 되어 ★2~3 (3) 근사 뒤 확률까지 묻게 하면 0431 골조(★1~2)."
```

```yaml
- id: RPM-PROB-0430
  page: 71
  vendor_label: "교과서 05-6 이항분포와 정규분포의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 이항분포 $\mathrm{B}\left(180,\,\dfrac{5}{6}\right)$ 를 따를 때 근사적으로 따르는 정규분포를 기호로 나타내기.
  category: "이항분포의 평균·분산 → 정규분포 기호"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정규분포 근사를 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0429 와 같은 골조로 숫자만 바뀐 쌍둥이 문항. p 가 1/2 보다 커서 q=1/6 을 정확히 쓰는지가 갈림길이다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "m=np=150 · 분산=npq=25 → N(150, 5^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{N}(150,\,5^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0429 와 동일 제약(npq 완전제곱수). 두 문항이 한 쌍이므로 p<1/2 하나, p>1/2 하나로 짝을 맞추면 q 처리 확인이 된다."
    creative: "(1) n 만 주고 '분산이 최대가 되는 p' 를 묻기(★3 · 이차함수 결합) (2) 평균과 분산을 주고 n, p 를 역산(★2) (3) 근사 정규분포로 확률을 구한 뒤 이항분포 직접 계산과 비교하게 하는 서술형(★3)."
```

```yaml
- id: RPM-PROB-0431
  page: 71
  vendor_label: "교과서 05-6 이항분포와 정규분포의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $X$ 가 이항분포 $\mathrm{B}\left(162,\,\dfrac{1}{3}\right)$ 을 따를 때 ⑴ $X$ 를 $Z$ 로 표준화 ⑵ 표준정규분포표를 이용하여 $\mathrm{P}(42\le X\le 60)$ 구하기.
  category: "이항 → 정규 근사 → 표준화 → 표값 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 정규분포로 근사한 뒤 표준화하여 확률 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    npq=36 에서 sigma=6 을 얻어 표준화 식을 세우고, 두 경계를 −2 와 1 로 환산해 0 양쪽 표값을 더한다.
    이 단원의 도구 세 개(이항 근사 · 표준화 · 표 조회)를 한 줄로 이은 교과서 마무리 문항. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "m=54, sigma=6 → Z=(X−54)/6 → 경계 42, 60 을 −2, 1 로 환산 → 표값 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $Z=\dfrac{X-54}{6}$ (2) $0.8185$'
  answer_source: "답지"
  figure: crop:fig-0431.png
  latex: latex-bank/rpm-prob/items/0431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n, p 는 npq 가 완전제곱수가 되도록, 구간 경계는 m ± (표에 있는 z)×sigma 로 역산. 제약: 두 조건이 동시에 걸려 자유도가 낮으므로 (162, 1/3) 계열의 수를 유지하는 편이 안전하다."
    creative: "(1) 경계를 한쪽 꼬리로 바꿔 0.5 − 표값을 쓰게 하기(★1) (2) 확률이 주어진 상태에서 n 을 묻는 역방향(★3) (3) 실생활 문맥(불량품 개수·발아율)으로 감싸면 문장 해석이 더해져 ★2."
```

### 유형 01 확률밀도함수의 성질

```yaml
- id: RPM-PROB-0432
  page: 72
  vendor_label: "유형 01 확률밀도함수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $0\le x\le 2$ 에서 정의된 확률밀도함수의 그래프(원점에서 $(1,\,a)$ 까지 직선, $1\le x\le 2$ 에서 높이 $a$ 인 수평선)가 주어질 때 상수 $a$ 구하기.
  category: "그래프 분할(삼각형+직사각형) → 넓이 합 = 1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수 그래프의 전체 넓이가 1임을 이용해 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도형을 삼각형([0,1])과 직사각형([1,2])으로 쪼개 넓이 합을 a 에 대한 식으로 세우고 1 과 같다고 둔다.
    앞 교과서 구역이 한 조각 도형이었던 데 비해 두 조각으로 늘어난 것이 이 유형의 출발점이다.
    유형 구역·대표문제·level 표시 없음 → ★2 출발, 통찰 없음이지만 M_total 6 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "삼각형 a/2 + 직사각형 a = 1 → a=2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0432.png
  latex: latex-bank/rpm-prob/items/0432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점의 x좌표와 오른쪽 끝을 바꿀 수 있음. 제약: 그림의 눈금 라벨(1, 2)과 높이 라벨 a 가 고정이라 숫자를 바꾸면 크롭을 다시 만들어야 하고, 넓이 합 식이 a 의 일차식이어야 답이 분수 하나로 떨어진다."
    creative: "(1) 오른쪽을 수평선 대신 내려가는 직선으로 바꿔 사다리꼴 하나로 만들기(★2) (2) a 를 준 뒤 꺾이는 점의 위치를 묻는 역방향(★3) (3) a 를 구한 뒤 특정 구간 확률까지 묻는 2단(★2 · 0436 골조와 결합)."
```

```yaml
- id: RPM-PROB-0433
  page: 72
  vendor_label: "유형 01 확률밀도함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $-1\le x\le 1$ 에서 정의된 연속확률변수 $X$ 의 확률밀도함수 $f(x)$ 의 그래프가 될 수 있는 것 고르기. 5지선다(그래프 보기).
  category: "보기별 비음 조건·넓이 1 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수가 될 수 있는 그래프 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기 다섯 개에 같은 두 조건을 건다. ①③은 구간 일부에서 f(x)<0 이라 탈락, ②⑤는 넓이가 2 라 탈락하고 밑변 2·높이 1 인 삼각형 ④만 남는다.
    함정이 부호(T-부호)와 넓이 과다(T-범위) 두 갈래로 갈려 Mₜ=2. 0407 의 식 버전을 그래프로 옮긴 짝 문항이다.
    유형 구역·level 중하 → ★1~2 출발, M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기에 f(x)≥0 확인 → 도형 넓이가 1인지 확인 → 둘 다 만족하는 하나 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0433.png
  latex: latex-bank/rpm-prob/items/0433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 폭과 보기 그래프의 높이를 바꿀 수 있음. 제약: 그림 보기라 숫자를 바꾸면 크롭 5장을 다시 만들어야 하고, 오답 보기는 '음수 구간' 과 '넓이≠1' 두 종류를 각각 최소 하나씩 남겨야 한다."
    creative: "(1) 정답 보기를 사다리꼴로 바꿔 넓이 계산을 한 단계 늘리기(★2) (2) 보기를 식으로 주면 0407 골조(★1) (3) '될 수 있는 것의 개수' 를 묻게 하면 모든 보기를 끝까지 따져야 해 ★2~3."
```

```yaml
- id: RPM-PROB-0434
  page: 72
  vendor_label: "유형 01 확률밀도함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=a(1-x)\ (0\le x\le 1)$, $f(x)=a(x-1)\ (1\le x\le 4)$ 일 때 상수 $a$ 구하기.
  category: "조각함수 → 두 삼각형 넓이 합 = 1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 확률밀도함수의 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조각이 모두 x=1 에서 0 이 되는 일차식이라 그래프가 (1,0) 에서 만나는 삼각형 두 개다. 밑변 1·높이 a 와 밑변 3·높이 3a 의 넓이를 더해 1 로 놓는다.
    식만 보고 부호 때문에 헷갈리기 쉬우나 그래프로 옮기면 바로 보이는 구조. 유형 구역·level 중 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 조각을 삼각형 두 개로 보고 넓이 합 a/2 + 9a/2 = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점의 위치와 오른쪽 끝을 바꿀 수 있음. 제약: 두 조각이 경계에서 같은 값을 가져야 하고(여기선 0), 각 구간에서 f(x)≥0 이 유지되도록 부호를 맞춰야 한다. 넓이 합이 a 의 일차식이므로 답은 항상 1/(넓이계수)."
    creative: "(1) 경계에서 0 이 아닌 값으로 이어 붙여 사다리꼴 조각을 만들기(★3) (2) a 를 구한 뒤 구간 확률까지 묻는 2단(★2 · 0437 골조) (3) 조각 개수를 셋으로 늘리면 계산 부담만 커져 ★ 는 그대로이고 질은 떨어진다(계산 마찰 경고)."
```

### 유형 02 연속확률변수의 확률 구하기

```yaml
- id: RPM-PROB-0435
  page: 72
  vendor_label: "유형 02 연속확률변수의 확률 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=2k(x+1)\ (-1\le x\le 1)$ 일 때 $\mathrm{P}\left(-\dfrac{1}{2}\le X\le 1\right)$ 은? 5지선다($k$ 는 상수).
  category: "넓이 1 → k 결정 → 여사건 삼각형 넓이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 상수를 정한 뒤 구간 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체가 (−1,0) 에서 시작하는 직각삼각형이므로 넓이 식에서 k 가 먼저 정해지고, 묻는 구간은 왼쪽 끝 작은 삼각형을 1 에서 빼는 편이 빠르다.
    직접 사다리꼴로 계산해도 되지만 여사건 쪽이 한 줄 짧다 — 다만 두 갈래 모두 쉬워 전략 선택 통찰로는 세지 않았다.
    유형 구역·대표문제·level 표시 없음 → ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 삼각형 넓이 4k=1 → k=1/4 → 1 − (왼쪽 작은 삼각형 넓이)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역과 묻는 구간의 경계를 바꿀 수 있음. 제약: 직선이 정의역 왼쪽 끝에서 0 이 되어야 삼각형 골조가 유지되고, 답이 (닮음비)^2 꼴이라 경계가 단순 분수여야 선택지가 깔끔하다."
    creative: "(1) 직선을 오른쪽 끝에서 0 이 되게 뒤집기(★2) (2) 확률값을 주고 경계를 묻는 역방향이면 제곱근이 나와 ★3 (3) 조건부확률 P(X≥0 | X≥−1/2) 로 감싸면 단원 결합이 되어 ★3."
```

```yaml
- id: RPM-PROB-0436
  page: 72
  vendor_label: "유형 02 연속확률변수의 확률 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $-2\le x\le 2$ 에서 정의된 확률밀도함수의 그래프(양 끝 $(\pm 2,\,0)$ 과 꼭짓점 $(0,\,a)$ 를 잇는 이등변삼각형)가 주어질 때 $\mathrm{P}(|X|\le 1)$ 구하기($a$ 는 상수).
  category: "넓이 1 → a 결정 → 절댓값 조건을 구간으로 → 여사건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프가 주어진 확률밀도함수에서 절댓값 조건의 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각형 넓이 2a=1 로 a 를 정하고, |X|≤1 을 −1≤X≤1 로 옮긴 뒤 좌우 대칭인 바깥 삼각형 두 개를 1 에서 뺀다.
    대칭 덕분에 한쪽만 계산해 2배 하면 되지만 이 정도는 표준 절차라 I-SYM 으로 세지 않았다.
    유형 구역·level 중·서술형 태그(+0) → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "삼각형 넓이 2a=1 → a=1/2 → |X|≤1 을 −1≤X≤1 로 → 1 − 바깥 삼각형 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0436.png
  latex: latex-bank/rpm-prob/items/0436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 폭과 묻는 경계를 바꿀 수 있음. 제약: 그림의 눈금 라벨(−2, 2)과 꼭짓점 라벨 a 가 고정이라 숫자를 바꾸면 크롭을 다시 만들어야 하고, 답이 1 − (닮음비)^2 꼴이므로 경계/반폭 비가 단순 분수여야 한다."
    creative: "(1) 꼭짓점을 0 이 아닌 곳으로 옮겨 대칭을 깨면 양쪽을 따로 계산해야 해 ★3 (2) P(|X|≥1) 로 여사건을 한 번 더 씌우기(★2) (3) 확률을 주고 경계를 묻는 역방향이면 제곱근이 나와 ★3."
```

```yaml
- id: RPM-PROB-0437
  page: 72
  vendor_label: "유형 02 연속확률변수의 확률 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    시외버스의 도착 예정 시각과 실제 도착 시각의 차 $X$ 분의 확률밀도함수가 $\dfrac{1}{20}x\ (0\le x\le 4)$, $\dfrac{1}{3}\left(1-\dfrac{1}{10}x\right)\ (4\le x\le 10)$ 일 때 그 차가 $6$ 분 이하일 확률 구하기.
  category: "실생활 문맥 → 조각 경계를 넘는 구간 → 삼각형 + 사다리꼴"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 확률밀도함수에서 조각 경계를 넘는 구간의 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 구간 [0,6] 이 조각 경계 x=4 를 가로지르므로 [0,4] 삼각형과 [4,6] 사다리꼴로 나눠 더한다. 경계를 무시하고 한 조각으로 계산하는 것이 이 문항의 핵심 함정(T-경계).
    분수 높이끼리의 사다리꼴 넓이라 계산 부담이 이 범위에서 가장 크다(Mₖ=2).
    유형 구역·level 중 → ★2, 통찰 없음·M_total 6 → ★2. [분류 이슈] 경계 분할 착안과 계산량을 보면 ★3 후보이기도 하다.
  tier: star_2
  mechanism_primary: "구간을 x=4 에서 분할 → [0,4] 삼각형 + [4,6] 사다리꼴 넓이 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{11}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 경계와 묻는 상한을 바꿀 수 있음. 제약: 두 조각이 경계에서 같은 값을 가져야 하고(여기선 1/5), 전체 넓이가 1 이어야 하므로 두 조각의 계수는 함께 움직인다. 묻는 상한을 경계보다 작게 잡으면 분할 단계가 사라져 ★1~2 로 내려간다."
    creative: "(1) '6분 초과일 확률' 로 바꿔 여사건을 쓰게 하기(★2) (2) 확률을 주고 상한을 묻는 역방향이면 이차방정식이 나와 ★3 (3) 문맥을 유지한 채 평균 E(X) 를 묻게 하면 적분·도형 무게중심이 필요해 ★4."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 24 · ★2 7 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(0425 · I-BW d1) · 절차형 30 · premium 0
- 구역별: 교과서 25문(05-1 5 · 05-2 3 · 05-3 1 · 05-4 10 · 05-5 3 · 05-6 3) · 유형 6문(유형 01 3 · 유형 02 3)
- type_hint 상위 5: 「표준정규분포표 조회·역참조」 10(0416~0425) · 「확률밀도함수 넓이로 구간 확률」 6(0408·0409·0411·0435·0436·0437) · 「확률밀도함수 조건·상수 결정」 5(0407·0410·0432·0433·0434) · 「정규분포 기호 표기(평균·분산 / 이항 근사)」 4(0412·0413·0429·0430) · 「표준화 식과 표 조회」 4(0426·0427·0428·0431)
- M_total 분포: 4 → 14문 · 5 → 8문 · 6 → 9문 (최대 6 · 이 범위에 M_total 7 이상 없음)
- 그림: 6문(`crop:fig-0411-2.png` · `crop:fig-0428.png` · `crop:fig-0431.png` · `crop:fig-0432.png` · `crop:fig-0433.png` · `crop:fig-0436.png`). 0428·0431 의 크롭은 표준정규분포표다.
- 이 범위는 단원 도입부라 ★3 이상이 하나도 없다. 골조가 「넓이 = 1」과 「표준화 후 표 조회」 둘로 수렴하고, 모든 문항이 그 둘 중 하나를 한두 단계 확장한 형태다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0425 | 교과서 구역(★1 출발)인데 미지수가 두 경계에 걸려 표 역참조가 한 번에 안 되고 표값 조합 역추적이 필요. 같은 구역 나머지 9문과 1단 차이로 ★2 로 둠 | ★1 / ★2 |
| RPM-PROB-0434 | vendor level 「중」이지만 실제는 두 삼각형 넓이 합 한 줄. 통찰 0·M_total 6 이라 ★1 로도 볼 수 있으나 유형 구역 신호를 존중해 ★2 | ★1 / ★2 |
| RPM-PROB-0437 | vendor level 「중」(★2)이나 조각 경계를 가로지르는 구간 분할 착안 + 이 범위 최대 계산량(Mₖ=2). ★3 후보지만 통찰 라벨이 붙지 않아 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「확률밀도함수가 될 조건 판별」(0407·0433 — 식 버전과 그래프 버전은 판별 절차가 같으므로 한 유형 안의 두 표현으로 묶는다) ⑵ 「전체 넓이 1 로 상수 결정」(0410·0432·0434) ⑶ 「구간 확률 = 도형 넓이」(0408·0409·0411·0435·0436) ⑷ 「조각 경계를 넘는 구간 확률」(0437 — ⑶과 달리 분할 단계가 추가되므로 별도 base ★ 가 필요하다) ⑸ 「표준정규분포표 정방향 조회」(0416~0421) ⑹ 「표준정규분포표 역참조로 상수 구하기」(0422~0424) ⑺ 「표준화 후 확률 구하기」(0428·0431) ⑻ 「이항분포의 정규 근사 표기」(0429·0430).
- **통합해도 될 유형**: 0412·0413(평균·분산 → N 표기)과 0426·0427(표준화 식 세우기)은 각각 한 줄짜리 표기 확인이라 「정규분포 기호와 표준화 식」 한 유형으로 묶어도 된다. 0416~0421 여섯 문항도 '차 · 꼬리 · 누적 · 대칭이동 · 2배 · 합' 여섯 패턴일 뿐 도구가 같아 base ★ 는 하나로 충분하다.
- **base ★ 설계 메모**: 이 범위에는 ★3 이상이 없어 유형별 base ★ 를 1~2 로만 정할 수 있다. 05-p2·05-p3 의 유형 UP·시험에 꼭 나오는 문제 구간을 함께 본 뒤에 ⑷⑺의 base ★ 를 3 으로 올릴지 결정하는 것이 안전하다.
- **0425 는 ⑹의 심화 갈래**로 따로 표시해 둘 것: 미지수가 두 경계에 동시에 들어가면 역참조가 탐색으로 바뀌어 체감 난도가 한 단계 오른다.
