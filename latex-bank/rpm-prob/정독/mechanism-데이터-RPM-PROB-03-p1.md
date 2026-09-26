---
name: mechanism-데이터-RPM-PROB-03-p1
description: RPM 확률과 통계 03 조건부확률(1/2 · 교과서 03-1 조건부확률 ~ 유형 07 독립사건의 확률의 계산) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 03 조건부확률
  unit_code: PROB-03
  part: "1/2"
  extract_range: "41~45쪽 · 0235~0272"
  total_problems: 38
  unit_total: 79
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 03 조건부확률 (1/2) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 03 조건부확률의 앞 범위(41~45쪽 · 0235~0272 · 38문 · 11구역)를 다룬다. 교과서 03-1 조건부확률 ~ 03-4 독립시행의 확률 네 구역 10문과 유형 01 조건부확률의 계산 ~ 유형 07 독립사건의 확률의 계산 일곱 구역 28문으로 구성된다. 단원 도입부라 유형 UP · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up 구역은 이 범위에 없고, 벤더 신호는 구역(교과서 / 유형)과 문항별 난이도(중하·중·상중), 태그(대표문제 7 · 서술형 2)로 나타난다. 난이도 표시가 없는 문항은 교과서 10문과 유형 대표문제 7문이다. 그림 문항은 1문(0249 · 성별×선호 과목 도수표)뿐이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 교과서 ★1 · 유형 구역(대표문제·난이도 없음·중하·중) ★2 · 상중 ★3 이고, 통찰 0 이면서 M_total ≤ 4 인 실질 한 줄 풀이만 −1 해 ★1 로 내렸으며, +1 은 통찰 2개 이상 또는 depth 3 일 때만 적용했다(교과서 구역은 ★1 이 하한이라 −1 을 쓰지 않았다). (2) 이 단원의 표준 도구(조건부확률의 정의 P(B|A)=P(A∩B)/P(A) · 곱셈정리 · 배반 분할에 의한 전확률 · 독립의 정의 P(A∩B)=P(A)P(B) · 독립시행의 반복 공식 · 덧셈정리)는 통찰로 세지 않고 `mechanism_primary` 에만 적었으며, 조건을 쓸 수 있는 형태로 옮겨야 진행되는 손질(드모르간·여사건 전환 · 배반을 포함 관계로 읽기 · 백분율·비를 확률로 옮기기 · 결과 확률에서 미지수 역추적 · 관측된 결과에서 원인을 되짚는 베이즈 방향 전환 · 표본공간을 카드에서 면으로 바꾸기)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 사건 A·B·C 를 문자로만 다루는 확률식 문항은 Mₐ 를 2 로 두었다.

## 문항 데이터

### 교과서 03-1 조건부확률

```yaml
- id: RPM-PROB-0235
  page: 41
  vendor_label: "교과서 03-1 조건부확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위 한 번, A=짝수 · B=소수일 때 ⑴ P(A) ⑵ P(A∩B) ⑶ P(B|A).
  category: "표본공간 열거 → 두 확률 → 조건부확률의 정의"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률의 정의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={2,4,6}, A∩B={2} 를 센 뒤 정의에 넣는 세 칸. 새 착안 없음.
    교과서 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A·A∩B 원소 세기 → P(B|A)=P(A∩B)/P(A)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{2}$ \quad (2) $\dfrac{1}{6}$ \quad (3) $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 사건의 조건(3의 배수·5 이하·6의 약수)을 바꿀 수 있음. 제약: A 가 공사건이 아니어야 하고(분모 0 금지) 세 답이 모두 기약분수로 떨어지도록 원소 개수를 6의 약수로 맞춘다."
    creative: "(1) P(A|B) 를 함께 물어 두 조건부확률이 다름을 보이기(★1 유지) (2) 동전 3개 던지기로 표본공간을 8개로 키우기(★1) (3) 주사위 2개로 바꿔 A∩B 세기를 표로 만들면 Mₖ 상승 ★2."
```

```yaml
- id: RPM-PROB-0236
  page: 41
  vendor_label: "교과서 03-1 조건부확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    100원 2개·10원 1개를 던져 뒷면이 1개 나왔을 때 그것이 10원짜리일 확률.
  category: "뒷면 1개인 경우로 표본공간 축소 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축소 표본공간으로 구하는 조건부확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    동전 3개를 구별해 8가지를 두고, 뒷면이 정확히 1개인 3가지 중 10원이 뒷면인 1가지.
    조건부확률을 「조건이 만족된 경우 안에서의 비」로 읽는 교과서 예시. 통찰 0·M_total 5 → 교과서 ★1.
  mechanism_primary: "같은 금액 동전도 구별해 8가지 → 뒷면 1개 3가지 → 그중 10원 1가지"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 구성(100원 3개+10원 1개, 100원 1개+10원 2개)과 조건(뒷면 2개)을 바꿀 수 있음. 제약: 같은 금액 동전을 구별해 세어야 분모가 맞고, 조건에 해당하는 경우가 0이 되지 않아야 한다."
    creative: "(1) '뒷면이 적어도 1개'로 조건을 넓히기(경우 수 증가 ★2) (2) 주사위 2개의 눈의 합 조건으로 바꾸기(★2) (3) 같은 금액 동전을 구별하지 않는 오답 풀이를 보기로 제시해 고르게 하면 I-MI 착안 ★3."
```

### 교과서 03-2 확률의 곱셈정리

```yaml
- id: RPM-PROB-0237
  page: 41
  vendor_label: "교과서 03-2 확률의 곱셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    P(A)=0.25, P(B)=0.2, P(A|B)=0.5 일 때 ⑴ P(A∩B) ⑵ P(B|A).
  category: "곱셈정리로 교집합 → 반대 방향 조건부확률"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 곱셈정리; P(A∩B)=P(B)P(A|B)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(A∩B)=P(B)P(A|B) 로 0.1 을 얻고 같은 교집합을 P(A) 로 나눠 방향을 뒤집는다.
    곱셈정리의 두 표현을 한 문항에서 확인하는 교과서 칸. 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "P(A∩B)=P(B)P(A|B) → P(B|A)=P(A∩B)/P(A)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0.1$ \quad (2) $0.4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값을 바꿀 수 있음. 제약: P(A∩B)=P(B)P(A|B) 가 P(A)·P(B) 를 모두 넘지 않아야 하고(P(A∩B) ≤ min), 두 답이 소수 한 자리로 떨어지게 맞춘다."
    creative: "(1) P(A∪B) 를 추가로 묻기(덧셈정리 결합 ★1~2) (2) 주어진 값을 분수로 바꾸고 미지수 하나를 넣어 역산하게 하기(I-BW ★2) (3) 독립 여부까지 판정하게 하면 ★2."
```

```yaml
- id: RPM-PROB-0238
  page: 41
  vendor_label: "교과서 03-2 확률의 곱셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    검은 공 3·흰 공 5에서 비복원으로 두 번 꺼낼 때 ⑴ P(A: 첫 검은) ⑵ P(B|A) ⑶ P(A∩B).
  category: "비복원 → 두 번째 시행의 분모 축소 → 곱셈정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비복원 추출과 확률의 곱셈정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫 검은 공 3/8, 그 뒤 남은 7개 중 흰 5개로 5/7, 곱해 15/56.
    비복원에서 분모가 8→7 로 줄어드는 것(T-범위)을 확인하는 교과서 칸. 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "P(A)=3/8 → 남은 7개에서 P(B|A)=5/7 → 곱셈정리로 P(A∩B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{3}{8}$ \quad (2) $\dfrac{5}{7}$ \quad (3) $\dfrac{15}{56}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(검 4·흰 6 등)를 바꿀 수 있음. 제약: 비복원이라 두 번째 분모가 전체−1 이고, 각 색이 1개 이상 남아야 조건부확률이 정의된다."
    creative: "(1) 복원추출로 바꿔 P(B|A)=P(B) 가 됨을 보이기(독립 도입 ★1) (2) 두 번 모두 검은 공으로 조건을 바꾸기(★1) (3) 세 번째 추출까지 확장하면 Mₛ 상승 ★2."
```

