---
name: mechanism-데이터-RPM-ALG-06-p3
description: RPM 대수 06 삼각함수의 그래프(3/4 · 유형 12~20) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 06 삼각함수의 그래프
  unit_code: ALG-06
  part: "3/4"
  extract_range: "84~88쪽 · 0621~0655"
  total_problems: 35
  unit_total: 144
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 06 삼각함수의 그래프 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 06 삼각함수의 그래프 단원의 세 번째 범위(84~88쪽 · 0621~0655 · 35문)를 다룬다. 전부 「유형」 구역이며 유형 12~14(삼각함수를 포함한 함수의 최대·최소 — 일차식·이차식·분수식의 꼴) 12문, 유형 15~18(삼각함수가 포함된 방정식 — 일차식·이차식·삼각형 조건·실근을 가질 조건) 15문, 유형 19~20(삼각함수가 포함된 부등식 — 일차식·이차식의 꼴) 8문이다. RPM 의 벤더 난이도 신호는 구역·난이도(하~상)·태그(대표문제·중요·기출·서술형)로 나타나며, 이 범위는 각 유형 첫 문항이 「대표문제」(★2 출발), 나머지는 중하(★1~2)·중(★2)·상중(★3) 을 출발점으로 삼았다. 골조는 거의 전부 「일반각 변환 → sin²+cos²=1 로 한 함수 통일 → 치환 t 의 범위 → 이차식/유리식 처리」의 절차 사슬이라 통찰 라벨이 붙은 문항은 열(인수 차 π/2 통합 EQV d2 두 문항 · 동차화 EQV d2 한 문항 · 실근 조건·항상 성립 조건의 상수분리 EQV d1 다섯 문항 · 그래프 비교 RT d1 한 문항 · 대칭 동경 EQV d1 한 문항)이고, 나머지 스물다섯은 M_total 4~9 의 절차형이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림이 있는 문항은 이 범위에 없다. 답은 전사본 answer 를 그대로 옮겼고 전부 재계산으로 일치를 확인했다.

## 문항 데이터

### 유형 12 삼각함수를 포함한 함수의 최대·최소; 일차식의 꼴

```yaml
- id: RPM-ALG-0621
  page: 84
  vendor_label: "유형 12 삼각함수를 포함한 함수의 최대·최소; 일차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=-|sin x+2|+k 의 최댓값과 최솟값의 합이 1 일 때 상수 k.
  category: "절댓값 안 부호 판정 → 일차식 최대·최소 → 합 조건으로 k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 일차식(절댓값 포함)의 최대·최소로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin x+2 ∈ [1,3] 이므로 절댓값이 그대로 벗겨져 y=-sin x-2+k ∈ [k-3, k-1]. 합 2k-4=1 에서 k=5/2. 절댓값이 항상 양임을 판단하는 T-부호 한 번 뒤엔 일차식 범위 계산. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "sin x+2>0 → y=-sin x-2+k → 최대 k-1·최소 k-3 → 합 2k-4=1 → k=5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 상수(2 → 3, 5)·바깥 부호·합의 값(1 → 3, -2)·sin 을 cos 으로. 제약: 안쪽 상수의 절댓값이 진폭보다 커야 절댓값이 그대로 벗겨지고 답이 유리수로 정리됨(상수가 진폭 이하면 0624 골조로 바뀜)."
    creative: "(1) 최댓값·최솟값의 곱을 주고 k 를 묻기(이차식 풀이 ★2) (2) 안쪽 상수를 진폭보다 작게(|sin x-1/2|) 바꿔 절댓값이 0 을 지나게 하면 최솟값 0 판단이 추가돼 ★2~3 (3) 최댓값이 최솟값의 2배 같은 비율 조건 ★2."
```

```yaml
- id: RPM-ALG-0622
  page: 84
  vendor_label: "유형 12 삼각함수를 포함한 함수의 최대·최소; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=cos(x+π/2)-2sin x-1 의 최댓값 M, 최솟값 m 에 대해 M-m.
  category: "일반각 변환으로 sin 통일 → 일차식 최대·최소"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각 변환 후 삼각함수 일차식의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(x+π/2)=-sin x 이므로 y=-3sin x-1 ∈ [-4, 2], M-m=6. 변환 한 번과 일차식 범위. 「중」·통찰 없음·M_total 4 → −1 후보이나 일반각 변환이 유형 핵심이라 ★2 유지.
  tier: star_2
  mechanism_primary: "cos(x+π/2)=-sin x → y=-3sin x-1 → M=2·m=-4 → M-m=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변환 대상 sin(x+π)·cos(x-π/2)·sin(3π/2-x) 로, 계수 -2 → 3, 상수 -1 → 2. 제약: 변환 뒤 같은 삼각함수 하나로 모여야 하며 계수 합이 0 이 되지 않게(상수함수 방지)."
    creative: "(1) M+m 이나 M·m 을 묻기(★2) (2) 두 항이 sin 과 cos 으로 남게 만들면 합성이 필요해 교육과정 밖 → 금지 (3) 절댓값을 씌워 |−3sin x−1| 로 바꾸면 0 통과 판정이 추가돼 ★2~3."
```

```yaml
- id: RPM-ALG-0623
  page: 84
  vendor_label: "유형 12 삼각함수를 포함한 함수의 최대·최소; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0 일 때 y=a|cos 2x-1|+b 의 최댓값 7·최솟값 3 → ab.
  category: "절댓값 안 부호 판정 → 범위 [b, 2a+b] → 연립으로 a, b"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 일차식(절댓값 포함)의 최대·최소로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos 2x-1 ∈ [-2, 0] 이므로 |cos 2x-1|=1-cos 2x ∈ [0, 2], y ∈ [b, 2a+b]. 2a+b=7, b=3 에서 a=2, ab=6. 절댓값 안이 항상 0 이하라는 판단(T-부호)과 a>0 을 써서 최대·최소 끝을 정하는 것이 전부. 「중」·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "cos 2x-1≤0 → |cos 2x-1|∈[0,2] → 최대 2a+b=7·최소 b=3 → a=2, b=3 → ab=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값·최솟값(7, 3 → 9, 1)·안쪽 상수(-1 → +1 · 그러면 범위 [0,2] 그대로)·2x → 3x(주기 무관). 제약: 최댓값-최솟값=2a 가 양의 정수·유리수가 되도록, a>0 조건 유지(a<0 이면 최대·최소가 뒤바뀜 → 별도 변형)."
    creative: "(1) a<0 으로 바꾸면 최대·최소가 교체돼 T-부호 하나 추가 ★2 (2) a 의 부호를 주지 않고 '최댓값 7·최솟값 3' 만 주면 a>0, a<0 두 경우 → I-MI ★3 (3) 안쪽 상수를 진폭 이하(|cos 2x-1/2|)로 하면 0 통과 판정 추가 ★3."
```

```yaml
- id: RPM-ALG-0624
  page: 84
  vendor_label: "유형 12 삼각함수를 포함한 함수의 최대·최소; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=|2+3cos(x-π)|-1 의 최댓값 M·최솟값 m 에 대해 M+m. 5지선다.
  category: "일반각 변환 → 절댓값 안 범위가 0 을 지남 → |t| 의 최소 0"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 안이 0 을 지나는 삼각함수 일차식의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(x-π)=-cos x 이므로 y=|2-3cos x|-1. 2-3cos x ∈ [-1, 5] 가 0 을 지나므로 |…| ∈ [0, 5], y ∈ [-1, 4], M+m=3. 최솟값을 |−1|−1=0 으로 잘못 두는 T-범위 함정이 유형 12 앞 문항들과의 차이. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cos(x-π)=-cos x → 2-3cos x∈[-1,5] → |…|∈[0,5] → M=4·m=-1 → M+m=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2·진폭 3(→ 1과 2, 3과 4)·바깥 상수 -1. 제약: |상수|<진폭 이어야 절댓값 안이 0 을 지나 최솟값이 0 이 되는 골조가 유지됨(반대면 0621 골조). 선택지에 '최솟값 |끝값|' 오답(여기서는 0-1=-1 대신 1-1=0 → M+m=4)을 포함."
    creative: "(1) 최댓값을 갖는 x 의 개수(★2) (2) 절댓값 대신 제곱 (2-3cos x)² 으로 바꾸면 이차식 최대·최소로 넘어가 ★2 (3) 정의역을 0≤x≤π/2 로 제한해 절댓값 안이 0 을 지나는지 다시 판단하게 하면 T-범위 2개 ★3."
```

### 유형 13 삼각함수를 포함한 함수의 최대·최소; 이차식의 꼴

