---
name: mechanism-데이터-고쟁이-CM1-CH04-복소수이차방정식
description: 고쟁이 공통수학1 2025 CH04 복소수와 이차방정식 STEP 1·2·3 전문항(145문, 229~373) mechanism 라벨링 데이터. 저작권 준수 (발문 전문 미기재, mechanism·정답만 추출).
metadata:
  type: reference
  version: v1.1
  established: 2026-07-14
  updated: 2026-07-16
  source: 고쟁이 공통수학1 2025 (이투스북)
  tier_mapping:
    STEP_1: star_3·4
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM1-EQ
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 고쟁이 공통수학1 2025 · CH04 복소수와 이차방정식 · STEP 1·2·3 mechanism 데이터

**출처**: 고쟁이 공통수학1 2025 (이투스북)
- 본문: `참고자료/공통수학 1/고쟁이 공통수학1 2025/이투스에서 받은거(이걸로 인쇄가 편함)/고쟁이 공통수학1 2025.pdf`
- 해설: `참고자료/공통수학 1/고쟁이 공통수학1 2025/이투스에서 받은거(이걸로 인쇄가 편함)/고쟁이 공통수학1 2025 답.pdf`
- 범위: STEP 1 (문항 229~287, p.69~79) + STEP 2 (문항 288~349, p.80~91) + STEP 3 (문항 350~373, p.94~100)
- 총 145문항 · 저작권 준수 (발문 전문 미기재, mechanism 라벨만 추출)
- 작성일: 2026-07-14 (STEP 2·3) · 2026-07-16 (STEP 1 추가)
- category: `복소수·이차방정식`

---

## STEP 1 — 교과서를 정복하는 핵심 유형 (문항 229~287, 59문 · p.69~79)

