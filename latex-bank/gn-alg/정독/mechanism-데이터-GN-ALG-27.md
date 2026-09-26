---
name: mechanism-데이터-GN-ALG-27
description: 개념원리 대수 27 등비수열의 합(1/1 · 246~256쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-alg
  section: 27 등비수열의 합
  unit_code: ALG-27
  part: "1/1"
  extract_range: "246~256쪽 · 246-569~256-601"
  total_problems: 39
  unit_total: 39
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·STEP 난이도)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 범위 조정 기준은 「통찰 depth 1 하나면 출발점 유지 · depth 2 이상이거나 통찰 2개 이상이면 +1 · 통찰 0 이고 M_total ≤ 5 면 −1 · 분리·경계 함정이 실제 오답을 만들어 Mₜ=2 이면 +1」. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위 그림 3문 · fig-249-577 · fig-249-578 · fig-256-600)
---

# 개념원리 대수 · 27 등비수열의 합 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 27단원 등비수열의 합 246~256쪽 39문항 전수를 담는다. 구역은 여섯이다. 「개념원리 익히기」(246쪽 569~572 · 통번호 · 태그 없음)는 합 공식과 `S_n`↔`a_n` 관계를 바로 확인하는 개념 확인 문항이라 ★1 출발, 「필수·발전 예제」(247~250쪽)는 상자 발문만 전사된 예제(`쪽-eN` · tag 「필수」 ★2 · 「발전」 ★3)와 그 뒤의 확인체크(통번호 · tag 「확인체크」 ★2)가 번갈아 놓인 구조다. 「특강」(253쪽)은 원리합계로 교육과정 심화라 ★3 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 STEP 2·실력 UP 에 교육청·평가원 기출 태그가 세 문항 붙어 있다.

단원 도구는 넷이다. 합 공식 `S_n = a(r^n−1)/(r−1)`(및 `r=1` 예외), `a_n = S_n − S_{n−1}`(`n=1` 분리), 「`S_n`, `S_{2n}−S_n`, `S_{3n}−S_{2n}` 이 공비 `r^n` 인 등비를 이룬다」는 구간합 구조, 그리고 적립금을 만기 기준 역순 등비수열로 배열하는 원리합계다. 그래서 통찰은 대부분 I-PD(구간합 구조 발견)·I-RT(도형·그래프·실생활 → 등비 모형화, 지수↔로그)·I-BW(결과 조건에서 공비·적립금 역추적)에 몰려 있고, 익히기와 STEP 1 앞쪽은 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-246-569
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 첫째항과 공비(또는 처음 몇 항)가 주어진 등비수열의 첫째항부터 제$n$항까지의 합. 공비가 $3$, $-\dfrac{1}{2}$, $\sqrt{2}$, $-2$, $0.1$ 인 다섯 경우.
  category: "첫째항·공비 확인 → 등비수열의 합 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 공식 직접 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 소문항 모두 첫째항과 공비를 읽어 합 공식에 넣는 한 단계다. ⑷⑸ 처럼 처음 몇 항이 나열된 경우 공비를 나눗셈으로 얻는 것이 유일한 추가 동작이다. 통찰 없음·M_total 5 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "a 와 r 읽기 → S_n = a(r^n−1)/(r−1) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $728$ ⑵ $\dfrac{85}{32}$ ⑶ $14+15\sqrt{2}$ ⑷ $-341$ ⑸ $\dfrac{1-0.1^{12}}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/246-569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공비·항수를 자유롭게 바꿀 수 있다. 제약: r=1 이면 공식이 성립하지 않으므로 제외하고, 무리수 공비(√2)는 항수를 홀짝으로 나누어 유리수부와 무리수부가 분리되도록, 음수 공비는 항수를 짝수로 잡아야 답이 깔끔하다."
    creative: "(1) 항수를 묻지 않고 합을 주고 항수를 되묻기(★2 · I-BW d1) (2) 공비를 미지수로 두고 합 조건에서 r 을 구하게 하기(★2) (3) ⑸ 처럼 소수 공비를 분수로 바꿔 0.999… 꼴 극한 감각과 연결(★2)."
```

```yaml
- id: GN-ALG-246-570
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 수열 $1,\ 2,\ 4,\ 8,\ \cdots$ 의 일반항, $256$ 이 제몇 항인지, 그리고 $1+2+4+\cdots+256$ 의 값.
  category: "일반항 → 끝항의 항 번호 → 합 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 공식 직접 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵⑶ 이 그대로 풀이 순서를 안내하는 계단형 문항이다. 끝항이 주어진 합을 구할 때 항수를 먼저 정한다는 절차를 소문항으로 쪼개 놓았을 뿐이다. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "a_n=2^{n-1} → 2^{n-1}=256 로 항수 9 → S_9=2^9−1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=2^{n-1}$ ⑵ 제$9$항 ⑶ $511$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/246-570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(2→3, 1/2)와 끝항(256→729, 1/512)을 바꿀 수 있다. 제약: 끝항이 첫째항×공비의 거듭제곱으로 정확히 표현돼 항 번호가 자연수로 떨어져야 한다."
    creative: "(1) 소문항 안내를 없애고 합만 묻기(끝항→항수 단계를 학생이 세워야 함 ★2) (2) 끝항 대신 「합이 처음으로 1000 을 넘는 항」으로 바꾸기(576 골조 ★2) (3) 일반항을 구한 뒤 짝수 번째 항만의 합을 묻기(★3 · I-PD d1)."
```

```yaml
- id: GN-ALG-246-571
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 끝항이 주어진 네 개의 등비급수 합. ⑷ 는 $\log_2 4+\log_2 4^3+\log_2 4^9+\cdots$ 처럼 로그를 계산하면 항이 등비가 되는 꼴.
  category: "끝항으로 항수 결정 → 합 공식 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 공식 직접 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 첫째항·공비를 읽고 끝항으로 항수를 정한 뒤 공식에 넣는 같은 절차다. ⑷ 의 로그는 $\log_2 4^{3^k}=2\cdot 3^k$ 라는 값 계산일 뿐 로그 단원의 핵심 정리가 풀이를 지탱하지 않아 I-XU 로 인정하지 않았다. 통찰 없음·M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "끝항 = a r^{n−1} 로 항수 n → S_n 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1023}{1024}$ ⑵ $\dfrac{122}{243}$ ⑶ $635$ ⑷ $242$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/246-571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝항과 공비(1/2, −1/3, 2, 3)를 바꿀 수 있다. 제약: 끝항이 거듭제곱으로 정확히 맞아 항수가 자연수여야 하고, 음수 공비는 부호가 번갈아 나오는 표기를 발문에 그대로 써 주어야 한다."
    creative: "(1) ⑷ 를 밑이 다른 로그(log_3 9^{2^k})로 바꿔 지수 수열 인식을 강화(★2 · I-RT d1) (2) 항수를 미지수 n 으로 두고 일반식을 묻기(595 골조 ★3) (3) 합의 값을 주고 끝항을 되묻기(★2 · I-BW d1)."
```

```yaml
- id: GN-ALG-246-572
  page: 246
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 첫째항부터 제$n$항까지의 합 $S_n$ 이 $2^n-1$, $3^n+2$ 로 주어졌을 때 일반항 $a_n$ 구하기.
  category: "a_n = S_n − S_{n−1} (n≥2) → n=1 따로 확인"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계로 일반항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 n≥2 식이 n=1 에서도 성립해 한 식으로 쓰이고, ⑵ 는 상수항 때문에 $a_1$ 이 따로 떨어진다. 두 소문항이 정확히 이 분기를 대비시키는 설계라 T-경계 함정이 실질적이다. 통찰은 없지만 Mₜ=2·M_total 7 → 익히기 출발점 ★1 에서 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "a_n=S_n−S_{n−1} (n≥2) → a_1=S_1 대조 → 한 식 여부 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a_n=2^{n-1}$ ⑵ $a_1=5$, $a_n=2\times 3^{n-1}$ $(n\ge 2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/246-572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 3→4, 5)과 상수항(−1, +2→+3, −5)을 바꿀 수 있다. 제약: 상수항이 −(첫째항 계수)일 때만 n=1 이 한 식에 흡수되므로, 두 소문항이 흡수·분리 한 쌍을 이루도록 상수항을 고른다."
    creative: "(1) 상수항을 미지수 k 로 두고 「첫째항부터 등비」 조건을 묻기(580 골조 ★3 · I-BW d2) (2) S_n 을 로그식으로 감싸기(579 골조 ★3) (3) a_1+a_4 처럼 특정 항의 합만 묻기(e29 골조 ★3)."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-247-e25
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 일반항이 $a_n=2^{2n+1}$ 인 등비수열의 첫째항부터 제$10$항까지의 합. ⑵ 공비가 양수이고 $a_2=\dfrac{1}{2}$, $a_6=\dfrac{1}{32}$ 인 등비수열의 제$5$항까지의 합.
  category: "일반항·두 항 조건에서 a, r 확정 → 합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 공식 적용(일반항·두 항 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $2^{2n+1}$ 을 $8\cdot 4^{n-1}$ 로 고쳐 첫째항 8·공비 4 를 읽는 한 단계, ⑵ 는 $a_6/a_2=r^4$ 에서 r 을 구하고 「공비가 양수」로 음근을 버리는 표준 절차다. 통찰 없음·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지수식을 a r^{n−1} 꼴로 정리 또는 a_6/a_2=r^4 → a, r → S_n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{8}{3}(4^{10}-1)$ ⑵ $\dfrac{31}{16}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/247-e25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수식 계수(2n+1→3n−1)와 ⑵ 의 두 항 번호·값을 바꿀 수 있다. 제약: 두 항 번호 차가 짝수이면 r 의 부호가 갈리므로 「공비가 양수」 같은 단서를 반드시 남기고, 홀수 차로 바꾸면 그 단서를 빼야 문제가 자연스럽다."
    creative: "(1) 「공비가 양수」를 빼고 두 경우를 모두 구하게 하기(★3 · I-MI d1) (2) 합을 주고 항수를 되묻기(★3 · I-BW d1) (3) 일반항을 로그 꼴로 감싸 지수 인식을 한 겹 더하기(★3 · I-RT d1)."
