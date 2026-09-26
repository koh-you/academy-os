---
name: mechanism-데이터-RPM-GEO-06-p2
description: RPM 기하 06 벡터의 성분과 내적(2/4 · 교과서 06-5 + 유형 01~07) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 06 벡터의 성분과 내적
  unit_code: GEO-06
  part: "2/4"
  extract_range: "87~91쪽 · 0568~0601"
  total_problems: 34
  unit_total: 143
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 06 벡터의 성분과 내적 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 06 단원의 두 번째 조각(87~91쪽 · 0568~0601 · 34문항)을 다룬다. 앞 4문항은 교과서 06-5(두 벡터가 이루는 각 · 수직 조건)의 기본 계산이고, 나머지 30문항은 유형 01(선분의 내분점의 위치벡터) ~ 유형 07(벡터 AB 의 성분)의 유형별 문제다. RPM 은 구역이 곧 난이도 층이라 교과서 → ★1, 유형(대표문제·난이도 없음) → ★2, 난이도 중하 → ★1~2, 중 → ★2, 상중 → ★3 을 출발점으로 두고 M_total·통찰로 ±1 조정했다. 이 범위의 벤더 태그는 대표문제 7 · 서술형 2 이며 기출 태그는 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조 유지 변형과 ★ 변동 지점)를 채웠다. 이 범위는 대부분 절차형(위치벡터 표현 · 성분 계산 · 상등 · 평행)이고 통찰이 붙는 문항은 크기의 최솟값(0588)·자취(0600)·벡터 합의 최솟값(0601) 세 개뿐이다.

## 문항 데이터

### 교과서 06-5 두 벡터가 이루는 각

```yaml
- id: RPM-GEO-0568
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평면벡터 a=(-1, 3), b=(2, -1) 이 이루는 각의 크기.
  category: "내적·크기 계산 → cos θ → 각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 벡터가 이루는 각의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=-5, |a|=√10, |b|=√5 → cos θ=-1/√2 → 135°. 정의 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1. 함정은 cos 가 음수일 때 둔각을 택하는 것(T-부호)뿐.
  tier: star_1
  mechanism_primary: "a·b=-5, |a|=√10, |b|=√5 → cos θ=a·b/(|a||b|)=-1/√2 → θ=135°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$135^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 정수로 바꾸되 cos θ 가 특수각 값(0, ±1/2, ±√2/2, ±√3/2)이 되게 설계. 제약: 두 크기의 곱이 내적과 약분되는 조합(예: (1,2)·(3,1) → 45°) · 영벡터·같은 방향은 피함."
    creative: "(1) 각 대신 sin θ 나 삼각형 넓이 (1/2)|a||b|sin θ 묻기(★2) (2) 각 θ 가 주어지고 한 성분 k 를 구하기 → 제곱 후 양근 검증(★2 · T-부호) (3) a 와 a+b 가 이루는 각으로 바꾸면 한 단계 추가(★2)."
```

```yaml
- id: RPM-GEO-0569
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    공간벡터 a=(2, 3, 1), b=(3, 1, -2) 가 이루는 각의 크기.
  category: "내적·크기 계산 → cos θ → 각"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 벡터가 이루는 각의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=7, |a|=|b|=√14 → cos θ=1/2 → 60°. 공간 성분이라 항이 하나 늘 뿐 절차는 0568 과 같다. 교과서·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "a·b=7, |a|=|b|=√14 → cos θ=1/2 → θ=60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 3개를 바꾸되 |a||b| 가 내적과 약분되게(두 크기가 같은 √14 처럼 맞추면 쉬움). 제약: cos θ 가 특수각 값."
    creative: "(1) 두 벡터가 이루는 각이 둔각일 때 sin 값 묻기(★1) (2) 세 벡터 a, b, c 중 두 쌍의 각 비교(★2) (3) 성분 하나를 미지수 k 로 두고 각 60° 조건에서 k 구하기 → 무리방정식·양근 검증(★3 · I-VF)."
```

```yaml
- id: RPM-GEO-0570
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평면벡터 a=(3, 2), b=(k, 6) 이 서로 수직이 되도록 하는 k.
  category: "수직 ⟺ 내적 0 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 수직 조건(내적 0)으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=3k+12=0 → k=-4. 정의 한 줄. 교과서·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "a⊥b ⟺ a·b=0 → 3k+12=0 → k=-4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 k 의 위치를 바꿔도 됨. 제약: k 의 계수가 0 이 되지 않게(수직 조건이 항등·불능이 되면 안 됨) · 정수해."
    creative: "(1) k 가 두 성분에 모두 들어가 이차방정식이 되게 → 두 근 처리·모든 k 의 합(★2) (2) a+kb 와 a 가 수직인 k(★2) (3) 수직·평행 조건을 함께 주어 ㄱㄴㄷ 판별(★2)."
```

```yaml
- id: RPM-GEO-0571
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    공간벡터 a=(k, 1, 5), b=(2, 1-k, -1) 이 서로 수직이 되도록 하는 k.
  category: "수직 ⟺ 내적 0 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 수직 조건(내적 0)으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=2k+(1-k)-5=0 → k=4. k 가 두 성분에 들어 있으나 여전히 일차. 교과서·통찰 없음·M_total 4 → ★1. 함정은 1·(1-k) 전개의 부호.
  tier: star_1
  mechanism_primary: "a·b=0 → 2k+(1-k)-5=0 → k=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 를 넣는 성분 위치와 계수를 바꾸되 일차로 유지. 이차가 되면 근이 2개이므로 문구를 '모든 k 의 값의 합' 으로."
    creative: "(1) k 가 곱해져 이차식이 되면 두 k 값의 합·곱(★2) (2) 수직인 k 와 평행인 k 를 각각 구해 비교(★2) (3) 세 벡터가 서로 수직이 되는 미지수 2개 연립(★3)."
```

### 유형 01 선분의 내분점의 위치벡터

```yaml
- id: RPM-GEO-0572
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 AB 를 2:3 으로 내분하는 점 P, CP 를 1:2 로 내분하는 점 Q. CA=a, CB=b 일 때 AQ=xa+yb 를 만족시키는 x+y. (그림)
  category: "기준점 C 위치벡터 → 내분점 2단 → 차 벡터"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점의 위치벡터(2단 내분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C 를 기준점으로 CP=(3a+2b)/5, CQ=CP/3=(3a+2b)/15, AQ=CQ-CA=-4/5 a+2/15 b → x+y=-2/3. 내분 공식 두 번과 차 벡터, 4단계. 통찰 없음·M_total 5 로 −1 후보이나 2단 내분·기준점 전환이 있어 유형 대표 출발점 ★2 유지. 함정은 내분 비 2:3 의 순서(가중치가 반대로 붙음).
  tier: star_2
  mechanism_primary: "기준점 C → CP=(3a+2b)/5 → CQ=CP/3 → AQ=CQ−CA=−4/5 a+2/15 b → x+y=−2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0572.png"
  latex: latex-bank/rpm-geo/items/0572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 내분 비(2:3, 1:2)를 바꿔도 됨. 제약: 분모 곱(여기서 15)이 지나치게 커지지 않게 · 답이 기약분수 · 그림 라벨(A, B, C, P, Q)과 기준점 C 고정."
    creative: "(1) 기준점을 A 로 바꿔 AB, AC 기저로 같은 골조(★2) (2) Q 가 특정 직선(예: AB 와 평행한 직선) 위에 오도록 하는 내분 비를 거꾸로 구하기 → I-BW(★3) (3) x+y 대신 세 점의 공선 조건으로 미지 비 구하기 → 계수 합 1 활용(★3 · I-EQV)."
```

