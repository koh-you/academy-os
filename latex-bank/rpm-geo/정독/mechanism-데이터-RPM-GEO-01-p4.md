---
name: mechanism-데이터-RPM-GEO-01-p4
description: RPM 기하 01 이차곡선(4/4 · 유형 16~18 + 유형 UP 19~20 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 01 이차곡선
  unit_code: GEO-01
  part: "4/4"
  extract_range: "19~25쪽 · 0106~0150"
  total_problems: 45
  unit_total: 150
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 01 이차곡선 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 01 이차곡선 단원의 마지막 범위(19~25쪽 · 0106~0150 · 45문항)를 다룬다. 유형 16 쌍곡선의 정의의 활용(4문) · 유형 17 이차곡선(4문) · 유형 18 자취의 방정식(3문) · 유형 UP 19 이차곡선의 정의의 활용(3문) · 유형 UP 20 이차곡선의 실생활에의 활용(3문) · 시험에 꼭 나오는 문제(21문) · 서술형 주관식(4문) · 실력 Up(3문)이다. RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 유형(대표문제 · 난이도 중하~상중, ★2 출발) / 유형 UP(★3 출발) / 시험에 꼭 나오는 문제(난이도 표시 없음 · 중요·평가원 기출 태그, ★2~3) / 서술형 주관식(★3 출발) / 실력 Up(★4 출발). 이 범위는 단원 종합 구역이 절반이라 ★2 가 25문으로 가장 많고, ★3 14문 · ★4 2문(실력 Up 의 닮음·좌표화 문항) · ★1 4문(공식 읽기형)이다. 단계별 라벨링으로 통찰이 잡힌 문항은 19문(RT 10 · CON 4 · EQV 3 · SC 2 · XU 1 · SYM 1)이고, 나머지 26문은 정의·공식·자취 절차의 절차형이다. 그림 문항은 16문이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약 — 초점이 정수가 되는 a²·b² 조건, 원 제외 같은 경계, 그림 라벨 고정) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점 — 타원↔쌍곡선 정의 교체, 안·밖 판별 추가, 역방향 발문, 단원 밖 정리 결합)를 모두 채웠다. 이 범위의 통찰은 대부분 「초점거리를 정의로 다른 거리(준선 거리 · 다른 초점거리)로 바꾸는 전환」과 「두 곡선의 정의를 한 식으로 결합」이며, ★ 가 오르는 지점은 닮음·중선정리·각의 이등분선 같은 도형 정리 결합과 도형 조건의 좌표화로 표시했다.

## 문항 데이터

### 유형 16 쌍곡선의 정의의 활용

```yaml
- id: RPM-GEO-0106
  page: 19
  vendor_label: "유형 16 쌍곡선의 정의의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 F(4,0) 을 지나는 직선이 쌍곡선 x²/9−y²/7=1 의 오른쪽 가지와 만나는 두 점 A, B 와 점 C(−4,0) 에 대해 삼각형 ABC 의 둘레가 30 일 때 선분 AB 의 길이. 그림.
  category: "c=4 → C 가 다른 초점 → AC=AF+6, BC=BF+6 → 둘레 = 2·AB+12 → AB"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "C(−4,0) 이 다른 초점임을 읽고 둘레 조건을 정의 AC−AF=BC−BF=2a 로 접어 AB 하나의 식 2·AB+12=30 으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 초점을 지나는 직선과 삼각형의 둘레"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a²=9, b²=7 → c=4 이므로 F·C 가 두 초점. A·B 가 오른쪽 가지 위이므로 AC−AF=6, BC−BF=6 이고 AF+BF=AB 라 둘레 = (AF+6)+(BF+6)+AB = 2·AB+12 = 30 → AB=9. 둘레 조건을 정의로 접는 동치 변환 EQV d1·M_total 4. 유형 대표문제 출발 ★2, 조정 없음 → ★2.
  tier: star_2
  mechanism_primary: "c=4 → C=F' → (AC−AF)+(BC−BF)=2·2a=12 → 둘레 30 = 2·AB+12 → AB=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0106.png"
  latex: latex-bank/rpm-geo/items/0106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b² 와 둘레 값을 바꿀 수 있음. 제약: c²=a²+b² 가 완전제곱이어야 초점이 정수(예: 16·9, 25·144)이고, 둘레−4a 가 짝수·양수여야 AB 가 정수. 그림 라벨(F 오른쪽·C 왼쪽·A 위·B 아래)은 고정."
    creative: "(1) AB 를 주고 둘레를 묻기(★2 유지) (2) 직선이 왼쪽 가지와 오른쪽 가지에서 하나씩 만나게 하면 차의 부호가 갈려 |AC−AF| 케이스 분기(MI d1 추가 ★3) (3) 타원으로 바꾸면 합 정의라 둘레 = 4a 상수 — 두 정의를 대비시키는 ㄱㄴㄷ 문항(★2)."
```

```yaml
- id: RPM-GEO-0107
  page: 19
  vendor_label: "유형 16 쌍곡선의 정의의 활용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²/16−y²/9=1 위의 두 점 P, Q 와 두 초점 F, F' 에 대해 PF=1, QF=4 일 때 PF'+QF' 의 값.
  category: "a=4 → |PF'−PF|=8 → 음수 기각 → PF'=9, QF'=12 → 합 21"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 정의 — 초점거리의 합·차 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a=8. PF'=PF±8 에서 음수 기각 → PF'=9, QF'=12 → 합 21 (PF=1=c−a 이므로 P 는 꼭짓점 — 답에 영향 없음). 정의 대입 두 번의 읽기형·M_total 4·통찰 없음 → 중하 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "2a=8 → PF'=PF+8=9, QF'=QF+8=12 → 21"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$21$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b² 와 PF·QF 값. 제약: PF ≥ c−a (오른쪽 가지 위 최소 초점거리)여야 점이 존재하고, PF<2a 이면 PF'=PF−2a 가 음수라 자동 기각되지만 PF>2a 로 주면 두 가지 모두 가능해 가지를 지정해야 함."
    creative: "(1) PF'+QF' 대신 |PF'−QF'| 묻기(★1) (2) 한 점은 왼쪽 가지에 두어 PF'=PF−2a 가 되게 하면 부호 분기(MI d1 ★2) (3) 타원으로 바꿔 합 정의(★1)."
```

```yaml
- id: RPM-GEO-0108
  page: 19
  vendor_label: "유형 16 쌍곡선의 정의의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²/4−y²/12=1 위의 점 P 와 두 초점 F, F' 에 대해 PF:PF'=3:2 일 때 삼각형 PF'F 의 둘레.
  category: "PF=3t, PF'=2t → t=2a=4 → PF=12, PF'=8 → c=4 → 둘레 28"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 초점거리의 비와 삼각형의 둘레"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=2 → 차 4 → 3t−2t=4 → t=4 → PF=12, PF'=8. c²=4+12=16 → FF'=8. 둘레 12+8+8=28. 비 설정·정의·초점거리 세 요소를 잇는 표준 절차 5단계, 통찰 없음. 「중」 출발 ★2, M_total 5 는 −1 후보이나 읽기형이 아니라 유지.
  tier: star_2
  mechanism_primary: "PF:PF'=3:2 → 3t−2t=2a=4 → PF=12, PF'=8 → FF'=2c=8 → 둘레 28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(3:2 → 5:3, 2:1)·a²·b². 제약: 비의 차 × t = 2a 로 t 가 정수, PF ≥ c−a, 삼각형 부등식(PF+PF'>2c) 성립. 답 = (m+n)·2a/(m−n) + 2c."
    creative: "(1) 둘레를 주고 비를 묻기(역방향 ★2) (2) 비 대신 ∠PF'F=90° 같은 각 조건으로 바꾸면 피타고라스 결합(★3) (3) 타원에서 같은 비 → 합 정의(★2)."
```

```yaml
- id: RPM-GEO-0109
  page: 19
  vendor_label: "유형 16 쌍곡선의 정의의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²/2−y²/2=1 (초점 F, F') 과 FF' 을 지름으로 하는 원이 제1사분면에서 만나는 점 P 에 대해 삼각형 PF'F 의 넓이. 그림.
  category: "지름 → ∠F'PF=90° → PF'²+PF²=(2c)²=16, PF'−PF=2√2 → PF·PF'=4 → 넓이 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "FF' 이 지름인 원 위의 P → ∠F'PF=90° (원 → 직각) 으로 피타고라스 식을 확보해 정의의 차와 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 초점 삼각형의 넓이(직각 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c²=4 → FF'=4, 원 x²+y²=4. 탈레스로 직각 → PF'²+PF²=16, 정의 (PF'−PF)²=8 → 두 식 차 → 2·PF·PF'=8 → 넓이 ½·4=2. (다른 풀이: 두 방정식을 연립하면 y²=1 → 밑변 4·높이 1.) 원→직각 전환 RT d1, 합·차·곱 정리는 표준. 「중」 ★2 유지 — 세 도구 결합이라 ★2/★3 경계.
  tier: star_2
  mechanism_primary: "FF' 지름 원 → ∠F'PF=90° → PF²+PF'²=16 · (PF'−PF)²=8 → PF·PF'=4 → 넓이 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0109.png"
  latex: latex-bank/rpm-geo/items/0109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a²=b² 인 직각쌍곡선이 아니어도 됨(x²/a²−y²/b²=1, c²=a²+b²). 넓이 = ½·PF·PF' = ½·(4c²−4a²)/2 = b² 이므로 답은 항상 b² — b² 를 정수로. 그림 라벨(F' 왼쪽·F 오른쪽·P 제1사분면) 고정."
    creative: "(1) 원 대신 ∠F'PF=60° 를 주면 코사인법칙(★3) (2) 타원 x²/a²+y²/b²=1 과 지름 원 → 넓이 b² (같은 골조 ★2) (3) 「넓이가 b² 임을 보이시오」 일반화 서술(Mₐ 3 ★3)."
```

### 유형 17 이차곡선

```yaml
- id: RPM-GEO-0110
  page: 20
  vendor_label: "유형 17 이차곡선"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 2x²+y²−1+k(x²+y²−1)=0 이 나타내는 도형이 쌍곡선이 되도록 하는 실수 k 의 값의 범위.
  category: "(2+k)x²+(1+k)y²=1+k → x², y² 계수 이부호 → (2+k)(1+k)<0 → −2<k<−1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식이 나타내는 이차곡선의 판별(계수 부호 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 로 묶어 (2+k)x²+(1+k)y²=1+k. 쌍곡선 ⇔ 두 이차항 계수 부호 반대(우변 ≠0) → (2+k)(1+k)<0 → −2<k<−1, 이 범위에서 1+k≠0 자동. 계수 부호 판별 한 단계·매개변수 k·통찰 없음. 유형 대표문제 ★2 유지(우변 0 이면 두 직선이 되는 경계 확인이 유일한 함정).
  tier: star_2
  mechanism_primary: "k 로 정리 → (2+k)x²+(1+k)y²=1+k → 계수 곱 <0 → −2<k<−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2<k<-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 계수(2,1 / 1,1)와 상수. 제약: 우변 1+k 가 범위 안에서 0 이 되지 않게(0 이 되면 두 직선 — 그 경우를 함정으로 쓰려면 별도 언급)."
    creative: "(1) 「타원」이 되도록 → 두 계수 같은 부호 + 원 제외(T-경계 ★2) (2) 「정수 k 의 개수」로 바꾸면 0113 형(★2) (3) 두 식을 원과 쌍곡선 x²+y²−4+k(x²−y²−1)=0 으로 바꾸면 계수 부호가 뒤바뀌는 지점이 둘 → 구간 분기(MI d1 ★3)."
```