### 교과서 03-3 사건의 독립과 종속

```yaml
- id: RPM-PROB-0239
  page: 41
  vendor_label: "교과서 03-3 사건의 독립과 종속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위 한 번에서 A=홀수 · B=3의 배수 · C=6의 약수일 때 ⑴ A와 B ⑵ B와 C 의 독립·종속 판정.
  category: "각 확률과 교집합 확률 → P(A∩B)=P(A)P(B) 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사건의 독립·종속 판정(정의 대조)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={1,3,5}, B={3,6}, C={1,2,3,6} 을 세어 곱과 교집합 확률을 두 쌍 모두 비교한다.
    정의 대조 한 도구뿐이고 계산도 짧다. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "원소 세기 → P(A)P(B) 와 P(A∩B) 비교 → 같으면 독립"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) 독립 \quad (2) 종속'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 사건의 조건(4의 약수·소수·5 이상 등)을 바꿀 수 있음. 제약: 독립이 되려면 |A∩B|/6 = (|A|/6)(|B|/6) 이 되어야 하므로 원소 개수의 곱이 6의 배수로 떨어지는 조합만 독립 쌍이 된다."
    creative: "(1) 세 쌍 모두 판정하게 확장(★1) (2) 독립이 되도록 B 를 고르는 역문제(I-BW ★2) (3) 주사위 2개로 바꿔 표본공간 36개에서 판정하면 Mₖ 상승 ★2."
```

```yaml
- id: RPM-PROB-0240
  page: 41
  vendor_label: "교과서 03-3 사건의 독립과 종속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A·B 가 독립이고 P(A)=1/4, P(B)=2/3 일 때 ⑴ P(A∩B) ⑵ P(Aᶜ∩B) ⑶ P(A|Bᶜ).
  category: "독립의 정의 → 여사건도 독립 → 조건부확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건과 여사건의 확률 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 정의 그대로, ⑵ 는 P(Aᶜ)P(B), ⑶ 은 독립이면 P(A|Bᶜ)=P(A) 라는 교과서 성질.
    세 칸 모두 같은 성질의 변주라 새 착안이 없다. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "독립 → P(A∩B)=P(A)P(B) · Aᶜ,Bᶜ 도 독립 → P(A|Bᶜ)=P(A)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{6}$ \quad (2) $\dfrac{1}{2}$ \quad (3) $\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 확률을 바꿀 수 있음. 제약: 0<P<1 이어야 여사건 조건부확률이 정의되고, 분모가 서로소인 분수를 고르면 세 답이 모두 기약분수로 떨어진다."
    creative: "(1) P(A∪B) 를 추가로 묻기(★1) (2) P(Aᶜ∩Bᶜ) 를 드모르간으로 구하게 하기(I-EQV ★2) (3) 독립 조건을 빼고 P(A∩B) 를 주면 종속 상황의 계산이 되어 ★2."
```

```yaml
- id: RPM-PROB-0241
  page: 41
  vendor_label: "교과서 03-3 사건의 독립과 종속"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    명중률이 각각 0.5, 0.7 인 두 양궁 선수가 한 발씩 쏘아 둘 다 명중시킬 확률.
  category: "서로 다른 사람의 시행 → 독립 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 곱(두 사람의 동시 성공)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 선수의 시행이 서로 영향을 주지 않는다는 독립 판단 뒤 0.5×0.7 한 번.
    교과서 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 시행 독립 → P(A∩B)=0.5×0.7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 명중률을 바꿀 수 있음. 제약: 곱이 소수 두 자리 안에서 떨어지도록 0.1 단위로 고른다."
    creative: "(1) '적어도 한 명이 명중'으로 바꿔 여사건 전환(I-EQV ★2) (2) 선수를 셋으로 늘리기(★1~2) (3) 한 선수가 두 발을 쏘는 독립시행으로 바꾸면 반복 공식이 되어 ★2."
```

### 교과서 03-4 독립시행의 확률

```yaml
- id: RPM-PROB-0242
  page: 41
  vendor_label: "교과서 03-4 독립시행의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위에서 A=5의 약수의 눈일 때 ⑴ P(A) ⑵ 5번 반복해 A 가 3번 일어날 확률.
  category: "한 번의 확률 → 독립시행 반복 공식 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률(반복 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5의 약수는 1과 5 두 개라 p=1/3, 이어서 ₅C₃p³(1−p)² 에 그대로 대입.
    공식 도입 칸이고 착안은 없으나 거듭제곱 정리로 Mₖ 2. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "p=P(A)=1/3 → ₅C₃(1/3)³(2/3)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{3}$ \quad (2) $\dfrac{40}{243}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사건 조건(3의 배수·소수)과 반복 횟수·성공 횟수를 바꿀 수 있음. 제약: 0 ≤ r ≤ n 이고 p 가 6분의 정수여야 분모가 3ⁿ·2ⁿ 꼴로 깔끔하게 정리된다."
    creative: "(1) '3번 이상'으로 바꿔 여러 항의 합(★2) (2) '적어도 한 번'으로 바꿔 여사건(I-EQV ★2) (3) 반복 횟수를 미지수 n 으로 두고 확률 조건에서 n 을 찾는 역문제(I-BW ★3)."
```

```yaml
- id: RPM-PROB-0243
  page: 41
  vendor_label: "교과서 03-4 독립시행의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    동전을 4번 던질 때 앞면이 2번 나올 확률.
  category: "독립시행 반복 공식(p=1/2) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률(반복 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₄C₂(1/2)⁴ 한 줄. 공식 확인용 최소 칸이다.
    교과서 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₄C₂(1/2)²(1/2)² = 6/16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수 n 과 앞면 횟수 r 을 바꿀 수 있음. 제약: p=1/2 이라 답은 항상 ₙCᵣ/2ⁿ 이고, 약분 결과가 보기 좋은 (n,r) 조합을 고른다."
    creative: "(1) 앞면이 뒷면보다 많을 확률로 바꾸기(합 계산 ★2) (2) 편향 동전(앞면 2/3)으로 바꿔 p≠1/2 만들기(★1~2) (3) '앞면이 2번 나왔을 때 첫 번째가 앞면일 확률'로 조건부확률과 결합하면 ★3."
```

```yaml
- id: RPM-PROB-0244
  page: 41
  vendor_label: "교과서 03-4 독립시행의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    오지선다형 4문제에 임의로 답할 때 3문제를 맞힐 확률.
  category: "문제당 정답 확률 1/5 → 독립시행 반복 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률(반복 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p=1/5 을 읽어낸 뒤 ₄C₃(1/5)³(4/5) 대입. 분모 5⁴ 정리로 Mₖ 만 2.
    교과서 구역·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "p=1/5 → ₄C₃(1/5)³(4/5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{16}{625}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지 수(사지선다 → p=1/4)와 문항 수·정답 수를 바꿀 수 있음. 제약: 분모가 (선택지 수)^(문항 수) 로 커지므로 계산 가능한 크기(5⁴ 정도)로 제한한다."
    creative: "(1) '적어도 1문제'로 바꿔 여사건(I-EQV ★2) (2) 문항별 선택지 수가 다르면 독립 곱을 따로 써야 해 ★3 (3) 두 문제는 찍고 두 문제는 안다는 설정으로 조건을 섞으면 ★2."
```

### 유형 01 조건부확률의 계산

