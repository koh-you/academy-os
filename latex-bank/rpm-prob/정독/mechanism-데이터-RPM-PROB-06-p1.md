---
name: mechanism-데이터-RPM-PROB-06-p1
description: RPM 확률과 통계 06 통계적 추정(1/3 · 교과서 06-1 모집단과 표본 ~ 유형 03 표본평균의 확률) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 06 통계적 추정
  unit_code: PROB-06
  part: "1/3"
  extract_range: "87~91쪽 · 0508~0537"
  total_problems: 30
  unit_total: 89
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 06 통계적 추정 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 06 통계적 추정의 앞 범위(87~91쪽 · 0508~0537 · 30문 · 9구역)를 다룬다. 교과서 06-1 모집단과 표본 ~ 06-6 모평균과 모비율의 추정 여섯 구역 18문과 유형 01 표본평균의 평균, 분산, 표준편차; 모집단의 확률분포가 주어진 경우 ~ 유형 03 표본평균의 확률 세 구역 12문으로 구성된다. 단원 도입부라 유형 UP · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up 구역은 이 범위에 없다. 벤더 신호는 구역(교과서 / 유형)과 문항별 난이도(중 8 · 상중 1), 태그(대표문제 3 · 서술형 1)로 나타나며, 난이도 표시가 없는 문항은 교과서 18문과 유형 대표문제 3문이다. 그림 문항은 8문이고 그중 7문(0515 · 0532~0537)은 표준정규분포표 크롭, 1문(0526)은 모집단 확률분포표다. 0510 · 0513 은 본문 안에 표 이미지가 들어가지만 전사본 figure 필드가 없어 이 파일에서는 figure: none 으로 두었다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 교과서 ★1 · 유형 구역(대표문제·난이도 없음·중) ★2 · 상중 ★3 이고, 통찰 0 이면서 M_total ≤ 4 인 실질 한 줄 풀이만 −1 을 검토했으며(교과서 구역은 ★1 이 하한이라 −1 을 쓰지 않았다), +1 은 통찰 2개 이상 또는 depth 3 일 때만 적용했다. (2) 이 단원의 표준 도구(E(X̄)=m · V(X̄)=σ²/n · 표본평균의 정규분포 근사와 표준화 · 표본비율의 평균 p 와 표준편차 √(pq/n) · 신뢰구간 x̄ ± k·σ/√n · V(aX+b)=a²V(X))는 통찰로 세지 않고 `mechanism_primary` 에만 적었고, 조건을 쓸 수 있는 형태로 옮겨야 진행되는 손질(개수·합 조건을 표본평균 조건으로 환산 · 미지수 모평균을 표준화로 소거 · 확률을 기대 개수로 환산)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 모평균 m·모표준편차 σ·표본 크기 n 을 문자로 다루는 문항은 Mₐ 를 2 로 두었다.

## 문항 데이터

### 교과서 06-1 모집단과 표본

```yaml
- id: RPM-PROB-0508
  page: 87
  vendor_label: "교과서 06-1 모집단과 표본"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ㄱ 자동차 배터리의 수명 · ㄴ 사과의 당도 · ㄷ 어느 학급의 중간고사 수학 점수 중 표본조사가 적합한 것을 보기에서 모두 고르기.
  category: "전수조사/표본조사 판별 → 파괴검사·모집단 크기로 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전수조사와 표본조사의 구분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수명·당도는 파괴검사이거나 모집단이 너무 커 표본조사, 한 학급 점수는 전수조사가 가능. 용어 정의 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 조사 대상의 파괴성·모집단 크기 판정 → 표본조사 적합 항목 고르기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄴ"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 개념 문항이라 바꿀 수는 보기 개수(3→4·5)뿐. 제약: 보기마다 파괴검사 / 모집단 과대 / 소규모 전수 가능 중 하나로 판정이 갈리게 두고 답이 둘 이상이 되게 유지."
    creative: "(1) 전수조사가 적합한 것을 고르게 뒤집기(★1 유지) (2) 각 보기에 모집단·표본을 각각 지목하게 하기(★1) (3) 표본조사를 택한 이유를 서술하게 하면 서술형 ★2."
```

```yaml
- id: RPM-PROB-0509
  page: 87
  vendor_label: "교과서 06-1 모집단과 표본"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 1, 2, 3, 4 가 적힌 공 4개에서 2개를 한 개씩 복원추출 / 비복원추출 할 때의 경우의 수.
  category: "복원·비복원추출의 정의 → 중복순열·순열 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복원추출·비복원추출의 경우의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    복원은 4×4, 비복원은 4×3 한 줄씩. 정의를 경우의 수로 옮기는 단계 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "복원 → 4^2 · 비복원 → 4×3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $16$ \quad (2) $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수 N(4→5·6)과 뽑는 개수 r(2→3)을 바꿀 수 있음. 제약: 비복원은 r ≤ N 이어야 하고, 한 개씩 뽑는 순서를 구별하는 설정을 유지해야 N^r / N(N-1)… 이 답."
    creative: "(1) 순서를 구별하지 않게 바꿔 조합으로(★2 · 복원 시 중복조합) (2) 뽑은 두 수의 합이 짝수인 경우의 수로 조건 붙이기(★2 · I-MI) (3) 표본평균이 될 수 있는 값의 개수를 묻기(★2, 다음 문항 0510 의 골조로 연결)."
```

### 교과서 06-2 모평균과 표본평균

```yaml
- id: RPM-PROB-0510
  page: 87
  vendor_label: "교과서 06-2 모평균과 표본평균"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 1, 2, 3 이 적힌 카드 3장에서 2장을 복원추출할 때 표본평균 $\overline{X}$의 확률분포표를 완성하고, $\overline{X}$의 평균·분산·표준편차를 구하기.
  category: "표본 9가지 열거 → 표본평균별 확률 → 분포표에서 평균·분산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률분포 직접 작성"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    복원추출 순서쌍 9개를 평균값 1, 1.5, 2, 2.5, 3 으로 묶어 확률을 세고, 완성한 분포표에 평균·분산 정의를 그대로 적용. 노동량은 있으나 안내된 표를 채우는 절차이고 통찰 없음. 교과서 구역 ★1 유지(체감은 ★2 쪽이라 이슈 기록). [분류 이슈] 표본평균 분포를 직접 구성하는 M_total 6 문항이나 교과서 구역 관례대로 ★1 로 둠.
  tier: star_1
  mechanism_primary: "복원추출 9가지 → 표본평균별 확률 분포표 → E(X̄)=2 · V(X̄)=V(X)/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{2}{9}$, $\dfrac{2}{9}$, $\dfrac{1}{9}$ \quad (2) 평균: $2$, 분산: $\dfrac{1}{3}$, 표준편차: $\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 숫자 집합(1,2,3 → 1,3,5 또는 0,1,2)과 표본 크기 2 를 바꿀 수 있음. 제약: 크기를 3 으로 올리면 표본이 27가지라 분포표가 커지므로 교과서 난이도를 지키려면 크기 2 유지. 표 그림(fig-0510) 의 칸 수가 표본평균 값의 개수와 맞아야 함."
    creative: "(1) 비복원추출로 바꿔 분포표가 달라지는 것을 비교(★2) (2) 분포표를 주고 모집단을 역추적(★3 · I-BW) (3) E(X̄)=m, V(X̄)=V(X)/n 을 표로 확인하게 하는 검증형으로 확장(★2)."
```

