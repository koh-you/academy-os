---
name: mechanism-데이터-RPM-GEO-06-p4
description: RPM 기하 06 벡터의 성분과 내적(4/4 · 유형 17 · 유형UP 18~19 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 06 벡터의 성분과 내적
  unit_code: GEO-06
  part: "4/4"
  extract_range: "96~101쪽 · 0635~0674"
  total_problems: 40
  unit_total: 143
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 06 벡터의 성분과 내적 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 06 벡터의 성분과 내적의 마지막 범위(96~101쪽 · 0635~0674 · 40문항)를 다룬다. 구역은 유형 17 벡터의 내적을 이용한 삼각형의 넓이(4문) · 유형UP 18 삼각형에서 내분점의 위치벡터의 활용(4문) · 유형UP 19 점의 자취(3문) · 시험에 꼭 나오는 문제(22문) · 서술형 주관식(4문) · 실력 Up(3문)이다. RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 ★1 / 유형 ★1~2 / 유형 UP ★3 / 시험에 꼭 나오는 문제 ★2~3 / 서술형 ★3 / 실력 Up ★4 출발)이고, 유형 구역 문항에만 난이도 표시(중·상중)가 붙는다. 이 범위의 태그는 대표문제 3(0635·0639·0643) · 중요 4(0651·0656·0662·0666) · 수능 기출 1(0673), 그림은 10문이다. 출발점에서 M_total·통찰로 ±1 조정한 결과 ★1 7 · ★2 22 · ★3 9 · ★4 2 · ★5 0 이고, 통찰형은 10문(벡터 등식 → 넓이비 RT · 자취 정규화 EQV · 내적 조건 → 직선 자취 RT · 지름→직각 RT · 원 위의 점 중심 분해 RT · 지름 인식 EQV + 중심 재표현 CON)이다. 벤더 신호와 판정이 갈리는 4문(0638·0643·0672·0674)은 라벨을 억지로 맞추지 않고 [분류 이슈] 로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 반복되는 골조는 「내적 넓이 공식 ½√(|a|²|b|²−(a·b)²)」 · 「벡터 등식 → 점의 위치 → 넓이비」 · 「계수 조건 → 자취」 · 「성분 비교(평행·수직·같은 벡터)」 · 「크기 제곱 전개 → 내적」 · 「원 위의 점을 중심 기준으로 분해」 여섯이다.

## 문항 데이터

### 유형 17 벡터의 내적을 이용한 삼각형의 넓이

```yaml
- id: RPM-GEO-0635
  page: 96
  vendor_label: "유형 17 벡터의 내적을 이용한 삼각형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    O(0, 0), A(2, -1), B(1, -3) 을 꼭짓점으로 하는 삼각형 OAB 의 넓이를 벡터의 내적으로 구하기. 주관식.
  category: "두 변 벡터의 크기·내적 → S = ½√(|a|²|b|²−(a·b)²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적을 이용한 삼각형의 넓이 — 원점 꼭짓점 좌표 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    OA=(2, −1), OB=(1, −3) 에서 |OA|²=5, |OB|²=10, OA·OB=5 → S=½√(50−25)=5/2. 공식 한 번 대입이 전부라 통찰 0·M_total 4. 유형 대표문제 출발점 ★2 에서 −1 조정 → ★1.
  tier: star_1
  mechanism_primary: "|OA|², |OB|², OA·OB 계산 → ½√(|OA|²|OB|²−(OA·OB)²) → 5/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 작은 정수로 자유롭게. 제약: |a|²|b|²−(a·b)² 이 완전제곱수(또는 답이 깔끔한 근호)가 되게 고르고, 두 점이 O 와 한 직선 위(넓이 0)가 아니어야 함."
    creative: "(1) 꼭짓점 하나를 원점이 아닌 점으로 옮겨 변 벡터를 먼저 구하게(0638 골조 · ★2) (2) 넓이를 주고 한 좌표를 미지수로 역산(★2 · 절댓값 두 해) (3) 신발끈 공식과 답이 같음을 확인하는 계산 비교(★1)."
```

```yaml
- id: RPM-GEO-0636
  page: 96
  vendor_label: "유형 17 벡터의 내적을 이용한 삼각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 |AB|=3, |AC|=4, AB·AC=6 일 때 삼각형의 넓이(그림). 5지선다.
  category: "크기·내적 대입 → S = ½√(|a|²|b|²−(a·b)²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적을 이용한 삼각형의 넓이 — 크기·내적이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S=½√(9·16−36)=½√108=3√3 → ②. (cos A=6/12=1/2 → A=60° → ½·3·4·sin60° 로 해도 같음.) 공식 대입 한 줄·통찰 0·M_total 4. 유형 「중」 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "|AB|, |AC|, AB·AC 대입 → ½√(144−36)=3√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0636.png"
  latex: latex-bank/rpm-geo/items/0636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기(3, 4)와 내적(6)을 바꾸되 |a|²|b|²−(a·b)²>0(코시-슈바르츠)이고 근호가 정리되게. 내적을 크기 곱의 1/2·√3/2 배로 두면 각이 60°·30° 로 떨어짐. 그림 라벨 A, B, C 고정."
    creative: "(1) 내적 대신 |AB+AC| 또는 |AB−AC| 를 주어 내적을 먼저 역산(★2) (2) 넓이를 주고 내적(또는 각)을 묻는 역방향(★2 · 부호 두 갈래 MI d1) (3) 평행사변형 넓이로 확장해 ×2 함정(★2)."
```

```yaml
- id: RPM-GEO-0637
  page: 96
  vendor_label: "유형 17 벡터의 내적을 이용한 삼각형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    좌표공간의 O(0, 0, 0), A(3, -1, -2), B(2, -3, 1) 에 대한 삼각형 OAB 의 넓이. 주관식.
  category: "공간 성분으로 크기·내적 → S = ½√(|a|²|b|²−(a·b)²)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적을 이용한 삼각형의 넓이 — 공간좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |OA|²=14, |OB|²=14, OA·OB=6+3−2=7 → S=½√(196−49)=½√147=7√3/2. 평면과 같은 공식이나 공간 성분 셋의 제곱합·내적과 √147 정리가 한 줄을 넘어 Mₖ 2. 통찰 0·M_total 5 → 유형 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "공간 성분으로 |OA|², |OB|², OA·OB → ½√(14·14−49) → 7√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7\sqrt{3}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 공간좌표를 바꿀 수 있음. 제약: |a|²|b|²−(a·b)² 이 (정수)²×(작은 수) 꼴이 되게(147=49·3) · 두 점이 O 와 한 직선 위가 아니게(성분 비가 같지 않게)."
    creative: "(1) 원점이 아닌 세 점으로 주어 변 벡터 계산 추가(★2) (2) 한 좌표를 매개변수 t 로 두고 넓이가 최소가 되는 t(이차식 최소 · Mₐ 2 · ★3) (3) 삼각형 넓이와 xy 평면 위 정사영 넓이를 잇는 단원 연결(★3)."
```

```yaml
- id: RPM-GEO-0638
  page: 96
  vendor_label: "유형 17 벡터의 내적을 이용한 삼각형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(3, 6), B(0, 2), C(-1, 6) 을 꼭짓점으로 하는 삼각형 ABC 의 넓이를 내적으로 구하기. 5지선다.
  category: "변 벡터 AB, AC 계산 → 크기·내적 → S = ½√(|a|²|b|²−(a·b)²)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적을 이용한 삼각형의 넓이 — 꼭짓점이 원점이 아닌 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(−3, −4), AC=(−4, 0) → |AB|²=25, |AC|²=16, AB·AC=12 → S=½√(400−144)=½·16=8 → ④. 0635 와 같은 공식에 변 벡터를 먼저 구하는 단계 하나가 붙음. 통찰 0·M_total 5 → 유형 「상중」 출발점 ★3 에서 −1 → ★2.
    [분류 이슈] 벤더 「상중」이나 골조는 0635(★1)와 같고 꼭짓점 이동 한 단계뿐이라 ★2 라벨. 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "AB, AC 성분 → |AB|², |AC|², AB·AC → ½√(400−144)=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: 400−144 처럼 근호 안이 완전제곱수가 되게 변 벡터를 (3, 4)·(4, 0) 같은 피타고라스 쌍으로 짜면 답이 정수. 세 점이 한 직선 위가 아니게."
    creative: "(1) 한 꼭짓점을 (a, b) 로 두고 넓이 조건에서 a+b 를 묻기(★2~3 · 절댓값 두 갈래) (2) 세 점을 공간좌표로 확장(★2) (3) 「내적으로」 조건을 빼고 방법 선택을 열면 신발끈·내적 갈래 비교 SC d1(★2)."
```

### 유형UP 18 삼각형에서 내분점의 위치벡터의 활용

