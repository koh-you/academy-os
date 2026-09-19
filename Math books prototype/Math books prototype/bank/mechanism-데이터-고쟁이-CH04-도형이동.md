---
name: mechanism-데이터-고쟁이-CH04-도형이동
description: 고쟁이 공통수학2 (2022개정) CH04 도형의 이동 STEP 2·STEP 3 전문항 정독 mechanism 데이터 (42문항). 학습 목적, 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: 고쟁이 공통수학2 (2022개정)
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-GM
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 고쟁이 공통수학2 CH04 도형의 이동 — STEP 2·STEP 3 mechanism 데이터

- **출처**: 고쟁이 공통수학2 (2022개정) 정답과 풀이 (동아출판·이투스북)
- **본문**: pp.58~76 (I 도형의 방정식 · 04 도형의 이동)
- **해설**: pp.65~78
- **대상**: STEP 2 (내신 실전문제 체화를 위한 심화 유형) + STEP 3 (내신 최상위권 굳히기를 위한 최고난도 유형) 전 문항
- **범위**: 220~248 (STEP 2, 29문) + 249~261 (STEP 3, 13문. 249는 STEP 2 스키마 페이지 문제로 실질 STEP 2 부록 성격)
- **저작권 처리**: 문제·풀이 원문 인용 없음. 요약·mechanism 분류·조건층·자유도 시그널만 기록 (`bank/이미지-저작권-정책.md` 학습 목적 요약).

---

## (1) 문항 개수·페이지 정리

| 구간 | 페이지(문제) | 문항 번호 | 문항 수 |
|---|---|---|---|
| **STEP 1 참고** (재수록 X, 카운트 X) | p.59~62 | 201~219 | (19문) |
| **STEP 2 (본 분석 대상)** | p.63~69 | 220~250 | **31문** |
| — 유형 01 평행이동 | p.63~64 | 220~226 | 7문 |
| — 유형 02 대칭이동 | p.64~66 | 227~238 | 12문 |
| — 유형 03 점·직선 대칭이동 | p.67 | 239~244 | 6문 |
| — 유형 04 대칭이동을 이용한 최단거리 | p.68~69 | 245~250 | 6문 |
| — 스키마 페이지 (유형 04 심화 예시) | p.70 | (246 재게시) | — |
| **STEP 3 (본 분석 대상)** | p.71~75 | 251~261 | **11문** |
| — 최고난도 유형 (구분 없음) | p.71~75 | 251~261 | 11문 |
| **합계** | — | 220~261 | **42문** |

- STEP 2·3 통합 정독 완료. 해설 페이지도 1:1 매칭 확인.
- 250번의 페이지 위치가 유형 04 마지막, STEP 3 시작 (251) 직전 → STEP 2로 카운트.

---

## (2) 전 문항 YAML

### STEP 2 · 유형 01 평행이동

```yaml
- source: 고쟁이-CH04-STEP2-#220
  page: 63
  problem_summary: |
    P(x,y) 이동 규칙 3가지 (가: y>x → x방향 +3, 나: y<x → y방향 −2, 다: y=x → 정지).
    A(3,8)에서 출발, 정지점 B의 x+y 좌표합.
  solution_summary: |
    (3,8)→(6,8)→(9,8)→(9,10)→(12,10)→(12,12) 정지.
    각 단계 y와 x 대소 비교로 규칙 선택. 5회 이동 후 y=x 도달.
    합 12+12=24.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 이동 규칙 반복(iterative rule)
  mechanism_secondary: [평행이동 반복 · 조건 분기 반복]
  depth_conditions: [영역 조건 y><x · 종료 조건 y=x]
  freedom_signals:
    initial_setup_freedom: low   # 규칙 명시
    approach_choice: low          # 시뮬레이션 유일
    student_decision_points: [매 스텝 조건 분기 판정]
  common_mistakes: [규칙 순서 오해 · 종료 시점 오판]
  condition_layers:
    surface: 점의 이동 규칙
    real: 반복 함수의 고정점 (y=x 위에서 정지)
    interaction: 반복 시뮬레이션 · 조건 논리
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#221
  page: 63
  problem_summary: |
    평행이동 (x,y)→(x+k, y−2)에 의해 원 x²+y²+2x−6y−6=0이
    직선 3x+4y+10=0과 접하도록 하는 모든 상수 k 값의 곱.
  solution_summary: |
    원 표준형 (x+1)²+(y−3)²=16 → 이동 후 중심 (k−1, 1), 반지름 4.
    점-직선 거리 공식 = 반지름 → |3(k−1)+4+10|/5=4 → |3k+11|=20.
    k=3 또는 k=−31/3. 곱 = −31.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 평행이동 후 원-직선 접선 조건
  mechanism_secondary: [절댓값 방정식 · 근의 곱]
  depth_conditions: [원 표준형 변환 · 이동 후 중심 좌표 · 접선 거리=반지름]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium       # k 소거 방식 vs 좌표 대입
    student_decision_points: [원 방정식 정리 · 거리 공식 적용]
  common_mistakes: [평행이동 부호 오류(y방향 −2 vs +2) · 절댓값 두 case 누락]
  condition_layers:
    surface: 원 평행이동+접선
    real: 접선 조건이 |3k+11|=20 절댓값 방정식으로 환원
    interaction: 절댓값 → 두 해 → 곱
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#222
  page: 63
  problem_summary: |
    원 x²+y²−2x+6y+6=0을 평행이동한 원 C가 직선 x+y−3=0으로
    나누어질 때 두 부분 넓이의 차.
  solution_summary: |
    원 표준형 (x−1)²+(y+3)²=4 → 이동 (x+1)²+(y−2)²=4.
    중심 (−1,2)에서 직선 x+y−3=0까지 거리 =|−1+2−3|/√2=√2.
    반지름 2, 거리 √2 → 원과 직선 교점 사이 현 길이 2√(4−2)=2√2.
    큰 부분(반원+삼각형) − 작은 부분(활꼴). 실제 계산:
    반지름 2 반원 넓이 + 반지름 2·직각변 2√2 직각이등변삼각형 넓이의 합.
    답 = ½·4π + ½·(2√2)² = 2π+4.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 원-직선 교차 도형 넓이 차
  mechanism_secondary: [평행이동 · 활꼴/부채꼴 분해]
  depth_conditions: [평행이동 후 중심 · 거리↔현길이 · 원 분할 넓이 대칭성]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high          # 원 분할 방법 다양
    student_decision_points: [원 vs 삼각형 분해 방식]
  common_mistakes: [활꼴 넓이 vs 대칭 성질 오용 · 원 분할이 반원+대칭이라는 성질 오인]
  condition_layers:
    surface: 원 이동+직선
    real: 현 길이 2√2 → 중심 O·현 양끝을 잇는 삼각형이 직각이등변
    interaction: 넓이 차 = 반원 넓이 + 직각이등변삼각형 넓이 (구조적 대칭)
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#223
  page: 63
  problem_summary: |
    원 x²+y²=2에 접하고 기울기 m인 직선을 y방향 6만큼 평행이동
    했더니 다시 원 x²+y²=2에 접함. m² 값.
  solution_summary: |
    접선 y=mx±√2·√(m²+1). 위 접선을 6 아래로 평행이동해도 접선.
    즉 y=mx+√2√(m²+1) − 6 = mx − √2√(m²+1) → 2√(2(m²+1))=6 → m²=7/2.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 원의 두 접선 · 평행이동으로 자기 자신에 다시 접함
  mechanism_secondary: [기울기 m 접선 공식 · 두 접선 간 y절편 차]
  depth_conditions: [두 접선의 y절편 차이 = 이동 거리 6]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [두 접선의 관계 파악 · 대칭 구조]
  common_mistakes: [접선 하나만 고려 · ± 부호 처리]
  condition_layers:
    surface: 원 접선 · 평행이동
    real: 원점 대칭 두 접선의 y절편 차 = 2√(2(m²+1))
    interaction: 6=2√(2(m²+1)) 방정식화
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#224
  page: 63
  problem_summary: |
    원 x²+y²−6x+8=0을 x방향 a, y방향 b 평행이동한 원의 중심이
    제2사분면 & 이동된 원이 y축과 직선 y=−x에 동시에 접함. a+b 값.
  solution_summary: |
    원 표준형 (x−3)²+y²=1 → 이동 후 중심 (a+3, b), 반지름 1.
    y축 접함 → |a+3|=1, 중심이 2사분면이므로 a+3=−1, a=−4.
    y=−x 접함 → |(−1)+b|/√2=1 → |b−1|=√2 → b=√2+1 (b>0).
    a+b = −3+√2.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 원의 이중 접선 조건 (직선 2개)
  mechanism_secondary: [평행이동 · 사분면 판정 · 부호 결정]
  depth_conditions: [y축 접함 조건 · y=−x 접함 조건 · 사분면 조건]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [사분면 조건으로 부호 결정 · b>0 조건 활용]
  common_mistakes: [절댓값 부호 결정 실패 · 사분면 조건 미활용]
  condition_layers:
    surface: 원 접선 조건
    real: 두 접선 = 두 방정식 · 사분면 = 부호 결정 조건
    interaction: 3개 방정식(y축·y=−x·사분면)으로 2개 미지수 결정
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#225
  page: 64
  problem_summary: |
    포물선 y=x²+2ax+2a²을 y=x²+a²−a로 옮기는 평행이동에 의해
    원 C₁:x²+(y−5)²=9을 이동한 원을 C₂. 두 원이 서로 다른 두 점 A,B에서
    만나고 AB=2. 양수 a 값.
  solution_summary: |
    두 포물선 꼭짓점 (−a, a²) → (0, a²−a). x방향 +a, y방향 −a 평행이동.
    C₁ 중심 (0,5), 이동 후 C₂ 중심 (a, 5−a), 두 원 반지름 3.
    두 중심 사이 거리 O₁O₂ = √(a²+a²)=a√2.
    두 원 교점 사이 거리 AB=2, AH=1, 반지름 3 → 중심-현 거리 O₁H=√(9−1)=2√2.
    두 원 중심 반사 → O₁O₂=2·O₁H=4√2 → a√2=4√2 → a=4.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 포물선 평행이동으로부터 이동 벡터 추출 → 두 원의 상호 위치
  mechanism_secondary: [두 원의 교선 길이 · 마름모 성질(O₁AO₂B)]
  depth_conditions: [포물선 이동 벡터 결정 · 원 중심 반사 · 반지름-교선-거리 관계]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [포물선 → 이동 벡터 추출 방법 선택]
  common_mistakes: [이동 벡터 부호 오류 · O₁H=½O₁O₂ (마름모) 성질 미사용]
  condition_layers:
    surface: 포물선 이동 + 원 두 개 교점
    real: 두 원 반지름 같음 → 사각형 O₁AO₂B 마름모 → 두 대각선 수직이등분
    interaction: AB↔중심선 O₁O₂ 수직이등분 관계
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#226
  page: 64
  problem_summary: |
    O(0,0), A(−4,0), B(0,3) 꼭짓점 삼각형 OAB를 평행이동한 삼각형 O′A′B′.
    A′(2,1)일 때 삼각형 O′A′B′에 내접하는 원의 방정식 (x−p)²+(y−q)²=r².
    p+q+r 값.
  solution_summary: |
    OAB 내접원: 3-4-5 직각삼각형, 넓이 6, 둘레 12, 내접원 반지름 = 2·6/12 = 1.
    내접원 중심 (−1, 1). 원 방정식 (x+1)²+(y−1)²=1.
    A(−4,0)→A′(2,1) → x방향 +6, y방향 +1 이동.
    내접원 중심 이동 (5, 2). 즉 (x−5)²+(y−2)²=1. p+q+r = 5+2+1=8.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 삼각형+내접원 → 평행이동 후 파라미터 추출
  mechanism_secondary: [3-4-5 직각삼각형 내접원 공식 · 이동 벡터 결정]
  depth_conditions: [내접원 반지름 공식 (넓이=반지름·둘레/2) · 평행이동 벡터]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [내접원 중심 좌표 결정]
  common_mistakes: [내접원 반지름 공식 실수 · 중심 좌표 부호 오류]
  condition_layers:
    surface: 삼각형 이동 후 내접원
    real: 도형 전체가 평행이동되면 부속 도형(내접원)도 같은 이동
    interaction: 이동 벡터를 A→A′로 결정한 후 내접원 중심에 그대로 적용
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"
```

