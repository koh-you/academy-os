---
name: mechanism-데이터-RPM-CALC1-05-p1
description: RPM 미적분Ⅰ 05 도함수의 활용 (2)(1/3 · 교과서 05-1~05-4 + 유형 01~04) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 05 도함수의 활용 (2)
  unit_code: CALC1-05
  part: "1/3"
  extract_range: "65~67쪽 · 0405~0437"
  total_problems: 33
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 교과서 구역은 ★1 출발이고 통찰이 없어도 Mₛ ≥ 2 이면서 M_total ≥ 6 인 문항만 ★2 로 올림. 유형 구역은 대표문제·level 없음 ★2, 중하 ★1~2, 중 ★2 출발이며 통찰 0·M_total 4 인 대표문제(0422)만 −1. 유형 02 의 「실수 전체 ⇔ D ≤ 0」은 유형 정의 그대로라 절차로 보고, 유형 03 의 「구간 조건 ⇔ f' 포물선 끝점·근 위치」는 그래프 읽기 한 단계라 I-RT 로, 정의 문장·역함수 존재 해석은 I-EQV 로 셈. insight_type 은 통찰이 d1 하나뿐인 ★2 면 절차형(유형의 표준 단계), depth 2 이상이거나 통찰 2개 이상이면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 05 도함수의 활용 (2) (1/3) 정독 데이터 (v1.0)

이 파일은 05 단원의 앞부분 65~67쪽 · 0405~0437 · 33문항을 다룬다. 65쪽은 「교과서 05-1 함수의 증가와 감소」부터 「교과서 05-4 함수의 최댓값과 최솟값」까지 교과서 구역 17문(공통 발문 드릴 · 그림 2문 · 소문항 2문)이고, 66~67쪽은 「유형 01 함수의 증가와 감소」 · 「유형 02 실수 전체의 집합에서 증가(감소)하기 위한 조건」 · 「유형 03 주어진 구간에서 증가(감소)하기 위한 조건」 · 「유형 04 함수의 극대와 극소」 네 유형 16문이다. RPM 의 벤더 신호는 구역이 곧 난이도 층이라 교과서 구역은 ★1 출발, 유형 구역은 대표문제(태그 「대표문제」 · level 없음) ★2 · 「중하」 ★1~2 · 「중」 ★2 출발이며, 이 범위에 「상중」·「상」·「유형 UP」은 없다. 교과서 구역에서는 통찰 없이도 Mₛ 2 이면서 M_total 6 인 두 문항(0417 사차 그래프 임계점 셋 · 0420 정체점·분수 최소)만 ★2 로 올렸고, 유형 구역에서는 통찰 0·M_total 4 로 교과서 드릴과 골조가 같은 대표문제 0422 만 −1 하여 ★1 로 두었다.

통찰 판정은 보수적으로 했다. 유형 02 의 「실수 전체에서 증가 ⇔ f' ≥ 0 ⇔ D ≤ 0」은 유형의 정의 자체(공식 대입)라 절차로 보고, 정의 문장 「x₁<x₂ ⇒ f(x₁)>f(x₂)」(0428)·「역함수가 존재」(0429)를 단조 조건으로 옮기는 해석만 I-EQV d1 로 셌다. 유형 03 의 「구간에서 f' 부호 ⇔ 포물선의 끝점 조건」(0430~0432)은 그래프 읽기 한 단계라 I-RT d1, 두 구간 조건을 f' 의 근 위치 하나로 모으는 0433 은 I-RT d2 로 두었다. insight_type 은 통찰이 d1 하나뿐인 ★2 면 절차형(유형의 표준 단계), depth 2 이상이면 통찰형이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(절차형이면 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점)를 채웠다. 소문항이 있는 문항은 「⑴~⑶ …」으로 묶어 요약했다.

## 문항 데이터

### 교과서 05-1 함수의 증가와 감소

공통 발문 「다음 함수의 증가와 감소를 조사하시오.」(0405~0409).

```yaml
- id: RPM-CALC1-0405
  page: 65
  vendor_label: "교과서 05-1 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x² 의 증가와 감소 조사(공통 발문).
  category: "도함수 부호 → 증가·감소 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 조사 (도함수 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=2x 의 부호가 x=0 에서 − → + 로 바뀜. 정의 확인 한 단계. 답의 구간이 닫힌구간(경계 포함) 표기라는 점만 확인.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=2x → 부호 변화점 x=0 → (-∞,0] 감소 · [0,∞) 증가"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-\infty,\,0]$에서 감소, 구간 $[0,\,\infty)$에서 증가)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수의 계수·꼭짓점 위치(x²+2x, 2x²-4x 등)를 바꿀 수 있음. 제약: 변화점이 유리수 한 개 · 답은 닫힌구간 두 개로 표기."
    creative: "(1) (x-1)²+2 처럼 꼭짓점을 옮겨 대칭축과 대조(★1) (2) 최고차항 음수로 부호 반전(★1) (3) |x²-1| 처럼 절댓값을 붙이면 미분 불가능점·구간 나누기 + 부호 → ★2."
```

```yaml
- id: RPM-CALC1-0406
  page: 65
  vendor_label: "교과서 05-1 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=-x³ 의 증가와 감소 조사(공통 발문).
  category: "도함수 부호 (한 점에서만 0) → 단일 구간 단조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 조사 (도함수 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-3x² ≤ 0 이 항상 성립하고 등호는 x=0 한 점뿐이므로 실수 전체에서 감소. f'(0)=0 을 「증감이 바뀐다」로 오해하는 함정 하나(T-경계).
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=-3x² ≤ 0 (등호는 x=0 한 점) → (-∞,∞) 에서 감소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-\infty,\,\infty)$에서 감소)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³, 2x³+x, -(x-1)³ 처럼 도함수가 한 점에서만 0 이거나 항상 한 부호인 삼차식으로. 제약: f' 의 부호가 바뀌지 않아야 하며 답이 단일 구간."
    creative: "(1) f'(0)=0 인데 감소가 끊기지 않는 이유를 설명하게 하기(★1) (2) x³+ax 에서 a 의 부호로 단조 여부가 갈리게 해 유형 02 의 씨앗으로(★2) (3) 「f'(a)=0 이면 x=a 에서 극값을 갖는다」 참·거짓 보기 판별(★2 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0407
  page: 65
  vendor_label: "교과서 05-1 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=3x-x² 의 증가와 감소 조사(공통 발문).
  category: "도함수 부호 → 증가·감소 구간 (최고차항 음수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 조사 (도함수 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3-2x 가 x=3/2 에서 + → − . 최고차항이 음수라 증가가 먼저 오는 순서만 주의.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=3-2x → x=3/2 에서 + → − → (-∞,3/2] 증가 · [3/2,∞) 감소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $\left(-\infty,\,\dfrac{3}{2}\right]$에서 증가, 구간 $\left[\dfrac{3}{2},\,\infty\right)$에서 감소)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(3)와 이차항 부호를 바꾸면 변화점 3/2 이 옮겨짐. 제약: 변화점은 유리수 · 부호 순서(증가 → 감소)가 최고차항 부호와 맞아야 함."
    creative: "(1) 0405 와 짝지어 최고차항 부호에 따른 증감 순서 대조(★1) (2) 변화점을 미정계수로 두고 「x=3/2 에서 증감이 바뀌도록」 역으로 묻기 → 유형 01 골조(★2) (3) 증가 구간에서의 최댓값까지 함께 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0408
  page: 65
  vendor_label: "교과서 05-1 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x²-x-2 의 증가와 감소 조사(공통 발문).
  category: "도함수 부호 → 증가·감소 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 조사 (도함수 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=2x-1 → x=1/2 에서 − → + . 원식이 (x-2)(x+1) 로 인수분해되지만 x절편은 증감과 무관 — 근을 변화점으로 착각하는 함정 하나.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=2x-1 → x=1/2 에서 − → + → (-∞,1/2] 감소 · [1/2,∞) 증가"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $\left(-\infty,\,\dfrac{1}{2}\right]$에서 감소, 구간 $\left[\dfrac{1}{2},\,\infty\right)$에서 증가)'
  answer_source: "답지(쪽 렌더 · 풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(-2)은 증감에 영향이 없어 자유 · 일차항 계수로 변화점 이동. 제약: 변화점 유리수."
    creative: "(1) 인수분해되는 이차식을 주고 「x절편이 아니라 f'=0 인 점이 변화점」임을 짚기(★1) (2) 구간 [0,3] 을 붙여 최대·최소까지(★1~2) (3) f(x)=|x²-x-2| 로 바꾸면 미분 불가능점·구간 분할 → ★2."
```

