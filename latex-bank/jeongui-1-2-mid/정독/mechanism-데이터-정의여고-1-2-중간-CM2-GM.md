---
name: mechanism-데이터-정의여고-1-2-중간-CM2-GM
description: 2026 정의여고 1-2 중간고사 프린트(고1 학평 기출 모음 · 공통수학2 평면좌표·직선의 방정식·원의 방정식·도형의 이동) 정독 데이터 v1.0. 1~14쪽 41문 전수. 스키마 v2.0 + v3.8 3층 모델 준거. 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-19
  source: 2026 정의여고 1-2 중간고사 프린트 · 고1 학평 기출 모음 · HWP 출력 PDF
  section: 공통수학2 도형의 방정식 (평면좌표 · 직선의 방정식 · 원의 방정식 · 도형의 이동) — 2022~2026 교육청 고1·고2 학평 기출 41문
  unit_code: CM2-GM
  sub_unit: 평면좌표·직선·원 (+ 도형의 이동 14문 · type_id M##)
  citation_note: "교육청 전국연합학력평가 기출 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "프린트 1~14쪽 · 문항 01~41 (쪽당 2~4문)"
  pages: "1~14"
  total_problems: 41
  sample_problems: 41
  predicted_problems: 0
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · type_id 는 bank/유형카탈로그/CM2-GM.md C01~C10 · L01~L14 · R01~R16 · M01~M12 · base_star 는 카탈로그 값, star 는 라벨(학평 3점 ≈ ★2 · 4점 ≈ ★3~4 를 참고하되 카탈로그·통찰로 판정, 차이는 rationale 에 기록) · 판정 애매·카탈로그 충돌 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-15)
  anchor_note: bank/anchors/CM2-GM.md 앵커 풀(DI-* 25문)에 같은 학평 문항 없음 · bank/mechanism-데이터-전국연합-CM2-GM.md(2026-07-20 · legacy tier_mapping 으로 4점 일괄 star_5) 에 12문 중복 등재 → anchor_status 에 표기
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/jeongui-1-2-mid/items.json (variant_level 0 · 원본 전사) · latex-bank/jeongui-1-2-mid/items/<번호>.tex
  image_source: latex-bank/jeongui-1-2-mid/figures/fig-<번호>.png (그림 문항 14개 · crops.json)
---

# 2026 정의여고 1-2 중간고사 프린트 · CM2-GM 정독 데이터 (v1.0)

고1 학평(2022~2026 교육청 고1 9·10·11월, 고2 3월) 기출 41문을 프린트 순서(1쪽 평면좌표 → 2~4쪽 직선 → 4~9쪽 원 → 10~14쪽 도형의 이동)로 묶은 학교 대비 프린트다. 벤더 난이도 라벨은 `Lv2 보통`(17문) · `Lv3 어려움`(23문) · `Lv4 최고난도`(1문) 세 단계이고, 배점(3점·4점)이 두 번째 벤더 신호다. 이 자산의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

아래 절은 문항의 `type_id` 소단원으로 나눈다(프린트 배치와 다른 문항: 03 → 직선 L09 · 15 → 평면좌표 C02 · 26 → 직선 L07 · 32 → 이동 M03). 각 절 안은 번호 순. 전사본은 `latex-bank/jeongui-1-2-mid/items/<번호>.tex`, 그림은 `latex-bank/jeongui-1-2-mid/figures/`.

## 문항 데이터

### 평면좌표

```yaml
- id: 정의여고-1-2중간-01
  page: 1
  vendor_label: "2023 교육청 고1 11월 9번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    두 점 A(2,4), B(5,1) 과 직선 y=-x 위의 점 P 에 대하여 AP=BP 일 때 OP 의 길이(O 는 원점). 5지선다.
  category: "직선 위 등거리 점 → 좌표 결정 → 거리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-C02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(t,-t) 로 두고 AP²=BP² 를 전개하면 t² 이 소거되어 일차방정식 한 줄. 등거리 조건의 제곱 전개는 C02 의 본질 통찰이라 별도 통찰로 세지 않음. 카탈로그 base ★3 이나 통찰 없음·M_total 5 로 effective ★2 = 학평 3점 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "P(t,-t) 매개화 → AP²=BP² 전개(이차항 소거) → t → OP 거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 직선 y=mx(또는 y=mx+n)를 바꿀 수 있음. 제약: t 가 유리수가 되도록 계수 정수·선택지에 √ 정리 가능한 OP 값. A,B 가 직선에 대하여 대칭이면 해가 무수히 많아지므로 금지."
    creative: "(1) 직선 대신 x축·y축 위 점(★2 유지) (2) 묻는 값을 OP 대신 삼각형 ABP 넓이·P 의 좌표 합(★2 유지) (3) 세 점에서 등거리(외심)로 확장하면 두 조건 연립 → ★3 (4) AP:BP=1:2 로 바꾸면 자취가 원(R16 아폴로니우스)이 되어 ★3~4."
```
```yaml
- id: 정의여고-1-2중간-02
  page: 1
  vendor_label: "2024 교육청 고1 10월 11번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    삼각형 ABC 에서 A(1,2), AB 의 중점 (6,7), AC 의 중점 (a,6), 무게중심 (5,b) 일 때 a+b. 5지선다.
  category: "중점 역산 → 무게중심 공식"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-C05
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 공식 역대입으로 B(11,12), C(2a-1,10) 을 얻고 무게중심 x 좌표로 a=2, y 좌표로 b=8. 공식 두 개의 순차 대입. C05 base ★3 이나 통찰 없음·M_total 4 → effective ★2 = 3점 라벨 정합.
  tier: star_2
  mechanism_primary: "중점 공식 역산으로 B, C → 무게중심 공식 x 성분에서 a, y 성분에서 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 좌표·두 중점 좌표·무게중심 좌표를 바꿀 수 있음. 제약: 무게중심 = (세 꼭짓점 합)/3 이 정수(또는 깔끔한 유리수)가 되도록 좌표 합을 3의 배수로 맞춤. 중점 대신 1:2 내분점으로 바꾸면 분모 3 이 겹쳐 계산량만 증가."
    creative: "(1) 중점 대신 '변 BC 를 2:1 로 내분하는 점' 으로 바꾸면 내분 공식 역산 → ★2 유지 (2) 무게중심 대신 '삼각형 ABC 의 넓이' 를 물으면 신발끈(L12) 결합 → ★3 (3) 두 중점을 잇는 선분(중점연결)의 길이를 물어 BC/2 관계를 쓰게 하면 I-RT d1 → ★3."
```
```yaml
- id: 정의여고-1-2중간-15
  page: 5
  vendor_label: "2024 교육청 고1 10월 15번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 x²+y²=4 위의 두 점 A(a,b), B(b,a) 와 AP=BP, AQ=BQ 인 원 위의 두 점 P, Q 에 대하여 사각형 APBQ 의 넓이가 2√2 일 때 a×b. 5지선다.
  category: "대칭점 → 수직이등분선 y=x → 지름 → 대각선 넓이 → 대칭식"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A(a,b), B(b,a) 가 y=x 대칭 → AB 의 수직이등분선이 y=x → P, Q 는 원과 y=x 의 교점 = 지름 양 끝(PQ=4)"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대각선 AB ⟂ PQ 인 사각형 넓이 = AB·PQ/2 → AB=√2"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB²=2(a-b)²=2 와 a²+b²=4 를 (a-b)²=a²+b²-2ab 로 묶어 ab"
  insight_count: 3
  depth_score: 5.33
  type_id: CM2-GM-C02
  base_star: 3
  effective_star: 3
  star: 4
  premium: false
  rationale: |
    등거리 조건(C02)이 '수직이등분선 = y=x' 로 즉시 환원되는 대칭 인식이 핵심이고, 그 뒤 사각형 넓이를 대각선으로 읽고 대칭식으로 ab 를 뽑는 세 단계 통찰. 좌표 대입으로 P, Q 를 직접 구하려 하면 a, b 미정 상태에서 막힌다. 카탈로그 C02 base ★3 → effective ★3 이나 통찰 3개(SYM 포함)라 라벨 ★4.
    [분류 이슈] C02 base ★3 vs 통찰 3개·학평 4점 15번 → 라벨 ★4. 후보 ★3/★4. 프린트는 원 단원에 배치(type_id 로 평면좌표 절에 둠).
  tier: star_4
  mechanism_primary: "A,B 의 y=x 대칭 → 수직이등분선 y=x → P,Q 지름 양끝 → 넓이=AB·PQ/2 → AB → (a-b)² 와 a²+b² 로 ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 반지름 r 과 넓이 S 를 바꿀 수 있음. 제약: PQ=2r, AB=S/r, (a-b)²=AB²/2 가 양수이고 ab=(r²-(a-b)²)/2 가 선택지에 맞는 유리수. AB<2r(서로 다른 두 점·A≠B) 필수, A,B 가 실제 원 위에 있으려면 (a-b)²≤2r²."
    creative: "(1) B(b,a) 대신 B(-a,b)(y축 대칭) 로 바꾸면 수직이등분선이 y축 → 같은 골조 ★4 유지 (2) 넓이 대신 '삼각형 APB 넓이' 나 'AB 의 길이' 만 물으면 step 2 가 빠져 ★3 (3) B(-b,-a) 로 바꾸면 y=-x 대칭, 골조 동일 (4) 원 중심을 (1,1) 등 y=x 위 점으로 옮기면 대칭축 판단이 한 단계 늘어 ★4 유지·계산 증가."
```

### 직선의 방정식