```yaml
- source: 고쟁이-CM1-CH04-STEP1-#229
  page: 69
  problem_summary: |
    복소수 정의 관련 5택 설명 중 옳은 것 (i, 실수·복소수 관계, 허수부분 등).
  category: 복소수 정의
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 복소수 개념 정의 검증
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#230
  page: 69
  problem_summary: |
    (1) (1+i)²+(1+2i)(1-2i) (2) 2/(1-i)+(1-i)/(1+i) (3) ((1+i)/(1-i))² 를 a+bi 꼴로 나타내기 (3문).
  category: 복소수 사칙연산
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 분모 유리화·기본 항등식 (1+i)²=2i 활용
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#231
  page: 69
  problem_summary: |
    a=(1+i)/(1-i), b=(1-i)/(1+i)일 때 (2a²+b²)/(ab) 값 (객관식).
  category: 복소수 연산·대칭식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: a=i, b=-i 단순화 후 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#232
  page: 69
  problem_summary: |
    x³+x²+x-3 을 복소수 범위에서 인수분해한 결과 (객관식).
  category: 복소수·인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: f(1)=0 → 조립제법 → 이차 인수는 근의 공식
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#233
  page: 69
  problem_summary: |
    (3+i)a-2bi=6-4i 성립할 때 a+b (객관식).
  category: 복소수 상등
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 실수부·허수부 매칭
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#234
  page: 69
  problem_summary: |
    (1-i)²-a(1+i)⁴=16+bi 일 때 a-b (a, b 실수).
  category: 복소수 거듭제곱·상등
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: (1-i)²=-2i, (1+i)⁴=-4 → 상등
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#235
  page: 70
  problem_summary: |
    a/(1-i)+b/(1+i)=5+2i 일 때 ab 구하기 (a, b 실수).
  category: 복소수 방정식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 분모 유리화 후 실·허 매칭 → 연립
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#236
  page: 70
  problem_summary: |
    a=1+2i, b=1-2i 일 때 a³-a²b-ab²+b³ 값 (객관식).
  category: 켤레 · 대칭식 인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: a³-a²b-ab²+b³=(a-b)(a²-b²)=(a-b)²(a+b)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#237
  page: 70
  problem_summary: |
    x=2/(1+i), y=2/(1-i) 일 때 x³+y³ 값 (객관식).
  category: 복소수·대칭식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: x, y 단순화 후 x³+y³=(x+y)³-3xy(x+y)
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#238
  page: 70
  problem_summary: |
    (1+i)x²-(1-i)x-2i 가 0이 아닌 실수가 되도록 하는 실수 x (객관식).
  category: 복소수·실수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 허수부=0, 실수부≠0
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#239
  page: 70
  problem_summary: |
    z=a+bi에 대해 (1) z² 이 음의 실수 (2) z²=0 (3) z² 이 양의 실수 각각의 a, b 조건 (서술형 3문).
  category: 복소수 z² 부호 분류
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: z²=(a²-b²)+2abi → 조건 별 부호 분석
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#240
  page: 71
  problem_summary: |
    z=2-3i 에 대해 z+z̄, z-z̄, zz̄, z/z̄, z² 중 옳지 않은 것 (객관식).
  category: 켤레복소수 기본 연산
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 각 항 직접 계산
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#241
  page: 71
  problem_summary: |
    켤레복소수 z̄에 대한 5개 설명 (z+z̄ 실수·z-z̄ 실수부분=0·z=z̄ 실수 등) 중 옳지 않은 것.
  category: 켤레복소수 성질 검증
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 정의로 항 별 검증
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#242
  page: 71
  problem_summary: |
    보기 ㄱ (1+z)(1+z̄) ㄴ 1/z+1/z̄ ㄷ z²-z̄² ㄹ (z-z̄)² 중 항상 실수인 것.
  category: 켤레복소수·실수 판별
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 각 표현이 켤레와 같은지 확인 (z̄=z 관계)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#243
  page: 71
  problem_summary: |
    z+z̄=6, zz̄=11 일 때 z 값 (5택, ±√ 형).
  category: 켤레복소수·이차방정식 근
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: z가 x²-6x+11=0 의 근 → 근의 공식
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#244
  page: 71
  problem_summary: |
    보기 5개 (Ā z̄=z 등) 중 항상 성립하는 것의 개수 (객관식).
  category: 켤레복소수 연산 성질
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 켤레 연산 규칙 항 별 검증
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#245
  page: 71
  problem_summary: |
    z=1-i 일 때 (z+1)/z + (z̄+1)/z̄ 값.
  category: 켤레복소수·분수 계산
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 통분·직접 계산 or 실수 성질 활용
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#246
  page: 72
  problem_summary: |
    a=3-2i, b=2+3i 일 때 aā-ab̄-āb+bb̄ 값 (계산 서술).
  category: 켤레복소수 · 곱 전개
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: (a-b)(ā-b̄) = |a-b|² 인식
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#247
  page: 72
  problem_summary: |
    z₁-z₂=2-3i, z₁z₂=1+5i 일 때 (z̄₁-2)(z̄₂+2) (객관식).
  category: 켤레·근과 계수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 전개 후 켤레 관계로 치환
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#248
  page: 72
  problem_summary: |
    z=x-4+(x²+2x-24)i 가 z=z̄ 만족할 때 x (객관식).
  category: 켤레복소수·실수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 허수부=0 → 이차방정식 → x-4≠0 조건 확인
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#249
  page: 72
  problem_summary: |
    z=x²-(3+i)x+2+i 가 z+z̄=0 만족할 때 실수 x=a, 그때 z=b, a+b (객관식).
  category: 켤레·순허수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 실수부=0 → 이차방정식 → x 결정 → z 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#250
  page: 72
  problem_summary: |
    (1+i)z+iz̄=3+8i 만족하는 z (객관식).
  category: 복소수 방정식·z와 z̄ 연립
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: z=x+yi 대입·실허수 매칭
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#251
  page: 72
  problem_summary: |
    a+b=4-i, ā²+b̄²=5-2i 일 때 ab+āb̄ 값 (객관식).
  category: 켤레·대칭식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: ab = ((a+b)²-(a²+b²))/2 · 켤레 취하기
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#252
  page: 73
  problem_summary: |
    1+i+i²+i³+…+i¹⁰ 값 (객관식).
  category: 복소수 거듭제곱·주기 4
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 4개씩 묶으면 0, 나머지 부분만
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#253
  page: 73
  problem_summary: |
    (i²+3i⁴+5i⁶+7i⁸+9i¹⁰+11i¹²)/(2i+4i³+6i⁵+8i⁷+10i⁹+12i¹¹) 값 (객관식).
  category: 복소수 거듭제곱·급수 형
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 주기 4로 각 항 정리 후 통분
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#254
  page: 73
  problem_summary: |
    홀수인 자연수 n에 대해 ((1+i)/(1-i))^(2n)+((1-i)/(1+i))^(2n) 값 (객관식).
  category: 복소수 거듭제곱·주기
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: (1+i)/(1-i)=i → i^(2n)+(-i)^(2n) = 2(-1)^n → n 홀수
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#255
  page: 73
  problem_summary: |
    z³=1-i 만족할 때 z̄²⁴ 값 (객관식).
  category: 복소수 거듭제곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: z³=1-i → z²⁴=(z³)⁸=(1-i)⁸, 켤레 이용
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#256
  page: 73
  problem_summary: |
    z=1+i 에 대해 z¹⁰⁰+z̄¹⁰⁰ 값 (객관식).
  category: 복소수 큰 지수·켤레합
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: (1+i)²=2i → (1+i)¹⁰⁰=2⁵⁰i⁵⁰=-2⁵⁰, 켤레 대칭
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#257
  page: 73
  problem_summary: |
    1/i+1/i²+1/i³+…+1/i⁵⁰=a+bi 일 때 a+b (객관식).
  category: 복소수 거듭제곱·급수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 1/i=-i · 주기 4 합 0
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#258
  page: 74
  problem_summary: |
    (1+i)/(1-i)+((1-i)/(1+i))²+…+((1-i)/(1+i))³⁰ 을 간단히 (객관식).
  category: 복소수·교대급수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: i, -i 교대 → 30항 묶기
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#259
  page: 74
  problem_summary: |
    z=(-1+√3 i)/2 에 대해 z+z²+z³+…+z⁴⁰ 값 (객관식).
  category: 1의 3제곱근·주기 3
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: z³=1 → 주기 3 합 0, 나머지 z+z²=-1 처리
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#260
  page: 74
  problem_summary: |
    5개 등식 (√-4/√-2, √-9/√3, √-2·√-5 등) 중 옳지 않은 것.
  category: 음수의 제곱근·부호 규칙
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 인수가 모두 음수인 경우 부호 뒤집힘 규칙
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#261
  page: 74
  problem_summary: |
    2i=√-4=√(4/-1)=√4/√-1=2/i=-2i 계산 과정에서 등호 잘못 사용된 곳 (객관식).
  category: 음수 제곱근·오류 진단
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: √(a/b) 규칙 성립 조건 (a≥0, b>0)
  insight_type: I-BW
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#262
  page: 74
  problem_summary: |
    √-2·√-8+√-6·√8/√-3+√32/√-2 간단히 (객관식).
  category: 음수 제곱근 계산
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 규칙별 부호 처리
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#263
  page: 75
  problem_summary: |
    x²-9x-36=0 두 근 α, β 일 때 √α/√β + √β/√α 값 (객관식).
  category: 이차방정식·제곱근 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 근 부호 판별 → 제곱근 부호 규칙 적용
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#264
  page: 75
  problem_summary: |
    0이 아닌 두 실수 a, b에 대해 √a·√b=-√(ab) 일 때 √a-√-b 의 켤레복소수 (객관식).
  category: 음수 제곱근 부호 조건·켤레
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 조건 → a<0, b<0 → √a=√|a|i, √-b=√b i (b<0이면 -b>0)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#265
  page: 75
  problem_summary: |
    √b/√a = -√(b/a) 일 때 √-a + √(a/b) + √(a²b) 의 허수부분 (객관식).
  category: 음수 제곱근·부호 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 조건에서 a>0, b<0 도출 → 각 항 정리
  insight_type: I-CON
  depth: 3

- source: 고쟁이-CM1-CH04-STEP1-#266
  page: 75
  problem_summary: |
    a>b>0 인 실수 a, b에 대해 √-a/√a - √(a-b)/√(b-a) 값 (객관식).
  category: 음수 제곱근 부호 규칙
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: √-a/√a=i, √(a-b)/√(b-a)=1/i=-i → i-(-i)=2i
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#267
  page: 75
  problem_summary: |
    x²-3x+3=0 두 근 α, β 일 때 (2+9β-3β²)/(2α²-6α+9) 값 (객관식).
  category: 이차방정식·조건 대입 변형
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: α²=3α-3, β²=3β-3 대입 · 근과 계수
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#268
  page: 76
  problem_summary: |
    (1) x²+(2k-1)x+k²-2=0 (2) (1+k²)x²-2(1+k)x+2=0 이 실근 갖도록 하는 자연수 k 모두 구하기 (2문).
  category: 판별식·자연수 해
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: D≥0 → k에 대한 이차부등식 → 자연수 나열
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#269
  page: 76
  problem_summary: |
    x²-4ax+4a²+a+3=0 이 서로 다른 두 허근 가질 때 정수 a의 최솟값 (객관식).
  category: 판별식·허근 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: D/4<0 → a>-3 → 최솟값 -2
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#270
  page: 76
  problem_summary: |
    kx²-2kx+3=0 이 중근 가질 때 실수 k와 그 중근 α, k+α (객관식).
  category: 판별식·중근
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: k≠0, D/4=k²-3k=0 → k=3 · 중근 x=1 → 4
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#271
  page: 76
  problem_summary: |
    3|x|²-5|x|-2=0 의 모든 실근의 곱 (객관식).
  category: 절댓값·이차방정식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: |x|=t 치환 → 이차 → 양의 근만 → |x|=2 → x=±2
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#272
  page: 76
  problem_summary: |
    x²-2|x+1|-6=0 의 모든 실근의 합 (객관식).
  category: 절댓값·구간 분할
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: x≥-1, x<-1 두 케이스 이차방정식 · 조건 판정
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#273
  page: 76
  problem_summary: |
    x²+2x+a-2=0, x²-4x+3a+10=0 중 하나만 실근 갖도록 하는 정수 a의 합 (객관식).
  category: 판별식·배타 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: D₁≥0 xor D₂≥0 만족하는 정수 a 나열
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#274
  page: 77
  problem_summary: |
    -3x²+6x+1=0 두 근 α, β 에 대해 5개 등식 중 옳지 않은 것 (객관식).
  category: 근과 계수의 관계
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: α+β, αβ, α²+β², α³+β³, 1/α+1/β 검산
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#275
  page: 77
  problem_summary: |
    x²-5x+2=0 두 근 α, β 에 대해 (1+2/α)(1+2/β) 값 (객관식).
  category: 근과 계수·식 변형
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 전개 후 (αβ+2(α+β)+4)/(αβ)
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#276
  page: 77
  problem_summary: |
    x²+3x-5=0 두 근 α, β 에 대해 (1) (α²+2α-2)(β²+2β-2) (2) 1/((α²+4α-4)(β²+4β-4)) (2문).
  category: 근과 계수·대입
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: α²=-3α+5 대입 → 일차식으로 변환
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#277
  page: 77
  problem_summary: |
    f(x) 이차. f(x)-3x+2=0 두 근 α, β 에서 α+β=-4, αβ=-2, f(0)=2 일 때 f(-2) 값.
  category: 근과 계수·다항식 재구성
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: f(x)=ax²+bx+c 재구성, f(x)-3x+2 의 근·계수 활용
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#278
  page: 77
  problem_summary: |
    x²+(a+b)x+a²+b²=0 의 한 근이 1+2i 일 때 a/b+b/a 값 (a, b 실수, 객관식).
  category: 켤레근 정리·대칭식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 근 1±2i → α+β=2, αβ=5 → -(a+b)=2, a²+b²=5
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#279
  page: 77
  problem_summary: |
    2x²+8x-3k=0 두 근의 차가 k일 때 양의 실수 k (객관식).
  category: 근과 계수·근의 차
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: (α-β)²=(α+β)²-4αβ 이용
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#280
  page: 78
  problem_summary: |
    x²-(2k+1)x+(k²+1)=0 이 서로 다른 두 양의 실근, 두 근의 비 1:2 되도록 하는 실수 k의 합 (객관식).
  category: 근과 계수·비율 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 근을 t, 2t → α+β=3t=2k+1, αβ=2t²=k²+1
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#281
  page: 78
  problem_summary: |
    f(x)=x²-5x-5 에 대해 f(3x+1)=0 의 두 근의 차 (객관식).
  category: 이차방정식·치환·근의 차
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 3x+1=t 치환 → t 두 근의 차 √D → x 차 = t차/3
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#282
  page: 78
  problem_summary: |
    x²-3x+1=0 의 두 근 α, β 에 대해 (1) α+β, αβ 를 두 근으로 하는 이차식 (2) α-1, β-1 을 두 근으로 하는 이차식 (2문).
  category: 두 근 변환·이차식 재구성
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 합·곱 계산 후 x²-(합)x+곱=0
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#283
  page: 78
  problem_summary: |
    ax²+bx+c=0 의 두 근 α, β 일 때 1/α, 1/β 를 두 근으로 하는 이차식 유도 과정 (가)(나)(다) 알맞은 것 (객관식).
  category: 근 변환·계수 관계
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 1/α+1/β=-b/c, 1/(αβ)=a/c → cx²+bx+a=0
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#284
  page: 79
  problem_summary: |
    x²-kx+k+1=0 두 근 부호 서로 다를 때 실수 k 범위 (객관식).
  category: 근과 계수·근의 부호
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: αβ<0 → k+1<0 → k<-1
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH04-STEP1-#285
  page: 79
  problem_summary: |
    x²+(k²-k-6)x-2k+3=0 두 실근이 절댓값 같고 부호 다를 때 실수 k (객관식).
  category: 근·특수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: α+β=0, αβ<0 → k²-k-6=0 & -2k+3<0
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#286
  page: 79
  problem_summary: |
    한 변 1 정사각형 ABCD 두 변 AB, BC 위 P, Q. 삼각형 PQD 정삼각형일 때 AP 길이 (서술형).
  category: 이차방정식·기하 활용
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 대칭성·피타고라스 → 이차방정식
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH04-STEP1-#287
  page: 79
  problem_summary: |
    한 변 10m 정사각형 밭 → 가로 x m, 세로 (x-10)m 늘림. 늘어난 ㄴ자 넓이 500m² 일 때 x (객관식, x>10).
  category: 이차방정식·실생활 활용
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 신면적 - 구면적 = 500 → 이차방정식
  insight_type: 절차형
  depth: 1
```

