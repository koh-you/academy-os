---
name: mechanism-데이터-RPM-ALG-06-p2
description: RPM 대수 06 삼각함수의 그래프(2/4 · 유형 03~11) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 06 삼각함수의 그래프
  unit_code: ALG-06
  part: "2/4"
  extract_range: "79~83쪽 · 0588~0620"
  total_problems: 33
  unit_total: 144
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 06 삼각함수의 그래프 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 06 삼각함수의 그래프 단원의 둘째 범위(79~83쪽 · 0588~0620 · 33문)를 다룬다. 전부 「유형」 구역이며 유형 03(cos 그래프 성질) 3문 · 유형 04(tan 그래프 성질) 3문 · 유형 05(미정계수) 3문 · 유형 06(그래프가 주어진 미정계수) 4문 · 유형 07(절댓값 삼각함수) 3문 · 유형 08(그래프 넓이) 3문 · 유형 09(그래프 대칭성) 3문 · 유형 10(일반각 성질) 7문 · 유형 11(일정하게 증가하는 각) 4문이다. 벤더 난이도 신호는 각 유형의 첫 문항(대표문제 · ★2 출발)과 난이도 표시(중하 → M_total 로 ★1~2 · 중 → ★2 · 상중 → ★3)·태그(서술형)로 나타난다. 이 범위에서 ★ 조정은 통찰 없이 두 단계 대입으로 끝나는 M_total 4~5 문항 넷(0590·0593·0595·0612)에 −1 을 적용한 것뿐이고, 통찰 2개인 0620 은 +1 후보였으나 둘 다 d1 표준 기법이라 「상중」 대로 ★3 에 두고 이슈로 기록했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 통찰형은 13문(EQV 3 · SYM 10 · 0620 은 RT+SYM)으로, 유형 08·09·11 의 대칭·짝짓기 골조가 이 범위의 통찰 대부분을 차지한다. 그림이 있는 문항은 12문(유형 06 넷 · 유형 08 셋 · 유형 09 셋 · 0612 삼각함수표 · 0620 사분원)이며 `figure` 에 crop 경로를 적었다. 0600 은 원문의 위상 (2x+1) 이 그림의 최솟점 x=2 와 맞지 않으나 답은 주기만 쓰므로 30 으로 무관하며, 변형 시 맞출 지점을 rationale 과 이슈 표에 남겼다.

## 문항 데이터

### 유형 03 함수 $y=a\cos(bx+c)+d$의 그래프와 성질

```yaml
- id: RPM-ALG-0588
  page: 79
  vendor_label: '유형 03 함수 $y=a\cos(bx+c)+d$의 그래프와 성질'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=2cos(x/2−π/3)+3 의 최댓값·최솟값·주기·지나는 점·평행이동에 대한 설명 중 옳지 않은 것. 5지선다.
  category: "a·d 로 최대·최소, b 로 주기, b 로 묶어 평행이동량 → 보기별 검증"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a cos(bx+c)+d 의 그래프와 성질(최대·최소·주기·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최댓값 2+3=5, 최솟값 1, 주기 2π/(1/2)=4π, x/2−π/3=(1/2)(x−2π/3) 이라 평행이동량은 2π/3 로 ①②③⑤ 참. x=π 대입하면 2cos(π/6)+3=√3+3≠0 이라 ④ 거짓. 보기 다섯을 하나씩 확인하는 절차(Mₛ 2) 뿐이고 함정은 평행이동량을 π/3 로 읽는 T-단위 하나. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=a cos(bx+c)+d → 최대 a+d·최소 −a+d·주기 2π/b·평행이동 (−c/b, d) → 보기별 검증 · 점 (π,0) 은 대입으로 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(2 → 3, −2)·b(1/2 → 2, 1/3)·c(π/3 → π/4, −π/6)·d(3 → −1) 와 거짓 보기의 점 좌표. 제약: 거짓 보기가 정확히 하나여야 하고, 지나는 점 검증이 특수각 대입으로 끝나야 하며 평행이동량 −c/b 가 c 와 달라 T-단위 함정이 살아 있어야 함."
    creative: "(1) 거짓 보기를 평행이동량(c 와 c/b 혼동)으로 옮기기(★2) (2) sin 으로 바꾸고 x축 대칭까지 섞어 「대칭이동 후 평행이동」 순서를 묻기(★2) (3) 그래프 그림을 주고 옳은 것 고르기로 뒤집으면 유형 06 골조와 결합(★3)."
```

```yaml
- id: RPM-ALG-0589
  page: 79
  vendor_label: '유형 03 함수 $y=a\cos(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=cos 2x 의 그래프를 평행이동·대칭이동해 겹쳐질 수 있는 식을 보기(ㄱ~ㄹ)에서 모두 고르기.
  category: "겹쳐짐 ⇔ |a|·|b| 보존 → 보기별로 진폭·주기 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동·대칭이동으로 겹쳐지는 삼각함수 그래프 판별(진폭·주기 보존)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동·대칭이동은 |a| 와 |b| 를 바꾸지 못하므로 ㄴ(b=4)·ㄷ(a=2) 은 탈락. ㄱ 은 cos(2x−5π)=cos 2(x−5π/2) 로 평행이동, ㄹ 은 −cos 2x−1 로 x축 대칭 후 평행이동. 판별 기준이 유형에서 공식처럼 주어지는 표준 절차라 통찰로 세지 않았고, 보기 넷 확인(Mₛ 2)·M_total 5. 벤더 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "겹쳐짐 ⇔ |a|, |b| 보존 → ㄴ(주기 변함)·ㄷ(진폭 변함) 기각 → ㄱ(평행이동)·ㄹ(x축 대칭+평행이동) 채택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수(cos 2x → sin 3x, 2cos x)와 보기의 계수. 제약: 보기 중 |a|·|b| 가 같은 것과 다른 것이 섞여야 하고, ㄱ 처럼 위상이 커 보여도 b 로 묶으면 평행이동인 것을 하나 넣어야 변별됨."
    creative: "(1) sin 과 cos 를 섞어 sin(2x+π/2)=cos 2x 같은 보기를 넣으면 일반각 성질 결합(★2~3) (2) y=cos|2x| 처럼 겹쳐지지 않는 절댓값 보기를 넣어 유형 07 결합(★3) (3) 「겹쳐지도록 하는 평행이동량」을 구하게 하면 EQV 성격 추가(★3)."
```

```yaml
- id: RPM-ALG-0590
  page: 79
  vendor_label: '유형 03 함수 $y=a\cos(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=−2cos 3x 를 x축 방향 −π/3, y축 방향 4 만큼 평행이동한 함수의 최댓값 M·최솟값 m 의 곱 Mm.
  category: "평행이동 식 → 최대·최소는 |a| 와 세로 이동량만으로 결정 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a cos(bx+c)+d 의 그래프와 성질(최대·최소·주기·평행이동)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    옮긴 식은 y=−2cos 3(x+π/3)+4=2cos 3x+4 이지만 정리하지 않아도 최댓값 2+4=6, 최솟값 −2+4=2 로 Mm=12. 가로 이동은 최대·최소에 영향이 없어 부호를 잘못 옮겨도 답이 같다. 식 세우기와 최대·최소 읽기 두 단계(Mₛ 1)·계산 없음·M_total 4. 통찰 0·M_total 4 라 「중」 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "평행이동 식 −2cos 3(x+π/3)+4 → 최대 |a|+d=6·최소 −|a|+d=2 → Mm=12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(−2 → 3, −1/2)·b(3 → 2)·이동량(−π/3, 4 → π/6, −3). 제약: 최대·최소가 정수가 되도록 |a|·d 는 정수, 가로 이동량은 답과 무관하므로 어떤 값이어도 됨."
    creative: "(1) 「M−m 이 8 이 되도록 a」 처럼 역방향으로 묻기(★1~2) (2) 정리한 식 y=2cos 3x+4 의 그래프가 지나는 점까지 묻게 하면 가로 이동이 답에 관여(★2) (3) 최댓값을 갖는 x 의 최솟값(x≥0)을 묻게 하면 위상 처리가 필요(★2~3)."
```

### 유형 04 함수 $y=a\tan(bx+c)+d$의 그래프와 성질

```yaml
- id: RPM-ALG-0591
  page: 79
  vendor_label: '유형 04 함수 $y=a\tan(bx+c)+d$의 그래프와 성질'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=3tan(2x+π/2)+1 의 주기·평행이동량·점근선에 대한 보기(ㄱ~ㄷ) 중 옳은 것.
  category: "b 로 주기 π/b, b 로 묶어 평행이동량, 안쪽 = nπ+π/2 로 점근선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a tan(bx+c)+d 의 그래프와 성질(주기·점근선·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 π/2 로 ㄱ 참. 2x+π/2=2(x+π/4) 라 평행이동량은 −π/4 이지 −π/2 가 아니어서 ㄴ 거짓. 점근선은 2x+π/2=nπ+π/2 에서 x=nπ/2 로 ㄷ 참. 보기 셋 확인(Mₛ 2)에 함정은 ㄴ 의 T-단위 하나. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "주기 π/b=π/2 → 2x+π/2=2(x+π/4) 로 이동량 −π/4 → 점근선 2x+π/2=nπ+π/2 ⇒ x=nπ/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(2 → 3, 1/2)·c(π/2 → π/3, −π)·a·d. 제약: c/b 가 c 와 달라 ㄴ 형 함정이 유지되고, 점근선이 x=(정수배 단위) 로 깔끔히 정리돼야 함."
    creative: "(1) 점근선의 방정식을 x=nπ/2+π/4 처럼 어긋나게 만들어 「점근선 사이에 원점이 있는가」 묻기(★2) (2) 그래프가 지나는 점 (π/8, k) 로 k 를 구하게 해 유형 05 결합(★2) (3) 두 점근선 사이 거리와 y 절편으로 a·b 를 거꾸로 정하게 하면 유형 06 골조(★3)."
```