```yaml
- id: RPM-CALC1-0409
  page: 65
  vendor_label: "교과서 05-1 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=(1/3)x³+x²-4 의 증가와 감소 조사(공통 발문).
  category: "도함수 인수분해 → 부호표 → 세 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 조사 (도함수 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=x²+2x=x(x+2) → x=-2, 0 에서 부호 교대(+,−,+). 증가·감소·증가 세 구간을 닫힌구간으로 적는 표준 절차.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=x(x+2) → 부호표(+,−,+) → (-∞,-2]·[0,∞) 증가 · [-2,0] 감소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-\infty,\,-2]$, $[0,\,\infty)$에서 증가, 구간 $[-2,\,0]$에서 감소)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 두 근(-2, 0)을 정수 쌍으로 바꾸면 삼차식 계수가 따라옴(계수 1/3 은 f' 를 모닉으로 만드는 장치). 제약: f'=0 의 두 실근이 서로 다른 유리수 · 상수항 자유."
    creative: "(1) 최고차항 음수로 바꿔 순서 반전(★1) (2) 증가 구간을 [a,b] 로 주고 a+b 묻기 → 0422 골조(★1~2) (3) f' 의 근이 중근이면 단조 → 0406 과 연결(★2)."
```

### 교과서 05-2 함수의 극대와 극소

U5-K2(0410·0411 · 개별 발문)와 U5-K3(0412~0414 · 공통 발문 「다음 함수의 극값을 구하시오.」)가 같은 구역 이름이라 한 절로 묶었다.

```yaml
- id: RPM-CALC1-0410
  page: 65
  vendor_label: "교과서 05-2 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그래프가 그려진 함수 y=f(x) 의 구간 (α,β) 에서 ⑴ 극댓값을 갖는 x ⑵ 극솟값을 갖는 x 를 그림의 라벨 a~f 로 답하기.
  category: "극값의 정의로 그래프 읽기 (뾰족점·정체점·끝점 구분)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극대·극소인 점 읽기 (미분 불가능점·정체점 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    극값의 정의(근방에서 최대·최소)로 그래프의 증→감 전환점 b, d 와 감→증 전환점 a, c, f 를 읽음. 뾰족점 c 는 미분 불가능하지만 극소, 기울기 0 인 e 는 증감이 안 바뀌어 극값 아님, 끝점 α·β 는 열린구간이라 제외 — 함정 셋이라 Mₜ 2.
    정의 확인 한 단계 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "그래프의 증→감 전환점(b, d) = 극대 · 감→증 전환점(a, c, f) = 극소 · 뾰족점 c 포함 · 평평한 e 와 끝점 α, β 제외"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $b$, $d$ \quad (2) $a$, $c$, $f$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0410.png"
  latex: latex-bank/rpm-calc1/items/0410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨 a~f 는 고정(그림 교체 없이는 수 변형 불가). 텍스트만 바꾼다면 극대·극소의 개수를 묻는 형식으로. 제약: 그림과 정답 라벨 일치."
    creative: "(1) 「f'(x)=0 인 점의 개수」와 「극값을 갖는 점의 개수」를 함께 물어 e 와 c 의 차이를 드러내기(★2 · I-MI d1) (2) 도함수 y=f'(x) 의 그래프를 주고 원함수의 극대·극소 위치를 읽게 하기(★2~3 · I-RT d1~2) (3) 닫힌구간 [α,β] 로 바꾸면 끝점이 최대·최소 후보가 되는 점을 대조(★2)."
```

```yaml
- id: RPM-CALC1-0411
  page: 65
  vendor_label: "교과서 05-2 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=2x³+6x²-1 에 대하여 ⑴ f'(x)=0 인 x ⑵ 증감표 완성(표 이미지 · x 값·f' 부호·f 값 채우기) ⑶ 극값.
  category: "도함수 근 → 증감표 → 극댓값·극솟값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값 구하기 (증감표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=6x²+12x=6x(x+2) → x=-2, 0. 표에 -2, 0 과 사이 구간 부호 −, f(-2)=7, f(0)=-1 을 채우면 극댓값 7·극솟값 -1. 단계가 소문항으로 안내돼 있어 통찰 없음.
    교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=6x(x+2)=0 → x=-2, 0 → 증감표 (+,0,−,0,+) → 극댓값 f(-2)=7 · 극솟값 f(0)=-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-2$, $0$ \quad (2) $-2$, $0$, $-$, $7$, $-1$ \quad (3) 극댓값: $7$, 극솟값: $-1$'
  answer_source: "답지"
  figure: "crop:fig-0411.png"
  latex: latex-bank/rpm-calc1/items/0411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수를 바꿔 f' 의 두 정수근을 새로 잡음(예: 2x³-3x²+5 → 근 0, 1). 제약: f' 의 근이 서로 다른 유리수 두 개 · 극값이 정수 · 표의 칸 수(5칸)가 그대로 맞아야 함(표 이미지는 고정)."
    creative: "(1) 소문항 안내를 없애고 「극값을 구하시오」 한 줄로(0412 골조 ★1) (2) 증감표를 먼저 주고 함수식의 미정계수를 역으로 구하게(★2 · I-BW d1) (3) 최고차항 음수로 바꿔 극대·극소 순서 반전(★1)."
```

```yaml
- id: RPM-CALC1-0412
  page: 65
  vendor_label: "교과서 05-2 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x³-3x+1 의 극값 구하기(공통 발문).
  category: "도함수 인수분해 → 증감표 → 극댓값·극솟값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극값 구하기 (증감표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3x²-3=3(x+1)(x-1) → x=-1 에서 + → − 극대 3, x=1 에서 − → + 극소 -1. 도함수·근·부호·값 네 단계의 표준 절차.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=3(x+1)(x-1) → 증감표 → 극댓값 f(-1)=3 · 극솟값 f(1)=-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "극댓값: $3$, 극솟값: $-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³-3a²x+c 꼴로 극점 ±a 를 조절(a 정수) · 상수항 c 자유. 제약: 두 극값이 정수."
    creative: "(1) 극댓값과 극솟값의 합·차 묻기(0434 골조 ★2) (2) 변곡점 (0,1) 중심 대칭으로 극댓값+극솟값=2f(0) 을 발견하게(★2 · I-SYM d1) (3) 극값 하나만 주고 상수항 결정(★2)."
```

```yaml
- id: RPM-CALC1-0413
  page: 65
  vendor_label: "교과서 05-2 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x⁴-2x² 의 극값 구하기(공통 발문).
  category: "도함수 인수분해(세 근) → 부호 교대 → 극값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값 구하기 (증감표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=4x³-4x=4x(x+1)(x-1) → 임계점 셋. 부호 −,+,−,+ 로 x=0 극대 0 · x=±1 극소 -1(짝함수라 두 극솟값이 같음).
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=4x(x²-1) → 부호(−,+,−,+) → 극댓값 f(0)=0 · 극솟값 f(±1)=-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "극댓값: $0$, 극솟값: $-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x⁴-2a²x²(+c) 로 극소점 ±a 조절. 제약: f' 의 세 근이 유리수 · 극값 정수."
    creative: "(1) 짝함수임을 이용해 x ≥ 0 만 조사하도록 유도(★1~2 · I-SYM d1) (2) 극솟값을 갖는 x 가 둘인데 「극솟값」은 하나임을 짚기(★1) (3) x⁴-2x²+k 의 극댓값이 0 이 되는 k 처럼 역으로(★2)."
```