---

## STEP 2 — 심화 유형 (문항 288~349)

### 유형 01 · 복소수의 뜻과 연산 (문항 288~294)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 288 | ⑤ ($a+b=9$) | 복소수 사칙연산·분모 실수화 후 다항식 대입 | $z=\tfrac{3-i}{1+i}=1-2i$ → $z-1=-2i$ 3제곱, $z^3-3z^2+4z+1$ 재구성 |
| 289 | 4 | $z=(1+2i)x^2-(7+16i)x+12+30i$ 실수부·허수부 분리 후 $z^2$ 순허수 조건 | 실수부=0, 허수부$\ne 0$ (인수분해 활용) |
| 290 | 18 | 순허수·복소수 상등 조건 (조건 (가) $(1-i+z)^2<0$, 조건 (나) $z^2=c-8i$) | 두 조건 병합 |
| 291 | ② ($ab=-1$) | 순허수 제곱근 조건 ($\{a(1+i)+b(1-i)\}^2=-4$) | $a(1+i)+b(1-i)$가 $\pm 2i$ |
| 292 | ② ($k$ 합 $=2$) | 복소수의 제곱이 실수가 되는 조건 (허수부=0 또는 실수부=0) | 두 경우 분리 |
| 293 | ③ ($1-i$) | 복소수 점화식 $z_{n+1}=iz_n$의 주기성 ($z_{n+4}=z_n$) | $z_{1000}$ = $z_4$ |
| 294 | ② ($\tfrac{i-1}{2}$) | 복소수 점화식 $(1-z_k)z_{k+1}=1$의 주기성 ($z_{n+3}=z_n$) | $z_{50}=z_2$ |