### 교과서 06-3 표본평균의 분포

```yaml
- id: RPM-PROB-0511
  page: 87
  vendor_label: "교과서 06-3 표본평균의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ 모평균 30, 모분산 81 인 모집단에서 크기 9 인 표본의 표본평균 $\overline{X}$에 대한 $\mathrm{E}(\overline{X})$, $\mathrm{V}(\overline{X})$, $\sigma(\overline{X})$.
  category: "표본평균의 평균·분산 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 평균·분산·표준편차(공식 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    E(X̄)=m, V(X̄)=σ²/n, σ(X̄)=σ/√n 세 공식에 그대로 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "E(X̄)=30 → V(X̄)=81/9 → σ(X̄)=√(V)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $30$ \quad (2) $9$ \quad (3) $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균·모분산·표본 크기를 자유롭게. 제약: 모분산이 n 의 배수여야 V(X̄) 가 정수, 표준편차가 유리수이려면 σ²/n 이 완전제곱수."
    creative: "(1) σ(X̄) 를 주고 n 을 역산하게(★2 · 0531 골조) (2) 모분산 대신 모표준편차를 주기(★1) (3) E(2X̄+1), V(3X̄) 로 선형 변환을 얹기(★2)."
```

```yaml
- id: RPM-PROB-0512
  page: 87
  vendor_label: "교과서 06-3 표본평균의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ 정규분포 $\mathrm{N}(60,\,8^2)$인 모집단에서 크기 16 인 표본의 $\mathrm{E}(\overline{X})$, $\mathrm{V}(\overline{X})$, $\sigma(\overline{X})$.
  category: "정규 모집단 → 표본평균의 평균·분산 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 평균·분산·표준편차(공식 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    N(m, σ²) 표기에서 σ=8 을 읽어 σ²/n=64/16 대입. 앞 문항과 같은 골조이고 모집단만 정규분포로 바뀜. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "N(60, 8²) → E(X̄)=60 · V(X̄)=64/16=4 · σ(X̄)=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $60$ \quad (2) $4$ \quad (3) $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, σ, n 을 바꿀 수 있음. 제약: N(m, σ²) 표기의 σ 는 제곱 꼴로 적어 학생이 분산과 혼동하지 않게 하고, σ²/n 이 완전제곱수여야 σ(X̄) 가 정수."
    creative: "(1) X̄ 가 따르는 정규분포를 기호로 쓰게(★1 · 0514⑵ 골조) (2) σ(X̄) 가 1 이 되는 n 을 묻기(★2 · I-BW) (3) 두 표본 크기의 σ(X̄) 비를 비교(★2)."
```

```yaml
- id: RPM-PROB-0513
  page: 87
  vendor_label: "교과서 06-3 표본평균의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 표로 주어진 모집단 확률변수 $X$에 대해 $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$를 구하고, 크기 3 인 표본의 표본평균 $\overline{X}$의 평균·분산·표준편차를 구하기.
  category: "확률분포표 → 모평균·모분산 → 표본평균 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모집단 확률분포표에서 표본평균의 평균·분산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 에서 표의 Σxp, Σx²p 로 E(X), V(X) 를 구하고 ⑵ 는 V(X)/3 으로 나누기만 하면 끝. 계산 두 겹이지만 도구는 정의 두 개. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "분포표 → E(X) · V(X)=E(X²)-{E(X)}² → E(X̄)=E(X) · V(X̄)=V(X)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\mathrm{E}(X)=0$, $\mathrm{V}(X)=\dfrac{1}{2}$, $\sigma(X)=\dfrac{\sqrt{2}}{2}$ \quad (2) $\mathrm{E}(\overline{X})=0$, $\mathrm{V}(\overline{X})=\dfrac{1}{6}$, $\sigma(\overline{X})=\dfrac{\sqrt{6}}{6}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 X 값과 확률, 표본 크기 3 을 바꿀 수 있음. 제약: 확률의 합이 1 이어야 하고, 대칭 배치(E(X)=0)를 깨면 V(X)=E(X²)-{E(X)}² 계산량이 늘며 σ 가 무리수로 지저분해질 수 있음."
    creative: "(1) 표에 미지수 a 를 넣어 확률 합 1 로 a 를 먼저 구하게(★2) (2) V(X̄)=1/6 을 주고 표본 크기를 역산(★2 · 0531 골조) (3) 표본평균의 확률까지 묻기(★3 · 정규 근사 아님에 주의)."
```

```yaml
- id: RPM-PROB-0514
  page: 87
  vendor_label: "교과서 06-3 표본평균의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑷ 정규분포 $\mathrm{N}(300,\,10^2)$, 크기 25 인 표본에서 $\overline{X}$의 평균·분산, $\overline{X}$가 따르는 정규분포 기호, $Z$로의 표준화, $\mathrm{P}(\overline{X}\ge 302)$.
  category: "표본평균의 분포 → 표준화 → 정규분포표로 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 표준화와 확률(단계 안내형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴→⑷ 가 표본평균 확률 계산의 표준 절차를 그대로 쪼개 놓은 안내형. 학생이 전략을 고를 여지가 없어 통찰 0. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "V(X̄)=100/25=4 → N(300, 2²) → Z=(X̄-300)/2 → P(Z≥1)=0.5-0.3413"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\mathrm{E}(\overline{X})=300$, $\mathrm{V}(\overline{X})=4$ \quad (2) $\mathrm{N}(300,\,2^2)$ \quad (3) $Z=\dfrac{\overline{X}-300}{2}$ \quad (4) $0.1587$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, σ, n, 기준값을 바꿀 수 있음. 제약: (기준값-m)/(σ/√n) 이 제시된 표준정규분포표의 z 값(0.5·1·1.5·2·2.5)과 정확히 맞아야 하고, σ/√n 이 정수면 계산이 깔끔."
    creative: "(1) ⑷ 만 남겨 단계 안내를 없애면 ★2(유형 03 골조) (2) P(X̄≥302)=0.1587 을 주고 n 을 역산(★3 · I-BW) (3) 모집단 한 개체의 확률 P(X≥302) 와 비교하게 해 √n 효과를 묻기(★3 · I-RT)."
```