```yaml
- id: RPM-GEO-0573
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 OAB 에서 OA 를 2:1, OB 를 1:2 로 내분하는 점 P, Q 의 중점 M 에 대해 OM 을 a=OA, b=OB 로 나타내기. (그림)
  category: "내분점 두 개 → 중점 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점의 위치벡터 표현"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    OP=2/3 a, OQ=1/3 b, OM=(OP+OQ)/2=1/3 a+1/6 b. 세 단계 대입. 중하·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "OP=(2/3)a, OQ=(1/3)b → OM=(OP+OQ)/2=(1/3)a+(1/6)b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}\vec{a}+\dfrac{1}{6}\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-0573.png"
  latex: latex-bank/rpm-geo/items/0573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분 비 2:1, 1:2 를 임의로. 제약: 중점을 PQ 의 내분점으로 바꾸면 한 단계 추가 · 그림의 P, Q 위치 라벨 고정."
    creative: "(1) M 을 PQ 의 m:n 내분점으로(★1~2) (2) OM 이 AB 와 평행하도록 하는 내분 비 → I-BW(★3) (3) 삼각형 OPQ 와 OAB 의 넓이비를 계수에서 읽기 → I-RT(★3)."
```

```yaml
- id: RPM-GEO-0574
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사면체 OABC 에서 OA, BC 의 중점 M, N. OA=a, OB=b, OC=c 일 때 MN=xa+yb+zc 를 만족시키는 x−y+z. (그림)
  category: "중점 공식 → 차 벡터 → 계수 조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간에서 중점의 위치벡터(사면체)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OM=a/2, ON=(b+c)/2, MN=ON−OM=−1/2 a+1/2 b+1/2 c → x−y+z=−1/2. 세 기저로 옮기는 것 외에 특별한 단계 없음. 중·통찰 없음·M_total 5 → ★2 유지(−1 후보). 함정은 x−y+z 의 부호 조합.
  tier: star_2
  mechanism_primary: "OM=a/2, ON=(b+c)/2 → MN=ON−OM → 계수 (−1/2, 1/2, 1/2) → x−y+z=−1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0574.png"
  latex: latex-bank/rpm-geo/items/0574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중점을 m:n 내분점으로 바꿔도 됨(계수 분모 m+n). 제약: 묻는 조합(x−y+z)이 0 이 되지 않게 확인 · 그림 라벨 고정."
    creative: "(1) MN 과 OB+OC−OA 의 평행 여부를 묻기 → 벡터 표현으로 평행 판단(★2 · I-RT d1) (2) 정사면체로 주고 |MN| 을 묻기 → 내적 결합(★3) (3) 삼각형 ABC 의 무게중심 G 로 바꿔 MG 표현(★2)."
```

```yaml
- id: RPM-GEO-0575
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 점 A, B, C, D 의 위치벡터 a, b, c, d 에 대해 사각형 ABCD 가 평행사변형일 때 b 를 a, c, d 로 나타내기.
  category: "평행사변형 → AB=DC → 위치벡터 등식"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형 조건과 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행사변형 ⟺ AB=DC(또는 대각선 중점 일치) → b−a=c−d → b=a+c−d. 조건을 벡터 등식으로 옮기는 것이 전부이며 교과서 정의 수준이라 통찰로 세지 않음. 문자 위치벡터만으로 표현(Mₐ 2). 중·M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "평행사변형 ABCD → AB=DC → b−a=c−d → b=a+c−d"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\vec{a}+\vec{c}-\vec{d}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구하는 벡터를 c 나 d 로 바꾸거나 꼭짓점 순서(ABCD → ABDC 등)를 바꾸면 부호가 달라짐. 제약: 꼭짓점 순서가 평행사변형의 둘레 순서인지 명시."
    creative: "(1) 좌표 수치 버전으로 D 의 좌표 구하기(★1) (2) 마름모 조건(|AB|=|AD|) 추가 → 내적 조건 결합(★3) (3) 대각선 중점 일치(a+c=b+d)로 같은 답을 내는 두 풀이 비교 문항(I-SC 약함 · ★2)."
```

```yaml
- id: RPM-GEO-0576
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직육면체 ABCD-EFGH 에서 GH 를 1:2 로 내분하는 점 P, EP 를 1:2 로 내분하는 점 Q. AB=a, AD=b, AE=c 일 때 AQ 를 a, b, c 로 나타낸 것. 5지선다. (그림)
  category: "꼭짓점 위치벡터화 → 내분점 2단"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 내분점의 위치벡터(2단 내분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AG=a+b+c, AH=b+c → AP=(2AG+AH)/3=2/3 a+b+c → AQ=(2AE+AP)/3=2/9 a+1/3 b+c → ②. 0572 와 같은 2단 내분 골조를 공간의 8꼭짓점 위에서 수행. 통찰 없음·M_total 5 → 절차형 ★2 후보이나 라벨은 벤더 상중 ★3 으로 두고 기록. 함정은 내분 비 1:2 의 순서.
    [분류 이슈] 벤더 상중이나 통찰 없음·M_total 5 → 절차형 ★2 후보. 라벨 ★3 유지.
  tier: star_3
  mechanism_primary: "AG=a+b+c, AH=b+c → AP=(2AG+AH)/3 → AQ=(2AE+AP)/3 → 계수 (2/9, 1/3, 1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0576.png"
  latex: latex-bank/rpm-geo/items/0576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분 비 1:2 두 개를 바꾸되 선택지가 서로 다른 계수 조합이 되게. 제약: 그림 라벨(A~H · P 는 GH 위, Q 는 EP 위) 고정 · 분모 9 이하 권장."
    creative: "(1) Q 가 대각선 AG 위에 오도록 하는 내분 비 → I-BW(★3) (2) 정육면체로 주고 |AQ| 를 묻기 → 내적·크기 결합(★3) (3) 평면 AEQ 와 모서리의 교점(내분 비) 찾기 → 공면 조건(★4 · I-EQV)."
```

```yaml
- id: RPM-GEO-0577
  page: 88
  vendor_label: "유형 01 선분의 내분점의 위치벡터"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    평행사변형 ABCD 에서 BC 의 중점 M, MD 를 4:3 으로 내분하는 점 P. AB=a, AD=b 일 때 AP=ma+nb 를 만족시키는 m+n. (그림)
  category: "중점 → 내분점 공식 → 계수 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형에서 내분점의 위치벡터"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AM=a+b/2, AP=(3AM+4AD)/7=3/7 a+11/14 b → m+n=17/14. 내분 공식 한 번과 분수 정리. 서술형 태그이나 통찰 없음·M_total 5 → 절차형 ★2 후보. 라벨은 벤더 상중 ★3 으로 두고 기록. 함정은 내분 비 4:3 의 순서.
    [분류 이슈] 벤더 상중·서술형이나 통찰 없음·M_total 5 → 절차형 ★2 후보. 라벨 ★3 유지.
  tier: star_3
  mechanism_primary: "AM=a+(1/2)b → AP=(3AM+4AD)/7 → (3/7, 11/14) → m+n=17/14"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{17}{14}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0577.png"
  latex: latex-bank/rpm-geo/items/0577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분 비 4:3 과 M 의 위치(중점 → 내분점)를 바꿔도 됨. 제약: 분모가 커지지 않게(m+n ≤ 7) · 그림 라벨 고정 · 서술형이면 답을 기약분수로."
    creative: "(1) P 가 대각선 AC 위에 있도록 하는 비 → 계수 조건 m=n → I-BW(★3) (2) 직선 AP 와 변 CD 의 교점 위치 → 두 표현 비교(★3 · I-EQV) (3) 삼각형 APD 와 평행사변형의 넓이비를 계수에서 읽기(★3 · I-RT)."
```

