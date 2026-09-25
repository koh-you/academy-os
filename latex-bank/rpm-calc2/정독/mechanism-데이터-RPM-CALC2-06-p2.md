---
name: mechanism-데이터-RPM-CALC2-06-p2
description: RPM 미적분Ⅱ 06 도함수의 활용 (1) (2/4 · 교과서 06-5 극대·극소 + 유형 01~08 접선의 방정식) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 06 도함수의 활용 (1)
  unit_code: CALC2-06
  part: "2/4"
  extract_range: "89~93쪽 · 0626~0658"
  total_problems: 33
  unit_total: 137
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 06 도함수의 활용 (1) (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 06 도함수의 활용 (1) 의 두 번째 조각으로, 89~93쪽의 33문항(0626~0658)을 다룬다. 앞 4문항은 교과서 06-5 「이계도함수를 이용한 극값」이고, 나머지 29문항은 접선의 방정식 유형 01~08(접점 주어짐 · 법선 · 기울기 주어짐 · 곡선 밖의 점 · 접선의 개수 · 공통 접선 · 역함수의 접선 · 매개변수 곡선의 접선)이다. RPM 의 난이도 신호는 구역(교과서 → ★1 · 유형 → ★2 · 유형 UP → ★3)과 문항별 난이도 표시(중하·중·상중), 태그(대표문제·서술형)로 읽었다. 이 범위에는 유형 UP·시험에 꼭 나오는 문제 구역이 없어 ★4 이상이 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조), `insights[]`(통찰 유형·depth·근거), `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 접선 유형은 「접점을 t 로 두고 조건을 대입한다」는 절차가 유형의 정의라 통찰로 세지 않았고, 그 위에 다른 단원 도구(삼각함수 극한)·대칭식·역함수 대칭·판별식 전환이 얹힌 경우에만 통찰을 기록했다. 유형 대표문항(level 없음)은 M_total 이 낮아도 그 유형의 기준 문항이라 ★2 를 유지했고, 「중하」 표시 문항은 M_total ≤ 5 이면 ★1 로 내렸다.

## 문항 데이터

### 교과서 06-5 함수의 극대와 극소

```yaml
- id: RPM-CALC2-0626
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이계도함수를 이용해 f(x)=x+1/x 의 극값 구하기.
  category: "f'=0 의 근 → f'' 부호로 극대·극소 판정 → 극값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수를 이용한 극값 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=1-1/x²=0 → x=±1, f''=2/x³ 이므로 x=1 에서 극소 2, x=-1 에서 극대 -2. 공식 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=0 → x=±1 → f''(±1) 부호 → 극대 -2 · 극소 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극댓값: $-2$, 극솟값: $2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+a/x (a>0) 로 상수를 바꾸면 극값 ±2√a. 제약: a>0 이어야 극값이 존재(a<0 이면 단조), 정의역 x≠0 명시."
    creative: "(1) x+a/x 의 극댓값이 -4 가 되는 a 를 묻기(★2 · 역방향) (2) x²+a/x 처럼 극값이 하나만 생기는 꼴로(★1 유지) (3) f''(x)=0 이 되는 점을 함께 물어 이계도함수 판정의 한계(f''=0 인 경우)를 보게 하기(★2)."
```

```yaml
- id: RPM-CALC2-0627
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이계도함수를 이용해 f(x)=e^x+e^{-x} 의 극값 구하기.
  category: "f'=0 의 근 → f''>0 확인 → 극솟값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수를 이용한 극값 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=e^x-e^{-x}=0 → x=0, f''=e^x+e^{-x}>0 → 극솟값 2. 극댓값이 없음을 확인하는 정도. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'=e^x-e^{-x}=0 → x=0 → f''(0)=2>0 → 극솟값 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극솟값: $2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{ax}+e^{-ax}, 또는 e^x+k·e^{-x} (k>0 → x=½ln k 에서 극소 2√k). 제약: k>0 이어야 f'=0 의 실근이 존재."
    creative: "(1) e^x-e^{-x} 로 바꾸면 극값이 없음을 답하게(★1) (2) a·e^x+b·e^{-x} 의 극솟값이 6 인 조건(★2 · ab=9) (3) 극소점의 x좌표가 ln 2 가 되는 k(★2 · 역방향)."
```

```yaml
- id: RPM-CALC2-0628
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이계도함수를 이용해 f(x)=x² ln x 의 극값 구하기.
  category: "정의역 x>0 → f'=x(2ln x+1)=0 → f'' 부호 → 극솟값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수를 이용한 극값 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=x(2ln x+1)=0, x>0 이므로 x=e^{-1/2}. f''=2ln x+3 → 2>0 이라 극소, 값 -1/(2e). 정의역 x>0 만 챙기면 되는 표준 절차. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'=x(2ln x+1)=0 → x=e^{-1/2} → f''=2ln x+3>0 → 극솟값 -1/(2e)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극솟값: $-\dfrac{1}{2e}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "xⁿ ln x (n=1,2,3): 극소점 x=e^{-1/n}, 극솟값 -1/(ne). 제약: 정의역 x>0, 답은 e 의 거듭제곱을 그대로 두기."
    creative: "(1) x ln x 의 극솟값(★1) (2) x² ln x - kx² 꼴로 극소점의 위치를 묻기(★2) (3) 극솟값 -1/(2e) 를 이용해 x² ln x = c 의 실근 개수(★3 · RT)."
```

```yaml
- id: RPM-CALC2-0629
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0<x<π 에서 이계도함수를 이용해 f(x)=x+cos 2x 의 극값 구하기.
  category: "f'=1-2sin 2x=0 을 범위 안에서 풀기 → f''=-4cos 2x 부호 → 극대·극소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수를 이용한 극값 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=1-2sin 2x=0 → sin 2x=½, 0<2x<2π 이므로 2x=π/6, 5π/6. f''=-4cos 2x 의 부호로 x=π/12 극대·x=5π/12 극소. 범위 안 삼각방정식 풀이가 붙어 M_total 6 이나 표준 절차. 교과서 구역 ★1.
    [분류 이슈] 범위 있는 삼각방정식 + 이계도함수 두 단계로 ★2 후보 — 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "f'=1-2sin 2x=0 → 2x=π/6, 5π/6 → f''=-4cos 2x 부호 → 극대 π/12+√3/2 · 극소 5π/12-√3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극댓값: $\dfrac{\pi}{12}+\dfrac{\sqrt{3}}{2}$, 극솟값: $\dfrac{5}{12}\pi-\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x+cos 2x → x+sin 2x, 2x+cos 2x, x-cos 2x; 구간을 0<x<2π 로 넓히면 극값 4개. 제약: f'=0 이 구간 안에서 특수각으로 풀려야 하고 구간 끝점은 제외."
    creative: "(1) 구간을 0<x<2π 로 두어 극값의 개수 세기(★2) (2) x+a·cos 2x 에서 극값이 존재할 a 의 범위(★3 · BW) (3) 이계도함수 대신 증감표로 풀게 하고 두 방법이 같은 결과인지 비교(★1)."