```yaml
- id: RPM-CALC1-0414
  page: 65
  vendor_label: "교과서 05-2 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=-3x⁴+4x³-1 의 극값 구하기(공통 발문 · 극솟값은 없음).
  category: "도함수 x² 인수(정체점) → 부호 불변 판단 → 극댓값만"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값 구하기 (증감표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-12x³+12x²=-12x²(x-1) → x=0 에서는 부호가 +,+ 로 안 바뀌어 극값이 아니고, x=1 에서 + → − 극대 f(1)=0. 「극솟값 없음」이 답의 핵심이라 정체점 함정 하나.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=-12x²(x-1) → x=0 부호 불변(극값 아님) · x=1 에서 + → − → 극댓값 f(1)=0 만"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "극댓값: $0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-3x⁴+4ax³+c 꼴로 극대점 a 조절 · 부호를 뒤집으면 극솟값만 존재. 제약: f' 가 x² 인수를 갖도록 유지(정체점이 이 문항의 골조)."
    creative: "(1) 「극솟값을 구하시오」로 물어 없음을 답하게(★2 · I-VF 성격) (2) f'(x)=0 의 근 개수와 극값 개수를 함께 묻기(★2) (3) 0413 과 대조해 「사차함수 극값 1개 vs 3개」 분류(★2 · I-MI d1)."
```

### 교과서 05-3 함수의 그래프

공통 발문 「다음 함수의 그래프를 그리시오.」(0415~0417).

```yaml
- id: RPM-CALC1-0415
  page: 65
  vendor_label: "교과서 05-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=-x³+3x+2 의 그래프 그리기(공통 발문).
  category: "증감표 → 극값·절편 → 개형 스케치"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 그래프 그리기 (증감표·극값·절편)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-3x²+3=-3(x+1)(x-1) → 극소 (-1,0) · 극대 (1,4) · y절편 2. 최고차항 음수라 감→증→감 개형. 증감표·극값·절편 한 세트의 표준 절차.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=-3(x²-1) → 극소 (-1,0) · 극대 (1,4) → y절편 2 → 개형(감→증→감) 스케치"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($x=-1$에서 극솟값 $0$, $x=1$에서 극댓값 $4$인 그래프)'
  answer_source: "답지(쪽 렌더 · 그래프 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿔 극점 ±a 와 극값을 조절 · 상수항으로 위아래 이동. 제약: 극값이 정수 · x절편도 정수면 그리기 좋음(여기선 f(x)=(x+1)²(2-x) 라 x=-1 에서 접함)."
    creative: "(1) x절편 -1, 2 중 x=-1 은 접하는 점임을 인수분해로 확인(★2 · I-RT d1) (2) 그래프를 주고 계수의 부호를 판별(★2) (3) 그린 그래프로 방정식 f(x)=k 의 실근 개수 분류(★2~3 · 다음 소단원 골조)."
```

```yaml
- id: RPM-CALC1-0416
  page: 65
  vendor_label: "교과서 05-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=(1/3)x³-x² 의 그래프 그리기(공통 발문).
  category: "증감표 → 극값·절편 → 개형 스케치"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 그래프 그리기 (증감표·극값·절편)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=x²-2x=x(x-2) → 극대 (0,0) · 극소 (2,-4/3). 원점을 지나고 x절편 0, 3. 극솟값이 분수라는 점 말고는 0415 와 같은 절차.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=x(x-2) → 극대 (0,0) · 극소 (2,-4/3) → 원점·x절편 3 → 개형(증→감→증) 스케치"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($x=0$에서 극댓값 $0$, $x=2$에서 극솟값 $-\dfrac{4}{3}$인 그래프)'
  answer_source: "답지(쪽 렌더 · 그래프 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1/3)x³-ax² 꼴로 극소점 2a 조절. 제약: 극솟값이 분수여도 되지만 그리기 쉬운 값 · x절편 3a 가 정수."
    creative: "(1) 극소점을 격자점으로 맞추려면 어떤 계수가 필요한지 역으로(★2 · I-BW d1) (2) 최고차항 계수 1/3 을 1 로 바꾸면 극값이 달라지는 이유 대조(★1) (3) x=0 에서의 접선 y=0 과 그래프의 위치 관계(★2)."
```

```yaml
- id: RPM-CALC1-0417
  page: 65
  vendor_label: "교과서 05-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x⁴-4x³+4x²+2 의 그래프 그리기(공통 발문).
  category: "도함수 세 근 → 네 구간 부호 → 극값 셋 → W 개형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 그래프 그리기 (임계점 셋)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4x³-12x²+8x=4x(x-1)(x-2) → 극소 (0,2)·(2,2) · 극대 (1,3). W 자 개형. 임계점 셋·값 셋·네 구간 부호까지 삼차보다 단계·계산이 한 단계 무겁다(Mₛ 2·Mₖ 2·M_total 6).
    교과서 구역이지만 통찰 없이 Mₛ 2·M_total 6 → ★2. f(x)=x²(x-2)²+2 로 보면 x=1 대칭.
    [분류 이슈] 교과서 드릴을 계산·단계 부담만으로 ★2 로 올린 경우 — 교과서 일괄 ★1 정책이면 ★1.
  tier: star_2
  mechanism_primary: "f'(x)=4x(x-1)(x-2) → 부호(−,+,−,+) → 극소 (0,2)·(2,2) · 극대 (1,3) → W 개형 스케치"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($x=0$, $x=2$에서 극솟값 $2$, $x=1$에서 극댓값 $3$인 그래프)'
  answer_source: "답지(그래프 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²(x-2a)²+c 꼴로 두 극소점 0, 2a 와 높이 c 조절. 제약: 세 임계점이 정수 · 두 극솟값이 같음(대칭 구조 유지)."
    creative: "(1) x²(x-2)² 완전제곱 구조를 눈치채면 x=1 대칭으로 절반만 조사(★2 · I-SYM d1) (2) 상수항을 k 로 두고 극솟값이 0 이 되는 k(★2) (3) 두 극솟값이 다른 사차식(x⁴-4x³+2x² 등)으로 바꾸면 대칭이 깨져 값 계산이 늘어남(★2)."
```

### 교과서 05-4 함수의 최댓값과 최솟값

공통 발문 「주어진 구간에서 다음 함수의 최댓값과 최솟값을 구하시오.」(0418~0421).

```yaml
- id: RPM-CALC1-0418
  page: 65
  vendor_label: "교과서 05-4 함수의 최댓값과 최솟값"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    구간 [-2,3] 에서 f(x)=-x³+3x² 의 최댓값과 최솟값(공통 발문).
  category: "구간 안 임계점 + 끝점 후보값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 삼차함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-3x²+6x=-3x(x-2) → 구간 안 임계점 0, 2. 후보값 f(-2)=20, f(0)=0, f(2)=4, f(3)=0 비교 → 최대 20 · 최소 0. 끝점 f(-2) 가 극댓값 4 를 이기는 점이 포인트.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=-3x(x-2) → 후보 x=-2, 0, 2, 3 → f 값 20, 0, 4, 0 → 최대 20 · 최소 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "최댓값: $20$, 최솟값: $0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝을 옮겨 최대가 끝점/극점 중 어디서 나는지 조절(예: [-1,3] 이면 최대 4). 제약: 임계점이 구간 안에 있어야 골조 유지 · 후보값 정수."
    creative: "(1) 구간을 [1,3] 처럼 임계점 하나만 포함하게(★1) (2) 구간 끝을 매개변수 t 로 두고 최댓값이 극댓값과 같아지는 t 의 범위(★3 · I-BW d2) (3) 최댓값과 최솟값의 합·차 묻기(★1~2)."
```

