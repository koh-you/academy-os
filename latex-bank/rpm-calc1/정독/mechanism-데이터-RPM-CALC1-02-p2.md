---
name: mechanism-데이터-RPM-CALC1-02-p2
description: RPM 미적분Ⅰ 02 함수의 연속(2/3 · 교과서 02-6 사잇값 정리 ~ 유형 07 f(x)/g(x) 꼴의 함수의 연속) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 02 함수의 연속
  unit_code: CALC1-02
  part: "2/3"
  extract_range: "25~30쪽 · 0143~0172"
  total_problems: 30
  unit_total: 92
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 02 함수의 연속 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 02 함수의 연속 단원(92문) 가운데 25~30쪽의 30문항(0143~0172)을 다룬다. 구역은 교과서 02-6 사잇값 정리(2문) 뒤로 유형 01 함수의 연속과 불연속 · 유형 02 불연속인 x 의 값 · 유형 03 함수의 그래프와 연속 · 유형 04 함수가 연속일 조건 · 유형 05 (x-a)f(x)=g(x) 꼴 · 유형 06 연속함수의 성질 · 유형 07 f(x)/g(x) 꼴 순이며, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★1~2 · ★2 · ★3 출발)와 「서술형」 태그를 가진다. 그림 문항은 유형 03 의 4문(0152~0155)뿐이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다.

## 문항 데이터

### 교과서 02-6 사잇값 정리

```yaml
- id: RPM-CALC1-0143
  page: 25
  vendor_label: "교과서 02-6 사잇값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $x^3-x^2-2=0$ 이 열린구간 $(1,\,2)$ 에서 적어도 하나의 실근을 가짐을 보이기(구역 공통 발문).
  category: "다항함수의 연속 → 양 끝 함숫값 부호 대조 → 사잇값 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리로 방정식의 실근 존재 증명"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x³-x²-2 는 다항함수라 [1,2] 에서 연속. f(1)=-2<0, f(2)=2>0 이므로 사잇값 정리로 (1,2) 에 실근이 있다. 정리의 가정을 확인하고 진술을 옮겨 적는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x)=x³-x²-2 로 두기 → [1,2] 에서 연속 확인 → f(1)f(2)<0 → 사잇값 정리로 (1,2) 에 실근 존재"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($f(x)=x^3-x^2-2$라 하면 $f(x)$는 닫힌구간 $[1,\,2]$에서 연속이고 $f(1)=-2<0$, $f(2)=2>0$이므로 사잇값 정리에 의하여 열린구간 $(1,\,2)$에서 적어도 하나의 실근을 갖는다.)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수와 구간 (1,2) 를 바꿀 수 있음. 제약: 구간 양 끝 함숫값의 부호가 반대(f(1)f(2)<0)이고 어느 끝도 0 이 되지 않게, 정수 계수·작은 절댓값 유지."
    creative: "(1) 구간을 (0,1)·(2,3) 둘로 주고 각각 실근 존재 보이기(★1 유지) (2) 사차식으로 바꾸고 「(a,b) 에서 실근을 갖는 정수 구간 (a,a+1) 을 모두 찾기」 로 확장(★2·I-MI d1) (3) 방정식 대신 f(x)=g(x) 꼴로 주어 h=f-g 를 세우는 단계 추가(★2·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0144
  page: 25
  vendor_label: "교과서 02-6 사잇값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $x^4+x^3-9x+1=0$ 이 열린구간 $(1,\,2)$ 에서 적어도 하나의 실근을 가짐을 보이기(구역 공통 발문).
  category: "다항함수의 연속 → 양 끝 함숫값 부호 대조 → 사잇값 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리로 방정식의 실근 존재 증명"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x⁴+x³-9x+1 은 [1,2] 에서 연속, f(1)=-6<0, f(2)=7>0 → 사잇값 정리로 (1,2) 에 실근. 0143 과 같은 골조이고 사차식이라 대입 계산만 조금 더 있다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x)=x⁴+x³-9x+1 로 두기 → [1,2] 에서 연속 확인 → f(1)=-6, f(2)=7 부호 반대 → 사잇값 정리로 (1,2) 에 실근 존재"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($f(x)=x^4+x^3-9x+1$이라 하면 $f(x)$는 닫힌구간 $[1,\,2]$에서 연속이고 $f(1)=-6<0$, $f(2)=7>0$이므로 사잇값 정리에 의하여 열린구간 $(1,\,2)$에서 적어도 하나의 실근을 갖는다.)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식 계수·구간 자유. 제약: 양 끝 부호 반대·끝값 0 아님, 대입 계산이 두 자리 정수 안에 들어오게."
    creative: "(1) 「(1,2) 에서 실근을 갖는다」 대신 「실근이 적어도 두 개」 를 보이도록 부호가 세 번 바뀌는 구간 셋 주기(★2·I-MI d1) (2) 계수 하나를 상수 k 로 두고 「(1,2) 에 실근이 존재함이 보장되는 k 의 범위」 묻기(★3·I-BW d1) (3) 사잇값 정리 진술의 빈칸 채우기 서술형(★1)."
```

### 유형 01 함수의 연속과 불연속

```yaml
- id: RPM-CALC1-0145
  page: 26
  vendor_label: "유형 01 함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    보기 ㄱ~ㄹ 네 함수(약분되는 분수식에 x=1 지정값 2 · x/|x| 부호함수에 0 지정 · x²/(x²-1) · √x 와 -x 를 x=0 에서 이어붙인 식) 중 모든 실수에서 연속인 것을 있는 대로 고르기.
  category: "정의역·경계 극한·함숫값 대조 → 네 함수 각각 연속 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 연속·불연속 판정(보기 선별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 x≠1 에서 x+1 이고 극한 2 = f(1) 로 연속, ㄹ은 x=0 에서 좌·우극한·함숫값이 모두 0 으로 연속. ㄴ은 부호함수라 x=0 좌·우극한이 ±1 로 불일치, ㄷ은 x=±1 에서 정의되지 않아 「모든 실수에서 연속」 이 아니다(T-범위). 네 함수 각각 한 줄 판정이고 통찰은 없다. 유형 대표 ★2 출발·M_total 5 로 −1 후보이나 판정 대상이 넷이라 ★2 유지.
  tier: star_2
  mechanism_primary: "각 함수마다 정의 여부 → 경계점 좌·우극한 → 함숫값 일치 순으로 대조 → ㄱ(약분 후 일치)·ㄹ(좌우 0) 연속, ㄴ(부호 불일치)·ㄷ(정의역 결손) 불연속"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 지정값 2·ㄴ의 지정값 0·ㄷ의 분모 x²-1·ㄹ의 경계 0 을 바꿀 수 있음. 제약: ㄱ 지정값을 극한값과 다르게 하면 정답 조합이 바뀌므로 먼저 확정, ㄷ 분모는 실근을 갖는 이차식이어야 불연속 유지."
    creative: "(1) 「불연속인 x 의 값이 가장 많은 함수」 로 묻기(★2) (2) 보기에 가우스 [x]·|x| 조합을 넣어 정의역 결손과 극한 불일치를 구분하게(★2) (3) ㄷ을 정의역이 제한된 함수로 주고 「정의역에서 연속」 과 「모든 실수에서 연속」 의 차이를 묻기(★2·T-범위)."
```

