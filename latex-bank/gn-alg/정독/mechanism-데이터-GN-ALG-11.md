---
name: mechanism-데이터-GN-ALG-11
description: 개념원리 대수 11 로그함수의 최대·최소(1/1 · 104~110쪽 104-246~110-269 · 29문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 11 로그함수의 최대·최소
  unit_code: ALG-11
  part: "1/1"
  extract_range: "104~110쪽 · 104-246~110-269"
  total_problems: 29
  unit_total: 29
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 11 로그함수의 최대·최소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 11단원 「로그함수의 최대·최소」 전체(104~110쪽 · 104-246~110-269 · 29문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 3문(104-246~104-248 · 개념 직후 확인 드릴 · level·tag 없음), **필수·발전 예제** 13문(105-e9 「진수가 일차식인 경우」 · 106-e10·106-e11 「진수가 이차식인 경우 (1)·(2)」 · 107-e12 「$\log_a x$ 의 꼴이 반복되는 함수」 · 108-e13 「지수에 로그가 포함된 함수」 다섯 개의 tag 「필수」 예제와 각 예제에 딸린 tag 「확인체크」 유제 8문), **연습문제 STEP 1** 5문, **연습문제 STEP 2** 7문(그중 110-266 은 tag 「평가원 기출」), **연습문제 실력 UP** 1문이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수·발전 예제와 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 그림 문항은 없다(전 문항 `figure: none`).

단원의 도구는 사실상 하나다 — **로그함수는 밑이 1보다 크면 증가, 0과 1 사이면 감소하므로 진수(또는 치환한 문자)의 최대·최소가 그대로(또는 뒤집혀) 함숫값의 최대·최소가 된다.** 그래서 골조는 「진수가 일차식 → 구간 끝값」 · 「진수가 이차식 → 꼭짓점과 구간 끝 비교 후 밑으로 반전」 · 「$t=\log_a x$ 치환 → $t$ 의 범위를 다시 잡고 이차함수 최대·최소」 · 「양변에 로그를 취해 지수를 끌어내린다」 네 갈래로 반복된다. 판정 일관성을 위해 **밑이 1보다 작을 때의 대소 반전 자체는 통찰로 세지 않고 $M_t$(T-부호)로 처리**했고, 통찰 라벨은 (a) 표현 전환이 있어야 풀리는 경우(양변에 로그 취하기 · 도형을 로그식으로), (b) 결과값 조건에서 두 겹 이상 역추적, (c) 다른 단원 도구 결합(지수함수의 최대·최소 · 산술평균과 기하평균), (d) 서로 다른 꼴이 사실 같다는 항등식 발견에만 붙였다. 그 결과 29문 중 10문이 통찰형이고 나머지 19문은 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 이 단원의 숫자 변형에서 가장 자주 깨지는 제약은 **정의역의 양 끝이 밑의 거듭제곱이어야 답이 정수로 떨어진다**는 것과 **진수가 구간 전체에서 양수여야 한다**는 것 둘이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-104-246
  page: 104
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정의역이 1/2 이상 1 이하인 y=log_2 x 의 최대·최소를 구하는 과정의 빈칸(증가·감소 여부, 최대·최소를 주는 x 와 그 값) 채우기.
  category: '밑>1 → 증가 → 구간 양 끝에서 최대·최소'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 밑이 1보다 큰 경우 닫힌구간 끝값'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 2>1 이므로 증가함수, 오른쪽 끝 x=1 에서 최대 0, 왼쪽 끝 x=1/2 에서 최소 -1. 단조성 판정 한 단계뿐이고 빈칸이 과정을 다 깔아 준다. 개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '밑 2>1 → 증가 → x=1 에서 최대 log_2 1=0, x=1/2 에서 최소 log_2 (1/2)=-1'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '증가, $1$, $0$, $\dfrac{1}{2}$, $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/104-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3, 5, 10)과 구간의 양 끝을 바꿀 수 있다. 제약: 양 끝이 모두 밑의 거듭제곱이어야 최대·최소가 정수로 떨어진다(밑 3 이면 [1/3, 9] 처럼). 구간은 반드시 양수 안에 있어야 한다."
    creative: "(1) 빈칸을 없애고 바로 최댓값·최솟값을 묻기(★1 유지) (2) 최댓값과 최솟값의 합·곱을 묻기(★1~2) (3) 밑을 0과 1 사이로 바꿔 증가·감소가 뒤집히는 짝 문항으로(104-247 이 그 짝) (4) 정의역을 부등식이 아니라 그래프로 주면 I-RT 가 생겨 ★2."
```

```yaml
- id: GN-ALG-104-247
  page: 104
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정의역이 1/9 이상 3 이하인 y=log_{1/3} x 의 최대·최소를 구하는 과정의 빈칸 채우기.
  category: '0<밑<1 → 감소 → 왼쪽 끝에서 최대, 오른쪽 끝에서 최소'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 밑이 0과 1 사이인 경우 닫힌구간 끝값'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/3 이 1보다 작아 감소함수이므로 최대·최소를 주는 끝이 104-246 과 반대로 뒤집힌다(x=1/9 에서 최대 2, x=3 에서 최소 -1). 대소 반전은 T-부호 함정으로만 셌다. 개념원리 익히기·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '밑 1/3<1 → 감소 → x=1/9 에서 최대 2, x=3 에서 최소 -1'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '감소, $\dfrac{1}{9}$, $2$, $3$, $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/104-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/3 → 1/2, 1/5)과 구간 끝을 바꿀 수 있다. 제약: 양 끝이 밑의 거듭제곱이어야 정수 답. 밑을 1보다 크게 바꾸면 최대·최소를 주는 끝이 반대가 되므로 정답 배치를 함께 고쳐야 한다."
    creative: "(1) 밑을 문자 a 로 두고 a>1 / 0<a<1 을 나눠 답하게 하면 I-MI 가 생겨 ★2~3 (2) 최댓값이 2 가 되도록 하는 정의역의 왼쪽 끝을 묻는 역방향(★2) (3) 같은 구간에서 y=log_3 x 와 값을 비교시키기(★2)."
