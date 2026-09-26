---
name: mechanism-데이터-GN-PROB-05
description: 개념원리 확률과 통계 05 이항정리의 활용(1/1 · 51~58쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-prob
  section: 05 이항정리의 활용
  unit_code: PROB-05
  part: "1/1"
  extract_range: "51~58쪽 · 51-92~58-120"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json) · 이 범위 그림 3문(51-92 · 52-e4 · 56-107 · 모두 파스칼의 삼각형)
---

# 개념원리 확률과 통계 · 05 이항정리의 활용 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 05단원 51~58쪽의 33문항 전수를 다룬다. 구역은 다섯이다. 「개념원리 익히기」(51-92~51-94 · 통번호 개념 확인), 「필수·발전 예제」(52-e4~55-103 · 상자 예제 `쪽-eN` 과 그 아래 붙는 「확인체크」 유제), 「연습문제 STEP 1」(56-104~57-110), 「연습문제 STEP 2」(57-111~58-116), 「연습문제 실력 UP」(58-117~58-120).

벤더 난이도 신호는 구역 · 예제 태그(필수 ★2 · 발전 ★3) · 연습문제 level(STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)로 온다. **「확인체크」 문항의 출발점 방침**은 gn-alg 정독과 같다. 이 구역의 확인체크는 독립 개념 확인 문제가 아니라 바로 앞 필수·발전 예제의 유제(같은 유형·같은 골조)이므로 확인체크 일반 신호(★1)가 아니라 **직전 예제의 ★ 를 출발점**으로 삼았다. 그래서 확인체크인데 ★3 이 붙은 문항은 확인체크 일반 신호와 2단 벌어지며, 라벨을 억지로 맞추지 않고 파일 끝 「분류 이슈 목록」에 모았다. 기출 태그(평가원 기출 2문 · 56-105 · 57-112)는 통찰 유무로 판단해 +0~1 을 적용했다.

단원 내용은 네 갈래로 거의 전부 덮인다. ① 파스칼 법칙 연쇄(하키스틱)로 연속한 이항계수의 합을 한 항으로 흡수하기, ② $(1+x)^n$ 의 거듭제곱 합에서 특정 차수의 계수를 이항계수 합으로 바꾸기, ③ 이항계수의 전체합 $2^n$ · 교대합 $0$ · 짝·홀 부분합 $2^{n-1}$ 로 지수를 비교하기, ④ 거듭제곱의 나머지를 $(1\pm k)^n$ 이항전개로 바꿔 법의 배수가 되는 항을 일괄 소거하기. ④ 가 이 단원의 고난도 축이고(55-e7 · 55-103 · 58-116 · 58-118 · 58-119), ★4 문항 넷은 모두 여기에 역방향 사고나 대칭이 한 겹 더 붙은 것이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-51-92
  page: 51
  vendor_label: '개념원리 익히기'
  vendor_level: '-'
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    파스칼의 삼각형 그림의 빈칸을 채우고, 그 행의 이항계수로 ⑴ $(2x+1)^5$ ⑵ $(a-2b)^4$ 를 전개.
  category: '파스칼 법칙으로 빈칸 채우기 → 확보한 행의 이항계수로 이항정리 전개'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '파스칼의 삼각형의 이항계수로 $(a+b)^n$ 전개하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸은 바로 위 두 수의 합이라는 파스칼 법칙 한 줄이고, 전개는 5행·4행 계수에 $(2x)^k$·$(-2b)^k$ 를 곱해 쓰면 끝난다.
    ⑵ 의 $-2b$ 홀수 거듭제곱 부호(T-부호)와 계수 $2$·$-2$ 의 거듭제곱을 빠뜨리지 않는 것만 주의 지점.
    통찰 없음 · 개념원리 익히기 ★1 출발 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: '파스칼 삼각형 5행·4행 이항계수 확보 → 각 항에 $(2x)^k$·$(-2b)^k$ 대입 → 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조(빈칸 위에서부터 $4$ · $10$, $5$ · $15$, $15$ · ⑴ $32x^5+80x^4+80x^3+40x^2+10x+1$ ⑵ $a^4-8a^3b+24a^2b^2-32ab^3+16b^4$)'
  answer_source: '답지'
  figure: 'crop:fig-51-92.png'
  latex: latex-bank/gn-prob/items/51-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 $n$(4~6)과 각 항의 계수($2x \to 3x$ · $-2b \to -3b$)를 바꿀 수 있음. 제약: 파스칼 삼각형 그림의 행 수가 $n$ 이상이어야 하고 빈칸 위치도 같이 옮겨야 하며, 전개 결과가 정수 계수로 떨어지려면 계수도 정수여야 함.'
    creative: '(1) 전개식 전체가 아니라 특정 항의 계수만 묻기(★1 유지) (2) 빈칸을 삼각형 안쪽이 아니라 특정 계수를 역으로 찾게 하면 역방향 한 겹 ★2 (3) $(2x+1)^5$ 와 $(a-2b)^4$ 의 곱에서 한 항의 계수를 묻기(차수 조합 열거 I-MI ★3).'
```

```yaml
- id: GN-PROB-51-93
  page: 51
  vendor_label: '개념원리 익히기'
  vendor_level: '-'
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑸ ${}_3\mathrm{C}_0={}_4\mathrm{C}_r$ · ${}_4\mathrm{C}_3+{}_4\mathrm{C}_4={}_n\mathrm{C}_4$ 처럼 주어진 조합 등식을 만족시키는 $n$ 또는 $r$ 구하기(⑶ 은 $r\ne 2$ 단서).
  category: '좌변을 한 항으로 묶기(대칭식·파스칼 법칙) → 위·아래 지수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조합의 성질(${}_n\mathrm{C}_r={}_n\mathrm{C}_{n-r}$ · 파스칼 법칙)로 $n$·$r$ 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 값이 $1$ 인 조합의 두 형태(${}_4\mathrm{C}_0$·${}_4\mathrm{C}_4$)를 모두 써야 하고, ⑷⑸ 는 ${}_{n-1}\mathrm{C}_{r-1}+{}_{n-1}\mathrm{C}_r={}_n\mathrm{C}_r$ 를 한 번 적용하면 바로 끝난다.
    ⑶ 의 $r\ne 2$ 는 대칭식의 두 해 중 하나를 걸러내는 T-범위 단서.
    교과서에서 바로 준 공식을 대입하는 절차라 통찰 없음 · 익히기 ★1 출발 유지 → ★1.
  tier: star_1
  mechanism_primary: '좌변을 ${}_n\mathrm{C}_0=1$ 또는 파스칼 법칙으로 단일 조합으로 정리 → 우변과 $n$·$r$ 비교'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ 또는 $4$ ⑵ $11$ ⑶ $6$ ⑷ $5$ ⑸ $7$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/51-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 $n$·$r$ 을 바꿀 수 있음(${}_8\mathrm{C}_2 \to {}_9\mathrm{C}_3$ 등). 제약: 대칭식 문항은 $r\ne$ 단서를 같이 옮겨야 답이 하나로 확정되고, 파스칼 법칙 문항은 두 항의 위 지수가 같고 아래 지수가 연속이어야 함.'
    creative: '(1) 등식을 만족시키는 $n$ 의 합·개수를 묻기(★2) (2) 파스칼 법칙을 두 번 연달아 적용해야 하는 세 항 합으로 늘리기(★2) (3) ${}_n\mathrm{C}_r$ 대신 순열 ${}_n\mathrm{P}_r$ 과 섞어 표기를 구분하게 하면 T-표기 추가 ★2.'
```

```yaml
- id: GN-PROB-51-94
  page: 51
  vendor_label: '개념원리 익히기'
  vendor_level: '-'
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑷ 이항계수의 전체합 ${}_3\mathrm{C}_0+\cdots+{}_3\mathrm{C}_3$, 교대합, 짝수번째 합 ${}_{51}\mathrm{C}_0+{}_{51}\mathrm{C}_2+\cdots$, 홀수번째 합의 값.
  category: '$(1+1)^n$·$(1-1)^n$ 대입으로 얻은 세 항등식에 그대로 대입'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이항계수의 성질(전체합 $2^n$ · 교대합 $0$ · 짝·홀 부분합 $2^{n-1}$)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 $2^n$ 과 $0$ 을 바로 쓰고, ⑶⑷ 는 전체합과 교대합을 더하거나 빼서 얻는 $2^{n-1}$ 을 그대로 적용하면 된다.
    ⑶⑷ 가 주어진 합에 빠진 항 없이 짝수·홀수 번째를 전부 포함하는지만 확인하면 되는 수준.
    통찰 없음 · M_total 5 로 −1 후보이나 익히기 출발점이 이미 ★1 → ★1.
  tier: star_1
  mechanism_primary: '전체합 $2^n$ · 교대합 $0$ → 두 식을 더하고 빼서 짝·홀 부분합 $2^{n-1}$ → 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $0$ ⑶ $2^{50}$ ⑷ $2^{99}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/51-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$n$ 을 바꿀 수 있음(3·12·51·100 → 다른 값). 제약: 짝·홀 부분합 문항은 마지막 항이 $n$ 의 홀짝과 맞아야 하고(짝수합의 끝항은 $n$ 이 홀수면 ${}_n\mathrm{C}_{n-1}$), 답이 $2$ 의 거듭제곱 꼴로 떨어지도록 항을 하나도 빼지 말 것.'
    creative: '(1) 합에서 항 하나를 빼고 주면 보정이 필요해 ★2 (2) 합의 값을 주고 $n$ 을 역으로 묻기(지수 비교 ★2) (3) 부분집합 개수 문장으로 바꿔 물으면 표현 전환 I-RT 가 붙어 ★3(57-114 와 같은 골조).'