```yaml
- id: RPM-CALC1-0419
  page: 65
  vendor_label: "교과서 05-4 함수의 최댓값과 최솟값"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    구간 [0,4] 에서 f(x)=x³-6x²+9x-2 의 최댓값과 최솟값(공통 발문).
  category: "구간 안 임계점 + 끝점 후보값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 삼차함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3x²-12x+9=3(x-1)(x-3) → 후보 f(0)=-2, f(1)=2, f(3)=-2, f(4)=2. 극댓값=오른쪽 끝값, 극솟값=왼쪽 끝값이라 최대 2·최소 -2 가 각각 두 곳에서 나옴.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=3(x-1)(x-3) → 후보 0, 1, 3, 4 → 값 -2, 2, -2, 2 → 최대 2 · 최소 -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "최댓값: $2$, 최솟값: $-2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³-6x²+9x+c 로 상수항만 바꾸면 값이 평행이동 · 구간을 [0,3] 으로 줄이면 최대 후보가 줄어듦. 제약: 임계점 1, 3 의 포함 여부로 골조가 달라짐."
    creative: "(1) 「최댓값을 갖는 x 의 값을 모두」 묻기 → 두 곳(★2 · I-MI d1) (2) 구간 [0,a] 에서 최솟값이 -2 가 되는 a 의 범위(★2~3 · I-BW d1) (3) 상수항 k 를 두고 최댓값이 5 가 되게(★2)."
```

```yaml
- id: RPM-CALC1-0420
  page: 65
  vendor_label: "교과서 05-4 함수의 최댓값과 최솟값"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    구간 [-2,3] 에서 f(x)=(1/4)x⁴-x³ 의 최댓값과 최솟값(공통 발문).
  category: "정체점 판별 + 끝점 후보값 비교 (분수)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 사차함수의 최대·최소 (정체점 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=x³-3x²=x²(x-3) → x=0 은 부호 불변(극값 아님), x=3 은 끝점이자 극소. f(-2)=12, f(0)=0, f(3)=-27/4 → 최대 12 · 최소 -27/4. 분수 계산·정체점 처리로 Mₖ 2·M_total 6.
    교과서 구역이지만 통찰 없이 Mₛ 2·M_total 6 → ★2.
    [분류 이슈] 같은 골조의 0421 은 정수 계산이라 ★1 — 계산 부담(Mₖ)만으로 갈린 경우. 교과서 일괄 ★1 정책이면 ★1.
  tier: star_2
  mechanism_primary: "f'(x)=x²(x-3) → 후보 -2, 0, 3 → 값 12, 0, -27/4 → 최대 12 · 최소 -27/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $12$, 최솟값: $-\dfrac{27}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1/4)x⁴-ax³ 로 극소점 3a 조절 · 구간 끝을 정수로. 제약: x=0 정체점 유지 · 최솟값이 분수여도 되지만 후보값끼리 비교 가능하게."
    creative: "(1) 구간을 [-2,4] 로 넓혀 최솟값이 구간 안쪽 극솟값에서 나게(★2) (2) x=0 에서 극값이 없는 이유를 f' 부호로 설명(★2) (3) 최솟값이 정수가 되도록 계수를 정하는 문제(★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0421
  page: 65
  vendor_label: "교과서 05-4 함수의 최댓값과 최솟값"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    구간 [-1,2] 에서 f(x)=3x⁴-4x³+1 의 최댓값과 최솟값(공통 발문).
  category: "정체점 판별 + 끝점 후보값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 사차함수의 최대·최소 (정체점 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=12x³-12x²=12x²(x-1) → x=0 정체점, x=1 극소 0. f(-1)=8, f(0)=1, f(1)=0, f(2)=17 → 최대 17(끝점) · 최소 0(극소). 0420 과 같은 골조지만 정수 계산이라 Mₖ 1.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=12x²(x-1) → 후보 -1, 0, 1, 2 → 값 8, 1, 0, 17 → 최대 17 · 최소 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "최댓값: $17$, 최솟값: $0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x⁴-4x³+c 로 상수항 조절 · 구간 끝 변경. 제약: x=1 극소 · x=0 정체점 유지 · 후보값 정수."
    creative: "(1) 구간을 [-1,1] 로 줄이면 최대가 f(-1)=8 로 바뀜(★1) (2) 최솟값이 -3 이 되도록 c 결정(★2) (3) 0420 과 짝지어 「정체점이 최대·최소 후보가 되는가」 토론(★2)."
```

### 유형 01 함수의 증가와 감소

```yaml
- id: RPM-CALC1-0422
  page: 66
  vendor_label: "유형 01 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=-x³-3x²+24x-2 가 증가하는 구간이 [a,b] 일 때 a+b 의 값.
  category: "도함수 인수분해 → 최고차항 음수 부호 → 두 근 사이가 증가 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가·감소 구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=-3x²-6x+24=-3(x+4)(x-2) → 최고차항이 음수라 두 근 사이에서 f' ≥ 0 → 증가 구간 [-4,2] → a+b=-2. 교과서 0409 와 같은 골조에 부호 처리(T-부호)만 얹힘.
    유형 대표문제 출발점 ★2 이지만 통찰 0·M_total 4 → −1 하여 ★1.
    [분류 이슈] 유형 01 대표문제를 ★1 로 둔 경우 — 카탈로그에서 유형 01 base ★ 를 ★1/★2 중 어느 쪽으로 둘지 결정 필요.
  tier: star_1
  mechanism_primary: "f'(x)=-3(x+4)(x-2) ≥ 0 → 두 근 사이 [-4,2] 증가 → a+b=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 두 근 p<q 를 바꾸면 f(x)=-x³+(3(p+q)/2)x²-3pqx+c. 제약: 계수가 정수가 되려면 p+q 짝수 · 상수항 자유 · 답 a+b=p+q."
    creative: "(1) 최고차항 양수로 바꾸면 증가 구간이 둘이 되어 「감소 구간 [a,b]」로 물어야 함(★1) (2) 증가 구간을 주고 계수를 역으로 묻기 → 0423~0425 골조(★2) (3) 「증가 구간의 길이가 6」처럼 길이 조건으로 미정계수(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0423
  page: 66
  vendor_label: "유형 01 함수의 증가와 감소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x³+ax²+bx+c 가 감소하는 구간이 [1,2] 일 때 2a+b 의 값(a, b, c 상수).
  category: "감소 구간 [1,2] → f' 의 두 근 1, 2 → 계수 비교"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "증가·감소 구간이 주어진 함수의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    감소 구간이 [1,2] ⇔ f'(x)=3x²+2ax+b 의 두 근이 1, 2 ⇔ f'(x)=3(x-1)(x-2). 계수 비교로 2a=-9, b=6 → 2a+b=-3. c 는 무관. 역방향이지만 유형의 표준 절차라 통찰로 세지 않음.
    벤더 중하·미정계수 둘(Mₐ 2)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "감소 구간 [1,2] → f'(x)=3(x-1)(x-2) → 계수 비교 a=-9/2, b=6 → 2a+b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q] 를 바꾸면 2a=-3(p+q), b=3pq. 제약: 묻는 식(2a+b)이 정수가 되도록 p+q 를 고르거나 묻는 식을 바꿈 · c 가 답에 안 들어가는 구조 유지."
    creative: "(1) 「감소 구간의 길이가 1 이고 x=1 부터 감소」처럼 조건을 나눠 주기(★2 · I-EQV d1) (2) f(1)=0 같은 조건을 더해 c 와 극값까지(★2) (3) 근과 계수의 관계 갈래와 전개 비교 갈래를 대조(★2)."
```

