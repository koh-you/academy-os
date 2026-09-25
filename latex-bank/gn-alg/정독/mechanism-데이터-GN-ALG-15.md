---
name: mechanism-데이터-GN-ALG-15
description: 개념원리 대수 15 호도법(1/1 · 137~142쪽 · 25문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 15 호도법
  unit_code: "15"
  part: "1/1"
  extract_range: "137~142쪽 · 137-329~142-349"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 15 호도법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 15단원 「호도법」 137~142쪽 전 25문항을 다룬다. 구역은 개념원리 익히기 4문 · 필수·발전 예제 9문(필수 예제 4 + 딸린 확인체크 5) · 연습문제 STEP 1 5문 · STEP 2 4문 · 실력 UP 2문 · 특강 1문이다. 단원 내용은 육십분법↔호도법 변환, 일반각 $2n\pi+\theta$, 동경의 위치(사분면·대칭·회전), 부채꼴의 호의 길이 $l=r\theta$ 와 넓이 $S=\tfrac12 r^2\theta=\tfrac12 rl$, 그리고 둘레 고정 부채꼴의 최대 넓이와 원뿔 전개도 응용이다.

벤더 난이도 신호는 구역과 태그다. 개념원리 익히기(통번호 · 확인체크)는 ★1 출발, 필수 예제는 ★2 출발, 「필수·발전 예제」 구역 안의 확인체크는 바로 앞 예제의 난도를 따르므로 ★2 출발로 읽었다. 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이고, 교육청 기출 태그는 통찰 유무로 +0~1, 특강 구역은 ★2~3 출발이다. 출발점에서 M_total 과 통찰로 ±1 조정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-137-329
  page: 137
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $120^\circ$, $-315^\circ$, $-144^\circ$, $330^\circ$ 를 호도법으로 나타내기.
  category: "육십분법 → π/180 곱하기 → 호도법"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법을 호도법으로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1도 = π/180 을 곱해 기약분수 π 꼴로 정리하는 한 줄 변환 4개. 음각의 부호만 유지하면 되는 T-부호 하나.
    개념원리 익히기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각도 × π/180 → 약분 → 기약분수 π 꼴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2}{3}\pi$ ⑵ $-\dfrac{7}{4}\pi$ ⑶ $-\dfrac{4}{5}\pi$ ⑷ $\dfrac{11}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/137-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 각을 180의 약수 배수(15·36·45·72·240·420 등)로 교체 가능. 제약: 180과의 최대공약수가 커서 분모가 2·3·4·5·6·12 수준의 기약분수로 떨어져야 하고, 음각을 최소 하나 남겨 부호 확인 기능을 유지한다."
    creative: "(1) 360도를 넘는 각($750^\\circ$)을 넣어 일반각과 연결(★1 유지) (2) 변환한 값끼리 더하거나 빼게 해 계산 한 단계 추가(★2) (3) 한 각만 주고 나머지를 동경이 같은 각으로 묻기(★2 · 일반각 유형으로 이동)."
```

```yaml
- id: GN-ALG-137-330
  page: 137
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\dfrac{5}{6}\pi$, $\dfrac{5}{4}\pi$, $-\dfrac{4}{3}\pi$, $-\dfrac{31}{6}\pi$ 를 육십분법으로 나타내기.
  category: "호도법 → 180/π 곱하기 → 육십분법"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "호도법을 육십분법으로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1라디안 = 180도/π 를 곱하는 역변환 4개. ⑷ 는 크기가 360도를 넘는 음각이라 부호와 자릿수만 주의(T-부호).
    개념원리 익히기 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "π 계수 × 180 → 정수 도(度) 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $150^\circ$ ⑵ $225^\circ$ ⑶ $-240^\circ$ ⑷ $-930^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/137-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 2·3·4·5·6·9·10·12 로 두고 분자를 바꾸면 도 단위가 정수로 떨어진다. 제약: 분모가 180의 약수여야 정수 도가 되고, 360도를 넘는 값을 하나쯤 남겨 ⑷ 의 기능을 유지한다."
    creative: "(1) 변환 뒤 그 각이 몇 사분면인지까지 묻기(★2) (2) 두 각의 크기를 비교하게 하기(★2) (3) $\\dfrac{\\pi}{7}$ 처럼 정수로 떨어지지 않는 각을 넣어 근삿값 처리를 묻기(★2 · 단원 밖)."
```

```yaml
- id: GN-ALG-137-331
  page: 137
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\dfrac{17}{6}\pi$, $-\dfrac{2}{3}\pi$, $\dfrac{28}{5}\pi$, $-\dfrac{15}{4}\pi$ 의 동경이 나타내는 일반각을 $2n\pi+\theta$ ($0\le\theta<2\pi$) 꼴로.
  category: "주어진 각에서 2π 의 정수배 덜어내기 → 0 이상 2π 미만 θ 확정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "호도법에서 일반각 2nπ+θ 로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각을 2π 로 나눈 몫과 나머지를 잡는 절차. 음각은 2π 를 더해 올려야 하므로 θ 범위 경계(0 이상 2π 미만)가 유일한 함정(T-범위).
    개념원리 익히기 ★1 출발 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "각 = 2π×(정수) + θ 로 분해 → θ 를 0≤θ<2π 로 맞춤"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2n\pi+\dfrac{5}{6}\pi$ ⑵ $2n\pi+\dfrac{4}{3}\pi$ ⑶ $2n\pi+\dfrac{8}{5}\pi$ ⑷ $2n\pi+\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/137-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자를 키워 2π 를 여러 번 덜어내게 하거나(예: 41π/6) 음의 큰 각을 넣을 수 있다. 제약: θ 가 0≤θ<2π 안의 기약분수로 떨어져야 하고, 음각을 최소 하나 남겨 더하기 방향 처리를 유지한다."
    creative: "(1) θ 범위를 $-\\pi\\le\\theta<\\pi$ 로 바꿔 경계 처리를 새로 묻기(★2) (2) 동경이 같은 각을 보기에서 고르게 하기(★2) (3) 두 각의 동경이 일치할 조건으로 미지수를 두기(★3 · I-EQV)."
