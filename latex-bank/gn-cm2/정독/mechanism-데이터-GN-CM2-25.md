---
name: mechanism-데이터-GN-CM2-25
description: 개념원리 공통수학2 25 절대부등식(1/1 · 197-e16~203-481) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 25 절대부등식
  unit_code: CM2-25
  part: "1/1"
  extract_range: "197~203쪽 · 197-e16~203-481"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 25 절대부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 25단원 27문 전수(197~203쪽 · 197-e16~203-481)를 다룬다. 구역은 「필수·발전 예제」 17문(필수 예제 5 · 발전 예제 1 · 확인체크 11) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 2문이고 「개념원리 익히기」 통번호와 「특강」은 이 단원에 없다. 단원은 **네 개의 도구**를 축으로 배열된다 — ⑴ 차를 완전제곱으로 만들거나 제곱의 차를 보는 절대부등식 증명(197쪽) ⑵ 산술평균·기하평균의 관계(합 또는 곱이 일정 → 198쪽 · 식을 전개 → 199쪽 e18 · 식을 변형 → 199쪽 e19 · 도형 활용 → 200쪽) ⑶ 코시-슈바르츠의 부등식(201쪽) ⑷ 연습문제에 딸려 온 명제 증명법(202-472 귀류법 빈칸 · 202-476 대우 증명). 그림은 200-e20 · 200-468 · 200-469 · 201-471 네 문항이고, 선택지 문항은 202-475 · 203-481 둘, 소문항(⑴⑵) 문항은 197-e16 · 197-461 · 198-e17 · 201-e21 · 201-470 다섯이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 「발전」 예제 ★3 · 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4. tag 「확인체크」 문항은 **바로 위 예제와 같은 출발점**으로 두었다(예제의 유제 배치이므로 200-468·200-469 는 발전 예제 아래라 ★3 출발). 통찰 카운트는 한 선을 지켰다 — **예제가 이름 붙여 가르치는 표준 변형**(제곱의 차 · 합/곱이 일정할 때의 산술기하 · 곱을 전개하기 · 분모에 맞춰 $x-1$ 로 쪼개기 · 코시 공식 대입)은 교과서 공식 대입과 같은 지위로 보아 **통찰로 세지 않았고**, 학생이 **스스로 찾아야 하는 변형**(조건식을 곱해 1로 만들기 · 세 완전제곱 합으로 분해 · 도형 조건을 대수 조건으로 옮기기 · 판별식으로 범위를 먼저 얻기 · 「항상 성립」을 최댓값 비교로 뒤집기)만 통찰로 셌다. 산술기하·코시를 쓰는 모든 문항은 함정 카테고리 둘(T-범위 = 양수 조건 확인 · T-경계 = 등호 성립 조건 확인)을 Mₜ=2 로 공통 반영했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 특히 이 단원은 **등호 성립 조건이 숫자 변형의 제약**이 되는 단원이라(계수를 바꾸면 등호가 성립하는 점이 정의역 밖으로 나가거나 답이 무리수가 된다) `variation_notes.numeric` 에 그 제약을 문항마다 적었다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-197-e16
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    실수 a, b 에 대하여 ⑴ (a+b)^2 ≥ 4ab ⑵ |a|+|b| ≥ |a+b| 가 성립함을 증명.
  category: "절대부등식 증명 — 차를 완전제곱으로 · 절댓값은 제곱의 차로"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절대부등식의 증명(완전제곱식 · 절댓값의 제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 (좌변)-(우변) = (a-b)^2 ≥ 0 한 줄, ⑵ 는 양변이 음이 아니므로 제곱의 차 (|a|+|b|)^2-|a+b|^2 = 2(|ab|-ab) ≥ 0.
    이 단원이 이름 붙여 가르치는 두 표준 도구를 그대로 쓰는 도입 예제라 통찰로 세지 않았다.
    함정은 T-부호(|ab| ≥ ab 의 근거)와 T-경계(등호 성립 조건 서술) 둘. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(좌변)-(우변) 또는 제곱의 차 → 완전제곱 · |ab|-ab 꼴 → ≥0 과 등호 조건 서술"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (⑴ $(a+b)^2-4ab=(a-b)^2\ge 0$, 등호는 $a=b$일 때 성립 ⑵ $(|a|+|b|)^2-|a+b|^2=2(|ab|-ab)\ge 0$, 등호는 $ab\ge 0$일 때 성립)'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/197-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 4 는 바꿀 수 없다((a+b)^2 ≥ kab 가 모든 실수에서 성립하는 k 는 4 뿐). 계수를 넣으려면 (pa+qb)^2 ≥ 4pq·ab 꼴로 p, q 를 함께 바꾼다(p=1,q=2 → 8ab). ⑵ 는 수가 없다."
    creative: "(1) |a|-|b| ≤ |a-b| 로 바꾸면 좌변 부호에 따른 경우 나눔이 붙어 ★3 (2) 등호 조건이 a=b=0 인 a^2+b^2 ≥ ab 로 바꿔 등호 조건 서술만 묻기(★2 유지) (3) 문자를 셋으로 늘려 a^2+b^2+c^2 ≥ ab+bc+ca(완전제곱 3개 분해 → ★3 · I-EQV d2)."
```

```yaml
- id: GN-CM2-197-461
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 a, b 에 대하여 ⑴ a^2+b^2+1 ≥ ab+a+b ⑵ |a|-|b| ≤ |a-b| 가 성립함을 증명.
  category: "절대부등식 증명 — 2배 후 세 완전제곱으로 분해 · 좌변 부호로 경우 나눔"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "차에 2를 곱해 (a-b)^2+(a-1)^2+(b-1)^2 세 완전제곱의 합으로 분해하는 동치 변환(한 번의 완전제곱으로는 끝나지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 완전제곱식의 합으로 분해하는 절대부등식 증명"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 차를 그대로 완전제곱 하나로 묶을 수 없고 양변에 2를 곱해야 세 제곱의 합이 나온다 — 이 분해를 스스로 찾는 것이 이 문항의 핵심(I-EQV d2).
    ⑵ 는 좌변이 음수면 자명, 0 이상이면 제곱의 차로 가는 부호 경우 나눔이라 Mₜ(T-부호)로 반영했다.
    확인체크 출발점 ★2 이나 통찰 1개(d2) + M_total 8 로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "차를 2배 → 세 완전제곱의 합 ≥ 0 → 등호 a=b=1 / 좌변 부호로 경우를 나눈 뒤 제곱의 차"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 (⑴ $a^2+b^2+1-(ab+a+b)$ $=\dfrac{1}{2}\{(a-b)^2+(a-1)^2+(b-1)^2\}\ge 0$, 등호는 $a=b=1$일 때 성립 ⑵ $|a|-|b|<0$이면 성립하고, $|a|-|b|\ge 0$이면 $|a-b|^2-(|a|-|b|)^2$ $=2(|ab|-ab)\ge 0$, 등호는 $ab\ge 0$, $|a|\ge|b|$일 때 성립)'
  answer_source: "계산(답지 「풀이 96쪽」)"
  figure: none
  latex: latex-bank/gn-cm2/items/197-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상수 1 을 c^2 으로 일반화하면 a^2+b^2+c^2 ≥ ab+bc+ca 가 된다. 상수만 2, 3 으로 바꾸면 등호가 성립하지 않아 부등식이 더 느슨해지므로(증명은 되지만 등호 조건이 사라짐) 숫자 변형은 상수 1 을 유지하거나 문자로 승격하는 두 갈래만 안전하다."
    creative: "(1) a^2+b^2+c^2 ≥ ab+bc+ca 로 승격(같은 골조 · ★3 유지) (2) a^2+b^2+1 ≥ ab+a+b 의 등호 조건만 묻기(★2) (3) ⑵ 를 |a+b+c| ≤ |a|+|b|+|c| 로 확장해 삼각부등식 반복 적용을 요구(★3 · I-EQV d2)."
```

```yaml
- id: GN-CM2-197-462
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a>0, b>0 일 때 √(2(a+b)) ≥ √a + √b 가 성립함을 증명.
  category: "근호가 있는 절대부등식 — 양변이 양수임을 확인하고 제곱의 차"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 부등식의 증명(양변 제곱의 차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제곱의 차가 a+b-2√(ab) = (√a-√b)^2 ≥ 0 으로 곧장 떨어지고, 마지막에 「양변이 모두 양수」를 근거로 대소를 되돌리는 표준 절차.
    e16 ⑵ 와 같은 도구라 통찰로 세지 않았고, 양수 확인(T-부호)과 등호 조건(T-경계)으로 Mₜ=2.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "양변 제곱의 차 → a+b-2√(ab) = (√a-√b)^2 ≥ 0 → 양변이 양수이므로 원 부등식 성립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($\{\sqrt{2(a+b)}\}^2-(\sqrt{a}+\sqrt{b})^2$ $=a+b-2\sqrt{ab}$ $=(\sqrt{a}-\sqrt{b})^2\ge 0$이고 양변이 모두 양수이므로 성립, 등호는 $a=b$일 때 성립)'
  answer_source: "계산(답지 「풀이 96쪽」)"
  figure: none
  latex: latex-bank/gn-cm2/items/197-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 는 문자 개수와 묶인다 — n개 문자면 √(n(a1+…+an)) ≥ √a1+…+√an 이므로 2 를 3 으로 바꾸려면 문자도 셋으로 늘려야 한다. 2 만 다른 수로 바꾸면 부등식이 거짓이 되므로 금지."
    creative: "(1) √(3(a+b+c)) ≥ √a+√b+√c 로 확장(★3 · 전개 항이 늘어 I-EQV d2) (2) 부등호를 √(a+b) ≤ √a+√b 로 뒤집어 같은 도구의 반대 방향을 묻기(★2) (3) a+b=8 조건을 주고 √a+√b 의 최댓값을 묻는 최대·최소 문제로 전환(★3 · 203-477 과 같은 골조)."
```

```yaml
- id: GN-CM2-198-e17
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x>0, y>0 일 때 ⑴ 2x+3y=12 이면 xy 의 최댓값 ⑵ xy=8 이면 x+2y 의 최솟값.
  category: "산술평균·기하평균 — 합이 일정하면 곱의 최대, 곱이 일정하면 합의 최소"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 합 또는 곱이 일정할 때"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 12 = 2x+3y ≥ 2√(6xy) 에서 xy ≤ 6, ⑵ x+2y ≥ 2√(2xy) = 8. 공식을 한 번 적용하고 등호 조건을 확인하면 끝난다.
    단원의 대표 도구를 이름 그대로 쓰는 도입 예제라 통찰 0. 양수 조건(T-범위)·등호 조건(T-경계)으로 Mₜ=2.
    필수 예제 출발점 ★2 유지(M_total 6 이라 −1 대상도 아님).
  tier: star_2
  mechanism_primary: "2x·3y 또는 x·2y 에 산술기하 적용 → 일정한 쪽을 대입 → 등호 조건 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ ⑵ $8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/198-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 (2,3,12) 은 합 12 가 2x=3y=6 으로 쪼개져 x=3, y=2 가 되므로 최댓값 xy=6 이 정수다. 계수 (p,q) 와 합 s 를 바꿀 때 s 가 2p, 2q 로 나누어떨어져야 등호점이 유리수. ⑵ 의 곱 8 도 2xy=16 이 제곱수라야 최솟값이 정수(곱 k 에 대해 2k 가 제곱수)."
    creative: "(1) 최댓값을 주고 계수를 역으로 묻기(I-BW d2 → ★3) (2) x, y 의 범위를 x ≥ 2 처럼 제한해 등호점이 범위 밖으로 나가게 하면 산술기하가 통하지 않아 이차함수 최대·최소로 갈아타야 함(★4 · I-SC d2) (3) 합이 일정한 세 수의 곱(xyz)으로 확장(★3)."
```

```yaml
- id: GN-CM2-198-463
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    양수 a, b 가 ab=3 일 때 3a+4b 의 최솟값 m 과 그때의 a, b 를 α, β 라 할 때 m+α+β 의 값.
  category: "곱이 일정할 때 합의 최소 → 등호 성립점 역산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 곱이 일정할 때(등호 성립점 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3a+4b ≥ 2√(12ab) = 12 로 m 을 얻고, 등호 조건 3a=4b 와 ab=3 을 연립해 α, β 를 되찾는 두 번째 단계가 붙어 Mₖ=2.
    통찰은 없고 도구는 e17 ⑵ 와 같다. 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "3a+4b ≥ 2√(12ab)=12 → 등호 3a=4b=6 과 ab=3 연립 → α, β → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{31}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/198-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3,4)와 곱 3 은 12ab=36 이 제곱수라서 m 이 정수로 떨어진다. (p,q,ab=k) 를 바꿀 때 pqk 가 제곱수여야 최솟값이 정수이고, 그래도 등호점 α=√(qk/p) 는 무리수가 되기 쉬우므로 m+α+β 를 묻는 형태를 유지하려면 α, β 가 유리수인 조합(예: (2,8), k=4 → α=2, β=1)을 골라야 한다."
    creative: "(1) m 만 묻고 α, β 를 빼면 ★2 아래쪽, 반대로 「m+α+β 가 자연수가 되는 k」를 묻게 하면 ★4(I-BW d2) (2) ab=3 대신 a+b=3 을 주고 3a+4b 의 범위를 묻기(산술기하가 안 먹혀 다른 도구 필요 → ★3) (3) 3a+4b 를 3a+4b+12/(ab) 처럼 늘려 두 번 적용하게 하기(★3)."
```

```yaml
- id: GN-CM2-198-464
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    양수 a, b 가 9a^2+b^2=36 일 때 ab 의 최댓값.
  category: "제곱의 합이 일정할 때 곱의 최대"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 제곱의 합이 일정할 때"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    36 = 9a^2+b^2 ≥ 2√(9a^2b^2) = 6ab 에서 ab ≤ 6. 제곱항에 그대로 적용하는 한 단계.
    √(a^2b^2)=ab 로 쓸 수 있는 근거가 a, b > 0 이라는 점이 유일한 함정(T-범위)이고 등호 조건(T-경계)과 합해 Mₜ=2.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "9a^2+b^2 ≥ 2·3ab=6ab → 36 ≥ 6ab → ab ≤ 6 (등호 3a=b)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/198-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 9 와 합 36 은 2√9=6 으로 36 을 나누어 ab ≤ 6 이 정수가 되게 맞춘 조합. p a^2+q b^2 = s 에서 최댓값은 s/(2√(pq)) 이므로 pq 가 제곱수이고 s 가 2√(pq) 의 배수여야 정수."
    creative: "(1) ab 대신 3a+b 의 최댓값을 묻기(코시 또는 (3a+b)^2 ≤ 2(9a^2+b^2) → ★3 · I-RT d2) (2) 9a^2+b^2=36 을 타원 위의 점으로 읽고 내접 직사각형 넓이로 바꾸기(★3 · 도형 활용) (3) ab 의 최댓값이 주어졌을 때 계수를 역으로 묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-198-465
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x>0, y>0 이고 3x+y=6 일 때 1/x + 3/y 의 최솟값.
  category: "일차 조건 아래 분수식의 최소 — 조건을 1로 만들어 곱한 뒤 전개"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건식 3x+y=6 을 (3x+y)/6 = 1 로 보고 구하는 식에 곱해 전개하는(또는 3x, y 를 한 덩어리로 치환하는) 동치 변환 — 식을 전개하는 유형(e18)은 다음 쪽이라 여기서는 학생이 스스로 찾아야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일차 조건 아래 분수식의 최솟값(조건을 곱해 전개)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1/x+3/y 에 산술기하를 그냥 쓰면 xy 가 남아 조건과 연결되지 않는다. (3x+y)/6 을 곱해 전개해야 상수 + (9x/y + y/x) 꼴이 되어 최솟값 2 가 나온다.
    이 「조건을 1로 만들어 곱하기」가 이 문항의 진입 장벽이라 I-EQV d2 로 셌다(3x, y 를 한 덩어리로 묶는 치환 갈래도 같은 통찰).
    확인체크 출발점 ★2 에서 통찰 1개(d2) 로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "(3x+y)/6=1 을 1/x+3/y 에 곱해 전개 → 상수 + (9x/y + y/x) → 산술기하 → 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/198-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x+y=6 과 분자 (1,3) 은 전개 후 교차항이 9x/y · y/x 로 곱이 9(제곱수)가 되게 맞춘 조합. (ax+by=s, p/x+q/y) 에서 교차항의 곱은 (aq)(bp)/(ab) 꼴이므로 이 값이 제곱수여야 최솟값이 유리수."
    creative: "(1) 분자를 (1,1) 로 바꿔 1/x+1/y 로 두면 대칭성이 생겨 더 쉬워짐(★2) (2) 조건을 3x+y ≤ 6 으로 부등식화하면 최솟값이 경계에서만 나오는지 따져야 해 ★4(I-VF d2) (3) 1/x+3/y 의 값이 정수가 되는 정수쌍 (x,y) 를 묻는 정수 문제로 전환(★4 · I-MI d2)."
```

```yaml
- id: GN-CM2-199-e18
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    a>0, b>0 일 때 (a + 1/b)(b + 4/a) 의 최솟값.
  category: "곱으로 주어진 식을 전개한 뒤 산술기하"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 식을 전개하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 ab + 4 + 1 + 4/(ab) 이고 ab 와 4/(ab) 의 곱이 상수 4 라 산술기하가 바로 먹힌다.
    「식을 전개하는 경우」로 이름 붙여 가르치는 예제이므로 전개 착안을 통찰로 세지 않았다(양수 조건·등호 조건으로 Mₜ=2).
    필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱을 전개 → 상수 + ab + 4/(ab) → 곱이 일정한 두 항에 산술기하 → 5+4=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/199-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1 과 4 는 전개했을 때 ab 와 4/(ab) 의 곱이 4(제곱수)가 되도록 고른 값이다. (a+p/b)(b+q/a) 는 ab + q/(ab) + (p+q) 이므로 q 가 제곱수여야 최솟값이 정수이고, 교차 상수 p·(1/b)·b = p 와 q 가 최솟값 p+q+2√q 를 만든다."
    creative: "(1) 인수를 셋으로 늘리기(203-478 골조 · ★3) (2) 최솟값을 주고 q 를 역으로 묻기(★3 · I-BW d2) (3) a, b 에 a+b=1 같은 추가 조건을 걸어 전개 후 조건을 다시 써야 하게 만들기(★4 · I-CON d2)."
```

```yaml
- id: GN-CM2-199-e19
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x>1 일 때 4x + 1/(x-1) 의 최솟값.
  category: "분모에 맞춰 항을 쪼개는 변형 후 산술기하"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 식을 변형하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4x = 4(x-1)+4 로 쪼개면 4(x-1) 과 1/(x-1) 의 곱이 4 로 일정해져 최솟값 2·2+4 = 8.
    「식을 변형하는 경우」로 이름 붙여 가르치는 예제라 쪼개기 착안을 통찰로 세지 않았다.
    x>1 이라야 4(x-1)>0 이 보장되는 것이 T-범위, 등호 조건이 T-경계 → Mₜ=2. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "4x = 4(x-1)+4 로 쪼개기 → 4(x-1) + 1/(x-1) ≥ 4 → +4 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/199-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4 와 1 은 4(x-1)·1/(x-1) = 4 가 제곱수가 되게 맞춘 값. a x + b/(x-c) 꼴에서 최솟값은 2√(ab) + ac 이므로 ab 가 제곱수여야 정수로 떨어진다. 조건 x>1 은 분모 x-c 의 c 와 반드시 같아야 하고(x>c), 어긋나면 등호점이 범위 밖으로 나간다."
    creative: "(1) x>1 을 x ≥ 3 으로 좁혀 등호점 x=3/2 를 범위 밖으로 밀어내면 산술기하가 아니라 증가함수 판단이 필요해 ★4(I-VF d2) (2) 분모를 x^2-1 로 바꿔 인수분해를 먼저 요구(★3) (3) 최솟값과 그때의 x 를 함께 묻는 m+n 형태로 바꾸기(203-479 골조 · ★3)."
```

```yaml
- id: GN-CM2-199-466
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a>0, b>0 일 때 (3a+4b)(3/a + 1/b) 의 최솟값.
  category: "곱으로 주어진 식을 전개한 뒤 산술기하"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 식을 전개하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개하면 9 + 4 + 3a/b + 12b/a 이고 교차항 두 개의 곱이 36 으로 일정해 13 + 12 = 25.
    e18 과 같은 도구이고 전개 자체가 지시된 유형이라 통찰 0. 교차항 계수 계산이 늘어 Mₖ=2.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱을 전개 → 13 + (3a/b + 12b/a) → 곱이 36 인 두 항에 산술기하 → 25"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/199-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(3a+4b)(3/a+1/b) 에서 교차항 곱은 (3·1)(4·3)=36 (제곱수)이라 최솟값이 정수 25. 계수 (p,q)(r,s) 의 교차항 곱 ps·qr 이 제곱수여야 하고, 상수부 pr+qs 가 더해져 최솟값 = pr+qs+2√(ps·qr)."
    creative: "(1) 코시-슈바르츠로 (√(pr)+√(qs))^2 형태로 바로 처리하게 유도(★3 · I-RT d2 · 201 절 도구와 연결) (2) 3a+4b=12 같은 조건을 추가해 두 도구를 함께 쓰게 하기(★3) (3) 인수를 셋으로 늘리기(203-478 · ★3)."
```

```yaml
- id: GN-CM2-199-467
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x>-2 일 때 3x + 5 + 3/(x+2) 의 최솟값.
  category: "분모 x+2 에 맞춰 항을 쪼개는 변형 후 산술기하"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 식을 변형하는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x+5 = 3(x+2)-1 로 쪼개면 3(x+2) 와 3/(x+2) 의 곱이 9 로 일정해 2·3-1 = 5.
    e19 와 같은 유형이고 상수 정리가 음수(-1)라 부호 실수가 나기 쉬운 점만 Mₖ 에 반영(2).
    x>-2 (T-범위)·등호 조건(T-경계)으로 Mₜ=2. 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "3x+5 = 3(x+2)-1 → 3(x+2) + 3/(x+2) ≥ 6 → -1 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/199-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3(x+2)·3/(x+2) = 9 가 제곱수라 최솟값이 정수. a x + b + c/(x+d) 꼴에서 조건은 x > -d 여야 하고 최솟값 = 2√(ac) + (b-ad) 이므로 ac 가 제곱수, b-ad 가 정수이도록 고른다. 여기서 쪼갠 뒤 남는 상수가 음수(-1)인 점이 이 문항의 계산 함정이다."
    creative: "(1) 남는 상수를 0 으로 만들어(3x+6) 최솟값이 순수 2√(ac) 가 되게 하면 ★2 아래쪽 (2) 최솟값을 주고 분자 c 를 역으로 묻기(★3 · I-BW d2) (3) x > -2 를 x ≥ 0 으로 좁혀 등호점 x=-1 을 범위 밖으로 밀어내면 단조성 판단이 필요해 ★4(I-VF d2)."
```

```yaml
- id: GN-CM2-200-e20
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    수직인 두 벽면 사이를 길이 20 m 인 철망으로 막은 삼각형 모양 닭장의 바닥 넓이의 최댓값(철망 두께 무시).
  category: "도형 활용 — 피타고라스로 제곱의 합을 고정하고 넓이(곱)의 최대"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 벽면을 두 변 a, b 로 두고 철망을 빗변으로 읽어 「a^2+b^2=400 일 때 ab/2 의 최대」라는 대수 문제로 옮기는 기하→대수 전환(합이 아니라 제곱의 합이 일정하다는 것이 핵심)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계의 활용(도형의 넓이 최대)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    철망이 빗변이므로 고정되는 것은 a+b 가 아니라 a^2+b^2 = 400 이고, 넓이 ab/2 는 a^2+b^2 ≥ 2ab 에서 100 이하가 된다.
    변수를 스스로 잡고 어느 양이 일정한지 판별하는 단계(I-RT d2)가 이 문항의 값이다 — 여기서 합이 일정하다고 오독하면 답이 달라진다.
    발전 예제 출발점 ★3 유지(통찰 1개 d2 · M_total 7).
  tier: star_3
  mechanism_primary: "두 변 a, b 설정 → 빗변 조건 a^2+b^2=400 → ab/2 ≤ (a^2+b^2)/4 = 100 (등호 a=b)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100\,\mathrm{m}^2$'
  answer_source: "본문 풀이"
  figure: "crop:fig-200-e20.png"
  latex: latex-bank/gn-cm2/items/200-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철망 길이 20 은 최댓값 20^2/4 = 100 이 정수로 떨어지게 하는 값. 길이 L 이면 최댓값은 L^2/4 이므로 L 이 짝수일 때만 정수. 등호는 언제나 직각이등변(a=b=L/√2)이라 변의 길이 자체는 무리수가 되므로 「그때의 변의 길이」를 함께 묻는 변형은 L 을 √2 의 배수로 잡아야 한다. 그림 라벨(수직인 두 벽면 · 빗변 = 철망)은 고정."
    creative: "(1) 철망을 빗변이 아니라 두 변에 치게 바꾸면 a+b=20 이 되어 합이 일정한 표준형(★2 로 내려감) (2) 넓이를 주고 철망 길이의 최소를 묻는 역방향(★3 · I-BW d2) (3) 벽이 수직이 아니라 60도라 코사인법칙이 끼어들게 하기(★4 · I-XU d2) (4) 둘레(철망 + 벽 두 변)의 최소를 묻기(★4)."
```

```yaml
- id: GN-CM2-200-468
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    길이 40 cm 인 철사를 모두 써서 합동인 작은 직사각형 네 개가 한 줄로 늘어선 구역을 만들 때 바깥쪽 직사각형 넓이의 최댓값과 그때의 가로 길이(철사 굵기 무시).
  category: "도형 활용 — 칸막이를 포함한 철사 길이 식을 세우고 넓이의 최대"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에서 가로 방향 두 줄·세로 방향 다섯 줄(칸막이 세 개 포함)을 세어 2x+5y=40 이라는 일차 조건으로 옮기는 전환 — 칸막이를 빠뜨리면 조건식 자체가 틀린다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계의 활용(칸막이가 있는 울타리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2x+5y=40 에서 2x·5y ≤ (40/2)^2 = 400 이므로 xy ≤ 40, 등호는 2x=5y=20 즉 가로 10, 세로 4.
    값은 조건식을 정확히 세우는 데 있고(I-RT d2), 그 뒤는 「합이 일정할 때 곱의 최대」 표준형이다.
    발전 예제 아래 확인체크라 출발점 ★3 유지(M_total 8).
  tier: star_3
  mechanism_primary: "그림에서 철사 식 2x+5y=40 → 2x·5y ≤ 400 → xy ≤ 40 → 등호에서 가로 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40\,\mathrm{cm}^2$, $10\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-200-468.png"
  latex: latex-bank/gn-cm2/items/200-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "철사 40 은 2x=5y=20 으로 쪼개져 가로 10 · 세로 4 · 넓이 40 이 모두 정수가 되는 값. 조건이 px+qy=L 이면 최댓값은 L^2/(4pq) 이고 등호점은 x=L/(2p), y=L/(2q) 이므로 L 이 2p 와 2q 의 공배수여야 답이 정수. 칸막이 개수를 바꾸면 계수 q 가 바뀌므로 그림과 함께 고쳐야 한다."
    creative: "(1) 칸을 2×2 로 배치해 계수를 3x+3y=40 으로 바꾸면 답이 무리수가 되므로 철사 길이를 함께 조정해야 함(★3 유지) (2) 넓이를 고정하고 철사 길이의 최소를 묻는 역방향(★3 · I-BW d2) (3) 한 변을 벽으로 대체해 그 변의 철사를 빼기(★3) (4) 작은 직사각형 한 개의 넓이 최대를 묻게 하면 조건 해석이 한 겹 더 붙음(★4)."
```

```yaml
- id: GN-CM2-200-469
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    반지름의 길이가 2√3 인 반원 O 에 내접하는 직사각형 ABCD 의 넓이가 최대일 때 그 직사각형의 둘레의 길이.
  category: "도형 활용 — 반원 내접 직사각형의 넓이 최대 후 둘레 계산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지름 위에 놓인 변의 절반을 x, 높이를 y 로 잡아 반지름 조건을 x^2+y^2=12 로 옮기고 넓이 2xy 에 산술기하를 적용하는 기하→대수 전환(가로 전체가 아니라 절반을 변수로 잡아야 조건이 깔끔해진다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계의 활용(반원에 내접하는 직사각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x^2+y^2=12 에서 넓이 2xy ≤ x^2+y^2 = 12 이고 등호는 x=y=√6, 그때 둘레는 2(2x+y) = 6√6.
    넓이가 최대인 지점을 구한 뒤 묻는 양이 둘레로 바뀌는 두 단계 구조라 Mₖ=2.
    발전 예제 아래 확인체크라 출발점 ★3 유지(통찰 1개 d2 · M_total 8).
  tier: star_3
  mechanism_primary: "반폭 x · 높이 y → x^2+y^2=12 → 넓이 2xy ≤ 12 (등호 x=y=√6) → 둘레 2(2x+y)=6√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-200-469.png"
  latex: latex-bank/gn-cm2/items/200-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2√3 은 x^2+y^2=12 로 x=y=√6 이 되어 둘레 6√6 이 간단히 떨어지는 값. 반지름 r 이면 넓이 최대 r^2, 둘레는 3r√2 이므로 r 을 √2 의 배수로 잡으면 둘레가 유리수가 된다(예: r=2√2 → 넓이 8 · 둘레 12). 그림의 조건(지름 위에 한 변 · 나머지 두 꼭짓점이 호 위)은 고정."
    creative: "(1) 넓이의 최댓값만 묻기(★2~3) (2) 둘레가 최대일 때의 넓이를 묻도록 뒤집으면 코시-슈바르츠 쪽 도구가 필요해짐(201-471 골조 · ★3) (3) 반원을 사분원으로 바꾸면 조건식이 달라져 ★4 (4) 내접 직사각형 대신 내접 삼각형의 넓이로 바꾸기(★3)."
```

```yaml
- id: GN-CM2-201-e21
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    실수 x, y 에 대하여 ⑴ x^2+y^2=4 일 때 4x+3y 의 최댓값 ⑵ 5x+12y=13 일 때 x^2+y^2 의 최솟값.
  category: "코시-슈바르츠 — 제곱의 합과 일차식을 맞바꿔 최대·최소"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코시-슈바르츠의 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ (4^2+3^2)(x^2+y^2) ≥ (4x+3y)^2 에서 100 ≥ (4x+3y)^2, ⑵ 같은 부등식을 반대 방향으로 읽어 x^2+y^2 ≥ 169/169 = 1.
    공식을 어느 쪽에 대응시키는지만 정하면 끝나는 도입 예제라 통찰 0. 실수 범위라 산술기하를 못 쓴다는 점(T-범위)과 등호 조건 x/4=y/3(T-경계)로 Mₜ=2.
    필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(a^2+b^2)(x^2+y^2) ≥ (ax+by)^2 에 계수 맞추기 → 일정한 쪽 대입 → 등호 조건 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/201-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 (4,3,4) 는 √((4^2+3^2)·4) = 10 이 정수가 되게 고른 조합이고 ⑵ 의 (5,12,13) 은 5^2+12^2=169=13^2 이라 최솟값이 정확히 1 이 되는 피타고라스 수 조합이다. 계수를 바꾸려면 (a^2+b^2)·(상수) 가 제곱수(⑴) 이거나 s^2/(a^2+b^2) 이 정수(⑵)가 되도록 (3,4,5) (5,12,13) (8,15,17) 계열에서 고른다."
    creative: "(1) 최댓값이 아니라 최솟값(=-10)을 묻거나 절댓값 범위를 묻기(★2 유지) (2) x, y 에 x>0, y>0 을 추가해 등호점이 범위 안인지 확인하게 하기(★3 · I-VF d2) (3) x^2+y^2=4 를 원으로 읽고 직선 4x+3y=k 가 접할 조건으로 풀게 하기(★3 · I-RT d2 · 원과 직선 단원 결합)."
```

```yaml
- id: GN-CM2-201-470
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 a, b 에 대하여 ⑴ a^2+b^2=10 일 때 2a+4b 의 최댓값 ⑵ 2a+5b=29 일 때 a^2+b^2 의 최솟값.
  category: "코시-슈바르츠 — 제곱의 합과 일차식을 맞바꿔 최대·최소"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코시-슈바르츠의 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e21 과 같은 골조로 ⑴ (2^2+4^2)(a^2+b^2)=200 ≥ (2a+4b)^2, ⑵ 29 ≥ (2^2+5^2)(a^2+b^2) 의 역방향.
    ⑵ 는 2^2+5^2=29 와 우변 상수 29 가 같아 최솟값이 29 로 떨어지는 구조라 계산이 짧다. 통찰 0.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "계수 제곱합을 곱해 코시 적용 → 일정한 쪽 대입 → 최댓값 10√2 / 최솟값 29"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10\sqrt{2}$ ⑵ $29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/201-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 (2^2+4^2)·10 = 200 이 제곱수가 아니라 답이 10√2 인 무리수다 — 정수 답을 원하면 (a^2+b^2) 값과 계수 제곱합의 곱이 제곱수인 조합(예: 계수 (3,4) · a^2+b^2=4 → 10)으로 바꾼다. ⑵ 는 상수 29 가 계수 제곱합 29 와 같아야 답이 29 로 예쁘게 나온다(s^2/(p^2+q^2) 구조)."
    creative: "(1) ⑴ 을 2a+4b=k 의 범위로 바꿔 부등식 형태로 묻기(★2) (2) ⑵ 에서 최솟값일 때의 a, b 를 함께 묻기(등호점 역산 추가 → ★3) (3) 세 문자로 늘려 a^2+b^2+c^2 과 일차식으로 확장(★3)."
```

```yaml
- id: GN-CM2-201-471
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    반지름의 길이가 2 인 원에 내접하는 직사각형의 둘레의 길이의 최댓값.
  category: "코시-슈바르츠의 활용 — 대각선이 지름인 직사각형의 둘레 최대"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내접 직사각형의 대각선이 지름이라는 기하 사실을 x^2+y^2=16 으로 옮기고, 구하는 둘레 2(x+y) 를 (x+y)^2 ≤ 2(x^2+y^2) 로 처리하는 기하→대수 전환(넓이가 아니라 합이라 산술기하가 아니라 코시 쪽)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "코시-슈바르츠의 부등식의 활용(원에 내접하는 직사각형의 둘레)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대각선 = 지름 4 이므로 x^2+y^2=16, (x+y)^2 ≤ 2·16 = 32 에서 x+y ≤ 4√2, 둘레는 8√2.
    200-469 와 도형은 비슷해 보이지만 묻는 양이 넓이(곱)가 아니라 둘레(합)라 도구가 코시로 바뀌는 지점이 값이다(I-RT d2).
    확인체크 출발점 ★2 이나 도형 전환 + 도구 선택으로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "대각선=지름 → x^2+y^2=16 → (x+y)^2 ≤ 2(x^2+y^2)=32 → 둘레 2(x+y) ≤ 8√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-201-471.png"
  latex: latex-bank/gn-cm2/items/201-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 이면 둘레의 최댓값은 4√2 r, 넓이의 최댓값은 2r^2 이다. r=2 는 둘레 8√2 로 떨어진다. 답을 유리수로 만들려면 r 을 √2 의 배수로 잡는다(r=√2 → 둘레 8). 그림의 조건(직사각형의 네 꼭짓점이 원 위 = 대각선이 지름)은 고정이고, 이를 반원으로 바꾸면 조건식이 200-469 꼴로 달라진다."
    creative: "(1) 둘레 대신 넓이의 최댓값을 묻기(산술기하 한 줄 → ★2) (2) 둘레가 최대일 때의 넓이를 묻기(등호점 역산 추가 → ★3) (3) 직사각형을 원에 내접하는 삼각형으로 바꾸기(★4) (4) 원의 방정식을 좌표로 주고 꼭짓점 좌표까지 묻기(★3 · 원의 방정식 단원 결합 · I-XU d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-202-472
  page: 202
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    '자연수 m, n 에 대하여 m^2+n^2 이 홀수이면 mn 은 짝수이다'를 귀류법으로 증명하는 과정의 빈칸 ㈎~㈑ 채우기.
  category: "귀류법 — 결론의 부정으로 가정한 뒤 모순 끌어내기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀류법을 이용한 증명(빈칸 채우기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 에 결론의 부정(mn 이 홀수)을 넣으면 m, n 이 모두 홀수가 되고, 전개식이 2(…) 꼴이라 m^2+n^2 은 짝수 — 가정(홀수)과 모순.
    계산은 이미 제시돼 있어 노동량이 작지만(M_total 5) 귀류법의 「무엇을 부정하는가」를 정확히 읽어야 해 −1 을 적용하지 않고 STEP 1 출발점 ★2 를 유지했다.
    [분류 이슈] v3.8 의 통찰 0 · M_total ≤ 5 규칙대로면 ★1 후보.
  tier: star_2
  mechanism_primary: "결론 부정(mn 홀수) → m, n 모두 홀수 → m^2+n^2=2(…) 짝수 → 가정과 모순"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '㈎ 홀수 ㈏ 홀수 ㈐ 짝수 ㈑ 홀수'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/202-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m=2k-1, n=2l-1 의 표현만 바꿀 수 있다(2k+1 꼴). 전개 결과가 2(2k^2-2k+2l^2-2l+1) 로 짝수여야 하므로 홀짝 구조 자체는 고정이고, 숫자 변형 여지는 사실상 없다."
    creative: "(1) 빈칸을 없애고 전체 증명을 서술하게 하면 ★3(202-476 수준) (2) 명제를 'mn 이 홀수이면 m^2+n^2 은 짝수'로 바꿔 대우 증명으로 유도(★2) (3) 「√2 가 무리수」처럼 전형적인 귀류법 명제로 교체(★3) (4) 빈칸 중 하나를 오답으로 채워 두고 어디가 틀렸는지 찾게 하기(★3 · I-VF d2)."
```

```yaml
- id: GN-CM2-202-473
  page: 202
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    실수 a, b, c 에 대한 보기 ㄱ. √a-√b > √(a-b) (a>b>0) ㄴ. a^3+b^3+c^3 ≥ 3abc (양수) ㄷ. |a|+|b| ≥ |a-b| 중 옳은 것 고르기.
  category: "절대부등식 참·거짓 판정 — 보기마다 다른 도구(제곱의 차 · 인수분해 · 절댓값)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 을 a^3+b^3+c^3-3abc = (a+b+c)·½{(a-b)^2+(b-c)^2+(c-a)^2} 로 분해해 부호를 읽는 동치 변환 — 공식을 알아보지 못하면 판정 자체가 불가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절대부등식의 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 양변을 제곱해 비교하면 부등호 방향이 반대임이 드러나고(거짓), ㄴ 은 세제곱 합 인수분해, ㄷ 은 e16 ⑵ 의 변형.
    보기 세 개가 서로 다른 도구를 요구해 Mₛ=3 이고, ㄴ 의 분해가 진입 장벽(I-EQV d2).
    STEP 1 출발점 ★2 에서 통찰 1개(d2) + M_total 9 로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "보기별로 ㄱ 제곱해 비교(거짓) · ㄴ 세제곱 합 인수분해(참) · ㄷ 제곱의 차(참)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/202-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기에 수치가 없다. ㄱ 의 반례를 요구하는 형태로 바꾸면 a=4, b=1 처럼 a-b 가 제곱수인 값을 고르면 계산이 정수로 끝난다."
    creative: "(1) 옳은 것의 개수만 묻기(★2) (2) 거짓 보기의 반례를 쓰게 하기(★3 · I-VF d2) (3) 보기를 모두 참으로 만들고 등호 조건을 묻게 하기(★3) (4) ㄴ 을 a+b+c 의 부호 조건 없이 제시해 양수 조건이 왜 필요한지 따지게 하기(★4 · I-MI d2)."
```

```yaml
- id: GN-CM2-202-474
  page: 202
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    양수 x, y 가 2x+5y=10 일 때 xy 의 최댓값 a 와 그때의 x, y 를 b, c 라 할 때 a+b+c 의 값.
  category: "합이 일정할 때 곱의 최대 → 등호 성립점 역산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계 - 합이 일정할 때(등호 성립점 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    10 = 2x+5y ≥ 2√(10xy) 에서 xy ≤ 5/2, 등호는 2x=5y=5 즉 x=5/2, y=1.
    198-463 의 쌍둥이(합·곱만 뒤바뀜)이고 통찰 없음. 등호점을 되찾아 세 값을 더하는 단계로 Mₖ=2.
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "2x+5y=10 ≥ 2√(10xy) → xy ≤ 5/2 → 등호 2x=5y=5 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/202-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "px+qy=s 에서 최댓값은 s^2/(4pq), 등호점은 x=s/(2p), y=s/(2q). (2,5,10) 은 세 값이 모두 유한소수라 합이 정확히 6 으로 떨어진다. s 가 2p, 2q 의 배수가 아니면 b, c 가 분수가 되어 a+b+c 형태가 지저분해진다."
    creative: "(1) a+b+c 대신 a·b·c 를 묻기(★2 유지) (2) x, y 를 자연수로 제한하면 산술기하 등호점이 정수가 아니라 후보를 일일이 검증해야 함(★4 · I-VF d2) (3) 조건을 2x+5y ≥ 10 으로 바꾸기(★3) (4) xy 의 최댓값을 주고 계수를 역으로 묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-202-475
  page: 202
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    ∠C=90° 인 직각삼각형 ABC 의 넓이가 16 일 때 AB^2 의 최솟값(5지선다).
  category: "도형 활용 — 넓이로 곱을 고정하고 제곱의 합의 최소"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직각변을 a, b 로 두어 넓이 조건을 ab=32 로, 구하는 AB^2 을 피타고라스로 a^2+b^2 으로 바꾸는 기하→대수 전환(전환만 되면 나머지는 공식 한 줄)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산술평균과 기하평균의 관계의 활용(직각삼각형의 빗변)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ab/2 = 16 → ab = 32, AB^2 = a^2+b^2 ≥ 2ab = 64.
    전환이 얕고(I-RT d1) 그 뒤가 한 줄이라 기출 태그(+0~1)를 올리지 않고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "넓이 → ab=32 → AB^2 = a^2+b^2 ≥ 2ab = 64 (등호 a=b)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/202-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 S 면 AB^2 의 최솟값은 4S 이므로 S 를 어떤 값으로 바꿔도 답은 정수다. 다만 등호점 a=b=√(2S) 가 정수가 되려면 2S 가 제곱수여야 하므로 '그때의 변의 길이'를 함께 물으려면 S=2, 8, 18 처럼 고른다. 선택지는 4S 주변 값으로 다시 짜야 한다."
    creative: "(1) AB 의 최솟값(=8)으로 바꾸면 근호 처리 한 겹 추가(★2) (2) 넓이 대신 둘레를 고정하고 AB^2 의 최소를 묻기(★4 · 조건이 합으로 바뀌어 코시 필요) (3) 직각이 아닌 ∠C=60° 로 바꾸면 코사인법칙이 끼어들어 ★4(I-XU d2) (4) 빗변을 고정하고 넓이의 최대를 묻는 역방향(200-e20 골조 · ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-202-476
  page: 202
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    '세 자연수 a, b, c 에 대하여 a^2+b^2=c^2 이면 a, b, c 중 적어도 하나는 짝수이다'를 대우를 이용하여 증명.
  category: "대우 증명 — 「적어도 하나는 짝수」의 부정을 「모두 홀수」로"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「적어도 하나는 짝수」의 부정을 「셋 모두 홀수」로 정확히 옮기는 동치 변환(부정을 「모두 짝수가 아니다」로 잘못 읽으면 증명이 성립하지 않음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대우를 이용한 증명(홀짝 판별)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대우는 '셋 모두 홀수이면 a^2+b^2 ≠ c^2', 홀수의 제곱은 홀수라 a^2+b^2 은 짝수이고 c^2 은 홀수이므로 같을 수 없다.
    도구(대우)는 문제가 지정했지만 부정문을 정확히 만드는 것이 이 문항의 채점 포인트라 I-EQV d1 로 셌다.
    서술형 증명이고 M_total 7 이라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "대우로 전환(모두 홀수) → 홀수^2=홀수 → 좌변 짝수 · 우변 홀수 → 모순 없이 ≠ 결론"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 (대우 ‘세 자연수 $a$, $b$, $c$에 대하여 $a$, $b$, $c$가 모두 홀수이면 $a^2+b^2\ne c^2$이다.’에서 $a$, $b$, $c$가 모두 홀수이면 $a^2+b^2$은 짝수, $c^2$은 홀수이므로 $a^2+b^2\ne c^2$이다. 대우가 참이므로 주어진 명제도 참이다.)'
  answer_source: "계산(답지 「풀이 99쪽」)"
  figure: none
  latex: latex-bank/gn-cm2/items/202-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀수를 2k-1 로 두는 표현만 바뀔 수 있고 명제의 홀짝 구조는 고정이다. a^2+b^2=c^2 을 a^2+b^2=c^3 등으로 바꾸면 홀짝 논증이 그대로 통하지 않으므로 검토가 필요하다."
    creative: "(1) 귀류법으로 증명하게 하면 202-472 와 같은 골조(★2~3) (2) '적어도 하나는 3의 배수'로 바꾸면 나머지 분류가 3가지로 늘어 ★4(I-MI d2) (3) 결론을 'a, b 중 적어도 하나는 짝수'로 좁혀 c 의 홀짝까지 따지게 하기(★4) (4) 빈칸형으로 낮추면 ★2(202-472 수준)."
```

```yaml
- id: GN-CM2-203-477
  page: 203
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x>0, y>0 이고 3x+2y=16 일 때 √(3x) + √(2y) 의 최댓값.
  category: "근호 합의 최대 — 제곱해서 코시(또는 산술기하)로"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근호의 합은 직접 다룰 수 없으므로 제곱해 (√(3x)+√(2y))^2 = 16 + 2√(3x·2y) 로 옮기고(또는 코시로 ≤ 2(3x+2y)) 남은 곱 항에 산술기하를 쓰는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근호 합의 최댓값(제곱해서 코시-슈바르츠)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (√(3x)+√(2y))^2 ≤ 2(3x+2y) = 32 이므로 최댓값 4√2(등호 3x=2y=8).
    3x, 2y 를 한 덩어리로 보는 눈이 없으면 두 변수 무리식에 묶여 진행이 막힌다(I-EQV d2).
    STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "3x, 2y 를 덩어리로 → 양변 제곱 → (√(3x)+√(2y))^2 ≤ 2(3x+2y)=32 → 4√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/203-477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 16 은 2·16=32 라 최댓값 4√2 가 간단해지는 값. 조건 합이 s 면 최댓값은 √(2s) 이므로 s 를 2의 홀수배 제곱(s=8 → 4, s=18 → 6)으로 잡으면 답이 정수가 된다. 계수 (3,2) 는 √(3x), √(2y) 와 짝이 맞아야 하므로 조건식과 구하는 식을 함께 바꿔야 한다."
    creative: "(1) 계수를 어긋나게(조건 3x+2y=16, 구하는 식 √x+√y) 두면 코시의 계수 배분을 스스로 정해야 해 ★4(I-SC d2) (2) 최댓값 대신 최솟값을 묻게 하면 경계에서만 나오므로 정의역 검토가 필요(★4 · I-VF d2) (3) 세 항 √(3x)+√(2y)+√z 로 확장(★4)."
```

```yaml
- id: GN-CM2-203-478
  page: 203
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    a>0, b>0, c>0 일 때 (1 + 2b/a)(1 + c/b)(1 + a/2c) 의 최솟값.
  category: "세 인수의 곱 — 각 인수에 산술기하를 쓰고 근호 안이 1 이 되는 구조"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전개하지 않고 각 인수에 1+t ≥ 2√t 를 적용한 뒤 세 근호의 곱 (2b/a)(c/b)(a/2c) = 1 임을 보아 8 을 얻는 변환 — 곱이 1 이 되도록 계수 2 가 배치돼 있음을 알아보는 것이 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 인수의 곱의 최솟값(각 인수에 산술기하)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 인수를 전개하면 여덟 항이 되어 통제가 안 되고, 각 인수에 산술기하를 따로 적용하면 2^3·√1 = 8 로 끝난다.
    세 등호(a=2b, b=c, a=2c)가 동시에 성립 가능한지 확인하는 마무리가 붙지만 기각되는 분기가 없어 I-VF 로는 세지 않았다.
    STEP 2 출발점 ★3 유지. [분류 이슈] 등호 동시 성립 확인을 통찰로 더 세면 ★4 후보.
  tier: star_3
  mechanism_primary: "각 인수에 1+t ≥ 2√t → 곱 ≥ 8√((2b/a)(c/b)(a/2c)) = 8 (등호 a=2b=2c)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/203-478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 1/2 는 세 분수의 곱이 정확히 1 이 되도록 짝지은 값이다. (1+pb/a)(1+qc/b)(1+ra/c) 에서 pqr = 1 이어야 최솟값 8 이 되고, pqr ≠ 1 이면 최솟값이 8√(pqr) 로 바뀌므로 pqr 를 제곱수로 잡아야 답이 유리수."
    creative: "(1) 인수를 둘로 줄이면 199-e18 골조(★2) (2) pqr ≠ 1 로 어긋나게 해 최솟값을 다시 계산하게 하기(★4) (3) 최솟값일 때의 a : b : c 를 묻기(등호 조건 연립 추가 → ★4) (4) (1+a/b)(1+b/c)(1+c/a) ≥ 8 을 증명하게 하는 서술형(★3)."
```

```yaml
- id: GN-CM2-203-479
  page: 203
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 x^2-2x+a=0 이 허근을 가질 때 a + 4/(a-1) 의 최솟값 m 과 그때의 a 의 값 n 에 대하여 m+n 의 값.
  category: "판별식으로 범위를 먼저 정한 뒤 식을 변형해 산술기하"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식 판별식(D/4 = 1-a < 0)으로 a>1 을 먼저 얻어야 a-1>0 이 보장되고 산술기하를 쓸 수 있다 — 방정식 단원과 절대부등식 단원의 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "판별식으로 범위를 정한 뒤 식을 변형하는 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a>1 을 얻은 뒤 a + 4/(a-1) = (a-1) + 4/(a-1) + 1 ≥ 4+1 = 5, 등호는 a-1=2 즉 a=3.
    범위를 먼저 확보하지 않으면 산술기하의 양수 조건이 깨지므로 두 단원 결합이 실제로 풀이를 지탱한다(I-XU d2).
    STEP 2 출발점 ★3 유지(통찰 1개 d2 · M_total 8).
  tier: star_3
  mechanism_primary: "D/4 = 1-a < 0 → a>1 → (a-1) + 4/(a-1) + 1 ≥ 5 (등호 a=3) → m+n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/203-479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2-2x+a 의 1 과 분수식의 4 는 판별식 경계 a>1 과 쪼개는 지점 a-1 이 일치하도록 맞춰져 있다 — 이 일치가 깨지면(예: 분모가 a-3) 등호점이 범위 밖으로 나가 산술기하가 통하지 않는다. 분자 4 는 2√4=4 가 정수가 되게 하는 값이므로 제곱수로 유지한다."
    creative: "(1) 허근 대신 서로 다른 두 실근으로 바꾸면 범위가 a<1 이 되어 a-1<0, 부호가 뒤집혀 최댓값 문제가 됨(★4 · I-EQV d2) (2) 분모를 a-3 으로 바꿔 등호점이 범위 밖에 놓이게 하면 단조성 판단 필요(★4 · I-VF d2) (3) 판별식 조건을 '중근'으로 바꿔 a 가 한 값으로 고정되게 하면 ★1 수준으로 떨어짐."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-203-480
  page: 203
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    a>0, b>0 일 때 (4 - 9b/a)(1 - a/b) ≤ m 이 항상 성립하도록 하는 실수 m 의 값의 범위.
  category: "항상 성립 조건 — 좌변의 최댓값을 구해 m 과 비교"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'항상 성립'을 '좌변의 최댓값 ≤ m' 으로 뒤집어 읽는 역방향 사고 — m 을 직접 구하는 길이 없고 좌변의 최댓값을 먼저 확보해야 한다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전개하면 13 - (4a/b + 9b/a) 이고 괄호 앞의 음부호 때문에 산술기하로 얻은 '최솟값 12'가 전체 식의 '최댓값 1'로 뒤집히는 부호 변환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "항상 성립하는 부등식 - 좌변 최댓값 비교(부호가 뒤집힌 산술기하)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전개 → 13 - (4a/b + 9b/a), 4a/b + 9b/a ≥ 2√36 = 12 이므로 좌변 ≤ 1, 따라서 m ≥ 1.
    부등식의 방향(최솟값 → 최댓값)이 한 번 뒤집히고, 구하는 것이 값이 아니라 m 의 범위라 역방향 읽기가 필요하다(I-BW d2 + I-EQV d2).
    실력 UP 출발점 ★4 유지. 통찰 2개지만 SC/VF/SYM/XU 가 없어 ★5 조건은 아니다.
  tier: star_4
  mechanism_primary: "항상 성립 → 좌변 최댓값 ≤ m → 전개 13-(4a/b+9b/a) → 괄호 ≥ 12 → 최댓값 1 → m ≥ 1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$m\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/203-480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4 와 9 는 교차항의 곱 4·9=36 이 제곱수가 되도록 고른 값이고, 상수부 4+9=13 에서 12 를 빼 최댓값 1 이 나온다. (p - qb/a)(1 - a/b) 꼴에서 최댓값은 p+q-2√(pq) = (√p-√q)^2 이므로 p, q 를 모두 제곱수로 잡으면 답이 정수다."
    creative: "(1) 부등호를 ≥ 로 뒤집으면 좌변의 최솟값이 없어(음의 무한대) 답이 존재하지 않음을 밝히게 하는 서술형(★5 후보 · I-VF d3) (2) m 의 최솟값만 묻기(★3) (3) a, b 에 a+b=1 을 추가해 조건을 한 겹 얹기(★5 · I-CON d2) (4) 계수를 문자 p, q 로 두고 최댓값을 p, q 로 표현하게 하기(★4 · Mₐ 상승)."
```

```yaml
- id: GN-CM2-203-481
  page: 203
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    두 양수 a, b 에 대하여 점 P(a, b) 를 지나고 직선 OP 에 수직인 직선이 y축과 만나는 점을 Q, R(-1/a, 0) 일 때 삼각형 OQR 의 넓이의 최솟값(5지선다 · O 는 원점).
  category: "좌표평면 도형 — 수직 조건으로 Q 를 구하고 넓이식에 산술기하"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직 조건(기울기 곱 = -1)으로 직선의 방정식을 세우고 y절편을 구해 Q(0, (a^2+b^2)/b) 를 얻는 기하→대수 전환 — 그림 없이 좌표만으로 도형을 재구성해야 한다"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q 의 y좌표와 밑변 OR = 1/a 를 하나의 넓이식 (a^2+b^2)/(2ab) 으로 결합해 두 변수 문제를 산술기하 한 번으로 끝내는 조건 통합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "좌표평면 도형의 넓이 최솟값(수직 조건 + 산술기하)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OP 의 기울기 b/a 에 수직인 직선의 y절편은 (a^2+b^2)/b 이고, 넓이는 ½·(1/a)·(a^2+b^2)/b = (a^2+b^2)/(2ab) ≥ 2ab/(2ab) = 1.
    좌표 설정 → 수직 직선 → y절편 → 넓이식 → 산술기하로 단계가 다섯이라 Mₛ=3 이고, 마지막 분수식이 정확히 산술기하 꼴로 정리되는 것을 보는 눈이 필요하다.
    실력 UP 출발점 ★4 유지(기출 태그 +0, 통찰 2개지만 SC/VF/SYM/XU 부재로 ★5 아님).
  tier: star_4
  mechanism_primary: "수직 직선의 y절편 → Q(0, (a^2+b^2)/b) → 넓이 (a^2+b^2)/(2ab) → a^2+b^2 ≥ 2ab → 최솟값 1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/203-481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "R 의 x좌표 -1/a 는 밑변 1/a 가 넓이식의 분모 a 를 만들어 (a^2+b^2)/(2ab) 라는 대칭식이 되게 하는 장치다. R 을 (-k/a, 0) 으로 바꾸면 최솟값이 k 가 되므로 선택지만 다시 맞추면 되고, R=(-1, 0) 처럼 a 를 없애면 식이 비대칭이 되어 산술기하가 한 번에 통하지 않는다."
    creative: "(1) 넓이의 최솟값일 때의 b/a 값을 묻기(등호 조건 a=b 확인 → ★4 유지) (2) Q 대신 x축과의 교점을 쓰게 하면 식이 (a^2+b^2)/a^2 꼴로 바뀌어 최솟값이 존재하지 않음을 밝혀야 함(★5 · I-VF d2) (3) P 를 포물선 위의 점으로 제한해 b=a^2 을 대입하게 하기(★5 · I-XU d2) (4) 삼각형 OPQ 의 넓이로 바꾸기(★4)."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 0 · ★2 14 · ★3 11 · ★4 2 · ★5 0
- 통찰형 14 · 절차형 13 · premium 0 (통찰 유형 분포: I-EQV 7 · I-RT 5 · I-XU 1 · I-BW 1 · I-CON 1 — depth 3 은 없고 d2 가 13, d1 이 3)
- M_total 분포: 5 → 1문 · 6 → 5문 · 7 → 13문 · 8 → 6문 · 9 → 2문
- 구역별: 「필수·발전 예제」 17문(필수 예제 5: 전부 ★2 · 발전 예제 1: ★3 · 확인체크 11: ★2 6 · ★3 5) · 「연습문제 STEP 1」 4문(★2 3 · ★3 1) · 「연습문제 STEP 2」 4문(전부 ★3) · 「연습문제 실력 UP」 2문(전부 ★4)
- type_hint 상위: 「산술기하의 도형 활용」 5(200-e20 · 200-468 · 200-469 · 202-475 · 203-481) · 「산술기하 기본형(합·곱·제곱합이 일정)」 4(198-e17 · 198-463 · 198-464 · 202-474) · 「산술기하 식의 전개·변형」 4(199-e18 · 199-466 · 199-e19 · 199-467) · 「코시-슈바르츠」 4(201-e21 · 201-470 · 201-471 · 203-477) · 「절대부등식의 증명」 4(197-e16 · 197-461 · 197-462 · 202-473) · 그 밖에 「명제 증명법(귀류법·대우)」 2 · 「조건을 곱해 전개」 1 · 「세 인수의 곱」 1 · 「판별식 + 변형」 1 · 「항상 성립 조건」 1
- 그림: 4문(`crop:fig-200-e20.png` · `crop:fig-200-468.png` · `crop:fig-200-469.png` · `crop:fig-201-471.png`) · 선택지 문항 2문(202-475 · 203-481) · 소문항(⑴⑵) 5문(197-e16 · 197-461 · 198-e17 · 201-e21 · 201-470) · 증명 서술형 4문(197-e16 · 197-461 · 197-462 · 202-476)
- 대상층: 하위권 0 · 중하위권 13 · 중위권 11 · 중상위권 3 · 상위권 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-202-472 | 빈칸형이라 통찰 0 · M_total 5 → v3.8 −1 규칙대로면 ★1. 귀류법에서 무엇을 부정하는지 읽어야 하는 점과 STEP 1 구역 신호를 근거로 ★2 를 유지함 | ★1 / ★2 |
| GN-CM2-198-465 | 확인체크(★2 출발)이나 「조건식을 곱해 전개」 도구가 다음 쪽 예제(199-e18)에서야 소개된다. 스스로 찾아야 하는 변형으로 보아 I-EQV d2 로 세고 ★3 으로 올렸음 — 표준 유제로 보면 ★2 | ★2 / ★3 |
| GN-CM2-202-476 | 문제가 「대우를 이용하여」라고 도구를 지정하므로 절차형으로 볼 여지가 있다. 「적어도 하나는 짝수」의 부정을 정확히 만드는 것을 I-EQV d1 로 세어 통찰형으로 두었음 | ★2 / ★3 |
| GN-CM2-203-478 | 세 인수의 등호(a=2b · b=c · a=2c)가 동시에 성립하는지 확인하는 마무리를 통찰로 더 세면 통찰 2개가 되어 ★4. 기각되는 분기가 없어 I-VF 로 세지 않고 ★3 으로 둠 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「산술기하의 도형 활용」 5문(200-e20 · 200-468 · 200-469 · 202-475 · 203-481)은 고정되는 양이 **합**(칸막이 울타리)이냐 **제곱의 합**(피타고라스·원)이냐 **곱**(넓이)이냐에 따라 골조가 갈리고 base ★ 도 3 → 4 로 벌어진다. **「합이 일정한 울타리형」 · 「제곱의 합이 일정한 직각·원형」 · 「좌표평면 도형형」 세 하위 유형**으로 세우는 편이 낫다. ⑵ 「항상 성립하는 부등식의 계수 범위」(203-480)는 이 단원에서 유일하게 부등식의 방향이 뒤집히는 골조라 별도 유형이 필요하다(변형 원본으로도 값이 크다). ⑶ 「판별식으로 범위를 얻은 뒤 변형」(203-479)은 이차방정식 단원과의 교차 유형으로 두고 양쪽에서 참조한다.
- **통합해도 될 유형**: 198-e17 · 198-463 · 198-464 · 202-474 의 「합/곱/제곱의 합이 일정할 때」는 **일정한 양이 무엇인가를 파라미터로 갖는 base ★2 단일 유형**으로 묶을 수 있다. 199-e18 · 199-466(전개)과 199-e19 · 199-467(변형)도 「구하는 식을 곱이 일정한 두 항으로 만드는 방법」 하나로 묶고 전개/쪼개기를 하위 파라미터로 두면 된다. 201-e21 · 201-470 의 코시 기본형 두 문항은 소문항 구성까지 같아 완전히 같은 유형이다.
- **이 단원의 base ★ 상한**: 27문 전수에서 ★5 가 없고 ★4 는 실력 UP 2문뿐이다. v3.8 §2.13 기준으로 ★5 슬롯에 필요한 SC/VF/SYM/XU 통찰이 이 범위에는 I-XU 1문(203-479)밖에 없으므로, ★5 는 이 단원 유형만으로 채울 수 없고 203-480(부호 뒤집힘 + 조건 추가)이나 203-481(좌표 도형 + 곡선 위의 점 제한) 계열을 창의 변형해 I-VF·I-SC 를 얹어야 만들어진다.
- **명제 증명법 2문(202-472 · 202-476)**: 절대부등식 유형이 아니라 앞 단원(명제)의 증명법이 연습문제에 섞여 들어온 것이다. 카탈로그에서는 **명제 단원의 「귀류법」·「대우 증명」 유형으로 이관**하고, 이 단원에는 교차 참조만 남긴다.
