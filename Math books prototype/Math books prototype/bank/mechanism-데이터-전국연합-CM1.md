---
name: mechanism-데이터-전국연합-CM1
description: 2026 마더텅 전국연합 학력평가 기출 20분 미니모의고사 24회 (고1 공통수학1) — 24회 × 8문 = 192문항 정독 데이터. 방안 F Stage 1 P3 · 학평 기출 pool. 저작권 준수 (원문 전사 없음 · 원본 출처 회차·번호 인용). 원본 배점 및 원본 번호 위치 기반 tier 매핑.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16 (세션 46 Stage 1 P3)
  source: 2026 마더텅 전국연합 학력평가 기출 20분 미니모의고사 24회 (고1 공통수학1) — 마더텅
  answer_rate_available: false
  answer_rate_source_note: |
    마더텅 미니모의 문제집 자체에는 정답률이 인쇄되어 있지 않음.
    tier는 (원본 배점 + 원본 회차 번호 위치) 기반 결정론적 매핑 사용.
    scripts/star-classify.mjs --by number 실행 시 자동 판정.
    개별 문항에 정답률이 확인되면 answer_rate 필드 수동 추가 후 --by answer_rate 재실행.
  tier_mapping:
    # 캘리브레이션 v1.0 · 마더텅 미니모의 CM1 (2026-07-16 세션 46 확립)
    # 원본 배점 기준 (마더텅 인쇄 배점 = 원본 학평 배점 유지):
    2점: star_1·2  # 정독 제외 (거의 안 씀)
    3점_기본: star_3  # 회차 초반 번호 (2·3·5·7번)
    3점_중반: star_3·4  # 회차 중반 번호 (12·13·14번)
    4점_기본: star_4  # 회차 15·16·18·19번
    4점_준킬러: star_5  # 회차 20·21·26·27·28·29번 (2점 배점 시절 A형·B형·나형·가형 포함)
    4점_킬러: star_5_premium  # 회차 22·30번 or 조건형 [보기] 지문 다층 결합
  total_problems: 192
  회수: 24
  문항_per_회: 8
  citation_note: 학습 목적 · 저작권 준수 · 원문 출처 (년도·월·번호·학년) 및 배점만 인용
  audience_notes: 학평 기출 pool 확보 (방안 F v1.7) · Stage 1 P3
  master_review_flag_note: |
    4점 배점 문항은 원본 번호 위치·[보기] 지문형 여부·조건 다층 여부로 star_4·5·premium 재판정.
    특히 (고2) 나형/가형/A형/B형 이관 문항은 CM1 범위 밖 개념 침투 여부 검수 필요.
    행렬 (CM1-MX) 문항 중 2010년대 (고2) 나형 편입분은 마스터 확립대로 STEP 3·premium 후보.
  unit_distribution:
    CM1-PL: 회 1~4 대부분 + 회 5 일부 (~30문)  # 다항식 연산·나머지·인수분해·항등식
    CM1-EQ: 회 5~15 (~90문)  # 복소수·이차방정식·이차함수·여러 방정식·부등식
    CM1-CB: 회 16~20 (~40문)  # 순열·조합·경우의 수
    CM1-MX: 회 21~24 (~30문)  # 행렬 (2010년대 나형·A형 재편집분 다수)
---

# 2026 마더텅 전국연합 학력평가 기출 20분 미니모의고사 24회 (고1 공통수학1) 정독 데이터

**전체 구조** (마더텅 편집):
- 24회 × 8문 = 192문항. 각 회 = 4쪽 (문제 + 답+풀이 인쇄 O/X 두 판본)
- 회차별 배점 분포: 2점 × 1~2문 · 3점 × 4~5문 · 4점 × 2~3문
- 출처: 2020~2025년 3월·6월·9월·10월·11월 학평 (고1) + 일부 (고2) 나형·A형·B형·가형 이관 (특히 회 21~24 행렬 편)

## I. 다항식 (CM1-PL) · 회 1~4 대부분

