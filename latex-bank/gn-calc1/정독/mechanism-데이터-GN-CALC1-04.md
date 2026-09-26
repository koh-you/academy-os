---
name: mechanism-데이터-GN-CALC1-04
description: 개념원리 미적분Ⅰ 04 함수의 극한의 응용(1/1 · 32~38쪽 · 28문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 04 함수의 극한의 응용
  unit_code: CALC1-04
  part: "1/1"
  extract_range: "32~38쪽 · 32-e13~38-59"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 04 함수의 극한의 응용 (1/1) 정독 데이터 (v1.0)

이 파일은 32~38쪽 28문항 전수다. 구역은 세 개 — 「필수·발전 예제」 13문(필수 예제 4문 + 각 예제에 딸린 확인체크 9문), 「연습문제 STEP 1」 11문, 「연습문제 실력 UP」 4문. 개념원리 고등의 난이도 신호는 구역과 예제 태그다. 여기서는 필수 예제와 그에 딸린 확인체크를 **같은 층(★2 출발)**으로 본다. 확인체크가 「개념원리 익히기」가 아니라 필수 예제 바로 뒤에 붙은 같은 유형 연습이기 때문이다. 연습문제 STEP 1 은 ★2, 실력 UP 은 ★4 출발이고, 기출 태그(수능·교육청)는 통찰 유무로 +0~1 만 본다.

★ 조정은 다음 한 규칙만 썼다. `insight_count = 0 이고 M_total ≤ 5` 면 −1, `insight_count ≥ 2` 이거나 `depth 3` 이거나 `insight_count = 1 이고 M_total ≥ 8` 이면 +1, 그 밖에는 0. 다만 ★5 는 통찰 3개 이상 + {SC, VF, SYM, XU} 중 하나가 있을 때만 주므로 이 범위의 상한은 ★4 였다. `depth_score` 는 effective_depth 의 평균이다. 이 단원은 「응용」 단원이라 도형·좌표 설정(I-RT)과 부등식·조건 변환(I-EQV·I-CON)이 반복돼 통찰형 비율이 다른 단원보다 높다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-32-e13
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\lim_{x\to 1}\frac{\sqrt{a+x}-b}{x-1}=\frac14$, ⑵ $\lim_{x\to 2}\frac{x-2}{x^2+ax+b}=\frac13$ 이 성립하도록 하는 상수 $a$, $b$ 구하기.
  category: "0/0 꼴 필요조건 → 유리화·인수분해 → 남은 극한값과 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 분모→0 이고 극한이 유한하므로 분자→0, 즉 √(a+1)=b. 유리화하면 1/(2√(a+1))=1/4.
    ⑵ 분자→0 이고 극한값이 0이 아니므로 분모→0, 분모를 (x−2)(x−c)로 두고 1/(2−c)=1/3.
    교과서가 KEY 로 제시한 필요조건을 두 방향으로 쓰는 표준 절차라 통찰 라벨 없음.
    필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "극한 유한 + 분모→0 ⟹ 분자→0 → 유리화·인수분해로 공통인수 약분 → 남은 식의 극한 = 주어진 값에서 계수 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=3$, $b=2$ ⑵ $a=-1$, $b=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/32-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 접근점 x→1 과 극한값 1/4, ⑵ 접근점 x→2 와 극한값 1/3. 제약: ⑴ 은 a+1 이 완전제곱수여야 b 가 유리수로 떨어지고 b>0 이어야 한다. ⑵ 는 극한값이 0이 아니어야 분모→0 필요조건을 쓸 수 있고 분모의 나머지 근이 정수면 답이 깔끔하다."
    creative: "(1) 분자와 분모를 뒤집어 lim (x−1)/(√(a+x)−b) 로 묻기(같은 골조 ★2) (2) a, b 대신 a+b 나 ab 만 묻기(★2 유지) (3) 분모를 삼차식으로 올려 인수분해 단계를 하나 더 얹으면 ★3 (4) 극한값을 문자 k 로 주면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC1-32-36
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to 2}\frac{x^2-a}{x-2}=b$, ⑵ $\lim_{x\to -3}\frac{x+3}{\sqrt{2x+a}-1}=b\ (b\ne 0)$ 가 성립하는 상수 $a$, $b$ 구하기.
  category: "0/0 꼴 필요조건으로 a 결정 → 약분·유리화 → b 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 분자→0 에서 a=4 를 얻고 약분해 b 를 읽는 한 방향, ⑵ 는 b≠0 단서 덕분에 분모→0 을 쓰는 반대 방향이다.
    두 방향을 한 문항에서 확인하는 예제 32-e13 의 연습이라 골조가 같다.
    통찰 0 · M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "분자(또는 분모)→0 필요조건으로 a 결정 → 인수분해·유리화로 약분 → 남은 식에 접근값 대입해 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=4$, $b=4$ ⑵ $a=7$, $b=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/32-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 접근점 x→c 와 분자 x²−a (a=c² 로 따라 움직인다), ⑵ 접근점 x→−3 과 근호 안 2x+a (a 는 근호 값이 1 이 되도록 맞춤). 제약: ⑵ 는 b≠0 단서를 반드시 남겨야 분모→0 을 정당화할 수 있다."
    creative: "(1) ⑵ 에서 분모를 √(2x+a)−c 로 바꿔 c 도 미지수로 두면 조건이 하나 더 필요해 ★3 (2) a 는 주고 b 만 묻는 단순형은 ★1 (3) 두 소문항의 a 를 같은 문자로 묶어 연립시키면 ★3."
```

```yaml
- id: GN-CALC1-32-37
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to -1}\frac{x^2+ax+b}{x+1}=2$, ⑵ $\lim_{x\to 2}\frac{x-2}{a\sqrt{x-1}+b}=1$ 이 성립하는 상수 $a$, $b$ 구하기.
  category: "0/0 꼴 필요조건 → 인수 (x−c) 를 뽑아 나머지 인수 결정 → 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 분자가 (x+1)(x+c) 꼴이어야 하고 남은 (x+c) 의 x→−1 값이 2 라는 두 줄이면 끝난다.
    ⑵ 는 분자→0 이고 극한이 0이 아니므로 분모→0, 즉 a+b=0 을 먼저 세운 뒤 유리화한다.
    두 소문항 모두 교과서 KEY 절차라 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "분자 또는 분모가 접근점에서 0 → 공통인수 (x−c) 분해 → 유리화·약분 후 남은 식의 극한 = 주어진 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=4$, $b=3$ ⑵ $a=2$, $b=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/32-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 접근점 −1 과 극한값 2 (나머지 인수의 상수항이 정수가 되게), ⑵ 접근점 2 와 극한값 1, 근호 안 x−1. 제약: ⑵ 에서 a+b=0 이 성립해야 분모가 0 으로 가고 a≠0 이어야 한다."
    creative: "(1) ⑴ 의 분자를 삼차식으로 올려 조립제법 단계를 추가하면 ★3 (2) ⑵ 를 a√(x−1)+b√(x+2) 처럼 근호 두 개로 만들면 유리화가 두 번 필요해 ★3 (3) a, b 를 구하지 않고 극한이 존재할 조건만 서술형으로 묻기(★3 · I-BW)."