```yaml
- id: RPM-GEO-0639
  page: 97
  vendor_label: "유형UP 18 삼각형에서 내분점의 위치벡터의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    점 P 와 삼각형 ABC 가 5PA+2PB+PC=BC 를 만족할 때 삼각형 CAP 와 삼각형 CBP 의 넓이의 비. 주관식.
  category: "P 기준 위치벡터 정리 → PA, PB 의 배율 관계 → P 의 위치 → 밑변비=넓이비"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5PA+3PB=0 → P 가 선분 AB 를 3:5 로 내분 → 꼭짓점 C 공통이므로 넓이비를 AP:PB 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형에서 내분점의 위치벡터의 활용 — 벡터 등식 → 점의 위치 → 넓이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC=PC−PB 를 대입하면 5PA+3PB=0, 즉 PA=−(3/5)PB 이므로 P 는 선분 AB 위에서 AP:PB=3:5 인 점. 두 삼각형은 꼭짓점 C 를 공유하고 밑변이 AP, PB 라 넓이비 3:5. 벡터 등식을 점의 위치·넓이비로 옮기는 RT d1 하나·M_total 6 → 유형UP 대표문제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "BC=PC−PB 대입 → 5PA+3PB=0 → P∈AB, AP:PB=3:5 → △CAP:△CBP=3:5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3:5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (5, 2, 1) 과 우변(BC · AC · CA 등)을 바꿀 수 있음. 제약: 정리한 뒤 두 벡터의 계수가 양수 둘(P 가 변 위 내분점)이 되게 하고 비가 서로소로 떨어지게. 우변을 0 으로 두면 P 가 삼각형 내부로 가서 0642 골조가 됨."
    creative: "(1) 우변을 0 으로 바꿔 P 를 내부점으로 두고 세 삼각형의 넓이비(★3 · 내분점 D 도입 RT d2) (2) 넓이비를 주고 계수를 역산하는 BW(★3) (3) 「P 가 변 AB 위에 있음」을 보기 ㄱㄴㄷ 로 판정하게(0641 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0640
  page: 97
  vendor_label: "유형UP 18 삼각형에서 내분점의 위치벡터의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    삼각형 ABC 에서 AC+3PC+7PA=0 일 때 P 가 변 CA 를 m:n(서로소)으로 내분한다고 할 때 m−n 의 값. 주관식.
  category: "AC=PC−PA 대입 → 4PC+6PA=0 → P 의 위치(CP:PA) → 내분비 읽기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형에서 내분점의 위치벡터의 활용 — 벡터 등식 → 내분비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AC=PC−PA 를 대입해 정리하면 4PC+6PA=0, 즉 PC=−(3/2)PA 이므로 P 는 선분 CA 위에서 |PC|:|PA|=3:2. 「변 CA 를 m:n 으로」는 C 쪽부터 세므로 CP:PA=3:2 → m−n=1. 벡터 등식을 내분비로 읽는 표준 절차이고 비의 순서(T-표기)·방향 부호(T-부호)가 함정. 통찰 0·M_total 7 → 유형UP 「중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AC=PC−PA → 2PC=−3PA → P∈CA, CP:PA=3:2 → m−n=1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (1, 3, 7) 을 바꾸되 정리 후 PA, PC 의 계수가 서로 부호 반대(내분)가 되게. 비 m:n 이 서로소가 되게 하고, 답을 m+n·mn 으로 바꿔도 됨."
    creative: "(1) 정리 후 두 계수가 같은 부호가 되게 해 외분점(★3~4 · T-부호) (2) 우변을 AB 같은 다른 변으로 두어 P 가 삼각형 내부(★3~4) (3) 내분비 대신 △PAB:△PBC 넓이비를 물어 RT 추가(★3)."
```

```yaml
- id: RPM-GEO-0641
  page: 97
  vendor_label: "유형UP 18 삼각형에서 내분점의 위치벡터의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    PA+PB+PC=AB 일 때 보기 ㄱ. PC=−2PA ㄴ. P 는 변 AC 를 2:1 로 내분 ㄷ. △PAB:△PBC=1:2 중 옳은 것. 주관식(보기).
  category: "AB=PB−PA 대입 → 2PA+PC=0 → P 위치(AP:PC=1:2) → 넓이비 → 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2PA+PC=0 → P 가 AC 를 1:2 로 내분 → 꼭짓점 B 공통으로 △PAB:△PBC=AP:PC 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형에서 내분점의 위치벡터의 활용 — 위치·넓이비 보기 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB=PB−PA 를 대입하면 2PA+PC=0 (ㄱ 참). PC=−2PA 이므로 P 는 선분 AC 위 AP:PC=1:2, 즉 1:2 내분점(ㄴ 의 2:1 은 거짓). B 를 공유하므로 △PAB:△PBC=AP:PC=1:2 (ㄷ 참) → ㄱ, ㄷ. 넓이비로 옮기는 RT d1·비 순서 함정(ㄴ)·M_total 7 → 유형UP 「중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=PB−PA → 2PA+PC=0 → AP:PC=1:2 → △PAB:△PBC=1:2 → ㄱ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 우변 변(AB · BC · CA)을 바꾸면 P 가 놓이는 변과 비가 바뀜. 제약: 보기 ㄴ 은 참인 비를 뒤집은 오답으로, ㄷ 은 참인 넓이비로 재작성. 정리 뒤 두 항만 남게 계수 합을 맞춤."
    creative: "(1) 보기 하나를 「P 는 삼각형 내부의 점」처럼 위치 명제로 바꿔 판정(★3) (2) 우변을 0 으로 두어 내부점 + 세 넓이비 보기(★3~4) (3) 조건을 |PA+PB+PC|=|AB| 크기 등식으로 바꾸면 위치가 결정되지 않아 자취 문제로 변신(★4)."
```

```yaml
- id: RPM-GEO-0642
  page: 97
  vendor_label: "유형UP 18 삼각형에서 내분점의 위치벡터의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    넓이 90 인 삼각형 ABC 의 내부의 점 P 가 4AP+3BP+2CP=0 을 만족할 때 삼각형 ABP 의 넓이. 주관식.
  category: "4PA+3PB=−2PC → AB 의 내분점 D(3:4)로 묶기 → P∈CD, CP:PD=7:2 → 높이비 → 넓이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4PA+3PB 를 7PD(D 는 AB 를 3:4 로 내분)로 묶어 P 를 CD 위 CP:PD=7:2 인 점으로 해석 → △ABP=△ABC×PD/CD"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형 내부점의 벡터 등식 → 세 삼각형의 넓이비(내분점 묶기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4PA+3PB+2PC=0 에서 4PA+3PB=7PD (D 는 AB 를 3:4 로 내분)로 묶으면 7PD=−2PC, 즉 P 는 CD 위 CP:PD=7:2. 밑변 AB 공통이므로 △ABP=△ABC×PD/CD=90×2/9=20. 두 항을 내분점 하나로 묶는 착안이 RT d2·M_total 6 → 유형UP 「상중」 출발점 ★3 유지(+1 조건 미달). 「αPA+βPB+γPC=0 이면 세 넓이비 α:β:γ」 를 알면 한 줄.
  tier: star_3
  mechanism_primary: "4PA+3PB=7PD(D=AB 의 3:4 내분점) → 7PD=−2PC → CP:PD=7:2 → 90×2/9=20"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (4, 3, 2) 와 전체 넓이 90 을 바꿀 수 있음. 제약: 세 계수 모두 양수(내부점)·넓이가 계수 합(9)으로 나누어떨어지게. 구하는 삼각형을 BCP·CAP 로 바꾸면 답이 계수 4·3 에 대응."
    creative: "(1) 계수 하나를 음수로 두어 P 가 외부(★4 · T-부호) (2) 세 넓이비를 주고 계수를 역산하는 BW(★3~4) (3) PA+PB+PC=0(무게중심)으로 줄이면 ★2, P 가 내심(계수 a:b:c)인 경우로 확장하면 XU d1 ★4."
```

### 유형UP 19 점의 자취

```yaml
- id: RPM-GEO-0643
  page: 97
  vendor_label: "유형UP 19 점의 자취"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    O(0, 0), A(4, 0), B(0, 2) 에 대해 OP=mOA+nOB (m+n≤1, m≥0, n≥0) 인 점 P 가 나타내는 도형의 넓이. 주관식.
  category: "계수 조건 m+n≤1, m, n≥0 → 삼각형 OAB 와 내부 → 넓이"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 자취 — mOA+nOB 의 계수 조건(m+n≤1) → 삼각형 영역"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    m+n=1, m, n≥0 이면 선분 AB, m+n≤1 까지 허용하면 삼각형 OAB 의 둘레와 내부. 넓이 ½·4·2=4. 「점의 자취」 유형의 정의 사실을 그대로 적용하는 한 단계라 통찰로 세지 않음. 통찰 0·M_total 5 → 유형UP 대표문제 출발점 ★3 에서 −1 → ★2.
    [분류 이슈] 계수 조건 → 영역 해석을 유형 정의 사실(절차)로 봤음. 카탈로그에서 이 해석을 RT d1 로 세면 ★3. 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "m+n≤1, m, n≥0 → P 는 △OAB 내부·둘레 → ½·4·2=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표(축 위)를 바꾸면 넓이 ½|OA||OB|. 제약: 부등호 방향과 등호 포함 여부를 바꾸면 영역이 달라지므로 답과 맞춤. 세 점이 한 직선 위가 아니게."
    creative: "(1) A, B 를 축 밖 일반 점으로 두어 넓이를 내적 공식으로(0635 결합 · ★2) (2) 조건을 1≤m+n≤2 로 바꿔 사다리꼴 영역(★3 · EQV d1) (3) m+n=1 을 4m+6n=3 처럼 정규화가 필요한 식으로(0645 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0644
  page: 97
  vendor_label: "유형UP 19 점의 자취"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    O(0, 0), A(4, 0), B(0, 3) 에 대해 OP=mOA+nOB (m+n=1, m≥0, n≥0) 인 점 P 가 나타내는 도형의 길이. 5지선다.
  category: "계수 조건 m+n=1, m, n≥0 → 선분 AB → 길이"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 자취 — 계수 조건(m+n=1) → 선분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    m+n=1, m, n≥0 이면 P 는 선분 AB 위 → 길이 √(16+9)=5 → ④. 자취 유형의 정의 사실 한 단계·통찰 0·M_total 5 → 유형UP 「중」 출발점 ★3 에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "m+n=1, m, n≥0 → 선분 AB → |AB|=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 피타고라스 쌍(3-4-5 · 5-12-13)으로. 제약: m, n≥0 을 빼면 직선 AB 전체가 되어 길이가 무한이므로 조건과 답의 종류를 맞춤."
    creative: "(1) m, n≥0 을 빼고 「직선 AB 와 원점 사이의 거리」로(★2) (2) 조건을 2m+n=2 처럼 정규화가 필요한 식으로(0645 골조 · EQV d2 · ★3) (3) 선분 위 점 P 에 대해 |OP| 의 최솟값(★2~3 · 거리)."
```

