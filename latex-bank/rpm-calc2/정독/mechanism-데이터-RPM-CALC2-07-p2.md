---
name: mechanism-데이터-RPM-CALC2-07-p2
description: RPM 미적분Ⅱ 07 도함수의 활용 (2)(2/4 · 교과서 07-7 + 유형 01~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 07 도함수의 활용 (2)
  unit_code: CALC2-07
  part: "2/4"
  extract_range: "107~112쪽 · 0762~0794"
  total_problems: 33
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 07 도함수의 활용 (2) (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 07 도함수의 활용 (2) 단원의 둘째 범위(107~112쪽 · 0762~0794 · 33문항)를 다룬다. 앞 4문(0762~0765)은 「교과서 07-7 속도와 가속도」 구역(공통 발문: 좌표평면 위를 움직이는 점 P 의 위치 (x, y) → t=2 에서의 속도·가속도)으로 난이도 표시·태그·그림이 없고, 뒤 29문(0766~0794)은 「유형 01 ~ 09」 구역(곡선의 볼록 · 변곡점 · 변곡점을 이용한 미정계수의 결정 · f' 의 그래프를 이용한 f 의 이해 · 함수의 그래프의 성질 · 분수함수·무리함수·지수함수·로그함수의 최대·최소)이다. 벤더 신호는 대표문제 9(0766 · 0769 · 0773 · 0777 · 0779 · 0781 · 0784 · 0787 · 0791 · level 없음) · 중하 2(0767 · 0792) · 중 16(0768 · 0770 · 0771 · 0772 · 0774 · 0775 · 0778 · 0780 · 0782 · 0783 · 0785 · 0786 · 0788 · 0789 · 0793 · 0794) · 상중 2(0776 · 0790) · 서술형 2(0770 · 0782) · 그림 2(0777 · 0778)이다. RPM 은 구역이 곧 난이도 층이므로 교과서 구역은 ★1, 유형 구역은 level(중하 ★1~2 · 중 ★2 · 상중 ★3 · 대표문제 ★2)을 출발점으로 두고 M_total·통찰로만 ±1 조정했다. 「통찰 0 · M_total ≤ 5 → −1 후보」는 골조가 사실상 한 단계이면서 M_total 4 인 경우(중하 0767 · 0792)에만 적용하고, 두 기법이 사슬로 이어지는 대표문제·중 문항은 벤더 신호대로 유지했다. 결과는 ★1 6문 · ★2 25문 · ★3 2문(0776 · 0790)이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₖ 는 미분 한 번에 간단한 정리면 1, 곱·몫의 미분을 두 번 하거나 인수분해·통분 정리가 붙으면 2, 유리함수의 이계도함수처럼 다단계 대수 처리면 3 으로, Mₐ 는 구체 수치 1 · 매개변수 2 · 일반 함수 f 의 그래프(0777 · 0778) 3 으로 매겼다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 최대·최소 유형(06~09)은 「정의역/구간 → f'=0 → 증감 → 끝점·극값 비교」 의 같은 골조라 통찰을 세지 않았고, 「x=a 에서 최솟값 b」 → f(a)=b · f'(a)=0 의 미정계수 결정도 표준 절차로 보았다. 통찰은 조건의 동치 변환이 골조인 0768(EQV d1) · 0776(EQV d2), f' 그래프를 f 의 성질로 읽는 0777 · 0778(RT d1), 극값을 매개변수의 함수로 옮겨 다시 최적화하는 0790(RT d2)에만 붙였다. 전사 답은 33문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0). 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다.

## 문항 데이터

### 교과서 07-7 속도와 가속도

공통 발문(0762~0765): 좌표평면 위를 움직이는 점 P 의 시각 t 에서의 위치 (x, y) 가 다음과 같을 때, t=2 에서의 점 P 의 속도와 가속도를 구하시오.

```yaml
- id: RPM-CALC2-0762
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P 의 위치가 x=3t−2, y=(2/3)t³−2 일 때 t=2 에서의 속도와 가속도.
  category: "성분별 미분 → t=2 대입 → 속도 (dx/dt, dy/dt) · 가속도 (d²x/dt², d²y/dt²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위를 움직이는 점의 속도·가속도(위치의 성분별 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=3, dy/dt=2t² 이므로 t=2 에서 속도 (3, 8). d²x/dt²=0, d²y/dt²=4t 이므로 가속도 (0, 8). 성분별로 두 번 미분해 대입할 뿐 함정도 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=3t−2, y=(2/3)t³−2 → (dx/dt, dy/dt)=(3, 2t²) → t=2: 속도 (3, 8) → (d²x/dt², d²y/dt²)=(0, 4t) → 가속도 (0, 8)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $(3,\,8)$, 가속도: $(0,\,8)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0762.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·2/3, 상수항, 시각 t=2 를 t=1·3 으로. 제약: x 를 일차로 두면 가속도의 x 성분이 0 인 구조가 유지됨, t 를 정수로 두어 답이 정수가 되게."
    creative: "(1) 속력 √(vx²+vy²) 을 묻기(★1~2) (2) 속도가 x 축과 평행해지는 시각(vy=0)을 거꾸로 묻기(★2 · I-EQV d1) (3) 가속도의 x 성분이 항상 0 인 이유를 설명형으로(★1)."
```

```yaml
- id: RPM-CALC2-0763
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P 의 위치가 x=1/t, y=e^t+e^{−t} 일 때 t=2 에서의 속도와 가속도.
  category: "성분별 미분(음의 거듭제곱 · 지수) → t=2 대입 → 속도 · 가속도"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위를 움직이는 점의 속도·가속도(위치의 성분별 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=−1/t² → −1/4, dy/dt=e^t−e^{−t} → e²−1/e². d²x/dt²=2/t³ → 1/4, d²y/dt²=e^t+e^{−t} → e²+1/e². 1/t 의 미분 부호(T-부호)만 조심하면 대입뿐. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=1/t, y=e^t+e^{−t} → (−1/t², e^t−e^{−t}) → t=2: 속도 (−1/4, e²−1/e²) → (2/t³, e^t+e^{−t}) → 가속도 (1/4, e²+1/e²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $\left(-\dfrac{1}{4},\,e^2-\dfrac{1}{e^2}\right)$, 가속도: $\left(\dfrac{1}{4},\,e^2+\dfrac{1}{e^2}\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0763.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=1/t 를 1/t²·√t 로, y 를 e^{2t}−e^{−2t} 로, t=2 를 t=1(e−1/e)로. 제약: t>0 정의역, 답에 e 의 거듭제곱이 남으므로 표현 형식을 통일."
    creative: "(1) 가속도의 y 성분이 위치의 y 성분과 같음(y''=y)을 이용해 시각에 무관한 관계를 묻기(★2 · I-PD d1) (2) x 성분 속도가 −1/4 인 시각을 거꾸로(★1~2 · I-BW d1) (3) 속력이 최소가 되는 시각(★3 · 유형 08 최대·최소 결합)."
```

```yaml
- id: RPM-CALC2-0764
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P 의 위치가 x=2√t, y=ln t² 일 때 t=2 에서의 속도와 가속도.
  category: "ln t²=2ln t 정리 → 성분별 미분 → t=2 대입 → 속도 · 가속도"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위를 움직이는 점의 속도·가속도(위치의 성분별 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=1/√t → 1/√2=√2/2, dy/dt=2/t → 1. d²x/dt²=−(1/2)t^{−3/2} → −1/(4√2)=−√2/8, d²y/dt²=−2/t² → −1/2. ln t² 을 2ln t 로 읽는 표기(T-표기)와 유리화만 있다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=2√t, y=2ln t → (1/√t, 2/t) → t=2: 속도 (√2/2, 1) → (−(1/2)t^{−3/2}, −2/t²) → 가속도 (−√2/8, −1/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $\left(\dfrac{\sqrt{2}}{2},\,1\right)$, 가속도: $\left(-\dfrac{\sqrt{2}}{8},\,-\dfrac{1}{2}\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0764.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2√t 의 계수, ln t² 을 ln t³ 으로, t=2 를 t=4(무리수 없이 정리)로. 제약: t>0, ln t² 을 2ln t 로 정리할 수 있어야 함."
    creative: "(1) ln t² 을 (ln t)² 으로 바꿔 표기 함정 대비(★2 · Mₜ 2) (2) 속도가 (1, 1) 방향과 평행한 시각(★2 · I-EQV d1) (3) 가속도의 크기가 최소인 t (★3 · 최대·최소 결합)."
```

```yaml
- id: RPM-CALC2-0765
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P 의 위치가 x=sin πt, y=t−cos πt 일 때 t=2 에서의 속도와 가속도.
  category: "삼각함수 합성 미분 → t=2 대입(sin 2π=0, cos 2π=1) → 속도 · 가속도"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위를 움직이는 점의 속도·가속도(위치의 성분별 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt=π cos πt → π, dy/dt=1+π sin πt → 1. d²x/dt²=−π² sin πt → 0, d²y/dt²=π² cos πt → π². 합성함수 미분에서 π 를 곱하는 것(T-단위)만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=sin πt, y=t−cos πt → (π cos πt, 1+π sin πt) → t=2: 속도 (π, 1) → (−π² sin πt, π² cos πt) → 가속도 (0, π²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $(\pi,\,1)$, 가속도: $(0,\,\pi^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0765.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin πt 를 sin 2πt 로, y 의 일차항 계수, t=2 를 t=1/2 로. 제약: 대입하는 t 에서 sin·cos 가 특수각 값이 되게, 답에 π 가 남는 형식 유지."
    creative: "(1) 가속도의 크기가 π² 으로 일정함을 보이기(★2 · I-PD d1) (2) 속도와 가속도가 수직인 시각(내적 0 · ★3 · 기하 결합) (3) 속력이 최대가 되는 t (|v|² 의 최대 · ★3 · 최대·최소 결합)."
```

### 유형 01 곡선의 볼록

```yaml
- id: RPM-CALC2-0766
  page: 108
  vendor_label: "유형 01 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=e^x sin x (0<x<2π) 가 위로 볼록한 구간. 5지선다.
  category: "y''=2e^x cos x → cos x<0 → (π/2, 3π/2)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록 구간(f'' 의 부호로 위로·아래로 볼록 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=e^x(sin x+cos x), y''=e^x(sin x+cos x+cos x−sin x)=2e^x cos x. e^x>0 이므로 y''<0 ⇔ cos x<0 ⇔ π/2<x<3π/2 (④). 곱의 미분 두 번과 삼각식 정리(Mₖ 2), 구간 제한이 T-범위. 대표문제 출발 ★2·통찰 없음·M_total 5 → −1 후보이나 두 번 미분 + 부호 판정 사슬이라 ★2 유지. [분류 이슈] 통찰 0·M_total 5 의 대표문제 — ★1 후보 기록.
  tier: star_2
  mechanism_primary: "y=e^x sin x → y''=2e^x cos x → e^x>0 이므로 cos x<0 → (π/2, 3π/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0766.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x sin x → e^x cos x(y''=−2e^x sin x → 위로 볼록 (0, π)) · e^{−x} sin x(y''=−2e^{−x} cos x) · 구간 (0, 4π). 제약: 지수·삼각 곱은 y'' 이 한 삼각함수로 정리되는 조합(진동수 1 · 지수 계수 ±1)이어야 선택지가 깔끔."
    creative: "(1) 위로 볼록한 구간의 길이를 묻기(★2) (2) e^{ax} sin x 로 두고 y'' 에 cos x 만 남는 a 를 거꾸로 묻기(★3 · I-BW d1) (3) 변곡점의 개수(2개)와 x 좌표의 합(2π)으로 유형 02 결합(★2)."
```

```yaml
- id: RPM-CALC2-0767
  page: 108
  vendor_label: "유형 01 곡선의 볼록"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²(ln x−2) 가 구간 (a, ∞) 에서 아래로 볼록할 때 실수 a 의 최솟값.
  category: "y''=2ln x−1 → ln x>1/2 → x>√e → a 의 최솟값 √e"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록 구간(f'' 의 부호로 위로·아래로 볼록 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2x ln x−3x, y''=2ln x−1. y''>0 ⇔ ln x>1/2 ⇔ x>√e. 아래로 볼록한 구간이 (√e, ∞) 이므로 (a, ∞) 가 그 안에 들려면 a≥√e, 최솟값 e^{1/2}. 미분 두 번에 로그 부등식 하나(Mₛ 1). 중하 출발 ★1~2·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=x²(ln x−2) → y''=2ln x−1 → y''>0 ⇔ x>√e → a 의 최솟값 e^{1/2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^{\frac{1}{2}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0767.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²(ln x−k) 의 k(1, 3)·차수 x³(ln x−1)(y''=6x ln x+5x → 경계 e^{−5/6}). 제약: y'' 이 ln x 의 일차식으로 정리되어 경계가 e 의 거듭제곱이 되게, x>0."
    creative: "(1) 「위로 볼록한 구간 (0, b) 의 b 의 최댓값」 으로 방향 반전(★1) (2) 변곡점의 좌표까지 묻기(★2) (3) x² ln x−ax² 의 변곡점 x 좌표가 e 가 되는 a (★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC2-0768
  page: 108
  vendor_label: "유형 01 곡선의 볼록"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=4x⁴−4ax³+6ax²+5 가 구간 (1, 3) 에서 위로 볼록하도록 하는 정수 a 의 최솟값. 5지선다.
  category: "y''=12(4x²−2ax+a) → 구간에서 음 → 아래로 볼록한 이차식의 끝점 조건 → a≥36/5 → 정수 최솟값 8"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「(1, 3) 에서 y''<0」 을 아래로 볼록한 이차식 g(x)=4x²−2ax+a 의 끝점 조건 g(1)≤0, g(3)≤0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간에서 볼록하도록 하는 미정계수(f'' 의 부호 조건 → 이차식의 구간 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y''=48x²−24ax+12a=12(4x²−2ax+a). g(x)=4x²−2ax+a 는 아래로 볼록한 이차식이라 열린 구간 (1, 3) 에서 음이 될 조건은 g(1)=4−a≤0, g(3)=36−5a≤0 → a≥36/5. 정수 최솟값 8 (⑤). 끝점에서 등호가 허용되는 T-경계와 두 조건 중 센 쪽을 고르는 판단. 중 출발 ★2·EQV d1·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y''=12(4x²−2ax+a) → (1, 3) 에서 음 ⇔ g(1)≤0, g(3)≤0 → a≥4, a≥36/5 → 정수 최솟값 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0768.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (1, 3) 을 (0, 2)·(2, 4) 로, 계수 4·−4a·6a 의 비(y'' 이 공통인수로 묶이는 구조)를 바꾸기. 제약: y'' 의 이차식이 아래로 볼록해야 끝점 조건이 성립하고, 답이 유리수 경계(36/5)를 넘는 첫 정수가 되게 분모 조정."
    creative: "(1) 「아래로 볼록하도록 하는 a 의 최댓값」 으로 부호 반전(★2) (2) 구간을 실수 전체로 두면 판별식 조건 a²−4a<0 으로 골조가 바뀜(★2 · I-EQV d1 다른 갈래) (3) 열린 구간과 닫힌 구간에서 답이 달라지는지 묻기(★3 · T-경계 · I-VF d1)."
```

### 유형 02 변곡점

```yaml
- id: RPM-CALC2-0769
  page: 108
  vendor_label: "유형 02 변곡점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=ln(x²+4)² 의 곡선 y=f(x) 의 두 변곡점 사이의 거리.
  category: "f=2ln(x²+4) → f''=4(4−x²)/(x²+4)² → x=±2 → y 좌표 같음 → 거리 4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 구하기(f''=0 · 부호 변화 확인 → 좌표·거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln(x²+4)² 을 2ln(x²+4) 로 읽으면 f'=4x/(x²+4), f''=4(4−x²)/(x²+4)². x=±2 에서 부호가 바뀌고 f(±2)=2ln 8 로 같으므로 두 변곡점 사이 거리는 4. 몫의 미분 한 번(Mₖ 2), 짝함수라 y 좌표가 같아 거리가 x 차이로 끝남. 대표문제 출발 ★2·통찰 없음·M_total 6 → ★2. [분류 이슈] 표기 ln(x²+4)² 이 (ln(x²+4))² 으로도 읽힘 — 답 4 는 2ln(x²+4) 해석(T-표기).
  tier: star_2
  mechanism_primary: "f=2ln(x²+4) → f''=4(4−x²)/(x²+4)² → 변곡점 x=±2, y=2ln 8 → 거리 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0769.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²+4 를 x²+1(변곡점 ±1/√3 → 거리 2/√3)·x²+9(±3 → 6)로, 계수 2 를 3 으로. 제약: 짝함수 구조를 유지하면 거리 = 2×(양의 변곡점 x). 답을 정수로 두려면 상수를 완전제곱수 k² 로(변곡점 ±k)."
    creative: "(1) 두 변곡점에서의 접선의 기울기의 곱을 묻기(★2 · I-SYM d1) (2) ln(x²+a) 의 변곡점 사이 거리가 4 가 되는 a 를 거꾸로(★2 · I-BW d1) (3) (ln(x²+4))² 으로 바꿔 표기 대비형(★3 · 계산 증가)."
```

```yaml
- id: RPM-CALC2-0770
  page: 108
  vendor_label: "유형 02 변곡점"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=x+3cos x (0≤x≤2π) 의 모든 변곡점의 x 좌표의 합.
  category: "y''=−3cos x → cos x=0 → x=π/2, 3π/2 → 부호 변화 확인 → 합 2π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 구하기(f''=0 · 부호 변화 확인 → 좌표·거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=1−3sin x, y''=−3cos x. 0≤x≤2π 에서 cos x=0 인 x=π/2, 3π/2 앞뒤로 y'' 의 부호가 바뀌므로 둘 다 변곡점, 합 2π. 미분 두 번·삼각방정식·부호 확인의 네 단계(Mₛ 2), 구간 끝점은 y''=−3≠0 이라 제외(T-경계). 중·서술형 출발 ★2·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=x+3cos x → y''=−3cos x → cos x=0 → x=π/2, 3π/2 (부호 변화) → 합 2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0770.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3cos x 의 계수, x+3sin x(변곡점 π 하나 · 끝점 0, 2π 는 제외되는 T-경계), 구간 [0, 4π]. 제약: 일차항은 y'' 에 영향 없음, 변곡점 x 좌표가 특수각이 되게."
    creative: "(1) 변곡점의 개수만 묻고 구간을 (0, 4π) 로(★1~2) (2) 변곡점에서의 접선의 기울기의 합(y'(π/2)+y'(3π/2)=2 · ★2) (3) x+a cos x 의 변곡점이 항상 직선 y=x 위에 있음을 보이기(★2 · I-PD d1)."
```

```yaml
- id: RPM-CALC2-0771
  page: 108
  vendor_label: "유형 02 변곡점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=xe^{−x} 의 변곡점에서의 접선의 방정식.
  category: "y''=(x−2)e^{−x} → 변곡점 (2, 2/e²) → 기울기 y'(2)=−1/e² → 접선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점에서의 접선(변곡점 좌표 + 그 점의 미분계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=(1−x)e^{−x}, y''=(x−2)e^{−x}. x=2 에서 부호가 바뀌어 변곡점 (2, 2e^{−2}). 기울기 y'(2)=−e^{−2} 이므로 y−2/e²=−(1/e²)(x−2), 즉 y=−x/e²+4/e². 변곡점과 접선의 두 기법 사슬(Mₛ 2), 계산은 가벼움. 중 출발 ★2·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y=xe^{−x} → y''=(x−2)e^{−x} → 변곡점 (2, 2/e²) → 기울기 −1/e² → y=−x/e²+4/e²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{e^2}x+\dfrac{4}{e^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0771.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "xe^{−x} → xe^{−2x}(변곡점 x=1)·xe^{x}(x=−2)·x²e^{−x}(변곡점 2±√2 둘 — 답이 둘이 되니 주의). 제약: 변곡점이 하나이고 접선의 절편이 e 의 거듭제곱으로 정리되게."
    creative: "(1) 접선의 x 절편(4)과 y 절편이 좌표축과 이루는 삼각형 넓이(★2) (2) xe^{−ax} 의 변곡점에서의 접선이 원점을 지나도록 하는 a (★3 · I-BW d1) (3) 이 접선과 곡선의 교점 개수(★3 · I-RT d1)."
```

```yaml
- id: RPM-CALC2-0772
  page: 108
  vendor_label: "유형 02 변곡점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²/2−4/x+2 의 변곡점과 원점 사이의 거리. 5지선다.
  category: "y''=1−8/x³ → x=2 → 변곡점 (2, 2) → 원점과의 거리 2√2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 구하기(f''=0 · 부호 변화 확인 → 좌표·거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=x+4/x², y''=1−8/x³. x³=8, 즉 x=2 앞뒤로 y'' 이 음→양이므로 변곡점 (2, 2−2+2)=(2, 2), 원점과의 거리 2√2 (④). x<0 에서는 y''>0 이라 변곡점이 없고 x=0 은 정의역 밖(T-범위). 변곡점 + 거리의 사슬(Mₛ 2). 중 출발 ★2·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y=x²/2−4/x+2 → y''=1−8/x³ → x=2 (부호 변화) → (2, 2) → 거리 2√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0772.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "−4/x 를 −a/x 로(변곡점 x=∛(2a)), x²/2 의 계수, 상수항. 제약: 변곡점 x 좌표가 정수이려면 2a 가 완전세제곱수(a=4 → 2, a=32 → 4), 거리가 근호로 정리되게 상수항 조정."
    creative: "(1) 변곡점이 직선 y=x 위에 있도록 상수항을 거꾸로 묻기(★2 · I-BW d1) (2) x<0 에서 변곡점이 없는 이유를 설명형으로(★2 · T-범위) (3) 변곡점에서의 접선과 두 좌표축이 이루는 삼각형 넓이(★3)."
```

### 유형 03 변곡점을 이용한 미정계수의 결정

```yaml
- id: RPM-CALC2-0773
  page: 109
  vendor_label: "유형 03 변곡점을 이용한 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2x³+ax²+bx+c 가 x=1 에서 극소이고 변곡점이 (−1, 6) 일 때 a+b+c.
  category: "f''(−1)=0 → a=6 · f'(1)=0 → b=−18 · f(−1)=6 → c=−16 → 합 −28"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 조건으로 미정계수 결정(f''(p)=0 · f(p)=q + 극값 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=6x²+2ax+b, f''=12x+2a. f''(−1)=0 → a=6. f'(1)=0 → 18+b=0, b=−18. f(−1)=−2+6+18+c=6 → c=−16. a+b+c=−28. 조건 셋을 일차식 셋으로 순서대로 푸는 표준 미정계수(Mₐ 2), 극소 확인 f''(1)=24>0. 대표문제 출발 ★2·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f''(−1)=0 → a=6 → f'(1)=0 → b=−18 → f(−1)=6 → c=−16 → a+b+c=−28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0773.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극소점 x=1, 변곡점 (−1, 6) 의 위치·y 값, 최고차항 계수 2 를 바꿈. 제약: 삼차함수의 변곡점 x 좌표는 −(이차항 계수)/(3×최고차 계수) 이므로 극소점과 변곡점이 달라야 하고 극소 확인(f''(1)>0)이 성립하게 배치."
    creative: "(1) 「극대·극소점의 중점이 변곡점」 임을 써서 극댓점을 바로 묻기(★3 · I-SYM d1) (2) 조건을 「변곡점에서의 접선의 기울기가 −24」 로 바꿔 f'(−1) 조건으로(★2 · I-EQV d1) (3) c 를 없애고 극솟값을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0774
  page: 109
  vendor_label: "유형 03 변곡점을 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=(ax²+bx)e^x 의 변곡점이 (−4, 12e^{−4}) 일 때 a+b.
  category: "y''=(ax²+(4a+b)x+2a+2b)e^x → y''(−4)=0 → a=b · y(−4)=12e^{−4} → a=b=1 → 2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 조건으로 미정계수 결정(f''(p)=0 · f(p)=q + 극값 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=(ax²+(2a+b)x+b)e^x, y''=(ax²+(4a+b)x+2a+2b)e^x. y''(−4)=0 → 2a−2b=0, a=b. y(−4)=(16a−4b)e^{−4}=12e^{−4} → 12a=12 → a=b=1, a+b=2. 곱의 미분 두 번에서 계수 정리가 무거움(Mₖ 2), 연립은 가벼움. 중 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y=(ax²+bx)e^x → y''=(ax²+(4a+b)x+2a+2b)e^x → y''(−4)=0 ⇒ a=b → y(−4)=12e^{−4} ⇒ a=b=1 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0774.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변곡점 (−4, 12e^{−4}) 를 (−2, ·)·(−6, ·) 로, ax²+bx 에 상수항 c 를 추가하고 조건 하나 더. 제약: y''=0 과 y 값 조건이 a, b 의 독립 일차식 둘이 되게, e 의 지수가 변곡점 x 와 일치."
    creative: "(1) 변곡점이 둘(y''=(x+1)(x+4)e^x)임을 이용해 「다른 변곡점의 x 좌표」 를 묻기(★2 · I-EQV d1) (2) 조건을 「변곡점에서의 접선이 x 축과 평행」 으로(y'(−4)=0 · ★3 · I-CON d1) (3) (ax²+bx)e^{kx} 로 k 까지 미지수로 두면 조건 세 개 필요(★3 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0775
  page: 109
  vendor_label: "유형 03 변곡점을 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=(ln(1/(ax)))² 의 변곡점이 직선 y=5x 위에 있을 때 양수 a.
  category: "(ln(1/(ax)))²=(ln ax)² → y''=2(1−ln ax)/x² → 변곡점 (e/a, 1) → 1=5e/a → a=5e"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점 조건으로 미정계수 결정(f''(p)=0 · f(p)=q + 극값 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln(1/(ax))=−ln(ax) 이므로 y=(ln ax)². y'=2ln(ax)/x, y''=2(1−ln ax)/x². ln ax=1, 즉 x=e/a 앞뒤로 부호가 바뀌고 y=1 이므로 변곡점 (e/a, 1). 이것이 y=5x 위 → 1=5e/a → a=5e. 로그 정리·합성·몫의 미분·직선 대입(Mₛ 2·Mₖ 2), x>0·a>0 정의역. 중 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y=(ln ax)² → y''=2(1−ln ax)/x² → 변곡점 (e/a, 1) → y=5x 대입 → a=5e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5e$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0775.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=5x 를 y=kx(a=ke)·y=x+b 로, (ln ax)² 에 상수 c 를 더하기. 제약: 변곡점 (e/a, 1) 의 y 좌표가 a 와 무관하게 1 이므로 직선 조건이 a 의 일차식이 되게."
    creative: "(1) 변곡점의 y 좌표가 a 에 무관하게 1 임을 먼저 보이고 직선 조건으로 잇기(★2 · I-PD d1) (2) 변곡점에서의 접선의 기울기(2a/e)가 2 가 되는 a (★2 · I-BW d1) (3) (ln ax)³ 으로 차수를 올려 변곡점 둘(★3)."
```

```yaml
- id: RPM-CALC2-0776
  page: 109
  vendor_label: "유형 03 변곡점을 이용한 미정계수의 결정"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ax²+3x−cos x 의 곡선에 변곡점이 존재하도록 하는 실수 a 의 값의 범위.
  category: "f''=2a+cos x → 부호 변화 존재 ⇔ −2a 가 cos x 의 치역 내부 → −1/2<a<1/2 (등호 제외)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「변곡점 존재」 를 「f''=2a+cos x 의 부호 변화 존재」 → 「−2a 가 cos x 의 치역 (−1, 1) 의 내부」 로 옮기고, a=±1/2 에서는 f''=0 이어도 부호가 안 바뀜을 따로 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변곡점이 존재할 조건(f'' 의 부호 변화 존재 → 매개변수 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=2ax+3+sin x, f''=2a+cos x. 변곡점이 있으려면 f'' 이 양·음을 모두 가져야 하므로 −1<−2a<1. a=1/2 이면 f''=cos x+1≥0 으로 x=π 에서 0 이지만 부호가 바뀌지 않고 a=−1/2 도 같아서 등호 제외 → −1/2<a<1/2. 조건의 동치 변환과 경계 기각이 골조(EQV d2·T-경계·T-범위). 상중 출발 ★3·통찰 1(d2)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "f''=2a+cos x → 부호 변화 존재 ⇔ −1<−2a<1 → a=±1/2 는 접하기만 하므로 기각 → −1/2<a<1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}<a<\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더 · 답 크롭은 0777 것)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0776.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos x 의 계수(−2cos x → −1<a<1)·ax² 의 계수((a/2)x² → −1<a<1)·일차항 3x 는 무관. 제약: f'' 이 「상수 + 유계 삼각함수」 꼴이 되게, 경계값에서 접하지만 부호가 안 바뀌는 구조 유지."
    creative: "(1) 「변곡점이 존재하지 않도록 하는 a 의 범위」 로 여집합(등호 포함이 핵심 · ★3 · I-VF d1) (2) [0, 2π] 에서 변곡점이 정확히 2개가 되는 a (★3 · I-MI d1) (3) −cos x 를 −e^{−x}·−sin x 로 바꿔 유계성 유무에 따른 차이 비교(★3~4 · I-SC d1)."
```

### 유형 04 $y=f'(x)$의 그래프를 이용한 $y=f(x)$의 이해

```yaml
- id: RPM-CALC2-0777
  page: 109
  vendor_label: "유형 04 $y=f'(x)$의 그래프를 이용한 $y=f(x)$의 이해"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    y=f'(x) 의 그래프(0, b, f 에서 x 축과 만나고 a·d 에서 극소, c·e 에서 극대)가 주어질 때 y=f(x) 가 아래로 볼록한 구간 고르기. 5지선다.
  category: "f 아래로 볼록 ⇔ f''>0 ⇔ f' 증가 → 그래프에서 f' 증가 구간 (a, c), (d, e) → 보기 ② (a, c)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 의 볼록성을 f' 그래프의 부호가 아니라 증가·감소로 읽는 표현 전환(그래프 → f'' 의 부호)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 의 그래프로 f 의 볼록·극값·변곡점 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 가 아래로 볼록한 구간은 f''>0, 즉 f' 이 증가하는 구간이다. 그림에서 f' 은 x=a 에서 극소, c 에서 극대, d 에서 극소, e 에서 극대이므로 증가 구간은 (a, c), (d, e). 보기 중 이에 들어가는 것은 ② (a, c) 뿐(③ (b, d) 와 ⑤ (d, f) 는 감소 구간을 포함). f'>0 인 구간 (b, f) 와 혼동하는 T-표기 함정. 대표문제 출발 ★2·RT d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f 아래로 볼록 ⇔ f' 증가 → f' 그래프의 증가 구간 (a, c), (d, e) → 보기 대조 → ②"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: "crop:fig-0777.png"
  latex: latex-bank/rpm-calc2/items/0777.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(a~f)은 고정하고 물음을 「위로 볼록한 구간」((0, a)·(c, d)·(e, f)) 이나 「변곡점의 개수」(a, c, d, e 의 4개)로. 제약: 보기 5개 중 정답이 하나가 되게 구간을 배치하고 f' 의 극점 위치를 라벨로 명시."
    creative: "(1) f 의 극값 위치(f' 부호 변화 0, b, f)와 변곡점(a, c, d, e)을 한꺼번에 ㄱㄴㄷ 로(★2~3 · I-RT d1) (2) f'' 의 그래프를 주고 f 의 볼록 구간을 묻는 두 단계 역추적(★3 · I-RT d2) (3) f 의 그래프 개형 고르기(★3)."
```

```yaml
- id: RPM-CALC2-0778
  page: 109
  vendor_label: "유형 04 $y=f'(x)$의 그래프를 이용한 $y=f(x)$의 이해"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=f'(x) 의 그래프(원점·b·d 에서 x 축을 지나고 a 에서 극대, c 에서 극소)가 주어질 때 ㄱ 극값 3개 · ㄴ (c, e) 에서 위로 볼록 · ㄷ 변곡점 2개 중 옳은 것. 5지선다.
  category: "f' 부호 변화 3곳(0, b, d) → 극값 3개 · (c, e) 에서 f' 증가 → 아래로 볼록 · f' 극점 2곳(a, c) → 변곡점 2개 → ㄱ, ㄷ"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극값·볼록·변곡점을 각각 f' 그래프의 부호 변화·증감·극점으로 읽는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 의 그래프로 f 의 볼록·극값·변곡점 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: f' 이 0 을 지나며 부호가 바뀌는 x 는 0, b, d 의 3개 → 참. ㄴ: (c, e) 에서 f' 은 증가하므로 f''>0, 아래로 볼록 → 거짓. ㄷ: f' 의 극점은 a(극대)·c(극소) 둘 → 변곡점 2개 → 참. 답 ④. f' 의 값이 아니라 증감을 읽어야 하고 원점을 지나는 부호 변화를 빠뜨리기 쉬움(T-표기·T-경계). 중 출발 ★2·RT d1·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "f' 그래프 → 부호 변화 0, b, d (극값 3) → (c, e) 증가 (아래로 볼록) → 극점 a, c (변곡점 2) → ㄱ, ㄷ"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0778.png"
  latex: latex-bank/rpm-calc2/items/0778.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨 고정. 보기 문장을 「극댓값을 갖는 x 는 b 뿐」·「(0, a) 에서 위로 볼록」·「변곡점은 3개」 로 교체. 제약: f' 이 원점을 지나 부호가 바뀌는 구조(x=0 도 극값)를 살릴지 결정하고 참·거짓이 섞이게."
    creative: "(1) f(0)=0 을 추가로 주고 f(b)>0 인지 묻기(★3 · I-RT d2) (2) 「극댓값의 개수 − 변곡점의 개수」 같은 합성 물음(★2) (3) f'' 의 그래프로 바꿔 f' 의 극값·f 의 변곡점을 두 단계로 읽기(★3 · I-RT d2)."
```

### 유형 05 함수의 그래프의 성질

```yaml
- id: RPM-CALC2-0779
  page: 110
  vendor_label: "유형 05 함수의 그래프의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2x/(x²+3) 의 그래프에 대해 ㄱ (0, ∞) 에서 위로 볼록 · ㄴ 점근선 x=0 · ㄷ 변곡점 3개 중 옳은 것. 5지선다.
  category: "f''=4x(x−3)(x+3)/(x²+3)³ → 볼록 구간은 (0, 3) 까지 · 변곡점 3개 · 점근선은 y=0 → ㄷ만 참"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프의 성질 판별 ㄱㄴㄷ(볼록·변곡점·점근선·극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=(6−2x²)/(x²+3)², f''=4x(x²−9)/(x²+3)³. ㄱ: (0, 3) 에서 f''<0 이지만 (3, ∞) 에서 f''>0 이므로 (0, ∞) 전체에서 위로 볼록은 아님 → 거짓. ㄴ: 분모가 0 이 되지 않고 x→±∞ 에서 f→0 이므로 점근선은 y=0 → 거짓. ㄷ: x=−3, 0, 3 에서 부호 변화 → 변곡점 3개 → 참. 답 ③. 유리함수 이계도함수의 계산 마찰이 크지만(Mₖ 3) 통찰은 없음. 대표문제 출발 ★2·M_total 8 → ★2. [분류 이슈] 계산 마찰만 큰 절차형 — 변형 시 마찰로 난이도를 올리지 말 것.
  tier: star_2
  mechanism_primary: "f=2x/(x²+3) → f''=4x(x−3)(x+3)/(x²+3)³ → 볼록 구간 (0, 3)·(3, ∞) 분리 → 변곡점 −3, 0, 3 → 점근선 y=0 → ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더 · 답 크롭은 0780 것)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0779.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²+3 을 x²+1(변곡점 0, ±√3)·x²+a 로, 분자 2x 를 kx 로. 제약: 기함수 구조를 유지하면 변곡점이 0, ±√(3a) 로 대칭이고 ㄱ 의 구간 끝이 √(3a) 로 깔끔."
    creative: "(1) 점근선 y=0 을 극한으로 직접 묻기(★1~2) (2) 세 변곡점이 한 직선(y=x/3) 위에 있음을 보이기(★3 · I-SYM d1) (3) 최대·최소(x=±√3 에서 ±√3/3)까지 묶어 유형 06 결합(★3)."
```

```yaml
- id: RPM-CALC2-0780
  page: 110
  vendor_label: "유형 05 함수의 그래프의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^{−x} sin x (0≤x≤π) 에 대해 ㄱ 극댓값 e^{−π/2} · ㄴ (π/2, π) 에서 아래로 볼록 · ㄷ 변곡점 (π/4, (√2/2)e^{−π/4}) 중 옳은 것.
  category: "f'=e^{−x}(cos x−sin x) → 극대 x=π/4 · f''=−2e^{−x}cos x → (π/2, π) 아래로 볼록 · 변곡점 x=π/2 → ㄴ"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프의 성질 판별 ㄱㄴㄷ(볼록·변곡점·점근선·극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=e^{−x}(cos x−sin x) 는 x=π/4 에서 양→음, 극댓값 f(π/4)=(√2/2)e^{−π/4} 이므로 ㄱ(e^{−π/2}) 은 거짓. f''=−2e^{−x}cos x 는 (π/2, π) 에서 양 → ㄴ 참. 변곡점은 cos x=0 인 x=π/2, 좌표 (π/2, e^{−π/2}) 이므로 ㄷ 의 (π/4, …) 는 극대점 → 거짓. 답 ㄴ. 극대점·변곡점 혼동(T-표기)과 닫힌 구간 끝점(T-경계). 중 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f=e^{−x} sin x → f'=e^{−x}(cos x−sin x) (극대 π/4) → f''=−2e^{−x}cos x (변곡점 π/2 · (π/2, π) 아래로 볼록) → ㄴ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0780.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{−x} sin x → e^{−x} cos x·e^{x} sin x, 구간 [0, 2π]. 제약: f'' 이 한 삼각함수만 남는 조합(진동수 1·지수 계수 ±1)이어야 변곡점이 특수각."
    creative: "(1) 극댓값과 변곡점의 y 좌표의 비(√2 e^{π/4})를 묻기(★2) (2) [0, nπ] 로 넓혀 변곡점·극값 개수의 규칙(★3 · I-PD d1) (3) 극대점·변곡점·원점이 이루는 삼각형 넓이(★3)."
```

### 유형 06 분수함수의 최대·최소

```yaml
- id: RPM-CALC2-0781
  page: 110
  vendor_label: "유형 06 분수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    −2≤x<3 에서 f(x)=(x²−3x+1)/(x−3) 의 최댓값.
  category: "f'=(x−2)(x−4)/(x−3)² → x=2 극대 → f(2)=1 · x→3− 에서 −∞ → 최댓값 1"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 구간 최대·최소(f'=0 → 증감 → 끝점·극값 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=(x²−6x+8)/(x−3)²=(x−2)(x−4)/(x−3)². 구간 −2≤x<3 에서 x=2 앞뒤로 양→음이므로 극대이자 최대, f(2)=(4−6+1)/(−1)=1. x→3− 에서 f→−∞ 라 최솟값은 없고 f(−2)=−11/5 는 최대와 무관. 몫의 미분과 인수분해(Mₖ 2), 반열린 구간(T-범위·T-경계). 대표문제 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=(x−2)(x−4)/(x−3)² → [−2, 3) 에서 x=2 극대 → f(2)=1 → x→3− 에서 −∞ 확인 → 최댓값 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0781.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−2, 3) 을 [0, 3)·(3, 5](x=4 극소)로, 분자 x²−3x+1 의 상수항. 제약: f' 의 분자가 인수분해되는 이차식(x=3 이 근이 아니어야 함), 구간 안에 극점이 하나만 들어오게."
    creative: "(1) f=x+1/(x−3) 로 나눠 극값을 보이는 다른 풀이(★2 · I-RT d1 · 다항식 나눗셈) (2) 구간을 (3, 5] 로 바꿔 최솟값(x=4 → 5)을 묻기(★2) (3) 「최댓값이 존재하지 않는 구간」 을 고르게 하기(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC2-0782
  page: 110
  vendor_label: "유형 06 분수함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=(5x−3)/(x²+x+1) (x≥−1) 이 x=a 에서 최댓값 b 를 가질 때 a²+b².
  category: "f'=−(5x+4)(x−2)/(x²+x+1)² → x=2 극대 → f(2)=1 · x→∞ 에서 0 → a=2, b=1 → 5"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 구간 최대·최소(f'=0 → 증감 → 끝점·극값 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=(−5x²+6x+8)/(x²+x+1)²=−(5x+4)(x−2)/(x²+x+1)². x≥−1 에서 x=−4/5 극소, x=2 극대. f(2)=7/7=1 이고 x→∞ 에서 f→0, f(−1)=−8 이므로 최댓값은 1 (x=2). a²+b²=4+1=5. 몫의 미분·인수분해·끝점과 무한 쪽 비교(Mₛ 2·Mₜ 2). 중·서술형 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=−(5x+4)(x−2)/(x²+x+1)² → x≥−1 에서 x=2 극대 → f(2)=1 → x→∞ 에서 0 과 f(−1)=−8 비교 → a=2, b=1 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0782.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 5x−3 을 ax+b 로(f' 의 분자가 인수분해되게 계수 선택), 구간 x≥−1 을 x≥0·실수 전체(최솟값 −25/3 도 물음)로. 제약: 분모 x²+x+1>0, f' 의 분자가 인수분해, 극대점이 구간 안."
    creative: "(1) 최댓값·최솟값의 합(1−25/3)을 묻기(★2) (2) 「x≥k 에서 최댓값이 1 이 되는 k 의 최댓값」(★3 · I-BW d1 · T-경계) (3) y=f(x) 와 y=t 의 교점 조건(판별식)으로 치역을 구하는 풀이와 비교(★3 · I-SC d1)."
```

```yaml
- id: RPM-CALC2-0783
  page: 110
  vendor_label: "유형 06 분수함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(ax+b)/(x²−x+2) 가 x=−1 에서 최솟값 −1 을 가질 때 ab. 5지선다.
  category: "f(−1)=−1 → b−a=−4 · f'(−1)=0 → a+3b=0 → a=3, b=−1 → ab=−3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건으로 분수함수의 미정계수 결정(f(p)=q · f'(p)=0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(−1)=(b−a)/4=−1 → b−a=−4. f' 의 분자 a(x²−x+2)−(ax+b)(2x−1) 이 x=−1 에서 0 → 4a+3(b−a)=a+3b=0. 연립하면 a=3, b=−1, ab=−3 (②). 확인: f'=−(3x−5)(x+1)/(x²−x+2)² 로 x=−1 에서 음→양이고 x→−∞ 에서 f→0>−1 이므로 최솟값 맞음. 극값 조건 두 개를 연립하는 표준 미정계수(Mₐ 2). 중 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=−1 에서 최솟값 −1 → f(−1)=−1, f'(−1)=0 → b−a=−4, a+3b=0 → a=3, b=−1 → ab=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0783.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최솟점 x=−1·최솟값 −1 을 바꾸거나 분모를 x²+2 로. 제약: 분모가 항상 양, 두 조건이 a, b 의 독립 일차식, 구한 a, b 로 실제 최소인지(x→±∞ 극한 0 과 비교) 검증되게."
    creative: "(1) 최댓값도 구하기(x=5/3 → 1/2 · ★2) (2) 조건을 「y=f(x) 와 y=−1 이 x=−1 에서 접함」 으로(★3 · I-EQV d1) (3) a, b 가 정수이고 최솟값만 주어질 때 (a, b) 쌍 세기(★3 · I-VF d1)."
```

### 유형 07 무리함수의 최대·최소

```yaml
- id: RPM-CALC2-0784
  page: 111
  vendor_label: "유형 07 무리함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x√(1−x²) 의 최댓값 M, 최솟값 m 일 때 M−m. 5지선다.
  category: "정의역 [−1, 1] → f'=(1−2x²)/√(1−x²) → x=±√2/2 → M=1/2, m=−1/2 → 1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 최대·최소(정의역 → f'=0 → 끝점 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역 −1≤x≤1. f'=√(1−x²)−x²/√(1−x²)=(1−2x²)/√(1−x²). x=±√2/2 에서 극값, f(√2/2)=1/2, f(−√2/2)=−1/2, 끝점 f(±1)=0. M−m=1 (③). 기함수라 m=−M 을 쓰면 반으로 줄지만 표준 풀이는 둘 다 계산. 곱·합성 미분과 통분(Mₖ 2), 정의역이 T-범위. 대표문제 출발 ★2·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "정의역 [−1, 1] → f'=(1−2x²)/√(1−x²) → x=±√2/2 → f=±1/2, 끝점 0 → M−m=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0784.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1−x² 을 4−x²(극점 ±√2 · M=2)·a²−x² 로, x 를 x² 으로(x²√(1−x²) → 극점 ±√(2/3)). 제약: 근호 안이 a²−x² 이어야 정의역이 닫힌 구간, 극값이 정리되는 수."
    creative: "(1) M−m 대신 「M 을 갖는 x」·「Mm」 (★2) (2) x=sin θ 치환으로 (1/2)sin 2θ 임을 보이는 다른 풀이(★2 · I-SC d1 · 04 삼각함수 결합) (3) 기함수 대칭으로 m=−M 임을 먼저 밝히고 답하기(★2 · I-SYM d1)."
```

```yaml
- id: RPM-CALC2-0785
  page: 111
  vendor_label: "유형 07 무리함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=√x+√(6−x) 가 x=a 에서 최댓값 b 를 가질 때 ab.
  category: "정의역 [0, 6] → f'=1/(2√x)−1/(2√(6−x))=0 → x=3 → f(3)=2√3 → ab=6√3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 최대·최소(정의역 → f'=0 → 끝점 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역 0≤x≤6. f'=1/(2√x)−1/(2√(6−x)) 는 x=3 에서 0, 앞에서 양·뒤에서 음이므로 최대. f(3)=2√3, 끝점 f(0)=f(6)=√6<2√3. a=3, b=2√3, ab=6√3. 정의역·미분·끝점 비교의 두 기법 사슬(Mₛ 2), 통찰 없음. 중 출발 ★2·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "정의역 [0, 6] → f'=1/(2√x)−1/(2√(6−x)) → x=3 최대 → f(3)=2√3 → ab=6√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0785.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6 을 2k 로(최대 x=k · 값 2√k · ab=2k√k), 2√x+√(6−x) 처럼 계수를 바꾸면 대칭이 깨져 x=24/5. 제약: 정의역 [0, a] 유지, 답의 근호가 정리되게 k 선택."
    creative: "(1) 대칭축 x=3 을 근거로 최대점을 짐작하고 미분으로 확인(★2 · I-SYM d1) (2) (√x+√(6−x))²≤2·6 의 부등식 풀이와 비교(★3 · I-SC d1) (3) 최솟값 √6 과 최댓값의 비 √2 를 묻기(★2 · T-경계)."
```

```yaml
- id: RPM-CALC2-0786
  page: 111
  vendor_label: "유형 07 무리함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, a] 에서 f(x)=(x+a)√(a²−x²) 의 최댓값이 √3/3 일 때 양수 a.
  category: "f'=−(2x−a)(x+a)/√(a²−x²) → x=a/2 최대 → f(a/2)=(3√3/4)a²=√3/3 → a=2/3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 최댓값 조건으로 매개변수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=√(a²−x²)−x(x+a)/√(a²−x²)=(a²−ax−2x²)/√(a²−x²)=−(2x−a)(x+a)/√(a²−x²). 0<x<a 에서 x=a/2 앞뒤로 양→음이므로 최대. f(a/2)=(3a/2)·(√3a/2)=(3√3/4)a². 이것이 √3/3 → a²=4/9, a=2/3. 매개변수 a 가 구간과 함수에 모두 들어 Mₐ 2, 통분·인수분해 Mₖ 2. 중 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=−(2x−a)(x+a)/√(a²−x²) → [0, a] 에서 x=a/2 최대 → (3√3/4)a²=√3/3 → a=2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0786.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 √3/3 을 3√3(a=2)·√3 으로, (x+a) 를 (x+2a) 로(극점이 달라짐). 제약: 극점 x=a/2 가 [0, a] 안에 있고 f(a/2)=(3√3/4)a² 이 주어진 값에서 a>0 으로 유일하게 풀리게."
    creative: "(1) x=a cos θ 치환으로 반원에 내접하는 사다리꼴 넓이 문제로 바꾸기(★3 · I-RT d2 · 기하 결합) (2) 「최댓값을 갖는 x 가 1」 로 조건을 바꾸면 a=2 (★2 · I-BW d1) (3) 구간을 [−a, a] 로 넓혀 최솟값(x=−a 에서 0)도 묻기(★2 · T-경계)."
```

### 유형 08 지수함수의 최대·최소

```yaml
- id: RPM-CALC2-0787
  page: 111
  vendor_label: "유형 08 지수함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [−2, 3] 에서 f(x)=(x²−3x+1)e^x 의 최댓값 M, 최솟값 m 일 때 Mm.
  category: "f'=(x−2)(x+1)e^x → 극대 x=−1 (5/e) · 극소 x=2 (−e²) · 끝점 f(3)=e³ 가 최대 → Mm=−e⁵"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 구간 최대·최소(f'=0 → 증감 → 끝점·극값 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=(x²−x−2)e^x=(x−2)(x+1)e^x. [−2, 3] 에서 x=−1 극대 5/e, x=2 극소 −e². 끝점 f(−2)=11/e², f(3)=e³ 이고 e³>5/e 이므로 최댓값은 끝점의 e³, 최솟값은 −e². Mm=−e⁵. 극댓값을 최댓값으로 착각하는 T-경계 함정이 핵심이고 네 값의 대소 비교(Mₖ 2). 대표문제 출발 ★2·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=(x−2)(x+1)e^x → 극대 5/e, 극소 −e² → 끝점 11/e², e³ 비교 → M=e³, m=−e² → Mm=−e⁵"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-e^5$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0787.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−2, 3] 을 [−2, 1](최대가 극댓값 5/e 로 바뀜)·[0, 3] 으로, 이차식 x²−3x+1 을 x²−3x+2 등으로. 제약: f' 의 이차식이 인수분해되고 극점이 구간 안, 끝점 값과 극값의 대소가 e 의 거듭제곱 비교로 명확하게."
    creative: "(1) 「최댓값을 갖는 x 가 구간의 끝점」 임을 고르는 ㄱㄴㄷ(★2 · T-경계) (2) 구간 [−2, k] 에서 최댓값이 e^k 이 되는 k 의 최솟값(★3 · I-BW d1) (3) (x²+ax+1)e^x 의 극댓값이 최댓값이 되도록 하는 구간·a 의 범위(★4 · I-EQV d2 · I-VF d1)."
```

```yaml
- id: RPM-CALC2-0788
  page: 111
  vendor_label: "유형 08 지수함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [−1, 0] 에서 f(x)=−x²e^{4x} 이 x=a 에서 최솟값 b 를 가질 때 a/b.
  category: "f'=−2x(2x+1)e^{4x} → [−1, 0] 에서 x=−1/2 극소 → b=−1/(4e²) → a/b=2e²"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 구간 최대·최소(f'=0 → 증감 → 끝점·극값 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=(−2x−4x²)e^{4x}=−2x(2x+1)e^{4x}. −1<x<−1/2 에서 음, −1/2<x<0 에서 양이므로 x=−1/2 에서 극소이자 최소. b=f(−1/2)=−(1/4)e^{−2}, a=−1/2, a/b=(−1/2)·(−4e²)=2e². 끝점 f(−1)=−e^{−4}, f(0)=0 은 모두 b 보다 큼. 음수 값의 대소(T-부호)와 닫힌 구간(T-경계). 중 출발 ★2·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=−2x(2x+1)e^{4x} → [−1, 0] 에서 x=−1/2 최소 → b=−1/(4e²) → a/b=2e²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2e^2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0788.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{4x} 를 e^{2x}(극소 x=−1)·e^{kx}(극소 x=−2/k)로, 구간 [−1, 0] 을 [−2, 0] 으로. 제약: 극소점 −2/k 가 구간 안에 오게 k 와 구간을 맞추고, a/b 가 e 의 거듭제곱 곱으로 정리되게."
    creative: "(1) 부호를 뒤집어 x²e^{4x} 의 최댓값(같은 골조 · ★2) (2) 「최솟값을 갖는 x 가 −1/2」 를 조건으로 주고 k 를 묻기(★2 · I-BW d1) (3) 구간을 [−1, c] 로 두고 최댓값이 0 이 되는 c 의 범위(★3 · T-경계 · I-VF d1)."
```

```yaml
- id: RPM-CALC2-0789
  page: 111
  vendor_label: "유형 08 지수함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, 4] 에서 f(x)=kx²/e^x 의 최댓값이 8 일 때 양수 k.
  category: "f'=kx(2−x)e^{−x} → x=2 극대 → 4k/e²=8 → k=2e²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 최댓값 조건으로 매개변수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=kx²e^{−x}, f'=k(2x−x²)e^{−x}=kx(2−x)e^{−x}. k>0 이므로 (0, 2) 증가·(2, 4) 감소, 최대는 x=2 의 f(2)=4k/e². 끝점 f(0)=0, f(4)=16k/e⁴<4k/e². 4k/e²=8 → k=2e². k>0 이 증감 방향을 정하는 T-범위. 중 출발 ★2·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=kx(2−x)e^{−x} → k>0 이라 x=2 최대 → 4k/e²=8 → k=2e²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2e^2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0789.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 8 을 다른 양수로, 구간 [0, 4] 를 [0, 3]·[1, 5] 로, x² 을 x³(극대 x=3 · 27k/e³)으로. 제약: 극대점이 구간 안에 있고 끝점 값이 극댓값보다 작음이 자명하게, k>0."
    creative: "(1) k<0 이면 최솟값 문제로 뒤집힘을 묻기(★2 · T-부호) (2) 「[0, t] 에서 최댓값이 4k/e² 이 되는 t 의 최솟값」(★2 · I-BW d1 · T-경계) (3) kx²e^{−x}=8 의 실근 개수를 k 로 논하기(★3 · I-RT d1 · 방정식 결합)."
```

```yaml
- id: RPM-CALC2-0790
  page: 111
  vendor_label: "유형 08 지수함수의 최대·최소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>2 일 때 f(x)=(x²+ax+a)e^{−x} 의 극솟값을 g(a) 라 하면 g(a) 의 최댓값. 5지선다.
  category: "f'=−x(x+a−2)e^{−x} → a>2 라 극소 x=2−a → g(a)=(4−a)e^{a−2} → g'(a)=(3−a)e^{a−2} → a=3 → e"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극솟값을 a 의 함수 g(a)=(4−a)e^{a−2} 로 옮겨 그 함수를 다시 미분·최대화하는 2단 최적화 — a>2 로 두 임계점의 순서(2−a<0)를 먼저 확정해야 어느 쪽이 극소인지 정해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극값을 매개변수의 함수로 두고 다시 최대화(2단 최적화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=(2x+a−x²−ax−a)e^{−x}=−x(x+a−2)e^{−x}. a>2 이므로 2−a<0 이고 (−∞, 2−a) 감소·(2−a, 0) 증가·(0, ∞) 감소 → 극소는 x=2−a. g(a)=f(2−a)=(4−a)e^{a−2}, g'(a)=(3−a)e^{a−2} 에서 a=3 극대, g(3)=e (④). 극값을 매개변수 함수로 다시 최적화하는 2단 골조(RT d2)에 a>2 의 순서 결정(T-부호·T-범위). 상중 출발 ★3·통찰 1(d2)·M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "f'=−x(x+a−2)e^{−x} → a>2 ⇒ 극소 x=2−a → g(a)=(4−a)e^{a−2} → g'(a)=(3−a)e^{a−2} → a=3 → g(3)=e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0790.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x²+ax+a) 를 (x²+ax+b) 로 두 매개변수, a>2 를 a>4 등으로. 제약: a 의 범위가 두 임계점의 순서를 고정해야 하고(a<2 면 극소가 x=0 으로 바뀌어 g(a)=a 가 되니 골조 붕괴), g(a) 가 닫힌 형태로 미분 가능하며 극대 a=3 이 범위 안에 있게."
    creative: "(1) 극댓값 f(0)=a 와 극솟값의 차의 최솟값(★4 · I-RT d2 · I-CON d1) (2) a 의 범위를 없애고 a<2 / a=2 / a>2 로 극소점이 바뀌는 케이스 분류(★4 · I-MI d2) (3) 「극솟값이 최대가 되는 a 에서의 극소점의 좌표」(★3)."
```

### 유형 09 로그함수의 최대·최소

```yaml
- id: RPM-CALC2-0791
  page: 112
  vendor_label: "유형 09 로그함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [0, 2] 에서 f(x)=ln(x²−x+4) 가 x=a 에서 최댓값, x=b 에서 최솟값을 가질 때 a−b.
  category: "진수 항상 양 → f'=(2x−1)/(x²−x+4) → x=1/2 극소 · 끝점 f(2)=ln 6>f(0)=ln 4 → a=2, b=1/2 → 3/2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 구간 최대·최소(정의역 → f'=0 → 끝점 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²−x+4>0 (판별식 음) 이라 정의역 걱정이 없다. f'=(2x−1)/(x²−x+4) 는 x=1/2 에서 음→양이므로 최솟값은 f(1/2). 끝점 f(0)=ln 4, f(2)=ln 6 이므로 최댓값은 x=2. a−b=2−1/2=3/2. ln 이 증가함수라 진수의 최대·최소로 바꿔도 되고, 최댓값이 끝점에서 나오는 T-경계. 대표문제 출발 ★2·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(2x−1)/(x²−x+4) → x=1/2 최소 → 끝점 ln 4, ln 6 비교 → 최대 x=2 → a−b=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0791.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [0, 2] 를 [−1, 1](최대 x=−1)·[0, 3] 으로, 진수 x²−x+4 를 x²−2x+5 로. 제약: 진수의 판별식이 음(또는 구간에서 양), 진수의 꼭짓점이 구간 안, 끝점 비교가 명확하게."
    creative: "(1) 로그의 단조성으로 진수의 최대·최소로 환원하는 풀이와 미분 풀이 비교(★2 · I-SC d1) (2) 최댓값과 최솟값의 차 ln(24/15) 처럼 값 자체를 묻기(★2) (3) ln(x²−x+k) 의 최솟값이 ln 3 이 되는 k (★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC2-0792
  page: 112
  vendor_label: "유형 09 로그함수의 최대·최소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x ln(1/x) 의 최댓값.
  category: "로그 성질로 −x ln x 정리 → f'=0 → 극대 = 최대"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 최대·최소(정의역 → f'=0 → 극값 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x>0 에서 f(x)=x ln(1/x)=−x ln x. f'=−(ln x+1)=0 → x=1/e 이고 f' 가 +→− 로 바뀌어 극대이자 최대, f(1/e)=1/e. 로그 성질로 부호를 뒤집는 한 줄과 곱의 미분 한 번뿐이고 정의역 x>0 이 유일한 함정(T-범위). 유형 구역 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → −1 적용해 ★1(같은 구역의 중하 0767 과 같은 처리).
  tier: star_1
  mechanism_primary: "x ln(1/x)=−x ln x → f'=−(ln x+1)=0 → x=1/e 극대 → 최댓값 1/e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0792.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 계수를 x ln(1/x²) · 2x ln(1/x) · x ln(e/x) 처럼 바꿀 수 있음. 제약: f'=0 의 해가 e^(유리수) 로 떨어져 최댓값이 1/e 꼴로 정리되고, 정의역 x>0 안에서 극대가 하나만 생기게."
    creative: "(1) 최댓값 대신 최댓값을 갖는 x 를 묻기(★1 유지) (2) 구간 [1/e², 1] 을 붙여 끝점 비교를 강제(★2 · T-경계) (3) x ln(1/x)=k 의 실근 개수로 바꾸면 그래프 개형 판단이 필요해 ★3 · I-RT d1."
```

```yaml
- id: RPM-CALC2-0793
  page: 112
  vendor_label: "유형 09 로그함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=log₃(3−x)+2log₃(x+3) 이 x=a 에서 최댓값 b 를 가질 때 ab 의 값.
  category: "진수 조건으로 정의역 → f'=0 → 최댓값 → ab"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 최대·최소(정의역 → f'=0 → 극값 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 진수 조건 3−x>0, x+3>0 의 교집합이 정의역 −3<x<3(T-범위). f'=−1/((3−x)ln 3)+2/((x+3)ln 3)=0 → 2(3−x)=x+3 → x=1 이고 앞뒤 부호가 +→− 라 최대. b=f(1)=log₃ 2+2log₃ 4=log₃ 32=5log₃ 2, a=1 이므로 ab=5log₃ 2. 로그를 합쳐 진수 (3−x)(x+3)² 의 최댓값 32 로 봐도 같은 한 줄이라 통찰로 세지 않음. 유형 중 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "정의역 −3<x<3 → f'=0 → x=1 → b=log₃32=5log₃2 → ab=5log₃2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\log_3 2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0793.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 로그의 계수(1, 2 → 2, 1 또는 1, 3)와 진수의 상수(3−x, x+3 → 4−x, x+2)를 바꿀 수 있음. 제약: 정의역 교집합이 비지 않고 f'=0 의 해가 그 안의 유리수여야 하며, 최댓값의 진수가 2 의 거듭제곱처럼 log₃ 로 정리되는 값이어야 함."
    creative: "(1) 밑을 1/3 로 바꿔 같은 x 에서 최솟값이 되게(★2 · T-부호) (2) 로그를 합쳐 진수의 최대를 구하는 풀이와 직접 미분 풀이를 비교시키면 ★2 · I-SC d1 (3) 최댓값 b 를 주고 진수의 계수를 역으로 묻기(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC2-0794
  page: 112
  vendor_label: "유형 09 로그함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x ln x−2x+k 의 최솟값이 0 일 때 상수 k 의 값. 5지선다.
  category: "f'=0 으로 극소점 → 극솟값 = 0 → k 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최솟값 조건으로 로그함수의 미정계수 결정(f'=0 → 극솟값 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역 x>0(T-범위). f'=ln x+1−2=ln x−1=0 → x=e 에서 f' 가 −→+ 라 극소이자 최소. f(e)=e−2e+k=k−e=0 → k=e (⑤). 상수 k 가 그래프를 위아래로 평행이동만 시키므로 최솟값이 k 의 일차식으로 나오고, 최솟값 조건을 극솟값에 대입하는 표준 절차라 통찰(I-BW)로 세지 않음. 매개변수 포함으로 Mₐ 2. 유형 중 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=ln x−1=0 → x=e 극소 → f(e)=k−e=0 → k=e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0794.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "−2x 의 계수(−3 → x=e², 최솟값 k−e²)나 x ln x 의 계수(2x ln x−3x → x=e^(1/2))를 바꿀 수 있음. 제약: f'=0 의 해가 e 의 정수·간단한 유리수 거듭제곱으로 떨어지고 선택지가 e 의 유리식으로 정리되게."
    creative: "(1) 최솟값을 0 이 아닌 값(−1)으로 두거나 k 대신 x ln x 의 계수를 묻기(★2 유지) (2) 구간 [1, e²] 를 붙여 끝점과 극값을 비교하게 하면 ★2 · T-경계 (3) 모든 x>0 에서 f(x)≥0 이 되도록 하는 k 의 범위로 바꾸면 최솟값 조건의 역해석이 필요해 ★3 · I-BW d1."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 6(0762~0765 · 0767 · 0792) · ★2 25 · ★3 2(0776 · 0790) · ★4 0 · ★5 0
- 통찰을 센 문항 5(0768 I-EQV d1 · 0776 I-EQV d2 · 0777 I-RT d1 · 0778 I-RT d1 · 0790 I-RT d2) · 그중 `insight_type: 통찰형` 2(0776 · 0790) · 절차형 31 · premium 0
- 대상층: 하위권 6(교과서 4문 · 0767 · 0792) · 중하위권 22 · 중위권 3(0768 · 0776 · 0790) · 중상위권 2(0777 · 0778)
- type_hint 상위 5: 「좌표평면 위를 움직이는 점의 속도·가속도」 4 · 「변곡점 구하기(f''=0 · 부호 변화)」 3 · 「변곡점 조건으로 미정계수 결정」 3 · 「로그함수의 최대·최소(정의역 → f'=0 → 극값 판정)」 2 · 「곡선의 볼록 구간(f'' 의 부호)」 2 (그 밖에 f' 그래프 읽기 2 · 그래프의 성질 ㄱㄴㄷ 2 · 분수함수 최대·최소 2 · 무리함수 최대·최소 2 · 지수함수 최대·최소 2)
- 그림: 2문(`crop:fig-0777.png` · `crop:fig-0778.png`) · 나머지 31문 `none`
- 답 대조: 33문 모두 전사본 answer 와 일치(「전사 답 확인 필요」 0)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0766 | 유형 01 대표문제인데 통찰 0 · M_total 5 → 산식상 −1 후보. 두 번 미분 + 부호 판정 사슬을 보아 ★2 유지 | ★1 / ★2 |
| RPM-CALC2-0769 | 발문 표기 ln(x²+4)² 이 (ln(x²+4))² 으로도 읽힘(T-표기). 전사 답 4 는 2ln(x²+4) 해석 | ★2 |
| RPM-CALC2-0779 | 유리함수 이계도함수의 계산 마찰만 큼(Mₖ 3 · M_total 8 · 통찰 0). v3.8 §2.11 기준 질 저하 신호 — 변형 때 마찰로 난이도를 올리지 말 것 | ★2 |

카탈로그 차원 메모: 이 범위는 「변곡점(구하기 · 접선 · 미정계수 결정 · 존재 조건)」 8문과 「구간 최대·최소(분수·무리·지수·로그)」 14문이 두 축이다. 유형 카탈로그를 만들 때 (1) 「변곡점 구하기」와 「변곡점 조건으로 미정계수 결정」은 골조(f''=0 부호 변화 확인 vs 조건 대입 연립)가 달라 **따로** 세운다, (2) 유형 06~09 의 분수·무리·지수·로그 최대·최소는 「정의역/구간 → f'=0 → 증감 → 끝점·극값 비교」로 골조가 같아 **하나의 유형(함수 종류는 변형 축)** 으로 통합해도 된다, (3) 그 안의 「최대·최소 조건으로 미정계수 결정」(0783 · 0786 · 0789 · 0794)은 역방향 대입이라 별도 하위 유형으로 둔다, (4) 「f' 의 그래프로 f 를 읽기」(0777 · 0778)는 I-RT 가 고정으로 붙는 유일한 묶음이라 base ★3 후보로 따로 세운다.
