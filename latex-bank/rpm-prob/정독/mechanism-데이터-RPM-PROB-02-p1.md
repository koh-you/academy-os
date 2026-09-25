---
name: mechanism-데이터-RPM-PROB-02-p1
description: RPM 확률과 통계 02 확률의 뜻과 활용(1/3 · 교과서 02-1 시행과 사건 ~ 유형 04 중복순열을 이용하는 확률) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 02 확률의 뜻과 활용
  unit_code: PROB-02
  part: "1/3"
  extract_range: "25~29쪽 · 0136~0166"
  total_problems: 31
  unit_total: 99
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 02 확률의 뜻과 활용 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 02 확률의 뜻과 활용의 첫 범위(25~29쪽 · 0136~0166 · 31문 · 9구역)를 다룬다. 교과서 02-1 시행과 사건 ~ 02-5 여사건의 확률 다섯 구역 16문과 유형 01 배반사건 ~ 유형 04 중복순열을 이용하는 확률 네 구역 15문으로 구성된다. RPM 의 벤더 난이도 신호는 구역(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up)과 문항별 난이도(하·중하·중·상중·상), 태그(대표문제·중요·서술형·기출)로 나타난다. 이 범위에는 대표문제 4 · 중 11 · 서술형 태그 2 가 있고 난이도 표시가 없는 교과서 문항이 16, 그림 문항은 2(0142 과녁 · 0153 벤다이어그램)다. 단원의 도입부라 유형 UP·시험에 꼭 나오는 문제·실력 Up 구역은 이 범위에 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 교과서 ★1 · 유형 대표문제(난이도 없음) ★2 · 중 ★2 이고, 통찰 2개 이상 또는 depth 3 일 때만 +1 을 적용했다(교과서 구역은 ★1 이 하한이라 −1 을 쓰지 않았다). (2) 이 단원의 표준 도구(경우의 수의 비로서의 수학적 확률·덧셈정리·여사건·묶음 순열·중복순열)는 통찰로 세지 않고 mechanism_primary 에만 적었으며, 조건을 다른 표현으로 옮겨야 진행되는 손질(여사건 전환·배반 조건을 부분집합 조건으로 바꾸기·허근을 판별식 부등식으로 바꾸기·크기 조건을 자리별 조건으로 바꾸기)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 집합·사건·함수를 문자로 다루는 문항(0153 0154 0157 0166)은 Mₐ 를 2 로 두었다.

## 문항 데이터

### 교과서 02-1 시행과 사건

```yaml
- id: RPM-PROB-0136
  page: 25
  vendor_label: "교과서 02-1 시행과 사건"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위 한 개를 한 번 던지는 시행에서 ⑴~⑷ 표본공간 · 근원사건 · 짝수의 눈이 나오는 사건 · 6의 약수의 눈이 나오는 사건을 원소로 나타내기.
  category: "시행의 표본공간 나열 → 조건에 맞는 원소 골라 사건으로 쓰기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본공간·근원사건·사건을 원소로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표본공간 {1,…,6} 을 쓰고 근원사건은 원소 하나짜리 여섯 개, 나머지는 조건에 맞는 원소를 고르면 끝난다. 정의 확인 한 단계라 통찰 없음·M_total 4 → 교과서 구역 출발점 ★1.
  tier: star_1
  mechanism_primary: "표본공간 {1,…,6} → 조건(짝수 · 6의 약수)에 맞는 원소 선택 → 사건 집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\{1,\,2,\,3,\,4,\,5,\,6\}$ (2) $\{1\}$, $\{2\}$, $\{3\}$, $\{4\}$, $\{5\}$, $\{6\}$ (3) $\{2,\,4,\,6\}$ (4) $\{1,\,2,\,3,\,6\}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위를 동전 두 개·카드 5장 같은 다른 시행으로, 조건을 3의 배수·4 이상 등으로 바꿀 수 있음. 제약: 표본공간의 크기를 10 이하로 유지해 원소 나열이 가능해야 하고, 근원사건을 묻는 소문항이 있으므로 표본공간 원소가 모두 대등해야 함."
    creative: "(1) 사건을 주고 조건을 말로 쓰게 하기(역방향 · ★1 유지) (2) 두 시행을 겹쳐 표본공간이 순서쌍이 되게 하면 Mₛ 상승 ★2 (3) 근원사건의 개수를 묻는 형태로 바꾸면 경우의 수와 결합 ★2."
```

```yaml
- id: RPM-PROB-0137
  page: 25
  vendor_label: "교과서 02-1 시행과 사건"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1~10 이 적힌 카드 10장에서 한 장을 뽑을 때 A=3의 배수, B=9의 약수라 하고 ⑴~⑷ 합집합 · 교집합 · 두 여사건을 원소로 나타내기.
  category: "두 사건을 원소로 쓰기 → 집합 연산(합·교·여집합) 수행"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사건의 합집합·교집합·여사건을 원소로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={3,6,9}, B={1,3,9} 를 먼저 쓰면 네 소문항이 집합 연산 한 번씩이다. 여사건은 표본공간 {1,…,10} 기준이라는 것만 확인하면 되고 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A·B 를 원소로 나열 → 합·교집합 계산 → 표본공간 기준 여집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\{1,\,3,\,6,\,9\}$ (2) $\{3,\,9\}$ (3) $\{1,\,2,\,4,\,5,\,7,\,8,\,10\}$ (4) $\{2,\,4,\,5,\,6,\,7,\,8,\,10\}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수(12·15·20)와 두 조건(4의 배수·소수·완전제곱수)을 바꿀 수 있음. 제약: 두 사건의 교집합이 비지 않아야 합집합·교집합 소문항이 의미를 가지고, 여사건 소문항 때문에 표본공간 크기를 나열 가능한 범위로 둔다."
    creative: "(1) 여집합끼리의 연산(A의 여집합 ∩ B)을 추가하면 드모르간 확인 ★2 (2) 세 번째 사건 C 를 넣어 세 집합 연산으로 확장 ★2 (3) 원소를 주고 사건의 조건을 찾게 하면 역방향 ★2."
```

