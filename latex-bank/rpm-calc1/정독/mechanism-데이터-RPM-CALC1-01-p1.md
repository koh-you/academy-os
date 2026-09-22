---
name: mechanism-데이터-RPM-CALC1-01-p1
description: RPM 미적분Ⅰ 01 함수의 극한(1/3 · 교과서 01-1~01-6 + 유형 01) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 01 함수의 극한
  unit_code: CALC1-01
  part: "1/3"
  extract_range: "7~10쪽 · 0001~0038"
  total_problems: 38
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 01 함수의 극한 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 01 함수의 극한 단원(전체 112문) 중 첫 범위인 7~10쪽 0001~0038 의 38문을 다룬다. 교과서 구역 01-1 함수의 수렴과 발산 ~ 01-6 함수의 극한의 대소 관계(0001~0033 · 33문)와 유형 01 극한값의 존재(0034~0038 · 5문)로, 단원 안에서 가장 기초적인 층이다. RPM 은 구역이 곧 난이도 층이라 교과서 구역은 ★1 출발, 유형 구역은 대표문제(태그)·난이도(중하·중·상중·상)에 따라 ★1~4 출발로 두었고, 이 범위의 벤더 신호는 「대표문제」 1문 · 「중하」 2문 · 「중」 2문 · 「서술형」 1문뿐이다. 출발점에서 M_total·통찰로 ±1 조정했다(통찰 0·M_total ≤ 5 → −1 후보 · 통찰 2개 이상 또는 depth 3 → +1 후보 · 절차형이라도 M_total ≥ 7 이면 +1 후보). 이 범위 38문은 모두 절차형(통찰 0)이며, 이는 함수의 극한 도입부의 교과서 확인 문제·그래프 판독 문제라는 성격 그대로다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 `mechanism_primary`, 통찰 라벨 `insights[]`(절차형은 빈 배열), 바꿔도 되는 수와 제약 `variation_notes.numeric`, 골조를 유지한 채 설정을 바꾸는 `variation_notes.creative`(★ 가 변하는 지점 포함)를 채웠다. 그림 문항 4개(0011·0034·0035·0036)는 크롭 이미지를 보고 판정했으며, 변형 시 그림을 다시 그려야 한다는 제약을 numeric 에 적었다.

## 문항 데이터

### 교과서 01-1 함수의 수렴과 발산

```yaml
- id: RPM-CALC1-0001
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일차함수 y=2x-1 의 그래프를 이용해 x→-1 일 때의 극한값을 구한다.
  category: "그래프 → x→-1 에서 y 값 읽기 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(다항함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선 y=2x-1 위에서 x 가 -1 에 가까워지면 y 는 -3 에 가까워진다. 그래프 읽기 한 단계이며 사실상 대입과 같다.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=2x-1 그래프 → x→-1 에서 y→-3 → 극한값 -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수(3x+2, -x+4 등)와 접근값(정수·간단한 분수)을 바꿀 수 있음. 제약: 다항함수는 극한값이 함숫값과 같으므로 답이 정수·간단한 분수가 되게 고른다."
    creative: "(1) 유리함수의 정의역 안 점으로 접근값을 두면 골조 동일(★1) (2) 극한값과 함숫값을 함께 물어 다항함수의 극한은 대입임을 체감(★1) (3) 극한값이 주어졌을 때 계수 a 를 역으로 결정(★1~2)."
```

```yaml
- id: RPM-CALC1-0002
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 y=x²+1 의 그래프를 이용해 x→3 일 때의 극한값을 구한다.
  category: "그래프 → x→3 에서 y 값 읽기 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(다항함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    포물선 y=x²+1 위에서 x→3 이면 y→10. 그래프 읽기 한 단계, 대입과 같다.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=x²+1 그래프 → x→3 에서 y→10 → 극한값 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식(x²-2x, 2x²+1)과 접근값(정수)을 바꿈. 제약: 답이 정수가 되게."
    creative: "(1) 꼭짓점 근처를 접근값으로 두면 그래프 읽기가 덜 직관적(★1) (2) 극한값이 5 가 되는 접근값 a 를 모두 구하기(이차방정식 · ★2) (3) 좌·우 접근을 따로 물어 우극한·좌극한 도입(★1)."
```

```yaml
- id: RPM-CALC1-0003
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    무리함수 y=√(x-1) 의 그래프를 이용해 x→2 일 때의 극한값을 구한다.
  category: "그래프(정의역 x≥1) → x→2 에서 y 값 읽기 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(무리함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=√(x-1) 은 x≥1 에서 정의되고 x→2 이면 y→1. 접근값이 정의역 내부라 양쪽 접근이 모두 가능하다(T-범위 확인 한 번).
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=√(x-1) 그래프(x≥1) → x→2 에서 y→1 → 극한값 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식(x+2, 2x-1)과 접근값을 바꿈. 제약: 접근값이 정의역 내부에 있고 근호 안 값이 완전제곱수가 되게."
    creative: "(1) 접근값을 정의역 끝점(x→1+)으로 두면 한쪽 극한만 있음 → 우극한 도입(★1~2) (2) -√(1-x) 처럼 정의역이 왼쪽인 무리함수로(★1) (3) 극한값이 3 이 되는 접근값 구하기(★1)."
```

```yaml
- id: RPM-CALC1-0004
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    유리함수 y=1/(x+2) 의 그래프를 이용해 x→0 일 때의 극한값을 구한다.
  category: "그래프(점근선 x=-2) → x→0 에서 y 값 읽기 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(유리함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점근선 x=-2 에서 떨어진 x=0 으로 접근하므로 그래프가 (0, 1/2) 를 지나고 극한값 1/2. 대입 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=1/(x+2) 그래프(점근선 x=-2) → x→0 에서 y→1/2 → 극한값 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 일차식과 접근값을 바꿈. 제약: 접근값이 점근선(분모=0)이 아니어야 수렴하고 답은 간단한 분수."
    creative: "(1) 접근값을 점근선 x=-2 로 두면 발산 문제로 전환(0007~0008 골조 · ★1) (2) x→∞ 로 바꾸면 수평점근선 읽기(0006 골조 · ★1) (3) 그래프 없이 극한값이 1/3 이 되는 접근값을 묻기(★1)."
```

```yaml
- id: RPM-CALC1-0005
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    상수함수 y=√3 의 그래프를 이용해 x→∞ 일 때의 극한값을 구한다.
  category: "상수함수 그래프 → x 가 어디로 가도 y=√3 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(상수함수 · x→∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상수함수의 그래프는 수평선이라 x→∞ 에서도 y=√3 그대로. 상수의 극한은 그 상수라는 정의 확인.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=√3 상수함수 → x→∞ 에서도 y=√3 → 극한값 √3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(π, -2, 1/2)와 접근 방향(x→∞ · x→-∞ · x→a)을 바꿈. 제약: 없음 — 상수함수의 극한은 항상 그 상수."
    creative: "(1) 무리수라서 극한이 없다는 오개념 보기를 ㄱㄴㄷ 로 넣기(★1) (2) 상수함수와 y=1/x 를 함께 주어 x→∞ 극한을 비교(★1) (3) 극한의 성질 증명 맥락에서 lim c = c 를 쓰는 문항(★2)."
```