```yaml
- id: RPM-CALC1-0146
  page: 26
  vendor_label: "유형 01 함수의 연속과 불연속"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다섯 선택지(3/x+1 · √(x-1) · 1/x² · x≥0 에서 x²+2, x<0 에서 -x+2 · |5x|/x 에 x=0 지정값 5) 중 x=0 에서 연속인 함수 고르기.
  category: "정의 여부 확인 → 남은 후보의 좌·우극한·함숫값 대조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속 판정(선택지 선별)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ①②③ 은 x=0 에서 정의되지 않아 바로 제외. ④ 는 x=0 좌·우극한·함숫값이 모두 2. ⑤ 는 |5x|/x 가 좌 -5·우 5 로 불일치. 정의역 확인 한 번으로 셋이 걸러져 실질 한 단계. 중하·M_total 4·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "x=0 에서 정의되는지 확인(①②③ 제외) → 남은 ④⑤ 의 좌·우극한 = 함숫값 확인 → ④"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지정점 0 을 다른 정수로, ④ 의 두 식 상수항·⑤ 의 지정값을 바꿀 수 있음. 제약: 정의되지 않는 선택지 셋과 「정의되지만 불연속」 하나를 유지해야 변별 구조가 살아남."
    creative: "(1) 「x=0 에서 불연속인 함수의 개수」 로 묻기(★1) (2) ④ 의 상수항을 미지수로 두고 연속이 되게 하는 값 묻기(★1~2·유형 04) (3) 선택지에 [x]·x[x] 를 넣어 가우스 연속 판정 추가(★2)."
```

```yaml
- id: RPM-CALC1-0147
  page: 26
  vendor_label: "유형 01 함수의 연속과 불연속"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    세 구간(x≥1 에서 x+1 · -2≤x<1 에서 2x²-2 · x<-2 에서 -3x)으로 정의된 함수의 연속성을 조사하기(경계 x=1, x=-2).
  category: "구간 내부 연속 → 경계점 좌·우극한·함숫값 대조 → 연속 범위 진술"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수의 연속성 조사(경계점 대조)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 구간 안은 다항함수라 연속. x=1 에서 좌극한 0, f(1)=2 로 불일치 → 불연속. x=-2 에서 좌극한 6, f(-2)=6 → 연속. 경계 두 곳을 대조해 「x≠1 인 모든 실수에서 연속」 으로 적는 서술 절차. 통찰 없음·중 → ★2.
  tier: star_2
  mechanism_primary: "구간 내부는 다항함수로 연속 → 경계 x=1, x=-2 에서 좌·우극한·함숫값 대조 → x=1 만 불일치 → x≠1 에서 연속"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x\ne 1$인 모든 실수에서 연속'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간의 식·경계값 자유. 제약: 한 경계는 일치·다른 경계는 불일치가 되도록 계수를 맞춰 답이 「x≠c」 꼴로 유지, 경계의 등호 위치(≥/<)에 따라 함숫값이 어느 식에서 오는지 명시."
    creative: "(1) 경계 두 곳 모두 연속이 되도록 미정계수 하나를 넣기(유형 04 골조·★2) (2) 세 구간 중 하나를 분수식으로 바꿔 정의역 결손을 추가(★2·T-범위) (3) 「연속인 구간을 구간 기호로 답하기」 로 진술 형식만 바꾸기(★2)."
```

### 유형 02 불연속인 $x$의 값

```yaml
- id: RPM-CALC1-0148
  page: 26
  vendor_label: "유형 02 불연속인 $x$의 값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    번분수 함수 f(x)=1/(x+1/(x-2)) 가 불연속인 x 의 개수.
  category: "안쪽·바깥 분모가 0 이 되는 x → 정의되지 않는 점 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수(번분수)가 불연속인 x 의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽 분모 x-2=0 에서 x=2, 바깥 분모 x+1/(x-2)=(x-1)²/(x-2)=0 에서 x=1. 두 점에서 정의되지 않으므로 불연속 2개. 번분수를 (x-2)/(x-1)² 로 정리하면 x=2 를 놓치기 쉽다(T-범위). 통찰 없음·유형 대표 → ★2.
  tier: star_2
  mechanism_primary: "안쪽 분모 0 → x=2 · 바깥 분모 x+1/(x-2)=0 → (x-1)²=0 → x=1 → 정의되지 않는 점 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지(0147 해설 크롭에 이어진 0148 해설의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 상수 2 를 다른 정수 a 로, 결합 부호를 - 로 바꿀 수 있음. 제약: 바깥 분모 x(x-a)+1=0 의 실근 개수(판별식 a²-4 의 부호)에 따라 답이 1(|a|<2)·2(a=±2)·3(|a|>2) 으로 달라지므로 정답을 먼저 확정."
    creative: "(1) 「불연속인 모든 x 의 값의 합」 으로 묻기(★2) (2) 번분수를 정리한 식과 원래 식이 같은 함수인지 보기로 묻기(★2·T-범위 강조) (3) 안쪽에 |x| 나 √x 를 넣어 정의역 조건이 겹치게(★3·I-MI d1)."
```

```yaml
- id: RPM-CALC1-0149
  page: 26
  vendor_label: "유형 02 불연속인 $x$의 값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부호함수형 f(x)=(x-1)/|x-1| (x≠1), 0 (x=1) 과 g(x)=3x² 에 대해 합성함수 f(g(x)) 가 불연속인 모든 x 의 값의 곱.
  category: "바깥 함수의 불연속점 → 안쪽 함수가 그 값을 지나는 x → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(g(x)) 의 불연속을 「g(x) 가 f 의 불연속점 1 을 가로지르는 x」 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수 f(g(x)) 의 불연속점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 는 x=1 에서만 불연속(좌 -1·우 1·f(1)=0). f(g(x)) 는 g(x)=1 이 되는 x=±1/√3 에서 g 가 1 을 가로지르므로 부호가 바뀌어 불연속, 곱은 -1/3. 합성함수의 불연속을 안쪽 함수 조건으로 옮기는 EQV d1 한 개. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f 의 불연속점 x=1 → g(x)=1 을 푸는 x=±1/√3 → 그 점에서 g 가 1 을 가로지름 확인 → 곱 -1/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지(0147 해설 크롭에 이어진 0149 해설의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 불연속점(1)과 g 의 계수(3)를 바꿀 수 있음. 제약: g(x)=c 가 실근을 갖고(c/3>0) 그 근에서 g 가 c 를 실제로 가로질러야 함, 곱이 유리수가 되게 계수 선택."
    creative: "(1) g 를 x²+1 처럼 최솟값이 정확히 불연속점에 닿게 해 「접하는 경우」 의 판정을 추가(★3·I-VF d1) (2) g(f(x)) 로 순서를 바꿔 f 의 치역이 g 의 연속 구간에 들어가 연속임을 보이기(★2) (3) g 의 차수를 올려 「불연속인 x 의 개수」 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0150
  page: 26
  vendor_label: "유형 02 불연속인 $x$의 값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 a 에 대한 이차방정식 x²-2(a+1)x-4a-7=0 의 서로 다른 실근의 개수를 f(a) 라 할 때, f(a) 가 불연속인 모든 a 의 값의 곱.
  category: "실근 개수 함수 → 판별식 부호의 계단함수 → D=0 인 a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「근의 개수 f(a)」 를 판별식 D(a) 의 부호에 따른 계단함수(2·1·0)로 전환해 불연속점 = D=0 인 a 로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "매개변수에 따른 실근 개수 함수 f(a) 의 불연속점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4=(a+1)²+4a+7=(a+2)(a+4). f(a) 는 D>0 이면 2, D=0 이면 1, D<0 이면 0 인 계단함수라 D=0 인 a=-2, -4 에서만 값이 뛰어 불연속. 곱 8. 「근의 개수」 를 판별식 부호 함수로 읽는 RT d1. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(a)=근의 개수 → 판별식 D(a)=(a+2)(a+4) 의 부호로 f(a)∈{0,1,2} 결정 → 불연속점은 D=0 인 a → 곱 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(0147 해설 크롭에 이어진 0150 해설의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식 계수(a 의 일차식들)를 바꿀 수 있음. 제약: 판별식이 a 의 이차식으로 서로 다른 두 실근을 갖고 정수 인수분해가 되게, 「합」 으로 바꾸면 부호 확인."
    creative: "(1) f(a) 의 그래프를 그리게 하고 불연속점 개수·값 묻기(★2) (2) 방정식을 x² 치환 사차방정식으로 바꿔 실근 개수 분기가 0·2·4 로 셋 이상(★3·I-MI d1) (3) 「f(a) 가 연속인 a 의 범위」 로 뒤집기(★2)."
```

