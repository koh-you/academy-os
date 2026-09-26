---
name: mechanism-데이터-RPM-CALC1-07-p2
description: RPM 미적분Ⅰ 07 부정적분 (2/2 · 유형 07 f(x)와 그 부정적분의 관계식 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 07 부정적분
  unit_code: CALC1-07
  part: "2/2"
  extract_range: "101~106쪽 · 0647~0689"
  total_problems: 43
  unit_total: 84
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 07 부정적분 (2/2) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 07 부정적분 단원(84문) 가운데 101~106쪽의 43문항(0647~0689)을 다룬다. 구역은 유형 07 f(x)와 그 부정적분의 관계식이 주어질 때 f(x) 구하기(4문) · 유형 08 함수의 연속과 부정적분(4문) · 유형 09 미분계수와 부정적분(4문) · 유형 UP 10 관계식을 만족시키는 함수 구하기(3문) · 유형 UP 11 극값과 부정적분(6문) · 시험에 꼭 나오는 문제(15문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발, 유형 UP 은 ★3 출발), 나머지는 중·상중 난이도 표시(★2 · ★3 출발)와 「서술형」 태그를 가진다. 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발로 두고 d2 통찰·통찰 2개·M_total 7 이상이면 ★3, 통찰 0·M_total 4 면 ★1 로 조정했다. 서술형 주관식은 ★3, 실력 Up 은 ★4 출발이다. 「중요」「교육청/평가원 기출」 태그는 +0 이고 통찰 유무로만 조정했다. 그림 문항은 0662 · 0667 · 0677 세 문(모두 y=f'(x) 의 그래프)이며 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. Mₐ 는 구체 수치 1, 미지 다항함수·상수 매개변수 2, 함수방정식 3 으로 두었다. 이 단원의 표준 절차로 보고 통찰로 세지 않은 것: 관계식 양변 미분으로 F 소거, 미분계수 정의 변형(2f'(a) · 4f'(x) · x^3-1 분모), 구간별 적분 후 연속 조건 연립, 극값 조건 f'(α)=0. 통찰은 그 뒤에 무엇이 더 필요한가(차수 결정 · 조건 해석 · 함수방정식 → 도함수 · 경우 나눔·기각)로만 매겼다.

## 문항 데이터

### 유형 07 $f(x)$와 그 부정적분의 관계식이 주어질 때 $f(x)$ 구하기

```yaml
- id: RPM-CALC1-0647
  page: 101
  vendor_label: "유형 07 $f(x)$와 그 부정적분의 관계식이 주어질 때 $f(x)$ 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    다항함수 f 의 한 부정적분 F 가 F(x)=xf(x)+2x^3-x^2+1 을 만족하고 f(1)=2 일 때 f(x) 구하기.
  category: "관계식 양변 미분 → f 소거 → f' 결정 → 적분·초기조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 f=f+xf'+6x^2-2x 로 f 가 상쇄되고 xf'(x)=-6x^2+2x, 즉 f'(x)=-6x+2. 적분해 f(x)=-3x^2+2x+C, f(1)=2 로 C=3.
    유형의 정의 절차(F'=f 로 양변 미분) 한 갈래뿐이라 통찰 없음. M_total 6 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "F(x)=xf(x)+p(x) 양변 미분 → f 상쇄 → xf'(x)=-p'(x) → f' 적분 → f(1) 로 상수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$f(x)=-3x^2+2x+3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덧붙는 다항식 2x^3-x^2+1 의 계수와 초기조건 f(1)=2 의 값을 바꿀 수 있음. 제약: 미분 후 x 로 나눌 때 상수항이 남지 않도록 덧붙는 다항식의 일차항이 없어야 하고(있으면 f' 가 다항식이 아님), f 의 계수가 정수로 떨어지게 조정."
    creative: "(1) f(1) 대신 F(0) 값을 주어 F 까지 결정하게 하기(★2 유지) (2) 좌변을 F(x)=(x+1)f(x)+… 로 두어 (x+1)f'(x)=… 에서 인수분해가 필요하게 하기(★2~3) (3) f 의 차수가 미지인 채 최고차 계수를 묻게 하면 차수 비교 통찰(BW d1) 추가 ★3."
```

```yaml
- id: RPM-CALC1-0648
  page: 101
  vendor_label: "유형 07 $f(x)$와 그 부정적분의 관계식이 주어질 때 $f(x)$ 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    F'=f 이고 ∫(x-2)f(x)dx+2F(x)=-x^4/2+8x^3/3+x^2+C 일 때 f(x) 의 최댓값.
  category: "관계식 양변 미분 → xf(x) 정리 → 이차함수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 미분하면 (x-2)f(x)+2f(x)=xf(x)=-2x^3+8x^2+2x, 즉 f(x)=-2x^2+8x+2. 꼭짓점 x=2 에서 최댓값 10.
    적분 기호가 두 개 보여도 미분 한 번으로 f 가 바로 나오고 초기조건도 필요 없다. 통찰 없음·M_total 6 → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫(x-2)f dx+2F 양변 미분 → (x-2)f+2f=xf → f 결정 → 이차함수 꼭짓점 최댓값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식과 (x-2)·2F 의 계수를 바꿀 수 있음. 제약: 미분 후 f 의 계수가 (x-a)+a 처럼 x 하나로 묶여야 하고, f 가 위로 볼록(최댓값 존재)이 되도록 우변 사차항 계수는 음수·최댓값이 정수로 떨어지게."
    creative: "(1) 최댓값 대신 f(x)=0 의 두 근의 합·곱 묻기(★2) (2) 우변에 x^5 을 넣어 f 가 삼차가 되게 하고 극댓값을 묻기(극값 유형과 결합 ★3) (3) 계수 (x-2)·2 대신 (x-a)·b 를 미지수로 두고 f 가 x 로 묶이는 조건을 묻기(BW d1 ★3)."
```

```yaml
- id: RPM-CALC1-0649
  page: 101
  vendor_label: "유형 07 $f(x)$와 그 부정적분의 관계식이 주어질 때 $f(x)$ 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    F'=f 이고 (x-1)f(x)-F(x)=4x^3-6x^2, f(1)=2 일 때 f(-2) 의 값.
  category: "관계식 양변 미분 → (x-1)f' 인수분해 → 적분·초기조건 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분하면 f+(x-1)f'-f=12x^2-12x=12x(x-1) 이므로 f'(x)=12x. 적분해 f(x)=6x^2+C, f(1)=2 로 C=-4, f(-2)=20.
    0647 과 같은 골조에 (x-1) 약분이 한 번 더 있을 뿐. 통찰 없음·M_total 6 → ★2. 서술형 태그는 +0.
  tier: star_2
  mechanism_primary: "(x-1)f-F 양변 미분 → f 상쇄 → (x-1)f'=12x(x-1) → f'=12x → 적분·f(1) → f(-2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 4x^3-6x^2 과 (x-1) 인수, f(1) 값을 바꿀 수 있음. 제약: 우변의 도함수가 반드시 (x-1) 을 인수로 가져야 약분이 됨(그렇지 않으면 다항함수 f 가 존재하지 않음). 답이 정수가 되게 C 조정."
    creative: "(1) f(-2) 대신 F(0) 을 묻기(F 를 관계식으로 되돌려 구하는 단계 추가 ★2) (2) 우변을 매개변수 a 로 두고 「다항함수 f 가 존재하기 위한 a」를 묻기(약분 조건 해석 EQV d2 ★3) (3) 서술형으로 「양변을 미분해도 되는 이유(F'=f)」를 쓰게 하기(★2)."
```

```yaml
- id: RPM-CALC1-0650
  page: 101
  vendor_label: "유형 07 $f(x)$와 그 부정적분의 관계식이 주어질 때 $f(x)$ 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)+∫xf(x)dx=x^4/4+2x^3/3-5x^2/2+2x 일 때 f(3) 의 값. 5지선다.
  category: "관계식 양변 미분 → f'+xf 꼴 → 차수 결정 → 계수 비교 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분 후 f'(x)+xf(x)=x^3+2x^2-5x+2 에서 xf 가 최고차이므로 f 는 이차임을 먼저 확정(차수 결정)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 미분하면 f'(x)+xf(x)=x^3+2x^2-5x+2. f 가 상쇄되지 않고 f' 와 xf 가 섞여 있어 바로 f 를 얻지 못하고, 차수 비교(f 이차)를 거쳐 f=ax^2+bx+c 로 놓고 계수 비교 a=1, b=2, c+2a=-5 → f(x)=x^2+2x-7, f(3)=8.
    차수 결정이 한 단계 더 필요한 점이 0647~0649 와 다르다(BW d1). M_total 7 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f+∫xf dx 양변 미분 → f'+xf=p(x) → 차수 비교로 f 이차 → 미정계수 비교 → f(3)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(사차)의 계수를 바꿀 수 있음. 제약: 우변을 미분한 삼차식이 xf(x)+f'(x) 꼴로 정확히 맞아야 하므로 먼저 f=ax^2+bx+c 를 정해 놓고 우변을 역산(정수 계수 유지). 선택지는 f(3) 근처 정수."
    creative: "(1) ∫xf dx 대신 ∫x^2 f dx 로 바꾸면 f 는 일차가 되어 오히려 쉬워짐(★2) (2) f(x)+∫f(x)dx=… 처럼 x 곱이 없으면 차수가 같아 최고차 계수 비교만으로 결정(★2) (3) 우변 최고차 계수를 k 로 두고 「f 가 다항함수가 되는 k」를 묻기(BW d2 ★3~4)."
```

### 유형 08 함수의 연속과 부정적분

```yaml
- id: RPM-CALC1-0651
  page: 101
  vendor_label: "유형 08 함수의 연속과 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수에서 연속인 f 의 도함수가 x>0 에서 2x-1, x<0 에서 -x^2+4 이고 f(2)=-4 일 때 f(-3) 의 값.
  category: "구간별 적분 → 주어진 값으로 한쪽 상수 → 연속으로 다른 쪽 상수 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 에서 f=x^2-x+C1, f(2)=-4 로 C1=-6. x<0 에서 f=-x^3/3+4x+C2, x=0 에서 연속이므로 C2=C1=-6. f(-3)=9-12-6=-9.
    연속 조건으로 두 적분상수를 잇는 유형의 기본 절차뿐. M_total 5 이지만 유형 기본 절차(상수 두 개 연립)가 남아 있어 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "구간별 f' 적분(상수 C1, C2) → f(2) 로 C1 → x=0 연속으로 C2=C1 → f(-3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-9$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간별 도함수 식, 접점(0), 주어진 함숫값의 위치와 값, 묻는 점을 바꿀 수 있음. 제약: 접점이 0 이 아니면 연속 조건이 C2=C1 이 아니라 두 식의 접점 값 등식이 되므로 계산이 늘어남. 값은 정수·간단한 분수."
    creative: "(1) 접점을 0 이 아닌 x=1 로 옮겨 연속 등식 계산을 요구하기(★2) (2) 조건을 「미분가능」으로 바꾸고 접점에서 f' 좌우가 다르면 모순임을 묻는 ㄱㄴㄷ(EQV d2 ★3) (3) 구간을 세 개로 늘려 연속 조건을 두 번 사슬로 쓰기(0678 골조 ★3)."
```

```yaml
- id: RPM-CALC1-0652
  page: 101
  vendor_label: "유형 08 함수의 연속과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 전체에서 미분가능한 f 의 도함수가 x≥1 에서 2x+2, x≤1 에서 3x^2+1 일 때 f(0)-f(2) 의 값(함숫값 조건 없음).
  category: "구간별 적분 → 연속으로 상수 관계 → 차에서 상수 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "함숫값 조건이 없어 상수를 확정할 수 없지만, f(0)-f(2) 를 C2-(7+C2) 로 쓰면 상수가 소거됨을 읽어야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥1: f=x^2+2x+C1, x≤1: f=x^3+x+C2. x=1 연속으로 3+C1=2+C2, C1=C2-1. f(0)=C2, f(2)=8+C1=7+C2 이므로 차는 -7.
    함숫값 조건이 하나도 없는 것이 함정이자 착안점(차에서 상수가 사라짐, EQV d1). M_total 5·통찰 d1 → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "구간별 적분(C1, C2) → x=1 연속으로 C1=C2-1 → f(0)-f(2) 계산에서 C2 소거 → -7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-7$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간별 도함수·접점 1·묻는 두 점을 바꿀 수 있음. 제약: 두 점이 서로 다른 구간에 있어야 연속 조건이 실제로 쓰이고, 답은 상수에 무관하므로 어떤 값도 주지 않는 설정을 유지."
    creative: "(1) 두 점을 같은 구간에 두면 연속 조건이 불필요해져 ★1 (2) 「f(0)-f(2) 의 값이 정해지는 이유」를 서술하게 하기(★2) (3) 접점에서 도함수 좌우 값이 다르게 주고 「미분가능」 조건과 모순임을 찾게 하기(EQV d2 ★3)."
```

```yaml
- id: RPM-CALC1-0653
  page: 101
  vendor_label: "유형 08 함수의 연속과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 f 의 도함수가 f'(x)=x^2-|x| 이고 f(1)=0 일 때 f(-2)+f(2) 의 값.
  category: "절댓값 구간 분할 → 구간별 적분 → f(1) 과 연속으로 상수 → 두 값 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥0: f'=x^2-x, f=x^3/3-x^2/2+C1, f(1)=0 으로 C1=1/6. x<0: f'=x^2+x, f=x^3/3+x^2/2+C2, x=0 연속으로 C2=1/6. f(2)=5/6, f(-2)=-1/2, 합 1/3.
    절댓값을 구간으로 나누는 것은 표준 분기(T-부호)이고 나머지는 0651 골조. 분수 계산 부담으로 Mk 2. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "|x| 구간 분할 → 구간별 적분 → f(1) 로 C1 → x=0 연속으로 C2 → f(-2)+f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 식(x^2-|x|, |x|-1, x|x| 등)과 초기조건·묻는 점을 바꿀 수 있음. 제약: 절댓값 경계에서 f' 가 연속이면 접점 처리가 깔끔하고, 분수가 커지지 않게 계수 선택."
    creative: "(1) f'=x|x| 처럼 짝·홀 대칭을 주고 f(-2)+f(2) 에서 대칭으로 계산을 줄이기(SYM d1 ★2~3) (2) f' 에 |x-1| 을 넣어 접점을 이동(★2) (3) 「f(-2)+f(2) 의 값이 f(1) 에 의존하는가」를 묻는 ㄱㄴㄷ(EQV d1 ★2)."
```

```yaml
- id: RPM-CALC1-0654
  page: 101
  vendor_label: "유형 08 함수의 연속과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 f 의 도함수가 x>1 에서 2x+k, x<1 에서 6 이고 f(0)=-2, f(2)=6 일 때 k+f(1) 의 값(k 상수).
  category: "구간별 적분 → f(0) 로 왼쪽 상수 → 연속·f(2) 두 조건 연립으로 k, C → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x<1: f=6x+C2, f(0)=-2 로 C2=-2, f(1)=4. x>1: f=x^2+kx+C1, 연속 1+k+C1=4 와 f(2)=4+2k+C1=6 을 빼면 k=-1, C1=4. k+f(1)=3.
    미지수가 상수 k 로 하나 늘어 연립이 되지만 절차는 같다(Ma 2). 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "구간별 적분 → f(0) 로 C2·f(1) → 연속 등식과 f(2) 연립 → k, C1 → k+f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽 상수 도함수 6, 오른쪽 2x+k, 두 함숫값 조건을 바꿀 수 있음. 제약: 미지수 3개(k, C1, C2)에 조건 3개(두 함숫값 + 연속)가 정확히 맞아야 하고, 정수해가 되게 역산."
    creative: "(1) k 를 오른쪽이 아니라 왼쪽 상수 도함수에 두기(★2) (2) 조건 「미분가능」으로 바꿔 접점에서 f' 도 이어지게 하면 k 가 먼저 결정되고 함숫값 조건이 하나 남아도 됨(EQV d1 ★2~3) (3) 함숫값 조건 하나를 「f(x)=0 이 x=1 에서 근을 가진다」처럼 간접 조건으로 바꾸기(★3)."
```

### 유형 09 미분계수와 부정적분

```yaml
- id: RPM-CALC1-0655
  page: 102
  vendor_label: "유형 09 미분계수와 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫(x^3-2x+2)dx 일 때 lim_{h→0} {f(-2+h)-f(-2-h)}/h 의 값.
  category: "피적분함수 = f' → 미분계수 정의 변형(2f'(-2)) → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f 를 적분할 필요 없이 f'(x)=x^3-2x+2 이고, 극한은 2f'(-2)=2(-8+4+2)=-4.
    미분계수 정의 변형(h, -h 양쪽 → 2f')은 02단원의 표준 절차. 통찰 0·M_total 4 → 대표 출발점 ★2 에서 -1 → ★1.
  tier: star_1
  mechanism_primary: "f=∫g dx → f'=g → {f(a+h)-f(a-h)}/h → 2f'(a) → 2g(-2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수와 점 -2, 극한식의 계수(f(a+2h)-f(a-h) → 3f'(a) 등)를 바꿀 수 있음. 제약: 극한식의 h 계수 합이 f' 의 배수로 정확히 떨어져야 하고 값은 정수."
    creative: "(1) 분모를 h^2 이 아닌 x-a 꼴로 바꿔 x→a 극한으로(★1) (2) f 가 ∫(피적분)dx 가 아니라 「f'=…」 로 주면 같은 ★1 이므로, 대신 ∫ 안에 미지 상수 k 를 넣고 극한값으로 k 결정(0656 골조 ★2) (3) 극한식 분모에 h^3-h 처럼 인수분해가 필요한 식을 두기(★2)."
```

```yaml
- id: RPM-CALC1-0656
  page: 102
  vendor_label: "유형 09 미분계수와 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫(x^2-2x+k)dx, f(0)=3, lim_{x→-2} {f(x)-f(-2)}/(x+2)=4 일 때 f(3) 의 값. 5지선다.
  category: "극한 = f'(-2) → k 결정 → 적분·f(0) 로 상수 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한은 f'(-2)=4+4+k=4 이므로 k=-4. f=x^3/3-x^2-4x+C, f(0)=3 으로 C=3. f(3)=9-9-12+3=-9.
    미분계수 정의 그대로에 상수 k 결정이 붙은 표준 흐름. 통찰 없음·M_total 6 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "극한 = f'(-2) → 피적분함수에 대입해 k → 적분 → f(0) 로 C → f(3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 계수·k 의 위치, 극한의 점(-2)과 값, f(0) 값을 바꿀 수 있음. 제약: f(3) 이 정수(삼차항 x^3/3 은 3 의 배수에서 정수)이고 선택지 간격 유지."
    creative: "(1) 극한식을 {f(-2+h)-f(-2-h)}/h 꼴로 바꿔 2f' 함정 추가(★2) (2) 두 극한 조건을 주고 피적분함수의 미지 계수 두 개를 결정(연립 ★2~3) (3) 극한값 대신 「곡선 y=f(x) 의 x=-2 에서의 접선의 기울기」로 표현을 바꿔 RT d1 추가(★2)."
```

```yaml
- id: RPM-CALC1-0657
  page: 102
  vendor_label: "유형 09 미분계수와 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{h→0} {f(x+3h)-f(x-h)}/h=12x^2+8x-8 이고 f(1)=3 일 때 f(-1) 의 값.
  category: "극한식 = 4f'(x) → f' 결정 → 적분·f(1) 로 상수 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 3f'(x)+f'(x)=4f'(x) 이므로 f'(x)=3x^2+2x-2. 적분해 f=x^3+x^2-2x+C, f(1)=3 으로 C=3, f(-1)=5.
    극한식을 4f'(x) 로 읽는 것(계수 3+1, T-표기)이 유일한 관문이고 이는 표준 변형. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "{f(x+3h)-f(x-h)}/h → 4f'(x) → f' 결정 → 적분 → f(1) 로 C → f(-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "h 계수(3h, -h → 합 4)와 우변 다항식, f(1) 값·묻는 점을 바꿀 수 있음. 제약: 우변이 (계수 합)의 배수로 나누어떨어져 f' 가 정수 계수가 되게 하고, 답은 정수."
    creative: "(1) 분모를 2h 로 두거나 f(x-2h) 로 부호를 바꿔 계수 함정 강화(★2) (2) 우변을 f 가 아닌 「f'(x)의 그래프가 x축과 만나는 점」 정보로 주기(RT d1 ★3) (3) 극한 대신 「x=1 에서 f 의 극값 조건」을 덧붙여 미지 계수를 결정(극값 유형과 결합 ★3)."
```

```yaml
- id: RPM-CALC1-0658
  page: 102
  vendor_label: "유형 09 미분계수와 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=2x+a 이고 lim_{x→1} f(x)/(x-1)=2a-1 일 때 a+f(2) 의 값(a 상수).
  category: "극한 존재 → f(1)=0 과 f'(1)=2a-1 → a 결정 → 적분·f(1)=0 으로 상수 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 → 0 인 극한이 존재하므로 f(1)=0 이고, 그때 극한값이 f'(1) 이라는 두 등식으로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (나)에서 f(1)=0, f'(1)=2+a=2a-1 이므로 a=3. f=x^2+3x+C, f(1)=0 으로 C=-4, f(2)=6, a+f(2)=9.
    「극한 존재 → 분자 0 + 미분계수」 해석(EQV d1)이 관문이고 이후는 계산. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "lim f(x)/(x-1) 존재 → f(1)=0, f'(1)=극한값 → a → f' 적분 → f(1)=0 으로 C → a+f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 식, 극한의 점 1 과 극한값(a 의 일차식)을 바꿀 수 있음. 제약: f'(1) 과 극한값의 등식이 a 에 대해 일차·유일해가 되어야 하고 답은 정수."
    creative: "(1) 극한값을 a 와 무관한 상수로 주면 EQV 는 남고 계산만 줄어 ★2 (2) 극한을 lim_{x→1} f(x)/(x^2-1) 로 바꿔 분모 인수분해 추가(★2) (3) (가) 를 f'' 정보 대신 「f' 의 그래프가 점 (0, a) 를 지난다」로 표현 전환(RT d1 ★2~3)."
```

### 유형 UP 10 관계식을 만족시키는 함수 구하기

```yaml
- id: RPM-CALC1-0659
  page: 102
  vendor_label: "유형 UP 10 관계식을 만족시키는 함수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    미분가능한 f 가 모든 실수 x, y 에 대해 f(x+y)=f(x)+f(y)-2xy 를 만족하고 f'(1)=2 일 때 f(3) 의 값. 5지선다.
  category: "x=y=0 으로 f(0) → 도함수 정의에 관계식 대입 → f'(x)=f'(0)-2x → f'(1) 로 f'(0) → 적분"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함수방정식을 도함수의 정의 lim {f(x+h)-f(x)}/h 에 넣어 f(x+h)=f(x)+f(h)-2xh 로 풀면 f'(x)=f'(0)-2x 라는 도함수 식으로 바뀜(함수방정식 → 미분 관계식 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y) 의 미분(도함수 정의)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=y=0 에서 f(0)=0. f'(x)=lim {f(h)-2xh}/h=f'(0)-2x, f'(1)=f'(0)-2=2 로 f'(0)=4. f=4x-x^2+C, f(0)=0 → f(3)=3.
    함수방정식을 도함수 정의로 옮기는 전환(RT d2)이 유형 UP 의 핵심이며 f(0)=0 확인이 그 전제. Ma 3·M_total 7 → 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f(x+y)=f(x)+f(y)-2xy → f(0)=0 → 도함수 정의로 f'(x)=f'(0)-2x → f'(1) 로 f'(0) → 적분·f(0) → f(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덧붙는 항 -2xy 의 계수, 미분계수 조건 f'(1)=2 의 점·값, 묻는 점을 바꿀 수 있음. 제약: 덧붙는 항은 xy 의 상수배(x^2 y+xy^2 처럼 대칭식이면 0661 골조)여야 하고 f(0) 이 x=y=0 대입으로 결정돼야 함."
    creative: "(1) f'(1) 대신 lim_{h→0} f(h)/h=4 로 f'(0) 을 직접 주기(★3 유지) (2) 덧붙는 항을 xy(x+y) 로 바꾸면 f' 가 이차가 되어 계산·차수 상승(★3) (3) 「f 가 미분가능」 조건 없이 다항함수로만 주고 f 의 차수를 먼저 판단하게 하기(BW d2 추가 ★4)."
```

```yaml
- id: RPM-CALC1-0660
  page: 102
  vendor_label: "유형 UP 10 관계식을 만족시키는 함수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    다항함수 f 가 (가) lim_{h→0} {f(h)+1}/h=2, (나) f(x+y)=f(x)+f(y)+xy+1 을 만족할 때 f(x) 구하기.
  category: "(가) 에서 f(0)=-1, f'(0)=2 → 도함수 정의에 (나) 대입 → f'(x)=2+x → 적분·f(0)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+h)-f(x)=f(h)+xh+1 로 정리한 뒤 (가) 의 극한을 그대로 써서 f'(x)=2+x 로 전환(함수방정식 → 도함수 식)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y) 의 미분(도함수 정의)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (가) 는 분모 → 0 이므로 f(0)=-1 이고 극한값 2 가 곧 lim {f(h)-f(0)}/h=f'(0). (나) 로 f'(x)=lim {f(h)+1+xh}/h=2+x. 적분해 f=x^2/2+2x+C, f(0)=-1.
    0659 와 같은 골조에 (가) 가 f(0) 과 f'(0) 을 동시에 담고 있다는 읽기가 추가되지만 한 단계 안의 일이라 RT d2 하나로 둠. 유형 UP 「중」 ★3.
  tier: star_3
  mechanism_primary: "(가) → f(0)=-1, f'(0)=2 → (나) 를 도함수 정의에 대입 → f'(x)=x+2 → 적분·f(0) → f(x)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f(x)=\dfrac{1}{2}x^2+2x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(가) 의 극한값과 상수 +1, (나) 의 덧붙는 항 xy+1 의 계수를 바꿀 수 있음. 제약: (나) 에 x=y=0 을 넣어 얻는 f(0) 과 (가) 의 분자 → 0 조건이 같은 값이어야 함(모순 없이 역산)."
    creative: "(1) (가) 를 f'(0)=2 로 바로 주고 f(0) 은 (나) 에서 구하게 하기(★3 유지) (2) 답으로 f(x) 대신 f(x)=0 의 근의 합 등 파생값 묻기(★3) (3) 덧붙는 항을 xy(x+y)+1 로 바꿔 f' 이차·f 삼차(★3, 계산 상승)."
```

```yaml
- id: RPM-CALC1-0661
  page: 102
  vendor_label: "유형 UP 10 관계식을 만족시키는 함수 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    미분가능한 f 가 f(x+y)=f(x)+f(y)+x^2y+xy^2-3 을 만족하고 f'(0)=3 일 때 f(2) 의 값. 5지선다.
  category: "x=y=0 으로 f(0)=3 → 도함수 정의에 대입 → f'(x)=x^2+f'(0) → 적분·f(0) → 대입"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+h)-f(x)=f(h)+x^2h+xh^2-3 을 h 로 나누고 h→0 하면 xh 항은 사라지고 {f(h)-3}/h → f'(0) 이 남아 f'(x)=x^2+3 으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y) 의 미분(도함수 정의)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=y=0 에서 f(0)=2f(0)-3 이므로 f(0)=3. f'(x)=lim [{f(h)-3}/h+x^2+xh]=f'(0)+x^2=x^2+3. f=x^3/3+3x+C, f(0)=3 → f(2)=8/3+9=35/3.
    골조는 0659 와 같고, f(0)≠0 이라 {f(h)-f(0)}/h 로 맞춰 읽어야 하는 점과 xh^2 항 처리·분수 답으로 계산 부담이 큼. RT d2·M_total 8 → 「상중」 ★3 유지.
  tier: star_3
  mechanism_primary: "f(x+y) 관계식 → f(0)=3 → 도함수 정의로 f'(x)=x^2+f'(0) → 적분·f(0) → f(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덧붙는 항 x^2y+xy^2 의 계수와 상수 -3, f'(0) 값, 묻는 점을 바꿀 수 있음. 제약: 덧붙는 항은 x, y 대칭식이어야 f(x+y)=f(y+x) 가 모순 없고, 상수항 c 는 f(0)=-c 를 만든다. 선택지는 분수 간격 1/3."
    creative: "(1) f'(0) 대신 f'(1) 을 주어 f'(0) 을 역산하게 하기(★3) (2) 덧붙는 항을 3x^2y+3xy^2 으로 두어 f(x)=x^3+… 의 세제곱 전개와 연결되는지 묻기(SYM d1 추가 ★3~4) (3) 다항함수 조건만 주고 「f 의 차수와 최고차 계수」를 먼저 판정하게 하기(BW d2 ★4)."
```

### 유형 UP 11 극값과 부정적분

```yaml
- id: RPM-CALC1-0662
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    삼차함수 f 의 도함수 y=f'(x) 의 그래프(위로 볼록, x=-2, 0 에서 x축과 만남)가 주어지고 극솟값 -1, 극댓값 3 일 때 f(-1) 의 값. 5지선다.
  category: "그래프 → f'(x)=-kx(x+2) → 극소 x=-2·극대 x=0 → 적분 → 두 극값으로 k, C → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 x절편 -2, 0 과 위로 볼록 모양을 f'(x)=-kx(x+2) (k>0) 라는 인수형 식으로 옮김(최고차 계수 미정)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=-kx(x+2), f' 의 부호가 -2 에서 -→+ 이므로 극소, 0 에서 +→- 이므로 극대. f=-k(x^3/3+x^2)+C, f(0)=C=3, f(-2)=-4k/3+3=-1 로 k=3. f=-x^3-3x^2+3, f(-1)=1.
    그래프를 미정 계수 인수형으로 읽는 RT d1 이 관문이고, 극값 위치 판정과 연립은 표준. M_total 6 → 유형 UP 대표 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "y=f'(x) 그래프 → f'=-kx(x+2) → 극소(-2)·극대(0) 배정 → 적분 → f(0)=3, f(-2)=-1 로 k, C → f(-1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0662.png"
  latex: latex-bank/rpm-calc1/items/0662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x절편(-2, 0)과 두 극값(-1, 3), 묻는 점을 바꿀 수 있음. 제약: 그림 라벨(절편)을 바꾸면 크롭 그림을 다시 그려야 함. 극댓값-극솟값 = k·(구간 적분)이므로 k 가 양의 정수가 되게 두 극값 차를 맞춤. 위로 볼록 → 극소가 왼쪽에 옴."
    creative: "(1) 그림을 아래로 볼록으로 뒤집으면 극대·극소 위치가 바뀜(T-부호 강화 ★3) (2) 극값 두 개 대신 「극댓값과 극솟값의 차가 4」로 주면 C 가 남아 f(-1) 은 못 구하고 f(-1)-f(1) 을 묻기(EQV d1 추가 ★3) (3) 그림 없이 「f'(-2)=f'(0)=0, f'(-1)>0」 문장 조건으로 바꾸면 RT 소거·★3 유지."
```

```yaml
- id: RPM-CALC1-0663
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    곡선 y=f(x) 의 각 점에서의 접선의 기울기가 x^2+2x-8 이고 극솟값이 -8 일 때 극댓값.
  category: "접선 기울기 = f' → 인수분해로 극소 x=2·극대 x=-4 → 적분 → 극솟값으로 C → 극댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=(x+4)(x-2) 이므로 극대 x=-4, 극소 x=2. f=x^3/3+x^2-8x+C, f(2)=-28/3+C=-8 로 C=4/3. f(-4)=-64/3+16+32+4/3=28.
    「접선의 기울기 = 도함수」 치환은 표준이고 나머지는 극값 유형 기본 절차. 분수 상수 처리로 Mk 2. 통찰 없음이지만 M_total 6 이라 유형 UP 「중」 출발점 ★3 유지(내용상 ★2~3 경계).
  tier: star_3
  mechanism_primary: "f'=x^2+2x-8 → 극대(-4)·극소(2) → 적분 → f(2)=-8 로 C → f(-4)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$28$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 두 근(-4, 2)과 극솟값을 바꿀 수 있음. 제약: 두 근이 정수이고 극댓값-극솟값 = (근 차)^3/6 이 정수가 되게(근 차가 6 의 배수 또는 계수 조정)."
    creative: "(1) 극솟값 대신 「곡선이 점 (1, 0) 을 지난다」로 C 를 주기(★2~3) (2) 극댓값이 극솟값의 몇 배라는 비율 조건으로 바꾸기(0664 골조 ★3) (3) 기울기를 (x-a)(x-b) 로 두고 「극댓값-극솟값=36 인 a, b」 조건을 묻기(EQV d2 ★4)."
```

```yaml
- id: RPM-CALC1-0664
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f'(x)=-x(x-4) 이고 극댓값이 극솟값의 5/3 배일 때 f(3) 의 값. 5지선다.
  category: "f' 부호로 극소 x=0·극대 x=4 → 적분(C) → 극값 비율식으로 C → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=-x^2+4x 는 0 에서 -→+(극소), 4 에서 +→-(극대). f=-x^3/3+2x^2+C, 극솟값 C, 극댓값 32/3+C. 32/3+C=5C/3 → C=16. f(3)=-9+18+16=25.
    극값을 C 의 식으로 두고 비율 조건을 방정식으로 푸는 것이 전부. 통찰 없음·M_total 6 → 유형 UP 「중」 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=-x(x-4) → 극소(0)·극대(4) → 적분 → 극댓값=(5/3)극솟값 → C → f(3)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 근(0, 4)과 비율 5/3, 묻는 점을 바꿀 수 있음. 제약: 비율식이 C 에 대해 일차·유일해이고 극솟값 C 의 부호가 비율 조건과 모순되지 않게(양수 유지)."
    creative: "(1) 비율 대신 「극댓값+극솟값=0」(대칭 조건, SYM d1 ★3) (2) 극솟값이 음수가 되는 비율을 주고 부호 함정 만들기(T-부호 ★3) (3) f' 를 -x(x-a) 로 두고 「극댓값이 극솟값의 2배가 되는 a」를 묻기(a^3 방정식 ★3~4)."
```

```yaml
- id: RPM-CALC1-0665
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    최고차 계수 2 인 삼차함수 f 가 f'(-1)=f'(3)=0 이고 극댓값이 24 일 때 극솟값. 5지선다.
  category: "f'=6(x+1)(x-3) 세우기 → 극대 x=-1·극소 x=3 → 적분 → 극댓값으로 C → 극솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최고차 계수 2 → f' 최고차 6 이므로 f'=6(x+1)(x-3)=6x^2-12x-18. f=2x^3-6x^2-18x+C, 극대 x=-1: 10+C=24 → C=14. 극소 f(3)=-54+14=-40.
    f' 를 근으로 세울 때 최고차 계수 6 을 빠뜨리는 함정(T-표기) 하나. 통찰 없음·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "최고차 2·f'(-1)=f'(3)=0 → f'=6(x+1)(x-3) → 적분 → f(-1)=24 로 C → f(3)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 계수, f' 의 두 근, 극댓값을 바꿀 수 있음. 제약: 극댓값-극솟값 = (최고차 계수)·(근 차)^3/2 이 되므로 정수가 되게 근 차를 짝수로."
    creative: "(1) 극댓값 대신 f(0) 을 주고 극댓값·극솟값의 합을 묻기(★3) (2) 최고차 계수를 a 로 두고 「극댓값-극솟값=32」에서 a 를 묻기(★3) (3) 「f'(x) 가 x^2-2x-3 과 같은 근」처럼 표현을 바꿔 RT d1 추가(★3)."
```

```yaml
- id: RPM-CALC1-0666
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    f'(x)=(x+1)(3x-1) 이고 y=f(x) 의 그래프가 x축에 접하며 극댓값이 양수일 때 f(-1/3) 의 값.
  category: "적분(C) → 극댓값·극솟값을 C 로 표현 → x축 접함 = 극값 중 하나가 0 → 극댓값 양수로 경우 선택 → 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「그래프가 x축에 접한다」를 「극댓값 또는 극솟값이 0」이라는 두 경우의 조건으로 해석"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극댓값=0 인 경우는 「극댓값이 양수」 조건에 위배되어 기각하고 극솟값=0 (C=5/27) 만 채택"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f=x^3+x^2-x+C, 극대 x=-1 에서 1+C, 극소 x=1/3 에서 -5/27+C. x축 접함 → 1+C=0 또는 -5/27+C=0. 앞은 극댓값 0 이라 기각, C=5/27. f(-1/3)=(-1+3+9+5)/27=16/27.
    「x축에 접한다 → 극값이 0」 해석(EQV d2)과 양수 조건 기각(VF d1)이 통찰 2개. 기각이 즉시라 +1 은 보류하고 「상중」 출발점 ★3 유지. 분수 27 분모 계산으로 Mk 2.
  tier: star_3
  mechanism_primary: "f' 적분(C) → 극값 두 개를 C 식으로 → x축 접함 ⇒ 극값=0 두 경우 → 극댓값>0 으로 한 경우 기각 → C → f(-1/3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{16}{27}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 두 근과 묻는 점을 바꿀 수 있음. 제약: 두 극값이 C 에 대해 서로 다른 상수 차를 가져야 두 경우가 구별되고, 「극댓값 양수」 조건이 정확히 한 경우만 남기게 부호 확인. 분모가 커지지 않게 근을 정수·1/3 정도로."
    creative: "(1) 「극댓값이 양수」 조건을 빼고 f(-1/3) 의 값을 모두 구하게 하면 MI 로 바뀌고 두 답(★3) (2) x축 접함 대신 「직선 y=1 에 접한다」로 바꾸면 극값=1 로 같은 골조(★3) (3) 「방정식 f(x)=0 이 서로 다른 두 실근」으로 조건을 다시 쓰면 EQV 가 한 단 깊어짐(d3 후보 ★4, 0689 골조)."
```

```yaml
- id: RPM-CALC1-0667
  page: 103
  vendor_label: "유형 UP 11 극값과 부정적분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    이차함수 f' 의 그래프(x=-1, 1 에서 x축과 만나고 꼭짓점 (0, -2))가 주어지고 f(0)=0 일 때, 방정식 f(x)=k 가 서로 다른 세 실근을 갖는 k 의 범위.
  category: "그래프 → f'=2x^2-2 → 적분·f(0)=0 → 극댓값·극솟값 → 세 실근 ⇔ 극솟값<k<극댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 x절편 ±1 과 꼭짓점 (0, -2) 를 f'(x)=2(x^2-1) 이라는 식으로 옮김(꼭짓점 값으로 최고차 계수 확정)"
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식 f(x)=k 의 실근 개수를 y=f(x) 와 y=k 의 교점 개수로 바꿔 극솟값<k<극댓값 으로 읽음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=2x^2-2, f=2x^3/3-2x (f(0)=0). 극대 f(-1)=4/3, 극소 f(1)=-4/3. 세 실근 ⇔ -4/3<k<4/3.
    그래프 → 식(계수 2 는 꼭짓점 -2 로), 방정식 → 그래프 교점의 두 표현 전환이 각각 d1. 둘 다 표준에 가까워 +1 은 보류, 「상중」 ★3.
  tier: star_3
  mechanism_primary: "y=f'(x) 그래프 → f'=2(x-1)(x+1) → 적분·f(0)=0 → 극값 ±4/3 → f(x)=k 세 실근 ⇔ -4/3<k<4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{4}{3}<k<\dfrac{4}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0667.png"
  latex: latex-bank/rpm-calc1/items/0667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 값(-2)과 x절편(±1), f(0) 값을 바꿀 수 있음. 제약: 그림 라벨 고정(바꾸면 크롭 재작성). 원점 대칭인 f' 가 우함수라 f 는 기함수(f(0)=0) → 극값이 ±로 대칭. f(0)≠0 이면 범위가 평행이동."
    creative: "(1) 세 실근 대신 「서로 다른 두 실근」(k=±4/3)이나 「한 실근」으로 바꾸기(★3) (2) 조건을 f(0)=0 대신 「f(x)=0 이 삼중근 아닌 세 실근」으로 주면 EQV d2 추가(★4) (3) f' 의 그래프가 우함수임을 이용해 f 가 기함수 → 극댓값=-극솟값 즉시(SYM d1 ★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0668
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f 의 한 부정적분 F(x)=x^3-2x^2+1 과 또 다른 부정적분 G 가 G(0)=2 를 만족할 때 G(2) 의 값.
  category: "두 부정적분은 상수 차 → G=F+C → G(0) 으로 C → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계(∫d/dx · d/dx∫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    G(x)=F(x)+C, G(0)=1+C=2 로 C=1. G(2)=8-8+1+1=2.
    부정적분끼리 상수만 다르다는 정의 확인 한 단계. 통찰 0·M_total 4 → ★2 출발점에서 -1 → ★1.
  tier: star_1
  mechanism_primary: "F, G 모두 f 의 부정적분 → G=F+C → G(0)=2 로 C=1 → G(2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "F 의 식과 G(0) 값, 묻는 점을 바꿀 수 있음. 제약: F(0) 과 G(0) 차가 정수이고 답이 정수."
    creative: "(1) G(0) 대신 「G(1)-F(1)=3」처럼 차를 주기(★1) (2) F 를 그래프로 주고 G 의 그래프를 고르는 문항(RT d1 ★2) (3) 「F(x)-G(x) 가 상수인 이유」 서술(★1~2)."
```

```yaml
- id: RPM-CALC1-0669
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    d/dx {∫xf(x)dx}=x^4+x^3+x^2+x 일 때 f(3) 의 값. 5지선다.
  category: "d/dx∫ 는 원함수 → xf(x)=우변 → x 로 나눔 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계(∫d/dx · d/dx∫)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    xf(x)=x^4+x^3+x^2+x 이므로 f(x)=x^3+x^2+x+1, f(3)=40.
    d/dx∫ 가 항등임을 알면 나눗셈 한 번. 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "d/dx{∫xf dx}=xf → xf=x^4+x^3+x^2+x → f=x^3+x^2+x+1 → f(3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(x 를 인수로 가져야 함)과 묻는 점을 바꿀 수 있음. 제약: 우변이 x 로 나누어떨어지게 상수항 0."
    creative: "(1) 순서를 바꿔 ∫{d/dx xf(x)}dx 로 두고 적분상수가 남게 하기(T-표기 ★1~2, 0683 골조) (2) 좌변을 d/dx{∫(x+1)f(x)dx} 로 두어 인수분해 나눗셈 요구(★2) (3) f(3) 대신 f 의 모든 계수 합(=f(1))을 묻기(RT d1 ★2)."
```

```yaml
- id: RPM-CALC1-0670
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    부정적분 ∫(x+3y)^2 dy 구하기(적분변수가 y).
  category: "적분변수 확인(y) → 전개 → x 는 상수로 항별 적분 → +C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분 기본 계산(전개 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+3y)^2=x^2+6xy+9y^2 을 y 로 적분하면 x^2y+3xy^2+3y^3+C.
    적분변수가 y 라는 표기 함정(T-표기) 하나뿐. 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "dy 확인 → 전개 → x 상수 취급 항별 적분 → x^2y+3xy^2+3y^3+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^2y+3xy^2+3y^3+C$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수(x+3y → ax+by)와 지수(제곱·세제곱)를 바꿀 수 있음. 제약: 전개 항 수가 4개를 넘지 않게, 계수는 적분 후 정수."
    creative: "(1) 같은 식을 dx 로 적분한 결과와 비교해 「어느 항이 달라지는가」 묻기(★1~2) (2) ∫(x+3y)^2 dy 를 (x+3y)^3/9 로 쓰는 치환 꼴을 보기로 주고 동치 여부 판단(EQV d1 ★2) (3) 적분 결과에 y=x 를 대입한 값을 묻기(★1)."
```

```yaml
- id: RPM-CALC1-0671
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫(√x+5)^2 dx+∫(√x-5)^2 dx, f(0)=49 일 때 f(1) 의 값. 5지선다.
  category: "두 적분을 합쳐 (a+b)^2+(a-b)^2=2(a^2+b^2) → √x 소거 → 적분·f(0) → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(√x+5)^2 과 (√x-5)^2 을 따로 적분하지 않고 합쳐서 교차항 ±10√x 가 상쇄되어 2x+50 이 됨을 봄(다항식 적분으로 환원)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분 기본 계산(전개 후 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피적분함수 합은 2x+50 이므로 f=x^2+50x+C, f(0)=49 로 C=49, f(1)=100.
    √x 는 이 과정 범위에서 적분할 수 없으므로 두 식을 먼저 합쳐 교차항을 없애야 한다(SYM d1). 계산은 한 줄. M_total 4 이지만 통찰 d1 이 있어 ★2 유지. 「중요」 +0.
  tier: star_2
  mechanism_primary: "∫A dx+∫B dx=∫(A+B)dx → (√x±5)^2 합에서 √x 항 상쇄 → 2x+50 적분 → f(0)=49 → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 5 와 f(0) 값·묻는 점을 바꿀 수 있음. 제약: 두 식의 교차항이 정확히 상쇄되는 켤레 꼴(a+b, a-b)을 유지. f(1) 이 선택지 간격에 맞게."
    creative: "(1) 차 ∫(√x+5)^2 dx-∫(√x-5)^2 dx 를 주면 20√x 가 남아 다항식이 아님 → 「부정적분을 구할 수 없는 이유」 ㄱㄴㄷ(EQV d1 ★2) (2) (x+1)^3 과 (x-1)^3 의 합으로 바꿔 홀수 차 항 상쇄(SYM d1 ★2) (3) 켤레 곱 (√x+5)^2(√x-5)^2=(x-25)^2 으로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC1-0672
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 f 가 f'(x)=6x^2-2f(1)x, f(0)=4 를 만족할 때 f(2) 의 값. 5지선다.
  category: "f(1)=a 상수화 → 적분·f(0) 로 C → x=1 대입해 a 자기일관 방정식 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도함수 식 안의 f(1) 이 상수임을 읽고 a 로 두어 적분한 뒤, 다시 x=1 을 대입해 a 를 결정하는 자기참조 등식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(1) 을 상수로 두는 자기참조 도함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=a 로 두면 f=2x^3-ax^2+4 (f(0)=4). f(1)=6-a=a 로 a=3, f=2x^3-3x^2+4, f(2)=8.
    「f(1) 은 상수」 착안(EQV d1) 뒤는 대입 한 번. 기출이지만 통찰 d1 하나·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=6x^2-2f(1)x → f(1)=a → f=2x^3-ax^2+4 → f(1)=a 등식으로 a=3 → f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 6, -2 와 f(0) 값, 상수가 들어가는 점(f(1) → f(2))을 바꿀 수 있음. 제약: a 에 대한 등식이 일차·유일해이고 답이 정수."
    creative: "(1) f'(x)=3x^2+f'(1) 처럼 f' 값을 자기참조로 넣기(★2) (2) f(1) 과 f(-1) 두 상수를 넣어 연립(★3) (3) 자기참조 상수를 극값 조건과 묶어 「f 가 x=1 에서 극값」으로 a 를 정하기(★3)."
```

```yaml
- id: RPM-CALC1-0673
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    실수 전체에서 증가하는 다항함수 f 가 f'(x)={3x-f(1)}(x-1) 을 만족할 때 f(2) 의 값. 5지선다.
  category: "f(1)=a 상수화 → 증가 ⇔ f'≥0 ⇔ 이차식 중근 → a=3 → 적분·f(1)=3 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도함수 식 안의 f(1) 을 상수 a 로 두고 f'(x)=(3x-a)(x-1) 로 봄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「실수 전체에서 증가」를 f'(x)≥0 (모든 x) 으로, 다시 최고차 계수 양수인 이차식이 음이 되지 않으려면 중근이어야 한다는 조건 3x-a=0 이 x=1 에서 성립 (a=3) 으로 옮김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "f(1) 을 상수로 두는 자기참조 도함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=(3x-a)(x-1) 이 항상 0 이상이려면 두 근이 같아야 하므로 a=3, f'=3(x-1)^2, f=(x-1)^3+C, f(1)=3 으로 C=3, f(2)=4.
    자기참조 상수(EQV d1)에 「증가 → f'≥0 → 중근」 해석(EQV d2)이 얹혀 통찰 2개. ★2 출발점에서 d2 통찰로 +1 → ★3.
  tier: star_3
  mechanism_primary: "f(1)=a → f'=(3x-a)(x-1) → 증가 ⇔ f'≥0 ⇔ 중근 → a=3 → f=(x-1)^3+C, f(1)=3 → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 과 근 1, 묻는 점을 바꿀 수 있음. 제약: 중근 조건에서 a 가 정수로 결정되고 f(1)=a 가 적분상수와 모순 없이 맞아야 함(f(1)=C 이므로 C=a)."
    creative: "(1) 「감소」로 바꾸고 최고차 계수를 음으로(T-부호 ★3) (2) 중근 조건 대신 「f'(x)≥0 이 아닌 x 가 정확히 한 구간」처럼 부등식 해석을 요구(EQV d2 ★3~4) (3) f'(x)={3x-f(1)}{x-f(0)} 로 상수 두 개(★4)."
```

```yaml
- id: RPM-CALC1-0674
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선의 각 점에서의 접선의 기울기가 x^2 에 정비례하고 곡선이 (1, 3), (-1, 1) 을 지날 때 f(3) 의 값.
  category: "정비례 → f'=kx^2 → 적분(k, C) → 두 점 대입 연립 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접선의 기울기가 x^2 에 정비례」라는 문장을 f'(x)=kx^2 (비례상수 미정) 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기 조건에서 곡선 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=kx^3/3+C. (1, 3): k/3+C=3, (-1, 1): -k/3+C=1 → C=2, k=3. f=x^3+2, f(3)=29.
    정비례 → kx^2 전환(RT d1) 뒤 연립은 표준. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "기울기 ∝ x^2 → f'=kx^2 → f=kx^3/3+C → (1,3), (-1,1) 연립 → k=3, C=2 → f(3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$29$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비례 대상(x^2 → x, x^2-1 등)과 두 점, 묻는 점을 바꿀 수 있음. 제약: 두 점 조건에서 k, C 가 정수로 유일하게 결정되도록(대칭점 ±1 을 쓰면 합·차로 바로 분리됨)."
    creative: "(1) 두 점 대신 「점 (1, 3) 을 지나고 x=2 에서의 접선의 기울기가 12」로 k 를 직접 주기(★2) (2) 「기울기가 x^2 에 정비례하고 곡선이 원점 대칭」으로 C=0 을 SYM 으로 읽게 하기(★2) (3) 「반비례」로 바꾸면 다항함수가 아니게 되어 범위 밖 — 주의."
```

```yaml
- id: RPM-CALC1-0675
  page: 104
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫g(x)dx=x^3 f(x)+x+C 이고 f(2)=1, f'(2)=-1 일 때 g(2) 의 값. 5지선다.
  category: "양변 미분(곱의 미분) → g=3x^2 f+x^3 f'+1 → x=2 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=3x^2 f(x)+x^3 f'(x)+1 이므로 g(2)=12·1+8·(-1)+1=5.
    곱의 미분법을 빠뜨리지 않는 것(T-표기)이 전부. f 를 구하지 않고 값만 대입. 통찰 없음·M_total 5 → 기본 절차(곱의 미분 + 두 조건 대입)가 남아 ★2 유지.
  tier: star_2
  mechanism_primary: "∫g dx=x^3 f+x+C 양변 미분 → g=3x^2 f+x^3 f'+1 → f(2), f'(2) 대입 → g(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^3 의 차수, 덧붙는 항 x, 점 2 와 f(2), f'(2) 값을 바꿀 수 있음. 제약: 답이 선택지 정수 범위."
    creative: "(1) f(2), f'(2) 대신 「x=2 에서 f 의 접선의 방정식 y=-x+3」으로 주기(RT d1 ★2) (2) g 가 아닌 ∫f 를 묻는 역방향(적분 필요 ★3) (3) x^3 f(x) 를 {f(x)}^2 으로 바꿔 합성함수 미분 없이 곱의 미분만으로 풀리는지 확인(★2)."
```

```yaml
- id: RPM-CALC1-0676
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫(3x+2)f'(x)dx=x^3-2x^2-4x+C 이고 y=f(x) 의 y절편이 1 일 때, f 의 상수항을 포함한 모든 계수의 합.
  category: "양변 미분 → (3x+2)f'=3x^2-4x-4 인수분해 → f'=x-2 → 적분·f(0)=1 → 계수 합 = f(1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「상수항을 포함한 모든 계수의 합」을 f(1) 의 값으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3x+2)f'(x)=3x^2-4x-4=(3x+2)(x-2) 이므로 f'=x-2, f=x^2/2-2x+1 (y절편 1). 계수 합=f(1)=1/2-2+1=-1/2.
    인수분해 약분은 표준, 「계수의 합 = f(1)」 전환이 RT d1. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 → (3x+2)f'=(3x+2)(x-2) → f'=x-2 → 적분·f(0)=1 → 계수 합=f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (3x+2) 와 우변 삼차식, y절편을 바꿀 수 있음. 제약: 우변의 도함수가 (3x+2) 를 인수로 가져야 함(먼저 f' 를 정하고 역산). 계수 합이 간단한 분수."
    creative: "(1) 「계수의 합」 대신 「홀수 차 항 계수의 합」= {f(1)-f(-1)}/2 로 SYM d1 추가(★3) (2) y절편 대신 「f(x)=0 의 근 하나가 x=2」로 C 를 주기(★2) (3) 우변 최고차 계수를 a 로 두고 약분 가능 조건을 묻기(EQV d2 ★3)."
```

```yaml
- id: RPM-CALC1-0677
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    연속함수 f 의 도함수 그래프(x≤1 에서 원점을 지나는 기울기 2 의 직선, x≥1 에서 상수 2)가 주어지고 y=f(x) 가 원점을 지날 때 f(4) 의 값.
  category: "그래프 → 구간별 f' 식 → 적분·f(0)=0 → x=1 연속으로 오른쪽 상수 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꺾인 그래프를 x≤1 에서 f'=2x, x≥1 에서 f'=2 라는 구간별 식으로 읽음(점 (1, 2) 로 기울기 확정)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≤1: f=x^2 (원점), f(1)=1. x≥1: f=2x+C, 연속으로 2+C=1, C=-1. f(4)=7.
    그래프 읽기(RT d1) 뒤 0651 골조. M_total 5·통찰 d1 → ★2.
  tier: star_2
  mechanism_primary: "y=f'(x) 그래프 → f'=2x (x≤1), 2 (x≥1) → f=x^2 → f(1)=1 → 2x+C 연속 → C=-1 → f(4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: "crop:fig-0677.png"
  latex: latex-bank/rpm-calc1/items/0677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점(1, 2)과 원점 통과 조건, 묻는 점을 바꿀 수 있음. 제약: 그림 라벨 고정(바꾸면 크롭 재작성). 직선 부분의 기울기가 꺾이는 점 좌표로 정수가 되게."
    creative: "(1) f' 의 그래프를 x≥1 에서 감소 직선으로 바꿔 f 가 극값을 갖게 하고 극댓값을 묻기(★3) (2) 「f 가 미분가능」이라 주고 꺾인 점에서 f' 가 연속임을 그래프로 확인하게 하기(★2) (3) f(4)-f(-2) 처럼 두 구간에 걸친 차를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0678
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    연속함수 f 의 도함수가 |x|≥1 에서 2x-3, |x|≤1 에서 -3x^2+2x 이고 f(-2)=10 일 때 f(2) 의 값.
  category: "|x|≥1 을 두 구간으로 → 세 구간 적분(상수 3개) → f(-2) 로 왼쪽 → x=-1, x=1 연속 사슬 → 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|x|≥1 은 x≤-1 과 x≥1 두 구간이고 식이 같아도 적분상수는 따로임을 읽어 세 구간·상수 3개로 설정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건(적분상수 연결)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x≤-1: f=x^2-3x+C1, f(-2)=10 으로 C1=0, f(-1)=4. -1≤x≤1: f=-x^3+x^2+C2, f(-1)=4 로 C2=2, f(1)=2. x≥1: f=x^2-3x+C3, f(1)=2 로 C3=4. f(2)=2.
    같은 식 2x-3 의 두 바깥 구간이 서로 다른 상수를 가진다는 점(T-경계·T-부호)과 연속 조건을 두 번 잇는 사슬이 유형 08 기본형보다 한 단 위. M_total 7 → ★2 출발점에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "|x|≥1 분리 → 세 구간 적분(C1, C2, C3) → f(-2) 로 C1 → x=-1 연속 → C2 → x=1 연속 → C3 → f(2)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 식 2x-3, 안쪽 식 -3x^2+2x, 경계 ±1, 조건 f(-2)=10 과 묻는 점을 바꿀 수 있음. 제약: 경계에서 함숫값이 정수로 이어지게 계수 조정. 바깥 두 구간의 상수가 실제로 달라지게(C1≠C3) 두어 함정이 살아 있게."
    creative: "(1) 안쪽 식을 우함수로 두고 f(-2)+f(2) 를 물어 대칭 계산 유도(SYM d1 ★3) (2) 「f 가 미분가능」 조건으로 바꾸고 경계에서 f' 가 이어지는지 판정하는 ㄱㄴㄷ(EQV d2 ★3~4) (3) 조건을 f(-2)=10 대신 「f(-2)=f(2)」로 주고 C1 을 묻기(★3)."
```

```yaml
- id: RPM-CALC1-0679
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫{d/dx(3x^3-ax^2)}dx 가 f(1)=6 이고 lim_{x→1} {f(x)-f(1)}/(x-1)=-1 일 때 f(2) 의 값(a 상수).
  category: "∫d/dx 는 원함수+C → f=3x^3-ax^2+C → 극한 = f'(1) 로 a → f(1) 로 C → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=3x^3-ax^2+C. f'(1)=9-2a=-1 로 a=5, f(1)=3-5+C=6 으로 C=8. f(2)=24-20+8=12.
    ∫d/dx 에 +C 가 붙는 표기 함정 하나와 미분계수 정의. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫{d/dx g}dx=g+C → f=3x^3-ax^2+C → f'(1)=-1 로 a=5 → f(1)=6 으로 C=8 → f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식 3x^3-ax^2, f(1) 값, 극한값(=f'(1))과 묻는 점을 바꿀 수 있음. 제약: a 가 정수로 결정되고 답이 정수."
    creative: "(1) 순서를 d/dx{∫(3x^3-ax^2)dx} 로 바꾸면 +C 가 없어 f(1)=6 조건이 a 를 결정하게 됨(조건 하나가 남는 모순 확인 ★2) (2) 극한식을 {f(1+h)-f(1-h)}/h 꼴로(★2) (3) a 와 C 를 극한 조건 두 개로 결정(연립 ★2~3)."
```

```yaml
- id: RPM-CALC1-0680
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫(5x^3-x^2+4x+7)dx 일 때 lim_{x→1} {f(x)-f(1)}/(x^3-1) 의 값. 5지선다.
  category: "피적분함수 = f' → 분모 x^3-1=(x-1)(x^2+x+1) → f'(1)/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=5x^3-x^2+4x+7, f'(1)=15. 극한은 f'(1)/(1+1+1)=5.
    분모 x^3-1 을 (x-1)(x^2+x+1) 로 나누어 미분계수 꼴로 만드는 표준 변형(T-표기). 통찰 0·M_total 4 → ★1. 「중요」 태그는 빈출 표시일 뿐 +0.
  tier: star_1
  mechanism_primary: "f=∫g dx → f'=g → x^3-1=(x-1)(x^2+x+1) → 극한 = f'(1)/3 → g(1)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 계수와 극한의 점(1), 분모(x^3-1 → x^2-1, x^4-1)를 바꿀 수 있음. 제약: 분모가 (x-a) 를 인수로 갖고 나머지 인수의 x=a 값이 정수·f'(a) 가 그 배수."
    creative: "(1) 분모를 x^2-3x+2 로 두어 인수 (x-2) 가 남게 하는 함정(★2) (2) 분자를 f(x^2)-f(1) 로 바꿔 합성 미분계수(2f'(1)) 요구(★2) (3) 극한값이 주어지고 피적분함수의 미지 계수를 묻는 역방향(★2)."
```

```yaml
- id: RPM-CALC1-0681
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 f 가 (가) lim_{x→∞} f'(x)/x=2, (나) lim_{x→3} f(x)/(x-3)=2 를 만족할 때 방정식 f(x)=0 의 해.
  category: "(가) → f' 일차·최고차 2 ⇒ f 이차·최고차 1 → (나) → f(3)=0, f'(3)=2 → 계수 결정 → 인수분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→∞ 극한 f'(x)/x=2 를 「f' 는 최고차 계수 2 인 일차식」, 즉 f 는 최고차 계수 1 인 이차식으로 옮김(차수·최고차 계수 결정)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 → 0 인 (나) 에서 f(3)=0 과 f'(3)=2 두 등식을 끌어냄"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의와 부정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f=x^2+bx+c, f'(3)=6+b=2 로 b=-4, f(3)=9-12+c=0 으로 c=3. f=(x-1)(x-3), 해 x=1 또는 3.
    극한 조건 두 개를 각각 「차수·계수」「함숫값·미분계수」로 번역하는 통찰 2개(각 d1). ★2 출발점에서 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "(가) → f=x^2+bx+c → (나) → f(3)=0, f'(3)=2 → b=-4, c=3 → (x-1)(x-3)=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$x=1$ 또는 $x=3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(가) 의 값 2 와 분모 x (→ x^2 이면 f 삼차), (나) 의 점 3 과 값을 바꿀 수 있음. 제약: 결정된 f 가 유리수 근을 갖게 판별식이 완전제곱수."
    creative: "(1) (가) 를 lim f(x)/x^2=1 로 바꿔 f 의 차수 정보를 f 자체로 주기(★3) (2) (나) 를 두 점에서 주어 삼차 f 를 결정(★3~4) (3) 「f(x)=0 의 해」 대신 「f 의 최솟값」으로 답 형식 변경(★3)."
```

```yaml
- id: RPM-CALC1-0682
  page: 105
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫(6x^2+ax-12)dx 가 x=1 에서 극솟값 3 을 가질 때 f 의 극댓값(a 상수). 5지선다.
  category: "f'(1)=0 으로 a → f' 인수분해로 극대 x=-2 → 적분·f(1)=3 으로 C → 극댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=6x^2+ax-12, f'(1)=0 으로 a=6, f'=6(x+2)(x-1). f=2x^3+3x^2-12x+C, f(1)=3 으로 C=10. 극대 x=-2: f(-2)=30.
    극값 조건 f'(1)=0 → a, 극댓점 찾기, 적분·상수, 대입의 표준 사슬이지만 매개변수와 계산량으로 M_total 7 → ★2 출발점에서 +1 → ★3(유형 UP 11 의 「중」 문항들과 같은 층).
  tier: star_3
  mechanism_primary: "f'(1)=0 → a=6 → f'=6(x+2)(x-1) → 적분 → f(1)=3 으로 C=10 → f(-2)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수·극솟점 1·극솟값 3 을 바꿀 수 있음. 제약: a 결정 후 f' 가 정수 근 두 개를 갖고, x=1 이 실제로 극소(f' 부호 -→+)인지 확인. 극댓값이 선택지 정수."
    creative: "(1) 「x=1 에서 극솟값」을 「x=1 에서 극값」으로 바꾸면 극대일 가능성 검증 추가(VF d1 ★3) (2) 극댓값 대신 「극댓값과 극솟값의 차」(★3) (3) 극솟값 3 대신 「y=f(x) 가 x축에 접한다」로 C 를 정하기(EQV d2 ★4, 0666 골조)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0683
  page: 106
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    f(x)=2x+1 에 대하여 F=d/dx{∫xf(x)dx}, G=∫{d/dx xf(x)}dx 라 할 때 G(1)=5 이면 F(-1)+G(-1) 의 값.
  category: "F=xf (상수 없음) · G=xf+C → G(1) 로 C → 두 값 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계(∫d/dx · d/dx∫)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F(x)=2x^2+x, G(x)=2x^2+x+C, G(1)=3+C=5 로 C=2. F(-1)=1, G(-1)=3, 합 4.
    d/dx∫ 와 ∫d/dx 의 차이(+C 유무)를 서술하게 하는 문항. 통찰 0·M_total 4 → 서술형 출발점 ★3 에서 -1 → ★2.
    [분류 이슈] 내용은 ★1 급(정의 확인 한 단계)이나 서술형 구역 출발점 ★3 과 2단 차 — 라벨은 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "F=d/dx∫xf=xf → G=∫d/dx(xf)=xf+C → G(1)=5 로 C=2 → F(-1)+G(-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 식, G 의 조건값, 묻는 점을 바꿀 수 있음. 제약: 답이 정수. F 에는 상수가 없고 G 에만 C 가 있다는 구조를 유지."
    creative: "(1) 「F(x)-G(x) 가 상수인 이유」를 쓰게 하는 서술형(★2) (2) F, G 의 그래프가 만나는 조건으로 C 를 정하기(★2) (3) G(1)=5 대신 「G 의 최솟값이 0」으로 C 를 정하기(이차함수 최솟값 결합 ★2~3)."
```

```yaml
- id: RPM-CALC1-0684
  page: 106
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 다항함수 f, g 가 d/dx{f+g}=2x+1, d/dx{fg}=3x^2-6x+2, f(0)=-3, g(0)=2 를 만족할 때 f(1)+g(2) 의 값.
  category: "적분으로 f+g, fg 결정 → fg 인수분해 → 합 조건과 대조해 두 함수 결정 → 초기값으로 배정 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 x^2+x-1 과 곱 (x-3)(x^2+2) 로부터 f, g 를 역추적: 곱의 인수 조합 중 합이 이차식이 되는 조합 {x-3, x^2+2} 를 찾음"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "인수 조합 후보(1·삼차, 부호 반전 등) 가운데 합 조건에 맞지 않는 것을 기각하고 f(0)=-3 으로 f=x-3, g=x^2+2 를 배정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "합·곱의 도함수에서 두 함수 복원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f+g=x^2+x-1 (합 조건 -1), fg=x^3-3x^2+2x-6=(x-3)(x^2+2) (곱 조건 -6). 합이 이차식이 되는 조합은 {x-3, x^2+2} 뿐이고 f(0)=-3 이므로 f=x-3, g=x^2+2. f(1)+g(2)=-2+6=4.
    두 함수를 따로 얻을 수 없고 합·곱에서 역추적하는 BW d2 가 핵심, 조합 기각·배정이 VF d1. 서술형 출발점 ★3 에 통찰 2개지만 M_total 7·조합이 즉시 보여 +1 보류 → ★3.
  tier: star_3
  mechanism_primary: "적분 → f+g=x^2+x-1, fg=(x-3)(x^2+2) → 인수 조합·합 대조 → {x-3, x^2+2} → f(0)=-3 배정 → f(1)+g(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 를 먼저 정하고(예: x+a, x^2+b) 합·곱의 도함수와 초기값을 역산. 제약: 곱이 인수분해 가능하고 인수 조합이 합 조건으로 유일하게 결정되어야 함(두 함수 차수가 다르면 배정이 쉬움)."
    creative: "(1) f, g 를 모두 일차로 두면 근과 계수 관계(t^2-(합)t+곱=0)로 풀리는 SC 갈래 생성(★3~4) (2) 초기값 대신 「f 의 차수 < g 의 차수」로 배정(★3) (3) d/dx{f/g} 정보는 범위 밖 — 곱·합만 유지."
```

```yaml
- id: RPM-CALC1-0685
  page: 106
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    점 (1, 3) 을 지나는 곡선의 각 점에서의 접선의 기울기가 4x+6 일 때 방정식 f(x)=0 의 모든 근의 곱.
  category: "f'=4x+6 적분 → (1, 3) 으로 C → 이차방정식 근의 곱 = 상수항/최고차 계수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건에서 곡선 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=2x^2+6x+C, f(1)=8+C=3 으로 C=-5. 근의 곱 = -5/2.
    접선 기울기 = 도함수, 근과 계수의 관계 모두 표준. 통찰 0·M_total 4 → 서술형 출발점 ★3 에서 -1 → ★2.
    [분류 이슈] 내용은 ★1 급(적분·대입·근과 계수)이나 서술형 구역 출발점 ★3 과 2단 차 — 라벨 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "f'=4x+6 → f=2x^2+6x+C → f(1)=3 으로 C=-5 → 근의 곱 -5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식(일차)과 지나는 점을 바꿀 수 있음. 제약: f(x)=0 이 실근을 갖도록 판별식 ≥ 0 (근의 곱만 물으면 허근이어도 형식상 성립하나 서술형에서는 실근 유지 권장)."
    creative: "(1) 기울기를 이차식으로 바꿔 삼차방정식 세 근의 곱(★2) (2) 「근의 곱」 대신 「두 근 사이의 거리」(판별식 ★2) (3) 지나는 점 대신 「x축과 x=1 에서 만난다」로 C 를 주기(★2)."
```

```yaml
- id: RPM-CALC1-0686
  page: 106
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    일차함수 f 가 4∫f(x)dx-f(x)=2xf(x)+x 를 만족하고 f(1)=1 일 때 f(4) 의 값.
  category: "f=ax+b 로 두고 적분 또는 양변 미분 → 계수 비교 → f(1)=1 과 연립 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 미분하면 4f-f'=2f+2xf'+1, f=ax+b 이면 2b-a-1=0. f(1)=a+b=1 과 연립해 a=1/3, b=2/3. f(4)=2.
    직접 적분(4∫f dx=2ax^2+4bx+4C)으로 계수 비교해도 같은 식이 나오며 갈래 차이가 크지 않아 SC 로 세지 않음. 일차함수 미정계수·분수 연립으로 M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 미분 → 2f=(1+2x)f'+1 → f=ax+b 계수 비교 → 2b-a=1 → f(1)=1 연립 → a=1/3, b=2/3 → f(4)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4, 2 와 덧붙는 항 x, f(1) 값을 바꿀 수 있음. 제약: 미분 후 x 항 계수가 자동으로 맞아야(4a-2a=2a 처럼 소거) 일차함수 해가 존재하고, 답이 정수가 되게 f(1) 조정."
    creative: "(1) 「일차함수」 조건을 빼고 「다항함수」로 주어 차수 결정을 요구(BW d2 ★4, 0687 골조) (2) 좌변 4∫f dx 의 상수 C 까지 묻기(★3) (3) 관계식을 x∫f dx=… 로 바꿔 곱의 미분 추가(★3)."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0687
  page: 106
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    다항함수 f 가 3∫f(x)dx=xf(x)-2f(x) 를 만족하고 f(0)=2 일 때 f(6) 의 값.
  category: "양변 미분 → 2f=(x-2)f' → 최고차 비교로 차수 2 → f=a(x-2)^2 꼴 → f(0) 으로 a → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2f(x)=(x-2)f'(x) 에서 f 의 차수 n 을 두고 최고차 계수를 비교(2a=na)해 n=2 를 확정한 뒤, 계수 비교로 f=a(x-2)^2 임을 얻음 — 우변이 명시된 다항식이 아니라 f 자신이라 자기참조 차수 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "관계식 양변 미분으로 f(x) 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미분하면 3f=f+(x-2)f', 즉 2f=(x-2)f'. f 가 n 차이면 최고차 비교로 2=n. f=ax^2+bx+c 를 넣으면 b=-4a, c=4a 로 f=a(x-2)^2, f(0)=4a=2 로 a=1/2, f(6)=8.
    자기참조 관계식에서 차수를 먼저 확정하는 BW d2 가 핵심이고 뒤는 계수 비교. 실력 Up 출발점 ★4 에 통찰 1개·M_total 7 이라 -1 조건은 아니어서 ★4 유지.
    [분류 이슈] 내용은 ★3 후보(통찰 1개 d2 · 계산 보통) — 실력 Up 출발점 ★4 와 1단 차이지만 경계라 기록.
  tier: star_4
  mechanism_primary: "3∫f dx=(x-2)f 양변 미분 → 2f=(x-2)f' → 차수 비교 n=2 → f=a(x-2)^2 → f(0)=2 로 a=1/2 → f(6)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 과 인수 (x-2), f(0) 값·묻는 점을 바꿀 수 있음. 제약: 미분 후 kf=(x-p)f' 꼴에서 차수 n=k 가 자연수여야 하고(k∫f dx=(x-p)f 이면 f=a(x-p)^k), f(0)=a(-p)^k 로 a 가 간단히 결정되게."
    creative: "(1) 좌변 계수를 4 로 바꾸면 f=a(x-2)^3 삼차(★4 유지) (2) 우변을 (x-2)f(x)+x^2 처럼 비동차로 두면 특수해 찾기 추가(★4~5) (3) 「f 의 차수」만 묻는 짧은 문항으로 줄이면 BW 만 남아 ★3."
```

```yaml
- id: RPM-CALC1-0688
  page: 106
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    다항함수 f 가 f(x+y)=f(x)+f(y)+3xy 를 만족하고 f'(1)=6 일 때, ㄱ. f(0)=0 ㄴ. lim_{h→0} f(-h)/h=3 ㄷ. f'(-1)=0 ㄹ. f(-3)<0 중 옳은 것.
  category: "f(0)=0 → 도함수 정의로 f'(x)=f'(0)+3x → f'(1) 로 f'(0)=3 → 각 보기 판정(부호 함정) → f 적분으로 ㄹ"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함수방정식을 도함수 정의에 넣어 f'(x)=f'(0)+3x 로 전환하고 f'(1)=6 으로 f'(0)=3 을 확정 — 이후 모든 보기의 근거"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y) 의 미분(도함수 정의)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄱ: x=y=0 으로 f(0)=0 참. f'(x)=lim {f(h)+3xh}/h=f'(0)+3x, f'(1)=6 으로 f'(0)=3. ㄴ: f(-h)/h=-{f(0-h)-f(0)}/(-h) → -f'(0)=-3 거짓(부호 함정). ㄷ: f'(-1)=3-3=0 참. ㄹ: f=3x^2/2+3x, f(-3)=27/2-9=9/2>0 거짓. 답 ㄱ, ㄷ.
    RT d2 하나가 골조이고, 보기 네 개(특히 ㄴ 의 -h 부호와 ㄹ 의 적분)로 검증 부담과 함정 2종(T-부호·T-표기)이 얹혀 M_total 9. 실력 Up 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "f(x+y) 관계식 → f(0)=0 → f'(x)=f'(0)+3x → f'(1)=6 → f'(0)=3 → ㄴ 은 -f'(0), ㄷ 은 f'(-1), ㄹ 은 f 적분 후 대입"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덧붙는 항 3xy 의 계수와 f'(1) 값, 보기의 점(-1, -3)과 극한 형태를 바꿀 수 있음. 제약: ㄴ 의 극한값을 -f'(0) 과 다르게 두어 부호 함정을 유지하고, ㄷ 이 성립하는 점 x=-f'(0)/3 이 정수가 되게."
    creative: "(1) 보기 ㄹ 을 「f 의 최솟값은 -3/2」로 바꿔 이차함수 최소 결합(★4) (2) 덧붙는 항을 xy(x+y) 로 바꾸면 f 삼차·극값 보기 가능(★4~5) (3) ㄱㄴㄷ 대신 단답 f(-3) 만 물으면 검증 부담이 사라져 ★3(0659 골조)."
```

```yaml
- id: RPM-CALC1-0689
  page: 106
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    최고차 계수 1 인 삼차함수 f 가 (가) f'(8/3)<0, (나) x=1 에서 극댓값 5, (다) 방정식 f(x)=f(3) 이 서로 다른 두 실근을 가질 때 f(-1) 의 값.
  category: "(다) 해석: y=f(3) 이 극값선 → 두 경우(3 이 극소점 / f(3)=극댓값 5) → 각 경우 f 구성 → (가) 로 기각 → 적분·(나) → 대입"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「f(x)=f(3) 이 서로 다른 두 실근」을 「직선 y=f(3) 이 삼차 곡선의 극값점에서 접한다」로 해석(삼차식=상수 가 두 실근 ⇔ 중근 포함 ⇔ 극값선)"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극값선이 되는 경우를 둘로 나눔: x=3 자체가 극솟점이거나, 3 은 극값점이 아니고 f(3) 이 극댓값 5 와 같은 경우(극솟값선이 x=3 을 지나는 경우는 극댓점 1 의 오른쪽이라 불가)"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(3)=5 인 경우 f=(x-1)^2(x-3)+5 로 f'=(x-1)(3x-7), f'(8/3)=5/3>0 이라 (가) 위배로 기각; x=3 극솟점인 경우 f'=3(x-1)(x-3), f'(8/3)<0 채택"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "극값 조건과 부정적분(f' 에서 f 복원)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    채택 경우: f'=3(x-1)(x-3)=3x^2-12x+9, f=x^3-6x^2+9x+C, f(1)=4+C=5 로 C=1. f(-1)=-1-6-9+1=-15.
    (다) 의 해석(EQV d2), 두 경우 나눔(MI d1), (가) 로 한 경우 기각(VF d1)이 세 단계 통찰. 통찰 3개·VF 포함이라 ★5 필요조건은 맞지만 극값선 조건 골조는 시판에 흔해(novelty 0) 실력 Up 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "(다) ⇒ y=f(3) 극값선 → {x=3 극솟점, f(3)=5} 두 경우 → (가) f'(8/3)<0 으로 후자 기각 → f'=3(x-1)(x-3) → 적분·f(1)=5 → f(-1)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$-15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극댓점 1·극댓값 5·(다) 의 점 3·(가) 의 점 8/3 을 바꿀 수 있음. 제약: (가) 의 점은 두 경우의 극솟점(3 과 7/3)을 가르는 위치(7/3 < 8/3 < 3)에 두어야 정확히 한 경우만 기각됨. 최고차 계수 1 유지 시 답이 정수."
    creative: "(1) (가) 를 「f'(2)>0」 처럼 반대 부호로 두면 기각되는 경우가 바뀜(같은 골조 ★4) (2) (가) 를 빼고 「가능한 f(-1) 의 값의 합」으로 두 경우 모두 살리기(MI 로 전환 ★4) (3) (다) 를 「f(x)=f(3) 이 세 실근」으로 바꾸면 접선 조건이 사라져 부등식 해석(★4) (4) 최고차 계수를 미지수로 두고 (가) 와 결합해 범위를 묻기(★5 후보, novelty 필요)."
```

## 표본 판정 요약 (43문)

- ★ 분포: ★1 5 · ★2 19 · ★3 16 · ★4 3 · ★5 0
- 통찰형 11 · 절차형 32 · premium 0 (insights 가 비어 있지 않은 블록은 21 — d1 하나뿐인 10문은 절차형으로 분류)
- type_hint 상위: 「관계식 양변 미분으로 f(x) 결정」 8 · 「극값 조건과 부정적분(f' 에서 f 복원)」 8 · 「미분계수 정의와 부정적분」 7 · 「구간별 도함수와 연속 조건(적분상수 연결)」 6 · 「함수방정식 f(x+y) 의 미분(도함수 정의)」 4 · 그 외 「부정적분과 미분의 관계」 3 · 「부정적분 기본 계산」 2 · 「f(1) 을 상수로 두는 자기참조 도함수」 2 · 「접선의 기울기 조건에서 곡선 결정」 2 · 「합·곱의 도함수에서 두 함수 복원」 1
- 통찰 유형 빈도(라벨 28개): I-RT 10(그래프 → 식 · 함수방정식 → 도함수 · 계수 합 = f(1)) · I-EQV 10(극한 조건 해석 · 자기참조 상수 · 접함/증가 조건) · I-BW 3(차수 결정 · 합·곱 역추적) · I-VF 3 · I-SYM 1 · I-MI 1
- 구역별: 유형 07 ★2 3·★3 1 / 유형 08 ★2 4 / 유형 09 ★1 1·★2 3 / 유형 UP 10 ★3 3 / 유형 UP 11 ★3 6 / 시험에 꼭 ★1 4·★2 7·★3 4 / 서술형 ★2 2·★3 2 / 실력 Up ★4 3
- 그림: 3문(`crop:fig-0662.png` · `crop:fig-0667.png` · `crop:fig-0677.png` — 모두 y=f'(x) 그래프)
- 전사 답 확인 필요: 없음(43문 모두 풀어서 전사본 answer 와 일치 확인)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0683 | 서술형 주관식 구역(★3 출발)이나 내용은 d/dx∫ 와 ∫d/dx 의 +C 차이 확인 한 단계(통찰 0 · M_total 4, ★1 급). 라벨은 -1 조정한 ★2 로 두고 기록 | ★1 / ★2 |
| RPM-CALC1-0685 | 서술형 주관식 구역(★3 출발)이나 내용은 일차식 적분·점 대입·근의 곱(통찰 0 · M_total 4, ★1 급). 라벨 ★2 | ★1 / ★2 |
| RPM-CALC1-0687 | 실력 Up 구역(★4 출발)이나 통찰은 자기참조 차수 결정 BW d2 하나·M_total 7 로 ★3 후보. -1 조건(통찰 0·M≤5)에 해당하지 않아 라벨 ★4 유지, 경계 기록 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 골조는 크게 다섯 줄기로 반복된다 — (a) 관계식 양변 미분(유형 07 · 시험에 꼭 0675·0676 · 서술형 0686 · 실력 Up 0687), (b) 구간별 도함수 + 연속(유형 08 · 0677·0678), (c) 미분계수 정의·극한 조건 해석(유형 09 · 0679~0681), (d) 함수방정식 f(x+y)(유형 UP 10 · 0688), (e) 극값 조건에서 f 복원(유형 UP 11 · 0682·0689). 카탈로그는 이 다섯을 기본 유형으로 세우면 된다.
- (a) 안에서 base ★ 를 가르는 축은 「미분 후 f 가 바로 상쇄되는가(★2) / 차수 결정이 필요한가(★3, 0650·0687) / 자기참조 관계(0687)인가」 이므로, 「관계식 미분 — 직접형」과 「관계식 미분 — 차수 결정형」을 나누어 세우는 편이 좋다. 0672·0673 의 「f(1) 을 상수로 두기」는 (a) 의 변종이 아니라 별도 소유형(자기참조 상수)으로 두는 것이 변형 생성에 유리하다.
- (b) 는 접점 개수(1개 ★2 / 2개 이상 사슬 ★3)와 함숫값 조건 유무(0652 처럼 차에서 소거)로 갈리고, 절댓값 표현(0653·0678)은 같은 유형의 표기 변형이므로 통합해도 된다.
- (c) 의 「극한 조건 → f(a)=0, f'(a)=값」(0658·0681)과 「x→∞ 극한 → 차수·최고차 계수」(0681)는 02·03단원 카탈로그와 겹치므로 여기서는 「부정적분 + 미분계수 정의」 하나로 묶고 세부는 그쪽 유형을 참조하게 한다.
- (e) 는 「극값 두 개로 k·C 결정(★3)」「x축 접함/방정식 실근 개수 등 조건 해석 추가(★3~4, 0666·0667·0689)」로 두 층이 뚜렷하다. 0689 골조(극값선 조건 + 부호 조건으로 경우 기각)는 ★4 표준 유형으로 따로 세울 가치가 있다.
- 시험에 꼭 나오는 문제의 ★1 네 문(0668~0670·0680)과 서술형 0683·0685 는 정의 확인 수준이라 「부정적분 정의·∫d/dx 표기」 기본 유형(★1)으로 통합한다.
