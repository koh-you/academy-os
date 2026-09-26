---
name: mechanism-데이터-RPM-CALC2-02-p2
description: RPM 미적분Ⅱ 02 급수(2/3 · 유형 05~13) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 02 급수
  unit_code: CALC2-02
  part: "2/3"
  extract_range: "28~32쪽 · 0180~0213"
  total_problems: 34
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 02 급수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 02 급수 단원의 둘째 범위(28~32쪽 · 0180~0213 · 34문항)를 다룬다. 범위 전체가 「유형 05 ~ 유형 13」 구역(급수의 수렴과 발산 · 급수의 성질 · 등비급수의 합 · 합이 주어진 등비급수 · 등비급수의 수렴 조건 · Σrⁿ 이 수렴할 때 항상 수렴하는 급수 · Sₙ 과 aₙ 의 관계 · 순환소수 · 도형에의 활용: 좌표)의 유형별 문제다. 각 유형의 첫 문항은 tag 「대표문제」(level 없음)이고 나머지는 난이도 중하·중·상중이 붙어 있으며, 서술형 tag 3문(0192 · 0200 · 0209), 그림 3문(0211~0213)이 있다. RPM 은 구역이 곧 난이도 층이므로 유형 구역은 ★2 출발(중하 ★1~2 · 상중 ★3)이고 M_total·통찰로 ±1 조정했다. 결과는 ★1 3문 · ★2 27문 · ★3 4문이며, 통찰이 붙은 문항은 10문(depth 2 이상의 통찰형은 0186 · 0210 · 0213 세 문항)이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다(RPM 유형 제목을 기본 후보로 쓰되 골조가 갈리는 곳은 「유형 제목 — 세부 골조」 꼴로 적었다).

## 문항 데이터

### 유형 05 급수의 수렴과 발산

```yaml
- id: RPM-CALC2-0180
  page: 28
  vendor_label: "유형 05 급수의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ㄱ Σ3n/(2n+1) · ㄴ Σ1/((2n-1)(2n+1)) · ㄷ Σ(√(n+3)-√(n+2)) 중 수렴하는 급수를 고르기. 5지선다.
  category: "일반항 극한 판정 + 부분합(부분분수·망원) 극한 → 수렴 여부"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(일반항 극한 · 부분합 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 일반항 → 3/2 ≠ 0 이라 발산, ㄴ 은 부분분수로 부분합 (1/2)(1-1/(2n+1)) → 1/2 수렴, ㄷ 은 망원합 부분합 √(n+3)-√3 → ∞ 발산. 세 갈래를 각각 표준 도구로 판정하는 절차형. ㄷ 이 「일반항 → 0 인데 발산」인 함정 하나. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ 일반항 극한 ≠ 0 → 발산 / ㄴ 부분분수 부분합 → 수렴 / ㄷ 망원 부분합 → ∞ 발산 → ㄴ 만 수렴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 분수 계수(4n/(3n+2) 등)·ㄴ 의 인수 간격(n(n+1)·(3n-1)(3n+2))·ㄷ 의 근호 안 상수(√(n+1)-√n). 제약: ㄴ 은 부분분수가 망원되는 꼴, ㄷ 은 일반항이 0 으로 가지만 부분합이 발산하도록 유지, 선택지는 ㄱㄴㄷ 조합 5개."
    creative: "(1) 「발산하는 것」을 묻기(★2 유지) (2) ㄷ 을 log(n+1)-log n 망원 발산으로 바꾸기(★2) (3) 「일반항 → 0 이면 수렴」의 역이 거짓임을 묻는 진위 보기로 바꾸면 성질 유형과 결합해 ★3(I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0181
  page: 28
  vendor_label: "유형 05 급수의 수렴과 발산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    항을 나열한 다섯 급수(조화급수 · 1/(2n·(2n+2)) 꼴 · (n+1)/n 꼴 · 1/(√(n+1)-√n) 꼴 · log(n/(2n+1)) 꼴) 중 수렴하는 것 하나 고르기.
  category: "나열된 항 → 일반항 복원 → 일반항 극한 또는 부분합으로 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(일반항 극한 · 부분합 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①은 조화급수(부분합 발산), ③은 일반항 → 1, ④는 유리화하면 √(n+1)+√n → ∞, ⑤는 일반항 → log(1/2) ≠ 0 으로 모두 발산. ②만 (1/4)Σ1/(n(n+1)) 로 부분분수 망원 → 1/4 수렴. 일반항 복원이 한 단계 더 들어가지만 도구는 표준. level 중 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "나열 항 → 일반항 복원 → ①③④⑤ 일반항 극한 ≠ 0 또는 부분합 발산 / ② 부분분수 망원 → 수렴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "②의 인수 간격(1/(1·3)+1/(3·5)+…)·④의 근호(1/(√(n+2)-√n))·⑤의 로그 안 분수. 제약: 수렴하는 선택지는 하나만, 조화급수를 쓰면 발산 근거(부분합 하한)를 답지에 둘 것."
    creative: "(1) 정답을 발산 쪽으로 바꿔 「발산하는 것의 개수」(★2) (2) 나열 대신 Σ 표기로 주고 수렴하는 급수의 합까지 묻기(★2) (3) log 항을 log((n+1)/n) 망원으로 바꿔 부분합 log(n+1) 발산을 보게 하면 부분합 계산이 두 갈래 → ★3 후보."
```

```yaml
- id: RPM-CALC2-0182
  page: 28
  vendor_label: "유형 05 급수의 수렴과 발산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㄱ Σ2/(n(n+2)) · ㄴ Σ(1/√(n+1)-1/√(n+2)) · ㄷ Σ(√(n²+2n)-n) 중 발산하는 급수를 있는 대로 고르기.
  category: "부분분수·망원 부분합 → 수렴 / 유리화 일반항 극한 ≠ 0 → 발산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(일반항 극한 · 부분합 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 1/n-1/(n+2) 로 부분합 3/2-1/(n+1)-1/(n+2) → 3/2 수렴, ㄴ 은 망원 → 1/√2 수렴. ㄷ 은 유리화하면 2n/(√(n²+2n)+n) → 1 ≠ 0 이라 발산. 0180 과 같은 세 도구를 발산 쪽으로 물은 절차형. level 중 → ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ 부분분수(간격 2) 부분합 → 3/2 / ㄴ 망원 → 1/√2 / ㄷ 유리화 일반항 → 1 ≠ 0 발산 → ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 간격(n(n+3) → 부분합에 세 항 남음)·ㄴ 의 근호 안 상수·ㄷ 의 √(n²+an)-n(극한 a/2). 제약: ㄷ 은 극한이 0 이 아니도록, ㄱ 은 부분합에 남는 항을 답지에 명시."
    creative: "(1) 수렴하는 것의 합을 함께 묻기(★2) (2) ㄷ 을 √(n²+2n)-(n+1)(극한 0 · 부분합은 발산)로 바꾸면 「일반항 → 0 이어도 발산」 함정이 실제로 작동 → ★3 후보(I-EQV d1) (3) 보기를 「수렴 ↔ 일반항 → 0」 명제 진위로 바꾸면 성질 유형(0185)으로 이동."
```

### 유형 06 급수의 성질

```yaml
- id: RPM-CALC2-0183
  page: 28
  vendor_label: "유형 06 급수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수렴하는 두 급수 Σaₙ, Σbₙ 에 대해 Σ(5aₙ+3bₙ)=18, Σ(3aₙ-2bₙ)=7 일 때 Σ(aₙ+bₙ) 의 값.
  category: "급수의 선형성 → 두 합을 미지수로 연립 → 합 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형 결합으로 주어진 두 합 → 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σaₙ=A, Σbₙ=B 로 두면 급수의 성질로 5A+3B=18, 3A-2B=7. 소거하면 19A=57 → A=3, B=1 → A+B=4. 두 급수가 수렴한다는 전제가 성질 적용의 조건임을 확인하는 것 외에 사고 분기 없음. 대표문제·level 없음 → ★2 출발, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Σaₙ=A, Σbₙ=B → 성질로 5A+3B=18, 3A-2B=7 → A=3, B=1 → A+B=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (5,3),(3,-2) 와 우변 18, 7. 제약: 연립의 해 A, B 가 정수(또는 간단한 유리수)이고 묻는 조합 aₙ+bₙ 의 값도 정수가 되게."
    creative: "(1) 묻는 것을 Σ(2aₙ-bₙ) 처럼 다른 조합으로(★2) (2) 조건 하나를 Σaₙ² 같은 비선형으로 주면 성질이 안 통함을 확인해야 해 ★3(I-EQV d1) (3) 「수렴한다」 전제를 빼고 진위를 묻는 보기(0185 유형)로 전환하면 ★2~3."
```

