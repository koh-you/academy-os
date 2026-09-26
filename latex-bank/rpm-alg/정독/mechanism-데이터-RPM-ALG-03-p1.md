---
name: mechanism-데이터-RPM-ALG-03-p1
description: RPM 대수 03 지수함수(1/3 · 교과서 03-1~03-4 + 유형 01~05) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 03 지수함수
  unit_code: ALG-03
  part: "1/3"
  extract_range: "31~34쪽 · 0222~0260"
  total_problems: 39
  unit_total: 115
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 03 지수함수 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 03 지수함수 단원의 첫 부분(31~34쪽 · 0222~0260 · 39문)을 다룬다. 31쪽은 교과서 구역 4개(03-1 뜻과 그래프 · 03-2 최대·최소 · 03-3 방정식 · 03-4 부등식)의 드릴 18문이고, 32~34쪽은 유형 01(성질) · 02(평행이동·대칭이동) · 03(그래프의 활용) · 04(대소 관계) · 05(최대·최소; 지수가 일차식) 21문이다. 벤더 난이도 신호는 구역(교과서 → 유형)과 유형 안 난이도(하·중하·중·상중), 태그(대표문제 · 서술형)로 나타나며, 이 범위에는 유형 UP·시험에 꼭 나오는 문제·실력 Up 구역과 기출 태그가 없다. 그림 문항은 6문(0225 · 0247 · 0248 · 0249 · 0251 · 0252)이고 크롭 이미지를 보고 판정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 통찰 라벨(`insights[]` · 절차형이면 빈 배열), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 통찰 골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점(`variation_notes.creative`)을 채웠다. 답은 전사본 answer 를 그대로 옮겼고 39문 모두 재계산 결과와 일치했다.

## 문항 데이터

### 교과서 03-1 지수함수의 뜻과 그래프

```yaml
- id: RPM-ALG-0222
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    보기 여섯 식(2^x · x^3 · 1/x^2 · 0.5^x · (√3)^x · (4x)^2) 중 지수함수인 것을 모두 고르기.
  category: "지수함수의 정의 → 밑 상수·지수 변수 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 뜻(지수함수 판별)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 1 이 아닌 양의 상수이고 지수에 변수가 있는 꼴만 고르면 끝. x^3 · 1/x^2 · (4x)^2 는 밑이 변수인 거듭제곱 함수라 제외. 정의 확인 한 단계·통찰 없음·M_total 4 → 교과서 출발점 ★1.
  tier: star_1
  mechanism_primary: "각 식의 밑·지수 자리 확인 → 밑이 양의 상수(≠1)·지수가 x 인 것 → ㄱ, ㄹ, ㅁ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ, ㅁ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 식을 바꿀 수 있음(3^{-x} · (1/2)^{x+1} · x^{1/2} · 1^x · (-2)^x 등). 제약: 밑 1 과 음수 밑은 지수함수가 아니라는 정의 조건(a>0, a≠1)을 보기에 넣으면 답 개수를 다시 셈."
    creative: "(1) y=1^x, y=(-2)^x 를 보기에 넣어 정의 조건 확인(★1 유지 · T-범위 1개 추가) (2) y=2^{x+1}, y=4·2^x 처럼 지수법칙으로 정리해야 지수함수임이 보이는 식(★2 후보) (3) 표·그래프만 주고 지수함수인지 판별(I-RT d1 · ★2)."
```

```yaml
- id: RPM-ALG-0223
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    지수함수 y=2^x 의 그래프 그리기(그룹 발문 「다음 지수함수의 그래프를 그리시오」).
  category: "지수함수 그래프 그리기 → 점 (0,1) · 점근선 x축 · 증가"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프 그리기(밑>1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 2>1 이라 증가하는 곡선. (0,1) · (1,2) · (-1,1/2) 를 찍고 x축을 점근선으로 그리면 끝. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 2>1 → 증가 곡선 · 점 (0,1) 통과 · 점근선 y=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(그래프 · 쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 3 · 5 · 10 등 1 보다 큰 수로. 제약: 답이 그림이므로 격자에 찍을 점(x=-1, 0, 1)의 y좌표가 간단한 유리수여야 함."
    creative: "(1) y=2^x 와 y=3^x 를 한 좌표평면에 그리고 x>0 · x<0 에서의 위아래를 묻기(★1~2) (2) 그려진 그래프에서 밑 a 를 읽기(역방향 · ★1) (3) 함숫값 표에서 그래프 고르기(★1)."
```

```yaml
- id: RPM-ALG-0224
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    지수함수 y=(1/2)^x 의 그래프 그리기(그룹 발문 「다음 지수함수의 그래프를 그리시오」).
  category: "지수함수 그래프 그리기 → 점 (0,1) · 점근선 x축 · 감소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프 그리기(0<밑<1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/2<1 이라 감소하는 곡선. (0,1) · (1,1/2) · (-1,2) 를 찍고 x축을 점근선으로. 0223 의 y축 대칭. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 1/2<1 → 감소 곡선 · 점 (0,1) 통과 · 점근선 y=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(그래프 · 쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 1/3 · 1/5 · 0.1 등 0<a<1 로. 제약: 격자에 찍을 점의 좌표가 간단한 유리수."
    creative: "(1) y=2^x 와 함께 그려 y축 대칭임을 확인(★1) (2) y=2^{-x} 로 표기해 같은 그래프임을 인식(T-표기 · ★1~2) (3) 그래프에서 밑을 읽기(★1)."
```

```yaml
- id: RPM-ALG-0225
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림의 y=a^x (a>1) 그래프를 보고 ⑴ y=a^{x-1} ⑵ y=a^x+1 ⑶ y=-a^x ⑷ y=(1/a)^x 의 그래프를 그리기.
  category: "그래프의 평행이동 · x축 대칭 · y축 대칭 그리기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(그래프 그리기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ x축 방향 1 평행이동 ⑵ y축 방향 1 평행이동(점근선 y=1) ⑶ x축 대칭 ⑷ (1/a)^x=a^{-x} 로 y축 대칭. 소문항마다 이동 한 번씩이며 점 (0,1)·점근선만 함께 옮기면 됨. 밑이 문자 a 라 Mₐ 2 · M_total 5 · 통찰 없음 → 교과서 출발점 ★1.
  tier: star_1
  mechanism_primary: "각 식을 y=a^x 의 평행이동/대칭이동으로 읽기 → 점 (0,1)·점근선을 함께 옮겨 그리기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "풀이 참조"
  answer_source: "답지(그래프 · 쪽 렌더)"
  figure: crop:fig-0225.png
  latex: latex-bank/rpm-alg/items/0225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(1 → 2, -3)과 대칭축 조합을 바꿀 수 있음. 제약: 그림의 y=a^x 라벨은 고정(a>1 곡선). ⑷ 는 「밑의 역수 = y축 대칭」이 핵심이라 (1/a)^x 꼴을 유지."
    creative: "(1) 이동 두 번을 합성(x축 방향 1 + y축 방향 -2)해 점근선을 묻기(★1~2) (2) 그려진 네 그래프와 네 식을 짝짓기(★2) (3) 0<a<1 그림으로 바꿔 증감 반전 확인(T-부호 · ★2)."
```

```yaml
- id: RPM-ALG-0226
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/3)^x 의 그래프를 x축 방향으로 2, y축 방향으로 -2 만큼 평행이동한 그래프의 식.
  category: "평행이동 → x 대신 x-2 · y 대신 y+2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(이동한 그래프의 식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 를 x-2 로, y 를 y+2 로 바꾸면 y=(1/3)^{x-2}-2. x축 방향 이동이 지수에 부호 반대로 들어가는 것(T-부호) 하나. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x → x-2, y → y+2 대입 → y=(1/3)^{x-2}-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\left(\dfrac{1}{3}\right)^{x-2}-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (2, -2) 를 다른 정수로. 제약: x축 방향 이동은 지수에 부호 반대로 들어가므로 답의 부호 확인. 밑을 바꿔도 골조 동일."
    creative: "(1) 답을 3^{2-x}-2 처럼 밑을 바꾼 꼴로 요구해 지수법칙까지(★1~2) (2) 이동한 그래프가 지나는 점을 주고 이동량 역산(★2 · I-BW d1 후보) (3) 이동한 그래프의 점근선·y절편을 묻기(★1)."
```