```yaml
- source: 전국연합-마더텅-01회-#01
  unit_code: CM1-PL
  original_source: 2021년 9월학평 1번(고1)
  original_points: 2
  number_in_original: 1
  tier: star_1·2
  mechanism_primary: 두 이차다항식의 A+B 동류항 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    두 다항식 A=x²−x+1, B=−x²+2x에 대하여 A+B를 계산 · 5지선다 · 2점.

- source: 전국연합-마더텅-01회-#02
  unit_code: CM1-PL
  original_source: 2021년 11월학평 23번(고1)
  original_points: 3
  number_in_original: 23
  tier: star_3
  mechanism_primary: (x+a)³ 전개식에서 특정 차수 계수 조건
  variation_hooks: [상수 a·전개 대상 차수 변경]
  insight_type: 절차형
  depth: 2
  problem_summary: |
    다항식 (x+a)³+x(x−4)의 전개식에서 x²의 계수가 10이 되는 상수 a. 서답형 3점.

- source: 전국연합-마더텅-01회-#03
  unit_code: CM1-PL
  original_source: 2019년 6월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 곱셈공식 변형 · x−y·x³−y³ 대입 · x²+y² 유도
  variation_hooks: [주어진 조합 수치 변경]
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    x−y=3, x³−y³=18일 때 x²+y²의 값. 곱셈공식 x³−y³=(x−y)³+3xy(x−y) 활용.

- source: 전국연합-마더텅-01회-#04
  unit_code: CM1-PL
  original_source: 2017년 6월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 정사각형·직사각형 넓이 관계 · 곱셈공식 (a+2b)² 대입
  variation_hooks: [넓이 조건 수치 변경]
  insight_type: I-RT
  depth: 2
  problem_summary: |
    한 변 a, 2b인 정사각형 두 개와 넓이 4인 직사각형 · 두 정사각형 넓이 합 = 직사각형 넓이의 5배 · 한 변 a+2b인 정사각형 넓이.

- source: 전국연합-마더텅-01회-#05
  unit_code: CM1-PL
  original_source: 2020년 6월학평 11번(고1)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: x³−y³ 곱셈공식 변형 · xy 유도
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    x−y=2, x³−y³=12일 때 xy의 값.

- source: 전국연합-마더텅-01회-#06
  unit_code: CM1-PL
  original_source: 2023년 6월학평 14번(고1)
  original_points: 4
  number_in_original: 14
  tier: star_4
  mechanism_primary: 이상기체 상태방정식 (V=R·nT/P) 지문 · 다중 조건 대입 · 부피비 계산
  variation_hooks: [nA/nB 비율·PA/PB 비율 변경]
  insight_type: I-XU
  depth: 3
  problem_summary: |
    이상기체 관계식 V=R·nT/P 지문 · 강철용기 A,B 조건 (nA=nB/4, PA=3PB/2, TA=TB) · VA/VB 값. 4점 지문형.

- source: 전국연합-마더텅-01회-#07
  unit_code: CM1-PL
  original_source: 2024년 10월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 원과 원 안 세 반원의 넓이 관계 · 벡터적 좌표 없이 세 반지름 다중 방정식 결합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    중심 O₁ 원 C₁, ∠BO₁A=90° · 선분 AC·BD 지름의 원 C₂,C₃ · 사각형 AO₂O₃B 넓이 34, O₂C+O₃D=6√2 · 세 원 넓이 합 pπ 구하기. 4점 킬러 (29번).

- source: 전국연합-마더텅-01회-#08
  unit_code: CM1-PL
  original_source: 2024년 6월학평 28번(고1)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 이차·일차 다항식 곱 · 나눗셈 정리 몫·나머지 다중 결합 · f(−2) 도출
  insight_type: I-BW
  depth: 3
  problem_summary: |
    이차다항식 f(x)·일차다항식 g(x) · f(x)g(x)를 f(x)−2x²으로 나눈 몫 x²−3x+3·나머지 f(x)+xg(x) · f(−2). 서답형 4점.

- source: 전국연합-마더텅-02회-#01
  unit_code: CM1-PL
  original_source: 2022년 3월학평 1번(고2)
  original_points: 2
  number_in_original: 1
  tier: star_1·2
  mechanism_primary: 다항식 A−B 계산
  problem_summary: |
    A=3x²−2xy+y², B=x²+xy−y² · A−B 간단히. 2점 5지선다.

- source: 전국연합-마더텅-02회-#02
  unit_code: CM1-PL
  original_source: 2025년 6월학평 24번(고1)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: k−3/k 조건 → k³−27/k³ 값 · 세제곱 곱셈공식
  variation_hooks: [조건 수치·구하는 값 차수 변경]
  problem_summary: |
    k−3/k=6일 때 k³−27/k³ 값. 서답형 3점.

- source: 전국연합-마더텅-02회-#03
  unit_code: CM1-PL
  original_source: 2021년 6월학평 7번(고1)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 직육면체 겉넓이·모서리 합 · BG²+GD²+DB² 곱셈공식 결합
  variation_hooks: [겉넓이·모서리합 수치 변경]
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    직육면체 ABCD-EFGH, 겉넓이 148, 모서리합 60 · BG²+GD²+DB². 3점.

- source: 전국연합-마더텅-02회-#04
  unit_code: CM1-PL
  original_source: 2020년 3월학평 25번(고2)
  original_points: 3
  number_in_original: 25
  tier: star_3
  mechanism_primary: 다변수 곱셈공식 (x−y−2z)² 확장 · xy−2yz+2zx 대입
  problem_summary: |
    세 실수 x,y,z에 대해 x²+y²+4z²=62, xy−2yz+2zx=13 · (x−y−2z)² 값. 서답형 3점.

- source: 전국연합-마더텅-02회-#05
  unit_code: CM1-PL
  original_source: 2019년 3월학평 나형 25번(고2)
  original_points: 3
  number_in_original: 25
  tier: star_3
  mechanism_primary: 다항식 나눗셈 · Q(x)=2x²−3x+4 · Q(−1) 값
  problem_summary: |
    2x³−x²+x+3을 x+1로 나눈 몫 Q(x) · Q(−1). 서답형 3점.

- source: 전국연합-마더텅-02회-#06
  unit_code: CM1-PL
  original_source: 2015년 6월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 이차함수 y=x² 위 세 점 · 삼각형 PAB 넓이 유도 · (가)(나)(다) 빈칸 추론형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    y=x² 위 P(−1,1),A(a,a²),B((a−1)/2, ((a−1)/2)²) · 사각형 PARQ 사다리꼴 · MN,MB 중점 관계 · S=(a+1)³/(다) · f(3)+g(5)+k. 지문형 빈칸 추론 4점.

- source: 전국연합-마더텅-02회-#07
  unit_code: CM1-PL
  original_source: 2024년 6월학평 19번(고1)
  original_points: 4
  number_in_original: 19
  tier: star_5
  mechanism_primary: 반원 지름 AB · 호 위 점 C,D · 직각삼각형 · a>4 조건 · a³−1/a³ 값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    길이 2a인 선분 AB 지름 반원 · 호 위 두 점 C,D · AC=CD=a−1, BD=8 · a³−1/a³. 4점.

- source: 전국연합-마더텅-02회-#08
  unit_code: CM1-PL
  original_source: 2022년 11월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 두 정사각뿔 O-ABCD·O-EFGH 부피 합 · AF 조건 · 사각형 ABFE 넓이 유도
  insight_type: I-CON
  depth: 3
  problem_summary: |
    모서리 a 정사각뿔 O-ABCD · OE=OF=OG=OH=b · 부피합 2√2, AF=2 · 32×S². 서답형 킬러 4점.

- source: 전국연합-마더텅-03회-#01
  unit_code: CM1-PL
  original_source: 2022년 9월학평 3번(고1)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: 항등식 계수비교 x(x+1)+2(x+1) 전개 · a−b
  problem_summary: |
    x(x+1)+2(x+1)=x²+ax+b 항등식 · a−b 값. 2점 5지선다.

- source: 전국연합-마더텅-03회-#02
  unit_code: CM1-PL
  original_source: 2020년 9월학평 5번(고1)
  original_points: 3
  number_in_original: 5
  tier: star_3
  mechanism_primary: 나머지 정리 P(1)=7 · 조립제법 없이 대입
  problem_summary: |
    P(x)를 x²+2x−3으로 나눈 나머지 2x+5 · P(x)를 x−1로 나눈 나머지.

- source: 전국연합-마더텅-03회-#03
  unit_code: CM1-PL
  original_source: 2017년 6월학평 6번(고1)
  original_points: 3
  number_in_original: 6
  tier: star_3
  mechanism_primary: 지수 인수분해 11⁴−6⁴ = (11²)²−(6²)² · 자연수 분해
  problem_summary: |
    1이 아닌 두 자연수 a,b (a<b) · 11⁴−6⁴=a×b×157 · a+b.

- source: 전국연합-마더텅-03회-#04
  unit_code: CM1-PL
  original_source: 2016년 3월학평 가형 9번(고2)
  original_points: 3
  number_in_original: 9
  tier: star_3
  mechanism_primary: f(−1)=0 → x+1이 인수 · 조립제법 후 인수분해 (x+1)²(bx+c)
  problem_summary: |
    2x³−3x²−12x−7을 (x+a)²(bx+c)로 인수분해 · a+b+c.

- source: 전국연합-마더텅-03회-#05
  unit_code: CM1-PL
  original_source: 2025년 3월학평 19번(고2)
  original_points: 4
  number_in_original: 19
  tier: star_5
  mechanism_primary: 두 삼차·두 이차다항식 (가)(나) 조건 · f+g / f−g 인수 분석 · 다항식 결정 조건 추론
  insight_type: I-CON
  depth: 3
  problem_summary: |
    f(x)+g(x)와 P₁,P₂,x²−5x+6 각각 나누어떨어짐 · P₁,P₂는 f−g로 각각 나누어떨어짐 · f(1)=g(1), f(2)=1일 때 g(3).

- source: 전국연합-마더텅-03회-#06
  unit_code: CM1-PL
  original_source: 2021년 6월학평 16번(고1)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: (x−2)²·(x−1)로 이중 나눗셈 · 다중 조건 f(0)=0 결합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    최고차 1 삼차 f(x) · f(0)=0 · f(x)를 (x−2)²로 나눈 나머지 2(x−2) · f(x)를 x−1로 나눈 몫 Q(x) · Q(5).

- source: 전국연합-마더텅-03회-#07
  unit_code: CM1-PL
  original_source: 2019년 9월학평 7번(고1)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 항등식 · x²−1로 나눈 몫 P(x) = x+3 · P(1) 계산
  problem_summary: |
    x³+3x²−x−3 = (x²−1)P(x) 항등식 · P(1) 값.

- source: 전국연합-마더텅-03회-#08
  unit_code: CM1-PL
  original_source: 2017년 6월학평 30번(고1)
  original_points: 4
  number_in_original: 30
  tier: star_5_premium
  mechanism_primary: 이차다항식 P(x) 조건 P(1)P(2)=0 · P{P−3}이 x(x−3)으로 나누어떨어짐 · 모든 P(x) 열거 → 합 Q(x) 결정 · Q(4)를 x−4로 나눈 나머지
  insight_type: I-CON
  depth: 3
  problem_summary: |
    조건 (가)(나) 만족 이차다항식 P(x) 합 Q(x) · Q(x)를 x−4로 나눈 나머지. 킬러 30번.

- source: 전국연합-마더텅-04회-#01
  unit_code: CM1-PL
  original_source: 2022년 11월학평 6번(고1)
  original_points: 3
  number_in_original: 6
  tier: star_3
  mechanism_primary: 항등식 2x²+ax+1 = (bx+1)(x+1) 계수비교 · a+b
  problem_summary: |
    항등식 계수비교. 3점.

- source: 전국연합-마더텅-04회-#02
  unit_code: CM1-PL
  original_source: 2022년 9월학평 22번(고1)
  original_points: 3
  number_in_original: 22
  tier: star_3
  mechanism_primary: f(1)=0 인수정리 · a 결정
  problem_summary: |
    x³−x²−10x+a가 x−1로 나누어떨어질 때 a. 서답형 3점.

- source: 전국연합-마더텅-04회-#03
  unit_code: CM1-PL
  original_source: 2020년 9월학평 9번(고1)
  original_points: 3
  number_in_original: 9
  tier: star_3
  mechanism_primary: 다항식 (x²+x)(x²+x+1)−6 · 치환 x²+x=t · 인수분해
  insight_type: I-RT
  depth: 2
  problem_summary: |
    (x²+x)(x²+x+1)−6 = (x+2)(x−1)(x²+ax+b) · a+b.

- source: 전국연합-마더텅-04회-#04
  unit_code: CM1-PL
  original_source: 2017년 9월학평 17번(고1)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: 다항식 조건 (가) f<0 (나) {f+1}²−9 = (x−1)(x+1)(x²+5) · 치환 · 다항식 판정 · f(x+a)를 x−2로 나눈 나머지 = −6 · a값 모두 곱
  insight_type: I-CON
  depth: 3
  problem_summary: |
    조건 만족 f(x) 결정 (부호 조건 (가)로 유일화) · a값 곱.

- source: 전국연합-마더텅-04회-#05
  unit_code: CM1-PL
  original_source: 2024년 6월학평 15번(고1)
  original_points: 4
  number_in_original: 15
  tier: star_4
  mechanism_primary: (x+2)(x+3)(x+4)(x+5)+k = (x²+ax+b)² 완전제곱화 · 치환 x²+7x=t
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    4항 곱+상수의 완전제곱화 · a+b+k.

- source: 전국연합-마더텅-04회-#06
  unit_code: CM1-PL
  original_source: 2025년 6월학평 28번(고1)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 이차다항식 P(x) 조건 {P(x)}²=(x²−4x−5)Q(x)+36 · P(0)≠P(4) · 모든 Q(−1) 합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    이차다항식 제곱 나눗셈 · 근 조건 (P(−1)·P(5) 부호 조합) · 다중 경우 Q(−1) 합. 서답형 킬러 28번.

- source: 전국연합-마더텅-04회-#07
  unit_code: CM1-PL
  original_source: 2017년 9월학평 19번(고1)
  original_points: 4
  number_in_original: 19
  tier: star_5
  mechanism_primary: 다항식 {f(x)}³ = 4x²f(x)+8x²+6x+1 항등식 · f 최고차 결정 · [보기] 참거짓
  insight_type: I-MI
  depth: 3
  problem_summary: |
    항등식으로부터 f=ax+b 형태 유도 · [보기] ㄱ,ㄴ,ㄷ.

- source: 전국연합-마더텅-04회-#08
  unit_code: CM1-PL
  original_source: 2021년 9월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 두 다항식 P·Q 조건 {Q(x+1)}²+{Q(x−1)}² = (x²−x)P(x) · Q 결정 · P를 Q로 나눈 나머지 R(x) · R(3)
  insight_type: I-CON
  depth: 3
  problem_summary: |
    다항식 항등식 만족 P·Q 결정 · P를 Q로 나눈 나머지. 서답형 킬러 29번.
```

