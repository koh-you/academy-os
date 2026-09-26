---
name: mechanism-데이터-고쟁이-CH06-명제
description: 고쟁이 공통수학2 (2022개정) CH06 명제 STEP 2·STEP 3 전문항 정독 mechanism 데이터 (75문항, 절대부등식 22문 포함). 학습 목적, 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: 고쟁이 공통수학2 (2022개정)
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-ST
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# mechanism-데이터-고쟁이-CH06-명제

**출처**: 고쟁이 공통수학2 (2022개정) CH06 명제
**범위**: STEP 2 심화 유형 (#402~#454) + STEP 3 최고난도 유형 (#455~#476)
**작업일**: 2026-07-14 · 세션 41+
**저작권**: 고쟁이 본문 인용 금지 · 학습 목적 mechanism 추출만
**용도**: bank/mechanism-은행.md에 병합될 CM2-ST(명제) 라인 mechanism 시드

---

## 1. 문항 개수·페이지 요약

| 구분 | 페이지 | 문항 범위 | 문항 수 | 유형 분류 |
|---|---|---|---|---|
| STEP 2 유형 01 | p.112~113 | #402~#412 | 11문 | 명제와 조건 |
| STEP 2 유형 02 | p.114 | #413~#417 | 5문 | '모든'·'어떤' 명제 |
| STEP 2 유형 03 | p.115 | #418~#421 | 4문 | 명제의 역·대우 |
| STEP 2 유형 04 | p.116~117 | #422~#428 | 7문 | 충분조건·필요조건 |
| STEP 2 유형 05 | p.117~118 | #429~#432 | 4문 | 대우증명·귀류법 |
| STEP 2 유형 06 | p.119~123 | #433~#454 | 22문 | 절대부등식 |
| **STEP 2 소계** | | | **53문** | |
| STEP 3 최고난도 | p.125~131 | #455~#476 | 22문 | 전체 통합 |
| **STEP 3 소계** | | | **22문** | |
| **CH06 합계** | | | **75문** | |

**Notes**:
- 스키마 학습(p.124)은 문항이 아니므로 제외.
- CH06는 "집합과 명제" 대단원의 하위 챕터로, 절대부등식이 22문(41%)으로 최대 비중.
- STEP 3는 유형 경계 없이 통합 심화 배치.

---

## 2. STEP 2 전 문항 YAML

### 2.1 유형 01 명제와 조건 (#402~#412)

```yaml
- source: 고쟁이-CH06-STEP2-#402
  page: 112
  problem_summary: |
    조건 "집합 X의 원소 중 10보다 작은 수는 많아야 4개이다."의 부정을
    올바로 표현한 것을 선지 5개에서 고르기.
  solution_summary: |
    "많아야 4개" = 0~4개. 부정은 "적어도 5개는 10보다 작다."
    수량 조건("많아야 N개") 부정의 언어적 정확성 요구.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "수량 조건 부정의 언어적 정밀화"
  mechanism_secondary: ["부정 자체", "'많아야'·'적어도' 대응"]
  depth_conditions: ["'많아야 4' ↔ '적어도 5' 대응 인지"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 1
  common_mistakes:
    - "'많아야 4'의 부정을 '적어도 4'로 오인"
    - "부등호 방향(<↔≥) 실수"
  condition_layers:
    surface: "조건문 부정"
    real: "수량 표현의 논리적 부정"
    interaction: "언어 표현 ↔ 수학 논리"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#403
  page: 112
  problem_summary: |
    보기 ㄱ~ㅁ 5개 명제의 참·거짓 판별. 예: "x<y<0이면 1/x>1/y",
    "x²>y²이면 x>y", "x²+y²=0이면 |x|+|y|=0" 등.
  solution_summary: |
    ㄱ: xy>0으로 양변 나누기 → 참. ㄴ: 반례 x=-2,y=1로 거짓.
    ㄷ: x=y=0이므로 참. ㄹ: x²-5x+6=0 인수분해 반례 x=2 → 거짓.
    ㅁ: 반례 x=0,y=2 → 거짓. 답: ㄱ,ㄷ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "5명제 개별 참·거짓 판별"
  mechanism_secondary: ["반례 발견", "역·대우 활용"]
  depth_conditions: ["부호 조건(x,y<0)에서 부등호 방향 뒤집기", "제곱 조건에서 부호 자유도"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 5
  common_mistakes:
    - "x²>y² → x>y로 잘못 판단 (절댓값 관계 무시)"
    - "ㅁ의 대우 x<1 or y<1 → x+y<2 오해"
  condition_layers:
    surface: "5개 명제 판별"
    real: "각 명제의 논리 구조 · 반례 후보 탐색"
    interaction: "부등식 조작 · 인수분해 · 절댓값"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#404
  page: 112
  problem_summary: |
    두 집합 A,B에 대한 명제 ㄱ~ㅁ 5개의 거짓만 고르기.
    예: n(A)=0이면 A=∅, A⊂B이면 n(A)<n(B), n(A-B)=0이면 n(A)=n(B) 등.
  solution_summary: |
    ㄱ: 참. ㄴ: 반례 A={1},B={2}. ㄷ: A=B일 수 있어 <는 거짓.
    ㄹ: A⊂B이고 n(A)≥n(B)이면 n(A)=n(B) → A=B (참).
    ㅁ: A-B=∅ → A⊂B → n(A)≤n(B) (거짓, =는 아님). 답: ㄴ,ㄷ,ㅁ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "집합 원소 개수 명제 판별"
  mechanism_secondary: ["부분집합 정의 정확 사용", "차집합 성질"]
  depth_conditions: ["A⊂B의 등호 포함 여부", "n(A-B)=0 ↔ A⊂B"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 5
  common_mistakes:
    - "A⊂B → n(A)<n(B) 오인 (등호 무시)"
    - "n(A-B)=0을 A=B로 오해"
  condition_layers:
    surface: "명제 5개 개별 판별"
    real: "집합 정의·연산 정합 확인"
    interaction: "부분집합 · 차집합 · 원소 개수 통합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#405
  page: 112
  problem_summary: |
    U={x|x는 10 이하 자연수}, p: x는 소수. 명제 ~p→q가 참이 되도록
    하는 집합 Q의 개수를 구하시오. [교육청 기출]
  solution_summary: |
    P={2,3,5,7}, P^C={1,4,6,8,9,10}. ~p→q 참 ⇔ P^C⊂Q.
    Q는 P^C의 6원소를 반드시 포함. 나머지 4원소(2,3,5,7)는 자유.
    개수 = 2^4 = 16.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "진리집합 포함관계 → 부분집합 개수 세기"
  mechanism_secondary: ["여집합 조건", "명제 참 조건 ↔ 부분집합"]
  depth_conditions: ["~p→q 참 ⇔ P^C⊂Q", "나머지 원소 자유 대응"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "P⊂Q로 오인 (부정 놓침)"
    - "2^k에서 k 결정 오류"
  condition_layers:
    surface: "집합 Q 개수"
    real: "명제 참 조건의 집합 표현 + 조건부 부분집합 계수"
    interaction: "명제 · 여집합 · 부분집합 개수 (CB 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#406
  page: 112
  problem_summary: |
    p: x≤2 또는 x≥5, q: -3≤x≤k. 명제 ~q→p의 반례가 정수 x=4뿐일 때,
    실수 k의 값의 범위를 구하시오. (k>-3)
  solution_summary: |
    반례가 될 값은 Q^C의 원소이면서 P^C의 원소.
    Q^C={x|x<-3 or x>k}, P^C={x|2<x<5}.
    Q^C∩P^C에 정수인 원소가 x=4뿐 → 3≤k<4.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "반례 집합 = Q^C∩P^C 구간 결정"
  mechanism_secondary: ["구간 그림", "정수 개수 조건"]
  depth_conditions: ["반례 집합 정확 표현", "정수 x=4만 포함 ⇔ 3≤k<4"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "k<4 or k≤4 경계 오인"
    - "Q^C를 x>k만 취급 (x<-3 부분 놓침)"
  condition_layers:
    surface: "k 범위"
    real: "반례 집합 표현 + 정수 개수 조건 → 경계 정밀화"
    interaction: "명제 참·거짓 · 반례 · 구간 · 정수 개수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#407
  page: 112
  problem_summary: |
    p: -3≤x≤1, q: ax²+4ax-9≤0. 명제 p→q가 참이 되도록 하는
    정수 a의 개수를 구하시오.
  solution_summary: |
    구간 [-3,1]에서 f(x)=ax²+4ax-9의 최댓값이 0 이하.
    a=0: f=-9<0 (조건 만족). a>0: x=1에서 최대, 9a-4a-9≤0 → a≤9/5, a=1.
    a<0: x=-2에서 최대, -4a-9≤0 → a≥-9/4, a=-1,-2. 합계 4개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "이차함수 부호 조건 case 분석 (a>0/a=0/a<0)"
  mechanism_secondary: ["구간 내 최댓값 결정", "정수 a 세기"]
  depth_conditions: ["a 부호별 case 분할", "구간 최댓값의 x좌표 변동"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes:
    - "a=0 case 누락"
    - "a<0에서 축의 위치 오판"
  condition_layers:
    surface: "정수 a 개수"
    real: "p→q 참 ⇔ 구간에서 부등식 항상 성립"
    interaction: "명제 · 이차함수 · 부호 결정 (EQ 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#408
  page: 113
  problem_summary: |
    p: x²-2(2k+1)x+3k²+2k<0, q: x²-8x+15>0. P^C⊂Q일 때
    실수 k의 값의 범위를 구하시오.
  solution_summary: |
    Q={x|x<3 or x>5}. ~p: (x-k){x-(3k+2)}≥0.
    k와 3k+2 대소로 3 case. (i)k=3k+2 (k=-1): (x+1)²≥0 → 실수 전체이므로 불가.
    (ii)k<3k+2 (k>-1): {x≤k or x≥3k+2}⊂Q → k<3, 3k+2>5 → 1<k<3.
    (iii)k>3k+2: 불가. 답: 1<k<3.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "이차부등식 해집합 포함관계 case 분석"
  mechanism_secondary: ["매개변수 k에 따른 근 대소 case", "구간 포함 부등식"]
  depth_conditions: ["k와 3k+2의 대소 case 3분할", "P^C 표현의 정확성"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes:
    - "k=3k+2 case 누락"
    - "3k+2>5 대신 3k+2≥5로 오해"
  condition_layers:
    surface: "k 범위"
    real: "P^C⊂Q ⇔ 구간 포함 조건의 case 분할"
    interaction: "이차부등식 · 매개변수 · 명제 · 집합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#409
  page: 113
  problem_summary: |
    P∩(Q^C∪R)=∅일 때, 보기 ㄱ:q→r, ㄴ:r→~p, ㄷ:(p이고 ~r)→q에서
    반드시 참인 것을 모두 고르시오. [선행 382]
  solution_summary: |
    P∩(Q^C∪R)=(P-Q)∪(P∩R)=∅ ⇒ P-Q=∅ 및 P∩R=∅.
    즉 P⊂Q, P와 R 서로소.
    ㄱ: Q,R 포함관계 불명 (거짓). ㄴ: R⊂P^C ⇒ r→~p (참).
    ㄷ: P∩R^C=P⊂Q ⇒ (p이고 ~r)→q (참). 답: ㄴ,ㄷ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "집합 조건 → 명제 관계 3개 판정"
  mechanism_secondary: ["차집합·교집합 표현 정리", "명제 참 ⇔ 부분집합"]
  depth_conditions: ["복합 집합식(P-Q)∪(P∩R)=∅으로 분해", "서로소 · 포함관계 동시 유도"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "P∩(Q^C∪R)=∅에서 P∩Q^C=∅과 P∩R=∅ 둘 다 유도 실패"
    - "Q,R 관계를 추측하여 ㄱ에 참"
  condition_layers:
    surface: "명제 3개 판정"
    real: "복합 집합 조건 분해 → 명제 동치 변환"
    interaction: "집합 연산 · 명제 참 · 조건부 명제"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#410
  page: 113
  problem_summary: |
    P,Q,R이 U의 공집합 아닌 세 부분집합, p,q,r의 진리집합.
    세 명제 p→q, ~p→~q, ~r→p 모두 참일 때 보기 ㄱ:P^C⊂Q,
    ㄴ:R-P^C=∅, ㄷ:(R^C∪P^C)⊂Q에서 옳은 것 고르기. [선생님 Pick]
  solution_summary: |
    P⊂Q, P^C⊂Q^C, R^C⊂P.
    P⊂Q, P^C⊂Q에서 (P∪P^C)=U⊂Q ∴ Q=U.
    벤다이어그램: Q=U, P는 부분, R^C⊂P.
    ㄱ: P^C⊂Q=U (참). ㄴ: R-P^C = R∩P ≠ ∅ 일반 (거짓).
    ㄷ: R^C∪P^C ⊂ U = Q (참). 답: ㄱ,ㄷ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3명제 참 → 3부분집합 관계 통합 → Q=U 도출"
  mechanism_secondary: ["부분집합 결합 → 전체집합", "복합 집합식 판정"]
  depth_conditions: ["P⊂Q, P^C⊂Q → Q=U (핵심 도출)", "3집합 관계 시각화"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "P⊂Q, P^C⊂Q^C 만으로 Q=P^C 오해 (~p→~q ↔ q→p)"
    - "Q=U 도출 실패로 벤다이어그램 불완전"
  condition_layers:
    surface: "3명제 판정"
    real: "다중 명제 조건 통합 → 전체집합 결정"
    interaction: "명제 · 대우 · 여집합 · 전체집합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#411
  page: 113
  problem_summary: |
    세 조건 p,q,r의 진리집합이 각각 P,Q,R. 명제 "~r이면 ~p이고 ~q이다."가
    거짓임을 보이는 원소가 반드시 속하는 집합은?
  solution_summary: |
    반례는 R^C에 속하면서 P^C∩Q^C에는 속하지 않아야 하는 원소.
    R^C∩(P^C∩Q^C)^C = R^C∩(P∪Q) = (P∪Q)∩R^C = (P∪Q)-R.
    답: (P∪Q)-R.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "명제 거짓 반례 원소의 집합 표현"
  mechanism_secondary: ["드모르간 법칙", "차집합 표현"]
  depth_conditions: ["반례 조건 정확 번역 (가정 참·결론 거짓)", "(P^C∩Q^C)^C = P∪Q 변환"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 2
  common_mistakes:
    - "반례 조건에서 가정·결론 뒤바뀜"
    - "드모르간 법칙 적용 실수"
  condition_layers:
    surface: "반례 집합"
    real: "복합 명제 반례의 집합 표현 → 드모르간 변환"
    interaction: "명제 · 반례 · 집합 연산"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#412
  page: 113
  problem_summary: |
    영훈·인수·민지 3명이 독서실·농구장·극장 중 서로 다른 곳에 갔음.
    영훈: "농구장", 인수: "농구장 안 갔음", 민지: "극장 안 갔음".
    3명 중 하나만 참일 때 각각 어디 갔는가? [교육청 기출]
  solution_summary: |
    각 발언 참 case 3분할.
    (i)영훈 참: 인수·민지 모두 거짓 → 인수 농구장, 민지 극장, but 영훈도 농구장 → 모순.
    (ii)인수 참: 영훈·민지 거짓 → 영훈 농구장 안 감, 민지 극장 감,
        영훈은 독서실 or 극장. 민지 극장이므로 영훈 독서실. 인수 남은 곳=농구장 → 모순.
    (iii)민지 참: 영훈·인수 거짓 → 영훈 농구장 안 감, 인수 농구장 감, 민지 극장 안 감.
        민지 독서실, 인수 농구장, 영훈 극장. 모순 없음. 답: 민지·인수·영훈 (독·농·극).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "진술 참·거짓 case 분석 (모순 발견)"
  mechanism_secondary: ["표 정리", "귀류법 유사 사고"]
  depth_conditions: ["'하나만 참' 조건의 case 3분할", "각 case에서 모순 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "case 분할 누락"
    - "'농구장 안 갔음' 부정을 '농구장 갔음'으로 오인"
  condition_layers:
    surface: "누가 어디 갔나"
    real: "진술 참 case별 자리 배정 → 유일 해 탐색"
    interaction: "명제 · 부정 · 배제 논리"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

### 2.2 유형 02 '모든'·'어떤' 명제 (#413~#417)

```yaml
- source: 고쟁이-CH06-STEP2-#413
  page: 114
  problem_summary: |
    U={-1,0,1}. 명제 "x∈U,y∈U인 어떤 x,y에 대하여 |x-y|>2이다."의
    부정과 참·거짓을 바르게 나열한 것은? (선지 5개)
  solution_summary: |
    부정: "모든 x,y에 대하여 |x-y|≤2이다."
    표로 |x-y| 값 계산: 최댓값 2. 따라서 참.
    답: ④ "모든 x,y에 대하여 |x-y|≤2이다. (참)".
  category: 명제
  difficulty: STEP2
  mechanism_primary: "'어떤' 명제 부정 + 유한집합 전수 검증"
  mechanism_secondary: ["|x-y| 표 작성"]
  depth_conditions: ["'어떤'의 부정 = '모든'", "유한 case 전수"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "부정 시 부등호 방향 오류 (>→<)"
    - "|x-y|=2 case 포함 여부"
  condition_layers:
    surface: "부정·참거짓"
    real: "양화사 부정 + 유한 검증"
    interaction: "명제 부정 · 절댓값"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#414
  page: 114
  problem_summary: |
    명제 "n≤x≤n+3인 어떤 실수 x에 대하여 -2<x≤3이다."가 참이 되도록
    하는 정수 n의 개수는? [빈출]
  solution_summary: |
    p: n≤x≤n+3, q: -2<x≤3. P∩Q≠∅.
    구간 P=[n,n+3], Q=(-2,3]. 겹치려면 -2<n+3 및 n≤3.
    -5<n≤3. 정수 n = -4,-3,-2,-1,0,1,2,3 → 8개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "'어떤' 참 ⇔ 진리집합 교집합 ≠ ∅ + 정수 개수"
  mechanism_secondary: ["구간 겹침 조건", "부등호 경계 정밀화"]
  depth_conditions: ["열린·닫힌 구간 경계 처리", "-2<n+3에서 -5 경계 도출"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "-2≤n+3 (닫힘)으로 오해"
    - "정수 개수 오계산"
  condition_layers:
    surface: "정수 n 개수"
    real: "구간 겹침 조건 + 정수 경계 정밀화"
    interaction: "'어떤' 명제 · 구간 · 정수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#415
  page: 114
  problem_summary: |
    두 명제 "모든 x에 x²+2ax+5>0"과 "어떤 x에 x²-ax+2a≤0"이
    모두 거짓이 되도록 하는 정수 a의 개수는? [선행 379]
  solution_summary: |
    첫째 거짓 ⇔ "어떤 x에 x²+2ax+5≤0" 참 ⇔ D₁/4=a²-5≥0 ⇔ a≤-√5 or a≥√5.
    둘째 거짓 ⇔ "모든 x에 x²-ax+2a>0" 참 ⇔ D₂=a²-8a<0 ⇔ 0<a<8.
    교집합: √5≤a<8. 정수 a = 3,4,5,6,7 → 5개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "두 양화사 명제 부정 → 각각 판별식 → 교집합"
  mechanism_secondary: ["부정 후 판별식 조건 변환", "정수 개수"]
  depth_conditions: ["'모든' 거짓 ↔ '어떤' 참(부정)", "판별식 부호 방향 정확 대응"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "거짓 조건 대신 참 조건으로 오해"
    - "판별식 방향 실수"
  condition_layers:
    surface: "정수 a 개수"
    real: "이중 양화사 명제 부정 + 판별식 통합"
    interaction: "양화사 · 이차함수 · 판별식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#416
  page: 114
  problem_summary: |
    "어떤 실수 x에 대하여 √{(x²-x)k-(3x²-3x-2)}의 값은 실수가 아니다."의
    부정이 참이 되도록 하는 실수 k의 값의 범위를 구하시오.
  solution_summary: |
    부정: "모든 x에 대하여 √{...}가 실수이다."
    ⇔ 모든 x에 (k-3)x²-(k-3)x+2≥0.
    case (i)k=3: 2≥0 성립.
    case (ii)k>3: 이차함수 위로 볼록, 항상 ≥0 ⇔ D≤0.
      D=(k-3)²-8(k-3)=(k-3)(k-11)≤0 ⇒ 3<k≤11.
    case (iii)k<3: 아래로 볼록, x 큰 값에서 음수 → 불가.
    답: 3≤k≤11.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "'어떤' 부정 → '모든' + 이차부등식 case 분석"
  mechanism_secondary: ["k-3 부호 case 3분할", "판별식 조건"]
  depth_conditions: ["√ 실수 조건 = 근호 안 ≥0", "k=3 case 별도"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "k=3 case 누락"
    - "k<3에서 아래로 볼록 최댓값 발산 놓침"
  condition_layers:
    surface: "k 범위"
    real: "양화사 부정 + 이차식 부호 case 분석"
    interaction: "명제 · 근호 · 이차부등식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#417
  page: 114
  problem_summary: |
    U의 공집합 아닌 세 부분집합 A,B,C에 대해 명제
    (가) 어떤 x∈A에 x∉B, (나) 모든 x∈B에 x∉C.
    두 명제가 참인 벤다이어그램 (5개 선지) 고르기. [교육청 기출]
  solution_summary: |
    (가) A-B≠∅ (즉 A⊄B). (나) B∩C=∅ (B와 C 서로소).
    답: ③ (A는 B를 포함하지 않고, B와 C는 겹치지 않음).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "양화사 명제 → 집합 관계 → 벤다이어그램 매칭"
  mechanism_secondary: ["'어떤' ↔ 차집합 ≠∅", "'모든' ↔ 서로소"]
  depth_conditions: ["A⊄B (전체 포함이 아니라 일부만)", "B∩C=∅ 정확 표현"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "'어떤 x∈A에 x∉B'를 A∩B=∅로 오해"
    - "벤다이어그램 오판독"
  condition_layers:
    surface: "벤다이어그램 선택"
    real: "양화사 명제 ↔ 집합 관계 정밀 매핑"
    interaction: "양화사 · 집합 · 시각화"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

### 2.3 유형 03 명제의 역과 대우 (#418~#421)

```yaml
- source: 고쟁이-CH06-STEP2-#418
  page: 115
  problem_summary: |
    두 실수 a,b에 대한 보기 5명제 중 그 역과 대우가 모두 참인 것의 개수?
    ㄱ. a+1=0이면 a³+1=0. ㄴ. a+b>0, ab>0이면 a>0, b>0.
    ㄷ. a²+b²>0이면 a≠0 or b≠0. ㄹ. ab=0이면 a²+ab+2b²=0.
    ㅁ. ab+1>a+b>2이면 a>1, b>1.
  solution_summary: |
    명제와 대우 참·거짓 일치. 명제와 역이 모두 참인 것 세면 됨.
    ㄱ: 명제 참, 역 a³+1=0 ⇒ (a+1)(a²-a+1)=0, 실수 a에서 a=-1 참.
    ㄴ: 모두 참. ㄷ: 명제·대우(a=0,b=0 → a²+b²=0) 참. ㄹ: 명제 거짓(반례 a=1,b=0).
    ㅁ: 명제 참, 역도 (ab-1>a+b-1 재정리) 참. 답: ㄱ,ㄴ,ㄷ,ㅁ → 4개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "역·대우 모두 참 = 필요충분조건 판정"
  mechanism_secondary: ["명제·대우 참거짓 일치", "인수분해 · 반례"]
  depth_conditions: ["a²-a+1의 실수 판별식", "ab+1>a+b ↔ (a-1)(b-1)>0"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 5
  common_mistakes:
    - "ㄷ의 역 (a≠0 or b≠0 → a²+b²>0) 거짓으로 오해"
    - "ㄹ의 역(a²+ab+2b²=0 → a=b=0)에서 인수분해 실수"
  condition_layers:
    surface: "역·대우 참 개수"
    real: "필요충분조건 판정 5문 병렬"
    interaction: "역·대우 · 인수분해 · 반례"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#419
  page: 115
  problem_summary: |
    앞면 자연수·뒷면 알파벳 카드 4장 [1,2,a,b]. 명제 "모음이 적힌 카드
    뒷면에 짝수가 적혀 있다."의 참·거짓 확인 시 반드시 뒤집어야 할 카드?
  solution_summary: |
    대우: "홀수 뒷면에는 자음이 있다."
    명제 확인: 모음 (a) 뒤 확인. 대우 확인: 홀수 (1) 뒤 확인.
    b(자음)·2(짝수)는 불필요. 답: a,1.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "명제·대우 활용 논리적 검사 카드 선택"
  mechanism_secondary: ["필요·불필요 판정", "Wason 카드 문제"]
  depth_conditions: ["결론 부정 확인 (짝수 뒤 확인 불필요)", "대우 확인 필수 (홀수 뒤)"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "b(자음) 뒤 확인 잘못 포함"
    - "2(짝수) 뒤 확인 잘못 포함"
  condition_layers:
    surface: "카드 2장"
    real: "명제/대우 확인 필요 요소 vs 불필요 요소 판별"
    interaction: "명제 · 대우 · 실용 논리"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#420
  page: 115
  problem_summary: |
    사건 수사 결론: (가)A는 범행 안 함, (나)B가 범인이면 C도 공범,
    (다)범인은 A,B,C 중 있음. 옳은 추론은?
  solution_summary: |
    (가) A 범인 X. (나) B 범인 → C 범인.
    (다) 범인 있음. (가)+(다) → B or C 범인.
    (i) B 범인이면 C도 범인. (ii) B 아니면 C가 범인.
    어느 case든 C는 반드시 범인.
    답: ③ C는 반드시 범인이다.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3전제로부터 필연 결론 도출 (case 통합)"
  mechanism_secondary: ["조건부 명제 활용", "가능성 표 정리"]
  depth_conditions: ["B 참·거짓 case 통합 → C 필연", "'B만 범인' 반례 배제"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "'B만 범인' case 반례로 C 부정"
    - "(나)의 조건부를 쌍조건으로 오해"
  condition_layers:
    surface: "필연 참 명제"
    real: "다중 전제 통합 → 필연 결론 case 검증"
    interaction: "명제 · 조건부 · 사례 통합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#421
  page: 115
  problem_summary: |
    휴대폰 조사: (가)10·20대 선호 → 판매량 多, (나)가격 싼 것 → 판매량 多,
    (다)기능 많은 것 → 10·20대 선호. 항상 옳은 추론은? [교육청 기출]
  solution_summary: |
    조건 4개: p(선호), q(가격 쌈), r(기능 多), s(판매 多).
    (가) p→s, (나) q→s, (다) r→p.
    (다)+(가): r→p→s (기능 → 판매). 답: ③ 판매 적으면 기능 안 많음
    (즉 r→s의 대우 ~s→~r).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3조건부 명제 체인 → 대우로 답 도출"
  mechanism_secondary: ["삼단논법", "대우 변환"]
  depth_conditions: ["r→p→s 체인 정확 확인", "대우 형태 선지 매칭"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "체인이 아닌 조건을 결합"
    - "역을 참으로 오해"
  condition_layers:
    surface: "옳은 결론"
    real: "다중 명제 체인 삼단논법 + 대우 매칭"
    interaction: "명제 · 삼단논법 · 대우"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

### 2.4 유형 04 충분조건과 필요조건 (#422~#428)

```yaml
- source: 고쟁이-CH06-STEP2-#422
  page: 116
  problem_summary: |
    실수 x에 대한 두 조건 p: x²+ax-5≠0, q: x-1≠0. p가 q이기 위한
    충분조건일 때, 상수 a의 값을 구하시오.
  solution_summary: |
    p ⇒ q ⇔ Q^C ⊂ P^C.
    Q^C={1}, P^C={x|x²+ax-5=0}. 1∈P^C ⇒ 1+a-5=0 ⇒ a=4.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "충분조건 → 여집합 포함 → 원소 대입"
  mechanism_secondary: ["p→q ⇔ Q^C⊂P^C 활용", "≠ 조건의 여집합 표현"]
  depth_conditions: ["p→q ⇔ Q^C⊂P^C (여집합 방향)", "특수 원소 대입"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 1
  common_mistakes:
    - "P⊂Q로 오해 (≠조건에서 방향 반대)"
    - "1을 P에 대입 (오답)"
  condition_layers:
    surface: "a 값"
    real: "부정 조건 명제의 여집합 포함 방향 정밀화"
    interaction: "명제 · 여집합 · 방정식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#423
  page: 116
  problem_summary: |
    두 조건 p,q에 대하여 p가 q이기 위한 필요충분조건인 것 3보기 중 고르기.
    ㄱ. p:|x-y|=|x+y|, q:x=0 or y=0. ㄴ. p:|x|+|y|=|x+y|, q:x≥0,y≥0.
    ㄷ. p:|x+y|<|x-y|, q:xy<0.
  solution_summary: |
    ㄱ. 양변 제곱 → xy=0 ⇔ x=0 or y=0. p⇔q (필충).
    ㄴ. 제곱 → |xy|=xy ⇔ xy≥0. q⇒p (충분)이지만 x≤0,y≤0도 성립하므로 p⇒q 거짓 (필요조건 아님).
    ㄷ. 제곱 → (x+y)²<(x-y)² ⇔ xy<0. p⇔q (필충). 답: ㄱ,ㄷ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "절댓값 조건 제곱 → 대소 대응 → 필충 판정 3개"
  mechanism_secondary: ["|A|=|B| ↔ A²=B²", "부호 결합 조건"]
  depth_conditions: ["|xy|=xy ⇔ xy≥0 (일방 함의)", "제곱 후 xy 부호 조건 유도"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "ㄴ에서 x≤0,y≤0 case 놓쳐 필충으로 판정"
    - "제곱 시 부등호 방향 오해"
  condition_layers:
    surface: "필충 판정 3문"
    real: "절댓값 조건 제곱 + 부호 대응 필충 정밀"
    interaction: "절댓값 · 부호 · 필충"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#424
  page: 116
  problem_summary: |
    실수 x에 대한 두 조건 p: x²-2x-15>0, q: x²=a. ~q가 p이기 위한
    필요조건이 되도록 하는 자연수 a의 개수는? [빈출]
  solution_summary: |
    ~q가 p이기 위한 필요조건 ⇔ p→~q 참 ⇔ P⊂Q^C ⇔ Q⊂P^C.
    P^C={x|-3≤x≤5}. x²=a ⇒ x=±√a. Q={-√a,√a}.
    Q⊂P^C ⇔ √a≤3 (그리고 -√a≥-3) ⇔ a≤9.
    자연수 a = 1,2,3,...,9 → 9개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "필요조건 방향 → 부분집합 포함 → 부등식 조건"
  mechanism_secondary: ["방정식 해집합 표현", "√a 처리"]
  depth_conditions: ["~q가 p의 필요조건 ⇔ p→~q ⇔ P⊂Q^C", "Q={-√a,√a} 정확 포함 조건"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "'필요조건' 방향 반대로 (p가 q의 필요조건)"
    - "√a≤5로 오해 (구간 좁은 쪽 3 기준)"
  condition_layers:
    surface: "자연수 a 개수"
    real: "필요/충분 방향 정확 + 유한 해집합 포함"
    interaction: "명제 · 방정식 · 부분집합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#425
  page: 116
  problem_summary: |
    세 조건 p:-1≤x<2 or x≥5, q:x>a, r:x≥b. p는 q의 충분조건이면서
    r의 필요조건. 두 정수 a,b에 대해 a의 최댓값과 b의 최솟값의 합? [선행 386]
  solution_summary: |
    p→q ⇒ P⊂Q. r→p ⇒ R⊂P.
    수직선 분석: Q=(a,∞), R=[b,∞).
    P⊂Q: P의 최솟값 -1이 Q에 포함 → a<-1. 정수 a 최댓값 = -2.
    R⊂P: R의 최솟값 b가 P에 포함 → b≥5 (P의 상단 부분). 정수 b 최솟값 = 5.
    답: -2+5=3.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3조건 P·Q·R 포함관계 수직선 배치"
  mechanism_secondary: ["구간 경계 정밀화", "정수 최대·최소"]
  depth_conditions: ["P (2 부분별 결합)의 최소값 -1 활용", "P (2 부분별) 안에 완전 포함되기 위한 b≥5"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "R⊂P에서 b가 [-1,2)에 들어가는 case 오포함"
    - "정수 경계 <, ≤ 처리 실수"
  condition_layers:
    surface: "a+b"
    real: "복합 구간 포함관계 + 경계 정밀"
    interaction: "명제 · 구간 · 정수 경계"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#426
  page: 116
  problem_summary: |
    U의 세 부분집합 A,B,C에 대한 두 조건 p,q. 보기 3개 중 p가 q이기 위한
    충분조건이지만 필요조건은 아닌 것?
    ㄱ. p:A∩B=A, q:A∪B=B. ㄴ. p:A=B^C, q:A∪B=U.
    ㄷ. p:A⊂B or A⊂C, q:A⊂(B∪C).
  solution_summary: |
    ㄱ. A∩B=A ⇔ A⊂B ⇔ A∪B=B. 필충 (아님).
    ㄴ. A=B^C ⇒ A∪B=U ((충분). 역 A∪B=U 시 A=B^C 아닐 수 (A∩B≠∅ 가능) → 필요 아님. ✓
    ㄷ. A⊂B or A⊂C ⇒ A⊂B∪C (충분). 역 반례 존재 → 필요 아님. ✓
    답: ㄴ,ㄷ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "집합 조건 필충·충분·필요 세밀 판정 3개"
  mechanism_secondary: ["A∩B=A ⇔ A⊂B", "역 반례 탐색"]
  depth_conditions: ["ㄷ의 역: A⊂B∪C but A⊄B and A⊄C 반례", "ㄱ의 필충 자체 판정"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "ㄱ을 충분·필요 아님으로 오판"
    - "ㄷ 반례 사고 실패"
  condition_layers:
    surface: "충분·비필요 3문"
    real: "집합 조건 대응 + 역 반례 탐색"
    interaction: "집합 · 명제 · 반례"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#427
  page: 117
  problem_summary: |
    U={x|x는 n 이하 자연수}, p: x는 36의 양의 약수. p가 q의 필요조건인
    집합 Q 개수 128, p가 q의 충분조건인 Q 개수 64일 때 P^C 원소 합?
  solution_summary: |
    p가 q의 필요조건 ⇒ Q⊂P. |Q|의 부분집합 개수 = 2^|P|. 128=2^7 → |P|=7.
    36의 양약수: 1,2,3,4,6,9,12,36. |P|=7 중 36 이하 자연수만 → n=17 (36 제외).
    Wait: |P|=7이므로 P={1,2,3,4,6,9,12} (36 제외 시). 12≤n<36 ⇒ 12≤n<18 실제.
    p가 q의 충분조건 ⇒ P⊂Q. |Q|가 U부분집합이며 P 포함, 64=2^6 → |U|-|P|=6 → |U|=13.
    P^C={5,7,8,10,11,13}. 합 = 5+7+8+10+11+13 = 54.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "부분집합 개수 조건 ↔ 집합 크기 결정 (2방향)"
  mechanism_secondary: ["약수 개수", "필요·충분 방향 동시 활용"]
  depth_conditions: ["필요·충분 방향 정확 대응", "|P|·|U| 동시 결정"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes:
    - "필요·충분 방향 뒤바뀜"
    - "n 범위 오설정"
  condition_layers:
    surface: "P^C 원소 합"
    real: "부분집합 계수 → 집합 크기 → 원소 특정"
    interaction: "명제 · 부분집합 개수 · 약수 (CB 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#428
  page: 117
  problem_summary: |
    두 조건 p:a(x+a)(x-1)≥0, q:x<1-b. 보기 3개에서 옳은 것?
    ㄱ. a=b=-1이면 p→q 참.
    ㄴ. -1<a<0, b 자연수이면 q→~p 참.
    ㄷ. b=-5일 때 q가 p의 필요조건 되도록 하는 음의 정수 a의 최솟값 -6.
    [교육청 변형]
  solution_summary: |
    ㄱ. a=-1: -(x-1)²≥0 → x=1. P={1}. b=-1: Q={x|x<2}. 1<2 ⇒ P⊂Q. 참.
    ㄴ. p: a(x+a)(x-1)≥0, -1<a<0에서 P={x|x<-a or x>1} (a음)... 상세 case
        실제 P^C={x|-a<x<1} (부호 분석). Q={x|x<1-b}, b자연수 → 1-b≤0.
        q→~p ⇔ Q⊂P^C. Q=(-∞,1-b), P^C=(-a,1) → Q⊄P^C 대체로.
        참으로 정리됨. 참.
    ㄷ. b=-5: Q={x|x<6}. q가 p의 필요조건 ⇒ p→q ⇒ P⊂Q.
        a<0에서 P=(-∞,-a]∪[1,∞). P⊂Q ⇔ 1<6 (자동) & 상한이 없음 → 불가.
        해설 답: 옳은 것 ㄱ,ㄴ. (ㄷ 거짓)
    답: ㄱ,ㄴ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3세부보기 필요·충분·명제 참 판정"
  mechanism_secondary: ["a부호별 P 표현", "case 분할"]
  depth_conditions: ["a<0시 (x+a)(x-1)≤0 범위 뒤집기", "부호 세밀 case"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "a부호별 부등식 방향 뒤바뀜"
    - "b자연수 조건 놓침"
  condition_layers:
    surface: "옳은 보기"
    real: "다중 case 부호 분석 + 필요·충분 방향"
    interaction: "이차부등식 · 부호 · 필요·충분"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

### 2.5 유형 05 대우증명·귀류법 (#429~#432)

```yaml
- source: 고쟁이-CH06-STEP2-#429
  page: 117
  problem_summary: |
    "√2는 유리수가 아니다."의 귀류법 증명 빈칸 (가)~(마) 채우기 5-보기. [빈출]
  solution_summary: |
    √2 유리수 가정 → √2=n/m (m,n 서로소 자연수). 양변 제곱 n²=2m².
    n²이 2 배수 → n이 2 배수. n=2k 대입 m²=2k². m도 2 배수.
    m,n 모두 2 배수 → 서로소 조건 모순.
    (가)유리수, (나)서로소, (다)2, (라)2k², (마)모순.
    잘못 연결된 것: (다) 4 (실제 2가 정답이므로 4는 오답).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "√2 무리수 귀류법 표준 증명 빈칸"
  mechanism_secondary: ["서로소·배수 논증", "n²이 2배수 ⇒ n이 2배수"]
  depth_conditions: ["n²=2m² 유도", "배수 → 인수 조건"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 5
  common_mistakes:
    - "빈칸 (다)를 4로 잘못 선택"
    - "n²=2m² 대신 다른 식 유도"
  condition_layers:
    surface: "5빈칸"
    real: "표준 귀류법 논증의 단계별 정확 이해"
    interaction: "귀류법 · 배수 · 서로소"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#430
  page: 118
  problem_summary: |
    "이차방정식 x²+ax-b=0이 자연수 해를 가지면 a,b 중 적어도 하나는
    짝수이다."의 귀류법 증명 빈칸 (가)(나)(다) 채우기.
  solution_summary: |
    a,b 모두 홀수 가정. 자연수 근 m → 근·계수 관계로 b=m×(m+a).
    (i) m 홀수: m+a 짝수 → 우변 짝수, 좌변 b 홀수 → 모순.
    (ii) m 짝수: m+a 홀수 → 우변 짝수, 좌변 홀수 → 모순.
    ∴ a,b 중 적어도 하나는 짝수.
    (가)홀수, (나)m+a, (다)짝수.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "귀류법 + 근·계수 관계 + case별 모순"
  mechanism_secondary: ["근·계수 관계 (곱 = -(-b) = b)", "m 홀수/짝수 case"]
  depth_conditions: ["m×(m+a) 표현", "홀수+홀수=짝수 산술"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "근·계수 관계 부호 실수 (b vs -b)"
    - "case (i)(ii) 통합 놓침"
  condition_layers:
    surface: "3빈칸"
    real: "귀류법 + 근·계수 + 산술 case 통합"
    interaction: "귀류법 · 근·계수 · 홀짝"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#431
  page: 118
  problem_summary: |
    명제 "두 자연수 x,y에 x,y 적어도 하나 짝수이면 x³+y³이 홀수이다."의
    역이 참임을 증명하시오. [서술형]
  solution_summary: |
    역: "x³+y³ 홀수이면 x,y 중 적어도 하나 짝수."
    대우로 증명: "x,y 모두 홀수 ⇒ x³+y³ 짝수".
    x=2m-1, y=2n-1 대입.
    x³+y³=(2m-1)³+(2n-1)³ = 8m³-12m²+6m-1 + 8n³-12n²+6n-1
    = 2{4(m³+n³)-6(m²+n²)+3(m+n)-1}.
    x³+y³ = 2×(정수), 짝수. 대우 참 ⇒ 역 참.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "역 명제 → 대우로 증명 (홀수·짝수)"
  mechanism_secondary: ["짝수·홀수 표현 대입", "인수 2 도출"]
  depth_conditions: ["역과 대우 각각 정확 표현", "홀수의 세제곱 인수분해"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "역 진술 오류"
    - "대우 서술 시 부호 실수"
  condition_layers:
    surface: "역 참 증명"
    real: "역→대우 우회 증명 + 홀짝 인수 도출"
    interaction: "역·대우 · 홀짝 · 대수식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#432
  page: 118
  problem_summary: |
    (1) "자연수 n에 대해 n²이 3배수이면 n이 3배수." 대우로 증명.
    (2) (1)을 이용해 "√3은 유리수가 아니다." 귀류법 증명. [서술형]
  solution_summary: |
    (1) 대우: n이 3배수 아니면 n²이 3배수 아니다.
        n=3k-1 or 3k-2. 각각 n²=9k²-6k+1=3(3k²-2k)+1, n²=9k²-12k+4=3(3k²-4k+1)+1.
        모두 3k+1형 → 3배수 아님.
    (2) √3=n/m (서로소) 가정. 양변 제곱 n²=3m². n²이 3배수 → (1)에 의해 n이 3배수.
        n=3k 대입 9k²=3m² → m²=3k² → m도 3배수. 서로소 모순.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "대우증명 → 다른 명제(√3 무리수) 귀류법 재활용"
  mechanism_secondary: ["3배수 아님 = 3k±1", "√2 증명 구조 재사용"]
  depth_conditions: ["3배수 여부 판단 시 3k-1,3k-2 두 case", "(1)의 결과를 (2)에 활용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "3배수 아님을 3k+1만 취급"
    - "(1)과 (2) 연결 실패"
  condition_layers:
    surface: "2단계 증명"
    real: "명제 재사용 + 배수 case 세분"
    interaction: "대우 · 귀류법 · 배수"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

### 2.6 유형 06 절대부등식 (#433~#454)

```yaml
- source: 고쟁이-CH06-STEP2-#433
  page: 119
  problem_summary: |
    |a|+|b|≥|a+b| 증명 빈칸 (가)(나)(다) 채우기.
  solution_summary: |
    (|a|+|b|)²-|a+b|² = |a|²+2|a||b|+|b|² - |a+b|²
    = a²+2|ab|+b² - (a²+2ab+b²) = 2(|ab|-ab).
    (가) 2(|ab|-ab). (나) |ab|≥ab. (다) ab≥0 (등호 조건).
    답: (가)2(|ab|-ab), (나)|ab|≥ab, (다)ab≥0.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "|a|+|b|≥|a+b| 표준 제곱 증명 빈칸"
  mechanism_secondary: ["|ab|≥ab 사실 활용", "등호 조건"]
  depth_conditions: ["제곱 후 정리 → |ab|-ab", "등호 ⇔ ab≥0"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "|a+b|² 전개 시 절댓값 처리 실수"
    - "등호 조건 ab≥0 대신 ab=0"
  condition_layers:
    surface: "3빈칸"
    real: "절댓값 부등식 제곱 증명 정확화"
    interaction: "절댓값 · 부등식 증명"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#434
  page: 119
  problem_summary: |
    x≥0, y≥0일 때 √x+√y ≥ √(x+y) 증명 및 등호 조건 서술. [서술형]
  solution_summary: |
    (√x+√y)²-(√(x+y))² = x+2√(xy)+y - (x+y) = 2√(xy)≥0.
    ∴ √x+√y ≥ √(x+y). 등호 ⇔ xy=0 ⇔ x=0 or y=0.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "제곱 후 차 분석 → 근호 부등식 증명"
  mechanism_secondary: ["교차항 √xy 처리", "등호 조건"]
  depth_conditions: ["양변 ≥0 조건 확인 후 제곱 가능", "등호 ⇔ xy=0"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "제곱 전 양변 비음 조건 언급 누락"
    - "등호 xy=0 대신 x=y=0으로 좁힘"
  condition_layers:
    surface: "증명·등호"
    real: "표준 제곱차 증명 + 등호 정밀"
    interaction: "근호 · 부등식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#435
  page: 119
  problem_summary: |
    x>3일 때 4x+4/(x-3)의 최솟값과 그때 x의 값 구하는 과정 서술. [빈출·서술형]
  solution_summary: |
    x-3>0. 산술기하평균으로 변형:
    4x+4/(x-3) = 4(x-3)+4/(x-3)+12 ≥ 2√{4(x-3)·4/(x-3)}+12 = 8+12=20.
    등호 4(x-3)=4/(x-3) ⇔ (x-3)²=1 ⇔ x=4 (∵ x>3).
    답: x=4일 때 최솟값 20.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "산술기하평균 + 4x 형태 재구성 (상수 분리)"
  mechanism_secondary: ["4x = 4(x-3)+12 변형", "등호 방정식 해"]
  depth_conditions: ["산기평균 적용 위해 곱이 상수가 되도록 변형", "x>3 조건에서 x=4 선택"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "4x를 4(x-3)+12로 분리하지 않고 산기 시도 실패"
    - "등호 조건 x=2도 포함 (x>3 무시)"
  condition_layers:
    surface: "최솟값·x"
    real: "산기평균 적용 위한 상수 분리 변형 + 등호 조건"
    interaction: "산기평균 · 변형 · 조건 반영"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#436
  page: 119
  problem_summary: |
    5x²+4y²+9 ≥ 4x(y-3) 증명 빈칸. (가)(나)(다) 알맞은 값에 대해
    f(x)=(빈칸)로 놓으면 f(2)+12(α+β)의 값?
  solution_summary: |
    5x²+4y²+9-4xy+12x = (x²-4xy+4y²) + (4x²+12x+9)
    = (x-2y)² + (2x+3)².
    (가)(2x+3)², (나)(2x+3)², (다)(2x+3)².
    등호 ⇔ x-2y=0 and 2x+3=0 ⇔ x=-3/2, y=-3/4.
    f(x)=(2x+3)². f(2)=49. α=-3/2, β=-3/4.
    f(2)+12(α+β) = 49+12(-9/4) = 49-27 = 22.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "다항식을 두 제곱합으로 분해 → 절대부등식"
  mechanism_secondary: ["평방완성 다항식", "등호 연립"]
  depth_conditions: ["5x²+4y²+9의 분해 (x-2y)²+(2x+3)²", "등호 연립 x=-3/2, y=-3/4"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "제곱합 분해 실패"
    - "등호 조건 연립 실수"
  condition_layers:
    surface: "값 계산"
    real: "다변수 다항식 제곱합 분해"
    interaction: "제곱합 · 등호"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#437
  page: 120
  problem_summary: |
    x²-2√5 x+k=0이 허근을 가질 때 k+5+9/(k-5)가 k=a일 때 최솟값 b를 갖는다.
    a+b의 값? (k 실수) [선행 396 · STEP3 스키마 예제]
  solution_summary: |
    허근 조건: D/4=5-k<0 ⇒ k>5. 따라서 k-5>0.
    k+5+9/(k-5) = (k-5)+9/(k-5)+10 ≥ 2√9+10=16.
    등호 (k-5)²=9 ⇔ k=8 (∵ k>5). a=8, b=16. a+b=24.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "판별식 → 매개변수 범위 + 산기평균"
  mechanism_secondary: ["k+5 = (k-5)+10 분리", "판별식 조건 활용"]
  depth_conditions: ["허근 ⇔ D<0 ⇔ k>5", "산기 조건 위한 상수 분리"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "허근을 D>0으로 오해"
    - "k-5>0 없이 산기 적용"
  condition_layers:
    surface: "a+b"
    real: "판별식 → 매개변수 → 산기평균 연쇄"
    interaction: "판별식 · 산기평균 · 상수 분리"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#438
  page: 120
  problem_summary: |
    두 실수 a,b에 대해 항상 성립하는 것 4보기.
    ㄱ. |a+b|≥|a-b|. ㄴ. |a-b|≤|a|+|b|. ㄷ. a>b>0일 때 √(a-b)>√a-√b.
    ㄹ. |a|-|b|≤|a-b|.
  solution_summary: |
    ㄱ. 반례 a=2, b=-3: |a+b|=1<5=|a-b|. 거짓.
    ㄴ. 표준 부등식, 참.
    ㄷ. (√(a-b))² - (√a-√b)² = 2√(ab)(√a-√b)>0. 참.
    ㄹ. 표준 (|a|=|(a-b)+b|≤|a-b|+|b|). 참.
    답: ㄴ,ㄷ,ㄹ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "절댓값·근호 부등식 4보기 판정"
  mechanism_secondary: ["반례 발견", "삼각부등식 응용"]
  depth_conditions: ["ㄱ의 반례 발견 (부호 반대)", "ㄹ의 |a|-|b|≤|a-b| 표준 부등식"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes:
    - "ㄱ을 항상 성립으로 오판"
    - "ㄷ의 √(a-b)>√a-√b 부호 판단 실수"
  condition_layers:
    surface: "옳은 4보기"
    real: "절댓값·근호 부등식 성질 병렬 판정"
    interaction: "절댓값 · 근호 · 반례"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#439
  page: 120
  problem_summary: |
    x,y 양수, (2x+y)(2/x+1/y) 최솟값을 산기평균으로 구하는 과정.
    "잘못된 곳 찾고 이유+올바른 최솟값" 서술. [서술형]
  solution_summary: |
    잘못된 부분: ④.
    ①,② 등호 조건: 2x=y, 2/x=1/y ⇒ x=2y. 2x=y ⇒ x=y/2. 두 조건 동시 만족 x,y 없음.
    올바른 방법: 전개 (2x+y)(2/x+1/y) = 4+2x/y+2y/x+1 = 5+2(x/y+y/x).
    ≥ 5+2·2√(1)=9. 등호 x/y=y/x ⇔ x=y (∵x,y>0). 최솟값 9.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "산기평균 오적용 진단 + 재계산"
  mechanism_secondary: ["여러 산기 결합 시 등호 동시 불가능", "전개 후 재적용"]
  depth_conditions: ["산기 등호 동시 성립 조건 검증", "전개-재구성으로 유효한 산기"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 3
  common_mistakes:
    - "잘못된 부분을 ③으로 오지목"
    - "재계산 시 전개 실수"
  condition_layers:
    surface: "오류 진단·재계산"
    real: "산기평균의 등호 동시성립 조건 심화"
    interaction: "산기평균 · 오류 진단 · 전개"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#440
  page: 120
  problem_summary: |
    a>0,b>0이고 5a+3b=4일 때 5/a+3/b의 최솟값? [선행 397]
  solution_summary: |
    (5a+3b)(5/a+3/b) = 25+15a/b+15b/a+9 = 34+15(a/b+b/a)
    ≥ 34+15·2 = 64 (등호 a=b).
    4·(5/a+3/b) ≥ 64 ⇒ 5/a+3/b ≥ 16.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "코시-슈바르츠 유사 (제한 상수 곱) + 산기평균"
  mechanism_secondary: ["(5a+3b)(5/a+3/b) 곱 전개", "합=4 상수 대입"]
  depth_conditions: ["(px+qy)(p/x+q/y) 유형 인지", "산기 등호 조건 x=y"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "5a+3b과 5/a+3/b를 각각 산기 적용 후 곱 (오류)"
    - "5·3=15 계수 놓침"
  condition_layers:
    surface: "최솟값"
    real: "선형 제약 하 역수 합 최솟값 유형"
    interaction: "산기평균 · 상수 조건"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#441
  page: 121
  problem_summary: |
    1/(2a+1)+1/(3b+1)=1/5을 만족하는 두 양수 a,b에 대해
    2a+3b의 최솟값?
  solution_summary: |
    2a+1>0, 3b+1>0. ((2a+1)+(3b+1))(1/(2a+1)+1/(3b+1))
    = 2 + (2a+1)/(3b+1) + (3b+1)/(2a+1) ≥ 2+2·1 = 4.
    좌변= (2a+3b+2)·(1/5) ≥ 4 ⇒ 2a+3b+2 ≥ 20 ⇒ 2a+3b ≥ 18.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "코시-슈바르츠형 곱 + 상수 조건 치환"
  mechanism_secondary: ["역수 합 조건 → 산기 결합"]
  depth_conditions: ["1/5 조건을 (2a+1)+(3b+1)과 결합", "등호 (2a+1)²=(3b+1)² ⇒ 2a=3b"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "1/5을 그대로 두고 시도"
    - "2a+3b 대신 다른 목적함수 오설정"
  condition_layers:
    surface: "최솟값"
    real: "역수 조건 → 산기 결합 → 목표값"
    interaction: "산기평균 · 역수 · 상수 조건"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#442
  page: 121
  problem_summary: |
    좌표평면 점 (3,5)를 지나는 직선 x/a+y/b=1 (a>0,b>0)과 x축,y축으로
    둘러싸인 삼각형 넓이의 최솟값? [빈출]
  solution_summary: |
    조건: 3/a+5/b=1. 삼각형 넓이 = ab/2.
    산기평균: 1=3/a+5/b ≥ 2√(15/(ab)) ⇒ ab ≥ 60 (등호 3/a=5/b).
    ab/2 ≥ 30. 최솟값 30.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "절편식 + 상수 조건 → 산기평균으로 곱 최소"
  mechanism_secondary: ["직선 절편식 활용", "넓이 = ab/2"]
  depth_conditions: ["3/a+5/b=1로 산기 적용", "곱 ab의 최소 도출"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "산기 적용 시 등호 조건 놓침"
    - "삼각형 넓이 공식 실수"
  condition_layers:
    surface: "넓이 최솟값"
    real: "기하 조건 → 대수 조건 → 산기 최소"
    interaction: "직선 절편 · 산기평균 · 기하 (GM 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#443
  page: 121
  problem_summary: |
    실수 x에 대해 x²+16/(9x²+3)의 최솟값과 그때 x의 값. [선행 435]
  solution_summary: |
    분모 9x²+3=3(3x²+1). x²+1/3 = (3x²+1)/3.
    식 = x²+16/{9(x²+1/3)}.
    변형: x²+1/3 + 16/9 · 1/(x²+1/3) - 1/3.
    산기: ≥ 2√{(x²+1/3)·16/(9(x²+1/3))} - 1/3 = 2·4/3-1/3 = 7/3.
    등호 (x²+1/3)²=16/9 ⇒ x²+1/3=4/3 ⇒ x²=1 ⇒ x=±1.
    최솟값 7/3.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "분모 상수 분리 후 산기평균"
  mechanism_secondary: ["역수 변형 위한 (x²+1/3) 치환", "상수 -1/3 조정"]
  depth_conditions: ["16/(9x²+3)의 분모 인수분해 → 상수 분리", "치환 후 산기"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 3
  common_mistakes:
    - "치환 전 산기 시도 실패"
    - "-1/3 상수 조정 누락"
  condition_layers:
    surface: "최솟값·x"
    real: "역수 산기 적용 위한 치환·상수 분리 심화"
    interaction: "산기평균 · 치환 · 유리식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#444
  page: 121
  problem_summary: |
    x>-2일 때 √{(2x²+2x+4)/(x+2)}가 x=a에서 최솟값 b. a+b의 값?
  solution_summary: |
    (2x²+2x+4)/(x+2) = 2(x²+x+2)/(x+2) = 2{(x+2)(x-1)+4}/(x+2) 다항+분수.
    = 2x-2+8/(x+2) = 2(x+2)+8/(x+2)-6.
    x+2>0. 산기: 2(x+2)+8/(x+2)≥2√16=8. 최솟값 8-6=2 (등호 x+2=2, x=0).
    √2. b=√2, a=0. a+b=√2.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "유리식 다항 나누기 → 산기평균"
  mechanism_secondary: ["√ 안 정리", "치환 (x+2)"]
  depth_conditions: ["다항 나눗셈으로 유리식 분해", "산기 후 √ 취함"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 3
  common_mistakes:
    - "다항 나눗셈 실수"
    - "√ 안 최솟값을 √최솟값으로 오해 (실제 √는 증가함수라 OK)"
  condition_layers:
    surface: "a+b"
    real: "유리식 재구성 + 산기 + √"
    interaction: "유리식 · 산기 · 근호"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#445
  page: 121
  problem_summary: |
    a+b=6, a>0,b>0. √a+√(3b)의 최댓값과 그때 a,b. [빈출·서술형·선행 400]
  solution_summary: |
    코시-슈바르츠: (√a+√(3b))² ≤ (1²+(√3)²)((√a)²+(√(3b))²) = 4(a+3b)
    ...wait a+b=6이지 a+3b 아님. 재검토.
    (√a+√(3b))² ≤ (1²+1²)(a+3b) = 2(a+3b). 하지만 a+b=6, a+3b=6+2b 자유.
    실해: 코시 (1²+(√3)²)((√a)²+(√b)²)... 재정리.
    ((1)²+(√3)²)((√a)²+(√b)²) ≥ (√a+√3·√b)² (코시).
    4·6 ≥ (√a+√(3b))². √a+√(3b) ≤ 2√6. 등호 √a/1=√b/√3 ⇒ 3a=b.
    a+b=6에서 a=3/2, b=9/2. 최댓값 2√6.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "코시-슈바르츠 상한 + 등호 조건"
  mechanism_secondary: ["√a·1+√b·√3 형태 인식", "등호 방정식"]
  depth_conditions: ["코시 벡터 형태 (1,√3)·(√a,√b)", "등호 √a=√b/√3 ⇒ 3a=b"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "산술기하평균으로 시도 (최댓값 안 나옴)"
    - "코시 계수 (1,√3) 인식 실패"
  condition_layers:
    surface: "최댓값·a·b"
    real: "코시 벡터 인식 + 등호 연립"
    interaction: "코시 · 근호 · 상수 조건"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#446
  page: 122
  problem_summary: |
    3x+4y=5일 때 9x²+4y²의 최솟값 m, 그때 x,y=a,b. m/(ab)의 값? [빈출]
  solution_summary: |
    코시-슈바르츠: (1²+2²)((3x)²+(2y)²) ≥ (3x+2y)²... 아님 재검토.
    코시: (1²+2²)((3x)²+(2y)²) ≥ (1·3x+2·2y)². 필요한 형태.
    실제: (3x)²+(2y)² = 9x²+4y². 조건 3x+4y=5.
    코시 (a²+b²)(c²+d²)≥(ac+bd)². (1²+2²)(9x²+4y²)≥(3x+4y)²=25 ⇒ 5(9x²+4y²)≥25 ⇒ 9x²+4y²≥5. m=5.
    등호 3x/1=2y/2 ⇒ 6x=2y ⇒ y=3x. 3x+4·3x=5, 15x=5, x=1/3, y=1. a=1/3, b=1.
    m/(ab) = 5/(1/3) = 15.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "코시-슈바르츠 최솟값 + 등호 xy 결정"
  mechanism_secondary: ["계수 인식 (1,2)", "합 조건 대입"]
  depth_conditions: ["코시 벡터 (1,2)·(3x,2y) 형태 인식", "등호 방정식 연립"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "코시 계수 (1,2) 인식 실패"
    - "등호 x=y 오적용"
  condition_layers:
    surface: "m/(ab)"
    real: "코시 계수 인식 → 등호 연립"
    interaction: "코시 · 상수 조건"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#447
  page: 122
  problem_summary: |
    x+y=4 (양수 x,y). 보기 3개 옳은 것?
    ㄱ. √(xy)≤2. ㄴ. √x+√y≤2√2. ㄷ. 1/√x+1/√y≤√2.
  solution_summary: |
    ㄱ. 산기평균: 4=x+y≥2√(xy) → √(xy)≤2. 참.
    ㄴ. 코시: (√x+√y)²≤(1+1)(x+y)=8 ⇒ √x+√y≤2√2. 참.
    ㄷ. 반례 x=1,y=3: 1+1/√3≈1.577>√2≈1.414. 거짓.
    답: ㄱ,ㄴ.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "산기평균·코시 3부등식 판정"
  mechanism_secondary: ["반례 발견 (ㄷ)"]
  depth_conditions: ["ㄴ은 코시, ㄷ은 반례 필요", "산기·코시 구분 사용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "ㄷ의 부등호 방향을 산기로 오해"
    - "반례 발견 실패"
  condition_layers:
    surface: "옳은 3보기"
    real: "산기·코시·반례 병렬 판정"
    interaction: "산기 · 코시 · 반례"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#448
  page: 122
  problem_summary: |
    a²+b²=2, c²+d²=18. ab+cd의 최댓값 M₁, ac+bd의 최댓값 M₂. M₁+M₂?
    (abcd≠0)
  solution_summary: |
    √(a²b²) ≤ (a²+b²)/2 = 1 ⇒ |ab|≤1 (산기평균).
    √(c²d²) ≤ 9 ⇒ |cd|≤9. |ab+cd|≤|ab|+|cd|≤10 ⇒ M₁=10.
    코시: (ac+bd)²≤(a²+b²)(c²+d²)=36 ⇒ |ac+bd|≤6 ⇒ M₂=6.
    M₁+M₂=16.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "산기·코시 결합 (다른 계열 max 조합)"
  mechanism_secondary: ["|ab|·|cd| 각각 산기", "코시 계수 (a,b)·(c,d)"]
  depth_conditions: ["ab+cd는 산기+절댓값 부등식", "ac+bd는 코시"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "M₁도 코시로 시도 (부등호 방향 문제)"
    - "|ab|·|cd| 산기 적용 실수"
  condition_layers:
    surface: "M₁+M₂"
    real: "산기 vs 코시 상황별 구분 활용"
    interaction: "산기 · 코시 · 절댓값"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#449
  page: 122
  problem_summary: |
    사각형 ABCD가 원에 내접·원 중심이 선분 BD 위. AB=1, AD=7일 때
    사각형 ABCD 둘레 길이의 최댓값?
  solution_summary: |
    ∠A=∠C=90° (지름 위 원주각). 두 직각삼각형 BAD, BCD.
    BD²=1²+7²=50. BC=x, CD=y라 하면 x²+y²=50.
    둘레 = 1+7+x+y = 8+(x+y). 코시: (x+y)²≤(1+1)(x²+y²)=100 ⇒ x+y≤10.
    등호 x=y=5. 둘레 최댓값 = 8+10 = 18.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "기하 원 성질 + 코시로 합 최댓값"
  mechanism_secondary: ["지름 위 원주각 = 90°", "코시 (1,1)·(x,y)"]
  depth_conditions: ["BD가 지름 → 두 직각삼각형", "코시로 x+y 상한"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "지름 조건 활용 실패"
    - "산기평균으로 시도 (합 대신 곱)"
  condition_layers:
    surface: "둘레 최댓값"
    real: "기하 조건 → 대수 제약 → 코시"
    interaction: "원기하 · 코시 (GM 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#450
  page: 122
  problem_summary: |
    세 실수 a,b,c에 대해 a+b+c=6일 때 a²+b²+c²의 최솟값?
  solution_summary: |
    코시 일반화: (1²+1²+1²)(a²+b²+c²) ≥ (a+b+c)² = 36.
    3(a²+b²+c²)≥36 ⇒ a²+b²+c²≥12.
    등호 a=b=c=2. 최솟값 12.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "3변수 코시 일반화"
  mechanism_secondary: ["계수 (1,1,1)"]
  depth_conditions: ["코시 3변수 확장 인지", "등호 모두 같음"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "산기평균으로 시도 (부등호 방향)"
    - "2변수 코시만 인지"
  condition_layers:
    surface: "최솟값"
    real: "3변수 코시 표준 활용"
    interaction: "코시 일반화"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#451
  page: 123
  problem_summary: |
    세 실수 x,y,z에 대해 2x²+3y²+z²=16일 때 2x+3y+2z의 최댓값?
  solution_summary: |
    코시: ((√2)²+(√3)²+2²)((√2·x)²+(√3·y)²+z²) ≥ (√2·√2·x+√3·√3·y+2·z)²
        = (2x+3y+2z)².
    (2+3+4)(2x²+3y²+z²) = 9·16 = 144 ≥ (2x+3y+2z)².
    -12 ≤ 2x+3y+2z ≤ 12. 최댓값 12.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "가중 코시 (계수 비율 매칭)"
  mechanism_secondary: ["계수 (√2,√3,2)·(√2 x, √3 y, z) 매칭"]
  depth_conditions: ["가중 코시 계수 배분 (√2 x, √3 y, z)의 이중 사용", "등호 x=y=z/2"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 3
  common_mistakes:
    - "계수 매칭 실패 (√2·x 인식)"
    - "등호 조건 오해"
  condition_layers:
    surface: "최댓값"
    real: "가중 계수 코시 정밀 매칭"
    interaction: "코시 · 가중 계수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#452
  page: 123
  problem_summary: |
    x>1, y>2, z>3일 때 (1+(y-2)/(x-1))(1+(z-3)/(y-2))(1+(x-1)/(z-3))의
    최솟값?
  solution_summary: |
    치환 a=x-1>0, b=y-2>0, c=z-3>0.
    식 = (1+b/a)(1+c/b)(1+a/c) 전개.
    = 1+ (a/c) + (b/a) + b/c + c/b + a/c(b/a) + (c/b)... 정리.
    실제 전개: = 2 + a/c + b/a + b/c + c/b + c/a + a/b (일부).
    산기: 각 항 ≥ 산기평균으로 8. 
    (해설: = 2+(z-3)/(x-1)+(x-1)/(y-2)+(y-2)/(z-3)+... ≥ 2+2·(√(...))+... = 8).
    최솟값 8 (등호 x-1=y-2=z-3).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "삼중 곱 전개 → 여러 산기평균 결합"
  mechanism_secondary: ["치환 (x-1,y-2,z-3)", "다항 전개 후 산기"]
  depth_conditions: ["곱 전개 후 상수+역수쌍 다수 배열", "등호 동시 성립 조건"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "치환 없이 시도 (복잡성 폭증)"
    - "산기 결합 시 항 카운트 실수"
  condition_layers:
    surface: "최솟값"
    real: "치환 → 전개 → 복수 산기 결합"
    interaction: "치환 · 전개 · 산기 결합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#453
  page: 123
  problem_summary: |
    p:(2²+3²)(4x²+25y²)-(4x+15y)²>0, q:(x-a)²+(y-b)²=0.
    ~q가 p의 필요조건이 되도록 하는 20 이하 음 아닌 두 정수 a,b의
    순서쌍 (a,b)의 개수. [빈출]
  solution_summary: |
    ~q가 p의 필요조건 ⇔ p→~q ⇔ Q⊂P^C.
    코시: (2²+3²)(4x²+25y²)≥(2·2x+3·5y)²=(4x+15y)². p ⇔ 등호 X.
    등호 조건: 2x/2 = 5y/3, 즉 3x=5y. 이 때 P^C.
    q: (x,y)=(a,b) 단일 원소. Q⊂P^C ⇔ (a,b) ∈ P^C ⇔ 3a=5b.
    0≤a,b≤20 정수, 3a=5b. b=0,3,6,9,12; a=0,5,10,15,20. 5개.
  category: 명제
  difficulty: STEP2
  mechanism_primary: "코시 등호 조건 + 필요조건 + 정수 개수"
  mechanism_secondary: ["p ⇔ 코시 등호 실패", "~q → 진리집합 (a,b)"]
  depth_conditions: ["p의 실체가 코시 부등식 등호 X임 인식", "3a=5b 정수해 개수"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "p의 코시 부등식 인식 실패"
    - "필요조건 방향 반대"
  condition_layers:
    surface: "순서쌍 개수"
    real: "코시 등호 조건 → 명제 진리집합 → 정수 해"
    interaction: "코시 · 필요조건 · 정수해"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP2-#454
  page: 123
  problem_summary: |
    세 양수 a,b,c에 대해 a/(b+c)+b/(c+a)+c/(a+b)≥3/2 증명 빈칸.
    (가)(나)(다) 채우기. [교육청 기출]
  solution_summary: |
    치환 b+c=x, c+a=y, a+b=z. 2(a+b+c)=(1/2)(x+y+z) (가=1/2).
    각 a,b,c를 x,y,z로 표현.
    a/(b+c)+b/(c+a)+c/(a+b) = (1/2)(y/x + z/x + z/y + x/y + x/z + y/z) + (-3/2)
    = (1/2)(합 6개) - 3/2. 산기평균으로 합 6개 ≥ 6.
    ≥ (1/2)·6 - 3/2 = 3/2. (나=-3/2, 다=1).
  category: 명제
  difficulty: STEP2
  mechanism_primary: "Nesbitt 부등식 증명 (치환 + 산기평균)"
  mechanism_secondary: ["a,b,c → 대칭 x,y,z 치환", "6항 산기평균"]
  depth_conditions: ["표준 Nesbitt 증명 흐름 이해", "치환 계수 (1/2, -3/2) 정합"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes:
    - "치환 후 계수 실수"
    - "산기평균 항 6개 인식 실패"
  condition_layers:
    surface: "3빈칸"
    real: "Nesbitt 부등식 증명 표준 흐름"
    interaction: "치환 · 산기평균 · 대칭식"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

---

## 3. STEP 3 최고난도 전 문항 YAML (#455~#476)

```yaml
- source: 고쟁이-CH06-STEP3-#455
  page: 125
  problem_summary: |
    자연수 k의 양약수 집합 A_k. 세 조건 p:x∈A_m, q:x∈A_24, r:x∈A_n.
    q가 p의 충분·비필요, q가 r의 필요·비충분. m 최솟값+n 최댓값의 합?
  solution_summary: |
    q→p 참, p→q 거짓 ⇒ A_24⊊A_m ⇒ 24가 m 약수 (24|m).
    r→q 참, q→r 거짓 ⇒ A_n⊊A_24 ⇒ n이 24 약수, n≠24 (n|24, n<24).
    m 최솟값 = 48 (24의 배수 중 24 다음). n 최댓값 = 12.
    답: 48+12 = 60.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "약수집합 A_k 진부분집합 관계 → 배수·약수 결정"
  mechanism_secondary: ["A_k⊂A_m ⇔ k|m", "'비필요' 조건 = 진부분집합"]
  depth_conditions: ["A_24⊊A_m ⇔ 24|m and m≠24", "n의 24 진약수 최댓값 = 12"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "A_k⊂A_m ⇔ m|k (방향 반대)"
    - "n=24 포함 여부 오해"
  condition_layers:
    surface: "m+n"
    real: "약수집합 포함관계 이중 방향 활용"
    interaction: "명제 · 약수집합 (PL 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#456
  page: 125
  problem_summary: |
    실수 x에 대한 두 조건 p:√(x+2)/√(x-5)=-√((x+2)/(x-5)),
    q:x²-2x≥a+1. 명제 p→~q의 역이 참이 되도록 하는 실수 a의 최댓값?
  solution_summary: |
    p 조건: √a/√b=-√(a/b) ⇔ a≥0, b<0 (부호 반대).
    즉 x+2≥0 and x-5<0 ⇒ -2≤x<5.
    ~q: x²-2x<a+1.
    p→~q의 역: ~q→p ⇒ Q^C ⊂ P.
    x²-2x-a-1<0 ⇒ 이차부등식. 축 x=1. P=[-2,5).
    Q^C ⊂ P ⇔ 이차부등식 해구간이 [-2,5) 안.
    이차함수 f(x)=x²-2x-(a+1) 대칭축 x=1. f(-2)≥0 and f(5)>0.
    f(-2)=4+4-(a+1)=7-a≥0 ⇒ a≤7. (f(5)=25-10-(a+1)=14-a>0 ⇒ a<14, 자동)
    최댓값 7.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "근호 부호 조건 진리집합 + 이차부등식 해구간 포함"
  mechanism_secondary: ["√A/√B=-√(A/B) 부호 조건", "이차부등식 해구간 포함 조건"]
  depth_conditions: ["p의 근호 조건 정확 해석 (x+2≥0, x-5<0)", "이차 해구간 ⊂ [-2,5) 조건"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "근호 조건 (x-5>0으로) 실수"
    - "역 방향 오해 (~q→p)"
  condition_layers:
    surface: "a 최댓값"
    real: "근호 부호 + 이차 해구간 + 역 방향"
    interaction: "근호 · 이차부등식 · 역 명제"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#457
  page: 125
  problem_summary: |
    두 실수 x,y에 대해 p:1/x+1/y=1, q:(x-1)(y-1)=1, r:가로·세로 x,y
    직사각형 둘레가 넓이 2배. 보기 3개 ㄱ:q→p, ㄴ:~r→~q, ㄷ:~p→r
    중 역이 참인 것?
  solution_summary: |
    p: xy=x+y (xy≠0). q: xy-x-y+1=1 ⇒ xy=x+y. r: 2(x+y)=2xy ⇒ x+y=xy.
    q ⇔ (xy=x+y, xy≠0 조건 없음). q에서 xy=x+y이면 자동 xy≠0? y=0시 x=0 → q식 (x-1)(y-1)=1 성립 x=y=0 → 0≠1 모순, 그래서 xy≠0.
    r: x,y 길이 → x>0,y>0.
    P={(x,y)|xy=x+y, xy≠0}. Q={(x,y)|xy=x+y}. R={(x,y)|xy=x+y, x>0, y>0}.
    R⊂P⊂Q (해설).
    ㄱ 역: p→q ⇔ P⊂Q (참).
    ㄴ 역: ~q→~r ⇔ q→r는 이미 R⊂Q이므로 필요 방향. ~q→~r ⇔ 대우 r→q 참.
    ㄷ 역: r→~p ⇔ R∩P=∅? 실제 R⊂P이므로 거짓.
    답: ㄱ,ㄴ.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "3조건 진리집합 관계 → 3역 명제 판정"
  mechanism_secondary: ["동치 변환 (xy=x+y)", "역과 대우 활용"]
  depth_conditions: ["3식 모두 xy=x+y로 귀결", "부호·정의역 세밀 구분"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "P,Q,R 정의역 구분 실패"
    - "역·대우 혼동"
  condition_layers:
    surface: "역 참 3보기"
    real: "동치 조건 배후 정의역 정밀 구분"
    interaction: "명제 동치 · 정의역 · 역"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#458
  page: 126
  problem_summary: |
    a>0,b>0,c>0일 때 ((3a/4)+2b+(5c/2))(1/(3a+2b)+1/(3b+5c))의 최솟값?
  solution_summary: |
    ((3a+2b)/4 + (3b+5c)/2)((1/(3a+2b)+1/(3b+5c))
    = 1/4 + 1/2 + (3a+2b)/(4(3b+5c)) + (3b+5c)/(2(3a+2b))
    = 3/4 + 2√((3a+2b)/(4(3b+5c)) · (3b+5c)/(2(3a+2b)))
    = 3/4 + 2·1/(2√2) = 3/4 + 1/√2 = 3/4 + √2/2.
    최솟값 3/4 + √2/2.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "복합 유리식 재구성 → 산기평균"
  mechanism_secondary: ["3a/4+2b+5c/2 = (1/4)(3a+2b)+(1/2)(3b+5c) 재조합"]
  depth_conditions: ["복합 항의 재구성 인지", "산기 후 √2 인식"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 3
  common_mistakes:
    - "재조합 실패"
    - "산기 후 계산 실수"
  condition_layers:
    surface: "최솟값"
    real: "복합 다항식 재조합 → 표준 산기 형태"
    interaction: "재조합 · 산기평균 · 유리식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#459
  page: 126
  problem_summary: |
    한 변 a+b 정사각형 ABCD, 네 변에 a:b 내분점 E,F,G,H.
    FH 중점 M. FH=4√6일 때 △FGM 넓이 최댓값? (a>0,b>0)
  solution_summary: |
    좌표 A(0,a+b), B(0,0), C(a+b,0), D(a+b,a+b).
    E(0,b), F(a,0), G(a+b,a), H(b,a+b). (a:b 내분점).
    EH·AE = 90° 등... △FGH 직각이등변삼각형 (기하 분석).
    FH² = ((a-b)²+(a+b)²·차 등). 실제 |FH|²=2(a²+b²)=?
    해설: FH=√2·√(a²+b²). 4√6=√2·√(a²+b²) ⇒ a²+b²=48.
    △FGM 넓이 = (1/2)ab. 산기: a²+b²≥2ab ⇒ ab≤24. (1/2)ab≤12. 최댓값 12.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "기하 좌표화 + 대각선 조건 + 산기평균"
  mechanism_secondary: ["내분점 좌표", "직각삼각형 넓이 = (1/2)ab"]
  depth_conditions: ["FH=√2·√(a²+b²) 도출", "a²+b²≥2ab 산기 후 곱 최대"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "내분점 좌표 실수"
    - "FH 길이 공식 실수"
  condition_layers:
    surface: "넓이 최댓값"
    real: "기하 → 대수 조건 → 산기평균"
    interaction: "기하 · 좌표 · 산기 (GM 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#460
  page: 126
  problem_summary: |
    U의 공집합 아닌 네 부분집합 P,Q,R,S가 네 조건 p,q,r,s의 진리집합.
    (가)~(라) 4조건 만족 상황. 보기 3개 중 옳은 것?
  solution_summary: |
    (가) p→r ⇒ P⊂R. (나) r,~s 만족 원소 존재 ⇒ R-S≠∅.
    (다) Q⊂S^C ⇔ Q∩S=∅. (라) 어떤 x에 p and s ⇒ P∩S≠∅.
    ㄱ. R∪P^C=U? (가) P⊂R → R∪P^C⊃P∪P^C=U. 참.
    ㄴ. R-S≠∅, P∩S≠∅ → R∩S가 R의 부분이면서 서로소이려면? R자체가 원소≥2 필요. 참.
    ㄷ. 반례 존재 (거짓).
    답: ㄱ,ㄴ.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "다중 명제 조건 → 4집합 관계 → 3판정"
  mechanism_secondary: ["부분집합·서로소·존재 조건 통합", "원소 개수 최소"]
  depth_conditions: ["4조건 정확 번역", "'r을 만족시키는 U 원소 존재' → R≠∅"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "조건 (나) 번역 실수"
    - "ㄴ의 원소 개수 논증 실패"
  condition_layers:
    surface: "옳은 3보기"
    real: "다중 명제 → 집합 관계 통합 + 존재 판정"
    interaction: "명제 · 집합 · 원소 개수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#461
  page: 127
  problem_summary: |
    실수 x에 대한 두 조건 p:x²-4≠0, q:x⁴+(k-5)x²-4k+4≠0.
    p가 q의 필요충분조건이 되도록 하는 10 미만 정수 k의 개수. [선행 422]
  solution_summary: |
    p⇔q ⇔ P=Q ⇔ P^C=Q^C.
    P^C={-2,2}. Q^C: x⁴+(k-5)x²-4k+4=0.
    (x²-4)(x²+k-1)=0 (분해). Q^C 실근 조건.
    Q^C = {±2, ±√(1-k)} (1-k≥0인 경우) or {±2} (1-k<0).
    P^C=Q^C ⇔ {±√(1-k)}⊂{±2} or 1-k<0.
    (i) 1-k<0 ⇔ k>1.
    (ii) 1-k=4 ⇔ k=-3 (√(1-k)=2, {±2}으로 이미 포함).
    (iii) 1-k=0 ⇔ k=1 → √0=0, {0,-2,2} vs P^C={-2,2}, 다름 → 불가.
    (iv) 0<1-k<4 (0<1-k<4 즉 -3<k<1): 새로운 원소 추가 → P^C≠Q^C 불가.
    통합: k>1 or k=-3. 정수 k<10: k=-3, 2,3,4,5,6,7,8,9. 9개.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "필충 조건 + 사차방정식 인수분해 + case 통합"
  mechanism_secondary: ["x²=1-k 실근 case", "P^C=Q^C 세밀"]
  depth_conditions: ["x⁴+(k-5)x²-4k+4=(x²-4)(x²+k-1) 분해", "k값 case 통합"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "사차식 분해 실패"
    - "k=1 (0 추가) case 오포함"
  condition_layers:
    surface: "정수 k 개수"
    real: "사차식 인수 + 근집합 정확 대응 + case"
    interaction: "필충 · 사차식 · case"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#462
  page: 127
  problem_summary: |
    세 양수 x,y,z에 대해 항상 성립하는 3보기?
    ㄱ. x²+y²+z²>xy+yz+zx. ㄴ. x³+y³+z³≥3xyz. ㄷ. (x+y)(y+z)(z+x)≥8xyz.
  solution_summary: |
    ㄱ. (1/2)((x-y)²+(y-z)²+(z-x)²)≥0, 등호 x=y=z 시. 부등호 ≥이지 >가 아님. 거짓 (등호 case).
    ㄴ. x³+y³+z³-3xyz = (1/2)(x+y+z)((x-y)²+(y-z)²+(z-x)²) ≥0. 참.
    ㄷ. (x+y)≥2√(xy), (y+z)≥2√(yz), (z+x)≥2√(zx). 곱 ≥ 8xyz. 참.
    답: ㄴ,ㄷ.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "3변수 대칭 부등식 3보기 판정"
  mechanism_secondary: ["제곱합 표현", "산기평균 곱"]
  depth_conditions: ["ㄱ 등호(x=y=z)로 거짓 판정", "ㄷ 3번 산기 곱"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "ㄱ을 ≥로 오해하여 참 판정"
    - "ㄴ의 인수분해 실패"
  condition_layers:
    surface: "옳은 3보기"
    real: "대칭 부등식 정확한 부등호 방향"
    interaction: "대칭식 · 부등식 · 등호"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#463
  page: 127
  problem_summary: |
    n≥2 자연수 n에 대해 √(n²-1)이 유리수가 아님을 증명하는 과정.
    빈칸 (가)(나) 채우기. f(q)=q²+1, g(k)=(2k+1)² 형태. f(2)+g(3)의 값? [교육청 기출]
  solution_summary: |
    √(n²-1)=q/p (p,q 서로소) 가정. p²(n²-1)=q². p|q² and 서로소 → p=1.
    n²-1=q² ⇒ n²=q²+1. (가) q²+1.
    q=2k: (2k)²<n²<(2k+1)²인 자연수 n 없음 (연속 정수 사이 정수 없음). (나) (2k+1)².
    q=2k+1: (2k+1)²<n²<(2k+2)² 자연수 없음.
    ∴ n 존재 안 함 → 유리수 아님.
    f(2)+g(3) = 5 + 49 = 54.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "귀류법 + 연속 정수 사이 자연수 부재 논증"
  mechanism_secondary: ["p²(n²-1)=q² + 서로소 → p=1", "q=2k, 2k+1 case 분할"]
  depth_conditions: ["p=1 결정", "연속 완전제곱수 사이 정수 없음 활용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "p=1 도출 실패"
    - "n²=q²+1의 case 분석 실패"
  condition_layers:
    surface: "f(2)+g(3)"
    real: "√(n²-1) 무리수 귀류법 세밀 논증"
    interaction: "귀류법 · 서로소 · 완전제곱수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#464
  page: 128
  problem_summary: |
    "m>n인 두 자연수 m,n에 대해 m-n과 m+n이 서로소이면 m,n 서로소"의
    대우를 이용하여 증명. [서술형]
  solution_summary: |
    대우: "m,n 서로소 아니면 m-n과 m+n 서로소 아니다."
    m,n의 최대공약수 = k(≥2). m=k·m₀, n=k·n₀ (m₀,n₀ 서로소, m₀>n₀).
    m-n=k(m₀-n₀), m+n=k(m₀+n₀). 둘 다 k 배수 → 서로소 아님.
    대우 참 ⇒ 원명제 참.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "대우 증명 + 공약수 인수 정리"
  mechanism_secondary: ["최대공약수 표현", "공통 인수 도출"]
  depth_conditions: ["대우 진술 정확 표현", "m,n 서로소 아님 → gcd≥2"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "역을 증명 (원명제와 혼동)"
    - "'서로소 아니다' 부정 처리 실수"
  condition_layers:
    surface: "증명"
    real: "대우 진술 정확화 + 공약수 인수 표현"
    interaction: "대우 · 서로소 · gcd"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#465
  page: 128
  problem_summary: |
    "y²-3x=2를 만족시키는 정수 x,y는 존재하지 않는다."를
    귀류법으로 증명. [서술형]
  solution_summary: |
    존재한다고 가정. 3x=y²-2 ⇒ y가 정수, k에 대해 y=3k, 3k+1, 3k+2 case.
    (i) y=3k: y²=9k² → 3x=9k²-2 → x=(9k²-2)/3, 정수 아님.
    (ii) y=3k+1: y²=9k²+6k+1 → 3x=9k²+6k-1, 정수 아님.
    (iii) y=3k+2: y²=9k²+12k+4 → 3x=9k²+12k+2, 정수 아님.
    모든 case 모순. ∴ 정수 (x,y) 존재 안 함.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "귀류법 + 3배수 나머지 case 분할"
  mechanism_secondary: ["y mod 3 세 case", "정수 나누어떨어짐 검증"]
  depth_conditions: ["y²의 3배수 나머지 = 0 or 1 (2 없음)", "case 각각 3x=... 3배수 안됨 확인"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "case 3개 분할 놓침 (y mod 3)"
    - "각 case 산술 실수"
  condition_layers:
    surface: "정수해 부재 증명"
    real: "귀류법 + 나머지류 case 완전 논증"
    interaction: "귀류법 · 나머지 · 정수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#466
  page: 128
  problem_summary: |
    넓이 1200인 화단 직사각형 ABCD. 철수네·영희네 이웃. BC까지 절반씩
    분담, 나머지 철수. 철수 지불 총비용 최소일 때 BC 길이? [교육청 기출]
  solution_summary: |
    AD=x, AB=y (가로·세로). xy=1200.
    울타리 총둘레 = 2(x+y). BC(=x)의 절반씩 → 철수는 x/2 부담 (BC).
    나머지 = 2(x+y)-x = x+2y. 철수 총 = x/2 + (x+2y) - ... 
    해설 정리: 철수 = (3/2)x + 2y.
    산기: (3/2)x + 2y ≥ 2√(3xy) = 2√(3·1200) = 2√3600 = 120. 등호 (3/2)x=2y ⇒ y=(3/4)x.
    xy=1200 → (3/4)x² = 1200 ⇒ x²=1600 ⇒ x=40.
    BC=40.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "실생활 비용 최소 + 제약 + 산기평균"
  mechanism_secondary: ["부담률 분해", "xy=상수 조건 + 산기"]
  depth_conditions: ["철수 부담 비용 정확 표현 (3x/2 + 2y)", "산기 등호에서 x 값 결정"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "철수 부담 비용 표현 실수"
    - "산기 후 y=... 대입 실수"
  condition_layers:
    surface: "BC 길이"
    real: "실생활 → 대수 모델 → 산기 최적"
    interaction: "실생활 · 산기 · 최적화"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#467
  page: 128
  problem_summary: |
    x>0, y>0일 때 (24x²+26xy+6y²)/(4x²+4xy+y²)의 최댓값?
  solution_summary: |
    분자 = 2(12x²+13xy+3y²) = 2(3x+y)(4x+3y). 분모 = (2x+y)².
    식 = 2(3x+y)(4x+3y)/(2x+y)². 치환 t=y/(2x)... 복잡.
    실해: t=(3x+y)/(2x+y), s=(4x+3y)/(2x+y). t+s = (7x+4y)/(2x+y) 등.
    산기: (6x+2y)/(2x+y) + (4x+3y)/(2x+y) ≥ 2√{...}. 계산 결과 max=25/4 (x:y = 특정 비율).
    최댓값 = 25/4.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "인수분해 + 유리식 재구성 → 산기"
  mechanism_secondary: ["분자 인수분해 (3x+y)(4x+3y)", "치환 후 산기"]
  depth_conditions: ["12x²+13xy+3y² = (3x+y)(4x+3y) 정확 인수", "산기 등호 조건"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "인수분해 실패"
    - "치환·산기 결합 실수"
  condition_layers:
    surface: "최댓값"
    real: "고난도 유리식 재구성 + 산기"
    interaction: "인수분해 · 산기평균 · 유리식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#468
  page: 129
  problem_summary: |
    AB=6, BC=8, ∠B=90° 직각삼각형 ABC에 내접 직사각형. 한 변 AC 위,
    두 꼭짓점 AB,BC 위. 직사각형 넓이 최대 S, 그때 둘레 l. l-S? [기하 응용]
  solution_summary: |
    좌표: A(0,6), B(0,0), C(8,0). AC: 6x+8y=48 ⇒ 3x+4y=24.
    직사각형 한 변 AC 위 → AC 방향 벡터 (8,-6)/10.
    복잡한 기하: 두 꼭짓점 AB,BC 위, AC까지 거리 유지.
    닮은삼각형: DE=x, DG=y, AD/AB=x/(AD 위치)... 해설 상세.
    최적 x=... S=(25/12)x+y 만족, 산기평균으로 S=12 최대. l=74/5.
    l-S = 74/5 - 12 = 14/5.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "삼각형 내접 직사각형 + 산기평균 최적"
  mechanism_secondary: ["닮음비", "제약식 25x+12y=... + 산기"]
  depth_conditions: ["삼각형 내접 조건 정확 표현", "제약 하 곱 산기 최대"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "내접 조건 (한 변 AC 위) 처리 실수"
    - "제약식 계수 오류"
  condition_layers:
    surface: "l-S"
    real: "기하 조건 → 제약 대수식 → 산기평균 최적"
    interaction: "기하 · 닮음 · 산기 (GM 연결)"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#469
  page: 129
  problem_summary: |
    0이 아닌 두 실수 a,b에 대해 (9a²+30ab+25b²)/(a²+b²)의 최댓값?
  solution_summary: |
    분자 = (3a+5b)². 식 = (3a+5b)²/(a²+b²).
    코시-슈바르츠: (3a+5b)² ≤ (3²+5²)(a²+b²) = 34(a²+b²).
    ⇒ 식 ≤ 34. 등호 a/3=b/5.
    최댓값 34.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "분자 완전제곱 인식 + 코시 상한"
  mechanism_secondary: ["3a+5b 형태", "코시 계수 (3,5)"]
  depth_conditions: ["분자 = (3a+5b)² 인식", "코시 직접 적용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes:
    - "분자 인수분해 실패"
    - "코시 계수 매칭 실수"
  condition_layers:
    surface: "최댓값"
    real: "완전제곱 인식 → 코시 상한"
    interaction: "인수분해 · 코시"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#470
  page: 129
  problem_summary: |
    대각선 길이 6인 직육면체 겉넓이 최댓값 M, 그때 모든 모서리 길이의
    합 k. M/k의 값?
  solution_summary: |
    세 모서리 a,b,c. a²+b²+c²=36. 겉넓이 = 2(ab+bc+ca).
    ab+bc+ca ≤ a²+b²+c² = 36 (표준 부등식) ⇒ 2·36=72. M=72.
    등호 a=b=c=2√3. k=4(a+b+c)=12·2√3=24√3.
    M/k = 72/(24√3) = 3/√3 = √3.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "직육면체 대각선 제약 + 산기 응용 (합 조합)"
  mechanism_secondary: ["a²+b²+c²≥ab+bc+ca", "등호 a=b=c"]
  depth_conditions: ["ab+bc+ca ≤ a²+b²+c²", "등호 모두 같음 → 산정"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "부등호 방향 오류"
    - "k(모서리 총합) 계산 실수 4(a+b+c)"
  condition_layers:
    surface: "M/k"
    real: "3변수 제곱합 조건 + 대칭 부등식"
    interaction: "3변수 부등식 · 기하"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#471
  page: 129
  problem_summary: |
    AB=8,BC=6,CA=10 직각삼각형 ABC 내부의 점 P에서 세 변까지 거리
    a,b,c일 때 4/a+3/b+5/c의 최솟값?
  solution_summary: |
    삼각형 ABC 넓이 = (1/2)·6·8 = 24.
    넓이 = (1/2)(8a+6b+10c) (P에서 세 변 대응). ⇒ 8a+6b+10c=48, 4a+3b+5c=24.
    코시: (4a+3b+5c)(4/a+3/b+5/c) ≥ (√(4·4)+√(3·3)+√(5·5))² = (4+3+5)²=144.
    24·(4/a+3/b+5/c) ≥ 144 ⇒ 4/a+3/b+5/c ≥ 6.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "기하 (넓이 관계) + 코시-슈바르츠 (곱 조건)"
  mechanism_secondary: ["삼각형 넓이 = (1/2)(변합·수직거리)", "코시 (4,3,5)"]
  depth_conditions: ["넓이 관계로 제약식 도출", "코시 계수 (2,√3,√5)²"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "넓이 관계 8a+6b+10c=48 유도 실패"
    - "코시 (√4,√3,√5) 형태 인식 실수"
  condition_layers:
    surface: "최솟값"
    real: "기하 제약 → 코시 상한 → 역수합"
    interaction: "기하 · 코시 · 역수합"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#472
  page: 130
  problem_summary: |
    a+b=2 만족하는 음 아닌 두 실수 a,b에 대해 1/(a+3) - b/(2a+12)의
    최솟값? [선행 444]
  solution_summary: |
    b=2-a, 0≤a≤2. 식 = 1/(a+3) - (2-a)/(2(a+6)) = ... 정리.
    통분: [2(a+6) - (2-a)(a+3)] / [2(a+3)(a+6)].
    분자 = 2a+12 - (2a+6-a²-3a) = 2a+12 - (-a²-a+6) = a²+3a+6.
    식 = (a²+3a+6) / [2(a+3)(a+6)] = 1/2 - 3/{(a+3)(a+6)+... } 정리.
    변형 후 산기: 최솟값 = 1/6 (등호 (a+2)²=4, a=0).
  category: 명제
  difficulty: STEP3
  mechanism_primary: "제약 대입 → 유리식 정리 → 산기 or 정정"
  mechanism_secondary: ["복잡 통분", "특정 x 극값"]
  depth_conditions: ["복잡한 유리식의 최솟값 추출", "a=0 특수 극값"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes:
    - "통분 시 분자 실수"
    - "산기 등호 조건 오해"
  condition_layers:
    surface: "최솟값"
    real: "복잡 유리식 산기평균 재구성"
    interaction: "유리식 · 산기평균 · 대입"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#473
  page: 130
  problem_summary: |
    세 실수 a,b,c에 대해 a+b+c=5, a²+b²+c²=11. c의 최댓값 M,
    최솟값 m. M+3m의 값?
  solution_summary: |
    a+b=5-c, a²+b²=11-c².
    (a+b)²=a²+b²+2ab ⇒ (5-c)²=(11-c²)+2ab ⇒ ab = (2c²-10c+14)/2 = c²-5c+7.
    a,b는 t²-(5-c)t+(c²-5c+7)=0의 실근. 판별식 ≥0.
    D=(5-c)²-4(c²-5c+7)=25-10c+c²-4c²+20c-28=-3c²+10c-3≥0.
    3c²-10c+3≤0 ⇒ (3c-1)(c-3)≤0 ⇒ 1/3≤c≤3.
    M=3, m=1/3. M+3m = 3+1 = 4.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "대칭 조건 → 판별식 조건 → c 범위"
  mechanism_secondary: ["(a+b)²=a²+b²+2ab", "a,b 실근 조건"]
  depth_conditions: ["a,b를 이차방정식 근으로 표현", "판별식 D≥0"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes:
    - "ab 계산 시 산술 실수"
    - "판별식 부등식 방향 실수"
  condition_layers:
    surface: "M+3m"
    real: "합·제곱합 조건 → 이차방정식 근 → 판별식"
    interaction: "대칭식 · 판별식"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#474
  page: 130
  problem_summary: |
    서로 다른 n개의 자연수 a₁,...,aₙ에 대해 a₁/1²+a₂/2²+...+aₙ/n² ≥
    1/1+1/2+...+1/n 증명 빈칸 (가)(나)(다).
  solution_summary: |
    각 k에 aₖ/k² + 1/aₖ ≥ 2/k (산기, 등호 aₖ/k²=1/aₖ ⇔ aₖ=k).
    (가) 2/k.
    합: Σ aₖ/k² + Σ 1/aₖ ≥ 2·Σ 1/k. (나) 2.
    서로 다른 자연수 → 1/a₁+1/a₂+...+1/aₙ ≤ 1/1+1/2+...+1/n. (다) ≤.
    (자연수 재배열 시 서로 다른 값이라 최소 1,2,...,n).
    두 부등식 빼면 원 부등식 증명.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "여러 산기 결합 + 서로 다른 자연수 최소성"
  mechanism_secondary: ["Σ 산기평균", "1/aₖ 합 상한"]
  depth_conditions: ["각 항 aₖ/k²+1/aₖ ≥ 2/k", "서로 다른 자연수 → 1/aᵢ 합 ≤ 1/i 합"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes:
    - "서로 다른 자연수 조건 활용 실패 (재배열)"
    - "산기 결합 후 이동 실수"
  condition_layers:
    surface: "3빈칸"
    real: "산기 결합 + 재배열 부등식"
    interaction: "산기평균 · 재배열 · 자연수"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#475
  page: 131
  problem_summary: |
    실수 x에 대한 두 조건 p:2|x-n|-|x-2n|+2|x-3n|<4n, q:k-2|x-5|≤2n.
    (가) p의 진리집합 P, Z={x|정수}, n(P∩Z)=6. (나) p는 ~q의 충분조건.
    실수 k의 최솟값? (n은 자연수)
  solution_summary: |
    f(x)=2|x-n|-|x-2n|+2|x-3n|. case별 정의:
    x<n: -3x+6n, n≤x<2n: x+2n, 2n≤x<3n: -x+6n, x≥3n: 3x-6n.
    y=f(x) 그래프 y=4n과 만나는 x: 2/3·n, 2n, 10/3·n. (구간 두 곳).
    p 진리집합 P={x|2n/3<x<10/3·n}, 대칭축 x=2n.
    P∩Z에 정수 6개 ⇒ 3<2n-2n/3<4 ⇒ 9<4n≤12 ⇒ n=3. (n≥3, 조건에 따라)
    ~q: k-2|x-5|>2n ⇔ |x-5|<(k-2n)/2.
    p→~q ⇔ P⊂Q^C ⇔ P의 두 끝 2n/3, 10/3·n이 (5-(k-2n)/2, 5+(k-2n)/2) 안.
    n=3, P=(2,10). Q^C=(5-r, 5+r), r=(k-6)/2. P⊂Q^C ⇒ 5-r≤2, 5+r≥10 ⇒ r≥3 and r≥5.
    최소 r=5, k=6+10=16.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "복합 절댓값 함수 그래프 + 정수 개수 + 구간 포함"
  mechanism_secondary: ["case 분할 4구간", "P∩Z=6에서 n 결정"]
  depth_conditions: ["f(x) 그래프의 좌우 대칭성 및 최고점 도달", "n 자연수 조건 반영"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 6
  common_mistakes:
    - "f(x) case 분할 실수"
    - "n 결정 시 부등호 처리 실수"
  condition_layers:
    surface: "k 최솟값"
    real: "복합 절댓값 그래프 + 정수 개수 + 포함 조건 통합"
    interaction: "절댓값 · 그래프 · 정수 개수 · 포함"
  citation_note: "고쟁이 CH06 · 학습 목적"

- source: 고쟁이-CH06-STEP3-#476
  page: 131
  problem_summary: |
    학생 A,B,C,D 4명 줄 서기. 규칙: (1) 맨 앞 사람은 거짓말만, (2) 참말한
    사람 바로 뒤 사람은 반드시 거짓말, (3) 거짓말한 사람 바로 뒤 사람은
    반드시 참말. 각 진술 분석 후 옳은 3보기 판정.
  solution_summary: |
    맨 앞 학생 → 거짓말. 진술 A(내 자리 맨 뒤 아님)이 거짓 ⇒ A가 맨 뒤.
    맨 앞은 A 제외 B,C,D 중.
    (i) B 맨 앞: B의 진술("C 2번째 아님") 거짓 → C 2번째. 규칙 (2)(3) 검증.
    (ii) C 맨 앞: 진술 "내 앞 B 있음" → 거짓, but C 맨 앞이라 앞이 없어 진술 자체 무관? 
    분석 정리로 가능한 배열 2가지: C-A-D-B, D-A-C-B.
    ㄱ. A 반드시 참말. (A가 2번째, 규칙 (3): 앞 거짓 → 참) 참.
    ㄴ. 맨 뒤 = B. 참.
    ㄷ. 가능 배열 2가지. 참.
    답: ㄱ,ㄴ,ㄷ.
  category: 명제
  difficulty: STEP3
  mechanism_primary: "다중 규칙 진술 논리 case 분석 + 배열 열거"
  mechanism_secondary: ["3규칙 결합", "case별 진술 참거짓 판정"]
  depth_conditions: ["각 진술의 명제 정확 번역", "규칙 (2)(3) 순차 적용"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 7
  common_mistakes:
    - "case 분석 누락"
    - "규칙 (2)(3)의 순차 적용 실수"
  condition_layers:
    surface: "3보기 판정"
    real: "복합 진술 논리 + 배열 case 완전 열거"
    interaction: "명제 · 배열 · case 분석"
  citation_note: "고쟁이 CH06 · 학습 목적"
```

---

## 4. CH06 종합: 명제 mechanism 패턴 분석

### 4.1 mechanism 빈도 통계 (75문 기준)

| mechanism (primary) | 빈도 | 유형 편중 | 비고 |
|---|---|---|---|
| 산술기하평균 (표준·변형·치환) | 15문 | 유형 06 대부분 | ★ 3~4 슬롯 주력 |
| 코시-슈바르츠 (표준·가중) | 8문 | 유형 06, STEP 3 | ★ 4 상급 |
| 진리집합 포함관계 → 필요·충분 | 10문 | 유형 04 | ★ 3 표준 |
| 이차부등식 해집합 case 분석 | 5문 | 유형 01·04, STEP 3 | 매개변수 자유도 |
| 반례 발견 · 5보기 판정 | 6문 | 유형 01·03·06 | ★ 3 단독 표준 |
| '모든'·'어떤' 부정 + 판정 | 5문 | 유형 02 | 판별식 결합 |
| 대우 증명 + 배수·서로소 | 4문 | 유형 05 | ★ 4 표준 |
| 귀류법 (√N 무리수) | 3문 | 유형 05, STEP 3 | ★ 4 정형 |
| 다층 case 통합 (범인·거짓말) | 3문 | 유형 03, STEP 3 | 실전 논리 |
| 기하 + 산기·코시 결합 | 5문 | 유형 06, STEP 3 | GM·EQ 연계 |
| 부분집합 개수 조건 → 집합 크기 결정 | 3문 | 유형 01·04, STEP 3 | CB 연계 |
| 절댓값 함수 그래프 + 포함 조건 | 2문 | STEP 3 | 최고난도 |
| 삼각부등식 |a+b|·|a-b| 판정 | 3문 | 유형 06 | ★ 3 표준 |

### 4.2 유형별 대표 mechanism 배치

| 유형 | 대표 mechanism (★ 3 표준) | 대표 mechanism (★ 4~5 상승) |
|---|---|---|
| 01 명제와 조건 | 진리집합 표현 · 5명제 판정 | 매개변수 case + 진리집합 포함 |
| 02 모든·어떤 | 양화사 부정 · 유한 검증 | 부정 후 이차부등식 결합 |
| 03 역·대우 | 5명제 필충 판정 | 실전 진술 논리 case |
| 04 충분·필요 | 진리집합 방향 매핑 | 부분집합 개수 → 집합 크기 |
| 05 대우·귀류 | √2 무리수 표준 | 대우+공약수, √N 무리수 심화 |
| 06 절대부등식 | 산기평균 표준·변형 | 코시 가중 · 다중 산기 결합 |

### 4.3 depth_condition 분포 (STEP 3에서 두드러진 것)

1. **연쇄 필요·충분 방향 정합** (#455, #457, #475): 3조건 이상 사이에서 방향 반전 위험.
2. **판별식 · 이차부등식 case 분할** (#456, #461): 매개변수 부호에 따라 3~4 case 통합.
3. **기하 제약 → 대수 조건 → 산기·코시** (#459, #468, #471): 3단 변환.
4. **연속 정수 사이 정수 없음 논증** (#463): √N 유리수 부정의 정수론적 심화.
5. **복합 절댓값 함수 그래프 case 분석** (#475): 4구간 case + 대칭성 활용.
6. **case 완전 열거 + 규칙 순차 적용** (#476): 진술 논리 실전.

### 4.4 condition_layers 3층 대표 예시

| 문항 | surface | real | interaction |
|---|---|---|---|
| #405 | Q 개수 | 명제 참 조건의 집합 표현 + 조건부 부분집합 계수 | 명제 · 여집합 · 부분집합 개수 |
| #439 | 오류 진단·재계산 | 산기평균의 등호 동시성립 조건 심화 | 산기평균 · 오류 진단 · 전개 |
| #453 | 순서쌍 개수 | 코시 등호 조건 → 명제 진리집합 → 정수 해 | 코시 · 필요조건 · 정수해 |
| #468 | l-S | 기하 조건 → 제약 대수식 → 산기평균 최적 | 기하 · 닮음 · 산기 (GM 연결) |
| #475 | k 최솟값 | 복합 절댓값 그래프 + 정수 개수 + 포함 조건 통합 | 절댓값 · 그래프 · 정수 개수 · 포함 |

### 4.5 freedom_signals 종합

- **initial_setup_freedom**: 대부분 low (조건 명시). medium은 실생활 지문 2문 (#466, #476).
- **approach_choice**: 유형 01~05는 low~medium. 유형 06과 STEP 3는 medium~high (산기평균 재구성·치환·재조합 등 다중 경로).
- **student_decision_points**: STEP 2 평균 2~3, STEP 3 평균 4~6 (case 분할 다층).

### 4.6 CM2-ST(명제) 라인 mechanism 은행 병합 우선순위

**우선 병합 (mechanism-은행.md 등재 후보 ★★★)**:
1. **진리집합 포함관계 ↔ 명제 참·필요·충분 3방향 매핑** — 유형 01·04 공통 핵심.
2. **산술기하평균 상수 분리 변형** (#435, #437, #441) — 유형 06 주력.
3. **코시-슈바르츠 가중 계수 매칭** (#446, #451, #469) — 상급 표준.
4. **대우 증명 + 배수·서로소** (#431, #432, #464) — 서술형 정형.
5. **부분집합 개수 조건 → 집합 크기 결정** (#405, #427) — CB 연결.

**중요 (mechanism-은행 참고 ★★)**:
6. **양화사 부정 + 판별식 결합** (#415, #416) — 유형 02 심화.
7. **매개변수 case 분할 (이차부등식)** (#407, #408, #428) — 유형 01·04.
8. **기하 → 대수 → 산기·코시 3단 변환** (#442, #449, #459, #468, #471) — GM 연계.
9. **귀류법 √N 무리수 (표준·심화)** (#429, #432, #463) — 유형 05 정형.
10. **Nesbitt 부등식 (a/(b+c)+... ≥ 3/2)** (#454) — 상급 알려진 부등식.

**심화 참고 (STEP 3 최고난도 시드 ★)**:
11. **복합 절댓값 함수 그래프 + 정수 개수** (#475) — 시험지 정점 후보.
12. **case 완전 열거 진술 논리** (#412, #420, #476) — 실전 논리 정점.
13. **연쇄 필요·충분 방향 반전** (#455, #457) — 정점 문항 통찰 위장.
14. **약수집합 A_k 진부분집합 관계** (#455) — PL 연계.
15. **다중 산기평균 결합 + 등호 동시 성립 진단** (#439) — 세련도 정점.

### 4.7 저작권 참고

- 본 문서는 학습 목적 mechanism 추출 · 발문 원문 전사 없음 · 풀이 상세 재구성 (원본 표현 그대로 인용 없음).
- 문항 번호 (#402~#476), 페이지 (p.112~p.131), 출제 유형 라벨 (STEP 2 유형 01~06 · STEP 3)만 원본 정보.
- 마스터 문제은행 등록 시 CM2-ST-A### 코드로 신규 출제 (§"문제 변형 정책" 준수: 숫자만 변경 or 동등 변형).
- bank/schema.md v3.0 · v5.1 8축 mechanism 라벨링 시 본 시드 참조.

---

**작성**: 2026-07-14 · 세션 진행 중
**참조**: bank/mechanism-은행.md · bank/CM2-학기별-시험범위.md · bank/schema.md
**후속 액션**: mechanism-은행.md에 CM2-ST 라인 병합 · 우선순위 1~5 정식 등재 · 시험지 정점 슬롯 소스로 활용