```yaml
- id: RPM-CALC1-0006
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    유리함수 y=2+1/x 의 그래프를 이용해 x→-∞ 일 때의 극한값을 구한다.
  category: "그래프(수평점근선 y=2) → x→-∞ 에서 y→2 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 수렴 — 그래프로 극한값 구하기(유리함수 · x→-∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=1/x 를 위로 2 평행이동한 그래프라 수평점근선 y=2. x→-∞ 이면 1/x→0 이므로 극한값 2.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=2+1/x → x→-∞ 에서 1/x→0 → 극한값 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(3, -1)과 1/x 의 계수·부호, 접근 방향(x→∞ / x→-∞)을 바꿈. 제약: 수평점근선이 극한값이 되게 분자 차수 ≤ 분모 차수를 유지."
    creative: "(1) 1/x² 으로 바꿔 좌우 접근에서 부호가 같은 경우(★1) (2) 2+1/x 를 (2x+1)/x 로 써서 주면 점근선 읽기 전에 식 변형 한 단계 추가(★1~2) (3) 접근을 x→0- 로 바꾸면 발산(0007 골조 · ★1)."
```

```yaml
- id: RPM-CALC1-0007
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=1/x² 의 그래프를 이용해 x→0 일 때의 극한을 조사한다(발산).
  category: "그래프 → x→0 에서 양쪽 모두 y 가 한없이 커짐 → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 발산 — 그래프로 극한 조사(x→a 에서 ∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=1/x² 은 y 축 대칭이라 x→0 의 양쪽에서 모두 y→∞. 발산 방향이 양쪽에서 같으므로 ∞ 로 답한다.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=1/x² 그래프 → x→0 양쪽 모두 y→∞ → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 짝수 거듭제곱(x⁴, (x-1)²)과 접근값을 바꿈. 제약: 짝수 거듭제곱이어야 좌우 부호가 같아 ∞ 로 발산. 홀수 거듭제곱이면 좌우가 ±∞ 로 갈려 존재하지 않음."
    creative: "(1) 1/x 로 바꾸면 좌·우가 ±∞ 로 갈려 극한 없음 → 0038 ㄱ 골조(★2) (2) -1/x² 으로 부호를 바꾸면 -∞(0008 골조 · ★1) (3) 그래프 없이 식만 주고 발산 방향 판단(★1)."
```

```yaml
- id: RPM-CALC1-0008
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=-1/|x-1| 의 그래프를 이용해 x→1 일 때의 극한을 조사한다(발산).
  category: "절댓값으로 x=1 대칭 그래프 → 양쪽 모두 y→-∞ → 음의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 발산 — 그래프로 극한 조사(x→a 에서 -∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 때문에 그래프가 x=1 대칭이고 앞의 음의 부호로 아래로 뻗으므로 양쪽 모두 y→-∞. 부호(T-부호) 한 번만 주의.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=-1/|x-1| 그래프(x=1 대칭) → 양쪽 모두 y→-∞ → -∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안 일차식(x+2, 2x-1)과 앞의 부호·계수를 바꿈. 제약: 절댓값이 있어야 좌우 발산 방향이 같음. 부호를 + 로 바꾸면 ∞."
    creative: "(1) 절댓값을 빼 -1/(x-1) 로 두면 좌우가 ±∞ 로 갈려 극한 없음(★2) (2) y=1/|x| 의 평행이동으로 그래프 그리기 자체를 문제로(★1~2) (3) 발산하는 극한을 '존재하지 않는다' 로 분류하는 개념 문항(★1)."
```

```yaml
- id: RPM-CALC1-0009
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x-3 의 그래프를 이용해 x→∞ 일 때의 극한을 조사한다(발산).
  category: "직선 그래프 → x→∞ 에서 y→∞ → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 발산 — 그래프로 극한 조사(x→∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기가 양수인 직선이라 x→∞ 에서 y 도 한없이 커진다. 그래프 읽기 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=x-3 → x→∞ 에서 y→∞ → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기·절편과 접근 방향을 바꿈. 제약: 기울기 부호와 접근 방향(∞ / -∞)의 조합이 발산 방향(±∞)을 결정."
    creative: "(1) 기울기를 음수로 두고 x→∞ 이면 -∞(★1) (2) x→-∞ 로 바꾸면 -∞(★1) (3) 극한이 없음을 '수렴하지 않는다' 와 '발산한다' 로 구별하는 보기(★1)."
```

```yaml
- id: RPM-CALC1-0010
  page: 7
  vendor_label: "교과서 01-1 함수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x² 의 그래프를 이용해 x→-∞ 일 때의 극한을 조사한다(발산).
  category: "포물선 그래프 → x→-∞ 에서도 y→∞ → 양의 무한대로 발산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 발산 — 그래프로 극한 조사(x→-∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→-∞ 인데 x² 은 양수로 커지므로 답은 +∞(T-부호). 짝수 차수라 방향과 무관하게 위로 발산.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=x² → x→-∞ 에서 y→∞ → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수(x³, x⁴)와 최고차항 부호, 접근 방향을 바꿈. 제약: 홀수 차수는 x→-∞ 에서 -∞, 짝수 차수는 ∞ — 답 부호에 주의."
    creative: "(1) -x² 또는 x³ 으로 바꿔 x→-∞ 발산 방향 판단(★1) (2) x²-3x+2 처럼 다항식으로 주면 최고차항 묶기(0024 골조 · ★1) (3) x→-∞ 와 x→∞ 의 발산 방향이 같은 함수·다른 함수를 고르는 ㄱㄴㄷ(★2)."
```

### 교과서 01-2 우극한과 좌극한

```yaml
- id: RPM-CALC1-0011
  page: 7
  vendor_label: "교과서 01-2 우극한과 좌극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그래프가 주어진 함수 f 에 대해 ⑴~⑶ x=-2 에서의 우극한·좌극한·극한, ⑷~⑹ x=0 에서의 우극한·좌극한·극한을 조사한다.
  category: "그래프에서 좌·우극한 읽기 → 두 값 비교 → 극한 존재 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우극한과 좌극한 — 그래프에서 읽고 극한 존재 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 x=-2 는 왼쪽 가지가 (-2,2) 채워진 점으로 끝나고 오른쪽 가지가 (-2,0) 빈 점에서 시작해 좌극한 2·우극한 0 으로 다르다(극한 없음).
    x=0 은 그래프가 (0,2) 빈 점을 양쪽에서 지나고 함숫값만 원점 0 이라 극한 2(T-경계: 함숫값과 극한값 구분). 소문항 6개지만 각각 읽기 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x→-2: 우극한 0 · 좌극한 2 → 다르므로 극한 없음 / x→0: 좌·우 모두 2 → 극한 2(함숫값 0 과 무관)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0$ \quad (2) $2$ \quad (3) 존재하지 않는다. \quad (4) $2$ \quad (5) $2$ \quad (6) $2$'
  answer_source: "해설"
  figure: "crop:fig-0011.png"
  latex: latex-bank/rpm-calc1/items/0011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(-2, 0, 2)과 채워진 점·빈 점의 위치를 바꿀 수 있음. 제약: 그림을 다시 그려야 하며, 한 점은 좌·우극한이 다르게, 다른 한 점은 극한이 존재하되 함숫값이 다르게 설계."
    creative: "(1) 함숫값 f(-2), f(0) 도 함께 물어 극한값과 구분(★1) (2) 극한이 존재하는 x 의 값을 모두 찾게 하기(0034 골조 · ★2) (3) 두 극한의 합 같은 계산은 존재하지 않는 항이 섞이면 '정의 안 됨' 판단이 추가돼 ★2."
```

