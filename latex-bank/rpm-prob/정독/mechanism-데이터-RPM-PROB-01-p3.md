---
name: mechanism-데이터-RPM-PROB-01-p3
description: RPM 확률과 통계 01 순열과 조합(3/4 · 유형 08~유형 UP 16) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 01 순열과 조합
  unit_code: PROB-01
  part: "3/4"
  extract_range: "13~17쪽 · 0064~0097"
  total_problems: 34
  unit_total: 135
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 조정 규칙은 +1(통찰 1개 이상 AND M_total 7 이상, 단 출발점이 ★3 이상이면 통찰 2개 이상 AND M_total 8 이상) · -1(통찰 0 AND M_total 5 이하이면서 한 줄 공식 대입). v3.8 에 따라 계산 마찰만으로는 ★ 를 올리지 않음. insight_type 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상이면 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 01 순열과 조합 (3/4) 정독 데이터 (v1.0)

이 파일은 01 순열과 조합 단원(총 135문)의 세 번째 범위, 13~17쪽 「유형별 문제 정복」 후반 34문(0064~0097)을 다룬다. 구역은 유형 08 중복조합(4) · 유형 09 방정식의 해의 개수(4) · 유형 10 함수의 개수(3) · 유형 11 $(a+b)^n$의 전개식(4) · 유형 12 $(a+b)(c+d)^n$의 전개식(4) · 유형 13 $(a+b)^m(c+d)^n$의 전개식(3) · 유형 14 파스칼의 삼각형(4) · 유형 15 이항계수의 성질(4) · 유형 UP 16 최단 거리로 가는 경우의 수 (2)(4)이다. 내용상으로는 앞의 중복조합 갈래(0064~0074)와 뒤의 이항정리 갈래(0075~0093), 그리고 격자 경로 심화(0094~0097) 셋으로 나뉜다.

RPM 은 구역이 곧 난이도 층이므로 유형 구역은 난이도 표시(level)에 따라 ★1~4, 유형 UP 은 ★3 을 출발점으로 삼았고, 여기서 M_total 과 통찰로만 ±1 조정했다. 각 유형의 첫 문항(태그 「대표문제」)은 level 표시가 없어 ★2 를 출발점으로 두었다. 이 범위는 대부분 「상황 → 중복조합 $_n\mathrm{H}_r$」 또는 「일반항 → 지수 조건 → 계수」라는 두 골조의 반복이라 절차형이 많고, 변별은 조건을 동치로 바꾸는 한 걸음(여유변수 도입 · 빠진 항 보정 · 대칭 활용)에서 생긴다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 통찰 라벨(`insights[]`), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점(`variation_notes.creative`)을 채웠다. 발문은 요약만 적고 원문은 `latex-bank/rpm-prob/items/<id>.tex` 에 있다.

## 문항 데이터

### 유형 08 중복조합

```yaml
- id: RPM-PROB-0064
  page: 13
  vendor_label: "유형 08 중복조합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    4명에게 같은 볼펜 10자루를 모두 나누어 줄 때 모든 학생이 적어도 한 자루씩 받는 경우의 수.
  category: "적어도 1개 조건 → 미리 배분 → 나머지를 중복조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적어도 한 개씩 나누어 주는 중복조합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각자 1자루를 먼저 주고 남은 6자루를 4명에게 자유 분배하는 치환 한 걸음이 골조. 치환 뒤에는 중복조합 공식 한 줄이다.
    유형 구역 대표문제 출발점 ★2, 통찰 없음·M_total 5 이나 조건 치환이라는 변환 단계가 있어 -1 은 적용하지 않았다.
  tier: star_2
  mechanism_primary: "각자 1자루 선배분 → 남은 6자루를 4명에 중복조합 → 답"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$84$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수와 자루 수(3명·9자루, 5명·12자루 등)를 바꿀 수 있다. 제약: 자루 수가 사람 수 이상이어야 하고(아니면 답 0), 선배분 뒤 남는 수가 음수가 되지 않아야 한다."
    creative: "(1) '적어도 2자루씩'으로 하한을 올리기(★2 유지) (2) 특정 학생만 하한을 다르게 주기(0067 골조 · ★2) (3) '받지 못하는 학생이 있어도 된다'로 바꾸면 치환이 사라져 ★1 (4) 상한(최대 4자루)을 추가하면 여사건·포함배제가 필요해 ★3."
```

```yaml
- id: RPM-PROB-0065
  page: 13
  vendor_label: "유형 08 중복조합"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    5명의 후보에게 10명의 유권자가 각각 한 명씩 무기명 투표할 때 나올 수 있는 투표 결과의 수(기권·무효 없음).
  category: "무기명 투표 결과 → 후보별 득표수 조합 → 중복조합"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "투표 결과의 수(중복조합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '무기명'이므로 누가 찍었는지가 아니라 후보별 득표수만 결과를 결정한다. 후보 5명에서 중복을 허용해 10번 뽑는 중복조합 한 줄.
    교과서 예시와 같은 표준 대입이고 통찰 없음·M_total 4 라 벤더 「중하」 출발점에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "무기명 → 후보별 득표수 순서쌍 → 5명에서 10개 중복조합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1001$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "후보 수와 유권자 수(4명·8표, 6명·12표)를 바꿀 수 있다. 제약: 답이 계산 가능한 크기의 조합수로 떨어지게 두 수를 고른다."
    creative: "(1) '기명 투표(누가 누구를 찍었는지 구분)'로 바꾸면 중복순열 $5^{10}$ 이 되어 골조가 달라진다(★1) (2) '모든 후보가 적어도 1표'를 추가하면 0064 골조(★2) (3) '최다 득표자가 6표 이상'처럼 조건을 걸면 경우 나누기가 생겨 ★3."
```

```yaml
- id: RPM-PROB-0066
  page: 13
  vendor_label: "유형 08 중복조합"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(a+b+c)^8$을 전개할 때 생기는 서로 다른 항의 개수.
  category: "전개식의 항 → 지수의 순서쌍 → 방정식의 음이 아닌 정수해"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "항 $a^p b^q c^r$ 를 $p+q+r=8$ 의 음이 아닌 정수해로 바꿔 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다항식 전개식의 서로 다른 항의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개식의 서로 다른 항은 지수 세 쌍이 결정하므로 항 개수 세기를 정수해 개수 세기로 옮기는 표현 전환이 핵심이다.
    전환 뒤에는 세 문자에서 8개를 뽑는 중복조합 한 줄. 통찰 d1 하나·M_total 4 로 벤더 「중하」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "항 = 지수 $(p,q,r)$ → $p+q+r=8$ 의 해 개수 → 3에서 8개 중복조합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수와 지수(4문자 5제곱, 3문자 10제곱)를 바꿀 수 있다. 제약: 문자 수와 지수가 커지면 계산만 무거워지므로 조합수가 세 자리 이내가 되도록 둔다."
    creative: "(1) '$a$ 가 실제로 들어 있는 항의 개수'로 조건을 걸면 하한 치환이 추가돼 ★2 유지 (2) $(a+b+c)^8$ 의 특정 항 계수를 묻는 다항정리로 바꾸면 다른 유형 (3) $(a+b+c+d)^n$ 에서 항의 개수가 처음으로 100을 넘는 $n$ 을 묻기(역방향 · ★3)."
```

```yaml
- id: RPM-PROB-0067
  page: 13
  vendor_label: "유형 08 중복조합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    같은 종류의 초콜릿 10개를 네 접시 A, B, C, D에 나누어 담되 A에는 2개 이상, B에는 3개 이상(빈 접시 허용)인 경우의 수. 5지선다.
  category: "서로 다른 하한 조건 → 선배분 치환 → 중복조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "하한 조건이 있는 중복조합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A에 2개, B에 3개를 먼저 놓고 남은 5개를 네 접시에 자유 분배하면 된다. 0064 와 같은 치환이되 하한이 접시마다 다르다.
    '빈 접시가 있을 수도 있다'가 치환 뒤 음이 아닌 정수 조건을 확정해 주는 경계 단서(T-경계)다. 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A에 2·B에 3 선배분 → 남은 5개를 네 접시에 중복조합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 개수와 두 하한(12개에 A≥3·B≥2 등)을 바꿀 수 있다. 제약: 하한의 합이 총 개수를 넘지 않아야 하고, 선택지가 서로 다른 조합수로 떨어지게 둔다."
    creative: "(1) 하한을 세 접시에 걸기(★2 유지) (2) 'C에는 3개 이하'처럼 상한을 섞으면 여사건이 필요해 ★3 (3) 접시를 같은 종류로 바꾸면 분할 문제가 되어 골조가 완전히 달라진다(★4)."
```