```yaml
- id: RPM-GEO-0111
  page: 20
  vendor_label: "유형 17 이차곡선"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x²+ky²=3 이 나타내는 도형이 타원일 때 실수 k 의 값이 될 수 있는 것. 5지선다.
  category: "타원 ⇔ k>0, k≠1 (원 제외) → ④ 1/2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식이 나타내는 이차곡선의 판별(계수 부호 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²/3+y²/(3/k)=1 이 타원이려면 k>0, 원(k=1) 제외 → ④. 한 줄 판별·M_total 5·통찰 없음 → 중하 출발 ★2 에서 −1 → ★1. ⑤ k=1 이 원 함정.
  tier: star_1
  mechanism_primary: "x²+ky²=3 → k>0 (타원) · k≠1 (원 제외) → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 3 과 선택지. 제약: 선택지에 0·음수·1 을 섞어 각 갈래(포물선 아님·쌍곡선·원)를 오답으로 배치."
    creative: "(1) 「쌍곡선」으로 바꾸면 k<0 (★1) (2) x²+ky²=k 처럼 우변에 k 를 두면 k<0 에서 방정식이 허 → 범위 나눠 보기(MI d1 ★2) (3) kx²+(k−2)y²=1 이 어떤 곡선인지 k 구간별 분류(★2)."
```

```yaml
- id: RPM-GEO-0112
  page: 20
  vendor_label: "유형 17 이차곡선"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 (k+2)x²−(3k−1)y²−4x+6y+4=0 이 나타내는 도형이 포물선이 되도록 하는 모든 실수 k 의 값의 합.
  category: "포물선 ⇔ x², y² 중 한 계수만 0 → k=−2 또는 k=1/3 (남은 일차항 확인) → 합 −5/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식이 나타내는 이차곡선의 판별(계수 부호 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=−2 → 7y²−4x+6y+4=0 (x 일차항 있음 → 포물선), k=1/3 → (7/3)x²−4x+6y+4=0 (y 일차항 있음 → 포물선). 두 경우 모두 유효 → 합 −2+1/3=−5/3. 「한 계수만 0」 분기와 남은 변수의 일차항 확인(T-범위)이 이 유형의 표준 절차. 중하·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x² 계수 0 (k=−2) 또는 y² 계수 0 (k=1/3) → 남은 일차항 존재 확인 → 합 −5/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (k+2), (3k−1) 과 일차항 −4x, 6y. 제약: 두 k 값이 서로 달라야 하고, 각 경우 남은 변수의 일차항 계수가 0 이 아니어야 함(0 이면 직선·두 직선으로 퇴화)."
    creative: "(1) 일차항을 −4x 만 두면 k=1/3 의 경우 y 일차항이 없어 퇴화 → 기각 검증(VF d1 ★3) (2) 「합」 대신 「곱」(★2) (3) 두 계수를 (k²−4), (k−2) 처럼 겹치게 두면 k=2 에서 둘 다 0 → 케이스 정리(MI d1 ★3)."
```

```yaml
- id: RPM-GEO-0113
  page: 20
  vendor_label: "유형 17 이차곡선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 7x²−y²−4−k(x²−y²)=0 이 나타내는 도형이 타원이 되도록 하는 정수 k 의 개수.
  category: "(7−k)x²+(k−1)y²=4 → 7−k>0, k−1>0, 7−k≠k−1 → 1<k<7, k≠4 → 4개"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식이 나타내는 이차곡선의 판별(계수 부호 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 로 정리하면 (7−k)x²+(k−1)y²=4. 타원 ⇔ 두 계수 양수(우변 양수) → 1<k<7, 원 k=4 제외 → 2, 3, 5, 6 → 4개. 부호 두 개(T-부호)와 원 제외(T-경계) 함정 둘. 「중」 ★2.
  tier: star_2
  mechanism_primary: "k 정리 → (7−k)x²+(k−1)y²=4 → 1<k<7 → 원 k=4 제외 → 4개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 7, 1 과 상수 4. 제약: 두 계수가 같아지는 k(원)가 정수 범위 안에 들어와야 T-경계 함정이 살고, 답 = (구간 정수 개수 − 1)."
    creative: "(1) 「쌍곡선이 되도록 하는 정수 k」→ k<1 또는 k>7 무한 → 「|k|≤10」 범위 추가(★2) (2) 우변이 4−k 처럼 k 를 포함하면 우변 부호 분기(MI d1 ★3) (3) 타원의 장축이 x축 위에 있도록 하는 k 를 추가로 요구하면 계수 대소 비교(★3)."
```

### 유형 18 자취의 방정식

```yaml
- id: RPM-GEO-0114
  page: 20
  vendor_label: "유형 18 자취의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    길이 3 인 선분 AB 의 양 끝 A, B 가 각각 x축, y축 위를 움직일 때 AB 를 1:2 로 내분하는 점 P(x,y) 가 나타내는 도형의 방정식. 그림.
  category: "A(a,0), B(0,b), a²+b²=9 → P=(2a/3, b/3) → a=3x/2, b=3y → 대입 → x²/4+y²=1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자취의 방정식 — 선분의 내분점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식으로 x=2a/3, y=b/3 (1:2 순서가 T-표기 함정). a=3x/2, b=3y 를 a²+b²=9 에 대입 → 9x²/4+9y²=9 → x²/4+y²=1. 매개변수 설정 → 관계식 → 역변환 → 대입의 표준 자취 절차 4단계, 통찰 없음. 유형 대표문제 ★2.
  tier: star_2
  mechanism_primary: "A(a,0), B(0,b), a²+b²=9 → 내분점 x=2a/3, y=b/3 → a=3x/2, b=3y → x²/4+y²=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x^2}{4}+y^2=1$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0114.png"
  latex: latex-bank/rpm-geo/items/0114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 길이(3 → 5, 6)와 비(1:2 → 2:1, 1:3). 제약: 길이 L 과 비 m:n 에서 반축이 nL/(m+n), mL/(m+n) 이므로 정수·간단한 분수가 되도록. 그림 라벨(B 위·A 오른쪽·비 2·1 표시) 고정."
    creative: "(1) 외분점으로 바꾸면 부호 처리(T-부호 ★2) (2) 중점(1:1)이면 원 → 「내분 비에 따라 원·타원이 되는 이유」 서술(★3) (3) AB 대신 두 축 위 점 A, B 와 원점 O 로 삼각형 OAB 의 무게중심 자취(★2)."
```

```yaml
- id: RPM-GEO-0115
  page: 20
  vendor_label: "유형 18 자취의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 2x²−7y²=14 위의 점 P 와 점 Q(1,0) 에 대해 선분 PQ 의 중점 M 이 나타내는 도형의 방정식.
  category: "P(p,q) → M=((p+1)/2, q/2) → p=2x−1, q=2y → 대입 → (2x−1)²−14y²=7"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자취의 방정식 — 중점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 공식 역변환 p=2x−1, q=2y 를 2p²−7q²=14 에 대입 → 2(2x−1)²−28y²=14 → (2x−1)²−14y²=7. 표준 자취(중점) 절차, 통찰 없음. 「중」 ★2.
  tier: star_2
  mechanism_primary: "P(p,q) 위 → 중점 M → p=2x−1, q=2y → 2p²−7q²=14 에 대입 → (2x−1)²−14y²=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(2x-1)^2-14y^2=7$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 계수와 Q 좌표. 제약: 표준형으로 요구하면 (x−1/2)²/(7/4)−y²/(1/2)=1 처럼 분수가 생기므로 Q 를 (2,0) 으로 두면 (x−1)² 꼴로 깔끔. 답 형식(전개형/표준형)을 명시."
    creative: "(1) 「점 M 이 나타내는 도형의 주축의 길이」로 물으면 축소 비율(1/2)까지 이해해야 함(★2) (2) Q 를 초점으로 두면 M 의 자취의 초점을 묻는 0142 형(★2) (3) 2:1 내분점으로 바꾸면 0114 골조 결합(★2)."
```

```yaml
- id: RPM-GEO-0116
  page: 20
  vendor_label: "유형 18 자취의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(−2,0) 을 지나고 y축에 접하는 원의 중심 P(x,y) 의 자취 y²+ax+by+c=0 에서 상수 a+b+c 의 값.
  category: "반지름 = |x| → PA = |x| → (x+2)²+y²=x² → y²+4x+4=0 → a+b+c=8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자취의 방정식 — 접하는 원의 중심(포물선의 정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y축 접선 ⇔ 반지름 |x|, 원이 A 를 지나므로 PA=|x|. 제곱하면 x² 항이 소거되어 y²+4x+4=0 → a=4, b=0, c=4 → 8. 자취는 초점 A·준선 y축인 포물선 y²=−4(x+1). 접선 조건 → 반지름 읽기·제곱 정리의 표준 절차. 「중」 ★2.
  tier: star_2
  mechanism_primary: "y축 접선 → r=|x| → PA=|x| → (x+2)²+y²=x² → y²+4x+4=0 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(−2 → −4, 3)와 접하는 축(y축 → x축). 제약: A 가 접선 위에 있지 않아야 자취가 포물선(A 가 y축 위면 퇴화)."
    creative: "(1) 「이 도형의 초점·준선」을 물어 포물선 정의로 연결(RT d1 ★2) (2) 접선을 직선 x=2 로 두면 준선 이동·A 쪽으로 열리는 포물선(★2) (3) 「원 C 와 외접하고 y축에 접하는 원의 중심」으로 바꾸면 PC−r=|x| → 준선이 x=−r 로 밀린 포물선(EQV d1 ★3)."
```

### 유형 UP 19 이차곡선의 정의의 활용

```yaml
- id: RPM-GEO-0117
  page: 21
  vendor_label: "유형 UP 19 이차곡선의 정의의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    두 초점 F, F' 을 공유하는 타원 x²/64+y²/28=1 과 쌍곡선 x²/16−y²/20=1 의 제1사분면 교점 P 에 대해 PF'²−PF² 의 값. 그림.
  category: "c=6 공유 → PF'+PF=16, PF'−PF=8 → (합)(차)=128"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "타원의 합(16)과 쌍곡선의 차(8) 두 정의를 곱셈 공식 PF'²−PF²=(PF'+PF)(PF'−PF) 하나로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 공유하는 타원·쌍곡선의 정의의 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    64−28=36=16+20 → c=6 공유. 정의로 합 16, 차 8 → 곱 128 (또는 PF'=12, PF=4 → 144−16). 두 곡선의 정의를 한 식으로 묶는 CON d1, 계산은 한 줄. 유형 UP 출발 ★3, 통찰 1 → 유지.
    [분류 이슈] 결합을 절차로 보면 M_total 4·통찰 0 → ★2. 체감 ★2/★3 경계.
  tier: star_3
  mechanism_primary: "c²=36 공유 → PF'+PF=2·8, PF'−PF=2·4 → PF'²−PF²=16·8=128"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$128$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0117.png"
  latex: latex-bank/rpm-geo/items/0117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 a²·b² 와 쌍곡선 a'²·b'² 를 바꿀 수 있음. 제약: a²−b²=a'²+b'² (초점 공유)가 필수이고 a>a'>0. 답은 항상 4aa'. 그림 라벨(F' 왼쪽·F 오른쪽·P 제1사분면) 고정."
    creative: "(1) PF·PF' 을 물으면 (합²−차²)/4 = a²−a'² (★3 유지) (2) ∠F'PF 의 코사인이나 삼각형 PF'F 의 넓이를 물으면 코사인법칙 결합(★3~4) (3) 「PF'²−PF² 이 P 의 위치에 무관함을 보이시오」 일반화(Mₐ 3 ★3)."
```