### STEP 2 · 유형 02 대칭이동

```yaml
- source: 고쟁이-CH04-STEP2-#227
  page: 64
  problem_summary: |
    P(x,y) 이동 규칙: xy>0이면 x>y→y=x 대칭, x≤y→(x+4,y−6) 이동;
    xy<0이면 x축 대칭; xy=0이면 정지.
    P(5,2)에서 n번 이동 후 (a,b)에서 정지. a+b+n 값.
  solution_summary: |
    (5,2)→(2,5)[y=x대칭, x<y로 이동]→(6,−1)[xy>0, x>y? 안됨. (x+4,y−6)]
    →(6,1)[xy<0, x축대칭]→(1,6)[y=x대칭]→(5,0)[xy>0, (x+4,y−6)].
    xy=0 정지. n=5, a=5, b=0. a+b+n=10.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 다중 조건 분기 이동 규칙 (대칭+평행 혼합)
  mechanism_secondary: [조건 분기 · 정지 판정]
  depth_conditions: [xy 부호 조건 · x-y 대소 조건 · xy=0 종료]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [매 스텝 부호+대소 이중 분기]
  common_mistakes: [분기 조건 오해석 · 대칭이동 결과 오산]
  condition_layers:
    surface: 점의 이동 규칙
    real: 반복 함수의 흡수 상태(x축에서 종료)
    interaction: 시뮬레이션 · 부호+대소 조건 이중 분기
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#228
  page: 64
  problem_summary: |
    <보기> 4개 도형(ㄱ. x=2, ㄴ. |x|+|y|=4, ㄷ. y=x²+2|x|−3, ㄹ. x²+y²−3x+1=0)
    중 x축 대칭이동 시 자기 자신과 일치하는 것.
  solution_summary: |
    ㄱ. x=2 → x=2 (자기). 참.
    ㄴ. |x|+|−y|=4 → 자기. 참.
    ㄷ. −y=x²+2|x|−3 → y=−x²−2|x|+3 ≠ 원식. 거짓.
    ㄹ. x²+y²−3x+1=0 → x²+(−y)²−3x+1=0 → 동일. 참.
    답: ㄱ,ㄴ,ㄹ.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 대칭이동 불변 판정 (x축 대칭 = y→−y 대입 시 불변)
  mechanism_secondary: [절댓값 · 짝수차 판별]
  depth_conditions: [f(x,−y)=f(x,y) 판정]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [각 식에 y→−y 대입]
  common_mistakes: [ㄷ에서 −y=... 대입 결과 오해 · 절댓값 항의 대칭성 오인]
  condition_layers:
    surface: 도형 대칭성 판정
    real: 대칭이동 = 좌표 변환의 불변식 정의
    interaction: 대입 후 원식 비교
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#229
  page: 64
  problem_summary: |
    (서술형) 직선 2x+y−3=0을 y=x 대칭 후 x방향 k만큼 평행이동하면
    원 (x−2)²+y²=5와 만나는 k 값의 범위 서술.
  solution_summary: |
    y=x 대칭: x↔y → 2y+x−3=0 → x+2y−3=0.
    x방향 k 이동: (x−k)+2y−3=0 → x+2y−k−3=0.
    이 직선이 원 (x−2)²+y²=5의 중심 (2,0)에서 거리 ≤ √5.
    |2+0−k−3|/√5 ≤ √5 → |k+1|≤5 → −6≤k≤4.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 대칭이동+평행이동 합성 → 직선-원 만남 조건
  mechanism_secondary: [점-직선 거리 부등식 · 절댓값 부등식]
  depth_conditions: [y=x 대칭 · x방향 평행이동 · 만남 조건 거리≤반지름]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [대칭이동 → 방정식 변환 · 부등식 표현]
  common_mistakes: [y=x 대칭 부호 오류 · 만남 조건이 ≤ (같아도 만남) 부등식]
  condition_layers:
    surface: 직선 대칭+평행이동
    real: "만남" = 거리 ≤ 반지름 (접함 포함)
    interaction: 절댓값 부등식 → 실수 k 범위
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#230
  page: 65
  problem_summary: |
    제2사분면 직선 y=−2x+3 위 점 P(a,b) → y=x 대칭 Q, → 원점 대칭 R.
    삼각형 PQR 넓이 45. a+b 값.
  solution_summary: |
    b=−2a+3 (a<0). Q(b,a), R(−a,−b).
    PQ=√2|a−b|, QR=√2|a+b|, PR=2√(a²+b²).
    PR²=PQ²+QR² 성질 확인 → ∠PQR=90° 직각삼각형.
    넓이 = ½·PQ·QR = ½·√2|a−b|·√2|a+b| = |a²−b²| = |a²−(−2a+3)²| = |3a²−12a+9|=45.
    3a²−12a+9=±45. a²−4a+3=±15. 실근 조건 a²−4a+3=15 → a²−4a−12=0 → a=−2 (a<0).
    b=−2·(−2)+3=7. a+b=5.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 3중 대칭이동 (y=x·원점) → 삼각형 넓이
  mechanism_secondary: [PQ,QR 길이 공식 · 피타고라스 정리 확인]
  depth_conditions: [세 점 좌표 대칭관계 · 직각 판정 · 절댓값 이차방정식]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [직각삼각형 성질 인식 · 절댓값 case 분기]
  common_mistakes: [∠PQR=90° 미인식 → 벡터/헤론공식 사용 · 절댓값 case 누락]
  condition_layers:
    surface: 세 대칭 점 삼각형
    real: 세 대칭점 P·Q·R은 직각삼각형 (∠Q=90°) 자동 성립
    interaction: 넓이 = ½·|a²−b²| 간결한 형태
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#231
  page: 65
  problem_summary: |
    곡선 y=x²+3x를 x방향 a만큼 평행이동하면 직선 y=−x와 두 점 P,Q에서
    만나고 두 점 P,Q가 원점 대칭. 두 점 P,Q의 x좌표의 곱.
  solution_summary: |
    이동 후 y=(x−a)²+3(x−a). 직선 y=−x와 만남: (x−a)²+3(x−a)+x=0
    → x²+(4−2a)x+a²−3a=0.
    P(k,−k), Q가 원점 대칭 → Q(−k, k). 두 근 합 = k+(−k)=0? 아니.
    두 근을 α, β라 하면 P의 x좌표 = α, Q의 x좌표 = β. 원점 대칭이면 β=−α.
    합 α+β=0 → 4−2a=0 → a=2. 곱 α·β=a²−3a=4−6=−2.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 평행이동 후 곡선-직선 교점의 원점 대칭 조건
  mechanism_secondary: [근과 계수 관계 · 원점 대칭 = 두 근 합 0]
  depth_conditions: [교점 방정식 이차형 · 대칭 = 근의 합 0 → 이동량 결정]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [대칭 조건 → 근합=0 인식]
  common_mistakes: [원점 대칭을 두 점 각각 대칭 오해 · 근과 계수 부호 오류]
  condition_layers:
    surface: 이차곡선 평행이동+교점
    real: 원점 대칭 = 두 근의 합 0 = 이차항 계수 조건
    interaction: 근합=0으로 a 결정, 근곱으로 답
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#232
  page: 65
  problem_summary: |
    A(11,k), B(1,5)를 y=x 대칭 A′, B′. 직선 AB와 A′B′의 교점 P.
    삼각형 APA′와 BPB′ 넓이비 9:4. 삼각형 APA′ 넓이 m. k+m 값. (0<k<11)
  solution_summary: |
    A′(k,11), B′(5,1). AB=A′B′ (등변이동)이고 두 삼각형 닮음, 넓이비 9:4 → 닮음비 3:2.
    AA′:BB′=3:2 → √((11−k)²+(k−11)²) : √(4²+4²) = 3:2
    → √2·|11−k| : 4√2 = 3:2 → |11−k|=6, k=5 또는 k=17. (0<k<11) → k=5.
    AB 직선 y=5, 교점 P(5,5), AA′중점 M(8,8), AA′=6√2, PM=3√2.
    넓이 m = ½·6√2·3√2 = 18. k+m=23.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: y=x 대칭 두 선분 → 닮음 이등변삼각형 대응
  mechanism_secondary: [넓이비 → 닮음비 → 길이비 → k 결정]
  depth_conditions: [AA′⊥y=x · 등변이동 · 두 이등변삼각형 닮음]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [닮음 관계 인식 · k 범위 조건 활용]
  common_mistakes: [넓이비 9:4를 3:2가 아닌 다른 비율로 오변환 · k 범위 무시]
  condition_layers:
    surface: 대칭이동 후 두 삼각형 넓이비
    real: y=x 대칭으로 만들어진 두 이등변삼각형은 닮음
    interaction: 넓이비 → √9:√4 = 3:2 닮음비 → 대응 길이 방정식
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#233
  page: 65
  problem_summary: |
    포물선 y=x²−2x−2 위 두 점 A,B가 y=x 대칭. 선분 AB 길이.
  solution_summary: |
    A(p,q), B(q,p) (p≠q). 포물선 위 → q=p²−2p−2, p=q²−2q−2.
    변변 빼면 (p+q−1)(p−q)=0 → p+q=1.
    p+q=1을 대입 → q=1−p → 1−p=p²−2p−2 → p²−p−3=0.
    p+q=1, pq=−3. AB=√2·|p−q|=√2·√((p+q)²−4pq)=√2·√13=√26.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 곡선 위 y=x 대칭 점 쌍 → 대칭식 두 근
  mechanism_secondary: [대칭식 변변 빼기 → 인수분해 → 근과 계수 관계]
  depth_conditions: [A·B 모두 곡선 위 · y=x 대칭 (좌표 swap)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [대칭 조건 활용 방식 (변변 빼기 vs 직접 대입)]
  common_mistakes: [p=q 근 배제 실패 · 근과 계수 관계 적용 오류]
  condition_layers:
    surface: 포물선 위 두 대칭점
    real: y=x 대칭 두 점 = 두 좌표 swap → 대칭식
    interaction: 대칭식 → 이차방정식 → 근과 계수
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#234
  page: 65
  problem_summary: |
    도형 A를 나타내는 방정식 f(x,y)=0일 때, <보기> 4식 중
    (그림의) 도형 B를 나타내는 것 (그림: A는 [2,3]×[1,2] 사각형, B는 [−2,−1]×[−2,−1] 사각형).
  solution_summary: |
    A→B는 원점 대칭 (x→−x, y→−y) 관계. 그러나 그림 세부 좌표에 의해
    A: [2,3]×[1,2], B: [−2,−1]×[−2,−1]. B = A를 x축 대칭 후 x방향 −4, y방향 −3 이동.
    ㄱ. f(x+4, y+3)=0 → x→x+4, y→y+3 = A를 x −4, y −3 평행이동. B와 일치? 그림 대조 확인.
    ㄹ. f(y+4, x+3)=0 → y=x 대칭 후 x −3, y −4 평행이동. B와 일치.
    답: ㄱ, ㄹ.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 방정식 f(...)=0 형태 → 도형 이동 해석 (다중 이동 결합)
  mechanism_secondary: [평행이동/대칭이동 방정식 규칙 · 다단계 합성]
  depth_conditions: [각 <보기>가 나타내는 이동 조합 · 그림과 대조]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [각 식의 이동 해석]
  common_mistakes: [x·y swap의 y=x 대칭 오해 · 이동 방향 부호]
  condition_layers:
    surface: 방정식 형태 → 도형 이동
    real: f(x−a, y−b)=0은 (a,b) 평행이동, f(−x, y)=0은 y축 대칭 등 규칙 체화
    interaction: 다중 이동 = 방정식 대입 순서
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#235
  page: 66
  problem_summary: |
    f(x,y)=0의 도형이 그림과 같을 때 (그림: (−4,0)-(−2,0)-(−2,2)-내부),
    f(4−x, y)=0, f(4−x, −y)=0, f(y, x)=0 세 도형으로 둘러싸인 부분 넓이.
  solution_summary: |
    f(4−x,y)=0: f(−(x−4),y)=0 → f(x,y)=0을 y축 대칭 후 x방향 +4 이동.
    f(4−x,−y)=0: 위 도형을 다시 x축 대칭.
    f(y,x)=0: f(x,y)=0을 y=x 대칭.
    세 도형을 좌표평면에 그리고 원 도형과 함께 둘러싸인 영역:
    한 변 4인 정사각형 + 밑변 4·높이 2 삼각형 → 16+4=20.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 방정식 다중 이동으로 4도형 배치 → 영역 넓이
  mechanism_secondary: [축·y=x 대칭 · 평행이동 결합 · 영역 분해]
  depth_conditions: [세 식 각각의 도형 위치 파악 · 4도형 상호 위치 · 둘러싸인 영역]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [4도형 그림 정합 · 영역 분할]
  common_mistakes: [식→도형 변환 오류 · 영역 경계 오해]
  condition_layers:
    surface: 방정식 여러 개 + 넓이
    real: f(4−x, y)= y축대칭 + 평행이동 (계수 −1이 x−4를 −(x−4)로 만든 것)
    interaction: 각 이동 도형을 좌표에 표기 → 영역 정사각형+삼각형 분해
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#236
  page: 66
  problem_summary: |
    실수 a,b: 원 x²+(y+2)²=1을 x방향 a, y방향 b 평행이동한 도형 C.
    a²+b²=4b일 때 원점과 C 위 점 P 사이 거리의 최댓값·최솟값 곱.
  solution_summary: |
    C: (x−a)²+(y−(b−2))²=1. 중심 (a, b−2), 반지름 1.
    a²+b²=4b → a²+(b−2)²=4. 즉 (a, b−2)는 원 x²+y²=4 (원점 중심, 반지름 2) 위.
    원점과 C 중심 사이 거리 = 2 (일정). C 위 점 거리 최대=2+1=3, 최소=2−1=1.
    곱 = 3.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 이동된 원의 중심이 다른 원 위 (조건 방정식) → 두 원 상호작용
  mechanism_secondary: [원 위의 원 · 거리 최대/최소 = R±r]
  depth_conditions: [a²+b²=4b 완전제곱화 → 중심 좌표가 새 원 위]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [조건식이 원의 방정식임을 인식]
  common_mistakes: [a²+b²=4b 완전제곱 실패 · 원점-중심 거리 고정 미인식]
  condition_layers:
    surface: 원 이동 + 조건식 + 거리 최대/최소
    real: 조건식 완전제곱 = 중심의 궤적이 원
    interaction: 원 위의 원 → 거리 = 중심간거리 ± 반지름
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#237
  page: 66
  problem_summary: |
    f(x,y)=0 도형이 (2,0),(0,−2),(4,−2) 꼭짓점 삼각형일 때,
    도형 f(x,y)=0 위의 점 (a,b)와 도형 f(y+1,−x−3)=0 위의 점 (c,d)에 대해
    (d−b)/(c−a)의 최댓값·최솟값의 합.
  solution_summary: |
    f(y+1,−x−3)=0: f(x,y)=0을 y=x 대칭 후 y축 대칭 후 x방향 −3, y방향 −1 이동.
    두 도형(원 삼각형·이동된 삼각형)을 그림. (d−b)/(c−a)는 두 도형 위 점을 잇는 직선 기울기.
    최소 기울기: (0,−2)와 (−1,3)을 잇는 직선 = (3−(−2))/(−1−0)=−5.
    최대 기울기: (2,0)와 (−1,−1)을 잇는 직선 = (−1−0)/(−1−2)=1/3.
    합 = −5 + 1/3 = −14/3.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 이중 대칭+평행이동으로 두 도형 → 두 점을 잇는 직선의 기울기 최대/최소
  mechanism_secondary: [두 볼록도형의 극단점 잇기]
  depth_conditions: [이동된 도형 정확 위치 · 기울기 극값 = 접선 후보]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [기울기 극값을 결정하는 꼭짓점 쌍 선택]
  common_mistakes: [이동 도형 위치 오류 · 극단 기울기 꼭짓점 잘못 선택]
  condition_layers:
    surface: 두 도형+기울기 극값
    real: 두 볼록도형의 상호 위치 → 기울기 극단 = 특정 꼭짓점 쌍
    interaction: 꼭짓점 조합 4개 검토 → 최대/최소
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#238
  page: 66
  problem_summary: |
    원 x²+y²+8x+4y+16=0 위 두 점 P(a,b), Q(c,d).
    (b+c)/(a+d)의 최댓값 M, 최솟값 m. M+m 값.
  solution_summary: |
    (b+c)/(a+d) = (b−(−c))/(a−(−d)). 두 점 (a,b)와 (−d,−c)를 잇는 직선의 기울기.
    (−d,−c)는 (c,d)를 원점 대칭 후 y=x 대칭 = (c,d)를 y=−x 대칭한 점.
    Q가 원 위 → (−d,−c)는 원의 y=−x 대칭한 원 위. 원 중심 (−4,−2), 반지름 2.
    대칭 후 원: 중심 (2,4), 반지름 2. 두 원 중심 잇는 선분 중점 ((−4+2)/2, (−2+4)/2)=(−1,1).
    (−1,1) 지나며 두 원에 동시에 접하는 직선의 기울기 최대/최소.
    직선 y−1=k(x+1) → kx−y+k+1=0. 원 (x+4)²+(y+2)²=4에 접함:
    |−4k+2+k+1|/√(k²+1)=2 → |−3k+3|=2√(k²+1) → 9k²−18k+9=4k²+4
    → 5k²−18k+5=0 → k=(18±√(324−100))/10=(9±√14·2)/5. 사실 근:
    k=(9±2√14)/5. M+m = (9+2√14)/5 + (9−2√14)/5 = 18/5.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 두 점 좌표 비율 → 대칭이동으로 하나 원 변환 → 두 원 공통 접선 기울기 극값
  mechanism_secondary: [y=−x 대칭 · 원 이동 · 근의 합 (Vieta)]
  depth_conditions: [(b+c)/(a+d) 재해석 · 두 원 접선 조건 · k 이차방정식 · 근의 합]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: [두 점 좌표 비율의 재해석 · 대칭 후 원 재구성]
  common_mistakes: [(b+c)/(a+d) 기울기 재해석 실패 · 접선 조건 오류]
  condition_layers:
    surface: 원 위 두 점 좌표 비율
    real: (b+c)/(a+d) = (b−(−c))/(a−(−d)) = 두 점 잇는 직선 기울기
    interaction: 대칭 → 두 원 → 공통접선 → k 극값 = M+m = 근의 합 = 18/5
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"
```