```yaml
- id: 정의여고-1-2중간-03
  page: 1
  vendor_label: "2024 교육청 고1 9월 20번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(-8,a), B(7,3), C(-6,0). AB 를 2:1 로 내분하는 점 P 에 대하여 직선 PC 가 삼각형 AOB 의 넓이를 이등분할 때 양수 a. 그림 제공. 5지선다.
  category: "내분점 + 넓이 이등분 → 넓이비 = 선분비 곱 → 세 점 공선"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선 PC 가 변 AO 와 만나는 점을 Q 라 하면 △APQ/△AOB = (AP/AB)(AQ/AO) = (2/3)(AQ/AO) = 1/2 → AQ:QO = 3:1 (넓이 이등분을 선분비로 번역)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q = (1/4)A = (-2, a/4) 가 직선 CP 위 → 기울기 일치 (6+a)/24 = a/16 → a=12"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-L09
  base_star: 4
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    내분점 P 좌표는 절차지만, 넓이 이등분 조건을 '두 변 위 내분비의 곱 = 1/2' 로 읽어야 좌표 계산이 열린다(직접 교점·넓이 계산 갈래는 a 미정 상태에서 분수식이 커짐). 학평 20번 4점 → ★4 · L09 base ★4 정합.
    [분류 이슈] type_id 후보 L09(넓이 이등분 직선 · base 4) / C04(내분점 · base 2) / L12(삼각형 넓이 · base 3). 프린트는 평면좌표 절에 배치. 골조가 '넓이 이등분 조건' 이라 L09 채택. 후보 ★4.
  tier: star_4
  mechanism_primary: "내분점 P 좌표 → 넓이 이등분 = (AP/AB)(AQ/AO) = 1/2 → Q 의 위치 → C, Q, P 공선(기울기) → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-03.png
  latex: latex-bank/jeongui-1-2-mid/items/03.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2024.9월 고1 20번 · legacy tier star_5 일괄) → 본 판정 ★4"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비 m:n, B·C 좌표, A 의 x 좌표를 바꿀 수 있음. 제약: (AP/AB)(AQ/AO)=1/2 에서 AQ/AO = (m+n)/(2m) 이 1 이하(m ≥ n/1 즉 m ≥ n 이어야 Q 가 변 AO 안에 있음), C 가 삼각형 밖 x축 위여야 직선 PC 가 두 변만 가로지름. 공선 조건이 a 의 일차식이 되도록 좌표 정수."
    creative: "(1) C 를 y축 위 점으로 바꿔 직선 PC 가 변 OB 와 만나게 하면 같은 골조 ★4 (2) '넓이 이등분' 을 '넓이를 1:3 으로 나눈다' 로 바꾸면 비만 달라져 ★4 유지 (3) 내분점 대신 '직선 PC 가 무게중심을 지난다' 로 바꾸면 C05 결합 ★3 (4) a 대신 내분비 m:n 을 미지수로 두면 자유도 재배치 · I-BW 추가 ★4~5."
```
```yaml
- id: 정의여고-1-2중간-04
  page: 2
  vendor_label: "2023 교육청 고1 9월 10번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 (1,a) 를 지나고 직선 4x-2y+1=0 에 평행한 직선이 bx-y+5=0 일 때 a×b. 5지선다.
  category: "평행 조건 → 기울기 → 점 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 → b=2, 점 대입 → a=7. 공식 대입 두 줄. L03 base ★3 이나 통찰 없음·M_total 3 → effective ★2 = 3점 라벨 정합.
  tier: star_2
  mechanism_primary: "평행 ⇔ 기울기 같음 → b → (1,a) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선 계수·통과점·상수항을 바꿀 수 있음. 제약: 기울기가 정수 또는 간단한 분수, a 가 정수. 기준 직선을 ax+by+c=0 일반형으로 두면 기울기 -a/b 부호 함정(T-부호) 추가."
    creative: "(1) 평행 → 수직으로 바꾸면 m₁m₂=-1 (05번과 동형) ★2 (2) 통과점 대신 'x 절편이 3' 조건으로 바꾸면 L02 결합 ★2 (3) 두 직선이 평행하면서 거리가 √5 라는 조건을 붙이면 L04 결합 → ★3 (4) a, b 를 매개변수로 두고 '평행하지만 일치하지 않는' 조건(비례 조건 ≠ 상수항)을 넣으면 T-경계 함정 ★3."
```
```yaml
- id: 정의여고-1-2중간-05
  page: 2
  vendor_label: "2024 교육청 고1 9월 10번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 (1,a) 를 지나고 직선 2x+3y+1=0 에 수직인 직선의 y 절편이 5/2 일 때 a. 5지선다.
  category: "수직 조건 → 기울기 → y 절편"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 → 기울기 3/2, y=(3/2)(x-1)+a 의 y 절편 a-3/2 = 5/2 → a=4. 04번과 같은 급의 공식 대입. effective ★2 = 3점 라벨.
  tier: star_2
  mechanism_primary: "수직 ⇔ 기울기 곱 -1 → 기울기 3/2 → 점-기울기형 → y 절편 = a - 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선 계수, 통과점 x 좌표, y 절편 값을 바꿀 수 있음. 제약: 기울기 역수 부호 반전이 깔끔하도록 계수 서로소, a 가 정수(y 절편 = a - m·x₀)."
    creative: "(1) y 절편 대신 x 절편 조건 ★2 (2) '원점에서 이 직선까지의 거리가 √13' 으로 바꾸면 L04 결합 ★3 (3) 수직인 직선이 '점 (1,a) 와 (a,1) 을 모두 지난다' 로 바꾸면 두 점 직선(L01)과 수직 조건이 연립 → ★3."
```
```yaml
- id: 정의여고-1-2중간-06
  page: 2
  vendor_label: "2023 교육청 고1 11월 26번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    점 (a,a) 를 지나고 곡선 y=x²-4x+10 에 접하는 두 직선이 서로 수직일 때 두 접선의 기울기의 합. 단답형.
  category: "접선 판별식 → 기울기 이차방정식 → 근과 계수 관계(곱 = -1)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=m(x-a)+a 와 이차함수의 접함 ⇔ x²-(4+m)x+(10+ma-a)=0 의 D=0 → m 에 관한 이차방정식 m²+(8-4a)m+(4a-24)=0"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선의 기울기 = 이 방정식의 두 근으로 보고, 수직 조건(곱 -1)을 근과 계수 관계로 읽어 a=23/4, 구하는 합 = 4a-8 = 15 (두 근을 실제로 구하지 않음)"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    판별식은 CM1 표준이지만 결과 방정식을 'm 의 이차식' 으로 뒤집어 근과 계수로 마무리하는 역방향 사고가 있어야 계산이 닫힌다. 두 접선을 각각 구하려 하면 √ 가 든 근이 나와 수렁. 학평 26번 단답 4점 → ★3.
    [분류 이슈] 카탈로그에 '직선과 이차함수의 접선(판별식)' 유형이 없음. 수직 조건이 골조라 L03 배정. 후보 ★3.
  tier: star_3
  mechanism_primary: "접선 y=m(x-a)+a → D=0 → m 의 이차방정식 → 근의 곱 = -1 로 a → 근의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/06.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.11월 고1 26번 · legacy tier star_5 · 통찰형 depth 3) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수 계수 p,q(y=x²+px+q) 와 점 (a,a) 의 형태(예: (a,2a), (a,0))를 바꿀 수 있음. 제약: D=0 이 m 의 이차식이 되고 근의 곱 = -1 조건이 a 의 일차식이 되도록(x² 계수 1 유지), 두 접선이 실제로 존재하려면 점이 포물선 바깥(a < a²-4a+10, 즉 D>0)이어야 함 — 답 검산 필수. 답(합)이 정수가 되도록 p 선택."
    creative: "(1) '수직' 을 '기울기 곱이 -2' 또는 '기울기 합이 k' 로 바꾸면 같은 골조 ★3 (2) 두 접점의 x 좌표 곱을 물으면 접점 = m 의 함수 → 한 단계 추가 ★4 (3) 곡선을 원으로 바꾸면 R06(원 밖 접선)과 동형이 되어 판별식 대신 중심-거리로 풀림 ★3 (4) 점을 y=x 위가 아니라 (a, 2a+1) 로 두면 자유도 동일·계산만 증가."
```
```yaml
- id: 정의여고-1-2중간-07
  page: 2
  vendor_label: "2025 교육청 고1 10월 11번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 (m,-m) 과 직선 3x+y+3=0 사이의 거리 d₁, 점 (0,5) 와 같은 직선 사이의 거리 d₂ 에 대하여 d₁<d₂ 인 정수 m 의 개수. 5지선다.
  category: "점-직선 거리 → 절댓값 부등식 → 정수 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 직선이라 분모 √10 이 약분되어 |2m+3|<8 → -11/2<m<5/2 → 정수 8개. 절댓값 부등식과 경계 세기(T-경계)가 유일한 걸림돌. L04 base ★3 이나 통찰 없음·M_total 5 → effective ★2 = 3점 라벨.
  tier: star_2
  mechanism_primary: "d₁, d₂ 공식 → 공통 분모 약분 → |2m+3|<8 → 정수 m 세기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 계수·고정점 (0,5)·동점의 형태 (m,-m) 을 바꿀 수 있음. 제약: 부등식 양 끝이 정수가 아니도록(경계 포함 여부 함정 유지) 하거나 반대로 정수로 만들어 '≤' 와 '<' 구별 함정을 넣을 수 있음. 정수 개수가 선택지 간격(2)과 맞게."
    creative: "(1) d₁<d₂ 를 d₁=2d₂ 로 바꾸면 절댓값 방정식 두 해 → ★2 (2) 동점을 (m, m²) 으로 바꾸면 이차부등식 결합 ★3 (3) '정수 m 의 개수' 대신 'd₁ 의 최솟값' 을 물으면 m 실수 범위에서 0(직선 위)임을 알아채는 I-EQV 추가 ★2 (4) 두 직선이 다르면 분모가 안 약분되어 √ 부등식 → 계산 마찰만 증가(질 저하)."
```
```yaml
- id: 정의여고-1-2중간-08
  page: 3
  vendor_label: "2024 교육청 고1 9월 13번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 (1,3) 을 지나고 기울기 k 인 직선과 원점 사이의 거리가 √5 일 때 양수 k. 5지선다.
  category: "점-기울기형 → 원점 거리 → k 의 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    kx-y+3-k=0 에 거리 공식 → (3-k)²=5(k²+1) → 2k²+3k-2=0 → k=1/2 (양수). 제곱·정리·인수분해의 표준 절차. effective ★2 = 3점 라벨.
  tier: star_2
  mechanism_primary: "kx-y+(3-k)=0 → |3-k|/√(k²+1)=√5 → 제곱 → 2k²+3k-2=0 → 양수 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "통과점 (x₀,y₀) 와 거리 d 를 바꿀 수 있음. 제약: (y₀-kx₀)²=d²(k²+1) 가 k 의 이차식에서 인수분해되도록 d² ≤ x₀²+y₀²(점이 원점에서 d 이상 떨어져야 접선 존재) 이고 판별식이 완전제곱. 두 근 중 부호 조건으로 하나 고르는 구조 유지."
    creative: "(1) '원점' 을 다른 점으로 바꾸면 같은 골조 ★2 (2) 조건을 '원 x²+y²=5 에 접한다' 로 바꾸면 R06 과 동형 ★2~3 (3) 두 근을 모두 살려 '두 직선이 이루는 각·두 직선과 x축이 만드는 삼각형 넓이' 를 물으면 ★3 (4) 통과점을 (a,3) 매개로 두고 'k 가 존재하지 않는 a 의 범위' 를 물으면 I-BW → ★3~4."
```
```yaml
- id: 정의여고-1-2중간-09
  page: 3
  vendor_label: "2024 교육청 고1 9월 26번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    직선 l₁: x-2y-2=0 과 평행하고 y 절편이 양수인 l₂. l₁ 의 x·y 절편 A, B 와 l₂ 의 x·y 절편 C, D 에 대하여 사각형 ADCB 의 넓이가 25 일 때 두 직선 사이 거리 d 의 제곱. 그림 제공. 단답형.
  category: "평행선 절편 사각형 → 대각선 수직 넓이 → 상수 결정 → 평행선 거리"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 절편이 두 좌표축 위 → 사각형 ADCB 의 대각선 AC(x축)·BD(y축)가 수직 → 넓이 = AC·BD/2 = (c+2)²/4 (신발끈 없이 처리)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행한 두 직선 사이의 거리 = l₁ 위 한 점(또는 상수항 차)과 l₂ 의 거리 → |−2−8|/√5 → d²=20"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l₂: x-2y+c=0 으로 두면 절편이 c 의 일차식이라 넓이가 (c+2)²/4 로 닫힌다. 대각선 수직 넓이 공식과 평행선 거리를 점-직선 거리로 바꾸는 두 번의 가벼운 번역. 학평 26번 단답 4점 → ★3 · L04 base ★3 정합.
  tier: star_3
  mechanism_primary: "l₂: x-2y+c=0 → 절편 A,B,C,D → 대각선 수직 사각형 넓이 (c+2)²/4=25 → c=8 → 평행선 거리 |c₁-c₂|/√(a²+b²) → d²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$20$"
  answer_source: "답지"
  figure: crop:fig-09.png
  latex: latex-bank/jeongui-1-2-mid/items/09.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2024.9월 고1 26번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l₁ 의 계수(a,b,c₁)와 넓이 S 를 바꿀 수 있음. 제약: 넓이 = (1/2)·|x절편차|·|y절편차| 가 c 의 완전제곱 꼴이 되려면 l₁ 과 l₂ 가 같은 기울기라 항상 (c₁+c₂ 관련)² 꼴 → S 를 제곱수 관련 값으로. d² 가 정수가 되도록 a²+b² 가 (c₂-c₁)² 을 나누게 함. y 절편 양수 조건으로 c 의 부호 하나 고정(기각 분기 유지)."
    creative: "(1) 넓이 대신 '사각형 ADCB 의 둘레' 를 물으면 거리 공식 4회 → 계산 마찰(질 저하) (2) l₂ 가 l₁ 에 수직인 직선으로 바꾸면 절편 사각형이 다른 모양 → 신발끈 필요 ★3 (3) 넓이 조건을 '삼각형 OCD 넓이 = 삼각형 OAB 넓이의 4배' 로 바꾸면 닮음비 → I-RT d1 유지 ★3 (4) 단답 대신 '두 직선 사이 거리가 2√5 일 때 넓이' 로 역전하면 T-부호(c 두 해) 분기 → ★3."
```
```yaml
- id: 정의여고-1-2중간-10
  page: 4
  vendor_label: "2023 교육청 고1 9월 14번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    점 A(a,6) (a>0) 과 두 점 (6,0), (0,3) 을 지나는 직선 l. l 위의 두 점 B, C 와 제1사분면의 점 D 로 정사각형 ABCD 를 만들 때 넓이가 81/5 이면 a. 그림 제공. 5지선다.
  category: "정사각형 한 변 = 점-직선 거리 → 넓이 → a"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B, C 가 l 위이고 ABCD 정사각형 → 변 AB ⟂ l → 한 변의 길이 = A 와 l 사이의 거리 (B, C, D 좌표를 구하지 않음)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l: x+2y-6=0, 거리 (a+6)/√5, 넓이 (a+6)²/5=81/5 → a=3. 그림에서 '변 = 거리' 를 읽으면 한 줄, 못 읽고 B, C 좌표를 잡으면 미지수가 셋으로 불어남. 학평 14번 4점 → ★3 · L04 base ★3 정합.
  tier: star_3
  mechanism_primary: "직선 l 의 방정식 → 정사각형 변 = A 와 l 의 거리 (a+6)/√5 → 거리² = 넓이 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-10.png
  latex: latex-bank/jeongui-1-2-mid/items/10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 절편 (p,0),(0,q), A 의 y 좌표, 넓이 S 를 바꿀 수 있음. 제약: 거리² = S 에서 |a·q + 6p - pq|²/(p²+q²) = S 가 a 의 일차식 제곱 → S·(p²+q²) 가 완전제곱. a>0 조건과 A 가 l 위쪽(제1사분면 D 존재)에 있도록 부호 확인."
    creative: "(1) 정사각형 → 정삼각형(한 변이 l 위) 으로 바꾸면 높이 = 거리 → 변 = 2h/√3, 넓이 공식 결합 ★3 (2) 넓이 대신 '점 D 의 좌표' 를 물으면 수선의 발·벡터 이동이 필요 → L13 결합 ★4 (3) A 가 직선 y=2x 위를 움직일 때 넓이 최소를 물으면 이차함수 결합 ★3~4 (4) l 을 매개변수 직선으로 두면 자유도 재배치."
```
```yaml
- id: 정의여고-1-2중간-11
  page: 4
  vendor_label: "2023 교육청 고1 9월 17번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    ∠A=∠B=90°, AB=4, BC=8 인 사다리꼴 ABCD 에서 AD 를 2:1 로 내분하는 점 P. 두 직선 AC, BP 가 점 Q 에서 수직으로 만날 때 삼각형 AQD 의 넓이. 그림 제공. 5지선다.
  category: "도형 좌표화 → 수직 조건으로 미지 변 결정 → 교점 → 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌표 없는 사다리꼴에 B 원점·BA 를 y축·BC 를 x축으로 좌표를 부여하고 D(d,4) 한 미지수로 도형을 표현"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AC ⟂ BP ⇔ 기울기 곱 -1: (-1/2)(6/d) = -1 → d=3 (P=(2d/3,4))"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표화 뒤에는 수직 조건(d=3) → 두 직선 교점 Q(8/5,16/5) → 밑변 AD=3·높이 4/5 로 넓이 6/5. 좌표 설정이 통찰이고 나머지는 절차. 학평 17번 4점이지만 계산이 짧아 ★3 · L03 base ★3 정합.
  tier: star_3
  mechanism_primary: "B 원점 좌표화 → D(d,4), P(2d/3,4) → AC ⟂ BP 로 d → 교점 Q → △AQD = AD·(4-y_Q)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-11.png
  latex: latex-bank/jeongui-1-2-mid/items/11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, BC 길이와 내분비 m:n 을 바꿀 수 있음. 제약: 수직 조건 (-AB/BC)·(AB/(m·d/(m+n))) = -1 에서 d = AB²(m+n)/(BC·m) 이 양수이고 d<BC(사다리꼴 유지 · 그림처럼 AD<BC). 교점 좌표가 간단한 분수가 되도록 AB·BC 를 짝수 배로."
    creative: "(1) 수직 조건 대신 'Q 가 BP 를 1:2 로 내분' 조건으로 바꾸면 내분점 + 공선 → C04 결합 ★3 (2) 묻는 값을 '삼각형 AQD 넓이' 대신 'QC 의 길이' 로 바꾸면 거리 공식 한 줄 추가 ★3 (3) 사다리꼴을 직사각형+한 점 이동으로 바꾸면 좌표화 통찰이 얕아져 ★2~3 (4) AB, BC 를 매개변수로 두고 '수직이 되는 AD 의 길이' 를 일반식으로 물으면 I-BW ★4."
```
```yaml
- id: 정의여고-1-2중간-26
  page: 9
  vendor_label: "2024 교육청 고1 10월 26번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    두 직선 y=2x+6, y=-2x+6 에 모두 접하고 점 (2,0) 을 지나는 서로 다른 두 원의 중심 O₁, O₂ 사이의 거리. 단답형.
  category: "두 직선 등거리 → 대칭축(각의 이등분선) 위 중심 → 접함·통과 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 직선이 y축 대칭이고 점 (2,0) 이 두 직선 아래 영역 → 중심은 그 영역의 각의 이등분선 = y축 위 (0,c) 한 미지수로 축소"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접함 ⇔ 중심-직선 거리 = 반지름 = 중심-(2,0) 거리: (6-c)²/5 = 4+c² → c²+3c-4=0"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다른 이등분선 y=6 위 중심(좌우 영역)은 점 (2,0) 을 지날 수 없음을 확인·기각 → 두 원은 c=1, c=-4 로 확정 → 거리 5"
  insight_count: 3
  depth_score: 5.33
  type_id: CM2-GM-L07
  base_star: 4
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    '두 직선에 접한다' 를 '두 직선에서 등거리 → 이등분선 위' 로 번역하는 L07 골조. 여기서는 대칭으로 이등분선이 y축이라 계산이 가볍지만, 어느 이등분선인지(영역 판정)와 해가 둘인 구조를 학생이 스스로 정리해야 한다. 학평 26번 단답 4점 → ★4 · L07 base ★4 정합. 프린트는 원 단원에 배치.
  tier: star_4
  mechanism_primary: "두 직선의 대칭축(y축) 위 중심 (0,c) → 접함: 거리 = r → 통과: r² = 4+c² → c 의 이차방정식 두 해 → 중심 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 기울기 ±m, 교점 (0,p), 통과점 (q,0) 을 바꿀 수 있음. 제약: (p-c)²/(m²+1) = q²+c² 가 c 의 이차식으로 인수분해되도록(판별식 완전제곱), 두 근 모두 통과점이 있는 영역(c<p)에 있어야 두 원 존재. 중심 거리 = |c₁-c₂| 가 정수."
    creative: "(1) 통과점을 y축 위 (0,q) 로 옮기면 여전히 y축 위 중심 → 같은 골조 (2) 두 직선을 대칭이 아닌 일반 위치로 바꾸면 이등분선을 등거리식으로 직접 유도해야 함 → L07 본연 ★4~5 (3) '두 원의 반지름 곱' 이나 '두 원의 공통현 길이' 로 묻기를 바꾸면 R10 결합 ★4 (4) 통과점 대신 '반지름이 √5' 로 바꾸면 c 의 절댓값 방정식 → T-부호 분기 ★3."
```

