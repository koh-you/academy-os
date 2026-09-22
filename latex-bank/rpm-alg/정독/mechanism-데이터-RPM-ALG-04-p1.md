---
name: mechanism-데이터-RPM-ALG-04-p1
description: RPM 대수 04 로그함수(1/3 · 교과서 04-1~04-4 + 유형 01~05) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 04 로그함수
  unit_code: ALG-04
  part: "1/3"
  extract_range: "47~50쪽 · 0337~0375"
  total_problems: 39
  unit_total: 120
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 04 로그함수 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 04 로그함수 단원의 첫 범위(47~50쪽 · 0337~0375 · 39문)를 다룬다. 47쪽은 「교과서 04-1 로그함수의 뜻과 그래프」「04-2 최대·최소」「04-3 방정식」「04-4 부등식」 구역의 드릴 19문(역함수·그래프 이동·대소 비교·최대최소·로그방정식·로그부등식)이고, 48~50쪽은 「유형 01 로그함수의 함숫값」부터 「유형 05 로그함수의 그래프의 활용」까지 유형별 기본 문제 20문이다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·서술형·기출)로 나타난다. 이 범위의 출발점은 교과서 구역 ★1, 유형 구역은 대표문제(난이도 없음) ★2 · 하/중하 ★1 · 중 ★2 · 상중 ★3 이며, 통찰 0·M_total ≤ 5 이면 −1, 통찰 2개 이상 또는 depth 3 이면 +1 을 적용했다(★1 아래로는 내리지 않음). 그 결과 벤더 「중」·「대표문제」 가운데 3단계 이하의 짧은 절차 문항 넷(0358·0363·0366·0371)과 「상중」 절차형 하나(0375)가 한 단계 내려갔고, 각 rationale 에 조정 근거를 적었다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 통찰 판정 기준: 그림·도형 조건을 대수식으로 옮기는 단계가 좌표 대입 이상의 착안을 요구할 때만 I-RT 로 인정(중점 → 기하평균 · 평행이동 등적변형 → 직사각형/평행사변형 · y=x 대칭으로 좌표 옮기기)하고, 그래프 위 점의 좌표 대입·점근선 읽기·절편 대입 같은 직접 읽기는 절차로 본다. 대소 비교에서 「주어진 범위를 한 변수의 범위로 옮겨 여러 수를 그 변수로 통일」하는 단계는 I-EQV 로 인정하고, 로그 성질로 같은 밑에 맞추는 계산형 통일은 절차로 본다. `insight_type` 은 insights 가 하나라도 있으면 통찰형, `depth_score` 는 effective_depth 의 합, `target_cohort` 는 스키마 §3.3 알고리즘의 fit 가운데 ★ 주력대가 맞는 층(없으면 가장 빡빡한 fit)이다. 교과서 구역의 공통 발문은 각 블록 `summary` 첫머리에 요약했고, 발문 그룹이 바뀌는 지점에 굵은 안내 줄을 두었다. 그림 문항 8건(0362·0365·0370~0375)은 크롭 이미지를 보고 판정했다.

## 문항 데이터

### 교과서 04-1 로그함수의 뜻과 그래프

**공통 발문 (0337~0338)**: 다음 함수의 역함수를 구하시오.

```yaml
- id: RPM-ALG-0337
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    역함수 구하기: y=10^x.
  category: "x↔y 교환 → 로그의 정의로 y 에 대해 풀기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 역함수(로그함수) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=10^y 로 바꿔 로그의 정의를 쓰면 y=log x 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=10^x → x=10^y → y=log x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\log x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 2·3·1/2 등으로 바꿀 수 있음. 제약: 밑은 양수이고 1 이 아님. 역함수의 정의역(x>0)을 답에 붙일지 결정."
    creative: "(1) y=a^x+k 꼴로 주어 y=log_a(x-k) 로 이동이 섞이게(★1) (2) 역함수의 정의역·치역까지 묻기(★1) (3) 역함수의 그래프가 지나는 점을 묻기(★2·그래프 이동과 결합)."
```

```yaml
- id: RPM-ALG-0338
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    역함수 구하기: y=3·2^{x-1}.
  category: "x↔y 교환 → 2^{y-1} 분리 → 로그로 풀어 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 역함수(로그함수) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=3·2^{y-1} 에서 2^{y-1}=x/3, y-1=log_2(x/3). 계수 3 을 진수 쪽으로 넘기는 정리 한 번이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=3·2^{y-1} → 2^{y-1}=x/3 → y=log_2(x/3)+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\log_2 \dfrac{x}{3}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·밑 2·지수의 이동량 1 을 바꿀 수 있음. 제약: 답이 log_a(x/c)+d 꼴로 정리되게 c>0."
    creative: "(1) 답을 log_2 x-log_2 3+1 처럼 여러 꼴 중 보기로 고르게(★1) (2) 역함수가 지나는 점 (3,1) 을 이용해 계수를 결정(★2) (3) 지수함수의 평행이동으로 서술하고 역함수의 이동량 관계(x·y 이동 교환)를 묻기(★2·I-RT d1)."
```

```yaml
- id: RPM-ALG-0339
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=log_5 x 의 그래프를 이용해 ⑴ y=log_5(x-2) ⑵ y=log_5(-x) ⑶ y=-log_5 x 의 그래프를 그리고 정의역과 점근선의 방정식 구하기.
  category: "기본 그래프 → 평행이동 / y축 대칭 / x축 대칭 → 정의역·점근선 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동·대칭이동(정의역·점근선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ x 방향 +2 평행이동 → 정의역 x>2, 점근선 x=2. ⑵ y축 대칭 → x<0, x=0. ⑶ x축 대칭 → x>0, x=0. 소문항마다 이동 종류·진수 조건·점근선 세 가지를 읽는 드릴. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "이동 종류 파악(x 방향 +2 / y축 대칭 / x축 대칭) → 진수>0 → 정의역 → 점근선은 이동된 경계"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ((1) 정의역: $\{x \mid x>2\}$, 점근선: $x=2$ (2) 정의역: $\{x \mid x<0\}$, 점근선: $x=0$ (3) 정의역: $\{x \mid x>0\}$, 점근선: $x=0$)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 2·밑 5 를 바꿀 수 있음. 제약: 밑>0·≠1. 그림을 그리는 문항이라 채점은 정의역·점근선으로."
    creative: "(1) 세 이동을 합성한 y=-log_5(-x+2) 의 정의역·점근선 묻기(★2) (2) 그래프가 지나는 점 하나를 추가로 묻기(★1) (3) 그림을 주고 어떤 이동인지 역으로 고르기(★2·I-RT d1)."
```

**공통 발문 (0340~0342)**: 로그함수를 이용하여 다음 두 수의 대소를 비교하시오.

```yaml
- id: RPM-ALG-0340
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그함수를 이용한 대소 비교: log_2 10 과 2log_2 3.
  category: "계수 → 진수의 거듭제곱 → 같은 밑 로그로 통일 → 밑>1 증가로 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 밑 로그로 통일한 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2log_2 3=log_2 9 로 바꾸면 진수 10>9 이고 밑 2>1 이므로 그대로. 정리 한 번·비교 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2log_2 3=log_2 9 → 10>9 → log_2 10>log_2 9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\log_2 10>2\log_2 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 10·3 과 계수 2 를 바꿀 수 있음. 제약: 통일 후 두 진수가 가깝되 같지 않게(예: 10 vs 9)."
    creative: "(1) 밑을 1/2 로 바꿔 부호 반전을 추가(★1·T-부호) (2) 세 수로 늘려 순서 나열(★2) (3) 진수에 근호나 분수를 섞어 계수 정리 두 번(★2)."
```

