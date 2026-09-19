---
name: mechanism-데이터-고쟁이-CM1-CH07-여러부등식
description: 고쟁이 공통수학1 2025 CH04(교재 표기) "여러 가지 부등식" STEP 2·STEP 3 전문항 1:1 mechanism 매칭 데이터. STEP 2 = 39문(562~600), STEP 3 = 14문(601~614). 총 53문.
metadata:
  type: reference_data
  source_book: 고쟁이 공통수학1 2025 (이투스북)
  source_chapter: "04 여러 가지 부등식 (교재 표기; CM1-EQ §여러 가지 부등식 범위)"
  source_pages_body: 141-160
  source_pages_solution: 112-124
  scope: STEP 2 (562~600) + STEP 3 (601~614)
  total_count: 53
  step2_count: 39
  step3_count: 14
  category_fixed: "여러 부등식"
  extraction_date: 2026-07-14
  license_note: "저작권 준수: 발문 전사 금지. mechanism / condition_pattern / answer_type 등 구조 메타만 기록."
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM1-EQ
---

# 고쟁이 CM1 CH04 여러 부등식 · STEP 2·3 Mechanism 매칭 데이터

**중요 표기 규칙**:
- 저작권 보호를 위해 발문·풀이 원문 전사 금지. 각 문항은 **구조 요약(structural summary)** 만 기록.
- `mechanism_primary` = 문항의 핵심 mechanism (해설의 풀이 골격 기반 판정).
- `mechanism_secondary` = 결합 mechanism 있을 시.
- `condition_pattern` = 조건 축약 코드 (참조용).
- `answer_type` = 값·범위·개수·순서쌍·참거짓·수직선그림 등.
- 유형 라벨(교재 원본): 유형01 (부등식성질·절댓값 일차) / 유형02 (미지수 1개 연립일차) / 유형03 (이차부등식 풀이) / 유형04 (연립이차부등식) / 유형05 (부등식 활용).

---

## STEP 2 (39문, 562~600) — 심화 유형

### 562
- category: 여러 부등식
- step: 2
- 교재유형: 유형01 (절댓값 일차)
- mechanism_primary: 절댓값 두 개 합 부등식 (경우분류 3구간)
- mechanism_secondary: 부등식 성질 활용
- condition_pattern: |A(x)|+|B(x)|≥N 해 범위
- answer_type: 실수 x 범위 (선지 5)
- 빈출: 예
- 정답: ②
- 심층도(★): 3
- 노트: 절댓값 두 개, 경계점 2/3·4로 3구간 분류.

### 563
- category: 여러 부등식
- step: 2
- 교재유형: 유형01
- mechanism_primary: 절댓값 부등식의 해가 주어진 역문제
- mechanism_secondary: 이차방정식 두 실근 존재 조건 · 근과 계수의 관계 (곱=음수 판별식 자동)
- condition_pattern: |ax+c|≥b 해 = x≥α ∨ x≤β 역산
- answer_type: 상수 a+b 값 (선지 5)
- 빈출: 아니오
- 정답: ⑤
- 심층도(★): 4
- 노트: TIP — b≤0이면 항상 성립하여 해가 모든 실수가 되므로 조건 불충족. 부등식 방향 판단이 핵심.

### 564
- category: 여러 부등식
- step: 2
- 교재유형: 유형01
- mechanism_primary: 수직선 위 거리 부등식 → 절댓값 부등식 변환
- mechanism_secondary: 절댓값 두 개 합 부등식 (3구간 분류)
- condition_pattern: |x-(-2)|+|x-5|≥N
- answer_type: 실수 x 범위 (선지 5)
- 빈출: 아니오
- 정답: ①
- 심층도(★): 3
- 노트: 두 점 사이 거리 합 → 절댓값 합.

### 565
- category: 여러 부등식
- step: 2
- 교재유형: 유형01 (부등식의 성질 참거짓)
- mechanism_primary: 부등식 성질 참거짓 판정 (다중 명제)
- mechanism_secondary: 절댓값 부등식 성질 · 역수 부등식 부호 판정
- condition_pattern: 보기 4명제 참거짓
- answer_type: 옳은 것의 개수 (선지 5)
- 빈출: 아니오
- 선행 라벨: 543
- 정답: ④ (3개)
- 심층도(★): 4
- 노트: ㄱ 역수 부호, ㄴ 대수 변형 부호, ㄷ 분수식 부호, ㄹ |a-b|≥|a|-|b|.

### 566
- category: 여러 부등식
- step: 2
- 교재유형: 유형02 (미지수 1개 연립일차, 절댓값)
- mechanism_primary: 절댓값 두 개 합 함수의 최솟값 → 해 존재 조건
- mechanism_secondary: 함수 y=|x+p|+|x-q| 그래프 (아래 볼록형)
- condition_pattern: |x+p|+|x-q|≤k 해 존재
- answer_type: k 최솟값 (선지 5)
- 빈출: 예
- 정답: ③
- 심층도(★): 4
- 노트: 최소값=|p+q|=|1-3|=4 등 개념. 그래프 접근.

