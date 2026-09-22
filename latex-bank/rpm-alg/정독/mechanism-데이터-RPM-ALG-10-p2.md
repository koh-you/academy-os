---
name: mechanism-데이터-RPM-ALG-10-p2
description: RPM 대수 10 수학적 귀납법(2/2 · 유형 07~유형 UP 11 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 10 수학적 귀납법
  unit_code: ALG-10
  part: "2/2"
  extract_range: "149~156쪽 · 1088~1126"
  total_problems: 39
  unit_total: 76
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). −1 조정은 통찰 0·M_total ≤ 5 이면서 M_s 1(읽기·한 기법)인 문항에만 적용하고, M_s 2 이상의 표준 골조가 있으면 출발점을 유지함. 시험에 꼭 나오는 문제(★2~3 출발)는 통찰이 있거나 M_total ≥ 6 이면서 M_k ≥ 2 이면 ★3, 아니면 ★2 로 둠. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 10 수학적 귀납법 (2/2) 정독 데이터 (v1.0)

이 파일은 RPM 대수 10 수학적 귀납법 단원의 뒷부분 149~156쪽, 전사본 1088~1126 의 39문항을 다룬다. 구역은 유형 07(S_n 이 포함된 수열의 귀납적 정의) · 유형 08(수학적 귀납법의 원리) · 유형 09(등식의 증명) · 유형 10(부등식의 증명) · 유형 UP 11(귀납적 정의의 활용) · 시험에 꼭 나오는 문제(16문) · 서술형 주관식(4문) · 실력 Up(3문)이다. 벤더 난이도 신호는 구역이 곧 층이고(유형 ★2 · 유형 UP ★3 · 서술형 주관식 ★3 · 실력 Up ★4 출발), 유형 구역 안에서는 level(중하·중)과 tag(대표문제·서술형·중요·교육청 기출)가 붙는다. 시험에 꼭 나오는 문제 구역은 level 이 없어 ★2~3 사이에서 M·통찰로 갈랐다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄 `mechanism_primary`, 단계별 통찰 라벨 `insights[]`, 바꿔도 되는 수·제약과 골조 유지 변형·★ 변동 지점을 적은 `variation_notes` 를 채웠다. 귀납법 빈칸 채우기(유형 09·10·시험 구역)는 대부분 증명 틀을 읽는 절차형이라 ★1~2 에 몰리고, 통찰이 실제로 요구되는 문항은 명제 전파 조건 해석(1114) · 도형 규칙 발견(1118) · 블록 등비 구조(1124) · 조건부 점화식 역추적(1125) 네 문항이다.

## 문항 데이터

### 유형 07 $S_n$이 포함된 수열의 귀납적 정의

```yaml
- id: RPM-ALG-1088
  page: 149
  vendor_label: "유형 07 $S_n$이 포함된 수열의 귀납적 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a_1=2, S_n=2a_n-2 (n≥1) 로 정의된 수열에서 a_8 의 값. 단답형.
  category: "S_n 관계식 → 차분 → 등비 점화식 → 항 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 관계식으로 정의된 수열 — 차분 → 등비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n≥2 에서 a_n=S_n-S_{n-1}=2a_n-2a_{n-1} 이므로 a_n=2a_{n-1}. a_1=2 와 맞물려 a_n=2^n, a_8=256. 차분 뒤 n≥2 범위와 초항을 따로 두는 표준 절차(T-범위 1개). 유형 대표·level 없음 → ★2 출발, 통찰 없음·M_total 5 라 −1 후보이나 차분 → 점화식 → 일반항의 세 단계 골조(M_s 2)가 그대로 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "S_n=2a_n-2 → S_n-S_{n-1} 차분 → a_n=2a_{n-1} (n≥2) → a_n=2^n → a_8=256"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$256$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n=p·a_n+q 의 p(2, 3, 1/2)·q, 초항, 묻는 항 번호를 바꿀 수 있음. 제약: S_1=a_1 을 관계식에 넣었을 때 초항이 모순 없이 결정되어야 하고(a_1=p·a_1+q), 등비 항이 손으로 계산 가능한 크기여야 함."
    creative: "(1) 초항을 발문에서 빼고 S_1=a_1 로 스스로 결정하게 하기(★2 유지) (2) a_8 대신 Σa_k 나 log_2 a_k 를 묻기(★2~3) (3) S_n=2a_n-n 처럼 n 항을 넣으면 a_n=2a_{n-1}+1 꼴 변환 점화식이 되어 I-EQV d1 ★3."
```

```yaml
- id: RPM-ALG-1089
  page: 149
  vendor_label: "유형 07 $S_n$이 포함된 수열의 귀납적 정의"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_1=1, S_{n+1}=3S_n+1 로 합의 점화식이 주어진 수열에서 a_6 의 값. 단답형.
  category: "S_n 점화식 → 두 식 차분 → a_n 등비 → 항 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 관계식으로 정의된 수열 — S 점화식 차분 → 등비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S_{n+1}=3S_n+1 과 S_n=3S_{n-1}+1 을 빼면 a_{n+1}=3a_n (n≥2), a_2=S_2-S_1=3 이라 a_6=3·3^4=243. S_n+1/2 가 등비임을 써서 S_n=(3^n-1)/2 로 가도 되고, S_1~S_6 을 그냥 나열해도 끝난다. 갈래가 있지만 모두 표준이라 SC 는 아님. level 중하 → ★1~2, M_s 2 골조로 ★2(직접 나열로도 끝나 ★1 후보).
  tier: star_2
  mechanism_primary: "S_{n+1}=3S_n+1 → 연속 두 식 차분 → a_{n+1}=3a_n (n≥2), a_2=3 → a_6=3^5=243"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$243$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 3·상수 1, S_1, 묻는 항 번호를 바꿀 수 있음. 제약: a_1=S_1 과 a_2=S_2-S_1 의 비가 공비와 같은지(같으면 a_n 전체가 등비, 다르면 n≥2 부터) 답 구조를 확인."
    creative: "(1) S_1 을 바꿔 a_1 만 등비에서 빠지게 하기(T-범위 함정, ★2) (2) S_{n+1}=3S_n+2^n 처럼 비상수항 → a_{n+1}=3a_n+2^{n-1} 변환 ★3 (3) a_6 대신 S_6 이나 a_6/a_3 를 묻기(★2)."
```

```yaml
- id: RPM-ALG-1090
  page: 149
  vendor_label: "유형 07 $S_n$이 포함된 수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=3, 2S_n=a_n+n 으로 정의된 수열에서 a_100 의 값. 단답형.
  category: "S_n 관계식 → 차분 → a_n=1-a_{n-1} → 주기 2 → 항 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "차분 점화식 a_n=1-a_{n-1} 이 등차·등비가 아니라 두 값 3, -2 가 번갈아 나오는 주기 2 임을 항 나열로 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "S_n 관계식으로 정의된 수열 — 차분 → 주기 수열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2S_n-2S_{n-1}=a_n-a_{n-1}+1 → 2a_n=a_n-a_{n-1}+1 → a_n=1-a_{n-1} (n≥2). a_1=3, a_2=-2, a_3=3, … 주기 2 라 a_100=a_2=-2. 일반항 공식 대신 주기를 읽어야 하므로 PD d1. level 중 → ★2, M 5·통찰 1 → 유지.
  tier: star_2
  mechanism_primary: "2S_n=a_n+n → 차분 → a_n=1-a_{n-1} → 3, -2 반복 → a_100=a_2=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 3, 상수항 계수(a_n+n → a_n+2n), 묻는 항 번호(100 의 홀짝이 답을 정함). 제약: 차분 결과가 a_n=c-a_{n-1} 꼴이어야 주기 2 가 유지되고, 2S_n=a_n+n 의 계수 2 를 바꾸면 등비형으로 바뀜."
    creative: "(1) a_100 대신 S_100 (주기 합) 묻기(★2) (2) 2S_n=a_n+n^2 처럼 2 차 항을 넣으면 a_n=-a_{n-1}+2n-1 로 홀짝 분리 → I-MI d1 ★3 (3) 계수를 바꿔 a_n=2a_{n-1}+1 변환형으로 두면 골조가 달라져 ★3."
```

```yaml
- id: RPM-ALG-1091
  page: 149
  vendor_label: "유형 07 $S_n$이 포함된 수열의 귀납적 정의"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    a_1=2, 3S_n=a_{n+1}-2 를 만족시키는 수열에서 a_k=512 가 되는 자연수 k. 서술형 단답.
  category: "S_n 관계식(a_{n+1} 포함) → 차분 → 등비 → 지수 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 관계식으로 정의된 수열 — 차분 → 등비 · 항 번호 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n=1 에서 a_2=3·2+2=8. n≥2 에서 3a_n=a_{n+1}-a_n → a_{n+1}=4a_n. a_2/a_1=4 도 성립하므로 a_n=2·4^{n-1}. 2·4^{k-1}=512=2·4^4 → k=5. 차분 후 n≥2 와 a_2 를 따로 확인하는 표준 골조(T-범위 1개)에 지수 방정식 한 줄. level 중·서술형 태그 → ★2.
  tier: star_2
  mechanism_primary: "3S_n=a_{n+1}-2 → n=1 로 a_2=8, 차분으로 a_{n+1}=4a_n (n≥2) → a_n=2·4^{n-1} → 4^{k-1}=256 → k=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3(공비 4 를 결정), 초항 2, 목표값 512(2·4^m 꼴이어야 k 가 자연수). 제약: a_2 가 관계식에서 결정되므로 초항과 상수 -2 를 바꿀 때 a_2/a_1 이 공비와 같은지 확인(다르면 n≥2 분리)."
    creative: "(1) 상수를 바꿔 a_2/a_1≠공비 로 만들어 a_1 만 예외인 수열 → T-범위 함정 ★2~3 (2) a_k=512 대신 S_k>1000 최소 k(부등식) ★3 (3) 서술형 채점 기준(n=1 분리·n≥2 차분·검산)을 그대로 두고 k 대신 log_2 a_k 묻기 ★2."
```

### 유형 08 수학적 귀납법

