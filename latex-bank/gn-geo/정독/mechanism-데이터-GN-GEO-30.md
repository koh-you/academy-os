---
name: mechanism-데이터-GN-GEO-30
description: 개념원리 기하 30 점과 평면 사이의 거리(1/1 · 242~245쪽 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 30 점과 평면 사이의 거리
  unit_code: GEO-30
  part: "1/1"
  extract_range: "242~245쪽 · 242-e16~245-520"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·STEP 난이도)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 30 점과 평면 사이의 거리 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 242~245쪽, 단원 「30 점과 평면 사이의 거리」 17문항 전수를 다룬다. 전사본 group 은 네 구역이다. 앞의 `필수·발전 예제` 6문은 필수 예제 2문(`242-e16` 점과 평면 사이의 거리 · `243-e17` 구와 평면의 위치 관계)과 각 예제 뒤에 붙는 확인체크 4문이 번갈아 놓인 구조이고, 뒤의 연습문제 세 구역은 `STEP 1` 5문 · `STEP 2` 4문 · `실력 UP` 2문이다. **이 구역의 확인체크는 독립된 개념원리 익히기 통번호가 아니라 바로 위 필수 예제의 짝 문제**이므로 출발점을 태그 문자 그대로의 ★1 이 아니라 그 예제의 ★2 로 읽었다 — GN-GEO-11·24 파일과 같은 해석이다. 연습문제는 지시대로 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 조정했다.

단원 전체가 **하나의 공식(점 $(x_1,y_1,z_1)$ 과 평면 $ax+by+cz+d=0$ 사이의 거리 $=|ax_1+by_1+cz_1+d|/\sqrt{a^2+b^2+c^2}$)을 어디에 대입할지 옮겨 놓는 작업**으로 갈린다. 절차형 5문은 공식이 쓰일 점과 평면이 발문에 이미 드러나 있고, 통찰형 12문은 그 점·평면을 **만들어 놓는 단계**가 따로 필요하다 — 평행한 두 평면을 한 평면 위의 점으로 바꾸거나(`242-507`), 구와 평면의 접함·교원·거리의 최대최소를 「중심과 평면 사이의 거리 $d$ 와 반지름 $r$」의 관계로 환원하거나(`243-e17`·`243-509`·`244-513`·`244-514`), 평면 자체가 주어지지 않아 법선벡터를 두 벡터의 외적으로 먼저 결정하는 것(`244-510`·`245-515`·`245-516`·`245-517`)이다. 마지막 실력 UP 2문은 그 위에 정사영 배율(`245-519`)과 이면각 이등분면의 자취 해석(`245-520`)이 한 층 더 얹힌다. 그림이 붙은 문항은 `245-518` 한 문뿐이고, 직육면체의 세 모서리가 좌표축 위에 2·3·1 로 표시돼 있어 절편형 평면식으로 바로 옮겨진다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-242-e16
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 법선벡터가 (1, 2, -2) 이고 원점까지의 거리가 2 인 평면의 방정식을 모두 구하기.
    ⑵ 평행한 두 평면 x+2y-z=4, x+2y-z=6 사이의 거리를 구하기.
  category: "법선벡터로 평면식 세우기 → 점과 평면 사이의 거리 공식 → 절댓값 두 해 / 평행평면은 한 평면 위의 점으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리 · 평행한 두 평면 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 법선벡터를 계수로 쓰면 x+2y-2z+d=0 한 줄, |d|/3=2 에서 d=±6 두 평면. ⑵ 두 평면이 평행함을 확인한 뒤 한 평면 위의 점(4,0,0)을 잡아 같은 공식에 넣는다.
    공식 대입 자체는 한 단계씩이라 통찰 라벨을 붙이지 않았다. 함정은 절댓값을 벗길 때 부호 두 갈래를 모두 남기는 것(T-부호) 하나다.
    필수 예제 출발 ★2, 통찰 0·M_total 5 로 -1 후보지만 소문항 둘과 두 해 관리가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "법선벡터를 계수로 평면식 세우기 → |d|/|n| = 주어진 거리 → 절댓값 두 해 (평행평면은 한 평면 위의 점을 잡아 같은 공식)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x+2y-2z+6=0$, $x+2y-2z-6=0$ ⑵ $\dfrac{\sqrt{6}}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/242-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 법선벡터 성분과 거리 값, ⑵ 두 평면의 상수항을 바꿀 수 있다. 제약: |n| 이 무리수면 답이 유리화 형태가 되므로 (1,2,-2)·(2,3,6)처럼 |n| 이 정수인 조합을 쓰면 답이 정수로 떨어진다. ⑵ 는 두 평면의 법선벡터 계수가 완전히 같아야(평행) 문제가 성립한다."
    creative: "(1) 원점 대신 특정 점까지의 거리로 바꾸면 골조 동일 ★2 (2) 두 평면 사이의 거리를 주고 상수항을 역으로 묻게 하면 I-BW 가 붙어 ★3 (3) 평행 조건을 숨기고 법선벡터에 미지수를 넣어 「평행할 때의 거리」를 묻게 하면 ★3 (4) 세 평면 중 평행한 쌍을 고르게 하면 I-MI 가 붙어 ★3."