### STEP 2 · 유형 03 점·직선에 대한 대칭이동

```yaml
- source: 고쟁이-CH04-STEP2-#239
  page: 67
  problem_summary: |
    직선 y=−3x−3을 점 (1,2)에 대하여 대칭이동한 직선 l의 방정식 y=ax+b.
    a+b 값.
  solution_summary: |
    점 대칭은 평행이동+원점 대칭 조합. 기울기 불변 → a=−3.
    직선 y=−3x−3 위 점 (−1,0)을 (1,2) 대칭 → (3,4).
    l: y=−3x+b이고 (3,4) 지남 → 4=−9+b → b=13. a+b=10.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 점 대칭 (기울기 불변 + 대칭점 결정)
  mechanism_secondary: [중점 = 대칭 중심 · 직선 위 한 점의 대칭]
  depth_conditions: [기울기 불변 · 한 점의 대칭점 계산]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [대칭할 점 선택 · f(2a−x, 2b−y)=0 공식 활용]
  common_mistakes: [기울기 부호 오해 · 대칭점 계산 오류]
  condition_layers:
    surface: 직선의 점 대칭
    real: 점 대칭 = 원점 대칭+평행이동 = 기울기 불변
    interaction: 한 점의 대칭 → 새 직선 통과
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#240
  page: 67
  problem_summary: |
    이차함수 y=x²+1의 그래프를 점 (2,−1)에 대칭이동한 그래프가
    y=x²+1을 원점 대칭 후 x방향 a, y방향 b 평행이동과 같음. a+b 값.
  solution_summary: |
    y=x²+1 꼭짓점 (0,1). (2,−1) 대칭 → (4,−3). 대칭 후 이차함수 아래로 볼록,
    이차항 계수 −1: y=−(x−4)²−3.
    y=x²+1 원점 대칭 → y=−x²−1. x방향 4, y방향 −2 이동 → y=−(x−4)²−3.
    a=4, b=−2. a+b=2.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 이차함수 점 대칭 = 원점 대칭 + 평행이동 분해
  mechanism_secondary: [꼭짓점 대칭 · 이차항 계수 부호]
  depth_conditions: [점 대칭 후 이차항 계수 −1 (아래로 볼록) · 꼭짓점 대칭 위치]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [원점 대칭 후 평행이동 벡터 결정]
  common_mistakes: [이차항 계수 부호 착오 · 꼭짓점 대칭 실수]
  condition_layers:
    surface: 이차함수 점 대칭
    real: 점 대칭 = 원점 대칭+평행이동 (평행이동 벡터 = 2·(대칭중심))
    interaction: 꼭짓점 대응으로 이동 벡터 검증
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#241
  page: 67
  problem_summary: |
    (서술형) 원 x²+y²+6x+4y+4=0을 직선 y=mx+n 대칭이동하면
    x²+y²+2x−12y+k=0이 될 때 k·m·n 값.
  solution_summary: |
    원 1: 중심 (−3,−2), 반지름 √9=3. 원 2: 중심 (−1,6), 반지름 √(37−k).
    대칭이동 → 반지름 같음: 9=37−k → k=28.
    두 중심 (−3,−2)와 (−1,6)의 수직이등분선이 y=mx+n.
    중점 (−2, 2), 두 중심 잇는 직선 기울기 (6−(−2))/(−1−(−3))=4.
    수직이등분선 기울기 −1/4. y−2=−¼(x+2) → y=−¼x+3/2.
    m=−¼, n=3/2. k·m·n = 28·(−¼)·(3/2)=−21/2.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 원의 직선 대칭 = 두 중심의 수직이등분선 = 대칭축
  mechanism_secondary: [반지름 불변 → k 결정 · 두 점 수직이등분선]
  depth_conditions: [반지름 조건 · 중심 대칭 = 수직이등분선]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [원의 표준형 변환 · 수직이등분선 방정식]
  common_mistakes: [반지름 조건 활용 실패 · 수직이등분선 기울기 부호]
  condition_layers:
    surface: 원의 직선 대칭
    real: 원 대칭 = 반지름 불변 + 중심 대칭
    interaction: 반지름 조건→k, 중심 대칭→수직이등분선→m,n
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#242
  page: 67
  problem_summary: |
    직선 3x−y−2=0을 직선 x−2y+6=0 대칭이동한 직선 방정식.
  solution_summary: |
    두 직선의 교점 (2,4)는 대칭이동 후에도 두 직선 모두 지남.
    원 직선 3x−y−2=0 위 점 A(0,−2)를 직선 m: x−2y+6=0 대칭한 점 B.
    AB의 기울기·중점 조건 → B(−4,6).
    대칭이동된 직선 n은 (2,4), (−4,6) 지남: 기울기 (6−4)/(−4−2)=−1/3.
    n: y=−⅓(x−2)+4 = −⅓x+14/3 → x+3y−14=0.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 직선의 직선 대칭 = 두 직선의 교점 고정 + 한 점 대칭
  mechanism_secondary: [수직이등분선 조건 (기울기 곱 −1 · 중점 위)]
  depth_conditions: [교점 좌표 · 한 점의 대칭 점 결정 · 두 점 지나는 직선]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high        # 자취 방정식 vs 한 점 대칭 등
    student_decision_points: [대칭 방법 (기하 vs 자취식) 선택]
  common_mistakes: [교점 계산 오류 · 대칭 점 좌표 오산]
  condition_layers:
    surface: 직선의 직선 대칭
    real: 대칭축 위 점(교점)은 불변
    interaction: 한 점 대칭 + 교점 → 두 점 지나는 직선
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#243
  page: 67
  problem_summary: |
    모눈종이 위 두 점 (2,−1), (0,5)를 겹치도록 한 번 접었을 때
    점 (−7,6)이 겹치는 점의 x좌표·y좌표 곱.
  solution_summary: |
    A(2,−1), B(0,5)가 겹치도록 접는 선 l은 AB의 수직이등분선.
    AB 중점 (1,2), AB 기울기 (5−(−1))/(0−2)=−3.
    l의 기울기 1/3, l: y=⅓(x−1)+2 → x−3y+5=0.
    C(−7,6)의 l 대칭 D(a,b): CD의 중점 ((a−7)/2, (b+6)/2)가 l 위,
    CD ⊥ l → CD 기울기 −3 → (b−6)/(a+7)=−3, 3a+b=−15.
    중점 조건: (a−7)/2 − 3·(b+6)/2 + 5 = 0 → a−3b=15.
    연립 → a=−3, b=−6. ab=18.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 종이접기 = 두 점 수직이등분선 대칭
  mechanism_secondary: [수직이등분선 유도 · 세번째 점 대칭 좌표]
  depth_conditions: [접는 선 = AB 수직이등분선 · 세번째 점 대칭 좌표 계산]
  freedom_signals:
    initial_setup_freedom: medium  # 종이접기 시각화 필요
    approach_choice: medium
    student_decision_points: [종이접기 → 대칭축 인식]
  common_mistakes: [접는 선을 AB 자체로 오해 · 수직이등분선 유도 실패]
  condition_layers:
    surface: 종이접기 문제
    real: 종이접기 = 두 점을 대칭시키는 직선 = 수직이등분선
    interaction: 대칭축 → 다른 점의 대칭 좌표 (연립)
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적 · 실생활 소재"

- source: 고쟁이-CH04-STEP2-#244
  page: 67
  problem_summary: |
    한 변 6인 정사각형 위 점 P(6,4)에서 빛이 정사각형 변에 두 번 반사되어
    원점 O에 도달. 빛의 이동 거리. (입사각=반사각)
  solution_summary: |
    P(6,4)의 x축 대칭 P′(6,−4), O(0,0)의 y=6 대칭 O′(0,12).
    반사되는 점 A, B라 하면 PA=P′A, BO=BO′, 입사각=반사각 → 4점 P′,A,B,O′ 일직선.
    빛의 이동 거리 = PA+AB+BO = P′A+AB+BO′ = P′O′
    = √((6−0)²+(−4−12)²) = √(36+256) = √292... 실제 = √((−6)²+16²)=√(36+256)=√292.
    해설: 2√73. 292=4·73. 답 2√73.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 반사 최단경로 = 대칭이동을 이용한 직선화
  mechanism_secondary: [x축 대칭 · y=6 대칭 · 4점 일직선]
  depth_conditions: [입사각=반사각 = 대칭점 잇는 직선 · 이중 대칭 = 두 반사]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [어느 변부터 반사할지 대칭 순서]
  common_mistakes: [대칭할 점 잘못 선택 · 두 번 대칭 순서 오류]
  condition_layers:
    surface: 빛 반사 실생활
    real: 반사 = 대칭 → 대칭점 잇는 직선 = 최단경로
    interaction: 두 번 반사 = 두 번 대칭 (P를 첫 벽 대칭, O를 다른 벽 대칭)
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적 · 실생활 반사 소재"
```