```yaml
- id: RPM-ALG-0341
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그함수를 이용한 대소 비교: (1/3)log_{1/2} 27 과 (1/2)log_{1/2} 7.
  category: "계수를 진수의 지수로 → log_{1/2} 3 vs log_{1/2} √7 → 밑<1 감소로 부등호 반전"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 밑 로그로 통일한 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/3)log_{1/2} 27=log_{1/2} 3, (1/2)log_{1/2} 7=log_{1/2} √7. 3>√7 인데 밑 1/2<1 이라 부등호가 반전되어 앞의 수가 작다. 정리 둘·반전 비교 하나. 밑<1 의 부호 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_{1/2} 3 vs log_{1/2} √7 → 3>√7 → 밑<1 이므로 부등호 반전"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}\log_{\frac{1}{2}} 27<\dfrac{1}{2}\log_{\frac{1}{2}} 7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "27·7 과 계수 1/3·1/2 를 바꿀 수 있음. 제약: 정리 후 진수 비교가 제곱해서 정수로 결정되게(3²=9 vs 7)."
    creative: "(1) 밑을 2 로 바꿔 반전 없이(★1) (2) 두 수 중 하나를 log_{1/4} 로 주어 밑 변환 추가(★2) (3) 0 이나 1 같은 상수를 끼워 세 수 비교(★2)."
```

```yaml
- id: RPM-ALG-0342
  page: 47
  vendor_label: "교과서 04-1 로그함수의 뜻과 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그함수를 이용한 대소 비교: log_3 2 와 log_9 16.
  category: "밑 변환 log_9 16=log_3 4 → 같은 밑 → 진수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑 변환으로 통일한 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_9 16=log_{3²} 4²=log_3 4 로 밑을 3 에 맞추면 2<4. 밑 변환 한 번·비교 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_9 16=log_3 4 → 2<4 → log_3 2<log_3 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\log_3 2<\log_9 16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 9→27, 진수 16→64 처럼 밑의 거듭제곱 관계를 유지하며 바꿀 수 있음. 제약: 변환 후 진수가 정수."
    creative: "(1) 밑을 1/9 로 두어 부호 반전 결합(★1~2) (2) log_2 3 vs log_3 2 처럼 밑·진수가 뒤바뀐 쌍은 1 을 기준으로 비교(★2·I-EQV d1) (3) 세 수로 확장(★2)."
```

### 교과서 04-2 로그함수의 최대·최소

**공통 발문 (0343~0345)**: 다음 함수의 최댓값과 최솟값을 구하시오.

```yaml
- id: RPM-ALG-0343
  page: 47
  vendor_label: "교과서 04-2 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    최대·최소: y=log_2 x (1≤x≤64).
  category: "밑>1 증가 → 구간 양 끝 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에서 로그함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 2>1 이라 증가함수. x=64 에서 최대 6, x=1 에서 최소 0. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "증가함수 → x=64 에서 최대 6, x=1 에서 최소 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $6$, 최솟값: $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 양 끝을 2 의 거듭제곱(1/4~128)으로. 제약: 끝값이 정수 로그가 되게."
    creative: "(1) 밑을 1/2 로 바꿔 최대·최소 위치 반전(★1·T-부호) (2) 진수에 x+1 등 이동 넣기(★1) (3) 구간을 매개변수 a≤x≤2a 로 두고 최댓값-최솟값 을 묻기(★2·Mₐ 상승)."
```

```yaml
- id: RPM-ALG-0344
  page: 47
  vendor_label: "교과서 04-2 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    최대·최소: y=log_{1/2}(x+1) (-1/2≤x≤7).
  category: "밑<1 감소 → 왼쪽 끝에서 최대·오른쪽 끝에서 최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에서 로그함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/2<1 이라 감소. x=-1/2 에서 log_{1/2}(1/2)=1 최대, x=7 에서 log_{1/2} 8=-3 최소. 감소 방향을 놓치는 부호 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "감소함수 → x=-1/2 에서 log_{1/2}(1/2)=1 최대, x=7 에서 log_{1/2} 8=-3 최소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $1$, 최솟값: $-3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝을 x+1 이 1/2 의 거듭제곱(1/4, 16 등)이 되게 조정. 제약: 진수>0 이 구간 전체에서 성립."
    creative: "(1) 앞에 부호를 붙여 -log_{1/2} 로 바꾸면 증가로 되돌아옴(★1) (2) 최댓값과 최솟값의 합을 묻기(★1) (3) 구간 한쪽 끝을 미정 a 로 주고 최솟값 조건으로 a 결정(★2·Mₐ 2)."
```

```yaml
- id: RPM-ALG-0345
  page: 47
  vendor_label: "교과서 04-2 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    최대·최소: y=-log_5(x-2)+3 (7≤x≤127).
  category: "부호·이동 파악 → 감소함수 → 구간 양 끝 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에서 로그함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x-2 가 5~125 를 움직이고 앞의 음의 부호 때문에 감소. x=7 에서 -1+3=2 최대, x=127 에서 -3+3=0 최소. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x-2∈[5,125] → -log_5 는 감소 → x=7 에서 -1+3=2 최대, x=127 에서 -3+3=0 최소"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $2$, 최솟값: $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 2·3 과 구간 끝(x-2 가 5 의 거듭제곱)을 바꿀 수 있음. 제약: 끝값이 정수 로그."
    creative: "(1) 앞의 부호를 없애 증가로(★1) (2) 최댓값이 주어질 때 상수 3 을 결정(★2) (3) 구간 길이만 주고 최댓값-최솟값 을 묻기(★2)."
```

### 교과서 04-3 로그함수의 활용; 방정식

**공통 발문 (0346~0349)**: 다음 방정식을 푸시오.

```yaml
- id: RPM-ALG-0346
  page: 47
  vendor_label: "교과서 04-3 로그함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그방정식 풀기: log_{1/3}(x+1)=-2.
  category: "로그의 정의 → 진수=밑의 거듭제곱 → 진수 조건 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(로그의 정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의로 x+1=(1/3)^{-2}=9, x=8. 진수 조건 x>-1 만족. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x+1=(1/3)^{-2}=9 → x=8 (x+1>0 확인)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/3·우변 -2·이동 +1 을 바꿀 수 있음. 제약: 해가 진수 조건을 만족하는 정수가 되게."
    creative: "(1) 우변을 밑이 다른 로그값으로 주기(★1~2) (2) 진수를 이차식으로 두어 진수 조건에 걸려 기각되는 해가 나오게(★2·T-범위) (3) 밑에 미지수를 두기(0347 골조)."
```

```yaml
- id: RPM-ALG-0347
  page: 47
  vendor_label: "교과서 04-3 로그함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그방정식 풀기: log_{x+1} 9=2.
  category: "로그의 정의 → (x+1)²=9 → 밑 조건(>0, ≠1)으로 한 해 기각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(밑에 미지수 · 밑 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의로 (x+1)²=9, x+1=±3. x=-4 는 밑>0 위배로 기각하고 x=2. 밑 조건에 의한 기각은 로그방정식의 표준 절차라 VF 로 세지 않음(T-범위 함정 하나). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x+1)²=9 → x+1=±3 → 밑 조건으로 x+1=3 → x=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "9→16·25, 우변 2→3 등. 제약: 짝수 지수로 두어 밑 조건으로 한 해가 기각되는 구조 유지."
    creative: "(1) 밑을 x-1 로 바꿔 기각 해가 밑=1 에 걸리게(★1~2·T-범위) (2) 우변을 홀수로 하면 기각 없음(★1) (3) 밑과 진수 모두 x 를 포함(log_x (x+6)=2 → 이차·기각)(★2)."
```

