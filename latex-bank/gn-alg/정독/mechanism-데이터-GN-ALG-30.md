---
name: mechanism-데이터-GN-ALG-30
description: 개념원리 대수 30 여러 가지 수열의 합(1/1 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 30 여러 가지 수열의 합
  unit_code: GN-ALG-30
  part: "1/1"
  extract_range: "275~280쪽 · 275-e10~280-660"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(필수 예제와 그 확인체크 유제 ★2 · 특강 ★2 출발 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 30 여러 가지 수열의 합 (1/1) 정독 데이터 (v1.0)

275~280쪽 26문항 전수. 구역은 「필수·발전 예제」 11문(필수 예제 e10~e14 5문 + 확인체크 유제 6문) · 「특강」 3문(특강 예제 1 + 확인체크 2) · 「연습문제 STEP 1」 3문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 3문이다. 이 단원에는 「개념원리 익히기」 구역이 전사 범위에 없어 ★1 표본이 나오지 않고, 대신 STEP·실력 UP·기출 태그가 있어 ★4~5 위쪽이 열려 있다.

이 단원의 도구는 사실상 하나다 — **각 항을 차(또는 비)의 꼴로 쪼개 이웃 항끼리 소거한다**. 겉모습만 분수(부분분수 분해) · 무리식(분모의 유리화) · 로그(진수의 곱)로 바뀐다. 그래서 판정에서 **부분분수 분해·유리화·로그 합의 곱 전환 자체는 이 단원이 가르치는 표준 절차로 보아 통찰로 세지 않았고**, 나열된 몇 항에서 일반항을 읽어내는 일과 소거 결과를 방정식으로 놓고 $n$ 을 푸는 일(단순 미정계수 대입 · §2.2 I-BW 판별의 제외 항목)도 통찰에서 뺐다. 이것들은 Mₛ·Mₖ 와 Mₜ(T-경계 — 소거 후 남는 항의 개수, T-범위 — $\sum$ 의 시작 지표가 $1$ 이 아닌 경우)로 흡수했다.

통찰로 센 것은 여섯 가지다. ① 항을 군으로 묶어 규칙을 스스로 세우는 단계(I-PD · 특강 군수열과 수 배열표), ② 다른 단원의 도구가 없으면 일반항이 나오지 않는 결합(I-XU · 이차방정식의 근과 계수, 인수정리), ③ 기하 조건을 대수식으로 옮기는 전환(I-RT · 직선이 원을 이등분), ④ 소거가 되도록 항을 재구성하는 동치 변환(I-EQV · $\sum k^2$ 과 $2k+1$ 의 약분, 이중 로그와 밑변환 연쇄, 점화식 $a_{n+1}=a_n(a_n+3)$ 에서 $a_n+3=\dfrac{a_{n+1}}{a_n}$), ⑤ 절댓값 때문에 부호가 바뀌는 항을 떼어 구간을 나누는 분기(I-MI), ⑥ 답 후보를 조건으로 걸러 일부를 기각하는 사후 검증(I-VF).

★ 조정은 다음 규칙을 26문항에 일관되게 적용했다. **−1**: 통찰 0 이고 M_total ≤ 5. **+1**: 통찰 2개 이상, 또는 effective_depth 3 통찰이 있음, 또는 (통찰 1개가 depth 2 이고 M_total ≥ 7 이고 출발점이 ★2 이하). ★5 는 통찰 3개 이상 + I-SC/VF/SYM/XU 중 하나가 있을 때만 주었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-ALG-275-e10
  page: 275
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴~⑵ 첫째항부터 제$n$항까지의 합 구하기. ⑴ 은 분모가 $3^2-1,\ 5^2-1,\ 7^2-1,\ \cdots$ 인 분수 수열, ⑵ 는 분모가 $1\times3,\ 2\times4,\ 3\times5,\ \cdots$ 인 분수 수열. 부분분수 분해를 가르치는 필수 예제다.
  category: '일반항 세우기 → 부분분수 분해 → 이웃 항 소거 → 남는 항 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '분수 꼴 수열의 합(부분분수 분해)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{1}{(2k+1)^2-1}=\dfrac{1}{4k(k+1)}$ 로 정리되어 한 칸씩 소거되고, ⑵ 는 $\dfrac{1}{k(k+2)}$ 라 두 칸씩 건너뛰어 앞뒤로 두 항씩 남는다. 소거 폭이 다른 두 경우를 한 문항에 붙여 놓은 것이 이 예제의 설계다.
    부분분수 분해는 이 단원이 가르치는 표준 도구라 통찰로 세지 않고, 남는 항의 개수를 틀리기 쉬운 점만 Mₜ(T-경계)로 잡았다. 필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '일반항을 $\dfrac{1}{k(k+1)}$·$\dfrac{1}{k(k+2)}$ 꼴로 → 부분분수 분해 → 소거 → 남는 항으로 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{n}{4(n+1)}$ ⑵ $\dfrac{n(3n+5)}{4(n+1)(n+2)}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/275-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 분모를 $(2k+1)^2-1$ 대신 $(3k)^2-1$·$(2k)^2-1$ 로, ⑵ 의 간격을 $k(k+3)$·$k(k+4)$ 로 바꿀 수 있다. 제약: 분모가 두 일차식의 곱으로 인수분해되어야 하고, 간격을 $d$ 로 하면 앞뒤로 $d$ 항씩 남으므로 답이 지저분해지지 않는 $d\le3$ 이 적당하다.'
    creative: '(1) 제$n$항까지가 아니라 구체적인 항수까지의 합으로 바꾸면 Mₐ 가 내려가 ★1~2 (2) 합이 주어진 값이 되는 $n$ 을 묻는 역방향으로 바꾸면 STEP 1 급 ★2 (3) 분모를 $\sum k$ 나 $\sum k^2$ 로 감싸 약분을 한 겹 넣으면 I-EQV d2 가 붙어 ★3 (4) $\sum a_k$ 를 먼저 주고 $a_k$ 를 역산하게 하면 ★2~3.'
```

```yaml
- id: GN-ALG-275-641
  page: 275
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    수열 $1,\ \dfrac{1}{1+2},\ \dfrac{1}{1+2+3},\ \cdots$ 의 첫째항부터 제$8$항까지의 합.
  category: '분모를 $\sum k$ 로 읽기 → 부분분수 분해 → 소거'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '분수 꼴 수열의 합(부분분수 분해)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 $1+2+\cdots+k=\dfrac{k(k+1)}{2}$ 이므로 $a_k=\dfrac{2}{k(k+1)}$ 이고, 그 다음은 앞 예제와 같은 한 칸 소거다. 항수가 $8$ 로 구체라 Mₐ 는 1.
    나열된 항에서 일반항을 읽는 일은 수열 단원의 표준 절차로 보아 통찰에서 제외했다. 확인체크 유제는 앞 필수 예제와 같은 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '분모 $=\dfrac{k(k+1)}{2}$ → $a_k=2\left(\dfrac{1}{k}-\dfrac{1}{k+1}\right)$ → 소거 → $2\left(1-\dfrac{1}{9}\right)$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/275-641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항수 $8$ 을 다른 값으로 바꾸거나 제$n$항까지의 합으로 일반화할 수 있다. 제약: 답이 $\dfrac{2n}{n+1}$ 이라 항수를 바꿔도 항상 기약분수로 떨어진다.'
    creative: '(1) 분모를 $1^2+2^2+\cdots+k^2$ 로 바꾸면 $2k+1$ 약분이 필요해 ★3(279-652 골조) (2) 합이 $\dfrac{16}{9}$ 이 되는 항수를 묻는 역방향은 ★2 (3) 분모를 $1+3+5+\cdots$(홀수 합 $=k^2$)로 바꾸면 소거가 안 되고 $\sum\dfrac{1}{k^2}$ 가 되어 고등 범위를 벗어나므로 피한다.'
```

```yaml
- id: GN-ALG-275-642
  page: 275
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\displaystyle\sum_{k=1}^{n}a_k=n^2+4n$ 인 수열 $\{a_n\}$ 에 대하여 $\displaystyle\sum_{k=1}^{n}\frac{1}{a_ka_{k+1}}$ 을 $n$ 의 식으로 나타내기.
  category: '$S_n-S_{n-1}$ 로 일반항 역산 → 부분분수 분해 → 소거'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\sum a_k$ 가 주어진 수열의 분수 꼴 합'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_n=S_n-S_{n-1}=2n+3$ 이고 $n=1$ 에서도 성립하므로 예외 처리가 없다. 그 뒤 $\dfrac{1}{(2k+3)(2k+5)}$ 를 분해하면 간격 $2$ 의 한 칸 소거.
    앞 단원(29)에서 배운 $S_n$ 역산 공식 적용은 표준 절차라 통찰로 세지 않고, $n=1$ 확인과 분모의 지표 이동을 Mₜ(T-경계·T-범위) 2 로 흡수했다. 확인체크 출발 ★2 · 통찰 0 · M_total 8 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_n=S_n-S_{n-1}=2n+3$ → $\dfrac{1}{2}\left(\dfrac{1}{2k+3}-\dfrac{1}{2k+5}\right)$ → 소거'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{n}{5(2n+5)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/275-642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=n^2+4n$ 의 계수를 바꿔 $a_n$ 을 다른 등차수열로 만들 수 있다($n^2+2n\Rightarrow a_n=2n+1$, $3n^2-n\Rightarrow a_n=6n-4$). 제약: $a_n$ 이 등차수열이어야 부분분수의 분모 차가 상수로 고정되고, $S_1=a_1$ 이 성립하도록 상수항을 $0$ 으로 둔다.'
    creative: '(1) $S_n$ 에 상수항을 붙여 $n=1$ 에서 일반항이 깨지게 하면 T-경계가 살아나 ★3 (2) $\dfrac{1}{a_ka_{k+1}}$ 대신 $\dfrac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}$ 로 바꾸면 280-655 골조 (3) 합을 $n$ 의 식이 아니라 주어진 값으로 놓고 $n$ 을 묻는 역방향은 ★2~3 (4) $a_n$ 이 등차가 아닌 $S_n=2^n-1$ 로 주면 소거가 깨져 다른 단원으로 넘어간다.'
```

```yaml
- id: GN-ALG-276-e11
  page: 276
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    수열 $\dfrac{1}{1+\sqrt{2}},\ \dfrac{1}{\sqrt{2}+\sqrt{3}},\ \cdots$ 의 첫째항부터 제$n$항까지의 합. 분모의 유리화를 가르치는 필수 예제다.
  category: '분모를 유리화해 차의 꼴로 → 이웃 항 소거'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리식을 포함한 수열의 합(분모의 유리화)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{\sqrt{k}+\sqrt{k+1}}$ 의 분모를 유리화하면 $\sqrt{k+1}-\sqrt{k}$ 가 되어 전부 소거되고 양 끝 두 항만 남는다. 분모의 두 수의 차가 $1$ 이라 계수 보정도 없다.
    유리화는 이 단원이 가르치는 표준 도구라 통찰 미인정. 필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{\sqrt{k}+\sqrt{k+1}}=\sqrt{k+1}-\sqrt{k}$ → 소거 → $\sqrt{n+1}-1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{n+1}-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/276-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모 안의 수열을 $\sqrt{2k-1}+\sqrt{2k+1}$·$\sqrt{3k}+\sqrt{3k+3}$ 처럼 공차 $d$ 인 등차수열로 바꿀 수 있다. 제약: 유리화 뒤 분모가 $d$ 라는 상수가 되어야 소거가 성립하고, 끝항이 완전제곱이면 답이 정수로 떨어진다.'
    creative: '(1) 시작 지표를 $k=1$ 이 아닌 $k=3$ 으로 두면 T-범위가 붙어 ★2 유지·오답률만 상승 (2) 합이 특정 값이 되는 $n$ 을 묻는 역방향(276-643) (3) 분모 안의 수열을 $\sum a_k$ 로 간접 제시하면 ★3(280-655) (4) 분모를 $\sqrt[3]{}$ 로 바꾸면 유리화가 세제곱 공식이 되어 교육과정을 벗어난다.'
```

```yaml
- id: GN-ALG-276-e12
  page: 276
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    첫째항 $1$, 공차 $2$ 인 등차수열 $\{a_n\}$ 에 대하여 $\displaystyle\sum_{k=1}^{12}\frac{1}{\sqrt{a_{k+1}}+\sqrt{a_k}}$ 의 값.
  category: '일반항 $a_n=2n-1$ → 유리화 → 공차로 나눈 차의 꼴 → 소거'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리식을 포함한 수열의 합(등차수열 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등차수열이면 유리화 뒤 분모가 공차 $d=2$ 로 고정되어 $\dfrac{\sqrt{a_{k+1}}-\sqrt{a_k}}{2}$ 가 되고, 남는 것은 $\dfrac{\sqrt{a_{13}}-\sqrt{a_1}}{2}$ 뿐이다. 앞 예제의 $d=1$ 을 일반 $d$ 로 한 칸 올린 짝 문항이다.
    공차로 나누는 보정을 빼먹는 것이 주 오답이라 Mₜ 에 T-단위로 반영했다. 필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_n=2n-1$ → 유리화로 $\dfrac{\sqrt{a_{k+1}}-\sqrt{a_k}}{2}$ → 소거 → $\dfrac{\sqrt{25}-\sqrt{1}}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/276-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·공차·항수를 바꿀 수 있다(첫째항 $2$·공차 $3$·$\sum_{k=1}^{21}$ 등). 제약: 마지막 항 $a_{n+1}$ 과 첫째항이 모두 완전제곱이어야 답이 유리수로 떨어진다($a_1=1$, $a_{13}=25$ 처럼).'
    creative: '(1) 첫째항과 공차를 미지수로 두고 합을 준 뒤 $a_4$ 를 묻는 역방향이 280-656(★3) (2) 등차수열 대신 $a_n=n^2$ 을 주면 유리화해도 소거가 안 되어 설계가 깨진다 (3) 항수를 미지수 $n$ 으로 두고 합이 자연수가 되는 조건을 묻게 하면 ★4 (4) $\sum a_k$ 로 간접 제시하면 ★3.'
```

```yaml
- id: GN-ALG-276-643
  page: 276
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $f(n)=\sqrt{n+1}+\sqrt{n+2}$ 일 때 $\displaystyle\sum_{k=1}^{n}\frac{1}{f(k)}=2\sqrt{2}$ 를 만족시키는 자연수 $n$.
  category: '유리화 → 소거 → 남은 무리식을 방정식으로 놓고 $n$ 풀기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리식 수열의 합이 주어진 값이 되는 $n$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{f(k)}=\sqrt{k+2}-\sqrt{k+1}$ 이라 소거 뒤 $\sqrt{n+2}-\sqrt{2}$ 만 남고, 이를 $2\sqrt{2}$ 와 같다고 놓으면 $\sqrt{n+2}=3\sqrt{2}$ 한 줄이다.
    $f$ 가 함수 기호로 포장돼 있을 뿐 골조는 e11 과 같고, 마지막 $n$ 역산은 단순 방정식 풀이라 §2.2 의 I-BW 제외 규정대로 통찰로 세지 않았다. 확인체크 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{f(k)}=\sqrt{k+2}-\sqrt{k+1}$ → 소거 → $\sqrt{n+2}-\sqrt{2}=2\sqrt{2}$ → $n$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/276-643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 $3\sqrt{2}$·$4\sqrt{2}$ 처럼 바꾸거나 $f(n)=\sqrt{n}+\sqrt{n+1}$ 로 지표를 밀 수 있다. 제약: $\sqrt{n+2}=(\text{우변})+\sqrt{2}$ 의 우변이 $\sqrt{2}$ 의 정수배여야 $n$ 이 자연수로 떨어진다.'
    creative: '(1) $f$ 를 $\sqrt{2n-1}+\sqrt{2n+1}$ 로 바꿔 공차 보정을 넣으면 ★2~3 (2) 합을 자연수로 만드는 $n$ 을 모두 구하게 하면 I-VF 가 붙어 ★4(280-660 골조) (3) 분수형 $\dfrac{1}{f(k)f(k+1)}$ 로 겹치면 ★3 (4) $f$ 를 로그로 바꾸면 277 구역 골조로 옮겨 간다.'
```

```yaml
- id: GN-ALG-276-644
  page: 276
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    이차방정식 $x^2-(2n+1)x+n(n+1)=0$ 의 두 근을 $\alpha_n$, $\beta_n$ 이라 할 때 $\displaystyle\sum_{k=1}^{80}\frac{1}{\sqrt{\alpha_k}+\sqrt{\beta_k}}$ 의 값.
  category: '이차방정식을 인수분해해 두 근을 $n$, $n+1$ 로 특정 → 유리화 → 소거'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수에 $n$ 이 들어간 이차방정식을 $(x-n)\\{x-(n+1)\\}=0$ 으로 인수분해해 두 근을 구체적인 $n$, $n+1$ 로 확정하는 단계. 방정식 단원의 도구를 빼면 무리식 합의 일반항 자체가 나오지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '이차방정식의 두 근으로 주어진 무리식 수열의 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근의 합 $2n+1$ · 곱 $n(n+1)$ 에서 근이 $n$, $n+1$ 임을 읽어내야 $\dfrac{1}{\sqrt{n}+\sqrt{n+1}}$ 이라는 일반항이 생긴다. 그 뒤는 e11 과 같은 한 칸 소거로 $\sqrt{81}-1$.
    근을 특정하지 못하면 근과 계수의 관계만으로는 끝까지 가지 못하므로 단원 경계 결합(I-XU d2)으로 인정했다. 확인체크 출발 ★2 + 통찰 1개 d2 + M_total 7 → +1 → ★3.
  tier: star_3
  mechanism_primary: '$x^2-(2n+1)x+n(n+1)=(x-n)(x-n-1)$ → 근 $n$, $n+1$ → 유리화 → 소거 → $\sqrt{81}-1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/276-644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근을 $n$, $n+2$ 로 두면 계수는 $-(2n+2)$, $n(n+2)$ 가 되고 소거가 두 칸 간격이 된다. 항수 $80$ 도 바꿀 수 있다. 제약: 마지막 항의 근이 완전제곱이어야 답이 정수이고($81$), 두 근이 모두 양수여야 $\sqrt{\ }$ 가 정의된다.'
    creative: '(1) 근과 계수의 관계만 주고 $\sqrt{\alpha_k}+\sqrt{\beta_k}$ 를 제곱해 구하게 하면 I-EQV 가 하나 더 붙어 ★4 (2) 분모를 $\alpha_k\beta_k$ 로 바꾸면 분수 꼴 소거(★2) (3) 삼차방정식의 세 근으로 올리면 Mₛ 상승 ★4 (4) 방정식 대신 점 $(\alpha_n,\beta_n)$ 이 어떤 도형 위에 있다는 조건으로 주면 I-RT 로 갈아 끼워 ★3 유지.'
```

```yaml
- id: GN-ALG-277-e13
  page: 277
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴~⑵ 로그의 합 계산. ⑴ $\displaystyle\sum_{k=1}^{40}\log_3\frac{2k+1}{2k-1}$, ⑵ $\displaystyle\sum_{k=2}^{8}\log\sqrt{1-\frac{1}{k^2}}$. 로그의 합을 진수의 곱으로 바꿔 소거하는 법을 가르치는 필수 예제다.
  category: '$\sum\log=\log\prod$ → 진수의 곱에서 약분 → 남는 진수로 계산'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그를 포함한 수열의 합(진수의 곱으로 소거)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{3}{1}\cdot\dfrac{5}{3}\cdots\dfrac{81}{79}$ 가 통째로 약분되어 $\log_3 81$ 만 남는다. ⑵ 는 $1-\dfrac{1}{k^2}=\dfrac{(k-1)(k+1)}{k^2}$ 로 쪼갠 뒤 $\prod\dfrac{k-1}{k}$ 와 $\prod\dfrac{k+1}{k}$ 두 덩어리로 나눠 각각 소거하고, 바깥의 $\sqrt{\ }$ 때문에 $\dfrac{1}{2}$ 배가 붙는다.
    진수의 곱 전환은 이 단원의 표준 도구, $1-\dfrac{1}{k^2}$ 인수분해는 지수·로그 단원의 상용 변형이라 통찰 미인정. 시작 지표가 $2$ 이고 $\sqrt{\ }$ 계수를 빠뜨리기 쉬워 Mₜ(T-범위·T-표기) 2. 필수 예제 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sum\log=\log\prod$ → 진수의 곱을 약분 → ⑵ 는 $\dfrac{(k-1)(k+1)}{k^2}$ 두 덩어리 소거 후 $\dfrac{1}{2}$ 배'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $\log\dfrac{3}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/277-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 항수와 밑을 바꿀 수 있다($\log_5$ 로 두고 끝항을 $5$ 의 거듭제곱에 맞추기). ⑵ 의 시작·끝 지표도 자유. 제약: ⑴ 은 남는 진수가 밑의 거듭제곱이어야 답이 정수이고, ⑵ 는 남는 네 항이 간단한 유리수여야 한다.'
    creative: '(1) ⑴ 의 합이 $4$ 가 되는 항수를 묻는 역방향은 ★2 (2) 진수를 $1+\dfrac{1}{k}$ 로 단순화하면 ★1~2(277-645 ⑴) (3) 로그 안에 로그를 한 겹 더 씌우면 밑변환 연쇄가 필요해 ★3(277-645 ⑵) (4) $\sum a_k$ 를 로그로 주고 홀수 번째 항만 더하게 하면 ★3(277-646).'
```

```yaml
- id: GN-ALG-277-e14
  page: 277
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    첫째항과 공비가 모두 $5$ 인 등비수열 $\{a_n\}$ 에 대하여 $\displaystyle\sum_{k=1}^{12}\log_{25}a_k$ 의 값.
  category: '일반항 $a_n=5^n$ → 로그를 $\dfrac{k}{2}$ 로 → 등차수열의 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그를 포함한 수열의 합(등비수열 대입)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a_k=5^k$ 이므로 $\log_{25}5^k=\dfrac{k}{2}$ 가 되고, 소거가 아니라 $\dfrac{1}{2}\sum k$ 로 끝난다. 이 단원에서 유일하게 「소거하지 않는」 로그 합이라 앞 예제와 짝을 이룬다.
    밑변환과 등차수열의 합 공식은 모두 표준 절차. 밑이 $25$ 인 것을 $5$ 로 고치지 않고 계산하는 것이 주 오답이라 Mₜ 에 T-단위로 반영했다. 필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a_k=5^k$ → $\log_{25}a_k=\dfrac{k}{2}$ → $\dfrac{1}{2}\cdot\dfrac{12\cdot13}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$39$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/277-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항·공비·로그의 밑·항수를 바꿀 수 있다(첫째항 $3$·공비 $3$·밑 $\sqrt{3}$ 등). 제약: 밑이 첫째항의 유리수 거듭제곱이어야 $\log$ 값이 $k$ 의 일차식으로 떨어지고, 첫째항과 공비가 다르면 $\log a_k$ 가 $ak+b$ 꼴이 되어 계산이 한 겹 늘어난다.'
    creative: '(1) 첫째항과 공비를 다르게 주면 등차수열의 합이 두 항으로 늘어 ★2 유지·계산만 증가 (2) 합이 주어진 값이 되는 항수를 묻는 역방향은 ★2~3 (3) $\log a_k$ 대신 $\log(a_k+3)$ 처럼 소거형으로 바꾸면 ★4(280-659) (4) 등비수열을 점화식으로 간접 제시하면 ★3.'
```

```yaml
- id: GN-ALG-277-645
  page: 277
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 로그의 합 계산. ⑴ $\displaystyle\sum_{k=1}^{999}\log\left(1+\frac{1}{k}\right)$, ⑵ $\displaystyle\sum_{k=1}^{14}\log_2\{\log_{k+1}(k+2)\}$.
  category: '로그의 합을 진수의 곱으로 → ⑵ 는 안쪽 로그의 곱을 밑변환 연쇄로 소거'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 바깥 $\\sum\\log_2$ 를 곱의 로그로 묶은 뒤, 안쪽 $\\log_{k+1}(k+2)$ 의 곱이 밑변환 연쇄로 $\\log_2 16$ 으로 줄어든다는 것을 보는 단계. 로그가 이중으로 씌워져 있어 소거 대상이 진수가 아니라 「로그값의 곱」이다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '로그를 포함한 수열의 합(진수의 곱으로 소거)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $\prod\dfrac{k+1}{k}=1000$ 으로 끝나는 e13 의 한 칸 짝 문항이라 ★2 급이다. 판정을 끌어올린 것은 ⑵ 로, 소거가 진수끼리가 아니라 「로그값끼리의 곱」에서 일어난다는 것을 먼저 보아야 한다.
    확인체크 출발 ★2 + 통찰 1개 d2 + M_total 7 → +1 → ★3. [분류 이슈] 두 소문항의 체감 차가 커서(⑴ ★2 · ⑵ ★3) 한 블록의 라벨은 무거운 쪽으로 잡았다.
  tier: star_3
  mechanism_primary: '$\sum\log=\log\prod$ → ⑴ 진수 약분으로 $\log1000$ · ⑵ $\log_2\!\left(\prod\log_{k+1}(k+2)\right)=\log_2(\log_2 16)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $3$ ⑵ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/277-645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 항수 $999$ 를 $10^m-1$ 꼴로, ⑵ 의 항수 $14$ 를 $2^m-2$ 꼴로 바꿀 수 있다. 제약: ⑴ 은 $\log(\text{항수}+1)$ 이 정수여야 하고, ⑵ 는 밑변환 연쇄의 끝값 $\log_2(\text{끝수})$ 가 다시 $2$ 의 거듭제곱이어야 바깥 $\log_2$ 가 정수로 떨어진다.'
    creative: '(1) ⑵ 의 바깥 밑을 $\log_4$ 로 바꾸면 계수만 달라지고 골조 유지(★3) (2) 밑변환 연쇄를 세 겹으로 쌓으면 Mₛ 상승 ★4 (3) ⑴ 의 항수를 미지수로 두고 합이 자연수가 되는 조건을 묻게 하면 I-VF 가 붙어 ★4 (4) 안쪽을 $\log_{k+1}(k+2)$ 대신 $\log_{k}(k+1)$ 로 밀면 지표 경계만 달라진다.'
```

```yaml
- id: GN-ALG-277-646
  page: 277
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\displaystyle\sum_{k=1}^{n}a_k=\log_2(n^2+n)$ 인 수열 $\{a_n\}$ 에 대하여 $\displaystyle\sum_{k=2}^{32}a_{2k-1}$ 의 값.
  category: '$S_n-S_{n-1}$ 로 $a_n$ 역산 → 홀수 번째 항만 골라 곱으로 묶기 → 소거'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_n=\\log_2\\dfrac{n+1}{n-1}$ 에서 홀수 번째 항만 뽑으면 진수가 $\\dfrac{2k}{2k-2}$ 가 되어 다시 이웃끼리 약분된다는 것을 보는 단계. 항을 건너뛰어 뽑아도 소거 구조가 유지되는지 확인해야 식을 세울 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sum a_k$ 가 주어진 로그 수열의 부분합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_n=\log_2\dfrac{n^2+n}{(n-1)n}=\log_2\dfrac{n+1}{n-1}$ 이고, $n=2k-1$ 을 넣으면 진수가 $\dfrac{2k}{2k-2}=\dfrac{k}{k-1}$ 이라 $k=2$ 부터 $32$ 까지 곱하면 $32$ 만 남는다.
    $S_n$ 역산은 표준 절차로 보아 제외하고, 항을 건너뛰어 뽑은 뒤에도 소거가 되도록 진수를 재배열하는 단계만 통찰로 셌다. 확인체크 출발 ★2 + 통찰 1개 d2 + M_total 8 → +1 → ★3. [분류 이슈] 확인체크치고 지표 조작이 무거워 벤더 신호와 1단 어긋난다.
  tier: star_3
  mechanism_primary: '$a_n=\log_2\dfrac{n+1}{n-1}$ → $a_{2k-1}=\log_2\dfrac{k}{k-1}$ → 곱으로 묶어 소거 → $\log_2 32$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/277-646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=\log_2(n^2+n)$ 의 진수를 $n^2+3n$·$n(n+2)$ 로, 뽑는 지표를 $a_{2k}$·$a_{3k-1}$ 로, 끝 지표 $32$ 를 다른 $2$ 의 거듭제곱으로 바꿀 수 있다. 제약: 남는 진수가 밑 $2$ 의 거듭제곱이어야 답이 정수이고, 뽑는 간격을 늘리면 소거가 끊기므로 진수의 차가 간격과 맞아야 한다.'
    creative: '(1) 짝수 번째 항만 더하게 하면 시작 경계만 바뀌고 ★3 유지 (2) 뽑는 지표를 $a_{k^2}$ 로 하면 소거가 깨져 다른 문제가 된다 (3) $\sum a_k$ 를 로그가 아닌 $n^2+4n$ 으로 주면 275-642 골조(★2) (4) 답이 자연수가 되는 끝 지표를 모두 구하게 하면 I-VF 가 붙어 ★4.'
```

### 특강

```yaml
- id: GN-ALG-278-e1
  page: 278
  vendor_label: '특강'
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: '특강 예제'
  summary: |
    수열 $1,\ 1,\ 2,\ 1,\ 2,\ 3,\ 1,\ 2,\ 3,\ 4,\ \cdots$ 에서 제$110$항 구하기. 항을 묶어 규칙을 찾는 군수열을 가르치는 특강 예제다.
  category: '$n$ 개씩 군으로 묶기 → 누적 항수 $\dfrac{n(n+1)}{2}$ 로 제$110$항이 속한 군 찾기 → 군 안의 자리'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나열만 된 수열을 $(1),(1,2),(1,2,3),\\cdots$ 으로 끊어 제$n$ 군이 $n$ 개의 항을 갖는 구조를 스스로 세우는 단계. 문제에 군의 존재가 명시돼 있지 않다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '군수열 — 제$n$항이 속한 군과 그 안의 자리 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    군으로 끊고 나면 제$14$군까지 $105$ 항, 제$15$군까지 $120$ 항이므로 제$110$항은 제$15$군의 $5$ 번째, 즉 $5$ 다. 군 구조를 못 보면 손도 못 대고, 보고 나면 부등식 한 줄이다.
    「누적 $105$ 항까지가 제$14$군의 끝」과 「$110-105=5$ 번째」의 경계 처리가 주 오답이라 Mₜ 2. 특강 예제 출발 ★2 + 통찰 1개 d2 + M_total 8 → +1 → ★3.
  tier: star_3
  mechanism_primary: '제$n$군에 $n$ 개 → 누적 $\dfrac{n(n+1)}{2}$ → $105<110\le120$ 이므로 제$15$군의 $5$ 번째 → $5$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/278-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항 번호 $110$ 을 다른 값으로 바꿀 수 있다. 제약: 군의 끝 $\dfrac{n(n+1)}{2}$ 와 너무 가까운 값(예: $105$, $106$)을 고르면 경계 오답만 늘고 골조는 같으므로, 군 중간쯤 값이 낫다.'
    creative: '(1) 제$110$항까지의 합을 묻게 하면 군별 합 $\dfrac{n(n+1)}{2}$ 을 다시 더해야 해 ★4 (2) 군 안의 수열을 등차·등비로 바꾸면(각 군이 $1,3,5,\cdots$) 자리 계산이 한 겹 늘어 ★3 유지 (3) 특정 값이 처음 나오는 항 번호를 묻는 역방향이 278-647 (4) 분수 군수열로 바꾸면 278-648.'
```

```yaml
- id: GN-ALG-278-647
  page: 278
  vendor_label: '특강'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    수열 $1,\ 3,\ 3,\ 5,\ 5,\ 5,\ 7,\ 7,\ 7,\ 7,\ \cdots$ 에서 $25$ 가 처음 나타나는 항은 제몇 항인지.
  category: '제$n$군 $=(2n-1)$ 이 $n$ 개 → $25$ 가 속한 군 번호 → 그 군의 첫 항 번호'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 수가 반복되는 나열을 $(1),(3,3),(5,5,5),\\cdots$ 으로 끊어 「제$n$ 군은 $2n-1$ 이 $n$ 개」라는 이중 규칙(값과 개수)을 세우는 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '군수열 — 특정 값이 처음 나타나는 항의 번호'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $2n-1=25$ 에서 제$13$군임을 얻고, 그 앞까지의 항수 $\dfrac{12\cdot13}{2}=78$ 에 $1$ 을 더해 제$79$항이다. 값의 규칙과 개수의 규칙을 각각 세워야 한다는 점이 e1 보다 한 겹 두껍다.
    「제$13$군의 첫 항 $=78+1$」에서 $+1$ 을 빠뜨리는 것이 표준 오답이라 Mₜ(T-경계) 2. 확인체크 출발 ★2 + 통찰 1개 d2 + M_total 8 → +1 → ★3.
  tier: star_3
  mechanism_primary: '제$n$군 $=2n-1$ 이 $n$ 개 → $2n-1=25\Rightarrow n=13$ → 앞 $12$ 군의 항수 $78$ → 제$79$항'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '제$79$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/278-647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '찾는 값 $25$ 를 다른 홀수로, 군의 값 규칙을 $3n-2$·$n^2$ 로, 개수 규칙을 $2n-1$ 개로 바꿀 수 있다. 제약: 찾는 값이 값 규칙의 상에 실제로 들어가야 하고(짝수를 고르면 군이 없다), 개수 규칙이 바뀌면 누적 항수가 $\sum(2k-1)=n^2$ 처럼 함께 바뀐다.'
    creative: '(1) $25$ 가 마지막으로 나타나는 항을 묻게 하면 경계가 반대쪽이 되어 ★3 유지 (2) 제$100$항의 값을 묻는 순방향은 278-e1 골조 (3) 첫째항부터 제$79$항까지의 합을 묻게 하면 군별 합 $(2n-1)\cdot n$ 을 다시 더해야 해 ★4 (4) 값과 개수 규칙을 서로 다르게(값 $2n-1$ · 개수 $n^2$) 두면 Mₛ 상승 ★4.'
```

```yaml
- id: GN-ALG-278-648
  page: 278
  vendor_label: '특강'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 분수 군수열 $\dfrac{1}{2},\ \dfrac{1}{3},\ \dfrac{2}{3},\ \dfrac{1}{4},\ \dfrac{2}{4},\ \dfrac{3}{4},\ \cdots$ 에 대하여 ⑴ $\dfrac{17}{20}$ 은 제몇 항인지, ⑵ 제$95$항은 무엇인지.
  category: '분모 $n+1$ 인 항을 제$n$군으로 묶기 → ⑴ 값 → 항 번호 · ⑵ 항 번호 → 값'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 같은 항끼리 묶어 「제$n$ 군은 분모 $n+1$, 분자 $1$ 부터 $n$ 까지의 $n$ 개」라는 구조를 세우는 단계. 약분되지 않은 $\\dfrac{2}{4}$ 가 그대로 나열돼 있다는 점이 군 구조의 단서다"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 에서 값 $\\dfrac{17}{20}$ 으로부터 군 번호와 군 안의 자리를 거꾸로 되짚어 항 번호를 복원하는 단계. ⑵ 의 순방향과 짝을 이룬다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '군수열 — 항 번호 ↔ 군 자리의 양방향 변환'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 분모 $20$ → 제$19$군, 분자 $17$ → 그 군의 $17$ 번째, 앞 $18$ 군의 항수 $171$ 을 더해 제$188$항. ⑵ 는 누적 항수로 제$95$항이 제$14$군의 $4$ 번째임을 찾아 $\dfrac{4}{15}$.
    같은 군 구조를 양방향으로 한 번씩 쓰게 해 놓은 설계라 통찰 2개(구조 발견 + 역방향 복원)를 셌다. 확인체크 출발 ★2 + 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: '제$n$군 $=$ 분모 $n+1$ 의 $n$ 개 → ⑴ $\dfrac{17}{20}$: 제$19$군 $17$ 번째 $=171+17$ · ⑵ $95$: 제$14$군 $4$ 번째 $=\dfrac{4}{15}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 제$188$항 ⑵ $\dfrac{4}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/278-648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 분수와 ⑵ 의 항 번호를 바꿀 수 있다. 제약: ⑴ 의 분수는 약분되지 않은 원래 형태여야 군이 유일하게 정해지고(예 $\dfrac{2}{4}$ 를 $\dfrac{1}{2}$ 로 쓰면 제$1$군과 혼동), ⑵ 의 항 번호는 군 경계 $\dfrac{n(n+1)}{2}$ 를 피해 군 중간에 두는 편이 낫다.'
    creative: '(1) 분자·분모를 뒤집어 $\dfrac{2}{1},\dfrac{3}{1},\dfrac{3}{2},\cdots$ 로 두면 같은 골조 ★3 (2) 제$95$항까지의 합을 묻게 하면 군별 합 $\dfrac{n}{2}$ 를 더해야 해 ★4 (3) 약분한 값 $\dfrac{1}{2}$ 이 몇 번째로 나타나는지 묻게 하면 중복 후보를 걸러야 해 I-VF 가 붙고 ★4 (4) 격자 좌표로 재배치하면 I-RT 로 갈아 끼울 수 있다.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-279-649
  page: 279
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $\displaystyle\sum_{k=1}^{n}\frac{1}{4k^2-1}=\frac{25}{51}$ 를 만족시키는 자연수 $n$.
  category: '$4k^2-1$ 인수분해 → 부분분수 분해 → 소거 → 방정식으로 $n$ 풀기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '분수 꼴 수열의 합이 주어진 값이 되는 $n$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{(2k-1)(2k+1)}=\dfrac{1}{2}\left(\dfrac{1}{2k-1}-\dfrac{1}{2k+1}\right)$ 로 소거하면 합이 $\dfrac{n}{2n+1}$ 이고, $\dfrac{n}{2n+1}=\dfrac{25}{51}$ 에서 $n=25$ 가 바로 읽힌다.
    인수분해·부분분수·마지막 방정식 모두 표준 절차라 통찰 0. STEP 1 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{4k^2-1}$ 부분분수 → 소거 → $\dfrac{n}{2n+1}=\dfrac{25}{51}$ → $n=25$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 $\dfrac{m}{2m+1}$ 꼴의 다른 값으로 바꾸면 그대로 $n=m$ 이 된다. 분모를 $9k^2-1$·$16k^2-1$ 로 바꾸면 소거 계수가 달라진다. 제약: 우변이 기약분수 $\dfrac{n}{2n+1}$ 형태여야 자연수 해가 나온다.'
    creative: '(1) 합을 $n$ 의 식으로 나타내게 하는 순방향은 ★2 (2) 합이 $\dfrac{1}{2}$ 보다 작음을 보이게 하면 부등식 논증이 붙어 ★3 (3) 분모를 $4k^2+4k$ 로 바꾸면 275-e10 ⑴ 골조 (4) 합이 자연수가 되는 $n$ 이 없음을 보이게 하면 I-VF 로 ★4.'
```

```yaml
- id: GN-ALG-279-650
  page: 279
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    다항식 $a_nx^2-a_n-3$ 이 $x-n$ 으로 나누어떨어질 때 $\displaystyle\sum_{k=2}^{10}a_k$ 의 값.
  category: '인수정리로 $a_n$ 확정 → 부분분수 분해 → 소거'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「$x-n$ 으로 나누어떨어진다」를 인수정리로 $a_n\\cdot n^2-a_n-3=0$ 으로 옮겨 $a_n=\\dfrac{3}{n^2-1}$ 을 얻는 단계. 다항식 단원의 도구가 없으면 일반항 자체가 나오지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '인수정리로 일반항을 구한 뒤 분수 꼴 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    인수정리로 $a_n(n^2-1)=3$ 을 얻으면 $a_n=\dfrac{3}{(n-1)(n+1)}$ 이고, 간격 $2$ 의 부분분수라 앞뒤로 두 항씩 남는다.
    수열 문제의 외피 안에 다항식 단원의 인수정리가 들어 있어 I-XU d2. 시작 지표가 $2$ 이고 $n=1$ 에서 $a_n$ 이 정의되지 않는 점, 남는 항이 네 개인 점이 함정이라 Mₜ 2. STEP 1 출발 ★2 + 통찰 1개 d2 + M_total 8 → +1 → ★3.
  tier: star_3
  mechanism_primary: '인수정리 $\Rightarrow a_n=\dfrac{3}{n^2-1}=\dfrac{3}{2}\left(\dfrac{1}{n-1}-\dfrac{1}{n+1}\right)$ → 소거 → 남는 네 항'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{108}{55}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 $-3$ 과 합의 범위 $k=2\sim10$ 을 바꿀 수 있다. 제약: $a_n=\dfrac{c}{n^2-1}$ 이므로 $n=1$ 이 범위에 들어가면 안 되고, 끝 지표를 바꾸면 남는 네 항이 함께 바뀐다.'
    creative: '(1) 나누는 식을 $x-2n$ 으로 바꾸면 $a_n=\dfrac{3}{4n^2-1}$ 이 되어 간격 $2$ 의 짝수형(★3 유지) (2) 인수정리 대신 나머지를 $r$ 로 주면 조건이 한 겹 늘어 ★4 (3) $a_n$ 을 직접 주면 ★2 로 내려간다 (4) 다항식을 삼차로 올리면 $a_n$ 이 이차식의 역수가 되어 소거 여부를 따져야 하므로 ★4.'
```

```yaml
- id: GN-ALG-279-651
  page: 279
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제 STEP 1'
  summary: |
    $a_n=1+\dfrac{1}{n^2-1}$ 일 때 $\displaystyle\sum_{k=2}^{20}\log a_k=\log\frac{q}{p}$ 라 한다. 서로소인 두 자연수 $p$, $q$ 에 대하여 $p+q$ 의 값.
  category: '$a_n$ 을 $\dfrac{n^2}{(n-1)(n+1)}$ 로 정리 → 로그의 합을 곱으로 → 두 갈래 소거'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$1+\\dfrac{1}{n^2-1}$ 을 통분해 $\\dfrac{n^2}{(n-1)(n+1)}$ 로 바꾸고, 이를 $\\dfrac{n}{n-1}\\cdot\\dfrac{n}{n+1}$ 두 갈래로 갈라야 진수의 곱이 소거된다는 것을 보는 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '로그를 포함한 수열의 합(진수의 곱으로 소거)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통분하지 않으면 로그의 합이 곱으로 묶이지 않는다. 갈라 놓으면 $\prod\dfrac{k}{k-1}=20$, $\prod\dfrac{k}{k+1}=\dfrac{2}{21}$ 로 각각 소거되어 $\log\dfrac{40}{21}$.
    마지막에 $\dfrac{q}{p}$ 와 자리를 맞춰 $q=40$, $p=21$ 로 읽는 표기 함정이 있어 Mₜ 2. STEP 1 출발 ★2 + 통찰 1개 d2 + M_total 8 → +1 → ★3.
  tier: star_3
  mechanism_primary: '$a_n=\dfrac{n}{n-1}\cdot\dfrac{n}{n+1}$ → $\log\prod$ → 두 갈래 소거 → $\log\dfrac{40}{21}$ → $p+q$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$61$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합의 범위 $k=2\sim20$ 을 바꾸거나 $a_n=1+\dfrac{1}{n^2-4}$ 로 간격을 넓힐 수 있다. 제약: $n^2-1$ 의 근 $n=1$ 이 범위 밖이어야 하고, 간격을 $d$ 로 넓히면 남는 항이 $2d$ 개로 늘어 답이 지저분해진다.'
    creative: '(1) $\log a_k$ 대신 $\log_2 a_k$ 로 바꾸고 값이 정수가 되게 설계하면 ★3 유지 (2) $p+q$ 대신 $q-p$ 나 $\dfrac{q}{p}$ 자체를 묻는 것은 난이도 무관 (3) 범위의 끝을 미지수 $m$ 으로 두고 합이 자연수가 되는 $m$ 을 묻게 하면 ★4~5(280-660 골조) (4) $a_n=1-\dfrac{1}{n^2}$ 로 바꾸면 277-e13 ⑵ 와 같은 골조.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-279-652
  page: 279
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    $\dfrac{3}{1^2}+\dfrac{5}{1^2+2^2}+\dfrac{7}{1^2+2^2+3^2}+\cdots+\dfrac{21}{1^2+2^2+\cdots+10^2}$ 의 값.
  category: '분모를 $\sum k^2$ 로 읽기 → 분자 $2k+1$ 과 약분 → 부분분수 소거'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 $\\dfrac{k(k+1)(2k+1)}{6}$ 안의 $2k+1$ 이 분자와 그대로 약분되어 $\\dfrac{6}{k(k+1)}$ 이라는 깨끗한 소거형이 된다는 것을 보는 단계. 분자가 $2k+1$ 로 설계된 이유를 읽어야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분모가 $\sum k^2$ 인 분수 꼴 수열의 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자 $3,5,7,\cdots,21$ 이 $2k+1$ 이고 분모가 $\sum_{i=1}^{k}i^2$ 이라 약분 한 번으로 $6\left(\dfrac{1}{k}-\dfrac{1}{k+1}\right)$ 이 된다. 약분을 못 보면 삼차식의 역수 합이 되어 손을 못 댄다.
    약분 뒤의 계산은 가벼워 M_total 은 6 에 그친다. STEP 2 출발 ★3 · 통찰 1개 d2(M_total 7 미만이라 +1 조건 미충족) → ★3 유지.
  tier: star_3
  mechanism_primary: '$\dfrac{2k+1}{\sum_{i\le k}i^2}=\dfrac{6}{k(k+1)}$ → 부분분수 → 소거 → $6\left(1-\dfrac{1}{11}\right)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{60}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '끝항 $\dfrac{21}{1^2+\cdots+10^2}$ 의 항수를 바꿀 수 있다. 제약: 분자는 반드시 $2k+1$ 이어야 약분이 일어나고, $2k+1$ 의 상수배(예 $4k+2$)까지는 허용되지만 $2k+3$ 으로 바꾸면 설계가 깨진다.'
    creative: '(1) 분모를 $1+2+\cdots+k$ 로 낮추면 약분이 필요 없어 ★2(275-641) (2) 분자를 $k(2k+1)$ 로 두면 소거가 $\dfrac{6}{k+1}$ 만 남아 조화합이 되어 못 푼다 — 설계 금지 (3) 항수를 미지수 $n$ 으로 두고 합이 $\dfrac{60}{11}$ 이 되는 $n$ 을 묻는 역방향은 ★3 유지 (4) 분모를 $\sum k^3$ 으로 올리면 $\left(\dfrac{k(k+1)}{2}\right)^2$ 이라 분자를 $k(k+1)$ 계열로 맞춰야 하고 ★4.'
```

```yaml
- id: GN-ALG-279-653
  page: 279
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    직선 $y=x+a_n$ 이 원 $(x-2n)^2+(y-2n^2)^2=n^2$ 을 이등분할 때 $\displaystyle\sum_{k=2}^{15}\frac{1}{a_k}$ 의 값.
  category: '이등분 조건 → 직선이 중심을 지남 → $a_n$ 확정 → 부분분수 소거'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선이 원의 넓이를 이등분한다」는 기하 진술을 「직선이 중심 $(2n,\\ 2n^2)$ 을 지난다」는 대입 조건으로 옮기는 단계. 원 방정식과 직선을 연립하는 대수적 접근으로는 풀리지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '도형 조건에서 일반항을 얻은 뒤 분수 꼴 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심을 대입하면 $2n^2=2n+a_n$ 에서 $a_n=2n(n-1)$ 이고, $\dfrac{1}{a_n}=\dfrac{1}{2}\left(\dfrac{1}{n-1}-\dfrac{1}{n}\right)$ 로 소거된다. 반지름 $n$ 은 답에 전혀 쓰이지 않는 미끼다.
    기하→대수 전환이 유일한 진입로라 I-RT d2. STEP 2 출발 ★3 · 통찰 1개 d2(출발점이 ★2 초과라 +1 조건 미충족) → ★3 유지.
  tier: star_3
  mechanism_primary: '이등분 $\Rightarrow$ 중심 통과 $\Rightarrow a_n=2n^2-2n$ → $\dfrac{1}{a_n}=\dfrac{1}{2}\left(\dfrac{1}{n-1}-\dfrac{1}{n}\right)$ → 소거'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심을 $(n,\ n^2)$·$(3n,\ 3n^2)$ 으로, 직선의 기울기를 다른 상수로, 합의 범위를 바꿀 수 있다. 제약: $a_n$ 이 두 일차식의 곱으로 인수분해되어야 소거가 되고($2n(n-1)$), $a_n=0$ 이 되는 $n=1$ 은 합의 범위에서 빠져야 한다.'
    creative: '(1) 직선이 원에 접하는 조건으로 바꾸면 점과 직선의 거리가 들어와 $a_n$ 이 무리식이 되고 ★4 (2) 원 대신 두 점을 잇는 선분의 중점 조건으로 바꾸면 같은 골조 ★3 (3) 반지름 $n$ 을 실제로 쓰는 조건(현의 길이)으로 바꾸면 Mₛ 상승 ★4 (4) $\sum\dfrac{1}{a_k}$ 대신 $\sum\dfrac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}$ 로 바꾸면 무리식 골조로 이동.'
```

```yaml
- id: GN-ALG-279-654
  page: 279
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제 STEP 2'
  summary: |
    모든 자연수 $n$ 에 대하여 $\displaystyle\sum_{k=1}^{n}\frac{1}{(2k-1)a_k}=n^2+2n$ 일 때 $\displaystyle\sum_{n=1}^{10}a_n$ 의 값. 5지선다.
  category: '$\sum$ 안의 덩어리를 $S_n-S_{n-1}$ 로 역산 → $a_n$ 으로 풀기 → 부분분수 소거'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$S_n$ 역산의 대상이 $a_n$ 이 아니라 $\\dfrac{1}{(2n-1)a_n}$ 이라는 덩어리임을 보고, 그 값 $2n+1$ 에서 $a_n=\\dfrac{1}{(2n-1)(2n+1)}$ 을 거꾸로 꺼내는 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$\sum$ 안의 일반항이 주어진 수열의 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\dfrac{1}{(2n-1)a_n}=S_n-S_{n-1}=2n+1$ 이므로 $a_n=\dfrac{1}{(2n-1)(2n+1)}$ 이고, 그 뒤는 279-649 와 같은 소거로 $\dfrac{1}{2}\left(1-\dfrac{1}{21}\right)$.
    $S_n$ 역산 자체는 표준 절차지만 역산 대상이 $a_n$ 이 아니라는 점이 이 문항의 전부라 그 단계만 통찰로 셌다. $n=1$ 확인과 역수 꺼내기에서 부호·자리 실수가 많아 Mₜ 2. STEP 2 출발 ★3 · 평가원 기출 $+0$(통찰 1개) → ★3 유지.
  tier: star_3
  mechanism_primary: '$\dfrac{1}{(2n-1)a_n}=2n+1$ → $a_n=\dfrac{1}{(2n-1)(2n+1)}$ → 부분분수 소거 → $\dfrac{10}{21}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/279-654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 $n^2+2n$ 의 계수와 $\sum$ 안의 인수 $(2k-1)$ 을 바꿀 수 있다($n^2$·$(3k-2)$ 등). 제약: $S_n-S_{n-1}$ 이 $\sum$ 안 인수와 짝이 맞는 일차식이어야 $a_n$ 이 두 일차식의 곱의 역수로 떨어지고, $S_1=$ 첫째항이 성립하도록 상수항은 $0$.'
    creative: '(1) $\sum$ 안을 $\dfrac{a_k}{2k-1}$ 로 뒤집으면 $a_n$ 이 이차식이 되어 소거가 사라지고 $\sum k^2$ 문제로 바뀐다 (2) 합의 끝 $10$ 을 미지수로 두고 값을 주면 역방향 ★3 (3) 우변을 $\log$ 로 주면 277-646 골조 (4) $\sum$ 안을 $\dfrac{1}{\sqrt{a_k}}$ 로 바꾸면 무리식 소거로 ★4.'
```

```yaml
- id: GN-ALG-280-655
  page: 280
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    $\displaystyle\sum_{k=1}^{n}a_k=2n^2-n$ 인 수열에 대하여 $\displaystyle\sum_{k=1}^{n}\frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}=\frac{3}{2}$ 를 만족시키는 자연수 $n$.
  category: '$S_n-S_{n-1}$ 로 $a_n=4n-3$ → 유리화(공차 $4$ 보정) → 소거 → $n$ 풀기'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리식 수열의 합이 주어진 값이 되는 $n$ 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_n=4n-3$ 이라는 등차수열을 얻으면 유리화 뒤 분모가 공차 $4$ 로 고정되어 $\dfrac{\sqrt{a_{n+1}}-\sqrt{a_1}}{4}=\dfrac{3}{2}$ 이고, $\sqrt{4n+1}=7$ 에서 $n=12$.
    세 도구($S_n$ 역산 · 유리화 소거 · 방정식)가 이어 붙었지만 셋 다 이 단원과 앞 단원의 표준 절차라 통찰은 0 으로 두고 Mₛ 를 3 으로 올렸다. STEP 2 출발 ★3 · 통찰 0 이지만 M_total 9 라 $-1$ 조건($\le5$) 미해당 → ★3 유지.
  tier: star_3
  mechanism_primary: '$a_n=S_n-S_{n-1}=4n-3$ → $\dfrac{\sqrt{a_{k+1}}-\sqrt{a_k}}{4}$ 소거 → $\dfrac{\sqrt{4n+1}-1}{4}=\dfrac{3}{2}$ → $n=12$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/280-655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$S_n=2n^2-n$ 의 계수(공차)와 우변 $\dfrac{3}{2}$ 를 바꿀 수 있다. 제약: $S_n$ 이 상수항 없는 이차식이어야 $a_n$ 이 등차수열이고 $S_1=a_1$ 이 성립하며, $\sqrt{a_{n+1}}$ 이 정수가 되도록 우변을 맞춰야 $n$ 이 자연수로 떨어진다.'
    creative: '(1) $S_n$ 대신 첫째항·공차를 직접 주면 276-e12 골조(★2) (2) 첫째항과 공차가 같다는 조건으로 바꾸면 280-656 (3) 합이 자연수가 되는 $n$ 을 모두 구하게 하면 I-VF 가 붙어 ★4 (4) $\sqrt{a_k}+\sqrt{a_{k+1}}$ 대신 $\sqrt{a_k}+\sqrt{a_{k+2}}$ 로 간격을 벌리면 두 칸 소거가 되어 ★4.'
```

```yaml
- id: GN-ALG-280-656
  page: 280
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: '연습문제 STEP 2'
  summary: |
    모든 항이 양수이고 첫째항과 공차가 같은 등차수열 $\{a_n\}$ 이 $\displaystyle\sum_{k=1}^{15}\frac{1}{\sqrt{a_k}+\sqrt{a_{k+1}}}=2$ 를 만족시킬 때 $a_4$ 의 값. 5지선다.
  category: '첫째항 $=$ 공차 $\Rightarrow a_n=an$ 단일 매개변수화 → 유리화 소거 → $a$ 역산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「첫째항과 공차가 같다」와 「모든 항이 양수」를 묶어 $a_n=an$($a>0$)이라는 하나의 매개변수 식으로 통합하는 단계. 이 통합 덕분에 $\\sqrt{a_n}=\\sqrt{a}\\sqrt{n}$ 으로 쪼개져 소거가 끝까지 간다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '무리식을 포함한 수열의 합(첫째항 $=$ 공차인 등차수열)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a_n=an$ 으로 통합하면 합이 $\dfrac{\sqrt{a_{16}}-\sqrt{a_1}}{a}=\dfrac{4\sqrt{a}-\sqrt{a}}{a}=\dfrac{3}{\sqrt{a}}$ 이 되어 $\sqrt{a}=\dfrac{3}{2}$, $a_4=4a=9$.
    두 조건의 통합(I-CON d2)이 진입로이고 나머지는 표준 절차다. STEP 2 출발 ★3 · 수능 기출 $+0$(통찰 1개라 가산 없음)·출발점이 ★2 초과라 +1 조건 미충족 → ★3. [분류 이슈] 기출 태그에 $+1$ 을 주면 ★4 후보.
  tier: star_3
  mechanism_primary: '첫째항 $=$ 공차 $\Rightarrow a_n=an$ → 소거 합 $=\dfrac{3}{\sqrt{a}}=2$ → $a=\dfrac{9}{4}$ → $a_4=9$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/280-656.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항수 $15$ 와 합의 값 $2$, 묻는 항 $a_4$ 를 바꿀 수 있다. 제약: 마지막 지표 $n+1$ 이 완전제곱이어야 $\sqrt{a_{n+1}}=\sqrt{a}\sqrt{n+1}$ 의 계수가 정수로 떨어지고($16\Rightarrow4$), 합의 값은 $\dfrac{(\sqrt{n+1}-1)}{\sqrt{a}}$ 가 유리수가 되도록 고른다.'
    creative: '(1) 첫째항과 공차의 비를 $2:1$ 처럼 다르게 주면 $\sqrt{a_n}$ 이 쪼개지지 않아 소거가 깨진다 — 설계 제약 (2) $a_4$ 대신 첫째항이나 공차를 묻는 것은 난이도 무관 (3) 항수를 미지수로 두고 합이 자연수가 되는 항수를 묻게 하면 I-VF 로 ★4 (4) 「모든 항이 양수」를 빼면 부호 케이스가 갈려 I-MI 가 붙고 ★4.'
```

```yaml
- id: GN-ALG-280-657
  page: 280
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제 STEP 2'
  summary: |
    삼각형 모양으로 자연수를 나열한 배열표(첫 줄 $1$ · 둘째 줄 $2\ 3$ · 셋째 줄 $3\ 4\ 5$ · 넷째 줄 $4\ 5\ 6\ 7$ · $\cdots$)에서 첫 번째 줄부터 $8$ 번째 줄까지 나열된 모든 수의 합.
  category: '줄별 규칙 발견(제$n$줄은 $n$ 부터 $n$ 개) → 줄별 합 → $\sum$ 공식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "배열표에서 「제$n$ 줄은 $n$ 부터 시작하는 연속한 $n$ 개의 자연수」라는 규칙을 스스로 읽어 줄별 합 $n^2+\\dfrac{n(n-1)}{2}$ 을 세우는 단계. 그림에는 네 줄만 주어져 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '수 배열표의 줄별 합'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제$n$ 줄의 합은 첫항 $n$ · 끝항 $2n-1$ 의 등차수열 합 $\dfrac{n(3n-1)}{2}$ 이고, 이를 $n=1$ 부터 $8$ 까지 더하면 $\sum k^2$ 와 $\sum k$ 두 공식으로 끝난다.
    시작값과 개수가 모두 줄 번호 $n$ 에 묶여 있다는 점을 읽는 것이 전부라 I-PD d2 하나. 끝항을 $2n$ 으로 잘못 세는 경계 실수가 잦아 Mₜ 2. STEP 2 출발 ★3 · 통찰 1개 d2(출발점 ★2 초과) → ★3 유지.
  tier: star_3
  mechanism_primary: '제$n$줄 $=n,\ n+1,\ \cdots,\ 2n-1$ → 줄별 합 $\dfrac{n(3n-1)}{2}$ → $\displaystyle\sum_{n=1}^{8}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$288$'
  answer_source: "답지"
  figure: crop:fig-280-657.png
  latex: latex-bank/gn-alg/items/280-657.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '줄 수 $8$ 을 바꾸거나 각 줄의 시작값을 $2n$·$n^2$ 으로 바꿀 수 있다. 제약: 줄별 합이 $n$ 의 이차식 이하로 떨어져야 $\sum k^2$·$\sum k$ 공식만으로 끝나고, 시작값을 $2^n$ 으로 두면 등비 합이 되어 다른 단원으로 넘어간다.'
    creative: '(1) 배열표의 특정 위치(제$8$줄 $3$ 번째)의 수를 묻게 하면 군수열 골조 ★3 (2) 어떤 수가 처음 나타나는 줄을 묻게 하면 중복 출현을 걸러야 해 I-VF 가 붙어 ★4 (3) 줄별 합이 아니라 대각선 방향의 합을 묻게 하면 규칙 재발견이 필요해 ★4 (4) 줄 수를 미지수 $n$ 으로 두고 합을 $n$ 의 식으로 나타내게 하면 Mₐ 상승 ★3 유지.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-280-658
  page: 280
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    첫째항 $-9$, 공차 $2$ 인 등차수열에 대하여 $S=\displaystyle\sum_{k=1}^{10}\left|\frac{1}{a_ka_{k+1}}\right|$ 이라 할 때 $99S$ 의 값.
  category: '$a_n=2n-11$ → 곱의 부호가 바뀌는 항 분리 → 구간별 부분분수 소거 → 합산'
  M: {s: 3, k: 3, a: 2, t: 3}
  M_total: 11
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_5=-1$, $a_6=1$ 이라 $a_5a_6<0$ 인 항 하나만 절댓값 안의 부호가 반대임을 찾아, 합을 $k\\le4$ · $k=5$ · $k\\ge6$ 의 세 구간으로 갈라 각각 다른 식으로 처리하는 단계. 한 구간이라도 놓치면 소거가 어긋난다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '절댓값이 붙은 분수 꼴 수열의 합(부호 전환 항 분리)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_n=2n-11$ 은 $a_5=-1$ 에서 $a_6=1$ 로 부호가 바뀌므로 $a_ka_{k+1}$ 이 음수인 것은 $k=5$ 하나뿐이다. 음수 구간과 양수 구간에서는 절댓값이 그대로 벗겨져 각각 부분분수로 소거되고, $k=5$ 항만 따로 더한다.
    분리 구조를 못 보고 전 구간을 한 번에 소거하면 반드시 틀린다. 부호·경계·범위가 겹쳐 Mₜ 3, 세 덩어리 분수 합산으로 Mₖ 3. 실력 UP 출발 ★4 · 통찰 1개 d2 → ★4 유지.
  tier: star_4
  mechanism_primary: '$a_n=2n-11$ → 부호 전환 항 $k=5$ 분리 → $k\le4$·$k\ge6$ 에서 각각 $\dfrac{1}{2}\left(\dfrac{1}{a_k}-\dfrac{1}{a_{k+1}}\right)$ 소거 → 세 조각 합산'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$188$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/280-658.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항 $-9$ 와 항수 $10$ 을 바꿔 부호가 바뀌는 자리를 옮길 수 있다. 제약: 공차가 $2$ 이고 첫째항이 홀수여야 어떤 항도 $0$ 이 되지 않아 분모가 살고, 마지막에 곱하는 $99$ 는 분모 $9\cdot11$ 에 맞춘 값이므로 첫째항을 바꾸면 함께 바꿔야 한다.'
    creative: '(1) 절댓값을 빼면 부호 분기가 사라져 ★2~3 (2) 첫째항을 짝수로 두어 $a_n=0$ 이 되는 항이 생기게 하면 정의되지 않는 항을 기각해야 해 I-VF 가 붙고 ★5 후보 (3) 항수를 미지수로 두고 $S$ 를 $n$ 의 식으로 나타내게 하면 구간 경계가 $n$ 에 따라 갈려 I-MI d3 로 ★5 (4) $\left|\dfrac{1}{a_ka_{k+1}}\right|$ 대신 $\dfrac{1}{|a_k||a_{k+1}|}$ 로 쓰면 같은 값이지만 학생의 분기 인식이 쉬워져 ★3.'
```

```yaml
- id: GN-ALG-280-659
  page: 280
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제 실력 UP'
  summary: |
    $a_1=10$, $a_{n+1}=a_n^{2}+3a_n$ 을 만족시키는 수열에 대하여 $\displaystyle\sum_{k=1}^{30}\log(a_k+3)$ 과 같은 것 고르기. 5지선다.
  category: '점화식을 비의 꼴로 변형 → 로그의 합을 곱으로 → 소거'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "$a_{n+1}=a_n(a_n+3)$ 으로 인수분해한 뒤 구하려는 덩어리 $a_n+3$ 을 $\\dfrac{a_{n+1}}{a_n}$ 이라는 비로 바꿔 놓는 단계. 이 한 번의 변형으로 $\\sum\\log$ 가 곧바로 소거형이 된다. 점화식을 풀어 일반항을 구하려 하면 끝까지 못 간다"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: '점화식에서 로그 소거 꼴을 만드는 수열의 합'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $a_k+3=\dfrac{a_{k+1}}{a_k}$ 이므로 합이 $\log\dfrac{a_{31}}{a_1}=\log a_{31}-1$ 이 된다. 일반항을 구하려는 정공법은 이차 점화식이라 막히고, 변형을 보면 두 줄이다.
    「구하려는 것을 점화식 그대로 비로 바꾼다」는 진입 착안이 이 문항의 전부이고 대안 경로가 사실상 없어 depth 3 으로 잡았다. 실력 UP 출발 ★4 · depth 3 이라 $+1$ 후보이나 ★5 게이트(통찰 3개 이상 + I-SC/VF/SYM/XU 중 하나) 미충족 → ★4 유지. [분류 이슈] 체감은 ★5 에 가깝다.
  tier: star_4
  mechanism_primary: '$a_{n+1}=a_n(a_n+3)\Rightarrow a_n+3=\dfrac{a_{n+1}}{a_n}$ → $\sum\log=\log\dfrac{a_{31}}{a_1}$ → $\log a_{31}-1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/280-659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a_1=10$ 과 점화식의 상수 $3$, 항수 $30$ 을 바꿀 수 있다($a_{n+1}=a_n^2+5a_n$ 이면 $a_k+5$ 를 묻는다). 제약: $a_1$ 이 밑 $10$ 의 거듭제곱이어야 $\log a_1$ 이 정수로 떨어지고, 상수는 점화식과 구하는 덩어리에서 같은 값이어야 비의 꼴이 성립한다.'
    creative: '(1) $\sum\log a_k$ 를 묻게 하면 비로 바뀌지 않아 설계가 깨진다 (2) 선택지 없이 $\log a_{31}$ 을 $p\log a_1+q$ 꼴로 나타내게 하면 Mₐ 상승 ★4 유지 (3) 점화식을 $a_{n+1}=a_n^2-a_n$ 으로 바꿔 $a_k-1=\dfrac{a_{n+1}}{a_n}$ 이 되게 하면 같은 골조 (4) 합이 자연수가 되는 항수를 묻게 하면 I-VF 가 붙어 ★5 후보.'
```

```yaml
- id: GN-ALG-280-660
  page: 280
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제 실력 UP'
  summary: |
    $a_n=\log_2\sqrt{\dfrac{2(n+1)}{n+2}}$ 일 때 $\displaystyle\sum_{k=1}^{m}a_k$ 의 값이 $100$ 이하의 자연수가 되도록 하는 모든 자연수 $m$ 의 값의 합. 5지선다.
  category: '일반항을 상수부 + 소거부로 분리 → 부분합 정리 → 자연수 조건으로 $m$ 후보 → 범위로 기각'
  M: {s: 3, k: 3, a: 2, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a_n=\\dfrac{1}{2}\\left\\{1+\\log_2\\dfrac{n+1}{n+2}\\right\\}$ 로 갈라 「항마다 쌓이는 상수 $\\dfrac{1}{2}$」와 「소거되는 로그」 두 부분으로 나누는 단계. 통째로는 소거도 누적도 보이지 않는다"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "부분합 $\\dfrac{m+1}{2}-\\dfrac{1}{2}\\log_2(m+2)$ 가 자연수이려면 먼저 $\\log_2(m+2)$ 가 정수여야 하므로 $m+2=2^t$ 라는 형태 조건을 역으로 끌어내는 단계. 결과가 갖춰야 할 성질에서 $m$ 의 꼴을 거꾸로 규정한다"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$m=2^t-2$ 후보들을 다시 원 조건에 넣어 ⑴ $\\dfrac{2^t-1-t}{2}$ 가 정수가 되도록 $t$ 가 홀수인 것만 남기고 ⑵ 값이 $100$ 이하인 것만 남겨 일부 후보를 기각하는 단계"
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: '로그 수열의 합이 자연수가 되는 조건'
  base_star: null
  effective_star: 5
  star: 5
  premium: true
  rationale: |
    진수 안의 $2$ 를 $\sqrt{\ }$ 밖으로 빼 상수 $\dfrac{1}{2}$ 를 만들고 나머지 $\log_2\dfrac{n+1}{n+2}$ 만 소거시키는 분리가 1단계, 거기서 $m+2$ 가 $2$ 의 거듭제곱이어야 한다는 형태 조건을 역추적하는 것이 2단계, 남은 후보를 홀짝과 $100$ 이하로 두 번 거르는 것이 3단계다.
    통찰 3개(EQV d2 · BW d3 · VF d2)이고 저노출 유형 I-VF 를 포함하므로 §2.13 ★5 게이트를 통과한다. 실력 UP 출발 ★4 · 평가원 기출 · M_total 11 → ★5. [분류 이슈] 정독 자산 규칙상 novelty_score 를 0 으로 두어 §2.14 의 ★5 참신도 게이트와는 형식적으로 어긋난다(출제 슬롯이 아니라 기록용이므로 그대로 둠).
  tier: star_5
  mechanism_primary: '$a_n=\dfrac{1}{2}+\dfrac{1}{2}\log_2\dfrac{n+1}{n+2}$ → 부분합 $\dfrac{m+1}{2}-\dfrac{1}{2}\log_2(m+2)$ → $m+2=2^t$ → $t$ 홀수·값 $\le100$ 으로 걸러 $m=6,\ 30,\ 126$ → 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/280-660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상한 $100$ 을 바꾸면 살아남는 $t$ 의 개수가 달라진다($t=3,5,7$ 이 값 $2,13,60$ 이므로 상한을 $20$ 으로 낮추면 두 개만 남는다). 제약: 진수 안의 상수는 밑 $2$ 의 거듭제곱이어야 상수부가 유리수로 떨어지고, $\sqrt{\ }$ 의 $\dfrac{1}{2}$ 때문에 생기는 홀짝 조건이 이 문항의 핵심이므로 $\sqrt{\ }$ 를 빼면 난이도가 두 단 내려간다.'
    creative: '(1) $\sqrt{\ }$ 를 없애면 홀짝 필터가 사라져 I-VF 가 빠지고 ★3~4 (2) 「자연수」를 「정수」로 바꾸면 $m$ 의 하한 처리만 달라지고 골조 유지 ★5 (3) 값의 합이 아니라 개수를 묻게 하면 마지막 계산만 가벼워지고 ★5 유지 (4) 밑을 $3$ 으로 바꾸면 $m+2=3^t$ 가 되고 상수부가 $\log_3 2$ 라 무리수가 섞여 설계가 깨진다 (5) 상한 조건을 없애면 후보가 무한해져 I-VF 가 사라진다.'
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 0 · ★2 9 · ★3 14 · ★4 2 · ★5 1
- 통찰형 16 · 절차형 10 · premium 1(280-660)
- 통찰 유형 분포(총 18개 라벨): I-EQV 6 · I-PD 4 · I-XU 2 · I-BW 2 · I-RT 1 · I-CON 1 · I-MI 1 · I-VF 1 — depth 3 은 2개(280-659 EQV · 280-660 BW), 나머지는 depth 2(278-648 의 BW 만 depth 1)
- type_hint 상위: 「로그를 포함한 수열의 합(진수의 곱으로 소거)」 3(277-e13 · 277-645 · 279-651) · 「군수열 계열」 3(278-e1 · 278-647 · 278-648) · 「분수 꼴 수열의 합(부분분수 분해)」 2(275-e10 · 275-641) · 「무리식을 포함한 수열의 합(분모의 유리화)」 2(276-e11 · 276-643) · 「$\sum a_k$ 가 주어진 수열의 합」 2(275-642 · 277-646)
- 구역별: 필수·발전 예제 11문(★2 8 · ★3 3) · 특강 3문(전부 ★3) · STEP 1 3문(★2 1 · ★3 2) · STEP 2 6문(전부 ★3) · 실력 UP 3문(★4 2 · ★5 1)
- 대상층: 중하위권 9 · 중위권 6 · 중상위권 10 · 상위권 1
- 그림: 1문(`crop:fig-280-657.png` · 삼각 배열표) · 선택지 문항 4문(279-654 · 280-656 · 280-659 · 280-660) · 소문항 묶음 4문(275-e10 · 277-e13 · 277-645 · 278-648)
- ★1 표본이 0 인 것은 이 단원에 「개념원리 익히기」 구역이 없기 때문이다(전사 범위가 필수 예제부터 시작).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 벤더 신호와 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-277-645 | 소문항 ⑴(★2 급)과 ⑵(이중 로그·밑변환 연쇄, ★3 급)의 체감 차가 커서 한 블록 라벨을 무거운 쪽으로 잡음 | ★2 / ★3 |
| GN-ALG-277-646 | 확인체크 유제(출발 ★2)인데 지표 조작($a_{2k-1}$ 로 건너뛰기)이 앞 필수 예제보다 무거워 ★3 으로 올림 | ★2 / ★3 |
| GN-ALG-278-e1 | 「특강」 구역의 벤더 신호가 ★2~3 로 넓어 예제를 ★2 출발로 볼지 ★3 출발로 볼지 경계. ★2 출발 + 통찰 $+1$ 로 처리했고 결과는 같음 | ★3 |
| GN-ALG-280-656 | 수능 기출 태그에 $+1$ 을 주면 ★4, 통찰 1개 d2 기준으로는 ★3. 기출 태그 가산은 통찰이 뒷받침될 때만 주기로 해 ★3 유지 | ★3 / ★4 |
| GN-ALG-280-659 | 통찰이 1개지만 effective_depth 3(대안 경로 없음)이라 체감은 ★5 에 가깝다. ★5 게이트(통찰 3개 이상 + I-SC/VF/SYM/XU)를 못 넘어 ★4 유지 | ★4 / ★5 |
| GN-ALG-280-660 | ★5 로 판정했으나 정독 자산 규칙상 `novelty_score` 가 0 이라 §2.14 의 ★5 참신도 게이트와 형식적으로 충돌. 출제 슬롯이 아니라 기록이므로 그대로 둠 | ★5 |

## 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 이 범위에서 확인된 것.

- **통합해도 될 유형**: 「분수 꼴(부분분수)」·「무리식(유리화)」·「로그(진수의 곱)」 세 계열은 겉모습만 다르고 골조가 전부 「일반항을 차 또는 비의 꼴로 쪼개 소거」다. 카탈로그에서는 **「소거형 수열의 합」이라는 하나의 상위 유형** 아래 표현별 세 하위 유형으로 두는 편이 base ★ 관리가 쉽다(이 범위에서 셋 다 base ★2 로 같게 나왔다).
- **따로 세워야 할 유형**: 「$\sum a_k$ 가 먼저 주어진 소거형」(275-642 · 277-646 · 279-654 · 280-655)은 $S_n$ 역산이 한 겹 더 얹히고 $n=1$ 경계가 붙어 오답 양상이 다르다. base ★ 를 소거형 본체보다 한 단 위로 잡는다.
- **따로 세워야 할 유형**: 「군수열」(278 특강 3문)은 이 단원의 다른 문항과 도구가 전혀 겹치지 않는다(소거가 아니라 누적 항수 부등식). 280-657 의 수 배열표도 같은 유형에 넣되, 항 번호 → 값 · 값 → 항 번호 · 구간 합의 세 방향을 난이도 단계로 둔다.
- **다른 단원 결합 축**: 276-644(이차방정식 근과 계수) · 279-650(인수정리) · 279-653(원과 직선)은 소거형 본체는 ★2 급인데 진입로만 타 단원 도구로 바꾼 설계다. 카탈로그에서는 독립 유형이 아니라 **「소거형 + 진입 조건 교체」라는 변형 축**으로 기록해 두면 변형 출제에 바로 쓸 수 있다.
- **★4~5 를 만드는 축**은 이 범위에서 딱 셋이다 — ① 절댓값·부호 전환으로 구간을 가르기(280-658) ② 점화식을 비의 꼴로 바꿔 소거를 만들기(280-659) ③ 부분합이 자연수가 될 조건을 역추적하고 후보를 거르기(280-660). 카탈로그의 상위 ★ 슬롯은 이 세 축으로 채우고, 계산량만 늘린 변형은 §2.11 기준으로 질 저하(YELLOW)로 본다.
- **대상층 메모**: 소거형 본체(★2)는 중하위권 숙달용으로 그대로 쓸 수 있으나, 통찰 라벨이 I-XU·I-PD·I-CON 인 ★3 문항(276-644 · 278 군수열 · 280-656 · 280-657)은 §3.2 에서 중위권 회피 유형이라 중상위권으로 배정했다. 중위권용 ★3 을 더 확보하려면 I-EQV·I-RT 계열(277-645 · 279-651 · 279-652 · 279-653 · 279-654)에서 뽑는다.