### 유형 02 삼각형의 무게중심의 위치벡터

```yaml
- id: RPM-GEO-0578
  page: 89
  vendor_label: "유형 02 삼각형의 무게중심의 위치벡터"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 OAB 에서 OA, OB 의 중점 M, N 과 두 중선 AN, BM 의 교점 G. OA=a, OB=b 일 때 GB=xa+yb 를 만족시키는 x−y. (그림)
  category: "두 중선의 교점=무게중심 → OG=(a+b)/3 → 차 벡터"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 중선의 교점(무게중심)의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AN, BM 이 중선이므로 G 는 삼각형 OAB 의 무게중심 → OG=(a+b)/3. GB=OB−OG=−1/3 a+2/3 b → x−y=−1. 무게중심 인식 한 번과 차 벡터 한 번. 통찰 없음·M_total 5 로 −1 후보이나 교점을 무게중심으로 읽는 단계가 이 유형의 핵심이라 대표 출발점 ★2 유지. 함정은 GB 를 OG−OB 로 뒤집는 부호.
  tier: star_2
  mechanism_primary: "AN∩BM=G 가 무게중심 → OG=(a+b)/3 → GB=OB−OG=−1/3 a+2/3 b → x−y=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: "crop:fig-0578.png"
  latex: latex-bank/rpm-geo/items/0578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터(GA, GB, GM, AG)와 조합(x−y, x+y, xy)을 바꿀 수 있음. 제약: M, N 이 중점이어야 G 가 무게중심(내분 비를 바꾸면 유형이 달라짐) · 그림 라벨(O, A, B, M, N, G) 고정."
    creative: "(1) M, N 을 2:1 내분점으로 바꾸면 교점을 두 직선의 매개변수로 잡아 계수 비교 → I-CON(★3) (2) GA+GB 를 구해 GO 와의 관계(GA+GB+GO=0)를 묻기(★2) (3) 삼각형 GAB 와 OAB 의 넓이비를 위치벡터 계수에서 읽기 → I-RT(★3)."
```

```yaml
- id: RPM-GEO-0579
  page: 89
  vendor_label: "유형 02 삼각형의 무게중심의 위치벡터"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 의 무게중심 G 에 대해 GA=a, GB=b 일 때 BC=ma+nb 를 만족시키는 m, n 의 곱 mn.
  category: "GA+GB+GC=0 → GC → 차 벡터"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무게중심을 기준점으로 한 위치벡터(GA+GB+GC=0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무게중심 성질 GA+GB+GC=0 → GC=−a−b. BC=GC−GB=−a−2b → m=−1, n=−2 → mn=2. 성질 한 번·차 벡터 한 번. 중하·통찰 없음·M_total 5 → ★2(−1 후보이나 기준점이 꼭짓점이 아니라 G 인 점이 0573 보다 한 단계 위). 함정은 두 음의 부호 곱이 양수가 되는 것.
  tier: star_2
  mechanism_primary: "GA+GB+GC=0 → GC=−a−b → BC=GC−GB=−a−2b → mn=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 CA, AC, BC 의 중점 방향 등으로 바꾸고 조합(mn, m+n, m−n)을 바꿀 수 있음. 제약: 답이 0 이 되지 않는 조합 · 기저가 GA, GB 두 개인 것 고정(GC 를 주면 문제가 무너짐)."
    creative: "(1) 기저를 GA, GB 대신 AB, AC 로 주고 GC 를 나타내기(★2) (2) 변 BC 의 중점 D 에 대해 GD 를 묻기 → 중선 정리 GA=−2GD(★2) (3) GA+GB+GC=0 을 주고 G 가 무게중심임을 역으로 판정하는 ㄱㄴㄷ(★3 · I-EQV)."
```

```yaml
- id: RPM-GEO-0580
  page: 89
  vendor_label: "유형 02 삼각형의 무게중심의 위치벡터"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행사변형 OABC 에서 삼각형 OAB, OBC 의 무게중심 G, H. OA=a, OC=b 일 때 GH 를 a, b 로 나타내기. (그림)
  category: "OB=a+b → 무게중심 두 개 → 차 벡터"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형 안 두 삼각형의 무게중심의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OB=a+b 이므로 OG=(OA+OB)/3=(2a+b)/3, OH=(OB+OC)/3=(a+2b)/3 → GH=OH−OG=(−a+b)/3. 무게중심 공식 두 번과 차 벡터. 중·통찰 없음·M_total 4 로 −1 후보이나 대각선을 a+b 로 놓는 단계와 두 무게중심 처리를 합쳐 ★2 유지. GH=(1/3)AC 임을 알면 검산이 된다.
  tier: star_2
  mechanism_primary: "OB=a+b → OG=(2a+b)/3, OH=(a+2b)/3 → GH=OH−OG=(−a+b)/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}\vec{a}+\dfrac{1}{3}\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-0580.png"
  latex: latex-bank/rpm-geo/items/0580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무게중심을 잡는 두 삼각형(OAB·OBC → OAC·ABC 등)이나 묻는 벡터(GH, HG, AH)를 바꿀 수 있음. 제약: 그림 라벨(O, A, B, C 둘레 순서 · G, H 위치) 고정 · 답의 두 계수가 모두 0 이 아니게."
    creative: "(1) |OA|=|OC| 마름모 조건을 붙여 GH 가 AC 와 평행함(GH=AC/3)을 이용해 |GH| 묻기 → I-RT(★3) (2) 직선 GH 가 OB 와 만나는 점의 위치 → 계수 비교(★3 · I-CON) (3) 평행사변형을 삼각형 OAB 하나로 줄이고 G 와 변 중점 사이 벡터를 묻기(★1~2)."
```

```yaml
- id: RPM-GEO-0581
  page: 89
  vendor_label: "유형 02 삼각형의 무게중심의 위치벡터"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사면체 ABCD 에서 CD 의 중점 P, 삼각형 ABC 의 무게중심 G. GP=l·AB+m·AC+n·AD 일 때 l+m+n. (그림)
  category: "기준점 A → AG 무게중심 · AP 중점 → 차 벡터"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사면체에서 무게중심·중점의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 를 기준점으로 AG=(AB+AC)/3, AP=(AC+AD)/2 → GP=AP−AG=−1/3 AB+1/6 AC+1/2 AD → l+m+n=1/3. 기저가 세 모서리 벡터인 점만 다르고 골조는 0580 과 같다. 중·통찰 없음·M_total 5 → ★2. 함정은 AC 의 계수 1/2−1/3 을 통분하는 분수 부호.
  tier: star_2
  mechanism_primary: "기준점 A → AG=(AB+AC)/3, AP=(AC+AD)/2 → GP=AP−AG → (−1/3, 1/6, 1/2) → l+m+n=1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0581.png"
  latex: latex-bank/rpm-geo/items/0581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 CD 의 m:n 내분점으로, G 를 다른 면(ACD 등)의 무게중심으로 바꿀 수 있음. 제약: 묻는 조합 l+m+n 이 0 이 아니게 · 그림 라벨(A~D, P, G) 고정 · 분모 6 이하 권장."
    creative: "(1) 정사면체(한 모서리 길이 주어짐)로 두고 |GP| 를 묻기 → 내적 결합(★3) (2) G 가 사면체의 무게중심(네 꼭짓점 평균)일 때 GP 표현 → 공식 확장(★2) (3) GP 가 면 BCD 와 평행하도록 하는 P 의 위치를 거꾸로 묻기 → I-BW(★3)."
```