### STEP 2 · 유형 04 대칭이동을 이용한 최단거리

```yaml
- source: 고쟁이-CH04-STEP2-#245
  page: 68
  problem_summary: |
    280cm×140cm 직사각형 당구대 위 당구공. 변 AB, BC까지 거리 각 110cm, 20cm.
    변 BC, CD, DA에 차례 반사된 후 B 위치에서 정지. 이동 거리.
  solution_summary: |
    A(0,140), B(0,0), C(280,0), D(280,140). 시작점 P(110,20).
    P를 x축 대칭 P′(110,−20) → x=280 대칭 P″(450,−20) → y=140 대칭 P‴(450,300).
    이동 거리 = PQ+QR+RS+SB = P‴B = √(450²+300²) = √(202500+90000)=√292500=150√13.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 3회 반사 최단경로 = 3회 대칭이동
  mechanism_secondary: [연속 대칭 · 4점 일직선 원리 · 좌표 설정]
  depth_conditions: [반사 순서 = 대칭 순서 · 최종 대칭점까지 거리 = 총 이동 거리]
  freedom_signals:
    initial_setup_freedom: medium  # 좌표계 설정 자유
    approach_choice: low
    student_decision_points: [좌표 설정 · 대칭 순서 정확 실행]
  common_mistakes: [대칭 좌표 계산 오류 · 대칭 순서 착각]
  condition_layers:
    surface: 당구공 반사 실생활
    real: 각 벽 반사 = 그 벽에 대칭 (연쇄 대칭)
    interaction: 3회 대칭 → 최종점 좌표 → 시작점과 거리
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적 · 실생활 당구 소재"

- source: 고쟁이-CH04-STEP2-#246
  page: 68
  problem_summary: |
    A(0,4), B(5,3), x축 위 점 P, y=x 위 점 Q. AP+PQ+QB 최솟값 되는
    직선 PQ 방정식 ax+y+b=0. a+b 값.
  solution_summary: |
    A(0,4)의 x축 대칭 A′(0,−4), B(5,3)의 y=x 대칭 B′(3,5).
    AP+PQ+QB = A′P+PQ+QB′ ≥ A′B′. 4점 A′,P,Q,B′ 일직선일 때 최소.
    직선 A′B′: 기울기 (5−(−4))/(3−0)=3, y=3x−4 → 3x−y−4=0 → −3x+y+4=0.
    a=−3, b=4. a+b=1.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 두 축 위 두 중간점 최단 경로 (2회 대칭)
  mechanism_secondary: [x축 대칭 · y=x 대칭 · 4점 일직선]
  depth_conditions: [A → x축 대칭, B → y=x 대칭 → 두 대칭점 잇는 직선 = PQ]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [어느 점을 어느 축에 대칭할지 정확 매칭]
  common_mistakes: [대칭할 점-축 짝짓기 오류]
  condition_layers:
    surface: 두 중간점 최단경로
    real: 각 중간점 통과 = 그 점의 축에 대해 상대 점을 대칭
    interaction: A→x축 대칭·B→y=x 대칭 → 직선 A′B′이 답
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#247
  page: 68
  problem_summary: |
    A(3,−1), B(6,3), C(p,p) (y=x 위) 세 점 잇는 삼각형 둘레 최소일 때
    삼각형 넓이.
  solution_summary: |
    AB=√(3²+4²)=5 고정. BC+CA 최소가 삼각형 둘레 최소.
    A(3,−1)의 y=x 대칭 A′(−1,3). BC+CA=BC+CA′ ≥ A′B. 세 점 A′,C,B 일직선일 때 최소.
    A′(−1,3), B(6,3) 지나는 직선 y=3. C(3,3).
    삼각형 ABC: A(3,−1), B(6,3), C(3,3). AC=4 (수직), BC=3 (수평). ∠BCA=90°.
    넓이 = ½·3·4=6.
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 삼각형 둘레 최소 = 한 변 고정 + 반대 꼭짓점 y=x 위 최적화
  mechanism_secondary: [y=x 대칭으로 두 변 합 직선화 · 좌표 결정]
  depth_conditions: [고정 변 AB · 자유 꼭짓점 C의 위치 = 대칭점 잇는 직선과 y=x 교점]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [고정 변 인식 · 최적 C 좌표 도출]
  common_mistakes: [세 점 중 어느 점을 대칭할지 오해 · C가 y=x 위 조건 활용 실패]
  condition_layers:
    surface: 삼각형 둘레 최소화
    real: AB 고정, BC+CA 최소는 A(또는 B) 대칭 후 직선
    interaction: y=x 위 C의 위치 결정 → 직각 발견 → 넓이
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#248
  page: 68
  problem_summary: |
    A(−2,3), B(6,5). x축 위 두 점 P,Q, 직선 y=2 위 점 R.
    AP+PR+RQ+QB 최솟값.
  solution_summary: |
    A(−2,3)를 y=−2에 대칭한 점 A′(−2,−7). (R을 y=2에 대해 P쪽으로 반사시키기 위해
    실제 문제는 R을 y=2에 대칭 후 처리)
    해설: R을 x축에 대칭 R′(x축 아래), PR=PR′, RQ=R′Q.
    A를 y=−2에 대칭 A′(−2,−7). 4점 A′,P,R′,Q,B 일직선 최소.
    AP+PR+RQ+QB = A′P+PR′+R′Q+QB ≥ A′B = √((6−(−2))²+(5−(−7))²) = √(64+144)=√208 = 4√13.
    (해설 검증: 4√13)
  category: 도형의 이동
  difficulty: STEP2
  mechanism_primary: 4구간 경로 최소 = 2회 대칭 (다층 최단경로)
  mechanism_secondary: [x축 대칭 (R로 대칭) · y=−2 대칭 (A로 대칭) · 5점 일직선]
  depth_conditions: [R을 x축에 대칭 · A를 y=−2에 대칭 · 4구간 → 직선]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [대칭 순서·방향 결정]
  common_mistakes: [4구간 대칭 순서 오류 · 대칭 축 오해]
  condition_layers:
    surface: 4구간 경로 최소화
    real: 각 반사=대칭 (수학적으로 각 회귀점 통과 = 반대편 대칭)
    interaction: 다층 대칭 → 최종 두 점 직선 거리
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적 · 교육청 변형"

- source: 고쟁이-CH04-STEP2-#249
  page: 69
  problem_summary: |
    50×80 직사각형 ABCD, 변 AB를 3:1로 내분한 점 P (즉 P는 AB 위 3:1),
    변 BC, CD 위 임의 점 Q, R. PQ+QR+RA 최솟값.
  solution_summary: |
    A(0,80), B(0,0), C(50,0), D(50,80). P(0,20) (AB의 3:1 내분점).
    P를 x축 대칭 P′(0,−20). A를 직선 x=50에 대칭 A′(100,80).
    PQ+QR+RA = P′Q+QR+RA′ ≥ P′A′ = √(100²+100²) = 100√2.
  category: 도형의 이동
  difficulty: STEP2 (STEP3 페이지 시작이나 문제 구조는 STEP2 유형 04에 해당)
  mechanism_primary: 3구간 경로 최소 (직사각형 두 변에 반사)
  mechanism_secondary: [x축 대칭 · x=50 대칭 · 3점 일직선]
  depth_conditions: [내분점 좌표 · 두 벽 대칭 · 직선 거리]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: low
    student_decision_points: [좌표 설정 · 두 벽 대칭 방향]
  common_mistakes: [내분점 좌표 오류 · 대칭 벽 잘못 선택]
  condition_layers:
    surface: 직사각형 3구간 경로
    real: 두 벽 반사 = 두 벽 대칭
    interaction: P→x축 대칭·A→x=50 대칭 → 두 대칭점 사이 거리
  citation_note: "고쟁이 CH04 STEP2·STEP3 경계 · 학습 목적"

- source: 고쟁이-CH04-STEP2-#250
  page: 69
  problem_summary: |
    A(−1,0), 원 C:(x+3)²+(y−8)²=5. y축 위 점 P, 원 C 위 점 Q.
    AP+PQ 최솟값 k. k² 값.
  solution_summary: |
    A(−1,0)을 y축 대칭 A′(1,0). AP+PQ=A′P+PQ ≥ A′Q (3점 A′,P,Q 일직선).
    A′Q 최소 = |A′-C중심| − 반지름 = √((−3−1)²+8²) − √5 = √80 − √5 = 4√5−√5 = 3√5.
    k=3√5, k²=45.
  category: 도형의 이동
  difficulty: STEP2 (선생님 Pick, 교육청 기출)
  mechanism_primary: 축 대칭 + 점-원 최단거리
  mechanism_secondary: [y축 대칭 · 원-점 거리 = 중심거리 ± 반지름]
  depth_conditions: [y축 대칭으로 두 구간을 하나로 · 원과 점 최단거리 공식]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [P가 y축 위 → A 대칭 · Q는 원 위 → 중심거리−반지름]
  common_mistakes: [원 위 점까지 거리 = 중심거리±반지름 미인식 · 부호 오류]
  condition_layers:
    surface: 두 구간 최단 (축+원)
    real: 두 대상 유형 결합 (직선 + 원)
    interaction: 축 대칭 → 점-원 최단
  citation_note: "고쟁이 CH04 STEP2 · 학습 목적 · 교육청 기출"
```

