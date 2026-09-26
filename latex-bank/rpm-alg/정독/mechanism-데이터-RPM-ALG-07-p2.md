---
name: mechanism-데이터-RPM-ALG-07-p2
description: RPM 대수 07 삼각함수의 활용(2/3 · 유형 04~13) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 07 삼각함수의 활용
  unit_code: ALG-07
  part: "2/3"
  extract_range: "97~102쪽 · 0731~0763"
  total_problems: 33
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 07 삼각함수의 활용 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 07 삼각함수의 활용 단원의 두 번째 조각(97~102쪽 · 0731~0763 · 33문항)을 다룬다. 범위는 전부 「유형」 구역이며 유형 04(사인법칙으로 모양 결정)부터 유형 13(평행사변형의 넓이)까지 열 유형이 이어진다. 벤더 난이도 신호는 유형별 첫 문항의 「대표문제」 태그(난이도 표시 없음 → ★2 출발)와 나머지 문항의 난이도 「중」(★2) · 「상중」(★3), 그리고 「서술형」 태그(0743 · 0756 · 0763)로 나타난다. 이 범위에는 「유형 UP」·「시험에 꼭 나오는 문제」 구역이 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 그림 문항 13개는 crop 이미지를 보고 라벨 배치를 numeric 제약에 적었다. 답은 전사본 answer 를 그대로 옮겼고 모두 재풀이로 일치했다.

## 문항 데이터

### 유형 04 사인법칙을 이용한 삼각형의 모양 결정

```yaml
- id: RPM-ALG-0731
  page: 97
  vendor_label: "유형 04 사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (b−c)sin A = b sin B − c sin C 가 성립하는 삼각형 ABC 의 모양. 5지선다(정삼각형·이등변·직각).
  category: "사인법칙으로 sin → 변 치환 → 인수분해 → 인수 기각 → 모양 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙을 이용한 삼각형의 모양 결정(sin 을 변으로 치환 → 인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin A = a/2R 로 모두 변으로 바꾸면 (b−c)a = b²−c² → (b−c)(a−b−c)=0. 삼각형 부등식으로 a−b−c≠0 이므로 b=c.
    치환·인수분해·기각의 세 단계는 이 유형의 표준 절차라 통찰 없음. 유형 대표문제 출발점 ★2 · M_total 5(기각 함정 1) → ★2 유지.
  tier: star_2
  mechanism_primary: "사인법칙 sin→변 치환 → (b−c)(a−b−c)=0 → a<b+c 로 둘째 인수 기각 → b=c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0731.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 배치를 순환(예: (a−b)sinC = a sinA − b sinB → a=b)하거나 좌변 계수를 바꿀 수 있음. 제약: 변으로 바꾼 뒤 (x−y)(…)=0 꼴로 인수분해되고 둘째 인수가 삼각형 부등식으로 기각되어야 함. 보기 5개는 정삼각형·이등변 2종·직각 2종 구조 유지."
    creative: "(1) 사인법칙 대신 sin²A = sin²B + sin²C 처럼 바로 피타고라스 꼴을 주면 ★1 (2) 둘째 인수가 기각되지 않고 a=b 또는 직각 두 결론이 남게 짜면 I-MI d1 → ★3 (3) 조건에 cos 를 섞어(예: a sinA − b sinB = (a−b) cosC·…) 사인·코사인 두 법칙을 함께 쓰게 하면 유형 09 골조와 결합 ★3."
```

```yaml
- id: RPM-ALG-0732
  page: 97
  vendor_label: "유형 04 사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    cos²A − cos²B − cos²C = −1 이 성립하는 삼각형 ABC 의 모양. 5지선다.
  category: "cos² = 1−sin² 항등식 → sin² 관계 → 사인법칙 → 피타고라스 관계"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙을 이용한 삼각형의 모양 결정(cos² 항등식 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos²=1−sin² 로 바꾸면 −sin²A + sin²B + sin²C = 0, 사인법칙으로 b²+c²=a² → A=90°.
    항등식 전환과 사인법칙 두 단계 모두 표준이며 함정은 부호 정리 하나(Mt 1). 벤더 중 ★2 · 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "cos²=1−sin² 치환 → sin²B+sin²C=sin²A → 사인법칙 → b²+c²=a² → A=90°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0732.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 배치(cos²A + cos²B − cos²C = 1 → C=90°)와 우변 상수(−1·1)를 바꿀 수 있음. 제약: 항등식 적용 뒤 상수항이 0 으로 소거되고 sin² 항이 정확히 피타고라스 꼴이어야 함."
    creative: "(1) sin² 꼴로 바로 주면 ★1 (2) 계수를 넣어(2sin²A = sin²B + sin²C 등) 인수분해로 이등변·직각 두 결론이 나오게 하면 I-MI d1 → ★3 (3) cos²A = cos²B 처럼 두 각만 묶으면 sinA=sinB 에서 A=B 또는 A+B=180°(기각) → I-VF d1 ★3."
```

```yaml
- id: RPM-ALG-0733
  page: 97
  vendor_label: "유형 04 사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x 에 대한 이차방정식 9a x² − 6√b x sin(A+B) − cos²C + 1 = 0 이 중근을 가질 때 삼각형 ABC 의 모양. 5지선다.
  category: "sin(A+B)=sinC · 1−cos²C=sin²C 정리 → 판별식 0 → sin²C(b−a)=0 → a=b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중근 조건을 이차방정식 판별식(공통수학1)으로 옮겨 삼각형 내각 관계·사인법칙과 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 중근 조건과 사인법칙을 결합한 삼각형 모양 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A+B=π−C 로 sin(A+B)=sinC, 1−cos²C=sin²C 로 정리하면 9a x² − 6√b sinC x + sin²C = 0.
    D/4 = 9b sin²C − 9a sin²C = 9 sin²C (b−a) = 0 이고 sinC≠0 이므로 a=b.
    판별식(다른 단원 도구)과 삼각형 내각 관계를 잇는 결합 1개(XU d1) · 정리 단계가 셋 · sinC≠0 기각. 벤더 상중 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "sin(A+B)=sinC · 1−cos²C=sin²C → 판별식 D/4=9sin²C(b−a)=0 → sinC≠0 → a=b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0733.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 9a·6√b 는 판별식이 sin²C·(변 관계) 로 묶이도록 제곱비(p·a, 2√(p·b))로 맞춰야 함. 문자 짝을 (b, c) 로 바꾸면 b=c. 제약: 판별식이 sin²C 로 깨끗이 인수분해되고 결과가 보기(이등변·직각·정삼각형) 중 하나여야 함."
    creative: "(1) 상수항을 sin²C 대신 다른 변 조합으로 바꿔 b²=ac 같은 관계를 묻는 서답형 ★3 (2) '중근' 을 '실근을 가진다' 로 바꾸면 판별식 부등식 → 변의 부등식 해석 I-EQV 추가 ★4 (3) sin(A+B) 대신 cos(A+B)=−cosC 를 쓰게 하면 코사인법칙 결합(유형 09 골조) ★3."
```

### 유형 05 코사인법칙

```yaml
- id: RPM-ALG-0734
  page: 98
  vendor_label: "유형 05 코사인법칙"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    b=3√2, c=2√3, B=60° 인 삼각형 ABC 에서 a 의 값. 5지선다.
  category: "코사인법칙 b²=a²+c²−2ac cosB → a 의 이차방정식 → 양의 근"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙 — 두 변과 끼인각이 아닌 각으로 나머지 변(이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 각 B 가 끼인각이 아니라 코사인법칙이 a 의 이차방정식 a² − 2√3 a − 6 = 0 이 된다. a = √3 ± 3 중 양수 3+√3.
    이차방정식 풀이와 음의 근 기각은 표준. 유형 대표 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "b²=a²+c²−2ac cosB → a²−2√3a−6=0 → a=√3+3 (양의 근)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0734.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b, c, B(30°·45°·120°) 를 바꿀 수 있음. 제약: 이차방정식의 양의 근이 하나뿐이고 근이 보기 형태(정수 + √정수)로 정리되어야 함(판별식이 완전제곱). B 가 예각이고 b<c 이면 양의 근이 둘이 될 수 있으니 계수 확인."
    creative: "(1) 끼인각 A 를 주고 a 를 묻기(대입 한 번 ★1) (2) 양의 근이 둘 나오도록 짜서 '가능한 a 의 값의 합' → I-MI d1 ★3 (3) 사인법칙으로 C=45° 를 먼저 구하는 갈래(A=75° 가 되어 sin75° 필요)와 비교하게 하면 I-SC 노출 ★3."
```