### 유형 09 방정식의 해의 개수

```yaml
- id: RPM-PROB-0068
  page: 14
  vendor_label: "유형 09 방정식의 해의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $x+y+z=10$ 의 음이 아닌 정수해의 개수를 $a$, 자연수해의 개수를 $b$ 라 할 때 $a+b$ 의 값. 5지선다.
  category: "음이 아닌 정수해와 자연수해를 각각 중복조합으로 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 음이 아닌 정수해·자연수해의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 방정식에 조건만 달리해 중복조합을 두 번 쓰는 대비형. 자연수해는 각 변수에 1씩 선배분해 음이 아닌 정수해로 되돌린다.
    두 공식이 어떻게 연결되는지를 보여 주는 유형 대표문제. 통찰 없음·M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "음이 아닌 정수해 = 3에서 10 중복조합 · 자연수해 = 1씩 선배분 후 3에서 7 중복조합 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(8·12·15)와 변수 개수(4개)를 바꿀 수 있다. 제약: 자연수해가 존재하려면 상수가 변수 개수 이상이어야 하고, $a+b$ 가 선택지 다섯 개로 변별되게 둔다."
    creative: "(1) $a-b$ 나 $a/b$ 를 묻기(★2 유지) (2) 한쪽만 '짝수인 해'로 바꾸면 치환이 한 겹 더 필요해 ★3 (3) 변수 개수를 미지수 $n$ 으로 두고 $a=b$ 가 되는 $n$ 을 묻기(역방향 · ★3~4)."
```

```yaml
- id: RPM-PROB-0069
  page: 14
  vendor_label: "유형 09 방정식의 해의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x+y+z<5$ 를 만족시키는 음이 아닌 정수 $x$, $y$, $z$ 의 순서쌍의 개수. 5지선다.
  category: "부등식 → 여유변수 도입으로 등식화 → 중복조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x+y+z\\le 4$ 를 여유변수 $w\\ge 0$ 을 더한 등식 $x+y+z+w=4$ 로 바꿔 한 번에 센다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식을 만족시키는 정수해의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부등식을 그대로는 셀 수 없으므로 합이 0~4 인 다섯 경우를 따로 세거나, 여유변수를 하나 더해 등식 하나로 바꾼다. 후자가 이 유형의 착안.
    정수 부등식이라 $<5$ 가 $\le 4$ 라는 경계 처리(T-경계)가 먼저 필요하다. 통찰 d2 하나·M_total 5 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$<5 \\Rightarrow \\le 4$ → 여유변수 $w$ 추가해 $x+y+z+w=4$ → 4문자 중복조합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(6·8)와 변수 개수를 바꿀 수 있다. 제약: 정수 부등식이라 $<k$ 와 $\\le k$ 의 답이 다르므로 어느 쪽인지 발문에서 분명히 하고, 여유변수 포함 문자 수로 중복조합이 계산되는지 확인한다."
    creative: "(1) $\\le$ 로 바꿔 경계 함정만 제거(★2, 체감 ★1 쪽) (2) 변수에 자연수 조건을 걸면 선배분 + 여유변수 두 겹(★3) (3) $2\\le x+y+z<6$ 처럼 양쪽 부등식으로 만들면 차집합 계산이 추가돼 ★3."
```

```yaml
- id: RPM-PROB-0070
  page: 14
  vendor_label: "유형 09 방정식의 해의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x\ge 2$, $y\ge 2$, $z\ge 1$ 일 때 $x+y+z=11$ 의 정수해의 개수.
  category: "변수별 하한 → 평행이동 치환 → 중복조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "하한 조건이 있는 방정식의 정수해의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 변수에서 하한만큼 뺀 새 변수를 잡으면 우변이 11에서 6으로 줄고 음이 아닌 정수해 문제로 환원된다. 0067 과 같은 치환의 방정식 판.
    치환 뒤 새 변수의 범위가 0 이상임을 확인하는 것이 함정(T-범위). 통찰 없음·M_total 5 지만 치환 단계가 있어 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$x'=x-2,\\ y'=y-2,\\ z'=z-1$ 치환 → $x'+y'+z'=6$ → 3문자 중복조합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 하한과 우변 상수를 바꿀 수 있다. 제약: 하한의 합이 우변 이하여야 하고(아니면 해가 없음), 치환 뒤 우변이 0 이상이어야 한다."
    creative: "(1) 하한 대신 상한($x\\le 4$)을 섞으면 여사건이 필요해 ★3 (2) 변수 하나를 짝수로 제한하면 경우 나누기가 생겨 ★3 (3) 하한을 문자 $k$ 로 두고 해가 처음으로 없어지는 $k$ 를 묻기(역방향 · ★3)."
```

```yaml
- id: RPM-PROB-0071
  page: 14
  vendor_label: "유형 09 방정식의 해의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    음이 아닌 정수 $a$, $b$, $c$, $d$ 에 대하여 $a^2+b+c+d=9$ 를 만족시키는 순서쌍의 개수.
  category: "제곱항의 값으로 경우 나누기 → 각 경우마다 중복조합 → 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a^2\\le 9$ 에서 $a$ 가 0,1,2,3 네 경우뿐임을 먼저 확정하고 각 경우가 모두 답에 기여함을 따진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱항이 섞인 방정식의 정수해(경우 나누기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제곱항이 있어 중복조합을 바로 쓸 수 없다. $a$ 를 먼저 고정해 남은 세 변수의 합을 $9-a^2$ 로 만들고 네 경우의 중복조합을 더하는 것이 골조.
    $a$ 의 범위를 $a^2\le 9$ 로 좁히는 것이 함정(T-범위)이자 통찰. 통찰 1개·M_total 7 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "$a=0,1,2,3$ 으로 분기 → 각각 $b+c+d=9-a^2$ 의 중복조합 → 네 값의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$122$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(12·16)와 제곱항의 위치·차수($a^3$)를 바꿀 수 있다. 제약: 분기 개수가 4~5개를 넘지 않도록 우변을 잡고, 각 분기의 중복조합이 모두 유효하도록 $9-a^2\\ge 0$ 같은 조건을 확인한다."
    creative: "(1) $a^2+b^2+c+d=9$ 처럼 제곱항을 둘로 늘리면 이중 분기(★4) (2) $a$ 에 상한을 명시해 주면 통찰이 사라져 ★2 (3) 순서쌍의 개수 대신 $a$ 의 최댓값을 묻기(★2) (4) 분기 중 일부가 조건 위배로 기각되게 설계하면 I-VF 가 붙어 ★4."
```

### 유형 10 함수의 개수; 중복조합

```yaml
- id: RPM-PROB-0072
  page: 14
  vendor_label: "유형 10 함수의 개수; 중복조합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $X=\{1,2,3,4\}$ 에서 $Y=\{3,4,\dots,8\}$ 로의 함수 중 $x_i<x_j$ 이면 $f(x_i)\ge f(x_j)$ 인 함수의 개수.
  category: "감소하지 않는(넓은 의미 단조) 함수 → 공역에서 중복 허용 선택 → 중복조합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "단조함수는 함숫값 다중집합이 정해지면 하나로 결정되므로 함수 세기를 $Y$ 에서 중복 허용해 4개 뽑기로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "단조함수의 개수(중복조합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등호가 있는 단조 조건이라 함숫값은 중복될 수 있고, 뽑은 값들을 큰 것부터 배열하는 방법이 한 가지뿐이라는 점이 전환의 근거다.
    부등호가 $\ge$ 인지 $>$ 인지에 따라 중복조합/조합이 갈리는 것이 함정(T-표기). 통찰 d2 하나·M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$\\ge$ 단조 → 배열 방법 1가지 → $Y$ 의 6개에서 4개 중복조합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$126$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역의 크기(|X|=3, |Y|=7 등)를 바꿀 수 있다. 제약: $>$ 로 바꾸면 조합이 되므로 $|Y|\\ge|X|$ 가 필요하고, $\\ge$ 를 유지하면 크기 제약은 없다."
    creative: "(1) 부등호를 $>$ 로 바꿔 조합으로 만들기(★1~2) (2) 일대일대응 조건을 추가하면 순열(★2) (3) 함숫값 하나를 고정하면 0073 골조(★3) (4) '증가하거나 감소하는 함수'로 묶어 물으면 중복 제거가 필요해 ★3."
```

