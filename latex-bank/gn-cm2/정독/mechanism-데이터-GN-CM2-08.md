---
name: mechanism-데이터-GN-CM2-08
description: 개념원리 공통수학2 08 원과 직선의 위치 관계(1/1 · 80~86쪽 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정 · 학생용) · 전사본 latex-bank/gn-cm2
  section: 08 원과 직선의 위치 관계
  unit_code: CM2-08
  part: "1/1"
  extract_range: "80~86쪽 · 80-184~86-205"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 감쇠 유형 목록이 없는 과목이라 effective_depth = depth, depth_score = Σ effective_depth. ±1 규칙은 이 파일 전체에 동일하게 적용함 — +1 은 통찰 2개 이상이거나 depth 3 이거나 통찰 1개 이상이면서 M_total ≥ 8 또는 단원 밖 도구(I-XU)를 끌어와야 할 때, −1 은 통찰 0 이면서 M_total ≤ 5 일 때(★1 이 하한). ★5 는 통찰 3개 이상이면서 SC/VF/SYM/XU 중 하나가 있을 때만 허용하고, 게이트를 못 넘는 +1 후보는 ★4 에서 멈춘 뒤 rationale·이슈표에 기록함. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 08 원과 직선의 위치 관계 (1/1) 정독 데이터 (v1.0)

80~86쪽 26문항 전수(`80-184`~`86-205`). 구역은 다섯이다 — 「개념원리 익히기」 4문(개념 직후 확인 · 두 문항은 빈칸 채우기), 「필수·발전 예제」 10문(상자 발문 `쪽-eN` 4문 + 그 예제를 그대로 따라가는 「확인체크」 6문), 「연습문제 STEP 1」 5문, 「연습문제 STEP 2」 5문, 「연습문제 실력 UP」 2문. 전사본에는 예제의 풀이·KEY Point 가 없고 상자 발문만 있다.

벤더 난이도 신호와 ★ 출발점: 「개념원리 익히기」 → ★1, 「필수」 예제와 그 뒤의 확인체크 → ★2, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4. 확인체크는 바로 앞 예제의 골조를 반복하는 자리이므로 예제와 같은 출발점을 쓴다. 출발점에서 M_total·통찰로 ±1 을 조정하며, 적용 규칙은 frontmatter 의 `judgment_protocol` 에 적은 것을 이 파일 전체에 동일하게 쓴다.

이 단원의 도구는 사실상 두 개다 — ⑴ 대입 후 판별식 $D$ 의 부호, ⑵ 중심과 직선 사이의 거리 $d$ 와 반지름 $r$ 의 대소. 그 위에 세 개의 파생 골조가 얹힌다: 현의 길이 $2\sqrt{r^2-d^2}$, 접선의 길이 $\sqrt{\overline{\mathrm{PC}}^2-r^2}$, 원 위의 점과 직선 사이 거리의 최대·최소 $d\pm r$. 변별은 「$d$ 를 어디서 읽어내느냐」와 「어느 방향으로 거슬러 올라가느냐」에서만 생긴다(직접 계산 → 현·넓이·각도 조건에서 역산 → 자취를 원으로 바꾼 뒤 적용). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`·`insights[]`·`variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-80-184
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    원 x^2+y^2=8 과 직선 y=x+1 의 교점의 개수를 판별식으로 구하는 과정의 빈칸(대입식·정리한 이차방정식·교점 개수) 채우기.
  category: '직선 식을 원에 대입 → 이차방정식 정리 → 판별식 부호로 교점 개수'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '판별식으로 원과 직선의 교점 개수 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 대입식 $x+1$, 정리식 $2x^2+2x-7=0$, 결론 $2$ 로 이미 줄을 그어 놓았고 $D/4=15>0$ 도 주어져 있다. 절차 확인 한 단계. 개념원리 익히기 구역·통찰 없음·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: 'y=x+1 대입 → 2x^2+2x-7=0 → D/4>0 → 교점 2개'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x+1$, $2x^2+2x-7$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/80-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름의 제곱(8 → 4·9·10)과 직선의 절편(1 → 2·3)을 바꿀 수 있다. 제약 — 빈칸 아래에 $D/4$ 의 계산값이 그대로 적혀 있으므로 계수를 바꾸면 그 줄의 수치도 함께 바꿔야 하고, 판별식이 완전제곱수일 필요는 없지만 부호는 결론과 일치해야 한다.'
    creative: '(1) 절편을 바꿔 D=0·D<0 인 경우의 빈칸으로 만들기(★1 유지) (2) 마지막 빈칸을 교점 개수 대신 교점의 좌표로 바꾸기(★2) (3) 같은 원·직선을 점과 직선 사이의 거리 풀이로 다시 채우게 해 두 도구를 비교시키기(★2 · I-SC 추가).'
```

```yaml
- id: GN-CM2-80-185
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    판별식을 이용해 ⑴~⑵ 두 쌍(일반형 원과 일차식)의 원과 직선의 위치 관계를 말하기.
  category: '대입 → 이차방정식 정리 → 판별식 부호 → 위치 관계 진술'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '판별식으로 원과 직선의 위치 관계 판정'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 쌍 모두 일반형 원이라 대입 후 전개·정리가 한 겹 더 붙는다. ⑴ 은 $D<0$, ⑵ 는 $D=0$ 으로 갈리지만 절차는 동일하고 통찰은 없다. 개념원리 익히기 구역·M_total 6 이라 −1 조건(M_total ≤ 5)에도 걸리지 않아 ★1 유지.
  tier: star_1
  mechanism_primary: '직선 식 대입 → 한 문자 이차방정식 정리 → D 부호 → 만나지 않는다/접한다/두 점'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 만나지 않는다. ⑵ 한 점에서 만난다. (접한다.)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/80-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 일차항 계수와 직선의 절편을 바꿀 수 있다. 제약 — 두 소문항이 서로 다른 위치 관계(부호 −, 0, +)를 하나씩 담당하도록 짝을 유지하고, 대입 후 계수가 정수로 떨어지게 잡는다.'
    creative: '(1) 세 소문항으로 늘려 $D>0$ 경우까지 한 번에 훑기(★1 유지) (2) 위치 관계를 주고 원·직선 중 한 계수를 찾게 뒤집기(★2 · I-BW) (3) 같은 쌍을 $d$ 와 $r$ 비교로도 풀게 해 두 판정법이 같은 결론을 준다는 것을 확인시키기(★2).'
```

```yaml
- id: GN-CM2-80-186
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    원 x^2+y^2=5 와 직선 x-2y+5=0 의 교점의 개수를 점과 직선 사이의 거리로 구하는 과정의 빈칸(분자·d·r·대소 기호·교점 개수) 채우기.
  category: '중심에서 직선까지의 거리 d → 반지름 r 과 비교 → 교점 개수'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '점과 직선 사이의 거리로 원과 직선의 교점 개수 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 $(0,0)$ 을 거리 공식에 넣으면 분자는 상수항 $5$ 뿐이고 $d=\sqrt{5}=r$ 이라 $d=r$, 교점 1개. 빈칸이 공식의 자리마다 하나씩 뚫려 있는 확인 문항이다. 익히기 구역·통찰 없음·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: 'd=|5|/√5=√5, r=√5 → d=r → 교점 1개(접한다)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$, $\sqrt{5}$, $\sqrt{5}$, $=$, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/80-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름의 제곱과 직선의 상수항을 바꿀 수 있다. 제약 — 중심이 원점이라 분자가 상수항만 남으므로, $d$ 와 $r$ 의 대소를 의도한 대로 만들려면 상수항과 $\sqrt{1^2+(-2)^2}$ 의 관계를 먼저 잡아야 하고 빈칸 아래 분모 계산은 고정이다.'
    creative: '(1) 상수항만 바꿔 $d>r$·$d<r$ 판으로 만들기(★1 유지) (2) 중심이 원점이 아닌 원으로 옮겨 분자에 중심 좌표가 들어가게 하기(★2) (3) 마지막 빈칸을 접점의 좌표로 바꾸기(★2 · I-RT 추가).'