```yaml
- id: RPM-PROB-0245
  page: 42
  vendor_label: "유형 01 조건부확률의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    P(A)=0.2, P(B)=0.4, P(Aᶜ∩Bᶜ)=0.5 일 때 P(A|B).
  category: "드모르간·여사건 → 덧셈정리로 P(A∩B) → 조건부확률"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(Aᶜ∩Bᶜ) 를 1−P(A∪B) 로 옮겨 덧셈정리에 쓸 수 있는 P(A∪B) 를 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건부확률의 계산(여사건·덧셈정리 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 조건이 여집합의 교집합이라 그대로는 쓸 수 없고, 드모르간으로 P(A∪B)=0.5 로 바꿔야 덧셈정리가 열린다.
    그 뒤 P(A∩B)=0.2+0.4−0.5, 마지막에 P(B) 로 나누는 정의. 전환 통찰 1개(EQV d1)·유형 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "P(Aᶜ∩Bᶜ)=1−P(A∪B) → 덧셈정리로 P(A∩B) → P(A|B)=P(A∩B)/P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.25$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값을 바꿀 수 있음. 제약: P(A∩B)=P(A)+P(B)−(1−P(Aᶜ∩Bᶜ)) 가 0 이상이고 min(P(A),P(B)) 이하여야 하며, 답이 소수 두 자리로 떨어지게 맞춘다."
    creative: "(1) 묻는 것을 P(B|A) 로 바꾸기(★2 유지) (2) P(Aᶜ∩B) 를 조건으로 주면 분할 착안으로 골조가 바뀜(★2) (3) 조건 하나를 미지수로 두고 P(A|B) 값을 주어 역산하게 하면 I-BW 추가 ★3."
```

```yaml
- id: RPM-PROB-0246
  page: 42
  vendor_label: "유형 01 조건부확률의 계산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(A∩B)=1/3, P(Aᶜ∩B)=1/6 일 때 P(A|B).
  category: "B 를 배반인 두 조각으로 분할 → P(B) → 조건부확률"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률의 계산(배반 분할로 P(B) 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B=(A∩B)∪(Aᶜ∩B) 이고 두 조각이 배반이므로 P(B)=1/3+1/6=1/2, 이어서 정의에 대입.
    이 분할은 유형 04 에서 정면으로 다루는 이 단원의 표준 도구라 통찰로 세지 않았다. 중하·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(B)=P(A∩B)+P(Aᶜ∩B) → P(A|B)=P(A∩B)/P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 확률을 바꿀 수 있음. 제약: 합 P(B) 가 1 이하이고 답이 기약분수가 되도록 분모를 맞춘다."
    creative: "(1) P(Aᶜ|B) 를 묻기(여사건 ★2) (2) P(A) 를 추가로 주고 P(B|A) 까지 묻기(★2) (3) 조건을 P(B)−P(A∩B) 꼴로 감춰 주면 분할 착안이 필요해져 I-EQV ★3."
```

```yaml
- id: RPM-PROB-0247
  page: 42
  vendor_label: "유형 01 조건부확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A·B 가 배반이고 P(A)=1/4, P(B)=3/5 일 때 P(B|Aᶜ). 5지선다.
  category: "배반 → B⊂Aᶜ → 분자를 P(B) 로 교체"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "배반 조건을 포함 관계 B⊂Aᶜ 로 읽어 P(B∩Aᶜ)=P(B) 로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반사건과 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 P(B∩Aᶜ) 를 직접 구하려 하면 막히고, 배반이면 B 가 통째로 Aᶜ 안에 있다는 것을 봐야 P(B) 로 바뀐다.
    분모는 1−P(A)=3/4. 전환 통찰 1개(EQV d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "배반 → B⊂Aᶜ → P(B|Aᶜ)=P(B)/(1−P(A))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 확률을 바꿀 수 있음. 제약: 배반이므로 P(A)+P(B) ≤ 1 이어야 하고, 답 P(B)/(1−P(A)) 이 선택지로 쓸 기약분수가 되게 맞춘다."
    creative: "(1) P(A|Bᶜ) 를 묻기(대칭 ★2) (2) 배반 대신 A⊂B 조건으로 바꾸기(포함 관계 착안 ★2) (3) 배반이면서 독립일 수 있는지 묻는 참·거짓 보기로 바꾸면 I-VF ★3."
```

```yaml
- id: RPM-PROB-0248
  page: 42
  vendor_label: "유형 01 조건부확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(A)=2/3, P(A|B)=2/3, P(A∪B)=3/4 일 때 P(B).
  category: "조건부확률을 P(A∩B)=kP(B) 로 → 덧셈정리에 대입 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(A|B) 값을 P(A∩B)=(2/3)P(B) 라는 미지수 한 개짜리 식으로 옮겨 덧셈정리와 연립한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건부확률과 덧셈정리의 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(B) 를 미지수로 두고 P(A∩B) 를 그 상수배로 표현해야 덧셈정리가 일차방정식이 된다.
    P(A|B)=P(A) 이므로 독립임을 알아차리면 같은 식이 더 빨리 나온다. 통찰 1개(EQV d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "P(A∩B)=(2/3)P(B) → 3/4=2/3+P(B)−(2/3)P(B) → P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(A|B)·P(A∪B) 를 바꿀 수 있음. 제약: 1−P(A|B) 로 나누게 되므로 P(A|B)≠1 이어야 하고, 결과 P(B) 가 0과 1 사이 기약분수가 되도록 세 값을 맞춘다."
    creative: "(1) P(A|B)≠P(A) 로 바꿔 독립 지름길을 막기(★2 유지) (2) 묻는 것을 P(B|A) 로 바꾸기(한 단계 추가 ★2) (3) P(A∪B) 대신 P(Aᶜ∩Bᶜ) 를 주면 드모르간 전환이 더해져 ★3."
```

### 유형 02 조건부확률

```yaml
- id: RPM-PROB-0249
  page: 42
  vendor_label: "유형 02 조건부확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    학생 60명의 성별×선호 과목 도수표(남 18·14, 여 12·16)에서 뽑은 한 명이 여학생일 때 수학을 선호할 확률. 5지선다.
  category: "표에서 조건 행의 합계 → 그 안의 도수 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표로 주어진 자료의 조건부확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건이 여학생이므로 분모는 전체 60 이 아니라 여학생 합계 28, 분자는 그 행의 수학 12 → 12/28.
    표를 그대로 읽어 한 번 나누는 것이 전부다. 대표문제이나 통찰 0·M_total 4 → ★1(출발 ★2 에서 −1).
  tier: star_1
  mechanism_primary: "조건 행의 합계를 분모로 → 12/28"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0249.png
  latex: latex-bank/rpm-prob/items/0249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 네 칸 도수를 바꿀 수 있음. 제약: 행·열 합계가 맞아야 하고(그림 라벨의 합계 칸 고정), 분자/분모가 선택지에 쓸 기약분수로 떨어지게 맞춘다."
    creative: "(1) 조건을 '수학을 선호할 때 여학생일 확률'로 뒤집기(★2) (2) 표의 한 칸을 미지수로 두고 조건부확률 값을 주어 역산(I-BW ★2) (3) 남학생·여학생 각각의 조건부확률을 비교해 독립 여부를 판정하게 하면 ★3."
```

```yaml
- id: RPM-PROB-0250
  page: 42
  vendor_label: "유형 02 조건부확률"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    국내 여행을 선호하는 회원이 전체의 40%, 국내 여행을 선호하는 남자 회원이 전체의 25% 일 때, 국내 여행 선호 회원 중 남자일 확률.
  category: "백분율을 전체 기준 확률로 읽기 → 조건부확률 정의"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'국내 여행을 선호하는 남자가 전체의 25%' 를 P(남∩국내)=0.25 로 읽는다(국내 선호자 중 25% 가 아님)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "백분율 자료의 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 백분율이 모두 전체를 기준으로 한 것임을 읽어내야 분자·분모가 정해진다(T-범위·T-표기).
    그 뒤 0.25/0.4 한 번. 독해 전환 통찰 1개(EQV d1)·중하 → ★2.
  tier: star_2
  mechanism_primary: "P(국내)=0.4 · P(남∩국내)=0.25 → 0.25/0.4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 백분율을 바꿀 수 있음. 제약: 교집합 비율이 전체 비율보다 작아야 하고, 몫이 기약분수로 떨어지는 조합을 고른다."
    creative: "(1) 두 번째 조건을 '국내 선호자 중 62.5%' 로 바꾸면 조건부확률이 직접 주어져 골조가 사라짐(★1) (2) 여자일 확률을 묻기(여사건 ★2) (3) 해외 여행 선호까지 넣어 전확률로 확장하면 ★3."
```