```

```yaml
- id: GN-ALG-104-248
  page: 104
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 로그함수의 최댓값·최솟값 구하기. ⑴⑵ 는 닫힌구간, ⑶⑷ 는 한쪽이 열린 무한구간이라 한쪽 값은 존재하지 않는다.
  category: '밑의 대소로 증가·감소 판정 → 닫힌구간은 양 끝, 무한구간은 한쪽만 존재'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 닫힌구간과 무한구간에서 최대·최소의 존재'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 끝값 대입, ⑶⑷ 는 구간이 한쪽으로 열려 있어 그쪽 값이 없다고 답해야 한다(T-범위). 네 소문항이 같은 판정을 반복하므로 단계 수만 늘어날 뿐 도구는 하나다. 개념원리 익히기·통찰 없음·M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: '밑의 대소로 증가·감소 판정 → 닫힌구간이면 양 끝값, 무한구간이면 닫힌 쪽 끝값만 존재'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 최댓값: $2$, 최솟값: $1$ ⑵ 최댓값: $2$, 최솟값: $-1$ ⑶ 최솟값: $0$, 최댓값: 없다. ⑷ 최댓값: $4$, 최솟값: 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/104-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 밑과 구간 끝을 바꿀 수 있다. 제약: 닫힌 쪽 끝은 밑의 거듭제곱으로 두어 정수 답을 만들고, 무한구간 소문항은 열린 쪽이 반드시 x→∞ 또는 x→0+ 로 가야 한쪽 값이 없다는 결론이 유지된다."
    creative: "(1) 네 개 중 최댓값이 존재하는 것만 고르게 하는 ㄱㄴㄷ 보기(★2 · I-MI d1) (2) 구간을 x>1 처럼 열린 끝으로 바꿔 최솟값도 없게 만들기(경계 판정이 추가돼 ★2) (3) 최댓값과 최솟값의 차가 3 이 되도록 구간을 정하게 하는 역방향(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-105-e9
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ y=log_2 (x-2) (4≤x≤6) ⑵ y=log_{1/3}(x+1)-2 (2≤x≤8) 의 최댓값과 최솟값.
  category: '진수 일차식의 범위를 먼저 구함 → 밑의 대소로 끝값 배정 → 상수항 평행이동'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 일차식인 경우'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 x-2 는 2~4, x+1 은 3~9 로 먼저 옮긴 뒤 밑으로 끝을 배정하고 마지막에 -2 를 더한다. 일차식이라 진수가 단조이므로 구간 안에서 뒤집힐 일이 없다. 필수 예제 출발점 ★2 를 유지(통찰 없음·M_total 5 지만 진수 범위 이동과 밑<1 반전 두 층이 겹침).
  tier: star_2
  mechanism_primary: '진수의 범위 → 밑의 대소로 최대·최소 끝 배정 → 상수항 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $2$, 최솟값: $1$ ⑵ 최댓값: $-3$, 최솟값: $-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/105-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 평행이동량(-2, +1)·상수항(-2)·구간 끝을 바꿀 수 있다. 제약: 옮긴 뒤 진수의 양 끝이 밑의 거듭제곱이어야 정수 답이 나오고, 구간 전체에서 진수가 양수여야 한다."
    creative: "(1) 진수의 계수를 2x+1 처럼 만들어 범위 계산을 한 겹 늘리기(★2 유지) (2) 상수항을 문자로 두고 최댓값이 0 이 되게 하는 값을 묻는 역방향(★2) (3) 진수를 일차식에서 이차식으로 바꾸면 꼭짓점 판정이 생겨 ★2~3(106-e11 골조)."
```

```yaml
- id: GN-ALG-105-249
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ y=log_2 (x+1)-3 (1≤x≤7) ⑵ y=log_{1/3}(2x+1)+3 (1≤x≤4) 의 최댓값과 최솟값.
  category: '진수 일차식의 범위 → 밑의 대소로 끝값 배정 → 상수항 평행이동'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 일차식인 경우'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    105-e9 의 유제로 골조가 같다. ⑵ 는 진수의 계수가 2 여서 범위 이동이 한 겹 더 있고 밑이 1/3 이라 끝 배정이 뒤집힌다. 필수 예제 구역의 확인체크·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '진수의 범위 → 밑의 대소로 끝 배정 → 상수항 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $0$, 최솟값: $-2$ ⑵ 최댓값: $2$, 최솟값: $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/105-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 일차계수·상수항과 구간을 바꿀 수 있다. 제약: 2x+1 형태에서는 구간 끝을 넣은 값이 밑의 거듭제곱이 되도록 구간을 정해야 한다(1≤x≤4 → 3≤2x+1≤9)."
    creative: "(1) 최댓값과 최솟값의 차를 묻기(★2) (2) 두 소문항의 최댓값이 같아지도록 상수항을 정하게 하기(★3 · I-BW d1) (3) 밑을 문자로 두고 최솟값이 존재할 조건을 묻기(★3)."
```

```yaml
- id: GN-ALG-105-250
  page: 105
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    정의역이 6 이상 8 이하인 y=log_{1/2}(x-a) 의 최솟값이 -2 일 때 최댓값 구하기(a 는 상수).
  category: '밑<1 → 오른쪽 끝이 최소 → a 결정 → 왼쪽 끝에서 최대'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 일차식 · 최솟값 조건에서 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 1/2<1 이므로 진수가 가장 큰 x=8 에서 최솟값이 나온다는 배정을 먼저 하고, 거기서 a 를 정한 뒤 x=6 을 넣어 최댓값을 얻는다. 미정계수가 하나 들어와 M_a 가 2 로 올라가지만 역추적이 한 겹이라 통찰로 세지 않았다. 확인체크·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑<1 → x=8 에서 최소 → log_{1/2}(8-a)=-2 로 a 결정 → x=6 대입해 최대'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/105-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역의 양 끝(6, 8)과 주어진 최솟값(-2)을 바꿀 수 있다. 제약: 구한 a 가 정의역의 왼쪽 끝보다 작아야 구간 전체에서 진수가 양수이고, 8-a 와 6-a 가 모두 2 의 거듭제곱이어야 답이 정수로 떨어진다."
    creative: "(1) 최댓값을 주고 최솟값을 묻는 방향 바꾸기(★2 유지) (2) 밑을 문자 a 로 최솟값 조건을 주면 밑의 범위 판정이 생겨 ★3 (3) 진수를 x-a 에서 이차식으로 바꾸면 꼭짓점의 구간 포함 여부까지 따져야 해 ★3."
```

```yaml
- id: GN-ALG-106-e10
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    y=log_2 (x^2-4x+6) 이 x=a 에서 최솟값 b 를 가질 때 a+b 의 값.
  category: '진수 이차식을 완전제곱으로 → 꼭짓점에서 진수 최소 → 밑>1 이므로 그대로 최소'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식인 경우(정의역 제한 없음)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수를 (x-2)^2+2 로 고치면 최솟값 2 가 x=2 에서 나오고, 밑 2>1 이라 그 자리가 그대로 함수의 최솟값이 된다. 정의역 제한이 없어 꼭짓점이 항상 살아 있고 진수도 늘 양수다. 필수 예제·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '진수 완전제곱 → 꼭짓점 (2, 2) → 밑>1 이므로 최소 log_2 2=1 → a+b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/106-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 상수항을 바꿀 수 있다. 제약: 판별식이 음수여서 진수가 모든 실수에서 양수여야 하고, 꼭짓점의 y 값이 밑의 거듭제곱이어야 b 가 정수다."
    creative: "(1) 밑을 1/2 로 바꿔 최댓값 문항으로 뒤집기(★2 · 106-251 골조) (2) 진수의 계수를 음수로 만들어 정의역 자체가 제한되게 하기(T-범위 추가 ★3) (3) 최솟값이 주어진 값이 되도록 상수항을 정하게 하는 역방향(★2~3)."