```

```yaml
- id: GN-CM2-80-187
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    점과 직선 사이의 거리를 이용해 ⑴~⑵ 두 쌍의 원과 직선의 위치 관계를 말하기.
  category: '중심·반지름 읽기 → d 계산 → d 와 r 의 대소 → 위치 관계'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '점과 직선 사이의 거리로 원과 직선의 위치 관계 판정'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 중심이 원점이라 $d=\sqrt{10}>\sqrt{7}=r$, ⑵ 는 중심 $(-1,2)$·$r=2\sqrt{2}$ 에 $d=\sqrt{5}<r$ 이다. 무리수 두 개의 대소 비교가 한 번 들어가지만(제곱해서 비교) 통찰은 없다. 익히기 구역·M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: '중심·r 읽기 → d 계산 → d>r / d<r 판정 → 위치 관계 진술'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 만나지 않는다. ⑵ 서로 다른 두 점에서 만난다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/80-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 중심·반지름과 직선의 계수를 바꿀 수 있다. 제약 — $d$ 와 $r$ 가 모두 무리수일 때는 제곱해서 비교할 수 있게 근호 안이 정수로 떨어져야 하고, 두 소문항의 위치 관계가 서로 달라야 확인 효과가 남는다.'
    creative: '(1) 세 번째 소문항으로 접하는 쌍을 추가(★1 유지) (2) 직선을 고정하고 반지름을 미지수로 두어 위치 관계별 범위를 묻기(★2 · I-BW) (3) 두 원과 한 직선을 주고 어느 쪽이 만나는지 고르게 하기(★2).'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-81-e11
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x^2+y^2=2 와 직선 y=x+k 의 위치 관계가 ⑴ 서로 다른 두 점 ⑵ 접함 ⑶ 만나지 않음이 되도록 하는 실수 k 의 값 또는 범위.
  category: '대입 → 판별식(또는 d 와 r) → k 에 대한 부등식·방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원과 직선의 위치 관계로 미지수 k 의 값·범위 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=x+k$ 를 대입하면 $2x^2+2kx+k^2-2=0$, $D/4=-k^2+4$ 이므로 세 소문항이 $D>0,\ D=0,\ D<0$ 으로 그대로 갈린다(거리 풀이로도 $|k|/\sqrt{2}$ 와 $\sqrt{2}$ 의 비교로 같은 답). 위치 관계 ↔ 판별식 부호 대응은 이 예제가 가르치는 표준 도구라 통찰로 세지 않았다. 필수 예제 출발점 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '직선 대입 → D/4=-k^2+4 의 부호 → 두 점 / 접함 / 만나지 않음별 k 범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-2<k<2$ ⑵ $k=\pm 2$ ⑶ $k<-2$ 또는 $k>2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/81-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름의 제곱(2)과 직선의 기울기(1)를 바꿀 수 있다. 제약 — 기울기 $m$·반지름 $r$ 이면 경계가 $k=\pm r\sqrt{m^2+1}$ 이므로 답이 정수로 떨어지려면 $r^2(m^2+1)$ 이 완전제곱수여야 하고, 등호가 ⑵ 에만 붙도록 ⑴⑶ 의 부등호는 모두 순부등호로 유지한다.'
    creative: '(1) 중심이 원점이 아닌 원으로 옮겨 $d$ 계산에 중심 좌표가 들어가게 하기(★2 유지) (2) 직선을 $y=kx+1$ 처럼 기울기에 미지수를 두어 분모에 $k$ 가 들어가는 부등식으로 만들기(★3) (3) 「적어도 한 점에서 만난다」로 묶어 경계 포함 여부를 판단하게 하기(★3 · T-경계 강화).'
```

```yaml
- id: GN-CM2-81-188
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2=5 와 직선 y=2x+k 의 위치 관계가 ⑴ 서로 다른 두 점 ⑵ 접함 ⑶ 만나지 않음이 되도록 하는 실수 k 의 값 또는 범위.
  category: '대입 → 판별식(또는 d 와 r) → k 에 대한 부등식·방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원과 직선의 위치 관계로 미지수 k 의 값·범위 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제와 같은 골조에 기울기만 2 로 바뀌어 경계가 $|k|=r\sqrt{m^2+1}=\sqrt{5}\cdot\sqrt{5}=5$ 로 정수로 떨어진다. 확인체크는 바로 앞 필수 예제의 출발점을 그대로 쓰므로 ★2, 통찰 없음·M_total 7 이라 조정 없음.
  tier: star_2
  mechanism_primary: 'y=2x+k 대입 → D/4 부호 (또는 d=|k|/√5 와 r=√5 비교) → k 범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-5<k<5$ ⑵ $k=\pm 5$ ⑶ $k<-5$ 또는 $k>5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/81-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기울기(2)와 반지름의 제곱(5)을 바꿀 수 있다. 제약 — 경계 $|k|=r\sqrt{m^2+1}$ 이 정수가 되려면 $r^2(m^2+1)$ 이 완전제곱수여야 한다(예 $r^2=5,\ m=2$ / $r^2=2,\ m=1$).'
    creative: '(1) ⑵ 만 떼어 접선의 방정식을 모두 구하게 하기(★2 유지) (2) 「두 점에서 만나고 두 교점의 x좌표가 모두 양수」처럼 조건을 얹어 근의 부호까지 따지게 하기(★3 · I-MI) (3) k 를 정수로 제한해 개수를 묻기(★3).'
```

```yaml
- id: GN-CM2-81-189
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 (x-1)^2+(y-2)^2=9 에 접하고 기울기가 2 인 직선의 방정식을 모두 구하기.
  category: '기울기 고정 접선을 y=2x+c 로 놓기 → d=r → c 의 절댓값 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '기울기가 주어진 접선의 방정식(중심과의 거리 = 반지름)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심이 원점이 아니라 $y=mx\pm r\sqrt{m^2+1}$ 공식을 바로 쓸 수 없고 $2x-y+c=0$ 로 놓고 $|{-c}\,$ 자리 $|/\sqrt{5}=3$ 에서 $|c|=3\sqrt{5}$ 를 얻는 자리다. 접한다 → $d=r$ 는 앞 예제의 표준 도구라 통찰로 세지 않음. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '접선을 y=2x+c 로 두기 → 중심 (1,2) 까지 거리 = 3 → |c|=3√5 → 두 접선'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x+3\sqrt{5}$, $y=2x-3\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/81-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심 좌표·반지름·기울기를 바꿀 수 있다. 제약 — 「모두 구하시오」이므로 접선이 반드시 두 개 나와야 하고(기울기가 정해진 접선은 항상 두 개), 절편이 근호로 남는 것을 허용하지 않으려면 $r\sqrt{m^2+1}$ 이 유리수가 되게 잡는다. 중심이 직선 방향과 어긋나 있어도 답 구조는 $c=(2\cdot1-2)\pm3\sqrt{5}$ 로 동일하다.'
    creative: '(1) 기울기 대신 「x축에 수직」·「y절편이 주어진」 접선으로 바꾸기(★2 유지) (2) 원 위의 한 점을 주고 그 점에서의 접선으로 바꾸기(★3 · I-RT) (3) 두 접선 사이의 거리나 두 접점을 잇는 직선까지 묻기(★3 · M_s 상승).'