```yaml
- id: RPM-CALC1-0012
  page: 7
  vendor_label: "교과서 01-2 우극한과 좌극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=|x|/x 에 대해 ⑴ x→0+ ⑵ x→0- ⑶ x→0 일 때의 극한을 조사한다.
  category: "절댓값을 부호로 나누기 → 우극한 1 · 좌극한 -1 → 극한 없음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우극한과 좌극한 — 절댓값 함수의 좌·우극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x>0 이면 f=1, x<0 이면 f=-1 이라 우극한 1·좌극한 -1. 값이 달라 x→0 극한은 없다. 절댓값을 부호로 푸는 것(T-부호) 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x>0 이면 f=1 · x<0 이면 f=-1 → 우극한 1 · 좌극한 -1 → 다르므로 극한 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $1$ \quad (2) $-1$ \quad (3) 존재하지 않는다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|x-a|/(x-a) 로 접근점을 옮기거나 계수(2|x|/x, x/|x|)를 바꿈. 제약: 좌·우극한은 항상 ±(계수) 로 부호만 다르므로 극한은 존재하지 않게 유지."
    creative: "(1) |x²-x|/(x-1) 처럼 인수분해가 필요한 절댓값(★2) (2) (x-2)/|x-2| 의 한쪽 극한만 묻기(0038 ㄴ 골조 · ★1) (3) 절댓값 함수와 구간별 함수를 함께 주고 극한이 존재하는 것 고르기(★2)."
```

### 교과서 01-3 함수의 극한에 대한 성질

```yaml
- id: RPM-CALC1-0013
  page: 7
  vendor_label: "교과서 01-3 함수의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    극한의 성질을 이용해 x→-1 일 때 1-3x 의 극한값을 구한다.
  category: "극한의 성질(합·상수배) → 대입 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 성질 — 다항함수 극한값(대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    극한의 합·상수배 성질로 1-3·(-1)=4. 음수 접근값의 부호만 주의하는 대입 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "lim(1-3x) = 1-3·(-1) → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 계수와 접근값을 바꿈. 제약: 부호 실수가 함정이 되게 음수 접근값 유지 권장."
    creative: "(1) lim f=2, lim g=-1 을 주고 lim(2f-3g) 를 묻는 성질 활용(★1~2) (2) 극한값이 주어졌을 때 계수 결정(★1) (3) 극한의 성질 중 틀린 것 고르기 개념 문항(★2)."
```

```yaml
- id: RPM-CALC1-0014
  page: 7
  vendor_label: "교과서 01-3 함수의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→2 일 때 x²-4x+5 의 극한값을 구한다.
  category: "극한의 성질 → 대입 → 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 성질 — 다항함수 극한값(대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수라 대입: 4-8+5=1. 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=2 대입 → 4-8+5 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·접근값을 바꿈. 제약: 답이 정수."
    creative: "(1) lim_{x→a}(x²-4x+5)=1 인 a 를 모두 구하기(이차방정식 · ★2) (2) (f(x)-f(2))/(x-2) 의 극한으로 바꾸면 0/0 꼴로 확장(★2) (3) f, g 의 극한값을 주고 곱의 극한 성질(★1)."
```

```yaml
- id: RPM-CALC1-0015
  page: 7
  vendor_label: "교과서 01-3 함수의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→1 일 때 (x²-4)(x+1) 의 극한값을 구한다.
  category: "극한의 성질(곱) → 각 인수에 대입 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 성질 — 곱의 극한(대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 극한은 극한의 곱: (1-4)·(1+1)=-6. 한 인수가 음수라 부호만 주의.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1-4)·(1+1) → -3·2 → -6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 식·접근값을 바꿈. 제약: 부호 실수가 나도록 한 인수는 음수가 되게."
    creative: "(1) lim f=-3, lim g=2 를 주고 lim f·g 를 묻는 성질 문항(★1) (2) 인수 중 하나를 (x²-4)/(x-2) 로 두면 0/0 처리가 섞여 ★2 (3) 세 인수 곱으로 늘려 Mₖ 만 올리기(★1)."
```

```yaml
- id: RPM-CALC1-0016
  page: 7
  vendor_label: "교과서 01-3 함수의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→3 일 때 (x²-3)/(x-1) 의 극한값을 구한다.
  category: "분모 ≠ 0 확인 → 극한의 성질(몫) → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 성질 — 유리함수 극한값(분모≠0 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=3 에서 분모 2≠0 이므로 몫의 성질로 바로 대입: 6/2=3. 분모가 0 이 아닌지 확인(T-경계)만 추가.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=3 에서 분모 2≠0 → (9-3)/2 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 식과 접근값을 바꿈. 제약: 접근값에서 분모가 0 이 아니어야 대입 가능 — 0 이 되면 0017 이후의 0/0 유형으로 바뀜."
    creative: "(1) 접근값을 분모의 근(x→1)으로 바꾸면 발산/0/0 판단으로 확장(★2) (2) lim f=6, lim g=2 를 주고 몫의 극한 성질(★1) (3) 분자·분모를 무리식으로 바꿔 대입 전 정의역 확인(★1~2)."
```

### 교과서 01-4 함수의 극한값의 계산

```yaml
- id: RPM-CALC1-0017
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→-1 일 때 (x²-1)/(x+1) 의 극한값을 구한다(0/0 꼴).
  category: "0/0 꼴 → 분자 인수분해 → (x+1) 약분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 극한 — 다항식 인수분해·약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 (x-1)(x+1) 에서 x+1 을 약분하면 x-1 이 남고 대입해 -2. 0/0 꼴의 가장 기본 형태.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x-1)(x+1)/(x+1) → x-1 → x=-1 대입 → -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 이차식(x²-4, x²-x-2)과 공통 인수(x+1 → x-2)를 바꿈. 제약: 분자가 분모를 인수로 가져야 0/0 이 되고 약분 후 대입값은 정수."
    creative: "(1) 분자를 삼차식(x³+1)으로 바꿔 인수분해 공식 한 단계 추가(★2) (2) 분모도 이차식(x²+3x+2)으로 두어 공통 인수 찾기(★1~2) (3) 극한값이 존재하도록 하는 상수 결정(0028 골조 · ★1~2)."
```