## II. 방정식과 부등식 (CM1-EQ) · 회 5~15

```yaml
- source: 전국연합-마더텅-05회-#01
  unit_code: CM1-PL
  original_source: 2023년 3월학평 1번(고2)
  original_points: 2
  number_in_original: 1
  tier: star_1·2
  mechanism_primary: 다항식 A+B 계산 (CM1-PL 잔여)
  problem_summary: 2점 5지선다.

- source: 전국연합-마더텅-05회-#02
  unit_code: CM1-EQ
  original_source: 2024년 3월학평 5번(고2)
  original_points: 3
  number_in_original: 5
  tier: star_3
  mechanism_primary: 나머지정리 f(2)=20+4a · 나머지 2a−8 등식
  problem_summary: |
    다항식 x³+ax²+12를 x−2로 나눈 나머지 2a−8 · a. (CM1-PL 나머지정리 · 답지에는 EQ로 이관)

- source: 전국연합-마더텅-05회-#03
  unit_code: CM1-PL
  original_source: 2020년 11월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 나머지정리 이중 나눗셈 · f(x+3) 대입 → f(x²) 나눗셈
  insight_type: I-BW
  depth: 2
  problem_summary: |
    f(x+3)을 (x+2)(x−1)로 나눈 나머지 3x+8 · f(x²)를 x+2로 나눈 나머지.

- source: 전국연합-마더텅-05회-#04
  unit_code: CM1-PL
  original_source: 2022년 3월학평 24번(고2)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: 항등식 좌변 전개 · 계수비교 a·b·c 결정
  problem_summary: (2x+3)(x−2)+8 = ax(x−2)+b(x−2)+cx · a+b+c 서답형.

- source: 전국연합-마더텅-05회-#05
  unit_code: CM1-PL
  original_source: 2024년 6월학평 25번(고1)
  original_points: 3
  number_in_original: 25
  tier: star_3
  mechanism_primary: 다항식 나눗셈 몫·나머지 Q,R · Q(2)+R(1) 값
  problem_summary: |
    x⁴+2x³+11x−4를 x²+2x+3으로 나눈 몫 Q·나머지 R · Q(2)+R(1). 서답형.

- source: 전국연합-마더텅-05회-#06
  unit_code: CM1-PL
  original_source: 2022년 11월학평 16번(고1)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: (x−1)(x−4)(x−5)(x−8)+a = (x+b)²(x+c)² · 짝짓기 x²−9x+... 치환
  insight_type: I-EQV
  depth: 3
  problem_summary: 완전제곱 인수분해 4점.

- source: 전국연합-마더텅-05회-#07
  unit_code: CM1-EQ
  original_source: 2017년 6월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 반원 지름 AB · 수선의 발 Q · AQ,QB 지름 두 반원 넓이 관계 · S₁−S₂=2π · AB 길이
  insight_type: I-CON
  depth: 3
  problem_summary: 반원 · 도형 넓이 · AB 서답형 킬러.

- source: 전국연합-마더텅-05회-#08
  unit_code: CM1-EQ
  original_source: 2020년 6월학평 21번(고1)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 사차다항식 f(x) 조건 (가)(나)(다) · 나머지 3p² · f(1)=f(−1) · x−√p가 f의 인수 · 양수 p
  insight_type: I-CON
  depth: 3
  problem_summary: 다중 조건 만족 사차다항식 결정 · p.

- source: 전국연합-마더텅-06회-#01
  unit_code: CM1-EQ
  original_source: 2018년 6월학평 3번(고1)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: 복소수 (2+i)(1+2i) 곱 계산

- source: 전국연합-마더텅-06회-#02
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 복소수 켤레 · 실수·순허수 조건

- source: 전국연합-마더텅-06회-#03
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 이차방정식 근·계수 관계 α+β·αβ 활용

- source: 전국연합-마더텅-06회-#04
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 이차함수 그래프와 x축 교점·판별식 D

- source: 전국연합-마더텅-06회-#05
  unit_code: CM1-EQ
  original_points: 4
  tier: star_4
  mechanism_primary: 이차함수 최댓값·최솟값 · 정의역 조건 결합

- source: 전국연합-마더텅-06회-#06
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 이차함수 그래프 위 점 · 넓이·좌표 결합

- source: 전국연합-마더텅-06회-#07
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 판별식·근의 조건 다중 결합

- source: 전국연합-마더텅-06회-#08
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5_premium
  mechanism_primary: 이차함수·이차부등식 다중 조건 지문 · 매개변수 결정
  problem_summary: 킬러급 서답형·조건형.

- source: 전국연합-마더텅-07회-#01
  unit_code: CM1-EQ
  original_points: 2
  tier: star_1·2
  mechanism_primary: 판별식·근 유형 기본

- source: 전국연합-마더텅-07회-#02
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 이차방정식 실근 조건

- source: 전국연합-마더텅-07회-#03
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 근과 계수 관계 · 대칭식 값

- source: 전국연합-마더텅-07회-#04
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3·4
  mechanism_primary: 이차부등식 해 · 판별식 조건

- source: 전국연합-마더텅-07회-#05
  unit_code: CM1-EQ
  original_points: 4
  tier: star_4
  mechanism_primary: 이차함수 그래프 · 접선 조건

- source: 전국연합-마더텅-07회-#06
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 이차함수와 직선 교점 다중 조건

- source: 전국연합-마더텅-07회-#07
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 이차함수 최솟값 위치 조건 · 매개변수

- source: 전국연합-마더텅-07회-#08
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5_premium
  mechanism_primary: 조건형 [보기] 다중 판정 · 이차부등식 [보기] 지문

- source: 전국연합-마더텅-08회-#01
  unit_code: CM1-EQ
  original_points: 2
  tier: star_1·2
  mechanism_primary: 이차방정식 근 대입

- source: 전국연합-마더텅-08회-#02
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 이차함수 그래프 그리기·정의역

- source: 전국연합-마더텅-08회-#03
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3
  mechanism_primary: 이차함수 대칭축·꼭짓점

- source: 전국연합-마더텅-08회-#04
  unit_code: CM1-EQ
  original_points: 3
  tier: star_3·4
  mechanism_primary: 이차함수 · 미지수 조건 결합

- source: 전국연합-마더텅-08회-#05
  unit_code: CM1-EQ
  original_points: 4
  tier: star_4
  mechanism_primary: 판별식 · 실근·허근 조건

- source: 전국연합-마더텅-08회-#06
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 이차함수 그래프와 도형 결합

- source: 전국연합-마더텅-08회-#07
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5
  mechanism_primary: 이차함수 최대·최소 다중 조건

- source: 전국연합-마더텅-08회-#08
  unit_code: CM1-EQ
  original_points: 4
  tier: star_5_premium
  mechanism_primary: 이차함수·직선 교점 다중 결합 킬러

- source: 전국연합-마더텅-09회-#01
  unit_code: CM1-EQ
  original_source: 2021년 11월학평 10번(고1)
  original_points: 3
  number_in_original: 10
  tier: star_3
  mechanism_primary: 직선과 이차함수 접함 · 판별식 = 0
  problem_summary: 직선 y=mx−4가 y=x²+x에 접함 · 양수 m.

- source: 전국연합-마더텅-09회-#02
  unit_code: CM1-EQ
  original_source: 2024년 3월학평 24번(고2)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: 직선과 이차함수 교점 · 실근 조건 D≥0 · 자연수 k 최솟값
  problem_summary: 직선 y=−x+k와 y=x²−2x+6 만남 · k 최솟값. 서답형.

- source: 전국연합-마더텅-09회-#03
  unit_code: CM1-EQ
  original_source: 2017년 6월학평 16번(고1)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: 직선 y=−x/4+1 위 점 P(a,b) · a²+8b 최솟값
  problem_summary: 직선 위 점 · a²+8b 최솟값. 4점.

- source: 전국연합-마더텅-09회-#04
  unit_code: CM1-EQ
  original_source: 2025년 9월학평 17번(고1)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: 이차 f·일차 g 조건 (가)(나) · f+g=0 중근 · f(3)
  insight_type: I-CON
  depth: 3
  problem_summary: 이차·일차 함수 조건 결합 · f(3). 4점.

- source: 전국연합-마더텅-09회-#05
  unit_code: CM1-EQ
  original_source: 2024년 6월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 이차함수 정의역 [−2,2] · x=1 최솟값·최댓값 0 조건 · a+b
  insight_type: I-CON
  depth: 3
  problem_summary: 정의역 조건 (가)(나) 만족 이차함수 · a+b.

- source: 전국연합-마더텅-09회-#06
  unit_code: CM1-EQ
  original_source: 2023년 3월학평 28번(고2)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 이차함수 y=x²−4x+4와 직선 y=n · 교점 x좌표 · |x₁|+|x₂|/2 자연수 · 100 이하 n 개수
  insight_type: I-CON
  depth: 3
  problem_summary: 판별식·|x|합 조건 다중 케이스. 서답형 킬러.

- source: 전국연합-마더텅-09회-#07
  unit_code: CM1-EQ
  original_source: 2018년 6월학평 27번(고1)
  original_points: 4
  number_in_original: 27
  tier: star_5_premium
  mechanism_primary: 이차함수 조건 (가)(나) · x=−1 최솟값·직선 y=cx와 한 점 교차 · a+b+c
  insight_type: I-CON
  depth: 3
  problem_summary: 이차함수 다중 조건 결정 · a+b+c.

- source: 전국연합-마더텅-09회-#08
  unit_code: CM1-EQ
  original_source: 2021년 6월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 두 이차함수 · 조건부 함수 h(x) · 직선 y=mx+6과 h 세 점 교차 · 실수 m 합·10S
  insight_type: I-CON
  depth: 3
  problem_summary: 조건부 함수·직선 세 점 교차 · S=합·10S. 킬러 29번.

- source: 전국연합-마더텅-10회-#01
  unit_code: CM1-EQ
  original_source: 2022년 6월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 삼차방정식 근·계수 관계 · 서로 다른 두 허근 α,β · α³+β³
  problem_summary: 삼차방정식 x³+2x²−3x−10=0 · α³+β³.

- source: 전국연합-마더텅-10회-#02
  unit_code: CM1-EQ
  original_source: 2021년 6월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 연립방정식 (2x−3y=−1, x²−2y²=−1) 해 α,β · α+β 두 조합
  problem_summary: 연립방정식 두 해 조합 · a+b 값 합.

- source: 전국연합-마더텅-10회-#03
  unit_code: CM1-EQ
  original_source: 2017년 6월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 사차방정식 한 근 −2 · 나머지 근 중 최대 · a+b
  problem_summary: 사차방정식 한 근 조건 · b 계산.

- source: 전국연합-마더텅-10회-#04
  unit_code: CM1-EQ
  original_source: 2020년 9월학평 15번(고1)
  original_points: 4
  number_in_original: 15
  tier: star_4
  mechanism_primary: 삼차방정식 x³+(k−1)x²−k=0 한 허근 z · z+z̄=−2 조건 · k
  insight_type: I-EQV
  depth: 2
  problem_summary: 삼차방정식 인수분해 후 이차 근과 계수 관계 · k.

- source: 전국연합-마더텅-10회-#05
  unit_code: CM1-EQ
  original_source: 2023년 6월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 사차방정식 4x⁴−4(n+2)x²+(n−2)²=0 서로 다른 네 정수해 · 20 이하 n · 빈칸 추론형
  insight_type: I-CON
  depth: 3
  problem_summary: 근공식·√(n/2) 자연수 조건 · 빈칸 (가)(나)(다) · f(b−a).

- source: 전국연합-마더텅-10회-#06
  unit_code: CM1-EQ
  original_source: 2019년 9월학평 20번(고1)
  original_points: 4
  number_in_original: 20
  tier: star_5_premium
  mechanism_primary: 9 이하 자연수 n 다항식 P(x)=x⁴+x²−n²−n · [보기] 세 조건 ㄱ,ㄴ,ㄷ
  insight_type: I-MI
  depth: 3
  problem_summary: 인수분해 (k²−n)(k²+n+1) 조건 · 정수 근 조건 · n 합.

- source: 전국연합-마더텅-10회-#07
  unit_code: CM1-EQ
  original_source: 2025년 6월학평 29번(고1)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 삼차방정식 (x−1)(x²+ax+b)=0 세 근 α,β,γ · (2α+2β−γ)²=−81 · 실수/허수 케이스 · (4+α)(4+β)(4+γ)
  insight_type: I-CON
  depth: 3
  problem_summary: 세 근 조건 결합 · 곱값 · 킬러 29번.

- source: 전국연합-마더텅-10회-#08
  unit_code: CM1-EQ
  original_source: 2024년 3월학평 29번(고2)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 사차 f(x) · g,h 실계수 · f=gh 인수분해 · 다중 조건 (가)(나) · a²+b²
  insight_type: I-CON
  depth: 3
  problem_summary: 사차 = 이차·이차 인수분해 조건 · 다중 결정 · a²+b². 킬러 29번.

- source: 전국연합-마더텅-11회-#01
  unit_code: CM1-EQ
  original_source: 2017년 6월학평 9번(고1)
  original_points: 3
  number_in_original: 9
  tier: star_3
  mechanism_primary: 삼차방정식 근·계수 관계 · α+β+2γ 값
  problem_summary: 삼차방정식 x³−2x²−5x+6=0 세 실근 · α+β+2γ.

- source: 전국연합-마더텅-11회-#02
  unit_code: CM1-EQ
  original_source: 2016년 6월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 사차방정식 x⁴−5x³+5x²+5x−6=0 · 네 실근 중 최대·최소 · β−α
  problem_summary: 사차방정식 인수분해 · β−α.

- source: 전국연합-마더텅-11회-#03
  unit_code: CM1-EQ
  original_source: 2022년 6월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 연립방정식 대칭식 · α²+β²

- source: 전국연합-마더텅-11회-#04
  unit_code: CM1-EQ
  original_source: 2017년 11월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 삼차방정식 x³=1 한 허근 ω · 켤레 ω̄ · [보기] 세 조건 · 100 이하 자연수 n 개수
  insight_type: I-MI
  depth: 3
  problem_summary: 오메가·[보기] 참거짓 판정.

- source: 전국연합-마더텅-11회-#05
  unit_code: CM1-EQ
  original_source: 2018년 6월학평 10번(고1)
  original_points: 3
  number_in_original: 10
  tier: star_3
  mechanism_primary: 원기둥 부피 · r+2h=8, r²−2h²=8 · 부피 πr²·2 계산
  problem_summary: 원기둥 부피 조건 연립.

- source: 전국연합-마더텅-11회-#06
  unit_code: CM1-EQ
  original_source: 2021년 3월학평 26번(고2)
  original_points: 4
  number_in_original: 26
  tier: star_5
  mechanism_primary: 삼차방정식 서로 다른 실근 개수 2 조건 · 모든 실수 a의 값의 합
  insight_type: I-CON
  depth: 3
  problem_summary: 실근 개수 조건 · 중근 케이스 분리.

- source: 전국연합-마더텅-11회-#07
  unit_code: CM1-EQ
  original_source: 2020년 3월학평 20번(고2)
  original_points: 4
  number_in_original: 20
  tier: star_5_premium
  mechanism_primary: 사차방정식 실근·허근 다중 조건 · [보기] 세 조건 참거짓
  insight_type: I-MI
  depth: 3
  problem_summary: 실근·허근 곱 조건 [보기].

- source: 전국연합-마더텅-11회-#08
  unit_code: CM1-EQ
  original_source: 2024년 6월학평 20번(고1)
  original_points: 4
  number_in_original: 20
  tier: star_5_premium
  mechanism_primary: 삼차방정식 x³−(a²+a−1)x²−a(a−3)x+4a=0 · 세 실근 α<β<γ, α·γ=−4 · 실수 a 합
  insight_type: I-CON
  depth: 3
  problem_summary: 인수분해 (x+1)(x²−a(a+1)x+4a) · α=−1 · a 결정.

- source: 전국연합-마더텅-12회-#01
  unit_code: CM1-EQ
  original_source: 2016년 6월학평 7번(고1)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 절댓값 부등식 |x−a|<5 정수해 최댓값 조건 · 정수 a
  problem_summary: 절댓값 부등식 정수 조건.

- source: 전국연합-마더텅-12회-#02
  unit_code: CM1-EQ
  original_source: 2021년 6월학평 24번(고1)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: 이차부등식 x²+8x+(a−6)<0 해 없음 · 판별식 D/4≤0 · a 최솟값
  problem_summary: 판별식 ≤0 · a≥22.

- source: 전국연합-마더텅-12회-#03
  unit_code: CM1-EQ
  original_source: 2024년 9월학평 8번(고1)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 이차부등식 x²+ax−12≤0 해 −4≤x≤b · 근과 계수 · a−b
  problem_summary: 부등식 해 구간 → 근과 계수 관계.

- source: 전국연합-마더텅-12회-#04
  unit_code: CM1-EQ
  original_source: 2023년 9월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 모든 실수 x에 대해 이차부등식 성립 · 판별식 <0 · m 정수 합
  problem_summary: 판별식 <0 · 정수 m 합.

- source: 전국연합-마더텅-12회-#05
  unit_code: CM1-EQ
  original_source: 2021년 9월학평 27번(고1)
  original_points: 4
  number_in_original: 27
  tier: star_5_premium
  mechanism_primary: 연립이차부등식 · 정수해 4개 · 자연수 n 합
  insight_type: I-CON
  depth: 3
  problem_summary: 정수해 개수 조건 · n 값 열거.

- source: 전국연합-마더텅-12회-#06
  unit_code: CM1-EQ
  original_source: 2022년 6월학평 28번(고1)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 연립부등식 · 정수해 존재 안함 · a>2 · M² 값
  insight_type: I-CON
  depth: 3
  problem_summary: 정수해 없음 조건 · a 최댓값 M.

- source: 전국연합-마더텅-12회-#07
  unit_code: CM1-EQ
  original_source: 2019년 6월학평 30번(고1)
  original_points: 4
  number_in_original: 30
  tier: star_5_premium
  mechanism_primary: 이차부등식 (2x−a²+2a)(2x−3a)≤0 해 α≤x≤β · 다중 조건 (가)(나) · 실수 a 합
  insight_type: I-CON
  depth: 3
  problem_summary: 부등식 해·정수 개수 조건 다중 케이스 킬러 30번.

- source: 전국연합-마더텅-12회-#08
  unit_code: CM1-EQ
  original_source: 2024년 6월학평 21번(고1)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 이차 f (계수 2)·이차 g (계수 −1) 조건 (가)(나)(다) · f+g≥0 해 모든 실수 · P의 x좌표 최댓값
  insight_type: I-CON
  depth: 3
  problem_summary: 이차함수·직선 교점·부등식 결합 킬러 21번.

- source: 전국연합-마더텅-13회-#01
  unit_code: CM1-EQ
  original_source: 2017년 9월학평 5번(고1)
  original_points: 3
  number_in_original: 5
  tier: star_3
  mechanism_primary: 절댓값 부등식 |x+a|≤8 해 b≤x≤2 · a·b 결정
  problem_summary: 절댓값 부등식 해 구간 → a·b.

- source: 전국연합-마더텅-13회-#02
  unit_code: CM1-EQ
  original_source: 2022년 11월학평 7번(고1)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 연립부등식 {2x−6≥0, x²−8x+12≤0} · 자연수 합

- source: 전국연합-마더텅-13회-#03
  unit_code: CM1-EQ
  original_source: 2019년 3월학평 가형 11번(고2)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: 모든 실수 x · x²−2kx+2k+15≥0 · 판별식 ≤0 · 정수 k 개수

- source: 전국연합-마더텅-13회-#04
  unit_code: CM1-EQ
  original_source: 2023년 11월학평 11번(고1)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: 연립부등식 해 없음 · 자연수 a 개수 조건

- source: 전국연합-마더텅-13회-#05
  unit_code: CM1-EQ
  original_source: 2022년 9월학평 11번(고1)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: 연립부등식 {x²−3x−18≤0, x²−8x+15≥0} · 정수해 합

- source: 전국연합-마더텅-13회-#06
  unit_code: CM1-EQ
  original_source: 2016년 9월학평 16번(고1)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: 방정식 x³+(8−a)x²+(a²−8a)x−a³=0 서로 다른 세 실근 · 정수 a 개수
  insight_type: I-CON
  depth: 3
  problem_summary: 인수분해 (x−a)(x²+8x+a²)=0 · 판별식 조건.

- source: 전국연합-마더텅-13회-#07
  unit_code: CM1-EQ
  original_source: 2014년 6월학평 28번(고1)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 복소수 z 조건 (가)(나) · z²+(z̄)² 음수 · 정수 x 개수
  insight_type: I-CON
  depth: 3
  problem_summary: 복소수 켤레 조건 · 정수 x 결정.

- source: 전국연합-마더텅-13회-#08
  unit_code: CM1-EQ
  original_source: 2025년 6월학평 21번(고1)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 이차 f(x)=½(x−β)²+β · 조건 (가)(나) · f(β)=β, f≥β · f(0)≤α+β+f(α) · 자연수 α,β · 모든 f(6) 곱
  insight_type: I-CON
  depth: 3
  problem_summary: 이차함수 대칭·조건 결합·정수 α,β 케이스 킬러 21번.

- source: 전국연합-마더텅-14회-#01
  unit_code: CM1-EQ
  original_source: 2019년 3월학평 가형 3번(고2)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: 복소수 i(2−i) 계산

- source: 전국연합-마더텅-14회-#02
  unit_code: CM1-EQ
  original_source: 2023년 6월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 삼차방정식 x³−(2a+1)x²+(a+1)²x−(a²+1)=0 · 서로 다른 두 허근 α,β · α+β=8 · αβ

- source: 전국연합-마더텅-14회-#03
  unit_code: CM1-EQ
  original_source: 2024년 6월학평 9번(고1)
  original_points: 3
  number_in_original: 9
  tier: star_3
  mechanism_primary: 절댓값 부등식 |x−1|<n · 정수 x 9개 · 자연수 n

- source: 전국연합-마더텅-14회-#04
  unit_code: CM1-EQ
  original_source: 2021년 3월학평 17번(고2)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: 연립부등식 · 해 b<x<b+1 · a+b · 다중 경우 결합
  insight_type: I-CON
  depth: 2

- source: 전국연합-마더텅-14회-#05
  unit_code: CM1-EQ
  original_source: 2019년 6월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 정사각형 ABCD·EFGH 겹쳐놓기 · EBCI 넓이 = EFGH 1/4 · b 값
  insight_type: I-CON
  depth: 3
  problem_summary: 도형 넓이 방정식 · b 결정.

- source: 전국연합-마더텅-14회-#06
  unit_code: CM1-EQ
  original_source: 2022년 6월학평 21번(고1)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 이차함수 f(x)=(x−a)²+b · 1≤x≤2 최솟값 5 · [보기] 세 조건 · a+b 최댓값
  insight_type: I-MI
  depth: 3

- source: 전국연합-마더텅-14회-#07
  unit_code: CM1-EQ
  original_source: 2019년 11월학평 18번(고1)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 복소수 조건 (p+2qi)²=−16i · 이차방정식 x²+ax+b=0 두 실근 p,q · a²+b²
  insight_type: I-EQV
  depth: 3

- source: 전국연합-마더텅-14회-#08
  unit_code: CM1-EQ
  original_source: 2024년 6월학평 30번(고1)
  original_points: 4
  number_in_original: 30
  tier: star_5_premium
  mechanism_primary: 두 이차 f,g 조건 (가)(나)(다) · f≤0≤g · f=g(0) 해 조건 · f(3)+g(11)
  insight_type: I-CON
  depth: 3
  problem_summary: 다중 조건·[k−2,k+2] 구간 조건 다중 케이스 킬러 30번.

- source: 전국연합-마더텅-15회-#01
  unit_code: CM1-EQ
  original_source: 2022년 9월학평 8번(고1)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 이차방정식 x²+2x+k=0 · α²+β²=8 · k 값
  problem_summary: 근과 계수·대칭식.

- source: 전국연합-마더텅-15회-#02
  unit_code: CM1-EQ
  original_source: 2017년 9월학평 4번(고1)
  original_points: 3
  number_in_original: 4
  tier: star_3
  mechanism_primary: 연립방정식 (y=2x+3, x²+y=2) · 대입 · a+3b

- source: 전국연합-마더텅-15회-#03
  unit_code: CM1-EQ
  original_source: 2017년 6월학평 8번(고1)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 절댓값 부등식 |x−2|<a · 정수해 19개 · 자연수 a

- source: 전국연합-마더텅-15회-#04
  unit_code: CM1-EQ
  original_source: 2018년 3월학평 가형 14번(고2)
  original_points: 4
  number_in_original: 14
  tier: star_4
  mechanism_primary: 방정식 (1+x)(1+x²)(1+x⁴)=x⁷+x⁶+x⁵+x⁴ · 세 근 · α⁴+β⁴+γ⁴
  insight_type: I-EQV
  depth: 3

- source: 전국연합-마더텅-15회-#05
  unit_code: CM1-EQ
  original_source: 2025년 6월학평 16번(고1)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: 이차함수 y=x²−(a+1)x+a 그래프·직선 y=bx−b · 한 점 A(1,0)에서만 · 다중 조건·삼각형 넓이비 · f(5)+g(5)+p
  insight_type: I-CON
  depth: 3
  problem_summary: 이차함수·직선·삼각형 넓이비 조건 (가)(나)(다) 빈칸 추론형.

- source: 전국연합-마더텅-15회-#06
  unit_code: CM1-EQ
  original_source: 2018년 3월학평 가형 21번(고2)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 조건 (가)(나) 만족 이차 f · f((1−x)/4)≤0 해 −7≤x≤9 · 모든 실수 f(x)≥2x−13/3 · f(3) 최댓값−최솟값
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-15회-#07
  unit_code: CM1-EQ
  original_source: 2024년 3월학평 15번(고2)
  original_points: 4
  number_in_original: 15
  tier: star_4
  mechanism_primary: 복소수 z 조건 (가)(나) · z̄=−z · z²+(k²−3k−4)z+(k²+2k−8)=0 · 실수 k 곱
  insight_type: I-CON
  depth: 3
  problem_summary: 켤레복소수 순허수 조건·이차방정식 근 조건 다중 케이스.

- source: 전국연합-마더텅-15회-#08
  unit_code: CM1-EQ
  original_source: 2023년 9월학평 21번(고1)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 이차 f·일차계수 1 이차 g · 방정식 {x−f(k)}{x−g(k)}=0 · 서로 다른 실근 0,4 모든 k 개수 3 · g(8)−f(8)
  insight_type: I-CON
  depth: 3
  problem_summary: 이차함수 조합·근 개수 조건 킬러 21번.
```