```yaml
- id: RPM-PROB-0138
  page: 25
  vendor_label: "교과서 02-1 시행과 사건"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    동전 한 개를 두 번 던질 때 A=서로 다른 면, B=적어도 한 개는 뒷면, C=모두 앞면이라 할 때 서로 배반인 두 사건을 모두 찾기.
  category: "표본공간 나열 → 세 사건을 원소로 쓰기 → 쌍마다 교집합이 공집합인지 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건 찾기(동전 시행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표본공간 네 개를 쓰고 A·B·C 를 원소로 옮기면 세 쌍의 교집합을 눈으로 확인할 수 있다. 「적어도 한 개는 뒷면」을 모두 앞면의 여사건으로 읽는 것이 유일한 함정(T-범위)이며 통찰로 셀 만큼은 아니다. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "표본공간 4개 나열 → A·B·C 원소화 → 쌍별 교집합이 공집합인지 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$A$와 $C$, $B$와 $C$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 두 번을 세 번(표본공간 8개)으로 늘리거나 주사위 한 번으로 바꿀 수 있음. 제약: 배반인 쌍이 적어도 하나는 남아야 하고 표본공간이 8개를 넘으면 나열이 부담이 되어 Mₖ 가 오른다."
    creative: "(1) 배반이 아닌 쌍을 고르게 하는 반대 발문(★1 유지) (2) 세 사건 중 어느 둘도 배반이 아니게 만들고 이유를 쓰게 하면 서술형 ★2 (3) 사건 하나를 「적어도」 형태로만 주고 여사건 표현을 요구하면 I-EQV 가 붙어 ★2."
```

### 교과서 02-2 확률

```yaml
- id: RPM-PROB-0139
  page: 25
  vendor_label: "교과서 02-2 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    주사위를 던질 때 A=홀수의 눈, B=소수의 눈이라 하고 ⑴~⑷ P(A), P(B), P(A∪B), P(A∩B) 구하기.
  category: "두 사건의 원소 나열 → 경우의 수의 비로 확률 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 확률의 뜻 — 경우의 수의 비"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={1,3,5}, B={2,3,5} 를 쓰면 합집합·교집합 원소를 세어 6으로 나누는 것이 전부다. 덧셈정리를 쓰지 않고 직접 세도 되는 교과서 도입 문항이라 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A·B 원소 나열 → 합집합·교집합 원소 수 → 6으로 나누기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{2}$ (2) $\dfrac{1}{2}$ (3) $\dfrac{2}{3}$ (4) $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조건(홀수·소수)을 3의 배수·4 이하 등으로 바꾸거나 주사위를 8면체·10장 카드로 바꿀 수 있음. 제약: 교집합이 비면 ⑷ 가 0 이 되어 덧셈정리 확인 의도가 사라지므로 두 사건이 겹치게 둔다."
    creative: "(1) P(A∪B) 만 주고 P(A∩B) 를 묻는 역방향(★2) (2) 여사건 확률을 소문항에 추가(★1 유지) (3) 주사위 두 개로 바꾸면 표본공간 36 으로 커져 Mₖ 상승 ★2."
```

```yaml
- id: RPM-PROB-0140
  page: 25
  vendor_label: "교과서 02-2 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A~E 5명을 일렬로 세울 때 ⑴ A를 가장 앞에 세울 확률 ⑵ D, E를 이웃하게 세울 확률.
  category: "전체 5! → 조건을 만족시키는 순열의 수(자리 고정 · 묶음) → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열을 이용한 기본 확률(자리 고정·이웃)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 A 를 고정하고 나머지 4!, ⑵ 는 D·E 를 한 덩어리로 묶어 4!×2! 를 5! 로 나눈다. 묶음 순열은 이 단원의 표준 도구라 통찰로 세지 않았다. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "전체 5! → A 고정 4! · D·E 묶음 4!×2! → 각각 5! 로 나누기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{5}$ (2) $\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수 5를 4~7로, 이웃 묶음의 크기를 2에서 3으로 바꿀 수 있음. 제약: 묶음 크기를 키우면 (n-k+1)!×k! 가 되어 답이 여전히 간단한 분수가 되도록 n 을 고르고, 확률이 1을 넘지 않는지 확인."
    creative: "(1) 「A를 가장 앞 또는 가장 뒤」로 바꾸면 배반 두 경우의 덧셈 ★2 (2) 「D, E가 이웃하지 않을 확률」로 바꾸면 여사건 I-EQV ★2 (3) 두 조건을 동시에 요구하면 조건 결합으로 ★3."
```

```yaml
- id: RPM-PROB-0141
  page: 25
  vendor_label: "교과서 02-2 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    백신을 10000명에게 투여해 9900명에게 항체가 생겼을 때 항체가 생길 확률(통계적 확률) 구하기.
  category: "상대도수 → 통계적 확률로 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "통계적 확률(상대도수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    9900/10000 을 약분하면 끝난다. 시행 횟수가 충분히 크면 상대도수를 확률로 본다는 정의 확인 한 단계이며 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "상대도수 9900/10000 → 약분 → 99/100"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{99}{100}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 수와 해당 수를 (2000, 1960) 같이 바꿀 수 있음. 제약: 약분 결과가 간단한 분수나 소수로 떨어져야 하고 전체 수는 통계적 확률로 볼 만큼 충분히 커야 한다."
    creative: "(1) 항체가 생기지 않을 확률을 묻는 여사건 형태(★1 유지) (2) 확률을 주고 항체가 생긴 인원을 역산하게 하면 I-BW ★2 (3) 두 집단의 상대도수를 주고 합쳤을 때의 확률을 묻는 형태로 바꾸면 가중평균 ★3."
```

```yaml
- id: RPM-PROB-0142
  page: 25
  vendor_label: "교과서 02-2 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    4등분된 정사각형 모양의 과녁(그림)에 화살을 쏠 때 4가 적힌 영역을 맞힐 확률(기하적 확률).
  category: "영역의 넓이 비 → 기하적 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기하적 확률(넓이의 비)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4등분이므로 해당 영역의 넓이가 전체의 1/4. 경계선에 맞지 않는다는 단서로 경계 처리 고민을 없앤 교과서 도입 문항이며 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4등분된 과녁 → 해당 영역 넓이/전체 넓이 → 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: "crop:fig-0142.png"
  latex: latex-bank/rpm-prob/items/0142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등분 수(4→6·8)나 영역 개수를 바꿀 수 있음. 제약: 그림 라벨(영역에 적힌 수)과 등분 수가 반드시 함께 바뀌어야 하며, 등분이 균등하지 않으면 넓이를 따로 제시해야 한다."
    creative: "(1) 같은 수가 두 영역에 적히게 해 합사건 확률로(★2) (2) 동심원 과녁으로 바꿔 반지름 비 → 넓이 비 전환을 요구하면 I-RT ★2 (3) 「3 이상이 적힌 영역」처럼 조건을 범위로 주면 ★2."
```

### 교과서 02-3 확률의 기본 성질