```

### 유형 01 접점의 좌표가 주어진 접선의 방정식

```yaml
- id: RPM-CALC2-0630
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=e^{-x²+x}-3 위의 점 (1,-2) 에서의 접선 y=ax+b 의 a²+b². 5지선다.
  category: "합성함수 미분 → 접선 기울기 → 접선 방정식 → 계수 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=(-2x+1)e^{-x²+x} → x=1 에서 -1. y+2=-(x-1) → y=-x-1 → a²+b²=2. 합성함수 미분 한 번이 전부. 유형 대표(level 없음) 출발 ★2, M_total 4 로 −1 후보이나 유형의 기준 문항이라 ★2 유지.
  tier: star_2
  mechanism_primary: "y'=(1-2x)e^{-x²+x} → 기울기 -1 → y=-x-1 → a²+b²=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 안의 이차식(-x²+x → -x²+2x, x²-x)과 접점(지수가 0 이 되는 x 로 잡아 e⁰=1 유지). 제약: 접점에서 지수가 0 이 되게 두면 기울기·절편이 정수로 떨어지고 선택지가 정수."
    creative: "(1) a²+b² 대신 접선의 x절편·y절편(★2) (2) 접선이 지나는 점 (k,0) 을 묻기(★2) (3) 접선과 곡선의 다른 교점 존재 여부로 확장하면 방정식 풀이가 붙어 ★3."
```

```yaml
- id: RPM-CALC2-0631
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=xe^x 위의 점 (1,e) 에서의 접선의 방정식.
  category: "곱의 미분 → 기울기 → 접선 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=(x+1)e^x → 2e. y-e=2e(x-1) → y=2ex-e. 곱의 미분 한 번. 중하·M_total 4·통찰 없음 → −1 적용 ★1.
  tier: star_1
  mechanism_primary: "y'=(x+1)e^x → 기울기 2e → y=2ex-e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2ex-e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=1 → x=0, 2 나 곡선 xe^{-x}, x²e^x. 제약: 접점 x좌표를 정수로 두어 e 의 거듭제곱이 한 종류만 남게."
    creative: "(1) 접선의 y절편 -e 를 이용해 접선과 두 축이 이루는 삼각형 넓이(★2) (2) 접선이 원점을 지나게 하는 접점(★2 · 곡선 밖의 점 골조) (3) xe^x 와 접선의 위치 관계(접선 위/아래)를 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0632
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=√(1+sin πx) 위의 점 (1,1) 에서의 접선의 y절편. 5지선다.
  category: "근호·삼각 두 겹 합성함수 미분 → 기울기 -π/2 → y절편"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=π cos πx/(2√(1+sin πx)) → x=1 에서 -π/2. y-1=-π/2·(x-1) → y절편 π/2+1. 두 겹 합성함수 미분과 cos π=-1 의 부호가 요점. 중·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y'=π cos πx/(2√(1+sin πx)) → 기울기 -π/2 → y절편 1+π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=1 → x=½(sin=1 → 기울기 0), x=2; 안쪽 sin πx → cos πx, 1+sin(πx/2). 제약: 접점에서 1+sin 값이 1 또는 2(√2 허용)이고 cos 값이 특수각."
    creative: "(1) y절편 대신 x절편(★2) (2) 접선이 x축과 이루는 각(★2) (3) 접점을 (t, …) 로 두고 y절편의 t→0 극한을 묻기(★3 · 0639 골조)."
```

```yaml
- id: RPM-CALC2-0633
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=3-ln x² 위의 x좌표가 e 인 점에서의 접선이 점 (k,-5) 를 지날 때 k. 5지선다.
  category: "ln x²=2ln x 정리 → 접선 방정식 → 점 대입 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln x²=2ln x 로 보면 y'=-2/x → -2/e, 접점 (e,1). 접선 y=-(2/e)x+3 에 (k,-5) 대입 → k=4e. 접선을 세운 뒤 점을 대입하는 두 단계. 중·M_total 4·통찰 없음이라 −1 후보이나 접점 계산·대입이 이어져 ★2 유지.
  tier: star_2
  mechanism_primary: "ln x²=2ln x → y'=-2/x → 접선 y=-(2/e)x+3 → y=-5 대입 → k=4e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=e → e², 1; 상수 3 → 다른 값; 지나는 점의 y좌표. 제약: k 가 e 의 정수배로 떨어지도록 지나는 점의 y 를 3-2n 꼴로."
    creative: "(1) 접선의 x절편·y절편으로 둘러싸인 넓이(★2) (2) 접선이 원점을 지나는 접점(★2) (3) 접점을 t 로 두고 접선이 지나는 점 (k,-5) 의 k 를 t 로 나타내 최댓값(★3 · k=t(5-ln t))."
```

```yaml
- id: RPM-CALC2-0634
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=1/(3x²+a) 위의 점 (-1, 1/(a+3)) 에서의 접선의 x절편이 1 일 때 상수 a. 5지선다.
  category: "매개변수 a 를 안은 채 접선 세우기 → x절편 조건 대입 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=-6x/(3x²+a)² → x=-1 에서 6/(a+3)². 접선 y-1/(a+3)=6/(a+3)²·(x+1) 에 (1,0) 대입 → -(a+3)=12 → a=-15. 매개변수를 안은 채 접선을 세우고 절편 조건으로 푸는 표준 절차. 중·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "y'=-6x/(3x²+a)² → 접선(a 포함) → (1,0) 대입 → a+3=-12 → a=-15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=-1 → 1, 2; 분모 3x²+a → x²+a, 2x²+a; x절편 1 → 2, 3. 제약: 접점의 y좌표를 1/(3x₀²+a) 꼴로 그대로 두어 (a+3)² 로 나누는 정리가 되고 a 가 정수로 떨어지게 절편 선택."
    creative: "(1) 접선의 y절편 조건으로 a(★2) (2) 접선이 원점을 지날 때 a(★2) (3) 접선이 x축과 이루는 각이 45° 가 되는 a(★3 · (a+3)² 이차식 풀이)."
```

```yaml
- id: RPM-CALC2-0635
  page: 90
  vendor_label: "유형 01 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=ln(x+1/e²) 과 y축의 교점에서의 접선 l 이 x축·y축과 둘러싸는 도형의 넓이.
  category: "y축 교점 찾기 → 접선 → 두 절편 → 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 → y=-2, y'=1/(x+1/e²) → e². 접선 y=e²x-2 의 x절편 2/e² → 넓이 ½·(2/e²)·2=2/e². 교점 찾기·접선·넓이 세 단계 절차. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y축 교점 (0,-2) → y'(0)=e² → 접선 y=e²x-2 → x절편 2/e² → 넓이 2/e²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{e^2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/e² → 1/e, 1/e³ (교점 y=-n, 기울기 eⁿ, 넓이 n²/(2eⁿ)). 제약: 상수를 e 의 거듭제곱으로 두어 ln 값이 정수."
    creative: "(1) x축 교점에서의 접선으로 바꾸기(★2) (2) ln(x+a) 의 접선과 두 축이 이루는 넓이가 2 가 되는 a(★3 · BW) (3) 접선과 곡선 사이의 넓이(적분 단원 결합 · ★3~4 XU)."