```

```yaml
- id: GN-CALC1-33-e14
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to\infty}\frac{f(x)}{2x^2+x+1}=1$, $\lim_{x\to 2}\frac{f(x)}{x^2-x-2}=1$ 을 만족시킬 때 $f(0)$ 구하기.
  category: "∞ 극한으로 차수·최고차항 결정 → x→2 에서 인수 확인 → f 확정 → f(0)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건에서 f 는 최고차항이 2x² 인 이차식, 둘째 조건에서 분모→0 이므로 f(2)=0.
    f(x)=2(x−2)(x−k) 로 두고 x→2 극한값 1 로 k 를 정한 뒤 f(0) 을 읽는다.
    「다항함수의 결정」 유형의 원형 그대로라 통찰 라벨 없음. 필수 예제 ★2 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "x→∞ 극한 → f 의 차수와 최고차항 → x→2 에서 분모→0 → f(2)=0 → f=2(x−2)(x−k) → 남은 극한으로 k → f(0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/33-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2x²+x+1 의 최고차 계수(차수는 유지), x²−x−2 의 두 근, 두 극한값, 묻는 f(0) 의 대입점. 제약: 두 번째 분모의 한 근이 접근점과 같아야 f 의 인수가 고정되고, k 가 유리수로 떨어지게 극한값을 고른다."
    creative: "(1) f(0) 대신 f(1) 이나 f 자체를 묻기(★2 유지) (2) 분모를 삼차식으로 올리면 f 가 삼차가 되어 인수 결정이 두 번 필요 ★3 (3) 두 번째 극한값을 0 으로 주면 f 가 (x−2)² 를 인수로 가져 차수 판단이 한 겹 늘어 ★3."
```

```yaml
- id: GN-CALC1-33-38
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to\infty}\frac{f(x)}{x^2+1}=2$, $\lim_{x\to 1}\frac{f(x)}{x^2-1}=-1$ 을 만족시킬 때 $\lim_{x\to 2}\frac{f(x)}{x-2}$ 구하기.
  category: "차수·최고차항 결정 → f(1)=0 → f 확정 → 세 번째 극한 계산"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 는 최고차항 2x² 인 이차식이고 f(1)=0 이므로 f=2(x−1)(x−k).
    x→1 극한 −1 에서 k 를 정하면 f=2(x−1)(x−2) 이고, 마지막 극한은 약분 후 대입 한 줄이다.
    묻는 값이 한 단계 뒤로 밀렸을 뿐 33-e14 와 골조가 같다. 통찰 0 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "x→∞ 극한 → 이차·최고차항 2 → f(1)=0 → f=2(x−1)(x−k) → k 결정 → lim f/(x−2) 를 약분해 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/33-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 비 2, 두 번째 분모 x²−1 의 근, 극한값 −1, 마지막에 묻는 접근점 x→2. 제약: 마지막 접근점이 f 의 다른 근과 같아야 0/0 꼴이 되어 계산이 이어진다."
    creative: "(1) 마지막 극한 대신 f 의 최솟값을 묻기(이차함수 결합 ★3) (2) 두 번째 조건을 lim f/(x−1)=c 로 바꾸면 k 결정이 더 빨라져 ★2 (3) f 를 삼차로 올리고 조건을 세 개 주면 ★3."
```

```yaml
- id: GN-CALC1-33-39
  page: 33
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to\infty}\frac{f(x)-2x^3}{x^2}=2$, $\lim_{x\to 0}\frac{f(x)}{x}=-3$ 을 만족시킬 때 $f(x)$ 구하기.
  category: "f−2x³ 의 차수 조건 → 삼차항 고정 → x→0 조건으로 상수항·일차항 결정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 f(x)−2x³ 가 최고차항 2x² 인 이차 이하 식이라는 뜻이라 f 의 삼차·이차항이 한 번에 고정된다.
    둘째 조건에서 분모→0 이므로 f(0)=0, 약분하면 일차항 계수가 −3.
    조건을 읽는 위치만 바뀐 표준 결정 절차라 통찰 0 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "f−2x³ 를 x² 로 나눈 극한 → f=2x³+2x²+bx+c → f(0)=0 → c=0 → lim f/x=−3 → b=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$f(x)=2x^3+2x^2-3x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/33-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빼는 항 2x³ 의 계수, 나누는 x² 의 차수, 두 극한값 2 와 −3. 제약: 나누는 차수가 빼고 남은 식의 차수와 같아야 극한이 유한한 0이 아닌 값이 되고, x→0 조건은 f 의 상수항을 0 으로 강제한다."
    creative: "(1) f(x)−2x³ 대신 f(x)−x·g(x) 꼴로 주기(★3) (2) f 를 구하지 말고 f(1) 만 묻기(★2 유지) (3) 두 번째 조건을 lim f/x²=k 로 바꾸면 일차항까지 0 이 되어 조건이 하나 더 필요해 ★3."
```

```yaml
- id: GN-CALC1-34-e15
  page: 34
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\frac{x^2+x-1}{3x^2+2}\le f(x)\le\frac{x^2+x+4}{3x^2+2}$ 일 때 $\lim_{x\to\infty}f(x)$, ⑵ $3x+1<f(x)<3x+4$ 일 때 $\lim_{x\to\infty}\frac{\{f(x)\}^2}{x^2+1}$ 구하기.
  category: "양변의 극한이 같음을 확인 → 샌드위치 정리 → ⑵ 는 부등식을 제곱해 새 부등식 생성"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 에서 f 의 부등식을 그대로 쓸 수 없으므로 양변이 양수임을 확인하고 제곱해 {f(x)}² 의 부등식으로 옮긴 뒤 x²+1 로 나눈다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 양변 모두 1/3 로 가므로 대소 관계 정리를 바로 쓴다.
    ⑵ 는 주어진 부등식이 f 에 대한 것이라 묻는 식에 직접 못 넣고, 양의 실수 범위에서 양변이 양수임을 확인한 뒤 제곱해야 한다(T-범위·T-부호).
    조건 변환 통찰 1개 + M_total 9 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f 를 가두는 부등식의 양변 극한이 같음을 확인 → (필요하면 양수 확인 후 제곱·나눗셈으로 부등식을 묻는 식 꼴로 변환) → 샌드위치 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{3}$ ⑵ $9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/34-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 분자 두 개의 상수항(−1, 4)과 분모 3x²+2 의 계수 — 양변의 극한이 같아야 하므로 분모 최고차 계수만 답을 바꾼다. ⑵ 는 3x+1, 3x+4 의 일차 계수와 분모 x²+1. 제약: 양변의 최고차항이 같아야 하고, 제곱하려면 정의 구간에서 양변이 양수여야 한다."
    creative: "(1) ⑵ 를 세제곱·네제곱으로 올리면 골조 유지 ★3 (2) 가두는 부등식을 x→∞ 가 아니라 특정 점 x→a 에서 주면 함숫값 극한형으로 바뀜(★2) (3) 하한만 주고 상한을 학생이 만들게 하면 ★4 (4) f 가 음수일 수 있게 범위를 열면 제곱 변환이 깨져 T-부호 함정이 생기고 ★4."