```yaml
- id: RPM-GEO-0645
  page: 97
  vendor_label: "유형UP 19 점의 자취"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    한 직선 위에 있지 않은 O, A, B 에 대해 4m+6n=3, m≥0, n≥0 일 때 OP=mOA+nOB 인 점 P 의 자취(선택지: 내분점·중점을 잇는 선분 등). 5지선다.
  category: "계수 합을 1 로 정규화 → 새 기준점 (3/4)OA, (1/2)OB → 두 점을 잇는 선분"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4m+6n=3 을 (4m/3)+2n=1 로 바꾸고 OP=(4m/3)·(3/4)OA+(2n)·(1/2)OB 로 다시 묶어 계수 합 1 인 표준형으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점의 자취 — 계수 조건의 정규화(am+bn=c) → 새 기준점을 잇는 선분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4m+6n=3 을 (4m/3)+2n=1 로 쓰고 m'=4m/3, n'=2n 이라 하면 OP=m'·(3/4)OA+n'·(1/2)OB, m'+n'=1, m', n'≥0. 따라서 P 는 OA 를 3:1 로 내분하는 점과 OB 의 중점을 잇는 선분 → ④. 조건을 표준형으로 옮기는 동치 변환 EQV d2·내분 순서 함정(⑤)·M_total 7 → 유형UP 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "4m+6n=3 → (4m/3)+2n=1 → OP=m'·(3/4)OA+n'·(1/2)OB → (3/4)OA 인 점과 OB 의 중점을 잇는 선분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (4, 6, 3) 을 바꾸면 기준점이 (c/a)OA, (c/b)OB. 제약: c/a, c/b 가 1 이하면 내분점(초과면 연장선 위 점)이 되어 선택지 서술이 바뀌므로 비가 간단한 분수가 되게. 오답 선택지는 내분 순서를 뒤집은 것으로 유지."
    creative: "(1) 부등식 4m+6n≤3 으로 바꿔 삼각형 영역의 넓이(원 삼각형과의 넓이비 · ★3) (2) 좌표를 주고 자취 선분의 길이·중점을 묻기(★3) (3) 정규화 계수를 문자 k 로 두어 자취가 항상 지나는 점을 묻는 Mₐ 3 형(★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0646
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    AB=4, AC=3 인 삼각형 ABC 에서 ∠A 의 이등분선이 BC 와 만나는 점 D 에 대해 AD=mAB+nAC 일 때 m−n 의 값(그림). 5지선다.
  category: "각의 이등분선 정리 BD:DC=4:3 → 내분점 공식 → 계수 읽기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각의 이등분선의 발 → 내분점의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각의 이등분선 정리로 BD:DC=AB:AC=4:3 → AD=(3AB+4AC)/7 → m=3/7, n=4/7, m−n=−1/7 → ①. 이등분선 정리 + 내분점 공식의 표준 두 단계이고 계수 순서(BD:DC=4:3 이면 AB 계수가 3)가 함정. 통찰 0·M_total 6 → 「시험에 꼭」 출발점 ★2.
  tier: star_2
  mechanism_primary: "이등분선 정리 BD:DC=4:3 → AD=(3AB+4AC)/7 → m−n=−1/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0646.png"
  latex: latex-bank/rpm-geo/items/0646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC 의 길이(4, 3)를 바꾸면 m=AC/(AB+AC), n=AB/(AB+AC). 제약: 합이 분모가 되므로 선택지 분수와 맞추고 그림 라벨(B, D, C 순서) 고정. m+n 은 항상 1 이라 묻지 않음."
    creative: "(1) 외각의 이등분선으로 바꿔 외분점(★3 · T-부호) (2) ∠A 를 추가로 주고 |AD| 를 내적으로 구하기(★3) (3) D 대신 내심 I 의 위치벡터(세 변 길이 가중)로 확장(★3~4)."
```

```yaml
- id: RPM-GEO-0647
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼각형 ABC 에서 Q, R 가 각각 CB, CA 의 중점이고 P=AQ∩BR 일 때, CA=a, CB=b 로 CP=xa+yb 라 하면 xy 의 값(그림). 5지선다.
  category: "두 중선의 교점 = 무게중심 → CP=(a+b)/3 → xy"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무게중심(두 중선의 교점)의 위치벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AQ, BR 는 두 중선이므로 P 는 무게중심, CP=(CA+CB)/3=(1/3)a+(1/3)b → xy=1/9 → ④. 무게중심을 못 봐도 CP=(1−t)a+(t/2)b=(s/2)a+(1−s)b 의 일차독립 연립으로 t=s=2/3 이 나옴. 인식 갈래가 한 줄이나 연립 갈래도 표준이라 통찰로 세지 않음. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P=무게중심 → CP=(a+b)/3 → x=y=1/3 → xy=1/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0647.png"
  latex: latex-bank/rpm-geo/items/0647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중점을 유지하면 답은 항상 1/9. 바꾸려면 Q, R 를 1:2 등 다른 내분점으로 두고 연립을 풀게 함(x, y 가 달라짐). 제약: 두 선분이 삼각형 내부에서 만나도록 두 점이 각 변의 내분점이어야 함. 그림 라벨(a, b 화살표 · 중점 표시) 고정."
    creative: "(1) Q, R 를 1:2 내분점으로 바꾸면 무게중심 인식이 막혀 매개변수 연립이 강제(★3 · Mₛ 3) (2) x+y 나 |CP|(변 길이·각 추가)를 묻기(★3) (3) AP:PQ 의 비를 묻는 메넬라우스 대체형(★3)."
```

```yaml
- id: RPM-GEO-0648
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(1, -2), b=(3, 1) 에 대해 |3(a+b)−2b| 의 값. 5지선다.
  category: "식 정리 3a+b → 성분 → 크기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분 연산과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3(a+b)−2b=3a+b=(6, −5) → √61 → ②. 식 정리 한 번·성분 계산 한 줄. 통찰 0·M_total 4 → 「시험에 꼭」 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "3(a+b)−2b=3a+b → (6, −5) → √61"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 계수(3, 2)를 바꿀 수 있음. 제약: 정리 후 벡터 성분이 정수, 크기가 선택지와 구별되는 근호(61 처럼 소수)가 되게."
    creative: "(1) |ka+b| 의 최솟값을 묻는 이차식(★2) (2) |3(a+b)−2b|=|a−b| 처럼 등식으로 미지 성분 역산(★2) (3) 공간벡터로 확장(★1)."
```

```yaml
- id: RPM-GEO-0649
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(1, 1, 2), b=(k, 3, 3) 에 대해 |b−a|=3 이 되도록 하는 모든 실수 k 의 값의 합. 5지선다.
  category: "b−a 성분 → 크기 제곱 = 9 → k 의 이차식 → 근의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 크기 조건 → 미지수(이차식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b−a=(k−1, 2, 1) → (k−1)²+5=9 → (k−1)²=4 → k=3, −1 → 합 2 → ②. 크기 조건이 이차식 한 줄. 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b−a=(k−1, 2, 1) → (k−1)²+5=9 → k=3, −1 → 합 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 크기 3 을 바꿀 수 있음. 제약: (k−p)²=q² 꼴이 되게 나머지 성분 제곱합과 크기 제곱의 차가 완전제곱수. 합은 항상 2p(근과 계수)."
    creative: "(1) 「합」 대신 「곱」·「양수 k」로 바꿔 필터(★1~2) (2) |b−a| 가 최소가 되는 k 를 묻는 이차식(★2) (3) |b−a|=|b+a| 조건으로 바꾸면 수직 조건 RT d1(★2)."
```