### 원의 방정식

```yaml
- id: 정의여고-1-2중간-12
  page: 4
  vendor_label: "2023 교육청 고1 9월 11번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    이차함수 y=x²-4x+a 의 꼭짓점 A 가 원 x²+y²+bx+4y-17=0 의 중심과 일치할 때 a+b. 5지선다.
  category: "꼭짓점 좌표 = 원의 중심(일반형 → 표준형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    꼭짓점 (2,a-4), 중심 (-b/2,-2) 대응 → b=-4, a=2. 완전제곱 두 번. R01 base ★2, 통찰 없음·M_total 4 → effective ★1 이나 학평 3점 11번이라 라벨 ★2(YELLOW · 두 도형의 표준형 변환을 함께 요구).
  tier: star_2
  mechanism_primary: "이차함수 완전제곱 → 꼭짓점 → 원 일반형 완전제곱 → 중심 → 성분 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수 x 계수(짝수 유지), 원의 y 계수(짝수), 상수항을 바꿀 수 있음. 제약: 원이 실제 원이 되도록 (b/2)²+(y계수/2)²-c > 0 검산. a+b 가 선택지 등차(−1~−5)와 맞도록."
    creative: "(1) '중심과 일치' 를 '원 위에 있다' 로 바꾸면 대입 → 이차방정식 ★2 (2) '원의 반지름이 이차함수의 최솟값과 같다' 로 바꾸면 조건 두 개 연립 ★3 (3) 꼭짓점 대신 'y 절편' 으로 바꾸면 계산 최소 ★1 (4) 중심이 이차함수 그래프 위를 움직일 때 원이 원점을 지나는 조건 등으로 확장하면 I-BW ★3."
```
```yaml
- id: 정의여고-1-2중간-13
  page: 5
  vendor_label: "2022 교육청 고2 3월 25번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    곡선 y=x²-x-1 위의 제2사분면 점을 중심으로 하고 x축·y축에 동시에 접하는 원 x²+y²+ax+by+c=0 의 a+b+c. 그림 제공. 단답형.
  category: "두 축 접함 → 중심 (-r, r) → 곡선 위 조건 → 일반형 계수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제2사분면 + 두 축 접함 → 중심 (-r,r) 는 R03 의 본질 통찰(카탈로그 명시)이라 별도 통찰로 세지 않음. r = r²+r-1 → r=1 → (x+1)²+(y-1)²=1 전개. 사분면 부호(T-부호) 하나. 3점 → ★2, base ★3 에서 -1.
  tier: star_2
  mechanism_primary: "제2사분면·두 축 접함 → 중심 (-r,r) → 곡선 대입 r=r²+r-1 → r=1 → 표준형 전개 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: crop:fig-13.png
  latex: latex-bank/jeongui-1-2-mid/items/13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=x²+px+q 로, 사분면을 바꿀 수 있음. 제약: 중심 (±r,±r) 대입식 r = r²±pr+q (부호는 사분면에 따라) 가 양의 정수 근 하나만 갖도록(다른 근은 음수 또는 사분면 위배 → 기각 분기 유지 가능). 곡선이 해당 사분면을 실제로 지나는지 그림으로 검산."
    creative: "(1) 사분면을 제4사분면으로 바꾸면 중심 (r,-r) → 골조 동일 ★2 (2) '두 축에 접한다' 를 'x축에 접하고 y축과 만나는 현의 길이가 2' 로 바꾸면 R08 결합 ★3 (3) 곡선 위 중심이 두 개 이상 가능하게 만들어 '모든 원의 넓이 합' 을 물으면 I-MI ★3 (4) 곡선을 직선으로 바꾸면 ★1~2."
```
```yaml
- id: 정의여고-1-2중간-14
  page: 5
  vendor_label: "2024 교육청 고1 10월 10번 [3점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    중심이 원점이고 직선 y=-2x+k 와 만나는 원 중 넓이가 최소인 원 C 의 넓이가 45π 일 때 양의 상수 k. 5지선다.
  category: "만나는 원 중 최소 = 접하는 원 → r = 중심-직선 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'직선과 만나는 원 중 넓이 최소' ⇔ 직선에 접하는 원 ⇔ r = |k|/√5"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건을 '접한다' 로 번역하면 πk²/5=45π → k=15 한 줄. 번역 자체가 유일한 관문이라 벤더가 3점인데도 Lv3 을 붙였다. 카탈로그 R04 base ★3 + 통찰 1 → effective ★3, 벤더 Lv3 과 정합해 라벨 ★3(학평 3점 관행 ★2 와는 1단 차이).
  tier: star_3
  mechanism_primary: "만나는 원 중 최소 넓이 ⇔ 접함 → r = 원점-직선 거리 = k/√5 → πr² = 45π → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기 m, 넓이 Sπ 를 바꿀 수 있음. 제약: k² = S(m²+1) 가 완전제곱 → S 를 (m²+1)·(정수)² 로. 중심을 (p,q) 로 옮기면 |mp-q+k| 절댓값 두 해 → 양수 조건으로 하나 선택."
    creative: "(1) '넓이 최소' 를 '원 위의 점 중 직선까지 거리의 최댓값이 3√5' 로 바꾸면 R12 골조 ★3 (2) '만나는 원 중 최소' 대신 '만나지 않는 원 중 넓이 최대' 로 바꾸면 경계(접함 포함 여부) 함정 T-경계 ★3 (3) 직선을 매개변수 y=mx+5 로 두고 '넓이 최소 원의 넓이의 최댓값' 을 물으면 m 함수 최적화 → I-BW ★4 (4) 넓이 대신 접점 좌표를 물으면 수선의 발(L13) 결합 ★3."
```
```yaml
- id: 정의여고-1-2중간-16
  page: 5
  vendor_label: "2024 교육청 고2 3월 13번 [3점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 (x-2)²+(y-3)²=r² 과 직선 y=x+5 가 두 점 A, B 에서 만나고 AB=2√2 일 때 양수 r. 5지선다.
  category: "현의 길이 → 중심-직선 거리 → 피타고라스"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    d = |2-3+5|/√2 = 2√2, r² = d² + (AB/2)² = 8+2 = 10. 현의 길이 공식은 R08 의 본질 통찰이라 별도로 세지 않음. 카탈로그 base ★4 에서 통찰 없음·M_total 4 로 -1 → effective ★3 = 벤더 Lv3 라벨. 학평 3점 관행보다 1단 높지만 벤더 라벨과 카탈로그가 일치.
  tier: star_3
  mechanism_primary: "중심-직선 거리 d → r² = d² + (현/2)² → r"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (p,q), 직선 y=x+n, 현 길이 2h 를 바꿀 수 있음. 제약: d² = (p-q+n)²/2 가 정수 또는 반정수, r² = d²+h² 가 선택지의 √ 안 정수. d>0 (직선이 중심을 지나면 현 = 지름이 되어 함정)."
    creative: "(1) r 을 주고 현의 길이를 묻는 역방향 ★2 (2) 현 AB 를 밑변으로 하는 삼각형 ABC(중심 C) 넓이를 물으면 d·h 결합 ★3 (3) 직선을 y=x+n 으로 매개화하고 '현의 길이가 2√2 이하가 되는 정수 n 의 개수' 로 바꾸면 절댓값 부등식 + T-경계 ★3~4 (4) 두 원의 공통현으로 바꾸면 R10 ★4."
```
```yaml
- id: 정의여고-1-2중간-17
  page: 6
  vendor_label: "2023 교육청 고1 9월 19번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    기울기 2 인 직선 l 이 원 x²+y²=10 과 제2사분면 A, 제3사분면 B 에서 만나고 AB=2√5. 직선 OA 와 원의 다른 교점 C 를 지나고 x축에 평행한 직선이 l 과 만나는 점 D(a,b) 의 a+b. 그림 제공. 5지선다.
  category: "현 길이 → 절편 결정(부호) → 원점 대칭 교점 → 평행선 교점"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=2√5 → 중심-직선 거리² = 10-5 = 5 → |c|/√5 = √5 → |c|=5 (l: y=2x+c)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "c=±5 중 A 가 제2사분면·B 가 제3사분면이 되는 c=5 만 유효(c=-5 는 교점이 제1·4사분면) → A(-1,3), B(-3,-1)"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 OA 는 중심을 지나므로 다른 교점 C 는 A 의 원점 대칭점 (1,-3) — 교점 계산 생략"
  insight_count: 3
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    현의 길이로 절편, 사분면으로 부호, 원점 대칭으로 C, y=-3 과 l 의 교점으로 D(-4,-3). 단계마다 얕은 번역이 하나씩 붙는 다단계 구성. 학평 19번 4점 → ★4 · R08 base ★4 정합.
  tier: star_4
  mechanism_primary: "현 길이 → |c|=5 → 사분면으로 c=5 → 교점 A, B → C = -A → y=y_C 와 l 의 교점 D → a+b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-17.png
  latex: latex-bank/jeongui-1-2-mid/items/17.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.9월 고1 19번 · legacy tier star_5 · depth 3) → 본 판정 ★4"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 반지름² R, 기울기 m, 현 길이 2h 를 바꿀 수 있음. 제약: c² = (R-h²)(m²+1) 가 완전제곱, 교점 x 좌표가 정수(판별식 완전제곱: (m²+1)x²+2mcx+c²-R=0), A·B 사분면 조건이 부호 하나만 남기도록. C 는 -A 로 자동 정수."
    creative: "(1) 'x축에 평행' 을 'y축에 평행' 으로 바꾸면 D 의 x 좌표가 C 와 같아짐 → 골조 동일 ★4 (2) C 를 'A 에서 원에 그은 접선과 l 의 교점' 으로 바꾸면 R05 결합 ★4 (3) 사분면 조건을 없애고 '가능한 a+b 의 모든 값의 합' 으로 바꾸면 I-MI(두 부호 모두 계산) ★4 (4) 원점 대칭 단계를 없애고 C 대신 B 를 쓰면 ★3."
```
```yaml
- id: 정의여고-1-2중간-18
  page: 6
  vendor_label: "2026 교육청 고2 3월 17번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 C: (x-3)²+(y-3)²=9 와 직선 y=mx (0<m<1). 중심 A 에서 직선에 내린 수선의 발 H, 직선과 원의 교점 중 원점에 가까운 점 B 에 대하여 OH:BH=√3:1 일 때 m. 그림 제공. 5지선다.
  category: "수선의 발 거리 d 하나로 OH·BH 표현 → 비 조건 → d² → m 의 이차방정식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OH² = OA² - d², BH² = r² - d² (같은 직각삼각형 밑변) → OH:BH=√3:1 을 d 하나의 방정식 18-d² = 3(9-d²) 로 통합 → d²=9/2"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "d² = 9(1-m)²/(m²+1) = 9/2 → m²-4m+1=0 → m = 2±√3 중 0<m<1 인 2-√3 채택·2+√3 기각"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    비 조건을 좌표로 직접 쓰면 B 의 좌표에 √ 가 들어가 막힌다. OH 와 BH 를 모두 '수선의 발 거리 d' 로 표현하는 통합이 열쇠이고, 이후 점-직선 거리로 m 의 이차식. 학평 17번 4점 → ★4 · R08(현·중심거리) base ★4 정합.
  tier: star_4
  mechanism_primary: "d = 중심-직선 거리 → OH² = OA²-d², BH² = r²-d² → 비 조건 → d² → 거리 공식 → m 의 이차방정식 → 범위로 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-18.png
  latex: latex-bank/jeongui-1-2-mid/items/18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (p,p) 와 r, 비 √k:1 을 바꿀 수 있음. 제약: OA² - d² = k(r² - d²) 에서 d² = (kr² - OA²)/(k-1) 이 0 < d² < r² 이어야 두 교점 존재, 그 뒤 (p-pm)²/(m²+1) = d² 가 m 의 이차식으로 √ 를 포함한 선택지 형태 유지. 0<m<1 조건이 한 근만 남기도록 검산."
    creative: "(1) 비 조건을 'OB = BH' 또는 'OB:BH' 로 바꾸면 OB = OH-BH 한 단계 추가 ★4 (2) 원이 두 축에 접하는 설정을 풀고 중심을 (3,4) 로 바꾸면 대칭이 깨져 계산량만 증가 (3) 'OH:BH' 를 '삼각형 OAB 의 넓이' 조건으로 바꾸면 (1/2)·OB·d 결합 ★4 (4) m 을 주고 비를 묻는 역방향 ★3."
```
```yaml
- id: 정의여고-1-2중간-19
  page: 7
  vendor_label: "2025 교육청 고1 10월 28번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    x축과 A, B, y축과 C, D 에서 만나는 원 O. (가) AB 를 1:4 로 내분하는 점이 CD 의 중점, (나) 직선 4x-3y+13=0 에 접함. 사각형 ACBD 의 넓이. 단답형.
  category: "다층 조건 → 축 위 점 일치 = 원점 → 중심 x축 → 내분비로 중심·반지름 관계 → 접선 조건"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(가) AB 위 점(x축)과 CD 의 중점(y축 위)이 같은 점 → 원점 → CD 의 중점이 원점이면 중심의 y 좌표 0 → 중심 (p,0)"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A(p-r,0), B(p+r,0) 의 1:4 내분점 (p-3r/5, 0) = 원점 → p = 3r/5"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(나) 접함 ⇔ |4p+13|/5 = r → 12r/5+13 = 5r → r=5, p=3"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값의 다른 부호(4p+13 = -5r)는 r<0 → 기각 → A(-2,0), B(8,0), C(0,-4), D(0,4) → 넓이 = 10·8/2 = 40"
  insight_count: 4
  depth_score: 5.25
  type_id: CM2-GM-R15
  base_star: 5
  effective_star: 5
  star: 4
  premium: false
  rationale: |
    원의 자유도 3(p,q,r)을 (가) 가 두 개(q=0, p=3r/5), (나) 가 하나 줄이는 자유도 제거 구조. (가) 의 '두 축 위 점의 일치 = 원점' 을 읽는 것이 진입 장벽이고 그 뒤는 절차. 학평 28번 4점이지만 벤더 Lv3 이고 통찰 깊이가 2 를 넘지 않아 라벨 ★4.
    [분류 이슈] R15(원·매개변수·다층 조건 · base 5) 배정 시 effective ★5 vs 라벨 ★4(벤더 Lv3 · max depth 2). R03/R04 배정 시 base 3 으로 반대 방향 드리프트. 후보 ★4/★5.
  tier: star_4
  mechanism_primary: "(가) 축 위 두 점 일치 = 원점 → 중심 (p,0) → 1:4 내분 → p=3r/5 → (나) 접함 거리 = r → r=5 → 대각선 수직 사각형 넓이 AB·CD/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$40$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비 m:n, 접선 직선 ax+by+c=0 을 바꿀 수 있음. 제약: p = r(n-m)/(m+n) (m<n 이면 p>0), |ap+c|/√(a²+b²) = r 이 r 의 일차식으로 양의 정수 해 하나, CD = 2√(r²-p²) 가 정수(피타고라스 삼조 (p, CD/2, r)). 사각형 넓이 = 2r·2√(r²-p²)/2 정수."
    creative: "(1) (가) 를 'CD 를 1:4 로 내분하는 점이 AB 의 중점' 으로 바꾸면 중심이 y축 위 → 대칭 골조 ★4 (2) (나) 를 '점 (7,3) 을 지난다' 로 바꾸면 접선 대신 통과 → 이차식이지만 골조 동일 ★4 (3) (가) 의 비를 매개변수로 두고 '넓이가 최대인 비' 를 물으면 I-BW ★5 (4) 내분점 = 원점 인식을 없애고 좌표를 직접 주면 ★3."
```
```yaml
- id: 정의여고-1-2중간-20
  page: 7
  vendor_label: "2024 교육청 고2 3월 19번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(0,6), B(9,0) 에 대하여 AB 를 2:1 로 내분하는 점 P. 원 x²+y²-2ax-2by=0 과 직선 AB 가 P 에서만 만날 때 a+b. 5지선다.
  category: "한 점에서만 만남 = 접함 → 중심-접점 ⟂ AB + 접점 통과 연립"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'P 에서만 만난다' ⇔ AB 가 P 에서 접함 ⇔ 중심 (a,b) 와 P(6,2) 를 잇는 선분이 AB 에 수직 → 3a-2b=14"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P 가 원 위 (3a+b=10) 와 수직 조건을 연립 → a=34/9, b=-4/3 (원점 통과는 방정식 형태에 이미 내장)"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내분점 P(6,2) 는 절차, '한 점에서만' 을 접함으로 읽고 중심-접점 수직을 세우는 것이 관문. 판별식 갈래(직선을 원에 대입해 중근)도 가능하지만 수직 갈래가 훨씬 짧다. 학평 19번 4점이나 고2 3월(복습 범위)·계산 짧음 → ★3 · R04 base ★3 정합.
  tier: star_3
  mechanism_primary: "내분점 P → 접함 ⇔ (중심-P) ⟂ AB → 기울기 곱 -1 식 + P 대입식 연립 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/20.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2024.3월 고2 19번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A(0,α), B(β,0), 내분비를 바꿀 수 있음. 제약: P 좌표 정수, 연립 해 a, b 가 분모 작은 유리수(선택지 /9 꼴처럼). 원이 원점을 지나는 형태(상수항 0)를 유지하면 미지수 2개로 닫힘; 상수항 c 를 두면 조건 하나 더 필요."
    creative: "(1) 원점 통과 대신 '반지름이 √5' 로 바꾸면 미지수 3개·조건 3개 → 계산 증가 ★3~4 (2) '접한다' 를 직접 쓰면 통찰이 얕아져 ★2~3 (3) 접점 P 를 매개변수 t:1-t 내분으로 두고 '원의 넓이 최소인 t' 를 물으면 I-BW ★4 (4) 판별식 중근 갈래로만 풀리게 직선을 y=kx 로 바꾸면 I-SC 대비 소재."
```
```yaml
- id: 정의여고-1-2중간-21
  page: 7
  vendor_label: "2023 교육청 고1 11월 14번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 C: x²+y²-2x-ay-b=0 의 중심이 직선 y=2x-1 위에 있고, 원과 이 직선의 두 교점 A, B 와 원 위의 점 P 에 대하여 삼각형 ABP 의 넓이의 최댓값이 4 일 때 a+b. 5지선다.
  category: "중심 통과 직선 → 지름 → 넓이 최대 = r² → 계수 결정"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심 (1, a/2) 가 y=2x-1 위 → a=2, 그리고 직선이 중심을 지나므로 AB 는 지름(2r)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 최대 ⇔ P 가 AB 에서 가장 먼 점 ⇔ 높이 = r → 최댓값 (1/2)(2r)(r) = r² = 4 → r² = 1+1+b → b=2"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-R13
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    R13(원 위 점·삼각형 넓이 최대)의 본질은 '높이 = 중심-현 거리 + r' 인데 여기서는 현이 지름이라 거리 0 → 최대 넓이 = r² 로 단순화된 형태. 지름 인식 뒤 계산이 한 줄이라 학평 14번 4점 위치와 함께 ★3. 카탈로그 base ★4 → effective ★4 와 1단 차이(YELLOW).
  tier: star_3
  mechanism_primary: "중심 조건 → a → 직선이 중심 통과 → AB = 지름 → 최대 넓이 = r² = 4 → r² 식으로 b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/21.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.11월 고1 14번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=mx+n, 원의 x 계수, 최대 넓이 S 를 바꿀 수 있음. 제약: 중심 (p, a/2) 가 직선 위 → a 정수(짝수 배려), r² = S 로 b = S - p² - (a/2)² 가 정수. b > -(p²+(a/2)²) 검산(실제 원)."
    creative: "(1) 직선이 중심을 지나지 않도록 y=2x+1 로 바꾸면 최대 높이 = d + r 본연의 R13 ★4 (2) '넓이의 최댓값' 을 '최댓값과 최솟값의 합' 으로 바꾸면 최솟값 = 0 근접(P→A) 경계 함정 T-경계 (3) 넓이 최대 P 의 좌표를 물으면 23번 골조 결합 ★3~4 (4) a, b 를 주고 최대 넓이를 묻는 역방향 ★2."
```
```yaml
- id: 정의여고-1-2중간-22
  page: 7
  vendor_label: "2024 교육청 고1 9월 9번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 A(5,5) 와 원 x²+y²=8 위의 점 P 에 대하여 AP 의 최솟값. 5지선다.
  category: "원 밖 점과 원 위 점 거리 최소 = 중심 거리 - r"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OA = 5√2, r = 2√2 → 3√2. R12 본질 공식 한 줄. base ★3 에서 통찰 없음·M_total 3 로 -1 → effective ★2 = 3점 라벨.
  tier: star_2
  mechanism_primary: "중심-A 거리 - 반지름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 좌표, 원 중심·반지름을 바꿀 수 있음. 제약: 중심-A 거리와 r 이 같은 근호(예: k√2)로 정리되어 선택지 형태 유지. A 가 원 밖(거리 > r)이어야 최소 = 거리 - r; 원 안이면 r - 거리 (함정 변형)."
    creative: "(1) 최솟값 → 최댓값(거리 + r) 또는 '최댓값과 최솟값의 곱'(= OA² - r²) 으로 바꾸면 ★2 (2) A 를 원 안의 점으로 두면 T-부호 함정 ★2 (3) A 가 직선 y=x 위를 움직일 때 AP 최솟값의 최솟값 등으로 확장하면 ★3 (4) P 대신 '원 위 두 점 P, Q 에 대하여 AP+AQ' 로 바꾸면 I-MI."
```
```yaml
- id: 정의여고-1-2중간-23
  page: 8
  vendor_label: "2025 교육청 고2 3월 12번 [3점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 C: x²+y²-4y=0 위의 점 P 와 두 점 A(2,-2), B(5,1) 에 대하여 삼각형 PAB 의 넓이가 최대가 되는 P 의 x 좌표. 5지선다.
  category: "넓이 최대 P = 중심에서 AB 에 수직인 방향으로 r 만큼 (먼 쪽)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 최대 ⇔ P 가 직선 AB(x-y-4=0)에서 가장 먼 원 위 점 ⇔ 중심 (0,2) 를 지나고 AB 에 수직인 직선 y=-x+2 와 원의 교점 중 AB 반대쪽 → P(-√2, 2+√2)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R13
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    R13 이 보통 최대 넓이 값을 묻는데 이 문항은 최대가 되는 P 의 좌표를 물어 '중심 + 법선 방향 r' 로 P 를 잡는 한 단계가 있다. 먼 쪽·가까운 쪽 선택(T-부호). 학평 3점 12번 → ★3 · R13 base ★4 와 1단 차이(YELLOW).
  tier: star_3
  mechanism_primary: "직선 AB 의 방정식 → 중심에서 AB 에 수직인 직선 → 원과의 두 교점 → AB 에서 먼 쪽 P → x 좌표"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 중심·반지름, A·B 좌표(기울기 ±1 유지 시 법선이 y=∓x+k 로 깔끔)를 바꿀 수 있음. 제약: 수직선과 원의 교점이 (±r/√2 이동) 꼴로 선택지에 √ 가 하나만 들어가도록 기울기 ±1 권장. 중심이 AB 위에 있지 않도록(있으면 두 점 모두 최대)."
    creative: "(1) x 좌표 대신 최대 넓이 값을 물으면 표준 R13 ★3 (2) '최대' 를 '최소' 로 바꾸면 가까운 쪽 교점 → 부호만 반전 ★3 (3) AB 기울기를 일반값으로 바꾸면 법선 방향 단위벡터 계산 필요 → 마찰 증가 (4) A, B 중 하나를 원 위 점으로 두면 현·원주각 결합 ★4."
```
```yaml
- id: 정의여고-1-2중간-24
  page: 8
  vendor_label: "2024 교육청 고1 9월 16번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 C: (x-a)²+(y-a)²=10 의 중심과 직선 y=2x 사이 거리가 √5 이고 직선 y=kx 가 C 에 접할 때 k (a>0, 0<k<1). 그림 제공. 5지선다.
  category: "점-직선 거리로 중심 결정 → 접함 거리 = r → k 의 이차방정식 → 범위 선택"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3k²-10k+3=0 의 두 근 1/3, 3 중 0<k<1 인 1/3 만 채택 (그림의 아래쪽 접선)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |2a-a|/√5 = √5 → a=5, 이어서 |5k-5|/√(k²+1) = √10 을 제곱해 정리. 거리 공식 두 번과 이차방정식 인수분해의 절차가 대부분이고 범위 선택만 판단. 학평 16번 4점이지만 절차 위주라 ★3 · R06 base ★3 정합.
  tier: star_3
  mechanism_primary: "거리 조건으로 a → 접함: 중심-y=kx 거리 = √10 → 제곱 정리 → 3k²-10k+3=0 → 범위로 k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-24.png
  latex: latex-bank/jeongui-1-2-mid/items/24.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2024.9월 고1 16번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 직선 기울기 m₁, 거리 d₁, 반지름² R 을 바꿀 수 있음. 제약: a = d₁√(m₁²+1)/|m₁-1| 정수, 접선 조건 (a k - a)² = R(k²+1) 가 k 의 이차식에서 인수분해(두 근이 서로 역수 — 중심이 y=x 위라 항상 성립·좋은 성질). 0<k<1 로 작은 근 선택."
    creative: "(1) 중심을 (a,2a) 로 바꾸면 두 근이 역수가 아니게 되어 인수분해 설계 필요 ★3 (2) 두 접선의 기울기 곱을 물으면 근과 계수 관계 → I-BW ★3 (3) '원 위의 점과 직선 y=2x 사이 거리의 최댓값' 을 추가로 물으면 R12 결합 ★3 (4) 접선 대신 '직선 y=kx 가 원과 만나는 현의 길이가 2' 로 바꾸면 R08 ★3~4."
```
```yaml
- id: 정의여고-1-2중간-25
  page: 9
  vendor_label: "2025 교육청 고2 3월 28번 [4점]"
  vendor_level: "Lv4 최고난도"
  category_type: "학평 기출"
  summary: |
    직선 y=x 위의 점 A 를 중심으로 하고 x축과 만나지 않는 원 C. 원점에서 C 에 그은 두 접선 중 기울기가 작은 l: y=mx. C 와 y=x 의 교점 P₁(작은 x), P₂ 에 대하여 OP₁=2, P₁·P₂ 에서의 접선과 l 의 교점 Q₁, Q₂ 에 대하여 △AQ₂P₂ = 4△AP₁Q₁ 일 때 m=q/p 의 p+q. 그림 제공. 단답형.
  category: "접선 삼각형 닮음 → 넓이비 = OP₂/OP₁ → 반지름 → 원점 접선 기울기(삼각비·각 차)"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P₁, P₂ 에서의 접선은 모두 y=x 에 수직 → △OP₁Q₁ ∽ △OP₂Q₂ (l 과 y=x 사이 각 θ 공유) → P₁Q₁ = OP₁·tanθ, P₂Q₂ = OP₂·tanθ → 두 직각삼각형 넓이비 = P₂Q₂/P₁Q₁ = OP₂/OP₁ = (2+2r)/2 = 4 → r=3"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OP₁ = OA - r = 2 → OA = 5 (x축과 만나지 않음 → r < A 의 y 좌표 = 5/√2 ✓)"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원점 접선의 기울기 m = tan(45°-θ), sinθ = r/OA = 3/5 → tanθ = 3/4 → m = (1-3/4)/(1+3/4) = 1/7 (좌표로 접선 조건을 세우면 |mt-t|/√(m²+1) = 3 의 이차식 → 작은 근 1/7 도 가능)"
    - step: 4
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q₁, Q₂ 좌표를 직접 구해 넓이를 계산하는 갈래 vs 닮음·삼각비 갈래 — 전자는 m, r 두 미지수의 무리식으로 폭발, 후자를 선택해야 30초 안에 골조가 잡힘"
  insight_count: 4
  depth_score: 5.50
  type_id: CM2-GM-R15
  base_star: 5
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    원의 자유도(중심 위치 t, 반지름 r)와 접선 기울기 m 을 OP₁=2·넓이비 4배 두 조건으로 닫는 다층 결합. 접선 삼각형의 닮음으로 넓이비를 OP 비로 바꾸는 순간 r 이 즉시 나오고, 이후 각의 차 또는 접선 조건 이차식으로 m. 벤더 Lv4 최고난도·학평 28번 4점 → ★5 · R15 base ★5 정합. premium 은 §2.12 게이트(통찰 5개·P 카드 2개) 미달로 false.
  tier: star_5
  mechanism_primary: "접선 ⟂ y=x → 두 접선 삼각형 닮음 → 넓이비 = OP₂/OP₁ → r=3 → OA = OP₁+r = 5 → 원점 접선 기울기 m = tan(45°-θ), sinθ = r/OA → m=1/7"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$8$"
  answer_source: "답지"
  figure: crop:fig-25.png
  latex: latex-bank/jeongui-1-2-mid/items/25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP₁ = d, 넓이비 k 를 바꿀 수 있음. 제약: 넓이비 k = (d+2r)/d → r = d(k-1)/2 양수, OA = d + r, sinθ = r/OA 가 유리 삼각비(3-4-5, 5-12-13 삼조)가 되도록 (r, OA) 를 피타고라스 삼조에서 고르면 tanθ 유리수 → m 유리수. 원이 x축과 만나지 않으려면 r < OA/√2. p, q 서로소 확인."
    creative: "(1) 중심을 y=x 대신 y=√3x 위(각 60°)로 옮기면 m = tan(60°-θ) 에 √3 이 들어가 단답 불가 → y=x 유지 권장 (2) '기울기가 큰 접선' 으로 바꾸면 tan(45°+θ) = 7 → 같은 골조 ★5 (3) 넓이비 대신 'Q₁Q₂ 의 길이' 조건으로 바꾸면 Q₁Q₂ = P₁P₂/cosθ 관계 → 같은 골조·계산 재배치 ★5 (4) 닮음 통찰을 없애고 r 을 직접 주면 R06 접선 문제 ★3 — ★ 가 크게 떨어지는 지점."
```
```yaml
- id: 정의여고-1-2중간-27
  page: 9
  vendor_label: "2026 교육청 고2 3월 25번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    원 x²+y²=2 위의 점 (1,1) 에서의 접선이 곡선 y=x²+ax+2a 에 접할 때 a. 단답형.
  category: "원 위 점 접선 공식 → 이차함수와 접함(판별식 = 0)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 x+y=2 → x²+(a+1)x+2a-2=0 의 D = (a-3)² = 0 → a=3. 접선 공식과 판별식 모두 표준. 완전제곱이 되도록 설계된 판별식이라 계산도 짧음. R05 base ★2 = 3점 라벨.
  tier: star_2
  mechanism_primary: "x₁x+y₁y=r² → y=-x+2 → 이차함수에 대입 → D=0 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 반지름²·접점(원 위 정수점), 이차함수 계수 형태를 바꿀 수 있음. 제약: 접점이 원 위 격자점(예: (1,1) on r²=2, (3,4) on r²=25), D=0 이 a 의 이차식이면 완전제곱이 되도록 상수항을 a 의 일차식으로 맞춤(여기서 2a 가 그 역할). 단답이므로 a 자연수."
    creative: "(1) '접한다' 를 '두 점에서 만나고 현의 길이가 √2' 로 바꾸면 근의 차 공식 결합 ★3 (2) 접점을 (t, √(2-t²)) 매개로 두고 '접선이 이차함수와 접하는 t' 를 물으면 I-BW ★3~4 (3) 이차함수를 원으로 바꾸면 R04(접선-원 거리) ★2 (4) 접선을 '원 밖 점에서 그은 접선' 으로 바꾸면 R06 결합 ★3."
```