```yaml
- id: RPM-PROB-0073
  page: 14
  vendor_label: "유형 10 함수의 개수; 중복조합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $X=\{1,\dots,5\}$, $Y=\{1,\dots,6\}$ 에서 ㈎ $f(2)=3$ ㈏ $f(1)\le f(2)\le f(3)\le f(4)$ 를 만족시키는 함수 $f$ 의 개수. 5지선다.
  category: "고정된 함숫값을 기준으로 앞·뒤 구간 분리 → 각각 세고 자유 원소를 곱함"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(2)=3$ 을 기준으로 $f(1)$ 쪽과 $f(3),f(4)$ 쪽이 서로 독립인 두 조건으로 갈라짐을 본다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$3\\le f(3)\\le f(4)$ 를 $\\{3,4,5,6\\}$ 에서 2개 중복 선택으로 옮긴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "함숫값이 고정된 단조함수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 ㈏에 $f(5)$ 가 빠져 있어 $f(5)$ 는 아무 값이나 가능하다는 것을 놓치면 답이 6배 작아진다(T-범위).
    $f(2)=3$ 이 단조 사슬을 둘로 끊어 주므로 앞 구간은 $f(1)\le 3$ 의 3가지, 뒤 구간은 중복조합, 여기에 $f(5)$ 의 6가지를 곱한다.
    통찰 2개·M_total 7 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "$f(2)=3$ 으로 사슬 절단 → $f(1)$ 3가지 × $\\{3,4,5,6\\}$ 중복조합 2개 × $f(5)$ 6가지"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 함숫값($f(2)=4$)과 공역 크기를 바꿀 수 있다. 제약: 고정값이 공역의 양 끝이면 한쪽 구간이 1가지로 무너져 변별이 사라지므로 가운데 값을 쓴다."
    creative: "(1) 조건 ㈏에 $f(5)$ 까지 넣어 자유 원소를 없애기(★2) (2) 고정 조건을 $f(3)=3$ 으로 옮겨 양쪽 구간을 모두 중복조합으로 만들기(★3 유지) (3) 고정값 대신 $f(2)\\le 3$ 처럼 범위를 주면 분기가 생겨 ★4."
```

```yaml
- id: RPM-PROB-0074
  page: 14
  vendor_label: "유형 10 함수의 개수; 중복조합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $X=\{1,\dots,5\}$ 에서 $X$ 로의 함수 중 ㈎ $x\le 3$ 이면 $f(x)\ge 3$ ㈏ $f(4)\le f(5)$ 를 만족시키는 함수의 개수.
  category: "정의역이 겹치지 않는 두 조건 → 각각 세고 곱의 법칙"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 ㈎를 '$f(1),f(2),f(3)$ 의 치역이 $\\{3,4,5\\}$ 로 제한' 으로 바꿔 읽는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(4)\\le f(5)$ 를 $X$ 의 5개에서 2개 중복 선택으로 옮긴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건이 두 갈래인 함수의 개수(곱의 법칙+중복조합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건이 각각 $\{1,2,3\}$ 과 $\{4,5\}$ 라는 겹치지 않는 정의역에만 걸려 있어 따로 세고 곱하면 된다는 구조 파악이 먼저다.
    ㈎ 는 세 값이 독립이라 중복순열, ㈏ 는 단조라 중복조합으로 서로 다른 도구가 쓰이는 것이 이 문항의 변별점.
    통찰 2개·M_total 7 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "$f(1),f(2),f(3)$ 각 3가지(중복순열) × $f(4)\\le f(5)$ 의 5에서 2 중복조합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$405$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 크기와 경계값($x\\le 2$ 이면 $f(x)\\ge 4$ 등)을 바꿀 수 있다. 제약: 두 조건의 정의역이 겹치지 않아야 곱의 법칙이 성립하고, 겹치면 골조가 완전히 달라진다."
    creative: "(1) 조건 ㈏ 를 $f(4)<f(5)$ 로 바꿔 조합으로 만들기(★3 유지) (2) 두 조건의 정의역을 일부러 겹치게 해 분기·기각이 생기게 하면 I-VF 추가로 ★4 (3) ㈎ 의 함숫값 세 개에도 단조 조건을 걸면 중복조합 두 번(★3)."
```

### 유형 11 $(a+b)^n$의 전개식

```yaml
- id: RPM-PROB-0075
  page: 15
  vendor_label: "유형 11 $(a+b)^n$의 전개식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $(2+ax)^5$ 의 전개식에서 $x^2$ 의 계수가 2000일 때 양수 $a$ 의 값. 5지선다.
  category: "이항정리 일반항 → 해당 차수 항의 계수식 → 방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+bx)^n 전개식의 특정 항 계수로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항에서 $x$ 의 차수를 2로 맞춰 항을 하나 고르고, 그 계수를 $a$ 에 대한 이차방정식으로 놓는 표준 절차.
    $a^2=25$ 에서 양수 조건으로 한 근만 남기는 것이 함정(T-부호). 통찰 없음이라 M_total 7 이어도 +1 하지 않고 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "일반항 $_5\\mathrm{C}_r 2^{5-r}(ax)^r$ → $r=2$ 의 계수 $=2000$ → 양수해 $a$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 $n$, 상수항 2, 목표 차수와 계수값을 바꿀 수 있다. 제약: 계수 방정식이 유리수 해를 갖도록 목표 계수를 이항계수의 배수로 잡고, $a$ 의 부호 조건을 발문에 명시한다."
    creative: "(1) '음수 $a$' 로 바꿔 부호 함정만 옮기기(★2 유지) (2) 목표 차수를 홀수로 해 $a$ 의 홀수 거듭제곱이 되면 근이 하나뿐이라 함정이 사라짐(★1~2) (3) 두 항의 계수 비를 조건으로 주면 식이 한 겹 늘어 ★3."
```

```yaml
- id: RPM-PROB-0076
  page: 15
  vendor_label: "유형 11 $(a+b)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $\left(x+\dfrac{2}{x}\right)^6$ 의 전개식에서 상수항을 $a$, $x^2$ 의 계수를 $b$ 라 할 때 $a+b$ 의 값.
  category: "분수식 일반항의 지수 정리 → 두 차수 각각의 $r$ → 계수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식이 섞인 이항전개의 상수항·특정 항 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항의 $x$ 차수를 $6-2r$ 로 한 번 정리해 두면 상수항과 $x^2$ 항이 각각 어떤 $r$ 인지 바로 읽힌다. 같은 절차를 두 번 쓰는 서술형.
    차수를 $-r$ 까지 포함해 정리하지 않으면 틀리는 것이 함정(T-단위). 통찰 없음·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "일반항 $_6\\mathrm{C}_r 2^r x^{6-2r}$ → $r=3$ 과 $r=2$ → 두 계수의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$220$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 6과 분자 상수 2, 묻는 두 차수를 바꿀 수 있다. 제약: 차수 식 $6-2r$ 가 목표 차수와 같아지는 정수 $r$ 가 $0\\le r\\le n$ 안에 있어야 하고, 없으면 그 항의 계수는 0이다."
    creative: "(1) 상수항이 존재하지 않도록 지수를 홀수로 바꿔 '계수 0' 을 답으로 만들기(★2, 함정 강화) (2) 분모를 $x^2$ 으로 바꿔 차수 식을 $6-3r$ 로 만들기(★2) (3) 상수항이 최대가 되는 지수를 묻기(역방향 · ★3 · 0077 골조)."
```

```yaml
- id: RPM-PROB-0077
  page: 15
  vendor_label: "유형 11 $(a+b)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $\left(x^2+\dfrac{1}{x^3}\right)^n$ 의 전개식에서 상수항이 0이 아닌 실수가 되도록 하는 자연수 $n$ 의 최솟값. 5지선다.
  category: "일반항 지수를 0으로 두고 → 정수해 존재 조건 → 최소 $n$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상수항이 '있으려면' $2n-5r=0$ 을 만족하는 정수 $r$ 가 $0\\le r\\le n$ 에 존재해야 한다는 조건을 먼저 세운다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상수항이 존재하도록 하는 n의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수를 계산하는 문제가 아니라 상수항의 존재 조건을 $n$ 에 대한 정수 조건으로 옮기는 역방향 문항이다.
    $2n=5r$ 에서 $n$ 이 5의 배수여야 함을 얻고 $r$ 가 범위 안 정수인지 확인한다(T-범위). 통찰 d2 하나·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "일반항 차수 $2n-5r=0$ → $n$ 이 5의 배수 → 최소 $n$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 차수 쌍($x^3$ 과 $1/x^4$ 등)을 바꿀 수 있다. 제약: 두 차수가 서로소일수록 최소 $n$ 이 커지고, 공약수가 있으면 최소 $n$ 이 작아져 변별이 줄어든다."
    creative: "(1) '$x^5$ 항이 존재하도록 하는 최소 $n$' 으로 목표 차수를 0이 아닌 값으로 바꾸기(★2~3) (2) 상수항이 존재하는 $n$ 을 50 이하에서 모두 세기(★3) (3) 최소 $n$ 일 때의 상수항 값까지 묻기(★3)."
```