```yaml
- id: RPM-GEO-0650
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(0, 3, -2), B(2, 0, -1), C(2, 2, 0) 을 xy 평면에 대칭이동한 A', B', C' 과 D(3, -5, 4) 에 대해 OD=lOA'+mOB'+nOC' 일 때 l+m+2n 의 값. 주관식.
  category: "xy 평면 대칭(z 부호) → 성분 연립 3원 → l, m, n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 일차결합 — 대칭이동 후 성분 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xy 평면 대칭은 z 부호만 바꿔 A'(0, 3, 2), B'(2, 0, 1), C'(2, 2, 0). 성분 비교 2m+2n=3, 3l+2n=−5, 2l+m=4 를 풀면 l=0, m=4, n=−5/2 → l+m+2n=−1. 대칭이동 한 단계 + 3원 연립. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "xy 대칭(z 부호) → 성분 연립 3개 → (l, m, n)=(0, 4, −5/2) → −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭 평면(yz·zx·원점)과 D 를 바꿀 수 있음. 제약: 세 벡터가 일차독립(행렬식≠0)이어야 해가 유일하고, 연립 해가 간단한 유리수가 되도록 D 를 lA'+mB'+nC' 로 먼저 만들어 역산."
    creative: "(1) 대칭이동 대신 평행이동·원점 대칭으로(★2) (2) l+m+n=1 조건을 추가해 D 가 평면 A'B'C' 위에 있게 하는 미지수 형(★3) (3) 세 벡터 중 하나에 매개변수를 두어 일차종속 조건(★3 · Mₐ 2)."
```

```yaml
- id: RPM-GEO-0651
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(1, 5, 5), b=(x+2, 1, y−1), c=(2, 4, 4) 에 대해 a+b 와 c−b 가 서로 평행할 때 xy 의 값. 주관식.
  category: "a+b, c−b 성분 → 평행 a+b=t(c−b) → 미지수 없는 성분에서 t → x, y"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 평행 조건(공간 성분 · 배율 t)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+b=(x+3, 6, y+4), c−b=(−x, 3, 5−y). 평행이므로 a+b=t(c−b), 둘째 성분에서 t=2 → x+3=−2x → x=−1, y+4=10−2y → y=2 → xy=−2. 미지수 없는 성분에서 배율을 먼저 잡는 표준 절차. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a+b, c−b 성분 → a+b=t(c−b) → t=2(둘째 성분) → x=−1, y=2 → −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 미지수 위치를 바꿀 수 있음. 제약: 미지수가 없는 성분 한 쌍에서 t 가 정수로 결정되게 두고, 나머지 두 식이 일차로 풀리게."
    creative: "(1) 평행 대신 수직(내적 0)으로 바꾸면 미지수 둘에 식 하나 → 조건 추가 필요(★2) (2) 배율 t 를 미지수로 남기고 t 의 값을 묻기(★2) (3) 세 점이 한 직선 위 조건으로 포장(0669 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0652
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2, -1), B(1, 2), C(-1, 3), D(a, b) 에 대해 AB=CD 일 때 a+b 의 값. 5지선다.
  category: "AB, CD 성분 → 성분 비교 → a, b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 벡터(성분 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(−1, 3)=CD=(a+1, b−3) → a=−2, b=6 → a+b=4 → ③. 성분 비교 한 줄. 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB=(−1, 3), CD=(a+1, b−3) → 성분 비교 → a+b=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표를 정수로 자유롭게. 제약: D=C+(B−A) 로 답을 먼저 정하고 선택지에 a−b·ab 등 오답 배치."
    creative: "(1) AB=CD 대신 AB=−2CD 처럼 배율 포함(★1) (2) 사각형 ABDC 가 평행사변형이 되는 D(꼭짓점 순서 함정 · ★2 · MI d1) (3) 공간좌표로 확장(★1)."
```

```yaml
- id: RPM-GEO-0653
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2, 0), B(4, 5), C(-3, 1) 에 대해 |PA+PB+PC|=4 를 만족하는 점 P 가 나타내는 도형의 둘레의 길이. 주관식.
  category: "P(x, y) 로 성분 정리 → 원의 방정식(반지름 4/3) → 둘레"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 자취 — |PA+PB+PC|=k → 무게중심 중심 원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(x, y) 로 두면 PA+PB+PC=(3−3x, 6−3y) 이고 크기 4 → (x−1)²+(y−2)²=(4/3)² → 반지름 4/3 인 원 → 둘레 8π/3. 벡터로는 PA+PB+PC=3PG(G 는 무게중심 (1, 2)) → |PG|=4/3 로 한 줄. 좌표 정리만으로 원이 나오는 표준 절차. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "PA+PB+PC=3PG (G=(1, 2)) → |PG|=4/3 → 원 둘레 2π·4/3=8π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{3}\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표(무게중심이 정수점이 되게 좌표 합이 3 의 배수)와 우변 k(반지름 k/3)를 바꿀 수 있음. 넓이·지름을 묻거나 공간좌표(구의 겉넓이)로 확장 가능."
    creative: "(1) 2PA+PB+PC 처럼 가중해 중심이 가중 내분점(★2~3 · EQV d1) (2) 자취 위 점 P 와 원점 사이 거리의 최댓값(★3 · 중심 거리+반지름) (3) |PA+PB|=|PC| 처럼 양변 모두 P 를 포함시켜 원 방정식 유도(★3)."
```

```yaml
- id: RPM-GEO-0654
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2, 3, 1), B(0, -2, 1), C(a, b, b), D(3, 1, 3) 에 대해 AD∥BC 일 때 a−b 의 값. 주관식.
  category: "AD, BC 성분 → BC=t·AD → 미지수 b 가 든 두 성분에서 t 소거 → a, b"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 평행 조건(공간 성분 · 미지수가 두 성분에 겹침)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD=(1, −2, 2), BC=(a, b+2, b−1). BC=t·AD 에서 b+2=−2t, b−1=2t 를 더하면 2b+1=0 → b=−1/2, t=−3/4, a=t=−3/4 → a−b=−1/4. 미지수가 두 성분에 겹쳐 있어 t 를 소거하는 연립이 한 단계 더. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AD=(1, −2, 2), BC=(a, b+2, b−1)=t·AD → 2b+1=0 → b=−1/2, a=−3/4 → −1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표를 바꿀 수 있음. 제약: C 의 성분에 같은 미지수 b 가 두 번 들어가야 t 소거 연립이 살아 있고, 답이 간단한 분수가 되게 AD 성분을 정한 뒤 C 를 역산."
    creative: "(1) AD∥BC 이고 |BC|=2|AD| 를 추가해 사다리꼴 조건(★2~3) (2) 사각형 ABCD 가 평행사변형이 되는 C(등식으로 바뀜 · ★1) (3) 세 점 B, C, D 가 한 직선 위(0669 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0655
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    지름의 길이가 12 인 원에 내접하는 삼각형 ABC 에서 BC=12, AC=9 일 때 BA·BC 의 값(그림). 5지선다.
  category: "BC 가 지름 → ∠A=90° → BA·BC=|BA|² → 피타고라스"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BC=12=지름 → ∠A=90° 를 읽고 BC=BA+AC, BA⊥AC 로 내적을 |BA|² 하나로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형에서의 내적 — 지름·직각을 이용한 정사영(BA·BC=|BA|²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BC 가 지름이므로 ∠A=90°. BA·BC=BA·(BA+AC)=|BA|²+0=144−81=63 → ③. (cos B=|BA|/|BC| 로 정사영을 써도 같음.) 그림에 직각 표시가 없어 지름→직각을 스스로 읽고 내적을 한 변의 제곱으로 옮기는 RT d1 하나·M_total 5 → 「시험에 꼭」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "BC=지름 → ∠A=90° → BA·BC=|BA|²=12²−9²=63"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0655.png"
  latex: latex-bank/rpm-geo/items/0655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름(=BC)과 AC 를 바꾸되 |BA|²=BC²−AC² 이 정수가 되게(12·9 → 63, 10·6 → 64, 13·5 → 144). 제약: AC<BC. 그림 라벨(A 위·B 왼쪽·C 오른쪽·지름 BC) 고정."
    creative: "(1) 묻는 내적을 CA·CB(=|CA|²=81)로 바꿔 대칭 확인(★2) (2) BC 를 지름이 아닌 현으로 두고 ∠A 를 주면 코사인 정리 결합(★3) (3) 원 위를 움직이는 점 P 에 대해 BP·BC 의 최댓값(0672 골조 · 중심 분해 RT d2 · ★4)."
```