```yaml
- id: RPM-PROB-0515
  page: 87
  vendor_label: "교과서 06-3 표본평균의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 정규분포 $\mathrm{N}(600,\,24^2)$, 크기 36 인 표본의 표본평균 $\overline{X}$에 대해 $\mathrm{P}(\overline{X}\le 592)$와 $\mathrm{P}(590\le\overline{X}\le 606)$를 표준정규분포표로 구하기.
  category: "표본평균 표준화 → 표준정규분포표 구간 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률(표준정규분포표 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    σ(X̄)=24/6=4 로 표준화하면 ⑴ 은 z≤-2 의 꼬리, ⑵ 는 -2.5≤z≤1.5 로 0 을 사이에 둔 구간이라 표 값을 더한다. 부호와 꼬리·구간 처리(T-부호)만 조심하면 절차. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "σ(X̄)=4 → z 로 환산 → 꼬리는 0.5-표값 · 0 을 낀 구간은 두 표값의 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0.0228$ \quad (2) $0.927$'
  answer_source: "답지"
  figure: "crop:fig-0515.png"
  latex: latex-bank/rpm-prob/items/0515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, σ, n 과 두 기준값. 제약: σ/√n 이 정수이고 (기준값-m)/(σ/√n) 이 첨부한 표준정규분포표에 실린 z 값이어야 함. 표 크롭(fig-0515)을 바꾸지 않으려면 z 를 그 표의 행 안에서 고를 것."
    creative: "(1) 한쪽 구간을 m 위쪽으로 옮겨 두 표값의 차로 만들기(★2 · 0534 골조) (2) P(X̄≤k)=0.0228 을 주고 k 를 역산(★3 · I-BW) (3) 같은 확률을 만드는 표본 크기를 비교(★3)."
```

### 교과서 06-4 모비율과 표본비율

```yaml
- id: RPM-PROB-0516
  page: 89
  vendor_label: "교과서 06-4 모비율과 표본비율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    건전지 500 개를 임의추출해 불량품이 4 개일 때 표본의 불량률 $\hat{p}$.
  category: "표본비율의 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율과 표본비율의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p̂=X/n=4/500 을 기약분수로 정리하는 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "p̂ = 4/500 = 1/125"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{125}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기와 불량 개수. 제약: 기약분수나 소수로 떨어지게 두 수의 비를 고르고, 뒤 구역에서 √(p̂q̂/n) 을 쓰려면 n 을 제곱수로."
    creative: "(1) 표본비율을 주고 불량 개수를 역산(★1) (2) 같은 표본에서 불량률의 신뢰구간까지 묻기(★2 · 0525 골조) (3) 전체 생산량으로 불량품 기대 개수를 환산(★2 · I-RT)."
```

```yaml
- id: RPM-PROB-0517
  page: 89
  vendor_label: "교과서 06-4 모비율과 표본비율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    전체 800 명 중 10월 생일이 60 명인 학교에서 80 명을 임의추출해 8 명이 10월 생일일 때, 모비율 $p$와 표본비율 $\hat{p}$.
  category: "모비율·표본비율의 정의 구분 → 각각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율과 표본비율의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모집단에서 온 60/800 과 표본에서 온 8/80 을 섞지 않는 것이 전부(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "p=60/800=3/40 · p̂=8/80=1/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$p=\dfrac{3}{40}$, $\hat{p}=\dfrac{1}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원·해당 인원·표본 크기·표본 내 인원. 제약: 두 비율이 서로 다른 값이 되도록 골라야 모비율/표본비율 구분이 채점 정보가 됨."
    creative: "(1) p̂ 과 p 의 차를 묻기(★2) (2) 표본 크기를 키우면 p̂ 이 p 에 가까워지는 이유를 서술(★2 · 서술형) (3) p̂ 의 평균·표준편차까지 묻기(★2 · 0520 골조)."
```

### 교과서 06-5 표본비율의 분포

```yaml
- id: RPM-PROB-0518
  page: 89
  vendor_label: "교과서 06-5 표본비율의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모비율 0.8 인 모집단에서 크기 100 인 표본을 임의추출할 때 표본비율 $\hat{p}$의 평균과 표준편차. (구역 공통 지문에 모비율 0.8 이 주어짐)
  category: "표본비율의 평균 p · 표준편차 √(pq/n) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율의 평균·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    E(p̂)=p, σ(p̂)=√(pq/n) 에 p=0.8, q=0.2, n=100 대입. 교과서 구역·통찰 없음·M_total 4 → ★1. 발문 본문이 짧은 것은 구역 공통 지문에 딸린 소문항이기 때문.
  tier: star_1
  mechanism_primary: "E(p̂)=0.8 → σ(p̂)=√(0.8·0.2/100)=0.04"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "평균: $0.8$, 표준편차: $0.04$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율 p 와 표본 크기 n. 제약: pq/n 이 완전제곱이 되도록(p=0.8·0.2 계열 + n 을 제곱수) 골라야 표준편차가 유한소수. 같은 구역의 짝 문항(0519)과 p 는 공유하고 n 만 달라야 지문이 유지됨."
    creative: "(1) 표준편차를 주고 n 을 역산(★2 · I-BW) (2) p̂ 이 따르는 정규분포를 기호로(★1 · 0521 골조) (3) P(p̂≥0.85) 처럼 확률까지 묻기(★3)."
```

```yaml
- id: RPM-PROB-0519
  page: 89
  vendor_label: "교과서 06-5 표본비율의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모비율 0.8 인 모집단에서 크기 2500 인 표본을 임의추출할 때 표본비율 $\hat{p}$의 평균과 표준편차. (0518 과 같은 구역 공통 지문)
  category: "표본비율의 평균 p · 표준편차 √(pq/n) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율의 평균·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 공식에 n 만 2500 으로. 표본 크기가 25배면 표준편차가 1/5 로 준다는 대비가 구역의 의도. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "E(p̂)=0.8 → σ(p̂)=√(0.8·0.2/2500)=0.008"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "평균: $0.8$, 표준편차: $0.008$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 만 바꾸는 짝 문항이므로 0518 의 n 과 제곱수 비(100 : 2500 = 1 : 25)를 유지해야 σ 비교가 깔끔. p 는 지문과 공유."
    creative: "(1) 두 표본 크기의 표준편차 비를 직접 묻기(★2) (2) σ(p̂) 을 절반으로 줄이려면 n 을 몇 배로 해야 하는지(★2 · I-BW) (3) n 이 커질 때 p̂ 의 분포가 좁아지는 이유를 서술(★2 · 서술형)."
```