```

```yaml
- id: GN-GEO-242-506
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    법선벡터가 (3, -5, 4) 이고 원점까지의 거리가 √2 인 평면의 방정식을 모두 구하기.
  category: "법선벡터로 평면식 세우기 → 원점과의 거리 공식 → 절댓값 두 해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리 · 원점까지의 거리가 주어진 평면"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    242-e16 ⑴ 의 짝 문제. 3x-5y+4z+d=0 에서 |d|/√50=√2, |d|=10 으로 두 평면.
    통찰 없이 공식 한 번이지만 √50 을 5√2 로 정리해 약분하는 계산과 부호 두 갈래(T-부호)가 남는다.
    확인체크·짝 예제 출발 ★2, 통찰 0·M_total 4 로 -1 후보지만 두 해 관리가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "3x-5y+4z+d=0 → |d|/√50 = √2 → d = ±10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3x-5y+4z+10=0$, $3x-5y+4z-10=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/242-506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선벡터 성분과 거리 값을 바꿀 수 있다. 제약: |d| = 거리 × |n| 이 정수로 떨어지도록 거리와 |n| 을 짝지어야 한다(여기서는 √2 × 5√2 = 10)."
    creative: "(1) 원점 대신 한 점까지의 거리로 바꾸면 골조 동일 ★2 (2) 법선벡터 대신 평행한 평면 하나를 주고 「그 평면에 평행하고 원점까지 거리가 k」로 바꾸면 ★2 (3) 두 답 중 원점과 특정 점이 같은 쪽에 있는 것만 고르게 하면 사후 검증이 붙어 I-VF ★3."
```

```yaml
- id: GN-GEO-242-507
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행한 두 평면 x-2y+2z-1=0, x-2y+2z+5=0 사이의 거리를 구하기.
  category: "평행한 두 평면 사이의 거리 → 한 평면 위의 점을 잡아 점과 평면 사이의 거리로 환원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 평면 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    242-e16 ⑵ 의 짝 문제. 한 평면 위의 점 (1,0,0) 을 잡아 다른 평면까지 |1+5|/3=2.
    상수항 차이를 그냥 빼고 끝내면(|-1-5|) 분모 |n| 로 나누는 것을 빠뜨리기 쉬운 자리라 T-부호·T-단위 계열의 실수가 나온다. 공식 한 번이라 통찰 라벨은 없다.
    확인체크·짝 예제 출발 ★2, 통찰 0·M_total 4 로 -1 후보지만 환산 단계가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "한 평면 위의 점 (1,0,0) → 다른 평면까지의 거리 |1+5|/3 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/242-507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수항과 법선벡터를 바꿀 수 있다. 제약: 두 평면의 법선벡터 계수비가 완전히 같아야 하고, 계수가 상수배(예: 2x-4y+4z+k=0)로 주어지면 먼저 약분해야 하므로 답이 두 배로 어긋나기 쉽다. |n| 이 정수인 조합을 쓰면 답이 정수."
    creative: "(1) 한 평면의 계수를 상수배로 써서 약분 단계를 강제하면 ★3 (2) 거리 값을 주고 상수항을 역으로 묻게 하면 I-BW·두 해로 ★3 (3) 두 평면 사이에 낀 평행한 평면(거리를 1:2로 내분)을 묻게 하면 ★3 (4) 평행 여부부터 판정해야 하는 세 평면 보기형으로 바꾸면 I-MI ★3."
```

```yaml
- id: GN-GEO-243-e17
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    구 (x-1)²+(y-2)²+z²=9 에 대하여 ⑴ 평면 2x+ky+2z-9=0 이 접하도록 하는 상수 k 를 모두 구하기 ⑵ 평면 x+y+z=0 과 만나서 생기는 도형의 넓이 ⑶ 구 위의 점 P 와 평면 x+2y-2z=17 사이의 거리의 최댓값·최솟값.
  category: "중심과 평면 사이의 거리 d 와 반지름 r 의 비교 → 접함(d=r) · 교원 반지름(r²-d²) · 거리의 최대최소(d±r)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 평면이 만나는 도형(원)의 반지름을 중심-평면 거리 d 와 반지름 r 의 직각삼각형 관계 r²=d²+ρ² 로 옮김"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구 위의 점과 평면 사이 거리의 최대·최소」를 「중심-평면 거리 ± 반지름」이라는 동치 조건으로 변환"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "구와 평면의 위치 관계(접함 · 교원의 넓이 · 거리의 최대·최소)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 소문항이 모두 「중심 (1,2,0) 과 평면 사이의 거리 d 를 구해 r=3 과 비교한다」는 한 골조에서 갈라진다. ⑴ d=r 을 |2+2k-9|/√(k²+8)=3 으로 쓰고 제곱해 k 의 이차방정식, ⑵ d=√3 에서 교원 반지름의 제곱 9-3=6, ⑶ d=4 에서 4±3.
    ⑵ 의 직각삼각형 환산(RT)과 ⑶ 의 최대최소 환산(EQV)이 각각 독립된 한 단계라 통찰 2개. ⑴ 은 제곱 과정에서 매개변수 k 가 분모에 들어가 Mₐ 가 올라간다.
    필수 예제 출발 ★2, 통찰 2개·M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "중심과 평면 사이의 거리 d 계산 → d=r(접함) / ρ²=r²-d²(교원) / d±r(거리의 최대·최소)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $k=-\dfrac{23}{5}$ 또는 $k=-1$ ⑵ $6\pi$ ⑶ 최댓값 $7$, 최솟값 $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/243-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 세 평면의 계수를 바꿀 수 있다. 제약: ⑴ 은 제곱한 뒤 k 의 이차방정식이 유리수 근을 갖도록 판별식을 맞춰야 하고(여기서는 5k²+28k+23=0), ⑵ 는 d<r 이라야 교원이 생기며 r²-d² 가 정수여야 넓이가 깔끔하다. ⑶ 은 d>r 이라야 최솟값이 양수로 나온다."
    creative: "(1) ⑵ 에서 넓이를 주고 평면의 상수항을 되묻게 하면 I-BW 가 붙어 ★3~4 (2) ⑶ 을 「거리가 5 이하인 점이 이루는 도형의 넓이」로 바꾸면 I-MI 가 붙어 ★4 (3) 접하는 평면을 구 위의 접점까지 함께 묻게 하면 단계가 하나 늘어 ★3 (4) 평면 대신 직선과의 위치 관계로 바꾸면 수선의 발 계산이 붙어 ★4."