```yaml
- id: RPM-CALC2-0184
  page: 28
  vendor_label: "유형 06 급수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σbₙ=2, Σ(2aₙ+3bₙ)=12 일 때 Σaₙ 의 합. 5지선다.
  category: "급수의 선형성 → 한 합 대입 → 다른 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형 결합으로 주어진 두 합 → 연립)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2Σaₙ+3·2=12 → Σaₙ=3. 성질 한 번, 대입 한 번. level 중하 → ★1~2 출발, 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "Σ(2aₙ+3bₙ)=2Σaₙ+3Σbₙ → 2A+6=12 → A=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Σbₙ 의 값, 계수 (2,3), 우변 12. 제약: Σaₙ 이 선택지 안 정수."
    creative: "(1) 두 선형 결합을 주고 연립하게 하면 0183 골조(★2) (2) Σ(aₙ+1) 처럼 상수항을 섞어 「Σ1 은 발산」을 짚게 하면 ★2 (3) Σbₙ 대신 부분합 Sₙ 의 극한으로 주면 급수 정의 확인 한 단계 추가(★2)."
```

```yaml
- id: RPM-CALC2-0185
  page: 28
  vendor_label: "유형 06 급수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 수열에 대한 명제 ㄱ(Σaₙ, Σ(aₙ+bₙ) 수렴 → Σbₙ 수렴) · ㄴ(둘 다 수렴 → lim aₙbₙ=0) · ㄷ(Σaₙ 수렴 → Σ(1-aₙ) 수렴) 중 옳은 것 고르기. 5지선다.
  category: "급수 성질(차의 급수) + 수렴 급수의 일반항 → 0 + 일반항 판정으로 진위"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질 진위 판정(ㄱㄴㄷ 명제)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 bₙ=(aₙ+bₙ)-aₙ 으로 성질 적용 → 참. ㄴ 은 수렴 급수의 일반항이 0 으로 가므로 aₙbₙ → 0 → 참. ㄷ 은 1-aₙ → 1 ≠ 0 이라 발산 → 거짓. 세 명제 모두 정리를 그대로 적용해 판정되고 반례 설계가 필요 없다. 일반 수열 명제라 Mₐ 3. level 중 → ★2, 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ 차의 급수 성질 → 참 / ㄴ 수렴 급수 일반항 → 0 → 곱 → 0 참 / ㄷ 일반항 → 1 ≠ 0 발산 거짓 → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄷ 의 상수(Σ(2-aₙ) · Σ(aₙ+3)) 와 ㄴ 의 결론 형태(lim(aₙ+bₙ)=0). 제약: 정리 적용만으로 진위가 갈리는 명제를 유지하고, 정답 조합이 선택지에 하나만 있게."
    creative: "(1) ㄷ 을 「Σaₙ 수렴 → Σaₙ² 수렴」처럼 반례(aₙ=(-1)ⁿ/√n 는 교육과정 밖)가 어려운 명제로 바꾸지 말 것 — 대신 「Σaₙbₙ 수렴」류 반례 명제를 넣으면 0186 골조 ★3(I-BW d2) (2) 명제를 「역·대우」로 바꿔 논리 방향을 묻기(★2~3) (3) 급수 대신 수열 극한 성질과 섞으면 단원 01 과 결합(★3 · I-XU 아님 — 같은 과목 인접 단원)."
```

```yaml
- id: RPM-CALC2-0186
  page: 29
  vendor_label: "유형 06 급수의 성질"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 수열에 대한 다섯 명제(Σaₙbₙ 발산 → 수열 발산 · Σaₙ, Σaₙbₙ 수렴 → Σbₙ 수렴 · 둘 다 발산 → 합 발산 · 수렴+발산 → 합 발산 · Σ1/aₙ 수렴 → Σaₙ 수렴) 중 옳은 것 하나.
  category: "네 거짓 명제의 반례 설계 + 참 명제(수렴+발산 → 합 발산)의 귀류 근거"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 거짓 명제가 요구하는 성질(곱은 수렴·한쪽은 발산 등)에서 거꾸로 수열을 설계 — aₙ=bₙ=1, aₙ=1/2ⁿ·bₙ=1, aₙ=1·bₙ=-1, aₙ=2ⁿ"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 성질 진위 판정(반례 설계형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ④만 참: Σ(aₙ+bₙ) 이 수렴하면 Σbₙ=Σ(aₙ+bₙ)-Σaₙ 도 수렴해 모순. 나머지는 반례가 필요하다 — ① aₙ=bₙ=1(수열은 수렴하나 곱의 급수 발산), ② aₙ=1/2ⁿ, bₙ=1, ③ aₙ=1, bₙ=-1, ⑤ aₙ=2ⁿ. 명제마다 목표 성질에서 수열을 역설계해야 하므로 통찰 1개(BW d2). level 상중 → ★3 출발, 통찰 1·M_total 8 → ★3 유지.
    [분류 이슈] 반례 구성은 10유형에 직접 대응하는 코드가 없어 I-BW(목표 성질 → 수열 역설계)로 라벨했다.
  tier: star_3
  mechanism_primary: "④ 귀류(합 수렴 가정 → Σbₙ 수렴 모순) → 참 / ①②③⑤ 목표 성질에서 반례 수열 역설계 → 거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제의 배치 순서와 참 명제의 위치, 거짓 명제 하나를 「Σaₙ 수렴 → Σ|aₙ| 수렴」 같은 교육과정 밖 명제로 바꾸지 말 것. 제약: 참 명제는 정확히 하나, 각 거짓 명제의 반례가 등비수열·상수수열 수준에서 잡히게."
    creative: "(1) 「옳은 것만을 있는 대로」 ㄱㄴㄷ 로 바꾸고 참 명제를 둘 두면 반례와 증명이 섞여 ★3 유지 (2) 거짓 명제에 대해 「반례를 제시하시오」 서술형으로 바꾸면 BW 가 답안 본문이 되어 ★3~4 (3) 명제를 수열 극한 성질(단원 01)과 급수 성질의 혼합으로 짜면 판별 기준이 둘로 갈려 ★4 후보(I-MI 추가)."
```

### 유형 07 등비급수의 합

```yaml
- id: RPM-CALC2-0187
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    Σ(5ⁿ⁺²-4ⁿ⁺²)/6ⁿ 의 합. 5지선다.
  category: "지수 분리 → 두 등비급수(공비 5/6, 4/6) → 각 합 → 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 합 — 두 등비급수로 분리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    25Σ(5/6)ⁿ-16Σ(2/3)ⁿ = 25·5-16·2 = 125-32 = 93. 지수 n+2 를 상수 25, 16 으로 꺼내는 것과 첫째항이 (5/6)¹ 임을 지키는 것이 전부. 대표문제·level 없음 → ★2 출발, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(5ⁿ⁺²-4ⁿ⁺²)/6ⁿ = 25(5/6)ⁿ-16(2/3)ⁿ → 25·(5/6)/(1/6) - 16·(2/3)/(1/3) → 125-32 = 93"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (5,4,6) → (3,2,4)·(7,5,8) 등과 지수 오프셋 n+2 → n+1, n-1. 제약: 두 공비가 모두 (-1,1) 안이고 결과가 정수·선택지 간격이 등차."
    creative: "(1) 분모를 6ⁿ⁺¹ 로 두어 상수 처리 방향을 바꾸기(★2) (2) 한 항을 (-4)ⁿ⁺² 로 바꿔 부호 교대 공비(★2 · T-부호) (3) 분자를 등비수열의 합 1+2+…+2ⁿ⁻¹ 로 주면 0189 골조, 분모를 등비수열 곱으로 주면 부분분수와 결합해 ★3."
```

```yaml
- id: RPM-CALC2-0188
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σ(1/2)ⁿ cos(nπ+π/3) 의 합. 5지선다.
  category: "cos(nπ+θ)=(-1)ⁿcosθ 로 부호 수열화 → 공비 -1/2 등비급수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각함수 항 cos(nπ+π/3) 을 (-1)ⁿ·(1/2) 부호 수열로 옮겨야 등비급수가 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 합 — 삼각함수·부호 교대 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(nπ+π/3)=(-1)ⁿcos(π/3)=(-1)ⁿ/2 이므로 급수는 (1/2)Σ(-1/2)ⁿ = (1/2)·(-1/2)/(3/2) = -1/6. 삼각 표현을 부호 수열로 전환하는 착안 하나(RT d1), 그 뒤는 공식 한 줄. level 중 → ★2, 통찰 1·M_total 5 → ★2 유지(통찰이 있어 −1 하지 않음).
  tier: star_2
  mechanism_primary: "cos(nπ+π/3) = (-1)ⁿ/2 → (1/2)Σ(-1/2)ⁿ → (1/2)·(-1/2)/(1+1/2) = -1/6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 1/2 → 1/3, 위상 π/3 → π/6·π/4, cos → sin(sin(nπ+θ)=(-1)ⁿsinθ). 제약: 위상의 삼각비가 유리수 또는 √ 하나이고 선택지에 부호 실수 답(+1/6)을 포함."
    creative: "(1) cos(nπ/2) 처럼 주기 4 인 항으로 바꾸면 0 인 항을 걸러 공비 -1/4 급수 → 주기 묶음이 필요해 ★3(I-PD d1) (2) (1/2)ⁿ 대신 (1/2)ⁿ+(1/3)ⁿ 을 곱해 두 급수 분리(★2) (3) 합을 주고 공비를 묻는 역문제로 바꾸면 방정식 한 단계 추가(★2~3)."
```