```yaml
- id: RPM-PROB-0520
  page: 89
  vendor_label: "교과서 06-5 표본비율의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    불량률 10 % 인 공장에서 제품 100 개를 임의추출할 때 표본의 불량률 $\hat{p}$의 평균, 분산, 표준편차.
  category: "백분율을 확률로 → 표본비율의 평균·분산·표준편차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율의 평균·분산·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    10 % 를 p=0.1 로 옮긴 뒤 평균 p, 분산 pq/n=0.0009, 표준편차 0.03. 백분율 → 확률 환산은 이 단원의 표준 손질이라 통찰로 세지 않음. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "p=0.1 → V(p̂)=0.1·0.9/100=0.0009 → σ(p̂)=0.03"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "평균: $0.1$, 분산: $0.0009$, 표준편차: $0.03$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불량률 %(10 → 20·25)과 표본 크기. 제약: pq/n 이 완전제곱이어야 표준편차가 유한소수(p=0.1·0.9 는 0.09/n 이므로 n 이 제곱수면 됨)."
    creative: "(1) 분산을 주고 표본 크기를 역산(★2) (2) 불량품 개수 X 의 평균·분산(이항분포)과 비교(★3 · I-RT) (3) p̂ 이 근사적으로 따르는 정규분포로 확률까지(★3)."
```

```yaml
- id: RPM-PROB-0521
  page: 89
  vendor_label: "교과서 06-5 표본비율의 분포"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    전체 학생의 20 % 가 걸어서 통학하는 학교에서 400 명을 임의추출할 때 표본비율 $\hat{p}$이 근사적으로 따르는 정규분포를 기호로 나타내기.
  category: "표본비율의 정규근사 → N(p, pq/n) 기호 쓰기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율이 따르는 정규분포"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p=0.2, pq/n=0.0004 → 표준편차 0.02 를 N(0.2, 0.02²) 꼴로 적는다. 분산 자리를 제곱 꼴로 쓰는 표기(T-표기)만 주의. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "p=0.2 · σ(p̂)=√(0.2·0.8/400)=0.02 → N(0.2, 0.02²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\mathrm{N}(0.2,\,0.02^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율 %(20 → 40·60)과 표본 크기. 제약: pq/n 이 완전제곱이라야 σ 가 깔끔하고, n 은 근사 조건(np≥5, nq≥5)을 만족할 만큼 커야 함."
    creative: "(1) 이어서 P(p̂≥0.25) 를 표로 구하게(★3) (2) 분포가 N(0.2, 0.01²) 이 되는 n 을 역산(★3 · I-BW) (3) 걸어서 통학하는 학생 수 X 의 분포와 p̂ 의 분포를 연결(★3 · I-RT)."
```

### 교과서 06-6 모평균과 모비율의 추정

```yaml
- id: RPM-PROB-0522
  page: 89
  vendor_label: "교과서 06-6 모평균과 모비율의 추정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정규분포 $\mathrm{N}(m,\,\sigma^2)$의 모평균을 신뢰도 95 % 로 추정하는 유도 과정에서 빈칸 ㈎(표본평균의 분포) ㈏(표준화 식) ㈐(오차한계)에 알맞은 것 쓰기.
  category: "신뢰구간 유도 절차의 빈칸 채우기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균 신뢰구간 공식의 유도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표본평균의 분포 → 표준화 → P(|Z|≤1.96)=0.95 를 m 에 대한 부등식으로 정리하는 교과서 유도를 그대로 따라간다. 동치 변형이 빈칸으로 안내돼 학생이 전략을 세울 여지가 없어 통찰 0. 문자 m, σ, n 뿐이라 Mₐ=2. 교과서 구역 → ★1. [분류 이슈] 공식 유도를 요구해 체감은 ★2 쪽이나 구역 관례대로 ★1 유지.
  tier: star_1
  mechanism_primary: "X̄ ~ N(m, σ²/n) → Z=(X̄-m)/(σ/√n) → P(|Z|≤1.96)=0.95 를 m 부등식으로 → 오차한계 1.96σ/√n"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $\mathrm{N}\left(m,\,\dfrac{\sigma^2}{n}\right)$ \quad ㈏ $\dfrac{\overline{X}-m}{\dfrac{\sigma}{\sqrt{n}}}$ \quad ㈐ $1.96\dfrac{\sigma}{\sqrt{n}}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "신뢰도 95 %(1.96)를 99 %(2.58)로 바꾸는 정도. 제약: 신뢰계수와 확률 값이 짝이어야 하고, 빈칸 ㈐ 는 신뢰계수를 포함한 오차한계 꼴을 유지."
    creative: "(1) 빈칸을 줄여 신뢰구간 공식을 직접 쓰게(★2) (2) 신뢰도가 커지면 구간이 넓어지는 이유를 서술(★2 · 서술형) (3) 모비율 신뢰구간을 같은 방식으로 유도하게(★2 · I-RT)."
```