```

### 유형 02 접선과 수직인 직선의 방정식

```yaml
- id: RPM-CALC2-0636
  page: 91
  vendor_label: "유형 02 접선과 수직인 직선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=3x/(x+4) 위의 점 (2,1) 에서의 접선과 수직인 직선 y=ax+b 의 a+b. 5지선다.
  category: "몫의 미분 → 접선 기울기 → 음의 역수 → 법선 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선(법선)의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분 y'=12/(x+4)² → 1/3, 수직 기울기 -3. y-1=-3(x-2) → y=-3x+7 → a+b=4. 접선 기울기의 음의 역수 한 번. 유형 대표 ★2 출발, M_total 4·통찰 없음이라 −1 후보이나 기준 문항이라 ★2 유지.
  tier: star_2
  mechanism_primary: "y'=12/(x+4)² → 접선 기울기 1/3 → 수직 기울기 -3 → y=-3x+7 → a+b=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수식 ax/(x+b) 와 접점. 제약: 접점에서 (x+b)² 이 분자 상수(12)를 나누는 완전제곱수(36, 4, 9)가 되어 기울기가 간단한 유리수."
    creative: "(1) 수직인 직선의 x절편(★2) (2) 수직인 직선이 곡선과 다시 만나는 점(★3 · 분수방정식) (3) 접선·법선·x축이 이루는 삼각형 넓이(★3)."
```

```yaml
- id: RPM-CALC2-0637
  page: 91
  vendor_label: "유형 02 접선과 수직인 직선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x ln(2x-5) 위의 점 (3,0) 에서의 접선과 수직인 직선의 방정식.
  category: "곱·합성 미분 → 기울기 6 → 음의 역수 → 법선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선(법선)의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=ln(2x-5)+2x/(2x-5) → x=3 에서 0+6=6. 수직 기울기 -1/6 → y=-(x-3)/6. 곱·합성 미분 뒤 음의 역수. 중하·M_total 4·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y'=ln(2x-5)+2x/(2x-5) → 6 → 수직 기울기 -1/6 → y=-x/6+1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-\dfrac{1}{6}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln(2x-5) 의 안쪽 일차식과 접점(ln 의 인수가 1 이 되는 x). 제약: 접점에서 ln 의 인수를 1 로 두어 y=0·미분값이 정수."
    creative: "(1) 접선과 법선의 x절편 사이 거리(★2) (2) 법선을 y=ax+b 로 두고 a-b(★1) (3) 접점을 t 로 두고 법선이 원점을 지나는 조건(★3 · 방정식)."
```

```yaml
- id: RPM-CALC2-0638
  page: 91
  vendor_label: "유형 02 접선과 수직인 직선의 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=x²e^{x-2} 위의 점 (2,a) 에서의 접선과 수직인 직선이 점 (b,5) 를 지날 때 a-b.
  category: "접점 y 값 → 미분 → 법선 → 점 대입 → a-b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선(법선)의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=4, y'=(x²+2x)e^{x-2} → 8, 법선 y-4=-(x-2)/8. (b,5) 대입 → b=-6 → a-b=10. 접점 y 값·미분·법선·대입 네 단계 서술. 중·서술형(+0)·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "a=f(2)=4 → f'(2)=8 → 법선 y-4=-(x-2)/8 → (b,5) 대입 → b=-6 → a-b=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=2(지수 x-2 가 0) 를 유지하며 x²·x³ 이나 지나는 점의 y좌표(5 → 4+n/8). 제약: 지수가 접점에서 0 이 되게 두고, 지나는 점의 y 가 a+(정수)/8 꼴이어야 b 정수."
    creative: "(1) 법선의 x절편·y절편(★2) (2) 법선·접선·x축이 이루는 삼각형 넓이(★2) (3) 접점을 (t, …) 로 두고 법선이 특정 점을 지나는 t 찾기(★3 · 방정식)."
```

```yaml
- id: RPM-CALC2-0639
  page: 91
  vendor_label: "유형 02 접선과 수직인 직선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=cos 2x 위의 점 (t, cos 2t) 에서의 접선과 수직인 직선의 y절편을 g(t) 라 할 때 lim_{t→0} g(t).
  category: "법선 기울기 1/(2sin 2t) → y절편 g(t) → t/sin 2t 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "법선의 y절편 g(t)=cos 2t - t/(2sin 2t) 로 정리한 뒤 t→0 극한을 삼각함수 극한 (sin 2t)/t → 2 로 처리(접선 단원 + 삼각함수 극한 단원 결합)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 수직인 직선(법선)의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y'=-2sin 2x → 법선 기울기 1/(2sin 2t), y절편 g(t)=cos 2t - t/(2sin 2t). t→0 에서 t/sin 2t → ½ 이므로 g → 1-¼ = 3/4. 법선 자체는 표준이고, t 를 변수로 둔 y절편의 극한에서 삼각함수 극한이 결합(XU d1). 상중·M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "y'=-2sin 2x → 법선 기울기 1/(2sin 2t) → g(t)=cos 2t - t/(2sin 2t) → lim t/sin 2t=½ → 3/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 2x → cos 3x, cos x (극한값 1-1/k² 꼴). 제약: 법선 기울기가 1/(k sin kt) 꼴이어야 t/sin kt 극한이 1/k 로 유한. sin 계열 곡선은 t→0 에서 접선 기울기가 0 이 아니라 극한이 자명해지므로 피할 것."
    creative: "(1) 접선의 y절편의 극한(★2 · 극한이 자명 1) (2) y=cos x, y=cos² x 로 바꾸고 같은 법선 절편 극한(★3 · 같은 골조) (3) 법선의 x절편 h(t)=t-sin 4t 와 y절편 g(t) 를 함께 두고 lim g(t)·h(t)/t 같은 결합 극한(★4 · 극한 형태 판단 추가)."