```yaml
- id: RPM-CALC2-0189
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σ(1+2+2²+…+2ⁿ⁻¹)/4ⁿ 의 합.
  category: "분자 등비수열 합 2ⁿ-1 → 두 등비급수(공비 1/2, 1/4) 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 합 — 분자가 등비수열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 = 2ⁿ-1 이므로 Σ(1/2)ⁿ-Σ(1/4)ⁿ = 1-1/3 = 2/3. 등비수열 합 공식과 등비급수 합 공식을 이어 쓰는 두 공식 사슬. level 중 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "1+2+…+2ⁿ⁻¹ = 2ⁿ-1 → Σ(2ⁿ-1)/4ⁿ = Σ(1/2)ⁿ-Σ(1/4)ⁿ → 1-1/3 = 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 밑 2 → 3(3ⁿ-1)/2), 분모 4ⁿ → 9ⁿ·6ⁿ. 제약: 분자 밑 < 분모 밑이어야 수렴, 결과는 기약분수."
    creative: "(1) 분자를 1+3+…+3ⁿ⁻¹, 분모를 6ⁿ 으로 두어 상수 1/2 처리 추가(★2) (2) 분자를 2+4+…+2ⁿ 처럼 첫째항·항 수를 비틀어 합 공식 적용을 흔들기(★2 · T-경계) (3) 분자를 등차수열 합 n(n+1)/2 로 바꾸면 등비급수가 아니게 되어 유형 이탈 — 대신 분모를 (2ⁿ-1)(2ⁿ⁺¹-1) 로 두면 부분분수 망원 ★3(I-RT d1)."
```

```yaml
- id: RPM-CALC2-0190
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    aₙ=(1/7)ⁿ-4+k 인 급수 Σaₙ 이 수렴할 때 Σ(-1)ⁿaₙ 의 합 (k 는 상수).
  category: "급수 수렴 → 일반항 극한 0 → k 결정 → 공비 -1/7 등비급수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「Σaₙ 수렴」이라는 결과 조건에서 lim aₙ = k-4 = 0 을 역추적해 k=4 를 먼저 확정해야 급수가 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 합 — 수렴 조건(일반항 → 0)으로 상수 결정 뒤 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴하는 급수의 일반항은 0 으로 가므로 -4+k=0, k=4 → aₙ=(1/7)ⁿ. 그러면 Σ(-1)ⁿaₙ = Σ(-1/7)ⁿ = (-1/7)/(8/7) = -1/8. k 를 먼저 찾는 역추적(BW d1)이 관문이고 나머지는 공식. level 중 → ★2, 통찰 1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Σaₙ 수렴 → lim aₙ = k-4 = 0 → k=4 → Σ(-1/7)ⁿ = (-1/7)/(1+1/7) = -1/8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 1/7 → 1/5·1/9, 상수 -4+k → 2k-6 등. 제약: 상수부가 정확히 0 이 되게 k 가 유일하게 정해지고, (-1)ⁿ 을 곱한 공비가 (-1,1) 안."
    creative: "(1) aₙ=(1/7)ⁿ+(k-4)n 처럼 발산 성분을 1차식으로 두면 같은 골조 ★2 (2) 「수렴할 때」를 「합이 S 일 때」로 바꿔 k 와 S 를 연립하면 ★3 (3) Σ(-1)ⁿaₙ 대신 Σa₂ₙ(짝수항)을 물으면 공비 r² 착안 추가(★2~3)."
```

```yaml
- id: RPM-CALC2-0191
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    aₙ 을 n 을 2 로 나눈 나머지라 할 때 Σaₙ/3ⁿ 의 합. 5지선다.
  category: "나머지 수열 1,0,1,0,… → 홀수항만 남는 등비급수(첫째항 1/3, 공비 1/9)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건부 일반항(나머지)을 「홀수 n 만 1/3ⁿ」 인 부분 등비급수로 다시 표현해야 합 공식이 적용됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 합 — 조건부(나머지) 일반항을 부분 등비급수로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    aₙ 은 홀수 n 에서 1, 짝수 n 에서 0 이므로 급수는 1/3+1/3³+1/3⁵+… = (1/3)/(1-1/9) = 3/8. 나머지 수열을 홀수항 등비급수로 옮기는 착안(RT d1) 하나, 이후 공비 1/9 공식. level 중 → ★2, 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "aₙ = 1(n 홀수), 0(n 짝수) → Σ 1/3^(2m-1) → (1/3)/(1-1/9) = 3/8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 수 2 → 3(나머지 0,1,2 주기 3 → 공비 1/27 급수 두 개), 분모 밑 3 → 2·5. 제약: 결과가 선택지 안 기약분수이고 나머지 정의가 자연수 n 전체에서 명확."
    creative: "(1) 나머지 대신 「n 이 3 의 배수이면 2, 아니면 1」 같은 조건부 상수로 두면 전체 등비급수에서 배수항 급수를 더하는 골조 ★3(I-PD d1) (2) aₙ 을 (-1)ⁿ 의 부호로 주면 0188 골조 (3) 분모를 3ⁿ 대신 n(n+1) 로 바꾸면 부분분수와 결합 ★3."
```

```yaml
- id: RPM-CALC2-0192
  page: 29
  vendor_label: "유형 07 등비급수의 합"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=x²-x-20 이 x축과 만나는 두 점의 x좌표 α>β 에 대해 Σ(4/αⁿ+3/βⁿ) 의 합. 서술형.
  category: "인수분해로 α=5, β=-4 → 두 등비급수(공비 1/5, -1/4) → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 합 — 이차방정식 근을 공비의 역수로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-5)(x+4)=0 → α=5, β=-4. 4Σ(1/5)ⁿ+3Σ(-1/4)ⁿ = 4·(1/4)+3·(-1/5) = 1-3/5 = 2/5. 인수분해 → 두 급수 분리 → 공식이며 β 의 음수 공비 부호가 유일한 함정. level 중·서술형 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "x²-x-20=(x-5)(x+4) → α=5, β=-4 → 4·(1/5)/(4/5) + 3·(-1/4)/(5/4) → 1-3/5 = 2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 x²-x-20 → 근이 정수이고 |근|>1 인 다른 이차식(x²-2x-8 · x²+x-12), 계수 4, 3. 제약: 두 근의 절댓값이 모두 1 보다 커야 두 급수가 수렴, α>β 조건으로 배정이 유일."
    creative: "(1) 근이 ±1 을 포함하도록 바꾸면 수렴 조건 위배로 발산항이 생겨 문제 이탈 — 대신 근이 분수(6x²-5x+1=0)이면 공비 역수가 2, 3 으로 발산하므로 「1/αⁿ 대신 αⁿ」으로 방향을 뒤집어 ★2 (2) 근과 계수의 관계로 α+β, αβ 만 주고 Σ(1/α+1/β)ⁿ 을 묻는 형태로 통합(★3 · I-CON d1) (3) 그래프 교점 대신 접선 조건으로 근을 결정하면 미분 단원과 결합 ★3."
```

### 유형 08 합이 주어진 등비급수

```yaml
- id: RPM-CALC2-0193
  page: 30
  vendor_label: "유형 08 합이 주어진 등비급수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    등비수열 {aₙ} 에 대해 Σaₙ=2, Σaₙ²=4/3 일 때 Σaₙ³ 의 합. 5지선다.
  category: "a/(1-r)=2, a²/(1-r²)=4/3 연립 → r=1/2, a=1 → a³/(1-r³)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 주어진 등비급수 — {aₙ²}·{aₙ³} 의 공비 r²·r³ 로 첫째항·공비 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    {aₙ²} 은 첫째항 a², 공비 r² 인 등비수열. 두 식을 나누면 (1-r)/(1+r)=1/3 → r=1/2, a=1. Σaₙ³ = 1/(1-1/8) = 8/7. 나누기 대신 a=2(1-r) 대입도 같은 길이라 전략 분기는 없고, 제곱 수열의 공비를 아는 것이 유형 자체의 골조. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a/(1-r)=2, a²/(1-r²)=4/3 → (1-r)/(1+r)=1/3 → r=1/2, a=1 → a³/(1-r³)=8/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Σaₙ=2, Σaₙ²=4/3 → (a,r)=(1,1/2) 에서 나오는 값이므로 (a,r)=(2,1/3)·(3,-1/2) 등으로 역설계해 두 합을 다시 계산. 제약: |r|<1, 두 조건에서 (a,r) 이 유일, 묻는 급수의 합이 선택지 안 유리수."
    creative: "(1) Σaₙ, Σaₙ³ 을 주고 Σaₙ² 을 묻기 — 세제곱 비 (1-r)²/(1+r+r²) 처리로 계산 가중 ★3 (2) Σaₙ 과 Σa₂ₙ(짝수항)을 주면 공비 r² 착안이 앞에 붙어 ★2~3 (3) 「aₙ 이 실수」 조건에서 r 이 음수인 해도 살아남게 설계하면 케이스 검증이 필요해 ★3(I-VF d1)."
```