### 유형 02 · 켤레복소수 (문항 295~303)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 295 | ③④ | 켤레복소수 성질의 참·거짓 판정 (합·곱·역수·상등 조건) | 5명제 진위 검토 |
| 296 | ⑤ ($8i$) | 켤레복소수와 상등 조건 (실수부=양수, $z-\bar{z}=2i$, $z^3-\bar{z}^3=22i$) | 켤레의 차·세제곱 차 |
| 297 | ⑤ ($\tfrac{7}{4}$) | 켤레복소수의 곱 $w\bar{w}=\tfrac{(2z-1)(2\bar{z}-1)}{(z+1)(\bar{z}+1)}$ 전개 ($z\bar{z}=2, z+\bar{z}=1$ 대입) | $z=\tfrac{1+\sqrt{7}i}{2}$ |
| 298 | 8 | 켤레복소수 곱 $z\bar{z}=|z|^2$ 성질 ($z^2\bar{z}^2=|z^2|^2$) | $z^2=4\sqrt{3}+4i$ |
| 299 | ② ($-25$) | 켤레복소수 상등 조건 ($\overline{\alpha\beta}=\bar{\alpha}\bar{\beta}$)과 곱셈공식 변형 | $(\beta+\tfrac{4}{\beta})^2=(\tfrac{4}{\alpha}+\alpha)^2$ |
| 300 | ④ ($1$) | 켤레복소수·실수 조건 ($z+\tfrac{1}{z}$ 실수) → $z\bar{z}=1$ | 실수부·허수부 분리 |
| 301 | ① ($-24$) | 켤레복소수·실수 조건과 상등 (허수부=0), $(z-\bar{z})^2$ 계산 | $z\bar{z}+\tfrac{z}{\bar{z}}=5$ 활용 |
| 302 | ② ($9$) | 켤레와 상등 조건 ($z\ne\bar{z}$, $z=\bar{z}$) — $z$의 인수분해 | $z=(x+1)(x-3)+2(x+3)(x-2)i$ |
| 303 | ③ (ㄱ,ㄷ) | $z^4<0$ 조건 ($z^2$이 순허수)의 성질 판정 | 실수부·허수부 관계 |