### STEP 3 · 최고난도 유형

```yaml
- source: 고쟁이-CH04-STEP3-#251
  page: 71
  problem_summary: |
    (실생활) 동서 직선도로 l과 45° 각 이루는 북서 방향 도로 m. l·m 교점 O에서
    l 방향 3km 지점 → 북쪽 1km 지점에 정류소 A. 도로 l 위 정류소 B, 도로 m 위 정류소 C.
    A→B→C→A 도로 총 길이 최소일 때 B와 C 사이 거리(km).
  solution_summary: |
    O를 원점, l을 x축, m을 직선 y=x (45°) 로 설정. A(3,1).
    A→B→C→A 경로 최소 = A를 x축 대칭 P(3,−1), A를 y=x 대칭 Q(1,3).
    AB+BC+CA = PB+BC+CQ ≥ PQ. 4점 P,B,C,Q 일직선일 때 최소.
    직선 PQ: 기울기 (3−(−1))/(1−3) = −2, y=−2x+5.
    x축 교점 B(5/2, 0), y=x 교점 C(5/3, 5/3).
    BC=√((5/2−5/3)²+(0−5/3)²)=√((5/6)²+(5/3)²)=√(25/36+25/9)=√(25/36+100/36)=√(125/36)=5√5/6.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 삼각형 왕복 경로 최소 = 두 축 각각 대칭 (2회 대칭)
  mechanism_secondary: [45° 도로 = y=x · x축 대칭 + y=x 대칭 · 4점 일직선]
  depth_conditions: [실생활 좌표계 설정 · A 두 번 대칭 (다른 축에 각각) · 직선-축 교점 좌표]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: medium
    student_decision_points: [좌표계 설정 (원점=O, l=x축)]
  common_mistakes: [A를 두 축에 각각 다른 대칭 필요 미인식 · 좌표 설정 실수]
  condition_layers:
    surface: 실생활 도로 최단경로
    real: A→B→C→A 왕복 = A를 두 축 각각 대칭한 두 점 사이 최단
    interaction: 두 대칭점 잇는 직선과 축 교점 = 최적 B·C
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적 · 실생활 도로·교육청 변형·선생님 Pick"

- source: 고쟁이-CH04-STEP3-#252
  page: 71
  problem_summary: |
    (실생활) 폭 10m 도로, 도로 경계선까지 거리 A:10m, B:5m.
    AB 사이 거리 5√41 m. 건물 A에서 도로에 수직인 횡단보도를 통해 건물 B까지
    이동 거리 최솟값 조건 · 최솟값(m).
  solution_summary: |
    A(0,0), 도로 경계선 y=10 및 y=20 (폭 10). B는 y>20에 있음.
    B=(b, 25) (b>0). AB=5√41 → b²+25²=25·41=1025 → b²=400 → b=20. B(20,25).
    횡단보도 수직 → 도로 상에서 y방향 10m 이동 (경계 C, D 두 점). CD=10.
    A→C→D→B 경로 최소: B를 y방향 −10 이동 B′(20,15). AC+CD+DB=AC+10+CB
    (D는 C 바로 위 10m). 실제 AC+CB′ 최소 → A→B′ 직선 = √(20²+15²)=25.
    총 거리 = 25+10 = 35m.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 도로 횡단 최단 경로 = 도로 폭 만큼 평행이동
  mechanism_secondary: [평행이동 (도로 폭 흡수) · 두 점 직선 거리]
  depth_conditions: [횡단보도가 도로에 수직 → 도로 폭 CD=고정 · B를 도로 폭만큼 이동]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: medium
    student_decision_points: [좌표 설정 · b 결정 · 평행이동 방향]
  common_mistakes: [횡단보도 폭을 대칭이동으로 처리 (부적절) · 좌표 설정 실수]
  condition_layers:
    surface: 실생활 도로 횡단 최단경로
    real: 고정 폭 CD → B를 폭만큼 평행이동 → AC+CB′로 환원
    interaction: 평행이동을 활용 (대칭이 아닌 평행이동)
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적 · 실생활 도로 소재"

- source: 고쟁이-CH04-STEP3-#253
  page: 71
  problem_summary: |
    반지름 4·중심각 60° 부채꼴 BOA, 호 AB 위 A,B가 아닌 점 P.
    두 변 OA, OB 위 각각 Q, R. 삼각형 PQR 둘레 최소.
  solution_summary: |
    P를 OB 대칭 P′, OA 대칭 P″. PR=P′R, PQ=P″Q. 삼각형 둘레 = PQ+QR+RP=P″Q+QR+RP′ ≥ P″P′.
    OP=OP′=OP″=4 (반지름). ∠P″OP′ = 2·∠BOA = 120°.
    삼각형 P″OP′는 OP″=OP′=4, ∠P″OP′=120° 이등변삼각형. P″P′ = 2·4·sin60° = 4√3.
    (해설: P′P″=2P″H=4√3.)
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 부채꼴 두 변에 대칭 → 이등변삼각형 밑변
  mechanism_secondary: [두 직선 대칭 · 각도 2배 원리 · 삼각비]
  depth_conditions: [P의 두 대칭점 P′,P″ · ∠P″OP′ = 2·부채꼴 각도 · 이등변삼각형 밑변]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [대칭 원리 인식 · 각도 2배 정리]
  common_mistakes: [∠P″OP′=중심각 (60°) 오해 (실제=120°) · 이등변삼각형 밑변 공식 오용]
  condition_layers:
    surface: 부채꼴 삼각형 둘레
    real: 두 직선 대칭 = 회전 (각도 2배)
    interaction: 원리 = 대칭 두 번 = 각도 2배 회전 → 밑변 공식
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#254
  page: 72
  problem_summary: |
    직선 y=x 위 두 점 A, B (AB=2√2, B의 x좌표 > A의 x좌표),
    C(1,−1), D(7,1). 사각형 ACDB 둘레 최소.
  solution_summary: |
    A(a,a), B(b,b) (b>a), AB=√2|b−a|=2√2 → b=a+2, 즉 B=(a+2, a+2).
    사각형 ACDB 둘레 = AC+CD+DB+BA. AB=2√2, CD=√((7−1)²+(1−(−1))²)=√40=2√10 고정.
    AC+DB 최소 필요. C를 y=x 대칭 C′(−1,1), D 그대로. 사실 A는 자유, B는 A+상수.
    AC+BD 최소: A는 y=x 위. AC=√(...). 정공법: 선분 AC를 A→A+(2,2)로 옮기면 C도 옮겨져 C′(3,1)=B′.
    ∴ AC+BD = BC′+BD ≥ C′D. C′(3,1), D(7,1) 사이 거리 √(4²+0²)=... 실제:
    해설: BC″+BD ≥ √(6²+(−2)²)=2√10.
    총 둘레 = 2√2 + 2√10 + 2√10 = 2√2 + 4√10. 답 ⑤.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 평행이동+대칭이동 결합으로 사각형 둘레 최소
  mechanism_secondary: [AB 고정 길이 평행이동 · y=x 대칭 · 최단경로]
  depth_conditions: [AB 벡터 고정 (2,2) 평행이동으로 A·C 이동 · 대칭 후 직선]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: [평행이동 vs 대칭이동 조합 결정 · AB 벡터 활용]
  common_mistakes: [평행이동 흡수 실패 · 대칭 순서 오류]
  condition_layers:
    surface: 사각형 둘레 최소
    real: AB 고정 = 평행이동 벡터 고정 → A·C를 같이 이동 → BD와 이어지는 최단경로
    interaction: 평행이동+대칭 이중 기법
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#255
  page: 72
  problem_summary: |
    원 (x−2)²+y²=16 위 점 P. P를 x방향 −2 평행이동 후 y=x 대칭한 점 Q.
    A(1,−√3), B(3,√3). 삼각형 ABQ 넓이 최댓값 S. 이때 P의 x좌표 a. a+S 값.
  solution_summary: |
    원 (x−2)²+y²=16 중심 (2,0), 반지름 4.
    P → x방향 −2 → 중심 (0,0), 반지름 4 (즉 x²+y²=16 위 점).
    → y=x 대칭 → Q도 x²+y²=16 위.
    A(1,−√3), B(3,√3). AB 길이 √((3−1)²+(√3+√3)²)=√(4+12)=4. 기울기 √3.
    직선 AB: y+√3=√3(x−1) → √3x−y−2√3=0.
    원 중심 (0,0)에서 AB까지 거리 = |−2√3|/√(3+1)=√3.
    Q에서 AB까지 거리 최대 = √3+4 (원의 최대 거리 = 중심거리+반지름).
    S = ½·4·(√3+4) = 2(√3+4) = 2√3+8.
    이때 Q는 AB의 수직에 원점을 지나는 직선과 원의 교점. AB 기울기 √3, 수직 기울기 −1/√3.
    직선 y=−x/√3. 원과 만남: x²+x²/3=16 → 4x²/3=16 → x²=12, x=−2√3 (x<0, 제2사분면).
    Q(−2√3, 2). Q → y=x 역대칭 → (2,−2√3). x방향 +2 → P(4,−2√3). a=4.
    a+S = 4+8+2√3 = 12+2√3.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 평행이동+대칭 후 원 위 점 → 삼각형 넓이 최대 = 밑변 고정+거리 최대
  mechanism_secondary: [원의 평행이동 · y=x 대칭 · 점-직선 거리 극값 · 역이동 (P 추적)]
  depth_conditions: [Q 원 위 · AB 밑변 고정 · 거리 최대점 = 원 위 최원점 · P는 Q를 역이동]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: [Q 최대점 결정 · P를 Q로부터 역추적]
  common_mistakes: [Q 위치 오류 · P 역이동 순서 실수]
  condition_layers:
    surface: 이동+삼각형 넓이
    real: 이동 후 원 → Q 원 위 → 밑변 AB 고정 → 넓이 최대 = 거리 최대
    interaction: 정방향(P→Q)·역방향(Q→P) 이동 이해
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#256
  page: 73
  problem_summary: |
    A(5−2a, a) (제1사분면 위). A를 y축 대칭 후 y=x 대칭한 점 B.
    삼각형 OAB의 외심 P. 삼각형 OBP 넓이 최솟값. (a>0 · A는 제1사분면)
  solution_summary: |
    A(5−2a, a)의 y축 대칭 (2a−5, a). 이를 y=x 대칭 → B(a, 2a−5).
    OA=OB=√(a²+(2a−5)²) (동일).
    (OA 기울기) × (OB 기울기) = a/(5−2a) × (2a−5)/a = −1 → OA⊥OB.
    즉 삼각형 OAB는 ∠AOB=90° 직각이등변삼각형. 외심 P = AB의 중점.
    외접원 지름 = AB, 외접원 반지름 = ½AB. P는 AB 중점.
    삼각형 OBP 넓이 = ½ · 삼각형 OAB 넓이 (P는 AB 중점 → OP가 OAB를 이등분).
    삼각형 OAB 넓이 = ½·OA·OB = ½·OB² = ½·(a²+(2a−5)²).
    OBP 넓이 = ¼·OB² = ¼·(5a²−20a+25). a=2에서 최소 → ¼·(20−40+25)=5/4.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 이중 대칭 → 직각이등변삼각형 구조 → 외심 = 빗변 중점
  mechanism_secondary: [y축·y=x 대칭 · 직각 판정 (기울기 곱 −1) · 외심 위치]
  depth_conditions: [두 대칭 = 90° 회전 유사 · 직각이등변 삼각형 · 외심=빗변중점]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: [직각 인식 · 외심 위치 (빗변 중점)]
  common_mistakes: [OA⊥OB 미인식 · 외심 위치 오해 · a의 이차식 최솟값 오류]
  condition_layers:
    surface: 대칭이동 + 외심 + 넓이
    real: y축 → y=x 두 번 대칭 = 90° 회전 (원점 중심)
    interaction: 직각이등변삼각형 자동 성립 → 외심 = 빗변 중점 → 넓이 이차식 최소
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#257
  page: 73
  problem_summary: |
    P(1,2), Q(1,2)에서 규칙 이동.
    P: x축 대칭 → y축 대칭 → 원점 대칭 순환.
    Q: y=x 대칭 → y축 대칭 → x축 대칭 → y=−x 대칭... (해설 참조) 순환.
    2000번 이동 후 P=Q인 횟수. (출발점 제외)
  solution_summary: |
    P의 궤적 주기 3: (1,2)→(1,−2)→(−1,−2)→(1,2) 순환.
    Q의 궤적 주기 4: (1,2)→(2,1)→(−2,1)→(1,−2)→(1,2) 순환.
    두 점이 같아지는 것은 (1,2) 또는 (1,−2)의 위치.
    (i) (1,2)에서 일치: P는 3,6,9,... k=1,2,...로 3k번, Q는 4,8,12,... 4k번. 최소공배수 12.
       2000 중 = 166번 (2000=12·166+8).
    (ii) (1,−2)에서 일치: P는 1,4,7,..., Q는 3,7,11,... 12k−5마다. 167번.
    총 = 166+167 = 333.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 서로 다른 대칭 순열의 주기 → 동시 일치 횟수
  mechanism_secondary: [주기 3 · 주기 4 · 최소공배수 · 등차수열 카운팅]
  depth_conditions: [P 주기 3 · Q 주기 4 · 일치점 후보 (1,2) 또는 (1,−2)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: [주기 계산 · 일치 후보 위치 · 등차수열 항 개수]
  common_mistakes: [주기 잘못 계산 · 출발점 포함/제외 실수 · 위치별 카운팅 누락]
  condition_layers:
    surface: 두 점의 대칭 반복 규칙
    real: 각 점 주기적 궤적 (3, 4) → 동시 일치는 12의 배수 등에서
    interaction: 각 일치 위치 별 카운팅 + 합
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#258
  page: 74
  problem_summary: |
    y=x²−2x+2 위 서로 다른 두 점 A,B가 직선 y=−x/2+12에 대칭. 선분 AB 길이.
  solution_summary: |
    A(a, a²−2a+2), B(b, b²−2b+2) (a≠b).
    AB 중점이 y=−x/2+12 위 · AB⊥ y=−x/2+12 (기울기 2).
    AB 기울기 = 2 → (B의 y − A의 y)/(b−a) = 2 → (b²−2b − a²+2a)/(b−a) = a+b−2 = 2 → a+b=4.
    중점 x좌표 (a+b)/2=2, y좌표 (a²+b²−2(a+b)+4)/2. 이 중점이 y=−x/2+12 위 → 2=−1+12? 미충족.
    실제 (해설): 중점 y = −1+12=11. y좌표 = (a²+b²−2·4+4)/2 = (a²+b²−4)/2 = 11 → a²+b²=26.
    (a−b)² = (a+b)²−4ab = 16−4ab. a²+b²=26 → ab=(16−26)/(−2)=5.
    (a−b)²=16−20=−4? 부호 오류. 다시: (a+b)²−(a²+b²)=2ab → 16−26=−10 → ab=−5.
    (a−b)²=16−4(−5)=36 → |a−b|=6. AB=√(1+4)·|a−b|=√5·6=6√5.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 포물선 위 직선 대칭 두 점 → 대칭축 조건 (기울기·중점) → 두 근 결정
  mechanism_secondary: [대칭축 수직 · 중점 위 · 근과 계수 관계 · 이차방정식 활용]
  depth_conditions: [AB 기울기 = 2 · AB 중점 대칭축 위 · a+b, ab, (a−b)² 도출]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [대칭축 수직 방향 · 중점 조건 활용]
  common_mistakes: [기울기 부호 오류 · 이차식 전개 실수]
  condition_layers:
    surface: 포물선 직선 대칭
    real: 두 점의 직선 대칭 = 수직 + 중점 위 두 조건
    interaction: 조건 2개 → 미지수 a·b → 근과 계수 → AB 길이
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적"

- source: 고쟁이-CH04-STEP3-#259
  page: 74
  problem_summary: |
    한 변 6인 정사각형 ABCD, AD·CD를 1:2로 내분하는 점 E, F.
    선분 BE, BF를 접는 선으로 하여 삼각형 ABE·BCF를 접은 점 A→A′, C→C′.
    선분 A′C′ 길이 = q√2/p (서로소 자연수 p,q). p+q 값.
  solution_summary: |
    A(0,6), B(0,0), C(6,0), D(6,6). E(2,6) (AD 1:2 내분), F(6,2) (CD 1:2 내분).
    A를 직선 BE 대칭 A′. 직선 BE: 지나는 두 점 (0,0), (2,6), 기울기 3.
    A′는 A(0,6)의 BE 대칭. BE는 y=3x. A′는 BE에 관해 A의 대칭.
    A′(a, b): AA′ 중점 위, AA′⊥BE (기울기 −1/3). 계산 → A′(18/5, 24/5).
    C′: C(6,0)의 BF 대칭. BF는 y=x/3 (기울기 1/3). C′는 BF 위 y=3x 대칭...
    A′ 및 C′ (y=x 대칭 성립) 활용 → C′(24/5, 18/5).
    A′C′ = √((24/5−18/5)²+(18/5−24/5)²) = √((6/5)²+(−6/5)²) = 6√2/5. p=5, q=6, p+q=11.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 정사각형 두 접기 = 두 직선(BE·BF) 대칭 후 두 대칭점 사이 거리
  mechanism_secondary: [내분점 좌표 · 직선 대칭 (수직·중점) · 좌표 계산]
  depth_conditions: [두 접는 선의 방정식 · 각 꼭짓점의 대칭점 · A′와 C′ 좌표]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: [접기 = 대칭 인식 · 대칭점 계산 방법]
  common_mistakes: [내분점 좌표 오류 · 대칭점 좌표 오산]
  condition_layers:
    surface: 종이 접기 (2회) 후 거리
    real: 접기 = 접는 선에 대한 대칭
    interaction: A→A′, C→C′ 두 대칭 후 A′C′ 계산
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적 · 종이접기 소재"

- source: 고쟁이-CH04-STEP3-#260
  page: 75
  problem_summary: |
    AB=1, BC=2 직사각형 ABCD 종이. A가 CD 위 점 E에 오도록 접음.
    B의 이동점 F, 접힌 선이 BC, AD와 만나는 점 G, H.
    사각형 EFGH 넓이 = 17/18. CE 길이 (CE>1/2).
  solution_summary: |
    A(0,1), B(0,0), C(2,0), D(2,1). CE=a (>1/2), E(2, a) (실제로 E는 CD 위 E(2, a)라고 놓음).
    A가 E에 오도록 접기 → 접는 선 = AE의 수직이등분선.
    AE 기울기 (a−1)/2, 중점 (1, (a+1)/2). 접는 선 기울기 −2/(a−1), 방정식:
    y−(a+1)/2 = −2/(a−1)·(x−1).
    G (BC 위, y=0), H (AD 위, y=1) 계산.
    사각형 ABGH의 넓이 = ½·(BG+AH)·AB = 17/18. 계산 후 이차방정식.
    a²−a+4=17·2/9=34/9 → 9(a²−a+4)=34 → 9a²−9a+36−34=0 → 9a²−9a+2=0
    → (3a−1)(3a−2)=0 → a=1/3 또는 a=2/3. CE>1/2 → a=2/3.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 직사각형 접기 = 수직이등분선 대칭 후 사다리꼴 넓이 조건
  mechanism_secondary: [접는 선 = AE 수직이등분선 · 사다리꼴 넓이 · 이차방정식]
  depth_conditions: [A→E 대칭 = 접는 선 · G·H 좌표 · 사다리꼴 넓이 = 17/18]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: medium
    student_decision_points: [좌표 설정 · 접는 선 방정식 유도 · 이차방정식 해 조건 활용]
  common_mistakes: [접는 선을 AE로 오해 · 사다리꼴 넓이 공식 실수 · 조건 CE>1/2 무시]
  condition_layers:
    surface: 종이 접기 + 넓이
    real: 접기 = 대칭 · 넓이 조건 = 이차식
    interaction: 대칭 좌표 → 사다리꼴 → 이차방정식 → 조건에 맞는 해
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적 · 종이접기 소재"

- source: 고쟁이-CH04-STEP3-#261
  page: 75
  problem_summary: |
    O(0,0), A(0,2), B(−2,0) 꼭짓점 삼각형 OAB, O, C(0,−2), D(2,0) 꼭짓점 삼각형 OCD.
    OAB를 x방향 t만큼, OCD를 y방향 2t만큼 평행이동한 삼각형 T₁, T₂.
    T₁과 T₂ 내부 공통부분이 육각형 모양이 되는 t 범위 a<t<1.
    이때 육각형 넓이 최댓값 M. a+M 값.
  solution_summary: |
    T₁: OAB x방향 t 이동 → O₁(t,0), A′(t,2), B′(−2+t,0). 삼각형 (t,0)-(t,2)-(t−2,0).
    T₂: OCD y방향 2t 이동 → O₂(0,2t), C′(0,−2+2t), D′(2,2t). 삼각형 (0,2t)-(0,−2+2t)-(2,2t).
    두 삼각형 교집합이 육각형: 선분 A′B′ (T₁ 빗변)이 T₂의 두 변을 안 꼭짓점에서 만나고
    선분 C′D′ (T₂ 빗변)이 T₁의 두 변을 안 꼭짓점에서 만나는 조건.
    조건 → 2/3 < t < 1, 즉 a=2/3.
    2/3<t<1 범위에서 육각형 넓이 f(t) = (직사각형 O₁O₂TO₂ 넓이) − (삼각형 O₁SR) − (삼각형 O₂PQ)
    = t·2t − 2·½·(3t−2)² = 2t² − (3t−2)² = 2t²−9t²+12t−4 = −7t²+12t−4
    = −7(t−6/7)²+8/7. 최댓값 M=8/7 (t=6/7).
    a+M = 2/3+8/7 = 14/21+24/21 = 38/21.
  category: 도형의 이동
  difficulty: STEP3
  mechanism_primary: 두 삼각형 평행이동 → 공통부분 육각형 (조건+넓이 최대)
  mechanism_secondary: [평행이동 벡터 (t·2t) · 교집합 육각형 조건 · 이차함수 최대]
  depth_conditions: [육각형 조건 부등식 · 넓이식 이차함수 · 정점=최댓값]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: [교집합 도형 시각화 · 육각형 조건 유도 · 넓이 식 세우기]
  common_mistakes: [교집합 육각형 조건 오류 · 넓이 식 도출 실수 · 이차함수 정점 오산]
  condition_layers:
    surface: 두 삼각형 이동 후 공통부분
    real: 교집합 형태가 육각형인 조건 = 두 삼각형 빗변 교차 위치 조건
    interaction: 조건 부등식 + 넓이 = 이차함수 → 정점
  citation_note: "고쟁이 CH04 STEP3 · 학습 목적 · 교육청 변형"
```