```yaml
- id: RPM-ALG-1092
  page: 149
  vendor_label: "유형 08 수학적 귀납법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    명제 p(n) 이 ㈎ p(1) 참, ㈏ p(2k-1)→p(2k), ㈐ p(2k)→p(3k+1) 을 만족시킬 때 반드시 참이라 할 수 없는 것 고르기(p(4)·p(5)·p(7)·p(8)·p(13)). 5지선다.
  category: "명제 전파 조건 → p(1) 에서 도달 가능한 n 추적 → 도달 불가 항 판별"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 ㈏㈐ 를 '홀수 2k-1 에서 짝수 2k 로, 짝수 2k 에서 3k+1 로' 옮기는 전진 규칙으로 읽고 p(1) 부터 연쇄를 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "명제 p(n) 의 전파 조건 해석(귀납법의 원리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p(1) → ㈏(k=1) p(2) → ㈐(k=1) p(4) → ㈐(k=2) p(7) → ㈏(k=4) p(8) → ㈐(k=4) p(13). 규칙의 결론은 짝수(2k) 아니면 3k+1 꼴(4, 7, 10, …)뿐인데 5 는 어느 쪽도 아니라 p(5) 는 보장되지 않음. 조건을 전진 규칙으로 읽는 EQV d1 뒤 추적은 짧다. 유형 대표·level 없음·M 6 → ★2.
  tier: star_2
  mechanism_primary: "p(1) → p(2) → p(4) → p(7) → p(8) → p(13) 연쇄; 5 는 2k 도 3k+1 도 아님 → p(5) 보장 안 됨"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "규칙 계수(2k-1→2k, 2k→3k+1 의 3·1)와 보기 다섯 개. 제약: 정답 하나만 도달 불가여야 하므로 보기 넷은 p(1) 에서 실제 연쇄로 도달하고, 하나는 어떤 규칙의 결론 꼴(짝수·3k+1)에도 맞지 않아야 함."
    creative: "(1) 규칙을 p(k)→p(2k), p(k)→p(k+3) 으로 바꿔 도달 집합 재구성(★2) (2) '반드시 참인 것' 을 ㄱㄴㄷ 로 묻기(★2) (3) 'p(1) 대신 무엇이 참이어야 모든 n 에서 참이 되는가' 처럼 시작점을 역으로 묻기 → I-BW ★3."
```

```yaml
- id: RPM-ALG-1093
  page: 149
  vendor_label: "유형 08 수학적 귀납법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 n 에서 p(n)→p(n+2) 일 때 보기 ㄱ(p(1)→p(2k+1)) · ㄴ(p(2)→p(2k+3)) · ㄷ(p(1), p(2)→p(k)) 중 항상 옳은 것. 5지선다.
  category: "p(n)→p(n+2) 해석(같은 홀짝 사슬) → 보기별 도달 여부 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "p(n)→p(n+2) 를 '홀짝이 같은 쪽으로만 두 칸씩 전파' 로 해석해 짝수 출발에서 홀수 결론(ㄴ)을 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "명제 p(n) 의 전파 조건 해석(귀납법의 원리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: p(1) 에서 3, 5, … 홀수 전부 → 참. ㄴ: p(2) 에서 얻는 것은 짝수뿐인데 2k+3 은 홀수 → 보장 없음. ㄷ: 홀수 사슬과 짝수 사슬을 합치면 모든 자연수 → 참. 조건을 홀짝 사슬로 읽는 EQV d1 하나. level 중·M 6 → ★2.
  tier: star_2
  mechanism_primary: "p(n)→p(n+2) = 같은 홀짝 두 칸 전진 → ㄱ 홀수 전부 참 · ㄴ 짝수에서 홀수 불가 · ㄷ 두 사슬 합집합 = 전체 → ㄱ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전진 간격 2(→3 이면 나머지 세 부류로 사슬이 갈라짐), 보기의 출발점(p(1), p(2))과 결론 꼴(2k+1, 2k+3, k). 제약: 보기가 '항상 옳음/아님' 으로 확정되도록 결론 꼴의 나머지 부류를 출발점과 맞추거나 어긋나게 설계."
    creative: "(1) 간격 3 으로 두고 p(1), p(2), p(3) 조합 보기 → 나머지 부류 세 개 추적 ★2~3 (2) p(n)→p(2n) 처럼 곱셈 전파로 바꾸면 도달 집합이 2 의 거듭제곱 배 → 표현 전환 I-RT ★3 (3) '모든 n 에서 참이 되기 위해 추가로 참이어야 할 최소 명제 집합' 을 묻기 ★3."
```

### 유형 09 수학적 귀납법을 이용한 등식의 증명

```yaml
- id: RPM-ALG-1094
  page: 150
  vendor_label: "유형 09 수학적 귀납법을 이용한 등식의 증명"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1+2+2^2+…+2^{n-1}=2^n-1 의 귀납 증명 과정에서 빈칸 ㈎~㈑(가정 단계 변수 · 더하는 항 · 정리 결과 · 다음 단계) 조합 고르기. 5지선다.
  category: "귀납 증명 틀 읽기 → 가정 변수 k · 더하는 항 2^k · 지수법칙 정리 · k+1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 등식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㈎ k(가정 단계), ㈏ 다음 항 2^k, ㈐ 2^k-1+2^k=2·2^k-1=2^{k+1}-1, ㈑ k+1. 증명 틀을 읽고 지수법칙 한 줄이 전부(M_s 1·M_k 1). 유형 대표·level 없음 → ★2 출발이지만 통찰 없음·M_total 5·읽기형이라 −1 → ★1(틀을 처음 배우는 대표문제 성격).
  tier: star_1
  mechanism_primary: "가정 n=k → 양변에 2^k 더함 → 2^k-1+2^k=2^{k+1}-1 → n=k+1 성립"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 2 → 3(합 (3^n-1)/2), 첫 항, 빈칸 위치(㈏ 대신 ㈐ 만 묻기). 제약: 정리 결과가 지수법칙 한 줄로 닫혀야 하고 보기의 오답이 흔한 실수(2^k-1 그대로, k 와 k+1 혼동)를 반영."
    creative: "(1) 빈칸의 식을 f(k), g(k) 로 두고 f(3)+g(2) 값 묻기(1095 형, ★1) (2) 틀의 순서를 섞어 놓고 올바른 순서 고르기(★2) (3) 등비합 대신 Σk·2^k 형(2 단계 정리) → ★2."
```

```yaml
- id: RPM-ALG-1095
  page: 150
  vendor_label: "유형 09 수학적 귀납법을 이용한 등식의 증명"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1+3+5+…+(2n-1)=n^2 의 귀납 증명에서 더하는 항 ㈎=f(k), 정리 결과 ㈏=g(k) 일 때 f(3)+g(2). 단답형.
  category: "귀납 증명 틀 읽기 → 다음 홀수 2k+1 · 완전제곱 (k+1)^2 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 등식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㈎ 는 n=k+1 일 때 더해지는 항 2(k+1)-1=2k+1, ㈏ 는 k^2+2k+1=(k+1)^2. f(3)=7, g(2)=9 → 16. 틀 읽기와 완전제곱 정리(M_s 1). level 중하·통찰 없음·M 5 → ★1.
  tier: star_1
  mechanism_primary: "가정 k^2 에 2k+1 을 더함 → (k+1)^2 → f(k)=2k+1, g(k)=(k+1)^2 → 7+9=16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입값(3, 2), 등식(2+4+…+2n=n(n+1) 등 다른 기본 합). 제약: f, g 가 k 의 간단한 다항식이 되게 등식을 고르고 답이 정수."
    creative: "(1) f(k)·g(k) 의 곱이나 g(k)-f(k) 를 묻기(★1) (2) 빈칸을 (i) 단계의 좌·우변 값에 두어 초기 단계 검증 자체를 묻기(★1) (3) 등식을 Σk(k+1)=n(n+1)(n+2)/3 처럼 인수분해가 필요한 것으로 → M_k 상승 ★2."
```

```yaml
- id: RPM-ALG-1096
  page: 150
  vendor_label: "유형 09 수학적 귀납법을 이용한 등식의 증명"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1^3+2^3+…+n^3=(1+2+…+n)^2 의 귀납 증명에서 더하는 항 ㈎=f(k), 정리 결과 ㈏=g(k) 일 때 g(10)/f(5). 단답형.
  category: "귀납 증명 틀 읽기 → (k+1)^3 · {(k+1)(k+2)/2}^2 → 분수 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 더하는 항 (k+1)^3, ㈏ 는 n=k+1 의 우변 {(k+1)(k+2)/2}^2 — {k(k+1)/2}^2+(k+1)^3=(k+1)^2(k+2)^2/4 로 확인해도 되지만 목표식을 읽어 쓰면 끝. g(10)=66^2=4356, f(5)=216 → 121/6 의 약분이 계산 부담(M_k 2). level 중·통찰 없음·M 7 → ★2.
  tier: star_2
  mechanism_primary: "가정 {k(k+1)/2}^2 에 (k+1)^3 을 더함 → {(k+1)(k+2)/2}^2 → g(10)/f(5)=66^2/6^3=121/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{121}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입값(10, 5), 등식(Σk^2=n(n+1)(2n+1)/6 등). 제약: g(a)/f(b) 가 정리된 분수로 떨어지게 값을 고르고, 약분 과정이 두 줄을 넘지 않게."
    creative: "(1) (k+1)^2 로 묶어 g(k)-f(k) 의 인수분해를 묻기(★2) (2) ㈏ 를 전개 과정 중간식으로 두어 실제 정리를 요구(★2~3) (3) 좌변을 Σk^3 대신 Σ(2k-1)^3 으로 바꾸면 정리가 무거워져 M_k 3 → ★3(질 저하 주의)."
```

```yaml
- id: RPM-ALG-1097
  page: 151
  vendor_label: "유형 09 수학적 귀납법을 이용한 등식의 증명"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    4/3+8/3^2+…+4n/3^n=3-(2n+3)/3^n 이 모든 자연수 n 에서 성립함을 수학적 귀납법으로 증명하기. 서술형(풀이 참조).
  category: "등식 귀납 증명 서술 → n=1 확인 → 가정에 4(k+1)/3^{k+1} 더해 통분 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 등식 증명 서술"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (i) n=1: 양변 4/3. (ii) n=k 가정의 양변에 4(k+1)/3^{k+1} 을 더하고 3^{k+1} 로 통분하면 3-{3(2k+3)-4(k+1)}/3^{k+1}=3-(2k+5)/3^{k+1}=3-{2(k+1)+3}/3^{k+1}. 통분·정리가 계산의 전부(M_k 2)이고 틀은 표준. level 중·서술형 태그 → ★2.
  tier: star_2
  mechanism_primary: "n=1 확인 → 가정 + 4(k+1)/3^{k+1} → 3^{k+1} 통분 → 3-(2k+5)/3^{k+1} → n=k+1 꼴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비 3 → 2(Σk/2^k=2-(k+2)/2^k, 1116 과 같은 식), 분자 계수 4. 제약: 우변이 c-(an+b)/r^n 꼴이어야 통분 한 번으로 닫히고, (i) 단계 값이 간단해야 함."
    creative: "(1) 같은 등식을 빈칸형으로 바꾸기(★1~2) (2) 우변을 주지 않고 '합을 추측한 뒤 귀납법으로 증명' 으로 두면 I-PD d2 ★3 (3) 증명 틀의 오류(가정을 n=k+1 에 쓰는 순환 논증) 찾기 → ★3."
```