```

```yaml
- id: GN-CM2-82-e12
  page: 82
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 (x+1)^2+(y-1)^2=8 과 직선 2x+y-4=0 이 만나서 생기는 현의 길이.
  category: '중심에서 현까지의 거리 d → 피타고라스 → 현의 길이 2√(r²-d²)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원과 직선이 만나서 생기는 현의 길이'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(-1,1)$ 에서 직선까지 $d=5/\sqrt{5}=\sqrt{5}$, $r^2=8$ 이므로 반현이 $\sqrt{3}$, 현은 $2\sqrt{3}$. 「중심에서 현에 내린 수선이 현을 이등분한다」는 이 예제가 세우는 표준 도구라 통찰로 세지 않았다. 필수 예제 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'd=√5 → 반현=√(r²-d²)=√3 → 현의 길이 2√3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/82-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심·반지름·직선의 계수를 바꿀 수 있다. 제약 — $d<r$(실제로 만나야 함)이 필수이고, 답이 깔끔하려면 $r^2-d^2$ 가 완전제곱수나 간단한 무리수가 되도록 $d^2$ 를 잡는다.'
    creative: '(1) 현의 길이 대신 중심과 두 교점이 이루는 삼각형의 넓이를 묻기(★3) (2) 직선을 고정하고 반지름을 미지수로 두어 현의 길이가 주어진 값이 되게 하기(★2~3 · I-BW) (3) 두 평행한 현의 길이를 비교시키기(★3).'
```

```yaml
- id: GN-CM2-82-190
  page: 82
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2-6x-8y+21=0 과 직선 y=x+3 의 두 교점 A, B 에 대하여 선분 AB 의 길이.
  category: '일반형 → 표준형(중심·반지름) → d → 현의 길이 2√(r²-d²)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원과 직선이 만나서 생기는 현의 길이'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형을 완전제곱해 중심 $(3,4)$·$r=2$ 를 얻는 한 겹이 앞 예제보다 더 붙는다. $d=2/\sqrt{2}=\sqrt{2}$ 이므로 반현 $\sqrt{2}$, $\overline{\mathrm{AB}}=2\sqrt{2}$. 통찰 없음·확인체크 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '완전제곱 → 중심 (3,4)·r=2 → d=√2 → AB=2√(4-2)=2√2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/82-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일반형의 상수항과 일차항(중심·반지름)·직선의 절편을 바꿀 수 있다. 제약 — 완전제곱 후 $r^2>0$ 이어야 하고 $d<r$ 를 유지해야 두 교점이 생긴다. 직선이 $y=x+k$ 꼴이면 분모가 $\sqrt{2}$ 로 고정되므로 분자를 짝수로 잡아야 답이 정리된다.'
    creative: '(1) 두 교점의 좌표를 직접 구해 거리로 확인하는 경로와 비교시키기(★2~3 · I-SC) (2) 현 AB 를 지름으로 하는 원의 방정식을 묻기(★3) (3) 삼각형 OAB(O 는 원의 중심)의 넓이를 묻기(★3).'
```

```yaml
- id: GN-CM2-82-191
  page: 82
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=-2x+k 와 원 (x-2)^2+(y-1)^2=9 가 만나서 생기는 현의 길이가 4 일 때 양수 k 의 값.
  category: '현의 길이 → 반현·피타고라스로 d 역산 → 절댓값 방정식 → 양수 k 선택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 현의 길이 4 에서 반현 2 → d=√(r²-2²)=√5 로 거슬러 올라간 뒤 거리 공식을 k 에 대한 방정식으로 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '현의 길이 조건에서 직선(또는 원)의 미지수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 두 문항과 방향이 반대다 — 현 $4$ → 반현 $2$ → $d=\sqrt{9-4}=\sqrt{5}$ 를 먼저 얻고 $|5-k|/\sqrt{5}=\sqrt{5}$ 에서 $k=0$ 또는 $10$, 양수 조건으로 $10$. 역산 통찰 1개(BW d1)이나 M_total 7 이라 +1 조건(통찰 1개 이상 + M_total ≥ 8) 미충족 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '현 4 → 반현 2 → d=√5 역산 → |5-k|/√5=√5 → 양수 k=10'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/82-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름의 제곱(9)·현의 길이(4)·직선의 기울기(-2)를 바꿀 수 있다. 제약 — 현의 길이는 반드시 $2r$ 보다 작아야 하고, $r^2-(\text{반현})^2$ 이 제곱수나 간단한 무리수여야 $d$ 가 정리된다. 절댓값 방정식에서 두 해가 나오므로 「양수」 같은 한정 조건을 반드시 남겨야 답이 하나가 된다.'
    creative: '(1) 양수 조건을 빼고 모든 k 의 합을 묻기(★2 유지 · T-범위 제거) (2) 직선을 고정하고 반지름을 미지수로 두기(★3) (3) 현의 길이 대신 현이 원을 나누는 두 호의 비나 중심각을 주기(★3~4 · I-EQV 추가).'
```

```yaml
- id: GN-CM2-83-e13
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 P(3, 2) 에서 원 x^2+y^2+4x+2y+1=0 에 그은 접선의 접점을 T 라 할 때 선분 PT 의 길이.
  category: '일반형 → 중심·반지름 → 직각삼각형 PTC → PT=√(PC²-r²)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원 밖의 점에서 그은 접선의 길이'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱해 중심 $(-2,-1)$·$r=2$ 를 얻고 $\overline{\mathrm{PC}}^2=25+9=34$ 이므로 $\overline{\mathrm{PT}}=\sqrt{34-4}=\sqrt{30}$. 「접점에서 반지름과 접선이 수직」이라는 성질은 이 예제가 세우는 표준 도구라 통찰로 세지 않았다. 필수 예제 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '중심 (-2,-1)·r=2 → PC²=34 → PT=√(PC²-r²)=√30'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{30}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/83-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점 P 의 좌표와 원의 중심·반지름을 바꿀 수 있다. 제약 — P 가 원 밖에 있어야 하므로 $\overline{\mathrm{PC}}>r$ 를 반드시 확인하고, 답을 유리수로 만들려면 $\overline{\mathrm{PC}}^2-r^2$ 를 완전제곱수로 잡는다(예 PC²=25, r²=9 → 4).'
    creative: '(1) 접선의 길이 대신 접선의 방정식을 묻기(★3 · M_s 상승) (2) 두 접점을 잇는 선분의 길이나 사각형 PTCT′ 의 넓이를 묻기(★3) (3) 접선의 길이를 주고 점 P 의 좌표나 반지름을 되묻기(★2~3 · I-BW).'
