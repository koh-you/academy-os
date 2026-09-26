---
name: mechanism-데이터-RPM-CALC1-03-p1
description: RPM 미적분Ⅰ 03 미분계수와 도함수(1/3 · 교과서 03-1~03-6) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 03 미분계수와 도함수
  unit_code: CALC1-03
  part: "1/3"
  extract_range: "39~41쪽 · 0205~0243"
  total_problems: 39
  unit_total: 125
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 범위는 전부 교과서 구역이라 ★1 출발이고, 통찰이 없어도 Mₛ ≥ 2 이면서 M_total ≥ 6 인 문항만 ★2 로 올림. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 03 미분계수와 도함수 (1/3) 정독 데이터 (v1.0)

이 파일은 03 단원의 앞부분 39~41쪽 · 0205~0243 · 39문항을 다룬다. 전부 「교과서 03-1 평균변화율」부터 「교과서 03-6 함수의 미분법」까지의 교과서 구역이며 난이도 표시(level)·태그가 없고 그림도 없다. RPM 의 벤더 신호는 구역이 곧 난이도 층이라 이 범위는 모두 ★1 출발이고, 통찰이 없는 드릴이 대부분이라 Mₛ ≥ 2 이면서 M_total ≥ 6 인 문항(좌·우 미분계수 대조 · 추상 함수 값 결합 · 세 인수 곱 · 곱과 거듭제곱 혼합)만 ★2 로 올렸다. 추상 함수 $f$ 가 등장하는 미분계수 극한 드릴(0216~0218)과 도함수 정의 꼴 판별 보기(0227)는 Mₐ 3 이지만 Mₛ 1 이라 ★1 로 두고 이슈로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(절차형이면 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점)를 채웠다. 소문항이 있는 문항은 「⑴~⑶ …」으로 묶어 요약했다.

## 문항 데이터

### 교과서 03-1 평균변화율

```yaml
- id: RPM-CALC1-0205
  page: 39
  vendor_label: "교과서 03-1 평균변화율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일차함수 f(x)=3x+1 에서 x 의 값이 0 에서 2 까지 변할 때의 평균변화율.
  category: "평균변화율 정의 → 두 함숫값의 차 / 구간 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율의 계산 (구체 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {f(2)−f(0)}/(2−0) = (7−1)/2 = 3. 일차함수라 평균변화율이 기울기 3 과 같고 구간에 무관하다. 정의에 대입하는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2)−f(0)=6 → 구간 길이 2 로 나눔 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 3·상수 1·구간 [0,2] 모두 자유. 제약: 일차함수의 평균변화율은 항상 기울기와 같으므로 정수 기울기를 유지하고, 상수항이 답에 무관함을 학생이 확인할 수 있게 둔다."
    creative: "(1) 일차함수의 평균변화율이 구간에 무관함을 묻는 ㄱㄴㄷ(★1) (2) 평균변화율이 3 이 되는 구간 [0,b] 의 b 를 묻되 함수를 이차로 바꿔 b 를 푸는 역방향(★2) (3) 함수식 대신 표·그래프로 두 점을 주고 기울기를 읽게 하기(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0206
  page: 39
  vendor_label: "교과서 03-1 평균변화율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=x² 에서 x 의 값이 0 에서 2 까지 변할 때의 평균변화율.
  category: "평균변화율 정의 → 두 함숫값의 차 / 구간 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율의 계산 (구체 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (4−0)/2 = 2. 이차함수 x² 의 구간 [a,b] 평균변화율은 a+b 이므로 0+2. 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2)−f(0)=4 → /2 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [a,b] 를 바꾸면 답은 a+b(정수 구간 권장). 이차 계수 c 를 붙이면 c(a+b). 제약: 음수 구간을 섞으면 부호 처리 한 곳이 생김(T-부호)."
    creative: "(1) 구간 [a,b] 의 평균변화율이 a+b 임을 일반화해 유도(★1~2 · Mₐ 2) (2) 평균변화율이 5 가 되는 구간 [1,b] 의 b (★2 · 미정계수 수준이라 I-BW 는 인정 안 함) (3) 같은 구간의 평균변화율과 x=1 에서의 미분계수가 같음을 확인해 평균값 정리를 예비(★2)."
```

```yaml
- id: RPM-CALC1-0207
  page: 39
  vendor_label: "교과서 03-1 평균변화율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차함수 f(x)=3x³−4 에서 x 의 값이 0 에서 2 까지 변할 때의 평균변화율.
  category: "평균변화율 정의 → 두 함숫값의 차 / 구간 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율의 계산 (구체 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(2)=20, f(0)=−4 → {20−(−4)}/2 = 12. 상수항 −4 는 차에서 상쇄되지만 음수 함숫값을 빼는 부호 처리가 한 곳 있다. 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2)=20, f(0)=−4 → 차 24 → /2 → 12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수 3·상수 −4·구간 [0,2] 자유. 제약: 상수항은 답에 영향 없음(학생이 이를 눈치채는지 보는 용도로 유지 가능) · 구간 길이로 나누어 떨어지게."
    creative: "(1) 상수항을 바꿔도 답이 같은 이유를 묻는 ㄱㄴㄷ(★1) (2) 구간 [a,a+1] 로 일반화해 평균변화율 3(3a²+3a+1) 유도(★2 · Mₐ 2) (3) 평균변화율이 12 가 되는 구간 [0,b] 의 양수 b (★2 · 3b²=12 → 양수 근 선택)."
```