```yaml
- id: RPM-PROB-0143
  page: 27
  vendor_label: "교과서 02-3 확률의 기본 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1~10 이 적힌 카드 10장에서 한 장을 뽑을 때 ⑴ 0이 적힌 카드가 나올 확률 ⑵ 자연수가 적힌 카드가 나올 확률.
  category: "사건이 공사건인지 전사건인지 판별 → 확률 0 또는 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 기본 성질 — 공사건과 전사건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0 은 카드에 없으므로 공사건, 1~10 은 모두 자연수이므로 전사건. 계산 없이 성질을 확인하는 교과서 도입 문항이라 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "0 이 적힌 카드 없음 → 공사건 0 · 모두 자연수 → 전사건 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "(1) $0$ (2) $1$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위(1~10)와 묻는 조건(11 이상·정수·소수)을 바꿀 수 있음. 제약: 한 소문항은 공사건, 다른 하나는 전사건이 되도록 조건을 고른다."
    creative: "(1) 확률이 0 인 사건과 절대 일어나지 않는 사건의 관계를 묻는 참·거짓(★2) (2) 조건을 「10 이하의 자연수 또는 0」처럼 섞어 전사건 판정을 요구(★1 유지) (3) 확률값만 주고 가능한 조건을 찾게 하면 I-BW ★2."
```

```yaml
- id: RPM-PROB-0144
  page: 27
  vendor_label: "교과서 02-3 확률의 기본 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    서로 다른 두 개의 주사위를 던질 때 ⑴ 두 눈의 수의 곱이 40 이하일 확률 ⑵ 두 눈의 수의 합이 1일 확률.
  category: "조건의 최댓값·최솟값 확인 → 전사건 또는 공사건 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 기본 성질 — 항상 일어나는 사건과 일어나지 않는 사건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 최댓값이 36 이라 40 이하는 항상 성립(전사건), 합의 최솟값이 2 라 1 은 불가능(공사건). 36가지를 세지 않고 극값만 보면 되는 것이 요령이지만 교과서 구역의 의도된 확인이라 통찰로 세지 않았다. M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "곱 최댓값 36 ≤ 40 → 전사건 1 · 합 최솟값 2 > 1 → 공사건 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "(1) $1$ (2) $0$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 40·1 을 36 이상·13 이상 등으로 바꿀 수 있음. 제약: 기준값이 곱의 최댓값 36, 합의 범위 2~12 밖에 있어야 답이 0 또는 1 로 떨어진다. 기준을 범위 안으로 옮기면 세기 문제로 성격이 바뀐다."
    creative: "(1) 기준을 경계값(곱이 36 이하 vs 36 미만)으로 두어 T-경계를 살리면 ★2 (2) 주사위를 세 개로 늘려 최댓값 216 으로 확장(★1 유지) (3) 「확률이 1인 사건을 모두 고르시오」 보기형으로 바꾸면 ★2."
```

### 교과서 02-4 확률의 덧셈정리

```yaml
- id: RPM-PROB-0145
  page: 27
  vendor_label: "교과서 02-4 확률의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    P(A), P(B), P(A∩B) 가 주어졌을 때 P(A∪B) 구하기.
  category: "확률의 덧셈정리에 그대로 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 — P(A∪B) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(A∪B)=P(A)+P(B)−P(A∩B) 에 분수를 대입해 통분하면 끝. 공식 한 줄이라 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(A)+P(B)−P(A∩B) 에 대입 → 통분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{11}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률값을 바꿀 수 있음. 제약: P(A∩B) ≤ min(P(A), P(B)) 이고 P(A∪B) ≤ 1 이어야 하며, 분모가 서로 다른 분수로 두면 통분 연습이 살아난다."
    creative: "(1) 여사건 확률을 섞어 P(A의 여사건)을 주면 한 단계 추가 ★2 (2) 세 사건으로 확장하면 포함배제 ★3 (3) 배반 여부를 판단하게 하면 ★2."
```

```yaml
- id: RPM-PROB-0146
  page: 27
  vendor_label: "교과서 02-4 확률의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    P(A), P(B), P(A∪B) 가 주어졌을 때 P(A∩B) 구하기.
  category: "덧셈정리를 P(A∩B) 에 대해 이항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 — P(A∩B) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 공식을 P(A∩B)=P(A)+P(B)−P(A∪B) 로 옮겨 대입한다. 0145 의 역방향이지만 이항 한 번이라 통찰로 세지 않았다. M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "덧셈정리 이항 → P(A)+P(B)−P(A∪B) 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{30}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값을 바꿀 수 있음. 제약: P(A)+P(B)−P(A∪B) 가 0 이상이고 min(P(A),P(B)) 이하가 되도록 고른다(음수가 나오면 모순 조건)."
    creative: "(1) 미지수를 하나 두고 P(A∩B)=0 이 되는 값을 찾게 하면 배반 조건 I-BW ★2 (2) 네 값 중 하나를 미지수로 둔 방정식 형태 ★2 (3) 벤다이어그램으로 영역 확률을 묻는 형태로 바꾸면 I-RT ★2."
```

```yaml
- id: RPM-PROB-0147
  page: 27
  vendor_label: "교과서 02-4 확률의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 사건 A, B가 서로 배반이고 P(A)=0.3, P(A∪B)=0.7 일 때 P(B) 구하기.
  category: "배반 → P(A∪B)=P(A)+P(B) → 빼기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건의 덧셈정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    배반이면 P(A∩B)=0 이므로 덧셈정리가 단순 합이 되고 0.7−0.3 한 번. 배반 조건이 발문에 명시돼 있어 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "배반 → P(A∩B)=0 → P(B)=P(A∪B)−P(A)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 소수값을 바꿀 수 있음. 제약: P(A) < P(A∪B) ≤ 1 이어야 하고 배반이므로 P(A)+P(B) ≤ 1."
    creative: "(1) 배반 조건을 빼고 P(A∩B) 를 주면 0145 와 같은 골조(★1) (2) 「배반일 때 P(B)의 최댓값」을 물으면 범위 사고 ★2 (3) 세 사건이 서로 배반인 경우로 확장 ★2."
```

```yaml
- id: RPM-PROB-0148
  page: 27
  vendor_label: "교과서 02-4 확률의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1~40 이 적힌 공 40개에서 한 개를 꺼낼 때 ⑴ 3의 배수 또는 4의 배수일 확률 ⑵ 5의 배수 또는 9의 배수일 확률.
  category: "배수의 개수 세기 → 덧셈정리(공배수 빼기 · 배반이면 단순 합)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배수 사건의 덧셈정리(또는)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 3의 배수 13개 + 4의 배수 10개 − 12의 배수 3개, ⑵ 는 45의 배수가 40 이하에 없어 배반이라 그냥 더한다. 두 소문항이 「겹침이 있는 경우/없는 경우」를 대비시키는 교과서 배치이고 개수 세기가 표준이라 통찰로 세지 않았다. M_total 6 이지만 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "각 배수의 개수 → 공배수 개수 빼기(⑵ 는 공배수 없음 → 배반) → 40으로 나누기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{1}{2}$ (2) $\dfrac{3}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수(40→50·60)와 두 배수(3·4, 5·9)를 바꿀 수 있음. 제약: 한 소문항은 최소공배수가 범위 안에 있어 겹침이 생기고 다른 소문항은 최소공배수가 범위 밖이어야 대비가 살아난다. 답이 약분되도록 전체 개수를 고른다."
    creative: "(1) 「3의 배수도 4의 배수도 아닐 확률」로 바꾸면 여사건 I-EQV ★2 (2) 세 배수로 늘리면 포함배제 3항 ★3 (3) 배수 대신 「끝자리가 0 또는 5」처럼 자릿수 조건으로 바꾸면 세는 방법이 달라져 ★2."
```