---

## (3) CH04 도형의 이동 종합 (mechanism 패턴)

### A. 핵심 mechanism 대분류 (42문 통계)

| # | Mechanism 축 | 대응 문항 | 빈도 |
|---|---|---|---|
| **M1** | **평행이동 후 원-직선 조건** (접선·현·교점) | 221, 222, 223, 224, 225 | 5문 |
| **M2** | **대칭이동 불변식/방정식 해석** (자기 자신·f 형태) | 228, 234, 235 | 3문 |
| **M3** | **다중 대칭+평행이동 합성** | 229, 230, 231, 240, 256 | 5문 |
| **M4** | **직선-직선 대칭** (수직이등분선 원리) | 239, 241, 242 | 3문 |
| **M5** | **점-직선 대칭 좌표 계산** (연립방정식) | 243 (종이접기) | 1문 |
| **M6** | **최단경로 = 대칭 (기본 1회)** | 246, 247, 250 | 3문 |
| **M7** | **최단경로 = 다중 대칭 (2~3회)** | 244, 245, 248, 249, 251 | 5문 |
| **M8** | **최단경로 = 대칭+평행이동 혼합** | 252 (도로 폭), 254 (AB 벡터) | 2문 |
| **M9** | **원 위 점 최단거리 (중심거리 ± 반지름)** | 236, 238, 250, 255 | 4문 |
| **M10** | **점의 반복이동 규칙** (조건분기·주기) | 220, 227, 257 | 3문 |
| **M11** | **부채꼴·원 각도 2배 대칭 원리** | 253 | 1문 |
| **M12** | **닮음 삼각형 (y=x 대칭 이등변)** | 232 | 1문 |
| **M13** | **직각삼각형 자동생성 (대칭 결과)** | 230, 256 | 2문 |
| **M14** | **곡선 위 대칭 두 점 (근과 계수 관계)** | 233, 258 | 2문 |
| **M15** | **종이접기 = 대칭 (실생활)** | 243, 259, 260 | 3문 |
| **M16** | **두 도형 이동 후 공통부분** | 261 | 1문 |
| **M17** | **평행이동 벡터 결정 후 부속 도형 이동** | 226 (내접원), 240 (꼭짓점) | 2문 |
| **M18** | **이동+삼각형/사각형 넓이 극값** | 232, 237, 255, 256, 261 | 5문 |

