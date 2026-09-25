---
name: mechanism-데이터-RPM-CALC2-03-p3
description: RPM 미적분Ⅱ 03 지수함수와 로그함수의 미분(3/3 · 유형 10~유형 UP 14 · 시험에 꼭 나오는 문제 · 서술형 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 03 지수함수와 로그함수의 미분
  unit_code: CALC2-03
  part: "3/3"
  extract_range: "49~54쪽 · 0320~0358"
  total_problems: 39
  unit_total: 102
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 03 지수함수와 로그함수의 미분 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 03 단원의 셋째(마지막) 범위(49~54쪽 · 0320~0358 · 39문항)를 다룬다. 앞 범위(1/3·2/3)가 지수·로그의 극한 다섯 꼴이었다면 이 범위는 그 극한을 **도함수**로 굳히는 구간이다: 유형 10(지수함수의 도함수 · 곱의 미분법) · 유형 11(로그함수의 도함수) · 유형 12(미분계수의 정의로 극한값 구하기) · 유형 13(구간별 함수의 미분가능성) · 유형 UP 14(도형에 쓰인 지수·로그 극한), 그리고 중단원 종합 3구역(시험에 꼭 나오는 문제 14문 · 서술형 주관식 4문 · 실력 Up 3문)이다.

RPM 은 구역이 곧 난이도 층이므로 출발점은 다음과 같이 잡았다. 유형 10~13 은 「대표문제」 태그에 난이도 표시가 없어 ★2 출발, 그 뒤 문항은 중하(★1~2) · 중(★2) · 상중(★3) 출발. 유형 UP 14 는 ★3 출발. 「시험에 꼭 나오는 문제」는 난이도 표시가 없어 ★2~3 을 발문 골조로 갈랐다. 「서술형 주관식」은 ★3, 「실력 Up」은 ★4 출발이다. 태그 「중요」·「교육청 기출」은 +0 으로 두고 통찰 유무로만 판단했다.

★ 조정 정책(이 파일 안에서 일관 적용): 앞 범위와 같은 기준을 쓰되, 이 범위는 **공식 대입 한 줄로 끝나는 문항이 거의 없어 ★1 이 1문(0320)뿐**이다. −1 은 「통찰 0 · M_total ≤ 5 · 도함수 공식 한 번 적용이 전부」일 때만 적용했고, 표준형으로 바꾸는 재구성(지수·로그 합치기, 밑 변환, 인수분해, ±1 삽입, 미분계수 정의 복원)이나 조건 해석 층(미정계수 · 연속 · 미분가능 · 도형 길이 세우기)이 골조면 출발점을 유지했다. +1 은 「통찰 2개 이상 또는 depth 3」에만 걸었는데, 해당 후보(0346 · 0356 · 0357 · 0358) 중 0346 은 (4^x-1)(3^x-1) 인수분해가 이 단원의 표준 훈련 대상이라 ★3 을 유지했고 실력 Up 3문은 출발점 ★4 를 그대로 썼다. ★5 조건(통찰 3개 이상 + SC/VF/SYM/XU 중 하나)에 걸리는 문항은 없다. 통찰형 라벨은 insight 2개 이상이거나 depth 2 이상일 때만 붙였고, `depth_score` 는 effective_depth 의 평균(통찰 없으면 0.00)이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 6문(0334 · 0335 · 0336 · 0337 · 0351 · 0358)은 모두 좌표·점·곡선이 발문에 그대로 적혀 있어 크롭을 열지 않고 발문만으로 골조를 세웠으며, 그림은 배치 확인용이다.

## 문항 데이터

### 유형 10 지수함수의 도함수

```yaml
- id: RPM-CALC2-0320
  page: 49
  vendor_label: "유형 10 지수함수의 도함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=(6x+2)e^x 일 때 f'(0) 의 값. 5지선다.
  category: "곱의 미분법 → f'(x) 정리 → x=0 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수; 곱의 미분법으로 f'(a) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=6e^x+(6x+2)e^x=(6x+8)e^x 한 줄 뒤 x=0 대입으로 8. 공식 한 번 적용이 전부이고 정리할 조건도 없다.
    유형 구역 대표문제라 ★2 출발이지만 통찰 0 · M_total 3 → −1 해서 ★1. 이 범위에서 유일한 ★1 이다.
  tier: star_1
  mechanism_primary: "곱의 미분법으로 f'(x)=(6x+8)e^x → x=0 대입 → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 계수 (6, 2) 와 대입점 0 을 바꿀 수 있다. 제약: f'(0)=(일차항 계수)+(상수항) 이므로 선택지가 정수로 떨어지게 두 수를 잡고, 대입점을 0 이 아닌 곳으로 옮기면 e^a 가 남아 선택지 형태가 바뀐다."
    creative: "(1) f'(0) 대신 f'(1) 을 물어 e 가 남게 하기(★1 유지) (2) (ax+b)e^x 로 두고 f'(0)=8 에서 a 를 역산(미정계수 층 추가 · ★2) (3) e^x 를 2^x 로 바꿔 ln 2 가 두 항에 곱해지게 하기(★2)."
```

```yaml
- id: RPM-CALC2-0321
  page: 49
  vendor_label: "유형 10 지수함수의 도함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^{x+ln 3} 일 때 f(ln 2)-f'(0) 의 값.
  category: "지수법칙으로 f(x)=3e^x 재구성 → 함숫값·미분계수 각각 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "e^{x+ln k} 꼴을 상수배 e^x 로 정리한 뒤 함숫값·미분계수 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e^{x+ln 3}=e^x·e^{ln 3}=3e^x 로 먼저 풀어 놓는 것이 골조. f(ln 2)=3·2=6, f'(x)=3e^x 이므로 f'(0)=3, 차는 3.
    지수 위의 ln 3 을 상수배로 내리는 재구성과 e^{ln 2}=2 처리(T-표기)가 걸려 중하 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "e^{x+ln 3}=3e^x 로 정리 → f(ln 2)=6, f'(0)=3 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 위 상수 ln 3 과 대입점 ln 2 를 다른 정수 로그(ln 5, ln 4)로 바꿀 수 있다. 제약: e^{ln k}=k 로 정확히 떨어지도록 두 상수를 모두 로그 꼴로 두어야 하고, 답이 정수로 나오게 f(ln m)-f'(0)=k(m-1) 을 맞춘다."
    creative: "(1) e^{x-ln 3} 로 부호를 바꿔 1/3 배가 되게 하기(★2 유지) (2) f(x)=e^{2x+ln 3} 로 지수를 일차식으로 만들어 합성함수 미분 추가(★2) (3) f(ln 2)-f'(0)=k 를 주고 지수 위 상수를 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0322
  page: 49
  vendor_label: "유형 10 지수함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=3^x+4^x 에서 점 (0, f(0)) 의 접선 기울기가 ln a 일 때 양수 a.
  category: "접선 기울기 = f'(0) → a^x 의 도함수 → 로그 합치기"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 의 도함수와 접선의 기울기; 로그의 합으로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 기울기를 f'(0) 으로 옮긴 뒤 f'(x)=3^x ln 3+4^x ln 4 에서 f'(0)=ln 3+ln 4=ln 12.
    답을 ln a 꼴로 맞추려면 로그의 합을 곱으로 합치는 재구성이 필요하다. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기=f'(0)=ln 3+ln 4 → ln 12 → a=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 (3, 4) 를 다른 자연수 쌍으로, 또는 항을 셋(2^x+3^x+5^x)으로 늘릴 수 있다. 제약: 답 a 는 밑들의 곱이므로 곱이 깔끔한 수가 되게 잡고, 밑에 1 을 넣지 않는다."
    creative: "(1) 3^x-4^x 로 부호를 바꿔 답이 ln(3/4) 이 되게 하기(★2 유지) (2) 기울기를 log_2 a 꼴로 물어 밑 변환을 강제(★2~3) (3) 접선의 y절편이나 접선이 지나는 점을 묻게 바꾸면 접선의 방정식 층이 추가돼 ★3."
```

```yaml
- id: RPM-CALC2-0323
  page: 49
  vendor_label: "유형 10 지수함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x(ax^2-1) 에서 f'(1)=8e 일 때 상수 a.
  category: "곱의 미분법 → f'(1) 을 a 의 일차식으로 → 방정식"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 세운 미분계수로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=e^x(ax^2-1)+e^x·2ax=e^x(ax^2+2ax-1) 이므로 f'(1)=e(3a-1)=8e → a=3.
    도함수를 미지수의 일차식으로 세우는 조건 해석 층이 있어 중 출발점 ★2 유지. 통찰은 표준 미정계수라 인정하지 않았다.
  mechanism_primary: "f'(x)=e^x(ax^2+2ax-1) → f'(1)=e(3a-1)=8e → a=3"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 ax^2-1 의 상수항과 대입점 1, 목표값 8e 를 바꿀 수 있다. 제약: f'(1)=e(3a+c') 꼴이라 a 가 정수로 떨어지게 목표값을 e 의 정수배로 두고, 대입점을 0 으로 옮기면 a 가 사라져 문제가 성립하지 않는다."
    creative: "(1) f'(1)=8e 대신 f(1)+f'(1) 조건으로 바꾸기(★2 유지) (2) e^x(ax^2+bx-1) 로 미지수를 둘로 늘리고 조건 두 개 주기(연립 · ★3) (3) f'(1)=0 이 되는 a 를 묻고 극값 위치까지 연결(★3)."
```

### 유형 11 로그함수의 도함수

```yaml
- id: RPM-CALC2-0324
  page: 49
  vendor_label: "유형 11 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=e^x·ln 3x 일 때 f'(1/3) 의 값.
  category: "곱의 미분법 + (ln 3x)'=1/x → x=1/3 대입에서 ln 1=0 소거"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수; 곱의 미분법과 (ln ax)'=1/x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=e^x ln 3x+e^x·(1/x). x=1/3 에서 ln 1=0 이라 앞 항이 죽고 뒤 항만 3e^{1/3} 로 남는다.
    (ln 3x)' 를 3/(3x)=1/x 로 줄이는 처리와 대입점이 ln 의 영점이라는 T-표기 함정이 함께 있어 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 미분법 → f'(x)=e^x ln 3x+e^x/x → x=1/3 에서 ln 1=0 → 3e^{1/3}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3e^{\frac{1}{3}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그 안 계수 3 과 대입점 1/3 을 짝으로 바꾼다(ln 5x · x=1/5 등). 제약: 대입점이 로그의 영점이어야 앞 항이 죽어 답이 짧아지고, 그렇지 않으면 e^a·ln(ab) 가 그대로 남는다."
    creative: "(1) 대입점을 1 로 옮겨 두 항이 모두 살게 하기(계산 층 증가 · ★2) (2) e^x 를 x^2 로 바꿔 다항×로그 곱미분으로(★2) (3) f'(1/3)=k 를 주고 로그 안 계수를 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0325
  page: 49
  vendor_label: "유형 11 로그함수의 도함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=log_3 x+log_9 x 에서 f'(2)=a/ln 3 일 때 상수 a. 5지선다.
  category: "밑 변환으로 log_9 x=(1/2)log_3 x → 한 항으로 합친 뒤 미분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 다른 로그함수의 도함수; 밑 변환 후 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_9 x=(1/2)log_3 x 로 밑을 맞추면 f(x)=(3/2)log_3 x=(3/2)·(ln x/ln 3), f'(x)=3/(2x ln 3), f'(2)=3/(4 ln 3) → a=3/4.
    밑 변환이라는 재구성이 골조이고 밑 9 를 그대로 두면 ln 9 와 ln 3 을 섞는 T-표기 함정에 걸린다. 중하 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log_9 x=(1/2)log_3 x 로 합치기 → f'(x)=3/(2x ln 3) → f'(2)=3/(4 ln 3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 (3, 9) 를 같은 수의 거듭제곱 쌍(2, 8) 또는 (2, 4) 로, 대입점 2 를 다른 수로 바꾼다. 제약: 두 밑이 같은 수의 거듭제곱이어야 한 항으로 합쳐지고, 답이 분수 a=계수/(대입점) 으로 떨어지게 대입점을 정수로 둔다."
    creative: "(1) log_3 x-log_9 x 로 부호를 바꿔 계수가 1/2 이 되게 하기(★2 유지) (2) log_3 x·log_9 x 의 곱으로 바꿔 곱의 미분법을 강제(★3) (3) f'(2)=a/ln 3 대신 f'(k)=1/ln 3 을 만족시키는 k 를 묻기(I-BW d1 · ★2~3)."
```

```yaml
- id: RPM-CALC2-0326
  page: 49
  vendor_label: "유형 11 로그함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x 에 대해 구간 [2, 4] 에서 평균값 정리를 만족시키는 상수 c.
  category: "평균변화율 계산 → f'(c)=1/c 와 같게 두기 → c 해결"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수에 평균값 정리 적용; f'(c)=평균변화율 을 푸는 c"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균변화율 (ln 4-ln 2)/(4-2)=ln 2/2 를 f'(c)=1/c 와 같게 두면 c=2/ln 2.
    로그 차를 ln 2 로 합치는 재구성과 c 가 구간 (2, 4) 안인지 보는 T-범위가 함께 있어 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "평균변화율 ln 2/2 = f'(c)=1/c → c=2/ln 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{\ln 2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [2, 4] 를 [1, e] · [1, 3] · [3, 9] 로 바꾼다. 제약: 양 끝의 로그 차가 한 개의 로그로 합쳐져야 답이 짧고, 구한 c 가 반드시 구간 안에 들어가는지 확인해야 한다(ln x 는 오목이라 항상 들어간다)."
    creative: "(1) f(x)=e^x 로 바꿔 c=ln((e^b-e^a)/(b-a)) 가 되게 하기(★3) (2) 구간을 [1, k] 로 두고 c=2 가 되는 k 를 묻기(I-BW d2 · ★3) (3) 롤의 정리 꼴(f(a)=f(b))로 바꾸면 ln 만으로는 성립하지 않아 x ln x 류가 필요해 ★3."
```

```yaml
- id: RPM-CALC2-0327
  page: 49
  vendor_label: "유형 11 로그함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a^x ln x+bx^2 (a>0, a≠1) 에서 f(1)=2, f'(1)=7 일 때 a+b. 5지선다.
  category: "ln 1=0 소거로 b 즉시 결정 → f'(1) 에서 a 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x·ln x 꼴 함수의 도함수와 두 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=a·0+b=b=2. f'(x)=a^x ln a·ln x+a^x/x+2bx 이고 x=1 에서 ln 1=0 이라 첫 항이 죽어 f'(1)=a+2b=a+4=7 → a=3, a+b=5.
    두 조건이 모두 ln 1=0 덕분에 한 미지수씩 분리돼 연립이 필요 없다는 점이 골조. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 에서 ln 1=0 → f(1)=b=2, f'(1)=a+2b=7 → a=3 → a+b=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 (2, 7) 과 bx^2 의 차수를 바꾼다. 제약: 대입점이 1 이어야 ln 1=0 으로 두 조건이 분리되고, a>0·a≠1 이 유지되게 f'(1)-2b 가 1 이 아닌 양수가 되도록 조건값을 잡는다."
    creative: "(1) 대입점을 e 로 옮겨 ln e=1 로 두 항이 모두 살게 하기(연립 발생 · ★3) (2) bx^2 를 b ln x 로 바꿔 두 조건이 같은 미지수에 걸리게 하기(★3) (3) a+b 대신 f(e) 를 묻기(★2 유지)."
```

### 유형 12 미분계수를 이용하여 극한값 구하기; 지수함수·로그함수

```yaml
- id: RPM-CALC2-0328
  page: 50
  vendor_label: "유형 12 미분계수를 이용하여 극한값 구하기; 지수함수·로그함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x ln x+x^3 일 때 lim(h→0) {f(1+h)-f(1-2h)}/h. 5지선다.
  category: "f(1) 삽입 → 두 미분계수 정의로 분해 → 3f'(1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 f(1) 을 더하고 빼서 {f(1+h)-f(1)}/h 와 {f(1-2h)-f(1)}/(-2h)·(-2) 두 미분계수 정의로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(a+ph)-f(a+qh) 꼴 극한을 미분계수 정의로 분해하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1) 을 끼워 넣어 분해하면 값은 f'(1)+2f'(1)=3f'(1). f'(x)=ln x+1+3x^2 이므로 f'(1)=4, 답 12.
    -2h 의 계수를 놓치면 3 이 아니라 다른 배수가 나오는 T-부호 함정이 핵심. 통찰 1개(EQV d1)로 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(1) 삽입 → f'(1)+2f'(1)=3f'(1) → f'(x)=ln x+1+3x^2 → 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 증분 계수 (1, -2) 와 f 의 다항 부분 x^3 의 차수, 대입점 1 을 바꾼다. 제약: 계수 차 p-q 가 답의 배수가 되므로 p-q 가 정수가 되게 두고, 대입점은 ln 이 정의되는 양수여야 한다."
    creative: "(1) 분모를 2h 로 바꿔 배수가 절반이 되게 하기(★2 유지) (2) 대입점을 e 로 옮겨 ln e=1 을 쓰게 하기(★2) (3) f 를 구체적으로 주지 않고 f'(1)=k 만 준 채 같은 극한을 묻기(Mₐ 상승 · ★3)."
```

```yaml
- id: RPM-CALC2-0329
  page: 50
  vendor_label: "유형 12 미분계수를 이용하여 극한값 구하기; 지수함수·로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=5^{2x-1} 일 때 lim(x→1) {f(x)-f(1)}/(x^2-1). 5지선다.
  category: "분모를 (x-1)(x+1) 로 인수분해 → f'(1)·(1/2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 x^2-1=(x-1)(x+1) 로 쪼개 {f(x)-f(1)}/(x-1) 을 미분계수 정의로 남기고 나머지 1/(x+1) 은 대입"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분모가 x^2-a^2 인 극한을 인수분해해 미분계수로 환원하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인수분해 뒤 값은 f'(1)·(1/2). f'(x)=5^{2x-1}·2 ln 5 이므로 f'(1)=10 ln 5, 답 5 ln 5.
    지수 2x-1 의 합성 미분에서 2 를 빠뜨리는 T-표기 함정이 있다. 통찰 1개(EQV d1) · 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x^2-1=(x-1)(x+1) 분해 → f'(1)/2 → 10 ln 5 /2 = 5 ln 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 와 지수의 일차식 2x-1, 분모의 x^2-1 을 x^3-1 이나 x^2-4(대입점 2)로 바꾼다. 제약: 분모의 인수 중 하나가 (x-a) 여야 미분계수로 환원되고, 대입점 a 에서 지수가 정수가 되게 일차식을 잡아야 선택지가 깔끔하다."
    creative: "(1) 분모를 x^3-1 로 올려 1/(x^2+x+1) 이 남게 하기(★2 유지) (2) 5^{2x-1} 을 log_5(2x-1) 로 바꿔 로그 쪽으로 옮기기(★2) (3) 극한값을 주고 밑을 역산(I-BW d2 · ★3)."
```

```yaml
- id: RPM-CALC2-0330
  page: 50
  vendor_label: "유형 12 미분계수를 이용하여 극한값 구하기; 지수함수·로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ax ln x+bx 에서 lim(x→e) {f(x)+3e}/(x-e)=-10 일 때 b-a.
  category: "분모→0 이므로 분자→0 → f(e)=-3e 와 f'(e)=-10 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한한 값 -10 이고 분모가 0 으로 가므로 분자도 0 이어야 함을 역추적해 f(e)=-3e 라는 숨은 조건을 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분모→0 조건으로 함숫값을 만들고 미분계수와 연립해 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(e)=e(a+b)=-3e → a+b=-3. 남은 극한은 정의상 f'(e) 이고 f'(x)=a ln x+a+b 이므로 2a+b=-10. 두 식에서 a=-7, b=4, b-a=11.
    숨은 조건을 스스로 만드는 BW d2 가 골조지만 통찰 1개라 +1 조건(통찰 2개 이상·depth 3)에 못 미쳐 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 ⇒ f(e)=-3e → a+b=-3 · 극한=f'(e)=2a+b=-10 → a=-7, b=4 → 11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$11$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수 3e, 극한값 -10, 대입점 e 를 바꾼다. 제약: 대입점을 e 로 두어야 ln e=1 로 연립이 정수로 떨어지고, a+b 와 2a+b 두 식이 독립이 되도록 극한값을 f(e)/e 의 값과 다르게 잡는다."
    creative: "(1) 묻는 값을 ab 나 f(1) 로 바꾸기(★2 유지) (2) f(x)=ax ln x+bx+c 로 미지수를 셋으로 늘리고 조건 하나 추가(★3) (3) 극한값을 주지 않고 「극한이 존재한다」만 준 뒤 b-a 의 범위를 묻기(I-MI 추가 · ★4)."
```

### 유형 13 함수의 미분가능성; 지수함수·로그함수

```yaml
- id: RPM-CALC2-0331
  page: 50
  vendor_label: "유형 13 함수의 미분가능성; 지수함수·로그함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x<0 에서 a(x+1), x≥0 에서 5^x-b 인 f(x) 가 x=0 에서 미분가능할 때 상수 a, b.
  category: "x=0 에서 연속 + 좌우 미분계수 일치 두 식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수의 미분가능 조건; 연속 + 좌우 미분계수 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분계수 쪽이 먼저 풀린다. 좌 a, 우 (5^x ln 5)|_{x=0}=ln 5 → a=ln 5. 연속에서 a=1-b → b=1-ln 5.
    두 조건을 모두 써야 하고 한쪽만 쓰면 답이 나오지 않는 T-경계 구조라 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "좌우 미분계수 a=ln 5 · 연속 a=1-b → a=ln 5, b=1-ln 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=\ln 5$, $b=1-\ln 5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5, 왼쪽 일차식 a(x+1) 의 상수항, 접합점 0 을 바꾼다. 제약: 접합점에서 지수함수 값이 간단해야(5^0=1) 연속식이 짧고, 왼쪽 일차식의 기울기가 a 로 남아야 미분 조건이 a 를 바로 준다."
    creative: "(1) 왼쪽을 이차식 ax^2+bx 로 바꿔 기울기가 접합점에 의존하게 하기(★2~3) (2) 접합점을 1 로 옮겨 5^1=5 가 남게 하기(★2 유지) (3) 미분가능 대신 연속만 요구하고 a 의 범위를 묻기(조건 완화 · ★2)."
```

```yaml
- id: RPM-CALC2-0332
  page: 50
  vendor_label: "유형 13 함수의 미분가능성; 지수함수·로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<x<1 에서 ln ax, x≥1 에서 b e^{x-1} 인 f(x) 가 모든 양수 x 에서 미분가능할 때 ab. 5지선다.
  category: "x=1 에서 연속 + 좌우 미분계수 일치 → a, b 각각 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그·지수 구간별 함수의 미분가능 조건으로 두 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분 조건: (ln ax)'=1/x → x=1 에서 1, 오른쪽 (b e^{x-1})'=b e^{x-1} → x=1 에서 b, 따라서 b=1.
    연속 조건: ln a=b=1 → a=e. ab=e. (ln ax)'=1/x 가 a 와 무관하다는 점을 놓치면 막힌다. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "미분 조건 b=1 · 연속 조건 ln a=b → a=e → ab=e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접합점 1, 오른쪽 지수 e^{x-1} 의 평행이동, 왼쪽 로그의 밑을 바꾼다. 제약: 접합점에서 e^{x-1}=1 이 되도록 평행이동을 맞춰야 b 가 바로 나오고, a>0 조건이 유지돼야 한다."
    creative: "(1) 오른쪽을 b·2^{x-1} 로 바꿔 ln 2 가 끼게 하기(★2~3) (2) 왼쪽을 log_2 ax 로 바꿔 밑 변환을 넣기(★3) (3) ab 대신 f(e) 나 a+b 를 묻기(★2 유지)."
```

```yaml
- id: RPM-CALC2-0333
  page: 50
  vendor_label: "유형 13 함수의 미분가능성; 지수함수·로그함수"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x≤1 에서 ax^2+1, x>1 에서 ln bx 인 f(x) 가 x=1 에서 미분가능할 때 b/a (b>0).
  category: "미분 조건 2a=1 → a=1/2 → 연속 조건 ln b=3/2 → b/a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항·로그 구간별 함수의 미분가능 조건과 상수의 비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (ln bx)'=1/x 이므로 x=1 에서 오른쪽 미분계수 1, 왼쪽 2a → a=1/2. 연속에서 a+1=ln b → ln b=3/2 → b=e^{3/2}. b/a=2e^{3/2}.
    골조는 0332 와 같지만 답이 지수·분수 결합으로 남고 서술형 태그가 붙어 상중 출발점 ★3 을 유지했다(통찰 0 이라 +1 은 없다).
    [분류 이슈] 0332(중 · ★2)와 통찰·단계가 같은데 벤더 난이도만 한 단 높다 — 구역 신호와 골조 판정이 1단 어긋난 기록.
  tier: star_3
  mechanism_primary: "2a=1 → a=1/2 · a+1=ln b → b=e^{3/2} → b/a=2e^{3/2}"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2e^{\frac{3}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽 이차식의 상수항 1, 접합점 1, 로그 안 계수 b 의 위치를 바꾼다. 제약: 접합점에서 (ln bx)'=1/x 가 상수가 되므로 왼쪽 기울기 2a 가 그 값과 같아지게 두고, b=e^{...} 가 남는 것을 허용해야 한다."
    creative: "(1) 왼쪽을 ax^3+1 로 올려 3a=1 이 되게 하기(★3 유지) (2) 오른쪽을 ln(bx)+c 로 상수를 더해 미지수 셋으로(★3~4) (3) 미분가능한 a, b 가 존재할 조건을 묻는 꼴로 바꾸면 I-BW 층이 붙어 ★4."
```

### 유형 UP 14 지수함수·로그함수의 극한의 도형에의 활용

```yaml
- id: RPM-CALC2-0334
  page: 51
  vendor_label: "유형 UP 14 지수함수·로그함수의 극한의 도형에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    곡선 y=ln x 위의 점 P(t, ln t) 와 A(1, 0), B(e, 0) 으로 만든 삼각형 PAB 의 넓이를 S(t) 라 할 때 lim(t→1+) S(t)/(t-1). 5지선다.
  category: "밑변 AB=e-1 · 높이 ln t 로 넓이식 → 표준극한 ln t/(t-1)→1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도형(삼각형 PAB)을 x축 위 밑변 e-1 과 높이 ln t 로 읽어 S(t)=(e-1)ln t/2 라는 대수식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 위 점으로 만든 삼각형 넓이의 극한; 로그 표준극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A, B 가 모두 x축 위라 밑변이 상수 e-1 이고 높이만 ln t 로 변한다. S(t)/(t-1)=(e-1)/2·ln t/(t-1) → (e-1)/2.
    도형→대수 전환(RT d1) 뒤는 표준극한 한 개. 유형 UP 대표문제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "S(t)=(e-1)ln t/2 → S(t)/(t-1)=(e-1)/2·ln t/(t-1) → (e-1)/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0334.png"
  latex: latex-bank/rpm-calc2/items/0334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 x좌표 (1, e) 와 곡선 y=ln x 의 계수를 바꾼다. 제약: 두 점이 x축 위에 있어야 밑변이 상수로 남고, P 가 접근하는 t 값이 곡선과 x축의 교점(여기서는 1)이어야 S(t)→0 이 되어 0/0 꼴 극한이 성립한다. 그림 라벨 P·A·B 는 고정."
    creative: "(1) 곡선을 y=e^x-1 로 바꾸고 t→0+ 로 옮기기(★3 유지) (2) B 를 y축 위 점으로 옮겨 밑변이 t 에 의존하게 하기(넓이식 복잡 · ★4) (3) S(t)/(t-1) 대신 S(t)/(t-1)^2 를 물으면 발산해 극한 존재 조건을 따지게 돼 ★4."
```

```yaml
- id: RPM-CALC2-0335
  page: 51
  vendor_label: "유형 UP 14 지수함수·로그함수의 극한의 도형에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    직선 x=t (t>0) 가 곡선 y=2e^{2x}-2 와 만나는 점 P, x축과 만나는 점 Q 에 대해 lim(t→0+) PQ/OQ. 5지선다.
  category: "PQ=2e^{2t}-2, OQ=t → 표준극한 (e^{2t}-1)/t→2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세로 직선이 자른 두 선분 길이의 비의 극한; 지수 표준극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(t, 2e^{2t}-2), Q(t, 0) 이므로 PQ=2(e^{2t}-1), OQ=t. 비는 2·(e^{2t}-1)/t → 2·2=4.
    그림에서 두 선분이 곧바로 좌표로 읽혀 전환 통찰이 없고 M_total 5 라 유형 UP 출발점 ★3 에서 −1 해 ★2.
    [분류 이슈] 구역은 「유형 UP」(★3)인데 골조는 유형 10 수준이다 — level 「중」을 따라 ★2 로 두고 기록만 남긴다.
  tier: star_2
  mechanism_primary: "PQ=2(e^{2t}-1), OQ=t → 2(e^{2t}-1)/t → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0335.png"
  latex: latex-bank/rpm-calc2/items/0335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=2e^{2x}-2 의 계수 (2, 2) 와 지수 안 계수를 바꾼다. 제약: 곡선이 원점을 지나야(상수항이 계수와 짝이 맞아야) t→0+ 에서 PQ→0 이 되어 0/0 꼴이 되고, 답은 (앞 계수)×(지수 계수) 로 나오므로 선택지가 정수가 되게 잡는다. 그림 라벨 P·Q·O 는 고정."
    creative: "(1) 곡선을 y=ln(1+ax) 로 바꿔 로그 쪽 표준극한으로(★2 유지) (2) Q 를 x축이 아니라 다른 직선과의 교점으로 두기(★3) (3) PQ/OQ 대신 삼각형 OPQ 의 넓이와 OQ^2 의 비를 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0336
  page: 51
  vendor_label: "유형 UP 14 지수함수·로그함수의 극한의 도형에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    두 곡선 y=3^x, y=(1/3)^x 와 직선 x=t (t>0) 의 교점 A, B 와 A 에서 y축에 내린 수선의 발 H 에 대해 lim(t→0+) AB/AH. 5지선다.
  category: "AB=3^t-3^{-t}, AH=t → (3^t-3^{-t})/t 를 미분계수 정의로"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(3^t-3^{-t})/t 에서 1 을 빼고 더해 (3^t-1)/t-(3^{-t}-1)/t 두 표준극한으로 쪼개거나 g(t)=3^t-3^{-t} 의 g'(0) 으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭인 두 지수곡선이 자른 선분 길이의 비; 두 표준극한으로 분해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A(t, 3^t), B(t, 3^{-t}) 이고 H 가 y축 위라 AH=t. AB/AH=(3^t-3^{-t})/t 는 그대로는 표준극한이 아니라 ±1 을 끼워 두 개로 쪼개야 한다.
    값은 ln 3-(-ln 3)=2 ln 3. 분해 착안(EQV d2) 1개 · M_total 7 · 상중 → 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=3^t-3^{-t}, AH=t → (3^t-1)/t-(3^{-t}-1)/t → ln 3+ln 3=2 ln 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0336.png"
  latex: latex-bank/rpm-calc2/items/0336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 다른 밑 a 로 바꾸면 답이 2 ln a 가 된다. 제약: 두 곡선이 서로 역수 밑이어야 AB 가 a^t-a^{-t} 대칭 꼴로 남고, 선택지가 ln 의 정수배로 떨어지도록 밑을 정수로 둔다. 그림 라벨 A·B·H 는 고정."
    creative: "(1) 두 곡선을 y=a^x, y=b^x 로 비대칭하게 두어 답이 ln(a/b) 가 되게 하기(★3 유지) (2) AH 를 A 에서 x축에 내린 수선으로 바꾸면 분모가 3^t 로 상수화돼 극한이 0 이 되는 함정 문제로(★3) (3) 삼각형 ABH 의 넓이와 t^2 의 비를 묻기(★4)."
```

```yaml
- id: RPM-CALC2-0337
  page: 51
  vendor_label: "유형 UP 14 지수함수·로그함수의 극한의 도형에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    곡선 y=e^x-1 위를 움직이는 제1사분면 위의 점 P 와 A(0, e), B(3, 0), O(0, 0) 에 대해 삼각형 PAO, POB 의 넓이 S1, S2 의 비 S1/S2 의 P→O 극한.
  category: "S1 은 y축 밑변·P 의 x좌표 높이, S2 는 x축 밑변·P 의 y좌표 높이 → 비의 표준극한"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 삼각형의 밑변을 각각 y축 위 선분 AO=e 와 x축 위 선분 OB=3 으로 잡아 높이가 P 의 x좌표·y좌표가 되게 도형을 대수식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 점에서 만나는 두 삼각형 넓이의 비의 극한; 지수 표준극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(p, e^p-1) 로 두면 S1=e·p/2, S2=3(e^p-1)/2 이므로 S1/S2=e·p/{3(e^p-1)} → e/3 (p→0+).
    밑변을 어느 축에 둘지 고르는 전환(RT d1)이 골조이고 나머지는 표준극한. 상중 · 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "S1=ep/2, S2=3(e^p-1)/2 → S1/S2=e·p/{3(e^p-1)} → e/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{e}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0337.png"
  latex: latex-bank/rpm-calc2/items/0337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 y좌표 e 와 B 의 x좌표 3 을 바꾸면 답이 (A의 y좌표)/(B의 x좌표) 로 나온다. 제약: 곡선이 원점을 지나야 P→O 에서 두 넓이가 모두 0 이 되고, A 는 y축 위·B 는 x축 위에 있어야 밑변이 상수로 남는다. 그림 라벨 P·A·B·O 는 고정."
    creative: "(1) 곡선을 y=ln(x+1) 로 바꾸면 비가 뒤집혀 3/e 의 역꼴이 되게 하기(★3 유지) (2) A 를 곡선 위의 고정점으로 옮겨 밑변이 상수가 아니게 하기(★4) (3) S1-S2 의 극한이나 S1/S2^2 를 물어 차수를 어긋나게 하기(★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0338
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→∞) (2^x+3^{x+a})/(2^x-3^x)=-1/3 을 만족시키는 상수 a.
  category: "밑이 가장 큰 3^x 로 분모·분자를 나누기 → (2/3)^x→0"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모·분자를 밑이 가장 큰 3^x 로 나눠 (2/3)^x→0 을 쓰는 꼴로 동치 변환하고 3^{x+a}=3^a·3^x 로 상수를 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수 꼴 분수식의 x→∞ 극한; 최대 밑으로 나누기와 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^x 로 나누면 ((2/3)^x+3^a)/((2/3)^x-1) → 3^a/(-1)=-3^a. 이것이 -1/3 이므로 3^a=1/3, a=-1.
    어느 밑이 지배적인지 고르는 T-범위 함정과 지수의 상수항 분리가 골조. 종합 구역 출발점 ★2~3 중 ★2.
  tier: star_2
  mechanism_primary: "3^x 로 나누기 → -3^a=-1/3 → a=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 (2, 3) 과 목표 극한값 -1/3 을 바꾼다. 제약: 두 밑이 달라야 하고(같으면 상수 비), 목표값이 -3^a 꼴이므로 부호가 음수이고 절댓값이 밑의 거듭제곱으로 떨어져야 a 가 정수로 나온다."
    creative: "(1) x→-∞ 로 바꿔 지배적인 밑이 뒤집히게 하기(I-MI 추가 · ★3) (2) 분모를 2^x+3^x 로 바꿔 극한이 양수가 되게 하기(★2 유지) (3) 극한이 존재하도록 하는 a 의 조건을 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0339
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→∞) {log_3(6x+1)+log_{1/3} 2x} 의 값.
  category: "밑 1/3 을 -log_3 으로 → 로그 차를 하나로 합치기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log_{1/3} 2x=-log_3 2x 로 밑을 맞춘 뒤 두 로그를 log_3{(6x+1)/(2x)} 하나로 합쳐 ∞-∞ 꼴을 없앤다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑이 역수인 두 로그의 합; ∞-∞ 를 로그 합치기로 해소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합치면 log_3{(6x+1)/(2x)} → log_3 3=1. 각 항이 ∞ 로 발산하므로 먼저 합치지 않으면 손을 못 대는 구조다.
    밑 1/3 의 부호 반전이 T-표기 함정. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "log_{1/3} 2x=-log_3 2x → log_3{(6x+1)/(2x)} → log_3 3=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식 (6x+1), 2x 의 계수와 밑 3 을 바꾼다. 제약: 최고차항 계수의 비가 밑의 거듭제곱이어야 답이 정수로 떨어진다(6/2=3). 상수항 1 은 극한에 영향이 없어 자유롭다."
    creative: "(1) 밑을 각각 2 와 1/4 로 두어 계수가 1/2 인 합이 되게 하기(★2~3) (2) x→0+ 로 바꿔 발산하게 만든 뒤 극한이 존재하지 않음을 묻기(★3) (3) log_3(6x+1)+log_{1/3}(ax)=1 이 되는 a 를 묻기(I-BW d1 · ★2)."
```

```yaml
- id: RPM-CALC2-0340
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→∞) log_2 (1+1/x)^{3x} 의 값. 5지선다.
  category: "(1+1/x)^{3x}={(1+1/x)^x}^3→e^3 → log_2 e^3=3/ln 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지수 3x 를 {(1+1/x)^x}^3 로 묶어 e 의 정의 꼴로 만들고, 밑 2 의 로그를 log_2 e=1/ln 2 로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "e 의 정의 꼴 극한에 로그를 씌운 값; log_a e=1/ln a"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한 안쪽이 e^3 이므로 값은 log_2 e^3=3 log_2 e=3/ln 2.
    log_2 e 를 ln 2 의 역수로 되돌리는 처리(T-표기)를 놓치면 선택지 ③ 3 ln 2 로 빠진다. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "(1+1/x)^{3x}→e^3 → log_2 e^3=3/ln 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수 3 과 로그의 밑 2 를 바꾼다. 제약: 안쪽 극한이 e^k 로 떨어지게 (1+1/x)^{kx} 꼴을 유지하고, 밑을 e 로 두면 답이 그냥 k 가 되어 난이도가 내려간다."
    creative: "(1) (1+2/x)^{3x} 로 바꿔 안쪽이 e^6 이 되게 하기(★2 유지) (2) 로그를 밖이 아니라 밑에 두어 log_{(1+1/x)} 꼴로 만들기(★4) (3) 답을 a/ln 2 로 주고 지수 계수를 역산(I-BW d1 · ★2)."
```

```yaml
- id: RPM-CALC2-0341
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    미분가능한 f(x) 에 대해 lim(x→0) {f(x)-f(0)}/ln(1+3x)=2 일 때 f'(0). 5지선다.
  category: "분모를 x 로 환산 → f'(0)·(1/3)=2"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모·분자를 x 로 나눠 {f(x)-f(0)}/x 는 미분계수 정의로, ln(1+3x)/x 는 표준극한 3 으로 각각 떼어낸다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분모가 로그인 미분계수형 극한; 표준극한으로 분모 환산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln(1+3x)/x → 3 이므로 주어진 극한은 f'(0)/3=2 → f'(0)=6.
    f 가 구체적으로 주어지지 않아 Mₐ 가 3 이지만 단계는 한 번의 분리뿐이다. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "분모·분자를 x 로 나누기 → f'(0)/3=2 → f'(0)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 ln(1+3x) 계수 3 과 극한값 2 를 바꾼다. 제약: 분모가 x→0 에서 0 이 되어야 하고 답 f'(0)=(계수)×(극한값) 이 선택지 범위에 들어가야 한다."
    creative: "(1) 분모를 e^{3x}-1 이나 2^{3x}-1 로 바꾸기(밑에 따라 ln 2 가 남음 · ★2~3) (2) f(x)-f(0) 를 f(2x)-f(0) 로 바꿔 안쪽 배수까지 걸리게 하기(★3) (3) f'(0) 대신 f(x)=g(x)e^x 꼴로 주고 g'(0) 을 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0342
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ㄱ~ㄷ 세 극한식의 참·거짓 판정. ㄱ {(x-2)/(x+2)}^x=e^4, ㄴ ln(1+2/x)^{3x}=3/2, ㄷ (e^x-e)/(x-1)→e.
  category: "세 보기를 각각 e 의 정의 꼴·표준극한·미분계수 정의로 옮겨 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 보기를 서로 다른 표준꼴로 동치 변환한다 — ㄱ 은 분자·분모를 각각 (1±2/x)^x 로 갈라 e^{-2}/e^2, ㄴ 은 로그를 지수 밖으로 빼 3x·ln(1+2/x), ㄷ 은 e^x 의 x=1 에서의 미분계수 정의"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그 극한 보기 판정(참거짓); e 의 정의와 미분계수 정의 혼합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 e^{-2}/e^{2}=e^{-4} 라 거짓(부호 함정), ㄴ 은 3x·(2/x)→6 이라 거짓, ㄷ 만 e 로 참. 답 ㄷ.
    보기마다 쓰는 도구가 달라 세 번 다른 변환을 해야 하고 ㄱ 의 분모 쪽 부호, ㄴ 의 지수 위치가 T-부호·T-표기 함정. 종합 구역 ★2~3 중 ★3.
  tier: star_3
  mechanism_primary: "ㄱ e^{-2}/e^2=e^{-4}(거짓) · ㄴ 3x ln(1+2/x)→6(거짓) · ㄷ 미분계수 e(참) → ㄷ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 상수 (2, 3, e) 와 주장하는 값을 바꾼다. 제약: 보기 중 참이 최소 하나는 있어야 하고, 거짓 보기는 부호·배수처럼 학생이 흔히 틀리는 값으로 두어야 판정이 의미가 있다."
    creative: "(1) 참인 보기를 둘로 늘려 답을 ㄱㄷ 꼴로(★3 유지) (2) ㄷ 을 (a^x-a)/(x-1) 로 일반화해 답이 a ln a 가 되게 하기(★3) (3) 보기를 「극한이 존재한다」 판정으로 바꾸면 I-MI 가 붙어 ★4."
```

```yaml
- id: RPM-CALC2-0343
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→0) 12x/(e^x+e^{2x}+…+e^{nx}-n)=1/10 일 때 자연수 n. 5지선다.
  category: "-n 을 각 항에 1 씩 배분 → Σ(e^{kx}-1) → Σk=n(n+1)/2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모의 -n 을 n 개 항에 1 씩 나눠 붙여 Σ(e^{kx}-1) 로 만들고 각 항을 x 로 나눠 표준극한 k 로 보내는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수항 n 개의 합이 분모인 극한; -n 배분 후 Σk 공식과 정수해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모/x → Σ(k=1..n) k = n(n+1)/2 이므로 극한은 24/{n(n+1)}=1/10 → n(n+1)=240 → n=15.
    -n 을 통째로 두면 손을 못 대고, 배분 착안(EQV d2) 뒤에는 Σk 공식과 정수해 판정이 남는다. 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "분모=Σ(e^{kx}-1) → /x → n(n+1)/2 → 24/{n(n+1)}=1/10 → n=15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 12 와 목표 극한값 1/10 을 바꾼다. 제약: 답이 자연수 n 이 되려면 (분자계수×2)/(극한값) 이 연속한 두 자연수의 곱 n(n+1) 이어야 한다(240=15·16, 90=9·10, 42=6·7 등)."
    creative: "(1) 지수를 e^{x}+e^{4x}+e^{9x}+… 처럼 제곱수로 바꿔 Σk^2 공식이 필요하게 하기(★4) (2) 밑을 2^{kx} 로 바꿔 ln 2 가 공통으로 빠지게 하기(★3 유지) (3) n 을 주고 극한값을 묻는 정방향으로 뒤집으면 I-BW 가 빠져 ★2."
```

```yaml
- id: RPM-CALC2-0344
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→0) (8^x-1)log_2(1+x)/x^2 의 값. 5지선다.
  category: "x^2 을 x·x 로 갈라 두 표준극한의 곱으로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 x^2 을 x·x 로 나눠 (8^x-1)/x 와 log_2(1+x)/x 두 표준극한의 곱으로 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그 표준극한 두 개의 곱; 분모 차수 맞춰 분리하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (8^x-1)/x → ln 8=3 ln 2, log_2(1+x)/x → 1/ln 2 이므로 곱은 3.
    분모의 차수와 분자 두 인수의 차수를 맞추는 것이 전부이고 ln 2 가 약분되는 구조. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "x^2=x·x 분리 → ln 8 × (1/ln 2) = 3 ln 2/ln 2 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 밑 8 과 로그의 밑 2 를 바꾼다. 제약: 두 밑이 같은 수의 거듭제곱이어야 ln 이 약분돼 답이 정수로 떨어진다(8=2^3 → 3). 아니면 답에 ln 의 비가 남는다."
    creative: "(1) 로그를 ln(1+3x) 로 바꿔 답이 3 ln 8 이 되게 하기(★2 유지) (2) 분모를 x^3 으로 올려 발산하게 만든 뒤 극한이 존재하지 않음을 묻기(★3) (3) (a^x-1)log_b(1+x)/x^2 의 값이 1 이 되는 (a, b) 관계를 묻기(I-BW d2 · ★3)."
```

```yaml
- id: RPM-CALC2-0345
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→0) (a^{2x}-a^x)/(2x)=ln 3 을 만족시키는 양수 a.
  category: "분자에서 a^x 를 묶어 a^x(a^x-1) → (1/2)ln a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^{2x}-a^x=a^x(a^x-1) 로 묶어 a^x→1 과 표준극한 (a^x-1)/x→ln a 로 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑이 같은 두 지수항의 차로 된 극한; 공통인수 묶기와 미정 밑 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한값은 (1/2)ln a 이므로 (1/2)ln a=ln 3 → ln a=2 ln 3=ln 9 → a=9.
    지수 2x 를 그대로 두고 표준극한 두 개로 쪼개도 같은 값이 나온다. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "a^x(a^x-1)/(2x) → (1/2)ln a = ln 3 → a=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지(쪽 렌더 · 답 크롭은 0346 것)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수 2, 지수의 배수 2, 목표값 ln 3 을 바꾼다. 제약: 답 a=3^{(분모계수)} 꼴이라 지수가 커지면 a 가 급히 커지므로 계수를 2~3 으로 제한하고, a>0·a≠1 을 유지한다."
    creative: "(1) 분자를 a^{3x}-a^x 로 올려 (a^{2x}-1) 인수가 남게 하기(★3) (2) 목표값을 ln a 자체로 두고 방정식이 항등식이 되는 조건을 묻기(★3) (3) 분모를 x^2 으로 바꿔 발산하게 만드는 함정형(★3)."
```

```yaml
- id: RPM-CALC2-0346
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim(x→0) (12^x-4^x-3^x+a)/x^2=b ln 2 일 때 상수 a, b 에 대해 e^{ab}. 5지선다.
  category: "분자→0 으로 a=1 → 12^x-4^x-3^x+1=(4^x-1)(3^x-1) 인수분해"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 x^2 으로 0 에 가고 극한이 유한하므로 분자도 0 이어야 함을 역추적해 a-1=0 을 얻는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "12^x=4^x·3^x 임을 보고 12^x-4^x-3^x+1 을 (4^x-1)(3^x-1) 곱으로 바꿔 x^2 분모와 차수를 맞춘다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수 네 항의 합이 분자인 x^2 분모 극한; 곱 인수분해와 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=1 로 두면 분자가 (4^x-1)(3^x-1) 이 되어 극한은 ln 4·ln 3=2 ln 2·ln 3 → b=2 ln 3. ab=2 ln 3 이므로 e^{ab}=e^{ln 9}=9.
    통찰 2개(BW d2 + RT d2)로 +1 후보였지만 12=4·3 인수분해는 이 단원 종합 구역의 표준 훈련 대상이라 ★3 을 유지했다.
    [분류 이슈] 통찰 2개 규칙대로면 ★4 후보 — 인수분해 패턴의 노출도를 카탈로그에서 정한 뒤 재판정 필요.
  tier: star_3
  mechanism_primary: "분자→0 ⇒ a=1 → (4^x-1)(3^x-1)/x^2 → ln 4·ln 3 → b=2 ln 3 → e^{ab}=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 쌍 (4, 3) 을 다른 쌍 (9, 2)·(8, 5) 로 바꾸면 첫 항이 그 곱이 된다. 제약: 큰 밑이 반드시 두 밑의 곱이어야 인수분해가 성립하고, 답을 b ln k 꼴로 맞추려면 한쪽 밑이 k 의 거듭제곱이어야 한다."
    creative: "(1) 답을 b ln 3 꼴로 물어 b=2 ln 2 가 되게 좌우를 바꾸기(★3 유지) (2) 분모를 x 로 낮춰 극한이 0 이 되게 하는 함정형(★2) (3) 상수항 a 를 주지 않고 「극한이 존재한다」만 준 뒤 a 를 묻기(BW 단독 강조 · ★3)."
```

```yaml
- id: RPM-CALC2-0347
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x>-1 에서 연속인 f(x) 가 f(x)ln(x+1)=5^x-1 을 만족시킬 때 f(0).
  category: "x≠0 에서 f(x)=(5^x-1)/ln(x+1) → 연속성으로 f(0)=극한값"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=0 을 그대로 대입하면 0=0 이라 아무 정보가 없음을 보고, 연속성 조건을 「f(0)=lim(x→0) f(x)」 로 바꿔 x≠0 에서 만든 식의 극한으로 우회한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항등식으로 주어진 연속함수의 함숫값; 연속성으로 극한을 값으로 옮기기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x≠0 에서 f(x)=(5^x-1)/ln(x+1) 이고 이를 x 로 나눠 보면 극한은 ln 5/1=ln 5. 연속이므로 f(0)=ln 5.
    대입으로는 f(0) 이 결정되지 않는다는 T-경계 구조를 알아채는 것이 골조(EQV d2). f 가 미지 함수라 Mₐ=3. 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "x≠0 에서 f(x)=(5^x-1)/ln(x+1) → 극한 ln 5 → 연속이므로 f(0)=ln 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 밑 5 와 좌변 로그의 평행이동 x+1 을 바꾼다. 제약: 양변이 x=0 에서 동시에 0 이 되어야 f(0) 이 극한으로만 정해지고, 로그 안이 x→0 에서 1 이 되게 평행이동을 맞춰야 한다."
    creative: "(1) 좌변을 f(x)(2^x-1) 로 바꿔 답이 ln 5/ln 2 가 되게 하기(★3 유지) (2) 우변을 5^x-1 대신 x^2 으로 두어 f(0)=0 이 되게 하기(★2) (3) f(0) 대신 f'(0) 을 물으면 항등식을 미분해야 해 ★4."
```

```yaml
- id: RPM-CALC2-0348
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=(x+a)e^x 에서 f'(2)=8e^2 일 때 상수 a. 5지선다.
  category: "곱의 미분법 → f'(x)=(x+a+1)e^x → 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 세운 미분계수로 미정계수 결정(지수함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=e^x+(x+a)e^x=(x+a+1)e^x 이므로 f'(2)=(3+a)e^2=8e^2 → a=5.
    0323 과 같은 골조의 짧은 판이며 통찰 0 · M_total 4 지만 미정계수 층이 있어 종합 구역 하한 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "f'(x)=(x+a+1)e^x → (3+a)e^2=8e^2 → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입점 2 와 목표값 8e^2 를 바꾼다. 제약: 목표값이 e^{대입점} 의 정수배여야 a 가 정수로 떨어지고, a 가 선택지 1~5 안에 들어오도록 (대입점+1+a) 를 잡는다."
    creative: "(1) (x^2+a)e^x 로 올려 f'(2) 가 a 의 일차식이 되게 하기(★2 유지) (2) e^x 를 3^x 로 바꿔 ln 3 이 끼게 하기(★2~3) (3) f'(2)=0 이 되는 a 를 물어 극값 위치와 연결(★3)."
```

```yaml
- id: RPM-CALC2-0349
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x ln x+ax 에서 f'(1)=6 일 때 방정식 f(x)=0 의 해.
  category: "f'(1)=1+a=6 으로 a 결정 → x(ln x+5)=0 을 정의역 x>0 에서 풀기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x ln x 꼴의 도함수로 미정계수를 정한 뒤 방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=ln x+1+a 이므로 f'(1)=1+a=6 → a=5. f(x)=x(ln x+5)=0 에서 정의역이 x>0 이라 x=0 은 해가 아니고 ln x=-5 → x=e^{-5}.
    x 로 묶은 뒤 x=0 을 버리는 T-범위 함정이 핵심. 종합 구역 ★2.
  tier: star_2
  mechanism_primary: "f'(1)=1+a=6 → a=5 → x(ln x+5)=0, x>0 → x=e^{-5}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{1}{e^5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 6 과 대입점 1 을 바꾼다. 제약: 대입점을 1 로 두어야 ln 1=0 으로 a 가 바로 나오고, 해가 e^{-(1+a-1)} 꼴이라 조건값이 커지면 지수가 커진다."
    creative: "(1) f(x)=x ln x+ax+b 로 상수항을 더해 해가 둘이 되게 하기(★3) (2) f'(1)=6 대신 f(e)=0 조건으로 바꾸기(★2 유지) (3) f(x)=0 의 해의 개수를 묻는 꼴로 바꾸면 그래프 해석이 붙어 ★3."
```

```yaml
- id: RPM-CALC2-0350
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=a+x ln bx 에서 lim(x→1) {f(x)-3}/(x-1)=2 일 때 f(e). 5지선다.
  category: "분모→0 이므로 f(1)=3 · 극한=f'(1)=2 → a, b 결정 후 f(e)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한하고 분모가 0 으로 가므로 분자도 0, 즉 f(1)=3 이라는 숨은 조건을 역추적한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분모→0 조건 + 미분계수로 두 상수를 정하고 다른 점의 함숫값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=ln bx+1 이므로 f'(1)=ln b+1=2 → b=e. f(1)=a+ln b=a+1=3 → a=2.
    f(e)=2+e·ln(e·e)=2+2e. 숨은 조건 만들기(BW d2) 뒤 두 상수를 분리해 얻고 마지막에 다른 점을 대입하는 3층 구조. 종합 구역 ★3.
  tier: star_3
  mechanism_primary: "f(1)=a+ln b=3 · f'(1)=ln b+1=2 → b=e, a=2 → f(e)=2+2e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수 3, 극한값 2, 마지막 대입점 e 를 바꾼다. 제약: 극한을 잡는 점이 1 이어야 ln b 가 그대로 남아 b 가 깔끔하고, f(e) 가 선택지 범위에 들도록 a 를 작게 둔다."
    creative: "(1) f(e) 대신 f(1/b) 를 묻기(로그 영점 활용 · ★3 유지) (2) f(x)=a+x ln bx+cx 로 미지수를 셋으로 늘리기(★4) (3) 극한값을 주지 않고 존재만 준 뒤 a 와 b 의 관계식을 묻기(★4)."
```

```yaml
- id: RPM-CALC2-0351
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=e^{2x}-1 위의 점 P(t, e^{2t}-1) (t>0) 에 대해 PQ=OQ 인 x축 위의 점 Q 의 x좌표를 f(t) 라 할 때 lim(t→0+) f(t)/t. 5지선다.
  category: "PQ=OQ 를 좌표로 세워 f(t) 를 t 의 식으로 → 표준극한 {(e^{2t}-1)/t}^2→4"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PQ=OQ 라는 도형 조건을 좌표 방정식 (t-q)^2+(e^{2t}-1)^2=q^2 로 옮기면 q^2 이 소거돼 q 가 t 의 유리식으로 풀린다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 선분 길이가 같은 점의 좌표 함수와 그 극한; 지수 표준극한의 제곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    q=f(t)={t^2+(e^{2t}-1)^2}/(2t) 이므로 f(t)/t=1/2+{(e^{2t}-1)/t}^2/2 → 1/2+4/2=5/2.
    좌표화에서 q^2 이 양변에서 지워지는 것을 보는 전환(RT d2)이 골조이고 뒤는 표준극한의 제곱. 기출·종합 구역 ★3.
  tier: star_3
  mechanism_primary: "(t-q)^2+(e^{2t}-1)^2=q^2 → f(t)={t^2+(e^{2t}-1)^2}/(2t) → f(t)/t → 5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0351.png"
  latex: latex-bank/rpm-calc2/items/0351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 지수 계수 2 를 바꾸면 답이 1/2+(계수)^2/2 가 된다. 제약: 곡선이 원점을 지나야 t→0+ 에서 f(t)/t 가 유한하고, 선택지가 반정수로 떨어지게 계수를 작은 정수로 둔다. 그림 라벨 P·Q·O 는 고정."
    creative: "(1) 곡선을 y=ln(1+at) 로 바꿔 같은 골조를 로그로(★3 유지) (2) Q 를 y축 위 점으로 바꿔 대칭 방향을 틀기(★3) (3) PQ=2·OQ 로 비를 넣으면 q 의 이차방정식이 남아 근 선택(I-VF)이 붙어 ★4."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0352
  page: 54
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    α=lim(x→-∞) x{ln(3-x)-ln(-x)}, β=lim(x→0) e x^2/(e^{3x^2}-1) 일 때 αβ.
  category: "로그 차를 하나로 묶고 -3/x=t 치환 → α=-3 · e^{3x^2}-1 을 3x^2 기준 표준극한 → β=e/3"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ln(3-x)-ln(-x)=ln(1-3/x) 로 묶은 뒤 t=-3/x 로 치환해 ∞×0 꼴을 -3·ln(1+t)/t 표준극한으로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x→-∞ 로그 차의 ∞×0 극한과 e^{f(x)}-1 표준극한의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x<0 이므로 3-x>0, -x>0 이고 (3-x)/(-x)=1-3/x. t=-3/x→0+ 로 두면 α=-3·ln(1+t)/t → -3.
    β 는 u=3x^2 로 보면 e·x^2/(3x^2)=e/3. αβ=-e. 음의 무한대에서 부호를 놓치는 T-부호·T-범위가 함정. 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "α=-3·lim ln(1+t)/t=-3 · β=e/3 → αβ=-e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-e$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "α 의 상수 3 과 β 의 지수 계수 3·분자 상수 e 를 바꾼다. 제약: α 는 -(로그 안 상수) 로 나오고 β 는 (분자 상수)/(지수 계수) 로 나오므로 두 값의 곱이 깔끔해지게 짝을 맞춘다."
    creative: "(1) α 를 x→+∞ 와 ln(x+3)-ln x 로 바꿔 부호를 뒤집기(★3 유지) (2) β 의 분자를 sin 이 아닌 x^2 유지 상태에서 분모를 2^{3x^2}-1 로 바꿔 ln 2 를 끼우기(★3) (3) αβ=k 가 되는 상수를 역산하게 하면 I-BW 가 붙어 ★4."
```

```yaml
- id: RPM-CALC2-0353
  page: 54
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    lim(x→1) (e^{x-1}-a)/(x^2-1)=b 를 만족시키는 상수 a, b 에 대해 a+b.
  category: "분모→0 이므로 분자→0 → a=1 → (x-1)(x+1) 분해 후 미분계수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 b 가 존재하고 분모가 0 으로 가므로 분자도 0 이어야 함을 역추적해 e^0-a=0, 즉 a=1 을 얻는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분모→0 조건으로 분자의 상수를 정하고 미분계수로 극한값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=1 이면 (e^{x-1}-1)/{(x-1)(x+1)}={(e^{x-1}-1)/(x-1)}·1/(x+1) → 1·(1/2)=b. a+b=3/2.
    서술형 구역은 ★3 출발이지만 골조가 「분자→0 + 인수분해」 두 단계뿐이고 M_total 5 라 −1 해 ★2 로 뒀다.
    [분류 이슈] 벤더 구역(서술형 ★3)과 판정(★2)이 1단 어긋남 — 서술형 구역을 일괄 ★3 으로 둘지 골조로 판정할지 카탈로그 설계 때 결정.
  tier: star_2
  mechanism_primary: "분자→0 ⇒ a=1 → {(e^{x-1}-1)/(x-1)}/(x+1) → b=1/2 → a+b=3/2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 평행이동 x-1 과 분모의 x^2-1 을 짝으로 바꾼다(x-2 와 x^2-4 등). 제약: 지수가 0 이 되는 점과 분모의 근이 일치해야 0/0 꼴이 되고, b=1/(2·그 점) 이므로 그 점을 정수로 둔다."
    creative: "(1) 분자를 a^{x-1}-a 꼴로 바꿔 b 에 ln a 가 남게 하기(★3) (2) 분모를 (x-1)^2 으로 두어 극한이 존재하지 않게 만든 함정형(★3) (3) a+b 대신 ab 나 b 의 부호를 묻기(★2 유지)."
```

```yaml
- id: RPM-CALC2-0354
  page: 54
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    x≠0 에서 2x/(e^x+3x-1), x=0 에서 k 인 f(x) 가 x=0 에서 연속일 때 f(2k).
  category: "분모를 (e^x-1)+3x 로 쪼개 x 로 나누기 → k=1/2 → f(1) 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 e^x+3x-1 을 (e^x-1)+3x 로 묶고 분모·분자를 x 로 나눠 (e^x-1)/x→1 표준극한이 드러나게 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "0/0 꼴 분수함수의 연속 조건으로 정의값 결정 후 다른 점의 함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k=lim 2x/{(e^x-1)+3x}=2/{(e^x-1)/x+3} → 2/4=1/2. 따라서 2k=1 이고 f(1)=2/(e+3-1)=2/(e+2).
    마지막에 2k 가 0 이 아니어서 정의값 k 가 아니라 분수식 쪽을 써야 하는 T-경계가 함정. 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "k=lim 2x/{(e^x-1)+3x}=1/2 → 2k=1 → f(1)=2/(e+2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{e+2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 2 와 분모의 3x 계수를 바꾼다. 제약: 분모가 x→0 에서 0 이 되게 상수항이 -1 로 e^0 을 상쇄해야 하고, k=(분자계수)/(1+3x 계수) 이므로 2k 가 깔끔한 수가 되게 잡는다."
    creative: "(1) 분모를 2^x+3x-1 로 바꿔 k 에 ln 2 가 끼게 하기(★3 유지) (2) f(2k) 대신 f(k) 를 물어 정의값과 분수식 중 어느 쪽인지 다시 따지게 하기(I-VF 추가 · ★4) (3) 분자를 x^2 으로 올려 k=0 이 되게 하는 함정형(★3)."
```

```yaml
- id: RPM-CALC2-0355
  page: 54
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    0<x≤1/2 에서 3+a ln 2x, x>1/2 에서 bx+1 인 f(x) 가 x=1/2 에서 미분가능할 때 a+b.
  category: "연속 조건으로 b 결정(ln 1=0) → 좌우 미분계수 2a=b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그·일차 구간별 함수의 미분가능 조건으로 두 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1/2 에서 ln 1=0 이므로 좌극한 3, 우극한 b/2+1 → b=4. 미분계수는 좌 a/x=2a, 우 b=4 → a=2. a+b=6.
    유형 13(0331~0333)과 완전히 같은 골조에 접합점만 1/2 인 판이라 서술형 출발점 ★3 에서 −1 해 ★2.
    [분류 이슈] 서술형 구역 ★3 과 1단 어긋남 — 0353 과 같은 사유로 구역 일괄 판정 여부를 카탈로그에서 정할 것.
  tier: star_2
  mechanism_primary: "연속 3=b/2+1 → b=4 · 미분 2a=b → a=2 → a+b=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접합점 1/2 과 로그 안 계수 2, 상수 3·1 을 바꾼다. 제약: 접합점에서 로그 안이 1 이 되게 (계수)×(접합점)=1 을 유지해야 연속식이 짧고, 좌미분계수 a/x 가 접합점의 역수배로 나오는 점을 고려한다."
    creative: "(1) 오른쪽을 bx^2+1 로 올려 미분 조건이 접합점에 의존하게 하기(★3) (2) 왼쪽을 3+a log_2 2x 로 바꿔 ln 2 가 끼게 하기(★3) (3) 미분가능이 아니라 「연속이지만 미분가능하지 않을」 조건을 묻기(I-MI 추가 · ★3~4)."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0356
  page: 54
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    f(x)=2 ln(x+1)+1 의 역함수를 g(x) 라 할 때 lim(x→1) {f(x-1)-f(0)}/{g(x)-g(1)}.
  category: "분모·분자를 (x-1) 로 나눠 f'(0)/g'(1) → 역함수 미분계수 g'(1)=1/f'(0)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자·분모를 각각 (x-1) 로 나눠 f(x-1)-f(0) 쪽은 x-1→0 인 f 의 x=0 미분계수, g(x)-g(1) 쪽은 g 의 x=1 미분계수로 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 의 식을 구하지 않고 f(0)=1 에서 g(1)=0 임을 읽어 역함수 미분계수 g'(1)=1/f'(g(1))=1/f'(0) 으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 미분계수를 이용한 극한; f'(a)/g'(b) 꼴 분해"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'(x)=2/(x+1) 이라 f'(0)=2 이고 f(0)=1 이므로 g(1)=0, g'(1)=1/f'(0)=1/2. 값은 2/(1/2)=4.
    두 미분계수의 비로 쪼개는 변환과 역함수 미분계수 전환이 각각 걸려 통찰 2개(EQV d2 + RT d2). 실력 Up 출발점 ★4 유지(★5 는 통찰 3개 + SC/VF/SYM/XU 조건 미충족).
  tier: star_4
  mechanism_primary: "f'(0)/g'(1) 로 분해 → g(1)=0, g'(1)=1/f'(0)=1/2 → 2/(1/2)=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수 2 와 상수 1, 평행이동 x+1 을 바꾼다. 제약: 결과가 {f'(0)}^2 이므로 계수를 바꾸면 답이 제곱으로 커지고, f(0) 의 값이 분모 쪽 극한점(여기서 1)과 같아야 g(1)=0 이 되어 문제가 성립한다."
    creative: "(1) f 를 e^{x}+a 꼴로 바꿔 역함수가 로그가 되게 하기(★4 유지) (2) 분자를 f(x-1)-f(0) 대신 g(x)-g(1) 과 자리를 바꿔 역수 답이 되게 하기(★4) (3) g'(1) 만 따로 묻고 f 를 명시하지 않으면 Mₐ 가 올라 ★4~5."
```

```yaml
- id: RPM-CALC2-0357
  page: 54
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    이차함수 f(x) 와 x≠0 에서 (e^{3x}-1)/{x(2^x-1)}, x=0 에서 5 인 g(x) 에 대해 f(x)g(x) 가 실수 전체에서 연속이고 f(1)=1 일 때 f(2).
  category: "g 가 x=0 에서 발산 → f 가 x^2 인수를 가져야 곱이 연속 → f(x)=x^2"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "g(x)~3/(x ln 2) 로 x=0 에서 발산함을 먼저 확인하고, 곱이 연속이려면 f 가 그 발산을 상쇄하는 인수를 가져야 한다는 조건을 f 쪽으로 역추적한다"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(0)=0 만으로는 부족함을 재검증한다 — f(x)=x(px+q) 로 두면 곱의 극한이 3q/ln 2 인데 f(0)g(0)=0 이어야 하므로 q=0 까지 기각·확정해야 한다"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "발산하는 함수와의 곱이 연속일 조건으로 다항함수 결정하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    (e^{3x}-1)/x→3, 2^x-1~x ln 2 이므로 g 는 x=0 에서 발산한다(정의값 5 는 미끼). f(x)=x(px+q) 로 두면 f·g 의 x→0 극한은 3q/ln 2 이고 f(0)g(0)=0 이므로 q=0.
    따라서 f(x)=px^2, f(1)=1 에서 p=1, f(2)=4. 발산 상쇄를 역추적(BW d3)한 뒤 일차항까지 죽여야 함을 재검증(VF d2)하는 2단 구조.
    실력 Up 출발점 ★4 유지. ★5 는 통찰 3개 이상 조건에 못 미친다.
  tier: star_4
  mechanism_primary: "g 는 x=0 에서 발산 → f 가 x^2 을 가져야 곱이 연속 → f(x)=x^2 → f(2)=4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더 · 답 크롭은 0358 것)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 3, 밑 2, 정의값 5, 조건 f(1)=1 을 바꾼다. 제약: 분모가 x·(a^x-1) 이라 x=0 에서 2차로 0 이 되고 분자는 1차로만 0 이 되므로 f 가 반드시 x^2 인수를 가져야 한다는 구조를 유지해야 한다. 정의값은 어떤 수를 넣어도 미끼로 기능한다."
    creative: "(1) f 를 삼차함수로 바꾸고 조건을 둘 주기(★4 유지) (2) 분자를 e^{3x}-1 대신 (e^{3x}-1)^2 로 올려 f 가 상수여도 되게 뒤집기(★4) (3) 연속이 아니라 미분가능을 요구하면 차수 조건이 하나 더 붙어 ★5 후보."
```

```yaml
- id: RPM-CALC2-0358
  page: 54
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    곡선 y=4 log x 위의 A(1, 0) 과 B(t, 4 log t) 에 대해 선분 AB 의 수직이등분선이 y축과 만나는 점의 y좌표를 f(t) 라 할 때 lim(t→1) f(t).
  category: "중점·수직 기울기로 f(t) 를 세우고 (t^2-1)/log t 를 표준극한으로 환원"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직이등분선이라는 도형 조건을 중점 ((1+t)/2, 2 log t) 과 기울기 -(t-1)/(4 log t) 로 옮겨 y절편 f(t)=2 log t+(t^2-1)/(8 log t) 라는 대수식으로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(t^2-1)/log t 를 상용로그에서 자연로그로 바꾸고 (t-1)/ln t→1 표준극한과 (t+1)→2 로 갈라 극한을 계산한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 위 두 점의 수직이등분선 y절편의 극한; 상용로그 표준극한 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f(t)=2 log t+(t-1)(t+1)/(8 log t). 앞 항은 0 으로 가고 뒤 항은 log t=ln t/ln 10 이므로 (t-1)/ln t→1, (t+1)→2 에서 2 ln 10/8=ln 10/4.
    도형→대수 전환(RT d2)과 상용로그를 자연로그로 바꿔 표준극한을 꺼내는 변환(EQV d2) 두 단계에, 두 항의 극한이 각각 0 과 유한값으로 갈리는 T-경계가 붙는다. 실력 Up 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "f(t)=2 log t+(t^2-1)/(8 log t) → (t-1)/ln t→1 → ln 10/4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\ln 10}{4}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: "crop:fig-0358.png"
  latex: latex-bank/rpm-calc2/items/0358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수 4 와 밑(상용로그 대신 ln 이나 log_2)을 바꾼다. 제약: 답이 (2/계수)·ln(밑) 꼴로 나오므로 계수를 짝수로 두어야 분모가 깔끔하고, A 는 반드시 곡선과 x축의 교점(1, 0) 이어야 t→1 에서 0/0 구조가 생긴다. 그림 라벨 A·B 는 고정."
    creative: "(1) y축이 아니라 x축과의 교점을 물으면 다른 항이 지배해 극한이 달라진다(★4 유지) (2) 곡선을 y=ae^x-a 로 바꿔 A 를 원점으로 두기(★4) (3) 수직이등분선 대신 선분 AB 의 중점에서의 법선으로 바꾸면 접선 기울기까지 필요해 ★5 후보."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 1 · ★2 23 · ★3 12 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 25 · premium 0 (insights 가 비어 있지 않은 블록은 24문 — `dokdu-check` 가 세는 「통찰형」 수치는 이 기준이다)
- 통찰 라벨 28개의 유형 분포: I-EQV 16 · I-RT 6 · I-BW 5 · I-VF 1 (depth 3 은 0357 하나)
- 구역별: 유형 10~13 14문(★1 1 · ★2 12 · ★3 1) · 유형 UP 14 4문(★2 1 · ★3 3) · 시험에 꼭 나오는 문제 14문(★2 8 · ★3 6) · 서술형 주관식 4문(★2 2 · ★3 2) · 실력 Up 3문(★4 3)
- type_hint 상위: 「곱의 미분법으로 세운 미분계수·미정계수」 4(0320 · 0323 · 0327 · 0348) · 「구간별 함수의 미분가능 조건」 4(0331 · 0332 · 0333 · 0355) · 「분모→0 조건 + 미분계수 연립」 3(0330 · 0350 · 0353) · 「표준극한으로 분모·분자 차수 맞추기」 5(0341 · 0343 · 0344 · 0345 · 0352) · 「도형 길이·넓이의 비의 극한」 5(0334 · 0335 · 0336 · 0337 · 0351)
- 그림: 6문(`crop:fig-0334.png` · `crop:fig-0335.png` · `crop:fig-0336.png` · `crop:fig-0337.png` · `crop:fig-0351.png` · `crop:fig-0358.png`) — 모두 좌표가 발문에 적혀 있어 배치 확인용
- 답 대조: 39문 모두 전사본 answer 와 직접 푼 결과가 일치했다. 「전사 답 확인 필요」 문항 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0333 | 골조가 0332(중 · ★2)와 동일한 미분가능 조건인데 벤더가 「상중 + 서술형」이라 ★3 으로 둠. 답이 2e^{3/2} 로 남는 정리 부담 외에 통찰 차이는 없음 | ★2 / ★3 |
| RPM-CALC2-0335 | 구역은 「유형 UP」(★3 출발)이나 실제 골조는 유형 10 수준(좌표를 그대로 읽어 표준극한 1회). level 「중」을 따라 ★2 로 내림 | ★2 / ★3 |
| RPM-CALC2-0346 | 통찰 2개(BW d2 + RT d2)로 규칙상 +1 후보지만 12=4·3 인수분해를 단원 표준 훈련으로 보고 ★3 유지 | ★3 / ★4 |
| RPM-CALC2-0353 | 「서술형 주관식」 구역 ★3 출발이나 골조가 2단계뿐이고 M_total 5 라 ★2 로 내림 | ★2 / ★3 |
| RPM-CALC2-0355 | 같은 사유. 유형 13 과 완전히 같은 골조에 접합점만 1/2 | ★2 / ★3 |
| RPM-CALC2-0357 | BW depth 3 + VF d2 로 +1 후보지만 ★5 조건(통찰 3개 이상)에 못 미쳐 실력 Up 출발점 ★4 유지. 검증 강제(VF)가 있어 §2.13 저노출 유형 요건은 충족 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고)

- **따로 세워야 할 유형**: ① 「분모→0 ⇒ 분자→0 역추적 + 미분계수 연립」(0330 · 0350 · 0353 · 0346) — 이 범위에서 가장 반복되는 골조이고 ★2~3 을 가르는 축이므로 독립 유형이 필요하다. ② 「구간별 함수의 미분가능 조건」(0331 · 0332 · 0333 · 0355) — 접합점에서 (ln ax)'=1/x 가 상수가 된다는 점이 공통 핵심이라 지수·로그를 한 유형으로 묶되 「연속만 / 미분가능」 두 갈래를 둘 것. ③ 「도형에 쓰인 지수·로그 극한」(0334~0337 · 0351 · 0358) — 밑변이 상수인 단순형(0334 · 0335 · 0337)과 조건식을 좌표로 옮겨야 하는 심화형(0351 · 0358)의 base ★ 가 ★2~3 과 ★4 로 갈리므로 두 유형으로 분리해야 한다.
- **통합해도 될 유형**: 유형 10(지수함수의 도함수)과 유형 11(로그함수의 도함수)은 골조가 모두 「곱의 미분법 + 대입점에서 한 항 소거」로 같다(0320 · 0323 · 0324 · 0327 · 0348). 카탈로그에서는 「지수·로그함수의 도함수와 미분계수」 한 유형에 밑 변환(0322 · 0325)만 하위 변형으로 두면 충분하다. 유형 12 의 「미분계수 정의 복원」(0328 · 0329 · 0341)도 분모 모양(h · x^2-1 · ln(1+3x))만 다른 한 유형이다.
- **base ★ 제안**: 위 통합 유형 ★2, 미분가능 조건 ★2, 분모→0 역추적 ★3, 도형 단순형 ★3, 도형 심화형 ★4, 역함수 미분계수(0356)·발산 상쇄(0357) ★4.