### 교과서 02-5 여사건의 확률

```yaml
- id: RPM-PROB-0149
  page: 27
  vendor_label: "교과서 02-5 여사건의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    P(A)=1/6 일 때 여사건의 확률 P(A의 여사건) 구하기.
  category: "여사건의 확률 = 1 − P(A)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1−1/6 한 번. 정의 확인 문항이라 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1 − P(A) → 5/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 값을 다른 분수·소수로 바꿀 수 있음. 제약: 0 ≤ P(A) ≤ 1."
    creative: "(1) 여사건 확률을 주고 P(A) 를 묻는 역방향(★1 유지) (2) P(A)와 P(A의 여사건)의 비를 주고 값을 찾게 하면 방정식 ★2 (3) 구체적 시행을 붙여 사건을 먼저 찾게 하면 ★2."
```

```yaml
- id: RPM-PROB-0150
  page: 27
  vendor_label: "교과서 02-5 여사건의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    서로 다른 동전 3개를 동시에 던질 때 적어도 한 개는 앞면이 나올 확률을 구하는 과정의 빈칸(여사건·그 확률·최종 확률) 채우기.
  category: "「적어도」 → 여사건(모두 뒷면) → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률 — 적어도 조건(빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모두 뒷면은 8가지 중 1가지라 1/8, 답은 7/8. 여사건으로 바꾸는 착안이 이 골조의 핵심이지만 빈칸이 그 순서를 그대로 안내하므로 학생이 고를 여지가 없어 통찰로 세지 않았다. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "적어도 한 개 앞면의 여사건 = 모두 뒷면 → 1/8 → 1 − 1/8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\comp{A}$, $\comp{A}$, $\dfrac{1}{8}$, $\dfrac{7}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수 3을 4·5로 바꾸면 1/16, 1/32 가 된다. 제약: 빈칸 개수와 문장 구조가 고정돼 있으므로 바꿀 때 각 빈칸의 값이 모두 다시 계산돼야 한다."
    creative: "(1) 빈칸을 없애고 바로 확률을 묻는 형태로 바꾸면 여사건 착안이 학생 몫이 되어 I-EQV d1 ★2 (2) 「적어도 두 개는 앞면」으로 바꾸면 여사건이 두 경우의 합이 되어 ★2 (3) 주사위로 바꿔 「적어도 한 번은 6」 형태로 확장 ★2."
```

```yaml
- id: RPM-PROB-0151
  page: 27
  vendor_label: "교과서 02-5 여사건의 확률"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    서로 다른 두 개의 주사위를 던질 때 ⑴ 두 눈의 수의 곱이 홀수일 확률 ⑵ 곱이 짝수일 확률.
  category: "곱이 홀수 = 둘 다 홀수 → ⑵ 는 그 여사건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱이 짝수인 경우를 직접 세지 않고 「곱이 홀수」의 여사건으로 바꿔 1에서 빼기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건의 확률 — 곱이 홀수/짝수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱이 홀수이려면 두 눈이 모두 홀수라 3×3=9, 9/36=1/4. ⑵ 는 짝수가 되는 27가지를 세는 대신 여사건으로 1−1/4. ⑴ 이 ⑵ 의 사다리가 되도록 배치된 교과서 문항이라 여사건 전환(EQV d1) 하나만 라벨링하고 ★1 유지.
  tier: star_1
  mechanism_primary: "곱이 홀수 ⟺ 두 눈 모두 홀수 → 9/36 → ⑵ 는 1에서 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $\dfrac{1}{4}$ (2) $\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위를 두 개에서 세 개로 늘리면 (1/2)^3, 8면체로 바꾸면 분모가 64 가 된다. 제약: 홀수·짝수 눈의 개수가 같아야 답이 간단한 분수가 되고, 곱의 홀짝은 한 개라도 짝수면 짝수라는 구조가 유지돼야 한다."
    creative: "(1) 합이 짝수/홀수로 바꾸면 홀짝 조합이 두 경우가 되어 ★2 (2) 「곱이 4의 배수」로 바꾸면 여사건이 단순하지 않아 경우 분기 ★3 (3) 주사위 세 개에서 「곱이 짝수」를 물으면 여사건 착안이 필수라 ★2."
```

### 유형 01 배반사건

```yaml
- id: RPM-PROB-0152
  page: 28
  vendor_label: "유형 01 배반사건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    주사위를 던지는 시행에서 A=짝수, B=홀수, C=3의 배수일 때 보기 ㄱ(A와 B) ㄴ(A와 C) ㄷ(B와 C) 중 서로 배반인 것 모두 고르기.
  category: "세 사건을 원소로 쓰기 → 쌍별 교집합이 공집합인지 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건 판정(교집합이 공집합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={2,4,6}, B={1,3,5}, C={3,6} 을 쓰면 A∩B 만 공집합. C 가 짝수 6 과 홀수 3 을 모두 가져 나머지 두 쌍이 배반이 아님을 보이는 배치다. 통찰 없음·M_total 4 이지만 유형의 기준 문항(대표문제)이라 ★2 유지.
  tier: star_2
  mechanism_primary: "A·B·C 원소화 → 세 쌍의 교집합 확인 → 공집합인 쌍만 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 조건(짝수·홀수·3의 배수)을 4의 약수·소수·5 이상 등으로 바꿀 수 있음. 제약: 배반인 쌍이 정확히 하나 또는 둘만 나오도록 조건을 고르고, 주사위 눈 1~6 안에서 각 사건이 비지 않아야 한다."
    creative: "(1) 배반인 쌍의 개수를 묻는 형태(★2 유지) (2) 사건 하나를 미지의 조건으로 두고 배반이 되도록 만드는 조건을 찾게 하면 I-BW ★3 (3) 여사건·합사건을 보기에 섞으면 0153 과 같은 집합 연산 골조 ★2."
```