```

```yaml
- id: GN-CALC1-34-40
  page: 34
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=2x+1$, $g(x)=x^2+2$ 와 함수 $h(x)$ 가 모든 실수에서 $f(x)\le h(x)\le g(x)$ 일 때 $\lim_{x\to 1}h(x)$ 구하기.
  category: "양 끝 함수의 x→1 극한이 모두 3 임을 확인 → 샌드위치 정리"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(1)=3, g(1)=3 을 대입해 확인하고 정리를 그대로 쓰면 끝이다. 변환도 함정도 없다.
    통찰 0 · M_total 4 ≤ 5 → 확인체크 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "lim f = lim g = 3 확인 → 샌드위치 정리로 lim h = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/34-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수와 접근점 x→1. 제약: 접근점에서 f 와 g 의 함숫값이 반드시 같아야 하므로 두 곡선의 교점을 접근점으로 잡는다."
    creative: "(1) 접근점을 두 곡선의 교점이 아닌 곳으로 옮겨 극한을 구할 수 없음을 설명하게 하기(★2 · I-VF) (2) h 의 식을 묻지 말고 lim h/(x−1) 처럼 한 겹 씌우기(★3) (3) 부등식을 x→∞ 형태로 바꾸면 최고차 비교가 필요해 ★2."
```

```yaml
- id: GN-CALC1-34-41
  page: 34
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 양의 실수 $x$ 에서 $\frac{5x+3}{x+2}\le f(x)\le\frac{5x^2-2x+7}{x^2}$ 일 때 $\lim_{x\to\infty}f(x)$ 구하기.
  category: "양 끝 유리식의 x→∞ 극한이 모두 5 → 샌드위치 정리"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변·우변 모두 최고차항 비가 5 라 x→∞ 극한이 5 로 같다.
    분모의 최고차로 나누는 유리식 극한 계산만 두 번 하면 되고 변환은 없다.
    통찰 0 · M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "양 끝 유리식을 분모 최고차로 나눠 극한 5 확인 → 샌드위치 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/34-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 유리식의 계수 — 두 식의 최고차 비가 같은 값이 되도록만 유지하면 된다(여기서는 5). 분모 차수는 1 과 2 로 달라도 된다. 제약: 양의 실수 범위 단서는 분모가 0 이 되지 않게 하는 장치라 남겨야 한다."
    creative: "(1) 두 끝의 최고차 비를 다르게 만들어 「구할 수 없다」를 답으로 하는 판단형(★3 · I-VF) (2) f 대신 xf(x) 의 극한을 묻기(★3) (3) 부등식을 f(x)−5 의 절댓값 형태로 주면 정의 이해가 필요해 ★3."
```

```yaml
- id: GN-CALC1-34-42
  page: 34
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에서 $2x+1<f(x)<2x+5$ 일 때 $\lim_{x\to\infty}\frac{\{f(x)\}^3}{x^3+1}$ 구하기.
  category: "부등식을 세제곱해 {f}³ 의 부등식 생성 → x³+1 로 나눔 → 샌드위치 정리"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 를 가두는 일차 부등식을 그대로 쓸 수 없으므로 세제곱해 {f(x)}³ 의 부등식으로 옮긴 뒤 x³+1 로 나눠 묻는 식 꼴을 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세제곱은 실수 전체에서 순서를 보존하므로 부등식 방향이 그대로 유지된다(제곱과 달리 양수 조건이 필요 없다는 점이 포인트).
    양 끝 모두 최고차 비가 8 이라 답이 8 로 조인다.
    조건 변환 통찰 1개 + M_total 8 → 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "2x+1<f<2x+5 를 세제곱 → (2x+1)³/(x³+1) 와 (2x+5)³/(x³+1) 의 극한이 모두 8 → 샌드위치 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/34-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 기울기 2 와 두 상수항 1, 5, 분모 x³+1. 제약: 답은 (기울기)³/(분모 최고차 계수)로 정해지므로 세제곱이 정수가 되는 기울기를 고른다. 홀수 거듭제곱이면 부등식 방향이 그대로지만 짝수로 바꾸면 양수 조건이 필요하다."
    creative: "(1) 세제곱을 제곱으로 바꾸고 범위를 모든 실수로 열어 두면 T-부호 함정이 생겨 ★4 (2) 분모를 x²+1 로 낮추면 발산 판단형이 되어 ★3 (3) f 의 부등식을 x→∞ 가 아니라 x→0 에서 주면 다른 골조(★2)."
```

```yaml
- id: GN-CALC1-35-e16
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=-ax^2+a\ (a>0)$ 의 그래프와 $x$축으로 둘러싸인 부분에 내접하는 정사각형의 넓이를 $S(a)$ 라 할 때 $\lim_{a\to\infty}S(a)$ 구하기.
  category: "정사각형 한 변을 문자로 두고 꼭짓점이 곡선 위 → a 에 대한 이차방정식 → S(a) → a→∞ 극한"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 내접 조건(x축 위 대칭 배치)을 꼭짓점 (t, 2t) 가 곡선 위에 있다는 식 2t=a(1−t²) 로 옮겨야 넓이를 a 의 식으로 쓸 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곡선은 x=±1 에서 x축을 만나고 y축 대칭이므로 정사각형 꼭짓점을 (±t, 0), (±t, 2t) 로 잡는 설정이 핵심이다.
    at²+2t−a=0 의 양수 근만 취하고(T-부호) S(a)=4t², a→∞ 에서 t→1 이므로 넓이가 밑변 2 인 정사각형에 수렴한다.
    도형→식 전환 통찰 1개(RT d2) + M_total 8 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "정사각형 꼭짓점 (t, 2t) 가 y=a(1−x²) 위 → at²+2t−a=0 의 양수 근 t → S(a)=4t² → a→∞ 에서 t→1 → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: "crop:fig-35-e16.png"
  latex: latex-bank/gn-calc1/items/35-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=−ax²+ka 로 바꾸면 x절편이 ±√k 로 움직이고 극한도 (2√k)² 로 따라 움직인다. 제약: a>0 과 그림의 배치(정사각형 한 변이 x축 위)를 유지해야 하고, 이차방정식의 근은 양수 근만 취한다. 그림 라벨(정사각형·x축)은 고정."
    creative: "(1) 정사각형 대신 직사각형 넓이의 최댓값을 S(a) 로 두면 최적화가 얹혀 ★4 (2) 넓이 대신 둘레의 극한을 묻기(★3 유지) (3) a→∞ 를 a→0+ 로 바꾸면 도형이 납작해져 극한 0 판정형 ★3 (4) 곡선을 y=−a|x|+a 로 바꾸면 이차방정식 없이 일차식으로 풀려 ★2."
```

```yaml
- id: GN-CALC1-35-43
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\mathrm{O}(0,0)$, $\mathrm{P}(3t-1,\,4t+1)$ 사이의 거리를 $d(t)$ 라 할 때 $\lim_{t\to\infty}\{d(t)-5t\}$ 구하기.
  category: "거리 공식으로 d(t) → ∞−∞ 꼴 유리화 → 최고차로 나눠 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 대입은 기계적이고, 남는 것은 √(25t²+2t+2)−5t 라는 전형적인 ∞−∞ 유리화다.
    분자·분모에 √+5t 를 곱해 (2t+2)/(√(25t²+2t+2)+5t) 로 바꾸고 t 로 나눈다.
    도형 요소가 거리 공식 한 줄뿐이라 표현 전환으로 세지 않았다. 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "d(t)=√(25t²+2t+2) → d−5t 를 유리화 → (2t+2)/(√(25t²+2t+2)+5t) → t 로 나눠 2/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/35-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 P 의 좌표 (3t−1, 4t+1) 의 계수와 빼는 항 5t. 제약: 빼는 항의 계수는 반드시 √((3t)²+(4t)²)=5t 의 최고차와 같아야 ∞−∞ 가 유한값이 된다. 상수항이 답을 결정하므로 정수로."
    creative: "(1) 빼는 항을 4t 로 어긋나게 해 발산을 판정하게 하면 ★3 (2) 두 점을 모두 움직이게 해 d(t) 자체를 만들게 하면 ★3 (3) t→∞ 대신 t→0 으로 바꾸면 단순 대입 ★1 (4) 거리 대신 삼각형 넓이를 두면 도형 설정이 한 겹 늘어 ★3."