```

```yaml
- id: GN-CM2-83-e14
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x^2+y^2-2x+4y-3=0 위의 점과 직선 x-y+3=0 사이의 거리의 최댓값과 최솟값.
  category: '중심-직선 거리 d → 원 위의 점까지 거리의 범위 [d-r, d+r]'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원 위의 점과 직선 사이의 거리의 최댓값·최솟값 (d ± r)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(1,-2)$·$r=2\sqrt{2}$, $d=6/\sqrt{2}=3\sqrt{2}$ 이므로 최대 $3\sqrt{2}+2\sqrt{2}=5\sqrt{2}$, 최소 $3\sqrt{2}-2\sqrt{2}=\sqrt{2}$. $d\pm r$ 공식 자체를 세우는 필수 예제라 통찰로 세지 않았다. ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '중심-직선 거리 d=3√2, r=2√2 → 최대 d+r=5√2 · 최소 d-r=√2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $5\sqrt{2}$, 최솟값: $\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/83-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 중심·반지름과 직선의 계수를 바꿀 수 있다. 제약 — $d>r$ 이어야 최솟값이 양수로 남는다($d<r$ 이면 직선이 원을 지나 최솟값 0 이 되어 골조가 달라진다). $d$ 와 $r$ 의 근호 부분을 같게 잡아야 답이 한 항으로 정리된다.'
    creative: '(1) 최대·최소를 주는 점의 좌표까지 묻기(★3 · M_s 상승) (2) 직선 대신 다른 원 위의 점과의 거리 최대·최소로 바꾸기(★3~4) (3) 원 위의 점과 직선이 이루는 삼각형의 넓이 최대로 확장(★3 · 86-203 골조).'
```

```yaml
- id: GN-CM2-83-192
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 A(-2, a) 에서 원 x^2+y^2-2x+4y-4=0 에 그은 접선의 접점을 B 라 할 때 AB=5 를 만족시키는 양수 a 의 값.
  category: '접선의 길이 조건 → AC²=AB²+r² 역산 → a 에 대한 이차방정식 → 양수 선택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 길이 5 에서 AC²=25+9=34 를 먼저 잡고 중심까지의 거리식을 a 에 대한 방정식으로 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '접선의 길이 조건에서 점의 좌표(미지수) 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(1,-2)$·$r=3$ 이므로 $\overline{\mathrm{AC}}^2=5^2+3^2=34$, 여기에 $9+(a+2)^2=34$ 를 세우면 $(a+2)^2=25$ 에서 $a=3$ 또는 $-7$, 양수 조건으로 $3$. e13 의 역방향이라 BW d1 하나. M_total 7 이라 +1 미충족 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: 'AB=5·r=3 → AC²=34 → 9+(a+2)²=34 → a=3 (양수)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/83-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '접선의 길이(5)·원의 중심과 반지름·점 A 의 고정 좌표(-2)를 바꿀 수 있다. 제약 — $\overline{\mathrm{AC}}^2-(\text{가로 차})^2$ 가 완전제곱수여야 $a$ 가 정수로 떨어지고, 두 해 중 하나만 남기려면 「양수」 같은 한정 조건이 필요하다. A 는 항상 원 밖에 있어야 한다.'
    creative: '(1) 양수 조건을 빼고 두 a 의 합·곱을 묻기(★2 유지) (2) 접선의 길이가 최소가 되는 a 를 묻기(★3 · I-BW d2) (3) 점 A 가 직선 위를 움직일 때 접선의 길이의 최솟값으로 확장(★4 · 중심-직선 거리와 결합).'
```

```yaml
- id: GN-CM2-83-193
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2+6x-8y+9=0 위의 점과 직선 3x-4y-10=0 사이의 거리의 최댓값과 최솟값.
  category: '일반형 → 중심·반지름 → d → 최대 d+r · 최소 d-r'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원 위의 점과 직선 사이의 거리의 최댓값·최솟값 (d ± r)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(-3,4)$·$r=4$, $d=35/5=7$ 이므로 최대 $11$·최소 $3$. 계수가 3, 4, 5 로 맞아떨어져 앞 예제보다 계산이 오히려 가볍다. 통찰 없음·확인체크 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '중심 (-3,4)·r=4 → d=7 → 최대 11 · 최소 3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $11$, 최솟값: $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/83-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심·반지름과 직선의 계수를 바꿀 수 있다. 제약 — 분모가 $\sqrt{3^2+4^2}=5$ 로 떨어지는 계수 조합(3·4·5, 5·12·13)을 쓰면 답이 정수로 남고, $d>r$ 를 유지해야 최솟값이 양수다.'
    creative: '(1) 최댓값과 최솟값의 곱·차를 묻기(★2 유지) (2) 거리가 정수가 되는 점의 개수로 바꾸기(★3 · 85-198 골조 · I-RT+I-MI) (3) 직선을 평행 이동시켜 최솟값이 0 이 되는 경우를 함께 묻기(★3 · T-경계).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-85-194
  page: 85
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 x^2+y^2-4x-6y+12=0 과 직선 kx+y-2=0 이 만나도록 하는 실수 k 의 값의 범위.
  category: '중심·반지름 → d ≤ r 부등식 → 양변 제곱 → k 에 대한 이차부등식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원과 직선의 위치 관계로 미지수 k 의 값·범위 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(2,3)$·$r=1$ 이므로 $|2k+1|/\sqrt{k^2+1}\le 1$ → $4k^2+4k+1\le k^2+1$ → $3k^2+4k\le 0$ → $-\dfrac{4}{3}\le k\le 0$. 기울기에 미지수가 있어 분모에도 $k$ 가 들어가는 것이 앞 문항들과 다른 점이다. 절차 자체는 표준(위치 관계 → $d$ 와 $r$ 비교)이라 통찰 0, M_total 8 이지만 +1 은 통찰 1개 이상을 요구하므로 STEP 1 출발점 ★2 유지. [분류 이슈] 절댓값 부등식 제곱·등호 포함 처리로 체감은 ★3 쪽.
  tier: star_2
  mechanism_primary: 'd=|2k+1|/√(k²+1) ≤ r=1 → 3k²+4k ≤ 0 → -4/3 ≤ k ≤ 0'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{4}{3}\le k\le 0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 중심·반지름과 직선이 지나는 고정점(0, 2)을 바꿀 수 있다. 제약 — 직선 $kx+y-2=0$ 은 항상 점 $(0,2)$ 를 지나므로 그 점이 원 밖에 있어야 「만나는 k」가 유한 구간이 되고, 제곱한 이차부등식의 두 근이 유리수로 떨어지게 계수를 잡는다.'
    creative: '(1) 「만나지 않도록」으로 뒤집어 여집합 구간을 묻기(★2 유지) (2) 「접하도록」으로 바꿔 등식 두 해와 접선 두 개를 구하게 하기(★2) (3) 직선이 지나는 고정점을 원 안에 두어 모든 k 에서 만남을 보이게 하기(★3 · I-EQV).'