```yaml
- id: RPM-CALC1-0018
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→2 일 때 (x²-5x+6)/(x-2) 의 극한값을 구한다(0/0 꼴).
  category: "0/0 꼴 → 분자 인수분해 (x-2)(x-3) → 약분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 극한 — 다항식 인수분해·약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 (x-2)(x-3) 에서 x-2 를 약분해 x-3, 대입하면 -1. 0017 과 같은 골조에 인수분해 한 번.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x-2)(x-3)/(x-2) → x-3 → x=2 대입 → -1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 두 근(2 와 3)과 접근값(둘 중 하나)을 바꿈. 제약: 접근값이 분자의 근이어야 하고 답은 두 근의 차 — 부호 주의."
    creative: "(1) 접근값을 다른 근(x→3)으로 바꾸면 분모도 x-3 이어야 함 — 분모까지 함께 바꾸는 연습(★1) (2) 분모를 x²-4 로 두어 양쪽 인수분해(★1~2) (3) 분자 계수 a 를 미지수로 두고 극한값을 주기(0030 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0019
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→4 일 때 (√x-2)/(x-4) 의 극한값을 구한다(0/0 꼴 · 분자 무리식).
  category: "0/0 꼴 → 분자 유리화(또는 분모 인수분해) → 약분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 극한 — 무리식 유리화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자에 √x+2 를 곱해 유리화하면 (x-4)/((x-4)(√x+2)) → 1/(√x+2) → 1/4. 분모를 (√x-2)(√x+2) 로 인수분해해도 같은 길이라 도구 선택 부담은 거의 없다.
    유리화·약분 두 단계. 교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분자에 (√x+2) 곱 → (x-4)/((x-4)(√x+2)) → 1/(√x+2) → 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 식과 상수(√x-3, x→9 · √(x+1)-2, x→3)를 바꿈. 제약: 상수의 제곱이 접근값에서의 근호 안 값과 같아야 0/0. 답은 1/(2·상수)."
    creative: "(1) 분모를 x-4 대신 √x-2 를 인수로 갖는 다른 식(x√x-8)으로(★2) (2) 분자·분모 모두 무리식이면 유리화 두 번(★2) (3) 유리화 대신 x-4=(√x-2)(√x+2) 인수분해로 푸는 다른 풀이 비교 — 두 갈래이나 난이도 차가 작아 SC 인정은 어려움(★1~2)."
```

```yaml
- id: RPM-CALC1-0020
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 x/(√(x+4)-2) 의 극한값을 구한다(0/0 꼴 · 분모 무리식).
  category: "0/0 꼴 → 분모 유리화 → x 약분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 극한 — 무리식 유리화(분모)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모에 √(x+4)+2 를 곱하면 분모가 x 가 되어 분자의 x 와 약분, √(x+4)+2 에 x=0 을 대입해 4.
    분모 유리화·약분 두 단계. 교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분모에 (√(x+4)+2) 곱 → x(√(x+4)+2)/x → √(x+4)+2 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(x+9, 상수 3)와 분자 계수를 바꿈. 제약: 근호 안 상수는 완전제곱수, 답 = 2·상수(분자 계수 배)."
    creative: "(1) 분자를 x² 으로 바꾸면 약분 후 x→0 이라 극한 0(★1) (2) 분모를 √(x+4)-√(4-x) 처럼 두 근호로(★2) (3) 극한값 4 가 주어졌을 때 근호 안 상수 결정(★2)."
```

```yaml
- id: RPM-CALC1-0021
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 (5x-2)/(3x²+1) 의 극한을 조사한다(∞/∞ 꼴 · 분자 차수 < 분모 차수).
  category: "∞/∞ 꼴 → 분모 최고차항 x² 으로 분자·분모 나누기 → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한 — 분모 최고차항으로 나누기(차수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모를 x² 으로 나누면 (5/x-2/x²)/(3+1/x²) → 0/3 = 0. 분자 차수가 낮으면 0 이라는 차수 비교 규칙 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분자·분모 ÷ x² → (5/x-2/x²)/(3+1/x²) → 0/3 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 계수와 차수 조합(일차/이차 · 일차/삼차)을 바꿈. 제약: 분자 차수 < 분모 차수를 유지해야 답 0. x→-∞ 로 바꿔도 답은 0."
    creative: "(1) 분자 차수를 분모와 같게 두면 최고차항 계수비(0022 골조 · ★1) (2) 분모에 무리식 √(x²+1) 을 넣어 x→-∞ 에서 √x²=-x 부호 함정(★2) (3) 극한이 0 이 되도록 하는 분자 차수 조건을 묻는 개념 문항(★1~2)."
```

```yaml
- id: RPM-CALC1-0022
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 (3x²+5x-2)/(2x²+1) 의 극한을 조사한다(∞/∞ 꼴 · 분자·분모 차수 같음).
  category: "∞/∞ 꼴 → x² 으로 나누기 → 최고차항 계수비 3/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한 — 분모 최고차항으로 나누기(차수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x² 으로 나누면 (3+5/x-2/x²)/(2+1/x²) → 3/2. 차수가 같으면 최고차항 계수의 비라는 규칙 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분자·분모 ÷ x² → (3+5/x-2/x²)/(2+1/x²) → 3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수(3, 2)와 낮은 차수 항을 바꿈. 제약: 분자·분모 차수를 같게 유지하고 답은 계수비(기약분수)."
    creative: "(1) 분자 차수를 높이면 발산(0023 골조 · ★1) (2) (ax²+bx+c)/(2x²+1) 의 극한이 3/2 인 a 를 묻기(★1) (3) 분모를 (x+1)(2x-1) 처럼 전개 전 형태로 주어 최고차항 계수를 곱으로 읽게 하기(★1~2)."
```

```yaml
- id: RPM-CALC1-0023
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 (3x²-2x)/(x+2) 의 극한을 조사한다(∞/∞ 꼴 · 분자 차수 > 분모 차수).
  category: "∞/∞ 꼴 → 분모 최고차항 x 로 나누기 → (3x-2)/(1+2/x) → ∞"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한 — 분모 최고차항으로 나누기(차수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 최고차항 x 로 나누면 분자 3x-2 → ∞, 분모 1+2/x → 1 이므로 ∞ 로 발산. 분자 차수가 높으면 발산이며 부호는 최고차항 계수로 정한다(T-부호 확인 한 번).
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분자·분모 ÷ x → (3x-2)/(1+2/x) → 분자 ∞·분모 1 → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 최고차항 부호·계수와 접근 방향(x→∞ / x→-∞)을 바꿈. 제약: 분자 차수 > 분모 차수 유지. 발산 부호 = 최고차항 계수 부호이며, 차수 차가 홀수이고 x→-∞ 이면 뒤집힘."
    creative: "(1) x→-∞ 로 바꾸면 분자 3x-2 → -∞ 라 답이 -∞(★1) (2) 분자를 -3x²+2x 로 두어 부호 뒤집기(★1) (3) 분자 차수를 3 으로 올려 x→-∞ 일 때 방향 판단(차수 차 짝·홀 · ★2)."
```

