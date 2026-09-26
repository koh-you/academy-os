---
name: mechanism-데이터-RPM-CALC1-06-p2
description: RPM 미적분Ⅰ 06 도함수의 활용 (3)(2/3 · 유형 05 모든 실수에서 부등식이 성립할 조건 ~ 유형 13 시각에 대한 길이의 변화율) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 06 도함수의 활용 (3)
  unit_code: CALC1-06
  part: "2/3"
  extract_range: "84~88쪽 · 0542~0570"
  total_problems: 29
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 06 도함수의 활용 (3) (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 06 도함수의 활용 (3) 단원(93문) 가운데 84~88쪽의 29문항(0542~0570)을 다룬다. 구역은 유형 05 모든 실수에서 부등식이 성립할 조건(4문) · 유형 06 주어진 구간에서 부등식이 성립할 조건; 증가·감소의 활용(3문) · 유형 07 주어진 구간에서 부등식이 성립할 조건; 최대·최소의 활용(3문) · 유형 08 속도와 가속도 (1)(4문) · 유형 09 속도와 가속도 (2)(3문) · 유형 10 속도와 운동 방향(4문) · 유형 11 속도의 그래프의 해석(2문) · 유형 12 위로 던진 물체의 위치와 속도(3문) · 유형 13 시각에 대한 길이의 변화율(3문) 순이다. 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★1~2 · ★2 · ★3 출발)와 「서술형」 태그(+0)를 가진다. 그림 문항은 0563 · 0564(속도 그래프) · 0570(가로등 그림자) 세 문이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 출발점 조정은 「통찰 0(또는 d1 하나) · M_total 4」이면 대표문제·「중」 표시를 가리지 않고 −1 했다 — 이 범위의 속도·가속도 기본 문항(미분 한 번 · 방정식 한 번 · 대입)이 여기에 해당하며 벤더 「중」과는 1단 차이라 이슈로 올리지 않았다. 유형 05~07 은 「부등식 → 차함수 → (구간의) 최솟값 부호」 한 골조를 공유하므로 이 골조 자체는 유형 표준 절차로 보고 통찰을 매기지 않았고, 열린·닫힌 구간의 등호 처리는 Mₜ(T-경계)로만 반영했다.

## 문항 데이터

### 유형 05 모든 실수에서 부등식이 성립할 조건

```yaml
- id: RPM-CALC1-0542
  page: 84
  vendor_label: "유형 05 모든 실수에서 부등식이 성립할 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 $x$ 에 대하여 $x^4-4a^3x+48>0$ 이 성립하는 실수 $a$ 의 값의 범위. 5지선다.
  category: "사차식 최솟값 > 0 → 유일 극소점 대입 → a 의 부등식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 사차부등식이 성립할 조건(최솟값>0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^4-4a^3x+48$ 로 두면 $f'(x)=4(x^3-a^3)=4(x-a)(x^2+ax+a^2)$ 이고 실근은 $x=a$ 뿐이므로 $x=a$ 에서 극소이자 최소. $f(a)=48-3a^4>0$ → $a^4<16$ → $-2<a<2$ → ③.
    「항상 성립 ⇔ 최솟값 > 0」이 유형의 표준 절차이고 $x^2+ax+a^2>0$ 확인(Mₜ 1)만 남는다. 통찰 없음 · M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=x⁴−4a³x+48 → f'=4(x³−a³) → 유일 극소 x=a → f(a)=48−3a⁴>0 → a⁴<16 → −2<a<2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 48 과 일차항 계수 4a³ 의 조합을 바꿀 수 있음(x⁴−4a³x+3k⁴ 꼴이면 f(a)=3k⁴−3a⁴ → −k<a<k). 제약: 일차항 계수를 4a³ 으로 두어야 f' 의 실근이 x=a 하나로 떨어지고, 최솟값 부등식이 a⁴<(양수) 꼴이 되어 범위가 대칭 구간으로 나오도록 상수항은 3·(정수)⁴ 로."
    creative: "(1) 부등식을 ≥ 로 바꾸고 「등호를 만족하는 x 가 존재」 조건을 더해 a 의 값을 묻기(경계 처리 ★2) (2) 일차항을 −4ax 로 주면 극소점이 x=a^(1/3) 이 되어 계산만 무거워짐(질 저하 · 피할 것) (3) 「부등식이 성립하지 않는 실수 x 가 정확히 하나」로 뒤집으면 최솟값=0 등호 조건(I-EQV d1 · ★3)."
```

```yaml
- id: RPM-CALC1-0543
  page: 84
  vendor_label: "유형 05 모든 실수에서 부등식이 성립할 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 $x$ 에 대하여 $x^4-4x+a^2>2ax(2-x)$ 가 성립하는 양의 정수 $a$ 의 최솟값. 5지선다.
  category: "이항 정리 → 사차식 최솟값 > 0 → a 의 이차부등식 → 최소 정수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 부등식이 성립할 조건(이항 정리 후 최솟값>0 · 정수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이항하면 $f(x)=x^4+2ax^2-4(1+a)x+a^2$, $f'(x)=4(x^3+ax-1-a)=4(x-1)(x^2+x+1+a)$. $a>0$ 이면 이차 인수의 판별식 $1-4(1+a)<0$ 이라 극소는 $x=1$ 뿐. $f(1)=a^2-2a-3=(a-3)(a+1)>0$ → $a>3$ → 최소 양의 정수 4 → ④.
    이항·정리(Mₖ 2)와 $f'(1)=0$ 을 찾는 인수분해가 부담이나 골조는 유형 표준. 통찰 없음 · M_total 7 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "이항 → f(x)=x⁴+2ax²−4(1+a)x+a² → f'=4(x−1)(x²+x+1+a) → 유일 극소 x=1 → f(1)=(a−3)(a+1)>0 → a>3 → 최소 정수 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 2ax(2−x) 의 계수와 좌변 상수 a² 을 바꿀 수 있음. 제약: 정리한 f' 이 (x−1)(이차식) 으로 떨어지려면 f'(1)=0 이 되게 계수를 맞추고, 이차 인수가 a>0 에서 실근이 없어야 극소가 하나로 유지됨. 최종 부등식 (a−3)(a+1)>0 의 정수 경계가 선택지 안에 오도록."
    creative: "(1) 「양의 정수」를 「정수」로 바꾸면 a<−1 쪽이 살아나고 이차 인수의 실근 여부가 a 에 따라 달라져 케이스 분기(I-MI d2 · ★3) (2) 「두 곡선 y=x⁴−4x+a², y=2ax(2−x) 가 만나지 않을 조건」으로 서술(I-RT d1 · ★2) (3) 「부등식이 성립하지 않는 정수 x 의 개수」로 뒤집기(★3)."
```

```yaml
- id: RPM-CALC1-0544
  page: 84
  vendor_label: "유형 05 모든 실수에서 부등식이 성립할 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=\frac14x^4-\frac12x^2-3x$, $g(x)=x^3-3x^2-k$ 에 대하여 $y=f(x)$ 의 그래프가 $y=g(x)$ 의 그래프보다 항상 위쪽에 있도록 하는 실수 $k$ 의 범위.
  category: "차함수 h=f−g → 유일 극소 → 최솟값 > 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 그래프의 위아래 관계(차함수의 최솟값>0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=f(x)-g(x)=\dfrac14x^4-x^3+\dfrac52x^2-3x+k$, $h'(x)=x^3-3x^2+5x-3=(x-1)(x^2-2x+3)$. 이차 인수가 항상 양이므로 $x=1$ 유일 극소. $h(1)=k-\dfrac54>0$ → $k>\dfrac54$.
    「항상 위쪽 ⇔ 차함수의 최솟값 > 0」이 표준 절차. 분수 계수 정리(Mₖ 2) 외 함정 없음 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "h=f−g → h'=(x−1)(x²−2x+3) → 유일 극소 x=1 → h(1)=k−5/4>0 → k>5/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k>\dfrac{5}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수를 바꿀 수 있음. 제약: h' 이 (x−p)(실근 없는 이차) 로 인수분해되어야 극소가 하나(p 를 정수로 두고 h'(p)=0 이 되게 계수 역산). 분수 계수를 없애면 Mₖ 1 로 내려가나 ★ 는 유지, 답 k 는 분수여도 무방."
    creative: "(1) 「두 그래프가 만나지 않을 조건」으로 바꿔도 같은 골조(★2) (2) 「x>0 에서만 위쪽」으로 구간을 제한하면 유형 06·07 골조로 이동(★2) (3) k 대신 g 의 일차항 계수를 매개변수로 두면 h' 의 인수분해가 매개변수에 의존해 극소점 위치를 따로 구해야 함(Mₐ·Mₖ 상승 ★3)."
```