```yaml
- id: RPM-ALG-0625
  page: 84
  vendor_label: "유형 13 삼각함수를 포함한 함수의 최대·최소; 이차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=-2sin²x+2cos x+1 의 최댓값 M·최솟값 m 에 대해 M+m.
  category: "sin²=1-cos² 로 cos 통일 → t=cos x 치환·범위 → 이차함수 최대·최소"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 이차식의 최대·최소(치환 → 구간 위 이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=2cos²x+2cos x-1=2(t+1/2)²-3/2 (t=cos x ∈ [-1,1]). 꼭짓점 t=-1/2 가 구간 안이라 m=-3/2, 끝 t=1 에서 M=3, 합 3/2. 통일→치환→범위 위 이차함수의 표준 3단계. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "sin²x=1-cos²x → 2t²+2t-1 (t∈[-1,1]) → 꼭짓점 t=-1/2 → m=-3/2·M=3 → 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(-2, 2, 1)를 바꿔 꼭짓점 t=-b/(2a) 가 [-1,1] 안에 오게 유지. 제약: 최댓값·최솟값이 유리수, 꼭짓점 위치가 구간 안/밖 중 어느 쪽인지 의도대로(밖이면 0627 골조)."
    creative: "(1) 최댓값을 갖는 x 를 묻기(0≤x<2π 에서 cos x=1 → x=0 · ★2) (2) 꼭짓점이 구간 밖으로 나가게 계수를 키우면 끝점 비교 T-범위 추가 ★2 (3) 계수를 매개변수 k 로 두고 '최솟값이 -3/2 인 k' 처럼 뒤집으면 꼭짓점 위치 케이스 분기 → I-MI ★3~4."
```

```yaml
- id: RPM-ALG-0626
  page: 84
  vendor_label: "유형 13 삼각함수를 포함한 함수의 최대·최소; 이차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -π≤x≤π 에서 y=cos²x+2sin x+2 가 x=a 에서 최댓값 M 을 가질 때 aM. 5지선다.
  category: "cos²=1-sin² 로 sin 통일 → 이차함수 최댓값과 그때의 t → x 복원"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 이차식의 최댓값과 그때의 x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=-sin²x+2sin x+3=-(t-1)²+4, t=sin x ∈ [-1,1] → M=4 (t=1). -π≤x≤π 에서 sin x=1 인 x 는 π/2 하나라 a=π/2, aM=2π. 치환 뒤 최댓값을 주는 t 를 x 로 되돌리는 단계(T-범위)가 추가된 표준 문항. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cos²x=1-sin²x → -(t-1)²+4 (t∈[-1,1]) → M=4 at t=1 → sin x=1 → a=π/2 → aM=2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 2)·정의역([-π,π] → [0,2π])·sin 을 cos 으로. 제약: 최댓값을 주는 t 가 특수각 sin·cos 값(±1, ±1/2, …)이고 그 x 가 정의역 안에 하나만 있게(둘이면 발문을 '모든 a 의 합'으로)."
    creative: "(1) 최댓값을 주는 x 가 둘인 정의역(0≤x<2π 에서 sin x=1/2)으로 바꿔 '모든 a 의 합'(★2) (2) 최솟값 m 과 그때의 b 까지 물어 aM+bm(★2~3) (3) 정의역을 0≤x≤π/2 로 좁혀 t 범위가 [0,1] 로 바뀌면 꼭짓점 판단 T-범위 추가 ★3."
```

```yaml
- id: RPM-ALG-0627
  page: 84
  vendor_label: "유형 13 삼각함수를 포함한 함수의 최대·최소; 이차식의 꼴"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=sin²x-4cos x+k 의 최댓값이 3 일 때 상수 k.
  category: "sin²=1-cos² 로 cos 통일 → 꼭짓점이 구간 밖 → 끝점에서 최댓값 → k"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 이차식의 최댓값 조건으로 상수 결정(꼭짓점 구간 밖)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=-cos²x-4cos x+1+k=-(t+2)²+5+k, t=cos x ∈ [-1,1]. 꼭짓점 t=-2 가 구간 밖이라 구간에서 감소 → t=-1 에서 최댓값 4+k=3, k=-1. 꼭짓점 값 5+k 를 최댓값으로 쓰는 T-범위 함정이 핵심. 「중」·서술형·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "sin²x=1-cos²x → -(t+2)²+5+k (t∈[-1,1]) → 꼭짓점 밖 → 최댓값 t=-1: 4+k=3 → k=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 계수(-4 → -3, 6)·최댓값(3 → 0, 5). 제약: 꼭짓점 t=-b/2 가 [-1,1] 밖에 있게 |계수|≥2 유지(안으로 들어오면 0625 골조), k 가 정수."
    creative: "(1) 최솟값 조건으로 k 를 묻기(같은 골조 ★2) (2) cos 계수를 매개변수 a 로 두고 '최댓값이 3 인 a, k' 두 개를 최댓값·최솟값 두 조건으로 결정하면 꼭짓점 위치 케이스 → I-MI ★3~4 (3) 서술형 채점 포인트를 '꼭짓점이 구간 밖임을 밝히기'로 두면 ★2 유지."
```

```yaml
- id: RPM-ALG-0628
  page: 84
  vendor_label: "유형 13 삼각함수를 포함한 함수의 최대·최소; 이차식의 꼴"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=sin²(x-π/6)+2sin(x+π/3)+a 의 최댓값이 5·최솟값이 b 일 때 a+b(a 는 상수).
  category: "두 인수의 차 π/2 → 여각 변환으로 한 각 통일 → 이차함수 최대·최소 → a, b"
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x+π/3=(x-π/6)+π/2 임을 읽어 sin(x+π/3)=cos(x-π/6) 으로 바꾸고 θ=x-π/6 하나로 식을 통일"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 각의 삼각함수 이차식 최대·최소(인수 차 π/2 통합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 인수가 서로 다른 것이 장벽. (x-π/6)+π/2=x+π/3 이므로 sin(x+π/3)=cos θ (θ=x-π/6), y=sin²θ+2cos θ+a=-(t-1)²+2+a (t=cos θ ∈ [-1,1]). 최댓값 2+a=5 → a=3, 최솟값 t=-1: -4+2+3=1=b, a+b=4. 통일 뒤는 0625 골조. 인수 차를 읽는 EQV d2 한 개·M_total 9 → 「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "x+π/3=(x-π/6)+π/2 → sin(x+π/3)=cos θ → -(t-1)²+2+a → 최대 2+a=5 → a=3, b=1 → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 쌍을 차가 π/2 인 다른 조합(x-π/4 와 x+π/4 · x+π/3 과 x-π/6)으로, 계수 2 → -2, 최댓값 5 → 3. 제약: 인수 차가 정확히 ±π/2(또는 π · 3π/2)여야 여각·보각 변환으로 통일되고, 통일 뒤 꼭짓점 위치가 의도대로."
    creative: "(1) 인수 차를 π 로 바꿔 부호만 뒤집히게 하면 통찰이 얕아져 ★2~3 (2) cos²(x+π/6)+2sin(x-π/3) 처럼 cos²·sin 조합으로 바꾸면 변환 뒤 sin²→cos² 통일까지 두 번 → ★3 유지 (3) 최댓값·최솟값을 모두 매개변수로 주고 a 를 물으면 M_a 상승 ★3~4."
```

### 유형 14 삼각함수를 포함한 함수의 최대·최소; 분수식의 꼴

```yaml
- id: RPM-ALG-0629
  page: 85
  vendor_label: "유형 14 삼각함수를 포함한 함수의 최대·최소; 분수식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=(-sin x+1)/(sin x+2) 의 최댓값 M·최솟값 m 에 대해 M+m. 5지선다.
  category: "t=sin x 치환 → 분자를 분모로 나눠 유리함수 꼴 → t 범위에서 단조 → 끝값"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 분수식의 최대·최소(치환 → 유리함수 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=(-t+1)/(t+2)=-1+3/(t+2), t ∈ [-1,1] → t+2 ∈ [1,3] → 3/(t+2) ∈ [1,3] → y ∈ [0,2], M+m=2. 분자 나눗셈으로 y=k/(t+p)+q 꼴을 만들고 감소함수의 끝값을 읽는 표준 절차. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=sin x∈[-1,1] → y=-1+3/(t+2) → t+2∈[1,3] → y∈[0,2] → M+m=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 계수(-1, 1 / 1, 2 → 2, 3 / 1, 3)·sin 을 cos 으로. 제약: 분모가 t∈[-1,1] 에서 0 이 되지 않게 |상수|>1, 나눗셈 뒤 분자 상수가 0 이 아니게(0 이면 상수함수)."
    creative: "(1) M·m 이나 치역 자체를 묻기(★2) (2) 분모를 |sin x|+1 처럼 절댓값으로 바꿔 t 범위 [0,1] 판단 추가(0632 골조 ★2~3) (3) 분자 상수를 매개변수 k 로 두고 최댓값 조건으로 k 결정(0631 골조 ★2~3)."
```