```yaml
- id: RPM-CALC1-0024
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 x²-3x+2 의 극한을 조사한다(∞-∞ 꼴 다항식).
  category: "∞-∞ 꼴 → 최고차항 x² 으로 묶기 → x²(1-3/x+2/x²) → ∞"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴 극한 — 다항식 최고차항 묶기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²(1-3/x+2/x²) 로 묶으면 괄호 → 1, x² → ∞ 이므로 ∞. 다항식의 x→∞ 극한은 최고차항이 결정한다는 규칙 한 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²(1-3/x+2/x²) → 괄호 1 · x² ∞ → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·차수(x³-x², -2x²+5x)와 접근 방향을 바꿈. 제약: 최고차항 부호와 차수의 홀짝, x→±∞ 가 발산 부호를 결정."
    creative: "(1) -x²+3x 로 바꾸면 -∞(★1) (2) x→-∞ 와 삼차식을 조합해 부호 판단(★1~2) (3) (x²+1)-(x²-x) 처럼 실제로 상쇄돼 수렴하는 예를 섞어 ∞-∞ 가 항상 발산은 아님을 보이는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC1-0025
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 √(x²+10x)-x 의 극한을 조사한다(∞-∞ 꼴 무리식).
  category: "∞-∞ 꼴 → 켤레 곱으로 유리화 → 10x/(√(x²+10x)+x) → x 로 나누기 → 5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴 극한 — 무리식 유리화 후 최고차항으로 나누기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(x²+10x)+x 를 곱하고 나누면 분자 10x, 분모 √(x²+10x)+x. 분자·분모를 x 로 나누면 10/(√(1+10/x)+1) → 10/2 = 5.
    유리화·나누기 두 단계. x→∞ 라 √x²=x 부호 문제가 없다. 교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "켤레 곱 → 10x/(√(x²+10x)+x) → ÷x → 10/(√(1+10/x)+1) → 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(10 → 2b 로 두면 답 b)와 상수항 추가(√(x²+10x+3))를 바꿈. 제약: 근호 안 최고차 계수가 1(또는 완전제곱)이어야 -x 와 상쇄되고 답 = 일차항 계수 / 2."
    creative: "(1) x→-∞ 로 바꾸면 √x²=-x 라 부호 처리(T-부호)가 핵심 → ★2 (2) √(x²+ax)-√(x²+bx) 두 근호(★2) (3) 극한값이 5 가 되는 a 를 묻는 미정계수형(★2). -x 직접 처리와 x=-t 치환의 두 갈래는 난이도 차가 작아 SC 로 세우기 어려움."
```

```yaml
- id: RPM-CALC1-0026
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 (1/x)(1-1/(x+1)) 의 극한값을 구한다(∞×0 꼴).
  category: "∞×0 꼴 → 괄호 통분 x/(x+1) → x 약분 → 1/(x+1) → 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴 극한 — 통분·약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1-1/(x+1) = x/(x+1) 로 통분하면 앞의 1/x 와 x 가 약분되어 1/(x+1) → 1. 통분·약분 두 단계.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "1-1/(x+1) = x/(x+1) → (1/x)·x/(x+1) = 1/(x+1) → x=0 대입 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 분수의 상수(1/(x+2) 와 1/2 의 차)와 접근값을 바꿈. 제약: 괄호가 접근값에서 0 이 되게(1-1/(x+1) 은 x=0 에서 0) 상수를 맞춰야 ∞×0 꼴이 되고, 약분 뒤 대입값이 간단한 분수."
    creative: "(1) 1/(x-1) · (1/x - 1) 처럼 접근값을 x→1 로 옮기기(★1) (2) 괄호 안을 무리식 (1-1/√(x+1)) 로 바꾸면 통분 뒤 유리화까지 → ★2 (3) 1/x² 을 곱하면 약분 뒤에도 1/x 가 남아 발산·부호 판단(★2)."
```

```yaml
- id: RPM-CALC1-0027
  page: 9
  vendor_label: "교과서 01-4 함수의 극한값의 계산"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→3 일 때 (2/(x-3))(x-9/x) 의 극한값을 구한다(∞×0 꼴).
  category: "∞×0 꼴 → 괄호 통분 (x²-9)/x → 인수분해 (x-3)(x+3)/x → x-3 약분 → 2(x+3)/x → 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴 극한 — 통분·인수분해·약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x-9/x = (x-3)(x+3)/x 로 통분·인수분해하면 x-3 이 약분되어 2(x+3)/x, x=3 대입해 12/3 = 4. 통분·인수분해·약분 세 단계이나 각각 표준.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x-9/x = (x-3)(x+3)/x → ×2/(x-3) → 2(x+3)/x → x=3 대입 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근값 a 와 괄호 안 상수 a²(x-a²/x), 앞의 계수를 바꿈. 제약: 괄호가 x=a 에서 0 이 되려면 상수 = a² 이어야 하고 답 = 계수×2a/a = 2×계수."
    creative: "(1) 접근값을 x→-3 으로 두면 분모를 x+3 으로 바꿔야 함 — 어느 인수가 약분되는지 판단(★1) (2) 괄호를 (√x - 3/√x) 로 바꿔 유리화 결합(★2) (3) 1/(x-3) · (1/x - 1/3) 로 두면 통분 부호 함정(T-부호 · ★1~2)."
```

### 교과서 01-5 미정계수의 결정

```yaml
- id: RPM-CALC1-0028
  page: 9
  vendor_label: "교과서 01-5 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→2 일 때 (2x+a)/(x²-3x+2) 의 극한값이 존재하도록 하는 상수 a 의 값.
  category: "분모→0 이므로 분자→0 → 4+a=0 → a=-4"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 극한값 존재 조건(분모→0 이면 분자→0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=2 에서 분모가 0 이므로 극한값이 존재하려면 분자도 0: 2·2+a=0 → a=-4. 확인하면 (2x-4)/((x-1)(x-2)) = 2/(x-1) → 2 로 실제 존재한다.
    「분모→0 ⇒ 분자→0」은 이 구역의 교과서 표준 절차라 통찰로 세지 않는다(단순 미정계수 대입 · 인정 안 함). 매개변수 a 로 Mₐ 2.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분모(2)=0 → 분자(2)=0 → 4+a=0 → a=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 일차식의 계수·접근값·분모 이차식을 바꿈. 제약: 접근값이 분모의 근이어야 하고, 분자가 그 근을 갖도록 a 가 정수로 정해지게. 극한값까지 물으면 약분 뒤 값이 간단한 수."
    creative: "(1) a 와 극한값을 함께 묻기(0030 골조 · ★1) (2) 분자를 이차식 x²+ax+b 로 두고 극한값까지 주어 a, b 결정(★2) (3) 분모가 이중근 (x-2)² 이면 분자가 (x-2)² 을 가져야 해 조건이 2개 → ★2~3."
```