```yaml
- id: RPM-PROB-0523
  page: 89
  vendor_label: "교과서 06-6 모평균과 모비율의 추정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 정규분포 $\mathrm{N}(m,\,6^2)$에서 크기 100 인 표본의 표본평균이 60 일 때 신뢰도 95 % · 99 % 의 모평균 신뢰구간.
  category: "신뢰구간 공식에 대입 → 신뢰도별 오차한계"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균의 신뢰구간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    σ/√n=0.6 을 구해 60 ± 1.96×0.6, 60 ± 2.58×0.6 을 계산. 신뢰계수만 갈아끼우는 두 번의 대입. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "σ/√n=6/10=0.6 → 60 ± 1.96·0.6 · 60 ± 2.58·0.6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $58.824\le m\le 61.176$ \quad (2) $58.452\le m\le 61.548$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ, n, 표본평균. 제약: σ/√n 이 유한소수여야 하고(n 은 제곱수), 신뢰계수 1.96·2.58 과 곱한 값의 소수 자릿수가 답에 그대로 남으므로 σ/√n 을 0.5·0.6 처럼 짧게."
    creative: "(1) 신뢰구간의 길이만 묻기(★2) (2) 구간 길이가 주어진 값 이하가 되는 n 의 최솟값(★3 · I-BW) (3) 신뢰도 95 % 구간의 양 끝을 주고 표본평균과 σ/√n 을 역산(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0524
  page: 89
  vendor_label: "교과서 06-6 모평균과 모비율의 추정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 크기 400 인 표본의 표본평균이 100, 표본표준편차가 10 일 때 신뢰도 95 % · 99 % 의 모평균 신뢰구간.
  category: "표본표준편차를 모표준편차 대용 → 신뢰구간 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균의 신뢰구간(표본표준편차 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n 이 충분히 크면 표본표준편차를 σ 대신 쓴다는 교과서 규약을 적용해 10/20=0.5 로 계산. 규약을 알면 앞 문항과 완전히 같은 절차라 통찰 0(T-표기 함정만 있음). 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "표본표준편차 10 을 σ 대용 → σ/√n=10/20=0.5 → 100 ± 1.96·0.5 · 100 ± 2.58·0.5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $99.02\le m\le 100.98$ \quad (2) $98.71\le m\le 101.29$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기·표본평균·표본표준편차. 제약: n 은 제곱수이면서 충분히 커야(대용 규약이 성립) 하고, s/√n 을 0.5 같은 짧은 소수로 두면 1.96·2.58 을 곱한 답이 두 자리 소수로 떨어짐."
    creative: "(1) 모표준편차가 주어진 문항과 나란히 놓아 대용 조건을 서술하게(★2 · 서술형) (2) 신뢰구간 길이로 n 을 역산(★3) (3) 신뢰도를 미지수 k 로 두고 구간에서 k 를 역산(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0525
  page: 89
  vendor_label: "교과서 06-6 모평균과 모비율의 추정"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑵ 크기 1600 인 표본의 표본비율이 0.36 일 때 신뢰도 95 % · 99 % 의 모비율 신뢰구간.
  category: "모비율 신뢰구간 공식 대입 → 신뢰도별 오차한계"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율의 신뢰구간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(p̂q̂/n)=√(0.36·0.64/1600)=0.012 를 구한 뒤 0.36 ± 1.96·0.012, 0.36 ± 2.58·0.012. 모평균 신뢰구간과 같은 틀에 표준오차만 바뀐 절차. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "√(p̂q̂/n)=0.012 → 0.36 ± 1.96·0.012 · 0.36 ± 2.58·0.012"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $0.33648\le p\le 0.38352$ \quad (2) $0.32904\le p\le 0.39096$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본비율과 표본 크기. 제약: p̂q̂/n 이 완전제곱이어야 표준오차가 유한소수(0.36·0.64 처럼 두 수 모두 제곱수 비율 + n 제곱수). 표본 내 개수로 주려면 n·p̂ 이 정수."
    creative: "(1) 표본에서 해당 개수를 주고 p̂ 부터 구하게(★2) (2) 신뢰구간 길이가 0.05 이하가 되는 n 의 최솟값(★3 · I-BW) (3) 모평균 신뢰구간과 비교해 표준오차의 차이를 서술(★2 · 서술형)."
```

### 유형 01 표본평균의 평균, 분산, 표준편차; 모집단의 확률분포가 주어진 경우

```yaml
- id: RPM-PROB-0526
  page: 90
  vendor_label: "유형 01 표본평균의 평균, 분산, 표준편차; 모집단의 확률분포가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    표로 주어진 모집단 확률변수 $X$에서 크기 11 인 표본을 뽑을 때 $\mathrm{E}(\overline{X})+\mathrm{V}(\overline{X})$의 값.
  category: "확률분포표 → 모평균·모분산 → E(X̄)+V(X̄)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모집단 확률분포표에서 표본평균의 평균·분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표에서 E(X), E(X²) 를 구해 V(X) 를 만든 뒤 E(X̄)=E(X), V(X̄)=V(X)/11 을 더한다. 표본 크기 11 은 V 만 나누고 E 는 그대로라는 점을 가르기 위한 수치. 유형 대표문제 구역 ★2 출발, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "분포표 → E(X)·V(X) → E(X̄)=E(X) · V(X̄)=V(X)/11 → 두 값의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{16}$'
  answer_source: "답지"
  figure: "crop:fig-0526.png"
  latex: latex-bank/rpm-prob/items/0526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 X 값·확률과 표본 크기 11. 제약: 확률의 합이 1, 표 그림(fig-0526)의 칸 수를 바꾸면 크롭도 다시 만들어야 함. E(X̄)+V(X̄) 가 기약분수로 떨어지려면 V(X) 의 분모와 n 의 곱이 적당해야 함."
    creative: "(1) 표에 미지수 a 를 넣어 확률 합 조건부터 풀게(★2) (2) E(X̄)+V(X̄) 값을 주고 n 을 역산(★3 · I-BW) (3) σ(aX̄+b) 꼴로 선형 변환을 얹기(★3)."
```

```yaml
- id: RPM-PROB-0527
  page: 90
  vendor_label: "유형 01 표본평균의 평균, 분산, 표준편차; 모집단의 확률분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정규분포 $\mathrm{N}(20,\,10^2)$에서 크기 25 인 표본의 표본평균 $\overline{X}$에 대하여 $\mathrm{E}(\overline{X}^2)$.
  category: "V(X̄)=E(X̄²)-{E(X̄)}² 변형 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "E(X̄²)=V(X̄)+{E(X̄)}² 변형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제곱의 기댓값을 바로 구할 수 없으므로 분산의 정의를 옮겨 E(X̄²)=V(X̄)+{E(X̄)}² 로 쓰고 4+400 을 더한다. 분산 정의 이항은 확률과 통계의 표준 공식이라 통찰로 세지 않음. 유형 구역 「중」 ★2, M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "V(X̄)=100/25=4 · E(X̄)=20 → E(X̄²)=4+20²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$404$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, σ, n. 제약: σ²/n 이 정수여야 답이 정수. m 을 0 으로 두면 E(X̄²)=V(X̄) 가 되어 문항 의도가 사라지므로 m≠0."
    creative: "(1) E(X̄²) 를 주고 n 을 역산(★3 · I-BW) (2) E((X̄-k)²) 꼴로 바꿔 전개를 요구(★3) (3) 모집단 X 의 E(X²) 와 비교해 표본 크기의 효과를 묻기(★3 · I-RT)."
```