```yaml
- id: RPM-ALG-0630
  page: 85
  vendor_label: "유형 14 삼각함수를 포함한 함수의 최대·최소; 분수식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤π/4 에서 y=(2tan x+1)/(tan x+2) 의 최댓값 M·최솟값 m 에 대해 M+m.
  category: "t=tan x 의 범위 [0,1] → 유리함수 꼴 → 증가함수 끝값"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 분수식의 최대·최소(치환 → 유리함수 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0≤x≤π/4 에서 t=tan x ∈ [0,1]. y=2-3/(t+2), t+2 ∈ [2,3] → 3/(t+2) ∈ [1, 3/2] → y ∈ [1/2, 1], M+m=3/2. tan 의 치역이 정의역으로 제한된다는 T-범위 하나 외에는 0629 와 같은 절차. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "0≤x≤π/4 → t=tan x∈[0,1] → y=2-3/(t+2) → y∈[1/2,1] → M+m=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 끝(π/4 → π/3 이면 t∈[0,√3] · 답이 무리수)·계수(2,1 / 1,2). 제약: 정의역에서 tan 이 정의되고(π/2 제외) 분모가 0 이 아니어야 하며, 답이 깔끔하려면 끝점이 tan 값 유리수인 각(0, π/4)."
    creative: "(1) 정의역을 -π/4≤x≤π/4 로 넓혀 t∈[-1,1](★2) (2) 정의역을 주지 않고 '최댓값이 존재하는가'를 묻는 ㄱㄴㄷ(tan 은 유계가 아님 → ★3 · I-MI 후보) (3) 분모를 tan²x+2 로 바꾸면 t² 치환이 한 겹 더 ★2~3."
```

```yaml
- id: RPM-ALG-0631
  page: 85
  vendor_label: "유형 14 삼각함수를 포함한 함수의 최대·최소; 분수식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    k>-6 일 때 y=(-2cos x+k)/(cos x+3) 의 최솟값이 -5/4 → 상수 k.
  category: "t=cos x 치환 → 유리함수 꼴 -2+(k+6)/(t+3) → k+6>0 으로 단조 방향 결정 → 최솟값 조건"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 분수식의 최솟값 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=-2+(k+6)/(t+3), t ∈ [-1,1]. k+6>0 이므로 t=1 에서 최소: -2+(k+6)/4=-5/4 → k+6=3 → k=-3 (k>-6 확인). 조건 k>-6 이 나눗셈 뒤 분자 부호를 정해 주므로 단조 방향 판단(T-부호)이 곧바로 됨. 「중」·통찰 없음·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "t=cos x∈[-1,1] → y=-2+(k+6)/(t+3) → k+6>0 → 최소 t=1: -2+(k+6)/4=-5/4 → k=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수(3 → 2, 4)·분자 계수(-2 → 1)·최솟값(-5/4 → -1). 제약: 나눗셈 뒤 분자 상수 k+6 의 부호가 조건으로 정해져야 하고(k>-6), 최솟값 조건에서 k 가 정수·유리수로 떨어지게."
    creative: "(1) 조건 k>-6 을 없애고 최솟값을 주면 분자 부호에 따라 두 경우(k+6>0 이면 t=1, <0 이면 t=-1) → I-MI ★3 (2) 최댓값 조건으로 뒤집기(★2) (3) k 를 두 개(분자·분모 상수)로 늘리고 최댓값·최솟값 두 조건 주기 ★3."
```

```yaml
- id: RPM-ALG-0632
  page: 85
  vendor_label: "유형 14 삼각함수를 포함한 함수의 최대·최소; 분수식의 꼴"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=|sin x|/(|sin x|+1) 의 치역이 {y | a≤y≤b} 일 때 a+b.
  category: "t=|sin x| ∈ [0,1] 치환 → 유리함수 꼴 1-1/(t+1) → 증가함수 끝값"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 분수식의 최대·최소(치환 → 유리함수 치역)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=|sin x| ∈ [0,1], y=t/(t+1)=1-1/(t+1) 은 증가하므로 t=0 에서 0, t=1 에서 1/2 → a+b=1/2. 절댓값 때문에 t 의 범위가 [0,1] 로 바뀌는 T-범위 하나가 0629 와의 차이 전부. 「상중」 출발 ★3 을 라벨로 두되 통찰 없음·M_total 6.
    [분류 이슈] 골조가 대표문항 0629 와 같고 절댓값 범위 판단만 추가돼 M·I 판정으로는 ★2. 라벨은 벤더 「상중」 대로 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "t=|sin x|∈[0,1] → y=1-1/(t+1) → 증가 → a=0·b=1/2 → 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수(1 → 2)·분자 계수(1 → 2)·|sin x| 를 |cos x|·sin²x 로(범위 [0,1] 동일). 제약: t∈[0,1] 에서 분모가 0 이 되지 않게, 치역 끝값이 유리수."
    creative: "(1) y=(|sin x|-1)/(|sin x|+2) 처럼 분자에 상수를 넣어 부호가 바뀌는 치역(★2~3) (2) |sin x| 대신 sin|x| 로 바꾸면 범위가 [-1,1] 로 돌아가는 함정 → T-범위 대비 ★3 (3) 치역이 주어지고 분모 상수를 묻는 역문제 ★3."
```

### 유형 15 삼각함수가 포함된 방정식; 일차식의 꼴

```yaml
- id: RPM-ALG-0633
  page: 85
  vendor_label: "유형 15 삼각함수가 포함된 방정식; 일차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x<π 에서 방정식 2sin(2x+π/3)=1 의 모든 근의 합.
  category: "θ=2x+π/3 치환 → θ 의 범위 [π/3, 7π/3) → sin θ=1/2 의 근 → x 복원·합"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각을 치환한 삼각방정식 일차식의 꼴(치환각 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    θ=2x+π/3 ∈ [π/3, 7π/3) 에서 sin θ=1/2 → θ=5π/6, 13π/6 (π/6 은 범위 밖). x=π/4, 11π/12, 합 7π/6. 치환각의 범위를 원래 정의역에서 다시 계산하는 T-범위가 핵심 함정. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "θ=2x+π/3∈[π/3,7π/3) → sin θ=1/2 → θ=5π/6, 13π/6 → x=π/4, 11π/12 → 합 7π/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수 2 → 3(근 3개)·위상 π/3 → π/6·우변 1 → √3·정의역 [0,π) → [0,2π). 제약: 치환각의 범위 계산이 맞아떨어지고 근이 특수각으로 떨어지며, 근의 개수가 정의역 끝(열린/닫힌)에 걸리지 않게."
    creative: "(1) 근의 개수만 묻기(★1~2) (2) 정의역을 -π/2≤x<π/2 로 옮겨 치환각이 음수 구간을 포함(T-범위 강화 ★2~3) (3) cos(2x-π/6)=-1/2 처럼 cos·음수 우변으로 바꿔 근의 위치 대칭을 이용(★2)."
```

```yaml
- id: RPM-ALG-0634
  page: 85
  vendor_label: "유형 15 삼각함수가 포함된 방정식; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<2π 에서 방정식 cos(x-π/4)=-√3/2 의 두 근의 차.
  category: "θ=x-π/4 치환 → θ 범위 [-π/4, 7π/4) → cos θ=-√3/2 의 근 → x 복원·차"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각을 치환한 삼각방정식 일차식의 꼴(치환각 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    θ=x-π/4 ∈ [-π/4, 7π/4), cos θ=-√3/2 → θ=5π/6, 7π/6 → x=13π/12, 17π/12, 차 π/3. 두 근의 차는 cos θ=k 의 두 근이 2π 를 기준으로 대칭이라 치환각 단계에서 바로 7π/6-5π/6=π/3 로 읽을 수도 있음. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "θ=x-π/4∈[-π/4,7π/4) → cos θ=-√3/2 → θ=5π/6, 7π/6 → x=13π/12, 17π/12 → 차 π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위상 π/4 → π/3·우변 -√3/2 → -1/2, 1/2·정의역 [0,2π) → [0,π]. 제약: 우변이 특수각 cos 값, 정의역 안에 근이 정확히 둘(정의역을 줄이면 하나가 될 수 있음)."
    creative: "(1) 두 근의 합을 물으면 치환각 대칭(합 2π)+2·π/4 로 즉시 → I-SYM d1 후보 ★2 (2) 위상을 매개변수 a 로 두고 '두 근의 차가 π/3' 은 항상 참임을 고르는 ㄱㄴㄷ(★3) (3) sin(x-π/4)=-√3/2 로 바꾸면 근 위치가 4·5사분면으로 옮겨져 같은 골조 ★2."
```