```yaml
- id: RPM-PROB-0251
  page: 42
  vendor_label: "유형 02 조건부확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    남 20·여 10 인 동아리에서 대회 참가자가 남 15·여 a 명이고, 참가자 중 여자일 확률이 2/7 일 때 a.
  category: "조건부확률 식을 a 의 방정식으로 → 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 조건부확률 값에서 a/(15+a)=2/7 을 세워 미지수를 역추적한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건부확률 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 '참가자 중'이므로 분모는 30 이 아니라 참가자 수 15+a 다.
    여기만 잡으면 a/(15+a)=2/7 의 일차방정식. 역추적 통찰 1개(BW d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "분모를 참가자 15+a 로 → a/(15+a)=2/7 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "회원 수·참가 남자 수·목표 확률을 바꿀 수 있음. 제약: a 가 0 이상 여자 회원 수 이하의 정수로 떨어져야 하므로 목표 확률의 분모가 (남자 참가자 수)를 나누도록 고른다."
    creative: "(1) 남자 참가자 수를 미지수로 바꾸기(★2 유지) (2) '참가자 중 남자일 확률'과 '남자 중 참가할 확률'을 함께 주어 두 조건을 연립(I-CON ★3) (3) 확률 조건을 부등식으로 주면 a 의 범위를 구하는 문제가 되어 ★3."
```

### 유형 03 확률의 곱셈정리; $\mathrm{P}(A\cap B)=\mathrm{P}(A)\mathrm{P}(B\mid A)$

```yaml
- id: RPM-PROB-0252
  page: 43
  vendor_label: '유형 03 확률의 곱셈정리; $\mathrm{P}(A\cap B)=\mathrm{P}(A)\mathrm{P}(B\mid A)$'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    당첨권 13장을 포함한 행운권 27장에서 A·B 가 차례로 비복원으로 뽑을 때 두 사람 모두 당첨일 확률. 5지선다.
  category: "비복원 두 단계 → 곱셈정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 곱셈정리(비복원 연속 추출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (13/27)(12/26) 을 약분하는 한 줄. 두 번째 분모·분자가 각각 1씩 줄어드는 것(T-범위)만 주의한다.
    새 착안은 없고 약분 부담으로 Mₖ 2. 유형 대표문제·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(A)=13/27 → P(B|A)=12/26 → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 장수와 당첨 장수를 바꿀 수 있음. 제약: 당첨 ≥ 2 여야 하고, 두 분수의 곱이 선택지에 쓸 기약분수로 떨어지도록 전체−1 이 분자와 약분되는 값을 고른다."
    creative: "(1) '한 사람만 당첨'으로 바꾸면 두 경우 합(I-MI ★3) (2) '적어도 한 명 당첨'은 여사건(I-EQV ★2) (3) B 가 당첨일 확률만 묻는 문제로 바꾸면 전확률이 되어 유형 04 골조 ★2."
```

```yaml
- id: RPM-PROB-0253
  page: 43
  vendor_label: '유형 03 확률의 곱셈정리; $\mathrm{P}(A\cap B)=\mathrm{P}(A)\mathrm{P}(B\mid A)$'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주머니 A(빨 5·파 4)와 B(빨 7·파 2) 중 하나를 임의로 택해 구슬 한 개를 꺼낼 때, 그것이 주머니 A 의 빨간 구슬일 확률.
  category: "주머니 선택 확률 → 그 안의 조건부확률 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주머니를 고르고 꺼내는 2단 시행의 곱셈정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    묻는 것이 '주머니 A 에서 빨강'이라 경로가 하나뿐이므로 (1/2)(5/9) 한 번.
    B 주머니 정보는 쓰이지 않는 미끼다. 통찰 0·M_total 4 → ★2 에서 −1 해 ★1.
  tier: star_1
  mechanism_primary: "P(A 선택)=1/2 → P(빨|A)=5/9 → 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주머니의 구슬 수를 바꿀 수 있음. 제약: 두 주머니의 개수 합이 같을 필요는 없고, 답이 기약분수로 떨어지게 맞춘다. 주머니를 고르는 확률을 1/2 이 아닌 값으로 주려면 그 조건을 발문에 명시해야 한다."
    creative: "(1) '꺼낸 구슬이 빨간색일 확률'로 바꾸면 두 경로 합 → 전확률 ★2 (2) '빨간색이었을 때 주머니 A 였을 확률'이면 베이즈 ★3 (3) 주사위를 던져 주머니를 정하는 설정으로 선택 확률을 비대칭으로 만들면 ★2."
```

```yaml
- id: RPM-PROB-0254
  page: 43
  vendor_label: '유형 03 확률의 곱셈정리; $\mathrm{P}(A\cap B)=\mathrm{P}(A)\mathrm{P}(B\mid A)$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    남 6·여 3 인 신입 회원 9명을 차례로 호명할 때 첫 번째 여학생, 두 번째 남학생일 확률.
  category: "순차 호명(비복원) → 곱셈정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈정리(순차 호명)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3/9)(6/8) 한 줄. 두 번째 분모가 8 로 줄어드는 것만 확인하면 끝난다.
    벤더 「중」이나 통찰 0·M_total 4 → ★1(출발 ★2 에서 −1). 1단 차이라 이슈로 올리지 않았다.
  tier: star_1
  mechanism_primary: "P(첫 여)=3/9 → P(둘째 남|첫 여)=6/8 → 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원을 바꿀 수 있음. 제약: 각 성별이 필요한 만큼 남아 있어야 하고, 약분 결과가 기약분수가 되도록 총원을 정한다."
    creative: "(1) '두 명이 같은 성별'로 바꾸면 두 경우 합(I-MI ★2) (2) 세 번째 호명까지 확장(★2) (3) '두 번째가 남학생일 확률'만 묻기로 바꾸면 전확률이 되어 첫 번째와 무관함을 보이는 ★3."
```

```yaml
- id: RPM-PROB-0255
  page: 43
  vendor_label: '유형 03 확률의 곱셈정리; $\mathrm{P}(A\cap B)=\mathrm{P}(A)\mathrm{P}(B\mid A)$'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    흰 바둑돌 n 개·검은 바둑돌 4개에서 비복원으로 두 번 꺼낼 때 흰·검 순서일 확률이 1/5 이 되는 모든 n 의 합.
  category: "곱셈정리 식을 n 의 이차방정식으로 → 두 근 모두 채택 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과 확률 1/5 에서 거꾸로 n 을 찾는 구조라, 곱셈정리 식을 정리해 n 의 이차방정식을 만들고 두 해가 모두 조건을 만족하는지 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈정리 조건에서 미지수 구하기(이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    {n/(n+4)}{4/(n+3)}=1/5 를 정리하면 n 의 이차방정식이 되고, 두 근이 모두 자연수라 '모든 값의 합'을 묻는다.
    근과 계수의 관계로 합을 바로 읽으면 한 줄 줄어든다. M_total 7 로 이 구역 최대이나 통찰은 1개(BW d2)라 +1 없이 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P=n/(n+4)·4/(n+3)=1/5 → n 의 이차방정식 → 두 근의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "검은 돌 개수와 목표 확률을 바꿀 수 있음. 제약: 정리한 이차방정식의 판별식이 완전제곱수여야 n 이 정수로 떨어지고, 두 근이 모두 자연수여야 '모든 n 의 합'이 뜻을 가진다(한 근이 0 이하면 기각 단계가 생겨 I-VF 로 성격이 바뀜)."
    creative: "(1) 목표 확률을 한 근만 자연수가 되게 잡아 사후 기각을 만들기(I-VF 추가 ★3) (2) 순서를 '검·흰'으로 바꾸기(같은 식 ★2) (3) 확률 조건을 부등식으로 주어 n 의 범위를 묻기(★3) (4) 세 번 꺼내기로 늘리면 삼차식이 되어 ★4."
```

### 유형 04 확률의 곱셈정리; $\mathrm{P}(E)=\mathrm{P}(A\cap E)+\mathrm{P}(\comp{A}\cap E)$