### 유형 03 · 복소수의 거듭제곱 (문항 304~312)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 304 | 25 | $z=\tfrac{-1+i}{\sqrt{2}}$의 거듭제곱 주기 ($z^8=1$) → $z^n=1$의 자연수 개수 | $n=8k$ |
| 305 | ② ($51-52i$) | $i^n$ 거듭제곱 주기 (4주기) 이용한 교대급수 계산 | $i-3i^2+5i^3-\dots+101i^{51}$ |
| 306 | ① ($-16i$) | $f(n)=ni^n-(n+1)i^{n+1}$의 부분합 (텔레스코핑) | $\sum_{n=1}^{16} f(n)$ |
| 307 | ⑤ (ㄱ,ㄴ,ㄷ) | $f(n)=i^n+i^{n+1}+i^{n+2}$의 주기성·부분합 판정 | 3명제 진위 |
| 308 | 13 | $f(n)=\sum i^{a_k}$ ($a_k$: $n$의 양의 약수) 성질 활용, $f(2^m)-f(8)=10$ | 약수 개수·$i$ 거듭제곱 |
| 309 | ④ (1) | $z^2=\bar{z}$ 조건 (허수) → 켤레와 상등, $z^6+z^5+z^4+z^3+z^2+z+1$ 계산 | $z^3=1$ 유도 |
| 310 | 144 | $(1+i)^m=2^n$ 등식 만족 두 자연수 최댓값 | $(1+i)^8=2^4$, $m=8k, n=4k$ |
| 311 | 75 | $\tfrac{1}{i}-\tfrac{1}{i^2}+\dots+\tfrac{(-1)^{n+1}}{i^n}=1-i$ 성립 자연수 개수 | 주기 4, $n=4k+2$ |
| 312 | 24 | $z^n=w^n$ 만족 자연수 $n$의 최솟값 ($z^4=-1, w^3=1$) | $\text{lcm}$ 활용 |

### 유형 04 · 음수의 제곱근 (문항 313~317)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 313 | ③ ($-4$) | 음수 제곱근의 부호 판정 ($a>0, b<0$) — $\sqrt{-a^2}=ai, \sqrt{ab}\sqrt{ab}=ab$ 등의 등호 성립 | 실수부·허수부 상등 |
| 314 | ② ($-2y$) | 음수 제곱근의 부호 조건 ($\sqrt{x}\sqrt{y}=-\sqrt{xy}$, $\tfrac{\sqrt{z}}{\sqrt{y}}=-\sqrt{\tfrac{z}{y}}$) 활용 절댓값 정리 | $|x+y|+\sqrt{(z-y)^2}-|x-z|$ |
| 315 | ④ (4개) | 두 등식의 부호 조건 결합 ($x<0$ 또는 $x+4=0$ 등) — 정수 $x$ 개수 | 범위 교집합 |
| 316 | ③ (ㄱ,ㄴ) | 세 실수의 부호 조건 ($ab>0, c<0$) → 부호 명제 3개 진위 | 근호·절댓값 성질 |
| 317 | 7 | 부호 조건 ($x<0, y<0$)과 인수분해된 값 계산 | $x+3y=-21, xy=3$ |