```yaml
- id: RPM-ALG-0227
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/3)^x 의 그래프를 x축에 대하여 대칭이동한 그래프의 식.
  category: "x축 대칭 → y 대신 -y"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(대칭이동한 그래프의 식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 를 -y 로 바꾸면 y=-(1/3)^x. 부호 하나 붙이는 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y → -y 대입 → y=-(1/3)^x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-\left(\dfrac{1}{3}\right)^{x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 바꿈. 제약: x축 대칭은 부호만 바뀌고 점근선은 그대로 y=0 이므로 답 형태는 항상 -a^x."
    creative: "(1) x축 대칭 후 평행이동 합성(★2) (2) 대칭이동한 그래프의 치역(y<0)을 묻기(★1) (3) 그림에서 어느 대칭인지 판별(★1)."
```

```yaml
- id: RPM-ALG-0228
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/3)^x 의 그래프를 y축에 대하여 대칭이동한 그래프의 식.
  category: "y축 대칭 → x 대신 -x → 밑의 역수로 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(대칭이동한 그래프의 식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 를 -x 로 바꾸면 (1/3)^{-x} 이고 이를 3^x 로 정리(T-표기). 「y축 대칭 = 밑의 역수」 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x → -x 대입 → (1/3)^{-x} = 3^x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=3^x$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 1/2 · 1/5 로. 제약: 답은 밑을 역수로 정리한 꼴(3^x)까지 요구."
    creative: "(1) 「y축 대칭이 밑의 역수와 같다」를 묻는 ㄱㄴㄷ(★2 · I-EQV d1) (2) y축 대칭 후 x축 방향 평행이동으로 -(x-k) 부호 처리(★2) (3) 두 그래프의 교점 (0,1) 과 대칭성(★1)."
```

```yaml
- id: RPM-ALG-0229
  page: 31
  vendor_label: "교과서 03-1 지수함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/3)^x 의 그래프를 원점에 대하여 대칭이동한 그래프의 식.
  category: "원점 대칭 → x 대신 -x · y 대신 -y → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(대칭이동한 그래프의 식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x → -x, y → -y 두 부호를 함께 바꾸면 -y=(1/3)^{-x} → y=-3^x. 부호 두 개(T-부호) 처리 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x → -x, y → -y → -y=(1/3)^{-x} → y=-3^x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-3^x$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 바꿈. 제약: 원점 대칭 = y축 대칭 + x축 대칭이라 밑 역수와 앞 부호가 함께 바뀜."
    creative: "(1) 원점 대칭 그래프의 점근선·치역 묻기(★1) (2) 원점 대칭 후 평행이동 합성해 지나는 점(0244 계열 · ★2) (3) 네 가지 이동(0226~0229)을 그림 4개와 짝짓기(★2)."
```

### 교과서 03-2 지수함수의 최대·최소

```yaml
- id: RPM-ALG-0230
  page: 31
  vendor_label: "교과서 03-2 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -1≤x≤1 에서 y=5^x 의 최댓값과 최솟값.
  category: "증가함수 → 구간 양 끝값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 5>1 증가이므로 오른쪽 끝 x=1 에서 최대 5, 왼쪽 끝 x=-1 에서 최소 1/5. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 5>1 증가 → 최댓값 f(1)=5 · 최솟값 f(-1)=1/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $5$, 최솟값: $\dfrac{1}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 · 3 · 10)과 구간 끝점을 바꿈. 제약: 밑>1 유지(0<밑<1 로 바꾸면 0231 계열). 끝값이 간단한 유리수."
    creative: "(1) 구간을 한쪽 열린 구간으로 바꿔 최솟값 없음 판단(T-경계 · ★2) (2) 최댓값·최솟값의 합/곱 묻기(★1) (3) 최댓값이 주어질 때 밑 a 구하기(역방향 · ★2)."
```

```yaml
- id: RPM-ALG-0231
  page: 31
  vendor_label: "교과서 03-2 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -2≤x≤2 에서 y=(1/4)^x 의 최댓값과 최솟값.
  category: "감소함수 → 구간 양 끝값(왼쪽 끝이 최대) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/4<1 감소이므로 왼쪽 끝 x=-2 에서 최대 16, 오른쪽 끝 x=2 에서 최소 1/16. 감소라 끝점이 뒤바뀌는 것(T-부호)이 유일한 함정. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 1/4<1 감소 → 최댓값 f(-2)=16 · 최솟값 f(2)=1/16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $16$, 최솟값: $\dfrac{1}{16}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 0<a<1 과 구간 끝점을 바꿈. 제약: 감소함수라 최댓값이 왼쪽 끝에서 나오는 반전 유지. 끝값이 간단한 유리수."
    creative: "(1) 밑을 4^{-x} 로 표기해 감소 인식을 요구(★1~2) (2) 최댓값과 최솟값의 비 묻기(★1) (3) 밑 a 의 범위를 모르는 채 최댓값 조건 → 케이스 분기(0260 계열 · ★3)."
```

```yaml
- id: RPM-ALG-0232
  page: 31
  vendor_label: "교과서 03-2 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x≤2 에서 y=3^{2x-1} 의 최댓값과 최솟값.
  category: "지수 일차식의 증감 · 밑>1 → 전체 증가 → 양 끝값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수 2x-1 이 증가 일차식이고 밑 3>1 이라 전체가 증가. x=2 에서 3^3=27, x=0 에서 3^{-1}=1/3. 지수 범위 -1~3 을 거치는 두 단계뿐. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "지수 2x-1 증가 · 밑 3>1 → 전체 증가 → 최댓값 f(2)=27 · 최솟값 f(0)=1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $27$, 최솟값: $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 일차식의 계수·상수(2x-1 → 3x+1, -x+2)와 구간을 바꿈. 제약: 지수 계수가 음수면 감소로 뒤집힘(T-부호). 끝값이 밑의 정수 거듭제곱."
    creative: "(1) 지수 계수를 음수로(y=3^{1-2x}) 감소 처리(★1~2) (2) 3^{2x-1}=(1/3)·9^x 로 표현을 바꿔 최대·최소(★2 · I-RT d1) (3) 상수 a 를 넣어 최댓값 조건에서 a 를 결정(0259 계열 · ★2)."
```

```yaml
- id: RPM-ALG-0233
  page: 31
  vendor_label: "교과서 03-2 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정의역이 실수 전체인 y=(1/2)^{x^2+2x+3} 의 최댓값과 최솟값.
  category: "지수 완전제곱 → 지수의 최솟값 → 밑<1 이라 함수의 최댓값 · 최솟값 없음"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 이차식인 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수를 (x+1)^2+2 ≥ 2 로 고쳐 최솟값 2 를 찾고, 밑 1/2<1 이라 지수가 최소일 때 함수가 최대라는 반전으로 (1/2)^2=1/4. 지수가 위로 유계가 아니라 최솟값은 없다. 반전(T-부호)·최솟값 없음(T-범위) 두 함정으로 교과서 구역에서 가장 무겁지만 통찰 없는 표준 절차·M_total 5 → 교과서 출발점 ★1 유지.
    [분류 이슈] 함정 2개(밑<1 반전 + 최솟값 없음)라 유형 구역 「중하」급(★2)과 체감이 같음. 라벨은 교과서 ★1 로 두고 후보 ★2 기록.
  tier: star_1
  mechanism_primary: "x^2+2x+3=(x+1)^2+2 ≥ 2 → 밑 1/2<1 감소 → 지수 최소일 때 최대 (1/2)^2=1/4 · 지수 위로 무한이라 최솟값 없음"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $\dfrac{1}{4}$, 최솟값: 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수(꼭짓점 위치·최솟값)와 밑을 바꿈. 제약: 밑 0<a<1 을 유지해야 「지수 최소 ↔ 함수 최대」 반전이 살고, 정의역이 실수 전체이면 한쪽 극값은 「없다」."
    creative: "(1) 밑을 2 로 바꿔 최솟값만 존재(★1) (2) 정의역을 구간으로 제한해 양 끝과 꼭짓점 비교(★2 · T-경계) (3) 지수 이차식의 최고차 계수를 음수(-x^2+…)로 해 최대·최소가 다시 뒤집히게(★2) (4) 최댓값 조건으로 이차식의 상수 k 결정(★2 · I-BW d1)."
```