```yaml
- id: RPM-PROB-0256
  page: 43
  vendor_label: '유형 04 확률의 곱셈정리; $\mathrm{P}(E)=\mathrm{P}(A\cap E)+\mathrm{P}(\comp{A}\cap E)$'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    흰 공 4·검은 공 3 에서 지우와 수진이가 차례로 비복원으로 꺼낼 때 수진이가 검은 공을 꺼낼 확률.
  category: "첫 사람의 결과로 배반 분할 → 두 경로의 확률 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전확률; P(E)=P(A∩E)+P(Aᶜ∩E)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수진이 앞에 지우가 무엇을 꺼냈는지가 두 경로로 갈리므로 (4/7)(3/6)+(3/7)(2/6) 을 더한다.
    이 구역이 연습시키는 표준 분할이라 통찰로 세지 않았다. 결과가 3/7 로 지우의 확률과 같다는 점이 이 유형의 감상 포인트. 유형 대표문제·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "지우 흰/검 두 경로로 분할 → 각 경로 곱셈정리 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수를 바꿀 수 있음. 제약: 비복원이라 두 번째 분모가 전체−1 이고, 답은 항상 (검은 공)/(전체) 로 떨어지므로 그 값이 기약분수가 되게 고른다."
    creative: "(1) 세 번째 사람까지 확장해도 같은 값임을 보이기(★3) (2) '수진이가 검은 공을 꺼냈을 때 지우도 검은 공이었을 확률'로 뒤집으면 베이즈 ★3 (3) 두 사람이 같은 색을 꺼낼 확률로 바꾸면 두 경로 합의 다른 조합 ★2."
```

```yaml
- id: RPM-PROB-0257
  page: 43
  vendor_label: '유형 04 확률의 곱셈정리; $\mathrm{P}(E)=\mathrm{P}(A\cap E)+\mathrm{P}(\comp{A}\cap E)$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    비 올 때 승률 0.4, 비 안 올 때 승률 0.6, 비 올 확률 0.3 일 때 그날 이길 확률.
  category: "날씨로 배반 분할 → 각 경로 곱 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전확률(조건별 비율이 주어진 상황)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.3×0.4 + 0.7×0.6 두 항의 합. 주어진 0.4·0.6 이 조건부확률이라는 점만 정확히 읽으면 된다.
    이 구역의 표준 골조라 통찰 없음. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(승)=P(비)P(승|비)+P(비ᶜ)P(승|비ᶜ)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.54$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률을 바꿀 수 있음. 제약: 모두 0과 1 사이여야 하고, 두 항의 합이 소수 두 자리로 떨어지게 0.1 단위로 고른다."
    creative: "(1) '이겼을 때 비가 왔을 확률'로 뒤집어 베이즈 ★2~3 (2) 비길 확률까지 넣어 세 갈래로 늘리기(★3) (3) 비 올 확률을 미지수로 두고 승률을 주어 역산(I-BW ★3)."
```

```yaml
- id: RPM-PROB-0258
  page: 43
  vendor_label: '유형 04 확률의 곱셈정리; $\mathrm{P}(E)=\mathrm{P}(A\cap E)+\mathrm{P}(\comp{A}\cap E)$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수시 80%·정시 20% 이고 각각의 70%·30% 가 여학생일 때 임의로 뽑은 신입생이 여학생일 확률. 5지선다.
  category: "전형별 배반 분할 → 각 경로 곱 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전확률(백분율 자료)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.8×0.7 + 0.2×0.3 = 0.62 를 분수로 고친다. 70%·30% 가 각 전형 안에서의 비율임을 읽는 것이 전부(T-범위).
    표준 분할이라 통찰 없음. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(여)=P(수시)P(여|수시)+P(정시)P(여|정시)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 백분율을 바꿀 수 있음. 제약: 전형 비율의 합이 100% 여야 하고, 결과가 50분모 기약분수처럼 선택지로 쓸 값이 되게 맞춘다."
    creative: "(1) '여학생일 때 수시 합격자일 확률'로 뒤집기(베이즈 ★2~3) (2) 전형을 셋으로 늘리기(★3) (3) 남학생 비율을 주고 여학생 전체 비율을 조건으로 줘 한 전형의 비율을 역산(I-BW ★3)."
```

```yaml
- id: RPM-PROB-0259
  page: 43
  vendor_label: '유형 04 확률의 곱셈정리; $\mathrm{P}(E)=\mathrm{P}(A\cap E)+\mathrm{P}(\comp{A}\cap E)$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A·B 반 학생 수의 비가 2:3 이고 각 반의 1/5, 1/6 이 방과 후 수업을 신청했을 때 임의로 뽑은 학생이 신청자일 확률.
  category: "인원 비를 확률로 전환 → 반별 배반 분할 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "학생 수의 비 2:3 을 P(A반)=2/5, P(B반)=3/5 라는 확률로 옮긴다(또는 전체를 5k 명으로 두고 인원으로 센다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "전확률(비로 주어진 자료)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인원이 아니라 비만 주어져 그대로는 확률이 없고, 비를 전체에 대한 비율로 바꿔야 분할이 시작된다.
    그 뒤 (2/5)(1/5)+(3/5)(1/6). 전환 통찰 1개(EQV d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "비 2:3 → P(A반)=2/5 → 전확률 (2/5)(1/5)+(3/5)(1/6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{50}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 비와 두 신청 비율을 바꿀 수 있음. 제약: 비의 항의 합으로 나눈 값이 확률이 되고, 두 항의 합이 기약분수로 떨어지도록 분모를 맞춘다."
    creative: "(1) 실제 인원(40명·60명)으로 주면 전환 통찰이 사라져 ★1~2 (2) '신청자일 때 A 반일 확률'로 뒤집기(베이즈 ★3) (3) 전체 신청 비율을 주고 B 반 비율을 역산하게 하면 I-BW 추가 ★3."
```

### 유형 05 확률의 곱셈정리와 조건부확률

```yaml
- id: RPM-PROB-0260
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A·B 공장의 생산 비율 40%·60%, 불량률 5%·3% 일 때 불량품이 A 공장 제품일 확률.
  category: "두 경로의 불량 확률 → 전확률을 분모로 → 원인 쪽 경로를 분자로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "관측된 결과(불량)에서 원인(공장)을 되짚는 방향이라, 주어진 P(불량|A) 를 그대로 쓰지 않고 P(A∩불량)/P(불량) 형태로 뒤집어야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "베이즈형 조건부확률(결과에서 원인 역추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.4×0.05 = 0.02 를 분자로, 0.02+0.6×0.03 = 0.038 을 분모로 놓고 약분해 10/19.
    주어진 것은 원인→결과 확률인데 묻는 것은 결과→원인이라는 방향 전환이 이 유형의 전부다. 통찰 1개(BW d1)·유형 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "P(A∩불)=0.4·0.05 · P(불)=0.4·0.05+0.6·0.03 → 비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{10}{19}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "생산 비율과 두 불량률을 바꿀 수 있음. 제약: 생산 비율의 합이 100% 이고, 분자·분모를 정수비로 만들면 답이 기약분수로 떨어진다(백분율을 정수로 유지)."
    creative: "(1) 묻는 것을 '불량품이 B 공장 제품일 확률'로 바꾸기(여사건 ★2) (2) 공장을 셋으로 늘리기(분모 세 항 ★3) (3) 한 공장의 불량률을 미지수로 두고 사후확률을 주어 역산하면 I-BW d2 ★3."
```

