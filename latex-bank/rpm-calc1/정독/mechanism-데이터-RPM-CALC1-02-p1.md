---
name: mechanism-데이터-RPM-CALC1-02-p1
description: RPM 미적분Ⅰ 02 함수의 연속(1/3 · 교과서 02-1~02-6) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 02 함수의 연속
  unit_code: CALC1-02
  part: "1/3"
  extract_range: "23~25쪽 · 0113~0142"
  total_problems: 30
  unit_total: 92
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 02 함수의 연속 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 02 함수의 연속 단원(전체 92문) 가운데 첫 부분인 교과서 구역 23~25쪽 · 0113~0142 의 30문항을 다룬다. 교과서 02-1 함수의 연속과 불연속 · 02-2 구간 · 02-3 연속함수 · 02-4 연속함수의 성질 · 02-5 최대·최소 정리 · 02-6 사잇값 정리 여섯 소절이며, 대부분 공통 발문(「다음 함수가 x=1 에서 연속인지 조사하시오」·「다음 집합을 구간의 기호로 나타내시오」 등) 아래 짧은 식 하나가 문항인 교과서 기본 문제다. 이 범위에는 난이도 표시(level)와 태그(대표문제·중요·기출)가 하나도 없으므로 벤더 신호는 「교과서 구역 = ★1 출발」 하나뿐이고, 유형·유형 UP·시험에 꼭 나오는 문제·서술형·실력 Up 구역은 2/3·3/3 부분에서 이어진다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조) · `insights[]`(통찰 라벨 · 절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 · creative: 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 발문은 요약만 적었고 원문 전사는 `latex-bank/rpm-calc1/items/<id>.tex` 에 있다.

## 문항 데이터

### 교과서 02-1 함수의 연속과 불연속

공통 발문(U2-D1 · 0113~0115): 「다음 함수 f(x) 가 x=0 에서 불연속인 이유를 말하시오.」 — 그래프만 주어진다.

```yaml
- id: RPM-CALC1-0113
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그래프로 주어진 f(x)(x=0 위에 빈 점 (0,2) 하나뿐이고 그 밖은 이어진 곡선)가 x=0 에서 불연속인 이유를 말하기.
  category: "그래프 읽기 → 연속의 세 조건 중 깨진 것 지목(함숫값 정의 없음)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 불연속인 이유 판별(연속의 세 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=0 위의 점이 빈 점(○)뿐이고 채운 점이 없으므로 f(0) 이 정의되지 않는다. 좌·우극한은 모두 2 로 같지만 함숫값이 없어 연속의 첫 조건(정의)이 깨진다. 그래프 읽기 한 단계 · 통찰 없음 · M_total 4 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "그래프의 x=0 위 점 확인(빈 점만) → f(0) 정의 없음 → 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 (함수 $f(x)$가 $x=0$에서 정의되어 있지 않으므로 불연속이다.)"
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: "crop:fig-0113.png"
  latex: latex-bank/rpm-calc1/items/0113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈 점의 위치(x=0 → x=1, x=-2)와 높이(2 → 다른 값)를 바꿀 수 있음. 제약: 그림 라벨(빈 점 하나 · 채운 점 없음)이 곧 조건이므로 빈 점 한 개만 두고 채운 점을 추가하지 않는다."
    creative: "(1) 같은 그림에서 극한값 lim f(x) 도 함께 묻기(★1 유지) (2) 세 그림(정의 없음·극한 없음·극한≠함숫값)을 한 문항으로 묶어 연속인 것을 ㄱㄴㄷ 로 고르기(★2 · 조건 비교 단계 추가) (3) 빈 점을 메우는 f(0) 의 값을 정해 연속이 되게 하기(★1~2 · 역방향이지만 표준 절차)."
```

```yaml
- id: RPM-CALC1-0114
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그래프로 주어진 f(x)(x=0 에서 왼쪽 가지는 빈 점 (0,1) 로 끝나고 오른쪽 가지는 채운 점 (0,2) 에서 시작)가 x=0 에서 불연속인 이유를 말하기.
  category: "그래프 읽기 → 좌·우극한 비교 → 극한 없음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 불연속인 이유 판별(연속의 세 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→0- 에서 1, x→0+ 에서 2 로 좌·우극한이 달라 극한값이 존재하지 않는다. f(0)=2 로 함숫값은 있으므로 깨진 것은 두 번째 조건(극한 존재). 좌·우극한 읽기 두 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그래프에서 좌극한 1 · 우극한 2 읽기 → 극한값 없음 → 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\displaystyle\lim_{x\to 0+}f(x)=2$, $\displaystyle\lim_{x\to 0-}f(x)=1$이므로 $\displaystyle\lim_{x\to 0}f(x)$의 값이 존재하지 않아 불연속이다.)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: "crop:fig-0114.png"
  latex: latex-bank/rpm-calc1/items/0114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 가지의 높이(1, 2)와 끊기는 위치 x=0 을 바꿀 수 있음. 제약: 좌·우극한이 서로 달라야 하고, 채운 점이 어느 가지에 붙는지(f(0) 의 값)를 그림에서 분명히 한다."
    creative: "(1) 채운 점을 두 가지 사이의 제3의 높이에 두어 세 값(좌극한·우극한·함숫값)이 모두 다르게 하기(★1) (2) 그래프 대신 x<0, x≥0 조각식으로 주고 같은 판정을 하게 하기(★1~2) (3) 두 가지의 높이를 a, b 매개변수로 두고 연속이 되는 조건 a=b 를 서술하게 하기(★2 · Mₐ 상승)."
```

```yaml
- id: RPM-CALC1-0115
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직선 모양 그래프에 x=0 에서 빈 점 (0,1) 과 그 위에 떨어진 채운 점 (0,2) 가 있는 f(x) 가 x=0 에서 불연속인 이유를 말하기.
  category: "그래프 읽기 → 극한값과 함숫값 비교 → 불일치"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 불연속인 이유 판별(연속의 세 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 따라 좌·우극한이 모두 1 이므로 극한값은 1 로 존재하지만, 채운 점이 (0,2) 에 있어 f(0)=2. 극한값≠함숫값이므로 세 번째 조건이 깨진다. 읽기 두 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그래프에서 lim f(x)=1 읽기 → f(0)=2 확인 → 극한값≠함숫값 → 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($f(0)=2$이고 $\displaystyle\lim_{x\to 0}f(x)=1$이므로 $\displaystyle\lim_{x\to 0}f(x)\ne f(0)$이어서 불연속이다.)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: "crop:fig-0115.png"
  latex: latex-bank/rpm-calc1/items/0115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈 점의 높이(1)와 떨어진 채운 점의 높이(2), 직선의 기울기·절편을 바꿀 수 있음. 제약: 채운 점은 직선 위에 있지 않아야 하고(같은 높이면 연속), x=0 이 아닌 다른 점으로 옮겨도 됨."
    creative: "(1) 그래프 대신 「x≠0 이면 x+1, x=0 이면 2」 조각식으로 주기(★1) (2) 채운 점의 높이를 a 로 두고 연속이 되는 a 구하기(★1~2 · 표준 미정계수) (3) 0113~0115 세 그림을 나란히 주고 「극한값이 존재하는 것」·「연속인 것」을 각각 고르게 하기(★2 · 조건 세 개를 동시에 대조)."
```

공통 발문(U2-D2 · 0116~0119): 「다음 함수가 x=1 에서 연속인지 불연속인지 조사하시오.」

```yaml
- id: RPM-CALC1-0116
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x+1 이 x=1 에서 연속인지 불연속인지 조사하기.
  category: "함숫값·극한값 계산 → 일치 확인 → 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속·불연속 조사(식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(1)=2 이고 x→1 일 때 극한값도 2 로 같으므로 연속. 다항함수는 어디서나 연속이라는 사실을 정의 세 조건으로 확인하는 문항. 대입 두 번 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(1)=2 · lim f(x)=2 계산 → 일치 → 연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수항과 조사점(x=1 → x=-2 등)을 자유롭게 바꿀 수 있음. 제약: 다항함수인 한 답은 항상 「연속」이므로 답을 바꾸려면 함수 종류를 바꿔야 함."
    creative: "(1) 연속인 근거를 세 조건(정의·극한·일치)으로 서술하게 하기(★1) (2) x≥1, x<1 에서 식이 다른 조각함수로 바꿔 좌·우극한을 따로 계산하게 하기(★2) (3) 한쪽 조각에 미정계수 a 를 두고 연속이 되는 a 구하기(★2 · 유형 구역 표준)."
```

```yaml
- id: RPM-CALC1-0117
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=|x-1| 이 x=1 에서 연속인지 불연속인지 조사하기.
  category: "절댓값 구간 분할 → 좌·우극한 계산 → 함숫값과 비교 → 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속·불연속 조사(식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x≥1 이면 x-1, x<1 이면 -(x-1) 로 나누면 좌·우극한이 모두 0 이고 f(1)=0 이므로 연속. 그래프가 꺾이는 점이지만 이어져 있음을 확인하는 문항(미분가능성과 혼동 주의). 분할·극한·비교 3단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "|x-1| 을 x=1 기준으로 분할 → 좌·우극한 0 → f(1)=0 과 일치 → 연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 상수(1 → 다른 값)와 조사점을 함께 옮기거나, |x-1| 앞에 계수·바깥에 상수를 더할 수 있음. 제약: 조사점이 절댓값의 꺾이는 점이어야 좌·우극한을 나눠 보는 의미가 있음."
    creative: "(1) |x-1|/(x-1) 로 바꾸면 좌·우극한이 -1, 1 로 달라 불연속(★1~2 · 대표 반례) (2) x|x-1| 처럼 곱 형태로 바꿔 극한 계산량 추가(★2) (3) 「연속이지만 미분가능하지 않은 점」으로 05단원 미분가능성과 연결(★2 · 단원 경계는 아직 넘지 않음)."
```

```yaml
- id: RPM-CALC1-0118
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=1/(x-1) 이 x=1 에서 연속인지 불연속인지 조사하기.
  category: "분모 0 확인 → 함숫값 정의 없음 → 불연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속·불연속 조사(식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=1 에서 분모가 0 이라 f(1) 이 정의되지 않으므로 불연속(극한도 발산). 연속의 첫 조건이 깨지는 유리함수의 기본 사례. 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분모 x-1=0 확인 → f(1) 정의 없음 → 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "불연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 근(1)과 분자 상수를 바꿀 수 있음. 제약: 조사점이 분모의 근이어야 불연속이 되고, 분자에 같은 인수를 넣으면 0119 처럼 약분 가능한 경우로 성격이 바뀜."
    creative: "(1) 분모를 x²-1 로 바꿔 x=1 과 x=-1 두 점에서 조사(★1) (2) 조사점을 분모의 근이 아닌 점으로 옮겨 「연속」이 답이 되게 하기(★1) (3) x=1 에서의 함숫값을 따로 정의해 주고도 여전히 불연속임(극한 발산)을 설명하게 하기(★2 · 극한 부재와 정의 부재의 구분)."
```

```yaml
- id: RPM-CALC1-0119
  page: 23
  vendor_label: "교과서 02-1 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x≠1 에서 (x²-x)/(x-1), x=1 에서 -1 로 정의된 조각함수가 x=1 에서 연속인지 불연속인지 조사하기.
  category: "약분 → 극한값 계산 → 함숫값과 비교 → 불연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속·불연속 조사(식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x≠1 에서 (x²-x)/(x-1)=x 이므로 x→1 극한값은 1. f(1)=-1 로 따로 정의돼 있어 극한값≠함숫값 → 불연속. 약분·극한·비교 3단계 · 통찰 없음 · M_total 4 → ★1. 0113~0115 의 세 번째 조건 위배를 식으로 옮긴 문항.
  tier: star_1
  mechanism_primary: "(x²-x)/(x-1)=x (x≠1) → lim=1 → f(1)=-1 과 비교 → 불연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "불연속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 나머지 인수(x → x+k)와 f(1) 의 값을 바꿀 수 있음. 제약: 분자가 (x-1) 인수를 가져 약분되도록 유지하고, f(1) 을 극한값과 같게 두면 답이 「연속」으로 바뀌므로 의도한 답에 맞춰 정한다."
    creative: "(1) f(1)=a 로 두고 연속이 되는 a 구하기(★1~2 · 표준 미정계수) (2) 분자를 (x-1)(x+k) 로 두고 k 와 f(1) 두 미정계수를 연속 조건 하나로 묶는 것은 불가능함을 깨닫게 하기(★2 · 조건 개수 인식) (3) 좌·우 조각의 식이 다른 함수로 바꿔 극한 존재 여부부터 판정하게 하기(★2)."
```

### 교과서 02-2 구간

공통 발문(U2-D3 · 0120~0125): 「다음 집합을 구간의 기호로 나타내시오.」

```yaml
- id: RPM-CALC1-0120
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | -2≤x≤3} 을 구간의 기호로 나타내기.
  category: "부등호 종류(≤/<) → 괄호 종류([ ]/( )) 대응 → 닫힌구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양 끝 -2, 3 을 모두 포함하므로 닫힌구간 [-2, 3]. 부등호를 괄호로 옮기는 표기 대응 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-2≤x≤3 → 양 끝 포함 → [-2, 3]"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$[-2,\,3]$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 -2, 3 을 임의의 두 수로 바꿀 수 있음. 제약: 왼쪽 끝 < 오른쪽 끝을 유지하고, 포함 여부(≤/<)가 답의 괄호를 결정하므로 부등호 종류를 바꾸면 답도 함께 바뀜."
    creative: "(1) 구간 기호를 주고 집합·수직선으로 되돌리기(역방향 · ★1) (2) 두 구간의 교집합·합집합을 구간 기호로(★1~2) (3) 부등식 x²-x-6≤0 을 풀어 그 해집합을 구간 기호로(★2 · 이차부등식과 결합)."
```

```yaml
- id: RPM-CALC1-0121
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | 1<x<5} 를 구간의 기호로 나타내기.
  category: "부등호 종류(≤/<) → 괄호 종류([ ]/( )) 대응 → 열린구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양 끝 1, 5 를 모두 포함하지 않으므로 열린구간 (1, 5). 표기 대응 한 단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "1<x<5 → 양 끝 제외 → (1, 5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(1,\,5)$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 1, 5 를 바꿀 수 있음. 제약: 왼쪽 끝 < 오른쪽 끝 · 열린구간을 유지하려면 부등호를 < 로 둔다."
    creative: "(1) 열린구간 (1, 5) 와 순서쌍 (1, 5) 의 표기 혼동을 문맥으로 구분하게 하기(★1) (2) 여러 구간 기호 중 집합 {x | 1<x<5} 와 같은 것 고르기(★1) (3) |x-3|<2 같은 절댓값 부등식의 해를 구간 기호로(★2)."
```

```yaml
- id: RPM-CALC1-0122
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | -3≤x<4} 를 구간의 기호로 나타내기.
  category: "부등호 종류(≤/<) → 괄호 종류([ ]/( )) 대응 → 반닫힌구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    왼쪽 끝 -3 은 포함, 오른쪽 끝 4 는 제외이므로 [-3, 4). 양 끝의 포함 여부가 달라 괄호를 따로 정하는 반닫힌구간 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "-3≤x<4 → 왼쪽 포함·오른쪽 제외 → [-3, 4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$[-3,\,4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 -3, 4 를 바꿀 수 있음. 제약: 왼쪽 끝 < 오른쪽 끝 · 양 끝의 포함 여부를 다르게 두어야 반닫힌구간 연습이 됨."
    creative: "(1) [-3, 4) 와 [-3, 4] 의 차이(원소 4 의 포함)를 묻기(★1) (2) 수직선 그림(채운 점·빈 점)을 주고 구간 기호로(★1) (3) 두 반닫힌구간의 교집합을 구간 기호로 나타내기(★2 · 경계 처리 T-경계)."
```

```yaml
- id: RPM-CALC1-0123
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | -7<x≤2} 를 구간의 기호로 나타내기.
  category: "부등호 종류(≤/<) → 괄호 종류([ ]/( )) 대응 → 반닫힌구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    왼쪽 끝 -7 은 제외, 오른쪽 끝 2 는 포함이므로 (-7, 2]. 0122 와 포함 방향이 반대인 반닫힌구간 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "-7<x≤2 → 왼쪽 제외·오른쪽 포함 → (-7, 2]"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-7,\,2]$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 -7, 2 를 바꿀 수 있음. 제약: 왼쪽 끝 < 오른쪽 끝 · 포함 방향(왼쪽 제외·오른쪽 포함)을 유지해야 0122 와 짝이 됨."
    creative: "(1) 0122·0123 을 합쳐 [-3, 4) 와 (-7, 2] 의 교집합·합집합을 구간 기호로(★2 · T-경계) (2) 자연수만 원소인 경우처럼 구간 기호로 나타낼 수 없는 집합을 섞어 구별하게 하기(★1~2) (3) 「(-7, 2] 에 속하는 정수의 개수」로 포함 여부를 수치화(★1)."
```

```yaml
- id: RPM-CALC1-0124
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | x<4} 를 구간의 기호로 나타내기.
  category: "한쪽 끝 없음 → -∞ 쪽은 항상 열림 → (-∞, 4)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    아래로 끝이 없으므로 -∞ 를 쓰고 그쪽 괄호는 항상 열린 괄호, 오른쪽 4 는 제외 → (-∞, 4). 무한대 쪽 괄호 규칙 한 가지 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x<4 → 아래 끝 없음 → (-∞, 4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 4 와 부등호(< 또는 ≤)를 바꿀 수 있음. 제약: ∞ 쪽 괄호는 항상 열린 괄호 — 이 규칙 자체가 문항의 요점이므로 바꾸지 않는다."
    creative: "(1) x≤4 로 바꿔 (-∞, 4] 와 대비(★1) (2) 실수 전체 {x | x 는 실수} 를 (-∞, ∞) 로 쓰게 하기(★1) (3) 「x<4 또는 x≥6」 처럼 두 구간의 합집합으로 표기(★1~2)."
```

```yaml
- id: RPM-CALC1-0125
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    집합 {x | x≥3} 을 구간의 기호로 나타내기.
  category: "한쪽 끝 없음 → ∞ 쪽은 항상 열림 · 3 포함 → [3, ∞)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3 은 포함이므로 닫힌 괄호, 위로 끝이 없으므로 ∞ 와 열린 괄호 → [3, ∞). 0124 와 방향이 반대인 반직선 구간 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x≥3 → 3 포함·위 끝 없음 → [3, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$[3,\,\infty)$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝점 3 과 부등호(≥ 또는 >)를 바꿀 수 있음. 제약: ∞ 쪽 괄호는 항상 열린 괄호."
    creative: "(1) [3, ∞) 와 (3, ∞) 의 차이(원소 3)를 묻기(★1) (2) 0120~0125 여섯 답을 보기로 주고 집합과 짝짓기(★1) (3) 함수 y=√(x-3) 의 정의역으로 같은 답을 얻게 해 02-2 뒤 단계(0126~0128)로 연결(★1~2)."
```

공통 발문(U2-D4 · 0126~0128): 「다음 함수의 정의역을 구간의 기호로 나타내시오.」

```yaml
- id: RPM-CALC1-0126
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x²+2x 의 정의역을 구간의 기호로 나타내기.
  category: "함수 종류 판별(다항) → 정의역 실수 전체 → (-∞, ∞)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 정의역을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수는 모든 실수에서 정의되므로 정의역은 실수 전체 → (-∞, ∞). 종류 판별 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "다항함수 → 정의역 실수 전체 → (-∞, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,\infty)$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식의 차수·계수를 자유롭게 바꿀 수 있음. 제약: 다항함수인 한 답은 항상 (-∞, ∞) 이므로 답을 바꾸려면 무리·유리함수로 종류를 바꿔야 함."
    creative: "(1) 다항·무리·유리함수를 섞은 보기 중 정의역이 실수 전체인 것 고르기(★1) (2) 정의역이 아니라 치역을 구간 기호로 나타내게 하기(★2 · 이차함수 최솟값 결합) (3) 합성 √(x²+2x) 로 바꿔 x²+2x≥0 을 풀게 하기(★2 · 이차부등식)."
```

```yaml
- id: RPM-CALC1-0127
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=√(3-x) 의 정의역을 구간의 기호로 나타내기.
  category: "근호 안 ≥0 → 부등식 풀기 → 구간 기호"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 정의역을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3-x≥0 에서 x≤3 → (-∞, 3]. 부등식을 x 로 정리할 때 부호가 바뀌는 T-부호 함정 한 가지(3 포함이므로 닫힌 괄호). 두 단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "3-x≥0 → x≤3 → (-∞, 3]"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,3]$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식의 상수·계수 부호(3-x → x-3, 2x+1)를 바꿀 수 있음. 제약: 근호 안이 일차식이면 답은 반직선 구간 하나 · 계수 부호가 음수일 때 부등호 방향이 뒤집힘(T-부호)."
    creative: "(1) √(3-x)+√(x+1) 처럼 근호 두 개로 두 조건의 교집합(★2 · 경계 처리) (2) 1/√(3-x) 로 바꿔 등호가 빠지는 (-∞, 3)(★1~2 · T-경계) (3) 근호 안을 이차식 3-x² 로 바꿔 이차부등식과 결합(★2)."
```

```yaml
- id: RPM-CALC1-0128
  page: 23
  vendor_label: "교과서 02-2 구간"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=1/(x+1) 의 정의역을 구간의 기호로 나타내기.
  category: "분모 ≠0 → 제외점 → 두 구간으로 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 정의역을 구간 기호로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 x+1≠0 이므로 x≠-1 → 실수 전체에서 한 점을 뺀 (-∞, -1), (-1, ∞) 두 구간. 「점 하나 제외 = 열린구간 둘」 표기 규칙 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x+1≠0 → x≠-1 → (-∞, -1), (-1, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,-1)$, $(-1,\,\infty)$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 근(-1)과 분자를 바꿀 수 있음. 제약: 분모가 일차식이면 제외점 하나 · 구간 둘, 분모를 이차식으로 하면 제외점 둘 · 구간 셋으로 답의 개수가 늘어남."
    creative: "(1) 분모 x²-1 로 제외점 두 개(★1~2) (2) 분모 x²+1 로 바꿔 제외점이 없음을 알아채게 하기(★2 · 판별식 확인) (3) 유리식과 근호가 함께 있는 1/√(x+1) 로 두 조건을 동시에(★2 · 열린 괄호 처리)."
```

### 교과서 02-3 연속함수

공통 발문(U2-D5 · 0129~0132): 「다음 함수가 연속인 구간을 구하시오.」

```yaml
- id: RPM-CALC1-0129
  page: 23
  vendor_label: "교과서 02-3 연속함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x+3 이 연속인 구간을 구하기.
  category: "함수 종류 판별(다항) → 실수 전체에서 연속 → (-∞, ∞)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수가 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수(일차함수)는 정의역 전체에서 연속 → (-∞, ∞). 종류 판별 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일차함수 → 실수 전체에서 연속 → (-∞, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수를 바꿀 수 있음. 제약: 다항함수인 한 답은 (-∞, ∞) 고정 — 답을 바꾸려면 함수 종류를 바꾼다."
    creative: "(1) 다항·유리·무리 보기 중 실수 전체에서 연속인 것 고르기(★1) (2) 정의역이 [0, 5] 로 제한된 x+3 을 주어 「연속인 구간 = 주어진 정의역」임을 확인(★1~2 · 정의역 개념) (3) |x+3| 로 바꿔도 여전히 실수 전체에서 연속임을 설명하게 하기(★2)."
```

```yaml
- id: RPM-CALC1-0130
  page: 23
  vendor_label: "교과서 02-3 연속함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=√(x-1) 이 연속인 구간을 구하기.
  category: "근호 안 ≥0 → 정의역 [1, ∞) → 그 위에서 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수가 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x-1≥0 에서 정의역 [1, ∞) 이고 무리함수는 정의역에서 연속 → [1, ∞). 왼쪽 끝 1 은 우극한만으로 연속을 판정해 닫힌 괄호로 포함(T-경계). 두 단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x-1≥0 → 정의역 [1, ∞) → 무리함수는 정의역에서 연속 → [1, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$[1,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식(x-1 → 2-x, 2x+3)을 바꿀 수 있음. 제약: 계수 부호에 따라 반직선의 방향이 바뀌고, 끝점은 항상 포함(닫힌 괄호)."
    creative: "(1) 1/√(x-1) 로 바꿔 끝점이 빠지는 (1, ∞)(★1~2 · T-경계) (2) √(x-1)+√(4-x) 로 닫힌구간 [1, 4](★2 · 두 조건 교집합) (3) 끝점 x=1 에서 「연속」이라 부르는 근거(우극한 = 함숫값)를 서술하게 하기(★2 · 구간 끝 연속의 정의)."
```

```yaml
- id: RPM-CALC1-0131
  page: 23
  vendor_label: "교과서 02-3 연속함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    상수함수 f(x)=2 가 연속인 구간을 구하기.
  category: "상수함수 → 실수 전체에서 연속 → (-∞, ∞)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수가 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상수함수는 모든 점에서 극한값 = 함숫값 = 2 이므로 실수 전체에서 연속 → (-∞, ∞). 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "상수함수 → 모든 점에서 극한값=함숫값 → (-∞, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 를 다른 수(0 · 음수 포함)로 바꿀 수 있음. 제약: 답은 항상 (-∞, ∞)."
    creative: "(1) 「x=0 에서 f(x)=2, 그 밖에서 f(x)=2」 처럼 겉보기 조각함수로 주어 실은 상수함수임을 보게 하기(★1) (2) 가우스 기호 함수 [x] 와 대비해 상수함수와 계단함수의 연속 구간 차이를 묻기(★2) (3) x≠0 에서 2, x=0 에서 0 인 함수로 바꿔 한 점만 빠지는 (-∞, 0), (0, ∞)(★1~2)."
```

```yaml
- id: RPM-CALC1-0132
  page: 23
  vendor_label: "교과서 02-3 연속함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=1/x 가 연속인 구간을 구하기.
  category: "분모 ≠0 → 제외점 0 → 두 열린구간에서 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수가 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x≠0 에서 정의되고 유리함수는 정의역에서 연속이므로 (-∞, 0), (0, ∞). 제외점 하나를 두 열린구간으로 쓰는 표기 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x≠0 → 유리함수는 정의역에서 연속 → (-∞, 0), (0, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,0)$, $(0,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(x → x-2, x+3)와 분자 상수를 바꿀 수 있음. 제약: 제외점의 개수 = 분모의 서로 다른 실근의 개수이며 구간 수는 그보다 하나 많음."
    creative: "(1) 분모 x²-4 로 제외점 둘·구간 셋(★1~2) (2) 분모 x²+4 로 실근이 없어 (-∞, ∞) 가 되는 반례(★2) (3) x≠0 에서 1/x, x=0 에서 0 으로 정의를 보충해도 불연속인 이유(극한 발산)를 설명하게 하기(★2)."
```

### 교과서 02-4 연속함수의 성질

공통 발문(U2-D6 · 0133~0136): 「다음 함수가 연속인 구간을 구하시오.」 — 02-3 과 발문은 같지만 근거를 「연속함수의 합·차·곱·몫은 연속」이라는 성질로 대는 구역이다.

```yaml
- id: RPM-CALC1-0133
  page: 25
  vendor_label: "교과서 02-4 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x²-2x 가 연속인 구간을 구하기.
  category: "두 다항함수의 차 → 연속함수의 성질(차) → 실수 전체에서 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·곱·몫)로 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=x² 과 y=2x 가 각각 실수 전체에서 연속이므로 그 차도 실수 전체에서 연속 → (-∞, ∞). 0129 와 답은 같지만 근거를 「다항함수」가 아니라 「연속함수의 합·차·곱은 연속」이라는 성질로 대게 하는 문항. 한 단계 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x², 2x 각각 연속 → 차의 연속성 → (-∞, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수·차수를 자유롭게 바꿀 수 있음. 제약: 다항함수인 한 답은 (-∞, ∞) 고정 — 답을 바꾸려면 유리·무리 항을 넣어야 함."
    creative: "(1) x²-2x 를 x(x-2) 로 인수분해해 「곱의 연속성」으로 근거를 바꿔 말하게 하기(★1) (2) 다항식에 √x 나 1/x 를 한 항만 더해 연속 구간이 좁아지는 지점을 찾게 하기(★1~2) (3) f, g 가 연속일 때 f-g 가 연속임을 극한의 성질로 증명하게 하기(★2 · 서술)."
```

```yaml
- id: RPM-CALC1-0134
  page: 25
  vendor_label: "교과서 02-4 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x+1)(x²+x-2) 가 연속인 구간을 구하기.
  category: "두 다항함수의 곱 → 연속함수의 성질(곱) → 실수 전체에서 연속"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·곱·몫)로 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=x+1 과 y=x²+x-2 가 각각 실수 전체에서 연속이므로 곱도 실수 전체에서 연속 → (-∞, ∞). 전개하지 않아도 곱의 성질로 바로 판정. x²+x-2=(x+2)(x-1) 의 근은 분모가 아니므로 제외점이 되지 않음(0135·0136 의 몫과 대비). 한 단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x+1, x²+x-2 각각 연속 → 곱의 연속성 → (-∞, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 식(차수·계수)을 자유롭게 바꿀 수 있음. 제약: 다항식의 곱을 유지하는 한 답은 (-∞, ∞)."
    creative: "(1) 곱을 몫으로 바꿔 (x+1)/(x²+x-2) 로 두면 제외점 -2, 1 이 생김(★1 · 0136 형) (2) 「인수 x²+x-2 의 근 x=-2, 1 에서 불연속인가?」 로 곱과 몫을 구분하는 함정 질문(★1~2) (3) (x+1)·√(x²+x-2) 로 바꿔 근호 조건 x≤-2 또는 x≥1 을 구간 두 개로(★2 · 이차부등식 결합)."
```

```yaml
- id: RPM-CALC1-0135
  page: 25
  vendor_label: "교과서 02-4 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x-2)/(x-3) 이 연속인 구간을 구하기.
  category: "두 다항함수의 몫 → 분모≠0 → 제외점 3 → 두 열린구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·곱·몫)로 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모가 각각 연속이고 몫은 분모가 0 이 아닌 곳에서 연속이므로 x≠3 → (-∞, 3), (3, ∞). 분자의 근 x=2 는 제외점이 아님(T-범위 함정 하나). 두 단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "몫의 연속성 → 분모 x-3≠0 → (-∞, 3), (3, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,3)$, $(3,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 근(3)과 분자의 근(2)을 바꿀 수 있음. 제약: 분자·분모의 근을 서로 다르게 두어야 약분이 생기지 않음(같게 두면 0119 형 「구멍」으로 성격이 바뀜 · 제외점은 여전히 남음)."
    creative: "(1) 분자와 분모의 근을 바꿔 놓은 (x-3)/(x-2) 를 나란히 주고 제외점이 어느 쪽 근인지 대비(★1) (2) 분모를 x²-9 로 바꿔 제외점 두 개(★1~2) (3) x=3 에서 함숫값을 따로 정의해 주어도 연속이 될 수 없는 이유(극한 발산)를 설명하게 하기(★2)."
```

```yaml
- id: RPM-CALC1-0136
  page: 25
  vendor_label: "교과서 02-4 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x+1)/(x²-3x+2) 가 연속인 구간을 구하기.
  category: "몫의 연속성 → 분모 인수분해 → 제외점 1, 2 → 세 열린구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·곱·몫)로 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²-3x+2=(x-1)(x-2) 이므로 분모가 0 이 되는 x=1, 2 를 제외한 곳에서 연속 → (-∞, 1), (1, 2), (2, ∞). 제외점이 둘이면 구간은 셋이라는 표기가 요점. 인수분해·제외·표기 3단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "분모 인수분해 (x-1)(x-2) → x≠1, 2 → (-∞, 1), (1, 2), (2, ∞)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-\infty,\,1)$, $(1,\,2)$, $(2,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 이차식의 두 실근과 분자를 바꿀 수 있음. 제약: 분모가 서로 다른 두 정수근을 갖도록(인수분해 가능) 두면 구간 셋, 중근이면 구간 둘, 허근이면 (-∞, ∞) 로 답의 구조가 바뀜."
    creative: "(1) 분모 x²+3x+2 처럼 부호만 바꿔 근을 음수로(★1) (2) 분모를 x²-2x+1(중근) 또는 x²+1(허근)로 바꿔 구간 개수가 달라지는 이유를 묻기(★2 · 판별식) (3) 분자를 x-1 로 두어 약분 가능한 인수를 넣고도 x=1 이 여전히 제외점임을 판단하게 하기(★2 · 정의역 우선)."
```

U2-D7 · 0137: 공통 발문 없이 두 함수 f, g 를 주고 소문항 넷으로 성질 네 가지(합·곱·몫 둘)를 한 번에 묻는다.

```yaml
- id: RPM-CALC1-0137
  page: 25
  vendor_label: "교과서 02-4 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x-2, g(x)=x²+4x-5 에 대하여 ⑴ f+g ⑵ fg ⑶ f/g ⑷ g/f 가 연속인 구간을 각각 구하기.
  category: "연속함수의 성질(합·곱·몫) 네 가지 → 몫만 분모≠0 → 구간 표기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·곱·몫)로 연속인 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수 f, g 는 실수 전체에서 연속이므로 ⑴ 합 ⑵ 곱도 (-∞, ∞). 몫은 분모가 0 인 점을 빼야 하므로 ⑶ g=(x+5)(x-1)≠0 → (-∞, -5), (-5, 1), (1, ∞), ⑷ f=x-2≠0 → (-∞, 2), (2, ∞). 소문항 넷이라 단계 4~6(Mₛ 2)이지만 각각은 표준 판정 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f, g 다항 → 합·곱은 (-∞, ∞) → 몫은 분모 인수분해로 제외점 → 구간 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(-\infty,\,\infty)$ \quad (2) $(-\infty,\,\infty)$ \quad (3) $(-\infty,\,-5)$, $(-5,\,1)$, $(1,\,\infty)$ \quad (4) $(-\infty,\,2)$, $(2,\,\infty)$'
  answer_source: "답지(답 크롭은 (1)(2)까지 · (3)(4)는 해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 근(2)과 g 의 두 근(-5, 1)을 바꿀 수 있음. 제약: g 는 서로 다른 두 정수근을 갖는 이차식(인수분해 가능)으로, f 의 근은 g 의 근과 다르게 두어 ⑶·⑷ 의 제외점이 겹치지 않게 함."
    creative: "(1) f∘g, g∘f 같은 합성함수의 연속 구간을 소문항으로 추가(★2 · 합성의 연속성) (2) f 를 무리함수 √(x-2) 로 바꿔 ⑴·⑵ 부터 정의역 [2, ∞) 가 개입하게 하기(★2 · 정의역 교집합) (3) 「⑴~⑷ 중 x=1 에서 연속인 것을 모두 고르기」 로 묶어 한 점 판정으로 바꾸기(★1~2)."
```

### 교과서 02-5 최대·최소 정리

공통 발문(U2-D8 · 0138~0140): 「주어진 구간에서 다음 함수 f(x) 의 최댓값과 최솟값을 구하시오.」 — 식 옆에 닫힌구간이 함께 주어진다.

```yaml
- id: RPM-CALC1-0138
  page: 25
  vendor_label: "교과서 02-5 최대·최소 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    닫힌구간 [-2, 0] 에서 f(x)=x²+2x-1 의 최댓값과 최솟값 구하기.
  category: "닫힌구간에서 연속 확인 → 완전제곱·꼭짓점 위치 → 끝값과 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 연속함수의 최댓값·최솟값(최대·최소 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=(x+1)²-2 의 꼭짓점 x=-1 이 구간 안에 있으므로 최솟값 -2, 양 끝 f(-2)=f(0)=-1 이 최댓값. 이차함수는 실수 전체에서 연속이므로 닫힌구간에서 최대·최소가 반드시 존재한다는 정리의 확인 사례. 완전제곱·위치 확인·끝값 비교 3단계 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "닫힌구간에서 연속 → (x+1)²-2 꼭짓점 x=-1 ∈ [-2, 0] → 최솟값 -2 · 끝값 -1 이 최댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "최댓값: $-1$, 최솟값: $-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 구간 [-2, 0] 을 바꿀 수 있음. 제약: 꼭짓점이 구간 안에 있는지 밖에 있는지에 따라 최솟값(또는 최댓값)의 위치가 달라지므로 의도한 경우를 정해 둠 · 양 끝값이 같은 대칭 구간을 유지할지도 선택."
    creative: "(1) 꼭짓점이 구간 밖에 오도록 구간을 [0, 2] 로 옮겨 단조 구간의 끝값만 비교하게 하기(★1) (2) 구간을 열린구간 (-2, 0) 으로 바꿔 최댓값이 존재하지 않음을 설명하게 하기(★2 · 정리의 조건) (3) 구간 [a, a+2] 로 매개변수화해 최솟값이 -2 가 되는 a 의 범위 구하기(★2~3 · Mₐ 상승 · 경계 처리)."
```

```yaml
- id: RPM-CALC1-0139
  page: 25
  vendor_label: "교과서 02-5 최대·최소 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    닫힌구간 [2, 4] 에서 f(x)=2/(x-1) 의 최댓값과 최솟값 구하기.
  category: "구간 안에서 연속 확인(분모≠0) → 감소함수 → 양 끝값이 최대·최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 연속함수의 최댓값·최솟값(최대·최소 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모의 근 x=1 이 [2, 4] 밖이므로 f 는 구간에서 연속이고, x-1>0 에서 감소하므로 왼쪽 끝 f(2)=2 가 최댓값, 오른쪽 끝 f(4)=2/3 가 최솟값. 연속 확인 → 증감 → 끝값 3단계 · 통찰 없음 → ★1. 제외점이 구간 밖인지 확인하는 것이 T-범위 함정 하나.
  tier: star_1
  mechanism_primary: "x=1 ∉ [2, 4] → 구간에서 연속 · 감소 → f(2)=2 최대 · f(4)=2/3 최소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $2$, 최솟값: $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수(2), 분모의 근(1), 구간 [2, 4] 를 바꿀 수 있음. 제약: 분모의 근이 구간 밖에 있어야 정리가 적용되고, 분자 부호·구간 위치(근의 왼쪽/오른쪽)에 따라 증가·감소가 바뀌어 최대·최소의 위치가 뒤바뀜."
    creative: "(1) 구간을 [0, 4] 처럼 제외점을 포함하도록 바꿔 최댓값·최솟값이 존재하지 않는 이유를 묻기(★2 · 정리의 조건) (2) 분자를 -2 로 바꿔 증가함수로 뒤집기(★1) (3) 2/(x-1)+x 처럼 항을 더해 단조가 깨지게 하면 미분(05단원)이 필요해져 단원 범위를 벗어남 — 이 단원 안에서는 단조 유지(★1~2)."
```

```yaml
- id: RPM-CALC1-0140
  page: 25
  vendor_label: "교과서 02-5 최대·최소 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    닫힌구간 [3, 8] 에서 f(x)=1-√(x+1) 의 최댓값과 최솟값 구하기.
  category: "구간 안에서 연속 확인(근호 안≥0) → 감소함수 → 양 끝값이 최대·최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 연속함수의 최댓값·최솟값(최대·최소 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x+1≥0 인 [3, 8] 에서 연속이고 √(x+1) 이 증가하므로 f 는 감소 → f(3)=1-2=-1 이 최댓값, f(8)=1-3=-2 가 최솟값. 근호 안이 완전제곱수(4, 9)가 되도록 끝점이 맞춰져 있음. 연속 확인 → 증감 → 끝값 3단계 · 통찰 없음 → ★1. 부호 -√ 때문에 증가·감소가 뒤집히는 T-부호 함정 하나.
  tier: star_1
  mechanism_primary: "[3, 8] 에서 연속 · -√ 로 감소 → f(3)=-1 최대 · f(8)=-2 최소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "최댓값: $-1$, 최솟값: $-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식(x+1), 앞의 상수(1), 구간 [3, 8] 을 바꿀 수 있음. 제약: 구간이 정의역(x≥-1) 안에 있어야 하고, 끝점에서 근호 안이 완전제곱수가 되도록 맞춰야 답이 정수."
    creative: "(1) 1+√(x+1) 로 부호를 바꿔 증가함수로(★1) (2) 구간을 [-1, 3] 으로 옮겨 정의역의 끝점 x=-1 이 구간 끝이 되게 하기(★1~2 · 끝점 연속) (3) 2-√(4-x) 처럼 근호 안 계수를 음수로 바꿔 증감 판단을 한 번 더 뒤집기(★2 · T-부호 둘)."
```

### 교과서 02-6 사잇값 정리

U2-D9 · 0141~0142: 공통 발문 없이 각각 증명 과정이 상자로 주어지고 빈칸 ㈎~㈑ 를 채운다.

```yaml
- id: RPM-CALC1-0141
  page: 25
  vendor_label: "교과서 02-6 사잇값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x²-4 에 대하여 f(c)=-1 인 c 가 열린구간 (-1, 2) 에 적어도 하나 존재함을 증명하는 과정의 빈칸 ㈎(연속) · ㈏(사잇값 정리) 채우기.
  category: "증명 틀 읽기 → 닫힌구간에서 연속 → f(-1)<-1<f(2) → 사잇값 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 증명 과정의 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항함수는 실수 전체에서 연속이므로 [-1, 2] 에서도 연속(㈎). f(-1)=-3, f(2)=0 이고 -3<-1<0 이므로 사잇값 정리(㈏)에 의해 f(c)=-1 인 c 가 (-1, 2) 에 존재. 증명 틀이 다 주어져 있어 정리의 이름과 조건(연속 · 끝값 사이의 값)을 맞추는 문항 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "[-1, 2] 에서 연속 → f(-1)=-3 < -1 < f(2)=0 → 사잇값 정리 → f(c)=-1 인 c 존재"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ 연속 \quad ㈏ 사잇값 정리'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)(이차식), 목표값 -1, 구간 (-1, 2) 를 바꿀 수 있음. 제약: 목표값이 f(끝점) 두 값 사이에 놓이고 f(a)≠f(b) 이어야 정리가 적용됨 · 끝값이 정수가 되도록."
    creative: "(1) 빈칸을 없애고 같은 명제를 처음부터 증명하게 하기(★2 · 서술형) (2) 「c 의 존재」를 「방정식 x²-4=-1 이 (-1, 2) 에서 실근을 가짐」으로 바꿔 0142 형과 연결(★1~2) (3) 목표값 k 를 매개변수로 두고 정리가 보장하는 k 의 범위 -3<k<0 을 구하기(★2 · Mₐ 상승)."
```

```yaml
- id: RPM-CALC1-0142
  page: 25
  vendor_label: "교과서 02-6 사잇값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x³-3x+1=0 이 열린구간 (0, 1) 에서 적어도 하나의 실근을 가짐을 증명하는 과정의 빈칸 ㈎ f(0) · ㈏ f(1) · ㈐ 부등호 · ㈑ f(c) 의 값 채우기.
  category: "f(x) 설정 → 끝값 계산 → f(0)f(1)<0 → 사잇값 정리 → 실근 존재"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 증명 과정의 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x³-3x+1 은 [0, 1] 에서 연속이고 f(0)=1(㈎), f(1)=-1(㈏) 이므로 f(0)f(1)<0(㈐). 사잇값 정리에 의해 f(c)=0(㈑) 인 c 가 (0, 1) 에 존재 → 실근 존재. 끝값 대입 두 번과 부호 판정 · 통찰 없음 · M_total 4 → ★1. 「양 끝의 부호가 다르면 실근이 있다」는 사잇값 정리의 방정식 활용 기본형.
  tier: star_1
  mechanism_primary: "f(0)=1 · f(1)=-1 → f(0)f(1)<0 → 사잇값 정리 → f(c)=0 인 c ∈ (0, 1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $1$ \quad ㈏ $-1$ \quad ㈐ $<$ \quad ㈑ $0$'
  answer_source: "답지(해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수와 구간 (0, 1) 을 바꿀 수 있음. 제약: 양 끝값의 부호가 달라야 하고(f(a)f(b)<0) 끝값이 정수가 되도록 계수를 맞춤 · 부호 조건이 성립하면 구간 안 실근은 자동 보장."
    creative: "(1) 같은 f 로 (-2, -1), (0, 1), (1, 2) 세 구간의 부호를 모두 조사해 「실근 3개」를 결론짓게 하기(★2 · 삼차방정식 실근 개수) (2) f(0)f(1)>0 인 구간을 주고 「실근이 없다고 할 수 없는 이유」를 묻기(★2 · 정리의 역은 성립하지 않음) (3) 빈칸 없이 서술형으로 증명하게 하기(★2 · 서술)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 30 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 30 · premium 0
- type_hint 상위: 「집합을 구간 기호로 나타내기」 6 · 「연속함수의 성질(합·곱·몫)로 연속인 구간 구하기」 5 · 「한 점에서의 연속·불연속 조사(식)」 4 · 「함수가 연속인 구간 구하기」 4 · 「그래프에서 불연속인 이유 판별(연속의 세 조건)」 3 · 「함수의 정의역을 구간 기호로 나타내기」 3 · 「닫힌구간에서 연속함수의 최댓값·최솟값(최대·최소 정리)」 3 · 「사잇값 정리 증명 과정의 빈칸 채우기」 2
- 그림: 3문(`crop:fig-0113.png` · `crop:fig-0114.png` · `crop:fig-0115.png`)
- M_total: 4 가 29문 · 5 가 1문(0137 · 소문항 넷). 모두 교과서 구역이라 벤더 신호는 ★1 출발 하나뿐이고, 통찰·M 조정으로 라벨이 움직인 문항은 없음. 전사 답을 다시 구해 모두 일치(「전사 답 확인 필요」 0).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위 30문은 모두 교과서 기본 문제로 벤더 신호(★1)와 M·I 판정이 일치함 | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 통합해도 될 유형: 「함수가 연속인 구간 구하기」(02-3 · 0129~0132)와 「연속함수의 성질(합·곱·몫)로 연속인 구간 구하기」(02-4 · 0133~0137)는 골조(함수 종류 판별 → 제외점 → 구간 표기)가 같다. 벤더가 나눈 것은 근거(정의역 vs 성질)의 차이일 뿐이므로 카탈로그에서는 한 유형 「함수가 연속인 구간」(base ★1)으로 묶고 근거를 하위 태그로 둔다.
- 통합해도 될 유형: 「집합을 구간 기호로 나타내기」(0120~0125)와 「함수의 정의역을 구간 기호로 나타내기」(0126~0128)는 표기 연습이라 한 유형 「구간 기호」(base ★1)로 묶되, 정의역 쪽(무리·유리함수 조건)은 하위 태그로.
- 통합해도 될 유형: 「그래프에서 불연속인 이유 판별」(0113~0115)과 「한 점에서의 연속·불연속 조사(식)」(0116~0119)는 표현(그래프/식)만 다르고 골조(연속의 세 조건 대조)가 같으므로 한 유형 「한 점에서의 연속 판정」의 두 표현으로 둔다.
- 따로 세울 유형: 유형 구역(2/3 부분)에서 이어질 「연속이 되도록 하는 미정계수」(★2)·「(x-a)f(x)=g(x) 꼴에서 f(a) 결정」(★2~3)은 위 「한 점에서의 연속 판정」과 골조가 달라 별도 유형으로.
- 따로 세울 유형: 「최대·최소 정리」(0138~0140)와 「사잇값 정리」(0141~0142)는 정리별로 따로 세운다. 사잇값 정리는 「증명 빈칸」(★1)과 뒤 구역의 「실근의 존재·개수」(★2~3)로 base ★ 가 갈리므로 두 유형으로 분리하는 것이 후보.