```yaml
- id: RPM-CALC1-0208
  page: 39
  vendor_label: "교과서 03-1 평균변화율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=(x−3)² 에서 x 의 값이 0 에서 2 까지 변할 때의 평균변화율.
  category: "평균변화율 정의 → 완전제곱 꼴 대입 → 음수 답"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율의 계산 (구체 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(2)=1, f(0)=9 → (1−9)/2 = −4. 완전제곱 꼴이라 전개 없이 대입하며 답이 음수가 되는 부호 처리가 한 곳. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2)=1, f(0)=9 → 차 −8 → /2 → −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 3 과 구간 [0,2] 자유. 답은 (a+b)−2p (p=꼭짓점) 이므로 a+b=2p 를 피하면 0 이 아닌 답, 일부러 맞추면 답 0. 제약: 정수."
    creative: "(1) 평균변화율이 0 이 되는 구간 [0,b] 의 b 를 묻기 — 대칭축으로 즉시 b=6 을 보면 I-SYM d1 (★2) (2) 그래프 위 두 점을 잇는 직선의 기울기로 해석해 그림으로 제시(I-RT d1 · ★2) (3) (x−p)² 의 p 를 매개변수로 두고 [0,2] 평균변화율 2−2p 를 유도(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0209
  page: 39
  vendor_label: "교과서 03-1 평균변화율"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=−x²+2 의 평균변화율. ⑴ x 가 1 에서 4 까지 ⑵ 3 에서 3+Δx 까지 ⑶ a 에서 a+Δx 까지.
  category: "평균변화율 정의 → ⑴ 수치 대입 ⑵⑶ Δx 전개 후 약분"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율의 계산 (Δx 포함 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ (−14−1)/3 = −5. ⑵ {−(3+Δx)²+2−(−7)}/Δx = (−6Δx−Δx²)/Δx = −6−Δx. ⑶ 같은 전개로 −2a−Δx. 소문항이 구체 수치 → Δx → 매개변수 a 순으로 같은 정의를 반복하며 미분계수 도입을 예비한다. 가장 무거운 ⑶ 도 전개·약분 두 단계. Mₐ 2·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "f(a+Δx)−f(a) 전개 → −2aΔx−(Δx)² → Δx 로 약분 → −2a−Δx"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-5$ \quad (2) $-6-\varDelta x$ \quad (3) $-2a-\varDelta x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수(−1)·상수 2·⑴ 구간·⑵ 시작점 3 자유. 이차 계수를 c 로 바꾸면 ⑶ 답은 c(2a+Δx). 제약: 상수항은 답에 무관 · ⑴ 은 구간 길이로 나누어 떨어지게."
    creative: "(1) ⑶ 뒤에 Δx→0 극한을 이어 붙여 미분계수 −2a 를 도입(★1~2 · 03-2 연결) (2) 삼차함수로 바꾸면 ⑶ 전개가 (Δx)² 항까지 세 항이 되어 Mₖ 2 (★2) (3) ⑵ 의 결과 −6−Δx 에 Δx=1 을 넣은 값과 ⑴ 식으로 구한 [3,4] 평균변화율이 같음을 확인하게 해 식의 의미를 묻기(I-EQV d1 · ★2)."
```

### 교과서 03-2 미분계수

```yaml
- id: RPM-CALC1-0210
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일차함수 f(x)=3x 의 x=2 에서의 미분계수(정의 이용).
  category: "미분계수 정의 → lim {f(2+h)−f(2)}/h"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의로 f'(a) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {3(2+h)−6}/h = 3h/h = 3 → 극한 3. 일차함수는 어디서나 미분계수가 기울기와 같다. 정의 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2+h)−f(2)=3h → /h → h→0 → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 3·점 x=2 자유. 제약: 일차함수는 x 값이 답에 무관하므로 점을 바꿔도 답은 기울기."
    creative: "(1) x=2 를 x=a 로 일반화(★1) (2) 정의의 두 꼴(h→0 · x→2)로 각각 계산해 같음을 확인(★1) (3) 0205 와 묶어 같은 함수에서 평균변화율과 미분계수가 같은 이유를 묻기(★1)."
```

```yaml
- id: RPM-CALC1-0211
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일차함수 f(x)=−2x+5 의 x=2 에서의 미분계수(정의 이용).
  category: "미분계수 정의 → lim {f(2+h)−f(2)}/h"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의로 f'(a) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {−2(2+h)+5−1}/h = −2h/h = −2. 상수 5 는 차에서 상쇄되고 음수 기울기의 부호만 한 곳. 정의 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2+h)−f(2)=−2h → /h → −2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 −2·상수 5·점 x=2 자유. 제약: 상수와 점은 답에 무관, 기울기 부호를 음수로 두면 부호 처리 한 곳 유지."
    creative: "(1) 미분계수가 음수인 것을 그래프의 기울기(감소)로 해석하게 하기(I-RT d1 · ★2) (2) f(x)=mx+n 에서 f'(a)=m 임을 정의로 유도(★1 · Mₐ 2) (3) 임의 구간 평균변화율과 미분계수가 같음을 묻는 ㄱㄴㄷ(★1)."
```

```yaml
- id: RPM-CALC1-0212
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=x²−2 의 x=2 에서의 미분계수(정의 이용).
  category: "미분계수 정의 → (2+h)² 전개 → h 약분 → 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의로 f'(a) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(2+h)²−2−2}/h = (4h+h²)/h = 4+h → 4. 전개·약분·극한 세 단계지만 모두 표준. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2+h)² 전개 → 4h+h² → /h → h→0 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 x=2 와 상수 −2 자유(답 2a · 상수 무관). 이차 계수 c 를 붙이면 2ca. 제약: 정수 점."
    creative: "(1) x→2 꼴 정의로 바꿔 (x²−4)/(x−2) 인수분해 경로를 밟게 하기(★1) (2) f'(a)=2a 를 먼저 유도한 뒤 미분계수가 특정 값이 되는 a 를 찾기(0214 골조 · ★1~2) (3) h 에 따른 f(2+h) 값 표를 주고 평균변화율의 수렴을 수치로 관찰(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0213
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=(x+3)² 의 x=2 에서의 미분계수(정의 이용).
  category: "미분계수 정의 → (5+h)² 전개 → h 약분 → 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의로 f'(a) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(2+h)=(5+h)² 이므로 {(5+h)²−25}/h = 10+h → 10. 완전제곱 꼴을 먼저 5+h 로 묶으면 전개가 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(2+h)=(5+h)² → 25+10h+h² → −25, /h → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 3 과 점 2 자유(답 2(a+p)). 제약: 정수 · 답이 0 이 되는 a=−p 는 꼭짓점 확인용으로만."
    creative: "(1) (x+p)² 의 x=a 미분계수 2(a+p) 를 정의로 유도(★1 · Mₐ 2) (2) 미분계수가 0 이 되는 점이 꼭짓점임을 그래프와 연결(I-RT d1 · ★2) (3) 전개 대신 f(2+h)−f(2)=(5+h)²−5²=h(10+h) 로 합차 인수분해하는 경로와 비교(★1)."
```

