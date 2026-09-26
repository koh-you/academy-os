---
name: mechanism-데이터-GN-ALG-01
description: 개념원리 대수 01 거듭제곱과 거듭제곱근(1/1 · 13~16쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-alg
  section: 01 거듭제곱과 거듭제곱근
  unit_code: ALG-01
  part: "1/1"
  extract_range: "13~16쪽 · 13-1~16-8"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json) · 이 범위에는 그림 문항 없음
---

# 개념원리 대수 · 01 거듭제곱과 거듭제곱근 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 01단원 13~16쪽의 12문항 전수를 다룬다. 구역은 「개념원리 익히기」(13-1~13-3 · 통번호 개념 확인) 와 「필수·발전 예제」(14-e1~16-8 · 상자 예제 `쪽-eN` 과 그 아래 붙는 「확인체크」 유제) 둘이다. 이 범위에는 연습문제 STEP·실력 UP 구역과 기출 태그, 그림 문항이 없다.

벤더 난이도 신호는 구역과 예제 태그로만 온다. 「개념원리 익히기」는 ★1 출발, 「필수」 예제는 ★2 출발로 둔다. **「확인체크」 문항의 출발점 방침**: 이 구역의 확인체크는 독립 개념 확인 문제가 아니라 바로 앞 필수 예제의 유제(같은 유형·같은 골조)이므로, 확인체크 일반 신호(★1)가 아니라 **직전 예제의 ★ 를 출발점**으로 삼았다. 이 때문에 벤더 신호와 2단 이상 벌어지는 문항(15-6)은 라벨을 억지로 맞추지 않고 파일 끝 「분류 이슈 목록」에 기록했다.

단원 내용은 n제곱근의 정의·실수인 n제곱근의 개수, 거듭제곱근의 사칙연산과 근호 중첩(유리수 지수), 거듭제곱근의 대소 비교 세 갈래로 거의 전부 덮인다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-13-1
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ $-64$ 의 세제곱근과 $81$ 의 네제곱근을 복소수 범위에서 모두 구하기.
  category: 'x^n=a 를 인수분해 → 실근과 허근을 복소수 범위에서 전부'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'n제곱근을 복소수 범위에서 모두 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³+64=(x+4)(x²−4x+16), x⁴−81=(x²−9)(x²+9) 로 인수분해해 근을 전부 쓰면 끝난다.
    「세제곱근」이 복소수 범위에서 3개·「네제곱근」이 4개라는 정의 확인이 전부이고 허근은 근의 공식으로 바로 나온다.
    통찰 없음 · 개념원리 익히기 ★1 출발 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: 'x^3=-64 · x^4=81 을 인수분해 → 이차인수의 근까지 포함해 복소수 범위 n제곱근 전부 나열'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-4$, $2+2\sqrt{3}i$, $2-2\sqrt{3}i$ ⑵ $-3i$, $3i$, $-3$, $3$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/13-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑을 다른 완전거듭제곱수(±8, ±125, 16, 625)로 바꿀 수 있음. 제약: 허근을 근호 없이 쓰려면 밑이 완전거듭제곱이어야 하고, n 의 홀짝과 밑의 부호에 따라 실근이 1개·2개·0개로 갈리므로 답 형태를 확인할 것.'
    creative: '(1) 「실수인 것만」으로 한정하면 정의 확인 한 단계 ★1 (2) 구한 n제곱근의 합·곱을 묻기(근과 계수의 관계 결합 ★2) (3) 「a 의 n제곱근」과 「n제곱근 a」 표기를 섞어 묻기(T-표기 추가 ★2).'