```yaml
- id: RPM-ALG-0735
  page: 98
  vendor_label: "유형 05 코사인법칙"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행사변형 ABCD 에서 AB=5, BC=3, B=60° 일 때 대각선 BD 의 길이. 그림.
  category: "이웃각 A=120°, AD=BC=3 → 삼각형 ABD 코사인법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙 — 평행사변형의 대각선 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각선 BD 는 각 B 를 끼지 않으므로 삼각형 ABD 에서 A=180°−60°=120°, AD=3 을 써서 BD²=25+9−2·5·3·cos120°=49.
    이웃각 전환과 음의 코사인 처리(Mt 1)는 표준. 벤더 중 ★2 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "평행사변형 이웃각 A=120°, AD=3 → BD²=5²+3²−2·5·3·cos120°=49 → BD=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: "crop:fig-0735.png"
  latex: latex-bank/rpm-alg/items/0735.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC·B(45°·120°) 를 바꿀 수 있음. 제약: BD² 가 완전제곱 또는 √ 정리 가능한 값. 그림 라벨(A 왼쪽 위·B 왼쪽 아래·C 오른쪽 아래·대각선 BD) 고정."
    creative: "(1) 대각선 AC 를 묻기(각 B 를 직접 사용 ★1~2) (2) 두 대각선의 제곱 합 AC²+BD²=2(AB²+BC²) 을 확인하게 하면 I-EQV 가미 ★3 (3) 두 대각선 길이를 주고 각 B 를 역으로 → I-BW d1 ★3."
```

```yaml
- id: RPM-ALG-0736
  page: 98
  vendor_label: "유형 05 코사인법칙"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 10 인 정육각형 F₁ 의 각 변을 3:2 로 내분한 점을 이어 정육각형 F₂ 를 만들 때 두 넓이의 합 S₁+S₂. 그림.
  category: "코너 삼각형(6·4·120°) → F₂ 변의 제곱 76 → 정육각형 넓이 (3√3/2)·변² 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "F₂ 의 한 변을 코너 삼각형(6, 4, 끼인각 120°)의 제3변으로 보거나 S₂ = S₁ − 코너 삼각형 6개 로 도형을 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙 — 정다각형 안에 내분점으로 만든 정다각형의 변·넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 꼭짓점 주변 코너 삼각형은 두 변 6, 4 와 끼인각 120° 이므로 F₂ 의 변² = 36+16+24 = 76. 정육각형 넓이 (3√3/2)·변² 로 S₁=150√3, S₂=114√3.
    코너 분해 착안 1개(RT d1) · cos120° 부호와 코너에서 만나는 길이(6·4) 확인(Mt 1). S₂ = S₁ − 6·(½·6·4·sin120°) 갈래도 같은 답. 벤더 상중 ★3 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "코너 삼각형(6,4,120°) → F₂ 변²=76 → S=(3√3/2)·변² 합 → 264√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$264\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0736.png"
  latex: latex-bank/rpm-alg/items/0736.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변 10 과 내분비 3:2(1:2·2:3)를 바꿀 수 있고 정육각형을 정삼각형(코너각 60°)·정사각형(90°)으로 바꿀 수 있음. 제약: 코너각 = 정n각형 한 내각, 내분 두 길이의 합 = 한 변, 넓이 공식이 있는 정다각형만."
    creative: "(1) S₂/S₁ 비를 묻기(변 길이 소거 → 매개변수화 ★3) (2) 내분비를 t:(1−t) 로 두고 S₂ 최소 → 이차함수 결합 I-XU ★4 (3) 같은 방식으로 F₃, F₄ … 를 만들어 넓이가 등비수열임을 찾게 하면 I-PD ★4."
```

### 유형 06 코사인법칙의 변형

```yaml
- id: RPM-ALG-0737
  page: 98
  vendor_label: "유형 06 코사인법칙의 변형"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    3a+2b−3c=0, 4a−4b+c=0 인 삼각형 ABC 에서 cosA 의 값.
  category: "동차 연립 → a:b:c=2:3:4 → 코사인법칙 변형 대입"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 변형 — 변의 비(연립 조건)로 cos 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘째 식에서 c=4b−4a 를 첫째 식에 넣으면 15a=10b → a:b:c=2:3:4. cosA=(9+16−4)/(2·3·4)=7/8.
    두 동차 일차식이 변의 비만 정한다는 점을 읽고 공식에 넣는 표준 절차(문자 비라 Ma 2). 유형 대표 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "연립 → a:b:c=2:3:4 → cosA=(b²+c²−a²)/2bc=7/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0737.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수는 a:b:c 가 정수비(2:3:4 · 3:5:7 · 4:5:6)가 되게 짜야 함(두 식의 해 공간이 1차원). 제약: 비가 삼각형 부등식을 만족하고 cos 값이 간단한 분수."
    creative: "(1) 비를 바로 주면 ★1 (2) '가장 큰 각의 cos' 로 바꾸면 최대변 판별 추가 → 유형 07 골조 ★2 (3) 조건을 sinA:sinB:sinC 로 주면 사인법칙 결합 ★2~3 (4) 연립을 하나만 주고 '변이 모두 정수·둘레 12' 조건으로 케이스를 세우면 I-VF d1 ★4."
```

```yaml
- id: RPM-ALG-0738
  page: 98
  vendor_label: "유형 06 코사인법칙의 변형"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직육면체에서 AB=AD=3, BF=6, ∠FCH=θ 일 때 cosθ 의 값. 그림.
  category: "입체에서 삼각형 FCH 추출 → 피타고라스로 세 변 → 코사인법칙 변형"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 변형 — 직육면체 단면 삼각형의 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    FC=CH=√(6²+3²)=3√5, FH=3√2(밑면 대각선). cosθ=(45+45−18)/(2·45)=4/5.
    단면 삼각형이 그림에 그려져 있어 세 변을 구해 대입하는 절차. 이등변이라 FH 의 중점으로 직각삼각형을 만드는 갈래도 같은 답. 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "FC=CH=3√5, FH=3√2 → cosθ=(45+45−18)/90=4/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: "crop:fig-0738.png"
  latex: latex-bank/rpm-alg/items/0738.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 3·3·6 을 바꿀 수 있음(정육면체면 cosθ=1/2). 제약: 세 변이 √정수, cos 값이 유리수나 간단한 무리수. 그림 라벨(A 뒤 왼쪽·B 앞 왼쪽·F 아래·C 앞 오른쪽·H 뒤 오른쪽 아래) 고정."
    creative: "(1) 정육면체의 면대각선 셋이 만드는 정삼각형 → 대칭으로 60° I-SYM 가미 ★2 (2) 각 대신 삼각형 FCH 의 넓이 → sin 으로 이어 유형 10 결합 ★3 (3) 세 모서리를 a, b, c 로 두고 cosθ 를 식으로 → Ma 상승 ★3."
```