```yaml
- id: RPM-PROB-0528
  page: 90
  vendor_label: "유형 01 표본평균의 평균, 분산, 표준편차; 모집단의 확률분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=\dfrac{1}{6}(x+1)\ (x=0,\,1,\,2)$인 모집단에서 크기 4 인 표본을 뽑을 때 $\sigma(6\overline{X})$.
  category: "확률질량함수 → 분포표 → σ(X̄) → 상수배 표준편차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수 식에서 표본평균의 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식을 x=0, 1, 2 에 대입해 분포표를 만든 뒤 E(X), V(X) → V(X̄)=V(X)/4 → σ(6X̄)=6σ(X̄). 표 대신 식으로 주어진 것과 상수배 표준편차 σ(aX)=|a|σ(X) 처리(T-표기)가 이 문항의 두 갈림. 유형 「중」 ★2, 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "식 → 분포표(1/6, 2/6, 3/6) → V(X) → V(X̄)=V(X)/4 → σ(6X̄)=6σ(X̄)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "질량함수의 계수와 x 의 범위, 표본 크기, 곱하는 상수 6. 제약: 확률의 합이 1 이 되도록 계수를 맞춰야 하고(1/6·(x+1) 은 x=0,1,2 에서 합 1), 상수배 뒤 근호가 정리되려면 상수²·V(X)/n 이 유리수 제곱꼴이어야 함."
    creative: "(1) σ(aX̄+b) 로 평행이동을 얹어 b 가 표준편차에 영향 없음을 확인(★2) (2) σ(6X̄)=√5 를 주고 표본 크기를 역산(★3 · I-BW) (3) 질량함수에 미지수를 넣어 합 1 조건부터 풀게(★3)."
```

### 유형 02 표본평균의 평균, 분산, 표준편차; 모집단이 주어진 경우

```yaml
- id: RPM-PROB-0529
  page: 90
  vendor_label: "유형 02 표본평균의 평균, 분산, 표준편차; 모집단이 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1, 1, 1, 1, 2, 6 이 적힌 카드 6장에서 2장을 임의추출할 때 표본평균 $\overline{X}$의 분산 $\mathrm{V}(\overline{X})$.
  category: "자료 → 모집단 확률분포표 → V(X)/n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모집단 자료에서 표본평균의 평균·분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 숫자가 겹친 자료를 확률 4/6, 1/6, 1/6 의 분포표로 먼저 옮기는 것이 핵심 단계이고, 그 뒤는 V(X̄)=V(X)/2. 표본을 직접 나열하려 들면 길어지지만 모집단 분포부터 세우는 표준 골조를 쓰면 짧다. 유형 대표문제 ★2 출발, 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "자료 → 분포표(1:4/6, 2:1/6, 6:1/6) → V(X) → V(X̄)=V(X)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드에 적힌 수와 중복 개수, 뽑는 장수. 제약: 카드 수는 중복 도수의 합과 같아야 하고, V(X) 가 기약분수로 떨어지도록 값의 분산을 크게 벌리는 6 같은 극단값을 하나 두면 의도가 산다."
    creative: "(1) V(X̄)=5/3 을 주고 뽑는 장수를 역산(★3 · I-BW) (2) 표본평균의 확률분포표를 직접 만들게(★3 · 노동량 상승) (3) 중복 도수에 미지수를 넣고 E(X) 조건으로 결정(★3 · I-CON)."
```

```yaml
- id: RPM-PROB-0530
  page: 90
  vendor_label: "유형 02 표본평균의 평균, 분산, 표준편차; 모집단이 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1, 2, 3, 4 가 적힌 구슬이 각각 3개씩 든 주머니에서 3개를 임의추출할 때 $\mathrm{E}(2\overline{X}-3)+\mathrm{V}(6\overline{X})$의 값. 5지선다.
  category: "균등 분포표 → E(X̄)·V(X̄) → 선형 변환 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모집단 자료에서 표본평균의 평균·분산(선형 변환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도수가 모두 같으므로 모집단은 1~4 의 균등분포. E(X̄)=E(X), V(X̄)=V(X)/3 을 구한 뒤 E(2X̄-3)=2E(X̄)-3, V(6X̄)=36V(X̄) 로 옮긴다. 분산에는 상수항이 빠지고 계수는 제곱된다는 처리(T-표기)가 유일한 함정. 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "균등분포 → E(X)=5/2 · V(X)=5/4 → V(X̄)=V(X)/3 → 2E(X̄)-3 + 36V(X̄)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구슬에 적힌 수 집합, 각 개수, 표본 크기, 선형 변환 계수(2·-3·6). 제약: 개수가 모두 같아야 균등분포 골조가 유지되고, 36V(X̄) 가 정수이려면 계수²·V(X)/n 이 정수여야 선택지가 깔끔."
    creative: "(1) E 와 V 를 따로 묻지 않고 σ(aX̄+b) 로 통합(★2) (2) 구슬 개수를 달리해 균등이 아니게 만들기(★3) (3) 주어진 값이 17 이 되도록 하는 계수를 역산(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0531
  page: 90
  vendor_label: "유형 02 표본평균의 평균, 분산, 표준편차; 모집단이 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    0, 1, 2, 3 이 적힌 공이 각각 50, 50, 50, 100 개 든 상자에서 크기 $n$인 표본을 뽑을 때 표본평균의 분산이 $\dfrac{1}{50}$이 되는 $n$.
  category: "도수 → 분포표 → V(X)/n = 주어진 값 → n"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "V(X̄) 값에서 표본 크기 n 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도수 50:50:50:100 을 확률 1/5, 1/5, 1/5, 2/5 로 옮겨 V(X) 를 구한 뒤 V(X)/n=1/50 을 n 에 대해 푼다. 역방향처럼 보이지만 한 식의 미지수 대입이라 통찰로 세지 않음(I-BW 불인정 기준). 서술형 태그는 ★ 조정 없음. 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "도수 → 확률 (1/5, 1/5, 1/5, 2/5) → V(X) → V(X)/n = 1/50 → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$68$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공에 적힌 수, 도수 비, 목표 분산. 제약: n 이 자연수로 떨어지도록 V(X) 를 목표 분산으로 나눈 값이 정수여야 함(도수 비를 바꾸면 V(X) 의 분모가 달라져 목표 분산도 함께 조정해야 한다)."
    creative: "(1) σ(X̄) 를 주고 n 을 묻기(★2 · 근호 처리 추가) (2) 도수 하나를 미지수로 두고 E(X) 조건과 함께 연립(★3 · I-CON) (3) V(X̄) 가 주어진 값 이하가 되는 n 의 최솟값(★3 · 부등식·경계)."
```

### 유형 03 표본평균의 확률