```

```yaml
- id: GN-CM2-85-195
  page: 85
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    중심이 (-1, 3) 이고 직선 2x-y+k=0 에 접하는 원의 넓이가 20π 일 때 양수 k 의 값.
  category: '넓이 → 반지름 → 접한다(d=r) → 절댓값 방정식 → 양수 k 선택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '접한다는 조건(d = r)에서 직선·원의 미지수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\pi r^2=20\pi$ 에서 $r=2\sqrt{5}$, $d=|{-2}-3+k|/\sqrt{5}=|k-5|/\sqrt{5}$ 이므로 $|k-5|=10$ → $k=15$ 또는 $-5$, 양수 $15$. 넓이에서 반지름을 얻는 것은 공식 한 번의 직접 대입이라 역산 통찰(I-BW)로 세지 않았다(82-191·83-192 는 피타고라스를 한 겹 거꾸로 타는 경우로 구분). 통찰 0·M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '넓이 20π → r=2√5 → d=|k-5|/√5=r → |k-5|=10 → 양수 k=15'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심 좌표·넓이(20π)·직선의 기울기를 바꿀 수 있다. 제약 — 넓이는 $\pi\times(\text{제곱수 또는 간단한 정수})$ 여야 $r$ 이 정리되고, $r\sqrt{m^2+1}$ 이 정수라야 $k$ 가 정수로 떨어진다. 두 해 중 하나를 고르게 하려면 「양수」 한정을 유지한다.'
    creative: '(1) 넓이 대신 둘레를 주기(★2 유지) (2) 원의 방정식을 모두 구하게 해 두 원을 다 쓰게 하기(★2~3) (3) 두 직선에 동시에 접하는 조건으로 바꾸기(★3~4 · I-CON · 85-199 골조).'
```

```yaml
- id: GN-CM2-85-196
  page: 85
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 (x-2)^2+(y-3)^2=10 과 직선 3x+4y-8=0 의 두 교점을 지나는 원 중에서 넓이가 최소인 원의 넓이.
  category: '넓이 최소 → 현을 지름으로 하는 원 → 반현 계산 → 넓이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 교점을 지나는 원 중 넓이 최소」를 「그 두 교점을 잇는 현을 지름으로 하는 원」으로 동치 변환(반지름이 반현일 때가 하한)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 교점을 지나는 원 중 넓이가 최소인 원(현이 지름)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $d=|6+12-8|/5=2$ 이므로 반현은 $\sqrt{10-4}=\sqrt{6}$, 최소 원의 반지름이 곧 반현이라 넓이는 $6\pi$. 두 교점을 지나는 원은 무수히 많지만 현이 지름일 때 반지름이 최소라는 한 겹을 스스로 놓아야 해서 EQV d2 하나. [분류 이슈] 통찰은 있으나 M_total 6 이라 +1 규칙(통찰 1개 이상 + M_total ≥ 8) 미충족 → 라벨 ★2, 후보 ★3.
  tier: star_2
  mechanism_primary: '넓이 최소 = 현이 지름 → d=2 → 반현 √6 = 반지름 → 넓이 6π'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 중심·반지름의 제곱(10)과 직선의 계수를 바꿀 수 있다. 제약 — $d<r$ 로 두 교점이 실제로 생겨야 하고, $r^2-d^2$ 가 정수라야 넓이가 $(\text{정수})\pi$ 로 떨어진다. 분모가 5 로 떨어지는 3·4·5 계수 조합이 계산을 가볍게 한다.'
    creative: '(1) 넓이 대신 그 최소 원의 방정식을 구하게 하기(★3 · 중점 계산이 붙어 M_s 상승) (2) 「두 교점과 원점을 지나는 원」으로 바꿔 원+직선 계수 묶음($x^2+y^2+\cdots+k(3x+4y-8)=0$)을 쓰게 하기(★3~4 · I-RT) (3) 최소 원의 둘레나 중심 좌표를 묻기(★2~3).'
```

```yaml
- id: GN-CM2-85-197
  page: 85
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 P(2, 1) 에서 중심이 (4, 5) 인 원에 그은 접선의 길이가 3 일 때 이 원의 반지름의 길이.
  category: '접선의 길이 → 직각삼각형에서 r²=PC²-PT² 역산'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 길이 3 과 PC²=20 에서 반지름을 거꾸로 $r^2=\\overline{PC}^2-\\overline{PT}^2$ 로 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '접선의 길이 조건에서 원의 반지름 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\overline{\mathrm{PC}}^2=4+16=20$, $r^2=20-9=11$ 이라 $r=\sqrt{11}$ 로 두 줄이면 끝난다. 83-e13 의 역방향(BW d1)이라 −1 조건(통찰 0 + M_total ≤ 5)에는 걸리지 않지만 이 범위 STEP 1 중 가장 가볍다. [분류 이슈] 통찰을 인정하지 않으면 ★1 후보 — 라벨은 STEP 1 출발점 ★2 로 둔다.
  tier: star_2
  mechanism_primary: 'PC²=20 → r²=PC²-PT²=20-9=11 → r=√11'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 접선의 길이(3)를 바꿀 수 있다. 제약 — $\overline{\mathrm{PC}}^2>\overline{\mathrm{PT}}^2$ 라야 P 가 원 밖에 있고, $r$ 를 유리수로 만들려면 $\overline{\mathrm{PC}}^2-\overline{\mathrm{PT}}^2$ 를 완전제곱수로 잡는다(예 25-9=16).'
    creative: '(1) 반지름 대신 원의 방정식·넓이를 묻기(★2 유지) (2) 중심을 미지수로 두고 접선의 길이와 반지름을 함께 주기(★3 · 방정식 하나 더) (3) 점 P 가 직선 위를 움직일 때 접선의 길이의 최솟값(★4 · 중심-직선 거리 결합).'