```

```yaml
- id: GN-ALG-13-2
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $\sqrt[5]{32}$ · $\sqrt[10]{(-3)^{10}}$ · $-\sqrt[6]{(-3/2)^{6}}$ 처럼 수의 거듭제곱근 값을 구하기.
    짝수 차수·음수 밑과 근호 앞 부호가 섞여 있다.
  category: '밑을 거듭제곱 꼴로 → 차수와 지수 약분 → n 의 홀짝으로 부호 결정'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근의 값 구하기(짝수 차수는 절댓값 처리)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항은 밑을 거듭제곱 꼴로 고쳐 근호 차수와 지수를 약분하면 한 줄로 끝난다.
    핵심은 ⑵·⑹ 처럼 n 이 짝수일 때 n제곱근 안의 값이 절댓값으로 나오고, 근호 앞 − 는 근호 밖 부호라는 구별(T-부호·T-표기 2개).
    통찰 없음 · M_total 5 · 개념원리 익히기 ★1 출발 → ★1.
  tier: star_1
  mechanism_primary: '밑을 거듭제곱 꼴로 정리 → 근호 차수와 지수 약분 → n 홀짝으로 절댓값·부호 결정'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $3$ ⑶ $-3$ ⑷ $-4$ ⑸ $-0.2$ ⑹ $-\dfrac{3}{2}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/13-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 차수(5제곱근 32 → 7제곱근 128 · 10제곱근 (−3)^10 → 8제곱근 (−2)^8)를 바꿀 수 있음. 제약: 밑이 완전거듭제곱이어야 유리수 답이 나오고, 짝수 차수에 음수 밑을 넣을 때만 절댓값 함정이 살아난다.'
    creative: '(1) 근호 앞 부호와 근호 안 부호를 섞어 「값이 같은 것끼리 짝짓기」로 바꾸면 ★2 (2) n 의 홀짝으로 경우를 나눠 쓰게 하는 서술형이면 ★2 · I-MI d1 (3) 밑을 문자 a 로 두고 부호를 미지로 하면 케이스 분기가 생겨 ★3.'
```

```yaml
- id: GN-ALG-13-3
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑽ 거듭제곱근의 곱·나눗셈·거듭제곱과 $\sqrt[3]{\sqrt{27}}$ 같은 근호 중첩을 지수법칙으로 간단히 하기.
  category: '근호 → 유리수 지수 → 지수법칙 → 다시 근호'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근의 사칙연산과 근호 중첩(지수법칙)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모두 n제곱근을 1/n 제곱으로 바꿔 지수를 더하고 빼면 끝나는 표준 절차다. 소문항 10개로 계산량은 많지만 착안은 한 가지뿐이라 통찰 0 · M_total 6.
    개념원리 익히기 ★1 출발 유지.
    [분류 이슈] 소문항 수만 보면 체감 ★2 이나, v3.8 은 계산 마찰을 ★ 상승 신호로 보지 않으므로 ★1 로 둠.
  tier: star_1
  mechanism_primary: '근호를 유리수 지수로 → 지수의 가감·곱으로 통일 → 결과를 다시 근호로 환원'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $4$ ⑶ $\dfrac{1}{2}$ ⑷ $\dfrac{\sqrt{3}}{3}$ ⑸ $5$ ⑹ $9$ ⑺ $\sqrt{3}$ ⑻ $\sqrt[3]{2}$ ⑼ $3$ ⑽ $2$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/13-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5)과 근호 차수를 바꿀 수 있음. 제약: 지수를 통분한 결과가 정수이거나 약분되는 조합이어야 답이 유리수 또는 간단한 근호로 떨어진다.'
    creative: '(1) 중첩 근호를 3중으로 늘리면 Mₛ 상승 ★2 (2) 밑이 다른 두 수를 섞어 소인수분해를 먼저 하게 하면 ★2 (3) 값이 같은 것끼리 분류하게 하면 비교 판단이 붙어 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-14-e1
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    보기 ㄱ~ㄹ 중 거듭제곱근에 대한 설명으로 옳은 것만 모두 고르기.
  category: 'n 의 홀짝 × 밑의 부호별 실수인 n제곱근 개수 → 보기 참·거짓 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '보기마다 차수의 홀짝과 밑의 부호가 달라 네 경우를 모두 따져야 참·거짓이 갈림'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '실수인 n제곱근의 개수 판별(보기 참·거짓)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 「64 의 세제곱근」이 복소수 범위에서 3개라서 거짓, ㄴ·ㄹ 은 「n 짝수·밑 음수면 실수 없음 / n 홀수면 실수 1개」 표에서 참, ㄷ 은 (−6)³=−216 직접 확인.
    보기마다 해당하는 경우가 달라 네 경우를 모두 따져야 하는 MI d1 하나.
    필수 예제 ★2 출발 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'n 홀짝 × 밑 부호 네 경우의 실수인 n제곱근 개수 표 → 보기별 대입 → 참·거짓'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ, ㄹ"
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/14-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 밑(64·−81·−216·−5)과 차수(3·4)를 바꿀 수 있음. 제약: 네 경우(n 홀짝 × 밑 부호)가 보기 전체에 고루 들어가야 의도가 유지되고, ㄷ 처럼 직접 검증하는 보기는 밑이 완전거듭제곱이어야 한다.'
    creative: '(1) 옳은 것의 개수를 묻는 5지선다로 바꾸면 ★2 유지 (2) 「a 의 n제곱근」과 「n제곱근 a」 표기를 섞으면 T-표기가 붙어 ★2~3 (3) 실수인 n제곱근의 개수를 n 에 대한 식으로 일반화해 쓰게 하면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-14-4
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    거듭제곱근의 정의·표기에 대한 다섯 선택지 중 옳은 것 하나 고르기. 5지선다.
  category: '선택지별 n제곱근 정의·표기 확인 → 거짓 넷 제거'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '선택지마다 차수의 홀짝·밑의 부호·표기(근호 기호인가 「a 의 n제곱근」인가)가 달라 다섯 경우를 각각 판정해야 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '실수인 n제곱근의 개수·표기 판별(5지선다)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 은 $-4$ 의 제곱근이 $\pm 2i$ 라 거짓, ② 는 「네제곱근 $16$」이 근호 기호 값 $2$ 라 거짓, ③ 은 $27$ 의 세제곱근이 3개라 거짓, ⑤ 는 음수의 네제곱근에 실수가 없어 거짓, ④ 가 참.
    직전 필수 예제 14-e1 과 같은 골조의 유제라 예제 ★2 를 출발점으로 둠.
    [분류 이슈] 선택지 참·거짓 판정형을 I-MI 로 셀지 절차형으로 볼지 경계 — 케이스 표를 학생이 스스로 떠올려야 하므로 이 파일에서는 MI d1 로 통일.
  tier: star_2
  mechanism_primary: '선택지별로 n제곱근 정의·표기 규칙 적용 → 거짓 네 개 제거 → 참 하나'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "④"
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/14-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 선택지의 밑(−4·16·27·9·−16)과 차수를 바꿀 수 있음. 제약: 참인 선택지가 정확히 하나여야 하고, 「네제곱근 a」와 「a 의 네제곱근」 표기 대비는 한 선택지에 남겨 둘 것.'
    creative: '(1) 옳지 않은 것 고르기로 뒤집으면 ★2 유지 (2) 다섯 선택지를 보기 ㄱㄴㄷ 로 묶으면 14-e1 과 동형 (3) 밑에 문자와 부호 조건을 넣으면 케이스 분기가 커져 ★3.'