### 567
- category: 여러 부등식
- step: 2
- 교재유형: 유형02
- mechanism_primary: 근호식 부호 조건으로부터 정의역 구간 추출
- mechanism_secondary: 두 개 연립일차부등식 공통 부분
- condition_pattern: √(A)√(B)=-√(AB), √A/√B=-√(A/B) 조건에서 구간 추출
- answer_type: 정수 x 개수 (기술형)
- 빈출: 아니오
- 정답: 2 (문항: 정수의 개수)
- 심층도(★): 3
- 노트: (가) A≥0, B≤0 (단 동시 0 제외); (나) A/B의 부호 조건. 두 구간 공통부분에서 정수 카운트.

### 568
- category: 여러 부등식
- step: 2
- 교재유형: 유형02 (절댓값 이중부등식)
- mechanism_primary: 절댓값 3항 이중부등식 경우분류
- mechanism_secondary: 좌부등호/우부등호 각각 절댓값 두 개 결합
- condition_pattern: |A|<|B|≤|C| 3-경계점 분류
- answer_type: 실수 x 범위 (선지 5)
- 빈출: 아니오
- 정답: ③ (x≤1)
- 심층도(★): 4
- 노트: 경계점 -3·1·5로 3구간 분류.

### 569
- category: 여러 부등식
- step: 2
- 교재유형: 유형02
- mechanism_primary: 연립일차부등식 해가 존재 · 모두 양수 조건
- mechanism_secondary: 매개변수 범위 결합 (두 조건 교집합)
- condition_pattern: p<x<q 해가 (i) 존재 (ii) 양수
- answer_type: 실수 a 범위 (기술형)
- 빈출: 예
- 정답: 5/3 < a ≤ 5
- 심층도(★): 4
- 노트: 5-a < (5+a)/2 및 5-a ≥ 0 두 조건 결합.

### 570
- category: 여러 부등식
- step: 2
- 교재유형: 유형03 (이차부등식 풀이)
- mechanism_primary: 근과 계수의 관계로부터 계수 결정 → 새 부등식 대입
- mechanism_secondary: 이차부등식 해 뒤집기 (a<0 시 부호 반전)
- condition_pattern: ax²+bx+c>0 해 → cx²+bx+a≥0 해
- answer_type: 정수 x 합 (기술형)
- 빈출: 예
- 선행 라벨: 547
- 정답: 5
- 심층도(★): 4
- 노트: b/a·c/a 값 활용, 양변을 a로 나누면 부호 반전 처리 필요.

### 571
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 두 이차함수 그래프 관계 · 방정식 근 · 부등식 참거짓
- mechanism_secondary: 그래프 위/아래 관계로 부등식 해 판정
- condition_pattern: y=f(x), y=g(x) 그래프에서 f(x)·g(x) 값 비교
- answer_type: 보기 참거짓 (선지 5)
- 빈출: 아니오
- 정답: ③ (ㄱ, ㄴ)
- 심층도(★): 4
- 노트: ㄷ 부등식 f<g 해 = γ<x<β임을 그림에서 읽기.

### 572
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 이차부등식이 주어진 구간에서 성립 → 최소값 조건
- mechanism_secondary: 이차함수 축이 구간 밖일 때 경계값 판정 · α·β 근
- condition_pattern: 2<x<4에서 x²-2x+2k²-6>0 성립 · f(2)≥0
- answer_type: 두 근 곱 αβ (선지 5)
- 빈출: 예
- 정답: ③ (-3)
- 심층도(★): 4
- 노트: k≥√3 or k≤-√3 → 두 근 αβ = -3.

### 573
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 이차부등식 해가 존재하도록 하는 매개변수 조건
- mechanism_secondary: 판별식 D≥0 조건 (k=최고차 계수 위험 case 처리)
- condition_pattern: kx²+kx+k-2≤0 해 존재
- answer_type: 정수 k 개수 (음이 아닌) (선지 5)
- 빈출: 예
- 정답: ③ (3개, k=0,1,2)
- 심층도(★): 4
- 노트: k=0 case (일차부등식이 됨) + k>0 case (판별식 ≥0), k<0은 조건 상 배제.

### 574
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 이변수 이차부등식이 임의 실수 x,y에 대해 항상 성립
- mechanism_secondary: y-절대적 판별식 조건 → a-절대적 판별식 조건 (2중 판별식)
- condition_pattern: x²-2xy+3y²+4ay+2≥0 항상 성립
- answer_type: 정수 a 개수 (선지 5)
- 빈출: 아니오
- 정답: ③ (3개, a=-1,0,1)
- 심층도(★): 5
- 노트: 다른풀이 = 완전제곱식 (x-y)²+2(y²+2ay+1)≥0 → y²+2ay+1≥0 → -1≤a≤1.

### 575
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 이차함수 그래프에서 부등식 해 · 평행이동 및 스케일 역산
- mechanism_secondary: f(x)<0 해가 x<-1 ∨ x>3 → f((x-a)/2) 해로 변환
- condition_pattern: f((x-a)/2)<0 해 = x<1 ∨ x>9
- answer_type: 상수 a (기술형)
- 빈출: 아니오
- 정답: a = 3
- 심층도(★): 4
- 노트: x 좌표 치환 (x-a)/2 = -1 → x=a-2=1, (x-a)/2 = 3 → x=a+6=9.