```yaml
- id: RPM-ALG-0635
  page: 85
  vendor_label: "유형 15 삼각함수가 포함된 방정식; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 sin(π/2-x)+sin(π-x)=sin(3π/2-x)+sin(2π-x) 의 모든 근의 합. 5지선다.
  category: "일반각 변환 네 개 → cos x+sin x=-cos x-sin x → tan x=-1 → 근·합"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각 변환 후 sin x=±cos x 꼴 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 cos x+sin x, 우변 -cos x-sin x 이므로 sin x=-cos x. cos x=0 이면 sin x=±1 이라 불가하므로 tan x=-1, x=3π/4, 7π/4, 합 5π/2. 변환 네 번을 정확히 하는 것이 전부이고 근은 특수각. 「중」·통찰 없음·M_total 5 → −1 후보이나 변환 4회의 처리량으로 ★2 유지.
  tier: star_2
  mechanism_primary: "변환 → cos x+sin x=-(cos x+sin x) → sin x=-cos x → tan x=-1 → 3π/4, 7π/4 → 5π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변환 항 조합(cos(π+x)·sin(x+π/2)·cos(3π/2+x) 등)·정의역 [0,2π] → [0,π). 제약: 정리 뒤 sin x=±cos x 또는 sin x=k 꼴로 떨어져야 하고 계수가 상쇄돼 0=0 이 되지 않게."
    creative: "(1) 정리 뒤 sin x=cos x 가 되게 부호를 바꿔 근 π/4, 5π/4(★2) (2) 한 항에 계수 2 를 넣어 tan x=-2 처럼 특수각이 아니게 만들면 '근의 개수'만 묻는 문항 ★2 (3) 정리 결과가 sin x+cos x=1 처럼 되면 교육과정 안에서는 제곱해서 sin x cos x=0 → 근 검증 필요 → I-VF ★3~4."
```

### 유형 16 삼각함수가 포함된 방정식; 이차식의 꼴

```yaml
- id: RPM-ALG-0636
  page: 86
  vendor_label: "유형 16 삼각함수가 포함된 방정식; 이차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x<2π 에서 방정식 3sin x-2cos²x=0 의 모든 근의 합.
  category: "cos²=1-sin² 로 sin 통일 → 이차방정식 인수분해 → 범위 밖 근 기각 → 근·합"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각방정식 이차식의 꼴(한 함수 통일 → 인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2sin²x+3sin x-2=0 → (2sin x-1)(sin x+2)=0 → sin x=1/2 (sin x=-2 는 범위 밖). x=π/6, 5π/6, 합 π. 통일·인수분해·범위 기각의 표준 사슬. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cos²x=1-sin²x → (2sin x-1)(sin x+2)=0 → sin x=1/2 → π/6, 5π/6 → 합 π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3, -2 → 1, -2 이면 sin x=1/2 대신 다른 값)·sin/cos 역할 교환. 제약: 인수분해가 되고 한 근은 [-1,1] 밖·다른 한 근은 특수각 값이어야 골조 유지."
    creative: "(1) 근의 개수만 묻기(★1~2) (2) 두 근 모두 [-1,1] 안(예: sin x=1/2, -1)으로 바꾸면 근 3개·합 계산 ★2 (3) 상수항을 매개변수로 두고 '근이 두 개가 되는 조건' → I-BW ★3."
```

```yaml
- id: RPM-ALG-0637
  page: 86
  vendor_label: "유형 16 삼각함수가 포함된 방정식; 이차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<2π 에서 2sin²x+a cos x-1=0 이 서로 다른 세 실근 π/3, α, β 를 가질 때 α+β(a 는 상수).
  category: "cos 통일 → 근 π/3 대입으로 a → 인수분해 → cos x=1/2, -1 의 나머지 근 → 합"
  M: {s: 4, k: 1, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 근으로 계수 결정 후 나머지 근(삼각방정식 이차식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2cos²x-a cos x-1=0 에 cos(π/3)=1/2 대입 → a=-1. (2cos x-1)(cos x+1)=0 → cos x=1/2 (x=π/3, 5π/3), cos x=-1 (x=π). α+β=5π/3+π=8π/3. 주어진 근 대입으로 계수를 정하는 것은 표준 미정계수 절차라 통찰로 세지 않음. 「중」·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "cos 통일 → cos(π/3)=1/2 대입 → a=-1 → (2cos x-1)(cos x+1)=0 → 5π/3, π → 8π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(π/3 → π/6, 2π/3)·상수항(-1 → 1)·sin/cos 교환. 제약: 대입으로 a 가 정해진 뒤 이차식이 인수분해되고 나머지 근이 특수각·'서로 다른 세 실근' 개수가 실제로 맞아야 함(cos x=±1 은 근이 하나뿐)."
    creative: "(1) 근의 개수 조건('서로 다른 세 실근')만으로 a 를 정하게 하면 cos x=±1 이 한 근만 준다는 판단 → I-MI ★3 (2) 세 근의 합을 묻기(★2) (3) a 대신 상수항을 미지수로 두면 같은 골조 ★2."
```

```yaml
- id: RPM-ALG-0638
  page: 86
  vendor_label: "유형 16 삼각함수가 포함된 방정식; 이차식의 꼴"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    0≤x<2π 에서 방정식 √(2sin²x+2sin x+cos²x)=1/2 을 풀기.
  category: "근호 안 sin 통일 → (sin x+1)² 완전제곱 → sin x+1≥0 으로 근호 제거 → sin x=-1/2"
  M: {s: 4, k: 1, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호가 있는 삼각방정식(완전제곱·양변 제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 안 =sin²x+2sin x+1=(sin x+1)². sin x+1≥0 이므로 √=sin x+1=1/2 → sin x=-1/2 → x=7π/6, 11π/6. 완전제곱을 못 봐도 양변을 제곱하면 sin²x+2sin x+3/4=0 → (sin x+1/2)(sin x+3/2)=0 으로 같은 결과. 「중」·서술형·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "근호 안 =(sin x+1)² → √=sin x+1 → sin x=-1/2 → 7π/6, 11π/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{7}{6}\pi$ 또는 $x=\dfrac{11}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변(1/2 → 3/2 이면 sin x=1/2)·완전제곱 상수(2sin x → -2sin x 면 (sin x-1)²·|sin x-1|=1-sin x). 제약: 근호 안이 완전제곱이 되게 계수를 맞추고 우변이 0 이상, 결과 sin 값이 [-1,1] 안 특수각."
    creative: "(1) (sin x-1)² 꼴로 바꿔 √=1-sin x 부호 판단이 필요하게(T-부호 강화 ★2~3) (2) 우변을 매개변수 k 로 두고 '근이 존재하는 k 의 범위'로 뒤집으면 0644 골조 → I-EQV ★3 (3) 서술형 채점을 '근호 제거 시 부호 근거'에 두면 ★2 유지."
```

```yaml
- id: RPM-ALG-0639
  page: 86
  vendor_label: "유형 16 삼각함수가 포함된 방정식; 이차식의 꼴"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<π/2 에서 방정식 3cos²x-1=sin x cos x 를 풀기.
  category: "상수 1 을 sin²+cos² 로 바꿔 동차 이차식 → 인수분해 (2cos x+sin x)(cos x-sin x)=0 → 범위로 한 인수 기각 → tan x=1"
  M: {s: 4, k: 2, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "sin x cos x 항 때문에 한 함수로 통일되지 않음을 보고 상수 1=sin²x+cos²x 로 바꿔 동차식으로 만든 뒤 인수분해(또는 cos²x 로 나눠 tan 이차식)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "sin x cos x 항이 있는 삼각방정식(동차화 → 인수분해 / tan 치환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2cos²x-sin x cos x-sin²x=0 → (2cos x+sin x)(cos x-sin x)=0. 0≤x<π/2 에서 2cos x+sin x>0 이므로 sin x=cos x, x=π/4. 다른 길은 cos²x 로 나눠 tan²x+tan x-2=0 → tan x=1 (tan x=-2 는 범위 밖). 통일이 안 되는 식을 동차화하는 EQV d2 한 개·M_total 8 → 「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "1=sin²x+cos²x → 2cos²x-sin x cos x-sin²x=0 → (2cos x+sin x)(cos x-sin x)=0 → 범위로 기각 → x=π/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x=\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3, -1, 1 → 다른 동차식이 되는 조합)·정의역 [0,π/2) → [0,π). 제약: 동차화 뒤 인수분해가 되고(판별식 완전제곱) 한 인수는 범위에서 해가 없거나 특수각, 다른 인수는 tan x=특수값."
    creative: "(1) 정의역을 0≤x<2π 로 넓혀 tan x=-2 쪽도 근의 '개수'로 세게 하면 근 개수 세기 ★3 (2) 우변을 k sin x cos x 로 두고 '근이 π/4 인 k' → 같은 골조 ★2~3 (3) 인수분해가 안 되게 계수를 바꾸면 tan 이차식 근이 특수각이 아니게 되어 '근의 개수' 문항 ★3."
```