```

```yaml
- id: GN-ALG-106-e11
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    정의역이 -2 이상 1 이하인 y=log_{1/2}(-x^2-2x+7) 의 최댓값과 최솟값.
  category: '제한된 구간에서 진수 이차식의 최대·최소 → 밑<1 이므로 대소 반전'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식인 경우(정의역이 제한된 경우)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 -(x+1)^2+8 의 꼭짓점 x=-1 이 구간 안에 있어 진수 최대 8, 진수 최소는 먼 끝 x=1 에서 4. 밑 1/2<1 이라 진수 최대가 함수의 최소가 되도록 뒤집어야 한다(T-부호). 꼭짓점의 구간 포함 확인(T-범위)까지 함정이 둘이라 M_total 6. 필수 예제·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: '진수 완전제곱 → 구간 [-2,1] 에서 진수 범위 4~8 → 밑<1 반전 → 최대 -2, 최소 -3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $-2$, 최솟값: $-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/106-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수·상수항과 정의역을 바꿀 수 있다. 제약: 구간 전체에서 진수가 양수여야 하고, 진수의 최대·최소가 모두 밑의 거듭제곱이어야 정수 답. 꼭짓점을 구간 밖으로 밀면 답 배치가 통째로 바뀐다."
    creative: "(1) 꼭짓점이 구간 밖에 놓이도록 정의역을 옮겨 단조 구간 문항으로(★2 유지지만 오답 유발력 상승) (2) 밑을 2 로 바꿔 최대·최소를 맞바꾸기(★2) (3) 정의역을 문자 구간 [k, k+1] 로 주면 경우 나누기가 생겨 ★4(I-MI d2)."
```

```yaml
- id: GN-ALG-106-251
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    y=log_2 (-x^2+6x+7) 이 x=a 에서 최댓값 b 를 가질 때 a+b 의 값.
  category: '진수 이차식의 최대 → 밑>1 이므로 그대로 최대'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식인 경우(정의역 제한 없음)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 -(x-3)^2+16 의 꼭짓점 x=3 에서 최대 16 이고 밑 2>1 이므로 그대로 함수의 최댓값 4. 진수의 계수가 음수라 정의역이 -1<x<7 로 제한되지만 꼭짓점이 그 안에 있어 결론이 바뀌지 않는다. 확인체크·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '진수 완전제곱 → 꼭짓점 (3, 16) → 밑>1 → 최대 log_2 16=4 → a+b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/106-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 일차계수·상수항을 바꿀 수 있다. 제약: 꼭짓점의 y 값이 밑의 거듭제곱이어야 b 가 정수이고, 진수가 양수인 구간이 비어 있지 않아야 한다."
    creative: "(1) 최솟값을 묻게 바꾸면 진수의 상한이 없어 답이 없다는 판정이 되어 ★2~3 (2) 밑을 1/2 로 바꿔 최솟값 문항으로(★2) (3) 최댓값이 4 가 되도록 상수항을 정하게 하는 역방향(★3 · I-BW d1)."
```

```yaml
- id: GN-ALG-106-252
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    y=log_a (x^2-2x+5) (0<a<1) 의 최댓값이 -2 일 때 상수 a 의 값.
  category: '밑<1 → 진수의 최솟값에서 함수 최대 → 밑에 대한 방정식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식 · 최댓값 조건에서 밑 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 (x-1)^2+4 의 최솟값 4 가 밑<1 때문에 함수의 최댓값 자리가 된다는 반전이 첫 관문이고, 그 뒤는 log_a 4=-2 를 지수로 옮겨 a 를 구하는 한 줄이다. 밑의 범위 0<a<1 이 주어져 있어 경우 나누기가 없으므로 통찰로 세지 않았다. 확인체크·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '진수 최소 4 → 밑<1 이므로 그 자리가 함수 최대 → log_a 4=-2 → a'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/106-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 상수항(진수의 최솟값)과 주어진 최댓값(-2)을 바꿀 수 있다. 제약: 진수의 최솟값이 구하려는 a 의 거듭제곱이어야 a 가 유리수로 떨어지고(4=(1/2)^{-2}), 0<a<1 조건과 모순되지 않아야 한다."
    creative: "(1) 0<a<1 조건을 빼고 최댓값이 존재할 밑의 범위까지 묻기(I-BW d2 추가 ★3 · 109-262 골조) (2) 최솟값 조건으로 바꾸면 a>1 이 되어 짝 문항(★2) (3) 정의역을 제한하면 꼭짓점 포함 여부가 더해져 ★3."
```

```yaml
- id: GN-ALG-106-253
  page: 106
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    정의역이 -3 이상 0 이하인 y=log_{1/2}(x^2+4x+8) 의 최댓값과 최솟값.
  category: '제한된 구간에서 진수 이차식의 최대·최소 → 밑<1 반전'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식인 경우(정의역이 제한된 경우)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 (x+2)^2+4 의 꼭짓점 x=-2 가 구간 [-3, 0] 안에 있어 진수 최소 4, 진수 최대는 먼 끝 x=0 에서 8. 밑 1/2 로 뒤집어 최대 -2, 최소 -3. 106-e11 의 유제로 꼭짓점 포함 확인(T-범위)과 반전(T-부호) 두 함정. 확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '진수 완전제곱 → 구간에서 진수 4~8 → 밑<1 반전 → 최대 -2, 최소 -3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $-2$, 최솟값: $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/106-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수·상수항과 정의역 양 끝을 바꿀 수 있다. 제약: 꼭짓점이 구간 안에 있어야 이 골조가 유지되고, 진수의 최대·최소가 모두 2 의 거듭제곱이어야 정수 답이다."
    creative: "(1) 꼭짓점을 구간 밖으로 보내 단조 구간으로 만들기(★2 · 오답률 상승) (2) 최댓값과 최솟값의 합을 묻기(★2) (3) 최솟값이 -3 이 되도록 정의역의 오른쪽 끝을 정하게 하는 역방향(★3)."
