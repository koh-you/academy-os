---
name: mechanism-데이터-GN-ALG-28
description: 개념원리 대수 28 Σ의 뜻과 그 성질(1/1 · 260~264쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-alg
  section: 28 Σ의 뜻과 그 성질
  unit_code: ALG-28
  part: "1/1"
  extract_range: "260~264쪽 · 260-602~264-612"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 범위 조정 기준은 「통찰 depth 1 하나면 출발점 유지 · depth 2 이상이거나 통찰 2개 이상이면 +1」. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 대수 · 28 Σ의 뜻과 그 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 28단원 260~264쪽 15문항 전수를 담는다. 구역은 두 개다. 「개념원리 익히기」(260쪽 602~604 · 통번호 · 태그 없음)는 Σ 기호의 정의와 선형성을 그대로 확인하는 문항이라 ★1 출발이고, 「필수·발전 예제」(261~264쪽)는 상자 발문만 전사된 필수 예제(`쪽-eN` · tag 「필수」)와 그 뒤의 확인체크 문항(통번호 · tag 「확인체크」)이 번갈아 놓인 구조라 둘 다 ★2 출발로 잡았다. 이 범위에는 STEP 1·STEP 2·실력 UP 연습문제 구역과 기출 태그, 그림 문항이 없다.

단원 도구 자체는 좁다. Σ 기호의 정의, 선형성 Σ(pa+qb)=pΣa+qΣb, Σc=nc, 그리고 앞 단원의 등차·등비수열 합 공식이 전부다. 그래서 난이도를 만드는 것은 계산이 아니라 **첨자 조작**이다. 합의 범위를 1씩 밀어 겹치는 부분을 소거하기(261-e1·605·606·610), 첨자 쌍 2k-1·2k 를 풀어 1~2n 전체 합으로 환원하기(261-e1⑵·607ㄷ), 첨자 반전 k ↔ n-k 의 대칭을 쓰기(607ㄱ·612) — 이 세 가지가 이 범위 통찰의 거의 전부이며 모두 I-EQV 또는 I-SYM 으로 잡힌다. 반대로 262쪽 Σ의 성질 구역은 선형성 대입만 요구해 M_total 은 높아도 통찰이 없는 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-260-602
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 여섯 개의 합(홀수합 · 2+4+8+…+2^{n+1} · 1/2+1/3+…+1/(n+1) · 2+5+8+…+29 · 4를 5번 · 1×2+2×3+…+12×13)을 Σ 기호로 나타내기.
  category: "항의 규칙에서 일반항 찾기 → 항의 개수·위끝 결정 → Σ 표기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 Σ 기호로 나타내기(일반항과 항의 개수 파악)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    Σ 기호의 정의를 쓰는 방향 그대로다. 일반항을 k 로 쓰고 마지막 항과 맞춰 위끝을 정하면 끝난다. ⑷ 2+5+8+…+29 만 3k-1=29 에서 항의 개수 10 을 역산해야 해 T-범위 함정이 하나 붙고, ⑸ 는 k 가 나타나지 않는 상수항 합이라 Σ4 로 쓰는 표기 확인이다. 익히기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "항의 차·비에서 일반항 → 마지막 항과 비교해 위끝 결정 → Σ 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\displaystyle\sum_{k=1}^{n}(2k-1)$ ⑵ $\displaystyle\sum_{k=1}^{n+1}2^k$ ⑶ $\displaystyle\sum_{k=1}^{n}\frac{1}{k+1}$ ⑷ $\displaystyle\sum_{k=1}^{10}(3k-1)$ ⑸ $\displaystyle\sum_{k=1}^{5}4$ ⑹ $\displaystyle\sum_{k=1}^{12}k(k+1)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/260-602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등차형 ⑷의 첫째항·공차·마지막 항(2+5+8+…+29 → 3+7+11+…+43), 등비형 ⑵의 공비와 끝 지수, ⑹의 마지막 곱 12×13 을 바꿀 수 있다. 제약: 마지막 항이 일반항에 정확히 들어맞아 항의 개수가 자연수로 떨어져야 하고, 위끝을 n 으로 둔 문항은 첫 항이 k=1 에 대응하도록 일반항을 맞춰야 한다."
    creative: "(1) 같은 합을 위끝을 달리한 두 표기(k=1..n 과 k=0..n-1)로 쓰게 하기(★1 유지 · 첨자 이동 확인) (2) 홀수 항만 뽑은 합을 Σ 로 쓰게 하기(2k-1 첨자 쌍 → ★2) (3) 주어진 Σ 표기가 틀린 이유를 고르게 하는 보기형(★2 · I-EQV)."
```

```yaml
- id: GN-ALG-260-603
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 여섯 개의 Σ 식(5k+1 · 3^{i-1} · 상수 3 · (-1)^n×n · k=3부터 2^k · 1/(j(j+1)))을 Σ 를 쓰지 않은 합의 꼴로 펼치기.
  category: "Σ 정의 역방향 → 아래끝·위끝 대입 → 처음 세 항과 마지막 항 표기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ 식을 합의 꼴로 펼치기(아래끝·위끝과 더미 문자)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    602 의 역방향이다. 더미 문자가 k·i·n·j 로 바뀌어도 규칙이 같다는 것, ⑶ 처럼 k 가 없으면 같은 수를 개수만큼 더한다는 것, ⑸ 처럼 아래끝이 3 이면 첫 항이 2^3 이라는 것을 확인한다. ⑷ 는 (-1)^n 때문에 부호가 번갈아 T-부호 함정이 붙는다. 익히기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "아래끝부터 차례로 대입 → 앞 세 항 + 마지막 항으로 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6+11+16+\cdots+51$ ⑵ $1+3+9+\cdots+729$ ⑶ $3+3+3+3+3+3$ ⑷ $-1+2-3+\cdots+8$ ⑸ $8+16+32+\cdots+2^n$ ⑹ $\dfrac{1}{2}+\dfrac{1}{6}+\dfrac{1}{12}+\cdots+\dfrac{1}{n(n+1)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/260-603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반항의 계수(5k+1 → 4k-3), 공비(3^{i-1} → 4^{i-1}), 상수항 개수, ⑸의 아래끝(k=3 → k=4)을 바꿀 수 있다. 제약: 마지막 항이 위끝 대입으로 바로 나와야 하고, 위끝이 n 인 문항은 n 이 아래끝보다 크다는 전제가 유지돼야 한다."
    creative: "(1) 아래끝을 0 으로 두어 항의 개수가 n+1 임을 확인하게 하기(★1 유지) (2) 펼친 합을 보고 두 가지 Σ 표기가 같음을 설명하게 하기(★2 · I-EQV) (3) ⑹ 을 부분분수로 갈라 실제 합까지 구하게 하면 다음 단원 도구가 들어와 ★3."
```

```yaml
- id: GN-ALG-260-604
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    Σ(k=1~20)a_k=10, Σ(k=1~20)b_k=-30 일 때 ⑴ Σ(4a_k+1) ⑵ Σ(3a_k-2b_k) 의 값.
  category: "Σ의 선형성 분배 → 상수항 Σ1=20 처리 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ의 성질(선형성)로 주어진 합에서 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성질을 배운 직후의 확인이다. ⑴ 에서 Σ1 을 1 이 아니라 항의 개수 20 으로 보는 것만이 유일한 함정(T-표기)이고, ⑵ 는 계수 분배 한 줄이다. 익히기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "Σ(pa+qb+c) = pΣa + qΣb + nc 로 분배 → 주어진 값 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $60$ ⑵ $90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/260-604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수 20, 두 합의 값 10·-30, 계수 4·1·3·-2 를 바꿀 수 있다. 제약: 상수항이 붙은 소문항은 항의 개수를 곱해야 답이 달라지도록 상수를 0 이 아닌 값으로 두고, 답이 정수로 떨어지게 계수를 고른다."
    creative: "(1) 반대로 Σ(4a_k+1) 값을 주고 Σa_k 를 묻기(역방향 · ★2 · I-BW d1) (2) Σa_k²·(Σa_k)² 를 섞은 보기에서 옳은 성질만 고르게 하기(★2 · I-EQV) (3) 항의 개수를 n 으로 두어 상수항 처리에 매개변수를 넣으면 Mₐ 상승 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-261-e1
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ a_1=10, a_10=1 인 수열에서 Σ(k=1~9)a_k - Σ(k=2~10)a_k 의 값. ⑵ Σ(k=1~n)a_k=n² 일 때 Σ(k=1~10)(a_{2k-1}+a_{2k}) 의 값.
  category: "겹치는 범위 소거(양 끝 항만 남음) → 첨자 쌍을 전체 합으로 환원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 합의 범위가 k=2~9 에서 겹치므로 차가 a_1 - a_10 만 남는다고 보기"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_{2k-1}+a_{2k} (k=1~10) 를 풀어 쓰면 첨자 1~20 을 빠짐없이 덮으므로 Σ(k=1~20)a_k 로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "합의 기호 Σ — 범위 조정과 첨자 쌍 환원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항 모두 계산이 아니라 첨자를 보는 눈을 묻는다. ⑴ 은 항을 다 쓰지 않고 겹치는 구간을 소거해야 하고, ⑵ 는 짝지은 항이 1~20 전체를 덮는다는 것을 알아채야 S_20=400 한 줄로 끝난다. 알아채지 못하면 a_n=2n-1 을 구해 20항을 따로 더하는 먼 길로 간다. 필수 예제 ★2 출발 · 통찰 2개(EQV d1·d2) → +1 로 ★3.
  tier: star_3
  mechanism_primary: "겹치는 범위 소거 → 남는 양 끝 항 대입 / 첨자 쌍 풀기 → Σ(k=1~20)a_k = S_20 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $9$ ⑵ $400$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/261-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 a_1·a_10 값과 범위 끝(9·10), ⑵ 의 부분합 식 n²(→ n²+n, 2n²-n 등)과 위끝 10 을 바꿀 수 있다. 제약: ⑴ 은 두 범위가 한 칸만 어긋나야 양 끝 두 항만 남고, ⑵ 는 첨자 쌍이 1부터 빈틈없이 2n 까지 덮여야 부분합으로 환원된다."
    creative: "(1) ⑵ 의 쌍을 a_{3k-2}+a_{3k-1}+a_{3k} 세 개로 늘리기(같은 골조 ★3) (2) ⑵ 에서 홀수 첨자만 더하게 하면 짝수항을 소거해야 해 ★4 후보 (3) ⑴ 을 Σ(k=1~n)a_k - Σ(k=3~n+2)a_k 로 두 칸 밀면 남는 항이 네 개 · Mₐ 상승 ★3 유지."
```

```yaml
- id: GN-ALG-261-605
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Σ(k=1~99)a_k=15, a_100=1/9 일 때 Σ(k=1~99)k(a_k - a_{k+1}) 의 값.
  category: "전개 후 둘째 합의 첨자 이동 → 계수 차가 1 이 되어 Σa_k 로 환원"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Σk·a_{k+1} 을 j=k+1 로 밀어 Σ(j-1)a_j 로 만들면 앞 합과 계수 차가 1 이 되어 Σa_k - 99a_100 으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "가중치가 붙은 차 Σk(a_k-a_{k+1}) 의 첨자 이동(아벨 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 라는 가중치가 붙어 있어 단순 망원 소거로는 끝나지 않는다. 두 합으로 갈라 뒤쪽의 첨자를 한 칸 밀어야 계수가 k-(k-1)=1 로 정리되고, 그제야 주어진 Σa_k=15 와 마지막에 남는 -99a_100 을 쓸 수 있다. 경계 항(k=1 의 a_1, j=100 의 a_100)을 빼먹으면 틀리는 T-경계 함정. 확인체크 ★2 출발 · 통찰 depth 2 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "Σk a_k - Σk a_{k+1} 로 분리 → 뒤 합 첨자 한 칸 이동 → Σa_k - 99a_100 에 값 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/261-605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝 99, Σa_k=15, a_100=1/9 를 바꿀 수 있다. 제약: 마지막에 남는 항이 (위끝)×a_{위끝+1} 이므로 a_{n+1} 값과 n 의 곱이 깔끔한 수가 되도록 고르고(99×1/9=11), Σa_k 와의 차가 정수로 떨어지게 한다."
    creative: "(1) 가중치를 k 대신 2k-1 이나 k² 로 바꾸면 이동 후 계수 차가 상수가 아니어서 ★4 (2) a_k 를 구체 수열(a_k=1/k 등)로 주고 실제 값을 계산하게 하기(★3 유지) (3) 가중치를 빼 Σ(a_k-a_{k+1}) 로 두면 순수 망원 소거 ★2."
```

```yaml
- id: GN-ALG-261-606
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항이 1 인 수열에서 Σ(k=1~10)(a_k+a_{k+1})=30, Σ(k=1~10)a_k=10 일 때 a_11 의 값.
  category: "둘째 합의 첨자 이동 → 주어진 합에서 a_1 빼고 a_11 더한 꼴로 환원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Σ(k=1~10)a_{k+1} 을 Σ(k=2~11)a_k 로 보고 주어진 Σ(k=1~10)a_k 에서 a_1 을 빼고 a_11 을 더한 값으로 바꾸기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 칸 밀린 두 합의 관계에서 끝항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제에서 방금 배운 첨자 이동을 그대로 한 번 쓰면 30 = 10 + (10 - 1 + a_11) 한 줄이 나온다. 이동은 한 칸뿐이고 남는 보정 항도 a_1, a_11 두 개라 depth 1 로 본다. 확인체크 ★2 출발 · 통찰 depth 1 하나 → 출발점 유지 ★2. [분류 이슈] 첨자 이동을 아직 학습 자산으로 보지 않으면 depth 2·★3 으로도 읽힌다.
  tier: star_2
  mechanism_primary: "Σ(a_k+a_{k+1}) = Σa_k + (Σa_k - a_1 + a_11) → 값 대입 → a_11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/261-606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1=1, 두 합의 값 30·10, 위끝 10 을 바꿀 수 있다. 제약: a_11 = (첫 합) - 2×(둘째 합) + a_1 이므로 세 수를 고를 때 답이 정수가 되도록 하고, 첫 합이 둘째 합의 두 배 근처가 되어야 부자연스러운 음수가 나오지 않는다."
    creative: "(1) a_11 대신 a_1 을 묻기(역방향 · ★2 유지 · I-BW) (2) Σ(a_k+a_{k+2}) 로 두 칸 밀면 보정 항이 네 개 → ★3 (3) Σ(a_k - a_{k+1}) 조건을 하나 더 주고 a_1, a_11 을 동시에 구하게 하면 연립 · ★3."
```

```yaml
- id: GN-ALG-261-607
  page: 261
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ Σ(k=1~9)(a_k - a_{10-k})=0, ㄴ 2-4+6-8+10 = Σ(k=1~5){2k×(-1)^k}, ㄷ Σ(k=1~10)(1/(2k-1)+1/(2k)) = Σ(k=1~20)(1/k) 중 옳은 것만 고르기.
  category: "첨자 반전 대칭 판정 → 부호 규칙 확인 → 홀짝 첨자 쌍 환원"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ 에서 k=1~9 일 때 10-k 도 9~1 을 훑으므로 두 합이 같은 항 집합이 되어 차가 0"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ 의 2k-1, 2k 쌍이 1~20 의 모든 첨자를 한 번씩 덮는다고 보기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "Σ 표기의 참·거짓 판정(첨자 반전·부호·홀짝 쌍)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 보기가 서로 다른 첨자 조작을 하나씩 묻는다. ㄱ 은 첨자를 뒤집어도 같은 항 집합이라는 대칭, ㄷ 은 홀짝 쌍이 1~20 을 덮는다는 환원, ㄴ 은 (-1)^k 가 k=1 에서 음수라 첫 항 부호가 어긋난다는 T-부호 확인이다. 항을 일일이 쓰지 않고 판정하려면 세 눈이 모두 필요하다. 확인체크 ★2 출발 · 통찰 2개(SYM d2·EQV d1) → +1 로 ★3.
  tier: star_3
  mechanism_primary: "ㄱ 첨자 반전으로 같은 집합 → 0 / ㄴ (-1)^k 첫 부호 대조 → 거짓 / ㄷ 홀짝 쌍 → 1~20 전체 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/261-607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 위끝 9 와 반전 중심 10, ㄴ 의 항 수 5, ㄷ 의 위끝 10·20 을 바꿀 수 있다. 제약: ㄱ 은 첨자 합(k + (10-k))이 상수이고 두 범위가 정확히 같은 집합이어야 0 이 되며, ㄷ 은 아래끝이 1 이고 위끝이 짝수(2n)여야 쌍이 빈틈없이 덮는다."
    creative: "(1) ㄱ 을 Σ(a_k + a_{10-k}) 로 바꿔 2Σa_k 임을 묻기(★3 유지) (2) ㄴ 의 부호를 (-1)^{k+1} 로 고쳐 참으로 만든 뒤 셋 다 참인지 묻는 함정형(★3) (3) ㄷ 을 1/(3k-2)+1/(3k-1)+1/(3k) 삼중 쌍으로 확장(★3~4)."
```

```yaml
- id: GN-ALG-262-e2
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ Σ(k=1~10)a_k=3, Σ(k=1~10)a_k²=5 일 때 Σ(3a_k-1)² 의 값. ⑵ Σ(k=1~5)(a_k+b_k)=10, Σ(k=1~5)(a_k-b_k)=-4 일 때 Σa_k, Σb_k 의 값.
  category: "제곱 전개 후 선형성 분배 → 상수항 Σ1=n 처리 / 두 합을 미지수로 두고 연립"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ의 성질 — 제곱 전개와 두 합의 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구역의 목표가 성질 적용 그 자체라 골조는 전개 한 번과 대입뿐이다. 다만 함정이 두 겹이다. Σa_k² 를 (Σa_k)² 로 착각하지 않는 것(T-표기)과 Σ1 을 항의 개수 10 으로 보는 것(T-범위)인데, 둘 다 새 착안이 아니라 규칙 확인이다. 필수 예제 ★2 출발 · 통찰 없음 → 유지 ★2. [분류 이슈] M_total 9 만 보면 ★3 후보지만 통찰이 0 이라 절차형 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "(3a_k-1)² 전개 → 9Σa_k² - 6Σa_k + n 대입 / ΣA+ΣB, ΣA-ΣB 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $37$ ⑵ $\displaystyle\sum_{k=1}^{5}a_k=3$, $\displaystyle\sum_{k=1}^{5}b_k=7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/262-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수 10·5, 주어진 합 3·5·10·-4, 전개할 식의 계수(3a_k-1 → 2a_k+3)를 바꿀 수 있다. 제약: Σa_k² ≥ (Σa_k)²/n 이 성립해야 실제 수열이 존재하고(코시-슈바르츠), 연립 소문항은 두 합의 합·차가 모두 짝수여야 답이 정수로 떨어진다."
    creative: "(1) Σ(3a_k-1)² 값을 주고 Σa_k² 를 되묻기(역방향 ★2 · I-BW d1) (2) Σa_k 와 Σa_k² 로 Σ(a_k-m)² 를 최소로 하는 m 을 묻기(★4 · 이차함수 결합 I-XU) (3) 항의 개수를 n 으로 두고 답을 n 의 식으로 쓰게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-ALG-262-608
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Σ(k=1~9)a_k²=15, Σ(k=1~9)a_k=-5 일 때 Σ(2a_k+1)² - Σ(a_k-2)² 의 값.
  category: "두 제곱식을 한 Σ 안에서 전개·정리 → 선형성 대입"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ의 성질 — 두 제곱합의 차 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 합을 하나로 묶어 (2a_k+1)² - (a_k-2)² = 3a_k² + 8a_k - 3 으로 먼저 정리하면 대입 한 줄이지만, 따로 전개해도 같은 답에 닿으므로 착안이라기보다 계산 순서 선택이다. 상수항 -3 을 9 배 해야 하는 T-범위, 음수 Σa_k 의 부호 처리(T-부호)가 함정. 확인체크 ★2 출발 · 통찰 없음 → 유지 ★2.
  tier: star_2
  mechanism_primary: "차를 한 Σ 로 묶어 3a_k²+8a_k-3 으로 정리 → 3Σa_k² + 8Σa_k - 9×3 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/262-608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수 9, Σa_k²=15, Σa_k=-5, 두 제곱식의 계수를 바꿀 수 있다. 제약: 15 ≥ 25/9 처럼 Σa_k² 가 (Σa_k)²/n 이상이어야 하고, 상수항 차에 항의 개수를 곱한 값까지 더해 답이 정수가 되게 고른다."
    creative: "(1) 합 대신 차를 Σ(2a_k+1)² + Σ(a_k-2)² 로 바꾸면 계수만 달라진 ★2 (2) Σa_k² 를 주지 않고 답만 준 뒤 Σa_k² 를 묻기(★2 · I-BW) (3) a_k 가 등차수열이라는 조건을 붙이면 앞 단원 합 공식과 결합해 ★3(I-XU d1)."
```

```yaml
- id: GN-ALG-262-609
  page: 262
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Σ(k=1~n)(a_k+b_k)²=60, Σ(k=1~n)(a_k²+b_k²)=40 일 때 Σ(k=1~n)a_k b_k 의 값.
  category: "제곱 전개 → 주어진 합을 통째로 대입 → 교차항만 남기기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개한 Σ(a_k²+b_k²) 를 개별 합으로 쪼개지 않고 주어진 40 을 그대로 넣어 n 을 몰라도 된다고 보기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Σ의 성질 — 곱셈 공식 전개로 교차항 합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    위끝이 n 으로만 주어져 있어 n 을 구해야 한다고 생각하면 막힌다. (a_k+b_k)² 를 전개한 뒤 Σ(a_k²+b_k²) 덩어리를 통째로 대입하면 2Σa_k b_k = 20 이 되어 n 이 끝까지 필요 없다. 이 한 가지 판단만 통찰(EQV d1)이고 나머지는 전개다. 확인체크 ★2 출발 · depth 1 하나 → 유지 ★2.
  tier: star_2
  mechanism_primary: "Σ(a_k+b_k)² = Σ(a_k²+b_k²) + 2Σa_k b_k → 60 = 40 + 2Σa_k b_k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/262-609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "60 과 40 을 바꿀 수 있다. 제약: 두 값의 차가 짝수여야 Σa_k b_k 가 정수가 되고, Σ(a_k+b_k)² ≥ 0 과 (Σa_kb_k)² ≤ Σa_k²·Σb_k² 를 크게 어기지 않는 값으로 둔다."
    creative: "(1) Σ(a_k-b_k)² 를 묻게 바꾸기(같은 골조 ★2) (2) Σa_kb_k 를 주고 Σ(a_k²+b_k²) 의 최솟값을 묻기(산술·기하평균 결합 ★3~4 · I-XU) (3) n 을 실제로 구해야 하는 조건(Σ1 이 따로 등장)을 섞으면 T-범위 함정이 살아나 ★3."
```

```yaml
- id: GN-ALG-263-e3
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ Σ(k=1~6)(3^{k-1}-2) ⑵ Σ(k=1~8){3^k+(-2)^k}/5^k 을 계산하기.
  category: "분자를 나눠 두 등비수열로 분리 → 등비수열 합 공식 → 상수항 보정"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "{3^k+(-2)^k}/5^k 을 (3/5)^k + (-2/5)^k 로 갈라 공비가 다른 두 등비수열의 합으로 보기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "Σ r^k 꼴의 계산(등비수열 합 공식 적용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σ 를 등비수열의 합으로 되돌리는 구역의 첫 예제다. ⑴ 은 3^{k-1} 부분과 상수 -2 를 분리해 공식 한 번과 2×6 을 빼면 되고, ⑵ 는 분자를 갈라 공비 3/5, -2/5 인 두 등비합으로 만드는 한 수가 전부다. 그 뒤로는 분수 공비 정리와 8 제곱 계산이라 Mₖ 가 3 까지 오르지만 계산 마찰은 ★ 상승 신호가 아니다. 필수 예제 ★2 출발 · depth 1 하나 → 유지 ★2. [분류 이슈] 분수 공비 정리 부담을 반영하면 ★3 으로도 읽힌다.
  tier: star_2
  mechanism_primary: "분자 분리 → 공비 r 인 등비합 공식 a(r^n-1)/(r-1) 두 번 → 상수항 nc 보정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $352$ ⑵ $\dfrac{17}{14}-\dfrac{3}{2}\times\left(\dfrac{3}{5}\right)^{8}+\dfrac{2}{7}\times\left(\dfrac{2}{5}\right)^{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/263-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 밑 3 과 상수 -2, 항의 개수 6, ⑵ 의 분자 밑 3·-2 와 분모 밑 5, 위끝 8 을 바꿀 수 있다. 제약: ⑵ 는 공비가 1 이 아니어야 하고(분모 밑 ≠ 분자 밑), 음수 밑은 (-2/5)^k 처럼 공비를 음수로 만들어 부호가 번갈아야 한다. ⑴ 은 답이 정수로 떨어지게 밑을 정수로 둔다."
    creative: "(1) 위끝을 n 으로 바꿔 답을 n 의 식으로 쓰게 하기(Mₐ 상승 ★3) (2) 분자를 3^k - (-2)^k 로 바꿔 부호 처리를 한 겹 더 넣기(★2 유지) (3) 계산값이 특정 값을 넘는 최소 n 을 묻게 하면 부등식 결합 ★4."
```

```yaml
- id: GN-ALG-263-610
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ Σ(k=1~30)(3×2^k) - Σ(k=16~30)(3×2^k) ⑵ Σ(k=1~10){5^k+(-3)^k}/4^k 을 계산하기.
  category: "겹치는 범위 소거로 k=1~15 만 남기기 → 등비합 공식 / 분자 분리 후 두 등비합"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 합의 범위가 k=16~30 에서 겹치므로 차가 Σ(k=1~15) 만 남는다고 보고 30 항을 계산하지 않기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "범위가 겹치는 두 Σ 의 차 + Σ r^k 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 두 등비합을 각각 구해 빼면 2^30 같은 큰 수를 다루게 되지만, 범위 차가 k=1~15 라는 것을 먼저 보면 한 번의 공식으로 끝난다. 이 판단이 풀이 시간을 가르는 지점이고 경계를 15 로 볼지 16 으로 볼지가 T-경계 함정이다. ⑵ 는 e3 ⑵ 와 같은 분리이되 공비 5/4 가 1 보다 커 부호·분모 처리(T-부호)가 한 겹 더 붙는다. 확인체크 ★2 출발 · depth 2 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "범위 겹침 소거 → Σ(k=1~15)3×2^k 공식 한 번 / 분자 분리 → 공비 5/4, -3/4 두 등비합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $6(2^{15}-1)$ ⑵ $5\times\left(\dfrac{5}{4}\right)^{10}+\dfrac{3}{7}\times\left(\dfrac{3}{4}\right)^{10}-\dfrac{38}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/263-610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 위끝 30 과 둘째 합의 아래끝 16, 계수 3, 밑 2, ⑵ 의 분자 밑 5·-3 과 분모 밑 4, 위끝 10 을 바꿀 수 있다. 제약: ⑴ 은 두 합의 위끝이 같고 아래끝만 달라야 소거가 깔끔하며, 남는 항 수 = (둘째 아래끝 - 1) 이 되도록 고른다."
    creative: "(1) 아래끝이 아니라 위끝이 다른 두 합의 차로 바꾸기(남는 구간이 뒤쪽 · ★3 유지) (2) ⑴ 의 답을 2^15 의 식이 아니라 실제 수로 요구하면 계산 마찰만 늘어 질 저하(★3 유지 권장 안 함) (3) 세 합의 덧셈·뺄셈으로 겹침을 두 겹 만들면 ★4."
```

```yaml
- id: GN-ALG-264-e4
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 등차수열에서 a_2=-1, a_5=8 일 때 Σ(k=1~10)a_k. ⑵ 공비가 음수인 등비수열에서 a_5=16a_1, Σ(k=1~5)a_k=33 일 때 a_7.
  category: "두 항 조건으로 첫째항·공차(공비) 결정 → 등차·등비 합 공식 → 특정 항"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "Σ와 등차수열·등비수열(합 공식으로 첫째항·공차·공비 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σ 를 앞 단원의 합 공식으로 되돌리는 표준 절차다. ⑴ 은 3d=9 로 d=3, a_1=-4 를 얻어 합 공식에 넣는 두 단계. ⑵ 는 r⁴=16 에서 r=±2 가 나오지만 「공비가 음수」가 명시돼 있어 선택이 아니라 필터이고, 그 부호를 놓치면 틀리는 T-부호 함정이다. 필수 예제 ★2 출발 · 통찰 없음 → 유지 ★2.
  tier: star_2
  mechanism_primary: "a_2·a_5 로 d 와 a_1 → 등차 합 공식 / r⁴=16 과 음수 조건으로 r=-2 → 등비 합으로 a_1 → a_7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $95$ ⑵ $192$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/264-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 항 값(a_2=-1, a_5=8)과 합의 위끝 10, ⑵ 의 비 16 과 합 33, 구하는 항 번호 7 을 바꿀 수 있다. 제약: ⑴ 은 항 번호 차가 공차를 나누어떨어지게 해야 d 가 정수, ⑵ 는 a_5/a_1 이 네제곱수여야 r 가 정수이고 음수 공비일 때 부분합이 0 이 되지 않아야 한다."
    creative: "(1) ⑵ 에서 공비 부호 조건을 빼면 두 경우를 모두 따져야 해 ★3(I-MI d1) (2) Σ(k=1~10)a_k 값을 주고 a_2 를 묻기(역방향 ★3 · I-BW) (3) 등차·등비를 섞어 a_n = 등차, b_n = 등비 로 두고 Σ(a_k+b_k) 를 묻기(★3 · I-XU 없이 도구 두 개)."
```

```yaml
- id: GN-ALG-264-611
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항이 3 인 등차수열에서 a_5-a_2=15 일 때 Σ(k=11~20)a_k 의 값.
  category: "항 차로 공차 결정 → 중간 구간 합을 두 부분합의 차로 환원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "아래끝이 11 인 합을 S_20 - S_10 으로 바꿔 공식이 쓰이는 꼴(아래끝 1)로 되돌리기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "아래끝이 1 이 아닌 Σ 를 부분합의 차로 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_5-a_2=3d=15 에서 d=5 는 한 줄이고, 남는 판단은 k=11~20 합을 어떻게 공식에 넣느냐다. S_20-S_10 으로 되돌리거나 제11항을 첫째항으로 보는 새 등차수열의 합으로 보는 두 길이 있는데 둘 다 표준으로 가르치는 환원이라 depth 1 로 본다. 아래끝을 그대로 두고 항 수를 10 이 아니라 9 로 세는 T-경계 함정. 확인체크 ★2 출발 · depth 1 하나 → 유지 ★2.
  tier: star_2
  mechanism_primary: "3d=15 로 d=5 → Σ(k=11~20) = S_20 - S_10 → 등차 합 공식 두 번"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$755$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/264-611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 3, a_5-a_2=15, 구간 11~20 을 바꿀 수 있다. 제약: 항 번호 차(5-2=3)가 주어진 차를 나누어떨어지게 해야 d 가 정수이고, 구간의 아래끝·위끝은 아래끝 > 1 이어야 부분합의 차를 쓰는 의미가 산다."
    creative: "(1) 등비수열로 바꿔 Σ(k=11~20) 을 묻기(같은 골조 ★2~3) (2) Σ(k=11~20)a_k 값을 주고 공차를 묻기(역방향 ★3 · I-BW) (3) 구간 합이 처음으로 어떤 값을 넘는 아래끝을 묻게 하면 부등식·자연수 최소 조건이 붙어 ★4."
```

```yaml
- id: GN-ALG-264-612
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공비가 √2 인 등비수열 {a_n} 과 공비가 -√2 인 등비수열 {b_n} 이 a_1=b_1 이고 Σ(k=1~6)a_k + Σ(k=1~6)b_k=168 일 때 a_3+b_3 의 값.
  category: "두 합을 항별로 묶기 → 부호가 엇갈려 짝수 번째 항이 상쇄 → 홀수 항만의 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공비의 부호만 다른 두 수열을 항별로 더하면 a_k+b_k 가 짝수 k 에서 0 이 되어 홀수 항만 2 배로 남는 대칭을 활용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공비의 부호가 반대인 두 등비수열의 합(짝수 항 상쇄)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √2 와 -√2 를 각각 등비합 공식에 넣으면 무리수 분모 유리화가 겹쳐 길어진다. 두 Σ 를 하나로 묶어 a_k+b_k 를 보면 짝수 k 의 항이 서로 지워지고 홀수 k 항만 2 배로 남아 14a_1=168 한 줄이 된다. 부호 상쇄를 못 보면 계산량이 몇 배가 되는 지점이라 I-SYM depth 2. 무리수 공비의 제곱이 정수가 된다는 것(T-표기)과 부호(T-부호)가 함정. 확인체크 ★2 출발 · depth 2 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "Σa_k + Σb_k = Σ(a_k+b_k) → 짝수 항 상쇄 → 2a_1(1+2+4)=168 → a_1=12 → a_3+b_3=2a_1×2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/264-612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 ±√2 의 크기(±√3, ±2), 항의 개수 6, 합 168, 묻는 항 번호 3 을 바꿀 수 있다. 제약: 두 공비의 절댓값이 같고 부호만 달라야 상쇄가 일어나며, 항의 개수는 짝수여야 홀·짝 짝짓기가 깔끔하다. 남는 홀수 항 합이 168 을 정수 a_1 로 나누도록 고른다."
    creative: "(1) 차 Σa_k - Σb_k 를 묻게 하면 홀수 항이 지워지고 짝수 항만 남아 무리수가 답에 들어옴(★3 유지) (2) a_1=b_1 조건을 빼고 a_1, b_1 을 미지수 둘로 두면 연립이 붙어 ★4 (3) 공비를 ±√2 대신 ±r 로 두고 r 를 묻게 하면 Mₐ 상승 ★4 후보."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 3 · ★2 7 · ★3 5 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 6 · premium 0
- 통찰 유형 분포: I-EQV 9 (첨자 이동·범위 소거·쌍 환원·분자 분리) · I-SYM 2 (첨자 반전 · 부호 상쇄). I-XU·I-BW·I-PD·I-MI·I-SC·I-VF 는 이 범위에 없다.
- type_hint 상위: 「첨자 이동·범위 겹침 소거」 4(261-e1·605·606·263-610) · 「Σ의 성질(선형성·제곱 전개)」 3(260-604·262-e2·608) · 「Σ 기호의 정의와 표기」 3(260-602·603·261-607) · 「Σ r^k 등비합 계산」 2(263-e3·610) · 「Σ와 등차·등비수열」 3(264-e4·611·612)
- M_total 분포: 5 가 3문 · 7 이 5문 · 8 이 5문 · 9 가 2문. 계산 마찰(Mₖ 3)은 263-e3·610 두 문항뿐이고 둘 다 ★ 상승 근거로 쓰지 않았다.
- 그림: 없음(15문 모두 `figure: none`)
- 벤더 신호와 판정: 「개념원리 익히기」 3문은 모두 ★1 출발 유지, 「필수·발전 예제」 12문은 ★2 출발에서 5문만 +1 했고 -1 은 없다. 2단 이상 어긋난 문항은 없다.

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-261-606 | 첨자 한 칸 이동을 261-e1 에서 방금 배운 학습 자산으로 보아 depth 1·★2 로 뒀다. 자산으로 보지 않으면 depth 2·★3 | ★2 / ★3 |
| GN-ALG-262-e2 | M_total 9(제곱 전개 + 연립 + 함정 2겹)로 노동량만 보면 ★3 후보지만 통찰이 0 이라 절차형 ★2 유지 | ★2 / ★3 |
| GN-ALG-263-e3 | 분수 공비 두 개의 등비합 정리로 Mₖ=3 이나, v3.8 에서 계산 마찰은 ★ 상승 신호가 아니므로 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「첨자 이동·범위 겹침 소거」(261-e1⑴·605·606·263-610⑴)는 이 범위에서 네 번 반복되고 ★2~3 을 가르는 축이므로 독립 유형으로 세운다. 「공비 부호가 반대인 두 등비수열의 상쇄」(264-612)도 골조가 뚜렷해 별도 유형 후보다.
- **통합해도 될 유형**: 260-602 와 260-603 은 같은 정의를 양방향으로 묻는 한 유형(「Σ 표기 ↔ 합의 꼴」)으로 묶을 수 있다. 262-e2·608·609 도 「Σ의 성질로 제곱합·교차항 다루기」 하나로 충분하다.
- **다음 단원과의 경계**: 263 구역의 「Σ r^k」 와 264 구역의 「Σ와 등차·등비」 는 도구가 앞 단원(등차·등비 합 공식)이라, 카탈로그에서는 28단원 유형이 아니라 앞 단원 유형의 Σ 표기 변형으로 연결해 두는 편이 낫다.