```yaml
- id: RPM-ALG-0739
  page: 98
  vendor_label: "유형 06 코사인법칙의 변형"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 y=3x, y=x 가 이루는 예각 θ 의 cosθ 값. 그림.
  category: "직선 위 점 잡기 → 삼각형 O(0,0)·(1,3)·(1,1) → 코사인법칙 변형"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선의 사잇각을 원점과 두 직선 위 점으로 만든 삼각형의 내각으로 옮김(직선 → 삼각형)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙의 변형 — 두 직선이 이루는 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O, A(1,3), B(1,1) 을 잡으면 OA=√10, OB=√2, AB=2. cosθ=(10+2−4)/(2·√10·√2)=2√5/5.
    직선의 각을 세 점의 삼각형으로 바꾸는 표현 전환 1개(RT d1)이며 이후는 대입. 벤더 중 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "O(0,0)·(1,3)·(1,1) 삼각형 → cosθ=(10+2−4)/(2·√10·√2)=2√5/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: "crop:fig-0739.png"
  latex: latex-bank/rpm-alg/items/0739.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(3, 1)를 (2, −1/2)·(2, 1) 등으로 바꿀 수 있음. 제약: 잡은 점의 좌표가 정수, cos 가 √ 정리 가능, 예각을 묻는지(둔각이면 cos<0) 확인."
    creative: "(1) 기울기 m 인 직선과 y=x 의 사잇각이 45° 가 되는 m 을 역으로 → I-BW ★3 (2) 원점을 지나지 않는 두 직선(교점 계산 추가) ★3 (3) 세 직선이 만드는 삼각형의 최대각 → 유형 07 결합 ★3~4."
```

```yaml
- id: RPM-ALG-0740
  page: 98
  vendor_label: "유형 06 코사인법칙의 변형"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB=8, BC=12, CA=10 인 예각삼각형에서 BC 를 1:3 으로 내분하는 점 D 에 대해 선분 AD 의 길이. 그림.
  category: "cosB(삼각형 ABC) → 삼각형 ABD 에서 코사인법칙 → AD"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙의 변형 — 공통각으로 내분점까지의 선분 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cosB=(64+144−100)/(2·8·12)=9/16, BD=3. AD²=64+9−2·8·3·(9/16)=46.
    공통각 B 를 매개로 코사인법칙을 두 번 쓰는 표준 골조(스튜어트 정리형). 벤더 상중 ★3 · 통찰 없음 · M_total 6 → ★3 유지.
    [분류 이슈] 절차형 두 단계 대입이라 체감은 ★2~3 경계 — 라벨은 벤더 ★3 로 두고 기록.
  tier: star_3
  mechanism_primary: "cosB=9/16 (ABC) → AD²=AB²+BD²−2·AB·BD·cosB=46 → AD=√46"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{46}$'
  answer_source: "답지"
  figure: "crop:fig-0740.png"
  latex: latex-bank/rpm-alg/items/0740.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변(8·12·10)과 내분비(1:3)를 바꿀 수 있음. 제약: cosB 가 유리수, AD² 정수, 예각삼각형 조건(최대변² < 나머지 제곱 합) 유지. 그림 라벨(B 왼쪽·D 가 B 쪽·C 오른쪽) 고정."
    creative: "(1) 중선(1:1)으로 바꾸면 중선정리 갈래와 비교 → I-SC 노출 ★3 (2) AD 를 주고 내분비를 역으로 → I-BW ★3 (3) 외분점 D 로 바꾸면 각 180°−B 처리(T-부호) 추가 ★3."
```

### 유형 07 삼각형의 최대각, 최소각

```yaml
- id: RPM-ALG-0741
  page: 99
  vendor_label: "유형 07 삼각형의 최대각, 최소각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 변의 길이가 1, 2√2, √13 인 삼각형 ABC 의 최대각의 크기.
  category: "최대변 √13 의 대각 → 코사인법칙 변형 → 음의 cos 판독"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 최대각(세 변이 주어진 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최대각은 최대변 √13 의 대각. cos=(1+8−13)/(2·1·2√2)=−1/√2 → 135°.
    최대변 판별과 음의 코사인 판독(Mt 1)은 표준. 유형 대표 ★2 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "최대변 √13 → cosθ=(1+8−13)/(4√2)=−√2/2 → θ=135°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$135^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0741.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꾸되 cos 가 특수각 값(±1/2, ±√2/2, ±√3/2, 0)이 되게(예: 3, 5, 7 → 120°). 제약: 삼각형 부등식, 최대변이 명확."
    creative: "(1) 최소각으로 바꾸기(★2) (2) 세 변이 등차수열(n−1, n, n+1)일 때 최대각이 둔각이 되는 n 의 범위 → I-EQV(부등식) ★3 (3) 최대각 크기를 주고 셋째 변을 역으로 → 이차방정식 I-BW ★3."
```

```yaml
- id: RPM-ALG-0742
  page: 99
  vendor_label: "유형 07 삼각형의 최대각, 최소각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 변이 a, b, √(a²+ab+b²) (a>b) 인 삼각형 ABC 의 최대각의 크기. 5지선다.
  category: "최대변 판별 → 코사인법칙 변형 → 문자 소거 → −1/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 최대각(문자로 표현된 세 변)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a²+ab+b² > a² 이므로 √(a²+ab+b²) 가 최대변. cos=(a²+b²−(a²+ab+b²))/(2ab)=−1/2 → 120°.
    최대변 판별(Mt 1)과 문자 소거 한 줄. a>b 조건은 답에 영향 없음. 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "최대변 √(a²+ab+b²) → cos=−ab/(2ab)=−1/2 → 120°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0742.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "셋째 변을 √(a²−ab+b²)(60°)·√(a²+√2ab+b²)(135°)·√(a²+√3ab+b²)(150°) 로 바꿀 수 있음. 제약: 분자에서 a², b² 가 소거되어 ab 항만 남아야 함. a>b 조건은 장식이라 빼도 됨."
    creative: "(1) '최대각이 120° 가 되도록 하는 셋째 변' 을 역으로 → I-BW ★3 (2) 세 변 a, b, c 에 c²=a²+ab+b² 조건을 주고 넓이 (√3/4)ab 까지 → 유형 10 결합 ★3 (3) 셋째 변을 √(a²+kab+b²) 로 두고 둔각 조건 k 의 범위 → I-EQV ★3."
```

```yaml
- id: RPM-ALG-0743
  page: 99
  vendor_label: "유형 07 삼각형의 최대각, 최소각"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    세 변이 (2a−b)/2 = (2b−c)/3 = (4c−5a)/5 를 만족하는 삼각형 ABC 의 최소각 θ 에 대한 cosθ. 서술형.
  category: "연비 =k → 연립 → a:b:c=3:4:5 → 최소변 대각 cos"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연비 조건으로 변의 비 확정 → 최소각의 cos"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통값을 k 로 놓고 풀면 a=3k, b=4k, c=5k. 최소각은 a 의 대각이고 cosθ=(16+25−9)/40=4/5 (3:4:5 직각삼각형이라 바로 4/5).
    =k 매개변수화와 연립은 서술형 표준 절차. 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "=k → 연립 → a:b:c=3:4:5 → 최소변 a 대각 cosθ=(b²+c²−a²)/2bc=4/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0743.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연비 계수를 바꿔 a:b:c 가 다른 정수비(2:3:4 · 4:5:6)가 되게. 제약: 연립이 유일한 비를 주고(계수 행렬 랭크 2), 삼각형 부등식, cos 가 간단한 분수."
    creative: "(1) 3:4:5 를 드러내고 직각 여부만 묻기 ★1 (2) 최소각 대신 '최대각과 최소각의 합' 같은 각 관계 → 유형 08 결합 ★3 (3) 연비를 sin 의 연비로 주면 사인법칙 단계 추가 ★2~3."
```