```yaml
- id: RPM-CALC1-0151
  page: 26
  vendor_label: "유형 02 불연속인 $x$의 값"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 (0,5) 에서 가우스 함수 f(x)=[x²-4x+1] 이 불연속인 x 의 개수([x] 는 x 보다 크지 않은 최대 정수).
  category: "가우스 안쪽 이차함수 그래프 → 정수를 가로지르는 x 세기 → 꼭짓점 접점·열린 끝 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "[g(x)] 의 불연속을 g(x)=(x-2)²-3 그래프가 정수선 y=n 을 가로지르는 지점 세기로 전환(감소 구간 3 + 증가 구간 8)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g 가 정수값을 갖는 후보 중 꼭짓점 g(2)=-3 은 접하기만 해 [g] 가 변하지 않으므로 기각, 양 끝 g=1·6 은 열린구간이라 제외"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "가우스 함수 [g(x)] 의 불연속점 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=(x-2)²-3 은 (0,2] 에서 1→-3 감소, [2,5) 에서 -3→6 증가. [g] 는 g 가 정수를 가로지르는 곳에서 뛰므로 감소 구간에서 g=0,-1,-2 세 점, 증가 구간에서 g=-2,…,5 여덟 점 → 11. 꼭짓점 g=-3 은 접하기만 해 제외, 양 끝 g=1·6 은 열린구간이라 제외(T-경계·T-범위). 그래프로 옮겨 정수선 교차를 세는 RT d2 와 접점 기각 VF d1. 상중 출발 ★3, 통찰 2개로 +1 후보이나 가우스 불연속 세기는 널리 알려진 표준 골조라 ★3 유지.
    [분류 이슈] 통찰 2개(RT d2·VF d1) 기준 ★4 후보 — ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "g(x)=(x-2)²-3 그래프 → 구간별 치역 (-3,1)·[-3,6) → 정수를 가로지르는 x 세기(3+8) → 꼭짓점 접점·열린 끝 제외 → 11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·구간을 바꿀 수 있음. 제약: 꼭짓점이 구간 안에 있고 꼭짓점 y 좌표가 정수(접점 기각 포인트 유지)인지 비정수(기각 없음·★ 하락)인지 명시, 구간 끝 g 값이 정수면 열린·닫힌 구분이 답을 바꿈."
    creative: "(1) 꼭짓점 y 좌표를 비정수로 → VF 가 사라져 ★2~3 (2) 안쪽을 |x-2| 같은 V자 함수로 → 정수 교차 세기만 남아 ★2 (3) 「[g(x)] 가 연속인 x 의 범위 중 가장 긴 구간의 길이」 로 바꿔 구간 경계 계산 추가(★3~4)."
```

### 유형 03 함수의 그래프와 연속

```yaml
- id: RPM-CALC1-0152
  page: 27
  vendor_label: "유형 03 함수의 그래프와 연속"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0<x<4 에서 정의된 꺾은선 그래프(x=1·2 에서 뜀, x=3 에서 고립점)에 대해 ㄱ lim_{x→3} f(x)=1 · ㄴ x=1 에서 극한 없음 · ㄷ 불연속점 3개 의 참·거짓 고르기.
  category: "그래프에서 좌·우극한 읽기 → 채운 점(함숫값) 대조 → 극한 존재·불연속 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한 존재·불연속점 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→3 에서 좌·우 모두 0 으로 수렴하고 f(3)=1 은 고립점이라 ㄱ 거짓. x=1 은 좌 1·우 2 로 극한 없음(ㄴ 참). 불연속점은 x=1(극한 없음)·x=2(좌 2·우 1)·x=3(극한 0≠f(3)) 3개(ㄷ 참). 그래프에서 좌·우극한과 점 채움을 읽는 절차. 유형 대표·통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "경계 x=1,2,3 에서 좌·우극한 읽기 → 함숫값(채운 점) 대조 → 극한 존재·불연속 판정 → ㄴ,ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0152.png"
  latex: latex-bank/rpm-calc1/items/0152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨(꺾이는 x, 높이 1·2, 채운/빈 점 위치)을 바꾸면 새 그림 필요. 제약: 「극한은 있으나 함숫값과 다른 고립점」 과 「좌·우 불일치 점」 을 각각 하나 이상 유지해야 보기 셋이 모두 살아 있음."
    creative: "(1) 보기에 좌·우극한의 합 lim_{x→2-} f(x)+lim_{x→3+} f(x) 계산 추가(★2) (2) f(f(x)) 의 x=3 극한을 묻기 → 합성함수 극한(★3·I-RT d1) (3) 「극한값은 존재하지만 불연속인 점」 만 세게 좁히기(★2)."
```

```yaml
- id: RPM-CALC1-0153
  page: 27
  vendor_label: "유형 03 함수의 그래프와 연속"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<x<4 에서 정의된 그래프(x=1 에서 뜀, x=2 는 극한 3 이 있으나 함숫값 5 인 고립점, x=3 은 꺾였지만 이어진 점)에서 극한값이 존재하지 않는 x 의 개수 a, 불연속인 x 의 개수 b 를 세어 a+b. 5지선다.
  category: "그래프에서 경계점 좌·우극한 읽기 → 극한 없음/함숫값 불일치 분류 → 개수 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한 존재·불연속점 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 은 좌 4·우 1 로 극한 없음(a=1). x=2 는 좌·우 모두 3 으로 극한이 있지만 f(2)=5 라 불연속, x=3 은 꼭짓점이지만 이어져 있어 연속 → 불연속점은 x=1, 2 로 b=2. a+b=3. 「극한 없음 ⊂ 불연속」 이라 x=1 을 양쪽에 세는 것과 x=2 를 극한 없음으로 오독하는 것이 함정(T-경계). 중하 출발 ★1~2 · 세 점을 두 범주로 분류하므로 ★2.
  tier: star_2
  mechanism_primary: "후보점 x=1,2,3 의 좌·우극한 읽기 → 극한 없음(x=1) · 극한≠함숫값(x=2) · 연속(x=3) 분류 → a=1, b=2 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0153.png"
  latex: latex-bank/rpm-calc1/items/0153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨(뜀 위치·높이 1~5·채운 점 위치)을 바꾸면 새 그림 필요. 제약: 「극한 없음」 점과 「극한 있으나 함숫값 다름」 점을 각각 하나 이상 두고, 꺾였지만 연속인 점을 하나 남겨 a<b 구조를 유지."
    creative: "(1) a-b 나 「극한은 있지만 불연속인 x 의 개수」 로 묻기(★2) (2) f(x)+f(4-x) 처럼 대칭 조작 뒤 불연속점 세기(★3·I-SYM d1) (3) 그래프 대신 식으로 주고 같은 것을 묻기 → 유형 01 절차(★2)."
```