```yaml
- id: RPM-CALC1-0424
  page: 66
  vendor_label: "유형 01 함수의 증가와 감소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2x³+ax²+36x+9 가 감소하는 x 의 범위가 b ≤ x ≤ 3 일 때 b-a 의 값(a 상수).
  category: "알려진 근 3 → f'(3)=0 으로 a → 인수분해로 나머지 근 b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "증가·감소 구간이 주어진 함수의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=6x²+2ax+36 의 큰 근이 3 → f'(3)=0 에서 a=-15 → f'(x)=6(x-2)(x-3) 로 작은 근 b=2 → b-a=17. 근 하나만 주고 나머지 근을 인수분해(또는 근의 곱 6)로 찾는 두 단계.
    통찰 없음·벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(3)=0 → a=-15 → f'(x)=6(x-2)(x-3) → b=2 → b-a=17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$17$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 근 3 과 일차항 계수 36 을 바꾸면 a 와 b 가 따라옴(두 근의 곱 = 36/6 = 6 → b = 6/3). 제약: 근의 곱이 정수가 되도록 일차항 계수 선택 · b < 3 유지."
    creative: "(1) 근과 계수의 관계(두 근의 곱 6)로 b 를 먼저 구하는 갈래 제시(★2) (2) 「감소 구간의 길이가 1」 조건으로 바꾸면 근의 차 공식이 필요(★3 · I-EQV d1) (3) 두 근을 모두 미지수로 두고 합·곱 조건으로(★2)."
```

```yaml
- id: RPM-CALC1-0425
  page: 66
  vendor_label: "유형 01 함수의 증가와 감소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x³+ax²+bx+3 이 -1 ≤ x ≤ 2 에서 증가하고 그 밖에서 감소할 때 상수 a, b 에 대하여 ab 의 값.
  category: "증가 구간 [-1,2] → f' 의 두 근 -1, 2 (최고차항 -3) → 계수 비교"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "증가·감소 구간이 주어진 함수의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증가 [-1,2] · 감소 그 밖 ⇔ f'(x)=-3x²+2ax+b 의 근이 -1, 2 이고 최고차항이 음수 ⇔ f'(x)=-3(x+1)(x-2). 2a=3, b=6 → ab=9. 0423 과 같은 골조에 최고차항 -3 을 맞추는 부호 처리가 얹힘.
    통찰 없음·벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "증가 [-1,2] → f'(x)=-3(x+1)(x-2) → a=3/2, b=6 → ab=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q] 를 바꾸면 2a=3(p+q), b=-3pq. 제약: ab 가 정수가 되도록 조절(p+q 짝수면 a 정수) · 상수항 3 은 무관."
    creative: "(1) 「증가 구간」과 「감소 구간」 두 조건 중 하나만 줘도 답이 결정되는지 묻기(★2 · I-EQV d1) (2) 극댓값 조건을 추가해 상수항까지(★2) (3) 최고차항 계수를 k 로 두고 부호 판별을 포함(★3 · I-MI d1)."
```

### 유형 02 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건

```yaml
- id: RPM-CALC1-0426
  page: 66
  vendor_label: "유형 02 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x³-ax²+(a+6)x+5 가 실수 전체에서 증가하도록 하는 정수 a 의 최댓값. 5지선다.
  category: "f' ≥ 0 (∀x) → 판별식 D ≤ 0 → 이차부등식 → 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)하기 위한 조건 (판별식 D ≤ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x²-2ax+a+6 ≥ 0 이 모든 실수에서 ⇔ D/4=a²-3a-18 ≤ 0 ⇔ (a-6)(a+3) ≤ 0 ⇔ -3 ≤ a ≤ 6 → 최대 정수 6. 유형 02 의 정의 그대로(판별식 공식)라 통찰로 세지 않음. 등호 포함(T-경계)이 답 6 을 결정.
    대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=3x²-2ax+a+6 ≥ 0 (∀x) → D/4=a²-3a-18 ≤ 0 → -3 ≤ a ≤ 6 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항의 a+6 을 a+k 로 바꾸면 D/4=a²-3a-3k ≤ 0 · 판별식의 근이 정수가 되도록 k 선택(k=6 → 근 -3, 6). 제약: 최고차항 양수 유지 · 정수 최댓값이 선택지 안에."
    creative: "(1) 최고차항 계수를 미정으로 두면 부호 조건이 추가(0427 골조 ★2) (2) 「감소하는 구간이 존재하도록」으로 뒤집으면 D > 0 (★2 · I-EQV d1) (3) 정수 a 의 개수·합으로 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0427
  page: 66
  vendor_label: "유형 02 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=ax³+x²-x 가 구간 (-∞,∞) 에서 감소하도록 하는 정수 a 의 최댓값. 서술형.
  category: "최고차항 부호 조건 + 판별식 D ≤ 0 → 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)하기 위한 조건 (판별식 D ≤ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3ax²+2x-1 ≤ 0 이 항상 ⇔ 3a < 0 이고 D/4=1+3a ≤ 0 ⇔ a ≤ -1/3 → 최대 정수 -1. a=0 이면 이차함수라 단조가 아니고 a>0 이면 아래로 볼록이라 최고차항 부호 조건이 먼저 필요(T-부호·T-경계 → Mₜ 2).
    통찰 없음·서술형·벤더 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=3ax²+2x-1 ≤ 0 (∀x) → 3a < 0 그리고 D/4=1+3a ≤ 0 → a ≤ -1/3 → 정수 최대 -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·일차항 계수를 바꾸면 D/4 의 식이 바뀜(bx²+cx 이면 D/4=b²+3ac). 제약: 정수 최댓값이 -1/3 처럼 경계에서 잘리는 값이 되게 · a=0 이 제외되는 구조 유지."
    creative: "(1) a=0 을 포함시키면 왜 안 되는지 서술 요구(★2 · I-VF 성격) (2) 「증가하도록」으로 바꾸면 a > 0 과 D ≤ 0 이 양립 불가 → 해 없음 판정(★3 · I-VF d1) (3) 정수 a 의 개수를 물으려면 하한을 만드는 추가 조건(f(1) ≥ k 등)이 필요(★3 · I-CON 성격)."
```

```yaml
- id: RPM-CALC1-0428
  page: 66
  vendor_label: "유형 02 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x³+ax²+ax+7 이 임의의 두 실수 x₁<x₂ 에 대하여 f(x₁)>f(x₂) 를 만족시키도록 하는 정수 a 의 개수.
  category: "정의 문장 → 실수 전체에서 감소 → D ≤ 0 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식 정의 문장 「x₁<x₂ ⇒ f(x₁)>f(x₂)」를 「실수 전체에서 감소」로 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 전체에서 증가(감소)하기 위한 조건 (정의 문장 해석)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「x₁<x₂ 이면 f(x₁)>f(x₂)」는 감소함수의 정의 → f'(x)=-3x²+2ax+a ≤ 0 이 항상 ⇔ D/4=a²+3a ≤ 0 ⇔ -3 ≤ a ≤ 0 → 정수 4개. 정의 문장을 「실수 전체에서 감소」로 옮기는 해석 한 단계(EQV d1)가 유형 02 골조 앞에 붙음.
    벤더 중·통찰 d1 하나·M_total 6 → ★2 유지(유형의 표준 단계라 절차형).
  tier: star_2
  mechanism_primary: "정의 문장 → 실수 전체에서 감소 → f'(x)=-3x²+2ax+a ≤ 0 → D/4=a(a+3) ≤ 0 → -3 ≤ a ≤ 0 → 4개"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ax²+ax 의 두 계수를 (a, ka) 로 두면 D/4=a²+3ka → 0 과 -3k 사이 정수 개수 3k+1. 제약: 최고차항 음수 유지 · 개수가 정답 형식에 맞게."
    creative: "(1) 「f(x₁)<f(x₂)」로 바꾸면 최고차항 음수와 모순 → 해 없음(★3 · I-VF d1) (2) 조건을 「(f(x₁)-f(x₂))/(x₁-x₂) < 0」 평균변화율 꼴로 주기(★2 · I-EQV d1) (3) 개수 대신 합 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0429
  page: 66
  vendor_label: "유형 02 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 전체에서 정의된 f(x)=(1/3)x³-ax²+8x 의 역함수가 존재하기 위한 정수 a 의 최댓값.
  category: "역함수 존재 → 단조증가 → f' ≥ 0 → D ≤ 0 → 무리수 경계의 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「역함수 존재」 ⇔ 일대일대응 ⇔ (연속 삼차함수라) 실수 전체에서 단조증가로 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수가 존재하기 위한 조건 (단조 ⇔ f' 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수 존재 ⇔ 일대일대응 ⇔ 실수 전체에서 단조 ⇔ 최고차항 양수이므로 증가 ⇔ f'(x)=x²-2ax+8 ≥ 0 (∀x) ⇔ D/4=a²-8 ≤ 0 ⇔ -2√2 ≤ a ≤ 2√2 → 정수 최대 2. 「역함수 존재」를 단조 조건으로 옮기는 해석 한 단계(EQV d1) · 무리수 경계 처리(T-경계).
    벤더 중·통찰 d1 하나·M_total 6 → ★2 유지(절차형).
    [분류 이슈] 역함수 존재 해석을 I-EQV 로 셌으나 함수 단원(일대일대응) 개념 결합이라 I-XU 로 볼 여지 — ★ 는 어느 쪽이든 ★2.
  tier: star_2
  mechanism_primary: "역함수 존재 → 단조증가 → f'(x)=x²-2ax+8 ≥ 0 → D/4=a²-8 ≤ 0 → |a| ≤ 2√2 → 정수 최대 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 8 을 k 로 바꾸면 |a| ≤ √k → 정수 최댓값 ⌊√k⌋. 제약: k > 0 · k 가 완전제곱수면 경계가 정수가 되어 등호 포함 여부가 답을 가름(함정 강화)."
    creative: "(1) 「f 가 일대일함수」「f(x₁)=f(x₂) ⇒ x₁=x₂」 등 다른 표현으로 같은 골조(★2 · I-EQV d1) (2) 최고차항을 음수로 바꿔 단조감소로(★2) (3) 「역함수가 존재하지 않도록 하는 자연수 a 의 최솟값」으로 여집합 조건(★2 · I-EQV d1)."
```

