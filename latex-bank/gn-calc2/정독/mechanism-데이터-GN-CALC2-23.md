---
name: mechanism-데이터-GN-CALC2-23
description: 개념원리 미적분Ⅱ 23 함수의 최댓값과 최솟값(1/1 · 20문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 23 함수의 최댓값과 최솟값
  unit_code: GN-CALC2-23
  part: "1/1"
  extract_range: "189~194쪽 · 189-e20~194-395"
  total_problems: 20
  unit_total: 20
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 23 함수의 최댓값과 최솟값 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 189~194쪽, 단원 「23 함수의 최댓값과 최솟값」 20문항 전수를 다룬다. 구역은 「필수·발전 예제」 14문(필수 예제 4 + 발전 예제 1 + 확인체크 9) · 「연습문제 STEP 1」 2문 · 「연습문제 STEP 2」 3문 · 「연습문제 실력 UP」 1문이다. 벤더 난이도 신호는 구역(필수·발전 예제 → ★2 출발 · 발전 → ★3 · STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4)과 태그(「필수」·「발전」·「확인체크」·「평가원 기출」)로 주어지며, 확인체크는 바로 앞 예제의 유제이므로 예제와 같은 ★2 출발점으로 읽었다.

단원 전체가 「닫힌구간에서 연속인 함수의 최대·최소 = 극값과 구간 끝값 비교」라는 하나의 골조를 공유하고, 갈리는 것은 (1) 어떤 함수족이 들어가는가(유리·무리 → 지수·로그 → 삼각), (2) 최대·최소 값이 거꾸로 주어져 미정계수를 역산하는가, (3) 도형·입체를 한 변수 함수로 옮기는 활용인가, 이 세 축이다. 뒤쪽 연습문제에서는 최솟값이 극값이 아니라 **구간 끝값**에서 나는 함정과, 최솟값 자체를 다시 매개변수의 함수로 보는 이중 최적화가 추가된다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 3문(`193-e24` · `193-388` · `193-389`)이며 모두 활용 문항이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-189-e20
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=\dfrac{3x-4}{x^2+1}$, $[-1,\,4]$ (유리함수) ⑵ $f(x)=x\sqrt{4-x^2}$, $[-2,\,2]$ (무리함수).
  category: "몫·곱의 미분법 → $f'(x)=0$ 의 근 → 구간 끝값과 극값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수·무리함수의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 「미분 → 임계점 → 끝값 비교」 한 골조이고 도구만 몫의 미분법(⑴)과 곱·합성의 미분법(⑵)으로 갈린다.
    ⑵ 는 정의역이 $-2\le x\le 2$ 로 무리함수 자체에서 제한되고 끝점에서 미분 불가이지만 함숫값은 정의되므로 끝값을 그대로 비교한다(T-범위).
    통찰 없는 표준 절차이고 M_total 6 이라 필수 예제 출발점 ★2 를 그대로 둔다.
  tier: star_2
  mechanism_primary: '미분 → $f''(x)=0$ 의 근을 구간 안에서 추림 → 극값과 양 끝값의 함숫값을 모두 비교 → 최대·최소'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $\dfrac{1}{2}$, 최솟값 $-\dfrac{9}{2}$ ⑵ 최댓값 $2$, 최솟값 $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/189-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 분자 계수 $3x-4$ 와 분모 $x^2+1$ 의 상수항, 구간 $[-1,\,4]$ 를 바꿀 수 있다. 제약: $f''$ 의 분자가 이차식이므로 두 근이 유리수로 떨어지도록 판별식이 완전제곱이어야 하고, 임계점이 구간 안에 들어가야 비교가 의미 있다. ⑵ 는 $x\sqrt{k-x^2}$ 의 $k$ 를 완전제곱수로 두어야 $x=\pm\sqrt{k/2}$ 에서의 값이 정리된다.'
    creative: '(1) 구간을 임계점 한쪽만 포함하도록 좁히면 최대·최소가 모두 끝값이 되어 ★2 유지·함정만 강화 (2) 최댓값과 최솟값의 합·곱을 묻는 한 겹을 씌우면 ★2 유지 (3) 구간을 열린구간 $(-1,\,4)$ 로 바꾸면 최댓값·최솟값 존재 판정이 필요해 ★3 (4) 구간 끝을 매개변수 $a$ 로 두면 끝값과 극값 중 어느 쪽이 최대인지 경우를 나눠야 해서 I-MI 가 붙고 ★4.'
```

```yaml
- id: GN-CALC2-189-381
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=\dfrac{x^2-3x-1}{x+2}$, $[-1,\,2]$ ⑵ $f(x)=x-2\sqrt{x-1}$, $[1,\,5]$.
  category: "몫의 미분법·무리함수 미분 → $f'(x)=0$ → 끝값과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수·무리함수의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    189-e20 의 유제로 골조가 같다. ⑴ 은 몫의 미분법 후 분자 이차식이 인수분해되어 구간 안 근이 하나만 남고, ⑵ 는 도함수가 $1-\dfrac{1}{\sqrt{x-1}}$ 이라 $x=2$ 하나뿐이다.
    ⑵ 에서 $x=1$ 은 정의역의 끝이면서 미분 불가점이므로 임계점 목록이 아니라 끝값으로 처리해야 한다(T-범위).
    통찰 없음·M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '미분 → $f''(x)=0$ 의 구간 내 근 → 그 값과 양 끝값 비교 → 최대·최소'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $3$, 최솟값 $-1$ ⑵ 최댓값 $1$, 최솟값 $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/189-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 분자의 계수와 분모의 $x+2$ 를 바꿀 수 있다. 제약: 분자를 정리한 이차식 $(x+5)(x-1)$ 꼴이 유리수 근을 갖고, 그 근이 주어진 구간 안에 있어야 한다. ⑵ 는 $x-k\sqrt{x-1}$ 의 $k$ 가 짝수여야 임계점 $x=1+k^2/4$ 가 정수로 떨어진다.'
    creative: '(1) 구간을 $[2,\,5]$ 처럼 임계점 오른쪽으로 옮기면 단조증가라 끝값만 비교 → ★1 (2) ⑵ 를 $\sqrt{x-1}=t$ 치환으로 풀게 유도하면 이차함수 최소로 바뀌어 미분 없이 풀리는 두 번째 갈래가 생겨 I-SC 가 붙고 ★3 (3) 최댓값과 최솟값의 차를 묻는 겹을 씌워도 ★2 유지.'
```

```yaml
- id: GN-CALC2-190-e21
  page: 190
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 지수·로그함수가 든 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=x^2e^{-2x}$, $[-1,\,4]$ ⑵ $f(x)=x\ln x$, $\left[\dfrac{1}{e^2},\,e\right]$.
  category: "곱의 미분법 → 지수·로그 인수로 부호 판정 → 끝값과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수·로그함수의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $f'(x)=2x(1-x)e^{-2x}$ 로 지수 인수가 항상 양수라 부호가 이차식만으로 결정되고, 임계점 $0,\,1$ 과 끝값 $-1,\,4$ 를 비교한다.
    ⑵ 는 $f'(x)=\ln x+1$ 의 근 $x=\dfrac{1}{e}$ 하나로 최소가 정해지고 최대는 오른쪽 끝이다.
    두 소문항 모두 「지수 인수는 부호에 영향이 없다」는 표준 관찰만 쓰므로 통찰 0, 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '곱의 미분법으로 $f''(x)$ 를 (지수·로그 인수)×(다항 인수) 로 정리 → 부호를 다항 인수만으로 판정 → 극값과 끝값 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $e^2$, 최솟값 $0$ ⑵ 최댓값 $e$, 최솟값 $-\dfrac{1}{e}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/190-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 지수 계수 $e^{-2x}$ 를 $e^{-x}$·$e^{-3x}$ 로, 다항 인수를 $x^2$ → $x^3$ 로 바꿀 수 있다. 제약: 임계점이 $x=0$ 과 $x=n/k$ 로 유리수가 되어야 하고, 구간 끝에서의 값이 $e$ 의 정수 거듭제곱으로 떨어져야 답이 깔끔하다. ⑵ 는 구간 끝 $\dfrac{1}{e^2}$ 을 $\dfrac{1}{e^3}$ 등으로 바꿔도 되지만 최소점 $\dfrac{1}{e}$ 가 구간 안에 남아야 한다.'
    creative: '(1) 구간을 $[1,\,e]$ 로 바꾸면 ⑵ 가 단조증가가 되어 끝값만 비교 → ★1 (2) $x^2e^{-2x}$ 의 최댓값을 구간 없이(실수 전체) 묻고 $x\to\infty$ 극한 판정을 요구하면 ★3 (3) 두 함수의 최댓값이 같아지도록 계수를 정하라고 하면 역산이 붙어 ★3.'
```

```yaml
- id: GN-CALC2-190-382
  page: 190
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 지수·로그함수가 든 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=xe^{-x^2}$, $[-1,\,1]$ ⑵ $f(x)=\dfrac{\ln x}{x^2}$, $[1,\,e]$.
  category: "곱·몫의 미분법 → 임계점 → 끝값과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수·로그함수의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    190-e21 의 유제. ⑴ 은 $f'(x)=(1-2x^2)e^{-x^2}$ 로 임계점이 $\pm\dfrac{1}{\sqrt{2}}$ 이고 함수가 기함수라 최대·최소가 부호만 다르다.
    ⑵ 는 $f'(x)=\dfrac{1-2\ln x}{x^3}$ 로 임계점이 $x=\sqrt{e}$, 최소는 왼쪽 끝 $f(1)=0$ 이다.
    기함수 대칭은 답을 짧게 하지만 없어도 풀리므로 통찰로 세지 않았다. 통찰 0·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '곱·몫의 미분법 → $f''(x)$ 의 분자만으로 부호 판정 → 임계점과 끝값 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $\dfrac{1}{\sqrt{2e}}$, 최솟값 $-\dfrac{1}{\sqrt{2e}}$ ⑵ 최댓값 $\dfrac{1}{2e}$, 최솟값 $0$'
  answer_source: "답지(쪽 렌더 · 답 크롭 ⑵ 잘림)"
  figure: none
  latex: latex-bank/gn-calc2/items/190-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 $xe^{-kx^2}$ 의 $k$ 를 바꿔도 임계점이 $\pm\dfrac{1}{\sqrt{2k}}$ 로 유지된다. 제약: 임계점이 구간 $[-1,\,1]$ 안에 있어야 하므로 $k\ge\dfrac{1}{2}$. ⑵ 는 $\dfrac{\ln x}{x^n}$ 의 $n$ 을 바꾸면 임계점이 $x=e^{1/n}$ 이므로 구간 오른쪽 끝이 그보다 커야 극값이 최대가 된다.'
    creative: '(1) ⑴ 에서 기함수임을 먼저 보이고 최댓값만 구하게 하면 I-SYM 이 명시돼 ★3 (2) 구간을 $[0,\,1]$ 로 줄이면 최소가 끝값 $0$ 이 되어 ★1~2 (3) ⑵ 의 구간을 $[1,\,e^2]$ 로 넓히면 오른쪽 끝값과 극댓값 비교가 한 단계 늘어 ★3.'
```

```yaml
- id: GN-CALC2-190-383
  page: 190
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 $f(x)=2x-x\ln x$ 가 $x=a$ 에서 최댓값 $b$ 를 가질 때 $a+b$ 의 값.
  category: "미분 → 유일한 극대점이 곧 최대 → $a$, $b$ 확정 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수가 든 함수의 정의역 전체에서의 최댓값과 그 지점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $f'(x)=1-\ln x$ 이므로 $x=e$ 하나에서 부호가 양에서 음으로 바뀌고, 정의역 $x>0$ 안에 다른 임계점이 없어 극대가 곧 최대다.
    $a=e$, $b=f(e)=e$ 로 둘 다 같은 값이 나오는 짧은 문항이라 단계·계산이 모두 가볍다.
    통찰 0 · M_total 5 → v3.8 의 「절차형·저 노동 −1」 규칙으로 확인체크 출발점 ★2 에서 ★1 로 내렸다. [분류 이슈] 유제를 예제와 같은 층으로 두는 관례를 쓰면 ★2.
  tier: star_1
  mechanism_primary: '$f''(x)=1-\ln x=0$ → $x=e$ 에서 극대이자 최대 → $a=e$, $b=e$ → $a+b$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/190-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$2x-x\ln x$ 의 계수 $2$ 를 $k$ 로 바꾸면 최대점이 $x=e^{k-1}$ 로 옮겨간다. 제약: $k$ 가 정수여야 $a$ 와 $b$ 가 $e$ 의 정수 거듭제곱으로 떨어지고, $a+b$ 가 한 항으로 정리되려면 $k=2$ 처럼 $a=b$ 가 되는 값이 편하다.'
    creative: '(1) $a\times b$ 나 $\ln(ab)$ 를 묻는 겹을 씌워도 ★1 유지 (2) 정의역을 $[1,\,e^2]$ 로 제한하면 끝값 비교가 추가되어 ★2 (3) 최댓값 $b$ 를 먼저 주고 계수를 역산하게 하면 미정계수 결정형으로 바뀌어 ★3 (4) $2x-x\ln x>0$ 인 $x$ 의 범위를 묻게 하면 최대 판정 대신 부호 판정이 되어 골조가 달라진다.'
```

```yaml
- id: GN-CALC2-191-e22
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 삼각함수가 든 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=2\sin x-x$, $[0,\,2\pi]$ ⑵ $f(x)=\dfrac{2-\cos x}{\sin x}$, $\left[\dfrac{\pi}{6},\,\dfrac{5}{6}\pi\right]$.
  category: "미분 → 특수각에서 $f'(x)=0$ → 극값과 끝값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $f'(x)=2\cos x-1=0$ 에서 $x=\dfrac{\pi}{3},\,\dfrac{5}{3}\pi$ 두 임계점이 나오고 끝값 $f(0)=0$, $f(2\pi)=-2\pi$ 까지 넷을 비교한다.
    ⑵ 는 몫의 미분법 후 $\sin^2x+\cos^2x=1$ 로 분자가 $1-2\cos x$ 로 접혀 임계점이 $x=\dfrac{\pi}{3}$ 하나다. 이 정리는 삼각함수 미분의 표준 처리라 통찰로 세지 않았다.
    통찰 0 · M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '미분 후 $\sin^2x+\cos^2x=1$ 로 정리 → 특수각 임계점 → 극값과 양 끝값 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $\sqrt{3}-\dfrac{\pi}{3}$, 최솟값 $-\sqrt{3}-\dfrac{5}{3}\pi$ ⑵ 최댓값 $4+\sqrt{3}$, 최솟값 $\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/191-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 $k\sin x-x$ 의 $k$ 를 $\sqrt{2}$·$2$ 처럼 두어야 $\cos x=\dfrac{1}{k}$ 가 특수각이 된다. ⑵ 는 분자 상수 $2$ 를 바꾸면 임계점 조건이 $\cos x=\dfrac{1}{c}$ 가 되므로 $c=2$ 를 유지해야 $\dfrac{\pi}{3}$ 이 나온다. 구간 끝은 $\sin$ 값이 유리수인 특수각으로 둔다.'
    creative: '(1) 구간을 $[0,\,\pi]$ 로 줄이면 임계점이 하나만 남아 ★1~2 (2) ⑵ 를 최솟값만 묻게 하면 끝값 비교가 빠져 ★2 (3) $2\sin x-x=k$ 의 실근 개수를 묻는 형태로 바꾸면 그래프 해석이 붙어 I-RT ★3 (4) 구간을 매개변수로 두면 경우 나눔이 생겨 ★4.'
```

```yaml
- id: GN-CALC2-191-384
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 삼각함수의 곱으로 된 함수의 최댓값·최솟값을 구한다.
    ⑴ $f(x)=\sin x(1-\sin x)$, $\left[-\pi,\,\dfrac{\pi}{6}\right]$ ⑵ $f(x)=(1+\cos x)\sin x$, $[0,\,2\pi]$.
  category: "치환 또는 곱의 미분법 → 임계점 → 끝값과 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑴ 을 $t=\sin x$ 로 옮겨 이차함수 $t-t^2$ 의 최대·최소로 보되, 구간 $\left[-\pi,\,\dfrac{\pi}{6}\right]$ 에서 $t$ 의 범위가 $\left[-1,\,\dfrac{1}{2}\right]$ 로 잘린다는 것까지 함께 옮겨야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 닫힌구간 최댓값과 최솟값(치환 또는 직접 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $t=\sin x$ 치환으로 위로 볼록한 이차함수가 되는데, 핵심은 $t$ 의 범위가 $[-1,\,1]$ 이 아니라 주어진 $x$ 구간 때문에 $\left[-1,\,\dfrac{1}{2}\right]$ 로 잘린다는 점이다(T-범위). 직접 미분해도 $\cos x(1-2\sin x)$ 로 풀린다.
    ⑵ 는 $f'(x)=(2\cos x-1)(\cos x+1)$ 로 인수분해되어 임계점이 $\dfrac{\pi}{3},\,\pi,\,\dfrac{5}{3}\pi$ 다.
    치환 범위 절단이 I-RT d2 한 개. 확인체크 ★2 출발이고 통찰 1개·depth 2 는 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: '$t=\sin x$ 치환(또는 직접 미분) → 구간이 강제하는 $t$ 의 범위 확정 → 이차함수 꼭짓점과 범위 끝값 비교'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ 최댓값 $\dfrac{1}{4}$, 최솟값 $-2$ ⑵ 최댓값 $\dfrac{3\sqrt{3}}{4}$, 최솟값 $-\dfrac{3\sqrt{3}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/191-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 구간 오른쪽 끝을 $\dfrac{\pi}{6}$ → $\dfrac{\pi}{2}$ 로 옮기면 $t$ 의 범위가 $[-1,\,1]$ 로 넓어져 꼭짓점 $t=\dfrac{1}{2}$ 이 그대로 최대다. 제약: 최대가 꼭짓점에서 나는지 범위 끝에서 나는지가 오른쪽 끝 각에 따라 바뀌므로 $\dfrac{\pi}{6}$ 은 「꼭짓점이 겨우 포함되는」 경계값이다. ⑵ 는 $(k+\cos x)\sin x$ 의 $k=1$ 이어야 인수분해가 떨어진다.'
    creative: '(1) 구간을 $\left[-\pi,\,0\right]$ 으로 바꾸면 $t\le 0$ 이라 꼭짓점이 빠지고 최대가 끝값이 되어 함정이 강해진다(★3) (2) $\sin x$ 대신 $\cos x$ 로 바꾸면 범위 절단 위치가 달라져 같은 골조의 새 문항 (3) $t$ 의 범위를 문제에서 알려 주면 통찰이 사라져 ★1~2 (4) ⑵ 를 $M+m$ 형태로 묻고 기함수 대칭을 쓰게 하면 I-SYM 이 붙어 ★3.'
```

```yaml
- id: GN-CALC2-191-385
  page: 191
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 $[0,\,2\pi]$ 에서 $f(x)=e^{-x}(\sin x+\cos x)$ 의 최댓값 $M$, 최솟값 $m$ 에 대하여 $M+m$.
  category: '곱의 미분법 → 도함수가 $-2e^{-x}\sin x$ 로 접힘 → 극값과 끝값 비교'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 삼각함수의 곱의 닫힌구간 최댓값과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분법으로 두 항이 상쇄되어 $f'(x)=-2e^{-x}\sin x$ 로 접히고, 지수 인수가 양수라 부호는 $\sin x$ 만으로 결정된다. 구간 안에서 $x=\pi$ 가 유일한 극소점이다.
    최댓값은 극값이 아니라 왼쪽 끝 $f(0)=1$ 에서 나므로 $f(2\pi)=e^{-2\pi}$ 와 비교하는 끝값 처리가 실제 함정이다.
    도함수 상쇄는 계산 정리이지 통찰 전환이 아니라고 보아 통찰 0 으로 두었다. [분류 이슈] 이 상쇄를 I-EQV 로 세면 ★3 후보.
  tier: star_2
  mechanism_primary: '곱의 미분법 → $f''(x)=-2e^{-x}\sin x$ → $\sin x$ 의 부호로 증감 판정 → 극솟값 $-e^{-\pi}$ 와 끝값 $1$ 비교 → $M+m$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1-\dfrac{1}{e^{\pi}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/191-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$e^{-x}(\sin x+\cos x)$ 의 부호 조합을 $e^{-x}(\sin x-\cos x)$·$e^{x}(\sin x-\cos x)$ 로 바꿀 수 있다. 제약: 도함수가 한 항으로 접히려면 지수의 계수와 삼각 항의 조합이 맞아야 하므로 $e^{ax}$ 의 $a=\pm1$ 을 유지해야 하고, 구간은 $\sin x$ 의 부호가 한 번만 바뀌도록 $[0,\,2\pi]$ 가 편하다.'
    creative: '(1) 구간을 $[0,\,\pi]$ 로 줄이면 끝값 비교가 단순해져 ★2 (2) $M\times m$ 이나 $M-m$ 을 묻는 겹으로 바꿔도 ★2 유지 (3) 지수 계수를 매개변수 $a$ 로 두고 $M+m$ 이 최대가 되는 $a$ 를 묻게 하면 이중 최적화가 되어 ★4 (4) 도함수가 접히지 않는 조합($e^{-x}(\sin x+2\cos x)$)으로 바꾸면 임계점이 특수각이 아니게 되어 질이 떨어진다 — 피할 변형.'
```

```yaml
- id: GN-CALC2-192-e23
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $0\le x\le\dfrac{\pi}{4}$ 에서 $f(x)=ax+a\cos 2x$ ($a$ 는 양수)의 최솟값이 $\pi$ 일 때 최댓값.
  category: "최솟값 조건 → 최소가 나는 위치 확정 → $a$ 역산 → 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '최솟값이 $\pi$ 라는 결과에서 $a$ 를 역산하려면, 임계점 $x=\dfrac{\pi}{12}$ 가 극대이고 최소는 두 끝값 $f(0)=a$ 와 $f\!\left(\dfrac{\pi}{4}\right)=\dfrac{a\pi}{4}$ 중 작은 쪽이라는 것을 먼저 확정해야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소를 이용한 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=a(1-2\sin 2x)$ 이고 $a>0$ 이라 부호는 $a$ 와 무관하게 $\sin 2x$ 로 결정된다 — 즉 극값의 위치는 $a$ 에 의존하지 않는다는 것이 이 유형의 출발 관찰이다.
    임계점이 극대이므로 최소는 양 끝값 중 하나이고, $\dfrac{\pi}{4}<1$ 이라 오른쪽 끝이 최소다. 여기서 $a$ 를 역산한 뒤 극댓값을 계산한다.
    결과 조건에서 위치를 먼저 확정하는 역방향 단계 I-BW d2 하나. 필수 예제 ★2 출발 + M_total 8·depth 2 통찰 → ★3.
  tier: star_3
  mechanism_primary: '$f''(x)=a(1-2\sin 2x)$ → 임계점이 극대임을 확인 → 최소는 두 끝값 중 작은 쪽 → $a$ 역산 → 극댓값 계산'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{3}+2\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/192-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최솟값 $\pi$ 를 $2\pi$·$\dfrac{\pi}{2}$ 로 바꾸면 $a$ 만 비례해서 바뀐다. 제약: $\sin 2x=\dfrac{1}{2}$ 가 특수각이어야 하므로 $\cos 2x$ 의 계수와 $x$ 의 계수 비를 $1:1$ 로 유지해야 하고, 구간 오른쪽 끝은 $\dfrac{\pi}{4}<1$ 이라는 크기 비교가 살아 있어야 최소 위치가 뒤바뀌지 않는다. $a>0$ 조건을 빼면 증감이 뒤집힌다.'
    creative: '(1) 최댓값을 주고 최솟값을 묻는 방향으로 뒤집으면 역산 대상이 극값이 되어 ★3 유지 (2) $a$ 의 부호 조건을 빼고 「$a$ 의 값을 모두 구하시오」로 바꾸면 $a>0$·$a<0$ 두 경우가 살아나 I-MI 가 붙고 ★4 (3) 구간 오른쪽 끝을 매개변수로 두면 최소가 왼쪽 끝인지 오른쪽 끝인지 경우가 갈려 ★4 (4) 최솟값 위치를 문제에서 알려 주면 I-BW 가 사라져 ★2.'
```

```yaml
- id: GN-CALC2-192-386
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 $f(x)=x\ln x+2x+a$ 의 최솟값이 $0$ 일 때 상수 $a$ 의 값.
  category: "최소점은 $a$ 와 무관 → 극솟값을 $a$ 로 표현 → $=0$ 에서 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소를 이용한 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 $a$ 는 그래프를 위아래로 평행이동만 시키므로 $f'(x)=\ln x+3$ 의 근 $x=e^{-3}$ 은 $a$ 와 무관하게 고정된다.
    정의역 $x>0$ 에서 유일한 극소이므로 곧 최소이고, 극솟값 $-e^{-3}+a=0$ 에서 $a$ 가 바로 나온다.
    미정계수 결정이지만 「최소 위치가 상수항에 영향받지 않는다」는 관찰이 표준 절차 범위라 통찰 0. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '$f''(x)=\ln x+3=0$ → $x=e^{-3}$ 에서 최소 → 극솟값을 $a$ 로 표현 → $=0$ 으로 $a$ 역산'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{e^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/192-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$2x$ 의 계수를 $k$ 로 바꾸면 최소점이 $x=e^{-(k+1)}$ 로 옮겨가고 $a=e^{-(k+1)}$ 이 된다. 제약: $k$ 가 정수여야 답이 $e$ 의 정수 거듭제곱으로 떨어진다. 최솟값 $0$ 을 다른 상수로 바꾸면 $a$ 가 그만큼 평행이동한다.'
    creative: '(1) 최솟값 대신 「$f(x)\ge 0$ 이 항상 성립할 $a$ 의 최솟값」으로 바꾸면 부등식 해석이 붙어 I-EQV ★3 (2) $a$ 를 상수항이 아니라 $ax$ 의 계수로 두면 최소 위치가 $a$ 에 의존해 역산이 두 단계가 되어 ★3 (3) 정의역을 $[1,\,e]$ 로 제한하면 최소가 끝값이 되어 골조가 바뀐다.'
```

```yaml
- id: GN-CALC2-192-387
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 정의된 $f(x)=\dfrac{ax+b}{x^2+x+1}$ 가 $x=2$ 에서 최댓값 $1$ 을 가질 때 $ab$ 의 값.
  category: "「$x=2$ 에서 최댓값 $1$」 → $f'(2)=0$ 과 $f(2)=1$ 두 식 → $a$, $b$ 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x=2$ 에서 최댓값 $1$ 을 갖는다」를 풀이 가능한 두 등식 $f''(2)=0$(극값 조건)과 $f(2)=1$(값 조건)으로 옮김 — 최댓값이라는 진술 자체는 대입할 식이 아님'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소를 이용한 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모가 항상 양수라 정의역이 실수 전체이고, 최댓값을 갖는 점은 $f'(x)=0$ 의 근 중 하나다. 몫의 미분법으로 얻은 분자 $-ax^2-2bx+a-b$ 에 $x=2$ 를 넣은 식과 $f(2)=1$ 을 연립한다.
    미지수 두 개짜리 연립이지만 두 식을 만들어 내는 앞 단계(최댓값 진술 → 두 조건)가 이 유형의 본체라 I-EQV d2 로 잡았다.
    확인체크 ★2 출발이나 매개변수가 든 몫의 미분법 + 연립으로 M_total 7 이라 ★3 으로 한 단 올렸다.
  tier: star_3
  mechanism_primary: '몫의 미분법으로 분자 $-ax^2-2bx+a-b$ → $f''(2)=0$ 과 $f(2)=1$ 연립 → $a$, $b$ → $ab$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/192-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값이 나는 점 $x=2$ 와 최댓값 $1$ 을 바꿀 수 있다. 제약: 분모 $x^2+x+1$ 은 판별식이 음수여서 정의역이 실수 전체라는 점이 전제이고, 두 식을 연립했을 때 $a$, $b$ 가 정수로 떨어지려면 지정하는 점과 값의 조합을 골라야 한다($x=2,\,1$ → $a=5,\,b=-3$).'
    creative: '(1) $ab$ 대신 $a+b$ 나 $f(0)$ 을 묻는 겹으로 바꿔도 ★3 유지 (2) 「최댓값 $1$」을 「극값 $1$」로 바꾸면 최대·최소 판정이 빠져 ★2 (3) 분모를 $x^2+kx+1$ 로 두어 정의역이 실수 전체일 조건($|k|<2$)까지 묻게 하면 I-CON 이 붙어 ★4 (4) 최솟값 조건을 함께 주면 두 임계점을 모두 다뤄야 해서 ★4.'
```

```yaml
- id: GN-CALC2-193-e24
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    두 곡선 $y=e^{-x}$, $y=e^{x}$ 위의 두 점 $\mathrm{A}$(제1사분면), $\mathrm{B}$ 를 꼭짓점으로 하고 한 변이 $x$ 축 위에 있는 직사각형 $\mathrm{ABCD}$ 의 넓이의 최댓값.
  category: "두 곡선의 $y$ 축 대칭 → 넓이를 한 변수 함수 $S(a)=2ae^{-a}$ → 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 곡선 $y=e^{-x}$ 와 $y=e^{x}$ 가 $y$ 축에 대칭이므로, $\mathrm{A}$ 의 $x$ 좌표를 $a$ 로 두면 같은 높이의 $\mathrm{B}$ 는 $(-a,\,e^{-a})$ 로 즉시 결정되고 가로 길이가 $2a$ 로 확정됨'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '직사각형이라는 기하 조건(두 꼭짓점의 높이가 같고 나머지 한 변이 $x$ 축 위)을 한 변수 넓이 함수 $S(a)=2ae^{-a}$ 로 옮김'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "최대·최소의 활용(곡선 위의 점으로 만든 도형의 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직사각형이려면 $\mathrm{A}$, $\mathrm{B}$ 의 높이가 같아야 하고, 두 곡선이 $y$ 축 대칭이라 $\mathrm{B}$ 의 $x$ 좌표가 $-a$ 로 바로 정해진다. 여기까지가 이 문항의 본체이고 그 뒤 $S(a)=2ae^{-a}$ 를 미분하는 것은 앞선 예제와 같다.
    $S'(a)=2(1-a)e^{-a}$ 이므로 $a=1$ 에서 최대이고, 정의역이 $a>0$ 인 열린 구간이라 극대가 곧 최대임을 한 줄 확인한다.
    발전 예제 ★3 출발. 통찰 2개라 +1 후보이지만 두 통찰 모두 depth 가 낮고 미분 이후가 한 줄이라 ★3 을 유지했다. [분류 이슈] 통찰 수만 보면 ★4 후보.
  tier: star_3
  mechanism_primary: '$\mathrm{A}(a,\,e^{-a})$ → 대칭으로 $\mathrm{B}(-a,\,e^{-a})$ → $S(a)=2ae^{-a}$ → $S''(a)=0$ 에서 $a=1$ → 최댓값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{e}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-193-e24.png"
  latex: latex-bank/gn-calc2/items/193-e24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 곡선을 $y=e^{-kx}$, $y=e^{kx}$ 로 두면 $S(a)=2ae^{-ka}$ 가 되어 최대점이 $a=\dfrac{1}{k}$, 최댓값이 $\dfrac{2}{ek}$ 다. 제약: 두 곡선이 $y$ 축 대칭이어야 가로 길이가 $2a$ 로 떨어지므로 지수의 계수는 부호만 반대인 같은 크기여야 한다. 그림의 라벨 $\mathrm{A}$~$\mathrm{D}$ 와 「$\mathrm{A}$ 는 제1사분면」 조건은 고정한다.'
    creative: '(1) 넓이 대신 둘레의 최솟값을 묻으면 $4a+2e^{-a}$ 의 최소가 되어 골조 유지·★3 (2) 두 곡선을 $y=e^{-x}$ 와 $y=e^{2x}$ 처럼 비대칭으로 바꾸면 높이가 같다는 조건에서 $\mathrm{B}$ 의 좌표를 로그로 풀어야 해 I-SYM 이 사라지고 대신 계산이 늘어 ★4 (3) 직사각형 대신 $x$ 축 위에 밑변이 있는 이등변삼각형으로 바꾸면 같은 대칭 골조 ★3 (4) 대칭을 문제 그림에서 명시해 주면 ★2 로 내려간다.'
```

```yaml
- id: GN-CALC2-193-388
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    길이 $8$ 인 선분 $\mathrm{AB}$ 를 지름으로 하는 반원에 내접하는 등변사다리꼴 $\mathrm{ABCD}$ 의 넓이의 최댓값($\mathrm{O}$ 는 반원의 중심).
  category: "반지름 $4$ 로 윗변·높이를 한 변수로 → 넓이 함수 → 미분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「반원에 내접하는 등변사다리꼴」이라는 기하 조건을 한 변수(중심각 $\theta$ 또는 윗변의 반 $x$)의 넓이 함수 $S=16\sin\theta(1+\cos\theta)$ 로 옮김 — 반지름이 $4$ 로 고정이라 윗변과 높이가 한 변수로 묶임'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소의 활용(반원에 내접하는 도형의 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{C}$, $\mathrm{D}$ 가 반원 위에 있고 사다리꼴이 등변이므로 $\mathrm{O}$ 를 원점으로 두면 두 점이 $y$ 축 대칭으로 놓이고, 윗변과 높이가 한 변수로 묶인다.
    사다리꼴 넓이 공식에 넣으면 $S=16\sin\theta(1+\cos\theta)$ 이고 미분하면 $\cos\theta=\dfrac{1}{2}$ 에서 최대다. 좌표 변수 $x$ 로 두고 $S=(x+4)\sqrt{16-x^2}$ 를 미분해도 같다.
    도형 → 한 변수 함수 전환 I-RT d2 하나. 발전 예제의 유제이고 활용 골조라 확인체크 ★2 출발에서 ★3 으로 올렸다.
  tier: star_3
  mechanism_primary: '중심 $\mathrm{O}$ 기준으로 윗변·높이를 한 변수로 → $S=16\sin\theta(1+\cos\theta)$ → 미분 → $\theta=\dfrac{\pi}{3}$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-193-388.png"
  latex: latex-bank/gn-calc2/items/193-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지름 $8$ 을 $2r$ 로 일반화하면 최댓값이 $\dfrac{3\sqrt{3}}{4}r^2$ 이다. 제약: 최대가 나는 각은 $\dfrac{\pi}{3}$ 로 지름과 무관하므로 답이 무리수 $\sqrt{3}$ 을 포함하고, 정수로 떨어지게 하려면 지름을 $4$ 의 배수로 둔다. 그림의 점 이름 $\mathrm{A}$·$\mathrm{B}$·$\mathrm{C}$·$\mathrm{D}$·$\mathrm{O}$ 는 고정한다.'
    creative: '(1) 넓이 대신 둘레의 최댓값을 묻으면 $8+8\cos\theta+2\cdot(\text{빗변})$ 이 되어 같은 골조 ★3 (2) 반원을 부채꼴이나 반타원으로 바꾸면 제약식이 달라져 계산이 늘고 ★4 (3) 등변사다리꼴 대신 내접 삼각형으로 바꾸면 변수 하나가 줄어 ★2 (4) 각 변수 $\theta$ 와 좌표 변수 $x$ 중 어느 쪽이 빠른지 비교하게 하면 I-SC 가 추가되어 ★4.'
```

```yaml
- id: GN-CALC2-193-389
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    반지름의 길이가 $2$ 인 구에 내접하는 원기둥의 부피가 최대가 되도록 하는 밑면의 반지름의 길이.
  category: "구·원기둥의 축 단면에서 피타고라스 제약 → 부피를 한 변수 함수 → 미분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '입체 조건 「구에 내접」을 축을 포함한 단면으로 옮겨 $r^2+\left(\dfrac{h}{2}\right)^2=4$ 라는 한 개의 제약식으로 바꾸고, 부피를 $V(r)=2\pi r^2\sqrt{4-r^2}$ 한 변수 함수로 만듦'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소의 활용(구에 내접하는 입체의 부피)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구의 중심이 원기둥의 높이를 이등분한다는 점에서 $r^2+\dfrac{h^2}{4}=4$ 가 나오고, 이 한 식으로 $h$ 를 소거해 $V$ 를 $r$ 만의 함수로 만든다.
    미분하면 $r=\dfrac{2\sqrt{6}}{3}$ 에서 최대이고, 정의역은 $0<r<2$ 이다. 무리함수 미분이 번거로우면 $V^2$ 를 최대화하는 갈래도 같은 답을 준다.
    입체 → 단면 → 한 변수 함수 전환 I-RT d2 하나. 활용 골조라 확인체크 ★2 출발에서 ★3.
  tier: star_3
  mechanism_primary: '축 단면에서 $r^2+\dfrac{h^2}{4}=4$ → $V(r)=2\pi r^2\sqrt{4-r^2}$ → 미분 → $r=\dfrac{2\sqrt{6}}{3}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-193-389.png"
  latex: latex-bank/gn-calc2/items/193-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구의 반지름 $2$ 를 $R$ 로 일반화하면 답이 $\dfrac{\sqrt{6}}{3}R$ 이다. 제약: 최대 지점의 $r:R$ 비가 고정이므로 답이 항상 $\sqrt{6}$ 을 포함한다. 정수 반지름이면 답은 무리수로 남고, 부피의 최댓값을 묻는 변형에서는 $R$ 의 세제곱 계수가 $\dfrac{16\sqrt{3}}{27}\pi$ 로 커진다.'
    creative: '(1) 밑면 반지름 대신 원기둥의 높이나 부피의 최댓값을 묻는 겹은 ★3 유지 (2) 원기둥을 원뿔로 바꾸면 제약식은 같고 목적함수만 달라져 같은 골조의 새 문항 (3) 겉넓이가 최대가 되는 경우로 바꾸면 무리함수 미분이 더 무거워져 ★4 (4) $V$ 대신 $V^2$ 를 최대화하는 갈래를 함께 제시하게 하면 I-SC 가 붙어 ★4 (5) 단면 그림을 문제에서 주면 I-RT 가 약해져 ★2.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-194-390
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x>0$ 에서 함수 $f(x)=\dfrac{e^{x+1}}{x}$ 의 최솟값.
  category: "몫의 미분법 → 유일한 극소 → 곧 최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수를 분자로 갖는 유리식의 최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $f'(x)=\dfrac{e^{x+1}(x-1)}{x^2}$ 이고 지수·분모가 모두 양수라 부호가 $x-1$ 만으로 결정된다. $x=1$ 에서 극소이자 최소.
    정의역 $x>0$ 에 다른 임계점이 없어 극소=최소 판정이 한 줄이고 대입도 한 번이다.
    통찰 0 · M_total 4 → v3.8 「절차형·저 노동 −1」로 STEP 1 출발점 ★2 에서 ★1. [분류 이슈] 구역 신호만 보면 ★2.
  tier: star_1
  mechanism_primary: '몫의 미분법 → $f''(x)=0$ 에서 $x=1$ → 부호가 양음으로 바뀌므로 최소 → $f(1)=e^2$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\dfrac{e^{x+k}}{x}$ 의 $k$ 를 바꾸면 최솟값만 $e^{k+1}$ 로 바뀌고 최소점은 $x=1$ 로 고정이다. 분모를 $x^n$ 으로 바꾸면 최소점이 $x=n$ 으로 옮겨간다. 제약: 답이 $e$ 의 정수 거듭제곱으로 떨어지도록 $k$·$n$ 을 정수로 둔다.'
    creative: '(1) 정의역을 $x<0$ 으로 바꾸면 극값이 없어 최솟값이 존재하지 않음을 보이는 문항이 되어 ★3 (2) $\dfrac{e^{x+1}}{x}\ge k$ 가 항상 성립할 $k$ 의 최댓값으로 바꾸면 같은 계산에 해석 한 겹이 붙어 ★2 (3) 구간 $[1,\,3]$ 처럼 닫힌구간을 주면 끝값 비교가 추가되어 ★2.'
```

```yaml
- id: GN-CALC2-194-391
  page: 194
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구간 $\left[-\dfrac{\pi}{2},\,\dfrac{\pi}{2}\right]$ 에서 $f(x)=a(x-\sin 2x)$ 의 최솟값이 $-\pi$ 일 때 양수 $a$ 의 값.
  category: "최솟값이 극소가 아니라 왼쪽 끝값 → 그 값으로 $a$ 역산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '최솟값 $-\pi$ 에서 $a$ 를 역산하려면 최솟값이 극소점 $x=\dfrac{\pi}{6}$ 이 아니라 왼쪽 끝 $x=-\dfrac{\pi}{2}$ 에서 난다는 것을 먼저 확정해야 함 — 극솟값으로 세우면 틀린 $a$ 가 나옴'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소를 이용한 미정계수의 결정(삼각함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=a(1-2\cos 2x)$ 이고 $a>0$ 이라 증감은 $a$ 와 무관하게 정해진다. 임계점은 $x=\pm\dfrac{\pi}{6}$ 이고 그 사이에서 감소한다.
    극솟값 $a\left(\dfrac{\pi}{6}-\dfrac{\sqrt{3}}{2}\right)$ 보다 왼쪽 끝값 $-\dfrac{a\pi}{2}$ 가 더 작으므로 최소는 끝값이고, 여기서 $a$ 가 나온다. 이 크기 비교를 건너뛰면 답이 틀린다.
    끝값 판정이 본체인 I-BW d2 하나. STEP 1 출발 ★2 에서 한 단 올려 ★3. [분류 이슈] 구역 신호만 보면 ★2.
  tier: star_3
  mechanism_primary: '$f''(x)=a(1-2\cos 2x)$ → 임계점 $\pm\dfrac{\pi}{6}$ → 극솟값과 왼쪽 끝값 크기 비교 → 최소는 끝값 $-\dfrac{a\pi}{2}=-\pi$ → $a=2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최솟값 $-\pi$ 를 다른 값으로 바꾸면 $a$ 만 비례해 바뀐다. 제약: $\cos 2x=\dfrac{1}{2}$ 가 특수각이어야 하므로 $\sin 2x$ 의 계수와 $x$ 의 계수 비를 유지해야 하고, 「끝값이 극솟값보다 작다」는 크기 비교($\dfrac{\pi}{2}>\dfrac{\sqrt{3}}{2}-\dfrac{\pi}{6}$)가 뒤집히지 않도록 구간 끝을 정해야 함정이 살아 있다. $a>0$ 조건은 고정.'
    creative: '(1) 구간을 $\left[-\dfrac{\pi}{6},\,\dfrac{\pi}{2}\right]$ 로 좁히면 극솟값이 곧 최소가 되어 함정이 사라지고 ★2 (2) 최댓값 조건으로 바꾸면 오른쪽 끝값과 극댓값 비교가 되어 대칭적인 같은 골조 (3) $a$ 의 부호 조건을 빼면 두 경우로 갈려 I-MI 가 붙고 ★4 (4) 최솟값이 나는 $x$ 를 문제에서 알려 주면 I-BW 가 사라져 ★2.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-194-392
  page: 194
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    구간 $[0,\,a]$ 에서 $f(x)=\dfrac{x+2}{x^2+5}$ 의 최댓값이 $\dfrac{1}{2}$, 최솟값이 $\dfrac{2}{5}$ 일 때 양수 $a$ 의 값의 범위.
  category: "최대 조건 → $a$ 의 하한 · 최소 조건 → $a$ 의 상한 → 범위 결합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '최댓값 $\dfrac{1}{2}$ 은 극대점 $x=1$ 에서만 나오므로 「구간이 $x=1$ 을 포함해야 한다」 즉 $a\ge 1$ 을 결과에서 역추적함'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '최솟값 후보가 왼쪽 끝 $f(0)=\dfrac{2}{5}$ 와 오른쪽 끝 $f(a)$ 둘이어서 어느 쪽이 작은지 따져야 하고, $f(a)\ge\dfrac{2}{5}$ 에서 $a$ 의 상한 $\dfrac{5}{2}$ 가 나옴'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "최댓값·최솟값이 주어질 때 구간의 끝값 범위 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f'(x)$ 의 분자가 $-(x+5)(x-1)$ 이라 $x=1$ 에서 극대이고 $f(1)=\dfrac{1}{2}$, $f(0)=\dfrac{2}{5}$ 다.
    답이 값이 아니라 범위라는 점이 핵심으로, 최댓값 조건은 하한을, 최솟값 조건은 상한을 준다. 특히 최솟값은 구간 오른쪽 끝에서 날 수도 있으므로 $f(a)\ge f(0)$ 를 풀어야 하고 여기서 $2a^2-5a\le 0$ 이 나온다.
    역추적 I-BW d2 + 최소 위치 다중 해석 I-MI d2 로 통찰 2개, M_total 9. STEP 2 ★3 출발에서 +1 → ★4(§2.13 저노출 유형 I-BW 포함).
  tier: star_4
  mechanism_primary: '$f''(x)=0$ 에서 극대 $x=1$ → 최댓값 조건으로 $a\ge 1$ → 최솟값 조건 $f(a)\ge f(0)$ 으로 $a\le\dfrac{5}{2}$ → 두 범위 결합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1\le a\le\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자 $x+2$ 의 상수항과 분모 $x^2+5$ 의 상수항을 바꿀 수 있다. 제약: 도함수 분자 $-(x^2+4x-5)$ 가 유리수 근을 갖도록 두 상수를 맞춰야 하고, $f(a)=f(0)$ 이 유리수 해를 주어야 상한이 깔끔하다. 구간 왼쪽 끝을 $0$ 으로 고정해야 $f(0)$ 이 최솟값 후보로 단순하게 남는다.'
    creative: '(1) 구간을 $[-a,\,a]$ 로 바꾸면 왼쪽 끝도 움직여 두 끝값 비교가 두 배로 늘고 ★4~5 (2) 최솟값 조건만 주고 $a$ 의 최댓값을 묻게 하면 I-BW 만 남아 ★3 (3) 최댓값을 $\dfrac{1}{2}$ 이 아닌 다른 값으로 주면 극대점이 구간 밖이어야 하므로 조건 방향이 뒤집혀 새 골조 (4) 「최댓값과 최솟값의 차가 $\dfrac{1}{10}$」처럼 묶어 주면 경우가 늘어 ★5 후보.'
```

```yaml
- id: GN-CALC2-194-393
  page: 194
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    함수 $f(x)=\cos^3x+3\sin^2x+1$ 의 최댓값 $M$, 최솟값 $m$ 에 대하여 $M+m$ 의 값.
  category: '$\sin^2x=1-\cos^2x$ → $t=\cos x$ 삼차함수 → $-1\le t\le 1$ 에서 최대·최소'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sin^2x=1-\cos^2x$ 로 단일 변수화한 뒤 $t=\cos x$ 로 옮겨 삼각함수 문제를 닫힌구간 $[-1,\,1]$ 에서의 삼차함수 $t^3-3t^2+4$ 최대·최소로 바꿈'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 최댓값과 최솟값(치환으로 다항함수화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\cos$ 과 $\sin$ 이 섞여 있어 그대로는 증감 판정이 번거롭지만, $\sin^2x$ 를 $\cos$ 으로 바꾸면 $t=\cos x$ 하나로 정리된다. 이때 $t$ 의 범위가 $[-1,\,1]$ 이라는 제한을 반드시 달고 가야 한다(T-범위).
    $g(t)=t^3-3t^2+4$ 의 임계점은 $t=0,\,2$ 인데 $t=2$ 는 범위 밖이라 버리고 $t=0$ 과 양 끝값만 비교한다 — 범위 밖 임계점 제거가 두 번째 함정이다.
    직접 미분해 $f'(x)=3\sin x\cos x(2-\cos x)$ 로 푸는 갈래도 있으나 치환이 짧다. 통찰 I-RT d2 하나, STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '$\sin^2x=1-\cos^2x$ → $t=\cos x$ ($-1\le t\le 1$) → $g(t)=t^3-3t^2+4$ 의 구간 최대·최소 → $M+m$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\sin^2x$ 의 계수 $3$ 과 상수항 $1$ 을 바꿀 수 있다. 제약: 치환 후 삼차함수의 도함수 $3t^2-2kt$ 의 근 중 하나가 $[-1,\,1]$ 밖으로 나가야 「범위 밖 임계점 버리기」 함정이 살아 있고, $M$ 과 $m$ 이 모두 정수로 떨어지려면 상수항을 정수로 둔다.'
    creative: '(1) $\cos^3x$ 를 $\cos^2x$ 로 바꾸면 이차함수가 되어 미분 없이 풀려 ★2 (2) $M-m$ 이나 $Mm$ 을 묻는 겹으로 바꿔도 ★3 유지 (3) 정의역을 $\left[0,\,\dfrac{\pi}{2}\right]$ 로 제한하면 $t$ 의 범위가 $[0,\,1]$ 로 잘려 한 단계 더 붙고 ★4 (4) 치환 범위를 문제에서 알려 주면 I-RT 가 약해져 ★2.'
```

```yaml
- id: GN-CALC2-194-394
  page: 194
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=a^x$ ($a>1$) 위의 점 $\mathrm{A}(t,\,a^t)$ 에서의 접선 $l$ 에 수직이고 $\mathrm{A}$ 를 지나는 직선이 $x$ 축·$y$ 축과 만나는 점을 각각 $\mathrm{B}$, $\mathrm{C}$ 라 할 때, $\dfrac{\overline{\mathrm{AC}}}{\overline{\mathrm{AB}}}$ 가 $t=1$ 에서 최대일 조건으로 $a$ 를 구한다. 5지선다.
  category: "법선 위 세 점의 길이 비 → $x$ 좌표 비로 환원 → $t$ 의 함수 최대 조건으로 $a$ 역산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ 가 한 직선 위에 있으므로 선분 길이의 비를 거리 공식 없이 $x$ 좌표 차의 비 $\dfrac{|t-0|}{|t-x_{\mathrm{B}}|}$ 로 환원 — 기하 조건을 좌표 한 줄로 옮김'
    - step: 4
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$t=1$ 에서 최대」라는 결과 조건을 $t$ 의 함수의 도함수가 $t=1$ 에서 $0$ 이 된다는 식으로 옮겨 밑 $a$ 를 역산함'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선·법선과 선분의 길이 비의 최대(최대·최소의 활용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선의 기울기 $a^t\ln a$ 에서 법선의 기울기를 얻고 $\mathrm{B}$ 의 $x$ 좌표를 구한다. 세 점이 한 직선 위이므로 길이 비가 $x$ 좌표 차의 비로 줄어드는 것이 계산량을 크게 줄이는 지점이다.
    그 결과 비는 $\dfrac{t}{a^{2t}\ln a}$ 꼴이 되고, 이 $t$ 의 함수가 $t=1$ 에서 최대라는 조건에서 $a$ 가 나온다. 미지의 밑 $a$ 와 매개변수 $t$ 가 동시에 있어 추상도가 높다.
    I-RT d2 + I-BW d2 로 통찰 2개, M_total 9. STEP 2 ★3 출발 + 평가원 기출(+0~1) + 통찰 2개 → ★4(§2.13 저노출 유형 포함).
  tier: star_4
  mechanism_primary: '접선 기울기 $a^t\ln a$ → 법선 식 → $\mathrm{B}$, $\mathrm{C}$ 의 좌표 → 길이 비를 $x$ 좌표 비로 환원 → $t$ 의 함수 최대 조건 $t=1$ → $a=\sqrt{e}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최대가 나는 지점 $t=1$ 을 $t=2$ 등으로 바꾸면 $\ln a=\dfrac{1}{2t_0}$ 이므로 $a=e^{1/(2t_0)}$ 가 되어 선택지가 $\sqrt[4]{e}$ 꼴로 바뀐다. 제약: $a>1$ 과 $t>0$ 을 유지해야 $\ln a>0$ 이라 비가 양수로 정리되고, 선택지 다섯 개가 서로 구분되는 값이어야 한다.'
    creative: '(1) 곡선을 $y=\log_a x$ 로 바꾸면 접선·법선 골조는 같고 좌표만 뒤바뀌어 ★4 유지 (2) $\dfrac{\overline{\mathrm{AC}}}{\overline{\mathrm{AB}}}$ 대신 삼각형 $\mathrm{OBC}$ 의 넓이의 최소를 묻게 하면 목적함수가 바뀌어 계산이 늘고 ★4~5 (3) 길이 비가 $x$ 좌표 비로 줄어든다는 것을 문제에서 알려 주면 I-RT 가 사라져 ★3 (4) 「$t=1$ 에서 최대」 대신 「최댓값이 $\dfrac{1}{2}$」로 주면 역산이 두 식 연립이 되어 ★5 후보.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-194-395
  page: 194
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    양수 $t$ 에 대하여 $f(x)=2x^2-t\ln x$ 의 최솟값을 $g(t)$ 라 할 때, 함수 $g(t)$ 의 최댓값.
  category: "내부 최솟값을 $t$ 의 함수 $g(t)$ 로 표현 → 다시 $g$ 를 최대화(이중 최적화)"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 에 대한 최솟값이라는 「값」을 매개변수 $t$ 의 「함수」 $g(t)$ 로 옮겨 보는 이중 최적화 구조를 인식해야 두 번째 미분이 가능해짐'
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '극소점 $x=\dfrac{\sqrt{t}}{2}$ 를 대입해 얻은 $-t\ln\dfrac{\sqrt{t}}{2}$ 를 로그의 성질로 $-\dfrac{t}{2}\ln t+t\ln 2$ 로 분해해야 $g(t)$ 를 $t$ 로 미분할 수 있는 형태가 됨'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수가 든 함수의 최솟값 $g(t)$ 의 최댓값(이중 최적화)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f'(x)=\dfrac{4x^2-t}{x}$ 이고 정의역 $x>0$ 에서 $x=\dfrac{\sqrt{t}}{2}$ 하나가 극소이자 최소다. 여기까지는 앞 문항들과 같은 골조다.
    본체는 그 최솟값을 $t$ 의 함수로 적고 다시 미분하는 두 번째 층이고, 그러려면 로그를 분해해 $t\ln t$ 항을 드러내야 한다. $g'(t)=\ln 2-\dfrac{1}{2}\ln t$ 에서 $t=4$ 가 나온다.
    I-RT d2 + I-EQV d2 로 통찰 2개, M_total 9(로그 처리로 $M_k$ 3). 실력 UP 출발점 ★4 를 그대로 둔다 — ★5 요건(통찰 3개 이상 + SC/VF/SYM/XU)은 충족하지 않는다.
  tier: star_4
  mechanism_primary: '$f''(x)=0$ → $x=\dfrac{\sqrt{t}}{2}$ 에서 최소 → $g(t)$ 를 로그 분해로 정리 → $g''(t)=0$ 에서 $t=4$ → 최댓값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/194-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$2x^2$ 의 계수를 $k$ 로 바꾸면 극소점이 $x=\sqrt{\dfrac{t}{2k}}$ 로 바뀌고 $g(t)$ 의 로그 항 계수만 달라진다. 제약: $g''(t)=0$ 의 해 $t$ 가 정수로 떨어지고 $g$ 의 최댓값이 정수가 되도록 계수를 고르면 $2$ 가 가장 깔끔하다. $t>0$ 과 $x>0$ 조건을 빼면 극소 판정이 무너진다.'
    creative: '(1) $g(t)$ 의 최댓값 대신 $g(t)=0$ 인 $t$ 를 묻게 하면 두 번째 미분이 빠져 ★3 (2) $f(x)=2x^2-t\ln x$ 를 $f(x)=tx^2-\ln x$ 로 뒤집으면 같은 이중 최적화이나 $g$ 가 단조가 되어 최댓값이 사라진다 — 확인 필요한 변형 (3) $g(t)$ 의 그래프 개형·증가 구간을 묻게 하면 같은 골조 ★4 (4) 최솟값이 존재할 $t$ 의 범위까지 함께 묻게 하면 조건 검증이 붙어 I-VF 가 추가되고 ★5 후보.'
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 2 · ★2 8 · ★3 7 · ★4 3 · ★5 0
- 통찰형 11 · 절차형 9 · premium 0
- 통찰 유형 분포: I-RT 6 · I-BW 4 · I-EQV 3 · I-MI 1 · I-SYM 1 (연 15개 라벨 · 블록당 최대 2개)
- type_hint 상위: 「최대·최소를 이용한 미정계수의 결정」 4(`192-e23` · `192-386` · `192-387` · `194-391`) · 「최대·최소의 활용(도형·입체·접선)」 4(`193-e24` · `193-388` · `193-389` · `194-394`) · 「삼각함수의 닫힌구간 최대·최소」 3(`191-e22` · `191-384` · `194-393`) · 「유리·무리함수의 닫힌구간 최대·최소」 2(`189-e20` · `189-381`) · 「지수·로그함수의 닫힌구간 최대·최소」 2(`190-e21` · `190-382`)
- 그림: 3문(`crop:fig-193-e24.png` · `crop:fig-193-388.png` · `crop:fig-193-389.png`) — 모두 활용 문항이며 발문에 도형 구성이 글로 적혀 있어 좌표 설정에 필요한 정보는 발문만으로 결정된다
- 대상층: 하위권 2 · 중하위권 8 · 중위권 6 · 중상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-190-383 | 확인체크(예제 유제 → ★2 출발)이나 M_total 5·통찰 0 이라 v3.8 「절차형·저 노동 −1」로 ★1. 유제를 예제와 같은 층으로 두는 관례를 쓰면 ★2 | ★1 / ★2 |
| GN-CALC2-194-390 | STEP 1 구역(★2 출발)이나 단계 3·계산 한 줄로 M_total 4 → −1 규칙으로 ★1 | ★1 / ★2 |
| GN-CALC2-194-391 | STEP 1 구역인데 「최솟값이 극소가 아니라 끝값」 판정이 본체라 ★3 으로 올림. 구역 신호만 보면 ★2 | ★2 / ★3 |
| GN-CALC2-191-385 | 도함수가 $-2e^{-x}\sin x$ 로 접히는 것을 계산 정리로 보아 통찰 0·★2 로 두었으나, I-EQV 로 세면 ★3 | ★2 / ★3 |
| GN-CALC2-193-e24 | 발전 예제(★3 출발)에 통찰 2개(I-SYM·I-RT)라 +1 후보이지만 두 depth 가 낮고 미분 이후가 한 줄이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고): 이 단원은 「닫힌구간에서 극값과 끝값을 비교한다」는 단일 골조 위에 함수족만 갈아 끼운 구조라, **함수족별로 유형을 따로 세우면 카탈로그가 불필요하게 불어난다.** (1) 「유리·무리」 「지수·로그」 「삼각」 세 닫힌구간 최대·최소는 도구가 같고 미분 공식만 다르므로 **한 유형(닫힌구간 최대·최소)으로 통합**하고 함수족을 속성으로 두는 편이 낫다(`189-e20`·`189-381`·`190-e21`·`190-382`·`191-e22`·`191-384` 6문이 여기 묶인다). (2) 반면 「최대·최소를 이용한 미정계수의 결정」은 **최솟값이 극값에서 나는 경우(`192-386`·`192-387`)와 구간 끝값에서 나는 경우(`192-e23`·`194-391`)를 하위 유형으로 갈라야** 한다 — 뒤쪽이 I-BW d2 를 요구하고 오답 경로가 완전히 달라서 base ★ 가 2 와 3 으로 갈린다. (3) 「최대·최소의 활용」은 평면 도형(`193-e24`·`193-388`)과 입체(`193-389`)의 제약식 세우는 방식이 달라 따로 세우고, 접선·법선이 끼는 `194-394` 는 「도형의 활용」이 아니라 **접선 단원과의 교차 유형**으로 두는 것이 정확하다. (4) 「최솟값을 매개변수의 함수로 다시 최대화」(`194-395`)와 「최대·최솟값이 주어질 때 구간 끝값의 범위」(`194-392`)는 이 범위에서 각각 1문뿐이지만 골조가 독립적이고 ★4 변별 슬롯 자격이 있으므로 **별도 유형으로 등재**할 값어치가 있다.