```yaml
- id: RPM-PROB-0153
  page: 28
  vendor_label: "유형 01 배반사건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표본공간 S={1,…,8}의 세 사건 A, B, C가 벤다이어그램(그림)으로 주어질 때 A와 배반인 것을 보기 ㄱ(A의 여사건 ∪ B) ㄴ(B의 여사건 ∩ C) ㄷ(B ∩ C의 여사건)에서 모두 고르기. 5지선다.
  category: "벤다이어그램에서 원소 읽기 → 보기의 집합 연산 수행 → A와의 교집합 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벤다이어그램의 영역을 원소 목록으로 옮겨야 보기의 집합 연산을 계산할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벤다이어그램으로 주어진 사건의 배반 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 영역의 원소를 A·B·C 로 옮긴 뒤 보기 세 개를 계산하고 A와의 교집합이 비는지 본다. ㄱ 은 A의 여사건에 B∩A 부분이 남아 배반이 아니고 ㄴ·ㄷ 만 배반. 그림 → 원소 전환(RT d1) 하나에 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "벤다이어그램 → A·B·C 원소화 → 보기의 합·교·여집합 계산 → A와 교집합 공집합 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0153.png"
  latex: latex-bank/rpm-prob/items/0153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본공간 크기 8과 각 영역의 원소 배치를 바꿀 수 있음. 제약: 그림의 영역 구성(겹치는 부분의 유무)이 답을 결정하므로 원소를 바꾸면 반드시 크롭 그림도 같이 갱신해야 한다."
    creative: "(1) 보기를 A의 여사건과 배반인 것으로 바꾸면 여집합 한 겹 추가 ★2 (2) 그림 없이 원소 나열로 주면 RT 통찰이 사라져 ★1~2 (3) 「A와 배반이면서 B와도 배반인 것」으로 조건을 겹치면 0154 골조와 결합 ★3."
```

```yaml
- id: RPM-PROB-0154
  page: 28
  vendor_label: "유형 01 배반사건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1~10 이 적힌 카드 10장에서 한 장을 뽑을 때 A=3의 배수, B=소수라 하고 A, B와 모두 배반인 사건의 개수 구하기.
  category: "두 사건과 모두 배반 ⟺ 합집합의 여집합의 부분집합 → 부분집합의 개수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「A와도 B와도 배반」을 「(A∪B)의 여집합의 부분집합」이라는 포함 조건으로 바꿔야 세는 대상이 정해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 사건과 모두 배반인 사건의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={3,6,9}, B={2,3,5,7} 이므로 A∪B 의 원소는 6개, 여집합은 원소 4개. 구하는 사건은 그 여집합의 부분집합이므로 2^4=16(공사건 포함). 배반 조건을 부분집합 조건으로 옮기는 것이 유일하지만 결정적인 손질(EQV d2)이고 셈은 한 줄이라 벤더 중과 같은 ★2.
  tier: star_2
  mechanism_primary: "A∪B 원소 6개 → 여집합 원소 4개 → 그 부분집합의 개수 2^4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위(1~10 → 1~12)와 두 조건(3의 배수·소수 → 4의 배수·제곱수)을 바꿀 수 있음. 제약: 여집합의 원소 개수가 답 2^k 를 결정하므로 두 사건의 합집합 크기를 의도한 k 에 맞춰 설계하고, 공사건을 포함할지에 대한 관례를 고정한다."
    creative: "(1) 「A와는 배반이고 B와는 배반이 아닌 사건의 개수」로 바꾸면 차집합 계산이 추가되어 ★3 (2) 사건 하나만 주고 배반 사건 개수를 물으면 ★2 (3) 개수 대신 그런 사건 중 원소가 2개인 것의 개수를 물으면 조합과 결합 ★3."
```

### 유형 02 수학적 확률

```yaml
- id: RPM-PROB-0155
  page: 28
  vendor_label: "유형 02 수학적 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    서로 다른 두 개의 주사위를 동시에 던질 때 두 눈의 수의 차가 3 이상일 확률 구하기.
  category: "전체 36가지 → 차가 3·4·5 인 순서쌍 세기 → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주사위 두 개 — 눈의 수 조건을 만족시키는 순서쌍의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차가 3, 4, 5 인 순서쌍을 각각 세고(두 주사위가 구별되므로 양쪽 순서 모두) 36 으로 나눈다. 「차」가 절댓값이라 순서쌍을 두 번 세야 하는 것이 함정(T-범위)이며 세는 방법 자체는 표준이라 통찰 없음. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "전체 36 → 차 3·4·5 인 순서쌍 개수 합 → 36으로 나누기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 3을 2·4로, 조건을 차가 2 이하 등으로 바꿀 수 있음. 제약: 기준을 0~5 안에 두어야 세는 대상이 남고, 「이상」과 「초과」를 바꾸면 경계 순서쌍이 통째로 움직인다."
    creative: "(1) 차 대신 합·곱 조건으로 바꾸면 세는 패턴이 달라져 ★2 (2) 여사건(차가 2 이하)으로 바꾸면 I-EQV ★2 (3) 주사위 세 개에서 「가장 큰 눈과 가장 작은 눈의 차」로 확장하면 ★4."
```

```yaml
- id: RPM-PROB-0156
  page: 28
  vendor_label: "유형 02 수학적 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    홀수 1, 3, 5, 7, 9 에서 택한 a 와 짝수 2, 4, 6, 8 에서 택한 b 에 대하여 a×b>50 일 확률 구하기.
  category: "전체 5×4 → 곱이 50을 넘는 (a, b) 세기 → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수를 택할 때 곱의 크기 조건을 만족시킬 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 5×4=20 이고 a 를 큰 쪽부터 고정해 조건을 만족하는 b 를 세면 금방 끝난다. 곱의 표를 다 만들 필요 없이 큰 값부터 훑는 것이 요령이나 표준 세기라 통찰 없음. 벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "전체 20가지 → a 를 고정해 b 조건을 만족시키는 개수 합 → 20으로 나누기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 50과 두 집합의 원소를 바꿀 수 있음. 제약: 기준값이 곱의 최솟값과 최댓값(2~72) 사이에 있어야 하고, 「초과」와 「이상」의 차이가 생기지 않도록 기준을 곱으로 나오지 않는 수로 두는 것이 안전하다."
    creative: "(1) 합 조건(a+b>10)으로 바꾸면 세는 구조가 대각선으로 바뀌어 ★2 (2) a, b 를 같은 집합에서 중복 없이 뽑게 하면 순서 처리 때문에 ★3 (3) 곱이 4의 배수일 확률처럼 배수 조건으로 바꾸면 홀짝 구조 활용 ★2."
```