```yaml
- id: RPM-CALC1-0545
  page: 84
  vendor_label: "유형 05 모든 실수에서 부등식이 성립할 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 $x$ 에 대하여 $3x^4+4a^3\ge 4x^3+3a^4$ 이 성립하도록 하는 실수 $a$ 의 값.
  category: "x 쪽 최솟값 → a 의 사차부등식 → 같은 함수의 최솟값 비교(등호만 성립)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3a⁴−4a³+1≤0 을 x 쪽과 같은 함수 φ(t)=3t⁴−4t³ 의 최솟값 비교로 읽어 φ(a)≤min φ=φ(1) → 등호 a=1 만 가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "모든 실수에서 부등식이 성립할 조건(매개변수 쪽 부등식의 등호 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(x)=3x^4-4x^3+4a^3-3a^4$, $f'(x)=12x^2(x-1)$ 이므로 최솟값은 $f(1)=-1+4a^3-3a^4\ge0$, 즉 $3a^4-4a^3+1\le0$. 여기서 $g(a)=3a^4-4a^3+1$ 은 $x$ 쪽과 같은 골조라 $g'(a)=12a^2(a-1)$, 최솟값 $g(1)=0$ → 부등식은 등호 $a=1$ 에서만 성립($(a-1)^2(3a^2+2a+1)\le0$ 으로 인수분해해도 같음).
    양변을 같은 함수 $\varphi(t)=3t^4-4t^3$ 으로 읽어 $\varphi(a)\le\min\varphi=\varphi(1)$ 로 옮기는 전환(RT d2)이 핵심. 상중 출발 ★3 · 통찰 1(d2) · M_total 7 → ★3 유지.
    [분류 이슈] 인수분해 경로($(a-1)^2(\cdots)\le0$)로 풀면 절차형에 가까워 ★2~3 사이 — RT d2 로 두고 기록.
  tier: star_3
  mechanism_primary: "f(x)=3x⁴−4x³+4a³−3a⁴ → f'=12x²(x−1) → f(1)≥0 → 3a⁴−4a³+1≤0 → 같은 함수 φ(t)=3t⁴−4t³ 의 최솟값 0 과 비교(또는 (a−1)²(3a²+2a+1)≤0) → a=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "φ(t)=pt⁴−qt³ 의 극소점 t=3q/(4p) 가 1 이 되게 q=4p/3 을 유지하며 (p,q)=(3,4)→(6,8) 등으로 바꿀 수 있음. 제약: 양변이 정확히 같은 함수 φ 의 x·a 대입이어야 답이 등호 한 점으로 떨어짐. 상수를 더하면 a 의 범위가 구간이 되어 문제 성격이 바뀜."
    creative: "(1) 우변에 상수 c 를 더해 「a 의 값의 범위」를 묻기(등호가 아닌 구간 · ★2~3) (2) 「f(x)≥f(a) 가 모든 x 에서 성립하는 a」 꼴로 함수 f 를 직접 주면 ‘a 가 최소점’이라는 해석(I-EQV d2 · ★3) (3) 「등호가 성립하는 x 가 두 개」 조건을 붙이면 극솟값 두 개가 같은 사차함수 설계로 I-SYM 결합(★4)."
```

### 유형 06 주어진 구간에서 부등식이 성립할 조건; 증가·감소의 활용

```yaml
- id: RPM-CALC1-0546
  page: 84
  vendor_label: "유형 06 주어진 구간에서 부등식이 성립할 조건; 증가·감소의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $x>2$ 일 때 $x^3+k>3x^2$ 이 성립하도록 하는 정수 $k$ 의 최솟값. 5지선다.
  category: "구간에서 증가 → 열린 끝값이 하한 → 등호 포함 → 최소 정수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 부등식이 성립할 조건(증가·감소 · 구간 끝값의 등호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=x^3-3x^2+k$, $h'(x)=3x(x-2)$ 이므로 $x>2$ 에서 증가. 열린 구간이라 $h(2)=k-4$ 는 취하지 않으므로 $h(2)\ge0$ 이면 충분 → $k\ge4$ → 최소 정수 4 → ②.
    증가·감소로 하한을 잡고 열린 구간의 등호(Mₜ 1 · T-경계)를 처리하는 유형 표준. 통찰 없음 · M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "h=x³−3x²+k → h'=3x(x−2) → x>2 에서 증가 → 하한 h(2)=k−4 (열린 구간 · 미도달) → k−4≥0 → 최소 정수 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수와 구간 끝 2 를 바꿀 수 있음. 제약: 구간 끝이 h' 의 근(극소점)과 일치해야 「구간 안에서 단조」가 성립하고, 등호 처리 문제가 살아남으려면 구간을 열린 채로 둘 것. 답이 정수 경계가 되게 h(끝)이 정수."
    creative: "(1) 부등식을 ≥ 로 바꾸고 「k 의 최솟값(실수)」을 묻거나 구간을 x≥2 로 닫아 등호 유무를 바꾸는 변형(경계 감각 ★2) (2) 구간 끝을 극소점보다 왼쪽(x>1)에 두면 최솟값이 구간 안 극소로 바뀌어 유형 07 골조(★2) (3) 이차항 계수를 매개변수로 두어 극소점 위치가 움직이게 하면 케이스 분기(I-MI d2 · ★3)."
```

```yaml
- id: RPM-CALC1-0547
  page: 84
  vendor_label: "유형 06 주어진 구간에서 부등식이 성립할 조건; 증가·감소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 $(0,\,2)$ 에서 $x^3-\frac32x^2-6x+k>0$ 이 성립하도록 하는 실수 $k$ 의 값의 범위.
  category: "구간에서 감소 → 오른쪽 열린 끝값이 하한 → 등호 포함"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 부등식이 성립할 조건(증가·감소 · 구간 끝값의 등호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h'(x)=3x^2-3x-6=3(x-2)(x+1)$ 이므로 $(0,\,2)$ 에서 감소. 하한은 $h(2)=8-6-12+k=k-10$ 이고 $x=2$ 는 구간 밖이라 $k-10\ge0$ 이면 충분 → $k\ge10$.
    감소 구간의 오른쪽 끝값 · 열린 구간 등호(Mₜ 1). 통찰 없음 · M_total 5 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "h'=3(x−2)(x+1) → (0,2) 에서 감소 → 하한 h(2)=k−10 (미도달) → k≥10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\ge 10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 구간을 바꿀 수 있음. 제약: 극소점 x=2 가 구간의 오른쪽 끝이어야 단조 감소가 성립. 왼쪽 끝 0 은 h(0)=k 로 하한이 아니므로 학생이 잘못 잡기 쉬운 값 — 답이 k≥10 과 k>0 으로 갈리게 유지."
    creative: "(1) 구간을 (0,3) 으로 넓히면 최솟값이 구간 안 극소 h(2) 로 바뀌고 등호가 빠져 k>10 (유형 07 · T-경계 ★2) (2) 「구간에서 성립하지 않는 정수 x 가 하나」 조건으로 뒤집기(★3) (3) k 를 x 의 계수로 옮겨 h' 의 근이 k 에 의존하게 하면 극소점이 구간 안팎을 오가는 분기(I-MI d2 · ★3)."
```