### 576
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 이차부등식이 항상 성립 · 최고차계수 case 분류
- mechanism_secondary: (m-2)=0 case 별도 + m-2>0 · 판별식<0
- condition_pattern: (m-2)x²-(2m-4)x+1>0 모든 x
- answer_type: 실수 m 범위 (기술형)
- 빈출: 아니오
- 정답: 2 ≤ m < 3
- 심층도(★): 4
- 노트: m=2 (일차→상수 1>0) 포함 · m≠2일 때 m>2 및 판별식<0.

### 577
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 절댓값 포함 이차부등식 → 이차부등식 해 매칭
- mechanism_secondary: |x-2| 경계로 2구간 분류 · 근 매칭
- condition_pattern: x²+2|x-2|≥4 해 = x²+ax+b≥0 해
- answer_type: a²+b² (기술형)
- 빈출: 아니오
- 정답: 4
- 심층도(★): 4
- 노트: 해 = x≤0 ∨ x≥2 → 근 0, 2 → a=-2, b=0.

### 578
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 두 이차함수 축 공유·부등식 f≥g 해 대응
- mechanism_secondary: f(x)-g(x) 이차식 근·항등식 계수 비교
- condition_pattern: 두 그래프 축 x=p 공유 · f≥g 해 -2≤x≤3
- answer_type: 4p{f(2)-g(2)} (선지 5)
- 빈출: 아니오
- 정답: ⑤ (12)
- 심층도(★): 5
- 노트: f(x)-g(x) = -3/2 (x+2)(x-3), 항등식 계수 비교로 p 결정.

### 579
- category: 여러 부등식
- step: 2
- 교재유형: 유형03
- mechanism_primary: 두 이차함수 차 h(x)=f-g 근·계수 결정 → 함숫값 계산
- mechanism_secondary: h(x)≤0 해 [-2,3] · h(1)=-24로 최고차 결정
- condition_pattern: f(x)≤g(x) 해 -2≤x≤3, f(1)-g(1)=-24
- answer_type: f(5)-g(5) (기술형)
- 빈출: 아니오
- 정답: 56
- 심층도(★): 4
- 노트: 스키마 예제로 STEP 2 종반 배치. h(x)=a(x+2)(x-3), h(1)=-24 → a=4.

### 580
- category: 여러 부등식
- step: 2
- 교재유형: 유형04 (연립이차 · 자취/대칭)
- mechanism_primary: 이차부등식 해와 두 이차식의 값 일치 → 그래프 대칭
- mechanism_secondary: (x-3)(x+1) 그래프의 축 x=1 대칭으로 m,n 결정
- condition_pattern: (x-3)(x+1)<(n-3)(n+1) 해 -4<x<n, (m-3)(m+1)=(n-3)(n+1)
- answer_type: m²+n² (기술형)
- 빈출: 아니오
- 정답: 52
- 심층도(★): 5
- 노트: 축 x=1 이용 → m=-4, n=6.

### 581
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 이차함수 조건에서 최댓값 위치 지정 → 축 위치 부등식
- mechanism_secondary: f(2)<0 조건 (부호) · 축 위치 특정 조건 (구간 오른쪽)
- condition_pattern: (가) f(2)<0, (나) [1,4]에서 최댓값 f(1)
- answer_type: 실수 k 범위 (기술형)
- 빈출: 아니오
- 정답: 2 ≤ k < 6
- 심층도(★): 5
- 노트: 아래볼록 f(2)<0 → k²-4k-12<0, 축=k+1/2·2 ≥5/2 → k≥2. 결합.

### 582
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 이차식 ≥ 절댓값 합 함수 항상 성립 · 그래프 접선 조건
- mechanism_secondary: 절댓값 합의 3구간 표현 · 판별식 D=0
- condition_pattern: (1/2)x²-x+a ≥ |x+3|+|x-1| 모든 x
- answer_type: 실수 a 최솟값 (기술형)
- 빈출: 아니오
- 정답: 13/2
- 심층도(★): 5
- 노트: x≥1 구간에서 접해야 함, x²-6x+2a-4=0 판별식 D=0.

### 583
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 그래프에서 두 이차함수 y=f, y=g 부등식 0≤f<g 해 매핑
- mechanism_secondary: f≥0 및 f<g 구간 교집합
- condition_pattern: 0≤f(x)<g(x) 해
- answer_type: 실수 x 범위 (선지 5)
- 빈출: 아니오
- 선행 라벨: 551
- 정답: ④ (d≤x<e)
- 심층도(★): 3
- 노트: 그림 판독 문제.

### 584
- category: 여러 부등식
- step: 2
- 교재유형: 유형04 (가우스 [ ] 포함)
- mechanism_primary: 절댓값 조건 + 가우스 [x] 이차부등식 연립
- mechanism_secondary: [x]² -2[x] -8 <0 → [x] ∈ {-1,0,1,2,3}
- condition_pattern: |x+2|≤5, [x]²-2[x]-8<0
- answer_type: 실수 x 범위 (선지 5)
- 빈출: 아니오
- 선행 라벨: 555
- 정답: ③ (-1≤x≤3)
- 심층도(★): 4
- 노트: 가우스 기호가 정수 조건, |x+2|≤5는 -7≤x≤3, 결합.