```

```yaml
- id: GN-ALG-107-e12
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ y=(log_3 x)^2-log_3 x^2+2 (3≤x≤9) ⑵ y=log_{1/2} x × log_{1/2}(4/x) (1/4≤x≤2) 의 최댓값과 최솟값.
  category: 'log_a x=t 치환 → t 의 범위 재설정 → t 에 대한 이차함수의 최대·최소'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 의 꼴이 반복되는 함수의 최대·최소(치환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    로그의 성질로 log_3 x^2=2t, log_{1/2}(4/x)=-2-t 처럼 한 문자 t 로 모으면 이차함수 문제가 된다. 핵심 함정은 x 의 구간을 t 의 구간으로 반드시 옮겨야 한다는 것(T-범위)과, 그 뒤 꼭짓점이 t 구간 안인지 확인하는 것이다. 치환 자체는 같은 대수 영역이라 표현 전환으로 세지 않았다. 필수 예제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 't=log_a x 치환 → x 구간을 t 구간으로 옮김 → 이차함수 꼭짓점·끝값 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $2$, 최솟값: $1$ ⑵ 최댓값: $1$, 최솟값: $-8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/107-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑, 진수 안의 상수(x^2 의 지수 · 4/x 의 4), 정의역 양 끝을 바꿀 수 있다. 제약: x 의 양 끝이 밑의 거듭제곱이어야 t 구간이 정수 구간이 되고, 꼭짓점의 t 값이 구간 안인지 밖인지에 따라 답이 달라지므로 둘 중 어느 쪽을 의도하는지 정해 두어야 한다."
    creative: "(1) 꼭짓점을 t 구간 밖으로 밀어 끝값끼리 비교하게 만들기(★2, 107-254 ⑴ 이 그 예) (2) 밑이 서로 다른 두 로그를 섞어 밑 변환을 먼저 시키기(★3 · 110-265) (3) 정의역을 없애고 최솟값만 묻기(★2) (4) 곱 대신 log x·log y 두 변수로 확장(★4)."
```

```yaml
- id: GN-ALG-107-254
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ y=(log_{1/3} x)^2-log_{1/3} x^2+2 (3≤x≤9) ⑵ y=log_3 (x/9) × log_3 (3/x) (1≤x≤27) 의 최댓값과 최솟값.
  category: 'log_a x=t 치환 → t 범위 재설정 → 이차함수 · 꼭짓점이 구간 밖인 경우 포함'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 의 꼴이 반복되는 함수의 최대·최소(치환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 밑이 1/3 이어서 t 구간이 음수 구간 [-2, -1] 로 가고 꼭짓점 t=1 이 구간 밖이라 양 끝값만 비교한다 — 치환 뒤 구간을 다시 잡지 않으면 바로 틀리는 자리다. ⑵ 는 진수를 나누어 (t-2)(1-t) 로 펴면 꼭짓점이 구간 안에 들어온다. 확인체크·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 't=log_a x 치환 → t 구간 재설정 → 꼭짓점의 구간 포함 여부로 최대·최소 자리 결정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $10$, 최솟값: $5$ ⑵ 최댓값: $\dfrac{1}{4}$, 최솟값: $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/107-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/3, 3)·진수의 상수(9, 3)·정의역을 바꿀 수 있다. 제약: ⑵ 처럼 꼭짓점이 구간 중앙에 오면 양 끝값이 같아져 최솟값이 두 곳에서 나오므로 의도한 답 형태를 먼저 정한다. x 의 끝은 밑의 거듭제곱으로."
    creative: "(1) 최댓값을 주는 x 의 값을 함께 묻기(★2) (2) 두 소문항의 최솟값이 같아지도록 상수를 정하게 하기(★3) (3) t 구간을 문자로 두고 최댓값의 위치가 바뀌는 지점을 묻기(★4 · I-MI d2)."
```

```yaml
- id: GN-ALG-107-255
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    y=2(log_3 x)^2+a log_3 (1/x^2)+b 가 x=1/3 에서 최솟값 1 을 가질 때 상수 a, b 에 대하여 a+b 의 값.
  category: '치환해 t 에 대한 이차함수 → 꼭짓점의 위치와 값이 주어진 조건 → 미정계수 두 개'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환형 · 꼭짓점 조건에서 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_3 (1/x^2)=-2t 로 정리하면 y=2t^2-2at+b 이고, 최솟값을 주는 x=1/3 은 t=-1 을 뜻하므로 꼭짓점의 t 좌표로 a 를, 최솟값 1 로 b 를 차례로 얻는다. 미정계수가 둘이라 M_a·M_k 가 오르지만 조건 → 꼭짓점 대응이 한 겹이라 통찰로 세지 않았다. 확인체크·M_total 7 → ★2 유지(치환형 중 상단).
  tier: star_2
  mechanism_primary: 'log_3 (1/x^2)=-2t 정리 → y=2t^2-2at+b → 꼭짓점 t=-1 에서 a, 최솟값 1 에서 b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/107-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항의 계수(2)·최솟값을 주는 x(1/3)·최솟값(1)을 바꿀 수 있다. 제약: 최솟값을 주는 x 가 밑의 거듭제곱이어야 t 가 정수가 되고, 꼭짓점의 t 좌표에서 나온 a 가 유리수로 떨어져야 한다."
    creative: "(1) 최댓값 조건으로 바꾸려면 이차항의 계수를 음수로(★2) (2) 정의역을 제한해 꼭짓점이 구간 밖이 되게 하면 조건 해석이 한 겹 늘어 ★3 (3) a, b 대신 밑을 미지수로 두기(★3~4)."
```

```yaml
- id: GN-ALG-108-e13
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    정의역이 1 ≤ x ≤ 100 인 함수 y=x^(2+log x) 의 최댓값과 최솟값.
  category: '양변에 상용로그 → t=log x 치환 → t 의 이차식의 최대·최소 → 다시 y 로 복원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'y 를 직접 다루지 않고 양변에 상용로그를 취해 log y 의 최대·최소 문제로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '지수에 로그가 포함된 함수의 최대·최소(양변 로그)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수에 로그가 들어 있어 그대로는 증감을 볼 수 없고, 양변에 상용로그를 취해야 log y=(2+log x)log x 라는 t 의 이차식이 된다. t=log x 의 범위 0 ≤ t ≤ 2 에서 t^2+2t 는 증가하므로 양끝에서 최대·최소가 나오고, 마지막에 log y 값을 y 로 되돌리는 복원이 함정이다. 필수 ★2 출발이지만 양변 로그 착안(EQV d1)이 이 단원에서 처음 등장하는 도구라 +1 → ★3.
  tier: star_3
  mechanism_primary: '양변에 log → log y=(2+log x)log x → t=log x (0 ≤ t ≤ 2) 이차식 → 양끝에서 log y 최대·최소 → y=10^(그 값)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '최댓값: $10^8$, 최솟값: $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/108-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 상수항(2)과 정의역 양끝(1, 100)을 바꿀 수 있다. 제약: 양끝이 10 의 거듭제곱이어야 t 가 정수로 떨어지고, 꼭짓점 t=-1 이 정의역 밖에 있어야 양끝에서 최대·최소가 나온다."
    creative: "(1) 정의역을 꼭짓점이 들어오게 넓히면 최솟값이 꼭짓점에서 나와 한 겹 늘어남(★3) (2) 밑을 10 대신 2 로 두고 y=x^(log_2 x) 꼴로(★3) (3) 최댓값만 주고 정의역의 오른쪽 끝을 미지수로 두면 역추적 ★4."
```

```yaml
- id: GN-ALG-108-256
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    정의역이 1 ≤ x ≤ 1000 인 함수 y=(100x)^(6-log x) 가 x=a 에서 최댓값 b 를 가질 때 ab 의 값.
  category: '양변에 상용로그 → t=log x 치환 → (6-t)(2+t) 의 꼭짓점 → a 와 b 를 10 의 거듭제곱으로 복원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '양변에 상용로그를 취해 지수에 든 로그를 t 의 이차식으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '지수에 로그가 포함된 함수의 최대·최소(양변 로그)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑 100x 에도 로그를 풀어야 2+log x 가 나오므로 log y=(6-t)(2+t) 꼴이 되고, 꼭짓점 t=2 가 정의역 0 ≤ t ≤ 3 안에 있어 양끝이 아니라 꼭짓점에서 최댓값이 나온다. 마지막에 a=10^2, b=10^16 으로 둘 다 복원해야 ab 를 얻는다. e13 과 같은 골조에 꼭짓점 판정과 이중 복원이 더해져 확인체크지만 ★3.
  tier: star_3
  mechanism_primary: '양변에 log → log y=(6-t)(2+t), t=log x (0 ≤ t ≤ 3) → 꼭짓점 t=2 → a=10^2, b=10^16 → ab'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10^{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/108-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 상수(100)·지수의 상수(6)·정의역 오른쪽 끝(1000)을 바꿀 수 있다. 제약: 꼭짓점의 t 가 정의역 안의 정수로 떨어져야 a 가 10 의 거듭제곱이 되고, 두 끝의 t 가 정수여야 비교가 깔끔하다."
    creative: "(1) 꼭짓점이 정의역 밖이 되게 구간을 옮기면 양끝 비교로 내려감(★2~3) (2) 최솟값을 묻게 바꾸면 꼭짓점에서 먼 끝을 골라야 함(★3) (3) 밑을 100x 대신 100x^2 로 두면 t 의 계수가 2 가 되어 계산이 한 겹 늘어남(★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-109-257
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역이 1 ≤ x ≤ 5 인 함수 y=log_2 (x+3)-1 의 최댓값 M 과 최솟값 m 에 대하여 Mm 의 값.
  category: '밑이 1 보다 커 증가 → 정의역 양끝 대입 → 두 값의 곱'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 일차식인 경우'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 2 가 1 보다 커 증가함수이므로 최대·최소가 정의역 양끝에서 바로 나오고, 진수 x+3 이 8 과 4 라 로그값이 2 와 1 로 떨어진다. 통찰 없음·M_total 4 라 −1 후보이긴 하지만 최댓값과 최솟값을 각각 구해 곱까지 가는 두 겹이라 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '증가함수 판정 → x=5 에서 M=2, x=1 에서 m=1 → Mm'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(+3, -1)과 정의역 양끝(1, 5)을 바꿀 수 있다. 제약: 정의역 전체에서 진수가 양수여야 하고, 양끝의 진수가 2 의 거듭제곱이어야 M·m 이 정수로 떨어진다."
    creative: "(1) Mm 대신 M-m, M/m 으로 결합만 바꾸기(★2 유지) (2) 밑을 1/2 로 바꿔 최대·최소를 뒤집기(★2 · T-부호 추가) (3) 정의역의 한쪽 끝을 미지수로 두고 Mm 값을 주면 역추적 ★3."
```

```yaml
- id: GN-ALG-109-258
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역이 21 ≤ x ≤ 27 인 f(x)=-log_(1/3) x^2 의 최댓값 M 과 g(x)=log_(1/3) (x-18)+2 의 최솟값 m 에 대하여 M+m 의 값.
  category: '앞의 부호와 밑을 정리해 f 를 증가함수로 → 두 함수의 증감을 각각 판정 → 양끝 대입 → 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 로그함수의 최댓값·최솟값을 각각 구해 결합하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 는 -log_(1/3) x^2=2log_3 x 로 정리되어 증가함수이므로 오른쪽 끝 x=27 에서 최대 6, g 는 밑이 1 보다 작아 감소함수이므로 같은 오른쪽 끝에서 최소 0 이 된다. 앞의 마이너스 부호가 증감을 뒤집는 것이 유일한 함정(T-부호)이고 나머지는 양끝 대입뿐이다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'f=-log_(1/3) x^2=2log_3 x (증가) → x=27 에서 M=6 · g 는 감소 → x=27 에서 m=0 → M+m'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역(21~27)과 g 의 평행이동량(-18, +2)을 바꿀 수 있다. 제약: 두 진수가 정의역 전체에서 양수여야 하고, 최대·최소를 주는 끝값의 진수가 3 의 거듭제곱이어야 답이 정수가 된다."
    creative: "(1) f 의 최솟값과 g 의 최댓값을 묻도록 뒤집기(★2) (2) 두 함수의 밑을 서로 다르게 해 밑 변환을 한 겹 추가(★3) (3) M+m 대신 f(x)+g(x) 의 최댓값을 묻게 하면 두 로그를 하나로 묶는 단계가 생겨 ★3."
```

```yaml
- id: GN-ALG-109-259
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=log_(1/2) x, g(x)=x^2+ax+b 에 대하여 합성함수 (f∘g)(x) 가 x=-3 에서 최댓값 -1 을 가질 때 상수 a, b 의 합.
  category: '밑이 1 보다 작으므로 합성함수의 최대 ↔ 진수 g 의 최소 → 꼭짓점 조건에서 a → 최댓값 조건에서 b'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '합성함수의 최대·최소 조건에서 진수 이차식의 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑이 1/2 이라 합성함수가 최대가 되는 자리는 진수 g 가 최소가 되는 꼭짓점이고, 그 x 좌표가 -3 이라는 조건에서 a=6 이 나온다. 이어 최댓값 -1 에서 g(-3)=2 를 얻어 b=11. 밑이 1 보다 작을 때의 뒤집기는 이 단원의 표준 절차라 통찰로 세지 않았고, 미정계수가 둘이라 M_a·M_k 만 올라간다. STEP 1 중 상단이지만 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '밑 1/2 → 최대 ↔ g 의 최소 → 꼭짓점 x=-3 에서 a=6 → log_(1/2) g(-3)=-1 에서 b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 x 좌표(-3)·최댓값(-1)·밑(1/2)을 바꿀 수 있다. 제약: g 의 최솟값이 양수여야 로그가 정의되고, 최댓값에서 얻은 g 의 값이 밑의 거듭제곱이어야 b 가 정수로 떨어진다."
    creative: "(1) 밑을 2 로 바꾸면 최댓값이 없어지고 최솟값 문제가 되어 존재 판정이 붙음(★3) (2) g 를 일차식으로 낮추면 꼭짓점 단계가 사라져 ★2 아래 (3) a, b 대신 밑을 미지수로 두면 역추적이 한 겹 늘어 ★3."
```

```yaml
- id: GN-ALG-109-260
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1 ≤ x ≤ 4 일 때 함수 y=log_(1/2) (x^2-4x+8) 의 최솟값.
  category: '밑이 1 보다 작으므로 y 의 최소 ↔ 진수의 최대 → 제한된 정의역에서 이차식의 최댓값 → 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 최대·최소; 진수가 이차식인 경우(정의역이 제한된 경우)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수 (x-2)^2+4 는 1 ≤ x ≤ 4 에서 꼭짓점이 아니라 꼭짓점에서 먼 끝 x=4 에서 최대 8 이 되고, 밑이 1/2 이라 바로 그 자리에서 y 가 최소 -3 이 된다. 꼭짓점이 아니라 먼 끝을 보는 것이 유일한 함정이며 골조는 106-e11 과 같다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '밑 1/2 → 최소 ↔ 진수 최대 → (x-2)^2+4 의 최대는 x=4 에서 8 → log_(1/2) 8'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 이차식의 계수와 정의역 양끝(1, 4)을 바꿀 수 있다. 제약: 정의역 전체에서 진수가 양수여야 하고, 최대가 되는 끝의 진수가 2 의 거듭제곱이어야 답이 정수로 떨어진다."
    creative: "(1) 꼭짓점이 정의역 밖이 되게 구간을 옮기면 단조구간 문제로 내려감(★2) (2) 최댓값까지 함께 묻기(★2) (3) 진수의 상수항을 미지수로 두고 최솟값을 주면 역추적 ★3."
```

```yaml
- id: GN-ALG-109-261
  page: 109
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    함수 y=log_3 3x × log_3 (9/x) 의 최댓값.
  category: '로그의 성질로 두 인수를 t=log_3 x 의 일차식으로 → 곱을 전개한 이차함수 → 꼭짓점'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 의 꼴이 반복되는 함수의 최대·최소(치환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_3 3x=1+t, log_3 (9/x)=2-t 로 풀면 곱이 t 의 이차함수가 되고 t^2 의 계수가 음수라 꼭짓점 값이 그대로 최댓값이다. 정의역 제한이 없어 구간 판정도 필요 없다. 치환형의 기본형이고 통찰 없음·M_total 5 지만 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 't=log_3 x 치환 → (1+t)(2-t) 전개 → 꼭짓점 t=1/2 에서 최댓값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 로그 안의 상수(3, 9)를 바꿀 수 있다. 제약: 최댓값을 묻는 한 두 인수의 t 계수가 반대 부호여야 하고, 꼭짓점 값이 유리수로 떨어져야 한다."
    creative: "(1) 정의역을 붙여 t 의 범위를 제한하면 꼭짓점 포함 여부 판정이 붙어 ★3 (2) 두 인수의 밑을 다르게 해 밑 통일을 한 겹 추가(★3) (3) 최댓값을 주고 안의 상수를 미지수로 두면 역추적 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-109-262
  page: 109
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    함수 y=log_a (x+2)+log_a (4-x) 의 최솟값이 -2 일 때 상수 a 의 값.
  category: '두 로그를 하나로 묶어 진수를 이차식으로 → 진수 값의 범위가 반열린 구간 → 최솟값이 존재하는 밑의 범위만 남김 → a 결정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '밑이 1 보다 큰 경우와 0 과 1 사이인 경우로 갈라 본 뒤, 앞의 경우는 최솟값이 존재하지 않아 기각해야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 로그의 합의 최솟값 조건에서 밑 결정(밑의 범위 분기·기각)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 로그를 합치면 진수가 -(x-1)^2+9 이고 정의역 -2<x<4 에서 값의 범위는 0 을 포함하지 않는 반열린 구간이다. 밑이 1 보다 크면 진수가 0 에 가까워질 때 아래로 발산해 최솟값이 없으므로 그 분기를 기각해야 하고, 0<a<1 에서 log_a 9=-2 로 a 가 정해진다. 기각 단계를 빼면 최댓값 쪽으로 잘못 가므로 VF d2 로 세었다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '두 로그 합치기 → 진수 -(x-1)^2+9 의 범위 (0, 9] → a>1 분기 기각 → 0<a<1 에서 log_a 9=-2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차 진수의 근(-2, 4)과 주어진 최솟값(-2)을 바꿀 수 있다. 제약: 두 진수의 곱의 최댓값이 a 의 거듭제곱이어야 하고, 진수의 값의 범위가 0 을 포함하는 반열린 구간이어야 한쪽 분기가 기각된다."
    creative: "(1) 최댓값 조건으로 바꾸면 반대로 a>1 분기가 살아남아 같은 골조(★3) (2) 진수를 셋으로 늘리되 하나를 상수로 두기(★3) (3) 최솟값이 존재할 a 의 범위 자체를 묻게 하면 기각 논증이 답이 되어 ★4."
```

```yaml
- id: GN-ALG-109-263
  page: 109
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=(1/5)^(-x^2-4x-5) 와 g(x)=log_2 (x^2+4x+k) 의 최솟값이 서로 같을 때 상수 k 의 값.
  category: '지수의 최댓값 → 밑이 1 보다 작은 지수함수의 최솟값 → 로그함수는 진수의 최솟값에서 최소 → 두 최솟값을 같다고 놓기'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수함수와 로그함수의 최솟값이 같을 조건에서 미정계수 결정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 지수 -(x+2)^2-1 이 x=-2 에서 최대이고 밑이 1/5 이라 바로 그 자리에서 함숫값이 최소가 된다. g 는 밑이 2 라 진수 (x+2)^2+k-4 가 최소일 때 최소가 되므로 log_2 (k-4) 를 f 의 최솟값과 같다고 놓으면 k 가 나온다. 두 뒤집기 모두 이 단원의 표준 절차라 통찰로 세지 않았고 단계 수만 늘어 M_total 8. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '지수 최대 -1 → f 의 최솟값 5 → g 의 최솟값 log_2 (k-4) → log_2 (k-4)=5'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/109-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 계수와 지수함수의 밑(1/5)을 바꿀 수 있다. 제약: f 의 최솟값이 2 의 거듭제곱이어야 k 가 정수로 떨어지고, g 의 진수의 최솟값 k-4 가 양수여야 한다."
    creative: "(1) 두 함수의 최댓값이 같을 조건으로 바꾸면 정의역 제한이 필요해 ★3~4 (2) 지수함수의 밑을 1 보다 크게 두면 최솟값이 없어져 존재 조건 논증이 붙어 ★4 (3) k 대신 g 의 일차항 계수를 미지수로 두기(★3)."
```

```yaml
- id: GN-ALG-110-264
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    -1 ≤ x ≤ 2 에서 f(x)=log_3 (x^2-2x+k) 의 최솟값이 -1 일 때 최댓값 log_3 M 의 M 의 값.
  category: '진수의 꼭짓점이 정의역 안임을 확인 → 최솟값 조건에서 k 결정 → 꼭짓점에서 먼 끝의 진수로 최댓값'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '진수가 이차식인 로그함수의 최솟값 조건에서 미정계수 결정 후 최댓값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    진수 (x-1)^2+k-1 의 꼭짓점 x=1 이 정의역 안이라 최솟값은 꼭짓점에서 나오고 log_3 (k-1)=-1 에서 k 가 정해진다. 최댓값은 꼭짓점에서 먼 끝 x=-1 의 진수 k+3 이므로 M 이 바로 나온다. 꼭짓점 포함 여부와 먼 끝 선택이 함정이지만 둘 다 이 단원의 표준 절차라 통찰로 세지 않았다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '꼭짓점 x=1 정의역 안 → log_3 (k-1)=-1 로 k → 먼 끝 x=-1 의 진수 k+3=M'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{13}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 양끝(-1, 2)·진수의 일차항 계수·주어진 최솟값(-1)을 바꿀 수 있다. 제약: 꼭짓점이 정의역 안에 있어야 하고, 최솟값에서 얻은 k 로 진수가 정의역 전체에서 양수여야 한다."
    creative: "(1) 꼭짓점이 정의역 밖이 되게 하면 최솟값도 끝값이 되어 단조 문제로 내려감(★2~3) (2) 밑을 1/3 로 바꿔 최대·최소를 뒤집기(★3) (3) 최댓값과 최솟값의 차를 주고 k 를 묻게 하면 두 끝을 동시에 다뤄야 해 ★4."
```

```yaml
- id: GN-ALG-110-265
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    함수 y=(log_2 x)^2+a log_4 x+2 가 x=1/4 에서 최솟값 b 를 가질 때 a+b 의 값.
  category: '밑을 2 로 통일해 log_4 x=t/2 → t 의 이차식 → 꼭짓점 조건에서 a → 대입해서 b'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환형 · 꼭짓점 조건에서 미정계수 결정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑이 다른 log_4 x 를 log_2 x 의 절반으로 바꿔 t 의 이차식으로 통일하는 것이 추가되는 유일한 단계이고, x=1/4 이 t=-2 를 뜻하므로 꼭짓점 조건에서 a 를, 대입해서 b 를 얻는다. 골조와 M·I 는 107-255(확인체크 ★2)와 사실상 같고 밑 통일 한 겹만 더 붙는다.
    [분류 이슈] M·I 만 보면 ★2 쪽이나 STEP 2 벤더 신호를 따라 ★3 으로 두었다(1단 차이).
  tier: star_3
  mechanism_primary: 'log_4 x=t/2 로 통일 → y=t^2+(a/2)t+2 → 꼭짓점 t=-2 에서 a → b'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 조합(log_2, log_4)·최솟값을 주는 x(1/4)·상수항(2)을 바꿀 수 있다. 제약: 두 밑이 거듭제곱 관계여야 한 문자로 통일되고, 최솟값을 주는 x 가 2 의 거듭제곱이어야 t 가 정수가 된다."
    creative: "(1) 밑을 log_2 와 log_8 로 두면 계수가 1/3 이 되어 계산 부담만 늘어남(질 저하 주의) (2) 정의역을 붙여 꼭짓점이 구간 밖이 되게 하면 조건 해석이 한 겹 늘어 ★4 (3) b 를 주고 밑을 미지수로 두면 역추적 ★4."
```

```yaml
- id: GN-ALG-110-266
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    각 A 가 직각이고 AB=2log_2 x, AC=log_4 (16/x) 인 삼각형 ABC (1<x<16) 의 넓이 S(x) 가 x=a 에서 최댓값 M 을 가질 때 a+M 의 값. 5지선다.
  category: '직각을 낀 두 변의 곱의 절반으로 넓이식 → 밑을 2 로 통일하고 t=log_2 x 치환 → 이차함수의 꼭짓점 → a 와 M'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '도형 조건(직각을 낀 두 변)을 t=log_2 x 에 대한 이차함수로 옮겨야 최대 문제가 됨'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '도형의 넓이로 주어진 로그식의 최대·최소(치환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직각을 낀 두 변이 주어졌으므로 넓이는 두 변의 곱의 절반이고, 밑을 2 로 통일해 t=log_2 x 로 치환하면 S 가 t 의 위로 볼록한 이차함수가 된다. 기하 설정을 로그 치환 이차로 옮기는 전환(RT d2)이 핵심이고 그 뒤는 꼭짓점 계산과 a 복원뿐이다. 평가원 기출·STEP 2 지만 전환이 한 겹이라 ★3 유지.
  tier: star_3
  mechanism_primary: 'S=(1/2)·AB·AC → 밑 통일·t=log_2 x 치환 → S=-(1/2)(t-2)^2+2 → t=2 에서 a=4, M=2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 로그 계수와 밑(2, 4), 진수의 상수(16), x 의 범위를 바꿀 수 있다. 제약: 두 변이 모두 양수인 범위 안에 꼭짓점이 들어와야 하고, 두 밑이 거듭제곱 관계여야 한 문자로 통일된다."
    creative: "(1) 직각이 아닌 각으로 바꾸면 사인값이 상수배로 곱해질 뿐 골조 유지(★3) (2) 넓이 대신 둘레나 빗변을 묻게 하면 제곱근이 붙어 계산 마찰만 늘어남(질 저하 주의) (3) 최댓값을 주고 진수의 상수를 미지수로 두면 역추적 ★4."
```

```yaml
- id: GN-ALG-110-267
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x>1 일 때 함수 y=log_4 x+log_x 256 의 최솟값.
  category: '밑 변환으로 두 항을 t 와 4/t 로 → x>1 에서 t>0 확인 → 산술·기하평균으로 최솟값'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '로그 단원 안에서 절대부등식(산술·기하평균)을 끌어와 t+4/t 의 최솟값과 등호 조건을 잡음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '밑 변환 후 산술·기하평균으로 로그식의 최솟값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑 변환으로 log_x 256 을 4/log_4 x 로 바꾸면 t+4/t 꼴이 되고, x>1 이라 t>0 이므로 산술·기하평균을 쓸 수 있어 최솟값과 등호 성립 조건이 한 번에 나온다. t>0 확인을 빠뜨리면 부등식을 쓸 수 없다는 점이 함정이다.
    [분류 이슈] 다른 단원의 절대부등식을 끌어오는 결합(XU d2)이라 ★4 후보이기도 하나, 교과서 표준 조합이라 +1 하지 않고 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: 'log_x 256=4/t (t=log_4 x) → x>1 에서 t>0 → t+4/t ≥ 2√4 → t=2 에서 최솟값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(4, x)과 진수의 상수(256)를 바꿀 수 있다. 제약: 진수가 밑의 거듭제곱이어야 t+k/t 의 k 가 정수가 되고, 최솟값 2√k 가 유리수로 떨어져야 한다."
    creative: "(1) 범위를 0<x<1 로 바꾸면 t<0 이라 부호를 뒤집어야 최대 문제가 되고 기각 논증이 붙어 ★4 (2) 항을 셋으로 늘려 세 수의 산술·기하평균으로(★4) (3) 최솟값을 주고 진수의 상수를 미지수로 두면 역추적 ★3."
```

```yaml
- id: GN-ALG-110-268
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정의역이 1 ≤ x ≤ 4 인 함수 y=16 x^(log_2 x^3-6) 의 최댓값 M 과 최솟값 m 에 대하여 M+m 의 값.
  category: '양변에 log_2 → t=log_2 x 의 이차식 → 꼭짓점과 양끝을 모두 비교 → y 로 복원해 합'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '지수에 로그가 든 꼴이라 양변에 log_2 를 취해 log_2 y 의 이차식 최대·최소 문제로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '지수에 로그가 포함된 함수의 최대·최소(양변 로그)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 log_2 를 취하면 앞의 상수 16 이 4 로 풀리고 log_2 y=3t^2-6t+4 가 된다. 0 ≤ t ≤ 2 에서 꼭짓점 t=1 이 안에 들어 최솟값이 되고 양끝 t=0, 2 가 같은 값으로 최댓값이 되므로 꼭짓점과 양끝을 모두 비교해야 한다. 마지막에 M 과 m 을 각각 2 의 거듭제곱으로 복원. e13 계열 골조에 꼭짓점·양끝 비교와 이중 복원이 더해진 STEP 2 ★3.
  tier: star_3
  mechanism_primary: '양변 log_2 → log_2 y=3t^2-6t+4 (t=log_2 x, 0 ≤ t ≤ 2) → 꼭짓점 t=1 에서 최소, 양끝에서 최대 → 2^(값) 으로 복원'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞의 상수(16)·지수의 계수(3)와 상수(-6)·정의역 양끝(1, 4)을 바꿀 수 있다. 제약: 양끝이 2 의 거듭제곱이어야 t 가 정수가 되고, 꼭짓점이 정의역 안에 있어야 최솟값이 끝값과 갈린다."
    creative: "(1) 꼭짓점을 정의역 밖으로 밀면 양끝만 비교해 ★3 아래로 (2) 밑을 10 으로 바꿔 상용로그 꼴로(★3 유지) (3) M+m 대신 log_2 M+log_2 m 을 묻게 하면 복원 단계가 빠져 ★2~3."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-110-269
  page: 110
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    함수 y=3^(log x) × x^(log 3)-3(3^(log x)+x^(log 3))+7 이 x=a 에서 최솟값 b 를 가질 때 a/b 의 값.
  category: 'x^(log 3)=3^(log x) 임을 알아채 한 문자로 묶기 → u 의 이차함수 → u>0 에서 꼭짓점 → a 와 b'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '밑과 진수가 서로 바뀐 두 지수식이 상용로그를 취하면 지수가 모두 (log 3)(log x) 로 같아 한 문자로 묶인다는 대칭을 활용'
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: '밑과 지수가 뒤바뀐 두 지수식을 한 문자로 묶어 이차함수로 만들기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 지수식이 서로 같다는 것을 알아채야 식이 u^2-6u+7 로 접히고, 이를 못 보면 문자가 둘인 문제로 보여 손을 대지 못한다. u=3^(log x)>0 이고 꼭짓점 u=3 이 범위 안이라 최솟값이 나오며, 거기서 log x=1 로 a 를 복원한다. 대칭 착안(SYM d3) 하나가 난이도의 전부인 실력 UP 문항이라 ★4. ★5 는 통찰 3개 이상이 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: 'x^(log 3)=3^(log x)=u>0 로 묶기 → y=u^2-6u+7 → 꼭짓점 u=3 에서 b → 3^(log x)=3 에서 a=10'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/110-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·일차항의 계수(-3)·상수항(7)을 바꿀 수 있다. 제약: 두 지수식이 같아지려면 밑과 진수가 서로 바뀐 짝이어야 하고, 꼭짓점의 u 값이 그 밑의 거듭제곱이어야 a 가 10 의 거듭제곱으로 떨어진다."
    creative: "(1) 합과 곱은 그대로 두고 상수항만 바꿔 최솟값을 조절(★4 유지) (2) 계수를 조절해 꼭짓점의 u 가 음수가 되게 하면 u>0 제약 때문에 끝점 최솟값이 되고 기각 논증(VF)이 붙어 ★5 후보 (3) 밑을 2 로 바꿔 2^(log x) 와 x^(log 2) 짝으로(★4 유지)."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 3 · ★2 16 · ★3 9 · ★4 1 · ★5 0
- 통찰형 7 · 절차형 22 · premium 0
- 통찰 유형: I-EQV 3(108-e13 · 108-256 · 110-268) · I-VF 1(109-262) · I-RT 1(110-266) · I-XU 1(110-267) · I-SYM 1(110-269). depth 3 은 110-269 하나.
- type_hint 상위 5: 「진수가 이차식인 경우(정의역 제한 유무·미정계수)」 7 · 「$\log_a x$ 치환형(꼴 반복·꼭짓점 조건)」 5 · 「진수가 일차식인 경우」 4 · 「지수에 로그가 포함된 함수(양변 로그)」 3 · 「밑과 구간에 따른 끝값·존재 판정(개념원리 익히기)」 3
- 구역별 ★: 개념원리 익히기 3문 모두 ★1 · 필수·발전 예제 13문은 ★2 11 + ★3 2(108-e13 · 108-256) · STEP 1 5문 모두 ★2 · STEP 2 7문 모두 ★3 · 실력 UP 1문 ★4
- 그림: 없음(29문 모두 `figure: none`)
- 이 단원의 반복 골조는 셋이다. ⑴ 밑의 대소로 최대·최소를 뒤집고 정의역 양끝·꼭짓점을 비교 ⑵ $\log_a x$ 를 한 문자로 치환해 이차함수로 ⑶ 지수에 로그가 든 꼴은 양변에 로그. ⑴ 은 이 범위에서 표준 절차로 굳어 있어 통찰로 세지 않았고, ⑶ 과 밑 변환·산술기하·대칭 결합만 통찰로 세었다.

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 이 범위에 벤더 신호와 2단 이상 어긋나는 문항은 없다(모두 1단 이내).

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-110-265 | 골조·M·I 가 107-255(확인체크 ★2)와 사실상 같고 밑 통일 한 겹만 추가됨. 라벨은 STEP 2 신호를 따라 ★3 | ★2 / ★3 |
| GN-ALG-110-267 | 절대부등식(산술·기하평균)을 끌어오는 단원 결합(I-XU d2)이라 ★4 후보이나 교과서 표준 조합이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「지수에 로그가 포함된 함수의 최대·최소(양변 로그)」 3문(108-e13 · 108-256 · 110-268) — 다른 최대·최소 유형과 진입 도구가 다르다. 「밑 변환 후 산술·기하평균」 1문(110-267)도 단원 결합이라 별도 유형이 맞다. 「밑과 지수가 뒤바뀐 두 지수식 묶기」(110-269)는 문항 수가 적지만 ★4 변별 슬롯 후보라 이름을 남겨 둘 값어치가 있다.
- **통합해도 될 유형**: 「진수가 이차식(정의역 제한 없음)」과 「정의역이 제한된 경우」는 꼭짓점이 구간 안인지만 갈릴 뿐 골조가 같아 한 유형 + 하위 갈래로 둘 수 있다. 「$\log_a x$ 의 꼴이 반복되는 함수」와 「치환형 · 꼭짓점 조건에서 미정계수 결정」도 치환 뒤가 정방향이냐 역추적이냐의 차이라 한 유형의 두 변형으로 묶을 수 있다.
- **base ★ 제안**: 끝값 판정 ★1 · 진수 일차식 ★2 · 진수 이차식 ★2 · 치환형 ★2 · 미정계수 역추적 ★3 · 양변 로그 ★3 · 단원 결합(산술기하·대칭 묶기) ★4.