```yaml
- id: RPM-CALC1-0029
  page: 9
  vendor_label: "교과서 01-5 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 (√(3-x)+a)/x 의 극한값이 존재하도록 하는 상수 a 의 값.
  category: "분모→0 이므로 분자→0 → √3+a=0 → a=-√3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 극한값 존재 조건(분모→0 이면 분자→0 · 무리식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=0 에서 분모 0 이므로 분자도 0: √3+a=0 → a=-√3. 답이 무리수라는 점만 다르고 0028 과 같은 골조. (확인: 유리화하면 극한값 -1/(2√3) 로 존재.)
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분모(0)=0 → 분자(0)=0 → √3+a=0 → a=-√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(3 → 4 면 a=-2 정수)와 접근값·분모를 바꿈. 제약: 접근값에서 근호 안이 양수이고 분모가 0 이 되게."
    creative: "(1) a 와 극한값을 함께 묻기 → 유리화 한 단계 추가(★2) (2) 분자 √(x+a)-2 처럼 a 가 근호 안에 있으면 제곱 조건(★1~2) (3) 분모를 x² 으로 바꾸면 분자가 x² 차수로 0 이 돼야 해 존재할 수 없음을 판단하는 개념 문항(★2~3)."
```

```yaml
- id: RPM-CALC1-0030
  page: 9
  vendor_label: "교과서 01-5 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→2 일 때 (ax+b)/(x-2) = 3 이 성립하도록 하는 상수 a, b 의 값.
  category: "분모→0 이므로 분자→0 → b=-2a → 약분 후 극한 a=3 → b=-6"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 0/0 꼴 등식에서 a, b(분모→0 이면 분자→0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모→0 이므로 분자→0: 2a+b=0. 대입하면 (ax-2a)/(x-2) = a 이므로 극한 a=3, 따라서 b=-6. 조건 세우기·약분·대입 세 단계, 모두 표준.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분자(2)=0 → b=-2a → a(x-2)/(x-2)=a → a=3 → b=-6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=3$, $b=-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근값 c 와 극한값 k 를 바꾸면 a=k, b=-ck. 제약: 정수 답이 되게 c, k 정수."
    creative: "(1) 분자를 이차식 x²+ax+b 로 두면 인수분해 후 나머지 인수 대입 → ★2 (2) 분모를 x²-4 로 두어 분자가 (x-2) 인수를 갖고 극한값 3 이 되는 조건(★2) (3) a+b 값을 묻는 5지선다(★1)."
```

```yaml
- id: RPM-CALC1-0031
  page: 9
  vendor_label: "교과서 01-5 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→1 일 때 (x-1)/(x²+ax-b) = -1 이 성립하도록 하는 상수 a, b 의 값.
  category: "분자→0 · 극한값≠0 이므로 분모→0 → b=1+a → 인수분해 (x-1)(x+1+a) → 1/(2+a)=-1 → a=-3, b=-2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정 — 분자→0·극한값≠0 이면 분모→0"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 x-1→0 인데 극한값이 -1(≠0)이므로 분모도 0: 1+a-b=0 → b=1+a. 분모 x²+ax-(1+a) = (x-1)(x+1+a) 로 인수분해해 약분하면 1/(2+a)=-1 → a=-3, b=-2.
    0030 의 역방향(분자→0 ⇒ 분모→0)이고 「극한값이 0 이 아닐 때만」이라는 전제(T-경계)가 붙지만, 이 구역의 교과서 표준 절차라 통찰로 세지 않는다. 조건·치환·인수분해·대입 4단계로 Mₛ 2.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 6 → ★1. [분류 이슈] 역방향 조건은 학생 체감이 0030 보다 높아 ★2 후보 — 교과서 구역이라 ★1 로 두고 기록.
  tier: star_1
  mechanism_primary: "분자(1)=0 · 극한 -1≠0 → 분모(1)=0 → b=1+a → (x-1)(x+a+1) 약분 → 1/(a+2)=-1 → a=-3 · b=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-3$, $b=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근값 c, 극한값 k(≠0)를 바꿈: 분모 = (x-c)(x+m) 꼴이 되고 1/(c+m)=k. 제약: k≠0 이어야 분모→0 이 강제되고, a, b 가 정수가 되게 c+m=1/k 즉 k=±1 또는 1/정수."
    creative: "(1) 극한값을 0 으로 주면 분모→0 이 강제되지 않아 a, b 가 유일하지 않음을 따지는 개념 문항(★2~3) (2) 분자를 x²-1 로 두어 양쪽 인수분해(★2) (3) 「극한값이 0 이 아닌 실수」라는 조건만 주고 가능한 (a, b) 의 관계식을 묻기(★2)."
```

### 교과서 01-6 함수의 극한의 대소 관계

```yaml
- id: RPM-CALC1-0032
  page: 9
  vendor_label: "교과서 01-6 함수의 극한의 대소 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에서 -x²+2x-3 ≤ f(x) ≤ x²-2x-1 일 때 x→1 에서 f(x) 의 극한값.
  category: "양 끝 다항식의 x→1 극한이 모두 -2 → 대소 관계로 lim f = -2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계 — 양 끝 극한이 같을 때(샌드위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=1 대입: 아래 -1+2-3=-2, 위 1-2-1=-2 로 같으므로 대소 관계 정리로 lim f(x) = -2. 양 끝 대입 두 번과 정리 적용, 한 줄.
    f 는 추상 함수지만 조작은 양 끝 다항식 대입뿐이라 Mₐ 는 3 이 아닌 2 로 둔다.
    교과서 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "아래 극한 -2 · 위 극한 -2 → 같음 → 대소 관계 → lim f = -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식과 접근값을 바꿈. 제약: 두 식이 접근값에서 같은 값(접점)을 가져야 함 — -(x-a)²+c ≤ f ≤ (x-a)²+c 꼴로 만들면 답 c. 모든 x 에서 아래 ≤ 위가 성립하도록 유지."
    creative: "(1) f 를 고립시키는 나누기가 필요한 형태(0033 골조 · ★1~2) (2) 접근값을 접점이 아닌 곳으로 두어 극한값을 결정할 수 없음을 판단(★2) (3) f(x) 대신 (f(x)+2)/(x-1) 처럼 f 를 다른 식에 넣어 0/0 꼴과 결합(★3)."
```

```yaml
- id: RPM-CALC1-0033
  page: 9
  vendor_label: "교과서 01-6 함수의 극한의 대소 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에서 4x²-1 ≤ (x²+1)f(x) ≤ 4x²+5 일 때 x→∞ 에서 f(x) 의 극한값.
  category: "x²+1>0 으로 나누어 f 고립 → 양 끝 ∞/∞ 극한 모두 4 → 대소 관계로 4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계 — f 고립 후 x→∞ 양 끝 극한(샌드위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²+1>0 이므로 나누어도 부등호 유지: (4x²-1)/(x²+1) ≤ f(x) ≤ (4x²+5)/(x²+1). 양 끝은 차수 같은 ∞/∞ 라 모두 4 → lim f = 4.
    나누기(부호 확인)·양 끝 극한·정리 적용의 네 단계로 Mₛ 2. 통찰 없음. Mₐ 는 0032 와 같은 이유로 2.
    교과서 구역 출발 ★1 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "÷(x²+1)(>0) → (4x²-1)/(x²+1) ≤ f ≤ (4x²+5)/(x²+1) → 양 끝 4 → lim f = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 이차식의 최고차 계수(4)와 상수항, 가운데 곱해진 식(x²+1 → 2x²+3)을 바꿈. 제약: 양 끝 최고차 계수비가 같아야 하고 나누는 식이 항상 양수여야 부등호가 유지됨."
    creative: "(1) 나누는 식을 x 로 두면 x<0 에서 부등호가 뒤집혀 x→-∞ 판단(T-부호 · ★2) (2) 양 끝을 무리식(√(x²+1))으로(★2) (3) f(x)/x 의 극한을 물어 고립 뒤 한 번 더 나누기(★2)."
```