```

```yaml
- id: GN-CALC1-35-44
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2$ 위의 점 $\mathrm{P}(t,\,t^2)\ (t\ne 0)$ 에서 직선 $\mathrm{OP}$ 와 수직인 직선의 $x$절편을 $f(t)$ 라 할 때 $\lim_{t\to 0}\frac{f(t)}{t}$ 구하기.
  category: "OP 기울기 → 수직 조건으로 직선 식 → y=0 대입해 f(t) → f(t)/t 의 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 수직 조건을 기울기 곱 −1 로 옮겨 직선의 방정식을 세우고 x절편을 t 의 식으로 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OP 의 기울기가 t 이므로 수직인 직선의 기울기는 −1/t, 점 P 를 지나는 식에서 y=0 을 넣으면 f(t)=t³+t.
    f(t)/t=t²+1 이라 t→0 극한이 바로 나온다.
    기하→대수 전환 1개(d1)이지만 계산이 짧아 M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "OP 기울기 t → 수직 기울기 −1/t → P 를 지나는 직선에 y=0 → f(t)=t³+t → f(t)/t=t²+1 → 1"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-35-44.png"
  latex: latex-bank/gn-calc1/items/35-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=kx² 로 두면 OP 기울기가 kt 가 되어 f(t)=k²t³+t 로 따라 움직인다. 제약: t≠0 단서가 있어야 기울기가 정의되고, y절편을 묻게 바꾸면 t→0 에서 형태가 달라진다. 그림의 P·O 라벨은 고정."
    creative: "(1) x절편 대신 y절편 g(t) 를 두고 lim g(t) 를 묻기(★2) (2) 수직이등분선으로 바꾸면 중점 계산이 얹혀 ★3 (3) t→0 대신 t→∞ 로 바꾸면 발산·차수 비교형 ★3 (4) 곡선을 y=x³ 로 올리면 기울기가 3t² 이 되어 f(t)/t 의 차수가 바뀌고 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-36-45
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to 1}\frac{f(x)+1}{x-1}=9$ 를 만족시킬 때 $\lim_{x\to 1}\frac{\{f(x)\}^2+f(x)}{x^3-1}$ 구하기.
  category: "f(1)=−1 확인 → 분자 f(f+1) 인수분해 → 주어진 극한이 그대로 들어가게 분리"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "묻는 식을 f(x) · {(f(x)+1)/(x−1)} · 1/(x²+x+1) 로 쪼개 주어진 극한 9 를 그대로 끼워 넣는다(f 를 직접 구하지 않는다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 극한을 이용한 다른 극한값 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모→0 이고 극한이 유한하므로 f(1)+1=0, 즉 f(1)=−1 이 먼저 확정된다.
    분자를 f(f+1) 로, 분모를 (x−1)(x²+x+1) 로 쪼개면 (−1)·9·(1/3) 로 곱해진다.
    f 를 구하려 들면 조건이 모자라 막히므로 식 분리가 골조다. 통찰 1개(d2) + M_total 8 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "f(1)=−1 → 분자 f(f+1)·분모 (x−1)(x²+x+1) → f(x)·[(f(x)+1)/(x−1)]·[1/(x²+x+1)] → (−1)·9·(1/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 극한값 9, 더하는 상수 1(이 값이 f(1) 을 정한다), 분모 x³−1 의 접근점. 제약: 분자의 인수분해가 f·(f+상수) 로 떨어져야 하고 분모의 접근점이 분자의 0 점과 같아야 한다."
    creative: "(1) 분자를 {f(x)}²−1 로 바꿔 f−1 과 f+1 로 갈라지게 하면 한 인수의 극한만 유한이라 ★3 유지 (2) 분모를 x²−1 로 낮추면 ★2 (3) f 가 이차식이라는 단서를 추가해 f 를 실제로 결정하게 하면 골조가 「다항함수의 결정」으로 바뀌며 ★3 (4) 묻는 식을 lim f(x)/(x−1) 로 단순화하면 ★2."
```

```yaml
- id: GN-CALC1-36-46
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to -3}\frac{\sqrt{x^2-x-3}+ax}{x+3}=b$ 가 성립하는 상수 $a$, $b$ 에 대하여 $a+b$ 구하기.
  category: "분자→0 으로 a 결정 → 유리화 → (x+3) 약분 → b 계산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→−3 에서 근호 값이 3 이므로 분자→0 조건은 3−3a=0, 즉 a=1.
    유리화할 때 곱하는 짝이 (√(x²−x−3)−x) 이고 접근점이 음수라 부호를 놓치기 쉽다(T-부호·T-범위).
    표준 절차 두 단계라 통찰 0. M_total 8 이지만 통찰이 없어 조정 없음 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "분자→0 ⟹ a=1 → 유리화해 분자를 −(x+3) 로 → 약분 후 −1/(√(x²−x−3)−x) 에 x=−3 대입 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식의 상수항과 접근점 −3, 그리고 묻는 조합 a+b. 제약: 접근점에서 근호 안이 0 이상이고 근호 값이 유리수여야 a 가 깔끔하게 떨어진다. 접근점을 양수로 옮기면 부호 함정이 사라져 쉬워진다."
    creative: "(1) a 를 주고 b 만 묻기(★1) (2) 근호를 분모로 옮겨 lim (x+3)/(√(…)+ax) 꼴로 바꾸기(★2 · 필요조건 방향이 반대) (3) 분자를 √(x²−x−3)+ax+c 로 늘리면 조건이 하나 더 필요해 ★3."
```

```yaml
- id: GN-CALC1-36-47
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=x^2+ax+b$ 에 대하여 $\lim_{x\to 0}\frac{f(x)}{x}=4$ 일 때 $f(x)$ 의 최솟값 구하기.
  category: "f(0)=0 → b=0 → 약분해 a=4 → 이차함수 최솟값"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모→0 이므로 f(0)=0 에서 b=0, (x²+ax)/x=x+a 에서 a=4.
    f=x²+4x=(x+2)²−4 의 최솟값 −4 는 중학·공통수학 수준의 마무리 한 줄이다.
    통찰 0 · M_total 5 ≤ 5 → STEP 1 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "f(0)=0 ⟹ b=0 → 약분해 lim (x+a)=a=4 → f=x²+4x 완전제곱 → 최솟값 −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 4 와 이차항 계수. 제약: 극한값이 a 가 되므로 최솟값은 −a²/4 로 따라 움직인다. 정수 답을 원하면 극한값을 짝수로 둔다."
    creative: "(1) 최솟값 대신 f 의 그래프가 x축과 만나는 두 점 사이 거리를 묻기(★2) (2) 이차항 계수를 문자로 두면 조건이 하나 더 필요해 ★2 (3) 최솟값을 주고 극한값을 거꾸로 묻는 역문제(★2 · I-BW) (4) f 를 삼차로 올리면 극값 계산이 필요해 미분 단원과 결합 ★3."
