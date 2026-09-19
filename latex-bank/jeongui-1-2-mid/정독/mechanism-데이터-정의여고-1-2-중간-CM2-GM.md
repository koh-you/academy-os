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

고1 학평(2022~2026 교육청 고1 9·10·11월, 고2 3월) 기출 41문을 프린트 순서(1쪽 평면좌표 → 2~4쪽 직선 → 4~9쪽 원 → 10~14쪽 도형의 이동)로 묶은 학교 대비 프린트다. 벤더 난이도 라벨은 `Lv2 보통`(14문) · `Lv3 어려움`(26문) · `Lv4 최고난도`(1문) 세 단계이고, 배점(3점·4점)이 두 번째 벤더 신호다. 이 자산의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

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
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 → b=2, 점 대입 → a=7. 공식 대입 두 줄. L03 base ★3 이나 통찰 없음·M_total 4 → effective ★2 = 3점 라벨 정합.
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
  M_total: 4
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