```yaml
- id: RPM-ALG-0592
  page: 79
  vendor_label: '유형 04 함수 $y=a\tan(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=−2tan(x/3+π)+3 과 주기가 같은 함수를 sin·cos·tan 함수 다섯 중 고르기. 5지선다.
  category: "tan 주기 π/|b| 계산 → 보기별 주기(sin·cos 은 2π/|b|) 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최댓값·최솟값·주기(y=a sin(bx+c)+d · y=a tan bx)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 함수의 주기는 π/(1/3)=3π. 보기 주기는 ① 6π ② 2 ③ π ④ 2π/(2/3)=3π ⑤ 4 라 ④. 여섯 함수의 주기를 공식으로 구해 비교하는 절차(Mₛ 2)이고 함정은 tan 의 주기를 2π/b 로 두는 T-단위. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "tan 주기 π/(1/3)=3π → 보기별 주기 6π·2·π·3π·4 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수의 b(1/3 → 1/2, 2/3)와 보기 계수. 제약: 정답 보기 하나만 주기가 같아야 하고, sin·cos 보기 중 b 가 기준의 2배인 것(주기 같아짐)과 같은 것(주기 2배)을 섞어야 T-단위 함정이 작동함."
    creative: "(1) 「주기가 같은 것의 개수」로 바꾸면 전 보기 검증 강제(★2) (2) |tan| · |sin| 보기를 섞어 절댓값 주기까지 비교(★3 · 유형 07 결합) (3) 두 함수의 주기가 같도록 하는 양수 b 를 구하게 하면 0601 골조(★2)."
```

```yaml
- id: RPM-ALG-0593
  page: 79
  vendor_label: '유형 04 함수 $y=a\tan(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=tan πx 를 x축 방향 1/2 만큼 평행이동한 그래프가 점 (2/3, a) 를 지날 때 a.
  category: "평행이동 식 tan π(x−1/2) → x=2/3 대입 → 특수각 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a tan(bx+c)+d 의 그래프와 성질(주기·점근선·평행이동)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    옮긴 식 y=tan π(x−1/2) 에 x=2/3 을 넣으면 tan(π/6)=√3/3. 이동 방향을 잘못 잡아 tan(7π/6) 을 계산해도 주기 π 때문에 같은 값이 나와 T-부호 함정이 사실상 없다. 식 세우기·대입 두 단계(Mₛ 1)·M_total 4. 통찰 0·M_total 4 라 「중」 출발점에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "평행이동 식 tan π(x−1/2) → x=2/3 대입 → tan(π/6)=√3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(1/2 → 1/3, −1/4)·점의 x 좌표(2/3 → 5/6, 1/12)·안쪽 계수 π. 제약: 대입 결과가 특수각(π/6·π/4·π/3) 의 tan 이어야 하고, 점근선 위의 x 를 고르지 않도록 확인."
    creative: "(1) 점 (2/3, a) 대신 「점근선의 방정식」을 묻기(★1~2) (2) y축 방향 이동까지 붙이고 두 점을 지나게 해 이동량을 역으로 정하기(★2 · 유형 05 결합) (3) 옮긴 그래프와 y=tan πx 가 처음 만나는 양수 x 를 묻기(★3 · 삼각방정식 결합)."
```

### 유형 05 삼각함수의 미정계수 구하기

```yaml
- id: RPM-ALG-0594
  page: 80
  vendor_label: "유형 05 삼각함수의 미정계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=a cos bx+c (a>0, b>0) 가 ㈎ 최댓값−최솟값=6 ㈏ f(x+p)=f(x) 인 양수 p 의 최솟값 3π/2 ㈐ 점 (π/4, 1/2) 통과 를 만족할 때 a+3b+2c.
  category: "조건 셋 → 진폭·주기·한 점 → a, b, c 순서대로 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈏ 「f(x+p)=f(x) 인 양수 p 의 최솟값」 을 주기 2π/b=3π/2 로 읽어 b=4/3"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 미정계수 구하기(최대·최소·주기·함숫값 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 에서 2a=6, a=3. ㈏ 는 주기의 정의를 함수방정식으로 쓴 것이라 2π/b=3π/2, b=4/3. ㈐ 에서 3cos(π/3)+c=1/2, c=−1. a+3b+2c=3+4−2=5. 조건 셋이 매개변수 하나씩에 대응해 순서대로 풀리는 구조(Mₛ 2·Mₐ 2)이고, ㈏ 의 함수방정식을 주기로 옮기는 단계만 06-p1 0584 와 같은 기준으로 EQV d1 로 셌다. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "㈎ 2a=6 → a=3 · ㈏ 2π/b=3π/2 → b=4/3 · ㈐ 3cos(π/3)+c=1/2 → c=−1 → a+3b+2c=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최대·최소 차(6 → 4, 10)·주기(3π/2 → π, 4π/3)·통과점(π/4 → π/6, π/2). 제약: b 가 유리수가 되도록 주기는 π 의 유리수배, 통과점에서 b·x 가 특수각이어야 c 가 유리수로 떨어짐. a+3b+2c 계수는 답이 정수가 되게 조정."
    creative: "(1) ㈏ 를 「그래프가 x축 방향으로 3π/2 만큼 평행이동하면 자기 자신과 겹친다」 로 바꾸면 EQV 유지(★2) (2) ㈐ 를 「최솟값을 갖는 가장 작은 양수 x 가 …」 로 바꾸면 위상 처리 추가(★3) (3) cos 을 tan 으로 바꾸면 최대·최소 조건이 사라져 조건 재설계 필요(★2)."
```

```yaml
- id: RPM-ALG-0595
  page: 80
  vendor_label: "유형 05 삼각함수의 미정계수 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a tan bx (b>0) 의 주기가 π/3 이고 f(π/12)=3 일 때 ab.
  category: "주기 π/b → b · 함숫값 대입 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 미정계수 구하기(최대·최소·주기·함숫값 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    π/b=π/3 에서 b=3, f(π/12)=a tan(π/4)=a=3 이라 ab=9. 공식 한 번·대입 한 번(Mₛ 1)이고 매개변수 둘이라 Mₐ 2 로 M_total 5. 벤더 「중하」 는 ★1~2 출발점인데 통찰 0·두 단계 대입으로 끝나 ★1.
  tier: star_1
  mechanism_primary: "π/b=π/3 → b=3 → a tan(π/4)=3 → a=3 → ab=9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(π/3 → π/2, 2π)·대입점(π/12 → π/8, π/18)·함숫값(3 → −2, √3). 제약: 대입점에 b 를 곱하면 tan 특수각(π/6·π/4·π/3)이어야 하고 tan 값이 0 이 아니어야 a 가 결정됨."
    creative: "(1) tan 을 a sin bx 로 바꾸고 최댓값 조건을 추가(0596 골조 ★2) (2) 「그래프가 두 점을 지난다」 로 주기 조건을 감추면 b 가 방정식 tan(bπ/12)=1 의 최소 양수해(★2~3 · 삼각방정식) (3) 점근선의 방정식 x=π/6+nπ/3 로 주기·위상을 주면 유형 04 결합(★2)."
```

```yaml
- id: RPM-ALG-0596
  page: 80
  vendor_label: "유형 05 삼각함수의 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a sin(x+π/2)+b (a>0) 의 최댓값이 4, f(−π/3)=3/2 일 때 최솟값. 5지선다.
  category: "최댓값 a+b=4 · 함숫값 a/2+b=3/2 연립 → a, b → 최솟값 −a+b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 미정계수 구하기(최대·최소·주기·함숫값 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>0 이라 최댓값 a+b=4. f(−π/3)=a sin(π/6)+b=a/2+b=3/2. 두 식을 빼면 a/2=5/2, a=5, b=−1 이고 최솟값 −a+b=−6. sin(x+π/2)=cos x 로 바꿔도 되지만 필요 없다. 연립 두 식·매개변수 둘(Mₛ 2·Mₐ 2)의 절차이며 함정은 −π/3 대입 시 sin(π/6) 의 부호 정도. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "a+b=4 · a sin(π/6)+b=3/2 → a=5, b=−1 → 최솟값 −a+b=−6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값(4 → 6)·대입점(−π/3 → π/6, −2π/3)·함숫값(3/2 → 1). 제약: 대입점을 옮긴 각 x+π/2 가 특수각이어야 하고 연립해가 정수, a>0 조건과 모순되지 않아야 함."
    creative: "(1) 최댓값 대신 「최댓값과 최솟값의 합이 −2」 로 바꾸면 b 가 바로 나와 순서가 뒤집힘(★2) (2) a>0 조건을 빼면 a 부호에 따라 최댓값이 |a|+b 라 케이스 분기 발생(★3 · MI 후보) (3) 위상 π/2 를 x+π/2 → cos x 로 읽게 하는 일반각 성질 확인을 요구하게 만들면 유형 10 결합(★2)."
```

### 유형 06 그래프가 주어진 삼각함수의 미정계수 구하기