```

### 유형 03 기울기가 주어진 접선의 방정식

```yaml
- id: RPM-CALC2-0640
  page: 91
  vendor_label: "유형 03 기울기가 주어진 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=ln(x²+1) 에 접하고 직선 x-y+2=0 에 평행한 직선의 x절편.
  category: "평행 → 기울기 1 → f'(x)=1 로 접점 → 접선 → x절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 1 → y'=2x/(x²+1)=1 → (x-1)²=0 → 접점 (1, ln 2). y=x-1+ln 2 → x절편 1-ln 2. 기울기 조건으로 접점을 찾는 유형 표준 절차. 대표·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "평행 → 기울기 1 → 2x/(x²+1)=1 → x=1(중근) → 접선 y=x-1+ln 2 → x절편 1-ln 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1-\ln 2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 1 유지가 핵심(x²-2x+1=0 중근으로 접점 유일). 기울기를 4/5 로 바꾸면 접점 x=½, 2 둘이 되어 접선 2개(문제 재구성 필요). 곡선 ln(x²+a) 도 가능하나 접점 정수 유지."
    creative: "(1) 기울기 4/5 로 두어 두 접선 사이의 거리(★3) (2) ln(x²+1) 에 접하는 직선의 기울기 범위(★3 · 2x/(x²+1) 의 최댓값 1 → BW) (3) 접선과 y=x+2 사이의 거리(★2)."
```

```yaml
- id: RPM-CALC2-0641
  page: 91
  vendor_label: "유형 03 기울기가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤π/4 에서 곡선 y=2sin²x 에 접하고 x축 양의 방향과 60° 를 이루는 직선 l 의 방정식.
  category: "각 → 기울기 √3 → 2sin 2x=√3 을 범위 안에서 풀기 → 접점 → 접선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 tan 60°=√3, y'=4sin x cos x=2sin 2x=√3 → 2x=π/3(범위) → 접점 (π/6, ½). y=√3x+½-√3π/6. 배각 정리와 범위 한정 삼각방정식이 붙은 기울기 조건 절차. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "60° → 기울기 √3 → 2sin 2x=√3 → x=π/6 → 접점 (π/6, ½) → 접선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\sqrt{3}x+\dfrac{1}{2}-\dfrac{\sqrt{3}}{6}\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 60° → 45°(sin 2x=½ → x=π/12)·30°; 범위를 0≤x≤π/2 로 넓히면 접점 2개. 제약: 기울기가 2sin 2x 의 치역 [-2,2] 안에 있고 특수각으로 풀려야 함."
    creative: "(1) 범위를 0≤x≤π 로 넓혀 두 접선의 교점(★3) (2) 접선이 x축과 이루는 각이 최대가 되는 접점(★2 · 기울기 최대 2) (3) 접선과 x축·y축이 이루는 삼각형 넓이(★2)."
```

```yaml
- id: RPM-CALC2-0642
  page: 91
  vendor_label: "유형 03 기울기가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=(x-1)/(x+1) 에 접하고 직선 y=-2x+3 과 수직인 두 직선이 y축과 만나는 점 A, B 사이의 거리. 5지선다.
  category: "수직 → 기울기 ½ → 2/(x+1)²=½ 로 접점 둘 → 두 접선 y절편 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 ½ → 2/(x+1)²=½ → x=1, -3. 접점 (1,0), (-3,2) 의 접선 y절편 -½, 7/2 → AB=4. 접점 둘을 빠짐없이 잡는 것 외에는 표준. 중·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "수직 → 기울기 ½ → 2/(x+1)²=½ → x=1, -3 → 두 접선 y절편 -½, 7/2 → AB=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 ½ → 2, 1/8 ((x+1)²=1, 16); 곡선 (x-a)/(x+b). 제약: (x+1)²=k 의 k 가 완전제곱수가 되는 기울기만 → 접점 정수."
    creative: "(1) 두 접선 사이의 거리(★2 · 평행선 거리) (2) 두 접점 사이의 거리(★2) (3) 두 접선과 곡선의 두 점근선으로 둘러싸인 도형의 넓이(★3 · SYM: 두 접점이 점근선 교점 (-1,1) 에 대해 대칭)."
```

```yaml
- id: RPM-CALC2-0643
  page: 91
  vendor_label: "유형 03 기울기가 주어진 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=e^{4x}+2ax 가 x축에 접할 때 상수 a. 5지선다.
  category: "x축 접함 → 접점 t 에서 f(t)=0, f'(t)=0 → 지수 소거 → t → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x축에 접한다」를 접점 t 에서 f(t)=0 과 f'(t)=0 이 동시에 성립하는 조건으로 옮기고, e^{4t}=-a/2 를 f(t)=0 에 대입해 t 를 소거"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선이 직선(x축)에 접할 조건 — 접점 미지의 두 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(t)=4e^{4t}+2a=0 → e^{4t}=-a/2, f(t)=0 에 넣으면 a(2t-½)=0, a≠0 이므로 t=¼ → a=-2e. x축에 접함을 접점 미지수의 두 조건으로 동치 변환(EQV d1)하고 지수를 소거하는 손이 필요. 유형 제목(기울기 주어진 접선)과 골조가 달라 type_hint 를 따로 둠. 상중·M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "x축 접함 → f(t)=0 ∧ f'(t)=0 → e^{4t}=-a/2 대입 → t=¼ → a=-2e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{4x} → e^{2x}, e^{kx} (t=1/k, a=-ke/2); x축 → y=c 로 옮기면 상수항 추가. 제약: a<0 이어야 e^{4t}=-a/2>0 (T-부호), 선택지는 -e·-2e·-4e 처럼 계수만 달리."
    creative: "(1) y=e^{4x}+2ax 와 x축의 교점이 2개가 되는 a 의 범위(★3 · BW) (2) 곡선이 직선 y=ax+b 에 접할 때 a, b 의 관계(★3) (3) 두 곡선 y=e^{4x}, y=-2ax 가 접한다고 재해석해 유형 06 골조와 비교(★3 · SC 씨앗)."
```

### 유형 04 곡선 밖의 점에서 그은 접선의 방정식

```yaml
- id: RPM-CALC2-0644
  page: 92
  vendor_label: "유형 04 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원점에서 곡선 y=e^x/x 에 그은 접선이 점 (1,k) 를 지날 때 k. 5지선다.
  category: "접점 (t, e^t/t) → 접선에 원점 대입 → t=2 → 접선 → k"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (t, e^t/t), y'=e^x(x-1)/x². 접선에 (0,0) 대입 → -e^t/t=-e^t(t-1)/t → t=2. 기울기 e²/4 → 접선 y=e²x/4 → k=e²/4. 접점을 t 로 두고 곡선 밖의 점을 대입하는 유형 표준 절차. 대표·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 (t, e^t/t) → 접선에 (0,0) 대입 → t=2 → 기울기 e²/4 → k=e²/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x/x → e^x/x², e^{2x}/x (t 가 1, 2 로 떨어지게); 원점 대신 (a,0). 제약: 접점 방정식이 일차·간단한 이차로 풀리고 e^t 가 약분되는 꼴."
    creative: "(1) 접선과 x축·직선 x=1 로 둘러싸인 넓이(★2) (2) 점 (a,0) 에서 그은 접선의 접점 t 를 a 로 나타내기(★3 · Mₐ 상승) (3) 원점에서 그을 수 있는 접선의 개수 판정(★3 · 유형 05 골조)."