### 유형 01 극한값의 존재

```yaml
- id: RPM-CALC1-0034
  page: 10
  vendor_label: "유형 01 극한값의 존재"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x≤5 에서 그래프가 주어진 f 에 대해 보기 5개(x→0+, 4+, 5-, 2, 3) 중 극한값이 존재하지 않는 것을 고른다. 5지선다.
  category: "그래프에서 각 보기의 좌·우극한 읽기 → x=2 에서 좌 -3·우 0 으로 다름 → ④"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 — 그래프에서 좌·우극한 비교(한쪽 극한·끝점·함숫값 함정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림: (0,0) 에서 (2,-3) 빈 점까지 내려가는 직선, (2,0) 채워진 점에서 (3,2) 빈 점까지 오르는 곡선, f(3)=4 채워진 점, (3,2) 에서 (4,1) 로 내려갔다가 (5,4) 로 오르는 직선.
    ① x→0+ 는 0, ② x→4+ 는 1, ③ x→5- 는 4 로 한쪽 극한이 존재하고, ⑤ x→3 은 좌·우 모두 2(함숫값 4 와 무관)로 존재. ④ x→2 는 좌 -3·우 0 으로 달라 존재하지 않는다.
    함정 2범주(T-경계: 끝점·함숫값≠극한값 · T-표기: 한쪽 극한 기호)로 Mₜ 2. 5개 보기 전수 판독 Mₛ 2. 통찰 없음.
    유형 대표문제 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "보기별 좌·우극한 읽기 → 끝점·한쪽 극한은 존재 · x=3 은 함숫값 무관 존재 → x=2 좌 -3≠우 0 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0034.png"
  latex: latex-bank/rpm-calc1/items/0034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(2, 3, 4, 5 와 y 값 -3, 1, 2, 4)과 빈 점·채워진 점 위치를 바꿀 수 있음. 제약: 그림을 다시 그려야 하며, 정답 보기 하나만 좌·우극한이 다르고 나머지는 존재하도록(끝점 한쪽 극한 1~2개 · 함숫값≠극한값 1개 포함) 설계."
    creative: "(1) '존재하는 것의 개수' 로 바꾸면 5개 전부 판정해야 해 같은 골조 ★2 (2) lim f(x) + f(a) 같은 합을 물어 함숫값과 극한값을 함께 읽기(★2) (3) f(f(x)) 의 극한이나 lim f(x+1) 처럼 변수 치환이 섞이면 ★3 (4) 극한값이 존재하는 점에서의 값들의 합(★2)."
```

```yaml
- id: RPM-CALC1-0035
  page: 10
  vendor_label: "유형 01 극한값의 존재"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프 5개 중 x→a 에서 f(x) 의 극한값이 존재하는 것을 고른다. 5지선다(그림 보기).
  category: "각 그래프에서 x=a 좌·우극한 비교 → 점근선·톱니·계단·점프는 불일치, 구멍만 일치 → ⑤"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 — 그래프에서 좌·우극한 비교(불연속 형태 판별)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ① x=a 가 수직점근선이라 발산, ② 톱니 그래프로 좌(위 빈 점)·우(아래 채워진 점)가 다름, ③ 계단으로 좌·우 다름, ④ 두 조각이 x=a 에서 다른 높이로 끊김. ⑤ 는 x=a 에서 빈 점(구멍)이고 함숫값만 아래 있어 좌·우극한이 같다 → 존재.
    그래프마다 좌·우 비교 한 단계씩 5번(Mₛ 2). 함숫값≠극한값(T-경계)이 ⑤의 함정. 통찰 없음.
    유형 구역 「중하」 출발 ★1~2 · 통찰 0 · M_total 5 → ★1. [분류 이슈] 5 그래프 전수 판독·불연속 형태 5종이라 ★2 후보이나 각 판독이 한 단계라 ★1 로 둠.
  tier: star_1
  mechanism_primary: "그래프별 x=a 좌·우극한 비교 → ① 발산 · ②③④ 불일치 → ⑤ 구멍(함숫값 무관)만 일치 → ⑤"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0035.png"
  latex: latex-bank/rpm-calc1/items/0035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 5개의 배치·정답 번호를 바꾸거나 불연속 형태(점근선·톱니·계단·점프·구멍)를 다른 조합으로. 제약: 그림 5개를 다시 그려야 하고, 정답 그래프만 좌·우극한이 같게(구멍 또는 연속 · 함숫값은 달라도 됨)."
    creative: "(1) '존재하지 않는 것' 을 고르게 반전(★1) (2) 좌극한만 존재하는 것·우극한만 존재하는 것을 함께 묻기(★2) (3) 그래프 대신 식(절댓값·가우스·구간별)으로 주면 0038 골조(★2)."
```

```yaml
- id: RPM-CALC1-0036
  page: 10
  vendor_label: "유형 01 극한값의 존재"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프가 주어진 f 에 대해 보기 ㄱ(x→-1)·ㄴ(x→1)·ㄷ(x→2) 중 극한값이 존재하는 것만을 고른다.
  category: "세 점에서 좌·우극한 읽기 → x=-1 구멍(함숫값 2)·x=1 연속은 존재, x=2 는 좌 2·우 3 → ㄱ, ㄴ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 — 그래프에서 좌·우극한 비교(ㄱㄴㄷ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림: 곡선이 (-1,1) 빈 점을 지나고 f(-1)=2 채워진 점이 따로 있음, (1,-1) 을 지나 (2,2) 채워진 점까지 오른 뒤 (2,3) 빈 점에서 다시 시작해 내려감.
    ㄱ x→-1 은 좌·우 모두 1(함숫값 2 와 무관)로 존재, ㄴ x→1 은 -1 로 존재, ㄷ x→2 는 좌 2·우 3 으로 다름. 세 점 판독 각 한 단계.
    유형 구역 「중하」 출발 ★1~2 · 통찰 0 · M_total 5 → ★1(교과서 0011 과 같은 골조).
  tier: star_1
  mechanism_primary: "x=-1: 좌·우 1(f(-1)=2 무관) → 존재 / x=1: -1 존재 / x=2: 좌 2≠우 3 → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: "crop:fig-0036-2.png"
  latex: latex-bank/rpm-calc1/items/0036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(-1, 1, 2 와 y 값 1, 2, 3, -1)과 빈 점·채워진 점 위치를 바꿈. 제약: 그림을 다시 그려야 하며, 보기 중 하나는 함숫값≠극한값인 구멍, 하나는 연속점, 하나는 점프로 설계."
    creative: "(1) 존재하는 극한값들의 합을 묻기(★1~2) (2) 보기에 한쪽 극한(x→2+)을 섞어 존재 판정(★2) (3) lim f(x) = f(a) 인 점, 즉 연속인 점만 고르게 하면 다음 단원 연결(★2)."
```