```yaml
- id: RPM-ALG-0597
  page: 80
  vendor_label: "유형 06 그래프가 주어진 삼각함수의 미정계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    그래프(최대 2·최소 −2, x=0 에서 최솟값, 영점 π/4·3π/4·5π/4)가 주어진 y=a sin(bx−c) (a>0, b>0, 0<c<π) 에서 a−b+2c.
  category: "진폭 → a · 영점 간격 → 주기 → b · 한 점(최솟점) 대입 + 범위 → c"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(진폭·주기·위상 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최대 2 라 a=2. 이웃한 영점 π/4, 3π/4 의 간격 π/2 가 반주기라 주기 π, b=2. x=0 에서 최솟값 −2 이므로 sin(−c)=−1, c=π/2+2nπ 에서 0<c<π 로 c=π/2. a−b+2c=π. 진폭·주기·위상을 그림에서 차례로 읽는 표준 절차(Mₛ 2·Mₐ 2)이며 위상 단계에서 부호(T-부호)와 범위 선택(T-범위)이 함정. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "최대 2 → a=2 · 영점 간격 π/2=반주기 → b=2 · (0, −2) 대입 sin(−c)=−1, 0<c<π → c=π/2 → a−b+2c=π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: "crop:fig-0597.png"
  latex: latex-bank/rpm-alg/items/0597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭(2 → 3)·주기(π → 2π, π/2)·최솟점 위치(x=0 → x=π/4) 와 c 의 범위. 제약: 그림의 라벨(영점·극점 좌표)을 함께 고쳐야 하고, 범위 안에 c 가 하나만 있도록 범위 폭을 주기 이하로 유지. 원본 그림 재사용 시 a=2·b=2·c=π/2 고정."
    creative: "(1) 최솟점 대신 「y절편 −2」 만 주면 sin(−c)=−1 로 동일(★2) (2) y=a cos(bx−c) 로 바꾸면 같은 그림에서 c=π 로 답이 달라짐(★2) (3) 그래프 두 개(sin·cos)를 겹쳐 그리고 교점 x 좌표까지 묻게 하면 삼각방정식 결합(★3)."
```

```yaml
- id: RPM-ALG-0598
  page: 80
  vendor_label: "유형 06 그래프가 주어진 삼각함수의 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프(점근선 x=−1/3, 0, 1/3, 2/3 · 영점 1/6 등)가 주어진 y=tan π(ax−b) (a>0, 0<b<1) 에서 a+2b.
  category: "점근선 간격 → 주기 1/a → a · 영점(또는 점근선) 대입 + 범위 → b"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(진폭·주기·위상 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃 점근선 간격 1/3 이 주기이므로 π/(πa)=1/a=1/3, a=3. 점근선 x=1/3 을 넣으면 π(1−b)=π/2, b=1/2 (0<b<1 로 확정) 이고 a+2b=4. y축이 점근선인 것을 그림에서 읽는 것과 b 를 범위로 고르는 것(T-범위·T-부호)이 함정이며, 진폭이 없는 대신 안쪽 π 가 곱해진 형태라 주기 공식 처리에 주의. 표준 절차(Mₛ 2·Mₐ 2)로 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "점근선 간격 1/3=주기 1/a → a=3 · 점근선 x=1/3 대입 π(1−b)=π/2, 0<b<1 → b=1/2 → a+2b=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-0598.png"
  latex: latex-bank/rpm-alg/items/0598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(1/3 → 1/2, 2)·위상 b(1/2 → 1/4)·b 의 범위. 제약: 그림의 점근선·영점 라벨을 함께 고쳐야 하며 범위 폭은 주기 이하로 두어 b 가 유일해야 함. 원본 그림 재사용 시 a=3·b=1/2 고정."
    creative: "(1) 안쪽 π 를 빼고 y=tan(ax−b) 로 두면 점근선이 π 단위가 되어 계산 부담 변화(★2) (2) 점근선 대신 「그래프가 두 점 (1/6, 0), (1/4, 1) 을 지난다」 로 주면 그림 없이 연립(★2~3) (3) y=a tan bx 의 그래프와 직선 y=1 의 교점 간격으로 주기를 읽게 하면 대칭성 결합(★3)."
```

```yaml
- id: RPM-ALG-0599
  page: 80
  vendor_label: "유형 06 그래프가 주어진 삼각함수의 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    그래프(최대 4 (x=π)·최소 −4 (x=−π, 3π)·영점 0, 2π)가 주어진 y=a cos(bx+c) (a>0, b>0, π<c<2π) 에서 abc.
  category: "진폭 → a · 극점 간격 → 주기 → b · 최댓점 대입 + 범위 → c"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(진폭·주기·위상 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최대 4 라 a=4. 최솟점 −π 와 3π 의 간격 4π 가 주기라 b=1/2. 최댓점 x=π 에서 π/2+c=2nπ, c=−π/2+2nπ 중 π<c<2π 인 것은 3π/2. abc=4·(1/2)·(3π/2)=3π. 그림이 4 sin(x/2) 꼴이라는 것을 알아채면 cos 으로 옮기는 위상 −π/2 를 범위에 맞춰 3π/2 로 바꾸는 단계가 핵심 함정(T-범위·T-부호). 서술형 태그는 답안 서술 요구일 뿐 골조는 0597 과 같아 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "최대 4 → a=4 · 극점 간격 4π=주기 → b=1/2 · 최댓점 (π, 4) 대입 π/2+c=2nπ, π<c<2π → c=3π/2 → abc=3π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\pi$'
  answer_source: "답지"
  figure: "crop:fig-0599.png"
  latex: latex-bank/rpm-alg/items/0599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭(4 → 2, 3)·주기(4π → 2π, 6π)·c 의 범위(π<c<2π → 0<c<π 면 c=π/2 가 아니라 해 없음에 주의). 제약: 범위 안에 c 가 정확히 하나 있어야 하고 abc 가 π 의 유리수배로 정리돼야 함. 원본 그림 재사용 시 a=4·b=1/2 고정, c 는 범위에 따라 −π/2+2nπ."
    creative: "(1) 범위를 −π<c<0 로 바꾸면 c=−π/2 로 같은 그림에서 부호 훈련(★2) (2) y=a sin(bx+c) 로 바꾸면 c=0+2nπ 라 범위 선택만 남아 쉬워짐(★1~2) (3) 그림 대신 「최댓점 (π, 4), 이웃 최솟점 (3π, −4)」 좌표만 주고 c 의 범위를 넓혀 c 의 개수를 묻게 하면 MI 성격(★3)."
```

```yaml
- id: RPM-ALG-0600
  page: 80
  vendor_label: "유형 06 그래프가 주어진 삼각함수의 미정계수 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프(최대 5·최소 −1, x=2 에서 최솟값, 다음 최댓점의 x 좌표가 c)가 주어진 y=a cos(π/6)(2x+1)+b (a>0) 에서 abc. c 는 그림의 좌표.
  category: "최대·최소 → a, b · 안쪽 계수 → 주기 6 · 최솟점에서 반주기 뒤 최댓점 → c"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(진폭·주기·위상 읽기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a+b=5, −a+b=−1 에서 a=3, b=2. 안쪽 (π/6)(2x+1)=(π/3)x+π/6 이므로 주기 2π/(π/3)=6 이고, 최솟점 x=2 에서 반주기 3 만큼 뒤가 최댓점이라 c=2+3=5, abc=30. c 가 식의 계수가 아니라 그림의 x 좌표(T-표기)이고 b 계수를 π/6 로 잘못 읽으면 주기 12 가 되는 T-단위 함정이 있어 Mₜ 2. 통찰 없이 세 단계로 끝나 「상중」 대로 ★3 을 두되 절차형 상한 안.
    원문 확인 필요: 위상 (2x+1) 을 그대로 쓰면 최솟점이 x=5/2 여서 그림(x=2)과 맞지 않음(정합하려면 (2x+2), 답지 풀이도 3cos (π/3)(x+1)+2 로 적음). 답 30 은 주기만 쓰므로 무관.
    [분류 이슈] 절차만 보면 ★2 후보(0599 와 골조 동일 · c 읽기 한 단계 추가). 라벨은 벤더 「상중」 대로 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "최대 5·최소 −1 → a=3, b=2 · 안쪽 계수 π/3 → 주기 6 · 최솟점 x=2 + 반주기 3 → c=5 → abc=30"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: "crop:fig-0600.png"
  latex: latex-bank/rpm-alg/items/0600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최대·최소(5, −1 → 3, −3)·안쪽 계수(π/6·2 → π/4·2 로 주기 4)·최솟점 위치(2 → 1). 제약: 위상을 그림과 정합하게 다시 잡을 것(최솟점 x₀ 이면 안쪽이 (π/3)(x−x₀)+π 꼴). c 는 최솟점+반주기이므로 주기가 정수·유리수가 되게 b 계수 선택."
    creative: "(1) c 를 「x=2 다음으로 최솟값을 갖는 x」 로 바꾸면 반주기가 아니라 주기를 더해 c=8(★3) (2) 그림 없이 「f(2)=−1 이 최솟값, 이웃 최댓점의 x 좌표 c」 로 서술하면 EQV 성격(★3) (3) c 를 그림 좌표가 아니라 위상 상수로 되돌리면 0599 골조(★2)."
```

### 유형 07 절댓값 기호를 포함한 삼각함수