```

```yaml
- id: RPM-CALC2-0645
  page: 92
  vendor_label: "유형 04 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (½, 0) 에서 곡선 y=√(2x²+1) 에 그은 접선의 기울기. 5지선다.
  category: "접점 (t, √(2t²+1)) → 접선에 점 대입 · 근호 정리 → t=-1 → 기울기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (t, √(2t²+1)), y'=2x/√(2x²+1). 접선에 (½,0) 대입 → -(2t²+1)=t-2t² → t=-1 → 기울기 -2/√3=-2√3/3. 근호 정리가 한 번 있으나 접점 방정식이 일차로 풀려 표준. 중하 표시이나 근호 대수·M_total 6 이라 ★2 유지.
  tier: star_2
  mechanism_primary: "접점 (t, √(2t²+1)) → (½,0) 대입·근호 정리 → t=-1 → 기울기 -2√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (½,0) → (a,0) 이면 접점 t=-1/(2a); 근호 안 2x²+1 → x²+1. 제약: t 가 유리수로 떨어지고 √(2t²+1) 이 √3 처럼 한 근호로 정리."
    creative: "(1) 접선의 방정식 전체(★2) (2) 점 (a,0) 에서 그은 접선의 접점이 x=-1 이 되는 a(★2 · 역방향) (3) 쌍곡선 y²-2x²=1 의 위쪽 가지로 보고 이차곡선 접선 공식과 비교(★3 · XU·SC)."
```

```yaml
- id: RPM-CALC2-0646
  page: 92
  vendor_label: "유형 04 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점 O 에서 곡선 y=2ln x/x 에 그은 접선의 접점을 A, A 를 지나고 접선에 수직인 직선이 y축과 만나는 점을 B 라 할 때 삼각형 OAB 의 넓이. (그림: 곡선·접선·법선·색칠된 삼각형 OAB)
  category: "원점 접선 조건 f'(t)=f(t)/t → 접점 A → 법선 → B → 직각삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠A=90° 인 삼각형 OAB 의 넓이를 두 변 OA·AB 의 길이(근호) 대신 밑변 OB · 높이(A 의 x좌표 √e) 로 전환해 계산을 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=2(1-ln x)/x², 원점 접선 조건 f'(t)=f(t)/t → ln t=½ → A(√e, 1/√e), OA 기울기 1/e. 법선 기울기 -e → B(0, (e²+1)/√e). 넓이 ½·OB·√e=(e²+1)/2. 접점은 표준이고, 넓이를 OB 밑변·A 의 x좌표 높이로 보는 전환(RT d1)이 근호 계산을 없앰. 중·M_total 6·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "f'(t)=f(t)/t → ln t=½ → A(√e, 1/√e) → 법선 기울기 -e → B(0, (e²+1)/√e) → ½·OB·x_A=(e²+1)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{e^2+1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0646.png"
  latex: latex-bank/rpm-calc2/items/0646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2ln x/x → c·ln x/x (원점 접선의 접점 ln t=½ 는 c 와 무관, 넓이는 c/4+e²/c · c=2 일 때 (e²+1)/2); 그림 라벨 O·A·B 와 직각 표시 고정. 제약: 접점 x=√e 가 유지되므로 c 만 바꾸면 A 의 y좌표·B 만 변함."
    creative: "(1) 넓이 대신 선분 AB 의 길이(★2) (2) 접선·법선·x축이 이루는 삼각형(★2) (3) 계수 c 를 두고 넓이 c/4+e²/c 의 최솟값(★3 · 산술·기하 평균 XU)."
```

```yaml
- id: RPM-CALC2-0647
  page: 92
  vendor_label: "유형 04 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (2,0) 에서 곡선 y=(x-1)e^x 에 그은 두 접선의 기울기의 곱.
  category: "접점 t 접선에 (2,0) 대입 → t²-3t+1=0 → 기울기 곱을 대칭식으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접점 t₁, t₂ 를 개별로 구하지 않고 기울기 곱 t₁e^{t₁}·t₂e^{t₂}=t₁t₂·e^{t₁+t₂} 를 근과 계수의 관계(대칭식)로 한 번에 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y'=xe^x, 접점 t 의 접선에 (2,0) 대입 → t²-3t+1=0. 기울기 곱 t₁e^{t₁}·t₂e^{t₂}=t₁t₂·e^{t₁+t₂}=1·e³. 접점 방정식은 표준이나 무리수 근 (3±√5)/2 를 구하지 않고 대칭식으로 묶는 것이 핵심(SYM d1). 상중·M_total 6·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "y'=xe^x → (2,0) 대입 → t²-3t+1=0 → 기울기 곱 = t₁t₂·e^{t₁+t₂} = e³"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e^3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (2,0) → (a,0) 이면 접점 방정식 t²-(a+1)t+1=0, 기울기 곱 e^{a+1}. 제약: 판별식 (a+1)²-4>0 (a>1 또는 a<-3) 이어야 접선이 2개이고, 곱이 t₁t₂=1 로 정리되게 상수항 유지."
    creative: "(1) 기울기의 합을 물으면 t₁e^{t₁}+t₂e^{t₂} 가 대칭식으로 안 묶여 골조가 깨짐 — 곱·비처럼 대칭식으로 묶이는 양만(★3 유지) (2) 두 접점의 x좌표 합·곱(★2) (3) 점 (a,0) 에서 접선이 두 개 그어질 a 의 범위(★3 · 유형 05 골조)."
```

```yaml
- id: RPM-CALC2-0648
  page: 92
  vendor_label: "유형 04 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점에서 두 곡선 y=e^{2x}, y=ln√x 에 그은 접선의 접점을 각각 A, B 라 할 때 직선 AB 의 y절편.
  category: "두 곡선 각각 원점 접선의 접점 → (역함수 대칭) → 직선 AB → y절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=e^{2x} 와 y=ln√x=½ln x 가 서로 역함수 → A, B 가 y=x 에 대칭 → AB 기울기 -1, y절편 = x_A+y_A (두 접점 직접 계산도 가능한 지름길)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e^{2x} 의 원점 접선: e^{2t}=2te^{2t} → t=½, A(½, e). ½ln x: ½ln s=½ → s=e, B(e, ½). AB 기울기 -1 → y=-x+e+½. 두 곡선이 역함수 관계라 A·B 가 y=x 대칭임을 보면 한 접점만 구해도 됨(SYM d1). 상중·M_total 6·통찰 1 → ★3.
    [분류 이슈] 대칭 통찰 없이 두 접점을 직접 계산해도 M_total 6 안에 풀려 통찰형/절차형 경계 — 통찰형 ★3 으로 기록.
  tier: star_3
  mechanism_primary: "원점 접선 → A(½, e), B(e, ½) (역함수 대칭) → AB 기울기 -1 → y절편 e+½"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e+\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{2x} ↔ ½ln x 쌍을 e^{kx} ↔ (1/k)ln x 로 (접점 A(1/k, e), B(e, 1/k), y절편 e+1/k). 제약: 두 곡선을 역함수 쌍으로 유지해야 대칭 골조가 살고, 원점 접선의 접점이 1/k·e 로 떨어짐."
    creative: "(1) 두 접선이 y=x 에 대칭임을 묻거나 두 접선이 이루는 각(★2) (2) e^{2x} 와 ln x 처럼 역함수 쌍이 아닌 조합으로 바꾸면 대칭이 깨져 직접 계산 절차형 ★2 (3) 삼각형 OAB 의 넓이(★3 · 대칭 활용)."
