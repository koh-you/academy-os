---
name: mechanism-데이터-RPM-ALG-03-p2
description: RPM 대수 03 지수함수(2/3 · 유형 06~16) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 03 지수함수
  unit_code: ALG-03
  part: "2/3"
  extract_range: "35~39쪽 · 0261~0296"
  total_problems: 36
  unit_total: 115
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 03 지수함수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 03 지수함수 단원의 두 번째 조각으로, 35~39쪽의 유형 06(지수가 이차식인 최대·최소)부터 유형 16($a^x$ 꼴 반복 지수부등식)까지 11개 유형 구역 36문항(0261~0296)을 다룬다. 이 범위는 전부 「유형 NN」 구역이며 벤더 난이도 신호는 대표문제 태그(각 유형 첫 문항 · 난이도 표시 없음)와 나머지 문항의 난이도(중하·중·상중), 그리고 서술형 태그로 나타난다. 상중은 0288·0292·0296 세 문항뿐이고 나머지는 중(대표문제 포함 ★2 출발) 또는 중하다. 그림은 0292 한 문항(곡선·직선 그래프)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(numeric/creative)를 채웠다. ★ 는 구역·난이도 출발점(대표문제·난이도 없음 ★2, 중하 ★1~2, 중 ★2, 상중 ★3)에서 통찰 0·M_total ≤ 4 이면 −1, M_total 5 는 유지, 통찰 2개 이상 또는 depth 3 이면 +1 후보로 조정했다. `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 유형 제목이 이미 알려 주는 표준 착안 한 개(depth 1)뿐이면 절차형으로 두었다(견본 0041 과 같은 기준). 치환 $t=a^x$ 자체는 스키마대로 표현 전환(I-RT)으로 세지 않았고, 근의 합 ↔ $t$-근의 곱 같은 세계 사이의 번역만 I-RT 로 적었다.

## 문항 데이터

### 유형 06 지수함수의 최대·최소; 지수가 이차식인 경우

```yaml
- id: RPM-ALG-0261
  page: 35
  vendor_label: "유형 06 지수함수의 최대·최소; 지수가 이차식인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정의역 -1≤x≤2 에서 y=(1/2)^{x²-2x+3} 의 최댓값 M·최솟값 m 을 구해 m/M 의 값. 5지선다.
  category: "지수 완전제곱 → 구간에서 지수 범위 → 밑<1 대소 반전 → 비"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(제한된 정의역·밑<1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 t=(x-1)²+2 는 [-1,2] 에서 2≤t≤6. 밑 1/2<1 이므로 t 가 최소일 때 y 최대 M=1/4, t 가 최대(x=-1)일 때 최소 m=1/64 → m/M=1/16. 함정은 T-범위(꼭짓점 x=1 이 구간 안인지·먼 끝은 x=-1)·T-부호(밑<1 반전) 둘. 통찰 없음·M_total 6 → 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지수 x²-2x+3=(x-1)²+2 → [-1,2] 에서 2≤t≤6 → 밑<1 이므로 M=(1/2)^2, m=(1/2)^6 → m/M=1/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 끝점·이차식 계수·밑(1/3, 2 등)을 바꿀 수 있음. 제약: 꼭짓점이 구간 안이면 최대·최소가 꼭짓점과 먼 끝점에서 나오고, 구간 밖이면 두 끝점 비교로 바뀜. 지수 범위의 두 값이 정수여야 답이 밑의 거듭제곱 비로 떨어져 선택지 구성이 쉬움."
    creative: "(1) 밑을 1 보다 크게 바꿔 반전 함정 제거(★1~2) (2) 밑을 미지수 a 로 두고 M·m 의 비로 a 를 묻기(Mₐ 상승 ★2~3) (3) 정의역 끝을 매개변수 k 로 잡아 최댓값 위치가 k 에 따라 달라지는 경우 나누기(I-MI d1 · ★3)."
```

```yaml
- id: RPM-ALG-0262
  page: 35
  vendor_label: "유형 06 지수함수의 최대·최소; 지수가 이차식인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2^x, g(x)=x²+2x+5 의 합성함수 (f∘g)(x) 가 x=a 에서 최솟값 m 을 가질 때 a+m.
  category: "합성 → 지수 완전제곱 → 밑>1 이므로 지수 최소에서 최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수 꼴 지수함수의 최솟값(지수가 이차식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (f∘g)(x)=2^{x²+2x+5} 이고 지수 (x+1)²+4 는 x=-1 에서 최소 4 → m=2^4=16, a+m=15. 밑 2>1 이라 반전 없음·정의역 제한 없음. 3단계·함정 없음·M_total 4 → 벤더 「중」출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(f∘g)(x)=2^{g(x)} → g(x)=(x+1)²+4 ≥ 4 (x=-1) → m=2^4=16 → a+m=15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 이차식(꼭짓점 x 좌표·최솟값이 작은 정수)·밑 2→3 을 바꿀 수 있음. 제약: 밑>1 을 유지하면 최솟값만 존재하고 최댓값은 없음. a+m 이 정수가 되도록 최솟값 지수를 작은 자연수로."
    creative: "(1) 밑을 1/2 로 바꿔 최댓값 문항으로(반전 함정 ★2) (2) 합성 순서를 (g∘f)(x)=(2^x)²+2·2^x+5 로 바꾸면 유형 07 치환 골조 ★2 (3) 정의역 제한을 더해 끝점 비교 ★2."
```

```yaml
- id: RPM-ALG-0263
  page: 35
  vendor_label: "유형 06 지수함수의 최대·최소; 지수가 이차식인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<a<1 일 때 y=a^{-x²+2x+2} 의 최솟값이 1/64 이 되는 상수 a. 5지선다.
  category: "지수 완전제곱(최대 3) → 밑<1 이므로 최소는 지수 최대에서 → a³=1/64"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최솟값 조건으로 밑 결정(밑<1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 -(x-1)²+3 의 최댓값 3 을 잡고, 0<a<1 이면 그때 y 가 최소임을 읽으면 a³=1/64 → a=1/4. 미정 밑 a 를 되묻는 것은 표준 미정계수 대입(BW 아님). 통찰 없음·M_total 5·매개변수 밑·반전 함정 → 「중」출발 ★2 유지.
  tier: star_2
  mechanism_primary: "지수 -(x-1)²+3 ≤ 3 → 0<a<1 이므로 최솟값 a^3 → a^3=1/64 → a=1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 최댓값 k(정수)·최솟값 (1/n)^k 꼴을 바꿀 수 있음. 제약: 주어진 최솟값이 완전 k제곱수의 역수여야 a 가 선택지의 유리수로 떨어짐. 0<a<1 조건 유지."
    creative: "(1) a>1 로 바꾸면 위로 볼록 지수는 최댓값 조건이 되므로 이차식 부호를 뒤집어 최솟값 조건 설계(★2) (2) 정의역 제한과 최댓값·최솟값을 함께 주고 a 와 구간 끝을 결정(I-CON 후보 ★3) (3) '최솟값이 1/64 이하가 되는 a 의 범위' 로 부등식화(★3)."
```

```yaml
- id: RPM-ALG-0264
  page: 35
  vendor_label: "유형 06 지수함수의 최대·최소; 지수가 이차식인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정의역 0≤x≤3, 0<a<1 에서 y=a^{-x²+4x-3} 의 치역이 {y | m≤y≤125} 일 때 m.
  category: "지수 범위 [-3,1] → 밑<1 반전 → 최댓값 a^{-3}=125 로 a 결정 → m=a^1"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 치역 조건으로 밑·최솟값 결정(제한된 정의역·밑<1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 -(x-2)²+1 은 [0,3] 에서 x=0 일 때 최소 -3, x=2 일 때 최대 1. 밑<1 이므로 최댓값은 a^{-3}=125 → a=1/5 를 먼저 결정하고 최솟값 m=a^1=1/5. 구간 함정(먼 끝 x=0)·반전 함정·매개변수 밑의 두 단계 결정. 통찰 없음·M_total 7 → 「중」★2 유지(절차 노동은 유형 안 상위).
  tier: star_2
  mechanism_primary: "지수 -(x-2)²+1, [0,3] 에서 -3≤t≤1 → 밑<1: 최대 a^{-3}=125 → a=1/5 → 최소 m=a^1=1/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간·이차식·치역의 최댓값(n^3 같은 완전세제곱)을 바꿀 수 있음. 제약: 지수의 최소·최대가 정수, a^{-k}=주어진 값이 유리수 a 로 풀려야 함, 꼭짓점이 구간 안이어야 최댓값이 꼭짓점 지수에서 나옴."
    creative: "(1) 최솟값 m 을 주고 최댓값을 묻는 대칭 문항(★2) (2) 치역 대신 최댓값/최솟값의 비만 주면 a 는 지수 차로만 결정 → 다른 골조(★2) (3) 정의역 오른쪽 끝을 k 로 두고 치역 조건으로 k 를 묻기(I-BW d1 · ★3)."
```

### 유형 07 $a^x$의 꼴이 반복되는 함수의 최대·최소

```yaml
- id: RPM-ALG-0265
  page: 35
  vendor_label: "유형 07 $a^x$의 꼴이 반복되는 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정의역 -1≤x≤1 에서 y=3^{x+1}-9^x 의 최댓값 M·최솟값 m 을 구해 M+m. 5지선다.
  category: "t=3^x 치환·범위 [1/3,3] → -t²+3t 꼭짓점 t=3/2 → 먼 끝점 t=3 에서 최소"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 이차함수의 최대·최소(제한된 정의역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x 로 두면 x∈[-1,1] 에서 t∈[1/3,3], y=-t²+3t=-(t-3/2)²+9/4. 위로 볼록이라 최대는 꼭짓점 9/4, 최소는 꼭짓점에서 먼 끝 t=3 에서 0 → M+m=9/4. 치환은 표준 절차(RT 아님)이고 함정은 t 범위 옮기기(T-범위) 하나. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "t=3^x∈[1/3,3] → y=-t²+3t=-(t-3/2)²+9/4 → M=9/4(t=3/2), m=0(t=3) → M+m=9/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3^{x+1}=3·3^x 의 계수와 정의역을 바꿀 수 있음. 제약: 꼭짓점 t 가 범위 안에 있어야 최댓값이 꼭짓점에서 나오고, 끝점 값(t=3^{끝})이 유리수로 정리돼야 함. M+m 이 선택지에 맞는 분수."
    creative: "(1) 정의역을 좁혀 꼭짓점이 범위 밖 → 단조 구간의 끝점 비교(★2) (2) 9^x-3^{x+1} 로 부호를 뒤집어 아래로 볼록 최솟값 문항(★2) (3) 최댓값을 주고 정의역 끝 k 를 묻기(I-BW d1 · ★3)."
```

```yaml
- id: RPM-ALG-0266
  page: 35
  vendor_label: "유형 07 $a^x$의 꼴이 반복되는 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=4^x-2^{x+a}+b 가 x=1 에서 최솟값 -3 을 가질 때 상수 a, b 에 대하여 a+b.
  category: "t=2^x 치환 → 꼭짓점 t=2^{a-1} 을 x=1(t=2) 과 일치 → a → 최솟값으로 b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 이차함수의 최솟값 위치·값 조건으로 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^x 로 y=t²-2^a·t+b, 꼭짓점 t=2^{a-1}. x=1 은 t=2 이므로 2^{a-1}=2 → a=2, 최솟값 b-4=-3 → b=1 → a+b=3. 꼭짓점 t 좌표를 2 의 거듭제곱으로 정리해 지수를 맞추는 것이 절차의 전부(표준 미정계수). 통찰 없음·M_total 6·매개변수 둘 → 「중」★2 유지.
  tier: star_2
  mechanism_primary: "t=2^x: y=t²-2^a·t+b → 꼭짓점 t=2^{a-1}=2 → a=2 → 최솟값 b-4=-3 → b=1 → a+b=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최솟값 위치 x=1·최솟값 -3·밑 2→3 을 바꿀 수 있음. 제약: 꼭짓점 t=2^{a-1} 이 2^{x₀} 와 같아지도록 x₀ 를 정수로, b 는 정수."
    creative: "(1) a 를 주고 정의역을 제한해 최솟값 위치가 끝점으로 밀리게 하기(T-범위 ★2~3) (2) 최댓값이 존재하지 않는 이유를 고르는 보기 문항(★2) (3) 'x=1 에서 최솟값' 대신 y=4^x 와의 교점 조건 등을 결합해 a, b 를 결정(I-CON d1 · ★3)."
```

```yaml
- id: RPM-ALG-0267
  page: 35
  vendor_label: "유형 07 $a^x$의 꼴이 반복되는 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정의역 -2≤x≤1 에서 y=4^{-x}-2^{1-x}+3 이 x=a 에서 최솟값 b, x=c 에서 최댓값 d 를 가질 때 ab-cd.
  category: "t=2^{-x} 치환(감소 · 범위 [1/2,4]) → (t-1)²+2 → 꼭짓점 t=1(x=0)·먼 끝 t=4(x=-2)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 이차함수의 최대·최소(제한된 정의역·음의 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^{-x} 는 감소함수라 x∈[-2,1] 이 t∈[1/2,4] 로 뒤집혀 옮겨진다. y=(t-1)²+2 는 t=1(x=0)에서 최소 2, 먼 끝 t=4(x=-2)에서 최대 11 → ab-cd=0-(-22)=22. 함정은 음의 지수(T-부호)와 t→x 되돌리기(T-범위). 골조는 유형 표준. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=2^{-x}, x∈[-2,1] → t∈[1/2,4] → y=(t-1)²+2 → 최소 2(t=1, x=0)·최대 11(t=4, x=-2) → ab-cd=22"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·상수항·계수를 바꿀 수 있음. 제약: 꼭짓점 t=1 이 범위 안, 끝점 값이 정수, a=0 이라 ab 항이 사라지는 구조를 유지할지(유지하면 계산 함정 하나 감소) 결정."
    creative: "(1) 지수를 +x 로 바꿔 범위 반전 함정 제거(★2) (2) 최댓값 d 를 주고 정의역 왼쪽 끝을 묻기(I-BW d1 · ★3) (3) 최댓값과 최솟값의 차가 k 이하가 되는 정의역 길이의 최댓값(부등식화 ★3)."
```

```yaml
- id: RPM-ALG-0268
  page: 35
  vendor_label: "유형 07 $a^x$의 꼴이 반복되는 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정의역 1≤x≤2 에서 y=9^x-2·3^{x+1}+k 의 최댓값이 18 일 때 상수 k.
  category: "t=3^x∈[3,9] → (t-3)²+k-9 는 구간에서 증가 → 최댓값은 t=9 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 이차함수의 최댓값 조건으로 상수 결정(제한된 정의역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x∈[3,9], y=t²-6t+k=(t-3)²+k-9. 꼭짓점 t=3 이 구간의 왼쪽 끝과 일치해 최댓값은 오른쪽 끝 t=9 에서 27+k=18 → k=-9. 꼭짓점 위치와 구간의 관계를 확인하는 것이 절차의 핵심. 통찰 없음·M_total 6 → 「중」★2.
  tier: star_2
  mechanism_primary: "t=3^x∈[3,9] → y=(t-3)²+k-9 → 꼭짓점 t=3 이 왼쪽 끝 → 최대 t=9: 27+k=18 → k=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·계수·최댓값을 바꿀 수 있음. 제약: 꼭짓점 t 가 범위 안이나 끝이면 최댓값은 꼭짓점에서 먼 끝에서 나옴. 정의역을 바꾸면 최댓값 위치가 바뀌므로 반드시 재확인. k 정수."
    creative: "(1) 최솟값 조건으로 k 를 묻기(꼭짓점이 끝이므로 최소는 꼭짓점 ★2) (2) 정의역을 [0,2] 로 넓혀 꼭짓점이 안쪽 → 최대·최소 둘 다 묻기(★2) (3) 최댓값 18 을 만족시키는 정의역 오른쪽 끝을 묻기(I-BW d1 · ★3)."
```

### 유형 08 산술평균과 기하평균을 이용한 지수함수의 최대·최소

```yaml
- id: RPM-ALG-0269
  page: 36
  vendor_label: "유형 08 산술평균과 기하평균을 이용한 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=4^x+4^{-x+3} 이 x=a 에서 최솟값 b 를 가질 때 ab.
  category: "4^{-x+3}=64/4^x 분리 → 곱 일정 → AM-GM 최소 16 → 등호 4^{2x}=64 → x=3/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술·기하평균으로 a^x+k·a^{-x} 꼴의 최솟값(등호 조건 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4^{-x+3}=4^3·4^{-x} 로 분리하면 두 항의 곱이 64 로 일정 → f≥2·8=16. 등호는 4^x=4^{3-x} 즉 x=3/2 이므로 ab=24. 곱이 상수임을 확인하는 분리 단계와 등호 조건(T-경계)까지 요구. 유형 제목이 도구를 알려 주므로 통찰로 세지 않음. M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "4^x·4^{3-x}=64 일정 → f≥2√64=16 → 등호 4^x=4^{3-x} → x=3/2 → ab=24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 상수 3(곱 4^k)·밑을 바꿀 수 있음. 제약: 등호점이 x=k/2 이므로 k 짝수면 정수 답, 홀수면 분수 답. 최솟값 b=2·2^k. ab 가 깔끔한 정수가 되도록."
    creative: "(1) 3·4^x+4^{3-x} 처럼 계수를 붙여 AM-GM 의 계수 처리 추가(★2) (2) 정의역을 x≥3 으로 제한해 등호점이 밖 → 단조성으로 최솟값(등호 불가 판정 · I-VF 요소 ★3) (3) 최솟값 b 를 주고 지수의 상수 k 를 역으로 묻기(★2)."
```

```yaml
- id: RPM-ALG-0270
  page: 36
  vendor_label: "유형 08 산술평균과 기하평균을 이용한 지수함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2^x, g(x)=(1/2)^x 에 대하여 h(x)=f(x)+g(x)+4 의 최솟값.
  category: "2^x·2^{-x}=1 → AM-GM → 2+4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술·기하평균으로 a^x+a^{-x} 꼴의 최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    h=2^x+2^{-x}+4 에서 곱이 1 인 두 양수의 합 ≥ 2 → 최솟값 6(등호 x=0). AM-GM 한 번과 상수 더하기뿐. 통찰 없음·M_total 4 → 「중」출발 ★2 에서 −1 → ★1.
    [분류 이슈] 벤더 「중」이나 M_total 4·한 단계 AM-GM 이라 ★1 — 같은 유형 대표문제 0269(★2)보다 쉬워 벤더 순서와 뒤집힘.
  tier: star_1
  mechanism_primary: "h=2^x+2^{-x}+4 ≥ 2√(2^x·2^{-x})+4=6 (등호 x=0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 4·밑을 바꿀 수 있음. 제약: g=1/f 구조를 유지하면 최솟값은 2+상수. g 를 (1/2)^{x-2} 로 바꾸면 곱 4 → 최솟값 4+상수."
    creative: "(1) 최솟값 위치 x 도 함께 묻기(등호 조건 ★2) (2) 정의역을 x≥1 로 제한해 등호점 밖 → 단조성 판단(★2~3) (3) h(x)=f(x)+g(x) 를 공통부분 t 로 두고 t 의 이차식 최댓값으로 확장(유형 09 골조 ★2)."
```

### 유형 09 공통부분이 $a^x+a^{-x}$의 꼴인 함수의 최대·최소

```yaml
- id: RPM-ALG-0271
  page: 36
  vendor_label: "유형 09 공통부분이 $a^x+a^{-x}$의 꼴인 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=6(3^x+3^{-x})-(9^x+9^{-x}) 의 최댓값. 5지선다.
  category: "t=3^x+3^{-x}(≥2) → 9^x+9^{-x}=t²-2 → -(t-3)²+11 · 꼭짓점 범위 안"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x+a^{-x} 공통부분 치환 이차함수의 최대·최소(t≥2 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x+3^{-x} 로 두면 9^x+9^{-x}=t²-2 이므로 y=-t²+6t+2=-(t-3)²+11. AM-GM 으로 t≥2 이고 꼭짓점 t=3 은 범위 안(3^x+3^{-x}=3 실현 가능) → 최대 11. 곱셈공식 정리와 t≥2 범위(T-범위)가 유형의 표준 절차. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "t=3^x+3^{-x}≥2 → y=6t-(t²-2)=-(t-3)²+11 → t=3 가능 → 최대 11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 6(꼭짓점 t=계수/2)·상수를 바꿀 수 있음. 제약: 꼭짓점 t 가 2 이상이어야 최대가 꼭짓점에서 나옴. 계수를 2 로 줄이면 꼭짓점 t=1<2 라 t=2(x=0)에서 최대가 되어 함정이 바뀜."
    creative: "(1) 계수를 2 로 바꿔 꼭짓점이 범위 밖 → t=2 에서 최대(T-범위 함정 강화 ★2~3) (2) 최댓값을 주고 계수 k 를 묻기(I-BW d1 · ★3) (3) 공통부분을 3^x-3^{-x}(범위 전체 실수)로 바꿔 범위 함정 제거(★2)."
```

```yaml
- id: RPM-ALG-0272
  page: 36
  vendor_label: "유형 09 공통부분이 $a^x+a^{-x}$의 꼴인 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=2^x+2^{-x}-(√(2^x)+√(2^{-x})) 의 최솟값.
  category: "s=2^{x/2}+2^{-x/2}(≥2) 를 공통부분으로 → 2^x+2^{-x}=s²-2 → s²-s-2 는 s≥2 에서 증가"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "치환 대상을 큰 쪽 2^x+2^{-x} 가 아니라 제곱근 쪽 s=√(2^x)+√(2^{-x}) 로 잡아야 2^x+2^{-x}=s²-2 로 정리됨 — 식을 풀이 가능한 꼴로 재구성"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근 꼴 공통부분(a^{x/2}+a^{-x/2}) 치환 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^x+2^{-x}=(2^{x/2}+2^{-x/2})²-2 이므로 작은 쪽을 s 로 두면 y=s²-s-2, AM-GM 으로 s≥2. 꼭짓점 s=1/2 이 범위 밖이라 s=2(x=0)에서 최소 0. 치환 대상 선택(EQV d1)과 범위·꼭짓점 밖(T-범위·T-경계) 함정. 통찰 1(d1)·M_total 6 → 「중」★2 유지.
  tier: star_2
  mechanism_primary: "s=2^{x/2}+2^{-x/2}≥2 → 2^x+2^{-x}=s²-2 → y=s²-s-2=(s-1/2)²-9/4 → s≥2 에서 증가 → 최소 y(2)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2→3·제곱근 항의 계수를 바꿀 수 있음. 제약: s 이차식의 꼭짓점이 s<2 이면 최소는 s=2(x=0)에서, 꼭짓점을 s≥2 로 옮기려면 제곱근 항 계수를 4 이상으로."
    creative: "(1) 계수를 -4 로 바꿔 꼭짓점 s=2 → 최소가 꼭짓점이자 끝점(등호 x=0 · ★2) (2) 계수를 -5 로 바꿔 꼭짓점 s=5/2 가 범위 안 → 2^{x/2}+2^{-x/2}=5/2 실현 가능 확인 필요(★3) (3) 4^x+4^{-x}-k(2^x+2^{-x}) 로 두 층 공통부분 → ★3."
```

### 유형 10 지수방정식

```yaml
- id: RPM-ALG-0273
  page: 36
  vendor_label: "유형 10 지수방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 (1/9)^{x²}·27^x=√3 의 두 실근의 합. 5지선다.
  category: "밑 3 통일 → 지수 비교 → 4x²-6x+1=0 → 근과 계수의 관계로 합"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일하는 지수방정식(지수 비교 → 이차방정식·근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 항을 3^{-2x²}·3^{3x}=3^{1/2} 로 통일하면 -2x²+3x=1/2, 즉 4x²-6x+1=0 → 근의 합 3/2(판별식 20>0 으로 실근 둘). 밑 변환 세 번(분수 지수 포함)과 분수 정리가 계산 부담(Mₖ 2). 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "(1/9)^{x²}·27^x=√3 → 3^{-2x²+3x}=3^{1/2} → 4x²-6x+1=0 → 합 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 9·27·√3 의 조합(3 의 거듭제곱)·지수 계수를 바꿀 수 있음. 제약: 지수 비교식이 이차, 판별식 양수, 근의 합이 선택지에 맞는 분수."
    creative: "(1) 두 근의 곱·제곱합으로 대칭식 바꾸기(★2) (2) 우변을 3^k 로 두고 실근이 존재하는 k 의 범위(판별식 · I-BW d1 ★3) (3) 2^x·3^x 처럼 밑 통일이 안 되는 항을 섞으면 로그 필요 → 단원 밖 확장(★3)."
```

```yaml
- id: RPM-ALG-0274
  page: 36
  vendor_label: "유형 10 지수방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 (2/3)^{x²}=(3/2)^{3x-4} 를 푸시오.
  category: "역수 밑 → (2/3)^{-(3x-4)} → 지수 비교 → x²+3x-4=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일하는 지수방정식(역수 밑 → 지수 부호 반전)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3/2)^{3x-4}=(2/3)^{-3x+4} 로 밑을 맞추면 x²=-3x+4 → (x+4)(x-1)=0 → x=-4 또는 1. 역수 밑의 지수 부호 반전(T-부호) 하나가 함정. 통찰 없음·M_total 4 → 「중하」★1.
  tier: star_1
  mechanism_primary: "(3/2)^{3x-4}=(2/3)^{-3x+4} → x²=-3x+4 → (x+4)(x-1)=0 → x=-4 또는 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=-4$ 또는 $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 이차식·일차식 계수를 바꿀 수 있음. 제약: 지수 비교식이 정수근으로 인수분해되게, 역수 밑 구조 유지."
    creative: "(1) 좌변 밑을 (4/9) 로 바꿔 지수 2 배 정리 추가(★1~2) (2) 근의 합·곱을 묻기(★1) (3) 우변에 상수 (2/3) 를 곱해 지수 정리 한 단계 추가(★2)."
```

```yaml
- id: RPM-ALG-0275
  page: 36
  vendor_label: "유형 10 지수방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    방정식 3^{x²-10x}-27^{-2x+a}=0 의 한 근이 -2 일 때 다른 한 근(a 는 상수). 서술형.
  category: "밑 3 통일 → x²-4x-3a=0 → 근 -2 대입 → a=4 → 다른 근 6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식의 한 근 조건으로 상수·다른 근 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27^{-2x+a}=3^{-6x+3a} 이므로 x²-10x=-6x+3a → x²-4x-3a=0. x=-2 대입 12-3a=0 → a=4, x²-4x-12=(x-6)(x+2) → 다른 근 6(근의 합 4 로도 가능). 표준 미정계수 대입·서술형 태그. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3^{x²-10x}=3^{-6x+3a} → x²-4x-3a=0 → x=-2 대입 → a=4 → 다른 근 = 4-(-2) = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수·주어진 근을 바꿀 수 있음. 제약: a 가 정수로 떨어지게 대입식을 조정하고 이차식이 정수 인수분해되게."
    creative: "(1) 두 근의 차를 주고 a 를 묻기(판별식 · ★2~3) (2) 두 근이 모두 양수가 되는 a 의 범위(근의 분리 · I-BW d1 ★3) (3) 서술형 채점 기준에 근의 합 풀이·인수분해 풀이 두 경로를 명시(★2)."
```

```yaml
- id: RPM-ALG-0276
  page: 36
  vendor_label: "유형 10 지수방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 2^{x²+1}/2^{x-1}=16 의 두 근 α, β 에 대하여 α²+β². 5지선다.
  category: "지수법칙으로 2^{x²-x+2}=2^4 → x²-x-2=0 → 근 2, -1 → 제곱합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일하는 지수방정식(지수법칙 정리 → 이차방정식 근의 대칭식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈 지수법칙으로 2^{x²+1-(x-1)}=2^4, x²-x-2=0 → x=2, -1 → α²+β²=5(근과 계수로 (α+β)²-2αβ=1+4 도 가능). 통찰 없음·M_total 5 → 「중」★2 유지.
  tier: star_2
  mechanism_primary: "2^{x²+1-(x-1)}=2^4 → x²-x-2=0 → 근 2, -1 → α²+β²=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 지수·우변 2^k 를 바꿀 수 있음. 제약: 이차식이 정수근이거나 근과 계수로 α²+β² 가 유리수, 선택지 정수."
    creative: "(1) 우변을 2^k 로 두고 실근이 존재하는 k 의 조건(★2~3) (2) α³+β³ 같은 다른 대칭식으로 확장(★2) (3) 분자·분모의 밑을 4 와 2 로 다르게 두어 밑 통일 한 단계 추가(★2)."
```

### 유형 11 $a^x$의 꼴이 반복되는 지수방정식

```yaml
- id: RPM-ALG-0277
  page: 37
  vendor_label: "유형 11 $a^x$의 꼴이 반복되는 지수방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 9^x+27^x=10·3^{x+2} 의 실근 α 에 대하여 2^α 의 값. 5지선다.
  category: "t=3^x → t³+t²-90t=0 → t(t+10)(t-9)=0 → t>0: t=9 → α=2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수방정식(삼차 → t 묶어 인수분해 · 양수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x 로 t²+t³=90t → t(t+10)(t-9)=0. t>0 이므로 t=9 → 3^x=9 → α=2 → 2^α=4. 삼차에서 t 를 묶어 내고 음수 근 -10 을 버리는 T-범위 함정이 전부. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "t=3^x: t²+t³=90t → t(t+10)(t-9)=0 → t=9 → α=2 → 2^α=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 10·지수 상수 2(곱 90)를 바꿀 수 있음. 제약: t²+t-90 꼴이 정수 인수분해되고 양근이 3 의 거듭제곱이어야 α 정수."
    creative: "(1) 양근이 둘 나오도록 삼차식을 설계해 두 근의 합 묻기(유형 14 골조 ★2~3) (2) 좌변에 상수를 더해 t 묶기가 안 되게 하면 인수정리 필요(★3) (3) 2^α 대신 α 를 지수로 하는 다른 식의 값으로 마무리 변형(★2)."
```

```yaml
- id: RPM-ALG-0278
  page: 37
  vendor_label: "유형 11 $a^x$의 꼴이 반복되는 지수방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 5^{x+1}-5^{-x}=4 를 푸시오.
  category: "t=5^x → 5t-1/t=4 → 5t²-4t-1=0 → t=1 → x=0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수방정식(a^{-x}=1/t 처리 · 양수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5^{x+1}=5t, 5^{-x}=1/t 로 5t-1/t=4, 양변에 t 를 곱해 (5t+1)(t-1)=0 → t=1(t=-1/5 는 버림) → x=0. 통찰 없음·M_total 5 → 「중」★2 유지.
  tier: star_2
  mechanism_primary: "t=5^x: 5t-1/t=4 → 5t²-4t-1=0 → (5t+1)(t-1)=0 → t=1 → x=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수를 바꿀 수 있음. 제약: t 이차식이 정수 인수분해되고 양근이 5 의 거듭제곱."
    creative: "(1) 양근이 둘 나오게 설계해 두 근의 합 묻기(★2) (2) 5^{x+1}-5^{-x}=k 가 실근을 갖는 k 의 조건(★3) (3) 부등식 5^{x+1}-5^{-x}≥4 로 바꿔 유형 16 골조(★2)."
```

```yaml
- id: RPM-ALG-0279
  page: 37
  vendor_label: "유형 11 $a^x$의 꼴이 반복되는 지수방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 4^{-x}-5·2^{-x+1}+16=0 의 두 근 α<β 에 대하여 β-α. 5지선다.
  category: "t=2^{-x} → t²-10t+16=0 → t=2, 8 → x=-1, -3 → 차 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수방정식(음의 지수 → 근 되돌리기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^{-x} 로 t²-10t+16=(t-2)(t-8)=0 → 2^{-x}=2, 8 → x=-1, -3. α=-3, β=-1 → β-α=2. 음의 지수를 x 로 되돌릴 때의 부호(T-부호)만 함정. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "t=2^{-x}: t²-10t+16=0 → t=2, 8 → x=-1, -3 → β-α=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿀 수 있음. 제약: 두 양근이 2 의 거듭제곱이어야 x 정수, β-α 가 선택지 정수."
    creative: "(1) β-α 대신 α+β 를 근과 계수(곱 16=2^{-(α+β)})로 묻기(유형 14 골조 ★2) (2) 근 하나만 양수인 계수로 바꿔 버리는 근 만들기(★2) (3) 상수항을 k 로 두고 두 근의 차가 2 가 되는 k(★3)."
```

```yaml
- id: RPM-ALG-0280
  page: 37
  vendor_label: "유형 11 $a^x$의 꼴이 반복되는 지수방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 a^{2x}-a^x=6 의 한 근이 1/4 일 때 상수 a 의 값(a>0, a≠1).
  category: "x=1/4 대입 → u=a^{1/4} → u²-u-6=0 → u=3 → a=81"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수방정식의 근 조건으로 밑 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근 1/4 을 대입하면 u=a^{1/4} 에 대해 u²-u-6=(u-3)(u+2)=0, u>0 이므로 u=3 → a=3⁴=81. 미지 밑을 네제곱근에서 되돌리는 것이 핵심 절차(표준 미정계수). 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=1/4 대입: (a^{1/4})²-a^{1/4}-6=0 → a^{1/4}=3 → a=81"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$81$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 1/4(a^{1/n})·상수 6 을 바꿀 수 있음. 제약: u 이차식이 정수 인수분해되고 양근 u 로 a=u^n 이 정수."
    creative: "(1) a 를 구한 뒤 방정식의 다른 근이 없음을 확인시키기(★2) (2) a^{2x}-a^x=k 의 한 근이 x=p 일 때 k 를 묻기(★2) (3) 두 밑 a, b 에 대해 a^x=b^{x+1} 꼴로 밑 미정 확장(★3)."
```

### 유형 12 밑에 미지수가 포함된 지수방정식

```yaml
- id: RPM-ALG-0281
  page: 37
  vendor_label: "유형 12 밑에 미지수가 포함된 지수방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 (x+7)^{x+1}=4^{x+1} 의 모든 근의 합(x>-7).
  category: "지수 같음 → 밑 같음(x+7=4) 또는 지수 0(x+1=0) → 두 근의 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑^지수 가 같으려면 밑이 같거나(x=-3) 지수가 0(x=-1)인 두 독립 경우 — 후자를 빠뜨리기 쉽고 둘 다 답에 기여"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑에 미지수가 있는 지수방정식(밑 같음 · 지수 0 경우 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 지수가 같은 x+1 이므로 밑이 같은 x+7=4 → x=-3, 또는 지수 x+1=0 → x=-1(이때 6^0=4^0=1). 둘 다 x>-7 을 만족 → 합 -4. 지수 0 경우를 세는 것이 유형의 핵심 분기(MI d1)이고 밑 양수 조건(T-범위)이 걸러 준다. 통찰 1(d1)·M_total 6·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "(x+7)^{x+1}=4^{x+1} → 밑 같음 x+7=4 (x=-3) 또는 지수 0 x+1=0 (x=-1) → 합 -4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 4·x+7 의 7·공통 지수 x+1 을 바꿀 수 있음. 제약: 밑 같음 근이 x>-7(밑 양수) 안에 있고 지수 0 근에서도 밑이 양수, 음수 밑에 짝수 지수가 되는 경우(x+7=-4)는 조건 밖이 되게."
    creative: "(1) 조건 x>-7 을 빼고 x+7=-4(지수 -10 짝수) 경우의 허용 여부를 논의(T-범위 · ★3) (2) 지수를 비례식 (x+7)^{2x-2}=4^{x-1} 로 두면 (x+7)²=4 → 밑 후보 둘(I-MI 강화 ★3) (3) 근의 개수를 고르는 보기 문항(★2)."
```

```yaml
- id: RPM-ALG-0282
  page: 37
  vendor_label: "유형 12 밑에 미지수가 포함된 지수방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x^{x²-8}=x^{2x+7} 을 푸시오(x>0).
  category: "밑 같음 → 밑 1(x=1) 또는 지수 같음(x²-2x-15=0) → x>0 으로 걸러 x=5"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑이 미지수이므로 밑이 1 인 경우와 지수가 같은 경우가 독립 분기이고 둘 다 답에 기여"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑에 미지수가 있는 지수방정식(밑 1 · 지수 같음 경우 분리 · 양수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 이면 양변이 1 로 성립. x≠1 이면 x²-8=2x+7 → (x-5)(x+3)=0, x>0 이므로 5. 밑 1 경우(MI d1)와 음근 버리기(T-범위)가 함정. 통찰 1(d1)·M_total 6 → 「중」★2.
  tier: star_2
  mechanism_primary: "x^{x²-8}=x^{2x+7}, x>0 → x=1 또는 x²-8=2x+7 → (x-5)(x+3)=0 → x=1 또는 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=1$ 또는 $x=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 이차식·일차식을 바꿀 수 있음. 제약: 지수 같음 근이 양수 하나·음수 하나(버리기)로 유지되고 x=1 이 지수 같음 근과 겹치지 않게."
    creative: "(1) 지수 같음 근이 둘 다 양수가 되게 설계 → 근 셋의 합 묻기(★2) (2) 조건을 x≥0 으로 바꿔 x=0 경우(0 의 음수 지수 정의 불가)를 논의(★3) (3) 부등식 x^{x²-8}<x^{2x+7} 로 바꾸면 0<x<1 / x>1 방향 분기 → I-MI d2 ★3~4."
```

### 유형 13 지수가 포함된 연립방정식

```yaml
- id: RPM-ALG-0283
  page: 37
  vendor_label: "유형 13 지수가 포함된 연립방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    연립방정식 2^x+2·3^y=26, 2^{x+1}-3^y=7 의 해 x=α, y=β 에 대하여 α+β.
  category: "X=2^x, Y=3^y 치환 → 일차 연립 → X=8, Y=9 → x=3, y=2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수 연립방정식(치환 → 일차 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X=2^x, Y=3^y 로 X+2Y=26, 2X-Y=7. Y=2X-7 을 대입해 5X=40 → X=8, Y=9 → x=3, y=2 → α+β=5. 2^{x+1}=2X 로 정리하는 지수법칙만 주의. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "X=2^x, Y=3^y: X+2Y=26, 2X-Y=7 → X=8, Y=9 → α=3, β=2 → α+β=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수를 바꿀 수 있음. 제약: 연립의 해 X, Y 가 각 밑의 거듭제곱(양수)이어야 x, y 가 정수."
    creative: "(1) 한 식을 곱 꼴 2^x·3^y=72 로 바꿔 합·곱 구조로(0284 골조 ★2) (2) 해 X 가 음수가 되는 계수로 '해가 없다' 판정 문항(★2~3) (3) 두 식 모두 같은 밑 2^x+2^y, 2^{x+y} 로 두어 근과 계수 골조(★2)."
```

```yaml
- id: RPM-ALG-0284
  page: 37
  vendor_label: "유형 13 지수가 포함된 연립방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연립방정식 3^x+3^y=28/3, 3^x·3^y=3 의 해 x=α, y=β 에 대하여 α²+β².
  category: "X=3^x, Y=3^y 의 합·곱 → t 이차방정식의 두 근 {1/3, 9} → (x,y)=(-1,2) 또는 (2,-1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 수의 합·곱 조건을 이차방정식 3t²-28t+9=0 의 두 근으로 번역(근과 계수의 관계 역이용)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수 연립방정식(합·곱 → 이차방정식 근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X+Y=28/3, XY=3 → 3t²-28t+9=(3t-1)(t-9)=0 → {X,Y}={1/3, 9} → (x,y)=(-1,2) 또는 (2,-1). 어느 순서든 α²+β²=5. 합·곱을 이차방정식으로 번역(RT d1)하는 것이 유형 표준. 통찰 1(d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "X=3^x, Y=3^y: X+Y=28/3, XY=3 → 3t²-28t+9=0 → t=1/3, 9 → (α,β)=(-1,2) 또는 (2,-1) → α²+β²=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합·곱 값을 바꿀 수 있음. 제약: 이차식의 두 근이 3 의 거듭제곱(1/3, 9 → x=-1, 2)이어야 x, y 정수, 대칭식을 물어 순서 무관하게."
    creative: "(1) α+β 만 물으면 곱 조건 3^{x+y}=3 에서 바로 x+y=1(I-RT 만 남음 ★1~2) (2) α<β 를 붙여 순서쌍 자체를 답으로(★2) (3) 합 대신 3^{2x}+3^{2y} 를 주면 (X+Y)²-2XY 역산이 추가(★3)."
```

### 유형 14 $a^x$의 꼴이 반복되는 지수방정식의 활용

```yaml
- id: RPM-ALG-0285
  page: 38
  vendor_label: "유형 14 $a^x$의 꼴이 반복되는 지수방정식의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 9^x-5·3^{x+1}+27=0 의 두 근 α, β 에 대하여 α+β.
  category: "t=3^x → t²-15t+27=0 → 두 t-근의 곱 27=3^α·3^β=3^{α+β} → 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x-근의 합 α+β 를 t-근의 곱 3^α·3^β 로 번역해 근과 계수의 관계만으로 답 — 실제 근을 구하지 않음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환 지수방정식의 두 근과 계수의 관계(근의 합 ↔ t-근의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x 로 t²-15t+27=0. 두 t-근은 3^α, 3^β 이고 곱 27=3^{α+β} → α+β=3(합 15>0·곱 27>0·판별식 117>0 으로 양의 두 근 확인). x-합을 t-곱으로 옮기는 RT d1 이 유형의 골조. 통찰 1(d1)·M_total 4 → 대표문제 ★2(통찰이 있어 −1 하지 않음).
  tier: star_2
  mechanism_primary: "t=3^x: t²-15t+27=0 → 3^α·3^β=27 → 3^{α+β}=3^3 → α+β=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수·상수항 27=3^k 를 바꿀 수 있음. 제약: 상수항이 밑의 거듭제곱이어야 α+β 정수, 판별식>0·합>0 으로 양의 두 실근 보장."
    creative: "(1) 상수항을 k 로 두고 α+β=3 이 되는 k 를 묻기(0286 골조 ★2) (2) 두 근의 차 β-α 를 물으면 실제 근이 필요해 무리수 처리(★3) (3) 삼차 t³-…=0 으로 근 셋 → 세 근의 합(★3)."
```

```yaml
- id: RPM-ALG-0286
  page: 38
  vendor_label: "유형 14 $a^x$의 꼴이 반복되는 지수방정식의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 3^{2x}-4·3^x-k=0 의 두 근의 합이 -1 일 때 상수 k.
  category: "t=3^x → t²-4t-k=0 → 곱 -k=3^{α+β}=3^{-1} → k=-1/3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 근의 합 -1 을 t-근의 곱 3^{-1} 로 번역해 상수항 -k 와 대응"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환 지수방정식의 근의 합 조건으로 상수 결정(근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=3^x 로 t²-4t-k=0. t-근의 곱 -k=3^α·3^β=3^{α+β}=1/3 → k=-1/3. 이때 t²-4t+1/3=0 은 판별식·합·곱이 모두 양이라 양의 두 근이 실제로 존재(T-범위 검산). 통찰 1(d1)·M_total 5 → 「중」★2.
  tier: star_2
  mechanism_primary: "t=3^x: t²-4t-k=0 → t-근의 곱 -k=3^{α+β}=3^{-1} → k=-1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 4·근의 합 -1 을 바꿀 수 있음. 제약: -k=3^{합} 이므로 합을 정수로 두면 k 는 3 의 거듭제곱의 음수, 양의 두 근이 존재하도록 판별식 16+4k>0 확인."
    creative: "(1) 합 대신 '서로 다른 두 실근을 갖는 k 의 범위' → 근의 분리(I-BW d1 ★3) (2) 두 근의 합이 정수가 되는 k 의 조건(★2) (3) 한 근을 주고 다른 근을 묻기(0275 골조 ★2)."
```

```yaml
- id: RPM-ALG-0287
  page: 38
  vendor_label: "유형 14 $a^x$의 꼴이 반복되는 지수방정식의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    방정식 4^x-2^{x+4}+12=0 의 두 근 α, β 에 대하여 2^{2α}+2^{2β}. 서술형.
  category: "t=2^x → t²-16t+12=0 → 2^{2α}+2^{2β}=t₁²+t₂²=(합)²-2·곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "묻는 값 2^{2α}+2^{2β} 를 t-근의 제곱합 t₁²+t₂² 로 번역해 근과 계수의 관계로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환 지수방정식의 두 근의 대칭식(근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=2^x 로 t²-16t+12=0, t₁=2^α, t₂=2^β. 2^{2α}+2^{2β}=t₁²+t₂²=(t₁+t₂)²-2t₁t₂=256-24=232. 근을 직접 구하면 무리수(8±√52)라 대칭식 번역이 필수(RT d1). 통찰 1(d1)·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "t=2^x: t²-16t+12=0 → 2^{2α}+2^{2β}=t₁²+t₂²=16²-2·12=232"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$232$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 16·상수 12 를 바꿀 수 있음. 제약: 근이 무리수여도 되지만 양의 두 근(합>0·곱>0·판별식>0)이어야 하고 답은 정수."
    creative: "(1) 2^α+2^β(=16) 또는 2^{α+β}(=12) 로 낮추면 ★1~2 (2) 2^{3α}+2^{3β} 세제곱 대칭식(★2) (3) 2^{-α}+2^{-β}=합/곱 으로 분수 처리(★2)."
```

```yaml
- id: RPM-ALG-0288
  page: 38
  vendor_label: "유형 14 $a^x$의 꼴이 반복되는 지수방정식의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 2^x+2^{1-x}+3=a 가 서로 다른 두 실근을 갖도록 하는 정수 a 의 최솟값. 5지선다.
  category: "t=2^x → t²+(3-a)t+2=0 이 서로 다른 두 양근(또는 최솟값 3+2√2 초과) → a>5.83 → 6"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 두 실근' 을 t-이차방정식 t²+(3-a)t+2=0 이 서로 다른 두 양근을 갖는 조건(판별식>0·합>0·곱>0)으로 역추적 — 답이 갖출 성질을 먼저 분석해야 식이 세워짐"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근의 분리(D·합·곱) 갈래와, y=2^x+2^{1-x}+3 의 최솟값 3+2√2(AM-GM · x=1/2 대칭)보다 a 가 크면 두 번 만난다는 그래프 갈래 중 선택 — 후자가 훨씬 짧음"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "지수방정식의 실근 개수 조건(t-이차방정식 근의 분리 / 최솟값·그래프)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=2^x>0 으로 t+2/t+3=a, 즉 t²+(3-a)t+2=0 이 서로 다른 두 양근: D=(a-3)²-8>0, a-3>0 → a>3+2√2≈5.83 → 정수 최솟값 6. 또는 2^x+2^{1-x}≥2√2(등호 x=1/2)로 최솟값 3+2√2 를 잡고 a 가 그보다 크면 좌우 대칭 그래프와 두 번 만난다는 판단이 더 빠르다(SC d1). '서로 다른' 이 등호 배제(T-경계)·t>0(T-범위). 통찰 2(BW d2·SC d1)·M_total 8 → +1 후보이나 빠른 갈래를 택하면 두 단계로 끝나므로 「상중」★3 유지.
    [분류 이슈] 통찰 2개로 +1 후보(★4)이나 최솟값·그래프 갈래로 두 단계에 끝나 ★3 유지 — 카탈로그 base ★ 결정 시 재검토.
  tier: star_3
  mechanism_primary: "t=2^x: t²+(3-a)t+2=0 이 서로 다른 두 양근 → (a-3)²>8, a>3 → a>3+2√2 → 정수 최솟값 6 (또는 최솟값 3+2√2 초과)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2^{1-x} 의 계수(2^k → 두 항의 곱 2^k)·상수 3 을 바꿀 수 있음. 제약: 최솟값 3+2√(2^k) 가 정수가 아니어야 '정수 최솟값' 질문이 성립(곱이 완전제곱이면 등호 배제만 남음), 선택지에 근처 정수 배치."
    creative: "(1) 곱을 완전제곱(2^x+4·2^{-x})으로 → 최솟값이 정수 → 등호 배제 함정만 남음(T-경계 ★3) (2) '실근을 갖지 않는 a 의 범위' 로 뒤집기(★3) (3) 2^x+3·2^{-x} 처럼 대칭축이 무리수면 그래프 갈래는 남지만 근의 분리 계산이 필요해 SC 약화(★3) (4) 두 실근의 합이 항상 1 임(대칭)을 묻는 확장(I-SYM d1 ★3~4)."
```

### 유형 15 지수부등식

```yaml
- id: RPM-ALG-0289
  page: 38
  vendor_label: "유형 15 지수부등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    부등식 5^{x²}≤(1/5)^{x-6} 을 만족시키는 모든 정수 x 의 값의 합.
  category: "밑 5 통일(우변 5^{-x+6}) → 밑>1 방향 유지 → x²+x-6≤0 → -3≤x≤2 → 정수 합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일하는 지수부등식(이차부등식 → 정수해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/5)^{x-6}=5^{-x+6} 이고 밑 5>1 이므로 x²≤-x+6 → (x+3)(x-2)≤0 → -3≤x≤2. 정수 -3~2 의 합 -3. 역수 밑의 지수 부호(T-부호)와 등호 포함 끝점(T-경계)이 정수 합에 직접 영향. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "5^{x²}≤5^{-x+6} → x²+x-6≤0 → -3≤x≤2 → 정수 합 -3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 일차식·밑을 바꿀 수 있음. 제약: 이차부등식의 해가 정수 끝점이어야 정수 합이 깔끔, 밑>1 을 유지하면 방향 유지(밑 1/5 로 바꾸면 반전)."
    creative: "(1) 좌변 밑을 1/5 로 바꿔 방향 반전(★2) (2) 정수의 합 대신 곱으로 바꿔 0 포함 함정(★2) (3) 우변 지수에 k 를 넣어 정수해가 정확히 5개가 되는 k 의 범위(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0290
  page: 38
  vendor_label: "유형 15 지수부등식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부등식 (1/3)^{2x+1}<(1/√3)^{-x} 를 푸시오.
  category: "밑 1/3 통일(우변 (1/3)^{-x/2}) → 밑<1 방향 반전 → 2x+1>-x/2 → x>-2/5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일하는 지수부등식(밑<1 방향 반전 · 일차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/√3=(1/3)^{1/2} 이므로 우변은 (1/3)^{-x/2}. 밑<1 이라 지수 부등호가 반전되어 2x+1>-x/2 → x>-2/5. 반전(T-부호) 하나. 통찰 없음·M_total 4 → 「중하」★1.
  tier: star_1
  mechanism_primary: "(1/3)^{2x+1}<(1/3)^{-x/2} → 밑<1 반전 → 2x+1>-x/2 → x>-2/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x>-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수·밑(1/3, 1/√3 조합)을 바꿀 수 있음. 제약: 반전 구조 유지, 해가 간단한 분수."
    creative: "(1) 밑을 3 으로 바꿔 반전 없는 대조 문항(★1) (2) 양변 밑을 1/3 과 9 로 섞어 통일 두 단계(★1~2) (3) 해가 -2/5<x<k 가 되도록 연립부등식화(★2)."
```

```yaml
- id: RPM-ALG-0291
  page: 38
  vendor_label: "유형 15 지수부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 집합 A={x | (1/2)^{3x}≥1/64}, B={x | 27^{x²-5x-8}<9^{x²-5x}} 에 대하여 A∩B 의 원소 중 정수의 개수.
  category: "A: 밑<1 반전 → x≤2 · B: 밑 3 통일 → x²-5x-24<0 → -3<x<8 → 교집합 -3<x≤2 → 정수 5개"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식 해집합의 교집합·정수 개수(밑<1 반전 + 밑 통일 이차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A: (1/2)^{3x}≥(1/2)^6, 밑<1 → 3x≤6 → x≤2. B: 3^{3x²-15x-24}<3^{2x²-10x} → x²-5x-24<0 → (x-8)(x+3)<0 → -3<x<8. 교집합 -3<x≤2 의 정수 -2, -1, 0, 1, 2 → 5개. 반전(T-부호)과 열린·닫힌 끝점(T-경계 · -3 제외·2 포함)이 개수에 직접 영향. 통찰 없음(교집합은 표준)·M_total 7 → 「중」★2 유지.
    [분류 이슈] 절차 노동 M_total 7(두 부등식·정수 세기)이지만 통찰 없음 → ★2 유지. 카탈로그 base ★ 결정 시 ★2/★3 경계.
  tier: star_2
  mechanism_primary: "A: (1/2)^{3x}≥(1/2)^6 → x≤2 · B: 3^{3x²-15x-24}<3^{2x²-10x} → (x-8)(x+3)<0 → -3<x<8 → A∩B: -3<x≤2 → 정수 5개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 상수 1/64=(1/2)^6·B 의 지수 이차식을 바꿀 수 있음. 제약: B 의 이차부등식이 정수 끝점, 두 해집합이 겹치되 한쪽 끝은 열림·한쪽은 닫힘이 되게 유지(개수 함정)."
    creative: "(1) A∩B 대신 A-B 나 A∪B 의 정수 개수(집합 연산 ★2) (2) B 의 부등호를 ≤ 로 바꿔 끝점 포함 여부 대비(★2) (3) A 의 상수를 k 로 두고 정수 원소가 6개가 되는 k 의 범위(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0292
  page: 38
  vendor_label: "유형 15 지수부등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림의 곡선 y=f(x)·직선 y=g(x)(교점 x=a, 0, c · 곡선의 x절편 a, b, d)에 대하여 부등식 (1/10)^{f(x)}≤(1/10)^{g(x)} 의 해. 5지선다.
  category: "밑<1 → f(x)≥g(x) → 그래프에서 곡선이 직선 위(또는 만남)인 구간 → x≤a 또는 0≤x≤c"
  M: {s: 1, k: 1, a: 3, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식 f(x)≥g(x) 를 그래프의 상하 위치 관계(곡선이 직선 위)로 옮겨 읽음 — 대수↔기하"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 함수의 지수부등식(밑<1 방향 반전 → 상하 관계 읽기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑 1/10<1 이므로 지수 부등호가 반전되어 f(x)≥g(x). 그림에서 곡선이 직선 위에 있거나 만나는 구간은 x≤a 와 0≤x≤c → ②. 단계는 둘뿐이지만 함수가 그래프로만 주어진 추상 표현(Mₐ 3)·반전(T-부호)·등호 포함 교점(T-경계)이 겹친다. 통찰 1(RT d1)·M_total 7 → 「상중」★3 유지(반전을 놓치면 정반대 보기 ③ 으로 감).
    [분류 이슈] 벤더 상중(★3)이나 Mₛ 1·두 단계라 학생 체감은 ★2 후보 — 그래프 추상(Mₐ 3)을 근거로 ★3 유지.
  tier: star_3
  mechanism_primary: "(1/10)^{f(x)}≤(1/10)^{g(x)} → 밑<1 반전 → f(x)≥g(x) → 그래프에서 곡선≥직선: x≤a 또는 0≤x≤c"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0292.png"
  latex: latex-bank/rpm-alg/items/0292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨 a, b, c, d 고정(교점 a·0·c, 곡선 x절편 a·b·d). 제약: 밑을 바꿔도 1 미만이면 답 동일, 1 초과면 반대 구간(a≤x≤0 또는 x≥c · 보기 ③)이 답이 되므로 선택지와 연동."
    creative: "(1) 밑을 10 으로 → f(x)≤g(x) → 보기 ③ 구간(반전 제거 ★2) (2) (1/10)^{f(x)}·10^{g(x)}≤1 로 묶어 밑 통일 한 단계 추가(★3) (3) 교점 대신 x절편 b, d 를 쓰는 f(x)·g(x)≤0 같은 부호 부등식으로 바꾸면 다른 골조(★3)."
```

### 유형 16 $a^x$의 꼴이 반복되는 지수부등식

```yaml
- id: RPM-ALG-0293
  page: 39
  vendor_label: "유형 16 $a^x$의 꼴이 반복되는 지수부등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    부등식 4^{-x}-9·(1/2)^{x-1}+32<0 의 해가 α<x<β 일 때 α+β.
  category: "t=(1/2)^x → t²-18t+32<0 → 2<t<16 → (1/2)^x 감소 → -4<x<-1 → 합 -5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수부등식(이차부등식 → 밑<1 되돌리기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=(1/2)^x=2^{-x} 로 4^{-x}=t², (1/2)^{x-1}=2t → t²-18t+32<0 → (t-2)(t-16)<0 → 2<t<16. (1/2)^x 는 감소함수라 2^1<2^{-x}<2^4 → -4<x<-1 → α+β=-5. 되돌릴 때의 방향 반전(T-부호)이 함정. 통찰 없음·M_total 5·대표문제 → ★2.
  tier: star_2
  mechanism_primary: "t=(1/2)^x: t²-18t+32<0 → 2<t<16 → 1<-x<4 → -4<x<-1 → α+β=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 9·상수 32(t 이차식의 두 근 2, 16)를 바꿀 수 있음. 제약: 두 근이 밑의 거듭제곱이어야 α, β 정수, 되돌리기 반전 구조 유지."
    creative: "(1) t=2^x 로 되돌림이 단조 증가인 대조 문항(★2) (2) 부등호를 > 로 뒤집어 해가 두 구간 → 정수해 개수(★2~3) (3) 상수항을 k 로 두고 해의 길이가 3 이 되는 k(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0294
  page: 39
  vendor_label: "유형 16 $a^x$의 꼴이 반복되는 지수부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부등식 (1/3)^{2x}+(1/3)^{x+2}>(1/3)^{x-2}+1 을 만족시키는 정수 x 의 최댓값.
  category: "t=(1/3)^x → 9t²-80t-9>0 → (9t+1)(t-9)>0 → t>9 → (1/3)^x>(1/3)^{-2} → x<-2 → 정수 최대 -3"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 치환 지수부등식(분수 계수 정리 → 인수분해 → 밑<1 되돌리기 · 정수해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=(1/3)^x 로 t²+t/9>9t+1 → 9t²-80t-9>0 → (9t+1)(t-9)>0, t>0 이므로 t>9. (1/3)^x>(1/3)^{-2} 에서 밑<1 반전 → x<-2 → 정수 최댓값 -3. 분수 계수 정리와 9t²-80t-9 인수분해가 계산 부담(Mₖ 2), t>0(T-범위)·반전(T-부호)·열린 끝(T-경계 · -2 아님). 통찰 없음·M_total 7 → 「중」★2 유지.
    [분류 이슈] 절차 노동 M_total 7(분수 계수·큰 계수 인수분해·함정 셋)이지만 통찰 없음 → ★2 유지. ★2/★3 경계.
  tier: star_2
  mechanism_primary: "t=(1/3)^x: 9t²-80t-9>0 → t>9 → (1/3)^x>(1/3)^{-2} → x<-2 → 정수 최대 -3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 상수 ±2(계수 1/9·9)·우변 상수 1 을 바꿀 수 있음. 제약: t 이차식이 (9t+1)(t-9) 처럼 한 근 음수·한 근 밑의 거듭제곱, 열린 끝점 유지."
    creative: "(1) 부등호를 < 로 → 0<t<9 → x>-2 → 정수 최솟값(★2) (2) (1/3)^{x+2} 항의 부호를 바꿔 두 양근 → 해가 두 구간(★2~3) (3) 상수 1 을 k 로 두고 정수 최댓값이 -3 이 되는 k 의 범위(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0295
  page: 39
  vendor_label: "유형 16 $a^x$의 꼴이 반복되는 지수부등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연립부등식 2^{2x+2}-65·2^{x-2}≤-1, 9^x+3^x>12 의 해가 α<x≤β 일 때 α+β.
  category: "t=2^x: 16t²-65t+4≤0 → 1/16≤t≤4 → -4≤x≤2 · s=3^x: (s+4)(s-3)>0 → s>3 → x>1 → 1<x≤2"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수 연립부등식(두 밑 각각 치환 → 해의 교집합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 식 t=2^x: 4t²-(65/4)t+1≤0 → 16t²-65t+4≤0 → (16t-1)(t-4)≤0 → 1/16≤t≤4 → -4≤x≤2. 둘째 식 s=3^x: s²+s-12>0 → s>3(s>0) → x>1. 교집합 1<x≤2 → α+β=3. 분수 계수·16t²-65t+4 인수분해가 부담(Mₖ 2), s>0 버리기(T-범위)·닫힘/열림 혼합(T-경계). 통찰 없음·M_total 7 → 「중」★2 유지.
    [분류 이슈] 절차 노동 M_total 7(치환 둘·분수 계수·교집합)이지만 통찰 없음 → ★2 유지. ★2/★3 경계.
  tier: star_2
  mechanism_primary: "t=2^x: (16t-1)(t-4)≤0 → -4≤x≤2 · s=3^x: (s+4)(s-3)>0 → x>1 → 1<x≤2 → α+β=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식 계수 65/4(두 근 1/16·4 = 2 의 거듭제곱)·둘째 식 상수 12 를 바꿀 수 있음. 제약: 각 이차식의 양근이 밑의 거듭제곱, 교집합이 한쪽 열림·한쪽 닫힘으로 유지."
    creative: "(1) 두 식의 밑을 같게 두면 치환 하나 → 단순화(★2) (2) 둘째 식을 ≤ 로 바꿔 해가 없는 경우 판정(★2~3) (3) 첫 식 상수를 k 로 두고 정수해가 하나뿐인 k(I-BW d1 ★3)."
```

```yaml
- id: RPM-ALG-0296
  page: 39
  vendor_label: "유형 16 $a^x$의 꼴이 반복되는 지수부등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부등식 4^{x+1}+a·2^x+b≤0 의 해가 -3≤x≤2 일 때 상수 a, b 에 대하여 ab.
  category: "t=2^x → 4t²+at+b≤0 의 해 1/8≤t≤4 → 4(t-1/8)(t-4)≤0 전개 → a=-33/2, b=2 → -33"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 해집합 -3≤x≤2 를 t=2^x 의 해집합 1/8≤t≤4 로 번역(단조 증가라 방향 유지)"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해집합이 [1/8, 4] 인 이차부등식은 최고차 계수 4 를 유지한 4(t-1/8)(t-4)≤0 이어야 한다는 역추적으로 a, b 복원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "해가 주어진 치환 지수부등식의 계수 결정(해집합 번역 → 이차식 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=2^x 로 4t²+at+b≤0. x∈[-3,2] 는 t∈[1/8,4] 이므로 4(t-1/8)(t-4)=4t²-(33/2)t+2 → a=-33/2, b=2 → ab=-33. 해집합의 번역(RT d1)과 최고차 계수 4 를 유지한 복원(BW d1)이 골조이고 분수 계수 전개가 계산 부담(Mₖ 2). 통찰 2(둘 다 d1)·M_total 7 → 「상중」★3.
    [분류 이슈] 통찰 2개로 +1 후보(★4)이나 두 착안 모두 공통수학1 「해가 주어진 이차부등식」 표준 수준이라 ★3 유지.
  tier: star_3
  mechanism_primary: "t=2^x: 4t²+at+b≤0, 해 1/8≤t≤4 → 4(t-1/8)(t-4)≤0 → a=-4·(1/8+4)=-33/2, b=4·(1/2)=2 → ab=-33"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "해의 끝점 -3, 2(t 근 2^{-3}, 2^2)·최고차 계수 4 를 바꿀 수 있음. 제약: 끝점이 정수면 t 근이 2 의 거듭제곱, 4^{x+1}=4·4^x 처럼 최고차 계수를 숨겨 계수 함정 유지, ab 가 정수가 되게 조정."
    creative: "(1) 해가 x≤-3 또는 x≥2(부등호 ≥) → 같은 복원, 방향만 반대(★3) (2) 최고차 계수를 1 로(4^x+a·2^x+b) 낮추면 계수 함정 제거(★2~3) (3) 해가 x≤2 뿐(한 t-근이 음수라 버려짐)인 설계 → I-VF d1 추가(★4) (4) 해집합 대신 '해가 정수 6개' 조건으로 a, b 의 범위(I-BW d2 ★4)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 4 · ★2 29 · ★3 3 · ★4 0 · ★5 0
- 통찰형(insight_type) 2(0288 · 0296) · 절차형 34 · premium 0 · insights 를 한 개 이상 적은 블록 10(0272 EQV · 0281·0282 MI · 0284·0285·0286·0287·0292 RT · 0288 BW+SC · 0296 RT+BW)
- type_hint 상위: 「지수가 이차식인 지수함수의 최대·최소」계열 4(0261~0264) · 「a^x 치환 이차함수의 최대·최소(제한된 정의역)」계열 4(0265~0268) · 「밑을 통일하는 지수방정식」계열 4(0273~0276) · 「a^x 치환 지수방정식」계열 4(0277~0280) · 「치환 지수방정식의 근과 계수의 관계」 3(0285~0287) · 「밑을 통일하는 지수부등식」 3(0289~0291) · 「a^x 치환 지수부등식」 3(0293~0295)
- 벤더 난이도: 대표문제 11 · 중하 2 · 중 20 · 상중 3 · 서술형 2(0275 · 0287)
- 그림: 1문(`crop:fig-0292.png`)
- 전사 답 확인 필요: 없음(36문 모두 재풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0270 | 벤더 「중」이나 한 단계 AM-GM·M_total 4 → ★1. 같은 유형 대표문제 0269(★2)보다 쉬워 벤더 순서와 뒤집힘 | ★1 / ★2 |
| RPM-ALG-0288 | 통찰 2(BW d2·SC d1)로 +1 후보(★4)이나 최솟값·그래프 갈래를 택하면 두 단계로 끝나 ★3 유지. 카탈로그 base ★ 결정 시 재검토 | ★3 / ★4 |
| RPM-ALG-0291 | 절차 노동 M_total 7(두 부등식·집합·정수 세기)이지만 통찰 없음 → ★2 유지. ★2/★3 경계 | ★2 / ★3 |
| RPM-ALG-0292 | 벤더 「상중」(★3)이나 Mₛ 1·두 단계라 학생 체감 ★2 후보. 그래프 추상(Mₐ 3)·반전 함정으로 ★3 유지 | ★2 / ★3 |
| RPM-ALG-0294 | 절차 노동 M_total 7(분수 계수·9t²-80t-9 인수분해·함정 셋)이지만 통찰 없음 → ★2 유지 | ★2 / ★3 |
| RPM-ALG-0295 | 절차 노동 M_total 7(치환 둘·분수 계수·교집합)이지만 통찰 없음 → ★2 유지 | ★2 / ★3 |
| RPM-ALG-0296 | 통찰 2(RT d1·BW d1)로 +1 후보(★4)이나 두 착안 모두 공통수학1 「해가 주어진 이차부등식」 표준 → ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 골조는 크게 세 축으로 묶인다. (A) **최대·최소**: 지수가 이차식(유형 06) / a^x 치환 이차함수(유형 07) / AM-GM(유형 08) / a^x+a^{-x} 공통부분(유형 09). (B) **방정식**: 밑 통일(유형 10) / a^x 치환(유형 11) / 밑 미지수(유형 12) / 연립(유형 13) / 근과 계수 활용(유형 14). (C) **부등식**: 밑 통일(유형 15) / a^x 치환(유형 16). 카탈로그는 이 3축 × 「밑 통일 vs 치환」 구분을 기본 골격으로 세우면 대부분 문항이 떨어진다.
- **따로 세워야 할 유형**: ① 「해가 주어진 치환 지수부등식의 계수 결정」(0296 · RT+BW 골조 · base ★3) ② 「지수방정식의 실근 개수 조건」(0288 · 근의 분리 vs 최솟값·그래프의 SC 골조 · base ★3~4) ③ 「그래프로 주어진 지수부등식」(0292 · 대수↔기하 RT · base ★2~3 — 벤더 상중과 체감이 갈리는 대표 사례) ④ 「밑에 미지수가 있는 지수방정식」(0281·0282 · MI 분기가 본질이라 밑 통일 유형과 합치면 안 됨) ⑤ 「제곱근 꼴 공통부분 치환」(0272 · 치환 대상 선택 EQV 가 유형 09 표준과 다름).
- **통합해도 될 유형**: 유형 07(최대·최소)·유형 11(방정식)·유형 16(부등식)의 「a^x 치환」은 치환 후의 이차식 처리만 다르므로 카탈로그에서는 「a^x 치환 → 이차식」 한 유형 아래 최대·최소/방정식/부등식 하위 태그로 두는 편이 base ★ 관리에 유리하다. 유형 10·15 의 「밑 통일」도 같은 방식(방정식/부등식 하위 태그, 밑<1 반전 여부를 함정 태그로). 유형 14 의 근과 계수(0285~0287)와 유형 13 의 합·곱 연립(0284)은 「x-근의 합 ↔ t-근의 곱」 번역이 같은 RT 골조라 하나로 묶을 수 있다.
- 벤더 「중」 20문 가운데 M_total 4 인 두 문항(0262·0270)은 ★1 로 내렸고, M_total 7 인 절차형 세 문항(0291·0294·0295)은 ★2 로 두었다. 카탈로그에서 base ★ 를 정할 때 「치환 지수부등식 + 정수해」 계열은 ★2 와 ★3 사이의 경계 사례로 보고 정답률 감각과 함께 결정할 것.