```yaml
- id: RPM-ALG-0348
  page: 47
  vendor_label: "교과서 04-3 로그함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그방정식 풀기: log_2(x-1)=log_2(2x-3).
  category: "밑 같음 → 진수 비교 → 진수 조건 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(진수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 같으므로 x-1=2x-3, x=2. 두 진수 모두 1>0 이라 유효. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x-1=2x-3 → x=2 → 두 진수 1>0 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 두 일차식을 바꿀 수 있음. 제약: 해에서 두 진수가 양수."
    creative: "(1) 한쪽 진수를 이차식으로 두어 두 해 중 하나가 기각(★2·T-범위) (2) 밑이 다른 두 로그(log_2 · log_4)로 주어 밑 통일 먼저(★2) (3) 우변에 상수를 더해 log_2 A=log_2 B+1 꼴(★2)."
```

```yaml
- id: RPM-ALG-0349
  page: 47
  vendor_label: "교과서 04-3 로그함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그방정식 풀기: log x+log(x-3)=1.
  category: "로그 합 → 진수 곱 → 이차방정식 → 진수 조건으로 기각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(로그 합 → 이차방정식 · 진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합쳐서 x(x-3)=10, x²-3x-10=0 → x=5 또는 -2. 진수 조건 x>3 으로 x=5. 인수분해는 표준 계산(Mₖ 1)·기각은 표준 절차. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x(x-3)=10 → x=5 또는 -2 → x>3 이므로 x=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동 3·우변 1 을 바꿔 x(x-c)=10^k 가 정수로 인수분해되게. 제약: 한 해가 진수 조건으로 기각되는 구조."
    creative: "(1) 차로 바꿔 log x-log(x-3)=1 (분수 방정식·기각 없음)(★1) (2) 두 해가 모두 살아남는 구조로 바꿔 두 근의 합·곱 묻기(★2·근과 계수) (3) 밑을 3, 우변을 2 로(★1)."
```

```yaml
- id: RPM-ALG-0350
  page: 47
  vendor_label: "교과서 04-3 로그함수의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶: (log_3 x)²-4log_3 x+3=0 을 log_3 x=t 로 치환한 방정식 → t 의 해 → 원래 방정식의 해.
  category: "치환 → 이차방정식 → 역치환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식(log_a x 치환 · 이차형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t²-4t+3=0 → t=1, 3 → x=3, 27. 치환을 소문항이 안내하므로 절차 3단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t²-4t+3=0 → t=1, 3 → x=3^t=3, 27"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $t^2-4t+3=0$ (2) $t=1$ 또는 $t=3$ (3) $x=3$ 또는 $x=27$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수를 바꿔 t 가 정수 두 개(예: t²-5t+6)가 되게. 제약: 역치환 결과 3^t 가 정수."
    creative: "(1) 치환 안내 없이 한 문항으로(★2) (2) 두 근의 곱을 묻기 → log_3(x₁x₂)=t₁+t₂ 로 근과 계수(★2·I-EQV d1) (3) log_3 x · log_3(x/9) 처럼 곱 형태로 주어 전개가 먼저 필요하게(★2)."
```

### 교과서 04-4 로그함수의 활용; 부등식

**공통 발문 (0351~0354)**: 다음 부등식을 푸시오.

```yaml
- id: RPM-ALG-0351
  page: 47
  vendor_label: "교과서 04-4 로그함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그부등식 풀기: log_2(x+4)<3.
  category: "진수 조건 → 밑>1 그대로 → x+4<8 → 교집합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(로그의 정의 · 진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x+4>0 과 x+4<2³ 의 교집합 -4<x<4. 진수 조건이 하한을 만드는 T-범위 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x+4>0 ∧ x+4<2³ → -4<x<4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4<x<4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동 4·우변 3·밑 2 를 바꿀 수 있음. 제약: 진수 조건이 실제로 하한을 만들고 답이 열린 구간으로 정리되게."
    creative: "(1) 밑을 1/2 로 두어 반전(0352 골조) (2) 부등호를 ≥ 로 바꿔 경계 포함(★1·T-경계) (3) 정수 x 의 개수를 묻기(★2·I-RT 부등식→개수)."
```

```yaml
- id: RPM-ALG-0352
  page: 47
  vendor_label: "교과서 04-4 로그함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그부등식 풀기: log_{1/3}(x-1)>2.
  category: "진수 조건 → 밑<1 반전 → x-1<1/9 → 교집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(밑<1 부호 반전 · 진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 1/3<1 이므로 x-1<(1/3)²=1/9 로 반전, 진수 조건 x>1 과 교집합 1<x<10/9. T-부호(반전)·T-범위(진수 조건) 함정 둘로 Mₜ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x-1>0 ∧ x-1<(1/3)² → 1<x<10/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1<x<\dfrac{10}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 1/3·우변 2·이동 1 을 바꿀 수 있음. 제약: 우변이 양수면 구간이 좁아 답이 분수가 됨을 허용."
    creative: "(1) 우변을 음수로 두어 구간이 넓어지게(★1) (2) 양변에 로그가 있는 0353 골조로(★1) (3) 해에 속하는 정수의 개수 묻기(★2)."
```

```yaml
- id: RPM-ALG-0353
  page: 47
  vendor_label: "교과서 04-4 로그함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그부등식 풀기: log_{1/2}(2x-1)≥log_{1/2}(3x+1).
  category: "진수 조건 둘 → 밑<1 반전 → 일차부등식 → 교집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(양변 로그 · 밑<1 반전 · 진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑<1 이라 2x-1≤3x+1 → x≥-2 인데 진수 조건 2x-1>0 (x>1/2) 이 더 세서 답은 진수 조건에서 결정된다. 반전(T-부호)과 진수 조건(T-범위) 함정 둘로 Mₜ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2x-1>0, 3x+1>0, 2x-1≤3x+1 → x>1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x>\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차 진수를 바꿔 진수 조건이 답을 결정하는 구조를 유지하거나, 반대로 부등식 쪽이 결정하게 할 수 있음."
    creative: "(1) 밑을 2 로(반전 없음) 바꾸면 답이 부등식 쪽에서 결정(★1) (2) 한 진수를 이차식으로(★2) (3) 경계 포함 여부(≥ vs >)만 바꿔 답의 구간 형태 비교(★1·T-경계)."
```

```yaml
- id: RPM-ALG-0354
  page: 47
  vendor_label: "교과서 04-4 로그함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    로그부등식 풀기: log x+log(7-x)<1.
  category: "진수 조건 0<x<7 → 합 → x(7-x)<10 → 이차부등식 → 교집합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(로그 합 → 이차부등식 · 진수 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수 조건 0<x<7. 합쳐서 x(7-x)<10, 즉 x²-7x+10>0 → x<2 또는 x>5. 교집합 0<x<2 또는 5<x<7. 진수 조건 두 개·이차부등식 부호 정리·두 조각 답까지 4단계, 함정 둘(T-범위·T-부호). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "0<x<7 ∧ x²-7x+10>0 → 0<x<2 또는 5<x<7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<x<2$ 또는 $5<x<7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "7·우변 1 을 바꿔 x(c-x)<10^k 가 정수로 인수분해되게. 제약: 진수 조건 구간과 이차부등식의 해가 두 조각으로 겹치게."
    creative: "(1) 부등호를 > 로 바꾸면 한 구간 2<x<5(★1) (2) 정수해의 개수(★2·I-RT) (3) 우변을 log 5 같은 로그값으로(★2)."
```