### 유형 17 삼각형과 삼각함수가 포함된 방정식

```yaml
- id: RPM-ALG-0640
  page: 86
  vendor_label: "유형 17 삼각형과 삼각함수가 포함된 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 3cos²A-7cos A+2=0 일 때 sin(B+C). 5지선다.
  category: "cos A 이차방정식 인수분해 → 범위 밖 근 기각 → B+C=π-A → sin A"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형 내각 조건(A+B+C=π)과 삼각방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3cos A-1)(cos A-2)=0 → cos A=1/3 (2 는 범위 밖). sin(B+C)=sin(π-A)=sin A=√(1-1/9)=2√2/3. 인수분해·기각·보각 변환·sin 계산의 표준 사슬. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(3cos A-1)(cos A-2)=0 → cos A=1/3 → sin(B+C)=sin A → 2√2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수(3, -7, 2 → 2, -5, 2 이면 cos A=1/2)·묻는 값 sin(B+C) → cos(B+C)=-cos A, tan(B+C). 제약: 인수분해 가능·한 근은 |cos|>1 로 기각·A 가 삼각형 내각(0<A<π)이라 sin A>0."
    creative: "(1) cos(B+C) 를 물어 부호 반전(-1/3) 추가(★2) (2) 조건을 sin A 이차식으로 바꿔 A 가 예각·둔각 둘 다 가능하게 하면 cos(B+C) 값이 두 개 → I-MI ★3 (3) 'sin A+sin(B+C)' 같이 두 번 변환(★2)."
```

```yaml
- id: RPM-ALG-0641
  page: 86
  vendor_label: "유형 17 삼각형과 삼각함수가 포함된 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    예각삼각형 ABC 에서 4cos²A+4√3 sin A-7=0 일 때 tan{π-(B+C)}. 5지선다.
  category: "cos²=1-sin² 로 sin 통일 → 완전제곱 (2sin A-√3)²=0 → 예각으로 A=π/3 → π-(B+C)=A → tan A"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형 내각 조건(A+B+C=π)과 삼각방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4sin²A-4√3 sin A+3=0 → (2sin A-√3)²=0 → sin A=√3/2. 예각삼각형이라 A=π/3 (2π/3 기각 · T-범위). tan{π-(B+C)}=tan A=√3. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "sin 통일 → (2sin A-√3)²=0 → sin A=√3/2 → 예각 A=π/3 → tan{π-(B+C)}=tan A=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "완전제곱 계수(√3 → 1 이면 sin A=1/2 · A=π/6)·묻는 값 tan → cos, sin. 제약: sin A 가 특수각 값, '예각삼각형' 조건으로 A 가 하나로 정해지게(조건을 빼면 tan 값이 두 개)."
    creative: "(1) '예각' 조건을 빼고 tan 의 값을 물으면 A=π/3, 2π/3 두 경우 → I-MI ★3 (2) 'A 가 둔각' 으로 바꿔 tan A=-√3(★2) (3) 완전제곱이 아닌 두 근(sin A=1/2, 3/2 등)으로 바꿔 기각 단계 추가 ★2."
```

```yaml
- id: RPM-ALG-0642
  page: 86
  vendor_label: "유형 17 삼각형과 삼각함수가 포함된 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 2sin²((B+C)/2)+cos(A/2)-1=0 일 때 sin A.
  category: "(B+C)/2=π/2-A/2 → sin((B+C)/2)=cos(A/2) → cos(A/2) 이차식 인수분해 → A/2=π/3 → sin A"
  M: {s: 4, k: 1, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형 반각 조건 (B+C)/2=π/2-A/2 와 삼각방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin((B+C)/2)=sin(π/2-A/2)=cos(A/2) 이므로 2cos²(A/2)+cos(A/2)-1=0 → (2cos(A/2)-1)(cos(A/2)+1)=0. 0<A/2<π/2 라 cos(A/2)=1/2 → A/2=π/3 → A=2π/3, sin A=√3/2. 반각 변환이 유형 17 의 표준 도구라 통찰로 세지 않음. 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "(B+C)/2=π/2-A/2 → 2cos²(A/2)+cos(A/2)-1=0 → cos(A/2)=1/2 → A=2π/3 → sin A=√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수(2, 1, -1 → cos(A/2)=√2/2 가 나오는 조합)·묻는 값 sin A → cos A, A 자체. 제약: cos(A/2) 의 근 하나는 (0,1) 안 특수값·다른 근은 범위 밖, A=2·(A/2) 가 삼각형 내각."
    creative: "(1) sin A 대신 cos(B+C) 를 물어 -cos A 변환 추가(★2) (2) 조건을 cos((B+C)/2) 와 sin(A/2) 로 바꾸기(같은 골조 ★2) (3) 반각 대신 '(A+B)/2 와 C/2' 로 문자 역할 바꾸기(★2) · 반각 범위 0<A/2<π/2 를 못 쓰게 A 를 외각으로 주면 T-범위 강화 ★3."
```

```yaml
- id: RPM-ALG-0643
  page: 86
  vendor_label: "유형 17 삼각형과 삼각함수가 포함된 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 4cos²A+4sin A=5 일 때 cos(π/2+B+C).
  category: "cos²=1-sin² 로 sin 통일 → (2sin A-1)²=0 → cos(π/2+(B+C))=-sin(B+C)=-sin A"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형 내각 조건(A+B+C=π)과 삼각방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4sin²A-4sin A+1=0 → (2sin A-1)²=0 → sin A=1/2. A=π/6, 5π/6 둘 다 가능하지만 묻는 값 cos(π/2+B+C)=-sin(B+C)=-sin A=-1/2 는 A 를 정하지 않아도 됨. 「상중」 출발 ★3 을 라벨로 두되 통찰 없음·M_total 6.
    [분류 이슈] 골조가 0641 과 동일(완전제곱·보각 변환)하고 A 의 두 경우가 답에 영향을 주지 않아 M·I 판정으로는 ★2. 라벨은 벤더 「상중」 대로 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "sin 통일 → (2sin A-1)²=0 → sin A=1/2 → cos(π/2+(B+C))=-sin(B+C)=-sin A=-1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 5 → 다른 완전제곱이 되는 값(4cos²A+4√3 sin A=7 이면 0641)·묻는 값 cos(π/2+B+C) → sin(3π/2+B+C)=-cos(B+C)=cos A. 제약: 완전제곱이 되도록 계수·상수 맞추기, 묻는 값이 A 의 두 경우에 무관(sin A 로 귀결)이어야 답이 하나."
    creative: "(1) 묻는 값을 cos A 로 바꾸면 A=π/6, 5π/6 에서 ±√3/2 두 값 → '모든 값의 곱' 같은 발문으로 I-MI ★3 (2) '둔각삼각형' 조건을 넣고 tan A 를 묻기(★2~3) (3) 조건식을 sin·cos 혼합 이차식으로 바꿔 통일 단계 강화 ★3."
```

### 유형 18 삼각함수가 포함된 방정식이 실근을 가질 조건

```yaml
- id: RPM-ALG-0644
  page: 87
  vendor_label: "유형 18 삼각함수가 포함된 방정식이 실근을 가질 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 sin²x+cos x+a=0 이 실근을 갖도록 하는 실수 a 의 값의 범위.
  category: "cos 통일 → a=cos²x-cos x-1 로 상수분리 → t∈[-1,1] 에서 우변의 치역 → a 의 범위"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'실근을 갖는다' 를 'a 가 t∈[-1,1] 위 함수 f(t)=t²-t-1 의 치역에 속한다' 로 동치 변환(상수분리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각방정식의 실근 조건(상수분리 → 치환 함수의 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=cos²x-cos x-1=(t-1/2)²-5/4, t=cos x ∈ [-1,1]. 최소 t=1/2 에서 -5/4, 최대 t=-1 에서 1 → -5/4≤a≤1. 실근 존재를 치역 문제로 바꾸는 EQV d1 한 개가 유형 18 의 골조이고, 뒤는 구간 위 이차함수. 대표문제·M_total 7·통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "sin²x=1-cos²x → a=t²-t-1 (t∈[-1,1]) → 치역 [-5/4, 1] → -5/4≤a≤1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{5}{4}\le a\le 1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 계수(1 → -2, 3)·sin/cos 교환·부호. 제약: 꼭짓점이 [-1,1] 안이면 치역 끝이 꼭짓점값과 먼 끝점값, 밖이면 두 끝점값 — 어느 쪽인지 의도대로 두고 끝값이 유리수."
    creative: "(1) '정수 a 의 개수' 로 바꾸기(0645 골조 ★2) (2) 정의역 0≤x<π/2 를 주어 t 범위가 [0,1] 로 줄면 T-범위 추가(0647 골조 ★2~3) (3) '서로 다른 두 실근을 갖는 a' 로 바꾸면 t 하나에 x 가 몇 개 대응하는지 세야 해 I-MI ★3~4."
```

