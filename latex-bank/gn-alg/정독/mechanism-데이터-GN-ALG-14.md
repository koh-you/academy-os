---
name: mechanism-데이터-GN-ALG-14
description: 개념원리 대수 14 일반각(1/1 · 132~134쪽 132-320~134-328 · 12문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 14 일반각
  unit_code: ALG-14
  part: "1/1"
  extract_range: "132~134쪽 · 132-320~134-328"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 14 일반각 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 14단원 「일반각」 전체(132~134쪽 · 132-320~134-328 · 12문항)를 다룬다. 구역은 둘이다. **개념원리 익히기**(132-320~132-323 · 개념 직후 확인 드릴 · level·tag 없음) 4문항, **필수·발전 예제**(133-e1 「일반각」 · 133-e2 「사분면의 각」 · 134-e3 「두 동경의 위치 관계」 tag 「필수」와, 각 예제 뒤에 붙는 tag 「확인체크」 문항 133-324·133-325·134-326·134-327·134-328) 8문항이다. 발전·특강·연습문제 STEP 1/2·실력 UP 은 이 범위에 없다.

★ 출발점은 개념원리 익히기 ★1, 필수 예제 ★2 로 잡았다. tag 「확인체크」는 벤더 신호표상 ★1 출발이지만 이 단원의 확인체크는 **직전 필수 예제의 확인 문항**이어서 그 예제와 같은 출발점(★2)을 썼고, 거기서 M_total·통찰로 ±1 을 조정했다. 그 결과 벤더 신호와 2단 벌어진 문항은 rationale 에 `[분류 이슈]` 한 줄을 남기고 파일 끝 표에 모았다(라벨을 억지로 맞추지 않았다).

단원의 도구는 세 개뿐이다. ① 일반각 표현 $360^\circ\times n+\alpha^\circ$ ($0^\circ\le\alpha^\circ<360^\circ$) ② $\alpha$ 로 사분면 판정 ③ 두 동경의 위치 관계를 각의 차·합에 대한 조건식으로 옮기기. 그래서 골조는 「$360^\circ$ 로 나눠 $\alpha$ 만 남기기」(앞 6문)와 「위치 관계·사분면 조건을 $n$ 이 든 식·부등식으로 옮긴 뒤 범위로 $n$ 을 결정하기」(뒤 6문) 두 갈래로 갈린다. 음수 각에서 몫을 내림해야 $\alpha$ 가 범위 안에 들어온다는 것(T-부호·T-범위)이 앞 갈래의 유일한 함정이고, 뒤 갈래는 조건을 식으로 옮기는 단계 자체가 통찰이라 12문 중 6문이 통찰형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 132-321 한 문항이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-132-320
  page: 132
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $45^\circ$ · $-250^\circ$ · $630^\circ$ · $-750^\circ$ 를 나타내는 시초선 OX 와 동경 OP 의 위치를 각각 그림으로 나타내기.
  category: '각의 부호 → 회전 방향, 몫 → 회전 바퀴 수 → 동경 위치 작도'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경의 위치 그리기 — 회전 방향과 회전 바퀴 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부호가 회전 방향을, $360^\circ$ 로 나눈 몫이 바퀴 수를, 나머지가 최종 위치를 정한다. $630^\circ$ 는 양의 방향 한 바퀴와 $270^\circ$, $-750^\circ$ 는 음의 방향 두 바퀴와 $30^\circ$ 로 바퀴 수를 세는 것이 유일한 확인 지점이다(T-부호).
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 답이 그림이라 채점은 회전 방향과 최종 동경 위치만 본다.
  tier: star_1
  mechanism_primary: '각의 부호로 회전 방향 결정 → $360^\circ$ 로 나눈 몫으로 바퀴 수 → 나머지만큼 더 회전한 자리에 동경 OP'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (⑴ 시초선~$\pt{OX}$에서 양의 방향으로 $45^\circ$ 회전한 동경~$\pt{OP}$ ⑵ 음의 방향으로 $250^\circ$ 회전한 동경~$\pt{OP}$ ⑶ 양의 방향으로 $630^\circ$(한 바퀴와 $270^\circ$) 회전한 동경~$\pt{OP}$ ⑷ 음의 방향으로 $750^\circ$(두 바퀴와 $30^\circ$) 회전한 동경~$\pt{OP}$의 그림)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/132-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 각을 자유롭게 바꿀 수 있다. 제약: 최소 한 개는 음수, 한 개는 $360^\circ$ 초과로 두어야 회전 방향·바퀴 수가 둘 다 확인된다. 나머지가 $0^\circ$·$90^\circ$·$180^\circ$·$270^\circ$ 가 되는 값(예: $720^\circ$, $-540^\circ$)은 동경이 축 위에 놓여 작도 채점이 애매해지므로 피한다.'
    creative: '(1) 그림을 주고 각을 쓰게 하는 역방향(→ 132-321 골조 · ★1 유지) (2) 두 각을 주고 같은 동경인지 판정하게 하기(★2 · 132-324 골조) (3) 「$\alpha^\circ$ 와 회전 바퀴 수를 각각 답하시오」로 분해하면 절차가 명시돼 ★1 고정.'
```

```yaml
- id: GN-ALG-132-321
  page: 132
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 그림에 각각 $70^\circ$ · $150^\circ$ · $-140^\circ$ · $-45^\circ$ 로 표시된 동경 OP 가 나타내는 일반각을 $360^\circ\times n+\alpha^\circ$ ($n$ 은 정수, $0^\circ\le\alpha^\circ<360^\circ$) 꼴로 나타내기.
  category: '그림의 회전각 읽기 → 음수면 $360^\circ$ 를 더해 $\alpha$ 로 → $360^\circ\times n+\alpha^\circ$'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '그림의 동경이 나타내는 일반각 — $360^\circ\times n+\alpha^\circ$ 표현'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 그림의 라벨이 그대로 $\alpha$ 다. ⑶⑷ 는 라벨이 음수($-140^\circ$·$-45^\circ$)여서 $360^\circ$ 를 한 번 더해야 $0^\circ\le\alpha^\circ<360^\circ$ 안으로 들어온다(T-부호·T-범위) — 이 한 줄이 문항의 전부다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지. 그림은 시초선 OX 를 양의 $x$축 방향으로 고정해 두어 사분면 판단조차 필요 없다.
  tier: star_1
  mechanism_primary: '그림에서 시초선 OX 기준 회전각 읽기 → 음수면 $+360^\circ$ 로 $\alpha$ 확보 → $360^\circ\times n+\alpha^\circ$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $360^\circ\times n+70^\circ$ ⑵ $360^\circ\times n+150^\circ$ ⑶ $360^\circ\times n+220^\circ$ ⑷ $360^\circ\times n+315^\circ$'
  answer_source: "답지"
  figure: crop:fig-132-321.png
  latex: latex-bank/gn-alg/items/132-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '그림 라벨과 동경 위치가 한 몸이라 숫자만 바꾸면 크롭이 어긋난다 — 라벨을 바꾸려면 그림을 다시 생성해야 한다(그림 라벨 고정 제약). 그림을 유지한 채 바꿀 수 있는 것은 요구 형식($0^\circ\le\alpha^\circ<360^\circ$ 대신 $-180^\circ<\alpha^\circ\le180^\circ$)뿐이다. 음수 라벨은 $-360^\circ<\theta<0^\circ$ 범위로 두어야 $\alpha=\theta+360^\circ$ 한 번으로 끝난다.'
    creative: '(1) 같은 그림에 「제몇 사분면의 각인가」를 덧붙이기(★1 · 132-323 골조 흡수) (2) 두 그림의 동경이 일치하는지 묻기(★2) (3) 그림 없이 각만 주면 132-322 와 같아져 ★1 유지 — 그림은 난이도가 아니라 표현 전환 연습으로만 기능한다.'
```

```yaml
- id: GN-ALG-132-322
  page: 132
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $80^\circ$ · $420^\circ$ · $-1000^\circ$ · $-1300^\circ$ 의 동경이 나타내는 일반각을 $360^\circ\times n+\alpha^\circ$ ($n$ 은 정수, $0^\circ\le\alpha^\circ<360^\circ$) 꼴로 나타내기.
  category: '$360^\circ$ 로 나눈 나머지 $\alpha$ 구하기 → $360^\circ\times n+\alpha^\circ$'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '각을 $360^\circ\times n+\alpha^\circ$ 꼴로 나타내기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양수 ⑴⑵ 는 나눗셈 한 번이다. 음수 ⑶⑷ 는 몫을 **내림**해야 나머지가 양수로 남는다($-1000^\circ=360^\circ\times(-3)+80^\circ$ · $-1300^\circ=360^\circ\times(-4)+140^\circ$). 몫을 올림하면 $\alpha$ 가 음수가 되어 범위 조건을 깬다(T-부호·T-범위).
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지. 132-321 의 그림 없는 판이며 음수의 절댓값만 커졌다.
  tier: star_1
  mechanism_primary: '$\theta\div360^\circ$ 의 몫을 내림해 $n$ 결정 → 나머지 $\alpha$ → $360^\circ\times n+\alpha^\circ$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $360^\circ\times n+80^\circ$ ⑵ $360^\circ\times n+60^\circ$ ⑶ $360^\circ\times n+80^\circ$ ⑷ $360^\circ\times n+140^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/132-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 각 모두 교체 가능. 제약: ⑴ 은 $0^\circ\le\theta<360^\circ$(그대로가 답), ⑵ 는 한 바퀴 조금 넘게, ⑶⑷ 는 두 바퀴 이상 음수로 두어 몫 내림을 강제한다. $360^\circ$ 의 배수(예: $-1080^\circ$)는 $\alpha=0^\circ$ 가 되어 경계 확인용으로만 쓰고, $\alpha$ 가 $90^\circ$ 의 배수면 132-323 과 겹친다.'
    creative: '(1) $\alpha$ 가 아니라 $n$ 을 묻기(★1) (2) 「$-1000^\circ$ 와 같은 동경을 나타내는 $1000^\circ$ 이하의 양의 각을 모두」로 바꾸면 범위 안 $n$ 열거가 붙어 ★2 (3) $\theta$ 를 문자로 주고 $\theta$ 와 $\theta+720^\circ$ 의 동경이 같음을 설명하게 하면 Mₐ 상승 ★2.'
```

```yaml
- id: GN-ALG-132-323
  page: 132
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $620^\circ$ · $-680^\circ$ · $1230^\circ$ · $-1500^\circ$ 가 각각 제몇 사분면의 각인지 답하기.
  category: '$360^\circ\times n+\alpha^\circ$ 로 환원 → $\alpha$ 가 놓인 사분면 판정'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각이 제몇 사분면의 각인지 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    132-322 의 절차에 「$\alpha$ 가 $0$~$90$~$180$~$270$~$360$ 중 어느 칸인가」 한 단계를 붙인 것이다. 음수 ⑵⑷ 에서 몫 내림(T-부호), $\alpha$ 를 범위 안에 두기(T-범위)가 그대로 함정이고, 네 답이 제1~제4 사분면에 하나씩 배치돼 있어 한 칸만 틀려도 바로 드러난다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: '$\theta=360^\circ\times n+\alpha^\circ$ 로 환원 → $\alpha$ 를 $90^\circ$ 단위 네 칸에 배치 → 사분면'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 제$3$사분면 ⑵ 제$1$사분면 ⑶ 제$2$사분면 ⑷ 제$4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/132-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 바꿀 때 $\alpha$ 가 네 사분면에 고르게 흩어지도록 고른다. 제약: $\alpha$ 가 $90^\circ$ 의 배수면 동경이 축 위에 놓여 「어느 사분면도 아님」이 되므로 답이 될 수 없다 — 경계값을 쓰려면 발문에 「사분면에 속하지 않는 것을 고르시오」로 목적을 바꿔야 한다.'
    creative: '(1) 다섯 개 중 같은 사분면끼리 짝짓기(★2) (2) 「제2사분면의 각을 모두 고르면?」 선택형(★2) (3) $\theta$ 가 제$k$사분면일 때 $\theta+180^\circ$ 의 사분면을 묻기(일반각 부등식이 들어가 ★2~3 · 133-e2 골조로 이동).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-133-e1
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $-500^\circ$ · $-300^\circ$ · $-100^\circ$ · $400^\circ$ · $700^\circ$ 를 $360^\circ\times n+\alpha^\circ$ ($0^\circ\le\alpha^\circ<360^\circ$) 꼴로 나타낼 때 $\alpha$ 가 가장 작은 것 고르기. 5지선다.
  category: '다섯 각을 각각 $\alpha$ 로 환원 → $\alpha$ 최솟값 비교'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '일반각 — $360^\circ\times n+\alpha^\circ$ 로 고쳐 $\alpha$ 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    132-322 의 변환을 다섯 번 반복한 뒤 크기를 비교하는 구조다. 음수가 셋이라 몫 내림을 세 번 해야 하고(T-부호), $\alpha$ 를 범위 안에 두지 않으면 비교 자체가 무의미해진다(T-범위). 선택지의 $\alpha$ 가 $220$·$60$·$260$·$40$·$340$ 으로 흩어져 있어 한 개만 잘못 환원해도 답이 바뀐다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 노동량이 늘었을 뿐 도구는 익히기와 같다.
  tier: star_2
  mechanism_primary: '각 선택지를 $360^\circ$ 로 나눠 $\alpha$ 만 남기기 → 다섯 $\alpha$ 중 최소'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/133-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '다섯 각을 $-720^\circ$~$1080^\circ$ 에서 고르되 음수 2~3개를 섞는다. 제약: 환원된 $\alpha$ 다섯 개가 서로 달라야 하고(같으면 답이 둘), 최솟값과 두 번째 값의 차가 $20^\circ$ 이상이어야 계산 실수와 정답이 구분된다. $\alpha=0^\circ$ 이 되는 $360^\circ$ 의 배수는 정답으로 쓰면 「가장 작은 것」이 너무 쉽게 보인다.'
    creative: '(1) 「$\alpha$ 가 가장 큰 것」으로 뒤집기(★2 유지) (2) 「$n$ 이 가장 작은 것」으로 묻는 대상을 바꾸면 몫의 부호까지 따져야 해 ★2~3 (3) 「같은 동경을 나타내는 두 각의 짝」을 고르게 하면 133-324 골조 (4) 선택지를 $\theta$ 와 $\theta+k\times360^\circ$ 꼴 문자식으로 주면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-133-e2
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\theta$ 가 제$1$사분면의 각일 때 $\dfrac{\theta}{3}$ 를 나타내는 동경이 존재하는 사분면을 모두 구하기.
  category: '사분면 조건을 일반각 부등식으로 → 3으로 나누기 → $n$ 의 나머지별 분기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「제1사분면의 각」을 $360^\circ\times n<\theta<360^\circ\times n+90^\circ$ 로 옮긴 뒤 3으로 나눠 $\theta/3$ 의 구간 부등식으로 바꿈'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$n$ 을 3으로 나눈 나머지 $0,1,2$ 에 따라 $\theta/3$ 의 구간이 세 갈래로 갈리고 세 갈래가 모두 답에 들어감'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '사분면의 각 — $\theta$ 의 사분면에서 $\theta/n$ 의 사분면 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $120^\circ\times n<\dfrac{\theta}{3}<120^\circ\times n+30^\circ$ 까지는 기계적이지만, 여기서 멈추면 답을 못 쓴다. $n$ 을 $3k,\,3k+1,\,3k+2$ 로 나눠야 구간이 $360^\circ k$ 기준으로 고정되고 제1·제2·제3사분면이 차례로 나온다. 학생이 가장 많이 틀리는 지점은 $n$ 분기를 생략하고 $n=0$ 만 보는 것이다(T-범위).
    필수 예제 ★2 출발이나 통찰 2개(EQV d1 · MI d2)·M_total 7 → +1 조정해 ★3. [분류 이슈] 벤더 「필수」 신호와 1단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: '$360^\circ n<\theta<360^\circ n+90^\circ$ → 3으로 나눠 $120^\circ n<\theta/3<120^\circ n+30^\circ$ → $n\bmod 3$ 세 갈래 → 제1·2·3사분면'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '제$1$사분면, 제$2$사분면, 제$3$사분면'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/133-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\theta$ 의 사분면(제1~제4)과 나누는 수(2·3·4)를 바꿀 수 있다. 제약: 나누는 수 $m$ 에 대해 분기는 항상 $m$ 갈래이고, 구간 폭이 $90^\circ/m$ 이라 $m$ 이 커질수록 한 구간이 한 사분면 안에 온전히 들어가 답 개수가 늘어난다. 구간 끝이 $90^\circ$ 의 배수와 겹치면(예: 제2사분면·$m=2$) 동경이 축 위에 놓이는 경우를 따로 언급해야 하므로 발문에서 제외하거나 명시한다.'
    creative: '(1) $\theta/3$ 대신 $\theta/2$ 로 낮추면 두 갈래라 ★2 (2) 「$\theta/3$ 의 동경이 존재할 수 없는 사분면」으로 뒤집으면 여집합 판단이 붙어 ★3 유지 (3) $\theta$ 와 $\theta/3$ 의 동경이 일치할 조건을 묻는 형태로 바꾸면 134-e3 골조와 결합해 I-RT 가 추가되어 ★4 (4) 단위원 그림에 $120^\circ$ 간격 세 영역을 표시하게 하면 I-RT d2 가 붙어 ★3~4.'
```

```yaml
- id: GN-ALG-133-324
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-310^\circ$ · $50^\circ$ · $410^\circ$ · $660^\circ$ · $1130^\circ$ 중 각을 나타내는 동경이 나머지 넷과 다른 하나 고르기. 5지선다.
  category: '다섯 각을 각각 $\alpha$ 로 환원 → 혼자 다른 $\alpha$ 고르기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 동경을 나타내는 각 찾기(α 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「동경이 같다 $\iff$ $\alpha$ 가 같다」를 쓰면 다섯 번 환원 후 비교로 끝난다($\alpha$ 는 $50,50,50,300,50$). $-310^\circ$ 에서 몫을 내림해 $50^\circ$ 를 얻는 것(T-부호)과 $1130^\circ$ 의 세 바퀴 처리(T-범위)가 확인 지점이다.
    직전 필수 예제 133-e1 과 같은 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지. 「다른 하나」를 묻지만 다섯 개를 모두 환원해야 하므로 노동량은 e1 과 같다.
  tier: star_2
  mechanism_primary: '각 선택지를 $360^\circ\times n+\alpha^\circ$ 로 환원 → $\alpha$ 가 혼자 다른 것 선택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/133-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 $\alpha$ 하나를 정하고 $\alpha+360^\circ k$ ($k=-1,0,1,3$) 로 네 개를 만든 뒤, 정답 하나만 다른 $\alpha$ 로 둔다. 제약: 정답의 $\alpha$ 는 나머지와 $180^\circ$ 가까이 떨어뜨려야 암산 실수와 구분되고, 음수 항을 최소 하나 넣어야 몫 내림이 확인된다. 정답의 $\alpha$ 가 나머지와 $360^\circ$ 차이가 나면 정답이 사라진다.'
    creative: '(1) 「동경이 일치하는 두 각의 짝을 모두」로 바꾸면 쌍 비교가 늘어 ★2~3 (2) 「제3사분면의 각이 아닌 것」으로 바꾸면 132-323 골조와 결합 ★2 (3) 선택지를 $\theta$, $\theta+180^\circ$, $-\theta$ 꼴 문자식으로 주면 Mₐ 상승·I-RT 발생 ★3.'
```

```yaml
- id: GN-ALG-133-325
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $2\theta$ 가 제$4$사분면의 각일 때 $\theta$ 를 나타내는 동경이 존재하는 사분면을 모두 구하기.
  category: '$2\theta$ 의 사분면 부등식 → 2로 나누기 → $n$ 의 홀짝 분기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「$2\theta$ 가 제4사분면」을 $360^\circ n+270^\circ<2\theta<360^\circ n+360^\circ$ 로 옮긴 뒤 2로 나눠 $\theta$ 의 구간으로 바꿈'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$n$ 의 홀짝에 따라 $\theta$ 의 구간이 두 갈래($180^\circ$ 어긋남)로 갈리고 둘 다 답에 들어감'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '사분면의 각 — $n\theta$ 의 사분면에서 $\theta$ 의 사분면 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $180^\circ n+135^\circ<\theta<180^\circ n+180^\circ$ 에서 $n=2k$ 면 제2사분면, $n=2k+1$ 이면 $360^\circ k+315^\circ$~$360^\circ k+360^\circ$ 로 제4사분면이다. 조건이 $\theta$ 가 아니라 $2\theta$ 에 걸려 있어 부등식을 먼저 세우지 않으면 손을 못 대고(T-범위), 홀짝 분기를 빠뜨리면 답이 절반만 나온다.
    확인체크지만 직전 필수 예제 133-e2 와 골조가 같아 출발점 ★2 · 통찰 2개·M_total 7 → +1 조정해 ★3. [분류 이슈] tag 「확인체크」의 벤더 신호(★1 출발)와는 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: '$360^\circ n+270^\circ<2\theta<360^\circ n+360^\circ$ → 2로 나눠 $180^\circ n+135^\circ<\theta<180^\circ n+180^\circ$ → $n$ 홀짝 두 갈래 → 제2·제4사분면'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '제$2$사분면, 제$4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/133-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '배수(2·3·4)와 $n\theta$ 의 사분면(제1~제4)을 바꿀 수 있다. 제약: 배수 $m$ 이면 분기는 $m$ 갈래이고 구간 폭은 $90^\circ/m$ 이라 $m=2$ 일 때 두 사분면, $m=3$ 이면 세 사분면이 답이 된다. $\theta$ 구간의 끝이 $90^\circ$ 의 배수와 일치하면(제4사분면·$m=2$ 의 $180^\circ$ 처럼) 경계에서 동경이 축 위에 놓이므로 부등호를 엄격 부등으로 유지해야 한다.'
    creative: '(1) 「$\theta$ 가 될 수 없는 사분면」으로 뒤집기(★3 유지) (2) 답을 사분면이 아니라 $0^\circ<\theta<360^\circ$ 범위의 $\theta$ 구간으로 요구하면 열거가 붙어 ★3 (3) $\theta/2$ 와 $2\theta$ 를 함께 묻는 결합형은 분기가 겹쳐 ★4 (4) 배수를 $m=1$ 로 두면 분기가 사라져 ★1.'
```

```yaml
- id: GN-ALG-134-e3
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $0^\circ<\theta<360^\circ$ 에서 각 $\theta$ 의 동경과 각 $5\theta$ 의 동경이 일치할 때 $\theta$ 를 모두 구하기.
  category: '동경 일치 조건 $5\theta-\theta=360^\circ\times n$ → $\theta=90^\circ n$ → 범위로 $n$ 열거'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「두 동경이 일치한다」는 배치 조건을 두 각의 차가 $360^\circ$ 의 정수배라는 등식 $5\theta-\theta=360^\circ\times n$ 으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 동경의 위치 관계 — 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건식만 세우면 $4\theta=360^\circ n$, $\theta=90^\circ n$ 이고 $0^\circ<\theta<360^\circ$ 가 $n=1,2,3$ 으로 좁혀 준다(T-범위·T-경계 — 양 끝 $n=0,4$ 를 넣으면 범위 위배). 이 단원의 위치 관계 네 문항 중 조건식이 가장 단순한 형태(차 $=360^\circ n$)이고 본문이 그 유도를 보여 주는 대표 예제다.
    필수 예제 ★2 출발 · 통찰 1개(EQV d1)·M_total 7 → ★2 유지. 차 조건을 세우는 순간 나머지는 나눗셈 한 번이라 +1 근거가 약하다.
  tier: star_2
  mechanism_primary: '동경 일치 → $5\theta-\theta=360^\circ n$ → $\theta=90^\circ n$ → $0^\circ<\theta<360^\circ$ 로 $n=1,2,3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90^\circ$, $180^\circ$, $270^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/134-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '배수 $k$ 를 바꾸면 $\theta=\dfrac{360^\circ n}{k-1}$ 이라 해의 개수가 $k-2$ 개가 된다($5\theta$ → 3개, $7\theta$ → 5개, $3\theta$ → 1개). 제약: $k-1$ 이 $360$ 의 약수가 되게 두어야 $\theta$ 가 정수 각으로 떨어지고, 범위를 $0^\circ<\theta<360^\circ$ 로 두면 양 끝이 제외되므로 $n$ 의 최대·최소를 발문 범위와 함께 검토해야 한다.'
    creative: '(1) 「$\theta$ 의 개수」만 묻기(★2 유지) (2) 「모든 $\theta$ 의 합」으로 바꾸면 134-327 처럼 해를 빠짐없이 찾아야 해 ★3 (3) 일치 대신 일직선·반대 방향($+180^\circ$)·축 대칭(합 조건)으로 바꾸면 134-326~328 (4) $\theta$ 와 $k\theta$ 의 동경이 일치할 $k$ 를 거꾸로 묻는 형태는 I-BW 가 붙어 ★4.'
```

```yaml
- id: GN-ALG-134-326
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $90^\circ<\theta<180^\circ$ 에서 각 $\theta$ 의 동경과 각 $7\theta$ 의 동경이 일직선 위에 있고 방향이 반대일 때 $\theta$ 구하기.
  category: '반대 방향 조건 $7\theta-\theta=360^\circ\times n+180^\circ$ → $\theta=60^\circ n+30^\circ$ → 범위로 $n$ 결정'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「일직선 위·방향 반대」라는 기하 배치를 두 각의 차가 $360^\circ n+180^\circ$ 라는 대수 조건으로 옮김(일치 조건의 차 $=360^\circ n$ 과 구별)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 동경의 위치 관계 — 일직선 위·반대 방향"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $6\theta=360^\circ n+180^\circ$ 에서 $\theta=60^\circ n+30^\circ$ 를 얻고 $90^\circ<\theta<180^\circ$ 가 $n=2$ 하나만 남긴다. 어려움은 계산이 아니라 조건식 선택이다 — 「일직선」만 보고 차 $=180^\circ n$ 으로 쓰면 방향이 같은 경우까지 섞이고, 일치 조건($360^\circ n$)을 그대로 쓰면 해가 사라진다(T-부호·T-경계: $n=1$ 의 $90^\circ$ 는 범위 밖).
    확인체크이지만 직전 필수 예제 134-e3 와 같은 출발점 ★2 · I-RT d2 · M_total 7 → +1 조정해 ★3. [분류 이슈] tag 「확인체크」의 벤더 신호(★1 출발)와 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: '반대 방향 → $7\theta-\theta=360^\circ n+180^\circ$ → $\theta=60^\circ n+30^\circ$ → $90^\circ<\theta<180^\circ$ 로 $n=2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$150^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/134-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '배수 $k$ 와 범위를 함께 바꾼다. $\theta=\dfrac{360^\circ n+180^\circ}{k-1}$ 이므로 $k-1$ 이 $180$ 의 약수여야 정수 각이 나온다($7\theta$ → $60^\circ n+30^\circ$, $5\theta$ → $90^\circ n+45^\circ$, $4\theta$ → $120^\circ n+60^\circ$). 제약: 답이 하나가 되게 하려면 범위 폭이 $n$ 의 간격보다 좁아야 하고, 범위 끝이 해와 일치하면(여기서 $90^\circ$) 부등호를 엄격하게 유지해야 한다.'
    creative: '(1) 범위를 $0^\circ<\theta<360^\circ$ 로 넓혀 「모든 $\theta$」를 묻기(열거가 붙어 ★3 유지) (2) 「일직선 위에 있다」만 주면 일치·반대 두 경우를 모두 따져야 해 I-MI 추가 ★4 (3) 두 동경이 이루는 각이 $60^\circ$ 인 조건으로 바꾸면 차 $=\pm60^\circ+360^\circ n$ 두 갈래라 ★4 (4) 방향까지 그림으로 제시하면 I-RT 가 사라져 ★2.'
```

```yaml
- id: GN-ALG-134-327
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0^\circ<\theta<180^\circ$ 에서 각 $\theta$ 의 동경과 각 $4\theta$ 의 동경이 $x$축에 대하여 대칭일 때 모든 $\theta$ 의 크기의 합 구하기.
  category: '$x$축 대칭 조건 $\theta+4\theta=360^\circ\times n$ → $\theta=72^\circ n$ → 범위 안 해를 모두 더하기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$축에 대하여 대칭」이라는 기하 배치를 두 각의 **합**이 $360^\circ$ 의 정수배라는 조건으로 옮김(차 조건이 아니라 합 조건이라는 점이 핵심)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 동경의 위치 관계 — x축 대칭"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $5\theta=360^\circ n$ 에서 $\theta=72^\circ n$, $0^\circ<\theta<180^\circ$ 로 $n=1,2$ 가 살아 $72^\circ$ 와 $144^\circ$ 가 나온다. 앞의 일치·반대 방향 문항이 모두 **차** 조건이었던 것과 달리 축 대칭은 **합** 조건이라 조건식을 그대로 옮겨 쓰면 바로 틀린다. 또 「모든 $\theta$ 의 합」이라 해를 하나만 찾고 멈추면 오답이 된다(T-범위).
    확인체크 · 출발점 ★2(직전 필수 예제 134-e3) · I-RT d2 · M_total 7 → +1 조정해 ★3. [분류 이슈] tag 「확인체크」의 벤더 신호(★1 출발)와 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: '$x$축 대칭 → $\theta+4\theta=360^\circ n$ → $\theta=72^\circ n$ → $0^\circ<\theta<180^\circ$ 의 $n=1,2$ 를 모두 더하기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$216^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/134-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '배수 $k$ 를 바꾸면 $\theta=\dfrac{360^\circ n}{k+1}$ 이다($4\theta$ → $72^\circ n$, $5\theta$ → $60^\circ n$, $2\theta$ → $120^\circ n$). 제약: $k+1$ 이 $360$ 의 약수여야 정수 각이 되고, 범위 안 해가 2개 이상 남아야 「모든 $\theta$ 의 합」이 의미를 가진다. 해가 $90^\circ$·$180^\circ$ 가 되면 두 동경이 $x$축 위에서 겹쳐 대칭이 자명해지므로 범위에서 제외한다.'
    creative: '(1) 합 대신 「모든 $\theta$」를 나열하게 하기(★3 유지) (2) $y$축 대칭으로 바꾸면 합 $=360^\circ n+180^\circ$ 인 134-328 (3) 원점 대칭(= 반대 방향)으로 바꾸면 차 조건인 134-326 (4) 「$x$축 대칭이면서 제2사분면」처럼 사분면 조건을 겹치면 부등식 분기가 붙어 ★4 (5) 대칭축을 직선 $y=x$ 로 바꾸면 합 $=360^\circ n+90^\circ$ 를 스스로 유도해야 해 ★4.'
```

```yaml
- id: GN-ALG-134-328
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0^\circ<\theta<180^\circ$ 에서 각 $\theta$ 의 동경과 각 $3\theta$ 의 동경이 $y$축에 대하여 대칭일 때 $\theta$ 를 모두 구하기.
  category: '$y$축 대칭 조건 $\theta+3\theta=360^\circ\times n+180^\circ$ → $\theta=90^\circ n+45^\circ$ → 범위로 $n$ 열거'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$y$축에 대하여 대칭」을 두 각의 합이 $360^\circ n+180^\circ$ 라는 조건으로 옮김($x$축 대칭의 합 $=360^\circ n$ 에 $180^\circ$ 가 더해지는 이유를 그림으로 확인해야 함)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 동경의 위치 관계 — y축 대칭"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $4\theta=360^\circ n+180^\circ$ 에서 $\theta=90^\circ n+45^\circ$ 이고 $0^\circ<\theta<180^\circ$ 가 $n=0,1$ 을 남겨 $45^\circ,135^\circ$ 가 된다. 네 위치 관계(일치·반대·$x$축·$y$축) 중 조건식이 가장 헷갈리는 형태로, $x$축 대칭의 합 $=360^\circ n$ 과 혼동하면 $\theta=90^\circ n$ 이 나와 통째로 틀린다(T-표기·T-경계).
    확인체크 · 출발점 ★2(직전 필수 예제 134-e3) · I-RT d2 · M_total 7 → +1 조정해 ★3. [분류 이슈] tag 「확인체크」의 벤더 신호(★1 출발)와 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: '$y$축 대칭 → $\theta+3\theta=360^\circ n+180^\circ$ → $\theta=90^\circ n+45^\circ$ → $0^\circ<\theta<180^\circ$ 로 $n=0,1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$45^\circ$, $135^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/134-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\theta=\dfrac{360^\circ n+180^\circ}{k+1}$ 이므로 $k+1$ 이 $180$ 의 약수여야 정수 각이 된다($3\theta$ → $90^\circ n+45^\circ$, $5\theta$ → $60^\circ n+30^\circ$, $2\theta$ → $120^\circ n+60^\circ$). 제약: 범위 폭을 $n$ 의 간격의 2배 안팎으로 잡아야 해가 2개로 떨어지고, 해가 $90^\circ$ 가 되면 두 동경이 $y$축 위에서 겹쳐 대칭이 자명해지므로 그 조합은 피한다.'
    creative: '(1) 「모든 $\theta$ 의 합」으로 바꾸기(134-327 과 동형 · ★3 유지) (2) 「$x$축 대칭 또는 $y$축 대칭」으로 합치면 두 조건식 분기라 I-MI 추가 ★4 (3) $\theta$ 와 $3\theta$ 대신 $\theta$ 와 $k\theta$ 로 두고 「$y$축 대칭인 $\theta$ 가 존재할 $k$」를 묻는 역방향은 I-BW ★4~5 (4) 대칭 관계를 그림으로 제시하면 조건식 유도가 사라져 ★2.'
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 4 · ★2 3 · ★3 5 · ★4 0 · ★5 0
- 통찰형 6(133-e2 · 133-325 · 134-e3 · 134-326 · 134-327 · 134-328) · 절차형 6 · premium 0
- 구역별: 개념원리 익히기 4문(전부 ★1) · 필수 예제 3문(★2 2 · ★3 1) · 확인체크 5문(★2 1 · ★3 4)
- M_total 분포: 4 (1문) · 5 (3문) · 6 (2문) · 7 (6문) — 노동량 자체는 가볍고, 변별은 「조건을 식으로 옮기기」와 「$n$ 을 범위로 결정하기」에서만 생긴다
- 통찰 라벨 8개: I-RT 3(134-326·327·328 — 기하 배치 → 각의 합·차 조건식) · I-EQV 3(133-e2 · 133-325 · 134-e3) · I-MI 2(133-e2 · 133-325 — $n$ 의 나머지·홀짝 분기). depth 3 은 없음
- type_hint 상위: 「두 동경의 위치 관계」 4(134-e3·326·327·328) · 「일반각 $360^\circ\times n+\alpha^\circ$ 표현」 3(132-321·132-322·133-e1) · 「사분면의 각 분기」 2(133-e2·133-325) · 「같은 동경 찾기」 1(133-324) · 「동경 작도」 1(132-320) · 「사분면 판정」 1(132-323)
- 함정 축: T-범위(0°≤α<360° 유지·범위 안 $n$ 열거) 11문 · T-부호(음수 각의 몫 내림·반대 방향) 6문 · T-경계(부등식 끝값·축 위에 놓이는 각) 6문
- 그림: 1문(`crop:fig-132-321.png`) · 선택형 2문(133-e1 · 133-324) · 나머지는 단답·서술 지시형
- 대상층: 하위권 4 · 중하위권 2 · 중위권 4 · 중상위권 2(I-MI 가 든 133-e2 · 133-325 는 중위권 허용 통찰 목록 밖이라 중상위권)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-133-e2 | 벤더 「필수」는 ★2 출발이나 통찰 2개(EQV d1·MI d2)·M_total 7 로 ★3 판정(1단 차이). $n$ 분기를 빼면 ★2 문항이 된다 | ★2 / ★3 |
| GN-ALG-133-325 | tag 「확인체크」의 벤더 신호는 ★1 출발이나 직전 필수 예제 133-e2 와 골조가 같아 출발점을 ★2 로 잡고 통찰 2개로 +1 → ★3(벤더 신호와 2단) | ★1 / ★3 |
| GN-ALG-134-326 | 같은 확인체크 관례로 ★3. 다만 범위 $90^\circ<\theta<180^\circ$ 가 $n$ 을 하나로 좁혀 주어 실제 체감은 ★2~3 경계 | ★2 / ★3 |
| GN-ALG-134-327 | 확인체크 벤더 신호와 2단. 「모든 $\theta$ 의 합」이라 해를 빠뜨리면 바로 오답이어서 ★3 유지 | ★2 / ★3 |
| GN-ALG-134-328 | 확인체크 벤더 신호와 2단. 합 $=360^\circ n+180^\circ$ 를 외워서 쓰면 ★2, 그림으로 유도하면 ★3 — 암기 여부로 체감이 갈리는 문항 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **이 범위의 축은 셋**이다. ① 일반각 표현($360^\circ\times n+\alpha^\circ$ 환원 · 작도 · 같은 동경 판정 · 사분면 판정) ② $\theta$ 와 $m\theta$·$\theta/m$ 의 사분면(부등식 + $n$ 분기) ③ 두 동경의 위치 관계(합·차 조건식 + 범위로 $n$ 결정). 12문항이 모두 이 셋 안에 들어온다.
- **통합해도 되는 것**: 132-320(작도) · 132-321(그림 → 일반각) · 132-322(각 → 일반각) · 132-323(사분면) · 133-e1 · 133-324 는 전부 「$360^\circ$ 로 나눠 $\alpha$ 만 남기기」 하나로 묶인다. 묻는 형식(그림·선택형·사분면)만 다르고 base ★ 는 같다. 134-e3·326·327·328 도 「위치 관계 → 합·차 조건식」 한 유형으로 묶고 관계 4종(일치 · 반대 방향 · $x$축 대칭 · $y$축 대칭)을 변형 파라미터로 두는 편이 낫다.
- **따로 세워야 할 것**: ① **$\theta/m$·$m\theta$ 의 사분면**(133-e2 · 133-325) — 부등식을 $m$ 으로 나눈 뒤 $n\bmod m$ 분기가 필수라 위 두 축의 단순 합이 아니다. 답이 「사분면 집합」이어서 채점 형태도 다르다. ② **범위가 좁아 해가 하나인 위치 관계**(134-326)와 **해가 여럿이라 합·열거를 요구하는 위치 관계**(134-327·328) — 같은 조건식이라도 범위 설계가 ★ 를 바꾸므로 카탈로그에서 base ★ 를 나눌지 결정해야 한다.
- 이 범위에는 ★4 이상이 없다. ★4 슬롯을 만들려면 위치 관계 + 사분면 조건을 겹치거나(합 조건 + 부등식 분기), 「일직선 위에 있다」처럼 일치·반대를 모두 따지게 해 I-MI 를 추가해야 한다. 호도법·삼각함수 단원과 묶어야 ★4~5 가 자연스러우므로 base ★ 는 14단원 단독이 아니라 삼각함수 도입부 전체 범위에서 잡는 것이 맞다.