```yaml
- id: RPM-PROB-0261
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    홈 승률 70%·원정 승률 40%, 홈 경기 비율 50% 일 때 승리한 경기가 홈 경기였을 확률. 5지선다.
  category: "두 경로의 승리 확률 → 전확률 분모 → 홈 경로 분자"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "승리라는 결과에서 홈/원정이라는 원인을 되짚는 방향 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "베이즈형 조건부확률(결과에서 원인 역추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.5×0.7 을 0.5×0.7+0.5×0.4 로 나눠 7/11. 홈 비율이 1/2 이라 실질적으로 두 승률의 비다.
    0260 과 같은 골조의 반복 연습. 통찰 1개(BW d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "P(홈∩승)/[P(홈∩승)+P(원정∩승)]"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 승률과 홈 경기 비율을 바꿀 수 있음. 제약: 홈 비율이 1/2 이 아니면 두 항에 가중치가 남아 계산이 길어지므로 선택지 분모(11 같은 소수)가 감당 가능한지 확인한다."
    creative: "(1) 홈 비율을 60% 로 비대칭화(★2 유지·Mₖ 상승) (2) '패배했을 때 원정이었을 확률'로 바꾸기(여사건 조합 ★3) (3) 승·무·패 세 결과로 늘리면 분모가 세 항 ★3."
```

```yaml
- id: RPM-PROB-0262
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    버스 30%·기차 70% 로 운송하고 각각 80%·20% 가 1일 이내 배송될 때, 1일 이내 배송품이 기차 운송이었을 확률. 5지선다.
  category: "두 경로의 배송 확률 → 전확률 분모 → 기차 경로 분자"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'1일 이내 배송'이라는 결과에서 운송 수단이라는 원인을 되짚는 방향 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "베이즈형 조건부확률(결과에서 원인 역추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.7×0.2 = 0.14 를 0.3×0.8+0.7×0.2 = 0.38 로 나눠 7/19.
    비율이 큰 쪽(기차)이 조건부확률에서는 작아지는 역전이 이 유형의 감상 포인트. 통찰 1개(BW d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "P(기차∩1일)/[P(버스∩1일)+P(기차∩1일)]"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "운송 비율과 두 배송률을 바꿀 수 있음. 제약: 비율 합이 100% 이고, 분모(두 곱의 합)가 선택지 분모로 쓸 수 있는 정수비가 되게 백분율을 정수로 유지한다."
    creative: "(1) 묻는 것을 버스 쪽으로 바꾸기(여사건 ★2) (2) '1일 이내가 아니었을 때'로 조건을 뒤집기(여사건 확률 계산 추가 ★3) (3) 운송 수단을 셋으로 늘리기(★3)."
```

```yaml
- id: RPM-PROB-0263
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    필통 A(빨 2·파 4)·B(빨 3·파 3) 중 하나를 택해 볼펜 2개를 동시에 꺼냈더니 빨강 1·파랑 1 이었을 때 그것이 필통 B 였을 확률. 5지선다.
  category: "각 필통의 조합확률 → 전확률 분모 → B 경로 분자"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꺼낸 결과(빨1·파1)에서 어느 필통이었는지를 되짚는 방향 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "베이즈형 조건부확률(조건부확률을 조합으로 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 문항들과 달리 각 경로의 조건부확률이 백분율로 주어지지 않아 ₆C₂ 를 분모로 하는 조합확률을 먼저 만들어야 한다(A: 2·4/15, B: 3·3/15).
    그 뒤는 같은 베이즈 골조. 계산 층이 하나 더 있으나 통찰은 1개(BW d1)라 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "각 필통의 P(빨1파1)=조합비 → 1/2 가중 전확률 → B 경로/전체"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 필통의 볼펜 구성을 바꿀 수 있음. 제약: 두 필통의 볼펜 총수를 같게 두면 분모 ₙC₂ 가 약분돼 계산이 짧아지고, 각 색이 1개 이상 있어야 빨1·파1 사건이 가능하다."
    creative: "(1) 꺼낸 결과를 '둘 다 빨강'으로 바꾸기(같은 골조 ★2) (2) 두 필통의 볼펜 총수를 다르게 해 분모 약분을 막기(Mₖ 상승 ★3) (3) 꺼낸 뒤 다시 한 개를 더 꺼내는 3단 시행으로 늘리면 ★4."
```

```yaml
- id: RPM-PROB-0264
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    흰 2·검 3 에서 하준이가 1개, 남은 4개에서 지호가 1개를 꺼냈을 때, 지호가 흰 공이었다면 하준이도 흰 공이었을 확률. 5지선다.
  category: "뒤에 일어난 결과로 앞 시행을 추론 → 두 경로 분할 → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "시간상 나중 사건(지호의 결과)을 조건으로 앞 사건(하준의 결과)을 추론하는 역방향이라, 조건부확률을 정의로 돌아가 두 경로의 비로 다시 세워야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시간을 거슬러 올라가는 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자는 (2/5)(1/4), 분모는 그것과 (3/5)(2/4) 의 합. 계산은 짧지만 '뒤에 본 것으로 앞을 판단한다'는 방향이 학생에게 낯설다.
    앞 공장·경기 문항보다 역방향 성격이 뚜렷해 depth 2 로 두었다. 다만 통찰 1개라 +1 없이 중 출발 ★2 유지(★3 후보로 이슈 기록).
  tier: star_2
  mechanism_primary: "P(둘 다 흰)/[P(둘 다 흰)+P(하준 검·지호 흰)]"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수를 바꿀 수 있음. 제약: 흰 공이 2개 이상이어야 '둘 다 흰' 경로가 살아 있고, 두 경로의 합이 선택지로 쓸 기약분수가 되게 맞춘다."
    creative: "(1) 조건과 결론을 맞바꿔 평범한 곱셈정리로 되돌리기(★1~2) (2) 세 사람으로 늘려 마지막 사람의 결과로 첫 사람을 추론(★4) (3) 지호가 꺼낸 공을 보지 않은 채 '하준이가 흰 공일 확률'을 묻는 비교 문항을 붙이면 독립성 감상 ★3."
```

```yaml
- id: RPM-PROB-0265
  page: 44
  vendor_label: "유형 05 확률의 곱셈정리와 조건부확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    양면이 (1,1)·(1,2)·(2,2) 인 카드 세 장 중 한 장을 뽑았더니 보이는 면이 1 이었을 때 뒷면이 2일 확률.
  category: "표본공간을 카드 3개에서 면 6개로 전환 → 조건에 맞는 면 중의 비"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'카드를 뽑는다'가 아니라 '한 면을 본다'로 표본공간을 옮겨 6개의 면을 동등한 근원사건으로 삼아야 한다(카드 단위로 세면 1/2 이라는 오답이 나온다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "표본공간을 면 단위로 바꾸는 조건부확률(카드 양면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1 이 적힌 면은 A 의 두 면과 B 의 한 면으로 3개이고, 그중 뒷면이 2인 것은 B 의 한 면뿐이라 1/3.
    카드 A 의 두 면을 구별하지 않으면 답이 1/2 로 어긋나는 것이 이 문항의 함정(T-표기·T-범위)이다. 벤더 상중 출발 ★3 유지, 통찰 1개(RT d2).
  tier: star_3
  mechanism_primary: "면 6개를 근원사건으로 → 1이 보이는 면 3개 → 그중 뒷면 2 인 면 1개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드에 적는 숫자 조합과 카드 장수를 바꿀 수 있음. 제약: 같은 숫자가 양면에 적힌 카드가 있어야 면 단위 전환이 의미를 갖고, 조건에 해당하는 면이 1개 이상이어야 한다."
    creative: "(1) 카드를 네 장으로 늘려 (1,1)·(1,2)·(2,2)·(1,2) 처럼 중복 카드를 넣기(★3 유지) (2) 주사위·구슬 색으로 바꿔 같은 골조를 옮기기(★3) (3) 카드 단위로 센 오답 풀이를 함께 제시해 어디가 틀렸는지 고르게 하면 I-VF 추가 ★4."
```

### 유형 06 사건의 독립과 종속의 판정