```yaml
- id: RPM-GEO-0118
  page: 21
  vendor_label: "유형 UP 19 이차곡선의 정의의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    타원 16x²+25y²=400 과 포물선 y²=12x 의 교점 P, P 에서 준선 x=−3 에 내린 수선의 발 Q, 점 A(−3,0) 에 대해 AP+PQ 의 값. 그림.
  category: "타원 초점 (±3,0) = 포물선 초점 F(3,0)·A=F' → PQ=PF (포물선 정의) → AP+PF=2a=10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "포물선 정의 PQ=PF 와 타원 정의 PF'+PF=2a 를 A=F' 을 매개로 한 식 AP+PQ=2a 로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원·포물선의 정의의 결합(초점 공유)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x²/25+y²/16=1 → c=3, 포물선 초점 (3,0)·준선 x=−3 → A(−3,0) 이 타원의 다른 초점. PQ=PF 로 바꾸면 AP+PQ=PF'+PF=2·5=10. 두 정의를 잇는 CON d1, 계산 없음. 유형 UP 「중」 → ★3 유지(초점 일치를 스스로 확인해야 함).
  tier: star_3
  mechanism_primary: "타원 c=3 · 포물선 F(3,0), 준선 x=−3 → A=F' → PQ=PF → AP+PQ=PF'+PF=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0118.png"
  latex: latex-bank/rpm-geo/items/0118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 a², b² 와 포물선 4p. 제약: 타원의 c 가 포물선의 p 와 같아야(초점 공유) 하고 A 를 (−c,0) 에 둠. 답은 항상 2a. 그림 라벨(A 왼쪽 준선 위·Q 위쪽) 고정."
    creative: "(1) 타원을 지우고 P 를 포물선 위 임의의 점, 점 B(5,1) 로 바꾸면 BP+PQ 의 최솟값 = B 에서 준선까지의 거리(0129 골조 ★2) (2) 포물선을 x²=4py 로 세워 초점이 타원의 y축 초점과 일치하게(★3) (3) 「PQ−PF'」 처럼 쌍곡선 정의와 섞으면 세 곡선 결합(★4)."
```

```yaml
- id: RPM-GEO-0119
  page: 21
  vendor_label: "유형 UP 19 이차곡선의 정의의 활용"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    두 초점 F(√2,0), F'(−√2,0) 을 공유하는 타원과 쌍곡선이 점 P(√2,1) 에서 만날 때, x좌표가 양수인 쌍곡선·타원의 꼭짓점 A, B 에 대해 삼각형 PAB 의 넓이. 서술형. 그림.
  category: "P 의 x좌표 = c → PF=1, PF'=3 → 타원 2a=4 → B(2,0) · 쌍곡선 2a'=2 → A(1,0) → 넓이 ½·1·1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식을 세워 P 를 대입하는 갈래(사차식 a⁴−5a²+4=0) 대신 초점거리 PF=1·PF'=3 으로 합·차 → 두 꼭짓점을 바로 결정하는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 공유하는 타원·쌍곡선의 정의의 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    PF 가 x축에 수직이라 PF=1, PF'=√(8+1)=3. 타원 a=(1+3)/2=2 → B(2,0), 쌍곡선 a'=(3−1)/2=1 → A(1,0). 밑변 AB=1·높이 1(P 의 y좌표) → 1/2. 방정식 갈래(2/a²+1/(a²−2)=1)와 정의 갈래가 갈리고 정의 갈래가 압도적으로 빠른 SC d1. 상중·서술형 → ★3.
  tier: star_3
  mechanism_primary: "PF=1, PF'=3 → 타원 a=2 → B(2,0) · 쌍곡선 a'=1 → A(1,0) → △PAB = ½·1·1 = 1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0119.png"
  latex: latex-bank/rpm-geo/items/0119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 P 의 y좌표 h (x좌표는 c 로 고정해 PF 가 수직). 제약: PF'=√(4c²+h²) 가 유리수(c=√2·h=1 → 3, c=3/2·h=2 → 5)여야 a·a' 이 깔끔. 답 = ½·(a−a')·h. 그림 라벨(A 안쪽·B 바깥쪽·P 위) 고정."
    creative: "(1) P 의 x좌표를 c 에서 떼면 두 거리 모두 근호·SC 갈래 약화(★3) (2) 「두 곡선의 방정식을 구하시오」로 바꾸면 절차형 ★2 (3) 「점 P 에서 쌍곡선의 점근선까지의 거리」를 추가로 요구(★3~4)."
```

### 유형 UP 20 이차곡선의 실생활에의 활용

```yaml
- id: RPM-GEO-0120
  page: 21
  vendor_label: "유형 UP 20 이차곡선의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    지구를 한 초점으로 하는 타원 궤도에서 지구까지의 최단 거리 1000km, 최장 거리 2000km 일 때 궤도의 단축의 길이. 5지선다.
  category: "a−c=1000, a+c=2000 → a=1500, c=500 → b²=a²−c² → 2b=2000√2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 실생활 활용(궤도 · 최단·최장 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점에서 가장 가까운/먼 점은 장축 꼭짓점이므로 a−c=1000, a+c=2000 → a=1500, c=500. b²=(a−c)(a+c)=2,000,000 → b=1000√2, 단축 2b=2000√2 → ⑤. ① 1000√2 (=b) 가 T-단위 함정. 읽기형·M_total 4·통찰 없음 → 유형 UP 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 유형 UP 구역이나 공식 읽기 절차라 ★2 로 기록(출발점과 1단 차).
  tier: star_2
  mechanism_primary: "최단 a−c=1000 · 최장 a+c=2000 → a=1500, c=500 → b=1000√2 → 단축 2000√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최단·최장 거리. 제약: b²=(최단)×(최장) 이므로 곱이 (정수)²×작은 수 꼴이면 답이 깔끔(1000·2000 → 1000√2, 900·1600 → 1200)."
    creative: "(1) 단축 대신 「타원의 방정식」(지구를 원점이 아닌 초점에 두는 좌표 설정 ★2) (2) 「지구에서 위성까지 거리가 1500km 인 순간 위성이 단축 끝에 있음」처럼 조건을 바꾸면 PF=a 해석(EQV d1 ★3) (3) 지구 반지름을 넣어 「지표면으로부터의 높이」로 주면 T-단위 함정 추가(★2)."
```

```yaml
- id: RPM-GEO-0121
  page: 21
  vendor_label: "유형 UP 20 이차곡선의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    장축 60, 단축 20 인 타원 모양 쇄석기에서 한 초점의 충격파 발생 장치와 다른 초점의 결석 사이의 거리. 그림.
  category: "a=30, b=10 → c²=900−100=800 → 2c=40√2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 실생활 활용(반사 · 두 초점 사이의 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반사 성질(한 초점에서 나간 파가 다른 초점으로 모임)은 문제가 설명하므로 두 초점 사이 거리 2c 만 계산: c=√800=20√2 → 40√2. 장축·단축을 a·b 로 반씩 나누고 답을 2c 로 돌려놓는 것이 유일한 함정(T-단위). 읽기형·통찰 없음 → 유형 UP 「중」 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 유형 UP 「중」이나 2c 계산뿐이라 ★2 로 기록.
  tier: star_2
  mechanism_primary: "2a=60, 2b=20 → c²=a²−b²=800 → 거리 2c=40√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-0121.png"
  latex: latex-bank/rpm-geo/items/0121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "장축·단축 길이. 제약: a²−b² 가 제곱수(또는 근호가 정리되는 수)가 되게. 그림 라벨(발생 장치 왼쪽 초점·결석 오른쪽 초점) 고정."
    creative: "(1) 두 초점 사이 거리와 장축을 주고 단축을 묻기(★2) (2) 「충격파가 장치에서 나가 타원면에 반사되어 결석에 닿기까지 이동 거리」를 물으면 정의로 2a=60 (EQV d1 ★2) (3) 단면을 좌표평면에 두고 「장치 바로 위의 반사점까지의 거리」를 요구하면 초점 통과 현 계산 b²/a (★3)."
```

```yaml
- id: RPM-GEO-0122
  page: 21
  vendor_label: "유형 UP 20 이차곡선의 실생활에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    포물선 모양 강변에서 초점 위치의 마을 P 와 마을 Q 까지의 거리 합이 최소가 되는 강변 지점을 A~E 중에서 고르기. 단서: PA 는 축, PA∥QD. 그림.
  category: "PX = X 에서 준선까지의 거리 → PX+XQ ≥ Q 에서 준선까지의 거리 → 등호는 QX ⊥ 준선 → PA∥QD 인 D"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "초점거리 PX 를 준선까지의 거리로 바꿔 「초점+한 점」 거리 합을 「Q 에서 준선까지의 수직 거리」 최소 문제로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선의 정의를 이용한 거리 합의 최솟값(실생활)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    포물선 정의로 PX = (X 에서 준선까지의 거리) 이므로 PX+XQ 는 Q 에서 준선까지의 수직 거리 이상이고, 등호는 X 가 Q 를 지나 축에 평행한 직선 위에 있을 때. 단서 PA∥QD 가 바로 그 직선이므로 D. 실생활 포장 속에서 정의 전환을 찾는 RT d1, 계산 없음. 상중 → ★3.
  tier: star_3
  mechanism_primary: "PX = d(X, 준선) → PX+XQ ≥ d(Q, 준선) → 등호: X 가 Q 를 지나 축에 평행한 직선 위 → D"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{D}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0122.png"
  latex: latex-bank/rpm-geo/items/0122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음(그림 문항). 지점 라벨 A~E 와 「PA∥QD」 단서를 바꾸면 답 지점이 바뀜 — 단서와 그림의 평행 표시를 함께 고쳐야 함."
    creative: "(1) 좌표를 붙여 y²=4x, Q(5,1) 처럼 주고 최솟값을 묻는 0129 형(★2) (2) Q 를 포물선 안쪽 대신 바깥쪽(준선 쪽)에 두면 최솟값이 PQ 자체(선분 PQ 와 곡선의 교점)로 갈리는 케이스(MI d1 ★3) (3) 「강변 임의의 점에 지을 때 최소 거리 합이 Q 에서 준선까지의 거리임을 설명하시오」 서술(★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0123
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 포물선 x²=4y, y²=−8x 의 초점 F₁, F₂ 사이의 거리. 5지선다.
  category: "x²=4y → F₁(0,1) · y²=−8x → F₂(−2,0) → √(4+1)=√5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점·준선 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=4 → (0,1), 4p=−8 → (−2,0) (부호·축 방향이 T-부호 함정). 거리 √5 → ③. 초점 읽기 두 번·한 줄 계산. 시험에 꼭 나오는 문제 기본값 ★2 에서 읽기형·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²=4y → F₁(0,1) · y²=−8x → F₂(−2,0) → F₁F₂=√5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 값과 축 방향(x²=4py / y²=4px, 부호). 제약: 두 초점이 서로 다른 축 위에 있게 두면 거리에 근호가 남고, 같은 축이면 |p₁−p₂| 로 퇴화."
    creative: "(1) 「두 준선의 교점」이나 「두 준선과 두 초점으로 이루어진 사각형의 넓이」(★2) (2) 평행이동한 포물선 (y−1)²=8(x+2) 로 바꾸면 0124 골조(★2) (3) 「두 포물선의 초점을 지나는 직선의 방정식」(★1)."
```