```yaml
- id: RPM-PROB-0532
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    통근 시간이 평균 50분, 표준편차 10분인 정규분포일 때 25명을 임의추출한 평균 통근 시간이 45분 이하일 확률(표준정규분포표 이용).
  category: "표본평균의 분포 → 표준화 → 꼬리 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률(표준화·표준정규분포표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=10/5=2 로 X̄ ~ N(50, 2²), z=(45-50)/2=-2.5 의 왼쪽 꼬리이므로 0.5-P(0≤Z≤2.5). 개체 X 가 아니라 표본평균이라 σ 를 √n 으로 나눈다는 점이 유형의 핵심. 유형 대표문제 ★2 출발, 통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=2 → z=-2.5 → 0.5 - P(0≤Z≤2.5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0062$'
  answer_source: "답지"
  figure: "crop:fig-0532.png"
  latex: latex-bank/rpm-prob/items/0532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·표본 크기·기준 시간. 제약: σ/√n 이 정수이고 z 가 첨부 표(fig-0532)에 있는 값(1·1.5·2·2.5)이어야 함. 표본 크기는 제곱수."
    creative: "(1) 기준을 평균 위쪽으로 옮겨 여사건으로(★2) (2) 확률 0.0062 를 주고 표본 크기를 역산(★3 · I-BW) (3) 한 사람의 통근 시간이 45분 이하일 확률과 비교하게 해 √n 효과를 묻기(★3 · I-RT)."
```

```yaml
- id: RPM-PROB-0533
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정규분포 $\mathrm{N}(60,\,10^2)$에서 크기 16 인 표본의 표본평균에 대하여 $\mathrm{P}(55\le\overline{X}\le 65)$(표준정규분포표 이용).
  category: "표본평균 표준화 → 평균 대칭 구간 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률(표준화·표준정규분포표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=10/4=2.5 이고 구간이 평균 60 에 대칭이므로 |Z|≤2, 즉 2×P(0≤Z≤2). 대칭이라는 것만 보면 표 조회 한 번. 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=2.5 → |Z|≤2 → 2·P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9544$'
  answer_source: "답지"
  figure: "crop:fig-0533.png"
  latex: latex-bank/rpm-prob/items/0533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m, σ, n, 구간 양 끝. 제약: σ/√n 이 유한소수이고 두 끝이 m 에서 같은 거리여야 대칭 골조 유지. 비대칭으로 두면 0534 골조로 바뀐다."
    creative: "(1) 구간을 비대칭으로 바꿔 표값의 차·합을 가르기(★2) (2) P(|X̄-60|≤k)=0.9544 에서 k 를 역산(★3 · I-BW) (3) 같은 확률을 유지하며 n 을 두 배로 할 때 구간 길이 변화를 묻기(★3)."
```

```yaml
- id: RPM-PROB-0534
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모의고사 수학 성적이 평균 52점, 표준편차 18점인 정규분포일 때 81명을 임의추출한 성적 평균이 47점 이상 50점 이하일 확률(표준정규분포표 이용).
  category: "표본평균 표준화 → 평균 한쪽에 놓인 구간 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률(표준화·표준정규분포표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=18/9=2 로 z 는 -2.5 와 -1, 둘 다 음수라 표값을 더하지 않고 빼야 한다(T-부호). 대칭 구간 문항(0533)과 짝을 이루는 변별점. 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=2 → -2.5≤Z≤-1 → P(0≤Z≤2.5)-P(0≤Z≤1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.1525$'
  answer_source: "답지"
  figure: "crop:fig-0534.png"
  latex: latex-bank/rpm-prob/items/0534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·표본 크기·구간 양 끝. 제약: σ/√n 이 정수이고 두 z 값이 모두 첨부 표(fig-0534)에 있어야 하며, 두 끝을 평균의 같은 쪽에 두어야 '차' 골조가 유지된다."
    creative: "(1) 구간이 평균을 걸치게 옮겨 합 골조로(★2) (2) 확률을 주고 구간의 한쪽 끝을 역산(★3 · I-BW) (3) 학생 수를 곱해 기대 인원을 묻기(★3 · 0537 골조)."
```

```yaml
- id: RPM-PROB-0535
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공 한 개의 무게가 평균 $300\,\mathrm{g}$, 표준편차 $24\,\mathrm{g}$인 정규분포일 때 64개를 임의추출한 무게의 평균이 $294\,\mathrm{g}$ 이상일 확률. 5지선다.
  category: "표본평균 표준화 → 평균을 포함하는 반무한 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률(표준화·표준정규분포표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=24/8=3 이므로 z≥-2, 기준이 평균보다 작아 0.5+P(0≤Z≤2) 로 더한다. 선택지에 0.9772 와 0.9332 가 함께 있어 z 계산 실수를 잡는 구조. 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=3 → Z≥-2 → 0.5 + P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0535.png"
  latex: latex-bank/rpm-prob/items/0535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·표본 크기·기준 무게. 제약: σ/√n 이 정수, z 가 첨부 표(fig-0535)의 값이어야 하고, 선택지는 z 부호를 틀렸을 때 나오는 값(0.0228 등)을 함께 넣어야 변별이 산다."
    creative: "(1) 기준을 평균 위로 올려 꼬리 확률로(★2) (2) 무게의 합 조건으로 바꿔 표본평균으로 환산하게(★3 · 0537 골조 · I-RT) (3) 확률이 0.9772 이상이 되는 표본 크기의 최솟값(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0536
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정규분포 $\mathrm{N}(m,\,20^2)$에서 크기 25 인 표본의 표본평균에 대하여 $\mathrm{P}(|\overline{X}-m|\ge 6)$(표준정규분포표 이용).
  category: "절댓값 조건 → m 이 소거된 표준화 → 여사건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "모평균 m 을 모르는 채로도 |X̄-m|≥6 을 표준화하면 m 이 소거돼 |Z|≥6/4 만 남는다는 것을 보고, 바깥 구간이므로 여사건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률(표준화·표준정규분포표)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    m 이 미지수라 당황하기 쉽지만 표준화하면 분자에서 m 이 사라져 |Z|≥1.5 가 된다. 바깥 구간이므로 1-2P(0≤Z≤1.5). 동치 변환 통찰 1개(EQV d1)뿐이라 insight_type 은 절차형, 유형 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=4 → |Z|≥1.5 (m 소거) → 1 - 2·P(0≤Z≤1.5)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$0.1336$'
  answer_source: "답지"
  figure: "crop:fig-0536.png"
  latex: latex-bank/rpm-prob/items/0536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ, n, 절댓값 기준(6). 제약: 기준/(σ/√n) 이 첨부 표(fig-0536)의 z 값이어야 하고, m 은 끝까지 소거되므로 값을 주지 않는 것이 이 문항의 설계."
    creative: "(1) 부등호를 ≤ 로 바꿔 안쪽 구간(★2) (2) P(|X̄-m|≥k)=0.1336 에서 k 나 n 을 역산(★3 · I-BW) (3) 모표준편차도 문자로 두고 확률 조건에서 비를 구하게(★4 · Mₐ 상승)."
```