```yaml
- id: RPM-PROB-0078
  page: 15
  vendor_label: "유형 11 $(a+b)^n$의 전개식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(\sqrt{6}+x)^6$ 의 전개식에서 상수항을 포함한 모든 정수인 계수의 합. 5지선다.
  category: "일반항의 무리수 부분 판별 → 정수 계수인 항만 선별 → 합"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'계수가 정수' 를 '$(\\sqrt{6})^{6-r}$ 의 지수 $6-r$ 가 짝수' 로 바꿔 읽는다"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "일곱 항을 모두 만든 뒤 무리수 계수인 항을 기각하고 남은 네 항만 더한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "무리수 계수를 포함한 전개식에서 정수 계수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모든 계수를 더하라면 $x=1$ 대입 한 줄이지만 '정수인 계수만' 이라는 사후 필터가 걸려 있어 항별로 유효성을 따져야 한다.
    $6-r$ 의 홀짝으로 기각 여부가 갈리고, 상수항($r=0$)을 빠뜨리기 쉽다(T-경계). 통찰 2개지만 출발점이 ★3(상중)이라 +1 조건(M_total 8 이상)을 못 채워 ★3 유지.
  tier: star_3
  mechanism_primary: "일반항 $_6\\mathrm{C}_r(\\sqrt6)^{6-r}x^r$ → $6-r$ 짝수인 $r=0,2,4,6$ 만 채택 → 네 계수의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수 밑($\\sqrt2$, $\\sqrt3$)과 지수(5·7)를 바꿀 수 있다. 제약: 지수가 홀수면 채택되는 항이 홀수 번째로 바뀌므로 상수항 포함 여부를 발문에서 다시 확인해야 하고, 합이 선택지로 변별되게 둔다."
    creative: "(1) '무리수인 계수의 합' 으로 뒤집으면 $\\sqrt6$ 의 배수 꼴 답이 되어 ★3 유지 (2) '모든 계수의 합' 으로 바꾸면 $x=1$ 대입 한 줄이라 ★1 (3) 밑을 $\\sqrt[3]{2}$ 로 바꿔 3의 배수 조건으로 만들면 필터가 한 겹 더해져 ★4."
```

### 유형 12 $(a+b)(c+d)^n$의 전개식

```yaml
- id: RPM-PROB-0079
  page: 15
  vendor_label: "유형 12 $(a+b)(c+d)^n$의 전개식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $(x+2)\left(x+\dfrac{1}{x}\right)^4$ 의 전개식에서 $x^2$ 의 계수. 5지선다.
  category: "앞 괄호의 각 항이 요구하는 뒤 전개식의 차수 → 해당 계수 × 앞 계수 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+b)(c+d)^n 전개식의 특정 항 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 괄호가 두 항이므로 $x\cdot(x^1$ 항$)$ 과 $2\cdot(x^2$ 항$)$ 두 갈래를 각각 뒤 전개식의 일반항에서 찾아 더하는 것이 골조.
    뒤 전개식의 차수 $4-2r$ 가 짝수뿐이라 한 갈래는 계수 0 으로 사라진다(T-단위). 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$x\\times x^1$ 항 + $2\\times x^2$ 항 → 일반항 $4-2r$ 로 $r$ 결정 → 계수 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 괄호의 계수·차수와 뒤 지수 4를 바꿀 수 있다. 제약: 뒤 전개식의 차수가 $4-2r$ 처럼 같은 홀짝만 나오므로 목표 차수와 홀짝이 맞는 갈래만 살아남는다는 점을 확인한다."
    creative: "(1) 목표 차수를 홀수로 바꾸면 살아남는 갈래가 반대쪽으로 바뀜(★2 유지) (2) 앞 괄호를 삼항식으로 늘리면 0082 골조(★3) (3) 앞 괄호에 미지수를 넣고 계수 조건을 주면 0081 골조(★2~3)."
```

```yaml
- id: RPM-PROB-0080
  page: 15
  vendor_label: "유형 12 $(a+b)(c+d)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(2x^2-x)(x^2+2)^7$ 의 전개식에서 $x^4$ 의 계수. 5지선다.
  category: "앞 괄호 두 항별 요구 차수 → 뒤 전개식의 짝수 차수만 존재 → 한 갈래 소멸"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 곱의 특정 항 계수(차수 짝 맞추기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x^2+2)^7$ 의 일반항 차수가 $2r$ 라 짝수 항만 존재한다. 따라서 $-x$ 가 요구하는 $x^3$ 항이 없어 갈래 하나가 통째로 사라진다.
    남은 $2x^2\times x^2$ 갈래의 계수 하나만 계산하면 끝(T-단위: 차수 홀짝). 통찰 없음·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$(x^2+2)^7$ 은 짝수 차수뿐 → $-x\\times x^3$ 갈래 소멸 → $2x^2\\times x^2$ 계수만 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 괄호 계수(2·-1), 뒤 지수 7, 목표 차수 4를 바꿀 수 있다. 제약: 목표 차수를 홀수로 잡으면 두 갈래가 모두 사라져 계수 0 이 되므로 의도한 경우인지 확인한다."
    creative: "(1) 뒤 괄호를 $(x+2)^7$ 로 바꿔 모든 차수가 살아나게 하면 갈래 두 개를 다 계산(★2) (2) 답이 0 이 되도록 목표 차수를 홀수로 잡기(★2, 함정형) (3) 앞 괄호에 미지수를 넣고 계수를 조건으로 주기(★3)."
```

```yaml
- id: RPM-PROB-0081
  page: 15
  vendor_label: "유형 12 $(a+b)(c+d)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(ax^3-3x)(3x+2)^5$ 의 전개식에서 $x^5$ 의 계수가 1170일 때 실수 $a$ 의 값. 5지선다.
  category: "두 갈래의 계수를 $a$ 에 대한 일차식으로 → 방정식 풀이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱한 식의 계수 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $ax^3\times x^2$ 와 $-3x\times x^4$ 두 갈래의 계수를 $(3x+2)^5$ 의 일반항에서 각각 읽어 $a$ 의 일차방정식을 만든다.
    $3^r 2^{5-r}$ 까지 곱해야 해 산술이 무겁지만 v3.8 에서 계산 마찰은 ★ 상승 신호가 아니므로 M_total 8 이어도 벤더 「중」 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "$ax^3\\times x^2$ 계수 + $-3x\\times x^4$ 계수 $=1170$ → $a$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$(3x+2)$ 의 두 계수와 지수 5, 목표 계수 1170을 바꿀 수 있다. 제약: 두 갈래 계수의 조합이 $a$ 의 일차방정식이 되어야 하고 해가 선택지의 정수로 떨어지게 목표값을 역산한다."
    creative: "(1) 앞 괄호를 $(ax^3-bx)$ 로 두고 조건을 두 개 주면 연립(★3) (2) 계수가 최소가 되는 $a$ 를 묻기(★3) (3) 계수 대신 '계수가 0이 되도록 하는 $a$' 로 바꾸면 산술이 가벼워져 ★2 유지·체감 하락."
```

```yaml
- id: RPM-PROB-0082
  page: 15
  vendor_label: "유형 12 $(a+b)(c+d)^n$의 전개식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(x^2+x+1)\left(x+\dfrac{1}{x}\right)^6$ 의 전개식에서 상수항.
  category: "앞 삼항식의 세 갈래 → 각 갈래가 요구하는 차수 → 존재하지 않는 갈래 기각 후 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 갈래 중 $x\\times x^{-1}$ 는 뒤 전개식에 홀수 차수가 없어 기각되고 두 갈래만 남는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼항식과 이항전개의 곱에서 상수항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 괄호가 세 항이라 갈래가 셋으로 늘고, 각 갈래마다 뒤 전개식에서 필요한 차수가 달라진다.
    뒤 전개식의 차수가 $6-2r$ 로 짝수뿐이라 $x$ 갈래가 사라지는 것을 확인해야 한다(T-단위). 통찰은 d1 하나라 절차형이며 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "$x^2\\times x^{-2}$ + $x\\times x^{-1}$(없음) + $1\\times x^0$ → 두 계수의 합"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 삼항식의 차수·계수와 뒤 지수 6을 바꿀 수 있다. 제약: 뒤 전개식의 차수 홀짝이 한 종류뿐이므로 앞 삼항식의 차수를 모두 같은 홀짝으로 두면 갈래가 하나도 안 사라져 난도가 내려간다."
    creative: "(1) 뒤 괄호를 $\\left(x+\\dfrac{1}{x^2}\\right)^6$ 으로 바꿔 차수 간격을 3으로 만들기(★3 유지) (2) 앞 괄호를 사항식으로 늘리기(★3~4) (3) 상수항 대신 $x^2$ 계수를 물어 갈래가 모두 살아나게 하기(★3)."
```