```yaml
- id: RPM-ALG-0355
  page: 47
  vendor_label: "교과서 04-4 로그함수의 활용; 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶: (log_2 x)²-3log_2 x-4≤0 을 log_2 x=t 로 치환한 부등식 → t 의 범위 → 원래 부등식의 해.
  category: "치환 → 이차부등식 → 역치환(밑>1 증가)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그부등식(log_a x 치환 · 이차형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t²-3t-4≤0 → -1≤t≤4 → 밑 2>1 이므로 2^{-1}≤x≤2⁴, 즉 1/2≤x≤16. 치환을 소문항이 안내. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t²-3t-4≤0 → -1≤t≤4 → 1/2≤x≤16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $t^2-3t-4\le 0$ (2) $-1\le t\le 4$ (3) $\dfrac{1}{2}\le x\le 16$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-alg/items/0355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수를 바꿔 t 구간의 끝이 정수. 제약: 역치환 결과 2^t 가 유리수."
    creative: "(1) 밑을 1/2 로 두어 역치환에서 부등호 반전(★2·T-부호) (2) 치환 안내 없이(★2) (3) 해에 속하는 정수 x 의 개수 묻기(★2·I-RT)."
```

### 유형 01 로그함수의 함숫값

```yaml
- id: RPM-ALG-0356
  page: 48
  vendor_label: "유형 01 로그함수의 함숫값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=log_a(3x+1)+1 이고 f(1)=3 일 때 f(0)+f(5) 의 값. 5지선다.
  category: "조건 대입 → 밑 a 결정 → 함숫값 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 함숫값(미정 밑 결정 후 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=3 → log_a 4=2 → a²=4, a>0 이므로 a=2. f(0)=log_2 1+1=1, f(5)=log_2 16+1=5, 합 6. 밑 결정·대입 둘의 4단계, 미정 밑(Mₐ 2)·밑 조건 함정 하나 → M_total 6, 통찰 없음 → 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log_a 4=2 → a=2 → f(0)=1, f(5)=5 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x+1 의 계수·상수, f(1) 의 값, 묻는 점을 바꿀 수 있음. 제약: 밑이 양의 정수로 결정되고 묻는 점의 진수가 밑의 거듭제곱."
    creative: "(1) 밑 대신 상수항 b 를 미정으로(★1~2) (2) f(p)=q 두 조건으로 a, b 둘 다 결정(★2) (3) f(x)+f(y) 가 상수가 되는 x, y 의 관계를 묻기(★3·I-EQV)."
```

```yaml
- id: RPM-ALG-0357
  page: 48
  vendor_label: "유형 01 로그함수의 함숫값"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=3^x, g(x)=log_{1/9} x 일 때 (g∘f)(-4) 의 값. 5지선다.
  category: "합성 순서 → 지수값 → 밑 1/9 로그 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 로그함수의 합성함수 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(-4)=3^{-4} 를 g 에 넣어 log_{1/9} 3^{-4}=log_{3^{-2}} 3^{-4}=(-4)/(-2)=2. 3단계·밑 1/9 의 음수 지수 부호 함정 하나·M_total 4. 벤더 「하」 출발점 ★1.
  tier: star_1
  mechanism_primary: "f(-4)=3^{-4} → log_{1/9} 3^{-4}=(-4)/(-2)=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 1/9 의 거듭제곱 관계, 입력 -4 를 바꿀 수 있음. 제약: 답이 정수(지수가 밑 지수의 배수)."
    creative: "(1) (f∘g) 로 순서를 바꿔 지수 안에 로그가 오게(★1) (2) 역함수 관계로 (g∘f)(x)=x 가 되는 조건 묻기(★2·I-EQV) (3) 합성 결과가 일차함수임을 이용해 그래프 문제로(★2)."
```

```yaml
- id: RPM-ALG-0358
  page: 48
  vendor_label: "유형 01 로그함수의 함숫값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=log_{1/3} √x 일 때 f(75)-f(25) 의 값.
  category: "근호 → 1/2 계수 → 차 → 몫 → 밑<1 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 함숫값(로그 성질로 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    차를 몫으로 모으면 f(75)-f(25)=(1/2)log_{1/3}(75/25)=(1/2)log_{1/3} 3=-1/2. 근호의 1/2 과 밑 1/3 의 부호가 작은 함정. 벤더 「중」이지만 3단계·통찰 없음·M_total 4 → 출발점 ★2 에서 −1 조정 ★1.
  tier: star_1
  mechanism_primary: "f(75)-f(25)=(1/2)log_{1/3}(75/25)=(1/2)log_{1/3} 3=-1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "75·25 처럼 몫이 밑의 거듭제곱이 되는 쌍(54/6=9 등)으로. 제약: 몫이 밑(또는 그 거듭제곱)이 되게."
    creative: "(1) f(a)-f(b) 를 세 항의 합·차로 늘리기(★1) (2) f(x)=k 인 x 를 역으로 구하기(★1) (3) f(a)+f(b)=1 을 만족하는 자연수 쌍 (a,b) 의 개수(★3·I-RT 로그→곱 조건)."
```

```yaml
- id: RPM-ALG-0359
  page: 48
  vendor_label: "유형 01 로그함수의 함숫값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A={(x,y) | y=log_5 x, x>0} 에 대해 (p,q)∈A 일 때 반드시 A 의 원소인 점. 5지선다.
  category: "원소 조건 → q=log_5 p → 각 보기 x좌표의 로그를 q 로 나타내 검사"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프 위의 점의 성질(집합 표기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (p,q)∈A ⟺ q=log_5 p. 보기마다 x좌표의 로그를 q 로 쓰면 ①~③·⑤는 q+log_5 2, q+1, 2q, q/2 라 y좌표(q², q+5, q+2, 2q)와 어긋나고 ④ log_5(1/p)=-q 만 항상 성립. 집합 표기 읽기와 다섯 번의 성질 검사·일반 p, q → M_total 6, 통찰 없음 → ★2 유지. [분류 이슈] 구역은 「함숫값」이나 골조는 그래프 위 점의 성질(로그 성질 검사) — 카탈로그에서 유형 02 쪽 또는 별도 유형으로 둘지 검토.
  tier: star_2
  mechanism_primary: "q=log_5 p → 각 보기 (X, Y) 에 대해 log_5 X 를 q 로 표현 → Y 와 일치하는 것은 log_5(1/p)=-q 뿐"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 와 보기의 연산(p², 5p, √p, 1/p)을 바꿀 수 있음. 제약: 정답 보기 하나만 로그 성질로 항상 성립."
    creative: "(1) 지수함수 y=a^x 로 바꾸면 (p+1, aq) 등 덧셈 구조(★2) (2) 반드시 원소인 것을 모두 고르기(★2) (3) (p,q), (r,s)∈A 두 점으로 (pr, q+s) 등 곱 구조(★2)."
```

### 유형 02 로그함수의 성질