### 도형의 이동

```yaml
- id: 정의여고-1-2중간-28
  page: 10
  vendor_label: "2025 교육청 고1 10월 5번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    점 (3,a) 를 (8,8) 로 옮기는 평행이동으로 점 (5,5) 가 (b,2) 로 옮겨질 때 a+b. 5지선다.
  category: "평행이동 벡터 결정 → 다른 점에 적용"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M01
  base_star: 1
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 이동 +5 → b=10, y 이동 8-a = 2-5 → a=11. 학평 5번(가장 쉬운 자리) 3점. M01 base ★1 정합.
  tier: star_1
  mechanism_primary: "x 방향 이동량 → b, y 방향 이동량 등식 → a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표를 자유롭게(정수) 바꿀 수 있음. 제약: a, b 가 정수이고 a+b 가 선택지 등차에 맞음. 두 점의 이동량이 같아야 하므로 y 이동량 등식 8-a = 2-5 형태가 한 미지수만 남도록 배치."
    creative: "(1) 점 대신 직선·원의 평행이동으로 바꾸면 M01 도형 이동 ★1~2 (2) '두 번 평행이동 후 원래 자리' 조건으로 바꾸면 벡터 합 ★2 (3) 평행이동 후 두 점 사이 거리 불변을 이용해 묻기를 바꾸면 C01 결합 ★2."
```
```yaml
- id: 정의여고-1-2중간-29
  page: 10
  vendor_label: "2024 교육청 고2 3월 25번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    A(3,-1) 을 x 방향 1, y 방향 -4 평행이동한 점 B. 직선 AB 를 x 방향 3, y 방향 1 평행이동한 직선의 y 절편. 단답형.
  category: "점 평행이동 → 두 점 직선 → 직선 평행이동 → 절편"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M01
  base_star: 1
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    B(4,-5), AB: y=-4x+11, 평행이동 y-1=-4(x-3)+11 → y 절편 24. 평행이동 두 번과 두 점 직선(L01) 결합으로 단계가 넷. M01 base ★1 → effective ★1 이나 학평 단답 3점·직선 결정 결합이라 라벨 ★2(YELLOW).
  tier: star_2
  mechanism_primary: "A → B 평행이동 → 직선 AB(기울기·점) → 직선 평행이동 (x-3, y-1 치환) → y 절편"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$24$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 좌표와 두 이동량을 바꿀 수 있음. 제약: 기울기 = (이동 y)/(이동 x) 이므로 첫 이동량이 기울기를 결정(정수 권장), 최종 y 절편 = 원래 절편 - m·(x 이동) + (y 이동) 이 자연수(단답)."
    creative: "(1) 직선의 평행이동을 '기울기 불변 + 한 점 이동' 으로 읽으면 절편만 계산 → I-EQV d1 (2) 두 번째 이동을 대칭이동으로 바꾸면 M03 결합 ★2 (3) '이동한 직선이 원 x²+y²=r² 에 접한다' 로 바꾸면 R04 결합 ★3 (4) 직선을 원으로 바꾸면 중심만 이동 ★1."
```
```yaml
- id: 정의여고-1-2중간-30
  page: 10
  vendor_label: "2023 교육청 고1 11월 5번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    원 (x-a)²+(y+4)²=16 을 x 방향 2, y 방향 5 평행이동한 도형이 원 (x-8)²+(y-b)²=16 일 때 a+b. 5지선다.
  category: "원의 평행이동 = 중심 이동"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M01
  base_star: 1
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (a,-4) → (a+2, 1) = (8, b) → a=6, b=1. 학평 5번 3점. M01 base ★1 정합.
  tier: star_1
  mechanism_primary: "원의 평행이동 = 중심 이동 → 성분 대응"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·이동량·반지름을 바꿀 수 있음. 제약: 반지름은 이동 전후 같아야 함(다르면 오류 문항). a, b 정수."
    creative: "(1) 원을 일반형 x²+y²+Ax+By+C=0 으로 주면 완전제곱 단계 추가 → R01 결합 ★2 (2) '이동한 원이 x축에 접한다' 로 바꾸면 R03 결합 ★2 (3) 이동량을 미지수로 두고 '이동한 원이 원점을 지난다' 로 바꾸면 이차식 ★2."
```
```yaml
- id: 정의여고-1-2중간-31
  page: 11
  vendor_label: "2024 교육청 고1 9월 27번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(a,2) (a>2) 를 y=x 에 대칭이동한 점 B, B 를 x축에 대칭이동한 점 C. 두 삼각형 ABC, AOC 의 외접원 반지름 r₁, r₂ 의 곱이 18√2 일 때 a². 그림 제공. 단답형.
  category: "두 대칭이동의 원점 거리 보존 → 외심 = O → 대칭 합성 = 90° 회전 → 지름"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=x 대칭·x축 대칭 모두 원점을 고정하므로 OA=OB=OC → 삼각형 ABC 의 외심은 O, r₁ = OA = √(a²+4) (외접원 공식 없이)"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=x 대칭 뒤 x축 대칭의 합성은 원점 중심 -90° 회전 → OA ⟂ OC (내적 2a-2a=0 으로 확인 가능) → 삼각형 AOC 는 O 직각 → AC 가 지름 → r₂ = AC/2 = √((a²+4)/2)"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "r₁r₂ = (a²+4)/√2 = 18√2 → a²+4 = 36 → a² = 32"
  insight_count: 3
  depth_score: 5.67
  type_id: CM2-GM-M05
  base_star: 4
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    B(2,a), C(2,-a) 좌표는 절차지만 외접원 반지름을 좌표로 직접 구하려 하면(R=abc/4S) 계산이 무겁다. 두 대칭이 원점 거리를 보존해 외심이 O 라는 것과, 두 대칭의 합성이 90° 회전이라 AOC 가 직각삼각형이라는 인식이 두 반지름을 한 줄로 만든다. 학평 27번 4점 → ★4 · M05(대칭이동 합성) base ★4 정합.
    [분류 이슈] type_id 후보 M05(대칭 합성 = 회전 · base 4) / M03(표준 대칭이동 · base 2) / R02(세 점 지나는 원 · base 3). 골조가 '합성 = 회전' 이라 M05 채택. 후보 ★4.
  tier: star_4
  mechanism_primary: "B(2,a), C(2,-a) → 대칭이 원점 거리 보존 → 외심 O, r₁ = OA → 합성 = 90° 회전 → ∠AOC = 90° → r₂ = AC/2 → 곱 조건 → a²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$32$"
  answer_source: "답지"
  figure: crop:fig-31.png
  latex: latex-bank/jeongui-1-2-mid/items/31.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2024.9월 고1 27번 · legacy tier star_5 · 통찰형 depth 3) → 본 판정 ★4"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 y 좌표 c 와 곱 K 를 바꿀 수 있음. 제약: r₁ = √(a²+c²), r₂ = √((a²+c²)/2) → r₁r₂ = (a²+c²)/√2 = K → K 는 (정수)/√2 즉 n√2 꼴, a² = 2K/√2·… = √2·K - c² 가 양의 정수 (K=18√2 → 36). a>c 조건으로 그림 배치 유지."
    creative: "(1) 두 대칭축을 y=x 와 y축으로 바꾸면 합성 = +90° 회전 → 같은 골조 ★4 (2) 대칭축을 y=x 와 y=-x 로 바꾸면 합성 = 원점 대칭(180°) → AOC 가 일직선이 되어 삼각형 불성립(함정 소재) (3) 외접원 대신 '삼각형 ABC 의 넓이' 를 물으면 좌표 계산 ★3 (4) 두 번째 대칭을 평행이동으로 바꾸면 거리 보존이 깨져 R02 직접 계산 → 마찰 증가·★3."
```
```yaml
- id: 정의여고-1-2중간-32
  page: 11
  vendor_label: "2022 교육청 고1 9월 26번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    원 x²+y²=100 위의 x 좌표 3, 7 인 두 점 A₁, A₂(제1사분면). B(-10,0) 을 지나고 A₁B, A₂B 에 각각 수직인 두 직선이 원과 만나는 다른 점 C₁, C₂. C₁ 의 y 좌표 a, C₂ 의 x 좌표 b 에 대하여 a²+b². 그림 제공. 단답형.
  category: "원 위 점에서 현에 수직 → 지름 → 원점 대칭점"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B 가 원 위 점이고 ∠A₁BC₁ = 90° → A₁C₁ 은 지름(반원의 원주각) → C₁ = A₁ 의 원점 대칭점 (-3, -√91), C₂ = (-7, -√51)"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직 직선의 방정식을 세워 원과 연립하는 갈래는 √91 이 기울기에 들어가 폭발 — 지름 인식 갈래를 선택해야 함"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-M03
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    a² = 91, b² = 49 → 140. 지름 인식 뒤에는 원점 대칭 좌표 읽기뿐이라 계산이 거의 없고, 인식하지 못하면 풀리지 않는 전형적 '한 방' 문항. 학평 26번 단답 4점 → ★3.
    [분류 이슈] 카탈로그에 '원주각·지름 인식' 유형 없음. 프린트 배치(도형의 이동)와 결과 좌표(원점 대칭)를 따라 M03 배정했으나 base ★2 → effective ★2 vs 라벨 ★3. 후보 type L03(수직 조건)/R04 · ★3.
  tier: star_3
  mechanism_primary: "원 위 점 B 에서 현 BA 에 수직 → 반원의 원주각 → AC 지름 → C = -A → 좌표 제곱 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$140$"
  answer_source: "답지"
  figure: crop:fig-32.png
  latex: latex-bank/jeongui-1-2-mid/items/32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 R, A₁·A₂ 의 x 좌표 p, q 를 바꿀 수 있음. 제약: a² = R²-p², b² = q² 로 답 = R²-p²+q² 자연수 — y 좌표가 무리수여도 무방(제곱을 물으므로). B 는 원 위 점이어야 원주각 성립(B(-R,0) 유지 또는 원 위 다른 점)."
    creative: "(1) B 를 원 위 임의 점 (6,-8) 로 옮겨도 골조 동일 ★3 (2) '수직' 을 '∠A₁BC₁ = 45°' 로 바꾸면 원주각 → 중심각 90° → OA₁ ⟂ OC₁ 회전 → ★4 (3) a²+b² 대신 '사각형 A₁A₂C₁C₂ 의 넓이' 를 물으면 직사각형(두 지름) 인식 추가 ★4 (4) B 를 원 안의 점으로 바꾸면 원주각 성질이 깨져 좌표 계산 강제 → 질 저하."
```
```yaml
- id: 정의여고-1-2중간-33
  page: 12
  vendor_label: "2022 교육청 고1 9월 13번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    A(-3,4) 를 y=x 에 대칭이동한 점 B, B 를 x 방향 2, y 방향 k 평행이동한 점 C. 세 점 A, B, C 가 한 직선 위에 있을 때 k. 5지선다.
  category: "y=x 대칭 → 평행이동 → 공선(기울기 일치)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M03
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    B(4,-3), C(6,-3+k), AB 기울기 -1 = BC 기울기 k/2 → k=-2. 대칭·평행이동·기울기 비교의 세 절차. M03 base ★2 에서 M_total 4 로 effective ★1 이나 학평 13번 3점·세 도구 결합이라 라벨 ★2(YELLOW).
  tier: star_2
  mechanism_primary: "y=x 대칭 (x↔y) → 평행이동 → 세 점 공선 ⇔ 기울기 AB = 기울기 BC → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 좌표와 x 이동량을 바꿀 수 있음. 제약: y=x 대칭점 B(y₀,x₀) 와 A 의 기울기는 항상 -1 (A 가 y=x 위가 아니면) → k = -(x 이동량) 으로 답이 이동량에만 의존. 선택지 정수."
    creative: "(1) 대칭축을 x축으로 바꾸면 AB 가 수직선이 되어 '한 직선 위' 조건이 x 좌표 일치로 바뀜 → T-표기 함정 ★2 (2) 공선 대신 '삼각형 ABC 의 넓이가 5' 로 바꾸면 신발끈 → 절댓값 두 해 ★3 (3) 공선 조건을 '직선 AC 가 원점을 지난다' 로 바꾸면 ★2 (4) 기울기 -1 이 자동임을 이용해 'k 에 관계없이 성립하는 것' 을 묻는 보기 문항으로 확장하면 I-SYM ★3."
```
```yaml
- id: 정의여고-1-2중간-34
  page: 12
  vendor_label: "2025 교육청 고2 3월 9번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    직선 y=ax+4 를 x 방향 4 평행이동한 뒤 y축에 대칭이동한 직선이 원 (x+3)²+(y+5)²=1 의 넓이를 이등분할 때 a. 5지선다.
  category: "평행이동 → y축 대칭 → 넓이 이등분 = 중심 통과"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M07
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    y=a(x-4)+4 → y=a(-x-4)+4 → 중심 (-3,-5) 대입 → a=9. 이동 순서(T-표기)와 '넓이 이등분 = 중심 통과' 는 카탈로그 M12/R08 의 본질이라 통찰로 세지 않음. 학평 9번 3점 → ★2.
    [분류 이슈] M07(평행+대칭 결합 후 조건 · base 4) 배정 시 effective ★4 vs 라벨 ★2 → RED(2단). 카탈로그 M07/M12 의 base ★4 가 '이동 두 번 + 중심 통과' 기초 결합형에는 과대. 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "x→x-4 치환 → x→-x 치환 → 원 중심 대입 (넓이 이등분 ⇔ 중심 통과) → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y 절편, 이동량, 원 중심을 바꿀 수 있음. 제약: 최종 직선 y = -a(x + 이동량) + 절편 에 중심 대입 시 a 의 일차식 → a 정수. 원 반지름은 답과 무관(함정 소재)."
    creative: "(1) 이동 순서를 '대칭 후 평행' 으로 바꾸면 결과 직선이 달라져 T-표기 함정 강화 ★2 (2) '넓이 이등분' 을 '접한다' 로 바꾸면 거리 = r 이차식 ★3 (3) 직선 대신 원을 이동시켜 '이동한 원이 직선에 의해 넓이 이등분' 으로 뒤집으면 골조 동일 ★2 (4) a 를 주고 '이등분되는 원의 중심이 놓인 직선' 을 물으면 역방향 ★2."
```
```yaml
- id: 정의여고-1-2중간-35
  page: 12
  vendor_label: "2023 교육청 고1 9월 15번 [4점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    y=-x² 을 x축에 대칭이동한 뒤 x 방향 4, y 방향 m 평행이동한 그래프가 직선 y=2x+3 에 접할 때 m. 5지선다.
  category: "x축 대칭 → 평행이동 → 포물선-직선 접함 판별식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M07
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    y=x² → y=(x-4)²+m → (x-4)²+m = 2x+3 → x²-10x+13+m=0, D/4 = 25-13-m = 0 → m=12. 이동 두 번(순서 함정)과 판별식의 절차 결합. 벤더 Lv2 이지만 4점 15번 → ★3.
    [분류 이슈] M07 base ★4 → effective ★4 vs 라벨 ★3(벤더 Lv2 · 절차형). 34번과 같은 카탈로그 base 과대 문제. 후보 ★3.
  tier: star_3
  mechanism_primary: "y→-y 치환 → x→x-4, y→y-m 치환 → 직선과 연립 → D=0 → m"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/35.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.9월 고1 15번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 이동량 h, 직선 y=px+q 를 바꿀 수 있음. 제약: (x-h)²+m = px+q → D=0 → m = q - h² - p²/4 + ph … 정수가 되도록 p 짝수. 선택지 등차 1 유지."
    creative: "(1) 접함 → '서로 다른 두 점에서 만나는 정수 m 의 개수' 로 바꾸면 D>0 + T-경계 ★3 (2) 직선을 원으로 바꾸면 포물선-원 접함(사차식) → 금지(교육과정 밖) (3) 대칭축을 y=x 로 바꾸면 x=y² 꼴 → 곡선이 함수가 아님(교육과정 밖 주의) (4) 이동 순서를 '평행 후 대칭' 으로 바꾸면 m 부호 반전 → T-부호 ★3."
```
```yaml
- id: 정의여고-1-2중간-36
  page: 12
  vendor_label: "2024 교육청 고2 3월 6번 [3점]"
  vendor_level: "Lv2 보통"
  category_type: "학평 기출"
  summary: |
    원 (x+5)²+(y+11)²=25 를 y 방향 1 평행이동한 뒤 x축에 대칭이동한 원이 점 (0,a) 를 지날 때 a. 5지선다.
  category: "원의 평행이동·대칭이동 = 중심 이동 → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-M03
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    중심 (-5,-11) → (-5,-10) → (-5,10), r=5 → (0,a) 대입: 25+(a-10)²=25 → a=10 (y축에 접하는 점). 이동 두 번과 대입. 학평 6번 3점 → ★2(M03 base ★2, M_total 4 로 effective ★1 · YELLOW).
  tier: star_2
  mechanism_primary: "중심 평행이동 → x축 대칭 (y→-y) → 원 방정식에 (0,a) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·이동량·반지름을 바꿀 수 있음. 제약: 이동 후 중심의 x 좌표 절댓값 = r 이면 (0,a) 가 유일(접점, 현재 설계) → 중근; 절댓값 < r 이면 두 해 → '모든 a 의 합' 으로 묻기 가능."
    creative: "(1) 이동 후 원이 'x축에 접한다' 로 바꾸면 R03 결합 ★2 (2) 대칭축을 y=x 로 바꾸면 중심 (x,y) 교환 ★2 (3) 두 해가 생기도록 설계하고 '두 점 사이 거리' 를 물으면 현의 길이 R08 ★3 (4) 이동량을 미지수로 두고 '원점을 지나는 조건' 으로 역전 ★2."
```
```yaml
- id: 정의여고-1-2중간-37
  page: 13
  vendor_label: "2022 교육청 고1 9월 17번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(2,3), B(-3,1). x축 위의 점 C 와 직선 y=x 위의 점 D 에 대하여 AD+DC+CB 의 최솟값. 그림 제공. 5지선다.
  category: "두 반사(y=x·x축)로 꺾인 경로 직선화"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD+DC+CB 의 최소 → A 를 y=x 에 대칭한 A'(3,2), B 를 x축에 대칭한 B'(-3,-1) 로 바꾸면 A'D+DC+CB' ≥ A'B' (꺾인 경로를 한 선분으로)"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 점을 자기와 인접한 축(D 의 축 y=x 에 A, C 의 축 x축에 B)으로 대칭 — 축 배정을 맞춰야 등호 성립"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-M06
  base_star: 5
  effective_star: 5
  star: 4
  premium: false
  rationale: |
    A'B' = √(36+9) = 3√5. 반사 원리 2회의 표준형으로 학평 17번 4점 → ★4. M06 base ★5 → effective ★5 와 1단 차이(YELLOW).
    [분류 이슈] M06(반사 원리 · base 5)이 표준 2회 반사 문항(37·38·39·40·41)에 일괄 적용되면 effective ★5 가 되어 라벨과 어긋남. 카탈로그 base 가 3중 반사·원 결합 최상위 기준으로 잡혀 있음. 후보 ★4.
  tier: star_4
  mechanism_primary: "A 를 y=x 대칭 → A', B 를 x축 대칭 → B' → 최솟값 = A'B'"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-37.png
  latex: latex-bank/jeongui-1-2-mid/items/37.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2022.9월 고1 17번 · legacy tier star_5) → 본 판정 ★4"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꿀 수 있음. 제약: A' = (y_A, x_A), B' = (x_B, -y_B) 의 거리 제곱이 선택지의 √ 안 정수(42~46 처럼 근접값 배치). 두 대칭점을 잇는 선분이 실제로 y=x 와 x축을 순서대로 지나야 등호 성립(A 가 y=x 위쪽, B 가 x축 위쪽인 배치 유지)."
    creative: "(1) 축을 y축과 y=-x 로 바꾸면 골조 동일 ★4 (2) C, D 순서를 바꿔 'AC+CD+DB (C 는 x축, D 는 y=x)' 로 하면 대칭 배정이 바뀜(A 를 x축, B 를 y=x) ★4 (3) 점 하나를 원 위 점으로 바꾸면 41번 골조(중심 거리 - r) ★4~5 (4) 두 축을 평행한 두 직선으로 바꾸면 평행이동 결합 → 39번 골조."
```
```yaml
- id: 정의여고-1-2중간-38
  page: 13
  vendor_label: "2023 교육청 고1 11월 12번 [3점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(1,0), B(6,5) 와 직선 y=x 위의 점 P 에 대하여 AP+BP 가 최소가 되는 점 P₀. 직선 AP₀ 을 y=x 에 대칭이동한 직선이 점 (9,a) 를 지날 때 a. 5지선다.
  category: "한 반사로 최소 점 결정 → 직선의 y=x 대칭 (x↔y)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP+BP 최소 → A 의 y=x 대칭점 A'(0,1) 과 B 를 잇는 직선과 y=x 의 교점 P₀(3,3)"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선 AP₀ 의 y=x 대칭 = 직선 A'P₀ = 직선 A'B (이미 구한 y=(2/3)x+1) → x=9 대입 a=7 (x↔y 치환으로 다시 구해도 됨)"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-M06
  base_star: 5
  effective_star: 5
  star: 3
  premium: false
  rationale: |
    반사 1회로 P₀, 그 뒤 직선의 대칭이동. 대칭한 직선이 앞서 구한 A'B 와 같다는 것을 알아채면 계산이 반으로 준다. 학평 12번 3점 → ★3(벤더 Lv3).
    [분류 이슈] M06 base ★5 → effective ★5 vs 라벨 ★3 → RED(2단). 반사 1회 표준형이라 base 과대. 후보 ★3.
  tier: star_3
  mechanism_primary: "A 의 y=x 대칭점 A' → 직선 A'B ∩ y=x = P₀ → 직선 AP₀ 의 y=x 대칭 = 직선 A'P₀ → x=9 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/38.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.11월 고1 12번 · legacy tier star_5) → 본 판정 ★3"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 대입 x 값을 바꿀 수 있음. 제약: 직선 A'B 의 기울기가 분수여도 되지만 P₀ 좌표와 최종 a 가 정수가 되도록 (A'B 와 y=x 의 교점 x = (y절편)/(1-기울기) 정수). A 가 x축 위(대칭점이 y축 위)면 계산 최소."
    creative: "(1) 'AP+BP 최솟값' 자체를 물으면 A'B 길이 ★2~3 (2) 직선 AP₀ 대신 직선 BP₀ 의 대칭을 물으면 B' 계산 추가 ★3 (3) 축을 x축으로 바꾸면 대칭 직선은 y→-y ★3 (4) P₀ 에서 두 직선 AP₀, BP₀ 가 y=x 와 이루는 각이 같음을 이용하는 보기(입사각=반사각)로 확장하면 I-SYM d2 ★4."
```
```yaml
- id: 정의여고-1-2중간-39
  page: 13
  vendor_label: "2025 교육청 고1 10월 14번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(-3,2), B(2,6). PQ=1 인 x축 위 두 점 P, Q (P 가 왼쪽) 에 대하여 AP+QB 의 최솟값. 5지선다.
  category: "고정 간격 → 한 점 평행이동으로 환원 → x축 반사"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Q = P + (1,0) 이므로 QB = P B' (B' = B 를 x 방향 -1 평행이동한 (1,6)) → 두 동점 문제를 한 동점 P 의 AP+PB' 로 환원"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP+PB' 최소 → A 의 x축 대칭점 A'(-3,-2) → A'B' = √(16+64) = 4√5"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-M06
  base_star: 5
  effective_star: 5
  star: 4
  premium: false
  rationale: |
    반사 원리 앞에 '간격 고정 두 점 → 평행이동으로 한 점' 환원이 붙어 표준 반사보다 한 층 깊다. 학평 14번 4점 → ★4. M06 base ★5 와 1단 차이(YELLOW · 37번 이슈와 같은 그룹).
  tier: star_4
  mechanism_primary: "B 를 x 방향 -PQ 평행이동 → B' → AP+PB' 최소 → A 의 x축 대칭 A' → A'B'"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 PQ = d 를 바꿀 수 있음. 제약: A'B' = √((x_B - d - x_A)² + (y_B + y_A)²) 가 선택지 형태(k√n). P 가 Q 왼쪽 조건에 따라 B 를 -d 이동(반대면 +d) — 방향 함정 T-부호."
    creative: "(1) P, Q 를 직선 y=x 위 간격 √2 로 바꾸면 이동 벡터 (1,1) → 같은 골조 ★4 (2) 'AP+PQ+QB 의 최솟값' 으로 바꾸면 상수 PQ 만 더해짐(함정 소재) ★4 (3) B 를 원 위 점으로 바꾸면 40번 골조 결합 ★4~5 (4) 평행이동 환원을 없애고 P=Q 로 두면 표준 반사 ★3."
```
```yaml
- id: 정의여고-1-2중간-40
  page: 14
  vendor_label: "2022 교육청 고1 11월 15번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    A(-3,2), B(5,4). BP=3 인 점 P 와 x축 위의 점 Q 에 대하여 AQ+QP 의 최솟값. 5지선다.
  category: "x축 반사 + 원 위 점까지 최소(중심 거리 - r) 결합"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 의 x축 대칭점 A'(-3,-2) 로 AQ+QP = A'Q+QP ≥ A'P"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BP=3 → P 는 중심 B 반지름 3 인 원 위 → A'P 의 최소 = A'B - 3 = 10 - 3 = 7 (반사와 R12 를 한 선분 A'B 로 통합)"
  insight_count: 2
  depth_score: 5.50
  type_id: CM2-GM-M06
  base_star: 5
  effective_star: 5
  star: 4
  premium: false
  rationale: |
    'BP=3 인 점 P' 를 원으로 읽고, 반사 후 선분 A'B 위에 Q 와 P 가 놓일 때 최소라는 두 최소 조건의 동시 달성. 학평 15번 4점 → ★4. M06 base ★5 와 1단 차이(YELLOW · 37번 그룹).
  tier: star_4
  mechanism_primary: "A 의 x축 대칭 A' → P 의 자취 = 원(B, 3) → 최솟값 = A'B - r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/jeongui-1-2-mid/items/40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 r 을 바꿀 수 있음. 제약: A'B 가 정수(피타고라스 삼조: (8,6,10) 처럼), A'B > r 이어야 최소 = A'B - r (아니면 0). A, B 가 x축 같은 쪽에 있어야 반사가 의미 있음."
    creative: "(1) 'BP=3' 을 '원 (x-5)²+(y-4)²=9 위의 점' 으로 직접 주면 I-EQV 가 빠져 ★3 (2) 최솟값 대신 '최소일 때 Q 의 x 좌표' 를 물으면 직선 A'B 와 x축 교점 ★4 (3) 축을 y=x 로 바꾸면 ★4 (4) Q 를 두 축에 각각 하나씩 두 점으로 늘리면 41번 골조 ★4~5."
```
```yaml
- id: 정의여고-1-2중간-41
  page: 14
  vendor_label: "2023 교육청 고1 9월 16번 [4점]"
  vendor_level: "Lv3 어려움"
  category_type: "학평 기출"
  summary: |
    두 원 C₁: (x-8)²+(y-2)²=4, C₂: (x-3)²+(y+4)²=4 와 직선 y=x. A∈C₁, B∈C₂, P 는 x축 위, Q 는 y=x 위일 때 AP+PQ+QB 의 최솟값. 그림 제공. 5지선다.
  category: "두 반사(x축·y=x) + 두 원 사이 최소(중심 거리 - r₁ - r₂)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 x축 대칭(C₁ → 중심 (8,-2)), B 를 y=x 대칭(C₂ → 중심 (-4,3)) → AP+PQ+QB = A'P+PQ+QB' ≥ A'B' (경로 직선화·두 축 배정)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A', B' 가 각각 이동한 원 위를 움직임 → A'B' 최소 = 두 중심 거리 √(144+25) = 13 에서 r₁+r₂ = 4 를 뺀 9 (반사·원 최소를 한 선분에 통합)"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원의 대칭이동 = 중심의 대칭이동, 반지름 불변 (y=x 대칭은 (x,y)→(y,x))"
  insight_count: 3
  depth_score: 5.67
  type_id: CM2-GM-M06
  base_star: 5
  effective_star: 5
  star: 4
  premium: false
  rationale: |
    37번의 2회 반사 골조에 양 끝점이 원 위를 움직이는 자유도가 붙어 '중심 거리 - r₁ - r₂' 로 닫는다. 거리 13 이 (12,5,13) 삼조로 설계됨. 학평 16번 4점 → ★4(벤더 Lv3). M06 base ★5 와 1단 차이(YELLOW · 37번 그룹). 통찰 3개지만 max depth 2·count<5 라 premium 아님.
  tier: star_4
  mechanism_primary: "C₁ 을 x축 대칭·C₂ 를 y=x 대칭 → 두 중심 거리 → 최솟값 = 중심 거리 - r₁ - r₂"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-41.png
  latex: latex-bank/jeongui-1-2-mid/items/41.tex
  anchor_status: "bank/mechanism-데이터-전국연합-CM2-GM.md 등재(2023.9월 고1 16번 · legacy tier star_5 · 통찰형 depth 3) → 본 판정 ★4"
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 원의 중심·반지름을 바꿀 수 있음. 제약: 대칭 후 두 중심 거리가 정수(피타고라스 삼조)이고 r₁+r₂ 보다 큼(두 원이 이동 후 겹치지 않음). 대칭 후 두 중심을 잇는 선분이 실제로 x축과 y=x 를 순서대로 지나도록 원의 위치(C₁ 이 x축 위·오른쪽, C₂ 가 y=x 아래) 유지. 선택지 정수."
    creative: "(1) 한 원을 점으로 바꾸면 40번 골조 ★4 (2) 세 점 A, P, Q 가 서로 다르다는 조건을 빼면 퇴화 경로 함정 검토 필요 (3) 축을 y축과 y=-x 로 바꾸면 골조 동일 ★4 (4) '최솟값' 대신 '최소일 때 P 의 좌표' 로 바꾸면 직선 A'B' 와 x축 교점 계산 추가 ★4~5 (5) 두 원 대신 '두 원의 넓이 합이 일정' 같은 매개변수 조건을 덧붙이면 R15 급 ★5."
```