```

```yaml
- id: GN-CALC1-36-48
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to\infty}\frac{f(x)}{2x^2-x+3}=1$, $\lim_{x\to -2}\frac{f(x)}{x^2+3x+2}=-1$ 을 만족시킬 때 $f(1)$ 구하기.
  category: "차수·최고차항 결정 → f(−2)=0 → f=2(x+2)(x−k) → k 결정 → f(1)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    33-e14 와 같은 골조다. f 는 최고차항 2x² 인 이차식이고 분모 (x+1)(x+2) 가 0 으로 가므로 f(−2)=0.
    f=2(x+2)(x−k) 를 넣어 x→−2 극한 −1 로 k 를 정한 뒤 f(1) 을 대입한다.
    통찰 0 · M_total 8 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x→∞ 극한 → f 는 2x²+… → f(−2)=0 → f=2(x+2)(x−k) → x→−2 극한으로 k → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2x²−x+3 의 최고차 계수, 둘째 분모 x²+3x+2 의 두 근(−1, −2 중 어느 쪽을 접근점으로 쓸지), 극한값 −1, 묻는 대입점 1. 제약: 접근점은 둘째 분모의 근 중 하나여야 하고 k 가 유리수로 떨어지게 극한값을 고른다."
    creative: "(1) 접근점을 x→−1 로 바꾸면 남는 인수가 달라져 같은 ★2 (2) f(1) 대신 f 의 최솟값을 묻기(★3) (3) 첫 조건의 분모를 삼차로 올려 f 를 삼차로 만들면 ★3 (4) 둘째 극한값을 0 으로 주면 f 가 분모 전체를 인수로 가져 차수 판단이 얹혀 ★3."
```

```yaml
- id: GN-CALC1-36-49
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to\infty}\frac{f(x)-3x^2}{x}=a\ (a\ne 0)$, $\lim_{x\to 0}\frac{f(x)}{x}=2$ 를 만족시킬 때 상수 $a$ 구하기.
  category: "f−3x² 의 차수 조건 → f=3x²+ax+c → f(0)=0 → 일차항 계수가 곧 a"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 f(x)−3x² 가 최고차항 ax 인 일차 이하 식이라는 뜻이라 f=3x²+ax+c 로 적힌다.
    둘째 조건에서 f(0)=0 이므로 c=0, 약분하면 lim (3x+a)=a=2.
    33-39 의 축소판으로 통찰 0 · M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "f−3x² 를 x 로 나눈 극한 → f=3x²+ax+c → f(0)=0 → c=0 → lim f/x=a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빼는 항 3x² 의 계수와 둘째 극한값 2. 제약: a≠0 단서가 있어야 f−3x² 의 차수가 1 로 고정되고, 두 조건이 같은 일차항 계수를 가리키므로 답은 둘째 극한값과 같아진다."
    creative: "(1) a 를 묻지 말고 f(2) 를 묻기(★2) (2) 빼는 항을 3x³ 로 올리면 미지 계수가 둘로 늘어 ★3 (3) a≠0 단서를 빼고 a=0 일 수 있는지 따지게 하면 ★3 · I-VF (4) 둘째 조건을 lim f/x²=k 로 바꾸면 일차항이 0 이 되어 모순 판정형 ★3."
```

```yaml
- id: GN-CALC1-36-50
  page: 36
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x\ge 1$ 인 모든 실수에서 $\frac{1+5x-3x^2}{3x^2}\le f(x)\le\frac{2-x}{x}$ 일 때 $\lim_{x\to\infty}f(x)$ 구하기.
  category: "양 끝 유리식의 x→∞ 극한이 모두 −1 → 샌드위치 정리"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 최고차 비 −3/3=−1, 우변도 −x/x=−1 이라 양 끝이 −1 로 같다.
    답이 음수라 부호를 놓치기 쉬운 것 말고는 변환이 없다.
    통찰 0 · M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "양 끝 유리식을 분모 최고차로 나눠 극한 −1 확인 → 샌드위치 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/36-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 유리식의 계수 — 두 식의 최고차 비가 같은 값이 되도록만 맞추면 된다. 제약: x≥1 조건은 분모가 0 이 되지 않게 하는 장치이고, 두 끝의 최고차 비가 어긋나면 극한을 결정할 수 없다."
    creative: "(1) 두 끝의 극한을 다르게 만들어 「결정 불가」 판정형으로 바꾸면 ★3 (2) f 대신 xf(x) 나 {f(x)}² 의 극한을 묻기(★3 · I-EQV 추가) (3) 부등식의 한쪽만 주고 나머지를 학생이 세우게 하면 ★4."
```

```yaml
- id: GN-CALC1-37-51
  page: 37
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to 1}\frac{1}{x-1}\left(\frac{x^2}{x+1}+a\right)=b$ 일 때 상수 $a$, $b$ 에 대하여 $b-a$ 구하기.
  category: "괄호 안을 통분해 하나의 유리식으로 → 분자→0 으로 a 결정 → 약분 후 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱으로 적힌 식을 통분해 {x²+a(x+1)}/{(x+1)(x−1)} 하나의 분수로 바꿔야 0/0 꼴 필요조건을 쓸 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴에서 상수 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/(x−1) 이 발산하므로 괄호 안이 0 으로 가야 한다 — 통분하면 분자 x²+a(x+1) 의 x=1 값이 0, 즉 a=−1/2.
    분자가 (2x+1)(x−1)/2 로 갈라져 약분되고 남는 식의 극한이 b=3/4.
    통분 변환 1개(d1)지만 계산이 짧아 M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "통분 → {x²+a(x+1)}/{(x+1)(x−1)} → 분자→0 ⟹ a=−1/2 → 분자 인수분해·약분 → b=3/4 → b−a"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/37-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 유리식 x²/(x+1) 의 분자·분모와 접근점 1. 제약: 접근점에서 유리식의 분모가 0 이 아니어야 하고, a 는 −(그 점에서의 유리식 값)으로 자동 결정된다. 묻는 조합(b−a, a+b, ab)은 자유."
    creative: "(1) 괄호 안을 x²/(x+1)−x 처럼 두 항으로 늘리면 통분이 한 겹 더해져 ★3 (2) 1/(x−1) 을 1/(x−1)² 으로 바꾸면 분자가 이중근을 가져야 해 조건이 둘로 늘고 ★4 (3) a 를 주고 b 만 묻기(★1)."
```

```yaml
- id: GN-CALC1-37-52
  page: 37
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to\infty}\frac{f(x)}{2x-\sqrt{x^2+3}}=2$, $\lim_{x\to 2}\frac{f(x)}{x^2+x-6}=p$ 를 만족시키는 다항함수 $f(x)$ 에 대하여 $f(p)$ 구하기.
  category: "분모의 x→∞ 거동을 일차로 판정 → f 는 일차식 → f(2)=0 → p 계산 → f(p)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2x−√(x²+3) 을 x(2−√(1+3/x²)) 로 보아 x→∞ 에서 x 와 같은 차수임을 확인해야 f 의 차수와 최고차항을 결정할 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모가 무리식이라 겉보기 차수를 바로 읽을 수 없고, 최고차로 묶어 극한 1 을 확인해야 「분모 ~ x」가 나온다.
    그러면 f 는 최고차항 2x 인 일차식, 둘째 조건의 분모 (x−2)(x+3) 이 0 으로 가므로 f(2)=0 → f=2(x−2), p=2/5.
    무리식 차수 판정 통찰 1개(d2) + M_total 8 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "2x−√(x²+3) ~ x → f 는 2x+c 꼴 → f(2)=0 ⟹ f=2(x−2) → p=lim 2(x−2)/((x−2)(x+3))=2/5 → f(p)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{16}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/37-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2x−√(x²+3) 의 계수(2 를 1 로 바꾸면 분모가 상수 차수로 떨어져 골조가 무너진다), 둘째 분모의 두 근, 극한값 2. 제약: 2x−√(x²+3) 의 x→∞ 거동이 (2−1)x 이므로 앞 계수가 1 보다 커야 한다."
    creative: "(1) 분모를 √(4x²+1)−√(x²+3) 로 바꿔 두 무리식 차로 만들면 차수 판정이 한 겹 늘어 ★3 유지 (2) x→−∞ 로 바꾸면 √(x²)=−x 부호 함정이 생겨 ★4 (3) f(p) 대신 f 자체를 묻기(★3) (4) 둘째 조건의 p 를 상수로 주면 미지수가 줄어 ★2."
