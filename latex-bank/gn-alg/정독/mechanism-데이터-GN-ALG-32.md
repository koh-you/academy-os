---
name: mechanism-데이터-GN-ALG-32
description: 개념원리 대수 32 수학적 귀납법(1/1 · 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 32 수학적 귀납법
  unit_code: GN-ALG-32
  part: "1/1"
  extract_range: "293~298쪽 · 293-e9~298-699"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(필수 예제와 그 확인체크 유제 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 32 수학적 귀납법 (1/1) 정독 데이터 (v1.0)

293~298쪽 14문항 전수. 구역은 「필수·발전 예제」 7문(필수 예제 e9·e10·e11 3문 + 확인체크 유제 4문) · 「연습문제 STEP 1」 3문 · 「연습문제 STEP 2」 3문 · 「연습문제 실력 UP」 1문이다. 이 단원에는 「개념원리 익히기」 구역이 전사 범위에 없어 가장 낮은 층이 필수 예제(★2)에서 시작한다. 확인체크 유제는 바로 앞 필수 예제와 같은 출발점을 썼다(GN-ALG-08 · GN-ALG-19 · GN-ALG-26 과 같은 결정).

이 단원은 세 갈래로만 이루어져 있다. (가) **명제의 참 전파** — 조건 ㈏ 를 「어떤 번호에서 어떤 번호로 갈 수 있는가」라는 도달 규칙으로 옮겨 $p(1)$ 에서 닿는 번호 집합을 따지는 층(e9 · 689 · 690 · 693 · 694), (나) **등식·부등식의 귀납 증명** — $n=1$ 확인과 $n=k$ 가정을 쓰는 정형 골조 층(e10 · 691 · e11 · 692), (다) **증명 과정의 빈칸 채우기** — 이미 완성된 증명의 목표 꼴을 보고 빠진 식을 역추적하는 층(695 · 696 · 697 · 698 · 699)이다.

판정에서는 (가) 의 도달 규칙 번역(잉여류·소인수분해·홀짝 역산)과 (다) 의 목표 꼴 역추적, (나) 중 부등식에서만 나오는 「양수 항 버리기·중간 부등식 끼워 넣기」를 통찰로 셌다. $n=1$ 확인 → $n=k$ 가정 → 다음 항 더하기 → 인수 묶기로 끝나는 등식 증명은 교과서 정형 절차로 보아 통찰에서 제외하고 Mₖ 로 흡수했다. 추상도 Mₐ 는 구체 번호를 묻는 전파 문항을 2, 조건이나 임의의 자연수 $k$ 자체가 미지인 문항(690 · 693)과 $f,g$ 를 답으로 내놓는 빈칸 문항(697 · 699)을 3 으로 잡았다. 시작 번호가 $n=1$ 이 아닌 문항(e11 · 692 · 698 · 699)은 T-범위 함정으로 Mₜ 를 올렸다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-ALG-293-e9
  page: 293
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ㈎ $p(1)$ 이 참, ㈏ $p(n)$ 또는 $p(n+1)$ 이 참이면 $p(n+2)$ 가 참일 때, 반드시 참이라고 할 수 없는 명제 고르기. 5지선다($p(2)$~$p(6)$).
  category: '전파 조건을 도달 규칙으로 번역 → 도달 번호 집합 → 빠진 번호'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「또는」 조건을 「참인 번호가 하나만 있어도 두 칸 뒤가 참」이라는 도달 규칙으로 옮겨 $1 \to 3 \to 4 \to 5 \to 6$ 사슬을 만든다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '명제의 참 전파 — 도달 가능한 번호 찾기(반드시 참이라 할 수 없는 것)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈏ 에 $n=1$ 을 넣으면 $p(1)$ 만으로 $p(3)$ 이 나오고, 이어 $n=2,3,4$ 에서 $p(4),p(5),p(6)$ 이 차례로 나온다. $p(2)$ 만 어떤 대입에서도 결론 자리에 오지 못한다.
    필수 예제 출발 ★2 · 통찰 1(EQV d1) · M_total 6 → ★2 유지. 부정 발문(「없는」)이 유일한 함정이라 Mₜ 1.
  tier: star_2
  mechanism_primary: '$p(1)$ → ㈏ 에 $n=1$ → $p(3)$ → $n=2,3,4$ 로 $p(4),p(5),p(6)$ → 도달 못 하는 $p(2)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/293-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전파 폭($+2 \to +3$)과 선택지 번호대를 바꿀 수 있다. 제약: 도달하지 못하는 번호가 선택지 안에 정확히 하나만 들어가야 한다. 폭을 $+3$ 으로 키우면 $p(2),p(3)$ 둘이 빠져 답이 둘이 되므로 출발 조건을 $p(1),p(2)$ 둘로 늘려야 한다.'
    creative: '(1) 「반드시 참인 것」을 묻는 긍정 발문으로 뒤집기(★2 유지) (2) ㈎ 를 $p(2)$ 로 바꿔 도달 집합을 통째로 옮기기(★2) (3) ㈏ 의 「또는」을 「그리고」로 바꾸면 출발점이 두 개 필요해져 도달 집합이 확 줄고 ★3 (4) 도달하지 못하는 번호의 개수를 묻기(★3).'
```

```yaml
- id: GN-ALG-293-689
  page: 293
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ㈎ $p(1)$ 이 참, ㈏ $p(2k-1)$ 이 참이면 $p(3k)$ 도 참, ㈐ $p(2k)$ 가 참이면 $p(3k+1)$ 도 참일 때 반드시 참인 명제 고르기. 5지선다($p(12)$~$p(16)$).
  category: '번호의 홀짝으로 ㈏·㈐ 를 갈라 $k$ 를 역산 → 도달 사슬'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '가진 번호를 $2k-1$ 인지 $2k$ 인지로 갈라 $k$ 를 역산해야 다음 번호가 나온다는 것으로 조건을 옮긴다 — 번호를 그대로 대입해서는 사슬이 이어지지 않는다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '명제의 참 전파 — 홀짝으로 갈리는 두 전파 규칙의 사슬'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $1$ 은 홀수라 ㈏ 에서 $k=1$ 로 $p(3)$, $3$ 도 홀수라 $k=2$ 로 $p(6)$, $6$ 은 짝수라 ㈐ 에서 $k=3$ 으로 $p(10)$, $10$ 은 짝수라 $k=5$ 로 $p(16)$ 이 나온다.
    확인체크 유제라 앞 필수 예제 e9 와 같은 출발 ★2 · 통찰 1(EQV d2) · M_total 6 → ★2 유지. 규칙이 둘이라 e9 보다 역산 한 겹이 더 붙지만 사슬 길이는 같다.
  tier: star_2
  mechanism_primary: '$p(1) \to p(3) \to p(6) \to p(10) \to p(16)$ (홀수면 ㈏, 짝수면 ㈐ 로 $k$ 역산)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/293-689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 규칙의 계수($2k-1 \to 3k$, $2k \to 3k+1$)를 바꿀 수 있다. 제약: 역산한 $k$ 가 매 단계 자연수로 떨어져야 하고, 사슬이 선택지 다섯 개 중 정확히 하나만 지나도록 도착 번호대를 맞춘다.'
    creative: '(1) 시작을 $p(2)$ 로 바꿔 짝수 규칙부터 타게 하기(★2) (2) 규칙을 「$p(3k)$ 가 참이면 $p(k)$ 도 참」처럼 번호가 줄어드는 쪽으로 뒤집으면 역방향 탐색이 되어 ★3 (3) $p(100)$ 이하에서 반드시 참인 명제의 개수를 묻기(★3 · 도달 집합 전체를 기술해야 함) (4) 규칙 ㈐ 를 빼고 ㈏ 만 두면 홀수에서 사슬이 끊겨 ★2 로 내려감.'
```

```yaml
- id: GN-ALG-293-690
  page: 293
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ㈎ $p(1)$ 이 참이라는 조건만 주고, 이것으로 $p(51)$ 이 반드시 참이 되게 하는 조건 ㈏ 를 보기 ㄱ($n \to n+2$) · ㄴ($n \to n+4$) · ㄷ($n \to 3n-1$) 에서 있는 대로 고르기.
  category: '보기별 도달 집합 계산 → $51$ 이 그 집합에 드는지 역추적'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「$p(51)$ 이 반드시 참」을 「$p(1)$ 에서 출발한 도달 번호 집합에 $51$ 이 드는가」로 옮긴다'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '결과($51$)가 먼저 주어져 있으므로 보기마다 도달 집합을 만들어 $51$ 에 닿는 규칙을 역추적한다 — 특히 ㄷ 은 규칙이 곱셈이라 사슬을 직접 전개해야 건너뛰는 것이 보인다'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '명제의 참 전파 — 목표 번호에 닿는 전파 규칙 고르기(보기형)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 홀수 전체를 덮어 $51$ 을 포함한다. ㄴ 은 $4m+1$ 꼴만 덮는데 $51$ 은 $4$ 로 나눈 나머지가 $3$ 이라 빠진다. ㄷ 은 $1,2,5,14,41,122,\cdots$ 로 뛰어 $51$ 을 건너뛴다.
    전파 규칙 세 개의 도달 집합을 각각 성격이 다른 방법(홀짝 · 잉여류 · 직접 전개)으로 만들어야 한다. 확인체크 출발 ★2 · 통찰 2(EQV d1 + BW d2) · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: 'ㄱ: 홀수 전체 → $51$ 포함 · ㄴ: $4m+1$ 꼴 → $51$ 제외 · ㄷ: $1,2,5,14,41,122$ → $51$ 건너뜀 → 답 ㄱ'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/293-690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '목표 번호 $51$ 과 보기의 증가폭($+2,+4$) · 곱셈 규칙($3n-1$)을 바꿀 수 있다. 제약: 목표 번호를 정한 뒤 보기마다 참·거짓이 갈리도록 홀짝과 나머지를 맞춘다. 목표를 $53$ 으로 바꾸면 ㄱ 만, $49$ 로 바꾸면 ㄱ·ㄴ 둘이 답이 된다.'
    creative: '(1) ㈎ 를 $p(2)$ 로 바꾸면 세 보기의 참·거짓이 통째로 뒤집혀 같은 골조로 다른 답(★3 유지) (2) 「$p(51)$ 이 반드시 참이 되게 하는 가장 큰 증가폭」을 묻기(★3) (3) 조건 ㈏ 를 고정하고 ㈎ 의 출발 번호를 고르게 하면 역추적 방향이 바뀌며 ★3 (4) 보기에 $n \to 2n$ 처럼 곱셈 규칙을 하나 더 넣어 소인수 논증까지 섞으면 ★4.'
```

```yaml
- id: GN-ALG-294-e10
  page: 294
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    모든 자연수 $n$ 에 대하여 $1 \times 2 + 2 \times 3 + \cdots + n(n+1) = \dfrac{1}{3}n(n+1)(n+2)$ 가 성립함을 수학적 귀납법으로 증명.
  category: '귀납법 2단계 골조 → 가정식에 다음 항 더하기 → 목표 꼴로 인수 묶기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '수학적 귀납법을 이용한 등식의 증명(곱의 합 꼴)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $n=1$ 확인 → $n=k$ 가정 → 양변에 $(k+1)(k+2)$ 를 더한 뒤 $(k+1)(k+2)$ 를 공통인수로 묶어 $\dfrac{1}{3}(k+1)(k+2)(k+3)$ 을 만드는 교과서 정형 골조뿐이다.
    묶는 자리가 정해져 있어 착안이랄 것이 없으므로 통찰 0. 필수 예제 출발 ★2 · M_total 7(>5) 이라 −1 조건에 해당하지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: '$n=1$ 확인 → $n=k$ 가정 → 양변에 $(k+1)(k+2)$ → $(k+1)(k+2)\left(\dfrac{k}{3}+1\right)=\dfrac{1}{3}(k+1)(k+2)(k+3)$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "풀이 참조"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/294-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일반항을 $n(n+2)$ · $n(n+1)(n+2)$ 처럼 차수를 올리거나 내릴 수 있고, 우변 계수도 그에 맞춰 $\dfrac{1}{4}$ 등으로 바뀐다. 제약: 우변이 $n$ 에 대한 곱꼴로 인수분해돼야 묶기 한 번으로 끝난다. $n(n+2)$ 처럼 연속이 아닌 곱은 우변이 $\dfrac{n(n+1)(2n+7)}{6}$ 이 되어 Mₖ 가 한 단 오른다.'
    creative: '(1) 등식을 주지 않고 $n=1,2,3$ 을 계산해 일반식을 추측한 뒤 증명하게 하면 I-PD 가 붙어 ★3 (2) 증명의 일부를 빈칸으로 만들고 $f(2)$ 같은 값을 묻는 빈칸형으로 바꾸기(★2 · 695 골조) (3) 시작을 $n=2$ 로 옮기면 T-범위 함정이 생겨 ★2 유지·Mₜ 상승 (4) 같은 합을 $\sum$ 공식으로 직접 구한 결과와 대조시키면 검증 부담이 늘어 ★3.'
```

```yaml
- id: GN-ALG-294-691
  page: 294
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 두 등식을 수학적 귀납법으로 증명. ⑴ $1^2+2^2+\cdots+n^2=\dfrac{1}{6}n(n+1)(2n+1)$ ⑵ $\dfrac{1}{1 \times 3}+\cdots+\dfrac{1}{(2n-1)(2n+1)}=\dfrac{n}{2n+1}$.
  category: '귀납법 2단계 골조 두 번 → ⑴ 공통인수 묶기 · ⑵ 통분 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '수학적 귀납법을 이용한 등식의 증명(거듭제곱의 합 · 부분분수 꼴)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘 다 e10 과 같은 골조다. ⑴ 은 $(k+1)$ 을 묶어 $\dfrac{1}{6}(k+1)(k+2)(2k+3)$ 을, ⑵ 는 $\dfrac{k}{2k+1}+\dfrac{1}{(2k+1)(2k+3)}$ 를 통분해 $\dfrac{k+1}{2k+3}$ 을 만든다.
    ⑵ 의 분자 $2k^2+3k+1=(2k+1)(k+1)$ 인수분해가 유일한 계산 고비이나 일반 학생이 무리 없이 하는 양이라 Mₖ 2 에 흡수. 확인체크 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '각 소문항 $n=1$ 확인 → $n=k$ 가정에 다음 항 더하기 → ⑴ $(k+1)$ 묶기 · ⑵ 통분 후 $(2k+1)$ 약분'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/294-691.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 $1^3+2^3+\cdots+n^3=\left\{\dfrac{n(n+1)}{2}\right\}^2$ 로, ⑵ 는 분모 간격을 $(3n-2)(3n+1)$ 로 바꿀 수 있다. 제약: ⑵ 의 우변은 항상 $\dfrac{n}{(\text{간격}) \times n+1}$ 꼴이 되도록 분모 등차수열의 첫 항과 공차를 맞춰야 통분이 한 줄로 끝난다.'
    creative: '(1) ⑵ 를 부분분수 분해로 직접 더한 풀이와 귀납법 풀이를 모두 요구하면 I-SC 가 붙어 ★3 (2) 우변을 비워 두고 $n=1,2,3$ 에서 추측하게 하면 I-PD 로 ★3 (3) 소문항 하나를 부등식으로 바꾸면 692 골조가 되어 ★3 (4) 등식이 성립하지 않는 잘못된 우변을 주고 어디서 증명이 막히는지 설명하게 하기(★3 · 검증형).'
```

```yaml
- id: GN-ALG-295-e11
  page: 295
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $h>0$ 일 때 $n \ge 2$ 인 모든 자연수 $n$ 에 대하여 $(1+h)^n > 1+nh$ 가 성립함을 수학적 귀납법으로 증명.
  category: '가정 부등식에 양수 $1+h$ 곱하기 → 남는 양수 항 버려 목표 꼴로 약화'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '보여야 할 $1+(k+1)h$ 를 먼저 보고, 곱해서 얻은 $1+(k+1)h+kh^2$ 에서 양수 항 $kh^2$ 을 버려 목표보다 약한 부등식으로 내려오는 경로를 역추적한다 — 등식 증명에는 없는 단계'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '수학적 귀납법을 이용한 부등식의 증명(베르누이 부등식)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $n=2$ 에서 $(1+h)^2=1+2h+h^2>1+2h$ 로 출발하고, 가정 양변에 $1+h>0$ 을 곱해 부등호를 유지한 뒤 전개식에서 $kh^2$ 을 버린다.
    함정은 둘이다. 출발이 $n=1$ 이 아니라 $n=2$ 라는 것(T-범위)과, 곱하는 수가 양수여야 부등호가 유지된다는 것(T-부호) → Mₜ 2.
    [분류 이슈] 필수 예제 출발 ★2 · 통찰 1(BW d2) · M_total 8 이라 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 로 기록했으나, 부등식 귀납 층은 체감상 등식 층(e10)보다 한 단 위라 ★3 후보다.
  tier: star_2
  mechanism_primary: '$n=2$ 확인 → 가정 양변에 $1+h>0$ 곱하기 → $1+(k+1)h+kh^2$ → $kh^2>0$ 버리기 → $1+(k+1)h$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "풀이 참조"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/295-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작 번호($n \ge 2$)와 우변의 계수($1+nh \to 1+nh+\dfrac{n(n-1)}{2}h^2$)를 바꿀 수 있다. 제약: 우변을 강하게 만들수록 버릴 수 있는 항이 줄어 어느 선을 넘으면 귀납이 막힌다. $h$ 의 조건 $h>0$ 은 곱셈에서 부등호를 유지하는 근거이므로 $h>-1$ 로 넓히면 $n$ 의 홀짝 논의가 따로 필요하다.'
    creative: '(1) $h$ 를 구체 수 $0.1$ 로 고정하고 $(1.1)^n>1+0.1n$ 을 증명하게 하면 Mₐ 가 내려가 ★2 (2) 우변을 $1+nh+\dfrac{n(n-1)}{2}h^2$ 로 강화하면 버릴 항을 직접 골라야 해 ★3 (3) $n \ge 5$ 에서 $2^n>n^2$ 처럼 중간 부등식을 끼워야 하는 꼴로 바꾸면 ★3(692 ⑴ 골조) (4) 증명 과정을 빈칸으로 만들고 빠진 식을 묻기(★3 · 698 골조).'
```

```yaml
- id: GN-ALG-295-692
  page: 295
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑵ 두 부등식을 수학적 귀납법으로 증명. ⑴ $n \ge 5$ 인 자연수 $n$ 에 대하여 $2^n>n^2$ ⑵ $n \ge 2$ 인 자연수 $n$ 에 대하여 $1+\dfrac{1}{2^2}+\cdots+\dfrac{1}{n^2}<2-\dfrac{1}{n}$.
  category: '가정 부등식 → 중간 부등식 끼워 넣기·항을 더 크게 잡아 완화 → 목표 꼴'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑴ 에서 목표 $(k+1)^2$ 에 닿으려고 $2 \times 2^k > 2k^2 \ge (k+1)^2$ 라는 중간 부등식을 스스로 끼워 넣고, 그 부등식이 $k \ge 5$ 에서만 성립함을 따로 확인한다'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵ 에서 더하는 항 $\dfrac{1}{(k+1)^2}$ 을 더 큰 $\dfrac{1}{k(k+1)}=\dfrac{1}{k}-\dfrac{1}{k+1}$ 로 올려 잡아 망원 차로 바꾼다 — 그대로 더하면 목표와 비교가 되지 않는다'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '수학적 귀납법을 이용한 부등식의 증명(중간 부등식 끼워 넣기·항 완화)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $2k^2-(k+1)^2=k^2-2k-1 \ge 0$ 이 $k \ge 5$ 에서 성립한다는 확인이 있어야 사슬이 이어지고, ⑵ 는 더하는 항을 일부러 크게 잡아 망원 차를 만드는 완화가 핵심이다. 둘 다 e11 의 「버리기」보다 한 겹 위인 「끼워 넣기·올려 잡기」다.
    확인체크 출발 ★2 · 통찰 2(BW d2 + EQV d2) · M_total 9 → +1 하여 ★3. 시작 번호가 $1$ 이 아닌 점(T-범위)과 부등호 방향(T-부호)으로 Mₜ 2.
    [분류 이슈] 유제 자리인데 대응 필수 예제 e11(★2)보다 한 단 높게 판정했다. 완화 기법이 한 겹 더 얹혀 있어 라벨을 억지로 맞추지 않았다.
  tier: star_3
  mechanism_primary: '⑴ $2 \times 2^k>2k^2 \ge (k+1)^2$ ($k \ge 5$) · ⑵ $\dfrac{1}{(k+1)^2}<\dfrac{1}{k}-\dfrac{1}{k+1}$ 로 완화 → 각각 목표 부등식'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/295-692.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 밑과 차수($2^n$ 대 $n^2$ → $3^n$ 대 $n^3$)를 바꿀 수 있고 그에 따라 시작 번호가 달라진다. ⑵ 의 우변 상수 $2$ 와 분모 차수도 바꿀 수 있다. 제약: 시작 번호는 중간 부등식이 성립하기 시작하는 지점과 반드시 일치해야 하며($3^n>n^3$ 은 $n \ge 4$), ⑵ 는 완화한 항의 망원 합이 우변과 정확히 맞물려야 한다.'
    creative: '(1) ⑴ 에서 부등식이 성립하는 가장 작은 자연수 $n$ 을 찾게 하면 $n=1$ 의 예외까지 따져야 해 I-VF 가 붙고 ★4 (2) ⑵ 의 우변을 $\dfrac{5}{3}$ 같은 상수로 바꾸면 망원 완화만으로는 부족해 ★4 (3) 두 소문항 중 하나를 빈칸 증명형으로 바꾸기(★3 · 698 골조) (4) ⑵ 를 $\dfrac{1}{k(k+1)}$ 대신 $\dfrac{1}{(k+1)(k+2)}$ 로 완화하면 부등호가 뒤집히는 이유를 묻기(★4 · 검증형).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-296-693
  page: 296
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    모든 자연수 $n$ 에 대하여 $p(n)$ 이 참이면 $p(n+3)$ 이 참일 때, 보기 ㄱ($p(1)$ 참이면 $p(3k)$ 참) · ㄴ($p(2)$ 참이면 $p(3k+2)$ 참) · ㄷ($p(1),p(2),p(3)$ 참이면 $p(k)$ 참) 중 항상 옳은 것 모두 고르기($k$ 는 자연수).
  category: '$+3$ 전파를 $3$ 으로 나눈 나머지류 문제로 번역 → 보기별 덮는 나머지류 대조'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$+3$ 씩 전파」를 「출발 번호와 $3$ 으로 나눈 나머지가 같은 번호만 도달」로 옮긴다 — 보기의 $3k$ · $3k+2$ 가 바로 나머지류 표기임을 알아채는 것이 골조 전체를 결정'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '명제의 참 전파 — 나머지류로 도달 집합 판정(보기형)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $p(1)$ 에서 도달하는 것은 나머지 $1$ 류뿐이라 나머지 $0$ 류인 $3k$ 는 ㄱ 에서 보장되지 않는다. $p(2)$ 에서는 나머지 $2$ 류 전체를 덮으므로 ㄴ 은 참. ㄷ 은 출발점 셋이 나머지 $0,1,2$ 를 모두 덮어 모든 자연수에 닿으므로 참.
    STEP 1 출발 ★2 · 통찰 1(EQV d2) · M_total 8 → +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 유지. 임의의 자연수 $k$ 로 진술돼 있어 Mₐ 3, $k$ 의 시작값과 $3k+2$ 표기가 함정이라 Mₜ 2.
  tier: star_2
  mechanism_primary: '$+3$ 전파 → 나머지류 보존 → ㄱ($3k$ 는 나머지 $0$, 불가) · ㄴ($3k+2$ 는 나머지 $2$, 가능) · ㄷ(나머지 $0,1,2$ 를 모두 덮음) → ㄴ, ㄷ'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/296-693.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전파 폭 $3$ 을 $4$ 나 $5$ 로 바꾸고 보기의 나머지 표기도 그에 맞춰 $4k+1$ 등으로 바꾼다. 제약: 폭을 $m$ 으로 하면 ㄷ 형 보기는 출발점이 정확히 $m$ 개 있어야 참이 되므로 보기 수와 출발점 수를 함께 조정한다.'
    creative: '(1) 전파 규칙을 $p(n) \to p(n+2)$ 와 $p(n) \to p(n+3)$ 둘로 주면 덮는 집합이 합쳐져 ★3 (2) 「$p(1)$ 이 참일 때 반드시 참인 명제가 아닌 것」 5지선다로 바꾸기(★2 · e9 골조) (3) 도달하지 못하는 번호가 유한개임을 보이게 하면 ★4 (4) 폭을 $n$ 에 의존하게($p(n) \to p(n+n)$) 바꾸면 도달 집합이 $2$ 의 거듭제곱 배수가 되어 ★3.'
```

```yaml
- id: GN-ALG-296-694
  page: 296
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    ㈎ $p(1)$ 이 참, ㈏ $p(n)$ 이 참이면 $p(2n)$ 과 $p(3n)$ 이 참일 때, 반드시 참이라고 할 수 없는 명제 고르기. 5지선다($p(24)$ · $p(30)$ · $p(36)$ · $p(48)$ · $p(96)$).
  category: '곱셈 전파 → 도달 번호는 $2^a 3^b$ 꼴 → 소인수분해로 선별'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\times 2$ 와 $\times 3$ 만 가능하다는 조건을 「도달 가능한 번호는 $2^a 3^b$ 꼴뿐」이라는 소인수분해 조건으로 옮긴다 — 번호를 하나씩 따라가면 선택지를 다 확인하기 어렵다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '명제의 참 전파 — 곱셈 전파와 소인수분해(반드시 참이라 할 수 없는 것)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $24=2^3 \times 3$, $36=2^2 \times 3^2$, $48=2^4 \times 3$, $96=2^5 \times 3$ 은 모두 $2^a 3^b$ 꼴이라 $1$ 에서 닿는다. $30=2 \times 3 \times 5$ 만 소인수 $5$ 가 있어 어떤 경로로도 만들 수 없다.
    STEP 1 출발 ★2 · 통찰 1(EQV d2) · M_total 6 → ★2 유지. 부정 발문이 유일한 함정이라 Mₜ 1.
  tier: star_2
  mechanism_primary: '$p(1)$ 에서 $\times2,\times3$ 만 가능 → 도달 번호 $=2^a 3^b$ → $30$ 만 소인수 $5$ 를 가져 제외'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/296-694.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전파 배수를 $(2,5)$ 나 $(3,5)$ 로 바꾸고 선택지 수를 그 소인수만으로 이루어진 수와 아닌 수로 섞는다. 제약: 오답 하나만 허용된 소인수 밖의 인수를 갖게 하고, 나머지 넷은 지수 조합이 실제로 가능한지 확인한다.'
    creative: '(1) $1$ 부터 $100$ 까지 중 반드시 참인 명제의 개수를 묻기(★3 · $2^a3^b \le 100$ 세기) (2) ㈎ 를 $p(2)$ 로 바꾸면 도달 집합이 $2^{a+1}3^b$ 가 되어 답이 바뀜(★2) (3) 전파를 $p(2n)$ 과 $p(n+3)$ 처럼 곱셈·덧셈 혼합으로 주면 도달 집합 기술이 어려워져 ★4 (4) 「$p(n)$ 이 참이면 $p(2n)$ 이 참」만 두고 $p(1)$ 대신 $p(3)$ 을 주는 식으로 출발점을 고르게 하기(★3).'
```

```yaml
- id: GN-ALG-296-695
  page: 296
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $1 \times 2 + 2 \times 2^2 + \cdots + n \times 2^n = (n-1) \times 2^{n+1}+2$ 의 귀납법 증명에서 빈칸 ㈎(더하는 항) $=f(k)$, ㈏ $=g(k)$ 를 찾아 $f(2)+g(3)$ 구하기.
  category: '다음 항 확인 → 두 항을 $2^{k+1}$ 로 묶어 지수 한 칸 올리기 → 빈칸 식 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '귀납법 증명 과정의 빈칸 채우기(등식 · 지수 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 좌변의 다음 항 $(k+1) \times 2^{k+1}$ 로 바로 읽히고, ㈏ 는 $(k-1)2^{k+1}+(k+1)2^{k+1}=2k \times 2^{k+1}=k \times 2^{k+2}$ 라는 지수법칙 정리로 나온다.
    빈칸 자리와 목표 꼴 $\square \times 2^{k+2}+2$ 가 모두 제시돼 있어 역추적할 여지가 거의 없고 묶기도 정형이라 통찰 0.
    STEP 1 출발 ★2 · M_total 7(>5) 이라 −1 조건에 해당하지 않아 ★2 유지. 함정은 $2 \times 2^{k+1}=2^{k+2}$ 표기 한 곳.
  tier: star_2
  mechanism_primary: '㈎ $=(k+1) \times 2^{k+1}$ → $(k-1)2^{k+1}+(k+1)2^{k+1}=k \times 2^{k+2}$ → ㈏ $=k$ → $f(2)+g(3)=3 \times 2^3+3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/296-695.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $2$ 를 $3$ 으로 바꾸면 우변이 $\dfrac{(2n-1) \times 3^{n+1}+3}{4}$ 꼴이 되고, 묻는 값도 $f(2)+g(3)$ 대신 $f(3) \times g(2)$ 등으로 바꿀 수 있다. 제약: 밑을 바꾸면 묶은 뒤 지수가 한 칸 올라가는 구조가 깨지므로 우변 계수를 다시 유도해 빈칸 ㈏ 가 $k$ 의 간단한 식이 되게 맞춘다.'
    creative: '(1) 빈칸을 ㈏ 하나로 줄이고 대신 등식 자체를 증명하게 하기(★2 · e10 골조) (2) 빈칸 위치를 $n=1$ 확인 자리로 옮겨 시작값 함정을 만들기(★2) (3) 좌변을 $\sum k \times 2^k$ 로 보고 등비수열의 합 공식으로도 구하게 하면 I-SC 가 붙어 ★3 (4) $f$ 와 $g$ 의 차수나 계수를 비교하는 발문($f(k)-2g(k)$ 의 최솟값)으로 바꾸면 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-297-696
  page: 297
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    모든 자연수 $n$ 에 대하여 $9^n-1$ 이 $8$ 의 배수임을 보이는 귀납법 증명에서 $9^{k+1}-1=㈎ \times 9^k-1=㈏ \times (9^k+N)$ 의 빈칸 두 수 구하기($9^k-1=8N$ 가정).
  category: '지수 한 칸 올리기 → 가정식을 $1=9^k-8N$ 으로 되돌려 대입 → $8$ 로 묶기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '표준 풀이($9^k=8N+1$ 대입 → $8(9N+1)$)로는 제시된 목표 꼴 $8(9^k+N)$ 이 나오지 않으므로, 목표를 보고 $-1$ 을 $-(9^k-8N)$ 로 되돌려 넣는 방향을 역추적한다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '귀납법 증명 과정의 빈칸 채우기(배수 판정)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 $9^{k+1}=9 \times 9^k$ 에서 곧바로 $9$, ㈏ 는 $9 \times 9^k-(9^k-8N)=8 \times 9^k+8N=8(9^k+N)$ 에서 $8$ 이다.
    역추적이 한 줄이고 두 빈칸이 모두 상수라 실제 부담은 STEP 1 층이다. 벤더 STEP 2 출발 ★3 이나 통찰 1(BW d1) · M_total 6 으로 −1 조정해 ★2.
    [분류 이슈] 벤더 구역 신호(★3)와 1단 어긋나게 기록했다. 같은 구역의 697·698 과 비교하면 층 차이가 뚜렷하다.
  tier: star_2
  mechanism_primary: '$9^{k+1}-1=9 \times 9^k-1$ → $-1$ 을 $-(9^k-8N)$ 로 되돌리기 → $8(9^k+N)$ → ㈎ $=9$, ㈏ $=8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '㈎ $9$ ㈏ $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/297-696.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 법을 함께 바꾼다($7^n-1$ 이 $6$ 의 배수 · $5^n-1$ 이 $4$ 의 배수 · $4^n-1$ 이 $3$ 의 배수). 제약: 「밑 $-1$」이 곧 법이 되어야 같은 한 줄 골조가 유지된다. $2^{2n}-1$ 이 $3$ 의 배수처럼 지수를 바꾸면 $4^n$ 으로 먼저 고쳐야 해 단계가 늘어난다.'
    creative: '(1) 빈칸 없이 $9^n-1$ 이 $8$ 의 배수임을 증명하게 하기(★2) (2) $n^3+2n$ 이 $3$ 의 배수처럼 다항식 배수 판정으로 바꾸면 전개 정리가 붙어 ★3 (3) $9^n-1$ 이 $8$ 의 배수이면서 $16$ 의 배수가 되는 $n$ 의 조건을 묻기(★4 · 사후 검증형) (4) $N$ 이 자연수라는 조건이 왜 필요한지 설명하게 하기(★3 · 검증형).'
```

```yaml
- id: GN-ALG-297-697
  page: 297
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: '연습문제'
  summary: |
    $a_n=(2^{2n}-1) \times 2^{n(n-1)}+(n-1) \times 2^{-n}$ 일 때 $\displaystyle\sum_{k=1}^{n}a_k=2^{n(n+1)}-(n+1) \times 2^{-n}$ 의 귀납법 증명에서 빈칸 ㈎ $=f(m)$, ㈏ $=g(m)$ 을 찾아 $\dfrac{g(7)}{f(3)}$ 구하기. 5지선다.
  category: '$a_{m+1}$ 대입 → 공통인수 $2^{m(m+1)}$ 로 묶어 지수 합을 $(m+1)(m+2)$ 로 맞추기'
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a_{m+1}$ 의 $2^{(m+1)m}$ 부분을 제시된 식의 $(2^{2m+2}-1) \times ㈎$ 자리와 맞춰 ㈎ 가 $2^{m(m+1)}$ 임을 읽어 낸다 — 지수를 전개하지 않고 꼴 그대로 대응시켜야 보인다'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '마지막 줄의 목표 $2^{(m+1)(m+2)}$ 에서 거꾸로, 남은 두 항을 $2^{m(m+1)}$ 로 묶으면 지수가 $m(m+1)+(2m+2)=(m+1)(m+2)$ 로 맞아떨어짐을 역추적해 ㈏ $=2^{2m+2}$ 를 얻는다'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '귀납법 증명 과정의 빈칸 채우기(수열의 합 · 지수 묶기)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $2^{m(m+1)}+(2^{2m+2}-1) \times 2^{m(m+1)}=2^{m(m+1)} \times 2^{2m+2}=2^{(m+1)(m+2)}$ 라는 지수 합 맞추기가 골조 전체이고, $2^{-m}$ 계열 항은 따로 정리된다.
    지수가 $m$ 의 이차식이라 전개하지 않고 인수 꼴 그대로 다루어야 하고($(m+1)(m+2)$ 로 묶이는 것을 봐야 함), 답도 $f,g$ 를 함수로 확정한 뒤 $\dfrac{2^{16}}{2^{12}}$ 로 계산한다.
    STEP 2 출발 ★3 · 평가원 기출 태그 · 통찰 2(EQV d2 + BW d2) · M_total 11 → +1 하여 ★4. ★5 는 통찰 3개 이상과 SC/VF/SYM/XU 중 하나가 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: '$a_{m+1}$ 대입 → ㈎ $=2^{m(m+1)}$ → 공통인수로 묶어 $2^{(m+1)(m+2)}$ → ㈏ $=2^{2m+2}$ → $\dfrac{g(7)}{f(3)}=\dfrac{2^{16}}{2^{12}}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/297-697.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '묻는 값의 대입 번호($g(7)$, $f(3)$)를 바꾸면 답만 달라지고 골조는 그대로다. 밑 $2$ 를 $3$ 으로 바꾸면 $a_n$ 의 첫 인수를 $3^{2n}-1$ 대신 $\dfrac{3^{2n}-1}{2}$ 로 고쳐야 한다. 제약: 지수 $n(n-1)$ 과 $n(n+1)$ 의 차가 정확히 $2n$ 이어야 묶기가 한 번에 끝나므로 이차식 지수를 임의로 바꾸지 않는다.'
    creative: '(1) 빈칸을 $2^{-n}$ 항 쪽에 두면 음의 지수 정리가 주 골조가 되어 ★3 (2) $f(m) \times g(m)$ 을 $m$ 의 식으로 답하게 하면 함수 확정이 더 요구돼 ★4 유지 (3) 빈칸 없이 $(\ast)$ 를 증명하게 하면 지수 묶기를 스스로 찾아야 해 ★4 (4) $a_n$ 의 $2^{-n}$ 항을 빼고 등식을 다시 세우게 하면 두 계열의 역할을 이해했는지 묻는 ★5 후보가 되나, 통찰 유형이 EQV·BW 뿐이라 ★5 자격에는 미달.'
```

```yaml
- id: GN-ALG-298-698
  page: 298
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $n \ge 2$ 에서 $1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}>\dfrac{2n}{n+1}$ 의 귀납법 증명에서 ㈎(시작값의 좌변) $=a$, ㈏ $=f(k)$ 를 찾아 $f(a)$ 구하기.
  category: '시작값 좌변 계산 → ㈏ 가 $n=k+1$ 일 때의 우변임을 역추적 → 자연수 아닌 값 대입'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '증명이 보이려는 것이 $n=k+1$ 에서의 ㉠ 이라는 데서 거꾸로, 차 $\dfrac{2k+1}{k+1}-㈏$ 를 따지는 자리의 ㈏ 가 $\dfrac{2n}{n+1}$ 에 $n=k+1$ 을 넣은 $\dfrac{2(k+1)}{k+2}$ 임을 읽어 낸다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '귀납법 증명 과정의 빈칸 채우기(부등식 · 다음 단계 우변 역추적)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 는 $n=2$ 의 좌변 $1+\dfrac{1}{2}=\dfrac{3}{2}$ 이고, ㈏ 는 목표 부등식의 우변에 $n=k+1$ 을 넣은 $\dfrac{2(k+1)}{k+2}$ 다. 마지막에 자연수 자리인 $k$ 에 $a=\dfrac{3}{2}$ 를 대입해야 한다.
    함정이 둘이다. 시작이 $n=1$ 이 아니라 $n=2$ 라는 것(T-범위)과, $f(k)$ 의 $k$ 가 자연수인데 분수를 넣어 계산하라는 것(T-표기) → Mₜ 2.
    STEP 2 출발 ★3 · 통찰 1(BW d2) · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: '㈎ $=1+\dfrac{1}{2}=\dfrac{3}{2}$ → ㈏ 는 $n=k+1$ 일 때 우변 $\dfrac{2(k+1)}{k+2}$ → $f\left(\dfrac{3}{2}\right)=\dfrac{10}{7}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{10}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/298-698.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 $\dfrac{3n}{n+2}$ 처럼 바꾸면 ㈏ 와 차의 분자가 달라지고 시작 번호도 다시 정해야 한다. $f(a)$ 대신 $f(2a)$ 나 $a \times f(a)$ 를 묻는 식으로 대입값을 바꿀 수 있다. 제약: 시작값 $n$ 에서 부등식이 실제로 성립해야 하고, 차 $\dfrac{2k+1}{k+1}-f(k)$ 가 양수임이 한 줄로 보여야 한다.'
    creative: '(1) 빈칸 없이 부등식을 증명하게 하기(★3 · e11 골조) (2) ㈏ 를 주고 차가 양수인 이유를 서술하게 하면 검증이 주 과제가 되어 ★3 (3) 좌변의 조화합을 $\ln$ 없이 상한까지 잡게 하면 ★4 (4) 시작 번호를 $n=1$ 로 착각하면 어디가 틀리는지 찾게 하기(★4 · 오류 찾기형).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-298-699
  page: 298
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $a_n=1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}$ 일 때 $n \ge 2$ 에서 $n+a_1+a_2+\cdots+a_{n-1}=na_n$ 의 귀납법 증명에서 빈칸 ㈎ $=f(k)$(양변에 더하는 식), ㈏ $=g(k)$ 를 찾아 $f(4)-g(11)$ 구하기.
  category: '다음 단계 좌변 꼴에서 더할 식 역추적 → 계차 $a_{k+1}-a_k$ 로 우변 정리'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$n=k+1$ 에서의 좌변이 $(k+1)+a_1+\cdots+a_k$ 여야 한다는 데서 거꾸로, 더해야 할 것이 상수 $1$ 과 항 $a_k$ 의 합임을 찾는다 — 보통의 귀납 증명처럼 「다음 항 하나」가 아니다'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '우변 $(k+1)a_k+1$ 을 $(k+1)(a_{k+1}-㈏)+1$ 꼴에 맞추려고 $a_n$ 의 정의에서 나오는 계차 $a_{k+1}-a_k=\dfrac{1}{k+1}$ 로 조건을 옮긴다'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '귀납법 증명 과정의 빈칸 채우기(부분합의 수열 · 계차 이용)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 는 $1+a_k$, ㈏ 는 $a_{k+1}-a_k=\dfrac{1}{k+1}$ 이다. $f(4)=a_4+1$ 과 $g(11)=\dfrac{1}{12}$ 에서 $a_4$ 의 마지막 항 $\dfrac{1}{4}$ 과 분모가 맞물려 차가 정수로 떨어진다.
    더하는 것이 단일 항이 아니라 「상수 + 항」이라는 점, 우변 정리에 수열의 계차를 끌어와야 한다는 점에서 695~698 의 빈칸형보다 한 층 위다. 수열 $a_n$ 자체가 조화합 추상이라 Mₐ 3, 시작 $n=2$ 와 첨자 어긋남으로 Mₜ 2.
    실력 UP 출발 ★4 · 통찰 2(BW d2 + EQV d2) · M_total 10 → ★4 유지. ★5 는 통찰 3개 이상과 SC/VF/SYM/XU 중 하나가 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: '좌변이 $(k+1)+a_1+\cdots+a_k$ 가 되려면 ㈎ $=1+a_k$ → 우변 $(k+1)a_k+1=(k+1)(a_{k+1}-㈏)+1$ → ㈏ $=\dfrac{1}{k+1}$ → $f(4)-g(11)=\dfrac{37}{12}-\dfrac{1}{12}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/298-699.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '묻는 값의 대입 번호($f(4)$, $g(11)$)를 바꿀 수 있다. 제약: 답이 깔끔하게 떨어지려면 $g$ 의 분모와 $a_m$ 의 마지막 분모가 맞물리는 조합을 고른다($f(m)-g(3m-1)$ 꼴). $a_n$ 을 $1+\dfrac{1}{2}+\cdots+\dfrac{1}{n}$ 이 아닌 다른 부분합으로 바꾸면 계차가 달라져 ㈏ 를 다시 유도해야 한다.'
    creative: '(1) 빈칸 없이 등식을 증명하게 하면 「상수 + 항 더하기」를 스스로 찾아야 해 ★4 유지 (2) $a_n$ 을 일반 수열로 두고 같은 등식이 성립할 조건을 묻기(★5 후보 · I-XU 가 붙음) (3) $f(k)$ 와 $g(k)$ 의 관계식($f(k)-1=a_k$, $g(k)=a_{k+1}-a_k$)을 묻는 발문으로 바꾸면 ★4 (4) 시작을 $n=3$ 으로 옮기고 $n=2$ 에서 성립하지 않음을 보이게 하면 검증이 강제돼 ★4.'
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 0 · ★2 9 · ★3 3 · ★4 2 · ★5 0
- 통찰형 11 · 절차형 3(294-e10 · 294-691 · 296-695) · premium 0
- 통찰 유형 분포: I-EQV 8 · I-BW 7 (총 15개 라벨 · depth 1 이 4개, depth 2 가 11개 · depth 3 없음). SC/VF/SYM/XU·PD·RT·MI·CON 은 이 범위에 없음
- type_hint 상위: 「명제의 참 전파 — 도달 가능한 번호」 5(293-e9 · 293-689 · 293-690 · 296-693 · 296-694) · 「귀납법 증명 과정의 빈칸 채우기」 5(296-695 · 297-696 · 297-697 · 298-698 · 298-699) · 「귀납법을 이용한 등식의 증명」 2(294-e10 · 294-691) · 「귀납법을 이용한 부등식의 증명」 2(295-e11 · 295-692)
- 구역별: 필수·발전 예제 7문(★2 5 · ★3 2) · STEP 1 3문 전부 ★2 · STEP 2 3문(★2 1 · ★3 1 · ★4 1) · 실력 UP 1문 ★4
- 답 형태: 5지선다 4문 · 보기 고르기 2문 · 「풀이 참조」(증명) 4문 · 수치·식 답 4문
- 그림: 0문(이 범위에는 그림 문항 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 어긋난 문항이 없고, 아래 셋은 모두 1단 차이와 층 경계에 관한 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-295-e11 | 부등식 귀납(버리기 착안)은 체감상 등식 층(e10)보다 위이나, 통찰 1개·depth 2 라 ±1 규칙의 +1 조건에 못 미쳐 벤더 「필수」 출발 ★2 로 기록 | ★2 / ★3 |
| GN-ALG-295-692 | 확인체크 유제인데 대응 필수 예제 e11(★2)보다 한 단 높게 판정. 중간 부등식 끼워 넣기·항 올려 잡기가 한 겹 더 얹힘 | ★3 |
| GN-ALG-297-696 | 벤더 STEP 2(★3 출발)이나 빈칸 둘이 모두 상수이고 역추적이 한 줄이라 −1 조정. 같은 구역의 697·698 과 층 차이가 뚜렷 | ★2 / ★3 |

## 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 이 범위에서 확인된 것.

- **따로 세워야 할 유형 ①「명제의 참 전파」**: 이 단원 고유의 축이고 5문항이나 된다. 전파 규칙의 성격에 따라 체감이 갈리므로 한 유형 안의 세 단계로 두는 편이 맞는다 — (가) 덧셈 전파(e9 · 693, 잉여류로 끝남 · base ★2), (나) 홀짝으로 갈리는 역산 전파(689, base ★2), (다) 곱셈 전파(694, 소인수분해 · base ★2~3). 690 처럼 「전파 규칙 자체를 고르는」 역방향 발문은 base ★3 으로 따로 잡는다.
- **통합해도 될 유형**: 「등식의 귀납 증명」(e10 · 691)은 일반항이 곱꼴이든 분수꼴이든 골조가 같다. 한 유형의 난이도 두 단계로 충분하다.
- **따로 세워야 할 유형 ②「부등식의 귀납 증명」**: 등식과 base ★ 를 같이 둘 수 없다. 「양수 항 버리기」(e11)와 「중간 부등식 끼워 넣기·항 올려 잡기」(692)는 한 층 차이가 나므로 base ★2 / ★3 두 유형으로 나누는 것이 이 범위 실측과 맞는다.
- **따로 세워야 할 유형 ③「증명 과정의 빈칸 채우기」**: 5문항으로 가장 많고 ★2 부터 ★4 까지 폭이 가장 넓다. 난이도를 가르는 것은 소재가 아니라 **빈칸이 상수인가 함수인가**다 — 상수 빈칸(696) ★2, 다음 항·지수 정리 빈칸(695) ★2, 다음 단계 우변 역추적(698) ★3, 함수 $f,g$ 확정 + 지수 합 맞추기(697) ★4, 「상수 + 항」 더하기 + 계차(699) ★4. 카탈로그에서는 이 기준을 base ★ 산정 규칙으로 명시하는 것이 낫다.
- **이 단원의 통찰 축은 I-EQV·I-BW 둘뿐**이다. 전파 문항은 조건을 도달 규칙으로 옮기는 EQV, 빈칸·부등식 문항은 목표 꼴에서 되짚는 BW 로 수렴한다. 따라서 이 단원만으로는 ★5 슬롯(SC/VF/SYM/XU 필요)을 만들 수 없고, ★5 자리는 수열의 합·점화식 단원과 결합한 문항에서 채워야 한다.
- **I-PD 가 없다는 점**도 기록해 둔다. 수학적 귀납법 단원인데 이 전사 범위에는 「$n=1,2,3$ 을 계산해 일반항을 추측한 뒤 증명」하는 꼴이 한 문항도 없다. 변형 출제에서 가장 자연스럽게 ★ 를 한 단 올릴 수 있는 방향이고, 실제로 여러 블록의 `variation_notes.creative` 에 그 갈래를 적어 두었다.