```

### 유형 05 곡선에 그을 수 있는 접선의 개수

```yaml
- id: RPM-CALC2-0649
  page: 92
  vendor_label: "유형 05 곡선에 그을 수 있는 접선의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (3,3) 에서 곡선 y=(x-1)/x 에 그을 수 있는 접선의 개수.
  category: "접점 t 접선에 (3,3) 대입 → 2t²+2t-3=0 → 실근 개수(판별식·t≠0)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 개수를 접점 t 에 대한 방정식 2t²+2t-3=0 의 서로 다른 실근의 개수로 옮김(기하 → 대수 전환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선에 그을 수 있는 접선의 개수(접점 방정식의 실근 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=1/x², 접점 (t, 1-1/t) 의 접선에 (3,3) 대입 → 2t²+2t-3=0, D=28>0·두 근 모두 t≠0 → 2개. 접선의 개수를 접점 방정식의 실근 개수로 바꾸는 것이 유형의 골조(RT d1). 대표·M_total 6·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "접점 (t, 1-1/t) → (3,3) 대입 → 2t²+2t-3=0 → D>0, t≠0 → 2개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (3,3) → (a,b) 이면 접점 방정식 (b-1)t²+2t-a=0, D=4+4a(b-1). 제약: b≠1 이어야 이차이고, D 의 부호로 개수 0·1·2 를 조정, t=0 근이 생기지 않게 a≠0."
    creative: "(1) 점 (a,3) 에서 접선이 하나만 그어지는 a(★3 · D=0 → BW) (2) 접선이 두 개 그어지는 점 (a,b) 의 영역 그리기(★4 · RT+MI) (3) 곡선을 y=1/x 로 바꾸면 판별식이 간단해져 ★2 유지."
```

```yaml
- id: RPM-CALC2-0650
  page: 92
  vendor_label: "유형 05 곡선에 그을 수 있는 접선의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (k,0) 에서 곡선 y=xe^x 에 서로 다른 두 접선을 그을 수 있을 때 k 의 값이 될 수 없는 것. 5지선다.
  category: "접점 t 접선에 (k,0) 대입 → t²-kt-k=0 → 서로 다른 두 실근 → D>0 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 두 접선 → 접점 방정식 t²-kt-k=0 의 서로 다른 두 실근 → 판별식 k²+4k>0 으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선에 그을 수 있는 접선의 개수(접점 방정식의 실근 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=(x+1)e^x, 접점 t 의 접선에 (k,0) 대입 → t²-kt-k=0. 서로 다른 두 실근 ⇔ k²+4k>0 ⇔ k<-4 또는 k>0 → -3 은 불가. 접선 개수를 판별식으로 옮기는 RT d1 위에 매개변수 k 가 얹힘. 중·M_total 7·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 접선에 (k,0) 대입 → t²-kt-k=0 → D=k²+4k>0 → k<-4 또는 k>0 → -3 불가"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (k,0) → (k,c); 곡선 xe^x → (x+1)e^x, xe^{2x}. 제약: 접점 방정식이 t 의 이차식이어야 판별식으로 정리되며, e^t 가 약분되게 곡선을 (일차식)·e^{ax} 꼴로."
    creative: "(1) 접선이 정확히 하나 그어지는 k(★2 · D=0 → k=-4, 0) (2) (k,0) 에서 그은 두 접선의 접점 x좌표 합·곱(★2) (3) 두 접선이 서로 수직일 조건(★4 · (t₁+1)(t₂+1)e^{t₁+t₂}=-1 정리 · SYM)."
```

### 유형 06 두 곡선의 공통인 접선

```yaml
- id: RPM-CALC2-0651
  page: 93
  vendor_label: "유형 06 두 곡선의 공통인 접선"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 곡선 y=a-2sin²x, y=2cos x 가 x=t (0<t<π) 인 점에서 공통인 접선을 가질 때 상수 a.
  category: "f'(t)=g'(t) → sin t(2cos t-1)=0 · 범위로 t=π/3 → f(t)=g(t) → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선의 공통인 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통 접선 ⇔ f(t)=g(t), f'(t)=g'(t). -2sin 2t=-2sin t → sin t(2cos t-1)=0, 0<t<π 에서 sin t≠0 → t=π/3. 값 조건에서 a-3/2=1 → a=5/2. 두 조건 연립은 유형의 정의이고 sin t≠0 은 범위 함정. 대표·M_total 7·통찰 없음 → ★2.
    [분류 이슈] 공통 접선 조건(f=g, f'=g')을 EQV 로 셀지 — 유형 06 의 표준 공식으로 보고 절차형 처리(0652 동일). 0643 의 「x축에 접함」은 접점 소거가 붙어 EQV 로 인정.
  tier: star_2
  mechanism_primary: "f'(t)=g'(t) → sin t(2cos t-1)=0 → t=π/3 → f(t)=g(t) → a=5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2cos x 의 계수 c 를 2√2·2√3 으로 바꾸면 cos t=c/4 로 t=π/4·π/6. 제약: f'=g' 이 sin t·(cos t 의 일차식)=0 으로 인수분해되고 cos t 가 특수각 값(|c|<4)이어야 하며, 범위 0<t<π 로 sin t=0 을 제외."
    creative: "(1) a 대신 공통 접선의 방정식(★2) (2) 범위를 0<t<2π 로 넓혀 두 곡선이 접하는 t 의 개수(★3 · MI) (3) 두 곡선이 서로 다른 점에서 같은 직선에 접하는 꼴(접점 두 개 미지수 · ★4 · CON)."