```

### 필수·발전 예제

```yaml
- id: GN-PROB-52-e4
  page: 52
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    파스칼의 삼각형 그림을 이용해 ${}_2\mathrm{C}_2+{}_3\mathrm{C}_2+{}_4\mathrm{C}_2+\cdots+{}_{10}\mathrm{C}_2$ 와 값이 같은 것을 5지선다에서 고르기.
  category: '첫 항을 ${}_3\mathrm{C}_3$ 로 바꿔 파스칼 연쇄 시작 → 한 항으로 흡수 → 대칭으로 선택지와 대조'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '조합의 합을 파스칼 삼각형 위의 대각선 경로로 옮겨 보고, 아래 칸 한 개로 흡수되는 하키스틱 구조로 읽음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '파스칼의 삼각형 (1) — 연속한 이항계수의 합(하키스틱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ${}_2\mathrm{C}_2={}_3\mathrm{C}_3$ 으로 바꿔야 연쇄가 시작되고, 그 뒤로는 파스칼 법칙을 아래로 반복해 ${}_{11}\mathrm{C}_3$ 한 항이 된다.
    선택지에 ${}_{11}\mathrm{C}_3$ 이 없어 ${}_{11}\mathrm{C}_8$ 로 한 번 더 대칭 변환해야 하는 것이 함정(T-표기).
    합을 그림 위 경로로 바꿔 읽는 표현 전환 통찰 1개(RT d1) · 필수 예제 ★2 출발 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '${}_2\mathrm{C}_2={}_3\mathrm{C}_3$ → 파스칼 법칙 반복 흡수 → ${}_{11}\mathrm{C}_3={}_{11}\mathrm{C}_8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: '본문 풀이'
  figure: 'crop:fig-52-e4.png'
  latex: latex-bank/gn-prob/items/52-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '아래 지수 $2$ 와 마지막 항의 위 지수 $10$ 을 바꿀 수 있음(${}_3\mathrm{C}_3+\cdots+{}_{12}\mathrm{C}_3$ 등). 제약: 아래 지수가 모든 항에서 같아야 연쇄가 성립하고, 첫 항의 위 지수는 아래 지수와 같거나 그보다 1 커야 시작항 변환이 가능함. 선택지를 대칭형으로 주려면 $n$ 과 $n-r$ 을 혼동하지 않게 배치할 것.'
    creative: '(1) 값을 수로 구하게 하면 선택지 대칭 변환이 빠져 ★1~2 (2) 시작 항을 ${}_5\mathrm{C}_2$ 처럼 중간부터 주면 앞부분 보정이 필요해 ★3(52-96 골조) (3) 그림에서 색칠 영역을 주고 그 합을 묻는 도형 제시형으로 바꾸면 ★2 유지(56-107 골조).'
```

```yaml
- id: GN-PROB-52-95
  page: 52
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴ ${}_2\mathrm{C}_0+{}_3\mathrm{C}_1+{}_4\mathrm{C}_2+\cdots+{}_{11}\mathrm{C}_9$ ⑵ ${}_3\mathrm{C}_3+{}_4\mathrm{C}_3+\cdots+{}_{10}\mathrm{C}_3$ 의 값.
  category: '아래 지수를 대칭으로 통일 → 파스칼 연쇄로 한 항 흡수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '아래 지수가 통일된 조합의 합을 파스칼 삼각형 대각선 경로로 옮겨 한 항으로 흡수(하키스틱)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '연속한 이항계수의 합(하키스틱) — 대칭 통일 후 연쇄'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 ${}_k\mathrm{C}_{k-2}={}_k\mathrm{C}_2$ 로 아래 지수를 2 로 맞춘 뒤 연쇄해 ${}_{12}\mathrm{C}_3$, ⑵ 는 바로 연쇄해 ${}_{11}\mathrm{C}_4$ 가 된다.
    대칭 변환은 교과 공식 대입이라 통찰로 세지 않고, 연쇄 착안만 RT d1 로 카운트.
    직전 필수 예제 52-e4 ★2 출발 · M_total 5 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: '${}_k\mathrm{C}_{k-2}={}_k\mathrm{C}_2$ 로 아래 지수 통일 → 파스칼 법칙 반복 → ${}_{12}\mathrm{C}_3$ · ${}_{11}\mathrm{C}_4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $220$ ⑵ $330$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/52-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '아래 지수(2·3)와 마지막 항의 위 지수(11·10)를 바꿀 수 있음. 제약: ⑴ 처럼 아래 지수가 늘어나는 형태는 위 지수와의 차가 일정해야 대칭 통일이 가능하고, 계산 결과가 세 자리 이내로 떨어지게 위 지수를 12 이하로 둘 것.'
    creative: '(1) 값 대신 ${}_n\mathrm{C}_r$ 꼴 표현을 고르게 하면 대칭 변환이 한 겹 더 붙어 ★2 (2) 합의 값을 주고 마지막 항의 위 지수를 역으로 묻기(★3) (3) 두 합의 비나 차를 묻기(★3).'
```

```yaml
- id: GN-PROB-52-96
  page: 52
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ${}_{15}\mathrm{C}_6+{}_{16}\mathrm{C}_7+{}_{17}\mathrm{C}_8+\cdots+{}_{20}\mathrm{C}_{11}$ 과 값이 같은 것을 5지선다에서 고르기.
  category: '없는 항을 더해 파스칼 연쇄를 성립시키고 마지막에 다시 빼기'
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '위·아래 지수가 함께 1씩 커져 그대로는 연쇄가 안 되는 합을, 없는 항 ${}_{15}\mathrm{C}_5$ 를 더했다 빼는 형태로 동치 변환해 연쇄가 성립하게 만듦'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '위·아래 지수가 함께 증가하는 이항계수 합 — 보조항 추가 후 파스칼 연쇄'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    52-e4·52-95 는 아래 지수가 고정이라 바로 연쇄되지만, 여기는 위·아래가 같이 오르는 대각선이라 ${}_{15}\mathrm{C}_5$ 를 더해 주어야 $({}_{15}\mathrm{C}_5+{}_{15}\mathrm{C}_6)+{}_{16}\mathrm{C}_7+\cdots$ 가 차례로 흡수돼 ${}_{21}\mathrm{C}_{11}$ 이 된다.
    문제에 없는 항을 스스로 끌어오는 단계라 표준 공식 대입이 아니라 동치 변환 통찰(EQV d2)로 봄. 선택지가 $\pm{}_{15}\mathrm{C}_5$·$\pm{}_{15}\mathrm{C}_7$ 로 갈려 보정 부호가 함정.
    [분류 이슈] 확인체크 일반 신호(★1)와 2단 차이 — 직전 예제 ★2 출발에 보조항 착안으로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '${}_{15}\mathrm{C}_5$ 를 더해 연쇄 시작 → 파스칼 법칙 반복 흡수 → ${}_{21}\mathrm{C}_{11}-{}_{15}\mathrm{C}_5$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/52-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작 항 ${}_{15}\mathrm{C}_6$ 의 두 지수와 항의 개수를 바꿀 수 있음. 제약: 모든 항에서 위 지수 − 아래 지수가 일정해야 보조항 한 개로 연쇄가 완성되고, 보조항은 반드시 첫 항의 바로 왼쪽(아래 지수 −1)이어야 함.'
    creative: '(1) 보조항을 미리 더해 준 형태로 주면 단순 연쇄 ★2 로 내려감 (2) 값을 수로 구하게 하면 계산 부담만 늘고 ★3 유지 (3) 위·아래 지수 차가 일정하지 않게 섞어 두면 연쇄 자체가 성립하지 않는 함정 판별형이 되어 ★4.'
```

```yaml
- id: GN-PROB-53-e5
  page: 53
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $(1+x)+(1+x)^2+(1+x)^3+\cdots+(1+x)^7$ 의 전개식에서 $x^3$ 의 계수.
  category: '각 항의 $x^3$ 계수를 ${}_n\mathrm{C}_3$ 으로 읽기 → 파스칼 연쇄로 한 항 흡수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '전개식의 계수 문제를 ${}_3\mathrm{C}_3+{}_4\mathrm{C}_3+\cdots+{}_7\mathrm{C}_3$ 이라는 파스칼 삼각형 대각선 합으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '파스칼의 삼각형 (2) — $(1+x)^n$ 의 거듭제곱 합에서 특정 차수의 계수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(1+x)^n$ 의 $x^3$ 계수가 ${}_n\mathrm{C}_3$ 이므로 $n=1,2$ 항은 기여가 없고 $n=3$ 부터 더하면 하키스틱으로 ${}_8\mathrm{C}_4$ 한 항이 된다.
    $n<3$ 인 앞 두 항을 빼먹지 않고 0 으로 처리하는 것이 T-범위 함정.
    계수 → 대각선 합 표현 전환 통찰 1개(RT d1) · 필수 예제 ★2 출발 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '각 항의 $x^3$ 계수 ${}_n\mathrm{C}_3$ → $n=3$~$7$ 합 → 파스칼 연쇄 → ${}_8\mathrm{C}_4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$70$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-prob/items/53-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '마지막 지수 7 과 구하는 차수 3 을 바꿀 수 있음. 제약: 구하는 차수가 마지막 지수 이하여야 합이 비지 않고, 차수보다 작은 지수 항은 기여가 0 이라는 점을 답 해설에서 유지할 것.'
    creative: '(1) 등비수열 합 공식으로 $\dfrac{(1+x)^8-(1+x)}{x}$ 를 만든 뒤 계수를 읽는 다른 풀이를 유도하면 전략 분기 I-SC 가 붙어 ★3 (2) 밑을 $(1+2x)$ 로 바꾸면 거듭제곱 인수가 붙어 ★2 유지(56-108) (3) 밑을 $(1+x^3)$ 로 바꾸면 차수 환산이 한 겹 더해져 ★2~3(53-97).'
```

```yaml
- id: GN-PROB-53-97
  page: 53
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $(1+x^3)+(1+x^3)^2+\cdots+(1+x^3)^{15}$ 의 전개식에서 $x^6$ 의 계수.
  category: '$x^3$ 을 한 덩어리로 보고 $x^6=(x^3)^2$ → ${}_n\mathrm{C}_2$ 합 → 파스칼 연쇄'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '차수를 $(x^3)^2$ 로 환산한 뒤 계수 문제를 ${}_2\mathrm{C}_2+\cdots+{}_{15}\mathrm{C}_2$ 파스칼 대각선 합으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$(1+x^k)^n$ 의 거듭제곱 합에서 특정 차수의 계수(차수 환산 + 하키스틱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^6$ 은 $(x^3)^2$ 이므로 각 항의 기여가 ${}_n\mathrm{C}_2$ 이고, $n=2$ 부터 15 까지 더하면 ${}_{16}\mathrm{C}_3$ 이 된다.
    $x^6$ 을 보고 아래 지수를 6 으로 잘못 잡는 것이 T-단위 함정.
    53-e5 와 같은 골조에 차수 환산 한 겹 추가 · 직전 예제 ★2 출발 · 통찰 1(RT d1) → ★2.
  tier: star_2
  mechanism_primary: '$x^6=(x^3)^2$ → 각 항 계수 ${}_n\mathrm{C}_2$ → $n=2$~$15$ 파스칼 연쇄 → ${}_{16}\mathrm{C}_3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$560$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/53-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '속 차수 3, 목표 차수 6, 마지막 지수 15 를 바꿀 수 있음. 제약: 목표 차수가 속 차수의 배수여야 항이 존재하고(아니면 계수 0), 몫이 마지막 지수 이하여야 합이 비지 않음.'
    creative: '(1) 목표 차수를 속 차수의 배수가 아니게 주어 계수 0 을 답하게 하면 판별형 ★2 (2) 앞에 $x^2$ 을 곱한 형태로 바꾸면 환산이 두 번 필요해 ★2~3(53-98) (3) 마지막 지수를 미지수 $n$ 으로 두고 계수 값을 주어 $n$ 을 역추적하면 ★3.'
```

```yaml
- id: GN-PROB-53-98
  page: 53
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $x^2(1+x^2)+x^2(1+x^2)^2+\cdots+x^2(1+x^2)^{10}$ 의 전개식에서 $x^{10}$ 의 계수.
  category: '공통인수 $x^2$ 분리 → $(1+x^2)^n$ 에서 $x^8$ 계수 → ${}_n\mathrm{C}_4$ 합 → 파스칼 연쇄'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x^2$ 을 떼고 남은 차수를 $(x^2)^4$ 로 환산해 계수 문제를 ${}_4\mathrm{C}_4+\cdots+{}_{10}\mathrm{C}_4$ 파스칼 대각선 합으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$x^k(1+x^m)^n$ 거듭제곱 합에서 특정 차수의 계수(인수 분리 + 차수 환산 + 하키스틱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 $x^2$ 을 떼면 $(1+x^2)^n$ 에서 $x^8=(x^2)^4$ 의 계수 ${}_n\mathrm{C}_4$ 를 $n=4$ 부터 10 까지 더하는 문제가 되고, 연쇄하면 ${}_{11}\mathrm{C}_5$ 다.
    차수 환산이 인수 분리·거듭제곱 두 번이라 M_total 7 로 이 구역에서 가장 무겁지만 착안은 53-e5 와 동일한 한 개.
    직전 예제 ★2 출발 · 통찰 1(RT d1) · 계산 마찰은 v3.8 에서 ★ 상승 신호가 아님 → ★2(이 구역 ★2 의 상단).
  tier: star_2
  mechanism_primary: '$x^2$ 분리 → $(1+x^2)^n$ 의 $x^8$ 계수 ${}_n\mathrm{C}_4$ → $n=4$~$10$ 파스칼 연쇄 → ${}_{11}\mathrm{C}_5$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$462$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/53-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '앞 인수의 차수 2, 속 차수 2, 목표 차수 10, 마지막 지수 10 을 바꿀 수 있음. 제약: (목표 차수 − 앞 인수 차수)가 속 차수의 배수여야 하고 그 몫이 마지막 지수 이하여야 함.'
    creative: '(1) 앞 인수를 항마다 다르게 주면(예: $x^n(1+x^2)^n$) 차수 방정식이 생겨 ★3 (2) 계수 값을 주고 마지막 지수를 역추적하면 ★3 (3) $x^2$ 대신 $\dfrac{1}{x^2}$ 을 곱하면 음의 차수가 섞여 T-부호·T-범위 추가 ★3.'
```

```yaml
- id: GN-PROB-54-e6
  page: 54
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴~⑷ 이항계수의 전체합·교대합·짝수번째 합이 주어진 값이 되는 자연수 $n$ 과, 홀수번째 부분합 ${}_{11}\mathrm{C}_1+{}_{11}\mathrm{C}_3+\cdots+{}_{11}\mathrm{C}_9$ 의 값.
  category: '전체합 $2^n$·교대합 $0$ → 짝·홀 부분합 $2^{n-1}$ → 빠진 항 보정 후 지수 비교'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이항계수의 성질 — 부분합의 값과 지수 비교로 $n$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 $2^7$·교대합 $0$ 에서 시작항 ${}_{20}\mathrm{C}_0$ 만 옮기면 끝이고, ⑶ 은 $2^{2n-1}=128$ 로 지수 비교, ⑷ 는 홀수번째 전체합 $2^{10}$ 에서 주어지지 않은 ${}_{11}\mathrm{C}_{11}$ 을 빼면 된다.
    핵심 함정은 두 가지 — 교대합에서 부호와 시작항 정렬(T-부호), 주어진 합에 빠진 항이 있는지 확인(T-경계).
    네 소문항 모두 교과 항등식 대입이라 통찰 없음(빠진 항 확인은 Mₜ 로 반영) · 필수 예제 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$(1\pm1)^n$ 대입 항등식 → 짝·홀 부분합 $2^{n-1}$ → 주어진 합과의 차(빠진 항) 보정 → $2$ 의 지수 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $1$ ⑶ $4$ ⑷ $1023$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-prob/items/54-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 $n$ 과 우변 값(128 등)을 바꿀 수 있음. 제약: 우변은 $2$ 의 거듭제곱이어야 지수 비교로 $n$ 이 자연수로 떨어지고, ⑶ 처럼 $2n$ 이 들어가면 $2n-1$ 이 우변 지수와 맞도록 홀수 지수를 고를 것.'
    creative: '(1) 부분합에서 두 항을 빼고 주면 보정이 두 번이라 ★2 유지~★3 (2) 값의 범위를 부등식으로 주고 $n$ 을 찾게 하면 54-100 골조 ★2 (3) 윗절반 합만 주면 대칭 반분 I-SYM 이 붙어 ★3(54-101).'
```

```yaml
- id: GN-PROB-54-99
  page: 54
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ${}_{19}\mathrm{C}_2+{}_{19}\mathrm{C}_4+{}_{19}\mathrm{C}_6+\cdots+{}_{19}\mathrm{C}_{18}$ 의 값.
  category: '짝수번째 전체합 $2^{18}$ → 주어지지 않은 ${}_{19}\mathrm{C}_0$ 보정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이항계수의 짝·홀 부분합 — 빠진 항 보정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝수번째 이항계수의 합은 $2^{18}$ 인데 주어진 식에는 ${}_{19}\mathrm{C}_0=1$ 이 빠져 있으므로 $2^{18}-1$ 이다.
    끝항이 ${}_{19}\mathrm{C}_{18}$ 로 제대로 맞는지, 시작이 ${}_{19}\mathrm{C}_0$ 이 아닌지 확인하는 T-경계가 전부.
    교과 항등식 대입 한 줄이라 통찰 없음 · 직전 예제 54-e6 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '짝수번째 합 $=2^{n-1}=2^{18}$ → 빠진 ${}_{19}\mathrm{C}_0$ 을 빼서 $2^{18}-1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2^{18}-1$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/54-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 지수 19 와 시작·끝항을 바꿀 수 있음. 제약: 위 지수의 홀짝에 따라 마지막 짝수 아래 지수가 달라지고($n$ 이 짝수면 ${}_n\mathrm{C}_n$ 이 포함), 빠진 항이 정확히 몇 개인지가 답을 결정하므로 시작·끝을 같이 옮길 것.'
    creative: '(1) 양 끝 두 항을 다 빼면 $2^{n-1}-2$ 가 되어 ★2 유지(56-109) (2) 값을 $2^k$ 꼴로 주고 $k$ 를 묻게 하면 지수 비교가 붙어 ★2 (3) 위 지수를 미지수로 두고 값의 범위를 주면 ★3.'
```

```yaml
- id: GN-PROB-54-100
  page: 54
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $2000<{}_n\mathrm{C}_1+{}_n\mathrm{C}_2+\cdots+{}_n\mathrm{C}_n<3000$ 을 만족시키는 자연수 $n$.
  category: '전체합 $2^n$ 에서 ${}_n\mathrm{C}_0$ 보정 → $2^n$ 부등식 → 거듭제곱 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이항계수 부분합의 범위 조건으로 $n$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 합은 $2^n-1$ 이므로 $2001<2^n<3001$ 이고 $2^{11}=2048$ 만 이 범위에 든다.
    $2$ 의 거듭제곱 표를 떠올려 대입하는 절차이고, ${}_n\mathrm{C}_0$ 이 빠져 있음을 놓치면 답이 어긋나는 T-경계가 유일한 함정.
    통찰 없음 · 직전 예제 ★2 출발 · M_total 6(미지수 $n$ 으로 Mₐ 2) → ★2.
  tier: star_2
  mechanism_primary: '합 $=2^n-1$ → $2001<2^n<3001$ → $2^{11}=2048$ → $n=11$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/54-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '부등식의 두 경계(2000·3000)를 바꿀 수 있음. 제약: 구간 안에 $2$ 의 거듭제곱이 정확히 하나만 들어가야 답이 유일하고, $-1$ 보정 때문에 경계가 $2^k$ 바로 위·아래에 걸리지 않게 여유를 둘 것.'
    creative: '(1) 만족하는 $n$ 이 두 개가 되도록 구간을 넓히면 합을 묻는 문제로 ★3 (2) 짝수번째 부분합으로 바꾸면 $2^{n-1}$ 이 되어 지수 한 겹 ★2 (3) 부등식 대신 자릿수 조건(네 자리 수)을 주면 표현 전환이 붙어 ★3.'
```

```yaml
- id: GN-PROB-54-101
  page: 54
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ${}_{15}\mathrm{C}_8+{}_{15}\mathrm{C}_9+\cdots+{}_{15}\mathrm{C}_{15}=2^k$ 을 만족시키는 자연수 $k$.
  category: '대칭 ${}_{15}\mathrm{C}_r={}_{15}\mathrm{C}_{15-r}$ → 윗절반 = 아랫절반 → 전체합의 반'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '위 지수 15 가 홀수라 ${}_{15}\mathrm{C}_r={}_{15}\mathrm{C}_{15-r}$ 로 윗절반과 아랫절반이 정확히 같아짐을 보고, 부분합을 전체합 $2^{15}$ 의 절반으로 한 번에 환원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이항계수의 윗절반 합 — 대칭 반분'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아래 지수 8~15 의 여덟 항은 대칭으로 0~7 의 여덟 항과 하나씩 짝지어지므로 부분합이 $2^{15}\div2=2^{14}$ 다.
    항을 하나씩 더하거나 짝·홀 항등식으로 접근하면 길이 막히고, 대칭 반분을 떠올려야 한 줄로 끝나는 구조라 SYM d2 로 카운트.
    위 지수가 짝수였다면 가운데 항 때문에 반분이 깨진다는 점이 이 문항의 숨은 경계(T-경계).
    [분류 이슈] 확인체크 일반 신호(★1)와 2단 차이 — 직전 예제 ★2 출발 + SYM d2 로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '${}_{15}\mathrm{C}_r={}_{15}\mathrm{C}_{15-r}$ 로 윗절반 = 아랫절반 → 전체합 $2^{15}$ 의 절반 $2^{14}$ → $k=14$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/54-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 지수 15 와 시작 아래 지수 8 을 바꿀 수 있음. 제약: 위 지수가 홀수이고 시작 아래 지수가 정확히 $(n+1)/2$ 여야 반분이 성립한다. 위 지수를 짝수로 바꾸면 가운데 항 ${}_n\mathrm{C}_{n/2}$ 를 따로 처리해야 하므로 답이 $2$ 의 거듭제곱으로 떨어지지 않음.'
    creative: '(1) 답을 $4^k$ 꼴로 묻게 하면 지수 환산이 한 겹 더 붙어 ★3 유지(57-110) (2) 위 지수를 짝수로 바꿔 가운데 항 보정을 강제하면 검증 부담이 생겨 ★4 (3) 시작 지수를 반분점에서 한 칸 옮기면 대칭 + 보정이 함께 필요해 ★4.'
```

```yaml
- id: GN-PROB-55-e7
  page: 55
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["발전"]
  category_type: '발전 예제'
  summary: |
    $11^{10}$ 을 $100$ 으로 나눈 나머지 $a$, $21^{10}$ 을 $400$ 으로 나눈 나머지 $b$ 에 대해 $a+b$.
  category: '밑을 $(1+k)$ 로 쪼개 이항전개 → 법의 배수가 되는 항 일괄 소거 → 남는 앞 두 항'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '나머지 문제를 $(1+10)^{10}$·$(1+20)^{10}$ 이항전개로 옮겨, $k^2$ 이 법의 배수가 되는 항부터 통째로 버릴 수 있게 표현을 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$(1+x)^n$ 의 전개식의 활용 — 거듭제곱을 법으로 나눈 나머지'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $11^{10}=(1+10)^{10}$ 에서 $10^2=100$ 이므로 셋째 항부터 전부 $100$ 의 배수, 남는 것은 $1+10\times10$ 뿐이다. $21^{10}=(1+20)^{10}$ 도 $20^2=400$ 이라 같은 구조.
    「거듭제곱의 나머지」를 이항전개로 바꾸는 착안이 이 단원 고난도 축의 출발점이고, 남긴 항이 법보다 큰 경우 다시 나눠야 한다는 점(T-경계)이 함정.
    통찰 1(RT d2) · 발전 예제 ★3 출발 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '$11^{10}=(1+10)^{10}$·$21^{10}=(1+20)^{10}$ → $k^2$ 이 법의 배수인 항 소거 → 앞 두 항만 남겨 나머지'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$202$'
  answer_source: '본문 풀이'
  figure: none
  latex: latex-bank/gn-prob/items/55-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($11$·$21$), 지수($10$), 법($100$·$400$)을 바꿀 수 있음. 제약: 법이 $k^2$ 의 약수여야 셋째 항부터 일괄 소거되고, 남는 $1+nk$ 가 법보다 작아야 추가로 나누는 단계가 생기지 않는다. 법을 $k^3$ 급으로 키우면 남는 항이 세 개가 되어 계산이 늘어남.'
    creative: '(1) 법을 $1000$ 으로 키워 세 항을 남기면 자릿수 문제로 확장 ★4(58-119) (2) 밑을 $(20-1)$ 처럼 빼기로 쪼개야 하는 수로 주면 부호 관리가 더해져 ★3(58-116) (3) 나머지를 요일·시각 같은 실생활 주기로 물으면 표현 전환이 한 겹 더 붙음(58-118).'
```

```yaml
- id: GN-PROB-55-102
  page: 55
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ${}_{15}\mathrm{C}_0+3\times{}_{15}\mathrm{C}_1+3^2\times{}_{15}\mathrm{C}_2+\cdots+3^{15}\times{}_{15}\mathrm{C}_{15}=2^k$ 을 만족시키는 자연수 $k$.
  category: '가중치 $3^r$ 붙은 이항계수 합 → 이항정리를 거꾸로 읽어 $(1+3)^{15}$ 복원 → 밑 통일'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sum {}_{15}\mathrm{C}_r 3^r$ 을 전개식의 결과가 아니라 $(1+3)^{15}$ 의 전개식 그 자체로 되읽어 한 덩어리로 복원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '가중치 $a^r$ 이 붙은 이항계수 합 → $(1+a)^n$ 으로 복원'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(1+3)^{15}=4^{15}=2^{30}$ 이므로 $k=30$ 으로 한 줄에 끝난다.
    난점은 계산이 아니라 「이항정리를 결과에서 원식으로 거꾸로 읽는」 방향 전환 하나뿐이고, 그 뒤는 밑을 $2$ 로 통일하는 지수법칙.
    [분류 이슈] 직전이 발전 예제(★3)라 출발점은 ★3 이지만 단계·계산·함정이 모두 최소(M_total 4)라 −1 하여 ★2.
  tier: star_2
  mechanism_primary: '$\sum 3^r{}_{15}\mathrm{C}_r=(1+3)^{15}=4^{15}=2^{30}$ → $k=30$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/55-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '가중치의 밑 $3$ 과 위 지수 $15$ 를 바꿀 수 있음. 제약: 우변을 $2^k$ 꼴로 두려면 $1+a$ 가 $2$ 의 거듭제곱이어야 함($a=1,3,7,15$). $a=7$ 이면 $8^n=2^{3n}$ 이 되어 지수 환산이 한 겹 늘어남(57-115).'
    creative: '(1) 가중치를 교대 부호 $(-2)^r$ 로 주면 $(1-2)^n$ 이 되어 부호 함정 추가 ★3 (2) 위 지수를 미지수로 두고 값을 주면 지수 방정식이 되어 ★3(57-115) (3) 가중치를 $r$ 에 비례($r\times{}_n\mathrm{C}_r$)하게 바꾸면 흡수 공식이 필요해 ★4.'
```

```yaml
- id: GN-PROB-55-103
  page: 55
  vendor_label: '필수·발전 예제'
  vendor_level: '-'
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $31^{12}$ 을 $900$ 으로 나누었을 때의 나머지.
  category: '$31=1+30$ 으로 쪼개 이항전개 → $30^2=900$ 이라 셋째 항부터 소거 → 앞 두 항'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '나머지 문제를 $(1+30)^{12}$ 이항전개로 옮겨, $30^2$ 이 법 $900$ 과 같으므로 셋째 항 이후를 통째로 버리는 형태로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$(1+x)^n$ 의 전개식의 활용 — 거듭제곱을 법으로 나눈 나머지'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $(1+30)^{12}$ 의 셋째 항부터는 $30^2=900$ 을 인수로 가지므로 나머지는 $1+12\times30=361$ 이다.
    법 $900$ 을 보고 밑을 $30$ 단위로 쪼개야 한다는 역설계가 핵심이고, 남는 $361$ 이 $900$ 보다 작은지 확인하는 T-경계가 함정.
    [분류 이슈] 확인체크 일반 신호(★1)와 2단 차이 — 직전 발전 예제 55-e7 ★3 을 출발점으로 삼아 ★3 유지.
  tier: star_3
  mechanism_primary: '$31^{12}=(1+30)^{12}$ → $30^2=900$ 이라 $r\ge2$ 항 소거 → 나머지 $1+12\times30=361$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$361$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/55-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $31$, 지수 $12$, 법 $900$ 을 바꿀 수 있음. 제약: 법이 $($밑$-1)^2$ 의 약수여야 셋째 항부터 일괄 소거되고, $1+n k$ 가 법보다 작아야 한 번 더 나누는 단계가 생기지 않는다(지수를 너무 키우면 $1+nk>$ 법이 되어 답이 달라짐).'
    creative: '(1) 지수를 키워 $1+nk$ 가 법을 넘게 하면 추가 나눗셈이 강제돼 검증 단계가 붙고 ★4 (2) 밑을 $29=30-1$ 로 바꾸면 부호 관리가 추가돼 ★3(58-116) (3) 나머지가 아니라 몫의 일의 자리를 물으면 표현 전환이 한 겹 더 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-56-104
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $(1-2x)^7$ 의 전개식에서 $x^4$ 의 계수 $a$, $x^5$ 의 계수 $b$ 에 대해 $a+b$.
  category: '일반항 ${}_7\mathrm{C}_r(-2x)^r$ → 차수 맞춰 $r$ 결정 → 두 계수 더하기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$(a+bx)^n$ 전개식에서 특정 차수의 계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항 ${}_7\mathrm{C}_r(-2)^r x^r$ 에서 $r=4,5$ 를 대입해 두 값을 더하면 끝나는 표준 절차.
    $(-2)^5$ 의 부호(T-부호)와 계수 $2$ 의 거듭제곱을 빠뜨리지 않는 것이 유일한 실수 지점.
    통찰 없음 · STEP 1 ★2 출발 · M_total 6(계산 부담만 중간) → ★2.
  tier: star_2
  mechanism_primary: '일반항 ${}_7\mathrm{C}_r(-2)^r x^r$ → $r=4$·$r=5$ 대입 → $a+b$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-112$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/56-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 $7$, 계수 $-2$, 묻는 두 차수(4·5)를 바꿀 수 있음. 제약: 차수가 지수 이하여야 하고, 계수가 음수여야 부호 함정이 유지된다. 두 계수의 부호가 서로 반대가 되게 차수를 이웃하게 잡으면 합이 작은 수로 떨어짐.'
    creative: '(1) 두 계수의 비나 곱을 묻기(★2 유지) (2) 계수를 미지수로 두고 두 계수가 같아지는 값을 묻기(★2, 56-105 골조) (3) $\left(x-\dfrac{2}{x}\right)^7$ 처럼 음의 차수를 섞으면 차수 방정식이 생겨 ★3.'
```

```yaml
- id: GN-PROB-56-105
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제'
  summary: |
    $\left(x^2+\dfrac{a}{x}\right)^5$ 의 전개식에서 $\dfrac{1}{x^2}$ 의 계수와 $x$ 의 계수가 같을 때 양수 $a$ 의 값. 5지선다.
  category: '일반항의 차수식 $x^{10-3r}$ → 두 차수에 맞는 $r$ 찾기 → 두 계수를 같다고 놓고 $a$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\left(x^p+\dfrac{a}{x^q}\right)^n$ 일반항으로 두 차수의 계수 비교해 미정계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항이 ${}_5\mathrm{C}_r a^r x^{10-3r}$ 이므로 $10-3r=-2$ 와 $10-3r=1$ 에서 $r=4,3$ 을 얻고, 두 계수를 같다고 놓으면 $a$ 의 일차식이 남는다.
    차수식을 세우는 것이 교과 표준 절차이고 $r$ 이 정수 범위 $0\le r\le5$ 안인지 확인하는 T-범위만 주의.
    평가원 기출이지만 통찰 라벨이 붙을 단계가 없어 +0 · STEP 1 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '일반항 ${}_5\mathrm{C}_r a^r x^{10-3r}$ → $r=4$($1/x^2$)·$r=3$($x$) → 두 계수 등식 → 양수 $a$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/56-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 5, 두 항의 차수($x^2$·$x^{-1}$), 비교할 두 차수($x^{-2}$·$x$)를 바꿀 수 있음. 제약: 비교하는 두 차수가 모두 $10-3r$ 꼴로 $0\le r\le n$ 인 정수를 주어야 항이 존재하고, 두 $r$ 이 1 만큼 차이나야 $a$ 의 일차식으로 떨어진다. 「양수 $a$」 단서를 빼면 해가 늘어남.'
    creative: '(1) 두 계수의 비를 주면 $a$ 의 차수가 올라가 ★3 (2) 상수항이 존재할 조건으로 바꾸면 정수해 조건이 생겨 ★4(57-111) (3) 다른 다항식을 곱해 계수를 묻게 하면 차수 조합 열거가 붙어 ★3(56-106).'
```

```yaml
- id: GN-PROB-56-106
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\left(x^2+\dfrac{1}{x}\right)^6(x+1)^4$ 의 전개식에서 $x^3$ 의 계수.
  category: '두 인수의 일반항을 따로 세우기 → 차수 합이 3 인 조합 모두 찾기 → 계수 곱의 합'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 인수에서 뽑는 차수 조합 $(r,s)$ 가 하나가 아니어서, 차수 방정식의 정수해를 범위 안에서 모두 찾아 각각의 계수 곱을 더해야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 다항식 곱의 전개식에서 특정 차수의 계수(차수 조합 열거)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 인수의 일반항 차수는 $12-3r$, 뒤는 $s$ 이므로 $12-3r+s=3$ 을 $0\le r\le6$, $0\le s\le4$ 안에서 풀면 $(r,s)$ 가 두 쌍 나오고 계수 곱을 더해야 답이 된다.
    한 쌍만 찾고 끝내는 것이 대표 실수이고, $r$ 범위를 넘는 해를 버리는 T-범위가 함께 걸린다.
    조합을 전부 따져야 하는 통찰 1개(MI d2) · STEP 1 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: '앞 일반항 ${}_6\mathrm{C}_r x^{12-3r}$ · 뒤 ${}_4\mathrm{C}_s x^s$ → $12-3r+s=3$ 의 정수해 전부 → 계수 곱의 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$80$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/56-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 지수(6·4), 속 차수($x^2$·$1/x$·$x$), 목표 차수 3 을 바꿀 수 있음. 제약: 차수 방정식의 정수해가 범위 안에서 두 개 이상 생기도록 목표 차수를 잡아야 통찰이 유지되고(해가 하나뿐이면 ★2), 해가 너무 많으면 계산 마찰만 늘어 질이 떨어짐.'
    creative: '(1) 계수 값을 주고 한쪽 지수를 역추적하게 하면 ★3~4(57-112) (2) 두 인수를 모두 음의 차수 포함으로 두면 범위 판정이 늘어 ★4 (3) 목표 차수를 상수항으로 바꾸면 존재 조건 문제로 ★4.'
```

```yaml
- id: GN-PROB-56-107
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    파스칼의 삼각형 그림에서 색칠한 대각선 부분(${}_3\mathrm{C}_3$ 부터 ${}_{11}\mathrm{C}_3$ 까지)에 있는 모든 수의 합과 같은 것 고르기. 5지선다.
  category: '색칠 영역을 ${}_n\mathrm{C}_3$ 대각선 합으로 읽기 → 파스칼 연쇄 → 대칭으로 선택지 대조'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그림 위의 색칠 영역을 ${}_3\mathrm{C}_3+{}_4\mathrm{C}_3+\cdots+{}_{11}\mathrm{C}_3$ 이라는 대수식으로 옮기고, 다시 파스칼 연쇄로 한 항에 흡수'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '파스칼의 삼각형 도형 제시형 — 대각선 합(하키스틱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    색칠된 칸이 아래 지수 3 으로 고정된 대각선이므로 연쇄하면 ${}_{12}\mathrm{C}_4$ 이고, 선택지가 ${}_{12}\mathrm{C}_6$~${}_{12}\mathrm{C}_{10}$ 이라 대칭으로 ${}_{12}\mathrm{C}_8$ 을 골라야 한다.
    그림에서 색칠 칸의 시작·끝을 ${}_3\mathrm{C}_3$·${}_{11}\mathrm{C}_3$ 으로 정확히 읽는 것이 실수 지점(T-경계).
    도형 → 식 표현 전환 통찰 1개(RT d1) · STEP 1 ★2 출발 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '색칠 대각선 $=\sum_{n=3}^{11}{}_n\mathrm{C}_3$ → 파스칼 연쇄 → ${}_{12}\mathrm{C}_4={}_{12}\mathrm{C}_8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: '답지'
  figure: 'crop:fig-56-107.png'
  latex: latex-bank/gn-prob/items/56-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '색칠 대각선의 아래 지수(3)와 마지막 행(11)을 바꿀 수 있음. 제약: 그림의 행 수가 마지막 행 이상이어야 하고, 색칠 시작 칸이 대각선의 꼭짓점(${}_r\mathrm{C}_r$)이어야 보조항 없이 연쇄가 완성된다. 선택지는 답과 그 대칭형을 모두 넣지 말 것.'
    creative: '(1) 색칠을 가로 한 행으로 바꾸면 전체합 $2^n$ 문제로 ★1~2 (2) 색칠 시작을 꼭짓점에서 떼면 보조항 보정이 필요해 ★3(52-96) (3) 색칠 영역을 삼각형 블록으로 주면 대각선 합을 여러 번 써야 해 ★4.'
```

```yaml
- id: GN-PROB-56-108
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $(1+2x)+(1+2x)^2+\cdots+(1+2x)^8$ 의 전개식에서 $x^3$ 의 계수.
  category: '각 항의 $x^3$ 계수 ${}_n\mathrm{C}_3\cdot2^3$ → 공통인수 $2^3$ 묶기 → 파스칼 연쇄'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '계수 문제를 ${}_3\mathrm{C}_3+{}_4\mathrm{C}_3+\cdots+{}_8\mathrm{C}_3$ 대각선 합으로 옮겨 한 항으로 흡수'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$(1+ax)^n$ 거듭제곱 합에서 특정 차수의 계수(하키스틱 + 계수 거듭제곱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 항의 $x^3$ 계수가 ${}_n\mathrm{C}_3\times2^3$ 이므로 $2^3$ 을 묶고 $n=3$~$8$ 을 연쇄하면 $8\times{}_9\mathrm{C}_4$ 다.
    53-e5 와 골조가 같고 $2^3$ 을 빠뜨리는 실수(T-단위)만 추가된 형태.
    통찰 1(RT d1) · STEP 1 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '각 항 $x^3$ 계수 $=2^3\,{}_n\mathrm{C}_3$ → $n=3$~$8$ 파스칼 연쇄 → $8\times{}_9\mathrm{C}_4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1008$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/56-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 2, 마지막 지수 8, 목표 차수 3 을 바꿀 수 있음. 제약: 목표 차수가 마지막 지수 이하여야 하고, 계수의 거듭제곱이 모든 항에서 같은 $a^3$ 이어야 공통인수로 묶인다. 항마다 계수가 다르면 연쇄가 깨짐.'
    creative: '(1) 첫 항을 $(1+2x)^0$ 부터 주면 기여 없는 항이 늘어 범위 확인이 강조돼 ★2 유지 (2) 등비 합 공식으로 묶는 다른 풀이를 유도하면 전략 분기 I-SC 가 붙어 ★3 (3) 계수를 음수로 두면 부호 함정 추가 ★3.'
```

```yaml
- id: GN-PROB-56-109
  page: 56
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    ${}_{20}\mathrm{C}_2+{}_{20}\mathrm{C}_4+{}_{20}\mathrm{C}_6+\cdots+{}_{20}\mathrm{C}_{18}$ 의 값.
  category: '짝수번째 전체합 $2^{19}$ → 빠진 양 끝 항 ${}_{20}\mathrm{C}_0$·${}_{20}\mathrm{C}_{20}$ 보정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '이항계수의 짝·홀 부분합 — 양 끝 항 보정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝수번째 이항계수의 합 $2^{19}$ 에서 주어지지 않은 ${}_{20}\mathrm{C}_0$ 과 ${}_{20}\mathrm{C}_{20}$ 을 빼면 $2^{19}-2$ 다.
    위 지수가 짝수라 마지막 짝수 항이 ${}_{20}\mathrm{C}_{20}$ 까지 있다는 점(54-99 와 다른 지점)이 T-경계 함정이고, 여기서 보정 개수가 1 이 아니라 2 로 갈린다.
    교과 항등식 대입이라 통찰 없음 · STEP 1 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '짝수번째 합 $=2^{19}$ → 빠진 두 항 $1+1$ 을 빼서 $2^{19}-2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2^{19}-2$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/56-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 지수 20 과 시작·끝 항을 바꿀 수 있음. 제약: 위 지수가 짝수면 양 끝 두 항, 홀수면 한 항만 보정 대상이 되므로 홀짝에 따라 답이 $2^{n-1}-2$·$2^{n-1}-1$ 로 갈린다. 이 구분이 문항의 핵심이므로 임의로 섞지 말 것.'
    creative: '(1) 홀수번째 합으로 바꾸면 보정이 사라져 ★2 아래 (2) 값을 $2^k-2$ 꼴로 주고 $n$ 을 역추적하면 ★3 (3) 윗절반만 주면 대칭 반분이 붙어 ★3(54-101).'
```

```yaml
- id: GN-PROB-57-110
  page: 57
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    ${}_{19}\mathrm{C}_{10}+{}_{19}\mathrm{C}_{11}+\cdots+{}_{19}\mathrm{C}_{19}=4^k$ 을 만족시키는 자연수 $k$.
  category: '대칭으로 윗절반 = 아랫절반 → 전체합의 반 $2^{18}$ → 밑을 $4$ 로 환산'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '위 지수 19 가 홀수라 ${}_{19}\mathrm{C}_r={}_{19}\mathrm{C}_{19-r}$ 로 윗절반과 아랫절반이 같음을 보고 부분합을 전체합 $2^{19}$ 의 절반으로 환원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이항계수의 윗절반 합 — 대칭 반분 후 밑 환산'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아래 지수 10~19 의 열 항은 0~9 의 열 항과 대칭으로 짝지어지므로 합은 $2^{19}\div2=2^{18}$ 이고, 우변이 $4^k$ 이므로 $2^{18}=4^9$ 로 밑을 맞춰 $k=9$.
    대칭 반분을 떠올리지 못하면 길이 없고, 답을 $2$ 의 지수 18 로 답하는 밑 혼동(T-단위)이 마지막 함정.
    통찰 1(SYM d2) · STEP 1 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: '윗절반 = 아랫절반 → $2^{19}/2=2^{18}$ → $4^k=2^{2k}$ 로 밑 통일 → $k=9$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 지수 19, 시작 아래 지수 10, 우변 밑 4 를 바꿀 수 있음. 제약: 위 지수는 홀수, 시작 아래 지수는 $(n+1)/2$ 여야 반분이 성립하고, 우변 밑은 $2$ 의 거듭제곱이어야 $k$ 가 자연수로 떨어진다($8^k$ 로 두면 $2^{18}=8^6$).'
    creative: '(1) 우변을 $2^k$ 로 두면 환산 단계가 빠져 ★2 (2) 위 지수를 짝수로 바꿔 가운데 항 보정을 강제하면 ★4 (3) 시작 지수를 반분점보다 한 칸 앞에서 주면 대칭 + 항 하나 보정이 겹쳐 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-57-111
  page: 57
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\left(x^n+\dfrac{1}{x^2}\right)^6$ 의 전개식에 $0$ 이 아닌 상수항이 존재하도록 하는 모든 자연수 $n$ 의 값의 합.
  category: '일반항 차수 $=0$ → $r$ 을 $n$ 의 식으로 정리 → 정수·범위 조건을 약수 조건으로 바꿔 $n$ 열거'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「상수항이 존재한다」는 결과 조건에서 출발해 일반항의 차수식 $6n-(n+2)r=0$ 을 만족하는 $n$ 을 역추적'
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$r=6-\dfrac{12}{n+2}$ 가 $0\le r\le6$ 인 정수라는 조건을 「$n+2$ 가 $12$ 의 약수」라는 셀 수 있는 조건으로 동치 변환'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '$\left(x^m+\dfrac{1}{x^k}\right)^n$ 의 상수항 존재 조건 — 정수해(약수) 조건으로 $n$ 역추적'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    일반항의 차수를 $0$ 으로 놓으면 $r$ 이 $n$ 의 분수식이 되고, 이것이 $0$ 이상 $6$ 이하의 정수가 되어야 한다는 조건을 약수 조건으로 바꿔야 후보가 유한하게 잡힌다.
    분수식을 그대로 두고 $n$ 을 대입해 찾으면 빠뜨리기 쉽고, 자연수 $n$·$r\le6$ 두 범위(T-범위·T-경계)를 모두 걸어야 한다.
    역방향 사고와 정수해 동치 변환 두 통찰(BW d2 · EQV d2) · STEP 2 ★3 출발 +1 → ★4. ★4 저노출 요건(BW) 충족.
  tier: star_4
  mechanism_primary: '일반항 차수 $6n-(n+2)r=0$ → $r=6-\dfrac{12}{n+2}$ → $n+2$ 가 $12$ 의 약수이고 $0\le r\le6$ → $n$ 전부 더하기'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$17$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바깥 지수 6 과 둘째 항의 차수 $-2$ 를 바꿀 수 있음. 제약: 변형 뒤에도 $r$ 이 「상수 − (상수/$n+k$)」 꼴로 정리돼야 약수 조건이 유효하고, 약수가 너무 많으면 단순 열거 노동으로 질이 떨어진다. 자연수 $n$ 조건을 빼면 답이 달라짐.'
    creative: '(1) 상수항이 존재하지 않을 조건으로 뒤집으면 여집합 판정이 붙어 ★4 유지 (2) 상수항의 값까지 묻게 하면 계산이 늘고 ★4 (3) $n$ 을 고정하고 바깥 지수를 미지수로 두면 같은 골조로 ★3~4 (4) 상수항이 두 개 이상 생기지 않는 이유를 묻는 서술형으로 바꾸면 검증 강제 I-VF 가 붙어 ★5 후보.'
```

```yaml
- id: GN-PROB-57-112
  page: 57
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제'
  summary: |
    $(x^2+1)^4(x^3+1)^n$ 의 전개식에서 $x^5$ 의 계수가 $12$ 일 때 $x^6$ 의 계수. 5지선다.
  category: '두 인수의 차수 조합으로 $x^5$ 계수식 세우기 → $n$ 결정 → 같은 방식으로 $x^6$ 계수 전부 합산'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$2i+3j$ 로 목표 차수를 만드는 $(i,j)$ 조합을 범위 안에서 모두 찾아야 하며, $x^6$ 에서는 조합이 둘이라 계수 곱을 각각 구해 더해야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 다항식 곱에서 한 계수로 지수 결정 후 다른 계수 구하기(차수 조합 열거)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^5$ 은 $2i+3j=5$ 의 조합이 하나뿐이라 계수식이 $n$ 의 일차식이 되어 $n$ 이 바로 나오고, $x^6$ 은 $2i+3j=6$ 의 조합이 둘이라 둘 다 더해야 한다.
    조합이 하나인 차수와 둘인 차수를 같은 문제 안에서 대비시킨 구성이라, $x^6$ 에서 한 조합만 세면 틀린다(T-범위).
    $n$ 결정은 단순 미정계수 대입이라 통찰로 세지 않고 조합 열거만 MI d2 · STEP 2 ★3 출발 · 기출 +0 → ★3.
  tier: star_3
  mechanism_primary: '$2i+3j=5$ 조합 → 계수 $4n=12$ → $n=3$ → $2i+3j=6$ 의 두 조합 계수 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 속 차수(2·3), 고정 지수 4, 주어진 계수 12, 두 목표 차수(5·6)를 바꿀 수 있음. 제약: $n$ 을 정하는 차수는 조합이 하나여야 일차식으로 떨어지고, 묻는 차수는 조합이 둘 이상이어야 문항의 대비가 살아난다. 속 차수가 서로소가 아니면 조합이 급격히 늘어남.'
    creative: '(1) $n$ 을 주고 두 계수의 비를 묻기(★3 유지) (2) 계수 조건을 부등식으로 주면 $n$ 후보가 여럿 생겨 검증이 붙고 ★4 (3) 인수를 셋으로 늘리면 조합 열거가 표 수준이 되어 계산 마찰만 증가(질 저하 주의).'
```

```yaml
- id: GN-PROB-57-113
  page: 57
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    이항계수 항등식 네 개(ㄱ 전체 부분합 · ㄴ 교대 부분합 · ㄷ·ㄹ 파스칼 연쇄)의 참·거짓을 판정해 옳은 것 모두 고르기.
  category: '보기별로 맞는 항등식 고르기 → 빠진 항·부호·연쇄 성립 여부 확인'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄴ 의 교대합은 표준 항등식과 시작항·부호가 어긋나 있어, 전체 교대합 $0$ 에서 ${}_{11}\mathrm{C}_0$ 을 옮기고 부호를 뒤집는 동치 변환을 거쳐야 값이 나옴'
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'ㄷ·ㄹ 을 파스칼 삼각형 위의 경로로 옮겨, 위·아래 지수가 함께 오르는 ㄷ 은 연쇄가 성립하지 않고 아래 지수가 고정된 ㄹ 만 흡수됨을 판별'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '이항계수 항등식 참·거짓 판정(보기형) — 부분합·교대합·파스칼 연쇄'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 ${}_{10}\mathrm{C}_0$ 이 빠져 $2^{10}-1$ 이라 거짓, ㄴ 은 부호를 정렬하면 ${}_{11}\mathrm{C}_0$ 만 남아 참, ㄷ 은 위·아래가 같이 올라 연쇄가 안 되므로 거짓, ㄹ 은 아래 지수 4 고정 연쇄라 ${}_9\mathrm{C}_5={}_9\mathrm{C}_4$ 로 참이다.
    이 단원의 세 항등식을 한 문항에서 교차 점검하게 만든 구성이고, 함정은 빠진 항(T-경계)과 교대합 부호(T-부호).
    [분류 이슈] 통찰 2개라 +1 후보지만 네 보기가 모두 교과 항등식 확인 수준(depth 1~2)이라 STEP 2 출발 ★3 을 유지.
  tier: star_3
  mechanism_primary: '보기별로 전체합·교대합·파스칼 연쇄 중 맞는 항등식 적용 → 빠진 항·부호·연쇄 성립 여부로 참·거짓 판정'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄴ, ㄹ'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 위 지수(10·11·9~10)와 우변 값을 바꿀 수 있음. 제약: 참인 보기와 거짓인 보기가 섞이도록 「빠진 항 있음/없음」·「연쇄 성립/불성립」을 의도적으로 배치해야 하고, 거짓 보기는 아주 근소하게 어긋나야(1 차이·대칭형) 변별이 산다.'
    creative: '(1) 거짓 보기를 고치라는 서술형으로 바꾸면 ★4 (2) 보기에 대칭 반분(54-101 골조)을 하나 넣으면 SYM 이 붙어 ★4 (3) 참인 보기만 골라 그 값을 모두 더하게 하면 계산이 붙어 ★3 유지.'
```

```yaml
- id: GN-PROB-57-114
  page: 57
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    원소가 20 개인 집합의 부분집합 중 원소의 개수가 홀수인 것의 개수.
  category: '개수가 $r$ 인 부분집합 수 $={}_{20}\mathrm{C}_r$ → 홀수번째 이항계수 합 → $2^{19}$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '집합의 부분집합 개수 세기를 ${}_{20}\mathrm{C}_1+{}_{20}\mathrm{C}_3+\cdots+{}_{20}\mathrm{C}_{19}$ 라는 이항계수의 홀수번째 합으로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '부분집합의 개수 ↔ 이항계수의 홀·짝 부분합(표현 전환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원소가 $r$ 개인 부분집합이 ${}_{20}\mathrm{C}_r$ 개이므로 구하는 개수는 홀수번째 이항계수의 합 $2^{19}$ 다.
    집합 언어를 조합 합으로 옮기는 전환이 전부이고, 옮기고 나면 교과 항등식 한 줄이라 계산 부담은 없다.
    빈집합(원소 0 개)이 홀수에 들어가지 않는다는 확인(T-경계)이 함정. 통찰 1(RT d2) · STEP 2 ★3 출발 → ★3.
  tier: star_3
  mechanism_primary: '부분집합 개수 $\to \sum_{r\ \text{홀수}}{}_{20}\mathrm{C}_r$ → 홀수번째 합 $=2^{20-1}=2^{19}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2^{19}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원소 개수 20 을 바꿀 수 있음. 제약: 답이 $2^{n-1}$ 로 깔끔히 떨어지므로 어떤 $n$ 이든 되지만, 「짝수 개」로 바꾸면 빈집합이 포함되는지 여부를 반드시 발문에 반영해야 함.'
    creative: '(1) 「원소가 3 의 배수인 개수」로 바꾸면 1 의 거듭제곱근이 필요해 교육과정을 넘음(회피) (2) 특정 원소를 반드시 포함하는 조건을 걸면 조건부 카운트가 붙어 ★4 (3) 원소 개수가 홀수인 부분집합의 원소 개수 총합을 묻기(흡수 공식 ★4).'
```

```yaml
- id: GN-PROB-57-115
  page: 57
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    ${}_n\mathrm{C}_0+{}_n\mathrm{C}_1\times7+{}_n\mathrm{C}_2\times7^2+\cdots+{}_n\mathrm{C}_n\times7^n=2^{60}$ 을 만족시키는 자연수 $n$.
  category: '가중치 $7^r$ 합 → $(1+7)^n=8^n$ 으로 복원 → 밑을 $2$ 로 통일해 지수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sum {}_n\mathrm{C}_r 7^r$ 을 이항정리의 결과가 아니라 $(1+7)^n$ 의 전개식으로 거꾸로 읽어 한 덩어리로 복원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '가중치 $a^r$ 이 붙은 이항계수 합에서 지수 $n$ 역추적'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변은 $(1+7)^n=8^n=2^{3n}$ 이므로 $3n=60$ 에서 $n=20$ 이다.
    55-102 와 같은 골조이나 위 지수가 미지수이고 밑을 $2$ 로 한 번 더 환산해야 해서 Mₐ 와 단계가 하나씩 늘었다(밑을 맞추지 않고 지수를 비교하면 틀림 — T-단위).
    통찰 1(RT d2) · STEP 2 ★3 출발 · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: '$\sum 7^r{}_n\mathrm{C}_r=(1+7)^n=8^n=2^{3n}$ → $3n=60$ → $n=20$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/57-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '가중치의 밑 7 과 우변 $2^{60}$ 을 바꿀 수 있음. 제약: $1+a$ 가 $2$ 의 거듭제곱이어야 하고($a=1,3,7,15$) 우변 지수가 그 환산 배수로 나누어떨어져야 $n$ 이 자연수가 된다($a=7$ 이면 우변 지수가 3 의 배수).'
    creative: '(1) 가중치를 교대 부호로 바꾸면 $(1-a)^n$ 이 되어 부호·절댓값 처리 추가 ★4 (2) 우변을 부등식 범위로 주면 후보 검증이 붙어 ★4 (3) 가중치를 두 종류로 섞으면($2^r$ 과 $3^r$) 두 식의 연립이 되어 ★4.'
```

```yaml
- id: GN-PROB-58-116
  page: 58
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $19^{19}$ 을 $400$ 으로 나누었을 때의 나머지.
  category: '$19=20-1$ 로 쪼개 이항전개 → $20^2=400$ 이라 셋째 항부터 소거 → 음수 결과를 양의 나머지로 보정'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '나머지 문제를 $(20-1)^{19}$ 이항전개로 옮겨, $20^2$ 이 법 $400$ 과 같으므로 앞 두 항만 남기는 형태로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$(a-1)^n$ 전개식의 활용 — 거듭제곱의 나머지(부호 보정 포함)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    법이 $400=20^2$ 이므로 밑을 $20-1$ 로 쪼개면 $r\ge2$ 항이 모두 소거되고 $19\times20-1=379$ 만 남는다.
    $19=20-1$ 로 「빼기」 쪼개기를 택해야 법과 맞물리고(그냥 $18+1$ 로 쪼개면 소거가 안 됨), 지수가 홀수라 마지막 항이 $-1$ 이 되는 부호(T-부호)와 음수 나머지를 양수로 고치는 처리(T-경계)가 함정.
    통찰 1(RT d2) · STEP 2 ★3 출발 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '$19^{19}=(20-1)^{19}$ → $20^2=400$ 이라 $r\ge2$ 항 소거 → $19\times20-1=379$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$379$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/58-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 19, 지수 19, 법 400 을 바꿀 수 있음. 제약: 법이 (밑 $+1$)$^2$ 의 약수여야 빼기 쪼개기로 소거되고, 지수의 홀짝이 마지막 항 부호를 결정하므로 답 형태가 달라진다. 남는 값이 음수면 법을 한 번 더해 양의 나머지로 만들 것.'
    creative: '(1) 지수를 짝수로 바꾸면 부호 함정이 사라져 ★3 아래 (2) 법을 $8000=20^3$ 으로 키우면 세 항이 남아 ★4 (3) 나머지가 아니라 「$19^{19}+k$ 가 400 의 배수가 되는 최소 자연수 $k$」로 뒤집으면 역방향 사고가 붙어 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-58-117
  page: 58
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $10$ 이상의 자연수 $n$ 에 대해 $(1+x)^n$ 의 $x^8$·$x^9$·$x^{10}$ 계수를 $a_8$·$a_9$·$a_{10}$ 이라 할 때 $a_9-a_8=a_{10}-a_9$ 를 만족시키는 모든 $n$ 의 값의 합.
  category: '계수를 ${}_n\mathrm{C}_r$ 로 쓰고 등차 조건을 식으로 → 계승비로 정리해 $n$ 의 이차방정식 → 범위 검증 후 합'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 계수가 등차라는 조건을 $2\,{}_n\mathrm{C}_9={}_n\mathrm{C}_8+{}_n\mathrm{C}_{10}$ 으로 쓰고, 계승의 비로 약분해 $n$ 에 대한 이차식으로 동치 변환'
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '결과 조건(계수들이 등차)에서 $n$ 을 역추적하고, 얻은 근이 $n\ge10$ 인 자연수인지 걸러 답에 넣을 것만 남김'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '$(1+x)^n$ 의 이웃한 세 이항계수가 등차수열을 이루는 $n$ 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    등차 조건을 계승으로 풀어 ${}_n\mathrm{C}_8$ 로 나누면 $n$ 의 이차방정식이 나오고, 두 근이 모두 $n\ge10$ 조건을 통과하므로 합을 구하면 된다.
    계승비 약분에서 $(n-8)(n-9)$ 같은 인수가 남는 정리 과정이 이 범위에서 가장 무거운 대수 처리(Mₖ 3)이고, $n\ge10$ 범위(T-범위)와 분모 $0$ 배제(T-경계)를 빠뜨리면 근이 남거나 사라진다.
    동치 변환 + 역방향 두 통찰(EQV d2 · BW d2) · 실력 UP ★4 출발 유지 → ★4. ★4 저노출 요건(BW) 충족.
  tier: star_4
  mechanism_primary: '$2\,{}_n\mathrm{C}_9={}_n\mathrm{C}_8+{}_n\mathrm{C}_{10}$ → 계승비로 약분 → $n$ 의 이차방정식 → $n\ge10$ 자연수 근의 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$37$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/58-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 차수(8·9·10)와 하한 조건 $n\ge10$ 을 바꿀 수 있음. 제약: 세 차수는 연속이어야 등차 조건이 성립하고, 하한은 가장 큰 차수 이상이어야 계수가 정의된다. 차수를 옮기면 이차방정식의 근이 자연수로 떨어지지 않을 수 있으므로 판별식이 완전제곱인지 확인할 것.'
    creative: '(1) 등차 대신 등비 조건으로 바꾸면 정리 결과가 달라져 ★4 유지~★5 (2) 근 중 하나만 조건을 통과하게 하한을 올리면 기각 검증 I-VF 가 붙어 ★5 후보 (3) 세 계수의 비를 $1:2:3$ 처럼 주면 연립이 되어 ★4.'
```

```yaml
- id: GN-PROB-58-118
  page: 58
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    오늘이 수요일일 때 오늘부터 $8^{10}$ 일 후는 무슨 요일인지.
  category: '요일 주기 → $7$ 로 나눈 나머지 → $8^{10}=(7+1)^{10}$ 전개로 나머지 결정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '요일 문제를 $7$ 로 나눈 나머지 문제로 옮기고, 다시 $8^{10}=(7+1)^{10}$ 이항전개로 옮겨 마지막 항만 남기는 형태로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$(1+x)^n$ 의 활용 — 주기(요일) 문제를 나머지로 환원'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $8^{10}=(7+1)^{10}$ 의 마지막 항 $1$ 을 뺀 모든 항이 $7$ 의 배수이므로 나머지는 $1$, 즉 수요일 하루 뒤인 목요일이다.
    「요일 → 나머지 → 이항전개」 두 번의 표현 전환이 진입 저항 전부이고, 착안 후에는 한 줄로 끝난다.
    [분류 이슈] 실력 UP ★4 출발이나 단계·계산·함정이 모두 최소(M_total 5 · 통찰 1)라 −1 하여 ★3.
  tier: star_3
  mechanism_primary: '요일 $\to$ $7$ 로 나눈 나머지 → $8^{10}=(7+1)^{10}$ → 나머지 $1$ → 수요일 $+1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '목요일'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/58-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 8, 지수 10, 시작 요일을 바꿀 수 있음. 제약: 밑이 $7k+1$ 꼴이어야 나머지가 $1$ 로 떨어지고, 밑을 $7k+2$ 꼴로 바꾸면 $2^{10}$ 의 나머지를 따로 처리해야 해서 단계가 늘어난다.'
    creative: '(1) 밑을 $9$ 로 바꾸면 $(7+2)^{10}$ 이 되어 $2^{10}$ 의 나머지까지 필요해 ★4 (2) 시각·달 같은 다른 주기(24·12)로 바꾸면 법이 달라져 ★3 유지 (3) 「$8^n$ 일 후가 일요일이 되는 최소 $n$」으로 뒤집으면 역방향 사고가 붙어 ★4.'
```

```yaml
- id: GN-PROB-58-119
  page: 58
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $11^{11}$ 의 일의 자리·십의 자리·백의 자리 숫자를 $a$·$b$·$c$ 라 할 때 $a+b+c$.
  category: '자리 숫자 → $1000$ 으로 나눈 나머지 → $(1+10)^{11}$ 에서 $10^3$ 이상 항 버리고 앞 세 항 합산'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 자리 숫자를 묻는 문제를 $1000$ 으로 나눈 나머지로 옮기고, $(1+10)^{11}$ 에서 $10^3$ 을 인수로 갖는 항을 통째로 버리는 형태로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$(1+10)^n$ 전개식의 활용 — 거듭제곱의 자리 숫자'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $(1+10)^{11}$ 에서 $r\ge3$ 항은 $10^3$ 의 배수라 세 자리에 영향이 없고, 남는 $1+11\times10+{}_{11}\mathrm{C}_2\times10^2$ 을 더한 뒤 $1000$ 으로 나눈 나머지를 읽어야 한다.
    55-e7·55-103 과 달리 남는 항이 셋이라 백의 자리에서 받아올림이 생기고(${}_{11}\mathrm{C}_2\times100=5500$), 그대로 계수 $55$ 를 백의 자리로 읽으면 틀린다 — 이 받아올림(T-경계)과 자리 대응(T-단위)이 이 문항의 핵심 함정.
    통찰 1(RT d2)이지만 남길 항 수를 스스로 정하고 받아올림까지 처리해야 함 · 실력 UP ★4 출발 유지 → ★4. ★4 저노출 요건(RT) 충족.
  tier: star_4
  mechanism_primary: '$11^{11}=(1+10)^{11}$ → $10^3$ 이상 항 버리기 → $1+110+5500$ 의 $1000$ 나머지 $611$ → $a+b+c$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/58-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 11 과 묻는 자리 수(세 자리)를 바꿀 수 있음. 제약: 묻는 자리가 $k$ 개면 $10^k$ 이상 항을 버리므로 남는 항이 $k$ 개가 되고, 남은 값이 $10^k$ 을 넘으면 반드시 나머지를 다시 취해야 한다. 밑은 $11$·$21$ 처럼 $10m+1$ 꼴이어야 전개가 깔끔함.'
    creative: '(1) 자리 숫자의 곱이나 십의 자리만 묻기(★3~4) (2) 밑을 $9=10-1$ 로 바꾸면 부호 교대가 겹쳐 ★4 유지~★5 (3) 네 자리까지 묻게 하면 남는 항이 넷이라 받아올림이 두 번 생겨 검증 강제 I-VF 가 붙고 ★5 후보.'
```

```yaml
- id: GN-PROB-58-120
  page: 58
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $({}_{10}\mathrm{C}_0)^2+({}_{10}\mathrm{C}_1)^2+\cdots+({}_{10}\mathrm{C}_{10})^2={}_n\mathrm{C}_{10}$ 일 때 자연수 $n$.
  category: '대칭으로 제곱을 두 조합의 곱으로 → $(1+x)^{10}(1+x)^{10}=(1+x)^{20}$ 의 $x^{10}$ 계수 비교'
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '${}_{10}\mathrm{C}_r={}_{10}\mathrm{C}_{10-r}$ 로 제곱 $({}_{10}\mathrm{C}_r)^2$ 을 아래 지수의 합이 $10$ 인 서로 다른 두 이항계수의 곱으로 바꿈'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '그 곱의 합을 $(1+x)^{10}(1+x)^{10}$ 전개식의 $x^{10}$ 계수로 읽고, 좌우변이 $(1+x)^{20}$ 으로 같다는 항등식에서 계수를 비교'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '이항계수 제곱의 합(방데르몽드) — 계수 비교로 $n$ 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    제곱 그대로는 다룰 수 없고, 대칭으로 한쪽 아래 지수를 $10-r$ 로 뒤집어야 「두 인수에서 합이 10 이 되게 뽑는 경우」 구조가 드러나며, 그때 비로소 $(1+x)^{20}$ 의 $x^{10}$ 계수와 같아진다.
    직접 11 개 항을 계산해 ${}_{20}\mathrm{C}_{10}$ 과 대조하는 길도 있으나 수가 커서 사실상 막히는, 착안 의존도가 높은 문항.
    대칭 + 계수 비교 두 통찰(SYM d2 · RT d2) · 실력 UP ★4 출발 유지 → ★4. ★4 저노출 요건(SYM·RT) 충족.
  tier: star_4
  mechanism_primary: '${}_{10}\mathrm{C}_r={}_{10}\mathrm{C}_{10-r}$ → $\sum{}_{10}\mathrm{C}_r{}_{10}\mathrm{C}_{10-r}$ → $(1+x)^{20}$ 의 $x^{10}$ 계수 ${}_{20}\mathrm{C}_{10}$ → $n=20$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$20$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-prob/items/58-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 지수 10 을 바꿀 수 있음. 제약: 좌변이 $0$ 부터 $n$ 까지 빠짐없는 제곱합이어야 $(1+x)^{2n}$ 의 가운데 계수와 맞아떨어진다. 항을 하나라도 빼면 닫힌 꼴이 사라지므로 변형 시 합의 범위를 반드시 전체로 둘 것.'
    creative: '(1) 우변을 ${}_{20}\mathrm{C}_k$ 로 두고 $k$ 를 묻게 하면 대칭 답이 둘이 되어 검증이 붙고 ★4~5 (2) 위 지수가 다른 두 집합의 곱합(${}_{m}\mathrm{C}_r{}_{n}\mathrm{C}_{k-r}$)으로 일반화하면 방데르몽드 본형이 되어 ★5 (3) 「남학생 10 명·여학생 10 명에서 10 명 뽑기」 카운팅 문장으로 주면 조합 해석이 앞에 붙어 ★4 유지.'
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 3 · ★2 14 · ★3 12 · ★4 4 · ★5 0
- 통찰형 24 · 절차형 9 · premium 0
- 통찰 라벨 28개(24문항 · depth 1 이 8개 · depth 2 가 20개): I-RT 17 · I-EQV 4 · I-SYM 3 · I-MI 2 · I-BW 2. SC·VF·XU·PD·CON 은 0 — ★5 자격(통찰 3개 이상 + SC/VF/SYM/XU) 문항이 이 범위에 없다는 뜻이다. ★4 네 문항은 모두 BW·RT·SYM 중 하나를 가져 §2.13 ★4 저노출 요건을 충족한다.
- M_total 분포: 4 → 1문 · 5 → 9문 · 6 → 12문 · 7 → 5문 · 8 → 4문 · 9 → 1문 · 10 → 1문 (최대 58-117, 함정은 T-경계(빠진 항·받아올림)·T-부호(교대합·음수 밑)·T-범위·T-단위 순)
- type_hint 상위: 「거듭제곱의 나머지·자리 숫자 — $(1\pm k)^n$ 전개로 법의 배수 소거」 5(55-e7·55-103·58-116·58-118·58-119) · 「이항계수의 부분합과 지수 비교(빠진 항 보정)」 5(51-94·54-e6·54-99·54-100·56-109) · 「$(1+x)^n$ 거듭제곱 합에서 특정 차수의 계수」 4(53-e5·53-97·53-98·56-108) · 「연속한 이항계수의 합(하키스틱)」 3(52-e4·52-95·56-107 · 변형 52-96 포함 4) · 「대칭 반분·제곱합」 3(54-101·57-110·58-120)
- 대상층: 하위권 3 · 중하위권 6 · 중위권 16 · 중상위권 5 · 상위권 3
- 그림: 3문(`crop:fig-51-92.png` · `crop:fig-52-e4.png` · `crop:fig-56-107.png`) — 셋 다 파스칼의 삼각형이고 51-92 는 빈칸 채우기, 52-e4·56-107 은 합을 읽어야 할 영역을 지정하는 용도다. 56-107 은 색칠 대각선이 ${}_3\mathrm{C}_3$~${}_{11}\mathrm{C}_3$ 임을 그림에서만 확인할 수 있어 크롭이 필수다.
- 구조 특징: 필수·발전 예제와 그 아래 확인체크가 1:2~1:3 으로 같은 골조를 되풀이한다(52-e4↔52-95·52-96 · 53-e5↔53-97·53-98 · 54-e6↔54-99·54-100·54-101 · 55-e7↔55-102·55-103). 연습문제 구역도 같은 네 골조의 재배열이라, 변형 제작 시 예제/유제 묶음 하나를 한 세트로 다루면 33문 전체가 네 세트로 덮인다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-52-96 | 「확인체크」 일반 벤더 신호(★1)와 라벨 ★3 이 2단 차이. 이 구역의 확인체크는 직전 예제의 유제라 예제 ★2 를 출발점으로 삼고, 없는 항 ${}_{15}\mathrm{C}_5$ 를 끌어오는 보조항 착안(EQV d2)으로 +1 함 | ★3 (신호 ★1) |
| GN-PROB-54-101 | 같은 사유로 2단 차이. 대칭 반분(SYM d2)이 없으면 길이 막히는 구조라 예제 ★2 출발에서 +1. 절차형으로 보면 ★2 | ★3 / ★2 |
| GN-PROB-55-102 | 직전이 발전 예제(★3)라 출발점은 ★3 이지만 M_total 4 로 이 범위 최소이고 착안 후 한 줄에 끝나 −1 함. 발전 유제 일괄 ★3 방침을 따르면 ★3 | ★2 / ★3 |
| GN-PROB-55-103 | 「확인체크」 일반 신호(★1)와 2단 차이. 직전 발전 예제 55-e7 ★3 을 출발점으로 삼아 유지(55-e7 과 골조·함정이 동일) | ★3 (신호 ★1) |
| GN-PROB-57-113 | 통찰 라벨 2개(EQV d2 · RT d1)로 「+1 후보」에 걸리지만 네 보기가 모두 교과 항등식 확인 수준이라 STEP 2 출발 ★3 유지. 보기형을 통찰형으로 셀지 절차형으로 볼지도 경계 — 절차형으로 보면 통찰형 수가 24 → 23 | ★3 / ★4 |
| GN-PROB-58-118 | 벤더 「실력 UP」(★4 출발)과 라벨 ★3 이 1단 차이. 표현 전환 두 번이라는 진입 저항은 크지만 M_total 5 에 계산이 한 줄이라 −1 함. 진입 저항을 우선하면 ★4 | ★3 / ★4 |

### 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 「연속한 이항계수의 합(하키스틱)」(아래 지수 고정 · base ★2) ② 「위·아래 지수가 함께 오르는 합 — 보조항 추가」(base ★3, ①과 풀이 진입점이 달라 반드시 분리) ③ 「$(1+x)^n$ 거듭제곱 합에서 특정 차수의 계수」(base ★2 · 차수 환산 변형 포함) ④ 「이항계수 부분합의 지수 비교」(base ★2 · 빠진 항 보정이 본질) ⑤ 「이항계수의 대칭 반분」(base ★3) ⑥ 「거듭제곱의 나머지·자리 숫자」(base ★3 · 남길 항이 셋 이상이면 ★4) ⑦ 「상수항 존재 조건의 정수해 역추적」(base ★4) ⑧ 「이항계수 제곱의 합(방데르몽드)」(base ★4).
- **통합해도 될 유형**: 「일반항으로 특정 차수의 계수 구하기」(56-104)와 「두 차수의 계수 비교로 미정계수 구하기」(56-105)는 같은 일반항 골조라 한 유형의 하위 분류로 충분하다. 「가중치 $a^r$ 합 → $(1+a)^n$ 복원」(55-102·57-115)도 ④의 하위 분류로 흡수 가능하며, 위 지수가 미지수인지 여부만 base ★2/★3 을 가른다. 「두 다항식 곱의 차수 조합 열거」(56-106·57-112)는 ③과 별개로 두되 한 유형으로 합쳐도 된다.
- **base ★ 상향 후보 표식**: ⑥ 은 남길 항의 개수가 그대로 난이도를 만든다 — 두 항(55-e7·55-103·58-116)은 ★3, 세 항 + 받아올림(58-119)은 ★4 로 하위 유형을 나누는 것이 정확하다.
- **저노출 통찰 부재**: 이 단원에는 SC·VF·XU·PD 가 한 건도 없고 SYM 도 3건뿐이다. 05단원에 ★5 슬롯을 배정하려면 (가) 후보를 여럿 만든 뒤 일부를 조건 위배로 기각시키는 구성(I-VF), (나) 파스칼 연쇄와 나머지 계산 중 어느 쪽이 빠른지 고르게 하는 구성(I-SC), (다) 경우의 수·확률 단원과 결합한 구성(I-XU)을 새로 설계해야 한다. 57-111·58-117·58-119·58-120 의 creative 항에 그 전환 지점을 적어 두었다.