```yaml
- id: RPM-CALC1-0548
  page: 84
  vendor_label: "유형 06 주어진 구간에서 부등식이 성립할 조건; 증가·감소의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $f(x)=4x^3-x^2-2x$, $g(x)=2x^2+4x-k$ 에 대하여 $x\ge1$ 에서 $f(x)\ge g(x)$ 가 성립하도록 하는 실수 $k$ 의 최솟값. 서술형.
  category: "차함수 → 구간에서 증가 → 닫힌 끝값 ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 부등식이 성립할 조건(증가·감소 · 구간 끝값의 등호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=f(x)-g(x)=4x^3-3x^2-6x+k$, $h'(x)=6(2x+1)(x-1)$ 이므로 $x\ge1$ 에서 증가. 최솟값 $h(1)=k-5\ge0$ → $k\ge5$ → 최솟값 5.
    차함수 → 증가 구간 → 닫힌 끝값 등호. 통찰 없음 · M_total 6 → ★2 유지(서술형 +0).
  tier: star_2
  mechanism_primary: "h=f−g=4x³−3x²−6x+k → h'=6(2x+1)(x−1) → x≥1 증가 → h(1)=k−5≥0 → k 최솟값 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수를 바꿀 수 있음. 제약: h'(1)=0 이 되도록 계수를 맞춰 구간 끝 1 이 극소점이 되게 하고, 닫힌 구간이므로 등호 포함(k≥5)으로 답이 정수가 되게 h(1) 을 정수로."
    creative: "(1) 구간을 x>1 로 열면 등호 유무만 바뀌어 「최솟값 없음·하한」 서술(경계 ★2) (2) 두 곡선 사이의 「최소 간격」을 먼저 구하게 하는 2단 서술형(★2) (3) k 를 g 의 일차항 계수로 옮기면 h' 의 근이 매개변수에 의존해 극소점이 구간 안팎을 오감(I-MI d2 · ★3)."
```

### 유형 07 주어진 구간에서 부등식이 성립할 조건; 최대·최소의 활용

```yaml
- id: RPM-CALC1-0549
  page: 85
  vendor_label: "유형 07 주어진 구간에서 부등식이 성립할 조건; 최대·최소의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 $[0,\,2]$ 에서 $x^3-x^2-2x+1\ge -x^2+x-k$ 가 성립하도록 하는 실수 $k$ 의 최솟값.
  category: "이항 → 구간 안 극소 = 최솟값 → ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 부등식이 성립할 조건(구간 안 극솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이항하면 $h(x)=x^3-3x+1+k$, $h'(x)=3(x-1)(x+1)$ 이므로 $[0,\,2]$ 의 최솟값은 극소 $h(1)=k-1$. $k-1\ge0$ → $k\ge1$ → 최솟값 1.
    이항으로 이차항이 사라지고 구간 안 극소가 최솟값. 통찰 없음 · M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "이항 → h=x³−3x+1+k → h'=3(x−1)(x+1) → [0,2] 최솟값 h(1)=k−1 → k−1≥0 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 이차항이 상쇄되게 계수를 맞추면 h 가 x³−3x 꼴로 단순해짐. 제약: 극소점(x=1)이 닫힌 구간 안에 있어야 하고 구간 끝값 h(0)=1+k, h(2)=3+k 가 극솟값보다 크도록 유지. 답 k 는 정수로."
    creative: "(1) 구간을 [−2,2] 로 넓히면 왼쪽 끝값 h(−2)=−1+k 가 극솟값과 같아져 끝값 비교가 필요(T-경계 ★2) (2) 「부등식의 해집합이 [0,2] 를 포함」 꼴로 서술(I-EQV d1 ★2) (3) 「등호가 성립하는 x 가 존재」 조건을 더해 k 값 하나로 좁히기(★2)."
```

```yaml
- id: RPM-CALC1-0550
  page: 85
  vendor_label: "유형 07 주어진 구간에서 부등식이 성립할 조건; 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $1<x<3$ 일 때 $x^3-\frac32x^2+2>6x+k$ 가 성립하도록 하는 정수 $k$ 의 최댓값. 5지선다.
  category: "이항 → 열린 구간 안 극소(도달) > 0 → 등호 불가 → 최대 정수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 부등식이 성립할 조건(구간 안 극솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=x^3-\dfrac32x^2-6x+2-k$, $h'(x)=3(x-2)(x+1)$ 이므로 $(1,\,3)$ 안의 극소 $h(2)=-8-k$ 가 최솟값이고 실제로 취해진다. $-8-k>0$ → $k<-8$ → 최대 정수 $-9$ → ②.
    구간 안 극소는 도달하는 값이라 등호 불가(Mₜ 1 · T-경계) — 0546·0547 과 반대 방향의 경계 처리. 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "h=x³−(3/2)x²−6x+2−k → h'=3(x−2)(x+1) → (1,3) 안 극소 h(2)=−8−k (도달) → −8−k>0 → k<−8 → 최대 정수 −9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 구간을 바꿀 수 있음. 제약: 극소점이 열린 구간 안에 있어야 등호 불가 처리가 살아남고, 선택지가 경계 −8 과 답 −9 를 함께 담도록 배치(경계 실수 오답 −8 유지). h(2) 가 정수가 되게 상수항 조정."
    creative: "(1) 구간을 (1,2) 로 줄이면 극소점이 끝으로 밀려 「미도달 하한」으로 등호가 살아남(k≤−8 → 최대 정수 −8 · 답이 뒤집힘 ★2) (2) 부등식을 ≥ 로 바꾸면 k≤−8 로 답 이동(경계 훈련 ★2) (3) 「구간에서 부등식이 성립하지 않는 실수 x 가 한 개」 조건으로 뒤집으면 극솟값=0 등호 조건(I-EQV d1 ★3)."
```

```yaml
- id: RPM-CALC1-0551
  page: 85
  vendor_label: "유형 07 주어진 구간에서 부등식이 성립할 조건; 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=2x^3+x^2+k$, $g(x)=-2x^2+5$ 에 대하여 $x>-1$ 일 때 $y=f(x)$ 의 그래프가 $y=g(x)$ 의 그래프보다 항상 위쪽에 있도록 하는 실수 $k$ 의 범위.
  category: "차함수 → 구간 안 극소(x=0) > 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 그래프의 위아래 관계(구간 안 극솟값>0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=f(x)-g(x)=2x^3+3x^2+k-5$, $h'(x)=6x(x+1)$ 이므로 $x>-1$ 에서 $x=0$ 이 극소이자 최솟값. $h(0)=k-5>0$ → $k>5$.
    구간 왼쪽 끝 $-1$ 이 극대점이라 학생이 $h(-1)=k-4$ 를 하한으로 잘못 잡기 쉬움(Mₜ 1). 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "h=f−g=2x³+3x²+k−5 → h'=6x(x+1) → x>−1 에서 극소 x=0 (도달) → h(0)=k−5>0 → k>5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k>5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수를 바꿀 수 있음. 제약: 구간 끝 −1 은 극대점, 극소점 0 은 구간 안이어야 「끝값이 아니라 안쪽 극소가 최솟값」 구조가 유지되고, h(0)=k−5 처럼 상수항만 남아 답이 깔끔해지도록 f, g 의 상수 조정."
    creative: "(1) 구간을 x≥−1 로 닫아도 답이 불변임을 확인시키는 변형(극소가 안쪽이면 끝의 등호는 무관 · ★2) (2) 구간을 x<−1 로 뒤집으면 h 가 −∞ 로 가서 「그런 k 는 없다」가 답인 함정형(I-EQV d1 ★2) (3) g 의 이차항 계수를 매개변수로 두어 극소점 위치가 움직이게 하면 분기(I-MI d2 ★3)."
```

### 유형 08 속도와 가속도 (1)