### 유형 13 $(a+b)^m(c+d)^n$의 전개식

```yaml
- id: RPM-PROB-0083
  page: 16
  vendor_label: "유형 13 $(a+b)^m(c+d)^n$의 전개식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $(x-2)^3(2x+1)^5$ 의 전개식에서 $x^2$ 의 계수. 5지선다.
  category: "두 전개식의 차수 합이 2인 세 갈래 → 갈래별 계수 곱 → 합"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+b)^m(c+d)^n 전개식의 특정 항 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 괄호 모두 전개해야 하므로 $x^0\cdot x^2$, $x^1\cdot x^1$, $x^2\cdot x^0$ 세 갈래의 계수를 각각 일반항에서 읽어 곱하고 더한다.
    $(-2)^i$ 의 부호가 갈래마다 바뀌는 것이 함정(T-부호). 산술량은 크지만 v3.8 에서 계산 마찰은 ★ 상승 신호가 아니라 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$(x-2)^3$ 의 $x^{0,1,2}$ 계수 × $(2x+1)^5$ 의 $x^{2,1,0}$ 계수 → 세 곱의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수(3·5)와 상수항($-2$·$1$), 목표 차수를 바꿀 수 있다. 제약: 목표 차수가 낮을수록 갈래 수가 적어 계산이 줄고, 목표 차수가 $m+n$ 에 가까우면 높은 차수 쪽 갈래만 남아 쉬워진다."
    creative: "(1) 목표 차수를 $x^7$ 처럼 최고차 근방으로 옮기면 갈래가 둘로 줄어 0084 골조(★2) (2) 한쪽 괄호에 미지수를 넣고 계수를 조건으로 주기(0084 · ★2) (3) '모든 계수의 합' 으로 바꾸면 $x=1$ 대입 한 줄(★1)."
```

```yaml
- id: RPM-PROB-0084
  page: 16
  vendor_label: "유형 13 $(a+b)^m(c+d)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(x-3)^5(x+a)^4$ 의 전개식에서 $x^8$ 의 계수가 1일 때 실수 $a$ 의 값. 5지선다.
  category: "최고차 근방이라 갈래가 둘 → $a$ 의 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이항식 곱의 고차항 계수로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 차수가 9 이므로 $x^8$ 을 만드는 갈래는 $x^5\cdot x^3$ 과 $x^4\cdot x^4$ 둘뿐이라는 것을 먼저 확인하면 계산이 두 줄로 끝난다.
    0083 과 골조는 같지만 목표 차수가 최고차 근방이라 갈래가 줄어든 판. 통찰 없음·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$x^8$ 갈래는 $x^5\\cdot x^3$ 과 $x^4\\cdot x^4$ 둘 → 계수식 $=1$ → $a$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수(5·4)와 상수 $-3$, 목표 계수 1을 바꿀 수 있다. 제약: 목표 차수를 $m+n-1$ 로 두어야 갈래가 둘로 유지되고, $a$ 의 해가 선택지의 정수로 떨어지게 목표 계수를 역산한다."
    creative: "(1) 목표 차수를 $x^7$ 로 내리면 갈래가 셋이 되고 $a$ 의 이차방정식이라 ★3 (2) $a$ 가 자연수라는 조건을 추가해 근 하나를 기각시키면 I-VF 가 붙어 ★3 (3) 계수가 0이 되는 $a$ 를 묻기(★2)."
```

```yaml
- id: RPM-PROB-0085
  page: 16
  vendor_label: "유형 13 $(a+b)^m(c+d)^n$의 전개식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(x-1)^3\left(x+\dfrac{3}{x}\right)^5$ 의 전개식에서 $x^6$ 의 계수.
  category: "뒤 전개식의 차수가 홀수뿐 → 앞 괄호에서 쓸 수 있는 차수도 홀수로 제한 → 두 갈래 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식이 섞인 두 이항식 곱의 특정 항 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\left(x+\dfrac{3}{x}\right)^5$ 의 일반항 차수가 $5-2r$ 로 홀수뿐이라, 합이 6이 되려면 앞 괄호에서도 홀수 차수만 쓸 수 있다.
    갈래가 넷에서 둘로 줄고 각각 $(x-1)^3$ 의 계수와 곱해 더한다(T-단위: 차수 홀짝). 통찰 없음·M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "뒤 차수 $5-2r$ 는 홀수 → 앞에서 $x^3$·$x^1$ 만 사용 → 두 갈래 계수의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수 3, 두 지수(3·5), 목표 차수 6을 바꿀 수 있다. 제약: 뒤 전개식 차수의 홀짝이 지수 $n$ 의 홀짝을 따라가므로, 목표 차수를 바꾸면 살아남는 갈래가 통째로 바뀐다."
    creative: "(1) 목표 차수를 홀수로 바꿔 살아남는 갈래를 반대로 만들기(★2 유지) (2) 뒤 괄호를 $\\left(x^2+\\dfrac{3}{x}\\right)^5$ 로 해 차수 간격을 3으로 만들면 갈래 판별이 어려워져 ★3 (3) 상수항을 묻기(★3)."
```

### 유형 14 파스칼의 삼각형

```yaml
- id: RPM-PROB-0086
  page: 16
  vendor_label: "유형 14 파스칼의 삼각형"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $_1\mathrm{C}_0+{}_2\mathrm{C}_1+{}_3\mathrm{C}_2+{}_4\mathrm{C}_3+{}_5\mathrm{C}_4+{}_6\mathrm{C}_5$ 와 같은 것 고르기. 5지선다.
  category: "첫 항을 같은 값의 다른 조합으로 바꿔 → 파스칼 정리 연쇄 → 하나의 조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$_1\\mathrm{C}_0={}_2\\mathrm{C}_0$ 으로 바꿔 파스칼 정리를 연쇄로 적용할 수 있게 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "파스칼 정리의 연쇄 적용(조합 합의 간단화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 항이 $_n\mathrm{C}_{n-1}=n$ 이라 직접 더해 21을 얻고 선택지와 맞춰도 되지만, 유형의 의도는 첫 항을 $_2\mathrm{C}_0$ 으로 바꿔 파스칼 정리를 차례로 흡수시키는 것이다.
    두 갈래 모두 짧아 실제 부담은 낮다(T-표기: 조합 기호 첨자). 통찰 d1 하나·M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$_1\\mathrm{C}_0\\to{}_2\\mathrm{C}_0$ → 파스칼 정리 연쇄 흡수 → $_7\\mathrm{C}_2$"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수와 시작 첨자를 바꿀 수 있다. 제약: 연쇄가 성립하려면 아래 첨자가 1씩, 위 첨자도 1씩 늘어나야 하고 첫 항이 $_k\\mathrm{C}_{k-1}$ 꼴이어야 보정이 한 번으로 끝난다."
    creative: "(1) 항 수를 늘려 직접 계산을 불리하게 만들기(★2 유지) (2) 시작 항을 $_7\\mathrm{C}_1$ 처럼 어긋나게 해 1을 더했다 빼게 만들면 0088 골조(★2) (3) 값이 아니라 '가장 큰 항' 을 묻기(★2)."
```

```yaml
- id: RPM-PROB-0087
  page: 16
  vendor_label: "유형 14 파스칼의 삼각형"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $_n\mathrm{C}_5={}_{n-1}\mathrm{C}_5+{}_{n-1}\mathrm{C}_6$ 을 만족시키는 자연수 $n$ 의 값.
  category: "우변을 파스칼 정리로 묶음 → $_n\\mathrm{C}_5={}_n\\mathrm{C}_6$ → 첨자 관계"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우변을 파스칼 정리로 $_n\\mathrm{C}_6$ 으로 묶은 뒤 $_n\\mathrm{C}_r={}_n\\mathrm{C}_{n-r}$ 를 적용한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "파스칼 정리와 nCr=nC(n-r)로 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변이 파스칼 정리의 좌변 모양이라는 것을 알아보면 식이 $_n\mathrm{C}_5={}_n\mathrm{C}_6$ 으로 줄어든다.
    여기서 $5=6$ 은 불가능하므로 $5+6=n$ 갈래만 남는다(T-범위: 두 갈래 중 하나 기각). 통찰 d1 하나·M_total 6 → 벤더 「중하」 출발점에서 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "파스칼 정리로 우변 묶기 → $_n\\mathrm{C}_5={}_n\\mathrm{C}_6$ → $5+6=n$"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 아래 첨자(5·6 → 4·5, 7·8)를 바꿀 수 있다. 제약: 두 첨자가 연속이어야 파스칼 정리로 묶이고, 서로 달라야 $r=s$ 갈래가 기각되어 답이 하나로 정해진다."
    creative: "(1) 좌변을 $_n\\mathrm{C}_4$ 로 어긋나게 해 답이 없게 만들기(★3) (2) 조건을 만족하는 $n$ 이 여러 개가 되도록 첨자를 같게 두기(★2, 기각 논리 제거) (3) 구한 $n$ 으로 $_n\\mathrm{C}_5$ 의 값까지 묻기(★2)."
```