### 교과서 03-3 지수함수의 활용; 방정식

```yaml
- id: RPM-ALG-0234
  page: 31
  vendor_label: "교과서 03-3 지수함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 2^x=128 풀기.
  category: "우변을 밑의 거듭제곱으로 → 지수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식; 밑을 같게 할 수 있는 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    128=2^7 이므로 x=7. 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "128=2^7 → 지수 비교 → x=7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x=7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변을 밑의 거듭제곱(2^k · 3^k · 1/32)으로. 제약: 우변이 밑의 정수·유리수 거듭제곱이어야 함."
    creative: "(1) 우변을 근호(4√2)로 주어 유리수 지수 변환(★1~2) (2) 좌변을 2^{x+1}·4^x 로 바꿔 지수법칙 결합(★2) (3) 해를 다른 식에 대입하는 2단 구성(★2)."
```

```yaml
- id: RPM-ALG-0235
  page: 31
  vendor_label: "교과서 03-3 지수함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 (1/9)^x=3√3 풀기.
  category: "양변을 밑 3 의 거듭제곱으로 → 지수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식; 밑을 같게 할 수 있는 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/9)^x=3^{-2x}, 3√3=3^{3/2} 로 통일하면 -2x=3/2. 음의 지수·유리수 지수(T-부호) 처리 두 번이지만 한 줄. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1/9)^x=3^{-2x} · 3√3=3^{3/2} → -2x=3/2 → x=-3/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=-\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/9 → 1/27, 1/4 · 우변 근호 표현을 바꿈. 제약: 양변이 같은 소수 밑의 거듭제곱으로 정리돼야 하고 답의 부호(음수 지수)를 확인."
    creative: "(1) 양변 밑이 다른 소수 거듭제곱(4 와 1/32)이라 두 번 변환(★2) (2) 지수에 일차식(2x-1)을 넣어 정리 단계 추가(★2) (3) 해가 정수가 되도록 하는 상수 조건 역산(★2)."
```

```yaml
- id: RPM-ALG-0236
  page: 31
  vendor_label: "교과서 03-3 지수함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    4^x-6·2^x+8=0 에 대해 ⑴ 2^x=t 로 치환한 방정식 ⑵ t 의 해 ⑶ 원래 방정식의 해를 단계별로 구하기.
  category: "치환 → 이차방정식 인수분해 → 역치환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식; a^x 꼴이 반복되는 경우(치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4^x=(2^x)^2 로 t^2-6t+8=0, (t-2)(t-4)=0 에서 t=2, 4 → x=1, 2. 치환·인수분해·역치환이 소문항으로 안내돼 있어 골조를 고를 필요가 없고, t>0 조건도 두 해가 모두 양수라 기각이 없다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4^x=(2^x)^2 → t^2-6t+8=0 → t=2, 4 → 2^x=2, 4 → x=1, 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "(1) $t^2-6t+8=0$ (2) $t=2$ 또는 $t=4$ (3) $x=1$ 또는 $x=2$"
  answer_source: "답지(답 크롭에 (3) 잘림 · 해설 크롭으로 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수(6, 8)를 바꿈. 제약: t 의 두 해가 밑 2 의 거듭제곱(양수)이어야 x 가 정수로 떨어짐. 한 해를 음수로 만들면 t>0 기각이 생겨 ★2(I-VF d1)."
    creative: "(1) 소문항 안내를 없애고 한 문장으로 묻기(★2) (2) t 의 한 해가 음수가 되도록 해 기각 단계 추가(★2 · I-VF d1) (3) 두 근의 합·곱을 묻는 근과 계수의 관계 결합(★2~3 · I-XU 후보)."
```

### 교과서 03-4 지수함수의 활용; 부등식

```yaml
- id: RPM-ALG-0237
  page: 31
  vendor_label: "교과서 03-4 지수함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부등식 3^{2x+1}<3^x 풀기.
  category: "밑>1 → 지수 부등식(방향 유지)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식; 밑을 같게 할 수 있는 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 3>1 이라 2x+1<x 그대로 → x<-1. 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 3>1 → 지수 부등식 2x+1<x → x<-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x<-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 일차식을 바꿈. 제약: 밑>1 이라 부등호 방향 유지. 해가 간단한 유리수 경계."
    creative: "(1) 우변을 9^x 로 바꿔 밑 통일 추가(★1) (2) 밑을 0<a<1 로 바꿔 방향 반전(0238 계열) (3) 해가 정수 n개가 되도록 하는 상수 조건(★2 · I-BW d1)."
```

```yaml
- id: RPM-ALG-0238
  page: 31
  vendor_label: "교과서 03-4 지수함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부등식 (1/5)^{2x}<(1/5)^3 풀기.
  category: "0<밑<1 → 지수 부등식(방향 반전)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식; 밑을 같게 할 수 있는 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/5<1 이라 부등호가 뒤집혀 2x>3 → x>3/2. 반전(T-부호) 하나. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 1/5<1 → 부등호 반전 → 2x>3 → x>3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x>\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 0<a<1 과 지수를 바꿈. 제약: 반전 유지. 우변을 125 로 주면 (1/5)^{-3} 로 바꾸는 단계가 추가됨."
    creative: "(1) 우변을 밑의 역수 거듭제곱(125)으로(★1~2) (2) 지수에 이차식을 넣어 이차부등식 결합(★2) (3) 양변의 밑이 서로 역수(2^x 와 (1/2)^{x-1})인 경우(★2)."
```

```yaml
- id: RPM-ALG-0239
  page: 31
  vendor_label: "교과서 03-4 지수함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    3^{2x}-10·3^x+9≤0 에 대해 ⑴ 3^x=t 로 치환한 부등식 ⑵ t 의 해 ⑶ 원래 부등식의 해를 단계별로 구하기.
  category: "치환 → 이차부등식 → 역치환(밑>1 방향 유지)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식; a^x 꼴이 반복되는 경우(치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3^{2x}=(3^x)^2 로 t^2-10t+9≤0, (t-1)(t-9)≤0 에서 1≤t≤9 → 3^0≤3^x≤3^2 → 0≤x≤2. 소문항이 골조를 안내하고 t>0 조건과 구간이 겹쳐 절단이 없다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3^{2x}=(3^x)^2 → t^2-10t+9≤0 → 1≤t≤9 → 3^0≤3^x≤3^2 → 0≤x≤2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $t^2-10t+9\le 0$ (2) $1\le t\le 9$ (3) $0\le x\le 2$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-alg/items/0239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수를 바꿈. 제약: t 구간의 양 끝이 밑 3 의 거듭제곱이어야 하고, 왼쪽 끝이 음수면 t>0 으로 잘려 0<t≤9 가 됨(T-경계)."
    creative: "(1) 부등호를 ≥ 로 바꿔 두 구간 해(★2) (2) t 구간의 왼쪽 끝을 음수로 해 t>0 절단(★2 · I-VF d1) (3) 해에 속하는 정수의 개수 묻기(★2)."
```

### 유형 01 지수함수의 성질