```yaml
- id: RPM-ALG-0601
  page: 81
  vendor_label: "유형 07 절댓값 기호를 포함한 삼각함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=|tan ax| 의 주기와 y=3cos 5x 의 주기가 같을 때 양수 a.
  category: "|tan ax| 주기 π/a (반감 없음) = cos 5x 주기 2π/5 → a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 주기(|sin x| · |cos x| · cos|x| · |tan x|)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |tan ax| 는 tan ax 의 아래쪽을 접어 올린 것이라 주기가 π/a 그대로이고, 3cos 5x 의 주기는 2π/5. 등식 π/a=2π/5 에서 a=5/2. 공식 두 개와 방정식 한 줄(Mₛ 1)이지만 |sin|·|cos| 처럼 주기가 반감된다고 착각하면 a=5 가 나오는 T-단위 함정이 문제의 전부.
    [분류 이슈] 통찰 0·M_total 4 → −1 후보 ★1 이나 절댓값 주기 판단이 유형 07 의 핵심 기술이라 대표문제 출발점 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "|tan ax| 주기 π/a (반감 없음) · cos 5x 주기 2π/5 → π/a=2π/5 → a=5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교 함수의 계수(3cos 5x → 2sin 3x, cos(x/2))와 절댓값 안 함수. 제약: |tan| 은 π/a, |sin|·|cos| 은 π/b 로 반감되므로 어느 쪽에 절댓값을 두느냐에 따라 답이 2배 달라짐을 확인하고, a 가 양의 유리수로 떨어지게 할 것."
    creative: "(1) y=|sin ax| 와 y=tan 5x 로 바꾸면 반감 쪽을 뒤집어 같은 함정(★2) (2) y=cos|ax| 처럼 주기함수가 아닌 것을 섞어 「주기가 같은 것」 을 고르게(★2~3) (3) |tan ax| 의 주기가 |cos bx| 의 주기의 2배가 되도록 하는 a:b 를 묻기(★2)."
```

```yaml
- id: RPM-ALG-0602
  page: 81
  vendor_label: "유형 07 절댓값 기호를 포함한 삼각함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=|2tan x| 의 주기·최댓값·최솟값·대칭성·점근선에 대한 설명 중 옳은 것. 5지선다.
  category: "|tan x| 의 그래프(아래쪽 접어 올림) → 주기 π·치역 y≥0·y축 대칭·점근선 유지"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 그래프와 성질(주기·치역·대칭·점근선·미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |2tan x| 는 2tan x 의 음수 부분을 x축 대칭으로 접은 것. 주기는 π 그대로(① 거짓), 위로 발산해 최댓값 없음(② 거짓), 최솟값 0(③ 거짓), 우함수라 y축 대칭이지 원점 대칭이 아님(④ 거짓), 점근선 x=nπ+π/2 는 그대로(⑤ 참). 보기 다섯을 그래프 하나로 확인하는 절차(Mₛ 2)이고 T-단위(주기 반감 착각)가 함정. 「중하」 출발점에서 M_total 5·다중 검증이라 ★2.
  tier: star_2
  mechanism_primary: "|2tan x| = 음수 부분 접어 올림 → 주기 π·치역 y≥0·y축 대칭·점근선 x=nπ+π/2 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2 → 3)·안쪽 계수(x → 2x 면 주기 π/2·점근선 x=nπ/2+π/4). 제약: 참 보기가 하나만 남도록 주기·점근선 보기를 안쪽 계수와 맞춰 고칠 것."
    creative: "(1) y=|sin 2x| 로 바꾸면 주기 반감·최댓값 존재로 참 보기가 바뀜(★2) (2) y=tan|x| 로 바꾸면 주기함수가 아니고 y축 대칭이 되는 대비 문항(★2) (3) |tan x| 와 |sin x| 의 그래프 교점 개수(0≤x<2π)를 묻게 하면 삼각방정식 결합(★3)."
```

```yaml
- id: RPM-ALG-0603
  page: 81
  vendor_label: "유형 07 절댓값 기호를 포함한 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a|cos bx|+c (a>0, b>0) 의 주기가 π/3, 최댓값 5, f(π/6)=1 일 때 3a−2b+c.
  category: "|cos bx| 주기 π/b → b · 최댓값 a+c · f(π/6)=c → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 그래프와 성질(주기·치역·대칭·점근선·미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |cos bx| 의 주기는 반감된 π/b 라 π/b=π/3, b=3. 최댓값은 |cos|=1 일 때 a+c=5. f(π/6)=a|cos(π/2)|+c=c=1 이라 a=4. 3a−2b+c=12−6+1=7. 유형 05 의 미정계수 골조에 절댓값 주기 반감(T-단위)이 얹힌 형태로 조건 셋이 매개변수에 하나씩 대응(Mₛ 2·Mₐ 2). 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "π/b=π/3 → b=3 · a+c=5 · f(π/6)=a|cos(π/2)|+c=c=1 → a=4 → 3a−2b+c=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(π/3 → π/2)·최댓값(5 → 3)·대입점(π/6 → 점 bx 가 π/2 의 홀수배가 되게 골라 cos=0 이 되는 자리 유지). 제약: 대입점을 cos=0 이 아닌 곳으로 옮기면 a 와 c 가 연립으로 바뀌어 계산이 늘어남. 목표식 계수는 답이 정수가 되게 조정."
    creative: "(1) |cos| 를 |sin| 으로 바꾸고 최솟값 조건을 주면 c 가 최솟값(★2) (2) 「최댓값과 최솟값의 차가 4」 로 a 를 감추면 치역 [c, a+c] 이해 강제(★2) (3) f(x)=a|cos bx|+c 와 y=k 의 교점 개수 조건으로 a 를 정하게 하면 그래프 해석 추가(★3~4)."
```

### 유형 08 삼각함수의 그래프에서의 넓이

```yaml
- id: RPM-ALG-0604
  page: 81
  vendor_label: "유형 08 삼각함수의 그래프에서의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=sin(π/3)x 의 첫 봉우리(0≤x≤3)와 x축 사이에 내접한 직사각형 ABCD 에서 BC=2 일 때 넓이. 5지선다.
  category: "봉우리 대칭축 x=3/2 → B, C 좌표 → 높이 sin 값 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "봉우리가 x=3/2 에 대해 축대칭이므로 BC=2 의 양 끝을 3/2±1 로 놓아 B(1/2, 0), C(5/2, 0) 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 그래프에서의 넓이(대칭·주기 이동으로 직사각형 등적 변환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 6 이라 첫 봉우리는 0≤x≤3, 대칭축 x=3/2. 내접 직사각형은 이 축에 대칭이므로 B(1/2, 0), C(5/2, 0). 높이는 sin(π/6)=1/2 이고 넓이 2·(1/2)=1. 축대칭으로 좌표를 잡는 한 단계(SYM d1)가 골조이고 나머지는 특수각 대입. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "주기 6 → 봉우리 대칭축 x=3/2 → B, C=3/2∓1 → 높이 sin(π/6)=1/2 → 넓이 2·(1/2)=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0604.png"
  latex: latex-bank/rpm-alg/items/0604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(π/3 → π/2 로 봉우리 [0, 2] · π/6 로 [0, 6])·BC(2 → 1, 4)·진폭. 제약: 대칭축±BC/2 에서의 sin 값이 특수각(1/2, √2/2, √3/2)이어야 하고 BC 가 봉우리 폭보다 작아야 함."
    creative: "(1) BC 대신 「AB=√3/2」 를 주고 BC 를 구하게 하면 sin=√3/2 인 x 두 개를 찾는 역방향(★2~3 · BW) (2) 직사각형이 정사각형이 되는 조건으로 BC 를 정하게 하면 방정식 sin(π/3)(3/2−t)=2t 로 상승(★4 · 특수각 해가 나오도록 설계 필요) (3) cos 봉우리(y축 대칭)로 바꾸면 대칭축이 x=0 이라 계산이 줄어듦(★2)."
```

```yaml
- id: RPM-ALG-0605
  page: 81
  vendor_label: "유형 08 삼각함수의 그래프에서의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=2cos(π/2)x 의 그래프에서 이웃한 두 최솟점(x=−2, 2) 사이 곡선과 직선 y=−2 로 둘러싸인 색칠 부분의 넓이.
  category: "곡선의 점대칭(영점 중심)으로 조각을 옮겨 직사각형 → 주기 × 진폭 배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "영점 (±1, 0) 에 대한 점대칭으로 곡선 위 조각을 아래로 옮기면 색칠 부분이 가로 4·세로 2 의 직사각형과 등적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 그래프에서의 넓이(대칭·주기 이동으로 직사각형 등적 변환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 4, 최솟점 x=±2 에서 y=−2. 곡선은 영점 (−1, 0), (1, 0) 에 대해 점대칭이므로 y축 쪽 봉우리의 튀어나온 조각을 바깥 오목한 자리로 옮기면 −2≤x≤2, −2≤y≤0 의 직사각형과 넓이가 같다. 4·2=8. 적분 없이 넓이를 구하는 유일한 길이 이 등적 변환(SYM d1)이고 이후는 곱셈 하나. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "주기 4·진폭 2 → 영점 중심 점대칭으로 조각 이동 → 직사각형 [−2, 2]×[−2, 0] → 넓이 4·2=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-0605.png"
  latex: latex-bank/rpm-alg/items/0605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭(2 → 3)·안쪽 계수(π/2 → π/3 로 주기 6). 제약: 넓이 = 주기 × 진폭 이므로 두 값의 곱이 정수·유리수가 되게. 그림의 색칠 범위(이웃 최솟점 사이·y=−진폭)는 고정."
    creative: "(1) y=2cos(π/2)x 와 y=2 사이(봉우리 위쪽 오목 부분)의 넓이로 바꾸면 같은 골조(★2) (2) 색칠 범위를 반주기(0≤x≤2)로 줄이고 직선 y=−2 대신 x축을 경계로 하면 조각 이동 위치가 달라짐(★3) (3) y=sin x 와 y=cos x 사이의 넓이(π/4≤x≤5π/4)처럼 두 곡선 사이로 바꾸면 이동 대칭 두 번(★3~4)."
```