```yaml
- id: RPM-ALG-1098
  page: 151
  vendor_label: "유형 09 수학적 귀납법을 이용한 등식의 증명"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=1, a_{n+1}=(4-a_n)/(3-a_n) 으로 정의된 수열의 일반항 a_n=(2n-1)/n 을 귀납법으로 증명하는 과정에서 가정 ㈎=f(k), 다음 항 ㈏=g(k) 일 때 f(3)g(4) 의 값. 5지선다.
  category: "귀납 증명 틀 읽기 → 가정 (2k-1)/k 대입 → 번분수 정리 (2k+1)/(k+1) → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 가정 a_k=(2k-1)/k, ㈏ 는 a_{k+1}=(4-a_k)/(3-a_k) 에 대입해 분모·분자에 k 를 곱한 (4k-2k+1)/(3k-2k+1)=(2k+1)/(k+1) — 목표식에 n=k+1 을 넣은 꼴과 같음을 확인. f(3)=5/3, g(4)=9/5 → 곱 3. 번분수 정리가 계산의 전부(M_k 2)이고 틀은 표준. level 중·통찰 없음·M 7 → ★2.
  tier: star_2
  mechanism_primary: "가정 a_k=(2k-1)/k → (4-a_k)/(3-a_k) 번분수 정리 → (2k+1)/(k+1) → f(3)g(4)=(5/3)(9/5)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점화식 계수(4, 3)와 초항, 대입값(3, 4). 제약: 일차분수 점화식 a_{n+1}=(pa_n+q)/(ra_n+s) 가 닫힌 일반항을 갖도록 고정점이 중근이거나 유리수여야 하고, f(a)g(b) 가 약분되어 정수·간단한 분수가 되게 대입값을 고름."
    creative: "(1) ㈏ 를 정리 전 중간식으로 두어 번분수 정리를 실제로 요구(★2) (2) 일반항을 주지 않고 a_1~a_4 로 추측한 뒤 귀납법으로 증명 → I-PD d2 ★3 (3) f(k)g(k) 나 g(k)-f(k) 를 k 의 식으로 묻기(★2)."
```

### 유형 10 수학적 귀납법을 이용한 부등식의 증명

```yaml
- id: RPM-ALG-1099
  page: 151
  vendor_label: "유형 10 수학적 귀납법을 이용한 부등식의 증명"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    n≥4 에서 n!>2^n 의 귀납 증명 과정에서 양변에 곱하는 ㈎=f(k), 2^k(k+1) 의 하한 ㈏=g(k) 일 때 g(5)/f(3) 의 값. 5지선다.
  category: "부등식 귀납 증명 틀 읽기 → 양변에 k+1 곱 → k+1>2 로 2^{k+1} 하한 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 n=k+1 로 가려면 곱해야 하는 k+1, ㈏ 는 k+1>2 를 써서 2^k(k+1)>2^k·2=2^{k+1}. f(3)=4, g(5)=64 → 16. 등식형과 달리 ㉡·㉢ 두 부등식을 이어 붙이는 단계가 있으나 틀이 그 연결을 다 보여 줘 읽기와 지수법칙 한 줄(M_s 2·M_k 1). 유형 대표·level 없음·통찰 없음·M 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "가정 k!>2^k → 양변 ×(k+1) → k+1>2 이므로 2^k(k+1)>2^{k+1} → n=k+1 성립 → g(5)/f(3)=64/4=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 → 3(n!>3^n 은 n≥7 부터), 시작 n=4, 대입값(5, 3). 제약: 시작값에서 (i) 가 실제로 성립해야 하고 k+1>밑 이 k≥시작값 에서 참이어야 함. 답이 정수가 되게 대입값을 고름."
    creative: "(1) ㈎ 를 곱하는 대신 '왜 k+1>2 가 필요한가' 를 서술로 묻기(★2) (2) 2^n>n^2 (n≥5) 처럼 하한 단계에 (k+1)^2<2k^2 확인이 더 필요한 부등식 → M_s 상승 ★3 (3) 시작값을 빈칸으로 두어 n=1, 2, 3 에서 왜 안 되는지 판단하게 하기 → T-경계 함정 ★2."
```

```yaml
- id: RPM-ALG-1100
  page: 152
  vendor_label: "유형 10 수학적 귀납법을 이용한 부등식의 증명"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/(n+1)+1/(n+2)+…+1/(3n+1)>1 의 귀납 증명 과정에서 빠지는 항 ㈎=f(k), 1/(3k+2)+1/(3k+4) 의 하한 ㈏=g(k) 일 때 f(8)+g(2) 의 값. 단답형.
  category: "부등식 귀납 증명 틀 읽기 → 인덱스 이동으로 빠지는 항 1/(k+1) → 곱 부등식을 역수 합 하한 2/(3k+3) 으로 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(3k+2)(3k+4)<(3k+3)^2 을 1/(3k+2)+1/(3k+4)=(6k+6)/{(3k+2)(3k+4)}>(6k+6)/(3k+3)^2=2/(3k+3) 으로 옮겨 하한을 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n=k+1 의 합은 k 의 합에서 1/(k+1) 이 빠지고 1/(3k+2), 1/(3k+3), 1/(3k+4) 가 더해지므로 ㈎=1/(k+1). ㈏ 는 힌트 (3k+2)(3k+4)<(3k+3)^2 을 통분한 역수 합에 적용해 2/(3k+3)(EQV d1) — 마지막 줄 '=1' 에서 ㈏=㈎-1/(3k+3) 으로 역산해도 된다. f(8)=1/9, g(2)=2/9 → 1/3. level 중·통찰 1 d1·M 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "인덱스 이동 → 빠지는 항 1/(k+1) → 곱 부등식 → 1/(3k+2)+1/(3k+4)>2/(3k+3) → 1+1/(3k+3)+2/(3k+3)-1/(k+1)=1 → f(8)+g(2)=1/9+2/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 끝 3n+1 → 2n(1/(n+1)+…+1/(2n)>13/24 형), 대입값(8, 2). 제약: 끝을 an+b 로 바꾸면 k→k+1 에서 더해지는 항 개수가 a 개로 바뀌고 하한 부등식(AM-HM 꼴)도 항 개수에 맞춰야 함. 답이 간단한 분수가 되게 대입값 선택."
    creative: "(1) 마지막 줄 '=1' 을 지우고 ㈏ 를 직접 유도하게 하면 역산 경로가 막혀 EQV 가 필수 → ★3 (2) 힌트 (3k+2)(3k+4)<(3k+3)^2 자체를 빈칸으로 두어 산술·기하 평균 착안을 요구 → I-SC d1 ★3 (3) 빠지는 항만 묻는 인덱스 이동 문제로 줄이기(★1~2)."
```

### 유형 UP 11 수열의 귀납적 정의의 활용

```yaml
- id: RPM-ALG-1101
  page: 152
  vendor_label: "유형 UP 11 수열의 귀납적 정의의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    어느 두 직선도 평행하지 않고 어느 세 직선도 한 점에서 만나지 않는 n 개 직선의 교점 개수 a_n(그림에서 a_3=3)일 때 a_20 의 값. 단답형.
  category: "도형 규칙 → a_{n+1}=a_n+n 점화식 → 계차 합 → a_20"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "새 직선 하나가 기존 n 개 직선과 각각 한 점씩 새로 만나 교점이 n 개 늘어난다는 규칙을 찾아 a_{n+1}=a_n+n 으로 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선을 하나 추가하면 기존 n 개와 각각 한 번씩 만나므로 a_{n+1}=a_n+n, a_1=0 → a_n=Σ_{k=1}^{n-1}k=n(n-1)/2, a_20=190. 두 직선마다 교점 하나이므로 20C2 로 바로 세도 된다. 규칙 발견 PD d1 뒤 계차 합은 표준. 유형 UP ★3 출발·통찰 1·M 5 → ★3 유지(조합으로 보면 한 줄이라 ★2 체감).
  tier: star_3
  mechanism_primary: "새 직선 = 기존 n 개와 교점 n 개 → a_{n+1}=a_n+n, a_1=0 → a_n=n(n-1)/2 → a_20=190"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$190$"
  answer_source: "답지"
  figure: crop:fig-1101.png
  latex: latex-bank/rpm-alg/items/1101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 n(20 → 15, 30), 그림 예시 a_3=3 은 고정(규칙 확인용). 제약: '어느 두 직선도 평행하지 않고 어느 세 직선도 한 점에서 만나지 않는다' 조건을 유지해야 a_{n+1}-a_n=n 이 성립. 답은 n(n-1)/2."
    creative: "(1) 교점 대신 직선들이 평면을 나누는 영역 수(a_{n+1}=a_n+n+1, a_1=2)로 바꾸기(같은 골조 ★3) (2) 원 n 개가 서로 두 점씩 만나는 교점 수(a_{n+1}=a_n+2n) ★3 (3) 평행한 직선 쌍을 m 개 섞어 조건을 깨면 케이스 분리 I-MI ★4."
```

```yaml
- id: RPM-ALG-1102
  page: 152
  vendor_label: "유형 UP 11 수열의 귀납적 정의의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    첫날 9 km, 다음날부터 전날 거리의 4/3 배보다 2 km 적게 뛰는 훈련에서 n 일째 거리 a_n 에 대한 a_n 과 a_{n+1} 의 관계식. 단답형(관계식).
  category: "문장 조건 → a_{n+1}=(4/3)a_n-2 번역"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '전날의 4/3 배보다 2 적다' 를 그대로 a_{n+1}=(4/3)a_n-2 로 옮기면 끝. 첫날 9 km 는 a_1 이고 관계식에는 쓰이지 않는다. 문장 번역 한 단계(M_s 1). 유형 UP ★3 출발이나 통찰 없음·M 4·읽기형이라 −1 → ★2. [분류 이슈] 유형 UP 구역이지만 골조는 교과서 정의 세우기와 같아 ★1 후보(2단 어긋남).
  tier: star_2
  mechanism_primary: "문장 '전날의 4/3 배보다 2 km 적다' → a_{n+1}=(4/3)a_n-2 (a_1=9)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a_{n+1}=\dfrac{4}{3}a_n-2\ (n=1,\,2,\,3,\,\cdots)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율 4/3·감소량 2·첫날 9 를 바꿀 수 있음. 제약: 관계식만 묻는다면 아무 제약 없음. a_n 값을 묻는 변형이면 a_n=3·(4/3)^{n-1}+6 처럼 고정점 6 과 초항 차 3 이 정수가 되게(9=3+6)."
    creative: "(1) a_3 의 값이나 처음으로 20 km 를 넘는 날을 묻기(★2) (2) 고정점 6 을 써서 a_n-6 이 등비임을 보이고 일반항 구하기 → I-EQV d1 ★3 (3) 배율과 감소량을 '전날의 p 배보다 q 적다' 로 주고 a_3 값으로 p, q 를 결정 → 연립 ★3."
```

