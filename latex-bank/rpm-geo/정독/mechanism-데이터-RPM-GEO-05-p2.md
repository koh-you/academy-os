---
name: mechanism-데이터-RPM-GEO-05-p2
description: RPM 기하 05 벡터의 연산(2/2 · 유형 07~10 + 유형 UP 11·12 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 05 벡터의 연산
  unit_code: GEO-05
  part: "2/2"
  extract_range: "78~83쪽 · 0489~0531"
  total_problems: 43
  unit_total: 81
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 05 벡터의 연산 (2/2) 정독 데이터 (v1.0)

이 파일은 RPM 기하 05 벡터의 연산 단원의 둘째 범위(78~83쪽 · 0489~0531 · 43문항)를 다룬다. 유형 07 두 벡터가 서로 같을 조건(4문) · 유형 08 두 벡터가 서로 같을 조건의 응용 — 격자 위 성분화(3문) · 유형 09 두 벡터가 서로 평행할 조건(4문) · 유형 10 세 점이 한 직선 위에 있을 조건(4문) · 유형 UP 11 도형에서의 벡터의 크기(4문) · 유형 UP 12 벡터의 실생활에서의 활용(3문) · 시험에 꼭 나오는 문제(14문 · 중요 3 · 교육청 기출 1) · 서술형 주관식(4문) · 실력 Up(3문)이다. RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 유형(대표문제 · 난이도 중하~상중 · 서술형 태그) / 유형 UP(★3 출발) / 시험에 꼭 나오는 문제(level 없음 · ★2 기본) / 서술형 주관식(★3 출발) / 실력 Up(★4 출발). 판정 결과는 ★1 5문 · ★2 25문 · ★3 10문 · ★4 3문이다. 유형 07~10 은 「a, b 일차독립 → 계수 비교」 한 골조가 등식·평행·한 직선의 세 얼굴로 반복되는 절차형(★1~2)이고, 통찰은 격자·정육각형·입체 배치를 기저 성분으로 옮기는 I-RT(10건)에 몰려 있다. 그 밖에 I-SYM 3(0507·0513·0531) · I-CON 2(0526·0530) · I-EQV 2(0506·0529) · I-XU 1(0507)이며, 통찰형 15문 · 절차형 28문이다. 그림 문항은 22문이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 이 범위의 numeric 제약은 대부분 「기저 두 벡터가 평행하지 않을 것(일차독립)」 「연립의 유일해·정수해」 「그림 라벨·기저 표시 고정」이고, ★ 가 오르는 지점은 기저 표시를 지워 기저 발견을 시키기(I-RT) · 이차 비례식으로 해 하나를 기각시키기(I-VF) · 크기 조건이나 이차곡선·삼각비를 결합하기(I-XU) · 두 직선 위 조건의 이중 표현(I-CON)으로 표시했다. 벤더 신호에서 −1 을 적용한 문항은 7(0503·0504·0505·0514·0519·0527·0528)이며, 이 중 벤더 난이도·구역과 어긋난 넷(0503·0504·0527·0528)과 +1 후보를 보류한 0507, 실력 Up 출발을 유지했지만 ★3 후보인 0530 은 rationale 의 `[분류 이슈]`·경계 표기와 파일 끝 표에 적었다. 전사 답은 43문 모두 재계산과 일치했다.

## 문항 데이터

### 유형 07 두 벡터가 서로 같을 조건

```yaml
- id: RPM-GEO-0489
  page: 78
  vendor_label: "유형 07 두 벡터가 서로 같을 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    평행하지 않은 두 벡터 a, b 에 대해 (m+n)a+2(m-2n)b=-2m·a+(m-3n+4)b 를 만족시키는 실수 m, n 의 합 m+n. 5지선다.
  category: "일차독립 → a·b 계수 각각 비교 → 2×2 연립 → m+n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건 — 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 가 평행하지 않으므로 양변의 a 계수·b 계수가 각각 같다: m+n=-2m, 2(m-2n)=m-3n+4 → 3m+n=0, m-n=4 → m=1, n=-3 → m+n=-2. 계수 비교 한 단계와 연립 한 줄. 통찰 없음·M_total 4 → −1 후보이나 유형 07 의 대표문제(일차독립 계수 비교 골조 그 자체)라 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "a, b 일차독립 → 계수 비교 3m+n=0, m-n=4 → m=1, n=-3 → m+n=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 계수의 일차식(정수 계수)을 자유롭게. 제약: 연립 2×2 의 계수행렬식이 0 이 아니어야 유일해, 해가 정수가 되도록 상수항 조정, 묻는 값(m+n · m-n · mn)이 선택지와 겹치지 않게."
    creative: "(1) 우변을 영벡터로 바꿔 '=0' 꼴(0490 골조 · ★1~2) (2) 계수에 x², y² 같은 이차식을 넣어 연립이 이차가 되게(0491 골조 · ★2) (3) 등식을 점의 위치벡터 AP=mAB 로 감추면 벡터 뺄셈이 한 단계 앞에 붙음(0492 골조 · ★2~3)."
```

```yaml
- id: RPM-GEO-0490
  page: 78
  vendor_label: "유형 07 두 벡터가 서로 같을 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행하지 않은 두 벡터 a, b 에 대해 (2m-n-3)a-(m+4n-6)b=0 을 만족시키는 실수 m, n 에 대하여 m²+n² 의 값.
  category: "일차독립 → 두 계수 모두 0 → 연립 → m²+n²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건 — 계수 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a, b 가 평행하지 않으면 pa+qb=0 ⟺ p=q=0. 2m-n=3, m+4n=6 → m=2, n=1 → m²+n²=5. 계수 0 조건 한 단계·연립 한 줄. 「중하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "pa+qb=0 ⟺ p=q=0 → 2m-n=3, m+4n=6 → m=2, n=1 → m²+n²=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 계수·상수. 제약: 유일해·정수해, m²+n² 이 작은 정수가 되게(예: (2,1)·(3,-1))."
    creative: "(1) 좌변을 두 벡터 등식(좌변=우변)으로 벌려 이항까지 시키기(0489 골조 · ★2) (2) '평행하지 않다' 조건을 빼고 a∥b 일 때는 계수 비교가 안 됨을 판단하는 ㄱㄴㄷ(★2 · I-MI d1) (3) 계수 중 하나를 |m| 로 바꿔 부호 분기(★2 · Mₜ 2)."
```

```yaml
- id: RPM-GEO-0491
  page: 78
  vendor_label: "유형 07 두 벡터가 서로 같을 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    평행하지 않은 두 벡터 a, b 에 대해 (x²-x)a+(x+2y)b=(7-x+y²)a+(1+y)b 를 만족시키는 실수 x, y 의 곱 xy.
  category: "계수 비교 → x²-y²=7, x+y=1 → 인수분해(또는 대입) → x=4, y=-3 → xy"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건 — 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 계수: x²-x=7-x+y² → x²-y²=7. b 계수: x+2y=1+y → x+y=1. (x-y)(x+y)=7 에서 x-y=7 → x=4, y=-3 → xy=-12. y=1-x 를 대입해도 2x-1=7 로 한 줄. 이차 연립이지만 인수분해·대입 어느 쪽도 한 줄(Mₖ 1). 「중」·서술형·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "계수 비교 → x²-y²=7, x+y=1 → (x-y)(x+y)=7 → x-y=7 → x=4, y=-3 → xy=-12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수와 상수(7 · 1). 제약: 두 식이 x+y=k, x²-y²=c 꼴로 남아 x-y=c/k 가 정수가 되게(c 가 k 의 배수), 또는 x+y 와 xy 가 나오는 조합도 가능."
    creative: "(1) 두 식이 x²+y² 와 x+y 를 주도록 바꿔 xy 를 곱셈 공식으로(★2) (2) (x,y) 가 두 쌍 나오게 해 '모든 xy 의 합'(★2~3 · I-MI d1) (3) x, y 를 정수로 제한하고 x²-y²=c 의 약수 분해로 풀게(★3 · I-VF d1)."
```

```yaml
- id: RPM-GEO-0492
  page: 78
  vendor_label: "유형 07 두 벡터가 서로 같을 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA=2a-3b, OB=a-2b, OP=ka+b 이고 AP=mAB 일 때 실수 k, m 에 대하여 m-k 의 값. 5지선다.
  category: "AP=OP-OA, AB=OB-OA 로 옮기기 → 계수 비교 → 연립 → m-k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건 — 점의 위치벡터로 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AP=(k-2)a+4b, AB=-a+b 이므로 (k-2)a+4b=m(-a+b) → k-2=-m, 4=m → m=4, k=-2 → m-k=6. 위치벡터 차로 옮기는 한 단계가 0489 에 덧붙었을 뿐. 「중」·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AP=OP-OA=(k-2)a+4b, AB=-a+b → m(-a+b) 와 계수 비교 → m=4, k=-2 → m-k=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB·OP 의 계수. 제약: AB 의 두 계수가 0 이 아니어야 m 이 두 식 모두에서 결정되고, k·m 이 정수가 되게 OP 의 b 계수를 맞춤."
    creative: "(1) AP=mAB 를 'P 가 직선 AB 위' 로 바꾸면 m 이 사라지고 k 만 묻는 유형 10 골조(★2) (2) AP=mAB, BP=nBA 처럼 두 관계를 동시에 주면 조건 통합(★3 · I-CON d1) (3) P 가 선분 AB 를 m:(1-m) 으로 내분한다는 조건을 주고 0<m<1 검증(★3 · I-VF d1)."
```

### 유형 08 두 벡터가 서로 같을 조건의 응용

```yaml
- id: RPM-GEO-0493
  page: 78
  vendor_label: "유형 08 두 벡터가 서로 같을 조건의 응용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모눈종이 위의 네 점 O, A, B, C 에 대해 OC=mOA+nOB 일 때 실수 m, n 의 차 m-n. 5지선다.
  category: "격자 단위 두 방향을 기저로 → OA·OB·OC 성분 읽기 → 성분 등식 → 연립 → m-n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "격자 위 벡터를 두 기준 벡터의 일차결합으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O 를 원점, 격자 한 칸을 단위로 두면 OA=(-1,2), OB=(2,-3), OC=(1,1). (1,1)=m(-1,2)+n(2,-3) → -m+2n=1, 2m-3n=1 → m=5, n=3 → m-n=2. 직교 격자라 좌표 읽기와 같고 통찰은 없다. M_total 5·통찰 0 → −1 후보이나 유형 08 대표문제(격자 성분화 골조)라 ★2 유지.
  tier: star_2
  mechanism_primary: "격자 좌표 OA=(-1,2), OB=(2,-3), OC=(1,1) → -m+2n=1, 2m-3n=1 → m=5, n=3 → m-n=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0493.png"
  latex: latex-bank/rpm-geo/items/0493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 격자 위치(그림 라벨 O·A·B·C 고정). 제약: OA·OB 가 평행하지 않게, 연립의 해 m·n 이 정수(계수행렬식 ±1 이면 항상 정수)."
    creative: "(1) 격자를 평행사변형 격자로 바꾸면 기울어진 기저 도입이 필요(0494 골조 · ★2 · I-RT d1) (2) 정삼각형 격자(0495 골조 · ★3) (3) OC 대신 'AC=mOA+nOB' 처럼 시점이 다른 벡터를 주어 위치벡터 차 한 단계 추가(★2~3)."
```

```yaml
- id: RPM-GEO-0494
  page: 78
  vendor_label: "유형 08 두 벡터가 서로 같을 조건의 응용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일정한 간격의 평행선 격자 위 네 점 A, B, C, D 에 대해 AD=mAB+nAC 일 때 m+n 의 값. 5지선다.
  category: "평행선 격자의 두 단위벡터를 기저로 → AB·AC·AD 성분 → 연립(분수) → m+n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직교하지 않는 평행선 격자를 가로 단위벡터 u·빗변 단위벡터 v 의 기저로 읽어 네 점을 (u,v) 성분으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "격자 위 벡터를 두 기준 벡터의 일차결합으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로 방향 단위 u, 빗선 방향 단위 v 로 A=(0,3), B=(3,5), C=(1,1), D=(5,0) → AB=(3,2), AC=(1,-2), AD=(5,-3). 3m+n=5, 2m-2n=-3 → m=7/8, n=19/8 → m+n=13/4. 기울어진 기저를 세우는 표현 전환(RT d1)이 핵심이고 분수 연립(Mₖ 2). 「중」·통찰 1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "기울어진 격자 기저 (u,v) → AB=(3,2), AC=(1,-2), AD=(5,-3) → 3m+n=5, 2m-2n=-3 → m=7/8, n=19/8 → m+n=13/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0494.png"
  latex: latex-bank/rpm-geo/items/0494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 격자 위치(라벨 고정 · 기준점 A). 제약: AB·AC 가 평행하지 않게, 분수 해가 나오면 선택지 간격(13/4·7/2·15/4)을 함께 조정, 정수 해로 바꾸면 ★1~2."
    creative: "(1) 기저를 문제에서 명시(u, v 화살표 표시)하면 RT 가 사라져 ★1~2 (2) 격자를 정삼각형 격자로(0495 · ★3) (3) m+n 대신 '점 D 가 직선 BC 위에 있는가' 를 붙여 계수 합 조건과 결합(★3 · I-EQV d1)."
```

```yaml
- id: RPM-GEO-0495
  page: 78
  vendor_label: "유형 08 두 벡터가 서로 같을 조건의 응용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    합동인 정삼각형 16개로 이루어진 큰 정삼각형 위의 네 점 O, P, Q, R 에 대해 OR=mOP+nOQ 일 때 mn 의 값.
  category: "정삼각형 격자의 두 단위벡터(60°)를 기저로 → OP·OQ·OR 성분 → 연립(분수) → mn"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정삼각형 격자를 60° 를 이루는 두 단위벡터 e₁(밑변 방향)·e₂(왼쪽 변 방향)의 기저로 읽어 세 벡터를 성분화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "격자 위 벡터를 두 기준 벡터의 일차결합으로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑변 방향 e₁, 왼쪽 변 방향 e₂(한 변 = 4단위)로 O=2e₁, P=e₂, Q=3e₂, R=3e₁+e₂ → OP=-2e₁+e₂, OQ=-2e₁+3e₂, OR=e₁+e₂. -2m-2n=1, m+3n=1 → n=3/4, m=-5/4 → mn=-15/16. 60° 기저를 세우는 표현 전환(RT d1)과 부호 있는 분수 연립. 「상중」·통찰 1·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "60° 격자 기저 → OP=-2e₁+e₂, OQ=-2e₁+3e₂, OR=e₁+e₂ → -2m-2n=1, m+3n=1 → m=-5/4, n=3/4 → mn=-15/16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{15}{16}$'
  answer_source: "답지"
  figure: "crop:fig-0495.png"
  latex: latex-bank/rpm-geo/items/0495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 격자 위치와 큰 삼각형의 크기(9개·16개·25개). 제약: OP·OQ 가 평행하지 않게(P, Q 가 같은 변 위에 있고 O 가 그 변 밖이면 자동), 분수 해면 mn 이 기약분수로 정리되게."
    creative: "(1) 좌표평면(√3 포함)으로 풀게 유도하면 계산만 무거워짐(Mₖ 3 · 통찰 동일 · 질 저하 방향이라 권장 안 함) (2) 기저를 OP·OQ 로 직접 잡게 하고 R 을 정육각형 배치로(0525 골조 · ★3) (3) 'R 이 직선 PQ 위에 있는가' 를 추가해 계수 합 판정과 결합(★3 · I-EQV d1)."
```

### 유형 09 두 벡터가 서로 평행할 조건

```yaml
- id: RPM-GEO-0496
  page: 79
  vendor_label: "유형 09 두 벡터가 서로 평행할 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    p=a+b, q=a+3b, r=2a+kb 일 때 두 벡터 p+q, r-q 가 서로 평행하도록 하는 실수 k 의 값.
  category: "p+q, r-q 계산 → 평행 ⟺ 실수배 → 계수 비례 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 실수배 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p+q=2a+4b, r-q=a+(k-3)b. 평행이면 2a+4b=t(a+(k-3)b) → t=2, 4=2(k-3) → k=5. 두 벡터 정리 한 단계·실수배 계수 비교 한 단계. 통찰 없음·M_total 5 → −1 후보이나 유형 09 대표문제(평행 = 실수배 골조)라 ★2 유지.
  tier: star_2
  mechanism_primary: "p+q=2a+4b, r-q=a+(k-3)b → 평행 ⟺ 2:1=4:(k-3) → k=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p·q·r 의 계수와 조합(p+q · r-q · 2p-r). 제약: 조합한 두 벡터의 a 계수가 둘 다 0 이 아니게, k 가 정수가 되도록 비례식 상수 조정."
    creative: "(1) 미지수 m 이 양쪽 벡터에 들어가 m²=상수 꼴이 되게(0497 골조 · ★1~2 · 양수 조건 T-범위) (2) x, y 를 두 등식에서 먼저 풀어야 하게(0498 골조 · ★2) (3) 평행 조건을 '세 점이 한 직선 위' 로 바꾸면 유형 10(★2)."
```

```yaml
- id: RPM-GEO-0497
  page: 79
  vendor_label: "유형 09 두 벡터가 서로 평행할 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    p=2a+mb, q=ma+8b 가 서로 평행할 때 양수 m 의 값.
  category: "평행 ⟺ 계수 비례 2:m=m:8 → m²=16 → 양수 조건 → m=4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 실수배 계수 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a+mb=t(ma+8b) → 2=tm, m=8t → m²=16, 양수 조건으로 m=4. 비례식 한 줄과 부호 선택(T-범위 1개). 「중하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "평행 ⟺ 2:m=m:8 → m²=16 → m>0 → m=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2·8 을 다른 쌍(3·12 → m=6, 1·9 → m=3)으로. 제약: 곱이 완전제곱수, 양수 조건을 빼면 답이 ±두 개(그때는 '모든 m 의 곱' 처럼 묻기)."
    creative: "(1) 양수 조건을 빼고 '모든 실수 m 의 합' 을 물어 부호 분기(★1~2) (2) 세 벡터 p, q, r 중 두 쌍이 각각 평행한 조건으로 미지수 2개(★2 · Mₛ 2) (3) '평행하지 않도록 하는 m 의 범위' 로 부정 조건(★2 · I-EQV d1)."
```

```yaml
- id: RPM-GEO-0498
  page: 79
  vendor_label: "유형 09 두 벡터가 서로 평행할 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x+3a=a+b, x+y=m(a-b)+b 일 때 두 벡터 x, y 가 서로 평행하도록 하는 실수 m 의 값.
  category: "x 풀기 → y 풀기 → 평행 ⟺ 계수 비례 → m"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 실수배 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-2a+b, y=m(a-b)+b-x=(m+2)a-mb. x∥y 이면 (m+2):(-2)=(-m):1 → m+2=2m → m=2. 두 벡터를 먼저 등식에서 구하는 단계가 붙어 Mₛ 2. 「중」·서술형·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=-2a+b → y=(m+2)a-mb → 평행 ⟺ (m+2)·1=(-2)(-m) → m=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 를 정하는 등식과 x+y 의 우변 계수. 제약: y 의 두 계수가 m 의 일차식이 되어 비례식이 m 의 일차방정식(또는 정수해 이차)으로 떨어지게."
    creative: "(1) x, y 를 연립(x+y=…, x-y=…)으로 주어 두 벡터를 동시에 풀게(★2 · Mₛ 2) (2) '평행' 을 '같은 방향' 으로 바꿔 실수배 계수가 양수라는 검증 추가(★2~3 · I-VF d1) (3) 평행 대신 'x+ty 가 a 와 평행' 처럼 세 번째 조건(★3)."
```

```yaml
- id: RPM-GEO-0499
  page: 79
  vendor_label: "유형 09 두 벡터가 서로 평행할 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA=a-2b, OB=2a-b, OC=5a+kb 일 때 AB, AC 가 서로 평행하도록 하는 실수 k 의 값. 5지선다.
  category: "AB=OB-OA, AC=OC-OA → 평행 ⟺ 계수 비례 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 점의 위치벡터로 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=a+b, AC=4a+(k+2)b. 평행이면 4:1=(k+2):1 → k=2. 위치벡터 차 한 단계·비례 한 줄. 사실상 '세 점 A, B, C 가 한 직선 위' 와 같은 골조(유형 10). 「중」·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB=a+b, AC=4a+(k+2)b → 평행 ⟺ 4=k+2 → k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB·OC 의 계수. 제약: AB 의 두 계수가 0 이 아니게, k 가 정수·선택지 안에 들어오게."
    creative: "(1) 발문을 '세 점이 한 직선 위' 로 바꾸면 유형 10 과 동일(★2) (2) k 를 OB 쪽에도 넣어 비례식이 k 의 이차방정식이 되게(★2~3 · 두 해 검증 I-VF d1) (3) 'AB∥AC 이고 |AC|=2|AB|' 로 크기 조건을 얹어 실수배의 값까지(★3)."
```

### 유형 10 세 점이 한 직선 위에 있을 조건

```yaml
- id: RPM-GEO-0500
  page: 79
  vendor_label: "유형 10 세 점이 한 직선 위에 있을 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    OA=a+b, OB=3a+7b, OC=2a-kb 일 때 세 점 A, B, C 가 한 직선 위에 있도록 하는 실수 k 의 값.
  category: "한 직선 위 ⟺ AC=tAB → AB·AC 계산 → 계수 비례 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — AB∥AC"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=2a+6b, AC=a-(k+1)b. AC∥AB 이면 2:1=6:(-(k+1)) → k+1=-3 → k=-4. '세 점 한 직선 ⟺ AB∥AC' 는 이 유형의 정의 도구라 통찰로 세지 않음. 통찰 없음·M_total 5 → −1 후보이나 유형 10 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=2a+6b, AC=a-(k+1)b → 한 직선 ⟺ AC∥AB ⟺ 2·(-(k+1))=6·1 → k=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB·OC 의 계수. 제약: A≠B(AB≠0), k 가 정수가 되도록 OC 의 a 계수와 AB 의 비 조정."
    creative: "(1) 증명 문제로 바꾸기('한 직선 위에 있음을 보이시오' · 0501 · ★1) (2) OC=(3-t)OA+2tOB 처럼 계수에 매개변수를 넣어 계수 합 = 1 판정으로 유도(0503 · ★2 · I-EQV d1 가능) (3) 여러 점 중 직선 AB 위의 점 고르기(0502 · ★2)."
```

```yaml
- id: RPM-GEO-0501
  page: 79
  vendor_label: "유형 10 세 점이 한 직선 위에 있을 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA=-a, OB=2b, OC=a+4b 일 때 세 점 A, B, C 가 한 직선 위에 있음을 보이기(증명).
  category: "AB·AC 계산 → AC=2AB → 평행이고 A 공유 → 한 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — AB∥AC"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=a+2b, AC=2a+4b=2AB. 실수배이므로 AC∥AB, 점 A 를 공유하므로 세 점이 한 직선 위. 계산 두 줄·결론 한 줄인 증명. 「중하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB=a+2b, AC=2a+4b=2AB → AC∥AB, A 공유 → 한 직선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB·OC 의 계수. 제약: AC=tAB 가 정확히 성립하게(OC 를 OA+t(OB-OA) 로 만들어 두기), t 는 정수·분수 모두 가능."
    creative: "(1) 'C 가 선분 AB 를 몇 대 몇으로 나누는가' 까지(★1~2 · t 의 부호·크기 해석) (2) 한 직선 위에 있지 않은 반례 하나를 섞어 고르기(0502 · ★2) (3) 계수 합 = 1 판정을 발견·정당화하게(★2 · I-EQV d1)."
```

```yaml
- id: RPM-GEO-0502
  page: 79
  vendor_label: "유형 10 세 점이 한 직선 위에 있을 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA=a, OB=b 이고 OC=(2a+b)/3, OD=(a-3b)/4, OE=(3a-b)/2 일 때 C, D, E 중 직선 AB 위에 있는 점 모두 고르기.
  category: "각 점마다 AX=OX-OA → AB=b-a 의 실수배인지 판정 ×3 → 해당 점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — AB∥AC"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC=(-a+b)/3=(1/3)AB, AD=(-3a-3b)/4 는 b-a 의 실수배가 아님, AE=(a-b)/2=-(1/2)AB. 따라서 C, E. 같은 판정을 세 번 반복(Mₛ 2). 계수 합이 1 인 점(2/3+1/3 · 3/2-1/2)만 직선 위라는 판정을 알면 한눈에 끝나지만 표준 풀이는 AX∥AB 반복이라 통찰로 세지 않음. 「중」·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB=b-a → AC=(1/3)AB ○, AD=-(3/4)(a+b) ×, AE=-(1/2)AB ○ → C, E"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pt{C}$, $\pt{E}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 계수(분모 3·4·2). 제약: 직선 위인 점은 두 계수의 합이 1 이 되게, 아닌 점은 합이 1 이 아니게 만들되 우연히 AB 와 평행이 되지 않도록."
    creative: "(1) 점을 네다섯 개로 늘리고 '직선 AB 위의 점의 개수' (★2) (2) 조건을 OX=pa+qb 로 일반화하고 p+q=1 이 필요충분임을 보이기(★3 · I-EQV d2 · Mₐ 3) (3) 직선 AB 대신 '선분 AB 위' 로 바꿔 0≤t≤1 검증(★2~3 · I-VF d1)."
```

```yaml
- id: RPM-GEO-0503
  page: 79
  vendor_label: "유형 10 세 점이 한 직선 위에 있을 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OC=(3-t)OA+2tOB 가 성립할 때 세 점 A, B, C 가 한 직선 위에 있도록 하는 실수 t 의 값.
  category: "AC=OC-OA=(2-t)OA+2tOB, AB=OB-OA → 평행 계수 비례(또는 계수 합=1) → t"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — AB∥AC"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC=(2-t)OA+2tOB, AB=-OA+OB. AC∥AB 이면 (2-t):(-1)=2t:1 → 2-t=-2t → t=-2. 계수 합 (3-t)+2t=1 로 바로 t=-2 를 얻는 판정도 있으나 어느 쪽이든 한 줄. 통찰 없음·M_total 5 → 「상중」 출발 ★3 에서 −1 적용 ★2. [분류 이슈] 벤더 「상중」이나 대표문제 0500(★2)보다 계산이 오히려 적음 — 기저가 OA·OB 자체이고 계수가 매개변수 t 라는 추상성만 다름. 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "AC=(2-t)OA+2tOB, AB=-OA+OB → 평행 ⟺ (2-t)·1=2t·(-1) → t=-2 (또는 계수 합 (3-t)+2t=1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수의 일차식 (3-t)·2t. 제약: 계수 합이 t 의 일차식이 되어 정수해가 나오게(합의 t 계수가 0 이면 해가 없거나 모든 t 가 되므로 피함)."
    creative: "(1) 계수 합의 t 계수를 0 으로 만들어 '한 직선 위에 있을 수 없음' 을 판단하게(★3 · I-MI d1) (2) OC=(1-t)OA+tOB 에서 t 의 범위별로 C 의 위치(선분 안·밖) 해석(★3 · I-EQV d1) (3) 두 매개변수 s, t 와 두 등식(0530 골조 · ★3~4 · I-CON d1)."
```

### 유형 UP 11 도형에서의 벡터의 크기

```yaml
- id: RPM-GEO-0504
  page: 80
  vendor_label: "유형 UP 11 도형에서의 벡터의 크기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    한 변의 길이가 1 인 정삼각형 ABC 에서 |AB-BC+CA| 의 값.
  category: "CA+AB=CB 로 묶기 → -BC=CB → 2CB → 크기 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터 합·차의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    CA+AB=CB(시점·종점 잇기), -BC=CB 이므로 식은 CB+CB=2CB, 크기 2·1=2. 재배열 한 단계·부호 뒤집기 한 단계(T-부호). 통찰 없음·M_total 5 → 유형 UP 출발 ★3 에서 −1 적용 ★2. [분류 이슈] 「유형 UP」 대표문항이지만 골조는 벡터 합·차 정리 두 줄이라 ★2 판정 · 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "CA+AB=CB, -BC=CB → AB-BC+CA=2CB → |2CB|=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0504.png"
  latex: latex-bank/rpm-geo/items/0504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(1 → 2·3)와 조합의 부호(AB+BC-CA 등). 제약: 정리 결과가 한 변의 실수배가 되도록 부호를 맞추고, 그렇지 않으면 60° 합성(코사인법칙)이 필요해 골조가 바뀜."
    creative: "(1) 정리 결과가 AB+AC 처럼 두 변의 합이 되게 해 60° 합성으로 √3 (★2~3 · 마름모 대각선) (2) 정사각형·정육각형으로 도형을 바꿔 대각선 길이 결합(0523 · ★2) (3) 정삼각형의 무게중심 G 를 시점으로 GA+GB+GC=0 활용(★3 · I-SYM d1)."
```

```yaml
- id: RPM-GEO-0505
  page: 80
  vendor_label: "유형 UP 11 도형에서의 벡터의 크기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    한 모서리가 1 인 정육면체에서 AB=a, AD=b, AE=c 일 때 4(a-b-2c)-3(a-b-3c) 의 크기.
  category: "전개·정리 → a-b+c → 서로 수직인 세 단위벡터의 합 → √3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육면체에서 벡터 합·차의 크기 — 직교 분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4(a-b-2c)-3(a-b-3c)=a-b+c. a, -b, c 는 서로 수직인 길이 1 의 모서리 벡터이므로 합은 정육면체의 대각선, 크기 √(1+1+1)=√3. 정리 한 단계·직교 분해 크기 한 단계. 통찰 없음·M_total 5·벤더 「중」 → 유형 UP 출발 ★3 에서 −1 적용 ★2.
  tier: star_2
  mechanism_primary: "정리 → a-b+c → 세 모서리 방향 직교 → |a-b+c|=√(1²+1²+1²)=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0505.png"
  latex: latex-bank/rpm-geo/items/0505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이(1 → 2)와 정리 전 계수. 제약: 정리 결과의 세 계수가 ±1 이나 작은 정수가 되게(결과 √(p²+q²+r²) 가 깔끔하게), 직육면체로 바꾸면 세 길이 모두 명시."
    creative: "(1) 기준 벡터 중 하나를 면의 대각선(AC)으로 바꿔 분해 단계 추가(0524 · ★2) (2) 세 면대각선을 기저로 주어 역변환(0526 · ★3 · I-CON d1) (3) 정육면체 대신 정사면체(모서리 60°)로 바꾸면 직교가 깨져 내적이 필요 → 다음 단원(★3~4 · I-XU)."
```

```yaml
- id: RPM-GEO-0506
  page: 80
  vendor_label: "유형 UP 11 도형에서의 벡터의 크기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    정오각형 ABCDE 내부의 점 O 가 |OA|=2, OA+OB+OC+OD+OE=0 을 만족할 때 AB+AC+AD+AE 의 크기. 5지선다.
  category: "AX=OX-OA 로 시점 O 통일 → 합 조건 대입 → -5OA → 크기 10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 합 조건을 OB+OC+OD+OE=-OA 로 옮겨, 시점을 O 로 통일한 식 (OB+OC+OD+OE)-4OA 에 대입해 -5OA 한 항으로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시점 통일로 벡터 합의 크기 구하기 — 정다각형 중심 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB+AC+AD+AE=(OB+OC+OD+OE)-4OA. 조건에서 OB+OC+OD+OE=-OA 이므로 식은 -5OA, 크기 5·2=10. 정오각형이라는 설정과 O 가 중심인지 여부는 필요 없고 합 조건만 쓰면 되는 것이 요점(EQV d1). 「상중」·통찰 1·M_total 5 → ★3 유지.
  tier: star_3
  mechanism_primary: "AX=OX-OA 로 시점 통일 → (OB+OC+OD+OE)-4OA → 합 조건 -OA-4OA=-5OA → 크기 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0506.png"
  latex: latex-bank/rpm-geo/items/0506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|OA| 의 값과 꼭짓점 수(정오각형 → 정n각형 · 결과 -n·OA). 제약: 합 조건이 0 이면 답은 n|OA|, 정n각형이 아니어도 성립하므로 도형은 그림 라벨만 고정."
    creative: "(1) 합 조건을 OA+OB+OC+OD+OE=OP 처럼 0 이 아닌 벡터로 주어 답이 |OP-5OA| (★3~4 · Mₖ 2) (2) 시점을 B 로 바꿔 BA+BC+BD+BE 를 물어 대칭성 확인(★3) (3) 'O 가 정오각형의 중심이면 합이 0 임' 을 보이는 증명으로 전환(★4 · I-SYM d2)."
```

```yaml
- id: RPM-GEO-0507
  page: 80
  vendor_label: "유형 UP 11 도형에서의 벡터의 크기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    타원 x²/9+y²=1 의 두 초점 F, F' 과 타원 위의 점 P 가 |OP+OF|=2 를 만족할 때 |PF| 의 값(O 는 원점).
  category: "초점 (±2√2, 0) → OF=-OF' → OP+OF=OP-OF'=F'P → |PF'|=2 → 타원 정의 PF+PF'=6 → PF=4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 초점이 원점 대칭(OF'=-OF)임을 써서 OP+OF 를 OP-OF'=F'P 한 벡터로 바꿈"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|F'P|=2 를 타원의 정의(PF+PF'=2a=6)와 결합해 PF=4 — 이차곡선 단원의 정의가 없으면 풀이가 끊김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차곡선 위의 점과 초점 벡터의 크기 — 타원의 정의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=3, b=1 → c=2√2, OF=-OF' 이므로 OP+OF=OP-OF'=F'P, 즉 PF'=2. 타원 위의 점이므로 PF+PF'=2a=6 → PF=4. 대칭으로 합을 한 벡터로 줄이는 SYM d1 과 타원 정의를 끌어오는 XU d1 두 개. 통찰 2 → +1 후보이나 둘 다 d1 이고 계산은 두 줄(M_total 5)이라 「상중」 출발 ★3 유지(★3/★4 경계).
  tier: star_3
  mechanism_primary: "OF'=-OF → OP+OF=F'P → PF'=2 → 타원 정의 PF+PF'=6 → PF=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원(x²/a²+y²/b²=1 의 a)과 |OP+OF| 의 값 k. 제약: a-c≤k≤a+c 여야 P 가 존재(a=3, c=2√2 → 0.17≤k≤5.83), 답 2a-k 가 양수·깔끔하게."
    creative: "(1) 타원을 쌍곡선으로 바꿔 |PF-PF'|=2a (★3 · 부호 분기 I-MI d1) (2) |OP+OF| 대신 |OP+OF'| 또는 |2OP-OF-OF'|=2|OP| 처럼 합성 벡터를 바꿔 어떤 점과의 거리인지 해석(★3~4 · I-SYM d2) (3) '|OP+OF| 의 최댓값·최솟값' 으로 바꾸면 PF' 의 범위 a±c (★4 · I-EQV d1)."
```

### 유형 UP 12 벡터의 실생활에서의 활용

```yaml
- id: RPM-GEO-0508
  page: 80
  vendor_label: "유형 UP 12 벡터의 실생활에서의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    폭 200 m 인 강물이 분속 30 m 로 흐르고 정수 속력 분속 50 m 인 배가 A 에서 정북 B 로 최단 거리(직선)로 건널 때 걸리는 시간.
  category: "실제 속도 = 배 속도 + 강물 속도 → 합성이 북쪽이 되도록 배가 상류 쪽으로 비껴 향함 → 북쪽 성분 √(50²-30²)=40 → 200/40=5 분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'최단 거리로 B 도착' 을 '합성 속도 벡터가 정북' 으로 모델링 — 배의 속도 벡터(50)가 빗변, 강물을 상쇄하는 성분(30)이 한 변인 직각삼각형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 벡터의 합성 — 강 건너기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    배가 정북으로 향하면 떠내려가므로, 합성 속도가 정북이 되도록 배는 상류 쪽으로 비껴 향해야 한다. 배 속도 50 이 빗변, 강물 30 을 상쇄하는 성분이 한 변 → 북쪽 성분 40 m/분, 200/40=5 분. 상황을 벡터 삼각형으로 옮기는 RT d1 이 핵심이며 √(50²+30²) 로 잘못 합성하는 것이 전형 오답. 유형 UP 대표·통찰 1·M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "합성 속도가 정북 ⟺ 배 속도의 동서 성분이 강물 30 을 상쇄 → 북쪽 성분 √(50²-30²)=40 → 200/40=5 분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$분'
  answer_source: "답지"
  figure: "crop:fig-0508.png"
  latex: latex-bank/rpm-geo/items/0508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "강폭·강물 속력·배 속력(3:4:5 → 5:12:13 등 피타고라스 수). 제약: 배 속력 > 강물 속력이어야 정북 도달 가능, 폭이 북쪽 성분의 배수가 되게."
    creative: "(1) 배가 강변에 수직으로 향해 떠내려가는 설정(0510 · ★3 · 합성 √(v²+w²)) (2) '최단 시간' 과 '최단 거리' 두 전략을 비교시키기(★3~4 · I-SC d1) (3) 배가 향해야 할 방향의 각(cos θ=30/50)을 묻기(★3 · 삼각비 결합 I-XU d1)."
```

```yaml
- id: RPM-GEO-0509
  page: 80
  vendor_label: "유형 UP 12 벡터의 실생활에서의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    수평 두 지점 A, B 에 고정한 밧줄의 중앙 C 에 물체를 매달아 ∠ACB=90° 가 되었고 물체에 60 N 이 아래로 작용할 때, C 에서 A 방향으로 작용하는 힘의 크기.
  category: "힘의 평형: 두 장력의 합 = 60 N 위쪽 → 대칭으로 두 장력 크기 같음 → 직각이등변(정사각형 대각선 60) → 변 30√2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "매달린 물체의 평형을 '두 장력 벡터의 합 = 무게와 크기 같고 반대 방향' 인 벡터 평행사변형(여기서는 정사각형)으로 모델링"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "힘의 합성·평형 — 합력이 주어진 두 장력"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C 에 걸리는 두 장력 T₁(CA 방향), T₂(CB 방향)의 합이 60 N 위쪽과 평형. C 가 AB 의 중앙이라 두 장력의 크기가 같고 서로 수직이므로 합성 평행사변형은 대각선 60 인 정사각형 → 한 변 60/√2=30√2 N. 힘의 평형을 벡터 합성으로 옮기는 RT d1 하나. 「상중」·통찰 1·M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "T₁+T₂ = 60 N 위쪽(평형) → |T₁|=|T₂|, T₁⊥T₂ → 정사각형 대각선 60 → |T₁|=30√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30\sqrt{2}\,\mathrm{N}$'
  answer_source: "답지"
  figure: "crop:fig-0509.png"
  latex: latex-bank/rpm-geo/items/0509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무게(60 → 40·100)와 각 ∠ACB(90° → 120° 정삼각형 합성 · 60° 마름모). 제약: 대칭(C 가 중앙) 유지, 각이 90°·120°·60° 처럼 특수각이어야 삼각비 없이 풀림."
    creative: "(1) ∠ACB=120° 로 바꾸면 두 장력이 각각 60 N (정삼각형 · ★3) (2) C 를 중앙이 아닌 곳에 두면 두 장력이 달라져 사인법칙·성분 분해 필요(★4 · I-XU d1) (3) 두 힘 F₁, F₂ 의 합력 크기가 주어졌을 때 사잇각 구하기(★3 · 코사인법칙 결합)."
```

```yaml
- id: RPM-GEO-0510
  page: 80
  vendor_label: "유형 UP 12 벡터의 실생활에서의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    시속 6 km 로 흐르는 폭 2 km 의 강에서 정수 속력 시속 8 km 인 배가 강변에 수직인 방향으로 출발할 때 ⑴ 흐르는 강물 위에서의 배의 속력 ⑵ 맞은편 B 지점에서 얼마나 떨어진 곳에 도착하는지.
  category: "합성 속도 = 배(8, 수직) + 강물(6, 평행) → ⑴ √(8²+6²)=10 → ⑵ 도하 시간 2/8=1/4 h → 떠내려간 거리 6·(1/4)=3/2 km"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "배의 속도와 강물 속도를 서로 수직인 두 벡터로 놓고 합성 — 도하 시간은 수직 성분(8)만이, 떠내려간 거리는 평행 성분(6)만이 결정한다는 성분 독립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 벡터의 합성 — 강 건너기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 두 속도가 수직이므로 합성 속력 √(64+36)=10 km/h. ⑵ 강을 건너는 데 필요한 시간은 수직 성분 8 로 2/8=1/4 시간, 그동안 강물 방향으로 6·1/4=3/2 km 떠내려감(닮음비 6:8=x:2 로도 같음). 성분 분해로 시간과 거리를 분리하는 RT d1 하나이고 계산은 한 줄씩. 「상중」·통찰 1·M_total 5 → ★3(0508 보다 가벼워 ★2/★3 경계).
  tier: star_3
  mechanism_primary: "수직 8 + 평행 6 → ⑴ 합성 √(8²+6²)=10 → ⑵ 시간 2/8=1/4 h → 표류 6/4=3/2 km"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '(1) 시속 $10\,\mathrm{km}$ (2) $\dfrac{3}{2}\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-0510.png"
  latex: latex-bank/rpm-geo/items/0510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "강물·배 속력(6·8 → 5·12), 강폭(2 → 3). 제약: 두 속력이 피타고라스 수면 ⑴ 이 정수, ⑵ 는 폭×(강물/배) 로 분수 허용."
    creative: "(1) '떠내려가지 않고 정면 B 에 도착하려면 어느 방향으로 향해야 하는가' (0508 골조 · ★3) (2) 실제 이동 거리(빗변 2.5 km)와 걸린 시간을 묻기(★2~3) (3) 도착 지점이 B 에서 d km 이내가 되도록 하는 배의 최소 속력(★3~4 · I-BW d1)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0511
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 변이 1 인 정육각형 ABCDEF 의 대각선 교점 O 에 대해 ㄱ. OA=EF ㄴ. OB=-CD ㄷ. |DF|=√2 의 참·거짓. 5지선다.
  category: "정육각형 = 정삼각형 6개 → 평행·같은 길이·방향 판정 ×2 → DF 는 한 꼭짓점 건너 대각선 √3 → ㄱ, ㄴ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육각형에서 서로 같은 벡터·벡터의 크기 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ EF 는 E→F 로 위쪽 방향·길이 1, OA 도 위쪽·길이 1 → 참. ㄴ OBCD 는 마름모라 OB=DC=-CD → 참. ㄷ DF 는 한 꼭짓점 건너 대각선이라 √3 (√2 는 정사각형 대각선과 혼동 유도) → 거짓. 정육각형 성질 판정 세 번(Mₛ 2)·방향 부호(T-부호). 통찰 없음·M_total 5 → 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: "정육각형 성질: OA∥EF 같은 방향 길이 1 ○ · OB=DC=-CD ○ · |DF|=√3≠√2 × → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0511.png"
  latex: latex-bank/rpm-geo/items/0511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(1 → 2 · ㄷ 의 값 2√3)와 보기의 벡터 쌍(OA=EF 류 · OB=-CD 류 · 대각선 길이). 제약: 그림의 꼭짓점 라벨 순서(A 위·시계방향) 고정, 길이 보기는 √3 (짧은 대각선)·2 (긴 대각선) 두 종류만."
    creative: "(1) 보기를 '서로 같은 벡터의 개수' 세기로 바꾸기(★2) (2) 정육각형 대신 정팔각형·정십이각형으로 각과 길이 판정 확장(★3 · 삼각비) (3) 벡터 등식(OA+OC=OB 등)의 참·거짓으로 덧셈 결합(★2~3)."
```

```yaml
- id: RPM-GEO-0512
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 다른 네 점 A, B, C, D 에 대한 벡터 덧셈·뺄셈 등식 다섯 개 중 옳지 않은 것. 5지선다.
  category: "각 보기를 시점·종점 잇기와 -XY=YX 로 정리 ×5 → ⑤ 의 좌변은 CB (우변 BC 와 반대) → 옳지 않음"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈·뺄셈 성질 — 옳지 않은 것 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 0 ② AB+BC=AC ③ BA+AD=BD, BD-BC=CD ④ 좌변-우변=(AB-AD)+(CD-CB)=DB+BD=0 ⑤ BD+DB=0 이라 CD+DA+AB=CB, 우변 BC 와 방향이 반대 → 거짓. 다섯 보기를 전부 정리해야 하지만 각각 한두 줄(Mₛ 2). 부호 뒤집힘(T-부호)이 함정. 통찰 없음·M_total 5 → ★2(전수 확인 부담으로 ★1 은 아님 · ★1/★2 경계).
  tier: star_2
  mechanism_primary: "각 보기 시점·종점 잇기 → ①~④ 항등식, ⑤ CD+DA+AB+(BD+DB)=CB≠BC → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 점 순열과 항 수(3~5항). 제약: 네 점이 일반 위치(어떤 세 점도 한 직선 위가 아님)를 전제로 항등식만 참이 되게, 거짓 보기는 부호 하나만 뒤집힌 꼴로."
    creative: "(1) '옳은 것의 개수' 로 바꾸기(★2) (2) 등식을 만족시키는 점 X 를 찾게 하기(AX+BX=… · ★2~3 · I-EQV d1) (3) 네 점이 평행사변형이라는 조건을 추가해 참이 되는 보기가 늘어나게(★2~3 · I-MI d1)."
```

```yaml
- id: RPM-GEO-0513
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정팔면체에서 AB=a, AC=b, AD=c 일 때 CF 를 a, b, c 로 나타내기(A 위 꼭짓점 · F 아래 꼭짓점 · B, C, D, E 가운데 정사각형). 5지선다.
  category: "정팔면체 중심 M = AF·BD 의 공통 중점 → AF=AB+AD=a+c → CF=AF-AC=a-b+c"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정팔면체의 점대칭 중심 M 이 AF 와 BD 의 공통 중점 → ABFD 가 마름모(정사각형) → AF=AB+AD 로 위·아래 꼭짓점을 잇는 벡터를 두 기저의 합으로 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 기준 벡터로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가운데 정사각형 BCDE 의 중심 M 은 AF 의 중점이자 BD 의 중점이므로 AM=(a+c)/2, AF=2AM=a+c. CF=AF-AC=a+c-b → ③. 평면 정육각형과 달리 공간에서 어느 네 점이 한 평면의 마름모를 이루는지(ABFD) 찾는 대칭 관찰이 핵심(SYM d1). 시험 구역·통찰 1·M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "중심 M: AM=(AB+AD)/2 → AF=a+c → CF=AF-AC=a-b+c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0513.png"
  latex: latex-bank/rpm-geo/items/0513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터(CF → BF·DF·EF·CE)와 기저 선택(AB, AC, AD → AB, AC, AE). 제약: 기저 세 벡터가 한 평면 위에 있지 않게(A 에서 나가는 네 모서리 중 서로 마주보지 않는 셋), 답 계수는 ±1."
    creative: "(1) 기저를 AB, AC 와 위·아래 벡터 AF 로 바꿔 AD 를 표현(★3) (2) 모서리 길이를 주고 |CF+BE| 의 크기(★3~4 · 직교 분해 I-RT d1) (3) 정팔면체를 정사면체로 바꿔 '한 평면 마름모' 가 없게 하면 무게중심 좌표 도입(★4 · I-RT d2)."
```

```yaml
- id: RPM-GEO-0514
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    2(a-2b+x)=3(a-2b+2x) 를 만족시키는 x 를 x=ma+nb 로 나타낼 때 m+n 의 값. 5지선다.
  category: "전개 → x 에 대해 정리(일차방정식처럼) → x=-a/4+b/2 → m+n=1/4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식에서 벡터 x 정리하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a-4b+2x=3a-6b+6x → -4x=a-2b → x=-(1/4)a+(1/2)b → m+n=1/4. 벡터 등식을 일차방정식처럼 정리하는 한 단계. 통찰 없음·M_total 4 → 시험 구역 기본 ★2 에서 −1 적용 ★1.
  tier: star_1
  mechanism_primary: "전개 → -4x=a-2b → x=-a/4+b/2 → m+n=1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 계수(2·3)와 괄호 안 계수. 제약: x 의 계수가 양변에서 상쇄되지 않게(2·1≠3·2 처럼), 결과 계수가 분수면 선택지 간격 1/4 로."
    creative: "(1) x, y 두 벡터의 연립(x+y=…, 2x-y=…)으로 확장(★2 · Mₛ 2) (2) x 의 조건을 'x 가 a 와 평행' 으로 바꿔 b 계수가 0 이 되는 k 를 묻기(★2 · 유형 09) (3) |x| 를 묻되 a, b 가 직교 단위벡터라는 조건 추가(★2 · 직교 분해)."
```

```yaml
- id: RPM-GEO-0515
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    일정한 간격의 평행선 격자 위의 다섯 점 O, A, B, C, D 에서 OA=a, OB=b 일 때 OC+OD 를 a, b 로 나타내기.
  category: "격자의 두 방향 단위 = a, b → C, D 의 (a,b) 성분 읽기 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기울어진 평행선 격자를 가로 단위 a·빗선 단위 b 의 기저로 읽어 C=-a+2b, D=2a+3b 로 성분화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "격자 위 벡터를 두 기준 벡터의 일차결합으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로 방향이 a, 빗선 방향이 b 인 격자에서 C 는 O 에서 b 방향으로 2칸·a 방향으로 -1칸(OC=-a+2b), D 는 b 방향 3칸·a 방향 2칸(OD=2a+3b). 합 a+5b. 기울어진 격자를 기저로 읽는 RT d1 이지만 기저가 그림에 화살표로 표시돼 있어 0494 보다 가볍다. 통찰 1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "격자 기저 (a,b) → OC=-a+2b, OD=2a+3b → OC+OD=a+5b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\vec{a}+5\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-0515.png"
  latex: latex-bank/rpm-geo/items/0515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "C, D 의 격자 위치(라벨 고정). 제약: 격자 단위가 a, b 와 같게 그림을 유지, 성분은 작은 정수(-2~3)."
    creative: "(1) OC+OD 대신 CD 를 묻기(뺄셈 · ★2) (2) 기저 표시 화살표를 지우고 OA·OB 만 점으로 주면 기저 발견이 필요(0494 골조 · ★2~3) (3) 'CD∥AB 인가' 또는 '세 점 A, C, D 가 한 직선 위인가' 를 붙여 유형 09·10 과 결합(★3)."
```

```yaml
- id: RPM-GEO-0516
  page: 81
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    사각형 ABCD 의 대각선 교점 O 에 대해 2OA-OB=2OD-OC 가 성립할 때 사각형 ABCD 의 종류.
  category: "이항 → 2(OA-OD)=OB-OC → 2DA=CB → AD∥BC, BC=2AD → 한 쌍의 대변만 평행 → 사다리꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 등식 2DA=CB 를 도형의 성질(AD∥BC 이고 길이는 BC 가 AD 의 2배 → 평행사변형이 아닌 사다리꼴)로 해석하는 대수→기하 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 등식이 나타내는 사각형의 종류 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2OA-2OD=OB-OC → 2(OA-OD)=OB-OC → 2DA=CB. 따라서 AD∥BC 이고 |BC|=2|AD| 이므로 두 대변이 평행하되 길이가 달라 사다리꼴. 정리는 두 줄이지만 '벡터 등식이 무엇을 말하는가' 를 읽는 RT d1 이 전부이며, 길이비를 놓치고 평행사변형이라 답하는 것이 전형 오답. 시험 구역·통찰 1·M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "이항·묶기 → 2DA=CB → AD∥BC, BC=2AD → 사다리꼴"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "사다리꼴"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 (→ 3 이면 BC=3AD, 여전히 사다리꼴 · 1 이면 DA=CB 로 평행사변형). 제약: 대각선 교점 O 는 시점 통일용이라 어느 점이어도 결과 같음(O 를 임의의 점으로 바꿔도 됨), 계수가 같으면 답이 평행사변형으로 바뀜."
    creative: "(1) 계수를 같게 해 평행사변형이 되게 하고 '마름모가 되기 위한 추가 조건' 을 묻기(★3 · 크기 조건 결합) (2) 등식을 OA+OC=OB+OD 로 주고 O 가 대각선 교점이라는 조건 없이 사각형 판별(★3 · I-EQV d1) (3) 등식이 나타내는 점 X 의 자취(AX=2XB 등)로 확장(★3~4 · I-RT d2)."
```

```yaml
- id: RPM-GEO-0517
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정육각형 ABCDEF 에서 AB=a, AC=b 일 때 CF+AD 를 a, b 로 나타내기. 5지선다.
  category: "중심 O: BC=AO=b-a → AD=2AO=2(b-a) · CF=2CO=-2a → 합 -4a+2b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육각형에서 벡터를 두 기준 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심을 O 라 하면 ABCO 는 마름모라 AO=BC=AC-AB=b-a, AD=2AO=-2a+2b. CO=CA+AO=-b+(b-a)=-a 이므로 CF=2CO=-2a. 합 -4a+2b → ②. 정육각형을 중심 O 기준 마름모 6개로 분해하는 표준 골조, 부호 처리(T-부호)만 조심. 통찰 없음·M_total 5·「중요」 → ★2.
  tier: star_2
  mechanism_primary: "AO=BC=b-a → AD=2(b-a), CO=-a → CF=-2a → CF+AD=-4a+2b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0517.png"
  latex: latex-bank/rpm-geo/items/0517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터 조합(CF+AD → BE-AD · CE+FB)과 기저(AB, AC → AB, AF). 제약: 기저 두 벡터가 평행하지 않게(AB, AD 는 가능하지만 AB, DE 는 평행), 답 계수 정수."
    creative: "(1) 변의 중점 G 를 넣어 분수 계수(0518 · ★2) (2) 정육각형 두 개 배치(0525 · ★3 · I-RT d1) (3) 한 변의 길이를 주고 |CF+AD| 의 값을 묻기(0523 · ★2)."
```

```yaml
- id: RPM-GEO-0518
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정육각형 ABCDEF 에서 BC 의 중점 G, AB=a, AF=b 이고 FG=ma+nb 일 때 m-n 의 값.
  category: "BC=AO=a+b → BG=(a+b)/2 → AG=a+BG → FG=AG-AF → 계수 → m-n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육각형에서 벡터를 두 기준 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 O 에 대해 ABOF 가 마름모라 AO=a+b, BC=AO. BG=(a+b)/2, AG=AB+BG=(3/2)a+(1/2)b, FG=AG-AF=(3/2)a-(1/2)b → m-n=3/2+1/2=2. 정육각형 분해 표준 골조에 중점 한 단계. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "BC=AO=a+b → BG=(a+b)/2 → AG=3a/2+b/2 → FG=AG-AF=3a/2-b/2 → m-n=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0518.png"
  latex: latex-bank/rpm-geo/items/0518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "G 의 위치(BC 의 중점 → CD 의 중점 · BC 를 1:2 로 내분)와 시점(F → E). 제약: 기저 AB, AF 고정 시 다른 모든 변은 ±a, ±b, ±(a+b) 로 표현되므로 결과 계수의 분모는 내분비 분모."
    creative: "(1) FG 와 AD 가 평행하도록 하는 G 의 위치(★3 · 유형 09 결합) (2) 두 중점 G, H 를 두고 GH 를 표현(★2~3) (3) |FG| 의 값을 한 변의 길이와 함께 묻기(★3 · 120° 합성·코사인법칙 I-XU d1)."
```

```yaml
- id: RPM-GEO-0519
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    합동인 정육면체 두 개를 붙인 직육면체에서 OA=a(가로 한 칸), OB=b(위), OC=c(뒤)일 때 DE(뒤 위 꼭짓점 D → 가로 두 칸 끝 E)를 a, b, c 로 나타내기.
  category: "OD=OB+OC=b+c, OE=2OA=2a → DE=OE-OD=2a-b-c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 기준 벡터로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    D 는 O 에서 위로 b·뒤로 c 만큼 간 꼭짓점이라 OD=b+c, E 는 가로로 정육면체 두 칸이라 OE=2a. DE=OE-OD=2a-b-c. 시점·종점 읽기와 뺄셈 한 줄이며 기저 세 방향이 모두 그림에 화살표로 표시돼 있다. 통찰 없음·M_total 4 → 시험 구역 기본 ★2 에서 −1 적용 ★1.
  tier: star_1
  mechanism_primary: "OD=b+c, OE=2a → DE=OE-OD=2a-b-c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\vec{a}-\vec{b}-\vec{c}$'
  answer_source: "답지"
  figure: "crop:fig-0519.png"
  latex: latex-bank/rpm-geo/items/0519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "붙인 정육면체 개수(2 → 3, OE=3a)와 묻는 벡터(DE → BE·CE·AD). 제약: 기저 a, b, c 는 O 에서 나가는 세 모서리로 고정(그림 화살표), 결과 계수는 정수."
    creative: "(1) 모서리 길이 1 을 주고 |DE| 를 묻기(★2 · 직교 분해 √6) (2) 기저 하나를 면의 대각선(OB → OD)으로 바꿔 역분해 한 단계 추가(0524 골조 · ★2) (3) 정육면체 두 개를 면 대각선 방향으로 비스듬히 붙여 기저를 다시 잡게 하기(★3 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0520
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평행하지 않은 두 벡터 a, b 에 대해 m(a-b)+n(3a-2b)-b=n·a+m(-a+2b) 를 만족시키는 실수 m, n 의 차 m-n. 5지선다.
  category: "양변 전개 → a, b 계수 정리 → 일차독립으로 계수 비교 → 2×2 연립 → m-n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 같을 조건 — 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 (m+3n)a+(-m-2n-1)b, 우변 (n-m)a+2m·b. 계수 비교 m+3n=n-m, -m-2n-1=2m → m+n=0, 3m+2n=-1 → m=-1, n=1 → m-n=-2. 0489 와 같은 골조에 양변 전개가 붙었을 뿐이고 통찰 없음·M_total 4 → −1 후보이나, 양변 정리에서 부호 실수(T-부호)가 잦은 시험 구역 기본 문항이라 ★2 유지(★1/★2 경계 · 0489 와 같은 처리).
  tier: star_2
  mechanism_primary: "전개 → (m+3n)a+(-m-2n-1)b=(n-m)a+2m·b → m+n=0, 3m+2n=-1 → m=-1, n=1 → m-n=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수와 양변의 항 배치를 자유롭게. 제약: 정리 뒤 2×2 연립의 계수행렬식이 0 이 아니고 해가 정수, 묻는 값(m-n · m+n · mn)이 선택지 간격 1 안에서 구별되게."
    creative: "(1) 우변을 0 으로 옮겨 '두 계수가 모두 0' 꼴(0490 골조 · ★1~2) (2) 계수에 x², y 등 이차식을 넣어 연립이 이차가 되게(0491 골조 · ★2) (3) 등식을 '두 벡터가 평행' 조건으로 바꿔 비례식으로(0521 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0521
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평행하지 않은 a, b 에 대해 p=a-b, q=m·a+3b, r=2a-5b 일 때 p+q 와 q-r 가 서로 평행하도록 하는 실수 m. 5지선다.
  category: "p+q=(1+m)a+2b, q-r=(m-2)a+8b → 평행 ⇔ q-r=k(p+q) → 8=2k → k=4 → m-2=4(1+m) → m=-2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 실수배 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p+q=(1+m)a+2b, q-r=(m-2)a+8b. 평행이므로 q-r=k(p+q): b 계수에서 k=4, a 계수에서 m-2=4(1+m) → m=-2 → ①. 두 벡터 정리 한 단계·실수배 조건 한 단계·일차방정식 한 줄. 대표문제 0496 과 같은 골조이며 통찰 없음·M_total 5·「중요」 → 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: "p+q, q-r 정리 → q-r=k(p+q) → k=4 → m-2=4(1+m) → m=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q, r 의 계수와 m 의 위치(q 의 a 계수 → r 의 b 계수). 제약: 두 결합 벡터가 영벡터가 되지 않게(1+m≠0), 비례식이 일차가 되도록 m 은 한 벡터의 한 계수에만, 답 정수."
    creative: "(1) m 을 두 벡터에 모두 넣어 비례식이 이차가 되게 하고 양수 해만 취하기(0497 골조 · ★2~3 · I-VF d1) (2) 벡터를 점의 위치벡터로 감춰 AB∥AC 로(0499 골조 · ★2) (3) '평행하지 않도록 하는 m 의 조건' 으로 뒤집어 부정 조건 해석(★2~3 · I-EQV d1)."
```

```yaml
- id: RPM-GEO-0522
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    OA=-3a-b, OB=5a-3b, OC=a+t·b 일 때 세 점 A, B, C 가 한 직선 위에 있도록 하는 실수 t (a, b 는 평행하지 않음).
  category: "AB=OB-OA=8a-2b, AC=OC-OA=4a+(t+1)b → AC=kAB → k=1/2 → t+1=-1 → t=-2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — AB∥AC"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=8a-2b, AC=4a+(t+1)b. 한 직선 위 ⇔ AC=kAB: a 계수에서 k=1/2, b 계수에서 t+1=-1 → t=-2. 뺄셈 두 번·실수배 비교 한 번. 대표문제 0500 과 같은 골조이며 통찰 없음·M_total 5 → 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: "AB=8a-2b, AC=4a+(t+1)b → AC=(1/2)AB → t+1=-1 → t=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA, OB 의 계수와 t 의 위치(OC 의 b 계수 → a 계수). 제약: A≠B 가 되도록 AB≠0, AB 의 t 없는 쪽 계수가 0 이 아니어야 k 가 바로 결정, 답 정수."
    creative: "(1) 세 점 중 두 점에 매개변수를 넣어 t 의 이차방정식으로(★2~3) (2) 'C 가 선분 AB 위에 있을 조건' 으로 바꿔 0<k<1 범위 해석(★3 · I-EQV d1) (3) OC=(3-t)OA+2tOB 처럼 계수 합 =1 판정으로 푸는 꼴(0503 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0523
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 변이 1 인 정육각형 ABCDEF 에서 |AD+2DE| 의 값. 5지선다.
  category: "중심 O: AD=2AO, DE=OF → AD+2DE=2(AO+OF)=2AF → |·|=2·1=2 (또는 AD+DE+DE=AE+BA=BE, 긴 대각선 2)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터 합·차의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 O 에 대해 AD=2AO, DE=OF 이므로 AD+2DE=2(AO+OF)=2AF, 크기 2. 또는 AD+DE=AE 로 잇고 남은 DE=BA 를 앞에 붙여 BA+AE=BE(긴 대각선 2)로 봐도 된다. 정육각형에서 같은 벡터를 찾아 시점·종점을 잇는 두 단계, 통찰 없음·M_total 5·교육청 기출(+0) → 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: "AD=2AO, DE=OF → AD+2DE=2AF → |2AF|=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0523.png"
  latex: latex-bank/rpm-geo/items/0523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(1 → 2)와 벡터 조합(AD+2DE → AC+CE·AB+AF+AD). 제약: 결과가 한 변(1)·짧은 대각선(√3)·긴 대각선(2)의 정수배가 되도록 조합, 선택지에 √3 과 2 를 함께 두어 혼동 유도."
    creative: "(1) 조합을 AB+AC+AD+AE+AF 처럼 늘려 중심 대칭으로 묶기(★3 · I-SYM d1) (2) 정육각형 대신 정오각형으로 바꾸면 같은 벡터가 없어 중심 조건이 필요(0506 골조 · ★3 · I-EQV d1) (3) 크기 대신 'AD+2DE 와 같은 벡터를 그림에서 고르기' 로 낮추기(★1~2)."
```

```yaml
- id: RPM-GEO-0524
  page: 82
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 모서리가 2 인 정육면체에서 AB=a, AE=b(아래), AC=c(윗면 대각선)일 때 |2a+b-c| 의 값.
  category: "c=AB+AD → AD=c-a → 2a+b-c=a+b-AD=AB+AE-AD → 세 모서리 직교 → √(2²+2²+2²)=2√3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육면체에서 벡터 합·차의 크기 — 직교 분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기저 c 가 모서리가 아니라 윗면 대각선 AC=AB+AD 이므로 AD=c-a. 2a+b-c=a+b-AD=AB+AE-AD 는 서로 수직인 세 모서리(각 길이 2)의 합·차라 크기 √(4+4+4)=2√3(AF-AD=DF 공간대각선으로 봐도 같음). 면대각선을 모서리로 되돌리는 한 단계가 0505 에 추가된 꼴. 통찰 없음·M_total 5·「중요」 → 시험 구역 기본 ★2.
  tier: star_2
  mechanism_primary: "AD=c-a → 2a+b-c=AB+AE-AD → 직교 세 모서리 → √(4+4+4)=2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0524.png"
  latex: latex-bank/rpm-geo/items/0524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이(2 → 1·3)와 계수(2a+b-c → a+2b-c). 제약: 모서리로 되돌린 뒤 세 계수가 정수가 되게(c 의 계수만큼 a 계수에서 빠짐), 결과 √(p²+q²+r²)·모서리가 깔끔하게."
    creative: "(1) 기저 세 개를 모두 면대각선으로 주어 3×3 역변환(0526 골조 · ★3 · I-CON d1) (2) 직육면체(2×2×1)로 바꿔 각 방향 길이를 따로 관리(★2~3) (3) 크기 대신 '2a+b-c 와 같은 벡터를 꼭짓점 이름으로 답하기'(DF · ★2)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0525
  page: 83
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    한 변을 공유한 합동 정육각형 두 개에서 OP=p(O 의 바로 아래 꼭짓점 P), OQ=q(공유변의 아래 끝 Q)일 때 OR=m·p+n·q(R 은 오른쪽 육각형의 위 꼭짓점)인 실수 m, n 의 곱 mn.
  category: "오른쪽 중심 O′ 경유: OR=OQ+QO′+O′R · 반지름=변 성질로 QO′=PQ=q-p, O′R=QQ′=-p/2 → OR=2q-(3/2)p → mn=-3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 정육각형에 걸친 OR 을 오른쪽 중심 O′ 경유 경로로 잡고, 각 조각(QO′ · O′R)을 '정육각형의 반지름 = 변' 성질로 왼쪽 육각형의 변 PQ·QQ′ 에 옮긴 뒤 기저 p(세로 긴 대각선)·q(짧은 대각선)로 성분화 — 기저가 변이 아니라 표준 마름모 분해가 바로 안 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육각형 두 개 배치에서 벡터를 두 기준 벡터로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    오른쪽 육각형의 중심 O′ 를 경유해 OR=OQ+QO′+O′R 로 잇는다. 정육각형은 정삼각형 6개라 중심으로 가는 반지름은 어떤 변과 같은 벡터이므로 QO′=PQ=q-p, O′R=QQ′(공유변 아래→위)=-p/2. 따라서 OR=q+(q-p)-p/2=2q-(3/2)p → m=-3/2, n=2, mn=-3. 기저가 변이 아니라 세로 대각선 p 와 짧은 대각선 q 이고 두 육각형에 걸친 경로를 잡아야 해서 그림을 성분으로 옮기는 RT d1 이 있다(좌표(√3)로 풀면 계산만 무거워짐). 서술형 출발 ★3·통찰 1·M_total 5 → ★3 유지.
  tier: star_3
  mechanism_primary: "OR=OQ+QO′+O′R → QO′=PQ=q-p, O′R=-p/2 → OR=2q-(3/2)p → mn=-3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: "crop:fig-0525.png"
  latex: latex-bank/rpm-geo/items/0525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 점(R → 오른쪽 육각형의 다른 꼭짓점·중심 O′)과 묻는 값(mn → m+n). 제약: 그림 라벨(O 위 꼭짓점 · P 바로 아래 · Q 공유변 아래 끝)과 기저 p, q 는 고정, 결과 계수는 분모 2 이하."
    creative: "(1) 기저를 변 두 개(OA, OF 류)로 바꾸면 표준 마름모 분해라 ★2 로 내려감(0517 골조) (2) 육각형 세 개를 벌집처럼 붙여 두 칸 건너 꼭짓점을 묻기(★3~4 · I-RT d2) (3) 한 변의 길이를 주고 |OR| 을 함께 묻기(★3 · 120° 합성·코사인법칙 I-XU d1)."
```

```yaml
- id: RPM-GEO-0526
  page: 83
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    한 모서리가 1 인 정육면체에서 A 에서 나가는 세 면대각선 AC=a, AF=b, AH=c 를 기저로 BH 를 나타내기.
  category: "모서리 x=AB, y=AD, z=AE 로 a=x+y, b=x+z, c=y+z → 합·차로 x=(a+b-c)/2 → BH=AH-AB=c-x=-a/2-b/2+3c/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "면대각선 기저를 모서리로 되돌리기 위해 a=x+y, b=x+z, c=y+z 세 관계를 합·차로 묶어 x=(a+b-c)/2 한 식으로 통합(모서리 셋을 각각 미지수로 두는 3×3 연립을 대칭 합으로 단축)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육면체에서 면대각선 기저로 벡터 나타내기 — 역변환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모서리 벡터 x=AB, y=AD, z=AE 로 쓰면 a=x+y, b=x+z, c=y+z. BH=AH-AB=c-x 이므로 x 만 필요하고 a+b-c=2x 에서 x=(a+b-c)/2. 따라서 BH=c-(a+b-c)/2=-(1/2)a-(1/2)b+(3/2)c. 기저가 모서리가 아니라 면대각선이라 정방향 분해(0505·0524)가 아니라 역변환이 필요하고, 세 관계를 합·차로 묶는 CON d1 한 개. 서술형 출발 ★3·통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "a=x+y, b=x+z, c=y+z → x=(a+b-c)/2 → BH=c-x=-a/2-b/2+3c/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{2}\vec{a}-\dfrac{1}{2}\vec{b}+\dfrac{3}{2}\vec{c}$'
  answer_source: "답지"
  figure: "crop:fig-0526.png"
  latex: latex-bank/rpm-geo/items/0526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터(BH → DF·EC·BG 등 다른 대각선·모서리)와 기저 라벨. 제약: 세 면대각선 기저는 A 에서 나가는 세 개로 고정(한 평면 위에 있지 않음), 결과 계수는 분모 2, 모서리 길이는 계수에 영향 없음."
    creative: "(1) 한 모서리 길이를 주고 |BH| 를 묻기(★3 · 결과가 공간대각선 √3 임을 확인) (2) 기저를 면대각선 둘 + 모서리 하나로 섞어 연립 크기를 줄이기(★2~3) (3) 정육면체 대신 정팔면체에서 이웃 꼭짓점 벡터 셋을 기저로(0513 골조 · ★3~4 · I-SYM d1)."
```

```yaml
- id: RPM-GEO-0527
  page: 83
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    OP=3a+b, OQ=-2a+3b, OR=-5a+m·b, OS=(m+3)a+b 일 때 PQ∥RS 가 되도록 하는 실수 m (a, b 는 평행하지 않음).
  category: "PQ=OQ-OP=-5a+2b, RS=OS-OR=(m+8)a+(1-m)b → RS=kPQ → 비례식 2(m+8)=-5(1-m) → 3m=21 → m=7"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 서로 평행할 조건 — 점의 위치벡터로 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PQ=-5a+2b, RS=(m+8)a+(1-m)b. 평행이므로 RS=kPQ: m+8=-5k, 1-m=2k → 2(m+8)=-5(1-m) → 3m=21 → m=7. 뺄셈 두 번과 비례식 한 줄이며 m 이 양쪽 계수에 들어 있어 일차방정식이 조금 길 뿐 0499 골조 그대로. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 적용 ★2. [분류 이슈] 벤더 「서술형 주관식」 구역이나 골조는 유형 09 기본 문항과 같음 · 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "PQ=-5a+2b, RS=(m+8)a+(1-m)b → 2(m+8)=-5(1-m) → m=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 위치벡터의 계수와 m 의 위치(OR 의 b 계수·OS 의 a 계수 → 다른 조합). 제약: PQ≠0, m 이 두 계수에 들어가도 비례식이 일차가 되게(m² 항이 생기지 않게), 답 정수."
    creative: "(1) m 을 OR, OS 의 같은 성분에 넣어 비례식이 이차가 되게 하고 한 해를 기각(★3 · I-VF d1) (2) 'PQ∥RS 이고 |RS|=2|PQ|' 로 크기 조건을 추가해 k 까지 결정(★3) (3) PQRS 가 사다리꼴이 되는 조건으로 바꿔 '평행사변형이 아님' 까지 확인(0516 골조 · ★3 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0528
  page: 83
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    정사각형 ABCD 에서 AB=a, AD=b, BD=c 이고 |a-b+2c|=2 일 때 한 변의 길이.
  category: "c=BD=AD-AB=b-a → a-b+2c=(a-b)+2(b-a)=b-a=c → |c|=2 → 대각선 2 → 한 변 √2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터 합·차의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 기저가 독립이 아니다: c=BD=AD-AB=b-a. 대입하면 a-b+2c=(a-b)+2(b-a)=b-a=c 이므로 조건은 |BD|=2, 즉 대각선이 2 → 한 변 2/√2=√2. 종속 관계 한 줄·정리 한 줄·대각선→변 한 줄. 통찰 없음·M_total 5 → 서술형 출발 ★3 에서 −1 적용 ★2. [분류 이슈] 벤더 「서술형 주관식」이나 정리하면 식이 c 하나로 무너지는 가벼운 문항 · 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "c=b-a → a-b+2c=c → |BD|=2 → 변=2/√2=√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-0528.png"
  latex: latex-bank/rpm-geo/items/0528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기 값(2 → 4·2√2)과 계수(a-b+2c → 2a-2b+3c 처럼 정리 결과가 c 의 실수배가 되게). 제약: 세 계수는 c=b-a 대입 후 한 벡터의 실수배로 무너지도록(p·a+q·b+r·c 에서 p=-q), 결과 변의 길이가 유리수 또는 √2 배."
    creative: "(1) 정리 결과가 a+b(다른 대각선 AC)나 a 와 b 의 일반 결합이 되게 해 직교 분해 √(p²+q²) 를 쓰게 하기(★2~3) (2) 정사각형 대신 마름모(한 각 60°)로 바꿔 코사인법칙 결합(★3 · I-XU d1) (3) 조건을 |a-b+2c|=|a+b| 같은 등식으로 주고 사각형의 종류를 판별(0516 골조 · ★3 · I-RT d1)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0529
  page: 83
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    원 (x-1)²+(y-√3)²=1 위를 움직이는 점 A 에 대해 OP=OA/|OA| 인 점 P 가 나타내는 도형의 길이(O 는 원점).
  category: "OP = OA 방향의 단위벡터 → P 는 단위원 위 · 방향각 범위 = O 에서 원에 그은 두 접선 사이 → 중심 (1,√3) 거리 2·반지름 1 → 반각 30° → 호 60° → 길이 π/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OP=OA/|OA| 를 'P 는 반직선 OA 위의 단위원 점(방향만 남기고 크기를 1 로 정규화)' 으로 해석 — 자취가 단위원의 일부이고 길이는 방향각 범위로 결정된다는 조건 해석"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방향각 범위를 'O 에서 원에 그은 두 접선이 이루는 각' 이라는 기하로 옮김 — |OC|=2, r=1 → sin θ=1/2 → 반각 30°"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "정규화 벡터 OA/|OA| 의 종점의 자취 — 단위원 호의 길이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OA/|OA| 는 OA 방향의 단위벡터이므로 P 는 단위원 위의 점이고, A 가 원 위를 돌 때 P 는 원이 O 에서 보이는 방향각 범위만큼의 호를 그린다. 원의 중심 C(1,√3) 는 |OC|=2, 반지름 1 이므로 O 에서 그은 접선과 OC 의 각은 sin θ=1/2 → 30°, 방향각 범위는 60°=π/3. 단위원 호의 길이 1·π/3=π/3. 정규화 해석 EQV d2 와 접선 각으로 옮기는 RT d1 두 개, 계산은 한 줄. 실력 Up 출발 ★4·통찰 2 → +1 후보이나 통찰 3·저노출 유형 조건 미달 → ★4.
  tier: star_4
  mechanism_primary: "OP=OA/|OA| → P 는 단위원 위 → 방향각 범위 = O 에서 원에 그은 두 접선 사이 각 = 2·30° → 호 길이 π/3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심(1,√3) → (√2,√2)·(2,0) 과 반지름(1 → √2·√3). 제약: 원이 원점을 지나거나 품지 않도록 |OC|>r, sin θ=r/|OC| 가 특수각(1/2·√2/2·√3/2)이 되게, 답은 π 의 유리수배."
    creative: "(1) OP=k·OA/|OA| (k=2) 로 반지름을 바꾸면 호의 길이만 k 배(★4 유지) (2) 원이 원점을 지나게(|OC|=r) 하면 방향각 범위가 180° 로 바뀌고 O 자체가 제외되는 경계 처리(★4 · I-VF d1) (3) 원 대신 선분 위를 움직이는 A 로 바꾸면 방향각 범위가 두 끝점 방향으로 결정(★3~4 · I-EQV d2)."
```

```yaml
- id: RPM-GEO-0530
  page: 83
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    삼각형 OAB 에서 OA 를 2:1 로 내분하는 점 C, OB 의 중점 D 에 대해 AD 와 BC 의 교점 P 가 OP=m·OA+n·OB 일 때 m+n.
  category: "OA=a, OB=b · P∈AD: OP=(1-s)a+(s/2)b · P∈BC: OP=(2t/3)a+(1-t)b → 일차독립 계수 비교 → s=1/2, t=3/4 → OP=a/2+b/4 → m+n=3/4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'P 가 AD 위' 와 'P 가 BC 위' 두 조건을 각각 매개변수 s, t 의 일차결합으로 쓰고, a·b 가 일차독립임을 이용해 두 표현을 한 연립으로 통합(교점 = 두 표현의 계수 일치)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 선분의 교점의 위치벡터 — 이중 표현과 계수 비교"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OA=a, OB=b 라 하면 OC=(2/3)a, OD=(1/2)b. P 가 AD 위: OP=(1-s)a+(s/2)b, P 가 BC 위: OP=(2t/3)a+(1-t)b. a, b 가 평행하지 않으므로 1-s=2t/3, s/2=1-t → t=3/4, s=1/2 → OP=(1/2)a+(1/4)b → m+n=3/4. 교점을 두 직선 위 조건의 이중 표현으로 잡는 CON d1 한 개, 나머지는 2×2 연립. 실력 Up 출발 ★4·통찰 1·M_total 6 → 규칙상 −1 조건(통찰 0·M_total ≤5) 아님이라 ★4 유지. [분류 이슈] 골조가 내분점·교점 표준 기법 하나라 체감은 ★3 · 후보 ★3/★4.
  tier: star_4
  mechanism_primary: "P∈AD: (1-s)a+(s/2)b · P∈BC: (2t/3)a+(1-t)b → 계수 일치 → s=1/2, t=3/4 → OP=a/2+b/4 → m+n=3/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: "crop:fig-0530.png"
  latex: latex-bank/rpm-geo/items/0530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비(2:1 → 3:1·1:2)와 D 의 위치(중점 → 1:2 내분). 제약: C, D 가 변의 내부에 있어 두 선분이 삼각형 안에서 만나게, 결과 m, n 이 분모 작은 분수, 그림 라벨 고정."
    creative: "(1) 세 점 O, P, E(E 는 AB 위)가 한 직선 위가 되는 E 의 내분비를 이어 묻기(★4 · 유형 10 결합) (2) 삼각형의 넓이비 PAB:OAB 로 바꾸면 m+n=3/4 의 의미(OP 의 계수 합)를 해석(★4 · I-EQV d1) (3) 사각형 안의 두 대각선 교점으로 바꾸면 기저가 셋이 되어 한 번 더 분해(★4~5 · I-CON d2)."
```

```yaml
- id: RPM-GEO-0531
  page: 83
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    밑면이 정사각형이고 모든 모서리가 2 인 두 정사각뿔 O-ABCD, O′-DCEF 를 밑면이 한 평면 위에 오도록 붙인 도형에서 |OB+OF|² 의 값.
  category: "평행이동 OO′ 로 O′F=OD → OF=OO′+OD → OB+OF=(OB+OD)+OO′=2OM+OO′(M 은 ABCD 의 중심) → OM⊥OO′ → |·|²=4|OM|²+|OO′|²=4·2+4=12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 사각뿔이 OO′ 만큼의 평행이동으로 겹친다는 대칭을 써서 O′F=OD 로 옮기고, 정사각형 대각선 BD 의 중점이 중심 M 임을 써서 OB+OD=2OM 으로 합을 한 벡터로 줄임"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2OM(밑면에 수직 · 높이 √2)과 OO′(밑면에 평행 · 길이 2)이 서로 수직임을 읽어 크기의 제곱을 피타고라스로 분해"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "붙인 입체도형에서 벡터 합의 크기 — 평행이동·중심 대칭으로 합치기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 사각뿔은 OO′(=AD=BC=2) 평행이동으로 겹치므로 O′F=OD. OF=OO′+O′F=OO′+OD 이고 정사각형 ABCD 의 중심 M 은 BD 의 중점이라 OB+OD=2OM. 따라서 OB+OF=2OM+OO′ 이고 OM 은 밑면에 수직(높이 √(4-2)=√2), OO′ 는 밑면에 평행(길이 2)이라 |OB+OF|²=4·2+4=12. 평행이동·중점 대칭으로 합을 줄이는 SYM d2 와 수직 분해 RT d1 두 개(좌표 O(1,1,√2), B(0,0,0), F(4,2,0) 로 직접 계산해도 됨). 실력 Up 출발 ★4·통찰 2 → +1 후보이나 통찰 3 미달 → ★4.
  tier: star_4
  mechanism_primary: "O′F=OD(평행이동) → OB+OF=OB+OD+OO′=2OM+OO′ → OM⊥OO′ → 4·(√2)²+2²=12"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12$'
  answer_source: "답지"
  figure: "crop:fig-0531.png"
  latex: latex-bank/rpm-geo/items/0531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이(2 → 1·3, 높이 = 모서리/√2)와 묻는 조합(OB+OF → OA+OE·OB+O′E). 제약: 모든 모서리가 같아야 높이가 모서리/√2 로 결정, 두 밑면이 한 평면 위·한 변 공유 고정, 결과가 정수가 되도록 제곱을 묻기."
    creative: "(1) |OB+OF| 대신 |OB-OF| 를 물어 2OM 이 아니라 밑면 안의 벡터 FB 가 되게(★3 · 대칭 소멸) (2) 사각뿔 세 개를 일렬로 붙여 OO″=4 로 확장(★4 · 같은 골조) (3) 두 뿔을 밑면끼리 위아래로 붙인 정팔면체로 바꾸면 O′=-O 대칭이 되어 합이 상쇄(0513 골조 · ★3~4 · I-SYM d1)."
```

## 표본 판정 요약 (43문)

- ★ 분포: ★1 5 · ★2 25 · ★3 10 · ★4 3 · ★5 0
- 통찰형 15 · 절차형 28 · premium 0
- 통찰 라벨: I-RT 10 · I-SYM 3(0507·0513·0531) · I-EQV 2(0506·0529) · I-CON 2(0526·0530) · I-XU 1(0507) · depth 2 는 0529(EQV)·0531(SYM) 둘뿐
- type_hint 상위: 「세 점이 한 직선 위에 있을 조건 — AB∥AC」 5 · 「두 벡터가 서로 같을 조건 — 계수 비교」 4 · 「두 벡터가 서로 평행할 조건 — 실수배 계수 비교」 4 · 「격자 위 벡터를 두 기준 벡터의 일차결합으로 나타내기」 4 · 「평면도형에서 벡터 합·차의 크기」 3
- 대상층: 중하위권 23 · 중위권 9 · 하위권 5 · 중상위권 4 · 상위권 2
- 그림: 22문(`crop:fig-0493` · 0494 · 0495 · 0504 · 0505 · 0506 · 0508 · 0509 · 0510 · 0511 · 0513 · 0515 · 0517 · 0518 · 0519 · 0523 · 0524 · 0525 · 0526 · 0528 · 0530 · 0531)
- 전사 답: 43문 모두 재계산과 일치(「전사 답 확인 필요」 0건)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0503 | 벤더 「상중」이나 통찰 없음·M_total 5 · 대표문제 0500(★2)보다 계산이 오히려 적음(기저가 OA·OB 자체 · 매개변수 t 만 추상). 라벨 ★2 | ★2 / ★3 |
| RPM-GEO-0504 | 「유형 UP 11」 대표문항이지만 골조는 벡터 합·차 정리 두 줄(CB+CB=2CB). 라벨 ★2 | ★2 / ★3 |
| RPM-GEO-0507 | 통찰 2(SYM d1 + XU d1)로 +1 후보였으나 둘 다 d1·계산 두 줄이라 「상중」 출발 ★3 유지. 경계 기록 | ★3 / ★4 |
| RPM-GEO-0527 | 「서술형 주관식」 구역이나 골조는 유형 09 기본(0499)과 같음 · 통찰 없음·M_total 5 → −1. 라벨 ★2 | ★2 / ★3 |
| RPM-GEO-0528 | 「서술형 주관식」 구역이나 c=b-a 대입으로 식이 c 하나로 무너지는 가벼운 문항 → −1. 라벨 ★2 | ★2 / ★3 |
| RPM-GEO-0530 | 「실력 Up」 출발 ★4 를 규칙대로 유지(통찰 1·M_total 6)했으나 골조는 내분점·교점 이중 표현 표준 기법 하나라 체감 ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 될 유형**: 유형 07·08·09·10 은 모두 「기저 a, b 일차독립 → 계수 비교」 한 골조의 세 얼굴(등식 · 평행(실수배) · 한 직선 위(AB∥AC 또는 계수 합 1))이다. 카탈로그에서는 「일차독립 계수 비교」 한 유형 아래 하위 변형(등식 / 평행 / 공선 / 점의 위치벡터로 감춘 꼴)으로 두면 되고, base ★ 는 ★2(대표·기본) · ★1(한 줄 계산) 로 충분하다. 「점의 위치벡터로 주어진 경우」(0492·0499·0527)는 벡터 뺄셈 한 단계만 앞에 붙는 하위 변형이라 독립 유형으로 세울 필요가 없다.
- **따로 세워야 할 유형**: (1) 「격자·정다각형 배치를 기저 성분으로 읽기」(0493~0495 · 0515 · 0517·0518 · 0525) — 기저가 그림에 화살표로 표시돼 있으면 ★2, 기저를 스스로 잡거나 기저가 변이 아닌 대각선이면 I-RT 로 ★3 (base ★2 · 변형 축 = 기저 표시 유무). (2) 「도형에서 벡터 합·차의 크기 — 직교 분해」(0504·0505·0523·0524·0528) — 평면 정다각형과 정육면체를 한 유형으로 묶고 면대각선 기저(0524)·기저 종속(0528)을 변형 축으로. (3) 「면대각선 기저 역변환」(0526)은 (2) 와 골조가 달라(3×3 관계의 합·차 통합 · I-CON) ★3 유형으로 분리. (4) 「정다각형 중심 조건·대칭으로 합 줄이기」(0506·0513·0531) — I-SYM/I-EQV 가 핵심인 ★3~4 유형. (5) 「실생활 벡터 합성」(0508~0510) — 강 건너기·힘의 평형은 골조(수직 성분 독립 · 합력 평형)가 같아 한 유형 ★3. (6) 「정규화 벡터 종점의 자취」(0529)와 「두 선분의 교점 이중 표현」(0530)은 이 단원의 ★4 대표 골조로 각각 독립 유형. (7) 「벡터 등식이 나타내는 사각형 판별」(0516)과 「타원 정의 결합」(0507)은 단독 1문이지만 골조가 다른 어느 유형에도 속하지 않아 소수 유형으로 등재.
- **★ 라벨 드리프트 경향**: 이 범위에서 벤더 구역 출발점보다 낮게 판정한 문항이 7(0503·0504·0505·0514·0519·0527·0528), 높게 판정한 문항은 0. 「서술형 주관식」과 「유형 UP」 구역의 절차형 문항은 카탈로그에서 base ★2 로 두는 것이 학생 체감과 맞고, ★4 는 실력 Up 3문 중 통찰 2개인 0529·0531 만 확실하다.