```yaml
- id: RPM-ALG-0744
  page: 99
  vendor_label: "유형 07 삼각형의 최대각, 최소각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=6, c=3 인 삼각형 ABC 에서 cosC 가 최솟값을 갖도록 하는 b 의 값.
  category: "코사인법칙 변형 → cosC=(b²+27)/(12b) → b+27/b 로 분리 → 산술·기하평균 등호"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cosC 를 b 의 식으로 쓴 뒤 (1/12)(b+27/b) 로 갈라 산술·기하평균(절대부등식 단원)으로 최솟값 — 삼각함수 활용과 부등식의 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "cos 값의 최대·최소(코사인법칙 + 산술·기하평균)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cosC=(36+b²−9)/(12b)=(1/12)(b+27/b) ≥ (1/12)·2√27=√3/2, 등호 b=3√3 (삼각형 부등식 3+3√3>6 만족).
    최솟값을 묻는 cos 식을 절대부등식 꼴로 재배열하는 단원 간 결합 1개(XU d2 — 분리 착안 필요) · b 범위 함정(Mt 1). 벤더 상중 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "cosC=(b²+27)/(12b)=(1/12)(b+27/b) → AM-GM 등호 b²=27 → b=3√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0744.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, c 를 바꿀 수 있음. 제약: a>c 여야 b+(a²−c²)/b 꼴 AM-GM 이 성립, 등호 b=√(a²−c²) 가 삼각형 부등식을 만족해야 함. 최솟값 자체(cosC=√(a²−c²)/a)도 물을 수 있음."
    creative: "(1) cosC 의 최솟값(=C 의 최댓값)을 각으로 답하게 ★3 (2) a<c 로 바꾸면 최솟값이 없어 b 의 범위 문제로 전환 → I-EQV/VF ★4 (3) 좌표평면에서 점 C 가 원 위를 움직일 때 각의 최대 → I-RT ★4."
```

### 유형 08 사인법칙과 코사인법칙

```yaml
- id: RPM-ALG-0745
  page: 99
  vendor_label: "유형 08 사인법칙과 코사인법칙"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=6, c=3, B=60° 인 삼각형 ABC 의 외접원의 넓이. 5지선다.
  category: "코사인법칙 b=3√3 → 사인법칙 2R=b/sinB → πR²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙과 코사인법칙 — 두 변과 끼인각으로 외접원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b²=36+9−18=27 → b=3√3. 2R=b/sinB=6 → R=3 → 9π.
    두 법칙을 순서대로 한 번씩 쓰는 유형의 기본 골조. 2R 을 R 로 오인하는 함정(Mt 1). 유형 대표 ★2 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "b²=a²+c²−2ac cosB=27 → 2R=b/sinB=6 → S=πR²=9π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0745.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, c, B(120°·45°) 를 바꿀 수 있음. 제약: b² 가 완전제곱 또는 √ 정리, R² 가 정수(보기 nπ)."
    creative: "(1) 외접원 넓이 대신 둘레·호 AC 의 길이 → 부채꼴 결합 ★2 (2) R 을 주고 B 를 역으로 → I-BW ★3 (3) 끼인각이 아닌 각을 주면 이차방정식(유형 05 골조)이 앞에 붙어 ★3."
```

```yaml
- id: RPM-ALG-0746
  page: 99
  vendor_label: "유형 08 사인법칙과 코사인법칙"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 7 인 원에 내접하는 삼각형에서 a=7√3, c=2b, 90°<A<180° 일 때 b 의 값. 5지선다.
  category: "사인법칙 sinA=a/2R → 둔각 A=120° → 코사인법칙에 c=2b 대입 → b"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인법칙과 코사인법칙 — 외접원으로 각 확보 후 변의 관계로 변"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sinA=a/2R=√3/2, 둔각 조건으로 A=120°. a²=b²+4b²−2·b·2b·cos120°=7b² → b²=21.
    각을 사인법칙으로 확보하고 코사인법칙에 c=2b 를 대입하는 표준 순서(둔각 선택·cos 부호 Mt 1). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "sinA=a/2R=√3/2, A 둔각 → 120° → 147=b²+4b²+2b² → b=√21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0746.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "R·a 는 sinA 가 특수각 값이 되게(a=2R sinA), c=kb 의 k 를 바꿀 수 있음. 제약: b²=a²/(k²+k+1)(A=120°) 가 √ 정리 가능. 둔각 조건을 빼면 A=60°·120° 두 경우."
    creative: "(1) 둔각 조건을 빼고 '가능한 b 의 값의 곱' → I-MI d1 ★3 (2) b, c 를 주고 R 을 묻기 ★2 (3) c=2b 대신 b+c=k 로 주면 연립 이차 → ★3."
```

```yaml
- id: RPM-ALG-0747
  page: 99
  vendor_label: "유형 08 사인법칙과 코사인법칙"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    6sinA = 2√3 sinB = 3sinC 를 만족하는 삼각형 ABC 의 세 내각 중 가장 작은 각의 크기.
  category: "등식 사슬 → sin 의 역수 비 → 사인법칙으로 변 비 1:√3:2 → 최소변 대각"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "6sinA=2√3sinB=3sinC 를 sinA:sinB:sinC = 1/6 : 1/(2√3) : 1/3 (역수 비)로 읽고 사인법칙으로 변 비 1:√3:2 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sin 의 등식 → 변의 비 → 각의 크기(사인·코사인법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통값을 k 로 두면 a:b:c=1:√3:2 → 30°-60°-90° 삼각형. 최소각은 a 의 대각이고 cosA=(3+4−1)/(4√3)=√3/2 → 30°.
    등식을 역수 비로 해석하는 단계 1개(EQV d1) · 계수를 그대로 비로 쓰는 함정(Mt 1). 벤더 중 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "역수 비 → a:b:c=1:√3:2 → cosA=(3+4−1)/(2·√3·2)=√3/2 → 30°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0747.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿔 변 비가 특수 삼각형(1:1:√2 · 1:√3:2 · 2:3:4)이 되게. 제약: 역수를 취했을 때 비가 정리되고 cos 가 특수각 값 또는 간단한 분수."
    creative: "(1) 가장 큰 각을 묻기(둔각 여부 T-부호) ★2 (2) 넓이·외접원 반지름을 추가로 주고 변의 실제 길이 → 유형 11 결합 ★3 (3) 등식 사슬 대신 a·sinA : b·sinB 같은 곱 조건 → 변의 제곱 비 I-EQV d2 ★3."
```

```yaml
- id: RPM-ALG-0748
  page: 99
  vendor_label: "유형 08 사인법칙과 코사인법칙"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원에 내접하는 사각형 ABCD 에서 AB=2, BC=√6−√2, A=75°, B=135° 일 때 CD 의 길이.
  category: "내접사각형 대각 보각 → 삼각형 ABC 코사인법칙 AC → 공통 외접원 2R → 각 분해 → 사인법칙 CD"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내접사각형의 두 삼각형 ABC·ACD 가 같은 외접원(2R=AC/sinB=4)을 공유함을 써서 ∠ACB=30°, ∠CAD=60°, CD=2R·sin∠CAD 로 각·변 조건을 하나의 원에 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형 — 사인·코사인법칙으로 대변 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C=105°, D=45°. AC²=4+(8−4√3)+(4√3−4)=8 → AC=2√2, 2R=AC/sin135°=4.
    AB=2R·sin∠ACB → sin∠ACB=1/2 → 30°(150° 는 각 합 위배) → ∠BAC=15°, ∠CAD=60° → CD=4·sin60°=2√3.
    두 삼각형을 공통 외접원으로 잇는 통합 1개(CON d2) · 무리수 계산 부담(Mk 3) · 각 후보 기각(Mt 1). 벤더 상중 ★3 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "대각 보각 → AC=2√2 (코사인) → 2R=4 → ∠ACB=30° → ∠CAD=60° → CD=2R·sin60°=2√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0748.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, BC, A, B 를 바꾸되 AC 가 √ 정리되고 ∠ACB 가 특수각(2R 정수)이 되게. 제약: A+C=B+D=180°, sin 의 두 후보 중 하나가 각 합으로 기각되어야 함. BC=√6−√2 는 sin15°·2R=4 와 짝."
    creative: "(1) CD 대신 외접원 반지름을 묻기 ★2 (2) 사각형 넓이까지 → 유형 12 결합 ★4 (3) 각 A 를 감추고 CD 를 주어 각을 역으로 → I-BW ★4 (4) 톨레미 정리 갈래(AC·BD=AB·CD+BC·AD)와 비교하게 하면 I-SC 노출."
```

