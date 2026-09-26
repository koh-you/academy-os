---
name: mechanism-데이터-GN-M31-02
description: 개념원리 중학 3-1 02 제곱근의 성질(1/1 · 16~21쪽 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 02 제곱근의 성질
  unit_code: GN-M31-02
  part: "1/1"
  extract_range: "16~21쪽 · 16-01~21-06"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 중학 3-1 · 02 제곱근의 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 두 번째 소단원 「02 제곱근의 성질」 16~21쪽 26문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(16쪽) · 「핵심문제 익히기」 16문(17~20쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 6문(21쪽)이다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 도구는 네 가지뿐이다 — ⑴ $(\sqrt a)^2=a$ · $\sqrt{a^2}=|a|$ 의 근호 벗기기, ⑵ 문자의 부호 조건에 따른 $\sqrt{a^2}$ 간단히 하기, ⑶ 근호 안이 제곱수가 되도록 하는 자연수 조건, ⑷ 제곱근의 대소 관계와 부등식. 뒤로 갈수록 같은 도구에 부호·경계 함정이 하나씩 더 얹히는 구조라, 변형 설계 때 「도구는 고정하고 함정 수를 조절」하는 축이 가장 잘 먹힌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-16-01
  page: 16
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑹ $(\sqrt{3})^2$, $(-\sqrt{10})^2$, $-(-\sqrt{0.5})^2$, $\sqrt{8^2}$, $\sqrt{(-6)^2}$, $-\sqrt{(-2/7)^2}$ 를 근호를 사용하지 않고 나타내기.
  category: "제곱근의 성질 → 근호 벗기기(식 앞의 부호는 그대로 유지)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질 — (√a)²·√(a²) 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성질 두 줄((√a)²=a · √(a²)=|a|)을 여섯 번 반복 적용. 근호 앞의 −는 근호를 벗긴 뒤 붙는다는 표기 함정(T-표기·T-부호) 하나만 있고 분기는 없다.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지(이미 하한).
  tier: star_1
  mechanism_primary: "각 항의 근호 안 제곱 벗기기 → 절댓값 취함 → 식 앞 부호 결합 → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $10$ ⑶ $-0.5$ ⑷ $8$ ⑸ $6$ ⑹ $-\dfrac{2}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/16-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 수(자연수·소수·분수)와 안쪽·바깥쪽 부호 조합을 자유롭게 교체. 제약: √(a²) 꼴은 안쪽이 음수여도 결과가 양수이고 식 앞의 −만 남는다는 구조를 유지해야 하므로, 소문항마다 (안쪽 부호, 바깥 부호)의 네 조합이 고르게 들어가도록 배치."
    creative: "(1) 값을 주고 근호 안 수를 되묻는 역방향(★2 · I-BW d1) (2) 여섯 식 중 값이 다른 하나 고르기로 바꾸면 ★2 (3) 수 대신 문자 a 와 부호 조건을 주면 √(a²)=|a| 판정이 들어가 ★2(16-03 골조)."
```

```yaml
- id: GN-M31-16-02
  page: 16
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $(\sqrt{7})^2+(-\sqrt{5})^2$, $\sqrt{169}-\sqrt{(-8)^2}$, $(-\sqrt{4/5})^2\times\sqrt{20^2}$, $\sqrt{(-3)^2}\div(\sqrt{0.6})^2$ 를 계산.
  category: "제곱근의 성질로 각 항을 유리수화 → 사칙계산"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질을 이용한 식의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    16-01 의 근호 벗기기에 사칙연산 한 단계를 덧붙인 문항. 각 항을 먼저 유리수로 바꾸면 남는 것은 중1 수준 계산이다.
    분수·소수가 섞여 Mₖ 만 2. 통찰 0 · 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "각 항 근호 벗겨 유리수화 → 곱셈·나눗셈 먼저 → 덧셈·뺄셈"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $12$ ⑵ $5$ ⑶ $16$ ⑷ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/16-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 다른 제곱수(121·196·324)나 유리수로 바꾸면 된다. 제약: 나눗셈 소문항은 나누는 수가 결과를 정수·간단한 분수로 만들도록 고르고(예: 0.6 → 3/5), 답이 무리수로 남지 않게 근호 안은 모두 제곱수 또는 (√a)² 꼴로 유지."
    creative: "(1) 사칙 항을 3개 이상으로 늘려 연산 순서 함정을 추가(★2) (2) 계산 결과만 주고 빈칸 한 항을 되묻기(★2 · I-BW d1) (3) 선택지 5개의 계산 결과 중 옳은 것 고르기로 바꾸면 21-01 골조(★2)."
```

```yaml
- id: GN-M31-16-03
  page: 16
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $a>0$ 또는 $a<0$ 조건에서 $\sqrt{(2a)^2}$, $\sqrt{(-6a)^2}$, $\sqrt{(7a)^2}$, $\sqrt{(-3a)^2}$ 를 간단히 하기.
  category: "√(a²)=|a| → 문자의 부호 판정 → 부호 붙여 간단히"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√(a²) 의 성질 — 문자의 부호에 따라 간단히 하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호 안의 −부호는 제곱에서 사라지고, 결과의 부호는 오직 문자 a 의 부호로 정해진다는 것을 네 번 확인하는 구조. 함정이 두 겹(T-부호·T-범위)이라 M_total 6.
    문자를 쓰므로 Mₐ=2 지만 분기·착안은 없는 표준 절차 → 확인하기 구역 ★1 유지. (같은 골조가 핵심문제 구역에서는 18-h3·18-h4 로 ★2 가 된다.)
  tier: star_1
  mechanism_primary: "근호 안을 (계수·a)² 로 보기 → √(a²)=|a| → a 의 부호로 절댓값 벗기기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2a$ ⑵ $6a$ ⑶ $-7a$ ⑷ $-3a$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/16-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2·6·7·3)는 아무 자연수로 교체 가능하고 근호 안 계수의 부호도 무관하다. 제약: 결과 부호를 결정하는 것은 a 의 조건뿐이므로, 소문항마다 (a 의 부호, 근호 안 계수의 부호) 네 조합이 모두 나오도록 유지해야 학습 효과가 남는다."
    creative: "(1) √(4a²)·√(a²/9) 처럼 계수를 근호 안에 녹여 제곱수 인식을 한 단계 더 요구(★2) (2) 조건을 a≠0 으로만 주고 경우를 나눠 답하게 하면 I-MI d1 · ★2 (3) 두 항의 합·차로 묶으면 18-h4 골조(★2)."
```

```yaml
- id: GN-M31-16-04
  page: 16
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑹ $\sqrt{10}$ 과 $\sqrt{13}$, $\sqrt{2/3}$ 와 $\sqrt{3/2}$, $-\sqrt{5}$ 와 $-\sqrt{7}$, $\sqrt{40}$ 과 $6$, $\dfrac{1}{8}$ 과 $\sqrt{1/8}$, $-2$ 와 $-\sqrt{6}$ 사이에 알맞은 부등호 써넣기.
  category: "근호 없는 수를 근호 꼴로 통일 → 근호 안 비교 → 음수면 부등호 반전"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 대소 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 근호 안 비교 한 줄, ⑷⑸ 는 6=√36 · 1/8=√(1/64) 로 꼴을 맞추는 한 단계, ⑶⑹ 은 음수라 부등호가 뒤집힌다.
    함정 두 겹(T-부호 · 0<a<1 에서 a<√a 라는 T-범위)이 있으나 모두 교과 표준 절차 → 통찰 0. 확인하기 구역 ★1.
  tier: star_1
  mechanism_primary: "양수를 근호 꼴로 통일 → 근호 안 수 비교 → 음수 쌍이면 부등호 반전"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $<$ ⑵ $<$ ⑶ $>$ ⑷ $>$ ⑸ $<$ ⑹ $>$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/16-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 비교 대상 정수는 자유롭게 교체 가능. 제약: ⑷처럼 정수를 근호 꼴로 바꾸는 소문항은 그 정수의 제곱이 근호 안 수와 가깝게(√40 vs 36) 두어야 감각이 아니라 계산으로 풀리고, ⑸는 0과 1 사이 수여야 a<√a 가 성립한다."
    creative: "(1) 부등호 대신 가장 큰 수·작은 수 고르기(★2) (2) 여섯 수를 한 줄로 나열하게 하면 21-05 골조(★2) (3) 두 수 사이의 자연수 개수를 묻는 부등식형으로 바꾸면 ★2(20-h8 골조)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-17-h1
  page: 17
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $(\sqrt{0.5})^2=0.5$, $(-\sqrt{19})^2=19$, $-(-\sqrt{1/2})^2=-1/2$, $-\sqrt{(3/4)^2}=-3/4$, $-\sqrt{(-13)^2}=13$ 중 옳지 않은 것 고르기. 5지선다.
  category: "선택지별 근호 벗기기 → 부호 대조 → 틀린 것 판정"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질(옳은 것·옳지 않은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 「제곱근의 성질」 그대로. 선택지 다섯 개를 모두 계산해야 하고, 오답 ⑤는 근호 밖의 −를 근호 안 (−13)² 과 상쇄시키는 표기 함정이다.
    통찰 0 · M_total 5 라 −1 후보이지만, 부호 함정 전수 판정이 실제 변별을 만들므로 핵심문제 구역 출발점 ★2 를 유지.
  tier: star_2
  mechanism_primary: "선택지마다 근호 벗기기 → 근호 밖 부호 결합 → 제시값과 대조 → 불일치 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/17-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 부호 배치를 바꾸면 그대로 다른 문항이 된다. 제약: 오답 선택지는 반드시 하나만 두고, 그 오답은 계산 실수가 아니라 −√((−k)²)=−k 같은 부호 규칙 오해에서 나오도록 설계."
    creative: "(1) 옳은 것 고르기로 뒤집기(같은 ★2) (2) 오답 두 개짜리 복수정답형(★2) (3) 선택지를 문자식 √((ka)²) 로 바꾸면 18-h3 골조(★2) (4) 틀린 이유를 서술하게 하면 ★3."
```

```yaml
- id: GN-M31-17-c1
  page: 17
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $-\sqrt{64}$, $\sqrt{(-8)^2}$, $-(\sqrt{8})^2$, $-(-\sqrt{8})^2$, $-\sqrt{8^2}$ 중 값이 나머지 넷과 다른 하나 고르기.
  category: "다섯 식을 모두 값으로 환원 → 다수값과 다른 하나 선택"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질 — 값이 다른 하나 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    64 와 8 이 섞여 있어 √64 와 (√8)² 가 같은 8 로 모인다는 점을 놓치면 엉뚱한 답이 나온다. 나머지 넷은 모두 −8 이고 √((−8)²)=8 만 부호가 다르다.
    17-h1 과 같은 도구·같은 함정을 배치만 바꾼 짝 확인문제 → ★2.
  tier: star_2
  mechanism_primary: "다섯 식 각각 근호 벗겨 값 계산 → 공통값(−8) 확인 → 벗어난 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/17-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 8 을 다른 자연수 k 로 바꾸고 k² 과 k 를 같은 방식으로 섞으면 된다. 제약: 네 식이 같은 값으로 모이고 정확히 한 식만 부호가 달라야 하며, √(k²) 와 (√k)² 의 표기 차이가 문항의 핵심이므로 둘 다 포함시킬 것."
    creative: "(1) 값이 같은 것끼리 짝짓기로 바꾸면 ★2 (2) 다른 하나의 값까지 함께 쓰게 하면 ★2 (3) 문자와 부호 조건을 넣어 보기 ㄱㄴㄷㄹ 형으로 바꾸면 18-c3 골조(★2)."
```

```yaml
- id: GN-M31-17-h2
  page: 17
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $(-\sqrt{0.3})^2+(\sqrt{1.7})^2$, $\sqrt{(-12)^2}-(-\sqrt{8})^2$, $(-\sqrt{2})^2-\sqrt{6^2}\times(\sqrt{5/3})^2$, $\sqrt{196}\div\sqrt{49}+\sqrt{(-5)^2}$ 를 계산.
  category: "각 항 근호 벗기기 → 연산 순서(곱·나눗셈 우선) → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질을 이용한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 그대로. 16-02 보다 항이 하나씩 많고 ⑶⑷ 는 곱셈·나눗셈을 먼저 처리해야 하는 순서 함정이 들어간다.
    통찰은 없고 단계만 늘어난 전형적 노동량 상승형 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "항마다 근호 벗겨 유리수화 → 곱셈·나눗셈 먼저 → 덧셈·뺄셈 → 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2$ ⑵ $4$ ⑶ $-8$ ⑷ $7$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/17-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 다른 제곱수·소수·분수로 교체. 제약: 나눗셈 소문항은 √196÷√49 처럼 몫이 정수가 되게 두고, 곱셈 소문항은 분모가 약분되도록(√(6²)×(√(5/3))²) 짝을 맞춰야 답이 정수로 떨어진다."
    creative: "(1) 항을 4개로 늘리고 괄호를 넣어 순서 함정을 강화(★2) (2) 결과를 주고 빈칸 한 항을 되묻기(★3 · I-BW d1) (3) 문자식 계산으로 바꾸면 18-h4 골조(★2)."
```

```yaml
- id: GN-M31-17-c2
  page: 17
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑷ $(\sqrt{17})^2-\sqrt{(-8)^2}+(-\sqrt{6})^2$, $\sqrt{(-3)^2}\times\sqrt{4}-(\sqrt{7})^2$, $\sqrt{9^2}+\sqrt{(-5)^2}\div\sqrt{25/16}-(-\sqrt{10})^2$, $\sqrt{225}\div(-\sqrt{3})^2-\sqrt{(-11)^2}\times(\sqrt{2})^2$ 를 계산.
  category: "각 항 근호 벗기기 → 연산 순서 → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질을 이용한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17-h2 의 짝 확인문제. 항이 3개로 늘고 ⑶은 분수 나눗셈(÷√(25/16) = ÷(5/4))이 섞여 Mₖ 가 가장 무겁다.
    도구는 여전히 근호 벗기기 한 가지 → 통찰 0 · ★2.
  tier: star_2
  mechanism_primary: "세 항 각각 근호 벗기기 → 곱셈·나눗셈 먼저 → 덧셈·뺄셈 → 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $15$ ⑵ $-1$ ⑶ $3$ ⑷ $-17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/17-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수 전부 교체 가능. 제약: 분수 나눗셈 항은 분자·분모가 모두 제곱수(25/16·49/9)여야 하고, 항이 셋이므로 최종값이 한 자리~두 자리 정수로 떨어지게 조합할 것."
    creative: "(1) 결과의 부호만 묻기로 축소(★1) (2) 네 계산 결과의 대소를 비교하게 하면 대소 유형과 결합(★3 · I-XU 성격) (3) 옳은 것 고르기 5지선다로 바꾸면 21-01 골조(★2)."
```

```yaml
- id: GN-M31-18-h3
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $a>0$ 일 때 $\sqrt{(5a)^2}=5a$, $\sqrt{(-a)^2}=a$, $-\sqrt{(7a)^2}=-7a$, $\sqrt{4a^2}=-2a$, $-\sqrt{(-3a)^2}=-3a$ 중 옳지 않은 것 고르기.
  category: "a>0 조건 → 각 선택지의 √(a²)=|a| 판정 → 부호 대조"
  M: {s: 1, k: 2, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√(a²) 의 성질(옳지 않은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 「√(a²)의 성질」. 16-03 과 같은 도구지만 문자·부호가 선택지 다섯 개에 흩어져 전수 판정이 필요하고, ④는 계수를 근호 안에 녹인 √(4a²) 꼴이라 제곱수 인식이 한 단계 더 든다.
    함정 두 겹(T-부호·T-범위) · Mₐ=2 로 M_total 7 이지만 분기·착안은 없어 절차형 → ★2.
  tier: star_2
  mechanism_primary: "선택지마다 근호 안을 (계수·a)² 로 정리 → √(a²)=|a| → a>0 으로 절댓값 벗기고 제시값과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/18-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(5·7·3·4)는 임의 자연수로 교체 가능하고 √(4a²) 자리의 계수는 제곱수여야 한다. 제약: 조건을 a>0 으로 둔 채 근호 안 부호와 근호 밖 부호를 골고루 섞고, 오답은 정확히 하나만."
    creative: "(1) 조건을 a<0 으로 뒤집으면 모든 선택지의 정오가 바뀌어 난도 +0(★2, 18-c3 골조) (2) 조건 없이 「항상 옳은 것」을 묻기(I-MI d1 · ★3) (3) 두 문자 a, b 의 부호를 따로 주면 21-02 골조(★3)."
```

```yaml
- id: GN-M31-18-c3
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $a<0$ 일 때 보기 ㄱ $-\sqrt{a^2}=-a$, ㄴ $\sqrt{(3a)^2}=-3a$, ㄷ $\sqrt{(-2a)^2}=2a$, ㄹ $-\sqrt{16a^2}=4a$ 중 옳은 것 모두 고르기.
  category: "a<0 조건 → 보기별 √(a²)=|a| 판정 → 옳은 것 모두 선택"
  M: {s: 1, k: 2, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√(a²) 의 성질(보기 ㄱㄴㄷㄹ 복수 선택)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    18-h3 의 짝 확인문제인데 조건이 a<0 이라 절댓값을 벗길 때 −a 가 양수라는 점이 매번 걸린다. ㄱ·ㄷ 처럼 근호 안 −부호와 a 의 음부호가 겹치는 보기가 오답 유도 지점.
    복수 선택이라 네 보기를 모두 판정해야 하지만 도구는 하나 → 절차형 ★2.
  tier: star_2
  mechanism_primary: "보기마다 근호 안을 제곱꼴로 정리 → √(a²)=|a| → a<0 이므로 |a|=−a 로 바꿔 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/18-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·2·16 교체 가능(16 자리는 제곱수 유지). 제약: 정답 보기가 2개가 되도록 옳은 것과 그른 것을 반반 배치하고, 조건 a<0 과 근호 안 −부호가 겹치는 보기를 최소 하나 넣을 것."
    creative: "(1) 옳지 않은 것 모두 고르기로 뒤집기(★2) (2) 보기 수를 6개로 늘려 ㅁㅂ 에 √((a−1)²) 꼴을 넣으면 범위 판정이 추가되어 ★3 (3) 각 보기를 참이 되게 하는 a 의 조건을 쓰게 하면 I-BW d2 · ★3."
```

```yaml
- id: GN-M31-18-h4
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $a<0$ 일 때 $\sqrt{(3a)^2}-\sqrt{(-8a)^2}$ ⑵ $-2<a<2$ 일 때 $\sqrt{(a-2)^2}+\sqrt{(a+2)^2}$ 를 간단히 하기.
  category: "범위 조건 → 각 괄호식의 부호 결정 → 절댓값 벗기고 동류항 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "−2<a<2 라는 a 의 범위를 a−2<0 · a+2>0 이라는 각 괄호식의 부호 조건으로 옮겨야 절댓값을 벗길 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(a²) 꼴을 포함한 식 간단히 하기(범위 조건에서 부호 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 16-03 의 두 항 버전이지만, ⑵는 조건이 a 하나가 아니라 a−2 와 a+2 두 식의 부호로 번역되어야 풀린다. 이 번역이 이 소단원에서 처음 나오는 착안점(I-EQV d1)이고, 그 결과 a 가 상쇄되어 상수만 남는 것이 문항의 포인트.
    통찰 1개 · M_total 7 → 핵심문제 구역 ★2 유지(+1은 통찰 2개 이상 또는 depth 3 부터).
  tier: star_2
  mechanism_primary: "a 의 범위 → 각 괄호식의 부호 판정 → √(식²)=|식| 벗기기 → 동류항 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $5a$ ⑵ $4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/18-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 계수 3·8 과 ⑵의 경계 ±2 는 교체 가능. 제약: ⑵는 범위의 두 끝이 두 괄호식의 영점과 정확히 일치해야(−2<a<2 ↔ a+2, a−2) a 가 상쇄되어 상수가 남는다. 경계를 비대칭(−1<a<3)으로 두면 답에 a 가 남으므로 의도한 변형인지 확인할 것."
    creative: "(1) 범위를 a>2 나 a<−2 로 바꾸면 부호 조합이 달라져 답이 ±2a 로 변함(★2) (2) 범위를 주지 않고 경우를 모두 나누게 하면 I-MI d2 · ★3 (3) 결과가 4 가 되도록 하는 a 의 범위를 되묻기(I-BW d2 · ★3) (4) 문자를 둘로 늘리면 21-02 골조(★3)."
```

```yaml
- id: GN-M31-18-c4
  page: 18
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ $a>0$ 일 때 $\sqrt{(-4a)^2}+\sqrt{25a^2}$ ⑵ $-1<a<1$ 일 때 $\sqrt{(a-1)^2}-\sqrt{(a+1)^2}$ 를 간단히 하기.
  category: "범위 조건 → 각 괄호식의 부호 결정 → 절댓값 벗기고 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "−1<a<1 을 a−1<0 · a+1>0 으로 옮겨야 절댓값이 벗겨짐. 부호가 뺄셈과 겹쳐 상수가 아니라 −2a 가 남는 점이 18-h4 와 다름"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(a²) 꼴을 포함한 식 간단히 하기(범위 조건에서 부호 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    18-h4 의 짝 확인문제. ⑵는 두 절댓값 사이가 뺄셈이라 상수가 아니라 −2a 가 남는다. 부호 번역(I-EQV d1)을 마친 뒤에도 괄호 앞 −를 분배하는 자리에서 한 번 더 틀린다.
    통찰 1개 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "a 의 범위 → a−1, a+1 의 부호 판정 → 절댓값 벗기기 → 괄호 앞 부호 분배 후 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $9a$ ⑵ $-2a$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/18-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 계수 4·25(근호 안 계수는 제곱수) 와 ⑵의 경계 ±1 교체 가능. 제약: ⑵는 대칭 범위여야 두 괄호식의 부호가 반대로 갈리고, 연산 기호(+/−)에 따라 답이 상수인지 −2a 인지 바뀌므로 기호와 답을 함께 설계할 것."
    creative: "(1) ⑴⑵ 를 한 식으로 합쳐 세 항짜리로 만들기(★3) (2) 답이 −2a 임을 이용해 a 값을 되묻기(I-BW d1 · ★2) (3) 범위를 문자 k 로 일반화하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-M31-19-h5
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $\sqrt{45x}$ ⑵ $\sqrt{\dfrac{216}{x}}$ 가 자연수가 되도록 하는 가장 작은 자연수 $x$ 구하기.
  category: "근호 안 소인수분해 → 지수가 모두 짝수가 되는 조건 → 최소 x"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√(안)이 자연수」를 「소인수분해했을 때 모든 지수가 짝수」로 옮기는 동치 변환. 나눗셈 꼴 ⑵는 x 가 216 의 약수여야 한다는 제약이 추가로 따라붙음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(Ax), √(A/x) 가 자연수가 되도록 하는 자연수 x 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 그대로. 45=3²·5, 216=2³·3³ 로 분해한 뒤 홀수 지수인 소인수만 남기면 된다는 구조.
    조건 번역(I-EQV d1)이 핵심이고 그 뒤는 기계적이다. ⑵는 「약수여야 한다」를 빠뜨리면 틀리는 자리. 통찰 1 · M_total 7 → 핵심문제 구역 ★2.
  mechanism_primary: "근호 안 소인수분해 → 지수가 홀수인 소인수 추출 → 곱(또는 약수 조건 결합) → 최소 자연수 x"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $5$ ⑵ $6$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/19-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 를 다른 합성수로 교체 가능(곱셈형 12·18·75·108, 나눗셈형 96·180·240). 제약: 곱셈형은 A 에 홀수 지수 소인수가 1~2개만 남게 하고, 나눗셈형은 A 를 세제곱 이상 지수가 섞인 수로 두어 x 가 약수이면서 몫이 제곱수가 되도록 설계해야 답이 유일한 최소값을 갖는다."
    creative: "(1) 가장 작은 x 대신 100 이하의 x 를 모두 구하기(I-MI d1 · ★3) (2) √(Ax) 가 자연수가 되는 x 의 개수를 묻기(★3) (3) A 를 2³×3²×x 처럼 지수 표기로 주면 21-03 골조(★2) (4) 곱셈형과 나눗셈형을 동시에 만족하는 x 를 묻기(I-CON d2 · ★4)."
```

```yaml
- id: GN-M31-19-c5
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ $\sqrt{60x}$ ⑵ $\sqrt{\dfrac{112}{x}}$ 가 자연수가 되도록 하는 가장 작은 자연수 $x$ 구하기.
  category: "근호 안 소인수분해 → 지수가 모두 짝수가 되는 조건 → 최소 x"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「자연수가 된다」를 「소인수 지수가 모두 짝수」로 번역. ⑴은 홀수 지수 소인수가 3·5 둘이라 곱해야 하고, ⑵는 x 가 112 의 약수라는 제약이 붙음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(Ax), √(A/x) 가 자연수가 되도록 하는 자연수 x 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-h5 의 짝 확인문제. 60=2²·3·5 라 홀수 지수 소인수가 둘이어서 곱해야 한다는 점(하나만 고르면 오답)이 19-h5 ⑴보다 한 걸음 더 간다.
    ⑵의 112=2⁴·7 은 7 하나만 남기면 되는 단순형. 통찰 1 · ★2.
  mechanism_primary: "소인수분해 → 홀수 지수 소인수 모두 곱하기 → (나눗셈형은 약수 조건 확인) → 최소 x"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $15$ ⑵ $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/19-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "60·112 를 다른 합성수로 교체. 제약: 곱셈형은 홀수 지수 소인수를 2개 이상 두어야 「모두 곱한다」가 학습되고, 나눗셈형은 약수 조건이 실제로 걸리는 수(2ⁿ·p 꼴)가 좋다."
    creative: "(1) 두 소문항의 답의 합·곱을 묻기(★2) (2) x 가 두 자리 자연수인 경우를 모두 구하기(I-MI d1 · ★3) (3) √(Ax) 의 값까지 함께 구하게 하면 ★2."
```

```yaml
- id: GN-M31-19-h6
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $\sqrt{26+x}$ 가 자연수가 되도록 하는 가장 작은 자연수 $x$ 구하기.
  category: "26+x 가 26 보다 큰 제곱수 → 가장 작은 제곱수 선택 → x"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√(26+x)가 자연수」를 「26+x 가 제곱수」로 옮기고, x 가 자연수라는 조건에서 26 보다 큰 제곱수만 후보가 됨을 읽어내는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(A+x), √(A−x) 가 자연수가 되도록 하는 자연수 x 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 그대로. 소인수분해형(19-h5)과 달리 제곱수를 1²,2²,… 나열해 26 을 넘는 첫 값을 잡는 나열형이다.
    x 가 자연수(0 제외)라는 제약 때문에 25 가 아니라 36 을 택해야 하는 것이 유일한 함정. 통찰 1 · M_total 6 → ★2.
  mechanism_primary: "26+x 가 제곱수 → x 자연수이므로 26 초과 제곱수 나열 → 가장 작은 36 → x=10"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/19-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "26 을 다른 자연수로 교체 가능. 제약: A 가 제곱수 바로 아래(24·26·35·48)여야 「A 를 넘는 첫 제곱수」를 찾는 계산이 짧게 끝나고, A 자체가 제곱수이면 x 의 최소가 달라지므로(0 제외 규칙) 피한다."
    creative: "(1) √(A−x) 형으로 바꾸면 후보가 유한해져 개수 문제로 확장(★3 · 21-04 골조) (2) 가장 큰 두 자리 x 를 묻기(★2) (3) 자연수가 되는 x 를 모두 구하기(I-MI d1 · ★3) (4) 「자연수」를 「정수」로 바꾸면 0 포함 여부가 함정이 되어 ★3."
```

```yaml
- id: GN-M31-19-c6
  page: 19
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $\sqrt{30-x}$ 가 자연수가 되도록 하는 자연수 $x$ 의 값이 될 수 없는 것 고르기(선택지 $5$, $14$, $21$, $25$, $29$).
  category: "30−x 가 제곱수인지 선택지별 판정 → 아닌 하나 선택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√(30−x)가 자연수」를 「30−x 가 1 이상의 제곱수」로 옮겨 선택지마다 대입 판정. 뺄셈형이라 30−x>0 범위 제약이 함께 붙음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(A−x) 가 자연수가 되도록 하는 자연수 x 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-h6 의 뺄셈형 짝 문항이며 선택지 대입으로 풀린다. 각 x 에 대해 30−x 가 제곱수 목록(1,4,9,16,25)에 들어가는지 보면 되고, 하나만 어긋난다.
    조건 번역(I-EQV d1) 뒤는 단순 대조 → ★2.
  mechanism_primary: "제곱수 목록(1,4,9,16,25) 확보 → 선택지마다 30−x 계산 → 목록에 없는 하나 선택"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/19-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "30 을 다른 자연수로 바꾸고 선택지를 그에 맞게 다시 만든다. 제약: 정답(제곱수가 아닌 값) 은 정확히 하나여야 하고, 나머지 네 선택지는 서로 다른 제곱수에 대응시켜 소거법으로 찍히지 않게 배치."
    creative: "(1) 될 수 있는 x 를 모두 구하게 하면 개수·합 문제로 확장(★3) (2) 「자연수」를 「정수」로 바꾸면 30−x=0 이 추가되어 21-04 골조(★3) (3) √(30−x) 의 값까지 함께 묻기(★2)."
```

```yaml
- id: GN-M31-20-h7
  page: 20
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $-\sqrt{3}>-\sqrt{5}$, $3<\sqrt{6}$, $-\sqrt{15}<-4$, $0.2>\sqrt{0.2}$, $-\sqrt{1/3}<-1/2$ 중 대소 관계가 옳은 것 모두 고르기(정답 2개).
  category: "근호 꼴로 통일 → 근호 안 비교 → 음수면 반전 → 선택지 전수 판정"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 대소 관계(옳은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 「제곱근의 대소 관계」. 16-04 와 도구는 같지만 다섯 선택지 중 음수 쌍이 셋이라 부등호 반전 판정을 반복해야 하고, ④는 0과 1 사이 수에서 a<√a 라는 범위 함정이다.
    복수정답(2개)이라 전수 판정이 강제되지만 착안은 없음 → 절차형 ★2.
  mechanism_primary: "각 선택지의 두 수를 근호 꼴로 통일 → 근호 안 비교 → 음수 쌍이면 부등호 반전 → 옳은 둘 선택"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①, ⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/20-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 비교 정수를 교체. 제약: 정수를 근호 꼴로 바꿔야 하는 선택지(3 vs √6, −4 vs −√15)에서 두 수가 가깝게 붙어야 어림으로 찍히지 않고, 0과 1 사이 수 선택지는 반드시 하나 넣어 a<√a 를 점검할 것. 정답 개수는 발문과 일치시킬 것."
    creative: "(1) 옳지 않은 것 하나 고르기로 바꾸면 20-c7 (★2) (2) 다섯 수를 크기순 나열로 바꾸면 21-05 골조(★2) (3) 두 수 사이의 정수를 묻기(★3) (4) 문자 a 의 범위에 따라 a 와 √a 의 대소를 묻기(I-MI d2 · ★3)."
```

```yaml
- id: GN-M31-20-c7
  page: 20
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $4<\sqrt{20}$, $\sqrt{8}<3$, $-\sqrt{27}<-5$, $0.5>\sqrt{0.2}$, $-\sqrt{1/6}>-1/3$ 중 대소 관계가 옳지 않은 것 고르기.
  category: "근호 꼴로 통일 → 근호 안 비교 → 음수면 반전 → 틀린 하나 선택"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 대소 관계(옳지 않은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    20-h7 의 짝 확인문제. ⑤는 분수의 제곱(1/9 vs 1/6)을 비교해야 해서 분수 대소에서 한 번 더 미끄러지고, 음수라 반전까지 겹친다.
    ④의 0.5 vs √0.2 도 0.25 vs 0.2 로 제곱 비교가 필요. 도구는 하나 → 절차형 ★2.
  mechanism_primary: "두 수를 모두 제곱(또는 근호 꼴)으로 통일 → 크기 비교 → 음수 쌍 반전 → 어긋난 하나 선택"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/20-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수·비교 정수·분수를 교체. 제약: 오답은 하나만 두고, 분수 선택지는 분모가 서로 다른 단위분수로 두어 1/9 vs 1/6 처럼 제곱 비교가 실제로 필요하게 만든다."
    creative: "(1) 옳은 것 모두 고르기로 뒤집기(★2) (2) 틀린 선택지를 옳게 고쳐 쓰게 하면 서술형 ★3 (3) 소수·분수·근호가 섞인 여섯 수 나열로 확장(★2 · 21-05 골조)."
```

```yaml
- id: GN-M31-20-h8
  page: 20
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $3<\sqrt{x}<4$ ⑵ $1<\sqrt{2x}<3$ 을 만족시키는 자연수 $x$ 를 모두 구하기.
  category: "각 변 제곱 → x 의 범위 → 경계 제외한 자연수 열거"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 포함한 부등식(자연수 해 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    본문 예제 제목 「제곱근을 포함한 부등식」. 각 변이 모두 양수라 그대로 제곱해 범위를 얻는 교과 표준 절차이며, 착안 분기는 없다.
    실제 실점은 경계(9·16 을 포함하지 않음)와 ⑵의 2x 를 x 로 되돌리는 나눗셈에서 나오므로 함정 두 겹(T-경계·T-범위) → M_total 7 · 절차형 ★2.
  mechanism_primary: "각 변 제곱 → x(또는 2x)의 범위 확정 → 경계 제외 → 자연수 열거"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10$, $11$, $12$, $13$, $14$, $15$ ⑵ $1$, $2$, $3$, $4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/20-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 정수(3·4, 1·3)와 근호 안 계수(2x)를 교체. 제약: 양 끝을 제곱한 값의 간격이 너무 넓으면 열거가 노동이 되므로 해가 4~8개가 되게 잡고, 계수를 쓸 때는 나눗셈 결과가 정수 경계로 떨어지도록(2x<9 → x<4.5) 설계해 경계 판정이 살아 있게 할 것."
    creative: "(1) 자연수 해의 개수·합만 묻기(★2) (2) 한쪽 부등호를 ≤ 로 바꿔 경계 포함 여부를 대비시키기(★2) (3) 근호 안을 x+1 꼴로 바꾸면 20-c8 ⑵ (★2) (4) 부등식 전체에 −를 붙이면 반전이 추가되어 21-06 골조(★3)."
```

```yaml
- id: GN-M31-20-c8
  page: 20
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ $\sqrt{5}<x<\sqrt{20}$ ⑵ $2<\sqrt{x+1}<3$ 을 만족시키는 자연수 $x$ 를 모두 구하기.
  category: "각 변 제곱 → x 또는 x² 의 범위 → 자연수 열거"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 포함한 부등식(자연수 해 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 근호가 양 끝에 있고 미지수가 가운데라 제곱하면 5<x²<20 이 되어 x 자체가 아니라 x² 의 범위가 나온다 — 20-h8 과 미지수의 자리가 뒤바뀐 배치.
    ⑵는 x+1 을 한 덩어리로 보고 제곱한 뒤 1 을 빼는 되돌리기가 추가된다. 도구는 동일 → 절차형 ★2.
  mechanism_primary: "각 변 제곱 → x² 또는 x+1 의 범위 → 미지수로 되돌리기 → 경계 제외 자연수 열거"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$, $4$ ⑵ $4$, $5$, $6$, $7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/20-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 근호 안 두 수, ⑵의 양 끝 정수와 x+1 의 상수항을 교체. 제약: ⑴은 두 근호 값 사이에 자연수가 2~3개만 들어가도록 간격을 좁게 잡고, ⑵는 양 끝을 제곱한 값이 정수가 되게 두어 경계 제외 판정이 명확하게 할 것."
    creative: "(1) 해의 개수만 묻기(★2) (2) ⑴을 정수 해(음수 포함)로 바꾸면 부호 케이스가 생겨 I-MI d1 · ★3 (3) x+1 을 3x−2 처럼 일차식으로 바꾸면 21-06 골조(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-21-01
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $(-\sqrt{5})^2+\sqrt{19^2}=14$, $2\times\sqrt{(-4)^2}-\sqrt{225}=-8$, $\sqrt{(-3)^2}+\sqrt{9}-(-\sqrt{3})^2=9$, $(-\sqrt{3/2})^2\times\sqrt{64}\div(\sqrt{6})^2=-2$, $\sqrt{(-7)^2}-\sqrt{81}+\sqrt{144}\div(-\sqrt{4^2})=-5$ 중 옳은 것 고르기.
  category: "선택지별 근호 벗기기 + 사칙계산 → 제시값과 대조"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 성질을 이용한 식의 계산(옳은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17-h2·17-c2 의 계산을 5지선다로 옮긴 형태. 선택지마다 3항 계산을 끝까지 해야 해서 노동량은 이 구역에서 가장 크지만 도구는 근호 벗기기 하나뿐이다.
    ④·⑤에 나눗셈과 음수 근호가 섞여 순서·부호 함정이 겹침. 시험 구역 ★2~3 출발에서 통찰 0 → ★2.
  mechanism_primary: "선택지마다 각 항 근호 벗기기 → 곱셈·나눗셈 먼저 → 덧셈·뺄셈 → 제시값과 대조"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 근호 안 수와 제시 결과값을 함께 교체. 제약: 정답은 하나뿐이어야 하고, 오답의 제시값은 부호 하나만 틀리거나 연산 순서를 뒤집었을 때 나오는 값으로 두어야 계산 대조가 의미를 갖는다."
    creative: "(1) 옳지 않은 것 고르기로 뒤집기(★2) (2) 선택지를 문자식으로 바꾸면 18-h3 골조(★2) (3) 다섯 식의 값을 크기순 나열하게 하면 계산+대소 결합 ★3 (4) 한 선택지를 빈칸으로 두고 등식이 성립하게 채우기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-21-02
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $a<0$, $b>0$ 일 때 $\sqrt{(-a)^2}-\sqrt{(a-b)^2}+\sqrt{9b^2}$ 을 간단히 하기.
  category: "두 문자의 부호 조건 → a−b 의 부호 결정 → 절댓값 벗기고 동류항 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a<0 과 b>0 두 조건을 결합해 a−b<0 이라는 제3의 부호 조건을 만들어야 가운데 항의 절댓값이 벗겨짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(a²) 꼴을 포함한 식 간단히 하기(두 문자의 부호 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    18-h4 는 한 문자의 범위에서 두 식의 부호를 읽었지만, 여기서는 서로 다른 두 문자의 조건을 합쳐 a−b 의 부호를 새로 만들어야 한다 — 이 단원에서 조건 결합이 필요한 유일한 자리.
    벗긴 뒤 −(a−b) 의 괄호 분배에서 부호가 또 한 번 갈리고, a 가 상쇄되어 b 만 남는다. 시험 구역 ★2~3 출발 + 통찰 1 · M_total 7 → ★3.
  mechanism_primary: "a<0, b>0 → −a>0, a−b<0, 3b>0 판정 → 각 항 절댓값 벗기기 → 괄호 분배 후 정리"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "9b² 의 계수(제곱수)와 각 항의 부호 배치를 교체. 제약: 두 문자의 부호 조건은 a−b 의 부호가 확정되는 조합(a<0<b 또는 b<0<a)이어야 하고, a<b<0 처럼 같은 부호면 차의 부호가 정해지지 않아 문항이 성립하지 않는다."
    creative: "(1) 조건을 a<b<0 으로 바꿔 경우를 나누게 하면 I-MI d2 · ★4 (2) 항을 √((b−a)²) 로 바꿔 부호 판정을 뒤집기(★3) (3) 결과가 2b 가 되도록 하는 조건을 되묻기(I-BW d2 · ★4) (4) 수직선 위 a, b 의 위치 그림으로 조건을 주면 I-RT d1 추가 ★4."
```

```yaml
- id: GN-M31-21-03
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $\sqrt{2^3\times 3^2\times x}$ 가 자연수가 되도록 하는 자연수 $x$ 로 옳지 않은 것 고르기(선택지 $2$, $6$, $8$, $18$, $50$).
  category: "지수 표기 → 홀수 지수 소인수 확인 → x=2×(제곱수) 꼴 판정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「자연수가 된다」를 「x 가 2×(제곱수) 꼴」이라는 x 의 형태 조건으로 옮겨야 선택지 다섯 개를 한 번에 판정할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(Ax) 가 자연수가 되도록 하는 x 의 조건(최소값이 아닌 판정형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-h5 와 같은 도구지만 A 가 이미 지수 형태로 주어져 홀수 지수인 소인수가 2 하나뿐임이 바로 보인다. 최소값이 아니라 「가능한 x」를 판정하는 형태라 x=2k² 꼴이라는 일반형까지 한 걸음 더 간다.
    선택지를 2·(제곱수)로 분해하면 6=2×3 만 어긋난다. 통찰 1 · 시험 구역 → ★2(선택지 대입만으로도 풀려 +1 하지 않음).
  mechanism_primary: "2³3²x 에서 홀수 지수 소인수 2 확인 → x=2×(제곱수) → 선택지 분해 대조 → 어긋난 하나"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 조합(2³×3²·2×5³×7²)과 선택지를 함께 교체. 제약: 홀수 지수 소인수를 1개로 두면 x=p×(제곱수) 꼴이 깔끔하고, 2개로 늘리면 난도가 ★3 으로 올라간다. 오답 선택지는 정확히 하나만 두고 나머지는 서로 다른 제곱수 배수로 만들 것."
    creative: "(1) 가능한 x 중 가장 작은 두 값을 구하기(★2) (2) 100 이하의 x 개수를 묻기(I-MI d2 · ★3) (3) 홀수 지수 소인수를 둘로 늘리기(★3) (4) √(Ax) 의 값까지 묻게 하면 계산이 추가되어 ★3."
```

```yaml
- id: GN-M31-21-04
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $\sqrt{25-x}$ 가 정수가 되도록 하는 자연수 $x$ 중 가장 큰 수를 $A$, 가장 작은 수를 $B$ 라 할 때 $A-B$ 의 값 구하기.
  category: "25−x 가 제곱수(0 포함) → x 후보 전부 나열 → 최대·최소 → 차"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√(25−x)가 정수」를 「25−x 가 제곱수」로 옮기되, 자연수가 아니라 정수이므로 0 도 후보에 넣어야 함(x 의 최대값이 여기서 갈림)"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최소 하나만 찾는 19-h6 과 달리 조건을 만족하는 x 를 모두 나열한 뒤 최대·최소를 동시에 골라야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "√(A−x) 가 정수가 되도록 하는 x 의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    발문이 「자연수」가 아니라 「정수」라서 25−x=0 이 허용되고, 그 한 칸이 A 를 좌우한다 — 이 범위에서 경계 함정이 답을 바꾸는 유일한 문항.
    후보를 전부 나열해야 최대·최소를 동시에 고를 수 있어 통찰 2개(EQV d1 + MI d1) · M_total 7 → 시험 구역 ★2~3 에서 +1 하여 ★3.
  mechanism_primary: "25−x 가 제곱수(0 포함) → x 후보 전부 나열 → 최대 A·최소 B 선택 → A−B"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "25 를 다른 자연수로 교체. 제약: A 자체가 제곱수일 때만 「정수」 조건의 0 함정이 살아 있고(25−x=0 → x=25), 제곱수가 아니면 자연수 조건과 답이 같아져 문항의 핵심이 사라진다. A−B 가 깔끔한 값이 되도록 A 를 36·49 같은 제곱수로 둘 것."
    creative: "(1) 「정수」를 「자연수」로 바꾸면 0 이 빠져 답이 달라짐(난도 ★2) (2) A+B 나 x 의 개수를 묻기(★3) (3) √(A+x) 형으로 바꾸면 후보가 무한해져 최대값이 없어지므로 상한 조건이 필요(★3) (4) 조건을 만족하는 x 를 모두 구하고 그 합을 묻기(★3)."
```

```yaml
- id: GN-M31-21-05
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $-\sqrt{10}$, $\sqrt{2}$, $-3$, $\sqrt{5}$, $0$, $2$ 를 큰 것부터 차례대로 나열하기.
  category: "0 기준 양수·음수 분리 → 각 무리에서 근호 꼴 통일 비교 → 음수는 반전"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 포함한 수의 대소 관계(크기순 나열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 수 비교(16-04·20-h7)를 여섯 수 전체 순서로 확장한 형태. 0 을 기준으로 양수 셋·음수 둘을 나눈 뒤 각 무리 안에서만 비교하면 되므로 절차가 정해져 있다.
    음수 쪽 −√10 과 −3 의 반전, 양수 쪽 √5 와 2 의 제곱 비교가 실점 지점. 통찰 0 · 시험 구역 → ★2.
  mechanism_primary: "0 기준으로 양수·음수 분리 → 각 무리에서 정수를 근호 꼴로 통일해 비교 → 음수는 순서 반전 → 큰 것부터 이어 붙이기"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{5}$, $2$, $\sqrt{2}$, $0$, $-3$, $-\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여섯 수의 근호 안 값과 정수를 교체. 제약: 정수와 무리수가 근호 꼴로 통일했을 때 서로 붙어 있어야(√5 vs 2=√4) 어림으로 풀리지 않고, 0 과 음수를 각각 최소 하나씩 넣어 부호 반전 판정이 반드시 들어가게 할 것."
    creative: "(1) 작은 것부터 나열로 뒤집기(★2) (2) 세 번째로 큰 수만 묻기(★2) (3) 수직선 위 대응점을 찾게 하면 I-RT d1 · ★3 (4) 무리수 사이의 정수를 묻는 문제로 바꾸면 부등식 유형과 결합 ★3."
```

```yaml
- id: GN-M31-21-06
  page: 21
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    부등식 $-4\le -\sqrt{3x-2}<-1$ 을 만족시키는 자연수 $x$ 의 개수 구하기.
  category: "각 변 ×(−1) 로 부등호 반전 → 제곱 → 일차부등식 → 자연수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호 앞의 −때문에 그대로 제곱할 수 없으므로 각 변에 −1 을 곱해 부등호 방향과 양 끝을 뒤바꾼 동치 부등식으로 먼저 옮겨야 함(등호도 함께 이동)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근을 포함한 부등식(음수 계수·등호 포함 · 해의 개수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    20-h8 의 부등식 골조에 ⑴ 음수 곱에 의한 부등호 반전 ⑵ 등호가 한쪽에만 붙은 비대칭 경계 ⑶ 근호 안이 상수가 아니라 일차식 3x−2 세 가지가 동시에 얹혔다.
    반전을 건너뛰고 바로 제곱하면 범위가 통째로 어긋나므로 첫 동치 변환이 결정적(I-EQV d1). 함정 세 종류(T-부호·T-경계·T-범위) · M_total 8 → 시험 구역 최고난도 ★3.
  mechanism_primary: "각 변 ×(−1) 로 부등호 반전 → 각 변 제곱 → 3x−2 범위 → x 범위 → 경계 판정 후 자연수 개수"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/21-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 정수(−4·−1)와 근호 안 일차식(3x−2)의 계수·상수항을 교체. 제약: 양 끝을 제곱한 값이 일차식에 대입했을 때 x 의 경계를 정수 또는 명확한 분수로 만들어야 개수 세기가 갈리지 않고, 등호는 한쪽에만 붙여야 경계 함정이 살아 있다. 근호 안은 해당 구간에서 항상 0 이상이어야 한다."
    creative: "(1) 개수 대신 해를 모두 구하기(★3) (2) 등호를 양쪽에 붙이거나 모두 떼어 경계 판정만 바꾸기(★3) (3) 근호 안을 x²+1 처럼 이차식으로 바꾸면 범위 케이스가 생겨 I-MI d2 · ★4 (4) 해의 개수가 5 가 되도록 하는 상수를 되묻기(I-BW d2 · ★4)."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 4 · ★2 19 · ★3 3 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 16 · premium 0 (통찰은 전부 I-EQV d1 계열이고, 21-04 만 I-EQV + I-MI 2개)
- 통찰 유형 분포: I-EQV 10회 · I-MI 1회 (I-XU·I-SC·I-VF·I-SYM 0 — 소단원 성격상 ★4 이상 자격이 나올 자리가 없다)
- M_total 분포: 5 → 6문 · 6 → 5문 · 7 → 14문 · 8 → 1문 (평균 6.4)
- type_hint 상위 5: 「√(a²) 의 성질·문자 부호 판정」 5(16-03·18-h3·18-c3·18-h4·18-c4, 21-02 포함 시 6) · 「제곱근의 성질을 이용한 식의 계산」 4(16-02·17-h2·17-c2·21-01) · 「제곱근의 대소 관계」 4(16-04·20-h7·20-c7·21-05) · 「근호 안이 제곱수가 되는 자연수 조건」 5(19-h5·19-c5·19-h6·19-c6·21-03, 21-04 포함 시 6) · 「제곱근을 포함한 부등식」 3(20-h8·20-c8·21-06)
- 구역별 ★: 개념원리 확인하기 4문 모두 ★1 · 핵심문제 익히기 16문 모두 ★2 · 이런 문제가 시험에 나온다 ★2 3문 / ★3 3문
- 그림: 없음(26문 전부 `figure: none`)
- 답 확인 필요로 표시한 문항: 없음(골조를 잡는 과정에서 전사 답과 어긋나 보이는 문항 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-17-h1 · GN-M31-17-c1 | 핵심문제 익히기 구역이라 ★2 출발이지만 통찰 0 · M_total 5 로 v3.8 의 −1 조건(통찰 0 + M_total ≤ 5)을 충족. 부호 함정 전수 판정이 실제 변별을 만든다고 보아 ★2 유지 | ★1 / ★2 |
| GN-M31-16-03 | 18-h3·18-h4 와 완전히 같은 도구(√(a²)=\|a\| + 문자 부호 판정)인데 구역만 「개념원리 확인하기」라 ★1, 핵심문제 쪽은 ★2. 구역 신호와 골조가 1단 어긋남 | ★1 / ★2 |
| GN-M31-20-h8 · GN-M31-20-c8 | 21-06 과 같은 「제곱근 부등식」 골조인데 여기서는 부호 반전이 없어 절차형으로 두었다. 「각 변 제곱」 자체를 I-EQV 로 인정할지에 따라 통찰형 ★2 ↔ 절차형 ★2 로 갈린다(★ 는 동일) | ★2 (통찰형/절차형 판정만 이슈) |
| GN-M31-19-h5 계열 5문 | 「자연수가 되는 조건」의 통찰 코드를 I-EQV(조건의 동치 변환)로 통일했으나, 발문이 「~이 되도록 하는 x」라 I-BW(역방향 사고)로도 읽힌다. 카탈로그 설계 때 한쪽으로 고정 필요 | ★2 (코드 선택만 이슈) |
| GN-M31-21-03 | 시험 구역(★2~3)이고 통찰 1개지만 선택지 대입만으로 끝나 ★2 로 두었다. 19-h5 의 최소값형과 같은 유형으로 묶을지 「판정형」으로 분리할지 미정 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「√(a²) 의 성질 — 한 문자의 부호 조건」(16-03·18-h3·18-c3)과 ⑵ 「√(식²) 를 포함한 식 간단히 하기 — 범위·두 문자 조건」(18-h4·18-c4·21-02)은 도구는 같지만 조건을 부호로 번역하는 단계(I-EQV)의 유무가 달라 별도 유형으로 두는 편이 변형 설계에 유리하다. 21-02(두 문자 결합)는 ⑵ 안의 상위 슬롯으로.
- **따로 세워야 할 유형** 「근호 안이 제곱수가 되는 자연수 조건」은 ⓐ 곱·나눗셈형(√(Ax)·√(A/x) — 소인수분해 도구 · 19-h5·19-c5·21-03)과 ⓑ 합·차형(√(A±x) — 제곱수 나열 도구 · 19-h6·19-c6·21-04)이 풀이 도구가 완전히 달라 반드시 분리해야 한다. 현재 개념원리는 이 둘을 연속 배치로만 구분한다.
- **통합해도 될 유형** 「제곱근의 성질 계산」 계열(16-01·16-02·17-h1·17-c1·17-h2·17-c2·21-01)은 소문항형·5지선다형·「다른 하나 고르기」형이 모두 같은 골조라 하나의 유형 아래 출제 형태 변형으로 묶는 것이 낫다. 마찬가지로 「제곱근의 대소 관계」(16-04·20-h7·20-c7·21-05)도 두 수 비교와 크기순 나열을 한 유형으로 묶고 나열형을 상위 슬롯으로 둔다.
- **★ 상한 메모** 이 소단원에는 I-XU·I-SC·I-VF·I-SYM 이 한 번도 나오지 않아 v3.8 기준 ★5 자격 문항이 없고, ★4 도 없다. 카탈로그에서 이 단원의 base_star 상한은 3 으로 두고, ★4 이상은 다른 단원(근호를 포함한 식의 계산·이차방정식)과 결합하는 변형에서만 만들 것.