```yaml
- id: RPM-GEO-0124
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    포물선 8x=y²+4cy 의 초점이 직선 y=x−2 위에 있을 때 양수 c 의 값. 5지선다.
  category: "(y+2c)²=8(x+c²/2) → 꼭짓점 (−c²/2, −2c), p=2 → 초점 (2−c²/2, −2c) → 직선 대입 → c²=4c → c=4"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점(완전제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 에 대해 완전제곱 → (y+2c)²=8x+4c². 4p=8 → p=2 이므로 초점은 꼭짓점 (−c²/2, −2c) 에서 x 방향 +2. 직선 대입: −2c=2−c²/2−2 → c²=4c → c=4 (c>0) → ④. 매개변수 완전제곱과 초점 이동, 이차식 풀이가 절차. 기본 ★2, M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "완전제곱 (y+2c)²=8(x+c²/2) → 초점 (2−c²/2, −2c) → y=x−2 대입 → c²=4c → c=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 8, 4c 와 직선 y=x−2. 제약: 초점 좌표를 직선에 대입해 나오는 c 의 이차식이 양의 근 하나(또는 「양수 c」로 골라낼 수 있게)여야 함."
    creative: "(1) 「준선이 직선 x=k 와 일치」로 바꾸면 준선 x=−c²/2−2 (★2) (2) 「초점이 원 x²+y²=r² 위」로 바꾸면 c 의 사차식 → 치환(★3) (3) 미정계수를 둘(x²+2ax 와 y 의 계수 b)로 늘려 「초점이 원점」 조건으로 연립(★3)."
```

```yaml
- id: RPM-GEO-0125
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 포물선 x²=−6(y+a), x²=20(y−b) 의 준선이 일치할 때 상수 a+b 의 값. 5지선다.
  category: "준선 y=−a+3/2 · y=b−5 → 일치 → a+b=13/2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 준선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 포물선은 4p=−6 → p=−3/2, 꼭짓점 (0,−a) → 준선 y=−a−p=−a+3/2 (아래로 열리므로 준선이 꼭짓점 위 — T-부호). 둘째는 p=5, 꼭짓점 (0,b) → 준선 y=b−5. 등치 → a+b=13/2 → ①. 준선 두 개 읽기·한 줄 등식. 기본 ★2 유지(부호 처리가 있어 읽기형 −1 은 적용 안 함).
  tier: star_2
  mechanism_primary: "x²=−6(y+a): 준선 y=−a+3/2 · x²=20(y−b): 준선 y=b−5 → 등치 → a+b=13/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 값(−6, 20)과 이동량. 제약: 4p 가 4 의 배수가 아니면 분수 준선(전사처럼 13/2 답)이 나오므로 선택지를 분수로 설계."
    creative: "(1) 「초점이 일치」로 바꾸면 −a−3/2 = b+5 (★2) (2) 한 포물선을 y²=4p(x−k) 로 축을 바꾸면 준선이 수직선이라 「두 준선과 축의 교점 사이 거리」(★2) (3) 「두 포물선이 준선을 공유하고 초점 사이 거리가 d」처럼 두 조건 연립(★3)."
```

```yaml
- id: RPM-GEO-0126
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 A(1,3) 과 직선 y=−5 에 이르는 거리가 같은 점 P 의 자취 x²+ay²+bx+cy+d=0 에서 상수 a+b−c−d 의 값. 5지선다.
  category: "(x−1)²+(y−3)²=(y+5)² → x²−2x−16y−15=0 → a=0, b=−2, c=−16, d=−15 → 29"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 정의 — 자취의 방정식(일반형 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의식을 제곱하면 y² 이 소거되어 x²−2x−16y−15=0. 주어진 꼴의 y² 계수 a 는 0 (T-표기 함정). a+b−c−d=0−2+16+15=29 → ④. 포물선 정의 자취 절차 4~5단계, 통찰 없음. 기본 ★2.
  tier: star_2
  mechanism_primary: "PA=d(P, y=−5) → (x−1)²+(y−3)²=(y+5)² → x²−2x−16y−15=0 → a=0 → 29"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 좌표와 준선 y=k. 제약: A 가 준선 위에 있지 않아야 함. 답 = 일반형 계수 조합이라 부호 실수를 유도하려면 c, d 부호를 섞음."
    creative: "(1) 준선을 x=k 로 바꾸면 x² 이 소거되고 y² 이 남음(a=1 · T-표기 뒤집기 ★2) (2) 「이 포물선의 꼭짓점·축」을 추가로 물으면 완전제곱 (x−1)²=16(y+1) 까지(★2) (3) 거리 비를 1:2 로 바꾸면 타원(0147 골조 ★3)."
```

```yaml
- id: RPM-GEO-0127
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    포물선 y²=4px (초점 F) 가 세 직선 x=p, 2p, 3p 와 만나는 제1사분면 점 P₁, P₂, P₃ 에 대해 FP₁+FP₂+FP₃=27 일 때 양수 p 의 값. 5지선다. 평가원 기출.
  category: "FP = x+p → 2p+3p+4p=9p=27 → p=3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 정의 — 초점거리 = 준선까지의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의로 FPᵢ = xᵢ+p 이므로 (p+p)+(2p+p)+(3p+p)=9p=27 → p=3 → ③. y좌표를 구할 필요가 없다는 점이 요지이나 이 단원에서 초점거리 = x+p 는 표준 도구. 기출·M_total 5·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "FPᵢ = xᵢ + p → (p+2p+3p)+3p = 9p = 27 → p=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 x좌표 배수(1,2,3 → 1,3,5)와 합 27. 제약: 합이 (Σkᵢ + n)·p 이므로 답이 정수가 되게."
    creative: "(1) 직선을 x=1, 2, 3 으로 고정하면 6+3p=27 → p=7 (★2 유지) (2) 「FP₁, FP₂, FP₃ 이 등차수열」 같은 수열 조건 결합(XU ★3) (3) 초점을 지나는 직선과의 교점으로 바꿔 1/FA+1/FB=1/p 로 확장(★4)."
```

```yaml
- id: RPM-GEO-0128
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    포물선 y²=4px 의 초점 F 를 지나는 직선이 포물선과 만나는 두 점 A, B 에서 준선에 내린 수선의 발 C, D 에 대해 AC:BD=2:1, 사각형 ACDB 의 넓이 75√2 일 때 선분 AB 의 길이. 중요.
  category: "AC=AF=2t, BD=BF=t → AB=3t → B 에서 AC 에 수선 → CD=√(9t²−t²)=2√2t → 사다리꼴 넓이 (3t/2)(2√2t)=75√2 → t=5 → AB=15"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴의 평행한 두 변을 정의로 초점거리 AF·BF 로 바꾸고, 빗변 AB=AF+BF 와 변 차 AC−BD 로 직각삼각형을 만들어 높이 CD 를 t 로 표현"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "포물선의 정의의 활용 — 초점을 지나는 직선과 사다리꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정의로 AC=AF, BD=BF 이고 AB 가 초점을 지나므로 AB=AF+BF=3t. 사다리꼴 ACDB 의 높이 CD 는 B 에서 AC 에 내린 수선으로 생기는 직각삼각형(빗변 3t, 한 변 2t−t=t)에서 2√2t. 넓이 ½(2t+t)·2√2t=3√2t²=75√2 → t=5 → AB=15. 정의 전환에 보조선 설계까지 겹친 RT d2, p 는 끝까지 안 씀. 「중요」 기본 ★2~3 → ★3.
  tier: star_3
  mechanism_primary: "AC=AF=2t, BD=BF=t → AB=3t → 직각삼각형(3t, t) → CD=2√2t → 넓이 3√2t²=75√2 → t=5 → AB=15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 2:1 과 넓이 75√2. 제약: 비 m:n 이면 빗변 (m+n)t·변 차 (m−n)t → 높이 2t√(mn) 이므로 넓이 = (m+n)√(mn)·t² — mn 이 제곱수가 아니면 √ 가 남음(전사처럼 √2 를 넓이에 남기면 됨). 비 3:1 → 높이 2√3t."
    creative: "(1) AB 대신 p 를 물으면 1/AF+1/BF=1/p 또는 닮음으로 한 단계 더(★4) (2) 넓이 대신 「CD 의 길이」를 주고 AB 를 묻기(★3) (3) 「AC:BD=2:1 일 때 직선 AB 의 기울기」로 바꾸면 각도 계산(★3)."
```

```yaml
- id: RPM-GEO-0129
  page: 22
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    포물선 y²=12x 의 초점 F, 포물선 위의 임의의 점 P, 점 A(5,1) 에 대해 PA+PF 의 최솟값.
  category: "PF = d(P, 준선 x=−3) → PA+PF ≥ d(A, 준선) = 5+3 = 8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PF 를 준선까지의 거리로 바꿔 두 거리 합을 A 에서 준선까지의 수직 거리로 최소화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선의 정의를 이용한 거리 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A(5,1) 은 포물선 안쪽(1²<12·5). PF=(P 에서 x=−3 까지의 거리) 이므로 PA+PF ≥ (A 에서 x=−3 까지) = 8, 등호는 P 가 A 를 지나 축에 평행한 직선 y=1 위(P(1/12, 1))일 때. 정의 전환 RT d1 한 단계·계산 없음. 기본 ★2 유지.
  tier: star_2
  mechanism_primary: "PF = d(P, x=−3) → PA+PF ≥ d(A, x=−3) = 5+3 = 8 (P 가 y=1 위)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 와 A 의 좌표. 제약: A 가 포물선 안쪽(y²<4px)이어야 최솟값이 x_A+p 이고, 바깥이면 PA+PF ≥ AF 로 골조가 바뀜."
    creative: "(1) A 를 바깥에 두면 최솟값 = AF (선분 AF 와 곡선의 교점) — 안·밖 판별을 요구하는 MI d1 ★3 (2) 최솟값을 주고 A 의 x좌표를 묻는 역방향(BW d1 ★3) (3) 「PA+PF 가 최소일 때 P 의 좌표」까지 요구(★2)."
```

```yaml
- id: RPM-GEO-0130
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 초점 (2,0), (−2,0) 인 타원이 점 (2√5,0) 을 지날 때 단축의 길이.
  category: "(2√5,0) 이 장축 꼭짓점 → a=2√5, c=2 → b²=20−4=16 → 2b=8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 초점과 지나는 점으로 축 길이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 x축 위이므로 x축 위의 점 (2√5,0) 은 꼭짓점 → a=2√5, c=2 → b=4 → 단축 8. 읽기형·통찰 없음·M_total 4 → 기본 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x축 위의 점 → a=2√5 · c=2 → b²=16 → 단축 2b=8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 꼭짓점 x좌표. 제약: a²−c² 가 제곱수."
    creative: "(1) 지나는 점을 축 밖의 점 (2,3) 등으로 주면 정의로 PF+PF' 를 계산해 a 를 얻는 한 단계 추가(★2) (2) 초점을 y축 위로 옮겨 장축 방향 판단(T-표기 ★1) (3) 「단축 길이가 8 인 타원이 (2√5,0) 을 지날 때 초점」 역방향(★1)."
```