```yaml
- id: RPM-ALG-0645
  page: 87
  vendor_label: "유형 18 삼각함수가 포함된 방정식이 실근을 가질 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sin²x+2cos(x+π/2)+k=0 이 실근을 갖도록 하는 모든 정수 k 의 합. 5지선다.
  category: "cos(x+π/2)=-sin x 변환 → k=-sin²x+2sin x 로 상수분리 → 치역 [-3,1] → 정수 합"
  M: {s: 4, k: 1, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'실근을 갖는다' 를 'k 가 t∈[-1,1] 위 -t²+2t 의 치역에 속한다' 로 동치 변환(상수분리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각방정식의 실근 조건(상수분리 → 치환 함수의 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=-sin²x+2sin x=-(t-1)²+1, t ∈ [-1,1] → 치역 [-3, 1]. 정수 k=-3,-2,-1,0,1 의 합 -5. 0644 골조 앞에 일반각 변환, 뒤에 정수 세기가 붙은 것. 「중」·M_total 8·통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "cos(x+π/2)=-sin x → k=-(t-1)²+1 (t∈[-1,1]) → -3≤k≤1 → 정수 합 -5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변환 항(cos(x+π/2) → sin(x+π), cos(3π/2-x))·계수 2 → -2, 4·정수 합 → 개수. 제약: 치역 끝이 정수가 아니어도 되지만 정수 개수가 3~6 개 정도로, 꼭짓점 위치가 의도대로."
    creative: "(1) 정수 k 의 '개수' 나 '최댓값'(★2) (2) 정의역을 0≤x<π 로 제한해 t∈[0,1](0647 골조 ★2~3) (3) 'k 의 값에 따라 근의 개수' 표를 채우게 하면 I-MI ★3~4."
```

```yaml
- id: RPM-ALG-0646
  page: 87
  vendor_label: "유형 18 삼각함수가 포함된 방정식이 실근을 가질 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    sin²θ-2cos(θ+3π/2)-a-1=0 을 만족시키는 θ 가 존재할 때 상수 a 의 범위.
  category: "cos(θ+3π/2)=sin θ 변환 → a=sin²θ-2sin θ-1 로 상수분리 → 치역 [-2,2]"
  M: {s: 4, k: 1, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'θ 가 존재한다' 를 'a 가 t∈[-1,1] 위 t²-2t-1 의 치역에 속한다' 로 동치 변환(상수분리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각방정식의 실근 조건(상수분리 → 치환 함수의 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos(θ+3π/2)=sin θ 이므로 a=sin²θ-2sin θ-1=(t-1)²-2, t ∈ [-1,1] → 최소 -2 (t=1), 최대 2 (t=-1) → -2≤a≤2. 3π/2 변환의 부호(cos(3π/2+θ)=+sin θ)가 T-부호 함정. 「중」·서술형·M_total 8·통찰 1(d1) → ★2.
  tier: star_2
  mechanism_primary: "cos(θ+3π/2)=sin θ → a=(t-1)²-2 (t∈[-1,1]) → 치역 [-2,2] → -2≤a≤2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2\le a\le 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변환 항(cos(θ+3π/2) → sin(θ+π/2), cos(π-θ))·계수 -2 → 2, -4·상수 -1 → 1. 제약: 변환 부호가 의도한 함정을 만들고, 꼭짓점 위치·치역 끝값이 정수."
    creative: "(1) '정수 a 의 개수'(★2) (2) 'θ 가 존재하지 않는 a 의 범위' 로 여집합 발문(★2) (3) 조건에 0≤θ<π 를 붙여 t∈[0,1] 로 줄이면 T-범위 추가 ★2~3."
```

```yaml
- id: RPM-ALG-0647
  page: 87
  vendor_label: "유형 18 삼각함수가 포함된 방정식이 실근을 가질 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<π 에서 cos(π/2+x)cos(π/2-x)+4sin(π+x)=k 가 실근을 갖도록 하는 정수 k 의 개수.
  category: "일반각 변환 세 개 → k=-sin²x-4sin x → 0≤x<π 라 t∈[0,1] → 치역 [-5,0] → 정수 개수"
  M: {s: 4, k: 1, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'실근을 갖는다' 를 'k 가 t=sin x 의 실제 범위 [0,1] 위 -t²-4t 의 치역에 속한다' 로 동치 변환(상수분리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각방정식의 실근 조건(상수분리 → 치환 함수의 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (-sin x)(sin x)+4(-sin x)=k → k=-t²-4t=-(t+2)²+4. 0≤x<π 에서 t=sin x ∈ [0,1] (T-범위) 이고 꼭짓점 t=-2 가 밖이라 감소 → 치역 [-5, 0], 정수 6개. 변환 3회·정의역에 따른 t 범위·꼭짓점 밖 판단이 겹쳐 M_total 9 로 유형 18 안에서 가장 무겁지만 통찰은 상수분리 d1 하나. 「중」 출발 ★2 유지(★3 후보).
  tier: star_2
  mechanism_primary: "변환 → k=-t²-4t → 0≤x<π: t∈[0,1] → 감소 → 치역 [-5,0] → 정수 6개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역([0,π) → [0,π/2], [π,2π) 이면 t∈[-1,0])·sin 계수 4 → 2(꼭짓점 t=-1 이 경계)·묻는 값 개수 → 합. 제약: 정의역이 t 의 범위를 [-1,1] 의 진부분으로 줄이고, 그 범위에서 치역 끝값이 정수."
    creative: "(1) 정의역 끝을 열린/닫힌 구간으로 바꿔 끝값 포함 여부(T-경계 ★2~3) (2) 'x 의 근이 두 개가 되는 k' 로 바꾸면 t 하나에 x 두 개 대응(sin x=t, 0<t<1)을 세야 해 I-MI ★3~4 (3) 정의역을 매개변수로 두고 '정수 k 의 개수가 6 이 되는 정의역' 역문제 ★4."
```

### 유형 19 삼각함수가 포함된 부등식; 일차식의 꼴

```yaml
- id: RPM-ALG-0648
  page: 87
  vendor_label: "유형 19 삼각함수가 포함된 부등식; 일차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 부등식 sin(x-π/3)≥1/2 의 해가 α≤x≤β 일 때 α+β.
  category: "θ=x-π/3 치환·범위 [-π/3, 5π/3] → sin θ≥1/2 의 해 π/6≤θ≤5π/6 → x 복원·합"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각을 치환한 삼각부등식 일차식의 꼴(치환각 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    θ=x-π/3 ∈ [-π/3, 5π/3] 에서 sin θ≥1/2 ⇔ π/6≤θ≤5π/6 (한 구간뿐) → π/2≤x≤7π/6, α+β=5π/3. 치환각의 범위 안에서 해 구간이 하나인지 확인하는 T-범위 외에는 그래프 읽기. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "θ=x-π/3∈[-π/3,5π/3] → sin θ≥1/2 → π/6≤θ≤5π/6 → π/2≤x≤7π/6 → 5π/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위상 π/3 → π/6, π/4·우변 1/2 → √3/2, -1/2·부등호 방향. 제약: 우변이 특수각 값, 치환각 범위 안에서 해가 한 구간(부등호를 뒤집거나 우변이 음수면 두 구간이 되어 발문 형식이 바뀜)."
    creative: "(1) 부등호를 ≤ 로 뒤집어 해가 두 구간이 되면 '해에 속하는 정수 x 의 개수' 같은 발문 ★2~3 (2) 각의 계수 2 를 넣어 2x-π/3 로 하면 해 구간이 두 개 ★2~3 (3) cos(x-π/3)<1/2 로 바꾸면 cos 그래프의 구간 읽기 ★2."
```

