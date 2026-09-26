---
name: mechanism-데이터-GN-CM1-31-p2
description: 개념원리 공통수학1 31 조합(2/3 · 필수·발전 예제 261~266쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 31 조합
  unit_code: "31"
  part: "2/3"
  extract_range: "261~266쪽 · 261-e1~266-590"
  total_problems: 22
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 31 조합 (2/3) 정독 데이터 (v1.0)

이 파일은 31단원 조합 45문 중 **261~266쪽의 「필수·발전 예제」 구역 22문**(261-e1~266-590)을 다룬다. 이 구역은 개념원리 고등의 표준 배치대로 **필수 예제(상자 발문 · tag 「필수」)** 와 그 바로 뒤의 **확인체크 유제(tag 「확인체크」)** 가 한 쌍으로 이어진다. 그래서 「개념원리 익히기」 구역의 확인체크(★1 출발)와 달리, 여기의 확인체크는 앞선 필수 예제와 같은 골조를 한 단계 확장한 문항이므로 **필수 예제와 같이 ★2 를 출발점**으로 잡고 M_total·통찰로 ±1 조정했다. 내용 흐름은 `nCr` 의 계산(261) → 조합의 수와 조건부 선택(262~263) → 뽑아서 나열(264) → 도형의 개수(265~266) 다섯 덩어리다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 아직 없는 과목이므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다(예제의 `type` 필드가 있으면 그것을 기본 후보로 썼다).

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-261-e1
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ nC3=nC5 · 8Cr=8C(r-4) · 13C11+13C1=14Cr · (n-1)C2+nC2=(n+2)C2 를 만족시키는 n 또는 r 의 값.
  category: '조합의 성질 nCr=nC(n-r) · 파스칼 법칙 → n 또는 r 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "nCr=nCs 에서 r=s 갈래와 r+s=n 갈래를 모두 따진 뒤 0<=r<=n 으로 유효한 것만 남김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "13C11 을 13C2 로 고쳐 13C1+13C2 를 파스칼 법칙 꼴 14C2 로 묶음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: 'nCr 의 계산 — 조합의 성질·파스칼 법칙으로 n 또는 r 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 아래 첨자를 같게 두는 갈래와 합이 위 첨자가 되는 갈래를 모두 확인, ⑶ 은 13C11 을 13C2 로 고쳐 파스칼 법칙으로 묶고 답이 두 개, ⑷ 는 계승으로 전개해 이차방정식.
    통찰 2개지만 모두 depth 1 의 정형 조작이고 필수 예제 구역이라 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '조합의 성질·파스칼 법칙으로 등식 정리 → 아래 첨자 비교 또는 계승 전개 → n 또는 r 결정 → 범위로 기각'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $n=8$ ⑵ $r=6$ ⑶ $r=2$ 또는 $r=12$ ⑷ $n=7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/261-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 3·5, ⑵ 의 8·4, ⑶ 의 13·11 을 바꿀 수 있음. 제약 — 0<=r<=n 을 만족하는 해가 적어도 하나 남아야 하고, ⑶ 처럼 두 해가 나오는 꼴은 위 첨자가 짝수·홀수인지에 따라 답 개수가 달라지므로 확인. ⑷ 는 전개 후 이차방정식이 자연수 해를 갖도록 계수를 고름.'
    creative: '(1) 두 갈래 중 하나만 유효하도록 첨자를 잡아 기각 단계를 부각(★2 유지) (2) 파스칼 법칙을 두 번 연속 써야 하는 꼴로 확장(★3) (3) nPr 을 섞어 계승 전개를 강제하면 Mk 상승 ★3.'
```

```yaml
- id: GN-CM1-261-576
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ nC5=nC4 · 10Cr=10C(2r+1) · 10C2+10C7=11Cr · (n+2)C3=2nC2+(n+1)C(n-1) 을 만족시키는 n 또는 r 의 값.
  category: '조합의 성질·파스칼 법칙 → 첨자 비교 또는 계승 전개'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10Cr=10C(2r+1) 에서 r=2r+1 갈래와 r+(2r+1)=10 갈래를 모두 세운 뒤 음수 해를 기각"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "10C7 을 10C3 으로, (n+1)C(n-1) 을 (n+1)C2 로 고쳐 파스칼 법칙 꼴을 드러냄"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: 'nCr 의 계산 — 조합의 성질·파스칼 법칙으로 n 또는 r 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1 과 같은 골조의 유제. ⑵ 에서 음수 해 기각, ⑶ 에서 10C7 을 10C3 으로 바꿔야 파스칼 법칙이 보이는 점이 핵심.
    ⑷ 는 (n+1)C(n-1) 을 (n+1)C2 로 고친 뒤 계승 전개 — 예제보다 한 줄 길지만 도구는 같아 ★2.
  tier: star_2
  mechanism_primary: '큰 아래 첨자를 nC(n-r) 로 바꿈 → 첨자 비교 또는 파스칼 법칙 → 해 중 범위 위배분 기각'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $9$ ⑵ $3$ ⑶ $3$ 또는 $8$ ⑷ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/261-576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 2r+1 을 2r-1, 3r 등으로, 위 첨자 10 을 12·14 로 바꿀 수 있음. 제약 — 두 갈래 중 적어도 하나가 0<=r<=n 안의 정수여야 하고, 기각되는 갈래를 남기려면 상수항 부호를 조절.'
    creative: '(1) 기각되는 갈래가 없게 만들어 답을 두 개로 유지(★2) (2) 파스칼 법칙과 nCr=nC(n-r) 을 번갈아 두 번 쓰게 배치(★3) (3) 등식을 부등식으로 바꿔 n 의 범위를 묻기(★3 · I-BW 추가).'
```

```yaml
- id: GN-CM1-261-577
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등식 nP2+4nC2=9(n-1)C3 을 만족시키는 자연수 n 의 값.
  category: '순열·조합을 계승으로 전개 → 공통인수 약분 → 이차방정식 → 범위로 기각'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변을 계승으로 풀어 공통인수 (n-1) 을 약분해야 삼차식이 이차방정식으로 내려감"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'nPr 과 nCr 이 섞인 등식에서 자연수 n 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 와 C 가 한 등식에 섞여 있어 첨자 비교가 통하지 않고, 계승으로 전개한 뒤 공통인수 (n-1) 을 약분해야 이차방정식이 된다.
    약분한 인수가 0 이 되는 경우와 (n-1)C3 이 정의되는 n>=4 조건으로 한 해를 기각하는 마무리까지 포함.
    확인체크지만 전개·약분·범위 기각 3단계라 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'nP2·nC2·(n-1)C3 을 계승으로 전개 → 공통인수 (n-1) 약분 → 이차방정식 → n>=4 로 기각'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/261-577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 4·9 와 아래 첨자 2·2·3 을 바꿀 수 있음. 제약 — 약분 후 남는 이차방정식이 자연수 근을 갖고, 다른 근이 정의 범위(n>=4) 밖으로 떨어지도록 계수를 맞춰야 기각 단계가 살아 있음.'
    creative: '(1) 우변을 (n+1)C3 으로 바꿔 약분 인수를 달라지게(★3 유지) (2) 답이 두 개 나오되 하나만 범위 안이 되게 해 I-VF 성격을 강화(★3) (3) nPr=nCr·r! 관계만으로 정리되게 만들면 계산이 짧아져 ★2.'
```

```yaml
- id: GN-CM1-262-e2
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 1학년 7명과 2학년 5명 중 4명을 뽑을 때, 전체 뽑는 방법의 수 · 학년별 2명씩 뽑는 방법의 수 · 4명이 모두 같은 학년인 방법의 수.
  category: '조합의 수 — 전체 선택 · 학년별 곱의 법칙 · 학년별 합의 법칙'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조합의 수 — 두 집단에서 뽑기(곱의 법칙·합의 법칙)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 학년을 구분하지 않으므로 12명에서 4명, ⑵ 는 학년별로 따로 뽑아 곱, ⑶ 은 1학년만·2학년만 두 경우를 더한다.
    곱의 법칙과 합의 법칙을 어디에 쓰는지 구분하는 개념 확인 문항으로 통찰 없음. M_total 6 이라 감점 없이 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '전체는 12C4 → 학년 지정은 7C2·5C2 곱 → 같은 학년은 7C4+5C4 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $495$ ⑵ $210$ ⑶ $40$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/262-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 학년 인원(7·5)과 뽑는 수(4)를 바꿀 수 있음. 제약 — ⑶ 이 살아 있으려면 두 집단 모두 뽑는 수 이상이어야 하고(둘 중 하나가 미달이면 항이 하나로 줄어 난이도 하락), ⑵ 의 분배(2·2)는 각 집단 인원 이하.'
    creative: '(1) 세 집단(3개 학년)으로 늘려 합의 법칙 항을 셋으로(★2) (2) 특정 학생 포함·제외 조건을 얹기(★2~3) (3) 적어도 한 학년이 포함되는 수를 묻는 여사건 형태로 전환하면 I-SC 추가 ★3.'
```

```yaml
- id: GN-CM1-262-578
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 수학책 5권, 영어책 5권, 국어책 4권 중 3권을 택할 때 모두 같은 과목인 방법의 수.
  category: '같은 과목끼리만 뽑기 → 과목별 조합의 합'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '같은 종류에서만 뽑는 경우의 수(합의 법칙)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    과목별로 3권씩 뽑는 경우를 각각 구해 더하는 한 단계. e2⑶ 의 항을 하나 늘린 형태로 도구가 하나뿐이다.
    통찰 0 이고 M_total 4 이므로 ★2 출발점에서 -1 → ★1.
  tier: star_1
  mechanism_primary: '과목별 3권 선택 5C3+5C3+4C3 합의 법칙'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/262-578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '과목별 권수(5·5·4)와 택하는 권수(3)를 바꿀 수 있음. 제약 — 각 과목 권수가 택하는 수 이상이어야 항이 살아 있고, 같은 권수가 겹치면 계산이 단조로워지므로 서로 다르게 두는 편이 낫다.'
    creative: '(1) 과목 수를 넷으로 늘리기(★1 유지) (2) 모두 다른 과목에서 한 권씩 택하는 수를 함께 묻기(곱의 법칙 추가 ★2) (3) 적어도 두 과목이 섞이는 수를 여사건으로 묻기(★2 · I-SC 추가).'
```

```yaml
- id: GN-CM1-262-579
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    남학생 5명과 여학생 n명 중 남학생 2명, 여학생 3명을 뽑는 방법의 수가 560일 때 n 의 값.
  category: '곱의 법칙으로 식 세우기 → nC3 값에서 n 역산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조합의 수가 주어질 때 미지수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5C2·nC3=560 으로 식을 세우고 상수 10 을 나눠 nC3=56, 즉 n(n-1)(n-2)=336 에서 연속한 세 자연수의 곱으로 n 을 찾는다.
    결과에서 미지수를 되찾는 형태지만 표준 미정계수 대입 수준이라 통찰로 세지 않았다. M_total 7 로 감점 없이 ★2.
  tier: star_2
  mechanism_primary: '5C2·nC3=560 → nC3=56 → n(n-1)(n-2)=336 → 연속 세 수의 곱으로 n 결정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/262-579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '남학생 수·뽑는 인원·총 방법의 수를 바꿀 수 있음. 제약 — 총 방법의 수가 고정된 조합수로 깔끔히 나누어떨어져 nCr 값이 정수가 되어야 하고, 그 nCr 값을 주는 n 이 자연수로 유일해야 한다.'
    creative: '(1) 미지수를 뽑는 인원 쪽에 두기(nC3 대신 5Cr · ★2) (2) 남녀 인원 합만 주고 두 미지수를 연립으로 묻기(★3 · I-CON) (3) 방법의 수가 특정 값 이하인 최대 n 을 묻는 부등식형(★3 · I-BW).'
```

```yaml
- id: GN-CM1-262-580
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    각 회원이 나머지 회원과 모두 한 번씩 악수해 전부 105회가 되었을 때 참석한 회원의 수.
  category: '악수 상황 → 두 사람을 뽑는 조합 → nC2=105 방정식'
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "악수 한 번 = 두 사람의 순서 없는 쌍 하나 라는 번역으로 상황을 nC2 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '악수·경기 수 상황을 nC2 로 번역해 인원 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    악수는 두 사람의 순서 없는 쌍이므로 nC2 로 번역하는 것이 유일한 진입점. 이후 n(n-1)=210 에서 연속한 두 수의 곱으로 n 을 찾는다.
    번역 통찰 1개(RT d1)로 -1 감점은 면하고, 이후 계산이 한 줄이라 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '악수 1회 ↔ 두 사람 쌍 → nC2=105 → n(n-1)=210 → n 결정'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/262-580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '악수 횟수 105 를 다른 삼각수(45·66·78·120)로 바꿀 수 있음. 제약 — nC2 가 그 값이 되는 자연수 n 이 존재해야 하므로 삼각수만 사용 가능.'
    creative: '(1) 리그전 경기 수·선물 교환 수 같은 다른 상황으로 갈아입히기(★2 유지) (2) 왕복 인사처럼 순서가 있는 상황으로 바꾸면 nP2 가 되어 번역 통찰이 달라짐(★2) (3) 두 그룹 사이에서만 악수한다는 조건을 넣으면 곱의 법칙과 연립이 필요해 ★3.'
```

```yaml
- id: GN-CM1-263-e3
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 경찰관 5명과 소방관 6명 중 4명을 뽑을 때, 경찰관 중 특정한 2명을 포함하는 방법의 수 · 경찰관과 소방관을 각각 적어도 1명씩 포함하는 방법의 수.
  category: '포함 조건은 모집단 축소 · 적어도 조건은 여사건'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각각 적어도 1명 조건을 1대3·2대2·3대1 직접 분할로 세는 갈래 대신 전체에서 한쪽만 뽑는 경우를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '조건을 만족시키는 조합의 수 — 특정 대상 포함·적어도 1명(여사건)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 특정 2명을 미리 확정해 남은 9명에서 2명만 고르면 되고, ⑵ 는 전체 11C4 에서 경찰관만·소방관만 뽑는 두 경우를 빼는 여사건이 빠르다.
    직접 분할 갈래도 풀리지만 항이 셋으로 늘어나므로 갈래 선택 통찰 1개(SC d1). 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '포함은 남은 9명에서 2명 → 적어도 1명씩은 전체 11C4 에서 한쪽만 뽑는 경우를 뺌'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $36$ ⑵ $310$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/263-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직군 인원(5·6)과 뽑는 수(4), 포함할 특정 인원(2)을 바꿀 수 있음. 제약 — ⑵ 에서 여사건 항이 살아 있으려면 각 직군 인원이 뽑는 수 이상이어야 하고, 뽑는 수가 한쪽 인원을 넘으면 항이 하나로 줄어 난이도가 내려간다.'
    creative: '(1) 특정 인원을 제외하는 조건으로 뒤집기(★2 유지) (2) 각각 적어도 2명씩으로 올리면 여사건 항이 늘어 ★3 (3) 포함 조건과 적어도 조건을 한 문항에 겹치면 여사건 안에서 다시 보정이 필요해 ★3.'
```

```yaml
- id: GN-CM1-263-581
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ A, B, C 를 포함한 12명 중 5명을 선발할 때, 셋이 모두 선발되는 경우의 수 · A와 B는 선발되고 C는 선발되지 않는 경우의 수 · 셋 중 적어도 1명이 선발되는 경우의 수.
  category: '포함·제외로 모집단 축소 · 적어도 1명은 여사건'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적어도 1명 조건을 1명·2명·3명 포함 세 경우로 나누는 갈래 대신 전체에서 셋 다 빠지는 경우를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '특정 대상 포함·제외·적어도 조건의 조합의 수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 셋 확정 후 남은 9명에서 2명, ⑵ 는 A·B 확정에 C 제외까지 반영해 모집단을 9명으로 줄인 뒤 3명, ⑶ 은 전체에서 셋 다 빠지는 9명 중 5명을 뺀다.
    ⑵ 에서 제외 대상까지 모집단에서 빼야 한다는 점이 함정(T-범위). e3 의 골조를 그대로 쓰는 유제라 ★2.
  tier: star_2
  mechanism_primary: '포함은 확정 후 남은 자리, 제외는 모집단에서 제거 → 적어도 1명은 전체에서 셋 다 빠지는 경우를 뺌'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $36$ ⑵ $84$ ⑶ $666$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/263-581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체 인원(12)·선발 인원(5)·특정 인원(3)을 바꿀 수 있음. 제약 — ⑶ 의 여사건이 0 이 되지 않도록 특정 인원을 뺀 나머지가 선발 인원 이상이어야 하고, ⑴ 은 남은 자리 수가 0 보다 커야 의미가 있다.'
    creative: '(1) 적어도 2명 선발로 올려 여사건 항을 둘로(★3) (2) A와 B 가 함께 뽑히거나 함께 빠지는 조건으로 바꾸면 경우 분할이 필요해 ★3 (3) 선발 후 일렬로 세우는 단계를 덧붙이면 264 구역 골조와 결합해 ★3.'
```

```yaml
- id: GN-CM1-263-582
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1부터 10까지 적힌 10장의 카드에서 동시에 두 장을 뽑을 때 두 수의 곱이 짝수인 경우의 수.
  category: '곱이 짝수 ↔ 둘 다 홀수가 아님 → 여사건'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "짝수를 적어도 하나 포함하는 경우를 직접 세는 갈래 대신 전체에서 둘 다 홀수인 경우를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '곱·합의 홀짝 조건 → 여사건으로 세는 조합의 수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱이 짝수라는 조건을 짝수 카드 포함 여부로 직접 나누면 두 항이지만, 여집합인 둘 다 홀수 한 항만 빼면 한 줄로 끝난다.
    여사건 착안 통찰 1개로 M_total 4 의 -1 감점을 면해 ★2 유지.
  tier: star_2
  mechanism_primary: '전체 10C2 에서 둘 다 홀수인 5C2 를 뺌'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/263-582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '카드 범위(1~10)와 뽑는 장수(2)를 바꿀 수 있음. 제약 — 홀수·짝수 개수가 뽑는 장수 이상이어야 여사건 항이 0 이 되지 않고, 범위가 홀짝 개수를 다르게 만들면(1~9 등) 계산이 덜 대칭적이 된다.'
    creative: '(1) 곱이 홀수인 경우로 뒤집어 여사건이 필요 없게 하면 ★1 (2) 세 장을 뽑아 곱이 짝수인 경우로 확장(★2 유지) (3) 두 수의 합이 짝수인 경우를 묻는 형태로 바꾸면 홀홀·짝짝 두 항의 합이 되어 여사건 대신 분할 ★2.'
```

```yaml
- id: GN-CM1-264-e4
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 남자 8명과 여자 5명이 있을 때, 남자 3명과 여자 2명을 뽑아 일렬로 세우는 방법의 수 · 남자 2명과 여자 2명을 뽑아 여자 2명이 서로 이웃하도록 일렬로 세우는 방법의 수.
  category: '뽑기(조합)와 나열(순열)을 분리 · 이웃은 한 묶음으로'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '뽑아서 일렬로 나열하는 방법의 수(조합 × 순열 · 이웃 묶음)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    뽑는 단계와 세우는 단계를 분리해 곱하는 표준 골조. ⑵ 는 여자 2명을 한 묶음으로 보아 3개를 나열하고 묶음 내부를 다시 나열한다.
    두 도구 모두 앞 단원에서 배운 표준 절차라 통찰 없음. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '남녀 따로 뽑아 8C3·5C2 → 뽑힌 5명 나열 5! / 이웃은 묶어 3!·2!'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $67200$ ⑵ $3360$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/264-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '남녀 인원(8·5)과 뽑는 수(3·2, 2·2)를 바꿀 수 있음. 제약 — 뽑는 수가 각 집단 인원 이하여야 하고, 이웃 묶음의 크기가 2 를 넘으면 묶음 내부 순열이 커져 계산 부담만 늘어난다.'
    creative: '(1) 이웃하지 않도록 세우는 조건으로 바꾸면 자리 사이에 끼워 넣는 골조가 되어 ★3 (2) 남녀가 교대로 서는 조건(★3) (3) 특정 인물 포함 조건을 얹어 585 처럼 3중 제약으로(★3).'
```

```yaml
- id: GN-CM1-264-583
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1부터 9까지의 자연수 중 서로 다른 홀수 2개와 짝수 2개를 택해 만들 수 있는 네 자리 자연수의 개수.
  category: '홀수·짝수에서 따로 뽑기 → 뽑힌 네 수를 일렬로 나열'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조건을 만족시키는 자연수의 개수(조합 × 순열)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1~9 이므로 홀수 5개·짝수 4개에서 각각 2개를 뽑고(조합), 뽑힌 네 수를 네 자리에 배열한다(순열).
    0 이 없어 최고 자리 제한이 필요 없다는 점만 확인하면 e4 와 같은 뽑기·나열 분리 골조라 통찰 없음. ★2 유지.
  tier: star_2
  mechanism_primary: '홀수 5개에서 2개·짝수 4개에서 2개 선택 → 뽑힌 네 수를 4! 로 나열'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1440$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/264-583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '범위(1~9)와 뽑는 개수(2·2)를 바꿀 수 있음. 제약 — 범위에 0 이 들어가면 최고 자리에 0 이 올 수 없어 보정 항이 생기므로 난이도가 한 단계 올라간다. 홀수·짝수 개수가 뽑는 개수 이상이어야 한다.'
    creative: '(1) 범위를 0~9 로 바꿔 최고 자리 보정을 강제하면 ★3 (2) 짝수를 반드시 일의 자리에 두는 조건(짝수 판정)으로 바꾸면 자리 지정 순열이 추가되어 ★3 (3) 만든 수가 5의 배수인 개수로 바꾸면 자리 조건 + 여사건 ★3.'
```

```yaml
- id: GN-CM1-264-584
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수연이와 재헌이를 포함한 7명 중 4명을 뽑아 일렬로 세울 때, 수연이는 포함되고 재헌이는 포함되지 않도록 하는 방법의 수.
  category: '포함은 자리 확정 · 제외는 모집단 제거 → 나머지 선택 후 전체 나열'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '포함·제외 조건이 있는 뽑아서 나열하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수연이를 먼저 확정하고 재헌이를 모집단에서 뺀 5명에서 3명을 고른 뒤, 뽑힌 4명 전체를 나열한다.
    통찰 0 에 M_total 5 라 -1 후보지만, 포함·제외 두 제약을 모집단 축소로 번역하는 단계와 조합→순열 단계가 분리돼 있어 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '수연 확정 · 재헌 제외 → 남은 5명에서 3명 선택 → 뽑힌 4명 나열 4!'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$240$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/264-584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체 인원(7)과 뽑는 인원(4)을 바꿀 수 있음. 제약 — 포함·제외를 반영한 뒤 남는 모집단이 남은 자리 수 이상이어야 한다(전체에서 2 를 뺀 수가 뽑는 수-1 이상).'
    creative: '(1) 수연이를 특정 자리(맨 앞·맨 뒤)에 세우는 조건으로 바꾸면 자리 지정이 추가되어 ★3 (2) 둘 다 포함하되 이웃 조건을 얹으면 585 골조(★3) (3) 수연이가 재헌이보다 앞에 서는 조건이면 대칭성으로 절반 ★3(I-SYM).'
```

```yaml
- id: GN-CM1-264-585
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A, B 를 포함한 8명 중 A, B 를 포함하여 4명을 뽑아 일렬로 세울 때 A, B 가 서로 이웃하도록 세우는 방법의 수.
  category: '포함으로 모집단 축소 → 나머지 선택 → 이웃 묶음 순열'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '특정 대상을 포함해 뽑아 나열 + 이웃 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A·B 확정 → 남은 6명에서 2명 선택 → A·B 를 한 묶음으로 보아 세 덩어리를 나열하고 묶음 내부를 다시 나열, 세 단계가 연쇄한다.
    묶음 내부 순서를 빠뜨리는 함정과 모집단 축소 함정이 겹쳐 M_total 7. 도구는 모두 표준 절차라 통찰은 없지만 3중 제약이라 ★2 에서 +1 → ★3.
    [분류 이슈] 통찰 0 인 절차형인데 ★3 — 벤더 신호(확인체크)와 1단 차이이고 M_total 로만 올린 라벨이라 후보 ★2/★3 로 기록.
  tier: star_3
  mechanism_primary: 'A·B 확정 → 남은 6명에서 2명 선택 → A·B 묶음 포함 3덩어리 나열 3!·2!'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$180$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/264-585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체 인원(8)·뽑는 인원(4)·포함 인원(2)을 바꿀 수 있음. 제약 — 남은 모집단이 남은 자리 수 이상이어야 하고, 이웃 묶음 크기를 3 으로 올리면 묶음 내부가 3! 로 커져 계산만 무거워진다.'
    creative: '(1) 이웃하지 않도록 세우는 조건으로 뒤집으면 전체에서 이웃을 빼거나 사이에 끼우는 갈래가 생겨 I-SC 추가 ★3~4 (2) A 가 B 보다 앞이라는 조건(★3 · I-SYM) (3) 포함 대상을 셋으로 늘려 두 명만 이웃하게 하면 케이스 분기가 생겨 ★4.'
```

```yaml
- id: GN-CM1-265-e5
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 한 평면 위 서로 다른 7개의 점 중 어느 세 점도 한 직선 위에 있지 않을 때 만들 수 있는 직선의 개수 · 육각형의 대각선의 개수.
  category: '직선 ↔ 두 점 선택 · 대각선은 변을 제외'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 하나 = 두 점의 순서 없는 쌍 하나 라는 번역으로 도형 개수 세기를 조합으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '직선·대각선의 개수(두 점 선택)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 어느 세 점도 일직선이 아니라는 단서 덕분에 보정 없이 7C2 로 끝난다. ⑵ 는 두 꼭짓점을 잇는 선분 중 변 6개를 빼는 것이 핵심.
    도형↔조합 번역 통찰 1개(RT d1)로 M_total 4 의 -1 감점을 면해 필수 예제 출발점 ★2 유지. 이 블록은 586·587 의 보정 골조의 출발점이 된다.
  tier: star_2
  mechanism_primary: '직선 ↔ 두 점 선택 → 7C2 / 대각선 = 6C2 - 변 6'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $21$ ⑵ $9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/265-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 개수(7)와 다각형의 변의 수(6)를 바꿀 수 있음. 제약 — ⑴ 은 어느 세 점도 일직선이 아니라는 단서가 유지돼야 보정이 없고, ⑵ 는 다각형이 볼록해야 대각선 공식이 그대로 성립한다.'
    creative: '(1) 세 점이 한 직선 위에 있다는 단서를 추가하면 586 골조로 이동(★3) (2) 선분의 개수·반직선의 개수를 함께 묻기(순서 유무 대비 ★2) (3) 삼각형의 개수로 바꾸면 세 점 선택이 되어 e6 골조(★2).'
```

```yaml
- id: GN-CM1-265-586
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행한 두 직선 위에 각각 4개와 5개, 모두 9개의 점이 놓여 있을 때 이 점들을 이어서 만들 수 있는 서로 다른 직선의 개수.
  category: '전체 두 점 선택 → 같은 직선 위 쌍을 빼고 그 직선 자체를 다시 더함'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 직선 위의 점에서 나오는 여러 쌍이 모두 같은 직선 하나라는 것을 알아채고, 그 쌍들을 빼고 직선 1개씩만 다시 더하는 보정으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '일부 점이 한 직선 위에 있을 때 직선의 개수(중복 보정)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    9C2 로 세면 위 직선 위의 쌍들과 아래 직선 위의 쌍들이 각각 하나의 직선을 여러 번 센다. 그 쌍을 모두 빼고 두 직선을 1개씩 다시 더해야 한다.
    빼기만 하고 다시 더하지 않는 것이 전형적인 오답이라 보정 방향을 두 번 뒤집는 depth 2 통찰. 예제 e5 의 무보정 골조에서 한 단계 확장돼 ★2 에서 +1 → ★3.
    [분류 이슈] 벤더 신호로는 확인체크 유제인데 선행 필수 예제 e5(★2)보다 높다 — 예제·유제 역전으로 기록.
  tier: star_3
  mechanism_primary: '전체 9C2 → 한 직선 위 쌍 4C2·5C2 제외 → 그 직선 2개를 다시 더함'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: "crop:fig-265-586.png"
  latex: latex-bank/gn-cm1/items/265-586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선 위의 점 개수(4·5)를 바꿀 수 있음(합이 9 일 필요 없음). 제약 — 각 직선 위 점이 2개 이상이어야 보정 항이 생기고, 그림 라벨(평행한 두 직선)은 고정. 세 번째 평행선을 추가하면 보정 항이 하나 더 늘어난다.'
    creative: '(1) 직선 대신 선분·반직선의 개수를 묻기(순서 유무 대비 ★3) (2) 세 점을 이어 만드는 삼각형의 개수로 바꾸면 빼기만 남아 ★2 (3) 두 직선이 평행하지 않고 한 점에서 만난다는 설정이면 교점 중복까지 따져야 해 ★4.'
```

```yaml
- id: GN-CM1-265-587
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형의 세 변 위에 모두 10개의 점(꼭짓점 포함 · 변마다 5개·4개·4개)이 있을 때 두 점을 이어 만들 수 있는 서로 다른 직선의 개수.
  category: '전체 두 점 선택 → 세 변 위 쌍을 빼고 세 변 자체를 다시 더함'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 변 각각에서 나오는 점쌍이 변이라는 직선 하나로 환원됨을 알아채고, 꼭짓점이 두 변에 공유된다는 점까지 반영해 변별로 빼고 1씩 더함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '일부 점이 한 직선 위에 있을 때 직선의 개수(중복 보정)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    586 과 같은 보정 골조지만 보정 대상이 세 변으로 늘고, 꼭짓점이 두 변에 동시에 속하므로 변마다 점 개수를 다시 세야 한다.
    전체에서 세 변의 점쌍을 빼고 변 3개를 더하는 구조. 보정 대상이 늘어난 만큼 ★2 출발점에서 +1 → ★3.
    [분류 이슈] 586 과 같이 확인체크가 선행 필수 예제 e5(★2)보다 높다 — 예제·유제 역전으로 기록.
  tier: star_3
  mechanism_primary: '전체 10C2 → 세 변 위 쌍 5C2·4C2·4C2 제외 → 변 3개를 다시 더함'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$26$'
  answer_source: "답지"
  figure: "crop:fig-265-587.png"
  latex: latex-bank/gn-cm1/items/265-587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '변마다의 점 개수(5·4·4)를 바꿀 수 있음. 제약 — 꼭짓점은 두 변이 공유하므로 전체 점 수는 변별 점 수의 합에서 3 을 뺀 값이어야 하고, 각 변에 3개 이상 있어야 보정이 의미가 있다.'
    creative: '(1) 사각형의 네 변으로 늘리기(보정 항 4개 ★3 유지) (2) 삼각형 내부에 일직선이 아닌 점을 몇 개 추가해 보정 대상과 아닌 대상을 섞기(★4) (3) 만들 수 있는 삼각형의 개수로 바꾸면 빼기만 남아 589 골조(★2).'
```

```yaml
- id: GN-CM1-265-588
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    대각선의 개수가 65 인 다각형의 꼭짓점의 개수.
  category: '대각선 개수 공식 → 이차방정식 → 자연수 해만 채택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대각선의 개수로 다각형의 꼭짓점 수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e5⑵ 에서 얻은 대각선 개수 식 nC2-n 을 그대로 세워 이차방정식으로 정리하고, 음수 해를 버려 자연수 해만 남긴다.
    공식이 이미 예제에서 주어진 뒤의 역산이라 표준 미정계수 수준으로 보고 통찰로 세지 않았다. M_total 7 로 감점 없이 ★2.
  tier: star_2
  mechanism_primary: '대각선 개수 = nC2 - n = 65 → n(n-3)=130 → 이차방정식 → 자연수 해 채택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/265-588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대각선 개수 65 를 다른 값(9·14·20·35·44·54·77·90)으로 바꿀 수 있음. 제약 — n(n-3)/2 가 그 값이 되는 자연수 n 이 존재해야 하므로 아무 수나 쓸 수 없고, n>=3 조건으로 다른 근은 자동 기각된다.'
    creative: '(1) 대각선의 개수가 변의 개수의 k배인 다각형으로 바꾸면 미지수 관계식이 되어 ★3 (2) 대각선 개수가 주어진 범위 안인 다각형을 모두 구하기(★3 · I-MI) (3) 꼭짓점을 이어 만드는 삼각형 개수를 주고 n 을 묻기(★2~3).'
```

```yaml
- id: GN-CM1-266-e6
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    반원 위에 7개의 점(호 위 3개 · 지름 위 4개)이 있을 때 세 점을 꼭짓점으로 하는 삼각형의 개수.
  category: '삼각형 ↔ 일직선이 아닌 세 점 → 전체에서 지름 위 세 점 제외'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 하나 = 한 직선 위에 있지 않은 세 점의 조합 하나 라는 번역으로 도형 세기를 조합과 제외로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '점으로 만드는 삼각형의 개수(일직선 세 점 제외)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    7개 점에서 세 점을 고르는 전체 경우에서, 지름 위에 있는 4개 점 중 세 점을 고르는 경우만 삼각형이 되지 않으므로 뺀다.
    호 위의 점은 어느 세 점도 일직선이 아니라는 것을 그림에서 읽는 단계가 함정(T-범위). 번역 통찰 1개로 M_total 5 의 -1 감점을 면해 ★2.
  tier: star_2
  mechanism_primary: '전체 7C3 → 지름 위 4점에서 나오는 4C3 제외'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$31$'
  answer_source: "본문 풀이"
  figure: "crop:fig-266-e6.png"
  latex: latex-bank/gn-cm1/items/266-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '호 위 점 개수(3)와 지름 위 점 개수(4)를 바꿀 수 있음. 제약 — 지름 위 점이 3개 이상이어야 제외 항이 생기고, 그림 라벨(반원 · 지름 위 점)은 고정. 호 위 점은 몇 개든 서로 일직선이 되지 않는다.'
    creative: '(1) 사각형의 개수로 바꾸면 네 점 선택 + 세 점 일직선 보정이 겹쳐 ★3 (2) 지름을 한 변으로 갖는 삼각형의 개수로 한정하면 자리 지정이 생겨 ★3 (3) 일직선 위 점 묶음을 둘로 늘리면 589 골조(★2).'
```

```yaml
- id: GN-CM1-266-e7
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    5개의 평행선과 4개의 평행선이 서로 만날 때 이 평행선으로 만들 수 있는 평행사변형의 개수.
  category: '평행사변형 ↔ 두 방향에서 각각 두 직선 선택'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행사변형 하나 = 한 방향에서 두 직선, 다른 방향에서 두 직선을 고른 것 하나 라는 번역으로 도형 세기를 조합의 곱으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '평행선으로 만드는 평행사변형의 개수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행사변형은 마주 보는 두 쌍의 평행선으로 결정되므로 각 방향에서 두 직선씩 고르는 조합의 곱이다.
    번역만 되면 5C2·4C2 한 줄이라 계산 부담이 없고, 번역 통찰 1개로 M_total 4 의 -1 감점을 면해 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '평행사변형 ↔ 가로 방향 2개 · 세로 방향 2개 직선 선택 → 5C2·4C2'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$60$'
  answer_source: "본문 풀이"
  figure: "crop:fig-266-e7.png"
  latex: latex-bank/gn-cm1/items/266-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 방향의 평행선 개수(5·4)를 바꿀 수 있음. 제약 — 각 방향에 2개 이상 있어야 하고, 두 방향이 서로 평행하지 않아야 한다(그림 라벨 고정).'
    creative: '(1) 두 방향이 직교하는 격자로 바꾸면 직사각형의 개수가 되고, 정사각형을 따로 묻는 순간 590 골조로 올라가 ★3 (2) 특정 한 직선을 반드시 포함하는 평행사변형의 개수(★3) (3) 세 방향 평행선을 주고 평행사변형을 세게 하면 방향 쌍 선택이 추가되어 ★4.'
```

```yaml
- id: GN-CM1-266-589
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정삼각형의 세 변 위에 모두 9개의 점(꼭짓점 포함 · 변마다 4개)이 있을 때 세 점을 꼭짓점으로 하는 삼각형의 개수.
  category: '전체 세 점 선택 → 세 변 위의 일직선 세 점을 변별로 제외'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 하나 = 일직선이 아닌 세 점의 조합 하나 라는 번역 뒤, 꼭짓점이 두 변에 공유된다는 점을 반영해 변마다 점을 다시 셈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '점으로 만드는 삼각형의 개수(일직선 세 점 제외)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 와 같은 골조로 전체 9C3 에서 일직선 세 점만 빼는데, 제외 대상이 세 변으로 늘고 각 변이 꼭짓점을 공유해 변마다 4개씩이라는 점을 먼저 확인해야 한다.
    직선의 개수와 달리 다시 더하는 보정이 없어 587 보다 한 단계 가볍다. 예제 골조를 확장한 유제 수준이라 ★2 유지.
  tier: star_2
  mechanism_primary: '전체 9C3 → 각 변의 4점에서 나오는 4C3 을 세 변만큼 제외'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$72$'
  answer_source: "답지"
  figure: "crop:fig-266-589.png"
  latex: latex-bank/gn-cm1/items/266-589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '변마다의 점 개수(4)를 바꾸거나 변별로 다르게 둘 수 있음. 제약 — 꼭짓점을 세 변이 나눠 가지므로 전체 점 수는 변별 점 수의 합에서 3 을 뺀 값이고, 각 변에 3개 이상 있어야 제외 항이 생긴다.'
    creative: '(1) 만들 수 있는 직선의 개수로 바꾸면 다시 더하는 보정이 생겨 587 골조(★3) (2) 정삼각형 내부에 점을 추가해 제외 대상과 아닌 대상을 섞기(★3) (3) 사각형의 개수로 바꾸면 네 점 중 세 점 일직선 보정이 필요해 ★4.'
```

```yaml
- id: GN-CM1-266-590
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 정사각형의 각 변을 4등분해 얻은 격자 도형에서, 선을 변으로 하는 정사각형의 개수 · 정사각형이 아닌 직사각형의 개수.
  category: '정사각형은 크기별로 직접 세기 · 직사각형 전체는 가로·세로 두 직선씩 선택 후 정사각형 제외'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 은 크기별로 위치를 직접 세는 갈래가 빠르고 ⑵ 는 직선 선택으로 전체를 센 뒤 빼는 갈래가 빠르다는 것을 구분해 소문항마다 다른 전략을 고름"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형 하나 = 가로선 2개와 세로선 2개를 고른 것 하나 라는 번역으로 도형 세기를 조합의 곱으로 옮김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '격자에서 정사각형·직사각형의 개수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 한 변의 길이가 1·2·3·4 인 정사각형의 위치 수를 각각 세어 더하고, ⑵ 는 가로선 5개·세로선 5개에서 두 개씩 골라 직사각형 전체를 센 뒤 ⑴ 을 뺀다.
    두 소문항이 서로 다른 전략을 요구하고(직접 세기 vs 직선 선택 후 제외), ⑵ 가 ⑴ 의 결과를 재사용한다는 연결까지 봐야 한다. ★2 출발점에서 +1 → ★3.
    [분류 이슈] 한 문항 안에서 두 골조가 섞여 type_hint 를 하나로 묶기 애매 — 카탈로그 설계 때 정사각형 세기와 직사각형 세기를 분리할지 결정 필요.
  tier: star_3
  mechanism_primary: '정사각형은 변의 길이별 위치 수 16+9+4+1 → 직사각형 전체는 5C2·5C2 → 정사각형을 빼서 정사각형이 아닌 직사각형'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $30$ ⑵ $70$'
  answer_source: "답지"
  figure: "crop:fig-266-590.png"
  latex: latex-bank/gn-cm1/items/266-590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '등분 수(4)를 바꿀 수 있음(n등분이면 가로·세로 각각 n+1개의 직선). 제약 — 정사각형 격자라야 ⑴ 의 크기별 세기가 제곱수의 합이 되고, 직사각형 격자로 바꾸면 정사각형 개수 공식이 달라진다. 그림 라벨(정사각형의 각 변 4등분)은 고정.'
    creative: '(1) 가로·세로 등분 수를 다르게 한 직사각형 격자로 바꾸면 정사각형 세기가 min 기준으로 달라져 ★4 (2) 특정 한 칸을 포함하는 직사각형의 개수(★3 · 직선 선택 범위 제한) (3) 대각선 방향으로 기울어진 정사각형까지 세게 하면 ★5 후보(I-SYM 추가).'
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 1 · ★2 16 · ★3 5 · ★4 0 · ★5 0 (모두 `effective_star = star` · `base_star` 는 카탈로그 없음으로 null)
- 통찰형 14 · 절차형 8 · premium 0 · novelty_score 전원 0
- 통찰 유형 분포: I-RT 5 · I-SC 4 · I-EQV 5 · I-MI 2 (총 16개 라벨 · depth 2 는 265-586 · 265-587 · 266-590 의 3개)
- M_total 분포: 4 → 4문 · 5 → 2문 · 6 → 4문 · 7 → 12문
- type_hint 계열(중복 묶음): 「nCr 의 계산(성질·파스칼)」 2 · 「일부 점이 한 직선 위일 때 직선의 개수(중복 보정)」 2 · 「점으로 만드는 삼각형의 개수(일직선 제외)」 2 · 「조건부 조합의 수(포함·제외·적어도)」 2 · 「뽑아서 나열하기(조합 × 순열)」 4 계열(264-e4 · 264-583 · 264-584 · 264-585)
- 그림: 6문(`crop:fig-265-586.png` · `crop:fig-265-587.png` · `crop:fig-266-e6.png` · `crop:fig-266-e7.png` · `crop:fig-266-589.png` · `crop:fig-266-590.png`)
- 대상층: 하위권 1 · 중하위권 16 · 중위권 5
- answer_source: 본문 풀이 7(필수 예제) · 답지 15(확인체크)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-264-585 | 통찰 0 인 절차형인데 3중 제약(포함 → 선택 → 이웃 묶음)으로 M_total 7 이라 ★3 으로 올림. 통찰 없이 노동량만으로 올린 라벨이라 기록 | ★2 / ★3 |
| GN-CM1-265-586 | 확인체크 유제인데 선행 필수 예제 265-e5(★2)보다 높다. e5 는 보정이 없는 골조, 586 은 빼고 다시 더하는 보정이 핵심이라 실제 난이도 역전 | ★3 |
| GN-CM1-265-587 | 586 과 같은 이유로 예제·유제 역전. 보정 대상이 세 변으로 늘고 꼭짓점 공유까지 따져야 함 | ★3 |
| GN-CM1-266-590 | 한 문항 안에 두 골조(크기별 직접 세기 · 직선 선택 후 제외)가 섞여 type_hint 를 하나로 묶기 애매 | ★3 |

### 카탈로그 차원 메모

나중에 공통수학1 유형 카탈로그를 만들 때 참고할 사항이다.

- **반복된 type_hint(통합 후보)**: 263-e3 「조건을 만족시키는 조합의 수 — 특정 대상 포함·적어도 1명(여사건)」와 263-581 「특정 대상 포함·제외·적어도 조건의 조합의 수」는 사실상 같은 유형이다. **「조건부 조합의 수 — 포함·제외·적어도」 하나로 통합**하고, 포함/제외/적어도를 하위 변형으로 두는 편이 낫다.
- **통합 후보 2**: 264-e4 · 583 · 584 · 585 는 모두 「뽑아서 나열하기(조합 × 순열)」 한 유형이다. 제약이 자리 지정·이웃·포함·제외로 갈릴 뿐이므로 **base ★ 2 의 단일 유형 + 제약 태그**로 두고, 제약이 3중으로 겹치는 585 만 별도 슬롯으로 승격하는 설계를 권한다.
- **따로 세워야 할 유형 1 — 도형 개수 세기의 두 갈래**: 「직선·대각선의 개수」(265-e5 · 586 · 587 · 588)와 「삼각형·사각형의 개수」(266-e6 · e7 · 589 · 590)는 겉보기에 같은 도형 세기지만 보정 방식이 다르다. **직선 계열은 빼고 다시 더하는 보정(base ★ 3), 삼각형 계열은 빼기만 하는 보정(base ★ 2)** 으로 base ★ 를 달리 잡아야 라벨 드리프트가 줄어든다.
- **따로 세워야 할 유형 2 — 역산형**: 262-579 · 262-580 · 265-588 은 모두 「경우의 수 값이 주어질 때 미지수를 되찾는」 형태다. 표면 소재(선발·악수·대각선)는 달라도 골조가 같으므로 **「조합의 수 역산」 단일 유형(base ★ 2)** 으로 묶고, 소재를 변형 축으로 쓰는 것이 효율적이다.
- **base ★ 3 슬롯 후보**: 이 범위에서 ★3 으로 판정한 5문(261-577 · 264-585 · 265-586 · 265-587 · 266-590) 중 **265-586 · 265-587 · 266-590** 은 통찰 depth 2 를 동반하므로 카탈로그의 ★3 기준 슬롯으로 쓸 만하다. 261-577 · 264-585 는 노동량으로만 올라간 라벨이라 ★2 로 재조정될 여지가 있다.
- **★4 이상 부재**: 이 구역에는 I-SC/VF/SYM/XU 를 depth 3 으로 요구하는 문항이 없어 ★4·★5 슬롯이 0 이다. 31단원의 ★4 이상은 나머지 두 파트(연습문제 STEP 2 · 실력 UP)에서 찾아야 한다.