```yaml
- id: RPM-ALG-1103
  page: 152
  vendor_label: "유형 UP 11 수열의 귀납적 정의의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    물 1 L, 2 L 가 든 두 그릇 A, B 에서 A 의 50 % 를 B 에 붓고 다시 B 의 50 % 를 A 에 붓는 시행을 n 회 한 뒤 A 의 물의 양 a_n 이 a_{n+1}=pa_n+q 를 만족시킬 때 p+q. 단답형.
  category: "전체량 3 L 보존으로 B=3-a_n → 두 번 붓기 추적 → a_{n+1}=a_n/4+3/2 → p+q"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 그릇의 합이 항상 3 L 임을 써서 B 의 양을 3-a_n 으로 두고 변수를 하나로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n 회 뒤 A 가 a_n 이면 B 는 3-a_n. A 의 절반을 B 에 부으면 A=a_n/2, B=3-a_n/2. B 의 절반을 A 에 부으면 A=a_n/2+(3-a_n/2)/2=a_n/4+3/2. 따라서 p=1/4, q=3/2, p+q=7/4. 합 보존으로 B 를 소거하는 EQV d1 뒤 분수 정리(M_k 2). 붓는 순서(A→B 뒤 B→A)를 바꾸면 틀리는 함정 하나. 유형 UP ★3·통찰 1·M 7 → ★3.
  tier: star_3
  mechanism_primary: "B=3-a_n → A→B 절반: A=a_n/2, B=3-a_n/2 → B→A 절반: A=a_n/2+(3-a_n/2)/2=a_n/4+3/2 → p+q=7/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{7}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 양(1, 2)·붓는 비율(50 % → 1/3)·시행 순서. 제약: 전체량이 보존되어야 한 변수로 줄고, p 는 비율의 곱(1/2·1/2), q 는 전체량×비율 조합이라 p+q 가 간단한 분수가 되게 비율을 고름."
    creative: "(1) a_1 을 구하고 고정점(a=2 L)을 써서 a_n=2-(4-a_1·4)/(4^n) 꼴 일반항 묻기 → I-EQV d2 ★4 (2) 붓는 비율을 A 는 1/2, B 는 1/3 로 비대칭 → 같은 골조 ★3 (3) 세 그릇 순환 붓기로 확장하면 두 변수 연립 → M_a 3 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-1104
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=4, a_2=7, a_n-2a_{n+1}+a_{n+2}=0 으로 정의된 수열의 Σ_{k=1}^{10} a_k. 단답형.
  category: "등차중항 점화식 인식 → 공차 3 → a_n=3n+1 → 등차합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2a_{n+1}=a_n+a_{n+2} 는 등차수열의 정의. d=a_2-a_1=3, a_n=3n+1, S_10=10(4+31)/2=175. 인식 → 공차 → 일반항 → 합의 표준 4 단계(M_s 2)·계산 한 줄. 시험 구역·통찰 없음·M 4 → ★2.
  tier: star_2
  mechanism_primary: "a_n-2a_{n+1}+a_{n+2}=0 = 등차 → d=3 → a_n=3n+1 → S_10=175"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$175$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항·둘째항(공차 결정)·합의 상한. 제약: 관계식 형태(a_n-2a_{n+1}+a_{n+2}=0)는 고정하고 a_1, a_2 만 바꾸면 되며 합이 정수."
    creative: "(1) 관계식을 a_{n+2}-a_{n+1}=a_{n+1}-a_n 이나 a_{n+1}^2=a_n a_{n+2}(등비) 로 바꿔 인식 훈련(★2) (2) a_2 대신 a_5 를 주어 공차를 역산(★2) (3) 조건을 log 형태 log a_n+log a_{n+2}=2log a_{n+1} 로 감추면 등비 인식에 EQV d1 → ★3."
```

```yaml
- id: RPM-ALG-1105
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=1, 1/a_{n+1}-1/a_n=1/3 으로 정의된 수열의 a_13 의 값. 5지선다.
  category: "역수 수열이 등차 → 1/a_n=(n+2)/3 → a_13"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b_n=1/a_n 으로 두면 b_1=1, 공차 1/3 인 등차 → b_n=(n+2)/3, a_n=3/(n+2), a_13=3/15=1/5. 역수 차가 상수로 이미 주어져 치환만 하면 되는 표준 절차. 시험 구역·통찰 없음·M 4 → ★2.
  tier: star_2
  mechanism_primary: "1/a_n 이 초항 1·공차 1/3 등차 → 1/a_n=(n+2)/3 → a_13=3/15=1/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항·공차(1/3 → 1/2)·묻는 항. 제약: 1/a_n 이 0 이 되지 않게(공차 부호와 초항) 하고 a_13 이 선택지의 간단한 분수가 되게."
    creative: "(1) 1/a_{n+1}-1/a_n 대신 a_n-a_{n+1}=a_n a_{n+1}/3 처럼 나눠야 역수 차가 보이는 꼴로 감추기 → I-EQV d1 ★3(1112 형) (2) Σ a_k 대신 Σ 1/a_k 묻기(★2) (3) 역수 대신 log a_n 이 등차인 꼴(a_{n+1}=3a_n·… )로 바꿔 등비 인식 ★2."
```

```yaml
- id: RPM-ALG-1106
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=3, a_2=9, a_{n+2}/a_{n+1}=a_{n+1}/a_n 으로 정의된 수열에서 a_k=9^10 이 되는 자연수 k. 단답형.
  category: "등비중항 점화식 인식 → 공비 3 → a_n=3^n → 지수 방정식"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등차·등비수열의 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃 항의 비가 일정하므로 등비, r=a_2/a_1=3, a_n=3^n. 3^k=9^10=3^20 → k=20. 인식 → 공비 → 일반항 → 밑 통일의 표준 절차. 시험 구역·통찰 없음·M 4 → ★2.
  tier: star_2
  mechanism_primary: "a_{n+2}/a_{n+1}=a_{n+1}/a_n = 등비 → r=3 → a_n=3^n → 3^k=3^20 → k=20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항·둘째항(공비)·목표값 9^10(밑이 같은 거듭제곱). 제약: 목표값이 a_1 r^{k-1} 꼴로 정확히 떨어져야 k 가 자연수."
    creative: "(1) 관계식을 a_{n+1}^2=a_n a_{n+2} 나 log a_{n+2}-2log a_{n+1}+log a_n=0 으로 감추기(★2~3) (2) a_k=9^10 대신 a_k>10^9 최소 k(상용로그 결합 → I-XU d1) ★3 (3) a_2 대신 a_4 를 주어 공비 역산(부호 두 가지 → I-MI d1) ★3."
```

```yaml
- id: RPM-ALG-1107
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 4, 모든 항이 양수인 수열에서 이차방정식 a_n x^2-a_{n+1}x+a_n=0 이 모든 n 에 대해 중근을 가질 때 Σ_{k=1}^{6} a_k. 단답형.
  category: "중근 조건 → 판별식 a_{n+1}^2=4a_n^2 → 양수라 a_{n+1}=2a_n → 등비합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 중근 조건(판별식 D=0)을 수열의 이웃 항 관계 a_{n+1}=2a_n 으로 옮겨 점화식을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건식(판별식)에서 점화식 유도 → 등비수열"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    D=a_{n+1}^2-4a_n^2=0 → a_{n+1}=±2a_n 인데 모든 항이 양수이므로 a_{n+1}=2a_n(T-부호). a_n=4·2^{n-1}, S_6=4(2^6-1)=252. 판별식이라는 다른 단원 도구로 점화식을 만드는 XU d1 뒤는 등비합 한 줄. 시험 구역·통찰 1·M 6 → ★3.
  tier: star_3
  mechanism_primary: "중근 → D=a_{n+1}^2-4a_n^2=0 → 양수 조건으로 a_{n+1}=2a_n → a_n=2^{n+1} → S_6=252"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$252$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 4, 방정식 계수 배치(a_n x^2-a_{n+1}x+a_n → a_n x^2-2a_{n+1}x+4a_n 이면 공비 변경), 합의 상한. 제약: D=0 이 a_{n+1}=r·a_n 꼴로 풀려야 하고 양수 조건이 부호를 하나로 정해야 함. 합이 정수."
    creative: "(1) '모든 항이 양수' 를 빼고 a_2<0 같은 조건으로 부호를 결정하게 하기 → I-MI d1 ★3 (2) 중근 대신 '두 근의 합이 a_n+2' 처럼 근과 계수 관계로 점화식 세우기(등차) ★3 (3) 중근 조건을 두 이웃 항이 아니라 a_n, a_{n+2} 사이에 걸면 홀짝 분리 ★4."
```
```yaml
- id: RPM-ALG-1108
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=1, a_{n+1}=a_n+n+1 로 정의된 수열의 Σ_{k=1}^{15} 1/a_k. 단답형.
  category: "계차 합 → a_n=n(n+1)/2 → 부분분수 2(1/k-1/(k+1)) → 망원합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n=1+Σ_{k=1}^{n-1}(k+1)=n(n+1)/2 (삼각수). 1/a_k=2/(k(k+1))=2(1/k-1/(k+1)) 이므로 합은 2(1-1/16)=15/8. 계차 합 뒤 부분분수 망원까지 두 기법을 잇는 절차형(M_k 2)이고 Σ 상한 n-1 함정 하나. 시험 구역·통찰 없음·M 6·M_k 2 → ★3.
  tier: star_3
  mechanism_primary: "a_n=1+Σ_{k=1}^{n-1}(k+1)=n(n+1)/2 → 1/a_k=2(1/k-1/(k+1)) → Σ_{1}^{15}=2(1-1/16)=15/8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{15}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항·계차 f(n)=n+1(→ 2n+1 이면 a_n=n^2 라 부분분수 불가), 합의 상한 15. 제약: a_n 이 n(n+1)/2 처럼 이웃 정수의 곱 꼴로 인수분해되어야 망원이 되고 합은 정리된 분수."
    creative: "(1) Σ 1/a_k 대신 Σ 1/(a_k a_{k+1}) 처럼 부분분수 계수가 달라지는 꼴 ★3 (2) a_n 을 주지 않고 '삼각수' 의 역수 합 극한(2) 을 추측 → ★3 (3) 계차를 2^n 으로 바꾸면 a_n=2^n-1 이라 역수 합이 닫히지 않으므로 출제 불가 — 망원 제약 예시."
```