### 유형 09 코사인법칙을 이용한 삼각형의 모양 결정

```yaml
- id: RPM-ALG-0749
  page: 100
  vendor_label: "유형 09 코사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a cosC = c cosA 를 만족하는 삼각형 ABC 의 모양. 5지선다.
  category: "코사인법칙 변형 대입 → 분모 소거 → a²=c²"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙을 이용한 삼각형의 모양 결정(cos 를 변으로 치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cosA, cosC 를 변으로 바꾸면 (a²+b²−c²)/2b = (b²+c²−a²)/2b → a²=c² → a=c.
    대입 한 번으로 끝나는 최소 절차라 교과서 구역 문항과 같은 노동량. 유형 대표 출발점 ★2 이나 통찰 0·M_total 4 → −1 → ★1.
    [분류 이슈] 유형 대표문제를 출발점보다 낮게 판정(1단 차) — 기록만.
  tier: star_1
  mechanism_primary: "cosA, cosC 코사인법칙 변형 대입 → a²−c²=c²−a² → a=c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0749.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 문자를 순환(b cosC = c cosB → b=c, a cosB = b cosA → a=b)할 수 있음. 제약: 대입 후 분모가 소거되고 변의 제곱 관계가 한 줄로 남아야 함."
    creative: "(1) 두 조건(a cosC = c cosA 와 b cosC = c cosB)을 함께 주어 정삼각형 → I-CON d1 ★2 (2) 우변에 계수를 넣어(a cosC = 2c cosA) 인수분해 케이스가 생기게 → I-MI ★3 (3) sinA cosC = sinC cosA 로 바꾸면 사인법칙을 먼저 써야 함(유형 04 결합) ★2."
```

```yaml
- id: RPM-ALG-0750
  page: 100
  vendor_label: "유형 09 코사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a cosB − b cosA = c 가 성립하는 삼각형 ABC 의 모양. 5지선다(빗변 지정 직각삼각형 포함).
  category: "코사인법칙 변형 대입 → 두 분수의 차 정리 → a²=b²+c²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인법칙을 이용한 삼각형의 모양 결정(cos 를 변으로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입하면 (a²+c²−b²)/2c − (b²+c²−a²)/2c = c → (2a²−2b²)/2c = c → a²=b²+c². 빗변 a.
    부호 정리 함정 하나(Mt 1) 있는 표준 대입. 벤더 중 ★2 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "cosA, cosB 치환 → (a²−b²)/c=c → a²=b²+c² → 빗변 a 인 직각삼각형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0750.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호·문자를 바꿔 b cosA − a cosB = c (→ b²=a²+c², 빗변 b) 등으로. 제약: 결과가 보기(빗변 a / 빗변 c / 이등변) 중 하나이고 분모 2c 가 공통으로 소거되어야 함."
    creative: "(1) a cosB + b cosA = c 는 항등식(제1코사인법칙)이라 '항상 성립하는가' 를 ㄱㄴㄷ 로 → I-EQV ★3 (2) 넓이 조건을 추가해 변의 실제 길이 → 유형 10 ★3 (3) 사인법칙 조건과 섞어 직각+이등변 두 결론 → I-CON d1 ★3."
```

```yaml
- id: RPM-ALG-0751
  page: 100
  vendor_label: "유형 09 코사인법칙을 이용한 삼각형의 모양 결정"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    tanA sinA = tanB sinB 가 성립하는 삼각형 ABC 의 모양. 5지선다.
  category: "tan→sin/cos · sin²A cosB = sin²B cosA → 사인·코사인법칙 대입 → 삼차식을 (a−b) 로 묶기"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건이 a↔b 에 대해 반대칭이므로 (a−b) 인수를 목표로 삼차식을 묶음: a³−b³ + c²(a−b) + ab(a−b) = (a−b)((a+b)²+c²)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "코사인법칙을 이용한 삼각형의 모양 결정(tan·sin 혼합 조건 · 삼차식 인수분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sin²A cosB = sin²B cosA 에 두 법칙을 넣으면 a(a²+c²−b²) = b(b²+c²−a²) → (a−b)(a²+2ab+b²+c²)=0 → a=b (둘째 인수는 양수라 기각).
    삼차식을 (a−b) 로 묶는 대칭 착안 1개(SYM d1)와 무거운 대수(Mk 3) · 인수 기각(Mt 1). 벤더 상중 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "sin²A cosB=sin²B cosA → a(a²+c²−b²)=b(b²+c²−a²) → (a−b)((a+b)²+c²)=0 → a=b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0751.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 쌍을 (B, C)·(A, C) 로 바꿀 수 있음. 제약: 좌우 대칭 구조를 유지해야 (a−b) 인수가 나옴. 계수를 넣으면 인수분해가 깨지므로 비추천."
    creative: "(1) sinA tanB = sinB tanA (→ cosA=cosB 한 줄) 로 바꾸면 ★1~2 (2) a sinA = b sinB → a²=b² ★2 (3) tanA : tanB = a² : b² 같은 비 조건으로 바꾸면 정리 뒤 (a²−b²)(…) 케이스가 생겨 직각 또는 이등변 → I-MI d1 ★4."
```

### 유형 10 삼각형의 넓이

```yaml
- id: RPM-ALG-0752
  page: 100
  vendor_label: "유형 10 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    AB=6, AC=3, ∠A=120° 인 삼각형에서 ∠A 의 이등분선이 BC 와 만나는 점 D 에 대해 AD 의 길이. 그림.
  category: "S(ABC) = S(ABD) + S(ACD) 넓이 등식 → AD"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 AD 를 직접 구하지 않고 넓이 분할 등식 ½·6·3·sin120° = ½·6·x·sin60° + ½·3·x·sin60° 으로 옮김(길이 → 넓이)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 넓이 — 각의 이등분선 길이(넓이 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ½·18·sin120° = ½·(6x+3x)·sin60° → 9√3/2 = 9√3x/4 → x=2.
    각의 이등분선 길이를 넓이 등식으로 바꾸는 표현 전환 1개(RT d1). 코사인법칙으로 BC, 내분비 2:1 로 BD 를 구해 다시 코사인법칙을 쓰는 갈래는 훨씬 길다. 유형 대표 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "넓이 분할 ½·6·3·sin120° = ½·(6+3)·AD·sin60° → AD=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0752.png"
  latex: latex-bank/rpm-alg/items/0752.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC, A(60°·90°·120°) 를 바꿀 수 있음. 제약: AD = 2·AB·AC·cos(A/2)/(AB+AC) 가 간단한 값(A=120° 면 AD=AB·AC/(AB+AC)). 그림 라벨(B 왼쪽·C 오른쪽·D 는 BC 위·A 위) 고정."
    creative: "(1) AD 를 주고 AC 를 역으로 → I-BW ★3 (2) 이등분선 대신 ∠A 를 1:2 로 나누는 선분(sin40°·sin80° 가 나오지 않게 A=90° 로) ★3 (3) 두 삼각형 ABD, ACD 의 넓이 비가 AB:AC 임을 묻기 ★2."
```