```yaml
- id: RPM-CALC1-0154
  page: 27
  vendor_label: "유형 03 함수의 그래프와 연속"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (-2,2) 에서 정의된 그래프(x=-1 에서 뜀, x=0 은 극한 -1 이나 함숫값 -2, x=1 은 극한 1 이나 함숫값 0)에 대해 ㄱ x=0 에서 연속 · ㄴ x=-1 에서 극한 존재 · ㄷ 불연속점 3개 의 참·거짓을 있는 대로 고르기.
  category: "그래프에서 좌·우극한 읽기 → 채운 점(함숫값) 대조 → 보기 세 개 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한 존재·불연속점 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 은 좌·우극한 -1 로 극한은 있지만 f(0)=-2 라 불연속(ㄱ 거짓). x=-1 은 좌 1·우 -1 로 극한 없음(ㄴ 거짓). 불연속점은 x=-1(극한 없음)·x=0·x=1(극한 1≠f(1)=0) 3개(ㄷ 참). 0152 와 같은 골조로 세 점의 채운/빈 점을 읽는 절차. 중 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "경계 x=-1,0,1 에서 좌·우극한 읽기 → 채운 점과 대조 → 극한 존재·연속 판정 → ㄷ 만 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0154.png"
  latex: latex-bank/rpm-calc1/items/0154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "채운 점 위치 (0,-2)·(1,0) 와 뜀 높이를 바꾸면 새 그림 필요. 제약: 극한이 있으나 함숫값이 다른 점 둘과 좌·우 불일치 점 하나를 유지해야 ㄱ·ㄴ 거짓·ㄷ 참 구조가 남음."
    creative: "(1) 보기에 lim_{x→-1-} f(x) + lim_{x→1} f(x) 값 계산 추가(★2) (2) 「f 가 연속인 x 에서 (f(x))² 도 연속」 같은 성질 판단을 섞기(★2~3) (3) f 대신 |f(x)| 나 f(x)+1 의 불연속점 개수 묻기 → 합·절댓값 연속성 판단(★3·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0155
  page: 27
  vendor_label: "유형 03 함수의 그래프와 연속"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f 는 x<0 에서 1, x=0 에서 0, x>0 에서 -1 인 계단 그래프. 보기 ㄱ~ㄷ 의 그래프 g(ㄱ 원점을 지나는 V자 |x| · ㄴ [-1,1] 에서 -1 로 평평한 골 · ㄷ 원점에서 1 인 W자) 중 f(x)g(x) 가 [-2,2] 에서 연속이 되게 하는 것을 고르기. 5지선다.
  category: "f 의 유일한 불연속점 x=0 → 곱이 연속일 조건 g(0)=0 → 보기 대조"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 는 x=0 에서만 좌 1·우 -1 로 뛰므로 fg 가 연속 ⟺ 좌·우극한 g(0)·1, g(0)·(-1) 과 f(0)g(0)=0 이 일치 ⟺ g(0)=0 — 불연속점을 g 의 영점으로 상쇄하는 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "불연속 함수와의 곱 f(x)g(x) 가 연속일 조건(그래프)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 x=0 이외에서 상수라 g 가 연속이면 곱도 연속. x=0 에서 곱의 좌극한 g(0), 우극한 -g(0), 함숫값 0 이 모두 같으려면 g(0)=0. ㄱ 은 g(0)=0 으로 적합, ㄴ 은 g(0)=-1, ㄷ 은 g(0)=1 로 부적합 → ㄱ. 보기마다 곱을 그려 보는 대신 조건 g(0)=0 을 먼저 뽑는 EQV d2 가 핵심. 상중 출발 ★3 · 통찰 1개 d2 · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "f 의 불연속점 x=0(좌 1·우 -1·값 0) → fg 연속 ⟺ g(0)=0 → 보기에서 g(0) 읽기 → ㄱ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0155-2.png"
  latex: latex-bank/rpm-calc1/items/0155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 좌·우 값(1·-1)과 보기 g 의 원점 값을 바꾸면 새 그림 필요(보기 그림 fig-0155.png · fig-0155-3.png 포함). 제약: f 의 좌·우극한이 서로 달라야 조건이 g(0)=0 으로 유지됨(같게 두면 f 가 제거 가능 불연속이 되어 조건이 달라짐). f(0) 값은 바꿔도 조건 불변."
    creative: "(1) f 의 불연속점을 두 개(x=±1)로 늘려 g 의 영점 두 개를 요구(★3) (2) 곱 대신 f(x)+g(x) 가 연속이 되게 하는 g → g 가 반대로 뛰어야 함(★3·I-EQV d2) (3) g 를 식(g(x)=x²-k)으로 주고 k 를 묻기(★3·I-BW d1) (4) f(g(x)) 의 연속을 묻기 → 합성 조건으로 골조 변경(★4)."
```

### 유형 04 함수가 연속일 조건

```yaml
- id: RPM-CALC1-0156
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x≠1 에서 (x²+ax-3)/(x-1), x=1 에서 b 인 함수가 x=1 에서 연속일 때 상수 a, b 의 합.
  category: "연속 조건 → 분모→0 이면 분자→0 으로 a → 약분한 극한값 = b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식 조각 함수가 x=a 에서 연속일 조건(0/0 극한 · 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→1 에서 극한이 존재하려면 분자도 0: 1+a-3=0 → a=2. 그러면 (x+3)(x-1)/(x-1) → 극한 4 = b. a+b=6. 01 단원의 0/0 미정계수 절차를 「연속 = 극한값 = 함숫값」 으로 옮겨 적은 표준 골조로 통찰 없음. 유형 대표 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=1 에서 연속 → lim 존재 → 분자(1)=0 → a=2 → 약분 극한 4 = b → a+b=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연속점 1, 분자 상수항 -3, 묻는 식(a+b · ab)을 바꿀 수 있음. 제약: 분자가 (x-1) 로 나누어떨어지게 a 가 정수 하나로 결정되고 몫이 일차식이어야 함."
    creative: "(1) 분자를 삼차식으로 두고 두 상수를 연속 조건 하나와 다른 조건(f(0) 값)으로 결정(★2) (2) 분모를 x²-1 로 바꿔 x=-1 에서의 정의역 결손까지 묻기(★2~3·T-범위) (3) 「모든 실수에서 연속」 으로 넓혀 x=1 뿐 아니라 다른 점의 정의도 점검(★2)."
```

```yaml
- id: RPM-CALC1-0157
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x≠2 에서 (x³-8)/(x-2), x=2 에서 a 인 함수가 x=2 에서 연속일 때 상수 a.
  category: "연속 조건 → 세제곱 차 인수분해 → 약분 극한값 = a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식 조각 함수가 x=a 에서 연속일 조건(0/0 극한 · 미정계수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³-8=(x-2)(x²+2x+4) 로 약분하면 x→2 극한 12 = a. 미정계수 없이 극한 한 번. 중하 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=2 에서 연속 → a = lim (x³-8)/(x-2) → 인수분해 약분 → 12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세제곱수 8 과 연속점 2 를 (27, 3)·(-1, -1) 등으로. 제약: 분자가 분모로 나누어떨어지는 완전세제곱 차 꼴 유지."
    creative: "(1) 분자를 x³+ax 로 두고 a 와 함숫값을 함께 묻기(★2·0156 골조) (2) 분모를 √x-√2 로 바꿔 유리화 추가(★2) (3) 분모 x-2 대신 x²-4 로 두어 x=-2 정의역 결손 함정 추가(★2·T-범위)."
```