### 유형 03 성분으로 주어진 평면벡터의 연산

```yaml
- id: RPM-GEO-0582
  page: 89
  vendor_label: "유형 03 성분으로 주어진 평면벡터의 연산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a+3b=(5, 3), 2a−b=(−4, −1) 일 때 a+b 의 성분. 5지선다.
  category: "벡터 연립 → a, b 각각 → 합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 연산(벡터 연립방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b=2a+(4, 1) 을 첫 식에 대입해 7a=(−7, 0) → a=(−1, 0), b=(2, 1) → a+b=(1, 1) → ③. 벡터를 미지수처럼 두고 연립하는 표준 절차. 통찰 없음·M_total 5 로 −1 후보이나 대표문제이고 두 식 연립이 필요해 ★2 유지. a+b=3/7(a+3b)+2/7(2a−b) 로 바로 결합하는 지름길도 있으나 필수는 아니다.
  tier: star_2
  mechanism_primary: "2a−b=(−4,−1) → b=2a+(4,1) → 대입 7a=(−7,0) → a=(−1,0), b=(2,1) → a+b=(1,1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차결합의 계수(1,3 / 2,−1)와 우변 성분을 바꿀 수 있음. 제약: 계수 행렬식이 0 이 아니게(연립이 유일해) · a, b 가 정수 성분이 되도록 우변을 역산해서 설계 · 선택지에 a−b, 2a+b 같은 오답 후보를 배치."
    creative: "(1) 세 벡터 a, b, c 와 세 식으로 확장(★2) (2) a+b 를 두 식의 일차결합으로 바로 만드는 계수(3/7·2/7)를 묻기 → 계수 비교 I-CON 약함(★2~3) (3) 성분 대신 |a+3b|, |2a−b| 크기 조건으로 바꾸면 내적 단원 결합(★3)."
```

```yaml
- id: RPM-GEO-0583
  page: 89
  vendor_label: "유형 03 성분으로 주어진 평면벡터의 연산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(3, 1), b=(2, −2) 일 때 2(a−3b)−(a−2b) 의 모든 성분의 합.
  category: "식 정리 → 성분 대입 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 연산(식 정리 후 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2(a−3b)−(a−2b)=a−4b=(3, 1)−(8, −8)=(−5, 9) → 합 4. 문자식 정리 한 번과 대입. 중하·통찰 없음·M_total 4 → ★1. 함정은 −4b 의 두 번째 성분 부호(−4·(−2)=+8).
  tier: star_1
  mechanism_primary: "2(a−3b)−(a−2b)=a−4b → (3,1)−(8,−8)=(−5,9) → 합 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 결합 계수를 자유롭게. 제약: 정리한 식의 계수가 0 이 되어 한 벡터가 사라지지 않게 · 음수 성분을 하나 넣어 부호 함정 유지."
    creative: "(1) 성분의 합 대신 크기(★1) (2) 세 벡터로 늘리고 괄호를 이중으로(★1~2) (3) 결과 벡터가 단위벡터가 되도록 하는 계수 k 를 묻기 → 이차방정식(★2)."
```

```yaml
- id: RPM-GEO-0584
  page: 89
  vendor_label: "유형 03 성분으로 주어진 평면벡터의 연산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=(2a−3, −4/5) 가 단위벡터가 되도록 하는 모든 a 의 값의 합.
  category: "|x|=1 → (2a−3)²=9/25 → 두 근의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단위벡터 조건(크기 1)으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2a−3)²+16/25=1 → (2a−3)²=9/25 → 2a−3=±3/5 → a=9/5, 6/5 → 합 3. 크기 조건을 세우고 ± 두 근을 모두 챙기는 두 단계(근과 계수 관계로 12/4=3 도 가능). 중하·통찰 없음·M_total 5 → ★2. 함정은 양의 제곱근만 취해 근을 하나 놓치는 것.
  tier: star_2
  mechanism_primary: "|x|²=1 → (2a−3)²=9/25 → 2a−3=±3/5 → a=9/5, 6/5 → 합 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 성분(−4/5)을 3/5, 5/13, 12/13 등 피타고라스 분수로, 일차식 2a−3 의 계수·상수를 바꿀 수 있음. 제약: 1−(고정 성분)² 이 유리수의 제곱이어야 두 근이 유리수 · 두 근의 합은 2·(상수/계수)로 설계."
    creative: "(1) 합 대신 곱이나 두 a 의 차를 묻기(★2) (2) 두 성분에 모두 a 를 넣어 이차방정식 근의 존재 조건(판별식)까지 묻기 → I-BW(★3) (3) 단위벡터 대신 |x|=|y| 두 벡터 크기 상등 조건(★2)."
```

```yaml
- id: RPM-GEO-0585
  page: 89
  vendor_label: "유형 03 성분으로 주어진 평면벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(−7, 5), b=(2, −1) 일 때 3x−a=2(a+3b) 를 만족시키는 x 의 크기. 5지선다.
  category: "벡터 방정식 → x=a+2b → 크기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 방정식의 해와 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x=3a+6b → x=a+2b=(−3, 3) → |x|=√18=3√2 → ④. 방정식을 문자로 먼저 정리한 뒤 대입하고 크기까지 두 단계. 중·통찰 없음·M_total 4 로 −1 후보이나 방정식 풀이와 크기 계산이 이어져 ★2 유지. 선택지 2√3(=√12)·3√2(=√18) 혼동이 함정.
  tier: star_2
  mechanism_primary: "3x−a=2a+6b → x=a+2b=(−3,3) → |x|=√18=3√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 방정식 계수를 바꾸되 x 가 정수 성분이 되게(계수로 나누어떨어지게). 제약: |x| 가 √(정수) 로 정리되고 선택지에 근호 정리 오답을 배치."
    creative: "(1) x 의 크기 대신 x 와 평행한 단위벡터(★2) (2) 방정식에 x 가 양변에 나오는 형태(2x−3a=2b+x, 0586 과 같은 골조)로(★2) (3) |x|=k 가 되도록 하는 계수 t 를 묻기 → 이차방정식(★3)."
```

### 유형 04 성분으로 주어진 공간벡터의 연산

```yaml
- id: RPM-GEO-0586
  page: 90
  vendor_label: "유형 04 성분으로 주어진 공간벡터의 연산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(2, 1, −3), b=(1, −2, 4) 일 때 2x−3a=2b+x 를 만족시키는 x=(l, m, n) 의 성분 합 l+m+n.
  category: "벡터 방정식 → x=3a+2b → 성분 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 연산(벡터 방정식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=3a+2b=(6+2, 3−4, −9+8)=(8, −1, −1) → 합 6. 이항 한 번과 성분 대입. 대표문제 출발점 ★2 이나 통찰 없음·M_total 4·한 단계 절차라 −1 → ★1. 함정은 −9+8 같은 부호 계산.
  tier: star_1
  mechanism_primary: "2x−3a=2b+x → x=3a+2b → (8,−1,−1) → l+m+n=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 방정식 계수를 바꾸되 x 의 계수 차(2−1)가 1 이 되게 하면 나눗셈 없이 정수. 제약: 성분 합이 0 이 아니게 · 음수 성분 하나 이상."
    creative: "(1) 성분 합 대신 |x| 나 x 와 a 의 내적(★1~2) (2) 두 미지 벡터 x, y 의 연립(0582 골조·공간)(★2) (3) x 가 xy 평면과 평행하도록 하는 계수 t 를 묻기(z 성분 0)(★2)."
```

