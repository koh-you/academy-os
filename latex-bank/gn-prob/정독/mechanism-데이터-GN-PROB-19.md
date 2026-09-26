---
name: mechanism-데이터-GN-PROB-19
description: 개념원리 확률과 통계 19 모평균과 표본평균(1/1 · 13문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 19 모평균과 표본평균
  unit_code: PROB-19
  part: "1/1"
  extract_range: "170~173쪽 · 170-370~173-379"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 19 모평균과 표본평균 (1/1) 정독 데이터 (v1.0)

이 파일은 170~173쪽 네 쪽에 걸친 「19 모평균과 표본평균」 13문항(`170-370`~`173-379`) 전수를 다룬다. 단원 전체가 13문항이라 파트 분할이 없다. 벤더 난이도 신호는 구역과 태그로만 나타난다 — 앞의 **개념원리 익히기** 통번호 3문항(★1 출발)과, 뒤의 **필수·발전 예제** 구역에서 상자 발문인 **필수 예제** 3문항(`171-e3` · `172-e4` · `173-e5` · ★2 출발)과 그 아래 딸린 **확인체크** 7문항(★1 출발)이다. STEP 구분·실력 UP·기출 태그는 이 범위에 없다.

골조는 세 갈래로 갈린다. ① **표본평균의 평균·분산·표준편차** — 모집단 분포(카드·공·확률분포표)에서 $m$, $\sigma^2$ 을 구한 뒤 $\mathrm{E}(\overline{X})=m$, $\mathrm{V}(\overline{X})=\sigma^2/n$ 으로 옮기는 형. ② **표본평균의 확률** — 정규모집단에서 $\overline{X}\sim\mathrm{N}(m,\,\sigma^2/n)$ 으로 옮긴 뒤 표준화해 표준정규분포표를 조회하는 형. ③ **확률값에서 미지수 역산** — 주어진 확률을 표에서 거꾸로 읽어 $z$ 를 찾고 $n$ 또는 경계값 $k$ 를 역추적하는 형. ③만 역방향 사고(I-BW)를 요구하고 ①②는 공식 대입의 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-170-370
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ $1$, $3$, $5$ 가 적힌 카드 $3$ 장에서 $2$ 장을 복원추출할 때 숫자의 표본평균 $\overline{X}$ 에 대하여, ⑴ $\overline{X}$ 의 확률분포를 표로 나타내기 ⑵ $\mathrm{E}(\overline{X})$, $\mathrm{V}(\overline{X})$, $\sigma(\overline{X})$ 구하기.
  category: "복원추출 순서쌍 나열 → 표본평균 값별 확률 → 정의로 평균·분산·표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률분포 직접 구성(복원추출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    복원추출이라 순서쌍 9가지가 모두 확률 1/9 로 같고, 합이 같은 쌍을 묶으면 표본평균 1~5 의 분포가 1:2:3:2:1 로 나온다. 이후는 정의대로 E·V·σ 를 계산하는 절차. 통찰은 없으나 분포 구성과 세 통계량 계산이 이어져 M_total 6 — 개념원리 익히기 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "복원추출 순서쌍 9가지 → 합이 같은 쌍 묶어 표본평균 분포 → 정의로 E·V·σ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 ($\mathrm{P}(\overline{X}=1)=\dfrac{1}{9}$, $\mathrm{P}(\overline{X}=2)=\dfrac{2}{9}$, $\mathrm{P}(\overline{X}=3)=\dfrac{1}{3}$, $\mathrm{P}(\overline{X}=4)=\dfrac{2}{9}$, $\mathrm{P}(\overline{X}=5)=\dfrac{1}{9}$) ⑵ $\mathrm{E}(\overline{X})=3$, $\mathrm{V}(\overline{X})=\dfrac{4}{3}$, $\sigma(\overline{X})=\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-prob/items/170-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 숫자(등차 1·3·5 → 2·4·6 또는 1·2·6)와 표본크기 n=2 를 바꿀 수 있음. 제약: 복원추출이라 순서쌍이 3^n 개로 늘어나므로 n=2 를 넘기면 표가 급격히 길어진다. 숫자를 등차로 두면 표본평균 분포가 대칭이 되어 검산이 쉽고, 비등차로 두면 값이 겹치지 않아 분포가 균등에 가까워진다."
    creative: "(1) 비복원추출로 바꾸면 순서쌍이 6가지로 줄고 V(X̄)=σ²/n 공식이 성립하지 않아 정의 계산이 필수가 됨(★3 · 모분산과의 불일치를 짚는 I-EQV) (2) 표본평균 대신 표본합 X₁+X₂ 의 분포를 묻기(★2 유지) (3) 분포표를 주고 원래 카드 숫자를 역추적하게 하면 I-BW 추가로 ★3."
```

```yaml
- id: GN-PROB-170-371
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 모평균 $30$, 모분산 $16$ 인 모집단에서 크기 $100$ 인 표본을 임의추출할 때 표본평균 $\overline{X}$ 의 ⑴ $\mathrm{E}(\overline{X})$ ⑵ $\mathrm{V}(\overline{X})$ ⑶ $\sigma(\overline{X})$.
  category: "표본평균의 평균·분산·표준편차 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 평균·분산·표준편차 공식 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    E(X̄)=m, V(X̄)=σ²/n, σ(X̄)=σ/√n 세 공식을 그대로 대입하는 한 줄 문항. 통찰 0·M_total 3 이라 v3.8 기준 -1 후보이고 개념원리 익히기 ★1 출발이므로 하한인 ★1 유지.
  tier: star_1
  mechanism_primary: "m=30, σ²=16, n=100 → E(X̄)=30, V(X̄)=16/100, σ(X̄)=4/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $30$ ⑵ $\dfrac{4}{25}$ ⑶ $\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/170-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(30)·모분산(16·36·64)·표본크기(100·25·64)를 바꿀 수 있음. 제약: σ(X̄)=σ/√n 이 유리수로 떨어지도록 모분산은 완전제곱, 표본크기도 완전제곱으로 둔다. 모분산 대신 모표준편차를 주면 제곱 단계가 하나 늘어난다."
    creative: "(1) 모분산 대신 σ(X̄) 값을 주고 n 을 묻기(I-BW · ★2) (2) V(3X̄-1) 처럼 일차변환을 씌우기(★2) (3) 표본크기를 4배로 늘리면 σ(X̄) 가 몇 배가 되는지 비율로 묻기(★2 · I-EQV)."
```

```yaml
- id: GN-PROB-170-372
  page: 170
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 빵 $1$ 개의 무게가 정규분포 $\mathrm{N}(200,\,10^2)$ 을 따를 때 $100$ 개를 임의추출하여, ⑴ 표본평균 $\overline{X}$ 의 평균과 표준편차 ⑵ $\mathrm{P}(\overline{X}\ge 202)$ 구하기. $\mathrm{P}(0\le Z\le 2)=0.4772$ 주어짐.
  category: "σ/√n 으로 X̄ 의 분포 확정 → 표준화 → 여확률로 오른쪽 꼬리 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규모집단 표본평균의 확률(한쪽 꼬리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=10/√100=1 을 먼저 확정하는 ⑴ 이 ⑵ 의 표준화 분모가 된다. Z=(202-200)/1=2 로 옮긴 뒤 주어진 값이 P(0≤Z≤2) 이므로 0.5 에서 빼는 여확률 처리가 필요(T-범위). 통찰 없는 표준 절차이나 소문항 두 단이 이어져 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "σ(X̄)=10/√100=1 → Z=(202-200)/1=2 → 0.5-P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 평균: $200$, 표준편차: $1$ ⑵ $0.0228$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/170-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(200)·모표준편차(10)·표본크기(100)·기준값(202)을 바꿀 수 있음. 제약: (기준값-m)/(σ/√n) 이 표에 있는 z(0.5·1·1.5·2)로 떨어져야 하고, n 은 완전제곱으로 둔다. 제시된 표 값이 P(0≤Z≤z) 형태라 꼬리확률은 0.5 에서 빼야 한다."
    creative: "(1) 기준값을 평균보다 작게 잡아 대칭성으로 옮기게 하기(★2 · 부호 함정 추가) (2) 구간확률 P(198≤X̄≤202) 로 바꾸면 두 값 합·2배 처리(★2) (3) 「빵 100개 무게의 합이 20200 g 이상」처럼 표본합으로 진술하면 X̄ 로 되돌리는 I-RT 가 붙어 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-171-e3
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    모집단의 확률변수 $X$ 의 확률분포표($X=1,2,3$ 에 확률 $\frac{1}{4}$, $\frac{1}{2}$, $\frac{1}{4}$)가 주어질 때, 크기 $4$ 인 표본의 표본평균 $\overline{X}$ 에 대하여 $\mathrm{E}(\overline{X})$, $\mathrm{V}(\overline{X})$ 구하기.
  category: "모집단 분포표 → E(X)·E(X²) → V(X)=E(X²)-{E(X)}² → E(X̄)=m, V(X̄)=σ²/n"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 평균, 분산, 표준편차(모집단 분포표 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분포표가 2 를 축으로 대칭이라 E(X)=2 는 눈으로 보이지만, V(X) 는 E(X²) 를 세 항 더해 구하는 계산 단계가 필요하다. 그 뒤 n=4 로 나누면 끝. 통찰 0·M_total 5 로 v3.8 -1 후보이나 모분산 계산 단계가 실질 노동이라 필수 예제 ★2 출발을 그대로 유지.
  tier: star_2
  mechanism_primary: "분포표 → E(X)=2, E(X²) → V(X)=1/2 → E(X̄)=2, V(X̄)=V(X)/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\mathrm{E}(\overline{X})=2$, $\mathrm{V}(\overline{X})=\dfrac{1}{8}$'
  answer_source: "본문 풀이"
  figure: crop:fig-171-e3.png
  latex: latex-bank/gn-prob/items/171-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분포표의 값(1,2,3)·확률(1/4,1/2,1/4)·표본크기 4 를 바꿀 수 있음. 제약: 확률의 합이 1 이어야 하고, V(X̄)=V(X)/n 이 간단한 분수로 떨어지도록 n 을 V(X) 의 분모와 맞춘다. 그림(표)이 발문의 「오른쪽 표」와 묶여 있으므로 값을 바꾸면 크롭도 함께 교체해야 한다."
    creative: "(1) 대칭이 아닌 분포로 바꿔 E(X) 도 계산해야 하게 하기(★2 유지, 계산량만 증가) (2) V(X̄) 를 주고 표본크기 n 을 묻기(I-BW · ★2~3) (3) 분포표의 한 확률을 미지수 a 로 두면 합이 1 인 조건부터 세워야 해 Mₐ 상승 ★3 (4) σ(2X̄-1) 처럼 일차변환을 씌우기(★2)."
```

```yaml
- id: GN-PROB-171-373
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정규분포 $\mathrm{N}(40,\,4)$ 인 모집단에서 크기 $n$ 인 표본의 표본평균 $\overline{X}$ 의 평균이 $a$, 분산이 $\dfrac{1}{15}$ 일 때 $a+n$ 의 값.
  category: "E(X̄)=m 으로 a 확정 → V(X̄)=σ²/n 방정식으로 n 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 분산에서 표본크기 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=40 은 즉시 나오고, 4/n=1/15 를 풀어 n=60. N(40, 4) 의 4 가 모분산이지 모표준편차가 아니라는 표기 함정(T-표기)이 유일한 걸림돌이다. 역산이지만 일차방정식 한 줄이라 표준 절차로 보고 통찰은 세지 않았다. 확인체크 ★1 출발에서 미지수 역산·표기 함정으로 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "a=E(X̄)=40 → V(X̄)=4/n=1/15 → n=60 → a+n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/171-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(40)·모분산(4)·주어진 V(X̄)(1/15)을 바꿀 수 있음. 제약: 모분산/V(X̄) 가 자연수 n 으로 떨어져야 한다. N(m, σ²) 표기를 N(40, 2²) 로 쓰면 함정이 사라지므로, 함정을 남기려면 분산을 그대로 숫자로 적는다."
    creative: "(1) σ(X̄) 를 주고 n 을 묻기(√ 처리 한 단 추가 · ★2) (2) n 을 주고 모분산을 역산하게 뒤집기(★2) (3) 「V(X̄)<0.1 이 되는 최소의 n」처럼 부등식으로 바꾸면 경계 판정이 붙어 ★3 (4) 두 표본크기 n, 4n 의 σ(X̄) 비를 묻기(★2 · I-EQV)."
```

```yaml
- id: GN-PROB-171-374
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모집단의 확률변수 $X$ 의 확률분포표($X=0,2,4$ 에 확률 $\frac{1}{3}$, $\frac{1}{2}$, $\frac{1}{6}$)가 주어질 때, 크기 $9$ 인 표본의 표본평균 $\overline{X}$ 에 대하여 $\mathrm{E}(\overline{X})$, $\sigma(\overline{X})$ 구하기.
  category: "모집단 분포표 → E(X)·E(X²) → V(X) → E(X̄)=m, σ(X̄)=σ/√n"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 평균, 분산, 표준편차(모집단 분포표 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    171-e3 과 같은 골조이나 확률이 1/3, 1/2, 1/6 로 분모가 달라 E(X)=5/3, V(X)=17/9 처럼 분수 계산이 무겁고, 마지막에 √ 를 씌워 σ(X̄)=σ/√9 까지 간다. 통찰 0·M_total 5 지만 분수·근호 처리가 실질 노동이라 확인체크 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "분포표 → E(X)=5/3, V(X)=17/9 → E(X̄)=5/3, σ(X̄)=σ/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\mathrm{E}(\overline{X})=\dfrac{5}{3}$, $\sigma(\overline{X})=\dfrac{\sqrt{17}}{9}$'
  answer_source: "답지"
  figure: crop:fig-171-374.png
  latex: latex-bank/gn-prob/items/171-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분포표의 값(0,2,4)·확률(1/3,1/2,1/6)·표본크기 9 를 바꿀 수 있음. 제약: 확률 합 1, 표본크기는 완전제곱(σ(X̄) 의 √n 이 유리수가 되도록). V(X) 가 완전제곱이 아니면 답에 근호가 남는데 이 문항은 그 상태를 그대로 허용한다. 표 크롭을 함께 교체해야 한다."
    creative: "(1) 값 사이 간격을 바꿔 V(X) 를 완전제곱으로 만들면 답이 유리수(★2, 체감 난도 하락) (2) σ(X̄) 를 주고 n 을 역산(I-BW · ★2~3) (3) 확률 하나를 a 로 두면 합이 1 인 조건이 선행해 Mₐ 상승 ★3 (4) 같은 분포에서 표본합의 분산을 묻기(★2 · I-RT)."
```

```yaml
- id: GN-PROB-171-375
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $1$, $1$, $2$, $2$, $2$, $4$ 가 적힌 공 $6$ 개에서 $4$ 개를 복원추출할 때 숫자의 표본평균을 $\overline{X}$ 라 할 때 $\mathrm{V}(2\overline{X}+3)$ 의 값.
  category: "공의 도수 → 모집단 확률분포 → V(X) → V(X̄)=V(X)/n → 일차변환 V(aX̄+b)=a²V(X̄)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 일차변환 분산(모집단 도수 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공의 개수를 확률 1/3, 1/2, 1/6 로 옮기는 단계가 먼저 있고, 그다음 V(X) → V(X̄)=V(X)/4 → 계수 2 의 제곱을 곱하는 세 공식이 사슬로 이어진다. 상수항 3 이 분산에 영향을 주지 않는다는 점이 함정(T-표기). 각 단계는 표준 공식이라 통찰로 세지 않았고, 3단 합성·M_total 6 으로 확인체크 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "도수 → 확률분포 → V(X)=1 → V(X̄)=1/4 → V(2X̄+3)=4·V(X̄)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/171-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공에 적힌 숫자와 도수(1이 2개·2가 3개·4가 1개), 표본크기 4, 일차변환 계수(2, 3)를 바꿀 수 있음. 제약: 도수 합이 공의 총수와 맞아야 하고, V(X)·a²/n 이 정수나 간단한 분수로 떨어지게 계수와 n 을 맞춘다. 상수항은 답에 영향이 없으므로 함정으로 남겨 둔다."
    creative: "(1) E(2X̄+3) 를 함께 묻어 평균과 분산의 일차변환 차이를 대비시키기(★2) (2) 비복원추출로 바꾸면 V(X̄)=σ²/n 이 깨져 ★3 (3) V(aX̄+b)=1 이 되는 a 를 묻기(I-BW · ★3) (4) 공 대신 도수분포표로 제시하면 도수→확률 전환이 명시돼 한 단 쉬워짐(★2 하단)."
```

```yaml
- id: GN-PROB-172-e4
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    음료수 용량이 정규분포 $\mathrm{N}(150,\,5^2)$ 를 따를 때 $100$ 개를 임의추출한 용량의 평균이 $149$ 이상 $151$ 이하일 확률을 표준정규분포표로 구하기. 단위는 $\mathrm{mL}$.
  category: "σ(X̄)=σ/√n → 대칭 구간 표준화 → P(0≤Z≤z) 의 2배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률 구하기(구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=5/√100=0.5 로 바꾸는 것이 전부이고, 구간 149~151 이 평균 150 을 중심으로 대칭이라 Z 범위가 -2≤Z≤2 가 되어 표 값의 2배로 끝난다. 대칭임을 알아채면 표 조회가 한 번으로 줄지만 이는 표준 절차 범위라 통찰로 세지 않았다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "σ(X̄)=5/√100=0.5 → -2≤Z≤2 → 2·P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9544$'
  answer_source: "본문 풀이"
  figure: crop:fig-172-e4.png
  latex: latex-bank/gn-prob/items/172-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(150)·모표준편차(5)·표본크기(100)·구간 끝(149, 151)을 바꿀 수 있음. 제약: (끝값-m)/(σ/√n) 이 표에 실린 z 여야 하고, n 은 완전제곱. 구간을 평균 대칭으로 두면 2배 처리, 비대칭으로 두면 두 표 값의 합이 된다."
    creative: "(1) 구간을 비대칭으로 바꿔 두 값을 더하게 하기(★2, 172-377 과 같은 골조) (2) 확률값을 주고 표본크기 n 을 묻기(I-BW · ★3, 173-e5 골조) (3) 모집단이 정규분포가 아니고 n 이 충분히 크다는 단서로 바꾸면 중심극한정리 적용 판단이 붙어 ★3 (4) 「100개 용량의 합이 14900~15100」으로 진술해 표본합→표본평균 전환(I-RT · ★3)."
```

```yaml
- id: GN-PROB-172-376
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정규분포 $\mathrm{N}(70,\,20^2)$ 인 모집단에서 크기 $100$ 인 표본의 표본평균 $\overline{X}$ 에 대하여 $\mathrm{P}(\overline{X}\ge 73)$ 을 표준정규분포표로 구하기.
  category: "σ(X̄)=σ/√n → 표준화 → 0.5 에서 표 값을 빼는 꼬리확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규모집단 표본평균의 확률(한쪽 꼬리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=20/√100=2 로 옮긴 뒤 Z=(73-70)/2=1.5 로 표준화하고, 표가 P(0≤Z≤z) 형이므로 0.5 에서 빼서 오른쪽 꼬리를 얻는다. 통찰 없는 표준 3단 절차이나 모표준편차를 그대로 쓰면 틀리는 지점(T-범위)이 있어 확인체크 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "σ(X̄)=20/√100=2 → Z=(73-70)/2=1.5 → 0.5-P(0≤Z≤1.5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0668$'
  answer_source: "답지"
  figure: crop:fig-172-376.png
  latex: latex-bank/gn-prob/items/172-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(70)·모표준편차(20)·표본크기(100)·기준값(73)을 바꿀 수 있음. 제약: (기준-m)/(σ/√n) 이 표에 실린 z(0.5·1·1.5·2)여야 하고 n 은 완전제곱. 기준값을 평균보다 작게 두면 대칭 처리로 한 단계가 늘어난다."
    creative: "(1) P(X̄≤67) 로 바꿔 왼쪽 꼬리·대칭 활용(★2) (2) 구간확률로 바꾸기(★2) (3) 확률 0.0668 을 주고 기준값이나 n 을 역산(I-BW · ★2~3, 173-378·173-379 골조) (4) 같은 모집단에서 n 을 4배로 했을 때 확률 변화 방향을 묻기(★3 · I-EQV)."
```

```yaml
- id: GN-PROB-172-377
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    응시자 성적이 정규분포 $\mathrm{N}(200,\,10^2)$ 을 따를 때 임의추출한 $25$ 명의 성적의 평균이 $198$ 점 이상 $204$ 점 이하일 확률을 표준정규분포표로 구하기.
  category: "σ(X̄)=σ/√n → 비대칭 구간 표준화 → 두 표 값의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 확률 구하기(구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=10/√25=2 로 옮기면 구간이 -1≤Z≤2 가 되어 평균을 중심으로 비대칭이다. 따라서 P(0≤Z≤1)+P(0≤Z≤2) 로 쪼개 더해야 하고, 빼는 것으로 착각하는 지점이 함정(T-부호). 통찰 없는 표준 절차이나 구간 분해가 붙어 확인체크 ★1 출발에서 한 단 올려 ★2.
  tier: star_2
  mechanism_primary: "σ(X̄)=10/√25=2 → -1≤Z≤2 → P(0≤Z≤1)+P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.8185$'
  answer_source: "답지"
  figure: crop:fig-172-377.png
  latex: latex-bank/gn-prob/items/172-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(200)·모표준편차(10)·표본크기(25)·구간 끝(198, 204)을 바꿀 수 있음. 제약: 두 끝값의 z 가 모두 표에 있어야 하고 n 은 완전제곱. 구간을 평균 한쪽에 몰아 두면(예: 202~206) 두 표 값의 차가 되어 부호 함정의 성격이 바뀐다."
    creative: "(1) 구간을 평균 한쪽으로 옮겨 뺄셈형으로 바꾸기(★2, 함정 유형 교체) (2) 확률을 주고 구간의 한쪽 끝을 역산(I-BW · ★3) (3) 「평균이 198 이상 204 이하가 아닐 확률」로 여사건을 씌우기(★2) (4) 표본크기를 미지수로 두고 확률이 0.8185 이상이 되는 최소 n 을 묻기(★4 후보 · I-BW + 경계 판정)."
```

```yaml
- id: GN-PROB-173-e5
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    탑승객 짐의 무게가 정규분포 $\mathrm{N}(18,\,4^2)$ 를 따를 때, 임의추출한 $n$ 명의 짐 무게의 평균이 $17$ 이상 $19$ 이하일 확률이 $0.8664$ 이다. 표준정규분포표로 $n$ 의 값 구하기. 단위는 $\mathrm{kg}$.
  category: "대칭 구간 → 확률의 절반을 표에서 거꾸로 읽어 z 확정 → σ/√n 방정식으로 n 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률 0.8664 를 절반으로 나눈 0.4332 를 표에서 거꾸로 찾아 z=1.5 를 얻고, 거기서 표본크기 n 을 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률에서 표본크기 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간 17~19 가 평균 18 대칭이므로 확률을 2로 나눠 P(0≤Z≤z)=0.4332 로 만든 뒤, 표를 값→z 방향으로 거꾸로 읽어야 한다. 그 z 를 1/(4/√n) 과 맞춰 √n 방정식을 풀고 제곱해 n 을 얻는다. 표를 역방향으로 쓰는 단계가 이 유형의 진짜 벽이라 I-BW d1 인정. 필수 예제 ★2 출발 + 통찰 1·M_total 7 로 한 단 올려 ★3.
  tier: star_3
  mechanism_primary: "대칭 구간 → P(0≤Z≤z)=0.4332 → z=1.5 → 1/(4/√n)=1.5 → n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "본문 풀이"
  figure: crop:fig-173-e5.png
  latex: latex-bank/gn-prob/items/173-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(18)·모표준편차(4)·구간 반폭(1)·주어진 확률(0.8664)을 바꿀 수 있음. 제약: 확률의 절반이 표에 실린 P(0≤Z≤z) 값과 정확히 일치해야 하고, z·σ/반폭 의 제곱인 n 이 자연수로 떨어져야 한다. 구간을 대칭으로 유지해야 2로 나누는 단계가 성립한다."
    creative: "(1) 구간을 비대칭으로 두면 2로 나눌 수 없어 표 역조회가 두 번 필요해지고 ★4 (2) n 을 주고 모표준편차를 역산(같은 I-BW 골조 · ★3 유지) (3) 「확률이 0.8664 이상이 되는 최소의 n」으로 바꾸면 경계 판정이 더해져 ★4 (4) 확률을 0.5 미만으로 주면 대칭 구간 가정이 깨져 오답 유도(★3, 함정 강화)."
```

```yaml
- id: GN-PROB-173-378
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정규분포 $\mathrm{N}(50,\,10^2)$ 인 모집단에서 크기 $n$ 인 표본의 표본평균 $\overline{X}$ 에 대하여 $\mathrm{P}(\overline{X}\ge 52)=0.1587$ 을 만족시키는 $n$ 을 표준정규분포표로 구하기.
  category: "꼬리확률 → 0.5 에서 빼 표 값 확보 → 표 역조회로 z → σ/√n 방정식으로 n 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬리확률 0.1587 을 0.5 에서 빼 얻은 0.3413 을 표에서 거꾸로 읽어 z=1 을 얻고 표본크기를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률에서 표본크기 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    173-e5 와 골조가 같되 한쪽 꼬리라 2로 나누는 대신 0.5 에서 빼는 단계로 바뀌고, 수치가 z=1 로 떨어져 방정식 2/(10/√n)=1 이 한 줄에 끝난다. 표를 역방향으로 읽는 벽은 그대로라 I-BW d1 인정. 확인체크 ★1 출발 + 통찰 1 로 ★2. [분류 이슈] 173-e5 와 유형이 같은데 벤더 구역 차로 ★ 가 한 단 갈린다.
  tier: star_2
  mechanism_primary: "0.5-0.1587=0.3413 → z=1 → 2/(10/√n)=1 → √n=5 → n=25"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25$'
  answer_source: "답지"
  figure: crop:fig-173-378.png
  latex: latex-bank/gn-prob/items/173-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(50)·모표준편차(10)·기준값(52)·주어진 확률(0.1587)을 바꿀 수 있음. 제약: 0.5-확률 이 표에 실린 값과 정확히 맞아야 하고, (기준-m)/z·σ 의 역수 제곱인 n 이 자연수로 떨어져야 한다. 확률이 0.5 보다 크면 기준값이 평균보다 작아져 부호가 뒤집힌다."
    creative: "(1) 확률을 0.5 보다 크게 주어 기준값이 평균 왼쪽에 오게 하면 대칭 처리가 추가되어 ★3 (2) 구간확률로 바꾸면 173-e5 와 같은 대칭 분해가 필요해 ★3 (3) n 대신 모표준편차를 역산(★2 유지) (4) 「P(X̄≥52)≤0.1587 인 최소 n」으로 부등식화하면 단조성 판단이 붙어 ★3~4."
```

```yaml
- id: GN-PROB-173-379
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    우유 용량이 정규분포 $\mathrm{N}(1000,\,50^2)$ 을 따를 때 $100$ 개를 임의추출한 표본평균 $\overline{X}$ 에 대하여 $\mathrm{P}(\overline{X}\ge k)=0.0228$ 을 만족시키는 상수 $k$ 를 표준정규분포표로 구하기. 단위는 $\mathrm{mL}$.
  category: "σ(X̄)=σ/√n → 꼬리확률을 0.5 에서 빼 표 역조회로 z → k=m+zσ(X̄) 로 경계값 복원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬리확률 0.0228 에서 0.4772 를 만들어 표를 거꾸로 읽어 z=2 를 얻고, 표준화 식을 k 에 대해 되돌려 경계값을 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률에서 경계값 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=50/√100=5 는 바로 나오고, 0.5-0.0228=0.4772 를 표에서 거꾸로 읽어 z=2 를 얻은 뒤 표준화 식을 k 에 대해 풀어 k=1000+2·5 로 되돌린다. 미지수가 표본크기가 아니라 경계값이라 방정식은 더 쉽지만 표 역조회라는 벽은 같아 I-BW d1 인정. 확인체크 ★1 출발 + 통찰 1 로 ★2.
  tier: star_2
  mechanism_primary: "σ(X̄)=5 → 0.5-0.0228=0.4772 → z=2 → k=1000+2·5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1010$'
  answer_source: "답지"
  figure: crop:fig-173-379.png
  latex: latex-bank/gn-prob/items/173-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(1000)·모표준편차(50)·표본크기(100)·주어진 확률(0.0228)을 바꿀 수 있음. 제약: 0.5-확률 이 표에 실린 값과 일치해야 하고 n 은 완전제곱. 확률을 0.5 보다 크게 두면 z 가 음수가 되어 k 가 평균보다 작아진다(부호 함정)."
    creative: "(1) P(X̄≤k)=0.0228 로 뒤집어 k 가 평균보다 작아지게 하기(★2, T-부호 강화) (2) P(k₁≤X̄≤k₂)=0.9544 인 대칭 구간의 두 끝을 묻기(★3) (3) k 를 고정하고 표본크기 n 을 역산(173-378 골조 · ★2) (4) 「상위 2.28% 에 드는 기준 용량」처럼 백분위 진술로 바꾸면 확률 해석 전환이 붙어 ★3 · I-RT."
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 1 · ★2 11 · ★3 1 · ★4 0 · ★5 0
- 통찰형 3 · 절차형 10 · premium 0
- 통찰 유형 분포: I-BW 3건(모두 depth 1 · `173-e5` · `173-378` · `173-379`) · 그 외 0
- type_hint 상위 5: 「표본평균의 확률에서 표본크기 역산」 2(`173-e5` · `173-378`) · 「표본평균의 평균, 분산, 표준편차(모집단 분포표 주어짐)」 2(`171-e3` · `171-374`) · 「표본평균의 확률 구하기(구간)」 2(`172-e4` · `172-377`) · 「정규모집단 표본평균의 확률(한쪽 꼬리)」 2(`170-372` · `172-376`) · 「표본평균의 확률분포 직접 구성(복원추출)」 1(`170-370`)
- 그림: 8문(`crop:fig-171-e3.png` · `crop:fig-171-374.png` · `crop:fig-172-e4.png` · `crop:fig-172-376.png` · `crop:fig-172-377.png` · `crop:fig-173-e5.png` · `crop:fig-173-378.png` · `crop:fig-173-379.png`) — `171-e3`·`171-374` 는 모집단 확률분포표, 나머지 6개는 표준정규분포표 크롭이다.
- 벤더 신호: 개념원리 익히기 3 · 필수 3 · 확인체크 7 · 기출 태그 0 · STEP 구분 없음 · vendor_level 전부 "-"
- 대상층: 하위권 1 · 중하위권 9 · 중위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-173-378 | `173-e5`(필수 · ★3)와 골조·통찰(I-BW d1)이 같은데 벤더 구역이 확인체크라 ★2 로 한 단 낮게 붙음. 카탈로그가 생기면 같은 유형의 base ★ 로 통일해야 함 | ★2 / ★3 |
| GN-PROB-171-373 | 「V(X̄) 값 → n 역산」도 역방향이지만 표 역조회가 없고 일차방정식 한 줄이라 I-BW 를 세지 않았다. 역산형을 어디서부터 통찰로 볼지 경계가 필요 | ★2 |

벤더 신호와 2단 이상 어긋난 문항은 없다. 확인체크(★1 출발)에서 ★2 로 한 단 올린 문항이 6개 있으나 모두 1단 차이라 이슈로 올리지 않고 rationale 에만 근거를 남겼다. 이 단원은 문항 11개가 ★2 에 몰리는데, 벤더가 같은 골조를 수치만 바꿔 반복 배치한 구조 자체가 원인이며 억지로 분산시키지 않았다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 실질 유형은 넷이다. ① **표본평균의 평균·분산·표준편차** — 모집단의 $m$, $\sigma^2$ 을 확보한 뒤 $\mathrm{E}(\overline{X})=m$, $\mathrm{V}(\overline{X})=\sigma^2/n$ 으로 옮기는 형(`170-371` · `171-e3` · `171-374` · `171-375`). ② **표본평균의 확률분포 직접 구성** — 공식을 쓰지 않고 복원추출 경우를 전수 나열해 분포표를 만드는 형(`170-370`). ③ **표본평균의 확률** — $\overline{X}\sim\mathrm{N}(m,\,\sigma^2/n)$ 표준화 후 표 조회(`170-372` · `172-e4` · `172-376` · `172-377`). ④ **확률에서 미지수 역산** — 표를 거꾸로 읽어 $n$ 또는 경계값 $k$ 를 구하는 형(`173-e5` · `173-378` · `173-379` · 넓게 보면 `171-373`).
- ①의 하위 갈래(분포표 제시 / 도수 제시 / 일차변환 부가)는 앞단만 다르고 뒤 골조가 같으므로 **같은 유형의 난이도 변형으로 통합**하고 base ★ 는 2 로 두는 것이 적절하다. `171-375` 의 일차변환은 「확률변수의 일차변환」 유형과의 교차 태그로 처리하면 된다.
- ②는 ①과 통합하지 말고 **따로 세울 것**. 공식 적용이 아니라 표본평균의 분포가 왜 그렇게 나오는지 만들어 보는 정의형이고, 비복원추출로 바꾸면 곧장 $\mathrm{V}(\overline{X})=\sigma^2/n$ 의 전제를 묻는 ★3 문항이 된다.
- ③과 ④는 표준화까지 골조가 같지만 표를 읽는 방향이 반대(값→확률 vs 확률→값)라 학생 체감이 확연히 갈린다. **따로 세우고**, ④ 안에서 「표본크기 역산」과 「경계값 역산」은 방정식 난도만 달라 한 유형의 두 변형으로 묶는 것을 권한다.
- 단원 전체가 13문항이고 ★4 이상이 하나도 없다. 변별 슬롯이 필요하면 ④ 계열에 비대칭 구간·부등식·최소 $n$ 을 얹거나, 18 단원(모집단과 표본) 및 20 단원(모평균의 추정)과 묶어 ★4 유형을 설계하는 편이 낫다.