```yaml
- id: RPM-ALG-0240
  page: 32
  vendor_label: "유형 01 지수함수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=a^x (a>0, a≠1) 의 성질(점근선 · 점 (0,1) · 지나는 사분면 · 증감 · 치역) 중 옳지 않은 것. 5지선다.
  category: "지수함수의 성질 확인 → 밑의 범위에 따라 달라지는 증감"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 성질(정의역·치역·점근선·증감)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점근선 x축 · (0,1) 통과 · 1,2사분면 · 치역 양의 실수는 밑에 관계없이 참이고, 「x 증가 → y 증가」만 0<a<1 에서 거짓. 성질 암기 확인 한 단계(Mₛ 1), 밑이 문자라 Mₐ 2. 유형 대표문제 출발점 ★2 이나 통찰 0·M_total 5 → −1 조정 ★1.
    [분류 이슈] 대표문제인데 ★1 — 유형 01 세 문항이 모두 성질 암기 확인이라 대표 난이도 자체가 ★1. 벤더 출발점 ★2 와 1단 차이지만 「대표문제 −1」 사례라 기록.
  tier: star_1
  mechanism_primary: "각 성질을 a>1 · 0<a<1 두 경우로 점검 → 증감만 밑에 따라 달라짐 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 범위를 a>1 로 고정하면 ④ 가 참이 되므로 다른 선택지(예: 「그래프는 제3사분면을 지난다」)를 거짓으로 바꿔야 함. 제약: 거짓 선택지는 하나만."
    creative: "(1) y=a^x · y=a^{-x} · y=-a^x 의 성질을 섞은 ㄱㄴㄷ(★2) (2) 「a 의 값에 관계없이 옳은 것」으로 묻기(★2 · I-MI d1 — 두 범위 모두 점검) (3) 정의역을 제한해 치역 계산 결합(★2)."
```

```yaml
- id: RPM-ALG-0241
  page: 32
  vendor_label: "유형 01 지수함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(1/5)^x 에 대한 보기(정의역 · 점근선 y=0 · y=5^x 와 y축 대칭 · 증가 여부) 중 옳은 것 고르기.
  category: "감소 지수함수의 성질 확인 → 대칭 상대는 밑의 역수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 성질(정의역·치역·점근선·증감)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의역 실수 전체·점근선 y=0 은 항상 참, (1/5)^x=5^{-x} 라 y=5^x 와 y축 대칭도 참. 밑 1/5<1 감소라 ㄹ(증가)만 거짓. 성질 확인 한 단계·통찰 없음·M_total 4 → 벤더 중하 ★1.
  tier: star_1
  mechanism_primary: "밑 1/5<1 → 감소 → ㄹ 거짓 · 정의역·점근선·5^x 와 y축 대칭은 참 → ㄱ, ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 0<a<1 로. 제약: ㄷ 의 대칭 상대는 밑의 역수로 함께 바꿈."
    creative: "(1) ㄹ 을 f(x1)>f(x2) 로 뒤집어 전부 참 만들기(★1) (2) 「점 (1, 1/5) 를 지난다」「y절편 1」 같은 수치 보기 추가(★1) (3) f(x)=(1/5)^{x-1} 로 평행이동을 섞어 점근선·대칭 성질 재확인(★2)."
```

```yaml
- id: RPM-ALG-0242
  page: 32
  vendor_label: "유형 01 지수함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    임의의 실수 a<b 에 대해 f(a)<f(b) 인(증가하는) 함수를 다섯 지수함수(2^{-x} · 0.1^x · (1/3)^{-x} · (1/4)^x · (4/5)^x) 중에서 고르기.
  category: "증가 조건 → 밑>1 판별(음의 지수·역수 밑 정리)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 성질(정의역·치역·점근선·증감)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「a<b 이면 f(a)<f(b)」는 증가함수의 정의. 2^{-x}=(1/2)^x, (1/3)^{-x}=3^x 로 밑을 양의 상수 꼴로 정리하면 밑>1 인 것은 3^x 하나. 정리 한 단계(T-부호)·통찰 없음·M_total 4 → 벤더 중하 ★1.
  tier: star_1
  mechanism_primary: "조건 = 증가함수 → 각 밑을 정리(2^{-x}=(1/2)^x · (1/3)^{-x}=3^x) → 밑>1 인 것 → ③"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 밑을 바꿈. 제약: 음의 지수·역수 밑을 섞어 정리 단계를 유지하고 증가함수는 하나만."
    creative: "(1) 감소함수 고르기로 뒤집기(★1) (2) f(x)=(a^2-a+1)^x 처럼 밑이 식인 경우 밑>1 조건을 풀기(★2~3 · I-EQV d1) (3) 「f(a)>f(b)」「f(a)=f(b)」 조건을 섞은 ㄱㄴㄷ(★2)."
```

### 유형 02 지수함수의 그래프의 평행이동과 대칭이동

```yaml
- id: RPM-ALG-0243
  page: 32
  vendor_label: "유형 02 지수함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=a^x 를 y축 대칭 후 x축 방향 4, y축 방향 -5 만큼 평행이동한 그래프가 (2, 11) 을 지날 때 양수 a.
  category: "대칭이동 → 평행이동 순서대로 식 → 점 대입 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(이동한 그래프가 지나는 점 → 밑 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y축 대칭으로 a^{-x}, 이어 x축 방향 4 이동을 -(x-4) 로 넣어 y=a^{4-x}-5. (2,11) 대입 → a^2=16, 양수 조건 a=4. 이동 순서에 따른 지수 부호(T-부호)가 함정이고 계산은 가볍다. 이동 2회·대입·풀이로 Mₛ 2, 미지 밑 a 로 Mₐ 2, 통찰 없음·M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=a^{-x} → y=a^{-(x-4)}-5 → (2,11) 대입 a^2-5=11 → a^2=16 → a=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량·지나는 점을 바꿈. 제약: 대입 결과 a^k=양수 가 되어 a 가 양의 유리수로 떨어지게(a^2=16 · a^3=8). 대칭 후 평행이동 순서를 바꾸면 식이 달라짐."
    creative: "(1) 평행이동 후 대칭이동 순서로 바꿔 -(x+4) 부호 차이(★2) (2) 두 점을 지나게 해 이동량까지 미지수(★3 · 연립) (3) 이동한 그래프의 점근선과 y절편으로 조건 주기(★2 · I-EQV d1)."
```

```yaml
- id: RPM-ALG-0244
  page: 32
  vendor_label: "유형 02 지수함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=(1/2)^x 를 x축 방향 2 평행이동 후 원점 대칭이동한 그래프가 (1, k) 를 지날 때 k.
  category: "평행이동 → 원점 대칭 → 정리 → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(이동한 그래프가 지나는 점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동으로 (1/2)^{x-2}, 원점 대칭(x → -x, y → -y)으로 -y=(1/2)^{-x-2}, 정리하면 y=-2^{x+2}. x=1 에서 -8. 이동 2회의 부호 처리(T-부호)가 함정. Mₛ 2·M_total 5·통찰 없음. 벤더 중하 → ★1~2 중 합성 2회라 ★2.
  tier: star_2
  mechanism_primary: "y=(1/2)^{x-2} → -y=(1/2)^{-x-2} → y=-2^{x+2} → x=1 → k=-8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량·대칭 종류(x축 · y축)·지나는 점의 x 좌표를 바꿈. 제약: k 가 2 의 거듭제곱에 부호를 붙인 값으로 떨어지게 x 좌표를 정수로."
    creative: "(1) 대칭 후 평행이동 순서로 바꿔 답 차이 확인(★2) (2) 지나는 점 대신 최종 식의 점근선·y절편을 묻기(★2) (3) (1, k) 를 주고 이동량을 역산(★2~3 · I-BW d1)."
```

```yaml
- id: RPM-ALG-0245
  page: 32
  vendor_label: "유형 02 지수함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행이동만으로 y=2^x 의 그래프와 겹쳐질 수 있는 함수를 보기(√2·2^x · 1/2^x · -2^x+3)에서 고르기.
  category: "상수배 → 지수의 평행이동으로 표현 전환 · 대칭 필요 여부 판별"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√2·2^x=2^{x+1/2} 로 보고 y 방향 상수배를 x축 방향 평행이동으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(평행이동으로 겹쳐지는 그래프 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 상수배 √2 를 지수에 흡수해 2^{x+1/2} 로 보면 x축 방향 -1/2 평행이동. ㄴ 은 2^{-x} 라 y축 대칭, ㄷ 은 x축 대칭이 필요해 평행이동만으로는 불가. 「상수배 = 평행이동」 표현 전환(RT d1)이 핵심이고 그 밖의 계산은 없음. 벤더 중 → ★2, 통찰 1·M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "√2·2^x=2^{x+1/2} → 평행이동 가능 · 2^{-x}, -2^x+3 은 대칭이동 필요 → ㄱ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수배(√2 → 4, 1/8, 2√2)와 보기 조합을 바꿈. 제약: 상수배는 2 의 거듭제곱 꼴이어야 지수에 흡수됨(3·2^x 는 로그가 필요해 범위 밖)."
    creative: "(1) y=4^x 와 겹쳐지는 것 고르기(밑이 다르면 불가 — 판별 기준 추가 · ★2) (2) 겹쳐지도록 하는 평행이동량 (m, n) 을 구하기(★2~3 · RT d1 + 계산) (3) 대칭이동까지 허용해 겹쳐지는 것 고르기(★2 · I-MI d1)."
```