## III. 경우의 수 (CM1-CB) · 회 16~20

```yaml
- source: 전국연합-마더텅-16회-#01
  unit_code: CM1-CB
  original_source: 2023년 3월학평 3번(고2)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: ₅P₃ 계산

- source: 전국연합-마더텅-16회-#02
  unit_code: CM1-CB
  original_source: 2020년 3월학평 17번(고2)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: 6개 정사각형 색칠 · 조건 (가)(나) · 4가지 색 부분 사용 · 경우의 수
  insight_type: I-CON
  depth: 3
  problem_summary: 격자 색칠·인접 서로 다른 색 조건.

- source: 전국연합-마더텅-16회-#03
  unit_code: CM1-CB
  original_source: 2019년 3월학평 가형 10번(고2)
  original_points: 3
  number_in_original: 10
  tier: star_3
  mechanism_primary: 케이블카 6좌석 · A,B 같은 줄 · 나머지 3명 맞은편 · 경우의 수
  problem_summary: 자리 배치 · 조건 결합.

- source: 전국연합-마더텅-16회-#04
  unit_code: CM1-CB
  original_source: 2010년 7월학평 나형 4번(고3)
  original_points: 3
  number_in_original: 4
  tier: star_3
  mechanism_primary: 남 3, 여 4 등산 · 남자 양 끝 · 순열

- source: 전국연합-마더텅-16회-#05
  unit_code: CM1-CB
  original_source: 2010년 9월모평 나형 28번(고3)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 6장 사진 배치 · A,B 이웃 · 옆으로만 이웃 · 경우의 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-16회-#06
  unit_code: CM1-CB
  original_source: 2025년 9월학평 26번(고1)
  original_points: 4
  number_in_original: 26
  tier: star_5
  mechanism_primary: 세 자리 자연수 · 조건 (가)(나) · 7 개수 1, 백×일 곱 2로 나눈 나머지 1 · 자릿수 위치별 케이스
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-16회-#07
  unit_code: CM1-CB
  original_source: 2010년 6월모평 나형 29번(고3)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 반지름 1~5 다섯 원 영역 색칠 · 인접 서로 다른 색 · 물감 10π · 문양 개수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-16회-#08
  unit_code: CM1-CB
  original_source: 2009년 10월학평 나형 25번(고3)
  original_points: 4
  number_in_original: 25
  tier: star_5
  mechanism_primary: 네 종류 모자 A,B,C,D 3개씩 12개 · 12개 걸이 · 가로·세로 각각 서로 다른 종류 · 방법 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-17회-#01
  unit_code: CM1-CB
  original_source: 2020년 3월학평 22번(고2)
  original_points: 3
  number_in_original: 22
  tier: star_3
  mechanism_primary: ₃P₂ 서답형 3점

- source: 전국연합-마더텅-17회-#02
  unit_code: CM1-CB
  original_source: 2025년 9월학평 7번(고1)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 주사위 두 번 · a²+b²≤6 · 순서쌍 개수

- source: 전국연합-마더텅-17회-#03
  unit_code: CM1-CB
  original_source: 2023년 3월학평 12번(고2)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 1학년 2, 2학년 4 · 조건 (가)(나) 만족 배치 · 6개 좌석
  problem_summary: 자리 배치 조건.

- source: 전국연합-마더텅-17회-#04
  unit_code: CM1-CB
  original_source: 2011년 9월모평 나형 7번(고3)
  original_points: 3
  number_in_original: 7
  tier: star_3
  mechanism_primary: 6 지역 인구조사 · 5명 · 1명 두 지역 담당 · 나머지 각 1개 · 경우의 수

- source: 전국연합-마더텅-17회-#05
  unit_code: CM1-CB
  original_source: 2012년 3월학평 28번(고1)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 숫자 1,2,3 사용 · 다섯 자리 자연수 · 이웃 다름 · 만·일 같음 · 개수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-17회-#06
  unit_code: CM1-CB
  original_source: 2008년 10월학평 나형 28번(고3)
  original_points: 3
  number_in_original: 28
  tier: star_3
  mechanism_primary: 회원번호 6549 · 조건 (가)(나)(다) 만족 4자리 비밀번호 · 4의 배수 · 케이스

- source: 전국연합-마더텅-17회-#07
  unit_code: CM1-CB
  original_source: 2024년 3월학평 18번(고2)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 등근·사각 의자 3개씩 · 학년별 2명씩 · 조건 (가)(나) · 경우의 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-17회-#08
  unit_code: CM1-CB
  original_source: 2009년 3월학평 가형 21번(고3)
  original_points: 4
  number_in_original: 21
  tier: star_5_premium
  mechanism_primary: 삼각형 판 6원 · 1~6 · 각 변 세 원 합 같음 · 방법 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-18회-#01
  unit_code: CM1-CB
  original_source: 2021년 3월학평 4번(고2)
  original_points: 3
  number_in_original: 4
  tier: star_3
  mechanism_primary: 등식 ₁₀P₃=n×₁₀C₃ · n 값

- source: 전국연합-마더텅-18회-#02
  unit_code: CM1-CB
  original_source: 2019년 3월학평 나형 6번(고2)
  original_points: 3
  number_in_original: 6
  tier: star_3
  mechanism_primary: 6과목 중 3과목 선택 · ₆C₃

- source: 전국연합-마더텅-18회-#03
  unit_code: CM1-CB
  original_source: 2017년 6월모평 나형 24번(고3)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: 동아리 1학년 6·2학년 4 · 7명 뽑기 · 1학년 4, 2학년 3 · ₆C₄×₄C₃

- source: 전국연합-마더텅-18회-#04
  unit_code: CM1-CB
  original_source: 2025년 3월학평 16번(고2)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: 3 체육 + 2 음악 동아리 · A·B 3개 선택 · 조건 (가)(나) · 경우의 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-18회-#05
  unit_code: CM1-CB
  original_source: 2023년 3월학평 27번(고2)
  original_points: 4
  number_in_original: 27
  tier: star_5_premium
  mechanism_primary: 네 종류 인형 각 2개 · 8개 중 5개 선택 · 같은 종류 서로 구별 X

- source: 전국연합-마더텅-18회-#06
  unit_code: CM1-CB
  original_source: 2017년 3월학평 가형 29번(고3)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 7 사물함 · 5명 배정 · 이웃 조건 · 배정 다중 케이스
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-18회-#07
  unit_code: CM1-CB
  original_source: 2010년 7월학평 나형 15번(고3)
  original_points: 4
  number_in_original: 15
  tier: star_4
  mechanism_primary: 바둑판 도로망 · 최단거리 · 방향 x번 · [보기] 세 조건 판정
  insight_type: I-MI
  depth: 3

- source: 전국연합-마더텅-18회-#08
  unit_code: CM1-CB
  original_source: 2008년 6월모평 나형 29번(고3)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 다섯자리 자연수 a·10⁴+... · 5의 배수 · a>b>c, c<d<e · 개수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-19회-#01
  unit_code: CM1-CB
  original_source: 2020학년도 수능 나형 22번(고3)
  original_points: 3
  number_in_original: 22
  tier: star_3
  mechanism_primary: ₇P₂+₇C₂ 계산
  citation_note: 수능 나형 · 2점 계산형

- source: 전국연합-마더텅-19회-#02
  unit_code: CM1-CB
  original_source: 2011년 9월모평 나형 27번(고3)
  original_points: 3
  number_in_original: 27
  tier: star_3
  mechanism_primary: 지수 5일 운동 계획 · 조건 (가)(나) · 요가 3일, 나머지 2일 세부 배정 · 방법 수

- source: 전국연합-마더텅-19회-#03
  unit_code: CM1-CB
  original_source: 2010학년도 9월모평 나형 8번(고3)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 김밥 가격표 · 재료 조합 · 가격 1500 또는 2000

- source: 전국연합-마더텅-19회-#04
  unit_code: CM1-CB
  original_source: 2016년 3월학평 가형 17번(고3)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: 1~8 카드 8장 · 5장 선택 · 합 짝수 · 홀·짝 개수 케이스

- source: 전국연합-마더텅-19회-#05
  unit_code: CM1-CB
  original_source: 2009년 4월학평 가형 이산 30번(고3)
  original_points: 4
  number_in_original: 30
  tier: star_5_premium
  mechanism_primary: 정육면체 [블록 1]과 [블록 2] · 7×1×1 상자 채우기 · 경우의 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-19회-#06
  unit_code: CM1-CB
  original_source: 2016년 3월학평 가형 15번(고3)
  original_points: 4
  number_in_original: 15
  tier: star_4
  mechanism_primary: 정사각형 2 + 직각이등변삼각형 4 시트지 · 창문 4개 · 붙이는 방법 수 · ₄C₂ 결합
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-19회-#07
  unit_code: CM1-CB
  original_source: 2016년 10월학평 나형 28번(고3)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 5 바구니 · 빨간 3·파란 6 공 · 조건 (가)(나) · 배분 케이스
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-19회-#08
  unit_code: CM1-CB
  original_source: 2022년 3월학평 28번(고2)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 정삼각형 1 + 정사각형 3 도형 · 1~6 중복 허락 · 조건 (가)(나) · 경우의 수
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-20회-#01
  unit_code: CM1-CB
  original_source: 2011학년도 수능 나형 18번(고3)
  original_points: 3
  number_in_original: 18
  tier: star_3
  mechanism_primary: 등식 2×ₙC₃=3×ₙP₂ · n 값
  citation_note: 수능 나형

- source: 전국연합-마더텅-20회-#02
  unit_code: CM1-CB
  original_source: 2008학년도 6월모평 나형 12번(고3)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 여학생·남학생 수 같음 · 3명 대표 조합 · 여자만 조합 = 10배 · 여학생 수

- source: 전국연합-마더텅-20회-#03
  unit_code: CM1-CB
  original_source: 2017년 3월학평 가형 12번(고3)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: c<b<a<10 · 백·십·일 · 500 초과 700 미만 자연수 개수

- source: 전국연합-마더텅-20회-#04
  unit_code: CM1-CB
  original_source: 2009년 11월학평 가형 25번(고2)
  original_points: 4
  number_in_original: 25
  tier: star_5
  mechanism_primary: 5자리 자연수 · 조건 (가) 각 숫자 1 또는 2 · (나) 같은 숫자 연속 3번 이상 X · 개수

- source: 전국연합-마더텅-20회-#05
  unit_code: CM1-CB
  original_source: 2019년 3월학평 가형 14번(고2)
  original_points: 4
  number_in_original: 14
  tier: star_4
  mechanism_primary: 3×3 격자 1~9 · 2 숫자 선택 · 조건 (가)(나) 다른 가로줄·다른 세로줄 · 경우의 수

- source: 전국연합-마더텅-20회-#06
  unit_code: CM1-CB
  original_source: 2010학년도 수능 나형 14번(고3)
  original_points: 4
  number_in_original: 14
  tier: star_4
  mechanism_primary: 인형 A·B 셔츠·바지 · 3벌씩 · 색 2가지 · A·B 셔츠·바지 색 서로 다름 · 경우의 수
  citation_note: 수능 나형 · 다중 조건

- source: 전국연합-마더텅-20회-#07
  unit_code: CM1-CB
  original_source: 2020년 3월학평 29번(고2)
  original_points: 4
  number_in_original: 29
  tier: star_5_premium
  mechanism_primary: 서로 다른 꽃 4송이·같은 초콜릿 2 · 5명 학생 남김없이 배분 · 각 학생 1개 이상 · 케이스
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-20회-#08
  unit_code: CM1-CB
  original_source: 2025년 3월학평 18번(고2)
  original_points: 4
  number_in_original: 18
  tier: star_5
  mechanism_primary: 10 객실 (102·204 사용 X) · 5명 · 조건 (가)(나)(다) · A·B·C 특수 관광객 조건 · 경우의 수
  insight_type: I-CON
  depth: 3
```