### 유형 05 · 이차방정식의 풀이와 근의 판별 (문항 318~325)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 318 | ④ ($ab=8$) | 중근 조건 (판별식=0)이 $k$의 값에 관계없이 성립 (계수비교 항등식) | $D/4$ 전개 후 $k$항·상수항=0 |
| 319 | ② ($-2$) | 근의 공식을 잘못 기억한 근 ($1+i$) → 올바른 두 근·근과 계수의 관계 | $b, c$ 재산정 |
| 320 | $a=\tfrac{3}{2}, \beta=-\tfrac{1}{2}$ | 중근 조건 ($D=0$)과 근 공유 (한 근이 다른 방정식의 근) | $a=p, p=q$ 대입 |
| 321 | ③ (6) | $(1-n)x^2+2\sqrt{2}x-1=0$의 서로 다른 실근의 개수 $f(n)$ | $n=1$ vs $n\ne 1$ 분기 |
| 322 | ④ (ㄴ,ㄷ) | 판별식 부호 판정 (원 방정식 $D<0$ → $b>\tfrac{a^2}{4}$) — 3보기 방정식 판별식 | 판별식 대소 |
| 323 | ④ (4) | $|x^2-(2a+1)x+3a+1|=2$에 $x=a$ 대입 → $a$에 대한 방정식 (근이 자기 자신) | 절댓값 분리 |
| 324 | $-\sqrt{5}, 3$ | $x^2+2|x|-7=2\sqrt{(x+1)^2}$ 절댓값 분리 (구간별 이차방정식) | 3구간 분기 |
| 325 | ② (43) | 소수 계수 이차방정식의 두 허근의 실수부·허수부 모두 정수 조건 | $p=2, q=k^2+1$ (소수) |

### 유형 06 · 이차방정식의 근과 계수의 관계 (문항 326~347)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 326 | ③ ($\tfrac{1}{\alpha}+2, \tfrac{1}{\beta}+2$) | 치환 $t=x-2$을 통한 근의 대응 (근과 계수의 관계 활용) | $c(x-2)^2+b(x-2)+a=0$ |
| 327 | 7 | 근과 계수의 관계 + $f(\alpha)=2\beta, f(\beta)=2\alpha$ → $f(x)+2x-4=0$의 근이 $\alpha,\beta$ | 이차식 재구성 |
| 328 | $a\ge\tfrac{4}{3}$ | 두 실근의 차 $\ge 3$ 조건 ($(\alpha-\beta)^2\ge 9$) + $D>0$ | $(\alpha+\beta)^2-4\alpha\beta\ge 9$ |
| 329 | ④ (4) | 켤레복소수 두 근 ($D<0$) → $\bar{\alpha}=\beta$, $\alpha^2\bar{\beta}+\bar{\alpha}\beta^2=(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)$ | 대칭식 |
| 330 | ④ ($\tfrac{1}{27}$) | 두 이차방정식의 근이 3배 관계 ($3\alpha, 3\beta$) → 근과 계수의 관계 연립 | $p=q/3, r=9q$ |
| 331 | 13 | 실수 계수 이차방정식의 허근의 켤레 = 다른 근 + $(2i+z)^2>0$ (순허수 제곱) | $z$ 결정 후 $a=z\bar{z}$ |
| 332 | ④ ($\tfrac{10}{9}$) | 허근의 켤레 성질 ($\alpha+\bar{\alpha}=2, \alpha\bar{\alpha}=3$) → $z+\bar{z}$ 통분 계산 | $z=\tfrac{\alpha}{2\alpha-1}$ |
| 333 | ② ($15$) | 양의 실수 $k$의 두 실근 ($\alpha<0<\beta$… 실제 $\alpha,\beta$ 부호 확인)과 $|\alpha|-|\beta|=3$ | 부호 분석 |
| 334 | ① ($-24$) | $\tfrac{3}{1-\sqrt{3}i}$ 유리화 → 실수 계수 → 켤레가 다른 근, 근과 계수의 관계 | 새 이차방정식 생성 |
| 335 | $-1+\sqrt{2}$ | 정수 근 존재 조건 (근과 계수의 관계에서 $m$은 정수, $k$는 자연수) | 정수 방정식 인수분해 |
| 336 | ⑤ (5) | $|x^2-2x-k|=3$의 네 실근의 곱=16 → 두 이차방정식 근의 곱 활용 | $D\ge 0$ 조건도 병기 |
| 337 | ① ($-8$) | 근이 $\tfrac{1\mp\sqrt{2}i}{3}$ (켤레) → $b/a, c/a$ 결정 후 $cx^2+bx+a=0$의 근 | $(\alpha-\beta)^2=-8$ |
| 338 | ① ($-\tfrac{5}{2}$) | 잘못 본 계수·상수항 시나리오 (두 다른 근에서 계수 복원) | $a,b,c$ 재산정 후 $\alpha^2+\beta^2$ |
| 339 | 5 | 허근 $\alpha,\beta$의 조건 $2\alpha+\beta^2=1$ → $\beta$가 다른 이차방정식의 근 (항등식) | 계수 비교 |
| 340 | 서술형 (3-step) | $\tfrac{\beta^2}{1+\alpha}, \tfrac{\alpha^2}{1+\beta}$을 근으로 하는 이차방정식 (합·곱 계산) | 대칭식 전개 |
| 341 | ⑤ ($-5$) | $f(x)=a(x-\alpha)(x-\beta)$ + $f(2x-1)+4=0$의 근의 곱=1 (근과 계수의 관계) | $a$ 결정 |
| 342 | 16 | 두 조건 (근의 곱=8, $f(\alpha)+f(\beta)=2$) → $k$ 결정, $f(8)$ | 이차항 계수 1 |
| 343 | ④ (31) | $f(x/3)-3=0$의 두 근이 $\alpha,\beta$ ($x^2+2x-1=0$ 근) → $f$ 재구성 | 배율·평행이동 |
| 344 | ③ (ㄱ,ㄷ) | 허근 $\alpha$의 실수부 판정, $k$ 범위, $(1+\alpha)(1+\bar{\alpha})$ 계산 | 켤레 곱 활용 |
| 345 | ⑤ (ㄱ,ㄴ,ㄷ) | 두 실근 $\alpha\beta=1>0$ (부호 동일)의 성질 판정 | $\alpha^2+\beta^2$, 판별식 |
| 346 | ③ (ㄱ,ㄷ) | 켤레복소수 관계 두 허근 ($D<0$) → 성질 판정 | $\alpha\bar{\alpha}=\beta\bar{\beta}$, $\alpha^2=2\bar{\beta}-7$ |
| 347 | ① (3) | $z+\bar{z}=-1, z\bar{z}=1$ → $z,\bar{z}$가 $x^2+x+1=0$ 근 ($z^3=1$) | $\tfrac{\bar{z}}{z^3}-\tfrac{2\bar{z}^2}{z^4}+\dots$ |