```yaml
- id: RPM-CALC1-0552
  page: 85
  vendor_label: "유형 08 속도와 가속도 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    위치 $x=t^3-5t^2+6t$ 로 수직선 위를 움직이는 점 P 가 마지막으로 원점을 지나는 순간의 속도.
  category: "위치 = 0 인수분해 → 마지막 시각 → 속도 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치식 미분 → 특정 순간(원점 통과)의 속도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x=t(t-2)(t-3)=0$ 의 양의 근 $t=2,\,3$ 중 마지막은 $t=3$. $v=3t^2-10t+6$ 이므로 $v(3)=3$.
    원점 통과 시각을 인수분해로 찾고 속도에 대입하는 두 단계. 통찰 없음 · M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x=t(t−2)(t−3)=0 → 마지막 근 t=3 → v=3t²−10t+6 → v(3)=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식의 세 근(0, p, q)을 바꿀 수 있음. 제약: 원점 통과 시각이 정수 근으로 인수분해되게 x=t(t−p)(t−q) 로 설계하고, 「마지막」이 뜻하는 가장 큰 양의 근이 하나로 정해지게 p≠q."
    creative: "(1) 「두 번째로 원점을 지나는 순간의 가속도」로 묻기(같은 골조 ★1) (2) 「원점을 지나는 순간마다의 속도의 합」으로 세 시각 모두 사용(★2) (3) 「원점을 지날 때의 속도가 양수인 시각」처럼 부호 조건을 붙여 방향 판단 결합(★2)."
```

```yaml
- id: RPM-CALC1-0553
  page: 85
  vendor_label: "유형 08 속도와 가속도 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치 $x=t^3-3t^2-14t$ 인 점 P 의 속도가 $10$ 인 순간의 위치. 5지선다.
  category: "속도 방정식 → 양의 시각 → 위치 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도 조건 → 시각 → 위치"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=3t^2-6t-14=10$ → $t^2-2t-8=(t-4)(t+2)=0$ → $t=4$ ($t>0$). $x(4)=64-48-56=-40$ → ②.
    속도 방정식 → 시각 → 위치 대입. 통찰 없음 · M_total 4 → 「중」 출발 ★2 에서 −1 → ★1(1단 차이 · 이슈 아님).
  tier: star_1
  mechanism_primary: "v=3t²−6t−14=10 → (t−4)(t+2)=0 → t=4 → x(4)=−40"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수와 속도 값 10 을 바꿀 수 있음. 제약: v=(주어진 값) 이 정수 근으로 풀리고 양의 근이 하나가 되게 설계(음의 근은 버림). 선택지에 t=−2 를 대입한 값과 부호 실수 값을 오답으로 배치."
    creative: "(1) 「가속도가 c 인 순간의 위치」로 미분 한 번 더(★1) (2) 속도 조건의 양의 근이 두 개가 되게 하면 「두 순간의 위치 차」 등 두 값 결합(★2) (3) 「속도가 10 이상인 시각의 범위」로 부등식화(★2)."
```

```yaml
- id: RPM-CALC1-0554
  page: 85
  vendor_label: "유형 08 속도와 가속도 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치 $x=t^3+3t^2+kt$ 인 점 P 의 가속도가 $18$ 일 때의 위치가 $22$ 이면 상수 $k$ 의 값. 5지선다.
  category: "가속도 조건 → 시각 → 위치식의 미정계수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "가속도 조건 → 시각 → 위치식의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=3t^2+6t+k$, $a=6t+6=18$ → $t=2$. $x(2)=8+12+2k=22$ → $k=1$ → ①.
    가속도 조건은 $k$ 와 무관해 시각이 먼저 정해지고 위치식에서 $k$ 가 결정되는 미정계수 절차. 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "a=6t+6=18 → t=2 → x(2)=20+2k=22 → k=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가속도 값과 위치 값을 바꿀 수 있음. 제약: 가속도 6t+6 이 k 를 포함하지 않으므로(kt 는 일차항) 시각이 먼저 정해지고, 위치 조건에서 k 가 정수로 떨어지게 x(t)−kt 값을 맞춤."
    creative: "(1) k 를 이차항 계수로 옮기면 가속도에도 k 가 들어가 연립(★2) (2) 「가속도가 18 인 순간의 속도가 22」로 바꾸면 v(2)=24+k 로 같은 골조(★2) (3) 「가속도 18 인 순간 운동 방향을 바꾼다」 조건으로 v(2)=0 을 쓰게 하면 유형 10 결합(I-EQV d1 ★2)."
```

```yaml
- id: RPM-CALC1-0555
  page: 85
  vendor_label: "유형 08 속도와 가속도 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    위치 $x=-\frac13t^3+3t^2+16t$ 인 점 P 의 $0\le t\le5$ 에서의 속력의 최댓값 $M$ 과 그때의 시각 $a$ 에 대하여 $M-a$ 의 값.
  category: "속도 = 이차식 → 구간에서 부호 확인 → 속력 = v → 꼭짓점 최댓값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속력의 최댓값 → |v| 의 최댓값 → 구간에서 v>0 임을 확인한 뒤 v 의 최댓값으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간에서 속력(|v|)의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=-t^2+6t+16=-(t-3)^2+25=-(t-8)(t+2)$ 이고 $0\le t\le5$ 에서 $v>0$ 이므로 속력 $=v$. 최댓값은 $t=3$ 에서 $25$ 이고 끝값 $v(0)=16$, $v(5)=21$ 보다 크다 → $M-a=22$.
    속력 $=|v|$ 이므로 구간에서 $v$ 의 부호를 먼저 확인하는 단계(EQV d1)와 구간 끝값 비교(Mₜ 2 · T-부호·T-경계). d1 하나뿐이라 절차형 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "v=−t²+6t+16=−(t−3)²+25 → [0,5] 에서 v>0 → 속력=v → 꼭짓점 t=3, M=25 → M−a=22"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수와 구간을 바꿀 수 있음. 제약: v 가 구간 전체에서 한 부호여야 |v| 처리가 확인 단계로 끝나고, 꼭짓점이 구간 안에 있어야 최댓값이 끝값이 아닌 극대가 됨. M, a 가 정수가 되게 완전제곱 형태 유지."
    creative: "(1) 구간을 [0,10] 으로 넓혀 v 의 부호가 바뀌게 하면 |v| 의 최댓값이 끝값 |v(10)|=24 와 극대 25 의 비교로 바뀜(I-MI d2 · ★3) (2) 「속력이 최대인 순간의 가속도」를 물으면 극대점에서 a=0 이라는 관찰(I-EQV d1 ★2) (3) 위치의 최댓값과 속력의 최댓값을 함께 묻는 2단 문항(★2)."
```

### 유형 09 속도와 가속도 (2)

```yaml
- id: RPM-CALC1-0556
  page: 86
  vendor_label: "유형 09 속도와 가속도 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 P, Q 의 위치 $x_P=\frac13t^3+4t-\frac23$, $x_Q=2t^2-10$ 에서 두 점의 속도가 같아지는 순간의 점 P 의 가속도.
  category: "두 속도 등식 → 중근 → 가속도 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 속도가 같아지는 순간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v_P=t^2+4$, $v_Q=4t$ → $t^2-4t+4=(t-2)^2=0$ → $t=2$. $a_P=2t=4$.
    속도 등식 → 중근 → 가속도. 통찰 없음 · M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "v_P=t²+4, v_Q=4t → (t−2)²=0 → t=2 → a_P=2t=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 위치식의 계수를 바꿀 수 있음. 제약: v_P=v_Q 가 양의 근 하나(중근 또는 유일 양근)로 풀리게 설계. 위치식의 상수항(−2/3, −10)은 속도에 영향 없으므로 자유."
    creative: "(1) 「가속도가 같아지는 순간의 두 점 사이 거리」로 미분 단계를 한 번 더(★2) (2) 속도 등식의 양근이 두 개가 되게 해 「두 순간 사이의 시간」을 묻기(★2) (3) 「두 점의 속도 차가 최소인 순간」으로 바꾸면 v_P−v_Q 의 최솟값 → 이차함수 결합(I-RT d1 ★2)."
```

