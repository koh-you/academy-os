---
name: mechanism-데이터-GN-GEO-11
description: 개념원리 기하 11 삼수선 정리(1/1 · 95~96쪽 6문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 11 삼수선 정리
  unit_code: GEO-11
  part: "1/1"
  extract_range: "95~96쪽 · 95-e6~96-182"
  total_problems: 6
  unit_total: 6
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 11 삼수선 정리 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 95~96쪽, 단원 「11 삼수선 정리」 6문항 전수를 다룬다. 전사본 group 은 `필수·발전 예제` 한 구역뿐이고, 그 안에 필수 예제 2문(`95-e6` 삼수선 정리 · `96-e7` 삼수선 정리의 활용)과 각 예제 바로 뒤에 붙는 확인체크 4문(`95-179`·`95-180`·`96-181`·`96-182`)이 번갈아 놓여 있다. 개념원리 고등의 난이도 신호는 구역과 예제 태그인데, **이 범위의 확인체크는 독립된 「개념원리 익히기」 통번호가 아니라 바로 위 필수 예제의 짝 문제**라서 출발점을 ★1 이 아니라 그 예제의 ★2 로 읽었다(골조가 예제와 같다). 이 해석 때문에 활용 계열 확인체크 2문이 확인체크 태그의 문자 그대로의 출발점과 2단 벌어지므로 파일 끝 「분류 이슈 목록」에 기록해 두었다.

여섯 문항은 두 골조로 갈린다. 95쪽 계열은 **수선의 발 O·H 가 발문에 이미 주어진** 배치에서 직각삼각형 두 개를 오가며 피타고라스(또는 삼각비)를 쓰는 절차형이고, 96쪽 계열은 **학생이 직접 보조 수선(꼭짓점 바로 위/아래 점)을 잡아 삼수선 배치를 만들고** 공간의 점-직선 거리를 「평면 안의 점-직선 거리 + 수직 높이」 직각삼각형으로 옮기는 전환 통찰(I-RT)이 들어간다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-95-e6
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평면 α 밖의 점 P 에서 α 에 내린 수선의 발이 O, O 에서 α 위의 선분 AB 에 내린 수선의 발이 H 인 배치.
    OP=2, OH=2√3, AP=5 일 때 선분 AH 의 길이.
  category: "삼수선 정리로 PH⊥AB 확정 → 직각삼각형 두 개에서 피타고라스 2회"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리 기본 — 수선의 발이 주어진 배치에서 선분 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점 P·수선의 발 O·H 가 발문에 모두 주어져 배치를 학생이 세울 필요가 없다.
    삼수선 정리로 PH⊥AB 를 확정한 뒤 △POH 에서 PH, △PHA 에서 AH 를 한 줄씩 계산하면 끝나는 3단계.
    통찰 0·M_total 4 라 −1 후보지만 세 개의 수직 관계(PO⊥α, OH⊥AB, PH⊥AB)를 구분하는 단계가 있어
    필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "PO⊥α·OH⊥AB → 삼수선 정리로 PH⊥AB → △POH 에서 PH → △PHA 에서 AH"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: "crop:fig-95-e6.png"
  latex: latex-bank/gn-geo/items/95-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP·OH·AP 를 바꿀 수 있다. 제약: PH=√(OP²+OH²) 가 정수나 간단한 무리수가 되게 (OP,OH) 를 (2,2√3)·(3,4)·(1,2√2) 계열로 잡고, AP>PH 여야 AH 가 실수다. AP²−PH² 가 완전제곱이면 답이 정수로 떨어진다. 그림 라벨 P·O·H·A·B 는 고정."
    creative: "(1) 구하는 변을 AH 대신 OA(=√(OH²+AH²))나 PB 로 바꾸기(★2 유지) (2) AH 를 주고 OP 를 역으로 묻기 → 역방향 1단계(I-BW d1) ★2~3 (3) 수선의 발 O·H 를 발문에서 지우고 '점 P 와 직선 AB 사이의 거리'만 주면 배치 구성이 학생 몫이 되어 96쪽 활용 계열(★3)로 올라간다."
```

```yaml
- id: GN-GEO-95-179
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    95-e6 과 같은 P·O·H 배치에서 OP=4, OH=3, AH=√7 일 때 선분 PA 의 길이.
  category: "삼수선 정리 → △POH 에서 PH → △PHA 에서 빗변 PA"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리 기본 — 수선의 발이 주어진 배치에서 선분 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    바로 위 필수 예제와 배치·도구가 같고 구하는 변만 반대 방향(PH 를 거쳐 빗변 PA)이다.
    (OP,OH)=(4,3) 이라 PH=5 가 바로 나오고 PA=√(PH²+AH²) 한 줄.
    확인체크 태그만 보면 ★1 출발이지만 예제의 짝 문제라 같은 ★2 로 둔다. 통찰 없음.
  tier: star_2
  mechanism_primary: "삼수선 정리로 PH⊥AB → △POH 에서 PH=5 → △PHA 에서 PA=√(PH²+AH²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-95-179.png"
  latex: latex-bank/gn-geo/items/95-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OP,OH) 를 (4,3)·(12,5)·(8,6) 같은 피타고라스 쌍으로 두면 PH 가 정수. AH 는 √7 처럼 무리수여도 되지만 PH²+AH² 가 완전제곱이거나 √ 앞이 정리되는 값이어야 답이 깔끔하다. AH 대신 OA 를 주면 OA²=OH²+AH² 를 먼저 써야 해 단계가 하나 는다."
    creative: "(1) PA 대신 △PAB 의 넓이를 묻기(AB 길이를 추가로 줘야 함 · ★2) (2) PA 를 주고 OH 를 역으로 묻기(★2) (3) 선분 AB 의 양 끝을 모두 주고 PA·PB 를 비교하게 하면 H 를 기준으로 한 대칭 관찰이 붙어 ★3."