```yaml
- id: RPM-CALC2-0194
  page: 30
  vendor_label: "유형 08 합이 주어진 등비급수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    첫째항 1 인 등비수열의 Σaₙ=5/4 일 때 Σaₙ² 의 값.
  category: "1/(1-r)=5/4 → r=1/5 → 1/(1-r²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 주어진 등비급수 — {aₙ²}·{aₙ³} 의 공비 r²·r³ 로 첫째항·공비 연립"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1-r=4/5 → r=1/5, Σaₙ² = 1/(1-1/25) = 25/24. 공식 두 번. level 중하 → ★1~2 출발, 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/(1-r)=5/4 → r=1/5 → Σaₙ² = 1/(1-1/25) = 25/24"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{25}{24}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 1 → 2·3, 합 5/4 → 3/2(r=1/3)·4/3(r=1/4). 제약: r 이 (-1,1) 안 유리수, 결과 기약분수."
    creative: "(1) 첫째항을 숨기고 a₂ 를 주면 a, r 연립(0193 골조 ★2) (2) Σaₙ² 대신 Σaₙaₙ₊₁(공비 r², 첫째항 a²r)을 물으면 첫째항 착안 추가 ★2 (3) 합이 음수(r 음수)인 경우로 바꿔 부호 함정(★1~2)."
```

```yaml
- id: RPM-CALC2-0195
  page: 30
  vendor_label: "유형 08 합이 주어진 등비급수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σ(cos²x)ⁿ⁻¹=2 를 만족시키는 x 의 값 (0<x<π/2).
  category: "첫째항 1·공비 cos²x 등비급수 → 1/(1-cos²x)=2 → sin²x=1/2 → x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 주어진 등비급수 — 삼각함수 공비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0<x<π/2 에서 0<cos²x<1 이므로 수렴하고 합은 1/(1-cos²x)=1/sin²x=2 → sin x=√2/2 → x=π/4. 공식 → 항등식 → 특수각. 수렴 조건 확인이 범위에서 자동으로 보장되는 절차형. level 중 → ★2 출발.
    [분류 이슈] 통찰 0·M_total 5 라 −1 후보이나 삼각 항등식·범위 처리가 겹쳐 유형 안 보통 문항 수준으로 보고 ★2 유지(★1/★2).
  tier: star_2
  mechanism_primary: "Σ(cos²x)ⁿ⁻¹ = 1/(1-cos²x) = 1/sin²x = 2 → sin x = √2/2 (0<x<π/2) → x = π/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 2 → 4/3(sin²x=3/4 → x=π/3)·4(sin x=1/2 → π/6), cos² → sin²(합 1/cos²x). 제약: 특수각이 나오는 값이고 범위 안 해가 유일."
    creative: "(1) 범위를 0<x<π 로 넓히면 해가 두 개(π/4, 3π/4)라 「모든 해의 합」으로 바꿔 ★2 (2) 공비를 sin x cos x 처럼 두면 배각 정리(2sinxcosx)와 결합 ★3(I-RT d1) (3) 합을 tan²x+1 같은 식으로 주면 항등식 두 개가 얽혀 ★3."
```

```yaml
- id: RPM-CALC2-0196
  page: 30
  vendor_label: "유형 08 합이 주어진 등비급수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공비가 같은 두 등비수열에서 b₁=a₁+2, Σaₙ=5, Σbₙ=10 일 때 Σaₙbₙ 의 합.
  category: "두 합의 비 → b₁=2a₁ → a₁=2, b₁=4, r=3/5 → 첫째항 a₁b₁·공비 r² 급수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 주어진 등비급수 — 두 수열의 곱(공비 r²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a₁/(1-r)=5, b₁/(1-r)=10 에서 b₁=2a₁, 그러므로 a₁+2=2a₁ → a₁=2, b₁=4, 1-r=2/5 → r=3/5. {aₙbₙ} 은 첫째항 8, 공비 9/25 → 8/(16/25)=25/2. 연립과 곱 수열의 공비 인식 모두 이 유형의 표준 절차. level 중 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a₁/(1-r)=5, b₁/(1-r)=10 → b₁=2a₁, b₁=a₁+2 → a₁=2, b₁=4, r=3/5 → 8/(1-9/25) = 25/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b₁=a₁+2 → a₁+3·2a₁-1, 합 5, 10 → 비가 정수인 다른 쌍(4, 12). 제약: r 이 (-1,1) 안이고 a₁, b₁ 이 정수, r² 급수의 결과가 기약분수로 정리."
    creative: "(1) 공비가 다르고 첫째항이 같은 두 수열로 바꿔 Σaₙbₙ 의 공비 r₁r₂ 를 묻기(★2) (2) 조건을 Σ(aₙ+bₙ)=15, Σ(aₙ-bₙ)=-5 로 주어 성질 유형(0183)과 결합 ★2~3 (3) Σaₙbₙ 대신 Σ(aₙ+bₙ)² 을 물으면 전개 후 세 급수로 갈라져 계산 부담 ★3."
```

### 유형 09 등비급수의 수렴 조건

```yaml
- id: RPM-CALC2-0197
  page: 30
  vendor_label: "유형 09 등비급수의 수렴 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    Σ(3x+1)ⁿ/2³ⁿ 이 수렴하도록 하는 정수 x 의 최솟값.
  category: "공비 (3x+1)/8 → -1<공비<1 → -3<x<7/3 → 정수 최솟값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건(-1<r<1) — 공비가 x 의 일차식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2³ⁿ=8ⁿ 이므로 공비 (3x+1)/8, -8<3x+1<8 → -3<x<7/3, 정수 최솟값 -2. 공비를 정리한 뒤 부등식 한 번. 경계 -3 이 포함되지 않는 것(T-경계)과 2³ⁿ 표기(T-표기)가 함정. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "공비 (3x+1)/8 → -1 < (3x+1)/8 < 1 → -3 < x < 7/3 → 정수 최솟값 -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 3x+1 → 2x-3, 분모 2³ⁿ → 3²ⁿ(=9ⁿ)·4ⁿ, 묻는 것을 최댓값·정수 개수로. 제약: 경계가 정수가 아니게 두거나 정수여도 제외됨을 답에서 확인, 답이 음수 정수라면 부호 실수 답이 선택지·검산에서 걸리게."
    creative: "(1) 첫째항이 (3x+1) 로 남게 급수를 (3x+1)+(3x+1)²/8+… 로 주면 첫째항 0 케이스가 추가돼 0199 골조 ★2~3(I-MI d1) (2) 공비를 (x²-3)/4 처럼 이차식으로 두면 부등식 두 개의 교집합 ★2 (3) 등비급수가 아니라 등비수열 {((3x+1)/8)ⁿ} 의 수렴으로 바꾸면 경계 포함 여부가 달라져 0200 골조."
```

```yaml
- id: RPM-CALC2-0198
  page: 30
  vendor_label: "유형 09 등비급수의 수렴 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σ(log₂x-2)ⁿ 이 수렴하도록 하는 실수 x 의 범위. 5지선다.
  category: "-1<log₂x-2<1 → 1<log₂x<3 → 2<x<8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건(-1<r<1) — 공비가 로그식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -1<log₂x-2<1 → 1<log₂x<3 → 2<x<8. 수렴 조건 한 번과 로그 부등식 풀기. 선택지에 경계 포함형(≤)이 있어 열린구간임을 확인하는 정도. level 중하 → ★1~2 출발, 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "-1 < log₂x-2 < 1 → 1 < log₂x < 3 → 2 < x < 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 → 3, 상수 2 → 1·3, 공비 log₂x-2 → (log₂x)/2. 제약: 로그 진수 조건 x>0 이 결과 범위 안에 자동 포함되도록, 선택지에 닫힌구간 오답 유지."
    creative: "(1) 밑이 1/2 인 로그로 바꾸면 부등호 방향 반전(T-부호) ★2 (2) 공비를 log₂x 자체로 두고 정수 x 의 개수(x=1 → 공비 0 포함)를 묻기 ★2 (3) 「등비수열 {(log₂x-2)ⁿ} 과 급수가 모두 수렴」으로 바꾸면 경계 처리 이중 → 0200 골조 ★2."
```