```yaml
- id: RPM-CALC1-0557
  page: 86
  vendor_label: "유형 09 속도와 가속도 (2)"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 점 P, Q 의 위치 $x_P=\frac23t^3+2t^2-\frac13$, $x_Q=4t^2+30t$ 에서 두 점의 속도가 같아지는 순간의 두 점 사이의 거리. 서술형.
  category: "두 속도 등식 → 시각 → 두 위치의 차"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 속도가 같아지는 순간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v_P=2t^2+4t$, $v_Q=8t+30$ → $t^2-2t-15=(t-5)(t+3)=0$ → $t=5$. $x_P(5)=\dfrac{250}3+50-\dfrac13=133$, $x_Q(5)=250$ → 거리 $117$.
    속도 등식 → 시각 → 두 위치의 차. 분수 계산(Mₖ 2)이 서술형의 부담. 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "v_P=2t²+4t, v_Q=8t+30 → (t−5)(t+3)=0 → t=5 → |x_P(5)−x_Q(5)|=|133−250|=117"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$117$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수를 바꿀 수 있음. 제약: 속도 등식이 정수 양근 하나로 풀리고, 분수 계수 (2/3, −1/3) 은 t=5 에서 정수 위치가 나오게 짝을 맞춤(250/3−1/3=83). 거리는 절댓값이므로 어느 점이 앞서는지 무관."
    creative: "(1) 「속도가 같아지는 순간 두 점이 만난다」 조건으로 위치식의 상수를 미정계수로 두기(★2) (2) 「두 점 사이의 거리가 최소인 순간」으로 바꾸면 x_P−x_Q 의 극값 → 속도 등식과 같은 시각임을 발견(I-EQV d2 ★3) (3) 「가속도가 같아지는 순간」으로 한 단계 더 미분(★2)."
```

```yaml
- id: RPM-CALC1-0558
  page: 86
  vendor_label: "유형 09 속도와 가속도 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점을 동시에 출발한 두 점 P, Q 의 위치 $x_P=2t^3+t^2$, $x_Q=t^3+2t$ 에서 출발 후 다시 만나는 순간의 두 점의 속도 $\alpha$, $\beta$ 의 곱.
  category: "위치 같음 → 삼차 인수분해 → t=0 제외 → 두 속도의 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점이 다시 만나는 순간(위치 같음)의 속도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x_P=x_Q$ → $t^3+t^2-2t=t(t+2)(t-1)=0$ → 출발 후는 $t=1$. $v_P=6t^2+2t$ → $\alpha=8$, $v_Q=3t^2+2$ → $\beta=5$ → $\alpha\beta=40$.
    「다시 만난다 ⇔ 위치가 같다」로 식을 세우고 $t=0$ 을 버리는 절차. 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x_P=x_Q → t(t+2)(t−1)=0 → t=1 (출발 t=0 제외) → v_P(1)=8, v_Q(1)=5 → 40"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 위치식의 계수를 바꿀 수 있음. 제약: x_P−x_Q 가 t·(이차식) 으로 인수분해되고 이차 인수의 양근이 하나(다른 근은 음수)여야 「다시 만나는 순간」이 유일. 두 속도가 정수가 되게."
    creative: "(1) 「다시 만나기 전까지 두 점 사이 거리의 최댓값」으로 바꾸면 x_P−x_Q 의 극값(I-RT d1 ★2) (2) 「만나는 순간 두 점의 운동 방향이 반대」 조건을 더해 속도 곱의 부호 판단(유형 10 결합 ★2) (3) 출발점을 다르게 하면 상수항이 살아 인수분해가 안 되어 계산 마찰만 늘어남(질 저하 · 피할 것)."
```

### 유형 10 속도와 운동 방향

```yaml
- id: RPM-CALC1-0559
  page: 86
  vendor_label: "유형 10 속도와 운동 방향"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    위치 $x=-t^3+5t^2-3t+2$ 인 점 P 가 두 번째로 운동 방향을 바꾸는 순간의 가속도.
  category: "v=0 · 부호 변화 → 두 번째 시각 → 가속도 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "운동 방향을 바꾸는 순간(v=0 · 부호 변화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=-3t^2+10t-3=-(3t-1)(t-3)$ 이고 $t=\dfrac13,\,3$ 에서 부호가 바뀌므로 두 번째는 $t=3$. $a=-6t+10$ → $a(3)=-8$.
    「방향 전환 ⇔ v=0 이고 부호 변화」 확인 뒤 가속도 대입. 통찰 없음 · M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "v=−3t²+10t−3=−(3t−1)(t−3) → 부호 변화 t=1/3, 3 → 두 번째 t=3 → a=−6t+10 → −8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수를 바꿀 수 있음. 제약: v 의 두 근이 모두 양수이고 서로 다르며(부호 변화 두 번) 가속도 값이 정수가 되게. 근 하나를 분수로 두어 「두 번째」 판단이 근의 크기 비교를 거치게 유지."
    creative: "(1) v 가 중근을 갖게 바꾸면 v=0 이지만 방향을 바꾸지 않는 함정(I-EQV d1 ★2) (2) 「방향을 바꾸는 두 순간 사이에 움직인 거리」로 유형 10 서술형(0562 골조 ★2) (3) 「가속도가 0 인 순간과 방향 전환 순간의 위치 차」처럼 두 조건 결합(★2)."
```

```yaml
- id: RPM-CALC1-0560
  page: 86
  vendor_label: "유형 10 속도와 운동 방향"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 P, Q 의 위치 $x_P=4t^2-3t+1$, $x_Q=2t^2-8t$ 에서 두 점이 서로 반대 방향으로 움직이는 시각 $t$ 의 값의 범위.
  category: "반대 방향 ⇔ 속도 곱 < 0 → 일차 두 개의 곱 부등식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점이 반대 방향으로 움직이는 시각(속도 곱<0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v_P=8t-3$, $v_Q=4t-8$ 이고 반대 방향 ⇔ $v_Pv_Q<0$ → $(8t-3)(4t-8)<0$ → $\dfrac38<t<2$.
    「반대 방향 ⇔ 속도 곱 < 0」 정의 그대로 일차부등식. 통찰 없음 · M_total 4 → 「중하」 ★1.
  tier: star_1
  mechanism_primary: "v_P=8t−3, v_Q=4t−8 → 반대 방향 ⇔ v_P·v_Q<0 → 3/8<t<2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{8}<t<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 위치식(이차)의 계수를 바꿀 수 있음. 제약: 두 속도(일차)의 근이 모두 양수이고 서로 달라야 범위가 열린 구간으로 나옴. 근 하나를 분수로 두면 답 표기 확인 가능."
    creative: "(1) 위치식을 삼차로 올리면 속도가 이차가 되어 곱의 부호 구간이 여러 개(I-MI d2 ★3) (2) 「같은 방향으로 움직이는 시각의 범위」로 뒤집기(★1) (3) 「반대 방향으로 움직이는 동안 두 점 사이 거리가 최대인 순간」 결합(★3)."
```