```yaml
- id: RPM-CALC1-0158
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    |x|≥3 에서 ax+2, |x|<3 에서 x²+x-b 인 함수가 모든 실수에서 연속이 되게 하는 상수 a, b 의 합. 5지선다.
  category: "|x|≥3 을 경계 x=±3 둘로 풀기 → 각 경계 연속 조건 두 식 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수가 모든 실수에서 연속일 조건(경계 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    경계 x=3 에서 3a+2=12-b, x=-3 에서 -3a+2=6-b. 두 식을 더하면 b=7, 이어 a=1 → a+b=8. 절댓값 조건을 두 경계로 푸는 것은 표준 분기(통찰 아님)이고 x=-3 을 빠뜨리는 것이 함정(T-범위). 중 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "|x|≥3 → 경계 x=3, x=-3 → 각 경계에서 좌·우 식 일치 두 식 → 연립 a=1, b=7 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 3, 일차식 상수 2, 이차식 x²+x 부분을 바꿀 수 있음. 제약: 두 경계 식이 독립인 일차 연립이 되도록 이차식의 일차항 계수를 0 이 아니게(0 이면 a=0 이 강제됨), a·b 가 정수로 떨어지게 선택지 정리."
    creative: "(1) 바깥 식을 ax²+2 로 바꿔 두 경계 식이 같아지게 하고 「a 가 하나로 정해지지 않음」 을 눈치채게(★3·I-MI d1) (2) |x-1|≥2 처럼 중심을 옮겨 경계 -1·3 으로(★2) (3) 세 구간(x<-3, -3≤x<3, x≥3)에 서로 다른 세 식과 미정계수 셋(★2~3)."
```

```yaml
- id: RPM-CALC1-0159
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=1 을 경계로 조각 정의된 두 함수 f(x²+1 / 2x-1), g(x+k / x²+2) 에 대해 f+g 가 모든 실수에서 연속일 때 g(5) 의 값(k 는 상수).
  category: "f+g 를 구간별로 합치기 → 경계 x=1 에서 좌·우 일치 → k → g(5)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 조각 함수의 합 f+g 가 연속일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥1 에서 f+g=x²+x+1+k, x<1 에서 x²+2x+1. x=1 에서 우값 3+k, 좌극한 4 → k=1, g(5)=6. f, g 각각은 x=1 에서 불연속이어도 합만 맞추면 되는 점을 이해하면 경계 한 곳 대조로 끝난다. 중 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f+g 를 x≥1 / x<1 로 합치기 → x=1 에서 3+k = 4 → k=1 → g(5)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 조각의 식과 경계 1, 묻는 값 g(5) 를 바꿀 수 있음. 제약: f, g 가 각각 경계에서 불연속이 되도록 두어 「합만 연속」 구조를 유지하고 k 가 정수로 나오게."
    creative: "(1) f+g 대신 f·g 가 연속일 조건 → 좌·우 곱 일치(★2~3) (2) f 와 g 의 경계를 서로 다르게(x=1, x=2) 두어 점검할 경계 둘(★3) (3) 「f(x)g(x) 가 연속이 되게 하는 k 가 존재하지 않음」 을 보이는 반례형(★3·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0160
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x≠2 에서 (a√(x+2)-b)/(x-2), x=2 에서 1 인 함수가 x=2 에서 연속일 때 상수 a, b 의 곱.
  category: "연속 조건 → 분자→0 으로 b=2a → 유리화 극한 a/4 = 1 → ab"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리식 조각 함수가 x=a 에서 연속일 조건(0/0 극한 · 유리화 · 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한 존재 조건에서 2a-b=0. 분자를 a(√(x+2)-2) 로 묶고 유리화하면 극한 a/(√(x+2)+2) → a/4 = 1 로 a=4, b=8, ab=32. 01 단원 무리식 미정계수 절차 그대로이며 단계가 셋이라 M_total 8 이지만 통찰은 없다. 중 · 서술형 → ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 연속 → 분자(2)=0 → b=2a → 유리화 극한 a/4 = f(2)=1 → a=4, b=8 → 32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 x+2 와 연속점 2(√4=2 가 정수), 함숫값 1 을 바꿀 수 있음. 제약: 연속점에서 근호 값이 정수가 되게(x+7 에 x=2, x+5 에 x=4 등) 하고 a, b 가 정수로 떨어지게."
    creative: "(1) 분모를 √(x+2)-2 로, 분자를 다항식으로 뒤집기(★2) (2) 함숫값 1 대신 f(2)=f(7) 처럼 다른 점의 값으로 조건 주기(★2~3) (3) a, b 중 하나를 없애고 「연속이 되게 하는 a 가 존재하려면」 으로 역방향 질문(★3·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0161
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가우스 함수로 정의된 f(x)=[x]²+(ax+2)[x] 가 x=-1 에서 연속일 때 상수 a([x] 는 x 보다 크지 않은 최대 정수).
  category: "x=-1 근방에서 [x] 를 좌 -2·우 -1 상수로 고정 → 좌·우극한을 a 의 식으로 → 일치"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "가우스 함수의 연속 조건을 「x=-1 근방에서 [x] 가 좌 -2·우 -1 로 고정된 두 다항식의 x=-1 값 일치」 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "가우스 함수 [x] 를 포함한 함수가 한 점에서 연속일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    -2≤x<-1 에서 [x]=-2 → f=-2ax, x→-1- 극한 2a. -1≤x<0 에서 [x]=-1 → f=-ax-1, 우극한·함숫값 a-1. 2a=a-1 → a=-1. [x] 의 좌·우 값을 잘못 잡거나(T-표기) 함숫값이 우측 식에서 온다는 경계 처리(T-경계)가 함정. 상중 출발 ★3 · 통찰 1개 d1 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "x→-1- 에서 [x]=-2 → 극한 2a · x→-1+ 에서 [x]=-1 → a-1 = f(-1) → 2a=a-1 → a=-1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연속점 -1 을 다른 정수로, 계수 (ax+2) 를 (ax+b) 로 바꿀 수 있음. 제약: 연속점이 정수여야 [x] 가 뛰고, 좌·우 식이 a 에 대해 서로 다른 일차식이 되어 해가 하나로 정해져야 함."
    creative: "(1) [x] 대신 [2x] 를 넣어 뛰는 점 간격을 1/2 로(★3) (2) 「x=-1 과 x=0 에서 모두 연속」 두 조건으로 a, b 결정(★3) (3) [x](x-k) 꼴로 두고 「[x] 가 뛰는 모든 정수에서 연속이 되게 하는 k 가 없음」 을 보이기(★4·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0162
  page: 28
  vendor_label: "유형 04 함수가 연속일 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    [0,5] 에서 3≤x≤5 이면 3x-6, 0≤x<3 이면 x²+ax+b 로 정의되고 f(x)=f(x+5) 인 주기함수가 실수 전체에서 연속일 때 f(16) 의 값(a, b 는 상수).
  category: "주기 5 → 구간 끝 x=0 과 x=5 가 같은 점(연속 조건 추가) → x=3 연속 조건 → a, b → f(16)=f(1)"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=f(x+5) 를 「구간 [0,5] 의 양 끝이 이어진다」 로 읽어 x=5 에서의 연속 조건 f(5)=f(0) 즉 b=9 를 끌어냄 — 문제에 보이지 않는 경계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주기 조건이 있는 구간별 함수가 연속일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=3 에서 9+3a+b=3. 주기성 때문에 x=5 의 우극한은 x=0 의 값 b 이고 f(5)=9 이므로 b=9, 따라서 a=-5. f(16)=f(1)=1-5+9=5. 보이는 경계(x=3) 하나로는 a, b 가 정해지지 않고 주기로 이어지는 숨은 경계 x=0≡5 를 찾아야 하는 EQV d2. 상중 출발 ★3 · 통찰 1개 d2 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "x=3 연속: 3a+b=-6 → 주기 5 로 x=0≡x=5: b=f(5)=9 → a=-5 → f(16)=f(1)=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 5, 경계 3, 일차식 3x-6, 묻는 점 16 을 바꿀 수 있음. 제약: 일차식의 양 끝값이 이차식의 두 조건(x=0 값·x=3 값)을 정수 a, b 로 만들고, 묻는 점을 주기로 줄인 값이 이차식 구간에 들어가게."
    creative: "(1) 주기 조건을 f(x+5)=f(x)+c 처럼 평행이동 주기로 바꿔 경계 조건이 달라지게(★4·I-EQV d2) (2) 이차식 대신 |x-k| 꼴로 두어 미정계수 하나(★3) (3) 「연속이 되게 하는 a, b 가 존재하는 주기 p 의 범위」 로 역방향(★4·I-BW d2)."
```