### 유형 07 · 이차방정식의 활용 (문항 348~349)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 348 | ② ($-1+\sqrt{5}$) | 삼각형 닮음 + 이차방정식의 근이 $\overline{AB}, \overline{BC}$ (근과 계수의 관계) | $m+n$ |
| 349 | 50 | 두 정사각형 닮음 + 넓이 비 $\tfrac{3}{2}$ → 이차방정식 → $k$의 계수 결정 | 근의 공식 |

---

## STEP 3 — 최고난도 유형 (문항 350~373)

| 문항 | 답 | mechanism_primary | 부기 |
|---|---|---|---|
| 350 | 102 | $z=i$ 유도 + 교대급수 $z-2z^2+3z^3-\dots+(-1)^{n+1}nz^n=52+51i$의 자연수 $n$ | 4주기 그룹핑 |
| 351 | ⑤ (ㄱ,ㄴ,ㄷ) | $z-w, zw$ 모두 실수 조건 (실수도·순허수도 아닌) → 켤레 관계 유도, 3보기 판정 | $b=d, w=-a+bi$ |
| 352 | ② (50) | $a_n+b_ni=\tfrac{1-ni}{1+ni}$ 유리화 → $(a_n)^2+(b_n)^2=1$ (항등식) → $\sum 50$ | 모듈러스 |
| 353 | 3 | 각 항이 $\{-1, i, 1+i\}$ 중 하나 + $\sum a_k^2=7+10i$ → 개수 결정 | $a_k^2 \in \{1,-1,2i\}$, 3원 연립 |
| 354 | ④ ($-2\sqrt{2}+4$) | $(z-2)^2=2-2i$ + 켤레 곱 → $z\bar{z}-2(z+\bar{z})+4=2\sqrt{2}$ | 켤레 상등 |
| 355 | ⑤ (ㄱ,ㄴ,ㄷ) | $\tfrac{z^2}{1-z}$ 실수 조건 (허수부=0) + 판별식 → 실수부·켤레 판정 3보기 | $z$ 허수 |
| 356 | ② ($\tfrac{26}{3}$) | $z^4<0$ 조건 ($z^2$ 순허수) — $z=(2+i)x^2+(3i-2)x-12+2i$ 실수부·허수부 인수분해 | 실수부=0 or 실수부$\pm$허수부=0 (부호 분석) |
| 357 | ④ (6) | $\alpha\beta=2p$ ($p$: 소수), $a$: 9의 배수 두 자리 자연수, 서로 다른 자연수 근 | 소인수 분해 |
| 358 | ④ (4) | $((1-i)^{2n}+2^n i)^2<0$ (순허수) + $n$은 3의 배수, 40 이하 | $(1-i)^{2n}$ 주기 |
| 359 | ④ (ㄴ,ㄷ) | $z_n=(\tfrac{1+i}{\sqrt{2}})^{2n}-(\tfrac{\sqrt{2}}{1+i})^{2n}=i^n-(-i)^n$ 주기 4 성질 3보기 판정 | $\sum, z_l\times z_m<0$ 순서쌍 |
| 360 | ① (39) | $\tfrac{\sqrt{n-3}}{\sqrt{4-m}}=-\sqrt{\tfrac{n-3}{4-m}}$ + $\sqrt{m-8}\sqrt{n-6}=\sqrt{(m-8)(n-6)}$ (부호 조건) 순서쌍 | 두 조건 병합 |
| 361 | ② (3) | 이차식 $x^2-xy-2y^2+kx-3y+2$이 두 일차식의 곱으로 인수분해 ($x$에 대한 이차방정식의 판별식=완전제곱) | 재귀 판별식 |
| 362 | ④ (35) | $z=\tfrac{1+i}{1-i}=i$ + $z^n-z^{2n}+z^{3n}-\dots-z^{50n}$이 실수 자연수 $n$ 개수 | 주기·짝수 조건 |
| 363 | 서술형 ($a=1$) | 허근 조건 + $z^3$ 실수 조건 → $a^2-a=0$, 판별식 $0<a<4$ | 조건 병합 |
| 364 | ① (1) | 두 실근 부호 다름 + 양수 근 절댓값 > 음수 근 절댓값 ($\alpha+\beta>0$, $\alpha\beta<0$) | 근과 계수의 관계 |
| 365 | ② (14) | $f(n)=(i-i^2+\dots)(1-\tfrac{1}{i}+\dots)$ + $f(k)+f(k+1)=1$ 자연수 $k$ 개수 | 4주기 사례분리 |
| 366 | 32 | $P_n(x)=(1+x)(1+x^2)\dots(1+x^{n-1})(1+x^n)-32$가 $x^2+x+1$로 나누어떨어지는 자연수 $n$ 합 | $\omega^3=1$ 대입 |
| 367 | ③ (3) | $x^2+x+1=0$ 근 $\alpha,\beta$ ($\omega, \omega^2$) → $\beta f(\alpha^2)=3\beta+1, \alpha f(\beta^2)=3\alpha+1$ 조건 | $\omega$ 성질 |
| 368 | 16 | $x^2-x+1=0$의 근 $z$의 성질 + $z^n(1-z)^{2n+1}$이 양의 실수 자연수 $n$ ($n\le 100$) | $z^6=1$ |
| 369 | 13 | $x^2+\sqrt{2}x+1=0$ 두 근 $\alpha,\beta$ + $\alpha^n+\beta^n=0$ 자연수 $n$ 개수 ($n\le 50$) | 8주기 |
| 370 | 6 | 두 이차방정식의 근이 $\alpha,\beta$와 $\alpha+2,\beta+2$ → 근과 계수의 관계 연립, $\alpha^n+\beta^n$ 조건 만족 최소 $n$ | 점화 관계 |
| 371 | ④ (4) | 정삼각형 외접원 + 반직선 교점의 기하 조건 (피타고라스) → $x^3-\tfrac{1}{x^3}$ | $x-\tfrac{1}{x}=1$ 유도 |
| 372 | 150 | $\{i^n+(\tfrac{1}{i})^{2n}\}^m$이 음의 실수 자연수 순서쌍 $(m,n)$ 개수 ($m,n\le 50$) | 4주기·$8b+4$ 조건 |
| 373 | ④ (ㄴ,ㄷ) | $(x-a)(x-b)+(x-b)(x-c)+(x-c)(x-a)=0$의 근 성질 (판별식 $D=\tfrac{1}{2}\{(a-b)^2+\dots\}\ge 0$) 3보기 | 대칭식 판별식 |