```yaml
- id: RPM-GEO-0656
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정육각형 ABCDEF 에서 CB·AF=−18 일 때 정육각형의 넓이(그림). 주관식.
  category: "두 변 벡터를 평행이동해 각 120° 읽기 → −a²/2=−18 → a=6 → 정삼각형 6개 넓이"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에서의 내적 — 정다각형 변 벡터가 이루는 각(정육각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 변을 a 라 하면 CB 와 AF 는 시점을 맞췄을 때 120° 를 이루므로 CB·AF=a·a·cos120°=−a²/2=−18 → a²=36, a=6. 넓이는 한 변 6 인 정삼각형 6개 = 6·(√3/4)·36=54√3. 각을 60° 로 잘못 읽는 함정(T-부호)·넓이 공식(T-단위)이 있으나 정육각형 내적 계산의 표준 절차. 통찰 0·M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "CB, AF 가 이루는 각 120° → −a²/2=−18 → a=6 → 6·(√3/4)·36=54√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$54\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0656.png"
  latex: latex-bank/rpm-geo/items/0656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적 값 −18 을 −a²/2 꼴이 되게(−8 → a=4, −32 → a=8). 벡터 쌍을 바꾸면 각이 60°(AB·AF 등)·90°·180° 로 달라지므로 값의 부호와 맞춤. 그림 라벨(A~F 배치) 고정."
    creative: "(1) 넓이를 주고 특정 내적을 묻는 역방향(★2) (2) 대각선 벡터(AD·BE 등)의 내적으로 바꿔 크기 2a·√3a 계산 추가(★3) (3) 정육각형을 정팔각형으로 바꾸면 각 135°·√2 계산(★3)."
```

```yaml
- id: RPM-GEO-0657
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 모서리가 1 인 정육면체 ABCD-EFGH 에서 모서리·면대각선 벡터의 내적 다섯 보기(AC·AD, BD·CG, AB·HF, CF·FH, AH·BG) 중 옳지 않은 것(그림). 5지선다.
  category: "정육면체를 좌표(또는 세 모서리 기본벡터)로 두고 보기마다 내적 계산 → 거짓 보기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에서의 내적 — 정육면체 모서리·대각선 벡터의 내적 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E 를 원점, EF·EH·EA 를 축으로 두면 ① AC·AD=(1,1,0)·(0,1,0)=1 ② BD·CG=(−1,1,0)·(0,0,−1)=0 ③ AB·HF=(1,0,0)·(1,−1,0)=1(≠−1) ④ CF·FH=(0,−1,−1)·(−1,1,0)=−1 ⑤ AH·BG=(0,1,−1)·(0,1,−1)=2 → ③. 좌표를 두면 보기 다섯 개가 모두 한 줄 계산이라 통찰 0, 보기 수만큼 Mₖ 2. M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "정육면체 좌표화(모서리 1) → 보기 5개 성분 내적 → ③ AB·HF=1 이 거짓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0657.png"
  latex: latex-bank/rpm-geo/items/0657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이를 a 로 두면 값이 a² 배(①=a², ⑤=2a²). 보기의 벡터 쌍을 바꿔도 되나 답이 되는 보기 하나만 거짓이 되게 부호를 조정. 그림 라벨(A~H 배치) 고정."
    creative: "(1) 「옳은 것의 개수」로 바꿔 전 보기 판정 강제(★2) (2) 직육면체(1, 2, 3)로 바꿔 각 보기 값이 달라지게(★2) (3) 두 벡터가 이루는 각(예 AH 와 BG 는 0°, AC 와 BG 는 60°)을 묻는 형(★3)."
```

```yaml
- id: RPM-GEO-0658
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(1, 0), b=(1, 2) 와 실수 t 에 대해 f(t)=(ta+b)·(a+tb) 가 최소가 되는 t 의 값. 주관식.
  category: "내적 전개 → |a|², a·b, |b|² 대입 → t 의 이차식 → 꼭짓점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 연산 — 매개변수 t 의 이차식 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (ta+b)·(a+tb)=t|a|²+t²(a·b)+a·b+t|b|² 에 |a|²=1, a·b=1, |b|²=5 를 넣으면 f(t)=t²+6t+1 → 꼭짓점 t=−3. (성분으로 ta+b=(t+1, 2), a+tb=(1+t, 2t) 를 곱해도 같음.) 내적의 분배법칙과 이차식 최소의 표준 절차. 통찰 0·M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "내적 전개 → f(t)=t²+6t+1 → t=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꾸면 f(t)=(a·b)t²+(|a|²+|b|²)t+a·b. 제약: a·b>0 이어야 최솟값이 존재(a·b<0 이면 최댓값 문제로 바뀜)하고 꼭짓점 −(|a|²+|b|²)/(2a·b) 가 정수·간단한 분수가 되게."
    creative: "(1) 최솟값 자체(−8)를 묻기(★2) (2) |ta+b| 의 최솟값(제곱 전개 · ★2) (3) a·b<0 인 벡터로 바꿔 최댓값·부호 판단(★2 · T-부호) (4) ta+b 와 a+tb 가 수직이 되는 t(f(t)=0 · 두 근 · ★2)."
```

```yaml
- id: RPM-GEO-0659
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2, 3), B(5, 1) 에 대해 AB·OP=13 을 만족하는 점 P 에 대한 선분 OP 의 길이의 최솟값. 5지선다.
  category: "AB=(3, −2), P(x, y) → 3x−2y=13 직선 → 원점과의 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내적 등식 AB·OP=13 을 P 의 자취(직선 3x−2y=13)로 옮기고 |OP| 최소를 원점과 직선의 거리로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "내적 조건의 자취(직선) → |OP| 의 최솟값(점과 직선의 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(3, −2), P(x, y) 로 두면 3x−2y=13. P 는 이 직선 위를 움직이므로 |OP| 의 최솟값은 원점과 직선의 거리 13/√13=√13 → ③. (|AB||OP|cosθ=13 에서 |OP|≥13/|AB| 로 봐도 같음.) 내적 조건을 직선 자취로 옮기는 RT d1 하나·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AB·OP=13 → 3x−2y=13 → d(O, 직선)=13/√13=√13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 우변 k 를 바꾸면 답 |k|/|AB|. 제약: k 를 |AB|² 의 배수(13, 26)로 두면 거리가 √13 의 정수배로 정리됨. 선택지에 √13 과 헷갈리는 값(2√3 등) 배치."
    creative: "(1) |OP| 대신 |AP| 의 최솟값(점 A 와 직선 거리 · ★2) (2) 조건을 AB·AP=k 로 바꿔 자취가 A 를 기준으로 한 직선(★2~3) (3) 두 조건 AB·OP=13, |OP|=5 를 동시에 만족하는 P 의 개수(직선·원 교점 · MI d1 · ★3)."
```

```yaml
- id: RPM-GEO-0660
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(2x, −1, y), b=(1, x, −2) 에 대해 a·b=−3, b·b=14 일 때 x+y 의 값(x>0, y>0). 주관식.
  category: "b·b=14 → x²=9 → x=3 → a·b=x−2y=−3 → y=3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분 내적 조건 → 미지수(공간벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b·b=1+x²+4=14 → x²=9, x>0 이므로 x=3. a·b=2x−x−2y=x−2y=−3 → 3−2y=−3 → y=3 → x+y=6. 미지수 없는 조건부터 푸는 두 단계·양수 조건으로 부호 고름(T-부호). 통찰 0·M_total 5 → 출발점 ★2 유지(0637 과 같은 처리).
  tier: star_2
  mechanism_primary: "b·b=14 → x=3(x>0) → a·b=x−2y=−3 → y=3 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 두 내적 값을 바꿀 수 있음. 제약: b·b 에서 x² 이 완전제곱수가 되게, a·b 가 x 로 정리된 뒤 y 가 정수가 되게. x>0 조건을 빼면 x=±3 두 갈래로 답이 둘."
    creative: "(1) x>0 조건을 빼고 「모든 x+y 의 값의 합」(★2 · MI d1) (2) a·b=−3 대신 a⊥b 나 |a|=|b| 조건으로(★2) (3) 조건을 |a+b|, |a−b| 로 주어 전개 후 연립(0662 결합 · ★3)."
```

```yaml
- id: RPM-GEO-0661
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(k, 2, −1), b=(0, −3, 1), c=(k−1, −2, 0) 에 대해 a+b 와 a−c 가 이루는 각이 120° 일 때 정수 k 의 값. 5지선다.
  category: "a+b=(k, −1, 0), a−c=(1, 4, −1) → cos120°=−1/2 식 → 제곱 → 이차방정식 → 정수·부호 조건"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 이루는 각 → 미지수(cos 등식 · 제곱 · 이차방정식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a+b=(k, −1, 0), a−c=(1, 4, −1) 이므로 (k−4)/(√(k²+1)·3√2)=−1/2. k<4 조건 아래 양변 제곱하면 4(k−4)²=18(k²+1) → 7k²+16k−23=0 → (k−1)(7k+23)=0 → 정수 k=1 → ①. 성분 정리·cos 식·제곱·인수분해·정수 골라내기가 이어지는 절차형이고 제곱 전 부호(T-부호)·정수 조건(T-범위)이 함정. 통찰 0 이나 M_total 8 → 「시험에 꼭」 범위(★2~3) 상단 ★3.
  tier: star_3
  mechanism_primary: "성분 정리 → (k−4)/(3√2·√(k²+1))=−1/2 → 7k²+16k−23=0 → 정수 k=1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(60°·120°·135°)과 성분을 바꿀 수 있음. 제약: 제곱 후 이차식이 인수분해되고 정수 근이 하나만 남게(다른 근은 분수) 성분을 역산. 각이 둔각이면 내적<0 부호 조건을 함께 둠."
    creative: "(1) 「정수」 조건을 빼고 모든 k 의 합(근과 계수 · ★3) (2) 각 대신 |a+b|=|a−c| 로 바꾸면 일차식(★2) (3) 각이 예각이 되도록 하는 정수 k 의 개수(부등식 · ★3 · T-범위)."
```