```

```yaml
- id: GN-ALG-247-573
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항이 $2$, 제$4$항이 $-54$ 인 등비수열의 첫째항부터 제$10$항까지의 합.
  category: "두 항 조건에서 공비 결정 → 합 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합 공식 적용(일반항·두 항 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2r^3=-54$ 에서 $r^3=-27$, 세제곱근이 실수 하나라 공비가 바로 −3 으로 정해진다. 음수 공비를 합 공식에 넣을 때 분모 부호를 틀리는 것이 유일한 함정이다. 통찰 없음·M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a r^3=−54 → r=−3 → S_10 = 2(1−(−3)^{10})/(1−(−3))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1-3^{10}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/247-573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(2)·항 번호(4)·항 값(−54)을 바꿀 수 있다. 제약: 항 번호 차가 홀수여야 세제곱근 등에서 공비가 유일하게 정해지고, 짝수 차로 바꾸면 부호 단서를 따로 줘야 한다."
    creative: "(1) 항 번호 차를 짝수로 만들어 두 공비를 모두 따지게 하기(★3 · I-MI d1) (2) 제10항까지의 합 대신 제5항부터 제10항까지의 합을 묻기(587 골조 ★2) (3) 합의 부호가 양수가 되는 항수를 묻기(★3)."
```

```yaml
- id: GN-ALG-247-574
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항과 제$3$항의 합이 $-10$, 첫째항부터 제$4$항까지의 합이 $20$ 인 등비수열의 첫째항.
  category: "S_4 를 (a_1+a_3)(1+r) 로 묶기 → 공비 → 첫째항"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S_4 = a+ar+ar^2+ar^3 을 (a+ar^2)(1+r) 로 묶어 이미 주어진 −10 을 통째로 대입하는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부분합 조건으로 첫째항·공비 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 그대로 연립하면 4차식이 되지만, S_4 를 홀수항 묶음×(1+r) 로 보면 $-10(1+r)=20$ 한 줄로 r=−3 이 나오고 첫째항은 $a(1+9)=-10$ 에서 즉시 결정된다. 묶기 착안 없이는 풀이가 무거워져 I-EQV d2 로 잡았고, 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "S_4=(a_1+a_3)(1+r) → −10(1+r)=20 → r=−3 → a(1+r^2)=−10 → a=−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/247-574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 값(−10, 20)을 바꿀 수 있다. 제약: 두 값의 비가 1+r 이므로 비가 1 이 아닌 값이어야 하고, 비에서 나온 r 로 a(1+r^2) 가 첫 조건과 맞아 첫째항이 정수로 떨어지도록 골라야 한다."
    creative: "(1) 짝수항 합과 전체 합을 주어 r 을 바로 얻게 하기(594 골조 ★3) (2) 제1·3항 합과 제5·7항 합을 주어 r^4 을 얻게 하기(★3 · I-PD d1) (3) 첫째항 대신 공비의 값만 묻기(묶기 한 단계로 끝나 ★2)."
```

```yaml
- id: GN-ALG-248-e26
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    첫째항부터 제$5$항까지의 합이 $1$, 제$10$항까지의 합이 $3$ 인 등비수열의 제$15$항까지의 합.
  category: "구간합 S_5, S_10−S_5, S_15−S_10 이 공비 r^5 인 등비"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "5항씩 끊은 구간합이 다시 공비 r^5 인 등비수열을 이룬다는 구조 발견 — r 을 직접 구하지 않고 1, 2, 4 로 잇는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간합이 이루는 등비 구조"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 와 r 을 각각 구하려 들면 $r^5$ 이 무리수라 막히고, S_5=1·(S_10−S_5)=2 에서 공비 $r^5=2$ 를 통째로 읽으면 다음 구간이 4 라 답이 7 로 끝난다. 이 단원의 대표 구조 발견이라 I-PD d2, 필수 예제 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "S_5, S_10−S_5, S_15−S_10 이 공비 r^5 등비 → 1, 2, 4 → S_15=7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/248-e26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이(5)와 두 부분합(1, 3)을 바꿀 수 있다. 제약: (S_2n−S_n)/S_n 이 구간 공비이므로 그 값이 1 이 아니어야 하고(공비 1 이면 등차), 음수가 되지 않도록 두 부분합의 차가 첫 구간합보다 커야 자연스럽다."
    creative: "(1) 구간을 건너뛰어 제21~30항 합을 주고 가운데 구간을 되묻기(575 골조 ★3 · 등비중항) (2) S_3n/S_n 비를 주고 S_2n/S_n 을 묻기(596 골조 ★4) (3) 세 구간합이 등차를 이루도록 하는 r 을 묻기(★4 · I-XU d2)."
```

```yaml
- id: GN-ALG-248-e27
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    등비수열 $1,\ \dfrac{1}{2},\ \dfrac{1}{4},\ \cdots$ 의 제$n$항까지의 합 $S_n$ 에 대하여 $S_n>1.999$ 를 만족시키는 자연수 $n$ 의 최솟값.
  category: "합을 n 의 식으로 → 지수부등식 → 최소 자연수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합에 대한 부등식(최소 항수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $S_n=2\{1-(1/2)^n\}$ 로 정리하면 조건이 $(1/2)^n<1/2000$, 즉 $2^n>2000$ 한 줄로 바뀌고 $2^{10}=1024$, $2^{11}=2048$ 비교로 끝난다. 부등식을 세우는 것 자체가 표준 절차라 통찰은 없다. M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "S_n=2{1−(1/2)^n} → (1/2)^n<1/2000 → 2^n>2000 → n=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/248-e27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(1/2→1/3, 2/3)와 기준값(1.999)을 바꿀 수 있다. 제약: 기준값은 합의 극한값(여기서는 2)보다 작아야 해가 존재하고, 2 의 거듭제곱표로 비교가 끝나도록 기준을 2^k 근처로 잡아야 한다."
    creative: "(1) 합과 극한값의 차를 절댓값으로 씌우기(590 골조 ★2) (2) 공비를 크게 잡아 「합이 처음으로 1000 을 넘는 항」으로 바꾸기(576 골조 ★2) (3) 상용로그를 써야 하는 공비(5/2)로 바꾸면 로그 결합으로 ★3(592 골조)."
```

```yaml
- id: GN-ALG-248-575
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항부터 제$10$항까지의 합이 $2$, 제$21$항부터 제$30$항까지의 합이 $8$ 인 등비수열의 제$11$항부터 제$20$항까지의 합.
  category: "10항씩 구간합이 등비 → 등비중항"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "10항 구간합 세 개가 공비 r^10 인 등비수열을 이루므로 가운데 값이 양 끝의 등비중항"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간합이 이루는 등비 구조"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가운데 구간이 빠진 배치라 e26 처럼 순서대로 잇지 못하고, 세 구간합이 등비를 이룬다는 구조에서 $X^2=2\times 8$ 로 역추적해야 한다. $r^{10}>0$ 이라 음수 해는 버린다. 구조 발견 I-PD d2 → 확인체크 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "세 구간합 2, X, 8 이 등비 → X^2=16, X>0 → X=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/248-575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이(10)와 양 끝 구간합(2, 8)을 바꿀 수 있다. 제약: 두 값의 곱이 완전제곱이어야 가운데 값이 정수로 떨어지고, 구간 공비가 양수이므로 두 값의 부호가 같아야 한다."
    creative: "(1) 가운데 구간을 주고 마지막 구간을 묻기(단순 곱 ★2) (2) 구간을 넷으로 늘려 네 번째 구간을 묻기(★3) (3) 구간합 대신 S_10, S_30 을 주고 S_20 을 묻기(합끼리의 차로 옮기는 단계 추가 ★4)."