```yaml
- id: RPM-GEO-0587
  page: 90
  vendor_label: "유형 04 성분으로 주어진 공간벡터의 연산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(1, 2, −4), b=(2, −2, −3), c=(−2, 6, 1) 일 때 2(a+3b)−3(2a−c) 의 크기. 5지선다.
  category: "식 정리 → 성분 대입 → 크기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 연산과 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2(a+3b)−3(2a−c)=−4a+6b+3c=(2, −2, 1) → 크기 3 → ③. 문자식 정리 뒤 세 벡터·아홉 성분을 계산하고 크기까지. 단계는 짧으나 계산량이 0583 의 두 배(Mₖ 2). 중하·통찰 없음·M_total 5 → ★2. 함정은 −3(2a−c) 의 부호 분배.
  tier: star_2
  mechanism_primary: "2(a+3b)−3(2a−c)=−4a+6b+3c → (2,−2,1) → |·|=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분과 결합 계수를 바꾸되 결과 벡터가 (2,−2,1)·(1,2,2)·(3,4,0) 같은 정수 크기 벡터가 되게 역산. 제약: 정리한 계수가 0 이 되어 벡터 하나가 사라지지 않게."
    creative: "(1) 크기 대신 결과 벡터와 같은 방향의 단위벡터(0589 골조)(★2) (2) 결과 벡터가 좌표평면 하나에 평행하도록 하는 계수 k(★2) (3) 계수 하나를 t 로 두고 크기의 최솟값 → 0588 골조(★2~3 · I-RT)."
```

```yaml
- id: RPM-GEO-0588
  page: 90
  vendor_label: "유형 04 성분으로 주어진 공간벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(1, −2, 3), b=(−1, 1, −1) 에 대해 |a+tb| 가 t=α 에서 최솟값 β 를 가질 때 αβ. (t 는 실수)
  category: "성분 → |a+tb|² 이차식 → 완전제곱 → 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 크기의 최솟값을 |a+tb|²=3t²−12t+14 라는 t 의 이차함수 최솟값으로 옮김(또는 (a+tb)⊥b 인 t=−a·b/|b|² 로 기하 전환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "|a+tb| 의 최솟값(제곱한 이차식의 최솟값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+tb=(1−t, −2+t, 3−t) → |a+tb|²=3t²−12t+14=3(t−2)²+2 → t=2 에서 최솟값 √2 → αβ=2√2. 크기 최솟값을 이차함수로 옮기는 표현 전환 1개(RT d1). 매개변수 t(Mₐ 2)와 제곱근을 다시 씌우는 함정(β=2 로 답하기 · T-단위). 중·통찰 1·M_total 7 → ★2 유지(★3 후보였으나 전환이 교과서 예제 수준).
  tier: star_2
  mechanism_primary: "a+tb 성분 → |a+tb|²=3t²−12t+14=3(t−2)²+2 → α=2, β=√2 → αβ=2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꾸되 꼭짓점 t=−a·b/|b|² 가 정수·최솟값 제곱이 간단한 수가 되게(예: |b|²=3, a·b=−6). 제약: b≠0 · 최솟값이 0 이 되면(a∥b) 문제가 무너짐 · 평면벡터로 줄여도 골조 동일."
    creative: "(1) 최솟값이 되는 t 에서 (a+tb)⊥b 임을 증명·활용하는 서술형 → I-RT d2(★3) (2) |a+tb|=|a−tb| 를 만족시키는 t 나 |a+tb|≥k 가 모든 t 에 성립하는 k 의 최댓값 → 판별식 결합(★3 · I-EQV) (3) 원점과 직선(점 A(a) 를 지나고 방향 b) 사이 거리로 기하 해석을 요구하면 ★3 · I-SC."
```

```yaml
- id: RPM-GEO-0589
  page: 90
  vendor_label: "유형 04 성분으로 주어진 공간벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(1, 2, −1), b=(−1, 3, 2), c=(3, 5, −4) 에 대해 2a+3b−c 와 방향이 같고 크기가 3 인 벡터의 성분.
  category: "결합 벡터 → 크기 → 단위벡터 × 3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 벡터와 방향이 같고 크기가 주어진 벡터(단위벡터의 실수배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a+3b−c=(−4, 8, 8), 크기 12 → 단위벡터 (−1/3, 2/3, 2/3) → ×3 → (−1, 2, 2). 결합 계산·크기·양의 배수 세 단계. 중·통찰 없음·M_total 6 → ★2. 함정은 「방향이 같다」를 놓치고 ±(−1, 2, 2) 둘 다 쓰는 것(T-부호).
  tier: star_2
  mechanism_primary: "2a+3b−c=(−4,8,8) → |·|=12 → 단위벡터 → ×3 → (−1,2,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,2,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "결합 벡터가 (−4,8,8)·(2,−3,6)·(6,2,3) 처럼 정수 크기(12·7·7)가 되게 역산하고, 요구 크기를 그 약수·배수로. 제약: 「방향이 같다」 vs 「평행하다」 문구에 따라 답이 1개/2개로 갈리므로 명시."
    creative: "(1) 「평행한 벡터」로 바꿔 두 답을 모두 쓰게 하기 → I-MI 약함(★2) (2) 결합 계수 하나를 k 로 두고 결과가 단위벡터의 정수배가 되는 k(★3 · I-BW) (3) 결과 벡터 방향의 단위벡터와 좌표축이 이루는 각(방향코사인)(★2)."
```

### 유형 05 벡터가 서로 같을 조건

```yaml
- id: RPM-GEO-0590
  page: 90
  vendor_label: "유형 05 벡터가 서로 같을 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(−4, 6), b=(3, −2), c=(1, 6) 에 대해 c=ma+nb 일 때 실수 m, n.
  category: "성분 상등 → 2원 연립 → m, n"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 상등 — 한 벡터를 두 벡터의 일차결합으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (−4m+3n, 6m−2n)=(1, 6) → −4m+3n=1, 3m−n=3 → m=2, n=3. 상등으로 연립을 세우고 푸는 표준 절차. 통찰 없음·M_total 4 로 −1 후보이나 대표문제이고 연립 2원이 필요해 ★2 유지.
  tier: star_2
  mechanism_primary: "c=ma+nb → (−4m+3n, 6m−2n)=(1,6) → 연립 → m=2, n=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$m=2$, $n=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 를 비평행 정수 벡터로 두고 m, n 을 먼저 정한 뒤 c 를 역산. 제약: a∦b(행렬식 ≠ 0) · m, n 정수 또는 간단한 분수."
    creative: "(1) m+n 이나 mn 한 값만 묻는 5지선다(★2) (2) a, b 가 평행하면 표현이 불가능/무수함을 판정하는 ㄱㄴㄷ → I-EQV(★3) (3) 공간벡터 세 개로 확장(0593 골조)(★2)."
```