### 585
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 연립이차부등식 정수해 개수 = 3 매개변수 조건
- mechanism_secondary: 두 부등식 해를 수직선에서 겹치는 정수 개수 카운트
- condition_pattern: x²-x-6≥0, 3x²-(a+6)x+2a<0 · 정수해 3개
- answer_type: 실수 a 범위 (선지 5)
- 빈출: 아니오
- 선행 라벨: 557
- 정답: ④ (9<a≤12)
- 심층도(★): 4
- 노트: 첫 부등식 x≤-2 ∨ x≥3, 두번째 (3x-a)(x-2)<0 → 2<x<a/3.

### 586
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 이차·절댓값 연립 정수해 개수 = 4 매개변수 조건
- mechanism_secondary: 수직선 위 두 구간 겹침 정수 카운트
- condition_pattern: x²-2x-8≤0, |x+1|<k · 정수해 4개
- answer_type: 실수 k 범위 (선지 5)
- 빈출: 예
- 정답: ⑤ (2<k≤3)
- 심층도(★): 4
- 노트: 첫 부등식 -2≤x≤4, 두번째 -1-k<x<-1+k. 정수 {-2,-1,0,1} 포함 조건.

### 587
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 연립부등식 해 없음 조건 매개변수 범위
- mechanism_secondary: k값에 따른 이차부등식 해 case 분류 (k≤2 · k>2)
- condition_pattern: 3x-3k>2x-1, x²-(k+2)x+2k≤0 · 해 없음
- answer_type: 실수 k 범위 (기술형)
- 빈출: 예
- 정답: k ≥ 1
- 심층도(★): 5
- 노트: 이차부등식 근 2, k (대소 case 분류) · 첫 부등식 해 x>3k-1과 무교집합.

### 588
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 두 부등식 각각 해가 모든 실수 · 최솟값 결합
- mechanism_secondary: 이차부등식 D≤0 · 절댓값 부등식 3-b≤0 (좌변≥0 자동)
- condition_pattern: -3x²+4x≤a (모든 x), |2x-a|≥3-b (모든 x)
- answer_type: a+b 최솟값 (선지 5)
- 빈출: 아니오
- 정답: ⑤ (5)
- 심층도(★): 4
- 노트: a≥4/3, b≥3, 정수 최솟값 2+3.

### 589
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 연립이차부등식 정수해 개수 = 2 · k의 모든 값 합
- mechanism_secondary: 두 근 k+1·k-1 대소 case 분류
- condition_pattern: x²-3x-4≥0, x²-2(k+1)x+(k+3)(k-1)≤0 · 정수해 2개
- answer_type: 모든 k의 합 (선지 5)
- 빈출: 예
- 선행 라벨: 514
- 정답: ③ (1)
- 심층도(★): 5
- 노트: 첫 부등식 x≤-1 ∨ x≥4, 둘째 근 k-1·k+3. 3-case 세분.

### 590
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 연립부등식 해가 x=3 ∨ 1≤x≤2 (분리된 두 구간) 역산
- mechanism_secondary: 두 이차부등식 해를 그래프로 결합 · 근 결정
- condition_pattern: x²+ax+b≥0, x²+cx+d≤0 해 = {3} ∪ [1,2]
- answer_type: (a+b)-(c+d) (기술형)
- 빈출: 아니오
- 정답: 2
- 심층도(★): 5
- 노트: 첫 부등식 근 2·3, 둘째 근 1·3 → a=-5,b=6,c=-4,d=3.

### 591
- category: 여러 부등식
- step: 2
- 교재유형: 유형04
- mechanism_primary: 이차식 이중부등식 (아래는 이차, 위는 이차) → 직선 mx+n 접선 조건
- mechanism_secondary: 직선이 두 이차함수 그래프에 동시 접함 · 판별식 D=0
- condition_pattern: 모든 x에서 -x²+5x-2 ≤ mx+n ≤ x²-3x+6
- answer_type: m²+n² (기술형)
- 빈출: 예
- 정답: 5
- 심층도(★): 5
- 노트: 접점 x=2 (중근), m=1, n=2.

### 592
- category: 여러 부등식
- step: 2
- 교재유형: 유형05 (부등식 활용 · 근의 조건)
- mechanism_primary: 이차방정식 두 근 차 ≤ 6 조건 · 매개변수 범위
- mechanism_secondary: (α-β)² = (α+β)² - 4αβ ≤ 36
- condition_pattern: kx²+4x-5k=0, |α-β|≤6
- answer_type: 실수 k 범위 (선지 5)
- 빈출: 아니오
- 정답: ① (k≤-1 ∨ k≥1)
- 심층도(★): 4
- 노트: 판별식 자동 양수 (근이 항상 실근). 근과 계수의 관계 활용.