```yaml
- id: RPM-PROB-0266
  page: 45
  vendor_label: "유형 06 사건의 독립과 종속의 판정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1~12 카드에서 A=홀수 · B=3의 배수 · C=소수일 때 보기 ㄱ(A,B) ㄴ(A,C) ㄷ(B,C) 중 서로 독립인 것.
  category: "세 쌍 각각 P(X∩Y) 와 P(X)P(Y) 대조"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립·종속 판정(보기형 · 정의 대조)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12장에서 홀수 6·3의 배수 4·소수 5 를 세고 세 쌍의 교집합 원소를 각각 센 뒤 곱과 비교한다.
    도구는 정의 하나뿐이고 반복 계산만 세 번이라 통찰 없음. 유형 대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 사건의 원소 세기 → 세 쌍에 대해 P(X∩Y)=P(X)P(Y) 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수와 세 사건의 조건을 바꿀 수 있음. 제약: 적어도 한 쌍이 독립이 되려면 |X∩Y|·N = |X|·|Y| 가 성립해야 하므로 N 을 약수가 많은 수(12·20·24)로 두는 것이 안전하다."
    creative: "(1) 독립인 쌍이 없게 만들어 '없다'가 답이 되게 하기(★3) (2) 카드 수를 미지수 N 으로 두고 A,B 가 독립이 되는 N 을 찾기(I-BW ★4) (3) 세 사건이 서로 독립인지까지 묻기(★4)."
```

```yaml
- id: RPM-PROB-0267
  page: 45
  vendor_label: "유형 06 사건의 독립과 종속의 판정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    동전 2개를 던져 A=10원 앞면 · B=100원 뒷면 · C=같은 면 · D=다른 면일 때 서로 독립이 아닌 쌍. 5지선다.
  category: "네 사건의 확률·교집합 대조 → 배반이면서 여사건인 쌍 찾기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "C 와 D 가 서로 여사건이라 P(C∩D)=0 인데 P(C)P(D)=1/4 이므로, 계산 없이 '배반이면서 확률이 0이 아니면 종속'으로 정리된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립·종속 판정(동전 두 개의 사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 표본점을 두고 다섯 쌍을 확인하면 ①~④ 는 모두 1/4 = (1/2)(1/2) 로 독립이다.
    ⑤ 만 교집합이 공사건이라 종속인데, 이를 배반–독립의 관계로 바로 읽으면 검산이 한 줄로 끝난다. 통찰 1개(EQV d1)·중하 → ★2.
  tier: star_2
  mechanism_primary: "표본점 4개 → 각 쌍의 P(X∩Y) 와 P(X)P(Y) 비교 → C,D 는 배반이라 종속"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전을 3개로 늘리거나 사건 정의(앞면이 2개 이상 등)를 바꿀 수 있음. 제약: 표본점이 균등해야 정의 대조가 간단하고, 종속인 쌍이 정확히 하나만 되도록 사건을 고른다."
    creative: "(1) '독립인 것만 모두 고르시오'로 바꾸기(보기형 ★2) (2) 동전 3개로 늘려 세 사건의 쌍별 독립을 묻기(★3) (3) 배반과 독립이 동시에 성립할 조건을 묻는 명제형으로 바꾸면 ★4."
```

```yaml
- id: RPM-PROB-0268
  page: 45
  vendor_label: "유형 06 사건의 독립과 종속의 판정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    P(A)=3/4, P(B)=2/3, P(A∪B)=11/12 일 때 A 와 B 의 독립·종속 판정.
  category: "덧셈정리로 P(A∩B) → 곱과 대조"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리로 교집합을 구해 독립 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(A∩B)=P(A)+P(B)−P(A∪B) 로 1/2 을 얻고 P(A)P(B)=1/2 과 같으므로 독립.
    두 표준 공식을 이어 붙이는 것 외에 착안이 없다. 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "덧셈정리로 P(A∩B) → P(A)P(B) 와 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "독립"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률을 바꿀 수 있음. 제약: P(A∩B)=P(A)+P(B)−P(A∪B) 가 0 이상 min 이하여야 하고, 독립으로 만들려면 P(A∪B)=P(A)+P(B)−P(A)P(B) 를 그대로 쓴다."
    creative: "(1) 값을 살짝 바꿔 종속이 되게 하기(★2 유지) (2) P(A∪B) 를 미지수로 두고 독립이 되는 값을 구하게 하기(I-BW ★3) (3) 독립일 때 P(Aᶜ∪Bᶜ) 까지 묻기(드모르간 결합 ★3)."
```

### 유형 07 독립사건의 확률의 계산

```yaml
- id: RPM-PROB-0269
  page: 45
  vendor_label: "유형 07 독립사건의 확률의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A·B 가 독립이고 P(A)=1/2, P(A∪B)=2/3 일 때 P(B).
  category: "덧셈정리에 독립의 곱을 대입 → P(B) 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건과 합사건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2/3 = 1/2 + P(B) − (1/2)P(B) 를 풀면 P(B)=1/3.
    독립 → 곱, 덧셈정리 대입이라는 이 유형의 기본 골조 그대로라 통찰 없음. 유형 대표문제·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(A∪B)=P(A)+P(B)−P(A)P(B) → P(B) 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A)·P(A∪B) 를 바꿀 수 있음. 제약: 1−P(A) 로 나누므로 P(A)≠1 이고, P(B)={P(A∪B)−P(A)}/{1−P(A)} 가 0과 1 사이 기약분수가 되게 맞춘다."
    creative: "(1) P(A∩B) 를 묻기(한 단계 추가 ★2) (2) P(Aᶜ∩Bᶜ) 를 조건으로 주면 드모르간 전환이 더해져 ★3 (3) 두 조건을 모두 미지수로 두고 P(A)·P(B) 의 곱·합을 묻는 문제로 바꾸면 ★3."
```

```yaml
- id: RPM-PROB-0270
  page: 45
  vendor_label: "유형 07 독립사건의 확률의 계산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A·B 가 독립이고 P(A∪B)=2/5, P(A)P(B)=1/3 일 때 P(A|B)+P(B|A).
  category: "독립 → 조건부확률이 각각 P(A)·P(B) → 덧셈정리로 합 구하기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "독립이므로 P(A|B)=P(A), P(B|A)=P(B) 로 바뀌어 구하는 값이 P(A)+P(B) 라는 합 하나로 정리된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립사건의 조건부확률의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 확률을 따로 구하려 하면 막히고, 구하는 것이 P(A)+P(B) 임을 보면 덧셈정리에서 2/5+1/3 로 한 줄에 끝난다.
    전환 통찰 1개(EQV d1)·중하 → ★2. 수치 설정에 결함이 있어 variation_notes 에 기록했다(골조·답 자체는 일관).
  tier: star_2
  mechanism_primary: "독립 → 구하는 값 = P(A)+P(B) = P(A∪B)+P(A∩B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{11}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∪B) 와 P(A)P(B) 를 바꿀 수 있음. 제약: P(A)+P(B)=P(A∪B)+P(A)P(B) 와 P(A)P(B) 를 두 근으로 하는 이차방정식의 판별식이 0 이상이어야 실제로 그런 두 확률이 존재한다 — 원 문항의 (2/5, 1/3) 은 이 조건을 만족하지 않아 답 11/15 은 형식적으로만 정해진다. 새 수치를 만들 때는 먼저 P(A)·P(B) 를 정하고 역산할 것."
    creative: "(1) P(A)·P(B) 를 직접 주고 P(A|B)+P(B|A) 를 묻기(★1~2) (2) P(A|B)·P(B|A) 의 곱을 묻기(★2) (3) 독립 조건을 빼고 P(A∩B) 를 주면 두 조건부확률을 따로 계산해야 해 ★3."
```