```yaml
- id: RPM-GEO-0662
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    |a|=2, |b|=3, |a+b|=4 일 때 |a−b| 의 값. 5지선다.
  category: "|a+b|² 전개 → a·b=3/2 → |a−b|²=13−3=10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "크기 제곱 전개 → 내적 → 다른 크기(|a±b|)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |a+b|²=4+9+2a·b=16 → a·b=3/2. |a−b|²=4+9−3=10 → √10 → ⑤. (|a+b|²+|a−b|²=2(|a|²+|b|²)=26 으로 한 줄도 가능.) 크기 제곱 전개 두 번의 표준 절차. 통찰 0·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "|a+b|²=16 → a·b=3/2 → |a−b|²=13−2·(3/2)=10 → √10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|, |b|, |a+b| 를 바꾸되 삼각부등식 ||a|−|b||≤|a+b|≤|a|+|b| 를 만족하게. |a−b|²=2(|a|²+|b|²)−|a+b|² 가 양수·간단한 근호가 되게."
    creative: "(1) |a−b| 대신 두 벡터가 이루는 각의 cos(0665 골조 · ★2) (2) |2a−b| 처럼 계수 포함(★2) (3) |a+b|=|a−b| 로 바꾸면 수직 조건 RT d1(★2)."
```

```yaml
- id: RPM-GEO-0663
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(−1, 3), b=(2, −1) 에 대해 a+b 와 a−b 가 이루는 각 θ 의 sin θ 값. 5지선다.
  category: "a+b=(1, 2), a−b=(−3, 4) → cos θ=5/(√5·5)=1/√5 → sin θ=2/√5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 두 벡터가 이루는 각(cos → sin)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+b=(1, 2), a−b=(−3, 4). cos θ=(−3+8)/(√5·5)=1/√5 → sin θ=√(1−1/5)=2√5/5 → ⑤ (0≤θ≤π 라 sin≥0). 성분 계산·cos 공식·sin 변환의 표준 세 단계. 통찰 0·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a+b, a−b 성분 → cos θ=1/√5 → sin θ=2√5/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꾸면 a+b, a−b 가 바뀜. 제약: 두 크기의 곱이 근호 하나로 정리되고 1−cos²θ 가 완전제곱 분수가 되게(피타고라스 쌍 활용)."
    creative: "(1) sin θ 대신 tan θ 나 두 벡터로 만든 삼각형 넓이(★2) (2) a+b 와 a−b 가 수직이 되는 조건 |a|=|b| 를 발견하게(★2 · RT d1) (3) 성분에 미지수를 두고 각이 45° 가 되는 값(0661 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0664
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    OA=(3, 4, 5), OB=(2, 4, −2) 에 대해 OA 의 OB 위로의 정사영의 크기. 주관식.
  category: "정사영 크기 = |OA·OB|/|OB| → 12/√24=√6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 크기 |a·b|/|b|"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    OA·OB=6+16−10=12, |OB|=√24=2√6 → 정사영 크기 |OA|cos θ=12/(2√6)=√6. 공식 한 번 대입. 통찰 0·M_total 4 → 「시험에 꼭」 출발점 ★2 에서 −1 → ★1. 정사영 「위로의」 방향(어느 크기로 나누는지 · T-표기)만 주의.
  tier: star_1
  mechanism_primary: "OA·OB=12, |OB|=2√6 → 12/(2√6)=√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터 성분을 바꾸되 내적/|OB| 가 간단한 근호가 되게(|OB|² 이 내적의 약수 구조). 내적이 음수면 크기는 절댓값이므로 부호 처리 명시."
    creative: "(1) 정사영 벡터 자체((OA·OB/|OB|²)OB)를 묻기(★2) (2) OB 의 OA 위로의 정사영으로 방향을 뒤집어 T-표기 함정(★1) (3) 정사영의 크기가 주어졌을 때 미지 성분 역산(★2)."
```

```yaml
- id: RPM-GEO-0665
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    |a|=1, |b|=3, |2a+b|=4 일 때 a, b 가 이루는 각 θ 의 cos θ 값. 주관식.
  category: "|2a+b|² 전개 → a·b=3/4 → cos θ=a·b/(|a||b|)=1/4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "크기 제곱 전개 → 내적 → cos θ"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |2a+b|²=4|a|²+4a·b+|b|²=4+4a·b+9=16 → a·b=3/4 → cos θ=(3/4)/(1·3)=1/4. 계수 2 의 제곱(4|a|²)·교차항 계수(4a·b)를 놓치는 것(T-단위)만 함정인 표준 절차. 통찰 0·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "|2a+b|²=16 → 4+4a·b+9=16 → a·b=3/4 → cos θ=1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|, |b|, |2a+b| 와 계수를 바꾸되 a·b 가 |a||b| 이하(|cos θ|≤1)이고 cos 값이 간단한 분수가 되게. 삼각부등식 |2|a|−|b||≤|2a+b|≤2|a|+|b| 확인."
    creative: "(1) cos θ 대신 |a−b| 나 |a+2b| 를 묻기(0662 골조 · ★2) (2) 조건을 |2a+b|=|2a−b| 로 바꿔 수직 조건 RT d1(★2) (3) |a|, |b| 를 두고 |2a+b| 의 최댓값·최솟값(각 범위 · ★2~3)."
```

```yaml
- id: RPM-GEO-0666
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a=(2, 1), b=(−1, −3), c=(−5, −1) 에 대해 b−c 와 ka+c 가 서로 수직일 때 실수 k 의 값. 5지선다.
  category: "b−c=(4, −2), ka+c=(2k−5, k−1) → 내적 0 → 일차방정식 → k=3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 수직 조건(내적 0) → 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b−c=(4, −2), ka+c=(2k−5, k−1). 수직이므로 4(2k−5)−2(k−1)=6k−18=0 → k=3 → ③. 성분 정리와 내적 0 의 일차방정식 두 단계. 통찰 0·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "b−c=(4, −2), ka+c=(2k−5, k−1) → 4(2k−5)−2(k−1)=0 → k=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분을 바꿀 수 있음. 제약: 내적 0 이 k 의 일차식이 되고(ka+c 와 b−c 처럼 k 가 한쪽에만) 해가 정수. ka+c 와 kb+c 처럼 k 가 양쪽에 들어가면 이차식이 되어 ★ 상승."
    creative: "(1) 수직 대신 평행으로(0668 골조 · ★2) (2) k 가 양쪽에 들어가 이차방정식·두 근(★2~3 · MI d1) (3) ka+c 의 크기가 최소가 되는 k 를 묻고 그때 b−c 와 수직임을 확인하는 정사영 연결(★3 · RT d1)."
```

```yaml
- id: RPM-GEO-0667
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평행사변형 AOBC 에서 |OA|=3, |OB|=4, OA·OB=6√3 일 때 평행사변형의 넓이(그림). 주관식.
  category: "S=√(|OA|²|OB|²−(OA·OB)²) → √(144−108)=6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적을 이용한 평행사변형의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(9·16−108)=√36=6. (cos θ=6√3/12=√3/2 → θ=30° → 3·4·sin30°=6 으로도 같음.) 공식 한 번 대입이고 삼각형 넓이의 2배(½ 를 곱하지 않음 · T-단위)만 주의. 통찰 0·M_total 4 → 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "|OA|², |OB|², OA·OB 대입 → √(144−108)=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-0667.png"
  latex: latex-bank/rpm-geo/items/0667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기(3, 4)와 내적(6√3)을 바꾸되 |a|²|b|²−(a·b)²>0 이고 근호가 정리되게. 내적을 |a||b|·cos(30°·45°·60°) 로 두면 각이 떨어짐. 그림 라벨(A 위·B 오른쪽·C) 고정."
    creative: "(1) 넓이를 주고 OA·OB 를 역산(부호 두 갈래 · ★2 · MI d1) (2) 대각선 |OC|, |AB| 를 주고 넓이(전개로 내적 먼저 · ★2~3) (3) 삼각형 OAB 넓이로 바꿔 ½ 함정(★1)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0668
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a=(1, 2), b=(−3, 4) 에 대해 a+b 와 ka+(1−k)b 가 서로 평행할 때 실수 k 의 값. 주관식(서술형).
  category: "a+b=(−2, 6), ka+(1−k)b=(4k−3, 4−2k) → 평행(성분 비) → 일차방정식 → k=1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 평행 조건(평면 성분 · 계수 k)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+b=(−2, 6), ka+(1−k)b=(k−3+3k, 2k+4−4k)=(4k−3, 4−2k). 평행이므로 6(4k−3)=−2(4−2k) → 24k−18=4k−8 → k=1/2. (ka+(1−k)b=b+k(a−b) 로 봐도 같은 식.) 계수 정리 한 번·평행 조건 한 번의 표준 절차. 통찰 0·M_total 5 → 서술형 출발점 ★3 에서 −1 → ★2. 서술형 구역은 답안 형식 신호라 난이도를 억지로 올리지 않음.
  tier: star_2
  mechanism_primary: "ka+(1−k)b=(4k−3, 4−2k) → (a+b) 와 평행 → 6(4k−3)=−2(4−2k) → k=1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분을 바꿀 수 있음. 제약: ka+(1−k)b 의 두 성분이 k 의 일차식이고 평행 조건이 일차방정식으로 풀리게(a 와 b 가 평행하지 않게). 답이 간단한 분수."
    creative: "(1) 평행 대신 수직(★2) (2) ka+(1−k)b 가 「a, b 의 끝점을 잇는 직선 위의 점」임을 이용해 자취로 포장(0644 골조 · ★3 · RT d1) (3) |ka+(1−k)b| 의 최솟값(이차식 · ★2~3)."
```