```

```yaml
- id: RPM-CALC2-0652
  page: 93
  vendor_label: "유형 06 두 곡선의 공통인 접선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=ln x, y=ax+b/x 가 x=e² 인 점에서 공통인 접선을 가질 때 상수 a, b 에 대하여 ab.
  category: "f(e²)=g(e²), f'(e²)=g'(e²) 연립 → e⁴ 곱해 정리 → a, b → ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선의 공통인 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(e²)=g(e²): ae²+b/e²=2, f'=g': a-b/e⁴=1/e². e⁴ 을 곱해 더하고 빼면 a=3/(2e²), b=e²/2 → ab=3/4. 연립 두 식을 e 의 거듭제곱으로 정리하는 계산이 부담. 중·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f(e²)=g(e²), f'(e²)=g'(e²) → ae⁴+b=2e², ae⁴-b=e² → a=3/(2e²), b=e²/2 → ab=3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x=e² → eⁿ (ae^{2n}+b=ne^n, ae^{2n}-b=e^n → a=(n+1)/(2e^n), b=(n-1)e^n/2 → ab=(n²-1)/4). 제약: n=1 이면 b=0 이라 피하고 n≥2."
    creative: "(1) ab 대신 공통 접선의 y절편(★2) (2) 접점 x좌표를 미지수 t 로 주고 조건 하나를 더 붙이기(★3 · 세 미지수) (3) ln x 와 ax+b/x 가 접한 뒤 다른 곳에서 다시 만나는지 판정(★4 · 함수 개형)."
