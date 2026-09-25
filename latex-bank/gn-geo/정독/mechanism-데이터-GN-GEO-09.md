---
name: mechanism-데이터-GN-GEO-09
description: 개념원리 기하 09 직선과 평면의 평행(1/1 · 87쪽 · 3문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 09 직선과 평면의 평행
  unit_code: GEO-09
  part: "1/1"
  extract_range: "87~87쪽 · 87-e3~87-165"
  total_problems: 3
  unit_total: 3
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 09 직선과 평면의 평행 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 09단원 「직선과 평면의 평행」 87쪽의 전 3문항(`87-e3` · `87-164` · `87-165`)을 다룬다. 전사본에서 이 범위는 구역이 하나(`필수·발전 예제`)뿐이고, 안에 필수 예제 1문(`87-e3`, tag 「필수」)과 그 예제를 바로 확인하는 확인체크 2문(tag 「확인체크」)이 들어 있다. 개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다 — 「필수」는 ★2, 「확인체크」는 개념 확인이므로 ★1 을 출발점으로 잡고 M_total·통찰로 ±1 조정했다.

세 문항은 모두 **공간의 네 점(사면체)에서 네 모서리의 중점이 이루는 사각형**이라는 한 골조를 공유한다. 예제가 「평행사변형임을 증명」이고 확인체크 둘은 같은 결론에 대각선 길이를 넣어 둘레를 구하는 계산형이다. 그래서 이 파일의 주 용도인 숫자 변형·창의 변형에서는 세 블록을 한 묶음으로 다루는 편이 낫고, 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 기하 과목은 유형 카탈로그가 없으므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명 후보만 적어 둔다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-87-e3
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    한 평면 위에 있지 않은 네 점 A, B, C, D에 대하여 네 선분 AB, BC, CD, DA의
    중점을 각각 E, F, G, H라 할 때, 사각형 EFGH가 평행사변형임을 증명하는 문항.
  category: "공통 대각선을 낀 두 삼각형 분해 → 중점연결정리 2회 → 한 쌍의 대변이 평행하고 길이가 같음 → 평행사변형"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간에 흩어진 네 점 조건을 대각선 BD 를 공유하는 두 평면삼각형 ABD·BCD 로 옮겨 중점연결정리가 쓰이게 만드는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사면체 네 모서리의 중점이 이루는 사각형 — 평행사변형 증명(중점연결정리 · 직선과 직선의 평행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각선 BD 를 공유하는 두 삼각형으로 갈라 중점연결정리를 각각 쓰면 EH 와 FG 가 모두 BD 에 평행하고 길이는 BD 의 절반이 되어,
    한 쌍의 대변이 평행하고 길이가 같다는 평행사변형 판정으로 끝난다. 평면 증명과 다른 지점은 EH∥FG 가 동시에 네 점 E, F, G, H 가
    한 평면 위에 있음(평행한 두 직선은 한 평면을 결정)까지 보장한다는 것 하나뿐이라 단계 수는 적다.
    벤더 「필수」 ★2 출발 · 통찰 1개(RT d2) · M_total 6 → 가감 조건에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "대각선 BD 로 두 삼각형 분해 → 중점연결정리 2회(EH, FG) → 한 쌍 대변이 평행·등길이 → 평행사변형"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 (삼각형~$\pt{ABD}$에서 $\seg{EH}\parallel\seg{BD}$, $\seg{EH}=\dfrac{1}{2}\seg{BD}$이고 삼각형~$\pt{BCD}$에서 $\seg{FG}\parallel\seg{BD}$, $\seg{FG}=\dfrac{1}{2}\seg{BD}$이므로 $\seg{EH}\parallel\seg{FG}$, $\seg{EH}=\seg{FG}$. 따라서 사각형~$\pt{EFGH}$는 평행사변형이다.)'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/87-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명 문항이라 고정 수치가 없다. 숫자 변형은 대각선 AC·BD 의 길이를 주고 둘레·변의 길이를 묻는 계산형으로 옮길 때 생기며, 두 값을 짝수로 두어야 중점연결정리의 절반 길이가 정수로 떨어진다. 점 이름과 중점 대응(E=AB, F=BC, G=CD, H=DA)은 답의 평행 관계(EH∥BD, FG∥BD)를 결정하므로 고정한다."
    creative: "(1) BD 대신 AC 를 매개로 EF∥AC, HG∥AC 를 함께 보여 두 쌍 대변으로 증명하게 하기(골조 동일 ★2) (2) AC⊥BD 를 추가해 EFGH 가 직사각형임을 증명(수직 조건을 변 사이 각으로 옮기는 I-EQV 1개 추가 → ★3) (3) AC=BD 를 주고 마름모임을 증명(★3) (4) 중점을 각 모서리의 1:2 내분점으로 바꾸면 평행은 유지되지만 EH 와 FG 의 길이가 달라져 사다리꼴 판정으로 바뀜 — 결론 자체를 학생이 찾아야 하므로 ★3."
```

```yaml
- id: GN-GEO-87-164
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사면체에서 AC=10, BD=8일 때 네 모서리 AB, BC, CD, DA의 중점을 각각
    P, Q, R, S라 하여 만든 사각형 PQRS의 둘레의 길이를 구하는 문항.
  category: "중점연결정리 → 두 쌍의 대변이 각각 AC, BD 의 절반 → 둘레 = AC+BD"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사면체 중점 사각형의 둘레(중점연결정리 · 변과 대각선의 대응)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    PQ 와 RS 는 삼각형 ABC·ACD 의 중점연결선이라 AC 의 절반, QR 과 SP 는 BD 의 절반이므로 둘레는 그대로 AC+BD 다.
    바로 앞 필수 예제의 결론(중점 사각형은 평행사변형)에 수치를 대입하는 한 단계이고, 어느 변이 어느 대각선에 대응하는지만
    헷갈리지 않으면 된다(T-표기 1개). 확인체크 ★1 출발 · 통찰 0 · M_total 4 → 감산 후보이나 하한이라 ★1.
  tier: star_1
  mechanism_primary: "PQ=RS=½AC, QR=SP=½BD → 둘레 = AC+BD = 10+8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$18$'
  answer_source: "답지"
  figure: "crop:fig-87-164.png"
  latex: latex-bank/gn-geo/items/87-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC, BD 의 값만 바꾸면 된다. 둘레가 AC+BD 라서 답은 항상 두 값의 합이고, 두 값을 짝수로 두면 각 변의 길이까지 정수로 유지된다. 그림의 중점 이름과 대응(P=AB, Q=BC, R=CD, S=DA)은 변-대각선 짝을 결정하므로 그림 라벨과 함께 고정한다. 두 대각선을 같은 값으로 두면 마름모가 되어 발문의 의도(서로 다른 두 절반 길이)가 흐려진다."
    creative: "(1) 둘레와 한 대각선을 주고 나머지 대각선의 길이를 묻는 역방향(I-BW 1개 → ★2) (2) AC⊥BD 를 주고 PQRS 의 넓이를 묻기(직사각형임을 먼저 알아채야 함 → ★2~3) (3) PQRS 가 마름모·정사각형이 되는 대각선 조건을 묻기(★3) (4) 중점 대신 삼등분점으로 바꿔 둘레가 (AC+BD)의 상수배로 바뀌게 하면 대응 관계를 다시 세워야 해 ★2."
```

```yaml
- id: GN-GEO-87-165
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 평면 위에 있지 않은 네 점 A, B, C, D에 대하여 네 선분 AB, BC, CD, DA의
    중점을 각각 E, F, G, H라 하고 AC=12, BD=10일 때 사각형 EFGH의 둘레의 길이를 구하는 문항.
  category: "중점연결정리 → 두 쌍의 대변이 각각 AC, BD 의 절반 → 둘레 = AC+BD"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사면체 중점 사각형의 둘레(중점연결정리 · 변과 대각선의 대응)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 확인체크(87-164)와 같은 골조다. EF 와 HG 가 AC 의 절반, EH 와 FG 가 BD 의 절반이므로 둘레는 AC+BD.
    발문이 「사면체」 대신 「한 평면 위에 있지 않은 네 점」으로 되어 있을 뿐 배치는 같고, 점 이름이 예제와 같은 E, F, G, H 라
    예제 결론을 그대로 얹을 수 있어 오히려 더 쉽다. 확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "EF=HG=½AC, EH=FG=½BD → 둘레 = AC+BD = 12+10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$22$'
  answer_source: "답지"
  figure: "crop:fig-87-165.png"
  latex: latex-bank/gn-geo/items/87-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC, BD 의 값. 답이 두 값의 합이므로 87-164 와 숫자만 겹치지 않게 두면 되고, 짝수로 두면 각 변도 정수. 중점 대응(E=AB, F=BC, G=CD, H=DA)과 그림 라벨은 고정한다. 이 문항은 87-164 와 수치만 다른 쌍둥이라 두 문항을 한 시험지에 같이 쓸 때는 한쪽을 아래 창의 변형으로 바꾸는 편이 낫다."
    creative: "(1) 둘레를 주고 AC+BD 를 역으로 묻기(★1~2) (2) EFGH 의 한 변의 길이나 두 대변 길이의 차를 묻기(대응 확인이 핵심 ★1) (3) AC⊥BD 를 주고 넓이를 묻기(★2~3) (4) 중점 사각형이 평행사변형인 이유를 한 줄로 쓰게 붙이면 예제(87-e3)의 증명 골조가 되살아나 통찰형 ★2 로 올라감."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 2 · ★2 1 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(`87-e3` · I-RT d2) · 절차형 2 · premium 0
- 구역 분포: 「필수·발전 예제」 1구역 3문 — 필수 예제 1 · 확인체크 2
- type_hint: 「사면체 중점 사각형의 둘레(중점연결정리)」 2 · 「사면체 중점 사각형의 평행사변형 증명」 1 — 사실상 한 유형의 증명형/계산형 쌍
- M_total: 6 1문 · 4 2문(평균 4.7) · 함정은 모두 T-표기(변-대각선 대응) 1개
- 그림: 2문(`crop:fig-87-164.png` · `crop:fig-87-165.png`) · 나머지 1문은 그림 없는 증명 문항
- 대상층: 중위권 1 · 하위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 세 문항 모두 벤더 신호(필수 ★2 · 확인체크 ★1)와 M·I 판정이 일치해 드리프트 없음 | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 하나뿐이다 — **「사면체 네 모서리의 중점이 이루는 사각형」**. 87-164 와 87-165 는 문자 이름(P,Q,R,S ↔ E,F,G,H)과 대각선 수치만 다른 쌍둥이 문항이라 카탈로그에서는 **한 유형으로 통합**하고, 아래 두 갈래를 base ★ 만 달리해 두는 것이 맞다.
  - 계산형(둘레·변의 길이): base ★1
  - 증명형(평행사변형임을 보이기): base ★2 — 공간의 네 점을 두 평면삼각형으로 옮기는 I-RT 가 상시 붙는다.
- 따로 세워야 할 유형: **중점 사각형의 모양 판정(직사각형·마름모)** — 대각선의 수직·등길이 조건이 추가로 붙어 골조가 한 단계 늘어나므로 위 유형과 분리해 base ★3 후보로 둔다. 이 범위 3문에는 아직 없고 변형 단계에서 만들 갈래다.
- 09단원은 전체가 3문뿐이라 단독 카탈로그 항목으로는 표본이 얇다. 인접 단원(직선·평면의 위치 관계, 삼수선 정리)과 묶어 「공간도형의 평행 관계」 상위 유형군 아래에 배치하는 편이 낫다.