```

```yaml
- id: GN-GEO-243-508
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면 x-2y-2z=a 가 구 x²+(y-1)²+(z+2)²=4 에 접할 때 양수 a 의 값을 구하기.
  category: "접함 ↔ 중심과 평면 사이의 거리 = 반지름 → 절댓값 방정식 → 양수 조건으로 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 평면이 접할 조건(중심과 평면 사이의 거리 = 반지름)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    243-e17 ⑴ 의 짝 문제이며 미지수가 상수항 하나뿐이라 더 짧다. 중심 (0,1,-2)·r=2 에서 |-2+4-a|/3=2, |2-a|=6 으로 a=8 또는 a=-4.
    접함을 d=r 로 바꾸는 것은 이 예제에서 방금 세운 공식 그대로 대입이라 통찰 라벨을 붙이지 않았다. 남는 함정은 절댓값 두 해 중 「양수」 조건으로 하나를 버리는 것(T-부호).
    확인체크·짝 예제 출발 ★2, 통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "중심 (0,1,-2) 과 평면 사이의 거리 = 2 → |2-a|=6 → a=8 (양수 조건)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/243-508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 평면의 법선벡터를 바꿀 수 있다. 제약: |n| 이 정수(3, 7 등)라야 a 가 정수로 떨어지고, 「양수 a」처럼 두 해 중 하나를 고르는 조건이 실제로 하나만 남기는지 확인해야 한다."
    creative: "(1) 「a 의 모든 값의 합」으로 바꾸면 두 해를 모두 살려 ★2 (2) 미지수를 법선벡터 성분에 넣으면 243-e17 ⑴ 처럼 이차방정식이 되어 ★3 (3) 접점의 좌표까지 묻게 하면 중심에서 법선 방향으로 r 만큼 이동하는 단계가 붙어 ★3 (4) 「만나지 않을 a 의 범위」로 바꾸면 부등식·범위 처리로 ★3."