### 유형 05 $(x-a)f(x)=g(x)$ 꼴의 함수의 연속

```yaml
- id: RPM-CALC1-0163
  page: 29
  vendor_label: "유형 05 $(x-a)f(x)=g(x)$ 꼴의 함수의 연속"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수에서 연속인 f 가 (x-1)f(x)=x²-4x+a 를 만족시킬 때 f(1) 의 값(a 는 상수). 5지선다.
  category: "x=1 대입으로 a → f(1) 은 나눗셈이 아니라 연속성으로 lim g(x)/(x-1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴에서 연속성으로 f(a) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 을 대입하면 0=1-4+a 로 a=3. x≠1 에서 f(x)=(x-1)(x-3)/(x-1)=x-3 이고 연속이므로 f(1)=lim(x-3)=-2. 「f(1) 은 나눌 수 없으니 극한으로」 가 이 유형의 정의 절차라 통찰로 세지 않았다. 유형 대표 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=1 대입 → a=3 → x≠1 에서 f(x)=x-3 → 연속이므로 f(1)=lim(x-3)=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (x-1) 과 이차식 계수를 바꿀 수 있음. 제약: 상수 a 가 대입으로 정수 하나로 정해지고 이차식이 (x-1) 로 나누어떨어져 몫이 일차식이 되게, 선택지가 f(1) 의 작은 정수."
    creative: "(1) (x-1)(x-2)f(x)=g(x) 로 인수 둘을 두어 f(1), f(2) 와 상수 둘(★3) (2) f 를 「x≥0 에서 연속」 으로 제한하고 (√x-1)f(x)=x-1 꼴(0165 골조·★2) (3) 「f(1)+f(3)」 처럼 극한값과 대입값을 섞어 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0164
  page: 29
  vendor_label: "유형 05 $(x-a)f(x)=g(x)$ 꼴의 함수의 연속"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수에서 연속인 f 가 (x-2)f(x)=x²+2x-8 을 만족시킬 때 f(2) 의 값.
  category: "이차식 인수분해 → x≠2 에서 f(x)=x+4 → 연속성으로 f(2)=6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴에서 연속성으로 f(a) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²+2x-8=(x-2)(x+4) 이므로 x≠2 에서 f(x)=x+4, 연속이라 f(2)=lim(x+4)=6. 미정계수 없이 인수분해 한 번. 중하 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "우변 인수분해 (x-2)(x+4) → x≠2 에서 f(x)=x+4 → f(2)=lim(x+4)=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (x-2) 와 이차식을 바꿀 수 있음. 제약: 우변이 (x-2) 를 인수로 가져야 함(아니면 연속인 f 가 존재하지 않음 — 이 자체를 묻는 변형은 ★3)."
    creative: "(1) 우변을 삼차식으로 두고 f(2) 묻기(★1~2) (2) 우변이 (x-2) 로 나누어떨어지지 않게 주고 「연속인 f 가 존재하지 않는 이유」 서술(★3·I-BW d1) (3) (x-2)f(x)=g(x), g(2)=0 을 주고 f(2) 가 g 의 x=2 에서의 미분계수와 같음을 잇기(★3·I-XU d1 · 03 단원 이후)."
```

```yaml
- id: RPM-CALC1-0165
  page: 29
  vendor_label: "유형 05 $(x-a)f(x)=g(x)$ 꼴의 함수의 연속"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x≥0 에서 연속인 f 가 (√x-2)f(x)=x√x-8 을 만족시킬 때 f(4) 의 값. 5지선다.
  category: "√x=t 로 보고 t³-8 을 (t-2) 로 약분 → 연속성으로 f(4)=lim"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴에서 연속성으로 f(a) 구하기(무리식 인수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x√x-8=(√x)³-2³=(√x-2)(x+2√x+4) 이므로 x≠4 에서 f(x)=x+2√x+4, 연속이라 f(4)=4+4+4=12. 인수 √x-2 가 0 이 되는 x=4 를 찾고 세제곱 차를 √x 로 인수분해하는 계산이 조금 더 있을 뿐 골조는 0164 와 같다(√x=t 는 같은 대수 영역 치환이라 통찰 아님). 중 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "인수 √x-2=0 인 x=4 → x√x-8=(√x)³-8 인수분해 → x≠4 에서 f=x+2√x+4 → f(4)=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 √x-2 를 √x-3(x=9)·√x-1 로, 우변을 대응하는 세제곱 차·제곱 차로 바꿀 수 있음. 제약: 우변이 인수로 나누어떨어지는 (√x)ⁿ-cⁿ 꼴, 연속점에서 √x 가 정수."
    creative: "(1) 우변을 x-4 로 바꿔 유리화 대신 합차 약분 한 줄(★1) (2) (√(x+1)-2)f(x)=x-3 처럼 근호 안을 평행이동(★2) (3) 「f(4) 의 값과 f 가 x≥0 에서 연속이기 위한 우변의 조건」 을 함께 서술(★3)."
```

```yaml
- id: RPM-CALC1-0166
  page: 29
  vendor_label: "유형 05 $(x-a)f(x)=g(x)$ 꼴의 함수의 연속"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x≥-3 에서 연속인 f 가 (x-1)f(x)=a√(x+3)+b, f(1)=2 를 만족시킬 때 상수 a, b 에 대하여 a-b 의 값.
  category: "x=1 대입으로 2a+b=0 → 유리화 극한 a/4 = f(1)=2 → a, b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴에서 연속성으로 f(a) 구하기(무리식 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 대입: 2a+b=0. x≠1 에서 f(x)=a(√(x+3)-2)/(x-1)=a/(√(x+3)+2) 이고 연속이라 f(1)=a/4=2 → a=8, b=-16, a-b=24. 0160 의 유리화 미정계수 절차를 (x-a)f(x)=g(x) 꼴로 쓴 것으로 통찰 없음. 중 · 서술형 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "x=1 대입 → b=-2a → f(x)=a(√(x+3)-2)/(x-1) 유리화 → f(1)=a/4=2 → a=8, b=-16 → 24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 x+3 과 인수 x-1(√4=2 정수), f(1)=2 를 바꿀 수 있음. 제약: 연속점에서 근호 값이 정수, a·b 가 정수로 떨어지고 정의역 x≥-3 이 근호 안 조건과 일치하게."
    creative: "(1) f(1) 대신 f(6) 같은 다른 점의 값을 주어 b 를 먼저 결정하게(★2) (2) 우변을 a√(x+3)+bx 로 바꿔 x=1 대입 조건과 극한 조건이 얽히게(★3) (3) 인수를 (x-1)² 으로 두어 「연속인 f 가 존재하려면 극한이 유한해야」 조건 추가(★4·I-BW d2)."
```

### 유형 06 연속함수의 성질