```yaml
- id: RPM-CALC1-0214
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=x²−2x 의 x=a 에서의 미분계수가 6 일 때 양수 a 의 값.
  category: "정의로 f'(a) 계산 → 일차방정식 2a−2=6 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건 f'(a)=k 에서 a 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(a+h)²−2(a+h)−a²+2a}/h = 2a−2+h → f'(a)=2a−2. 2a−2=6 에서 a=4 이고 양수 조건은 자동 만족(이차라 해가 하나). 정의 계산 + 일차방정식 두 단계. 매개변수 a 로 Mₐ 2·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "정의로 f'(a)=2a−2 → 2a−2=6 → a=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수·일차 계수·조건값 6 자유. 제약: 2a−2=k 가 양의 정수 해를 갖게(k 짝수·k>−2) · 이차함수라 '양수' 조건은 장식이므로 조건과 해 개수를 일치시킬 것."
    creative: "(1) 삼차함수로 바꿔 f'(a)=3a²+… 이차방정식이 되게 하면 양수 조건이 실제로 근을 거른다(0215 골조 · ★1~2) (2) f'(a) 가 구간 [0,4] 의 평균변화율과 같아지는 a 를 묻기(평균값 정리 예비 · ★2) (3) a 가 정수가 되는 조건값 k 의 조건을 묻는 역방향(I-BW d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0215
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차함수 f(x)=2x³+3 의 x=a 에서의 미분계수가 6 일 때 양수 a 의 값.
  category: "정의로 f'(a) 계산 → 이차방정식 6a²=6 → 양수 근 선택"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건 f'(a)=k 에서 a 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {2(a+h)³+3−2a³−3}/h = 6a²+6ah+2h² → f'(a)=6a². 6a²=6 에서 a=±1 이고 양수 조건으로 a=1. 0214 와 같은 골조에 세제곱 전개와 근 선택이 더해졌지만 세 단계 안. 매개변수 a 로 Mₐ 2 · 양수 선택 T-부호 1 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "정의로 f'(a)=6a² → 6a²=6 → a=±1 → 양수 a=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수 c·상수·조건값 k 자유(답은 a²=k/(3c) 의 양수 근). 제약: k/(3c) 가 완전제곱수여야 정수 답 · 상수항은 무관 · '양수' 조건이 실제로 −a 를 거르므로 유지."
    creative: "(1) 일차항을 붙여 f'(a)=6a²+p=k 가 완전제곱이 아닌 이차방정식이 되게 하면 판별식 확인이 생김(★2) (2) '양수' 를 빼고 모든 a 의 합·곱을 묻기(근과 계수 · ★1~2) (3) f'(a)=k 가 실근을 갖는 k 의 범위를 묻는 역방향(I-BW d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0216
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    미분가능한 함수 f 에서 f'(a)=3 일 때 lim_{h→0} {f(a−h)−f(a)}/h 의 값.
  category: "정의 꼴과 대조 → 분모를 −h 로 맞춤 → −f'(a)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값 계산 (f'(a) 변형 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {f(a−h)−f(a)}/h = −{f(a−h)−f(a)}/(−h) 이고 h→0 이면 −h→0 이므로 −f'(a) = −3. 부호 하나를 맞추는 한 단계이며 정의 꼴 대조가 전부. 추상 함수 f 라 Mₐ 3 이지만 교과서 드릴 · 통찰 없음 · Mₛ 1 → ★1.
    [분류 이슈] Mₐ 3 · M_total 6 이라 유형 구역이면 ★2 로 나올 골조 — 교과서 구역 출발점을 우선해 ★1 로 두고 기록.
  tier: star_1
  mechanism_primary: "분모 h 를 −(−h) 로 → {f(a+(−h))−f(a)}/(−h) 꼴 → −f'(a) = −3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a) 값 3 과 분자의 증분(−h → −2h, 3h 등) 자유(답은 증분 계수 × f'(a)). 제약: 분자·분모 h 의 배율 비를 정수나 간단한 유리수로."
    creative: "(1) 분자를 f(a+2h)−f(a−h) 처럼 양쪽으로 벌리면 f(a) 를 빼고 더하는 한 단계가 생김(★2 · Mₛ 2) (2) f'(a) 값 대신 f(x) 를 구체 다항식으로 주면 정의 대조 없이 계산돼 Mₐ 1 (★1) (3) 극한값을 주고 f'(a) 를 묻는 역방향(★1~2)."
```

```yaml
- id: RPM-CALC1-0217
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f'(a)=3 일 때 lim_{h→0} {f(a+2h)−f(a)}/(3h) 의 값.
  category: "분모를 증분 2h 로 맞춤 → (2/3)·f'(a)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값 계산 (f'(a) 변형 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {f(a+2h)−f(a)}/(3h) = {f(a+2h)−f(a)}/(2h) × (2/3) → (2/3)·3 = 2. 분자 증분 2h 와 분모 3h 의 배율 비를 맞추는 한 단계(T-단위 성격의 배율 함정 1). 추상 함수 f 라 Mₐ 3 · 통찰 없음 · Mₛ 1 → ★1.
    [분류 이슈] 0216 과 같이 M_total 6 이나 교과서 드릴이라 ★1 유지.
  tier: star_1
  mechanism_primary: "분모 3h 를 2h × (3/2) 로 → {f(a+2h)−f(a)}/(2h) × 2/3 → (2/3)f'(a) = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수 2 · 분모 계수 3 · f'(a)=3 자유(답 (p/q)·f'(a)). 제약: 답이 정수 또는 간단한 유리수 · 증분 계수를 음수로 두면 부호 처리가 추가됨."
    creative: "(1) 분자를 f(a+2h)−f(a−h) 로 바꿔 두 정의 꼴의 합 (2+1)f'(a)/3 이 되게(★2) (2) x→a 꼴(0218)과 섞어 두 표현의 대조를 묻는 ㄱㄴㄷ(★2) (3) 극한값 2 를 주고 분모 계수 k 를 구하는 역방향(★1~2)."
```

```yaml
- id: RPM-CALC1-0218
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f'(a)=3, a≠0 일 때 lim_{x→a} {f(x)−f(a)}/(x²−a²) 의 값.
  category: "x²−a² 인수분해 → {f(x)−f(a)}/(x−a) × 1/(x+a) → f'(a)/(2a)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값 계산 (f'(a) 변형 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²−a²=(x−a)(x+a) 로 나누면 {f(x)−f(a)}/(x−a) × 1/(x+a) → f'(a)/(2a) = 3/(2a). 인수분해와 극한 분리 두 단계이며 a≠0 은 분모 조건(T-범위 1). 추상 함수 f 로 Mₐ 3 · 통찰 없음 · Mₛ 1 → ★1.
    [분류 이슈] 0216·0217 과 같은 이유로 M_total 6 이나 ★1 유지. 답이 a 의 식이라 셋 중 가장 무겁다.
  tier: star_1
  mechanism_primary: "x²−a²=(x−a)(x+a) → {f(x)−f(a)}/(x−a) × 1/(x+a) → f'(a)/(2a) = 3/(2a)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{2a}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a) 값과 분모(x²−a² → x³−a³ 이면 답 f'(a)/(3a²))를 바꿀 수 있음. 제약: 분모가 (x−a) 를 인수로 가져야 하고 a≠0 조건을 함께 명시."
    creative: "(1) 분모를 x−a 로 두고 분자를 x²f(a)−a²f(x) 로 바꾸면 f(a) 를 빼고 더하는 착안이 생김(I-EQV d1 · ★2~3) (2) a 에 구체 수(a=1)를 넣으면 Mₐ 2 · ★1 (3) 분모를 √x−√a 로 두면 유리화가 얹혀 Mₖ 2 (★2)."
```