```yaml
- id: RPM-ALG-0606
  page: 81
  vendor_label: "유형 08 삼각함수의 그래프에서의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=π, x=3π 를 점근선으로 하는 y=tan ax (0≤x<3π, a>0) 의 그래프와 x축, 직선 y=a 로 둘러싸인 부분(그림)의 넓이.
  category: "점근선 간격 → 주기 → a · 두 가지가 주기만큼 평행이동한 합동 곡선 → 평행사변형꼴 넓이 = 주기 × 높이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "오른쪽 경계(둘째 가지)는 왼쪽 경계(첫째 가지)를 x축 방향으로 주기 2π 만큼 옮긴 합동 곡선이므로 색칠 부분은 밑변 2π·높이 a 의 직사각형과 등적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 그래프에서의 넓이(대칭·주기 이동으로 직사각형 등적 변환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃 점근선 간격 2π 가 주기이므로 π/a=2π, a=1/2. 색칠 부분은 첫째 가지(0→π), 직선 y=1/2, 둘째 가지(π→3π, 영점 2π), x축으로 둘러싸이고, 두 가지가 2π 평행이동으로 겹치므로 곡선 조각을 옮기면 가로 2π·세로 1/2 의 직사각형. 넓이 π. a 를 먼저 구해 직선 높이를 확정한 뒤 등적 변환(SYM d1)을 쓰는 두 단계. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "점근선 간격 2π=주기 π/a → a=1/2 → 두 가지 2π 평행이동 합동 → 직사각형 2π×(1/2) → 넓이 π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: "crop:fig-0606.png"
  latex: latex-bank/rpm-alg/items/0606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 위치(π, 3π → π/2, 3π/2 로 a=1)·직선 y=a 를 y=k 로 분리. 제약: 넓이 = 주기 × 직선 높이 이므로 직선 y=a 를 유지하면 a 가 주기와 묶여 답이 π 로 고정됨(변형하려면 직선 높이를 별도 상수로). 정의역이 둘째 가지의 y=a 교점을 포함해야 함."
    creative: "(1) 직선을 y=1 로 바꾸고 「넓이가 3π 가 되도록 a」 를 묻는 역방향(★3 · BW) (2) y=tan ax 대신 y=a tan x 로 바꾸면 주기는 π 로 고정되고 a 는 직선 높이만 관여(★2) (3) 두 직선 y=a, y=−a 사이로 바꾸면 점대칭까지 결합(★3)."
```

### 유형 09 삼각함수의 그래프의 대칭성

```yaml
- id: RPM-ALG-0607
  page: 82
  vendor_label: "유형 09 삼각함수의 그래프의 대칭성"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x≤3π 에서 y=sin x 와 y=k (0<k<1) 의 교점 x 좌표 a<b<c<d 의 합. 5지선다.
  category: "봉우리마다 대칭축(x=π/2, 5π/2) → 짝의 합 → 전체 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b 는 x=π/2 에 대칭(a+b=π), c, d 는 x=5π/2 에 대칭(c+d=5π) → k 값과 무관하게 합 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 그래프의 대칭성(직선 y=k 와의 교점의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0<k<1 이라 첫 봉우리(0~π)에서 두 점, 둘째 봉우리(2π~3π)에서 두 점. 각 봉우리는 최댓점 x=π/2, 5π/2 에 대해 축대칭이므로 a+b=π, c+d=5π, 합 6π. 교점을 실제로 구하지 않고 대칭축으로 짝의 합을 읽는 것(SYM d1)이 전부이고 k 는 매개변수로만 남아 Mₐ 2. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0<k<1 → 봉우리 둘에 교점 2+2 → 대칭축 π/2, 5π/2 → a+b=π, c+d=5π → 6π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0607.png"
  latex: latex-bank/rpm-alg/items/0607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0≤x≤3π → 0≤x≤4π 면 교점 4개 그대로, 0≤x≤5π 면 6개)·k 의 범위(−1<k<0 이면 골 쪽 대칭축 3π/2). 제약: k 의 부호에 따라 교점이 봉우리/골 어느 쪽인지 정해지므로 그림의 직선 위치와 교점 개수를 맞출 것."
    creative: "(1) sin x 를 cos x 로 바꾸면 대칭축이 x=0, 2π 로 옮겨져 합이 달라짐(★2) (2) y=sin 2x 처럼 주기를 줄이면 교점이 늘고 대칭축을 여러 개 세어야 함(★3) (3) 「a+b+c+d 대신 (a+d)−(b+c)」 처럼 짝을 엇갈리게 물으면 대칭축 두 개의 차이를 써야 해 EQV 추가(★3)."
```

```yaml
- id: RPM-ALG-0608
  page: 82
  vendor_label: "유형 09 삼각함수의 그래프의 대칭성"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    0≤x<2π 에서 y=sin x, y=cos x 와 y=k (−1<k<0) 의 교점 x 좌표 a<b<c<d (그림: a, c 는 cos, b, d 는 sin) 에 대해 sin((−a+b−c+d)/4).
  category: "곡선별 대칭축(cos: x=π · sin: x=3π/2) → 같은 곡선 짝의 합 → 목표식 → 특수각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에서 a, c 를 cos 골(x=π 대칭 · a+c=2π), b, d 를 sin 골(x=3π/2 대칭 · b+d=3π)로 짝지어 목표식 −(a+c)+(b+d)=π 를 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 그래프의 대칭성(직선 y=k 와의 교점의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k<0 이라 cos x=k 의 두 해는 골 x=π 에 대칭(a+c=2π), sin x=k 의 두 해는 골 x=3π/2 에 대칭(b+d=3π). 그림대로 a, c 가 cos, b, d 가 sin 이므로 −a+b−c+d=−2π+3π=π 이고 sin(π/4)=√2/2. 곡선이 둘이라 어느 교점이 어느 곡선 것인지 그림에서 읽어 짝을 엇갈리게 묶는 것(SYM d2)이 0607 보다 한 겹 깊고, 목표식이 짝의 합·차로 정리되는지 확인해야 한다(T-부호·T-표기). 「중」 대로 ★2.
    [분류 이슈] SYM d2·M_total 7·서술형이라 ★3 후보. 라벨은 벤더 「중」 대로 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "cos 교점 a, c: x=π 대칭 → a+c=2π · sin 교점 b, d: x=3π/2 대칭 → b+d=3π → −a+b−c+d=π → sin(π/4)=√2/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0608.png"
  latex: latex-bank/rpm-alg/items/0608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 의 범위(−1<k<0 → 0<k<1 이면 봉우리 대칭축 π/2·0 과 2π 로 짝이 바뀜)·목표식의 부호 배열·나누는 수 4. 제약: 교점 순서 a<b<c<d 에서 어느 것이 어느 곡선인지는 k 의 크기(그림은 −√2/2<k<0)에 따라 달라지므로 그림과 범위를 일치시키고, 목표식이 같은 곡선 짝의 합으로 묶이게 부호를 배열할 것."
    creative: "(1) sin x 와 cos x 대신 sin x 와 −sin x(또는 sin x 와 sin 2x)로 바꾸면 대칭축 구조가 달라짐(★3) (2) 목표식을 a+b+c+d 로 단순화하면 0607 골조(★2) (3) 「−a+b−c+d 의 값이 k 에 관계없이 일정함을 보이시오」 서술형으로 바꾸면 논증 요구(★3)."
```

```yaml
- id: RPM-ALG-0609
  page: 82
  vendor_label: "유형 09 삼각함수의 그래프의 대칭성"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=cos(1/2)x 와 두 직선 y=k, y=−k (0<k<1) 의 교점의 양수 x 좌표를 작은 것부터 a, b, c, d, … 라 할 때 cos((b+2c+d)/5).
  category: "축대칭(x=2π)과 점대칭((π, 0)·(3π, 0)) 을 함께 써서 b+c, c+d 를 상수로 → 목표식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=k 와 y=−k 의 교점을 잇는 두 종류 대칭 발견: 최솟점 x=2π 축대칭(b+c=4π, a+d=4π)과 영점 (π, 0)·(3π, 0) 점대칭(a+b=2π, c+d=6π) → b+2c+d=(b+c)+(c+d)=10π"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 그래프의 대칭성(직선 y=k 와의 교점의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주기 4π. 0<x<4π 에서 a(y=k)·b(y=−k)·c(y=−k)·d(y=k) 순. 최솟점 x=2π 에 대한 축대칭으로 b+c=4π, 영점 (3π, 0) 에 대한 점대칭(k↔−k)으로 c+d=6π. 목표식을 (b+c)+(c+d)=10π 로 묶으면 cos 2π=1. 축대칭 하나로는 c+d 가 안 나오고 y=k 와 y=−k 를 잇는 점대칭까지 찾아야 하므로 SYM d2. k 를 매개변수로 남기고 목표식을 짝의 합으로 쪼개는 단계에 T-부호·T-범위(양수 x 만). 「상중」 대로 ★3.
  tier: star_3
  mechanism_primary: "축대칭 x=2π → b+c=4π · 점대칭 (3π, 0) → c+d=6π → b+2c+d=10π → cos 2π=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-0609.png"
  latex: latex-bank/rpm-alg/items/0609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(1/2 → 1 이면 주기 2π 로 축·점대칭 위치가 π, π/2·3π/2 로 바뀜)·목표식 계수(b+2c+d → a+b+c+d=8π)·나누는 수. 제약: 목표식이 (축대칭 짝)+(점대칭 짝) 으로 분해되어 상수가 되고, 나눈 결과가 특수각이어야 함. a, b, c, d 가 각각 어느 직선의 교점인지 그림과 맞출 것."
    creative: "(1) y=−k 를 없애고 y=k 만 두면 축대칭만으로 끝나 0607 골조(★2) (2) sin(1/2)x 로 바꾸면 축대칭 중심이 극점 π, 3π 로, 점대칭 중심이 영점 0, 2π 로 이동(★3) (3) 「e+f」 처럼 둘째 주기의 교점까지 확장하면 주기 4π 를 더하는 PD 성격 추가(★3~4)."
```