```

```yaml
- id: GN-CM2-85-198
  page: 85
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 x^2+y^2-4x+8y+16=0 위의 점 P 와 직선 4x+3y-16=0 사이의 거리가 정수가 되도록 하는 점 P 의 개수.
  category: '거리의 범위 [d-r, d+r] → 정수값마다 평행선과 원의 교점 개수 → 합산'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선까지의 거리가 k 인 점」을 「직선에 평행하고 거리가 k 인 두 직선과 원의 교점」으로 옮겨 개수 문제로 전환"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 가 최솟값·최댓값(2, 6)이면 접점 1개, 그 사이 정수(3, 4, 5)면 2개로 경우를 나눠 세기"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '원 위의 점과 직선 사이의 거리가 정수인 점의 개수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(2,-4)$·$r=2$, $d=|8-12-16|/5=4$ 이므로 거리의 범위는 $[2,\,6]$. 끝값 2, 6 은 접점이라 각 1개, 중간 정수 3, 4, 5 는 각 2개 → $1+1+3\times2=8$. 거리 값을 평행선으로 바꾸는 전환(RT d2)과 끝값·중간값 분기(MI d1)로 통찰 2개 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '거리 범위 [d-r, d+r]=[2,6] → 정수 k 마다 평행선과 원의 교점 개수(끝 1·중간 2) → 8'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심·반지름과 직선의 계수를 바꿔 $[d-r,\ d+r]$ 안의 정수 개수를 조절할 수 있다. 제약 — $d-r$ 와 $d+r$ 가 정수인지 아닌지에 따라 끝값이 1개로 세어지는지 아예 빠지는지가 달라지므로(예 $[2,6]$ 은 8개지만 $[2.5,\ 6.5]$ 는 $3,4,5,6$ 각 2개로 8개) 의도한 개수를 먼저 정하고 $d$, $r$ 를 역으로 잡는다. 분모 5 조합이 편하다.'
    creative: '(1) 거리가 특정 정수인 점의 개수만 묻기(★2) (2) 거리가 자연수인 점을 두 원 위에서 세기(★4) (3) 「거리가 정수인 점이 6개가 되도록 하는 반지름의 범위」로 뒤집기(★4 · I-BW+I-VF).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-85-199
  page: 85
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    직선 y=ax+b 가 두 원 x^2+y^2=1, x^2+(y-2)^2=4 에 동시에 접할 때 a^2+b^2 의 값.
  category: '두 접함 조건 d=r 을 연립 → 공통 분모 소거 → b 결정 → a² 검증'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 원의 접함 조건 $|b|=\\sqrt{a^2+1}$, $|b-2|=2\\sqrt{a^2+1}$ 에서 공통인 $\\sqrt{a^2+1}$ 을 소거해 b 하나에 대한 식으로 통합"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "후보 $b=-2,\\ \\dfrac{2}{3}$ 중 $a^2=b^2-1\\ge 0$ 을 만족하지 않는 $b=\\dfrac{2}{3}$ 을 기각"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '두 원에 동시에 접하는 직선(공통접선)의 방정식·계수'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $ax-y+b=0$ 로 놓으면 두 조건이 $|b|=\sqrt{a^2+1}$, $|b-2|=2\sqrt{a^2+1}$ 이고 나누면 $|b-2|=2|b|$ → $b=-2$ 또는 $\dfrac{2}{3}$. 뒤엣것은 $a^2=b^2-1<0$ 이라 기각되고 $b=-2$ 에서 $a^2=3$ → $a^2+b^2=7$. 공통 인자 소거(CON d2)와 후보 기각(VF d2) 두 통찰 → STEP 2 출발점 ★3 에서 +1 → ★4(저노출 유형 VF 포함으로 게이트 통과).
  tier: star_4
  mechanism_primary: '두 d=r 조건 → |b-2|=2|b| → b=-2 (b=2/3 은 a²<0 로 기각) → a²+b²=7'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 중심 사이 거리와 반지름의 비를 바꿀 수 있다. 제약 — 두 원이 내접·포함 관계면 공통접선이 사라지거나 개수가 달라지므로 반지름 비와 중심 거리의 관계를 먼저 확인해야 하고, 기각되는 후보가 실제로 하나 남도록 반지름 비를 잡아야 I-VF 골조가 유지된다.'
    creative: '(1) 두 원의 중심을 모두 축 위에 두지 않아 분자가 복잡해지게 하기(★4 유지) (2) 공통접선의 개수만 묻기(★3 · 두 원의 위치 관계) (3) 한 원의 반지름을 미지수로 두고 공통접선이 3개가 되도록 하는 값을 묻기(★5 후보 · I-VF+I-MI).'
```

```yaml
- id: GN-CM2-85-200
  page: 85
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    직선 y=x 위에 중심이 있고 x축·y축에 동시에 접하는 원 중 직선 3x-4y+12=0 에 접하는 원이 2개일 때, 두 중심 A, B 에 대한 선분 AB 의 제곱.
  category: '중심 (a, a)·반지름 |a| 로 치환 → d=r 절댓값 방정식 → 부호별 두 해 → 거리 제곱'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y=x 위에 중심 + 두 축에 동시에 접함」을 「중심 $(a,\\,a)$, 반지름 $|a|$」라는 한 문자 표현으로 동치 변환"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$|12-a|=5|a|$ 를 a 의 부호로 나눠 제1사분면 쪽 원과 제3사분면 쪽 원 두 개를 모두 찾기(문제의 「개수는 2」가 두 경우를 모두 요구)"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '두 축에 동시에 접하는 원과 직선의 접함 조건'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중심을 $(a,a)$, 반지름을 $|a|$ 로 놓으면 접함 조건이 $|{-a}+12|/5=|a|$ → $|12-a|=5|a|$ 이고, $a>0$ 에서 $a=2$, $a<0$ 에서 $a=-3$ 이라 중심은 $(2,2)$, $(-3,-3)$ → $\overline{\mathrm{AB}}^2=25+25=50$. 중심·반지름을 한 문자로 묶는 동치 변환(EQV d2)과 부호 분기(MI d2)로 통찰 2개 → STEP 2 ★3 에서 +1 → ★4(교육청 기출 가산은 중복 적용하지 않음).
  tier: star_4
  mechanism_primary: '중심 (a,a)·r=|a| → |12-a|=5|a| → a=2, -3 → AB²=50'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/85-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선 $3x-4y+12=0$ 의 계수와 상수항을 바꿀 수 있다. 제약 — 분모가 5 로 떨어지는 3·4·5 조합이라야 $a$ 가 정수로 나오고, 상수항의 부호·크기에 따라 접하는 원이 2개가 아니라 1개나 3개가 될 수 있으므로 발문의 「개수는 2」와 반드시 맞춰야 한다.'
    creative: '(1) 중심을 $y=-x$ 위로 옮겨 반지름이 $|a|$ 로 같게 유지되는지 확인시키기(★4 유지) (2) 두 원의 넓이의 합·차를 묻기(★4) (3) 접하는 원의 개수가 되도록 하는 상수항의 범위를 되묻기(★5 후보 · I-BW+I-VF).'
```

```yaml
- id: GN-CM2-86-201
  page: 86
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 x^2+y^2-2x+4y-5=0 위의 점 (4, -1) 에서의 접선이 점 (-1, k) 를 지날 때 k 의 값.
  category: '중심-접점 기울기 → 수직 조건으로 접선의 기울기 → 접선의 방정식 → 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접선 ⊥ 중심-접점 반지름」이라는 기하 성질을 기울기의 곱이 -1 이라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '원 위의 점에서의 접선의 방정식'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(1,-2)$ 에서 접점 $(4,-1)$ 로 가는 기울기가 $\dfrac{1}{3}$ 이므로 접선의 기울기는 $-3$, 접선은 $y=-3x+11$ 이고 $x=-1$ 을 넣으면 $k=14$. 중심이 원점이 아니라 $x_1x+y_1y=r^2$ 공식을 바로 못 쓰고 수직 조건을 거쳐야 한다(RT d1). 통찰 1개·M_total 6 이라 +1 미충족 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '반지름 기울기 1/3 → 접선 기울기 -3 → y=-3x+11 → x=-1 대입 → k=14'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/86-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 중심·반지름과 접점, 지나는 점의 x좌표를 바꿀 수 있다. 제약 — 접점은 반드시 원 위의 점이어야 하고(대입해서 확인), 반지름 기울기가 0 이나 정의되지 않는 경우(접선이 수직·수평)를 피해야 기울기 계산이 일반형으로 유지된다.'
    creative: '(1) 접선의 y절편이나 접선이 두 축과 만드는 삼각형의 넓이를 묻기(★3 유지) (2) 원 밖의 점에서 그은 두 접선으로 바꿔 기울기를 미지수로 두기(★4 · I-MI) (3) 접점을 미지수로 두고 접선이 주어진 점을 지나게 하는 접점을 모두 구하기(★4).'