### 유형 03 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건

```yaml
- id: RPM-CALC1-0430
  page: 67
  vendor_label: "유형 03 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x³-3x²+ax+2 가 구간 [1,3] 에서 감소하도록 하는 실수 a 의 값의 범위.
  category: "구간에서 f' ≤ 0 → 아래로 볼록 포물선의 양 끝점 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 [1,3] 에서 f' ≤ 0 을 아래로 볼록 포물선의 양 끝점 조건 f'(1) ≤ 0, f'(3) ≤ 0 으로 전환(그래프 읽기)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)하기 위한 조건 (f' 포물선의 끝점 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x²-6x+a 가 [1,3] 에서 ≤ 0. f' 는 아래로 볼록한 포물선이므로 구간 양 끝에서 ≤ 0 이면 충분: f'(1)=a-3 ≤ 0, f'(3)=a+9 ≤ 0 → a ≤ -9. 「구간에서 부등식」을 「포물선 끝점값」으로 옮기는 그래프 읽기 한 단계(RT d1).
    대표문제·통찰 d1 하나·M_total 6 → ★2(절차형).
    [분류 이슈] 유형 03 의 끝점 조건을 I-RT d1 로 셌음(0431·0432 동일) — 유형 02 의 D ≤ 0 을 절차로 본 것과 통일 여부는 카탈로그에서 결정. 절차로 보면 insights 만 비고 ★2 그대로.
  tier: star_2
  mechanism_primary: "f'(x)=3x²-6x+a ≤ 0 on [1,3] → 아래로 볼록 → f'(1) ≤ 0 ∧ f'(3) ≤ 0 → a ≤ -9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$a\le -9$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q] 와 이차항 계수를 바꾸면 f'(q) ≤ 0 이 결정 조건이 됨(꼭짓점 x=1 이 구간 왼쪽 끝이라 f'(3) 이 최대). 제약: 구간이 꼭짓점 오른쪽에 있으면 오른쪽 끝만 유효 · 답이 한쪽 부등식으로 정리."
    creative: "(1) 꼭짓점이 구간 안에 있게 [0,3] 으로 넓혀도 감소 조건은 여전히 끝점 둘로 충분함을 확인(★2) (2) 「구간 [0,3] 에서 증가하도록」으로 뒤집으면 꼭짓점 x=1 이 구간 안에 있어 끝점만으론 부족 → 최솟값 조건(★3 · I-MI d1) (3) 구간 길이를 매개변수로(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0431
  page: 67
  vendor_label: "유형 03 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x³+x²+ax-4 가 구간 [1,2] 에서 증가하도록 하는 정수 a 의 최솟값.
  category: "구간에서 f' ≥ 0 → 위로 볼록 포물선의 양 끝점 조건 → 정수 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위로 볼록 포물선 f' 의 구간 최솟값이 끝점에서 남 → f'(1) ≥ 0, f'(2) ≥ 0 으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)하기 위한 조건 (f' 포물선의 끝점 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-3x²+2x+a ≥ 0 on [1,2]. 위로 볼록 포물선이라 구간의 최솟값은 끝점에서: f'(1)=a-1 ≥ 0, f'(2)=a-8 ≥ 0 → a ≥ 8 → 정수 최소 8. 최고차항 음수(T-부호)·등호(T-경계)에 끝점 조건(RT d1).
    벤더 중·통찰 d1 하나·M_total 7 → ★2(절차형).
  tier: star_2
  mechanism_primary: "f'(x)=-3x²+2x+a ≥ 0 on [1,2] → 위로 볼록 → f'(1) ≥ 0 ∧ f'(2) ≥ 0 → a ≥ 8 → 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q](꼭짓점 x=1/3 의 오른쪽)를 바꾸면 f'(q) ≥ 0 이 결정: a ≥ 3q²-2q. 제약: 구간이 꼭짓점 1/3 을 포함하지 않게 · 답 정수."
    creative: "(1) 구간을 [0,1] 로 옮겨 꼭짓점을 포함시켜도 위로 볼록이라 최솟값 후보는 여전히 끝점임을 0430 의 (2) 와 짝지어 대조(★2) (2) 「감소하도록」으로 바꾸면 위로 볼록 포물선의 최댓값(꼭짓점) 조건이 필요(★3 · I-MI d1) (3) 정수 최솟값 대신 a 의 범위(★2)."
```