### 유형 10 일반각에 대한 삼각함수의 성질

```yaml
- id: RPM-ALG-0610
  page: 82
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    sin(π+θ)·tan²(π−θ)/cos(3π/2−θ) + sin(3π/2−θ)/(sin(π/2+θ)·cos²(2π+θ)) 를 간단히 하기. 5지선다.
  category: "각 인수를 π±θ · π/2±θ · 3π/2±θ 공식으로 θ 의 함수로 환원 → 약분 → tan²θ−sec²θ=−1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질(π/2±θ · π±θ · 3π/2±θ 로 식 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin(π+θ)=−sin θ, tan²(π−θ)=tan²θ, cos(3π/2−θ)=−sin θ 로 첫 항은 tan²θ. sin(3π/2−θ)=−cos θ, sin(π/2+θ)=cos θ, cos²(2π+θ)=cos²θ 로 둘째 항은 −1/cos²θ. 합은 tan²θ−1/cos²θ=(sin²θ−1)/cos²θ=−1. 환원 여섯 번과 약분·항등식 정리(Mₛ 2·Mₖ 2)의 절차이며 3π/2 관련 부호(T-부호)가 함정. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "인수별 환원(−sin θ·tan²θ/(−sin θ) → tan²θ · −cos θ/(cos θ·cos²θ) → −1/cos²θ) → tan²θ−1/cos²θ=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 각(π+θ → −θ, 3π/2+θ 등)과 거듭제곱 위치. 제약: 환원 뒤 sin²+cos²=1 또는 1+tan²=1/cos² 로 상수가 되도록 차수를 맞추고, 분모가 0 이 되는 θ 를 배제하는 조건은 발문에 두지 않아도 되나 변형 시 확인."
    creative: "(1) 상수 대신 「sin θ 로 나타내면」 으로 바꾸면 항등식 정리 방향이 달라짐(★2) (2) θ 대신 특정 각(θ=π/6)을 넣어 값을 구하게 하면 0613 골조(★2) (3) 두 항의 합이 θ 에 관계없이 일정함을 이용해 「f(θ)=… 일 때 f(π/12)+f(5π/12)」 처럼 묻게 하면 EQV 추가(★3)."
```

```yaml
- id: RPM-ALG-0611
  page: 82
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 여섯(sin(−θ) · cos(π/2−θ) · sin(π−θ) · cos(3π/2+θ) · cos(2π−θ) · cos(π+θ)) 중 sin θ 와 항상 같은 것의 개수.
  category: "보기별 환원 공식 적용 → sin θ 와 같은 것 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질(π/2±θ · π±θ · 3π/2±θ 로 식 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ −sin θ, ㄴ sin θ, ㄷ sin θ, ㄹ sin θ, ㅁ cos θ, ㅂ −cos θ 라 ㄴ·ㄷ·ㄹ 셋. 여섯 번의 공식 적용(Mₛ 2)이고 계산은 없다. 함정은 ㄹ cos(3π/2+θ) 의 부호(T-부호). 「중하」 출발점에서 M_total 5·여섯 항 검증이라 ★2.
  tier: star_2
  mechanism_primary: "보기별 환원 → ㄱ −sin θ · ㄴ sin θ · ㄷ sin θ · ㄹ sin θ · ㅁ cos θ · ㅂ −cos θ → 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 각(π/2−θ → π/2+θ, 3π/2−θ 등)과 기준 함수(sin θ → −cos θ). 제약: 정답 개수가 1~5 사이로 나오도록 같은 것과 부호만 다른 것을 섞고, 보기 수는 6개 유지."
    creative: "(1) 「sin θ 와 같은 것」 대신 「−cos θ 와 같은 것」 으로 기준을 바꿈(★2) (2) 보기에 tan(π/2−θ)=1/tan θ 처럼 tan 을 섞어 역수 관계 추가(★2) (3) 보기끼리 곱한 값이 상수가 되는 쌍의 개수를 묻게 하면 조합 확인(★3)."
```

```yaml
- id: RPM-ALG-0612
  page: 82
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각함수표(10°·20° 의 sin·cos·tan)를 이용해 cos 100°+tan 200° 의 값 구하기.
  category: "100°=90°+10° · 200°=180°+20° 환원 → 표의 값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos 100°=cos(90°+10°)=−sin 10°=−0.1736, tan 200°=tan(180°+20°)=tan 20°=0.3640, 합 0.1904. 환원 두 번과 표 읽기(Mₛ 1)·소수 덧셈 한 줄. 90°+θ 에서 cos→−sin 으로 바뀌는 T-부호 하나. 「중하」 출발점에서 통찰 0·M_total 4 라 ★1.
  tier: star_1
  mechanism_primary: "cos 100°=−sin 10°=−0.1736 · tan 200°=tan 20°=0.3640 → 0.1904"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.1904$'
  answer_source: "답지"
  figure: "crop:fig-0612.png"
  latex: latex-bank/rpm-alg/items/0612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(100° → 170°=180°−10° · 280°=270°+10° · −20°)과 함수 조합(cos+tan → sin−cos). 제약: 환원 결과가 표에 있는 10°·20° 의 값이어야 하고 표의 수치는 실제 삼각함수표 값(sin 10°=0.1736 등)으로 유지."
    creative: "(1) 표에 없는 각을 하나 넣어 「구할 수 없는 것」 을 고르게(★2) (2) cos 80° 처럼 90°−θ 로 sin 표를 쓰게 하면 여각 환원 추가(★1~2) (3) 표를 라디안 각(π/18, π/9)으로 주면 단위 변환 결합(★2)."
```

```yaml
- id: RPM-ALG-0613
  page: 83
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (cos²(13π/6)+tan(5π/3))/sin(7π/3) + (sin²(7π/6)+tan(2π/3))/cos(−5π/3) 의 값.
  category: "각 인수를 2nπ±θ · π±θ 로 특수각으로 환원 → 값 대입 → 분수 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos²(13π/6)=cos²(π/6)=3/4, tan(5π/3)=tan(−π/3)=−√3, sin(7π/3)=sin(π/3)=√3/2 로 첫 항 (3/4−√3)·(2/√3)=√3/2−2. sin²(7π/6)=1/4, tan(2π/3)=−√3, cos(−5π/3)=cos(π/3)=1/2 로 둘째 항 1/2−2√3. 합 −3/2−3√3/2. 환원 여섯 번에 무리수 분수 정리까지(Mₛ 2·Mₖ 2) 있어 계산이 무거운 편이나 통찰은 없다. 부호 하나만 틀려도 답이 달라지는 T-부호. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "13π/6→π/6 · 5π/3→−π/3 · 7π/3→π/3 · 7π/6→π+π/6 · 2π/3→π−π/3 · −5π/3→π/3 환원 → (3/4−√3)/(√3/2)+(1/4−√3)/(1/2)=−(3+3√3)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{3+3\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각들을 다른 특수각의 일반각(11π/6, 4π/3, −7π/4 등)으로 교체. 제약: 환원 결과가 π/6·π/4·π/3 의 값이어야 하고 분모가 0 이 되지 않아야 하며, 답이 지나치게 복잡한 무리수 합이 되지 않게 항 수를 유지."
    creative: "(1) 두 항 중 하나를 없애고 답이 유리수가 되게 각을 골라 계산 부담을 줄임(★1~2) (2) 각을 도(°) 단위(390°, 300°)로 바꿔 단위 환산 결합(★2) (3) 값 대신 「가장 큰 항」 을 고르게 하면 부호·크기 비교(★2)."
```