```yaml
- id: RPM-CALC2-0199
  page: 30
  vendor_label: "유형 09 등비급수의 수렴 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (x+2)+(x+2)(1-x)/3+(x+2)(1-x)²/9+… 이 수렴하도록 하는 정수 x 의 개수.
  category: "첫째항 x+2 · 공비 (1-x)/3 → 「첫째항 0」 또는 「-1<공비<1」 → -2≤x<4 → 정수 6개"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "등비급수 수렴 조건이 「a=0」 또는 「-1<r<1」 두 갈래 — 첫째항이 x 의 식이라 x=-2 케이스가 독립 시나리오로 살아 답 5 → 6 이 갈림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 수렴 조건 — 첫째항이 변수식(a=0 케이스 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공비 (1-x)/3 의 조건 -1<(1-x)/3<1 → -2<x<4 에 첫째항 x+2=0 인 x=-2 를 더해 -2≤x<4, 정수 -2~3 의 6개. a=0 분기를 빠뜨리면 5. 케이스 둘을 모두 따지는 다중 해석(MI d1)이 유형의 핵심. level 중 → ★2, 통찰 1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a=x+2, r=(1-x)/3 → (x+2=0) ∪ (-1<(1-x)/3<1) → x=-2 ∪ -2<x<4 → 정수 6개"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 x+2 → x-1·2x+3(a=0 이 정수 x 를 주는 값으로), 공비 (1-x)/3 → (x+1)/4 등. 제약: a=0 인 x 가 공비 범위 밖에 있어야 케이스가 실제로 답을 바꾸고, 결과 범위의 정수 개수가 명확."
    creative: "(1) 「수렴하는 x 의 범위」를 묻고 선택지에 -2 포함·미포함 쌍을 두면 MI 가 그대로 변별점(★2) (2) 첫째항을 x²-4 로 두면 a=0 이 두 값(±2)이라 케이스가 셋 ★3 (3) 공비를 (x+2)/3 으로 두어 a=0 인 x=-2 가 공비 범위 안에 이미 들어오게 하면 케이스가 무력해져 ★1~2 — 이 「케이스가 죽는 지점」이 ★ 하락 지점."
```

```yaml
- id: RPM-CALC2-0200
  page: 30
  vendor_label: "유형 09 등비급수의 수렴 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    등비수열 {((2x+3)/4)ⁿ} 과 등비급수 Σ(-2x+1)ⁿ 이 모두 수렴하도록 하는 실수 x 의 범위. 서술형.
  category: "수열 수렴 -1<r≤1 과 급수 수렴 -1<r<1 을 각각 풀어 교집합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건 — 등비수열 수렴(r=1 포함)과 동시 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수열: -1<(2x+3)/4≤1 → -7/2<x≤1/2. 급수: -1<-2x+1<1 → 0<x<1. 교집합 0<x≤1/2. 등비수열은 r=1 을 포함하고 등비급수는 제외한다는 경계 차이(T-경계)와 -2x 의 부호 반전(T-부호)이 함정이며 사고 분기는 없다. level 중·서술형 → ★2, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "수열 -1<(2x+3)/4≤1 → -7/2<x≤1/2 ∩ 급수 -1<-2x+1<1 → 0<x<1 → 0<x≤1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<x\le\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식 (2x+3)/4, -2x+1 의 계수. 제약: 교집합의 한쪽 끝이 수열 쪽 r=1 에서 오도록(닫힌 끝 유지), 다른 끝은 급수 쪽 열린 끝이 되게 설계해 경계 구분이 답에 드러나게."
    creative: "(1) 등비급수 쪽 첫째항을 x 의 식으로 두어 a=0 케이스 추가(0199 골조 ★2~3) (2) 「정수 x 의 개수」로 바꾸면 경계 포함 여부가 정수 하나를 좌우 ★2 (3) 세 조건(수열 두 개 + 급수 하나)으로 늘려도 골조 동일 ★2 — 경계 차이가 답에 영향 없게 설계하면 ★1 로 내려감."
```

### 유형 10 $\sum\limits_{n=1}^{\infty} r^n$이 수렴할 때, 항상 수렴하는 급수

```yaml
- id: RPM-CALC2-0201
  page: 31
  vendor_label: '유형 10 $\sum\limits_{n=1}^{\infty} r^n$이 수렴할 때, 항상 수렴하는 급수'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    Σrⁿ 이 수렴할 때 ㄱ Σrⁿ⁺² · ㄴ Σr²ⁿ⁻¹ · ㄷ Σ((1-4r)/3)ⁿ · ㄹ Σ(1/r)ⁿ (r≠0) 중 항상 수렴하는 것.
  category: "-1<r<1 → 각 급수의 공비 범위 확인 → 항상 (-1,1) 안이면 수렴"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σrⁿ 수렴 조건에서 파생 급수의 항상 수렴 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -1<r<1 에서 ㄱ 은 공비 r, ㄴ 은 공비 r²(0≤r²<1) 이라 수렴. ㄷ 의 공비 (1-4r)/3 은 r 이 -1 에 가까우면 1 을 넘어(r=-0.9 → 1.53) 항상은 아님, ㄹ 은 |1/r|>1 로 발산. 「항상」을 판정하려면 공비의 범위를 r 의 구간에서 옮겨 봐야 하지만 구간 대응 자체는 표준. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "-1<r<1 → ㄱ 공비 r ✓ / ㄴ 공비 r² ✓ / ㄷ (1-4r)/3 ∈ (-1, 5/3) ✗ / ㄹ |1/r|>1 ✗ → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄷ 의 일차식 (1-4r)/3 → (2r+1)/3(항상 수렴으로 바뀜)·(3r-1)/2 등, ㄱ 의 지수 오프셋. 제약: 「항상 수렴」과 「반례 있음」이 보기에 섞이게 하고, 반례가 되는 r 값을 답지에 명시."
    creative: "(1) 반례 r 값을 직접 제시하게 하는 서술형(★2~3) (2) 조건을 「등비수열 {rⁿ} 이 수렴」(r=1 포함)으로 바꾸면 r=1 에서 발산하는 보기가 생겨 경계 함정 ★2 (3) 두 공비 a, b 로 늘리면 0203 골조 ★2."
```

```yaml
- id: RPM-CALC2-0202
  page: 31
  vendor_label: '유형 10 $\sum\limits_{n=1}^{\infty} r^n$이 수렴할 때, 항상 수렴하는 급수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σrⁿ 이 수렴할 때 다섯 급수(공비 r/2 · (r-1)/2 · (r+1)/2 · r/2+1 · (rⁿ+(-r)ⁿ)/2) 중 항상 수렴하는 급수가 아닌 것. 5지선다.
  category: "-1<r<1 → 각 공비의 범위 → (-1,1) 을 벗어나는 것 찾기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σrⁿ 수렴 조건에서 파생 급수의 항상 수렴 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r/2 ∈ (-1/2,1/2), (r-1)/2 ∈ (-1,0), (r+1)/2 ∈ (0,1) 은 수렴. r/2+1 ∈ (1/2,3/2) 라 r>0 이면 발산 → ④. ⑤는 Σrⁿ 과 Σ(-r)ⁿ 의 합이라 급수 성질로 수렴. 구간 평행이동·확대만 다섯 번. level 중 → ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "-1<r<1 → 공비 r/2, (r±1)/2 는 (-1,1) 안 / r/2+1 ∈ (1/2, 3/2) 은 벗어남 / ⑤ 두 수렴 급수의 합 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수(r/3+1 · (2r-1)/3 · (r+2)/3) 와 ⑤의 조합. 제약: 정답 하나만 (-1,1) 을 벗어나고, 나머지는 r 의 전 구간에서 안에 머무르게."
    creative: "(1) 「항상 수렴하는 것의 개수」로 바꾸면 다섯 개 전부 판정(★2) (2) ⑤ 형태를 (rⁿ-(-r)ⁿ)/2(홀수항만 남음)로 두고 합까지 묻기 ★2~3 (3) 공비를 r² -r 처럼 이차식으로 두면 r 구간에서 이차식의 범위(최대·최소)를 봐야 해 ★3(I-RT d1)."
```

```yaml
- id: RPM-CALC2-0203
  page: 31
  vendor_label: '유형 10 $\sum\limits_{n=1}^{\infty} r^n$이 수렴할 때, 항상 수렴하는 급수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Σaⁿ, Σbⁿ 이 모두 수렴할 때 ㄱ Σ(a+b)ⁿ · ㄴ Σ(ab)ⁿ · ㄷ Σ(|b|-|a|)ⁿ · ㄹ Σ(a/b)ⁿ (b≠0) 중 항상 수렴하는 것.
  category: "-1<a<1, -1<b<1 → 합·곱·절댓값 차·몫의 범위 → (-1,1) 안 여부"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σrⁿ 수렴 조건에서 파생 급수의 항상 수렴 판정 — 두 공비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 a=b=0.9 → 1.8 발산, ㄹ 은 a=0.9, b=0.1 → 9 발산. ㄴ 은 |ab|<1, ㄷ 은 0≤|a|,|b|<1 에서 -1<|b|-|a|<1 이므로 항상 수렴. ㄷ 의 절댓값 범위 처리(T-부호)와 반례 두 개가 필요하지만 모두 구간 연산 수준. level 중 → ★2, 통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "-1<a,b<1 → ㄱ a+b ∈ (-2,2) ✗ / ㄴ |ab|<1 ✓ / ㄷ |b|-|a| ∈ (-1,1) ✓ / ㄹ a/b 무한계 ✗ → ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 식 (a+b)/2(항상 수렴) · a-b · a²+b² · |a|+|b| 등으로 교체. 제약: 항상 수렴 두 개·반례 있는 것 두 개의 균형을 유지하고 반례 값을 답지에 적을 것."
    creative: "(1) 조건을 「Σaⁿ 수렴, Σbⁿ 발산」으로 비틀면 b 의 범위가 |b|≥1 이라 판정이 반대 방향 ★2~3 (2) 반례를 직접 쓰게 하는 서술형 ★3 (3) (a+b)/2 와 ab 의 대소 같은 부등식(산술·기하평균)을 섞으면 단원 밖 도구 결합 ★3(I-XU d1)."
```