```

```yaml
- id: GN-GEO-243-509
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구 x²+y²+z²-2x+4z-31=0 과 평면 2x-y+z=d 가 만나서 생기는 원의 넓이가 11π 일 때 양수 d 의 값을 구하기.
  category: "일반형 구를 표준형으로 → 교원의 넓이에서 반지름 역산 → r²-ρ² 로 중심-평면 거리 → d"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 값이 평면의 상수항이라 넓이 11π → 교원 반지름 √11 → 중심-평면 거리 5 의 순서로 조건을 역추적한 뒤 거리 공식에 넣음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 평면이 만나서 생기는 원(교원의 반지름·넓이 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 완전제곱으로 (x-1)²+y²+(z+2)²=36 을 만들어 중심 (1,0,-2)·r=6 을 읽어야 한다. 넓이 11π 에서 ρ²=11, 중심-평면 거리는 √(36-11)=5.
    243-e17 ⑵ 와 달리 거리가 미지수 d 쪽에 있어 방향이 뒤집힌다(넓이 → 거리 → 상수항). 이 역추적이 통찰 한 단계이고, 나머지는 절댓값 두 해 중 양수 선택이다.
    확인체크·짝 예제 출발 ★2, 통찰 1·M_total 8 → +1 하여 ★3. [분류 이슈] 태그 문자(확인체크=개념 확인)만 보면 ★1 출발이라 2단 벌어진다 — 짝 예제 해석으로 ★3 을 라벨로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "일반형 → 표준형(중심·반지름) → 넓이에서 교원 반지름 → 중심-평면 거리 √(r²-ρ²) → |d| 방정식 → 양수 해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/243-509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 일반형 계수와 교원의 넓이, 평면의 법선벡터를 바꿀 수 있다. 제약: 완전제곱 뒤 r² 이 양수여야 하고, r²-ρ² 가 완전제곱수라야 중심-평면 거리가 정수로 떨어진다. |n| 이 무리수(√6)면 답이 무리수가 되므로 정수 답을 원하면 |n| 을 3·7 로 고른다."
    creative: "(1) 넓이 대신 교원의 둘레를 주면 골조 동일 ★3 (2) 「교원의 넓이가 최대가 되는 d」로 바꾸면 d=0(중심을 지남) 판단이 필요해 I-EQV ★3 (3) 평면을 고정하고 구의 반지름을 미지수로 두면 ★3 (4) 두 평면과 만나는 두 원의 넓이 비를 주면 조건 통합이 필요해 I-CON ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-244-510
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 (1, -1, 2) 를 지나고 두 평면 2x+y+z=2, x-y-2z=1 에 각각 수직인 평면이 점 (k, 2, -3) 을 지날 때 k 의 값을 구하기.
  category: "두 평면에 수직 ↔ 구하는 평면의 법선벡터가 두 법선벡터와 모두 수직 → 외적으로 법선벡터 → 평면식 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「평면에 수직」을 법선벡터끼리의 수직으로 옮기고, 두 수직 조건을 동시에 만족하는 법선벡터를 두 법선벡터의 외적(또는 연립)으로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면에 수직인 평면의 방정식(법선벡터의 외적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구하는 평면의 법선벡터를 n 이라 하면 n·(2,1,1)=0, n·(1,-1,-2)=0 이므로 n 은 두 법선벡터의 외적 (-1,5,-3) 과 평행하다. 점 (1,-1,2) 를 넣어 -x+5y-3z+12=0, 여기에 (k,2,-3) 을 대입한다.
    「평면에 수직」을 법선벡터의 수직으로 두 번 옮기는 것이 이 문항의 유일한 사고 단계이고 나머지는 외적 계산이다. 외적 성분의 부호 실수(T-부호)가 주 함정.
    STEP 1 출발 ★2, 통찰 1(EQV d2)·M_total 6 → depth 3 도 통찰 2개도 아니므로 ★2 유지.
  tier: star_2
  mechanism_primary: "두 평면의 법선벡터의 외적 → 구하는 평면의 법선벡터 → 지나는 점으로 평면식 → 다른 점 대입해 k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$31$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/244-510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수와 지나는 점, 마지막 점의 두 성분을 바꿀 수 있다. 제약: 두 법선벡터가 평행하면 외적이 영벡터가 되어 평면이 정해지지 않으므로 서로 평행하지 않게 잡아야 하고, 마지막 점의 미지수는 계수가 0 이 아닌 좌표에 두어야 한다."
    creative: "(1) k 대신 그 평면과 원점 사이의 거리를 묻게 하면 이 단원의 주 공식과 붙어 ★3 (2) 「두 평면에 수직」을 「한 평면에 수직이고 한 직선을 포함」으로 바꾸면 245-517 골조가 되어 ★3 (3) 지나는 점을 빼고 두 평면의 교선을 포함하게 하면 평면군(pencil) 발상이 필요해 ★4 (4) 세 평면이 한 직선에서 만날 조건으로 바꾸면 I-CON ★4."
```

```yaml
- id: GN-GEO-244-511
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 (-6, -3, 7), (2, 1, 3) 을 지나는 직선과 평면 x+2y+z=5 가 이루는 각의 크기를 구하기.
  category: "두 점으로 방향벡터 → 방향벡터와 법선벡터가 이루는 각 → 여각으로 직선과 평면이 이루는 각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(방향벡터와 법선벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방향벡터 (8,4,-4) 를 (2,1,-1) 로 줄이고 법선벡터 (1,2,1) 과의 내적을 |d||n| 로 나누면 코사인이 1/2, 즉 60°. 직선과 평면이 이루는 각은 그 여각 30°.
    공식(sinθ = |d·n|/(|d||n|))을 그대로 쓰는 자리라 통찰 라벨은 없다. 유일한 함정은 법선과 이루는 각을 그대로 답하는 것(T-표기·여각 누락)이며 이것 때문에 Mₜ 를 1 로 두었다.
    STEP 1 출발 ★2, 통찰 0·M_total 5 → -1 후보지만 여각 처리 한 단계가 남아 ★2 유지.
  tier: star_2
  mechanism_primary: "두 점의 차 → 방향벡터 → |d·n|/(|d||n|) → 법선과의 각 60° → 여각 30°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/244-511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 평면의 계수를 바꿀 수 있다. 제약: 답이 특수각(30°·45°·60°)으로 나오려면 |d·n|/(|d||n|) 이 1/2·√2/2·√3/2 중 하나여야 하므로 방향벡터와 법선벡터를 먼저 정하고 두 점을 역으로 만드는 편이 안전하다. 평면의 상수항은 각에 영향을 주지 않는다."
    creative: "(1) 각 대신 직선과 평면의 교점을 묻게 하면 매개변수 대입으로 ★2 (2) 각을 주고 평면의 계수를 역으로 묻게 하면 I-BW ★3 (3) 직선을 선분으로 바꿔 정사영의 길이를 묻게 하면 245-519 골조가 되어 ★4 (4) 두 평면이 이루는 각과 비교하게 하면 여각 처리가 두 번 들어가 ★3."
```

```yaml
- id: GN-GEO-244-512
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    직선 (x-1)/3 = 2-y = (z-2)/2 에 평행한 평면을 보기 ㄱ·ㄴ·ㄷ 에서 모두 고르기.
  category: "직선의 방향벡터 읽기 → 평행 ↔ 방향벡터와 법선벡터의 내적 0 → 직선이 평면에 포함되지 않음을 점으로 확인"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직선이 평면에 평행」을 「방향벡터와 법선벡터가 수직이고, 직선 위의 한 점이 평면 위에 있지 않다」는 두 조건의 동치로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면이 평행할 조건(방향벡터와 법선벡터의 수직)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2-y 를 (y-2)/(-1) 로 읽어 방향벡터 (3,-1,2) 를 얻는 것이 첫 관문(T-표기)이다. 이후 보기마다 내적을 계산해 ㄱ(0)·ㄴ(14)·ㄷ(0) 로 두 개를 남기고, 남은 둘에 직선 위의 점 (1,2,2) 를 넣어 평면에 포함되지 않음을 확인한다.
    내적 0 만으로 끝내면 포함되는 경우를 걸러내지 못하므로 동치 조건을 둘로 쪼개는 단계를 통찰로 세었다. 함정은 표기 해석과 포함·평행의 경계 둘(T-표기·T-경계).
    STEP 1 출발 ★2, 통찰 1·M_total 6 → ★2 유지. [분류 이슈] 보기 3개 판정과 표기 함정을 합치면 체감은 STEP 2 쪽이라 ★3 후보도 기록한다.
  tier: star_2
  mechanism_primary: "2-y 를 (y-2)/(-1) 로 읽어 방향벡터 (3,-1,2) → 보기별 d·n=0 판정 → 직선 위의 점으로 포함 여부 배제"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/244-512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 방향비와 지나는 점, 보기 세 평면의 계수를 바꿀 수 있다. 제약: 보기 중 적어도 하나는 d·n=0 이지만 직선을 포함해 탈락하도록 만들면 판정이 살아난다(원문에는 그 경우가 없다). 「2-y」처럼 계수가 -1 인 표기는 답의 난이도를 좌우하므로 의도적으로 유지하거나 명시적으로 풀어 쓴다."
    creative: "(1) 보기 중 하나를 「직선을 포함하는 평면」으로 만들어 내적 0 인데도 탈락시키면 사후 검증이 강제되어 I-VF ★3 (2) 「직선에 수직인 평면」으로 바꾸면 법선벡터 평행 판정이 되어 ★2 (3) 평면을 고정하고 평행한 직선을 고르게 하면 같은 골조의 뒤집기 ★2 (4) 평행한 평면 중 원점에서 가장 가까운 것을 고르게 하면 이 단원의 거리 공식과 붙어 ★3."
```

```yaml
- id: GN-GEO-244-513
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구 (x-1)²+(y+2)²+(z-3)²=9 위의 점 A(2, 0, 5) 에서 이 구에 접하는 평면과 원점 사이의 거리를 구하기.
  category: "접평면의 법선벡터 = 중심에서 접점으로 가는 벡터 → 접점을 지나는 평면식 → 원점과의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구 위의 점에서의 접평면」이라는 기하 조건을 「중심에서 접점으로 가는 벡터가 그 평면의 법선벡터」라는 벡터 표현으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점에서의 접평면의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (1,-2,3) 에서 접점 A(2,0,5) 로 가는 벡터 (1,2,2) 가 접평면의 법선벡터이고, A 를 지나므로 x+2y+2z-12=0. 원점과의 거리는 12/3=4.
    접평면을 「중심과 접점을 잇는 반지름에 수직인 평면」으로 읽는 첫 단계만 사고이고 나머지는 대입이다. 점이 이미 구 위에 있어 위치 판정이 필요 없으므로 함정 카테고리는 없다.
    STEP 1 출발 ★2, 통찰 1(RT d1)·M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "중심→접점 벡터를 법선벡터로 → 접점을 지나는 평면식 → 원점과 평면 사이의 거리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/244-513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 접점을 바꿀 수 있다. 제약: 접점이 반드시 구 위에 있어야 하므로 중심에 길이 r 인 벡터를 더해 접점을 만든다((1,2,2) 처럼 크기가 정수인 벡터를 쓰면 답도 정수). 원점이 구 안에 들어가면 거리는 여전히 구해지지만 그림 직관이 깨진다."
    creative: "(1) 원점 대신 다른 점까지의 거리로 바꾸면 골조 동일 ★2 (2) 접점을 빼고 「원점에서 가장 먼(가까운) 접평면」을 묻게 하면 d±r 환산이 붙어 ★3 (3) 두 접점의 접평면이 이루는 각을 묻게 하면 법선 사이 각이 되어 ★3 (4) 접평면이 좌표축과 만나는 점으로 만든 사면체의 부피를 묻게 하면 절편 계산이 붙어 ★4."
```

```yaml
- id: GN-GEO-244-514
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    구 x²+y²+z²-2x-6y-4z+6=0 위의 점 P 와 평면 x+2y-z+7=0 사이의 거리의 최댓값 M, 최솟값 m 에 대하여 Mm 의 값을 구하기.
  category: "일반형 구를 표준형으로 → 중심-평면 거리 d 와 반지름 r → M=d+r, m=d-r → Mm=d²-r²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구 위의 점과 평면 사이 거리의 최대·최소」를 「중심-평면 거리 d 에 반지름 r 을 더하고 뺀 값」으로 동치 변환하고, 곱은 d²-r² 로 묶어 무리수 계산을 피함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점과 평면 사이의 거리의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 (1,3,2)·r²=8 을 얻고 중심-평면 거리 12/√6=2√6 을 구한다. M=d+r, m=d-r 이므로 Mm=d²-r²=24-8=16 으로 무리수를 그대로 곱하지 않아도 된다.
    243-e17 ⑶ 과 같은 환산이지만 곱의 형태라 합차 공식으로 묶는 자리가 하나 더 있다(계산 단축). 일반형 → 표준형 정리와 √6 유리화가 Mₖ 를 올린다.
    STEP 1 출발 ★2, 통찰 1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "일반형 → 표준형(중심·반지름) → 중심-평면 거리 d → Mm = (d+r)(d-r) = d²-r²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/244-514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 일반형 계수와 평면의 계수를 바꿀 수 있다. 제약: d>r 이라야 최솟값이 양수이고, Mm=d²-r² 이 정수로 떨어지려면 d² 이 유리수여야 한다(|n| 이 무리수여도 제곱하면 사라지므로 오히려 잘 맞는다). 완전제곱 후 r²>0 확인은 필수."
    creative: "(1) M+m 을 묻게 하면 2d 로 더 짧아져 ★2 (2) M-m 을 묻게 하면 2r 만 남아 평면이 무의미해지는 역설적 문항이 되어 ★2 (3) 평면 대신 직선과의 거리로 바꾸면 수선의 발 계산이 붙어 ★4 (4) 구 위의 점과 평면 위의 점을 잇는 선분의 최소 길이를 묻게 하면 같은 골조의 서술형 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-245-515
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    세 점 A(1, 2, 0), B(1, 0, -1), C(0, -1, 1) 을 지나는 평면이 yz평면과 이루는 각을 α, xy평면과 이루는 각을 β 라 할 때 cos α - cos β 의 값을 구하기.
  category: "세 점 → 두 방향벡터의 외적으로 법선벡터 → 좌표평면의 법선(기본단위벡터)과의 각으로 환원"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 평면이 이루는 각」을 「두 법선벡터가 이루는 각」으로 옮기고, yz평면·xy평면의 법선벡터를 (1,0,0)·(0,0,1) 로 읽어 코사인이 법선벡터 성분의 비로 떨어짐을 이용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점을 지나는 평면과 좌표평면이 이루는 각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB=(0,-2,-1), AC=(-1,-3,1) 의 외적 (-5,1,-2) 가 법선벡터이고 크기는 √30. 좌표평면의 법선이 기본단위벡터라 cos α·cos β 는 법선벡터의 x성분·z성분의 절댓값을 √30 으로 나눈 값이 되어 5/√30 - 2/√30 한 줄로 끝난다.
    이 관찰을 못 하면 좌표평면마다 내적을 새로 계산하게 된다. 예각으로 잡기 위한 절댓값 처리(T-부호)가 함정.
    STEP 2 출발 ★3, 통찰 1·M_total 7 → ★3 유지(외적으로 평면을 잡는 것은 이 단원의 표준 절차라 통찰로 세지 않았다).
  tier: star_3
  mechanism_primary: "세 점의 차 두 개 → 외적으로 법선벡터 (-5,1,-2) → 좌표평면 법선과의 코사인 = 해당 성분 /√30 → 차"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{30}}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/245-515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 비교할 좌표평면(yz·zx·xy)을 바꿀 수 있다. 제약: 세 점이 한 직선 위에 있으면 외적이 영벡터가 되므로 피해야 하고, |n| 이 무리수면 답이 유리화 형태로 나온다. 답을 깔끔하게 하려면 법선벡터를 먼저 정해 놓고 세 점을 역으로 만든다."
    creative: "(1) 세 좌표평면과 이루는 각의 코사인 제곱의 합(=1)을 묻게 하면 I-SYM 이 붙어 ★4 (2) cos α - cos β 대신 두 각의 크기를 직접 묻게 하면 특수각 조정이 필요해 ★3 (3) 세 점으로 만든 삼각형의 xy평면 위로의 정사영 넓이를 묻게 하면 정사영 공식과 붙어 ★4 (4) 한 점을 미지수로 두고 각이 45°가 되게 하면 I-BW ★4."