```

```yaml
- id: GN-ALG-248-576
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    제$2$항이 $4$, 제$5$항이 $32$ 인 등비수열에서 첫째항부터의 합이 처음으로 $1000$ 보다 커지는 항의 번호.
  category: "두 항으로 a, r → 합 부등식 → 최소 자연수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합에 대한 부등식(최소 항수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_5/a_2=r^3=8$ 로 r=2, a=2 를 얻고 $S_n=2(2^n-1)>1000$ 에서 $2^n>501$ 을 2 의 거듭제곱표로 비교하면 끝난다. 두 표준 절차(두 항으로 a·r → 부등식)가 붙었을 뿐 통찰은 없다. M_total 8 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "r^3=8 → r=2, a=2 → 2(2^n−1)>1000 → 2^n>501 → 제9항"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$9$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/248-576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호·값과 기준값(1000)을 바꿀 수 있다. 제약: 번호 차가 3 이면 세제곱근이 유일해 공비가 하나로 정해지고, 기준값은 2 의 거듭제곱 사이에 오도록 잡아 경계가 애매하지 않게 한다."
    creative: "(1) 「처음으로 1000 보다 커지는 항의 값」까지 묻기(★3) (2) 공비를 분수로 바꿔 「합이 처음으로 어떤 값보다 작아지는」 꼴로 뒤집기(★3 · I-BW d1) (3) 상용로그가 필요한 공비(5/2)로 바꾸기(592 골조 ★3)."
```

```yaml
- id: GN-ALG-249-e28
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    탄소 배출량이 매년 일정 비율로 줄 때 $2017$~$2019$년 합이 $800$만 톤, $2020$~$2022$년 합이 $600$만 톤이면 $2023$년 배출량은 $2017$년의 몇 배인지.
  category: "3년 구간합의 비 → r^3 → 6년 뒤 배율"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 3년 구간합이 공통인수 a(1+r+r^2) 를 가지므로 비를 취하면 r^3 만 남는다는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합의 활용(실생활 비율)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 해의 배출량을 등비수열로 두면 두 구간합이 $a(1+r+r^2)$ 와 $ar^3(1+r+r^2)$ 라 비가 $r^3=3/4$ 로 통째로 나온다. 묻는 것은 $ar^6/a=(r^3)^2$ 이라 r 자체는 끝까지 구할 필요가 없다. 구간합 비 착안은 e26 에서 이미 노출된 기법이라 depth 1, 발전 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "두 3년 구간합의 비 = r^3 = 3/4 → 2023년/2017년 = r^6 = 9/16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{16}$배'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/249-e28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간합(800, 600)과 구간 길이(3년)를 바꿀 수 있다. 제약: 비가 세제곱수로 깔끔한 분수(3/4, 8/27)가 되도록 잡아야 답이 정리되고, 감소 상황이면 비가 1 보다 작아야 한다."
    creative: "(1) 묻는 해를 구간 안(2021년)으로 옮겨 r 을 실제로 구하게 하기(★4) (2) 배출량 총합이 어떤 값 이하가 되는 해를 묻기(부등식 결합 ★4) (3) 감소율 자체를 백분율로 묻기(로그 결합 ★4 · I-XU d2)."
```

```yaml
- id: GN-ALG-249-577
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    계단 모양으로 쌓인 $16$개의 칸 중 세 칸에 수가 적혀 있다. 가로로 오른쪽 칸은 왼쪽 칸의 $\dfrac{1}{2}$배, 세로로 아래 칸은 위 칸의 $2$배라는 규칙으로 나머지를 채울 때 네 번째 줄 $7$개 수의 합.
  category: "격자 규칙 → 한 칸 값 확정 → 가로 한 줄이 공비 1/2 등비"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "격자의 가로·세로 배율 규칙을 「네 번째 줄은 공비 1/2 인 등비수열 7항」이라는 수열 표현으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형·배열의 등비 모형화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적힌 세 수(둘째 줄의 4·2, 셋째 줄의 4)에서 세로 규칙으로 네 번째 줄의 한 칸을 8 로 확정하고, 그 칸을 기준으로 왼쪽은 2배·오른쪽은 1/2배로 퍼지므로 줄 전체가 128 부터 시작하는 공비 1/2 등비 7항이 된다. 배치를 수열로 옮기는 전환이 핵심이라 I-RT d2, 확인체크 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "적힌 수 → 세로 2배로 네 번째 줄 기준 칸 확정 → 가로 공비 1/2 등비 7항 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$254$'
  answer_source: "답지"
  figure: "crop:fig-249-577.png"
  latex: latex-bank/gn-alg/items/249-577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적힌 수(4, 2, 4)와 배율(1/2, 2)을 바꿀 수 있다. 제약: 그림의 계단 모양과 칸 수(1·3·5·7)는 고정이므로 적힌 수의 위치 라벨을 바꾸면 그림을 다시 만들어야 하고, 배율은 줄 합이 정수가 되도록 2의 거듭제곱으로 잡는다."
    creative: "(1) 네 번째 줄 대신 전체 16칸의 합을 묻기(줄별 합이 다시 등비 ★4 · I-PD d2) (2) 가장 큰 수와 가장 작은 수의 비를 묻기(★2) (3) 배율을 미지수 r 로 두고 줄 합이 주어졌을 때 r 을 되묻기(★4 · I-BW d2)."
```

```yaml
- id: GN-ALG-249-578
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 변의 길이가 $3$인 정사각형을 $9$등분해 가운데를 칠하고, 남은 $8$개를 각각 다시 $9$등분해 가운데를 칠하는 시행을 $8$회 반복했을 때 색칠한 부분의 넓이의 합.
  category: "각 시행의 색칠 넓이가 공비 8/9 인 등비 → 합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "반복 시행의 도형 구조를 「칸 수는 8배, 한 칸 넓이는 1/9배 → 공비 8/9」 인 등비수열로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형·배열의 등비 모형화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 시행의 색칠 넓이는 1, 다음 시행은 칸이 8개로 늘고 각 넓이가 1/9 이라 8/9 배가 된다는 두 배율의 곱을 잡는 것이 전부다. 공비를 잡은 뒤에는 8항 합 공식 한 줄. 도형→수열 전환 I-RT d2 → 확인체크 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "첫 시행 넓이 1, 공비 8/9 → S_8 = 9{1−(8/9)^8}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\left\{1-\left(\dfrac{8}{9}\right)^{8}\right\}$'
  answer_source: "답지"
  figure: "crop:fig-249-578.png"
  latex: latex-bank/gn-alg/items/249-578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이(3), 등분 수(9), 시행 횟수(8)를 바꿀 수 있다. 제약: 등분 수는 제곱수여야 정사각형 분할이 되고, 공비는 (등분 수−1)/등분 수 로 자동 결정되므로 임의로 지정할 수 없다."
    creative: "(1) 칠하지 않은 부분의 넓이를 묻기(여사건 ★3 · I-SC d1) (2) 색칠 넓이가 전체의 절반을 처음 넘는 시행 횟수를 묻기(부등식+로그 결합 ★4) (3) 가운데 대신 네 귀퉁이를 칠하도록 바꿔 공비를 5/9 로 만들기(★3 유지)."
```

```yaml
- id: GN-ALG-250-e29
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $S_n=4^{n+1}-2$ 일 때 $a_1+a_4$ 의 값. ⑵ $S_n=5^n-1$ 일 때 $a_k=100$ 을 만족시키는 $k$.
  category: "a_1=S_1, a_n=S_n−S_{n−1} → n=1 포함 여부 판정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계로 일반항 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 상수항 −2 때문에 $a_1$ 이 n≥2 식에 흡수되지 않아 $S_1$ 을 따로 써야 하고, ⑵ 는 상수항 −1 이 첫째항 계수와 맞아떨어져 한 식으로 통일된 뒤 지수방정식으로 넘어간다. 두 소문항이 흡수·분리 대비 설계다. 통찰은 없지만 T-경계·T-범위 두 함정(Mₜ=2)·M_total 9 → 필수 예제 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "a_n=S_n−S_{n−1} (n≥2) → a_1=S_1 대조 → 지수방정식으로 항 번호"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑴ $782$ ⑵ $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/250-e29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(4, 5)·지수 이동(n+1)·상수항(−2, −1)을 바꿀 수 있다. 제약: n=1 이 흡수되려면 상수항이 −(첫째항 계수)여야 하고, ⑵ 처럼 특정 값이 되는 항을 물으려면 그 값이 실제 항으로 나타나야 한다."
    creative: "(1) 상수항을 미지수로 두고 「등비가 되는 조건」을 묻기(580 골조 ★3) (2) S_n 을 로그식으로 감싸기(579 골조 ★3) (3) a_1+a_4 대신 홀수 번째 항의 합을 묻기(★4 · I-PD d1)."