```yaml
- id: RPM-ALG-0360
  page: 48
  vendor_label: "유형 02 로그함수의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=log_{1/a}(1/x) (0<a<1) 에 대한 설명 중 옳지 않은 것. 5지선다(세로 보기).
  category: "밑·진수의 역수 정리 → log_a x → 성질 다섯 개 확인(증감)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 성질 참/거짓(정의역·치역·점근선·증감)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑과 진수의 역수를 함께 정리하면 y=log_a x 와 같다(①). 0<a<1 이라 감소함수이므로 ④가 거짓, 나머지는 로그함수의 기본 성질. 정리 한 번 + 성질 다섯 개 확인, 매개변수 a(Mₐ 2)·밑<1 증감 함정 → M_total 6, 통찰 없음 → 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log_{1/a}(1/x)=log_a x → 0<a<1 이므로 감소 → ④ 거짓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 a, 1/a, a² 으로, 진수를 1/x, x², 1/x² 으로 바꿔 정리 결과가 ±k·log_a x 가 되게. 제약: a 의 범위를 명시해 증감이 결정되게."
    creative: "(1) a>1 로 바꾸면 거짓 보기가 달라짐(★2) (2) 그래프를 주고 a 의 범위와 성질 판단(★2·I-RT d1) (3) y=log_{1/a}(1/x)+k 로 점근선·절편까지 섞기(★2)."
```

```yaml
- id: RPM-ALG-0361
  page: 48
  vendor_label: "유형 02 로그함수의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=log_7(x+a)+b 의 점근선이 x=3, x절편이 10 일 때 a+b 의 값.
  category: "점근선 → a → x절편 대입 → b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 점근선·절편으로 상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점근선 x=-a=3 → a=-3. x절편 대입 log_7(10-3)+b=0 → b=-1. a+b=-4. 3단계·미정 상수 둘(Mₐ 2) → M_total 5, 통찰 없음 → 벤더 「중하」 출발점 ★1.
  tier: star_1
  mechanism_primary: "x=-a=3 → a=-3 → log_7 7+b=0 → b=-1 → a+b=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 7·점근선 3·x절편 10 을 바꿀 수 있음. 제약: (x절편)-(점근선) 이 밑의 거듭제곱이 되어 b 가 정수."
    creative: "(1) 점근선 대신 지나는 점 두 개로 a, b 연립(★2) (2) y절편을 조건으로 주면 log_7 a 가 남아 a 가 밑의 거듭제곱이어야 함(★2) (3) 역함수의 점근선(y=…)으로 바꿔 지수함수와 연결(★2·I-RT d1)."
```

```yaml
- id: RPM-ALG-0362
  page: 48
  vendor_label: "유형 02 로그함수의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=a^x 과 y=log_a x 의 그래프(그림: 둘 다 감소)에서 옳은 것: ㄱ 교점은 (1,1) · ㄴ y=x 대칭 · ㄷ a>1.
  category: "그래프 개형 → 0<a<1 → 역함수 관계 → 보기 판별"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수 그래프의 역함수 관계 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림의 두 그래프가 모두 감소하므로 0<a<1(ㄷ 거짓). y=a^x 과 y=log_a x 는 역함수라 y=x 에 대칭(ㄴ 참). 교점은 y=x 위에 있지만 (1,1) 을 지나려면 a=1 이어야 하므로 ㄱ 거짓. 그래프 읽기와 역함수 성질 확인 4단계·매개변수 a → M_total 6, 통찰 없음 → ★2 유지. ㄱ의 「교점 (1,1)」 이 대표 함정.
  tier: star_2
  mechanism_primary: "두 그래프 모두 감소 → 0<a<1(ㄷ 거짓) → 역함수 → y=x 대칭(ㄴ 참) → 교점은 y=x 위이지만 a¹=a≠1 (ㄱ 거짓)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: crop:fig-0362.png
  latex: latex-bank/rpm-alg/items/0362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(y=a^x · y=log_a x)은 고정. 보기 문장을 바꿀 수 있음(교점의 개수 · 교점이 y=x 위 · 정의역·치역)."
    creative: "(1) a>1 그림으로 바꿔 두 그래프가 만나는지(y=x 와의 교점 존재)를 묻기(★3·I-RT d2) (2) 교점을 (t,t) 로 두고 a^t=t 조건으로 t 의 범위 묻기(★3) (3) 두 그래프와 y=x 의 세 교점이 일치함을 이용한 서술형(★3)."
```

### 유형 03 로그함수의 그래프의 평행이동과 대칭이동

```yaml
- id: RPM-ALG-0363
  page: 49
  vendor_label: "유형 03 로그함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=log_2(2x+4) 가 y=log_2 x 를 x 방향 m, y 방향 n 만큼 평행이동한 것일 때 m+n 의 값.
  category: "진수 인수분해 → 로그 분리 → 이동량 읽기(부호)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동·대칭이동(진수 정리로 이동량 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x+4=2(x+2) 로 묶고 log_2 2 를 떼면 y=log_2(x+2)+1, 즉 x 방향 -2·y 방향 +1. 3단계·m 의 부호(-2) 함정 하나·M_total 4, 통찰 없음 → 대표문제 출발점 ★2 에서 −1 조정 ★1.
  tier: star_1
  mechanism_primary: "log_2 2(x+2)=log_2(x+2)+1 → m=-2, n=1 → -1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·상수 4 를 바꿔 진수가 k(x+p) 꼴로 묶이게(k 는 밑의 거듭제곱). 제약: n=log_2 k 가 정수."
    creative: "(1) 밑이 다른 y=log_4(4x+8) 처럼 밑 변환까지(★2) (2) 이동 후 점근선·x절편을 묻기(★1) (3) y=log_2(2x+4) 를 y=log_2 x 로 되돌리는 이동을 묻기(방향 반대·★1·T-부호)."
```

```yaml
- id: RPM-ALG-0364
  page: 49
  vendor_label: "유형 03 로그함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=log_2 4x 를 y 방향 -3 만큼 평행이동한 뒤 x축에 대칭이동한 그래프가 y=log_2(a/x) 와 일치할 때 상수 a. 5지선다.
  category: "식 정리 → 평행이동 → x축 대칭(부호 반전) → 로그 하나로 합치기 → 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동·대칭이동(이동 후 식 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 4x=log_2 x+2 를 -3 이동하면 log_2 x-1, x축 대칭으로 -log_2 x+1=log_2(1/x)+log_2 2=log_2(2/x). 이동 두 번과 로그 합치기 4단계·미정 상수 a → M_total 6, 통찰 없음 → 벤더 「중」 출발점 ★2 유지. x축 대칭의 부호 반전이 함정.
  tier: star_2
  mechanism_primary: "log_2 x+2 → log_2 x-1 → -log_2 x+1=log_2(2/x) → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4x 의 계수, -3, 밑 2 를 바꿀 수 있음. 제약: 최종 상수가 log_2 a 꼴로 정리되어 a 가 정수."
    creative: "(1) y축 대칭·원점 대칭으로 바꾸기(★2·T-부호) (2) 이동 순서를 바꾸면 답이 달라짐을 묻기(★2) (3) 일치하는 함수가 지수함수(역함수 취하기)로 주어지는 변형(★3·I-RT d1)."
```