```yaml
- id: RPM-ALG-0246
  page: 32
  vendor_label: "유형 02 지수함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=a^{3x} (a>0, a≠1) 를 x축 방향 1, y축 방향 2 만큼 평행이동한 그래프가 a 에 관계없이 항상 지나는 점 (α, β) 의 α+β.
  category: "평행이동 식 → 「a 에 관계없이」= 지수 0 → 정점"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「a 의 값에 관계없이 지난다」를 「지수가 0 이 되는 x 에서 a^0=1」 조건으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 그래프의 평행이동과 대칭이동(밑에 관계없이 지나는 정점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동 식 y=a^{3(x-1)}+2 를 만든 뒤 「a 에 관계없이」를 지수=0 조건으로 옮기는 동치 변환(EQV d1)이 핵심. 3(x-1)=0 인 x=1 에서 y=1+2=3 이라 α+β=4. 이후는 대입 한 줄. 밑이 문자라 Mₐ 2·M_total 5. 벤더 중 → ★2, 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=a^{3(x-1)}+2 → 3(x-1)=0 인 x=1 에서 y=a^0+2=3 → (1, 3) → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(3x → 2x, -x)와 이동량을 바꿈. 제약: 정점의 x 는 지수=0 을 푼 값이므로 유리수로 떨어지게, y 는 1+(y축 이동량)."
    creative: "(1) 이동 없이 y=a^{x-2}+1 꼴로 주고 정점 묻기(★2) (2) 정점이 직선 y=2x+1 위에 있도록 이동량 결정(★3 · EQV + BW) (3) 로그함수 y=log_a(x-1)+2 의 정점과 비교(다음 단원 연결 · ★2)."
```

### 유형 03 지수함수의 그래프의 활용

```yaml
- id: RPM-ALG-0247
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=2^x 와 직선 y=x 의 그림에서 x축 위 b, d 와 y축 위 a, c 로 둘러싸인 색칠한 직사각형의 넓이(그림의 점선이 곡선과 직선을 번갈아 잇는다).
  category: "그래프 읽기 → y=x 를 매개로 좌표 사슬 → 직사각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 y=x 위의 점은 두 좌표가 같으므로 곡선의 y값을 다음 x값으로 옮기는 사슬 a → b → c → d 를 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(y=x 를 매개로 한 좌표 사슬과 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선의 y절편 a=1 에서 출발해, 직선 y=x 위의 점은 두 좌표가 같다는 성질로 y값을 x값으로 옮기며 b=1, c=2^1=2, d=2^2=4 를 차례로 읽는다. 「y=x 를 좌표 이송 장치로 쓰기」 표현 전환(RT d1) 뒤 넓이는 (4-1)×(2-1)=3 한 줄. Mₛ 2·M_total 5·통찰 1 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a=2^0=1 → (b, a) 가 y=x 위라 b=1 → c=2^1=2 → (c, c) 위 → d=2^2=4 → 넓이 (4-1)(2-1)=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: crop:fig-0247.png
  latex: latex-bank/rpm-alg/items/0247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3)·출발점(y절편 1 대신 a=2 를 표시)을 바꿈. 제약: 사슬이 정수로 떨어지게(밑 3 이면 1, 3, 27 로 급증하므로 그림 비율 주의). 그림 라벨 a, b, c, d 의 배치는 고정."
    creative: "(1) 색칠 영역을 다른 직사각형(b~c 폭)으로 바꾸기(★2) (2) y=a^x 로 두고 넓이가 주어질 때 a 구하기(★3 · RT + BW) (3) 사슬을 한 단계 더 이어 다섯 번째 좌표 묻기(★2~3 · I-PD d1)."
```

```yaml
- id: RPM-ALG-0248
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=4^x 의 그래프에서 x=1 일 때 y=a, y=64 일 때 x=b 를 읽어 a+b. 5지선다.
  category: "그래프 위 점 → 함숫값 · 지수방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(그래프 위 점의 좌표 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림의 점선이 가리키는 두 점을 식에 대입하면 a=4, 4^b=64 에서 b=3, 합 7. 통찰 없음·M_total 4·벤더 하 → ★1.
  tier: star_1
  mechanism_primary: "a=4^1=4 · 4^b=64 → b=3 → a+b=7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0248.png
  latex: latex-bank/rpm-alg/items/0248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·좌표(1 → 2 · 64 → 16)를 바꿈. 제약: 64=4^3 처럼 밑의 정수 거듭제곱. 그림 라벨(a, 64, 1, b)의 위치는 고정."
    creative: "(1) 밑을 모르는 y=a^x 에 두 점을 주고 밑과 좌표를 함께 구하기(0249 계열 · ★1~2) (2) 두 점을 잇는 선분의 기울기 묻기(★2) (3) 그림 없이 문장으로만 주기(★1)."
```

```yaml
- id: RPM-ALG-0249
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<a<1 인 y=a^x 의 그래프가 (-1, 3) 을 지나고 y절편이 b 일 때 3(a+b).
  category: "그래프 위 점 → 밑 결정 → y절편"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(그래프 위 점의 좌표 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (-1, 3) 대입 a^{-1}=3 에서 a=1/3, y절편은 항상 a^0=1 이라 b=1. 3(1/3+1)=4. 음의 지수(T-부호) 한 번. 통찰 없음·M_total 4·벤더 중하 → ★1.
  tier: star_1
  mechanism_primary: "a^{-1}=3 → a=1/3 · b=a^0=1 → 3(1/3+1)=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: crop:fig-0249.png
  latex: latex-bank/rpm-alg/items/0249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점(-1, 3 → -2, 9)을 바꿈. 제약: 0<a<1 이 되도록 x<0 에서 y>1 인 점을 주고, 앞 계수 3 은 답이 정수가 되게 조정. 그림 라벨(-1, 3, b) 고정."
    creative: "(1) 두 점 (-1, 3), (1, c) 를 주어 c 도 묻기(★1) (2) 그래프를 평행이동한 y=a^{x-1}+k 로 주고 점·점근선으로 a, k 결정(★2) (3) 0<a<1 조건을 빼고 그림만으로 밑의 범위 판단(★1~2)."
```

```yaml
- id: RPM-ALG-0250
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=2^x, y=4^x 가 직선 y=8 과 만나는 점 A, B 와 원점 O 로 이루어진 삼각형 OAB 의 넓이(서술형).
  category: "교점 좌표 → 수평 밑변 AB · 높이 8 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(교점과 삼각형 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^x=8 로 A(3, 8), 4^x=8 즉 2^{2x}=2^3 로 B(3/2, 8). AB 가 y=8 위의 수평 선분이라 높이가 8 이고 넓이 (1/2)·(3/2)·8=6. 유리수 지수 한 번·수평 밑변 인식. 통찰 없음·M_total 5 → 벤더 중 ★2 유지(서술형 태그).
  tier: star_2
  mechanism_primary: "2^x=8 → A(3, 8) · 4^x=8 → B(3/2, 8) → AB=3/2 · 높이 8 → 넓이 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=k(8 → 16, 32)와 두 밑(2, 4 → 3, 9)을 바꿈. 제약: 교점 x좌표가 유리수로 떨어지게 k 를 밑의 거듭제곱으로. 넓이가 정수·간단한 유리수인지 확인."
    creative: "(1) 직선을 y=k 로 두고 넓이가 6 이 되는 k 구하기(★3 · I-BW d1) (2) 두 곡선과 y축·y=8 로 둘러싸인 사각형 넓이(★2) (3) y=2^x 와 y=2^{x-1} 처럼 평행이동 관계로 바꿔 0251 계열 등적 변환(★2~3)."
```