### B. 실생활·소재 유형 (STEP 2·3 통합)

| 소재 | 문항 | mechanism |
|---|---|---|
| 종이접기 (모눈종이·정사각형·직사각형) | 243, 259, 260 | 접는 선 = 수직이등분선 대칭 |
| 당구 반사 | 245 | 다중 대칭 (3벽) |
| 빛 반사 (정사각형) | 244 | 이중 대칭 |
| 도로·정류소 (45° 도로) | 251 | 삼각형 왕복 = 2대칭 |
| 도로 횡단보도 (건물+도로 폭) | 252 | 대칭 아닌 평행이동 |

**핵심 관찰**: 실생활 소재의 5문 모두 STEP 3 급 (245 STEP 2 유형 04 마지막) 또는 STEP 3 초반. 소재 다양성 확보용 슬롯.

### C. 조건층 (condition_layers) 유형 분포

- **surface = real** (단순한 문제): 220, 221, 222, 228, 234, 239, 246 등 STEP 2 초·중반부에 집중
- **surface ≠ real** (표면 vs 실제 mechanism 층 분리): 230 (대칭 삼각형 → 자동 직각), 236 (조건식이 원의 방정식), 238 (두 좌표 비율이 기울기), 253 (부채꼴 대칭 → 각도 2배), 255 (이동 후 원 → 밑변 고정 → 원 위 최원점), 256 (이중 대칭 → 직각이등변 자동), 261 (교집합 조건 → 이차함수)
- **깊은 real 층은 STEP 3 정점 문항의 공통 특징** (238, 253, 255, 256, 261).