### 593
- category: 여러 부등식
- step: 2 · 서술형
- 교재유형: 유형05
- mechanism_primary: k에 관계없이 항상 실근 · 이중 판별식 조건
- mechanism_secondary: D₁≥0 → k의 이차부등식 상시 성립 → D₂≤0
- condition_pattern: x²+2(2k-a)x+k²+4k-a=0 k에 관계없이 실근
- answer_type: 실수 a 범위 (서술형, 채점표 있음)
- 빈출: 아니오 (서술형 표시)
- 정답: -4 ≤ a ≤ -1 (서술형 · 채점 3-요소 40/40/20)
- 심층도(★): 5
- 노트: 채점표: (1) 주어진 방정식 판별식 조건으로 부등식 세우기 40% (2) k값에 관계없이 성립하는 판별식 조건으로 부등식 세우기 40% (3) 실수 a 범위 20%.

### 594
- category: 여러 부등식
- step: 2
- 교재유형: 유형05
- mechanism_primary: 이차방정식 두 실근이 특정 구간 (-1,3) 사이 존재
- mechanism_secondary: 축 위치 · 판별식 · 경계값 부호 3-조건 결합
- condition_pattern: x²+2kx-k=0 두 실근 α,β ∈ (-1,3)
- answer_type: 실수 k 범위 (선지 5)
- 빈출: 아니오
- 정답: ⑤ (-9/5 < k < -1 ∨ 0 < k < 1/3)
- 심층도(★): 5
- 노트: 3-조건: -1<-k<3, f(-k)<0, f(-1)>0 및 f(3)>0.

### 595
- category: 여러 부등식
- step: 2
- 교재유형: 유형05
- mechanism_primary: 이차방정식 근 하나가 다른 이차방정식 두 근 사이 존재
- mechanism_secondary: 축 대칭·f(-2)<0, f(-1)>0 조건
- condition_pattern: x²+5x+k=0 한 근이 x²+3x+2=0 두 근 사이
- answer_type: 정수 k (기술형)
- 빈출: 아니오
- 정답: 5
- 심층도(★): 4
- 노트: x²+3x+2 근 -2·-1 사이 → f(-2)<0, f(-1)>0 → 4<k<6 → k=5.

### 596
- category: 여러 부등식
- step: 2
- 교재유형: 유형05
- mechanism_primary: 이차방정식 두 근이 지정된 두 구간에 각각 존재
- mechanism_secondary: f(-2)>0, f(0)<0, f(3)<0, f(5)>0 4-조건
- condition_pattern: x²-2(a+1)x+a-2=0 한 근 (-2,0)·다른 한 근 (3,5)
- answer_type: 실수 a 범위 (기술형)
- 빈출: 예
- 정답: 1/5 < a < 13/9
- 심층도(★): 5
- 노트: 4개 부호 조건 결합.

### 597
- category: 여러 부등식
- step: 2
- 교재유형: 유형05 (활용 · 좌석 배정)
- mechanism_primary: 실생활 상황 부등식 세우기 · 정수해 최대·최소
- mechanism_secondary: 두 일차부등식으로 학생 수 y=3x+2 및 5명 좌석 범위
- condition_pattern: 학생 y=3x+2, 5(x-3)+1 ≤ y ≤ 5(x-2) → x 범위 → y 범위
- answer_type: 학생 수 최대 + 최소 합 (선지 5)
- 빈출: 예
- 정답: ④ (46)
- 심층도(★): 4
- 노트: 6≤x≤8 → 20≤y≤26 → 20+26.

### 598
- category: 여러 부등식
- step: 2
- 교재유형: 유형05 (활용 · 삼각형)
- mechanism_primary: 삼각형 성립조건 + 둔각삼각형 조건 (a²+b²<c²)
- mechanism_secondary: 3-부등식 연립: 양수·삼각부등식·둔각조건
- condition_pattern: 세 변 a+1, a+2, a+4 · 둔각삼각형
- answer_type: p+q+r (기술형; 범위 p<a<q+r√3 형태)
- 빈출: 예
- 정답: 4
- 심층도(★): 4
- 노트: 결과 1<a<1+2√3 → p=1, q=1, r=2.

### 599
- category: 여러 부등식
- step: 2
- 교재유형: 유형05 (활용 · 판매액 증감)
- mechanism_primary: 실생활 인상률 부등식 · 판매액 증가 조건
- mechanism_secondary: (1+x/100)(1-x/200)≥1+12/100 → 이차부등식
- condition_pattern: 녹차라떼 가격 인상률 x %, 판매액 12% 이상 증가
- answer_type: x 최댓값 (선지 5)
- 빈출: 아니오
- 정답: ⑤ (60)
- 심층도(★): 3
- 노트: 40≤x≤60 → 최댓값 60.

### 600
- category: 여러 부등식
- step: 2
- 교재유형: 유형05 (활용 · 화단 넓이)
- mechanism_primary: 실생활 직사각형 둘레·넓이 이중부등식
- mechanism_secondary: 125≤x(30-x)≤200 → 두 이차부등식 연립
- condition_pattern: 둘레 60m 짧은 변 x · 넓이 [125,200]
- answer_type: x 최댓값 + 최솟값 합 (기술형)
- 빈출: 아니오
- 정답: 15 (10+5)
- 심층도(★): 4
- 노트: 짧은 변 조건 0<x≤15 및 x∈[5,25] ∩ (x≤10 ∨ x≥20) → [5,10].

---