```yaml
- id: RPM-ALG-0251
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=(1/5)^x 와 y=25·(1/5)^x 의 그래프, 두 직선 y=5, y=1 로 둘러싸인 부분(그림의 색칠 영역)의 넓이. 5지선다.
  category: "평행이동 관계 인식 → 등적 변환(평행사변형) → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "25·(1/5)^x=(1/5)^{x-2} 로 두 곡선이 x축 방향 2 평행이동 관계임을 읽고, 곡선 사이 영역을 밑변 2·높이 4 인 평행사변형으로 등적 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(평행이동 관계인 두 곡선 사이의 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    25=5^2 로 두 번째 곡선을 (1/5)^{x-2} 로 읽으면 첫 곡선의 x축 방향 2 평행이동. y=1 과 y=5 사이의 모든 수평 절단 길이가 2 로 같으므로 영역은 밑변 2·높이 4 의 평행사변형과 등적 → 8. 이 등적 변환(RT d2)이 문제의 전부이고 계산은 2×4. 벤더 중 → ★2, 통찰 1(d2)·M_total 5 → ★2 유지.
    [분류 이슈] 등적 변환 통찰이 골조의 전부라 체감은 ★3 경계. 벤더 「중」 라벨 ★2 로 두고 후보 ★3 기록.
  tier: star_2
  mechanism_primary: "25·(1/5)^x=(1/5)^{x-2} → 두 곡선은 x축 방향 2 평행이동 → 영역 = 가로 2 · 세로 (5-1) 평행사변형 → 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-0251.png
  latex: latex-bank/rpm-alg/items/0251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수배(25 → 125, 5)와 두 직선(y=1, 5 → y=1, 25)을 바꿈. 제약: 상수배가 밑의 역수 거듭제곱이어야 평행이동량이 정수. 그림 라벨(y=5, y=1, 두 곡선 식) 고정."
    creative: "(1) 밑을 2 로 하고 y=2^x 와 y=2^{x-3} 사이 영역(★2) (2) 세 번째 곡선을 추가해 두 영역의 넓이 비교(★3) (3) 직선 대신 y=x 같은 기울어진 경계로 바꾸면 등적 변환이 깨져 ★4 이상(이 유형 범위 밖)."
```

```yaml
- id: RPM-ALG-0252
  page: 33
  vendor_label: "유형 03 지수함수의 그래프의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=(1/2)^x 와 y축의 교점을 꼭짓점으로 하는 정사각형, 그 정사각형과 곡선의 교점을 꼭짓점으로 하는 다음 정사각형 … 을 x축 양의 방향으로 이어 그릴 때 세 번째 정사각형의 넓이. 5지선다.
  category: "그림 → 좌표 사슬(변의 길이 = 이전 정사각형 오른쪽 변에서의 함숫값) → 세 번째 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사각형 사슬을 좌표로 번역: k번째 정사각형의 왼쪽 위 꼭짓점이 곡선 위에 있으므로 한 변 = (1/2)^{x_k}, 다음 시작점 x_{k+1} = x_k + 한 변"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수의 그래프의 활용(곡선 위 꼭짓점을 잇는 정사각형 사슬)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 정사각형의 왼쪽 위 꼭짓점이 곡선 위에 있고 그 높이가 변의 길이이며, 다음 정사각형은 오른쪽 변의 x 에서 시작한다는 그림 읽기(RT d2)가 골조. x 가 0 → 1 → 3/2 로 누적되고 세 번째 변 (1/2)^{3/2} 를 제곱하면 (1/2)^3=1/8. 교점이 오른쪽 변 위에 있음을 확인하는 것(T-경계)이 함정이고 계산은 지수법칙 한 줄. 통찰 1(d2)·M_total 5 → 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "1번째: 꼭짓점 (0, 1) · 변 1 → 2번째: x=1 에서 높이 1/2 · 변 1/2 → 3번째: x=3/2 에서 높이 (1/2)^{3/2} → 넓이 ((1/2)^{3/2})^2 = 1/8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0252.png
  latex: latex-bank/rpm-alg/items/0252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/2 → 1/3, 1/4)과 순번(3)을 바꿈. 제약: 변의 길이가 (밑)^{x_k} 로 누적돼 x_k 가 유리수로 남는 순번(세 번째)까지만 깔끔함(네 번째부터 무리수 지수). 밑 1/4 세 번째: x=0, 1, 5/4 → 넓이 (1/4)^{5/2}=1/32. 그림 라벨은 곡선 식뿐이라 자유."
    creative: "(1) 정사각형 대신 가로:세로=2:1 직사각형 사슬(★3) (2) n번째 넓이의 일반항 묻기(★4 · I-PD d2 — x_n 점화식이 등비가 아니어서 범위 밖일 수 있음) (3) 두 정사각형 넓이의 비 묻기(★3)."
```

### 유형 04 지수함수를 이용한 대소 관계

```yaml
- id: RPM-ALG-0253
  page: 34
  vendor_label: "유형 04 지수함수를 이용한 대소 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A=8^{1/4}, B=³√16, C=⁵√32 의 대소 관계. 5지선다.
  category: "밑 2 로 통일 → 지수 비교(증가함수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수를 이용한 대소 관계(밑 통일 후 지수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 수를 2^{3/4}, 2^{4/3}, 2^1 로 고쳐 밑 2>1 증가이므로 지수 3/4<1<4/3 → A<C<B. 유리수 지수 변환 3회가 절차의 전부이고 통찰 없음·M_total 4. 대표문제 출발점 ★2 — −1 후보이나 유형 04 의 기본 골조(밑 통일·지수 비교)를 그대로 대표하고 변환이 세 번이라 ★2 유지.
  tier: star_2
  mechanism_primary: "A=2^{3/4} · B=2^{4/3} · C=2^1 → 밑 2>1 증가 → 3/4<1<4/3 → A<C<B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수를 같은 소수 밑의 다른 유리수 지수(2^{2/3}, 2^{5/4}, 2^{7/6})로. 제약: 지수가 서로 다르고 통분 가능해야 하며 선택지 5개가 서로 다른 순서."
    creative: "(1) 밑을 0<a<1 로(0255 계열 · 부호 반전 · ★2) (2) 밑이 다른 두 수(2^{1/2} 와 3^{1/3})를 6제곱해 비교(★3 · I-RT d1) (3) 네 수로 늘려 순서 나열(★2)."
```

```yaml
- id: RPM-ALG-0254
  page: 34
  vendor_label: "유형 04 지수함수를 이용한 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=√2, B=0.25^{-1/3}, C=⁵√8 의 대소 관계. 5지선다.
  category: "소수·음의 지수를 밑 2 로 통일 → 지수 통분 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수를 이용한 대소 관계(밑 통일 후 지수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.25=2^{-2} 에 지수 -1/3 을 곱해 2^{2/3}, ⁵√8=2^{3/5}, √2=2^{1/2} 로 통일하고 1/2, 3/5, 2/3 을 통분(15/30, 18/30, 20/30)해 A<C<B. 소수·음의 지수 처리(T-부호) 한 번. 통찰 없음·M_total 4 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "A=2^{1/2} · B=(2^{-2})^{-1/3}=2^{2/3} · C=2^{3/5} → 1/2<3/5<2/3 → A<C<B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0.25 → 0.125, 0.5 · 근호 지수를 바꿈. 제약: 밑 2 로 통일 가능한 수만, 세 지수의 분모가 달라 통분이 필요하게."
    creative: "(1) 밑 3 계열(√3, (1/9)^{-1/3}, ⁵√27)로 바꾸기(★2) (2) 한 수를 (1/2)^{-x} 로 두고 크기 조건을 만족하는 x 의 범위(★3 · 부등식 결합) (3) 세 수의 곱·비를 이용해 대소 비교(★2)."
```