```yaml
- id: RPM-ALG-1109
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=4, a_{n+1}=a_n+2^{n-1} 로 정의된 수열에서 a_k=1027 이 되는 자연수 k. 단답형.
  category: "계차 등비합 → a_n=2^{n-1}+3 → 2^{k-1}=1024 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n+f(n) 꼴(계차 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n=4+Σ_{k=1}^{n-1}2^{k-1}=4+(2^{n-1}-1)=2^{n-1}+3. 2^{k-1}+3=1027 → 2^{k-1}=1024=2^10 → k=11. 계차 등비합과 지수 방정식의 표준 절차, 상한 n-1 함정 하나. 시험 구역·통찰 없음·M 5 → ★2.
  tier: star_2
  mechanism_primary: "a_n=4+Σ_{k=1}^{n-1}2^{k-1}=2^{n-1}+3 → 2^{k-1}=1024 → k=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 4·계차 밑 2·목표값 1027(=2^10+3). 제약: 목표값-상수 가 밑의 거듭제곱이어야 k 가 자연수. 밑을 3 으로 바꾸면 a_n=(3^{n-1}-1)/2+a_1 꼴이라 목표값을 그에 맞춤."
    creative: "(1) a_k=1027 대신 a_k>1000 최소 k(★2) (2) 계차를 2^{n-1} 에서 n·2^{n-1} 로 바꾸면 등차×등비 합 → ★3 (3) 초항을 모르는 채 a_5 를 주고 a_1 역산(★2)."
```

```yaml
- id: RPM-ALG-1110
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=1, a_{n+1}=3^n a_n 으로 정의된 수열의 log_9 a_12 의 값. 단답형.
  category: "비의 곱 → 지수 합 3^{1+2+…+(n-1)} → a_12=3^66 → 밑 변환"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n=a_1·3^1·3^2·…·3^{n-1}=3^{n(n-1)/2}, a_12=3^66. log_9 3^66=66/2=33. 비의 곱을 지수 합으로 모으고 로그 밑을 바꾸는 표준 절차, 곱의 상한 n-1 함정 하나. 시험 구역·통찰 없음·M 5 → ★2.
  tier: star_2
  mechanism_primary: "a_n=Π_{k=1}^{n-1}3^k=3^{n(n-1)/2} → a_12=3^66 → log_9 3^66=33"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$33$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3·로그 밑 9(밑의 거듭제곱이어야 정수)·항 번호 12(n(n-1)/2 가 로그 밑 지수의 배수). 제약: log_{b^m} b^{N} 이 정수가 되게 N 이 m 의 배수."
    creative: "(1) log_9 a_12 대신 a_12 의 양의 약수 개수(67)로 바꿔 정수론 결합 ★3 (2) a_{n+1}=3^n a_n 을 log 를 취해 b_{n+1}=b_n+n 계차형으로 바꾸는 서술 → I-RT d1 ★3 (3) 비를 (n+1)/n 으로 바꾸면 망원곱(★2)."
```

```yaml
- id: RPM-ALG-1111
  page: 153
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 a 이고 a_{n+1}/a_n=1-1/(n+1)^2 을 만족시키는 수열에서 a_10=11 일 때 a 의 값. 단답형.
  category: "비를 n(n+2)/(n+1)^2 으로 인수분해 → 두 망원곱 → a_n=a(n+1)/(2n) → a 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1-1/(n+1)^2 을 n(n+2)/(n+1)^2 으로 인수분해해 곱을 Π n/(n+1) 과 Π (n+2)/(n+1) 두 망원곱으로 갈라 닫음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a_{n+1}=a_n f(n) 꼴(비의 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비를 그대로 곱하면 안 닫히고, 1-1/(n+1)^2=n(n+2)/(n+1)^2 으로 갈라야 Π_{k=1}^{n-1}k/(k+1)=1/n, Π_{k=1}^{n-1}(k+2)/(k+1)=(n+1)/2 로 망원이 된다(EQV d1). a_n=a(n+1)/(2n), a_10=11a/20=11 → a=20. 시험 구역·통찰 1·M 7 → ★3.
  tier: star_3
  mechanism_primary: "a_{n+1}/a_n=n(n+2)/(n+1)^2 → a_n=a·(1/n)·((n+1)/2)=a(n+1)/(2n) → a_10=11a/20=11 → a=20"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 번호 10·값 11(a_10=11a/20 이 정수 a 를 주도록 값은 11 의 배수). 비를 1-1/n^2 (n≥2)로 바꾸면 a_n=a(n+1)/(2n) 꼴이 유지되나 시작 인덱스가 바뀜. 제약: 두 망원곱이 모두 닫혀야 하므로 (n+c)(n+d)/(n+1)^2 꼴 유지."
    creative: "(1) a_n 의 일반항을 서술로 묻기(★3) (2) 비를 (n+1)(n+3)/(n+2)^2 처럼 옮겨 시작항 처리 함정 추가(★3) (3) a_10 대신 lim 형 '충분히 큰 n 에서 a_n 이 가까워지는 값' 을 묻기(a/2) → I-EQV d2 ★4."
```

```yaml
- id: RPM-ALG-1112
  page: 154
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    a_1=1, a_{n+1}=a_n/(4a_n+1) 로 정의된 수열에서 a_k=1/41 이 되는 자연수 k. 단답형.
  category: "역수 취하기 → 1/a_{n+1}=1/a_n+4 등차 → a_n=1/(4n-3) → k"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분수 꼴 점화식의 양변에 역수를 취해 1/a_n 이 공차 4 인 등차수열이 되는 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "분수 꼴 점화식 — 역수 수열이 등차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1/a_{n+1}=(4a_n+1)/a_n=4+1/a_n 이므로 1/a_n=1+4(n-1)=4n-3, a_n=1/(4n-3). 4k-3=41 → k=11. 역수 변환을 떠올리는 EQV d1 이 전부이고 뒤는 등차 한 줄(M 4). 시험 구역·통찰 1 → ★3(역수형을 배운 학생에게는 ★2 체감 — 1105 와 짝).
  tier: star_3
  mechanism_primary: "a_{n+1}=a_n/(4a_n+1) → 1/a_{n+1}=1/a_n+4 → 1/a_n=4n-3 → 4k-3=41 → k=11"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 계수 4(공차)·초항 1·목표값 1/41(=1/(4k-3) 꼴). 제약: 점화식이 a_n/(pa_n+1) 꼴이어야 역수가 등차. 목표 분모가 초항 역수 + 공차 배수."
    creative: "(1) a_{n+1}=a_n/(4a_n+1) 대신 a_{n+1}=2a_n/(a_n+2) 처럼 역수가 등차이되 계수를 나눠야 하는 꼴 ★3 (2) a_{n+1}=a_n/(a_n+1) 과 a_1=1 로 Σ a_k a_{k+1} 망원합 결합 ★4 (3) 역수 대신 log 를 취해야 하는 a_{n+1}=a_n^2 형과 나란히 두는 전략 비교 세트 → I-SC ★3."
```

```yaml
- id: RPM-ALG-1113
  page: 154
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    첫째항 20 인 수열이 a_{n+1}=|a_n|-2 를 만족시킬 때 Σ_{n=1}^{30} a_n 의 값. 5지선다.
  category: "20, 18, …, 2, 0 등차 감소 → 0 이후 -2, 0 반복 → 두 구간 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_11=0 에 이른 뒤 |a_n|-2 가 -2, 0, -2, 0 … 주기 2 로 갇힘을 항 나열로 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수가 반복되는 수열(주기 찾기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n=22-2n (n≤11) 로 20 부터 2 씩 줄어 a_11=0, 그 뒤 a_12=-2, a_13=0, … 주기 2. 첫 10 항 합 110, a_11~a_30 의 20 항은 0 과 -2 가 10 개씩 → -20. 총 90. 등차 구간과 주기 구간의 경계(a_11=0)를 나누는 PD d1 과 항 개수 세기 함정. 시험 구역·통찰 1·M 6 → ★3.
  tier: star_3
  mechanism_primary: "a_n=22-2n (n≤11) → a_11=0 → 이후 -2, 0 반복 → 110+(-2)×10=90"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 20(짝수면 0 에 닿고 홀수면 -1, 1 반복)·감소량 2·합의 상한 30. 제약: 초항/감소량의 홀짝 조합이 주기 구간의 값을 정하므로 답을 다시 계산. 선택지는 이웃 값(88~96)으로 항 개수 실수를 잡음."
    creative: "(1) 초항을 홀수(21)로 바꿔 주기 값이 -1, 1 이 되게 하기(★3) (2) a_{n+1}=|a_n|-2 대신 |a_n-2|-1 처럼 절댓값 안에 항을 옮겨 주기가 3 이 되게 하기 → PD d2 ★4 (3) Σ 대신 a_n=0 이 되는 n 의 개수(30 이하)를 묻기(★2)."
```

```yaml
- id: RPM-ALG-1114
  page: 154
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    명제 p(n) 이 ㈎ p(1) 참, ㈏ p(k) 또는 p(k+1) 이 참이면 p(k+3) 참 을 만족시킬 때 반드시 참이라 할 수 없는 것(p(5)·p(6)·p(7)·p(8)·p(9)). 5지선다.
  category: "'또는' 조건을 전진 규칙 두 개(m→m+3, m→m+2 단 m≥2)로 해석 → p(1) 도달 집합 추적 → 미도달 항"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'p(k) 또는 p(k+1) 이 참이면 p(k+3)' 을 참인 m 에서 k=m(m+3)과 k=m-1(m+2, 단 m≥2)로 두 갈래 전진 규칙으로 재해석하고, m=1 에서는 k=0 이 자연수가 아니라 m+2 갈래가 없음을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "명제 p(n) 의 전파 조건 해석(귀납법의 원리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p(1) → (k=1) p(4). p(4) → p(7), (k=3) p(6). p(6) → p(9), p(8). p(7) → p(10), p(9). 도달 집합 {1, 4, 6, 7, 8, 9, 10, …}. p(5) 는 p(2) 또는 p(3) 이 있어야 하는데 둘 다 보장되지 않으므로 ①. '또는' 을 두 규칙으로 풀고 k≥1 경계에서 p(1) 만 갈래 하나가 빠짐을 읽는 EQV d2 가 핵심. 시험 구역·통찰 1 d2·M 6 → ★3.
  tier: star_3
  mechanism_primary: "㈏ = m 참 → m+3 참, m≥2 면 m+2 도 참 → 1→4→{6, 7}→{8, 9, 10}… → 5 미도달"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전진 폭 3(→ 4 면 미도달 항이 늘어남)과 보기 다섯 값. 제약: 정답 하나만 미도달이어야 하므로 도달 집합을 먼저 계산하고 보기 넷은 도달 항에서 고름. p(1) 대신 p(2) 를 참으로 주면 m+2 갈래가 처음부터 열려 도달 집합이 달라짐."
    creative: "(1) '반드시 참인 것' 을 고르는 긍정형(★3) (2) ㈎ 를 'p(1), p(2) 참' 으로 늘려 도달 집합이 5 이상 전체가 되는지 판단(★3) (3) 조건을 'p(k) 이고 p(k+1) 이면 p(k+3)' 으로 바꾸면 두 항 모두 필요해 도달 집합이 거의 비는 반례형 → I-BW d2 ★4."
```