```yaml
- id: RPM-ALG-0649
  page: 87
  vendor_label: "유형 19 삼각함수가 포함된 부등식; 일차식의 꼴"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤θ<π 에서 부등식 -√3/2≤cos θ<1/2 의 해. 5지선다.
  category: "cos 그래프에서 두 부등식의 교집합 → π/3<θ≤5π/6 (경계 포함 여부)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 일차식의 꼴(그래프에서 구간 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0≤θ<π 에서 cos 은 감소하므로 cos θ<1/2 ⇔ θ>π/3, cos θ≥-√3/2 ⇔ θ≤5π/6 → π/3<θ≤5π/6. 등호 붙는 쪽(T-경계)만 주의. 「중하」·통찰 없음·M_total 5 → −1 후보 적용 ★1.
  tier: star_1
  mechanism_primary: "cos θ<1/2 → θ>π/3 · cos θ≥-√3/2 → θ≤5π/6 → π/3<θ≤5π/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 경계값(-√3/2, 1/2 → -1/2, √2/2)·등호 위치·cos 을 sin 으로(단 sin 은 [0,π) 에서 단조가 아니라 구간이 둘). 제약: 정의역에서 함수가 단조이면 해가 한 구간; 선택지는 등호 위치·경계각을 바꾼 오답으로."
    creative: "(1) 정의역을 0≤θ<2π 로 넓혀 해가 두 구간(★2) (2) sin θ 로 바꿔 [0,π) 에서 대칭 구간 두 개(★2) (3) 부등식을 tan θ 로 바꾸면 점근선 θ=π/2 처리(T-범위) ★2."
```

```yaml
- id: RPM-ALG-0650
  page: 87
  vendor_label: "유형 19 삼각함수가 포함된 부등식; 일차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<2π 에서 부등식 sin x≥cos x 를 풀기.
  category: "y=sin x 와 y=cos x 그래프의 교점 π/4, 5π/4 → sin 이 위에 있는 구간"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 함수로 정리되지 않는 부등식을 두 그래프의 위치 비교(교점 사이 어느 쪽이 위인가)로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 삼각함수 그래프 비교 부등식 sin x≥cos x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점은 sin x=cos x, 즉 tan x=1 에서 x=π/4, 5π/4. 두 그래프를 한 좌표평면에 그려 π/4≤x≤5π/4 에서 sin x 가 위임을 읽음. 대수로는 정리되지 않아 그래프 비교로 옮기는 RT d1 한 개. 「중」·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "sin x=cos x → x=π/4, 5π/4 → 그래프 비교 → π/4≤x≤5π/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{4}\le x\le\dfrac{5}{4}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등호 방향·정의역([0,2π) → [-π,π])·sin x>-cos x(교점 3π/4, 7π/4). 제약: 교점이 tan x=±1 인 특수각으로 떨어져야 하고, 정의역 끝에서 부등호 포함 여부를 정확히."
    creative: "(1) 해 구간의 길이나 정수 개수를 묻기(★2) (2) sin x≥cos x 를 만족시키는 x 에 대해 sin x-cos x 의 최댓값(합성 필요 → 교육과정 밖 금지) (3) 두 그래프 대신 sin x≥|cos x| 로 바꿔 구간 판단이 좁아지게(★3 · T-부호)."
```

```yaml
- id: RPM-ALG-0651
  page: 87
  vendor_label: "유형 19 삼각함수가 포함된 부등식; 일차식의 꼴"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<α<π/2 에서 연립부등식 2cos α<√3, 2sin α≤√2 를 만족시키는 α 의 동경과 β(0≤β<2π)의 동경이 y축 대칭일 때 β 의 범위.
  category: "연립부등식 → π/6<α≤π/4 → y축 대칭 동경 β=π-α → 부등호 방향 뒤집어 β 범위"
  M: {s: 4, k: 1, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 동경이 y축 대칭' 을 0≤β<2π 에서 β=π-α 로 동치 변환하고, α 의 부등식을 β 의 부등식으로 옮기며 방향·등호를 반전"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각 연립부등식의 해와 동경의 대칭(β=π-α)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos α<√3/2 → α>π/6, sin α≤√2/2 → α≤π/4 (0<α<π/2) 이므로 π/6<α≤π/4. y축 대칭 동경은 β=π-α (범위 0≤β<2π 에서 하나) 이고 α 의 범위를 옮기면 3π/4≤β<5π/6 — 부등호 방향과 등호 위치가 함께 뒤집히는 T-경계·T-부호 두 개. 동경 대칭을 식으로 옮기는 EQV d1 한 개·M_total 8 → 「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "연립 → π/6<α≤π/4 → β=π-α → 3π/4≤β<5π/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}\pi\le\beta<\dfrac{5}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 경계값(√3, √2 → 1, √3)·등호 위치·대칭축(y축 → x축: β=2π-α · 원점: β=π+α · 직선 y=x: β=π/2-α). 제약: α 의 해가 한 구간이고 대칭 변환 뒤 β 가 0≤β<2π 안에서 하나로 정해지게."
    creative: "(1) 대칭축을 직선 y=x 로 바꾸면 β=π/2-α (★3 유지) (2) β 의 범위 대신 'β 를 나타내는 동경이 지나는 사분면'(★2) (3) α 의 정의역을 0≤α<2π 로 넓히면 해가 두 구간이 되어 β 도 두 구간 → I-MI ★4."
```

### 유형 20 삼각함수가 포함된 부등식; 이차식의 꼴

```yaml
- id: RPM-ALG-0652
  page: 88
  vendor_label: "유형 20 삼각함수가 포함된 부등식; 이차식의 꼴"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 부등식 2sin²x>3cos x 의 해가 a<x<b 일 때 a+b. 5지선다.
  category: "sin²=1-cos² 로 cos 통일 → 이차부등식 인수분해 → cos x+2>0 으로 약분 → cos x<1/2 의 구간"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 이차식의 꼴(한 함수 통일 → 인수분해 → 그래프 구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2cos²x+3cos x-2<0 → (2cos x-1)(cos x+2)<0, cos x+2>0 이므로 cos x<1/2 → π/3<x<5π/3, a+b=2π. 항상 양인 인수를 지우는 판단(T-부호)과 cos 그래프 구간 읽기. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "sin²x=1-cos²x → (2cos x-1)(cos x+2)<0 → cos x<1/2 → π/3<x<5π/3 → 2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 3 → 2, 1 이면 cos x<... 다른 값)·부등호 방향·sin/cos 교환. 제약: 인수분해되고 한 인수가 [-1,1] 에서 부호 고정, 남는 부등식의 경계가 특수각·해가 한 구간(부등호를 뒤집으면 두 구간)."
    creative: "(1) 부등호를 뒤집어 해가 0≤x≤π/3 또는 5π/3≤x≤2π 두 조각 → '해에 속하는 정수 x 의 개수'(★2~3) (2) 상수항을 매개변수로 두고 '해가 존재하지 않는 조건' → I-EQV ★3 (3) 두 인수 모두 [-1,1] 안에서 부호가 바뀌게(예: (2sin x-1)(2sin x+1)<0) 하면 구간 두 개 교집합 ★3."
```

```yaml
- id: RPM-ALG-0653
  page: 88
  vendor_label: "유형 20 삼각함수가 포함된 부등식; 이차식의 꼴"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 부등식 2cos²x<sin x+1 의 해.
  category: "cos²=1-sin² 로 sin 통일 → (2sin x-1)(sin x+1)>0 → sin x+1≥0 판단 → sin x>1/2 의 구간"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 이차식의 꼴(한 함수 통일 → 인수분해 → 그래프 구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2sin²x+sin x-1>0 → (2sin x-1)(sin x+1)>0. sin x+1≥0 이고 곱이 양이려면 sin x+1>0, 2sin x-1>0 → sin x>1/2 → π/6<x<5π/6. sin x=-1 인 x=3π/2 가 경계에 걸리지만 부등식이 엄격해 자연히 제외. 「중하」·통찰 없음·M_total 6 → ★2(−1 후보 아님).
  tier: star_2
  mechanism_primary: "cos²x=1-sin²x → (2sin x-1)(sin x+1)>0 → sin x>1/2 → π/6<x<5π/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{6}<x<\dfrac{5}{6}\pi$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 1, 1 → 2sin²x-sin x-1<0 같은 조합)·부등호 방향. 제약: 인수분해되고 한 인수는 [-1,1] 에서 부호 고정(또는 한 점에서만 0), 남는 경계가 특수각."
    creative: "(1) 부등호를 ≥ 로 바꾸면 sin x=-1 인 x=3π/2 가 해에 포함되는지 판단(T-경계 ★2~3) (2) 정의역을 0≤x<π 로 좁혀 해 구간이 잘리게(★2) (3) 우변 1 을 매개변수 k 로 두고 '해가 존재하는 k' → I-EQV ★3."
```