```

```yaml
- id: GN-ALG-250-579
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\log_3 (S_n+3)=n+1$ 일 때 일반항이 $a_n=p\times q^n$ 꼴이라면 $p-q$ 의 값.
  category: "로그식 → S_n 정리 → a_n=S_n−S_{n−1} → n=1 확인"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 과 a_n 의 관계로 일반항 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그의 정의로 $S_n=3^{n+1}-3$ 을 꺼내면 그다음은 e29 와 같은 절차다. n≥2 에서 $a_n=2\times 3^n$ 이 나오고 $a_1=6$ 이 이 식에 들어맞는지 확인하는 단계가 답의 꼴($p\times q^n$)을 정당화한다. 로그는 정의 그대로 푸는 값 계산이라 I-XU 로 인정하지 않았다. Mₜ=2·M_total 9 → 확인체크 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "S_n=3^{n+1}−3 → a_n=S_n−S_{n−1}=2·3^n (n≥2) → a_1 일치 확인 → p=2, q=3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/250-579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 밑(3)·우변(n+1)·상수(+3)를 바꿀 수 있다. 제약: 상수는 S_n 의 상수항이 −(첫째항 계수)가 되도록 잡아야 $a_n=p\\times q^n$ 한 식으로 쓸 수 있고, 밑과 진수는 진수 조건 S_n+3>0 을 늘 만족해야 한다."
    creative: "(1) 상수를 바꿔 n=1 이 분리되게 만들고 그 사실을 묻기(★3 유지·함정 강화) (2) p, q 대신 a_5 의 값을 묻기(★2) (3) 로그를 지수부등식과 묶어 항이 처음으로 어떤 값을 넘는 번호를 묻기(★4)."
```

```yaml
- id: GN-ALG-250-580
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $S_n=2\times 3^n+k$ 일 때 수열 $\{a_n\}$ 이 첫째항부터 등비수열을 이루도록 하는 상수 $k$.
  category: "n≥2 일반항 도출 → a_1 이 그 식에 맞도록 k 역추적"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「첫째항부터 등비」라는 결과 조건을 「S_1 이 n≥2 일반항 식의 n=1 값과 같다」로 역추적해 k 를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "S_n 이 등비수열이 되는 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n≥2 에서 $a_n=4\times 3^{n-1}$ 이 먼저 나오고, 「첫째항부터」라는 말이 $a_1=S_1=6+k$ 가 그 식의 n=1 값 4 와 같아야 한다는 뜻임을 읽어야 k=−2 가 나온다. 조건의 의미를 뒤집어 읽는 역추적이 핵심이라 I-BW d2, 확인체크 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "a_n=S_n−S_{n−1}=4·3^{n−1} (n≥2) → a_1=6+k 가 4 와 일치 → k=−2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/250-580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2)와 밑(3)을 바꿀 수 있다. 제약: k 는 항상 −(계수)가 되므로 답의 구조는 유지되고, 밑이 1 이면 등비가 무너지므로 제외한다."
    creative: "(1) 「제2항부터 등비」로 조건을 약화해 k 가 임의임을 논하게 하기(★4 · I-MI d2) (2) k 를 주고 첫째항만 예외임을 보이게 하기(★2) (3) S_n 을 두 지수항의 합으로 바꿔 등비가 될 수 없음을 논증하게 하기(★4 · I-BW d2)."
```

### 특강

```yaml
- id: GN-ALG-253-e1
  page: 253
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    연이율 $6\,\%$ 1년 복리로 매년 초에 $2$만 원씩 $10$년 적립할 때 $10$년째 말의 원리합계. $1.06^{10}=1.8$ 로 계산하고 만 원 미만은 버린다.
  category: "각 적립금의 만기 원리합계를 역순 등비수열로 배열 → 합"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "매년 초 적립금이 각각 다른 기간 이자를 받는 상황을 「첫째항 2×1.06, 공비 1.06, 10항」 인 등비수열의 합으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원리합계(적립금의 등비합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫해 적립금은 10년치, 마지막 적립금은 1년치 이자를 받으므로 만기 금액들이 $2\times 1.06^{10}$ 부터 $2\times 1.06$ 까지 역순 등비를 이룬다는 배열이 전부다. 배열만 서면 합 공식 한 줄이고, 매년 초/말 구분과 버림 처리가 함정(Mₜ=2)이다. 특강은 교육과정 심화 구역이라 출발점 ★3, 통찰 d2 이지만 구역 상한이 ★3 이라 유지.
  tier: star_3
  mechanism_primary: "매년 초 적립 → 만기 금액 2·1.06^k (k=1~10) → 2·1.06(1.06^10−1)/0.06"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$28$만 원'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/253-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이율(6%)·적립액(2만 원)·기간(10년)과 주어진 거듭제곱 근삿값을 바꿀 수 있다. 제약: 근삿값(1.06^10=1.8)은 반드시 발문에 주어야 하고 이율과 짝이 맞아야 하며, 버림 단위를 바꾸면 답의 자릿수가 달라진다."
    creative: "(1) 매년 말 적립으로 바꿔 1.06 곱을 없애기(582 골조 ★3) (2) 원리합계를 주고 적립액을 되묻기(583 골조 ★3 · I-BW d2) (3) 중간에 적립을 멈춘 뒤 거치하는 2단 구조로 만들기(★4 · I-CON d2)."