```yaml
- id: RPM-ALG-0753
  page: 100
  vendor_label: "유형 10 삼각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB=√10, AC=2√2 인 예각삼각형의 넓이가 2√3 일 때 sin(π/2+A)·cos(3π/2+A) 의 값.
  category: "넓이 → sinA → 예각 cosA → 각 변환 공식으로 cosA·sinA"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이로 sin·cos 확보 → 각 변환 공식 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ½·√10·2√2·sinA = 2√3 → sinA=√15/5, 예각이라 cosA=√10/5. sin(π/2+A)=cosA, cos(3π/2+A)=sinA 로 곱은 √150/25=√6/5.
    넓이 공식과 06 단원 각 변환 공식을 차례로 쓰는 절차이며 결합은 문항이 지시. 부호 함정(cos(3π/2+A)=+sinA · 예각 cosA>0, Mt 1). 벤더 중 ★2 · M_total 7 → ★2.
    [분류 이슈] 각 변환 공식(06 삼각함수) 결합을 I-XU 로 볼지 — 같은 과목 안 인접 단원이고 결합이 발문에 명시되어 절차형으로 둠.
  tier: star_2
  mechanism_primary: "S=½·bc·sinA → sinA=√15/5 → cosA=√10/5 → 식 = cosA·sinA = √6/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{6}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0753.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AC·넓이를 바꾸되 sinA<1, cosA 가 √ 정리되게. 제약: 넓이 = ½·AB·AC·sinA. 예각 조건을 둔각으로 바꾸면 cosA 부호 반전."
    creative: "(1) 예각 조건 삭제 → cosA 부호 두 경우 → I-MI d1 ★3 (2) 각 변환 대신 tanA 나 sin(A+π) 를 묻기 ★2 (3) 넓이 대신 외접원 R 을 주면 sinA=a/2R 로 유형 08 결합 ★3."
```

```yaml
- id: RPM-ALG-0754
  page: 100
  vendor_label: "유형 10 삼각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 2 인 원 O 에 내접하는 삼각형 ABC 에서 호 AB:BC:CA = 3:4:5 일 때 삼각형의 넓이. 5지선다. 그림.
  category: "호의 비 → 중심각 90°·120°·150° → 세 삼각형 OAB·OBC·OCA 넓이 합"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "호의 비를 중심각으로 읽고 삼각형을 중심 O 기준 세 이등변삼각형(두 변 R, 끼인각 = 중심각)으로 분할"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "외접원의 중심으로 분할한 삼각형의 넓이(호의 비 → 중심각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심각 = 360°×(3, 4, 5)/12 = 90°, 120°, 150°. S = ½·2·2·(sin90°+sin120°+sin150°) = 2(1+√3/2+½) = 3+√3.
    원주각 60°·75°·45° 로 변을 구하는 갈래는 sin75° 가 필요해 길다. 중심 분할 착안 1개(RT d1). 벤더 중 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "호 비 → 중심각 90°·120°·150° → S=½R²(sin90°+sin120°+sin150°)=3+√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0754.png"
  latex: latex-bank/rpm-alg/items/0754.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름과 호의 비를 바꾸되 세 중심각이 특수각(합 360°)이 되게. 제약: 세 중심각이 모두 180° 미만이면 단순 합; 하나가 180° 를 넘으면 O 가 삼각형 밖이라 넓이 차 계산. 그림 라벨(A 위·B 왼쪽·C 오른쪽 아래·O 중심) 고정."
    creative: "(1) 한 호가 반원을 넘게(중심각 210°) 하여 O 가 밖에 있는 경우 → 부호 있는 넓이 처리 I-EQV ★3 (2) 넓이 대신 둘레(현 = 2R·sin(중심각/2)) ★2 (3) 넓이가 최대가 되는 호의 비(정삼각형) → I-SYM ★3."
```

### 유형 11 삼각형의 넓이; 세 변의 길이를 알 때

```yaml
- id: RPM-ALG-0755
  page: 101
  vendor_label: "유형 11 삼각형의 넓이; 세 변의 길이를 알 때"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=7, b=5, c=8 인 삼각형 ABC 의 내접원의 반지름. 5지선다.
  category: "cosA=1/2 → sinA → S=10√3 → S=½r(a+b+c) → r"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 변의 길이 → 넓이 → 내접원의 반지름"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cosA=(25+64−49)/80=1/2 → A=60° → S=½·5·8·sin60°=10√3. S=½·r·20 → r=√3. 헤론 공식 갈래도 같은 값.
    공식을 순서대로 잇는 유형 기본 절차. 유형 대표 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cosA=1/2 → S=½·5·8·sin60°=10√3 → r=2S/(a+b+c)=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0755.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 한 각의 cos 가 특수각 값이 되는 조합(5·7·8 · 7·8·13 · 3·5·7)이나 헤론이 깔끔한 조합(13·14·15)으로. 제약: 둘레가 짝수면 r 계산이 정리됨."
    creative: "(1) 외접원 반지름 R 로 바꾸기(2R=a/sinA) ★2 (2) 내접원의 넓이·둘레 ★2 (3) 세 변이 연속 정수 n−1, n, n+1 이고 한 각이 120° 일 때 n → I-BW ★3."
```

```yaml
- id: RPM-ALG-0756
  page: 101
  vendor_label: "유형 11 삼각형의 넓이; 세 변의 길이를 알 때"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    세 변이 9, 10, 11 인 삼각형의 외접원 반지름 R 과 내접원 반지름 r 에 대해 R−r 의 값. 서술형.
  category: "cosC=1/3 → sinC → S → R=c/(2sinC), r=S/s → R−r"
  M: {s: 2, k: 3, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 변의 길이 → 넓이 → 외접원·내접원의 반지름"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    11 의 대각 C: cosC=(81+100−121)/180=1/3, sinC=2√2/3, S=½·9·10·(2√2/3)=30√2. R=11/(2·2√2/3)=33√2/8, r=30√2/15=2√2 → R−r=17√2/8.
    공식 넷을 순서대로 쓰는 계산형(Mk 3 · 분모 유리화). 벤더 중·서술형 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cosC=1/3 → sinC=2√2/3 → S=30√2 → R=33√2/8 · r=2√2 → R−r=17√2/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{17\sqrt{2}}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0756.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꾸되 cos 가 간단한 분수, sin 이 √ 정리되게. 제약: S 와 반둘레 s 로 r 이 정리. R·r 의 곱(Rr=abc/(2(a+b+c)))이나 비를 물을 수도 있음."
    creative: "(1) R:r 비를 묻기 ★2 (2) 외접원과 내접원 넓이의 차 → π 배 ★2 (3) 세 변을 n−1, n, n+1 로 두고 R−r 을 n 으로 → 일반화 I-PD ★4."
```

```yaml
- id: RPM-ALG-0757
  page: 101
  vendor_label: "유형 11 삼각형의 넓이; 세 변의 길이를 알 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ sinA:sinB:sinC = 2:3:3, ㈏ 넓이 8√2 를 만족하는 삼각형 ABC 의 둘레.
  category: "sin 비 → 변 2k, 3k, 3k → cosA=7/9 → sinA → 넓이 식 2√2k²=8√2 → k → 둘레"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "변 비(㈎)를 매개변수 k 로 두고 넓이(㈏)와 결합해 k 하나의 방정식으로 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sin 의 비 + 넓이 조건 → 실제 변의 길이(둘레)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a:b:c=2:3:3 → 2k, 3k, 3k. cosA=(9+9−4)/18=7/9, sinA=4√2/9 → S=½·3k·3k·(4√2/9)=2√2k²=8√2 → k=2 → 둘레 8k=16.
    두 조건을 매개변수 하나로 묶는 통합 1개(CON d1) · k>0 (Mt 1). 이등변이라 높이 2√2k 로 바로 넓이를 쓰는 갈래가 빠르다. 벤더 중 ★2 · M_total 8 → ★2.
    [분류 이슈] M_total 8 + 통찰 1 이라 체감은 ★2~3 경계 — 라벨은 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "sin 비 → 2k, 3k, 3k → S=2√2k²=8√2 → k=2 → 둘레 8k=16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0757.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2:3:3 · 3:4:5 · 2:3:4)와 넓이를 바꾸되 k² 가 정수·k 양수. 제약: sin 값이 √ 정리, 넓이 = (비로 계산한 단위 넓이)·k²."
    creative: "(1) 둘레 대신 외접원 R 이나 내접원 r → 같은 유형 안 ★3 (2) 넓이 대신 둘레를 주고 넓이를 묻기(k 가 선형으로 결정 ★2) (3) 이등변 높이 갈래와 코사인법칙 갈래를 비교하게 하면 I-SC 노출 ★3."
```