```

```yaml
- id: GN-GEO-245-516
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 평면 α: 3x+(k-1)y-z+1=0, β: x+3y+(k-2)z+3=0 이 서로 수직일 때(k 는 상수) 두 평면의 교선의 방정식을 구하기.
  category: "수직 조건 → 법선벡터의 내적 0 으로 k 결정 → 교선의 방향벡터는 두 법선의 외적 → 교선 위의 한 점"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 평면의 교선」을 「두 법선벡터에 모두 수직인 방향벡터(외적) + 두 방정식을 동시에 만족하는 한 점」이라는 직선의 결정 조건으로 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면이 수직일 조건과 교선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내적 3+3(k-1)-(k-2)=2k+2=0 에서 k=-1 이 먼저 정해지고, 그때 두 평면은 3x-2y-z+1=0, x+3y-3z+3=0 이 된다. 교선의 방향벡터는 두 법선의 외적 (9,8,11) 이고, 한 점은 두 식을 연립해 한 변수를 정해 (0,0,1) 을 얻는다.
    매개변수 k 가 두 평면의 서로 다른 자리(y 계수와 z 계수)에 들어 있어 내적을 전개할 때 부호 실수가 나기 쉽다(T-부호). 교선을 방향벡터+한 점으로 분해하는 것이 유일한 사고 단계.
    STEP 2 출발 ★3, 통찰 1(EQV d2)·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "법선벡터 내적 0 → k=-1 → 두 법선의 외적으로 방향벡터 → 연립에서 교선 위의 한 점 → 대칭식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{x}{9}=\dfrac{y}{8}=\dfrac{z-1}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/245-516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수와 k 가 들어가는 자리, 상수항을 바꿀 수 있다. 제약: 내적이 k 에 대한 일차식이라야 k 가 하나로 정해지고(이차식이면 교선이 두 벌 나온다), 외적이 영벡터가 아니어야 한다. 교선 위의 한 점이 정수 좌표로 나오도록 상수항을 조정한다."
    creative: "(1) 수직 대신 평행 조건으로 바꾸면 계수비 비교가 되어 ★2 (2) 교선 대신 두 평면이 이루는 각을 묻게 하면 ★3 (3) 교선과 한 점을 지나는 평면을 묻게 하면 단계가 하나 더 붙어 ★4 (4) k 를 두 개(서로 다른 문자)로 늘려 수직·평행 두 조건을 동시에 걸면 I-CON ★4."