```

```yaml
- id: GN-CALC1-37-53
  page: 37
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    상수항과 계수가 모두 정수인 두 다항함수 $f$, $g$ 가 $\lim_{x\to\infty}\frac{f(x)g(x)}{x^3}=2$, $\lim_{x\to 0}\frac{f(x)g(x)}{x^2}=-4$ 를 만족시킬 때 $f(2)$ 의 최댓값. 5지선다.
  category: "두 조건을 곱 fg 하나로 통합 → fg=2x²(x−2) → 정수 계수 인수 분해 경우를 따져 f(2) 최대"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 를 따로 구하려 하지 않고 두 극한 조건을 곱 fg 하나에 대한 조건으로 묶어 fg=2x³−4x² 를 확정한다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "fg=2x²(x−2) 를 정수 계수 두 다항식의 곱으로 나누는 경우를 모두 따져(부호 분배 포함) f(2) 가 최대가 되는 분할을 고른다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 에서 fg 는 최고차항 2x³ 인 삼차식, ㈏ 에서 fg 가 x² 를 인수로 가지며 그 계수가 −4 → fg=2x²(x−2).
    x=2 에서 fg 가 0 이므로 f(2)·g(2)=0 이고, 인수 2x² 을 f 에 몰아준 f=2x² 일 때 f(2)=8 이 최대다.
    조건 통합 + 경우 분류 통찰 2개 → STEP 1 ★2 에서 +1 → ★3.
    [분류 이슈] 수능 기출·경우 분류라 ★4 후보지만 저노출 유형(SC·VF·SYM·XU·RT·PD·BW)이 없어 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "㈎·㈏ → fg=2x²(x−2) → 정수 계수 분할 경우 나열 → f 에 2x² 를 몰아준 분할에서 f(2)=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/37-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 극한값 2(fg 의 최고차 계수), ㈏ 의 극한값 −4(x² 의 계수), 나누는 차수 x³·x², 묻는 대입점 2. 제약: 정수 계수 조건을 유지해야 분할이 유한하고, fg 의 나머지 인수의 근이 묻는 대입점과 같으면 f(2)=0 인 분할이 섞여 최댓값 판단이 살아난다."
    creative: "(1) f(2) 의 최솟값(부호를 뒤집은 분할)을 묻기(★3 유지) (2) f 의 차수를 지정하면 분할이 하나로 줄어 ★2 (3) 정수 조건을 빼면 최댓값이 발산해 「존재하지 않음」 판정형 ★4 · I-VF (4) 조건을 fg 대신 f+g 로 주면 통합이 깨져 완전히 다른 골조."
```

```yaml
- id: GN-CALC1-37-54
  page: 37
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    모든 실수 $x$ 에서 $2x^3-6x^2+4x\le f(x)\le x^4-2x^3+1$ 일 때 $\lim_{x\to 1}\frac{f(x)}{x-1}$ 구하기.
  category: "양 끝이 x=1 에서 0 → 공통인수 (x−1) 로 나눔 → 좌·우극한의 부등호 방향을 나눠 샌드위치"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식을 (x−1) 로 나눌 때 x>1 과 x<1 에서 부등호 방향이 반대가 되므로 좌·우극한을 따로 조여 둘 다 −2 임을 보인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양 끝 모두 x=1 에서 0 이라 f(1)=0 이고, 각각 (x−1) 을 인수로 뽑으면 2x(x−2) 와 x³−x²−x−1 이 남는다.
    두 몫의 x→1 값이 모두 −2 지만, 나눌 때 부호가 바뀌므로 좌극한·우극한을 각각 조이는 서술이 필요하다(T-부호).
    부등식 변환 통찰 1개(d2) + M_total 8 → STEP 1 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "양 끝 다항식이 x=1 에서 0 → (x−1) 로 인수분해·나눗셈 → x>1·x<1 부호 구분 → 양쪽 몫의 극한이 모두 −2 → −2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/37-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 다항식의 계수 — 두 식이 모두 x=1 을 근으로 갖고 (x−1) 로 나눈 몫의 x=1 값이 서로 같아야 한다는 것이 유일한 제약이다. 접근점을 1 대신 다른 정수로 옮겨도 된다."
    creative: "(1) 분모를 (x−1)² 으로 올리면 양 끝이 이중근을 가져야 하고 부호 구분이 사라져 ★3 (2) 몫의 극한을 다르게 만들어 「극한이 존재하지 않음」을 판정하게 하면 ★4 · I-VF (3) 한쪽 부등식만 주고 나머지를 학생이 만들게 하면 ★4 (4) 좌극한만 묻기(★2)."