```yaml
- id: RPM-CALC1-0561
  page: 86
  vendor_label: "유형 10 속도와 운동 방향"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    제동 후 $t$ 초 동안 움직인 거리 $x=18t-0.45t^2$ (m) 인 자동차가 정지할 때까지 움직인 거리.
  category: "정지 ⇔ v=0 → 시각 → 거리 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정지할 때까지 움직인 거리(v=0 의 시각 → 위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=18-0.9t=0$ → $t=20$. $x(20)=360-180=180$ (m).
    「정지 ⇔ v=0」 뒤 거리 대입. 소수 계수의 산술만 남음. 통찰 없음 · M_total 4 → 「중」 출발 ★2 에서 −1 → ★1(1단 차이).
  tier: star_1
  mechanism_primary: "v=18−0.9t=0 → t=20 → x(20)=360−180=180 m"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$180\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 속도 18 과 감속 계수 0.45 를 바꿀 수 있음. 제약: v=0 의 시각 t=v₀/(2c) 가 정수가 되게 하고, 거리 x=v₀²/(4c) 가 깔끔한 수가 되게 조합(예: 20t−0.5t² → t=20, 200 m). 단위 m 표기 유지."
    creative: "(1) 「정지할 때까지의 시간」과 「거리」를 함께 묻기(★1) (2) 제동 거리가 주어지고 초기 속도를 역산하게 하면 v₀²/(4c)=거리 방정식(I-BW d1 ★2) (3) 두 자동차의 제동 조건을 비교해 「먼저 멈추는 쪽」을 판단(★2)."
```

```yaml
- id: RPM-CALC1-0562
  page: 86
  vendor_label: "유형 10 속도와 운동 방향"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    위치 $x=t^3-9t^2+24t$ 인 점 P 가 출발 후 운동 방향을 바꾸는 두 순간의 위치 A, B 사이의 거리. 서술형.
  category: "v=0 부호 변화 시각 두 개 → 위치 두 개 → 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "운동 방향을 바꾸는 순간(v=0 · 부호 변화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=3t^2-18t+24=3(t-2)(t-4)$ → 방향 전환 $t=2,\,4$. $x(2)=20$, $x(4)=16$ → $\overline{\mathrm{AB}}=4$.
    방향 전환 시각 두 개를 찾아 위치 차. 통찰 없음 · M_total 5 → ★2 유지(서술형 +0).
  tier: star_2
  mechanism_primary: "v=3(t−2)(t−4) → 전환 t=2, 4 → x(2)=20, x(4)=16 → 거리 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수를 바꿀 수 있음. 제약: v 의 두 근이 서로 다른 양의 정수(부호 변화 두 번)이고 두 위치 값이 정수. 두 전환점 사이 거리 = |x(t₁)−x(t₂)| 이므로 어느 쪽이 큰지 무관."
    creative: "(1) 「출발 후 두 번째 전환까지 실제로 움직인 거리」로 바꾸면 x(2)+|x(4)−x(2)| 처럼 경로 합산(I-EQV d2 ★3) (2) 전환 시각 하나만 있게 v 를 중근+양근 구조로 바꾸면 중근 함정(I-EQV d1 ★2) (3) 「두 전환점의 중점을 지나는 순간의 속도」로 위치 방정식 결합(★2)."
```

### 유형 11 속도의 그래프의 해석

```yaml
- id: RPM-CALC1-0563
  page: 87
  vendor_label: "유형 11 속도의 그래프의 해석"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    속도 $v(t)$ 의 그래프($0\le t\le6$ · $v(1)=2$, $v(3)=-2$ · $t=2,\,4$ 에서 부호 변화 · $t=5$ 에서 $t$ 축에 접함)를 보고 정지 · 운동 방향 · 방향 전환 · 속력 증감 · 전환 횟수에 관한 보기 중 옳은 것 고르기. 5지선다.
  category: "그래프의 부호·절댓값·부호 변화 → 방향·속력·전환 → 보기 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 부호(방향)·|v| 증감(속력)·부호 변화(전환, t=5 접점은 제외)를 운동 상태로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프 해석(방향 · 속력 증감 · 방향 전환 횟수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① $v(1)=2\ne0$, $v(3)=-2\ne0$ 이라 정지 아님. ② $2<t<4$ 에서 $v<0$ → 음의 방향 ✓. ③ $t=5$ 는 $v=0$ 이지만 접하기만 하고 부호가 안 바뀌어 방향 불변. ④ $3<t<4$ 에서 $v$ 가 $-2\to0$ 이라 속력 $|v|$ 감소. ⑤ 전환은 $t=2,\,4$ 두 번 → ②.
    그래프를 방향·속력·전환으로 읽는 유형 표준(RT d1). 「접하는 근」과 「속력 vs 속도」 함정 두 개(Mₜ 2). d1 하나뿐이라 절차형 · M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프 → v 의 부호(방향) · |v| 증감(속력) · 부호 변화(전환, 접점 t=5 제외) → 보기 5개 판정 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0563.png
  latex: latex-bank/rpm-calc1/items/0563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨(1, 2, 3, 4, 5, 6 · ±2)은 그림 고정. 보기 문장을 바꿀 때는 그림의 세 특징(부호 변화 t=2, 4 · 접점 t=5 · |v| 감소 구간 3<t<4)에서 하나씩 고르면 정답 위치만 바꿀 수 있음. 새 그림을 그릴 때는 접점(방향 불변)과 부호 변화 근을 하나씩 반드시 포함."
    creative: "(1) 「가속도가 0 인 시각의 개수」 보기를 추가하면 극점 세기(I-RT d1 ★2) (2) 「t=0 에서 출발해 t=6 까지 원점에서 가장 멀어지는 시각」처럼 위치를 묻게 하면 넓이(정적분)로 넘어가 미적분 후반 결합(★3) (3) 5지선다를 ㄱㄴㄷ 참·거짓 조합으로 바꿔 함정 두 개(접점 · 속력)를 동시에 검사(★2)."
```

```yaml
- id: RPM-CALC1-0564
  page: 87
  vendor_label: "유형 11 속도의 그래프의 해석"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    속도 $v(t)$ 의 그래프(극소 $t_2$ 와 극대 $t_4$ 사이에 $t_3$ · 양 끝에 $t_1$, $t_5$)에서 가속도가 가장 큰 시각 고르기. 5지선다.
  category: "가속도 = 속도 그래프의 접선 기울기 → 최대 기울기 위치"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "가속도 = v'(t) 를 그래프의 접선 기울기로 읽어 극점(0)·오르막·내리막을 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프에서 가속도(접선 기울기) 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    가속도 $=v'(t)$ 는 그래프의 접선 기울기. $t_1$ 은 음의 기울기, $t_2$·$t_4$ 는 극점이라 $0$, $t_5$ 는 음, 극소에서 극대로 오르는 구간의 $t_3$ 이 가장 가파른 양의 기울기 → ③.
    「가속도 = 속도 그래프의 기울기」로 표현을 옮기는 한 단계(RT d1). 「속도가 큰 곳」과 혼동하는 함정(Mₜ 1). M_total 4 · d1 뿐 → 「중하」 ★1.
  tier: star_1
  mechanism_primary: "가속도=v'(t)=그래프 접선 기울기 → 극점 t₂, t₄ 는 0 · t₁, t₅ 는 음 → 오르막 t₃ 최대 → ③"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0564.png
  latex: latex-bank/rpm-calc1/items/0564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t₁~t₅ 라벨은 그림 고정. 「가장 작은 시각」으로 바꾸면 t₅(내리막 · 가장 가파른 음) 로 답 이동. 새 그림을 그릴 땐 극점 두 개 사이에 변곡점 라벨을 두어 「기울기 최대」와 「속도 최대」가 다른 위치가 되게."
    creative: "(1) 「가속도가 0 인 시각」·「가속도의 부호가 바뀌는 시각」으로 극점·변곡점 구분(I-RT d1 ★2) (2) 위치 그래프를 주고 「속도가 가장 큰 시각」으로 한 단계 낮추기(★1) (3) 「속력이 감소하는 구간」을 골라 v 와 v' 의 부호가 다른 구간 판단(I-EQV d2 ★3)."
```

### 유형 12 위로 던진 물체의 위치와 속도