```

```yaml
- id: GN-GEO-95-180
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    같은 P·O·H 배치에서 AP=4√2, ∠PAH=60°, ∠PHO=45° 일 때 선분 OH 의 길이.
  category: "삼수선 정리 → 두 직각삼각형에서 삼각비 2회(길이 대신 각이 조건)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리 기본 — 각이 주어진 배치에서 삼각비로 선분 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이 대신 각이 주어져 피타고라스가 삼각비로 바뀐 형태다. △PAH 는 H 가, △POH 는 O 가 직각이라는
    위치 구분이 유일한 함정(T-표기)이고, 그 구분만 되면 PH=AP sin60°, OH=PH cos45° 두 줄이다.
    무리수 곱이 두 번이라 Mk=2·M_total 5. 통찰 없는 절차형이라 확인체크 짝 문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "삼수선 정리로 ∠AHP=90° → △PAH 에서 PH=AP sin60° → △POH(∠O=90°)에서 OH=PH cos45°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-95-180.png"
  latex: latex-bank/gn-geo/items/95-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AP 와 두 각(∠PAH, ∠PHO)을 바꾼다. 제약: 두 각 모두 예각이고 특수각(30·45·60)이어야 답이 근호로 정리된다. AP 는 sin·cos 의 √2·√3 을 흡수하는 형태(4√2, 6, 2√6)로 잡는다."
    creative: "(1) OH 대신 OP(=PH sin45°)나 OA 를 묻기(★2 유지) (2) 각 하나를 길이로 바꿔 삼각비+피타고라스 혼합형으로(★2) (3) ∠PHO 를 '평면 α 와 평면 PAB 가 이루는 각'으로 서술하면 이면각의 정의를 해석하는 단계가 더해져 ★3."
