---
name: mechanism-데이터-블랙라벨-CM2-STEP1
description: 블랙라벨 공통수학2 (2022개정) STEP 1 전 문항 정독 데이터. 출제율 100% 우수 기출 대표 문제 · 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-15
  source: 블랙라벨 공통수학2 (2022개정) STEP 1
  total_problems: 145
  tier_mapping:
    STEP_1: star_4
  unit_code: CM2
  unit_mapping:
    "01_점과직선": CM2-GM
    "02_원의방정식": CM2-GM
    "03_도형의이동": CM2-GM
    "04_집합": CM2-ST
    "05_명제": CM2-ST
    "06_함수": CM2-FN
    "07_유리함수": CM2-RF
    "08_무리함수": CM2-RF
  chapters:
    - CH01: 점과 직선 (21문제)
    - CH02: 원의 방정식 (21문제)
    - CH03: 도형의 이동 (14문제)
    - CH04: 집합 (21문제)
    - CH05: 명제 (20문제)
    - CH06: 함수 (21문제)
    - CH07: 유리함수 (14문제)
    - CH08: 무리함수 (14문제)
  citation_note: 학습 목적 · 저작권 준수 (원문 발문·풀이 전사 없음)
---

# 블랙라벨 공통수학2 (2022개정) STEP 1 정독 데이터

STEP 1 = 출제율 100% "우수 기출 대표 문제" (기본 실력 다지기, 85점 달성 tier).
전 문항 tier = **star_4** 일괄 라벨링.

---

## I. 도형의 방정식 (CM2-GM)

### CH01. 점과 직선 (21문제)

#### 1-1. 두 점 사이의 거리 · 활용 (문제 01~05)

- source: 블랙라벨-CM2-CH01-STEP1-01
  page: 9
  problem_summary: |
    두 점 A(1,3), B(4,a) 거리 5 이하 정수 a 개수
  solution_summary: |
    거리 공식 · 부등식 · 정수 조건 필터링
  category: 두 점 사이의 거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두점거리공식
  mechanism_secondary: [부등식정수해]
  citation_note: "블랙라벨 CM2 · 학습 목적"