### D. Freedom Signals (자유도) 패턴

| 유형 | initial_setup_freedom | approach_choice | 대표 문항 |
|---|---|---|---|
| 순수 계산형 (좌표·공식 반복) | low | low | 220, 221, 227, 228, 234, 246, 247 |
| 방법 선택형 (대칭 vs 자취식) | low | medium/high | 222, 242, 254, 258 |
| 좌표 설정 자유 (실생활) | medium | medium | 244, 245, 251, 252 |
| 관찰 요구 (숨은 구조) | low | high | 230, 238, 253, 255, 256, 261 |

- **정점 후보 (STEP 3 최고난도)**: initial_setup_freedom·approach_choice 모두 medium+ 또는 관찰 요구 high 문항 → 255, 256, 261.

### E. 공통 학생 실수 (common_mistakes) 상위

1. **평행이동/대칭 이동 부호 오류** (부호·방향 혼동) — 221, 224, 242, 246 등 다수
2. **대칭 후 자동 성립 성질 미인식** (직각·닮음·이등변) — 230, 232, 253, 256
3. **대칭 순서/축 오해** (여러 대칭 결합 시) — 244, 245, 248, 251
4. **원-점 최단거리 공식 (중심거리 ± 반지름) 미인식** — 236, 238, 250, 255
5. **조건식 해석 실패** (조건이 실제로는 원의 방정식임을 인식 못함) — 236, 261
6. **범위 조건 무시** (0<k<11 등) — 232, 260, 261

### F. Mechanism 조합 매트릭스 (정점 5문 심층 분석)

| # | Mech A | Mech B | Mech C | 조건층 깊이 | 자유도 |
|---|---|---|---|---|---|
| **238** | 두 점 좌표 비율 재해석 | y=−x 대칭 | 두 원 공통접선 | 3층 (표면 ≠ 실제) | high |
| **251** | 실생활 좌표 설정 | 45° 도로 = y=x | 삼각형 왕복 2대칭 | 2층 | medium |
| **255** | 이동+대칭 정방향 | 원 위 점 최단거리 | 역이동 (P 추적) | 3층 | high |
| **256** | 이중 대칭 = 90° 회전 유사 | 직각이등변 자동 | 외심 = 빗변 중점 | 3층 | high |
| **261** | 두 삼각형 평행이동 | 육각형 교집합 조건 | 넓이 이차함수 최대 | 3층 | high |

→ **STEP 3 정점의 공통 요건**: mechanism 3층 결합 + 조건층 표면≠실제 + 자유도 high (관찰 요구).

### G. 카탈로그 활용 권고 (와부고 CM2·유형편 대수 라인)

1. **평행이동+원 접선 조건** (M1) — CM2-GM ★ 3~4 slot 표준 재료. 우리 프로젝트 앵커화 후보 (223·224)
2. **다중 대칭 순서 결정** (M7) — 실생활 소재 (당구·빛·도로) STEP 3 슬롯 후보 (245·251)
3. **대칭 = 자동 직각/이등변** (M13·M12) — ★ 4~5 정점 문항의 hidden mechanism (230·256·232)
4. **원 위 점 최단거리 정형화** (M9) — ★ 3~4 슬롯 표준화 가능 (250·255)
5. **종이접기 (수직이등분선 대칭)** (M15) — 실생활 소재 시퀀스 앵커 (243·259·260)
6. **주기적 대칭 이동** (M10) — ★ 5 최상위 후보 (257의 주기 3·4 LCM)
7. **평행이동 벡터 흡수 후 최단경로** (M8) — 254의 사각형 둘레 최소 문제 앵커화 (사각형+y=x)

**폐기·주의**: 261의 육각형 교집합 유형은 CM2 범위에서 흔치 않은 소재 (교육청 변형). 정점 후보이지만 시험지 채택 시 학생 부담 큼.

**★ 5 최상위 후보 문항** (v3.4 기준 depth_score·insight_count 예상 통과 잠재): 238, 251, 253, 255, 256, 261.

---

## 저작권 · 사용 처리

- 본 파일은 학습·분석 목적 요약이며 원문 문제·풀이 직접 인용 없음.
- mechanism 분류·조건층·자유도 시그널 기록에 국한.
- 세부 재출제 시 §"문제 변형 정책"(최소 변형 원칙) + 앵커 강제 비교 준수.
- 관련: `bank/이미지-저작권-정책.md`, `bank/mechanism-은행.md`, `참고자료/공통수학2/[고등1-2] 공통수학2 (2022개정)/[고등1-2] 고쟁이 공통수학2 (2022개정).pdf` (p.58~76).