## 표본 판정 요약 (41문)

| ★ | 문항 수 | 문항 |
|---|---|---|
| ★ 1 | 2 | 28 · 30 (학평 5번 자리 평행이동) |
| ★ 2 | 14 | 01 · 02 · 04 · 05 · 07 · 08 · 12 · 13 · 22 · 27 · 29 · 33 · 34 · 36 |
| ★ 3 | 13 | 06 · 09 · 10 · 11 · 14 · 16 · 20 · 21 · 23 · 24 · 32 · 35 · 38 |
| ★ 4 | 11 | 03 · 15 · 17 · 18 · 19 · 26 · 31 · 37 · 39 · 40 · 41 |
| ★ 5 | 1 | 25 (벤더 Lv4 최고난도 · 고2 3월 28번) |

- 통찰형(insight_count ≥ 1): 23문 · 절차형: 18문. premium: 0문(§2.12 게이트 통과 없음).
- 벤더 라벨 대조: Lv2 17문(라벨 ★1~3), Lv3 23문(★3~4), Lv4 1문(★5). 3점 20문 → ★1 2 · ★2 14 · ★3 4(14 · 16 · 23 · 38 — 모두 벤더 Lv3). 4점 21문 → ★3 9 · ★4 11 · ★5 1.
- type_id 분포: C02 2 · C05 1 · L03 4 · L04 4 · L07 1 · L09 1 · R01 1 · R03 1 · R04 2 · R05 1 · R06 1 · R08 3 · R12 1 · R13 2 · R15 2 · M01 3 · M03 3 · M05 1 · M06 5 · M07 2 (20종).
- 앵커: bank/anchors/CM2-GM.md 풀(DI-*)에는 같은 문항 없음. bank/mechanism-데이터-전국연합-CM2-GM.md 에 12문(03 · 06 · 09 · 17 · 20 · 21 · 24 · 31 · 35 · 37 · 38 · 41) 중복 등재 — 그 파일은 legacy tier_mapping 으로 4점 전부 star_5 라 ★ 비교 근거로 쓰지 않고 anchor_status 에 표기만 함.
- 답 출처: 41문 모두 프린트 답지(items.json `answer_source: 답지`). 정독 중 41문 전부 재계산해 답지와 일치 확인.
- 그림: 14문(03 · 09 · 10 · 11 · 13 · 17 · 18 · 24 · 25 · 31 · 32 · 37 · 41 은 `crop:fig-NN.png`, 19번은 조건 상자만 있고 그림 없음).