### 유형 12 사각형의 넓이; 삼각형으로 나누기

```yaml
- id: RPM-ALG-0758
  page: 101
  vendor_label: "유형 12 사각형의 넓이; 삼각형으로 나누기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    사각형 ABCD 에서 AB=4, BC=8, CD=2, BD=8, ∠ABD=30° 일 때 사각형의 넓이. 그림.
  category: "대각선 BD 로 분할 → S(ABD)=8 · 삼각형 BCD(8, 2, 8): cosC=1/8 → sinC → 3√7"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형의 넓이 — 대각선으로 두 삼각형 분할(한쪽 두 변·끼인각, 한쪽 세 변)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S(ABD)=½·4·8·sin30°=8. 삼각형 BCD 는 세 변 8, 2, 8 → cosC=(64+4−64)/32=1/8 → sinC=3√7/8 → S=½·8·2·(3√7/8)=3√7. 합 8+3√7.
    대각선이 그림에 있어 두 삼각형 넓이를 각각 구하는 유형 기본 절차. 유형 대표 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "S = S(ABD)+S(BCD) = ½·4·8·sin30° + ½·8·2·sinC (cosC=1/8) = 8+3√7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8+3\sqrt{7}$'
  answer_source: "답지"
  figure: "crop:fig-0758.png"
  latex: latex-bank/rpm-alg/items/0758.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 30° → 45°·60°, 삼각형 BCD 의 세 변을 바꾸되 cos 가 분수·sin 이 √ 정리되게. 제약: 삼각형 부등식(8, 2, 8), 그림 라벨(B 왼쪽·D 오른쪽 위·C 오른쪽 아래·대각선 BD) 고정."
    creative: "(1) BC 대신 ∠BCD 를 주면 BCD 가 이등변(BC=BD) 조건으로 각 계산 ★2 (2) 사각형 넓이를 주고 CD 를 역으로 → 이차방정식 I-BW ★3 (3) 원에 내접 조건을 추가해 대각 보각으로 각 확보 → 유형 08 결합 ★3~4."
```

```yaml
- id: RPM-ALG-0759
  page: 101
  vendor_label: "유형 12 사각형의 넓이; 삼각형으로 나누기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사각형 ABCD 에서 AB=5, BC=8, CD=3, AD=3, ∠BAD=120° 일 때 사각형의 넓이. 5지선다. 그림.
  category: "대각선 BD(코사인법칙 → 7) → S(ABD) · 삼각형 BCD(8, 3, 7 → C=60°) → 넓이 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형의 넓이 — 각이 주어진 쪽 대각선으로 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BD²=25+9+15=49 → 7. S(ABD)=½·5·3·sin120°=15√3/4. 삼각형 BCD 는 8, 3, 7 → cosC=(64+9−49)/48=1/2 → S(BCD)=½·8·3·sin60°=6√3. 합 39√3/4.
    그림에 대각선이 없어 아는 각 A 를 끼는 BD 를 택해야 하지만 이 유형의 표준 선택. cos120° 부호(Mt 1). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "BD²=5²+3²−2·5·3·cos120°=49 → S(ABD)=15√3/4 · cosC=1/2 → S(BCD)=6√3 → 39√3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0759.png"
  latex: latex-bank/rpm-alg/items/0759.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AD, A 를 바꿔 BD 가 정수가 되게 하고 BC, CD 는 삼각형 BCD 의 cos 가 특수각 값이 되게(8, 3, 7 → 60°). 제약: 그림 라벨(A 위 왼쪽·D 위 오른쪽·B 왼쪽 아래·C 오른쪽 아래) 고정, 대각선 BD 사용."
    creative: "(1) 각 A 를 감추고 각 C 를 주면 대각선 두 갈래 비교 → I-SC ★3 (2) 각 A 가 변할 때 넓이 최대 → sin 최대 ★3 (3) 원에 내접이면 A+C=180° 로 C 확정 → 다른 골조 ★3."
```

```yaml
- id: RPM-ALG-0760
  page: 101
  vendor_label: "유형 12 사각형의 넓이; 삼각형으로 나누기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사각형 ABCD 에서 AB=3, BC=8, CD=4, B=75°, C=60° 일 때 사각형의 넓이. 그림.
  category: "BD(삼각형 BCD: 8, 4, 60° → 4√3 · ∠DBC=30°) → ∠ABD=45° → S(ABD)+S(BCD)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 B=75° 를 ∠ABD + ∠DBC 로 나누어, 삼각형 BCD 에서 얻은 ∠DBC=30° 로 삼각형 ABD 의 끼인각 45° 를 확보"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사각형의 넓이 — 두 각 조건을 대각선으로 분해해 끼인각 확보"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BD²=64+16−32=48 → 4√3 (삼각형 BCD 는 30°-60°-90°). S(BCD)=½·8·4·sin60°=8√3. ∠DBC=30° → ∠ABD=45° → S(ABD)=½·3·4√3·sin45°=3√6. 합 3√6+8√3.
    각 분해로 끼인각을 얻는 조건 변환 1개(EQV d1) · ∠DBC 확정(Mt 1). 벤더 중 ★2 · M_total 7 → ★2.
    [분류 이슈] 같은 유형의 0759 보다 한 단계(각 분해) 더 필요해 체감 ★3 경계 — 라벨은 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "BD=4√3, ∠DBC=30° → ∠ABD=75°−30°=45° → S=½·3·4√3·sin45° + ½·8·4·sin60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{6}+8\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0760.png"
  latex: latex-bank/rpm-alg/items/0760.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC·CD·C 는 삼각형 BCD 가 특수각 삼각형(30-60-90 등)이 되게 짜야 ∠DBC 가 특수각. B 는 ∠DBC 와의 차가 특수각(45°·60°)이 되게. 제약: 그림 라벨(B 왼쪽 아래·C 오른쪽 아래·A 왼쪽 위·D 오른쪽 위) 고정."
    creative: "(1) B, C 대신 A, B 를 주면 대각선 AC 로 같은 골조 ★2 (2) ∠DBC 가 특수각이 안 되면 sin(75°−θ) 가 필요해 대수 범위를 벗어남(주의) (3) AD 를 추가로 주고 넓이 대신 각 D → I-BW ★3."
```

### 유형 13 평행사변형의 넓이

```yaml
- id: RPM-ALG-0761
  page: 102
  vendor_label: "유형 13 평행사변형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    AB=7, BC=8, AC=13, 90°<B<180° 인 평행사변형 ABCD 의 넓이. 5지선다. 그림.
  category: "삼각형 ABC 코사인법칙 → cosB=−1/2 → S=AB·BC·sinB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 ab sinθ(대각선으로 각 확보)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cosB=(49+64−169)/112=−1/2 → B=120°, S=7·8·sin120°=28√3.
    대각선으로 각을 정하고 ab sinθ 를 쓰는 유형 기본(cos 부호 판독 Mt 1). 유형 대표 ★2 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "cosB=(7²+8²−13²)/(2·7·8)=−1/2 → S=7·8·sin120°=28√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0761.png"
  latex: latex-bank/rpm-alg/items/0761.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "7, 8, 13 을 cos 가 특수각 값이 되는 조합(5, 8, 7 → 60° 등)으로. 제약: 둔각 조건과 cos 부호 일치, 그림 라벨(A 왼쪽 위·B 왼쪽 아래·C 오른쪽 아래·대각선 AC) 고정."
    creative: "(1) 대각선 BD 를 주면 삼각형 ABD 에서 각 A 로 같은 골조 ★2 (2) 두 대각선의 길이와 사잇각으로 ½·d₁·d₂·sinθ → 다른 공식 ★2 (3) 넓이를 주고 대각선 길이를 역으로 → I-BW ★3."
```