### 유형 11 $S_n$과 $a_n$ 사이의 관계를 이용하는 급수

```yaml
- id: RPM-CALC2-0204
  page: 31
  vendor_label: '유형 11 $S_n$과 $a_n$ 사이의 관계를 이용하는 급수'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    Sₙ=n² 일 때 Σ1/(aₙaₙ₊₁) 의 합. 5지선다.
  category: "Sₙ-Sₙ₋₁ → aₙ=2n-1 → 부분분수 망원 → 1/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Sₙ 에서 aₙ 을 구해 부분분수 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    aₙ=Sₙ-Sₙ₋₁=2n-1 (a₁=S₁=1 도 맞음). Σ1/((2n-1)(2n+1)) = (1/2)Σ(1/(2n-1)-1/(2n+1)) → 부분합 (1/2)(1-1/(2n+1)) → 1/2. Sₙ→aₙ 공식과 부분분수 두 절차의 연결. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Sₙ=n² → aₙ=2n-1 (n=1 확인) → 1/(aₙaₙ₊₁) = (1/2)(1/(2n-1)-1/(2n+1)) → 부분합 → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Sₙ=n² → n²+n(aₙ=2n)·2n²-n(aₙ=4n-3), 묻는 급수 Σ1/(aₙaₙ₊₁) → Σ1/(aₙaₙ₊₂). 제약: aₙ 이 등차수열이 되는 이차식(상수항 0)이어야 n=1 예외가 없고, 부분분수 간격이 공차와 맞아야 함."
    creative: "(1) Sₙ=n²+1 처럼 상수항을 두면 a₁ 이 예외가 되어 첫 항 분리 ★3(T-경계 · I-VF d1) (2) Σ(aₙ₊₁-aₙ)/(aₙaₙ₊₁) 꼴로 주면 1/aₙ-1/aₙ₊₁ 망원을 스스로 봐야 해 ★3(I-RT d1) (3) Sₙ 대신 Σ_{k=1}^{n} a_k = n² 표기로 같은 문제 ★2."
```

```yaml
- id: RPM-CALC2-0205
  page: 31
  vendor_label: '유형 11 $S_n$과 $a_n$ 사이의 관계를 이용하는 급수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Sₙ=27{1-(2/3)ⁿ} 일 때 급수 a₂+a₄+a₆+… 의 합.
  category: "Sₙ-Sₙ₋₁ → aₙ=9(2/3)ⁿ⁻¹ → 짝수항: 첫째항 a₂=6, 공비 4/9 → 54/5"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Sₙ 에서 aₙ 을 구해 짝수항(공비 r²) 등비급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    aₙ=27{(2/3)ⁿ⁻¹-(2/3)ⁿ}=9(2/3)ⁿ⁻¹, a₁=S₁=9 확인. 짝수항은 첫째항 a₂=6, 공비 (2/3)²=4/9 → 6/(5/9)=54/5. Sₙ 이 등비수열 합 꼴임을 보면 aₙ 을 바로 읽을 수도 있으나 어느 쪽이든 표준 절차. level 중 → ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Sₙ=27{1-(2/3)ⁿ} → aₙ=9(2/3)ⁿ⁻¹ → a₂+a₄+… = 6/(1-4/9) = 54/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{54}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "27, 2/3 → 16, 3/4(aₙ=4(3/4)ⁿ⁻¹) 등, 짝수항 → 홀수항·3 의 배수항(공비 r³). 제약: 공비 |r|<1, 첫째항이 정수가 되는 상수 선택, 결과 기약분수."
    creative: "(1) Sₙ 을 주지 않고 「Σaₙ=27, 공비 2/3」로 주면 0194 골조 ★1~2 (2) a₁+a₃+… 와 a₂+a₄+… 의 비를 묻기(공비 r 로 즉시) ★2 (3) Sₙ=27{1-(-2/3)ⁿ} 로 부호를 교대시키면 짝수항·홀수항 부호가 갈려 T-부호 함정 ★2~3."
```

```yaml
- id: RPM-CALC2-0206
  page: 31
  vendor_label: '유형 11 $S_n$과 $a_n$ 사이의 관계를 이용하는 급수'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    Sₙ=1-(1/2)aₙ (n≥1) 을 만족시킬 때 Σaₙ 의 합. 5지선다.
  category: "Sₙ 관계식 → n=1 로 a₁ · Sₙ-Sₙ₋₁ 로 점화식 aₙ=(1/3)aₙ₋₁ → 등비급수 (2/3)/(1-1/3)=1"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(갈래 1) Sₙ-Sₙ₋₁ 로 aₙ 의 점화식을 세워 등비수열로 확정 / (갈래 2) 급수가 수렴하면 aₙ→0 이므로 Σaₙ=lim Sₙ=1 로 직행 — 갈래 2 는 빠르지만 수렴 근거가 갈래 1 에서 나오므로 선택·결합 판단이 필요"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Sₙ 과 aₙ 의 관계식에서 점화식으로 등비수열을 확정해 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n=1: a₁=1-a₁/2 → a₁=2/3. n≥2: aₙ=Sₙ-Sₙ₋₁=-(1/2)aₙ+(1/2)aₙ₋₁ → aₙ=(1/3)aₙ₋₁ 이므로 첫째항 2/3, 공비 1/3 → 합 1. 관계식에서 lim Sₙ=1-(1/2)lim aₙ=1 로 바로 가는 갈래도 있으나 수렴을 먼저 보장해야 해 두 갈래를 견주는 판단(SC d1)이 들어간다. level 상중 → ★3 출발, 통찰 1·M_total 7 → ★3 유지.
    [분류 이슈] 갈래 2(극한 직행)를 답지가 인정하는지에 따라 SC 인정 여부가 갈림. 절차형으로 보면 ★2~3 경계(★3 유지).
  tier: star_3
  mechanism_primary: "Sₙ=1-aₙ/2 → a₁=2/3 · aₙ-aₙ₋₁ = -(aₙ-aₙ₋₁)/2 → aₙ=(1/3)aₙ₋₁ → 등비급수 (2/3)/(1-1/3) = 1"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Sₙ=1-(1/2)aₙ → Sₙ=3-2aₙ(공비 2/3 · 합 3)·Sₙ=2-(1/3)aₙ 등. 제약: 관계식 Sₙ=c-kaₙ 에서 공비 k/(1+k) 가 (0,1) 안이므로 k>0 이면 항상 수렴, 합은 c 로 나오게 두어 극한 직행 갈래와 점화식 갈래의 답이 일치하도록."
    creative: "(1) Sₙ=1-(1/2)aₙ+n 처럼 n 항을 섞으면 aₙ 이 등비가 아니게 되어 점화식 갈래만 살아남고 극한 직행이 막힘 → SC 소멸·계산 상승 ★3 (2) Sₙ 과 aₙ₊₁ 의 관계(Sₙ=2-aₙ₊₁)로 주면 첨자 이동 함정 추가 ★3 (3) Σaₙ 대신 Σaₙ² 을 물으면 공비 1/9 급수로 한 단계 추가 ★3."
```

### 유형 12 순환소수와 등비급수

```yaml
- id: RPM-CALC2-0207
  page: 32
  vendor_label: "유형 12 순환소수와 등비급수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    첫째항 0.2̇, 제4항 0.027̇ 인 실수 등비급수의 합. 5지선다.
  category: "순환소수 → 분수(2/9, 1/36) → r³=1/8 → r=1/2 → 합 4/9"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수를 분수로 옮겨 첫째항·공비 결정 후 등비급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.2̇=2/9, 0.027̇=(27-2)/900=1/36. ar³=1/36 에서 r³=(1/36)/(2/9)=1/8 → r=1/2(실수). 합 (2/9)/(1/2)=4/9. 순환소수 변환과 세제곱근 하나. 대표문제·level 없음 → ★2 출발, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "0.2̇=2/9, 0.027̇=1/36 → r³=1/8 → r=1/2 → (2/9)/(1-1/2) = 4/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 0.2̇ → 0.4̇(4/9)·0.1̇2̇(4/33), 제4항 대신 제3항(r²)·제5항(r⁴). 제약: rᵏ 의 값이 유리수의 k제곱이 되게, 짝수 제곱이면 「각 항이 양수」 같은 부호 조건을 추가."
    creative: "(1) 제3항을 주고 r²=… 에서 r=±… 두 개가 나오게 하면 「모든 항이 양수」 조건으로 기각 ★2~3(I-VF d1) (2) 합을 순환소수로 주고 첫째항을 묻기 → 0208 골조 (3) 두 순환소수의 곱·합을 급수로 표현하게 하면 순환마디 곱셈 처리 ★3."
```