```yaml
- id: RPM-CALC1-0219
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=2x²−3 위의 점 (1, −1) 에서의 접선의 기울기.
  category: "접선의 기울기 = f'(1) → 정의로 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 기하적 의미 — 접선의 기울기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선의 기울기는 미분계수 f'(1). {2(1+h)²−3−(−1)}/h = (4h+2h²)/h = 4+2h → 4. 기하적 의미를 미분계수로 옮기는 정의 확인 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "접선 기울기 = f'(1) → {2(1+h)²−2}/h → 4+2h → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수 2 · 상수 −3 · 접점 x=1 자유(답 2c·x₀). 제약: 접점의 y 좌표를 함수식과 맞춰 제시(점이 곡선 위에 있어야 함)."
    creative: "(1) 접선의 기울기를 주고 접점을 찾는 역방향(★1~2) (2) 접선의 방정식까지 쓰게 하면 04 단원 연결(★2) (3) 두 점을 잇는 직선의 기울기(평균변화율)와 접선 기울기를 그래프에 함께 그려 비교(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0220
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=x²−2x−5 위의 점 (0, −5) 에서의 접선의 기울기.
  category: "접선의 기울기 = f'(0) → 정의로 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 기하적 의미 — 접선의 기울기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(0) = lim {h²−2h−5−(−5)}/h = lim (h−2) = −2. 접점이 y 절편이라 f(0) 이 상수항 그대로이며 부호만 한 곳. 정의 대입 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "접선 기울기 = f'(0) → (h²−2h)/h → h−2 → −2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차 계수와 상수 자유(x=0 에서 답은 일차 계수). 제약: 접점을 y 절편으로 두면 답이 일차 계수임이 노출되므로, 접점을 옮기려면 y 좌표를 다시 맞춤."
    creative: "(1) 접점을 꼭짓점 x=1 로 옮겨 기울기 0 을 확인(★1) (2) 기울기가 0 이 되는 접점을 묻기(★1~2) (3) y 절편에서의 접선 기울기가 일차 계수와 같음을 일반 이차식에서 유도(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0221
  page: 39
  vendor_label: "교과서 03-2 미분계수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차함수 f(x)=−x³−x+7 위의 점 (−1, 9) 에서의 접선의 기울기.
  category: "접선의 기울기 = f'(−1) → 음수 밑 세제곱 전개 → 극한"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 기하적 의미 — 접선의 기울기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(−1) = lim {−(−1+h)³−(−1+h)+7−9}/h. (−1+h)³=−1+3h−3h²+h³ 이므로 분자는 −4h+3h²−h³, h 로 나누면 −4+3h−h² → −4. 음수 밑의 세제곱 전개와 부호 정리가 계산 부담(Mₖ 2 · T-부호 1). 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'(−1) 정의 → (−1+h)³ 전개 → 분자 −4h+3h²−h³ → /h → −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차·일차 계수·상수 자유(답 −3x₀²−1 꼴). 제약: 접점 y 좌표를 함숫값과 일치시킴 · 음수 접점을 유지하면 부호 처리 보존."
    creative: "(1) x→−1 꼴로 바꿔 f(x)−9 를 (x+1) 로 나누는 조립제법 경로(★1~2 · Mₖ 2) (2) 삼차함수의 접선 기울기가 항상 음수임을 f'(x)=−3x²−1 로 보이기(03-6 뒤 · ★2) (3) 접선의 기울기 −4 를 주고 접점 좌표 두 개(x=±1)를 찾는 역방향(★2 · T-부호)."
```

### 교과서 03-3 미분가능성과 연속성

```yaml
- id: RPM-CALC1-0222
  page: 39
  vendor_label: "교과서 03-3 미분가능성과 연속성"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=|x−2| 의 x=2 에서 ⑴ 연속성 ⑵ 미분가능성 조사.
  category: "함숫값·극한 비교 → 좌·우 미분계수 계산 → 불일치"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분가능성과 연속성 판정 (한 점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ lim_{x→2}|x−2|=0=f(2) 로 연속. ⑵ 우미분계수 lim_{h→0+}|h|/h=1, 좌미분계수 lim_{h→0−}|h|/h=−1 로 다르므로 미분가능하지 않다. 연속 확인·좌우 미분계수·비교 네 단계(Mₛ 2)이지만 교과서 대표 예 그대로이고 |h|/h 의 부호만 함정. 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "연속: 극한 0 = f(2) → 좌·우 미분계수 |h|/h 의 부호 → 1 ≠ −1 → 미분가능하지 않음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) 연속이다. \quad (2) 미분가능하지 않다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점 2 와 계수(|2x−4|, −|x−2|+1)를 바꿔도 골조 동일(좌·우 미분계수 ±k). 제약: 절댓값 안이 일차식이어야 좌·우 미분계수가 상수."
    creative: "(1) x|x−2| 로 바꾸면 x=2 에서 좌·우 미분계수 ±2 로 여전히 다르나 x=0 에서는 미분가능 — 두 점을 함께 묻기(★2) (2) (x−2)|x−2| 로 바꾸면 좌·우 미분계수가 모두 0 이라 미분가능 — 절댓값이 있어도 미분가능한 반례(★2 · I-MI d1 후보) (3) 그래프를 주고 연속이지만 미분가능하지 않은 점의 개수를 묻기(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0223
  page: 39
  vendor_label: "교과서 03-3 미분가능성과 연속성"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=2x³ (x≥1), 6x−4 (x<1) 의 x=1 에서 ⑴ 연속성 ⑵ 미분가능성 조사.
  category: "좌·우 극한과 함숫값 비교 → 좌·우 미분계수 각각 정의로 계산 → 일치"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분가능성과 연속성 판정 (한 점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ f(1)=2, lim_{x→1+}2x³=2, lim_{x→1−}(6x−4)=2 로 연속. ⑵ 우미분계수 lim_{h→0+}{2(1+h)³−2}/h = lim(6+6h+2h²)=6, 좌미분계수 lim_{h→0−}{6(1+h)−4−2}/h=6 으로 같으므로 미분가능. 좌·우를 각각 정의로 세우는 다섯 단계(Mₛ 2)에 세제곱 전개(Mₖ 2) · 경계 x=1 이 어느 식에 속하는지(T-경계 1). 통찰 없음이지만 M_total 6 → 교과서 출발점에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "연속: 2=2=2 → 우미분계수 2(1+h)³ 전개 → 6 · 좌미분계수 (6x−4) 정의 → 6 → 일치 → 미분가능"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) 연속이다. \quad (2) 미분가능하다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 1 · 삼차 계수 2 · 일차식 계수를 바꾸되 일차식이 x=1 에서 2x³ 과 함숫값(2)·기울기(6) 모두 일치하도록(접선 조건). 제약: 일차식을 접선이 아닌 것으로 바꾸면 ⑵ 답이 '미분가능하지 않다' 로 바뀜 — 그때는 연속만 맞출 것."
    creative: "(1) 일차식 계수를 a, b 로 두고 미분가능하게 하는 a, b 를 구하는 역방향(★2~3 · 유형 문제 골조 · 표준 미정계수라 I-BW 불인정) (2) 좌·우 식을 바꿔 경계에서 연속이지만 기울기가 다른 예를 만들어 ⑵ 답이 '아니다' 가 되게(★2) (3) 그래프를 주고 미분가능하지 않은 점의 개수를 세게(I-RT d1 · ★2)."
```

### 교과서 03-4 도함수