```yaml
- id: RPM-GEO-0591
  page: 90
  vendor_label: "유형 05 벡터가 서로 같을 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(x+4, −3, −2), b=(1, y, 2), c=(−2, 1, 1−z) 에 대해 a=2b+3c 일 때 x−y+z.
  category: "우변 성분 계산 → 성분별 상등 → x, y, z"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 상등 — 성분 비교로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2b+3c=(−4, 2y+3, 7−3z) → x+4=−4, −3=2y+3, −2=7−3z → x=−8, y=−3, z=3 → x−y+z=−2. 성분별 일차방정식 셋. 중하·통찰 없음·M_total 4 → ★1. 함정은 x−y+z 에서 −(−3) 의 부호.
  tier: star_1
  mechanism_primary: "2b+3c=(−4, 2y+3, 7−3z) → 성분 상등 → x=−8, y=−3, z=3 → x−y+z=−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "미지수를 넣는 성분 위치와 결합 계수(2, 3)를 바꿀 수 있음. 제약: 각 성분이 미지수 하나짜리 일차방정식이 되게(두 미지수가 한 성분에 겹치면 연립으로 유형이 올라감) · 정수해."
    creative: "(1) 미지수 둘을 한 성분에 겹쳐 연립 2원으로(★2) (2) 등식을 xa+yb=c 꼴로 바꿔 0590 골조(★2) (3) 성분 하나가 이차식(x²)이면 두 근 처리(★2 · T-부호)."
```

```yaml
- id: RPM-GEO-0592
  page: 90
  vendor_label: "유형 05 벡터가 서로 같을 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(2, 3), b=(p, −1), c=(−4, q) 에 대해 2a+b=c−b 일 때 |b−c|. 5지선다.
  category: "이항 2a+2b=c → 상등 → p, q → 크기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 상등 — 성분 비교 후 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a+2b=c → (4+2p, 4)=(−4, q) → p=−4, q=4 → b−c=(0, −5) → 크기 5 → ⑤. 이항·상등·크기 세 단계가 모두 한 줄씩. 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2a+b=c−b → 2a+2b=c → (4+2p, 4)=(−4, q) → p=−4, q=4 → |b−c|=|(0,−5)|=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 성분과 p, q 위치·등식 계수를 바꿀 수 있음. 제약: 상등에서 p, q 가 정수 · |b−c| 가 정수(3-4-5, 5-12-13 조합)."
    creative: "(1) |b−c| 대신 b 와 c 가 이루는 각(★2 · 내적 결합) (2) 등식에 미지 벡터 x 를 넣어 x 를 먼저 구하게(0585 골조)(★2) (3) p, q 가 두 성분에 섞여 연립이 되게(★2)."
```

```yaml
- id: RPM-GEO-0593
  page: 90
  vendor_label: "유형 05 벡터가 서로 같을 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(0, 1, 1), b=(1, 0, 1), c=(1, 1, 0), d=(3, −4, 5) 에 대해 d=la+mb+nc 일 때 lmn. 5지선다. (l, m, n 은 실수)
  category: "성분 상등 → 대칭 3원 연립 → l, m, n"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 상등 — 세 벡터의 일차결합(3원 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (m+n, l+n, l+m)=(3, −4, 5) → 세 식을 더해 l+m+n=2 → l=−1, m=6, n=−3 → lmn=18 → ③. 3원 연립이지만 대칭꼴이라 합을 이용하면 한 줄(소거법으로도 짧게 끝나 통찰로 세지 않음). 중·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "d=la+mb+nc → (m+n, l+n, l+m)=(3,−4,5) → 합 l+m+n=2 → (l,m,n)=(−1,6,−3) → lmn=18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "d 의 성분을 바꾸면 l, m, n 이 바뀜(l=S−d₁, m=S−d₂, n=S−d₃ · S=성분합/2). 제약: 성분합이 짝수여야 정수해 · lmn≠0 · 선택지 간격을 2 로 두면 오답 후보가 자연스러움."
    creative: "(1) 기저 a, b, c 를 비대칭 벡터로 주면 일반 3원 연립 → Mₖ 상승·★2 유지 (2) 세 벡터가 한 평면에 있어 표현이 불가능한 d 를 찾기 → 행렬식·공면 조건(★3 · I-EQV) (3) l+m+n 만 묻고 세 식의 합 한 줄로 끝내는 변형 → I-SYM d1(★2)."
```

### 유형 06 벡터의 평행

```yaml
- id: RPM-GEO-0594
  page: 91
  vendor_label: "유형 06 벡터의 평행"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(5, 4), b=(−2, 3), c=(3, 7) 에 대해 a+tc 와 b−a 가 평행할 때 실수 t. 5지선다.
  category: "두 벡터 성분 → 평행 ⟺ 실수배(성분 비) → 일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 평행 조건(실수배·성분 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+tc=(5+3t, 4+7t), b−a=(−7, −1) → 평행 ⟺ (5+3t)(−1)=(4+7t)(−7) → 46t=−23 → t=−1/2 → ②. 평행을 실수배(또는 x₁y₂=x₂y₁)로 옮기고 일차방정식 한 번. 통찰 없음·M_total 6 → 대표 출발점 ★2. 함정은 b−a 의 부호와 비례식 교차곱 순서.
  tier: star_2
  mechanism_primary: "a+tc=(5+3t, 4+7t), b−a=(−7,−1) → (5+3t)·(−1)−(4+7t)·(−7)=0 → t=−1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b, c 성분을 바꾸되 t 가 간단한 분수(선택지 −1, ±1/2, 1, 3/2 유지)가 되게 역산. 제약: c∦(b−a) 여야 t 가 유일 · 교차곱 방정식의 t 계수 ≠ 0."
    creative: "(1) 평행 대신 수직 조건으로 바꿔 내적 결합(★2) (2) a+tc 가 b−a 와 「같은 방향」이 되게 하는 t 의 부호 판정 추가 → I-VF 약함(★3) (3) t 값이 두 개 나오도록 c 를 t 의 이차식으로 → 근 처리(★3)."
```

```yaml
- id: RPM-GEO-0595
  page: 91
  vendor_label: "유형 06 벡터의 평행"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(−1, 2, 4), b=((x−y)/2, −y/3, −2) 가 평행할 때 xy. 5지선다.
  category: "b=ka → z 성분으로 k → 나머지 성분 → x, y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 평행 조건 — 공간벡터 성분에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b=ka 에서 −2=4k → k=−1/2 → (x−y)/2=1/2, −y/3=−1 → y=3, x=4 → xy=12 → ③. 미지수 없는 성분으로 k 를 먼저 정하는 순서가 핵심. 중하·통찰 없음·M_total 5 → ★2. 함정은 k 의 부호와 분수 성분 정리.
  tier: star_2
  mechanism_primary: "b=ka → −2=4k → k=−1/2 → (x−y)/2=1/2, −y/3=−1 → x=4, y=3 → xy=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 성분과 b 의 분수식 형태를 바꾸되 미지수 없는 성분 하나는 남겨 k 를 바로 정하게. 제약: k≠0 · x, y 정수 · 선택지 간격 2."
    creative: "(1) 미지수 없는 성분을 없애면 비례식 두 개의 연립 → Mₛ 상승(★2) (2) 평행 + 크기 조건(|b|=2|a|)을 함께 주어 k 의 부호를 판정 → I-VF(★3) (3) 평면벡터로 줄이고 x, y 가 한 성분에 겹치게(★2)."
```