```yaml
- id: RPM-CALC1-0565
  page: 87
  vendor_label: "유형 12 위로 던진 물체의 위치와 속도"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    높이 $h=40+20t-5t^2$ 로 똑바로 위로 던진 물체가 최고 지점에 도달했을 때의 높이. 5지선다.
  category: "최고 지점 ⇔ v=0 → 시각 → 높이 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 최고 높이(v=0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=20-10t=0$ → $t=2$, $h(2)=40+40-20=60$ → ②.
    「최고 지점 ⇔ v=0」 뒤 대입. 통찰 없음 · M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "v=20−10t=0 → t=2 → h(2)=60"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 40, 초기 속도 20 을 바꿀 수 있음(중력항 −5t² 고정). 제약: v₀/10 이 정수가 되게 v₀ 는 10 의 배수, 최고 높이 h₀+v₀²/20 이 정수. 선택지는 5 m 간격 유지."
    creative: "(1) 「최고 지점에 도달한 뒤 지면에 닿을 때까지의 시간」으로 h=0 의 양근 결합(★2) (2) 최고 높이가 주어지고 초기 속도 역산(I-BW d1 ★2) (3) 「지면에 닿는 순간의 속력」으로 부호 처리 추가(★2)."
```

```yaml
- id: RPM-CALC1-0566
  page: 87
  vendor_label: "유형 12 위로 던진 물체의 위치와 속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    지면에서 $a\,\mathrm{m/s}$ 로 똑바로 위로 던진 물체 $h=at-5t^2$ 가 높이 $45\,\mathrm{m}$ 지점까지 도달하기 위한 양수 $a$ 의 최솟값.
  category: "최고 높이를 a 로 표현 → 도달 조건 ≥ 45 → a 의 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「45 m 지점까지 도달」을 「최고 높이 ≥ 45」로 옮김(등호 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "위로 던진 물체의 최고 높이 조건(매개변수 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=a-10t=0$ → $t=\dfrac a{10}$, 최고 높이 $h\!\left(\dfrac a{10}\right)=\dfrac{a^2}{20}$. 도달 조건은 $\dfrac{a^2}{20}\ge45$ → $a^2\ge900$ → $a\ge30$ → 최솟값 30.
    「45 m 까지 도달 ⇔ 최고 높이 ≥ 45」로 옮기는 해석(EQV d1)과 등호 포함(Mₜ 1). d1 하나뿐이라 절차형 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "v=a−10t=0 → t=a/10 → 최고 높이 a²/20 → a²/20≥45 → a≥30"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 높이 45 를 바꿀 수 있음. 제약: 20×(높이) 가 완전제곱수여야 a 가 정수(45→900=30², 80→1600=40², 20→400=20²). 초기 높이를 두면 a²/20+h₀≥H 로 같은 골조."
    creative: "(1) 「높이 45 m 지점을 두 번 지나기 위한 a 의 범위」로 바꾸면 최고 높이 > 45 (등호 제외 · I-EQV d1 ★2) (2) 「최고 높이에 도달하는 데 3 초가 걸린다」로 a 를 먼저 결정한 뒤 높이 묻기(★1) (3) 두 물체를 시간차로 던져 「같은 높이에서 만나는 순간」 결합(★3)."
```

```yaml
- id: RPM-CALC1-0567
  page: 87
  vendor_label: "유형 12 위로 던진 물체의 위치와 속도"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    높이 $h=45+40t-5t^2$ 로 똑바로 위로 던진 돌에 대하여 ㄱ. 2초 후 속도 $20\,\mathrm{m/s}$ · ㄴ. 4초 후 최고 높이 도달 · ㄷ. 지면에 떨어지는 순간 속도 $-50\,\mathrm{m/s}$ 의 참·거짓(보기 고르기).
  category: "v 대입 · v=0 · h=0 → 세 보기 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 속도·최고 높이·낙하 순간 속도(보기 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=40-10t$. ㄱ $v(2)=20$ ✓. ㄴ $v=0$ → $t=4$ ✓. ㄷ $h=0$ → $t^2-8t-9=(t-9)(t+1)=0$ → $t=9$, $v(9)=-50$ ✓ → ㄱ, ㄴ, ㄷ.
    세 보기가 각각 속도 대입 · $v=0$ · $h=0$ 의 표준 절차. 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "v=40−10t → ㄱ v(2)=20 · ㄴ v=0 → t=4 · ㄷ h=0 → (t−9)(t+1)=0 → v(9)=−50 → 모두 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 45, 초기 속도 40 을 바꿀 수 있음. 제약: h=0 이 정수 근으로 인수분해되게 (v₀, h₀) 조합을 맞춤(h₀+v₀t−5t²=0 의 양근이 정수). 보기 값(속도 20, 시각 4, −50)을 계산값과 일치시키되 하나를 거짓으로 바꿔 답을 조정 가능."
    creative: "(1) ㄷ 을 「떨어지는 순간의 속력은 던질 때보다 크다」로 바꿔 부호·크기 비교(I-EQV d1 ★2) (2) 「최고 높이에서 지면까지 걸린 시간」 보기 추가(★2) (3) 던진 높이·속도를 매개변수로 두고 「떨어지는 순간 속도가 −50 이 되는 조건」 역산(I-BW d1 ★3)."
```

### 유형 13 시각에 대한 길이의 변화율

```yaml
- id: RPM-CALC1-0568
  page: 88
  vendor_label: "유형 13 시각에 대한 길이의 변화율"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 변 $8\,\mathrm{cm}$ 인 정사각형의 각 변이 매초 $2\,\mathrm{cm}$ 씩 길어질 때 대각선의 길이의 변화율.
  category: "변 → t 의 식 → 대각선 = √2·변 → 미분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(길이를 t 의 식으로 → 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변 $x=8+2t$, 대각선 $d=\sqrt2x=\sqrt2(8+2t)$ → $\dfrac{dd}{dt}=2\sqrt2$ (cm/s).
    길이를 $t$ 의 식으로 쓰고 미분하는 한 단계. 통찰 없음 · M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "변 x=8+2t → 대각선 d=√2·x → d'(t)=2√2 cm/s"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{2}\,\mathrm{cm/s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 변 8 과 속도 2 를 바꿀 수 있음(변화율은 속도×√2 로 처음 길이와 무관 — 이 점을 확인시키는 것도 변형 포인트). 정삼각형 높이(√3/2 배)·정육각형 등으로 도형을 바꾸면 비례 상수만 변함."
    creative: "(1) 「넓이의 변화율(t=3 일 때)」로 바꾸면 이차식 미분·시각 대입(★1~2) (2) 「대각선 길이가 처음의 2 배가 되는 순간 넓이의 변화율」로 시각을 먼저 구하게(★2) (3) 변 대신 대각선이 일정 속도로 길어질 때 변의 변화율(역비례 상수 ★1)."
```

```yaml
- id: RPM-CALC1-0569
  page: 88
  vendor_label: "유형 13 시각에 대한 길이의 변화율"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    점 P 는 원점에서 $x$ 축 양의 방향으로 매초 $1$, 점 Q 는 $y$ 축 양의 방향으로 매초 $2$ 로 동시에 출발할 때, 선분 PQ 와 직선 $y=2x$ 의 교점 R 에 대하여 $\overline{\mathrm{OR}}$ 의 길이의 변화율. 서술형.
  category: "동점 좌표 매개화 → 직선 PQ → 교점 R → 길이 = t 의 일차식 → 미분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 동점을 P(t,0), Q(0,2t) 로 매개화하고 직선 PQ 와 y=2x 의 교점을 거쳐 OR 을 t 의 식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(동점의 좌표 매개화 → 교점 → 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t$ 초 후 P$(t,\,0)$, Q$(0,\,2t)$ 이고 직선 PQ: $2x+y=2t$. $y=2x$ 와 연립하면 R$\!\left(\dfrac t2,\,t\right)$, $\overline{\mathrm{OR}}=\sqrt{\dfrac{t^2}4+t^2}=\dfrac{\sqrt5}2t$ → 변화율 $\dfrac{\sqrt5}2$.
    두 동점을 좌표로 매개화하고 교점을 거쳐 길이를 $t$ 의 식으로 옮기는 전환(RT d2)이 골조. 상중 출발 ★3 · 통찰 1(d2) · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "P(t,0), Q(0,2t) → 직선 PQ: 2x+y=2t → y=2x 와 교점 R(t/2, t) → OR=(√5/2)t → 변화율 √5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{5}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 속력 (1, 2) 와 직선의 기울기 2 를 바꿀 수 있음. 제약: 직선 PQ 의 기울기 −(Q 속력/P 속력) 이 t 와 무관해 교점이 t 에 비례(OR 이 t 의 일차식)하므로 변화율이 상수 — 어떤 양수 조합도 가능하나 근호가 깔끔한 (1,2,y=2x)·(1,1,y=x) 같은 조합 권장."
    creative: "(1) 직선을 y=x 로 바꾸면 R 이 (2t/3, 2t/3) 로 대칭 좌표(I-SYM d1 ★2) (2) 「삼각형 OPQ 의 넓이의 변화율(t=2)」로 바꾸면 넓이 t² 의 미분(★2) (3) Q 의 출발점을 (0,c) 로 옮기면 OR 이 t 의 유리식이 되어 몫의 미분이 필요(미적분Ⅰ 범위 밖 · 피할 것) — 대신 「선분 PQ 의 길이의 변화율」처럼 두 점 거리로 바꾸면 근호 안 이차식(★3)."
```