```yaml
- id: RPM-ALG-0654
  page: 88
  vendor_label: "유형 20 삼각함수가 포함된 부등식; 이차식의 꼴"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x<2π 에서 부등식 2cos²(x-π/3)-cos(x+π/6)-1≥0 의 해가 α≤x≤β 일 때 β/α.
  category: "두 인수의 차 π/2 → cos(x+π/6)=-sin(x-π/3) 로 한 각 통일 → sin 이차부등식 → θ 범위에서 구간 → x 복원 → 비"
  M: {s: 5, k: 2, a: 1, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x+π/6=(x-π/3)+π/2 임을 읽어 cos(x+π/6)=-sin θ (θ=x-π/3) 로 바꾸고 식 전체를 θ 하나로 통일"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 각의 삼각부등식 이차식(인수 차 π/2 통합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    θ=x-π/3 로 두면 cos(x+π/6)=cos(θ+π/2)=-sin θ, 부등식은 2cos²θ+sin θ-1≥0 → 2sin²θ-sin θ-1≤0 → (2sin θ+1)(sin θ-1)≤0 → -1/2≤sin θ≤1. θ ∈ [-π/3, 5π/3) 에서 sin θ≥-1/2 ⇔ -π/6≤θ≤7π/6 → π/6≤x≤3π/2, β/α=9. 인수 차 π/2 를 읽는 EQV d2(0628 과 같은 착안)에 통일·이차부등식·치환각 범위·복원이 이어져 M_total 9. 「중」 출발 ★2 에서 통찰 d2·노동량으로 +1 → ★3.
  tier: star_3
  mechanism_primary: "x+π/6=θ+π/2 → cos(x+π/6)=-sin θ → (2sin θ+1)(sin θ-1)≤0 → -π/6≤θ≤7π/6 → π/6≤x≤3π/2 → 9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 쌍(x-π/3, x+π/6 → x-π/4, x+π/4)·이차식 계수·부등호 방향·묻는 값 β/α → β-α, α+β. 제약: 인수 차가 정확히 ±π/2 여야 하고, 통일 뒤 인수분해되며 한 인수는 부호 고정, 치환각 범위에서 해가 한 구간이 되어 'α≤x≤β' 발문이 성립(구간이 둘이면 발문을 바꿔야 함)."
    creative: "(1) 부등호를 뒤집어 해가 두 구간이 되면 '해에 속하는 x 의 개수(정수 배 π/12)' 같은 발문 ★3 (2) 인수 차를 π 로 바꾸면 통찰이 얕아져 ★2 (3) 상수항을 매개변수로 두고 '해가 존재하지 않는 조건' → EQV 두 개 ★4."
```

```yaml
- id: RPM-ALG-0655
  page: 88
  vendor_label: "유형 20 삼각함수가 포함된 부등식; 이차식의 꼴"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부등식 cos²θ+4sin θ≤2a 가 모든 실수 θ 에 대하여 성립하도록 하는 실수 a 의 범위.
  category: "'모든 θ 에서 성립' → 2a≥(좌변의 최댓값) → cos²=1-sin² 통일 → t∈[-1,1] 에서 -(t-2)²+5 의 최댓값 4 → a≥2"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'모든 θ 에 대해 f(θ)≤2a' 를 '2a≥max f' 로 동치 변환(절대부등식 → 최댓값 비교)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각부등식이 항상 성립할 조건(최댓값·최솟값 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변 =1-sin²θ+4sin θ=-(t-2)²+5, t ∈ [-1,1]. 꼭짓점 t=2 가 밖이라 증가 → 최댓값 t=1 에서 4. 항상 성립 ⇔ 2a≥4 ⇔ a≥2. '모든 θ' 조건을 최댓값 비교로 옮기는 EQV d1 과 꼭짓점 밖 판단(T-범위). 「상중」 출발 ★3·통찰 1·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "∀θ: f(θ)≤2a ⇔ 2a≥max f → f=-(t-2)²+5 (t∈[-1,1]) → max 4 → a≥2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\ge 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 계수(4 → 2 이면 꼭짓점 t=1 이 경계 · 3 이면 밖)·부등호 방향(≥ 이면 최솟값 비교)·우변 2a → a+1. 제약: 꼭짓점이 구간 밖/안 어느 쪽인지 의도대로, 최댓값이 정수."
    creative: "(1) 부등호를 ≥ 로 바꿔 최솟값 비교(t=-1 에서 -4 → a≤-2 · ★3) (2) '성립하는 θ 가 존재하는 a' 로 바꾸면 최솟값 비교로 뒤집혀 I-EQV 유지 ★3 (3) 정의역 0≤θ≤π/2 로 제한해 t∈[0,1] 이면 T-범위 추가 ★3 (4) 좌변에 두 각(θ 와 θ+π/2)을 섞으면 0654 착안까지 겹쳐 ★4."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 1 · ★2 27 · ★3 7 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 25 · premium 0
- 통찰 라벨: I-EQV 9(d2 3 · d1 6) · I-RT 1(d1) · 합 10 문항 10 라벨(문항당 1개)
- type_hint 상위: 「삼각방정식의 실근 조건(상수분리 → 치환 함수의 치역)」 4 · 「삼각함수 분수식의 최대·최소(치환 → 유리함수 치역)」 3 · 「삼각형 내각 조건(A+B+C=π)과 삼각방정식」 3 · 「삼각함수 일차식(절댓값 포함)의 최대·최소로 상수 결정」 2 · 「각을 치환한 삼각방정식 일차식의 꼴(치환각 범위)」 2 · 「서로 다른 각의 삼각함수 … (인수 차 π/2 통합)」 2(최대·최소 1 · 부등식 1) · 「삼각부등식 이차식의 꼴」 2
- 그림: 0문
- 전사 답 확인 필요: 0문(35문 전부 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0632 | 벤더 「상중」이나 골조가 대표문항 0629 와 같고 t=|sin x|∈[0,1] 범위 판단만 추가 · 통찰 없음·M_total 6 → M·I 판정 ★2. 라벨은 ★3 으로 두고 기록 | ★2 / ★3 |
| RPM-ALG-0643 | 벤더 「상중」이나 골조가 0641(중)과 동일(완전제곱·보각 변환)하고 A 의 두 경우가 답에 무관 · 통찰 없음·M_total 6 → M·I 판정 ★2. 라벨은 ★3 으로 두고 기록 | ★2 / ★3 |

기록만 하고 라벨을 조정한 문항(이슈 아님 · 1단 차이): 0649(중하 · M_total 5 · 통찰 없음 → −1 적용 ★1), 0654(중 · EQV d2 + M_total 9 → +1 적용 ★3), 0647(중 · M_total 9 이나 통찰 d1 하나라 ★2 유지 · ★3 후보를 rationale 에 기록).

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「실근 조건(상수분리 → 치역)」 4 · 「분수식 최대·최소(유리함수 치역)」 3 · 「삼각형 내각 조건」 3 · 「이차식 최대·최소(치환 → 구간 위 이차함수)」 계열 4(최대·최소 1 · 그때의 x 1 · 상수 결정 1 · 인수 통합 1) · 「이차식 방정식·부등식(통일 → 인수분해)」 계열 6.
- 따로 세워야 할 유형: (a) 「인수 차 π/2 통합」(0628·0654) — 최대·최소와 부등식 어느 쪽에 나와도 착안이 같으므로 독립 유형으로 두고 base ★3 권장. (b) 「동차화 / sin x cos x 항 방정식」(0639) — 유형 16 안에 한 문항뿐이지만 골조가 다른 문항과 달라 별도 유형 필요(base ★3). (c) 「두 그래프 비교 부등식 sin x≥cos x」(0650) — 유형 19 의 다른 문항(단일 함수 구간 읽기)과 도구가 달라 분리. (d) 「동경 대칭과 연립부등식」(0651) — 05 단원 동경 대칭과 결합된 유형으로 분리.
- 통합해도 될 유형: 유형 12 의 「절댓값 포함 일차식」 세 갈래(0621·0623 절댓값이 그대로 벗겨짐 / 0624 0 을 지남)는 한 유형 안 변형 파라미터(|상수| vs 진폭)로 다룰 수 있음. 유형 15 의 치환각 방정식과 유형 19 의 치환각 부등식(0633·0634·0648)은 「각 치환 → 치환각 범위 → 복원」 골조가 같아 방정식/부등식만 다른 하나의 유형군. 유형 18 네 문항과 0655(항상 성립)는 모두 「상수분리 → 치역」 골조라 한 유형의 두 발문(존재/항상)으로 묶을 수 있음.
- 벤더 「상중」 두 문항(0632·0643)이 M·I 로는 ★2 라, 카탈로그를 만들 때 유형 14·17 의 base ★ 를 2 로 두고 개별 문항의 ★3 은 절댓값·완전제곱 같은 T 항목이 아니라 실제 통찰이 있을 때만 주는 것이 맞아 보임.