```

```yaml
- id: GN-GEO-245-517
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    점 A(-3, 0, 2) 를 지나고 직선 l: (x+2)/3 = -y = 1-z 를 포함하는 평면의 방정식을 구하기.
  category: "직선을 포함 ↔ 방향벡터와 직선 위의 점을 모두 씀 → 법선벡터는 방향벡터와 (점-점) 벡터에 모두 수직 → 외적"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직선을 포함한다」를 「직선의 방향벡터와 수직이고, 직선 위의 한 점과 A 를 잇는 벡터와도 수직인 법선벡터를 갖는다」는 두 수직 조건으로 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 점을 지나고 주어진 직선을 포함하는 평면의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    -y 와 1-z 를 각각 (y-0)/(-1), (z-1)/(-1) 로 읽어 방향벡터 (3,-1,-1) 과 직선 위의 점 (-2,0,1) 을 얻는 것이 첫 관문(T-표기). A 와 그 점을 잇는 벡터 (-1,0,1) 과 방향벡터의 외적 (-1,-2,-1), 즉 (1,2,1) 이 법선벡터다.
    「포함한다」를 두 수직 조건으로 쪼개는 단계가 사고의 전부이고, 쪼개고 나면 244-510 과 같은 외적 계산이다.
    STEP 2 출발 ★3, 통찰 1(EQV d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "직선의 방향벡터와 한 점 읽기 → A 와 그 점을 잇는 벡터 → 두 벡터의 외적이 법선벡터 → A 를 지나는 평면식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x+2y+z+1=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/245-517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 방향비·지나는 점과 A 의 좌표를 바꿀 수 있다. 제약: A 가 직선 위에 있으면 평면이 무수히 많아지므로 반드시 직선 밖의 점으로 잡아야 하고, 「-y」「1-z」 같은 계수 -1 표기를 유지하면 난이도가 유지된다. 외적 성분에 공약수가 생기면 약분해 계수를 작게 만든다."
    creative: "(1) 점 A 대신 「직선 l 과 평행한 다른 직선을 포함」으로 바꾸면 같은 외적 골조 ★3 (2) 두 직선을 모두 포함하는 평면(꼬인 위치 판정 포함)으로 바꾸면 존재 조건 검증이 붙어 I-VF ★4 (3) 구한 평면과 원점 사이의 거리를 이어서 묻게 하면 이 단원의 주 공식과 붙어 ★3 (4) 직선을 포함하고 어떤 평면에 수직인 평면으로 바꾸면 조건 두 개가 붙어 ★4."
```

```yaml
- id: GN-GEO-245-518
  page: 245
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    그림의 직육면체(세 모서리가 좌표축 위에 있고 x·y·z 절편이 각각 2, 3, 1)에서 세 점 D, E, G 를 지나는 평면을 α 라 할 때 점 B 와 평면 α 사이의 거리를 구하기.
  category: "그림의 세 꼭짓점을 좌표축 절편으로 읽기 → 절편형 평면 방정식 → 점 B 의 좌표 읽기 → 점과 평면 사이의 거리"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 직육면체 배치를 좌표로 옮겨 D·E·G 가 세 좌표축 위의 절편(1, 2, 3)임을 읽고 평면을 절편형 x/2+y/3+z=1 로 바로 세움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직육면체에서 세 꼭짓점이 정하는 평면과 한 꼭짓점 사이의 거리(절편형 평면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 E(2,0,0)·G(0,3,0)·D(0,0,1) 이 각 축 위에 있으므로 평면 α 는 절편형으로 x/2+y/3+z=1, 정리하면 3x+2y+6z-6=0 이고 |n|=7 이다. B 는 O 의 대각 위쪽 꼭짓점 (2,3,1) 이라 |6+6+6-6|/7.
    세 점의 외적을 쓰지 않고 절편형으로 건너뛰는 것이 이 문항의 핵심 단축이고, 나머지는 B 의 좌표를 그림에서 정확히 읽는 것(T-표기)이다.
    STEP 2 출발 ★3, 통찰 1(RT d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "D·E·G 를 좌표축 절편으로 → 절편형 평면 3x+2y+6z-6=0 → B(2,3,1) 대입 → 12/7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{12}{7}$'
  answer_source: "답지"
  figure: crop:fig-245-518.png
  latex: latex-bank/gn-geo/items/245-518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리의 길이(2, 3, 1)를 바꿀 수 있다. 제약: 꼭짓점 이름과 축의 대응(E 는 x축·G 는 y축·D 는 z축·B 는 O 의 대각 위 꼭짓점)은 그림 라벨이라 고정해야 하고, 모서리를 (a,b,c) 로 두면 법선벡터가 (bc, ca, ab) 여서 |n| 이 정수로 떨어지는 조합(2,3,1 → 7 / 1,2,2 → 6)을 골라야 답이 유리수로 깔끔하다."
    creative: "(1) 거리 대신 삼각형 DEG 의 넓이나 사면체 ODEG 의 부피를 묻게 하면 절편 계산만 남아 ★3 (2) 점 B 대신 다른 꼭짓점이나 모서리의 중점으로 바꾸면 좌표 읽기만 달라져 ★3 (3) 평면 α 가 xy평면과 이루는 각을 묻게 하면 245-515 골조와 결합해 ★3 (4) 직육면체를 정육면체로 바꾸면 대칭성으로 답이 공간대각선의 1/3 임을 볼 수 있어 I-SYM ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-245-519
  page: 245
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    직선 l: (x+3)/2 = y+4 = (z+5)/2 위의 선분 AB 의 길이가 18 일 때, 선분 AB 의 평면 α: x-2y+2z=6 위로의 정사영의 길이를 구하기.
  category: "직선과 평면이 이루는 각 θ → 정사영의 길이 = 원래 길이 × cos θ → sin θ 에서 cos θ 로"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「평면 위로의 정사영의 길이」를 「원래 길이 × 직선과 평면이 이루는 각의 코사인」이라는 배율로 옮겨, A·B 의 좌표를 구하지 않고도 답이 나오게 함"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방향벡터와 법선벡터의 내적은 직선과 법선 사이 각을 주므로, sin θ = |d·n|/(|d||n|) = 4/9 로 받고 cos θ = √65/9 로 여각 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "선분의 평면 위로의 정사영의 길이(직선과 평면이 이루는 각)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    d=(2,1,2)·n=(1,-2,2) 로 |d|=|n|=3, |d·n|=4 이므로 직선과 평면이 이루는 각의 sin 이 4/9, cos 이 √65/9. 정사영의 길이는 18×√65/9.
    A·B 의 좌표가 주어지지 않았는데도 답이 나오는 이유(정사영이 길이에 대한 일정한 배율)를 잡는 것이 첫 통찰이고, 내적이 주는 것은 법선과의 각이라 sin/cos 을 바꿔 쓰는 것이 둘째다. 여기서 sin 과 cos 을 맞바꾸면 그대로 틀린다(T-표기).
    실력 UP 출발 ★4, 통찰 2개·M_total 7 → ★4 유지. ★5 는 SC/VF/SYM/XU 가 없어 해당 없음.
  tier: star_4
  mechanism_primary: "방향벡터·법선벡터로 sin θ = |d·n|/(|d||n|) → cos θ = √(1-sin²θ) → 정사영 길이 = 18 cos θ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{65}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/245-519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 방향비, 평면의 계수, 선분의 길이를 바꿀 수 있다. 제약: |d||n| 이 |d·n| 보다 커야 하고, 답이 깔끔하려면 1-sin²θ 가 제곱수 비율로 떨어지거나 선분의 길이가 |d||n| 의 배수여야 한다(여기서는 18 = 2×9). 평면의 상수항과 직선이 지나는 점은 답에 영향이 없다."
    creative: "(1) 정사영의 길이를 주고 선분의 길이를 역으로 묻게 하면 I-BW ★4 (2) 선분 대신 삼각형의 정사영 넓이로 바꾸면 배율이 cos θ 하나로 같아 ★4 (3) 두 평면 위로의 정사영 길이를 비교하게 하면 분기가 생겨 ★4~5 (4) 직선이 평면과 만나는 경우와 평행한 경우를 나누게 하면 I-MI ★4."
```

```yaml
- id: GN-GEO-245-520
  page: 245
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 평면 α: 2x-y-3z=0, β: 3x+2y-z-1=0 의 이면각을 이등분하는 두 평면과 직선 x/2 = -y = (z+1)/2 의 교점을 각각 A, B 라 할 때 선분 AB 의 길이를 구하기.
  category: "이등분면 = 두 평면에서 같은 거리에 있는 점의 자취 → 절댓값 방정식의 두 갈래 → 직선을 매개변수화해 두 교점 → 두 점 사이의 거리"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이면각을 이등분하는 평면」을 「두 평면까지의 거리가 같은 점의 자취」로 옮겨 |2x-y-3z|/√14 = |3x+2y-z-1|/√14 라는 방정식으로 바꿈"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절댓값을 벗길 때 +·- 두 갈래가 모두 실제 이등분면이 되어(서로 수직인 두 평면) 둘 다 끝까지 따져야 함"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선을 (2t, -t, 2t-1) 로 매개변수화해 교점 찾기를 t 에 대한 일차방정식으로 환원"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "이면각을 이등분하는 평면(두 평면에서 같은 거리인 점의 자취)과 직선의 교점"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 법선의 크기가 모두 √14 라 절댓값 방정식이 2x-y-3z = ±(3x+2y-z-1) 로 간단해지고, 이등분면이 x+3y+2z-1=0 과 5x+y-4z-1=0 두 개 나온다. 직선을 (2t,-t,2t-1) 로 넣으면 각각 t=1, t=-3 이라 A(2,-1,1), B(-6,3,-7).
    이등분면을 거리의 자취로 읽는 것, ± 두 갈래를 모두 살리는 것, 직선을 매개변수로 바꾸는 것이 각각 독립된 단계라 통찰 3개. 부호 두 갈래와 -y 표기가 함정 둘.
    실력 UP 출발 ★4, 통찰 3개·M_total 9 로 ★5 후보이나 저노출 유형(SC/VF/SYM/XU)이 없어 §2.13 기준에 걸린다. [분류 이슈] ★4 로 라벨하고 ★5 후보를 기록만 한다.
  tier: star_4
  mechanism_primary: "두 평면까지의 거리가 같다 → 절댓값 방정식 ± 두 이등분면 → 직선을 (2t,-t,2t-1) 로 대입해 두 교점 → |AB|"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/245-520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수와 직선의 방향비·지나는 점을 바꿀 수 있다. 제약: 두 법선벡터의 크기가 같아야(여기서는 둘 다 √14) 절댓값 방정식이 분모 없이 정리되고 이등분면이 일차식으로 떨어진다. 크기가 다르면 계수에 무리수가 들어가 답이 지저분해지므로 성분을 치환한 쌍(2,-1,-3)·(3,2,-1) 처럼 만든다. 직선이 두 이등분면 어느 쪽과도 평행하지 않아야 교점이 존재한다."
    creative: "(1) 두 이등분면이 서로 수직임을 보이게 하면 I-SYM 이 붙어 ★5 후보 (2) 교점 대신 이등분면과 원점 사이의 거리를 묻게 하면 이 단원의 주 공식으로 돌아와 ★3 (3) 두 평면 대신 평면과 구를 주고 「양쪽에서 같은 거리」 자취를 묻게 하면 I-XU ★5 (4) 직선을 선분으로 바꿔 두 이등분면이 그 선분을 나누는 비를 묻게 하면 검증 단계가 붙어 I-VF ★5."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 0 · ★2 9 · ★3 6 · ★4 2 · ★5 0
- 통찰형 12 · 절차형 5 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 5 · I-BW 1 · I-MI 1 (총 라벨 14개 · 최다 보유 문항은 `245-520` 의 3개)
- type_hint 상위: 「구와 평면의 위치 관계(접함·교원·거리의 최대최소)」 5 · 「법선벡터를 만들어 평면을 결정」 4(`244-510`·`245-515`·`245-516`·`245-517`) · 「점과 평면·평행한 두 평면 사이의 거리」 3 · 「직선과 평면의 각·평행·정사영」 3 · 「이면각의 이등분면」 1
- 그림: 1문(`crop:fig-245-518.png` — 직육면체의 세 절편 2·3·1 을 좌표로 읽는 데 필수)
- 벤더 구역별 출발점: 필수 예제 ★2(확인체크는 짝 예제 해석으로 ★2) · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 출발점에서 올라간 문항은 `243-e17`(통찰 2) · `243-509`(역추적 통찰) 둘이고 내려간 문항은 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-243-509 | 태그 문자(확인체크=개념 확인)대로면 ★1 출발이지만 필수 예제 짝문제 해석(★2 출발)에 넓이→거리 역추적 통찰이 붙어 ★3 — 태그 해석과 2단 차이 | ★2 / ★3 |
| GN-GEO-244-512 | 보기 ㄱㄴㄷ 3개 판정 + 「2-y」 표기 해석 + 포함/평행 경계 확인으로 체감은 STEP 2 쪽. 구역 신호를 따라 ★2 라벨 | ★2 / ★3 |
| GN-GEO-245-520 | 통찰 3개·M_total 9 로 ★5 산식 후보이나 §2.13 저노출 유형(SC/VF/SYM/XU) 부재라 ★4 라벨 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「점과 평면 사이의 거리 공식 직접 대입」(`242-e16`⑴·`242-506`) ② 「평행한 두 평면 사이의 거리」(`242-e16`⑵·`242-507`) ③ 「구와 평면의 위치 관계」는 접함(`243-e17`⑴·`243-508`)·교원(`243-e17`⑵·`243-509`)·거리의 최대최소(`243-e17`⑶·`244-514`) 세 갈래가 각각 별도 유형으로 쓸 만큼 반복된다 ④ 「직선과 평면이 이루는 각·정사영」(`244-511`·`245-519`).
- **통합해도 될 유형**: `244-510`·`245-515`·`245-516`·`245-517` 은 발문이 달라 보여도 전부 **「두 벡터에 수직인 법선벡터를 외적으로 만들어 평면(또는 교선)을 결정」** 한 골조이므로 하나의 유형 아래 「두 평면에 수직 / 세 점 / 교선 / 직선 포함」 네 변형으로 묶는 편이 낫다. `244-513`(접평면)도 법선벡터를 만드는 방식만 다를 뿐 같은 계열이다.
- **단독 유형**: `245-518`(절편형 평면 + 그림에서 좌표 읽기)과 `245-520`(이등분면 자취)은 이 단원에서 한 번씩만 나오지만 골조가 독립적이라 카탈로그에서도 단독 슬롯이 필요하다.