```yaml
- id: RPM-CALC1-0432
  page: 67
  vendor_label: "유형 03 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x³+kx²-8x+4 가 -2 ≤ x ≤ 1 에서 감소하도록 하는 실수 k 의 최댓값과 최솟값의 합. 5지선다.
  category: "구간에서 f' ≤ 0 → 두 끝점 조건이 상한·하한 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 [-2,1] 에서 f' ≤ 0 을 아래로 볼록 포물선의 끝점 조건 f'(-2) ≤ 0, f'(1) ≤ 0 으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 증가(감소)하기 위한 조건 (f' 포물선의 끝점 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x²+2kx-8 ≤ 0 on [-2,1] → 아래로 볼록이므로 f'(-2)=4-4k ≤ 0, f'(1)=2k-5 ≤ 0 → 1 ≤ k ≤ 5/2 → 합 7/2. 끝점 조건 둘이 각각 하한·상한을 주는 점이 0430 과 다름(RT d1).
    벤더 중·통찰 d1 하나·M_total 6 → ★2(절차형).
  tier: star_2
  mechanism_primary: "f'(x)=3x²+2kx-8 ≤ 0 on [-2,1] → f'(-2) ≤ 0 ∧ f'(1) ≤ 0 → 1 ≤ k ≤ 5/2 → 7/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q](p<0<q)와 상수 -8 을 바꾸면 f'(p) ≤ 0 이 하한 k ≥ (8-3p²)/(2p), f'(q) ≤ 0 이 상한 k ≤ (8-3q²)/(2q) 를 줌. 제약: 하한 ≤ 상한 · 합이 선택지 꼴(분모 2)."
    creative: "(1) k 의 정수 개수·범위로 묻기(★2) (2) 구간을 [0,1] 로 두면 f'(0)=-8 < 0 이 자동이라 조건이 하나로 줄어듦 → 구간 선택이 조건 수를 바꿈을 짚기(★2) (3) 「감소 구간이 [-2,1] 을 포함」 vs 「감소 구간이 정확히 [-2,1]」의 차이(★3 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0433
  page: 67
  vendor_label: "유형 03 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x³+ax²+3 이 구간 [1,2] 에서 감소하고 구간 [3,∞) 에서 증가하도록 하는 실수 a 의 값의 범위.
  category: "두 구간의 증감 조건 → f' 의 큰 근 위치 2 ≤ -2a/3 ≤ 3"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 구간의 증감 조건을 f'(x)=x(3x+2a) 의 큰 근 -2a/3 이 [2,3] 에 놓이는 조건 하나로 전환(근의 위치로 그래프 읽기)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 두 구간의 증감 조건 (f' 근의 위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x²+2ax=x(3x+2a) 의 근은 0 과 -2a/3. [1,2] 에서 감소하려면 큰 근 -2a/3 ≥ 2, [3,∞) 에서 증가하려면 -2a/3 ≤ 3 → 2 ≤ -2a/3 ≤ 3 → -9/2 ≤ a ≤ -3. 두 구간 조건을 f' 포물선의 근 위치 하나로 모으는 그래프 읽기(RT d2). 끝점 대입 f'(1), f'(2) ≤ 0 · f'(3) ≥ 0 으로도 같은 답.
    벤더 중·통찰 1개(d2)·M_total 7 → ★2 유지(depth 2 라 통찰형).
    [분류 이슈] 카탈로그가 유형 03 base ★2 에 끝점 조건을 흡수하면 근 위치 통합(d2)만 +1 하여 ★3 후보.
  tier: star_2
  mechanism_primary: "f'(x)=x(3x+2a) → 근 0, -2a/3 → 감소 [1,2] ∧ 증가 [3,∞) → 2 ≤ -2a/3 ≤ 3 → -9/2 ≤ a ≤ -3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{9}{2}\le a\le -3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "감소 구간 [1,q] 와 증가 시작점 r 를 바꾸면 q ≤ -2a/3 ≤ r → -3r/2 ≤ a ≤ -3q/2. 제약: 1 ≤ q < r · f' 의 다른 근 0 이 1 보다 왼쪽에 있어야 골조 유지."
    creative: "(1) 상수항 대신 일차항 bx 를 넣어 근이 0 이 아니게 하면 근의 위치 대신 끝점 대입이 편해짐 → 전략 갈래(★3 · I-SC d1) (2) 「감소 구간의 길이의 최댓값」으로 묻기(★3 · I-EQV d1) (3) 조건 하나만 남기면 부등식 한쪽만 → 0430 골조로 환원(★2)."
```

### 유형 04 함수의 극대와 극소

```yaml
- id: RPM-CALC1-0434
  page: 67
  vendor_label: "유형 04 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=-2x³+6x+1 의 극댓값 M, 극솟값 m 에 대하여 M+m 의 값. 5지선다.
  category: "도함수 인수분해 → 최고차항 음수의 극대·극소 배치 → 두 값 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극댓값과 극솟값 (합·차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-6x²+6=-6(x+1)(x-1) → 최고차항 음수라 x=-1 극소 -3, x=1 극대 5 → M+m=2. 삼차함수 극값 두 개를 구해 더하는 표준 절차(부호 순서 주의).
    대표문제·통찰 없음·M_total 5 → ★2 유지. 변곡점 (0,1) 대칭으로 M+m=2f(0)=2 도 됨.
  tier: star_2
  mechanism_primary: "f'(x)=-6(x²-1) → 극소 f(-1)=-3 · 극대 f(1)=5 → M+m=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-2x³+6a²x+c 로 극점 ±a 조절 · 상수항 c 를 바꾸면 M+m=2c. 제약: 극값이 정수 · 선택지 안에 답."
    creative: "(1) 상수항을 k 로 두고 M+m=10 이 되는 k(★2 · I-SYM d1 을 쓰면 즉답) (2) M-m 을 물으면 대칭이 소용없어 직접 계산(★2) (3) 극댓값만 주고 계수를 역으로(★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0435
  page: 67
  vendor_label: "유형 04 함수의 극대와 극소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x⁴-4x³+15 가 x=a 에서 극솟값 b 를 가질 때 a+b 의 값. 5지선다.
  category: "도함수 x² 인수(정체점) 제외 → 극소점 하나 → a+b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값 (정체점 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4x³-12x²=4x²(x-3) → x=0 은 부호 불변(극값 아님), x=3 에서 − → + 극소 f(3)=-12 → a+b=-9. 정체점 x=0 을 극소로 착각하면 오답 ⑤(0+15) 에 걸리는 함정 하나.
    벤더 중하(★1~2)·통찰 없음·M_total 5·정체점 함정 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=4x²(x-3) → x=0 정체점 제외 · x=3 극소 -12 → a+b=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x⁴-4ax³+c 로 극소점 3a 조절 · 상수항 c. 제약: f' 가 x² 인수를 갖는 구조 유지 · 극솟값 정수 · 오답 선택지에 정체점 값(0+c)을 남겨 함정 유지."
    creative: "(1) 「극댓값을 갖는 x 의 개수」를 물어 0개임을 답하게(★2 · I-VF 성격) (2) 오답 ⑤ 가 생기는 이유(정체점)를 서술(★2) (3) x⁴-4x³+2x² 처럼 x² 인수를 깨면 극값 셋 → 0436 골조(★2)."
```

```yaml
- id: RPM-CALC1-0436
  page: 67
  vendor_label: "유형 04 함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=-x⁴+4x³+2x²-12x-7 이 극댓값을 갖는 모든 x 의 값의 합.
  category: "삼차 도함수 묶기 인수분해 → 네 구간 부호 → 극대점 둘의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극값 (극대인 x 의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-4x³+12x²+4x-12=-4(x²-1)(x-3)=-4(x+1)(x-1)(x-3) → 부호(+,−,+,−) → x=-1, 3 에서 극대, x=1 극소 → 합 2. 삼차 인수분해(묶기)와 네 구간 부호 판단이 계산 부담(Mₖ 2).
    통찰 없음·벤더 중·M_total 6 → ★2. f'(x)=-4(x-1)((x-1)²-4) 라 x=1 대칭인 사차식이므로 극대점 합=2·1 로도 확인.
  tier: star_2
  mechanism_primary: "f'(x)=-4(x+1)(x-1)(x-3) → 부호(+,−,+,−) → 극대 x=-1, 3 → 합 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'=-4(x-p)(x-q)(x-r) (p<q<r) 를 적분해 사차식을 만들면 극대점은 p, r → 합 p+r. 제약: 세 근이 서로 다른 정수 · 상수항 자유 · 묶기 인수분해가 되도록 계수 정리."
    creative: "(1) 대칭축 x=1 을 눈치채면 극대점 합=2 를 계산 없이(★2 · I-SYM d1) (2) 극댓값 두 개의 합(★3 · Mₖ 상승) (3) 최고차항 양수로 바꿔 극소점의 합으로(★2)."
```