```yaml
- id: RPM-CALC1-0224
  page: 41
  vendor_label: "교과서 03-4 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    상수함수 f(x)=2 의 도함수를 정의로 구하기.
  category: "도함수 정의 → 분자 0 → f'(x)=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 정의로 f'(x) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {f(x+h)−f(x)}/h = (2−2)/h = 0 → f'(x)=0. 정의 대입 한 줄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x+h)−f(x)=0 → /h → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$f'(x)=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 를 어떤 실수로 바꿔도 답 0. 제약: 없음(상수함수의 도함수가 0 임을 보이는 용도)."
    creative: "(1) 상수·일차·이차함수 세 정의 계산을 묶어 f'(x) 의 차수 규칙을 관찰(I-PD d1 후보 · ★2) (2) f(x)=c 의 그래프에서 모든 접선이 수평임을 그림으로 연결(★1) (3) 'f'(x)=0 이면 f 는 상수함수' 의 참·거짓을 묻는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC1-0225
  page: 41
  vendor_label: "교과서 03-4 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    일차함수 f(x)=2x+1 의 도함수를 정의로 구하기.
  category: "도함수 정의 → 분자 2h → 약분 → f'(x)=2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 정의로 f'(x) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {2(x+h)+1−2x−1}/h = 2h/h = 2 → f'(x)=2. 상수 1 은 상쇄되고 기울기만 남는 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x+h)−f(x)=2h → /h → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$f'(x)=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 2 · 상수 1 자유(답은 기울기). 제약: 없음 · 기울기를 음수로 두면 부호 처리 한 곳."
    creative: "(1) f(x)=ax+b 로 일반화해 f'(x)=a 를 유도(★1 · Mₐ 2) (2) 0210·0211 의 미분계수와 도함수 f'(x)=2 를 대조해 '도함수에 x=a 대입 = 미분계수' 를 확인(★1) (3) 도함수의 그래프(상수함수)를 원함수와 함께 그리게 하기(I-RT d1 · ★1~2)."
```

```yaml
- id: RPM-CALC1-0226
  page: 41
  vendor_label: "교과서 03-4 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이차함수 f(x)=x²−1 의 도함수를 정의로 구하기.
  category: "도함수 정의 → (x+h)² 전개 → h 약분 → 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 정의로 f'(x) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(x+h)²−1−x²+1}/h = (2xh+h²)/h = 2x+h → f'(x)=2x. 전개·약분·극한 표준 세 단계이며 상수 −1 은 상쇄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x+h)² 전개 → 2xh+h² → /h → 2x+h → 2x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$f'(x)=2x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수와 상수 자유(답 2cx · 일차항 b 를 넣으면 2cx+b). 제약: 상수는 답에 무관."
    creative: "(1) x³ 으로 올려 3x²h+3xh²+h³ 전개를 밟게 하기(★1~2 · Mₖ 2) (2) 도함수 f'(x)=2x 를 구한 뒤 f'(3), f'(−1) 을 대입해 미분계수와 연결(★1) (3) f(x)=x² 의 도함수 그래프가 직선임을 그리게 하고 원함수와 대조(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC1-0227
  page: 41
  vendor_label: "교과서 03-4 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    미분가능한 함수 f 의 도함수 f'(x) 와 같은 극한식을 보기 ㄱ~ㄹ에서 모두 고르기(ㄱ h→0 정의 · ㄴ x=1 로 고정된 미분계수 · ㄷ t→x 꼴 정의 · ㄹ f(x)−f(Δx) 꼴).
  category: "도함수 정의 두 꼴과 대조 → 상수(미분계수)·형태 불일치 배제"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 정의 꼴 판별 (보기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㄱ 은 정의 그대로, ㄷ 은 t→x 로 쓴 같은 정의라 f'(x). ㄴ 은 f'(1) 이라는 상수, ㄹ 은 f(x)−f(Δx) 로 증분 꼴이 아니므로 도함수가 아니다. 보기 넷을 정의와 대조하는 한 단계씩이며 ㄴ·ㄹ 이 표기 함정(T-표기 1). 추상 함수 f 라 Mₐ 3 이지만 통찰 없음 · Mₛ 1 → ★1.
    [분류 이슈] M_total 6 이지만 정의 확인 보기 문제라 ★1 유지 — 0216~0218 과 같은 사유.
  tier: star_1
  mechanism_primary: "각 보기를 lim{f(x+h)−f(x)}/h 또는 lim_{t→x}{f(t)−f(x)}/(t−x) 와 대조 → ㄱ·ㄷ 일치 · ㄴ 은 f'(1) 상수 · ㄹ 은 증분 꼴 아님"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄴ 의 고정점 1 · ㄹ 의 형태(f(x)−f(Δx), f(x+Δx)−f(x−Δx) 등)를 바꿀 수 있음. 제약: 옳은 보기 2개·틀린 보기 2개 균형 · 틀린 보기는 각각 다른 이유(상수 / 형태)로."
    creative: "(1) 보기에 lim{f(x+2h)−f(x)}/h = 2f'(x) 처럼 배율이 붙은 식을 넣어 '같다' 의 판정을 계산으로 확인하게(★2) (2) lim{f(x+h)−f(x−h)}/(2h) 가 f'(x) 와 같음을 보이는 보기(f(x) 를 빼고 더하기 · I-EQV d1 후보 · ★2) (3) 도함수와 미분계수의 차이를 서술하게 하는 서술형(★1~2)."
```

### 교과서 03-5 함수 $y=x^n$과 상수함수의 도함수

```yaml
- id: RPM-CALC1-0228
  page: 41
  vendor_label: "교과서 03-5 함수 $y=x^n$과 상수함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x³ 을 미분하기.
  category: "(xⁿ)'=nxⁿ⁻¹ 공식 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n·상수함수의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x³)'=3x². 공식 한 줄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(xⁿ)'=nxⁿ⁻¹ → 3x²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=3x^2$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 을 다른 자연수로. 제약: 자연수 지수(이 단원 범위)."
    creative: "(1) 정의로 (x³)' 을 직접 유도해 공식과 대조(★1~2 · Mₖ 2) (2) x³ 의 x=a 미분계수 3a² 가 접선 기울기임을 그림과 연결(★1) (3) 지수를 n 으로 두고 (xⁿ)' 의 x=1 값이 n 임을 묻기(★1 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0229
  page: 41
  vendor_label: "교과서 03-5 함수 $y=x^n$과 상수함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x⁵ 을 미분하기.
  category: "(xⁿ)'=nxⁿ⁻¹ 공식 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n·상수함수의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x⁵)'=5x⁴. 공식 한 줄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(xⁿ)'=nxⁿ⁻¹ → 5x⁴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=5x^4$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 5 를 다른 자연수로. 제약: 자연수 지수."
    creative: "(1) x⁵ 의 도함수를 정의로 유도하며 이항 전개 첫 두 항만 필요함을 관찰(I-PD d1 후보 · ★2) (2) (x⁵)' 의 x=−1 값으로 부호 처리 확인(★1) (3) 지수를 n 으로 두고 f'(1)=n 임을 이용해 n 을 구하는 역방향(★1~2)."
```