```yaml
- id: RPM-PROB-0088
  page: 16
  vendor_label: "유형 14 파스칼의 삼각형"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $_7\mathrm{C}_1+{}_8\mathrm{C}_2+{}_9\mathrm{C}_3+{}_{10}\mathrm{C}_4+{}_{11}\mathrm{C}_5$ 와 같은 것 고르기. 5지선다.
  category: "빠진 첫 항을 더해 파스칼 연쇄를 완성한 뒤 다시 빼기"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연쇄가 시작되지 않으므로 $_7\\mathrm{C}_0=1$ 을 더해 흡수시키고 마지막에 1을 빼는 보정을 설계한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "빠진 항을 더해 만드는 파스칼 연쇄(하키스틱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0086 과 달리 첫 항이 $_7\mathrm{C}_1$ 이라 그대로는 파스칼 정리를 시작할 짝이 없다. 없는 항 $_7\mathrm{C}_0$ 을 스스로 만들어 넣는 것이 이 문항의 착안이다.
    선택지가 $\pm 1$ 로 갈리므로 보정을 빠뜨리면 바로 오답(T-경계). 통찰 d2 하나·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$+{}_7\\mathrm{C}_0$ 보정 → 파스칼 연쇄로 $_{12}\\mathrm{C}_5$ → 다시 $-1$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 첨자(7·1)와 항의 개수를 바꿀 수 있다. 제약: 보정값이 $_k\\mathrm{C}_0=1$ 이 되도록 시작 아래 첨자를 1로 두면 $-1$ 보정이고, 2로 두면 보정값이 조합수라 계산이 한 겹 늘어난다."
    creative: "(1) 시작 아래 첨자를 2로 올려 보정값이 $_k\\mathrm{C}_0+{}_k\\mathrm{C}_1$ 이 되게 하기(★3) (2) 마지막 항을 하나 빼고 묻기(★2 유지) (3) 합이 $_{12}\\mathrm{C}_5$ 를 넘는 최소 항 수를 묻기(역방향 · ★3)."
```

```yaml
- id: RPM-PROB-0089
  page: 16
  vendor_label: "유형 14 파스칼의 삼각형"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $(1+x)+(1+x)^2+\cdots+(1+x)^{20}$ 의 전개식에서 $x^2$ 의 계수와 같은 것 고르기. 5지선다.
  category: "각 항의 $x^2$ 계수 → 조합의 세로 합 → 파스칼 연쇄(하키스틱)"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다항식의 합에서 $x^2$ 계수를 뽑아 $_2\\mathrm{C}_2+{}_3\\mathrm{C}_2+\\cdots+{}_{20}\\mathrm{C}_2$ 라는 조합 합으로 옮긴다"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "아래 첨자가 고정된 세로 합이 파스칼 정리의 반복 흡수로 $_{21}\\mathrm{C}_3$ 이 됨을 찾는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이항전개의 합에서 특정 항 계수(하키스틱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    20개 항을 일일이 전개할 수 없으므로 계수만 뽑아 조합 합으로 옮기는 전환이 먼저다. $(1+x)$ 에는 $x^2$ 항이 없어 합이 $_2\mathrm{C}_2$ 부터 시작한다(T-경계).
    이어서 아래 첨자가 2로 고정된 세로 합이 파스칼 정리의 반복 흡수로 하나의 조합이 되는 것을 발견해야 한다.
    통찰 2개지만 출발점이 ★3(상중)이라 +1 조건(M_total 8 이상)을 못 채워 ★3 유지.
  tier: star_3
  mechanism_primary: "각 항의 $x^2$ 계수 $_k\\mathrm{C}_2$ → 세로 합 → 파스칼 반복 흡수 → $_{21}\\mathrm{C}_3$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "마지막 지수 20과 목표 차수 2를 바꿀 수 있다. 제약: 목표 차수가 $k$ 면 합이 $_k\\mathrm{C}_k$ 부터 시작하므로 앞쪽 항 몇 개는 계수가 0 이라는 점을 반영해야 한다."
    creative: "(1) 목표 차수를 3으로 올리기(★3 유지) (2) $(1+x)^{10}+\\cdots+(1+x)^{20}$ 처럼 중간부터 시작해 아래쪽 보정을 빼게 만들기(★4) (3) 등비수열 합 공식으로 묶어 푸는 갈래를 열어 두면 I-SC 가 붙어 ★4."
```

### 유형 15 이항계수의 성질

```yaml
- id: RPM-PROB-0090
  page: 17
  vendor_label: "유형 15 이항계수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $64\le{}_n\mathrm{C}_1+{}_n\mathrm{C}_2+\cdots+{}_n\mathrm{C}_n<128$ 을 만족시키는 자연수 $n$ 의 값.
  category: "부분합을 $2^n-1$ 로 바꿈 → 지수 부등식 → 자연수 $n$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$_n\\mathrm{C}_0$ 이 빠진 합임을 알아보고 전체 합 $2^n$ 에서 1을 뺀 꼴로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항계수 전체 합 2^n 으로 부등식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합의 시작이 $_n\mathrm{C}_1$ 이라 $2^n$ 이 아니라 $2^n-1$ 이라는 보정이 이 유형의 첫 관문이다.
    이후 $64\le 2^n-1<128$ 을 정수 조건으로 풀면 $n$ 이 하나로 정해진다(T-경계: 등호 방향). 통찰 d1 하나·M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "부분합 $=2^n-1$ → $64\\le 2^n-1<128$ → $n$"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등식의 두 경계(64·128)와 합의 시작 첨자를 바꿀 수 있다. 제약: 경계를 2의 거듭제곱 근처로 두어야 $n$ 이 하나로 정해지고, $-1$ 보정 때문에 경계 등호 위치가 답을 바꾼다는 점을 확인한다."
    creative: "(1) 합을 $_n\\mathrm{C}_2$ 부터 시작해 보정이 $2^n-1-n$ 이 되게 하기(★3) (2) 만족하는 $n$ 이 여러 개가 되도록 경계를 넓히기(★2) (3) 경계를 문자로 두고 $n$ 이 유일해질 조건을 묻기(역방향 · ★4)."
```

```yaml
- id: RPM-PROB-0091
  page: 17
  vendor_label: "유형 15 이항계수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $_{20}\mathrm{C}_1-{}_{20}\mathrm{C}_2+{}_{20}\mathrm{C}_3-\cdots+{}_{20}\mathrm{C}_{19}$ 의 값. 5지선다.
  category: "교대합이 0임을 이용 → 빠진 양 끝 항 보정 → 부호 정리"
  M: {s: 3, k: 1, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 식을 전체 교대합 $\\sum(-1)^k{}_{20}\\mathrm{C}_k=0$ 에서 $k=0$ 과 $k=20$ 항을 덜어낸 꼴로 바꾸고 부호를 맞춘다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항계수의 교대합(끝항 보정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교대합이 0 이라는 성질은 $k=0$ 부터 $k=20$ 까지일 때 성립하는데, 주어진 식은 양 끝 두 항이 빠져 있고 시작 부호도 반대다.
    전체 식에 $-1$ 을 곱해 부호를 맞춘 뒤 빠진 두 항을 되돌려 주는 두 겹 보정이 핵심이라 부호·경계 함정이 동시에 걸린다.
    통찰 1개·M_total 7 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "전체 교대합 $=0$ → 부호 뒤집기 → 빠진 $_{20}\\mathrm{C}_0$·$_{20}\\mathrm{C}_{20}$ 보정 → 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위 첨자 20(짝수)을 홀수로 바꾸면 양 끝 항의 부호가 달라져 보정값이 0 이 된다. 제약: 시작·끝 첨자와 첫 항의 부호를 함께 정해야 하고, 선택지가 작은 정수라 보정 실수가 바로 드러나게 둔다."
    creative: "(1) 위 첨자를 홀수로 바꿔 답이 0 이 되게 하기(★2~3) (2) 끝 항 하나만 빼고 묻기(★2) (3) 짝수 번째 항의 합만 묻도록 바꾸면 $2^{n-1}$ 성질과 결합해 ★3."
```