## STEP 3 (14문, 601~614) — 최고난도 유형

### 601
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (STEP 3 최고난도)
- mechanism_primary: 두 이차방정식 곱의 근 개수 = 2 · case 분류 (중근·허근)
- mechanism_secondary: 각각 판별식으로 근 배열 (중중 · 실허 · 이중근 일치)
- condition_pattern: (x²+2ax+2a)(x²+bx+4)=0 서로 다른 실근 2개 · |a|,|b|≤5
- answer_type: 순서쌍 (a,b) 개수 (기술형)
- 빈출: 아니오
- 정답: 61
- 심층도(★): 5
- 노트: (i) 두 방정식 각각 중근 3가지 (ii) 하나 실근 하나 허근 56 (iii) 이중근 case 2. 3+56+2.

### 602
- category: 여러 부등식
- step: 3
- 교재유형: 유형01 (절댓값·정수 합 조건)
- mechanism_primary: 절댓값 두 개 합 함수 최솟값 · 정수해 합 = 0 조건
- mechanism_secondary: 함수 y=|2x-2|+|x+1| 그래프 · 정수해 대칭 배치 조건
- condition_pattern: |2x-2|+|x+1|≤k 만족 정수해 존재 · 합=0 · k≤30
- answer_type: 30 이하 자연수 k 개수 (선지 5)
- 빈출: 예
- 선행 라벨: 566
- 정답: ③ (9개; k=4,7,10,...,28)
- 심층도(★): 5
- 노트: f(1)=3 최소, 정수해 대칭축 x=1이면 되는 조건: 3n+1≤k<3n+2 → k=3n+1 형태.

### 603
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (STEP 3 최고난도)
- mechanism_primary: 이차함수 근의 위치 (α∈(1,2)·β∈(5,6)) → 계수 자연수 case 3-분류
- mechanism_secondary: 근과 계수의 관계·자연수 제한 (10 미만)
- condition_pattern: f(x)=ax²-bx+2c, 근 α∈(1,2), β∈(5,6); a,b,c 자연수 10 미만
- answer_type: 부등식 f(x)<-2 정수 x 개수 (선지 5)
- 빈출: 아니오
- 정답: ② (2개, x=3,4)
- 심층도(★): 5
- 노트: 6 < a+β < 8, 5 < αβ < 12 → a=1, b=7, c=4.

### 604
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (max·min 조작)
- mechanism_primary: (|f|+f)/2 함수 (양수부만 유지) · 부등식 정수해 개수 = 8 매개변수
- mechanism_secondary: 함수 g(x) 정의역 case 분류·직선 y=a(x+2)와 비교
- condition_pattern: (|f(x)|+f(x))/2 ≤ a(x+2), f(x)=(x+2)(x-4), 정수해 8개
- answer_type: 실수 a 범위 (기술형)
- 빈출: 아니오
- 정답: 1 ≤ a < 2
- 심층도(★): 5
- 노트: g(x) = f(x) (f>0 구간), 0 (f≤0 구간). 직선 접선 case a=1(x=5 근), a=2(x=6 근).

### 605
- category: 여러 부등식
- step: 3
- 교재유형: 유형01 (절댓값 함수 F 정의)
- mechanism_primary: 절댓값 부등식 정수해 개수 함수 F(m,n) 정의 · 보기 참거짓
- mechanism_secondary: 3-구간 분류로 해 구간 (m-n)/4 < x < (m+n)/4
- condition_pattern: |2x|+|2x-m|<n, F(m,n) = 정수해 개수
- answer_type: 보기 3-명제 참거짓 (선지 5)
- 빈출: 아니오
- 정답: ④ (ㄱ, ㄷ)
- 심층도(★): 5
- 노트: ㄴ 반례 (F(2a,6a+4)=3a+1 vs 3a).

### 606
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (임의의 두 실수 · 최솟값 vs 최댓값)
- mechanism_primary: 임의의 두 실수 x₁,x₂ 에 대해 부등식 · f≥g 최솟값·최댓값 비교
- mechanism_secondary: (i) f(x₁)≥g(x₁) 모든 x → f-g≥0 판별식 (ii) f(x₁)≥g(x₂) → min f ≥ max g
- condition_pattern: f(x)=x²+4x+6, g(x)=-x²-2ax-2; p (i) 조건, q (ii) 조건 정수 a 개수
- answer_type: p+q (기술형)
- 빈출: 아니오
- 정답: 14
- 심층도(★): 5
- 노트: p=9 (-6≤a≤2 9개), q=5 (-2≤a≤2 5개).

### 607
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (그래프에서 부등식 정수해)
- mechanism_primary: {f(x)}² > f(x)g(x) 부호 분석 (f, f-g 부호 결합)
- mechanism_secondary: f>0 & f>g case + f<0 & f<g case
- condition_pattern: {f}² > fg, f, g 그래프 교점 x-좌표
- answer_type: -5≤x≤5 정수 x 개수 (선지 5)
- 빈출: 아니오
- 정답: ④ (9개)
- 심층도(★): 5
- 노트: (i) f>0 & f-g>0: x∈{-5,-4,2,3,4,5} (ii) f<0 & f-g<0: x∈{-2,-1,0}.