```yaml
- id: RPM-ALG-0365
  page: 49
  vendor_label: "유형 03 로그함수의 그래프의 평행이동과 대칭이동"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=log_{1/4} x 를 x 방향 m, y 방향 n 만큼 평행이동한 그래프(그림: 점근선 x=-3, 점 (-1,0) 통과)에서 m/n 의 값.
  category: "이동식 세우기 → 점근선 → m → 점 대입 → n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프의 평행이동·대칭이동(그림에서 이동량 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 식 y=log_{1/4}(x-m)+n 에서 점근선 x=m=-3, 점 (-1,0) 대입으로 n=-log_{1/4} 2=1/2, m/n=-6. 서술형이지만 4단계의 표준 절차·미정 상수 둘 → M_total 6, 통찰 없음 → 벤더 「중」 출발점 ★2 유지. log_{1/4} 2=-1/2 의 부호가 함정.
  tier: star_2
  mechanism_primary: "y=log_{1/4}(x-m)+n → 점근선 x=-3 → m=-3 → (-1,0) 대입 → log_{1/4} 2+n=0 → n=1/2 → m/n=-6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: crop:fig-0365.png
  latex: latex-bank/rpm-alg/items/0365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(점근선 -3 · x절편 -1)은 고정. 밑을 1/2·1/8 로 바꾸면 n 이 달라짐. 제약: (절편)-(점근선) 이 밑의 거듭제곱(2=4^{1/2})."
    creative: "(1) 점근선 대신 y절편을 주기(★2) (2) 그림 없이 「지나는 두 점」으로 m, n 연립(★2) (3) 이동 뒤 y=x 대칭까지 해 지수함수로 묻기(★3·I-RT d1)."
```

### 유형 04 로그함수를 이용한 대소 관계

```yaml
- id: RPM-ALG-0366
  page: 49
  vendor_label: "유형 04 로그함수를 이용한 대소 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A=-log_{1/2}(1/6), B=2log_{1/2}(1/5), C=-3log_{1/2} 3 의 대소 관계. 5지선다.
  category: "계수·부호를 진수로 → 같은 밑 로그 셋 → 밑<1 반전 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 밑 로그로 통일한 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 수를 모두 log_{1/2}(진수) 로 정리하면 진수 6, 1/25, 1/27. 밑<1 이라 진수가 클수록 작으므로 A<B<C. 정리 셋 + 반전 비교의 4단계·M_total 5, 통찰 없음 → 대표문제 출발점 ★2 에서 −1 조정 ★1. 음수 계수·역수 진수·밑<1 의 부호 처리가 함정(한 카테고리).
  tier: star_1
  mechanism_primary: "A=log_{1/2} 6, B=log_{1/2}(1/25), C=log_{1/2}(1/27) → 6>1/25>1/27 → A<B<C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수·계수를 바꿔 정리된 진수가 비교하기 쉬운 수(정수와 단위분수)가 되게. 제약: 세 진수가 서로 다르고 순서가 한눈에 결정."
    creative: "(1) 밑을 2 로(반전 없음)(★1) (2) 밑이 서로 다른 세 수(1/2, 4, 8)로 주어 밑 통일 추가(★2) (3) 하나를 상수(0 이나 -1)로 두어 기준점 비교(★1~2)."
```

```yaml
- id: RPM-ALG-0367
  page: 49
  vendor_label: "유형 04 로그함수를 이용한 대소 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=5, B=log_2 7, C=log_4 25 의 대소 비교.
  category: "상수를 로그로 → 밑 변환 → 진수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑 변환으로 통일한 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5=log_2 32, log_4 25=log_2 5 로 통일하면 진수 5<7<32 → C<B<A. 3단계·M_total 4, 통찰 없음 → 벤더 「중하」 출발점 ★1.
  tier: star_1
  mechanism_primary: "5=log_2 32, log_4 25=log_2 5 → 5<7<32 → C<B<A"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$C<B<A$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 5·진수 7·25 를 바꿀 수 있음. 제약: 통일 후 세 진수가 서로 다르고 정수."
    creative: "(1) 밑을 1/2 로 섞어 반전 결합(★2) (2) 진수에 근호를 넣어 계수 정리(★1) (3) A 를 log_3 로 주어 서로 다른 밑 두 개 → 1 과 2 같은 기준 상수로 비교(★2·I-EQV d1)."
```

```yaml
- id: RPM-ALG-0368
  page: 49
  vendor_label: "유형 04 로그함수를 이용한 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1<x<2 일 때 A=log_2 x, B=(log_2 x)², C=log_x 2 의 대소 비교.
  category: "구간 → 0<A<1 → B=A², C=1/A → 위치 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1<x<2 를 0<A<1 로 옮기고 B, C 를 A 로 표현해 0<A<1 에서 A²<A<1<1/A 를 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변수 범위를 이용한 로그값의 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1<x<2 이면 0<log_2 x<1. B=A², C=1/A 이므로 0<A<1 에서 A²<A<1<1/A, 즉 B<A<C. 조건을 A 의 범위로 바꾸고 세 수를 한 변수로 묶는 착안(EQV d1) 하나·매개변수 x 구간 → M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0<A<1 → B=A²<A, C=1/A>1 → B<A<C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$B<A<C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 1<x<2 → 2<x<4 로 바꾸면 A 의 범위가 1<A<2 로 바뀌어 순서가 달라짐. 제약: A 의 범위가 0~1 또는 1 이상 한쪽에 들어가게."
    creative: "(1) 0<x<1 로 바꾸면 A<0 이라 B>0>A, C<0 → 부호 비교(★2) (2) D=log_2 x² 등 넷째 수 추가(★2) (3) x 의 범위를 그래프(y=log_2 x 와 y=1 의 위치)로 주어 RT 결합(★3)."
```

```yaml
- id: RPM-ALG-0369
  page: 49
  vendor_label: "유형 04 로그함수를 이용한 대소 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<b<a<1 일 때 A=log_a b, B=log_b a, C=log_a(a/b) 의 대소 관계. 5지선다.
  category: "밑<1·b<a → A>1 → B=1/A, C=1-A → 위치 결정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "0<b<a<1 두 조건을 밑<1 의 감소성과 결합해 A=log_a b>log_a a=1 을 끌어내고 B=1/A, C=1-A 로 한 변수에 통일"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변수 범위를 이용한 로그값의 대소 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0<a<1 에서 log_a 는 감소, b<a 이므로 A=log_a b>log_a a=1. B=1/A∈(0,1), C=1-log_a b=1-A<0 → C<B<A. 조건 둘을 결합해 A 의 위치를 잡는 착안(EQV d2)이 핵심이고 밑<1 반전·구간 함정 둘(Mₜ 2) → M_total 7. 벤더 「상중」 출발점 ★3 유지(통찰 1개라 +1 없음).
  tier: star_3
  mechanism_primary: "A>1 → 0<B=1/A<1 → C=1-A<0 → C<B<A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0<b<a<1 을 1<b<a 나 0<a<1<b 로 바꾸면 A 의 위치가 달라짐. 제약: 세 수의 부호·1 과의 위치가 명확히 갈리는 범위."
    creative: "(1) C 를 log_a(ab) 등으로 바꿔 A+1 꼴(★3) (2) 구체 수 b=1/4, a=1/2 로 주면 계산형 ★2 로 하락 (3) 네 수로 늘리고 가장 큰 것만 묻기(★3) (4) 조건을 log_a b>1 같은 로그 부등식으로 주어 a, b 의 관계를 역으로 해석하게 하면 EQV 두 번 → ★4 후보."
```

### 유형 05 로그함수의 그래프의 활용