```yaml
- id: RPM-GEO-0131
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    밑면 반지름 3 인 원기둥을 밑면과 30° 를 이루는 평면으로 자른 단면(타원)의 두 초점 사이의 거리. 그림.
  category: "단축 = 지름 6 → b=3 · 장축 = 6/cos30° = 4√3 → a=2√3 → c²=12−9=3 → 2c=2√3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "입체의 비스듬한 단면을 타원의 축으로 옮김 — 단축은 원기둥 지름 그대로, 장축은 지름을 cos30° 로 나눈 길이"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 실생활 활용(원기둥의 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단면의 폭(축에 수직 방향)은 지름 6 이라 b=3, 기울어진 방향 길이는 6/cos30°=4√3 이라 a=2√3. c²=a²−b²=3 → 2c=2√3. 공간 → 타원 축 전환 RT d1, 계산 두 줄. 기본 ★2.
  tier: star_2
  mechanism_primary: "b=반지름 3 · a=3/cos30°=2√3 → c²=12−9=3 → 2c=2√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0131.png"
  latex: latex-bank/rpm-geo/items/0131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 각 θ(30° → 45°, 60°). 제약: a=r/cosθ 이므로 cosθ 가 특수각 값이어야 하고 c²=r²tan²θ → 2c=2r·tanθ 로 깔끔(30° → 2r/√3, 45° → 2r, 60° → 2√3r). 그림 라벨(각 30°·반지름 3) 고정."
    creative: "(1) 「두 초점 사이 거리 d 가 되게 하는 각 θ」 역방향 (tanθ=d/2r ★2) (2) 원기둥을 원뿔로 바꾸면 단면 타원의 축이 단순 비례가 아니라 원뿔 절단 기하(★4) (3) 「단면 타원 위의 점에서 두 초점까지 거리의 합」(=2a=4√3 ★2)."
```

```yaml
- id: RPM-GEO-0132
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    타원 16x²+7y²−32x+42y=33 에 대한 설명(중심·초점·장축·단축·평행이동) 중 옳은 것. 5지선다(세로). 중요.
  category: "완전제곱 → (x−1)²/7+(y+3)²/16=1 → 중심 (1,−3), c=3, 초점 (1,0),(1,−6), 장축 8, 단축 2√7 → ⑤ 만 참"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 중심·초점·축(참거짓 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16(x−1)²+7(y+3)²=112 → (x−1)²/7+(y+3)²/16=1. 장축이 y 방향(16>7)이라 c²=16−7=9, 초점 (1,−3±3). ① 중심 부호 반대, ② 초점 (1,2)·(1,−4) 아님, ③ 장축 8, ④ 단축 2√7 → ⑤ x²/7+y²/16=1 의 평행이동만 참. 완전제곱·축 방향 판단·보기 다섯 검토의 절차, 함정 둘(중심 부호 T-부호·장축 방향 T-표기). 「중요」 기본 ★2, M_total 7 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → (x−1)²/7+(y+3)²/16=1 → 중심(1,−3)·c=3·초점(1,0),(1,−6)·장축 8·단축 2√7 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 16, 7 과 이동량. 제약: a²−b² 가 제곱수이고 중심이 정수여야 초점이 정수. 오답 보기는 「중심 부호 반대」「c 를 a²+b² 로 계산」「장축을 a 로」 등 표준 오류로 구성."
    creative: "(1) 「옳은 것만 고른 것」 ㄱㄴㄷ 로 바꿔 복수 참(★2) (2) 장축이 x 방향이 되도록 계수를 바꿔 ⑤ 의 평행이동 원본을 오독하게(T-표기 ★2) (3) 「이 타원 위의 점 P 에 대해 PF+PF'」을 보기에 넣어 정의까지 확인(★2)."
```

```yaml
- id: RPM-GEO-0133
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 점 A(−2,2), B(1,0), C(4,2) 를 꼭짓점으로 하는 타원 (x+a)²/b+(y+c)²/d=1 에서 상수 abcd 의 값.
  category: "A·C 가 y=2 위 대칭 → 중심 (1,2), 반축 3 · B 는 중심 아래 2 → 반축 2 → (x−1)²/9+(y−2)²/4=1 → a=−1, b=9, c=−2, d=4 → 72"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 꼭짓점으로 타원의 방정식 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A, C 의 중점 (1,2) 가 중심이고 AC=6 → 장반축 3(x 방향). B(1,0) 은 중심 바로 아래 2 → 단반축 2. 방정식 (x−1)²/9+(y−2)²/4=1 을 주어진 꼴에 맞추면 a=−1, c=−2 (T-부호). abcd=(−1)·9·(−2)·4=72. 세 꼭짓점 배치 읽기·부호 맞추기의 절차. 기본 ★2.
  tier: star_2
  mechanism_primary: "A·C 중점 (1,2)=중심, AC/2=3 · B 까지 2 → (x−1)²/9+(y−2)²/4=1 → a=−1, b=9, c=−2, d=4 → 72"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$72$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점 좌표. 제약: 두 점은 같은 y(또는 x) 위에 대칭, 셋째 점은 그 중점에서 수직 방향 — 그렇지 않으면 세 점이 꼭짓점일 수 없음."
    creative: "(1) 꼭짓점 셋 대신 「두 꼭짓점과 한 초점」을 주면 c 를 거쳐 b 계산(★2) (2) 「네 꼭짓점 중 나머지 하나의 좌표」(★1) (3) 세 점이 꼭짓점이 아니라 「타원 위의 점」이면 미정계수 연립(Mₖ 3 ★3)."
```

```yaml
- id: RPM-GEO-0134
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    타원 x²/100+y²/36=1 (초점 F, F') 과 원 (x+8)²+y²=9 의 교점 P 에 대해 PF×PF' 의 값. 그림.
  category: "c=8 → 원의 중심이 F' → PF'=3 → PF=20−3=17 → 곱 51"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의의 활용 — 초점 중심 원과의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c²=100−36=64 → F'(−8,0) 가 원의 중심이므로 PF'=반지름 3. 정의로 PF=2a−3=17 → 51. 원의 중심 = 초점 읽기 한 단계·정의 한 줄. 기본 ★2 유지(초점 계산과 원 중심 대조가 있어 읽기형 −1 은 적용 안 함).
  tier: star_2
  mechanism_primary: "c=8 = 원 중심 → PF'=3 → PF=2a−PF'=17 → 51"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$51$'
  answer_source: "답지"
  figure: "crop:fig-0134.png"
  latex: latex-bank/rpm-geo/items/0134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², 반지름 r. 제약: c 가 정수(a²−b² 제곱수)·a−c ≤ r ≤ a+c 여야 교점이 존재. 답 r(2a−r). 그림 라벨(원이 F' 을 중심으로 왼쪽) 고정."
    creative: "(1) 원의 중심을 초점이 아닌 점으로 옮기면 정의를 못 쓰고 좌표 계산(★3 · 골조 상실) (2) 「PF−PF'」 또는 「삼각형 PF'F 의 넓이」(코사인법칙 결합 ★3) (3) 「F' 을 중심으로 하는 원이 타원과 접할 때 반지름」→ r=a−c 해석(EQV d1 ★3)."
```

```yaml
- id: RPM-GEO-0135
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    타원 x²/a²+y²/5=1 (초점 F, F') 에서 F 를 지나고 x축에 수직인 직선 위의 점 A 가 AF'=5, AF=3 을 만족할 때, 선분 AF' 과 타원의 교점 P 에 대해 삼각형 PF'F 의 둘레. 5지선다. 평가원 기출. 그림.
  category: "AF ⊥ x축 → FF'²=25−9=16 → c=2 → a²=c²+5=9 → 둘레 = 2a+2c = 6+4 = 10"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AF 가 x축에 수직이라는 조건을 직각삼각형 AFF' 로 읽어 FF'=4 → c 를 결정하고, P 의 위치와 무관하게 둘레 = 2a+2c 임을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 정의의 활용 — 초점 삼각형의 둘레(직각 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직각삼각형 AF'F 에서 FF'=√(25−9)=4 → c=2, b²=5 → a²=9. P 가 타원 위이므로 PF+PF'=2a=6, 둘레 6+FF'=10 → ⑤. 수직 조건 → c 결정이 EQV d1 이고 A 의 위치는 c 를 주기 위한 장치임을 읽어야 함. 기출·통찰 1 → 기본 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "AF ⊥ x축, AF'=5, AF=3 → FF'=4 → c=2 → a²=9 → 둘레 = 2a+2c = 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0135.png"
  latex: latex-bank/rpm-geo/items/0135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AF', AF (5,3 → 13,5 / 10,6) 와 b². 제약: AF'²−AF² 이 제곱수(=4c²)이고 a²=c²+b² 가 깔끔. 답 2a+2c. 그림 라벨(A 가 F 위쪽·P 가 AF' 위) 고정."
    creative: "(1) 둘레 대신 「PF 의 길이」를 물으면 P 가 AF' 위에 있음을 써서 좌표 계산(★4) (2) 둘레를 주고 「AF 의 길이」를 답으로 하는 역방향(★3) (3) 타원을 쌍곡선으로 바꾸면 PF'−PF=2a 로 둘레가 P 에 따라 변함 → 「P 가 꼭짓점일 때」 등 조건 필요(★3)."
```

```yaml
- id: RPM-GEO-0136
  page: 23
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    타원 x²/36+y²/9=1 과 두 초점을 공유하고 주축 6 인 쌍곡선 x²/a²−y²/b²=1 에서 상수 a²−b² 의 값. 5지선다.
  category: "c²=36−9=27 → 쌍곡선 a=3, b²=27−9=18 → a²−b²=−9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점을 공유하는 타원·쌍곡선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    타원 c²=27. 주축 6 → a=3 → b²=c²−a²=18 → 9−18=−9 → ①. 두 곡선에서 c² 공식의 부호가 다른 점(타원 a²−b², 쌍곡선 a²+b²)이 함정. 기본 ★2 유지(두 곡선 결합·부호 대비).
  tier: star_2
  mechanism_primary: "타원 c²=27 → 쌍곡선 a=3 (주축 6) → b²=27−9=18 → a²−b²=−9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 a², b² 와 주축 길이. 제약: c² > (주축/2)² 이어야 b²>0."
    creative: "(1) 반대로 쌍곡선을 주고 타원의 단축(★2) (2) 「점근선의 기울기」를 답으로 → b/a=√2 (★2) (3) 「두 곡선의 교점 P 에서 PF·PF'」 (0117 골조 CON d1 ★3)."
```

```yaml
- id: RPM-GEO-0137
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    쌍곡선 x²−y²=1/2 위의 점 P 에서 두 점근선에 내린 수선의 발 Q, R 에 대해 사각형 PQOR 의 넓이 (O 는 원점). 그림.
  category: "점근선 y=±x 수직 → 직사각형 → PQ=|x₀−y₀|/√2, PR=|x₀+y₀|/√2 → 곱 = |x₀²−y₀²|/2 = 1/4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(x₀,y₀) 를 두 점근선까지의 거리로 옮기고 그 곱을 쌍곡선 방정식의 값 x₀²−y₀² 으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 점근선까지의 거리의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선 y=x, y=−x 가 수직이라 PQOR 는 직사각형. 점-직선 거리로 PQ·PR = |x₀−y₀||x₀+y₀|/2 = |x₀²−y₀²|/2 = (1/2)/2 = 1/4. P 를 일반점으로 두고 곱을 방정식 값으로 접는 RT d1, 계산 한 줄. 기본 ★2.
  tier: star_2
  mechanism_primary: "점근선 y=±x ⊥ → 직사각형 → PQ·PR = |x₀−y₀||x₀+y₀|/2 = (x₀²−y₀²)/2 = 1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0137.png"
  latex: latex-bank/rpm-geo/items/0137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수 k (x²−y²=k → 넓이 |k|/2). 제약: 직각쌍곡선(a=b)이어야 직사각형 — a≠b 면 평행사변형이라 넓이에 sin(점근선 사이 각)이 곱해짐. 그림 라벨(Q 위 점근선·R 아래 점근선) 고정."
    creative: "(1) x²/a²−y²/b²=1 로 일반화하면 거리 곱 = a²b²/(a²+b²) 상수 증명(Mₐ 3 ★3) (2) 넓이 대신 「PQ+PR 의 최솟값」 → 곱 일정·산술기하(XU ★4) (3) 「PQ=2PR 일 때 P 의 좌표」 — 거리 비 → 일차식 → 곡선과 연립(★3)."
```