```yaml
- id: RPM-PROB-0537
  page: 91
  vendor_label: "유형 03 표본평균의 확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    비누 한 개의 무게가 평균 $100\,\mathrm{g}$, 표준편차 $8\,\mathrm{g}$인 정규분포일 때, 4개 한 세트의 무게가 $392\,\mathrm{g}$ 이상 $416\,\mathrm{g}$ 이하이면 정품이다. 5000 세트 중 정품 세트의 평균 개수(표준정규분포표 이용).
  category: "합 조건 → 표본평균 조건 환산 → 확률 → 기대 개수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4개의 무게 '합' 조건 392~416 을 4로 나눠 표본평균 조건 98~104 로 옮겨야 표본평균의 분포 N(100, 4²) 를 쓸 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합의 조건을 표본평균으로 환산한 확률·기대 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표본평균이 발문에 나오지 않고 '4개의 합'으로만 주어져, 합을 4로 나눠 표본평균 구간으로 옮기는 표현 전환이 진입 장벽이다. 그 뒤 σ(X̄)=8/2=4 로 z 는 -0.5 와 1, 평균을 걸친 구간이라 두 표값의 합. 마지막에 5000 을 곱해 기대 세트 수로 환산. 벤더 「상중」 ★3 출발, 통찰 1개(d2)로 +1 조건(2개 이상 또는 d3)에 못 미쳐 ★3 유지.
  tier: star_3
  mechanism_primary: "합 392~416 → 표본평균 98~104 → σ(X̄)=4 → -0.5≤Z≤1 → 확률 × 5000"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2664$'
  answer_source: "답지"
  figure: "crop:fig-0537.png"
  latex: latex-bank/rpm-prob/items/0537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "개체 평균·표준편차, 세트 크기 4, 합의 양 끝, 세트 수 5000. 제약: 합의 양 끝이 세트 크기로 나누어떨어져야 하고, (평균 환산값-m)/(σ/√n) 이 첨부 표(fig-0537)의 z 값이어야 하며, 확률×세트 수가 정수가 되도록 세트 수를 잡을 것."
    creative: "(1) 합 조건을 표본평균 조건으로 바로 주면 표현 전환이 사라져 ★2 (2) 정품 판정 기준을 한쪽만 주고(392g 이상) 세트 수를 곱하기(★3) (3) 정품 세트가 3000 개 이상이 되도록 하는 기준 무게를 역산하면 I-BW 가 더해져 ★4 (4) 세트 크기를 미지수 n 으로 두고 정품률이 주어진 값이 되는 n 을 찾으면 ★4."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 18 · ★2 11 · ★3 1 · ★4 0 · ★5 0 (교과서 구역 18문이 모두 ★1, 유형 01~03 의 12문이 ★2 이상)
- 통찰 라벨이 붙은 문항 2 (0536 I-EQV d1 · 0537 I-RT d2) · insight_type 기준으로는 통찰형 1(0537) · 절차형 29 · premium 0 — dokdu-check 은 insights 가 비어 있지 않은 문항을 통찰형으로 세어 2 로 보고한다
- M_total 분포: 4 → 11문 · 5 → 4문 · 6 → 12문 · 7 → 3문 (평균 5.3)
- type_hint 상위: 「표본평균의 확률(표준화·표준정규분포표)」 5(0515 를 같은 골조로 보면 6) · 「표본비율의 평균·분산·표준편차」 3 · 「모집단 확률분포표에서 표본평균의 평균·분산」 2 · 「모집단 자료에서 표본평균의 평균·분산」 2 · 「모비율과 표본비율의 계산」 2 · 「모평균의 신뢰구간」 2
- 대상층: 하위권 18 · 중하위권 10 · 중위권 2 (0536 · 0537)
- 그림: 8문 — 표준정규분포표 크롭 7(0515 · 0532 · 0533 · 0534 · 0535 · 0536 · 0537) · 모집단 확률분포표 1(0526). 0510 · 0513 은 본문 안에 표 이미지가 들어가지만 전사본 figure 필드는 없어 `none` 으로 둠.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0510 | 복원추출 9가지를 표본평균 분포표로 옮기는 노동량(M_total 6)이 다른 교과서 문항보다 크지만, 교과서 구역 ★1 하한 관례대로 ★1 유지 | ★1 / ★2 |
| RPM-PROB-0522 | 신뢰구간 공식의 유도 과정을 요구해 체감은 ★2 쪽이나 빈칸이 단계를 안내하고 구역이 교과서라 ★1 유지 | ★1 / ★2 |
| RPM-PROB-0518 · 0519 | 전사본 body 가 「크기가 100인 표본」처럼 짧은 것은 구역 공통 지문(모비율 0.8)에 딸린 소문항이기 때문. summary 에 지문 내용을 합쳐 적었고 판정 자체는 애매하지 않음 | ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: (1) 「표본평균의 확률(표준화·표준정규분포표)」 — 이 범위에서 가장 많이 반복되며(0515 · 0532~0536), 구간이 평균에 대칭인가(0533) · 한쪽에 몰렸는가(0534) · 평균을 걸치는가(0535 · 0537) · 절댓값 바깥인가(0536) 로 표값을 더하는지 빼는지가 갈리므로 **표값 합성 방식별 하위 유형**으로 쪼개는 것이 변형 생성에 유리하다. (2) 「합·개수 조건을 표본평균으로 환산」(0537) 은 표현 전환이 진입 장벽이라 별도 유형으로 세울 것.
- **통합해도 될 유형**: RPM 의 유형 01(모집단의 확률분포가 주어진 경우)과 유형 02(모집단이 주어진 경우)는 「자료·질량함수 → 모집단 확률분포표」라는 앞 단계만 다르고 뒤는 E(X̄)=E(X), V(X̄)=V(X)/n 으로 같다. 카탈로그에서는 **「표본평균의 평균·분산」 한 유형 + 입력 형태(표/자료/질량함수) 변형 축**으로 묶는 편이 낫다. 교과서 06-3 의 0511~0513 도 같은 유형의 ★1 층이다.
- **신뢰구간 계열**(0522~0525)은 모평균·모비율이 표준오차만 다르고 공식 틀이 같으므로 한 유형 아래 두 변종으로 두고, 신뢰구간 길이·n 역산(이 범위에는 없음)을 별도 상위 유형으로 예약해 둘 것.