```yaml
- id: RPM-ALG-0370
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=log_5 x 그래프(그림)에서 x=2, a, 18 에 대응하는 y축 위의 점 P, M, Q 에 대해 M 이 PQ 의 중점일 때 a 의 값.
  category: "중점 → 로그값의 평균 → 진수의 기하평균"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 중점 조건을 y좌표 식 log_5 a=(log_5 2+log_5 18)/2 로 옮기고 로그 합을 진수의 곱으로 읽어 a=√(2·18)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그함수 그래프 위 점의 중점(로그 평균 → 기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P, M, Q 는 각각 x=2, a, 18 에서의 함숫값. 중점이므로 log_5 a 가 두 로그값의 평균, 즉 a 는 2 와 18 의 기하평균 6. 「중점 → 진수의 기하평균」 전환(RT d1) 하나·M_total 4 → 통찰이 있어 −1 없이 대표문제 출발점 ★2 유지. [분류 이슈] 중점 공식 대입을 절차로 보면 M_total 4 절차형 ★1 — 카탈로그에서 통찰 인정 기준 결정 필요.
  tier: star_2
  mechanism_primary: "log_5 a=(log_5 2+log_5 18)/2=log_5 √36 → a=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: crop:fig-0370.png
  latex: latex-bank/rpm-alg/items/0370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(2 · a · 18)은 고정. 2·18 을 곱이 완전제곱수인 쌍(3·12, 4·9)으로. 제약: 곱이 완전제곱수여야 a 가 정수."
    creative: "(1) M 을 2:1 내분점으로 바꾸면 가중 기하평균(★3·계산 상승) (2) 지수함수 y=5^x 위 세 점의 x좌표 중점 → y좌표는 기하평균(★2·같은 골조) (3) a 를 주고 18 자리를 미정으로 역으로(★2)."
```

```yaml
- id: RPM-ALG-0371
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 4 인 정사각형 ABCD(B, C 는 x축 위)의 꼭짓점 D 가 y=log_2 x 위에 있을 때 B 의 x좌표(그림).
  category: "B(b,0) → D(b+4,4) → 그래프에 대입 → b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 그래프 위 도형 꼭짓점의 좌표 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    B(b,0) 이면 D(b+4,4). D 가 그래프 위이므로 log_2(b+4)=4, b+4=16, b=12. 좌표 설정 후 대입 한 번의 3단계·M_total 4, 통찰 없음 → 벤더 「중」 출발점 ★2 에서 −1 조정 ★1. [분류 이슈] 정사각형을 좌표로 옮기는 단계를 RT d1 로 인정하면 ★2 유지 — 「도형 꼭짓점 대입」의 통찰 인정 기준을 카탈로그에서 정할 것.
  tier: star_1
  mechanism_primary: "D=(b+4,4) → log_2(b+4)=4 → b+4=16 → b=12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: crop:fig-0371.png
  latex: latex-bank/rpm-alg/items/0371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이 4 를 3·5 로 바꾸면 b=2^k-k. 밑 3 으로도 가능. 제약: 그림 라벨(A B C D · 정사각형)은 고정, b 가 양수."
    creative: "(1) A 가 y=log_2 x 위, D 가 y=log_2(x-k) 위처럼 두 꼭짓점 조건으로 k 결정(★2) (2) 정사각형 대신 직사각형에 두 꼭짓점이 각각 log_2 x, log_4 x 위(★3·I-EQV) (3) 한 변의 길이를 미정 s 로 두고 log_2(b+s)=s 의 정수해 탐색(★3)."
```

```yaml
- id: RPM-ALG-0372
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=log_2 x, y=log_2 x+1 과 두 직선 x=2, x=3 으로 둘러싸인 부분(그림)의 넓이.
  category: "y 방향 평행이동 → 세로 폭 1 일정 → 직사각형과 등적"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위 곡선이 아래 곡선의 y 방향 +1 이동이라 x∈[2,3] 의 모든 세로 폭이 1 → 밑변 1·높이 1 직사각형과 넓이가 같음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동한 두 로그함수 사이 넓이(등적변형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 없이 풀려면 두 곡선이 평행이동 관계임을 보고 곡선 사이 영역을 같은 넓이의 직사각형(가로 3-2=1, 세로 1)으로 옮겨야 한다. 이 등적변형(RT d2) 하나가 풀이의 전부라 M_total 4 지만 통찰이 있어 −1 없이 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=log_2 x+1 은 y=log_2 x 의 y 방향 1 이동 → 세로 폭 1 × 가로 1 → 넓이 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: crop:fig-0372.png
  latex: latex-bank/rpm-alg/items/0372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 1 과 x 범위 2~3 을 바꾸면 넓이=(이동량)×(구간 길이). 제약: 그림 라벨은 고정, 두 곡선이 y 방향 이동 관계."
    creative: "(1) x 방향 이동 y=log_2(x-k) 와 가로선 두 개로 바꾸면 평행사변형(0373 골조·★2) (2) 두 곡선을 y=log_2 x, y=log_2 4x 처럼 진수 계수로 위장하면 이동 관계를 먼저 알아채야 함(★3·RT d2+EQV d1) (3) 넓이를 주고 구간 끝 k 를 역으로(★2)."
```

```yaml
- id: RPM-ALG-0373
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=log_3 x, y=log_3(x-k) 와 두 직선 y=1, y=5 로 둘러싸인 도형(그림)의 넓이가 12 일 때 상수 k (k>0).
  category: "x 방향 평행이동 → 가로 폭 k 일정 → 평행사변형 넓이 4k → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=log_3(x-k) 가 y=log_3 x 의 x 방향 k 이동이라 y=1~5 사이 모든 가로 폭이 k → 밑변 k·높이 4 평행사변형과 등적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동한 두 로그함수 사이 넓이(등적변형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선은 x 방향 k 평행이동 관계라 y=1 과 y=5 사이의 영역은 밑변 k, 높이 4 인 평행사변형과 넓이가 같다. 4k=12 → k=3. 등적변형(RT d2) 하나·미정 k → M_total 5 → 벤더 「중」 출발점 ★2 유지. 0372 와 같은 골조의 역문제.
  tier: star_2
  mechanism_primary: "가로 폭 k × 높이 4 = 12 → k=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: crop:fig-0373.png
  latex: latex-bank/rpm-alg/items/0373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 12·높이(1~5)를 바꾸면 k=넓이/높이. 제약: 그림 라벨은 고정, k 가 양의 정수."
    creative: "(1) 곡선을 y=log_3 x 와 y=log_3 x+2 로 바꿔 세로 폭 골조(0372)로(★2) (2) 둘러싸는 직선을 세로선 x=… 으로 바꾸면 등적변형이 안 되어 적분이 필요 → 이 단계에서는 출제 불가 (3) k 를 그림의 두 x절편 차이로 읽게 하는 조건 추가(★2)."
```

```yaml
- id: RPM-ALG-0374
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=2^x, y=log_4 x 의 그래프와 직선 y=x (그림: 점선으로 좌표가 이어짐)에서 α+β=12 일 때 αβ 의 값.
  category: "y=x 대칭으로 좌표 옮기기 → α=2^t, β=4^t → β=α² → 이차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점 (t,2^t) 에서 가로로 y=x 에 닿은 x좌표가 α=2^t, 세로로 y=x 에 내린 (t,t) 에서 가로로 y=log_4 x 에 닿으면 log_4 β=t → β=4^t (같은 t)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그함수 그래프와 y=x 를 이용한 좌표 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림의 점선은 y=x 위의 점이 x좌표와 y좌표를 맞바꾸는 장치. 곡선 y=2^x 위의 점 (t,2^t) 에서 가로선이 y=x 와 만나는 x좌표가 α=2^t, 세로선이 y=x 와 만나는 점 (t,t) 에서 가로선이 y=log_4 x 와 만나는 x좌표가 β 이므로 log_4 β=t, β=4^t=α². α²+α-12=0, α>0 → α=3, β=9, αβ=27. 좌표 옮기기 착안(RT d2) 하나·미정 α, β → M_total 6 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "α=2^t, β=4^t=(2^t)²=α² → α+α²=12 → α=3 → β=9 → αβ=27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$27$'
  answer_source: "답지"
  figure: crop:fig-0374.png
  latex: latex-bank/rpm-alg/items/0374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "α+β=12 를 α+α²=k 가 양의 정수해를 갖는 k(6, 20, 30)로. 밑 2·4 의 제곱 관계를 3·9 로. 제약: 그림 라벨(α, β 위치)은 고정, α>0."
    creative: "(1) 두 함수를 y=2^x, y=log_2 x 로 두면 β=α 로 무의미 → 밑의 거듭제곱 관계가 필수 (2) αβ 대신 β-α 나 log_2(β/α) 를 묻기(★3) (3) 점선 대신 「두 점의 y좌표가 같다」는 문장 조건으로 주면 그림 없이 RT d2 유지(★3) (4) 세 함수 y=2^x, y=log_4 x, y=log_8 x 로 세 좌표의 관계 → ★4 후보."
```