```yaml
- id: RPM-CALC1-0167
  page: 29
  vendor_label: "유형 06 연속함수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x-5, g(x)=x²+3x+5 에 대해 f-3g · g(f(x)) · f/g · g/f · fg 중 모든 실수에서 연속이 아닌 것 고르기.
  category: "다항함수 합·차·곱·합성은 연속 → 몫만 분모 0 여부(판별식·일차식 근) 점검"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·차·곱·몫·합성)로 연속 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②⑤ 는 다항함수라 연속. ③ f/g 는 g 의 판별식 9-20<0 으로 분모가 0 이 안 돼 연속. ④ g/f 는 x=5 에서 분모 0 → 정의되지 않아 불연속. 몫 두 개의 분모만 살피면 되는 절차. 유형 대표 ★2 출발 · M_total 5 → −1 후보이나 판별식 확인을 포함한 다섯 항목 판정이라 ★2 유지.
  tier: star_2
  mechanism_primary: "합·차·곱·합성은 다항함수로 연속 → 몫 f/g, g/f 의 분모 영점 확인(D<0 · x=5) → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 근 5 와 g 의 계수(판별식 음수 유지)를 바꿀 수 있음. 제약: g 는 실근이 없어야 f/g 가 연속으로 남고, f 는 실근을 가져야 g/f 가 답이 됨."
    creative: "(1) g 의 판별식을 0 으로 만들어 f/g 도 불연속이 되게 하고 「연속이 아닌 것 2개」(★2) (2) 선택지에 √f, √g 를 넣어 정의역 조건 추가(★2·T-범위) (3) f, g 를 그래프로 주고 같은 판정(★2~3·I-RT d1)."
```

```yaml
- id: RPM-CALC1-0168
  page: 29
  vendor_label: "유형 06 연속함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 전체에서 정의된 두 함수 f, g 가 x=a 에서 연속일 때 2f-g · fg · f/(f-g) · f² · g(f(x)) 중 x=a 에서 항상 연속이라고 할 수 없는 것 두 개 고르기.
  category: "연속함수의 성질 정리 목록 대조 → 몫의 분모 0 가능 · 합성의 연속점 불일치 두 반례"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질(합·차·곱·몫·합성)로 연속 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②④ 는 합·곱 성질로 항상 연속. ③ 은 f(a)=g(a) 이면 분모가 0 이 되어 보장 안 됨(T-범위). ⑤ 는 g 가 a 에서 연속이라는 조건이지 f(a) 에서 연속이라는 조건이 아니므로 g(f(x)) 는 보장 안 됨. 「항상」 의 반례 두 개를 정리 목록의 전제 조건에서 읽어내는 지식형 절차. 중 · 통찰 0 · M_total 7(일반 함수 Mₐ 3) → ★2.
  tier: star_2
  mechanism_primary: "성질 정리(합·차·곱·몫 분모≠0·합성은 바깥 함수가 f(a) 에서 연속) 대조 → 몫 ③(분모 0 가능)·합성 ⑤(연속점 불일치) 제외"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지 조합(f-g, f/g, f(g(x)), |f|, f³)을 바꿀 수 있음. 제약: 「항상 연속」 이 아닌 항목이 정확히 두 개가 되게 몫·합성 계열을 하나씩 두고 정답 개수를 발문에 명시."
    creative: "(1) ⑤ 가 불연속이 되는 f, g 의 구체 반례를 만들어 보이는 서술형(★3·I-BW d1) (2) 「x=a 에서 f 는 연속·g 는 불연속」 으로 조건을 비틀어 f+g, fg 의 연속 여부 판정(★3·I-MI d1) (3) ④ 처럼 바깥 함수가 모든 실수에서 연속인 합성(|f(x)|, √(f²+1))을 보기에 넣어 ⑤ 와 대비(★2~3)."
```

```yaml
- id: RPM-CALC1-0169
  page: 29
  vendor_label: "유형 06 연속함수의 성질"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f+g 와 fg 가 각각 x=0 에서 연속일 때 ㄱ f-g · ㄴ f²+g² · ㄷ f³+g³ 중 x=0 에서 항상 연속인 것을 고르기. 5지선다.
  category: "대칭식 ㄴ·ㄷ을 f+g, fg 로 표현해 연속 → ㄱ은 반례로 기각"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f²+g²=(f+g)²-2fg, f³+g³=(f+g)³-3fg(f+g) 로 바꿔 「연속함수 f+g, fg 의 합·곱」 이므로 연속 — f, g 각각의 연속 없이 조건만으로 결론"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ은 f, g 가 x=0 에서 반대로 뛰는 계단함수(f=1·0, g=0·1)로 f+g=1, fg=0 은 연속이지만 f-g 는 불연속인 반례를 역으로 구성해 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "f+g, fg 의 연속에서 대칭식의 연속 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f, g 개별 연속은 주어지지 않았으므로 ㄴ·ㄷ은 기본대칭식 f+g, fg 로 고쳐 써야 연속이 보인다(EQV d2). ㄱ은 f+g 만으로는 정해지지 않아 반대로 뛰는 계단함수 반례로 기각(BW d1) → ㄴ, ㄷ. 상중 출발 ★3 · 통찰 2개로 +1 후보이나 대칭식 변형은 널리 알려진 골조라 ★3 유지.
    [분류 이슈] 통찰 2개(EQV d2·BW d1) 기준 ★4 후보 — ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "조건 = f+g, fg 연속 → ㄴ·ㄷ을 (f+g), fg 의 다항식으로 변형 → 연속 · ㄱ은 반례(반대로 뛰는 계단함수) → ㄴ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연속점 0, 보기 항목(f²g+fg², f⁴+g⁴, 1/f+1/g)을 바꿀 수 있음. 제약: 보기가 f+g, fg 의 다항식으로 표현되는 대칭식이어야 참이 되고, 비대칭 항목(f-g, f², fg²)을 하나 이상 넣어 반례 판단을 유지. 1/f+1/g 는 fg(0)≠0 조건이 추가로 필요."
    creative: "(1) 조건을 f-g, fg 연속으로 바꿔 f²+g²=(f-g)²+2fg 는 참·f³+g³ 은 반례로 뒤집기(★3~4·I-BW d2) (2) 조건을 f+g, f² 연속으로 주고 g² 의 연속 여부 묻기(★4) (3) ㄱ의 반례를 직접 구성하는 서술형(★3·I-BW d2)."
```

### 유형 07 $\dfrac{f(x)}{g(x)}$ 꼴의 함수의 연속

```yaml
- id: RPM-CALC1-0170
  page: 30
  vendor_label: '유형 07 $\dfrac{f(x)}{g(x)}$ 꼴의 함수의 연속'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x+1, g(x)=x²-2ax+3 에 대해 f/g 가 모든 실수에서 연속이 되게 하는 정수 a 의 개수.
  category: "f/g 연속 ⟺ 분모 g≠0 (모든 x) ⟺ 판별식 <0 → 정수 a 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「f/g 가 모든 실수에서 연속」 을 「이차식 g 가 실근을 갖지 않음(D/4=a²-3<0)」 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)/g(x) 꼴이 모든 실수에서 연속일 조건(분모 판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자는 다항함수라 조건은 g(x)≠0 뿐. D/4=a²-3<0 → -√3<a<√3 → 정수 a=-1,0,1 로 3개. 연속 조건을 판별식 조건으로 옮기는 EQV d1 한 개, 이후는 정수 세기. 유형 대표 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f/g 연속 ⟺ g(x)≠0 ∀x ⟺ D/4=a²-3<0 → -√3<a<√3 → 정수 3개"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 상수항 3 과 일차항 -2ax 를 바꿀 수 있음. 제약: 판별식이 a 의 이차부등식으로 정수 해 개수가 셋 안팎이 되게(상수항 c 에 대해 a²<c), 분자 f 가 분모와 공통 인수를 갖지 않게."
    creative: "(1) 「연속이 아닌 x 가 정확히 하나」 이도록 하는 a → D=0 인 경우로 뒤집기(★2~3·I-EQV d1) (2) 분자 f 에도 근을 두고 분모와 공통 인수가 생기는 a 를 따로 따지게(★4·I-VF d2) (3) 분모를 |x|-a 처럼 절댓값으로 바꿔 판별식 대신 그래프로 판단(★3·I-RT d1)."
```