```yaml
- id: RPM-ALG-0762
  page: 102
  vendor_label: "유형 13 평행사변형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB=2, BC=4 인 평행사변형의 넓이가 4√2 이고 90°<A<180° 일 때 A 의 크기. 5지선다. 그림.
  category: "S=ab sinA 역산 → sinA=√2/2 → 둔각 135°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 → 각의 크기(역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2·4·sinA = 4√2 → sinA=√2/2, 둔각이므로 135°.
    공식 역산 한 줄과 각 선택(45°/135°, Mt 1). 벤더 중 ★2 · 통찰 없음 · M_total 5 → ★2(체감 ★1~2).
  tier: star_2
  mechanism_primary: "2·4·sinA=4√2 → sinA=√2/2 → A=135°(둔각)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0762.png"
  latex: latex-bank/rpm-alg/items/0762.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변·넓이를 sinA 가 특수각 값이 되게(넓이 4√3 → 120°). 제약: 넓이 ≤ ab. 둔각 조건을 빼면 두 답. 그림 라벨(A 왼쪽 위·B 왼쪽 아래·C 오른쪽 아래) 고정."
    creative: "(1) 둔각 조건 삭제 → 예각·둔각 두 답의 합 → I-MI d1 ★2 (2) 넓이 대신 대각선 길이를 주면 코사인법칙 → 0761 골조 ★2 (3) 넓이가 최대일 때의 A 와 그때의 대각선 길이 → ★2."
```

```yaml
- id: RPM-ALG-0763
  page: 102
  vendor_label: "유형 13 평행사변형의 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    AB=3, AC=3√3, B=60° 인 평행사변형 ABCD 의 넓이. 서술형. 그림.
  category: "삼각형 ABC 코사인법칙 → BC 의 이차방정식 → BC=6 → S=AB·BC·sinB"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 — 대각선·한 변·한 각으로 나머지 변(이차방정식) 후 ab sinθ"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27 = 9 + x² − 3x → x²−3x−18=0 → x=6 (−3 기각). S=3·6·sin60°=9√3.
    대각선 AC 가 각 B 의 대변이라 이차방정식이 나오는 것 외에는 유형 표준(근 기각 Mt 1). 사인법칙으로 sinC=1/2 → C=30°, A=90° 를 보면 BC=6 이 바로 나오는 갈래도 있다. 벤더 중·서술형 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "AC²=AB²+BC²−2·AB·BC·cos60° → x²−3x−18=0 → BC=6 → S=3·6·sin60°=9√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0763.png"
  latex: latex-bank/rpm-alg/items/0763.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC, B 를 바꾸되 이차방정식이 인수분해되고 양의 근이 하나가 되게. 제약: AC ≥ AB·sinB (삼각형 존재). 그림 라벨(B 왼쪽 아래·60° 표시·대각선 AC) 고정."
    creative: "(1) 양의 근이 둘이 되게(AB·sinB < AC < AB) 짜서 두 넓이의 합 → I-MI d1 ★3 (2) 서술형 채점 포인트로 근 기각 이유를 쓰게 함 → 같은 골조 ★2 (3) 대각선 BD 까지 묻기 → 이웃각 120° 코사인법칙(0735 골조) 결합 ★3."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 1 · ★2 26 · ★3 6 · ★4 0 · ★5 0
- 통찰형 11 · 절차형 22 · premium 0
- 통찰 유형: I-RT 4(0736 · 0739 · 0752 · 0754) · I-XU 2(0733 · 0744) · I-EQV 2(0747 · 0760) · I-CON 2(0748 · 0757) · I-SYM 1(0751) · depth 2 는 0744 · 0748 두 문항
- type_hint 상위: 「삼각형의 모양 결정(사인/코사인법칙)」 6 · 「코사인법칙의 변형(변 비·단면·직선 각·내분점)」 4 · 「사각형의 넓이 — 대각선 분할」 3 · 「평행사변형의 넓이 ab sinθ」 3 · 「사인법칙과 코사인법칙(외접원)」 3 · 「삼각형의 최대각·최소각」 3
- 벤더 신호: 대표문제 10 · 중 17 · 상중 6 · 서술형 3(0743 · 0756 · 0763)
- 그림: 13문(`crop:fig-0735.png` · `fig-0736` · `fig-0738` · `fig-0739` · `fig-0740` · `fig-0752` · `fig-0754` · `fig-0758` · `fig-0759` · `fig-0760` · `fig-0761` · `fig-0762` · `fig-0763`)
- 답: 33문 모두 전사본 answer 와 재풀이 일치 · 「전사 답 확인 필요」 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0740 | 벤더 「상중」이나 통찰 없는 두 단계 코사인법칙(공통각) 절차형 · M_total 6 → 체감 ★2~3 경계. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-ALG-0749 | 유형 09 대표문제이나 대입 한 번(M_total 4 · 통찰 0)이라 −1 적용 → ★1. 출발점 ★2 와 1단 차 | ★1 / ★2 |
| RPM-ALG-0753 | 06 단원 각 변환 공식과의 결합을 I-XU 로 볼지 — 인접 단원이고 결합이 발문에 명시되어 절차형으로 둠 | ★2 |
| RPM-ALG-0757 | 벤더 「중」이나 M_total 8 + I-CON d1 → 체감 ★2~3 경계. 라벨은 ★2 유지 | ★2 / ★3 |
| RPM-ALG-0760 | 벤더 「중」이나 같은 유형 0759 보다 각 분해(I-EQV d1) 한 단계 더 필요 → 체감 ★3 경계. 라벨은 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 될 유형**: 「유형 04 사인법칙을 이용한 삼각형의 모양 결정」과 「유형 09 코사인법칙을 이용한 삼각형의 모양 결정」은 골조가 같다(삼각함수 조건 → 변 관계 → 인수분해 → 기각). 카탈로그에서는 「삼각형의 모양 결정」 한 유형 아래 도구(사인법칙/코사인법칙/혼합)를 하위 변형으로 두는 편이 좋다. base ★2, 인수분해가 삼차(0751)·판별식 결합(0733)이면 +1.
- **따로 세워야 할 유형**: 「유형 06 코사인법칙의 변형」 안에 서로 다른 골조 넷이 섞여 있다 — 변 비로 cos(0737) · 입체 단면 삼각형(0738) · 두 직선의 사잇각(0739) · 공통각으로 내분점 선분(0740). 0739(직선 → 삼각형 RT)와 0740(공통각 두 번)은 변형 원본으로 자주 쓰일 골조라 별도 유형으로 세우는 것이 낫다.
- 「유형 07 최대각·최소각」의 0744(cos 최솟값 · AM-GM)는 최대각 유형이 아니라 「삼각형 요소의 최대·최소(절대부등식 결합)」로 따로 두어야 한다(★3, XU 표기).
- 「유형 10·11·12·13」 넓이 유형은 「삼각형의 넓이(두 변·끼인각)」 · 「세 변 → 넓이 → 내접·외접원」 · 「사각형 분할」 · 「평행사변형」 네 유형이 명확하고 base ★2 로 통일 가능. 0752(각의 이등분선 · 넓이 분할 RT)와 0754(중심 분할 RT)는 「넓이 분할 등식」 하위 유형으로 묶으면 변형 생성에 유리하다.
- 「유형 08 사인법칙과 코사인법칙」의 0748(내접사각형 · 공통 외접원 CON d2)은 이 범위에서 가장 통찰 밀도가 높은 골조로, 카탈로그에 「원에 내접하는 사각형」 유형(base ★3)을 따로 두는 후보다.