```yaml
- id: RPM-ALG-1115
  page: 154
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    n^3+2n 이 3 의 배수임을 귀납법으로 증명하는 과정에서 (k+1)^3+2(k+1)=k^3+2k+3(㈎), 그리고 ㈏+3(㈎) 의 빈칸 ㈎=f(k), ㈏=g(m) 일 때 g(14)/f(4) 의 값. 단답형.
  category: "배수 명제 귀납 틀 읽기 → (k+1)^3+2(k+1) 전개 → 3(k^2+k+1) 분리 → 가정 3m 대입"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 배수 명제"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (k+1)^3+2(k+1)=k^3+3k^2+3k+1+2k+2=(k^3+2k)+3(k^2+k+1) 이므로 ㈎=k^2+k+1, 가정 k^3+2k=3m 으로 ㈏=3m. g(14)/f(4)=42/21=2. 세제곱 전개와 3 으로 묶기가 전부라 M_k 1. 시험 구역·통찰 없음·M 5 → ★2.
  tier: star_2
  mechanism_primary: "(k+1)^3+2(k+1)=(k^3+2k)+3(k^2+k+1) → ㈎=k^2+k+1, ㈏=3m → 42/21=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제(n^3+2n → n^3-n 은 6 의 배수, 4^n-1 은 3 의 배수), 대입값(14, 4). 제약: 전개 뒤 배수 항이 깔끔히 분리되어야 하고 g/f 가 정수."
    creative: "(1) 4^n-1 이 3 의 배수 꼴로 바꾸면 4^{k+1}-1=4(4^k-1)+3 분리가 핵심 → 같은 골조 ★2 (2) ㈏ 를 3m 대신 '3 의 배수임을 설명하는 문장' 서술로(★2) (3) n^3+2n 을 3 으로 나눈 나머지 표(n≡0, 1, 2)로 다른 증명을 비교하는 I-SC 세트 ★3."
```

```yaml
- id: RPM-ALG-1116
  page: 154
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    1/2+2/4+…+n/2^n=2-(n+2)/2^n 의 귀납 증명에서 n=1 일 때 양변 값 ㈎=a, 더하는 항 ㈏=f(k) 일 때 f(6a) 의 값. 단답형.
  category: "귀납 증명 틀 읽기 → n=1 양변 1/2 → 더하는 항 (k+1)/2^{k+1} → f(3)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (i) 좌변 1/2, 우변 2-3/2=1/2 → a=1/2. ㈏ 는 n=k+1 의 새 항 (k+1)/2^{k+1}. 6a=3 이라 f(3)=4/16=1/4. 틀 읽기 두 곳과 대입 한 번(M_s 2·M_k 1). 정리 2-(k+2)/2^k+(k+1)/2^{k+1}=2-(k+3)/2^{k+1} 은 틀이 이미 보여 준다. 시험 구역·통찰 없음·M 6·M_k 1 → ★2.
  tier: star_2
  mechanism_primary: "n=1 양변 1/2 → a=1/2 → 더하는 항 f(k)=(k+1)/2^{k+1} → f(6a)=f(3)=1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등식(1097 과 같은 c-(an+b)/r^n 꼴 · 밑 2 → 3), 대입 장치 6a(a 가 1/2 이라 정수 3). 제약: a 와 계수의 곱이 자연수여야 f 에 넣을 수 있고 답이 간단한 분수."
    creative: "(1) 정리 단계 2-(k+3)/2^{k+1} 을 빈칸으로 두어 통분을 요구(★2) (2) 우변을 주지 않고 S_1~S_4 로 추측 → 귀납 증명 서술 → I-PD d2 ★3 (3) 등식의 좌변을 Σ k/2^k 로 쓰고 (i) 단계에서 Σ 기호 해석을 묻기(★2)."
```

```yaml
- id: RPM-ALG-1117
  page: 155
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    n≥2 에서 1+1/√2+…+1/√n>2-1/√n 의 귀납 증명에서 n=k+1 목표식 ㈎ 와 2/√(k+1)-1/√k 의 분자 ㈏ 조합 고르기. 5지선다.
  category: "부등식 귀납 틀 읽기 → 목표식 2-1/√(k+1) → 2/√(k+1)-1/√k 통분 → 분자 2√k-√(k+1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 증명 빈칸 채우기 — 부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 는 n=k+1 의 우변 2-1/√(k+1)(③④⑤로 압축). (2-1/√k+1/√(k+1))-㈎=2/√(k+1)-1/√k 를 √k√(k+1)=√(k^2+k) 로 통분하면 분자 2√k-√(k+1)(④). 분모가 √(k^2+k) 로 주어져 통분 방향은 정해지지만 무리식 통분과 부호 확인(2√k>√(k+1) ⇔ 4k>k+1)이 M_k 2. 시험 구역·통찰 없음·M 7·M_k 2 → ★3(1100 과 같은 골조인데 level 이 없어 한 단 위).
  tier: star_3
  mechanism_primary: "㈎=2-1/√(k+1) → 2/√(k+1)-1/√k=(2√k-√(k+1))/√(k^2+k)>0 → ㈏=2√k-√(k+1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등식(1/√k 합 > 2-1/√n → > √n 형처럼 다른 고전 부등식), 시작값 2. 제약: 통분 뒤 분자의 부호가 k≥시작값 에서 확정되어야 하고 보기의 오답은 부호 반전·k↔k+1 혼동으로 구성."
    creative: "(1) ㈏ 의 부호가 양수인 이유(4k>k+1)를 서술로 묻기(★3) (2) 우변 2-1/√n 대신 2√n-2 처럼 다른 하한을 주어 통분 대상이 바뀌는 변형(★3) (3) 증명 틀 없이 부등식만 주고 귀납법 서술 → M_s 3 ★4."
```
```yaml
- id: RPM-ALG-1118
  page: 155
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    성냥개비로 [1단계] 정사각형 1 개, [2단계] 3 개(2+1), [3단계] 6 개(3+2+1), … 피라미드 모양을 만들 때 필요한 성냥개비 개수 a_n 에 대한 a_n 과 a_{n+1} 의 관계식. 단답형(관계식).
  category: "그림 단계 차이 읽기 → 새 밑줄 n+1 칸 추가 → 가로 (n+1)+1 · 세로 n+2 → a_{n+1}=a_n+2n+4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "[n+1단계] 를 [n단계] 아래에 n+1 칸 밑줄을 덧붙인 것으로 보고, 새 밑줄에서 위 줄과 공유하지 않는 성냥(가로 n+2 · 세로 n+2)을 세어 증가량 2n+4 를 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_1=4, a_2=10, a_3=18, a_4=28 로 세면 차 6, 8, 10 → a_{n+1}=a_n+2n+4. 구조로 보면 새 밑줄 n+1 칸은 아래 가로 n+1, 세로 n+2, 위 줄과 안 겹치는 가로 1 → 2n+4. 항을 4 개 세어 계차를 추측하는 길과 구조를 읽는 길 모두 규칙 발견(PD d2)이 핵심이고 계산은 없다. 시험 구역·통찰 1 d2·M 6 → ★3.
  tier: star_3
  mechanism_primary: "a_1~a_4 = 4, 10, 18, 28 → 차 6, 8, 10 = 2n+4 → a_{n+1}=a_n+2n+4 (구조: 새 밑줄 가로 n+2 + 세로 n+2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a_{n+1}=a_n+2n+4\ (n=1,\,2,\,3,\,\cdots)$'
  answer_source: "답지"
  figure: crop:fig-1118.png
  latex: latex-bank/rpm-alg/items/1118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림은 고정(단계별 정사각형 피라미드). 묻는 것을 관계식 대신 a_10 이나 a_n 일반항(n^2+3n)으로 바꿀 수 있음. 제약: 그림을 바꾸면(정삼각형 피라미드 → 증가량 2n+1, 한 줄 정사각형 → 3) 계차를 다시 세야 하고 관계식 답이 유일해야 함."
    creative: "(1) 정삼각형 성냥 피라미드(a_{n+1}=a_n+2n+1)·정육각형 사슬 등 도형 교체(★3) (2) 성냥 대신 '정사각형의 개수' 나 '꼭짓점 개수' 를 수열로 두어 같은 그림에서 다른 계차 읽기 → ★3 (3) 관계식 없이 a_n≥200 인 최소 n 을 묻기(일반항 + 부등식) ★4."
```

```yaml
- id: RPM-ALG-1119
  page: 155
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    수직선 위 점 P_n 이 ㈎ P_1(0), P_1P_2=1, ㈏ P_nP_{n+1}=(n-1)/(n+1)·P_{n-1}P_n (n≥2) 로 정해질 때, 선분 P_nP_{n+1} 을 밑변·높이 1 인 직각삼각형 넓이 S_n 의 Σ_{n=1}^{10} S_n=q/p 에서 p+q. 단답형.
  category: "길이 수열 d_n 점화식 → 비의 곱 망원 d_n=2/(n(n+1)) → S_n=1/n-1/(n+1) → 망원합 10/11"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점의 배치 조건 ㈏ 를 선분 길이 수열 d_n=P_nP_{n+1} 의 비의 곱 점화식으로 옮기고 넓이 S_n=d_n/2 로 수열 문제로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    d_1=1, d_n/d_{n-1}=(n-1)/(n+1) 이므로 d_n=Π_{k=2}^{n}(k-1)/(k+1)=(1·2·…·(n-1))/(3·4·…·(n+1))=2/(n(n+1)). S_n=d_n/2=1/(n(n+1))=1/n-1/(n+1), 합은 1-1/11=10/11 → p+q=21. 기하 설정을 수열로 옮기는 RT d1 뒤 망원곱과 망원합을 잇는 긴 절차(M_s 3). 시험 구역·통찰 1·M 8 → ★3.
  tier: star_3
  mechanism_primary: "d_n=(n-1)/(n+1)·d_{n-1}, d_1=1 → d_n=2/(n(n+1)) → S_n=1/n-1/(n+1) → Σ_{1}^{10}=10/11 → 21"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$21$"
  answer_source: "답지"
  figure: crop:fig-1119.png
  latex: latex-bank/rpm-alg/items/1119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 (n-1)/(n+1) → (n-1)/(n+2) 면 망원곱이 세 항 남아 d_n=6/(n(n+1)(n+2)) 로 부분분수 계수가 바뀜. 높이 1·합의 상한 10·P_1P_2=1. 제약: 비가 (n+a)/(n+b) 꼴로 망원이 되어야 하고 q/p 가 기약분수."
    creative: "(1) 높이를 n 으로 두어 S_n=d_n·n/2=1/(n+1) 로 망원이 깨지게 하면 다른 합 공식 필요 → I-SC ★4 (2) P_n 의 좌표(Σ d_k=2-2/(n+1))를 묻기 ★3 (3) 삼각형 대신 P_nP_{n+1} 을 지름으로 하는 반원 넓이 → π 계수 처리 ★3."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-1120
  page: 156
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a_1=-100, a_{n+1}=a_n+3 으로 정의된 등차수열의 첫째항부터 제n항까지의 합 S_n 의 최솟값. 서술형 단답.
  category: "등차 일반항 3n-103 → 음수 항까지 더할 때 최소 → a_34=-1 → S_34"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'S_n 최소' 를 '마지막 음수(또는 0) 항까지 더한 합' 으로 바꿔 a_n≤0 인 최대 n 을 찾는 문제로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "귀납적 정의에서 등차수열의 일반항 → 합의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n=-100+3(n-1)=3n-103. a_n≤0 ⇔ n≤34.3… 이므로 a_34=-1<0<a_35=2, S_34=34(-100-1)/2=-1717. 최소 조건을 항의 부호로 바꾸는 EQV d1 과 경계 n=34 확인(T-경계). 서술형 주관식 ★3 출발·통찰 1·M 5 → ★3(등차수열 단원의 표준형이라 ★2 체감).
  tier: star_3
  mechanism_primary: "a_n=3n-103 → a_n≤0 인 최대 n=34 → S_34=34(-100+(-1))/2=-1717"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-1717$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 -100·공차 3. 제약: 3n-103=0 이 자연수 해를 갖지 않아 최소가 유일함(a_n=0 인 n 이 있으면 S_{n-1}=S_n 두 곳). 합이 정수."
    creative: "(1) 초항·공차를 바꿔 a_n=0 이 되는 n 을 만들면 최솟값을 주는 n 이 두 개 → T-경계 함정 ★3 (2) S_n 최솟값 대신 S_n<0 인 n 의 개수(★3) (3) 점화식을 a_{n+1}=a_n+3 대신 S_{n+1}-S_n=3n-100 으로 감추기 → EQV d2 ★4."
```