```yaml
- id: RPM-CALC1-0230
  page: 41
  vendor_label: "교과서 03-5 함수 $y=x^n$과 상수함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    상수함수 y=−8 을 미분하기.
  category: "상수함수의 도함수 → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n·상수함수의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (−8)'=0. 상수함수 공식 한 줄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(c)'=0 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=0$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 −8 을 어떤 실수로 바꿔도 답 0. 제약: 없음."
    creative: "(1) y=(−8)² 처럼 상수인지 헷갈리는 표기를 두어 상수 판별을 묻기(T-표기 · ★1) (2) 0224 와 묶어 정의와 공식의 일치를 확인(★1) (3) y=x⁰ 의 도함수를 묻는 ㄱㄴㄷ(★1~2)."
```

### 교과서 03-6 함수의 미분법

```yaml
- id: RPM-CALC1-0231
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/2)x⁴+x² 을 미분하기.
  category: "항별 미분(실수배·합) → 2x³+2x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 미분법 (합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/2)·4x³ + 2x = 2x³+2x. 항별 공식 한 줄이며 분수 계수 1/2 와 4 가 약분되는 곳 하나. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 항에 (xⁿ)'=nxⁿ⁻¹ → (1/2)·4x³ + 2x → 2x³+2x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=2x^3+2x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1/2 · 지수 4, 2 자유. 제약: 분수 계수는 지수와 약분돼 정수 계수가 되게."
    creative: "(1) y'=0 인 x 를 물어 x(x²+1)=0 → x=0 만(★1~2) (2) f'(1) 값을 주고 계수를 구하는 역방향(★1~2) (3) 항 수를 늘려 Mₖ 2 (★1)."
```

```yaml
- id: RPM-CALC1-0232
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=−3x²+9x+10 을 미분하기.
  category: "항별 미분(실수배·합·차) → −6x+9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 미분법 (합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −3·2x + 9 + 0 = −6x+9. 항별 공식 한 줄 · 상수항 소멸 · 음수 계수 부호 한 곳. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항별 미분 → −6x + 9 + 0 → −6x+9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=-6x+9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 계수 자유(상수항은 답에 무관). 제약: 이차 계수를 음수로 두면 부호 처리 보존."
    creative: "(1) y'=0 인 x 로 꼭짓점 x=3/2 를 찾아 이차함수 최댓값과 연결(★1~2) (2) 접선 기울기가 3 이 되는 점을 묻기(★1~2) (3) 계수를 a, b 로 두고 f'(1)=3, f'(−1)=15 로 연립해 구하기(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0233
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=2x³−x²+4x−1 을 미분하기.
  category: "항별 미분(실수배·합·차) → 6x²−2x+4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 미분법 (합·차·실수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2·3x² − 2x + 4 − 0 = 6x²−2x+4. 네 항 항별 공식 한 줄. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항별 미분 → 6x² − 2x + 4 → 6x²−2x+4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=6x^2-2x+4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수 자유(상수항 무관). 제약: 정수 계수 유지."
    creative: "(1) f'(x) 의 최솟값을 묻는 이차함수 연결(★2) (2) f'(a)=4 인 a 를 묻기(6a²−2a=0 → a=0, 1/3 · ★2) (3) 삼차 계수를 a 로 두고 f'(1)=8 로 a 를 구하기(★1~2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0234
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(1)=−1, f'(1)=3, g(1)=2, g'(1)=−2 일 때 x=1 에서의 미분계수. ⑴ f+g ⑵ 2f−g ⑶ fg ⑷ {f}².
  category: "합·차·실수배·곱·거듭제곱의 미분법으로 도함수 식 세움 → x=1 값 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분법 공식으로 추상 함수 값 결합 (f(a)·f'(a) 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ f'(1)+g'(1)=1 ⑵ 2f'(1)−g'(1)=8 ⑶ f'(1)g(1)+f(1)g'(1)=6+2=8 ⑷ 2f(1)f'(1)=−6. 소문항마다 공식 하나씩 세우고 네 값을 대입하는 다섯 단계(Mₛ 2)이며 추상 함수 f, g 의 값만 주어져 Mₐ 3. 음수 곱 부호 한 곳(T-부호 1). 통찰 없음이지만 M_total 7 → 교과서 출발점에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "각 함수의 도함수 공식(합·실수배·곱·거듭제곱) → x=1 대입 → f(1), f'(1), g(1), g'(1) 값 결합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $1$ \quad (2) $8$ \quad (3) $8$ \quad (4) $-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 값 f(1), f'(1), g(1), g'(1) 자유(정수 권장 · 음수 하나 이상 유지해 부호 처리 보존). 제약: ⑷ 는 2f(1)f'(1) 이므로 곱이 간단한 정수가 되게."
    creative: "(1) ⑶⑷ 를 합쳐 f(x){g(x)}² 처럼 곱·거듭제곱 혼합으로(★2~3 · Mₛ 3) (2) 미분계수 값을 주고 f'(1) 을 거꾸로 묻는 역방향(★2) (3) 값 대신 f(x)=x²−2 같은 구체 함수 하나와 추상 g 를 섞어 두 층을 오가게(★2~3)."
```

```yaml
- id: RPM-CALC1-0235
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x(3x+2) 를 미분하기.
  category: "곱의 미분법 f'g+fg' (또는 전개 후 항별 미분) → 6x+2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x)'(3x+2)+x(3x+2)' = (3x+2)+3x = 6x+2. 전개해 3x²+2x 를 미분해도 같다. 공식 한 줄 · 두 경로 모두 가벼워 전략 선택은 아님. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'g+fg' → (3x+2)+x·3 → 6x+2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=6x+2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 계수 자유. 제약: 전개 경로와 곱의 미분법 경로가 같은 답이 되는지(항상 같음) 학생이 확인할 수 있게 정수 계수."
    creative: "(1) 전개 후 미분과 곱의 미분법 두 경로를 모두 쓰게 하고 비교(★1 · 전략 대조 예비) (2) x(3x+2)(x−1) 처럼 세 인수로 늘려 0239 골조(★1~2) (3) y'=0 인 x 를 물어 이차함수 꼭짓점과 연결(★1~2)."
```