```

```yaml
- id: GN-ALG-137-332
  page: 137
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 반지름 $r$ 와 중심각 $\theta$ 가 주어진 부채꼴의 호의 길이 $l$ 과 넓이 $S$. ⑵ 는 중심각이 $60^\circ$ 로 주어짐.
  category: "l = rθ, S = ½r²θ 대입 (중심각이 도이면 먼저 호도법으로)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 공식에 그대로 대입. ⑵ 만 중심각이 육십분법이라 π/3 으로 고친 뒤 대입하는 단위 함정(T-단위)이 있다.
    개념원리 익히기 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "θ 를 라디안으로 통일 → l=rθ → S=½r²θ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $l=\dfrac{\pi}{2}$, $S=\dfrac{3}{4}\pi$ ⑵ $l=\dfrac{4}{3}\pi$, $S=\dfrac{8}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/137-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 은 2~12 의 정수, θ 는 분모가 2·3·4·6 인 π 배수 또는 30·45·120 도. 제약: S=½r²θ 가 지저분한 분수가 되지 않도록 r 을 짝수로 두면 좋고, 도로 주는 항목을 최소 하나 남겨 단위 변환 기능을 유지한다."
    creative: "(1) l 과 S 중 하나를 주고 나머지와 r·θ 를 역으로 묻기(★2 · I-BW 약) (2) 부채꼴의 둘레 $2r+l$ 까지 묻기(★2) (3) 반지름을 2배로 할 때 넓이 변화를 묻기(★2 · 비례 관계)."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-138-e4
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    육십분법과 호도법의 대응 5개 중 옳지 않은 것 고르기(5지선다).
  category: "선택지마다 π/180 또는 180/π 를 곱해 양변 대조"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환 참거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 변환을 다섯 번 반복해 틀린 하나를 찾는 구조라 계산량만 늘고 통찰은 없다. 음각·360도 초과 각이 섞여 부호 함정(T-부호) 하나.
    필수 예제 ★2 출발 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선택지를 한쪽 단위로 통일 → 양변 비교 → 불일치 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/138-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 대응쌍의 각과 오답 위치를 자유롭게 바꿀 수 있다. 제약: 정답이 아닌 네 쌍은 정확히 맞아야 하고, 오답은 분모·분자를 뒤집는 식의 전형적 실수(160도를 4π/5 대신 8π/9 로)로 만들어야 판별 의미가 있다."
    creative: "(1) 옳은 것을 모두 고르는 보기형으로 바꾸기(★2) (2) 틀린 것을 바르게 고치라고 묻기(★2) (3) 한 선택지를 동경의 사분면 진술로 바꿔 판정 축을 섞기(★3)."
```

```yaml
- id: GN-ALG-138-e5
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴⑵ $300^\circ$, $-210^\circ$ 의 동경이 나타내는 일반각을 $2n\pi+\theta$ ($0\le\theta<2\pi$) 꼴로.
  category: "육십분법 → 호도법 → 2π 의 정수배 분리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "호도법에서 일반각 2nπ+θ 로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    137-331 과 같은 절차에 단위 변환 한 단계가 앞에 붙는다. 음각은 2π 를 더해 θ 범위로 올려야 한다(T-범위).
    통찰 없음·M_total 5 로 −1 후보이나 변환과 일반각 두 단계를 모두 요구하므로 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "도 → 라디안 변환 → 2π 배수 분리 → θ 를 0≤θ<2π 로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2n\pi+\dfrac{5}{3}\pi$ ⑵ $2n\pi+\dfrac{5}{6}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/138-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 15도 배수로 두면 θ 가 기약분수로 떨어진다. 제약: 한쪽은 음각 또는 360도 초과 각으로 두어 2π 를 더하고 빼는 두 방향을 모두 연습시킨다."
    creative: "(1) 답을 육십분법 일반각 $360^\\circ\\times n+\\alpha$ 로도 함께 쓰게 하기(★2) (2) 그 동경이 몇 사분면인지 이어 묻기(★2) (3) 두 각의 동경이 일치하도록 미지수를 정하게 하기(★3 · I-EQV)."
```

```yaml
- id: GN-ALG-138-333
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ㄱ~ㄹ 네 진술(무명수 1 과 $\dfrac14$ 의 도 환산, $\dfrac{\pi}{2}=90^\circ$, $-\dfrac{\pi}{3}=-60^\circ$) 중 옳은 것 모두 고르기.
  category: "1라디안 = 180°/π 로 읽기 → 각 진술 양변 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환 참거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄹ 은 단위 없는 수 1 과 1/4 을 라디안으로 읽어 180/π 를 곱하는지가 전부다. 360/π 와 90°/π 는 2배·잘못된 자리의 전형적 오답.
    T-표기(무명수를 라디안으로)와 T-단위 두 함정. 앞선 필수 예제 난도를 따르는 확인체크 ★2 출발 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "무명수 = 라디안으로 해석 → ×180/π → 진술 양변 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/138-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무명수를 1·1/2·2 로, 정답 진술의 각을 π/2·π/3·π/4 로 바꿀 수 있다. 제약: 참거짓이 갈리는 오답 진술은 180/π 대신 360/π 나 π/180 을 쓴 형태로 만들어야 학습 의미가 있다."
    creative: "(1) 옳지 않은 것의 개수를 묻기(★2) (2) 1라디안이 몇 도인지 소수 근삿값으로 묻기(★2) (3) ㄱ 을 호의 길이와 반지름이 같을 때의 중심각 정의로 바꿔 정의 자체를 묻기(★2 · 개념 회귀)."
```

```yaml
- id: GN-ALG-138-334
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $345^\circ$, $900^\circ$, $-960^\circ$ 의 동경이 나타내는 일반각을 $2n\pi+\theta$ ($0\le\theta<2\pi$) 꼴로.
  category: "육십분법 → 호도법 → 2π 의 정수배 분리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "호도법에서 일반각 2nπ+θ 로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    138-e5 와 같은 골조이고 900도·−960도처럼 2π 를 여러 번 덜어내야 하는 각이 들어 계산 단계만 늘었다.
    θ 범위 경계가 유일한 함정(T-범위). 확인체크 ★2 출발 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "도 → 라디안 → 2π 배수 반복 제거 → θ 를 0≤θ<2π 로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2n\pi+\dfrac{23}{12}\pi$ ⑵ $2n\pi+\pi$ ⑶ $2n\pi+\dfrac{2}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/138-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 15도 배수로 두고 크기를 720~1200도 범위까지 키울 수 있다. 제약: θ 가 기약분수로 떨어져야 하고 ⑵ 처럼 θ 가 π 나 π/2 같은 경계값이 되는 항목을 하나 두면 표기 확인에 좋다."
    creative: "(1) 동경이 x축·y축 위에 오는 각만 고르게 하기(★2) (2) 세 각 중 동경이 일치하는 쌍을 찾게 하기(★2) (3) $2n\\pi+\\theta$ 대신 $n\\pi+\\theta$ 꼴로 묻기(★3 · 홀짝 분기 I-MI)."