```yaml
- id: RPM-CALC1-0037
  page: 10
  vendor_label: "유형 01 극한값의 존재"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x) = x+k (x≥-2), -x²-4x+3 (x<-2) 에 대해 x→-2 에서 극한값이 존재하도록 하는 상수 k. 서술형.
  category: "우극한 -2+k · 좌극한 7 → 같다 → k=9"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 — 구간별 함수의 좌·우극한 일치 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→-2+ 는 x≥-2 쪽 식으로 -2+k, x→-2- 는 x<-2 쪽 식으로 -4+8+3=7. 극한값이 존재하려면 두 값이 같아야 하므로 k=9.
    어느 쪽 식에 -2 를 넣는지(T-경계)가 유일한 함정. 좌·우 계산·등식·k 의 세 단계지만 서술형이라 근거를 적어야 해 Mₛ 2. 매개변수 k 로 Mₐ 2. 통찰 없음.
    유형 구역 「중」 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "우극한 = -2+k · 좌극한 = -(-2)²-4(-2)+3 = 7 → -2+k = 7 → k=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(-2), 두 식의 계수, k 의 위치(어느 조각에 있는지)를 바꿈. 제약: 경계 부등호(≥/<)로 조각이 정해지고, 답 k 가 정수가 되게 이차식 값을 조정."
    creative: "(1) k 를 이차식 쪽에 두고 x+k 대신 상수 조각으로(★2) (2) 경계점이 두 개(세 조각)면 조건 2개 연립(★2~3) (3) 극한값은 존재하되 f(-2) 와 다르게 하는 조건을 함께 묻기(★2) (4) 조각 하나를 |x+2| 로 바꿔 절댓값 분리 추가(★2~3)."
```

```yaml
- id: RPM-CALC1-0038
  page: 10
  vendor_label: "유형 01 극한값의 존재"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 ㄱ 2-1/x (x→0), ㄴ (x-2)/|x-2| (x→2-), ㄷ (x-3)/(x+3) (x→3), ㄹ |x|/x² (x→0) 중 극한값이 존재하는 것의 개수. 5지선다.
  category: "보기별 판정: ㄱ 좌 +∞·우 -∞ 불일치, ㄴ 한쪽 극한 -1 존재, ㄷ 대입 0 존재, ㄹ 1/|x| 로 ∞ 발산 → 2개 → ③"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 — 식으로 주어진 함수의 좌·우극한·발산 판정(ㄱㄴㄷㄹ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: 1/x 가 x→0+ 에서 ∞, x→0- 에서 -∞ 라 2-1/x 는 좌·우가 ∓∞ 로 갈려 존재하지 않음. ㄴ: x<2 에서 |x-2|=-(x-2) 이므로 -1 — 한쪽 극한만 물었으므로 존재. ㄷ: 분모 6≠0, 대입해 0 존재. ㄹ: |x|/x² = 1/|x| 라 양쪽 모두 ∞ 로 발산 — 극한값은 존재하지 않음.
    존재하는 것은 ㄴ, ㄷ 2개 → ③. 함정 2범주(T-부호: 절댓값·1/x 좌우 부호 · T-표기: ㄴ 의 한쪽 극한 기호, 발산을 존재로 오해). 보기 4개 각 한 단계로 Mₛ 2. 통찰 없음.
    유형 구역 「중」 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 1/x 좌우 ±∞ → X · ㄴ x<2 에서 -1 → O · ㄷ 대입 0 → O · ㄹ 1/|x| → ∞ 발산 → X → 2개 → ③"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 접근값·상수(2-1/x → 3+1/(x-1), |x-2| → |x+1|, 1/|x| → 1/(x-1)²)와 한쪽 극한 방향(2- → 2+)을 바꿈. 제약: 존재/비존재 조합이 바뀌면 답 번호가 바뀌므로 개수를 먼저 정하고 보기를 맞춤. ㄹ 처럼 발산은 「존재하지 않음」으로 분류됨을 유지."
    creative: "(1) ㄴ 을 양쪽 극한 x→2 로 바꾸면 존재하지 않게 되어 답 1개(★2) (2) 가우스 기호 [x] 보기를 넣으면 정수점 좌·우극한 판정 추가(★2~3) (3) 존재하는 것들의 극한값 합을 묻기(★2) (4) √x²/x (x→0) 처럼 √x²=|x| 를 거치는 보기를 넣어 표기 함정 강화(★2)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 35 · ★2 3 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 38 · premium 0
- type_hint 상위: 「함수의 수렴 — 그래프로 극한값 구하기」 6 · 「극한값의 존재 — 좌·우극한 비교」 5 · 「함수의 발산 — 그래프로 극한 조사」 4 · 「함수의 극한의 성질 — 대입」 4 · 「0/0 꼴 극한 — 인수분해·유리화」 4 · 「미정계수의 결정」 4
- 그림: 4문(`crop:fig-0011.png` · `crop:fig-0034.png` · `crop:fig-0035.png` · `crop:fig-0036-2.png`)
- 벤더 신호: 교과서 구역 33문(모두 ★1) · 유형 01 5문(대표문제 ★2 · 중하 2문 ★1 · 중 2문 ★2)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0031 | 「분자→0·극한값≠0 ⇒ 분모→0」 역방향 조건은 0030 보다 학생 체감이 높아 ★2 후보. 교과서 구역이라 ★1 로 두고 기록 | ★1 / ★2 |
| RPM-CALC1-0035 | 벤더 「중하」·5 그래프 전수 판독(불연속 형태 5종)이라 ★2 후보이나 통찰 0·M_total 5 → ★1 로 둠 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「그래프로 극한값 구하기」(0001~0006)와 「그래프로 극한 조사(발산)」(0007~0010)는 한 유형 「그래프로 극한 조사(수렴·발산)」로 통합해도 됨. 「함수의 극한의 성질 — 대입」(0013~0016)과 「0/0 꼴」(0017~0020)은 분모가 0 인지가 골조를 가르므로 분리 유지.
- 따로 세울 유형: ∞/∞(0021~0023) · ∞-∞ 다항식(0024) · ∞-∞ 무리식(0025) · ∞×0(0026~0027)은 RPM 후속 유형(02~05)과 대응되므로 각각 독립 유형. 미정계수의 결정은 「분모→0 ⇒ 분자→0」(0028~0030)과 「분자→0·극한≠0 ⇒ 분모→0」(0031)을 한 유형의 두 하위 골조로 둔다.
- 통합 가능: 「극한값의 존재」 그래프형(0011·0034~0036)과 식형(0012·0038)은 한 유형 안의 표현 차이. 구간별 함수 미정계수(0037)는 다음 범위의 유형과 이어지므로 그쪽에서 세우는 편이 자연스럽다.
- M 판정 메모: 대소 관계(0032·0033)의 추상 f 는 조작이 양 끝 대입뿐이라 Mₐ 2 로 둠. 미정계수(0028~0031·0037)는 매개변수로 Mₐ 2. 한쪽 극한 기호가 발문에 있는 문항(0034·0038)은 T-표기를 세어 Mₜ 2.