```yaml
- id: RPM-ALG-1121
  page: 156
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a_1=3, a_{n+1}=-2a_n 으로 정의된 수열에서 a_n>300 을 만족시키는 자연수 n 의 최솟값. 서술형 단답.
  category: "등비 일반항 3·(-2)^{n-1} → 양수는 홀수 항 → 3·2^{n-1}>300 → 홀수 n 최소"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "귀납적 정의에서 등비수열의 일반항 → 부등식을 만족하는 최소 n"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n=3·(-2)^{n-1}. a_n>300 이려면 양수여야 하므로 n 홀수, 3·2^{n-1}>300 ⇔ 2^{n-1}>100 ⇔ n≥8. 홀수 중 최소 n=9(a_9=768). 공비 음수라 홀짝을 따지는 부호 함정(T-부호)이 채점 포인트이고 나머지는 지수 부등식 한 줄. 서술형 주관식 ★3 출발·통찰 없음·M 5 이나 M_s 2 골조 유지 → ★3(★2 체감).
  tier: star_3
  mechanism_primary: "a_n=3·(-2)^{n-1} → 양수 조건 n 홀수 → 2^{n-1}>100 → n≥8 → 홀수 최소 9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 3·공비 -2·경계 300. 제약: 2^{n-1}>100/3 의 경계가 짝수 n 에서 넘어가도록(n=8) 두어 홀수 보정이 답을 바꾸게 함. 공비를 양수로 바꾸면 부호 함정이 사라져 ★2."
    creative: "(1) a_n<-300 최소 n(짝수 항) 으로 뒤집기(★3) (2) |a_n|>300 으로 바꿔 부호 함정 제거(★2) (3) Σ_{k=1}^{n} a_k>300 최소 n 으로 바꾸면 등비합 부호 교대 → ★4."
```

```yaml
- id: RPM-ALG-1122
  page: 156
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    a_1=1, S_n=n^2 a_n (n≥1) 이 성립하는 수열의 a_10 의 값. 서술형 단답.
  category: "S_n 차분 → (n^2-1)a_n=(n-1)^2 a_{n-1} → a_n/a_{n-1}=(n-1)/(n+1) → 망원곱 2/(n(n+1))"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 관계식으로 정의된 수열 — 차분 → 비의 곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n≥2 에서 a_n=S_n-S_{n-1}=n^2 a_n-(n-1)^2 a_{n-1} → (n-1)(n+1)a_n=(n-1)^2 a_{n-1} → a_n/a_{n-1}=(n-1)/(n+1). 곱하면 a_n=2/(n(n+1)), a_10=1/55. 차분 → 인수분해 약분 → 망원곱의 세 기법을 잇는 긴 절차(M_s 3·M_k 2)와 n≥2 범위 함정. 서술형 주관식 ★3·M 7 → ★3.
  tier: star_3
  mechanism_primary: "S_n=n^2 a_n 차분 → (n^2-1)a_n=(n-1)^2 a_{n-1} → a_n/a_{n-1}=(n-1)/(n+1) → a_n=2/(n(n+1)) → a_10=1/55"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{55}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 1·묻는 항 10. S_n=n^2 a_n 의 계수를 (n+1)^2 이나 n(n+1)/2 로 바꾸면 비가 달라지므로 망원이 되는지 확인. 제약: (n-1) 인수가 약분되어 비가 (n+a)/(n+b) 꼴이어야 함."
    creative: "(1) a_10 대신 Σ a_k (부분분수 망원합 2n/(n+1)) 묻기 ★3 (2) S_n=n^2 a_n 을 '평균 S_n/n=n a_n' 으로 서술해 조건 해석 추가 → EQV d1 ★3 (3) S_n=(n+1)^2 a_n 처럼 (n-1) 약분이 안 되는 계수로 바꿔 출제 불가 사례 확인(변형 제약 교육용)."
```

```yaml
- id: RPM-ALG-1123
  page: 156
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    3+7+11+…+(4n-1)=2n^2+n 이 모든 자연수 n 에서 성립함을 수학적 귀납법으로 증명하기. 서술형(풀이 참조).
  category: "등식 귀납 증명 서술 → n=1 확인 → 가정에 4k+3 더해 2k^2+5k+3=2(k+1)^2+(k+1) 정리"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 귀납법 등식 증명 서술"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (i) n=1: 양변 3. (ii) 가정 3+…+(4k-1)=2k^2+k 의 양변에 4(k+1)-1=4k+3 을 더하면 2k^2+5k+3=(k+1)(2k+3)=2(k+1)^2+(k+1). 인수분해 한 줄이라 M_k 1. 서술형 주관식 ★3 출발·통찰 없음·M 5 이나 M_s 2 골조라 출발점 유지 → ★3. [분류 이슈] 같은 골조의 1097(level 중·통분 필요)이 ★2 인데 이 문항은 그보다 쉬운 등차합 등식이라 ★2 후보 — 구역 출발점만으로 한 단 위에 놓임.
  tier: star_3
  mechanism_primary: "n=1 확인 → 가정 + (4k+3) → 2k^2+5k+3=2(k+1)^2+(k+1) → n=k+1 성립"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등차수열(첫항 3·공차 4)을 바꾸면 우변 n(첫항+끝항)/2 를 정리한 이차식으로 함께 바꿈. 제약: 우변이 n 의 이차식으로 닫히고 2(k+1)^2+(k+1) 꼴 정리가 인수분해 한 줄."
    creative: "(1) 채점 기준(n=1 확인·가정·n=k+1 정리) 중 하나를 빠뜨린 답안을 주고 오류 찾기 → ★3 (2) 등비합·Σk^2 등식으로 바꾸면 정리 부담 상승(★3) (3) 우변을 주지 않고 합을 추측한 뒤 증명 → I-PD d2 ★3~4."
```

### 실력 Up

```yaml
- id: RPM-ALG-1124
  page: 156
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    ㈎ a_1=2, ㈏ a_{k+1}=a_k+3 (k=1, 2, 3), ㈐ a_{k+4}=3a_k 를 만족시키는 수열의 Σ_{k=1}^{48} a_k. 5지선다.
  category: "4 항 블록(2, 5, 8, 11 · 합 26) → 블록마다 3 배 → 블록 합 등비 26·3^{m-1} → 12 블록 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈏ 가 처음 4 항만 정하고 ㈐ 가 4 칸 건너 3 배를 준다는 것을 합쳐 '48 항 = 4 항 블록 12 개, 블록 합이 공비 3 등비' 라는 구조를 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "블록 등비 구조 점화식의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a_1~a_4=2, 5, 8, 11(합 26). ㈐ 로 a_5~a_8 은 그 3 배, 일반적으로 m 번째 블록 합은 26·3^{m-1}. 48=4·12 이므로 Σ=26(3^12-1)/(3-1)=13(3^12-1). 조건 셋을 블록 구조 하나로 읽는 PD d2 뒤 등비합 한 줄(M_k 1). 실력 Up ★4 출발·통찰 1 d2·M 6 → ★4 유지(블록 등비형은 교육청 표준 유형이라 ★3 체감 — 이슈 표 기록).
  tier: star_4
  mechanism_primary: "블록 (2, 5, 8, 11) 합 26 → a_{k+4}=3a_k 로 블록 합 26·3^{m-1} → 12 블록 → 26(3^12-1)/2=13(3^12-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초항 2·블록 내 공차 3·블록 배율 3·합의 상한 48(블록 길이 4 의 배수). 제약: 상한이 블록 길이의 배수가 아니면 남는 항을 따로 더해야 함(그 경우 T-경계 추가). 선택지는 블록 합 26/2=13 과 지수 12 를 섞어 구성."
    creative: "(1) 상한을 50 으로 두어 남는 두 항(a_49, a_50=2·3^12, 5·3^12)을 더하게 하기 → T-경계 ★4 (2) ㈐ 를 a_{k+4}=a_k+3 (블록 간 등차)로 바꾸면 전체가 4 항 주기 등차 합 → ★3 (3) 블록 길이를 모르게 ㈏ 를 '어떤 m 에 대해 k≤m' 으로 주고 a_7 값으로 m 결정 → I-BW ★4~5."
```