```yaml
- id: RPM-ALG-0375
  page: 50
  vendor_label: "유형 05 로그함수의 그래프의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=2^{x+1}, y=log_3(x+1)+1 의 y절편 A, B 와 A, B 를 지나는 가로선이 다른 곡선과 만나는 점 C, D 로 만든 사각형 ADBC 의 넓이(그림). 5지선다.
  category: "y절편 → 가로선과 곡선의 교점 → 네 점 좌표 → 사다리꼴 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수 그래프의 절편·교점으로 만든 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y절편 A(0,2), B(0,1). y=2 와 y=log_3(x+1)+1 의 교점 C(2,2), y=1 과 y=2^{x+1} 의 교점 D(-1,1). ADBC 는 AC∥DB 인 사다리꼴로 넓이 (2+1)×1/2=3/2. 교점 계산 넷과 넓이 한 번의 5단계, 통찰 없음, M_total 5 → 벤더 「상중」 출발점 ★3 에서 −1 조정 ★2. [분류 이슈] 벤더 「상중」이나 절차형 M_total 5 — 그림에서 네 점을 정확히 배치하는 부담을 M 에 더 쳐주면 ★3 유지 가능.
  tier: star_2
  mechanism_primary: "A(0,2), B(0,1) → C: log_3(x+1)+1=2 → (2,2) · D: 2^{x+1}=1 → (-1,1) → AC∥DB 사다리꼴 (2+1)·1/2=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-0375.png
  latex: latex-bank/rpm-alg/items/0375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2^{x+1} 의 이동 1·log_3(x+1)+1 의 이동을 바꾸면 A, B, C, D 가 달라짐. 제약: 두 절편이 정수이고 가로선 교점이 정수(밑의 거듭제곱)로 떨어지게."
    creative: "(1) 사각형 대신 삼각형 ABC 의 넓이(★2) (2) 두 함수를 역함수 관계로 두면 C, D 가 y=x 대칭 → 대칭 이용(★3·I-SYM d1) (3) 넓이를 주고 이동량 k 를 결정(★3·I-BW d1)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 26 · ★2 11 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 33 · premium 0
- 구역별: 교과서 19문(전부 ★1) · 유형 01~05 20문(★1 7 · ★2 11 · ★3 2)
- ★ 조정: 벤더 출발점에서 −1 한 문항 5(0358·0363·0366·0371 「중」/대표문제 → ★1, 0375 「상중」 → ★2) · +1 없음
- 통찰 유형: I-RT 4(0370 d1 · 0372 d2 · 0373 d2 · 0374 d2) · I-EQV 2(0368 d1 · 0369 d2) · 그 외 0
- type_hint 상위: 「로그방정식(…)」 5 · 「로그부등식(…)」 5 · 「로그함수 그래프의 평행이동·대칭이동(…)」 4 · 「같은 밑 로그로 통일한 대소 비교」 3 · 「구간에서 로그함수의 최대·최소」 3 (그 다음 「지수함수의 역함수」 2 · 「밑 변환으로 통일한 대소 비교」 2 · 「변수 범위를 이용한 로그값의 대소 비교」 2 · 「평행이동한 두 로그함수 사이 넓이(등적변형)」 2)
- 대상층: 하위권 22 · 중하위권 11 · 중위권 6
- 그림: 8문(`crop:fig-0362.png` · `crop:fig-0365.png` · `crop:fig-0370.png` ~ `crop:fig-0375.png`)
- 답 확인: 39문 모두 전사본 answer 와 재풀이 결과 일치(「전사 답 확인 필요」 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0375 | 벤더 「상중」이나 통찰 없음·M_total 5 → −1 조정 ★2. 그림에서 네 점을 배치하는 부담을 M 에 더 치면 ★3 | ★2 / ★3 |
| RPM-ALG-0371 | 벤더 「중」·정사각형을 좌표로 옮기는 단계를 RT d1 로 인정하면 ★2, 직접 대입으로 보면 M_total 4 절차형 ★1 — 「도형 꼭짓점 대입」의 통찰 인정 기준 필요 | ★1 / ★2 |
| RPM-ALG-0370 | 「중점 → 진수의 기하평균」 을 RT d1 로 인정해 대표문제 ★2 유지. 중점 공식 대입을 절차로 보면 M_total 4 → ★1 | ★1 / ★2 |
| RPM-ALG-0359 | 구역은 「유형 01 함숫값」이나 골조는 그래프 위 점의 성질(로그 성질 검사) — 카탈로그에서 유형 02 쪽 또는 별도 유형으로 둘지 결정 | ★2 |
| RPM-ALG-0373 | 0372 와 같은 등적변형 골조의 역문제(넓이 → k) — 카탈로그에서 한 유형으로 통합 가능 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「로그방정식」 5(정의 · 밑 미지수 · 진수 비교 · 합→이차 · 치환) · 「로그부등식」 5(같은 다섯 갈래) · 「로그함수 그래프의 평행이동·대칭이동」 4(정의역·점근선 · 진수 정리 · 식 일치 · 그림에서 결정) · 대소 비교 7(같은 밑 통일 3 · 밑 변환 2 · 변수 범위 2).
- 따로 세워야 할 유형: 「변수 범위를 이용한 로그값의 대소 비교」(0368·0369 — 유일하게 EQV 통찰이 붙는 대소 비교라 계산형과 base ★ 가 다름 · ★2~3) · 「평행이동한 두 로그함수 사이 넓이(등적변형)」(0372·0373 — RT d2 가 고정 골조 · ★2, 진수 계수로 위장하면 ★3) · 「지수·로그함수 그래프와 y=x 를 이용한 좌표 읽기」(0374 — 서술형 ★3 대표 · α=2^t, β=4^t 골조는 밑의 거듭제곱 관계가 필수).
- 통합해도 될 유형: 로그방정식의 정의/진수 비교/합→이차 갈래는 한 유형 「로그방정식(기본)」 의 하위 태그로, 치환형(0350)만 별도 · 로그부등식도 같은 구조(0355 치환형 별도) · 「같은 밑 로그로 통일」과 「밑 변환으로 통일」 대소 비교는 「계산형 대소 비교」 한 유형으로 · 0370·0371·0375 는 「그래프 위 점의 좌표 대입(도형)」 한 유형으로 묶되 0370 의 「중점 → 기하평균」은 하위 태그로 남길 것.
- 교과서 구역 19문은 모두 ★1·통찰 0 이라 변형 원본으로는 숫자 변형(밑·이동량·구간 끝)만 의미 있고, 창의 변형은 유형 04·05 의 6문(통찰형)에서 뽑는 것이 효율적이다.