```yaml
- id: RPM-GEO-0138
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    쌍곡선 x²/9−y²/9=1 위의 점 P 에 대해 OP=7 일 때, 두 초점 F, F' 에 대한 PF×PF' 의 값 (O 는 원점). 5지선다.
  category: "중선정리 PF²+PF'²=2(OP²+OF²)=2(49+18)=134 · 정의 (PF−PF')²=36 → 2PF·PF'=98 → 49"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P 의 좌표를 구해 거리 공식으로 가는 갈래(x₀²=29·근호 계산) 대신 O 가 FF' 의 중점임을 써 중선정리 + 정의 두 식으로 곱을 바로 얻는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 초점거리의 곱(중선정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    c²=18. 삼각형 PF'F 에서 OP 가 중선이므로 PF²+PF'²=2(OP²+OF²)=2(49+18)=134. 정의로 |PF−PF'|=6 → 제곱 36. 두 식 차 → 2PF·PF'=98 → 49 → ③. 좌표 갈래도 가능하지만(x₀²=29, PF·PF'=√(67²−4·18·29)) 중선정리 갈래가 압도적 — SC d1, 중학 도형 정리 회상 포함. 기본 ★2~3 → ★3.
  tier: star_3
  mechanism_primary: "중선정리 PF²+PF'²=2(7²+c²)=134 · (PF−PF')²=(2a)²=36 → PF·PF'=(134−36)/2=49"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², OP. 제약: OP ≥ a(꼭짓점 거리)여야 P 존재, 답 = OP²+c²−2a² = OP²+b²−a² 가 정수."
    creative: "(1) 타원에 같은 조건 → 2PF·PF' = 4a²−2(OP²+c²) 로 부호만 바뀜(합 정의 ★3) (2) 「PF·PF' 의 최솟값」 → PF·PF'=OP²+b²−a² 이므로 OP 최소 = a 일 때 b² (★3) (3) OP 대신 「∠F'PF=90°」 로 바꾸면 0109 골조(RT d1 ★2)."
```

```yaml
- id: RPM-GEO-0139
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    쌍곡선 x²/4−y²/5=1 위의 점 P 와 두 초점 F, F' 에 대해 ∠F'PF 의 이등분선이 x축과 A(1,0) 에서 만날 때 삼각형 PF'F 의 둘레. 5지선다. 중요. 그림.
  category: "각의 이등분선 정리 PF':PF = F'A:AF = 4:2 → PF'=2PF · 정의 PF'−PF=4 → PF=4, PF'=8 → 둘레 4+8+6=18"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠P 의 이등분선이 대변 F'F 를 PF':PF 로 내분한다는 중학 도형 정리를 끌어와 초점거리 비 2:1 을 얻고 쌍곡선 정의와 연립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 각의 이등분선과 삼각형의 둘레"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    c=3 → F'A=4, AF=2 → 이등분선 정리로 PF':PF=2:1. 정의 PF'−PF=2a=4 → PF=4, PF'=8. 둘레 4+8+6=18 → ⑤. 각의 이등분선 정리 없이는 풀이가 끊기는 단원 밖 도구 결합 XU d1. 「중요」 → ★3.
    [분류 이슈] 각의 이등분선 정리를 XU 로 인정 — 카탈로그에서 「단원 밖 도형 정리」를 XU 로 볼지 절차로 볼지 결정 필요.
  tier: star_3
  mechanism_primary: "이등분선 정리 → PF':PF=F'A:AF=2:1 → PF'−PF=4 → PF=4, PF'=8 → 둘레 18"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0139.png"
  latex: latex-bank/rpm-geo/items/0139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b² 와 A 의 x좌표. 제약: A 가 F'F 안(|x_A|<c)·비 (c+x_A):(c−x_A) 가 간단하고, 비의 차로 나눈 2a 가 정수. 답 = 2a·(m+n)/(m−n) + 2c. 그림 라벨(A 가 O 와 F 사이·P 제1사분면) 고정."
    creative: "(1) 타원에서 같은 조건 → 비 + 합(★3) (2) PF, PF' 을 주고 「이등분선과 x축의 교점 A 의 좌표」 역방향(★3) (3) 이등분선 대신 「P 에서의 접선」(2단원 결합 · 접선이 ∠F'PF 를 이등분함 XU ★4)."
```

```yaml
- id: RPM-GEO-0140
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 초점 F(4√3,0), F'(−4√3,0) 인 쌍곡선 위의 제1사분면 점 P 에 대해 선분 PF' 이 y축과 만나는 점을 Q 라 할 때 삼각형 PQF 가 정삼각형이면 주축의 길이.
  category: "Q 가 y축 위 → QF=QF' → 정삼각형 한 변 s: PF=PQ=QF'=s → PF'=2s · △F'QF (QF'=QF=s, ∠120°) → F'F=√3s=8√3 → s=8 → 2a=PF'−PF=8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q 가 y축(FF' 의 수직이등분선) 위 → QF=QF' 대칭으로 PF'=2s 를 얻고, 정삼각형의 외각 120° 이등변삼각형에서 FF'=√3s 로 s 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 정삼각형 조건과 주축"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y축이 FF' 의 수직이등분선이므로 QF'=QF=s. 정삼각형이라 PQ=s → PF'=PQ+QF'=2s, PF=s. ∠F'QF=180°−60°=120° 인 이등변삼각형에서 F'F=√3·s=8√3 → s=8. 정의 2a=PF'−PF=2s−s=8. 대칭 활용 SYM d1 + 각 추적. 기본 ★2~3 → ★3.
  tier: star_3
  mechanism_primary: "QF=QF'=s (y축 대칭) → PF'=2s, PF=s → △F'QF 120° → √3s=2c=8√3 → s=8 → 2a=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c (4√3 → 2√3, 6√3). 제약: 2c=√3s 이므로 c 에 √3 이 들어가야 s 가 정수; 답 2a=s=2c/√3."
    creative: "(1) 정삼각형 대신 「PQ=QF, ∠PQF=90°」 직각이등변(★3) (2) 타원에서 같은 배치 → 2a=PF+PF'=3s (★3) (3) 「점 P 의 좌표」까지 요구(★3~4)."
```

```yaml
- id: RPM-GEO-0141
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    방정식 x²−y²+k(2x²−y²)+2x−y+2=0 이 나타내는 도형이 축이 y축과 평행한 포물선일 때 상수 k 의 값.
  category: "(1+2k)x²−(1+k)y²+2x−y+2=0 → 축 ∥ y축 ⇔ y² 항 없음 → 1+k=0 → k=−1 (x² 계수 −1≠0 확인)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식이 나타내는 이차곡선의 판별(포물선의 축 방향)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 로 정리 후 축이 y축에 평행한 포물선은 y=(x 의 이차식) 꼴 → y² 계수 0, x² 계수 ≠0, y 일차항 존재. 1+k=0 → k=−1 이면 −x²+2x−y+2=0 ✓. 「축 방향 ↔ 남는 제곱항」 대응(T-표기)이 유일한 관문. 기본 ★2.
  tier: star_2
  mechanism_primary: "k 정리 → (1+2k)x²−(1+k)y²+2x−y+2=0 → y² 계수 0 → k=−1 → x² 계수 −1≠0 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식 계수와 일차항. 제약: y² 계수 0 인 k 에서 x² 계수와 y 일차항 계수가 0 이 아니어야 함(둘 중 하나가 0 이면 퇴화 → 기각 케이스 VF)."
    creative: "(1) 「축이 x축과 평행」으로 바꾸면 x² 계수 0 → k=−1/2 (★2) (2) 「포물선이 되는 모든 k 의 합」으로 축 조건을 빼면 0112 골조(★2) (3) 「이 포물선의 꼭짓점·초점」까지 요구 → 완전제곱 y=−(x−1)²+3 → 초점 (1, 11/4) (★2~3)."
```

```yaml
- id: RPM-GEO-0142
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    포물선 x²=24y 위를 움직이는 점 P 와 초점 F 를 잇는 선분 FP 의 중점 Q 가 나타내는 도형의 초점의 좌표.
  category: "F(0,6), P(p, p²/24) → Q=(p/2, 3+p²/48) → p=2x → y=3+x²/12 → x²=12(y−3) → 초점 (0, 3+3)=(0,6)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자취의 방정식 — 중점(포물선의 초점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4p=24 → F(0,6). 중점 역변환 p=2x, 대입하면 x²=12(y−3): 꼭짓점 (0,3)·4p'=12 → 초점 (0,6) — 원래 초점 F 와 같다(F 중심 닮음 비 1/2). 자취 절차 + 포물선 초점 읽기. 기본 ★2.
  tier: star_2
  mechanism_primary: "F(0,6) · P(p,p²/24) → 중점 Q → p=2x → x²=12(y−3) → 초점 (0,6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p (24 → 8, 16). 제약: 답이 항상 원래 초점 (0,p) 임 — 중점 자취는 F 를 중심으로 1/2 축소한 포물선이라 초점이 F 로 고정."
    creative: "(1) 「자취의 준선」을 물으면 y=3−3=0 → x축(★2) (2) F 대신 꼭짓점 O 와의 중점이면 초점이 (0,3) 으로 이동해 「왜 초점이 F 인가」 대비(★2) (3) 1:2 내분점으로 바꿔도 초점이 F 로 고정되는 이유(F 중심 닮음)를 묻는 서술(★3)."
```