```

```yaml
- id: GN-ALG-139-e6
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    반지름 $4\,\mathrm{cm}$, 호의 길이 $2\pi\,\mathrm{cm}$ 인 부채꼴의 중심각의 크기와 넓이.
  category: "l = rθ 에서 θ 역산 → S = ½rl 로 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    θ=l/r 로 중심각을 얻고 S=½rl 에 바로 넣으면 두 줄이다. 넓이 단위가 cm² 임을 유지하는 정도의 함정(T-단위).
    통찰 없음·M_total 5 로 −1 후보이나 역산 한 단계가 있는 필수 예제라 ★2 유지. [분류 이슈] −1 후보.
  tier: star_2
  mechanism_primary: "θ = l/r → S = ½rl 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '중심각의 크기: $\dfrac{\pi}{2}$, 넓이: $4\pi\,\mathrm{cm}^2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/139-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 은 2~12 정수, l 은 r 의 π 배수 꼴(kπ)로 두면 θ 가 기약분수 π 로 떨어진다. 제약: θ 가 2π 미만이어야 부채꼴로 성립한다."
    creative: "(1) r 과 S 를 주고 l·θ 를 묻기(★2) (2) 둘레까지 묻기(★2) (3) 같은 넓이의 다른 부채꼴과 비교시키기(★2 · 140-342 골조) (4) 중심각을 육십분법으로 주고 답은 호도법으로 요구(★2 · T-단위 강화)."
```

```yaml
- id: GN-ALG-139-e7
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    둘레의 길이가 $8$ 인 부채꼴의 최대 넓이와 그때의 중심각의 크기.
  category: "둘레 조건으로 l 소거 → S 를 r 의 이차식으로 → 꼭짓점에서 최대 → θ=l/r"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘레 2r+l=8 을 l=8-2r 로 풀어 S=½rl 을 r 만의 이차함수 r(4-r) 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부채꼴의 넓이의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수 두 개(r, l)에 조건 하나라 그대로는 최댓값을 못 본다. 둘레 조건을 l 에 대해 풀어 S 를 r 의 이차함수로 바꾸는 착안이 핵심(I-EQV d2).
    꼭짓점에서 r=2, l=4 이고 θ=l/r=2 는 0<θ<2π 를 만족하는지 확인해야 한다(T-범위).
    필수 예제 ★2 출발 + 통찰 1개·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "2r+l=8 → S=½r(8-2r)=r(4-r) → r=2 에서 최대 4 → θ=l/r=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "최대 넓이: $4$, 중심각의 크기: $2$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/139-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레를 4k 꼴(8·12·16·20·24)로 두면 최댓값 k², 중심각은 항상 2 로 고정된다. 제약: 둘레가 4의 배수여야 r 이 정수로 떨어지고, 최대에서 θ=2 가 2π 미만이라 부채꼴로 성립한다."
    creative: "(1) 최대 넓이 대신 넓이가 주어진 값 이상이 되는 r 의 범위를 묻기(★3 · 이차부등식) (2) 둘레를 고정하고 호의 길이를 최대로 하라고 묻기(★3 · 조건 해석 변경) (3) 그 부채꼴을 원뿔 옆면으로 말아 부피까지 묻기(★4 · 141-348 골조 · I-RT 추가)."
```

```yaml
- id: GN-ALG-139-335
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    중심각 $\dfrac{4}{3}\pi$, 넓이 $6\pi$ 인 부채꼴의 둘레의 길이.
  category: "S=½r²θ 에서 r 역산 → l=rθ → 둘레 2r+l"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    넓이 식에서 r²=9 를 얻어 r=3(양수만 채택 · T-부호)로 정하고 l=rθ 를 구해 둘레 2r+l 로 합치는 세 단계.
    확인체크 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "6π=½r²·(4/3)π → r=3 → l=4π → 둘레=2r+l"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6+4\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/139-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ 를 분모 2·3·4·6 의 π 배수로, S 를 ½r²θ 가 정수 r 을 주는 값으로 맞춘다(θ=4π/3·S=6π → r=3). 제약: r² 이 완전제곱이어야 무리수가 안 나오고 θ<2π 여야 한다."
    creative: "(1) 둘레를 주고 넓이를 묻는 역방향(★2) (2) 같은 넓이를 갖는 중심각이 다른 부채꼴과 비교(★3) (3) 넓이와 둘레를 동시에 주고 r·θ 를 연립으로 구하게 하기(★3 · I-CON)."
```

```yaml
- id: GN-ALG-139-336
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    밑면의 반지름이 $1$, 모선의 길이가 $3$ 인 원뿔의 겉넓이.
  category: "전개도의 옆면 부채꼴(반지름=모선, 호=밑면 둘레) → 옆넓이 ½rl + 밑넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "입체를 전개도로 옮겨 옆면을 반지름 3, 호의 길이 2π 인 부채꼴로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원뿔의 전개도와 부채꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑면 둘레 2π 가 옆면 부채꼴의 호의 길이와 같다는 대응을 세우는 것이 전부이고, 그 뒤는 S=½rl 한 줄이다(I-RT d1).
    모선과 밑면 반지름을 뒤바꾸는 표기 함정(T-표기) 하나. 확인체크 ★2 출발 · 통찰 1개지만 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "밑면 둘레 2π = 옆면 호 → 옆넓이 ½·3·2π=3π → +밑넓이 π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/139-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 반지름 R 과 모선 L 을 정수로 바꿀 수 있다(R=2·L=5 등). 제약: L>R 이어야 원뿔이 되고, 옆면 중심각 2πR/L 이 2π 미만이어야 한다."
    creative: "(1) 겉넓이 대신 옆면 부채꼴의 중심각을 묻기(★2) (2) 겉넓이를 주고 모선을 역산시키기(★3 · I-BW) (3) 부피까지 묻기(★3 · 피타고라스 추가) (4) 둘레 고정 부채꼴을 말아 부피 최대를 묻기(★4 · 141-348)."
