---
name: mechanism-데이터-RPM-CALC1-08-p3
description: RPM 미적분Ⅰ 08 정적분 (3/3 · 유형 13 정적분으로 정의된 함수의 극한 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 08 정적분
  unit_code: CALC1-08
  part: "3/3"
  extract_range: "116~121쪽 · 0760~0800"
  total_problems: 41
  unit_total: 111
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 08 정적분 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 08 정적분 단원(111문) 가운데 116~121쪽의 41문항(0760~0800)을 다룬다. 구역은 유형 13 정적분으로 정의된 함수의 극한(4문) · 유형 UP 14 주기함수의 정적분(3문) · 유형 UP 15 정적분으로 정의된 함수의 극대·극소(4문) · 유형 UP 16 정적분으로 정의된 함수의 최대·최소(4문) · 유형 UP 17 정적분으로 정의된 함수: 그래프(3문) · 시험에 꼭 나오는 문제(16문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 유형·유형 UP 의 첫 문항은 「대표문제」 태그(난이도 표시 없음), 나머지는 중·상중 난이도 표시와 「서술형」 태그를 가진다. 시험에 꼭 나오는 문제에는 난이도 표시가 없고 「중요」 3문·「교육청 기출」 1문이, 실력 Up 에는 「평가원 기출」 1문이 있다. 그림 문항은 0775 · 0776 · 0777 세 문(유형 UP 17)이며 모두 크롭 이미지로 확인했다.

★ 출발점은 유형 13 이 대표·중 → ★2, 상중 → ★3, 유형 UP 14~17 은 ★3, 시험에 꼭 나오는 문제는 ★2, 서술형 주관식 ★3, 실력 Up ★4 로 두었다. 조정은 ★2 출발 구역에서 「통찰 0 · M_total 4」 만 −1(★1), ★3 출발 구역에서 「통찰 0 또는 유형 표준 도구 d1 하나뿐 · M_total ≤ 5(추상 f 의 Mₐ 3 때문에만 6 인 경우 포함)」 이면 −1(★2), 「d2 통찰 또는 M_total 8 이상」 인 ★2 출발 문항은 +1(★3), 「통찰 2개 이상(d2 포함) · M_total 8 이상」 이면 +1 후보로 보았다. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 있을 때만 후보로 두고, 이 범위에서는 0800 이 필요조건을 채우지만 널리 알려진 골조라 ★4 로 두고 이슈로 기록했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 이 범위의 반복 골조는 「정적분으로 정의된 함수는 미분해서 도함수의 활용으로 돌아간다」(극값·최대·최소·그래프) · 「∫(x−t)f(t)dt 는 분리 후 미분」 · 「정적분은 상수로 치환」 · 「주기·우기함수는 구간 재배열」 넷이며, 통찰은 그 표준 도구 위에서 무엇을 더 요구하느냐(등식 사슬 해석 · 극값 개수 → 부호 변화 · 도함수의 홀짝 · 갈래 기각)로만 매겼다.

## 문항 데이터

### 유형 13 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to 0}\frac{1}{x}\int_{a}^{x+a}f(t)\,dt$의 꼴

```yaml
- id: RPM-CALC1-0760
  page: 116
  vendor_label: '유형 13 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to 0}\frac{1}{x}\int_{a}^{x+a}f(t)\,dt$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $\lim\limits_{h\to 0}\dfrac1h\int_1^{1+2h}(x^3-x^2+2)\,dx$ 의 값. 5지선다.
  category: "F(1+2h)−F(1) 꼴 인식 → 1/h = 2/(2h) → 2f(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 lim (1/h)∫_a^{a+kh} f = k·f(a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $F'=f$ 로 두면 $\dfrac{F(1+2h)-F(1)}{h}=2\cdot\dfrac{F(1+2h)-F(1)}{2h}\to 2f(1)=2\cdot2=4$ → ④. 위끝의 계수 $2$ 를 빼먹는 함정 하나뿐이고 계산은 한 줄.
    유형 대표(난이도 표시 없음) 출발 ★2 이나 통찰 없음·M_total 4 → −1 ★1.
  tier: star_1
  mechanism_primary: "F'=f 설정 → (F(1+2h)−F(1))/h = 2·(F(1+2h)−F(1))/(2h) → 2f(1) → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0760.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝 a(1→2, −1)·위끝 계수 k(2→3, −1)·피적분함수 계수를 바꿀 수 있음. 제약: 답 k·f(a) 가 선택지 정수(1~5)에 들어오도록 f(a) 와 k 를 맞추고, k 가 음수면 답 부호 반전을 선택지에 반영."
    creative: "(1) 아래끝도 움직여 ∫_{a−h}^{a+2h} 로 두면 3f(a)(★2 · 0762 골조) (2) 극한값을 주고 f 의 계수를 묻는 역문제(★2) (3) 피적분함수를 f'(t) 로 주고 f 를 정적분으로 정의하면 두 겹 정의(★2 · 0761 골조)."
```

```yaml
- id: RPM-CALC1-0761
  page: 116
  vendor_label: '유형 13 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to 0}\frac{1}{x}\int_{a}^{x+a}f(t)\,dt$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=\int_0^x(4t^2+t-5)\,dt$ 일 때 $\lim\limits_{x\to 0}\dfrac1x\int_0^x f'(t)\,dt$ 의 값.
  category: "f'=피적분함수 → ∫_0^x f' = f(x)−f(0)=f(x) → f(x)/x 극한 = f'(0)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(두 겹 정의 · f'(0) 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(t)=4t^2+t-5$ 이므로 $\int_0^x f'(t)\,dt=f(x)-f(0)=f(x)$, 따라서 극한은 $\lim\dfrac{f(x)-f(0)}{x}=f'(0)=-5$. 두 겹 정의를 벗기는 순서만 지키면 계산은 없음.
    난이도 「중」 출발 ★2, 통찰 없음·M_total 5 → 유지 ★2.
  tier: star_2
  mechanism_primary: "f'(t)=4t²+t−5 → ∫_0^x f' = f(x)−f(0) → lim f(x)/x = f'(0) → −5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0761.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 계수(4, 1, −5)와 아래끝 0 을 바꿀 수 있음. 제약: 아래끝을 a≠0 으로 바꾸면 f(a)=0 이 되어 극한이 (f(x)−f(a))/(x−a) 꼴로 옮겨 가므로 발문의 x→a 도 함께 바꿔야 함."
    creative: "(1) ∫_0^x f'(t)dt 대신 ∫_0^{2x} f'(t)dt 로 두어 계수 2 를 심기(★2) (2) f 의 극값·f' 의 부호와 결합해 f'(0) 의 부호 의미를 묻기(★2) (3) f(x) 를 ∫_0^x (x−t)f'(t)dt 꼴로 정의하면 분리 미분 한 단계 추가(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0762
  page: 116
  vendor_label: '유형 13 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to 0}\frac{1}{x}\int_{a}^{x+a}f(t)\,dt$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x^3-kx+2$ 에 대하여 $\lim\limits_{h\to 0}\dfrac1h\int_{2-3h}^{2+h}f(x)\,dx=24$ 일 때 상수 $k$.
  category: "F(2+h)−F(2−3h) 를 F(2) 기준으로 분리 → f(2)+3f(2)=4f(2) → f(2)=6 → k"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(양끝이 움직이는 꼴 · 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{F(2+h)-F(2)}{h}+3\cdot\dfrac{F(2)-F(2-3h)}{3h}\to f(2)+3f(2)=4f(2)=24$ 이므로 $f(2)=6$, $8-2k+2=6$ 에서 $k=2$. 아래끝 $2-3h$ 의 부호와 계수 $3$ 을 동시에 처리하는 것이 유일한 고비(Mₜ 2).
    난이도 「중」 출발 ★2, 통찰 없음·M_total 7 → 유지 ★2.
  tier: star_2
  mechanism_primary: "F(2+h)−F(2−3h) = [F(2+h)−F(2)] + [F(2)−F(2−3h)] → f(2)+3f(2) → 4f(2)=24 → f(2)=6 → k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0762.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 계수(1, −3)·중심 2·극한값 24 를 바꿀 수 있음. 제약: 극한값 = (위끝 계수 + 아래끝 계수의 절댓값)·f(2) 가 되도록 f(2) 를 정수로 맞추고 k 가 정수가 되게 상수항을 조정."
    creative: "(1) 아래끝을 2+3h 로 바꾸면 계수가 1−3=−2 로 부호가 바뀜(★2 · T-부호) (2) f 에 미정계수 둘을 두고 조건 하나를 더 주면 연립(★2~3) (3) f(2)=0 이 되는 k 로 「극한값이 0」 인 역문제(★2)."
```

```yaml
- id: RPM-CALC1-0763
  page: 116
  vendor_label: '유형 13 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to 0}\frac{1}{x}\int_{a}^{x+a}f(t)\,dt$의 꼴'
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $f(x)=3x^2-2x+1$ 과 다항함수 $g$ 가 임의의 실수 $h$ 에 대해 $g(0)=2$, $g(x+h)-g(x)=\int_x^{x+h}f(t)\,dt$ 를 만족할 때 $g'(2)+g(2)$.
  category: "조건 ㈏ 양변 ÷h · h→0 → g'(x)=f(x) → g=∫f+C · g(0)=2 → g'(2)+g(2)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "임의의 h 에 대한 등식을 h 로 나누고 h→0 하면 좌변은 미분계수의 정의, 우변은 유형 13 극한 → g'(x)=f(x) 로 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수방정식 g(x+h)−g(x)=∫_x^{x+h}f 를 g'=f 로 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈏를 $h$ 로 나누고 $h\to0$: 좌변 $\to g'(x)$, 우변 $\to f(x)$. 따라서 $g'(2)=f(2)=9$, $g(x)=x^3-x^2+x+C$ 에 $g(0)=2$ 로 $C=2$, $g(2)=8$. 합 $17$.
    「임의의 h」 조건을 미분계수 정의로 옮기는 EQV d1 하나(유형 제목이 가리키는 표준 도구)·M_total 6. 난이도 「상중」·서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "㈏÷h, h→0 → g'(x)=f(x) → g'(2)=9 · g=x³−x²+x+C, g(0)=2 → g(2)=8 → 17"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0763.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·g(0) 값·평가점 2 를 바꿀 수 있음. 제약: g 는 f 의 부정적분이므로 g(0) 이 상수항이 되고 답이 정수가 되도록 f 를 정수 계수로 유지."
    creative: "(1) 조건을 g(x+h)−g(x−h)=∫_{x−h}^{x+h}f 로 주면 2h 로 나누는 계수 처리 추가(★3) (2) g 대신 g 의 극값을 묻기(★3) (3) f 도 미지수로 두고 g(1), g'(1) 값을 주어 f 의 계수를 역추적(★3~4 · I-BW d1)."
```

### 유형 UP 14 주기함수의 정적분

```yaml
- id: RPM-CALC1-0764
  page: 117
  vendor_label: "유형 UP 14 주기함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    연속함수 $f$ 가 $f(x+3)=f(x)$ 이고 $\int_{-1}^{2}f=3$ 일 때 $\int_{-1}^{11}f(x)\,dx$.
  category: "주기 3 → 길이 3 구간의 적분은 모두 같음 → [−1,11] = 4주기 → 4×3"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수의 정적분(주기 길이 구간 적분의 정수배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x+3)=f(x)$ 이면 길이 $3$ 인 어느 구간의 정적분도 $\int_{-1}^{2}f=3$ 과 같다. $[-1,11]$ 은 길이 $12$ = 4주기이므로 $4\cdot3=12$.
    유형 UP 대표 출발 ★3 이나 유형 제목의 표준 도구 그대로이고 통찰 없음·계산 한 줄. M_total 6 은 f 가 추상(Mₐ 3)이어서일 뿐 → −1 ★2.
  tier: star_2
  mechanism_primary: "f(x+3)=f(x) → 길이 3 구간 적분 = 3 → [−1,11] = 4주기 → 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0764.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(3→2, 4)·주어진 구간·구간 적분값·목표 구간을 바꿀 수 있음. 제약: 목표 구간 길이가 주기의 정수배이고 시작점이 주어진 구간 시작점과 주기 차이(−1+3n)여야 한 줄로 떨어짐."
    creative: "(1) 목표 구간을 주기의 정수배 + 나머지로 두고 나머지 조각 적분을 추가 조건으로 주기(★3 · I-EQV d1) (2) 우함수 조건을 얹어 반주기 값으로 한 주기 값을 만들기(★3 · 0765 골조 · I-SYM d1) (3) 주어진 구간과 목표 구간의 시작점을 어긋나게 두어 구간 재배열 필요(★3)."
```

```yaml
- id: RPM-CALC1-0765
  page: 117
  vendor_label: "유형 UP 14 주기함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    연속함수 $f$ 가 $f(x+2)=f(x)$, $f(-x)=f(x)$ 이고 $\int_0^1 f=5$ 일 때 $\int_{-9}^{9}f(x)\,dx$.
  category: "우함수 → 2∫_0^9 · 우함수+주기 2 → 한 주기 적분 = 2∫_0^1 = 10 → ∫_0^9 = 5 + 4×10 → ×2"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우함수 조건으로 ∫_{−1}^{0}f=∫_0^1 f=5 를 만들어 한 주기 [−1,1] 의 적분 10 을 얻고, 그것을 주기 조건으로 [1,9] 에 4번 복제"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주기함수의 정적분(우함수 조건과 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우함수라 $\int_{-9}^{9}f=2\int_0^9 f$. 한 주기 $[-1,1]$ 의 적분은 우함수로 $2\cdot5=10$ 이고 $[1,9]$ 는 4주기 → $\int_0^9 f=5+40=45$, 답 $90$.
    반주기 값을 우함수로 한 주기 값으로 늘리는 SYM d1 하나·M_total 7. 유형 UP 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "우함수 → ∫_{−9}^{9}=2∫_0^9 · ∫_{−1}^{1}f=2·5=10(한 주기) → ∫_0^9 = 5 + 4·10 = 45 → 90"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0765.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 2·반주기 적분값 5·구간 [−9,9] 를 바꿀 수 있음. 제약: 구간 끝이 주기 격자(홀수)에 놓여야 「반주기 + 정수 주기」 분해가 되고, 우함수 조건을 기함수로 바꾸면 한 주기 적분이 0 이 되어 답 구조가 달라짐."
    creative: "(1) 기함수 조건으로 바꾸면 대칭 구간 적분 0 → 나머지 조각만 남는 함정(★3 · I-SYM d1) (2) [0,1] 에서 f 의 식을 주고 구간을 비격자 점까지 늘려 조각 적분 추가(★3) (3) f(x+2)=f(x) 대신 f(x+2)=−f(x) 로 주면 주기 4 유도가 한 단계 더 필요(★4 · I-PD d2)."
```

```yaml
- id: RPM-CALC1-0766
  page: 117
  vendor_label: "유형 UP 14 주기함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    연속함수 $f$ 가 ㈎ $f(x+1)=f(x)$, ㈏ $0\le x\le1$ 에서 $f(x)=-x^2+x$ 일 때 $\int_{-2}^{2}f(x)\,dx$.
  category: "주기 1 → [−2,2] = 4주기 → 4∫_0^1(−x²+x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수의 정적분(한 주기 식이 주어진 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\int_0^1(-x^2+x)\,dx=-\dfrac13+\dfrac12=\dfrac16$ 이고 $[-2,2]$ 는 4주기이므로 $\dfrac46=\dfrac23$.
    유형 UP·난이도 「중」 출발 ★3 이나 한 주기 적분 × 개수뿐, 통찰 없음·M_total 4 → −1 ★2.
  tier: star_2
  mechanism_primary: "∫_0^1(−x²+x)=1/6 → [−2,2] = 4주기 → 4/6 = 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0766.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 주기의 식(−x²+x → x(1−x), 1−x²)·주기 길이·구간을 바꿀 수 있음. 제약: 구간이 주기의 정수배가 아니면 나머지 조각 적분이 붙어 ★ 이 오르고, 주기 경계에서 f 가 연속이 되도록 f(0)=f(1) 을 유지."
    creative: "(1) 구간을 [−2, 5/2] 로 두어 반주기 조각 추가(★3) (2) ∫_1^k f = 8 처럼 k 를 묻는 역문제(★3 · 0791 골조) (3) 한 주기 식을 |x−1/2| 같은 절댓값으로 주면 구간 분할 추가(★3)."
```

### 유형 UP 15 정적분으로 정의된 함수의 극대·극소

```yaml
- id: RPM-CALC1-0767
  page: 117
  vendor_label: "유형 UP 15 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    $f(x)=\int_{-3}^{x}(3t^2+at+b)\,dt$ 가 $x=5$ 에서 극솟값 $-32$ 를 가질 때 $ab$.
  category: "f'(x)=3x²+ax+b · f'(5)=0 → 5a+b=−75 · f(5)=∫_{−3}^{5}=−32 → a+b=−23 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값(미정계수 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(5)=75+5a+b=0$, $f(5)=152+8a+8b=-32$ 에서 $a+b=-23$, 연립하면 $a=-13$, $b=-10$, $ab=130$. $f''(5)=30+a=17>0$ 으로 극소 확인.
    유형 UP 대표 출발 ★3, 통찰 없음이나 매개변수 둘·정적분 계산이 붙어 M_total 7 → 유지 ★3.
  tier: star_3
  mechanism_primary: "f'=3x²+ax+b → f'(5)=0 · f(5)=−32(정적분 계산) → 5a+b=−75, a+b=−23 → a=−13, b=−10 → 130"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$130$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0767.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝 −3·극소점 5·극솟값 −32 를 바꿀 수 있음. 제약: 두 일차식 연립의 해가 정수가 되도록 극솟값을 맞추고, f''(극소점)=6·(극소점)+a>0 이 유지돼야 「극소」 발문이 참."
    creative: "(1) 극댓값·극솟값을 둘 다 주고 a, b 와 아래끝까지 묻기(★3) (2) 아래끝을 미지수로 두고 f(극소점) 조건으로 아래끝을 묻기(★3 · I-BW d1) (3) 극소점만 주고 「극솟값이 최소가 되는 b」 처럼 2차 최적화를 얹기(★4)."
```

```yaml
- id: RPM-CALC1-0768
  page: 117
  vendor_label: "유형 UP 15 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    $f(x)=\int_x^{x+a}t(t-2)\,dt$ 가 $x=-1$ 에서 극솟값을 가질 때 양수 $a$.
  category: "양끝 변수 미분 f'(x)=g(x+a)−g(x) → f'(−1)=(a−1)(a−3)−3=a(a−4)=0 → a=4"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "양끝이 x 인 정적분 함수의 극값 조건(f'(x)=g(x+a)−g(x))"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=(x+a)(x+a-2)-x(x-2)=2ax+a^2-2a$ (일차식). $f'(-1)=a^2-4a=0$ 에서 양수 $a=4$. 기울기 $2a>0$ 이라 $x=-1$ 이 극소임이 자동으로 확인된다.
    통찰 없음이나 매개변수·양끝 미분·a=0 배제(T-범위)·극소 확인(T-경계)이 겹쳐 M_total 8. 유형 UP·「중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f'(x)=g(x+a)−g(x), g(t)=t(t−2) → f'(−1)=a(a−4)=0 → a>0 → 4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0768.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 t(t−2) 의 근·극소점 −1 을 바꿀 수 있음. 제약: f' 가 일차식이 되는 것은 피적분함수가 이차식이기 때문이므로 차수를 올리면 f' 가 이차식이 되어 극대·극소 구분이 필요해짐. a 의 이차방정식 근이 정수이고 하나만 양수여야 함."
    creative: "(1) 피적분함수를 삼차식으로 바꾸면 f' 가 이차식 → 극대인지 극소인지 판정 단계 추가(★3~4 · I-VF d1) (2) 극소점 대신 「f 의 극솟값」 을 주어 a 를 묻기(★3) (3) 구간 길이 a 를 고정하고 극소점을 묻는 방향 전환(★2)."
```

```yaml
- id: RPM-CALC1-0769
  page: 117
  vendor_label: "유형 UP 15 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    $f(x)=\int_{-1}^{x}t(t-1)\,dt$ 의 극댓값 $M$, 극솟값 $m$ 에 대하여 $M+m$. 5지선다.
  category: "f'=x(x−1) → x=0 극대·x=1 극소 → f(0)=5/6 · f(1)=2/3 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극댓값·극솟값(구체 피적분함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=x(x-1)$ 이므로 $x=0$ 극대, $x=1$ 극소. $f(0)=\int_{-1}^{0}(t^2-t)\,dt=\dfrac56$, $f(1)=\int_{-1}^{1}(t^2-t)\,dt=\dfrac23$, 합 $\dfrac32$ → ②.
    유형 UP·「중」 출발 ★3 이나 통찰 없음·구체 계산·M_total 5 → −1 ★2.
  tier: star_2
  mechanism_primary: "f'=x(x−1) → 극대 x=0, 극소 x=1 → f(0)=5/6, f(1)=2/3 → 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0769.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 근(0, 1)·아래끝 −1 을 바꿀 수 있음. 제약: 두 극값이 유리수로 나오고 선택지 간격이 1/2 이므로 합이 선택지에 맞게 아래끝을 조정. 아래끝이 두 근 사이에 오면 극값 부호가 바뀜."
    creative: "(1) M−m 을 물으면 아래끝이 소거되어 ∫_0^1 만 남는 골조(★2 · I-EQV d1) (2) 아래끝을 a 로 두고 「극댓값이 0」 이 되는 a 를 묻기(★3 · I-BW d1) (3) 피적분함수를 t(t−1)(t−2) 로 올려 극값 셋(★3)."
```

```yaml
- id: RPM-CALC1-0770
  page: 117
  vendor_label: "유형 UP 15 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    다항함수 $f$ 가 $\int_1^x(x-t)f'(t)\,dt=x^4-x^3+ax^2+5x-2$ 를 만족할 때 $f$ 의 극댓값 $M$·극솟값 $m$ 에 대하여 $M-m$. ($a$ 는 상수)
  category: "x=1 대입 → a · (x−t) 분리 후 미분 → f(x)−f(1)=4x³−3x²−6x+5 · 다시 미분 → f'=6(2x+1)(x−1) · M−m 는 f(1) 무관"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∫(x−t)f'(t)dt 를 x∫f'−∫tf' 로 분리해 미분하면 xf'(x) 가 소거되어 f(x)−f(1) 만 남는 표준 변환"
    - step: 5
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(1) 은 결정되지 않지만 극값의 차 M−m 은 상수항에 무관하므로 g(x)=f(x)−f(1) 의 극값 차로 계산"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "∫(x−t)f'(t)dt 꼴 항등식에서 f 복원 → 극값의 차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x=1$: $a+3=0$ 에서 $a=-3$. 분리 미분하면 $\int_1^x f'(t)\,dt=f(x)-f(1)=4x^3-3x^2-6x+5$, 다시 미분해 $f'(x)=6(2x+1)(x-1)$. $M-m=g(-\tfrac12)-g(1)=\dfrac{27}{4}-0$.
    분리 미분(EQV d1)과 「차는 상수항 무관」(EQV d1) 두 통찰·7단계·매개변수·M_total 9. 유형 UP·「상중」 출발 ★3. [분류 이슈] 통찰 2개·M_total 9 로 +1 ★4 후보이나 둘 다 d1 이라 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "x=1 → a=−3 → 분리 미분 → f(x)−f(1)=4x³−3x²−6x+5 → f'=6(2x+1)(x−1) → M−m=g(−1/2)−g(1)=27/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{27}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0770.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식 계수(x⁴−x³+…+5x−2)와 아래끝 1 을 바꿀 수 있음. 제약: x=아래끝 대입으로 a 가 정수로 결정돼야 하고, 두 번 미분한 f' 가 유리수 근 둘을 갖도록 우변 계수를 맞춰야 극값이 유리수."
    creative: "(1) f'(t) 대신 f(t) 로 주면 미분이 한 번 줄고 f 자체가 결정(★3 · 0796 골조) (2) M−m 대신 M 을 물으면 f(1) 이 필요해 「구할 수 없음」 — f(1) 값을 조건으로 추가(★3) (3) 우변을 매개변수 둘로 두고 극값 개수 조건을 묻기(★4 · I-EQV d2)."
```

### 유형 UP 16 정적분으로 정의된 함수의 최대·최소

```yaml
- id: RPM-CALC1-0771
  page: 118
  vendor_label: "유형 UP 16 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    $-1\le x\le1$ 에서 $f(x)=\int_x^{x+1}(t^3-t)\,dt$ 의 최댓값 $M$·최솟값 $m$ 에 대하여 $M+m$.
  category: "f'(x)=g(x+1)−g(x)=3x(x+1) → 구간 안 부호 → 최소 f(0)=−1/4 · 최대 끝점 f(1)=9/4 → 합 2"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에서 양끝이 x 인 정적분 함수의 최대·최소(끝점 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=\{(x+1)^3-(x+1)\}-(x^3-x)=3x(x+1)$. $[-1,1]$ 에서 $(-1,0)$ 음, $(0,1)$ 양이므로 최소는 $f(0)=-\dfrac14$, 최대는 끝점 $f(-1)=\dfrac14$, $f(1)=\dfrac94$ 중 $\dfrac94$. 합 $2$.
    통찰 없음이나 인수분해·세 정적분·끝점 비교(T-범위)·x=−1 이 끝점이자 임계점(T-경계)이라 M_total 7. 유형 UP 대표 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f'(x)=g(x+1)−g(x)=3x(x+1) → [−1,1] 부호표 → m=f(0)=−1/4 · M=max(f(−1), f(1))=9/4 → 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0771.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−1,1]·피적분함수 t³−t·구간 폭 1 을 바꿀 수 있음. 제약: f' 가 인수분해되는 것은 t³−t 의 근 대칭(0, ±1) 덕분이므로 피적분함수를 바꾸면 f' 계산량이 급증. 끝점 값이 유리수여야 함."
    creative: "(1) 구간을 [0,2] 로 옮기면 임계점이 구간 밖 → 단조라 끝점만 비교(★2) (2) M−m 을 묻거나 최대가 되는 x 를 묻기(★3) (3) 구간 폭을 a 로 두고 최솟값이 0 이 되는 a(★4 · I-BW d2)."
```

```yaml
- id: RPM-CALC1-0772
  page: 118
  vendor_label: "유형 UP 16 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    $f(x)=-6x^2+\int_{-1}^{0}xf(t)\,dt$ 를 만족하는 $f$ 의 최댓값. 5지선다.
  category: "x 를 적분 밖으로 → ∫_{−1}^{0}f=k 치환 → f=−6x²+kx → k 자기참조식 → k=−4/3 → 꼭짓점"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분변수 t 에 대해 x 는 상수이므로 밖으로 빼고, 남은 정적분을 상수 k 로 두어 f 를 k 로 표현한 뒤 k 의 정의식에 되넣기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분을 상수로 치환하는 함수 결정 → 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $k=\int_{-1}^{0}f(t)\,dt$ 로 두면 $f(x)=-6x^2+kx$, $k=\int_{-1}^{0}(-6t^2+kt)\,dt=-2-\dfrac k2$ 에서 $k=-\dfrac43$. $f(x)=-6x^2-\dfrac43x$ 의 최댓값은 $x=-\dfrac19$ 에서 $\dfrac{2}{27}$ → ②.
    상수 치환 EQV d1·분수 계산·M_total 7. 유형 UP·「중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "x 밖으로 → k=∫_{−1}^{0}f → f=−6x²+kx → k=−2−k/2 → k=−4/3 → 꼭짓점 x=−1/9 → 2/27"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0772.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 −6·적분 구간 [−1,0] 을 바꿀 수 있음. 제약: k 의 일차방정식에서 k 의 계수가 0 이 되지 않아야 하고, 최댓값이 선택지처럼 분모 27 유리수가 되도록 계수를 맞춤."
    creative: "(1) 적분 안에 x² 과 x 를 함께 넣어 상수 두 개 연립(★3 · 0786 골조) (2) 최댓값 대신 「f(x)≥0 인 x 의 범위」(★3) (3) 구간 [−1,0] 을 [0,a] 로 두고 최댓값이 특정 값이 되는 a(★4 · I-BW d2)."
```

```yaml
- id: RPM-CALC1-0773
  page: 118
  vendor_label: "유형 UP 16 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    $\int_0^x(x-t)f(t)\,dt=\dfrac34x^4-x^2$ 를 만족하는 $f$ 의 최솟값.
  category: "(x−t) 분리 → 미분 → ∫_0^x f=3x³−2x → 미분 → f=9x²−2 → 최솟값 −2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x∫_0^x f − ∫_0^x tf 로 분리해 미분하면 xf(x) 항이 소거되어 ∫_0^x f 만 남는 표준 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫_0^x (x−t)f(t)dt 꼴 항등식에서 f 복원(두 번 미분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변을 $x\int_0^x f-\int_0^x tf$ 로 쓰고 미분하면 $\int_0^x f(t)\,dt=3x^3-2x$, 한 번 더 미분해 $f(x)=9x^2-2$. 최솟값은 $f(0)=-2$.
    분리 미분 EQV d1 하나·M_total 6. 유형 UP·「중」·서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "x∫f−∫tf 분리 → 미분 → ∫_0^x f=3x³−2x → 미분 → f=9x²−2 → min −2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0773.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(x⁴ 계수 3/4·x² 계수 −1)을 바꿀 수 있음. 제약: 우변은 x=0 에서 0 이어야 하고(좌변이 0), 두 번 미분한 f 가 이차식이면 최솟값은 꼭짓점·삼차식이면 최솟값이 없어 발문이 깨짐."
    creative: "(1) 아래끝을 −1 로 옮기고 x=−1 대입으로 매개변수를 먼저 결정하게 하기(★3 · 0796 골조) (2) f 의 최솟값 대신 ∫_0^1 f 를 묻기(★3) (3) f(t) 대신 f'(t) 로 주고 f 의 극값 차를 묻기(★3~4 · 0770 골조)."
```

```yaml
- id: RPM-CALC1-0774
  page: 118
  vendor_label: "유형 UP 16 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    $-1\le x\le2$ 에서 $f(x)=\int_{-1}^{x}(1-|t|)\,dt$ 의 최댓값 $M$·최솟값 $m$ 에 대하여 $M-m$.
  category: "f'(x)=1−|x| → [−1,1] 증가·[1,2] 감소 → M=f(1)=1 · m=min(f(−1)=0, f(2)=1/2)=0 → 1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 피적분함수의 정적분 함수의 최대·최소(끝점 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=1-|x|$ 는 $[-1,1]$ 에서 $\ge0$, $[1,2]$ 에서 $\le0$ 이므로 최대는 $f(1)=\int_{-1}^{1}(1-|t|)\,dt=1$(밑변 2·높이 1 삼각형). 최소는 끝점 $f(-1)=0$ 과 $f(2)=1-\dfrac12=\dfrac12$ 중 $0$. 차 $1$.
    통찰 없음(넓이 해석은 지름길일 뿐)·끝점 비교와 f(2) 계산의 함정(Mₜ 2)·M_total 6. 유형 UP·「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=1−|x| → 증감표 → M=f(1)=1 · m=f(−1)=0 (f(2)=1/2 와 비교) → 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0774.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−1,2]·피적분함수 1−|t| 의 높이·꼭짓점 위치를 바꿀 수 있음. 제약: 오른쪽 끝을 3 보다 키우면 f(끝점) 이 음수가 되어 최솟값이 오른쪽 끝점으로 옮겨가므로 답 구조가 바뀜(경계 3 에서 f(3)=0)."
    creative: "(1) 구간을 [−1,3] 으로 두면 f(3)=0=f(−1) 로 최솟값 후보가 둘(★3 · T-경계) (2) 피적분함수를 |t|−1 로 뒤집어 최대·최소 교환(★3) (3) 구간 오른쪽 끝을 a 로 두고 최솟값이 음수가 되는 a 의 범위(★4 · I-BW d2)."
```

### 유형 UP 17 정적분으로 정의된 함수: 그래프

```yaml
- id: RPM-CALC1-0775
  page: 118
  vendor_label: "유형 UP 17 정적분으로 정의된 함수: 그래프"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    그림의 이차함수 $f$(위로 볼록 · $x$절편 $-1,3$ · $y$절편 $3$)에 대하여 $F(x)=\int_{-1}^{x}f(t)\,dt$ 의 극댓값.
  category: "그래프 → f=−(x+1)(x−3) → F'=f 부호 +→− 인 x=3 극대 → F(3)=∫_{−1}^{3}f=32/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 절편으로 f 의 식을 세우고, F'=f 의 부호 변화를 그래프에서 읽어 극대점을 정하기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 f 의 정적분 함수 F 의 극값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절편에서 $f(x)=-(x+1)(x-3)$. $F'=f$ 가 $x=3$ 에서 $+\to-$ 이므로 극대, $F(3)=\int_{-1}^{3}f=\dfrac{4^3}{6}=\dfrac{32}{3}$.
    그래프→식 RT d1 이 유형의 표준 도구이고 그 뒤는 정적분 한 번·M_total 4. 유형 UP 대표 출발 ★3 이나 −1 ★2.
  tier: star_2
  mechanism_primary: "그래프 절편 → f=−(x+1)(x−3) → F'=f, x=3 에서 +→− → F(3)=∫_{−1}^{3}f=32/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{32}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0775.png"
  latex: latex-bank/rpm-calc1/items/0775.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절편(−1, 3)·y절편 3 은 그림 라벨이라 함께 바꿔야 함. 아래끝을 −1 이 아닌 값(예: 0)으로 두면 F(3) 이 ∫_0^3 으로 바뀜. 제약: y절편으로 최고차 계수가 정수로 결정되게 하고, 아래끝이 x절편이 아니어도 극대점은 여전히 3."
    creative: "(1) 극솟값을 물으면 아래끝이 −1 이라 F(−1)=0 이 극소(★2 · T-경계) (2) 아래끝을 3 으로 두면 극댓값 F(3)=0 이 되는 함정(★2) (3) f 대신 F 의 그래프를 주고 f 의 값을 묻기(★3 · 0776 골조)."
```

```yaml
- id: RPM-CALC1-0776
  page: 118
  vendor_label: "유형 UP 17 정적분으로 정의된 함수: 그래프"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    그림의 이차함수 $F$(아래로 볼록 · $x$절편 $0,2$)가 $F(x)=\int_2^x f(t)\,dt$ 이고 $f$ 의 그래프가 $(2,4)$ 를 지날 때 $f(3)$. 5지선다.
  category: "그래프 → F=ax(x−2) → f=F'=a(2x−2) → f(2)=4 → a=2 → f(3)=8"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 절편으로 F=ax(x−2) 를 세우되 최고차 계수 a 를 미지로 두고, f=F' 와 점 (2,4) 로 a 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 F=∫f 에서 f 복원(f=F')"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $F(x)=ax(x-2)$ ($F(2)=0$ 은 정의와도 맞음), $f(x)=F'(x)=a(2x-2)$, $f(2)=2a=4$ 에서 $a=2$. $f(3)=8$ → ④.
    그래프→식(계수 미지) RT d1·매개변수·M_total 6. 유형 UP·「중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "F=ax(x−2) → f=F'=2a(x−1) → f(2)=4 → a=2 → f(3)=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0776.png"
  latex: latex-bank/rpm-calc1/items/0776.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (2,4) 의 값·평가점 3 을 바꿀 수 있음. 절편 0, 2 는 그림 라벨(고정)이고 아래끝 2 는 절편과 같아야 F(2)=0 이 정합. 제약: a 가 정수가 되게 점의 y 값을 짝수로."
    creative: "(1) 점 대신 「f 의 최솟값」 이나 ∫_0^2 f 값을 주어 a 를 결정(★3) (2) F 의 꼭짓점 좌표를 그림에 표시하면 a 가 바로 결정되어 ★2 (3) F 를 삼차함수 그래프로 주면 f 가 이차식이 되어 극값 판정까지(★3~4)."
```

```yaml
- id: RPM-CALC1-0777
  page: 118
  vendor_label: "유형 UP 17 정적분으로 정의된 함수: 그래프"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    그림의 이차함수 $f$(위로 볼록 · $x$절편 $2,7$)에 대하여 $g(x)=\int_x^{x+1}f(t)\,dt$ 가 최대가 되는 $x=k$.
  category: "g'(x)=f(x+1)−f(x)=0 → 포물선 대칭축 9/2 → x 와 x+1 이 대칭 → x=4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+1)=f(x) 를 포물선의 축 대칭으로 읽어 x+(x+1)=9 에서 x=4 (대수로도 a(2x−8)=0 으로 같은 결과)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 f 에 대한 g(x)=∫_x^{x+1}f 의 최대점(대칭축)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $g'(x)=f(x+1)-f(x)$. $f(x)=a(x-2)(x-7)$ ($a<0$) 이면 $g'(x)=a(2x-8)$ 이고 $a<0$ 이므로 $x<4$ 에서 증가, $x>4$ 에서 감소 → $k=4$. 축 $\dfrac92$ 에 대해 $x$ 와 $x+1$ 이 대칭이라는 읽기가 곧 답이다.
    양끝 미분 뒤 대칭 읽기 SYM d1·계수 a 가 소거되는 매개변수·M_total 6. 유형 UP·「중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "g'(x)=f(x+1)−f(x) → f=a(x−2)(x−7), a<0 → g'=a(2x−8) → x=4 에서 +→− → k=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0777.png"
  latex: latex-bank/rpm-calc1/items/0777.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절편 2, 7 은 그림 라벨(함께 변경)·구간 폭 1 을 바꿀 수 있음. 제약: 폭 w 이면 k=(2+7−w)/2 이므로 정수 답이 되도록 절편 합과 폭의 홀짝을 맞추고, 포물선이 위로 볼록이어야 「최대」."
    creative: "(1) 아래로 볼록으로 바꾸면 최소점(★3) (2) f 를 삼차함수 그래프로 주면 대칭이 깨져 g' 부호를 f(x+1)−f(x) 의 그래프 비교로 읽어야 함(★4 · I-RT d2) (3) 「g(x) 의 최댓값」 을 물으면 a 가 필요해 그래프에 꼭짓점 값 추가(★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0778
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=4x^3+2kx$ 가 $\int_{-1}^{3}f(x)\,dx=f(2)$ 를 만족할 때 상수 $k$. 5지선다.
  category: "정적분 계산 80+8k = f(2)=32+4k → k=−12"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\int_{-1}^{3}(4x^3+2kx)\,dx=[x^4+kx^2]_{-1}^{3}=80+8k$, $f(2)=32+4k$ 에서 $4k=-48$, $k=-12$ → ⑤.
    시험에 꼭 나오는 문제(난이도 없음) 출발 ★2, 통찰 없음·M_total 5 → 유지 ★2.
  tier: star_2
  mechanism_primary: "∫_{−1}^{3}(4x³+2kx)=80+8k → =f(2)=32+4k → k=−12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0778.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−1,3]·f 의 계수·평가점 2 를 바꿀 수 있음. 제약: k 의 일차방정식 계수(8−4)가 0 이 되지 않게 구간과 평가점을 고르고, 답이 선택지 짝수 격자에 들도록."
    creative: "(1) 구간을 [−a,a] 로 두면 홀수차 항이 사라져 k 가 소거되는 함정(★2 · I-SYM d1) (2) 조건을 ∫_0^2 f = f'(1) 처럼 미분과 섞기(★2) (3) k 를 둘로 늘리고 조건 둘로 연립(★2)."
```

```yaml
- id: RPM-CALC1-0779
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    접선의 기울기가 $2x$ 인 $f$ 가 $\int_0^3 f=0$ 일 때 $\int_{-1}^{2}f(x)\,dx$.
  category: "f'=2x → f=x²+C → ∫_0^3 f=9+3C=0 → C=−3 → ∫_{−1}^{2}(x²−3)=−6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 기울기(도함수)와 정적분 조건으로 f 결정 후 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^2+C$, $\int_0^3 f=9+3C=0$ 에서 $C=-3$. $\int_{-1}^{2}(x^2-3)\,dx=3-9=-6$.
    부정적분 상수를 정적분 조건으로 정하는 표준 절차·통찰 없음·M_total 5 → 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=2x → f=x²+C → 9+3C=0 → C=−3 → ∫_{−1}^{2}(x²−3)=−6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0779.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식(2x → 3x², 2x+1)·조건 구간·목표 구간을 바꿀 수 있음. 제약: C 가 정수가 되도록 조건 구간 적분값을 맞추고, 목표 정적분이 정수가 되게 구간 끝을 정수로."
    creative: "(1) 조건을 「f 의 최솟값」 으로 바꾸면 미분과 결합(★2) (2) 조건 ∫_0^3 f=0 을 「곡선과 x축 사이 넓이가 위아래 같다」 는 서술로 감추기(★3 · I-RT d1) (3) 이차식 계수 둘을 미지로 두고 정적분 조건 둘로 결정(★2~3)."
```

```yaml
- id: RPM-CALC1-0780
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $\int_0^2(4x+2)\,dx-\int_k^2(4t+2)\,dt=84$ 를 만족하는 양수 $k$.
  category: "적분변수 무관 → ∫_0^2 − ∫_k^2 = ∫_0^k → 2k²+2k=84 → (k+7)(k−6)=0 → k=6"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분변수가 달라도 같은 함수이므로 ∫_0^2 − ∫_k^2 = ∫_0^k 로 합치기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분의 성질(구간 합치기)로 미지의 적분 구간 끝 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 적분은 변수 이름만 다르므로 $\int_0^2-\int_k^2=\int_0^k(4x+2)\,dx=2k^2+2k=84$, $(k+7)(k-6)=0$, 양수 $k=6$.
    구간 합치기 EQV d1·변수 표기(T-표기)·양수 선택(T-범위)·M_total 7. 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_0^2 − ∫_k^2 = ∫_0^k → 2k²+2k=84 → k²+k−42=0 → k=6 (k>0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0780.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 4x+2·상수 84 를 바꿀 수 있음. 제약: 2k²+2k=84 처럼 k 의 이차방정식이 정수근을 갖도록 상수를 2k(k+1) 꼴로 맞추고, 음수근은 「양수」 로 배제."
    creative: "(1) 부호를 바꿔 ∫_0^2 + ∫_2^k 로 주면 합치기 방향이 달라짐(★2) (2) k 가 두 개 나오게 「모든 k 의 합」(★2 · I-MI d1) (3) 피적분함수를 이차식으로 올려 삼차방정식 인수분해(★3)."
```

```yaml
- id: RPM-CALC1-0781
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    이차함수 $f$ 가 $\int_{-2}^{2}f=\int_{-2}^{0}f=\int_0^2 f$ 이고 $f(0)=1$ 일 때 $f(2)$.
  category: "A=B+C 이고 A=B=C → B=C=0 → f=ax²+bx+1 로 두 조건 → b=0, a=−3/4 → f(2)=−2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∫_{−2}^{2} = ∫_{−2}^{0} + ∫_0^2 인데 셋이 같으므로 ∫_{−2}^{0}f = ∫_0^2 f = 0 — 등식 사슬을 「두 반구간 적분이 0」 으로 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분 등식 조건으로 이차함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\int_{-2}^{2}=\int_{-2}^{0}+\int_0^2$ 이고 셋이 같으므로 두 반구간 적분이 모두 $0$. $f=ax^2+bx+1$ 로 $\dfrac83a\pm2b+2=0$ 에서 $b=0$, $a=-\dfrac34$, $f(2)=-3+1=-2$.
    등식 사슬을 「모두 0」 으로 옮기는 EQV d2 하나·M_total 6. 「중요」 태그·출발 ★2 에 d2 통찰 → ★3.
  tier: star_3
  mechanism_primary: "A=B+C, A=B=C → B=C=0 → f=ax²+bx+1 → 8a/3+2b+2=0, 8a/3−2b+2=0 → b=0, a=−3/4 → f(2)=−2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0781.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−2,2]·f(0)=1 을 바꿀 수 있음. 제약: 두 반구간 적분이 0 이 되려면 홀수차 항이 0(b=0)이고 짝수 부분이 (8/3)a=−2·f(0) 을 만족해야 하므로 f(0) 을 3 의 배수 계열로 두면 a 가 정수."
    creative: "(1) 셋이 같다는 조건을 「∫_{−2}^{2}f=0, f 는 우함수」 로 풀어쓰면 ★2 (2) 삼차함수로 올리고 조건 하나 추가(★3) (3) 세 적분값을 같은 상수 c≠0 으로 주면 A=2c=c 모순 → 「그런 f 가 없음」 을 보이는 참·거짓(★3 · I-VF d1)."
```

```yaml
- id: RPM-CALC1-0782
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=2x-x^2\ (x\ge1)$, $x^2\ (x\le1)$ 에 대하여 $\int_{-2}^{2}f(x)\,dx$.
  category: "x=1 에서 분할 → ∫_{−2}^{1}x² + ∫_1^2(2x−x²) = 3 + 2/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 정적분(분할)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\int_{-2}^{1}x^2\,dx=3$, $\int_1^2(2x-x^2)\,dx=\dfrac23$, 합 $\dfrac{11}{3}$.
    분할 한 번·통찰 없음·M_total 4 → 출발 ★2 에서 −1 ★1.
  tier: star_1
  mechanism_primary: "x=1 분할 → ∫_{−2}^{1}x²=3 · ∫_1^2(2x−x²)=2/3 → 11/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{11}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0782.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분할점 1·두 조각 식·구간 [−2,2] 를 바꿀 수 있음. 제약: 분할점에서 두 식의 값이 같아야(연속) 발문이 자연스럽고, 조각 적분이 유리수가 되도록 정수 끝점."
    creative: "(1) 한 조각에 미정계수를 두고 연속 조건으로 먼저 결정(★2 · 0794 골조) (2) 절댓값 |x−1| 로 조각을 감추기(★2) (3) ∫_{−2}^{a}f=0 인 a 를 묻기(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0783
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=|x-5|$, $g(x)=x^2+1$ 에 대하여 $\int_1^3(f\circ g)(x)\,dx$.
  category: "합성 → |x²−4| → x=2 분할 → ∫_1^2(4−x²)+∫_2^3(x²−4) = 5/3+7/3 = 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 절댓값 정적분(부호 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(f\circ g)(x)=|x^2-4|$ 이고 $[1,3]$ 에서 $x=2$ 를 경계로 부호가 바뀐다. $\int_1^2(4-x^2)\,dx=\dfrac53$, $\int_2^3(x^2-4)\,dx=\dfrac73$, 합 $4$.
    합성 후 절댓값 분할이라는 표준 절차·통찰 없음·M_total 5 → 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "f(g(x))=|x²−4| → x=2 분할 → 5/3 + 7/3 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0783.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 중심 5·g 의 상수 1·구간 [1,3] 을 바꿀 수 있음. 제약: 합성 결과 |x²−c| 의 근 √c 가 구간 안의 정수여야 분할이 깔끔."
    creative: "(1) 합성 순서를 g∘f 로 바꾸면 (x−5)²+1 로 절댓값이 사라짐(★1) (2) 구간을 [0,3] 으로 넓혀도 분할점은 하나(★2) (3) |x²−4| 의 정적분 값을 주고 위끝을 묻기(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0784
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $0<a<1$ 일 때 $f(a)=\int_0^1(x+a)|x-a|\,dx$ 의 최솟값. 5지선다.
  category: "x=a 분할 → (x+a)(x−a)=x²−a² → f(a)=4a³/3−a²+1/3 → f'(a)=2a(2a−1) → a=1/2 → 1/4"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수가 든 절댓값 정적분을 매개변수의 함수로 보고 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $[0,a]$ 에서 $a^2-x^2$, $[a,1]$ 에서 $x^2-a^2$ 를 적분하면 $f(a)=\dfrac43a^3-a^2+\dfrac13$. $f'(a)=2a(2a-1)$ 로 $a=\dfrac12$ 에서 최소 $\dfrac14$ → ②.
    통찰 없음이나 매개변수 위치의 분할·부호(Mₜ 2)·매개변수 적분·미분까지 M_total 8. 출발 ★2 에서 M_total 8 로 +1 ★3.
  tier: star_3
  mechanism_primary: "|x−a| 를 x=a 에서 분할 → (x+a)(x−a)=x²−a² → f(a)=4a³/3−a²+1/3 → f'(a)=2a(2a−1)=0 → a=1/2 → 1/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0784.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [0,1]·인수 (x+a) 를 (x−a) 나 상수로 바꿀 수 있음. 제약: (x+a)(x−a) 곱이 x²−a² 로 떨어지는 것이 계산을 가볍게 하므로 인수를 바꾸면 계산량 급증. 0<a<1 이 분할점을 구간 안에 두는 조건."
    creative: "(1) 최솟값 대신 최댓값의 존재 여부 참·거짓(끝점 a→0, 1 은 열린 구간이라 없음 · ★3 · I-VF d1) (2) 피적분함수를 |x−a| 만으로 두면 넓이 해석으로 f(a)=a²−a+1/2(★2 · I-RT d1) (3) 구간을 [0,2] 로 두고 a 의 범위를 0<a<2 로 주면 같은 골조(★3)."
```

```yaml
- id: RPM-CALC1-0785
  page: 119
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $\int_{-3}^{3}(x^7-3x^5-x|x|+|x|-1)\,dx$ 의 값. 5지선다.
  category: "기함수 항(x⁷, x⁵, x|x|) → 0 · 우함수 항 |x|, −1 → 2∫_0^3(x−1) = 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대칭 구간에서 기함수 항은 0, 우함수 항은 2∫_0^3 — x|x| 가 기함수임을 알아채는 것이 핵심"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭 구간에서 우함수·기함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^7,\ x^5,\ x|x|$ 는 기함수라 $0$, $|x|$ 와 $-1$ 은 우함수라 $2\int_0^3(x-1)\,dx=2\left(\dfrac92-3\right)=3$ → ③.
    우·기함수 분류 SYM d1(x|x| 의 홀짝이 함정)·M_total 4. 출발 ★2, 통찰이 있어 −1 하지 않음 → ★2.
  tier: star_2
  mechanism_primary: "기함수 항 → 0 · 우함수 항 |x|−1 → 2∫_0^3(x−1) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0785.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀수차 항의 계수·구간 반폭 3·상수항을 바꿀 수 있음. 제약: 답은 우함수 부분 2∫_0^3 만이 결정하므로 |x| 계수와 상수항으로 답을 맞추고, x|x| 같은 「가짜 우함수」 항을 하나는 남길 것."
    creative: "(1) x²|x| 처럼 실제 우함수 절댓값 항을 넣어 분할 계산 추가(★2) (2) 구간을 [−3,1] 로 어긋내면 대칭이 깨져 전부 계산(★3) (3) f(−x)=−f(x) 인 미지 f 와 결합해 ∫_{−a}^{a}(f(x)+x²)dx 로 추상화(★3 · I-SYM d2)."
```

```yaml
- id: RPM-CALC1-0786
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^2+\int_0^1(3x+1)f(t)\,dt$ 가 성립할 때 $f(-1)$.
  category: "(3x+1) 밖으로 → k=∫_0^1 f → f=x²+3kx+k → k=1/3+5k/2 → k=−2/9 → f(−1)=1−2k=13/9"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분변수 t 에 대해 (3x+1) 은 상수이므로 밖으로 빼고 ∫_0^1 f 를 상수 k 로 두어 f 를 k 로 표현한 뒤 k 의 정의에 되넣기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분을 상수로 치환하는 함수 결정(f(x)=g(x)+h(x)·∫f)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $k=\int_0^1 f(t)\,dt$ 로 두면 $f(x)=x^2+3kx+k$, $k=\dfrac13+\dfrac32k+k$ 에서 $k=-\dfrac29$. $f(-1)=1-3k+k=1-2k=1+\dfrac49=\dfrac{13}{9}$.
    상수 치환 EQV d1·분수 연립(Mₖ 2)·M_total 7. 「중요」·출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(3x+1) 밖으로 → k=∫_0^1 f → f=x²+3kx+k → k=1/3+3k/2+k → k=−2/9 → f(−1)=1−2k=13/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{13}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0786.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 항·(3x+1) 의 계수·구간 [0,1]·평가점 −1 을 바꿀 수 있음. 제약: k 의 일차방정식 계수 1−(3/2+1) 이 0 이 되지 않아야 하고(예: (2x+1) 이면 1−(1+1)=−1), 답 분모가 커지지 않게 계수 조정."
    creative: "(1) ∫_0^1 tf(t)dt 도 함께 넣어 상수 둘 연립(★3) (2) f 의 최솟값을 묻기(★3 · 0772 골조) (3) 적분 구간을 [0,a] 로 두고 「f(0)=0 이 되는 a」(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0787
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f$ 의 한 부정적분 $g$ 가 ㈎ $f(x)=2x+2\int_0^1 g(t)\,dt$, ㈏ $g(0)-\int_0^1 g(t)\,dt=\dfrac23$ 을 만족할 때 $g(1)$. 5지선다.
  category: "c=∫_0^1 g → f=2x+2c → g=x²+2cx+d → ㈏ d−c=2/3 · c=∫_0^1 g=1/3+c+d → d=−1/3, c=−1 → g(1)=−4/3"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∫_0^1 g 를 상수 c 로 두고 f 를 적분해 g 를 만들 때 적분상수 d 를 살려 두 미지수(c, d)로 ㈏와 c 의 정의식을 연립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분 g 와 정적분 상수가 얽힌 조건에서 g 결정(기출)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $c=\int_0^1 g$ 로 두면 $f=2x+2c$, $g=x^2+2cx+d$. ㈏에서 $d-c=\dfrac23$, $c=\int_0^1 g=\dfrac13+c+d$ 에서 $d=-\dfrac13$, $c=-1$. $g(1)=1-2-\dfrac13=-\dfrac43$ → ③.
    상수 치환 EQV d1 이지만 적분상수 d 를 빠뜨리는 함정(T-표기)과 c 의 자기참조(T-범위)·미지수 둘 연립으로 M_total 8. 교육청 기출·출발 ★2 에서 M_total 8 로 +1 ★3.
  tier: star_3
  mechanism_primary: "c=∫_0^1 g → f=2x+2c → g=x²+2cx+d → d−c=2/3 · c=1/3+c+d → d=−1/3, c=−1 → g(1)=−4/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0787.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 일차항 2x·㈎ 의 계수 2·㈏ 의 값 2/3·구간 [0,1] 을 바꿀 수 있음. 제약: c 의 정의식에서 c 가 소거되는 구조(∫_0^1 2ct dt = c)가 유지되면 d 가 바로 결정되므로, 계수를 바꾸면 c 의 계수가 살아나 연립이 됨. 답이 선택지 유리수."
    creative: "(1) ㈏를 g(1) 조건으로 바꾸면 c 의 계수가 살아 2×2 연립(★3) (2) g 를 f 의 부정적분 대신 「g'=f, g(0)=1」 로 명시해 d 를 없애면 ★2 (3) f 를 이차식으로 올려 g 가 삼차식(★3)."
```

```yaml
- id: RPM-CALC1-0788
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $\int_1^x\left\{\dfrac{d}{dt}f(t)\right\}dt=2x^3+ax^2-1$ 을 만족하는 다항함수 $f$ 에 대하여 $f'(a)$. ($a$ 는 상수)
  category: "좌변 = f(x)−f(1) → x=1 대입 → a=−1 → 미분 → f'(x)=6x²−2x → f'(−1)=8"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_a^x f'(t)dt = f(x)−f(a) 항등식에서 미정계수·f' 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 $f(x)-f(1)$ 이므로 $x=1$ 에서 $0=2+a-1$, $a=-1$. 양변을 미분해 $f'(x)=6x^2-2x$, $f'(-1)=6+2=8$.
    도함수의 정적분 = 함숫값 차라는 표준 절차·x=1 대입·통찰 없음·M_total 6 → 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_1^x f' = f(x)−f(1) → x=1: 2+a−1=0 → a=−1 → 미분 f'=6x²−2x → f'(−1)=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0788.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝 1·우변 다항식 계수를 바꿀 수 있음. 제약: 우변은 x=아래끝 에서 0 이어야 a 가 결정되므로 상수항을 그에 맞게 두고, 평가점이 a 자신이므로 a 가 정수여야 함."
    creative: "(1) 아래끝을 미지수로, a 를 값으로 주어 아래끝을 묻기(★2 · I-BW d1) (2) 좌변을 ∫_1^x (x−t)f'(t)dt 로 바꾸면 분리 미분(★3 · 0770 골조) (3) f(1) 값을 추가로 주고 f(2) 를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0789
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 $f$ 가 $\lim\limits_{x\to-2}\dfrac{f(x)-\int_{-2}^{x}f(t)\,dt}{x+2}=3$ 을 만족할 때 $f'(-2)$.
  category: "분자 g(x)=f(x)−∫_{−2}^{x}f → 0/0 이므로 g(−2)=f(−2)=0 → 극한 = g'(−2)=f'(−2)−f(−2) → 3"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 존재하고 분모→0 이므로 분자→0, 즉 f(−2)=0 을 먼저 뽑고, 분자 전체를 g(x)−g(−2) 로 보아 극한을 g'(−2) 로 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분이 든 0/0 극한 → 미분계수(f(a)=0 선행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $g(x)=f(x)-\int_{-2}^{x}f(t)\,dt$ 로 두면 $g(-2)=f(-2)$ 이고 분모$\to0$ 이므로 $f(-2)=0$. 극한은 $g'(-2)=f'(-2)-f(-2)=f'(-2)=3$.
    0/0 극한을 미분계수로 읽는 EQV d1(유형 03·04 도구)과 f(−2)=0 을 빠뜨리는 함정·추상 f 로 M_total 7. 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "g(x)=f(x)−∫_{−2}^{x}f → 분모→0 ⇒ g(−2)=f(−2)=0 → 극한=g'(−2)=f'(−2)−f(−2) → f'(−2)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0789.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 −2·극한값 3 을 바꿀 수 있음. 제약: f(−2)=0 이 자동으로 따라오는 구조이므로 「f(−2)+f'(−2)」 를 물으면 답이 f'(−2) 와 같아 함정 문제가 됨."
    creative: "(1) 분자를 f(x)+∫_{−2}^{x}f 로 바꾸면 g'=f'+f 로 부호만 바뀜(★2) (2) 분모를 x²−4 로 두면 1/(x−2) 인수 처리 추가(★2~3) (3) 분자에 ∫_{−2}^{x}f 만 두면 극한 = f(−2) 인 유형 13 골조(★1)."
```

```yaml
- id: RPM-CALC1-0790
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^2+ax-b$ 가 $\lim\limits_{h\to0}\dfrac1h\int_2^{2+h}f(t)\,dt=2$, $\int_0^1 f=1$ 을 만족할 때 $b-a$.
  category: "극한 = f(2)=4+2a−b=2 · ∫_0^1 f=1/3+a/2−b=1 → 연립 → a=−16/9, b=−14/9 → 2/9"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 극한값(f(a))과 정적분 조건으로 미정계수 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 $f(2)=2$, 즉 $2a-b=-2$. 둘째는 $\dfrac a2-b=\dfrac23$. 연립하면 $a=-\dfrac{16}{9}$, $b=-\dfrac{14}{9}$, $b-a=\dfrac29$.
    유형 13 극한과 정적분 조건의 연립·분수 계산(Mₖ 2)·통찰 없음·M_total 7 → 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "lim(1/h)∫_2^{2+h}f = f(2)=2 → 2a−b=−2 · ∫_0^1 f=1 → a/2−b=2/3 → a=−16/9, b=−14/9 → 2/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0790.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 2·정적분값 1·평가점 2 를 바꿀 수 있음. 제약: 두 일차식의 계수쌍 (2, −1), (1/2, −1) 이 독립이어야 하고 답이 유리수. 값을 조절해 a, b 를 정수로 만들면 ★ 은 그대로."
    creative: "(1) 두 조건을 모두 극한 꼴로 주기(★2) (2) 조건 하나를 f 의 극솟값으로 바꿔 미분 결합(★2) (3) 아래끝을 미지수로 확장해 미지수 셋·조건 셋(★3)."
```

```yaml
- id: RPM-CALC1-0791
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    연속함수 $f$ 가 ㈎ $-1\le x\le1$ 에서 $f(x)=-x^2+1$, ㈏ $f(x)=f(x+2)$ 이고 $\int_1^k f=8$ 일 때 상수 $k$.
  category: "한 주기 적분 ∫_{−1}^{1}(1−x²)=4/3 → 8 = 6주기 → k=1+2·6=13"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주기 2 이므로 ∫_1^k f 는 한 주기 적분 4/3 의 정수배 — f≥0 이라 적분이 k 에 대해 증가하므로 8=6·(4/3) 인 k 는 하나"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주기함수의 정적분(적분값으로 구간 끝 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 주기 $[-1,1]$ 의 적분은 $\dfrac43$ 이고 $f\ge0$ 이므로 $\int_1^k f$ 는 $k$ 에 대해 증가한다. $8=6\cdot\dfrac43$ 이므로 $[1,k]$ 가 6주기, $k=1+12=13$.
    주기 적분 EQV d1(유형 UP 14 도구)·k=12 로 쓰는 경계 실수·M_total 6. 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_{−1}^{1}(1−x²)=4/3 → 8÷(4/3)=6 주기 → k=1+2·6=13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0791.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 주기 식·주기 2·적분값 8·시작점 1 을 바꿀 수 있음. 제약: 적분값이 한 주기 적분의 정수배가 아니면 나머지 조각 방정식이 붙어 ★3 이 되고, f≥0 이 깨지면 k 가 여러 개일 수 있음."
    creative: "(1) 적분값을 8+1/3 처럼 두어 반주기 조각 ∫_1^2 f 를 더하게 하기(★3) (2) 시작점을 0 으로 두어 첫 조각이 반주기(★3) (3) f 가 부호를 바꾸는 주기함수로 바꾸고 「k 의 개수」 를 묻기(★4 · I-MI d2)."
```

```yaml
- id: RPM-CALC1-0792
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\int_0^x(3t^2-6t)\,dt$ 가 $x=\alpha$ 에서 극솟값 $\beta$ 를 가질 때 $\alpha+\beta$. 5지선다.
  category: "f'=3x(x−2) → 극소 x=2 → f(2)=8−12=−4 → 2+(−4)=−2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극솟값(구체 피적분함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $f'(x)=3x^2-6x=3x(x-2)$ 로 $x=2$ 에서 극소, $f(2)=[t^3-3t^2]_0^2=-4$. $\alpha+\beta=-2$ → ①.
    「중요」 태그이나 통찰 없음·계산 한 줄·M_total 4 → 출발 ★2 에서 −1 ★1.
  tier: star_1
  mechanism_primary: "f'=3x²−6x=3x(x−2) → 극소 x=2 → f(2)=−4 → α+β=−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0792.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 3t²−6t 의 근(0, 2)·아래끝 0 을 바꿀 수 있음. 제약: 아래끝을 바꾸면 β 가 상수만큼 이동하고, 극소가 되는 근이 큰 쪽(최고차 양수)임을 유지."
    creative: "(1) 극댓값·극솟값의 차를 묻기(★2) (2) 아래끝을 a 로 두고 극솟값이 0 이 되는 a(★2 · I-BW d1) (3) 피적분함수에 미정계수를 두고 극소점 조건으로 결정(★3 · 0767 골조)."
```

```yaml
- id: RPM-CALC1-0793
  page: 120
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^3-12x+a$ 에 대하여 $F(x)=\int_0^x f(t)\,dt$ 가 오직 하나의 극값을 갖도록 하는 양수 $a$ 의 최솟값.
  category: "F'=f → 극값 하나 ⇔ f 부호 변화 한 번 ⇔ f(−2)·f(2)≥0(중근 허용) → (16+a)(a−16)≥0, a>0 → a≥16"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F 의 극값 개수 = F'=f 의 부호 변화 횟수 → 삼차함수 f 의 극댓값·극솟값 곱 ≥0(중근이면 부호가 안 바뀜) 으로 조건을 옮기기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분 함수 F 의 극값 개수 조건 → 삼차 F' 의 실근·부호 변화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $F'=f$ 이므로 $F$ 의 극값 개수는 $f$ 의 부호 변화 횟수. $f'(x)=3x^2-12$ 로 $f(-2)=16+a>0$, $f(2)=a-16$. 부호 변화가 한 번이려면 $f(2)\ge0$($a=16$ 은 $(x-2)^2(x+4)$ 로 $x=2$ 에서 부호 유지). 최솟값 $16$.
    극값 개수를 부호 변화·극값 곱으로 옮기는 EQV d2·경계 a=16 포함 판정(T-경계)·M_total 7. 출발 ★2 에 d2 통찰 → ★3.
  tier: star_3
  mechanism_primary: "F'=f → 극값 1개 ⇔ f 부호 변화 1회 → f(−2)=16+a>0 · f(2)=a−16≥0 → a≥16 → 16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0793.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 −12(→ f' 의 근 ±2)·상수 a 의 부호 조건을 바꿀 수 있음. 제약: 답이 f(극소점)=0 인 a 이므로 극소점 값이 정수가 되게 계수를 3 의 배수 꼴로 두고, a>0 조건이 다른 갈래(a≤−16)를 배제함을 유지."
    creative: "(1) 「극값을 세 개 갖는 a 의 범위」 로 뒤집으면 −16<a<16 (★3 · 같은 골조) (2) a 의 부호 조건을 없애면 a≥16 또는 a≤−16 두 갈래(★3 · I-MI d1) (3) f 의 최고차 계수를 음수로 두면 유일한 극값이 극댓값 — 「극댓값만 갖는다」 로 발문 전환(★3)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0794
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    $f(x)=-x^2+5x\ (x\ge2)$, $x+k\ (x<2)$ 가 모든 실수에서 연속일 때 $\int_{-1}^{3}f(x)\,dx$. ($k$ 는 상수)
  category: "연속 → 6=2+k → k=4 → x=2 분할 → ∫_{−1}^{2}(x+4)+∫_2^3(−x²+5x) = 27/2+37/6 = 59/3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건으로 미정계수 결정 후 구간별 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=2$ 에서 연속: $-4+10=2+k$, $k=4$. $\int_{-1}^{2}(x+4)\,dx=\dfrac{27}{2}$, $\int_2^3(-x^2+5x)\,dx=\dfrac{37}{6}$, 합 $\dfrac{59}{3}$.
    연속 조건 한 줄 + 분할 적분의 표준 절차·통찰 없음·M_total 5. 서술형 출발 ★3 이나 −1 ★2.
  tier: star_2
  mechanism_primary: "x=2 연속 → k=4 → 분할 → 27/2 + 37/6 → 59/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{59}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0794.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분할점 2·두 조각 식·구간 [−1,3] 을 바꿀 수 있음. 제약: k 가 연속 조건에서 정수로 나오게 이차 조각의 값을 맞추고, 분할점이 구간 안에 있어야 두 조각 모두 쓰임."
    creative: "(1) 두 조각 모두에 미정계수를 두고 연속 + 정적분 값 조건으로 연립(★3) (2) 「미분가능」 조건으로 올리면 두 조각의 기울기까지 맞춰야 해 이차 조각에 계수 추가(★3) (3) 조각을 |x−2| 로 감추기(★2)."
```

```yaml
- id: RPM-CALC1-0795
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    $f(-x)+f(x)=0$ 인 다항함수 $f$ 가 $\int_0^4 f=3$, $\int_0^5 f=k+1$, $\int_{-4}^{5}f=2k$ 일 때 상수 $k$.
  category: "기함수 → ∫_{−4}^{0}f=−3 → ∫_{−4}^{5}f=−3+(k+1)=2k → k=−2"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기함수이므로 ∫_{−4}^{0}f=−∫_0^4 f=−3 으로 대칭 구간 값을 뒤집어 세 적분을 한 식으로 잇기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기함수 조건과 정적분 구간 합치기로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기함수라 $\int_{-4}^{0}f=-3$. $\int_{-4}^{5}f=\int_{-4}^{0}f+\int_0^5 f=-3+k+1=2k$ 에서 $k=-2$.
    기함수 대칭 SYM d1 하나가 풀이 전부이고 계산 한 줄. 서술형 출발 ★3 이나 M_total 6 은 f 추상(Mₐ 3) 때문 → −1 ★2.
  tier: star_2
  mechanism_primary: "f 기함수 → ∫_{−4}^{0}f=−3 → −3+(k+1)=2k → k=−2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0795.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 4, 5·적분값 3·k 의 계수 배치를 바꿀 수 있음. 제약: ∫_{−4}^{5}=∫_{−4}^{0}+∫_0^5 로 이어지도록 구간을 겹치게 두고, k 의 일차방정식이 유일해가 되게 계수를 다르게(k+1 vs 2k)."
    creative: "(1) 우함수 조건으로 바꾸면 부호가 +3 (★2) (2) f 에 x² 을 더한 g 의 정적분을 물어 우·기 분리 추가(★3 · I-SYM d2) (3) 조건을 f(2−x)=−f(x) 같은 점대칭으로 옮기면 중심 이동 필요(★4 · I-SYM d2)."
```

```yaml
- id: RPM-CALC1-0796
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    $\int_{-1}^{x}(x-t)f(t)\,dt=2x^3+ax^2-1$ 을 만족하는 $f$ 에 대하여 $f(-1)=b$ 일 때 $ab$. ($a$ 는 상수)
  category: "x=−1 대입 → a=3 · (x−t) 분리 미분 → ∫_{−1}^{x}f=6x²+6x → 미분 → f=12x+6 → f(−1)=−6 → ab=−18"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x∫f−∫tf 로 분리해 미분하면 xf(x) 가 소거되어 ∫_{−1}^{x}f 만 남는 표준 변환(두 번 미분으로 f 복원)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫_a^x (x−t)f(t)dt 꼴 항등식에서 미정계수·f 복원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x=-1$: $-2+a-1=0$, $a=3$. 분리 미분하면 $\int_{-1}^{x}f(t)\,dt=6x^2+6x$, 다시 미분해 $f(x)=12x+6$, $b=f(-1)=-6$. $ab=-18$.
    분리 미분 EQV d1·x=−1 선행 대입·M_total 6. 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "x=−1 → a=3 → 분리 미분 → ∫_{−1}^{x}f=6x²+6x → f=12x+6 → b=−6 → −18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0796.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝 −1·우변 계수(2, a, −1)를 바꿀 수 있음. 제약: 우변이 x=아래끝 에서 0 이 되도록 상수항을 맞춰 a 가 정수로 결정되게 하고, 두 번 미분 뒤 f 가 일차식이므로 f(−1) 이 정수."
    creative: "(1) 우변을 사차식으로 올리면 f 가 이차식 → f 의 최솟값 묻기(★3 · 0773 골조) (2) f(t) 대신 f'(t) 로 주면 f 의 상수항이 정해지지 않아 극값 차만 물을 수 있음(★3~4 · 0770 골조) (3) a 를 주고 아래끝을 묻는 역문제(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0797
  page: 121
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    $f(x)=\int_0^x(t-a)(t-2)\,dt$ 가 $x=2$ 에서 극솟값 $\dfrac23$ 을 가질 때 $f$ 의 극댓값. ($a$ 는 상수)
  category: "f'=(x−a)(x−2) · f(2)=∫_0^2=2a−4/3=2/3 → a=1 (a<2 라 x=2 극소 확인) → 극대 x=1 → f(1)=5/6"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값 조건으로 미정계수 결정 → 다른 극값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=(x-a)(x-2)$ 이고 $f(2)=\int_0^2\{t^2-(a+2)t+2a\}\,dt=2a-\dfrac43=\dfrac23$ 에서 $a=1$. $a<2$ 이므로 $x=2$ 가 극소인 것도 맞다. 극대는 $x=1$, $f(1)=\int_0^1(t-1)(t-2)\,dt=\dfrac56$.
    통찰 없음이나 매개변수 적분·a<2 확인(T-부호)·극댓값 위치 판정(T-경계)·M_total 7. 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=(x−a)(x−2) → f(2)=2a−4/3=2/3 → a=1 → a<2 확인 → 극대 x=1 → f(1)=5/6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0797.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정근 2·극솟값 2/3·아래끝 0 을 바꿀 수 있음. 제약: f(2) 는 a 의 일차식이므로 극솟값을 그에 맞게 두면 a 가 정수. a>2 가 나오면 x=2 가 극대가 되어 발문과 모순이므로 극솟값을 a<2 범위로."
    creative: "(1) 극솟값 대신 「극댓값 5/6」 을 주고 a 를 묻기 — 극대점이 a 라 f(a) 가 a 의 삼차식(★4 · I-BW d2) (2) 극값의 차를 물으면 아래끝 소거(★3) (3) a 를 주고 극솟값이 되는 아래끝을 묻기(★3)."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0798
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    최고차 계수 $1$·$f'(0)=f'(2)=0$ 인 삼차 $f$ 와 양수 $p$ 로 $g(x)=f(x)-f(0)\ (x\le0)$, $f(x+p)-f(p)\ (x>0)$ 을 정의. ㄱ $p=1$ 이면 $g'(1)=0$ · ㄴ $g$ 가 실수 전체에서 미분가능한 양수 $p$ 는 하나 · ㄷ $p\ge2$ 이면 $\int_{-1}^{1}g\ge0$ 의 참·거짓. 5지선다.
  category: "f=x³−3x²+c → ㄱ g'(1)=f'(2)=0 · ㄴ x=0 연속 자동, 미분가능 ⇔ f'(p)=f'(0)=0 ⇔ p=2 · ㄷ ∫_{−1}^{0}g=−5/4, ∫_0^1 g=3p²/2−2p−3/4 는 p≥2 에서 ≥5/4"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ: x=0 에서 두 조각 모두 0 이라 연속은 자동, 미분가능 ⇔ 좌미분계수 f'(0) = 우미분계수 f'(p) ⇔ f'(p)=0, p>0 → p=2 하나"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ: ∫_0^1 g 를 p 의 함수 h(p)=3p²/2−2p−3/4 로 보고 p≥2 에서 증가·h(2)=5/4 로 −5/4 를 상쇄 — 또는 f' 이 [1,∞) 에서 증가하므로 f(x+p)−f(p) ≥ f(x+2)−f(2) 로 p=2 경계로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평행이동으로 이어 붙인 삼차함수 조각의 미분가능성·정적분 부등식(보기 판정 · 기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f'(x)=3x(x-2)$, $f=x^3-3x^2+c$. ㄱ: $g'(1)=f'(2)=0$ 참. ㄴ: $x=0$ 에서 $g$ 는 양쪽 다 $0$ 이라 연속이고, 미분가능 조건은 $f'(0)=f'(p)$, 즉 $p=2$ 뿐 → 참. ㄷ: $\int_{-1}^{0}(x^3-3x^2)\,dx=-\dfrac54$, $\int_0^1\{f(x+p)-f(p)\}\,dx=\dfrac32p^2-2p-\dfrac34$ 는 $p\ge2$ 에서 증가하며 $p=2$ 일 때 $\dfrac54$ 이므로 합 $\ge0$ → 참. ⑤.
    ㄴ 의 미분가능 조건 EQV d1, ㄷ 의 「p 의 함수로 보고 경계 p=2 로 환원」 EQV d2, 매개변수 전개·적분의 계산량(Mₖ 3)·M_total 10. 평가원 기출·실력 Up 출발 ★4 유지(★5 조건인 통찰 3개·SC/VF/SYM/XU 없음).
  tier: star_4
  mechanism_primary: "f'=3x(x−2) → ㄱ g'(1)=f'(2)=0 · ㄴ 미분가능 ⇔ f'(p)=0 ⇔ p=2 · ㄷ −5/4 + (3p²/2−2p−3/4) ≥ 0 (p≥2) → ⑤"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0798.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 근(0, 2)·ㄷ 의 경계 p≥2·구간 [−1,1] 을 바꿀 수 있음. 제약: ㄷ 의 부등식은 p=경계 에서 등호가 성립하도록(3p²/2−2p−2=0 의 근 p=2) 설계된 값이라 근·구간을 바꾸면 경계값을 다시 맞춰야 하고, ㄴ 은 f' 의 0 아닌 근이 하나뿐이어야 「개수 1」."
    creative: "(1) ㄷ 을 「p≥2 일 때 ∫_{−1}^{1}g 의 최솟값」 으로 바꿔 서술형(★4) (2) f'(0)=f'(2)=0 대신 f'(0)=f'(k)=0 로 두면 ㄴ 의 답이 p=k 로 매개화(★4) (3) g 의 오른쪽 조각을 f(x−p)+f(p) 처럼 다른 이동으로 바꾸면 연속 조건부터 다시 따져야 함(★4~5 · I-VF d1)."
```

```yaml
- id: RPM-CALC1-0799
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    기함수 $f$·우함수 $g$ 의 곱 $h=fg$ 가 $\int_{-2}^{2}(x+1)h'(x)\,dx=20$ 일 때 $h(2)$.
  category: "h 기함수 → h' 우함수 → xh' 기함수 → ∫xh'=0 · ∫h'=h(2)−h(−2)=2h(2) → 2h(2)=20 → 10"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기함수×우함수=기함수 h, 기함수의 도함수 h' 는 우함수 → xh'(x) 는 기함수라 대칭 구간 적분 0 — 도함수의 홀짝 반전을 써야 (x+1)h' 이 처리됨"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 ∫_{−2}^{2}h' = h(2)−h(−2) 를 h 기함수로 2h(2) 로 옮기기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "우·기함수의 곱과 도함수의 홀짝성으로 정적분 값에서 함숫값 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $h=fg$ 는 기함수이고 $h'$ 는 우함수. $(x+1)h'=xh'+h'$ 에서 $xh'$ 은 기함수라 적분 $0$, $\int_{-2}^{2}h'=h(2)-h(-2)=2h(2)$. $2h(2)=20$, $h(2)=10$.
    도함수의 홀짝 반전 SYM d2 + 구간 적분을 함숫값 차로 옮기는 EQV d1, 추상 f·g(Mₐ 3)·M_total 7. 실력 Up 출발 ★4 유지(M_total 8 미만이라 +1 없음).
  tier: star_4
  mechanism_primary: "h=fg 기함수 → h' 우함수 → (x+1)h'=xh'(기)+h'(우) → 0 + [h(2)−h(−2)] = 2h(2)=20 → 10"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0799.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−2,2]·인수 (x+1) 의 상수항·적분값 20 을 바꿀 수 있음. 제약: 인수의 홀수차 부분(x)이 소거되고 짝수차 부분(상수)만 남는 구조이므로 (x²+1) 로 바꾸면 ∫x²h' 이 남아 풀리지 않음. 적분값은 2·h(2) 의 배수."
    creative: "(1) f, g 의 홀짝을 바꿔 h 가 우함수가 되면 ∫h'=0 이라 xh' 항이 살아 조건 부족 — 「구할 수 없음」 판정(★4 · I-VF d1) (2) ∫(x+1)h'(x)dx 대신 ∫(x+1)h(x)dx 로 주면 h 의 정적분 조건(★3) (3) h(2) 대신 h(2)−h(−2) 를 물어 대칭을 한 번 덜 쓰게(★3)."
```

```yaml
- id: RPM-CALC1-0800
  page: 121
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    최고차 계수 $4$ 인 삼차 $f$ 로 $g(x)=\int_0^x f(t)\,dt-xf(x)$ 를 정의. 모든 실수에서 $g(x)\le g(2)$ 이고 $g$ 의 극값이 하나뿐일 때 $\int_0^1 g'(x)\,dx$.
  category: "g'=−xf'(x) · g 최대 at 2 → f'(2)=0 · 극값 하나 ⇔ g' 부호 변화 한 번 ⇔ f' 의 다른 근이 0(중근) — 근 2 중근 갈래는 최대점이 0 이 되어 기각 → f'=12x(x−2) → ∫_0^1 g' = ∫_0^1 −12x²(x−2) = 5"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g(x)≤g(2) 가 모든 x 에서 → x=2 가 최대점 → g'(2)=−2f'(2)=0 → f'(2)=0"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g'(x)=−x·f'(x)=−12x(x−2)(x−r) 의 세 근 {0, 2, r} 중 극값이 하나뿐이려면 부호 변화가 한 번 → 근 둘이 겹쳐야(중근) → r=0 또는 r=2"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "r=2 갈래는 g'=−12x(x−2)² 로 x=0 에서만 부호가 바뀌어 최대점이 0 — g(x)≤g(2) 위배로 기각, r=0 만 남음"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "g=∫f−xf 꼴 함수의 최대·극값 개수 조건으로 f' 결정(중근 갈래 기각)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $g'(x)=f(x)-f(x)-xf'(x)=-xf'(x)$. 최대점 $x=2$ 에서 $f'(2)=0$ 이고, $f'(x)=12(x-2)(x-r)$ 로 두면 $g'$ 의 근 $0,2,r$ 중 부호 변화가 한 번이려면 중근이 필요. $r=2$ 면 최대점이 $0$ 이 되어 기각, $r=0$ 이면 $g'=-12x^2(x-2)$ 로 $x=2$ 에서 $+\to-$ 뿐 → 적합. $\int_0^1 g'=\int_0^1-12x^2(x-2)\,dx=-12\left(\dfrac14-\dfrac23\right)=5$.
    최대 조건 EQV d1·극값 개수를 중근 조건으로 옮기는 EQV d2·갈래 기각 VF d1, 추상 f·부호 판정 함정·M_total 10. 실력 Up 출발 ★4. [분류 이슈] 통찰 3개 + VF 로 ★5 필요조건은 채우지만 골조(g'=−xf' 의 부호 변화)가 널리 알려진 기출형이라 ★4 로 두고 기록.
  tier: star_4
  mechanism_primary: "g'=−xf'(x) → f'(2)=0 → f'=12(x−2)(x−r) · 부호 변화 1회 ⇒ r∈{0,2} → r=2 기각(최대점 0) → f'=12x(x−2) → ∫_0^1 g'=−12∫_0^1 x²(x−2)=5"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0800.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 계수 4·최대점 2·적분 구간 [0,1] 을 바꿀 수 있음. 제약: 최고차 계수 c 이면 답이 5c/4 이므로 c 는 4 의 배수로 두고, 최대점을 0 으로 두면 두 갈래가 겹쳐 VF 가 사라짐. 적분 구간이 최대점을 넘으면 g(1)−g(0) 부호가 바뀜."
    creative: "(1) 「g(x)≥g(2)」 최소 조건으로 바꾸면 최고차 계수 부호가 뒤집혀야 함(★4) (2) 극값 개수 조건을 빼면 r 이 결정되지 않아 「r 의 범위」 를 묻는 문제(★4 · I-MI d2) (3) g=∫_0^x f − xf(x) 를 「y=F(x) 위의 점에서 그은 접선의 y절편」 으로 해석하게 유도하는 서술(★5 · I-RT d3)."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 3 · ★2 18 · ★3 17 · ★4 3 · ★5 0
- 통찰형(insight_type) 6(0770·0781·0793·0798·0799·0800) · 절차형 35 · premium 0. 통찰 라벨을 하나라도 가진 블록은 21(d1 단독 15: 0763·0765·0772·0773·0775·0776·0777·0780·0785·0786·0787·0789·0791·0795·0796 포함)
- type_hint 상위: 「정적분으로 정의된 함수의 극값(구체·미정계수)」 계열 5(0767·0768·0769·0792·0797) · 「정적분으로 정의된 함수의 극한 lim(1/h)∫」 계열 4(0760·0761·0762·0790) · 「주기함수의 정적분」 4(0764·0765·0766·0791) · 「∫(x−t)f(t)dt 꼴 분리 미분」 3(0770·0773·0796) · 「정적분을 상수로 치환하는 함수 결정」 3(0772·0786·0787) · 「그래프로 주어진 f·F」 3(0775·0776·0777) · 「우·기함수 대칭 정적분」 3(0785·0795·0799)
- 그림: 3문(`crop:fig-0775.png` · `crop:fig-0776.png` · `crop:fig-0777.png`)
- 벤더 신호 대조: 유형 13 대표 1문 ★1, 중 2문 ★2, 상중 1문 ★3. 유형 UP 대표 4문은 ★2(0764·0775)·★3(0767·0771), 중 8문은 ★2(0766·0769)·★3(6문), 상중 2문은 ★3. 시험에 꼭 나오는 문제 16문은 ★1 2·★2 10·★3 4(0781·0784·0787·0793). 서술형 주관식 4문은 ★2 2·★3 2. 실력 Up 3문은 모두 ★4. 「중요」 3문은 ★1(0792)·★2(0786)·★3(0781), 기출 2문은 ★3(0787)·★4(0798).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0770 | 유형 UP 상중 라벨 ★3 이나 통찰 2개(EQV d1 · EQV d1)·M_total 9 로 +1 ★4 후보. 둘 다 표준 도구 수준(d1)이라 ★3 유지 | ★3 / ★4 |
| RPM-CALC1-0800 | 실력 Up ★4 이나 통찰 3개(EQV d1 · EQV d2 · VF d1) + VF 로 ★5 필요조건 충족. g'=−xf' 부호 변화 골조가 널리 알려진 기출형(novelty 0)이라 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「정적분 함수의 극값」 5 · 「lim(1/h)∫ 극한」 4 · 「주기함수 정적분」 4 · 「(x−t)f(t) 분리 미분」 3 · 「정적분 상수 치환」 3 · 「그래프 f·F」 3 · 「우·기함수 대칭」 3. 이 일곱이 41문 중 25문을 차지한다.
- 통합해도 될 유형: 유형 UP 15 의 0767·0769 와 시험에 꼭의 0792, 서술형 0797 은 「f'=피적분함수 → 임계점 → 정적분으로 극값 계산」 한 골조(미정계수 유무는 하위 변형). 유형 UP 15 의 0770, 유형 UP 16 의 0773, 서술형 0796 은 「∫_a^x(x−t)f(t)dt 분리 후 미분(+x=a 대입)」 하나. 유형 UP 16 의 0772 와 시험에 꼭 0786·0787 은 08-p2 의 「정적분을 포함한 등식」 유형과 같은 골조라 카탈로그에서는 그쪽에 붙이고 「최댓값」·「부정적분 상수」 는 하위 변형으로. 유형 UP 14 의 0764·0766 과 시험에 꼭 0791 은 「주기 길이 구간 적분의 정수배」 하나이며 0765 의 우함수 결합만 하위 변형.
- 따로 세워야 할 유형: 「함수방정식 g(x+h)−g(x)=∫_x^{x+h}f 를 g'=f 로 읽기」(0763) · 「정적분 등식 사슬 → 반구간 적분 0」(0781) · 「정적분 함수의 극값 개수 → F' 부호 변화 · 중근」(0793·0800 — 0800 은 g=∫f−xf 변형과 갈래 기각까지) · 「도함수의 홀짝 반전」(0799) · 「평행이동 조각 함수의 미분가능 + 정적분 부등식」(0798 기출) · 「g(x)=∫_x^{x+1}f 의 최대점 = 대칭축」(0777) · 「매개변수 절댓값 정적분의 최소」(0784) · 「양끝이 x 인 정적분 함수의 구간 최대·최소」(0771).
- ★ 상한 관찰: 절차형만으로는 이 범위에서 ★3(0768·0771·0774·0784·0797)이 상한이고, ★4 는 실력 Up 3문에서만 나타났다. 유형 UP 구역은 대표문제가 오히려 「중」 문항보다 쉬운 경우(0764·0775 → ★2)가 있어 카탈로그 base ★ 는 구역이 아니라 골조 기준으로 잡아야 한다.