```

```yaml
- id: GN-ALG-14-5
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-10$ 과 $10$ 의 네제곱근·세제곱근 중 실수인 것의 개수를 각각 $a$, $b$, $c$, $d$ 라 할 때 $ab-cd$ 의 값.
  category: '네 경우의 실수인 n제곱근 개수 → 곱과 차 계산'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '실수인 n제곱근의 개수를 세어 식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    음수의 짝수제곱근은 실수가 없어 $a=0$, 음수의 홀수제곱근은 1개라 $b=1$, 양수의 짝수제곱근은 2개라 $c=2$, $d=1$ 을 표에서 읽고 $ab-cd$ 에 대입하면 끝.
    문제가 네 경우를 이미 나눠 제시해 학생이 분기를 스스로 찾지 않으므로 MI 는 세지 않고 절차형으로 둠(14-e1 과의 구별점).
    확인체크(직전 예제 유제) ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑의 부호 × 차수의 홀짝 → 실수인 n제곱근 개수 a·b·c·d → ab−cd 에 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/14-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(±10)과 차수(3·4)를 바꿀 수 있음. 제약: 음수의 짝수제곱근이 0 개가 되는 자리를 남겨야 곱에서 0 이 나오는 의도가 살고, 최종 식이 정수로 떨어지도록 조합할 것.'
    creative: '(1) $ab+cd$ · $a+b+c+d$ 처럼 결합 식만 바꾸면 ★2 유지 (2) 개수를 n 에 대한 식으로 일반화(짝수 n·홀수 n)하면 Mₐ 상승 ★3 (3) 밑에 0 을 포함시키면 0 의 n제곱근 예외가 붙어 ★3.'