```yaml
- id: RPM-ALG-0255
  page: 34
  vendor_label: "유형 04 지수함수를 이용한 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=1/3^2, B=1/³√3, C=⁵√(1/3) 의 대소 비교.
  category: "역수·근호를 밑 3 의 음의 지수로 통일 → 음수 지수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수를 이용한 대소 관계(밑 통일 후 지수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 수를 3^{-2}, 3^{-1/3}, 3^{-1/5} 로 통일하고 -2<-1/3<-1/5 의 음수 크기(T-부호)를 정하면 밑 3>1 이라 그대로 A<B<C. 통찰 없음·M_total 4 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "A=3^{-2} · B=3^{-1/3} · C=3^{-1/5} → 밑 3>1 → -2<-1/3<-1/5 → A<B<C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$A<B<C$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 → 2, 5 · 지수 -2, -1/3, -1/5 를 바꿈. 제약: 음수 지수 비교가 남도록 역수·근호 꼴 유지."
    creative: "(1) 밑을 1/3 로 통일하는 표기(⁵√(1/3)=(1/3)^{1/5})로 두 가지 통일 방법 비교(★2 · I-SC 후보이나 차이 작음) (2) A, B, C 중 두 수의 곱과 세 번째 수 비교(★2) (3) 문자 밑 0<a<1 로 일반화(0256 계열 · ★3)."
```

```yaml
- id: RPM-ALG-0256
  page: 34
  vendor_label: "유형 04 지수함수를 이용한 대소 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<a<b<1 일 때 네 수 a^a, a^b, b^a, b^b 중 가장 작은 수와 가장 큰 수. 5지선다.
  category: "밑 고정(지수함수 감소) · 지수 고정(거듭제곱 함수 증가) 두 관점으로 대소 사슬"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 수를 「밑 고정·지수 비교(y=a^x, 0<a<1 감소)」와 「지수 고정·밑 비교(y=x^a, a>0 증가)」 두 함수 관점으로 번갈아 전환해 사슬을 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수를 이용한 대소 관계(밑·지수가 문자인 네 수의 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 밑끼리는 0<밑<1 감소라 지수가 클수록 작고(a^b<a^a · b^b<b^a), 같은 지수끼리는 밑이 클수록 크다(a^a<b^a · a^b<b^b). 네 비교를 엮으면 a^b 가 바닥, b^a 가 꼭대기. 밑 고정/지수 고정을 오가는 표현 전환(RT d2)이 핵심이고 a^a 와 b^b 의 순서는 정해지지 않음(T-범위). 문자 두 개(Mₐ 2)·M_total 6·통찰 1 → 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "밑 a 고정: a^b<a^a · 밑 b 고정: b^b<b^a · 지수 a 고정: a^a<b^a · 지수 b 고정: a^b<b^b → 최소 a^b · 최대 b^a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건을 1<a<b 로 바꾸면 사슬이 뒤집힘(최소 a^a · 최대 b^b). 제약: 0<a<1<b 처럼 밑이 1 을 끼고 갈리면 a^a 와 b^b 의 비교가 불가하므로 선택지 설계 주의. 구체 수(a=1/3, b=1/2)로 검산 가능."
    creative: "(1) 1<a<b 로 바꾸기(★2~3 · 같은 골조) (2) a^b 와 b^a 만 비교하되 0<a<b<1(★3) (3) 세 문자 0<a<b<c<1 의 여섯 수 중 최대·최소(★3~4) (4) 「a^a 와 b^b 의 대소는 정해지지 않는다」를 보기로 넣는 ㄱㄴㄷ(★4 · I-MI d2)."
```

### 유형 05 지수함수의 최대·최소; 지수가 일차식인 경우

```yaml
- id: RPM-ALG-0257
  page: 34
  vendor_label: "유형 05 지수함수의 최대·최소; 지수가 일차식인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=2^x 를 x축 방향 -1, y축 방향 -2 만큼 평행이동한 f(x) 의 -3≤x≤1 에서 최댓값과 최솟값의 합. 5지선다.
  category: "평행이동 식 → 증가 → 구간 양 끝값 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동 식 f(x)=2^{x+1}-2 를 세우고(x축 방향 -1 → x+1 · T-부호) 밑 2>1 증가라 양 끝 대입. f(1)=2, f(-3)=2^{-2}-2=-7/4, 합 1/4. 통찰 없음·M_total 5 → 대표문제 출발점 ★2 유지(평행이동 + 최대·최소 두 절차 결합).
  tier: star_2
  mechanism_primary: "f(x)=2^{x+1}-2 → 증가 → 최댓값 f(1)=2 · 최솟값 f(-3)=-7/4 → 합 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량·구간을 바꿈. 제약: 끝값이 2 의 거듭제곱 - 상수 꼴의 유리수, 합이 선택지에 맞게."
    creative: "(1) 밑을 1/2 로 바꿔 감소 처리(★2) (2) 최댓값이 주어질 때 이동량 k 구하기(★2 · I-BW d1) (3) 평행이동 대신 y축 대칭 후 이동으로 부호 함정 추가(★2~3)."
```

```yaml
- id: RPM-ALG-0258
  page: 34
  vendor_label: "유형 05 지수함수의 최대·최소; 지수가 일차식인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤2 에서 y=3^x·4^{-x}-1 의 치역이 {y | m≤y≤M} 일 때 80(M+m).
  category: "지수법칙으로 밑 통합 → 감소 → 양 끝값 → 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^x·4^{-x} 를 (3/4)^x 로 합쳐야 밑 3/4<1 감소가 보이고, 최댓값은 x=0 에서 0, 최솟값은 x=2 에서 9/16-1=-7/16. 80(M+m)=-35. 밑 통합 한 단계(지수법칙)와 감소 판정(T-부호)·80배 정리. 통찰 없음·M_total 5 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "3^x·4^{-x}=(3/4)^x → 감소 → M=f(0)=0 · m=f(2)=-7/16 → 80(M+m)=-35"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-35$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 조합(3, 4 → 2, 5)·구간·계수 80 을 바꿈. 제약: (3/4)^2=9/16 처럼 유리수, 계수는 M+m 의 분모를 없애게."
    creative: "(1) 3^x·4^{-x} 대신 6^x/2^x 처럼 나눗셈 꼴로(★2) (2) 치역이 주어질 때 구간의 오른쪽 끝 구하기(★2 · I-BW d1) (3) 밑 3/4 와 4/3 두 함수의 최댓값 비교(★2)."
```

```yaml
- id: RPM-ALG-0259
  page: 34
  vendor_label: "유형 05 지수함수의 최대·최소; 지수가 일차식인 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    -2≤x≤3 에서 f(x)=3^{a-x} 의 최댓값이 27 일 때 최솟값(a 는 상수 · 서술형).
  category: "지수 -x 감소 인식 → 최댓값 조건으로 a → 최솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 a-x 가 감소 일차식이므로 왼쪽 끝 x=-2 에서 최대. 3^{a+2}=27 로 a=1 을 정하고 오른쪽 끝 x=3 에서 3^{-2}=1/9. 감소 방향(T-부호)이 함정이고 a 결정은 표준 미정계수. 상수 a(Mₐ 2)·M_total 6·통찰 없음 → 벤더 중 ★2(서술형 태그).
  tier: star_2
  mechanism_primary: "3^{a-x} 는 x 에 대해 감소 → 최댓값 f(-2)=3^{a+2}=27 → a=1 → 최솟값 f(3)=3^{-2}=1/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·구간·최댓값 27 을 바꿈. 제약: 최댓값이 밑의 거듭제곱이어야 a 가 정수. 지수를 x-a 로 바꾸면 증가로 뒤집힘."
    creative: "(1) f(x)=3^{|x-a|} 처럼 절댓값 지수로 꼭짓점 위치 케이스(★3 · I-MI d1) (2) 최댓값과 최솟값의 비가 주어질 때 구간 길이 구하기(★3 · I-BW d1) (3) 밑도 미지수 b 로 두어 두 조건 연립(★3)."
```