```

```yaml
- id: GN-ALG-139-337
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    둘레의 길이가 $20$ 인 부채꼴의 최대 넓이와 그때의 중심각의 크기.
  category: "둘레 조건으로 l 소거 → S 를 r 의 이차식으로 → 꼭짓점에서 최대 → θ=l/r"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘레 2r+l=20 을 l=20-2r 로 풀어 S=½rl 을 r 만의 이차함수 r(10-r) 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부채꼴의 넓이의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    139-e7 과 완전히 같은 골조를 숫자만 바꿔 반복한다. 조건식으로 변수를 하나 줄이는 착안이 여전히 풀이의 축(I-EQV d2)이다.
    확인체크 ★2 출발 + 통찰 1개·M_total 7 → ★3. [분류 이슈] 직전 예제 반복이라 체감은 ★2 쪽.
  tier: star_3
  mechanism_primary: "2r+l=20 → S=r(10-r) → r=5 에서 최대 25 → θ=l/r=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "최대 넓이: $25$, 중심각의 크기: $2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/139-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레를 4k 꼴로 두면 최댓값 k²·중심각 2 로 고정. 제약: 둘레가 4의 배수여야 r 이 정수이고, 139-e7 과 숫자를 다르게 둬야 반복 학습 의미가 산다."
    creative: "(1) 넓이를 고정하고 둘레의 최솟값을 묻는 쌍대 문제(★3) (2) 중심각이 항상 2 라디안임을 일반적으로 보이게 하기(★4 · 매개변수 일반화로 Mₐ 상승) (3) 반지름에 상한을 걸어 꼭짓점이 범위 밖이 되게 하기(★4 · 제한된 이차함수 최대 · T-범위)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-140-338
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-660^\circ$, $-315^\circ$, $436^\circ$, $863^\circ$, $1150^\circ$ 중 동경이 존재하는 사분면이 나머지 넷과 다른 하나. 5지선다.
  category: "각을 360°×n+α (0°≤α<360°) 로 환원 → α 의 사분면 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경의 위치(사분면) 판정 — 일반각 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 각을 각각 360°로 나눈 나머지로 환원해 사분면을 비교하는 같은 절차의 반복이다. 음각 두 개에 360°·720°를 더하는 부호 처리(T-부호)만 주의하면 된다.
    통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 → 360°n+α 환원 → α 의 사분면 → 나머지 넷과 다른 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 각의 크기·부호를 바꿀 수 있음(한 바퀴 이상 도는 각 2~3개, 음각 1~2개 유지). 제약: 환원 후 사분면이 정확히 하나만 달라야 하고, 90°의 배수에 걸리는 각(축 위의 각)은 넣지 않는다."
    creative: "(1) 다섯 선택지를 호도법으로 제시(★2 유지 · 2nπ 환원으로 바뀜) (2) 육십분법과 호도법을 섞어 제시하면 단위 변환이 한 겹 더해져 ★3 (3) '제2사분면의 각인 것의 개수'를 묻는 개수형(★2) (4) θ 가 제k사분면일 때 −θ·180°−θ 의 사분면을 묻는 일반형으로 올리면 ★3."
```

```yaml
- id: GN-ALG-140-339
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    각 $3\theta$ 의 동경과 각 $\theta$ 의 동경이 직선 $y=x$ 에 대하여 대칭일 때, $0<\theta<\dfrac{2}{3}\pi$ 인 모든 $\theta$ 의 합.
  category: "두 동경이 직선에 대칭 ⟺ 두 각의 합 = 2×(축의 각)+2nπ → θ 를 n 의 식으로 → 범위 안 n 열거 후 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'y=x 에 대하여 대칭'이라는 기하 조건을 두 각의 합이 축의 각 π/4 의 2배와 합동이라는 대수식 3θ+θ=π/2+2nπ 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 동경의 대칭 조건으로 θ 구하기(직선 y=x 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭축의 각이 π/4 이므로 두 동경의 각의 합이 π/2+2nπ 라는 식을 세우는 한 수가 풀이 전부를 결정한다(I-RT d2). 이 식만 서면 θ=π/8+nπ/2 이고 범위 안 n=0,1 을 골라 더하는 것은 절차다.
    STEP 1 출발점 ★2 + 통찰 1개(d2)·M_total 7 → ★3. 대칭이 아니라 '일치'로 읽으면 차의 식이 되는 것이 흔한 함정.
  tier: star_3
  mechanism_primary: "y=x 대칭 → 3θ+θ=2·(π/4)+2nπ → θ=π/8+nπ/2 → 0<θ<2π/3 안 n=0,1 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(3θ → 2θ·4θ·5θ)와 θ 의 범위를 바꿀 수 있음. 제약: 합 조건의 계수 (k+1) 로 나눈 뒤 범위 안 정수 n 이 2개 이상 남아야 '합'을 묻는 의미가 살고, 범위 끝점이 해와 겹치지 않아야 한다(경계 제외 처리)."
    creative: "(1) 대칭축을 x축·y축·직선 y=−x 로 바꾸기(축의 각만 0·π/2·3π/4 로 교체 · ★3 유지) (2) '두 동경이 일치'·'두 동경이 일직선'으로 바꾸면 차의 식이 되어 141-344 와 같은 골조(★3) (3) 해의 개수를 묻거나 범위를 매개변수로 두면 Mₐ 상승 ★4."
