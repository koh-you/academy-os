---
name: mechanism-데이터-GN-CALC2-24
description: 개념원리 미적분Ⅱ 24 방정식과 부등식에의 활용(1/1 · 196~199쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 24 방정식과 부등식에의 활용
  unit_code: CALC2-24
  part: "1/1"
  extract_range: "196~199쪽 · 196-e25~199-404"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 24 방정식과 부등식에의 활용 (1/1) 정독 데이터 (v1.0)

이 파일은 196~199쪽 「필수·발전 예제」 구역 13문항 전수를 다룬다. 구역은 하나이고, 안쪽은 필수 예제 4개(`196-e25` 방정식의 실근의 개수 · `197-e26` 방정식이 실근을 가질 조건 · `198-e27` 부등식의 증명 · `199-e28` 부등식에의 활용)와 각 예제에 딸린 확인체크 9개가 번갈아 배치된 구조다. 벤더 난이도 신호는 구역과 태그뿐이고(level 필드 없음 · 기출 태그 없음), 이 범위에는 그림 문항이 없다. 도함수의 활용 마지막 단원이라 앞 단원들과 달리 계산 숙달형이 거의 없고, 대부분이 「개수·성립 조건을 만족하도록 하는 매개변수」를 역추적하는 구조다.

★ 출발점은 태그로 잡았다. 필수 예제는 ★2, 확인체크는 원 규칙의 ★1(개념 확인)이 아니라 **바로 앞 필수 예제의 유제**라는 배치 사실을 근거로 ★2 에서 출발시킨 뒤 M_total·통찰로 조정했다(이 은행의 앞 파일들과 같은 관례). 통찰 판정은 단원 안에서 일관되게 다음 기준을 썼다. (1) 「이항해서 $f(x)=0$ 또는 $h=(좌변)-(우변)$ 으로 모으고 증감표를 그린다」는 이 단원이 가르치는 **표준 절차**라 통찰로 세지 않는다. (2) 「매개변수를 분리해 $k=g(x)$ 꼴로 만들고 수평선과의 교점·치역 비교로 바꾼다」는 학생이 직접 골라야 하는 동치 변환이라 I-EQV 로 센다. (3) 「결과 조건에서 매개변수를 역추적」하는 구조는 이 단원 거의 모든 문항의 공통 배경이므로 단독으로는 세지 않고, **접하는 경우·치역 상한 같은 경계를 학생이 직접 세워야 할 때만** I-BW 로 센다. (4) 정의역이 갈라져 경우를 전수로 따져야 하면 I-MI, 구한 후보를 범위 제약으로 되짚어 일부 기각해야 하면 I-VF 를 쓴다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-196-e25
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 방정식의 서로 다른 실근의 개수를 구한다: $e^x-2x-3=0$ · $x=\cos x$.
  category: "이항해 f(x)=0 → 증감표·극값 부호 → x축 교점 수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(f(x)=0 으로 이항 → 증감표·극값 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $f'=e^x-2$ 의 유일한 극소 $f(\ln 2)$ 가 음수이고 양 끝 극한이 $+\infty$ 라 교점 2개.
    ⑵는 $f=x-\cos x$ 로 모으면 $f'=1+\sin x\ge 0$ 이라 단조증가 + 부호 변화로 1개이고, 등호가 고립점에서만 성립해 증가가 깨지지 않는다는 점이 T-경계 함정이다.
    두 소문항 모두 이 단원이 가르치는 표준 절차를 그대로 쓰므로 통찰 0. 필수 예제 출발점 ★2 를 M_total 6 으로 유지했다.
  tier: star_2
  mechanism_primary: '이항해 $f(x)=0$ → $f''$ 부호로 증감·극값 → 극값의 부호와 양 끝 극한으로 $x$축 교점 수를 읽는다'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/196-e25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 일차항 계수와 상수항($e^x-2x-3$ → $e^x-3x-1$ · $e^x-4x+1$)을 바꿀 수 있다. 제약: $f''(x)=0$ 의 해가 $\ln(계수)$ 로 깔끔히 떨어지고 극솟값의 부호가 한눈에 판정되어야 하며, 극솟값이 0 이 되면 답이 2 에서 1 로 바뀐다. ⑵는 $x=k\cos x$ 로 두되 $|k|\le 1$ 이면 여전히 1개.'
    creative: '(1) ⑴의 상수항을 극솟값이 정확히 0 이 되게 잡아 「접하는 경우」 1개로 만들기(★2 유지) (2) $e^x=2x+a$ 로 바꿔 실근 개수가 2 가 되는 $a$ 범위를 묻기 → 역추적 I-BW 가 붙어 ★3 (3) ⑵를 $x=\cos 2x$ 로 바꾸면 $f''=1+2\sin 2x$ 의 부호가 갈려 구간별 경우 분류가 생기고 ★3.'
```

```yaml
- id: GN-CALC2-196-396
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 두 방정식의 서로 다른 실근의 개수를 구한다: $x=\ln x$ · $xe^{-x}=0$.
  category: "최솟값 부호로 교점 0 판정 · 지수 인수는 0 이 아님"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(최솟값의 부호 판정 · 지수 인수의 비영성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $f=x-\ln x$ 의 최솟값 $f(1)=1>0$ 이라 $x$축과 만나지 않아 0개 — 「최솟값이 양수면 실근 0」이라는 이 단원의 핵심 판정을 그대로 요구한다.
    ⑵는 $e^{-x}\ne 0$ 이므로 미분 없이 $x=0$ 하나로 끝나는 함정형 소문항이다.
    통찰 0·M_total 5 로 −1 후보이지만 ⑴이 예제와 같은 판정 골조를 그대로 쓰는 유제라 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '⑴ $f=x-\ln x$ 의 최솟값 $f(1)$ 의 부호 → 교점 0 · ⑵ $e^{-x}>0$ 이므로 $x=0$ 하나'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0$ ⑵ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/196-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴을 $x=k\ln x$ 로 두면 $k$ 에 따라 0·1·2 개로 갈린다($k=e$ 에서 접함). 제약: 정의역 $x>0$ 과 최솟값의 부호가 답을 결정하므로 $k$ 를 바꿀 때 $e$ 와의 대소를 명시. ⑵는 $x^2e^{-x}=0$ · $(x-1)e^{x}=0$ 처럼 인수만 갈아끼운다(답은 계속 1).'
    creative: '(1) ⑵를 $xe^{-x}=c$ 로 바꿔 $c$ 에 따른 개수 분류로 올리면 I-EQV+I-MI ★4 (2) ⑴을 「$x=\ln x$ 의 실근이 없음을 보이시오」 증명형으로 바꾸면 부등식 증명과 같은 골조 ★2 (3) 두 소문항을 묶어 「$x-\ln x=k$ 의 실근이 2개일 $k$」로 만들면 ★3.'
```

```yaml
- id: GN-CALC2-196-397
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 $k$ 의 값의 범위에 따라 방정식 $\sqrt{x+1}-x+k=0$ 의 서로 다른 실근의 개수를 구한다.
  category: "무리함수 곡선과 기울기 1 직선의 평행이동 → k 구간별 교점 수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sqrt{x+1}=x-k$ 로 옮겨 곡선 $y=\sqrt{x+1}$ 과 기울기 1 인 직선의 평행이동 교점 문제로 바꾼다(한 함수의 증감표로는 개수 분류가 끝나지 않는다)'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '접하는 $k=-\dfrac54$ 와 끝점 $(-1,0)$ 을 지나는 $k=-1$ 을 경계로 $k$ 구간을 전수 분류해 0·1·2 개를 모두 따진다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수 범위에 따른 실근 개수 분류(무리함수 곡선 · 기울기 고정 직선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정의역 $x\ge -1$ 위에서 곡선과 직선을 비교해야 하고, 접점 조건($\frac{1}{2\sqrt{x+1}}=1$)과 곡선의 끝점을 지나는 조건이 서로 다른 두 경계를 만든다.
    경계가 둘이라 $k$ 축이 네 구간으로 쪼개지고 각 구간에서 교점 수가 2·1·1·0 으로 달라 전수 분류가 필수다. 표현 전환(RT d2) + 케이스 전수(MI d2), M_total 9.
    [분류 이슈] 벤더 태그는 확인체크(유제 출발 ★2)인데 판정은 ★4 로 2단 이상 어긋난다. 라벨은 억지로 맞추지 않고 ★4 로 두고 기록만 한다.
  tier: star_4
  mechanism_primary: '$\sqrt{x+1}=x-k$ → 곡선과 기울기 1 직선의 교점 → 접점 $k=-\dfrac54$ · 끝점 $k=-1$ 을 경계로 네 구간 분류'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '(i) $-\dfrac{5}{4}<k\le -1$이면 $2$ (ii) $k=-\dfrac{5}{4}$ 또는 $k>-1$이면 $1$ (iii) $k<-\dfrac{5}{4}$이면 $0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/196-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안의 평행이동($\sqrt{x+1}$ → $\sqrt{x-2}$)과 직선의 기울기($x$ → $2x$ · $\frac12 x$)를 바꿀 수 있다. 제약: 접점 조건이 유리수 $k$ 로 떨어지도록 기울기를 잡아야 하고, 끝점을 지나는 $k$ 와 접하는 $k$ 의 대소가 뒤집히면 구간 개수 자체가 달라지므로 두 경계를 다시 계산해야 한다.'
    creative: '(1) 곡선을 $y=\sqrt{1-x^2}$(반원)으로 바꾸면 경계가 접선·양 끝점 두 개로 늘어 구간이 다섯이 되고 ★5 후보 (2) 「실근이 2개이도록 하는 $k$ 의 범위」만 물으면 전수 분류가 빠져 I-MI 소멸 ★3 (3) 직선을 $y=k(x+1)$ 처럼 정점을 지나는 회전 직선으로 바꾸면 기울기 매개변수 + 접선 조건으로 골조는 유지된 채 ★4.'
```

```yaml
- id: GN-CALC2-197-e26
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    방정식 $kx^2e^{-x}=1$ 이 한 개의 실근을 갖도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: "매개변수 분리 → 두 구간의 교점 수 합이 1 이 되는 k"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x=0$ 이 해가 아님을 확인한 뒤 $k=\dfrac{e^x}{x^2}$ 로 분리해 수평선 $y=k$ 와 곡선의 교점 개수 문제로 바꾼다'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정의역이 $x<0$ 과 $x>0$ 으로 끊겨 있어 각 구간의 교점 수(전자는 항상 1개, 후자는 0·1·2)를 따로 센 뒤 합이 1 이 되는 $k$ 만 남긴다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "방정식이 주어진 개수의 실근을 가질 조건(매개변수 분리 후 수평선 교점)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $g=e^x/x^2$ 는 $x=0$ 에서 끊기고, $x<0$ 에서 0 부터 $+\infty$ 까지 단조증가하므로 $k>0$ 이면 음수 근이 반드시 하나 생긴다.
    이 왼쪽 가지를 놓치고 $x>0$ 만 보면 극솟값 $g(2)=e^2/4$ 를 경계로 반대 방향의 답이 나오므로, 두 구간을 모두 세는 것이 이 문항의 실제 변별점이다.
    분리(EQV d2) + 구간 전수(MI d2) · M_total 9 · 극한 4개 계산. [분류 이슈] 필수 예제 출발점 ★2 대비 2단 높은 ★4 로 기록만 한다.
  tier: star_4
  mechanism_primary: '$x\ne0$ 확인 → $k=\dfrac{e^x}{x^2}$ 분리 → $x<0$·$x>0$ 각 구간의 증감과 극한 → 교점 총합이 1 인 $k$ 구간'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<k<\dfrac{e^2}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/197-e26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 차수($x^2$ → $x^3$ · $x^4$)와 지수부($e^{-x}$ → $e^{-2x}$)를 바꿀 수 있다. 제약: 홀수 차수로 바꾸면 왼쪽 가지의 부호가 뒤집혀 「$k>0$ 이면 음수 근 1개」가 깨지므로 두 가지의 치역을 다시 잡아야 하고, 극점의 $x$ 좌표가 정수로 떨어지도록 차수와 지수 계수를 맞춘다.'
    creative: '(1) 「서로 다른 세 실근」으로 조건을 바꾸면 오른쪽 가지에서 2개를 받아야 해 $k>e^2/4$ 가 되고 골조는 그대로 ★4 (2) $x>0$ 으로 정의역을 제한하면 구간 분할이 사라져 I-MI 소멸 ★3 (3) $k$ 대신 $kx^2e^{-x}=m$ 처럼 우변을 매개변수로 두면 분리 방향을 학생이 골라야 해 I-SC 가 붙고 ★5 후보.'
```

```yaml
- id: GN-CALC2-197-398
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $2\ln x=x+k$ 의 서로 다른 실근의 개수가 $1$ 일 때 실수 $k$ 의 값을 구한다.
  category: "실근 1개 ↔ 최댓값 0(접함) → k 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '양 끝에서 $-\infty$ 로 발산하는 함수는 실근이 0·1·2 개뿐이므로 「개수가 1」을 「최댓값이 0」이라는 등식 조건으로 역추적해야 $k$ 가 결정된다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실근 개수 조건으로 매개변수 결정(최댓값 = 0 · 접하는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f=2\ln x-x-k$ 는 $x=2$ 에서 극대이고 $x\to 0^+$, $x\to\infty$ 에서 모두 $-\infty$ 라 실근 개수가 극댓값의 부호로만 결정된다.
    따라서 개수 1 은 부등식이 아니라 등식 $f(2)=0$ 을 준다는 역추적이 핵심이고, 여기서 $k=2\ln 2-2$ 가 바로 나온다.
    양 끝 극한을 확인하지 않으면 「개수 1」을 다른 경우로 오해할 수 있어 I-BW d2 로 봤다. 유제 출발점 ★2 에 통찰 depth 2 로 +1.
  tier: star_3
  mechanism_primary: '$f=2\ln x-x-k$ 의 극댓값 $f(2)$ → 양 끝 극한이 $-\infty$ 이므로 실근 1개 ↔ $f(2)=0$ → $k=2\ln 2-2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\ln 2-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/197-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 계수($2\ln x$ → $3\ln x$ · $a\ln x$)와 우변 직선의 기울기를 바꿀 수 있다. 제약: 극점 $x=$ (로그 계수) 가 정수로 떨어지고 극댓값이 $\ln$ 한 개로 정리되어야 답이 깔끔하다. 기울기를 음수로 바꾸면 단조성이 생겨 개수 조건 자체가 성립하지 않는다.'
    creative: '(1) 「실근이 2개일 $k$ 의 범위」로 바꾸면 등식이 부등식이 되어 ★3 유지 (2) 「$2\ln x=x+k$ 가 실근을 갖지 않을 $k$」로 뒤집으면 같은 경계에서 반대 부등호 ★3 (3) 두 곡선 $y=2\ln x$ 와 $y=x+k$ 가 접할 조건(접점에서 함숫값·미분계수 동시 일치)으로 물으면 연립 조건이 붙어 ★4.'
```

```yaml
- id: GN-CALC2-197-399
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $2\sqrt{x+1}-x=a$ 가 서로 다른 두 실근을 갖도록 하는 실수 $a$ 의 값의 범위를 구한다.
  category: "치환 t=√(x+1) (t≥0) → 이차방정식의 두 근이 모두 t≥0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t=\sqrt{x+1}\ (t\ge0)$ 로 치환하면 $t^2-2t+(a-1)=0$ 이 되어 무리방정식이 「$t\ge0$ 범위의 이차방정식 근」 문제로 바뀐다(곡선·직선 교점으로 읽어도 같은 전환)'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '근 $t=1\pm\sqrt{2-a}$ 를 얻은 뒤 작은 근이 $t\ge0$ 을 만족하는지 되짚어 일부를 기각해야 $a\ge 1$ 이라는 아래쪽 경계가 나온다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무리방정식의 실근 개수 조건으로 매개변수 범위 결정(치환 범위 제약)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t\ge0$ 은 $x$ 와 $t$ 가 일대일로 대응하게 해 주지만 동시에 근을 거르는 필터라, 판별식 조건($a<2$)만 쓰면 답의 아래쪽 경계 $a\ge1$ 을 통째로 놓친다.
    즉 치환 전환(RT d2) 뒤에 범위 재검증(VF d2)이 반드시 따라붙는 구조이고, 등호가 붙는 $a=1$ 에서 $t=0,2$ 가 모두 살아 두 근이 유지되는 점이 T-경계 함정이다.
    유제 출발점 ★2 에 통찰 2개로 +1 → ★3. M_total 8.
  tier: star_3
  mechanism_primary: '$t=\sqrt{x+1}\ (t\ge0)$ 치환 → $t^2-2t+a-1=0$ → 판별식과 $t\ge0$ 을 동시에 만족하는 근이 2개일 $a$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1\le a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/197-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 계수($2\sqrt{x+1}$ → $3\sqrt{x+1}$)와 근호 안 평행이동을 바꿀 수 있다. 제약: 치환 뒤 이차방정식의 근이 $1\pm\sqrt{\ }$ 꼴로 정리되어야 경계가 유리수로 떨어지고, $t\ge0$ 필터가 실제로 근 하나를 기각하는 구간이 남아야 I-VF 가 살아 있다.'
    creative: '(1) 「실근이 1개일 $a$」로 바꾸면 기각되는 근이 답을 만들어 I-VF 가 더 강해지고 ★4 (2) 근호를 $\sqrt{4-x^2}$ 로 바꾸면 $t$ 범위가 양쪽으로 닫혀 경계가 둘 늘고 ★4 (3) 치환 없이 곡선·직선 교점으로만 풀게 유도하면 I-VF 대신 접선 조건이 들어와 ★3 유지.'
```

```yaml
- id: GN-CALC2-197-400
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $(k-2)e^x-x+1=0$ 이 실근을 갖도록 하는 실수 $k$ 의 최댓값을 구한다.
  category: "매개변수 분리 → 곡선의 최댓값이 k 의 상한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(k-2)e^x=x-1$ 을 $k-2=(x-1)e^{-x}$ 로 분리해 수평선과 곡선의 교점 문제로 바꾼다(원 식 그대로는 $k$ 가 지수항 계수라 증감표를 그릴 수 없다)'
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「실근이 존재한다」를 「$k-2$ 가 $h(x)=(x-1)e^{-x}$ 의 치역 안에 있다」로 뒤집어 최댓값 $h(2)$ 가 $k$ 의 상한임을 끌어낸다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "방정식이 실근을 가질 조건(매개변수 분리 후 치역 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $h=(x-1)e^{-x}$ 는 $h'=(2-x)e^{-x}$ 로 $x=2$ 에서 극대이고 $x\to-\infty$ 에서 $-\infty$, $x\to\infty$ 에서 0 에 위로부터 접근하므로 치역이 위로만 막혀 있다.
    따라서 실근 존재 조건이 $k-2\le h(2)=e^{-2}$ 한 줄로 끝나고 최댓값은 등호에서 나온다.
    분리(EQV d2) + 존재 조건의 역전(BW d1). 유제 출발점 ★2 에 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: '$k-2=(x-1)e^{-x}$ 로 분리 → $h''=(2-x)e^{-x}$ 로 최댓값 $h(2)=e^{-2}$ → 실근 존재 $\Leftrightarrow k-2\le e^{-2}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{e^2}+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/197-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차식 $x-1$ 의 계수·상수($x-1$ → $2x-1$ · $x-3$)와 지수($e^x$ → $e^{2x}$)를 바꿀 수 있다. 제약: $h''=0$ 의 해가 정수로 떨어져 최댓값이 $e^{-n}$ 꼴로 정리되어야 하고, 분리 후 곡선의 치역이 한쪽으로만 막혀야 「최댓값」이라는 발문이 성립한다.'
    creative: '(1) 「실근을 갖지 않을 $k$ 의 범위」로 뒤집으면 같은 경계의 여집합 ★3 유지 (2) 지수를 $e^{x^2}$ 로 바꿔 곡선이 좌우 대칭이 되게 하면 I-SYM 이 추가되고 ★4 (3) $(k-2)e^x-x+1=0$ 이 서로 다른 두 실근을 갖도록으로 바꾸면 치역 비교 대신 구간별 개수 분류가 들어와 I-MI ★4.'
```

```yaml
- id: GN-CALC2-198-e27
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ $x>0$ 일 때 두 부등식이 성립함을 보인다: $x\ln x\ge x-1$ · $\sin x>x-x^2$.
  category: "차 함수의 증감 → 최솟값(또는 끝점 극한) ≥ 0 · 필요하면 이계도함수까지"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵는 $h=\sin x-x+x^2$ 의 $h''$ 부호가 바로 정해지지 않아, $h''''=2-\sin x>0$ 으로 $h''$ 의 증가를 먼저 보인 뒤 $h''>h''(0)=0$ 을 거쳐 $h$ 의 증가로 내려가는 2단 구조로 조건을 바꿔야 한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식의 증명(차 함수의 최솟값 · 이계도함수 2단 구조)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 $g=x\ln x-x+1$, $g'=\ln x$ 로 $x=1$ 에서 최소이고 $g(1)=0$ 이라 한 번의 미분으로 끝난다.
    ⑵는 도함수의 부호가 한눈에 안 정해져 이계도함수까지 내려가야 하고, 정의역이 열린구간 $x>0$ 이라 최솟값 대신 $x\to0^+$ 극한값 0 을 기준으로 삼아야 한다(등호 없는 엄밀부등호 유지가 T-경계).
    같은 「차 함수」 골조 안에서 1단·2단 두 난도를 함께 보여 주는 필수 예제라 출발점 ★2 에 +1.
  tier: star_3
  mechanism_primary: '$h=(좌변)-(우변)$ 으로 모은 뒤 $h''$ 의 부호로 최솟값·끝점 극한 ≥ 0 을 보인다 · 부호가 안 정해지면 $h''''$ 까지 내려가 $h''$ 의 부호를 먼저 확정'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "풀이 참조"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/198-e27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 우변 상수($x-1$ → $x-2$ 로 바꾸면 여유가 생겨 등호가 사라짐)와 ⑵의 이차항 계수($x-x^2$ → $x-2x^2$)를 바꿀 수 있다. 제약: ⑴은 등호가 $x=1$ 에서만 성립하도록 우변을 $y=x\ln x$ 의 $x=1$ 접선으로 유지해야 하고, ⑵는 $h''''>0$ 이 유지되도록 이차항 계수를 $\frac12$ 이상으로 잡는다.'
    creative: '(1) ⑴을 「$x\ln x\ge k(x-1)$ 이 항상 성립할 $k$」로 바꾸면 매개변수 역추적이 붙어 ★4 (2) ⑵의 우변을 $x-\frac{x^3}{6}$ 로 올리면 삼계도함수까지 내려가는 3단 구조 ★4 (3) 두 소문항을 「$x>0$ 에서 $x\ln x\ge\sin x-x^2$」처럼 합치면 두 부등식을 이어 붙이는 I-CON 이 생겨 ★4.'
```

```yaml
- id: GN-CALC2-198-401
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에 대하여 부등식 $e^x\ge x+1$ 이 성립함을 보인다.
  category: "차 함수의 최솟값이 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 증명(차 함수의 최솟값이 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $h=e^x-x-1$, $h'=e^x-1$ 로 $x=0$ 에서 유일한 최소이고 $h(0)=0$ 이라 세 줄이면 끝난다.
    정의역이 실수 전체라 끝점·열린구간 처리도 없고 분기·역추적도 없어 통찰 0.
    유제 출발점 ★2 이지만 통찰 0·M_total 4 로 v3.8 −1 규칙을 적용해 ★1 로 내렸다(유제를 예제와 같은 층으로 두는 관례면 ★2 — 파일 끝에 기록).
  tier: star_1
  mechanism_primary: '$h=e^x-x-1$ → $h''=e^x-1$ 의 부호로 $x=0$ 최소 → $h(0)=0\ge0$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/198-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑과 계수를 $e^{2x}\ge 2x+1$ · $e^x\ge ex$ 처럼 바꿀 수 있다. 제약: 우변이 좌변의 접선이어야 등호가 한 점에서만 성립하고, 접점의 $x$ 좌표가 0 이나 1 처럼 깔끔해야 최솟값 계산이 한 줄로 끝난다.'
    creative: '(1) 「$e^x\ge x+k$ 가 항상 성립할 $k$ 의 최댓값」으로 바꾸면 매개변수 역추적이 붙어 ★3(이 범위의 199-e28 ⑴과 같은 골조) (2) $\ln x\le x-1$ 로 역함수 쪽을 물어도 같은 난도 ★1 (3) 이 부등식을 써서 $e^x\ge\frac{x^2}{2}+x+1$ 을 유도하라고 하면 적분·재적용 구조가 생겨 ★4.'
```

```yaml
- id: GN-CALC2-198-402
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ $x>0$ 일 때 두 부등식이 성립함을 보인다: $\ln(1+x)>x-\dfrac{x^2}{2}$ · $(x-2)e^x+x+2>0$.
  category: "차 함수의 도함수 부호 · 부호가 안 정해지면 이계도함수까지"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵는 $h''=(x-1)e^x+1$ 이 $h''(0)=0$ 이라 부호가 바로 안 정해지므로, $h''''=xe^x>0$ 으로 $h''$ 의 증가를 보인 뒤 $h''>0$ → $h>h(0)=0$ 으로 내려가는 2단 구조가 필요하다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식의 증명(차 함수의 미분 · 이계도함수 2단 구조)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 차 함수의 도함수가 통분하면 $\dfrac{x^2}{1+x}$ 로 깔끔히 양수가 되어 한 번의 미분으로 끝나지만, 통분 정리를 건너뛰면 부호가 안 보인다.
    ⑵는 도함수와 원함수의 $x=0$ 값이 모두 0 이라 이계도함수까지 내려가야 하는 2단 구조이고, 열린구간이라 최솟값이 아니라 $x\to0^+$ 극한을 기준으로 엄밀부등호를 유지해야 한다.
    유제 출발점 ★2 에 2단 구조 통찰 depth 2 로 +1 → ★3. M_total 8.
  tier: star_3
  mechanism_primary: '$h=(좌변)-(우변)$ → ⑴ $h''=\dfrac{x^2}{1+x}>0$ 으로 한 번에 · ⑵ $h''''=xe^x>0\Rightarrow h''>h''(0)=0\Rightarrow h>h(0)=0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/198-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 이차항 계수($-\frac{x^2}{2}$ → $-\frac{x^2}{3}$ 로 바꾸면 여유가 커져 같은 골조로 더 쉬움)와 ⑵의 상수($x-2$ → $x-3$ · $+2$ → $+3$)를 바꿀 수 있다. 제약: ⑴은 통분 후 분자가 $x$ 의 짝수 거듭제곱이 되어야 부호가 한눈에 보이고, ⑵는 $h''(0)=0$·$h(0)=0$ 이 동시에 성립하도록 두 상수를 짝지어야 2단 구조가 살아 있다.'
    creative: '(1) ⑴을 $\ln(1+x)<x$ 와 묶어 상하 양쪽 끼워넣기로 물으면 두 증명을 결합하는 I-CON ★4 (2) ⑵를 「$(x-a)e^x+x+a>0$ 이 $x>0$ 에서 성립할 $a$ 의 범위」로 바꾸면 매개변수 역추적이 붙어 ★4 (3) ⑴에서 $x=1$ 을 대입해 $\ln 2>\frac12$ 같은 수치 평가를 시키면 부등식의 활용 방향으로 확장 ★3.'
```

```yaml
- id: GN-CALC2-199-e28
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 부등식이 항상 성립할 매개변수 범위를 구한다: 모든 실수 $x$ 에서 $e^x\ge 2x+k$ 일 $k$ · $x>0$ 에서 $\sqrt{x}>a\ln x$ 일 양수 $a$.
  category: "차 함수의 최솟값 ≥ 0 → 매개변수 부등식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「모든 $x$ 에서 성립」이라는 전칭 조건을 차 함수의 **최솟값 ≥ 0(또는 > 0)** 이라는 단일 부등식으로 바꾼다'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵는 극점 $x=4a^2$ 자체가 $a$ 의 식이라 최솟값 $2a-2a\ln(2a)$ 를 다시 $a$ 에 대한 부등식으로 풀어야 하는 2중 매개변수 구조다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(차 함수의 최솟값 ≥ 0 → 매개변수 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 $h=e^x-2x-k$ 의 극소가 $x=\ln 2$ 로 $k$ 와 무관해 최솟값 부등식 한 줄로 끝난다.
    ⑵는 극점의 위치가 $a$ 에 따라 움직여 최솟값이 $a$ 의 식으로 나오고, 그것을 다시 $\ln(2a)<1$ 로 풀어야 해서 매개변수가 두 번 등장한다 — 이 파일에서 최솟값 조건이 재귀적으로 쓰이는 유일한 문항이다.
    전칭 조건의 동치 변환(EQV d2) + 최솟값 자체의 역추적(BW d2). 필수 예제 출발점 ★2 에 +1 → ★3, M_total 9.
  tier: star_3
  mechanism_primary: '$h=(좌변)-(우변)$ 의 최솟값을 $h''=0$ 에서 구해 $\ge0$(또는 $>0$) 으로 놓고 매개변수에 대해 푼다'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $k\le 2-2\ln 2$ ⑵ $0<a<\dfrac{e}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/199-e28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 직선 기울기($2x$ → $3x$ · $ex$)와 ⑵의 좌변 거듭제곱($\sqrt{x}$ → $\sqrt[3]{x}$)을 바꿀 수 있다. 제약: ⑴은 극점이 $\ln(기울기)$ 로 나오므로 최솟값이 $\ln$ 한 개로 정리되게 기울기를 잡고, ⑵는 극점 $x$ 가 $a$ 의 거듭제곱으로 깔끔히 나와 최솟값에서 $a$ 가 공통인수로 묶여야 한다.'
    creative: '(1) ⑴을 「부등식이 성립하지 않도록 하는 $k$」로 뒤집으면 같은 경계의 여집합 ★3 (2) ⑵에서 $a$ 를 음수까지 허용하면 $\ln x$ 의 부호에 따라 경우가 갈려 I-MI 추가 ★4 (3) 두 곡선이 접할 $a$ 를 직접 구하게 하면 함숫값·미분계수 연립이 되어 ★4 — 최솟값 조건과 접선 조건이 같은 식임을 보게 하는 변형.'
```

```yaml
- id: GN-CALC2-199-403
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 양수 $x$ 에 대하여 부등식 $\ln(e^x-1)\le 2x+a$ 가 성립하도록 하는 실수 $a$ 의 값의 범위를 구한다.
  category: "매개변수 분리 → 우변 함수의 최댓값 ≤ a"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a\ge \ln(e^x-1)-2x=h(x)$ 로 $a$ 를 완전히 분리해 「모든 $x$ 에서 성립」을 $h$ 의 **최댓값** 하나와의 비교로 바꾼다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(매개변수 분리 후 최댓값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $h'=\dfrac{e^x}{e^x-1}-2=\dfrac{2-e^x}{e^x-1}$ 로 정리되고 $x>0$ 에서 분모가 양수라 부호가 $2-e^x$ 로 결정되어 $x=\ln 2$ 에서 극대다.
    극댓값이 $\ln 1-2\ln 2=-2\ln 2$ 로 로그항이 사라지는 점이 계산의 핵심이고, 진수 조건 $e^x-1>0$ 이 정의역 $x>0$ 과 일치해 추가 제약이 생기지 않는다.
    분리 후 최댓값 비교(EQV d2) 한 단계. 유제 출발점 ★2 에 +1 → ★3.
  tier: star_3
  mechanism_primary: '$a\ge\ln(e^x-1)-2x=h(x)$ 로 분리 → $h''=\dfrac{2-e^x}{e^x-1}$ → $x=\ln2$ 에서 최대 $-2\ln2$ → $a\ge-2\ln2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\ge -2\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/199-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 직선의 기울기($2x$ → $3x$)와 진수의 상수($e^x-1$ → $e^x-2$, 이때 정의역이 $x>\ln2$ 로 이동)를 바꿀 수 있다. 제약: 기울기를 $k$ 로 두면 극점이 $x=\ln\frac{k}{k-1}$ 이므로 $k>1$ 이어야 극대가 생기고, 극댓값에서 로그가 정리되도록 진수 상수를 맞춘다.'
    creative: '(1) 부등호를 뒤집어 $\ln(e^x-1)\ge 2x+a$ 로 두면 $h$ 가 아래로 안 막혀 있어 성립하는 $a$ 가 없음을 보이는 문항이 되고 ★4 (2) 정의역을 $x\ge1$ 로 제한하면 극점이 구간 밖일 수 있어 경계 비교가 생기고 I-MI ★4 (3) $a$ 의 최솟값만 묻게 하면 등호 처리만 남아 ★2.'
```

```yaml
- id: GN-CALC2-199-404
  page: 199
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 함수 $f(x)=\cos x$, $g(x)=k-x^2$ 에 대하여 $x>0$ 일 때 $f(x)>g(x)$ 가 성립하도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: "차 함수의 단조증가 → 열린구간의 하한과 등호 경계"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$h=\cos x+x^2-k$ 로 모은 뒤 $h''=2x-\sin x$ 가 $x>0$ 에서 양수임을 별도로 보여 $h$ 의 단조증가를 확보한다(삼각함수 때문에 부호가 자명하지 않다)'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정의역이 열린구간이라 최솟값이 존재하지 않고 하한 $h(0^+)=1-k$ 만 있으므로, 엄밀부등호인데도 $1-k>0$ 이 아니라 $1-k\ge0$ 이어야 함을 되짚어야 $k\le1$ 의 등호가 살아난다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(열린구간의 하한 · 등호 경계)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $h'=2x-\sin x>0$ 은 $x>0$ 에서 $\sin x\le x<2x$ 로 보이거나 $h''$ 로 한 번 더 내려가야 하고, 이 단조증가가 확보되면 값의 하한은 $x\to0^+$ 에서만 나온다.
    핵심은 「$>$ 조건인데 답에 등호가 붙는다」는 경계 판정이다 — $k=1$ 이면 $h(x)>h(0^+)=0$ 이라 여전히 성립하므로 $k<1$ 로 답하면 틀린다.
    [분류 이슈] 이 경계 처리를 I-VF 통찰로 셀지 Mₜ(T-경계)로만 볼지 갈린다. 통찰로 보아 유제 출발점 ★2 에 +1 → ★3 으로 두고 기록한다.
  tier: star_3
  mechanism_primary: '$h=\cos x+x^2-k$ → $h''=2x-\sin x>0$ 으로 단조증가 → 하한 $h(0^+)=1-k\ge0$ → $k\le1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$k\le 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/199-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수($-x^2$ → $-2x^2$ · $-\frac12 x^2$)와 삼각함수($\cos x$ → $\cos 2x$)를 바꿀 수 있다. 제약: $h''=2cx-\sin(mx)$ 가 $x>0$ 에서 부호 일정해야 단조성이 유지되므로 $2c\ge m$ 을 지켜야 하고, 하한이 $x\to0^+$ 에서 나오도록 상수항을 맞춘다.'
    creative: '(1) 정의역을 $x>1$ 처럼 옮기면 하한이 $h(1^+)$ 로 바뀌어 같은 골조·다른 경계 ★3 (2) 정의역을 실수 전체로 열면 $h$ 가 단조가 아니라 극소를 갖게 되어 최솟값 계산이 들어오고 ★4 (3) $2c<m$ 이 되게 계수를 잡아 단조성을 깨면 극점이 여러 개 생겨 구간별 분류가 필요하고 ★5 후보.'
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 1 · ★2 2 · ★3 8 · ★4 2 · ★5 0
- 통찰형 10 · 절차형 3(`196-e25` · `196-396` · `198-401`) · premium 0
- 통찰 유형 분포: I-EQV 6 · I-BW 3 · I-MI 2 · I-RT 2 · I-VF 2 (총 15개 라벨 · depth 3 없음)
- type_hint 상위: 「매개변수 조건으로 실근 개수·존재 결정」 5(`196-397` · `197-e26` · `197-398` · `197-399` · `197-400`) · 「부등식의 증명(차 함수 최솟값 · 이계도함수 2단)」 3(`198-e27` · `198-401` · `198-402`) · 「부등식이 항상 성립할 조건 → 매개변수 범위」 3(`199-e28` · `199-403` · `199-404`) · 「방정식의 실근의 개수(증감표·극값 부호)」 2(`196-e25` · `196-396`)
- 그림: 0문 (이 범위에는 그림 문항 없음)
- 대상층: 하위권 1 · 중하위권 2 · 중위권 6 · 중상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-196-397 | 벤더 태그는 확인체크(유제 출발 ★2 · 원 규칙으로는 ★1)인데 접점·끝점 두 경계로 $k$ 축을 네 구간으로 나눠 전수 분류해야 해 I-RT d2 + I-MI d2 · M_total 9 → ★4. 2단 이상 어긋나 기록 | ★3 / ★4 |
| GN-CALC2-197-e26 | 필수 예제(★2 출발)이나 $x<0$·$x>0$ 두 가지를 모두 세야 답이 뒤집히지 않아 ★4 로 2단. 왼쪽 가지를 「정의역 확인」 수준의 절차로 보면 I-MI 가 빠져 ★3 | ★3 / ★4 |
| GN-CALC2-198-401 | 유제 출발점 ★2 이지만 통찰 0·M_total 4 로 v3.8 −1 규칙을 적용해 ★1. 유제를 예제와 같은 층으로 두는 관례면 ★2 | ★1 / ★2 |
| GN-CALC2-199-404 | 「$>$ 조건인데 답에 등호가 붙는다」는 열린구간 하한 처리를 I-VF 통찰로 셀지 Mₜ(T-경계)로만 볼지 갈린다. 절차로 보면 통찰 1개로 줄어 ★2 | ★2 / ★3 |
| GN-CALC2-198-e27 · 198-402 | 「도함수 부호가 안 정해져 이계도함수까지 내려가는 2단 구조」를 I-EQV 통찰로 셀지 이 단원의 표준 절차로 볼지 갈린다. 절차로 보면 둘 다 통찰 0 → ★2 | ★2 / ★3 |

카탈로그 차원 메모: 이 범위는 type_hint 가 네 축(「방정식의 실근 개수」 · 「실근 개수·존재 조건으로 매개변수 결정」 · 「부등식의 증명」 · 「부등식 성립 조건으로 매개변수 결정」)으로 갈리고, 각 축이 「필수 예제 1 + 확인체크 2~4」 세트로 반복된다. 카탈로그를 만들 때는 (1) 「실근 개수 세기」와 「개수 조건으로 매개변수 역추적」은 학생 체감이 확연히 달라 반드시 따로 세우고 base ★ 를 2 와 3 으로 나눌 것, (2) 「매개변수 분리($k=g(x)$)가 되는 경우」와 「분리가 안 되어 곡선·직선 교점으로 가야 하는 경우」(`196-397` · `197-399`)를 하위 구분으로 둘 것 — 분리 가능 여부가 난도를 가르는 실제 축이다. (3) 「부등식의 증명」과 「부등식이 항상 성립할 조건」은 골조가 같은 차 함수 최솟값이므로 **한 유형의 base ★ 2 / 3 두 층**으로 통합해도 된다. (4) 「열린구간의 하한·등호 경계」(`198-e27` ⑵ · `198-402` ⑵ · `199-404`)는 유형이 아니라 **함정 태그(T-경계)** 로 빼서 여러 유형에 교차 부착하는 편이 낫다.