```yaml
- id: RPM-CALC2-0208
  page: 32
  vendor_label: "유형 12 순환소수와 등비급수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공비 0.5̇, 합 0.3̇6̇ 인 등비급수의 첫째항 a₁. 5지선다.
  category: "순환소수 → 분수(5/9, 4/11) → a₁/(1-5/9)=4/11 → a₁=16/99"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수를 분수로 옮겨 첫째항·공비 결정 후 등비급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=5/9, S=36/99=4/11. a₁=S(1-r)=(4/11)(4/9)=16/99. 순환소수 두 개 변환과 공식 역산. 선택지가 99 분모 근처로 촘촘해 약분 실수를 노림. level 중 → ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "0.5̇=5/9, 0.3̇6̇=4/11 → a₁ = (4/11)(1-5/9) = 16/99"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 0.5̇ → 0.4̇(4/9)·0.2̇7̇(3/11), 합 0.3̇6̇ → 0.4̇5̇(5/11)·0.1̇8̇(2/11). 제약: 공비 (-1,1) 안, 첫째항이 선택지 분모(99·33)에 맞는 유리수."
    creative: "(1) 첫째항과 합을 순환소수로 주고 공비를 묻기 ★2 (2) 「합이 순환소수 0.3̇6̇ 이 되는 자연수 첫째항·공비 1/10ᵏ」 같은 역설계 문제로 바꾸면 순환마디 길이 착안 ★3(I-PD d1) (3) 순환소수 대신 이진 순환소수(0.101010…₍₂₎)로 바꾸면 밑 변환과 결합 ★3."
```

```yaml
- id: RPM-CALC2-0209
  page: 32
  vendor_label: "유형 12 순환소수와 등비급수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    첫째항 0.α̇, 공비 0.α 인 등비수열의 급수 합이 20/27 일 때 한 자리 자연수 α. 서술형.
  category: "α/9 ÷ (1-α/10) = 20/27 → 10α/(9(10-α))=20/27 → α=4"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수를 분수로 옮겨 첫째항·공비 결정 후 등비급수의 합 — 미지 자릿수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.α̇=α/9, 0.α=α/10 이므로 합 (α/9)/(1-α/10)=10α/(9(10-α))=20/27 → 270α=180(10-α) → α=4. 순환소수·유한소수의 분수 표현을 문자 α 로 세우고 일차방정식. 공비 α/10<1 은 자릿수 조건에서 자동. level 중·서술형 → ★2, M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "0.α̇=α/9, 0.α=α/10 → (α/9)/(1-α/10) = 20/27 → 270α = 1800-180α → α=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 20/27 → α=4 에서 나온 값이므로 α=2(10/36=5/18)·α=5(50/45=10/9) 등으로 역산해 교체, 첫째항·공비 역할 교환(첫째항 0.α · 공비 0.α̇). 제약: α 가 1~9 의 유일한 정수해, 합이 기약분수."
    creative: "(1) 첫째항 0.α̇β̇(두 자리 순환)로 두면 미지수 둘 → 조건 하나 추가 필요 ★3 (2) 합 대신 「제2항까지의 합」처럼 유한합을 주면 등비급수와 무관해지므로 피하고, 「합이 1 보다 작은 α 의 개수」로 바꾸면 부등식 ★2~3 (3) α 를 공비의 자릿수로만 두고 첫째항을 고정하면 ★1~2."
```

```yaml
- id: RPM-CALC2-0210
  page: 32
  vendor_label: "유형 12 순환소수와 등비급수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    139/999 를 소수로 나타낼 때 소수점 아래 n째 자리 숫자를 aₙ 이라 할 때 Σaₙ/3ⁿ 의 합.
  category: "139/999=0.1̇39̇ → aₙ 주기 3(1,3,9) → 세 항씩 묶어 공비 1/27 등비급수 → 27/26"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분수에서 순환마디 139 를 읽어 aₙ 의 주기 3 을 발견하고, 세 항 묶음(1/3+3/9+9/27=1)이 공비 1/27 인 등비수열을 이룸을 스스로 구성해야 급수가 닫힘"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순환소수의 자릿수 수열을 주기로 묶어 등비급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    139/999=0.139139… 이므로 aₙ 은 1,3,9 가 반복. 3k+1, 3k+2, 3k+3 항을 묶으면 (1/3+3/9+9/27)(1/27)ᵏ=(1/27)ᵏ → Σ(1/27)ᵏ (k≥0) = 27/26. 순환마디 → 주기 수열 → 묶음 등비급수의 발견이 풀이 전부이고(PD d2) 계산은 가볍다. n≡1,2,0 (mod 3) 세 급수로 나눠 더해도 같다. level 상중 → ★3 출발, 통찰 1(d2)·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "139/999 = 0.1̇39̇ → aₙ 주기 (1,3,9) → 세 항 묶음 합 1·(1/27)ᵏ → Σ(1/27)ᵏ = 27/26"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{27}{26}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 139/999 → 다른 주기 3 순환소수(247/999 · 5/37=0.1̇35̇), 분모 밑 3 → 2·5, 주기 2(예: 4/11=0.3̇6̇ · 공비 1/9 묶음). 제약: 순환마디가 곧바로 읽히는 분모(9·99·999 또는 37·11)이고 묶음 합·공비가 기약분수로 정리."
    creative: "(1) 주기 2 로 줄이면 홀수항·짝수항 두 급수 분리와 같아 ★2 (2) 분모 밑을 10 으로 두면 급수가 원래 분수로 돌아가는 자기 참조(Σaₙ/10ⁿ=139/999)로 ★2 — 착안이 없어지는 ★ 하락 지점 (3) aₙ 대신 「n째 자리까지의 소수 bₙ」 을 두고 Σ(bₙ-139/999) 를 물으면 오차가 등비 (1/1000)ᵏ 로 줄어드는 구조 ★4 후보(I-PD d2 + I-RT d1)."
```

### 유형 13 등비급수의 도형에의 활용: 좌표

```yaml
- id: RPM-CALC2-0211
  page: 32
  vendor_label: "유형 13 등비급수의 도형에의 활용: 좌표"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    OP₁=1, 각 변이 직전 변의 3/4 이고 매번 90° 로 꺾이는 나선 P₁P₂P₃… (그림)에서 Pₙ 이 한없이 가까워지는 점의 x좌표.
  category: "변을 x·y 성분으로 나누기 → x 성분은 1, -(3/4)², (3/4)⁴, … 교대 등비급수 → 16/25"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나선(기하)을 좌표 성분별 수열로 옮겨 x 성분만 모으면 공비 -(3/4)² 인 등비급수가 됨을 봐야 함 — 이 유형의 골조"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각 나선의 극한점 좌표 — 성분별 부호 교대 등비급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변 길이 (3/4)ᵏ, 방향은 +x, +y, -x, -y 반복. x 성분: 1-(3/4)²+(3/4)⁴-… = 1/(1+9/16) = 16/25 (y 는 (3/4)/(1+9/16)=12/25). 기하를 성분 급수로 옮기는 착안(RT d1)과 부호 교대·방향 추적(T-부호·T-표기)이 핵심이며 계산은 한 줄. 대표문제·level 없음 → ★2 출발, 통찰 1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "변 (3/4)ᵏ · 방향 +x,+y,-x,-y 반복 → x = 1-(3/4)²+(3/4)⁴-… = 1/(1+9/16) = 16/25"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{16}{25}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0211.png
  latex: latex-bank/rpm-calc2/items/0211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율 3/4 → 1/2·2/3, 묻는 좌표 x → y·x+y, 시작 길이 1 → 2. 제약: 비율 (0,1), 그림의 회전 방향(반시계)과 라벨 P₁~P₆ 위치를 고정하고 x 성분 공비가 -(비율)² 임을 답지에 명시."
    creative: "(1) 극한점까지의 거리 OP∞ 를 묻기(x, y 둘 다 필요 · ★2~3) (2) 꺾이는 각을 60° 로 바꾸면 성분에 cos60°·sin60° 가 붙어 0213 골조 ★3(I-RT d2) (3) 「점 Pₙ 이 지나는 경로의 총 길이」(단순 등비급수 1/(1-3/4)=4)로 바꾸면 성분 분해가 사라져 ★1 — 착안이 사라지는 ★ 하락 지점."
```