```

```yaml
- id: GN-CALC1-37-55
  page: 37
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\overline{AB}=\overline{AC}$, $\overline{BC}=a$ 인 이등변삼각형에서 꼭짓점 $\mathrm{A}$ 의 수선의 발 $\mathrm{H}$ 에 대해 $\overline{AH}=1$ 일 때, 내접원의 반지름 $r$ 에 대하여 $\lim_{a\to\infty}r$ 구하기.
  category: "이등변삼각형의 변 길이를 a 로 표현 → 넓이=r×(반둘레) → r(a) → a→∞ 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도형 조건(밑변 a·높이 1)을 넓이와 반둘레의 관계 S=rs 로 옮겨 r 를 a 의 식 a/(a+√(a²+4)) 로 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=AC=√(a²/4+1), 넓이는 a/2 이므로 r=넓이/반둘레=a/(a+√(a²+4)).
    a→∞ 에서 √(a²+4) ~ a 이므로 r → 1/2 (높이 1 의 절반에 수렴).
    도형→식 전환 1개(d1)이고 계산이 짧아 M_total 7 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=√(a²/4+1) → 넓이 a/2 = r·(반둘레) → r=a/(a+√(a²+4)) → a 로 나눠 극한 1/2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-37-55.png"
  latex: latex-bank/gn-calc1/items/37-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 AH=1 (답이 높이의 절반으로 따라 움직인다). 제약: 이등변 조건과 밑변이 a 로 발산한다는 설정은 유지해야 하고, 그림의 A·B·C·H 라벨은 고정. a→∞ 대신 a→0+ 로 바꾸면 r→0 이라 문제가 시시해진다."
    creative: "(1) 내접원 대신 외접원 반지름의 극한을 묻기(발산 판정형 ★3) (2) lim a(1/2−r) 처럼 수렴 속도를 묻기(★4 · 유리화 필요) (3) 이등변을 직각삼각형으로 바꾸면 변 길이 표현이 달라져 ★2 (4) 높이를 문자 h 로 두면 Mₐ 상승 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-38-56
  page: 38
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\lim_{x\to -\infty}(\sqrt{x^2+3ax+2}-\sqrt{ax^2+ax+1})=b$ 일 때 상수 $a$, $b$ 에 대하여 $a+b$ 구하기.
  category: "유한 수렴 조건으로 a 결정 → x→−∞ 에서 √(x²)=−x 처리 → 유리화 → b"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한한 값 b 로 존재하려면 두 근호의 최고차 거동이 같아야 한다는 역추적으로 a=1 을 먼저 확정해야 계산이 시작된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞−∞ 무리식 꼴의 미정계수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a 가 미정인 채로는 유리화해도 정리되지 않는다. 두 근호가 각각 |x|·√a|x| 로 커지므로 √a=1, 즉 a=1 이 수렴의 필요조건이다.
    a=1 을 넣어 유리화하면 (2x+1)/(√(x²+3x+2)+√(x²+x+1)) 이고, x→−∞ 이므로 분모를 −x 로 묶어야 한다(T-부호).
    역방향 조건 분석 통찰 1개(d2) + M_total 8 → 실력 UP ★4 유지(★5 는 통찰 3개 이상 + 저노출 유형 요건 미충족).
  tier: star_4
  mechanism_primary: "수렴 ⟹ 두 근호의 최고차 일치 ⟹ a=1 → 유리화 → 분모를 −x 로 묶어 극한 b=−1 → a+b=0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/38-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근호 안 일차항 계수(3a 와 a)와 상수항. 제약: 이차항 계수가 a 를 1 로 강제하는 구조를 유지해야 하고, x→−∞ 이므로 √(x²+…)=−x√(1+…) 처리가 반드시 필요하다. b 는 (일차항 계수 차)/(±2) 로 결정된다."
    creative: "(1) x→+∞ 로 바꾸면 부호 함정이 사라져 ★3 (2) 근호 하나를 일차식 (x+k) 로 바꾸면 유리화 상대가 달라져 ★3 (3) 수렴하도록 하는 a 가 두 개 나오게 설계하면 경우 분류가 얹혀 ★4 · I-MI (4) a 를 주고 b 만 묻기(★3)."
```

```yaml
- id: GN-CALC1-38-57
  page: 38
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\lim_{x\to 1}\frac{f(x)}{x-1}=-6$, $\lim_{x\to -1}\frac{f(x)}{x+1}=2$ 를 만족시키는 차수가 가장 낮은 다항함수 $f(x)$ 구하기.
  category: "두 조건 → (x−1)(x+1) 인수 → 이차 가정 모순 확인 → 삼차로 올려 나머지 인수 결정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 극한 조건이 각각 f(1)=0, f(−1)=0 을 주므로 f 가 (x−1)(x+1) 을 인수로 갖는다는 하나의 형태로 묶는다"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가장 낮은 차수 후보인 이차식 a(x−1)(x+1) 를 넣으면 a=−3 과 a=−1 로 모순이 생겨 기각되고, 그 기각이 있어야 삼차로 올릴 근거가 생긴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 극한 조건으로 다항함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 극한이 유한하므로 f(1)=f(−1)=0, 즉 f=(x−1)(x+1)Q(x).
    Q 를 상수로 두면 두 조건이 서로 다른 값을 요구해 기각되고, Q=ax+b 로 올려 2(a+b)=−6, −2(−a+b)=2 를 풀면 f=−(x−1)(x+1)(x+2).
    후보 기각이 골조의 핵심이라 VF 를 라벨했다. 통찰 2개 → 실력 UP ★4 유지.
    [분류 이슈] 절차 자체는 STEP 1 급 결정 문제라 ★3 후보이나, 「차수가 가장 낮은」 단서의 기각 단계를 인정해 벤더 신호 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "f(1)=f(−1)=0 → f=(x−1)(x+1)Q(x) → Q 상수 가정 모순 기각 → Q=ax+b 로 올려 두 조건 연립 → f=−(x−1)(x+1)(x+2)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$f(x)=-(x-1)(x+1)(x+2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/38-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값 −6 과 2, 두 접근점 1 과 −1. 제약: 두 극한값이 이차 가정에서 모순이 나도록(즉 두 값의 비가 접근점 차이로 설명되지 않도록) 골라야 삼차로 올라간다. 두 값을 맞추면 답이 이차식이 되어 난이도가 떨어진다."
    creative: "(1) 접근점을 세 개로 늘리면 사차까지 올라가 ★4 유지 (2) 「차수가 가장 낮은」을 빼고 f(2) 만 묻게 하면 기각 단계가 사라져 ★3 (3) 극한값 하나를 문자로 두고 차수가 2 가 될 조건을 묻는 역문제(★4 · I-BW) (4) 계수를 정수로 제한하면 37-53 형 경우 분류가 붙는다."
```

```yaml
- id: GN-CALC1-38-58
  page: 38
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $f$ 가 ㈎ 모든 실수에서 $ax^2-2\le f(x)\le ax^2+2$, ㈏ $\lim_{x\to\infty}\frac{(2x^2+1)f(x)}{x^4+2}=4$ 를 만족시킬 때 $\lim_{x\to\infty}\frac{f(x)}{x^2}$ 구하기.
  category: "㈎ 를 x² 로 나눠 샌드위치 → lim f/x²=a → ㈏ 를 같은 극한으로 분리해 2a=4"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈏ 를 {(2x²+1)x²/(x⁴+2)}·{f(x)/x²} 로 쪼개 앞부분이 2 로 가는 것을 분리하면 묻는 극한이 그대로 드러난다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 의 샌드위치 결과 lim f/x²=a 와 ㈏ 의 2a=4 를 한 미지수 a 에 대한 조건으로 통합해 a=2 를 얻는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "함수의 극한의 대소 관계(샌드위치 정리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 의 양변을 x² 로 나누면 a−2/x² ≤ f/x² ≤ a+2/x² 이라 묻는 극한이 a 임이 먼저 나온다.
    ㈏ 는 계수부 (2x²+1)x²/(x⁴+2) → 2 와 f/x² 의 곱이므로 2a=4, 즉 a=2.
    묻는 값이 곧 a 라 ㈎·㈏ 를 같은 극한으로 모으는 것이 골조다. 통찰 2개 → 실력 UP ★4 유지.
    [분류 이슈] 실제 계산은 두 줄이라 ★3 후보. 조건 두 개를 한 극한으로 모으는 설계를 인정해 벤더 신호 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "㈎ 를 x² 로 나눠 샌드위치 ⟹ lim f/x²=a → ㈏ 를 (계수부)·(f/x²) 로 분리 ⟹ 2a=4 → a=2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/38-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 폭 ±2(극한에 영향을 주지 않으므로 아무 상수나 가능), ㈏ 의 계수 2x²+1·x⁴+2 와 극한값 4. 제약: ㈏ 의 계수부 극한(여기서는 2)과 극한값의 비가 곧 답이므로 둘을 함께 움직여야 한다."
    creative: "(1) ㈎ 의 폭을 ±x 처럼 x 에 의존하게 만들면 샌드위치가 깨져 ★4 유지·판정형 (2) 묻는 극한을 lim f(x)/x 로 바꾸면 발산 판정이 필요해 ★4 (3) ㈏ 의 분모를 x³+2 로 낮추면 계수부가 발산해 a=0 이 강제되는 함정형 ★4 (4) a 를 직접 묻기(★3)."