```yaml
- id: RPM-CALC1-0437
  page: 67
  vendor_label: "유형 04 함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x³-3x²-9x+8 의 그래프에서 극대인 점 A, 극소인 점 B 에 대하여 선분 AB 의 중점의 좌표.
  category: "극값 두 점의 좌표 → 중점 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극대·극소인 점의 중점 (삼차함수의 점대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x²-6x-9=3(x+1)(x-3) → A(-1,13), B(3,-19) → 중점 (1,-3). 극값 두 점 좌표를 구해 중점 공식에 넣는 표준 절차.
    통찰 없음·벤더 중·M_total 5 → ★2. 삼차함수의 변곡점 대칭으로 중점=(1, f(1)) 임을 알면 f(1)=-3 한 번 계산으로 끝.
  tier: star_2
  mechanism_primary: "f'(x)=3(x+1)(x-3) → A(-1,13), B(3,-19) → 중점 (1,-3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,-3)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'=3(x-α)(x-β) 를 적분해 삼차식을 만들면 중점 x=(α+β)/2 · y 는 그 점의 함숫값(변곡점). 제약: α, β 정수 · 극값 정수."
    creative: "(1) 중점이 (1,-3) 임을 주고 상수항 결정(★2 · I-BW d1) (2) 선분 AB 의 길이·기울기(★2~3 · Mₖ 상승) (3) 「중점이 곡선 위에 있는가」를 묻고 변곡점 대칭으로 설명(★3 · I-SYM d2)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 16 · ★2 17 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(0433 · I-RT d2) · 절차형 32 · premium 0 — insights 가 비어 있지 않은 블록은 6(0428~0433 · d1 통찰은 유형의 표준 단계라 절차형으로 둠 · dokdu-check 의 「통찰형 6」은 이 수)
- 통찰 유형: I-EQV d1 2(0428 정의 문장 · 0429 역함수 존재) · I-RT d1 3(0430~0432 포물선 끝점) · I-RT d2 1(0433 근 위치)
- 교과서 ★2 두 문항: 0417(사차 그래프 · 임계점 셋) · 0420(정체점·분수 최소) — 통찰 없이 Mₛ 2·M_total 6. 유형 ★1 한 문항: 0422(대표문제 · M_total 4 · 교과서 0409 와 같은 골조)
- type_hint 상위: 「함수의 증가·감소 조사 (도함수 부호)」 5 · 「증가·감소 구간이 주어진 함수의 미정계수」 3 · 「주어진 구간에서 증가(감소)하기 위한 조건 (f' 포물선의 끝점 조건)」 3 · 「실수 전체에서 증가(감소)하기 위한 조건 (판별식 D ≤ 0)」 2 · 「삼차함수의 극값 구하기 (증감표)」 2 · (그 밖에 2문씩: 「사차함수의 극값 구하기 (증감표)」 · 「삼차함수의 그래프 그리기」 · 「닫힌구간에서 삼차함수의 최대·최소」 · 「닫힌구간에서 사차함수의 최대·최소 (정체점 포함)」)
- 그림: 2문(`crop:fig-0410.png` 그래프 읽기 · `crop:fig-0411.png` 증감표 이미지 — 소문항 ⑵ 안에 포함) · 소문항 문항 2문(0410 · 0411)
- 전사 답 확인 필요: 없음(33문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(2단 이상 어긋난 문항은 없음).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0417 | 교과서 구역이지만 임계점 셋·W 개형으로 Mₛ 2·Mₖ 2·M_total 6 → ★2 로 올림. 유형 구역의 같은 골조와 맞추려면 ★2, 교과서 드릴 일괄 ★1 정책이면 ★1 | ★2 / ★1 |
| RPM-CALC1-0420 | 0417 과 같은 사유(정체점·분수 최솟값 · M_total 6). 같은 골조의 0421 은 정수 계산이라 ★1 — 계산 부담(Mₖ)만으로 갈린 경우 | ★2 / ★1 |
| RPM-CALC1-0422 | 유형 01 대표문제인데 통찰 0·M_total 4 로 교과서 0409 와 골조가 같아 −1 하여 ★1. 카탈로그에서 유형 01 base ★ 를 ★1 로 둘지 ★2 로 둘지 결정 필요 | ★1 / ★2 |
| RPM-CALC1-0429 | 「역함수 존재 ⇔ 단조」 해석을 I-EQV d1 로 셌으나 함수 단원(일대일대응) 개념 결합이라 I-XU 로 볼 여지. ★ 는 어느 쪽이든 ★2 | ★2 |
| RPM-CALC1-0430 | 유형 03 의 「구간 조건 ⇔ f' 포물선 끝점」을 I-RT d1 로 셌음(0431·0432 동일). 유형 02 의 「D ≤ 0」은 절차로 본 것과 대칭이 안 맞을 수 있어 카탈로그에서 통일 결정 필요 — 절차로 보면 insights 가 비고 ★ 는 ★2 그대로 | ★2 |
| RPM-CALC1-0433 | 두 구간 조건을 근 위치 하나로 모으는 RT 를 d2 로 두어 유일한 통찰형. 카탈로그가 유형 03 base ★2 에 끝점 조건을 흡수하면 이 문항만 +1 하여 ★3 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 교과서 드릴 계열 17문 — 「함수의 증가·감소 조사」 5 · 「삼차/사차함수의 극값 구하기 (증감표)」 4 · 「그래프에서 극대·극소 읽기」 1 · 「삼차/사차함수의 그래프 그리기」 3 · 「닫힌구간에서 삼차/사차함수의 최대·최소」 4. 유형 계열 16문 — 「증가·감소 구간 구하기」 1 · 「증감 구간이 주어진 함수의 미정계수」 3 · 「실수 전체에서 증가(감소) 조건」 4(판별식 2 · 정의 문장 1 · 역함수 1) · 「주어진 구간에서 증가(감소) 조건」 4(끝점 3 · 근 위치 1) · 「극대·극소」 4(삼차 합 1 · 사차 정체점 1 · 사차 극대점 합 1 · 중점 1).
- 따로 세워야 할 유형: 「실수 전체에서 증가(감소)하기 위한 조건」 — base ★2 · 하위 골조로 「최고차항 계수 미정 → 부호 조건 추가」(0427) · 「정의 문장·역함수 존재·일대일 등 표현 변형」(0428·0429 · I-EQV d1)을 적고 후자는 +0(★2 유지). 「주어진 구간에서 증가(감소)하기 위한 조건」 — base ★2 · 「포물선 끝점 조건」(0430~0432)이 기본, 「두 구간 → 근 위치」(0433)·「꼭짓점이 구간 안에 있어 끝점만으론 부족한 반전(증가 조건)」을 +1 하위 골조로. 「증감 구간이 주어진 함수의 미정계수」 — base ★2 · 「근 하나만 주고 나머지 근 찾기」(0424)·「구간 길이 조건」(창의 변형)을 +1 로. 「삼차함수 극값의 합·극대·극소 점의 중점」 — 삼차 변곡점 대칭(0434·0437)과 사차 대칭축(0436·0417)이 반복되어 I-SYM d1 창의 변형의 원본이 되는 골조. 따로 두면 좋다.
- 통합해도 될 유형: 「삼차함수의 극값 구하기」와 「사차함수의 극값 구하기」 → 「다항함수의 극값 (증감표)」 하나로 두고 「x² 인수 정체점(0414·0435)」·「임계점 셋(0413·0436)」을 +1 조건으로. 「삼차/사차함수의 그래프 그리기」 → 「다항함수의 그래프」 하나. 「닫힌구간에서 삼차/사차 최대·최소」 → 하나로 두고 「정체점·분수(0420)」를 +1. 「함수의 증가·감소 조사」(교과서)와 「증가·감소 구간 구하기」(유형 01 · 0422)는 골조가 같으므로 한 유형 아래 발문 변형으로 흡수. 「그래프에서 극대·극소 읽기」(0410)는 별도 유형보다 극값 정의 확인 드릴(뾰족점·정체점·끝점 함정)로 두는 편이 맞다.
- ★ 갈림 메모: 교과서 ★2 두 문항(0417·0420)은 계산·단계 부담(Mₖ·Mₛ)이고 유형 ★2 는 매개변수(Mₐ 2)가 원인 — 카탈로그 base ★ 는 교과서 골조 ★1 · 유형 골조 ★2 로 두고 「정체점 · 분수 · 임계점 셋 · 최고차항 음수 부호」를 +1 조건으로 적는 편이 맞다. 유형 03 의 RT 판정은 base ★2 에 흡수하고(별도 통찰 가산 없이) 두 구간 근 위치(0433)·꼭짓점 포함 반전 변형만 ★3 로 올리는 것을 제안한다.
