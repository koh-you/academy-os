---
name: mechanism-데이터-GN-PROB-18
description: 개념원리 확률과 통계 18 모집단과 표본(1/1 · 필수·발전 예제 4문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 18 모집단과 표본
  unit_code: PROB-18
  part: "1/1"
  extract_range: "167~167쪽 · 167-e1~167-369"
  total_problems: 4
  unit_total: 4
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 18 모집단과 표본 (1/1) 정독 데이터 (v1.0)

이 파일은 167쪽 한 쪽에 들어 있는 「필수·발전 예제」 구역 4문항(`167-e1` · `167-e2` · `167-368` · `167-369`) 전수를 다룬다. 단원 전체가 4문항이라 파트 분할이 없다. 개념원리 고등의 난이도 신호는 구역과 태그로 나타나는데, 이 범위에서는 상자 발문인 **필수 예제**(tag 「필수」 · ★2 출발) 두 문항과 그 아래 딸린 **확인체크**(개념 확인 · ★1 출발) 두 문항이 전부이고, 기출 태그·STEP 구분·그림은 없다. 단원이 통계 파트의 도입부라 네 문항 모두 개념 확인 성격이며, 골조는 ① 조사 항목의 성격으로 전수조사·표본조사를 판정하는 형과 ② 임의추출 방식(복원·비복원·동시)을 경우의 수 모형으로 옮기는 형 둘로만 갈린다. 통찰 라벨이 붙은 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-167-e1
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    보기 ㄱ~ㄹ 네 가지 조사(건전지 수명 · 인구주택총조사 · 우리반 거주지 · 과일 당도) 중 표본조사가 적합한 것을 모두 고르기.
  category: "전수조사·표본조사의 구분 → 조사 항목의 성격으로 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전수조사와 표본조사의 구분(통계 조사)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기 넷을 하나씩 조사 성격으로 판정하는 한 단계뿐이다. 수명·당도는 조사하면 대상이 못 쓰게 되는 파괴검사라 전수가 불가능해 표본, 인구주택총조사는 국가가 전원을 대상으로 하는 전수, 우리반 거주지는 모집단이 작아 전수가 더 쉽다.
    계산·추상화·함정이 모두 최소라 M_total 4 이고 통찰은 없다. 벤더 「필수」는 ★2 출발이지만 통찰 0·M_total ≤ 5 의 −1 을 적용해 ★1 로 둔다(1단 차이라 이슈로 올리지 않음).
  tier: star_1
  mechanism_primary: "각 보기의 조사 대상 판정 → 파괴검사이거나 모집단이 지나치게 크면 표본조사 적합 → ㄱ·ㄹ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄱ, ㄹ'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/167-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 판정형이라 바꿀 것은 보기 항목뿐이다. 제약: 파괴검사류(수명·당도·강도·인장 시험), 국가·기관 단위 전수(인구주택총조사·병역 판정 검사·전 직원 건강검진), 소규모 집단(학급·동아리)이 각각 최소 하나씩 들어가야 답이 유일하게 갈린다. 보기 개수는 4~5개를 유지하고 정답 보기는 2개로 둔다."
    creative: "(1) 같은 보기로 전수조사 쪽을 묻기(방향만 뒤집은 같은 골조 · ★1 유지 · 167-368 이 그 형) (2) 보기별로 「표본조사인 이유」를 짝짓는 연결형(★1 유지) (3) 비용·시간 정보를 함께 주고 그럼에도 전수조사를 해야 하는 경우를 고르게 하면 조건 비교가 한 단계 붙어 ★2 (4) 표본이 모집단을 대표하지 못하는 표집 예(특정 시간대 전화 조사 등)를 섞으면 표본의 대표성 해석이 필요해 ★2."
```

```yaml
- id: GN-PROB-167-e2
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑶ $1$~$5$ 가 하나씩 적힌 공 $5$ 개에서 $3$ 개를 임의추출할 때의 경우의 수 — ⑴ 한 개씩 복원추출 ⑵ 한 개씩 비복원추출 ⑶ 동시에 $3$ 개 추출.
  category: "임의추출 방식 판정 → 중복순열·순열·조합 모형으로 옮겨 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "임의추출(복원·비복원·동시)의 경우의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소문항 셋이 각각 다른 모형으로 갈린다. 복원은 매 회 모집단이 그대로이므로 순서 있고 중복 허용 → $5^3$, 한 개씩 비복원은 순서 있고 중복 없음 → ₅P₃, 동시 추출은 순서를 따지지 않음 → ₅C₃.
    계산은 각각 한 줄이지만 「한 개씩 비복원」과 「동시에」가 순서 유무로 갈리는 지점이 문항의 본체이자 유일한 함정이다(T-표기).
    [분류 이슈] 통찰 0·M_total 5 라 −1 후보지만, 세 모형 판정이 한 문항에 겹쳐 있어 「필수」 출발점 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: "추출 방식 판정(복원 여부·순서 여부) → 복원 $5^3$ · 한 개씩 비복원 ₅P₃ · 동시 ₅C₃"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $125$ ⑵ $60$ ⑶ $10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/167-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수는 공의 개수 n(=5)과 뽑는 개수 r(=3) 둘뿐이고 답은 각각 n^r · nPr · nCr 이다. 제약: 비복원·동시는 r ≤ n 이어야 하고, 세 답이 서로 다른 값이 되도록 2 ≤ r < n 으로 둔다. 공에 적힌 숫자 1~5 는 경우의 수에 관여하지 않으므로 라벨(문자·색)만 바꿔도 답은 변하지 않는다."
    creative: "(1) 소문항 하나만 떼어 단독 출제하면 ★1(167-369 가 그 형) (2) 「꺼낸 순서를 기록한다 / 기록하지 않는다」로 조건을 말로만 주면 순서 유무를 학생이 동치 변환해야 해 I-EQV d1 이 붙고 ★2~3 (3) 「뽑은 세 수의 합이 짝수」처럼 결과에 조건을 걸면 경우 분류가 추가돼 ★3 (4) 복원과 비복원의 경우의 수 비나 대소를 묻게 하면 식 정리 한 단계가 늘어 ★2~3."
```

```yaml
- id: GN-PROB-167-368
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ~ㄹ 네 가지 조사(병역 판정 검사 · 타이어 수명 · TV 시청률 · 고등학생 수면 시간) 중 전수조사가 적합한 것을 모두 고르기.
  category: "전수조사·표본조사의 구분 → 전원 확인이 필요한 조사 골라내기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전수조사와 표본조사의 구분(통계 조사)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    병역 판정 검사는 대상자 전원을 빠짐없이 확인해야 하는 행정 절차라 전수, 타이어 수명은 파괴검사라 전수가 불가능, 시청률과 고등학생 수면 시간은 모집단이 너무 커 표본조사가 현실적이다.
    167-e1 의 방향만 뒤집은 같은 골조이며 판정 한 단계·통찰 0·M_total 4 다. 「확인체크」 출발점 ★1 을 그대로 둔다.
  tier: star_1
  mechanism_primary: "각 보기의 조사 목적 판정 → 파괴검사·대규모 모집단이 아니고 전원 확인이 필요하면 전수조사 → ㄱ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄱ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/167-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없어 바꿀 것은 보기 항목뿐이다. 제약: 전수조사가 적합한 항목(병역 판정 검사·학급 신체검사·전 직원 건강검진)이 정확히 하나가 되도록 나머지는 파괴검사나 대규모 모집단 조사로 채운다. 정답 보기 수를 2개로 늘리려면 소규모 집단 조사를 하나 더 넣는다."
    creative: "(1) 표본조사 쪽을 묻는 방향으로 뒤집기(167-e1 · ★1 유지) (2) 보기별로 전수·표본을 각각 판정해 표로 채우게 하면 ★1 유지 (3) 「전수조사가 가능하지만 표본조사를 하는 경우」를 고르게 하면 가능성과 효율을 분리해야 해 ★2 (4) 파괴검사 여부를 명시하지 않은 항목(신약 부작용·부품 내구성)을 섞으면 판정 근거를 스스로 세워야 해 ★2."
```

```yaml
- id: GN-PROB-167-369
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $1$ 부터 $10$ 까지가 하나씩 적힌 카드 $10$ 장이 든 상자에서 크기가 $2$ 인 표본을 복원추출하는 경우의 수.
  category: "복원추출 → 매 회 독립 시행의 곱으로 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복원추출로 크기 n 인 표본을 뽑는 경우의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    복원추출은 한 장을 뽑아 확인한 뒤 되돌려 놓으므로 두 번째 추출에서도 모집단이 그대로 10장이다. 각 회 10가지가 독립이라 $10^2$ 한 줄로 끝난다.
    167-e2 ⑴ 과 같은 골조를 단독으로 확인하는 문항이다. 「확인체크」 출발점 ★1 · 통찰 0 · M_total 4 로 ★1 유지.
  tier: star_1
  mechanism_primary: "복원추출 → 각 회 10가지 독립 → $10^2$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/167-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수 n(=10)과 표본 크기 r(=2)만 바꾸면 되고 답은 n^r 이다. 제약: 복원이라 r > n 도 성립하지만 값이 지나치게 커지지 않게 n ≤ 10 · r ≤ 3 을 권한다. 카드에 적힌 수 1~10 은 경우의 수에 관여하지 않는다."
    creative: "(1) 비복원추출로 바꾸면 ₁₀P₂(골조 동일 · ★1 유지) (2) 「크기가 2인 표본」을 순서 없는 것으로 해석하게 하면 ₁₀C₂ 로 갈려 순서 유무 판정이 필요해 ★2 (3) 복원·비복원·동시 세 방식을 소문항으로 모두 묻는 형(167-e2 형 · ★2) (4) 「뽑은 두 수가 같은 경우의 수」를 함께 물으면 복원추출에서만 가능한 사건을 따져야 해 ★2."
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 3 · ★2 1 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 4 · premium 0
- type_hint 상위: 「전수조사와 표본조사의 구분(통계 조사)」 2 · 「임의추출(복원·비복원·동시)의 경우의 수」 1 · 「복원추출로 크기 n 인 표본을 뽑는 경우의 수」 1
- 그림: 0문(이 범위에 figure 있는 문항 없음)
- 벤더 신호: 필수 2 · 확인체크 2 · 기출 태그 0 · STEP 구분 없음 · 발전/특강 없음
- M_total 분포: 4 가 3문 · 5 가 1문(최대 5) — 단원 도입부라 노동량이 전 범위에서 낮다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-167-e2 | 통찰 0·M_total 5 로 v3.8 의 −1 후보에 걸리지만, 소문항 셋이 복원·비복원·동시 세 모형을 모두 구분하게 해 「필수」 출발점 ★2 를 유지함 | ★1 / ★2 |

벤더 신호와 2단 이상 어긋난 문항은 없다. `167-e1` 은 「필수」(★2 출발)에서 ★1 로 한 단 내렸으나 1단 차이라 이슈로 올리지 않고 rationale 에만 근거를 남겼다. 전사본 group section 이 「필수·발전 예제」 하나뿐이라 확인체크 두 문항도 같은 `vendor_label` 을 갖지만, 태그(`확인체크`)로 구분되므로 별도 이슈로 보지 않았다(06 단원과 같은 처리).

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 실질 유형은 둘이다. ① **전수조사·표본조사의 구분**(`167-e1` · `167-368`) — 조사 항목의 성격(파괴검사 여부 · 모집단 크기 · 전원 확인 필요성)으로 판정하는 절차형 ★1. ② **임의추출의 경우의 수**(`167-e2` · `167-369`) — 복원 $n^r$ · 한 개씩 비복원 nPr · 동시 nCr 세 모형 중 맞는 것을 고르는 형 ★1~2.
- ①의 두 문항은 묻는 방향(표본이 적합 / 전수가 적합)만 뒤집힌 같은 골조이므로 **한 유형으로 통합**하고 base ★ 는 1 로 두는 것이 적절하다. 방향 뒤집기는 난이도 차이를 만들지 않는다.
- ②의 `167-369` 는 `167-e2` ⑴ 의 복원 한 갈래만 떼어낸 축소형이다. 세 갈래를 모두 묻는지(★2) 한 갈래만 묻는지(★1)가 유일한 난이도 차이이므로 **같은 유형의 난이도 변형으로 통합**하고 base ★ 는 2 로 둔다.
- ①은 요구하는 사고가 통계 상식 판정이라 확률 단원의 계산형 유형과 성질이 다르다. 이 단원 문항이 4개뿐이므로 카탈로그를 만들 때는 19 이후 표본평균·모평균 추정 단원과 묶어 「모집단과 표본」 계열 유형군으로 정리하고, ①은 그 안에서 개념 확인 슬롯으로만 두는 편이 낫다.