```yaml
- id: RPM-PROB-0092
  page: 17
  vendor_label: "유형 15 이항계수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 ㄱ(홀수 첨자 합), ㄴ(교대합), ㄷ(전체 합과 $4^{15}$)의 참·거짓을 판정해 옳은 것 고르기. 5지선다.
  category: "세 보기 각각에 이항계수 합 성질 적용 → 누락 항·지수 표기 확인 후 기각"
  M: {s: 3, k: 1, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ 은 홀수 첨자 합 $2^{10}$ 에서 마지막 항 $_{11}\\mathrm{C}_{11}$ 이 빠져 있어 기각, 나머지 둘만 채택"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항계수 합 성질 참·거짓 판별(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 보기가 각각 다른 성질(홀수 첨자 합 $2^{n-1}$ · 교대합 0 · 전체 합 $2^n$)을 묻고, 판정은 성질을 아는지가 아니라 항이 하나도 빠지지 않았는지를 확인하는 데서 갈린다.
    ㄱ 은 끝항 누락으로 기각되고, ㄷ 은 $2^{30}=4^{15}$ 이라는 지수 표기 변환을 알아봐야 한다(T-경계·T-표기).
    통찰 1개·M_total 7 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "ㄱ 끝항 누락 → 기각 · ㄴ 교대합 0 → 참 · ㄷ $2^{30}=4^{15}$ → 참"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 위 첨자(11·7·30)와 밑 표기(4^15 대신 8^10)를 바꿀 수 있다. 제약: 보기 셋 중 참·거짓 조합이 선택지 다섯 개로 변별되게 배치하고, 적어도 하나는 누락 항 때문에 거짓이 되도록 둔다."
    creative: "(1) 셋 다 참으로 만들어 함정을 없애기(★2) (2) 보기 하나를 $_n\\mathrm{C}_r$ 일반식으로 바꿔 추상도를 올리기(★4) (3) 거짓 보기를 '올바르게 고치기' 로 물으면 서술형 ★3."
```

```yaml
- id: RPM-PROB-0093
  page: 17
  vendor_label: "유형 15 이항계수의 성질"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    (짝수 첨자 $_{15}\mathrm{C}_r$ 의 합) 나누기 ($_9\mathrm{C}_0$ 부터 $_9\mathrm{C}_4$ 까지의 합) $=2^n$ 일 때 자연수 $n$ 의 값.
  category: "분자는 짝수항 합 $2^{n-1}$ → 분모는 대칭으로 전체의 절반 → 지수 비교"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "짝수 첨자만의 합이 전체 합의 절반인 $2^{14}$ 임을 적용한다"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모는 $_9\\mathrm{C}_r={}_9\\mathrm{C}_{9-r}$ 대칭으로 앞 절반의 합이 전체의 절반 $2^8$ 임을 본다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "홀수항·짝수항 합과 대칭성으로 2^n 꼴 만들기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자는 알려진 성질(짝수 첨자 합 $=2^{n-1}$)의 직접 적용이지만, 분모는 '앞에서 다섯 항' 이라는 낯선 모양이라 대칭성을 써야 절반임이 보인다.
    두 값을 모두 2의 거듭제곱으로 만든 뒤 지수를 빼면 끝. 통찰 2개·M_total 6 → 벤더 「중」 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "분자 $=2^{14}$ · 분모는 대칭으로 $=2^8$ → 몫 $2^6$ → $n$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 위 첨자(15·9)를 바꿀 수 있다. 제약: 분모의 위 첨자가 홀수여야 대칭으로 정확히 절반이 되고, 짝수이면 가운데 항이 남아 절반이 되지 않는다."
    creative: "(1) 분모의 위 첨자를 짝수로 바꿔 가운데 항 보정이 필요하게 만들기(★4) (2) 분자를 홀수 첨자 합으로 바꾸기(★3 유지) (3) $2^n$ 대신 $4^n$ 꼴로 답하게 해 지수 표기 변환을 추가하기(★3)."
```

### 유형 UP 16 최단 거리로 가는 경우의 수 (2)

```yaml
- id: RPM-PROB-0094
  page: 17
  vendor_label: "유형 UP 16 최단 거리로 가는 경우의 수 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    직사각형 두 덩이가 계단처럼 어긋나게 붙은 도로망에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "온전한 격자가 아님 → 이음목 지점을 기준으로 분할 → 구간별 경우의 수를 곱·합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "길이 없는 칸이 있어 조합 공식을 한 번에 쓸 수 없으므로 각 교차점에 도달 경우의 수를 적어 누적하는 표현으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리로 가는 경우의 수(도로망 분할·누적)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직사각형 격자라면 $\dfrac{(m+n)!}{m!\,n!}$ 한 줄이지만, 이 도로망은 두 덩이가 어긋나 붙어 있어 공식을 그대로 쓸 수 없다.
    두 덩이가 만나는 경계의 각 점까지 경우의 수를 구하고 거기서 다시 B 까지를 곱해 더하거나, 교차점마다 수를 적어 누적한다.
    경계 위의 점을 빠뜨리거나 중복해서 세는 것이 함정(T-범위). 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "이음목 경계의 점별로 A→점 경우의 수 × 점→B 경우의 수 → 합(또는 교차점 누적)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$27$'
  answer_source: "답지"
  figure: 'crop:fig-0094.png'
  latex: latex-bank/rpm-prob/items/0094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 덩이의 가로·세로 칸 수와 겹치는 위치를 바꿀 수 있다. 제약: 그림이 곧 조건이므로 A·B 라벨과 칸 구조를 함께 바꿔야 하고, 최단 경로가 실제로 존재하도록 두 덩이가 한 점 이상에서 이어져야 한다."
    creative: "(1) 겹치는 구간을 넓혀 이음목 점을 늘리기(★3 유지) (2) 특정 지점을 반드시 지나게 하기(★3) (3) 특정 도로 한 구간을 공사로 막으면 여사건 갈래가 생겨 ★4 (4) 덩이를 셋으로 늘리기(★4)."
```

```yaml
- id: RPM-PROB-0095
  page: 17
  vendor_label: "유형 UP 16 최단 거리로 가는 경우의 수 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    평행사변형 모양으로 기울어진 도로망(위·아래 구역은 세로줄이 촘촘하고 가운데 구역은 성긴 구조)에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "구역마다 세로줄 개수가 다름 → 구역 경계의 점별 경우의 수 → 곱·합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기울어진 그림이라도 '오른쪽·아래' 두 방향의 배열 문제임을 알아보고 구역별 누적으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리로 가는 경우의 수(도로망 분할·누적)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    도형이 기울어져 있을 뿐 최단 경로는 여전히 두 방향 배열이며, 구역마다 세로줄 수가 달라 한 번의 조합으로 끝나지 않는다.
    가로 경계선 위의 각 점까지 경우의 수를 적어 내려가며 누적하면 B 에서 답이 나온다.
    기울어진 그림 때문에 '방향'을 잘못 잡는 것이 함정(T-표기). 유형 UP 출발점 ★3 유지(벤더 level 은 「중」).
  tier: star_3
  mechanism_primary: "구역 경계선의 각 점까지 누적 → 다음 구역의 세로줄 수에 맞춰 다시 누적 → B"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$31$'
  answer_source: "답지"
  figure: 'crop:fig-0095.png'
  latex: latex-bank/rpm-prob/items/0095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구역 수와 각 구역의 세로줄 개수를 바꿀 수 있다. 제약: 그림 라벨(A·B 위치)은 고정하고, 세로줄이 이어지지 않는 지점에서 경로가 끊기지 않는지 확인한다."
    creative: "(1) 가운데 구역의 세로줄을 더 성기게 해 누적값 차이를 키우기(★3 유지) (2) 기울어진 표현을 직각 격자로 펴서 같은 문제를 내면 체감 ★2 (3) 한 점을 반드시 지나게 하거나 한 구간을 막기(★4)."
```