```yaml
- id: RPM-GEO-0596
  page: 91
  vendor_label: "유형 06 벡터의 평행"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(1, 2), b=(x, −1) 에 대해 2a+b 와 b−a 가 평행할 때 x.
  category: "두 결합 벡터 성분 → 평행 조건 → 일차방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 평행 조건 — 일차결합 벡터의 평행"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a+b=(2+x, 3), b−a=(x−1, −3) → (2+x)(−3)=3(x−1) → −6x=3 → x=−1/2. 성분 계산 뒤 교차곱 한 번. 중·통찰 없음·M_total 5 → ★2. 두 벡터가 서로 반대 방향(k=−1)이라 검산이 쉬움.
  tier: star_2
  mechanism_primary: "2a+b=(2+x, 3), b−a=(x−1, −3) → (2+x)(−3)−3(x−1)=0 → x=−1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 성분·결합 계수·x 의 위치를 바꿀 수 있음. 제약: 교차곱이 x 의 일차식이 되게(x 가 두 벡터의 같은 축에 있으면 이차가 될 수 있음) · 답이 간단한 분수."
    creative: "(1) x 를 두 성분에 넣어 이차방정식 → 두 해 처리(★2~3) (2) 2a+b 와 b−a 가 평행하면 a∥b 임을 이용하는 지름길(a, b 비평행이면 결합 계수 행렬식 2·1−1·(−1)=3≠0 이라 평행 불가)을 묻는 ㄱㄴㄷ → I-EQV(★3) (3) 평행 대신 수직 조건(★2)."
```

```yaml
- id: RPM-GEO-0597
  page: 91
  vendor_label: "유형 06 벡터의 평행"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(−2, 3, −4), b=(2, x−1, 2y+2) 에 대해 2a−b 와 a+3b 가 평행할 때 x+y.
  category: "두 결합 벡터 성분 → 실수배 k → 성분별 방정식 → x, y"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 평행 조건 — 일차결합 벡터의 평행(공간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a−b=(−6, 7−x, −10−2y), a+3b=(4, 3x, 6y+2) → a+3b=k(2a−b) 에서 x 성분으로 k=−2/3 → 3x=−2/3(7−x) → x=−2, 6y+2=−2/3(−10−2y) → y=1 → x+y=−1. 미지수 없는 성분으로 k 를 정한 뒤 두 일차방정식. 중·통찰 없음·M_total 6 → ★2. 결합 계수 행렬식 7≠0 이므로 a∥b 가 강제된다는 지름길(b=−a → x=−2, y=1)이 있으나 필수는 아님. 함정은 −2/3 곱셈의 부호·분수 정리.
  tier: star_2
  mechanism_primary: "2a−b, a+3b 성분 → a+3b=k(2a−b) → k=−2/3 → x=−2, y=1 → x+y=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 성분과 b 의 미지 성분 형태(x−1, 2y+2)·결합 계수를 바꿀 수 있음. 제약: 미지수 없는 성분 하나를 남겨 k 가 바로 정해지게 · x, y 정수 · 결합 계수 행렬식 ≠ 0."
    creative: "(1) 「a∥b 가 아니면 2a−b 와 a+3b 는 평행할 수 없다」를 근거로 b=ka 로 바로 푸는 풀이를 요구하는 서술형 → I-EQV d1(★3) (2) 평행 조건에 |b|=|a| 크기 조건을 더해 k 의 부호를 검증 → I-VF(★3) (3) 평면벡터 두 개로 줄여 0596 골조(★2)."
```

### 유형 07 벡터 $\overrightarrow{\pt{AB}}$의 성분

```yaml
- id: RPM-GEO-0598
  page: 91
  vendor_label: '유형 07 벡터 $\overrightarrow{\pt{AB}}$의 성분'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A(2, 1, 2), B(−2, −3, 2), C(3, 0, −1), D(a, b, c) 에 대해 AB 와 2CD 가 같은 벡터일 때 a+b+c. 5지선다.
  category: "AB=B−A 성분 → 2CD 성분 → 상등 → a, b, c"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 AB 의 성분(종점−시점)과 상등"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(−4, −4, 0), 2CD=(2a−6, 2b, 2c+2) → a=1, b=−2, c=−1 → a+b+c=−2 → ②. 종점−시점으로 성분을 만들고 상등으로 세 일차방정식. 통찰 없음·M_total 5 로 −1 후보이나 대표문제이고 CD 에 2 배가 붙어 단계가 둘이라 ★2 유지. 함정은 AB=A−B 로 뒤집는 부호와 2 배를 D 성분에만 곱하는 실수.
  tier: star_2
  mechanism_primary: "AB=B−A=(−4,−4,0) → 2CD=2(D−C)=(2a−6, 2b, 2c+2) → 상등 → (a,b,c)=(1,−2,−1) → 합 −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표와 배수(2)를 바꾸되 D 가 정수 좌표가 되게(AB 성분이 배수로 나누어떨어지게) 역산. 제약: a+b+c≠0 · 선택지 간격 2."
    creative: "(1) 「같은 벡터」를 「평행」으로 바꾸면 D 가 직선 위 자유점 → 조건 하나 추가(예: D 가 xy 평면 위)로 확정(★2~3 · I-CON) (2) 사각형 ABDC 가 평행사변형이 되는 D → AB=CD 로 같은 골조(★2) (3) |AB|=|CD| 크기 조건으로 바꾸면 구 위의 점(★3)."
```

```yaml
- id: RPM-GEO-0599
  page: 91
  vendor_label: '유형 07 벡터 $\overrightarrow{\pt{AB}}$의 성분'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(2, 2), B(1, 3), C(4, −4), D(1, a) 에 대해 AB∥CD 일 때 a. 5지선다.
  category: "AB, CD 성분 → 평행 조건(교차곱) → a"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 AB 의 성분과 평행 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(−1, 1), CD=(−3, a+4) → 평행 ⟺ (−1)(a+4)=1·(−3) → a=−1 → ②. 성분 두 개와 교차곱 한 번. 중하·통찰 없음·M_total 4 → ★1. CD=3AB 로 보면 a+4=3 이 바로 보인다.
  tier: star_1
  mechanism_primary: "AB=(−1,1), CD=(−3, a+4) → CD=kAB → k=3 → a+4=3 → a=−1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표를 바꾸되 CD 의 미지수 없는 성분이 AB 의 정수배가 되게. 제약: AB≠0 · a 정수 · 선택지 −2~2 연속 정수."
    creative: "(1) 평행 대신 수직(AB·CD=0)(★1~2) (2) 세 점 A, B, D 가 한 직선 위에 있을 조건(AB∥AD)으로 바꾸기(★2) (3) D 가 직선 y=x 위에 있고 AB∥CD 인 D 를 구하기 → 미지수 둘·조건 둘 연립(★2 · I-CON 약함)."
```