```

```yaml
- id: GN-ALG-253-581
  page: 253
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연이율 $5\,\%$ 1년 복리로 매년 초에 $4$만 원씩 $12$년 적립할 때 $12$년째 말의 원리합계. $1.05^{12}=1.8$ 로 계산한다.
  category: "매년 초 적립 원리합계 공식 대입"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계(적립금의 등비합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e1 과 수만 다른 직접 반복이라 배열을 새로 세울 필요 없이 첫째항 $4\times 1.05$·공비 $1.05$·12항 합에 대입하면 끝난다. 착안이 앞 예제에서 이미 제공되므로 통찰로 카운트하지 않았다. 특강 구역 출발점 ★3 유지(계산 부담 Mₖ=3·초/말과 근삿값 처리 Mₜ=2).
  tier: star_3
  mechanism_primary: "4·1.05(1.05^12−1)/0.05 대입"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$67$만 $2$천 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/253-581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이율(5%)·적립액(4만 원)·기간(12년)과 근삿값을 바꿀 수 있다. 제약: 근삿값을 주는 거듭제곱의 지수는 적립 기간과 같아야 하고, 답이 천 원 단위로 떨어지도록 (근삿값−1)/이율 이 깔끔한 수가 되게 잡는다."
    creative: "(1) 매년 말 적립으로 바꾸기(582 골조 ★3) (2) 목표 금액을 주고 기간을 되묻기(로그 결합 ★4) (3) 두 사람의 적립 조건을 비교하게 하기(601 골조 ★4 · I-CON d2)."
```

```yaml
- id: GN-ALG-253-582
  page: 253
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연이율 $12\,\%$ 1년 복리로 매년 말에 $10$만 원씩 $10$년 적립할 때 $10$년째 말의 원리합계. $1.12^{10}=3.1$ 로 계산한다.
  category: "매년 말 적립 → 첫째항에 이율 곱이 붙지 않는 등비합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원리합계(적립금의 등비합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e1·581 과 달리 매년 말 적립이라 마지막 적립금은 이자가 전혀 붙지 않고, 만기 금액이 $10$ 부터 $10\times 1.12^{9}$ 까지라 합이 $10(1.12^{10}-1)/0.12$ 가 된다. 초/말 구분만 정확하면 대입 한 줄이므로 통찰은 없다. 특강 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "매년 말 적립 → 10(1.12^10−1)/0.12"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$175$만 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/253-582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이율(12%)·적립액(10만 원)·기간(10년)과 근삿값을 바꿀 수 있다. 제약: 근삿값에서 (근삿값−1)/이율 이 딱 떨어지도록 이율과 짝을 맞춰야 하고, 매년 말 조건에서는 첫째항에 이율 곱을 붙이지 않는다."
    creative: "(1) 매년 초로 바꿔 1.12 곱을 붙이게 하기(e1 골조 ★3) (2) 처음 몇 해만 적립하고 나머지는 거치하게 만들기(★4 · I-CON d2) (3) 같은 총액을 초·말 적립으로 비교해 차이를 묻기(★4 · I-SC d2)."
```

```yaml
- id: GN-ALG-253-583
  page: 253
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연이율 $4\,\%$ 로 매년 초에 일정 금액을 $10$년 적립해 $10$년째 말의 원리합계가 $260$만 원이 되게 하려면 매년 얼마씩 적립해야 하는지. $1.04^{10}=1.5$ 로 계산한다.
  category: "원리합계 식을 세우고 적립액을 미지수로 역산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "만기 원리합계라는 결과에서 매년 적립액을 미지수로 두고 등비합 식을 역으로 푸는 구성"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원리합계(적립금의 등비합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적립액을 x 로 두면 $x\times 1.04(1.04^{10}-1)/0.04=260$ 이라는 일차방정식이 되고, 괄호 안 계수를 먼저 정리해야 x 가 깔끔히 나온다. 앞의 세 문항과 방향이 반대인 역산 구성이라 I-BW d2. 특강 출발점 ★3 유지(구역 상한).
  tier: star_3
  mechanism_primary: "x·1.04(1.04^10−1)/0.04 = 260 → x = 20"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$만 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/253-583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이율(4%)·기간(10년)·목표액(260만 원)과 근삿값을 바꿀 수 있다. 제약: 목표액은 계수 1.04×0.5/0.04=13 의 배수처럼 적립액이 정수로 떨어지는 값이어야 하고, 근삿값의 지수는 기간과 같아야 한다."
    creative: "(1) 적립액을 주고 목표액 달성 기간을 되묻기(로그 결합 ★4) (2) 매년 말 적립으로 바꾸기(★3 유지) (3) 적립액을 매년 일정 비율로 늘리는 설정으로 바꾸기(공비가 두 겹 ★4 · I-CON d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-254-584
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 항이 양수인 등비수열에서 $a_5=8a_2$ 일 때 $\dfrac{a_3a_4}{a_2a_6}$ 의 값.
  category: "두 항 관계로 공비 → 지수 약분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 항 사이 관계(지수 약분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_5=8a_2$ 는 $r^3=8$ 이므로 양수 조건과 함께 r=2 로 정해지고, 묻는 식은 첨자 합이 7 과 8 이라 $a^2r^5/(a^2r^6)=1/r$ 로 약분된다. 일반항 대입만으로 끝나는 표준 절차라 통찰 없음. M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "r^3=8 → r=2 → a_3a_4/(a_2a_6)=1/r=1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 배수(8)와 묻는 식의 첨자 조합을 바꿀 수 있다. 제약: 항 번호 차가 세제곱이 되도록 골라야 양수 조건에서 공비가 유일하고, 분자·분모 첨자 합의 차가 작아야 답이 r 의 낮은 거듭제곱으로 정리된다."
    creative: "(1) 첨자 합을 같게 만들어 값이 1 임을 알아채게 하기(★2 · I-SYM d1) (2) 「모든 항이 양수」를 빼고 두 경우를 따지게 하기(★3 · I-MI d1) (3) 묻는 식을 로그로 감싸 지수의 합을 묻기(★3 · I-RT d1)."
```

```yaml
- id: GN-ALG-254-585
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $1$ 과 $100$ 사이에 세 수를 넣어 만든 등비수열 $1,\ a_1,\ a_2,\ a_3,\ 100$ 에서 $4\log a_2$ 의 값.
  category: "양 끝의 등비중항으로 가운데 항만 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 항의 한가운데인 a_2 는 양 끝 1 과 100 의 등비중항이므로 공비를 구하지 않고 바로 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비중항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공비를 구해 $a_2=r^2$ 로 가도 되지만, 대칭 위치를 보면 $a_2^2=1\times 100$ 한 줄로 끝난다. 로그가 정의되려면 진수가 양수라 $a_2=10$ 만 남는다. 대칭 착안은 노출이 많아 depth 1, M_total 5 이지만 통찰이 하나 있어 −1 하지 않고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a_2^2=1×100 → a_2=10 (진수 조건) → 4 log 10 = 4"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 값(1, 100)과 사이에 넣는 개수(3개)를 바꿀 수 있다. 제약: 가운데 항이 존재하려면 사이 개수가 홀수여야 하고, 양 끝의 곱이 완전제곱이어야 등비중항이 유리수로 떨어진다."
    creative: "(1) 사이 개수를 짝수로 바꿔 가운데가 없게 만들고 공비를 구하게 하기(★2) (2) 넣은 세 수의 곱을 묻기(대칭 곱 ★3 · I-SYM d2) (3) 끝 값을 미지수로 두고 로그 조건을 주기(586 골조 ★3)."
```

```yaml
- id: GN-ALG-254-586
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 실수 $5$, $a$, $b$ 가 이 순서대로 등비수열을 이루고 $\log_a 5b+\log_b 5=\dfrac{7}{3}$ 일 때 $a+b$ 의 값.
  category: "등비중항 a^2=5b 를 로그 진수에 대입 → 로그 방정식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "등비중항 a^2=5b 를 로그의 진수에 넣어 log_a 5b = log_a a^2 = 2 로 통째로 줄이는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비중항과 로그 조건의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그 두 개를 각각 풀려 하면 막히고, 등비중항이 바로 첫 로그의 진수라는 것을 보면 $2+\log_b 5=7/3$ 로 줄어 $b=125$, 이어 $a^2=5b$ 에서 $a=25$ 가 나온다(밑 조건으로 양수만). 진수 치환 착안이 핵심이라 I-EQV d2, STEP 1 출발점 ★2 에서 +1 하여 ★3. [분류 이슈] STEP 1 라벨과 1단 차이지만 로그 단원 결합이라 유형 배치는 카탈로그에서 재검토.
  tier: star_3
  mechanism_primary: "a^2=5b → log_a 5b=2 → log_b 5=1/3 → b=125, a=25 → 150"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$150$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(5)과 로그 값(7/3)을 바꿀 수 있다. 제약: 로그 값에서 2 를 뺀 값의 역수가 b 의 지수가 되므로 그 역수가 자연수여야 b 가 정수로 떨어지고, 밑이 1 이 아닌 양수라는 조건을 깨지 않아야 한다."
    creative: "(1) 등비 대신 등차 조건으로 바꿔 대입이 통하지 않게 하기(★4 · I-SC d2) (2) a+b 대신 ab 나 a/b 를 묻기(★3 유지) (3) 세 수를 문자로 일반화해 관계식을 증명하게 하기(★4 · I-XU d2)."
```

```yaml
- id: GN-ALG-254-587
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    제$10$항이 $6$, 제$15$항이 $192$ 인 등비수열의 제$9$항부터 제$16$항까지의 합.
  category: "두 항으로 공비 → 구간의 첫째항을 새 첫째항으로 보고 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분 구간의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_{15}/a_{10}=r^5=32$ 에서 r=2, 이어 $a_9=3$ 을 얻고 제9항부터 8개 항을 첫째항 3·공비 2 인 새 등비수열로 보면 합 공식 한 줄이다. 구간을 새 수열로 보는 것은 이 단원 표준 절차라 통찰로 세지 않았다. M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "r^5=32 → r=2 → a_9=3 → 3(2^8−1)/(2−1)=765"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$765$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호·값과 합을 묻는 구간을 바꿀 수 있다. 제약: 번호 차가 홀수여야 공비가 유일하고, 구간의 항 수는 합 공식에 들어가는 지수이므로 끝 번호−시작 번호+1 을 정확히 세도록 구간을 잡는다."
    creative: "(1) 구간을 S_16−S_8 로 바꿔 두 합의 차로 처리하게 하기(★3) (2) 구간 합을 주고 구간의 길이를 되묻기(★3 · I-BW d1) (3) 공비가 음수가 되도록 두 항 번호 차를 짝수로 바꾸기(★3 · I-MI d1)."
```

```yaml
- id: GN-ALG-254-588
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항이 $1$, 공비가 $2$ 인 등비수열 $\{a_n\}$ 에 대하여 수열 $\{a_na_{n+1}\}$ 의 첫째항부터 제$10$항까지의 합.
  category: "곱으로 만든 수열이 다시 등비임을 확인 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_n a_{n+1}=2^{2n-1} 이므로 새 수열이 첫째항 2·공비 4 인 등비수열이라는 구조 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱으로 만든 새 등비수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=2^{n-1}$ 을 곱하면 지수가 $2n-1$ 이라 새 수열의 공비가 원 공비의 제곱(4)이 된다는 점만 보면 합 공식으로 끝난다. 구조 확인이 한 줄이라 depth 1. M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a_n a_{n+1}=2^{2n−1} → 첫째항 2·공비 4 → 2(4^10−1)/3"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}(4^{10}-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 수열의 첫째항·공비(1, 2)와 항수(10)를 바꿀 수 있다. 제약: 새 수열의 공비는 원 공비의 제곱으로 자동 결정되므로 따로 지정할 수 없고, 공비가 1 이면 등비합 공식을 쓸 수 없다."
    creative: "(1) $a_n/a_{n+1}$ 이나 $a_n^2$ 으로 바꿔 공비가 어떻게 변하는지 묻기(★2 유지) (2) $a_na_{n+2}$ 로 간격을 벌리기(★3) (3) 새 수열의 합을 주고 원 수열의 공비를 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-ALG-254-589
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항부터 제$6$항까지의 합이 $4$, 제$12$항까지의 합이 $12$ 인 등비수열의 제$18$항까지의 합.
  category: "6항씩 구간합이 공비 r^6 인 등비 → 다음 구간 잇기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간합이 이루는 등비 구조"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e26 에서 이미 제시된 구간합 구조를 수만 바꿔 반복한 문항이다. 첫 구간 4, 둘째 구간 8 이라 구간 공비가 2 이고 셋째 구간이 16 이라 합이 28 로 끝난다. 예제 직후 반복이라 구조 발견을 통찰로 세지 않았다. M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "S_6=4, S_12−S_6=8 → 구간 공비 2 → S_18=12+16=28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이(6)와 두 부분합(4, 12)을 바꿀 수 있다. 제약: (S_2n−S_n)/S_n 이 구간 공비이므로 1 이 아니어야 하고, 부호가 같아야 등비가 성립한다."
    creative: "(1) 가운데 구간을 비워 등비중항으로 역추적하게 하기(575 골조 ★3) (2) S_3n/S_n 비로 바꾸기(596 골조 ★4) (3) 구간합 셋이 등차가 되도록 하는 조건을 묻기(★4 · I-XU d2)."
```

```yaml
- id: GN-ALG-254-590
  page: 254
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열 $\dfrac{1}{2},\ \dfrac{1}{4},\ \dfrac{1}{8},\ \cdots$ 의 제$n$항까지의 합 $S_n$ 에 대하여 $|S_n-1|<10^{-3}$ 을 만족시키는 자연수 $n$ 의 최솟값.
  category: "합을 정리해 절댓값 안을 (1/2)^n 으로 → 지수부등식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 합에 대한 부등식(최소 항수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $S_n=1-(1/2)^n$ 이므로 절댓값 안이 항상 양수인 $(1/2)^n$ 이고 조건은 $2^n>1000$ 으로 바뀐다. 절댓값을 벗기는 부호 판단이 유일한 주의점이고 나머지는 e27 과 같은 절차다. M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "S_n=1−(1/2)^n → (1/2)^n<10^{−3} → 2^n>1000 → n=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/254-590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(1/2)와 오차 기준(10^{−3})을 바꿀 수 있다. 제약: 절댓값 기준은 합의 극한값과 같아야 안이 한 항으로 정리되고, 기준을 2 의 거듭제곱 근처로 잡아야 거듭제곱표 비교로 끝난다."
    creative: "(1) 기준을 극한값이 아닌 다른 수로 바꿔 부호 분기를 만들기(★3 · I-MI d1) (2) 공비를 1/3 로 바꿔 상용로그가 필요하게 만들기(★3 · I-RT d1) (3) 부등식을 만족시키는 n 의 개수를 묻기(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-255-591
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    등차수열 $\{a_n\}$ 과 등비수열 $\{b_n\}$ 이 $a_1=b_1=3$, $b_3=-a_2$, $a_2+b_2=a_3+b_3$ 을 만족시킬 때 $a_3$ 의 값. 5지선다.
  category: "공차 d·공비 r 두 미지수 연립 → a_3"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "등차수열의 일반항(24단원)과 등비수열의 일반항을 한 연립식에 함께 넣어야 d, r 이 동시에 결정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차·등비 혼합 조건 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 d, r 로 쓰면 $3r^2=-(3+d)$ 와 $3r-3r^2=d$ 가 나오고 더하면 $r^2$ 이 사라져 r=−1, d=−6 으로 떨어진다. 등차·등비 도구를 함께 써야 풀리지만 연립 자체는 표준이라 depth 1. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "b_3=−a_2 와 a_2+b_2=a_3+b_3 연립 → r=−1, d=−6 → a_3=−9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 첫째항(3)과 두 조건의 첨자 조합을 바꿀 수 있다. 제약: 연립에서 r^2 항이 소거되도록 조건을 짝지어야 이차식을 풀지 않고 끝나고, 선택지가 정수가 되도록 첫째항을 잡는다."
    creative: "(1) r^2 이 남게 조건을 바꿔 두 공비를 모두 따지게 하기(★4 · I-MI d2) (2) a_3 대신 두 수열 합의 일반항을 묻기(★4) (3) 등비수열 쪽 조건을 합 S_3 으로 주기(★4 · I-CON d2)."
```

```yaml
- id: GN-ALG-255-592
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열 $1,\ \dfrac{5}{2},\ \dfrac{25}{4},\ \cdots$ 에서 처음으로 $1000$ 보다 커지는 항의 번호. $\log 2=0.3$ 으로 계산한다.
  category: "지수부등식에 상용로그 → 항 번호 부등식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거듭제곱 비교로는 끝나지 않는 공비 5/2 를 상용로그를 취해 일차부등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비수열의 합에 대한 부등식(최소 항수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $(5/2)^{n-1}>1000$ 에 상용로그를 취하면 $\log 5-\log 2=0.4$ 이므로 $0.4(n-1)>3$ 으로 정리되고 n≥9 가 나온다. 로그를 취하는 전환은 지수 단원에서 반복 노출된 표준이라 depth 1. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(5/2)^{n−1}>1000 → 로그 → 0.4(n−1)>3 → 제9항"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제$9$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비(5/2)와 기준값(1000)·주어진 로그 값을 바꿀 수 있다. 제약: 공비의 상용로그가 주어진 log 2 만으로 계산돼야 하고, 부등식의 경계가 정수와 겹치지 않도록 기준값을 잡아야 최솟값이 명확하다."
    creative: "(1) 항 대신 합이 처음으로 기준을 넘는 번호를 묻기(★4 · 합 공식 추가) (2) 「처음으로 작아지는」 꼴로 공비를 1 보다 작게 바꾸기(부등호 방향 함정 ★3) (3) 기준값을 항의 개수로 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-ALG-255-593
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    서로 다른 세 수 $x$, $y$, $z$ 가 이 순서대로 공비 $r$ 인 등비수열을 이루고 $x$, $2y$, $3z$ 가 이 순서대로 등차수열을 이룰 때 $r$ 의 값.
  category: "등차중항 4y=x+3z 에 등비 표현 대입 → 이차방정식 → 해 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3r^2−4r+1=0 의 두 근 1 과 1/3 중 「서로 다른 세 수」 조건에 어긋나는 r=1 을 사후 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차·등비 혼합 조건 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y=xr$, $z=xr^2$ 을 등차중항 $4y=x+3z$ 에 넣고 x≠0 으로 나누면 $3r^2-4r+1=0$ 이라 근이 두 개 나오고, r=1 이면 세 수가 같아져 발문 조건에 걸린다. 기각 단계가 없으면 틀린 답에 이르므로 I-VF 로 잡되 분기가 단순해 depth 1. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "4xr=x+3xr^2 → 3r^2−4r+1=0 → r=1 기각 → r=1/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등차를 이루는 세 식의 계수(1, 2, 3)를 바꿀 수 있다. 제약: 이차방정식이 유리근을 갖도록 계수를 고르고, 근 중 하나가 1 이 되어 「서로 다른」 조건으로 기각되는 구조를 유지해야 함정이 살아 있다."
    creative: "(1) 「서로 다른」을 빼고 두 값을 모두 답하게 하기(★3 · I-MI d1) (2) 등차 쪽을 x, 2y, 3z 대신 합 조건으로 주기(★4 · I-CON d2) (3) r 대신 x+y+z 를 묻기(★4)."
```

```yaml
- id: GN-ALG-255-594
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항이 $1$ 인 등비수열에서 홀수 번째 항 $a_1+a_3+\cdots+a_{2k-1}=91$, 짝수 번째 항 $a_2+a_4+\cdots+a_{2k}=273$ 일 때 자연수 $k$ 의 값.
  category: "짝수항 합 = r × 홀수항 합 → r → 홀수항만의 등비합"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "짝수 번째 항의 합이 홀수 번째 항의 합에 공비를 곱한 것과 같음을 보고 273/91=r 로 공비를 통째로 얻음"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "홀수 번째 항만 모으면 공비가 r^2=9 인 등비수열이 되어 k 항의 합 공식을 쓸 수 있음"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "홀수항·짝수항으로 나눈 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 합을 각각 전개하면 미지수 두 개의 연립이 되지만, 항끼리 짝지어 보면 둘째 합이 첫째 합의 r 배라 r=3 이 한 줄로 나온다. 그다음 홀수항만 모은 수열이 공비 9 라는 구조를 써서 $(9^k-1)/8=91$ 로 k=3. 통찰 2개(EQV d2 + PD d1) → STEP 2 출발점 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "짝수항 합 = r×홀수항 합 → r=3 → (9^k−1)/8=91 → k=3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(1)과 두 합(91, 273)을 바꿀 수 있다. 제약: 두 합의 비가 공비이므로 그 비가 1 이 아닌 정수·유리수가 되게 잡고, 홀수항 합이 $(r^{2k}-1)/(r^2-1)$ 꼴로 자연수 k 를 주는 값이어야 한다."
    creative: "(1) 홀수항 합과 전체 합을 주어 짝수항 합을 되묻기(★3) (2) 항을 3개씩 끊어 나눈 세 합으로 확장(★4 유지 · I-PD d2) (3) k 를 주고 첫째항을 되묻기(★3 · I-BW d1)."
```

```yaml
- id: GN-ALG-255-595
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수열 $9,\ 99,\ 999,\ \cdots$ 의 첫째항부터 제$n$항까지의 합을 $n$ 의 식으로.
  category: "각 항을 10^k−1 로 분해 → 등비합 + 상수합"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "등비가 아닌 9, 99, 999 를 10^k−1 로 쪼개 등비수열의 합과 상수 n 의 합으로 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "9, 99, 999 꼴 수열의 합(분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 수열 자체는 등비가 아니므로 $a_k=10^k-1$ 로 분해하는 것이 유일한 관문이고, 그 뒤는 $10(10^n-1)/9-n$ 정리다. 이 분해는 교과서·문제집에서 반복 노출되는 표준 기법이라 depth 1로 두고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "a_k=10^k−1 → (10+10^2+…+10^n)−n → (10^{n+1}−9n−10)/9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{10^{n+1}-9n-10}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "자릿수 패턴(9, 99, 999 → 3, 33, 333 또는 2, 22, 222)을 바꿀 수 있다. 제약: 분해가 (배수)×(10^k−1)/9 꼴로 유지돼야 하고, 항의 첫 숫자가 0 이 되지 않아야 한다."
    creative: "(1) 1, 11, 111 처럼 9 로 나누는 형태로 바꾸기(★3 유지) (2) 합을 주고 항수를 되묻기(★4 · I-BW d2) (3) 항을 제곱해 더하게 하여 분해가 두 겹이 되게 하기(★4 · I-RT d2)."
```

```yaml
- id: GN-ALG-255-596
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    공비가 $r>1$ 인 등비수열의 부분합 $S_n$ 에 대하여 $\dfrac{S_{3n}}{S_n}=7$ 일 때 $\dfrac{S_{2n}}{S_n}$ 의 값.
  category: "t=r^n 치환 → 1+t+t^2=7 → 조건으로 근 기각"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "n 항씩 끊은 구간합이 공비 t=r^n 인 등비를 이루므로 S_{3n}/S_n=1+t+t^2 로 정리됨"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "t^2+t−6=0 의 두 근 2 와 −3 중 r>1 이라 t>1 이어야 하므로 −3 을 기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "구간합이 이루는 등비 구조"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    n 이 문자인 채로 합 공식을 쓰면 식이 무거워지지만, 구간합 구조로 $S_{3n}/S_n=1+t+t^2$ 로 옮기면 이차방정식 하나로 끝난다. 두 근 중 r>1 조건으로 음근을 버리는 검증이 필수이고, 묻는 값은 $1+t=3$ 이다. 통찰 2개(PD + VF) → STEP 2 출발점 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "t=r^n → 1+t+t^2=7 → t=2 (t>1) → S_{2n}/S_n=1+t=3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비의 값(7)을 바꿀 수 있다. 제약: 1+t+t^2 이 그 값이 되는 t 가 유리수여야 하고, r>1 조건을 유지하려면 양근이 1 보다 커야 하므로 비는 3 보다 커야 한다."
    creative: "(1) r<1 조건으로 바꿔 기각되는 근을 반대로 만들기(★4 유지 · 함정 반전) (2) S_{4n}/S_n 으로 늘려 삼차식이 되게 하기(★5 후보 · I-VF d2) (3) S_{2n}/S_n 을 주고 S_{3n}/S_n 을 되묻기(★3)."
```

```yaml
- id: GN-ALG-255-597
  page: 255
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열에서 처음 $n$개 항의 합이 $36$, 다음 $n$개 항의 합이 $18$ 일 때 그다음 $n$개 항의 합.
  category: "n 항씩 구간합이 공비 r^n 인 등비"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "n 이 문자여도 n 항씩 끊은 구간합이 공비 r^n 인 등비를 이루므로 36, 18 다음은 9"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간합이 이루는 등비 구조"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    항수가 문자 n 이라 개별 항을 다룰 수 없고 구간합 구조만으로 끝내야 한다. 구간 공비가 18/36=1/2 이므로 다음 구간은 9 로 한 줄이다. 구조는 e26 에서 반복 노출됐지만 문자 항수 때문에 추상도가 올라가 Mₐ=3. 통찰 depth 1 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "세 구간합이 공비 r^n 등비 → 36, 18 → 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/255-597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간합(36, 18)을 바꿀 수 있다. 제약: 비가 구간 공비이므로 1 이 아니어야 하고 부호가 같아야 하며, 세 번째 값이 정수가 되도록 첫 값을 비의 제곱으로 나누어떨어지게 잡는다."
    creative: "(1) 두 번째와 세 번째 구간합을 주고 첫 구간합을 되묻기(★3 · I-BW d1) (2) 구간합의 총합(S_3n)을 묻기(★3) (3) 구간 길이를 서로 다르게(n, 2n) 만들어 공비가 달라지게 하기(★4 · I-EQV d2)."
```

```yaml
- id: GN-ALG-256-598
  page: 256
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    등비수열의 부분합 $S_n$ 이 모든 자연수 $n$ 에 대하여 $S_{n+3}-S_n=13\times 3^{n-1}$ 을 만족시킬 때 $a_4$ 의 값.
  category: "S_{n+3}−S_n = 연속 세 항의 합 → 지수 항등식 비교로 공비·첫째항"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변이 3^{n-1} 에 비례한다는 결과에서 좌변 a_1(1+r+r^2)r^n 의 공비가 3 이어야 함을 역추적하고 남은 계수로 첫째항을 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "S_{n+k}−S_n 항등식에서 공비 역추적"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $S_{n+3}-S_n$ 이 $a_{n+1}+a_{n+2}+a_{n+3}=a_1(1+r+r^2)r^n$ 임을 먼저 읽고, 이것이 모든 n 에서 $13\times 3^{n-1}$ 과 같으려면 지수부에서 r=3, 계수부에서 $a_1\times 13=13/3$ 이 나와야 한다는 항등식 비교가 핵심이다. 결과 조건에서 공비를 거꾸로 읽는 구성이라 I-BW d2, 평가원 기출·STEP 2 출발점 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "S_{n+3}−S_n=a_1(1+r+r^2)r^n → 항등식 비교로 r=3, a_1=1/3 → a_4=9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/256-598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 폭(3)과 우변의 계수·밑(13, 3)을 바꿀 수 있다. 제약: 계수는 반드시 $1+r+\\cdots+r^{k-1}$ 의 배수여야 첫째항이 깔끔하고, 우변의 밑이 그대로 공비가 되므로 둘을 따로 정할 수 없다."
    creative: "(1) 구간 폭을 2 로 줄여 계수가 1+r 이 되게 하기(★3) (2) a_4 대신 첫째항이나 S_5 를 묻기(★4 유지) (3) 우변을 두 지수항의 합으로 주어 등비가 될 수 없음을 논증하게 하기(★5 후보 · I-VF d2)."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-256-599
  page: 256
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\dfrac{1}{2}$ 과 $8$ 사이에 $n$개의 수를 넣어 만든 등비수열의 공비가 양수이고 모든 항의 곱이 $512$ 일 때 $a_4$ 의 값.
  category: "양 끝에서 같은 거리 두 항의 곱이 일정 → 항수 결정 → 공비 → a_4"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "등비수열에서 양 끝에서 같은 거리에 있는 두 항의 곱이 첫항×끝항으로 일정하므로 전체 곱이 (첫항×끝항)^{(항수)/2}"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱이 512 라는 결과에서 항수를 먼저 역산하고 그다음 공비를 구함"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "등비수열 모든 항의 곱(대칭)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공비를 먼저 구하려 하면 n 이 지수에 남아 막히고, 곱의 대칭 성질로 $(1/2\times 8)^{(n+2)/2}=2^{n+2}=512$ 를 세우면 항수 9 가 바로 나온다. 그다음 $\,(1/2)r^8=8$ 에서 공비를 얻어 $a_4=(1/2)r^4=2$. 통찰 2개(SYM d2 + BW d1)지만 ★5 요건(통찰 3개 이상)에는 못 미쳐 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "전체 곱=(첫항×끝항)^{항수/2}=512 → 항수 9 → r^8=16 → a_4=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/256-599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 값(1/2, 8)과 곱(512)을 바꿀 수 있다. 제약: 양 끝의 곱이 2 의 거듭제곱 같은 깔끔한 수여야 항수가 정수로 떨어지고, 총 항수가 홀수여야 가운데 항이 존재해 곱 공식이 간단해진다."
    creative: "(1) 항의 곱 대신 로그의 합을 주기(★4 유지 · I-RT d1) (2) 공비가 음수일 수 있게 조건을 빼서 부호 분기를 만들기(★4 · I-MI d2) (3) a_4 대신 n 의 값을 묻기(★3)."
```

```yaml
- id: GN-ALG-256-600
  page: 256
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    두 곡선 $y=16^x$, $y=2^x$ 사이를 가로·세로 직선으로 번갈아 옮겨 가며 점 $\pt{P}_n$, $\pt{Q}_n$ 을 만들 때 $\pt{Q}_n$ 의 $x$좌표 $x_n$ 에 대하여 $x_n<\dfrac{1}{k}$ 을 만족시키는 $n$ 의 최솟값이 $6$ 이 되도록 하는 자연수 $k$ 의 개수. 5지선다.
  category: "반복 작도 → x_n 이 공비 1/4 등비 → 최솟값 조건을 이중부등식으로"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로·세로 이동을 지수 비교로 옮기면 x좌표가 매번 1/4 배가 되어 x_n 이 등비수열임을 얻음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「최솟값이 6」 이라는 조건을 x_6<1/k 이면서 x_5≥1/k 라는 이중부등식으로 동치 변환"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이중부등식에서 등호가 붙는 쪽과 붙지 않는 쪽을 구분해 경계 정수 k 의 포함 여부를 점검"
  insight_count: 3
  depth_score: 5.00
  type_id: null
  type_hint: "지수함수 그래프 반복 과정의 등비수열"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $16^x=2^y$ 에서 $x=y/4$ 라는 관계가 매 단계 반복되므로 $x_n$ 은 첫항 16·공비 1/4 인 등비수열이다. 그다음 「최솟값이 6」을 이중부등식으로 옮기고 양쪽 등호 처리를 구분해야 k 의 범위가 정해진다. 통찰 3개·I-VF 포함이라 ★5 요건을 형식상 만족하지만 유형 자체는 기출에 반복 노출돼 참신도가 없어 ★4 로 둔다. [분류 이슈] ★5 후보이나 ★4 라벨 유지.
  tier: star_4
  mechanism_primary: "이동 1회마다 x좌표 1/4 배 → x_n=16(1/4)^{n−1} → x_6<1/k≤x_5 → k 범위 → 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-256-600.png"
  latex: latex-bank/gn-alg/items/256-600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 밑(16, 2)과 시작점의 x좌표(64), 최솟값(6)을 바꿀 수 있다. 제약: 공비는 두 밑의 지수 비로 자동 결정되므로 따로 못 정하고, 시작점은 몇 번 이동해도 좌표가 유리수로 남도록 밑의 거듭제곱으로 잡아야 한다. 그림의 점 라벨 P_n·Q_n 배치는 고정."
    creative: "(1) 이동 방향을 반대로 해서 x_n 이 커지게 만들기(부등호 방향 반전 ★4) (2) 최솟값 조건 대신 x_n 들의 합을 묻기(★4 · 등비합 결합) (3) 곡선 하나를 y=x 로 바꿔 공비가 1 이 되는 퇴화 사례를 논하게 하기(★5 후보 · I-VF d2)."
```

```yaml
- id: GN-ALG-256-601
  page: 256
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    유리는 매년 초 $20$만 원씩 연이율 $5\,\%$ 복리로 $10$년, 서준이는 매년 초 $40$만 원씩 같은 이율로 $5$년 적립할 때 유리가 $10$년째 말에 받는 금액은 서준이가 $5$년째 말에 받는 금액의 몇 배인지. $1.05^5=1.28$ 로 계산한다.
  category: "두 원리합계를 각각 등비합으로 → 1.05^10=(1.05^5)^2 로 통일 → 비"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 사람의 적립 조건을 각각 첫째항·공비 1.05 인 등비수열의 합으로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 값이 1.05^5 뿐이므로 1.05^10 을 (1.05^5)^2 으로 바꿔 두 식을 같은 근삿값으로 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원리합계(적립금의 등비합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각각의 원리합계는 특강 골조 그대로지만, 기간이 다른 두 식을 비교하려면 주어진 $1.05^5=1.28$ 하나로 $1.05^{10}$ 까지 처리해야 한다. 분모·분자에서 $1.05/0.05$ 가 약분되어 비가 $(1.28^2-1)/\{2(1.28-1)\}$ 로 줄어드는 정리가 계산의 고비다. 통찰 2개지만 둘 다 depth 1 이라 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "유리 20·1.05(1.05^10−1)/0.05, 서준 40·1.05(1.05^5−1)/0.05 → 1.05^10=1.28^2 로 비 계산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1.14$배'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/256-601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 사람의 적립액(20, 40)·기간(10, 5)·이율(5%)과 근삿값을 바꿀 수 있다. 제약: 긴 기간이 짧은 기간의 정수배여야 근삿값 하나로 둘 다 계산되고, 총 적립 원금이 같도록 적립액과 기간을 반비례로 잡아야 비교가 자연스럽다."
    creative: "(1) 한 사람은 매년 말 적립으로 바꿔 초/말 차이를 비교하게 하기(★4 유지 · I-SC d2) (2) 두 금액이 같아지는 이율이나 기간을 묻기(★5 후보 · I-BW d2) (3) 한 사람이 중간에 적립을 멈추고 거치하는 2단 구조로 만들기(★5 후보 · I-CON d2)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 3 · ★2 11 · ★3 19 · ★4 6 · ★5 0
- 통찰형 23 · 절차형 16 · premium 0
- 통찰 유형 분포(라벨 기준): I-PD 6 · I-RT 8 · I-EQV 6 · I-BW 5 · I-VF 3 · I-SYM 2 · I-XU 1 (한 문항에 둘 이상 붙은 경우 각각 셈)
- type_hint 상위: 「원리합계(적립금의 등비합)」 5 · 「구간합이 이루는 등비 구조」 5 · 「등비수열의 합에 대한 부등식(최소 항수)」 4 · 「등비수열의 합 공식 직접 대입」 3 · 「S_n 과 a_n 의 관계로 일반항 구하기」 3
- 그림: 3문(`crop:fig-249-577.png` · `crop:fig-249-578.png` · `crop:fig-256-600.png`)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★3 · 특강 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 대체로 일치한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-254-586 | STEP 1 구역이지만 등비중항을 로그 진수에 넣는 동치 변환(로그 단원 결합)이 필수라 ★3 으로 올림. type_hint 를 「등비중항」과 「로그 방정식」 어느 쪽에 둘지 카탈로그 설계 때 결정 | ★2 / ★3 |
| GN-ALG-256-600 | 통찰 3개·I-VF 포함이라 형식상 ★5 요건을 만족하지만 그래프 반복 작도 + 최솟값 이중부등식 조합이 기출에 반복 노출돼 참신도 0 → ★4 라벨 유지 | ★4 / ★5 |
| GN-ALG-255-593 | 「서로 다른 세 수」로 r=1 을 기각하는 단계를 I-VF 로 인정할지(단순 경계 처리로 볼 여지) 애매. depth 1 로만 기록 | ★3 |
| GN-ALG-253-581 · 582 | 특강 확인체크가 예제 e1 의 수만 바꾼 반복이라 통찰을 세지 않았으나, 특강 구역 출발점이 ★3 이라 절차형 ★3 이 되었다. 구역 신호와 판정이 한 단 어긋난 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- 따로 세워야 할 유형: **「구간합이 이루는 등비 구조」**(e26 · 575 · 589 · 596 · 597 — 5문). `S_n`, `S_{2n}−S_n`, `S_{3n}−S_{2n}` 이 공비 `r^n` 인 등비라는 하나의 도구가 ★2(단순 잇기)부터 ★4(치환 + 근 기각)까지 난이도 폭을 다 덮으므로, base ★ 를 2 로 두고 「가운데 구간 역추적」·「비가 주어진 치환형」을 하위 변형으로 두는 편이 낫다.
- 따로 세워야 할 유형: **「원리합계」**(e1 · 581 · 582 · 583 · 601 — 5문). 매년 초/말 구분이 답을 바꾸는 독립 축이라 「적립 시점」을 유형 속성으로 명시해야 한다. 역산형(583)과 두 사람 비교형(601)은 base ★ 가 한 단 높다.
- 통합해도 될 유형: 「등비수열의 합 공식 직접 대입」(569 · 570 · 571)과 「등비수열의 합 공식 적용(일반항·두 항 조건)」(e25 · 573)은 첫째항·공비를 어디서 읽느냐만 다르므로 한 유형의 하위 변형으로 묶어도 된다.
- 통합해도 될 유형: 「등비수열의 합에 대한 부등식(최소 항수)」(e27 · 576 · 590 · 592)은 거듭제곱표 비교(e27 · 576 · 590)와 상용로그 필요(592)로 갈리지만, 골조가 같아 한 유형 + 「로그 필요 여부」 속성으로 충분하다.
- 단원 경계 메모: 591 · 593 은 24단원 등차수열과 묶이는 혼합 조건형이라 등비수열 카탈로그가 아니라 「수열 혼합」 유형으로 세우는 편이 낫다.