```

```yaml
- id: GN-ALG-15-e2
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 수의 거듭제곱근 계산. 세제곱 차 인수분해 꼴 $(\sqrt[3]{3}-1)(\sqrt[3]{9}+\sqrt[3]{3}+1)$ 과
    밑을 통일해야 하는 $\sqrt{\dfrac{8^{10}+4^{10}}{8^{4}+4^{11}}}$ 이 섞여 있다.
  category: '밑 통일·지수법칙 / 세제곱 합·차 인수분해 → 약분'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑵ 의 분자를 $(\sqrt[3]{3})^{3}-1^{3}$ 의 인수분해 꼴로 읽어 근호를 한 번에 없앰'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑷ 의 $8$ 과 $4$ 를 밑 $2$ 로 통일한 뒤 분자·분모에서 공통인수를 묶어 약분되는 꼴로 바꿈'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: '거듭제곱근의 수치 계산(밑 통일 · 세제곱 인수분해)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴·⑶ 은 근호를 유리수 지수로 바꿔 더하고 빼는 표준 계산이지만, ⑵ 는 $a^{3}-1$ 인수분해를 먼저 읽어야 하고
    ⑷ 는 밑을 $2$ 로 통일한 뒤 $2^{20}$·$2^{12}$ 를 묶어야 비로소 약분된다.
    성격이 다른 착안 2개(RT d1 · EQV d1) → 필수 예제 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: '근호를 유리수 지수로 정리 → 세제곱 합·차 인수분해와 밑 통일로 약분 꼴 만들기 → 수치'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $84$ ⑵ $\sqrt{2}$ ⑶ $1$ ⑷ $16$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/15-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 밑 $3$ 을 $2$·$5$ 로, ⑷ 의 밑 $8$·$4$ 를 $27$·$9$ 나 $25$·$5$ 로 바꿀 수 있음. 제약: ⑵ 는 세제곱하면 정수가 되는 합·차 인수분해 꼴을 유지해야 하고, ⑷ 는 분자·분모의 지수 차가 짝수여야 제곱근이 유리수로 떨어진다.'
    creative: '(1) ⑷ 의 분모 지수를 어긋나게 하면 약분이 막혀 성격이 근삿값 비교로 변함(★3 유지) (2) ⑵ 를 네제곱 차 $(a-1)(a+1)(a^{2}+1)$ 로 확장하면 Mₛ 상승 ★3 (3) 소문항을 하나씩 떼어 물으면 착안이 하나만 남아 ★2.'