```yaml
- id: RPM-GEO-0143
  page: 24
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    태양을 초점으로 하는 포물선 궤도의 혜성이, 태양–혜성 직선이 축과 60° 를 이룰 때 태양과의 거리가 4×10¹⁰ km 이면 태양에 가장 가까울 때의 거리. 그림.
  category: "y²=4px, F(p,0) → 혜성 x = p + d·cos60° → 정의 d = x + p = 2p + d/2 → p = d/4 = 10¹⁰"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "궤도를 y²=4px 로 두고 각·거리 조건을 초점거리 = 준선까지의 거리(x+p) 로 옮겨 p 결정 — 최근접 거리 = 꼭짓점–초점 = p"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선의 실생활 활용(궤도 · 초점거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    축을 x축, 초점 F(p,0) 로 잡으면 혜성의 x좌표는 p+d·cos60° = p+d/2 (그림의 각은 열린 쪽 기준). 정의로 d = x+p = 2p+d/2 → p = d/4 = 10¹⁰ km. 최근접 거리는 꼭짓점까지 p. 좌표 설정·각 → 좌표·정의 전환의 RT d1, 계산 한 줄. 기본 ★2~3 → ★3.
  tier: star_3
  mechanism_primary: "y²=4px · 혜성 x=p+d cos60° → d=x+p → d=2p+d/2 → p=d/4=10¹⁰ km"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10^{10}\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-0143.png"
  latex: latex-bank/rpm-geo/items/0143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 θ 와 거리 d. 제약: p = d(1−cosθ)/2 이므로 θ=60° → d/4, θ=90° → d/2, θ=120° → 3d/4 — 특수각으로. 그림의 각 표시(열린 쪽 기준 60°)를 바꾸면 cos 부호가 뒤집혀 답이 3d/4 로 변함."
    creative: "(1) θ=90° 로 두면 「축에 수직」 → 통경 절반 = 2p 읽기(★2) (2) 최근접 거리를 주고 「거리가 최근접의 4배가 될 때의 각」 역방향(BW d1 ★3) (3) 궤도를 타원으로 바꾸고 「최근·최원 거리」로 주면 0120 골조(★2)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0144
  page: 25
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    포물선 y²=16x 의 초점을 한 초점으로 하는 타원 x²/25+y²/a²=1 의 단축의 길이. 서술형.
  category: "포물선 초점 (4,0) → c=4 → a²=25−16=9 → 2a=6"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점을 초점으로 하는 타원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4p=16 → 초점 (4,0) 이 x축 위이므로 타원의 장축은 x 방향, c=4 → a²=25−16=9 → 단축 6. 두 곡선의 초점 읽기·공식 한 줄, 통찰 없음 → 서술형 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 체감 ★1~2 경계 — ★1 로 보면 서술형 출발점과 2단 차. 라벨은 ★2.
  tier: star_2
  mechanism_primary: "y²=16x → F(4,0) → 타원 c=4 → a²=25−c²=9 → 단축 2a=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 와 타원 장반축². 제약: 25−p² > 0 이고 제곱수."
    creative: "(1) 포물선 x²=4py 로 축을 바꾸면 초점 (0,p) → 장축 방향 재판단(T-표기 ★2) (2) 「타원의 초점을 초점으로 하는 포물선의 준선」 역방향(★2) (3) 「타원 위의 점 P 에 대해 PF 가 포물선의 준선까지의 거리와 같을 때」처럼 두 정의 결합(EQV d1 ★3)."
```

```yaml
- id: RPM-GEO-0145
  page: 25
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    장축 40, 36 인 두 타원이 점 F 를 한 초점으로 공유하고 두 점 P, Q 에서 만날 때, 다른 초점 F₁, F₂ 에 대해 |PF₁−PF₂|+|QF₁−QF₂| 의 값. 서술형.
  category: "PF+PF₁=40, PF+PF₂=36 → 빼면 PF₁−PF₂=4 · Q 도 같음 → 8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 타원의 정의식을 빼서 공통 초점거리 PF 를 소거 → PF₁−PF₂ 가 장축 차 4 로 고정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 공유하는 두 타원의 정의의 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 P 는 두 타원 모두 위에 있으므로 PF+PF₁=40, PF+PF₂=36 → PF₁−PF₂=4, Q 에서도 4 → 합 8. 그림·좌표 없이 두 정의를 결합해 공통항을 지우는 CON d1 한 단계, 계산 없음. 서술형 출발 ★3, 통찰 1 → 유지.
    [분류 이슈] 0117 과 같은 CON d1 골조. 결합을 절차로 보면 ★2 — 체감 ★2/★3 경계.
  tier: star_3
  mechanism_primary: "PF+PF₁=2·20 · PF+PF₂=2·18 → 차 PF₁−PF₂=4 → P, Q 합 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 장축 길이. 제약: 두 타원이 실제로 두 점에서 만나야 하나 장축 차만 답에 들어가므로 (장축₁−장축₂)×2 가 답 — 차를 정수로."
    creative: "(1) 한 타원을 쌍곡선으로 바꾸면 PF 소거 후 PF₁+PF₂ 상수(★3) (2) 장축 대신 「두 타원의 x축 위 꼭짓점 좌표」로 주고 장축 길이를 먼저 읽게 하면 한 단계 추가(★3) (3) 두 타원의 방정식을 구체로 주고 「교점 좌표」 → 연립(★3)."
```

```yaml
- id: RPM-GEO-0146
  page: 25
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    쌍곡선 4x²−4y²=1 의 두 점근선과 쌍곡선 4(x−3)²−4(y−1)²=1 의 두 점근선으로 둘러싸인 도형의 넓이. 서술형.
  category: "점근선 y=±x · y−1=±(x−3) → 네 직선이 이루는 직사각형 → 평행선 간 거리 2/√2, 4/√2 → 넓이 √2·2√2=4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 점근선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 쌍곡선 점근선 y=x, y=−x. 둘째는 중심 (3,1) 로 평행이동한 것이라 y=x−2, y=−x+4. 기울기 ±1 이라 네 직선은 직사각형을 이루고 변 길이는 평행한 두 직선 사이 거리 |0−(−2)|/√2=√2, |0−4|/√2=2√2 → 4. (꼭짓점 (0,0),(2,2),(3,1),(1,−1) 을 구해도 됨.) 평행이동 점근선·평행선 거리의 절차 5단계, 통찰 없음. 서술형 출발 ★3, M_total 5 이나 읽기형이 아니라 유지.
  tier: star_3
  mechanism_primary: "점근선 y=±x, y−1=±(x−3) → 직사각형 → 변 = 2/√2, 4/√2 → 넓이 4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘째 쌍곡선의 중심 (h,k). 제약: 넓이 = |h−k|/√2 · |h+k|/√2 = |h²−k²|/2 → h²≠k² 이어야 도형이 생김."
    creative: "(1) 점근선 기울기가 ±1 이 아닌 x²/4−y²=1 로 바꾸면 평행사변형 → 넓이에 사인 또는 좌표 계산(★3) (2) 「둘러싸인 도형이 정사각형이 되도록 하는 중심 (h,k)」 역방향(|h−k|=|h+k| → hk=0 ★3) (3) 한 쌍곡선의 점근선과 다른 쌍곡선 자체의 교점 개수(★3)."
```

```yaml
- id: RPM-GEO-0147
  page: 25
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    점 F(3,0) 과 직선 x=4/3 에 이르는 거리의 비가 3:2 인 점 P 가 나타내는 도형(쌍곡선)의 주축의 길이. 서술형.
  category: "2·PF = 3·|x−4/3| → 4[(x−3)²+y²]=(3x−4)² → 5x²−4y²=20 → x²/4−y²/5=1 → 주축 4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자취의 방정식 — 점과 직선까지의 거리의 비(쌍곡선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    거리 조건을 2√((x−3)²+y²)=3|x−4/3| 로 세우고 제곱: 4x²−24x+36+4y²=9x²−24x+16 → 5x²−4y²=20 → x²/4−y²/5=1 → a=2, 주축 4. (F(3,0) 이 초점, x=4/3=a²/c 가 준선인 쌍곡선.) 분수 정리가 있는 자취 절차, 통찰 없음. 서술형 ★3, M_total 6 → 유지.
    [분류 이슈] 거리 비 정의(이심률)는 교과 밖 — type_hint 를 자취(유형 18)로 둠. 카탈로그에서 「이차곡선의 통일 정의」 유형을 세울지 결정.
  tier: star_3
  mechanism_primary: "PF : d(P, x=4/3) = 3:2 → 4·PF² = 9(x−4/3)² → 5x²−4y²=20 → x²/4−y²/5=1 → 2a=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "F(c,0), 직선 x=a²/c, 비 c:a. 제약: 비 > 1 이면 쌍곡선, < 1 이면 타원, = 1 이면 포물선 — (c,a) 를 정수·직선 x=a²/c 를 유리수로(예: F(5,0), x=9/5, 비 5:3 → x²/9−y²/16=1)."
    creative: "(1) 비를 2:3 (역수) 으로 바꾸면 타원 → 「장축」(★3) (2) 비 1:1 → 포물선 정의 그대로(★2) (3) 「자취의 초점이 F 임을 확인하시오」 서술로 이심률 구조 암시(★3)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0148
  page: 25
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    두 포물선 y²=8x, y²=−16x 가 직선 y=a (a>0) 와 만나는 점 P, Q 와 두 포물선의 초점 F₁, F₂ 로 이루어진 사각형 PQF₂F₁ 의 둘레가 66 일 때 그 넓이. 실력 Up.
  category: "P(a²/8, a), Q(−a²/16, a) · F₁(2,0), F₂(−4,0) → PF₁=a²/8+2, QF₂=a²/16+4 (정의) → 둘레 3a²/8+12=66 → a=12 → 사다리꼴 넓이 ½(27+6)·12=198"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 빗변 PF₁, QF₂ 를 거리 공식 대신 포물선 정의로 준선까지의 거리 x+p 로 바꿔 둘레를 a² 의 일차식으로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선의 정의의 활용 — 두 포물선과 사각형의 둘레·넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    PQ=a²/8+a²/16=3a²/16, F₂F₁=6, PF₁=a²/8+2, QF₂=a²/16+4 → 둘레 6a²/16+12=66 → a²=144 → a=12. PQ ∥ x축이라 사다리꼴, 높이 a → ½(27+6)·12=198. 정의 전환 RT d1 뒤에는 분수 대수(Mₖ 2). 실력 Up 출발 ★4 이나 통찰 1·d1·절차 위주 → 체감 ★3 으로 기록.
    [분류 이슈] 실력 Up 출발 ★4 와 1단 차. 통찰 하나뿐이라 ★3.
  tier: star_3
  mechanism_primary: "P(a²/8,a), Q(−a²/16,a) → PF₁=a²/8+2, QF₂=a²/16+4 → 둘레 3a²/8+12=66 → a=12 → ½(PQ+F₂F₁)·a=198"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$198$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p₁, 4p₂ 와 둘레. 제약: 둘레 = a²(1/(2p₁)+1/(2p₂)) + 2(p₁+p₂) 꼴이므로 a² 가 제곱수가 되게 둘레를 설계(p₁=2, p₂=4 → 3a²/8+12)."
    creative: "(1) 둘레 대신 「PQ=F₁F₂」(등변 조건) 로 a 결정(★3) (2) 직선 y=a 를 초점을 지나는 직선으로 바꾸면 0128 골조 결합(★4) (3) 「사각형이 등변사다리꼴이 되는 a」 → PF₁=QF₂ → a²/8+2=a²/16+4 → a²=32 (★3)."
```