## 분류 이슈 목록

판정이 애매하거나 카탈로그·앵커와 충돌해 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| 정의여고-1-2중간-03 | type_id 후보 L09(넓이 이등분 · base 4) / C04(내분점 · base 2) / L12(삼각형 넓이 · base 3). 프린트는 평면좌표 절. L09 채택 | ★4 |
| 정의여고-1-2중간-06 | 카탈로그에 '직선과 이차함수의 접선(판별식)' 유형 없음 → L03(수직 조건) 배정 | ★3 |
| 정의여고-1-2중간-15 | C02 base ★3 vs 통찰 3개(SYM·RT·EQV)·학평 4점 15번 → 라벨 ★4 (1단 드리프트). 프린트는 원 절 | ★3 / ★4 |
| 정의여고-1-2중간-19 | R15(다층 조건 · base 5) → effective ★5 vs 라벨 ★4(벤더 Lv3 · max depth 2). R03/R04 배정 시 반대 방향 드리프트 | ★4 / ★5 |
| 정의여고-1-2중간-31 | type_id 후보 M05(대칭 합성 = 회전 · base 4) / M03(base 2) / R02(외접원 · base 3). M05 채택 | ★4 |
| 정의여고-1-2중간-32 | 카탈로그에 '원주각·지름 인식' 유형 없음. M03(원점 대칭 · base 2) 배정 → effective ★2 vs 라벨 ★3. 후보 type L03/R04 | ★3 |
| 정의여고-1-2중간-34 | M07(평행+대칭 결합 · base 4) → effective ★4 vs 라벨 ★2(3점 9번) → RED 2단. 기초 결합형에 base 과대 | ★2 / ★3 |
| 정의여고-1-2중간-35 | M07 base ★4 → effective ★4 vs 라벨 ★3(벤더 Lv2 · 절차형) | ★3 |
| 정의여고-1-2중간-37 | M06(반사 원리 · base 5) 표준 2회 반사 → effective ★5 vs 라벨 ★4 (39 · 40 · 41 도 같은 그룹 · 1단) | ★4 |
| 정의여고-1-2중간-38 | M06 base ★5 → effective ★5 vs 라벨 ★3(3점 12번 · 반사 1회) → RED 2단 | ★3 |

카탈로그 차원 메모(반영 여부는 사용자 결정): (1) M06 반사 원리 base ★5 는 3중 반사·원 결합 최상위 기준이라 학평 표준 1~2회 반사(★3~4)에 일괄 과대. (2) M07 평행+대칭 결합 base ★4 는 학평 3점 급 기초 결합(34 · 36 급)에 과대. (3) '직선-이차함수 접선(판별식)' 과 '원주각·지름 인식' 은 카탈로그에 대응 유형이 없음.