```yaml
- id: RPM-CALC1-0236
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x−4)(3x−1) 을 미분하기.
  category: "곱의 미분법 f'g+fg' → 동류항 정리 → 6x−13"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3x−1)+3(x−4) = 3x−1+3x−12 = 6x−13. 공식 한 줄에 동류항 정리 · 음수 상수 두 개의 부호 한 곳. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'g+fg' → 1·(3x−1)+(x−4)·3 → 6x−13"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=6x-13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 네 계수 자유. 제약: 정수 계수 · 음수 상수를 하나 이상 남겨 부호 처리 보존."
    creative: "(1) y'=0 인 x=13/6 이 두 근 4, 1/3 의 평균임을 관찰하게(I-SYM d1 후보 · ★2) (2) f'(a)=−1 인 a 를 묻기(★1~2) (3) 한 인수를 (ax−1) 로 두고 f'(0)=−13 으로 a 를 구하기(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0237
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=−x²(2x−3) 을 미분하기.
  category: "곱의 미분법 f'g+fg' → 부호 정리 → −6x²+6x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (−x²)'=−2x 이므로 −2x(2x−3)+(−x²)·2 = −4x²+6x−2x² = −6x²+6x. 앞 인수의 음수 부호가 두 항 모두에 걸리는 부호 처리(T-부호 1). 전개하면 −2x³+3x² → −6x²+6x 로 오히려 짧다. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'g+fg' → (−2x)(2x−3)+(−x²)(2) → −6x²+6x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=-6x^2+6x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수 −x² 의 계수·차수, 일차식 계수 자유. 제약: 앞 인수 부호를 음수로 유지하면 부호 함정 보존 · 정수 계수."
    creative: "(1) y'=0 인 x=0, 1 을 물어 삼차함수 극값 위치 예비(★1~2) (2) −x²(2x−3) 과 x²(3−2x) 가 같은 함수임을 이용해 답이 같음을 확인(★1) (3) 전개 경로와 곱셈 경로 중 빠른 쪽을 고르게 하기(★1 · 전략 대조)."
```

```yaml
- id: RPM-CALC1-0238
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x²−3)(x+4) 를 미분하기.
  category: "곱의 미분법 f'g+fg' → 동류항 정리 → 3x²+8x−3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x(x+4)+(x²−3)·1 = 2x²+8x+x²−3 = 3x²+8x−3. 공식 한 줄에 동류항 정리. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'g+fg' → 2x(x+4)+(x²−3) → 3x²+8x−3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=3x^2+8x-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 상수 −3 · 일차식 계수 자유. 제약: 정수 계수 · 이차식에 일차항을 넣으면 f'g 가 두 항이 되어 정리량이 조금 늘어남."
    creative: "(1) y'=3x²+8x−3=(3x−1)(x+3) 을 인수분해해 y'=0 인 x 를 묻기(★2) (2) f'(1) 값을 주고 이차식의 상수를 역으로 구하기(★1~2) (3) (x²+a)(x+b) 로 두고 f'(0)=a, f'(1)=… 두 조건으로 a, b 결정(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0239
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x(x−1)(x−2) 를 미분하기.
  category: "세 인수 곱의 미분법 f'gh+fg'h+fgh' (또는 전개) → 3x²−6x+2"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x−1)(x−2)+x(x−2)+x(x−1) = (x²−3x+2)+(x²−2x)+(x²−x) = 3x²−6x+2. 세 항을 각각 전개해 더하는 계산량(Mₖ 2)이지만 단계는 셋. 먼저 전개하면 x³−3x²+2x 를 항별 미분해 더 짧다(두 경로 모두 가벼워 I-SC 아님). 교과서 구역 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'gh+fg'h+fgh' → (x−1)(x−2)+x(x−2)+x(x−1) → 3x²−6x+2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=3x^2-6x+2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근 0, 1, 2 자유(정수). 제약: 답의 계수가 정수 · 근을 등간격으로 두면 y' 이 대칭 이차식(x=1 중심)이 됨."
    creative: "(1) f'(0)+f'(1)+f'(2) 처럼 근에서의 미분계수 합을 묻기 — 각 근에서 f'(a) 가 나머지 두 인수의 곱임을 보면 전개 없이 즉시(I-SC d1 · ★2~3) (2) 세 근을 a, b, c 로 두고 f'(a)=(a−b)(a−c) 를 유도(★2 · Mₐ 2) (3) 인수를 넷으로 늘려 Mₛ 2 (★2)."
```

```yaml
- id: RPM-CALC1-0240
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x−5)(2x+4)(−x+1) 을 미분하기.
  category: "세 인수 곱의 미분법 → 부호 있는 이차식 셋 전개·합 → −6x²+16x+14"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2x+4)(−x+1)+2(x−5)(−x+1)−(x−5)(2x+4) = (−2x²−2x+4)+(−2x²+12x−10)+(−2x²+6x+20) = −6x²+16x+14. 세 곱을 각각 전개(부호 있는 계수)하고 합치는 네댓 단계(Mₛ 2 · Mₖ 2) · 음수 계수 부호 처리(T-부호 1). 먼저 전개해 −2x³+8x²+14x−20 을 미분하는 경로가 더 짧지만 역시 세 항 곱셈이라 부담은 비슷. 통찰 없음이지만 M_total 6 → 교과서 출발점에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "f'gh+fg'h+fgh' → 세 이차식 각각 전개 → 동류항 합 → −6x²+16x+14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y'=-6x^2+16x+14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 일차식의 여섯 계수 자유. 제약: 정수 계수 · 음수 계수 하나 이상 유지 · 전개 후 삼차 계수가 0 이 되지 않게(일차 계수 곱 ≠ 0 은 자동)."
    creative: "(1) y' 의 계수가 아니라 f'(1) 같은 한 점 값만 묻기 — 각 항에 x=1 을 넣으면 (6)(0)+2(−4)(0)−(−4)(6)=24 로 전개 없이 즉시(I-SC d1 · ★2) (2) 2x+4=2(x+2) 로 상수 2 를 빼내 정리하면 계산이 절반 — 이를 요구하는 서술형(★2) (3) 인수 하나를 (x−a) 로 두고 f'(0) 조건으로 a 를 구하기(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC1-0241
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(3x+4)² 을 미분하기.
  category: "{f(x)}ⁿ 의 미분 n{f}ⁿ⁻¹·f' → 6(3x+4)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "{f(x)}ⁿ 꼴의 미분 (거듭제곱·곱 혼합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2(3x+4)·(3x+4)' = 2(3x+4)·3 = 6(3x+4). 안쪽 미분 3 을 곱하는 곳이 유일한 함정. 곱의 미분법 (3x+4)(3x+4) 로 풀어도 같다. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n{f}ⁿ⁻¹·f' → 2(3x+4)·3 → 6(3x+4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=6(3x+4)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 일차식 계수 3, 4 자유(답 2a(ax+b)). 제약: 안쪽 계수 a≠1 로 두어야 f' 곱하기를 빠뜨린 오답과 구별됨."
    creative: "(1) 전개 9x²+24x+16 을 미분한 18x+24 와 6(3x+4) 가 같음을 확인(★1) (2) 지수를 n 으로 두고 f'(0)=8n 으로 n 을 구하기(★1~2 · Mₐ 2) (3) (3x+4)² 대신 (x²+1)² 로 안쪽을 이차로 두면 f'=2x 곱하기(★1)."
```

