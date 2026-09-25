---
name: mechanism-데이터-RPM-CALC2-08-p2
description: RPM 미적분Ⅱ 08 여러 가지 함수의 적분(2/2 · 유형 04~실력 Up · 44문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 08 여러 가지 함수의 적분
  unit_code: CALC2-08
  part: "2/2"
  extract_range: "128~133쪽 · 0898~0941"
  total_problems: 44
  unit_total: 83
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 08 여러 가지 함수의 적분 (2/2) 정독 데이터 (v1.0)

이 파일은 128~133쪽 · 0898~0941 의 44문항을 다룬다. 앞 절반(1/2)과 달리 교과서 구역이 없고 **유형 04 삼각함수의 부정적분부터 유형 UP 10 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up 까지** 유형·종합 구역만으로 구성된다. 벤더 난이도 신호는 구역(유형/유형 UP/시험에 꼭 나오는 문제/서술형 주관식/실력 Up) · 난이도 표시(중하·중·상중) · 태그(대표문제·중요·서술형)이며, 이 파일의 ★ 는 그 출발점을 M_total·통찰로 ±1 조정한 라벨이다.

이 범위의 골조는 **「적분 공식이 바로 안 먹는 피적분함수를 항등식·인수분해·유리화·구간 합치기로 동치 변환한 뒤 표준 공식으로 적분한다」** 한 줄로 요약된다. 그래서 대부분의 블록에서 통찰은 「변환 착안」 1개(I-EQV)이고, 유형 UP 10 과 실력 Up 에서만 대칭성(I-SYM) · 주기성(I-PD) · 역함수 넓이(I-RT) · 함수방정식 연립(I-CON)으로 층이 올라간다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 유형 04 삼각함수의 부정적분

```yaml
- id: RPM-CALC2-0898
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫ sin²x/(1-cos x) dx 이고 f(π)=π+3 일 때 f(3π/2). 5지선다.
  category: "삼각항등식으로 약분 → 부정적분 → 적분상수 결정 → 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin²x=1-cos²x=(1+cos x)(1-cos x) 로 분모를 약분해 1+cos x 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 부정적분 — 항등식 약분 후 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 1-cos x 를 약분하지 못하면 진행이 막히지만 sin²=1-cos² 는 이 유형의 표준 첫 수이다. 약분 뒤 x+sin x+C 로 끝나고 f(π) 로 C 를 정한다.
    통찰 1개(EQV d1)·M_total 4 · 유형 구역 대표문제(level 없음) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin²x/(1-cos x)=1+cos x → f=x+sin x+C → f(π)=π+3 으로 C → f(3π/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0898.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(π) 의 값(π+3 → π+1, π-2)과 묻는 점(3π/2 → π/2, 2π)을 바꿀 수 있음. 제약: 선택지가 aπ+b 꼴로 정리되도록 sin 값이 0·±1 인 점만 쓴다."
    creative: "(1) 분모를 1+cos x 로 바꿔 1-cos x 가 나오게(★2 유지) (2) sin²x/(1-cos x)+cos²x/(1+sin x) 처럼 두 항으로 → 변환 2회 ★3 (3) f 를 구간별 도함수로 주고 연속 조건을 얹으면 I-CON 추가 ★3."
```

```yaml
- id: RPM-CALC2-0899
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(sin(x/2)+cos(x/2))² 의 한 부정적분 F 에 대해 F(0)=0 일 때 F(π).
  category: "전개 → 배각공식으로 1+sin x → 적분 → 상수 결정"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제곱을 전개해 2 sin(x/2)cos(x/2)=sin x 로 묶어 1+sin x 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "반각 꼴 삼각식의 부정적분 — 전개·배각공식 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (sin+cos)² 전개에서 교차항이 sin x 가 되는 배각 인식이 유일한 관문이고 나머지는 x-cos x+C 표준 적분이다.
    level 중하 출발 ★1~2 중 배각 인식과 상수 결정이 있어 ★2.
  tier: star_2
  mechanism_primary: "(sin(x/2)+cos(x/2))²=1+sin x → F=x-cos x+C → F(0)=0 으로 C=1 → F(π)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi+2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0899.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반각의 계수(x/2 → x/3, 2x)와 F(0) 값, 묻는 점(π → 2π)을 바꿀 수 있음. 제약: 배각 결과의 적분이 초등함수로 닫히고 특수각에서 값이 정리돼야 한다."
    creative: "(1) (sin(x/2)-cos(x/2))² 로 부호를 뒤집기(★2 유지) (2) 괄호 안을 sin x+cos x 로 두고 세제곱(★3 · 변환 2회) (3) F(0) 대신 극값 조건으로 C 를 주면 I-BW 추가 ★3."
```

```yaml
- id: RPM-CALC2-0900
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫ 1/(1+sin x) dx 에 대하여 f(-π/3)-f(π/3).
  category: "분모 유리화 → sec²x-sec x tan x 분해 → 적분 → 두 값의 차"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자·분모에 1-sin x 를 곱해 cos²x 분모로 바꾸고 sec²x-sec x tan x 로 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "1/(1±sin x) 꼴의 부정적분 — 켤레 유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    켤레를 곱한다는 착안이 전부이고 그 뒤는 tan x-sec x+C 공식 적분이다. 차를 묻기 때문에 적분상수가 자동으로 소거되는 것도 이 유형의 표준 설계.
    통찰 1개(EQV d2)·M_total 5 · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "1/(1+sin x)×(1-sin x)/(1-sin x)=sec²x-sec x tan x → f=tan x-sec x+C → 두 점 값의 차(C 소거)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0900.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점(±π/3 → ±π/4, ±π/6)과 부호 배치를 바꿀 수 있음. 제약: tan·sec 가 특수각이어야 하고 cos 가 0 이 되는 ±π/2 는 피한다."
    creative: "(1) 1/(1-sin x)·1/(1+cos x) 로 켤레 대상을 바꾸기(★2 유지) (2) f(-a)-f(a) 대신 f(a)=k 로 C 를 정하게 하면 단계 +1 ★2~3 (3) 1/(1+sin x)+1/(1-sin x)=2sec²x 로 합치게 하면 I-SYM 성격 추가 ★3."
```

```yaml
- id: RPM-CALC2-0901
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫ (cos³x-2sin³x+2sin x-1)/cos²x dx 이고 f(0)=2 일 때 f(π). 5지선다.
  category: "항별 분해 → 떨어진 두 항을 묶어 약분 → 적분 → 상수 결정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "떨어져 있는 -2sin³x 와 +2sin x 를 2sin x(1-sin²x)=2sin x cos²x 로 묶어 분모를 약분"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분수꼴 삼각식의 부정적분 — 항별 분해와 묶어서 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항을 그냥 나누면 sin³/cos² 가 남아 막히고, 서로 떨어진 두 항을 먼저 묶어야 cos² 가 약분된다는 것이 관문이다. 정리하면 cos x+2sin x-sec²x 로 모두 공식 적분.
    통찰 1개(EQV d2)·M_total 5 · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "2sin x-2sin³x=2sin x cos²x 로 묶어 약분 → cos x+2sin x-sec²x → f=sin x-2cos x-tan x+C → f(0)=2 로 C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0901.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묶이는 항의 계수(2 → 3, -1)와 f(0) 값을 바꿀 수 있음. 제약: 묶은 뒤 반드시 cos²x 가 인수로 나와야 하고 f(π) 가 정수로 떨어지도록 상수항을 맞춘다."
    creative: "(1) 분모를 sin²x 로 바꿔 cot·csc 가 나오게(★2 유지) (2) 묶어야 할 짝을 두 쌍 넣으면 착안 2회 ★3 (3) f(0) 대신 f 의 극값·연속 조건으로 C 를 정하면 I-CON 추가 ★3."
```

```yaml
- id: RPM-CALC2-0902
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실수 전체에서 연속인 f 의 도함수가 x>0 일 때 2sin x-cos x, x<0 일 때 1-cos x 이고 f(π)=0 일 때 f(-π).
  category: "구간별 부정적분 → x=0 연속으로 두 적분상수 연결 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=0 에서의 연속 조건으로 오른쪽·왼쪽 구간의 서로 다른 적분상수를 하나의 관계식으로 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 주어진 도함수의 부정적분 — 연속 조건으로 적분상수 연결"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 구간 적분은 쉽지만 두 적분상수가 독립이라 f(π) 하나로는 f(-π) 를 얻을 수 없고, x=0 연속이 두 상수를 잇는 유일한 다리다. 이 다리를 못 보면 문제가 성립하지 않는다.
    통찰 1개(CON d2)·M_total 7(T-경계 포함) · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "구간별 f 를 각각 적분 → f(π)=0 으로 오른쪽 상수 → x=0 연속으로 왼쪽 상수 → f(-π)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\pi-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0902.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간 도함수의 계수(2sin x-cos x → sin x+2cos x)와 f(π) 값, 묻는 점을 바꿀 수 있음. 제약: 경계 x=0 에서 양쪽 적분값이 모두 유한·간단해야 하고 답이 aπ+b 꼴로 떨어지게 한다."
    creative: "(1) 경계를 x=π/2 로 옮기기(★2 유지) (2) f 대신 f' 의 연속까지 요구해 도함수 계수를 미지수로(★3) (3) 연속 조건을 빼고 「f 가 미분가능」으로 바꾸면 조건 해석 단계가 늘어 ★3."
```

```yaml
- id: RPM-CALC2-0903
  page: 128
  vendor_label: "유형 04 삼각함수의 부정적분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ f'(x)=a sec²x, ㈏ x→π/3 에서 (f(x)-3√3)/(3x-π) 의 극한이 4 일 때 f(π/6). 5지선다.
  category: "극한을 미분계수 정의로 환원 → a 결정 → 분자 극한 0 으로 적분상수 결정 → 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3x-π=3(x-π/3) 로 고쳐 극한을 f'(π/3)/3 인 미분계수 정의로 동치 변환"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 0 으로 가므로 분자도 0, 즉 f(π/3)=3√3 을 읽어 적분상수를 확정"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "도함수·극한 조건으로 미정계수와 적분상수를 함께 결정(sec²)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모를 3(x-π/3) 로 묶어 미분계수 정의로 보는 변환과, 극한이 유한하므로 분자가 0 이라는 필요조건 두 가지가 모두 필요하다. 그 뒤 a=3·C=0 은 대입 한 줄.
    통찰 2개·M_total 6 · level 상중 출발점 ★3 유지(★4 로 올릴 만큼 계산·추상도가 높지는 않다).
  tier: star_3
  mechanism_primary: "극한 → f'(π/3)/3=4 로 a=3, 분자 극한 0 으로 f(π/3)=3√3 → C=0 → f(π/6)=3 tan(π/6)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0903.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값(4), 분모의 배수(3x-π 의 3), 기준점 π/3, 묻는 점 π/6 을 바꿀 수 있음. 제약: 기준점의 sec²·tan 가 특수각이어야 하고 분자 상수는 반드시 f(기준점) 과 같아야 극한이 존재한다."
    creative: "(1) f'=a csc²x 로 바꿔 cot 이 나오게(★3 유지) (2) 분자를 f(x)-k 로 두고 k 까지 미지수로 하면 조건 통합 강화 ★4 (3) 극한 대신 정적분 조건 ∫f'=값 으로 주면 통찰이 EQV 하나로 줄어 ★2."
```

### 유형 05 유리함수, 무리함수의 정적분

```yaml
- id: RPM-CALC2-0904
  page: 129
  vendor_label: "유형 05 유리함수, 무리함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₁⁹ (4x-1)/(2√x+1) dx + ∫₁⁹ (4x-1)/(2√x-1) dx 의 값. 5지선다.
  category: "4x-1 을 켤레 곱으로 인수분해 → 각각 약분 → 합쳐서 4√x 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4x-1=(2√x+1)(2√x-1) 로 보고 각 적분의 분모를 약분해 두 적분의 합을 ∫4√x 로 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무리식 분모의 정적분 — 켤레 인수분해로 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √ 가 분모에 있어 그대로는 적분이 안 되고, 분자 4x-1 이 켤레의 곱이라는 것을 보는 순간 두 적분이 (2√x-1)+(2√x+1)=4√x 로 합쳐진다. 그 뒤는 분수지수 공식 한 줄.
    통찰 1개(EQV d2)·M_total 5 · 유형 구역 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "4x-1=(2√x+1)(2√x-1) 약분 → 두 피적분함수 합 4√x → (8/3)x^{3/2} 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0904.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(1~9 → 1~4, 4~9)과 켤레의 계수(2√x±1 → 3√x±2, 분자 9x-4)를 바꿀 수 있음. 제약: 분자가 반드시 두 분모의 곱과 같아야 하고 끝점이 제곱수여야 √ 값이 정리된다."
    creative: "(1) 두 적분을 빼기로 바꿔 상수 2 가 남게(★2 유지) (2) 분자를 곱이 아닌 4x+1 로 두어 유리화가 필요하게 하면 착안 2회 ★3 (3) 분모를 √(x)+√(x-1) 꼴 켤레로 바꾸면 망원 구조로 ★3."
```

```yaml
- id: RPM-CALC2-0905
  page: 129
  vendor_label: "유형 05 유리함수, 무리함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₁²(5x+6)√x dx 의 값.
  category: "전개해 분수지수 → 거듭제곱 적분 공식 → 대입"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 정적분 — 분수지수로 고쳐 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √x 를 x^{1/2} 로 보고 전개하면 5x^{3/2}+6x^{1/2} 두 항뿐이고 착안이 필요한 지점이 없다.
    통찰 0·M_total 4 → level 중하 출발점(★1~2)에서 -1 적용해 ★1.
  tier: star_1
  mechanism_primary: "(5x+6)√x=5x^{3/2}+6x^{1/2} → 2x^{5/2}+4x^{3/2} → 1~2 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16\sqrt{2}-6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0905.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(5, 6)와 구간(1~2 → 1~4, 4~9)을 자유롭게 바꿀 수 있음. 제약: 끝점이 제곱수면 무리수가 사라지고 아니면 a√2+b 꼴로 남으므로 답 형식을 먼저 정한다."
    creative: "(1) √x 를 ∛x 로 바꾸기(★1 유지) (2) (5x+6)/√x 로 분모에 두면 음의 분수지수 처리 추가 ★2 (3) 적분값을 주고 계수를 역으로 묻게 하면 I-BW 로 ★2."
```

```yaml
- id: RPM-CALC2-0906
  page: 129
  vendor_label: "유형 05 유리함수, 무리함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₁^e (1+x)³/x² dx - ∫₁^e (1-x)³/x² dx 의 값.
  category: "같은 구간 두 적분을 하나로 → (1+x)³-(1-x)³ 전개(짝수항 소거) → 항별 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 같으므로 두 적분을 하나로 묶고 (1+x)³-(1-x)³=6x+2x³ 로 짝수 차수 항을 상쇄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유리함수의 정적분 — 두 적분을 합쳐 전개·상쇄"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각각 전개해 따로 적분해도 되지만 그러면 계산이 두 배가 되고, 합쳐서 전개하면 짝수항이 사라져 6/x+2x 두 항만 남는다. 먼저 합친다는 판단이 이 문항의 값어치.
    통찰 1개(EQV d2)·M_total 5 · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 적분 합치기 → (6x+2x³)/x²=6/x+2x → 6 ln x+x² → 1~e 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e^2+5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0906.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수(³ → ⁵), 분모(x² → x³), 구간(1~e → 1~e²)을 바꿀 수 있음. 제약: 상쇄 뒤 남는 항이 1/x 를 포함해야 ln 이 나오고, 구간 끝은 e 의 거듭제곱이어야 답이 정리된다."
    creative: "(1) 두 적분을 더하기로 바꿔 홀수항이 소거되게(★2 유지) (2) 분모를 x² 와 x³ 로 다르게 주면 합치기 전에 통분이 필요해 ★3 (3) (1+x)³ 를 (1+√x)³ 로 바꾸면 분수지수까지 겹쳐 ★3."
```

```yaml
- id: RPM-CALC2-0907
  page: 129
  vendor_label: "유형 05 유리함수, 무리함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₁⁹ (√x+1)²/x dx = a ln 3+b 일 때 유리수 a, b 에 대하여 a+b. 5지선다.
  category: "전개해 항별 분해 → 1+2x^{-1/2}+1/x 적분 → ln 9=2 ln 3 정리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리식 분자의 정적분 — 전개 후 항별 적분(로그항 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개해서 세 항으로 나누는 표준 절차뿐이고, 마지막에 ln 9 를 2 ln 3 으로 고쳐 계수를 비교하는 것만 주의하면 된다.
    통찰 0 이지만 M_total 5 에 항이 셋이라 -1 은 적용하지 않고 level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(√x+1)²/x=1+2x^{-1/2}+1/x → x+4√x+ln x → ln 9=2 ln 3 으로 a=2, b=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0907.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(1~9 → 1~4 이면 ln 2), 분자의 상수(+1 → +2)를 바꿀 수 있음. 제약: 끝점이 제곱수여야 √ 가 정리되고 ln(끝점) 이 ln 2·ln 3 의 정수배로 떨어져야 계수 비교가 성립한다."
    creative: "(1) a-b, ab 를 묻게 바꾸기(★2 유지) (2) 분모를 x² 로 두면 로그항이 사라져 ★1~2 (3) 적분값을 주고 구간의 끝을 역으로 묻게 하면 I-BW 로 ★3."
```

### 유형 06 지수함수의 정적분

```yaml
- id: RPM-CALC2-0908
  page: 129
  vendor_label: "유형 06 지수함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₀^{ln 2} e^{2x}/(e^x+1) dx + ∫_{ln 2}^0 1/(e^t+1) dt 의 값. 5지선다.
  category: "뒤집힌 적분 구간을 부호 반전으로 합치기 → 약분 → 지수함수 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 적분의 위끝·아래끝이 뒤바뀐 것을 부호 반전으로 고쳐 같은 구간의 한 적분 (e^{2x}-1)/(e^x+1)=e^x-1 로 합침"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간이 뒤바뀐 두 정적분의 합 — 부호 반전 후 합쳐서 약분(지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각각은 그대로 적분되지 않고, 아래끝이 ln 2 인 둘째 적분을 -∫₀^{ln2} 로 고쳐 합치면 분자가 e^{2x}-1 이 되어 약분된다. 적분변수가 t 로 다른 것은 눈속임.
    통찰 1개(EQV d2)·M_total 6(T-부호) · 유형 구역 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_{ln2}^0=-∫₀^{ln2} 로 합치기 → (e^{2x}-1)/(e^x+1)=e^x-1 → e^x-x 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0908.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝(ln 2 → ln 3), 분자 차수(e^{2x} → e^{3x} 이면 e^{2x}-e^x+1 로 약분)를 바꿀 수 있음. 제약: 합친 분자가 e^x+1 로 나누어떨어져야 하고 끝점이 ln(정수)여야 답이 정리된다."
    creative: "(1) 둘째 적분을 -∫₀^{ln2} 로 이미 써 주면 착안이 사라져 ★1~2 (2) 분모를 e^x-1 로 바꾸면 x=0 에서 특이점이 생겨 구간 설계가 필요해 ★3 (3) 두 적분의 구간을 다르게 주면 구간 가법성까지 필요해 ★3."
```

```yaml
- id: RPM-CALC2-0909
  page: 129
  vendor_label: "유형 06 지수함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₀¹(e^x+e^{-x})² dx 의 값.
  category: "전개 → e^{2x}+2+e^{-2x} 항별 적분 → 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 정적분 — 제곱 전개 후 항별 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 교차항이 상수 2 가 되는 표준 구조이고, e^{-2x} 의 부정적분이 -e^{-2x}/2 라는 부호·계수 처리만 함정이다.
    통찰 0 이나 M_total 5 에 T-부호가 있어 -1 을 적용하지 않고 level 중하 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "(e^x+e^{-x})²=e^{2x}+2+e^{-2x} → e^{2x}/2+2x-e^{-2x}/2 → 0~1 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{e^2}{2}+2-\dfrac{1}{2e^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0909.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0~1 → 0~ln 2 이면 값이 유리수로 떨어짐)과 괄호 안 계수(e^x+2e^{-x})를 바꿀 수 있음. 제약: 전개 후 각 항이 e^{kx} 꼴이어야 하고 k≠0 인 항의 계수 1/k 를 놓치지 않게 설계한다."
    creative: "(1) (e^x-e^{-x})² 로 부호를 바꾸기(★2 유지) (2) 구간을 -1~1 로 두면 우함수 대칭을 쓸 수 있어 I-SYM ★2~3 (3) 적분값을 주고 구간의 끝을 묻게 하면 지수방정식이 붙어 ★3."
```

```yaml
- id: RPM-CALC2-0910
  page: 129
  vendor_label: "유형 06 지수함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{-1}^1 √(e^{2x}+2e^x+1) dx 의 값. 5지선다.
  category: "근호 안을 완전제곱으로 → e^x+1>0 확인 후 근호 벗기기 → 적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "e^{2x}+2e^x+1=(e^x+1)² 로 보고 e^x+1>0 이므로 √ 를 그대로 벗김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근호 안이 완전제곱인 지수함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱만 보면 끝나고, √(A²)=|A| 에서 e^x+1 이 항상 양수임을 확인하는 것이 유일한 함정이다.
    통찰 1개(EQV d1)·M_total 5(T-부호) · level 중하 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "√((e^x+1)²)=e^x+1 → e^x+x → -1~1 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0910.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(-1~1 → 0~ln 3)과 완전제곱 꼴(e^{2x}+4e^x+4)을 바꿀 수 있음. 제약: 근호 안이 실제로 완전제곱이어야 하고 내부 식이 구간에서 부호를 바꾸지 않아야 한다."
    creative: "(1) e^{2x}-2e^x+1=(e^x-1)² 로 바꾸면 x=0 에서 부호가 갈려 절댓값 분할이 필요해 ★3 (2) 근호를 세제곱근으로 바꾸기(★2 유지) (3) 삼각형 꼴 √(1-cos 2x)=√2|sin x| 로 옮기면 같은 골조의 삼각 버전 ★2."
```

```yaml
- id: RPM-CALC2-0911
  page: 129
  vendor_label: "유형 06 지수함수의 정적분"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∫₀¹(3^x-1)(9^x+3^x+1) dx = a/(3 ln 3)-b 일 때 자연수 a, b 에 대하여 a-b.
  category: "세제곱 차 곱셈공식 역인식 → 27^x-1 → 지수함수 적분 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3^x=t 로 보면 (t-1)(t²+t+1)=t³-1 이므로 피적분함수가 27^x-1 임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수의 정적분 — 곱셈공식(세제곱 차) 역인식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그대로 전개하면 항이 여섯 개로 늘지만 9^x=(3^x)² 를 알아채면 세제곱 차 공식으로 27^x-1 한 항이 된다. 그 뒤는 a^x 적분 공식과 ln 27=3 ln 3 정리.
    통찰 1개(EQV d2)·M_total 5 · level 중 출발점 ★2 유지(서술형 태그는 +0).
  tier: star_2
  mechanism_primary: "(3^x-1)(9^x+3^x+1)=27^x-1 → 27^x/(3 ln 3)-x → a=26, b=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0911.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2 이면 8^x-1)과 구간(0~1 → 0~2)을 바꿀 수 있음. 제약: 세제곱 차 꼴이 정확히 맞아야 하고 답이 a/(k ln m)-b 꼴 자연수로 떨어지도록 구간을 잡는다."
    creative: "(1) (3^x+1)(9^x-3^x+1)=27^x+1 로 부호를 뒤집기(★2 유지) (2) 밑이 다른 두 지수(2^x·3^x)를 섞어 6^x 가 나오게 하면 정리 단계 +1 ★3 (3) a-b 대신 a, b 를 각각 묻는 서술형으로 두면 ★2 유지."
```

### 유형 07 삼각함수의 정적분

```yaml
- id: RPM-CALC2-0912
  page: 130
  vendor_label: "유형 07 삼각함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₀^{π/2} 1/(1+sin x) dx + ∫_{π/2}^0 sin²x/(1+sin x) dx 의 값.
  category: "뒤집힌 구간을 부호 반전으로 합치기 → (1-sin²x)/(1+sin x)=1-sin x → 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 적분의 구간을 뒤집어 부호를 바꿔 합치면 분자가 1-sin²x 가 되어 1-sin x 로 약분"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간이 뒤바뀐 두 정적분의 합 — 부호 반전 후 합쳐서 약분(삼각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0908 의 삼각 버전이다. 각각은 유리화가 필요하지만 합치면 약분 한 번으로 1-sin x 가 되어 계산이 거의 사라진다.
    통찰 1개(EQV d2)·M_total 5(T-부호) · 유형 구역 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_{π/2}^0=-∫₀^{π/2} 로 합치기 → (1-sin²x)/(1+sin x)=1-sin x → x+cos x 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{2}-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0912.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0~π/2 → 0~π/6)과 분모(1+sin x → 1+cos x, 분자 cos²x)를 바꿀 수 있음. 제약: 합친 분자가 분모로 나누어떨어져야 하고 끝점은 특수각이어야 한다."
    creative: "(1) 두 적분의 분자를 1 과 cos²x 로 두어 sin²x 가 남게(★2 유지) (2) 합치기 전에 각각 유리화하도록 구간을 다르게 주면 ★3 (3) 분모를 1-sin x 로 바꾸면 x=π/2 특이점을 피하는 구간 설계가 필요해 ★3."
```

```yaml
- id: RPM-CALC2-0913
  page: 130
  vendor_label: "유형 07 삼각함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₀^{π/2}(sin x+cos x)² dx - ∫_{π/2}^0 (sin x-cos x)² dx 의 값.
  category: "뒤집힌 구간을 부호 반전 → 두 제곱의 합 = 2 → 상수 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘째 적분을 부호 반전해 합치면 (sin+cos)²+(sin-cos)²=2 로 교차항이 상쇄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간이 뒤바뀐 두 정적분의 합 — 제곱의 합에서 교차항 상쇄"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호를 두 번(빼기와 뒤집힌 구간) 처리하면 실질적으로 더하기가 되고, 그 순간 2sin x cos x 가 상쇄돼 피적분함수가 상수 2 가 된다.
    통찰 1개(EQV d1)·M_total 4 이지만 부호 함정이 있어 level 중하 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "-∫_{π/2}^0=+∫₀^{π/2} → (sin+cos)²+(sin-cos)²=2 → 2·(π/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0913.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0~π/2 → 0~π)과 괄호 안 계수(2sin x±cos x 이면 합이 5)를 바꿀 수 있음. 제약: 두 제곱의 합이 상수가 되려면 계수쌍이 같아야 한다."
    creative: "(1) 부호를 반대로 두어 교차항 4sin x cos x=2sin 2x 만 남게 하면 배각 적분 추가 ★2~3 (2) 세제곱으로 올리면 전개·상쇄가 커져 ★3 (3) 구간을 뒤집지 않고 그대로 주면 착안이 사라져 ★1."
```

```yaml
- id: RPM-CALC2-0914
  page: 130
  vendor_label: "유형 07 삼각함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{π/6}^{π/3}(1+3sin³x)/sin²x dx = a√3+b 일 때 유리수 a, b 에 대하여 a+b.
  category: "항별 분해 → csc²x+3sin x → 적분 → 특수각 대입·계수 비교"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 나눠 1/sin²x=csc²x, 3sin³x/sin²x=3sin x 로 각각 공식 적분 꼴로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분수꼴 삼각식의 정적분 — 항별 분해(csc²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나누기만 하면 csc²x 와 sin x 두 항이 되고 부정적분은 -cot x-3cos x 로 공식 그대로다. 실질 난이도는 특수각 두 곳 대입과 √3 계수 정리에 있다.
    통찰 1개(EQV d1)·M_total 5 · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1+3sin³x)/sin²x=csc²x+3sin x → -cot x-3cos x → π/6, π/3 대입 후 계수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0914.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3, 구간(π/6~π/3 → π/4~π/3), 분모(sin²x → cos²x 이면 sec²x+3cos x)를 바꿀 수 있음. 제약: 분자의 차수가 분모보다 1 이상 커야 항별 분해가 공식 꼴로 떨어진다."
    creative: "(1) a-b, ab 를 묻게 바꾸기(★2 유지) (2) 분자에 cos x 항을 넣어 cot x csc x 가 나오게 하면 공식 1개 추가 ★2~3 (3) 적분값을 주고 구간의 끝을 역으로 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: RPM-CALC2-0915
  page: 130
  vendor_label: "유형 07 삼각함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{π/6}^{π/3}(tan²x+cot²x)dx + ∫_{π/6}^{π/3}(k-sec²t)dt = 2√3/3+π/2 일 때 상수 k.
  category: "같은 구간 두 적분 합치기 → tan²-sec²=-1, cot²=csc²-1 → 적분 → k 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간이 같으므로 합쳐서 tan²x-sec²x=-1 로 상쇄하고 cot²x=csc²x-1 로 바꿔 csc²x+(k-2) 만 남김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 정적분 — 합쳐서 항등식 상쇄 후 미정상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan² 와 sec² 가 서로 다른 적분에 흩어져 있어 합치기 전에는 상쇄가 보이지 않는다. 합치면 csc²x 와 상수항만 남아 k 는 π 계수 비교 한 줄로 나온다.
    통찰 1개(EQV d2)·M_total 6(미지 상수 k) · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 적분 합치기 → csc²x+(k-2) → -cot x+(k-2)x 대입 → π 계수 비교로 k=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0915.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 두 항(2√3/3, π/2), 구간, 상쇄 대상(sec² → csc²)을 바꿀 수 있음. 제약: 무리수항은 cot 차이에서 고정되므로 우변의 무리수 부분은 구간이 정하고 k 는 유리수 π 계수만 조절한다."
    creative: "(1) k 를 적분 밖 계수로 두어 k∫ 꼴로 바꾸면 계수 비교가 곱셈으로 ★2 유지 (2) 두 적분의 구간을 다르게 주면 합치기 전에 구간 가법성이 필요해 ★3 (3) k 대신 구간의 끝을 미지수로 하면 방정식이 초월꼴이 되어 ★4."
```

### 유형 08 구간에 따라 다르게 정의된 함수의 정적분

```yaml
- id: RPM-CALC2-0916
  page: 130
  vendor_label: "유형 08 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=e^{-x}-1 (x≤0), sin x (x≥0) 일 때 ∫_{-1}^π f(x)dx. 5지선다.
  category: "경계 x=0 에서 구간 분할 → 각 구간 공식 적분 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분 — 경계에서 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의가 갈리는 x=0 에서 적분을 둘로 쪼개는 것이 이 유형의 표준 절차이고, e^{-x} 의 부정적분 부호만 주의하면 된다.
    통찰 0 이나 M_total 6(T-경계) 이라 -1 을 적용하지 않고 유형 구역 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_{-1}^0(e^{-x}-1)+∫₀^π sin x → (-e^{-x}-x)+(-cos x) 대입 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0916.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 양 끝(-1, π)과 각 조각의 함수(e^{-x}-1 → 2^x, sin x → cos x)를 바꿀 수 있음. 제약: 경계는 반드시 두 정의가 만나는 점이어야 하고 끝점은 특수각·ln 정수로 잡는다."
    creative: "(1) 조각 함수에 미지 상수를 넣고 연속을 요구하면 I-CON 추가 ★2~3(0918 꼴) (2) 경계를 두 개로 늘려 세 조각으로(★3) (3) 적분값을 주고 위끝을 역으로 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: RPM-CALC2-0917
  page: 130
  vendor_label: "유형 08 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2^x (x≤1), 2/x (x≥1) 일 때 ∫_{-1}^2 f(x)dx.
  category: "경계 x=1 에서 분할 → 지수함수·로그 적분 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분 — 지수·유리 조각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분할 자체는 표준이고 실질 부담은 2^x 의 부정적분 2^x/ln 2 와 2/x 의 2 ln x 두 공식을 정확히 쓰는 데 있다.
    통찰 0·M_total 6(T-경계) · level 중하 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "∫_{-1}^1 2^x+∫₁² (2/x) → 2^x/ln 2 와 2 ln x 대입 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\ln 2+\dfrac{3}{2\ln 2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0917.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3), 경계(1), 양 끝(-1, 2 → 4)을 바꿀 수 있음. 제약: 경계에서 두 식이 같은 값을 갖도록(연속) 계수를 맞추면 문제가 자연스럽고, 로그 조각의 끝점은 경계의 정수배로 둔다."
    creative: "(1) 두 조각을 e^x 와 1/x 로 바꾸기(★2 유지) (2) 경계에서 불연속이 되게 만들고 그래도 정적분이 존재함을 묻는 개념형(★3) (3) 조각 중 하나에 절댓값을 넣어 재분할이 필요하게 하면 ★3."
```

```yaml
- id: RPM-CALC2-0918
  page: 130
  vendor_label: "유형 08 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=sin x (x<0), cos x+k (x≥0) 가 모든 실수에서 연속일 때 ∫_{-π}^π f(x)dx. 5지선다.
  category: "x=0 연속으로 k 결정 → 경계에서 분할 → 각 구간 적분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin 0=cos 0+k 로 두 조각을 이어 k=-1 을 먼저 확정한 뒤에야 적분이 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간별 정의 함수의 정적분 — 연속 조건으로 미정상수 결정 후 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 전에 연속 조건으로 k 를 정해야 한다는 순서가 유일한 관문이고, 그 뒤는 0916 과 같은 분할 적분이다.
    통찰 1개(CON d1)·M_total 7(T-경계) · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "연속 조건 0=1+k → k=-1 → ∫_{-π}^0 sin x+∫₀^π(cos x-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0918.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 함수(sin x → 2sin x), 경계(0), 적분 구간(-π~π)을 바꿀 수 있음. 제약: 경계에서 연속이 되도록 k 가 유일하게 정해져야 하고 답이 aπ+b 꼴로 떨어지게 구간을 잡는다."
    creative: "(1) 연속 대신 미분가능 조건으로 바꾸면 조건이 두 개가 되어 ★3 (2) 미지 상수를 두 조각에 하나씩 넣고 적분값까지 주면 연립이 되어 ★3 (3) 경계를 π/2 로 옮기기(★2 유지)."
```

### 유형 09 절댓값 기호를 포함한 함수의 정적분

```yaml
- id: RPM-CALC2-0919
  page: 131
  vendor_label: "유형 09 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₀^π |sin x-cos x| dx 의 값. 5지선다.
  category: "부호가 바뀌는 x=π/4 찾기 → 두 구간으로 분할 → 각각 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 삼각함수의 정적분 — 부호 변화점에서 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin x=cos x 인 x=π/4 를 찾아 두 구간으로 나누는 표준 절차이고(스키마상 절댓값 구간 분할은 통찰이 아니라 T-부호 함정) 계산은 sin+cos 부정적분 두 번이다.
    통찰 0·M_total 6 · 유형 구역 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin x-cos x 의 부호가 π/4 에서 바뀜 → ∫₀^{π/4}(cos-sin)+∫_{π/4}^π(sin-cos)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0919.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0~π → 0~2π 이면 분할점 2개), 피적분함수(sin x-cos x → sin x-√3 cos x)를 바꿀 수 있음. 제약: 분할점이 구간 내부의 특수각이어야 하고 개수를 먼저 확인해야 한다."
    creative: "(1) |sin 2x| 처럼 주기를 줄여 분할점을 늘리면 I-PD 성격 추가 ★3 (2) 적분값을 주고 위끝을 묻게 하면 I-BW 로 ★3(0922 꼴) (3) 합성 R sin(x+α) 로 바꿔 분할점을 찾게 하면 ★3."
```

```yaml
- id: RPM-CALC2-0920
  page: 131
  vendor_label: "유형 09 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{-1}^1 |e^x-1| dx 의 값.
  category: "e^x=1 인 x=0 에서 분할 → 각 구간 부호 결정 → 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 지수함수의 정적분 — 부호 변화점에서 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e^x-1 의 부호가 x=0 에서 바뀌는 것만 보면 나머지는 e^x∓x 부정적분 두 번이다.
    통찰 0·M_total 6(T-부호) · level 중하 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "x=0 에서 부호 전환 → ∫_{-1}^0(1-e^x)+∫₀^1(e^x-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e+\dfrac{1}{e}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0920.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(-1~1 → -ln2~ln3), 내부 상수(|e^x-2| 이면 분할점 ln 2)를 바꿀 수 있음. 제약: 분할점이 구간 안에 있어야 하고 없으면 절댓값이 무의미해진다."
    creative: "(1) |e^x-e| 로 분할점을 x=1 로 옮기기(★2 유지) (2) |e^x-1|+|e^x-2| 로 분할점 2개(★3) (3) 구간의 대칭성을 살려 e^x+e^{-x} 와 묶으면 I-SYM 추가 ★3."
```

```yaml
- id: RPM-CALC2-0921
  page: 131
  vendor_label: "유형 09 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a sin x (0≤x≤π) 의 그래프가 그림과 같을 때(최댓값 2) ∫_{π/6}^{5π/6}|f'(x)|dx.
  category: "그래프에서 a 읽기 → f'=a cos x → π/2 에서 분할 → 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 최댓값 2 에서 a=2 를 읽어 식 f'(x)=2cos x 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 계수를 읽고 도함수의 절댓값을 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림은 a 를 주는 용도뿐이고, 본체는 cos x 의 부호가 π/2 에서 바뀌는 절댓값 분할이다. 구간이 π/2 에 대칭이라 두 조각의 값이 같다.
    통찰 1개(RT d1)·M_total 6(T-부호) · level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프 최댓값 2 → a=2 → |2cos x| 를 π/2 에서 분할 → 두 조각 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0921.png"
  latex: latex-bank/rpm-calc2/items/0921.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 최댓값 a(2 → 3), 적분 구간(π/6~5π/6 → π/4~3π/4)을 바꿀 수 있음. 제약: 그림 라벨(최댓값·π/2·π 눈금)은 식과 반드시 일치해야 하므로 a 를 바꾸면 크롭도 함께 바꿔야 한다."
    creative: "(1) f(x)=a sin 2x 로 주기를 절반으로 만들면 분할점이 2개 ★3 (2) ∫|f'| 대신 ∫|f| 를 묻기(★2 유지) (3) 그래프에 특정 점을 지난다는 조건만 주고 a 를 계산하게 하면 단계 +1 ★2~3."
```

```yaml
- id: RPM-CALC2-0922
  page: 131
  vendor_label: "유형 09 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{1/2}^a |1/x-1| dx=1/2 (a>1) 일 때 정수 a.
  category: "x=1 에서 분할 → a 를 문자로 둔 적분값 식 → 방정식 → 정수해 확인"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분값 1/2 이라는 결과 조건에서 위끝 a 를 역추적하고 ln 항이 상쇄되는 정수 a 를 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 정적분의 값이 주어질 때 적분 구간의 끝 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분할점 x=1 이 구간 안에 있다는 확인(a>1)과, 위끝이 문자라 적분 결과가 a-ln a+ln 2-3/2 인 초월식이 되는 것이 부담이다. 방정식이 대수적으로 풀리지 않으므로 「정수 a」 조건으로 ln 항이 사라지는 a=2 를 찾는다.
    통찰 1개(BW d2)·M_total 8(T-부호·T-범위) → level 중 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "x=1 분할 → ∫_{1/2}^1(1/x-1)+∫₁^a(1-1/x) → a-ln a+ln 2-3/2=1/2 → 정수 a=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0922.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝(1/2), 적분값(1/2), 절댓값 안의 식(1/x-1 → 1/x-2 이면 분할점 1/2)을 바꿀 수 있음. 제약: 답이 초월방정식이 되므로 ln 항이 상쇄되는 정수 해가 존재하도록 아래끝과 적분값을 역설계해야 한다."
    creative: "(1) a<1 로 범위를 바꿔 분할이 일어나지 않게 하면 ★2 (2) |ln x| 로 바꾸면 부분적분이 필요해 단원 밖으로 확장 ★4 (3) a 를 주고 적분값을 묻는 정방향으로 되돌리면 ★2."
```

### 유형 UP 10 우함수, 기함수, 주기함수의 정적분

```yaml
- id: RPM-CALC2-0923
  page: 131
  vendor_label: "유형 UP 10 우함수, 기함수, 주기함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=(1-x)cos x 에 대하여 ∫_{-π/2}^π f(x)dx + ∫_π^{π/2} f(x)dx 의 값.
  category: "뒤집힌 적분으로 구간 합치기 → 대칭구간 → 우·기함수 분리해 기함수 항 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘째 적분을 -∫_{π/2}^π 로 보아 첫 적분에서 빼면 구간이 -π/2~π/2 인 대칭구간으로 줄어듦"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f=cos x-x cos x 에서 cos x 는 우함수, x cos x 는 기함수이므로 대칭구간에서 기함수 항이 0 으로 소거"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "우함수·기함수의 정적분 — 대칭구간 만들기와 기함수 항 소거"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간을 합쳐 대칭구간으로 만드는 것과, 곱을 우·기함수로 쪼개 한쪽을 버리는 것 두 단계가 모두 필요하다. 남는 계산은 2∫₀^{π/2}cos x 한 줄이라 계산 부담은 거의 없다.
    통찰 2개(EQV d1+SYM d2)·M_total 5 · 유형 UP 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "두 적분을 합쳐 ∫_{-π/2}^{π/2} → x cos x(기함수) 소거 → 2∫₀^{π/2}cos x"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0923.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(1-x → 2-3x), 대칭구간의 폭(π/2 → π/3)을 바꿀 수 있음. 제약: 합친 뒤 구간이 반드시 원점 대칭이어야 하고 우함수 항의 적분이 특수각에서 정리돼야 한다."
    creative: "(1) f=(1-x)sin x 로 두면 우·기함수 역할이 뒤바뀜(★3 유지) (2) 구간을 합쳐도 대칭이 되지 않게 두면 대칭 전략이 무력화되어 ★2 (3) f 에 x² 항을 넣어 우·기함수 항이 셋이 되게 하면 ★3~4."
```

```yaml
- id: RPM-CALC2-0924
  page: 131
  vendor_label: "유형 UP 10 우함수, 기함수, 주기함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    ∫₀^{4π}|cos x| dx 의 값.
  category: "|cos x| 의 주기가 π 임을 이용 → 한 주기 적분값 × 주기 수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cos x 의 주기는 2π 이지만 절댓값을 씌우면 주기가 π 로 줄어드는 것을 보고 4주기로 분할"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주기함수의 정적분 — 절댓값으로 줄어든 주기 × 한 주기 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정직하게 분할하면 구간이 네 개지만 |cos x| 의 주기가 π 임을 보면 한 주기 값 2 에 4 를 곱해 끝난다. 주기가 2π 라고 착각하면 분할 수를 틀린다.
    통찰 1개(PD d2)이나 M_total 4 로 계산이 가벼워 유형 UP 출발점 ★3 에서 -1 한 ★2(벤더 level 중과도 일치).
  tier: star_2
  mechanism_primary: "|cos x| 의 주기 π → ∫₀^{4π}=4∫₀^π|cos x|=4·2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0924.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 위끝(4π → 5π, 7π/2 이면 끝이 주기에 안 떨어져 나머지 조각이 생김)과 함수(|cos x| → |sin 2x|)를 바꿀 수 있음. 제약: 위끝이 주기의 정수배가 아니면 자투리 구간을 따로 계산해야 한다."
    creative: "(1) 위끝을 주기의 정수배가 아니게 두어 자투리를 만들면 ★3 (2) |sin x|+|cos x| 로 두면 주기가 π/2 로 더 줄어 ★3 (3) 적분값을 주고 위끝을 묻게 하면 I-BW 로 ★3(0926 꼴)."
```

```yaml
- id: RPM-CALC2-0925
  page: 131
  vendor_label: "유형 UP 10 우함수, 기함수, 주기함수의 정적분"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    f(x)=sin(cos x) 에서 ∫₀¹f=A, ∫₀²f=B 일 때 ∫_{-1}^1 f + ∫_{-2}^2 f 를 A, B 로 나타내기.
  category: "합성함수의 우함수 판정 → 대칭구간 적분 = 2×반쪽 적분"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(-x)=sin(cos(-x))=sin(cos x) 이므로 기함수 sin 과 우함수 cos 의 합성이 우함수임을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합성함수의 우함수·기함수 판정과 대칭구간 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin 이 기함수라는 겉모습에 끌리면 틀리고, 안쪽 cos 이 우함수라 합성 전체가 우함수가 된다는 판정이 전부다. 판정만 서면 2A+2B 는 한 줄.
    통찰 1개(SYM d2)·M_total 4 · 유형 UP 출발점 ★3 에서 계산량이 거의 없어 -1 한 ★2(벤더 level 중과 일치).
  tier: star_2
  mechanism_primary: "sin(cos x) 는 우함수 → ∫_{-1}^1=2A, ∫_{-2}^2=2B → 2A+2B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2A+2B$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0925.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 끝(1, 2 → 3), 표기 문자(A, B)를 바꿀 수 있음. 제약: 수치가 아니라 문자로 답하는 문항이라 구간은 임의로 둘 수 있으나 두 구간이 포함 관계가 되지 않게 한다."
    creative: "(1) f(x)=cos(sin x) 로 바꿔도 우함수(★2 유지) (2) f(x)=sin(sin x) 로 두면 기함수가 되어 답이 0 — 판정 실수를 노린 변형(★2~3) (3) f(x)=x sin(cos x) 처럼 곱을 섞으면 기함수가 되어 ★3."
```

```yaml
- id: RPM-CALC2-0926
  page: 131
  vendor_label: "유형 UP 10 우함수, 기함수, 주기함수의 정적분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    ㈎ 0≤x≤π 에서 f(x)=sin x, ㈏ 모든 실수에서 f(x)=f(x+π) 일 때 ∫₀^a f(x)dx=10 인 양수 a.
  category: "주기 π 확인 → 한 주기 적분값 2 → 적분값 10 에서 주기 수 역추적 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈏ 가 주기 π 를 뜻하므로 [0, π] 의 sin x 모양이 계속 반복되고 한 주기 적분값이 2 임을 확정"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분값 10 이라는 결과에서 2×(주기 수)=10, 즉 5주기이므로 a=5π 를 역추적"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "주기함수의 정적분 — 적분값이 주어질 때 구간의 끝 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈏ 를 주기 조건으로 읽고 한 주기 넓이 2 를 계산하는 것, 그리고 10 이 2 의 정확한 배수라 자투리 구간이 없다는 것을 확인하는 것이 핵심이다. a 가 주기의 정수배가 아니면 답이 초월식이 되므로 배수 확인은 필수.
    통찰 2개(PD d2+BW d2)·M_total 6 · level 상중 출발점 ★3 유지(계산 부담이 낮아 ★4 로 올리지 않음).
  tier: star_3
  mechanism_primary: "주기 π, 한 주기 적분 2 → 2n=10 → n=5 → a=5π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0926.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분값(10 → 12), 기본 구간의 함수(sin x → 1-cos 2x)를 바꿀 수 있음. 제약: 적분값이 한 주기 값의 정수배여야 a 가 주기의 정수배로 깔끔하게 나온다."
    creative: "(1) 적분값을 한 주기 값의 배수가 아니게 두면 자투리 구간 방정식이 붙어 ★4 (2) 주기를 2π 로 두고 기본 구간을 두 조각으로 주면 ★4 (3) a 를 주고 적분값을 묻는 정방향이면 I-BW 가 사라져 ★2."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0927
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    모든 실수에서 연속인 f 가 x≠0 에서 ∫(e^x+2ex)dx, x=0 에서 0 일 때 f(1).
  category: "부정적분 계산 → x=0 연속으로 적분상수 결정 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(0)=0 과 연속 조건을 묶어 부정적분의 적분상수 C 를 확정(조건이 없으면 f(1) 이 정해지지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수 — 연속 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2ex 의 e 가 상수라는 표기 함정(e^x 가 아님)을 넘기면 부정적분은 e^x+ex²+C 이고, x=0 에서 연속·f(0)=0 이 C=-1 을 준다.
    통찰 1개(CON d2)·M_total 5(T-표기) · 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "∫(e^x+2ex)dx=e^x+ex²+C → 연속·f(0)=0 으로 C=-1 → f(1)=2e-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2e-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0927.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수(2e → 3e), 연속점의 값(f(0)=0 → f(0)=1), 묻는 점(1 → 2)을 바꿀 수 있음. 제약: 상수 e 와 e^x 가 섞여 있어야 함정이 살아 있고, 연속점은 지수항이 간단한 x=0 이 가장 자연스럽다."
    creative: "(1) e 를 π 로 바꿔 상수임을 더 분명히(★1~2) (2) 연속점을 x=1 로 옮기면 e 가 남아 계산이 늘어 ★2~3 (3) 조건을 미분가능으로 바꾸면 조건 해석이 추가되어 ★3."
```

```yaml
- id: RPM-CALC2-0928
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    d/dx ∫f(x)dx = 2^x+e 일 때 f(x) 의 부정적분. 5지선다.
  category: "미분·적분 역관계로 f 읽기 → a^x 적분 공식 → 상수 e 처리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분과 부정적분의 역관계 + 지수함수 적분 공식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    d/dx∫f=f 를 알면 f=2^x+e 이고 다시 적분해 2^x/ln 2+ex+C. 선택지가 ln 2 의 위치(나누기/곱하기)와 e 의 정체(상수/e^x)로 갈려 있어 공식과 표기를 정확히 아는지만 묻는다.
    통찰 0·M_total 4 이지만 선택지 함정이 실질적이라 종합 구역 출발점에서 -1 하지 않고 ★2.
  tier: star_2
  mechanism_primary: "d/dx∫f=f → f=2^x+e → ∫f=2^x/ln 2+ex+C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0928.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3), 상수항(e → π)을 바꿀 수 있음. 제약: 선택지에 2^x ln 2 와 2^x/ln 2, ex 와 e^x 가 모두 들어가야 함정이 유지된다."
    creative: "(1) ∫(d/dx f(x))dx 로 순서를 뒤집으면 f(x)+C 가 되어 개념 대비형 ★2 (2) 두 식을 ㄱㄴㄷ 보기로 묶으면 0929 꼴 ★2~3 (3) f(0) 조건을 추가해 C 까지 정하게 하면 ★2."
```

```yaml
- id: RPM-CALC2-0929
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    ㄱ~ㄷ 세 부정적분 등식 중 옳은 것 고르기(1/x 의 적분, e^x-1, (1-cos²x)/cos²x). 5지선다.
  category: "각 보기를 직접 적분해 대조 → 절댓값·항등식 처리 확인"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분 공식의 참·거짓 판정(보기형) — ln|x| 절댓값과 삼각항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 보기를 각각 적분해 보는 절차형이다. ㄱ 은 ln x 로 적어 절댓값을 빠뜨린 것이 오답 포인트이고, ㄷ 은 (1-cos²x)/cos²x=tan²x=sec²x-1 항등식을 거쳐야 한다.
    통찰 0·M_total 7(T-표기·T-범위) · 종합 구역 출발점에서 ★2(절차형이라 노동량만으로 올리지 않음).
  tier: star_2
  mechanism_primary: "ㄱ: ln|x| 누락으로 거짓 · ㄴ: 그대로 참 · ㄷ: tan²x=sec²x-1 로 참 → ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0929.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 상수항을 바꿀 수 있음. 제약: 참·거짓의 개수와 배치를 바꾸면 선택지 다섯 개를 모두 다시 설계해야 하고, 거짓 보기는 절댓값·부호·계수 중 한 가지 이유만 갖게 한다."
    creative: "(1) 거짓 보기를 부호 실수(e^x+x)로 바꾸기(★2 유지) (2) 정적분 등식으로 바꾸면 구간·절댓값 범위까지 따져야 해 ★3 (3) 보기를 4개로 늘리고 「옳은 것의 개수」를 묻는 꼴로(★2 유지)."
```

```yaml
- id: RPM-CALC2-0930
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    0<x<π 에서 f(x)=1-cos x+cos²x-cos³x+⋯ 일 때 ∫f(x)dx. 5지선다.
  category: "무한등비급수 합으로 f 를 닫힌 꼴로 → 분모 유리화 → 삼각함수 적분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "첫항 1·공비 -cos x 의 무한등비급수로 보고 0<x<π 에서 |공비|<1 임을 확인해 f=1/(1+cos x) 로 닫음(수열 단원 도구)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자·분모에 1-cos x 를 곱해 sin²x 분모로 바꾸고 csc²x-csc x cot x 로 분해"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "무한등비급수로 정의된 함수의 부정적분 — 급수 합 후 유리화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 문제처럼 보이지만 먼저 수열(무한등비급수)로 f 를 닫아야 하고, 정의역 0<x<π 는 수렴 조건 |cos x|<1 을 보장하려고 붙은 것이다. 닫은 뒤에는 0900 과 같은 켤레 유리화.
    통찰 2개(XU d2+EQV d2)·M_total 7 → 종합 구역 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "무한등비급수 → f=1/(1+cos x) → 유리화 → csc²x-csc x cot x → -cot x+csc x+C"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더 · 답 크롭은 0927 것)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0930.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(-cos x → -sin x 이면 정의역 조건이 바뀜), 첫항(1 → 2)을 바꿀 수 있음. 제약: 정의역에서 |공비|<1 이 항상 성립해야 하고 급수의 극한이 0 이 되는 점(cos x=±1)을 정의역에서 빼야 한다."
    creative: "(1) 공비를 cos x 로 두면 f=1/(1-cos x) 가 되어 유리화 상대가 바뀜(★3 유지) (2) 정적분으로 바꾸고 구간 끝을 특수각으로 두면 ★3 유지 (3) 정의역 조건을 묻는 항을 따로 두면 수렴 판정이 주가 되어 ★3~4."
```

```yaml
- id: RPM-CALC2-0931
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    ㈎ x=0 에서 연속, ㈏ f(-π)=0·f(π)=π, ㈐ f'(x) 가 구간별(cos x+k, (1-cos x)/2) 일 때 상수 k.
  category: "구간별 부정적분 → 양 끝 값으로 두 상수 결정 → x=0 연속으로 k 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 조건(연속·두 끝값·구간별 도함수)을 x=0 에서의 좌우 극한 등식 하나로 결합해 k 를 뽑아냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별 도함수와 연속 조건으로 미정상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0902 와 같은 골조지만 미지수가 적분상수 둘에 k 까지 셋이고, 조건도 셋이라 어떤 순서로 쓸지 정해야 한다. 양 끝값으로 두 상수를 각각 없앤 뒤 x=0 연속이 kπ=π/2 를 준다.
    통찰 1개(CON d2)·M_total 7(T-경계)·조건 3개 → 종합 구역 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "x<0: sin x+kx+C₁, x>0: (x-sin x)/2+C₂ → 끝값으로 C₁=kπ, C₂=π/2 → 연속으로 kπ=π/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더 · 답 크롭에 여러 문항 답 혼재)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0931.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝값(0, π), 구간별 도함수의 계수((1-cos x)/2 의 1/2)를 바꿀 수 있음. 제약: 좌우 부정적분이 모두 초등함수로 닫혀야 하고 연속 등식이 k 에 대해 일차라야 유일해가 나온다."
    creative: "(1) k 를 오른쪽 구간에 두면 같은 골조로 미지수 위치만 이동(★3 유지) (2) 연속 대신 미분가능을 요구하면 f' 의 좌우극한 조건이 하나 더 붙어 ★3~4 (3) k 를 주고 f(π) 를 묻는 정방향이면 ★2."
```

```yaml
- id: RPM-CALC2-0932
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    ∫₂⁴(3x²+x)/x² dx + 3∫₂⁴(x-1)/x² dx = a ln 2+b 일 때 유리수 a, b 에 대하여 ab.
  category: "같은 구간 두 적분 합치기 → 항별 분해 → 적분 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간이 같으므로 두 적분을 하나로 묶어 3+4/x-3/x² 로 한 번에 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리함수의 정적분 — 두 적분을 합쳐 항별 분해(로그 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합치지 않고 따로 계산해도 되지만 합치면 1/x 항이 1/x+3/x=4/x 로 모여 실수가 줄어든다. ln 4=2 ln 2 정리와 계수 비교가 마무리.
    통찰 1개(EQV d1)·M_total 5 · 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "두 적분 합치기 → 3+4/x-3/x² → 3x+4 ln x+3/x → a=4, b=21/4 → ab=21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0932.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(2~4 → 1~3), 둘째 적분의 배수 3, 분자 계수를 바꿀 수 있음. 제약: 구간 끝의 비가 2 의 거듭제곱이어야 ln 2 계수로 떨어지고, a·b 가 모두 유리수로 나와야 한다."
    creative: "(1) a+b, a-b 를 묻게 바꾸기(★2 유지) (2) 두 적분의 구간을 2~4 와 4~8 로 다르게 주면 구간 가법성이 필요해 ★3(0933 꼴) (3) 분모를 x³ 로 바꾸면 로그항이 사라져 ★2."
```

```yaml
- id: RPM-CALC2-0933
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    ∫₁⁴ ∛x dx + ∫₂⁸ ∛x dx - ∫₂⁴ ∛x dx 의 값.
  category: "구간 가법성으로 세 적분을 ∫₁⁸ 하나로 합치기 → 분수지수 적분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∫₂⁸-∫₂⁴=∫₄⁸ 로 묶고 ∫₁⁴+∫₄⁸=∫₁⁸ 로 이어 붙여 한 번의 적분으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분의 구간 가법성 — 여러 적분을 한 구간으로 합치기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피적분함수가 모두 같다는 것을 보고 구간을 이어 붙이면 ∫₁⁸ 하나가 되고 끝점이 1 과 8 이라 x^{4/3} 이 정수로 떨어진다. 각각 계산하면 무리수 중간값이 나와 훨씬 번거롭다.
    통찰 1개(EQV d2)·M_total 4 · 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "∫₁⁴+∫₄⁸=∫₁⁸ ∛x → (3/4)x^{4/3} → (3/4)(16-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{45}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0933.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 구간의 끝(1, 2, 4, 8)과 피적분함수(∛x → √x, 1/x)를 바꿀 수 있음. 제약: 세 구간이 이어 붙어 하나가 되도록 겹치는 끝이 정확히 맞아야 하고, 최종 끝점은 세제곱수여야 값이 유리수로 떨어진다."
    creative: "(1) 적분 네 개로 늘려 이어 붙이기를 두 번 하게(★2~3) (2) 피적분함수를 1/x 로 두면 ln 의 덧셈 성질과 겹쳐 ★2 (3) 한 적분의 피적분함수만 다르게 주어 합치기가 부분적으로만 되게 하면 ★3."
```

```yaml
- id: RPM-CALC2-0934
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    ∫_{π/4}^{π/3} 1/(sin²x cos²x) dx 의 값. 5지선다.
  category: "분자 1 을 sin²x+cos²x 로 쪼개기 → sec²x+csc²x → 적분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자의 1 을 sin²x+cos²x 로 되돌려 쪼개면 1/cos²x+1/sin²x 가 되어 두 공식 적분으로 분리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "1=sin²x+cos²x 분해를 이용한 삼각함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그대로는 어떤 공식에도 안 맞고, 분자 1 을 항등식으로 되돌려 쪼개는 한 수가 전부다. 그 뒤 tan x-cot x 에 특수각 두 개를 넣으면 끝.
    통찰 1개(EQV d2)이나 M_total 4 로 계산이 가벼워 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "1=sin²x+cos²x → sec²x+csc²x → tan x-cot x → π/4, π/3 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0934.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(π/4~π/3 → π/6~π/4)을 바꿀 수 있음. 제약: 끝점이 특수각이어야 tan·cot 값이 정리되고 sin·cos 가 0 이 되는 점(0, π/2)은 구간에 넣을 수 없다."
    creative: "(1) 분모를 sin²x cos²x 대신 4sin²x cos²x=sin²2x 로 보면 csc²2x 한 항이 되어 ★2 (2) 분자를 2 로 두고 배각을 쓰게 하면 ★2~3 (3) 적분값을 주고 구간의 끝을 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: RPM-CALC2-0935
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    f(x)=cos x+2 (x≤π/2), 3sin x-1 (x≥π/2) 일 때 ∫₀^π f(x)dx.
  category: "경계 x=π/2 에서 분할 → 각 구간 적분 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수의 정적분 — 삼각함수 조각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=π/2 에서 쪼개 각각 적분하는 표준 절차이고 상수항이 π 를 만들어 한쪽에서 +π, 다른 쪽에서 -π/2 로 남는 정리만 주의하면 된다.
    통찰 0·M_total 6(T-경계) · 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "∫₀^{π/2}(cos x+2)+∫_{π/2}^π(3sin x-1) → (sin x+2x)+(-3cos x-x) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{2}+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0935.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수(2, 3, -1), 경계(π/2), 구간(0~π)을 바꿀 수 있음. 제약: 경계에서 두 식의 값이 같도록 상수를 맞추면 연속 함수가 되고, 아니면 불연속이어도 정적분은 존재함을 의식해 설계한다."
    creative: "(1) 한 조각의 상수를 미지수로 두고 연속을 요구하면 0918 꼴 ★2~3 (2) 경계를 두 개로 늘려 세 조각(★3) (3) 조각 중 하나에 절댓값을 씌우면 재분할이 필요해 ★3."
```

```yaml
- id: RPM-CALC2-0936
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=e^{|x-2|} 일 때 ∫₁⁴ f(x)dx.
  category: "지수의 절댓값이 꺾이는 x=2 에서 분할 → e^{2-x}, e^{x-2} 각각 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수의 절댓값을 포함한 함수의 정적분 — 꺾이는 점에서 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값이 지수 자리에 있을 뿐 분할 기준은 같고(x=2), e^{2-x} 의 부정적분이 -e^{2-x} 라는 부호만 함정이다.
    통찰 0·M_total 6(T-부호) · 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 분할 → ∫₁²e^{2-x}+∫₂⁴e^{x-2} → (-e^{2-x})+(e^{x-2}) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^2+e-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0936.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점(2), 구간(1~4)을 바꿀 수 있음. 제약: 꺾이는 점이 구간 내부에 있어야 분할이 의미가 있고, 구간이 꺾임점에 대칭이면 두 조각이 같아져 2배로 줄일 수 있다."
    creative: "(1) 구간을 0~4 로 대칭으로 두면 우함수 성질로 2∫₂⁴ ★2~3 (2) f(x)=|e^x-2| 로 절댓값 위치를 밖으로 옮기면 분할점이 ln 2 ★2~3 (3) 적분값을 주고 위끝을 묻게 하면 I-BW 로 ★3."
```

```yaml
- id: RPM-CALC2-0937
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    f(x)=e^x+e^{-x}, g(x)=tan x 일 때 ∫_{-1}^1 f(x)g(x)dx.
  category: "우함수×기함수 = 기함수 판정 → 대칭구간 적분 0"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 는 우함수·g 는 기함수이므로 곱이 기함수이고 원점 대칭 구간의 정적분이 0 임을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "우함수·기함수의 곱과 대칭구간 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (e^x+e^{-x})tan x 를 실제로 적분하려 들면 전혀 풀리지 않고, 대칭성 판정 한 줄로 0 이 나오는 설계다. 판정을 못 하면 답이 없는 문제로 느껴진다.
    통찰 1개(SYM d2)이나 M_total 3 으로 노동량이 최소라 종합 구역 출발점에서 ★2.
  tier: star_2
  mechanism_primary: "f 우함수·g 기함수 → fg 기함수 → ∫_{-1}^1=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0937.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 폭(-1~1 → -π/4~π/4)을 바꿀 수 있음. 제약: 구간은 반드시 원점 대칭이어야 하고 tan 이 발산하는 ±π/2 를 포함하면 안 된다."
    creative: "(1) g(x)=sin x·x³ 등 다른 기함수로 바꾸기(★2 유지) (2) f 를 e^x 만으로 두면 우함수가 아니라 대칭이 깨져 실제 적분이 필요해 ★4 이상 (3) 구간을 0~1 로 바꾸면 대칭 전략이 무력화되어 출제 불가 — 대칭 여부 자체를 묻는 보기형으로 ★3(0941 꼴)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0938
  page: 133
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f'(x)=cos²(x/2)-1/2 이고 0<x<2π 에서 f 의 극솟값이 1/2 일 때 극댓값.
  category: "반각공식으로 f'=cos x/2 → 극대·극소점 판정 → 극솟값으로 적분상수 → 극댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos²(x/2)=(1+cos x)/2 로 고치면 f'=cos x/2 가 되어 부호 판정과 적분이 동시에 쉬워짐"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극솟값이 1/2 이라는 결과 조건에서 적분상수 C 를 역으로 확정한 뒤 극댓값을 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도함수의 부정적분과 극값 조건으로 적분상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반각으로 정리하면 f'=cos x/2 이므로 0<x<2π 에서 x=π/2 극대·x=3π/2 극소가 부호 변화로 결정된다. 극솟값 조건이 C 를 주고 극댓값은 대칭적으로 1/2+C.
    통찰 2개(EQV d1+BW d1)·M_total 5 · 서술형 주관식 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=cos x/2 → f=(sin x)/2+C → x=3π/2 극소로 C=1 → 극댓값 f(π/2)=3/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0938.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극솟값(1/2), 반각의 계수(x/2 → x), 정의역(0<x<2π)을 바꿀 수 있음. 제약: 정의역 안에 극대·극소가 각각 하나씩 있어야 하고 반각 정리 후 f' 가 한 항으로 떨어져야 한다."
    creative: "(1) 극댓값을 주고 극솟값을 묻는 역방향(★3 유지) (2) f'=sin²(x/2)-1/2 로 바꾸면 f'=-cos x/2 라 극대·극소 위치가 뒤바뀜(★3 유지) (3) 극값의 차를 묻게 하면 C 가 소거되어 ★2."
```

```yaml
- id: RPM-CALC2-0939
  page: 133
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=x ln x 에서 f'(x) 의 역함수를 g 라 할 때 ∫₁⁴ g(x)dx.
  category: "f'=ln x+1 의 대응점 확인 → 역함수 정적분을 직사각형 넓이 - 원함수 정적분으로 전환 → ∫f'=f 이용"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수의 정적분을 직접 구하지 않고 y=f'(x) 와 y=g(x) 의 넓이 대칭을 써서 4e³-1·1 에서 ∫₁^{e³}f'(x)dx 를 뺀 것으로 전환"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∫f'(x)dx=f(x) 이므로 남은 적분을 f(e³)-f(1) 로 즉시 계산(적분을 다시 하지 않음)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "역함수의 정적분 — 넓이 관계식과 ∫f'=f 활용"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g 를 명시적으로 구하면 x=e^{y-1} 꼴의 지수함수가 되어 되레 돌아가고, 역함수 정적분을 넓이로 옮기는 전환이 정답 경로다. 대응점 g(1)=1·g(4)=e³ 를 먼저 잡아야 직사각형이 정해진다.
    통찰 2개(RT d2+EQV d1)·M_total 8(일반 함수·역함수 추상) → 서술형 구역 출발점 ★3 에서 +1 하여 ★4(저노출 유형 I-RT 포함).
  tier: star_4
  mechanism_primary: "f'=ln x+1, g(1)=1·g(4)=e³ → ∫₁⁴g=4e³-1-∫₁^{e³}f' → f(e³)-f(1)=3e³ → e³-1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$e^3-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0939.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간(1~4 → 1~3), 원함수(x ln x → x² ln x 는 f' 가 단조가 아닐 수 있어 주의)를 바꿀 수 있음. 제약: f' 가 구간에서 단조여야 역함수가 존재하고, 대응점 g(끝값)이 e 의 정수 거듭제곱으로 떨어져야 답이 정리된다."
    creative: "(1) ∫₁⁴f'(x)dx 와 ∫₁⁴g(x)dx 의 합을 묻게 하면 직사각형 넓이 한 줄로 ★3 (2) g 를 명시적으로 주고 정적분만 시키면 통찰이 사라져 ★2 (3) 역함수 그래프와 y=x 대칭을 그림으로 주면 I-RT 가 약해져 ★3."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0940
  page: 133
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    x>0 에서 연속인 f 가 모든 양수 x 에 대해 x²f(x)+2f(1/x)=x-x² 를 만족할 때 ∫₁⁴f(x)dx.
  category: "x 대신 1/x 대입해 두 번째 관계식 생성 → 연립으로 f(x) 결정 → 항별 적분"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「모든 양수 x 에 대하여」를 근거로 x 자리에 1/x 를 넣어 f(x)·f(1/x) 에 대한 두 번째 동치 관계식을 만들어 냄"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 관계식을 f(1/x) 소거 연립으로 결합해 f(x)=(x²+x-2)/(3x²) 닫힌 꼴을 확정"
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: "함수방정식(x ↔ 1/x 치환 연립)으로 f 를 결정한 뒤 정적분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    적분은 마지막 한 줄뿐이고 본체는 함수방정식이다. 항등식이라는 점을 써서 1/x 를 대입한다는 착안이 없으면 미지 함수가 둘인 식 하나로 막힌다. 연립 후에는 1/3+1/(3x)-2/(3x²) 항별 적분.
    통찰 2개(EQV d3+CON d2)·M_total 9(일반 함수 추상) · 실력 Up 구역 출발점 ★4 유지(통찰 3개·SC/VF/SYM/XU 가 없어 ★5 요건은 미충족).
  tier: star_4
  mechanism_primary: "x→1/x 대입으로 둘째 식 → 연립으로 f(x)=1/3+1/(3x)-2/(3x²) → ∫₁⁴ 항별 적분"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{2}+\dfrac{2}{3}\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0940.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(x², 2, 우변 x-x²)와 적분 구간(1~4)을 바꿀 수 있음. 제약: 연립의 계수행렬이 특이하지 않아야(소거 후 f(x) 계수가 0 이 되지 않아야) 해가 유일하고, f 에 1/x 항이 남아야 ln 이 등장한다."
    creative: "(1) 치환을 x→-x 로 바꾼 우·기함수형 함수방정식(★3~4) (2) f(x)+2f(1/x) 처럼 x² 계수를 없애면 연립이 쉬워져 ★3 (3) f(x) 자체를 묻고 적분을 빼면 적분 단원에서 벗어나 ★3."
```

```yaml
- id: RPM-CALC2-0941
  page: 133
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    f 가 연속이고 f(-x)=-f(x) 일 때 ㄱ~ㄹ 네 정적분(sin f(x), cos f(x), f(x)sin x, f(x)cos x) 중 값이 항상 0 인 것 모두 고르기.
  category: "합성·곱의 우기함수 판정 → 대칭구간 적분 0 여부 → 0 이 아닌 것 기각"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f 가 기함수일 때 sin∘f 는 기함수·cos∘f 는 우함수, f×기함수는 우함수·f×우함수는 기함수임을 네 경우에 각각 판정"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우함수로 판정된 ㄴ·ㄷ 은 대칭구간 적분이 2×반쪽이라 0 이라고 단정할 수 없음을 확인해 기각(「항상」 조건의 사후 검증)"
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: "기함수 조건에서 합성·곱의 대칭성 판정과 대칭구간 정적분(보기형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 가 구체적으로 주어지지 않아 모든 판단을 대칭성만으로 해야 하고, 합성(sin∘f, cos∘f)과 곱(f·sin, f·cos)에서 우·기 판정 규칙이 서로 다르게 작동한다. 우함수로 판정된 것은 값이 0 이 아닐 수 있으므로 기각하는 사후 검증이 마지막 단계.
    통찰 2개(SYM d3+VF d2)·M_total 7(일반 함수 추상) · 실력 Up 구역 출발점 ★4 유지(통찰이 3개 미만이라 ★5 아님).
  tier: star_4
  mechanism_primary: "sin∘f 기함수·f cos x 기함수 → 0 / cos∘f 우함수·f sin x 우함수 → 0 아님 → ㄱ, ㄹ"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: 'ㄱ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0941.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 적분 구간(±π/2, ±π)을 바꿀 수 있음. 제약: 모든 구간이 원점 대칭이어야 하며(대칭이 아니면 판정 자체가 무의미) 피적분함수가 구간에서 연속이어야 한다."
    creative: "(1) 조건을 f(-x)=f(x)(우함수)로 바꾸면 네 보기의 정답 조합이 전부 뒤집힘(★4 유지) (2) 보기에 f(x)²·|f(x)| 를 넣어 우함수 판정 사례를 늘리기(★4 유지) (3) 「항상 0 인 것」 대신 반례를 들게 하는 서술형으로 바꾸면 I-VF 가 주가 되어 ★4~5."
```

## 표본 판정 요약 (44문)

- ★ 분포: ★1 1 · ★2 33 · ★3 7 · ★4 3 · ★5 0
- insight_type: 통찰형 25 · 절차형 19 · premium 0 (★5 요건인 「통찰 3개 이상 + SC/VF/SYM/XU」를 채우는 문항이 이 범위에 없다)
- insights 코드 분포(총 41개): I-EQV 22 · I-CON 6 · I-SYM 4 · I-BW 3 · I-PD 2 · I-RT 2 · I-XU 1 · I-VF 1 (통찰 2개인 문항 8: 0903 0923 0926 0930 0938 0939 0940 0941 · insights[] 가 빈 절차형 11문: 0905 0907 0909 0916 0917 0919 0920 0928 0929 0935 0936)
- type_hint 상위 5: 「두 정적분을 합쳐 약분·상쇄」 8(0904 0906 0908 0912 0913 0915 0932 0933) · 「구간별 정의 함수/구간별 도함수 + 연속 조건」 6(0902 0916 0917 0918 0931 0935) · 「절댓값 정적분의 구간 분할」 5(0919 0920 0921 0922 0936) · 「삼각식의 항별 분해·항등식 변환 부정적분」 5(0898 0899 0901 0914 0934) · 「우·기함수·주기함수 대칭」 5(0923 0924 0925 0926 0937)
- 그림: 1문(`crop:fig-0921.png` — 그래프의 최댓값 2 로 계수 a 를 주는 용도)
- 구역별 ★ 평균: 유형 04~09 ≈ 2.1 · 유형 UP 10 ≈ 2.5 · 시험에 꼭 나오는 문제 ≈ 2.2 · 서술형 주관식 3.5 · 실력 Up 4.0
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 모순되는 조건은 발견되지 않았다(의도적 재검산은 하지 않음).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 어긋난 문항(RED)이 없고, 아래 4건은 모두 1단 차이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0922 | 벤더 「중」(★2 출발)이나 위끝이 문자라 적분 결과가 초월식이 되고 정수 조건으로 해를 확정해야 함(M_total 8 · I-BW d2) → ★3 으로 +1 | ★2 / ★3 |
| RPM-CALC2-0924 | 유형 UP 구역(★3 출발)이나 벤더 level 「중」이고 계산이 4×2 한 줄(M_total 4) → ★2 로 -1 | ★2 / ★3 |
| RPM-CALC2-0925 | 유형 UP 구역(★3 출발)이나 우함수 판정 한 줄로 끝나고 계산이 없음(M_total 4) → ★2 로 -1. 단 「기함수 sin 과 우함수 cos 의 합성」 판정 실수를 노린 문항이라 체감은 ★3 일 수 있음 | ★2 / ★3 |
| RPM-CALC2-0930 | 「시험에 꼭 나오는 문제」(★2~3)이나 적분 이전에 무한등비급수(수열 단원)를 닫아야 해 I-XU 가 걸림 → ★3. 단원 경계 결합을 어디까지 인정할지 카탈로그 설계 때 재검토 필요 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「구간이 뒤바뀐 두 정적분의 합」(0908 0912 0913 0923): 부호 반전으로 합치는 착안이 독립 유형이며 RPM 이 지수·삼각·대칭 세 구역에 흩어 놓았다. ② 「정적분 값이 주어질 때 구간의 끝 구하기」(0922 0926): I-BW 가 본체라 정방향 계산형과 성격이 다르다. ③ 「역함수의 정적분(넓이 관계)」(0939): 이 단원에서 유일하게 ★4 의 I-RT 를 쓰는 자리. ④ 「함수방정식으로 f 를 결정한 뒤 적분」(0940).
- **통합해도 될 유형** — 「유형 05 유리·무리함수의 정적분」과 「유형 06 지수함수의 정적분」과 「유형 07 삼각함수의 정적분」은 피적분함수의 종류만 다를 뿐 골조가 모두 「공식이 안 먹는 꼴 → 항등식·인수분해·유리화로 동치 변환 → 공식 적분」으로 같다. 카탈로그에서는 하나의 base 유형 아래 함수 종류를 파라미터로 두는 편이 변형 생성에 유리하다. 「유형 08 구간별 정의」와 「유형 09 절댓값」도 분할 기준이 「정의가 갈리는 점」인지 「부호가 바뀌는 점」인지만 다르므로 한 유형의 두 변종으로 묶을 수 있다.
- **base ★ 제안** — 위 통합 유형의 base ★ 는 2, 「우·기함수·주기함수 대칭」은 2~3(대칭구간을 스스로 만들어야 하면 3), 「역함수 정적분」·「함수방정식+적분」은 4.