### 608
- category: 여러 부등식
- step: 3
- 교재유형: 유형04 (연립 · f(a) 함수)
- mechanism_primary: 실수 a에 관한 함수 f(a) = 연립부등식 정수해 개수 · 보기 참거짓
- mechanism_secondary: |2x-1|≥3 해 (x≥2 ∨ x≤-1) · 두번째 이차부등식 (x-1)(x-a)<0
- condition_pattern: |2x-1|≥3, x²-(a+1)x+a<0 · f(a) = 정수해 개수
- answer_type: 보기 참거짓 (선지 5)
- 빈출: 아니오
- 정답: ③ (ㄱ, ㄴ)
- 심층도(★): 5
- 노트: ㄷ 반례 (a=5·a=-4 vs α-β=9).

### 609
- category: 여러 부등식
- step: 3
- 교재유형: 유형04
- mechanism_primary: 연립부등식 (이차·이차) 정수해 특성 · 보기 참거짓
- mechanism_secondary: 8x²>2x+1 → (4x+1)(2x-1)>0 → x<-1/4 ∨ x>1/2 · 다른 부등식 (x-a)(x-2)<0
- condition_pattern: 8x²>2x+1, x²-(2+a)x+2a<0 · 실수 a 관련 보기
- answer_type: 보기 참거짓 (선지 5)
- 빈출: 아니오
- 정답: ⑤ (ㄱ, ㄴ, ㄷ)
- 심층도(★): 5
- 노트: a=2 (첫 조건 반증 case), 4<a≤5 (정수해 3,4), -3<a≤-2 (정수해 -1,1).

### 610
- category: 여러 부등식
- step: 3
- 교재유형: 유형04 (계수 관계·보기)
- mechanism_primary: 두 이차부등식 각각 항상 성립 (한쪽 아래 볼록 x축 미만, 다른쪽 위 볼록 x축 초과) · 계수 관계 참거짓
- mechanism_secondary: a>0, b²-4ac<0, p<0, q²-4pr<0 → 3-보기
- condition_pattern: ax²+bx+c>0, px²+qx+r<0 모두 실수 x에서 성립 (단 ap≠0)
- answer_type: 보기 참거짓 (선지 5)
- 빈출: 아니오
- 선행 라벨: 590
- 정답: ④ (ㄱ, ㄷ)
- 심층도(★): 5
- 노트: ㄴ 반례 존재. ㄷ (a-p)x² + (b-q)x + (c-r) > 0 항상 → 판별식<0.

### 611
- category: 여러 부등식
- step: 3
- 교재유형: 유형05 (근의 위치)
- mechanism_primary: 이차방정식 두 실근 중 적어도 하나가 [-1,2] 존재 · case 3-분류
- mechanism_secondary: (i) 두 실근 모두 (ii) 하나만 · 여집합 접근 or 직접 3-case
- condition_pattern: x²-(k+1)x+k-4=0 두 실근 중 적어도 하나 -1≤x≤2
- answer_type: 실수 k 범위 (선지 5)
- 빈출: 아니오
- 정답: ④ (k≤-2 ∨ k≥1)
- 심층도(★): 5
- 노트: 3-case (i) 둘 다 in (ii) α<-1<β<2 (iii) α<2<β. 각 f(-1), f(2) 부호로 결합.

### 612
- category: 여러 부등식
- step: 3
- 교재유형: 유형05 (가우스 [ ])
- mechanism_primary: 이차방정식 두 근 α,β가 각각 가우스 값 조건 [α]=-2,[β]=1
- mechanism_secondary: -2≤α<-1 및 1≤β<2 · f(-2), f(-1), f(1), f(2) 부호
- condition_pattern: x²+(2k-1)x+k-3=0, [α]=-2, [β]=1
- answer_type: p+q (범위 p<k≤q; 선지 5)
- 빈출: 아니오
- 정답: ③ (6/5)
- 심층도(★): 5
- 노트: 4-부호조건 결합: f(-2)≥0, f(-1)<0, f(1)≤0, f(2)>0 → 1/5<k≤1 → p+q=6/5.

### 613
- category: 여러 부등식
- step: 3
- 교재유형: 유형03 (STEP 3 최고난도 · 근의 대소)
- mechanism_primary: 이차부등식 근 두 개 (2k/3, (k²-3k)/3) 대소 case · 정수해 개수=2·β-α 자연수
- mechanism_secondary: 대소 case 분류 (2k/3 vs (k²-3k)/3) 및 근 정수 여부
- condition_pattern: (3x-k²+3k)(3x-2k)≤0 해 α≤x≤β, β-α 자연수, α,β 정수 아님, 정수해 2개
- answer_type: 모든 실수 k 값의 곱 (기술형)
- 빈출: 예
- 정답: -2
- 심층도(★): 5
- 노트: 2-case, k=-1(정수해 아님 실패) · k=6(성공) · k=2(실패) · k=3(성공). 정수해 개수 조건 결합. 최종 k=-1, 2 → 곱 -2.