```yaml
- id: RPM-PROB-0271
  page: 45
  vendor_label: "유형 07 독립사건의 확률의 계산"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    A·B 는 배반, A·C 는 독립이고 P(A∪B)=7/10, P(A∩C)=1/2, P(C)=5/6 일 때 P(B).
  category: "독립 조건을 뒤집어 P(A) 복원 → 배반이므로 합에서 빼기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 P(B) 로 가려면 P(A) 가 필요한데, A 와 C 의 독립 조건을 P(A)=P(A∩C)/P(C) 로 뒤집어야 P(A) 가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배반·독립 조건이 섞인 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C 는 P(A) 를 얻기 위한 통로일 뿐이고(P(A)=(1/2)/(5/6)=3/5), 배반이므로 P(B)=P(A∪B)−P(A).
    서로 다른 사건 쌍에 걸린 세 조건을 어떤 순서로 쓸지 잡는 것이 서술형 배점 포인트다. 통찰 1개(BW d1)·중 → ★2.
  tier: star_2
  mechanism_primary: "독립에서 P(A)=P(A∩C)/P(C) → 배반이라 P(B)=P(A∪B)−P(A)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률을 바꿀 수 있음. 제약: P(A)=P(A∩C)/P(C) 가 1 이하이고 P(A∪B) 보다 작아야 P(B)>0 이 되며, P(A∩C) ≤ P(C) 를 지켜야 한다."
    creative: "(1) 묻는 것을 P(C|A) 나 P(B∪C) 로 바꾸기(★2~3) (2) 배반 대신 B,C 독립 조건을 주어 사슬을 한 칸 늘리기(I-CON ★3) (3) P(A∪B) 를 미지수로 두고 P(B) 값을 주어 역산(★3)."
```

```yaml
- id: RPM-PROB-0272
  page: 45
  vendor_label: "유형 07 독립사건의 확률의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A·B 가 독립이고 P(B)=1/6, P(A∩Bᶜ)+P(Aᶜ∩B)=2/3 일 때 P(A).
  category: "여사건도 독립 → 두 항을 P(A) 의 일차식으로 → 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A,B 가 독립이면 A,Bᶜ 와 Aᶜ,B 도 독립이라는 성질을 써서 두 교집합 확률을 P(A)(1−P(B)) 와 (1−P(A))P(B) 라는 P(A) 의 일차식으로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립사건과 여사건이 섞인 확률식에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 합은 '둘 중 정확히 하나만 일어날 확률'이라 그대로는 P(A) 와 이어지지 않는다.
    여사건의 독립성으로 두 항을 풀어야 P(A)·(5/6) + (1−P(A))·(1/6) = 2/3 이라는 일차방정식이 선다. M_total 7 이지만 통찰 1개(EQV d2)라 +1 없이 중 출발 ★2 유지(★3 후보로 이슈 기록).
  tier: star_2
  mechanism_primary: "여사건도 독립 → (5/6)P(A)+(1/6){1−P(A)}=2/3 → P(A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(B) 와 합의 값을 바꿀 수 있음. 제약: 1−2P(B) 로 나누게 되므로 P(B)≠1/2 이어야 하고, 결과 P(A) 가 0과 1 사이 기약분수가 되도록 합의 값을 고른다."
    creative: "(1) 주어진 합을 P(A∪B)−P(A∩B) 로 바꿔 써 같은 식 만들기(★2 유지) (2) P(A) 대신 P(A∪B) 를 묻기(한 단계 추가 ★2) (3) 독립 조건을 빼고 P(A∩B) 를 미지수로 남기면 미지수 2개가 되어 ★4."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 13 · ★2 24 · ★3 1 · ★4 0 · ★5 0 (premium 0)
- insights 가 있는 문항 17 · 그중 `insight_type` 통찰형 4(0255 · 0264 · 0265 · 0272) · 절차형 34
- 통찰 유형 분포: I-BW 7(0251 0255 0260 0261 0262 0263 0264 0271 중 d2 는 0255·0264) · I-EQV 8(0245 0247 0248 0250 0259 0267 0270 0272) · I-RT 1(0265). I-XU·I-PD·I-SYM·I-CON·I-MI·I-SC·I-VF 는 이 범위에 없다.
- M_total 분포: 4 → 7문 · 5 → 16문 · 6 → 11문 · 7 → 4문. 단원 도입부라 7 이 최대다.
- type_hint 상위 5: 「베이즈형 조건부확률(결과에서 원인 역추적)」 5(0260~0264) · 「전확률; P(E)=P(A∩E)+P(Aᶜ∩E)」 4(0256~0259) · 「독립·종속 판정」 4(0239 0266 0267 0268) · 「조건부확률의 정의·계산」 4(0235 0236 0245 0246) · 「곱셈정리(비복원·순차 추출)」 4(0237 0238 0252 0254). 그다음이 「독립시행의 확률(반복 공식)」 3(0242 0243 0244).
- 그림: 1문(`crop:fig-0249.png` · 성별×선호 과목 도수표). 나머지 37문은 `figure: none`.
- 대상층: 하위권 13 · 중하위권 21 · 중위권 3 · 중상위권 1. ★4 이상이 없어 상위권 전용 문항은 이 범위에 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0249 | 유형 02 대표문제이나 표의 행 합계를 분모로 한 번 나누는 것이 전부(통찰 0 · M_total 4) → 출발 ★2 에서 −1 해 ★1. 대표문제를 ★1 로 두는 것이 카탈로그에서 허용되는지 확인 필요 | ★1 / ★2 |
| RPM-PROB-0253 · 0254 | 벤더 「중하」·「중」이나 곱셈정리 두 분수의 곱 한 줄(통찰 0 · M_total 4) → ★1. 벤더 난이도와 1단 차 | ★1 / ★2 |
| RPM-PROB-0255 | M_total 7 · 서술형 태그 · 이차방정식 역산이지만 통찰이 1개(BW d2)라 +1 규칙에 걸리지 않아 ★2 | ★2 / ★3 |
| RPM-PROB-0263 | 베이즈 골조 위에 조합확률 계산층이 하나 더 있으나 통찰은 여전히 1개 → ★2. 같은 유형 05 의 다른 문항들과 체감 난이도 차가 있음 | ★2 / ★3 |
| RPM-PROB-0264 | 시간을 거스르는 조건부확률(BW d2)이라 같은 구역의 공장·경기 문항보다 낯설지만 통찰 1개라 ★2 유지 | ★2 / ★3 |
| RPM-PROB-0272 | M_total 7 · 여사건 독립 전환(EQV d2)이지만 통찰 1개라 ★2 유지 | ★2 / ★3 |
| RPM-PROB-0270 | ★ 판정 이슈는 아니나 수치 결함 기록: P(A∪B)=2/5 와 P(A)P(B)=1/3 을 동시에 만족하는 실수 P(A),P(B) 가 존재하지 않는다(두 값을 근으로 하는 이차방정식의 판별식 < 0). 답 11/15 은 골조대로 나오므로 전사 답은 그대로 두고, 변형 때는 P(A)·P(B) 를 먼저 정하고 역산할 것 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: (1) 「전확률(P(E)=P(A∩E)+P(Aᶜ∩E))」과 「베이즈형(결과 → 원인)」은 계산량이 비슷해도 방향이 달라 학생 체감이 갈린다 — 0256~0259 와 0260~0264 를 한 유형으로 묶지 말 것. (2) 「표본공간을 면 단위로 바꾸는 조건부확률」(0265)은 조건부확률 계산이 아니라 근원사건 설계 유형이라 별도 슬롯이 필요하다(base ★3~4 후보). (3) 「시간을 거스르는 조건부확률」(0264)은 베이즈와 식은 같지만 조건이 나중 사건이라는 점에서 별도 하위 유형으로 두면 변형 원본으로 쓰기 좋다.
- **통합해도 될 유형**: (1) 0242~0244 의 「독립시행의 확률」 세 문항은 p 만 다른 같은 공식 대입이라 한 유형으로 충분하다. (2) 0260·0261·0262 는 백분율 자료 위의 동일한 2경로 베이즈라 하나의 유형(수치 변형 슬롯)으로 묶인다. (3) 0245·0246·0248 은 모두 「다른 꼴로 주어진 조건을 P(A∩B)·P(B) 로 환원하는 조건부확률 계산」이라 한 유형 아래 난이도 변주로 둘 수 있다.
- **base ★ 제안**: 교과서 구역 유형 ★1, 유형 01~04·06~07 의 기본 골조 ★2, 유형 05 의 베이즈 ★2(조합 계산층이 붙으면 ★3), 표본공간 재설계 ★3~4. 이 범위에는 ★4·★5 자격(SC/VF/SYM/XU 통찰)을 가진 문항이 없으므로 03 단원의 변별 슬롯은 2/2 범위(유형 UP·시험에 꼭 나오는 문제·실력 Up)에서 찾아야 한다.