```yaml
- id: RPM-CALC2-0212
  page: 32
  vendor_label: "유형 13 등비급수의 도형에의 활용: 좌표"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA₁=1, 각 변이 직전 변의 1/2 이고 90° 로 꺾이며 오른쪽·위로 번갈아 오르는 계단 A₁A₂A₃… (그림)의 극한점 (p, q) 에 대해 pq 의 값.
  category: "x 성분 1+1/4+1/16+… = 4/3 · y 성분 1/2+1/8+… = 2/3 → pq = 8/9"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계단(기하)을 x 성분 수열(홀수 번째 변)·y 성분 수열(짝수 번째 변)로 갈라 각각 공비 1/4 등비급수로 보는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각 계단의 극한점 좌표 — 성분별 등비급수(부호 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 변 방향이 +x, +y, +x, +y 로 반복(부호 교대 없음). x: 1+1/4+1/16+… = 4/3, y: 1/2+1/8+… = 2/3 → pq = 8/9. 0211 과 같은 성분 분해(RT d1)이지만 부호가 모두 양이라 함정이 적다. level 중 → ★2, 통찰 1·M_total 5 → ★2 유지(통찰이 있어 −1 하지 않음).
  tier: star_2
  mechanism_primary: "변 (1/2)ᵏ · 방향 +x,+y 반복 → p = 1/(1-1/4) = 4/3, q = (1/2)/(1-1/4) = 2/3 → pq = 8/9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{8}{9}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0212.png
  latex: latex-bank/rpm-calc2/items/0212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율 1/2 → 1/3·2/3, 묻는 것 pq → p+q·q/p, 시작 길이. 제약: 비율 (0,1), 그림 라벨(A₁~A₄)과 방향(오른쪽·위) 고정, 결과 기약분수."
    creative: "(1) 방향을 +x, +y, -x, -y 나선으로 바꾸면 부호 교대가 붙어 0211 골조 ★2 (2) 극한점이 직선 y=mx 위에 있을 조건으로 비율을 역산하게 하면 I-BW d1 추가 ★3 (3) 계단의 「꺾이는 점들을 잇는 직선의 기울기」(항상 일정)를 묻기 ★2."
```

```yaml
- id: RPM-CALC2-0213
  page: 32
  vendor_label: "유형 13 등비급수의 도형에의 활용: 좌표"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∠AOP₁=45°, OP₁=1, 각 변이 직전 변의 1/2 이고 90° 로 꺾이는 지그재그 P₁P₂P₃… (그림)의 극한점 (a, b) 에 대해 b/a 의 값.
  category: "45° 방향 성분 분해 → x: (1/√2)(1-1/2+1/4-…) · y: (1/√2)(1+1/2+1/4+…) → b/a = 2/(2/3) = 3"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "축과 45° 로 기운 지그재그를 성분으로 옮길 때 x 성분은 부호가 교대하고 y 성분은 모두 양임을 그림에서 읽어 두 급수로 분리 — 또는 45° 회전한 좌표계에서 계단(4/3, 2/3)을 구한 뒤 b/a = (u+v)/(u-v) 로 환산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기울어진(45°) 지그재그의 극한점 좌표 — 성분 분해 또는 회전 좌표계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변 방향은 (1,1)/√2 와 (-1,1)/√2 가 번갈아 나온다. x = (1/√2)(1-1/2+1/4-…) = (1/√2)(2/3), y = (1/√2)(1+1/2+…) = (1/√2)·2 → b/a = 3. 45° 회전 좌표계에서 계단 (4/3, 2/3) 을 구해 (u+v)/(u-v) 로 돌려도 같다. 축에 정렬되지 않은 도형을 성분 급수로 바꾸는 표현 전환이 두 층(방향 벡터·부호 교대)이라 RT d2. level 상중 → ★3 출발, 통찰 1(d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "방향 (1,1)/√2, (-1,1)/√2 교대 · 길이 (1/2)ᵏ → x = (1/√2)·1/(1+1/2), y = (1/√2)·1/(1-1/2) → b/a = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0213.png
  latex: latex-bank/rpm-calc2/items/0213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율 1/2 → 1/3(b/a = (1/(1-1/3))/(1/(1+1/3)) = 2), 시작각 45° → 30°·60°(성분에 √3 등장 · b/a 가 무리수), 묻는 것 b/a → a+b·OP∞². 제약: 45° 이면 b/a 가 유리수로 떨어지고 다른 각은 √ 가 남으므로 답 형식을 맞출 것, 그림의 꺾임 방향(P₂ 가 왼쪽 위)을 고정."
    creative: "(1) 시작각을 θ 로 두고 b/a 를 tan 으로 표현하게 하면 Mₐ 상승·삼각비 결합 ★3~4 (2) 지그재그를 나선(매번 같은 방향으로 90°)으로 바꾸면 x, y 모두 교대 급수 ★3 (3) 극한점이 x 축 위에 오도록 비율을 정하는 역문제(BW d1 추가)는 ★4 후보 (4) 시작각을 0° 로 두면 0212 계단으로 환원 ★2 — 회전 성분이 사라지는 ★ 하락 지점."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 3 · ★2 27 · ★3 4 · ★4 0 · ★5 0
- 통찰이 붙은 문항 10(0186 · 0188 · 0190 · 0191 · 0199 · 0206 · 0210 · 0211 · 0212 · 0213) · 이 중 depth 2 이상의 `insight_type: 통찰형` 3(0186 BW · 0210 PD · 0213 RT) · 절차형 31 · premium 0
- 통찰 코드 분포: I-RT 5(0188 · 0191 · 0211 · 0212 · 0213) · I-BW 2(0186 · 0190) · I-MI 1(0199) · I-SC 1(0206) · I-PD 1(0210)
- type_hint 상위: 「등비급수의 합 — …」 6(0187~0192) · 「합이 주어진 등비급수 — …」 4(0193~0196) · 「등비급수의 수렴 조건 — …」 4(0197~0200) · 「순환소수 … 등비급수」 4(0207~0210) · 「급수의 수렴·발산 판정(일반항 극한 · 부분합 극한)」 3(0180~0182) · 그 밖에 「Σrⁿ 수렴 조건에서 파생 급수」 3 · 「Sₙ 에서 aₙ …」 3 · 「… 극한점 좌표」 3 · 「급수의 성질(선형 결합)」 2 · 「급수의 성질 진위 판정」 2
- 벤더 신호 대비: 대표문제 9문은 모두 ★2, 중하 3문은 ★1, 중 18문은 ★2, 상중 4문은 ★3 — 2단 이상 어긋난 라벨 없음
- 서술형 3문(0192 · 0200 · 0209 · 모두 ★2) · 그림 3문(`crop:fig-0211.png` · `crop:fig-0212.png` · `crop:fig-0213.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0186 | 거짓 명제 네 개의 반례 구성이 풀이의 본체인데 10유형에 직접 대응하는 코드가 없어 I-BW(목표 성질 → 수열 역설계) d2 로 라벨. 카탈로그에서 「반례 설계」를 BW 하위로 둘지 별도 코드로 둘지 결정 필요 | ★3 |
| RPM-CALC2-0195 | 통찰 0·M_total 5 라 산식상 −1 후보이나 삼각 항등식·범위 처리가 겹쳐 유형 안 보통 문항 수준으로 보고 ★2 유지 | ★1 / ★2 |
| RPM-CALC2-0206 | Sₙ 관계식에서 점화식 갈래와 「lim Sₙ = 1」 극한 직행 갈래가 공존해 I-SC d1 로 라벨했으나, 답지가 점화식 한 갈래만 제시하면 절차형 ★2~3 경계. 라벨은 벤더 상중을 따라 ★3 | ★2 / ★3 |
| RPM-CALC2-0213 | 유형 13 안에서 나선(0211)·계단(0212)·45° 지그재그(0213) 세 골조가 섞여 있음. type_hint 를 셋으로 나눴고, 카탈로그에서 「축 정렬 성분 분해」와 「회전 성분 분해」를 다른 base ★ 로 둘지 결정 필요 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「등비급수의 합」(6 · 세부 골조는 두 급수 분리 · 삼각/부호 · 분자 등비합 · 수렴 조건으로 상수 결정 · 조건부 일반항 · 이차방정식 근) · 「합이 주어진 등비급수」(4 · 첫째항·공비 연립이 공통 골조) · 「등비급수의 수렴 조건」(4) · 「순환소수와 등비급수」(4) · 「급수의 수렴·발산 판정」(3).
- 따로 세워야 할 유형: (a) 「등비급수 수렴 조건 — 첫째항이 변수식(a=0 케이스)」(0199)은 같은 유형 09 의 0197·0198 과 골조가 다르고 I-MI 가 붙으므로 base ★ 를 한 단 높게 두는 것이 맞음. (b) 「순환소수 자릿수 수열의 주기 묶음」(0210)은 0207~0209 의 「순환소수 → 분수 변환」과 완전히 다른 골조(PD)라 별도 유형. (c) 「급수의 성질 진위 판정 — 반례 설계형」(0186)은 정리 적용형(0185)과 분리. (d) 유형 13 은 「축 정렬 성분 분해(나선·계단)」와 「기울어진 방향의 성분 분해」로 나누는 것이 ★ 변별에 맞음.
- 통합해도 될 유형: 「급수의 성질(선형 결합 연립)」(0183·0184)은 급수의 성질 기본 계산 한 유형으로, 「Σrⁿ 수렴 시 파생 급수 판정」(0201~0203)은 공비 하나·둘 구분 없이 한 유형으로, 「Sₙ 에서 aₙ 을 구해 급수」(0204·0205)는 뒤에 붙는 급수 종류(부분분수·등비)만 다르므로 한 유형으로 묶되 0206(관계식 → 점화식)은 별도로 두는 편이 낫다.
- 이 범위에는 ★4·★5 후보가 없다. 통찰이 둘 이상 겹치는 문항이 없고, SC·VF·SYM·XU 는 0206 의 SC d1 하나뿐이다.