```yaml
- id: RPM-CALC1-0242
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(2x−5)³ 을 미분하기.
  category: "{f(x)}ⁿ 의 미분 n{f}ⁿ⁻¹·f' → 6(2x−5)²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "{f(x)}ⁿ 꼴의 미분 (거듭제곱·곱 혼합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3(2x−5)²·(2x−5)' = 3(2x−5)²·2 = 6(2x−5)². 안쪽 미분 2 를 곱하는 한 곳. 세제곱을 전개하면 훨씬 길어 공식이 유일한 실용 경로. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n{f}ⁿ⁻¹·f' → 3(2x−5)²·2 → 6(2x−5)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y'=6(2x-5)^2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 과 안쪽 계수 2, −5 자유(답 na(ax+b)ⁿ⁻¹). 제약: 안쪽 계수 a≠1 · 지수 자연수."
    creative: "(1) f'(3)=6 처럼 한 점 값을 묻기(★1) (2) 지수 n 과 계수를 미지수로 두고 f'(x) 의 차수·최고차 계수 조건으로 결정(★2 · Mₐ 2) (3) (2x−5)³ 과 (5−2x)³ 의 도함수 부호 관계를 묻기(★1~2 · T-부호)."
```

```yaml
- id: RPM-CALC1-0243
  page: 41
  vendor_label: "교과서 03-6 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x²+1)(2x+1)² 을 미분하기.
  category: "곱의 미분법 + {f}ⁿ 미분 → 공통인수 2(2x+1) 묶기 → 2(2x+1)(4x²+x+2)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "{f(x)}ⁿ 꼴의 미분 (거듭제곱·곱 혼합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x(2x+1)²+(x²+1)·2(2x+1)·2 = 2(2x+1){x(2x+1)+2(x²+1)} = 2(2x+1)(4x²+x+2). 곱의 미분법 안에 거듭제곱 미분이 들어가고, 답 꼴에 맞추려면 공통인수 2(2x+1) 을 묶어 괄호 안을 정리해야 하는 네댓 단계(Mₛ 2 · Mₖ 2). 통찰 없음이지만 M_total 6 → 교과서 출발점에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "f'g+fg' (g={2x+1}²) → 2x(2x+1)² + (x²+1)·4(2x+1) → 공통인수 2(2x+1) → 2(2x+1)(4x²+x+2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y'=2(2x+1)(4x^2+x+2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 상수 1 · 안쪽 일차식 계수 2, 1 · 지수 2 자유. 제약: 정수 계수 · 답을 인수분해 꼴로 요구하면 공통인수가 (ax+b) 하나가 되도록 지수 ≥ 2 유지."
    creative: "(1) f'(x) 대신 f'(−1/2) 같은 한 점 값만 묻기 — (2x+1) 이 공통인수라 0 임을 보면 즉시(I-SC d1 · ★2) (2) 지수를 3 으로 올려 공통인수 (2x+1)² 묶기(★2 · Mₖ 3) (3) f(x)=(x²+a)(2x+1)² 에서 f'(0)=4 로 a 를 구하기(★2 · Mₐ 2)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 35 · ★2 4 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 39 · premium 0
- ★2 는 네 문항: 0223(구간별 함수의 좌·우 미분계수 대조) · 0234(추상 함수 값 결합 4소문항) · 0240(부호 있는 세 인수 곱) · 0243(곱 + 거듭제곱 혼합·공통인수 묶기) — 모두 통찰 없이 Mₛ 2 이면서 M_total ≥ 6 인 경우
- type_hint 상위: 「곱의 미분법」 6 · 「평균변화율의 계산 (구체 구간)」 4 · 「미분계수의 정의로 f'(a) 계산」 4 · 「미분계수를 이용한 극한값 계산 (f'(a) 변형 꼴)」 3 · 「미분계수의 기하적 의미 — 접선의 기울기」 3 · (그 밖에 3문씩: 「도함수의 정의로 f'(x) 계산」 · 「x^n·상수함수의 도함수」 · 「다항함수의 미분법 (합·차·실수배)」 · 「{f(x)}ⁿ 꼴의 미분」)
- 그림: 0문 · 소문항 문항 4문(0209 · 0222 · 0223 · 0234)
- 전사 답 확인 필요: 없음(39문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0216 | 추상 함수 f 로 Mₐ 3 · M_total 6 이지만 교과서 드릴(Mₛ 1 · 부호 대조 한 단계) → ★1 유지. 유형 구역에서 같은 골조는 ★2 로 나올 것 | ★1 / ★2 |
| RPM-CALC1-0217 | 0216 과 같은 사유(배율 비 맞추기 한 단계) | ★1 / ★2 |
| RPM-CALC1-0218 | 0216 과 같은 사유 · 인수분해 한 단계 더 있고 답이 a 의 식이라 셋 중 가장 무겁다 | ★1 / ★2 |
| RPM-CALC1-0227 | 추상 함수 보기 판별 · M_total 6 이나 정의 확인 문제라 ★1 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 정의 계산 계열이 11문(평균변화율 5 · 미분계수 정의 4 · 도함수 정의 3 — 0209 는 Δx 포함) · 공식 계산 계열이 15문(x^n 3 · 합차실수배 3 · 곱 6 · 거듭제곱 3) · 나머지는 미분계수 응용(조건에서 a 2 · 극한값 3 · 접선 기울기 3 · 추상 값 결합 1) · 미분가능성 판정 2 · 정의 꼴 판별 1.
- 따로 세워야 할 유형: 「미분계수를 이용한 극한값 계산」(0216~0218) — 유형 구역에서 ★2~3 주력이 될 골조(분자 증분 벌리기 · x→a 인수분해 · f(a) 빼고 더하기) · 「미분가능성과 연속성 판정」 — 0222(절댓값 · 좌·우 미분계수 부호) 와 0223(구간별 다항식 · 미정계수 역방향의 원본) 두 하위 골조를 구분 · 「미분법 공식으로 추상 함수 값 결합」(0234) — 유형 구역의 f(1), f'(1) 조건 문제·곱·거듭제곱 혼합의 원본.
- 통합해도 될 유형: 「평균변화율의 계산 (구체 구간)」과 「(Δx 포함 구간)」 → 「평균변화율의 계산」 하나 · 「x^n·상수함수의 도함수」와 「다항함수의 미분법 (합·차·실수배)」 → 「다항함수의 미분법(기본)」 · 「곱의 미분법」과 「{f(x)}ⁿ 꼴의 미분」 → 「곱·거듭제곱의 미분법」 하나로 두고 세 인수 곱(0240)·곱과 거듭제곱 혼합(0243)을 +1 하위 골조로 기술 · 「미분계수의 기하적 의미 — 접선의 기울기」는 정의 계산과 골조가 같으므로 「미분계수의 정의로 f'(a) 계산」 아래 발문 변형으로 흡수 가능.
- ★ 갈림 메모: 같은 type_hint 안에서 0222 ★1 / 0223 ★2, 0239 ★1 / 0240 ★2, 0241·0242 ★1 / 0243 ★2 — 통찰이 아니라 계산 부담(Mₖ)·단계 수(Mₛ)로 갈린 것이라 카탈로그 base ★ 는 ★1 로 두고 「인수 셋 이상 · 부호 있는 계수 · 곱과 거듭제곱 혼합 · 좌·우 미분계수 각각 계산」을 +1 조건으로 적는 편이 맞다.