```

```yaml
- id: GN-GEO-96-e7
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직육면체 ABCD-EFGH 에서 AD=1, AE=2, DC=3 일 때, 점 D 에서 윗면의 대각선 EG 에 내린 수선의 발을 I 라 하고 선분 DI 의 길이를 구하는 문제.
  category: "보조 수선 DH 구성 → 윗면에서 H→EG 거리 → 삼수선 정리로 DI"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 점-직선 거리 DI 를 「윗면 직사각형 안의 점-직선 거리 HI」와 「수직 높이 DH」로 이루어진 평면 직각삼각형으로 전환(수선의 발이 주어지지 않아 H 를 학생이 잡아야 함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리의 활용 — 직육면체에서 점과 면 대각선 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    95쪽 계열과 달리 수선의 발이 주어지지 않아, 학생이 D 바로 위 꼭짓점 H 를 잡아 DH⊥윗면 배치를
    스스로 만들어야 한다. 그 뒤 윗면 직사각형에서 EG=√10, HI=EH·HG/EG 를 넓이 관계로 구하고
    삼수선 정리로 DI⊥EG 를 보장받아 △DHI 로 마무리한다. 공간→평면 전환 통찰(I-RT d2)·유리화까지
    M_total 6 이라 필수 예제 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "DH⊥윗면 EFGH → 윗면에서 EG=√10·HI=EH·HG/EG → 삼수선 정리로 DI⊥EG → △DHI 에서 DI=√(DH²+HI²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7\sqrt{10}}{10}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-96-e7.png"
  latex: latex-bank/gn-geo/items/96-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD·DC·AE 를 바꾼다. 제약: EG=√(DC²+AD²), HI=DC·AD/EG, DI=√(AE²+HI²) 가 모두 정리돼야 하므로 (DC,AD) 는 (3,1)·(4,3)·(2,1) 처럼 대각선이 간단한 쌍으로, AE 는 마지막 근호가 한 번에 유리화되는 값으로 고른다. 꼭짓점 라벨(ABCD-EFGH, E 가 A 위)은 그림과 함께 고정."
    creative: "(1) DI 대신 △DEG 의 넓이나 점 D 와 평면 EFGH 사이의 거리를 묻기(★2~3) (2) 수선의 발을 EG 가 아니라 면 대각선 EC 나 공간 대각선에 내리게 하면 배치가 한 층 더 꼬여 ★4 후보 (3) 밑면을 정사각형으로 두면 HI 가 대각선의 절반이라 계산이 한 줄로 줄어 ★2."
```

```yaml
- id: GN-GEO-96-181
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    밑면이 직각삼각형인 삼각기둥 ABC-DEF 에서 AC=3, BC=4, AD=1 일 때, 점 C 에서 선분 DE 에 내린 수선의 발을 H 라 하고 선분 CH 의 길이를 구하는 문제.
  category: "보조 수선 CF 구성 → 직각삼각형 밑면의 높이 = F→DE 거리 → 삼수선 정리로 CH"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 점-직선 거리 CH 를 「윗면(밑면과 합동)에서 C 에 대응하는 점과 DE 사이의 거리」와 「기둥의 높이 CF」의 평면 직각삼각형으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리의 활용 — 각기둥에서 점과 윗면 모서리 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직육면체판 96-e7 을 삼각기둥으로 옮긴 문제. C 위의 꼭짓점 F 를 잡아 CF⊥윗면 배치를 만들고,
    윗면 직각삼각형에서 F 와 DE 사이 거리(= 밑면에서 C 에서 AB 에 내린 높이 AC·BC/AB)를 구한 뒤
    삼수선 정리로 CH⊥DE 를 보장받아 △CFH 로 마무리한다. 3·4·5 라 수치는 정수로 떨어져 Mk=1.
    [분류 이슈] 태그는 확인체크(문자 그대로면 ★1 출발)지만 골조가 필수 예제 「삼수선 정리의 활용」과 같아 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "CF⊥윗면 DEF → 윗면에서 F→DE 거리 = AC·BC/AB = 12/5 → 삼수선 정리로 CH⊥DE → △CFH 에서 CH=√(CF²+FH²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{13}{5}$'
  answer_source: "답지"
  figure: "crop:fig-96-181.png"
  latex: latex-bank/gn-geo/items/96-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC·BC·AD 를 바꾼다. 제약: 밑면이 직각삼각형이라 높이는 AC·BC/AB 이고 (AC,BC) 가 (3,4)·(6,8)·(5,12) 같은 정수 피타고라스 쌍일 때 깔끔하다. CH 가 유리수로 떨어지려면 높이와 AD 가 다시 피타고라스 쌍을 이뤄야 한다(1 과 12/5 → 13/5)."
    creative: "(1) CH 대신 △CDE 의 넓이를 묻기(★3) (2) 밑면의 직각을 C 가 아니라 A 로 옮기면 높이 계산이 달라져 배치를 다시 세워야 함(★3) (3) 기둥을 사기둥으로 바꾸면 CF⊥윗면 이 깨져 삼수선 정리가 바로 안 먹히고 ★4 이상 (4) 구하는 수선의 발을 DE 대신 DF 에 두면 밑면 쪽 거리로 바뀌어 ★2~3."
```

```yaml
- id: GN-GEO-96-182
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직육면체 ABCD-EFGH 에서 AB=AE=1, AD=2 일 때, 점 D 에서 EG 에 내린 수선의 발을 I 라 하고 ∠DIH=θ 라 할 때 sinθ 의 값.
  category: "삼수선 배치로 DI 계산 → △DHI(∠H=90°)에서 sinθ=DH/DI"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점-직선 거리 DI 와 각 θ 를 모두 「윗면 안의 거리 HI」·「높이 DH」로 이루어진 평면 직각삼각형 DHI 하나로 옮겨 해결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리의 활용 — 점과 면 대각선의 거리에서 각의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    96-e7 과 같은 직육면체 배치에서 EG=√5, HI=AB·AD/EG, DI=√(DH²+HI²) 까지 간 뒤,
    ∠DIH 를 △DHI 의 각으로 읽어 sinθ=DH/DI 를 계산하는 단계가 하나 더 붙는다.
    θ 를 이면각이나 공간각으로 오해하지 않고 직각삼각형 DHI 의 각으로 확정하는 것이 함정(T-표기).
    전환 통찰(I-RT d2)+추가 단계로 M_total 6.
    [분류 이슈] 확인체크 태그 기준이면 ★1 출발이나 활용 예제와 같은 골조 + 한 단계 추가라 ★3.
  tier: star_3
  mechanism_primary: "DH⊥윗면 → EG=√5·HI=AB·AD/EG → 삼수선 정리로 DI⊥EG, DI=√(DH²+HI²) → △DHI 에서 sinθ=DH/DI"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{5}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-96-182.png"
  latex: latex-bank/gn-geo/items/96-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AD·AE 를 바꾼다. 제약: sinθ=DH/DI=AE/√(AE²+HI²) 이고 HI=AB·AD/√(AB²+AD²) 이므로, AE 와 HI 가 피타고라스 쌍을 이룰 때만 sinθ 가 유리수·간단한 근호로 떨어진다(1 과 2/√5 → DI=3/√5). (AB,AD,AE) 는 (1,2,1)·(3,4,·) 계열에서 고른다."
    creative: "(1) sinθ 대신 tanθ(=DH/HI)나 cosθ 를 묻기 — tanθ 는 DI 를 구할 필요가 없어 한 단계 짧아 ★2~3 (2) θ 를 '평면 DEG 와 윗면이 이루는 각'으로 서술하면 이면각 정의 해석이 더해져 ★4 (3) 직육면체를 정육면체로 바꾸면 HI 가 대각선의 절반이라 계산이 한 줄로 줄어 ★2 (4) sinθ 값을 주고 AE 를 역으로 묻기(I-BW 추가 · ★3~4)."
```

## 표본 판정 요약 (6문)

- ★ 분포: ★1 0 · ★2 3 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(모두 I-RT depth 2) · 절차형 3 · premium 0
- type_hint: 「삼수선 정리 기본 — 수선의 발이 주어진 배치」 3(`95-e6`·`95-179`·`95-180`, 그중 1문은 삼각비판) · 「삼수선 정리의 활용 — 입체에서 점-직선 거리」 3(`96-e7`·`96-181`·`96-182`)
- M_total 분포: 4 두 문 · 5 두 문 · 6 두 문 (최대 6 — 이 단원은 노동량보다 배치 구성이 변별점)
- 그림: 6문 전부 크롭 있음(`crop:fig-95-e6.png` ~ `crop:fig-96-182.png`). 95쪽 3문은 발문이 배치를 모두 서술해 그림 없이도 골조가 서고, 96쪽 3문은 꼭짓점 라벨 규약(ABCD-EFGH · E 가 A 위 / ABC-DEF · D 가 A 위)이 그림과 묶여 있다.
- 대상층: 중하위권 3 · 중위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-96-181 | 태그는 「확인체크」(규칙 문자 그대로면 ★1 출발)인데 골조·M·통찰이 바로 위 필수 예제 「삼수선 정리의 활용」과 같음. 출발점을 예제 기준(★2)으로 읽고 전환 통찰로 +1 → ★3 | ★2 / ★3 |
| GN-GEO-96-182 | 위와 같은 사유 + sinθ 단계가 하나 더 붙음. 확인체크 태그 기준이면 ★1 출발이라 라벨과 2단 차이 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 두 개뿐이다. **「삼수선 정리 기본(수선의 발이 주어진 배치)」** 과 **「삼수선 정리의 활용(수선의 발을 학생이 구성하는 입체)」**. 둘은 통합하면 안 된다 — 전자는 통찰 0 절차형, 후자는 보조 수선 구성 + 공간→평면 전환(I-RT)이 필수라 base ★ 가 1단 갈린다.
- 기본 계열 안에서 「길이 조건(피타고라스)」과 「각 조건(삼각비)」은 골조가 같아 **하나의 유형으로 통합**해도 된다(`95-e6`·`95-179` vs `95-180`). 변형 시 조건 종류만 바꾸는 축으로 쓰면 된다.
- 활용 계열은 입체 종류(직육면체 / 각기둥)로 나눌 필요가 없다. `96-e7` 과 `96-181` 은 「밑면(또는 윗면)에서 점-직선 거리 구하기 + 높이와 피타고라스」로 동일하다. 대신 **마무리가 길이냐 각의 삼각비냐**(`96-182`)는 별도 하위 유형으로 세우는 편이 변형 설계에 유용하다.
- 카탈로그가 생기면 활용 계열의 base ★ 를 3 으로, 기본 계열을 2 로 두고 v3.8 산식으로 `effective_star` 를 재산정하면 이 파일의 라벨과 일치한다.
