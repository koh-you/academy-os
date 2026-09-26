---
name: mechanism-데이터-GN-PROB-21
description: 개념원리 확률과 통계 21 모평균의 추정(1/1 · 9문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 21 모평균의 추정
  unit_code: PROB-21
  part: "1/1"
  extract_range: "182~184쪽 · 182-e7~184-399"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 21 모평균의 추정 (1/1) 정독 데이터 (v1.0)

이 파일은 182~184쪽 세 쪽에 걸친 「21 모평균의 추정」 9문항(`182-e7`~`184-399`) 전수를 다룬다. 단원 전체가 9문항이라 파트 분할이 없다. 이 범위는 **필수·발전 예제** 구역 하나로만 이루어져 있고, 벤더 난이도 신호는 태그뿐이다 — 상자 발문인 **필수 예제** 3문항(`182-e7` · `183-e8` · `184-e9` · ★2 출발)과 각 예제 아래 딸린 **확인체크** 6문항(★1 출발). 개념원리 익히기 통번호·STEP 구분·실력 UP·기출 태그는 이 범위에 없고 vendor_level 은 전부 "-" 다. 그림도 한 장도 없다(신뢰도가 표준정규분포표 대신 $\mathrm{P}(|Z|\le 1.96)=0.95$ 같은 조건문으로 직접 주어진다).

골조는 예제 셋을 따라 세 갈래로 갈린다. ① **신뢰구간 직접 계산** — $\overline{x}\pm z\sigma/\sqrt{n}$ 에 수치를 넣는 정방향과, 주어진 구간에서 $n$ 을 되돌리는 역방향(`182-e7` · `182-394` · `182-395`). ② **신뢰구간의 길이** — 길이가 반길이의 2배, 즉 $2z\sigma/\sqrt{n}$ 임을 옮긴 뒤 길이를 구하거나 길이 조건에서 $n$ 을 구하는 형(`183-e8` · `183-396` · `183-397`). ③ **모평균과 표본평균의 차** — $|m-\overline{x}|\le z\sigma/\sqrt{n}$ 이 신뢰구간의 **반**길이임을 옮긴 뒤 표본 크기의 최솟값을 구하는 형(`184-e9` · `184-398` · `184-399`). 세 갈래 모두 공식 한 줄과 그 역산이며, 19 단원 `171-373`(값 → $n$ 일차 역산)을 통찰로 세지 않은 선례를 따라 **이 범위에는 통찰 라벨을 하나도 붙이지 않았다**. 변별은 통찰이 아니라 길이·반길이 혼동(T-표기)과 부등식 최솟값 경계(T-경계)에서만 생긴다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-182-e7
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 건전지 $100$개를 임의추출해 수명의 평균 $1000$시간, 표준편차 $50$시간을 얻었을 때 수명의 모평균 $m$ 에 대한 ⑴ 신뢰도 $95\,\%$ ⑵ 신뢰도 $99\,\%$ 의 신뢰구간 구하기. ($\mathrm{P}(|Z|\le 1.96)=0.95$, $\mathrm{P}(|Z|\le 2.58)=0.99$ 주어짐)
  category: "표본평균·표본표준편차 확보 → 신뢰구간 공식 대입 → 신뢰도만 바꿔 z 교체"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균의 추정(표본평균·표준편차 → 신뢰구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모집단이 정규분포이고 n=100 으로 충분히 커서 표본표준편차 50 을 모표준편차 대신 쓴다. σ/√n = 5 를 한 번 구해 두면 ⑴은 1000±1.96·5, ⑵는 1000±2.58·5 로 z 값만 갈아 끼우는 구조다. 신뢰도가 커지면 구간이 넓어지는 것을 나란히 보여 주는 도입 예제. 통찰 없음·M_total 6 → 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "σ/√n = 50/10 = 5 → 1000 ± 1.96·5 와 1000 ± 2.58·5 → 두 신뢰구간"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $990.2\le m\le 1009.8$ ⑵ $987.1\le m\le 1012.9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/182-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(100 → 25·400 같은 제곱수), 표본평균(1000), 표준편차(50)를 바꿀 수 있음. 제약: n 이 제곱수라야 σ/√n 이 유한소수가 되고, 1.96·σ/√n 과 2.58·σ/√n 이 소수 둘째 자리에서 끝나야 답이 지저분해지지 않는다. z 값은 발문에 준 P(|Z|≤z) 조건과 반드시 일치시킬 것."
    creative: "(1) 신뢰도를 90 %(z=1.645)까지 세 개로 늘려 구간 폭의 대소를 비교하게 하기(★2 유지) (2) 신뢰도는 고정하고 n 을 4배로 키워 폭이 절반이 되는 것을 확인하게 하기(★2) (3) 구간의 한쪽 끝만 주고 나머지 끝과 n 을 함께 역산하게 하면 미지수 2개 연립이라 ★3."
```

```yaml
- id: GN-PROB-182-394
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    학생 $64$명을 임의추출해 키의 평균 $167\,\mathrm{cm}$, 표준편차 $12\,\mathrm{cm}$ 를 얻었을 때 키의 모평균 $m$ 에 대한 신뢰도 $95\,\%$ 의 신뢰구간 구하기.
  category: "신뢰구간 공식에 표본평균·표준편차·표본 크기 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균의 추정(표본평균·표준편차 → 신뢰구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    σ/√n = 12/8 = 1.5 를 구하고 167±1.96·1.5 를 쓰면 끝나는 182-e7 ⑴의 수치 교체본이다. 표본표준편차를 모표준편차로 대용하는 관례만 함정 축에 잡힌다. 통찰 0·M_total 4 → 확인체크 ★1 출발에서 조정 없이 ★1.
  tier: star_1
  mechanism_primary: "σ/√n = 12/8 = 1.5 → 167 ± 1.96·1.5 → 신뢰구간"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$164.06\le m\le 169.94$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/182-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(64 → 36·100 등 제곱수), 표준편차(12), 표본평균(167)을 바꿀 수 있음. 제약: σ/√n 이 유한소수여야 하고 그 1.96 배가 소수 둘째 자리에서 끝나야 한다. 단위 cm 는 구간의 양 끝에도 그대로 유지."
    creative: "(1) 신뢰도를 99 % 로 바꿔 z 만 교체(★1 유지) (2) 구간의 한쪽 끝만 묻기(★1) (3) 신뢰구간을 주고 표본 크기나 표본평균을 역산하게 하면 182-395 골조가 되어 ★2."
```

```yaml
- id: GN-PROB-182-395
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    무게의 표준편차가 $5\,\mathrm{g}$ 인 귤 $n$개를 임의추출해 평균 $150\,\mathrm{g}$ 을 얻었고, 무게의 모평균 $m$ 에 대한 신뢰도 $99\,\%$ 의 신뢰구간이 $148.71\le m\le 151.29$ 일 때 $n$ 구하기.
  category: "주어진 신뢰구간 → 반길이 추출 → 표본 크기 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간이 주어졌을 때 표본의 크기 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간의 중심 150 은 이미 표본평균으로 주어졌으므로 실제로 쓰는 정보는 한쪽 폭 1.29 하나다. 1.29 = 2.58·5/√n 으로 놓고 √n = 10 → n = 100. 반길이(1.29)와 길이(2.58)를 헷갈리면 n 이 4배로 어긋나는 것이 유일한 함정이다. 미지수 n 이 근호 안에 있어 Mₐ 2·M_total 6 → 확인체크 ★1 출발에서 역방향 한 단계만큼 올려 ★2.
  tier: star_2
  mechanism_primary: "구간의 반길이 1.29 = 2.58·5/√n → √n = 10 → n = 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/182-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 5 와 구간 148.71~151.29 를 바꿀 수 있음. 제약: 구간의 반길이가 2.58·σ/√n 과 정확히 같아야 하고 n 이 자연수로 떨어지도록 σ 와 반길이를 함께 조정해야 한다. 중심 150 은 표본평균이므로 구간의 중점과 반드시 일치시킬 것."
    creative: "(1) n 대신 σ 를 미지수로 두기(같은 골조 ★2) (2) 신뢰도만 95 % 로 바꿔 z 교체(★2 유지) (3) 구간의 한쪽 끝을 감추고 n 과 함께 구하게 하면 미지수 2개라 ★3 (4) 「신뢰구간의 길이가 ~ 이하」 부등식으로 바꾸면 183-e8 골조."
```

```yaml
- id: GN-PROB-183-e8
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    무게의 표준편차가 $10\,\mathrm{g}$ 인 제품 $n$개를 임의추출해 무게의 모평균 $m$ 을 신뢰도 $95\,\%$ 로 추정한 신뢰구간이 $\alpha\le m\le\beta$ 일 때, $\beta-\alpha\le 1.4$ 를 만족시키는 $n$ 의 최솟값 구하기.
  category: "신뢰구간의 길이 = 2zσ/√n 으로 변환 → 길이 부등식 → 자연수 n 의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간의 길이 조건에서 표본의 크기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 단계가 구간의 길이 β−α 를 2·1.96·(10/√n) = 39.2/√n 로 옮기는 것이고, 여기서 반길이와 길이를 혼동하면 n 이 4배로 어긋난다. 39.2/√n ≤ 1.4 → √n ≥ 28 → n ≥ 784 이고 부등식이라 자연수 최솟값 경계를 따로 답해야 한다. 길이 해석·부등식 역산·경계 처리가 겹쳐 M_total 8 로 이 범위에서 가장 무겁다.
    [분류 이슈] 통찰이 0 이라 v3.8 의 +1 조건(통찰 2개 이상 또는 depth 3)은 미달이지만 M_total 8 을 근거로 필수 예제 ★2 출발에서 +1 해 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: "β−α = 2·1.96·10/√n = 39.2/√n ≤ 1.4 → √n ≥ 28 → n ≥ 784 → 최솟값 784"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$784$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/183-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 10, 길이 상한 1.4, 신뢰도 95 % 를 바꿀 수 있음. 제약: 2·z·σ 를 상한으로 나눈 몫이 정수라야 √n 의 경계가 깔끔하다(여기서는 39.2/1.4 = 28). 상한을 바꿀 때는 그 몫이 정수인지 먼저 확인하고, 아니면 답이 제곱수가 아닌 자연수 올림으로 바뀐다."
    creative: "(1) 부등식을 등식(길이 = 1.4)으로 바꾸면 경계 처리가 사라져 ★2 (2) n 을 주고 길이를 구하게 하면 183-396 의 정방향 ★1 (3) σ 를 미지수로 두고 n 과 길이를 주기(★2) (4) 신뢰도 두 개에서 길이가 같아지는 n 의 비를 묻게 하면 미지수 2개 비례 관계라 ★4 후보."
```

```yaml
- id: GN-PROB-183-396
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    학생 $100$명을 임의추출해 수학 성적의 표준편차 $15$점을 얻었을 때, 수학 성적의 모평균 $m$ 을 신뢰도 $99\,\%$ 로 추정한 신뢰구간의 길이 구하기.
  category: "신뢰구간의 길이 = 2zσ/√n 한 줄 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균에 대한 신뢰구간의 길이(길이 직접 계산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    길이 = 2·2.58·(15/10) = 7.74 한 줄이다. 구간 자체를 구할 필요가 없고 표본평균이 주어지지 않아도 답이 나온다는 점만 알면 끝난다. 길이가 반길이의 2배라는 것이 유일한 함정. 통찰 0·M_total 4 → 확인체크 ★1 유지.
  tier: star_1
  mechanism_primary: "길이 = 2·2.58·15/√100 = 2·2.58·1.5 = 7.74"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7.74$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/183-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(100 → 제곱수), 표준편차(15), 신뢰도(99 %)를 바꿀 수 있음. 제약: 2·z·σ/√n 이 소수 둘째 자리에서 끝나야 한다. 표본평균은 답에 쓰이지 않는 정보이므로 넣더라도 결과에 영향이 없게 둘 것."
    creative: "(1) 길이 대신 반길이(모평균과 표본평균의 차의 최대)를 묻기(★1 · 184 계열 골조) (2) 신뢰도 95 % 와 99 % 의 길이 비를 묻기(★2) (3) 길이를 주고 n 을 역산하게 하면 183-397(★2), 부등식으로 주면 183-e8(★3)."
```

```yaml
- id: GN-PROB-183-397
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    무게의 표준편차가 $5\,\mathrm{g}$ 인 과자의 무게의 모평균 $m$ 을 신뢰도 $99\,\%$ 로 추정한 신뢰구간의 길이가 $0.3$ 이 되도록 하는 표본의 크기 구하기.
  category: "신뢰구간의 길이 = 2zσ/√n 을 길이 조건과 등치 → 표본 크기 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간의 길이 조건에서 표본의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    183-396 의 역방향이다. 2·2.58·(5/√n) = 0.3 → 25.8/√n = 0.3 → √n = 86 → n = 7396. 계산 자체는 한 줄이지만 미지수가 근호 안에 있어 마지막에 제곱하는 단계가 붙고, 길이를 2배로 잡지 않으면 n 이 4배로 어긋난다. 통찰 0·M_total 6 → 확인체크 ★1 출발에서 역방향 한 단계만큼 올려 ★2.
  tier: star_2
  mechanism_primary: "2·2.58·5/√n = 0.3 → √n = 86 → n = 7396"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7396$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/183-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 5, 길이 0.3, 신뢰도 99 % 를 바꿀 수 있음. 제약: 2·z·σ 를 길이로 나눈 값이 정수라야 답이 제곱수로 떨어진다(25.8/0.3 = 86). 길이를 바꿀 때 그 몫이 정수인지 먼저 확인할 것."
    creative: "(1) 등식을 「길이가 0.3 이하」 부등식으로 바꾸면 최솟값 경계가 붙어 183-e8 과 같은 ★3 (2) n 을 주고 길이를 묻는 정방향(★1) (3) 신뢰도를 미지수로 두고 z 를 역산하게 하면 표 역조회가 들어가 ★3."
```

```yaml
- id: GN-PROB-184-e9
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    표준편차가 $0.4$ 인 정규분포를 따르는 모집단의 평균을 신뢰도 $95\,\%$ 로 추정할 때, 모평균 $m$ 과 표본평균 $\overline{x}$ 의 차가 $0.01$ 이하가 되도록 하는 표본의 크기의 최솟값 구하기. ($\mathrm{P}(|Z|\le 2)=0.95$ 주어짐)
  category: "모평균과 표본평균의 차 = 신뢰구간의 반길이 zσ/√n → 부등식 → 자연수 n 의 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「모평균과 표본평균의 차」가 신뢰구간의 반길이 z·σ/√n 이라는 것이 이 유형의 전부이고, 길이(2배)와 혼동하는 것이 주 함정이다. 2·(0.4/√n) ≤ 0.01 → √n ≥ 80 → n ≥ 6400 이고 자연수 최솟값 경계를 답한다. 골조는 183-e8 과 같지만 길이를 반길이로 되돌리는 단계가 없어 한 단계 짧다. 통찰 0·M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "|m − x̄| ≤ 2·0.4/√n ≤ 0.01 → √n ≥ 80 → n ≥ 6400 → 최솟값 6400"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6400$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/184-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 0.4, 차의 상한 0.01, z = 2 를 바꿀 수 있음. 제약: z·σ 를 상한으로 나눈 몫이 정수라야 √n 경계가 깔끔하다(0.8/0.01 = 80). 이 문제는 P(|Z|≤2)=0.95 로 z 를 2 로 주었으므로 1.96 을 쓰는 변형과 섞지 말 것."
    creative: "(1) 차 대신 신뢰구간의 길이 조건으로 바꾸면 2배 해석이 더해져 183-e8 골조 ★3 (2) n 을 주고 차의 최대를 묻는 정방향(★1) (3) σ 를 미지수로 두기(★2) (4) 신뢰도를 99 % 로 올리고 같은 차 조건을 주어 필요한 n 이 몇 배가 되는지 묻기(★3)."
```

```yaml
- id: GN-PROB-184-398
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    무게의 표준편차가 $30\,\mathrm{g}$ 인 제품의 무게의 모평균을 신뢰도 $95\,\%$ 로 추정할 때, 모평균 $m$ 과 표본평균 $\overline{x}$ 의 차가 $2\,\mathrm{g}$ 이하가 되도록 하려면 적어도 몇 개를 추출해야 하는지 구하기. ($\mathrm{P}(|Z|\le 2)=0.95$ 주어짐)
  category: "차 = 반길이 zσ/√n → 부등식 → 최소 표본 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    184-e9 의 수치 교체본이다. 2·(30/√n) ≤ 2 → √n ≥ 30 → n ≥ 900. 「적어도 몇 개를 추출해야 하는가」가 표본 크기의 최솟값을 묻는 것과 같다는 것만 확인하면 e9 와 동일한 한 줄이고, 답의 단위가 「개」인 것이 차이다. 통찰 0·M_total 7 → 확인체크 ★1 출발에서 역방향·경계 처리만큼 올려 ★2.
  tier: star_2
  mechanism_primary: "|m − x̄| ≤ 2·30/√n ≤ 2 → √n ≥ 30 → n ≥ 900 → 최소 900개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$900$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/184-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 30, 차의 상한 2, z = 2 를 바꿀 수 있음. 제약: z·σ 를 상한으로 나눈 몫이 정수라야 답이 제곱수로 떨어진다(60/2 = 30). 답의 단위가 「개」이므로 발문의 대상(제품 수)과 맞출 것."
    creative: "(1) 「적어도 몇 개」를 「표본의 크기의 최솟값」으로 바꿔도 동일(★2 유지) (2) 차의 상한을 표본평균의 몇 % 로 주면 조건을 먼저 수치로 옮겨야 해서 ★3 (3) n 을 주고 차의 최대를 구하게 하면 ★1 (4) 신뢰도를 99 % 로 바꿔 z 를 2.58 로 교체(★2 · 단 상한도 함께 조정)."
```

```yaml
- id: GN-PROB-184-399
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    버스 정류장 사이의 거리의 표준편차가 $75\,\mathrm{m}$ 일 때, 거리의 모평균을 신뢰도 $99\,\%$ 로 추정할 때 모평균 $m$ 과 표본평균 $\overline{x}$ 의 차가 $12.9\,\mathrm{m}$ 이하가 되도록 하는 표본의 크기의 최솟값 구하기.
  category: "차 = 반길이 zσ/√n → 부등식 → 자연수 n 의 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균과 표본평균의 차 조건에서 표본의 크기 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    신뢰도가 99 % 라 z = 2.58 이고 2.58·(75/√n) ≤ 12.9 → √n ≥ 15 → n ≥ 225. 상한 12.9 가 2.58 의 5배로 잡혀 있어 √n 이 정수로 떨어지도록 설계된 수치다. 신뢰도와 수치만 바뀐 184-398 의 쌍둥이. 통찰 0·M_total 7 → 확인체크 ★1 출발에서 역방향·경계 처리만큼 올려 ★2.
  tier: star_2
  mechanism_primary: "|m − x̄| ≤ 2.58·75/√n ≤ 12.9 → √n ≥ 15 → n ≥ 225 → 최솟값 225"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$225$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/184-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준편차 75, 차의 상한 12.9, 신뢰도 99 % 를 바꿀 수 있음. 제약: 2.58·75/12.9 = 15 처럼 몫이 정수가 되도록 상한을 2.58 의 배수로 잡는 것이 관건이다. 신뢰도를 95 % 로 바꾸면 상한도 1.96 계열로 다시 설계해야 한다."
    creative: "(1) 신뢰도만 95 % 로 바꾸기(★2 유지) (2) 표본 크기 225 를 주고 차의 최대를 묻는 정방향(★1) (3) 두 신뢰도에서 차의 상한을 같게 두고 필요한 n 의 비를 묻기(★3) (4) σ 를 미지수로 두고 n 과 차를 주기(★2)."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 2 · ★2 6 · ★3 1 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 9 · premium 0
- 통찰 유형 분포: 없음(0건) — 이 범위의 역산은 모두 근호 하나를 푸는 일차 역산이라 19 단원 `171-373` 선례대로 I-BW 를 세지 않았다.
- type_hint 상위 5: 「모평균과 표본평균의 차 조건에서 표본의 크기 최솟값」 3(`184-e9` · `184-398` · `184-399`) · 「신뢰구간의 길이 조건에서 표본의 크기」 2(`183-e8` · `183-397`) · 「모평균의 추정(표본평균·표준편차 → 신뢰구간)」 2(`182-e7` · `182-394`) · 「신뢰구간이 주어졌을 때 표본의 크기 역산」 1(`182-395`) · 「모평균에 대한 신뢰구간의 길이(길이 직접 계산)」 1(`183-396`)
- 그림: 0문 — 이 범위는 표준정규분포표 크롭 없이 $\mathrm{P}(|Z|\le 1.96)=0.95$ 형태의 조건문으로 z 값을 직접 준다.
- 벤더 신호: 필수 3 · 확인체크 6 · 개념원리 익히기 0 · 기출 태그 0 · STEP 구분 없음 · vendor_level 전부 "-"
- 대상층: 하위권 2 · 중하위권 6 · 중위권 1
- 함정 분포: T-표기(길이 ↔ 반길이 혼동) 8문 · T-경계(부등식의 자연수 최솟값) 4문(`183-e8` · `184-e9` · `184-398` · `184-399`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-183-e8 | M_total 8 로 이 범위 최고지만 통찰은 0 이라 v3.8 의 +1 조건(통찰 2개 이상 또는 depth 3)은 미달. 길이 해석·부등식·자연수 경계를 근거로 필수 ★2 출발에서 +1 했다 | ★2 / ★3 |
| GN-PROB-182-395 · GN-PROB-183-397 | 「확인체크」(★1 출발)이지만 미지수가 근호 안에 있는 역산 한 단계 때문에 ★2 로 올렸다. 역산형을 어디서부터 한 단 올릴지는 19 단원 `171-373` 이슈와 같은 경계 문제 | ★2 |

벤더 신호와 2단 이상 어긋난 문항은 없다. 확인체크(★1 출발)에서 ★2 로 한 단 올린 문항이 4개(`182-395` · `183-397` · `184-398` · `184-399`) 있으나 모두 1단 차이라 이슈로 올리지 않고 rationale 에 근거만 남겼다. 이 단원은 문항 6개가 ★2 에 몰리는데, 벤더가 예제 하나 + 확인체크 둘을 한 쌍으로 묶어 같은 골조를 수치만 바꿔 배치한 구조 자체가 원인이며 억지로 분산시키지 않았다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 실질 유형은 셋이다. ① **모평균의 신뢰구간 계산** — $\overline{x}\pm z\sigma/\sqrt{n}$ 정방향(`182-e7` · `182-394`)과 구간 → $n$ 역방향(`182-395`). ② **신뢰구간의 길이** — 길이 $=2z\sigma/\sqrt{n}$ 정방향(`183-396`)과 길이 조건 → $n$ 역방향(`183-e8` · `183-397`). ③ **모평균과 표본평균의 차** — 차 $=z\sigma/\sqrt{n}$ 에서 $n$ 의 최솟값(`184-e9` · `184-398` · `184-399`).
- ②와 ③은 **계수가 2배냐 1배냐**만 다르고 이후 골조가 완전히 같다. 학생 오답도 대부분 이 2배 지점에서 나므로, 따로 세우기보다 **「구간의 폭 조건에서 표본 크기」 한 유형 아래 「길이 / 반길이(차)」 두 변형**으로 묶고 base ★ 2 로 두는 편이 낫다. 그래야 길이·반길이 혼동을 유형 차원의 함정으로 명시할 수 있다.
- 그 안에서 **등식 조건(`183-397`)과 부등식 + 자연수 최솟값 조건(`183-e8` · `184-e9` · `184-398` · `184-399`)은 난이도 변형**으로 구분한다. 경계 처리가 붙으면 체감이 한 단 올라가고 `183-e8` 처럼 길이 해석까지 겹치면 ★3 이 된다.
- ①의 역방향(`182-395`)은 구간의 양 끝에서 반길이를 직접 읽어 내는 단계가 추가로 있어 ②③의 역산과 입력 형태가 다르다. 통합해도 되지만 **발문 입력이 「구간」인지 「길이·차」인지는 태그로 남겨 둘 것**.
- 단원 전체가 9문항이고 ★4 이상이 하나도 없다. 변별 슬롯이 필요하면 미지수를 둘로(σ 와 n, 또는 구간의 한쪽 끝과 n) 늘리거나 두 신뢰도에서 필요한 표본 크기의 비를 묻는 형으로 설계하는 편이 낫고, 20 단원(표본평균의 분포)과 묶으면 표준화 + 추정의 I-XU 계열 ★4 를 만들 수 있다.