```yaml
- id: RPM-ALG-0260
  page: 34
  vendor_label: "유형 05 지수함수의 최대·최소; 지수가 일차식인 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -1≤x≤2 에서 f(x)=a^x 의 최댓값이 최솟값의 27배가 되도록 하는 모든 양수 a 의 값의 합.
  category: "밑의 범위 케이스(a>1 · 0<a<1) → 각 케이스의 최대/최소 식 → a^3 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 양수 a」가 a>1(증가)·0<a<1(감소) 두 케이스를 요구하고 각 케이스가 독립된 식 a^3=27, a^3=1/27 을 주어 둘 다 답에 기여"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 최대·최소; 지수가 일차식인 경우(밑의 범위 케이스)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑의 범위를 모르므로 증가·감소 두 경우로 나눠 각각 최댓값=27×최솟값 을 세우면 a^2=27a^{-1} 과 a^{-1}=27a^2, 즉 a^3=27, a^3=1/27 → a=3, 1/3, 합 10/3. 두 케이스가 모두 답에 기여하는 다중 해석(MI d1)이 골조이고 a≠1·양수 조건(T-범위)이 함정. 문자 밑(Mₐ 2)·M_total 6·통찰 1 → 벤더 상중 ★3 유지.
  tier: star_3
  mechanism_primary: "a>1: a^2=27·a^{-1} → a^3=27 → a=3 · 0<a<1: a^{-1}=27·a^2 → a^3=1/27 → a=1/3 → 합 10/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{10}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(-1~2 → 0~3)·배수 27 을 바꿈. 제약: 구간 길이 L 에 대해 a^L=k 이므로 k 가 정수의 L제곱(8, 64)이어야 a 가 유리수, 두 케이스의 합이 간단한 분수."
    creative: "(1) 「최댓값과 최솟값의 합이 10/3」으로 조건을 바꿔 a^2+a^{-1} 방정식(★3~4) (2) 케이스 하나가 조건 위배로 기각되게(「최댓값 9」 조건 추가로 a>1 만 가능) → I-VF d1(★3) (3) f(x)=a^{x-1}+k 로 평행이동까지(★3)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 23 · ★2 13 · ★3 3 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 32 · premium 0 — 통찰 유형: I-RT 5(0245 d1 · 0247 d1 · 0251 d2 · 0252 d2 · 0256 d2) · I-EQV 1(0246 d1) · I-MI 1(0260 d1)
- type_hint 상위: 「지수함수의 그래프의 평행이동과 대칭이동」 9(0225~0229 · 0243~0246) · 「지수함수의 최대·최소; 지수가 일차식인 경우」 7(0230~0232 · 0257~0260) · 「지수함수의 그래프의 활용」 6(0247~0252) · 「지수함수를 이용한 대소 관계」 4(0253~0256) · 「지수함수의 성질」 3(0240~0242) · (이하 「지수방정식; 밑을 같게」 2 · 「지수부등식; 밑을 같게」 2 · 「지수함수의 그래프 그리기」 2 · 「지수함수의 뜻」 1 · 「최대·최소; 지수가 이차식」 1 · 「지수방정식; 치환」 1 · 「지수부등식; 치환」 1)
- 구역별 ★: 교과서 03-1~03-4 18문 전부 ★1 · 유형 01 ★1 ×3 · 유형 02 ★2 ×4 · 유형 03 ★1 ×2 · ★2 ×3 · ★3 ×1 · 유형 04 ★2 ×3 · ★3 ×1 · 유형 05 ★2 ×3 · ★3 ×1
- M_total: 4 ×24 · 5 ×11 · 6 ×4 (Mₐ 2 는 밑·상수가 문자인 0225 · 0240 · 0243 · 0246 · 0256 · 0259 · 0260)
- target_cohort: 하위권 20 · 중하위권 12(★1 이지만 Mₐ 2 또는 Mₜ 2 인 0225 · 0233 · 0240 포함) · 중위권 6 · 중상위권 1
- 그림: 6문(`crop:fig-0225.png` · `crop:fig-0247.png` · `crop:fig-0248.png` · `crop:fig-0249.png` · `crop:fig-0251.png` · `crop:fig-0252.png`)
- 답 대조: 39문 모두 재계산 결과가 전사 answer 와 일치(그래프 그리기 3문은 「풀이 참조」 그대로). 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 어긋난 문항이 없고, 아래 셋은 1단 경계에서 판정이 갈릴 수 있어 기록했다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0233 | 교과서 구역이지만 함정 2개(밑<1 반전 + 정의역 실수 전체라 최솟값 없음)로 유형 「중하」급 체감. 교과서 출발점 ★1 유지 | ★1 / ★2 |
| RPM-ALG-0240 | 유형 01 대표문제인데 성질 암기 확인 한 단계·통찰 0·M_total 5 → −1 조정 ★1. 유형 01 세 문항 모두 ★1 이라 이 유형의 대표 난이도 자체가 ★1 | ★1 / ★2 |
| RPM-ALG-0251 | 벤더 「중」이지만 등적 변환(RT d2)이 골조의 전부라 체감은 ★3 경계. 벤더 라벨 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 12종 — 평행이동·대칭이동 9 · 최대·최소(일차식) 7 · 그래프의 활용 6 · 대소 관계 4 · 성질 3 · 지수방정식(밑 통일) 2 · 지수부등식(밑 통일) 2 · 그래프 그리기 2 · 뜻 1 · 최대·최소(이차식) 1 · 지수방정식(치환) 1 · 지수부등식(치환) 1.
- 따로 세워야 할 유형: 「지수함수의 그래프의 활용」은 한 유형명 아래 골조가 넷으로 갈린다 — (a) 그래프 위 점 좌표 읽기(0248 · 0249 · ★1 절차형), (b) y=x 를 매개로 한 좌표 사슬(0247 · RT d1 · ★2), (c) 평행이동 관계인 두 곡선 사이의 등적 변환 넓이(0251 · RT d2 · ★2~3), (d) 곡선 위 꼭짓점을 잇는 도형 사슬(0252 · RT d2 · ★3). base ★ 가 1~3 으로 벌어지므로 카탈로그에서는 (a) 와 (b)(c)(d) 를 분리하고, (c) 등적 변환은 로그함수 단원에서도 같은 골조로 반복되므로 독립 유형으로 두는 것이 좋다. 「지수함수를 이용한 대소 관계」도 수치 비교(0253~0255 · ★2 절차형)와 문자 밑·지수 비교(0256 · RT d2 · ★3)를 분리해야 base ★ 가 맞는다. 「최대·최소; 지수가 일차식」에서 밑의 범위 케이스(0260 · MI d1 · ★3)는 같은 유형의 상위 변형이 아니라 「밑이 미지수인 최대·최소」 독립 유형 후보.
- 통합해도 될 유형: 교과서 03-1 의 「이동한 그래프의 식 구하기」(0226~0229)와 「이동 그래프 그리기」(0225)는 유형 02 「지수함수의 그래프의 평행이동과 대칭이동」 하나로 통합(★1 드릴 ↔ ★2 유형 문항은 같은 골조에 「지나는 점으로 밑 결정」이 붙은 차이). 교과서 03-2 의 최대·최소 드릴(0230~0232)은 유형 05 로 통합. 교과서 03-3·03-4 의 방정식·부등식 드릴(0234~0239)은 이 파일 범위 밖의 유형(방정식·부등식 유형)으로 흡수. 「지수함수의 성질」과 「지수함수의 뜻」은 하나의 기본 유형(★1)으로 통합 가능.
- 변형 자산 관점: 이 범위의 통찰형 7문은 모두 RT/EQV/MI 한 개짜리(depth 1~2)라 ★4 이상 재료가 없다. 창의 변형에서 ★ 가 오르는 지점은 (a) 이동 조건을 두 점·점근선으로 주어 이동량까지 역산할 때(0243 · 0244 계열 ★3 · BW), (b) 등적 변환 영역의 경계를 기울어진 직선으로 바꾸거나 곡선을 셋으로 늘릴 때(0251 계열 ★3~4), (c) 정사각형 사슬의 일반항(0252 계열 ★4 · PD), (d) 밑의 범위 케이스에 기각 조건을 붙일 때(0260 계열 ★3 · VF), (e) 문자 밑·지수 비교에 「정해지지 않는 쌍」 보기를 넣을 때(0256 계열 ★4 · MI d2)이다.