```

```yaml
- id: GN-ALG-140-340
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    보기 ㄱ~ㄷ 중 옳은 것 모두 고르기. ㄱ $132^\circ=\dfrac{11}{15}\pi$, ㄴ $\dfrac{13}{4}\pi$ 는 제1사분면의 각, ㄷ $150^\circ$·$\dfrac{29}{6}\pi$·$-\dfrac{7}{6}\pi$ 의 동경이 모두 일치.
  category: "보기별로 단위 변환 또는 2nπ+θ 환원 → 참거짓 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "호도법 변환·동경의 위치 참거짓 판별(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 보기가 각각 (ㄱ) 육십분법→호도법 변환, (ㄴ) 일반각 환원 후 사분면, (ㄷ) 세 각의 동경 일치로 이 단원의 기본 절차를 한 번씩 훑는다. 새 착안은 없고 ㄷ 의 음각 환원에서 2π 를 더하는 부호 처리만 주의하면 된다.
    통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ 단위 변환 검산 · ㄴ 13π/4=2π+5π/4 → 제3사분면 · ㄷ 세 각을 모두 5π/6 으로 환원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 각도를 바꿀 수 있음(ㄱ 은 180 과 약분되는 각, ㄴ 은 한 바퀴 넘는 각, ㄷ 은 양·음 각을 섞어 같은 동경). 제약: 참인 보기와 거짓인 보기가 섞여야 하고, 거짓 보기는 사분면이 한 칸만 어긋나게 만들어 눈대중으로 걸러지지 않게 한다."
    creative: "(1) 보기를 넷으로 늘려 138-333 처럼 ㄱㄴㄷㄹ 형으로(★2 유지) (2) 한 보기를 '1 라디안은 60°보다 작다' 같은 라디안의 크기 감각 문항으로 바꾸면 I-EQV 한 겹 추가 ★3 (3) 부채꼴 공식 참거짓을 한 보기로 섞으면 단원 전체 점검형(★3)."
```

```yaml
- id: GN-ALG-140-341
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    호의 길이가 $12$, 넓이가 $36$ 인 부채꼴의 반지름 $r$ 과 중심각 $\theta$ 에 대하여 $r+\theta$ 의 값.
  category: "S=½rl 로 r 먼저 확정 → l=rθ 로 θ → 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    넓이 공식을 S=½r²θ 가 아니라 S=½rl 로 골라 쓰면 θ 없이 r 이 바로 나오고, 그 뒤 l=rθ 로 θ 를 얻는 두 줄 문제다.
    통찰 없음·M_total 4 로 −1 후보지만 두 공식을 순서대로 골라 쓰는 역산이라 STEP 1 출발점 ★2 를 유지한다. [분류 이슈] −1 후보(★1/★2).
  tier: star_2
  mechanism_primary: "36=½·r·12 → r=6 → 12=6θ → θ=2 → r+θ=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l 과 S 를 바꿀 수 있음. 제약: r=2S/l 이 유리수여야 하고 θ=l/r 이 0<θ<2π 를 만족해야 한다(θ≥2π 가 되면 부채꼴이 아니다). 묻는 값을 rθ·r−θ·둘레로 바꿔도 같은 골조."
    creative: "(1) 넓이와 둘레를 주고 r·θ 를 묻기(연립 2차 · ★3) (2) θ 를 육십분법으로 답하게 하면 단위 변환 한 겹(★2) (3) r 과 θ 가 모두 정수인 부채꼴의 개수를 묻는 정수해 문항으로 바꾸면 I-MI 가 붙어 ★4."
```

```yaml
- id: GN-ALG-140-342
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    중심각 $50^\circ$·반지름 $6\,\mathrm{cm}$ 인 부채꼴과 중심각 $\theta$·반지름 $10\,\mathrm{cm}$ 인 부채꼴의 넓이가 같을 때 $\theta$ 의 값($0<\theta<2\pi$).
  category: "육십분법 각을 호도법으로 변환 → 두 넓이를 S=½r²θ 로 같게 놓기 → θ"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이가 같은 두 부채꼴 — 육십분법 변환 후 중심각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S=½r²θ 는 중심각이 호도법일 때만 성립하므로 50°를 5π/18 로 먼저 바꾸는 것이 유일한 관문이다(T-단위). 그 뒤는 5π=50θ 한 줄.
    통찰 없음이고 절차가 정해져 있어 STEP 1 출발점 ★2 유지. 범위 조건 0<θ<2π 는 답을 거르는 역할은 하지 않는다.
  tier: star_2
  mechanism_primary: "50°=5π/18 → ½·36·(5π/18)=5π → 5π=½·100·θ → θ=π/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반지름과 육십분법 각을 바꿀 수 있음. 제약: 첫 부채꼴의 각이 180 과 잘 약분돼 호도법 값이 간단해야 하고, r₁²θ₁=r₂²θ₂ 로 얻는 θ 가 0<θ<2π 안에 들어와야 한다."
    creative: "(1) 넓이가 아니라 호의 길이가 같다고 바꾸기(l=rθ · ★2) (2) 두 부채꼴의 넓이의 비를 주기(★3) (3) 한쪽 반지름을 미지수로 두고 넓이가 같을 조건을 묻는 역방향 문항(I-BW · ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-140-343
  page: 140
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\theta$ 가 제2사분면의 각일 때, 각 $\dfrac{\theta}{3}$ 의 동경과 각 $2\theta$ 의 동경이 모두 존재하는 사분면.
  category: "θ 의 일반각 부등식 → θ/3 은 n 을 3으로 나눈 나머지로 3분할 · 2θ 는 두 배 확대 → 두 결과의 공통 사분면"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "θ/3 의 범위는 n 을 3으로 나눈 나머지 0·1·2 에 따라 서로 다른 세 사분면(1·2·4)으로 갈라지고, 세 경우를 모두 따져야 공통부분을 말할 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "θ 가 특정 사분면일 때 θ/n · nθ 의 동경 위치"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2nπ+π/2<θ<2nπ+π 를 3으로 나눌 때 n 의 나머지에 따라 결과가 세 갈래로 갈리는 것이 이 유형의 전부다(I-MI d2). 2θ 쪽은 4nπ+π<2θ<4nπ+2π 로 제3·4사분면이 되어 공통은 제4사분면.
    STEP 2 출발점 ★3 + 통찰 1개(d2)·M_total 8 → ★3 유지. n 을 하나의 정수로만 두고 끝내는 것이 대표적 오답 경로다.
  tier: star_3
  mechanism_primary: "2nπ+π/2<θ<2nπ+π → θ/3 은 n mod 3 으로 제1·2·4사분면 · 2θ 는 제3·4사분면 → 공통 제4사분면"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "제$4$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/140-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 사분면(제1~4)과 나누는 수·곱하는 수(θ/2·θ/4·3θ)를 바꿀 수 있음. 제약: 나누는 수가 k 이면 경우가 k 갈래로 늘어나므로 k=2,3 이 적정이고, 두 결과의 공통 사분면이 정확히 하나 남도록 조합을 고른다."
    creative: "(1) θ/2 와 3θ 조합으로 바꾸기(경우 2갈래 · ★3) (2) 공통 사분면이 없음을 보이게 하기(★4 · 사후 기각이 붙어 I-VF) (3) θ/3 의 동경이 그릴 수 있는 영역을 단위원 위에 그리게 하면 141-347 골조와 합쳐져 ★4."
```

```yaml
- id: GN-ALG-141-344
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    각 $5\theta$ 의 동경을 $180^\circ$ 만큼 회전하였더니 각 $2\theta$ 의 동경과 일치할 때, $180^\circ<\theta<360^\circ$ 인 $\theta$ 의 크기.
  category: "회전 후 일치 ⟺ (5θ+180°)−2θ=360°n → θ 를 n 의 식으로 → 범위 안 정수 n 선택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'180° 회전해서 일치'를 두 각의 차가 360°의 배수라는 동치식 3θ=360°n−180° 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 동경의 일치 조건으로 θ 구하기(180° 회전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    동경이 일치한다는 말을 '각의 차가 360°의 정수배'로 옮기는 한 수가 관문이고(I-EQV d2), 회전각 180°를 어느 쪽 각에 더하는지만 맞추면 θ=120°n−60° 가 나온다.
    범위 180°<θ<360° 에서 n=3 만 남는다(n=2 는 경계 180°라 제외). STEP 2 출발점 ★3 + 통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "5θ+180°=2θ+360°n → θ=120°n−60° → 180°<θ<360° 에서 n=3 → 300°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$300^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/141-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 배수(5θ·2θ)와 회전각(90°·180°·270°), θ 의 범위를 바꿀 수 있음. 제약: 배수의 차로 나눈 뒤 범위 안 정수 n 이 정확히 하나 남아야 답이 하나이고, 경계값이 해가 되지 않도록 범위를 잡는다."
    creative: "(1) 회전 대신 'x축에 대칭'·'일직선 위에 있다'로 바꾸기(합/차 식만 교체 · ★3) (2) 조건을 만족하는 θ 의 개수를 묻기(★3) (3) 범위를 호도법으로 주고 답도 호도법으로 요구하면 140-339 와 한 유형으로 묶인다(★3)."
```

```yaml
- id: GN-ALG-141-345
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    반지름이 $3$ 인 두 원 $O$, $O'$ 이 두 점 $\pt{A}$, $\pt{B}$ 에서 만나고 $\angle\pt{AOB}=\dfrac{5}{6}\pi$ 일 때, 원 $O$ 의 외부와 원 $O'$ 의 내부의 공통부분의 넓이 $S_1$ 과 마름모 $\pt{AOBO'}$ 의 넓이 $S_2$ 에 대하여 $S_1-S_2$. 5지선다.
  category: "공통부분(렌즈)=2×(부채꼴−삼각형) → S₁=원 O' −렌즈 → 삼각형 항이 S₂ 와 상쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 원의 반지름이 같아 AOBO' 가 마름모이고 ∠AO'B=∠AOB=5π/6, 렌즈가 합동인 두 활꼴의 합이 되어 한 번에 2×(부채꼴−삼각형)으로 쓸 수 있음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S₁=(원 O' 넓이)−(렌즈) 로 영역을 분해하면 삼각형 AOB 두 개가 마름모 S₂ 와 정확히 상쇄되어 S₂ 를 구하지 않고 차를 얻음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 원의 공통부분·활꼴 넓이 — 부채꼴 넓이 공식 응용"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    렌즈 넓이를 2×(½·9·5π/6)−S₂=15π/2−S₂ 로 쓰면 S₁=9π−(15π/2−S₂)=3π/2+S₂ 가 되어 마름모 넓이를 끝내 구하지 않고 S₁−S₂=3π/2 로 끝난다. 삼각비를 배우기 전 단원이라 이 상쇄가 사실상 유일한 길이다.
    영역 분해(I-EQV)와 두 원이 합동이라는 대칭 활용(I-SYM) 두 통찰. STEP 2 ★3 출발 + 교육청 기출 + 통찰 2개 → ★4. ★4 저노출 유형 요건(SYM) 충족.
  tier: star_4
  mechanism_primary: "렌즈=2(부채꼴 15π/4 − 삼각형) → S₁=9π−렌즈=3π/2+S₂ → S₁−S₂=3π/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-141-345.png"
  latex: latex-bank/gn-alg/items/141-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 3 과 중심각 5π/6 을 바꿀 수 있음. 제약: 중심각이 π/2·2π/3·5π/6 처럼 부채꼴 넓이가 π 의 유리수배로 떨어져야 하고, 두 원이 실제로 두 점에서 만나도록 중심각이 0<∠AOB<π 여야 한다. 그림 라벨 O·O'·A·B 는 고정."
    creative: "(1) S₁+S₂ 나 두 원의 합집합 넓이를 묻기(상쇄가 사라져 마름모 넓이를 직접 구해야 하므로 삼각비가 필요 → 단원 밖) (2) 반지름이 다른 두 원으로 바꾸면 대칭이 깨져 부채꼴 두 개를 따로 계산 ★5 급 (3) 원 O 의 외부와 O' 의 외부의 공통부분처럼 영역 표현만 바꿔 독해 부담을 올리기(★4 유지)."
```

```yaml
- id: GN-ALG-141-346
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    중심각이 $\dfrac{\pi}{3}$, 호의 길이가 $2\pi$ 인 부채꼴에 내접하는 원의 넓이.
  category: "l=rθ 로 반지름 확정 → 내접원 중심은 각의 이등분선 위, 중심거리=2×(내접원 반지름) → 거리+반지름=r"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'내접한다'는 조건을 그림 위의 두 길이 관계(이등분선 위 중심까지의 거리 = 2x · 그 거리 + x = 부채꼴의 반지름)로 옮겨야 식이 생김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부채꼴에 내접하는 원의 반지름(각의 이등분선·접선 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞부분 l=rθ 로 r=6 을 얻는 것은 절차지만, 내접원의 중심이 중심각의 이등분선 위에 있고 두 변까지의 거리가 반지름 x 여서 중심까지의 거리가 2x 라는 그림 관계를 스스로 세워야 한다(I-RT d2). 그 뒤 2x+x=6 한 줄.
    STEP 2 출발점 ★3 + 통찰 1개(d2)·M_total 6 → ★3 유지. 문제에 그림이 없어 스스로 그려야 하는 것이 실제 난이도의 절반이다.
  tier: star_3
  mechanism_primary: "2π=r·π/3 → r=6 → 내접원 중심까지 거리 2x(∠π/6) → 2x+x=6 → x=2 → 넓이 4π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/141-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심각과 호의 길이를 바꿀 수 있음. 제약: 반각이 π/6 이어야 중심거리가 2x 로 깔끔하므로 중심각 π/3 이 표준이고, 다른 각이면 삼각비가 필요해 단원을 벗어난다. 호의 길이는 r 이 정수가 되도록 θ 의 배수로 잡는다."
    creative: "(1) 내접원의 둘레·내접원과 부채꼴의 넓이의 비를 묻기(★3 유지) (2) 반원에 내접하는 원처럼 중심각을 π 로 바꾸기(관계가 x+x=r 로 단순해져 ★2) (3) 내접원을 뺀 나머지 영역의 넓이를 묻기(★3) (4) 부채꼴에 내접하는 정사각형으로 바꾸면 도구가 달라져 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-141-347
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    제1사분면의 각 $\theta$ 에 대하여 각 $\dfrac{\theta}{2}$ 의 동경이 존재하는 범위를 단위원의 내부에 나타낼 때 그 영역의 넓이(경계선 제외).
  category: "θ 의 일반각 부등식 → θ/2 는 n 의 홀짝으로 두 영역 → 부채꼴 두 개의 넓이의 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2nπ<θ<2nπ+π/2 를 반으로 줄이면 nπ<θ/2<nπ+π/4 이고 n 의 홀짝에 따라 제1사분면 영역과 제3사분면 영역 두 갈래가 모두 답에 들어감"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'동경이 존재하는 범위'라는 각의 부등식을 단위원 내부의 두 부채꼴 영역으로 옮겨 넓이 계산으로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "θ 의 사분면 조건 → θ/2 동경의 존재 범위와 영역의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    반각을 다루면 주기가 π 로 줄어 영역이 원점 대칭인 두 조각(0~π/4 와 π~5π/4)으로 갈라지는 것이 핵심이고, 한 조각만 세면 답이 절반이 된다(I-MI d2). 그 영역을 단위원 안 부채꼴로 옮겨 넓이로 환산하는 것이 둘째 통찰(I-RT d2).
    넓이는 2×½·1²·(π/4). 실력 UP 출발점 ★4 + 통찰 2개 → ★4 유지(계산 부담이 거의 없어 +1 하지 않음). ★4 저노출 유형 요건(RT) 충족.
  tier: star_4
  mechanism_primary: "2nπ<θ<2nπ+π/2 → nπ<θ/2<nπ+π/4 → n 홀짝으로 부채꼴 두 개 → 2×½·1²·(π/4)=π/4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/141-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 사분면과 나누는 수(θ/2·θ/3·θ/4), 원의 반지름을 바꿀 수 있음. 제약: 나누는 수가 k 이면 영역이 k 조각으로 늘고 각 조각의 중심각은 (π/2)/k 이며, 반지름 r 이면 넓이가 r² 배가 된다. 경계 제외 문구는 넓이에 영향을 주지 않으므로 그대로 둔다."
    creative: "(1) 영역을 그림으로 그리게 하는 서술형(★4 유지) (2) 2θ 처럼 배각으로 바꾸면 영역이 반원 전체가 되어 ★3 (3) 두 조건(θ/2 와 θ/3 이 동시에 존재하는 범위)의 공통 영역 넓이를 묻기(★5 급 · 분기 결과 일부가 기각되어 I-VF 추가) (4) 넓이가 아니라 호의 길이의 합을 묻기(★3)."
```

```yaml
- id: GN-ALG-141-348
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    둘레의 길이가 $24\pi$ 로 일정한 부채꼴 중 넓이가 최대인 것을 옆면으로 하여 만든 원뿔의 부피.
  category: "둘레 조건으로 l 소거 → S 의 최대에서 r·l 확정 → 전개도 대응(모선=r, 밑면 둘레=l) → 피타고라스로 높이 → 부피"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘레 2r+l=24π 를 l=24π−2r 로 풀어 S=½rl 을 r 만의 이차함수 r(12π−r) 로 바꿔 꼭짓점에서 최대를 잡음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 부채꼴의 반지름·호의 길이를 입체 원뿔의 모선·밑면 둘레로 옮겨 밑면 반지름 6 을 얻음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "둘레 고정 부채꼴의 최대 넓이 + 원뿔 전개도(모선·밑면 둘레) 응용"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞 절반은 139-e7·139-337 과 같은 '둘레 고정 부채꼴의 최대 넓이'(r=6π, l=12π)이고, 뒤 절반이 139-336 의 원뿔 전개도다. 두 골조를 이어 붙인 뒤 2πρ=12π 로 밑면 반지름 6, 높이 √(36π²−36)=6√(π²−1), 부피 ⅓π·36·h 로 끝난다.
    π 가 상수로 섞인 무리식을 끝까지 정리하는 계산 부담이 있고 호의 길이와 밑면 둘레를 헷갈리는 함정(T-단위)이 있다. 실력 UP ★4 출발 + 통찰 2개 → ★4(★5 는 통찰 3개 이상 + SC/VF/SYM/XU 요건 미충족).
  tier: star_4
  mechanism_primary: "2r+l=24π → S=r(12π−r) 최대 r=6π, l=12π → 모선 6π·밑면반지름 6 → h=6√(π²−1) → V=72π√(π²−1)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$72\pi\sqrt{\pi^2-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/141-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레를 4kπ 꼴로 두면 r=kπ·l=2kπ·밑면반지름 k 로 모두 깔끔하게 떨어진다. 제약: 밑면 반지름 k 가 모선 kπ 보다 작아야 원뿔이 만들어지고(항상 성립), 높이에 √(π²−1) 이 남는 것을 감수해야 한다. 둘레를 4의 배수가 아닌 값으로 두면 답이 지저분해진다."
    creative: "(1) 부피가 아니라 겉넓이·옆면 넓이를 묻기(최대 넓이 단계에서 끝나 ★3) (2) 최대 넓이 대신 중심각이 주어진 부채꼴로 원뿔을 만들게 하기(139-336 골조 · ★2) (3) 만들어진 원뿔에 내접하는 구의 반지름까지 묻기(도구가 한 겹 더 늘어 ★5) (4) 둘레를 미지수 a 로 두고 부피를 a 의 식으로 나타내기(Mₐ 상승 ★5)."
```

### 특강

```yaml
- id: GN-ALG-142-349
  page: 142
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직각삼각형 $\pt{ABC}$($\angle\pt{C}=90^\circ$)에서 빗변 위의 점 $\pt{D}$ 가 $\pt{BC}$ 위에 있고 $\angle\pt{B}=22.5^\circ$, $\angle\pt{ADC}=45^\circ$ 일 때 $\tan 22.5^\circ$ 의 값.
  category: "외각 성질로 이등변삼각형 발견 → AC=1 로 두고 변의 길이를 차례로 결정 → 분모 유리화"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠ADC 가 삼각형 ABD 의 외각이므로 ∠BAD=45°−22.5°=22.5°=∠B 이고, 이를 'AD=BD' 라는 길이 조건으로 바꿔야 변의 길이가 연결됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "반각 22.5°의 삼각비 — 이등변삼각형 분할(외각 성질)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AC=1 로 잡으면 ∠ADC=45° 에서 DC=1, AD=√2 이고, 외각으로 얻은 ∠BAD=∠B 에서 BD=AD=√2 이므로 BC=1+√2, tan22.5°=AC/BC 를 유리화해 끝난다.
    각을 보고 이등변을 끌어내는 한 수(I-EQV d2)가 전부이고 나머지는 절차. 특강 구역 ★2~3 출발 + 통찰 1개 → ★3.
    [분류 이슈] 내용이 호도법이 아니라 반각의 삼각비여서 이 단원의 type_hint 계열과 떨어져 있다.
  tier: star_3
  mechanism_primary: "∠ADC 외각 → ∠BAD=∠B=22.5° → AD=BD → AC=1, DC=1, AD=BD=√2 → tan22.5°=1/(1+√2)=√2−1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{2}-1$'
  answer_source: "답지"
  figure: "crop:fig-142-349.png"
  latex: latex-bank/gn-alg/items/142-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 22.5°/45° 대신 15°/30°(정삼각형 절반 붙이기)나 67.5°/135° 로 바꿀 수 있음. 제약: 큰 각이 작은 각의 정확히 두 배여야 외각에서 이등변이 나오고, AC=1 로 두었을 때 나머지 변이 근호 한 겹으로 정리돼야 한다. 그림 라벨 A·B·C·D 는 고정."
    creative: "(1) tan 대신 sin 22.5°·cos 22.5° 를 묻기(빗변 AB 를 피타고라스로 더 구해야 해 ★4) (2) tan 67.5° 를 묻기(여각 관계 한 겹 추가 · ★3) (3) BD:DC 의 비나 삼각형 ABD 의 넓이를 묻기(★3) (4) 22.5°를 호도법 π/8 로 제시해 이 단원과 연결하기(★3 유지)."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 4 · ★2 11 · ★3 7 · ★4 3 · ★5 0
- 통찰형 11 · 절차형 14 · premium 0
- 구역별: 개념원리 익히기 4문(모두 ★1) · 필수·발전 예제 9문(★2 7 · ★3 2) · 연습문제 STEP 1 5문(★2 4 · ★3 1) · STEP 2 4문(★3 3 · ★4 1) · 실력 UP 2문(★4 2) · 특강 1문(★3)
- 통찰 유형 분포: I-EQV 5 · I-RT 4 · I-MI 2 · I-SYM 1 (I-XU·I-BW·I-PD·I-CON·I-SC·I-VF 0) — 단원 성격상 조건의 동치 변환과 기하↔대수 전환에 집중돼 있다
- type_hint 상위: 「부채꼴의 호의 길이와 넓이」 4 · 「호도법에서 일반각 2nπ+θ 로 나타내기」 3 · 「육십분법과 호도법의 변환 참거짓 판별」 2 · 「부채꼴의 넓이의 최대·최소」 2 · 나머지는 1문씩
- 대상층: 하위권·중하위권 13 · 중위권 5 · 중상위권 3 · 상위권 4
- 그림: 2문(`crop:fig-141-345.png` · `crop:fig-142-349.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-139-e6 | 통찰 없음·M_total 5 로 −1 후보이나 역산 한 단계가 있는 필수 예제라 ★2 유지 | ★1 / ★2 |
| GN-ALG-139-337 | 직전 필수 예제 139-e7 과 숫자만 다른 같은 골조 — 반복 학습이라 체감은 ★2 쪽 | ★2 / ★3 |
| GN-ALG-140-341 | 통찰 없음·M_total 4 로 −1 후보이나 두 공식을 골라 쓰는 역산이라 STEP 1 출발점 ★2 유지 | ★1 / ★2 |
| GN-ALG-142-349 | 특강이지만 내용이 호도법이 아니라 반각(22.5°)의 삼각비 — 이 단원의 type_hint 계열에서 고립 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「육십분법↔호도법 변환」(단순 변환 · ★1~2) ② 「일반각 2nπ+θ 로 나타내기」(★1~2) ③ 「동경의 위치·사분면 판정」(140-338·140-340 ㄴ·140-343) ④ 「두 동경의 위치 관계로 θ 구하기」(140-339 대칭 · 141-344 회전·일치 — **합의 식이냐 차의 식이냐만 다르므로 한 유형으로 통합 가능**, 축·회전각은 변형 파라미터로) ⑤ 「부채꼴의 호의 길이와 넓이」(정방향·역산 통합 · ★1~2) ⑥ 「부채꼴의 넓이의 최대·최소」(둘레 고정 · ★3) ⑦ 「부채꼴·원뿔 전개도 응용」(139-336·141-348 · 후자는 ⑥+⑦ 결합형) ⑧ 「부채꼴·원의 영역 넓이 계산」(141-345 렌즈 · 141-346 내접원 · 141-347 영역 — 도구는 같고 영역을 읽는 방식이 다르므로 하위 유형 3개를 가진 한 유형이 적절).
- **통합해도 될 유형**: 「육십분법을 호도법으로」와 「호도법을 육십분법으로」는 방향만 다르므로 한 유형의 양방향 변형으로 둔다. 「변환 참거짓 판별(보기형)」도 별도 유형이 아니라 위 ①③의 출제 형식(보기형)으로 처리하는 편이 낫다.
- **단원 밖**: 142-349(반각의 삼각비)는 호도법 카탈로그가 아니라 삼각비·삼각함수 쪽 카탈로그에 배치해야 한다.