```yaml
- id: RPM-GEO-0149
  page: 25
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    두 초점 F(c,0), F'(−c,0) 을 공유하는 타원과 꼭짓점 A(a,0) 인 쌍곡선의 제1사분면 교점 P 에 대해 PA=PF, FF'=PF', AF=1 일 때 타원의 장축의 길이. 실력 Up. 그림.
  category: "두 이등변삼각형(PA=PF, F'F=F'P) 밑각 공유 → △PAF ∼ △F'PF → PF²=AF·F'F → t²=2c · 쌍곡선 2c−t=2a, c−a=1 → t=2, c=2 → 장축 PF+PF'=t+2c=6"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "길이 조건 PA=PF, F'F=F'P 를 두 이등변삼각형의 밑각 θ 로 옮기고 각이 같음을 이용해 △PAF ∼ △F'PF → PF² = AF·FF' 비례식 확보"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "쌍곡선 정의 PF'−PF=2a 와 AF=c−a=1 을 결합해 2c−t=2(c−1) → t=2 로 미지수 소거"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "초점을 공유하는 타원·쌍곡선의 정의의 활용(닮음)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    PF=PA=t, PF'=FF'=2c 로 두면 △PAF (밑각 ∠A=∠F=θ) 와 △F'PF (밑각 ∠P=∠F=θ) 가 닮음 → 1/t = t/(2c) → t²=2c. 쌍곡선 정의 2c−t=2a 와 c−a=1 → 2c−t=2c−2 → t=2 → c=2, a=1. 타원 장축 = PF+PF' = 2+4 = 6. 닮음 설계 RT d2 + 정의·조건 결합 CON d1 두 통찰, M_total 8. 실력 Up 출발 ★4, 통찰 2 로 +1 후보이나 ★5 조건(통찰 3·SC/VF/SYM/XU) 미충족 → ★4.
  tier: star_4
  mechanism_primary: "PA=PF=t, PF'=FF'=2c → 닮음 △PAF∼△F'PF → t²=2c · 2c−t=2a, c−a=1 → t=2, c=2 → 장축 t+2c=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-0149.png"
  latex: latex-bank/rpm-geo/items/0149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AF=1 (→ k). 제약: t²=2c, 2c−t=2(c−k) → t=2k, c=2k² → 장축 = 2k+4k² — k 정수면 모두 정수(k=1 → 6, k=2 → 20). 그림 라벨(A 가 O 와 F 사이·P 제1사분면)은 c>a 로 자동 유지."
    creative: "(1) 「쌍곡선의 주축」(=2a=4k²−2k → k=1 이면 2)을 묻기(★4 유지) (2) PA=PF 대신 ∠PAF=∠PF'F 같은 각 조건으로 주면 닮음이 직접 보여 RT 깊이 1 (★3) (3) 「삼각형 PF'F 의 넓이」까지 요구하면 cosθ=1/(2t)=1/4 → sinθ → ½·PF'·PF·sinθ=√15 추가 계산(★4~5)."
```

```yaml
- id: RPM-GEO-0150
  page: 25
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    직사각형 ABCD 의 네 변의 중점 P, Q, R, S 를 꼭짓점으로 하는 타원의 두 초점 F, F' 에 대해, F 를 초점·직선 AB 를 준선으로 하는 포물선이 F', Q, S 를 지난다. 직사각형의 넓이가 32√2 일 때 선분 FF' 의 길이. 5지선다. 평가원 기출. 실력 Up. 그림.
  category: "중심 O·반축 a(가로), b(세로) 좌표 설정 → 준선 x=−a, 초점 F(c,0) → F'(−c,0) 통과: F'F = d(F', 준선) → 2c=a−c → a=3c · S(0,b) 통과: SF=a (타원 관계와 동일) → b²=8c² → 넓이 4ab=24√2c²=32√2 → c²=4/3 → 2c=(4/3)√3"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형·중점·타원·포물선을 한 좌표계로 옮김 — 변의 중점이 타원 꼭짓점이므로 반축 = 직사각형 반변, 준선 AB 는 x=−a"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「포물선이 F' 을 지난다」를 정의로 F'F = (F' 에서 준선까지의 거리) 즉 2c=a−c 로 동치 변환 (S 통과 조건은 SF=a 로 타원 관계 c²=a²−b² 와 동치임을 확인)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "타원·포물선의 정의의 결합(직사각형 좌표 설정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌표를 두면 S(0,b), F(c,0), 준선 x=−a. F' 통과 → 2c=a−c → a=3c. S 통과 → √(c²+b²)=a 는 타원 관계라 새 정보 없음 → b²=a²−c²=8c². 넓이 2a·2b=4·3c·2√2c=24√2c²=32√2 → c²=4/3 → FF'=2c=4/√3=(4/3)√3 → ②. 도형 조건의 좌표화 RT d2 + 정의 동치 변환 EQV d1, 근호 정리 Mₖ 2. 실력 Up·기출 출발 ★4, 통찰 2 → +1 후보이나 ★5 조건 미충족 → ★4.
  tier: star_4
  mechanism_primary: "좌표화(반축 a,b · 준선 x=−a · F(c,0)) → F' 통과: 2c=a−c → a=3c → b²=8c² → 4ab=32√2 → c²=4/3 → 2c=(4/3)√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0150.png"
  latex: latex-bank/rpm-geo/items/0150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 32√2. 제약: a=3c, b=2√2c 로 넓이 = 24√2c² 이므로 넓이를 24√2·(유리수)² 꼴로 주면 c 가 유리수 — 전사의 c²=4/3 은 답에 √3 을 남기는 설계이고, 넓이 24√2 면 c=1·FF'=2 로 깔끔. 그림 라벨(AB 왼쪽 변·F' 이 F 왼쪽) 고정."
    creative: "(1) 넓이 대신 「타원의 단축 길이」를 주고 FF' 를 묻기(같은 골조 ★4) (2) 포물선의 초점을 F' 로, 준선을 CD 로 바꾸면 대칭이라 같은 답 — 「대칭으로 답이 같음」을 묻는 ㄱㄴㄷ(★3) (3) 「S 통과 조건이 새 정보를 주지 않는 이유」를 묻는 서술로 SF=a 와 c²=a²−b² 의 동치 확인(★3~4)."
```

## 표본 판정 요약 (45문)

- ★ 분포: ★1 4 · ★2 25 · ★3 14 · ★4 2 · ★5 0
- 통찰형 19 · 절차형 26 · premium 0
- 통찰 유형(21건): I-RT 10 · I-CON 4 · I-EQV 3 · I-SC 2 · I-XU 1 · I-SYM 1 (통찰 2개 문항: 0149 · 0150)
- type_hint 상위: 「방정식이 나타내는 이차곡선의 판별」 5(0110~0113·0141) · 「쌍곡선의 정의의 활용」 계열 7(0106~0109·0138~0140) · 「포물선의 정의의 활용(초점거리 = 준선 거리)」 계열 6(0122·0127·0128·0129·0143·0148) · 「자취의 방정식」 5(0114~0116·0142·0147) · 「초점을 공유하는 타원·쌍곡선」 4(0117·0119·0136·0149) · 「실생활 활용」 5(0120·0121·0122·0131·0143)
- 구역별: 유형 16 4문(★1 1 · ★2 3) · 유형 17 4문(★1 1 · ★2 3) · 유형 18 3문(★2 3) · 유형 UP 19 3문(★3 3) · 유형 UP 20 3문(★2 2 · ★3 1) · 시험에 꼭 나오는 문제 21문(★1 2 · ★2 13 · ★3 6) · 서술형 주관식 4문(★2 1 · ★3 3) · 실력 Up 3문(★3 1 · ★4 2)
- target_cohort: 하위권 4 · 중하위권 20 · 중위권 15 · 중상위권 6 · 상위권 0
- M_total 분포: 4 → 16문 · 5 → 19문 · 6 → 5문 · 7 → 3문 · 8 → 2문
- 그림: 16문(`crop:fig-0106` · 0109 · 0114 · 0117 · 0118 · 0119 · 0121 · 0122 · 0131 · 0134 · 0135 · 0137 · 0139 · 0143 · 0149 · 0150)
- 전사 답 확인 필요: 없음(45문 모두 재계산 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 벤더 출발점과 2단 이상 어긋난 문항은 없고(0144 를 ★1 로 보면 2단), 아래는 경계 판정과 카탈로그 설계 때 결정이 필요한 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0117 | 유형 UP 대표문제 ★3 이나 두 정의 결합(CON d1)을 절차로 보면 M_total 4·통찰 0 → ★2. 결합을 통찰로 인정해 ★3 유지 | ★3 / ★2 |
| RPM-GEO-0145 | 0117 과 같은 CON d1 골조·서술형 출발 ★3 유지, 체감 ★2 경계 | ★3 / ★2 |
| RPM-GEO-0120 | 유형 UP 구역이나 a±c 공식 읽기·M_total 4 → ★2 로 기록(출발점과 1단 차) | ★2 |
| RPM-GEO-0121 | 유형 UP 「중」이나 2c 계산뿐 → ★2 | ★2 |
| RPM-GEO-0144 | 서술형 출발 ★3 이나 공식 두 줄 → ★2. 체감 ★1 로 보면 출발점과 2단 차 | ★2 / ★1 |
| RPM-GEO-0148 | 실력 Up 출발 ★4 이나 통찰 RT d1 하나·분수 대수 위주 → ★3 | ★3 / ★4 |
| RPM-GEO-0109 | 「중」 ★2 유지했으나 원→직각·정의·곱 정리 세 도구 결합 → ★3 후보(좌표 연립이면 한 줄이라 ★2 지지) | ★2 / ★3 |
| RPM-GEO-0139 | 각의 이등분선 정리를 XU 로 인정 — 카탈로그에서 「단원 밖 도형 정리(이등분선·중선정리·닮음)」를 XU 로 볼지 절차로 볼지 결정 필요(0138 의 중선정리는 SC 로 둠) | ★3 |
| RPM-GEO-0147 | 거리 비(이심률) 정의는 교과 밖 — type_hint 를 자취(유형 18)로 둠. 카탈로그에서 「이차곡선의 통일 정의」 유형을 세울지 결정 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「방정식이 나타내는 이차곡선의 판별(계수 부호 조건)」(0110~0113 · 축 방향 변형 0141) · 「쌍곡선의 정의의 활용 — 초점 삼각형」(0106~0109 · 0138~0140) · 「포물선의 정의 — 초점거리 = 준선까지의 거리」(0127 · 0128 · 0148 · 최솟값형 0122 · 0129 · 실생활 0143) · 「자취의 방정식」(내분점 0114 · 중점 0115 · 0142 · 정의식 제곱 0116 · 0126 · 0147) · 「초점을 공유하는 두 곡선」(0117 · 0118 · 0119 · 0136 · 0145 · 0149 · 0150).
- 따로 세울 유형: (a) 「초점 공유 두 곡선의 정의 결합」(0117 · 0118 · 0119 · 0145 · 0149 · 0150) — base ★3, 닮음·좌표화가 붙는 0149 · 0150 은 ★4 층. RPM 「유형 UP 19 이차곡선의 정의의 활용」 제목이 이 유형과 일치. (b) 「포물선 정의를 이용한 거리 합의 최솟값」(0122 · 0129) — base ★2, 안·밖 판별을 넣으면 ★3. (c) 「초점 삼각형(둘레·넓이·곱)」(0108 · 0109 · 0135 · 0138 · 0139 · 0140) — 보조 정리(직각·중선정리·이등분선·대칭)에 따라 ★2/★3 층 구분, 보조 정리를 XU 로 볼지 여부를 이 유형에서 결정. (d) 「이차곡선 판별(계수 조건)」(0110~0113 · 0141) — base ★2, 퇴화 기각(VF)이 있으면 ★3.
- 통합해도 될 유형: 실생활 활용(0120 · 0121 · 0131 · 0143)은 궤도·반사·단면·포물선 궤도로 포장이 다르지만 「실생활 → a, b, c 또는 p 읽기」 하나로 묶고 base ★2, 각·좌표 설정이 필요한 0143 만 ★3 층. 자취(0114 · 0115 · 0126 · 0142 · 0147)는 「매개변수 소거」와 「정의식 제곱」 두 서브 골조로 base ★2. 「포물선 초점·준선 읽기」(0123 · 0124 · 0125 · 0144)는 ★1~2 한 유형(평행이동 완전제곱 0124 가 상단).
- 같은 골조·다른 ★: 0117(유형 UP 대표 ★3) · 0145(서술형 ★3) · 0136(★2 절차)은 초점 공유 골조가 같고 차이는 정의 결합 여부. 0122(★3) · 0129(★2)는 같은 RT d1 이고 차이는 실생활 포장·단서 해석뿐. 0116(★2 절차)의 자취가 포물선 정의 그 자체이므로 0126 · 0147 과 함께 「정의로 자취 세우기」로 묶으면 ★ 층이 자연스럽다.