---

## mechanism_primary 요약 통계

### 대분류별 분포 (86문항)

| 대분류 | STEP 2 | STEP 3 | 합계 | 비율 |
|---|---|---|---|---|
| 복소수 사칙연산·상등·인수분해 | 8 | 5 | 13 | 15.1% |
| 켤레복소수 성질·상등·연립 | 12 | 4 | 16 | 18.6% |
| 복소수의 거듭제곱·주기성 | 9 | 8 | 17 | 19.8% |
| 음수의 제곱근·부호 조건 | 5 | 1 | 6 | 7.0% |
| 이차방정식 판별식·근의 판별 | 8 | 1 | 9 | 10.5% |
| 근과 계수의 관계 | 20 | 4 | 24 | 27.9% |
| 이차방정식의 활용 (도형·실생활) | 2 | 1 | 3 | 3.5% |

### 최빈 mechanism_primary Top 8
1. **근과 계수의 관계 (합·곱 대칭식)** — 24문 · 전 문항의 27.9%
2. **복소수 거듭제곱의 4·8주기성 · $i^n$ 활용** — 17문 · 19.8%
3. **켤레 상등 조건 · $z\bar{z}$·$z+\bar{z}$ 연립** — 16문 · 18.6%
4. **복소수 실수부·허수부 분리·상등** — 13문 · 15.1%
5. **판별식 부호·중근·서로 다른 실근·허근 조건** — 9문 · 10.5%
6. **음수 제곱근의 부호 성질** — 6문 · 7.0%
7. **켤레복소수 두 허근 (실수 계수 이차방정식)** — 5문 (근과 계수 중 세부) · 5.8%
8. **이차방정식의 도형·기하 활용** — 3문 · 3.5%

### 조합 mechanism 패턴 (2개 이상 결합) — STEP 3 특징
- **거듭제곱 주기 + 실수·순허수 판정**: 350·355·356·358·362·365·368·369·370·372 (10문)
- **근과 계수의 관계 + 켤레 성질**: 329·331·332·334·346·347 (6문)
- **판별식 + 인수분해**: 361·363 (2문)
- **기하 도형 + 이차방정식**: 348·349·371 (3문)
- **점화 관계 + 주기성**: 293·294 (2문) — STEP 2

### STEP 2·3 난이도 비교
- STEP 2: 단일 mechanism 위주 (근과 계수의 관계 20문 등)
- STEP 3: 2~3개 mechanism 조합 · 다항식 나눗셈·수열 감각·부분합 텔레스코핑 등 상급 도구

---

## 부기: 서술형 문항

| 문항 | 형식 |
|---|---|
| 340 | 서술형 3-step (2절식 대칭식 계산) — 배점 20/40/40% |
| 363 | 서술형 (허근 → $z^3$ 실수 조건 서술) — 배점 70/30% |

## 부기: 교육청 기출·변형 문항

| 문항 | 유형 | 태그 |
|---|---|---|
| 349 | STEP 2 · 유형 07 | 교육청 기출 |
| 366 | STEP 3 · 유형 03 | 교육청 변형 (선행 347) |
| 369 | STEP 3 · 유형 06 | 교육청 변형 |
| 370 | STEP 3 · 유형 06 | 교육청 기출 |
| 371 | STEP 3 · 유형 06 | 교육청 기출 |
| 372 | STEP 3 · 유형 03 | 교육청 기출 |
