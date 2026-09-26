---
name: mechanism-데이터-RPM-CALC2-06-p4
description: RPM 미적분Ⅱ 06 도함수의 활용 (1)(4/4 · 유형 UP 19~20 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 06 도함수의 활용 (1)
  unit_code: CALC2-06
  part: "4/4"
  extract_range: "99~103쪽 · 0694~0729"
  total_problems: 36
  unit_total: 137
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 06 도함수의 활용 (1) (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 06 도함수의 활용 (1) 단원의 마지막 범위(99~103쪽 · 0694~0729 · 36문항)를 다룬다. 구역은 「유형 UP 19 극값을 가질 조건; 판별식을 이용하는 경우」(3문) → 「유형 UP 20 극값을 가질 조건; 판별식을 이용하지 않는 경우」(3문) → 「시험에 꼭 나오는 문제」(23문) → 「서술형 주관식」(4문) → 「실력 Up」(3문) 순이다. 유형 UP 두 구역은 대표문제 1 · 중 1 · 상중 4로 구성되고, 나머지 세 구역에는 난이도 표시가 없다. 태그는 대표문제 2(0694·0697) · 중요 4(0703·0709·0721·0726) · 서술형 1(0698) · 평가원 기출 3(0704·0718·0727)이며 그림 문항은 없다.

RPM 은 구역이 곧 난이도 층이므로 출발점을 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 주관식 ★3 · 실력 Up ★4 로 두고 M_total·통찰로 ±1 조정했다. 이 범위의 골조는 두 갈래다. 앞의 두 구역과 서술형 일부는 「미분 → f'의 분자를 이차·삼차식으로 정리 → 극값 조건을 그 식의 근 조건으로 옮김 → 판별식·근의 분리·치역」이고, 「시험에 꼭 나오는 문제」는 단원 전체(접선·매개변수·음함수·역함수·증감·극대극소)를 한 문항씩 훑는 종합 배열이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

판정 메모: `depth_score` 는 effective_depth 의 합. `insight_type` 은 depth 합이 2 이상일 때만 통찰형이고 단일 d1 통찰은 절차형으로 둔다(견본·06-p3 준거). −1 조정은 통찰 없이 M_total 4 이거나 M_total 5 에서 단계·함정이 모두 최소일 때만 적용했다. 「극값 조건 → f' 분자의 근 조건」 동치 변환은 이 범위에서 12회 반복되는 주 통찰이라 d1(판별식만으로 끝남)과 d2(정의역·치역 제한이 더 붙음)로 나눠 라벨링했다. 극값 위치를 주고 미정계수를 연립하는 문항(0719·0725)은 스키마대로 표준 절차(I-BW 불인정)로 두었다. 실력 Up 0727 은 통찰 3개·depth 3 이지만 §2.13 저노출 유형(SC/VF/SYM/XU)이 없어 ★5 로 올리지 않았다.

## 문항 데이터

### 유형 UP 19 극값을 가질 조건; 판별식을 이용하는 경우

```yaml
- id: RPM-CALC2-0694
  page: 99
  vendor_label: "유형 UP 19 극값을 가질 조건; 판별식을 이용하는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=ln(x^2+x+2)+ax 가 극댓값과 극솟값을 모두 갖도록 하는 실수 a 의 범위(a≠0).
  category: '극값 조건 → f'' 분자 이차식의 판별식 → a 범위'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '극대·극소를 모두 가진다 ⟺ 분모 x^2+x+2 가 항상 양수이므로 f'' 분자 ax^2+(a+2)x+(2a+1) 이 서로 다른 두 실근'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극값을 가질 조건(도함수 분자 이차식의 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그 미분 뒤 분수식 하나로 묶고, 분모가 항상 양수임을 확인해 분자 이차식의 D>0 으로 환원한다. -7a^2+4>0 에서 |a|<2√7/7 이고 a≠0 을 빼면 끝. 동치 변환 1개(EQV d1)·M_total 7 → 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '몫으로 정리한 f'' → 분모>0 확인 → 분자 이차식 D>0 → a 범위에서 a≠0 제외'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{2\sqrt{7}}{7}<a<0$ 또는 $0<a<\dfrac{2\sqrt{7}}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0694.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 안의 이차식 x^2+x+2 의 계수(x^2+2x+3, x^2+4 등)를 바꿀 수 있음. 제약: 로그의 진수가 모든 실수에서 양수여야 하므로 그 이차식의 판별식이 음수여야 하고, 최종 a 부등식이 정리되는 값이어야 함. a≠0 단서는 삼차항이 사라지는 퇴화를 막으므로 유지.'
    creative: '(1) 극값을 아예 갖지 않을 조건(D≤0)으로 뒤집기(★3 유지) (2) ln 을 e^{ax} 곱 꼴로 바꿔 분자가 이차식이 되게 하기(골조 동일 ★3) (3) 로그 진수를 x^2-1 처럼 정의역이 제한되는 식으로 바꾸면 근의 위치 조건이 추가돼 ★4.'
```

```yaml
- id: RPM-CALC2-0695
  page: 99
  vendor_label: "유형 UP 19 극값을 가질 조건; 판별식을 이용하는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=e^{-x}(x^2+6x+a) 가 극값을 갖도록 하는 자연수 a 의 최댓값. 5지선다.
  category: '극값 조건 → 지수 인자 제거 → 이차식 판별식 → 자연수 최댓값'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'e^{-x}>0 이므로 극값 존재 ⟺ 남은 이차식 x^2+4x+a-6=0 이 서로 다른 두 실근'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 곱꼴의 극값 조건(판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분 뒤 e^{-x} 로 묶으면 -x^2-4x+6-a 가 남고, D/4=4-(a-6)>0 에서 a<10 이므로 자연수 최댓값은 9. 계산이 한 줄이고 동치 변환 1개(d1)라 M_total 6. [분류 이슈] 유형 UP 구역(★3 출발)과 vendor level 「중」(★2 출발) 신호가 엇갈려 구역 쪽을 택했다.
  tier: star_3
  mechanism_primary: '곱의 미분 → e^{-x} 로 묶기 → 남은 이차식 D>0 → a<10 → 자연수 최댓값 9'
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0695.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x^2+6x 의 계수와 e^{-x} 의 지수(e^{-2x}, e^{x})를 바꿀 수 있음. 제약: 남는 이차식의 판별식 부등식이 a 에 대해 일차로 풀려야 하고, 자연수 최댓값이 경계값 바로 아래 정수로 깔끔히 떨어져야 함(a<10 → 9).'
    creative: '(1) 「극값을 갖지 않을」 조건으로 뒤집어 최솟값을 묻기(★3 유지) (2) e^{-x} 대신 (x^2+6x+a)/e^{x} 분수꼴로 제시(골조 동일) (3) 극댓값과 극솟값의 곱·합에 조건을 걸면 값 계산이 추가돼 ★4.'
```

```yaml
- id: RPM-CALC2-0696
  page: 99
  vendor_label: "유형 UP 19 극값을 가질 조건; 판별식을 이용하는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=x-2a ln x-3/x 가 극값을 갖지 않도록 하는 실수 a 의 범위.
  category: '정의역 x>0 에서 f'' 분자 이차식이 부호를 바꾸지 않을 조건 → 판별식 + 근의 위치'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '극값 없음 ⟺ 분자 x^2-2ax+3 이 x>0 에서 부호를 바꾸지 않음(분모 x^2>0)'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정의역이 x>0 이라 D≤0 뿐 아니라 D>0 이면서 두 근이 모두 0 이하인 경우도 허용 — 두 갈래를 모두 따져야 a≤√3 이 나옴'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "정의역이 제한된 함수의 극값 없을 조건(판별식 + 근의 분리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분자 x^2-2ax+3 을 x>0 에서만 보면 판별식 D≤0(-√3≤a≤√3)만으로는 부족하고, D>0 이라도 두 근의 합 2a≤0·곱 3>0 이면 근이 모두 음수라 x>0 에 나타나지 않는다(a<-√3). 합치면 a≤√3. 정의역 제한을 놓치면 양쪽 끝이 모두 막힌 오답이 나오는 전형 함정. 통찰 2개(depth 3) → 유형 UP ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '로그·분수 미분 → 분자 x^2-2ax+3 → x>0 에서 부호 불변 조건 → D≤0 또는 두 근 모두 음수 → a≤√3'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$a\le\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0696.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 -3/x 의 3 과 ln 계수 2a 를 바꿀 수 있음. 제약: 분자의 상수항이 양수여야 「두 근의 곱>0」으로 근의 부호가 갈리는 구조가 유지되고, √(상수항) 이 무리수로 남아야 경계가 -√3/√3 처럼 대칭으로 보이는 함정이 살아남음.'
    creative: '(1) 「극값을 가질」 조건으로 뒤집으면 두 근이 모두 양수 조건이 되어 부등식 3개 연립(★4 유지) (2) -3/x 를 +3/x 로 바꾸면 곱이 음수가 되어 근이 항상 갈라지므로 케이스가 사라지고 ★3 (3) 극댓값·극솟값의 차에 조건을 얹으면 값 계산이 추가돼 ★4~5 후보.'
```

### 유형 UP 20 극값을 가질 조건; 판별식을 이용하지 않는 경우

```yaml
- id: RPM-CALC2-0697
  page: 99
  vendor_label: "유형 UP 20 극값을 가질 조건; 판별식을 이용하지 않는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=kx+3 sin x 가 극값을 갖지 않도록 하는 자연수 k 의 최솟값. 5지선다.
  category: '극값 없음 → f''=k+3cos x 의 부호 불변 → cos 치역으로 k 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '극값 없음 ⟺ k+3cos x 가 부호를 바꾸지 않음 ⟺ |k|≥3 — 등호 k=3 에서는 f''=0 인 점이 있어도 부호가 안 바뀌므로 허용된다는 경계 판단이 핵심'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수가 극값을 갖지 않을 조건(치역 이용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    판별식이 통하지 않는 대신 cos x 의 치역 [-1,1] 을 그대로 써서 f'=k+3cos x 의 최솟값 k-3≥0 을 요구한다. k=3 일 때 f'=0 이 되는 점이 고립돼 부호가 바뀌지 않는다는 등호 처리가 이 유형의 전부. 자연수 최솟값 3. 통찰 1개(EQV d2) → 유형 UP ★3 유지.
  tier: star_3
  mechanism_primary: 'f''=k+3cos x → cos 치역 [-1,1] → 부호 불변 조건 k≥3(등호 포함) → 자연수 최솟값 3'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0697.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sin 의 계수 3 과 각의 배수(sin 2x, sin 3x)를 바꿀 수 있음. 제약: 배각을 쓰면 f'' 에 배수가 곱해져 경계가 계수×배수로 바뀌므로 답이 정수로 떨어지는 조합을 고를 것. 「자연수」를 「정수」로 바꾸면 음수 쪽 경계도 답이 되어 문제가 달라짐.'
    creative: '(1) 「극값을 가질」 조건으로 뒤집어 자연수 k 의 개수를 묻기(★3 유지) (2) 3 sin x 를 3 sin x + cos x 로 바꾸면 합성이 한 단계 추가돼 ★4 (3) 구간을 [0, 2π] 로 제한하면 끝점 처리가 붙어 ★4.'
```

```yaml
- id: RPM-CALC2-0698
  page: 99
  vendor_label: "유형 UP 20 극값을 가질 조건; 판별식을 이용하지 않는 경우"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    f(x)=e^x(x^3-9x+a) 가 극댓값과 극솟값을 모두 갖도록 하는 실수 a 의 범위.
  category: '지수 인자 제거 → 삼차식이 서로 다른 세 실근 → 삼차함수 극값의 부호 조건'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'e^x>0 이므로 극대·극소를 모두 가진다 ⟺ g(x)=x^3+3x^2-9x+a-9 가 서로 다른 세 실근(부호가 두 번 바뀌어야 함)'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '삼차방정식의 근 개수를 판별식이 아니라 g 의 극댓값>0>극솟값 이라는 그래프 조건으로 옮김'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "지수×삼차 꼴의 극값 조건(삼차함수 극값의 부호)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미분 결과가 이차가 아니라 삼차라 판별식을 쓸 수 없고, g(x)=x^3+3x^2-9x+a-9 의 극점 x=-3, 1 에서 g(-3)=a+18>0, g(1)=a-14<0 을 요구해 -18<a<14 를 얻는다. 통찰 2개(EQV d2 + RT d2) → 유형 UP ★3 에서 +1 → ★4. 서술형 태그와도 합치.
  tier: star_4
  mechanism_primary: '곱의 미분 → e^x 로 묶은 삼차식 g → g''=0 의 두 점 → g(극대)>0>g(극소) → -18<a<14'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-18<a<14$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0698.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '삼차식 x^3-9x 의 일차 계수(-9 → -12, -3)를 바꿀 수 있음. 제약: g''=3x^2+6x+(계수)=0 의 두 근이 유리수로 떨어져야 g 의 극값을 손으로 계산할 수 있고, 두 극값이 a 의 일차식이어야 답이 구간으로 정리됨.'
    creative: '(1) 「극값을 오직 하나만 가질」 조건으로 바꾸면 경계(중근)가 답이 되어 ★4 유지 (2) e^x 를 e^{-x} 로 바꾸면 부호가 뒤집혀 같은 골조에 부호 함정 추가(★4) (3) a 를 고정하고 극댓값-극솟값 을 묻는 값 문제로 낮추면 ★3.'
```

```yaml
- id: RPM-CALC2-0699
  page: 99
  vendor_label: "유형 UP 20 극값을 가질 조건; 판별식을 이용하지 않는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=sin 2x-4 sin x-ax 가 극값을 갖도록 하는 정수 a 의 개수.
  category: '2배각 → t=cos x 치환 → f'' 의 치역이 0 을 내부에 포함할 조건 → 정수 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f''=2cos 2x-4cos x-a 를 2배각으로 cos x 하나로 통일하고 t=cos x∈[-1,1] 로 두어 삼각 문제를 제한구간 위 이차함수의 치역 문제로 전환'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '극값 존재 ⟺ f'' 의 치역 [-3-a, 6-a] 가 0 을 끝점이 아닌 내부에 포함(등호이면 부호가 안 바뀌어 극값 없음)'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "삼각함수 도함수의 치역을 이용한 극값 조건(정수 개수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    4t^2-4t-2 의 [-1,1] 위 치역이 [-3, 6] 이므로 f'의 치역은 [-3-a, 6-a]. 부호가 실제로 바뀌려면 -3-a<0<6-a, 즉 -3<a<6 이고 정수는 -2~5 의 8개. 두 경계에서 f'가 0 에 닿기만 해 극값이 없다는 점이 채점 포인트. 통찰 2개(RT d2 + EQV d2) → 유형 UP ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '2배각으로 cos x 통일 → t=cos x∈[-1,1] 이차함수 치역 [-3,6] → -3-a<0<6-a → 정수 8개'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0699.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sin x 의 계수 -4 와 sin 2x 의 계수를 바꿀 수 있음. 제약: 치환 뒤 이차함수의 꼭짓점이 [-1,1] 안에 들어와야 최솟값이 끝점이 아닌 내부에서 나오고, 치역의 두 끝이 정수라야 정수 a 의 개수가 깔끔하게 떨어짐.'
    creative: '(1) 「극값을 갖지 않을」 조건으로 뒤집으면 경계 2개가 답에 포함돼 등호 판단이 더 무거워짐(★4) (2) sin 2x 를 cos 2x 로 바꾸면 치환 뒤 일차식이 되어 ★3 (3) 정수 a 의 개수 대신 극댓값의 최댓값을 물으면 값 계산이 추가돼 ★5 후보(단 저노출 통찰 부재로 실제 ★5 는 어려움).'
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0700
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=√(2x^2+3) 위 x=√3 인 점에서의 접선이 y=ax+b 일 때 a^2+b^2.
  category: '무리함수 미분 → 접점·기울기 → 접선 → a, b 값'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수 곡선 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (√3, 3), y'=2x/√(2x^2+3) 에서 a=2√3/3, b=3-2=1 로 a^2+b^2=7/3. 합성함수 미분 한 번과 대입뿐이고 통찰 없음·M_total 6 → 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '접점 좌표 계산 → y'' 대입해 기울기 → 접선의 y절편 → a^2+b^2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0700.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 2x^2+3 의 계수와 접점의 x좌표를 바꿀 수 있음. 제약: 접점에서 근호가 유리수로 벗겨져야 기울기·절편이 정리되고, a^2+b^2 이 선택지로 쓸 수 있는 유리수여야 함.'
    creative: '(1) 접선의 x절편·삼각형 넓이를 묻기(★2 유지) (2) 접선이 원점을 지나도록 하는 접점을 찾게 하면 곡선 밖 점 접선이 되어 ★3 (3) 같은 곡선의 법선을 물어 수직 조건 한 단계 추가(★2).'
```

```yaml
- id: RPM-CALC2-0701
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=sin 2x 위 점 (π/2, 0) 을 지나고 그 점에서의 접선과 수직인 직선의 y절편.
  category: '삼각함수 미분 → 접선 기울기 → 수직 기울기 → y절편'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 법선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=2cos 2x 에서 x=π/2 일 때 -2 이므로 법선의 기울기는 1/2, y=(1/2)(x-π/2) 의 y절편 -π/4. 단계가 셋뿐이나 배각 미분과 법선 기울기 부호를 챙겨야 해 −1 은 적용하지 않고 ★2.
  tier: star_2
  mechanism_primary: 'y''=2cos 2x → 접선 기울기 -2 → 법선 기울기 1/2 → y절편 -π/4'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0701.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각의 배수(sin 3x, cos 2x)와 접점의 x좌표를 바꿀 수 있음. 제약: 접점에서 삼각함수 값이 0 이나 ±1 처럼 깔끔해야 절편이 π 의 유리수배로 떨어짐.'
    creative: '(1) 접선과 법선, x축이 만드는 삼각형의 넓이를 묻기(★3) (2) 두 곡선의 교점에서 접선이 수직일 조건으로 확장(0706 골조 ★3) (3) 접점을 미지수로 두고 법선이 원점을 지나도록 하는 x 를 찾게 하면 ★3.'
```

```yaml
- id: RPM-CALC2-0702
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 y=e^{x-1}-1 이 x축·y축과 만나는 점을 P, Q 라 할 때 직선 PQ 에 평행한 접선의 접점의 y좌표.
  category: '두 절편으로 기울기 → 접선 기울기와 같게 → 접점의 y좌표'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'y''=e^{x-1}=y+1 이므로 접점의 x 를 구하지 않고 「기울기-1」로 y좌표를 바로 읽음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 직선에 평행한 접선(접점 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(1, 0), Q(0, 1/e-1) 에서 PQ 기울기는 1-1/e. y'=e^{x-1} 을 이 값과 같게 두면 접점의 y=e^{x-1}-1=(1-1/e)-1=-1/e 로 x 를 구할 필요가 없다. 축약 통찰이 d1 이라 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '두 절편 P·Q → 기울기 1-1/e → y''=e^{x-1} 을 그 값으로 → y=y''-1=-1/e'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0702.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 평행이동 e^{x-1} 의 1 과 상수항 -1 을 바꿀 수 있음. 제약: 두 절편이 모두 존재하려면 상수항이 음의 평행이동이어야 하고, 기울기가 1-1/e 처럼 e 의 유리식으로 남아야 답이 -1/e 꼴로 정리됨.'
    creative: '(1) PQ 에 평행이 아니라 수직인 접선으로 바꾸면 초월방정식이 되어 부적합 — 대신 기울기를 직접 주기(★2) (2) 접선과 PQ 사이의 거리를 묻기(★3) (3) 곡선을 y=ln(x+1) 로 바꾸면 y''=1/(x+1) 이라 접점 x 를 구해야 해서 ★3.'
```

```yaml
- id: RPM-CALC2-0703
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    점 (2, 0) 에서 곡선 y=e^{x-k} 에 그은 접선이 점 (5, 6) 을 지날 때 상수 k.
  category: '두 점으로 접선 확정 → 접점 조건 → k'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「(2,0) 에서 그었다」와 「(5,6) 을 지난다」는 두 조건을 접선이 곧 두 점을 잇는 직선(기울기 2)이라는 하나로 통합해 접점 매개변수를 거의 쓰지 않고 끝냄'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선(지수함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점을 x=t 로 두면 접선이 (2,0) 을 지날 조건에서 e^{t-k}(3-t)=0 → t=3 이 먼저 나오고, 두 점을 잇는 기울기 2 와 맞추면 e^{3-k}=2, k=3-ln 2. 두 점 조건을 기울기 하나로 묶는 착안(CON d2) → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '접점 t 의 접선식 → (2,0) 대입으로 t=3 → 두 점의 기울기 2 와 e^{3-k} 를 같게 → k=3-ln 2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3-\ln 2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0703.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점 (2,0)·(5,6) 의 좌표를 바꿀 수 있음. 제약: 두 점의 기울기가 양수여야 지수곡선의 접선이 되고, 그 기울기의 자연로그가 답에 남으므로 2·e 처럼 다루기 쉬운 수로 둘 것.'
    creative: '(1) (5,6) 대신 접선의 y절편을 주기(★3 유지) (2) 그은 접선이 두 개가 되도록 곡선을 y=e^{x-k}-1 로 바꾸면 0705 골조로 올라가 ★3~4 (3) k 를 주고 두 점 중 하나를 묻는 역방향으로 바꾸면 ★2.'
```

```yaml
- id: RPM-CALC2-0704
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    원점에서 곡선 y=e^{|x|} 에 그은 두 접선이 이루는 예각 θ 에 대하여 tan θ. 5지선다.
  category: '절댓값 대칭 → 한쪽 접선만 구하고 대칭 → 두 직선이 이루는 각'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'y=e^{|x|} 가 y축 대칭이므로 x>0 쪽 접선(기울기 e)만 구하고 다른 접선의 기울기는 -e 로 대칭 이동 — 두 번 계산할 필요가 없음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선이 이루는 각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x>0 에서 접점 t 는 e^t=t e^t → t=1, 기울기 e. 대칭으로 다른 기울기는 -e 이고 tan θ=|2e/(1-e^2)|=2e/(e^2-1). 예각이라 절댓값을 씌우는 부호 처리가 함정. 대칭 통찰 1개(SYM d2) → 종합 ★2 에서 +1 → ★3. 기출 태그는 +0.
  tier: star_3
  mechanism_primary: 'x>0 쪽 접점 t=1 → 기울기 e → 대칭으로 -e → tan θ=2e/(e^2-1)'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0704.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 밑·계수(y=2^{|x|}, y=e^{2|x|})를 바꿀 수 있음. 제약: 원점에서 그은 접선의 접점이 유리수 좌표로 떨어져야 기울기가 e 의 거듭제곱 하나로 남고, 예각 조건 때문에 1+m1m2 의 부호를 확인해야 함.'
    creative: '(1) 두 접선과 x축이 만드는 삼각형의 넓이를 묻기(★3 유지) (2) 그은 점을 (0, k) 로 일반화하면 접점 조건이 매개변수식이 되어 ★4 (3) tan θ 대신 θ 가 직각이 되도록 하는 밑을 찾게 하면 역방향이 되어 ★4.'
```

```yaml
- id: RPM-CALC2-0705
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    원점에서 곡선 y=(x-a)e^{-x} 에 서로 다른 두 접선을 그을 수 있도록 하는 실수 a 의 범위.
  category: '접점 t 의 방정식으로 환원 → 서로 다른 두 실근 → 판별식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「서로 다른 두 접선을 그을 수 있다」를 「접점 t 의 방정식 t^2-at-a=0 이 서로 다른 두 실근을 갖는다」로 옮김 — 접선 개수를 근의 개수로 세는 전형 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 개수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 (t, (t-a)e^{-t}) 에서 접선이 원점을 지날 조건을 정리하면 e^{-t} 가 약분되어 t^2-at-a=0. D=a^2+4a>0 에서 a<-4 또는 a>0. 접선 개수를 근의 개수로 바꾸는 동치 변환(EQV d2) → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '접점 t 의 접선이 원점 통과 → e^{-t} 약분 → t^2-at-a=0 → D>0 → a<-4 또는 a>0'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a<-4$ 또는 $a>0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0705.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곡선의 (x-a) 자리와 e^{-x} 의 지수를 바꿀 수 있음. 제약: 접선 조건에서 지수 인자가 통째로 약분돼 t 의 이차방정식이 남아야 하고, 판별식이 a 의 이차부등식으로 인수분해돼야 함.'
    creative: '(1) 접선이 한 개·세 개일 조건으로 바꾸기(경계 포함 ★3) (2) 그은 점을 (0, b) 로 두면 t 의 방정식에 b 가 더해져 두 매개변수 문제로 ★4 (3) 두 접선이 서로 수직일 조건을 얹으면 근과 계수의 관계가 추가돼 ★4.'
```

```yaml
- id: RPM-CALC2-0706
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 곡선 y=ln(2x+3), y=a-ln x 가 점 P 에서 만나고 그 점에서의 두 접선이 수직일 때 상수 a. 5지선다.
  category: '수직 조건으로 교점의 x → 교점 조건으로 a'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「만난다」와 「접선이 수직이다」 두 조건 중 수직 조건이 a 를 포함하지 않는다는 점을 이용해 x 를 먼저 확정하고 a 는 나중에 대입'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점에서 접선이 수직일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2/(2x+3)·(-1/x)=-1 에서 2x^2+3x-2=0, 정의역 x>0 이라 x=1/2 만 남는다(x=-2 기각). 이때 ln 4=a+ln 2 이므로 a=ln 2. 조건 분리 착안은 d1 이지만 정의역 기각과 로그 정리까지 M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '두 도함수의 곱=-1 → 2x^2+3x-2=0 → 정의역 x>0 로 x=1/2 → 교점 조건에서 a=ln 2'
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0706.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'ln(2x+3) 의 계수 2·3 을 바꿀 수 있음. 제약: 수직 조건이 이차방정식으로 정리되고 그 근 중 하나만 정의역 x>0 에 남아야 기각 함정이 살아 있으며, 교점의 로그값이 ln 2 같은 단순 꼴로 떨어져야 함.'
    creative: '(1) 수직 대신 「두 접선이 평행」으로 바꾸면 기울기 등식이 되어 ★3 유지 (2) 두 곡선이 접할 조건(값·기울기 동시 일치)으로 바꾸면 0707 골조 ★3 (3) a 를 주고 교점의 개수를 묻는 문제로 돌리면 그래프 비교가 되어 ★4.'
```

```yaml
- id: RPM-CALC2-0707
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 곡선 y=ln x, y=a√x 가 서로 접할 때 상수 a. 5지선다.
  category: '접한다 → 값·기울기 동시 일치 → 접점 t → a'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「두 곡선이 서로 접한다」를 「접점 t 에서 함숫값이 같고 도함수값도 같다」는 두 식으로 옮김 — 한쪽만 쓰면 풀 수 없음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(값·기울기 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1/t=a/(2√t) 에서 a=2/√t 를 얻고 ln t=a√t 에 넣으면 ln t=2, t=e^2, a=2/e. 접촉 조건의 이중 식이 핵심 통찰(EQV d2) → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '접점 t 에서 도함수 일치 → a=2/√t → 함숫값 일치에 대입 → ln t=2 → a=2/e'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0707.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√x 를 x^{1/3}·x^2 등 다른 거듭제곱으로 바꿀 수 있음. 제약: 도함수 일치식에서 a 가 t 의 거듭제곱 하나로 풀려야 하고, 대입 후 ln t 가 유리수가 되어 t 가 e 의 거듭제곱으로 떨어져야 함.'
    creative: '(1) 접점의 좌표나 공통접선의 방정식을 묻기(★3 유지) (2) 「서로 다른 두 점에서 만날」 조건으로 바꾸면 a 의 범위 문제가 되어 ★4 (3) y=ln x 대신 y=ln(x-k) 로 평행이동하면 미지수가 둘이 되어 ★4.'
```

```yaml
- id: RPM-CALC2-0708
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=2x+cos x 의 역함수 g 에 대하여 곡선 y=g(x) 위 점 (3π, 3π/2) 에서의 접선의 x절편.
  category: '역함수의 미분계수 = 원함수 미분계수의 역수 → 접선 → x절편'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'g 를 직접 구하지 않고 g''(3π)=1/f''(3π/2) 로 원함수 쪽으로 옮겨 계산'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수의 미분법을 이용한 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=2-sin x 이므로 f'(3π/2)=3, g'(3π)=1/3. 접선 y-3π/2=(1/3)(x-3π) 의 x절편은 -3π/2. 역함수 미분법은 표준 공식이라 d1·M_total 5 지만 단계가 셋이라 −1 은 적용하지 않고 ★2.
  tier: star_2
  mechanism_primary: 'f''(3π/2)=3 → g''(3π)=1/3 → 접선 → x절편 -3π/2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0708.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2x 의 계수와 삼각항(cos x → sin x)을 바꿀 수 있음. 제약: 대응점에서 삼각함수 값이 0·±1 로 떨어져 f'' 가 정수가 되어야 역수가 깔끔하고, 주어진 점이 실제로 y=g(x) 위에 있어야 함(f(3π/2)=3π 확인).'
    creative: '(1) x절편 대신 접선과 두 축이 만드는 삼각형의 넓이(★2) (2) g''(3π) 가 아니라 g''''(3π) 를 묻는 이계 역함수 미분으로 올리면 ★4 (3) f 의 단조성을 먼저 보여 역함수의 존재를 확인하게 하면 조건 검증이 추가돼 ★3.'
```

```yaml
- id: RPM-CALC2-0709
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    매개변수 곡선 x=ln(2t+1)+4, y=t^2-t+3 위 점 (4, 3) 에서의 접선이 두 축과 만나는 점을 A, B 라 할 때 선분 AB 의 길이.
  category: '점에 대응하는 t 확정 → 매개변수 미분 → 접선 → 두 절편 거리'
  M: {s: 2, k: 2, a: 1, t: 1}
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
    x=4 에서 ln(2t+1)=0 → t=0 이고 y=3 으로 확인된다. dy/dx=(2t-1)/(2/(2t+1)) 가 t=0 에서 -1/2 이므로 접선 y=-x/2+5, A(10,0)·B(0,5), AB=5√5. 표준 매개변수 미분 3단계·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: '점 (4,3) ↔ t=0 → dy/dx=-1/2 → 접선 y=-x/2+5 → 두 절편 (10,0),(0,5) → AB=5√5'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0709.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'ln(2t+1) 의 계수와 y 의 이차식 계수를 바꿀 수 있음. 제약: 주어진 점에 대응하는 t 가 로그의 진수를 1 로 만드는 값이어야 손으로 찾히고, 접선의 두 절편이 정수라야 AB 가 √(정수) 로 정리됨.'
    creative: '(1) 삼각형 OAB 의 넓이를 묻기(★2 유지) (2) 접선이 원점을 지나도록 하는 t 를 찾게 하면 t 의 초월방정식이 되어 부적합 — 대신 기울기를 주고 t 를 찾게 하면 ★3 (3) 매개변수를 삼각함수로 바꾸면 0710·0728 골조로 올라가 ★3~4.'
```

```yaml
- id: RPM-CALC2-0710
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    매개변수 곡선 x=a tan θ, y=b sec θ 에서 θ=π/6 에 대응하는 점의 접선이 y=2x+2 일 때 ab. 5지선다.
  category: '매개변수 미분 → 기울기 조건과 점 통과 조건 연립 → ab'
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「기울기가 2」와 「그 점이 직선 위에 있다」 두 조건을 a, b 의 연립방정식 하나로 묶음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "매개변수 곡선(삼각)의 접선과 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dy/dx=(b sec θ tan θ)/(a sec^2 θ)=(b/a)sin θ 로 줄면 θ=π/6 에서 b/(2a)=2, 즉 b=4a. 점 (a/√3, 2b/√3) 을 y=2x+2 에 넣으면 b-a=√3 이므로 a=1/√3, b=4/√3, ab=4/3. sec·tan 정리와 무리수 연립으로 Mₖ=3·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: 'dy/dx=(b/a)sin θ → θ=π/6 에서 b=4a → 접점을 직선에 대입해 b-a=√3 → ab=4/3'
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0710.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'θ 값(π/4, π/3)과 접선 y=2x+2 의 계수를 바꿀 수 있음. 제약: sin θ 가 유리수 또는 간단한 무리수여야 b/a 가 정수비로 떨어지고, 접점 좌표의 무리수가 약분돼 ab 가 유리수로 남아야 함.'
    creative: '(1) ab 대신 곡선의 자취(쌍곡선 b^2x^2-a^2y^2=-a^2b^2)를 묻기(★4) (2) 접선이 원점을 지나도록 하는 θ 를 찾게 하면 ★4 (3) a, b 중 하나를 주고 나머지만 구하게 하면 연립이 사라져 ★2.'
```

```yaml
- id: RPM-CALC2-0711
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    곡선 x^2+5xy-2y^2+11=0 위 점 (1, 4) 에서의 접선과 수직인 직선 l 과 원점 사이의 거리.
  category: '음함수 미분 → 접선 기울기 → 법선 l → 점과 직선 사이의 거리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법을 이용한 접선·법선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 미분 2x+5y+(5x-4y)y'=0 에서 (1,4) 일 때 y'=2, 법선 기울기 -1/2 이므로 l: x+2y-9=0, 원점과의 거리 9/√5=9√5/5. 음함수 미분과 거리 공식의 표준 조합·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: '음함수 미분 → (1,4) 에서 y''=2 → 법선 x+2y-9=0 → 원점 거리 9√5/5'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9\sqrt{5}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0711.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차곡선의 계수(5xy 의 5, -2y^2 의 -2, 상수 11)와 접점을 바꿀 수 있음. 제약: 접점이 곡선 위에 있도록 상수항을 맞춰야 하고, 분모 5x-4y 가 0 이 되지 않아야 하며 기울기가 유리수로 떨어져야 거리 계산이 정리됨.'
    creative: '(1) 법선 대신 접선과 원점 사이의 거리(★2 유지) (2) 접선이 x축에 평행·수직이 되는 점을 찾게 하면 연립이 필요해 ★3 (3) 같은 곡선에서 y''''를 구해 볼록성을 묻기(★3).'
```

```yaml
- id: RPM-CALC2-0712
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=e^{3x} sin x 에 대하여 f''(x)=0 의 해 x=θ (π/2<θ<π) 에서 tan θ. 5지선다.
  category: '곱의 미분 두 번 → f'''' 를 e^{3x}(8sin x+6cos x) 로 정리 → tan θ'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 값(지수×삼각 곱꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=e^{3x}(3sin x+cos x), 한 번 더 미분하면 f''=e^{3x}(8sin x+6cos x). e^{3x}≠0 이므로 8sin θ+6cos θ=0, tan θ=-3/4 이고 주어진 구간에서 부호도 맞는다. 곱의 미분 반복뿐이고 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '곱의 미분 2회 → f''''=e^{3x}(8sin x+6cos x) → 8sin θ+6cos θ=0 → tan θ=-3/4'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0712.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 계수 3 과 삼각항(sin x → cos x)을 바꿀 수 있음. 제약: 두 번 미분한 뒤 계수가 (k^2-1, 2k) 꼴로 나오므로 tan θ 가 선택지로 쓸 수 있는 유리수가 되도록 k 를 고를 것.'
    creative: '(1) f''''''(x)=0 의 해를 묻거나 f''''(x)>0 인 구간(위로 볼록)을 묻기(★3) (2) 구간 제한을 없애면 θ 가 여러 개라 개수 문제로 바뀜(★3) (3) f''''=af''+bf 꼴 항등식의 상수 a, b 를 묻는 형태로 바꾸면 ★3.'
```

```yaml
- id: RPM-CALC2-0713
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=ln(x+√(x^2+1)) 에 대한 보기 ㄱ·ㄴ·ㄷ(도함수 값, 항등식, 극한) 중 옳은 것 고르기. 5지선다.
  category: 'f''=1/√(x^2+1) 간단화 → 세 보기 각각 판정'
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분자 1+x/√(x^2+1) 을 통분하면 x+√(x^2+1) 이 그대로 약분돼 f''=1/√(x^2+1) 로 줄어든다는 것을 알아내야 세 보기가 모두 풀림'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'ㄷ 의 극한을 f''''/f'' 비로 정리해 -x^2/(x^2+1) 로 환원한 뒤 x→∞ 극한을 읽음'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "도함수·이계도함수 항등식 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=1/√(x^2+1) 로 줄면 ㄱ 은 f'(√3)=1/2 이라 거짓, f''=-x(x^2+1)^{-3/2} 를 넣으면 ㄴ 의 (x^2+1)f''+xf'=0 은 참, ㄷ 은 xf''/f'=-x^2/(x^2+1)→-1 로 참. 간단화 통찰이 세 보기의 공통 열쇠라 통찰 2개(depth 3)·M_total 9 → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'f''=1/√(x^2+1) 로 간단화 → f'''' 계산 → ㄱ 거짓·ㄴ 항등식 참·ㄷ 극한 -1 참'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0713.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'ㄱ 의 대입값 √3 과 ㄷ 의 극한 방향(x→-∞)을 바꿀 수 있음. 제약: 근호 안이 x^2+1 이어야 f'' 가 1/√(x^2+1) 로 깨끗이 줄고 ㄴ 의 항등식이 성립하므로, 근호 안 상수만 바꾸면 항등식 계수도 함께 바꿔야 함.'
    creative: '(1) 보기 세 개를 모두 참으로 만들고 「옳지 않은 것」을 묻기(★3 유지) (2) ㄴ 을 미지 계수 (x^2+1)f''''+axf''=0 의 a 를 구하는 값 문제로 바꾸면 ★3 (3) f 가 역쌍곡사인임을 이용해 역함수 (e^y-e^{-y})/2 를 유도하게 하면 표현 전환이 추가돼 ★4.'
```

```yaml
- id: RPM-CALC2-0714
  page: 101
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=e^{x/2}/(x^2+3) 이 감소하는 구간이 [α, β] 일 때 β-α.
  category: '몫의 미분 → 분자 이차식의 부호 → 감소 구간의 길이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수가 감소하는 구간 구하기(몫꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=e^{x/2}(x^2-4x+3)/(2(x^2+3)^2) 에서 분모와 지수는 항상 양수이므로 부호는 x^2-4x+3 이 결정한다. 1≤x≤3 이 감소 구간이라 β-α=2. 몫의 미분 한 번과 이차부등식뿐·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: '몫의 미분 → 분자 x^2-4x+3 의 부호 → 감소 구간 [1,3] → 길이 2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0714.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 x/2 의 계수와 분모 x^2+3 의 상수를 바꿀 수 있음. 제약: 정리된 분자가 인수분해되는 이차식이어야 구간이 정수 끝점으로 떨어지고, 분모는 항상 양수여야 부호 판정이 분자만으로 끝남.'
    creative: '(1) 증가 구간의 길이나 극댓값·극솟값을 묻기(★2 유지) (2) 분모를 x^2+a 로 두고 감소 구간의 길이가 2 가 되도록 하는 a 를 찾게 하면 역방향이 되어 ★4 (3) 지수를 e^{kx} 로 두고 감소 구간이 존재할 k 조건을 묻기(★3~4).'
```

```yaml
- id: RPM-CALC2-0715
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=kx-cos 3x 가 실수 전체에서 감소하도록 하는 실수 k 의 범위.
  category: '전 구간 감소 → f''≤0 항상 → sin 의 최댓값으로 k 경계'
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '전 구간 감소 ⟺ 모든 x 에서 f''=k+3sin 3x≤0 ⟺ f'' 의 최댓값 k+3≤0 (등호 허용)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 전체에서 증가·감소할 조건(삼각함수 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=k+3sin 3x 의 최댓값이 k+3 이므로 k≤-3. 등호에서 f'=0 이 되는 점이 고립돼 감소가 유지된다는 점만 확인하면 끝. 통찰이 d1 이고 계산이 한 줄이라 절차형·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'f''=k+3sin 3x → 최댓값 k+3≤0 → k≤-3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\le -3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0715.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'cos 3x 의 각 배수와 계수를 바꿀 수 있음. 제약: 미분하면 계수×배수가 경계가 되므로 그 곱이 정수가 되도록 고를 것. 「감소」를 「증가」로 바꾸면 부등호 방향과 부호가 함께 뒤집힘.'
    creative: '(1) 구간을 [0, π] 로 제한하면 끝점에서의 부호만 보면 되어 조건이 느슨해짐(★3) (2) cos 3x 를 cos x+cos 2x 로 바꾸면 치역 계산이 이차식이 되어 ★4 (3) 「역함수가 존재할」 조건으로 바꾸면 단조성 동치 변환이 추가돼 ★3.'
```

```yaml
- id: RPM-CALC2-0716
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=e^x/(ax^2+3) 이 구간 (1/2, 1) 에서 감소하도록 하는 양수 a 의 최솟값. 5지선다.
  category: '분자 이차식 ax^2-2ax+3≤0 을 구간에서 만족 → 축 위치로 끝값 판정 → a 최솟값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '구간에서 감소 ⟺ 그 구간의 모든 x 에서 분자 g(x)=ax^2-2ax+3≤0 (분모 제곱·e^x 는 항상 양수)'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'a>0 이라 g 의 축이 x=1 로 고정됨을 알아채면 (1/2, 1) 에서 g 는 감소하므로 최댓값이 왼쪽 끝 g(1/2) — 부등식을 이차함수 그래프의 위치 문제로 바꿔 끝값 하나만 검사'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "주어진 구간에서 감소할 조건(이차식의 구간 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=e^x(ax^2-2ax+3)/(ax^2+3)^2 이므로 분자만 보면 된다. a>0 이면 축이 항상 x=1 이라 구간 (1/2,1) 에서 g 는 감소, 최댓값은 g(1/2)=3-3a/4≤0 → a≥4, 최솟값 4. 축이 a 와 무관하게 고정된다는 관찰이 핵심(RT d2)·통찰 2개 → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '분자 g(x)=ax^2-2ax+3 → 축 x=1 고정 → 구간 왼쪽 끝 g(1/2)≤0 → a≥4 → 최솟값 4'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0716.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모 상수 3 과 구간 (1/2, 1) 을 바꿀 수 있음. 제약: 분자를 정리했을 때 축이 a 에 무관하게 고정되는 구조(ax^2-2ax+c)를 유지해야 하고, 끝값 부등식이 a 의 일차식으로 풀려 최솟값이 정수로 떨어져야 함.'
    creative: '(1) 「증가할」 조건으로 뒤집으면 g≥0 이 되어 축과 구간의 위치 관계가 반대가 됨(★3 유지) (2) a 를 음수까지 허용하면 축의 위치가 바뀌어 케이스 분기가 생기고 ★4 (3) 감소 구간의 길이를 지정하면 두 근의 차 조건이 붙어 ★4.'
```

```yaml
- id: RPM-CALC2-0717
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=(x^2+2x+1)/(x^2+2) 의 극대인 점 A, 극소인 점 B 에 대하여 선분 AB 의 중점의 좌표.
  category: '몫의 미분 → f''=0 의 두 근 → 두 극점 좌표 → 중점'
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 극대와 극소(극점의 좌표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 정리하면 f'=-2(x-2)(x+1)/(x^2+2)^2 이라 x=-1 에서 극소, x=2 에서 극대. B(-1, 0), A(2, 3/2) 이므로 중점은 (1/2, 3/4). 삼차식 전개·정리가 있어 Mₖ=3 이지만 통찰은 없음 → ★2.
  tier: star_2
  mechanism_primary: '몫의 미분 → f''=-2(x-2)(x+1)/(x^2+2)^2 → 극소 (-1,0)·극대 (2,3/2) → 중점 (1/2, 3/4)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(\dfrac{1}{2},\,\dfrac{3}{4}\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0717.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자 (x+1)^2 의 평행이동과 분모 상수 2 를 바꿀 수 있음. 제약: 미분 후 분자가 인수분해되는 이차식이어야 극점의 x 가 정수로 떨어지고, 두 극값이 유리수여야 중점 좌표가 정리됨.'
    creative: '(1) 중점 대신 선분 AB 의 길이·기울기를 묻기(★2 유지) (2) 극대·극소의 곱 또는 차를 묻기(0718 골조 ★2) (3) 분자를 (x+k)^2 로 두고 극댓값이 주어진 값이 되도록 하는 k 를 찾게 하면 역방향이 되어 ★4.'
```

```yaml
- id: RPM-CALC2-0718
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    f(x)=(x^2-3)e^{-x} 의 극댓값 a, 극솟값 b 에 대하여 a×b. 5지선다.
  category: '곱의 미분 → f''=0 의 두 근 → 극대·극소 판정 → 두 값의 곱'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극대와 극소(극값의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-e^{-x}(x-3)(x+1) 에서 x=-1 극소, x=3 극대. b=f(-1)=-2e, a=f(3)=6e^{-3} 이므로 ab=-12/e^2. 부호표 한 번과 대입뿐이고 통찰 없음·M_total 6 → ★2. 기출 태그지만 통찰이 없어 +0.
  tier: star_2
  mechanism_primary: 'f''=-e^{-x}(x-3)(x+1) → 극소 f(-1)=-2e·극대 f(3)=6e^{-3} → 곱 -12/e^2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0718.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x^2-3 의 상수항과 e^{-x} 의 지수 계수를 바꿀 수 있음. 제약: f'' 의 이차식이 인수분해돼 극점이 정수여야 하고, 두 극값이 e 의 정수 거듭제곱 배가 되어야 곱이 선택지로 정리됨.'
    creative: '(1) 극댓값+극솟값이나 두 극점 사이 거리를 묻기(★2 유지) (2) 상수항을 a 로 두고 극값의 곱이 주어진 값이 되게 하는 a 를 찾으면 역방향 ★4 (3) 변곡점의 개수·좌표를 묻는 이계도함수 문제로 바꾸면 ★3.'
```

```yaml
- id: RPM-CALC2-0719
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=x e^{ax+b} 가 x=-1 에서 극솟값 -1/e 를 가질 때 상수 a, b 에 대하여 a+b.
  category: '극점 조건 f''(-1)=0 → a → 극값 조건 f(-1)=-1/e → b'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 정하기(지수함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=e^{ax+b}(1+ax) 이므로 f'(-1)=0 에서 1-a=0, a=1. f(-1)=-e^{b-1}=-1/e 에서 b=0 이고 a+b=1. 스키마대로 미정계수 연립은 표준 절차라 I-BW 를 인정하지 않고 통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: 'f''=e^{ax+b}(1+ax) → f''(-1)=0 으로 a=1 → f(-1)=-1/e 로 b=0 → a+b=1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0719.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '극점의 x좌표 -1 과 극솟값 -1/e 를 바꿀 수 있음. 제약: f''=0 에서 a 가 극점의 역수로 결정되므로 극점은 0 이 아니어야 하고, 극값이 e 의 정수 거듭제곱 배여야 b 가 정수로 떨어짐.'
    creative: '(1) 극솟값 대신 극댓값을 주면 부호 조건이 추가돼 케이스 검증이 필요(★3) (2) x e^{ax+b} 를 (x^2+cx)e^x 로 바꾸면 0725 골조가 되어 ★3 (3) a, b 를 주고 극값의 존재 여부·부호를 묻는 방향으로 바꾸면 ★2.'
```

```yaml
- id: RPM-CALC2-0720
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=(x-ln x)/x 가 x=a 에서 극솟값 b 를 가질 때 ab.
  category: '식을 1-(ln x)/x 로 정리 → 미분 → 극점 x=e → 극솟값 → ab'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극대와 극소(극점·극값 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=1-(ln x)/x 이므로 f'=-(1-ln x)/x^2 이고 x=e 에서 부호가 −에서 +로 바뀌어 극소. a=e, b=1-1/e 이므로 ab=e-1. 정의역 x>0 만 챙기면 되는 표준 절차·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: 'f=1-(ln x)/x → f''=-(1-ln x)/x^2 → 극소 x=e → b=1-1/e → ab=e-1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0720.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '(ln x)/x 앞의 계수와 상수항을 바꿀 수 있음. 제약: 극점이 x=e 로 유지되려면 1-ln x 꼴이 남아야 하므로 분모 차수를 바꿀 때는 극점이 e 의 거듭제곱으로 떨어지는지 확인할 것.'
    creative: '(1) 극솟값 대신 최솟값·치역을 묻기(★2 유지) (2) (x-k ln x)/x 로 두고 극솟값이 주어진 값이 되게 하는 k 를 찾으면 역방향 ★3 (3) y=f(x) 그래프와 직선 y=t 의 교점 개수를 묻는 문제로 확장하면 ★4.'
```

```yaml
- id: RPM-CALC2-0721
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    f(x)=(1+sin x)cos x (0<x<π) 의 극댓값 M, 극솟값 m 에 대하여 M-m.
  category: '미분 후 sin x 에 대한 이차식으로 인수분해 → 두 극점 → M-m'
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f''=-sin x+cos 2x 를 2배각으로 sin 하나로 통일해 -(2sin x-1)(sin x+1) 로 인수분해 — 삼각방정식을 sin x 에 대한 이차식의 근 문제로 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 극대와 극소(2배각 인수분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    인수분해하면 0<x<π 에서 sin x+1>0 이므로 부호는 2sin x-1 이 결정하고, sin x=1/2 인 x=π/6(극대)·5π/6(극소)만 남는다. M=3√3/4, m=-3√3/4 이라 M-m=3√3/2. 구간 제한으로 sin x=-1 을 버리는 처리가 함정. 통찰 1개(RT d2) → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'f''=-(2sin x-1)(sin x+1) → 0<x<π 에서 sin x=1/2 → 극대 π/6·극소 5π/6 → M-m=3√3/2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3\sqrt{3}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0721.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '(1+sin x) 의 상수 1 과 구간을 바꿀 수 있음. 제약: 미분 후 sin x 의 이차식이 인수분해돼야 하고, 특수각에서 해가 나와야 극값이 √3 배수로 떨어짐. 구간을 (0, 2π) 로 넓히면 극점이 늘어 답이 달라짐.'
    creative: '(1) 극값 대신 최댓값·최솟값을 닫힌구간에서 묻기(끝값 비교 추가 ★3) (2) (1+sin x)cos x 를 (1+cos x)sin x 로 바꾸면 같은 골조에 부호만 달라짐(★3) (3) (a+sin x)cos x 로 두고 극댓값이 주어진 값이 되게 하는 a 를 찾으면 ★4.'
```

```yaml
- id: RPM-CALC2-0722
  page: 102
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=x-|k|cos x 가 극값을 갖지 않도록 하는 실수 k 의 범위가 α≤k≤β 일 때 αβ. 5지선다.
  category: '극값 없음 → f''=1+|k|sin x 의 부호 불변 → |k|≤1 → αβ'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '극값 없음 ⟺ 1+|k|sin x 가 부호를 바꾸지 않음 ⟺ 최솟값 1-|k|≥0 — 등호 |k|=1 에서 f''=0 이 고립점이라 극값이 생기지 않는다는 경계 판단이 핵심'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극값을 갖지 않을 조건(절댓값 계수·삼각함수 치역)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sin x 의 치역이 [-1,1] 이므로 f' 의 최솟값은 1-|k|. 이것이 0 이상이어야 하므로 |k|≤1, 즉 -1≤k≤1 이고 αβ=-1. 절댓값 때문에 k 의 부호가 답에 영향을 주지 않는다는 점과 등호 처리가 함께 걸린다. 통찰 1개(EQV d2) → 종합 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'f''=1+|k|sin x → 최솟값 1-|k|≥0 → -1≤k≤1 → αβ=-1'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0722.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x 의 계수와 cos x 앞 절댓값 항을 바꿀 수 있음(2x-|k|cos x 등). 제약: 도함수의 최솟값이 (일차항 계수)-|k| 로 남아야 하고, α·β 가 대칭이라 곱이 음의 정수로 떨어져야 선택지가 됨.'
    creative: '(1) 「극값을 가질」 조건으로 뒤집으면 |k|>1 이 되어 구간이 둘로 갈라짐(★3 유지) (2) 절댓값을 벗겨 k cos x 로 두면 부호 케이스가 생겨 ★3 (3) cos x 를 cos 2x 로 바꾸면 경계가 1/2 로 바뀌며 배각 미분이 추가돼 ★3.'
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0723
  page: 103
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    곡선 y=tan x 위 원점에서의 접선이 y=kx 이고, 곡선 y=sin x 위 점 (kπ, sin kπ) 에서의 접선이 y=ax+b 일 때 ab.
  category: 'tan 의 원점 접선으로 k → 그 k 로 정해진 점에서 sin 의 접선 → ab'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 곡선 위의 점에서의 접선(2단 연쇄)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (tan x)'=sec^2 x 이라 원점에서 기울기 1, k=1. 그러면 점은 (π, 0) 이고 (sin x)'=cos x 에서 기울기 -1, 접선 y=-x+π 이므로 a=-1, b=π, ab=-π. [분류 이슈] 서술형 구역 출발점 ★3 을 유지했으나 통찰 없이 표준 접선을 두 번 반복할 뿐이라 체감은 ★2 에 가깝다.
  tier: star_3
  mechanism_primary: '원점에서 (tan x)''=1 → k=1 → 점 (π,0) 에서 (sin x)''=-1 → y=-x+π → ab=-π'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0723.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'tan x 를 tan 2x 로, sin x 를 sin 2x 로 바꿔 k 값을 2 로 만들 수 있음. 제약: 첫 접선의 기울기 k 가 정수라야 두 번째 접점 (kπ, sin kπ) 이 특수각이 되어 손으로 풀리고, 결과 ab 가 π 의 유리수배로 떨어져야 함.'
    creative: '(1) 두 접선이 이루는 각을 묻기(★3) (2) 첫 곡선을 y=tan(x-c) 로 평행이동하면 접점이 원점이 아니어서 계산이 한 단계 늘어남(★3) (3) 두 접선의 교점의 좌표를 묻기(연립 추가 ★3).'
```

```yaml
- id: RPM-CALC2-0724
  page: 103
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    곡선 y=e^x 위 점 (1, e) 에서의 접선이 곡선 y=2√(x-k) 에 접할 때 상수 k.
  category: '접선 y=ex 확정 → 다른 곡선과 접할 조건(값·기울기 일치) → k'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「직선이 곡선에 접한다」를 「접점에서 함숫값이 같고 도함수값도 같다」는 두 식으로 옮김 — 판별식이 없는 무리함수라 이 이중 조건이 유일한 통로'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선과 곡선이 접할 조건(무리함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1,e) 에서의 접선은 y=ex. y=2√(x-k) 와 접할 조건에서 1/√(x-k)=e 로 x-k=1/e^2 이고, 값 일치 2/e=ex 에서 x=2/e^2 이므로 k=1/e^2. 접촉 조건의 이중 식이 핵심 통찰(EQV d2) → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: '점 (1,e) 접선 y=ex → 기울기 일치 1/√(x-k)=e → 값 일치로 x=2/e^2 → k=1/e^2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{e^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0724.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '접점 (1, e) 와 무리함수 계수 2 를 바꿀 수 있음. 제약: 접선의 기울기가 e 의 거듭제곱으로 남아야 √(x-k) 가 1/e^n 꼴로 떨어지고, k 가 하나의 값으로 확정되도록 무리함수의 정의역이 접점을 포함해야 함.'
    creative: '(1) 접할 때의 접점 좌표나 두 곡선 사이 넓이를 묻기(★3 유지) (2) 2√(x-k) 를 √(ax+b) 로 두고 두 미지수를 찾게 하면 ★4 (3) 「서로 다른 두 점에서 만날」 조건으로 바꾸면 무리부등식 범위 문제가 되어 ★4.'
```

```yaml
- id: RPM-CALC2-0725
  page: 103
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=(2x^2-ax)e^x 이 x=1 에서 극솟값을 가질 때 f(x) 의 극댓값.
  category: 'f''(1)=0 으로 a → f'' 인수분해 → 다른 극점에서 극댓값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수를 정한 뒤 다른 극값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=e^x(2x^2+(4-a)x-a) 에서 f'(1)=6-2a=0 이므로 a=3. 그러면 f'=e^x(2x+3)(x-1) 이라 x=-3/2 에서 극대이고 f(-3/2)=9e^{-3/2}. 미정계수 연립은 표준 절차라 통찰 0 이지만 서술형 구역 출발점 ★3 을 유지(M_total 7).
  tier: star_3
  mechanism_primary: 'f''(1)=0 → a=3 → f''=e^x(2x+3)(x-1) → 극대 x=-3/2 → f(-3/2)=9e^{-3/2}'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$9e^{-\frac{3}{2}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0725.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2x^2 의 계수와 극점 x=1 을 바꿀 수 있음. 제약: f'' 의 이차식이 인수분해돼 다른 극점이 유리수여야 하고, 그 점의 지수 e^{유리수} 가 답으로 쓸 만해야 함.'
    creative: '(1) 극댓값 대신 극댓값과 극솟값의 차를 묻기(★3 유지) (2) 「x=1 에서 극값을 가진다」로 느슨하게 주면 극대·극소 어느 쪽인지 검증이 필요해 ★4 (3) (2x^2-ax)e^{bx} 로 미지수를 둘로 늘리면 ★4.'
```

```yaml
- id: RPM-CALC2-0726
  page: 103
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    f(x)=ln 3x+a/x-2x 가 극댓값과 극솟값을 모두 갖도록 하는 실수 a 의 범위.
  category: '정의역 x>0 에서 f'' 분자 이차식이 서로 다른 두 양근 → 판별식 + 근의 합·곱'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '극대·극소를 모두 가진다 ⟺ 2x^2-x+a=0 이 정의역 x>0 안에서 서로 다른 두 실근 — 판별식만으로는 부족하고 두 근이 모두 양수여야 한다는 위치 조건이 함께 필요'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정의역이 제한된 함수가 극값을 가질 조건(근의 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=1/x-a/x^2-2=-(2x^2-x+a)/x^2 이므로 분자 2x^2-x+a 가 x>0 에서 두 번 부호를 바꿔야 한다. D=1-8a>0 에서 a<1/8, 두 근의 곱 a/2>0 에서 a>0(합 1/2>0 은 자동) → 0<a<1/8. 근의 위치 조건이 핵심 통찰(EQV d2) → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: 'f'' 분자 2x^2-x+a → x>0 에서 서로 다른 두 근 → D>0 및 곱>0 → 0<a<1/8'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<a<\dfrac{1}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0726.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '-2x 의 계수와 ln 3x 의 3 을 바꿀 수 있음(3 은 미분에 영향을 주지 않는 장식). 제약: 분자 이차식의 두 근이 모두 양수가 되도록 일차항 부호를 잡아야 하고, 판별식 경계가 1/8 처럼 유한 유리수로 떨어져야 함.'
    creative: '(1) 「극값을 갖지 않을」 조건으로 뒤집으면 a≥1/8 또는 a≤0 두 갈래가 되어 ★4 (2) a/x 를 a/x^2 로 바꾸면 분자가 삼차식이 되어 0698 골조 ★4 (3) a 범위의 정수 개수를 묻는 형태로 바꾸면 값 판정만 추가돼 ★3 유지.'
```

### 실력 Up

```yaml
- id: RPM-CALC2-0727
  page: 103
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    f(x)=(ln x)/x 에서 기울기가 t 인 접선의 접점의 x좌표를 g(t) 라 하고, 원점에서 그은 접선의 기울기를 a 라 할 때 a×g''(a). 5지선다.
  category: '원점 접선으로 a → g 를 f'' 의 역함수로 보고 g''(a)=1/f''''(g(a)) → 곱'
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '원점에서 그은 접선 조건을 f''(s)=f(s)/s 로 옮기면 (1-ln s)/s^2=ln s/s^2 로 약분돼 ln s=1/2, 접점 s=√e'
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: 'g 는 f'' 의 역함수(f''(g(t))=t)라는 것을 읽어내 g''(a)=1/f''''(g(a)) 로 이계도함수 쪽으로 옮김 — g 의 식을 구하는 것은 불가능'
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'a=f''(√e) 와 g(a)=√e 가 같은 접점을 가리킨다는 것을 연결해 두 조건을 한 점에서 계산'
  insight_count: 3
  depth_score: 6.00
  type_id: null
  type_hint: "접점을 매개로 정의된 역함수의 미분(기울기 함수 g)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'(x)=(1-ln x)/x^2, f''(x)=(2ln x-3)/x^3. 원점 접선의 접점은 √e 이고 a=f'(√e)=1/(2e). g 가 f' 의 역함수이므로 g'(a)=1/f''(√e)=-e^{3/2}/2 이고 a×g'(a)=-√e/4. 통찰 3개(depth 3 포함)로 ★5 후보지만 §2.13 저노출 유형(SC/VF/SYM/XU)이 없어 ★5 를 주지 않고 실력 Up 출발점 ★4 로 둔다. [분류 이슈] ★4 / ★5 판정 보류.
  tier: star_4
  mechanism_primary: '원점 접선 조건 → 접점 √e·a=1/(2e) → g=f''의 역함수 → g''(a)=1/f''''(√e) → a×g''(a)=-√e/4'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0727.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f(x)=(ln x)/x 를 (ln x)/x^2 나 x ln x 로 바꿀 수 있음. 제약: 원점 접선의 접점이 e 의 유리수 거듭제곱으로 떨어져야 하고, f'''' 가 그 점에서 e 의 거듭제곱 하나로 남아야 a×g''(a) 가 선택지 꼴이 됨.'
    creative: '(1) g''(a) 대신 g(a) 나 g 의 정의역을 묻기(★3) (2) 접선을 원점이 아니라 점 (0, c) 에서 긋게 하면 접점 조건에 c 가 들어가 ★5 후보 (3) g 의 단조성·치역을 함께 묻도록 보기형으로 바꾸면 검증 부담(I-VF)이 생겨 진짜 ★5 로 올라갈 수 있음.'
```

```yaml
- id: RPM-CALC2-0728
  page: 103
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    매개변수 곡선 x=2sin θ, y=cos 2θ 위 점 P 에서의 접선이 y=ax+b 일 때 a+b 의 최솟값.
  category: '매개변수 소거(또는 접선 계수의 매개화) → a+b 를 이차식으로 → 최솟값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'x=2sin θ, y=cos 2θ=1-2sin^2 θ 에서 θ 를 소거하면 y=1-x^2/2 (-2≤x≤2) 인 포물선이 되어 매개변수 문제를 다항함수 접선 문제로 전환'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '접점의 x좌표 p 로 a=-p, b=1+p^2/2 를 쓰면 a+b=(1/2)(p-1)^2+1/2 이라 최솟값 문제가 이차함수의 꼭짓점 문제로 바뀜'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "매개변수 곡선의 접선 계수의 최댓값·최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    θ 를 소거하면 y=1-x^2/2 (-2≤x≤2) 이고 접점 x=p 에서 a=-p, b=1+p^2/2. a+b=(1/2)(p-1)^2+1/2 이며 p=1 이 정의역 안이므로 최솟값 1/2. 소거하지 않고 dy/dx=-2sin θ 로 풀어도 같은 이차식이 나온다. 통찰 2개(depth 3) → 실력 Up ★4 유지. p 의 범위 확인이 채점 포인트.
  tier: star_4
  mechanism_primary: 'θ 소거 → y=1-x^2/2 → 접점 p 에서 a=-p, b=1+p^2/2 → a+b=(1/2)(p-1)^2+1/2 → 최솟값 1/2'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0728.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x=k sin θ 의 k 와 y=cos 2θ 의 형태를 바꿀 수 있음. 제약: 소거 결과가 이차곡선으로 남아야 접선 계수가 p 의 이차식이 되고, 꼭짓점 p 가 정의역 -k≤x≤k 안에 들어와야 답이 꼭짓점 값이 됨(밖이면 끝값).'
    creative: '(1) a+b 의 최댓값을 묻기(끝점 p=-2 비교가 필요해 ★4 유지) (2) a-b 나 ab 의 최솟값으로 바꾸면 삼차·사차 최적화가 되어 ★5 후보 (3) 접선이 원점을 지나는 P 를 찾게 하면 방정식 풀이가 되어 ★3.'
```

```yaml
- id: RPM-CALC2-0729
  page: 103
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    x>0 에서 f(x)=cos 2x-2cos x 가 극솟값을 갖는 x 를 작은 것부터 a₁, a₂, … 라 할 때 a₂₂/a₅.
  category: 'f'' 인수분해 → 한 주기 안의 극소점 2개 → 주기 패턴으로 일반항 → 비'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f''=-2sin 2x+2sin x=2sin x(1-2cos x) 로 인수분해해 해를 sin x=0 계열과 cos x=1/2 계열 두 갈래로 분리'
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '부호표를 한 주기(0, 2π) 에서만 만들어 극소가 π/3, 5π/3 두 개뿐임을 확인하고 주기 2π 로 a₂ₖ₋₁=π/3+2(k-1)π, a₂ₖ=5π/3+2(k-1)π 라는 일반항을 세움'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "삼각함수의 극소점 수열(주기성으로 일반항 세우기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'=2sin x(1-2cos x) 의 부호를 (0, 2π) 에서 보면 x=π/3 과 5π/3 이 극소, x=π 와 2π 는 극대다. 주기 2π 로 극소가 두 개씩 반복하므로 a₅=13π/3, a₂₂=65π/3 이고 비는 5. 극대와 극소를 가려내지 않으면 해를 전부 세어 틀리는 함정. 통찰 2개(RT d2 + PD d2) → 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: 'f''=2sin x(1-2cos x) → 한 주기 극소는 π/3, 5π/3 → 일반항 → a₂₂/a₅=(65π/3)/(13π/3)=5'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0729.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2cos x 의 계수와 첨자 (5, 22) 를 바꿀 수 있음. 제약: 계수가 |c|<2 여야 cos x=c/2 가 해를 가져 한 주기에 극소 2개 구조가 유지되고, 두 첨자의 홀짝 조합이 비를 정수로 만들어야 함.'
    creative: '(1) a₅ 나 극솟값 자체를 묻기(★3) (2) 구간을 x>0 대신 x<0 까지 넓히면 번호 매기기가 달라져 ★4 유지 (3) 극댓값을 갖는 x 수열과 섞어 두 수열의 합·차를 묻게 하면 ★5 후보.'
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 0 · ★2 13 · ★3 17 · ★4 6 · ★5 0
- 통찰형 17 · 절차형 19 · premium 0 (insights 가 비어 있지 않은 블록은 24)
- insight 유형 분포: I-EQV 15 · I-RT 6 · I-CON 3 · I-MI 1 · I-SYM 1 · I-PD 1 (총 27개 라벨)
- 구역별 ★ 중앙값: 유형 UP 19/20 ★3~4 · 시험에 꼭 나오는 문제 ★2~3 · 서술형 주관식 ★3 · 실력 Up ★4
- type_hint 상위 5(골조 묶음): 「극값을 가질/갖지 않을 조건 — f' 분자의 근 조건」 8(0694~0699·0722·0726) · 「곡선 위의 점에서의 접선·법선」 8(0700·0701·0702·0709·0710·0711·0723·0728) · 「곡선 밖의 점에서 그은 접선·두 곡선의 접촉」 7(0703~0707·0724·0727) · 「극대·극소의 값 구하기」 7(0717~0721·0725·0729) · 「증가·감소 구간과 조건」 3(0714~0716)
- 나머지: 「역함수·이계도함수·보기형」 3(0708·0712·0713)
- 그림: 0문(이 범위에는 figure 가 있는 문항이 없음)
- 답 재확인: 36문 모두 전사본 answer 와 일치. 「전사 답 확인 필요」 항목 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 엇갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0695 | 「유형 UP」 구역 신호(★3 출발)와 vendor level 「중」(★2 출발)이 충돌. 구역 쪽을 택해 ★3 으로 두었으나 실제 계산량은 M_total 6 으로 가볍다 | ★2 / ★3 |
| RPM-CALC2-0723 | 「서술형 주관식」 구역 출발점 ★3 을 유지했지만 통찰 0·표준 접선 2단 연쇄라 체감은 ★2 | ★2 / ★3 |
| RPM-CALC2-0727 | 통찰 3개·depth 3 으로 v3.8 ★5 후보이나 §2.13 저노출 유형(SC/VF/SYM/XU)이 없어 ★4 로 둠. 카탈로그 생성 시 재산정 대상 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「극값 조건 → 도함수 분자의 근 조건」은 *판별식으로 끝나는 것*(0694·0695·0698 형)과 *정의역·치역 제한이 붙어 근의 분리가 필요한 것*(0696·0697·0699·0722·0726 형)으로 반드시 갈라야 한다. 벤더도 유형 UP 19/20 으로 나눠 두었고, 실제 ★ 차이도 1단 이상 난다. (2) 「곡선 밖의 점에서 그은 접선」은 *접점을 매개로 한 방정식의 근 개수*(0705·0727)와 *두 점이 주어져 기울기가 즉시 확정되는 것*(0703)이 난이도가 달라 0703 은 「곡선 위의 점 접선」 쪽으로 통합하는 편이 정확하다.
- **통합해도 될 유형**: 「두 곡선이 접할 조건」(0707·0724)과 「두 곡선의 교점에서 접선이 수직」(0706)은 모두 *접점에서의 값·도함수 조건 연립*이라 하나의 base 유형 아래 변형으로 두어도 된다. 「분수·지수·로그·삼각함수의 극대와 극소」(0717~0721)도 골조가 전부 「미분 → 부호표 → 값」이라 함수 종류별로 쪼개지 말고 단일 유형 + 함수군 태그로 두는 편이 낫다.
- **base ★ 제안**: 위 묶음 기준으로 극값 조건(판별식형) base ★3 · 극값 조건(근의 분리형) base ★4 · 곡선 위의 점 접선 base ★2 · 곡선 밖 점 접선 base ★3 · 극값 구하기 base ★2 · 구간 증감 조건 base ★3 · 매개변수 접선 base ★3.
- **저노출 유형 공백**: 이 범위 36문에는 I-SC·I-VF 가 한 번도 나오지 않았고 I-SYM·I-XU 도 각각 1회·0회다. ★5 슬롯을 만들려면 이 단원 밖(수열·기하 결합)이나 사후 검증이 강제되는 설정을 새로 설계해야 한다.