```yaml
- id: RPM-CALC1-0570
  page: 88
  vendor_label: "유형 13 시각에 대한 길이의 변화율"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    높이 $3\,\mathrm{m}$ 가로등 바로 밑에서 키 $1.5\,\mathrm{m}$ 인 사람이 매분 $90\,\mathrm{m}$ 로 일직선으로 걸어갈 때 그림자의 길이의 변화율(그림: 가로등·사람·그림자가 이루는 닮은 두 직각삼각형).
  category: "그림 → 닮음비 → 그림자 길이 = 거리의 식 → 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 닮은 두 직각삼각형을 비례식 3:(x+s)=1.5:s 로 옮겨 s 를 x 의 식으로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(닮음비 → 그림자 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로등 밑에서의 거리 $x=90t$, 그림자 길이 $s$ 라 하면 닮음비 $3:(x+s)=1.5:s$ → $3s=1.5(x+s)$ → $s=x=90t$ → $\dfrac{ds}{dt}=90$ (m/min).
    그림을 닮음비 식으로 옮겨 $s$ 를 $x$ 의 식으로 만드는 전환(RT d1) 뒤 미분. 키가 가로등의 절반이라 $s=x$ 한 줄로 끝나고 「그림자 끝의 속도(180)」와 혼동하는 함정(Mₜ 1)만 남는다. 벤더 상중(★3)이나 d1 하나 · M_total 5 → ★2.
    [분류 이슈] 상중 라벨과 1단 차이지만 이 범위에서 상중을 내린 유일한 문항이라 기록.
  tier: star_2
  mechanism_primary: "x=90t, 그림자 s → 닮음 3:(x+s)=1.5:s → s=x → ds/dt=90 m/min"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$90\,\mathrm{m/min}$'
  answer_source: "답지"
  figure: crop:fig-0570.png
  latex: latex-bank/rpm-calc1/items/0570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "키 1.5, 가로등 높이 3, 속도 90 을 바꿀 수 있음. 제약: 닮음비에서 s=(h/(H−h))·x 이므로 H−h 가 h 의 약수 관계가 되게(예: H=4, h=1.6 → s=(2/3)x, 속도 90 → 60). 그림 라벨(1.5 m · 3 m)은 고정이므로 수를 바꾸면 그림도 다시 그려야 함."
    creative: "(1) 「그림자 끝이 움직이는 속도」로 바꾸면 x+s 의 변화율(180 · 함정 반전 ★2) (2) 「사람이 가로등을 향해 걸어올 때」로 방향을 바꿔 부호 판단(★2) (3) 사람이 가로등에서 d m 떨어진 점을 출발하게 하면 x=d+90t 로 변화율 불변 — 「출발 위치와 무관」을 발견시키는 변형(I-PD d1 ★2)."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 9 · ★2 18 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0545 RT d2 · 0569 RT d2) · 절차형 27(그중 d1 통찰 기록 5: 0555 EQV · 0563 RT · 0564 RT · 0566 EQV · 0570 RT) · premium 0
- type_hint 상위: 「주어진 구간에서 부등식이 성립할 조건」 계열 6(증가·감소·끝값 등호 3 · 구간 안 극솟값 3) · 「모든 실수에서 부등식이 성립할 조건(최솟값>0)」 계열 4(두 그래프 위아래 포함) · 「위치식 미분 → 조건 방정식 → 대입」 계열 4(0552~0555) · 「운동 방향 전환·속도 부호」 4(0559~0562) · 「위로 던진 물체」 3 · 「시각에 대한 길이의 변화율」 3 · 「두 점의 운동 비교」 3 · 「속도 그래프 해석」 2
- 그림: 3문(`crop:fig-0563.png` · `crop:fig-0564.png` · `crop:fig-0570.png`)
- 서술형 태그 4문(0548 · 0557 · 0562 · 0569) · 대표문제 9문(각 유형 첫 문항)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 드리프트가 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0545 | 상중 ★3 유지. RT d2(양변을 같은 함수 φ(t)=3t⁴−4t³ 의 최솟값 비교로 읽음)로 판정했으나 (a−1)²(3a²+2a+1)≤0 인수분해 경로로 풀면 절차형 ★2~3 — 통찰 유형·depth 가 풀이 경로에 따라 갈림 | ★3 / ★2 |
| RPM-CALC1-0570 | 벤더 상중(★3)이나 키가 가로등의 절반이라 닮음비가 s=x 한 줄로 끝남 · RT d1 · M_total 5 → ★2. 1단 차이지만 이 범위에서 상중을 내린 유일한 문항이라 기록 | ★2 / ★3 |
| RPM-CALC1-0553 · 0561 | 벤더 「중」이나 미분 한 번·방정식 한 번·대입의 M_total 4 절차 → ★1. 1단 차이 · 대표문제(0552 · 0556 · 0559 · 0565 · 0568)와 같은 기준을 적용한 결과 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 유형 05·06·07 은 「부등식 → 차함수 h → 최솟값 부호」 한 골조에 「정의역: 전체/구간」 · 「최솟값 위치: 유일 극소/구간 끝/구간 안 극소」 · 「등호: 열린(미도달)·닫힌·도달」 세 축이 붙는 구조라, 카탈로그에서는 한 유형(부등식 성립 조건)에 하위 변형 축으로 두는 편이 낫다. 「두 그래프의 위아래 관계」(0544 · 0551)도 같은 유형에 통합. 0545 처럼 매개변수 쪽 부등식이 등호 조건으로 떨어지는 문항은 별도 하위 유형(★3)으로 세울 것.
- 유형 08·09·10·12 는 「위치식 → v, a → 조건 방정식(v=c · a=c · x=0 · v=0 · 두 점 등식) → 대입」 한 골조로 통합 가능하다(유형 12 는 08 의 문맥 버전: 최고 높이 ⇔ v=0, 낙하 ⇔ h=0). 따로 세울 것: 속력 |v| 의 최댓값(0555 · 부호 확인 단계 · 구간을 넓히면 I-MI 로 ★3), 운동 방향 전환(v=0 부호 변화 · 중근 함정), 두 점 비교(속도 같음 / 만남 / 반대 방향 = 속도 곱<0).
- 유형 11 속도 그래프 해석은 골조가 그래프 읽기라 별도 유형으로 세우고, 0563(방향·속력·전환 횟수 · 접점 함정)과 0564(가속도 = 접선 기울기)를 하위로 둔다.
- 유형 13 길이의 변화율은 「길이를 t 의 식으로 → 미분」 한 골조이나 표현 전환 방식이 갈리므로 좌표 매개화형(0569 · ★3 후보)과 닮음비형(0570 · 그림자)을 하위 유형으로 나누고, 0568 같은 비례 상수형은 ★1 기본으로 둔다.