```yaml
- id: RPM-PROB-0157
  page: 28
  vendor_label: "유형 02 수학적 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A={1,2,3,4,5,6}의 부분집합 중 하나를 택할 때 원소 2와 5를 모두 포함할 확률. 5지선다.
  category: "전체 부분집합 2^6 → 2, 5 를 고정하고 나머지 4개의 부분집합 2^4 → 비"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「2와 5를 포함」을 「나머지 네 원소에 대해서는 아무 제한이 없다」로 바꿔 2^4 로 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분집합을 택할 때 특정 원소를 포함할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 2^6=64, 2와 5를 반드시 넣으면 남은 4개 원소의 포함 여부만 자유로워 2^4=16, 비는 1/4. 포함 조건을 자유 원소의 개수로 옮기는 손질(EQV d1) 하나이며 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "전체 2^6 → 2·5 포함 고정 → 나머지 4개 자유 2^4 → 비 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 크기 6과 포함할 원소 개수 2를 바꿀 수 있음(확률은 1/2^k 꼴). 제약: 선택지가 서로 다른 값이 되도록 k 를 고르고, 공집합을 표본공간에 포함하는지의 관례를 유지한다."
    creative: "(1) 「2는 포함하고 5는 포함하지 않을 확률」로 바꾸면 고정 원소가 두 방향이 되어 ★2 (2) 「원소가 3개인 부분집합 중에서」로 표본공간을 제한하면 조합 확률 ★3 (3) 「2 또는 5를 포함」으로 바꾸면 여사건 전환이 필요해 ★3."
```

```yaml
- id: RPM-PROB-0158
  page: 28
  vendor_label: "유형 02 수학적 확률"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    주사위를 두 번 던져 나온 눈을 차례로 a, b 라 할 때 이차방정식 x^2-2ax+b=0 이 허근을 가질 확률 구하기.
  category: "허근 조건 → 판별식 부등식 b>a^2 → a별로 가능한 b 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「허근을 가진다」를 판별식 부등식 a^2-b<0 으로 옮겨야 주사위 눈의 개수 세기로 바뀜"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 근의 판별 조건을 만족시킬 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4=a^2-b<0, 즉 b>a^2 이므로 a=1 일 때 b 가 2~6, a=2 일 때 5·6, a가 3 이상이면 없다. 등호(중근)를 빼는 경계와 a, b 가 1~6 이라는 범위가 함정(T-경계·T-범위)이고 단원 밖 도구(판별식)를 끌어오는 표현 전환(RT d1)이 하나. 벤더 중 → ★2. [분류 이슈] 서술형 태그·M_total 7·단원 결합으로 ★3 후보이나 셈이 두 줄이라 ★2 유지.
  tier: star_2
  mechanism_primary: "허근 ⟺ a^2-b<0 → b>a^2 → a=1·2 에서만 b 개수 합 7 → 36으로 나누기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{36}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -2a 의 계수와 상수항 자리(x^2-ax+b, x^2-2ax+3b 등)를 바꿀 수 있음. 제약: 판별식 부등식의 해가 주사위 눈 1~6 안에서 비지 않아야 하고 너무 많아도 안 되며, 짝수 공식(D/4)을 쓸 수 있도록 일차항 계수를 짝수로 두면 계산이 가볍다."
    creative: "(1) 「서로 다른 두 실근」으로 바꾸면 부등호가 뒤집혀 여사건 관계 ★2 (2) 「중근을 가질 확률」로 바꾸면 b=a^2 인 순서쌍만 세어 ★2 (3) 근의 부호 조건(두 근이 모두 양수)을 추가하면 근과 계수의 관계까지 결합해 ★4."
```

### 유형 03 순열을 이용하는 확률

```yaml
- id: RPM-PROB-0159
  page: 29
  vendor_label: "유형 03 순열을 이용하는 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    서로 다른 만화책 3권과 소설책 4권을 일렬로 꽂을 때 만화책끼리 이웃하게 꽂을 확률. 5지선다.
  category: "전체 7! → 만화책 3권 묶음 5!×3! → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이웃하는 순열의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    만화책 3권을 한 덩어리로 보아 5! 에 덩어리 안 3! 을 곱하고 7! 로 나눈다. 묶음 순열은 이 유형의 표준 도구라 통찰로 세지 않았고 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "만화책 3권 묶음 → 5!×3! → 7! 로 나누기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 종류의 권수(3, 4)를 바꿀 수 있음. 제약: 묶음 순열 (n-k+1)!×k!/n! 이 약분돼 선택지로 쓸 만한 분수가 되도록 n 을 7~8 정도로 유지한다."
    creative: "(1) 「만화책끼리 이웃하지 않을 확률」로 바꾸면 여사건 또는 사이 끼워넣기 ★3 (2) 두 종류 모두 각각 이웃하게 하면 묶음 두 개 ★3 (3) 양 끝에 소설책을 놓는 조건을 더하면 0161 골조와 결합 ★3."
```

```yaml
- id: RPM-PROB-0160
  page: 29
  vendor_label: "유형 03 순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    8개의 문자 p, r, e, v, i, o, u, s 를 일렬로 나열할 때 p와 s 사이의 문자가 2개일 확률 구하기.
  category: "p와 s 를 사이 2칸을 포함한 4칸 덩어리로 보기 → 덩어리 위치와 내부 배열 → 전체 8! 과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「사이에 2개」 조건을 p와 s 가 양 끝인 길이 4 덩어리로 바꾸면 덩어리 위치 5곳 × 양 끝 순서 2 로 세어짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 문자 사이의 문자 개수가 정해진 순열의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p□□s 를 한 덩어리로 보면 덩어리가 놓일 자리가 5곳, p와 s 의 순서가 2가지, 나머지 6개 문자가 6! 이고 사이 2칸은 그 6! 안에서 자동으로 정해진다. 「사이」 조건을 덩어리 길이로 옮기는 것이 이 유형의 결정적 손질(EQV d2)이며 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "p□□s 길이 4 덩어리 → 위치 5 × 순서 2 × 나머지 6! → 8! 로 나누기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{28}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수 8과 사이 문자 수 2를 바꿀 수 있음(위치 수 = n-k-1). 제약: 사이 문자 수가 n-2 이하여야 하고, 서로 다른 문자여야 같은 것이 있는 순열로 성격이 바뀌지 않는다."
    creative: "(1) 「사이에 2개 이하」로 바꾸면 여러 덩어리 길이의 합이 되어 경우 분기 ★3 (2) 「p가 s보다 앞」 조건을 더하면 순서 2가 1로 줄어 ★2 (3) 사이의 문자를 지정(모음만)하면 선택까지 겹쳐 ★4."
```