```

```yaml
- id: GN-CM2-86-202
  page: 86
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 x^2+y^2+4y+k=0 과 직선 y=-x-4 의 두 교점 A, B 와 원의 중심 C 로 이루어진 삼각형 ABC 의 넓이가 4 일 때 상수 k 의 값 (k<4).
  category: '넓이 = ½·현·중심거리 → 현의 길이 역산 → r² 역산 → k'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형의 넓이 4 를 「밑변 = 현 AB, 높이 = 중심과 직선 사이의 거리 $\\sqrt{2}$」로 분해해 현의 길이를 역산하고 거기서 $r^2$ → k 로 거슬러 올라감"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '현과 원의 중심이 이루는 삼각형의 넓이 조건에서 미지수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(0,-2)$ 에서 직선 $x+y+4=0$ 까지 $d=\sqrt{2}$ 로 고정이므로 넓이 $=\dfrac{1}{2}\overline{\mathrm{AB}}\cdot\sqrt{2}=4$ 에서 $\overline{\mathrm{AB}}=4\sqrt{2}$, 반현 $2\sqrt{2}$ → $r^2=2+8=10=4-k$ → $k=-6$. 넓이에서 현으로 내려가는 역산이 한 겹(BW d2). M_total 7 이라 +1 미충족 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: '넓이 4 = ½·AB·d(=√2) → AB=4√2 → r²=d²+(반현)²=10 → 4-k=10 → k=-6'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/86-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 일차항(중심)·직선의 상수항·삼각형의 넓이를 바꿀 수 있다. 제약 — $k<4$ 처럼 $r^2>0$ 을 보장하는 조건을 함께 줘야 하고, 두 교점이 생기려면 최종 $r^2>d^2$ 여야 한다. $d$ 가 $\sqrt{2}$ 처럼 단순해야 넓이식에서 현이 깔끔히 떨어진다.'
    creative: '(1) 넓이 대신 삼각형 ABC 가 직각·정삼각형이 되는 k 를 묻기(★4 · I-EQV) (2) 중심 대신 원점을 꼭짓점으로 바꾸기(★3~4) (3) 넓이가 최대가 되는 k 를 묻기(★4 · I-BW d3).'
```

```yaml
- id: GN-CM2-86-203
  page: 86
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 x^2+y^2=5 위의 점 P 와 두 점 A(-3, 0), B(0, 6) 에 대하여 삼각형 PAB 의 넓이의 최댓값.
  category: '밑변 AB 고정 → 높이 = 점과 직선 AB 사이의 거리 → 최대 d+r → 넓이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「삼각형 PAB 의 넓이 최대」를 「밑변 AB 는 고정이므로 P 에서 직선 AB 까지의 거리가 최대」로 동치 변환한 뒤 d+r 공식으로 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '원 위의 점과 두 정점이 이루는 삼각형 넓이의 최댓값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선 AB 는 $2x-y+6=0$, $\overline{\mathrm{AB}}=3\sqrt{5}$ 이고 중심 $(0,0)$ 에서 AB 까지 $d=\dfrac{6}{\sqrt{5}}$, $r=\sqrt{5}$ 이므로 높이의 최댓값은 $\dfrac{6}{\sqrt{5}}+\sqrt{5}=\dfrac{11}{\sqrt{5}}$ → 넓이 $\dfrac{1}{2}\cdot3\sqrt{5}\cdot\dfrac{11}{\sqrt{5}}=\dfrac{33}{2}$. 넓이 최대를 거리 최대로 바꾸는 한 겹(EQV d2) 뒤는 83-e14 의 표준 도구. M_total 6 → +1 미충족, STEP 2 ★3.
  tier: star_3
  mechanism_primary: 'AB 직선·길이 고정 → 높이 최대 = d+r = 11/√5 → 넓이 최대 33/2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{33}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/86-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 정점 A, B 의 좌표와 원의 반지름의 제곱을 바꿀 수 있다. 제약 — 직선 AB 가 원과 만나지 않아야($d>r$) 최댓값이 $d+r$ 한 가지로 깔끔하고, $\overline{\mathrm{AB}}$ 와 분모의 근호가 약분되게 잡아야 답이 유리수로 남는다.'
    creative: '(1) 넓이의 최솟값(직선이 원과 만나면 0)을 함께 묻기(★3~4 · T-경계) (2) P 를 원이 아니라 다른 도형 위에서 움직이게 하기(★4) (3) 넓이가 주어진 값이 되는 P 의 개수를 묻기(★4 · 85-198 골조 결합).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-86-204
  page: 86
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    두 원 C1: (x+6)^2+y^2=4, C2: (x-5)^2+(y+3)^2=1 위의 점 P, Q 에서 직선 l: y=x-2 에 내린 수선의 발을 각각 H1, H2 라 할 때 선분 H1H2 의 길이의 최댓값 M 과 최솟값 m 의 곱 Mm.
  category: '원의 정사영 = 길이 2r 인 선분 → 두 중심의 정사영 사이 거리 ±(r1+r2) → 곱셈 공식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「원 위의 점의 수선의 발」이 움직이는 범위를 「원을 직선 l 위로 정사영한 길이 2r 의 선분(중심의 정사영 ± r)」으로 전환"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 선분의 끝점 조합을 일일이 따지지 않고 $M=d+3$, $m=d-3$ 하나로 묶은 뒤 $Mm=d^2-9$ 곱셈 공식으로 계산"
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: '원 위의 점의 정사영(수선의 발)이 만드는 선분의 길이의 최대·최소'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 중심 $(-6,0)$, $(5,-3)$ 의 $l$ 위 정사영 사이 거리는 $d=\dfrac{|(5-(-6))+((-3)-0)|}{\sqrt{2}}=\dfrac{8}{\sqrt{2}}=4\sqrt{2}$ 이고, $\mathrm{H_1}$ 은 그 정사영에서 $\pm2$, $\mathrm{H_2}$ 는 $\pm1$ 만큼 움직이므로 $M=4\sqrt{2}+3$, $m=4\sqrt{2}-3$ → $Mm=32-9=23$. 수선의 발의 자취를 선분으로 바꾸는 전환(RT d3)이 핵심. [분류 이슈] 통찰 2개·depth 3 으로 +1 후보지만 ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU)를 못 넘어 실력 UP 출발점 ★4 에서 멈춤.
  tier: star_4
  mechanism_primary: '두 원을 l 위로 정사영 → 중심 정사영 거리 4√2 ± (2+1) → Mm=(4√2)²-3²=23'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$23$'
  answer_source: "답지"
  figure: "crop:fig-86-204.png"
  latex: latex-bank/gn-cm2/items/86-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 중심의 좌표·두 반지름·직선 l 의 기울기를 바꿀 수 있다. 제약 — 두 정사영 선분이 겹치지 않아야($d>r_1+r_2$) $m$ 이 양수로 남아 $Mm=d^2-(r_1+r_2)^2$ 가 성립하고, 기울기 1 이라 분모가 $\sqrt{2}$ 로 고정되므로 중심 좌표의 $x-y$ 차를 짝수로 잡아야 $d$ 가 정리된다. 그림의 두 원·직선 배치는 고정.'
    creative: '(1) 두 원이 직선의 같은 쪽·반대쪽에 있게 배치를 바꿔도 정사영 골조는 그대로임을 확인시키기(★4 유지) (2) $M+m$ 이나 $M-m$ 을 묻기($M-m=2(r_1+r_2)$ 로 즉답 · ★3~4) (3) 선분 PQ 의 길이의 최대·최소와 비교시키기(★5 후보 · I-SC 추가 — 정사영과 중심거리 두 갈래).'
