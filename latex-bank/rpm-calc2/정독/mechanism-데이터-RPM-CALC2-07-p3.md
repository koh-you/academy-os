---
name: mechanism-데이터-RPM-CALC2-07-p3
description: RPM 미적분Ⅱ 07 도함수의 활용 (2)(3/4 · 유형 10~18) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 07 도함수의 활용 (2)
  unit_code: CALC2-07
  part: "3/4"
  extract_range: "112~116쪽 · 0795~0824"
  total_problems: 30
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 07 도함수의 활용 (2) (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 07 도함수의 활용 (2) 단원의 셋째 범위(112~116쪽 · 0795~0824 · 30문항)를 다룬다. 구역은 「유형 10 삼각함수의 최대·최소」 4문 · 「유형 11 치환을 이용한 함수의 최대·최소」 3문 · 「유형 12 방정식 f(x)=k 의 실근의 개수」 3문 · 「유형 13 방정식 f(x)=g(x) 의 실근의 개수」 3문 · 「유형 14 부등식 f(x)≥a 의 꼴」 4문 · 「유형 15 부등식 f(x)≥g(x) 의 꼴」 3문 · 「유형 16 직선 운동에서의 속도와 가속도」 3문 · 「유형 17 평면 운동에서의 속도」 4문 · 「유형 18 평면 운동에서의 가속도」 3문으로, 전 범위가 유형 구역이며 교과서·서술형 주관식·실력 Up 구역은 없다. 벤더 신호는 대표문제 9(0795 · 0799 · 0802 · 0805 · 0808 · 0812 · 0815 · 0818 · 0822 · level 없음) · 중하 1(0796) · 중 18 · 상중 2(0804 · 0814) · 서술형 3(0798 · 0811 · 0821)이고 그림은 0문이다. RPM 은 구역이 곧 난이도 층이므로 유형 구역의 level(중하 ★1~2 · 중 ★2 · 상중 ★3 · 대표문제 ★2)을 출발점으로 두고 M_total·통찰로만 ±1 조정했다. 결과는 ★2 26문 · ★3 4문(0804 · 0805 · 0807 · 0814)이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₖ 는 미분 한 번에 간단한 정리면 1, 곱·몫의 미분이나 삼각 항등식·지수로그 정리가 붙으면 2, 다단계 대수 처리면 3 으로, Mₐ 는 구체 수치 1 · 미정계수(a · k · p, q) 포함 2 로 매겼다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 이며 이 범위에서 자주 나온 함정은 T-범위(치환한 변수의 범위 · 정의역 x>0 · 시각 t>0), T-부호(x 의 부호로 분리되는 분기 · 제곱근을 풀 때의 ±), T-경계(등호 포함 여부 · 강부등호)다. 최대·최소 유형(10 · 11)과 운동 유형(16~18)은 「미분 → f'=0 → 증감·끝점 비교」 또는 「미분 → 조건 대입 → 미정계수」 의 같은 골조라 통찰을 세지 않았고, 통찰은 방정식·부등식을 분리해 그래프의 교점·최댓값 문제로 옮기는 단계(I-RT · I-EQV), 분기를 모두 따져야 하는 0804(I-MI), 기함수 대칭으로 근을 쌍으로 묶는 0807(I-SYM), 증가 조건 갈래를 고르는 0814(I-SC)에만 붙였다. 전사 답은 30문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0). 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다.

## 문항 데이터

### 유형 10 삼각함수의 최대·최소

```yaml
- id: RPM-CALC2-0795
  page: 112
  vendor_label: "유형 10 삼각함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [0, 2π] 에서 f(x)=x sin x + cos x 의 최댓값과 최솟값의 합. 5지선다.
  category: "곱의 미분 → f'(x)=x cos x → 극값·끝점 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간이 주어진 삼각함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=sin x + x cos x - sin x = x cos x 로 항이 상쇄되는 것이 이 유형의 출발점.
    f'=0 인 x=0, π/2, 3π/2 와 끝점 2π 에서 f 를 비교하면 최대 π/2, 최소 -3π/2.
    합은 -π. 미분 한 번과 네 값 비교의 표준 골조라 통찰 없음. 유형 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x)=x cos x → x=0, π/2, 3π/2 와 끝점의 함숫값 비교 → π/2 + (-3π/2) = -π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0795.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 [0, π] · [0, 3π] 로 바꾸거나 f(x)=x cos x - sin x 처럼 상쇄가 일어나는 다른 조합으로. 제약: 도함수가 x cos x · x sin x 같은 한 항이 되도록 짝을 맞춰야 하고, f'=0 의 해가 구간 안 특수각이어야 한다."
    creative: "(1) 최댓값만 묻기(★2 유지) (2) 최댓값을 주고 구간의 오른쪽 끝을 미정계수로 두면 역방향 ★3 (3) f(x)=x sin x + cos x 의 그래프와 y=k 의 교점 개수로 바꾸면 I-RT 가 생겨 ★3."
```

```yaml
- id: RPM-CALC2-0796
  page: 112
  vendor_label: "유형 10 삼각함수의 최대·최소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<x<π 에서 f(x)=(2-cos x)/sin x 의 최솟값. 5지선다.
  category: "몫의 미분 → 삼각 항등식 정리 → f'=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 분수식의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분 뒤 분자를 sin²x + cos²x = 1 로 정리하면 f'=(1-2cos x)/sin²x.
    분모가 양수라 부호는 1-2cos x 가 결정하고 x=π/3 에서 감소→증가로 바뀌어 최소 √3.
    개구간이라 끝점 후보가 없는 대신 증감으로 최소임을 확인해야 한다. 중하 구역이나
    몫의 미분 + 항등식 정리로 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=(1-2cos x)/sin^2 x → cos x=1/2 → x=π/3 에서 최소 √3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0796.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수 2 를 3 · 4 로(최솟값이 √(k²-1) 꼴로 바뀜) 또는 (2+cos x)/sin x 로. 제약: 상수가 1 보다 커야 f'=0 의 해 cos x=1/k 가 개구간 안에 있고 최솟값이 무리수로 깔끔하다."
    creative: "(1) 최솟값을 갖는 x 를 묻기(★2 유지) (2) (a-cos x)/sin x 의 최솟값이 2 일 때 a 를 묻는 역방향(★3) (3) 0<x<π 를 [π/6, π/2] 같은 폐구간으로 바꾸면 끝점 비교가 추가돼 M_total +1 ★2 유지."
```

```yaml
- id: RPM-CALC2-0797
  page: 112
  vendor_label: "유형 10 삼각함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, 2π] 에서 f(x)=(2-cos x)cos x 의 최댓값 M, 최솟값 m 에 대한 M-m.
  category: "곱의 미분 → f'=2 sin x(cos x - 1) → 극값·끝점 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "cos x 의 이차식 꼴 삼각함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=2 sin x cos x - 2 sin x = 2 sin x(cos x - 1) → f'=0 인 x=0, π, 2π.
    f(0)=f(2π)=1, f(π)=-3 → M=1, m=-3, M-m=4.
    t=cos x 로 놓으면 2t-t² 의 [-1,1] 최대·최소로도 같은 답이지만 단순 치환이라
    통찰로 세지 않았다. 중 구역·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=2 sin x(cos x - 1) → x=0, π, 2π → M=1, m=-3 → M-m=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0797.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 를 다른 값 a 로 바꾸면 t=cos x 이차식 (a-t)t 의 꼭짓점이 t=a/2 로 이동한다. 제약: a ≥ 2 이면 최댓값이 t=1(끝점)에서 나고 0<a<2 이면 꼭짓점에서 나므로 답 구조가 달라진다 — 어느 쪽을 의도하는지 정하고 수를 고른다."
    creative: "(1) M+m 이나 M·m 으로 묻는 값을 바꾸기(★2 유지) (2) 상수를 a 로 두고 M-m=4 가 되는 a 를 묻는 역방향(★3 · I-BW) (3) sin x 의 이차식 (2-sin x)sin x 로 바꾸면 구간 안 대칭 때문에 극점이 늘어 M_total +1."
```

```yaml
- id: RPM-CALC2-0798
  page: 112
  vendor_label: "유형 10 삼각함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    0 ≤ x ≤ π/2 에서 f(x)=a(x - sin 2x) (a는 양수) 의 최댓값이 π 일 때 최솟값. 서술형.
  category: "f'=0 으로 극소점 → 끝점에서 나는 최댓값으로 a 결정 → 극솟값 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최댓값 조건으로 미정계수를 정하는 삼각함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=a(1-2cos 2x)=0 → cos 2x=1/2, 0 ≤ 2x ≤ π 에서 2x=π/3 → x=π/6 에서 감소→증가.
    최댓값은 극값이 아니라 끝점 f(π/2)=aπ/2 이므로 aπ/2=π → a=2.
    최솟값 f(π/6)=2(π/6 - √3/2)=π/3 - √3. 2x 의 범위를 먼저 좁히는 것이 유일한 함정.
    표준 미정계수 절차라 통찰 없음 · 중 구역 ★2.
  tier: star_2
  mechanism_primary: "f'(x)=a(1-2cos 2x)=0 → x=π/6(극소) → 최댓값은 끝점 f(π/2)=aπ/2=π → a=2 → f(π/6)=π/3-√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{3}-\sqrt{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0798.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 π 를 2π · π/2 로 바꾸면 a 만 비례해서 바뀐다. sin 2x 의 계수나 x 의 계수를 바꾸려면(예: 2x - sin 2x) f'=0 의 해가 구간 안 특수각이 되도록 맞춘다. 제약: a>0 이어야 극소·끝점 최대 구조가 유지된다."
    creative: "(1) 최솟값을 주고 최댓값을 묻기(대칭 변형 ★2) (2) 구간을 [0, π] 로 넓히면 f'=0 의 해가 두 개가 되어 극대·극소가 모두 생기고 비교 대상이 늘어 ★3 (3) 최댓값이 극값에서 나도록 a 를 음수로 허용하면 부호 분기가 생겨 I-MI ★3."
```

### 유형 11 치환을 이용한 함수의 최대·최소

```yaml
- id: RPM-CALC2-0799
  page: 113
  vendor_label: "유형 11 치환을 이용한 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=cos x sin²x + 3 의 최댓값 M, 최솟값 m 에 대한 M+m. 5지선다.
  category: "sin²x=1-cos²x → t=cos x 치환 → [-1,1] 에서 삼차함수의 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 삼각함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin²x 를 1-cos²x 로 바꾼 뒤 t=cos x ∈ [-1,1] 로 치환하면 g(t)=t-t³+3.
    g'(t)=1-3t²=0 → t=±1/√3 에서 극대 3+2√3/9, 극소 3-2√3/9, 끝점 g(±1)=3 은 사이 값.
    M+m=6. g 가 (0,3) 대칭인 기함수+3 이라 합이 6 임을 바로 보는 길도 있지만
    표준 풀이는 두 극값 계산이라 통찰로 세지 않았다. 대표문제 ★2.
  tier: star_2
  mechanism_primary: "t=cos x ∈ [-1,1] → g(t)=t-t^3+3 → t=±1/√3 의 극값 합 → M+m=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0799.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 3 은 M+m 을 2배만큼만 움직이므로 자유롭게. 차수 조합을 cos²x sin²x · cos x sin²x 처럼 바꿀 수 있다. 제약: 치환 뒤 t 의 홀수 차수만 남아야 극값이 상수항 대칭으로 깔끔하게 상쇄되고, 극점 ±1/√3 이 [-1,1] 안에 있어야 한다."
    creative: "(1) M 또는 m 만 묻기(계산이 남아 ★2 유지) (2) g 가 상수항 대칭임을 근거로 M+m 을 즉시 구하게 만들면 I-SYM d2 가 붙어 ★3 (3) 구간을 [0, π/2] 로 제한해 t 범위를 [0,1] 로 줄이면 끝점 비교가 답을 가르므로 T-경계 함정 추가 ★2~3."
```

```yaml
- id: RPM-CALC2-0800
  page: 113
  vendor_label: "유형 11 치환을 이용한 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=27^x - 2×3^(x+1) + 4 의 최솟값. 5지선다.
  category: "지수법칙으로 3^x 통일 → t=3^x (t>0) 치환 → 삼차함수의 최솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 지수함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27^x=(3^x)³, 2·3^{x+1}=6·3^x 로 정리해 t=3^x>0 치환 → g(t)=t³-6t+4.
    g'(t)=3t²-6=0 → t=√2(양수 쪽만 유효) → 최솟값 2√2-6√2+4=4(1-√2).
    t>0 이라는 치환 범위가 유일한 함정. 중 구역·통찰 없음 ★2.
  tier: star_2
  mechanism_primary: "27^x=(3^x)^3, 2·3^{x+1}=6·3^x → g(t)=t^3-6t+4 (t>0) → t=√2 → 4(1-√2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0800.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 2 로(8^x - k·2^x 꼴), 일차항 계수 6 을 3 · 12 로. 제약: g'(t)=0 의 양근이 무리수라도 최솟값이 정리되는 값이어야 하고, 음근은 t>0 에서 버려진다는 점을 유지해야 치환 범위 함정이 살아 있다."
    creative: "(1) 최솟값을 주고 일차항 계수를 묻는 역방향(★3) (2) 구간 -1 ≤ x ≤ 1 을 주어 t 범위를 [1/3, 3] 으로 막으면 끝점 비교가 추가돼 ★2~3 (3) 9^x·3^x 형태로 바꾸어 지수법칙 정리 단계를 한 겹 늘리면 Mₖ +1."
```

```yaml
- id: RPM-CALC2-0801
  page: 113
  vendor_label: "유형 11 치환을 이용한 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/4 ≤ x ≤ 2 에서 f(x)=(log₂x)³ - 6 log₄x - 5 의 최댓값 M, 최솟값 m 에 대한 M-m.
  category: "밑 통일(log₄x = log₂x / 2) → t=log₂x 치환 → 구간 [-2,1] 의 삼차함수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 로그함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log₄x=(log₂x)/2 로 밑을 맞춰 -6 log₄x = -3 log₂x, t=log₂x 로 치환하면 g(t)=t³-3t-5.
    x 범위 [1/4, 2] → t 범위 [-2, 1]. g'=3t²-3=0 → t=±1, g(-1)=-3(극대), g(1)=-7,
    g(-2)=-7 → M=-3, m=-7, M-m=4. 밑 변환과 치환 구간 환산 두 함정(Mₜ=2).
    중 구역·통찰 없음 ★2.
  tier: star_2
  mechanism_primary: "log₄x=(log₂x)/2 → t=log₂x ∈ [-2,1] → g(t)=t^3-3t-5 → M=g(-1)=-3, m=g(-2)=g(1)=-7 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0801.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 구간을 [1/8, 4] 로 넓히면 t 범위가 [-3,2] 가 되어 끝점이 최댓값을 가져간다. 계수 6(=3·2) 은 밑 변환 뒤 정수가 되도록 짝수로 유지. 제약: t 구간 끝값에서의 g 와 극값이 서로 다른 값이어야 M-m 이 의미 있다."
    creative: "(1) 최댓값을 갖는 x 를 묻기(로그 되돌리기 한 단계 추가 ★2) (2) log₈x 를 섞어 밑이 셋이 되게 하면 Mₖ +1 (3) M-m=4 가 되도록 x 구간의 오른쪽 끝을 정하게 하면 I-BW ★3."
```

### 유형 12 방정식 $f(x)=k$의 실근의 개수

```yaml
- id: RPM-CALC2-0802
  page: 113
  vendor_label: "유형 12 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 ln x - x - a = 0 이 서로 다른 두 실근을 갖도록 하는 실수 a 의 값의 범위. 5지선다.
  category: "a 분리 → y=ln x - x 의 극대 → 수평선 y=a 와의 교점 2개 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식을 h(x)=a 로 분리해 곡선과 수평선의 교점 개수 문제로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k 의 실근의 개수(분리 후 수평선 교점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln x - x = a 로 분리하고 h(x)=ln x - x (x>0) 를 그리면 h'=1/x-1=0 → x=1 에서 극대 h(1)=-1,
    양 끝에서 -∞ 로 발산. 수평선 y=a 와 두 점에서 만날 조건은 a<-1.
    정의역 x>0 과 a=-1 경계(접할 때 한 근)가 함정. 분리·그래프 전환 I-RT d1 하나라
    절차형으로 두고 유형 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "ln x - x = a 로 분리 → h 의 극대 h(1)=-1 → 교점 2개 ⟺ a < -1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0802.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln x - 2x · 2 ln x - x 처럼 계수를 바꾸면 극댓값이 -1 대신 ln(1/2)-1 꼴로 바뀐다. 제약: 극댓값이 로그 한 번으로 표현되는 값이어야 선택지가 깔끔하고, x>0 에서 양 끝 발산 구조는 유지해야 한다."
    creative: "(1) 실근의 개수를 1개·0개로 바꿔 묻기(★2 유지) (2) a 의 범위가 아니라 두 실근의 곱·합의 범위를 묻기(★4 · 추가 통찰) (3) ln x - x = ax 처럼 기울기 매개변수로 바꾸면 원점을 지나는 직선과의 접선 조건이 되어 ★3."
```

```yaml
- id: RPM-CALC2-0803
  page: 113
  vendor_label: "유형 12 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 e^x - 3x = k 가 실근을 갖도록 하는 실수 k 의 최솟값.
  category: "좌변의 최솟값 → 치역으로 k 조건 환산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실근 존재를 곡선 y=e^x-3x 와 수평선 y=k 가 만날 조건(치역)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k 가 실근을 가질 조건(극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h(x)=e^x-3x, h'=e^x-3=0 → x=ln 3 에서 최소 h(ln 3)=3-3 ln 3.
    아래로만 유계이고 양쪽으로 +∞ 이므로 치역은 [3-3ln 3, ∞) → k ≥ 3-3ln 3.
    최솟값이 곧 답. 분리·그래프 전환 d1 한 개라 절차형, 중 구역 ★2.
  tier: star_2
  mechanism_primary: "h'=e^x-3=0 → x=ln 3 → 최솟값 3-3 ln 3 → 실근 존재 ⟺ k ≥ 3-3 ln 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3-3\ln 3$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0803.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 을 2 · 4 · e 로 바꾸면 최솟값이 a - a ln a 꼴로 바뀐다. 제약: 계수가 양수여야 e^x=a 의 해가 존재하고 최솟값이 생긴다(음수면 단조증가라 항상 실근)."
    creative: "(1) 서로 다른 두 실근 조건으로 바꾸면 k > 3-3ln 3(경계 제외)이 되어 T-경계 강화 ★2 (2) e^x - 3x = kx 로 바꾸면 접선 조건 ★3 (3) 실근의 개수를 k 의 구간별로 모두 분류하게 하면 I-MI 추가 ★3."
```

```yaml
- id: RPM-CALC2-0804
  page: 113
  vendor_label: "유형 12 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 3/x = -x³ + k 가 서로 다른 두 실근을 갖도록 하는 k 의 범위가 k<α 또는 k>β 일 때 β-α. 5지선다.
  category: "k 분리 → h(x)=x³+3/x 의 x>0·x<0 두 분기 → 분기별 근 개수 합산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k=x³+3/x 로 분리해 곡선과 수평선의 교점 개수 문제로 전환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x>0 과 x<0 이 각각 독립된 그래프 가지를 만들어 두 분기의 근 개수를 모두 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "분리한 함수의 두 분기로 실근의 개수를 세는 문제"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 x 를 곱하지 않고 k=x³+3/x 로 분리하는 것이 관건(x=0 제외).
    h'(x)=3(x⁴-1)/x² → x>0 에서 x=1 이 극소 h(1)=4, x<0 에서 x=-1 이 극대 h(-1)=-4.
    x>0 가지는 [4, ∞), x<0 가지는 (-∞, -4] 를 훑으므로 두 실근 ⟺ k>4 또는 k<-4.
    α=-4, β=4 → β-α=8. 벤더 상중 ★3 과 통찰 2개 판정이 일치.
  tier: star_3
  mechanism_primary: "k=x^3+3/x 로 분리 → h'=3(x^4-1)/x^2 → x>0 최소 4, x<0 최대 -4 → 두 실근 ⟺ k>4 또는 k<-4 → β-α=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0804.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3 을 다른 양수 c 로 바꾸면 극값이 ±(1+c)·c^(1/4) 꼴이 된다. 제약: h 가 기함수이도록 x³ 과 c/x 의 홀수 차수를 유지해야 α=-β 대칭이 살아 β-α 가 2β 로 간단해진다. c 는 네제곱근이 정리되는 값(3 · 1 · 16/… )으로."
    creative: "(1) 실근이 1개·3개일 조건으로 바꾸기(경계 k=±4 포함 여부가 답을 가름 ★3) (2) h 가 기함수임을 먼저 관찰하게 유도하면 I-SYM 으로 풀이가 반으로 줄어 ★3 유지·체감 하락 (3) 3/x 를 3/x² 로 바꾸면 우함수가 되어 분기 구조와 답 형태가 완전히 달라진다(★3)."
```

### 유형 13 방정식 $f(x)=g(x)$의 실근의 개수

```yaml
- id: RPM-CALC2-0805
  page: 114
  vendor_label: "유형 13 방정식 $f(x)=g(x)$의 실근의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    2x² = a ln x (a>0) 에 대하여 ㄱ(a=2e 이면 실근 없음) ㄴ(a=4e 이면 실근 한 개) ㄷ(a=6e 이면 실근 두 개) 중 옳은 것. 5지선다.
  category: "h(x)=2x²-a ln x 의 최솟값 부호로 실근 개수 판정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 곡선의 교점 개수를 h(x)=2x²-a ln x 의 최솟값 부호(양·0·음)라는 단일 조건으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선의 교점 개수(차 함수의 최솟값 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h(x)=2x²-a ln x (x>0), h'=(4x²-a)/x=0 → x=√a/2 에서 최소이고
    최솟값은 (a/2){1 - ln(a/4)}. a>0 이므로 부호는 1-ln(a/4) 가 결정 → a=4e 가 접하는 경계.
    a<4e 면 최솟값>0 (근 없음), a=4e 면 0 (한 근), a>4e 면 <0 (두 근) → ㄱㄴㄷ 모두 참.
    [분류 이슈] 벤더는 level 없는 대표문제(★2 출발)이나 매개변수 최솟값 식 + 세 값 판정으로 M_total 9 → ★3 으로 올림.
  tier: star_3
  mechanism_primary: "h(x)=2x^2-a ln x → 최솟값 (a/2){1-ln(a/4)} → 부호로 근 0·1·2개 → a=4e 가 경계"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0805.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x² 의 계수와 보기의 a 값(2e · 4e · 6e)을 함께 바꾼다. 제약: 경계가 되는 a 가 ke 꼴로 떨어지도록 계수를 잡아야 보기 세 값을 경계 좌·경계·경계 우로 배치할 수 있다."
    creative: "(1) 보기 형식을 버리고 서로 다른 두 실근 조건 a 의 범위로 바꾸면 ★3 유지·문항이 짧아짐 (2) 접할 조건을 f=g, f'=g' 연립으로 풀게 하면 전략이 갈려 I-SC 추가 ★4 후보 (3) 2x² 대신 x³ 을 쓰면 최솟값 식이 지저분해져 Mₖ +1."
```

```yaml
- id: RPM-CALC2-0806
  page: 114
  vendor_label: "유형 13 방정식 $f(x)=g(x)$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 e^x = ax 가 서로 다른 두 실근을 갖도록 하는 실수 a 의 값의 범위.
  category: "a=e^x/x 분리 → x>0·x<0 분기 → x>0 가지의 최솟값 e"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식을 a=e^x/x 로 분리해 곡선과 수평선의 교점 개수로 전환(또는 원점을 지나는 직선의 접선 조건)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 e^x=ax 의 실근의 개수(분리 또는 접선 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 은 근이 아니므로 a=e^x/x 로 분리. h'(x)=e^x(x-1)/x² → x>0 에서 x=1 이 극소 h(1)=e 이고
    양 끝에서 +∞, x<0 에서는 음수이며 단조라 값마다 근 하나씩.
    따라서 두 실근 ⟺ a>e. 원점을 지나는 접선의 기울기 e 로 보는 풀이도 같은 답.
    분리 전환 d1 하나라 절차형, 중 구역 ★2.
  tier: star_2
  mechanism_primary: "a=e^x/x → h'=e^x(x-1)/x^2 → x>0 에서 최소 h(1)=e → 두 실근 ⟺ a>e"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$a>e$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0806.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x 를 e^{2x} · 2^x 로 바꾸면 접점이 x=1/2 · x=1/ln 2 로 이동하고 경계값이 2e · e ln 2 가 된다. 제약: 접점의 좌표가 깔끔하게 떨어지는 밑·지수를 고른다."
    creative: "(1) 실근이 없을 조건·한 개일 조건으로 바꾸면 a<0 가지까지 따져야 해 I-MI 추가 ★3 (2) e^x=a(x-1) 처럼 직선을 평행이동하면 접점 계산이 한 겹 늘어 ★3 (3) 두 실근의 차가 최소가 되는 a 를 묻는 확장은 ★4."
```

```yaml
- id: RPM-CALC2-0807
  page: 114
  vendor_label: "유형 13 방정식 $f(x)=g(x)$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [-π/2, π/2] 에서 방정식 sin 2x = kx 가 서로 다른 세 실근을 갖도록 하는 실수 k 의 범위.
  category: "x=0 은 항상 근 → 우함수 대칭으로 0 아닌 근이 쌍 → 양의 근 1개 조건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x≠0 에서 k=sin 2x / x 로 분리해 곡선과 수평선의 교점 문제로 전환"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=0 이 항상 근이고 sin 2x / x 가 우함수라 나머지 근이 ±쌍으로 나오므로 세 실근 조건이 양의 근 1개 조건으로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원점을 지나는 직선과 삼각함수 곡선의 교점 개수(대칭 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=0 은 k 와 무관하게 늘 근이므로 나머지 두 근을 x≠0 에서 찾아야 한다.
    k=sin 2x / x 는 우함수이고 (0, π/2] 에서 x→0+ 극한 2 부터 x=π/2 의 0 까지 감소하므로
    0 ≤ k < 2 일 때만 양의 근이 정확히 하나, 대칭으로 음의 근도 하나 → 세 실근.
    k=0(x=±π/2 가 근)은 포함, k=2 는 극한값이라 제외되는 경계가 핵심 함정.
    [분류 이슈] 벤더 「중」(★2)이나 대칭 환원과 양쪽 경계 처리로 ★3 판정.
  tier: star_3
  mechanism_primary: "x=0 은 항상 근 → x≠0 에서 k=sin 2x/x (우함수, (0,π/2] 에서 2→0 감소) → 0 ≤ k < 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0\le k<2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0807.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 2x 를 sin 3x · sin x 로 바꾸면 x→0 극한이 3 · 1 로 바뀌고 구간 끝 sin 값이 0 이 되도록 구간도 함께 맞춰야 한다. 제약: 구간 끝에서 sin=0 이어야 k=0 이 답에 포함되는 구조가 유지된다."
    creative: "(1) 실근이 한 개일 조건(k ≥ 2 또는 k<0)으로 뒤집기(★3 유지) (2) 구간 제한을 없애면 근이 무한히 생겨 개수 세기가 달라짐 — 유한 구간이 필수 (3) sin 2x = k(x-1) 처럼 직선을 옮기면 대칭이 깨져 접선 조건 계산이 필요해지고 ★4."
```

### 유형 14 부등식 $f(x)\ge a$의 꼴

```yaml
- id: RPM-CALC2-0808
  page: 114
  vendor_label: '유형 14 부등식 $f(x)\ge a$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대하여 e^{2x} - 2x ≥ k 가 성립하도록 하는 실수 k 의 최댓값. 5지선다.
  category: "항상 성립 조건 → 좌변의 최솟값 ≥ k 로 동치 변환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "모든 x 에서 성립한다는 조건을 (좌변의 최솟값) ≥ k 하나로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h(x)=e^{2x}-2x, h'=2e^{2x}-2=0 → x=0 에서 최소 h(0)=1.
    모든 실수에서 h(x) ≥ k ⟺ 1 ≥ k → k 의 최댓값 1.
    유형 14 의 기본 동치 변환 한 단계뿐이라 절차형, 대표문제 ★2.
  tier: star_2
  mechanism_primary: "h'=2e^{2x}-2=0 → x=0 → 최솟값 1 → k ≤ 1, 최댓값 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0808.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{2x}-2x 의 계수를 e^{ax}-bx 로 일반화하면 최솟값이 b/a{1-ln(b/a)} 꼴. 제약: a, b 가 같은 부호여야 최솟값이 존재하고, b/a 가 1 이나 e 꼴이면 답이 정수·간단한 로그로 떨어진다."
    creative: "(1) 최댓값이 아니라 성립하는 k 의 범위를 묻기(★2 유지) (2) 구간을 x ≥ 1 로 제한하면 최소가 끝점으로 옮겨가 T-경계 함정 추가 ★2 (3) e^{2x} ≥ 2x + k 를 e^{2x} ≥ kx 처럼 기울기 꼴로 바꾸면 x 부호 분기가 생겨 ★3(유형 15 로 이동)."
```

```yaml
- id: RPM-CALC2-0809
  page: 114
  vendor_label: '유형 14 부등식 $f(x)\ge a$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>-1 일 때 3x + k ≥ ln(x+1) 이 성립하도록 하는 실수 k 의 최솟값.
  category: "k ≥ ln(x+1) - 3x 로 정리 → 우변의 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식을 k 에 대해 정리해 (우변의 최댓값) ≤ k 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간에서 성립하는 부등식과 최댓값(로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k ≥ ln(x+1) - 3x 로 옮기고 g(x)=ln(x+1)-3x (x>-1) 의 최댓값을 찾는다.
    g'=1/(x+1)-3=0 → x=-2/3 에서 극대이자 최대 g(-2/3)=ln(1/3)+2=2-ln 3.
    따라서 k ≥ 2-ln 3, 최솟값 2-ln 3. 정의역 x>-1 만 챙기면 되는 표준 절차 ★2.
  tier: star_2
  mechanism_primary: "k ≥ ln(x+1)-3x → g'=1/(x+1)-3=0 → x=-2/3 → 최댓값 2-ln 3 → k 의 최솟값 2-ln 3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2-\ln 3$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0809.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x 의 계수를 2 · 4 로 바꾸면 극점이 x=1/a-1, 최댓값이 1-ln a 꼴이 된다. ln(x+1) 을 ln(x+2) 로 평행이동해도 구조는 같다. 제약: 계수가 양수여야 최댓값이 존재한다(음수면 위로 발산)."
    creative: "(1) 부등호를 뒤집어 3x + k ≤ ln(x+1) 로 하면 우변이 위로 유계가 아니라 해가 없음 — 성립하지 않는 이유를 묻는 참·거짓 문항(★3) (2) 정수 k 의 최솟값으로 바꾸면 2-ln 3 의 값 비교가 추가돼 ★2~3 (3) x>-1 을 x ≥ 0 으로 좁히면 최대가 끝점으로 옮겨 ★2."
```

```yaml
- id: RPM-CALC2-0810
  page: 114
  vendor_label: '유형 14 부등식 $f(x)\ge a$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x ≥ 0 일 때 sin 2x < 2x + k 가 성립하도록 하는 정수 k 의 최솟값.
  category: "k > sin 2x - 2x 로 정리 → 우변의 최댓값 → 강부등호 경계 처리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식을 k 에 대해 정리해 (우변의 최댓값)과 k 의 대소 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "강부등호가 붙은 부등식의 정수 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=sin 2x - 2x 로 두면 g'=2cos 2x - 2 ≤ 0 이라 x ≥ 0 에서 감소, 최대는 g(0)=0.
    강부등호이고 최댓값 0 이 x=0 에서 실제로 잡히므로 k ≥ 0 이 아니라 k>0 이 조건 →
    정수 최솟값은 1. 등호 포함 여부가 답을 1 과 0 으로 가르는 T-경계가 이 문항의 핵심.
    동치 변환 d1 하나라 절차형, 중 구역 ★2.
  tier: star_2
  mechanism_primary: "g(x)=sin 2x-2x 는 감소 → 최댓값 g(0)=0 → k>0 → 정수 최솟값 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0810.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 2x - 2x 의 계수를 sin 2x - x 로 바꾸면 g' 의 부호가 바뀌는 점이 생겨 최댓값이 0 이 아닌 값이 된다. 제약: 계수를 그대로 두어(sin ax - ax 꼴) 최댓값이 정확히 0 이어야 정수 답이 경계에서 갈린다."
    creative: "(1) 부등호를 ≤ 로 바꾸면 정수 최솟값이 0 이 되어 같은 골조로 답만 달라지는 쌍둥이 문항 (2) x ≥ 0 을 모든 실수로 넓히면 g 가 위로 발산해 성립하는 k 가 없음(반례 찾기 ★3) (3) sin 2x < ax + k 처럼 기울기까지 미정계수로 두면 두 매개변수 분기 ★4."
```

```yaml
- id: RPM-CALC2-0811
  page: 114
  vendor_label: '유형 14 부등식 $f(x)\ge a$의 꼴'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x>0 일 때 (ln x)² - 2 ln x ≥ k 가 성립하도록 하는 실수 k 의 최댓값. 서술형.
  category: "t=ln x 치환 → 이차식의 최솟값 ≥ k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "항상 성립 조건을 좌변의 최솟값 ≥ k 로 바꾸고, 치환으로 최솟값 계산을 이차식으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환 뒤 이차식의 최솟값으로 정하는 부등식 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=ln x 는 x>0 에서 모든 실수를 훑으므로 제한 없는 이차식 g(t)=t²-2t=(t-1)²-1 의 최솟값 -1.
    따라서 k ≤ -1, 최댓값 -1(x=e 에서 등호). 미분 없이 완전제곱으로도 끝나
    M_total 6 · 통찰 d1 하나 → 중 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x (모든 실수) → g(t)=(t-1)^2-1 → 최솟값 -1 → k ≤ -1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0811.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 일차항 계수 -2 를 -4 · -6 으로 바꾸면 최솟값이 -(b/2)² 로 바뀐다. 제약: x>0 을 유지해야 t 가 실수 전체를 훑어 꼭짓점이 항상 도달 가능하다."
    creative: "(1) x ≥ e 처럼 정의역을 제한하면 t ≥ 1 이 되어 최솟값이 끝점으로 옮겨가고 T-범위 함정이 생겨 ★2~3 (2) (ln x)² - 2 ln x ≥ kx 로 바꾸면 치환이 안 돼 ★4 (3) 등호가 성립하는 x 를 함께 묻는 서술형 확장(★2 유지)."
```

### 유형 15 부등식 $f(x)\ge g(x)$의 꼴

```yaml
- id: RPM-CALC2-0812
  page: 115
  vendor_label: '유형 15 부등식 $f(x)\ge g(x)$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대하여 e^{2x} ≥ kx 가 성립하도록 하는 양수 k 의 최댓값. 5지선다.
  category: "x ≤ 0 은 자동 성립 → x>0 에서 k ≤ e^{2x}/x 의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k>0 이므로 x ≤ 0 에서는 부등식이 자동 성립함을 확인해 조건을 x>0 에서의 k ≤ e^{2x}/x 하나로 축약"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(x) ≥ kx 꼴 부등식의 미정계수 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 항상 양수이고 k>0 이라 x ≤ 0 에서는 우변이 0 이하 → 늘 성립.
    남는 조건은 x>0 에서 k ≤ e^{2x}/x 이고 h'=e^{2x}(2x-1)/x² → x=1/2 에서 최소 h(1/2)=2e.
    따라서 k 의 최댓값은 2e. 양변을 x 로 나눌 때 부호 분기를 먼저 정리하는 것이 골조라
    EQV d2 를 붙였지만 유형 대표문제 신호대로 ★2 유지.
  tier: star_2
  mechanism_primary: "k>0 → x ≤ 0 자동 성립 → x>0 에서 k ≤ e^{2x}/x, h'=e^{2x}(2x-1)/x^2 → x=1/2 → 최댓값 2e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0812.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 e^{ax} 로 바꾸면 최솟값이 ae 로, e^{2x} 를 e^{2x}+c 로 바꾸면 최솟값 계산이 초월방정식이 되어 어려워진다. 제약: 지수의 계수만 건드려야 접점 x=1/a 가 깔끔하고 답이 ae 로 떨어진다."
    creative: "(1) 양수 조건을 빼고 모든 실수 k 를 허용하면 x<0 분기까지 따져야 해 I-MI 추가 ★3 (2) 원점에서 그은 접선의 기울기로 푸는 기하 풀이를 유도하면 I-RT 추가·체감 하락 (3) e^{2x} ≥ kx + 1 처럼 절편을 주면 접선 조건 연립이 필요해 ★3~4."
```

```yaml
- id: RPM-CALC2-0813
  page: 115
  vendor_label: '유형 15 부등식 $f(x)\ge g(x)$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x / x, g(x)=kx 에 대하여 x>0 에서 f(x) ≤ g(x) 가 성립하도록 하는 실수 k 의 범위.
  category: "양변에 x(>0) 를 곱해 정리 → k ≥ ln x / x² 의 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 함수의 대소 조건을 k 에 대해 정리해 (우변의 최댓값) ≤ k 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 함수의 대소 부등식에서 미정계수의 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 이므로 부등호 방향을 유지한 채 정리하면 k ≥ ln x / x².
    h(x)=ln x / x², h'=(1-2 ln x)/x³=0 → x=√e 에서 최대 h(√e)=1/(2e).
    따라서 k ≥ 1/(2e). 정의역이 양수라 부호 분기가 없어 유형 15 중에서는 가장 평이하다.
    동치 변환 d1 하나 · 중 구역 → ★2.
  tier: star_2
  mechanism_primary: "x>0 → k ≥ ln x/x^2 → h'=(1-2 ln x)/x^3=0 → x=√e → 최댓값 1/(2e) → k ≥ 1/(2e)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$k\ge\dfrac{1}{2e}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0813.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g(x)=kx 를 kx² · kx³ 로 바꾸면 최댓값이 ln x / x^{n+1} 의 극값으로 옮겨가 1/(ne) 꼴이 된다. 제약: 지수가 양수여야 x→∞ 에서 0 으로 수렴해 최댓값이 존재한다."
    creative: "(1) 부등호를 뒤집어 f(x) ≥ g(x) 가 성립할 k 를 묻게 하면 x→0+ 에서 발산해 해가 없음(반례 문항 ★3) (2) 등호가 성립하는 x 를 함께 묻기(★2 유지) (3) f(x)=ln x/x 와 g(x)=kx 의 교점 개수로 바꾸면 유형 13 골조가 되어 ★3."
```

```yaml
- id: RPM-CALC2-0814
  page: 115
  vendor_label: '유형 15 부등식 $f(x)\ge g(x)$의 꼴'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x ≥ 0 일 때 3x ≥ a sin 2x 가 성립하도록 하는 양수 a 의 최댓값. 5지선다.
  category: "h(0)=0 인 h(x)=3x - a sin 2x 가 x ≥ 0 에서 증가할 조건 → h' ≥ 0"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "h(0)=0 이므로 x ≥ 0 에서 h ≥ 0 이라는 조건을 h'(x) ≥ 0(증가) 조건으로 동치 변환"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a ≤ 3x / sin 2x 로 분리하는 갈래는 최솟값이 아니라 x→0+ 극한(3/2)이 경계라 다루기 어려움 — 증가 조건 갈래를 골라야 빠르게 끝남"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원점에서 등호가 성립하는 부등식과 도함수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h(x)=3x - a sin 2x 는 h(0)=0 이므로 최솟값을 따로 구할 수 없고, x ≥ 0 에서 h ≥ 0 이려면
    원점에서 출발해 감소하지 않아야 한다 → h'(x)=3-2a cos 2x ≥ 0 이 모든 x ≥ 0 에서.
    cos 2x 의 최댓값 1 에서 3-2a ≥ 0 → a ≤ 3/2, 최댓값 3/2.
    a>3/2 면 h'(0)<0 이라 원점 근방에서 h<0 이 되어 반례가 생긴다.
    [분류 이슈] 통찰 2개(EQV d2 · SC d2)로 v3.8 +1 후보이나 골조가 표준 부등식이라 벤더 상중 신호대로 ★3 유지.
  tier: star_3
  mechanism_primary: "h(x)=3x-a sin 2x, h(0)=0 → 모든 x ≥ 0 에서 h ≥ 0 ⟺ h'=3-2a cos 2x ≥ 0 ⟺ 2a ≤ 3 → a=3/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0814.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x 의 계수와 sin 2x 의 각속도를 (cx ≥ a sin bx) 로 두면 답이 c/b 가 된다. 제약: 원점에서 양변이 0 으로 만나고 좌변이 일차여야 h(0)=0·증가 조건 골조가 유지된다. c/b 가 유리수로 떨어지게 고른다."
    creative: "(1) 부등식이 성립하지 않는 a 의 최솟값을 묻기(같은 경계 ★3) (2) x ≥ 0 을 모든 실수로 넓히면 x<0 에서 부호가 뒤집혀 a ≤ 3/2 조건이 그대로임을 대칭으로 보이게 함(I-SYM 추가 ★3) (3) 3x 를 3x² 로 바꾸면 원점에서 접하는 차수가 달라져 h''까지 봐야 하므로 ★4."
```

### 유형 16 직선 운동에서의 속도와 가속도

```yaml
- id: RPM-CALC2-0815
  page: 115
  vendor_label: "유형 16 직선 운동에서의 속도와 가속도"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수직선 위를 움직이는 점 P 의 위치 x=6t - a sin 2t (a는 상수) 에서 t=π/6 의 속도가 2 일 때, 그 시각의 위치.
  category: "속도=위치의 미분 → 조건 대입으로 상수 결정 → 위치 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동의 속도 조건으로 상수·위치 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v=dx/dt=6-2a cos 2t, t=π/6 에서 cos(π/3)=1/2 이므로 v=6-a=2 → a=4.
    위치 x(π/6)=6·(π/6) - 4 sin(π/3) = π - 2√3.
    미분 한 번과 특수각 대입뿐이라 통찰 없음. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "v=6-2a cos 2t, v(π/6)=6-a=2 → a=4 → x(π/6)=π-2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0815.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시각을 t=π/4 · π/3 로, 속도 조건 2 를 다른 값으로 바꾸면 a 만 바뀐다. 제약: 대입 시각의 2t 가 특수각이어야 sin·cos 값이 무리수로 정리되고 답에 √3 · √2 가 한 번만 남는다."
    creative: "(1) 위치 대신 그 시각의 가속도를 묻기(미분 한 번 추가 ★2) (2) 속도가 최대가 되는 시각을 묻게 하면 증감 판정이 붙어 ★2~3 (3) 속도가 0 이 되는 시각(운동 방향이 바뀌는 순간)을 묻고 a 의 범위까지 요구하면 I-MI ★3."
```

```yaml
- id: RPM-CALC2-0816
  page: 115
  vendor_label: "유형 16 직선 운동에서의 속도와 가속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치 x=p sin πt + q cos πt 에서 t=3 의 속도가 -4π, 가속도가 -2π² 일 때 상수 p, q 에 대한 p-q. 5지선다.
  category: "속도·가속도 두 조건 → p, q 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동의 속도·가속도 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v=π(p cos πt - q sin πt), a=-π²(p sin πt + q cos πt). t=3 에서 sin 3π=0, cos 3π=-1 이므로
    v=-pπ=-4π → p=4, a=qπ²=-2π² → q=-2 → p-q=6.
    삼각함수 특수값 대입과 연립뿐이라 통찰 없음. 가속도가 위치의 -π² 배라는 관찰은 선택.
    중 구역 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "v=π(p cos πt - q sin πt), a=-π^2 x → t=3 → p=4, q=-2 → p-q=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0816.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입 시각을 t=2 · t=5/2 로 바꾸면 sin·cos 가 (1,0)·(0,±1) 로 갈려 p, q 가 서로 바뀐 형태가 된다. 제약: 대입 시각에서 sin·cos 중 하나가 0 이어야 연립이 즉시 풀리고, 아니면 Mₖ 가 올라간다."
    creative: "(1) p+q 나 p²+q² 로 묻는 값만 바꾸기(★2 유지) (2) 속도의 최댓값(√(p²+q²)·π)을 묻게 하면 합성 단계가 추가돼 ★3 (3) 가속도가 위치의 상수배임을 이용해 단순조화운동임을 보이게 하면 I-RT ★3."
```

```yaml
- id: RPM-CALC2-0817
  page: 115
  vendor_label: "유형 16 직선 운동에서의 속도와 가속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치 f(t)=-t²e^t + 8e^t + 2 (0 ≤ t ≤ 3) 에서 점 P 와 원점 사이의 거리의 최댓값.
  category: "f'=0 으로 극대 → 거리는 |f(t)| 이므로 끝점의 음수값까지 비교"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점 사이의 거리를 |f(t)| 의 최대로 바꿔 f 의 최댓값뿐 아니라 최솟값(음수)까지 후보에 넣음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선 운동에서 원점까지의 거리의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(t)=e^t(-t²-2t+8)=-e^t(t+4)(t-2) → 구간 안 t=2 에서 극대.
    f(0)=10, f(2)=4e²+2, f(3)=-e³+2<0 이므로 |f| 후보는 10, 4e²+2, e³-2.
    4e²+2 가 가장 커서 답. 위치가 음수가 될 수 있어 절댓값으로 봐야 한다는 점이 함정이지만
    이번 수치에서는 답을 바꾸지 않는다. 동치 변환 d1 하나 · 중 구역 ★2.
  tier: star_2
  mechanism_primary: "f'(t)=-e^t(t+4)(t-2) → t=2 극대 → |f(0)|=10, f(2)=4e^2+2, |f(3)|=e^3-2 비교 → 4e^2+2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4e^2+2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0817.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 8 을 다른 값으로 바꾸면 f'=0 의 근과 극대점이 이동한다. 구간 오른쪽 끝을 4 로 늘리면 |f(4)|=8e^4-2 가 최댓값을 가져가 절댓값 함정이 실제로 답을 바꾼다. 제약: f'=0 의 근이 정수로 인수분해되게 상수를 고른다."
    creative: "(1) 원점을 지나는 순간의 시각을 묻기(f=0 의 근 t=2√2 ★2) (2) 구간을 늘려 음수 위치가 최댓값을 만들게 하면 함정이 살아나 ★3 (3) 거리가 아니라 움직인 거리(속도의 절댓값 적분)로 바꾸면 단원이 이동한다."
```

### 유형 17 평면 운동에서의 속도

```yaml
- id: RPM-CALC2-0818
  page: 116
  vendor_label: "유형 17 평면 운동에서의 속도"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    좌표평면 위를 움직이는 점 P 의 위치가 x=-1+cos 2t, y=t+sin 2t 일 때 속력의 최댓값.
  category: "속력² 전개 → 삼각 항등식으로 cos 2t 의 일차식 → 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동에서 속력의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=-2 sin 2t, dy/dt=1+2 cos 2t → 속력²=4 sin²2t + 1 + 4 cos 2t + 4 cos²2t = 5+4 cos 2t.
    cos 2t=1 일 때 최대 9 → 속력 3. 제곱을 먼저 정리해 삼각함수가 한 항만 남게 하는
    표준 계산이라 통찰 없음. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "속력^2=4 sin^2 2t+(1+2 cos 2t)^2=5+4 cos 2t → 최대 9 → 속력 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0818.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=t+sin 2t 의 계수를 y=2t+sin 2t 로 바꾸면 속력²=4+4 cos 2t+4 sin²2t 처럼 정리가 달라진다. 제약: sin²+cos²=1 로 한 항만 남도록 x·y 의 진동 진폭을 맞춰야 최댓값이 정수로 떨어진다."
    creative: "(1) 속력의 최솟값(=1)을 묻기(★2 유지) (2) 속력이 최대인 시각을 모두 구하게 하면 주기 해 나열이 추가돼 ★2~3 (3) 가속도의 크기가 최대인 시각과 겹쳐 묻는 결합 문항은 ★3."
```

```yaml
- id: RPM-CALC2-0819
  page: 116
  vendor_label: "유형 17 평면 운동에서의 속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치가 x=2t, y=t - t³/3 인 점 P 의 속력이 √13 일 때의 시각.
  category: "속력 식 → 제곱을 풀 때 생기는 두 분기 → 실수·양수 조건으로 채택"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동에서 속력이 주어진 시각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=2, dy/dt=1-t² → 4+(1-t²)²=13 → (1-t²)²=9 → 1-t²=±3.
    1-t²=-3 에서 t²=4, 1-t²=3 에서 t²=-2 는 실수해가 없어 버려지고 시각이므로 t=2.
    제곱근을 풀 때의 부호 분기와 시각의 양수 조건이 두 함정(Mₜ=2)이지만
    기각이 기계적이라 통찰로 세지 않았다. 중 구역 ★2.
  tier: star_2
  mechanism_primary: "4+(1-t^2)^2=13 → (1-t^2)^2=9 → t^2=4 (t^2=-2 는 기각) → t=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0819.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속력 √13 을 √5 · √20 으로 바꾸면 t 가 달라지되 (1-t²) 가 정수가 되도록 골라야 한다. x=2t 의 계수 2 를 바꾸면 상수항 4 가 바뀐다. 제약: 속력² - (dx/dt)² 이 완전제곱수여야 t 가 정수로 떨어진다."
    creative: "(1) 시각이 아니라 그때의 위치·이동 방향을 묻기(★2 유지) (2) 속력이 √13 인 시각이 두 개가 되도록 t 의 범위를 실수 전체로 허용하면 ±2 분기가 살아나 I-MI ★2~3 (3) 속력이 최소인 시각을 묻게 하면 미분이 한 번 더 필요해 ★2."
```

```yaml
- id: RPM-CALC2-0820
  page: 116
  vendor_label: "유형 17 평면 운동에서의 속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치가 x=3t-2, y=t²/2 - 2t 인 점 P 의 속력이 최소일 때, 점 P 와 원점 사이의 거리. 5지선다.
  category: "속력² 의 최소 → 시각 결정 → 좌표 대입 후 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속력이 최소인 시각의 위치와 원점까지의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=3, dy/dt=t-2 → 속력=√(9+(t-2)²) 은 t=2 에서 최소.
    그때 P(4, -2) 이므로 원점까지의 거리는 √(16+4)=2√5.
    속력 식이 완전제곱 꼴이라 미분 없이도 최소 시각이 보이는 평이한 골조 · 중 구역 ★2.
  tier: star_2
  mechanism_primary: "속력=√(9+(t-2)^2) → t=2 최소 → P(4,-2) → 거리 2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0820.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 의 계수를 t²/2 - at 로 바꾸면 최소 시각이 t=a 로 옮겨간다. x=3t-2 의 상수항을 바꾸면 거리만 달라진다. 제약: 최소 시각에서의 좌표가 정수여야 거리가 √(정수) 로 깔끔하다."
    creative: "(1) 속력의 최솟값 자체를 묻기(=3 ★2) (2) 원점과의 거리가 최소인 시각으로 바꾸면 거리 함수를 새로 미분해야 해 ★3 (3) t 의 범위를 [0,1] 로 제한해 최소가 끝점에서 나게 하면 T-경계 함정 추가 ★2."
```

```yaml
- id: RPM-CALC2-0821
  page: 116
  vendor_label: "유형 17 평면 운동에서의 속도"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    위치가 x=-t²+a ln t, y=3t (t>0) 인 점 P 의 t=1 에서의 속력이 5 일 때 양수 a. 서술형.
  category: "속력 조건 → (a-2)²=16 → 양수 조건으로 하나 채택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 속력 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=-2t+a/t, dy/dt=3. t=1 에서 dx/dt=a-2 이므로 (a-2)²+9=25 → (a-2)²=16 → a=6 또는 a=-2.
    양수 조건으로 a=6. 제곱근을 풀 때의 ± 분기와 양수 조건이 함정(Mₜ=2)이지만
    기각이 조건 한 줄로 끝나 통찰로 세지 않았다. 중 구역 ★2.
  tier: star_2
  mechanism_primary: "dx/dt=-2t+a/t, t=1 → a-2 → (a-2)^2+9=25 → a=6 또는 -2 → 양수 a=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0821.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속력 5 와 y=3t 의 계수 3 은 피타고라스 수(3,4,5)를 이루도록 묶여 있다. (5,12,13) 로 바꾸면 y=5t, 속력 13, (a-2)²=144. 제약: 두 성분이 정수 피타고라스 쌍이어야 a 가 정수로 떨어진다."
    creative: "(1) 양수 조건을 빼고 가능한 a 를 모두 구하게 하면 두 답이 살아나 ★2 (2) t=1 이 아니라 t=e 에서 조건을 주면 ln 계산이 한 겹 늘어 Mₖ +1 (3) 속력이 최소가 되는 시각을 a 의 식으로 묻는 확장은 매개변수 최적화라 ★3~4."
```

### 유형 18 평면 운동에서의 가속도

```yaml
- id: RPM-CALC2-0822
  page: 116
  vendor_label: "유형 18 평면 운동에서의 가속도"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    위치가 x=√15 t, y=t³-2t 인 점 P 의 속력이 8 일 때 가속도의 크기. 5지선다.
  category: "속력 조건으로 시각 결정 → 이계도함수로 가속도의 크기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속력 조건에서 가속도의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=√15, dy/dt=3t²-2 → 15+(3t²-2)²=64 → 3t²-2=±7.
    3t²=9 → t=√3 (t ≥ 0), 3t²=-5 는 버린다. 이계도함수는 (0, 6t) 이므로 크기 6√3.
    ± 분기에서 하나가 기각되지만 기계적이라 통찰로 세지 않았다. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "15+(3t^2-2)^2=64 → 3t^2-2=7 (−7 기각) → t=√3 → 가속도 (0, 6t) → 6√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0822.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 계수 √15 와 속력 8 은 15+49=64 가 되도록 맞춰져 있다. (√11, 6) 처럼 11+25=36 이 되는 쌍으로 바꿀 수 있다. 제약: 속력² 에서 (dx/dt)² 을 뺀 값이 완전제곱이어야 t 가 √(정수) 로 떨어진다."
    creative: "(1) 가속도의 크기가 아니라 방향(속도와 이루는 각)을 묻기(★3) (2) 가속도의 크기가 최소인 시각으로 바꾸면 t 에 대한 최적화가 추가돼 ★3 (3) y=t³-2t 를 y=t³-2t²로 바꾸면 가속도의 x 성분이 살아나 크기 계산이 두 항이 되어 Mₖ +1."
```

```yaml
- id: RPM-CALC2-0823
  page: 116
  vendor_label: "유형 18 평면 운동에서의 가속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치가 x=3 cos(πt/4), y=3 sin(πt/4) 인 점 P 의 가속도의 크기.
  category: "두 번 미분 → sin²+cos²=1 로 크기가 시각과 무관한 상수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등속 원운동의 가속도의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x''=-3(π/4)² cos(πt/4), y''=-3(π/4)² sin(πt/4) 이므로 크기는 3(π/4)²=3π²/16 으로 시각과 무관.
    반지름 3·각속도 π/4 의 등속 원운동이라 가속도 크기가 rω² 임을 알면 즉시 나오지만
    표준 풀이는 두 번 미분 후 제곱합이라 통찰로 세지 않았다. 중 구역 ★2.
  tier: star_2
  mechanism_primary: "x''=-3(π/4)^2 cos(πt/4), y''=-3(π/4)^2 sin(πt/4) → 크기 3π^2/16 (등속 원운동 rω^2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{16}\pi^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0823.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 3 과 각속도 π/4 를 바꾸면 답이 rω² 로 비례한다. 제약: 두 성분의 진폭이 같아야 원운동이 되고 크기가 상수로 남는다 — 진폭이 다르면 타원이 되어 크기가 시각에 의존한다."
    creative: "(1) 속력(=3π/4)을 함께 묻기(★2 유지) (2) 진폭을 다르게 해 타원 운동으로 만들면 가속도 크기가 시각의 함수가 되어 최대·최소 문제로 확장 ★3 (3) 가속도 벡터가 항상 원점을 향함을 보이게 하면 I-RT ★3."
```

```yaml
- id: RPM-CALC2-0824
  page: 116
  vendor_label: "유형 18 평면 운동에서의 가속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치가 x=t²+8t, y=at³-3t 인 점 P 의 t=1 에서의 가속도의 크기가 2√10 일 때 양수 a. 5지선다.
  category: "이계도함수 → 크기 조건 → 양수 조건으로 부호 채택"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "가속도의 크기 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x''=2, y''=6at → t=1 에서 가속도는 (2, 6a), 크기² = 4+36a²=40 → a²=1 → a=±1, 양수 a=1.
    일차항 8t·-3t 는 가속도에 기여하지 않는다는 점만 확인하면 끝나는 평이한 골조.
    통찰 없음 · 중 구역 ★2.
  tier: star_2
  mechanism_primary: "x''=2, y''=6at → t=1 에서 (2, 6a) → 4+36a^2=40 → a^2=1 → a=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0824.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기 2√10 을 2√13 으로 바꾸면 36a²=48 이 되어 a 가 무리수가 된다. 제약: (크기² - 4) 가 36 의 배수여야 a 가 유리수로 떨어진다. t=1 대신 t=2 면 y''=12a 라 분모가 144 로 바뀐다."
    creative: "(1) 양수 조건을 빼고 a 를 모두 구하게 하면 ±1 두 답 ★2 (2) 가속도의 크기가 최소인 시각을 묻게 하면 t 최적화가 추가돼 ★3 (3) 속력과 가속도의 크기를 동시에 조건으로 주면 연립이 되어 ★3."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 0 · ★2 26 · ★3 4(0804 · 0805 · 0807 · 0814) · ★4 0 · ★5 0
- 통찰형 5(0804 · 0805 · 0807 · 0812 · 0814) · 절차형 25 · premium 0
- `insights[]` 가 비지 않은 블록 14(통찰 17개) · 통찰 유형 분포: I-EQV 9 · I-RT 5 · I-MI 1 · I-SYM 1 · I-SC 1
- M_total 분포: 6 → 14문 · 7 → 9문 · 8 → 3문 · 9 → 4문 (평균 6.9)
- type_hint 상위 5(골조 기준 묶음): 「미분을 이용한 최대·최소(치환 포함)」 7(0795~0801) · 「부등식이 항상 성립할 조건(최대·최소 환원)」 7(0808~0814) · 「방정식의 실근의 개수(분리 후 그래프)」 6(0802~0807) · 「평면 운동의 속도·속력」 4(0818~0821) · 「직선 운동의 속도·가속도」 3(0815~0817)
- 그림: 0문 · 서술형 3(0798 · 0811 · 0821) · 기출 태그 0
- 전사 답 확인 필요: 0 (30문 모두 다시 구해 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0805 | 벤더는 level 없는 대표문제(★2 출발)이나 매개변수 a 의 최솟값 식 + 보기 세 값 판정으로 M_total 9 · I-EQV d2 → ★3 으로 올림 | ★2 / ★3 |
| RPM-CALC2-0807 | 벤더 「중」(★2 출발)이나 x=0 고정근 + 우함수 대칭 환원 + 양쪽 경계(k=0 포함 · k=2 제외) 처리로 ★3 판정 | ★2 / ★3 |
| RPM-CALC2-0814 | 통찰 2개(I-EQV d2 · I-SC d2)로 v3.8 +1 후보이나 골조가 유형 15 의 표준 부등식이라 벤더 상중 신호대로 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 골조는 크게 셋이다. (1) 「미분 → f'=0 → 증감·끝점 비교」 최대·최소(유형 10 · 11 · 0817), (2) 「미정계수를 분리 → 곡선과 수평선/직선의 교점 개수」 방정식(유형 12 · 13), (3) 「모든 x 에서 성립 → 차 함수의 최대·최소」 부등식(유형 14 · 15).
- 따로 세울 유형: 「분리 뒤 정의역이 두 분기로 갈리는 실근 개수」(0804 · 0806 · 0807) 는 한 분기만 보는 0802 · 0803 과 체감이 분명히 다르므로 별도 base ★3 유형으로 두는 것이 좋다. 「원점에서 등호가 성립해 도함수 조건으로 바꾸는 부등식」(0814)도 최솟값을 직접 구하는 0808~0813 과 분리해야 한다(base ★3).
- 통합해도 될 유형: 유형 11 의 치환 대상(삼각·지수·로그, 0799~0801)은 치환 뒤 모두 같은 삼차함수 최대·최소가 되므로 「치환을 이용한 최대·최소」 한 유형으로 묶고 치환 대상만 변형 축으로 둔다. 유형 17·18 의 조건 대입형(0819 · 0821 · 0822 · 0824)도 「평면 운동에서 조건으로 상수·시각 결정」 한 유형으로 통합 가능하다(base ★2).
- 유형 10 의 0795~0797 은 같은 「구간이 주어진 삼각함수의 최대·최소」이고 0798 만 미정계수 결정이 붙으므로, 카탈로그에서는 기본형(base ★2)과 미정계수형(base ★2, 서술형 슬롯)으로 나누는 정도면 충분하다.