- source: 블랙라벨-CM2-CH01-STEP1-02
  page: 9
  problem_summary: |
    직선 y=x+3 위 점 P가 A(1,1), B(3,2)에 등거리
  solution_summary: |
    P 파라미터화 · 등거리 조건 방정식화 · 해 대입
  category: 같은 거리에 있는 점
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 등거리점조건
  mechanism_secondary: [파라미터점, 방정식정리]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-03
  page: 9
  problem_summary: |
    정삼각형 ABC 변 AC 위 P, BP²+CP² 최솟값
  solution_summary: |
    P 파라미터화 · 이차식 정리 · 완전제곱꼴 · 최솟값
  category: 두 점 거리 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 거리제곱합최솟값
  mechanism_secondary: [파라미터점, 이차식최소]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-04
  page: 9
  problem_summary: |
    세 점 A(2,1), B(4,3), C(a,0) 이등변삼각형 정수 a
  solution_summary: |
    세 변 길이 계산 · 두 변 같은 경우 세 갈래 방정식
  category: 이등변삼각형 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 이등변삼각형세갈래
  mechanism_secondary: [경우분류, 거리조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-05
  page: 9
  problem_summary: |
    삼각형 ABC 넓이 이등분 직선 · AD 길이
  solution_summary: |
    중선 정리 · AD² 공식 · 세 변 길이 대입
  category: 중선 정리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 중선정리
  mechanism_secondary: [넓이이등분, 좌표계산]
  citation_note: "블랙라벨 CM2"

#### 1-2. 선분의 내분점 · 무게중심 (문제 06~10)

- source: 블랙라벨-CM2-CH01-STEP1-06
  page: 9
  problem_summary: |
    두 점 A(1,0), B(0,3) · 3AC=BC 만족 점 C y좌표 합
  solution_summary: |
    C가 직선 AB 위 · 내분/외분 두 경우 · y좌표 합
  category: 선분의 내분점
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 내분외분경우분류
  mechanism_secondary: [비율조건, 좌표합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-07
  page: 9
  problem_summary: |
    사각형 ABCD y축이 넓이 이등분 · 양수 a
  solution_summary: |
    사각형 분할 · 삼각형 넓이 이등분 조건 · a 결정
  category: 선분 내분점 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 넓이이등분좌표
  mechanism_secondary: [사각형분할, 삼각형넓이]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-08
  page: 10
  problem_summary: |
    삼각형 ABC ∠A 이등분선 BC 만남점 D · AD² 값
  solution_summary: |
    각이등분선 정리 (BD:DC = AB:AC) · D 좌표 · AD 계산
  category: 각의 이등분선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 각이등분선정리
  mechanism_secondary: [내분점, 거리공식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-09
  page: 10
  problem_summary: |
    사각형 ABCD 마름모 조건 · abc 값
  solution_summary: |
    마름모: 두 대각선 중점 일치 + 인접변 길이 같음
  category: 선분의 중점
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 마름모조건
  mechanism_secondary: [중점공식, 길이조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-10
  page: 10
  problem_summary: |
    삼각형 세 변 중점 P,Q,R 무게중심 (a,b) · ab
  solution_summary: |
    PQR 무게중심 = ABC 무게중심 (성질) · 좌표 계산
  category: 삼각형의 무게중심
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무게중심불변성
  mechanism_secondary: [중점연결, 좌표평균]
  citation_note: "블랙라벨 CM2"

#### 1-3. 직선의 방정식 · 위치관계 (문제 11~21)

- source: 블랙라벨-CM2-CH01-STEP1-11
  page: 10
  problem_summary: |
    기울기 3 · 두 점 (2,a), (a,6) 지나는 직선의 방정식
  solution_summary: |
    기울기 조건 (6-a)/(a-2)=3 · a 결정 · 직선식
  category: 직선의 방정식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 기울기조건
  mechanism_secondary: [일차방정식, 대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-12
  page: 10
  problem_summary: |
    세 점 A,B,C 한 직선 위 조건 · 모든 a 합
  solution_summary: |
    두 벡터 기울기 같음 or 삼점공선 이차방정식 · 합
  category: 세 점 공선 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 세점공선조건
  mechanism_secondary: [기울기일치, 근과계수관계]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-13
  page: 10
  problem_summary: |
    두 직사각형 OABC, FADE 넓이 동시 이등분 직선 기울기
  solution_summary: |
    각 직사각형 중심 두 점 통과 조건 · 기울기 결정
  category: 도형 넓이 이등분 직선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 도형중심관통
  mechanism_secondary: [직사각형중심, 두점직선]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-14
  page: 10
  problem_summary: |
    직선 ax+by+c=0 그림 · cx+ay-b=0 지나지 않는 사분면
  solution_summary: |
    a,b,c 부호 판정 · 변형 직선 기울기·절편 부호 판단
  category: 직선의 개형
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 계수부호판정
  mechanism_secondary: [기울기부호, 절편부호]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-15
  page: 11
  problem_summary: |
    두 직선 · 제2사분면 만나도록 하는 실수 m 범위
  solution_summary: |
    m 파라미터 직선 정점 · 제2사분면 통과 조건
  category: 정점 지나는 직선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 정점직선범위
  mechanism_secondary: [사분면조건, 기울기범위]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-16
  page: 11
  problem_summary: |
    두 직선 교점 · (3,-1) 지나는 ax+by-8=0 · a+b
  solution_summary: |
    교점 통과 직선 계열 · 점 대입 · 계수 결정
  category: 두 직선의 교점을 지나는 직선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 직선계열
  mechanism_secondary: [교점통과, 계수결정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-17
  page: 11
  problem_summary: |
    두 직선 l,m · 보기 세 명제 (수직·정점·평행 존재)
  solution_summary: |
    각 명제별 조건 판정 · a=0 대입 · 정점 존재 확인
  category: 두 직선의 위치 관계
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 명제복합판정
  mechanism_secondary: [수직조건, 평행조건, 정점]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-18
  page: 11
  problem_summary: |
    마름모 ABCD · AC=√41 · 직선 l:ax+by-13=0 · a-b
  solution_summary: |
    B,D 좌표 결정 · 마름모 대각선 수직이등분 · l 방정식
  category: 선분의 수직이등분선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 수직이등분선
  mechanism_secondary: [마름모대각선, 계수결정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-19
  page: 11
  problem_summary: |
    P(2a+b, a-2b) 직선 x-y=3 위 · Q(b,-a) 도형 방정식
  solution_summary: |
    P 조건에서 a,b 관계식 · Q 좌표 x,y 변환 · 방정식
  category: 자취의 방정식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 자취방정식파라미터
  mechanism_secondary: [파라미터소거, 대응관계]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-20
  page: 11
  problem_summary: |
    점 (k,0)에서 두 직선까지 거리 같음 · k 합
  solution_summary: |
    점-직선 거리 공식 두 개 등치 · 절댓값 두 경우 · k 합
  category: 점과 직선 사이의 거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 점직선거리등치
  mechanism_secondary: [절댓값이차, 근합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH01-STEP1-21
  page: 11
  problem_summary: |
    두 직선 평행 조건 · 두 직선 사이 거리 (m<0)
  solution_summary: |
    평행 조건에서 m 결정 · 평행 두 직선 거리 공식
  category: 평행한 두 직선 사이의 거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 평행직선거리
  mechanism_secondary: [평행조건, 거리공식]
  citation_note: "블랙라벨 CM2"

---

### CH02. 원의 방정식 (21문제)

#### 2-1. 원의 방정식 · 조건 (문제 01~07)

- source: 블랙라벨-CM2-CH02-STEP1-01
  page: 21
  problem_summary: |
    원 x²+y²+2ax-6ay+20a-30=0 넓이 최소 중심
  solution_summary: |
    표준형 변환 · 반지름² a 이차식 · 최솟값 a · 중심
  category: 원의 방정식(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 반지름최소화
  mechanism_secondary: [표준형변환, 이차식최소]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-02
  page: 21
  problem_summary: |
    원 중심 직선 y=2x-1 위 · 반지름 2 · a+b
  solution_summary: |
    표준형 완성 · 중심 조건 대입 · 반지름 조건 · a+b
  category: 원의 방정식(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 중심반지름조건
  mechanism_secondary: [완전제곱, 대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-03
  page: 21
  problem_summary: |
    두 점 A(5,0), B(0,12) 지름 원 · a+b+c
  solution_summary: |
    지름의 양 끝: (x-x₁)(x-x₂)+(y-y₁)(y-y₂)=0 전개
  category: 원의 방정식(3)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 지름양끝공식
  mechanism_secondary: [원전개, 계수합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-04
  page: 21
  problem_summary: |
    아치형 다리 · 곡선 OA 포함 원 · a+b+r
  solution_summary: |
    수면 x축 · 반원 최고점 조건 · O·A 지나는 원 · 표준형
  category: 세 점을 지나는 원의 방정식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 아치형원
  mechanism_secondary: [반원조건, 세점원]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-05
  page: 21
  problem_summary: |
    x²+y²-4ax+2ay+10=0 원이 되기 위한 a 범위
  solution_summary: |
    표준형 변환 · (반지름)² > 0 조건 · a 부등식
  category: 원의 방정식이 되기 위한 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원조건반지름양수
  mechanism_secondary: [표준형, 이차부등식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-06
  page: 21
  problem_summary: |
    중심 (a,b) · y축 접함 · 두 점 (3,0), (6,1) 지남 · b 합
  solution_summary: |
    y축 접함: |a|=r · 두 점 대입 이차식 · b 두 해 합
  category: 좌표축에 접하는 원의 방정식(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: y축접원조건
  mechanism_secondary: [접선조건, 두점원, 근과계수]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-07
  page: 21
  problem_summary: |
    (-2,3) 지나고 x,y축 동시 접하는 두 원 · 중심 거리
  solution_summary: |
    x,y축 접함 → 중심 (r,r) 또는 (-r,-r) · 두 해 · 거리
  category: 좌표축에 접하는 원의 방정식(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 양축접원두해
  mechanism_secondary: [접원조건, 두중심거리]
  citation_note: "블랙라벨 CM2"

#### 2-2. 원과 점·직선의 위치 (문제 08~15)

- source: 블랙라벨-CM2-CH02-STEP1-08
  page: 22
  problem_summary: |
    (x-3)²+(y-4)²=4 · √(x²+y²) 최대·최소 곱 Mm
  solution_summary: |
    √(x²+y²) = 원점-P 거리 · 중심-원점 거리 ± 반지름
  category: 원 밖 한 점과 원 위 점 거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원위점거리최대최소
  mechanism_secondary: [중심원점거리, 반지름]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-09
  page: 22
  problem_summary: |
    두 점 A(3,0), B(0,3) · AP:BP=1:2 P · 삼각형 PAB 넓이 최대
  solution_summary: |
    아폴로니우스 원 · P 자취 원 · AB 거리 · 원 반지름 · 최대 넓이
  category: 원과 자취
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 아폴로니우스원
  mechanism_secondary: [자취원, 삼각형최대넓이]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-10
  page: 22
  problem_summary: |
    두 원 교점 지나는 직선 · y=x+3과 수직 · a
  solution_summary: |
    두 원 방정식 차 → 공통현 직선 · 기울기 -1 조건
  category: 두 원의 교점을 지나는 직선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 공통현직선
  mechanism_secondary: [두원차, 수직조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-11
  page: 22
  problem_summary: |
    두 원 x²+y²=4, x²+y²-8x-16y+12=0 두 교점 사이 거리
  solution_summary: |
    공통현 방정식 · 원 중심에서 공통현 거리 · 현 길이
  category: 두 원의 공통현의 길이
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 공통현길이
  mechanism_secondary: [중심현거리, 피타고라스]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-12
  page: 22
  problem_summary: |
    두 원 교점과 (1,0) 지나는 원의 넓이
  solution_summary: |
    원계열 f₁+k f₂=0 · (1,0) 대입 · k 결정 · 넓이
  category: 두 원의 교점을 지나는 원
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원계열방정식
  mechanism_secondary: [점대입, 반지름결정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-13
  page: 22
  problem_summary: |
    원 중심 (2,0) 반지름 2 · 직선 y=mx+1 다른 두 점 만남 m 범위
  solution_summary: |
    점-직선 거리 < 반지름 · 절댓값 부등식 · m 범위
  category: 원과 직선의 위치 관계(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원직선판별
  mechanism_secondary: [점직선거리, 부등식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-14
  page: 22
  problem_summary: |
    원 x²+y²+(3k-8)x+(k-2)y-3k-9=0 정점 P,Q · PQ 길이
  solution_summary: |
    k 정리 → 정점 두 개 · 두 정점 거리 계산
  category: 현의 길이
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: k정리정점
  mechanism_secondary: [계수k정리, 두점거리]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-15
  page: 23
  problem_summary: |
    원 (x-2)²+y²=r² · 직선 2x+y-1=0 한 점 만남 · 양수 r
  solution_summary: |
    접함 조건: 점-직선 거리 = 반지름 · r 계산
  category: 원과 직선의 위치 관계(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 접함조건거리
  mechanism_secondary: [점직선거리, 반지름]
  citation_note: "블랙라벨 CM2"

#### 2-3. 원의 접선 (문제 16~21)

- source: 블랙라벨-CM2-CH02-STEP1-16
  page: 23
  problem_summary: |
    원 x²+(y-k)²=8 · 직선 y=x+2 만나지 않는 자연수 k 최솟값
  solution_summary: |
    점-직선 거리 > 반지름 · k 부등식 · 자연수 최소
  category: 원과 직선의 위치 관계(3)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 불교점거리조건
  mechanism_secondary: [거리부등식, 자연수최소]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-17
  page: 23
  problem_summary: |
    원 x²+y²-8x-6y+21=0 위 P · 직선 3x-4y+5=0까지 거리 최대
  solution_summary: |
    중심-직선 거리 + 반지름 = 최댓값
  category: 원 위의 점과 직선 거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원위점직선거리최대
  mechanism_secondary: [중심직선거리, 반지름더하기]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-18
  page: 23
  problem_summary: |
    두 점 지나는 직선과 평행 · 원 접하는 두 접선 삼각형 넓이
  solution_summary: |
    기울기 결정 · 접선 조건 · 두 접선 x·y절편 · 넓이
  category: 기울기가 주어진 접선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 기울기접선쌍
  mechanism_secondary: [평행접선, 절편삼각형]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-19
  page: 23
  problem_summary: |
    원 x²+y²=9 위 (a,1) 접선의 x절편
  solution_summary: |
    원 위 점 접선 공식 ax+y=9 · x절편
  category: 원 위의 한 점에서 그은 접선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 접선공식원위점
  mechanism_secondary: [xx₁+yy₁=r², x절편]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-20
  page: 23
  problem_summary: |
    P(4,3)에서 원 x²+y²=9 접선 두 개 · 양수 기울기 q/p · p+q
  solution_summary: |
    접선 기울기 방정식 · 이차방정식 두 해 · 양수 해
  category: 원 밖의 한 점에서 그은 접선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원밖점접선쌍
  mechanism_secondary: [접선이차, 기울기]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH02-STEP1-21
  page: 23
  problem_summary: |
    두 원 공통 접선 · (9,12) 만남 · 접점 B,C · BC 길이
  solution_summary: |
    P점 원 각각 접선 길이 = 원 밖 점 접선 길이 공식
  category: 접선의 길이
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원밖점접선길이
  mechanism_secondary: [접선길이공식, 공통접선]
  citation_note: "블랙라벨 CM2"

---

### CH03. 도형의 이동 (14문제)

#### 3-1. 평행이동 (문제 01~04)

- source: 블랙라벨-CM2-CH03-STEP1-01
  page: 34
  problem_summary: |
    두 점 A(1,3), B(-2,7) → A'(a,1), B'(1,b) 평행이동
  solution_summary: |
    이동 벡터 결정 · (a,b) 이동 결과 좌표 계산
  category: 점의 평행이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 평행이동벡터
  mechanism_secondary: [벡터결정, 좌표이동]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-02
  page: 34
  problem_summary: |
    A(3,-1) 이동 B · 직선 AB 평행이동 · a-b 값
  solution_summary: |
    직선 x·y 방향 평행이동 → x,y 대입 치환 · 계수 정리
  category: 직선의 평행이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 직선평행이동
  mechanism_secondary: [식치환, 계수비교]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-03
  page: 34
  problem_summary: |
    원 x방향 k만큼 이동 · 직선 2x-3y+5=0 두 점 만남 정수 k · Mm
  solution_summary: |
    이동 원 중심-직선 거리 < 반지름 · k 부등식 · 정수 M,m
  category: 원의 평행이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원이동판별식
  mechanism_secondary: [중심직선거리, 정수범위]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-04
  page: 34
  problem_summary: |
    포물선 y=x²-4x → y=x²-10x+20 평행이동 · 직선 l · l' · 거리 d · 10d²
  solution_summary: |
    두 꼭짓점 이동 벡터 = 직선 이동 벡터 · 평행직선거리
  category: 포물선의 평행이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 포물선평행이동
  mechanism_secondary: [꼭짓점이동, 평행직선거리]
  citation_note: "블랙라벨 CM2"

#### 3-2. 대칭이동 (문제 05~10)

- source: 블랙라벨-CM2-CH03-STEP1-05
  page: 34
  problem_summary: |
    직선 y=-2x+2 위 P · x축·y축 대칭 Q,R · QR 최소 P
  solution_summary: |
    Q=(x,-y), R=(-x,y) · QR 거리식 · P가 직선 위 조건 · 최소
  category: 점의 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두대칭점거리최소
  mechanism_secondary: [축대칭, 파라미터최적화]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-06
  page: 34
  problem_summary: |
    직선 y=-2x+k · x,y,원점 대칭 · 넓이 1 양수 k
  solution_summary: |
    네 직선 이루는 사각형 · 대칭 성질 · 넓이 공식 · k
  category: 직선의 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대칭직선사각형
  mechanism_secondary: [대칭이동, 넓이공식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-07
  page: 34
  problem_summary: |
    원 C · y=x 대칭 C' · P 위 Q · PQ 최대 · Mm
  solution_summary: |
    두 원 중심 거리 ± 반지름합 = 최대·최소 · 곱 Mm
  category: 원의 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두원위점거리최대최소
  mechanism_secondary: [대칭원, 중심거리]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-08
  page: 34
  problem_summary: |
    포물선 y=x²+2x-5 원점 대칭 · 꼭짓점 y=-2x+k 위 · k
  solution_summary: |
    원점 대칭: (x,y)→(-x,-y) · 새 포물선 꼭짓점 · 직선 대입
  category: 포물선의 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원점대칭포물선
  mechanism_secondary: [식치환, 꼭짓점직선]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-09
  page: 35
  problem_summary: |
    A(-2,7) y=x 대칭 B · x방향 3·y방향 k 이동 C · 세 점 공선 · k
  solution_summary: |
    B=(7,-2) · C 결정 · 세 점 공선 조건 (기울기 일치)
  category: 평행이동과 대칭이동(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대칭평행합성
  mechanism_secondary: [y=x대칭, 공선조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-10
  page: 35
  problem_summary: |
    원 y축 대칭 · y방향 2 이동 · x,y축 동시 접함 · a+b
  solution_summary: |
    이동 원 중심·반지름 · 양축 접함 조건 · a,b 결정
  category: 평행이동과 대칭이동(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 이동합성양축접
  mechanism_secondary: [식치환, 양축접원]
  citation_note: "블랙라벨 CM2"

#### 3-3. 그래프 이동 · 대칭 활용 (문제 11~14)

- source: 블랙라벨-CM2-CH03-STEP1-11
  page: 35
  problem_summary: |
    f(x,y)=0 그림 · f(y,x-1)=0 그래프 개형 선택
  solution_summary: |
    x↔y (y=x 대칭) · x축 +1 이동 · 결합 도형
  category: 그래프의 평행이동과 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 함수식변환도형
  mechanism_secondary: [y=x대칭, 평행이동, 개형판독]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-12
  page: 35
  problem_summary: |
    A y=x 대칭 P · (1,-2) 대칭 Q · P,Q y축 대칭 · A 좌표
  solution_summary: |
    P=(a₂,a₁) · Q=(2-1, -4-a₂) · y축 대칭 조건
  category: 점 (a,b)에 대한 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 세대칭연쇄조건
  mechanism_secondary: [y=x대칭, 점대칭, 축대칭]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-13
  page: 35
  problem_summary: |
    (1,2) 직선 y=3x+2 대칭점 (a,b) · a+b
  solution_summary: |
    수직이등분 조건 (중점 위·기울기 수직) 연립
  category: 직선 ax+by+c=0에 대한 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 직선대칭점공식
  mechanism_secondary: [수직조건, 중점조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH03-STEP1-14
  page: 35
  problem_summary: |
    A(9,2), B(8,6) · y=x 위 P · PA+PB 최소 · 3a
  solution_summary: |
    B의 y=x 대칭점 B' · P는 A와 B' 직선상 · 3a 계산
  category: 대칭이동을 이용한 최단거리
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대칭최단거리
  mechanism_secondary: [축대칭점, 직선최단]
  citation_note: "블랙라벨 CM2"

---

## II. 집합과 명제 (CM2-ST)

### CH04. 집합 (21문제)

#### 4-1. 집합과 원소 · 표현 · 부분집합 (문제 01~07)

- source: 블랙라벨-CM2-CH04-STEP1-01
  page: 47
  problem_summary: |
    A={∅,0,{0}} · ∅·0·{0} 원소·부분집합 판정
  solution_summary: |
    원소기호(∈)와 부분집합기호(⊂) 구별 · 옳지 않은 것
  category: 집합과 원소
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원소부분집합구별
  mechanism_secondary: [공집합, 원소나열]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-02
  page: 47
  problem_summary: |
    네 자연수 A · 두 원소 합 B={4,a,b,c,12} · a+b+c
  solution_summary: |
    최소 최대 합에서 원소 결정 · 중간 두 합 · 자연수 조건
  category: 집합의 표현 - 원소나열법
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두원소합집합역산
  mechanism_secondary: [최소최대, 조합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-03
  page: 47
  problem_summary: |
    A={4x-5 | -8≤2x-3≤8, (x+1)/3∈Z} 원소 합
  solution_summary: |
    x 정수 조건 · x 범위 정수해 · 각 4x-5 · 합
  category: 집합의 표현 - 조건제시법
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 조건제시법정수해
  mechanism_secondary: [부등식정수, 대입합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-04
  page: 47
  problem_summary: |
    A={(x,y)||x|+|y|=2, 정수}, B={x|x≤k 자연수}, n(A)+n(B)=3k · 자연수 k
  solution_summary: |
    n(A) 절댓값 격자 갯수 · n(B)=k · 방정식 · k
  category: 집합의 원소의 개수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원소개수방정식
  mechanism_secondary: [격자점, 조합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-05
  page: 47
  problem_summary: |
    A={2n-1}, B={2n+1}, C={4n-1} 세 집합 포함 관계
  solution_summary: |
    A·B=홀수 전체 동일 · C⊂A · 포함 관계 판정
  category: 집합 사이의 포함 관계
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 조건집합동일성
  mechanism_secondary: [원소일치, 포함판정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-06
  page: 47
  problem_summary: |
    A={a-3, a²+1}, B={5, 1-a} · A⊂B, B⊂A · a
  solution_summary: |
    두 집합 같음 조건 · 원소 대응 두 경우 · a 결정
  category: 서로 같은 집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두집합상등
  mechanism_secondary: [원소대응, 경우분류]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-07
  page: 47
  problem_summary: |
    A={x|x²-6x+8=0}, B={x|15 이하 짝수} · A⊂X⊂B, X≠A 개수
  solution_summary: |
    A={2,4} · B={2,4,6,8,10,12,14} · 나머지 5원 부분집합 - 1
  category: 부분집합의 개수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 특정원포함부분집합
  mechanism_secondary: [부분집합공식, 제외]
  citation_note: "블랙라벨 CM2"

#### 4-2. 집합의 연산 (문제 08~15)

- source: 블랙라벨-CM2-CH04-STEP1-08
  page: 48
  problem_summary: |
    A=6의 양의 약수, A∪B=12의 양의 약수 · n(B)=4 · B 원소 합 최소
  solution_summary: |
    A={1,2,3,6} · B ⊂ {1,2,3,4,6,12} · 12∈B · 나머지 3원 최소합
  category: 집합의 연산 - 합집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합집합역조건
  mechanism_secondary: [약수, 최소합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-09
  page: 48
  problem_summary: |
    A={15이하 소수}, B={ab+1|a,b∈A} · A∩B 최대최소 합
  solution_summary: |
    A 나열 · B={ab+1} 계산 · A∩B 원소 최대·최소 합
  category: 집합의 연산 - 교집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 교집합원소결정
  mechanism_secondary: [소수, 조합계산]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-10
  page: 48
  problem_summary: |
    A={x²≥a}, B={(x-a)(x-b)<0} · A∪B=R, A∩B=∅ · 10a+b
  solution_summary: |
    A 여집합 = (-√a,√a) · B는 A^c · 조건 등식 · a,b 결정
  category: 서로소
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 여집합일치조건
  mechanism_secondary: [수직선범위, 부호]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-11
  page: 48
  problem_summary: |
    U={1..5} · A∩(A-B)=A, A∪B=U, A={1,4,5} · B 원소 합
  solution_summary: |
    A∩(A-B)=A → A와 B 서로소 · A∪B=U → B={2,3} · 합=5
  category: 집합의 연산 - 차집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 차집합조건해석
  mechanism_secondary: [서로소, 합집합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-12
  page: 48
  problem_summary: |
    U={1..6} · A={k|k²-7k+10≤0}, B={k|iᵏ+(-i)ᵏ⁺²=0} · A^c∪B 원소 합
  solution_summary: |
    A={2≤k≤5}={2,3,4,5} · i의 거듭제곱 판정 · B 결정 · 합
  category: 집합의 연산 - 여집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 여집합합집합계산
  mechanism_secondary: [부등식범위, 허수거듭제곱]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-13
  page: 48
  problem_summary: |
    U 세 부분 A,B,C · 보기 세 등식 판정 (합집합 여·차·차)
  solution_summary: |
    벤다이어그램 or 대수 · ㄱ·ㄴ·ㄷ 각각 검증
  category: 집합의 연산에 대한 성질
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 집합항등식검증
  mechanism_secondary: [드모르간, 벤다이어그램]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-14
  page: 48
  problem_summary: |
    A={1,2,a²-3a}, B={-4a,-a+2,a+2} · A∩B={1,b}, B-A={c} · a²+b²+c²
  solution_summary: |
    원소 매칭 케이스 분석 · a 결정 · b,c 결정 · 제곱합
  category: 집합의 연산을 이용한 미지수 구하기
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원소매칭미지수
  mechanism_secondary: [경우분류, 대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-15
  page: 49
  problem_summary: |
    U={1..6} · A={2,4}, B∩(A^c∪B^c)={3,6} · A^c∩B^c 원소 합
  solution_summary: |
    조건 정리 → A^c∩B={3,6} · B 결정 · (A∪B)^c 계산
  category: 드모르간의 법칙
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 드모르간계산
  mechanism_secondary: [여집합변환, 원소결정]
  citation_note: "블랙라벨 CM2"

#### 4-3. 배수·약수 집합 · 원소 개수 (문제 16~21)

- source: 블랙라벨-CM2-CH04-STEP1-16
  page: 49
  problem_summary: |
    U={10..99} · Aₖ={k 배수} · A₃∩(A₄∪A₈) 원소 개수
  solution_summary: |
    분배 · A₁₂∪A₂₄ = A₁₂ · U 안 12 배수 개수
  category: 배수의 집합과 연산
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 배수집합교집합
  mechanism_secondary: [최소공배수, 포함관계]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-17
  page: 49
  problem_summary: |
    Aₙ=n의 양의 약수 · A_k⊂(A₃₆∩A₄₈) 자연수 k 합
  solution_summary: |
    A₃₆∩A₄₈=A₁₂ · A_k⊂A₁₂ → k는 12의 약수 · 합=28
  category: 약수의 집합과 연산
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 약수집합포함
  mechanism_secondary: [최대공약수, 약수합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-18
  page: 49
  problem_summary: |
    U={10이하 자연수}, A=6의 약수 · (A-B)∪(B-A)={2,5,8,10} · B 부분집합 개수
  solution_summary: |
    대칭차 조건 · B 원소 결정 · 자유 원소 개수 · 2^n
  category: 대칭차집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대칭차복원
  mechanism_secondary: [대칭차정의, 부분집합수]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-19
  page: 49
  problem_summary: |
    B,C 서로소 · n(U)=50, n(A^c∩C^c)=20, n(A^c∩B)=12 · n(A∪B∪C)
  solution_summary: |
    벤다이어그램 · A^c∩C^c 정리 · 원소 개수 조합
  category: 유한집합의 원소의 개수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 세집합원소개수
  mechanism_secondary: [포함배제, 여집합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-20
  page: 49
  problem_summary: |
    n(A)=10, n(B)=13, n(A∩B)≥5 · n(A∪B) 최대·최소 합
  solution_summary: |
    n(A∪B)=n(A)+n(B)-n(A∩B) · 교집합 범위에서 최대·최소
  category: 유한집합의 원소의 개수 최대·최소
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 원소개수범위최대최소
  mechanism_secondary: [포함배제, 부등식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH04-STEP1-21
  page: 49
  problem_summary: |
    35명 A 선택 18명 B 21명 · 모두 선택 최대·최소 · M+m
  solution_summary: |
    포함배제 · 전체 상한 하한 · A∩B 최대·최소
  category: 유한집합의 원소의 개수 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 포함배제최대최소
  mechanism_secondary: [실생활선택, 부등식]
  citation_note: "블랙라벨 CM2"

---

### CH05. 명제 (20문제)

#### 5-1. 명제·조건·진리집합 (문제 01~07)

- source: 블랙라벨-CM2-CH05-STEP1-01
  page: 61
  problem_summary: |
    보기 다섯 문장 중 명제인 것 개수
  solution_summary: |
    참·거짓 판별 가능한 문장만 명제 · 각 문장 판정
  category: 명제
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 명제판정
  mechanism_secondary: [참거짓판단, 정의확인]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-02
  page: 61
  problem_summary: |
    'x²+y²+z²=0'의 부정과 같은 것
  solution_summary: |
    조건 부정 (드모르간) · '또는'과 '이고' 교체
  category: 조건의 부정
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 조건부정드모르간
  mechanism_secondary: [부정변환, 논리연산]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-03
  page: 61
  problem_summary: |
    p:x³-3x-18<0, q:4x-7>0 · 진리집합 · n(P∩Q)
  solution_summary: |
    각 부등식 해집합 (정수) · 교집합 원소 개수
  category: 조건과 진리집합
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 진리집합교집합
  mechanism_secondary: [삼차부등식, 정수해]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-04
  page: 61
  problem_summary: |
    두 실수 x,y에 대한 다섯 명제 중 참인 것
  solution_summary: |
    각 명제 반례 탐색 or 증명 · 참 명제 선별
  category: 명제 p→q의 참·거짓
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 명제참거짓반례
  mechanism_secondary: [반례구성, 조건성립]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-05
  page: 61
  problem_summary: |
    U 두 조건 p,q 진리집합 P,Q · 명제 'p→~q' 참일 때 옳은 것
  solution_summary: |
    p→~q 참 ⇔ P⊂Q^c ⇔ P∩Q=∅ · 대응 집합 관계
  category: 명제 참거짓과 진리집합 관계
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 명제진리집합대응
  mechanism_secondary: [함의포함관계, 여집합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-06
  page: 61
  problem_summary: |
    p:x<1-k 또는 x>1+k · q:x²-x-20≤0 · ~p→q 참 자연수 k 개수
  solution_summary: |
    ~P는 폐구간 · P^c⊂Q 조건 · 부등식 · 자연수 k 개수
  category: 명제 p→q 참 되도록 하는 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 진리집합포함조건
  mechanism_secondary: [부등식포함, 자연수해]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-07
  page: 61
  problem_summary: |
    '모든 실수 x에 대하여 x²+4kx+3k²-2k+3>0' 거짓 자연수 k 최소
  solution_summary: |
    거짓 = '어떤 x' 반례 존재 · 이차식 판별식 ≥ 0 · k 부등식
  category: '모든'이나 '어떤' 명제
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 전칭명제거짓판별식
  mechanism_secondary: [판별식, 자연수최소]
  citation_note: "블랙라벨 CM2"

#### 5-2. 역·대우 · 충분·필요 · 삼단논법 (문제 08~13)

- source: 블랙라벨-CM2-CH05-STEP1-08
  page: 62
  problem_summary: |
    보기 세 명제 · 명제·역·대우 모두 참인 것
  solution_summary: |
    각 명제와 그 역 참거짓 확인 · 대우는 명제와 일치
  category: 명제의 역과 대우
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 역대우참거짓
  mechanism_secondary: [역명제, 대우일치]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-09
  page: 62
  problem_summary: |
    'a+b<6이면 a<k 또는 b<-1' 참 · 실수 k 최솟값
  solution_summary: |
    대우 이용 · 'a≥k이고 b≥-1이면 a+b≥6' 참 조건 · k
  category: 명제 참 조건 - 대우 이용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대우명제참
  mechanism_secondary: [부등식조건, 최솟값]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-10
  page: 62
  problem_summary: |
    빈칸 채우기 증명 · n² 짝수면 n 짝수 · 대우 증명
  solution_summary: |
    대우 명제: n 홀수 → n² 홀수 · n=2k+1 대입 전개
  category: 명제의 증명 - 대우 이용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 대우증명빈칸
  mechanism_secondary: [대우설정, 홀수표현]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-11
  page: 62
  problem_summary: |
    p:-1≤x≤3 또는 x≥5, q:x≥a, r:x≥b · q는 p 필요, r은 p 충분 · a max + b min
  solution_summary: |
    p→q 참 : Q⊃P · r→p 참 : R⊂P · a max, b min · 합
  category: 충분조건과 필요조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 충분필요진리집합
  mechanism_secondary: [포함관계, 최대최소]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-12
  page: 62
  problem_summary: |
    세 조건 p,q,r · 다섯 추론 중 항상 옳은 것
  solution_summary: |
    삼단논법 · 대우 조합 · 각 추론 논리 검증
  category: 삼단논법
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 삼단논법조합
  mechanism_secondary: [대우변환, 논리검증]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-13
  page: 62
  problem_summary: |
    네 후보 A,B,C,D · 두 명 대표 · 네 조건 · 대표 두 명 결정
  solution_summary: |
    가정법 · 각 조건 대우 이용 · 모순 없는 조합
  category: 삼단논법의 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 조건연쇄추론
  mechanism_secondary: [대우, 가정검증]
  citation_note: "블랙라벨 CM2"

#### 5-3. 절대부등식 · 산술기하 · 코시슈바르츠 (문제 14~20)

- source: 블랙라벨-CM2-CH05-STEP1-14
  page: 63
  problem_summary: |
    세 실수 a,b,c · 보기 세 절대부등식 판정
  solution_summary: |
    각 부등식 이항·완전제곱·삼각부등식 활용 판정
  category: 절대부등식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 절대부등식판정
  mechanism_secondary: [완전제곱, 삼각부등식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-15
  page: 63
  problem_summary: |
    (a,b) 곡선 y=6/x 위 · 2a+3b 최솟값
  solution_summary: |
    ab=6 · 산술기하 2a+3b ≥ 2√(6ab) · 최솟값
  category: 산술평균과 기하평균의 관계(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 산술기하최솟값
  mechanism_secondary: [곡선조건, 부등식적용]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-16
  page: 63
  problem_summary: |
    a+b=6 양수 · (a²+1)/a + (b²+1)/b 최솟값 · pqr
  solution_summary: |
    분리 · a + 1/a + b + 1/b · 산술기하 · 등호 조건 · a,b 값
  category: 산술평균과 기하평균의 관계(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 산술기하등호조건
  mechanism_secondary: [분리, 최솟값, 등호]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-17
  page: 63
  problem_summary: |
    끈 68cm 상자 (높이 5cm) · 부피 최대 A
  solution_summary: |
    가로세로 관계 · 산술기하 · 부피 최댓값
  category: 산술기하평균 도형에 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 실생활산술기하
  mechanism_secondary: [부피식, 최댓값]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-18
  page: 63
  problem_summary: |
    x²+y²=1 · 3x+4y 최대·최소 · M-m
  solution_summary: |
    코시슈바르츠 (3x+4y)² ≤ (9+16)(x²+y²) · 5 ≤ ≤ -5
  category: 코시-슈바르츠 부등식(1)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 코시슈바르츠적용
  mechanism_secondary: [원조건, 최대최소차]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-19
  page: 63
  problem_summary: |
    x/4 - y/2 = 3 · x²+4y² 최솟값 p · x,y=q,r · p-q+r
  solution_summary: |
    변수 치환 · 코시슈바르츠 · 등호 조건 · x,y 값
  category: 코시-슈바르츠 부등식(2)
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 코시슈바르츠등호
  mechanism_secondary: [치환, 등호조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH05-STEP1-20
  page: 63
  problem_summary: |
    지름 6√5 원 내접 직사각형 · 접어서 사각기둥 · 모서리 합 최댓값
  solution_summary: |
    직사각형 두 변 관계 · 정사각형 밑면 조건 · 코시슈바르츠
  category: 코시-슈바르츠 부등식 도형 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 도형코시슈바르츠
  mechanism_secondary: [원내접, 사각기둥, 최댓값]
  citation_note: "블랙라벨 CM2"

---

## III. 함수와 그래프

### CH06. 함수 (21문제) — CM2-FN

#### 6-1. 함수의 정의·같은 함수·개수 (문제 01~07)

- source: 블랙라벨-CM2-CH06-STEP1-01
  page: 76
  problem_summary: |
    X={-1,0,1}, Y={0,1,2,3,4} · 네 식 중 X→Y 함수인 것
  solution_summary: |
    각 x∈X에 대해 f(x)∈Y 조건 확인 · 함수 정의
  category: 함수의 정의
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 함수정의확인
  mechanism_secondary: [정의역치역, 대입검증]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-02
  page: 76
  problem_summary: |
    f(x)=x³+2x+1, g(x)=-2x²+3x+3 · f=g 정의역 X 개수
  solution_summary: |
    f(x)-g(x)=0 방정식 근 · 부분집합 X 개수 (공집합 아님)
  category: 서로 같은 함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 같은함수정의역
  mechanism_secondary: [방정식근, 부분집합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-03
  page: 76
  problem_summary: |
    이 함수 f(x) · 치역·부등식 해·대칭성 판정
  solution_summary: |
    두 부분별 치역 · 부등식 각 식 해 · 대칭 확인
  category: 함수의 그래프
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 두 식으로 정의된 함수분석
  mechanism_secondary: [치역, 그래프대칭]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-04
  page: 76
  problem_summary: |
    X={x|1≤x≤a} · f(x)=(1/3)(x-1)²+b 일대일대응 · a+b
  solution_summary: |
    포물선 X 대응 조건 · 최솟값·최댓값 대응 · a,b
  category: 일대일대응
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 일대일대응범위
  mechanism_secondary: [포물선단조, 대응조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-05
  page: 76
  problem_summary: |
    X 정의역 f(x)=x²-6x 항등함수 · X 개수
  solution_summary: |
    x²-6x=x → x=0 또는 x=7 · 부분집합 개수
  category: 항등함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 항등함수원소
  mechanism_secondary: [고정점, 부분집합]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-06
  page: 76
  problem_summary: |
    X={0,1,2} · f,g,h 일대일·상수·항등 · f(2)+g(0)+h(1)
  solution_summary: |
    각 함수 유형 특성 · 조건 대입 · 함숫값 결정
  category: 여러 가지 함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 함수유형결정
  mechanism_secondary: [일대일, 상수, 항등]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-07
  page: 76
  problem_summary: |
    X,Y 각 n원 · 상수 아닌 f 개수 f(n) · x₁→y₁ 대응 안 하는 일대일 g(n) · f(3)+g(4)
  solution_summary: |
    f(n)=nⁿ-n · g(n)=n! - (n-1)! · 계산
  category: 함수의 개수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 함수개수공식
  mechanism_secondary: [지수공식, 순열]
  citation_note: "블랙라벨 CM2"

#### 6-2. 합성함수 (문제 08~13)

- source: 블랙라벨-CM2-CH06-STEP1-08
  page: 77
  problem_summary: |
    부분별 f · g(x)=x²-9 · (f∘g)(-2)-(g∘f)(3)
  solution_summary: |
    g(-2)=-5, f(-5)=21 · f(3)=6, g(6)=27 · 차 = -6
  category: 합성함수의 함숫값
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성함숫값-부분별
  mechanism_secondary: [조건분기, 순서대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-09
  page: 77
  problem_summary: |
    f=ax+m, g=bx+n · m,n 관계없이 f∘g=g∘f · a+b
  solution_summary: |
    (ab-ba)x + (an+m-bm-n)=0 항등식 · 계수 조건 · a+b
  category: f∘g=g∘f를 만족하는 함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 교환합성조건
  mechanism_secondary: [항등식, 계수비교]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-10
  page: 77
  problem_summary: |
    f=2x-1 · fⁿ⁺¹=f∘fⁿ · f⁹(3)
  solution_summary: |
    반복 합성 규칙 · fⁿ(x)=2ⁿx - (2ⁿ-1) · n=9, x=3
  category: 규칙이 있는 합성함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성규칙일반화
  mechanism_secondary: [수학적귀납법, 등비]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-11
  page: 77
  problem_summary: |
    f=x+a · (h∘g)(x)=5x-2, (h∘g∘f)(x)=bx-7 · 2a+b
  solution_summary: |
    (h∘g∘f)(x) = (h∘g)(f(x)) = 5(x+a)-2 · 계수 비교
  category: f∘g=h 만족 함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성분해대입
  mechanism_secondary: [합성대입, 계수비교]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-12
  page: 77
  problem_summary: |
    X={0≤x≤4} · f,g 그래프 · f∘g와 g∘f 그래프로 둘러싼 넓이
  solution_summary: |
    각 합성함수 그래프 결정 · 교점·구간 넓이 계산
  category: 합성함수의 그래프
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성함수그래프넓이
  mechanism_secondary: [구간분할, 넓이계산]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-13
  page: 77
  problem_summary: |
    y=x와 f(x) 원점·두 점 만남 · (f∘f)(x)=f(x) 만족 x 개수
  solution_summary: |
    f(x)=x 해가 (f∘f)=f 해에 포함 · 조건 분석
  category: 합성함수의 그래프와 방정식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성방정식해수
  mechanism_secondary: [고정점, 그래프해석]
  citation_note: "블랙라벨 CM2"

#### 6-3. 역함수 (문제 14~21)

- source: 블랙라벨-CM2-CH06-STEP1-14
  page: 77
  problem_summary: |
    부분별 f (x<4 : x+5 / x≥4 : 3x-3) · f⁻¹(8)+f⁻¹(12)
  solution_summary: |
    각 식 y=8,12 해 x · 조건 확인 · 합
  category: 역함수의 함숫값
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 역함수-부분별계산
  mechanism_secondary: [부분별 역함수, 대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-15
  page: 78
  problem_summary: |
    부분별 f · 역함수 존재 정수 b 최솟값
  solution_summary: |
    일대일대응 조건 · 경계 연속·기울기 조건 · b
  category: 역함수 존재 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 역함수존재조건
  mechanism_secondary: [일대일, 경계연결]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-16
  page: 78
  problem_summary: |
    f 일대일 · f(3x+1)=6x-5 · f⁻¹(x)=ax+b · ab
  solution_summary: |
    3x+1=t 치환 · f(t) 결정 · 역함수 · a,b
  category: 역함수 구하기
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 치환역함수
  mechanism_secondary: [치환, 역함수공식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-17
  page: 78
  problem_summary: |
    f⁻¹(x)=2x², (f∘g⁻¹)(x²)=x · (g⁻¹∘f)(2)
  solution_summary: |
    역함수 성질 · (f∘g⁻¹)⁻¹ = g∘f⁻¹ · 대입 계산
  category: 역함수의 성질
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 역함수합성성질
  mechanism_secondary: [역함수변환, 합성역]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-18
  page: 78
  problem_summary: |
    f=x+a, g=bx+c · (f⁻¹∘g)(x)=2x+5, f(3)=2 · a+b+c
  solution_summary: |
    f(3)=2 → a · f⁻¹∘g 정리 · b,c 결정
  category: 합성함수와 역함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성역결합
  mechanism_secondary: [역함수식, 항등식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-19
  page: 78
  problem_summary: |
    x≥0 f,y=x · 그림 사용 (g∘g)(k) 함숫값 · a,b,c,d,e 중 선택
  solution_summary: |
    y=x 대칭 성질 · g(k) 위치·g(g(k)) 순차 · 좌표 대응
  category: 그래프를 이용하여 함숫값
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 그래프반복대응
  mechanism_secondary: [y=x대칭, 좌표순차]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-20
  page: 78
  problem_summary: |
    f(x) 부분별 · 역함수 g · y=f,y=g로 둘러싼 넓이 28 · 양수 a
  solution_summary: |
    f와 g는 y=x 대칭 · 사이 넓이 = 2 × (f와 y=x 사이 넓이)
  category: 역함수의 그래프의 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 역함수그래프넓이
  mechanism_secondary: [y=x대칭넓이, 조각적분대체]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH06-STEP1-21
  page: 78
  problem_summary: |
    -1≤x≤1, -1<a<1 · f(x)=|x+1|+|x-a|+|x-1| 최솟값
  solution_summary: |
    세 절댓값 합 최솟값 = 중앙값에서 · 조건별 케이스
  category: 절댓값 기호를 포함한 함수의 그래프
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 절댓값세개최소
  mechanism_secondary: [중앙값성질, 조건분류]
  citation_note: "블랙라벨 CM2"

---

## IV. 유리·무리함수 (CM2-RF)

### CH07. 유리함수 (14문제)

#### 7-1. 유리식의 연산·항등식 (문제 01~05)

- source: 블랙라벨-CM2-CH07-STEP1-01
  page: 91
  problem_summary: |
    (x-2)/(x+2) - (x²-4)/(x³+2x-8) · (x²-5x+6)/(x²+x-12) 계산
  solution_summary: |
    분자·분모 인수분해 · 통분 · 약분 · 최종식
  category: 유리식의 연산
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리식연산
  mechanism_secondary: [인수분해, 통분약분]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-02
  page: 91
  problem_summary: |
    a/(x+1) + (3x-b)/(x²-x+1) = (-5x+c)/(x³+1) 항등식 · a-2b+c
  solution_summary: |
    좌변 통분 · x³+1 = (x+1)(x²-x+1) · 계수 비교
  category: 유리식과 항등식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리식항등식
  mechanism_secondary: [통분, 계수비교]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-03
  page: 91
  problem_summary: |
    f(x)=x²+4x+3 · 1/f(1)+1/f(3)+···+1/f(99) = q/p · p+q
  solution_summary: |
    부분분수 분해 · 망원급수 · 서로소 · 합
  category: 부분분수로 변형
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 부분분수망원
  mechanism_secondary: [부분분수, 소거]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-04
  page: 91
  problem_summary: |
    복합유리식 1/(3 - 1/(3 - 1/x)) = (ax+b)/(cx-3) · a+b+c
  solution_summary: |
    내부부터 통분 · 계단식 정리 · 계수 비교
  category: 분자 또는 분모가 분수식인 유리식
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 계단분수정리
  mechanism_secondary: [내부통분, 계수비교]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-05
  page: 91
  problem_summary: |
    (2x+y)/z = (y+z)/(2x) = (z+2x)/y = k · (x+y)(y+z)(z+x)/(xyz)
  solution_summary: |
    비례식 k 설정 · 각 조건 · 대칭식 표현 · 계산
  category: 비례식을 이용한 유리식의 값
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 비례식대칭
  mechanism_secondary: [k설정, 대칭식전개]
  citation_note: "블랙라벨 CM2"

#### 7-2. 유리함수 그래프 (문제 06~14)

- source: 블랙라벨-CM2-CH07-STEP1-06
  page: 91
  problem_summary: |
    y=(2x+1)/(2x-1) 정의역 {-1≤x<1/2 또는 1/2<x≤1} · 치역
  solution_summary: |
    유리함수 그래프 · 정의역 두 식 · 각 식 치역 합
  category: 유리함수의 정의역과 치역
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리함수치역
  mechanism_secondary: [점근선, 조각치역]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-07
  page: 91
  problem_summary: |
    y=(ax+b)/(x+c) 점 (-1,-2) 지남 · 두 점근선 교점 (-3,2) · a+b+c
  solution_summary: |
    점근선 x=-c, y=a · c=3, a=2 · 점 대입 b · 합
  category: 유리함수의 그래프의 두 점근선
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 점근선교점
  mechanism_secondary: [점근선공식, 계수결정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-08
  page: 92
  problem_summary: |
    f=5x/(x+2) x,y방향 이동 · y=|g(x)| y축 대칭 · p+q
  solution_summary: |
    g(x) 형태 · |g(x)| y축 대칭 조건 · 점근선 대칭 · p,q
  category: 유리함수의 그래프의 평행이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 절댓값유리대칭
  mechanism_secondary: [평행이동, 대칭조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-09
  page: 92
  problem_summary: |
    y=(-4x+7)/(2x-3) 직선 y=ax+b 대칭 · a²+4b²
  solution_summary: |
    점근선 교점 지나는 기울기 ±1 두 대칭축 · a²+4b² 값
  category: 유리함수의 그래프의 대칭성
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리함수대칭축
  mechanism_secondary: [점근선교점, ±1대칭]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-10
  page: 92
  problem_summary: |
    y=(ax-a²+16)/(x-a) 모든 사분면 지나는 자연수 a 개수
  solution_summary: |
    점근선 위치 · 그래프 개형 · 4사분면 통과 조건 · a 범위
  category: 유리함수의 그래프가 지나는 사분면
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 사분면통과조건
  mechanism_secondary: [점근선분석, 자연수해]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-11
  page: 92
  problem_summary: |
    4≤x≤7 · y=(-2x+2)/(x-3) · x=a 최댓값 b, x=c 최솟값 d · a-b+c-d
  solution_summary: |
    유리함수 감소 or 증가 판정 · 양 끝점 · 최대·최소
  category: 유리함수의 최대·최소
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리함수최대최소구간
  mechanism_secondary: [단조성, 양끝점]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-12
  page: 92
  problem_summary: |
    -2≤x≤1 · y=(3x+10)/(x+3)와 y=kx+3k 만남 · 16Mm
  solution_summary: |
    y=kx+3k=k(x+3) 정점 (-3,0) · 유리함수 위 접선·교점 조건 · M,m
  category: 유리함수의 그래프와 직선 위치 관계
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리함수직선판별
  mechanism_secondary: [정점직선, 판별식]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-13
  page: 92
  problem_summary: |
    f(x)=x/(1-x) · fⁿ⁺¹=f∘fⁿ · f³⁰(x)=(ax+b)/(cx+1) · a+b+c
  solution_summary: |
    f² · f³ 계산 · 주기 발견 · f³⁰ 정리
  category: 유리함수의 합성
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성주기유리
  mechanism_secondary: [반복합성, 주기]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH07-STEP1-14
  page: 92
  problem_summary: |
    f(x)=(-2x+a)/(x+1), g(x)=(bx+1)/(cx+2) · g(f(x))=x 항등 · a+b+c
  solution_summary: |
    g가 f 역함수 · 역함수 공식 대입 · 계수 비교
  category: 유리함수의 역함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리함수역함수
  mechanism_secondary: [역함수공식, 계수비교]
  citation_note: "블랙라벨 CM2"

---

### CH08. 무리함수 (14문제)

#### 8-1. 무리식 연산·유리화 (문제 01~04)

- source: 블랙라벨-CM2-CH08-STEP1-01
  page: 101
  problem_summary: |
    √(kx²-kx+3) 모든 x 실수 · 정수 k 개수
  solution_summary: |
    kx²-kx+3 ≥ 0 항상 · k=0 또는 (k>0 판별식 ≤0)
  category: 무리식의 값이 실수가 되기 위한 조건
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 근호속양수판별식
  mechanism_secondary: [판별식조건, 정수해]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-02
  page: 101
  problem_summary: |
    0<a<1 · x=a²+1/a² · √(x+2)-√(x-2) a 식으로
  solution_summary: |
    x+2=(a+1/a)², x-2=(a-1/a)² · a<1 부호 · 정리
  category: 제곱근의 성질
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 완전제곱무리
  mechanism_secondary: [완전제곱꼴, 부호판정]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-03
  page: 101
  problem_summary: |
    양수 a,b · 1/(a+√ab) + 1/(b+√ab) 간단히
  solution_summary: |
    각 항 √ab로 묶음 · 유리화 · 합 정리
  category: 무리식의 연산
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리식유리화합
  mechanism_secondary: [분모유리화, 인수공통]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-04
  page: 101
  problem_summary: |
    x=(√3+1)/(√3-1) · (√(x+1)+√(x-1))/(√(x-1)+√(x+1)) 값
  solution_summary: |
    x 유리화 · x=2+√3 · x±1 계산 · 유리화
  category: 분모의 유리화
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 분모유리화
  mechanism_secondary: [켤레곱, 대입]
  citation_note: "블랙라벨 CM2"

#### 8-2. 무리함수 그래프 (문제 05~14)

- source: 블랙라벨-CM2-CH08-STEP1-05
  page: 101
  problem_summary: |
    y=√(ax+b)+c 정의역 {x≥4}, 치역 {y≥2} · (4a²+2b+c²)/(4a) 최솟값
  solution_summary: |
    a>0 · 시작점 (4,2) · b=-4a, c=2 · 대입 · a 최소화
  category: 무리함수의 정의역과 치역
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수정의역치역
  mechanism_secondary: [시작점, 산술기하]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-06
  page: 101
  problem_summary: |
    유리함수 y=(cx+d)/(ax+b) 그림 · 무리 y=a√(bx+c)+d 지나는 사분면
  solution_summary: |
    유리함수 그림에서 a,b,c,d 부호 · 무리함수 개형 결정
  category: 무리함수의 그래프가 지나는 사분면
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 부호그래프연동
  mechanism_secondary: [계수부호, 사분면]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-07
  page: 101
  problem_summary: |
    y=√(2x-a)-5 x방향 -3, y방향 2 이동 · y축 대칭 = √(bx+4)+c · a+b+c
  solution_summary: |
    평행이동식 · y축 대칭식 · 두 식 계수 비교
  category: 무리함수의 그래프의 평행이동과 대칭이동
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수변환
  mechanism_secondary: [평행이동, 축대칭]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-08
  page: 102
  problem_summary: |
    f=√(x+2)+2k, g=√(4-x)-6 · 그래프와 x=-2, x=4로 둘러싼 넓이 72 · k
  solution_summary: |
    두 곡선 사이 영역 · 사각형+대칭 · k 결정
  category: 무리함수 이동 활용
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수영역넓이
  mechanism_secondary: [영역분해, 대칭계산]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-09
  page: 102
  problem_summary: |
    y=-√(4-4x)+3 · 평행이동시 y=-√(-4x) · 점 (-5/4,0) · 4사분면 판정
  solution_summary: |
    표준형 정리 · 시작점 · 사분면 통과 확인
  category: 무리함수의 그래프의 성질
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수개형판정
  mechanism_secondary: [표준형, 사분면]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-10
  page: 102
  problem_summary: |
    y=ax²+bx+c 그림 · -3≤x≤5 · y=√(-ax+2b+3c) M,m · M-m=2 · a+b+c
  solution_summary: |
    이차함수에서 a,b,c 관계 · 무리함수 최대·최소 · 방정식
  category: 무리함수의 최대·최소
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수구간최대최소
  mechanism_secondary: [이차조건, 무리함수치역]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-11
  page: 102
  problem_summary: |
    √(x+2)=x+k 서로 다른 두 실근 · k 범위
  solution_summary: |
    제곱 정리 · 이차방정식 · 판별식 & 정의역 조건
  category: 무리함수의 그래프와 직선의 위치 관계
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리방정식두실근
  mechanism_secondary: [판별식, 근존재조건]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-12
  page: 102
  problem_summary: |
    f(x)=√(2x-a)+2 · f와 f⁻¹ 두 점에서 만남 · 두 교점 거리 2√2 · a
  solution_summary: |
    f=f⁻¹ 교점은 y=x 위 · f(x)=x 이차방정식 · 두 근 거리 조건
  category: 무리함수의 역함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 무리함수역함수교점
  mechanism_secondary: [y=x교점, 두근거리]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-13
  page: 102
  problem_summary: |
    f=(2x+1)/(x-2), g=√(4x+1) 정의역 x>2 · (f∘(g∘f)⁻¹∘f)(3)
  solution_summary: |
    합성역 정리 · 역함수 성질 · f(3) 대입
  category: 무리함수의 합성함수와 역함수
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 합성역함수유리무리
  mechanism_secondary: [역함수성질, 대입]
  citation_note: "블랙라벨 CM2"

- source: 블랙라벨-CM2-CH08-STEP1-14
  page: 102
  problem_summary: |
    y=(x+1)/(x-1), y=√(x+k) 서로 다른 두 점 만남 · 실수 k 범위
  solution_summary: |
    유리함수·무리함수 교점 개수 · 접선·경계 조건
  category: 유리함수와 무리함수의 그래프의 교점
  difficulty: STEP1
  tier_estimated: star_4
  mechanism_primary: 유리무리교점개수
  mechanism_secondary: [판별식, 접선조건]
  citation_note: "블랙라벨 CM2"

---

## 정독 통계

| 단원 | 문항수 | 페이지 | 단원 코드 |
|---|---|---|---|
| 01 점과 직선 | 21 | 9~11 | CM2-GM |
| 02 원의 방정식 | 21 | 21~23 | CM2-GM |
| 03 도형의 이동 | 14 | 34~35 | CM2-GM |
| 04 집합 | 21 | 47~49 | CM2-ST |
| 05 명제 | 20 | 61~63 | CM2-ST |
| 06 함수 | 21 | 76~78 | CM2-FN |
| 07 유리함수 | 14 | 91~92 | CM2-RF |
| 08 무리함수 | 14 | 101~102 | CM2-RF |
| **합계** | **146** | — | — |

- **tier 라벨**: 전 문항 STEP 1 = **star_4** 일괄
- **저작권**: 발문 30~40자 축약, 풀이 60자 축약. 원문 전사 없음
- **활용**: mechanism 은행 v2.0 확장 · 앵커 카탈로그 star_4 tier 보강 · 시험지 정점 문항 mechanism 검색