```yaml
- id: RPM-GEO-0669
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    A(2, 3, 4), B(−1, 2, 1), C(m+1, 2n−2, −2) 가 한 직선 위에 있을 때 mn 의 값. 주관식(서술형).
  category: "AB=(−3, −1, −3), AC=(m−1, 2n−5, −6) → AC=tAB → z 성분에서 t=2 → m, n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위 → 평행 조건(공간 성분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(−3, −1, −3), AC=(m−1, 2n−5, −6). 한 직선 위이므로 AC=tAB, 미지수 없는 z 성분에서 t=2 → m−1=−6, 2n−5=−2 → m=−5, n=3/2 → mn=−15/2. 0651·0654 와 같은 「미지수 없는 성분에서 배율 먼저」 절차. 통찰 0·M_total 5 → 서술형 출발점 ★3 에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "AC=tAB → t=2(z 성분) → m=−5, n=3/2 → −15/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{15}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표를 바꾸되 미지수 없는 성분 한 쌍에서 t 가 정수로 결정되게 하고 m, n 이 일차로 풀리게. C 의 성분 표현(m+1, 2n−2)을 바꿔 답을 조정."
    creative: "(1) 「한 직선 위」 대신 「B 가 AC 를 1:2 로 내분」 처럼 내분 조건으로(★2) (2) 미지수를 두 성분에 겹치게 두어 t 소거 연립(0654 골조 · ★2) (3) 세 점과 원점이 한 평면 위(일차종속 · ★3~4)."
```

```yaml
- id: RPM-GEO-0670
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    한 변이 2 인 정삼각형 ABC 에서 변 BC 의 삼등분점 P, Q 에 대한 AP·AQ 의 값(그림). 주관식(서술형).
  category: "AP=AB+(1/3)BC, AQ=AB+(2/3)BC 로 분해(또는 좌표) → |AB|²=4, AB·BC=−2, |BC|²=4 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형에서의 내적 — 정삼각형의 변 위 내분점 벡터 분해(또는 좌표)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AP=AB+(1/3)BC, AQ=AB+(2/3)BC 이고 |AB|²=|BC|²=4, AB·BC=2·2·cos120°=−2 이므로 AP·AQ=4+(2/3)(−2)+(1/3)(−2)+(2/9)·4=26/9. (B(−1, 0), C(1, 0), A(0, √3) 좌표로 AP=(−1/3, −√3), AQ=(1/3, −√3) 의 내적도 26/9.) 분해·좌표 두 갈래 모두 표준이고 AB·BC 의 각을 60° 로 잘못 읽는 함정(T-부호)·분수 계산이 부담. 통찰 0·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AP=AB+(1/3)BC, AQ=AB+(2/3)BC → 4−4/3−2/3+8/9=26/9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{26}{9}$'
  answer_source: "답지"
  figure: "crop:fig-0670.png"
  latex: latex-bank/rpm-geo/items/0670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이 2 를 a 로 두면 값이 (13/18)a². 삼등분 대신 1:3 내분 등으로 바꾸면 계수가 달라짐. 제약: 답이 간단한 분수가 되게 하고, 변 길이를 3 의 배수로 두면 정수·반정수(a=3 → 13/2). 그림 라벨(B, P, Q, C 순서 · 정삼각형) 고정."
    creative: "(1) AP·AQ 대신 |AP| 나 ∠PAQ 의 cos(★3) (2) 정삼각형을 정사각형·직각삼각형으로(★2~3) (3) P 를 BC 위 동점으로 두고 AP·AQ 의 최솟값(이차식 · ★3)."
```

```yaml
- id: RPM-GEO-0671
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    넓이 30 인 삼각형 ABC 와 점 P 가 PA+PB+3PC=AB 를 만족할 때 삼각형 PBC 의 넓이. 주관식(서술형).
  category: "AB=PB−PA 대입 → 2PA+3PC=0 → P∈AC, AP:PC=3:2 → △PBC=△ABC×PC/AC"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2PA+3PC=0 → P 가 선분 AC 를 3:2 로 내분 → 꼭짓점 B 공통이므로 △PBC:△ABC=PC:AC 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형에서 내분점의 위치벡터의 활용 — 벡터 등식 → 점의 위치 → 넓이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB=PB−PA 를 대입하면 2PA+3PC=0, 즉 PC=−(2/3)PA 이므로 P 는 선분 AC 위 AP:PC=3:2. B 를 공유하므로 △PBC=△ABC×PC/AC=30×2/5=12. 0639·0641 과 같은 골조(벡터 등식 → 위치 → 넓이비 RT d1)에 비의 순서 함정(T-표기). M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=PB−PA → 2PA+3PC=0 → AP:PC=3:2 → 30×2/5=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (1, 1, 3) 과 우변(AB·BC·CA)·전체 넓이를 바꿀 수 있음. 제약: 정리 후 두 벡터 계수가 양수 둘(P 가 변 위 내분점)이 되고 넓이가 계수 합으로 나누어떨어지게. 묻는 삼각형을 PAB 로 바꾸면 3/5 배."
    creative: "(1) 우변을 0 으로 바꿔 P 를 내부점으로 두고 △PBC(0642 골조 · RT d2 · ★3) (2) 넓이비를 주고 계수 역산 BW(★3) (3) 조건을 |PA+PB+3PC|=|AB| 로 바꾸면 자취(원)·넓이 최댓값 문제로 변신(★4)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0672
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    AB=4, AD=3 인 직사각형 ABCD 와 변 CD 를 지름으로 하는 원 위의 점 P 에 대해 AC·AP 의 최솟값(그림). 주관식.
  category: "원의 중심 M(CD 의 중점) → AP=AM+MP 분해 → AC·AP=AC·AM+AC·MP=17+AC·MP → 최소 17−|AC||MP|=7"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 위의 동점 P 를 중심 M 기준 AP=AM+MP 로 분해해 내적을 상수 AC·AM 과 가변항 AC·MP(반지름 벡터)로 나누고, 가변항 최소를 MP 가 AC 와 반대 방향일 때 −|AC||MP| 로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 위의 점에 대한 내적의 최댓값·최솟값 — 중심 기준 분해"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A(0, 0), D(3, 0), B(0, −4), C(3, −4) 로 두면 원의 중심 M(3, −2), 반지름 2. AP=AM+MP 이므로 AC·AP=AC·AM+AC·MP=(9+8)+AC·MP=17+AC·MP, AC·MP≥−|AC||MP|=−5·2=−10 → 최솟값 7. (P=(3+2cosθ, −2+2sinθ) 로 두고 17+6cosθ−8sinθ 의 최소로도 같음.) 동점을 중심 기준으로 분해하는 RT d2 하나·M_total 6 → 실력 Up 출발점 ★4 유지.
    [분류 이슈] 분해 골조가 이 단원의 표준 「원 위의 점 내적 최대·최소」 한 개(RT d2)이고 M_total 6 이라 체감은 ★3 에 가까움. 라벨은 벤더 출발점 ★4 로 두고 기록. 후보 ★3/★4.
  tier: star_4
  mechanism_primary: "M=CD 중점 → AP=AM+MP → AC·AP=17+AC·MP → 17−5·2=7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$7$"
  answer_source: "답지"
  figure: "crop:fig-0672.png"
  latex: latex-bank/rpm-geo/items/0672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AD(4, 3)와 지름이 되는 변을 바꾸면 상수항 AC·AM 과 |AC|·반지름이 바뀜. 제약: |AC| 가 정수(피타고라스 쌍)이고 최솟값 AC·AM−|AC|r 이 정수가 되게. 그림 라벨(A 왼쪽 위·원이 CD 지름) 고정."
    creative: "(1) 최댓값(17+10=27)이나 최댓값+최솟값을 묻기(★3~4) (2) AC 대신 AB·AP 로 바꿔 상수항·방향이 달라지게(★4) (3) 원을 정사각형 둘레 위 동점으로 바꾸면 정사영 관점의 SC d1 추가(★4) (4) |AP| 의 최댓값·최솟값(중심 거리±반지름 · ★2~3 · RT d1)."
```