```yaml
- id: RPM-PROB-0161
  page: 29
  vendor_label: "유형 03 순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    남학생 4명과 여학생 2명이 일렬로 설 때 양 끝에 남학생이 서고 여학생끼리는 이웃하게 설 확률 구하기.
  category: "양 끝 남학생 배치 → 여학생 묶음을 가운데에 넣어 배열 → 전체 6! 과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양 끝 조건과 이웃 조건을 따로 세지 않고 「양 끝 남학생 2명을 먼저 앉히면 여학생 묶음은 가운데 블록 안」이라는 한 배열로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "양 끝 조건과 이웃 조건이 겹친 순열의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양 끝에 세울 남학생 2명을 뽑아 배열하고(4×3), 남은 남학생 2명과 여학생 묶음 1개를 가운데 3자리에 배열(3!), 묶음 안 2!. 전체 6! 과 비교한다. 두 조건을 순서대로 처리하면 겹침이 생기지 않는다는 결합(CON d1) 하나이고 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "양 끝 남학생 4×3 → 가운데 3자리에 남2·여묶음 3! → 묶음 안 2! → 6! 로 나누기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남학생 수 4·여학생 수 2를 바꿀 수 있음. 제약: 양 끝을 채울 남학생이 2명 이상이어야 하고, 여학생이 3명 이상이면 묶음 안 배열이 3! 로 커지면서 가운데 자리 수도 다시 계산해야 한다."
    creative: "(1) 「여학생끼리 이웃하지 않게」로 바꾸면 사이 끼워넣기 ★3 (2) 양 끝 조건을 「양 끝이 서로 다른 성별」로 바꾸면 경우 분기 ★3 (3) 특정 두 사람이 이웃하지 않는 조건을 더하면 여사건까지 겹쳐 ★4."
```

```yaml
- id: RPM-PROB-0162
  page: 29
  vendor_label: "유형 03 순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1, 2, 3, 4, 5 를 모두 사용해 만든 다섯 자리 자연수가 35000보다 클 확률 구하기.
  category: "크기 조건을 자리별 조건으로 바꾸기 → 만의 자리 4·5 인 경우와 3이면서 천의 자리 5 인 경우"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「35000보다 크다」를 앞자리부터 비교하는 조건(만의 자리가 4 이상 / 만의 자리 3이고 천의 자리 5)으로 옮겨야 순열의 개수로 세어짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "자연수의 크기 조건을 만족시킬 확률(순열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 5!=120. 만의 자리가 4 또는 5 면 무조건 크고(2×4!), 만의 자리가 3 이면 천의 자리가 5 일 때만 크다(3!). 남은 자리에 0이 없어 35000 과 같아지는 경우가 없다는 것이 경계 처리의 핵심이다. 앞자리 비교로 조건을 옮기는 손질(EQV d2) 하나. [분류 이슈] 벤더 중·M_total 7 로 유형 03 안에서 가장 무거워 ★3 후보이나 통찰 1개라 ★2 유지.
  tier: star_2
  mechanism_primary: "만의 자리 4·5 → 2×4! · 만의 자리 3 & 천의 자리 5 → 3! → 합을 5! 로 나누기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준수 35000 을 24000·41000 등으로 바꿀 수 있음. 제약: 기준수의 각 자리가 주어진 숫자 집합 안에 있어야 자리별 분기가 생기고, 기준수와 같은 수를 만들 수 있으면 「크다/크거나 같다」 경계를 따로 따져야 한다."
    creative: "(1) 「35000보다 작을 확률」로 바꾸면 여사건 ★2 (2) 숫자에 0 을 넣으면 맨 앞자리 제한이 추가되어 ★3 (3) 「홀수이면서 35000보다 클 확률」처럼 조건을 겹치면 분기가 두 층이 되어 ★4."
```

### 유형 04 중복순열을 이용하는 확률

```yaml
- id: RPM-PROB-0163
  page: 29
  vendor_label: "유형 04 중복순열을 이용하는 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 사람이 4개의 호텔 중 임의로 각각 한 곳을 택해 투숙할 때 세 사람이 서로 다른 호텔에 투숙할 확률 구하기.
  category: "전체는 중복순열 4^3 → 서로 다른 경우는 순열 4P3 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열과 순열의 비 — 서로 다른 것을 택할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사람마다 4가지씩 고르므로 전체 4^3, 서로 다르면 4P3. 분모가 중복순열, 분자가 순열이라는 대비가 이 유형의 기본형이며 통찰 없음. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "전체 4^3 → 서로 다른 경우 4P3 → 비 3/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수 3과 호텔 수 4를 바꿀 수 있음. 제약: 사람 수 ≤ 호텔 수 여야 분자가 0 이 되지 않고, nPr/n^r 이 약분되는 조합으로 고르면 답이 간단하다."
    creative: "(1) 「적어도 두 사람이 같은 호텔」로 바꾸면 여사건 I-EQV ★2 (2) 특정 두 사람만 같은 호텔에 묵을 확률로 바꾸면 선택과 배정이 겹쳐 ★3 (3) 호텔마다 정원을 두면 분배 문제로 성격이 바뀌어 ★4."
```

```yaml
- id: RPM-PROB-0164
  page: 29
  vendor_label: "유형 04 중복순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 과일 6개를 A, B, C 3명에게 남김없이 나누어 줄 때(못 받는 사람이 있어도 됨) 사과와 귤은 A가 받을 확률 구하기.
  category: "전체는 중복순열 3^6 → 두 과일을 A로 고정하고 나머지 4개만 3^4 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「사과와 귤은 A」를 「그 두 개는 배정이 하나로 정해지고 나머지 4개만 자유」로 바꿔 3^4 로 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나누어 주기(중복순열)에서 특정 원소의 배정을 고정할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    과일 하나하나가 세 사람 중 하나를 고르므로 전체 3^6, 사과·귤이 A 로 고정되면 남은 4개만 3^4. 비는 1/3^2. 못 받는 사람이 있어도 된다는 단서가 중복순열임을 보장하는 자리다. 고정 손질(EQV d1) 하나·벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "전체 3^6 → 사과·귤 A 고정 → 나머지 4개 3^4 → 비 1/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{9}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "과일 수 6·사람 수 3·고정할 과일 수 2를 바꿀 수 있음(확률은 1/(사람 수)^(고정 수)). 제약: 「받지 못한 사람이 있을 수도 있다」 단서를 유지해야 중복순열이고, 빼면 분배(빈 곳 없이 나누기) 문제로 바뀐다."
    creative: "(1) 「사과는 A, 귤은 B」로 바꿔도 같은 골조(★2 유지) (2) 「A가 과일을 하나도 받지 못할 확률」로 바꾸면 2^6/3^6 ★2 (3) 「받지 못한 사람이 없도록」 조건을 넣으면 포함배제가 필요해 ★4."
```