```yaml
- id: RPM-PROB-0096
  page: 17
  vendor_label: "유형 UP 16 최단 거리로 가는 경우의 수 (2)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    5×5 격자 도로망 한가운데에 호수가 있어 일부 도로가 없을 때 왼쪽 아래 A 지점에서 오른쪽 위 B 지점까지 최단 거리로 가는 경우의 수.
  category: "막힌 구간 제외 → 교차점 누적(또는 전체에서 호수 통과 경로를 뺀 여사건)"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끊긴 도로가 있는 격자를 교차점마다 도달 경우의 수를 적는 누적 표현으로 옮긴다"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직접 누적하는 갈래와 전체 경로에서 호수를 지나는 경로를 빼는 여사건 갈래 중 빠른 쪽을 고른다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리로 가는 경우의 수(도로망 분할·누적)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    호수가 격자 한가운데를 불규칙하게 가려 조합 공식도, 단순 분할도 바로 쓸 수 없다. 사라진 교차점과 사라진 변을 각각 0으로 두고 누적하는 것이 가장 안전하다.
    여사건으로 가려면 '호수를 지나는 경로' 를 중복 없이 정의해야 해서 갈래 선택이 실제로 속도를 가른다.
    막힌 변의 끝점을 살아 있는 점으로 착각하는 것이 함정(T-범위·T-경계). 통찰 2개·M_total 8 → 유형 UP 출발점 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "호수로 끊긴 변·점을 0으로 두고 교차점 누적 → B 의 누적값"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$54$'
  answer_source: "답지"
  figure: 'crop:fig-0096.png'
  latex: latex-bank/rpm-prob/items/0096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(4×4·6×6)와 호수가 가리는 칸의 위치·개수를 바꿀 수 있다. 제약: 그림이 조건이므로 호수 모양을 바꾸면 크롭도 함께 바꿔야 하고, A 에서 B 로 가는 경로가 적어도 하나 남아야 한다."
    creative: "(1) 호수를 모서리 쪽으로 옮기면 여사건이 쉬워져 ★3 (2) 호수를 둘로 나누면 여사건이 포함배제가 되어 ★5 후보 (3) '호수에 가장 가까이 붙어 가는 경로의 수' 처럼 조건을 바꾸면 골조가 달라진다."
```

```yaml
- id: RPM-PROB-0097
  page: 17
  vendor_label: "유형 UP 16 최단 거리로 가는 경우의 수 (2)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    왼쪽 아래에서 오른쪽 위로 계단처럼 층이 올라가는 도로망에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "계단형이라 층마다 폭이 다름 → 층 경계의 점별 누적 → B"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계단 모양이라 직사각형 공식을 못 쓰므로 층 경계의 각 점에 도달 경우의 수를 적어 누적하는 표현으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리로 가는 경우의 수(도로망 분할·누적)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    층이 올라갈수록 왼쪽 칸이 없어지므로 각 층의 시작점은 도달 경우의 수가 0 이거나 아래층에서만 올라올 수 있다.
    아래층부터 교차점 누적을 쌓아 올리면 B 에서 답이 나오고, 분할해서 곱·합으로 처리해도 같다.
    층 경계에서 존재하지 않는 점을 세는 것이 함정(T-범위). 통찰 1개·M_total 7 이지만 출발점이 ★3(유형 UP)이라 +1 조건(통찰 2개·M_total 8)을 못 채워 ★3 유지.
  tier: star_3
  mechanism_primary: "아래층부터 교차점 누적 → 계단 경계에서 없는 점은 0 → B 의 누적값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$42$'
  answer_source: "답지"
  figure: 'crop:fig-0097.png'
  latex: latex-bank/rpm-prob/items/0097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "층 수와 각 층의 칸 수를 바꿀 수 있다. 제약: 그림이 조건이라 크롭과 함께 바꿔야 하고, 계단이 한 칸씩 줄어드는지 두 칸씩 줄어드는지에 따라 답이 크게 달라진다."
    creative: "(1) 계단을 대칭으로 만들어 위아래 두 갈래를 묶게 하면 I-SYM 이 붙어 ★4 (2) 한 층을 통째로 막기(★4) (3) 계단을 정삼각형 배열로 바꾸면 파스칼의 삼각형과 직접 연결돼 I-XU 가 붙는다(★4)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 1 · ★2 20 · ★3 12 · ★4 1 · ★5 0
- 통찰형 16 · 절차형 18 · premium 0 (통찰 라벨이 하나라도 붙은 문항은 21문)
- 통찰 유형 분포: I-RT 8 · I-EQV 8 · I-VF 3 · I-MI 1 · I-BW 1 · I-PD 1 · I-SYM 1 · I-SC 1 (총 24 라벨)
- type_hint 상위 5: 「최단 거리로 가는 경우의 수(도로망 분할·누적)」 4 · 「하한 조건이 있는 중복조합/정수해」 3(0064·0067·0070) · 「특정 항 계수로 미지수 구하기」 3(0075·0081·0084) · 「단조함수의 개수(중복조합)」 3(0072·0073·0074) · 「파스칼 정리 연쇄」 3(0086·0087·0088)
- 구역별 ★ 중앙값: 유형 08~10 ★2 · 유형 11~13 ★2 · 유형 14~15 ★2~3 · 유형 UP 16 ★3
- 그림: 4문(`crop:fig-0094.png` · `crop:fig-0095.png` · `crop:fig-0096.png` · `crop:fig-0097.png`) — 모두 도로망이 곧 조건이라 크롭을 확인해 구조를 반영했다.
- 답 출처: 전사본 그대로. 0085·0090~0093 은 `답지(쪽 렌더)`, 나머지는 `답지`. 골조를 잡는 과정에서 answer 와 어긋나는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서는 벤더 신호와 2단 이상 어긋난 문항이 없었다. 1단 차이(0065 「중하」→★1, 0071·0091·0092·0093 「중」→★3, 0096 「상중」→★4)는 M_total·통찰에 따른 정상 ±1 조정이라 이슈로 올리지 않았다 | - |

참고로 ★ 조정 판단이 갈릴 수 있는 지점은 다음 셋이며, 카탈로그가 생기면 base ★ 로 재산정할 대상이다.

- 0081·0083: 통찰 0 이지만 M_total 8·산술량이 커 체감은 ★3 쪽. v3.8 의 「계산 마찰은 ★ 상승 신호 아님」에 따라 ★2 로 두었다.
- 0088: 없는 항을 더했다 빼는 착안(I-EQV d2)이 없으면 선택지의 $\pm 1$ 을 가르지 못한다. 규칙상 ★2 지만 체감은 ★3 쪽.
- 0078·0089: 통찰 2개이나 출발점이 ★3 이라 +1 을 적용하지 않았다. 출발 ★3 이상에서의 +1 기준(통찰 2개 AND M_total 8 이상)을 카탈로그 도입 때 재검토할 것.

### 카탈로그 차원 메모

이 범위에서 반복된 type_hint 와, 나중에 확률과 통계 유형 카탈로그를 만들 때의 제안이다.

- **따로 세워야 할 유형**
  - 「중복조합의 하한 조건 치환」(0064·0067·0070): 상황은 볼펜·접시·방정식으로 다르지만 골조가 완전히 같다. 하나의 유형으로 묶되 **상한이 섞이는 경우(여사건 필요)는 별도 유형**으로 분리해야 한다. base ★ 가 2와 3으로 갈린다.
  - 「단조함수의 개수」(0072·0073·0074): 순수 단조(0072)와 고정 함숫값·독립 구간이 섞인 복합형(0073·0074)은 base ★ 가 한 단 차이라 **기본형/복합형 두 유형**으로 세우는 것이 좋다.
  - 「파스칼 연쇄로 조합 합 간단화」(0086·0088·0089): 보정 없이 바로 연쇄되는 경우(0086)와 없는 항을 만들어 넣는 경우(0088·0089)는 학생 체감이 다르다. **보정형을 따로** 세울 것.
  - 「최단 거리(2)」(0094~0097): 이음목형(0094·0095) · 장애물형(0096) · 계단형(0097)로 나뉜다. 장애물형만 여사건 갈래(I-SC)가 생기므로 **장애물형은 별도 유형**으로, 나머지는 하나로 통합 가능.
- **통합해도 될 유형**
  - 유형 11·12·13(0075~0085)은 모두 「일반항으로 차수를 맞춰 계수를 읽는다」는 한 골조이고, 앞 괄호의 항 수(1개/2개/3개)와 두 번째 괄호 유무만 다르다. **「이항전개의 특정 항 계수」 하나로 묶고 갈래 수를 난이도 파라미터로** 두는 편이 카탈로그가 간결해진다.
  - 유형 09(0068~0070)는 유형 08 중복조합과 실질적으로 같은 도구를 쓴다. **「중복조합 = 방정식의 음이 아닌 정수해」 한 유형**으로 통합하고, 부등식(0069)과 제곱항 분기(0071)만 파생 유형으로 남긴다.
- **카탈로그 설계 시 주의**: 이 범위의 ★3 는 대부분 「알려진 성질에 누락 항·부호·대칭 보정이 한 겹 붙은 것」(0078·0088·0091·0092·0093)이다. 보정 한 겹이 base ★ 를 +1 하는지, 아니면 같은 유형 안의 변형으로 볼지를 카탈로그에서 먼저 정해야 이 단원의 ★3 개수가 안정된다.