```

```yaml
- id: GN-CM2-86-205
  page: 86
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 점 A(-1, 1), B(2, 1) 로부터의 거리의 비가 2:1 인 점 P 에 대하여 각 PAB 의 크기가 최대일 때 cos(각 PAB) 의 값.
  category: '거리의 비 조건 → 아폴로니우스 원 → 각 최대 = AP 가 그 원에 접할 때 → 직각삼각형'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「$\\overline{PA}:\\overline{PB}=2:1$」이라는 비 조건을 좌표식 $\\overline{PA}^2=4\\overline{PB}^2$ 로 옮겨 점 P 의 자취가 원 $(x-3)^2+(y-1)^2=4$ 임을 끌어냄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「각 PAB 가 최대」를 「반직선 AP 가 자취 원에 접할 때」로 동치 변환하고 접점에서의 직각삼각형으로 sin 값을 읽음"
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: '거리의 비가 일정한 점의 자취(아폴로니우스 원)와 각의 최대'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    자취는 중심 $(3,1)$·반지름 2 인 원이고 이 중심은 직선 AB($y=1$) 위에 있어 $\overline{\mathrm{AC}}=4$. 각 PAB 가 최대인 것은 AP 가 자취 원에 접할 때이므로 $\sin(\angle\mathrm{PAB})=\dfrac{2}{4}=\dfrac{1}{2}$ → $30^\circ$ → $\cos=\dfrac{\sqrt{3}}{2}$. 자취 도출(RT d3)과 각 최대 → 접선 전환(EQV d2) 두 겹. [분류 이슈] +1 후보지만 ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU) 미충족 → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '거리 비 2:1 → 자취 원 (x-3)²+(y-1)²=4 → 각 최대 = AP 접선 → sin=2/4 → cos=√3/2'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/86-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 거리의 비(2:1)를 바꿀 수 있다. 제약 — 비가 1:1 이면 자취가 원이 아니라 수직이등분선이 되어 골조가 무너지고, $\sin$ 값 $\dfrac{r}{\overline{\mathrm{AC}}}$ 가 특수각이 되도록 비와 두 점 사이 거리를 맞춰야 $\cos$ 이 깔끔하다. A, B 를 같은 수평선 위에 두면 $\overline{\mathrm{AC}}$ 계산이 한 줄로 끝난다.'
    creative: '(1) 각의 최댓값 자체나 그때의 P 의 좌표를 묻기(★4 유지 · 접점 계산으로 M_s 상승) (2) 삼각형 PAB 의 넓이의 최댓값으로 바꾸기(★4 · 86-203 골조와 결합) (3) 자취 원과 다른 원의 위치 관계까지 얹기(★5 후보 · I-XU 추가).'
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 4 · ★2 14 · ★3 4 · ★4 4 · ★5 0
- 통찰형 12 · 절차형 14 · premium 0
- 통찰 유형 분포(누적 17): I-BW 4 · I-EQV 4 · I-RT 4 · I-MI 2 · I-CON 2 · I-VF 1 (SYM·XU·PD·SC 0)
- 구역별 ★: 개념원리 익히기 4문 모두 ★1 · 필수·발전 예제 10문 모두 ★2 · STEP 1 ★2 4 + ★3 1 · STEP 2 ★3 3 + ★4 2 · 실력 UP ★4 2
- type_hint 상위: 「거리의 최대·최소 $d\pm r$ 계열」 5(83-e14 · 83-193 · 85-198 · 86-203 · 86-204) · 「접함 조건 $d=r$ 로 미지수·접선 구하기」 5(81-189 · 85-195 · 85-199 · 85-200 · 86-201) · 「위치 관계 판정(판별식·거리)」 4(80-184~80-187) · 「위치 관계로 미지수 범위」 3(81-e11 · 81-188 · 85-194) · 「현의 길이 계열」 3(82-e12 · 82-190 · 82-191) · 「접선의 길이 계열」 3(83-e13 · 83-192 · 85-197)
- 그림: 1문(`crop:fig-86-204.png`) — 나머지 25문은 발문만으로 골조가 잡힌다
- 답 출처: 답지 22 · 본문 풀이 4(필수 예제 81-e11 · 82-e12 · 83-e13 · 83-e14). 전사 답과 골조가 어긋나는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 엇갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-85-194 | 절댓값 부등식 제곱·등호 포함 처리로 M_total 8 이지만 통찰 0 이라 +1 규칙(통찰 1개 이상 필요) 미적용 → 라벨 ★2 | ★2 / ★3 |
| GN-CM2-85-196 | 「넓이 최소인 원 = 현이 지름」 동치 변환(EQV d2)이 있으나 M_total 6 이라 +1 미충족 → 라벨 ★2 | ★2 / ★3 |
| GN-CM2-85-197 | STEP 1 중 가장 가벼움(M_total 5 · 두 줄). 역산을 BW d1 으로 인정해 −1 을 피했고, 인정하지 않으면 ★1 | ★1 / ★2 |
| GN-CM2-86-204 | 통찰 2개(RT d3 + CON d2)로 +1 후보지만 ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU) 미충족 → ★4 에서 멈춤 | ★4 / ★5 |
| GN-CM2-86-205 | 같은 이유(RT d3 + EQV d2, 통찰 2개)로 ★5 게이트 미충족 → ★4 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「위치 관계 판정」과 ⑵ 「위치 관계로 미지수 범위 구하기」는 방향(정·역)이 달라 분리한다 — 후자는 항상 매개변수가 들어가 $M_a$ 가 한 단 높다. ⑶ 「원 위의 점과 직선 사이 거리의 최대·최소($d\pm r$)」는 이 단원의 최대 계열(5문)이고 85-198(정수 개수)·86-203(삼각형 넓이)·86-204(정사영)처럼 파생이 넓어 상위 유형으로 세운 뒤 하위 갈래를 붙이는 편이 낫다. ⑷ 「원 위의 점에서의 접선」(86-201)은 중심이 원점이 아닐 때 공식($x_1x+y_1y=r^2$)이 막히는 자리라 별도 유형이 필요하다.
- **통합해도 될 유형**: 82-191(현의 길이에서 k)·83-192(접선의 길이에서 좌표)·85-197(접선의 길이에서 반지름)은 모두 「피타고라스 관계를 거꾸로 타서 미지수 하나를 구한다」는 같은 골조(I-BW d1)라 「원의 직각삼각형 관계 역산」 하나로 묶고 무엇을 묻느냐만 하위 갈래로 둔다. 83-e14·83-193 도 같은 유형의 수치 변주라 한 유형이면 충분하다.
- **카탈로그 base ★ 초안**: 위치 관계 판정 ★1~2 · 위치 관계로 미지수 범위 ★2 · 현의 길이 ★2 · 접선의 길이 ★2 · $d\pm r$ 최대·최소 ★2 · 공통접선/두 축에 접하는 원 ★4 · 정사영·아폴로니우스 원 결합 ★4. 이 범위에는 ★5 가 없으므로(SC·VF·SYM·XU 조합 부족) ★5 슬롯은 다른 단원과 결합한 변형에서 만들어야 한다.