```yaml
- id: RPM-ALG-1125
  page: 156
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    a_{n+1}= a_n (a_n>n) 또는 3n-2-a_n (a_n≤n) 인 조건 분기 점화식에서 a_5=5 가 되도록 하는 모든 a_1 의 값의 곱. 5지선다.
  category: "a_5=5 에서 역추적 → 각 단계 두 갈래(유지/반사) → 케이스 조건으로 기각 → a_1 후보 네 개 곱"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과 a_5=5 에서 a_4, a_3, a_2, a_1 로 거슬러 가며 각 단계에서 '유지(a_n>n)' 와 '반사(a_n≤n → 3n-2-a_n)' 두 갈래의 원인값을 역산"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역산한 후보를 그 갈래의 조건(a_n>n 또는 a_n≤n)에 재대입해 기각(a_4=5 반사 갈래, a_2=-1 의 두 갈래, a_3=2 유지 갈래 등) — 기각이 없으면 곱이 달라짐"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건 분기 점화식의 역추적(a_1 결정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a_5=5 ← a_4: 유지 a_4=5 (5>4 ✓), 반사 10-a_4=5 → a_4=5 인데 5≤4 ✗. a_4=5 ← a_3 ∈ {5, 2}. a_3=5 ← a_2 ∈ {5, -1}, a_3=2 ← a_2=2. a_2=5 ← a_1 ∈ {5, -4}, a_2=-1 ← 없음, a_2=2 ← a_1 ∈ {2, -1}. 곱 5·(-4)·2·(-1)=40. 역추적 트리(BW d2)에 각 노드마다 조건 재검증으로 가지를 쳐내는 VF d2 가 결합. 실력 Up ★4 출발·통찰 2·M 9 → ★4(★5 는 통찰 3 이상 필요).
  tier: star_4
  mechanism_primary: "a_5=5 → a_4=5 → a_3∈{5, 2} → a_2∈{5, -1, 2} → 조건 검증으로 a_1∈{5, -4, 2, -1} → 곱 40"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 a_5=5·반사식 3n-2-a_n 의 계수·경계 a_n>n. 제약: 역추적 트리의 기각 결과가 바뀌므로 후보 집합과 곱을 처음부터 다시 계산해야 하고, 후보에 0 이 섞이면 곱이 0 이 되어 변별력이 사라짐."
    creative: "(1) '합' 이나 '개수' 로 묻기(★4) (2) 경계를 a_n≥n 으로 바꾸면 기각되는 가지가 달라짐 → 같은 골조 ★4 (3) a_1 이 자연수라는 조건을 추가해 후보를 더 걸러내면 VF 가 한 층 더 → ★4~5 (SC/VF 조건 충족)."
```

```yaml
- id: RPM-ALG-1126
  page: 156
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    수직선 위에서 P_{n+2} 가 선분 P_nP_{n+1} 을 2:3 으로 내분하는 점이고 P_1(0), P_2(8) 일 때 P_5 의 좌표. 단답형.
  category: "내분점 공식 → x_{n+2}=(3x_n+2x_{n+1})/5 → x_3, x_4, x_5 순서 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표 단원의 내분점 공식(m:n 내분 → (n·x_n+m·x_{n+1})/(m+n))으로 세 항 점화식 x_{n+2}=(3x_n+2x_{n+1})/5 를 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "귀납적 정의의 활용 — 상황·도형에서 점화식 세우기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x_{n+2}=(3x_n+2x_{n+1})/5. x_3=16/5, x_4=(24+32/5)/5=152/25, x_5=(48/5+304/25)/5=544/125. 내분 비 2:3 을 가중치 3:2 로 뒤집어 쓰는 표기 함정(T-표기)과 분수 세 번(M_k 2). 실력 Up ★4 출발·통찰 1 d1(XU)·M 6 → 규칙상 ★4 유지. [분류 이슈] 골조는 공식 대입 3 회의 절차형이라 ★3 후보(x_{n+2}-x_{n+1}=-(3/5)(x_{n+1}-x_n) 등비 차로 일반항까지 가면 ★4).
  tier: star_4
  mechanism_primary: "2:3 내분 → x_{n+2}=(3x_n+2x_{n+1})/5 → 16/5 → 152/25 → 544/125"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$\dfrac{544}{125}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/1126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분 비 2:3(→ 1:2 면 분모 3^k)·P_2(8)·묻는 항 5. 제약: 분모가 (m+n)^{k} 로 커지므로 묻는 항을 5~6 이내로 두고, 좌표 8 은 분자가 정수로 정리되게 5 와 서로소여도 됨."
    creative: "(1) P_n 의 일반항(차 d_n=8·(-3/5)^{n-1} → x_n=5-5·(-3/5)^{n-1})을 묻기 → I-EQV d2 ★4 (2) 외분점으로 바꾸면 부호 처리 함정 추가 ★4 (3) 평면 위 점으로 확장해 x, y 좌표 각각 같은 점화식 → M_a 상승 ★4."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 2 · ★2 19 · ★3 15 · ★4 3 · ★5 0
- 통찰형 4(1114 · 1118 · 1124 · 1125) · 절차형 35 · premium 0. insights 가 비어 있지 않은 문항은 17(depth 1 통찰 13 + depth 2 통찰 4).
- 통찰 유형: I-EQV 8(1092 · 1093 · 1100 · 1103 · 1111 · 1112 · 1114 · 1120) · I-PD 5(1090 · 1101 · 1113 · 1118 · 1124) · I-XU 2(1107 · 1126) · I-RT 1(1119) · I-BW 1(1125) · I-VF 1(1125) · depth 2 는 1114(EQV) · 1118(PD) · 1124(PD) · 1125(BW+VF) 네 문항
- type_hint 상위: 「수학적 귀납법 증명 빈칸 채우기」 9(등식 5 · 부등식 3 · 배수 명제 1) · 「귀납적 정의의 활용 — 상황·도형에서 점화식 세우기」 6 · 「S_n 관계식으로 정의된 수열」 5 · 「귀납적 정의에서 등차·등비수열의 일반항」 5(합의 최솟값 · 최소 n 변형 포함) · 「명제 p(n) 의 전파 조건 해석(귀납법의 원리)」 3 · 그 밖에 계차 합 2 · 비의 곱 2 · 등식 증명 서술 2
- 벤더 출발점에서 조정한 문항: −1 → 1094 · 1095(유형 09 대표·중하 빈칸 읽기, M_s 1) · 1102(유형 UP 이나 문장 번역 한 줄). 그 외는 구역 출발점 유지. 시험에 꼭 나오는 문제 16 문은 통찰 또는 M_total ≥ 6·M_k ≥ 2 인 9 문을 ★3, 나머지 7 문을 ★2 로 갈랐다.
- 그림: 3문(`crop:fig-1101.png` · `crop:fig-1118.png` · `crop:fig-1119.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-1102 | 유형 UP 11 구역(★3 출발)이나 문장 한 줄을 점화식으로 옮기는 M 4 읽기형. −1 로 ★2 라벨을 두었으나 교과서 정의 세우기와 같은 골조라 ★1 후보(출발점과 2단 어긋남) | ★1 / ★2 |
| RPM-ALG-1112 | 역수 변환을 I-EQV d1 로 인정해 ★3. 분수 꼴 점화식을 배운 학생에게는 표준 기법이라 절차형 ★2 로 볼 여지 있음(1105 는 역수 차가 직접 주어져 ★2) | ★2 / ★3 |
| RPM-ALG-1117 | 1100 과 같은 부등식 빈칸 골조(통분·부호 확인)인데 1100 은 벤더 level 중 → ★2, 1117 은 level 없음 → 시험 구역 규칙(M ≥ 6·M_k ≥ 2)으로 ★3. 카탈로그에서 base ★ 를 하나로 통일할 것 | ★2 / ★3 |
| RPM-ALG-1123 | 서술형 주관식 구역(★3 출발)이나 등차합 등식 증명은 같은 골조의 1097(★2)보다 쉬움. 라벨 ★3 유지, ★2 후보 | ★2 / ★3 |
| RPM-ALG-1124 | 실력 Up ★4 라벨이나 블록 등비 구조(PD d2) 하나·M 6·등비합 한 줄. 교육청 표준 유형이라 ★3 후보 | ★3 / ★4 |
| RPM-ALG-1126 | 실력 Up ★4 라벨이나 내분점 공식(XU d1) 대입 3 회의 절차형 M 6. ★3 후보 — 실력 Up 구역에서 유일하게 통찰 depth 2 가 없는 문항 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 여섯 갈래로 모인다: (a) 귀납법 증명 빈칸 채우기 — 등식(1094 · 1095 · 1096 · 1098 · 1116) / 부등식(1099 · 1100 · 1117) / 배수 명제(1115) (b) 귀납적 정의의 활용 — 상황·도형에서 점화식 세우기(1101 · 1102 · 1103 · 1118 · 1119 · 1126) (c) S_n 관계식으로 정의된 수열(1088 · 1089 · 1090 · 1091 · 1122) (d) 등차·등비의 귀납적 정의 ↔ 일반항(1104 · 1105 · 1106 · 1120 · 1121 — 1/2 범위 유형 01·02 와 같은 갈래) (e) 명제 전파 조건 해석(1092 · 1093 · 1114) (f) 계차 합·비의 곱(1108 · 1109 · 1110 · 1111 — 1/2 범위 유형 03·04 와 같은 갈래).
- 따로 세워야 할 유형: 「빈칸 채우기 — 부등식」은 등식형과 달리 두 부등식 연결·하한 만들기(통분·AM-GM 꼴)가 들어가 base ★ 가 한 단 높음(★2~3). 「명제 전파 조건 해석」은 '또는' 조건·경계 k≥1 처리(1114)에서 EQV d2 가 나오므로 ★2(1092 · 1093)와 ★3(1114) 두 층. 「조건 분기 점화식의 역추적」(1125)은 BW+VF 로 ★4 슬롯 후보이며 1/2 범위의 「조건 분기 점화식의 매개변수 결정」(1084)과 묶어 한 유형의 정방향·역방향으로 둘 수 있음. 「블록 등비 구조의 합」(1124)은 주기 수열(유형 06)과 등비합의 결합이라 별도 유형. 「분수 꼴 점화식 — 역수」(1112)와 「조건식(판별식)에서 점화식 유도」(1107)는 이 범위에 하나씩뿐이라 카탈로그에 넣을지 다음 단원(수열의 극한·수능형)과 함께 결정.
- 통합해도 될 유형: 「상황을 점화식으로 번역」(1102 · 1103)과 「도형 규칙 → 점화식」(1101 · 1118)은 같은 「귀납적 정의의 활용」의 문장형/도형형이며, 1119 · 1126 처럼 세운 뒤 합·항까지 구하는 문항은 같은 유형의 ★ 상위 슬롯으로 두면 됨. 「S_n 관계식」 다섯 문항은 차분 뒤 등비(1088 · 1089 · 1091)/주기(1090)/비의 곱(1122)으로 갈리지만 차분 골조가 같으므로 한 유형의 변형으로 통합 가능. 「등식 증명 서술」(1097 · 1123)은 빈칸형(a)과 같은 base ★ 에 서술 가산 없이 두는 편이 1097(★2)과 정합.
- 시험에 꼭 나오는 문제 구역은 level 이 없어 이 파일에서는 M·통찰 규칙으로 ★2/★3 을 갈랐다. 카탈로그가 생기면 1108 · 1117(절차형 M_k 2 → ★3)과 1112(통찰 d1 → ★3)의 ★3 이 base ★ 와 맞는지 먼저 재산정할 것.