```

```yaml
- id: GN-ALG-15-6
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 15-e2 와 같은 골조의 거듭제곱근 계산. 세제곱 합 $(\sqrt[3]{2}+1)(\sqrt[3]{4}-\sqrt[3]{2}+1)$ 과
    밑 통일이 필요한 $\sqrt{\dfrac{81^{2}+9^{5}}{27^{4}+9^{5}}}$.
  category: '밑 통일·지수법칙 / 세제곱 합·차 인수분해 → 약분'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑵ 의 분자를 $(\sqrt[3]{2})^{3}+1^{3}$ 의 인수분해 꼴로 읽어 근호를 없앰'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑷ 의 $81$·$27$·$9$ 를 밑 $3$ 으로 통일한 뒤 공통인수를 묶어 지수만 남기는 꼴로 바꿈'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: '거듭제곱근의 수치 계산(밑 통일 · 세제곱 인수분해)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑵ 는 $a^{3}+1$ 인수분해로 분자가 정수가 되고, ⑷ 는 모두 밑 $3$ 으로 고쳐 $3^{8}$·$3^{10}$ 을 묶으면 지수가 음수인 거듭제곱의 제곱근이 남는다.
    직전 필수 예제 15-e2 의 유제라 예제 ★3 을 그대로 따름.
    [분류 이슈] 「확인체크」 일반 벤더 신호(★1)와 라벨 ★3 이 2단 차이 — 이 구역의 확인체크는 예제 유제이므로 예제 ★ 를 출발점으로 삼았고 라벨은 억지로 내리지 않았다.
  tier: star_3
  mechanism_primary: '근호를 유리수 지수로 정리 → 세제곱 합 인수분해와 밑 통일로 약분 꼴 만들기 → 수치'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-1$ ⑵ $1$ ⑶ $1$ ⑷ $\dfrac{1}{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/15-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 밑 $2$ 와 ⑷ 의 밑 $3$ 을 다른 소수로 바꿀 수 있음. 제약: ⑵ 는 세제곱 합 인수분해가 성립하는 조합이어야 하고, ⑷ 는 분자·분모를 같은 소수의 거듭제곱으로 모두 고칠 수 있어야 한다.'
    creative: '(1) ⑷ 를 「분자와 분모의 공통인수를 먼저 찾아라」 형태의 서술형으로 바꾸면 EQV 가 명시돼 ★2 (2) ⑵ 의 분모를 근호로 바꾸면 한 단계 늘어 ★3 (3) 네 소문항의 값을 크기순으로 배열하게 하면 비교 단계가 붙어 ★3.'
```

```yaml
- id: GN-ALG-16-e3
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a>0$, $b>0$ 일 때 ⑴~⑶ 문자의 거듭제곱근 식 $\sqrt{a^3b}\div\sqrt[3]{a^4b^2}\times\sqrt[6]{a^5b^2}$ 등과
    중첩 근호 $\sqrt{a\times\sqrt[4]{a\times\sqrt[3]{a^2}}}$ 를 간단히 하기.
  category: '근호 → 유리수 지수 → 문자별 지수 통분·가감 → 다시 근호'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '문자의 거듭제곱근 계산(유리수 지수 통일 · 근호 중첩)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a>0$, $b>0$ 이 주어져 절댓값 분기가 없고, 모든 근호를 유리수 지수로 바꿔 $a$·$b$ 의 지수를 각각 통분해 더하고 빼면 끝난다.
    ⑶ 의 중첩 근호도 안쪽부터 지수를 곱해 내려오는 표준 절차라 착안이 새로 필요하지 않아 통찰 0.
    필수 예제 ★2 출발 · M_total 7 → ★2(문자 도입으로 Mₐ 는 올랐지만 통찰 상승 신호는 없음).
  tier: star_2
  mechanism_primary: '각 근호를 유리수 지수로 → 문자별 지수를 통분해 가감 → 결과 지수를 근호로 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a\sqrt[6]{b}$ ⑵ $1$ ⑶ $\sqrt[24]{a^{17}}$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/16-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 차수(2·3·6·4)와 문자 지수(3·4·5·2)를 바꿀 수 있음. 제약: 통분한 지수가 기약분수로 떨어져야 답이 근호 하나로 정리되고, $a>0$·$b>0$ 조건을 빼면 절댓값 분기가 생기므로 함께 유지할 것.'
    creative: '(1) 조건을 $a<0$ 으로 바꾸면 차수의 홀짝마다 부호 분기가 생겨 ★3 (2) 결과가 $1$ 이 되도록 지수를 맞춰 「값이 $1$ 인 것 고르기」로 바꾸면 ★2 유지 (3) 중첩 근호를 4중으로 늘리고 미지 차수 $n$ 을 넣으면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-16-e4
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 수 $A=\sqrt{5}$, $B=\sqrt[3]{10}$, $C=\sqrt[6]{120}$ 의 대소를 비교하기.
  category: '근호 차수의 최소공배수로 거듭제곱 → 정수 밑끼리 비교'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '세 양수의 대소 비교를 차수 $6$ 으로 거듭제곱한 값의 비교로 바꿈(양수에서 $x^{6}$ 이 증가함수인 것이 근거)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '거듭제곱근의 대소 비교(지수 최소공배수 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차수 $2$·$3$·$6$ 의 최소공배수 $6$ 으로 세 수를 거듭제곱하면 $A^{6}=125$, $B^{6}=100$, $C^{6}=120$ 이라 한눈에 갈린다.
    양수라서 $6$ 제곱이 대소를 보존한다는 동치 변환(EQV d1)이 착안의 전부이고 계산은 가볍다.
    필수 예제 ★2 출발 · 통찰 1 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '근호 차수의 최소공배수로 세 수를 거듭제곱 → 정수 밑끼리 비교 → 원래 대소로 환원'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "$B<C<A$"
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-alg/items/16-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 밑($5$·$10$·$120$)과 차수($2$·$3$·$6$)를 바꿀 수 있음. 제약: 최소공배수로 거듭제곱한 값이 손으로 계산 가능한 크기여야 하고, 세 값이 서로 달라야 대소가 확정된다.'
    creative: '(1) 네 수로 늘려 차수의 최소공배수를 $12$ 로 키우면 Mₖ 상승 ★3 (2) 가장 큰 수만 고르는 5지선다로 줄이면 ★2 유지 (3) 밑을 문자로 두고 $a>1$ 과 $0<a<1$ 을 함께 다루면 대소가 뒤집히는 케이스 분기가 생겨 ★3.'
```

```yaml
- id: GN-ALG-16-7
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>0$, $y>0$ 일 때 ⑴~⑶ 문자의 거듭제곱근 식과 중첩 근호 $\sqrt[5]{x\times\sqrt[4]{x^3\times\sqrt[3]{x}}}$ 를 간단히 하기.
    16-e3 와 같은 골조.
  category: '근호 → 유리수 지수 → 문자별 지수 통분·가감 → 다시 근호'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '문자의 거듭제곱근 계산(유리수 지수 통일 · 근호 중첩)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16-e3 의 유제로, 근호를 유리수 지수로 바꿔 $x$·$y$ 의 지수를 각각 통분해 가감하면 된다.
    ⑶ 은 안쪽 $\sqrt[3]{x}$ 부터 차례로 지수를 곱해 내려오는 표준 절차라 통찰 0이고, 분모가 큰 분수 지수 탓에 계산만 무겁다.
    예제 유제이므로 ★2 출발 유지 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '각 근호를 유리수 지수로 → 문자별 지수를 통분해 가감 → 결과 지수를 근호로 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt[24]{x^4y^3}$ ⑵ $1$ ⑶ $\sqrt[30]{x^{11}}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/16-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 차수(4·8·6·5·3)와 문자 지수를 바꿀 수 있음. 제약: 통분 분모가 지나치게 커지지 않게 차수를 고르고, $x>0$·$y>0$ 조건은 절댓값 분기를 막기 위해 유지할 것.'
    creative: '(1) ⑵ 처럼 값이 $1$ 이 되는 소문항을 늘려 「값이 $1$ 이 아닌 것 고르기」로 바꾸면 ★2 유지 (2) 결과를 유리수 지수 꼴로 답하게 하면 표기 전환이 명시돼 ★2 (3) 중첩 근호 안에 두 문자를 섞으면 지수 통분이 두 벌이 되어 ★3.'
```

```yaml
- id: GN-ALG-16-8
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 수 $A=\sqrt[3]{\sqrt{15}}$, $B=\sqrt[4]{6}$, $C=\sqrt[3]{4}$ 의 대소를 비교하기.
  category: '중첩 근호 정리 → 차수의 최소공배수로 거듭제곱 → 정수 밑끼리 비교'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '중첩 근호 $A$ 를 단일 근호 $\sqrt[6]{15}$ 로 정리한 뒤 대소 비교를 $12$ 제곱한 값의 비교로 바꿈'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '거듭제곱근의 대소 비교(지수 최소공배수 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $A$ 를 먼저 $\sqrt[6]{15}$ 로 푼 뒤 차수 $6$·$4$·$3$ 의 최소공배수 $12$ 로 거듭제곱하면 $225$, $216$, $256$ 로 갈린다.
    중첩 근호 정리가 한 단계 더 붙을 뿐 16-e4 와 같은 동치 변환(EQV d1)이고 $6^{3}$·$4^{4}$ 계산이 조금 무겁다.
    예제 유제 ★2 출발 유지 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '중첩 근호를 단일 근호로 정리 → 차수의 최소공배수로 거듭제곱 → 정수 밑끼리 비교'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "$B<A<C$"
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/16-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 밑($15$·$6$·$4$)과 차수($6$·$4$·$3$)를 바꿀 수 있음. 제약: 최소공배수 제곱값이 세 자리 수 안쪽이어야 손계산이 가능하고, $225$·$216$·$256$ 처럼 값이 가까워야 「어림으로는 안 된다」는 의도가 살아난다.'
    creative: '(1) 중첩 근호를 두 수에 적용하면 정리 단계가 늘어 ★3 (2) 세 수 중 두 수만 주고 나머지를 「$A$ 와 $C$ 사이에 오도록」 만들라 하면 역방향 사고(BW)가 붙어 ★3 (3) 밑을 문자로 두면 케이스 분기가 생겨 ★3.'
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 3 · ★2 7 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 6 · premium 0
- 통찰 라벨 7개(모두 depth 1): I-EQV 3 · I-MI 2 · I-RT 2. SC·VF·SYM·XU·PD 는 0 — 이 범위에 ★4·★5 자격 문항이 없다는 뜻이다.
- M_total 분포: 5 → 3문 · 6 → 7문 · 7 → 2문 (최대 7, 함정은 T-부호·T-표기·T-범위 위주)
- type_hint 상위: 「실수인 n제곱근의 개수·표기 판별」 3(14-e1·14-4·14-5) · 「거듭제곱근의 수치 계산(밑 통일·세제곱 인수분해)」 2 · 「문자의 거듭제곱근 계산(유리수 지수 통일·근호 중첩)」 2 · 「거듭제곱근의 대소 비교(지수 최소공배수 통일)」 2 · 「거듭제곱근의 값 구하기·사칙연산」 2
- 대상층: 하위권 3 · 중하위권 7 · 중위권 2
- 그림: 0문 (이 범위에 figure 있는 문항 없음)
- 구조 특징: 필수 예제와 그 아래 확인체크가 1:1 로 같은 골조를 되풀이한다(14-e1↔14-4 · 15-e2↔15-6 · 16-e3↔16-7 · 16-e4↔16-8). 변형 제작 시 예제/유제 쌍을 한 세트로 다루면 된다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-13-3 | 소문항 10개로 계산량은 크지만 착안은 지수법칙 하나뿐. v3.8 이 계산 마찰을 ★ 상승 신호로 보지 않아 ★1 유지 — 학생 체감은 ★2 일 수 있음 | ★1 / ★2 |
| GN-ALG-14-4 | 선택지 참·거짓 판정형을 I-MI 로 셀지 절차형으로 볼지 경계. 케이스 표를 학생이 스스로 떠올려야 한다고 보아 14-e1 과 함께 MI d1 로 통일했으나, 절차형으로 보면 통찰형 수가 6 → 4 로 줄어듦 | ★2 (통찰형/절차형 경계) |
| GN-ALG-15-6 | 「확인체크」 일반 벤더 신호(★1)와 라벨 ★3 이 2단 차이. 필수·발전 예제 구역의 확인체크는 독립 개념 확인이 아니라 직전 예제의 유제라 예제 ★ 를 출발점으로 삼음(14-4·14-5·16-7·16-8 도 같은 방침, 이들은 1단 차이) | ★3 (신호 ★1) |

### 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 「n제곱근의 정의와 실수인 n제곱근의 개수」(n 홀짝 × 밑 부호 표 · base ★1~2) ② 「거듭제곱근의 수치 계산」(밑 통일·근호 중첩 · base ★1~2) ③ 「문자의 거듭제곱근 계산」(유리수 지수 통분 · 조건 $a>0$ · base ★2) ④ 「거듭제곱근의 대소 비교」(차수 최소공배수 통일 · base ★2). ①은 참·거짓 판정 문항(14-e1·14-4)과 개수 대입 문항(14-5)이 통찰 유무에서 갈리므로 하위 유형 둘로 나눌 여지가 있다.
- **통합해도 될 유형**: 13-2(수의 거듭제곱근 값)와 13-3(거듭제곱근의 사칙·근호 중첩)은 모두 「근호 → 유리수 지수 → 약분」 한 골조라 ②로 흡수 가능. 16-e3/16-7 의 중첩 근호도 별도 유형이 아니라 ③의 소분류로 충분하다.
- **base ★ 상향 후보 표식**: 15-e2/15-6 의 ⑷(밑 통일 후 공통인수 묶기)만 떼어내면 독립 유형 「지수가 큰 수의 합·분수식 정리」로 base ★3 이 될 수 있다. 이 범위에서 ★3 을 만든 유일한 요소다.
- **저노출 통찰 부재**: 이 단원에는 SC·VF·SYM·XU 가 한 건도 없다. 카탈로그에서 01단원에 ★4·★5 슬롯을 배정하려면 지수법칙 단원(02 이후)과의 결합 문항을 따로 설계해야 한다.