### 614
- category: 여러 부등식
- step: 3
- 교재유형: 유형04 (연립·유일 정수해 매개변수 k 합)
- mechanism_primary: 연립이차부등식 정수해가 오직 하나 존재 · 모든 정수 k 값의 합
- mechanism_secondary: 첫 부등식 -2<x<4 · 두번째 (x-(k+5))(x-(2k-3))≥0 케이스 분류
- condition_pattern: x²-2x-8<0, x²-(3k+2)x+2k²+7k-15≥0 · 정수해 유일
- answer_type: 모든 정수 k 합 (선지 5)
- 빈출: 예
- 선행 라벨: 586, 589
- 정답: ② (-1)
- 심층도(★): 5
- 노트: 3-case with sub-cases (i)k≤8 (ⓐx=-1: k=1, ⓑx=3: k=-2) (ii)k>8 (조건 만족 정수 k 없음). k∈{1,-2} → 합 -1.

---

## 요약 통계

### 교재 유형별 분포 (STEP 2+3, 53문)
| 교재유형 | STEP 2 | STEP 3 | 합계 |
|---|---|---|---|
| 유형01 (부등식성질·절댓값 일차) | 4 (562·564·565·567) | 2 (602·605) | 6 |
| 유형02 (미지수 1개 연립일차) | 3 (566·568·569) | 0 | 3 |
| 유형03 (이차부등식 풀이) | 11 (570~579·582) | 5 (601·603·604·606·607) | 16 |
| 유형04 (연립이차부등식) | 12 (580~591) | 4 (608·609·610·614) | 16 |
| 유형05 (부등식 활용) | 9 (592~600) | 3 (611·612·613) | 12 |
| **합계** | **39** | **14** | **53** |

### mechanism_primary 카테고리별 (핵심 카테고리 요약)
| Mechanism 카테고리 | 문항 수 | 대표 문항 |
|---|---|---|
| 절댓값 부등식 (합/이중/구간분류) | 8 | 562·563·564·566·568·577·602·605 |
| 부등식 성질 참거짓 (보기형) | 3 | 565·571·610 |
| 이차부등식 상시성립 조건 (D≤0·항등식) | 6 | 572·574·576·582·588·593 |
| 이차부등식 해 뒤집기·역산·매핑 | 5 | 570·575·578·579·580 |
| 연립부등식 해 존재·범위·정수해 카운트 | 10 | 569·583~587·589·590·614 |
| 근의 위치 (판별식·축·경계부호) | 8 | 594·595·596·603·611·612 (+ 592·615형) |
| 실생활 활용 (판매·좌석·화단·삼각형) | 5 | 597·598·599·600 |
| 그래프 기반 · 정수해 조건 | 4 | 571·583·604·607 |
| 임의의 두 실수 · min≥max | 1 | 606 |
| 가우스 [ ] 결합 | 2 | 584·612 |
| 두 방정식 곱 · 근 개수 case | 1 | 601 |
| |f|+f/2 절댓값 조작 함수 | 1 | 604 |
| 두 그래프 접선·판별식 D=0 결합 | 2 | 582·591 |

### 심층도(★) 분포
- ★ 3: 3문 (562·564·567·583·599) - 실제 5문
- ★ 4: 20문 (563·565·566·568·569·570·572·573·575~577·579·583·585·586·588·592·595·597~600)
- ★ 5: 27문 (574·578·580~582·584·587·589~591·593·594·596 + STEP 3 대부분 601~614)
- STEP 3 14문은 대부분 ★ 5 (최고난도 유형).

### 빈출 표시(별) 문항 (원본 표기)
STEP 2: 562·566·570·573·576·586·587·589·591·596~598
STEP 3: 602·613·614
※ 566은 실제 STEP 2 미지수 1개 연립일차 표제 아래이지만 별표 있음. (표기 예외 있음)

### 선행 라벨 문항 (STEP 2 → STEP 1 참조)
- 565 ← 543 · 570 ← 547 · 583 ← 551 · 584 ← 555 · 585 ← 557 · 589 ← 514
STEP 3 → STEP 2 참조: 602 ← 566 · 610 ← 590 · 614 ← 586, 589

### 서술형 표기 문항
- 593 (STEP 2, 서술형 표시 · 채점표 명시 40/40/20).

---

## 사용 지침

1. **저작권**: 이 파일은 mechanism·structural summary만 담는다. 원문 발문·풀이 텍스트는 참고자료 PDF에서만 열람. 신규 출제 시 mechanism 참조하되 발문·수식·풀이 재현 금지.
2. **CM1-EQ 범위 검증**: 모든 문항이 2022 개정 CM1 방정식과부등식 단원 범위. 가우스 [·]는 CM1 심화 관용 표기 (584·612에 사용됨).
3. **정점 문항 후보** (★ 5, STEP 3): 574·578·580·582·587·589~591·593·594·596 및 601~614. bank/mechanism-은행.md 카탈로그와 교차 조회 시 CM1-EQ mechanism 라이브러리 확장 자료로 활용.
4. **빈출 매칭 참고 시**: 각 mechanism_primary·secondary 조합을 신규 시험지 청사진에서 slot type·insight 후보로 참조. 발문 그대로 복사 금지.

---

**작성 완료**: 2026-07-14 · 전수 53문 (STEP 2 = 39 · STEP 3 = 14) · 저작권 준수.