```yaml
- id: RPM-CALC1-0171
  page: 30
  vendor_label: '유형 07 $\dfrac{f(x)}{g(x)}$ 꼴의 함수의 연속'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x²+2x, g(x)=x³-8 에 대해 f/√g 가 연속인 구간 구하기.
  category: "분모 √g 가 정의되고 0 이 아니려면 g>0 → x³>8 → x>2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(x)/√g(x) 꼴이 연속인 구간(분모 양수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호 안 g≥0 에 분모 g≠0 을 합쳐 g>0, 즉 x³-8>0. (x-2)(x²+2x+4) 에서 뒤 인수는 항상 양수라 x>2 → (2, ∞). 등호 포함 여부(T-경계)만 조심하면 한 줄. 중하 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f/√g 연속 ⟺ g(x)>0 → x³-8>0 → (x-2)(x²+2x+4)>0 → x>2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(2,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 를 x³-27·x²-4·-x²+9 등으로 바꿀 수 있음. 제약: g>0 의 해집합이 구간 하나(또는 둘)로 깔끔히 나오게, 분자 f 는 다항식이면 무엇이든 무관."
    creative: "(1) √g/f 로 뒤집어 근호 조건 g≥0 과 분모 f≠0 을 따로 합치기(★2·T-경계) (2) g 를 이차식 x²-2x+k 로 바꿔 「연속인 구간이 실수 전체가 되는 k 의 범위」 묻기(★2~3·I-EQV d1) (3) 분모를 √g-1 로 두어 g=1 인 점도 제외(★2)."
```

```yaml
- id: RPM-CALC1-0172
  page: 30
  vendor_label: '유형 07 $\dfrac{f(x)}{g(x)}$ 꼴의 함수의 연속'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x²+4x+k², g(x)=x²-x-k 에 대해 1/f 와 √g 가 모두 모든 실수에서 연속이 되게 하는 실수 k 의 범위. 5지선다.
  category: "1/f 연속 ⟺ f≠0 ⟺ D<0 · √g 연속 ⟺ g≥0 ⟺ D≤0 → 두 범위 교집합"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 연속 조건을 각각 「f 가 실근 없음(D<0)」·「g 가 항상 0 이상(D≤0)」 으로 옮기되 등호 유무가 다름을 구분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1/f(x)·√g(x) 가 모든 실수에서 연속일 조건(판별식 부호·등호 구분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/f: D/4=4-k²<0 → k<-2 또는 k>2. √g: D=1+4k≤0 → k≤-1/4. 교집합 k<-2. 판별식 두 번에 등호 구분(T-경계)과 k²>4 의 두 갈래(T-부호)가 함정이며 EQV d1 한 개. 중 · M_total 8 이지만 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "1/f 연속 ⟺ 4-k²<0 → |k|>2 · √g 연속 ⟺ 1+4k≤0 → k≤-1/4 → 교집합 k<-2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항 k² 과 g 의 -k 를 바꿀 수 있음. 제약: 두 조건의 해가 하나는 양쪽 갈래(|k|>c)·하나는 한쪽(k≤d)이 되어 교집합이 한쪽 갈래만 남게, 선택지에 등호를 바꾼 오답을 배치."
    creative: "(1) √g 대신 1/√g 로 바꿔 g>0 (D<0) 으로 등호를 뒤집기(★2) (2) 조건을 「1/f 는 연속이고 √g 는 연속이 아니게」 로 비틀어 여집합 계산(★3·I-EQV d1) (3) f 를 |x²+4x|+k² 처럼 절댓값으로 바꿔 판별식 대신 최솟값 판단(★3·I-RT d1)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 6 · ★2 19 · ★3 5 · ★4 0 · ★5 0
- 통찰형(insight_type) 4(0151·0155·0162·0169) · 절차형 26 · premium 0. 통찰 라벨을 하나라도 가진 블록은 9(d1 단독 5: 0149·0150·0161·0170·0172 포함)
- type_hint 상위: 「(x-a)f(x)=g(x) 꼴에서 연속성으로 f(a) 구하기」 계열 4(0163~0166) · 「그래프에서 극한 존재·불연속점 읽기」 3(0152~0154) · 「분수식·무리식 조각 함수가 x=a 에서 연속일 조건(0/0 극한 · 미정계수)」 계열 3(0156·0157·0160) · 「f(x)/g(x) 꼴 연속 조건(판별식·근호 부호)」 계열 3(0170~0172) · 「사잇값 정리로 방정식의 실근 존재 증명」 2(0143·0144) · 「연속함수의 성질(합·차·곱·몫·합성)로 연속 판정」 2(0167·0168)
- 그림: 4문(`crop:fig-0152.png` · `crop:fig-0153.png` · `crop:fig-0154.png` · `crop:fig-0155-2.png` — 0155 는 보기 그림 fig-0155.png · fig-0155-3.png 포함)
- 벤더 신호 대조: 대표문제 7문 모두 ★2, 중하 4문 중 3문 ★1(0153 만 ★2), 중 8문 모두 ★2, 상중 5문 모두 ★3, 교과서 2문 ★1. 「서술형」 태그 3문(0147·0160·0166)은 모두 절차형 ★2.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0151 | 상중 라벨 ★3 이나 통찰 2개(RT d2·VF d1) 기준 ★4 후보. 가우스 불연속 세기는 널리 알려진 골조라 ★3 유지 | ★3 / ★4 |
| RPM-CALC1-0169 | 상중 라벨 ★3 이나 통찰 2개(EQV d2·BW d1) 기준 ★4 후보. 기본대칭식 변형은 널리 알려진 골조라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「(x-a)f(x)=g(x) 꼴」 4 · 「그래프 읽기」 3 · 「조각 함수 x=a 연속 조건(0/0 미정계수)」 3 · 「f/g 꼴 판별식」 3. 이 넷이 이 범위 30문의 절반을 차지한다.
- 통합해도 될 유형: 유형 04 의 0156·0157·0160 과 유형 05 의 0163~0166 은 모두 「분모→0 이면 분자→0 → 약분(유리화) 극한 = 함숫값」 한 골조라 카탈로그에서는 「연속 조건에서 미정계수·함숫값(분수식/무리식 하위 변형)」 한 유형으로 묶어도 됨. 유형 01 의 0146 과 유형 03 의 0152~0154 는 「한 점 연속 판정(식/그래프)」 으로, 유형 07 의 0170~0172 는 「분모·근호 조건 → 판별식 부호(등호 구분)」 하나로 통합 가능.
- 따로 세워야 할 유형: 「불연속 함수와의 곱·합이 연속일 조건」(0155 — 유형 03 에 들어 있지만 골조는 유형 06 성질 쪽이며 g(0)=0 통찰이 핵심) · 「주기 조건 + 연속」(0162 — 숨은 경계) · 「가우스 함수 연속·불연속」(0151·0161 — RT/EQV 골조가 공통) · 「f+g, fg 연속 → 대칭식 판정」(0169 — 반례 구성 포함) · 「합성함수 f(g(x)) 의 불연속점」(0149) · 「실근 개수 함수 f(a) 의 불연속점」(0150).
- 절차형만 있는 유형 04·05·07 의 ★ 상한은 이 범위에서 ★3(가우스·주기 조건이 붙을 때)이며, ★4 이상은 0151·0169 처럼 통찰 2개가 겹칠 때만 후보로 나타났다.