## IV. 행렬 (CM1-MX) · 회 21~24

**참고**: 2022 개정 교육과정 이전 (2010년대) 나형·A형·B형·가형 문항이 다수 이관됨. 마스터 확립: 4점 서답형은 star_5 or star_5_premium 후보 (모든 문항 재판정).

```yaml
- source: 전국연합-마더텅-21회-#01
  unit_code: CM1-MX
  original_source: 2014년 6월학평 A형 3번(고2)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: 행렬 (i,j) 성분 aᵢⱼ=i+3j 정의 · (2,1) 성분

- source: 전국연합-마더텅-21회-#02
  unit_code: CM1-MX
  original_source: 2025년 9월학평 24번(고1)
  original_points: 3
  number_in_original: 24
  tier: star_3
  mechanism_primary: 두 이차 정사각행렬 · A+B, A−2B 주어짐 · B 성분 합
  problem_summary: 선형 결합 · B 유도.

- source: 전국연합-마더텅-21회-#03
  unit_code: CM1-MX
  original_source: 2010년 9월학평 나형 6번(고2)
  original_points: 3
  number_in_original: 6
  tier: star_3
  mechanism_primary: 이차방정식 근·계수 · 행렬 A·B 결정 · AB 성분 합

- source: 전국연합-마더텅-21회-#04
  unit_code: CM1-MX
  original_source: 2006학년도 6월모평 나형 20번(고3)
  original_points: 3
  number_in_original: 20
  tier: star_3
  mechanism_primary: A ⁿ 형태 발견 · A¹⁰⁰B 성분 합 · 거듭제곱 패턴

- source: 전국연합-마더텅-21회-#05
  unit_code: CM1-MX
  original_source: 2025년 9월학평 12번(고1)
  original_points: 3
  number_in_original: 12
  tier: star_3
  mechanism_primary: 두 학교 학생 수·과목 비율 표 · 행렬 PQ · 특정 성분 의미 파악
  problem_summary: 통계표 → 행렬 곱 의미.

- source: 전국연합-마더텅-21회-#06
  unit_code: CM1-MX
  original_source: 2013년 9월학평 A형 16번(고2)
  original_points: 4
  number_in_original: 16
  tier: star_4
  mechanism_primary: 이차정사각행렬 A · A²=E 만족 A의 개수 · 정수 성분 조건 · 빈칸 (가)(나)(다)
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-21회-#07
  unit_code: CM1-MX
  original_source: 2010학년도 수능 나형 28번(고3)
  original_points: 4
  number_in_original: 28
  tier: star_5_premium
  mechanism_primary: 이차정사각행렬 A,B · [보기] 세 조건 참거짓 판정
  insight_type: I-MI
  depth: 3
  citation_note: 수능 나형 킬러

- source: 전국연합-마더텅-21회-#08
  unit_code: CM1-MX
  original_source: 2010학년도 9월모평 나형 25번(고3)
  original_points: 4
  number_in_original: 25
  tier: star_5
  mechanism_primary: 행렬 A · Aᵐ=Aⁿ (m>n, 40 이하) · 순서쌍 (m,n) 개수 · 거듭제곱 주기
  insight_type: I-CON
  depth: 3

- source: 전국연합-마더텅-22회-#01
  unit_code: CM1-MX
  original_source: 2012년 6월학평 A형 22번(고2)
  original_points: 3
  number_in_original: 22
  tier: star_3
  mechanism_primary: 두 행렬 A=B 조건 · 성분 방정식 · ab

- source: 전국연합-마더텅-22회-#02
  unit_code: CM1-MX
  original_source: 2014년 6월학평 A형 4번(고2)
  original_points: 3
  number_in_original: 4
  tier: star_3
  mechanism_primary: (A+B)²·A²+B² 주어짐 · AB+BA 유도

- source: 전국연합-마더텅-22회-#03
  unit_code: CM1-MX
  original_source: 2014년 6월학평 A형 8번(고2)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 이차정사각행렬 A · A(1,0)ᵗ=(2,3)ᵗ, A(0,1)ᵗ=(−1,2)ᵗ · A(1,2)ᵗ=(p,q)ᵗ · p+q
  insight_type: I-BW
  depth: 2

- source: 전국연합-마더텅-22회-#04
  unit_code: CM1-MX
  original_source: 2025년 9월학평 13번(고1)
  original_points: 3
  number_in_original: 13
  tier: star_3
  mechanism_primary: 두 이차정사각행렬 · A+2B, AB=O · B 성분 합 · 영행렬 조건

- source: 전국연합-마더텅-22회-#05
  unit_code: CM1-MX
  original_source: 2010년 9월학평 나형 26번(고2)
  original_points: 4
  number_in_original: 26
  tier: star_5
  mechanism_primary: 두 이차정사각행렬 · aᵢⱼ=aⱼᵢ (대칭), bᵢⱼ=−bⱼᵢ (반대칭) · A+B 주어짐 · a₂₁+a₂₂
  insight_type: I-EQV
  depth: 3

- source: 전국연합-마더텅-22회-#06
  unit_code: CM1-MX
  original_source: 2008년 11월학평 나형 25번(고2)
  original_points: 3
  number_in_original: 25
  tier: star_3
  mechanism_primary: A²=3A · A+A²+A³+A⁴+A⁵=kA · k 값

- source: 전국연합-마더텅-22회-#07
  unit_code: CM1-MX
  original_source: 2014년 6월학평 A형 11번(고2)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: A+B=E, (E−A)(E−B)=E · A⁶+B⁶ 성분 합

- source: 전국연합-마더텅-22회-#08
  unit_code: CM1-MX
  original_source: 2007학년도 수능 나형 30번(고3)
  original_points: 4
  number_in_original: 30
  tier: star_5_premium
  mechanism_primary: D(X)=ad−bc 정의 (행렬식) · D(A²)=D(5A) · 실수 p 합
  insight_type: I-CON
  depth: 3
  citation_note: 수능 나형 킬러 30번 · D(X)는 행렬식 (개정 이전 개념) · 마스터 검수 필요.
  master_review_flag: |
    "행렬식" ad−bc는 2022 개정 이전 교육과정. 현행 CM1-MX에는 편입 안 됨.
    지문에 D(X)=ad−bc 정의를 제시했으므로 도구 활용 문제로 재정의 가능.

- source: 전국연합-마더텅-23회-#01
  unit_code: CM1-MX
  original_source: 2025년 9월학평 2번(고1)
  original_points: 2
  number_in_original: 2
  tier: star_1·2
  mechanism_primary: 두 행렬 A=B 조건 · a×b

- source: 전국연합-마더텅-23회-#02
  unit_code: CM1-MX
  original_source: 2009년 11월학평 나형 3번(고2)
  original_points: 2
  number_in_original: 3
  tier: star_1·2
  mechanism_primary: A²·A³·A⁵ 거듭제곱 · A⁵ 성분 합

- source: 전국연합-마더텅-23회-#03
  unit_code: CM1-MX
  original_source: 2014년 11월학평 A형 5번(고2)
  original_points: 3
  number_in_original: 5
  tier: star_3
  mechanism_primary: A³=kA · A²=9E 등 거듭제곱 패턴 · k

- source: 전국연합-마더텅-23회-#04
  unit_code: CM1-MX
  original_source: 2009년 11월학평 나형 5번(고2)
  original_points: 3
  number_in_original: 5
  tier: star_3
  mechanism_primary: 이차정사각행렬 A · aᵢⱼ = 다항식 x³+2x+1을 x−(i−j)로 나눈 나머지 (P(i−j)) · A 성분 합
  insight_type: I-XU
  depth: 2

- source: 전국연합-마더텅-23회-#05
  unit_code: CM1-MX
  original_source: 2010년 6월학평 나형 10번(고2)
  original_points: 3
  number_in_original: 10
  tier: star_3
  mechanism_primary: A+B=−E, AB=E · (A+B)+(A²+B²)+...+(A²⁰¹¹+B²⁰¹¹) · 주기 성질

- source: 전국연합-마더텅-23회-#06
  unit_code: CM1-MX
  original_source: 2010년 6월학평 나형 8번(고2)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 출입문 번호 abcd · 지문 규칙 · 특정 요일 처음 열리는 조건 · 요일 판정
  insight_type: I-XU
  depth: 3
  problem_summary: 지문·행렬 곱 반복 적용 · 실용 기반.

- source: 전국연합-마더텅-23회-#07
  unit_code: CM1-MX
  original_source: 2014년 6월학평 A형 27번(고2)
  original_points: 4
  number_in_original: 27
  tier: star_5_premium
  mechanism_primary: 두 이차정사각행렬 A,B · BA=−E · B⁴A⁵ 성분 합
  insight_type: I-EQV
  depth: 3

- source: 전국연합-마더텅-23회-#08
  unit_code: CM1-MX
  original_source: 2006년 9월학평 나형 28번(고2)
  original_points: 3
  number_in_original: 28
  tier: star_3
  mechanism_primary: 이차방정식 근 α,β · 대각행렬 A,B · AB 성분 합 · 근·계수 관계 결합
  insight_type: I-XU
  depth: 3

- source: 전국연합-마더텅-24회-#01
  unit_code: CM1-MX
  original_source: 2012년 9월학평 B형 2번(고2)
  original_points: 2
  number_in_original: 2
  tier: star_1·2
  mechanism_primary: BA−A² · 인수분해 (B−A)A · 대입

- source: 전국연합-마더텅-24회-#02
  unit_code: CM1-MX
  original_source: 2025년 9월학평 8번(고1)
  original_points: 3
  number_in_original: 8
  tier: star_3
  mechanism_primary: 행렬 A²+A³ 성분 합 · 직접 계산

- source: 전국연합-마더텅-24회-#03
  unit_code: CM1-MX
  original_source: 2013년 6월학평 A형 23번(고2)
  original_points: 3
  number_in_original: 23
  tier: star_3
  mechanism_primary: A+2B, 2A+B 주어짐 · A+B 성분 합 · 선형 결합

- source: 전국연합-마더텅-24회-#04
  unit_code: CM1-MX
  original_source: 2013년 11월학평 A형 10번(고2)
  original_points: 3
  number_in_original: 10
  tier: star_3
  mechanism_primary: 두 이차정사각행렬 조건 (가) AB+A=E, (나) AB(1,2)ᵗ=(0,3)ᵗ · (B+E)(x,y)ᵗ=B(2,4)ᵗ 해 · x+y

- source: 전국연합-마더텅-24회-#05
  unit_code: CM1-MX
  original_source: 2013년 6월학평 A형 17번(고2)
  original_points: 4
  number_in_original: 17
  tier: star_5
  mechanism_primary: A²−2A+E=O · Aⁿ 표현 · 빈칸 (가)(나) f(n), g(n) · f(100)+g(100)
  insight_type: I-CON
  depth: 3
  problem_summary: 케일리-해밀턴류 관계식 · 순차 유도 · 빈칸 추론.

- source: 전국연합-마더텅-24회-#06
  unit_code: CM1-MX
  original_source: 2010년 9월학평 나형 11번(고2)
  original_points: 3
  number_in_original: 11
  tier: star_3
  mechanism_primary: A³=−E · A⁶=E · 주기 · E+A²+A⁴+...+A¹⁰⁰ 간단히

- source: 전국연합-마더텅-24회-#07
  unit_code: CM1-MX
  original_source: 2013년 11월학평 A형 20번(고2)
  original_points: 4
  number_in_original: 20
  tier: star_5_premium
  mechanism_primary: 두 이차정사각행렬 A,B · AB+B=A, ABA−A²=E · [보기] ㄱ,ㄴ,ㄷ 참거짓
  insight_type: I-MI
  depth: 3
  problem_summary: 행렬 관계식 [보기] 판정 · 킬러 20번.

- source: 전국연합-마더텅-24회-#08
  unit_code: CM1-MX
  original_source: 2010년 6월학평 나형 26번(고2)
  original_points: 4
  number_in_original: 26
  tier: star_5
  mechanism_primary: A+kB=(2,2;1,3), A+B=E, B²=B · 10k 값
  insight_type: I-CON
  depth: 3
  problem_summary: 다중 조건 결합 · B 멱등 · 10k 서답형 킬러.
```