```yaml
- id: RPM-PROB-0165
  page: 29
  vendor_label: "유형 04 중복순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1~5 중에서 중복을 허용해 4개를 뽑아 만든 네 자리 자연수 중 하나를 택할 때 그 수가 홀수일 확률. 5지선다.
  category: "전체 5^4 → 일의 자리를 홀수로 고정하고 나머지 세 자리 5^3 → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열로 만든 자연수가 홀수일 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 5^4, 홀수는 일의 자리가 1·3·5 중 하나이고 나머지 세 자리는 자유라 3×5^3. 비는 3/5 로 결국 일의 자리 확률과 같다. 자리 고정은 이 유형의 표준이라 통찰 없음·벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "전체 5^4 → 일의 자리 홀수 3가지 × 나머지 5^3 → 비 3/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(1~5)과 자리 수 4를 바꿀 수 있음. 제약: 집합에 0 이 들어가면 맨 앞자리 제한이 생겨 전체 개수가 5^4 꼴이 아니게 되므로 0 을 넣을 때는 분모부터 다시 센다. 홀수 개수/전체 개수의 비가 선택지로 쓸 분수가 되도록 고른다."
    creative: "(1) 「5의 배수일 확률」로 바꾸면 일의 자리가 한 가지로 줄어 ★2 (2) 「3의 배수일 확률」로 바꾸면 자리의 합 조건이라 세는 방법이 완전히 달라져 ★4 (3) 「서로 다른 숫자로만 만든 수일 확률」로 바꾸면 0163 골조와 같아져 ★2."
```

```yaml
- id: RPM-PROB-0166
  page: 29
  vendor_label: "유형 04 중복순열을 이용하는 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X={1,2,3,4} 에서 Y={a,b,c,d,e} 로의 함수 f 를 만들 때 x1≠x2 이면 f(x1)≠f(x2) 를 만족시킬 확률 구하기.
  category: "조건을 일대일함수로 읽기 → 전체 5^4 중 5P4 → 비"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x1≠x2 이면 f(x1)≠f(x2)」를 일대일함수 조건으로 읽어 함숫값을 서로 다르게 택하는 순열로 바꾸기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 개수 — 일대일함수일 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X 의 원소 4개가 각각 Y 의 5개 중 하나를 택하므로 전체 5^4, 일대일이면 5P4. 조건식을 일대일함수로 번역하는 것이 유일한 손질(EQV d1)이고 셈은 0163 과 같은 골조다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "전체 함수 5^4 → 일대일함수 5P4 → 비 24/125"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{24}{125}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기 4와 공역 크기 5를 바꿀 수 있음. 제약: 정의역 크기 ≤ 공역 크기 여야 일대일함수가 존재하고, n^r 과 nPr 이 약분되는 조합이면 답이 간단하다."
    creative: "(1) 「치역과 공역이 같을 확률」로 바꾸면 전사함수라 포함배제가 필요해 ★4 (2) 「f(1)=a 일 확률」로 바꾸면 한 자리 고정 ★2 (3) 「f(1)<f(2)<f(3)<f(4) 일 확률」로 바꾸면 조합과 순열의 비 ★3."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 16 · ★2 15 · ★3 0 · ★4 0 · ★5 0
- 통찰형 3 · 절차형 28 · premium 0
- 통찰 유형 분포(라벨 10개): I-EQV 7 · I-RT 2 · I-CON 1 (I-MI·I-SC·I-VF·I-SYM·I-XU·I-PD·I-BW 0)
- type_hint 계열별: 「사건·표본공간을 원소로 쓰기」 2 · 「배반사건 판정·개수」 4(0138 0152 0153 0154) · 「수학적/통계적/기하적 확률의 뜻」 4(0139 0140 0141 0142) · 「확률의 기본 성질(0·1)」 2 · 「덧셈정리」 4(0145 0146 0147 0148) · 「여사건」 3(0149 0150 0151) · 「경우의 수 조건을 만족시킬 확률(세기)」 3(0155 0156 0157) · 「순열을 이용하는 확률」 4(0158 0159 0160 0161 0162 중 순열 골조 4) · 「중복순열을 이용하는 확률」 4(0163 0164 0165 0166)
- 벤더 신호: 교과서 구역 16(난이도·태그 없음) · 대표문제 4(난이도 표시 없음) · 중 11 · 서술형 태그 2(0158 0160)
- 그림: 2문(`crop:fig-0142.png` 4등분 과녁 · `crop:fig-0153.png` 세 사건 벤다이어그램)
- 이 범위에서 반복되는 골조: (가) 전체 경우의 수와 조건을 만족시키는 경우의 수의 비(0140 0155 0156 0157 0159 0163 0165 0166) (나) 조건을 여사건으로 뒤집기(0150 0151) (다) 조건을 「고정 + 나머지는 자유」로 옮겨 지수를 낮추기(0157 0164 0166) (라) 배반 조건을 집합 포함 관계로 옮기기(0152 0153 0154)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0148 | 교과서 구역이지만 배수 세기 + 덧셈정리 + 배반 판정으로 M_total 6 — 유형 구역이었다면 ★2 | ★1 / ★2 |
| RPM-PROB-0158 | 벤더 「중」이나 판별식(공통수학1 도구)을 끌어오는 단원 결합 + 서술형 태그 + M_total 7 — ★3 후보 | ★2 / ★3 |
| RPM-PROB-0162 | 벤더 「중」이나 앞자리 비교 분기와 경계 처리로 유형 03 안에서 가장 무거움 — ★3 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「배반사건 판정」(0152 0153)과 「두 사건과 모두 배반인 사건의 개수」(0154)는 앞의 것이 교집합 확인 한 줄인 반면 뒤의 것은 배반 조건을 부분집합 조건으로 옮겨 2^k 를 세는 것이라 base ★ 가 다르다 — 반드시 분리. (2) 「수학적 확률」·「통계적 확률」·「기하적 확률」은 발문 모양이 비슷해도 분모가 경우의 수/시행 횟수/넓이로 달라 각각 별도 유형. (3) 「중복순열을 이용하는 확률」 안에서도 0163·0166 처럼 분모가 n^r, 분자가 nPr 인 것과 0164·0165 처럼 자리·원소를 고정해 지수를 낮추는 것은 변형 축이 달라 하위 유형을 나누는 편이 좋다.
- **통합해도 될 유형**: (1) 0145·0146·0147 은 덧셈정리 한 식을 어느 항에 대해 푸느냐만 다르므로 한 유형으로 묶고 배반 여부를 난이도 변형으로 둔다. (2) 0143·0144 는 「확률이 0 또는 1 인 사건」 하나로 묶을 수 있다. (3) 0163 과 0166 은 재료(사람·호텔 / 정의역·공역)만 다르고 nPr/n^r 골조가 같아 같은 base ★.
- **★4~5 슬롯 부재**: 이 범위는 교과서 5구역 + 유형 01~04 의 기본 문항으로만 구성돼 I-SC·I-VF·I-SYM·I-XU 통찰이 하나도 없고 최대 M_total 이 7 이다. §2.13 기준으로 ★4 이상 슬롯을 만들 근거가 없으며, 확률의 뜻과 활용 단원의 ★4~5 는 뒤 범위(유형 05 이후 · 유형 UP · 시험에 꼭 나오는 문제 · 실력 Up)에서 찾아야 한다.