```yaml
- id: RPM-GEO-0600
  page: 91
  vendor_label: '유형 07 벡터 $\overrightarrow{\pt{AB}}$의 성분'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(3, 1, −2), B(1, 2, −1), C(−1, 0, 3) 에 대해 |PA+PB+PC|=9 를 만족시키는 점 P 가 나타내는 도형의 부피.
  category: "PA+PB+PC=3PG → |PG|=3 → 구 → 부피"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 합의 크기 조건 |PA+PB+PC|=9 를 무게중심 G(1,1,0) 으로 묶어 |PG|=3, 즉 중심 G 반지름 3 인 구라는 자취로 옮김(성분으로 풀어도 (x−1)²+(y−1)²+z²=9 로 같은 전환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 조건을 만족시키는 점의 자취(구)와 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PA+PB+PC=(A+B+C)−3P=3(G−P), G=(1, 1, 0) → |PG|=3 → 중심 G 반지름 3 인 구 → 부피 (4/3)π·27=36π. 벡터 조건을 도형(구)으로 옮기는 표현 전환 1개(RT d1). P(x, y, z) 를 놓고 성분으로 전개해도 9{(x−1)²+(y−1)²+z²}=81 로 같은 곳에 이른다. 중·통찰 1·M_total 7 → 라벨 ★2 유지. 함정은 9 를 반지름으로 착각하거나 부피 대신 겉넓이를 구하는 것.
    [분류 이슈] 통찰 1(RT d1)·M_total 7 로 ★3 후보이나 벤더 중 → 라벨 ★2 유지.
  tier: star_2
  mechanism_primary: "PA+PB+PC=3PG (G=(1,1,0)) → |PG|=3 → 구 → V=(4/3)π·3³=36π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표(무게중심이 정수)와 우변(3 의 배수)을 바꾸면 반지름이 바뀜. 제약: 우변÷3 이 반지름이므로 부피가 π 의 정수배가 되게 · 평면 세 점으로 줄이면 원의 넓이(★2)."
    creative: "(1) 우변을 |PA−PB| 같은 벡터 크기로 바꾸면 반지름을 계산해야 함(★3) (2) 조건을 |PA+2PB|=k 처럼 가중치로 바꾸면 중심이 내분점(1:2)이 됨 → I-RT d2(★3) (3) 구 위의 점 P 에 대해 |PA| 의 최댓값·최솟값 → 중심 거리 ± 반지름(★3 · I-RT)."
```

```yaml
- id: RPM-GEO-0601
  page: 91
  vendor_label: '유형 07 벡터 $\overrightarrow{\pt{AB}}$의 성분'
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    A(−1, 0), B(1, 2) 와 직선 y=x−1 위의 점 P 에 대해 |AP+BP| 의 최솟값.
  category: "AP+BP=2MP(M 중점) → |MP| 최소 = 점과 직선 사이 거리 → ×2"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP+BP 를 중점 M(0,1) 로 묶어 2MP 로 바꾸고, |MP| 의 최솟값을 점 M 과 직선 x−y−1=0 사이 거리로 옮김(P(t, t−1) 로 놓아 8t²−16t+16 의 최솟값으로 가도 됨)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 합의 크기의 최솟값(중점으로 묶기 · 점과 직선 사이 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AP+BP=2P−(A+B)=2MP, M=(0, 1) → |AP+BP|=2|MP| → 최솟값 2·|0−1−1|/√2=2√2. 두 벡터 합을 중점 한 점으로 묶는 표현 전환 1개(RT d1)와 점-직선 거리 공식. P(t, t−1) 로 두고 |AP+BP|²=8t²−16t+16 의 최솟값(t=1)으로 가는 대수 경로도 같은 길이라 전략 분기로는 세지 않음. 상중·서술형·통찰 1·M_total 7 → ★3. 함정은 2 배를 빠뜨려 √2 로 답하는 것.
  tier: star_3
  mechanism_primary: "AP+BP=2MP (M=(0,1)) → |MP| 최소 = d(M, x−y−1=0)=√2 → 최솟값 2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선을 바꾸되 중점이 정수점이고 점-직선 거리가 √2·√5 등 간단한 무리수가 되게. 제약: 중점이 직선 위에 있으면 최솟값 0 이 되어 문제가 무너짐 · 서술형이면 중점 묶기 단계를 채점 기준으로."
    creative: "(1) |AP+BP+CP| 세 점으로 늘리면 무게중심으로 묶어 3|GP|(★3) (2) |AP+BP| 대신 |AP|+|BP| 로 바꾸면 대칭점(반사) 문제로 유형이 달라짐 → I-SYM(★3~4) (3) P 를 원 위의 점으로 바꾸면 중심 거리 ± 반지름(★3 · I-RT) (4) 최솟값이 되는 P 의 좌표까지 묻기(수선의 발)(★3)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 10 · ★2 21 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(0588 · 0600 · 0601 — 모두 I-RT d1) · 절차형 31 · premium 0
- type_hint 상위: 「내분점·중점의 위치벡터 표현」 6(0572~0577) · 「성분으로 주어진 벡터의 연산(식 정리·벡터 방정식·크기)」 6(0582 0583 0585 0586 0587 0589) · 「벡터의 상등(성분 비교·일차결합)」 5(0590~0593 0598) · 「두 벡터의 평행 조건」 5(0594~0597 0599) · 「무게중심의 위치벡터」 4(0578~0581) · 「두 벡터가 이루는 각·수직 조건」 4(0568~0571)
- 그 밖: 단위벡터 조건 1(0584) · |a+tb| 최솟값 1(0588) · 자취(구) 1(0600) · 벡터 합의 크기 최솟값 1(0601)
- 그림: 8문(`crop:fig-0572.png` `crop:fig-0573.png` `crop:fig-0574.png` `crop:fig-0576.png` `crop:fig-0577.png` `crop:fig-0578.png` `crop:fig-0580.png` `crop:fig-0581.png`)
- 벤더 태그: 대표문제 7(0572 0578 0582 0586 0590 0594 0598) · 서술형 2(0577 0601) · 기출 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0576 | 벤더 상중이나 통찰 없음·M_total 5 → 절차형 ★2 후보. 라벨 ★3 유지 | ★2 / ★3 |
| RPM-GEO-0577 | 벤더 상중·서술형이나 통찰 없음·M_total 5 → 절차형 ★2 후보. 라벨 ★3 유지 | ★2 / ★3 |
| RPM-GEO-0600 | 벤더 중이나 통찰 1(RT d1)·M_total 7 → ★3 후보. 라벨 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「내분점·중점의 위치벡터 표현」 6 · 「무게중심의 위치벡터」 4 → 카탈로그에서는 「위치벡터 표현(내분점·중점·무게중심)」 한 유형으로 통합 가능. 다만 2단 내분(0572 0576)과 공간 도형(사면체 0574 0581 · 직육면체 0576)은 base ★ 를 +1 로 두는 sub-variant 로 구분.
- 유형 03(평면)·04(공간) 성분 연산은 절차가 같아 평면/공간을 나눌 이유가 없음 → 「성분 연산·벡터 방정식·크기」 하나로 통합하고 단위벡터 조건(0584)·방향이 같은 벡터(0589)는 그 안의 sub 로.
- 유형 05 상등(0590~0593)과 유형 07 의 AB 상등(0598), 유형 06 평행(0594~0597)과 유형 07 의 AB 평행(0599)은 각각 통합. 「일차결합 벡터의 평행 → a∥b 강제」(0596 0597)는 유형이 아니라 창의 변형 재료(I-EQV)로 메모.
- 따로 세울 유형: |a+tb| 의 최솟값(0588) · 벡터 조건의 자취(0600) · 벡터 합의 크기 최솟값(0601). 이 범위의 통찰형 전부이며 base ★3 후보. 0600 의 자취는 05 단원 평면벡터 자취 유형과 골조가 같으므로 평면/공간을 한 유형으로.
- 교과서 06-5(각·수직 0568~0571)는 다음 조각의 내적 유형(유형 08 이후)의 기본 유형과 합쳐 base ★1.
