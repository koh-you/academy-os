---
name: mechanism-데이터-GN-ALG-07
description: 개념원리 대수 07 지수함수의 최대·최소(1/1 · 69~74쪽 · 25문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 07 지수함수의 최대·최소
  unit_code: ALG-07
  part: "1/1"
  extract_range: "69~74쪽 · 69-148~74-166"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 대수 · 07 지수함수의 최대·최소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 69~74쪽, 07단원 「지수함수의 최대·최소」 25문항 전수를 다룬다. 구역은 개념원리 익히기 3문, 필수·발전 예제 구역 15문(필수 예제 `쪽-eN` 6문 + 확인체크 9문), 연습문제 STEP 1 3문, STEP 2 3문, 실력 UP 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있어 개념원리 익히기 → ★1, 필수 예제·확인체크 → ★2, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 를 출발점으로 삼고, M_total 과 통찰 수로 ±1 조정했다. 이 단원은 골조가 여섯 갈래(밑의 증감 판정 / 지수가 일차식 / 지수가 이차식 / `a^x` 반복 치환 / 산술·기하평균 / 공통부분 `a^x+a^{-x}`)로 깔끔하게 갈려 예제 하나에 확인체크·연습문제가 짝을 이루는 구조다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원 변형에서 가장 자주 깨지는 제약은 (1) 치환 `t=a^x` 뒤 t 의 범위를 다시 구하는 것, (2) 밑이 1보다 작으면 최대·최소가 뒤집히는 것, (3) 산술·기하평균은 두 항의 곱이 상수일 때만 쓰고 등호 성립 x 가 정의역 안에 있어야 하는 것 세 가지다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-69-148
  page: 69
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정의역이 -1 ≤ x ≤ 2 인 y=4^x 의 최댓값·최솟값을 구하는 과정의 빈칸 채우기(증감 · 최대·최소를 주는 x 와 그 값).
  category: "밑>1 → 증가함수 → 구간의 양 끝에서 최대·최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 지수함수의 최대·최소(밑의 대소로 증감 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 4>1 이므로 증가함수이고 닫힌구간의 오른쪽 끝에서 최대, 왼쪽 끝에서 최소. 빈칸이 절차를 그대로 안내해 학생이 판단할 지점이 없다.
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "밑 4>1 → 증가 → x=2 에서 최댓값 16, x=-1 에서 최솟값 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '증가, $2$, $16$, $-1$, $\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/69-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5·10)과 구간의 양 끝(-2~3)을 바꿀 수 있다. 제약: 밑>1 을 유지해야 첫 빈칸이 「증가」로 남고, 끝값이 정수나 간단한 분수가 되도록 지수 폭을 작게 잡는다.'
    creative: '(1) 밑을 1보다 작게 바꿔 「감소」 흐름으로(★1 유지 · 69-149 와 같은 골조) (2) 빈칸을 없애고 최댓값과 최솟값의 합·곱을 묻기(★1~2) (3) 구간을 x ≥ -1 처럼 한쪽만 닫으면 최댓값 없음 판단이 붙어 ★2.'
```

```yaml
- id: GN-ALG-69-149
  page: 69
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정의역이 -2 ≤ x ≤ 3 인 y=(1/3)^x 의 최댓값·최솟값을 구하는 과정의 빈칸 채우기.
  category: "0<밑<1 → 감소함수 → 최대·최소가 뒤집힘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 지수함수의 최대·최소(밑의 대소로 증감 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/3 이 1보다 작아 감소함수, 왼쪽 끝 x=-2 에서 최대·오른쪽 끝 x=3 에서 최소로 148번과 뒤집힌다. 뒤집힘이 이 문항의 유일한 함정이지만 빈칸이 순서를 안내한다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 1/3<1 → 감소 → x=-2 에서 최댓값 9, x=3 에서 최솟값 1/27"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '감소, $-2$, $9$, $3$, $\dfrac{1}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/69-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑을 1/2·1/4·0.1 로, 구간을 -3~3 범위에서 바꾼다. 제약: 0<밑<1 을 지켜야 「감소」 흐름이 유지되고, 음의 지수에서 값이 커지므로 왼쪽 끝을 너무 작게 잡지 않는다.'
    creative: '(1) 같은 함수를 y=3^{-x} 로 바꿔 제시해 밑 정리 한 단계를 추가(★2) (2) 최댓값과 최솟값의 비를 묻기(★2) (3) 구간을 x ≤ 3 으로 열면 최댓값 없음 판단이 붙어 ★2.'
```

```yaml
- id: GN-ALG-69-150
  page: 69
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 지수함수의 최댓값·최솟값 구하기. ⑴⑵ 는 닫힌구간, ⑶ x ≥ 1 · ⑷ x ≤ -4 는 한쪽만 막힌 구간이라 한쪽 값이 없다.
  category: "증감 판정 → 구간의 끝값 대입 → 열린 쪽은 값 없음"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간·무한구간에서 지수함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항 모두 밑으로 증감을 정하고 끝값을 대입하면 끝난다. ⑶⑷ 에서 열린 쪽으로 값이 한없이 커지므로 최댓값이 없다는 판단(T-범위)과 ⑵⑷ 의 밑<1 뒤집힘(T-부호)이 함정이라 Mₜ=2.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → 감점 후보지만 하한이라 ★1.
  tier: star_1
  mechanism_primary: "밑으로 증감 판정 → 닫힌 끝에서 값, 열린 끝은 최대(최소) 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 최댓값: $8$, 최솟값: $1$ ⑵ 최댓값: $16$, 최솟값: $\dfrac{1}{16}$ ⑶ 최솟값: $5$, 최댓값: 없다. ⑷ 최솟값: $81$, 최댓값: 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/69-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5·1/2·1/4)과 구간 끝을 바꾼다. 제약: 무한구간 소문항은 열린 방향과 밑의 증감을 같이 바꿔야 「없다」가 최댓값 쪽인지 최솟값 쪽인지 뒤집히고, 닫힌 끝의 값이 정수·간단한 분수가 되게 지수를 고른다.'
    creative: '(1) 네 소문항을 보기 ㄱㄴㄷ 로 묶어 「최댓값이 존재하는 것만 고르기」(★2 · I-MI d1) (2) 구간을 부등식 없이 「정의역이 자연수」로 주면 이산 판단이 붙어 ★2 (3) y=2^x 와 y=(1/2)^x 의 최댓값이 같아지는 구간을 묻기(★3).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-70-e7
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 지수가 일차식인 함수의 최댓값·최솟값. ⑴ y=3^{x+2} · ⑵ y=2^{1-x} · ⑶ y=4^x·3^{-x} 를 각각 주어진 닫힌구간에서 구한다.
  category: "지수 일차식 정리 → 밑 하나로 통합 → 증감 판정 → 끝값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 일차식인 지수함수의 최대·최소(밑 통합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 지수 x+2·1-x 가 x 에 대해 증가/감소하는지를 보고 원함수의 증감을 정하는 합성 판단, ⑶ 은 지수법칙으로 (4/3)^x 한 덩어리로 통합한 뒤 밑>1 로 증가 판정.
    ⑵ 의 지수가 -x 라 증감이 뒤집히는 것(T-부호)과 구간 끝 처리(T-범위)가 함정. 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "지수의 일차식 증감 판정(또는 밑 통합) → 구간 양 끝 대입 → 최대·최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $27$, 최솟값: $1$ ⑵ 최댓값: $4$, 최솟값: $\dfrac{1}{2}$ ⑶ 최댓값: $\dfrac{4}{3}$, 최솟값: $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/70-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴⑵ 의 밑(2·3·5)·지수의 상수항·기울기 부호, ⑶ 의 두 밑(4와 3 → 6과 2, 9와 3)을 바꾼다. 제약: ⑶ 은 두 밑의 비가 1이 아니어야 하고, 통합한 밑이 1보다 큰지 작은지에 따라 답의 최대·최소가 뒤집히므로 구간 끝값을 같이 점검한다.'
    creative: '(1) 지수의 기울기를 2 로 키워 y=2^{2x-1} 처럼(★2 유지) (2) ⑶ 을 4^x·3^{-x}=k 를 만족하는 x 의 범위 문제로 바꾸면 지수부등식이 돼 ★3 (3) 최댓값과 최솟값의 차를 문자 a 를 포함한 구간에서 묻기(Mₐ 상승 ★3).'
```

```yaml
- id: GN-ALG-70-151
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 지수가 일차식인 함수의 최댓값·최솟값. ⑴⑵ 는 상수항이 더해진 꼴, ⑶ 은 지수가 2-x, ⑷ 는 2^x·3^{1-x} 꼴이다.
  category: "지수 일차식 정리·밑 통합 → 증감 판정 → 끝값 + 상수항"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 일차식인 지수함수의 최대·최소(밑 통합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e7 의 유제. 상수항은 최대·최소가 나오는 x 를 바꾸지 않으므로 지수부의 증감만 정하면 되고, ⑷ 는 3·(2/3)^x 로 통합해 감소 판정.
    ⑶⑷ 의 지수 부호 뒤집힘(T-부호)과 구간 끝(T-범위)이 함정. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑 하나로 통합 → 증감 판정 → 양 끝 대입 → 상수항 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $25$, 최솟값: $-1$ ⑵ 최댓값: $8$, 최솟값: $\dfrac{17}{4}$ ⑶ 최댓값: $16$, 최솟값: $2$ ⑷ 최댓값: $\dfrac{9}{2}$, 최솟값: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/70-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항(-2·+4)과 밑·구간을 바꾼다. 제약: 상수항을 크게 잡으면 최솟값이 분수로 지저분해지므로 지수부 끝값이 정수가 되는 구간과 짝을 맞춘다. ⑷ 는 두 밑의 비가 1이 아니어야 한다.'
    creative: '(1) 최댓값만 주고 상수항을 역으로 묻기(I-BW · ★3 · 74-161 과 같은 골조) (2) 정의역을 문자 a 로 두고 최솟값이 정수가 되는 a 를 묻기(★3) (3) 두 함수의 최댓값이 같아지는 조건(★3).'
```

```yaml
- id: GN-ALG-71-e8
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=2^{-x^2+2x+2} 이 x=a 에서 최댓값 b 를 가질 때 a, b 구하기(정의역 제한 없음).
  category: "지수의 이차식 완전제곱 → 지수의 최대 → 밑>1 이므로 함수도 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(정의역 제한 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수 -x^2+2x+2 를 -(x-1)^2+3 으로 고쳐 x=1 에서 최대 3, 밑 2>1 이라 지수가 최대일 때 함수도 최대 → b=2^3.
    「지수의 최대 = 함수의 최대」로 넘어가는 판단이 이 유형의 전부이고 밑>1 이라 뒤집힘도 없다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "지수 완전제곱 → 지수의 최대 3 (x=1) → 밑>1 → 최댓값 2^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/71-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·1/2)과 이차식의 계수를 바꾼다. 제약: 이차항 계수의 부호와 밑이 1보다 큰지가 같이 최대·최소를 결정하므로 네 조합 중 어느 것인지 확인하고, 꼭짓점의 x 와 지수 최댓값이 정수가 되게 판별식 쪽을 정리한다.'
    creative: '(1) 밑을 1/2 로 바꿔 최솟값 문제로(★2 · 71-152 ⑵ 와 같은 골조) (2) 최댓값을 주고 밑을 역으로 묻기(★2~3 · 71-153) (3) 정의역을 제한해 꼭짓점이 구간 밖이 되게 하면 ★3(71-154 ⑴ 골조).'
```

```yaml
- id: GN-ALG-71-e9
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정의역이 1 ≤ x ≤ 4 인 y=(1/4)^{-x^2+6x-8} 의 최댓값과 최솟값.
  category: "지수 이차식의 치역(구간 제한) → 밑<1 → 대소 뒤집어 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(제한된 정의역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    먼저 지수 -x^2+6x-8 의 1 ≤ x ≤ 4 에서의 치역을 꼭짓점(x=3)과 양 끝(x=1, 4) 비교로 구하고, 밑 1/4<1 이므로 지수가 최소일 때 함수가 최대가 되게 뒤집어 대입한다.
    밑<1 뒤집힘(T-부호)과 구간 안 꼭짓점 포함 여부(T-범위)가 함정. 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "지수의 치역 -3 ≤ (지수) ≤ 1 → 밑<1 → 지수 최소에서 최댓값, 지수 최대에서 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $64$, 최솟값: $\dfrac{1}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/71-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(1/2·1/3·1/9)과 이차식 계수·구간을 바꾼다. 제약: 구간이 꼭짓점을 포함하는지에 따라 치역의 양 끝이 달라지므로 꼭짓점의 x 를 구간 안/밖 어디에 둘지 먼저 정하고, 지수의 최대·최소가 정수가 되게 계수를 고른다.'
    creative: '(1) 꼭짓점을 구간 밖으로 밀어 단조 구간만 쓰게 하기(★2 · 71-154 ⑴) (2) 최댓값·최솟값의 곱을 묻기(★2) (3) 구간을 a ≤ x ≤ a+1 로 두고 최댓값이 최소가 되는 a 를 묻기(Mₐ·I-BW 상승 ★4).'
```

```yaml
- id: GN-ALG-71-152
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=3^{x^2+4x+2} ⑵ y=(1/3)^{-x^2-2x+3} 이 x=a 에서 최솟값 b 를 가질 때 a, b 구하기.
  category: "지수 완전제곱 → 밑의 대소로 최소 위치 결정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(정의역 제한 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 밑 3>1 이라 지수가 최소인 x=-2 에서 함수도 최소, ⑵ 는 밑 1/3<1 이라 지수가 최대인 x=-1 에서 함수가 최소로 뒤집힌다.
    두 소문항이 같은 계산에 뒤집힘만 다르게 붙인 짝(T-부호)이고 지수 최댓값의 부호 처리(T-경계)가 더해진다. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "지수 완전제곱 → 밑>1 이면 지수 최소에서, 밑<1 이면 지수 최대에서 함수 최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-2$, $b=\dfrac{1}{9}$ ⑵ $a=-1$, $b=\dfrac{1}{81}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/71-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 이차식 계수를 바꾼다. 제약: 꼭짓점의 x 가 정수가 되게 일차항 계수를 짝수로 두고, 지수의 최댓값·최솟값이 작아야 b 가 간단한 분수로 남는다.'
    creative: '(1) a+b 나 ab 를 묻는 한 줄 문제로(★2) (2) 최솟값을 주고 밑이나 상수항을 역으로 묻기(I-BW ★3) (3) 정의역을 닫힌구간으로 제한하면 꼭짓점 포함 여부 판단이 붙어 ★3.'
```

```yaml
- id: GN-ALG-71-153
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 y=a^{-x^2-2x+1} (a>1) 의 최댓값이 16 일 때 상수 a 구하기.
  category: "지수의 최댓값 → 최댓값 조건에서 밑 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 것이 밑이므로 최댓값 16 을 a^(지수 최댓값) 꼴로 되돌려 a^2=16 을 세운다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(정의역 제한 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>1 이 주어져 증가함수임이 확정되므로 지수 -(x+1)^2+2 의 최댓값 2 에서 함수가 최대, 즉 a^2=16 → a=4 (a>1 로 -4 는 자동 배제).
    밑이 문자라 Mₐ=2 이고 최댓값 조건에서 밑을 되돌리는 역방향 한 단계(I-BW d1). 확인체크 ★2 출발 · 통찰 1 · depth 1 → ★2 유지.
    [분류 이슈] 이 역산을 표준 미정계수 대입(절차형)으로 볼지 I-BW 로 볼지 경계.
  tier: star_2
  mechanism_primary: "지수 최댓값 2 → a>1 이므로 최댓값 a^2 → a^2=16 → a=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/71-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값(9·64·1/4)과 이차식 계수를 바꾼다. 제약: 지수의 최댓값 k 와 주어진 최댓값 M 이 M=a^k 를 정수 a 로 만족해야 하고, a>1 조건을 빼면 음수 근 배제 근거가 사라진다.'
    creative: '(1) 조건을 0<a<1 로 바꿔 최솟값 문제로(★2 · 뒤집힘 확인) (2) a>1 조건을 지워 a 의 값을 모두 구하게 하면 밑의 조건 a>0, a≠1 검증이 붙어 I-VF ★3 (3) 정의역을 제한해 꼭짓점이 구간 밖이 되게 하면 ★3~4.'
```

```yaml
- id: GN-ALG-71-154
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=2^{-x^2-3x+5} (-1 ≤ x ≤ 1) ⑵ y=(1/2)^{-x^2+4x-7} (1 ≤ x ≤ 4) 의 최댓값과 최솟값.
  category: "지수 이차식의 치역(꼭짓점 구간 밖/안) → 밑의 대소로 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(제한된 정의역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 지수의 꼭짓점 x=-3/2 가 구간 밖이라 구간에서 단조, 양 끝만 비교하면 된다. ⑵ 는 꼭짓점 x=2 가 구간 안이고 밑<1 이라 지수 최소(x=4)에서 최대로 뒤집힌다.
    꼭짓점의 구간 포함 여부(T-범위)와 밑<1 뒤집힘(T-부호)이 함정. e9 의 유제이고 통찰 0 · M_total 7 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "지수의 꼭짓점이 구간 안인지 확인 → 치역 확정 → 밑의 대소로 최대·최소 배정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $128$, 최솟값: $2$ ⑵ 최댓값: $128$, 최솟값: $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/71-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간과 이차식 계수를 바꾼다. 제약: ⑴ 처럼 꼭짓점을 구간 밖에 두려면 -b/2a 가 구간 밖임을 먼저 확인해야 하고, 지수의 끝값이 정수라야 답이 2의 거듭제곱으로 떨어진다.'
    creative: '(1) 구간을 살짝 넓혀 꼭짓점이 들어오게 해 같은 식에서 답이 바뀌는 쌍 문제(★3) (2) 최댓값과 최솟값의 곱·비를 묻기(★2) (3) 최댓값이 주어질 때 구간의 끝 a 를 묻기(I-BW ★3).'
```

```yaml
- id: GN-ALG-72-e10
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    0 ≤ x ≤ 2 일 때 y=4^x-2^{x+1} 의 최댓값과 최솟값.
  category: "t=2^x 치환 → t 의 범위 → 이차함수의 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 꼴이 반복되는 함수의 최대·최소(치환 후 t 의 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4^x=(2^x)^2, 2^{x+1}=2·2^x 로 맞추고 t=2^x 로 치환하면 y=t^2-2t, 0 ≤ x ≤ 2 에서 1 ≤ t ≤ 4.
    핵심은 t 의 범위를 다시 구하는 것(T-범위)이고, 꼭짓점 t=1 이 범위의 왼쪽 끝이라 최솟값이 경계에서 나온다(T-경계). 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑 2로 통일 → t=2^x (1 ≤ t ≤ 4) → y=t^2-2t → 꼭짓점·끝값 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $8$, 최솟값: $-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/72-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 일차항 계수, 상수항, 구간을 바꾼다. 제약: 치환한 이차함수의 꼭짓점 t 가 t 의 범위 안인지 밖인지에 따라 최솟값 위치가 달라지므로 둘 중 어느 쪽을 노리는지 정하고, 구간 끝에서 t 가 정수가 되게 x 의 끝을 잡는다.'
    creative: '(1) 꼭짓점이 t 범위 한가운데 오게 계수를 바꿔 최솟값이 내부에서 나오게(★2~3 · 72-155 ⑶) (2) 상수 k 를 넣고 최솟값을 주어 k 를 묻기(I-BW+I-VF ★3 · 72-156) (3) 이차항을 음수로 만들어 최대가 내부·최소가 끝점이 되게(★3 · 74-164).'
```

```yaml
- id: GN-ALG-72-155
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ a^x 가 반복되는 함수의 최댓값·최솟값. ⑴ 9^x-4·3^x+6 ⑵ (1/4)^x-2·(1/2)^x+3 ⑶ 4^x-2^{x+2}+2 (x ≤ 3 으로 한쪽이 열림).
  category: "t=a^x 치환 → t 의 범위(열린 쪽 포함) → 이차함수의 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x 꼴이 반복되는 함수의 최대·최소(치환 후 t 의 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 밑을 하나로 맞춰 치환하는 e10 의 유제. ⑵ 는 (1/2)^{x-1}=2·(1/2)^x 로 정리하는 지수 조작이 한 단계 더 있고, ⑶ 은 x ≤ 3 이라 t 의 범위가 0<t ≤ 8 로 한쪽이 열려 최댓값은 닫힌 끝, 최솟값은 내부 꼭짓점에서 나온다.
    t 범위 재설정(T-범위)과 열린 끝 처리(T-경계)가 함정. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "밑 통일 → t=a^x 와 t 의 범위 → 이차함수 꼭짓점·끝값 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $\dfrac{43}{9}$, 최솟값: $2$ ⑵ 최댓값: $3$, 최솟값: $2$ ⑶ 최댓값: $34$, 최솟값: $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/72-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·1/2·1/4)과 일차항 계수·상수항·구간을 바꾼다. 제약: 밑이 1보다 작으면 x 구간의 좌우가 t 범위에서 뒤집히고, 열린 구간 소문항은 t>0 경계를 남겨야 「최댓값 없음」류 답이 생기지 않는지 확인한다.'
    creative: '(1) ⑶ 의 열린 쪽을 반대로 바꿔 최솟값이 없는 문제로(★3 · I-MI) (2) 일차항 계수를 문자로 두고 최솟값을 주어 역산(★3 · 72-156) (3) 세 소문항의 최솟값을 비교하게 묶기(★3).'
```

```yaml
- id: GN-ALG-72-156
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 y=9^x+k·3^{x+1}+3 의 최솟값이 -6 일 때 상수 k 구하기.
  category: "치환 → 최솟값 조건 역산 → t>0 위배 경우 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최솟값이 존재한다는 조건을 「꼭짓점 t=-3k/2 가 t>0 안에 있다」로 바꿔 k 의 부호를 먼저 묶는다"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점 값에서 얻은 k=±2 중 t>0 을 어기는 k=2 를 기각해야 답이 하나로 남는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "치환한 이차함수의 최솟값 조건으로 미정상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=3^x>0 으로 치환하면 y=t^2+3kt+3 이고 정의역이 t>0 인 이차함수. 꼭짓점이 t>0 안에 있어야 최솟값이 존재하므로 k<0 이 먼저 확정되고, 꼭짓점 값이 -6 이라는 식에서 k=±2 가 나온 뒤 k=2 는 기각된다.
    검증을 건너뛰면 k=2 를 답에 넣게 되는 전형적 I-VF. 확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "t=3^x>0 → y=t^2+3kt+3 → 꼭짓점 t=-3k/2>0 → 꼭짓점 값 -6 → k=-2 (k=2 기각)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/72-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 일차항의 계수 배치(k·3^{x+1} → k·2^{x+1}), 상수항과 최솟값을 바꾼다. 제약: 꼭짓점 값 식이 완전제곱수로 떨어져야 k 가 정수로 나오고, 부호를 바꾸면 기각되는 쪽이 반대가 되므로 t>0 검증이 여전히 필요한지 확인한다.'
    creative: '(1) 정의역을 닫힌구간으로 제한해 꼭짓점이 구간 밖일 때의 경우까지 나누게 하면 I-MI 추가 ★4 (2) 최솟값 대신 최댓값을 주고 이차항을 음수로(★3) (3) k 의 값이 아니라 최솟값이 존재할 k 의 범위를 묻기(★3 · I-EQV 강화).'
```

```yaml
- id: GN-ALG-73-e11
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    함수 y=2^x+2^{1-x} 의 최솟값.
  category: "두 항의 곱이 상수 → 산술·기하평균 → 등호 성립 확인"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2^{1-x}=2·2^{-x} 로 고치면 두 항의 곱이 상수 2 임을 보고 다른 단원 도구인 산술·기하평균을 끌어온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 지수함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 항 모두 양수이고 곱이 2 로 상수이므로 합의 최솟값은 2√2, 등호는 2^x=2^{1-x} 즉 x=1/2 에서 성립한다.
    곱이 상수인지 확인하는 단계와 등호 성립 x 가 실제로 존재하는지 확인하는 단계(T-경계)가 함정. 예제 제목이 도구를 예고하므로 depth 1.
    필수 예제 ★2 출발 · 통찰 1 · depth 1 → ★2.
  tier: star_2
  mechanism_primary: "2^{1-x}=2·2^{-x} → 곱=2 상수 → 산술기하로 합 ≥ 2√2 → 등호 x=1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/73-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5)과 지수의 상수항(1-x → 3-x)을 바꾼다. 제약: 두 지수의 합이 x 에 무관한 상수라야 곱이 상수가 되고, 최솟값이 2√(상수) 이므로 상수를 제곱수로 잡으면 답이 유리수로 떨어진다.'
    creative: '(1) 지수를 일차식으로 늘려 2x-1 과 3-2x 처럼(★2 · 73-158 골조) (2) 정의역을 제한해 등호 성립 x 가 구간 밖이 되게 하면 경계에서 최소가 나와 I-VF 추가 ★4 (3) 상수를 문자 k 로 두고 최솟값을 주어 k 를 역산(★3 · 74-165).'
```

```yaml
- id: GN-ALG-73-e12
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    함수 y=4^x+4^{-x}-2(2^x+2^{-x}) 의 최솟값.
  category: "t=2^x+2^{-x} 치환 → 4^x+4^{-x}=t^2-2 → t ≥ 2 에서 이차함수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통부분 t=2^x+2^{-x} 를 잡고 t 를 제곱해 4^x+4^{-x}=t^2-2 로 식 전체를 t 의 이차식으로 옮긴다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "산술·기하평균으로 t ≥ 2 를 확정해야 꼭짓점 t=1 이 범위 밖임을 알 수 있다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공통부분이 a^x+a^{-x} 인 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=2^x+2^{-x} 로 치환하면 y=t^2-2t-2 이고, t 의 범위를 구하지 않으면 꼭짓점 t=1 에서 최솟값 -3 이라는 틀린 답에 이른다.
    산술기하로 t ≥ 2 를 세우면 그 구간에서 증가하므로 t=2(x=0) 에서 최솟값. 치환 전환(EQV d2)과 범위 확정(XU d1) 두 통찰.
    필수 예제 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "t=2^x+2^{-x} (t ≥ 2) → y=t^2-2t-2 → t=2 에서 최솟값 -2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/73-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5)과 일차항 계수·상수항을 바꾼다. 제약: 꼭짓점 t 가 2 보다 작으면 경계 t=2 에서, 2 보다 크면 내부 꼭짓점에서 최소가 나오므로 어느 쪽을 노리는지 정하고 계수를 고른다. t ≥ 2 는 밑에 상관없이 항상 같다.'
    creative: '(1) 일차항 계수를 키워 꼭짓점을 t>2 로 옮기면 내부 최솟값 + 경계 검증이 함께 필요해 ★4 (2) 계수를 문자 k 로 두고 최솟값을 주어 경우를 나누게 하기(★4 · 74-166) (3) 최댓값을 묻도록 이차항 부호를 뒤집으면 t 가 무한대로 가 최댓값이 없음을 판단해야 해 ★3.'
```

```yaml
- id: GN-ALG-73-157
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=5^x+5^{-x} 이 x=a 에서 최솟값 b 를 가질 때 a+b 의 값.
  category: "곱이 1인 두 양수 → 산술기하 → 등호에서 a"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5^x·5^{-x}=1 로 곱이 상수임을 보고 산술·기하평균(절대부등식 단원 도구)을 적용한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 지수함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱이 1 이라 합의 최솟값 b=2, 등호는 5^x=5^{-x} 즉 a=0 에서 성립 → a+b=2. 이 단원 산술기하 골조의 가장 단순한 형태다.
    확인체크 ★2 출발 · 통찰 1(예고된 도구라 depth 1) · M_total 5 → ★2.
    [분류 이슈] 산술기하 적용을 타 단원 도구(I-XU)로 볼지 이 유형의 표준 절차로 볼지 경계 — 이 범위 4문항에 공통.
  tier: star_2
  mechanism_primary: "곱=1 → 산술기하로 합 ≥ 2 → 등호 x=0 → a+b=0+2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/73-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·10)을 바꾼다. 제약: 지수가 x 와 -x 로 대칭이어야 곱이 1 이 되고 최솟값이 항상 2 로 고정되므로, 답을 바꾸려면 계수(3·5^x+…)나 상수항을 함께 손봐야 한다.'
    creative: '(1) 한쪽에 계수를 붙여 곱이 1 이 아니게 하기(★2) (2) ab 나 b-a 를 묻기(★2) (3) 지수를 2x-1, 1-2x 로 바꿔 등호 성립 x 를 계산하게 하면 ★2~3(73-158).'
```

```yaml
- id: GN-ALG-73-158
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 y=10^{2x-1}+10^{3-2x} 이 x=α 에서 최솟값 β 를 가질 때 β-α 의 값.
  category: "두 지수의 합이 상수 → 곱이 상수 → 산술기하 → 등호에서 α"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지수 (2x-1)+(3-2x)=2 로 x 가 사라지는 것을 보고 곱이 10^2 임을 확인한 뒤 산술·기하평균을 적용한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산술·기하평균을 이용한 지수함수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수가 일차식이라 곱이 상수인지 한눈에 보이지 않는 것이 157 과의 차이. 두 지수의 합이 2 임을 확인하면 곱 100, 최솟값 β=20 이고 등호 2x-1=3-2x 에서 α=1.
    등호 성립 x 를 따로 계산해야 β-α 가 나온다(T-경계). 확인체크 ★2 출발 · 통찰 1 · depth 2 → ★2 유지.
    [분류 이슈] 지수 일차식 처리와 등호 역산이 더해져 STEP 2 수준(★3) 후보.
  tier: star_2
  mechanism_primary: "지수 합=2 → 곱=100 → 합 ≥ 20 → 등호 x=1 → β-α=20-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/73-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·10)과 두 지수의 일차식을 바꾼다. 제약: 두 지수의 x 항 계수가 서로 부호만 다른 같은 크기라야 합이 상수로 남고, 그 상수가 짝수라야 최솟값 2·(밑)^{상수/2} 가 정수로 떨어진다.'
    creative: '(1) 지수 합을 홀수로 만들어 답에 무리수가 남게(★2) (2) 최솟값을 주고 지수의 상수항을 역산(★3 · 74-165) (3) 정의역을 제한해 등호 성립 x 를 구간 밖으로 밀면 단조성 판단이 필요해 ★4.'
```

```yaml
- id: GN-ALG-73-159
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 y=9^x+9^{-x}+2(3^x+3^{-x})+5 의 최솟값.
  category: "t=3^x+3^{-x} 치환 → 9^x+9^{-x}=t^2-2 → t ≥ 2 에서 이차함수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통부분 t=3^x+3^{-x} 를 잡고 9^x+9^{-x}=t^2-2 로 전체를 t 의 이차식으로 옮긴다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "산술·기하평균으로 t ≥ 2 를 세워 꼭짓점 t=-1 이 범위 밖임을 확인한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공통부분이 a^x+a^{-x} 인 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e12 의 유제. y=t^2+2t+3 은 꼭짓점이 t=-1 로 t ≥ 2 밖이라 구간에서 증가, t=2(x=0) 에서 최솟값 11.
    범위를 놓치면 꼭짓점 값 2 를 답으로 내게 된다(T-범위). 확인체크 ★2 출발 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "t=3^x+3^{-x} (t ≥ 2) → y=t^2+2t+3 → 증가 → t=2 에서 최솟값 11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/73-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5)과 일차항 계수·상수항을 바꾼다. 제약: 일차항 계수가 양수면 꼭짓점이 t<0 이라 항상 경계 t=2 에서 최소가 되므로, 난도를 올리려면 계수를 음수로 잡아 꼭짓점을 t ≥ 2 안으로 넣어야 한다.'
    creative: '(1) 일차항 계수를 -6 처럼 음수로 바꿔 내부 꼭짓점에서 최소가 나오게(★4) (2) 상수항을 문자로 두고 최솟값을 주어 역산(★3) (3) 최솟값을 주는 x 의 값까지 묻기(등호 조건 확인 추가 ★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-74-160
  page: 74
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역이 0 ≤ x ≤ 1 인 y=2^{x+1}·5^{1-x} 의 최댓값 M, 최솟값 m 에 대하여 M-m 의 값.
  category: "지수법칙으로 밑 하나로 통합 → 증감 판정 → 끝값의 차"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 일차식인 지수함수의 최대·최소(밑 통합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{x+1}·5^{1-x}=10·(2/5)^x 로 정리하면 밑 2/5<1 이라 감소, x=0 에서 최대 10 · x=1 에서 최소 4.
    밑을 통합하지 않고 두 지수를 따로 다루면 증감 판정이 막히는 것이 유일한 갈림길이지만 e7 ⑶ 에서 이미 예고된 절차. 통찰 0 · M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "10·(2/5)^x 로 통합 → 밑<1 감소 → M=10, m=4 → M-m=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑(2와 5 → 3과 2, 4와 3)과 지수의 상수항·구간을 바꾼다. 제약: 통합한 밑이 1보다 큰지 작은지에 따라 최대·최소가 뒤집히고, 구간의 두 끝에서 값이 정수로 떨어지게 상수항을 맞춘다.'
    creative: '(1) M+m 이나 M/m 을 묻기(★2) (2) 구간을 0 ≤ x ≤ a 로 두고 M-m 의 값을 주어 a 를 역산(I-BW ★3) (3) 세 밑의 곱 꼴로 늘리기(★2~3).'
```

```yaml
- id: GN-ALG-74-161
  page: 74
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역이 a ≤ x ≤ 3 인 y=3^{-x}+b 의 최솟값이 1/9, 최댓값이 5/27 일 때 상수 a, b 의 값.
  category: "감소함수 → 최소는 오른쪽 끝·최대는 왼쪽 끝 → 두 식 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3^{-x} 가 감소함수임을 먼저 정해 최솟값이 x=3, 최댓값이 x=a 에서 나온다는 배정을 세운 뒤 두 조건을 연립한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 최대·최소 조건으로 정의역·상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    감소함수이므로 최솟값 식은 x=3 에서, 최댓값 식은 x=a 에서 나온다. 먼저 b 를 구한 뒤 3^{-a} 값으로 a 를 되돌린다.
    배정을 거꾸로 잡으면 식이 통째로 틀리는 것(T-부호)과 미지수 두 개(Mₐ=2)가 부담. STEP 1 ★2 출발 · 통찰 1 · depth 1 → ★2.
  tier: star_2
  mechanism_primary: "감소 → 최소 3^{-3}+b=1/9 로 b → 최대 3^{-a}+b=5/27 → 3^{-a}=1/9 → a=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=2$, $b=\dfrac{2}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 구간의 오른쪽 끝, 주어진 최대·최소를 바꾼다. 제약: 최댓값-최솟값이 3^{-a}-3^{-3} 꼴로 밑의 거듭제곱 차가 되어야 a 가 정수로 나오고, a<3 이 유지되는지 확인해야 한다.'
    creative: '(1) 지수를 3^x 로 바꿔 증가함수 배정으로(★2) (2) a 만 미지수로 두고 최댓값만 주기(★2) (3) 정의역을 a ≤ x ≤ a+2 로 두면 두 끝이 모두 미지수라 ★3~4.'
```

```yaml
- id: GN-ALG-74-162
  page: 74
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=-x^2+4x-5, g(x)=(1/2)^x 에 대하여 1 ≤ x ≤ 4 에서 y=(g∘f)(x) 의 최댓값과 최솟값의 합.
  category: "합성 풀어쓰기 → 안쪽 이차식의 치역 → 밑<1 로 뒤집어 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 이차식인 지수함수의 최대·최소(제한된 정의역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (g∘f)(x)=(1/2)^{f(x)} 로 풀어 쓰면 e9 와 같은 골조다. 1 ≤ x ≤ 4 에서 f 의 치역은 꼭짓점 x=2 와 끝 x=4 비교로 -5 ≤ f ≤ -1 이고, 밑 1/2<1 이라 f 가 최소일 때 함수가 최대.
    합성 기호를 지수로 옮기는 것은 정의 적용이라 통찰로 세지 않았다. 통찰 0 · M_total 7 → STEP 1 ★2.
  tier: star_2
  mechanism_primary: "(g∘f)(x)=(1/2)^{f(x)} → f 의 치역 -5 ≤ f ≤ -1 → 밑<1 → 최대 32, 최소 2 → 합 34"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$34$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 계수와 g 의 밑(1/2·2·1/3), 구간을 바꾼다. 제약: f 의 치역 양 끝이 정수라야 답이 거듭제곱으로 떨어지고, 꼭짓점이 구간 안인지 밖인지에 따라 치역의 한쪽 끝이 달라진다.'
    creative: '(1) 합성 순서를 뒤집어 (f∘g)(x) 로 두면 안쪽이 지수·바깥이 이차라 치환형이 돼 ★3 (2) 최댓값과 최솟값의 곱을 묻기(★2) (3) g 의 밑을 문자 a 로 두고 최댓값을 주어 a 를 역산(★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-74-163
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=2^x 의 그래프를 y축 대칭이동한 뒤 x축 방향 -2, y축 방향 3 만큼 평행이동한 것이 y=f(x) 일 때, -3 ≤ x ≤ -1 에서 f 의 최댓값과 최솟값의 곱.
  category: "대칭·평행이동을 식으로 옮기기 → 증감 판정 → 끝값의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프 이동을 말로 준 것을 순서대로 식 변환(y축 대칭 → x 를 -x, x축 방향 -2 → x 에 x+2 대입, y 방향 +3)으로 옮겨야 최대·최소를 따질 식이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프의 대칭·평행이동으로 구한 지수함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이동을 차례로 적용하면 f(x)=2^{-x-2}+3 이고 지수가 -x 라 감소, x=-3 에서 최대 5 · x=-1 에서 최소 7/2.
    평행이동 -2 를 x+2 로 대입하는 부호(T-부호)와 이동 순서(T-표기)가 함정이며, 최대·최소 자체는 쉬운 대신 식 세우기가 무게 중심. STEP 2 ★3 출발 · 통찰 1 · depth 2 → ★3.
  tier: star_3
  mechanism_primary: "y축 대칭 → 2^{-x} → x 방향 -2 → 2^{-(x+2)} → y 방향 +3 → 감소 → 양 끝값의 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{35}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 이동량(-2·+1), y 방향 이동(3·-1), 구간을 바꾼다. 제약: 구간의 두 끝에서 지수가 정수가 되도록 이동량과 구간을 맞추고, y 방향 이동이 커지면 곱이 지저분해지므로 작은 정수로 둔다.'
    creative: '(1) 대칭축을 x축이나 원점으로 바꿔 부호 처리를 다르게(★3) (2) 이동 결과가 지나는 점을 주고 이동량을 역산하게 하면 I-BW 추가 ★4 (3) 최댓값과 최솟값의 차가 주어질 때 구간을 묻기(★4).'
```

```yaml
- id: GN-ALG-74-164
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정의역이 -1 ≤ x ≤ 3 인 y=-4^x+2^{x+2}+k 의 최댓값이 5 일 때 최솟값(k 는 상수).
  category: "치환 → 위로 볼록한 이차함수 → 최댓값 조건으로 k → 먼 끝점에서 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼭짓점 t=2 가 t 의 범위 안임을 확인해 최댓값이 꼭짓점 값임을 정한 뒤 그 값이 5 라는 조건으로 k 를 되돌린다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a^x 꼴이 반복되는 함수의 최대·최소(치환 후 t 의 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=2^x 로 두면 1/2 ≤ t ≤ 8 이고 y=-t^2+4t+k 는 위로 볼록, 꼭짓점 t=2 가 범위 안이라 최댓값 4+k=5 에서 k=1.
    최솟값은 꼭짓점에서 더 먼 끝 t=8 이므로 두 끝값을 비교해야 하고(T-경계), 치환 범위를 x 가 아니라 t 로 다시 잡는 것(T-범위)이 함정. STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "t=2^x (1/2 ≤ t ≤ 8) → y=-t^2+4t+k → 꼭짓점 최대 4+k=5 → k=1 → t=8 에서 최솟값 -31"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-31$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 일차항 계수, 최댓값, 구간을 바꾼다. 제약: 꼭짓점 t 가 범위 안에 있어야 최댓값 조건이 꼭짓점 값으로 잡히고, 최솟값은 꼭짓점에서 먼 끝에서 나오므로 두 끝의 거리를 비대칭으로 둬야 비교가 의미를 갖는다.'
    creative: '(1) 꼭짓점을 범위 밖으로 밀어 최댓값도 끝점에서 나오게 하면 경우 분기가 생겨 ★4 (2) 최솟값을 주고 최댓값을 묻는 방향으로 뒤집기(★3) (3) 구간의 끝을 문자로 두고 최댓값이 5 가 되는 범위를 묻기(I-MI ★4).'
```

```yaml
- id: GN-ALG-74-165
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    함수 y=3^{x+k}+(1/3)^{x-k} 의 최솟값이 18 일 때 상수 k 의 값.
  category: "밑 통일 → 두 항의 곱이 상수 → 산술기하 → 최솟값 조건으로 k 역산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1/3)^{x-k}=3^{k-x} 로 고쳐 두 항의 지수 합이 2k 로 x 에 무관함을 보고 곱이 상수 3^{2k} 임을 끌어낸다"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "산술기하로 얻은 최솟값 2·3^k 를 18 과 같게 두어 k 를 되돌린다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "산술·기하평균을 이용한 지수함수의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑을 3 으로 통일하면 두 항의 곱이 3^{2k} 로 x 에 무관한 상수, 최솟값은 2·3^k=18 → 3^k=9 → k=2.
    밑 뒤집기(T-부호)와 등호 성립 x 가 존재하는지(T-경계)가 함정. 통찰 2개지만 두 도구 모두 예제 e11 에서 예고된 표준 골조이고 depth 가 1~2 라 +1 을 적용하지 않고 STEP 2 출발점 ★3 유지.
    [분류 이슈] 통찰 2개 기준으로는 ★4 후보.
  tier: star_3
  mechanism_primary: "(1/3)^{x-k}=3^{k-x} → 곱=3^{2k} → 최솟값 2·3^k=18 → k=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5)과 최솟값(12·20·50)을 바꾼다. 제약: 최솟값이 2·(밑)^k 꼴이므로 주어진 최솟값의 절반이 그 밑의 거듭제곱이라야 k 가 정수로 나온다. 두 항의 지수는 x 항 계수가 서로 반대라야 곱이 상수가 된다.'
    creative: '(1) 지수의 x 계수를 2 로 키워 2x+k, k-2x 로(★3) (2) 최솟값을 주는 x 의 값까지 함께 묻기(등호 조건 ★3) (3) 정의역을 제한해 등호 성립 x 가 구간 밖일 수 있게 하면 경우 분기 + 기각이 붙어 ★4~5.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-74-166
  page: 74
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    함수 y=4^x+4^{-x}-2k(2^x+2^{-x}) 의 최솟값이 -2 일 때 상수 k 의 값.
  category: "공통부분 치환 → t ≥ 2 → 꼭짓점 위치로 경우 나누기 → 모순 경우 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "t=2^x+2^{-x} 로 두고 4^x+4^{-x}=t^2-2 로 옮겨 y=t^2-2kt-2 의 이차함수로 만든다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "산술·기하평균으로 t ≥ 2 를 확정해 이차함수의 정의역을 정한다"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점 t=k 가 t ≥ 2 안인지 밖인지에 따라 최솟값이 꼭짓점 값인지 경계 t=2 의 값인지 갈려 두 경우를 모두 따져야 한다"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k ≥ 2 인 경우에서 나온 k 가 그 가정을 어겨 기각되고, k<2 인 경우의 k=1 만 남는다"
  insight_count: 4
  depth_score: 1.75
  type_id: null
  type_hint: "공통부분이 a^x+a^{-x} 인 함수의 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    e12 와 같은 치환이지만 일차항 계수가 문자라 꼭짓점 t=k 의 위치가 정해지지 않는다. k ≥ 2 면 꼭짓점 값이 최소, k<2 면 경계 t=2 의 값 2-4k 가 최소이고 이를 -2 와 같게 두면 k=1 (k<2 만족).
    분기 중 하나가 가정을 어겨 기각되는 구조라 I-MI 와 I-VF 가 동시에 걸린다. 실력 UP ★4 출발 · 통찰 4 로 +1 후보지만 골조가 예제 e12 의 연장이고 참신도 0 이라 ★4 유지.
    [분류 이슈] 통찰 4개(VF·XU 포함) 기준으로는 ★5 후보.
  tier: star_4
  mechanism_primary: "t=2^x+2^{-x} (t ≥ 2) → y=t^2-2kt-2 → 꼭짓점 t=k 의 위치로 경우 분기 → k ≥ 2 기각 → 2-4k=-2 → k=1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/74-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3), 상수항, 주어진 최솟값을 바꾼다. 제약: 최솟값을 어떻게 주느냐에 따라 살아남는 경우가 k ≥ 2 쪽으로 바뀔 수 있으므로 두 경우를 모두 풀어 하나만 남는지 확인해야 하고, 남는 k 가 정수가 되게 상수항을 맞춘다.'
    creative: '(1) 최솟값 대신 최솟값이 존재할 k 의 범위를 묻기(★4) (2) 이차항을 음수로 뒤집어 최댓값 문제로(★4) (3) 정의역을 제한해 t 의 위쪽 끝도 생기게 하면 경우가 셋으로 늘어 ★5 (4) k 를 정수로 제한하고 최솟값이 정수인 k 를 모두 구하게 하면 I-VF 가 강화돼 ★5.'
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 3 · ★2 15 · ★3 6 · ★4 1 · ★5 0
- 통찰형 12 · 절차형 13 · premium 0
- 통찰 유형 분포: I-XU 6 · I-EQV 5 · I-BW 4 · I-RT 1 · I-MI 1 · I-VF 2 (총 19개 라벨 · depth 3 없음)
- type_hint 상위: 「산술·기하평균을 이용한 지수함수의 최솟값」 4 · 「공통부분이 a^x+a^{-x} 인 함수」 3 · 「지수가 일차식(밑 통합)」 3 · 「a^x 꼴이 반복되는 함수(치환 후 t 범위)」 3 · 「지수가 이차식(제한된 정의역)」 3 · 「지수가 이차식(제한 없음)」 3 · 「닫힌구간·무한구간 기본」 3 · 단발 3(그래프 이동 · 최대최소 조건 역산 · 치환 후 상수 역산)
- 구역별 ★: 개념원리 익히기 3문 모두 ★1 · 필수 예제 6문 중 ★2 5 ★3 1 · 확인체크 9문 중 ★2 7 ★3 2 · STEP 1 3문 모두 ★2 · STEP 2 3문 모두 ★3 · 실력 UP 1문 ★4
- 그림: 없음(25문 모두 `figure: none`)
- 대상층: 하위권 3 · 중하위권 10 · 중위권 2 · 중상위권 9 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-71-153 | 최댓값 조건에서 밑을 되돌리는 것을 I-BW 로 셀지 표준 미정계수 대입(절차형)으로 볼지 경계 | ★2 |
| GN-ALG-73-157 | 산술·기하평균 적용을 타 단원 도구(I-XU)로 볼지 이 유형의 표준 절차로 볼지 — 이 범위 4문항 공통 정책 문제 | ★2 |
| GN-ALG-73-158 | 지수가 일차식이라 곱이 상수임이 바로 보이지 않고 등호 x 역산이 붙어 확인체크 라벨보다 무거움 | ★2 / ★3 |
| GN-ALG-74-165 | 통찰 2개(EQV d2 + BW d1) 기준으로는 +1 이지만 두 도구 모두 예제에서 예고된 표준 골조라 ★3 유지 | ★3 / ★4 |
| GN-ALG-74-166 | 통찰 4개에 I-VF·I-XU 가 포함돼 ★5 자격 조건은 만족하나 골조가 예제 e12 의 연장이고 참신도 0 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 일곱 갈래이고 각각 「예제 1 + 확인체크 1~2 + 연습문제 1」로 짝이 맞는다. 카탈로그를 만들면 이 일곱을 그대로 유형 단위로 세울 수 있다.
- **따로 세워야 할 유형**: (1) 「지수가 이차식 · 정의역 제한 없음」과 「지수가 이차식 · 제한된 정의역」은 꼭짓점의 구간 포함 여부 판단이 추가돼 체감 난도가 한 단 다르므로 분리한다. (2) 「산술·기하평균」과 「공통부분 a^x+a^{-x}」은 둘 다 t ≥ 2 를 쓰지만 전자는 곱이 상수인 두 항, 후자는 치환 후 이차함수라 골조가 다르다.
- **통합해도 될 유형**: 「지수가 일차식(밑 통합)」과 「닫힌구간 기본」은 증감 판정 + 끝값 대입이라는 같은 골조이고 밑 통합 한 단계만 다르므로 base ★ 2 의 한 유형에 난이도 변형으로 둘 수 있다. 「치환한 이차함수의 최솟값 조건으로 상수 구하기」(72-156)는 「a^x 꼴이 반복되는 함수」의 역문제 변형이라 별도 유형 대신 같은 유형의 ★3 슬롯으로 둔다.
- **산술·기하평균 라벨 정책 결정 필요**: 이 단원은 절대부등식 단원 도구를 가져오므로 I-XU 로 라벨했으나(4문항), 개념원리가 예제 제목으로 도구를 예고하는 구성이라 depth 는 모두 1~2 로 눌렀다. 카탈로그를 만들 때 이 단원 한정으로 「감쇠 대상 통찰」에 I-XU 를 넣을지 정해야 한다.