```

```yaml
- id: GN-CALC1-38-59
  page: 38
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    곡선 $y=x^2-4$ 위의 점 $\mathrm{P}(t,\,t^2-4)\ (t>2)$ 에서 원 $x^2+y^2=4$ 에 그은 두 접선의 접점을 $\mathrm{A}$, $\mathrm{B}$ 라 할 때, $S=\triangle\mathrm{OAB}$, $T=\triangle\mathrm{PBA}$ 에 대하여 $\lim_{t\to 2+}\frac{T}{(t-2)S}+\lim_{t\to\infty}\frac{T}{(t^4-2)S}$. 5지선다.
  category: "공통 밑변 AB 로 넓이비를 거리비로 환원 → T/S 를 OP 거리 d 의 식으로 → 두 극한 계산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 밖의 점에서 그은 두 접선의 접점 현 AB 가 OP 와 수직이고 O 에서 AB 까지 거리가 4/d 임을 좌표·닮음 관계로 옮긴다"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A, B 의 좌표를 구해 두 넓이를 따로 계산하는 갈래 대신 공통 밑변 AB 를 소거해 T/S=(d²−4)/4 로 환원하는 갈래를 고른다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 삼각형은 밑변 AB 를 공유하므로 넓이비 = (O 에서 AB 까지 거리) : (P 에서 AB 까지 거리) = (4/d) : (d−4/d).
    따라서 T/S=(d²−4)/4 이고 d²=t²+(t²−4)² 이므로 두 극한 모두 유리식 정리로 끝난다.
    좌표를 직접 구하면 계산이 크게 불어나 갈래 선택이 실질적이다. 통찰 2개(RT·SC) → 실력 UP ★4 유지(★5 는 통찰 3개 이상 요건 미충족).
  tier: star_4
  mechanism_primary: "접점 현 AB ⊥ OP · O–AB 거리 4/d → T/S=(d²−4)/4, d²=t²+(t²−4)² → t→2+ 에서 (t−2) 약분해 1, t→∞ 에서 최고차 비 1/4 → 합 5/4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-38-59.png"
  latex: latex-bank/gn-calc1/items/38-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름 2(거리 공식이 r²/d 로 따라 움직인다), 곡선 y=x²−4 의 상수항(P 가 원 밖에 있도록), 두 번째 극한의 분모 t⁴−2 의 차수. 제약: t>2 여야 P 가 원 밖이고 첫 극한이 0/0 꼴이 되려면 곡선이 원과 만나는 t=2 를 접근점으로 써야 한다. 둘째 극한은 분모 차수가 4 여야 유한하다."
    creative: "(1) T/S 대신 T+S 나 T−S 의 극한을 묻기(★4 유지) (2) 곡선을 직선 y=kx 로 바꾸면 d 가 일차가 되어 ★3 (3) 접점 현의 길이 AB 자체의 극한을 묻기(★4) (4) 원을 타원으로 바꾸면 접점 현 공식이 무너져 과정 외 (5) 첫 극한의 분모를 (t−2)² 으로 올리면 발산 판정형 ★4 · I-VF."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 2 · ★2 15 · ★3 7 · ★4 4 · ★5 0
- 통찰형 14 · 절차형 14 · premium 0
- 통찰 라벨 18개: I-EQV 7 · I-RT 4 · I-CON 3 · I-BW 1 · I-MI 1 · I-SC 1 · I-VF 1 (depth 3 없음)
- type_hint 상위 5: 「두 극한 조건으로 다항함수 결정」 8 · 「함수의 극한의 대소 관계(샌드위치 정리)」 7 · 「미정계수의 결정(0/0 꼴에서 상수 구하기)」 6 · 「도형·좌표 설정 후 극한값 계산(함수의 극한의 활용)」 5 · 「주어진 극한을 이용한 다른 극한값 계산」 1 (그 밖에 「∞−∞ 무리식 꼴의 미정계수 결정」 1)
- 구역별: 필수·발전 예제 13(★1 1 · ★2 9 · ★3 3) · 연습문제 STEP 1 11(★1 1 · ★2 6 · ★3 4) · 연습문제 실력 UP 4(★4 4)
- 그림: 4문(`crop:fig-35-e16.png` · `crop:fig-35-44.png` · `crop:fig-37-55.png` · `crop:fig-38-59.png`)
- 선택형 2문(37-53 · 38-59), 나머지 26문은 단답·서술형. 소문항 ⑴⑵ 로 묶인 문항 4문(32-e13 · 32-36 · 32-37 · 34-e15).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-37-53 | 수능 기출 + 통찰 2개(CON·MI)라 ★4 후보지만, §2.13 저노출 유형(SC·VF·SYM·XU·RT·PD·BW)이 없어 ★3 으로 둠 | ★3 / ★4 |
| GN-CALC1-38-57 | 실력 UP(★4 출발)이나 골조는 인수 확정 + 차수 한 칸 올리기로 STEP 1 급. 「차수가 가장 낮은」 기각 단계를 인정해 ★4 유지 | ★3 / ★4 |
| GN-CALC1-38-58 | 실력 UP 이지만 실제 계산은 샌드위치 + 조건 결합 두 줄. 조건 통합 설계를 인정해 벤더 신호 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 덩어리다 — 「미정계수의 결정」 6, 「다항함수의 결정」 8, 「샌드위치 정리」 7, 「극한의 활용(도형)」 5. 28문 중 26문이 이 넷 안에 들어오므로 미적분Ⅰ 카탈로그의 04단원 base 유형은 이 넷으로 세우면 된다.
- **따로 세워야 할 유형**: ⑴ 「다항함수의 결정」 안에서도 *분모가 무리식·조건이 곱 fg 로 주어지는* 변형(37-52 · 37-53)은 차수 판정 자체가 한 단계 더 필요해 base ★ 를 1 높게 잡는 것이 맞다. ⑵ 「샌드위치 정리」에서 *부등식을 제곱·세제곱하거나 (x−1) 로 나누는* 변환형(34-e15⑵ · 34-42 · 37-54)은 순수 대입형(34-40 · 34-41 · 36-50)과 base ★ 가 한 단 차이라 분리해야 한다. ⑶ 「극한의 활용」도 좌표 설정만 하는 것(35-43 · 35-44 · 37-55)과 도형 관계를 거리비·닮음으로 환원해야 하는 것(35-e16 · 38-59)이 실제 체감 차이가 커서 두 유형으로 나누는 편이 낫다.
- **통합해도 될 유형**: 「미정계수의 결정」의 분자→0 방향과 분모→0 방향(32-36 · 32-37 · 36-46 · 37-51)은 같은 KEY 한 줄의 앞뒤라 한 유형으로 묶어도 무방하다. ∞−∞ 무리식형(38-56)은 03단원(함수의 극한)의 무리식 극한 유형과 겹치므로 그쪽 카탈로그에 붙이는 편이 낫다.
- **확인체크 계층 판정**: 이 단원의 확인체크 9문은 「개념원리 익히기」가 아니라 필수 예제 직후의 같은 유형 연습이라 ★1 이 아닌 ★2 출발로 보았다. 다른 단원 정독에서도 같은 기준을 쓰지 않으면 ★ 분포가 단원마다 어긋난다.