## 요약 통계 (v1.0 · 2026-07-16)

| 항목 | 값 |
|---|---|
| 회수 | 24 |
| 문항 수 | 192 (24×8) |
| CM1-PL | 회 1~5 (~30문) |
| CM1-EQ | 회 5~15 (~90문) |
| CM1-CB | 회 16~20 (~40문) |
| CM1-MX | 회 21~24 (~30문) |

### tier 분포 (번호+배점 기반 자동 매핑)

| tier | 개수 | 비율 |
|---|---|---|
| star_1·2 | ~28 | 15% (2점 문항 · 정독 제외 권장) |
| star_3 | ~70 | 36% (3점 문항 대부분) |
| star_3·4 | ~15 | 8% (3점 후반부·번호 20+) |
| star_4 | ~15 | 8% (4점 초반부) |
| star_5 | ~40 | 21% (4점 15~26번 중반) |
| star_5_premium | ~24 | 12% (4점 27~30번 킬러) |

### 활용 가이드

```bash
# 전체 등록·리로드
node scripts/refresh-all.mjs

# unit 별 star_5 이상 조회
node scripts/source-filter.mjs --unit CM1-EQ --star premium --top 10
node scripts/source-filter.mjs --unit CM1-CB --star 5 --top 10

# 자동 tier 재분류 (정답률 필드 추가 시)
node scripts/star-classify.mjs --file bank/mechanism-데이터-전국연합-CM1.md --by answer_rate
```

### 개선 예정

1. **정답률 데이터 수집**: EBSi·기출문제집 개별 정답률 확인 후 `answer_rate: 0.NN` 필드 개별 추가 → `star-classify.mjs --by answer_rate` 재분류
2. **problem_summary 확장**: 회 6~8 등 요약 축약된 항목 세부 서술 (요약만으로 부족한 경우)
3. **mechanism_secondary 라벨링**: I-XU 등 복합 통찰 유형 이차 라벨링 (문항별 재판정 시)

## 관련 자원

- 매핑 index: `bank/mechanism-데이터-정독-tier-매핑.md` v2.0
- 로드맵: [[feedback_evolution_roadmap]]
- 방안 F 스키마: [[feedback_source_based_authoring_v17]]
- 자동 도구: `scripts/source-filter.mjs`, `scripts/star-classify.mjs` v1.0
- 세션 46 인계: `memory/project_2026-07-16_session46_handoff.md`