```yaml
- id: RPM-GEO-0673
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "실력 Up"
  summary: |
    한 원 위의 네 점 A, B, C, D 가 ㈎ |AB|=8, AC·BC=0 ㈏ AD=(1/2)AB−2BC 를 만족할 때 |AD|² 의 값(그림). 5지선다.
  category: "AC·BC=0 → AB 지름(반지름 4) → 중심 O 에서 OD=OA+AD=−2BC → |BC|=2 → |AD|²=|(1/2)AB−2BC|² 전개(AB·BC=−|BC|²)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AC·BC=0 → ∠ACB=90° → 원주각이 직각이므로 AB 가 지름(반지름 4, 중심 O=AB 중점)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈏ 와 「D 가 원 위」를 중심 기준으로 결합: OD=OA+AD=−(1/2)AB+(1/2)AB−2BC=−2BC → |OD|=4 에서 |BC|=2"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원 위의 점들의 벡터 조건 — 지름 인식·중심 기준 재표현(수능 기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 에서 ∠ACB=90° 이므로 AB 는 지름, 중심 O 는 AB 의 중점, 반지름 4. OD=OA+AD=−(1/2)AB+(1/2)AB−2BC=−2BC 이고 |OD|=4 이므로 |BC|=2. 직각삼각형에서 AB·BC=(AC+CB)·BC=−|BC|²=−4 이므로 |AD|²=(1/4)·64−2·AB·BC+4·4=16+8+16=40 → ⑤. 지름 인식(EQV d1)과 중심 기준 재표현으로 「D 가 원 위」 조건을 쓰는 결합(CON d2)이 핵심, 이후 전개는 표준. 통찰 2·M_total 8 → 실력 Up 출발점 ★4 유지(★5 는 SC/VF/SYM/XU 부재로 불가).
  tier: star_4
  mechanism_primary: "AC·BC=0 → AB 지름 → OD=−2BC → |BC|=2 → |AD|²=16−2AB·BC+4|BC|²=40"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0673-2.png"
  latex: latex-bank/rpm-geo/items/0673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|AB|(지름)와 ㈏ 의 계수 (1/2, −2) 를 바꿀 수 있음. 제약: OD=(계수−1/2)AB−2BC 꼴에서 AB 항이 사라지도록 AB 계수를 1/2 로 유지하면 |BC| 가 바로 나옴(계수를 바꾸면 |OD|² 전개에 AB·BC 가 섞여 이차식). 답이 정수."
    creative: "(1) AB 계수를 1/2 이 아닌 값으로 바꿔 |OD|² 전개에서 |BC| 의 이차방정식·양수 조건 VF d1 추가(★4~5) (2) |AD|² 대신 AD·AB 나 삼각형 ABD 의 넓이(★4) (3) ㈎ 를 AC·BC=0 대신 |AC|=|BC| 로 바꾸면 이등변 조건으로 골조가 달라짐(★4)."
```

```yaml
- id: RPM-GEO-0674
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    평행사변형 OABC 에서 OA·OB=OB·OC=2, OA·OC=−2 일 때 평행사변형의 넓이. 주관식.
  category: "OB=OA+OC 대입 → |OA|²+OA·OC=2, OA·OC+|OC|²=2 → |OA|=|OC|=2 → S=√(|OA|²|OC|²−(OA·OC)²)=2√3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대각선 OB 를 두 변 벡터의 합 OA+OC 로 옮겨 세 내적 조건을 |OA|², |OC|², OA·OC 의 값으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형 대각선 벡터 → 변의 크기·내적 → 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OB=OA+OC 이므로 OA·OB=|OA|²+OA·OC=2 → |OA|²=4, OB·OC=OA·OC+|OC|²=2 → |OC|²=4. OA·OC=−2 → cos θ=−1/2(θ=120°) → S=2·2·sin120°=2√3 (=√(16−4)). 대각선을 변 벡터의 합으로 옮기는 RT d1 하나·M_total 6 이고 이후는 유형 17 의 넓이 공식. 실력 Up 출발점 ★4 에서 통찰 1(d1)·M 6 으로 −1 → ★3.
    [분류 이슈] 벤더 실력 Up(★4) 이나 골조가 「대각선=변의 합」 한 단계 + 넓이 공식(0667 골조)이라 ★3 라벨. 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "OB=OA+OC → |OA|²=|OC|²=4, OA·OC=−2 → √(16−4)=2√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 내적 값을 바꾸되 |OA|²=OA·OB−OA·OC>0, |OC|²=OB·OC−OA·OC>0 이고 |OA|²|OC|²−(OA·OC)²>0(코시-슈바르츠)이 되게. 값을 비대칭(OA·OB≠OB·OC)으로 두면 |OA|≠|OC| 인 일반 평행사변형."
    creative: "(1) 넓이 대신 대각선 |OB|, |AC| 나 두 대각선이 이루는 각(★3) (2) 조건을 |OB|, |AC| 와 OA·OC 로 주어 전개 후 연립(★3) (3) 마름모·직사각형이 되는 조건 판정 보기(★3 · EQV d1) (4) 평행사변형을 삼각형 OAC 로 축소해 ½ 함정(★3)."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 7 · ★2 22 · ★3 9 · ★4 2 · ★5 0
- 통찰형 10 · 절차형 30 · premium 0
- 통찰 유형: I-RT 8(0639·0641·0642·0655·0659·0671·0672·0674) · I-EQV 2(0645·0673) · I-CON 1(0673) — 0673 만 통찰 2개
- type_hint 상위: 「내적을 이용한 삼각형·평행사변형의 넓이」 5(0635~0638·0667, +0674 결합) · 「삼각형에서 내분점의 위치벡터의 활용 — 벡터 등식 → 위치 → 넓이비·내분비」 5(0639~0642·0671) · 「벡터의 평행 조건(성분·배율 t)」 4(0651·0654·0668·0669) · 「도형에서의 내적(정육각형·정육면체·정삼각형·지름)」 4(0655·0656·0657·0670) · 「점의 자취(계수 조건·크기 조건·내적 조건)」 5(0643·0644·0645·0653·0659)
- 구역별: 유형 17 ★1 2·★2 2 / 유형UP 18 ★3 4 / 유형UP 19 ★2 2·★3 1 / 시험에 꼭(22문) ★1 5·★2 16·★3 1 / 서술형 ★2 2·★3 2 / 실력 Up ★3 1·★4 2
- 그림: 10문(`crop:fig-0636.png` · `crop:fig-0646.png` · `crop:fig-0647.png` · `crop:fig-0655.png` · `crop:fig-0656.png` · `crop:fig-0657.png` · `crop:fig-0667.png` · `crop:fig-0670.png` · `crop:fig-0672.png` · `crop:fig-0673-2.png`)
- 태그: 대표문제 3(0635·0639·0643) · 중요 4(0651·0656·0662·0666) · 수능 기출 1(0673)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0638 | 벤더 「상중」이나 골조는 0635(★1)와 같고 꼭짓점 이동 한 단계뿐·통찰 0·M_total 5 → ★2 라벨 | ★2 / ★3 |
| RPM-GEO-0643 | 유형UP 대표문제이나 「계수 조건 → 영역」 해석을 유형 정의 사실(절차)로 봐 ★2. 카탈로그에서 이 해석을 RT d1 로 세면 ★3 | ★2 / ★3 |
| RPM-GEO-0672 | 실력 Up ★4 라벨 유지했으나 골조가 표준 「원 위의 점 중심 분해」 한 개(RT d2)·M_total 6 이라 체감은 ★3 | ★3 / ★4 |
| RPM-GEO-0674 | 실력 Up 출발점 ★4 이나 「대각선=변의 합」 RT d1 + 넓이 공식(0667 골조)이라 ★3 라벨 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 따로 세울 유형: (1) 「내적을 이용한 넓이」는 삼각형(0635~0638)·평행사변형(0667·0674)을 한 유형으로 두고 「꼭짓점이 원점인가·변 벡터를 먼저 구하는가·공간인가」를 변형 축으로. (2) 「벡터 등식 → 점의 위치 → 넓이비」(0639·0641·0642·0671)는 P 가 변 위(두 항)인 경우와 내부(세 항·내분점 묶기)인 경우를 base ★ 다르게(★3 / ★3~4). (3) 「점의 자취」는 계수 조건(0643·0644·0645 — 정규화 필요 여부로 ★2/★3), 크기 조건 |PA+PB+PC|=k(0653 · 원), 내적 조건 AB·OP=k(0659 · 직선)의 세 갈래를 하위 유형으로. (4) 「원 위의 동점 내적 최대·최소 — 중심 분해」(0672)와 「원 위 여러 점의 벡터 조건 — 지름·중심 재표현」(0673)은 실력 Up·기출 층의 별도 유형(base ★3~4).
- 통합해도 될 유형: 성분 계산 계열 — 「평행 조건」(0651·0654·0668·0669) · 「수직 조건」(0666) · 「같은 벡터」(0652) · 「크기 조건 → 미지수」(0649·0660) · 「성분 연산·크기」(0648) 은 「성분으로 푸는 미지수」 한 유형의 하위 변형(★1~2)으로 묶어도 됨. 「크기 제곱 전개 → 내적」(0662·0665)과 「두 벡터가 이루는 각」(0661·0663)도 「크기·내적·각 사이 변환」 한 유형으로.
- 이 범위에서 ★4 는 2문(0672·0673)뿐이고 ★5 없음. 벤더 「실력 Up」 3문 중 1문(0674)은 ★3 으로 내려 기록했으므로, 카탈로그의 실력 Up 층 base ★ 를 일괄 ★4 로 두지 말고 골조별로 정할 것.
