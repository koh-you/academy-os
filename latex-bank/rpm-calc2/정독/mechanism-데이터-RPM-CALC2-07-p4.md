---
name: mechanism-데이터-RPM-CALC2-07-p4
description: RPM 미적분Ⅱ 07 도함수의 활용 (2) (4/4 · 유형 19 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 07 도함수의 활용 (2)
  unit_code: CALC2-07
  part: "4/4"
  extract_range: "117~121쪽 · 0825~0858"
  total_problems: 34
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 07 도함수의 활용 (2) (4/4) 정독 데이터 (v1.0)

이 파일은 117~121쪽, 0825~0858 의 34문항을 다룬다. 구역은 「유형 19 최대·최소의 활용」(0825~0829) · 「시험에 꼭 나오는 문제」(0830~0851) · 「서술형 주관식」(0852~0855) · 「실력 Up」(0856~0858) 네 개이며, 단원의 마지막 부분이라 유형별 기본 문제보다 중단원 종합·심화 비중이 높다. 벤더 난이도 신호는 RPM 기준(구역이 곧 난이도 층 · level 하~상 · 대표문제·중요·기출 태그)을 그대로 읽었고, 유형 구역은 level, 종합 구역은 level 없음 → ★2 출발, 서술형 ★3 출발, 실력 Up ★4 출발에서 M_total·통찰로 ±1 조정했다.

내용상으로는 (1) 도형·좌표 설정 후 미분으로 최대·최소를 구하는 활용, (2) 변곡점·볼록성 조건, (3) 닫힌구간·정의역 제한에서의 최대·최소, (4) 방정식의 실근 개수와 부등식의 항상 성립 조건, (5) 직선·평면 운동의 속도·가속도가 반복된다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 유형 19 최대·최소의 활용

```yaml
- id: RPM-CALC2-0825
  page: 117
  vendor_label: "유형 19 최대·최소의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=e^{-x} 위 제1사분면의 점 P 에서 두 축에 내린 수선의 발로 만든 직사각형 OQPR 의 넓이의 최댓값. 5지선다.
  category: "점의 좌표를 한 변수로 → 넓이 함수 → 미분 최대"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점으로 만든 도형의 넓이의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(t, e^{-t}) 로 두면 넓이가 S(t)=te^{-t} 로 바로 나오고 S'=(1-t)e^{-t} 의 부호로 t=1 에서 최대. 변수 선택이 자명해 통찰 없음.
    유형 대표문제이고 미분 활용 골조가 온전히 들어가므로 M_total 5 의 -1 후보를 적용하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t, e^{-t}) (t>0) → S(t)=te^{-t} → S'=0 에서 t=1 → 최댓값 1/e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0825.png"
  latex: latex-bank/rpm-calc2/items/0825.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=e^{-2x}·y=xe^{-x}·y=2e^{-x} 로 바꿀 수 있음. 제약: t>0 에서 S 가 유일한 극대를 가져야 하고 선택지가 e 의 거듭제곱 꼴로 정리돼야 함."
    creative: "(1) 넓이 대신 직사각형 둘레의 최소를 묻기(★2 유지) (2) 직사각형을 P 에서의 접선이 두 축과 만드는 삼각형으로 바꾸면 접선식 한 단계가 추가돼 ★2~3 (3) 곡선을 y=ln x 로 바꾸면 정의역 제한이 생겨 T-범위 함정 ★3."
```

```yaml
- id: RPM-CALC2-0826
  page: 117
  vendor_label: "유형 19 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면이 정사각형이고 부피가 64 인 직육면체 상자의 겉넓이가 최소가 되도록 하는 높이. 5지선다.
  category: "부피 제약으로 변수 하나 소거 → 겉넓이 함수 → 미분 최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제약조건이 있는 입체의 겉넓이의 최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑변 a·높이 h 에 a^2h=64 를 대입해 h 를 소거하고 S(a)=2a^2+256/a 를 미분하는 표준 절차.
    유리식 미분 한 번뿐이고 통찰 없음. 벤더 「중」 → ★2 유지.
  tier: star_2
  mechanism_primary: "a^2h=64 로 h 소거 → S(a)=2a^2+256/a → S'=0 에서 a=4 → h=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(0825 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: "crop:fig-0826.png"
  latex: latex-bank/rpm-calc2/items/0826.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부피 값(27·125·216)과 밑면 모양(정삼각형·원). 제약: 임계점이 세제곱근으로 떨어져 정수·간단한 분수가 되도록 부피를 완전세제곱수 근처로 고름."
    creative: "(1) 겉넓이를 고정하고 부피의 최대를 묻는 역문제(★2) (2) 뚜껑 없는 상자로 바꾸면 계수만 달라짐(★2) (3) 밑면과 옆면의 단가를 다르게 줘 재료비 최소로 바꾸면 조건 통합 ★3."
```

```yaml
- id: RPM-CALC2-0827
  page: 117
  vendor_label: "유형 19 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB=AD=CD=2 인 사다리꼴 ABCD 에서 ∠B=∠C=θ (0<θ<π/2) 일 때 사다리꼴 넓이의 최댓값.
  category: "각 θ 로 높이·아랫변 표현 → 삼각함수 넓이식 → 미분 최대"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사다리꼴의 높이와 아랫변을 θ 의 삼각함수로 옮겨 넓이를 한 변수 함수로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "각을 변수로 둔 도형의 넓이의 최대"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    높이 2sinθ, 아랫변 2+4cosθ 로 옮기는 표현 전환이 골조의 출발(RT d1).
    미분 뒤 cosθ 에 대한 이차식 (2cosθ-1)(cosθ+1) 인수분해가 유일한 고비. 벤더 「중」·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "높이 2sinθ·아랫변 2+4cosθ → S(θ)=4sinθ(1+cosθ) → S'=4(2cosθ-1)(cosθ+1)=0 → θ=π/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3\sqrt{3}$'
  answer_source: "답지(0825 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: "crop:fig-0827.png"
  latex: latex-bank/rpm-calc2/items/0827.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변의 길이 2 를 다른 값(3·4)이나 AB=CD=a, AD=b 로. 제약: 0<θ<π/2 안에서 S'=0 의 유효근이 하나만 나오도록 cosθ 이차식의 근을 확인."
    creative: "(1) 넓이 대신 둘레나 대각선 길이의 최대(★2) (2) 사다리꼴을 원에 내접시키면 조건이 하나 더 붙어 ★3 (3) 최대가 되는 θ 와 그때의 모양(정삼각형 3개)을 설명하게 하는 서술형(★3)."
```

```yaml
- id: RPM-CALC2-0828
  page: 117
  vendor_label: "유형 19 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=2e^{-x} 위 제1사분면의 점 P 에서의 접선과 x축·y축으로 둘러싸인 삼각형 넓이의 최댓값. 5지선다.
  category: "접선 → 두 절편 → 넓이 함수 → 미분 최대"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축이 이루는 삼각형의 넓이의 최대"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(t, 2e^{-t}) 의 접선에서 x절편 t+1, y절편 2(1+t)e^{-t} 를 얻어 S(t)=(1+t)^2 e^{-t} 를 미분한다.
    0825 와 같은 골조에 접선·절편 단계가 하나 더 붙은 것뿐이라 통찰 없음. 벤더 「중」 → ★2.
  tier: star_2
  mechanism_primary: "P(t,2e^{-t}) 접선 → x절편 t+1·y절편 2(1+t)e^{-t} → S(t)=(1+t)^2 e^{-t} → S'=0 에서 t=1 → 4/e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0828.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수 2 와 지수의 계수(y=3e^{-2x} 등). 제약: 두 절편이 t 의 다항식×e^{-t} 로 정리돼 S'=0 이 t>0 에서 근 하나를 갖도록."
    creative: "(1) 곡선을 y=1/x 류로 바꿔 삼각형 넓이가 일정해지는 관찰형으로(★2~3) (2) 접선과 곡선·축이 둘러싼 넓이로 바꾸면 적분 단원 결합 ★4(I-XU) (3) 접점을 제2사분면까지 허용하면 범위 함정 ★3."
```

```yaml
- id: RPM-CALC2-0829
  page: 117
  vendor_label: "유형 19 최대·최소의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    지름 AB=12 인 반원에서 지름에 평행한 현 CD 를 그을 때, 선분 OB·OC·CD 와 호 BD 로 둘러싸인 도형의 넓이의 최댓값.
  category: "중심각 θ 로 영역을 부채꼴+삼각형으로 분할 → 미분 최대"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도형을 ∠BOD=θ 의 부채꼴 OBD 와 삼각형 OCD 로 분할해 넓이를 θ 의 함수로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원·부채꼴이 섞인 도형의 넓이의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    영역을 부채꼴과 삼각형으로 자르는 분할 착안이 골조 전부다(RT d2). 분할만 되면 S(θ)=18θ+18sin2θ 로 정리되고 미분 한 번으로 끝난다.
    중심각을 변수로 잡는 것과 CD 가 지름에 평행이어서 삼각형 OCD 의 밑변·높이가 θ 로 동시에 표현되는 것이 연결 고리. 벤더 「상중」 → ★3 유지.
  tier: star_3
  mechanism_primary: "∠BOD=θ → S(θ)=18θ+18sin2θ → S'=18+36cos2θ=0 → θ=π/3 → 6π+9√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\pi+9\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0829.png"
  latex: latex-bank/rpm-calc2/items/0829.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름 12 를 다른 짝수로. 제약: 부채꼴 항 r^2θ/2 와 삼각형 항 r^2 sin2θ/2 의 계수가 맞아 cos2θ 가 특수각 값이 되도록 반지름을 고름."
    creative: "(1) 둘러싸인 도형을 사다리꼴 OBDC 로 바꾸면 분할 착안이 사라져 ★2 (2) 넓이 대신 둘레의 최대(★3) (3) 현 CD 의 위치를 각이 아니라 길이 변수로 두게 하면 무리식 미분으로 Mₖ 가 올라 ★3~4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0830
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=(x^2+a)e^{-x} 이 구간 (-1,1) 에서 위로 볼록하도록 하는 실수 a 의 값의 범위.
  category: "위로 볼록 → y''≤0 이 구간 전체에서 성립 → 이차식의 구간 조건"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간에서 위로 볼록을 y''≤0 의 구간 전체 성립으로 옮기고, e^{-x}>0 이라 남는 이차식의 구간 최대(양 끝값) 조건으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "볼록성 조건을 만족시키는 미정계수의 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y''=(x^2-4x+2+a)e^{-x} 이고 e^{-x}>0 이므로 부호는 이차식이 결정한다. 아래로 볼록한 이차식은 구간 끝에서 최대이므로 두 끝값만 확인하면 된다.
    동치 변환 1개(EQV d2)에 매개변수·경계 함정이 겹쳐 종합 구역 출발 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: "y''=(x^2-4x+2+a)e^{-x}≤0 (-1<x<1) → g(-1)≤0 → a≤-7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le -7$'
  answer_source: "답지(0829 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0830.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (-1,1) 의 양 끝과 x^2 의 계수·지수 부호. 제약: 두 끝값 중 큰 쪽이 바뀌면 지배하는 부등식이 반대쪽으로 넘어가므로 매번 두 값을 모두 확인."
    creative: "(1) 아래로 볼록으로 뒤집기(★3) (2) 구간 안에 변곡점이 있도록으로 바꾸면 부호 변화 조건이라 ★3 (3) 구간을 닫힌 구간·반무한 구간으로 바꾸면 경계 처리가 추가돼 ★3~4."
```

```yaml
- id: RPM-CALC2-0831
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "종합"
  summary: |
    곡선 y=xe^{-2x} 의 변곡점 A 에서의 접선이 x축과 만나는 점을 B 라 할 때 삼각형 OAB 의 넓이. 5지선다.
  category: "y''=0 → 변곡점 → 접선의 x절편 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점에서의 접선과 좌표축이 만드는 도형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이계도함수 → 변곡점 A(1, e^{-2}) → 접선 → x절편 B(2,0) → 넓이의 네 단계가 모두 표준 절차다.
    기출 태그이지만 판단이 갈리는 지점이 없어 통찰 0. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "y''=(4x-4)e^{-2x}=0 → A(1,e^{-2}) → 접선의 x절편 B(2,0) → 넓이 e^{-2}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0831.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=axe^{-bx} 의 a, b. 제약: 변곡점의 x좌표 2/b 와 접선의 x절편이 간단히 떨어지고 넓이가 e 의 거듭제곱 배수가 되도록."
    creative: "(1) 변곡점 대신 극대점에서의 접선으로 바꾸면 접선이 수평이라 도형이 달라지는 함정형(★3) (2) 삼각형 대신 접선과 곡선·축이 둘러싼 넓이(적분 결합 ★4) (3) 변곡점의 좌표만 묻는 기본형(★1~2)."
```

```yaml
- id: RPM-CALC2-0832
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    f(x)=x^2+ax-b ln x 가 x=1 에서 극값을 갖고 변곡점의 x좌표가 1/2 일 때 a+b 의 값. 5지선다.
  category: "f'(1)=0 · f''(1/2)=0 연립 → a+b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값·변곡점 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 각각 f', f'' 에 대입해 연립하는 표준 절차. f''=2+b/x^2 에서 b 가 음수로 나오는 것만 확인하면 된다.
    정의역 x>0 주의가 유일한 함정. 중요 태그이나 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f'(1)=2+a-b=0 · f''(1/2)=2+4b=0 → b=-1/2, a=-5/2 → a+b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0832.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극값의 x좌표·변곡점의 x좌표·ln 항 계수. 제약: 두 조건이 독립이어야 하고 두 x좌표가 모두 정의역 x>0 안에 있어야 함."
    creative: "(1) 조건 하나를 극값의 크기로 바꾸면 값 대입이 한 단계 늘어 ★3 (2) 변곡점을 갖지 않도록으로 바꾸면 부호 조건이라 ★3 (3) a, b 의 부호에 대한 참·거짓 보기형(★3)."
```

```yaml
- id: RPM-CALC2-0833
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=(1/2)ax^2+2sin x+3x 에 대하여 곡선 y=f(x) 가 변곡점을 갖도록 하는 정수 a 의 개수.
  category: "변곡점 존재 → f''=a-2sin x 의 부호 변화 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "변곡점의 존재를 f''=0 의 해 존재가 아니라 f'' 의 부호가 바뀌는 점의 존재로 옮겨 -2<a<2 를 얻음(접하기만 하는 a=±2 배제)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변곡점의 존재 조건과 미정계수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f''=a-2sin x 이므로 a=±2 이면 sin x 곡선에 접하기만 해 부호가 바뀌지 않는다. 이 경계 판단이 핵심이고(EQV d2 · T-경계), 포함하면 5개로 틀린다.
    종합 구역 ★2 출발에서 통찰 1개 d2 + 경계 함정으로 ★3.
  tier: star_3
  mechanism_primary: "f''=a-2sin x → 부호 변화 존재 ⟺ -2<a<2 → 정수 a=-1,0,1 → 3개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0833.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 항의 계수(2→3·4)와 ax^2 항의 계수. 제약: 부호 변화의 경계가 정수와 겹치면 개수가 달라지므로 계수를 정수로 두고 경계 포함 여부를 재확인."
    creative: "(1) 변곡점을 갖지 않도록으로 뒤집기(★3) (2) 구간을 제한해 변곡점이 두 개 이상이 되도록 하면 주기성까지 필요해 ★4 (3) sin 대신 cos·e^x 로 바꾸면 부호 변화 판정 방식이 달라짐(★3)."
```

```yaml
- id: RPM-CALC2-0834
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    연속함수 y=f(x) 의 도함수 y=f'(x) 의 그래프가 주어졌을 때 곡선 y=f(x) 의 변곡점의 개수.
  category: "f' 그래프의 증감 전환 → f'' 의 부호 변화 → 변곡점 개수"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 그래프가 f 가 아니라 f' 임을 이용해 변곡점을 f' 의 증가↔감소 전환점(f'' 의 부호 변화)으로 옮겨 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 그래프에서 변곡점의 개수 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프를 f 로 착각하면 극값 개수를 세게 된다. f' 의 극값 위치가 곧 f 의 변곡점이라는 전환이 전부(RT d2).
    x축에 접하듯 스치기만 하는 곳은 f'' 의 부호가 바뀌지 않아 제외해야 한다. 일반 함수 그래프라 Mₐ 3 → ★3.
  tier: star_3
  mechanism_primary: "f' 그래프에서 증가↔감소가 바뀌는 점 = f'' 의 부호 변화점 → 변곡점 3개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: "crop:fig-0834.png"
  latex: latex-bank/rpm-calc2/items/0834.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 극값 개수와 수평 접점 개수. 제약: 그림의 라벨·교점 위치가 답을 결정하므로 수를 바꾸려면 크롭 그림을 새로 그려야 함."
    creative: "(1) 같은 그래프로 극대·극소의 개수를 묻기(★2) (2) f'' 의 그래프를 주고 f 의 개형을 고르게 하면 전환이 두 번이라 ★4 (3) f' 그래프에 x축 접점을 추가해 부호 변화 없는 점을 늘리면 함정 강화(★3)."
```

```yaml
- id: RPM-CALC2-0835
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    f(x)=ex-ln x 에 대한 보기 ㄱ(f(x)≥2) ㄴ(점근선이 y축) ㄷ(아래로 볼록)의 참·거짓. 5지선다.
  category: "최솟값·극한·이계도함수 부호를 보기별로 확인"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 최솟값·점근선·볼록성 종합 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 f'=e-1/x=0 에서 x=1/e, 최솟값 2. ㄴ 은 x→0+ 에서 발산. ㄷ 은 f''=1/x^2>0.
    세 보기가 독립이고 각각 한 줄로 끝나 분기라기보다 확인 3회라 통찰로 세지 않음. 중요 태그이나 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=e-1/x=0 → x=1/e 에서 최솟값 2 (ㄱ) · x→0+ 발산 (ㄴ) · f''=1/x^2>0 (ㄷ) → 모두 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0835.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ex 의 계수 e 와 ln 항의 계수. 제약: 최솟값이 정수로 떨어지도록 두 계수를 e 와 짝지어야 ㄱ 보기가 성립."
    creative: "(1) 보기 하나를 거짓으로 만들어 답을 바꾸기(★2) (2) 최솟값이 되는 x 만 묻는 단답(★1~2) (3) f(x)≥k 가 항상 성립하는 k 의 최댓값으로 바꾸면 부등식 유형 ★3."
```

```yaml
- id: RPM-CALC2-0836
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    1≤x≤4 에서 f(x)=(3x-4)/(x^2+1) 의 최댓값 M, 최솟값 m 에 대하여 M-m. 5지선다.
  category: "몫의 미분 → 임계점 → 끝점과 값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 유리함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분 → 분자 -(3x+1)(x-3) 인수분해 → 구간 안 임계점 x=3 과 두 끝점 값 비교의 3단.
    최솟값이 임계점이 아니라 끝점 x=1 에서 난다는 점만 주의하면 되는 표준형 → ★2.
  tier: star_2
  mechanism_primary: "f'=-(3x+1)(x-3)/(x^2+1)^2 → x=3 극대 → f(3)·f(1)·f(4) 비교 → M-m=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0836.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3x-4 의 계수와 구간 [1,4]. 제약: 임계점이 구간 안에 들어오고 세 값이 모두 유리수로 떨어지도록."
    creative: "(1) 구간을 임계점 밖으로 옮겨 단조 구간 문제로 낮추기(★1~2) (2) M, m 을 각각 구하게 하는 서술형(★2) (3) 분모를 x^2+a 로 두고 M 이 주어진 값이 되는 a 를 찾는 역문제(★3)."
```

```yaml
- id: RPM-CALC2-0837
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=2x+√(5-x^2) 가 x=α 에서 최댓값, x=β 에서 최솟값을 가질 때 αβ 의 값. 5지선다.
  category: "무리함수 정의역 확인 → 미분 → 임계점과 끝점 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 최대·최소와 정의역 끝점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역이 [-√5, √5] 로 제한되고, f'=0 을 풀 때 제곱하는 과정에서 x>0 조건을 잃으면 x=-2 를 답으로 삼게 된다(T-부호).
    최솟값이 임계점이 아니라 정의역 끝 x=-√5 에서 난다는 것이 둘째 함정(T-범위). 도구는 표준이라 ★2.
  tier: star_2
  mechanism_primary: "정의역 [-√5,√5] → f'=2-x/√(5-x^2)=0 → x=2 최대 · 최소는 끝점 x=-√5 → αβ=-2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0837.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√ 안의 5 와 일차항 계수 2. 제약: 임계점이 정의역 내부에 오도록 계수 비를 맞추고 αβ 가 간단한 무리수로 떨어지게."
    creative: "(1) 최댓값만 묻는 기본형(★2) (2) f(x)=ax+√(5-x^2) 의 최댓값이 주어졌을 때 a 를 찾는 역문제(★3) (3) √ 안을 5-x 로 바꾸면 정의역이 반무한이 되어 끝점 논의가 달라짐(★2~3)."
```

```yaml
- id: RPM-CALC2-0838
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    구간 [-2,2] 에서 f(x)=(x^2-3)/e^x 의 최댓값 M, 최솟값 m 에 대하여 Mm 의 값.
  category: "지수 몫의 미분 → 구간 안 임계점 → 끝점과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 지수함수가 섞인 함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-(x-3)(x+1)e^{-x} 에서 임계점 두 개 중 x=3 은 구간 밖이라 버리고 x=-1 과 두 끝점만 비교하면 된다.
    M 이 끝점 x=-2 에서 난다는 점이 유일한 주의. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=-(x-3)(x+1)e^{-x} → 구간 안 임계점 x=-1 → f(-1)·f(-2)·f(2) 비교 → Mm=-2e^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2e^3$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0838.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x^2-3 의 상수항과 구간. 제약: 임계점 중 하나만 구간에 들어오게 하고 M·m 의 곱이 e 의 거듭제곱 꼴로 떨어지도록."
    creative: "(1) 구간을 넓혀 임계점 두 개가 모두 들어오게 하면 비교가 늘어 ★3 (2) 최댓값이 주어졌을 때 상수항을 찾는 역문제(★3) (3) Mm 대신 M+m 으로 묻는 값만 바꾸기(★2)."
```

```yaml
- id: RPM-CALC2-0839
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    함수 f(x)=a√(2-x^2)e^x 의 최댓값이 e 일 때 양수 a 의 값. 5지선다.
  category: "정의역 확인 → 곱의 미분 → 최댓값 식으로 a 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값이 주어진 함수의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분에서 e^x/√(2-x^2) 를 묶으면 부호는 -(x+2)(x-1) 만 남아 x=1 에서 최대.
    a>0 이라 최댓값의 위치가 a 와 무관하다는 관찰만 있으면 f(1)=ae=e 로 끝난다. 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f' 의 부호는 -(x+2)(x-1) → x=1 최대 → f(1)=ae=e → a=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0839.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√ 안의 2 와 지수의 계수. 제약: 임계점이 정의역 내부에 있고 최댓값이 e 의 거듭제곱으로 떨어지도록 두 수를 맞춤."
    creative: "(1) 최솟값 조건으로 바꾸면 답이 정의역 끝에서 나와 경계 함정 ★3 (2) a 의 부호 제한을 풀면 최대·최소가 뒤집혀 경우 분리 ★3 (3) 최댓값이 되는 x 를 묻는 기본형(★2)."
```

```yaml
- id: RPM-CALC2-0840
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=x(2-ln x)+k 의 최댓값이 e+2 일 때 f(1) 의 값. 5지선다.
  category: "미분 → 최댓값 식으로 상수 k 결정 → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값 조건으로 상수를 정한 뒤 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=1-ln x 이므로 k 는 평행이동 상수라 최대 위치 x=e 에 영향을 주지 않는다.
    f(e)=e+k=e+2 에서 k=2, f(1)=4. 정의역 x>0 확인 외에 판단 지점 없음 → ★2.
  tier: star_2
  mechanism_primary: "f'=1-ln x=0 → x=e 최대 → f(e)=e+k=e+2 → k=2 → f(1)=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0840.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수 2 와 주어진 최댓값. 제약: 최대가 x=e^{c-1} 에서 나므로 상수를 정수로 두면 최댓값이 e 의 배수로 정리됨."
    creative: "(1) f(1) 대신 k 를 묻기(★1~2) (2) 최솟값이 존재하지 않음을 설명하게 하는 서술형(★3) (3) x(2-ln x) 를 x^2(2-ln x) 로 바꾸면 임계점이 √e 꼴이 되어 계산이 늘어남(★2~3)."
```

```yaml
- id: RPM-CALC2-0841
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    구간 [0,π] 에서 f(x)=(1+cos x)sin x 의 최댓값. 5지선다.
  category: "삼각함수 곱의 미분 → cos x 이차식 인수분해 → 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 곱의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=cos x+cos^2 x-sin^2 x 를 sin^2=1-cos^2 로 정리하면 (2cos x-1)(cos x+1) 로 인수분해된다.
    0827 과 완전히 같은 f' 이 나오는 문항. 구간 안 해가 x=π/3 하나뿐이라 비교도 간단 → ★2.
  tier: star_2
  mechanism_primary: "f'=(2cos x-1)(cos x+1)=0 → cos x=1/2 (x=π/3) → 최댓값 3√3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0841.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1+cos x) 의 상수 1 을 2·3 으로, 구간을 [0,2π] 로. 제약: cos x 에 대한 이차식이 구간 안에서 유효근 하나만 갖도록 상수를 고름."
    creative: "(1) 최솟값이나 M-m 을 묻기(★2) (2) (a+cos x)sin x 의 최댓값이 주어졌을 때 a 를 찾는 역문제(★3) (3) 구간을 [0,2π] 로 넓히면 부호 경우가 늘어 ★3."
```

```yaml
- id: RPM-CALC2-0842
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    -π/2≤x≤π/2 에서 f(x)=a(x+sin 2x) 의 최댓값이 4π+6√3 일 때 양수 a 의 값.
  category: "미분 → 극대 후보와 끝값 비교 → 계수 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값 조건으로 삼각함수 식의 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>0 이라 최댓값의 위치가 a 와 무관하고, f'=a(1+2cos2x)=0 에서 x=π/3 이 극대.
    극댓값 f(π/3) 과 끝값 f(π/2) 를 비교하는 것이 유일한 주의점이고 그 뒤는 계수 역산 한 줄 → ★2.
  tier: star_2
  mechanism_primary: "f'=a(1+2cos2x)=0 → x=π/3 극대 → a(π/3+√3/2)=4π+6√3 → a=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0842.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin2x 의 계수와 구간, 주어진 최댓값. 제약: cos2x 가 특수각 값이 되도록 계수를 두고, 최댓값이 π 항과 √3 항의 합으로 떨어지게 맞춤."
    creative: "(1) a 의 부호 제한을 풀면 최대·최소가 뒤집혀 경우 분리 ★3 (2) 최댓값 대신 최댓값-최솟값을 주면 f 가 기함수라는 대칭을 쓰는 ★3 (3) 구간을 [0,π] 로 바꾸면 끝값 비교가 실제로 갈려 ★3."
```

```yaml
- id: RPM-CALC2-0843
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=sin^3 x+2cos^2 x+1 의 최댓값 M, 최솟값 m 에 대하여 M+m 의 값.
  category: "cos^2=1-sin^2 로 통일 → t=sin x 치환(범위 제한) → 삼차함수 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos^2 x=1-sin^2 x 로 한 변수화하고 치환 변수의 범위를 -1≤t≤1 로 제한"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환으로 삼차함수가 되는 삼각함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(t)=t^3-2t^2+3 의 임계점은 t=0 과 t=4/3 인데 t=4/3 은 치환 범위 밖이다. 범위를 제한하지 않으면 여기서 틀린다(T-범위).
    통일·치환 자체는 표준이라 depth 1 로 두고 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "g(t)=t^3-2t^2+3 (-1≤t≤1) → g'=t(3t-4) → t=0 에서 최대 3·t=-1 에서 최소 0 → M+m=3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0843.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin^3 의 계수·cos^2 의 계수·상수항. 제약: 치환 후 삼차함수의 임계점이 [-1,1] 안팎 어디에 놓이는지에 따라 답이 달라지므로 매번 재확인."
    creative: "(1) x 의 구간을 제한해 t 의 범위를 좁히면 끝점 논의가 바뀜(★2~3) (2) sin^3 을 sin^4 로 바꾸면 짝수 차수라 대칭 논의(★3) (3) M+m 대신 M, m 이 되는 x 를 모두 구하게 하는 서술형(★3)."
```

```yaml
- id: RPM-CALC2-0844
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    방정식 x^2-5x+2ln x=t 의 서로 다른 실근의 개수가 2 가 되도록 하는 모든 실수 t 의 값의 합. 5지선다.
  category: "곡선 y=g(x) 와 수평선 y=t 의 교점 → 개형 판정 → 경계 t"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식의 실근 개수를 곡선 y=g(x) 와 수평선 y=t 의 교점 개수로 옮김"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x→0+ 발산·극대·극소·증가로 이어지는 개형에서 교점이 정확히 2개가 되는 t 는 극댓값과 극솟값 두 경계뿐임을 판정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "방정식의 실근 개수와 극값(그래프 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g'=(2x-1)(x-2)/x 로 극대 x=1/2, 극소 x=2. 개형을 그리면 근이 3개인 구간과 1개인 구간 사이 경계 두 값에서만 근이 2개다.
    두 극값을 더할 때 로그항이 상쇄되는 구조. 기출·통찰 2개 → 종합 구역 ★2 출발에서 ★3.
  tier: star_3
  mechanism_primary: "g'=(2x-1)(x-2)/x → 극대 x=1/2·극소 x=2 → 근 2개인 t=두 극값 → 합 -33/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0844.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -5 와 ln 항 계수 2. 제약: g'=0 이 x>0 에서 두 근을 갖고, 두 극값의 로그항이 상쇄돼 합이 유리수가 되도록 계수를 맞춤."
    creative: "(1) 근이 1개·3개가 되는 t 의 범위로 바꾸기(★3) (2) 수평선 대신 직선 y=ax 와의 교점으로 바꾸면 접선 조건이 추가돼 ★4 (3) 정의역을 x>1 로 제한하면 개형이 바뀌어 경계 판정이 달라짐(★3~4)."
```

```yaml
- id: RPM-CALC2-0845
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    방정식 ae^{2x}-e^x+1=0 이 한 개의 실근을 갖도록 하는 양수 a 의 값.
  category: "t=e^x>0 치환 → 양의 근 개수 대응 → 중근 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 방정식의 실근을 t=e^x 의 양의 실근과 일대일 대응시키고, 근의 합·곱이 모두 양수라 실근이 하나가 되려면 중근뿐임을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수방정식의 실근 개수와 치환(양수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    at^2-t+1=0 에서 두 근의 합 1/a, 곱 1/a 가 모두 양수이므로 서로 다른 두 근이면 둘 다 양수 → 실근이 2개가 된다.
    따라서 실근 하나 = 중근이고 판별식 1-4a=0. 치환 범위를 빼면 판별식만 보고 끝내기 쉬운 지점(EQV d2) → ★3.
  tier: star_3
  mechanism_primary: "t=e^x>0 → at^2-t+1=0 → 합·곱 모두 양수 → 근 하나 ⟺ 중근 → 1-4a=0 → a=1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0845.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항의 계수. 제약: 합·곱의 부호가 바뀌면 '한 근만 양수'인 경우가 살아나 답이 값 하나가 아니라 범위가 됨."
    creative: "(1) 상수항의 부호를 바꿔 한 근만 양수인 경우를 만들면 경우 분리로 ★4 (2) 실근을 갖지 않을 조건으로 뒤집기(★3) (3) a 를 음수까지 허용하면 경우가 늘어 ★4."
```

```yaml
- id: RPM-CALC2-0846
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    x>0 일 때 부등식 e^x-x^2/2-x+k≥0 이 성립하도록 하는 실수 k 의 최솟값. 5지선다.
  category: "좌변을 g 로 두고 이계도함수로 g' 의 부호 결정 → 하한"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식의 항상 성립을 g 의 하한 조건으로 옮기고, g' 의 부호가 바로 안 보이므로 한 번 더 미분해 g''>0·g'(0)=0 으로 g 가 증가임을 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(이계도함수 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g'=e^x-x-1 의 부호가 한눈에 안 보여 g''=e^x-1>0 으로 내려가는 단계가 골조(EQV d2).
    열린 구간이라 최솟값이 아니라 x→0+ 의 값 1+k 가 하한이라는 경계 처리가 함정. 종합 구역 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: "g'=e^x-x-1, g''=e^x-1>0 → g' 증가·g'(0)=0 → g 증가 → 하한 g(0+)=1+k≥0 → k 최솟값 -1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0846.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2/2·x 항의 계수. 제약: g'(0)=0 이 되도록 계수를 맞춰야 이계도함수 한 번으로 부호가 결정되고, 아니면 단계가 더 늘어남."
    creative: "(1) 구간을 x≥0 닫힌 구간으로 바꾸면 등호가 실제로 성립해 경계 논의가 달라짐(★3) (2) 부등호를 뒤집어 k 의 최댓값을 묻기(★3) (3) 좌변에 x^3 항을 넣어 3계 미분까지 내려가게 하면 ★4."
```

```yaml
- id: RPM-CALC2-0847
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    x>0 일 때 부등식 a ln x<√x 가 성립하도록 하는 양수 a 의 값의 범위.
  category: "ln x 부호로 구간 분할 → 변수분리 → 최솟값과 등호 배제"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ln x 의 부호로 0<x≤1 은 자동 성립임을 걷어내고 x>1 에서만 a<√x/ln x 로 변수분리"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최솟값에서 등호가 실제로 성립하므로 경계 a=e/2 를 범위에서 배제"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(변수분리·최솟값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수분리 전에 ln x 의 부호로 구간을 나눠 자동 성립 구간을 떼어 내는 것이 첫 고비다(x>1 에서만 유효한 부등식).
    h(x)=√x/ln x 의 최솟값 e/2 에서 등호가 성립하므로 엄격부등식이 되는 것이 둘째. 도구 자체는 표준 → ★3.
  tier: star_3
  mechanism_primary: "x>1 에서 a<√x/ln x → h'=(ln x-2)/(2√x ln^2 x)=0 → x=e^2 에서 최소 e/2 → 0<a<e/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<a<\dfrac{e}{2}$'
  answer_source: "답지(0846 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0847.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√x 를 x^{1/3}·x 로, ln x 의 계수를 조정. 제약: h'=0 이 x=e^{1/p} 꼴로 떨어지도록 지수를 고르고 최솟값이 e 의 간단한 유리식이 되게."
    creative: "(1) 부등호를 ≤ 로 바꾸면 경계 포함 여부가 뒤집힘(★3) (2) a 의 부호 제한을 풀면 음수 a 에 대한 경우가 추가돼 ★4 (3) √x 대신 kx 로 두고 k 의 범위를 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0848
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    수직선 위를 움직이는 점 P 의 위치가 x=t-cos t 일 때 속도가 처음으로 0 이 되는 시각.
  category: "위치 미분 → 속도 0 → 최소 양수 해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동의 속도와 시각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    미분 한 번으로 v=1+sin t 를 얻고 sin t=-1 의 최소 양수 해를 고르면 끝난다.
    '처음으로' 라는 조건만 읽으면 되고 통찰 없음·M_total 4 → 종합 구역 ★2 출발에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "v=1+sin t=0 → sin t=-1 → 처음 t=3π/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{2}\pi$'
  answer_source: "답지(0846 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0848.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos t 의 계수·부호와 상수항. 제약: v=0 이 해를 가지려면 |상수|≤|계수| 여야 하고, 처음 시각이 특수각이 되도록 계수를 맞춤."
    creative: "(1) 가속도가 0 이 되는 시각(★1~2) (2) 속도가 최대가 되는 시각으로 바꾸면 한 단계 추가(★2) (3) t 의 범위를 주고 v=0 이 되는 시각의 개수를 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0849
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "종합"
  summary: |
    좌표평면 위의 점 P 의 위치가 x=t ln t, y=4t/ln t (t>2) 일 때 t=e^2 에서의 속력. 5지선다.
  category: "성분별 미분 → 시각 대입 → 속력"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 속력"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분과 몫의 미분을 한 번씩 한 뒤 t=e^2 을 대입하면 속도 성분이 (3,1) 로 떨어진다.
    기출이지만 판단 지점이 없어 통찰 0. M_total 5 로 -1 후보이나 몫미분 계산 부담이 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "dx/dt=ln t+1, dy/dt=4(ln t-1)/ln^2 t → t=e^2 에서 (3,1) → 속력 √10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(0846 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0849.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4t/ln t 의 계수와 대입 시각 t=e^k. 제약: ln t 가 정수가 되는 시각을 골라야 성분이 정수로 떨어지고 속력이 간단한 무리수가 됨."
    creative: "(1) 가속도의 크기로 바꾸면 미분이 한 번 더 들어감(★3) (2) 속력이 최소가 되는 시각을 묻기(★4) (3) x, y 를 삼각함수로 바꿔 속력이 상수가 되는 구조를 관찰시키기(★3)."
```

```yaml
- id: RPM-CALC2-0850
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    x=20t cosθ, y=20t sinθ-5t^2 로 움직이는 공이 1초 후 최고 높이에 도달할 때, 공이 지면에 떨어지는 순간의 속력.
  category: "최고점 조건으로 θ → y=0 으로 낙하 시각 → 속도 성분 → 속력"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 운동의 속도와 속력(조건으로 각 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 세 단계로 이어진다. 최고점에서 dy/dt=0 → θ=π/6, y=0 에서 낙하 시각 t=2, 그 시각의 속도 성분으로 속력.
    각 단계는 표준이지만 매개변수 θ 를 끝까지 끌고 가고 단계가 많아 종합 구역에서 ★3.
  tier: star_3
  mechanism_primary: "dy/dt=20sinθ-10t, t=1 에서 0 → θ=π/6 → y=0 에서 t=2 → 속도 (10√3,-10) → 속력 20"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$20$"
  answer_source: "답지(0846 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0850.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 속력 20·중력항 계수 5·최고점 시각 1. 제약: sinθ 가 특수각 값이 되도록 최고점 시각과 두 계수를 함께 맞춰야 함."
    creative: "(1) 최고 높이나 수평 도달거리를 묻기(★2~3) (2) 도달거리가 최대가 되는 θ 를 묻는 최대·최소 결합(★4) (3) 속력 대신 낙하 순간의 속도가 지면과 이루는 각을 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0851
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    x=e^t cosπt, y=e^t sinπt 로 움직이는 점 P 의 속력이 √(π^2+1)e 일 때의 가속도가 (a,b) 일 때 a+b 의 값.
  category: "속도 성분 → 속력 식 정리로 시각 결정 → 이계도함수 대입"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 속력·가속도(지수×삼각함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    속도 성분을 제곱해 더하면 삼각항이 모두 상쇄돼 속력이 e^t√(π^2+1) 로 떨어지고, 이것이 시각 t=1 을 주는 열쇠다.
    그 뒤 곱의 미분을 두 번 더 해야 해 계산 부담이 크다(Mₖ 3). 통찰보다 계산 골조 → 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "속력=e^t√(π^2+1) → t=1 → 가속도 성분 e^t{(1-π^2)cosπt-2π sinπt}, e^t{(1-π^2)sinπt+2π cosπt} 에 t=1 대입 → a+b=e(π^2-2π-1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$e(\pi^2-2\pi-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0851.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각속도 π 와 지수 e^t 의 계수. 제약: 두 성분이 같은 지수·같은 각속도를 공유해야 속력이 e^{kt}√(k^2+ω^2) 꼴로 상쇄됨."
    creative: "(1) 속력이 최소가 되는 시각을 묻기(★3) (2) 가속도의 크기를 묻기(★3) (3) 점 P 가 그리는 곡선(로그나선)의 성질과 속도·위치 벡터가 이루는 각이 일정함을 설명하게 하는 서술형(★4)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0852
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    직선 y=ax+π 가 곡선 y=x-2cos x (0≤x≤π) 의 변곡점을 지날 때 상수 a 의 값.
  category: "y''=0 → 변곡점 좌표 → 직선에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점을 지나는 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y''=2cos x=0 에서 구간 안의 x=π/2 하나, 변곡점 (π/2, π/2) 를 직선에 대입하면 끝난다.
    서술형 구역이라 ★3 출발이지만 통찰 없음·M_total 5 → -1 하여 ★2(1단 차이라 이슈로 올리지 않음).
  tier: star_2
  mechanism_primary: "y''=2cos x=0 → x=π/2 → 변곡점 (π/2,π/2) → π/2=aπ/2+π → a=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0852.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 항의 계수 2 와 직선의 y절편 π. 제약: 변곡점의 x 가 구간 안 특수각이고 대입 결과 a 가 정수·간단한 분수로 떨어지도록."
    creative: "(1) 변곡점에서의 접선의 방정식을 묻기(★2) (2) 구간을 [0,2π] 로 넓히면 변곡점이 둘이라 경우 분리(★3) (3) 직선이 변곡점과 극점을 모두 지나게 하면 조건이 둘이라 ★3~4."
```

```yaml
- id: RPM-CALC2-0853
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=x^2/4-(1/2)ln kx 의 최솟값이 -3/4 일 때 양수 k 의 값.
  category: "미분 → 최소가 되는 x → 최솟값 식으로 k 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최솟값 조건으로 로그 안의 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln kx=ln k+ln x 이므로 미분하면 k 가 사라지고 최소점은 x=1 로 고정된다. k 는 최솟값 식에만 남는다.
    서술형 구역이지만 두 단계뿐이고 통찰 없음 → ★3 에서 한 단 낮춘 ★2.
  tier: star_2
  mechanism_primary: "f'=(x^2-1)/(2x)=0 → x=1 에서 최소 → f(1)=1/4-(1/2)ln k=-3/4 → k=e^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0853.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 항과 ln 항의 계수, 주어진 최솟값. 제약: 최소점의 x 가 유리수가 되도록 두 계수의 비를 맞추고 ln k 가 정수가 되게 최솟값을 고름."
    creative: "(1) 최솟값이 존재할 조건(계수의 부호)을 묻기(★3) (2) ln kx 를 ln(x+k) 로 바꾸면 최소점이 k 에 의존해 ★3~4 (3) 그래프가 x축에 접할 조건으로 바꾸기(★3)."
```

```yaml
- id: RPM-CALC2-0854
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    두 방정식 e^x=kx, ln x=kx 가 모두 실근을 갖지 않도록 하는 k 의 범위가 α<k<β 일 때 αβ 의 값.
  category: "각 방정식을 직선 y=kx 와의 교점으로 → 접선 기울기 경계 → 공통 범위"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 초월방정식의 실근을 곡선과 원점을 지나는 직선 y=kx 의 교점으로 옮기고, 접할 때의 기울기를 경계로 잡음"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=e^x 와 y=ln x 가 y=x 에 대한 대칭(역함수)이라 두 경계 기울기 e 와 1/e 가 서로 역수임을 이용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "지수·로그 방정식의 실근 존재 조건(접선 기울기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    y=kx 가 y=e^x 에 접할 때 k=e, y=ln x 에 접할 때 k=1/e 라는 두 경계를 각각 구한 뒤, k≤0 이면 교점이 생김을 확인해 공통 범위를 잡는다.
    두 곡선이 역함수 관계라 경계 기울기가 서로 역수이므로 곱이 1 임이 보인다. 서술형 ★3 출발 + 통찰 2개 → ★4.
  tier: star_4
  mechanism_primary: "e^x=kx 무근 ⟺ 0≤k<e · ln x=kx 무근 ⟺ k>1/e → 1/e<k<e → αβ=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0854.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 e 를 a 로 바꾸면 경계가 e ln a 와 그 역수로 일반화된다. 제약: 두 곡선이 서로 역함수 관계를 유지해야 대칭 논증과 곱=1 구조가 살아남음."
    creative: "(1) 한 방정식만 주고 실근 개수별 k 의 범위를 묻기(★3) (2) 직선을 y=kx+1 로 바꾸면 대칭이 깨져 접선 조건을 각각 계산해야 해 ★4 (3) 실근을 정확히 하나 갖도록으로 바꾸면 경계 포함 논의가 추가돼 ★4."
```

```yaml
- id: RPM-CALC2-0855
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=x^2-x+3, g(x)=ke^{-x} 에 대하여 x>0 에서 f(x)≥g(x) 가 성립하도록 하는 실수 k 의 최댓값.
  category: "변수분리 k≤(x^2-x+3)e^x → 단조 증가 판정 → 하한"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "e^{-x}>0 을 이용해 k≤(x^2-x+3)e^x 로 분리하고, 우변의 도함수가 판별식 음인 이차식×e^x 라 항상 증가임을 보여 하한을 x→0+ 값으로 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 함수의 대소 조건과 미정계수의 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h(x)=(x^2-x+3)e^x 의 도함수는 (x^2+x+2)e^x 이고 판별식이 음이라 부호가 항상 양 — 임계점을 찾을 필요가 없다는 점이 골조.
    열린 구간이라 h(0)=3 은 최솟값이 아니라 하한이지만 k=3 에서 부등식이 성립함을 확인해야 한다. 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "k≤h(x)=(x^2-x+3)e^x → h'=(x^2+x+2)e^x>0 → h 증가 → x>0 의 하한 h(0)=3 → k 최댓값 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0855.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 x^2-x+3 의 세 계수. 제약: h'=(x^2+x+상수)e^x 의 판별식이 음이어야 단조 증가 논증이 유지되고, 아니면 임계점이 생겨 골조가 바뀜."
    creative: "(1) 구간을 x≥0 으로 바꾸면 k=3 에서 등호가 실제로 성립(★3) (2) f 를 삼차식으로 바꾸면 h' 의 부호 판정이 어려워져 ★4 (3) 부등호를 뒤집어 k 의 최솟값을 묻기(★3)."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0856
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "심화"
  summary: |
    구간 (0,1) 의 서로 다른 두 실수 a, b 에 대하여 f((a+b)/2)>(f(a)+f(b))/2 를 만족시키는 함수를 보기 ㄱ(sin x) ㄴ(x ln x) ㄷ(xe^{-x}) 에서 모두 고르기.
  category: "중점 부등식 → 위로 볼록의 정의 → f''<0 판정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중점에서의 함숫값이 함숫값의 평균보다 크다는 조건을 구간 (0,1) 에서 위로 볼록(f''<0)으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "볼록성의 부등식 표현과 이계도함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    현의 중점보다 곡선이 위에 있다는 기하적 의미를 볼록성으로 옮기는 동치 변환 하나가 관문이고(EQV d2), 그 뒤는 보기 세 개의 f'' 부호 확인뿐이다.
    ㄱ 은 -sin x<0, ㄴ 은 1/x>0, ㄷ 은 (x-2)e^{-x}<0 으로 각각 한 줄. 실력 Up ★4 출발이지만 변환 하나로 끝나 ★3.
  tier: star_3
  mechanism_primary: "조건 ⟺ (0,1) 에서 f''<0 → ㄱ -sin x<0 성립 · ㄴ 1/x>0 불성립 · ㄷ (x-2)e^{-x}<0 성립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0856.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 함수와 구간 (0,1). 제약: sin x·xe^{-x} 처럼 구간에 따라 볼록성이 바뀌는 함수는 구간을 옮기면 답이 달라지므로 구간과 함께 검토."
    creative: "(1) 부등호를 뒤집어 아래로 볼록인 것을 고르게 하기(★3) (2) 구간을 (1,2)·(0,π) 로 바꿔 같은 보기로 답이 달라지는 함정형(★4) (3) 조건을 가중평균 f((a+2b)/3) 꼴로 바꾸면 일반 볼록 부등식이 필요해 ★4."
```

```yaml
- id: RPM-CALC2-0857
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "심화"
  summary: |
    이차함수 f 에 대하여 g(x)={f(x)+2}e^{f(x)} 가 ㈎ f(a)=6 인 a 에서 최댓값, ㈏ x=b, x=b+6 에서 최솟값을 가질 때, f(x)=0 의 두 실근 α, β 에 대하여 (α-β)^2 의 값.
  category: "g=h(f) 합성 → h 의 증감으로 f 의 값 조건 환원 → f 역추적"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 를 u=f(x) 에 대한 h(u)=(u+2)e^u 의 합성으로 보고 h'=(u+3)e^u 의 증감으로 g 의 최대·최소를 f 의 값(6 과 -3)에 대한 조건으로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최소가 되는 두 점의 간격 6 과 최댓값 조건에서 f 가 위로 볼록하고 최댓값 6, f=-3 인 두 점의 간격이 6 임을 역추적해 f(x)=-(x-m)^2+6 을 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "합성 형태 함수의 최대·최소 조건에서 원 함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g 를 f 의 값만의 함수 h(u)=(u+2)e^u 로 보는 합성 관점이 1차 관문이고(h 는 u=-3 에서 최소, 그 오른쪽에서 증가),
    최소점 두 개의 간격 6 에서 이차함수의 폭(이차항 계수)을 역산하는 역방향 추론이 2차 관문이다. 실력 Up·평가원 기출 → ★4. 통찰 3개 조건 미달로 ★5 는 아님.
  tier: star_4
  mechanism_primary: "h(u)=(u+2)e^u 는 u=-3 에서 최소 → f(b)=f(b+6)=-3 · f 의 최댓값 6 → f(x)=-(x-m)^2+6 → (α-β)^2=24"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$24$"
  answer_source: "답지(0856 답 크롭 연속줄 · 쪽 렌더 확인)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0857.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(a)=6 의 6, 두 최소점의 간격 6, h 안의 상수 2. 제약: h 의 최소는 u=-(상수+1) 에서 나므로 그 값과 f 의 최댓값의 차이가 제곱수로 떨어져야 (α-β)^2 이 정수."
    creative: "(1) 간격 대신 최솟값을 주고 f 의 최댓값을 묻기(★4) (2) f 를 삼차함수로 바꾸면 최대·최소 구조가 갈라져 경우 분리가 필요해 ★5 후보 (3) e^{f(x)} 를 ln 꼴로 바꾸면 정의역 조건이 추가돼 ★4~5."
```

```yaml
- id: RPM-CALC2-0858
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "심화"
  summary: |
    가로 24, 세로 8 인 직사각형 종이에서 꼭짓점 B 가 변 AD 위의 점 P 에 오도록 QR 을 접는 선으로 접을 때, 선분 QR 이 최소가 되는 순간의 선분 PQ 의 길이.
  category: "접힘의 대응 길이 → 한 변수로 QR^2 → 미분 최소"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접힘에서 생기는 대응 관계(QB=QP, RB=RP)를 직각삼각형의 피타고라스 식으로 옮겨 QR^2 을 변수 하나의 함수로 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접어서 만든 도형에서 길이의 최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접은 종이의 대응 길이를 잡아 변수 하나(AP)로 줄이는 것이 골조 전부다(RT d2). 각 B 가 직각이라 QR^2=QB^2+BR^2 로 쓸 수 있는 것이 연결 고리.
    길이 자체가 아니라 제곱을 미분하는 정리와 유리식 미분이 필요해 계산 부담이 크다(Mₖ 3). 실력 Up → ★4 유지.
  tier: star_4
  mechanism_primary: "AP=p, QB=QP=(64+p^2)/16, BR=RP=(64+p^2)/(2p) → QR^2=QB^2+BR^2 → 미분 최소에서 p^2=32 → PQ=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: "crop:fig-0858.png"
  latex: latex-bank/rpm-calc2/items/0858.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직사각형의 가로·세로. 제약: 세로가 너무 작으면 접었을 때 P 가 변 AD 위에 놓이지 못하므로 접힘이 성립하는 범위 안에서만 바꾸고, 그림 라벨(A·B·P·Q·R)은 고정."
    creative: "(1) QR 의 최솟값 자체를 묻기(★4) (2) 접혀서 겹치는 삼각형의 넓이의 최소로 바꾸면 식이 달라짐(★4) (3) 접는 선을 대각선으로 고정하고 PQ 를 구하게 하면 미분이 빠져 ★2~3."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 1 · ★2 18 · ★3 12 · ★4 3 · ★5 0
- insight_type 기준 통찰형 13 · 절차형 21 · premium 0 (insights 배열이 비지 않은 블록은 15개 — 0827·0843 은 depth 1 뿐이라 절차형으로 라벨)
- 통찰 유형 분포: I-EQV 7 · I-RT 6 · I-MI 2 · I-SYM 1 · I-BW 1 (총 17개 라벨 · depth 3 없음)
- type_hint 상위: 「최대·최소의 활용(도형·접선)」 5 · 「닫힌구간·정의역 제한에서의 최대·최소」 6 · 「변곡점·볼록성 조건」 5 · 「최댓값·최솟값 조건으로 미정계수 결정」 4 · 「방정식의 실근 개수·부등식의 항상 성립」 4 · 「직선·평면 운동의 속도·가속도」 4
- 구역별 ★ 평균: 유형 19 2.2 · 시험에 꼭 나오는 문제 2.5 · 서술형 주관식 2.75 · 실력 Up 3.67
- 그림: 6문(0825 · 0826 · 0827 · 0829 · 0834 · 0858 의 crop — 0828 은 그림 없음)
- 답 확인 필요로 표시한 문항 없음(골조를 잡는 과정에서 전사본 answer 와 모순되는 조건은 발견되지 않음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서는 벤더 신호와 2단 이상 어긋난 문항이 없었다. 1단 차이는 0852·0853(서술형 ★3 출발 → 골조가 두 단계뿐이라 ★2), 0856(실력 Up ★4 출발 → 동치 변환 하나로 끝나 ★3), 0848(종합 구역 ★2 출발 → M_total 4 로 ★1)이며 모두 rationale 에 근거를 적었다. | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「도형의 최대·최소(각을 변수로)」와 「곡선 위의 점·접선으로 만든 도형의 최대·최소」는 변수 설정 방식이 달라 분리 — 전자는 삼각함수 미분, 후자는 지수·유리함수 미분이 base. (2) 「변곡점의 존재 조건」(0833)은 「변곡점의 좌표 구하기」(0831·0852)와 base ★ 가 한 단 다르므로 별도 유형. (3) 「부등식의 항상 성립(변수분리)」(0847·0855)과 「부등식의 항상 성립(이계도함수로 단조 판정)」(0846)은 골조가 달라 분리.
- **통합해도 될 유형**: 「닫힌구간에서 유리·무리·지수·삼각 함수의 최대·최소」(0836~0841)는 함수 종류만 다를 뿐 골조(미분 → 임계점 → 끝점 비교)가 같아 하나의 base ★2 유형으로 묶고 Mₖ 로 변별하는 편이 낫다. 「평면 운동의 속력·가속도」(0849·0850·0851)도 하나로 묶되 0851 처럼 속력 식이 상쇄되는 구조는 하위 변형으로 둔다.
- **반복된 type_hint**: 「최댓값(최솟값)이 주어졌을 때 미정계수 결정」이 0839·0840·0842·0853 에서 네 번 반복됐다. 이 유형은 base ★2 로 두고, 최댓값의 위치가 계수에 의존하는 변형만 ★3 으로 올리는 규칙이 필요하다.