```yaml
- id: RPM-ALG-0614
  page: 83
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    cos θ·cos(π/2+θ)/tan(π+θ) + sin θ·tan(π−θ)·sin(π/2−θ) 를 간단히 하기.
  category: "인수별 환원 → tan 을 sin/cos 으로 → −cos²θ−sin²θ=−1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질(π/2±θ · π±θ · 3π/2±θ 로 식 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(π/2+θ)=−sin θ, tan(π+θ)=tan θ 라 첫 항은 cos θ·(−sin θ)·(cos θ/sin θ)=−cos²θ. tan(π−θ)=−tan θ, sin(π/2−θ)=cos θ 라 둘째 항은 sin θ·(−tan θ)·cos θ=−sin²θ. 합 −1. 환원 네 번과 tan 을 sin/cos 으로 풀어 약분하는 정리(Mₛ 2·Mₖ 2). 0610 과 같은 골조로 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "cos(π/2+θ)=−sin θ · tan(π±θ)=±tan θ · sin(π/2−θ)=cos θ → −cos²θ−sin²θ=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 각(π/2+θ → 3π/2−θ 등)과 tan 의 위치(분모/곱). 제약: 정리 결과가 sin²+cos² 로 묶여 상수(±1)가 되도록 두 항의 부호와 차수를 맞출 것."
    creative: "(1) 답이 상수가 아니라 sin θ cos θ 처럼 남게 하면 「θ=π/6 일 때의 값」 으로 이어짐(★2) (2) 조건 sin θ+cos θ=k 를 붙이면 곱셈 공식 결합(★3 · XU 후보) (3) 식을 두 항 대신 세 항으로 늘려 계산 부담만 키우는 변형은 질 저하(YELLOW)이므로 피함."
```

```yaml
- id: RPM-ALG-0615
  page: 83
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<θ<π/4 일 때 sin²(π/4+θ)+sin²(π/4−θ) 를 간단히 하기. 5지선다.
  category: "두 각의 합이 π/2 → sin(π/4−θ)=cos(π/4+θ) → sin²+cos²=1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "π/4−θ=π/2−(π/4+θ) 로 두 각이 여각 관계임을 발견해 둘째 항을 cos²(π/4+θ) 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질(π/2±θ · π±θ · 3π/2±θ 로 식 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (π/4+θ)+(π/4−θ)=π/2 이므로 sin(π/4−θ)=cos(π/4+θ) 이고 식은 sin²(π/4+θ)+cos²(π/4+θ)=1. 공식을 직접 적용할 자리가 없고 두 각 사이의 여각 관계를 스스로 찾아야 해 EQV d1. 찾고 나면 한 줄(Mₛ 1). 조건 0<θ<π/4 는 답에 영향이 없는 장식. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "(π/4+θ)+(π/4−θ)=π/2 → sin(π/4−θ)=cos(π/4+θ) → sin²+cos²=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "π/4 를 다른 각(π/6+θ 와 π/3−θ · 도 단위 30°+θ 와 60°−θ)으로. 제약: 두 각의 합이 π/2 의 홀수배(또는 차가 π/2)여야 하며, cos² 끼리·sin²−cos² 등 조합에 따라 답이 1, 0, ±cos 2θ 로 달라지므로 답이 상수가 되는 조합만 선택."
    creative: "(1) sin²(π/4+θ)−cos²(π/4−θ) 처럼 부호를 바꿔 0 이 되게(★2) (2) 세 항 sin²(π/8+θ)+… 처럼 합이 π/2 인 짝을 여러 개 섞으면 0617 골조(★2~3) (3) tan(π/4+θ)·tan(π/4−θ) 로 바꾸면 tan 의 여각 관계(역수)로 답 1(★2)."
```

```yaml
- id: RPM-ALG-0616
  page: 83
  vendor_label: "유형 10 일반각에 대한 삼각함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    cos(−110°)=a 일 때 sin 250° 를 a 로 나타내기. 5지선다.
  category: "250°=360°−110° 로 각 연결 → sin 250°=−sin 110° → sin 110°=√(1−a²) (2사분면 양수) → −√(1−a²)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 각 110° 와 구할 각 250° 를 250°=360°−110° 로 연결해 sin 250°=−sin 110° 로 조건의 각에 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반각에 대한 삼각함수의 성질(π/2±θ · π±θ · 3π/2±θ 로 식 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(−110°)=cos 110°=a. 250°=360°−110° 이므로 sin 250°=−sin 110° 이고, 110° 는 2사분면이라 sin 110°=√(1−cos²110°)=√(1−a²). 따라서 −√(1−a²). 두 각을 잇는 관계를 찾는 단계(EQV d1)와 제곱근의 부호를 사분면으로 정하는 단계(T-부호·T-범위)가 핵심이며 a 는 매개변수(Mₐ 2). 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "cos(−110°)=cos 110°=a → 250°=360°−110° → sin 250°=−sin 110°=−√(1−a²) (110° 는 2사분면)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 쌍(110°·250° → 100°·260° · 40°·220°·−40°)과 주어진 함수(cos → sin, tan). 제약: 두 각이 ±, 180°±, 360°− 관계로 이어져야 하고 구할 함수의 부호가 사분면으로 결정돼야 함. 보기에 ±√(1−a²) 를 모두 두어 부호 판단을 변별."
    creative: "(1) tan 110°=a 로 주고 cos 250° 를 묻게 하면 1+tan²=1/cos² 결합(★3) (2) 라디안(cos(−11π/18)=a) 으로 바꿔 단위 환산 추가(★2) (3) 「sin 250°+cos 340°」 처럼 두 항으로 늘려 각각 연결(★3)."
```

### 유형 11 삼각함수의 값; 일정하게 증가하는 각

```yaml
- id: RPM-ALG-0617
  page: 83
  vendor_label: "유형 11 삼각함수의 값; 일정하게 증가하는 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    cos²(π/20)+cos²(3π/20)+cos²(5π/20)+cos²(7π/20)+cos²(9π/20) 의 값.
  category: "합이 π/2 인 쌍(π/20↔9π/20, 3π/20↔7π/20) 짝짓기 → cos²+sin²=1 · 가운데 cos²(π/4)=1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각들이 π/4 를 중심으로 대칭 배치(합 π/2)임을 보고 바깥쪽부터 짝지어 cos²x+cos²(π/2−x)=1 로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수 값의 합(합이 90°·180° 인 쌍 짝짓기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    π/20+9π/20=π/2, 3π/20+7π/20=π/2 이므로 cos²(9π/20)=sin²(π/20), cos²(7π/20)=sin²(3π/20) 이고 두 쌍이 각각 1. 가운데 cos²(5π/20)=cos²(π/4)=1/2. 합 5/2. 개별 값은 구할 수 없고 대칭 짝짓기(SYM d1)로만 풀리며, 홀수 개라 가운데 항을 따로 처리하는 것(T-경계)이 함정. 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "π/20↔9π/20, 3π/20↔7π/20 짝(합 π/2) → 각 쌍 1 · 가운데 cos²(π/4)=1/2 → 5/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(20 → 12, 16)와 항 수(5 → 4, 7). 제약: 각들이 π/4 를 중심으로 대칭이어야(첫 각+끝 각=π/2) 하고, 항 수가 홀수면 가운데 π/4 항의 1/2 을 따로 더해야 함. 답 = (항 수)/2."
    creative: "(1) cos² 를 sin² 으로 바꿔도 같은 답(★2) (2) cos² 대신 cos 의 합으로 바꾸면 짝의 합이 상수가 아니라 풀리지 않으므로 tan 의 곱(tan(π/20)·tan(3π/20)·…·tan(9π/20)=1)으로 바꾸는 것이 안전(★2~3) (3) 항 수를 n 으로 일반화해 「합이 10 이 되는 n」 을 묻게 하면 PD 추가(★3)."
```

```yaml
- id: RPM-ALG-0618
  page: 83
  vendor_label: "유형 11 삼각함수의 값; 일정하게 증가하는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sin²1°+sin²2°+…+sin²89° 의 값.
  category: "k°↔(90−k)° 짝(sin²+cos²=1) 44쌍 + 가운데 sin²45°=1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각들이 45° 를 중심으로 대칭(합 90°)이므로 sin²k°+sin²(90°−k°)=1 로 44쌍을 묶고 45° 항만 따로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수 값의 합(합이 90°·180° 인 쌍 짝짓기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin²(90°−k°)=cos²k° 이므로 k=1~44 의 44쌍이 각각 1, 가운데 sin²45°=1/2. 합 44+1/2=89/2. 0617 과 같은 대칭 짝짓기(SYM d1)에 항 수가 89개라 쌍의 개수 세기와 가운데 항 처리(T-경계)가 추가됐을 뿐이다. 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "k°↔(90−k)° 짝 → sin²+cos²=1 × 44쌍 → + sin²45°=1/2 → 89/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{89}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위(1°~89° → 1°~44°+… 은 불완전 · 5°, 10°, …, 85° 처럼 간격 변경)와 함수(sin² → cos²). 제약: 첫 각+끝 각=90° 이고 간격이 일정해야 쌍이 맞으며, 45° 가 포함되면 1/2 을 따로 더함. 답 = 항 수/2."
    creative: "(1) sin²1°+…+sin²90° 처럼 끝을 90° 로 두면 sin²90°=1 이 짝 없이 남아 T-경계 강화(★2) (2) cos²1°−cos²89° 같은 차의 합으로 바꾸면 짝이 상쇄돼 0(★2) (3) tan 1°·tan 2°·…·tan 89° 의 곱으로 바꾸면 tan k°·tan(90°−k°)=1 로 같은 골조(★2)."
```