```

### 유형 07 역함수의 그래프의 접선의 방정식

```yaml
- id: RPM-CALC2-0653
  page: 93
  vendor_label: "유형 07 역함수의 그래프의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=e^{2x+3} 의 역함수 g 에 대하여 곡선 y=g(x) 위의 점 (e, g(e)) 에서의 접선의 y절편.
  category: "대응점 g(e)=-1 → g'(e)=1/f'(-1) → 접선 → y절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 그래프의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(e)=-1 (e^{2x+3}=e → x=-1), g'(e)=1/f'(-1)=1/(2e). 접선 y+1=(x-e)/(2e) → y절편 -3/2. 역함수 미분법 공식(대응점 찾기)이 유형 표준. 대표·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "g(e)=-1 → g'(e)=1/f'(-1)=1/(2e) → 접선 y=x/(2e)-3/2 → y절편 -3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{2x+3} → e^{ax+b} (대응점 x=(1-b)/a, g'(e)=1/(ae)); 점 (e, g(e)) → (e², g(e²)). 제약: f(x)=e 가 되는 x 가 정수·유리수로 떨어지게 지수의 일차식을 고름."
    creative: "(1) g(x)=(ln x-3)/2 를 직접 구해 미분하는 풀이와 비교(★2 · SC 씨앗) (2) y=g(x) 의 접선이 원점을 지나는 접점(★3) (3) y=f(x) 와 y=g(x) 의 접선이 y=x 에 대칭임을 이용해 f 의 접선에서 바로 답(★3 · SYM)."
```

```yaml
- id: RPM-CALC2-0654
  page: 93
  vendor_label: "유형 07 역함수의 그래프의 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(x-2)/(x+1) 의 역함수 g 에 대하여 곡선 y=g(x) 위의 점 (2, g(2)) 에서의 접선의 방정식.
  category: "f(x)=2 → 대응점 x=-4 → g'(2)=1/f'(-4)=3 → 접선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 그래프의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=2 → x=-4 → g(2)=-4. f'=3/(x+1)² → f'(-4)=1/3 → g'(2)=3. y+4=3(x-2) → y=3x-10. 대응점·역함수 미분 공식·접선 세 단계 표준. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(x)=2 → x=-4 → g'(2)=1/f'(-4)=3 → 접선 y=3x-10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=3x-10$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 x=2 → 다른 값(f(x)=c → x=(c+2)/(1-c) 가 정수 되게 c=0, 2, 3, …); 분수식 (x-a)/(x+b). 제약: 대응점이 정수이고 (x+1)² 이 완전제곱수가 되어 기울기가 간단한 유리수."
    creative: "(1) g(x)=(x+2)/(1-x) 를 직접 구해 미분하는 풀이와 비교(★2 · SC 씨앗) (2) y=g(x) 의 점근선과 접선으로 둘러싸인 넓이(★3) (3) 이 접선이 y=f(x) 의 접선과 y=x 에 대칭임을 확인(★2 · SYM)."
```

### 유형 08 매개변수로 나타낸 곡선의 접선의 방정식

```yaml
- id: RPM-CALC2-0655
  page: 93
  vendor_label: "유형 08 매개변수로 나타낸 곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    매개변수 곡선 x=θ-sin θ, y=1-cos θ 에서 θ=π/2 에 대응하는 점에서의 접선의 y절편.
  category: "대응점 → dy/dx=sin θ/(1-cos θ) → 기울기 1 → 접선 → y절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점 (π/2-1, 1), dy/dx=sin θ/(1-cos θ) → θ=π/2 에서 1. y-1=x-(π/2-1) → y절편 2-π/2. 매개변수 미분법 공식 대입. 대표·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "dy/dx=sin θ/(1-cos θ) → θ=π/2 에서 1 → 점 (π/2-1, 1) → 접선 → y절편 2-π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2-\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ=π/2 → π/3, 2π/3 (사이클로이드 dy/dx=cot(θ/2)); 반지름 a 를 곱하기. 제약: θ=0 은 dx/dθ=0 이라 접선이 정의되지 않으므로 피하고, 특수각으로 sin·cos 값이 떨어지게."
    creative: "(1) 접선과 x축·y축이 이루는 삼각형 넓이(★2) (2) 접선의 기울기가 1 인 θ 를 거꾸로 묻기(★2 · cot(θ/2)=1) (3) 접선에 수직인 직선이 원점을 지나는 θ(★3)."
```

```yaml
- id: RPM-CALC2-0656
  page: 93
  vendor_label: "유형 08 매개변수로 나타낸 곡선의 접선의 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    매개변수 곡선 x=t+1/t², y=t²-1/t² 에서 t=1 에 대응하는 점에서의 접선이 점 (a,-4) 를 지날 때 a.
  category: "대응점 (2,0) → dx/dt=-1, dy/dt=4 → 기울기 -4 → 접선 → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점 (2,0), dx/dt=1-2/t³=-1, dy/dt=2t+2/t³=4 → 기울기 -4. y=-4(x-2) 에 (a,-4) 대입 → a=3. 미분 부호(dx/dt<0)만 조심하면 되는 표준 서술. 중·서술형·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "dx/dt=-1, dy/dt=4 → 기울기 -4 → 접선 y=-4x+8 → (a,-4) 대입 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t=1 유지(값이 정수)·지나는 점의 y좌표 -4 → 4, -8; 곡선 t+1/t², t²-1/t² 의 부호 조합. 제약: t=1 에서 dx/dt≠0 이어야 하고 기울기가 정수."
    creative: "(1) 접선의 x절편·y절편(★2) (2) 접선이 지나는 점 대신 접선에 수직인 직선이 지나는 점(★2) (3) 기울기가 -4 가 되는 t 를 거꾸로 묻기(★3 · t 의 고차 방정식)."
```

```yaml
- id: RPM-CALC2-0657
  page: 93
  vendor_label: "유형 08 매개변수로 나타낸 곡선의 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    매개변수 곡선 x=a/t, y=t²-1 에서 t=2 에 대응하는 점에서의 접선의 기울기가 -8 일 때 그 점에서의 접선의 방정식 (a 는 상수).
  category: "dy/dx=-2t³/a → 기울기 조건으로 a=2 → 대응점 (1,3) → 접선"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dy/dx=2t/(-a/t²)=-2t³/a → t=2 에서 -16/a=-8 → a=2. 점 (1,3) → y=-8x+11. 기울기 조건으로 a 를 먼저 정하는 미정계수 절차. 중·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "dy/dx=-2t³/a → -16/a=-8 → a=2 → 점 (1,3) → y=-8x+11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-8x+11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t=2 → 1, 3; 기울기 -8 → -2t³/a 가 정수가 되는 값(a 정수). 제약: a≠0, 대응점 (a/t, t²-1) 이 정수점."
    creative: "(1) 접선이 특정 점을 지날 때 a(★2) (2) 매개변수를 소거해 y=a²/x²-1 로 바꾼 뒤 같은 접선을 확인(★2 · SC 씨앗) (3) 접선의 x절편이 최소가 되는 t(★3)."
```

```yaml
- id: RPM-CALC2-0658
  page: 93
  vendor_label: "유형 08 매개변수로 나타낸 곡선의 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    매개변수 곡선 x=cos³t, y=sin³t (0<t<π/3) 위의 임의의 점에서의 접선이 x축·y축에 의해 잘리는 부분의 길이.
  category: "dy/dx=-tan t → 일반 점의 접선 → x절편 cos t · y절편 sin t → 길이 1"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dy/dx=3sin²t cos t/(-3cos²t sin t)=-tan t. 접선 y-sin³t=-tan t·(x-cos³t) 의 x절편 cos t(sin²t+cos²t)=cos t, y절편 sin t → 길이 √(cos²t+sin²t)=1. 절편 정리에서 sin²+cos²=1 을 두 번 쓰는 삼각 대수가 부담이나 통찰 유형으로 셀 단계는 없음. 상중·M_total 7 → ★3.
    [분류 이슈] 통찰 없는 절차형 ★3(상중). 절편 정리의 sin²+cos²=1 통합을 CON 으로 볼지 경계 — 절차형으로 기록.
  tier: star_3
  mechanism_primary: "dy/dx=-tan t → 접선 → x절편 cos t, y절편 sin t → 길이 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos³t, sin³t → a·cos³t, a·sin³t (길이 a); 범위 0<t<π/3 → 0<t<π/2 (제1사분면 유지). 제약: 아스트로이드의 접선 절편 길이가 상수인 성질은 지수 3 에서만 성립 — cos²t·sin²t 등으로 바꾸면 상수가 아니므로 문제를 재구성해야 함."
    creative: "(1) 접선과 두 축이 이루는 삼각형 넓이의 최댓값(★3 · sin t cos t/2 의 최대) (2) 접선이 x축과 이루는 각과 t 의 관계(★2 · 기울기 -tan t) (3) 접선의 길이가 일정함을 이용해 곡선을 「길이 1 인 선분의 자취」로 되묻기(★4 · RT)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 6 · ★2 22 · ★3 5 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 26 · premium 0
- 통찰 유형: I-RT 3(0646 · 0649 · 0650) · I-SYM 2(0647 · 0648) · I-XU 1(0639) · I-EQV 1(0643) — 모두 depth 1
- type_hint 상위: 「접점의 좌표가 주어진 접선의 방정식」 6 · 「곡선 밖의 점에서 그은 접선의 방정식」 5 · 「이계도함수를 이용한 극값 판정」 4 · 「접선과 수직인 직선(법선)의 방정식」 4 · 「매개변수로 나타낸 곡선의 접선의 방정식」 4 · (「기울기가 주어진 접선의 방정식」 3 · 「두 곡선의 공통인 접선」 2 · 「곡선에 그을 수 있는 접선의 개수」 2 · 「역함수의 그래프의 접선의 방정식」 2 · 「곡선이 직선(x축)에 접할 조건」 1)
- 대상층: 하위권 6 · 중하위권 19 · 중위권 5 · 중상위권 3
- 그림: 1문(`crop:fig-0646.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 벤더 신호와 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0629 | 교과서 구역이나 범위 있는 삼각방정식 + 이계도함수 부호 판정으로 M_total 6 → ★2 후보. 라벨은 구역대로 ★1 유지 | ★1 / ★2 |
| RPM-CALC2-0648 | 역함수 대칭(SYM d1) 없이 두 접점을 직접 계산해도 M_total 6 안에 풀려 통찰형/절차형 경계. 문제 설계가 대칭에 기대므로 통찰형 ★3 으로 기록 | ★3 |
| RPM-CALC2-0651 | 공통 접선 조건(f=g, f'=g')을 EQV 로 셀지 — 유형 06 표준 공식으로 보고 절차형 처리(0652 동일). 0643 의 「x축에 접함」은 접점 소거가 붙어 EQV 인정 | ★2 |
| RPM-CALC2-0658 | 통찰 유형 없는 절차형 ★3(상중). 절편 정리의 sin²+cos²=1 통합을 CON 으로 볼지 경계 — 절차형으로 기록 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 RPM 유형 01~08 제목 그대로다. 접선 유형의 기본 골조는 「접점 주어짐(유형 01) / 기울기 주어짐(유형 03) / 곡선 밖의 점(유형 04)」 셋이며, 「법선(유형 02)」은 유형 01 에 음의 역수 한 단계를 얹은 변형이라 카탈로그에서 유형 01 의 하위 변형으로 통합해도 된다(base ★2).
- 「접선의 개수(유형 05)」는 「곡선 밖의 점(유형 04)」의 확장(접점 방정식의 실근 개수 · 판별식)이라 따로 세우되 base ★ 는 한 단계 위(★3)가 맞다. 이 범위의 두 문항은 벤더 라벨(대표·중)대로 ★2 로 두었으나 카탈로그가 생기면 재산정 대상.
- 「공통 접선(유형 06)」과 0643 「곡선이 x축에 접할 조건」은 골조가 같다(접점에서 값·미분계수 두 조건). 접점 x좌표가 주어지면 base ★2, 접점 미지이면 base ★3 으로 분리해 세울 것. 0643 은 유형 03 제목과 골조가 달라 type_hint 를 따로 두었다.
- 「역함수의 접선(유형 07)」·「매개변수 곡선의 접선(유형 08)」은 미분법 단원(05)의 도구(역함수 미분법 · 매개변수 미분법)에 접선을 얹은 것이라 따로 세우되 base ★2. 0658 처럼 「임의의 점」으로 일반화된 문항은 Mₐ 상승으로 ★3.
- 「이계도함수를 이용한 극값 판정」은 교과서 구역 전용으로 base ★1. 범위 있는 삼각함수(0629)는 같은 유형 안에서 ★2 변형으로 둘 수 있다.