```yaml
- id: RPM-ALG-0619
  page: 83
  vendor_label: "유형 11 삼각함수의 값; 일정하게 증가하는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    θ=9° 일 때 cos θ+cos 2θ+…+cos 40θ 의 값. 5지선다.
  category: "20θ=180° → cos(kθ)+cos(kθ+180°)=0 으로 20쌍 상쇄 → 0"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "40개 각이 9° 간격으로 한 바퀴(360°)를 채움을 보고 20θ=180° 만큼 떨어진 항끼리 cos(x+180°)=−cos x 로 짝지어 전부 상쇄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수 값의 합(합이 90°·180° 인 쌍 짝짓기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    40θ=360° 라 각들이 원을 한 바퀴 9° 간격으로 채운다. 20θ=180° 이므로 cos kθ+cos(k+20)θ=0 (k=1~20) 으로 20쌍이 모두 상쇄되어 합 0. 보각 짝(cos(180°−x)=−cos x)으로 시작하면 cos 90°, cos 180°, cos 360° 처리(T-경계)와 세 구간 관리가 필요해 어느 짝을 쓸지 배치를 스스로 설계해야 하므로 SYM d2. 계산은 없다. 「상중」 대로 ★3.
  tier: star_3
  mechanism_primary: "θ=9° → 20θ=180° → cos kθ+cos(kθ+180°)=0 (k=1~20) → 합 0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ(9° → 10° 면 36항, 12° 면 30항)와 항 수(40 → 20 이면 180° 까지라 cos 180°=−1 만 남음). 제약: 항 수×θ 가 360° 의 배수면 답 0, 180° 면 −1 이 남는 식으로 끝 항 처리가 달라지므로 답을 다시 계산할 것. sin 으로 바꾸면 sin 180°=sin 360°=0 이라 같은 논리로 0."
    creative: "(1) cos 대신 cos² 으로 바꾸면 합이 90° 인 짝 골조(0617)로 바뀌어 답 20(★3) (2) 「cos θ+cos 2θ+…+cos nθ=0 이 되는 최소 n」 을 묻게 하면 BW 추가(★4) (3) 항 수를 41 로 늘려 cos 41θ=cos 9° 가 남게 하면 T-경계 강화(★3)."
```

```yaml
- id: RPM-ALG-0620
  page: 83
  vendor_label: "유형 11 삼각함수의 값; 일정하게 증가하는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 1 인 사분원의 호 PQ 를 9등분한 점 P₁~P₈ 에서 OP 에 내린 수선의 발이 Q₁~Q₈ 일 때 P₁Q₁²+P₂Q₂²+…+P₈Q₈² 의 값.
  category: "P_kQ_k=sin(10k°) 로 기하 → 삼각함수 · k↔9−k 짝(합 90°) → sin²+cos²=1 × 4쌍"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "9등분한 호의 중심각이 10k° 이고 반지름 1 이므로 수선의 길이 P_kQ_k 를 sin(10k°) 로 옮김(기하 → 삼각함수)"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin²(10k°)+sin²(90°−10k°)=1 로 k↔9−k 를 짝지어 4쌍"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수 값의 합(합이 90°·180° 인 쌍 짝짓기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠P_kOP=10k° 이고 OP_k=1 이므로 P_kQ_k=sin(10k°). 구할 값은 sin²10°+sin²20°+…+sin²80° 이고 10k°+10(9−k)°=90° 라 sin²+cos²=1 인 쌍이 4개, 합 4. 그림을 삼각함수 식으로 옮기는 단계(RT d1)와 짝짓기(SYM d1)가 이어지며 계산은 없다.
    [분류 이슈] 통찰 2개 → +1 후보 ★4 이나 둘 다 d1 의 표준 기법(단위원 수선 = sin · 0618 짝짓기)이라 「상중」 대로 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "∠P_kOP=10k°, 반지름 1 → P_kQ_k=sin(10k°) → k↔9−k 짝(합 90°) → 1×4 → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-0620.png"
  latex: latex-bank/rpm-alg/items/0620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등분 수(9 → 6 이면 15° 간격 5점 · 18 이면 17점)와 반지름(1 → 2 면 각 항에 4 배). 제약: 등분 수 n 에 대해 점이 n−1 개, 짝이 (n−1)/2 쌍이며 n−1 이 홀수면 가운데 45° 항 1/2 을 따로 더함. 답 = r²·(n−1)/2. 그림 재사용 시 9등분 고정."
    creative: "(1) 수선의 발을 OQ 에 내리면 cos 으로 바뀌나 답 동일(★3) (2) P_kQ_k² 대신 OQ_k² 의 합을 묻게 하면 cos² 골조(★3) (3) P_kQ_k 의 합(제곱 없이)을 묻는 변형은 짝이 상수가 되지 않아 풀리지 않으므로 P_kQ_k·OQ_k(=sin·cos) 의 합 같은 변형도 피하고, 대신 「OP_k 위의 점으로 만든 직사각형 넓이 합」 처럼 sin·cos 이 아니라 sin²·cos² 이 나오는 설정만 사용."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 4 · ★2 25 · ★3 4 · ★4 0 · ★5 0
- 통찰형 13 · 절차형 20 · premium 0
- 통찰 유형: I-SYM 10(0604·0605·0606·0607·0608·0609·0617·0618·0619·0620) · I-EQV 3(0594·0615·0616) · I-RT 1(0620) — 0620 만 통찰 2개
- type_hint 상위: 「일반각에 대한 삼각함수의 성질(식 간단히 하기)」 5 · 「그래프가 주어진 삼각함수의 미정계수 구하기」 4 · 「일정하게 증가하는 각의 삼각함수 값의 합」 4 · 「삼각함수의 미정계수 구하기」 3 · 「삼각함수의 그래프에서의 넓이」 3 · 「삼각함수의 그래프의 대칭성」 3
- ★ 조정: −1 적용 4문(0590·0593·0595·0612 · 통찰 0·두 단계 대입) · +1 적용 0문(0620 은 후보였으나 유지)
- 그림: 12문(`crop:fig-0597.png` · `crop:fig-0598.png` · `crop:fig-0599.png` · `crop:fig-0600.png` · `crop:fig-0604.png` · `crop:fig-0605.png` · `crop:fig-0606.png` · `crop:fig-0607.png` · `crop:fig-0608.png` · `crop:fig-0609.png` · `crop:fig-0612.png` · `crop:fig-0620.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0600 | 절차만 보면 ★2 후보(0599 골조에 c 읽기 한 단계 추가). 라벨은 벤더 「상중」 대로 ★3. 별도로 원문 위상 (2x+1) 이 그림의 최솟점 x=2 와 불일치(정합하려면 (2x+2) · 답지도 3cos (π/3)(x+1)+2 로 풀이) — 답 30 은 주기만 쓰므로 무관, 변형 시 위상을 그림과 맞출 것 | ★2 / ★3 |
| RPM-ALG-0601 | 통찰 0·M_total 4 → −1 후보 ★1 이나 절댓값 주기 반감 여부 판단이 유형 07 의 핵심이라 대표문제 출발점 ★2 유지 | ★1 / ★2 |
| RPM-ALG-0608 | SYM d2·M_total 7·서술형이라 ★3 후보. 라벨은 벤더 「중」 대로 ★2 | ★2 / ★3 |
| RPM-ALG-0620 | 통찰 2개(RT d1·SYM d1) → +1 후보 ★4 이나 둘 다 표준 d1 기법이라 「상중」 대로 ★3 유지 | ★3 / ★4 |
| RPM-ALG-0594 | ㈏ 함수방정식 → 주기 읽기를 06-p1 0584 와 같은 기준으로 EQV d1 로 셈. 표준 절차로 보면 절차형 — ★ 는 어느 쪽이든 2 | ★2 |
| RPM-ALG-0604·0605·0606·0607·0617·0618 | ★2 인데 통찰이 SYM 이라 §3.3 산식상 중위권 fit 이 안 되어 target_cohort 를 중상위권으로 둠. 실제 체감은 중위권 기본 — 카탈로그에서 「기본 대칭 짝짓기」 를 중위권 허용 유형으로 둘지 결정 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「일반각 성질 식 간단히 하기」 5 · 「그래프가 주어진 미정계수」 4 · 「일정하게 증가하는 각의 합」 4 · 「미정계수(조건형)」 3 · 「그래프 넓이」 3 · 「대칭성 교점 합」 3. 나머지 7 개 이름은 1~2 문씩.
- 따로 세워야 할 유형: (1) 「그래프가 주어진 미정계수」 는 sin·cos(진폭·주기·위상 · 0597·0599·0600)와 tan(점근선 간격·영점 · 0598)의 골조가 달라 두 항목으로 두고, 0600 처럼 c 가 그림 좌표인 것은 하위 변형으로 표시. (2) 「그래프 넓이」 는 내접 직사각형(0604 · 축대칭 좌표) / 점대칭 조각 이동(0605) / 주기 평행이동 합동(0606) 세 하위 골조. (3) 「대칭성 교점 합」 은 축대칭만(0607·0608)과 축대칭+점대칭(0609)을 depth 로 구분(d1 / d2). (4) 「일정하게 증가하는 각」 은 합이 90° 인 쌍(sin²+cos² · 0617·0618·0620)과 180° 떨어진 쌍(cos 상쇄 · 0619)로 분리 — base ★ 가 한 단 다름.
- 통합해도 될 유형: 유형 03·04·07 의 「그래프와 성질」 보기 판별(0588·0591·0602)은 함수 종류만 다르고 골조(최대·최소·주기·점근선·평행이동 검증)가 같아 「삼각함수 그래프의 성질 판별」 하나로; 0592(주기 비교)·0601(주기 등식)은 「주기 구하기·비교(절댓값 포함)」 로 통합 가능; 0610·0613·0614 는 「환원 공식 적용」 한 유형의 θ 식 / 특수각 값 두 표현. 0615·0616 처럼 각 사이 관계를 스스로 찾아야 하는 문항은 같은 유형 안에서 EQV 태그로만 구분하면 됨.
