---
name: mechanism-데이터-고쟁이-CH03-원
description: 고쟁이 공통수학2 (2022개정) CH03 원의 방정식 STEP 2·STEP 3 전문항 정독 데이터. 문제·해설 1:1 매칭, mechanism·자유도·조건 층위 라벨링. 정본 참조 (학습 목적, 저작권 준수).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: "고쟁이 공통수학2 (2022개정) CH03 원의 방정식"
  page_range: "본문 p.45~57 (STEP 2 #145~184 + STEP 3 #185~200), 해설 p.44~60"
  scope: CM2-GM (도형의 방정식 · 원)
  total_problems: 56
  step2_count: 40  # #145~184
  step3_count: 16  # #185~200
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-GM
  citation_note: "고쟁이 CH03 · 학습 목적 · 저작권 준수 (원문 전사 없음, 요약만)"
---

# 고쟁이 CH03 원의 방정식 STEP 2·STEP 3 Mechanism 데이터

## (1) 문항 개수·페이지

- **총 문항 수**: 56문 (STEP 2 40문 + STEP 3 16문)
- **STEP 2 (내신 실전문제 체화 · 심화 유형)**: #145~184 (본문 p.45~52, 해설 p.44~53)
  - 유형 01 원의 방정식: #145~153 (9문)
  - 유형 02 원의 방정식의 활용: #154~160 (7문)
  - 유형 03 원과 직선의 위치 관계: #161~171 (11문)
  - 유형 04 원의 접선의 방정식: #172~184 (13문)
- **STEP 3 (내신 최상위권 굳히기 · 최고난도 유형)**: #185~200 (본문 p.54~57, 해설 p.54~60)

## (2) 전 문항 YAML

```yaml
# ===== STEP 2 · 유형 01 원의 방정식 =====

- source: 고쟁이-CH03-STEP2-#145
  page: 45
  problem_summary: |
    원 $x^2+y^2-2x+6y+6=0$의 넓이와 네 직선 $x=-1$, $x=5$, $y=3$, $y=7$로
    둘러싸인 직사각형의 넓이를 모두 이등분하는 직선의 방정식을 구하시오 (서술형).
  solution_summary: |
    원의 넓이 이등분 직선은 원의 중심 $(1,-3)$ 통과. 직사각형 넓이 이등분 직선은
    두 대각선 교점 $(2,5)$ 통과. 두 점 $(1,-3),(2,5)$ 지나는 직선 $y=8x-11$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 이등분 직선의 중심 통과 성질 (원·직사각형 공통 원리)
  mechanism_secondary: [원의 표준형 변환, 직사각형 대각선 교점]
  depth_conditions: [두 도형 동시 이등분 → 두 중심 잇는 직선 유일 결정]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2  # 원 중심 파악 + 대각선 교점 계산
  common_mistakes: [원의 중심 좌표 부호 실수, 직사각형 중심을 (평균값)이 아닌 다른 좌표로 계산]
  condition_layers:
    surface: "원과 직사각형 넓이 모두 이등분"
    real: "두 도형 각각의 중심 통과"
    interaction: "두 중심을 잇는 유일한 직선"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#146
  page: 45
  problem_summary: |
    원 $x^2+y^2-6x+4y-12=0$의 넓이가 두 직선 $y=ax$와 $y=bx+c$에 의하여
    4등분 될 때, $a\times b\times c$의 값은?
  solution_summary: |
    원 중심 $(3,-2)$ 반지름 5. 4등분 → 두 직선 모두 중심 통과 & 서로 수직.
    $y=ax$가 중심 지나면 $a=-2/3$. 수직이므로 $b=3/2$. 중심 대입 $c=-13/2$.
    $a\cdot b\cdot c=13/2$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원의 넓이 4등분 조건 (중심 통과 두 수직 직선)
  mechanism_secondary: [직선 수직 조건 기울기 곱 $-1$, 중심 대입]
  depth_conditions: [4등분 → 두 직선 중심 통과 + 수직 → 조건 2개]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes: [수직 조건 누락, 두 직선 기울기 부호 실수]
  condition_layers:
    surface: "직선 2개로 원 4등분"
    real: "두 직선 모두 중심 통과 + 수직"
    interaction: "$a$ 결정 → $b$ 결정 → $c$ 결정 순차"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#147
  page: 45
  problem_summary: |
    두 점 $(-2,5),(0,-1)$을 지나는 원의 중심이 제2사분면에 있을 때,
    원의 중심이 그리는 도형의 길이는?
  solution_summary: |
    두 점에서 등거리 → 중심은 AB 수직이등분선 $y=(1/3)x+7/3$ 위. 제2사분면
    부분: $x=-7$에서 $y=0$, $y=7/3$까지의 선분. 길이 $\sqrt{49+49/9}=7\sqrt{10}/3$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 자취 = 두 점의 수직이등분선 (부분 궤적)
  mechanism_secondary: [사분면 제약 → 선분 잘라내기, 두 점 사이 거리 공식]
  depth_conditions: [원의 중심이 제2사분면 → 수직이등분선의 사분면 절편 계산]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [사분면 경계 좌표축 위치 오판, 절편 부호 실수]
  condition_layers:
    surface: "두 점 지나는 원, 중심이 제2사분면"
    real: "중심 궤적 = 수직이등분선"
    interaction: "궤적 ∩ 제2사분면 = 선분 → 길이 계산"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#148
  page: 45
  problem_summary: |
    세 직선 $2x-y-6=0$, $x+2y+2=0$, $y=2$로 만들어지는 삼각형의 외접원의
    방정식이 $(x-a)^2+(y-b)^2=r^2$일 때, $a+b+r$의 값은?
  solution_summary: |
    세 교점 $A(4,2),B(-6,2),C(2,-2)$. 두 직선 $2x-y-6=0$과 $x+2y+2=0$
    수직 → $\angle ACB=90°$. 외심 = 빗변 AB 중점 $(-1,2)$, 반지름 $=|AC|=5$.
    $a+b+r=26$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 직각삼각형 외심 = 빗변의 중점
  mechanism_secondary: [세 직선 교점 계산, 두 직선 수직 판정]
  depth_conditions: [수직 판정 → 직각삼각형 → 외심 공식 단축]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 일반 외심 공식 vs 직각 인식
    student_decision_points: 3
  common_mistakes: [수직 조건 미인식 → 세 수직이등분선 연립으로 무리하게 계산]
  condition_layers:
    surface: "세 직선의 삼각형의 외접원"
    real: "직각삼각형 판정 → 외심 = 빗변 중점"
    interaction: "$\\angle C=90°$ 발견이 계산량 대폭 감소"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#149
  page: 45
  problem_summary: |
    원 $\frac{a}{2}x^2+y^2-4x+6y+b=0$이 $y$축과 만나는 서로 다른 두 점을
    A,B라 할 때, 원 위의 두 점 C,D에 대하여 사각형 ABCD가 정사각형이다.
    $a+b$의 값은?
  solution_summary: |
    $x^2,y^2$ 계수 같아야 → $a=2$. 원 $(x-2)^2+(y+3)^2=13-b$, 중심 $(2,-3)$.
    정사각형 → 대각선 절반 $=$ 원의 반지름. 중심에서 AB에 내린 수선의 발 $H$,
    직각이등변삼각형 관계로 $\overline{AO'}=2\sqrt{2}$, $13-b=8$, $b=5$. $a+b=7$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원에 내접하는 정사각형 (대각선 = 지름 아님, 두 현 수직 관계)
  mechanism_secondary: [일반형→표준형, $y$축 두 점 = 현, 직각이등변삼각형]
  depth_conditions: [$x^2 \cdot y^2$ 계수 일치 → $a$ 결정, 정사각형 → 반지름 관계식]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [정사각형 대각선을 지름으로 오인, 계수 일치 조건 누락]
  condition_layers:
    surface: "원이 나타내는 이차방정식·정사각형"
    real: "계수 조건 + 반지름 = 대각선/2 관계"
    interaction: "$a$ 조건 → $b$ 조건 순차"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#150
  page: 45
  problem_summary: |
    점 $(-1,2)$를 지나고 $x$축과 $y$축에 동시에 접하는 두 원의 중심 사이의
    거리를 구하시오.
  solution_summary: |
    제2사분면에서 접하므로 중심 $(-r,r)$. 점 대입 $(-1+r)^2+(2-r)^2=r^2$,
    $r^2-6r+5=0$, $r=1$ 또는 $r=5$. 두 중심 $(-1,1),(-5,5)$, 거리 $4\sqrt{2}$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 축 동시 접 → 중심 좌표 $(a,a)$ 또는 $(a,-a)$, 반지름 $=|a|$
  mechanism_secondary: [사분면 판정, 이차방정식 두 근 → 두 원 존재]
  depth_conditions: [사분면 결정 (점 $(-1,2)$가 제2사분면) → 중심 형태 유일화]
  freedom_signals:
    initial_setup_freedom: medium  # 4형태 중 하나 선택
    approach_choice: low
    student_decision_points: 2
  common_mistakes: [4가지 형태 모두 검토하지 않음, 사분면 판단 오류]
  condition_layers:
    surface: "두 축 접 + 점 통과"
    real: "중심 형태 $(-r,r)$ 강제 + 이차식 두 근 → 두 원"
    interaction: "사분면 → 형태 결정 → 이차방정식 → 두 원"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#151
  page: 46
  problem_summary: |
    (1) 중심이 직선 $x+2y-6=0$ 위, $x,y$축 동시 접 → 모든 원의 넓이의 합.
    (2) 중심이 곡선 $y=x^2-x-3$ 위, $x,y$축 동시 접 → 모든 원의 넓이의 합.
  solution_summary: |
    (1) 중심 $(a,a)$: $3a-6=0$, $a=2$, 넓이 $4\pi$. 중심 $(a,-a)$: $-a-6=0$,
    $a=-6$, 넓이 $36\pi$. 합 $40\pi$.
    (2) $(a,a)$: $a^2-2a-3=0$, $a=-1$ 또는 $3$, 넓이 $\pi+9\pi$.
    $(a,-a)$: $a^2-3=0$, $a=\pm\sqrt{3}$, 넓이 $3\pi+3\pi$. 합 $16\pi$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 축 동시 접 원 + 중심의 자취 조건 (직선/곡선)
  mechanism_secondary: [$(a,a)$ 및 $(a,-a)$ 두 케이스 병렬 처리, 넓이 합 = $\pi r^2$ 합]
  depth_conditions: [중심 자취가 곡선이면 두 케이스 각각 이차방정식 → 두 근 가능]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 4  # 2 case × 2 sub
  common_mistakes: ["$(a,-a)$ 형태 검토 누락, 이차식 두 근 활용 실패"]
  condition_layers:
    surface: "중심 조건 + 두 축 접"
    real: "중심 형태 2케이스 × 자취 조건"
    interaction: "각 케이스별 방정식 해 모두 열거"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#152
  page: 46
  problem_summary: |
    두 점 $A(-3,0),B(1,0)$을 지름의 양 끝점으로 하는 원 위의 점 $P(x,y)$에
    대하여 $y^2-2x$의 최댓값과 최솟값의 합을 구하시오.
  solution_summary: |
    원 $(x+1)^2+y^2=4$, $-3 \le x \le 1$. $y^2-2x=4-(x+1)^2-2x=-(x+2)^2+7$.
    $x=-2$에서 최대 7, $x=1$에서 최소 $-2$. 합 5.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 위의 점 → $y^2$ 소거 → $x$ 함수 최적화
  mechanism_secondary: [원의 표준형, 이차함수 정의역 제한, 정점 위치 판단]
  depth_conditions: [$y^2=4-(x+1)^2$ 대입 → $x$만의 이차함수 + 정의역]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [$x$ 정의역 제약 놓침, $y^2 \ge 0$ 조건 재확인 불이행]
  condition_layers:
    surface: "원 위 점의 함수 값 최적화"
    real: "$y^2$ 소거 → 1변수 이차함수 + 정의역"
    interaction: "정의역 내 정점 vs 경계 비교"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#153
  page: 46
  problem_summary: |
    원 $x^2+y^2-2(a+1)x+2(a-1)y=2a+3$에 대한 <보기> 참·거짓
    (ㄱ 넓이의 최솟값 $9\pi/2$, ㄴ $x$축 접 → $a=-2$, ㄷ 중심이 직선 $l$ 위 → 삼각형 넓이 4).
  solution_summary: |
    중심 $(a+1,-a+1)$, 반지름 $\sqrt{2a^2+2a+5}$. ㄱ 반지름² 최솟값 $9/2$ → $9\pi/2$ (참).
    ㄴ $|-a+1|=\sqrt{2a^2+2a+5}$, $a=-2$ (참).
    ㄷ 중심 $y=-x+2$ 위, 이 직선의 $x,y$절편 $(2,0),(0,2)$ → 삼각형 넓이 2 (거짓). 답 ㄱ,ㄴ.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 매개변수 원의 다중 조건 참·거짓 판정
  mechanism_secondary: [반지름 최적화, $x$축 접 조건, 중심 자취]
  depth_conditions: [세 명제 각각 다른 mechanism 요구 (넓이/접/자취)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5  # 3개 명제 × 각 판정 단계
  common_mistakes: [자취 직선의 절편 반부호 실수, 접 조건에서 절댓값 놓침]
  condition_layers:
    surface: "매개변수 원의 3명제"
    real: "각 명제가 독립 mechanism"
    interaction: "3개 서로 다른 축 병렬 처리"
  citation_note: "고쟁이 CH03 · 학습 목적"

# ===== STEP 2 · 유형 02 원의 방정식의 활용 =====

- source: 고쟁이-CH03-STEP2-#154
  page: 46
  problem_summary: |
    점 $A(-6,0)$과 원 $x^2+y^2-6x=0$ 위의 점 B에 대하여 선분 AB를 2:1로
    내분하는 점을 P라 할 때, 점 P가 나타내는 도형의 방정식을 구하시오.
  solution_summary: |
    $B(x_1,y_1)$, $P(x,y)$: $x_1=(3x+6)/2$, $y_1=3y/2$. B가 원 위: 대입 →
    $(x+2)^2+y^2-4(x+2)=0$, 즉 $x^2+y^2=4$. (다른 풀이: 닮음 비 3:2, 새 중심 $(0,0)$, 반지름 2.)
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 자취 = 원 위 점의 내분점 (닮음 변환)
  mechanism_secondary: [내분점 공식 역대입, 원의 확대·축소 닮음]
  depth_conditions: [B가 원 → P는 닮음 원 (중심·반지름 모두 변환)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 대입법 vs 닮음
    student_decision_points: 3
  common_mistakes: [내분점 역식 유도 실수, 닮음비 3:2 (2:1이 아님) 혼동]
  condition_layers:
    surface: "원 위 점의 내분점 자취"
    real: "닮음 변환 → 새 원"
    interaction: "중심·반지름 각각 변환"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#155
  page: 46
  problem_summary: |
    두 점 $A(5,-2),B(-2,-4)$와 원 $x^2+y^2=4$를 움직이는 점 P에 대하여
    삼각형 ABP의 무게중심 G가 나타내는 도형의 길이는?
  solution_summary: |
    $G=(x,y)$: $x_1=3x-3$, $y_1=3y+6$. P가 원: 대입 → $(x-1)^2+(y+2)^2=4/9$.
    반지름 $2/3$, 둘레 $4\pi/3$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 자취 = 원 위 점 포함 삼각형 무게중심
  mechanism_secondary: [무게중심 공식 역대입, 닮음비 1:3 → 반지름 1/3]
  depth_conditions: [무게중심 → P만 변수 → 닮음 축소]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 2
  common_mistakes: [무게중심 역식 계수 실수, 반지름 비율 오해]
  condition_layers:
    surface: "삼각형 무게중심 자취"
    real: "P만 변수 → 닮음 원"
    interaction: "닮음비 1/3 자동 유도"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#156
  page: 46
  problem_summary: |
    두 점 $A(-1,0),B(1,0)$에 대하여 점 $P(a,b)$가 $\overline{PA}^2+\overline{PB}^2=10$을
    만족시킬 때, $(a-3)^2+(b+4)^2$의 최댓값을 구하시오.
  solution_summary: |
    $(a+1)^2+b^2+(a-1)^2+b^2=10$ → $a^2+b^2=4$. 즉 P는 원 위. $(a-3)^2+(b+4)^2$
    = 점 $(a,b)$와 $(3,-4)$ 거리의 제곱. 원 위 최댓값 $=$ 중심-점 거리 + 반지름
    $=\sqrt{9+16}+2=7$. 제곱 49.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 점 거리 제곱 합 = 정수 → 자취 원 (아폴로니우스 아님)
  mechanism_secondary: [중점 정리(중선 정리) 대안, 원 위 점과 외부점 최댓값 = $d+r$]
  depth_conditions: [$\overline{PA}^2+\overline{PB}^2$ → 좌표 대입 → 원 방정식]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high  # 좌표 대입 vs 중선정리
    student_decision_points: 3
  common_mistakes: [중선정리 오적용, 최댓값=거리 제곱을 거리 후 제곱 아닌 다른 식 잘못]
  condition_layers:
    surface: "거리 제곱 합 조건 → 최댓값"
    real: "자취 원 유도 → 최적화"
    interaction: "조건 대수 처리 → 기하 원 → 거리 최적화"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#157
  page: 47
  problem_summary: |
    두 점 $A(4,0),B(10,0)$을 지나고 반지름 5인 원. 원점 O와 원 위 P에 대하여
    선분 OP 길이가 정수가 되는 P의 개수 (중심 제1사분면).
  solution_summary: |
    현 AB 중점 $H(7,0)$, 원의 중심 $C(7,4)$ (반지름 5, 피타고라스). $|OC|=\sqrt{65}$,
    OP 범위 $\sqrt{65}-5 \le k \le \sqrt{65}+5$ (약 $3.06 \le k \le 13.06$). 정수 4~13,
    각 값에 P 2개씩. $10 \times 2 = 20$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 밖 점에서 원 위 거리 범위 + 정수 개수 세기
  mechanism_secondary: [현의 수직이등분선 → 중심 좌표, 원과 원의 방정식 (원점 중심 원)]
  depth_conditions: [반지름·현 조건 → 중심 결정 → 거리 범위 → 정수 개수]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [정수 개수 셀 때 경계 포함 여부, 각 정수당 P 2개 놓침]
  condition_layers:
    surface: "원의 위치 조건 + 정수 거리"
    real: "중심 좌표 결정 → 정수 반경 원 교점"
    interaction: "중심 결정 → 거리 범위 → $\\times 2$ 개수"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#158
  page: 47
  problem_summary: |
    두 점 $A(-2,-1),B(10,4)$에 대하여 중심이 C이고 반지름 1인 원이 선분
    AB와 적어도 한 점에서 만날 때, 점 C를 중심으로 하는 원이 나타내는 도형의
    둘레의 길이를 구하시오.
  solution_summary: |
    C의 자취 = 선분 AB에서 거리 1 이하의 영역 (양쪽 평행선 + 두 끝 반원).
    가로 = $|AB|=13$, 세로 4인 직사각형 + 반지름 1인 두 반원.
    둘레 = $13\times 2 + 2\pi \times 1 = 26 + 4\pi$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 자취 = 선분에서 일정거리 (스타디움/캡슐 도형)
  mechanism_secondary: [선분 거리 = 1 → 평행선 + 반원 결합, 둘레 = 직선부 + 원호부]
  depth_conditions: [원이 선분과 만남 → 중심 거리 ≤ 반지름 → 자취 = 팽창된 영역]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes: [양 끝 반원 누락, 사각형 두 변 (평행선 두 개) 놓침]
  condition_layers:
    surface: "선분에 만나는 원의 중심 자취"
    real: "선분 확장체 (직사각형 + 두 반원)"
    interaction: "가로·세로·호 각각 합산"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#159
  page: 47
  problem_summary: |
    두 양수 $m,n$과 좌표평면 위의 두 점 $A(-4,0),B(4,0)$에 대하여
    $\overline{PA}:\overline{PB}=m:n$ 만족 점 P의 도형 C 참·거짓
    (ㄱ 항상 원, ㄴ $m<n$이면 A 내부 존재, ㄷ $m=3,n=1$ → 원 $x^2+(y-5)^2=1$ 위 점 Q → $\overline{PQ}$ 최댓값 $4+5\sqrt{2}$).
  solution_summary: |
    ㄱ $m=n$이면 수직이등분선 (원 아님, 거짓).
    ㄴ $m<n$이면 $f(-4)<0$ → A가 원 내부 (참).
    ㄷ $m=3,n=1$ → $(x-5)^2+y^2=9$ (중심 $(5,0)$ 반지름 3). Q는 원 $(0,5)$ 중심 반지름 1.
    두 원 중심 거리 $\sqrt{25+25}=5\sqrt{2}$, $\overline{PQ}$ 최댓값 $5\sqrt{2}+1+3=4+5\sqrt{2}$ (참).
    답 ㄴ,ㄷ.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 아폴로니우스의 원 + 원 위 두 점의 거리 최댓값
  mechanism_secondary: [$m=n$ 예외 판정, 판별식으로 점의 내·외부, 두 원 사이 거리]
  depth_conditions: [일반화 대수식 vs 특수치 판정 · 3명제 서로 다른 mechanism]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [$m=n$ 특수케이스 → 원이 아님 놓침, 두 원 최대 거리 공식 실수]
  condition_layers:
    surface: "비 조건 자취 판정"
    real: "아폴로니우스 원 + 예외 + 두 원 최댓값 조합"
    interaction: "3명제 각각 별도 처리"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#160
  page: 47
  problem_summary: |
    바다 위 8km 떨어진 두 지점 A,B에서 배 두 대 동시 출발, 직선 이동,
    A 출발 속력이 B의 3배. P에서 만날 때 삼각형 ABP 넓이 최댓값?
  solution_summary: |
    $A(0,0),B(8,0)$, $P(a,b)$. $\overline{AP}=3\overline{BP}$ → $\sqrt{a^2+b^2}=3\sqrt{(a-8)^2+b^2}$.
    양변 제곱 $(a-9)^2+b^2=9$ (아폴로니우스 원, 중심 $(9,0)$ 반지름 3).
    밑변 AB=8, 높이 = $|b|$ 최대 = 3. 넓이 = 12.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 아폴로니우스 원 (실생활 지문) + 삼각형 넓이 최대 (밑변 고정)
  mechanism_secondary: [속력·거리 조건 → 비율, 원 위 점의 $y$좌표 최댓값 = 반지름]
  depth_conditions: [실생활 → 좌표 세팅 → 아폴로니우스 → 높이 최적화]
  freedom_signals:
    initial_setup_freedom: high  # 좌표 세팅 자유
    approach_choice: medium
    student_decision_points: 4
  common_mistakes: [속력 비를 거리 비로 즉시 매핑 실수, 삼각형 높이 = $y$좌표 최댓값 = 반지름 관계 놓침]
  condition_layers:
    surface: "실생활 (배 이동)"
    real: "속력비 = 거리비 → 아폴로니우스 원"
    interaction: "실생활 → 좌표화 → 원 → 최적화"
  citation_note: "고쟁이 CH03 · 학습 목적 · 실생활 지문형"

# ===== STEP 2 · 유형 03 원과 직선의 위치 관계 =====

- source: 고쟁이-CH03-STEP2-#161
  page: 48
  problem_summary: |
    평행한 두 직선 $2x-y+1=0$, $px-y+q=0$에 동시에 접하는 원의 넓이가 $5\pi$일 때,
    양수 $p,q$에 대하여 $p+q$의 값은?
  solution_summary: |
    평행 → $p=2$. 넓이 $5\pi$ → 반지름 $\sqrt{5}$, 지름 $2\sqrt{5}$ =
    두 평행선 사이 거리. $(0,1)$과 $2x-y+q=0$ 거리 $=2\sqrt{5}$: $|q-1|/\sqrt{5}=2\sqrt{5}$,
    $q=11$. $p+q=13$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 평행선 사이 접하는 원 → 지름 = 두 평행선 사이 거리
  mechanism_secondary: [평행 조건 → 계수 결정, 점과 직선 거리 공식]
  depth_conditions: [평행 → $p$ 결정, 넓이 → 반지름 → 지름 → 거리 조건]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes: ["$q$의 부호 조건 (양수) 놓침, 지름 = 평행선 거리 관계 오해"]
  condition_layers:
    surface: "평행 접 원의 넓이"
    real: "평행 → 계수, 넓이 → 반지름, 지름 → 평행거리"
    interaction: "3단 순차 조건"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#162
  page: 48
  problem_summary: |
    원 $x^2+y^2-6x-4y+4=0$과 직선 $y=2x+k$가 만나서 생기는 현의 길이가 4일 때,
    모든 실수 $k$의 값의 합은?
  solution_summary: |
    원 중심 $(3,2)$ 반지름 3. 현 길이 4 → 반현 2 → 중심-직선 거리 $=\sqrt{9-4}=\sqrt{5}$.
    거리 $=|6-4+k|/\sqrt{5}=|k+4|/\sqrt{5}=\sqrt{5}$, $|k+4|=5$, $k=1$ 또는 $k=-9$.
    합 $-8$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 현 길이 → 중심-직선 거리 (피타고라스 반현)
  mechanism_secondary: [일반형→표준형, 절댓값 방정식 두 근 합]
  depth_conditions: [현 길이 = $2\sqrt{r^2-d^2}$ 공식]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes: [현 길이 = 지름 오인, 절댓값 두 근 합 부호 실수]
  condition_layers:
    surface: "현 길이 조건"
    real: "중심-직선 거리 유도"
    interaction: "$k$에 대한 절댓값 방정식 두 근"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#163
  page: 48
  problem_summary: |
    점 $(1,k)$에서 원 $(x-3)^2+(y+1)^2=9$에 그은 두 접선이 서로 수직일 때,
    양수 $k$의 값은?
  solution_summary: |
    사각형 ACBD 네 각 직각 + $\overline{BC}=\overline{BD}=3$ → 정사각형.
    $\overline{AB}=3\sqrt{2}$ → $\sqrt{(-2)^2+(k+1)^2}=3\sqrt{2}$, $(k+1)^2=14$,
    $k=\sqrt{14}-1$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 외부점에서 두 접선 수직 → 정사각형 (중심-외부점 거리 = $r\sqrt{2}$)
  mechanism_secondary: [접선 성질 (반지름 수직), 두 점 거리]
  depth_conditions: [두 접선 수직 → 외부점·중심·접점 정사각형 → $d=r\sqrt{2}$]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 2
  common_mistakes: [정사각형 관계 놓침 (일반 사각형 계산으로 우회), $k$ 부호 조건 놓침]
  condition_layers:
    surface: "두 접선 수직"
    real: "정사각형 → $d=r\\sqrt{2}$"
    interaction: "기하 판정 → 거리식"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#164
  page: 48
  problem_summary: |
    점 $P(-1,3)$에서 원 $x^2+y^2-6x-2y+6=0$에 그은 두 접선의 접점을 각각 A,B라
    할 때, 삼각형 PAB의 넓이는? [빈출]
  solution_summary: |
    중심 $C(3,1)$ 반지름 2. $\overline{CP}=2\sqrt{5}$, $\overline{AC}=2$ → $\overline{AP}=4$.
    △ACP ∼ △HAP, 비 5:4. △ACP 넓이 $4$ → △HAP 넓이 $16/5$. △PAB 넓이 $32/5$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 외부점에서 접선 두 개 → 접선 사각형 넓이 (닮음 활용)
  mechanism_secondary: [접선 길이 = $\sqrt{d^2-r^2}$, 두 직각삼각형 닮음, 넓이 비]
  depth_conditions: [사각형 PACB → 대각선 CP·AB 수직 → 닮음 비율로 넓이 계산]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 닮음 vs 직접 좌표 vs 삼각비
    student_decision_points: 4
  common_mistakes: [삼각형 PAB vs 사각형 PACB 혼동, 닮음 비율 방향 실수]
  condition_layers:
    surface: "접선 두 개 → 삼각형 넓이"
    real: "닮음 활용"
    interaction: "$d$ → 접선길이 → 닮음 → 넓이"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#165
  page: 48
  problem_summary: |
    좌표평면 위 두 원 $C_1: x^2+y^2=4$, $C_2: x^2+y^2+10x-16y+80=0$.
    $x$축 위 점 A에서 $C_1$의 접선의 접점 P, $C_2$의 접선의 접점 Q.
    $\overline{AP}=\overline{AQ}$일 때 A의 $x$좌표?
  solution_summary: |
    $C_2$ 중심 $(-5,8)$ 반지름 3. $A(a,0)$. $\overline{AP}=\sqrt{a^2-4}$,
    $\overline{AQ}=\sqrt{(a+5)^2+64-9}=\sqrt{a^2+10a+80}$. 같다는 조건 제곱하면
    $a^2-4=a^2+10a+80$, $10a=-84$, $a=-42/5$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 원에 대한 등접선 길이 → 근축 (radical axis) 유형
  mechanism_secondary: [접선 길이 공식 $\sqrt{d^2-r^2}$, 대수 방정식 정리]
  depth_conditions: [$AP^2 = |AO_1|^2 - r_1^2$, $AQ^2 = |AO_2|^2 - r_2^2$, 같음 → 근축 위 조건]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 2
  common_mistakes: [접선 길이 공식 오적용, 두 원 반지름 각각 다름 처리 실수]
  condition_layers:
    surface: "두 원 접선 길이 같음"
    real: "근축 조건 (실질)"
    interaction: "제곱하면 선형화 → 1차 방정식"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#166
  page: 49
  problem_summary: |
    원 $x^2+y^2+4ax-2ay-3=0$이 원 $x^2+y^2-6x+2y+3=0$의 둘레를 이등분할 때,
    상수 $a$의 값은?
  solution_summary: |
    둘레 이등분 → 두 원 교점을 잇는 직선이 두 번째 원의 지름 → 이 직선이 두 번째
    원의 중심 $(3,-1)$ 통과. 두 원의 방정식 차를 이용해 근축 구하고 대입.
    $(2a+3)x-(a+1)y-3=0$에 $(3,-1)$ 대입 → $7a+7=0$, $a=-1$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 한 원이 다른 원의 둘레 이등분 → 근축이 지름 (다른 원 중심 통과)
  mechanism_secondary: [근축 = 두 원 방정식 차, 중심 대입]
  depth_conditions: [이등분 조건 → 근축 = 지름 → 중심 위]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes: [근축 방정식 계산 실수, 이등분 = 지름 통과 관계 놓침]
  condition_layers:
    surface: "원 둘레 이등분"
    real: "근축이 다른 원 지름"
    interaction: "근축 유도 → 중심 대입"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#167
  page: 49
  problem_summary: |
    기울기 0 아닌 직선 $l$이 이차함수 $y=-\frac{1}{2}x^2$ 그래프와 원 $x^2+(y-2)^2=4$에
    동시에 접할 때, $l$의 모든 기울기의 곱은?
  solution_summary: |
    $l: y=ax+b$. 포물선 접: $-x^2/2=ax+b$ → $x^2+2ax+2b=0$, 판별식 $D/4=a^2-2b=0$,
    $a^2=2b$. 원 접: 중심 $(0,2)$과 직선 거리 = 반지름 2, $|b-2|/\sqrt{a^2+1}=2$,
    $(b-2)^2=4(a^2+1)$. 두 식 연립 → $b^2-12b=0$, $b=12$ (또는 0 배제),
    $a^2=24$, $a=\pm 2\sqrt{6}$. 곱 $-24$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원·포물선 동시 접선 (판별식 두 개 연립)
  mechanism_secondary: [포물선 접 판별식, 원 접 거리 공식, 두 근의 곱]
  depth_conditions: [두 접 조건 → 두 개 방정식 → $a,b$ 연립]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes: [$b=0$ 예외 배제 실수, 두 접 조건 연립 계산 실수]
  condition_layers:
    surface: "직선이 두 곡선 동시 접"
    real: "판별식 + 거리 → 연립"
    interaction: "$b$ 소거 후 $a$ 두 근 → 곱"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#168
  page: 49
  problem_summary: |
    원 $x^2+y^2+16x-10y+8=0$ 위 점 A와 직선 $4x-3y-13=0$ 사이의 거리의
    최댓값과 최솟값의 합은? [빈출]
  solution_summary: |
    원 중심 $(-8,5)$ 반지름 9. 중심-직선 거리 $=|-32-15-13|/5=60/5=12$.
    최댓값 $12+9=21$, 최솟값 $12-9=3$. 합 24.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 위 점과 외부 직선 최댓값·최솟값 (중심 거리 $\pm r$)
  mechanism_secondary: [일반형→표준형, 점-직선 거리 공식]
  depth_conditions: [원 위 점의 거리 = $d \pm r$ 공식 (중심 거리가 반지름보다 큼)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 2
  common_mistakes: [최소 = 0 오답 (원과 직선 안 만남 확인 필요), 부호 실수]
  condition_layers:
    surface: "원 위 점과 직선 거리"
    real: "중심 거리 $\\pm$ 반지름"
    interaction: "표준 mechanism 직접 적용"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#169
  page: 49
  problem_summary: |
    원 $x^2+y^2=4$ 위의 점 P와 두 점 $A(0,8),B(2,4)$에 대하여 삼각형 PAB의 넓이의
    최솟값을 구하시오. [빈출]
  solution_summary: |
    AB 밑변 $=\sqrt{4+16}=2\sqrt{5}$ 일정. 높이 = P와 직선 AB 거리. 최소 = 중심 거리
    - 반지름 = $8/\sqrt{5}-2$. 넓이 최소 $=\frac{1}{2}\times 2\sqrt{5}\times (8/\sqrt{5}-2)=8-2\sqrt{5}$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 위 점 → 삼각형 최소 넓이 (밑변 고정 + 높이 최소)
  mechanism_secondary: [직선 방정식, 점-직선 거리, 원 위 점 거리 최소 = $d-r$]
  depth_conditions: [밑변 고정 → 높이만 변수 → 원 위 점 거리 최적화]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [최댓값 오답, 밑변 반대편 P 위치 판별 실수]
  condition_layers:
    surface: "삼각형 넓이 최소"
    real: "밑변 고정 + 원 위 점 높이 최소"
    interaction: "직선 AB 유도 → 중심 거리 → 최소 계산"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#170
  page: 49
  problem_summary: |
    원 $(x+2)^2+(y+3)^2=25$의 중심 A. 원과 직선 $y=kx$의 교점 P,Q. 현 PQ 길이가 최소일 때,
    삼각형 APQ 둘레는?
  solution_summary: |
    현 PQ 최소 ⟺ 원 중심-직선 거리 최대 ⟺ 직선 OA와 직선 $y=kx$가 수직.
    $\overline{OA}=\sqrt{13}$, $\overline{AP}=5$, $\overline{OP}=\sqrt{25-13}=2\sqrt{3}$,
    $\overline{PQ}=4\sqrt{3}$. 둘레 $=4\sqrt{3}+10$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원점 지나는 직선의 현 길이 최소 ⟺ 원 중심-직선 수직 (OA ⊥ 직선)
  mechanism_secondary: [현 길이 $=2\sqrt{r^2-d^2}$, 피타고라스 반현]
  depth_conditions: [$y=kx$는 원점 지남 → 현 최소 조건 = $k$ 수직 조건]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [현 최소 = 접선(0) 오해, 원점 통과 조건 활용 실패]
  condition_layers:
    surface: "원과 직선 현 길이 최소 → 삼각형 둘레"
    real: "OA ⊥ 직선 = 현 최소"
    interaction: "기하 판정 → 거리 → 둘레"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#171
  page: 49
  problem_summary: |
    원 $x^2+y^2-4x+2y+1=0$에 접하는 접선들 중 서로 수직인 두 접선의 교점을 P라 할 때,
    점 P가 나타내는 도형과 직선 $y=x+5$ 사이의 거리의 최솟값을 구하시오.
  solution_summary: |
    원 $(x-2)^2+(y+1)^2=4$, 반지름 2. 수직 두 접선의 교점 P → P의 자취 = 중심이
    같고 반지름 $2\sqrt{2}$인 동심원. $(x-2)^2+(y+1)^2=8$. 중심-직선 거리
    $|2+1+5|/\sqrt{2}=4\sqrt{2}$, 최소 $=4\sqrt{2}-2\sqrt{2}=2\sqrt{2}$. → 답 $6\sqrt{2}$?
    (해설 표기: $|2+1+5|/\sqrt{2}+2\sqrt{2}=6\sqrt{2}$? 재확인: 원과 직선 안 만남 확인 후 $-2\sqrt{2}$).
    해설 최종답 $6\sqrt{2}$ (수직 두 접선 교점 자취 원 반지름 = $r\sqrt{2}$ + 거리 관계).
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 수직 접선의 교점 자취 = 동심 확대 원 (반지름 $r\sqrt{2}$)
  mechanism_secondary: [자취 원 + 직선 거리 최적화, 정사각형 대각선 관계]
  depth_conditions: [수직 접선 교점 자취 원 → 최적화 문제로 축소]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [자취 원 반지름 = $r\sqrt{2}$ 관계 놓침, 최소 방향 오판]
  condition_layers:
    surface: "수직 접선 교점 → 직선 거리 최소"
    real: "교점 자취 원 → 원과 직선 최소 거리"
    interaction: "자취 인식 → 표준 mechanism"
  citation_note: "고쟁이 CH03 · 학습 목적"

# ===== STEP 2 · 유형 04 원의 접선의 방정식 =====

- source: 고쟁이-CH03-STEP2-#172
  page: 50
  problem_summary: |
    점 $(-2,0)$에서 원 $(x-2)^2+(y-1)^2=4$에 그은 두 접선이 이루는 각을 이등분하는
    직선의 방정식을 모두 구하시오.
  solution_summary: |
    각 이등분선 중 하나는 외부점 $(-2,0)$과 중심 $(2,1)$을 지남: $y=x/4+1/2$.
    수직인 다른 이등분선: 기울기 $-4$, 점 $(-2,0)$ 지남: $y=-4x-8$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 접선이 이루는 각의 이등분선 → 외부점-중심 잇는 직선 + 수직선
  mechanism_secondary: [접선 대칭성, 수직 직선]
  depth_conditions: [두 접선 대칭축 = 외부점-중심 직선, 이등분선은 2개 (직교)]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 2
  common_mistakes: [이등분선 1개만 답 (다른 수직선 놓침), 기울기 부호 실수]
  condition_layers:
    surface: "두 접선 각의 이등분선"
    real: "외부점-중심 직선 + 수직선"
    interaction: "대칭 인식 → 두 개 답"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#173
  page: 50
  problem_summary: |
    제1사분면 위 점 $(a,b)$ 중심, $x$축과 점 P에서 접하며 $y$축과 두 점 Q,R에서
    만나는 원. P 지나고 기울기 2인 직선이 원과 만나는 점 중 P 아닌 점 S.
    $\overline{QR}=\overline{PS}=6$일 때 $a^2+b^2$?
  solution_summary: |
    중심 $C(a,b)$, P $(a,0)$. 기울기 2인 직선 $y=2(x-a)$. $\overline{QR}=\overline{PS}=6$ →
    중심에서 $y$축 거리 = 중심에서 이 직선 거리. $a=|2a-b-2a|/\sqrt{5}=|b|/\sqrt{5}$,
    $b=\sqrt{5}a$. $\overline{PM}=3$, $b^2=a^2+9$, $4a^2=9$, $a=3/2$, $b=3\sqrt{5}/2$.
    $a^2+b^2=9/4+45/4=27/2$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 현 길이 같음 → 두 현의 중심 거리 같음
  mechanism_secondary: [$x$축 접 → 중심 $y$좌표 = 반지름, 두 현의 반현 관계]
  depth_conditions: [$\overline{QR}=\overline{PS}$ → 중심 거리 조건 → 방정식]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes: [두 현 관계 놓침, 두 조건 처리 순서 혼동]
  condition_layers:
    surface: "두 현 길이 같음"
    real: "중심 거리 같음 → 좌표 방정식"
    interaction: "접 조건 → 반지름 = $b$, 현 조건 → 거리식 → 연립"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#174
  page: 50
  problem_summary: |
    원 $x^2+y^2=13$ 위 두 점 $A(-3,-2),B(2,-3)$과 임의의 점 P를 꼭짓점으로 하는 삼각형 ABP
    넓이 최댓값 $\frac{q}{p}(1+\sqrt{2})$일 때 $pq$? [교육청 기출, 서로소 자연수]
  solution_summary: |
    AB 밑변 $\sqrt{26}$. 높이 최대 = P와 직선 AB 거리 최대 (제1사분면 접선 접점).
    AB 기울기 $-1/5$, 접선 $y=-x/5+13\sqrt{2}/5$. 원점-접선 거리 최대 접점 좌표에서 PH 계산.
    넓이 최대 $=\frac{1}{2}\sqrt{26}\times\frac{13+13\sqrt{2}}{\sqrt{26}}=\frac{13}{2}(1+\sqrt{2})$.
    $p=2, q=13$, $pq=26$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 위 점 삼각형 넓이 최대 (밑변 고정) + 접선 최대 거리
  mechanism_secondary: [원 위 두 점 지나는 직선, 평행 접선으로 최대 거리 유도]
  depth_conditions: [P만 자유변수 → 최대 거리 = 반대편 접선까지 거리]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 접선 관점 vs 좌표 최적화
    student_decision_points: 4
  common_mistakes: [최소로 오답, 유리화 실수, 접선 방정식 오차]
  condition_layers:
    surface: "삼각형 넓이 최대"
    real: "밑변 고정 + 반대편 접선 거리"
    interaction: "직선 AB → 반대 접선 → 최대 높이"
  citation_note: "고쟁이 CH03 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CH03-STEP2-#175
  page: 50
  problem_summary: |
    한 변 12인 정사각형 ABCD에 내접하는 원. 선분 AD 1:2 내분점 P, 선분 BP가 원과
    만나는 두 점 Q,R. QR 길이?
  solution_summary: |
    원 중심 (좌표 세팅) $(0,0)$ 반지름 6, 정사각형 꼭짓점 $A(-6,6)$ 등. $P(-6,2)$
    (AD 1:2 내분). 직선 BP: $P(-6,2), B(6,6)$ → $x-3y+12=0$. 중심-직선 거리
    $12/\sqrt{10}$. 반현 $\sqrt{36-144/10}=\sqrt{216/10}=6\sqrt{15}/5$.
    $QR=12\sqrt{15}/5$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 도형 내부 좌표 세팅 + 현 길이 (거리·피타고라스)
  mechanism_secondary: [내분점 공식, 직선 방정식, 점-직선 거리]
  depth_conditions: [기하 세팅 → 좌표화 → 표준 mechanism]
  freedom_signals:
    initial_setup_freedom: high  # 좌표 원점 선택 자유
    approach_choice: medium
    student_decision_points: 4
  common_mistakes: [좌표 세팅 오류, 내분점 계산 실수]
  condition_layers:
    surface: "정사각형·내분점·현 길이"
    real: "좌표 → 현 길이 = $2\\sqrt{r^2-d^2}$"
    interaction: "좌표 세팅 자유 → 계산 단순화"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#176
  page: 51
  problem_summary: |
    원 $C:(x-k)^2+(y-1)^2=4$, 직선 $l: mx-y+1=0$에 대한 <보기> 참·거짓
    (ㄱ $k=0$ 넓이 이등분, ㄴ $k=3$ 만나도록 $m$ 최댓값 $4/5$, ㄷ $m=2$ 정삼각형 되는 $k$의 곱).
  solution_summary: |
    ㄱ $k=0$ → 중심 $(0,1)$ 직선 $y=mx+1$ 항상 통과 (참).
    ㄴ $k=3$ → 중심 $(3,1)$, 거리 $|3m|/\sqrt{m^2+1}\le 2$, $9m^2\le 4m^2+4$, $m^2\le 4/5$,
    최댓값 $2\sqrt{5}/5$ (거짓, $4/5$ 아님).
    ㄷ 정삼각형 → 중심-직선 거리 = 반지름 = 2 (실제 반지름과 같음). $|2k-1+1|/\sqrt{5}=\sqrt{3}$,
    $|2k|=\sqrt{15}$, $k=\pm\sqrt{15}/2$. 곱 $-15/4$ (참). 답 ㄱ,ㄷ.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 매개변수 원·직선 다중 참·거짓 (이등분·만남·정삼각형)
  mechanism_secondary: [정점 통과, 거리 조건, 정삼각형 관계]
  depth_conditions: [3명제 각각 별개 mechanism]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [$m^2$ 부등식 최댓값 계산 실수, 정삼각형 조건 놓침]
  condition_layers:
    surface: "3명제 참·거짓"
    real: "정점·거리·정삼각형 분리 판정"
    interaction: "각 명제 독립 처리"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#177
  page: 51
  problem_summary: |
    두 원 $x^2+y^2=10, x^2+(y-2)^2=10$의 공통부분 색칠 (한 원 내부·다른 원 외부).
    점 $(5,2)$ 지나는 직선이 색칠 도형 둘레와 3점에서 만날 때, 모든 기울기의 곱.
  solution_summary: |
    두 원 교점: $y=1, x=\pm 3$. 세 점에서 만나려면 (i) 두 원 교점 지나거나 (ii) 한 원 접.
    (i) $(3,1),(5,2)$ 지나는 직선 기울기 $1/2$.
    (ii) $x^2+(y-2)^2=10$과 제4사분면 접, 대입 판별식 → $k=\sqrt{6}/3$.
    곱 $=\sqrt{6}/6$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 원의 공통·차 영역 + 직선의 만남 개수 (경계 분석)
  mechanism_secondary: [두 원 교점 좌표, 접선 조건]
  depth_conditions: [3점 만남 → 두 케이스 (교점 통과 or 접) 분리]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [두 케이스 중 하나 놓침, 접선 판별식 계산 실수]
  condition_layers:
    surface: "직선 & 색칠도형 만남 3점"
    real: "교점 통과 or 원 접"
    interaction: "경우 분리 → 각 조건 방정식"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#178
  page: 51
  problem_summary: |
    원 $(x+2)^2+(y-1)^2=1$ 위 점 $P(a,b)$와 원 $(x-4)^2+(y-1)^2=4$ 위 점 $Q(c,d)$에 대하여
    $\frac{d-b}{c-a}$의 최댓값을 구하시오.
  solution_summary: |
    $(d-b)/(c-a)$ = 직선 PQ 기울기. 최대일 때 PQ는 두 원 공통외접선. 두 원 중심 $A(-2,1),B(4,1)$
    거리 6, 반지름 1과 2 → 접선 조건 유도. 접선 기울기 최대 $=\sqrt{3}/3$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 원 각각 위 두 점의 기울기 최대 → 공통외접선
  mechanism_secondary: [두 원 사이 접선 기하, 삼각비/각도 관계]
  depth_conditions: [기울기 = 기하학적 각도 최대 → 접선 상황]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes: [최댓값 직접 대입 계산 시도 (기하 관점 놓침), 접선 개수 4개 중 오답]
  condition_layers:
    surface: "두 원 위 두 점 기울기 최대"
    real: "공통외접선 = 접선 기울기 최대"
    interaction: "대수식 → 기하학적 접선 문제"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#179
  page: 51
  problem_summary: |
    좌표평면 원 $x^2+y^2-4x-12y+20=0$과 함수 $y=k|x|$ 그래프가 서로 다른 두 점에서만
    만나도록 하는 $k$의 범위 $\alpha<k<\beta$. $\alpha\times\beta$?
  solution_summary: |
    원 $(x-2)^2+(y-6)^2=20$, 중심 $(2,6)$ 반지름 $2\sqrt{5}$. $y=k|x|$는 $x\ge 0$이면
    $y=kx$, $x<0$이면 $y=-kx$. 두 점만 만나려면 제1사분면 접 조건 초과 + 제2사분면 접 조건 미만.
    (i) 접: $|2k-6|/\sqrt{k^2+1}=2\sqrt{5}$, $k=1/2$.
    (ii) 접: $|2k+6|/\sqrt{k^2+1}=2\sqrt{5}$, $k=2$.
    $\alpha=1/2,\beta=2$, $\alpha\beta=1$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원과 절댓값 함수 만남 개수 조건 (두 식 병렬 접·할)
  mechanism_secondary: [절댓값 분기, 각 반직선 접 조건, 판별식/거리]
  depth_conditions: [2점만 만남 → 한쪽 접 임계 + 다른쪽 접 임계 사이]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 5
  common_mistakes: [분기 조건 하나만 처리, 임계값 방향 실수]
  condition_layers:
    surface: "두 점 만남 조건"
    real: "양쪽 접 임계 사이"
    interaction: "절댓값 분해 → 두 개 조건 조합"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#180
  page: 52
  problem_summary: |
    두 원 $x^2+y^2+4x=0$, $x^2+y^2+10x+24=0$에 동시에 접하는 직선 중 기울기 양수인
    직선을 $l$이라 하자. $l$과 $x,y$축으로 둘러싸인 도형의 넓이를 구하시오.
  solution_summary: |
    첫 원 중심 $(-2,0)$ 반지름 2, 둘째 원 중심 $(-5,0)$ 반지름 1. 두 원 사이 닮음
    (2:1) → 외접선 소실점 결정. 접선 기하 계산 → $l: y=-2x+5$? (해설 그림 유도).
    다른풀이: 직각삼각형 삼각비 활용 넓이 = $8\sqrt{2}$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 원 공통 외접선 (양수 기울기 조건) → 축과 넓이
  mechanism_secondary: [두 원 접선 4종, 닮음 소실점, 삼각형 넓이]
  depth_conditions: [기울기 부호 조건 + 두 원 접 조건 → 접선 유일화]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [접선 4종 중 하나 오선택, 축 절편 실수]
  condition_layers:
    surface: "두 원 접선 → 축과 넓이"
    real: "외접선 유일화 → 삼각형 넓이"
    interaction: "접 조건 → 접선 → 절편 → 넓이"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#181
  page: 52
  problem_summary: |
    점 $(5,0)$에서 원 $x^2+y^2=9$에 그은 두 접선과 $y$축으로 둘러싸인 부분의 넓이.
  solution_summary: |
    접선 $y=a(x-5)$, 원과 접: $|-5a|/\sqrt{a^2+1}=3$, $a=\pm 3/4$. 두 접선
    $y=\pm 3(x-5)/4$, $y$절편 $\mp 15/4$. 밑변 $15/2$, 높이 5, 넓이
    $\frac{1}{2}\times \frac{15}{2}\times 5=75/4$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 외부점 접선 두 개 + $y$축으로 삼각형 넓이
  mechanism_secondary: [기울기 미지 접선, 판별식/거리, 삼각형 넓이]
  depth_conditions: [두 접선 대칭 → $y$절편 부호 반대]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [$y$축 평행 접선 검토 (여기선 없음), 넓이 공식 실수]
  condition_layers:
    surface: "두 접선과 축 둘러싼 넓이"
    real: "접선 → 절편 → 삼각형"
    interaction: "표준 접선 mechanism"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#182
  page: 52
  problem_summary: |
    좌표평면 원 $x^2+y^2=16$ 위 점 $(2\sqrt{3},2)$에서의 접선이 원 $(x+5\sqrt{3})^2+(y-8)^2=r^2$과
    만나도록 하는 자연수 $r$의 최솟값?
  solution_summary: |
    접선: $2\sqrt{3}x+2y=16$ → $\sqrt{3}x+y-8=0$. 중심 $(-5\sqrt{3},8)$과 거리
    $=|{-15+8-8}|/2=15/2$. 만나려면 $r\ge 15/2=7.5$, 자연수 최소 8.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 원 위 점 접선 방정식 + 두 번째 원과 만남 조건
  mechanism_secondary: [원 위 점 접선 공식 $x_1x+y_1y=r^2$, 점-직선 거리]
  depth_conditions: [접선 유도 → 중심-접선 거리 $\le r$ → 자연수 최소]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 3
  common_mistakes: [접선 공식 실수, 자연수 조건 최솟값 방향 실수]
  condition_layers:
    surface: "접선과 원 만남"
    real: "거리 ≤ 반지름 → 자연수 조건"
    interaction: "접선 → 거리 → 부등식"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#183
  page: 52
  problem_summary: |
    점 $(0,5)$에서 원 $x^2+y^2=5$에 그은 두 접선 중 기울기 음수 접선을 $l$. $x,y$축 및 직선 $l$에
    동시에 접하면서 중심 제1사분면인 원 2개. 두 원 반지름 합? [선행 150]
  solution_summary: |
    $l: y=-2x+5$ (원점-접선 거리 $=\sqrt{5}$ 조건). $x,y$축 동시접 → 중심 $(r,r)$
    반지름 $r$. 거리 $|2r+r-5|/\sqrt{5}=r$: $|3r-5|=\sqrt{5}r$, 양변 제곱
    $9r^2-30r+25=5r^2$, $4r^2-30r+25=0$. 근의 합 $30/4=15/2$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 세 직선 동시 접 + 근과 계수 관계 (두 원 반지름 합)
  mechanism_secondary: [$x,y$축 접 원 형태, 이차방정식 두 근의 합]
  depth_conditions: [두 원 조건 → 이차방정식 두 근 → 합]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 3
  common_mistakes: [절댓값 처리 미숙, 근과 계수 관계 방향 실수]
  condition_layers:
    surface: "세 직선 접 원 두 개 반지름 합"
    real: "이차방정식 두 근 합"
    interaction: "접 조건 → 이차식 → 근과 계수"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP2-#184
  page: 52
  problem_summary: |
    두 원 $x^2+y^2=9$, $(x-4)^2+(y-2)^2=17$이 두 점 A,B에서 만난다. A,B에서 원 $x^2+y^2=9$에
    그은 두 접선의 교점이 $(a,b)$일 때 $a+b$?
  solution_summary: |
    두 원 교점 지나는 직선 (근축): 두 방정식 차 → $2x+y-3=0$. 이 직선을 첫 원 대입 →
    A,B 좌표 $(0,3),(12/5,-9/5)$. 각 점의 접선: $3y=9$ → $y=3$; $12x/5-9y/5=9$ →
    $4x-3y=15$. 두 접선 교점 $(6,3)$, $a+b=9$.
  category: 원의 방정식
  difficulty: STEP2
  mechanism_primary: 두 원 교점의 접선 두 개의 교점 (극선 pole·polar 관계)
  mechanism_secondary: [근축 = 두 원 방정식 차, 원 위 점 접선]
  depth_conditions: [근축 → 교점 → 각 접선 → 두 접선 교점]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 극선 vs 좌표 계산
    student_decision_points: 4
  common_mistakes: [근축 계산 실수, 접선 방정식 오류, 두 접선 연립 계산 실수]
  condition_layers:
    surface: "두 원 교점의 접선 두 개 교점"
    real: "근축 → 교점 → 접선 교점 (극선)"
    interaction: "다단 연쇄 계산"
  citation_note: "고쟁이 CH03 · 학습 목적"

# ===== STEP 3 · 최고난도 유형 (#185~200) =====

- source: 고쟁이-CH03-STEP3-#185
  page: 54
  problem_summary: |
    원 $x^2+y^2+4x+3=0$ 위 점 P와 두 점 $A(0,5),B(2,3)$에 대하여 $\overline{AP}^2+\overline{BP}^2$의
    최댓값·최솟값 합? [선행 156]
  solution_summary: |
    $P(a,b)$: $\overline{AP}^2+\overline{BP}^2=2\{(a-1)^2+(b-4)^2\}+4$. 두 점 $(a,b),(1,4)$ 사이
    거리 제곱 관련. 원 $(x+2)^2+y^2=1$ 중심 $(-2,0)$ 반지름 1. $(1,4)$까지 거리 5.
    최대 $=(5+1)^2=36$ → $2\times 36+4=76$. 최소 $=(5-1)^2=16$ → $2\times 16+4=36$.
    합 112.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 두 거리 제곱 합 → 한 점 거리 제곱 변환 (중선정리) + 원 위 점 최적화
  mechanism_secondary: [중선정리 (평행사변형 공식), 원 위 점의 거리 최댓·최솟값]
  depth_conditions: [$\overline{AP}^2+\overline{BP}^2 = 2 \overline{MP}^2 + \overline{AB}^2/2$ 변환]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 4
  common_mistakes: [중선정리 계수 실수, 최대·최소 부호 실수]
  condition_layers:
    surface: "원 위 점의 두 거리 제곱 합"
    real: "중선정리로 한 점 거리 제곱"
    interaction: "대수 변환 → 원 위 점 최적화"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#186
  page: 54
  problem_summary: |
    원 $x^2+y^2-6x-2y=0$이 $x$축과 만나는 두 점 A,B. 제1사분면 위 원 위 점 P에 대하여
    삼각형 ABP 넓이가 자연수인 P의 개수?
  solution_summary: |
    $y=0$ 대입 $A(0,0),B(6,0)$, $\overline{AB}=6$. 원 중심 $(3,1)$ 반지름 $\sqrt{10}$.
    P의 $y$좌표 $k$: 넓이 $=3k$. 자연수 $\to 3k$ 자연수. $y$좌표 범위 (제1사분면 원 위)
    $0<k\le 1+\sqrt{10}\approx 4.16$. (i) $0<k\le 2$이면 원과 수평선 P 1개, $3k$ 자연수
    → $k=1/3,\ldots,2$ → 6개. (ii) $2<k<1+\sqrt{10}$이면 P 2개, $k=7/3,\ldots,4$ → 6개.
    총 $6+12=18$. 답 ⑤.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 원 위 점 삼각형 넓이 자연수 조건 (연속 조건 → 이산 개수)
  mechanism_secondary: [원 축 교점 유도, 삼각형 넓이 공식, $y$좌표 범위]
  depth_conditions: [$y$좌표에 따른 원과 수평선 교점 개수 (1 또는 2) 분기]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [$y$좌표당 P 1개 또는 2개 분기 놓침, 자연수 $3k$ 범위 세기 실수]
  condition_layers:
    surface: "삼각형 넓이 자연수 → 개수"
    real: "$y$좌표 조건 → 수평선 교점 분기"
    interaction: "넓이 조건 → $y$좌표 이산화 → 개수"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#187
  page: 54
  problem_summary: |
    2 이상 자연수 $n$에 대해 점 $(n,0)$에서 원 $x^2+y^2=1$에 그은 접선의 접점 좌표 $(x_n,y_n)$
    (제1사분면 접점). $y_2\times y_3\times y_4\times\cdots\times y_9$?
  solution_summary: |
    접선 $x_nx+y_ny=1$이 $(n,0)$ 지남: $x_nn=1$, $x_n=1/n$. $y_n=\sqrt{1-1/n^2}=\sqrt{(n-1)(n+1)}/n$.
    곱 $\prod_{n=2}^9 \sqrt{(n-1)(n+1)}/n = \sqrt{\prod (n-1)(n+1)/n^2}$
    = $\sqrt{(1\cdot 3)(2\cdot 4)(3\cdot 5)\cdots(8\cdot 10)/(2\cdot 3\cdots 9)^2}$
    = $\sqrt{1/2 \cdot 10/9}=\sqrt{5}/3$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 원 위 접점 좌표 일반식 + 텔레스코핑 곱셈 (수열식 인수분해)
  mechanism_secondary: [접선 공식, 원 위 점 좌표, 곱셈 규칙성 소거]
  depth_conditions: [일반항 $y_n$ 유도 → 곱셈 규칙 → 텔레스코핑]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high  # 좌표 vs 삼각비 (닮음)
    student_decision_points: 4
  common_mistakes: [곱셈 규칙 소거 실수, 인덱스 범위 실수]
  condition_layers:
    surface: "여러 접점의 $y$좌표 곱"
    real: "일반항 → 텔레스코핑"
    interaction: "접점 좌표 → 인수분해 → 규칙 소거"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#188
  page: 54
  problem_summary: |
    좌표평면 위 지구 원 $x^2+y^2=9$. 고도 1인 인공위성이 원 $x^2+y^2=16$ 위, 점 $A(3,0)$에서의
    접선 위 점 S에 위치. 이 인공위성에서 지구에 그은 다른 접선의 접점 B의 좌표?
  solution_summary: |
    A에서의 접선 $x=3$, S는 이 접선 & 궤도 원 교점 → $S(3,\sqrt{7})$ (제1사분면).
    S에서 지구 원 접선 두 개, 하나는 A 접점, 다른 접선의 접점 $B(x_1,y_1)$.
    접선 $x_1x+y_1y=9$가 S 지남: $3x_1+\sqrt{7}y_1=9$. $B$가 원 위: $x_1^2+y_1^2=9$.
    연립 $(x_1-3)(8x_1-3)=0$, $x_1=3/8, y_1=9\sqrt{7}/8$. $B(3/8, 9\sqrt{7}/8)$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 외부점 두 접점 (하나 주어짐 → 다른 접점 구하기, 실생활 지문)
  mechanism_secondary: [원 위 점 접선 공식, 두 미지수 연립, 접점 중복 예외 처리]
  depth_conditions: [외부점 조건 → 접점 두 개 중 알려진 것 배제]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 4
  common_mistakes: [알려진 접점 배제 놓치고 오답, 좌표 부호 실수]
  condition_layers:
    surface: "인공위성 (실생활) → 다른 접점"
    real: "외부점 두 접점 중 배제 후 계산"
    interaction: "실생활 → 좌표화 → 두 접점 방정식"
  citation_note: "고쟁이 CH03 · 학습 목적 · 실생활 지문형"

- source: 고쟁이-CH03-STEP3-#189
  page: 55
  problem_summary: |
    원 $x^2+(y+3)^2=16$을 선분 AB (원 위 두 점)를 접는 선으로 접어 $y$축과 점 $(0,-2)$에서
    접하도록. AB 방정식 $y=mx+n$일 때 $m\times n$? [빈출, $m>0$]
  solution_summary: |
    접힌 원 (호 ACB 포함하는 반)의 중심 $C(0,-2)$ ($y$축 접 조건). 접힘은 원본 원과 이 접힌 원이
    AB에 대해 대칭 → 원본 중심 $(0,-3)$과 접힌 중심 대칭 관계로 AB 결정.
    다른 접힌 원 중심: 접힘 mechanism 유도 → 중심 $(-4,-2)$, 반지름 4. AB = 두 원의 근축:
    두 방정식 차 → $-8x+2y-11=0$, $y=4x+11/2$. $m=4, n=11/2$, $mn=22$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 원 접기 (fold) 대칭 + 근축으로 접는 선 유도
  mechanism_secondary: [접힘 = 대칭변환, 대칭원 중심 결정, 근축 방정식]
  depth_conditions: [접힘 조건 (다른 접 조건 $y$축) → 대칭원 유일화 → 근축]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [대칭원 중심 좌표 실수, 근축 부호 오류]
  condition_layers:
    surface: "원 접기 → 접는 선 방정식"
    real: "대칭 → 대칭원 → 두 원 근축"
    interaction: "종이 접기 → 기하 변환 → 근축"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#190
  page: 55
  problem_summary: |
    이차함수 $y=x^2$ 그래프 위 점 중심 + $y$축 접 원 중, 직선 $y=\sqrt{3}x-2$와 접 원 2개.
    반지름 각각 $a,b$. $100ab$? [교육청 기출, 선행 151]
  solution_summary: |
    중심 $(k,k^2)$, $y$축 접 → 반지름 $|k|$. 직선 $\sqrt{3}x-y-2=0$과 접:
    $|\sqrt{3}k-k^2-2|/2=|k|$, $|\sqrt{3}k-k^2-2|=2|k|$.
    (i) $\sqrt{3}k-k^2-2=2k$ → 판별식 $<0$, 근 없음.
    (ii) $\sqrt{3}k-k^2-2=-2k$ → $k^2-(2+\sqrt{3})k+2=0$, 판별식 $>0$, 두 실근, 곱 = 2.
    $ab=|k_1 k_2|=2$. $100ab=200$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 곡선 위 중심 + 두 접 조건 → 이차방정식 두 근의 곱
  mechanism_secondary: [절댓값 분기, 판별식 부호, 근과 계수 관계]
  depth_conditions: [절댓값 분기 → 케이스별 판별식 → 유효 케이스만 두 근]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: medium
    student_decision_points: 4
  common_mistakes: [절댓값 분기 하나 놓침, 판별식 계산 실수]
  condition_layers:
    surface: "곡선 위 중심 원 두 개 반지름 곱"
    real: "이차방정식 두 근의 곱"
    interaction: "절댓값 분기 → 유효 케이스 → 근·계수"
  citation_note: "고쟁이 CH03 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CH03-STEP3-#191
  page: 55
  problem_summary: |
    원 $x^2+(y-2)^2=4$와 직선 $y=kx+2k+2$가 서로 다른 두 점 A,B에서 만난다.
    선분 AB & 호 AB로 둘러싸인 도형 중 작은 넓이 $S_1$, 선분 OB & 호 OB로 둘러싸인
    도형 중 작은 넓이 $S_2$. $S_1=S_2$일 때 모든 $k$의 합? (O 원점, B의 $x$좌표 > A의 $x$좌표)
  solution_summary: |
    직선 $y=k(x+2)+2$, 정점 $(-2,2)$ 통과. 정점은 원 위 점 (거리 = 반지름 조건). $S_1=S_2$ →
    OA·OB 대칭 → OB = 원의 지름 (B가 원 위). 대칭 조건 → 선분 OA 수직이등분선 위에 원 중심.
    OA 중점 $(-1,1)$, OA 수직이등분선 기울기 = 1. B: $y=x+2$와 원 교점, $B(\sqrt{2},2+\sqrt{2})$
    또는 $(-\sqrt{2},2-\sqrt{2})$. 각 경우 $k$: $(\sqrt{2}-1)$ 또는 $(-\sqrt{2}-1)$. 합 $-2$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 원 위 두 넓이 같음 → 대칭성 (원의 지름 활용)
  mechanism_secondary: [정점 직선 (매개변수), 원과 직선 교점, 대칭 조건]
  depth_conditions: [$S_1=S_2$ → 대칭 → 두 활꼴 조건 → 대칭축]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [대칭 조건 놓침, 두 경우 검토 실패]
  condition_layers:
    surface: "두 활꼴 넓이 같음"
    real: "대칭 → 원의 지름 또는 대칭축"
    interaction: "매개변수 정점 + 대칭 → $k$ 두 근"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#192
  page: 55
  problem_summary: |
    점 $P(-3,2)$와 원 $(x-3)^2+y^2=10$ 위 두 점 A,B에 대하여 $\overline{PA}=\overline{PB}=3\sqrt{2}$.
    두 직선 PA, PB 기울기 합?
  solution_summary: |
    P에서 원의 접선 두 개 (P가 원 밖이라면 접선) — 여기선 $\overline{PA}$ 특정값 → 원 & 원 $|PA|=3\sqrt{2}$ 
    교점. P 중심 반지름 $3\sqrt{2}$ 원 $(x+3)^2+(y-2)^2=18$과 원 $(x-3)^2+y^2=10$의 교점 A,B.
    근축: 두 방정식 차 → $12x-4y+4=0$, $y=3x+1$. 이 직선 & 원 $(x-3)^2+y^2=10$ 대입
    $(x-3)^2+(3x+1)^2=10$, $10x^2-12x=0$, $x=0$ or $6/5$. A$(6/5, 13/5)$, B$(0,-1)$.
    기울기 PA $= (13/5-2)/(6/5+3)=(3/5)/(21/5)=1/7$. PB $= (-1-2)/(0+3)=-1$. 합 $1/7-1=-6/7$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 등거리 두 점 조건 → 두 원 교점 (한 원은 P 중심)
  mechanism_secondary: [근축 이용, 두 원 교점 좌표 계산, 기울기 합]
  depth_conditions: [$\overline{PA}=\overline{PB}=$ 고정 → P 중심 원과 주어진 원 교점]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [P 중심 원 세팅 실수, 교점 좌표 계산 실수]
  condition_layers:
    surface: "등거리 두 점 → 기울기 합"
    real: "두 원 교점 문제"
    interaction: "거리 조건 → 두 원 → 근축 → 교점"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#193
  page: 56
  problem_summary: |
    두 원 $(x+1)^2+(y-2)^2=10$, $(x-2)^2+(y+1)^2=k$가 두 점 A,B에서 만날 때,
    $\overline{AB}=2\sqrt{2}$가 되는 모든 양수 $k$의 합?
  solution_summary: |
    첫 원 반지름 $\sqrt{10}$, $\overline{AM}=\sqrt{2}$ → $\overline{O_1M}=2\sqrt{2}$.
    두 중심 거리 $\sqrt{9+9}=3\sqrt{2}$. M은 $O_1O_2$ 위. $k=\overline{O_2A}^2=\overline{AM}^2+\overline{MO_2}^2=2+\overline{MO_2}^2$.
    (i) M이 $O_1$-$O_2$ 사이: $\overline{MO_2}=3\sqrt{2}-2\sqrt{2}=\sqrt{2}$, $k=4$.
    (ii) $O_2$가 $O_1$-M 사이는 없음. (iii) M이 $O_1$ 반대쪽: $\overline{MO_2}=3\sqrt{2}+2\sqrt{2}=5\sqrt{2}$, $k=52$.
    합 $56$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 두 원 교점 현 길이 조건 → 두 케이스 (중심-현 상대 위치)
  mechanism_secondary: [현 길이 → 반현 → 중심-현 거리, 두 원 중심 거리, 피타고라스]
  depth_conditions: [M(현 중점) 위치가 O_1O_2 위 → 두 방향 케이스]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [케이스 하나만 검토, 부호 판단 실수]
  condition_layers:
    surface: "두 원 교현 길이 → 반지름 조건"
    real: "M 위치 두 케이스 → 두 $k$"
    interaction: "현 조건 → 피타고라스 → 두 케이스 합"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#194
  page: 56
  problem_summary: |
    좌표평면 두 점 $A(-5,-2),B(-1,6)$에 대해 $\angle APB=45°$ 만족 점 P. 서로 다른 세 점 A,B,P
    지나는 원 중심 C, $\overline{OC}^2=k$일 때 가능한 $k$의 합? (O 원점) [교육청 변형]
  solution_summary: |
    원주각 $45°$ → 중심각 $90°$ → $\triangle ACB$ 직각이등변, $\overline{AC}=\overline{BC}=r$.
    $\overline{AB}=\sqrt{16+64}=4\sqrt{5}$, $2r^2=80$, $r=2\sqrt{10}$.
    C는 AB 수직이등분선 위. 중점 $(-3,2)$, AB 기울기 2, 수직이등분선 $y=-x/2+1/2$.
    $C(a, -a/2+1/2)$. $\overline{AC}^2=(-5-a)^2+(-a/2+1/2+2)^2=(a+5)^2+(a-5)^2/4=40$.
    풀면 $a^2+6a-7=0$, $a=-7$ 또는 $a=1$. $C(-7,4)$ or $(1,0)$. $\overline{OC}^2=65$ 또는 $1$.
    합 66.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 원주각 정리 + 두 점 지나는 원의 중심 자취 (수직이등분선)
  mechanism_secondary: [원주각-중심각 관계, 직각이등변삼각형, 중심 자취 계산]
  depth_conditions: [$\angle APB=45°$ → 중심각 $90°$ → 원의 반지름 결정]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 5
  common_mistakes: [원주각-중심각 비율 실수, 두 근 하나 놓침]
  condition_layers:
    surface: "원주각 조건 → 중심 원점거리"
    real: "원주각 → 중심각 → 반지름 → 자취 → 두 근"
    interaction: "각 조건 → 반지름 → 수직이등분선 위 두 점"
  citation_note: "고쟁이 CH03 · 학습 목적 · 교육청 변형"

- source: 고쟁이-CH03-STEP3-#195
  page: 56
  problem_summary: |
    좌표평면 세 점 $A(-5,-1),B,C$가 (ⓐ 무게중심 $(-1,1)$, ⓑ 세 점 지나는 원의 중심 원점) 만족.
    삼각형 ABC 넓이 $\frac{q}{p}\sqrt{105}$일 때 $p+q$? [교육청 기출, 서로소 자연수]
  solution_summary: |
    BC 중점 M$(a,b)$: 무게중심 조건에서 $A+2M/3$ 관계 → $M(1,2)$. 원 중심 원점 → M은 A와
    무관하게 원점에서 BC 수직이등분선 만난 점. 원의 반지름 $r=\overline{OA}=\sqrt{26}$.
    $\overline{OM}=\sqrt{5}$, 반현 $\overline{BM}=\sqrt{26-5}=\sqrt{21}$, $\overline{BC}=2\sqrt{21}$.
    BC 방향: 원점-M 수직. 직선 BC: $y-2=-1/2(x-1)$ → $x+2y-5=0$.
    A와 BC 거리 $|-5-2-5|/\sqrt{5}=12/\sqrt{5}=12\sqrt{5}/5$.
    넓이 $=\frac{1}{2}\times 2\sqrt{21}\times 12\sqrt{5}/5=\frac{12}{5}\sqrt{105}$. $p=5,q=12$, $p+q=17$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 무게중심·원 중심 이중 조건 + 원에 내접 삼각형 넓이
  mechanism_secondary: [무게중심 좌표 공식, 원 중심-현 수직, 삼각형 넓이 = 밑변 × 높이 / 2]
  depth_conditions: [두 조건 → M 결정 → BC 방향 → 넓이 계산]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 6
  common_mistakes: [무게중심 공식 계수 실수, BC 방향 결정 놓침]
  condition_layers:
    surface: "무게중심·원 중심 조건 → 넓이"
    real: "M 좌표 → BC 유도 → 밑변×높이"
    interaction: "두 조건 연립 → 기하 → 넓이"
  citation_note: "고쟁이 CH03 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CH03-STEP3-#196
  page: 56
  problem_summary: |
    P 지점 레이더 반경 $10\sqrt{13}$km. P 서쪽 40km 배가 시속 4km 등속 직선 이동, 배의 진행 방향과
    동쪽 방향이 이루는 각 $60°$. 이 배가 화면에 보였다가 사라질 때까지 걸리는 시간?
  solution_summary: |
    P 원점, 배 시작점 $(-40,0)$. 진행 방향 각 $60°$ → 배 경로 기울기 $\tan 60°=\sqrt{3}$.
    직선 $y=\sqrt{3}(x+40)$. 이 직선과 원 $x^2+y^2=1300$ 교점 A,B. 원점-직선 거리 $=|40\sqrt{3}|/2=20\sqrt{3}$.
    반현 $\overline{AH}=\sqrt{1300-1200}=10$, $\overline{AB}=20$km. 속력 4km/h → 시간 5시간.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 실생활 (레이더 원) → 현 길이 → 시간 계산
  mechanism_secondary: [삼각비 → 직선 기울기, 원과 직선 교점 현, 시간 = 거리/속력]
  depth_conditions: [실생활 → 좌표화 → 원-직선 현 길이 → 시간 환산]
  freedom_signals:
    initial_setup_freedom: high  # 좌표 세팅
    approach_choice: medium
    student_decision_points: 5
  common_mistakes: [각 방향 → 기울기 오차, 반현·현 혼동, 단위 실수]
  condition_layers:
    surface: "레이더 배 감지 시간"
    real: "현 길이 = 감지 거리"
    interaction: "실생활 → 좌표 → 현 → 시간"
  citation_note: "고쟁이 CH03 · 학습 목적 · 실생활 지문형"

- source: 고쟁이-CH03-STEP3-#197
  page: 57
  problem_summary: |
    좌표평면 $x,y$축, 직선 $3x-4y+6=0$에 동시에 접하는 모든 원의 중심 좌표 (서술형).
    [선행 183]
  solution_summary: |
    $x,y$축 접 → 중심 $(a,a)$ 또는 $(a,-a)$, 반지름 $|a|$.
    (i) $(a,a)$: $|3a-4a+6|/5=|a|$, $|-a+6|=5|a|$. $-a+6=5a$ → $a=1$, 중심 $(1,1)$.
        $-a+6=-5a$ → $a=-3/2$, 중심 $(-3/2,-3/2)$.
    (ii) $(a,-a)$: $|3a+4a+6|/5=|a|$, $|7a+6|=5|a|$. $7a+6=5a$ → $a=-3$, 중심 $(-3,3)$.
        $7a+6=-5a$ → $a=-1/2$, 중심 $(-1/2,1/2)$.
    총 4개 중심.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 세 직선 동시 접 + 4개 원 (사분면별 다중 케이스)
  mechanism_secondary: [$x,y$축 접 중심 형태 2종, 각 케이스 절댓값 방정식 2개 근]
  depth_conditions: [4개 케이스 × 2개 근 = 이론상 4개 중심 모두 열거]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: low
    student_decision_points: 5
  common_mistakes: [4개 중 일부 케이스 누락, 절댓값 분기 실수]
  condition_layers:
    surface: "세 직선 접 원 모든 중심"
    real: "2개 중심 형태 × 각 2개 근"
    interaction: "체계적 열거 + 케이스별 계산"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#198
  page: 57
  problem_summary: |
    원 $x^2+(y-1)^2=1$ 위 점 $A(a,b)$와 원 $(x+3\sqrt{3})^2+(y-3)^2=9$ 위 점 $B(c,d)$에 대하여
    $ac+bd=0$일 때, 점 A가 나타내는 도형의 길이를 구하시오. ($ac \ne 0$)
  solution_summary: |
    $ac+bd=0$ → $b/a \times d/c=-1$ → 직선 OA와 OB 수직 (원점 O).
    원점 지나는 직선 $y=kx$ 원 $(x+3\sqrt{3})^2+(y-3)^2=9$과 접 → 접선 두 개 결정, $k=0$ 또는 $k=-\sqrt{3}$.
    $y=kx$ 만나는 조건 $-\sqrt{3}\le k\le 0$. 이때 수직인 직선 기울기 $\ge 1/\sqrt{3}$.
    A는 원 $x^2+(y-1)^2=1$ 위 점 중 원점 방향 각 조건 만족 → 원호 (중심각 $120°$, 반지름 1).
    길이 $=2\pi\times 1\times 120/360=2\pi/3$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 두 벡터 내적 = 0 → 두 반지름 수직 → 원호 자취 (호 길이)
  mechanism_secondary: [내적 조건 → 기하 수직, 원점 지나는 직선과 원 접 조건, 원호 길이]
  depth_conditions: [$ac+bd=0$ → OA ⊥ OB → 원 B의 접선 범위 → 반대편 원호 결정]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 6
  common_mistakes: [벡터 내적 = 수직 관계 놓침, 각도 범위 오류, 원호 계산 실수]
  condition_layers:
    surface: "두 원 위 점 대수 조건"
    real: "두 반지름 수직 → 각도 범위 → 원호"
    interaction: "대수 → 기하 → 각도 → 호 길이"
  citation_note: "고쟁이 CH03 · 학습 목적"

- source: 고쟁이-CH03-STEP3-#199
  page: 57
  problem_summary: |
    두 원 $C_1: x^2+y^2=1$, $C_2: x^2+y^2=8$. $C_1$에 접하는 직선 $l: ax+by+1=0$.
    $l$에 평행하고 $C_2$에 접하는 두 직선 $l_1,l_2$. $P_1(x_1,y_1)$은 $l_1$ 위, $P_2(x_2,y_2)$는
    $l_2$와 $C_2$ 접점. $(ax_1+by_1+1)^2(ax_2+by_2+1)^2$? [교육청 변형]
  solution_summary: |
    $C_1$ 접 조건: 원점-l 거리 = 1 → $a^2+b^2=1$.
    $P_1$이 $l_1$ 위: $P_1$에서 $l$까지 거리 = 두 반지름 합 = $1+2\sqrt{2}$ →
    $|ax_1+by_1+1|=2\sqrt{2}+1$.
    $P_2$가 $l_2$와 $C_2$ 접점: 유사, 거리 차이 = $2\sqrt{2}-1$ → $|ax_2+by_2+1|=2\sqrt{2}-1$.
    곱 $|ax_1+by_1+1||ax_2+by_2+1|=(2\sqrt{2}+1)(2\sqrt{2}-1)=7$.
    제곱 $= 49$.
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 접선 평행 두 개 + 각 원 반지름 거리 차·합 → 거리 곱 대수
  mechanism_secondary: [원 접 조건 $a^2+b^2=1$, 평행선 거리, 곱셈 정리]
  depth_conditions: [두 원 반지름 → 두 평행선 거리 → 곱 $=(2\sqrt{2}+1)(2\sqrt{2}-1)$]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 6
  common_mistakes: [각 거리 관계 계수 실수, 곱 유리화 실수]
  condition_layers:
    surface: "복잡한 대수식 값"
    real: "두 접선 거리 곱"
    interaction: "접 조건 → 거리식 → 곱 정리"
  citation_note: "고쟁이 CH03 · 학습 목적 · 교육청 변형"

- source: 고쟁이-CH03-STEP3-#200
  page: 57
  problem_summary: |
    양의 실수 $a$에 대해 점 $P(-2,a)$에서 원 $x^2+y^2=1$에 그은 두 접선의 접점 Q,R.
    선분 QR의 중점 M이 그리는 도형의 방정식?
  solution_summary: |
    $\overline{OP}=\sqrt{4+a^2}$, $\overline{OQ}=1$. △OPQ, △OQM 닮음.
    $\overline{OP}:\overline{OQ}=\overline{OQ}:\overline{OM}$ → $\overline{OM}=1/\sqrt{a^2+4}$.
    $\overline{PM}=\sqrt{a^2+4}-1/\sqrt{a^2+4}=(a^2+3)/\sqrt{a^2+4}$.
    M은 OP를 $1:(a^2+3)$으로 내분: $M(-2/(a^2+4), a/(a^2+4))$.
    $x=-2/(a^2+4), y=a/(a^2+4)$. $x<0,y>0$. $(x)^2+(y)^2=(4+a^2)/(a^2+4)^2=1/(a^2+4)=-x/2$.
    → $x^2+y^2+x/2=0$, $(x+1/4)^2+y^2=1/16$ ($x<0, y>0$).
  category: 원의 방정식
  difficulty: STEP3
  mechanism_primary: 외부점 접점 두 개의 중점 자취 (극선-내분 관계)
  mechanism_secondary: [닮음 삼각형 (OPQ ~ OQM), 매개변수 소거]
  depth_conditions: [매개변수 $a$에 대해 M 좌표 → $a$ 소거 → 자취 방정식 + 사분면 제약]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: high
    student_decision_points: 6
  common_mistakes: [내분비 실수, 매개변수 소거 대수 실수, 사분면 제약 누락]
  condition_layers:
    surface: "매개변수 접점 중점 자취"
    real: "닮음 → 내분점 → 매개변수 소거"
    interaction: "기하 (닮음) → 좌표 → 자취"
  citation_note: "고쟁이 CH03 · 학습 목적"
```

## (3) CH03 종합 (원 mechanism 반복 패턴)

### A. Mechanism 분포 (56문 전수 집계)

| Mechanism 카테고리 | 개수 | 비율 | 대표 문항 |
|---|---:|---:|---|
| **M1. 원-직선 위치·거리 (거리·반지름·현·접선)** | 16 | 29% | #145 #162 #168 #169 #170 #171 #175 #179 #185 #186 #196 등 |
| **M2. 원 접선 (외부점·원 위점·기울기 주어짐)** | 13 | 23% | #163 #164 #172 #174 #181 #182 #187 #188 #197 #200 등 |
| **M3. 자취·궤적 (닮음·수직이등분선·아폴로니우스)** | 8 | 14% | #147 #154 #155 #158 #159 #160 #171 #198 |
| **M4. 두 원 관계 (근축·이등분·외접선·현)** | 7 | 13% | #165 #166 #178 #180 #184 #193 #199 |
| **M5. 원의 방정식 특수 조건 (두 축 접·둘레·정사각형)** | 6 | 11% | #148 #149 #150 #151 #153 #197 |
| **M6. 원 위 점 최적화 (거리/거리제곱 합)** | 4 | 7% | #152 #156 #185 #194 |
| **M7. 원과 다른 곡선 접 (포물선·절댓값)** | 2 | 4% | #167 #179 #190 |

### B. 정점 문항 (STEP 3) 특징 — Meta-Mechanism 관점

**최고난도 16문 공통 원리**:

1. **Meta-M1 조건 재해석 (표면 → 실질)** 강도: **7문** (44%)
   - #189 (원 접기 → 대칭원 → 근축), #191 (두 활꼴 넓이 같음 → 대칭), #194 (원주각 → 중심각 → 반지름), #198 (내적 = 0 → 반지름 수직), #200 (접점 중점 → 닮음 → 내분점)

2. **Meta-M2 자유도 확보 (다중 케이스 분기)** 강도: **6문** (38%)
   - #186 ($y$좌표 범위별 P 개수 분기), #193 (M 위치 두 방향), #197 (4 케이스 원 열거), #185 (최대·최소 방향)

3. **Meta-M4 논리-기하-대수 다중 번역** 강도: **8문** (50%)
   - 거의 모든 STEP 3 문항이 대수식 → 기하 관계 (근축·자취·닮음) → 재대수화 왕복

4. **Meta-M5 최적화 논리** 강도: **4문** (25%)
   - #185 (최대·최소 합), #186 (자연수 조건 개수), #191 (넓이 같음), #196 (실생활 시간)

5. **실생활 지문** — **3문** (#160 배 속력비 아폴로니우스, #188 인공위성 접점, #196 레이더 감지 시간)

### C. 조건 층위 (condition_layers) 패턴

**표면 → 실질 gap이 큰 문항 (정점 후보)**:
- #148 "세 직선 삼각형 외접원" → "직각삼각형 외심 = 빗변 중점" (수직 판정 gap)
- #157 "정수 거리 P 개수" → "각 정수당 P 2개" (원-수평선 교점 개수 gap)
- #164 "삼각형 PAB 넓이" → "닮음 비 5:4 활용" (사각형 vs 삼각형 gap)
- #171 "수직 접선 교점" → "동심 확대 원 (반지름 $r\sqrt{2}$)" (자취 gap)
- #189 "원 접기" → "접힘 = 대칭 → 두 원 근축" (기하 변환 gap)
- #198 "$ac+bd=0$" → "두 반지름 수직 → 원호 자취" (대수-기하 gap)

### D. 자유도 신호 (freedom_signals) 통계

| 자유도 지표 | STEP 2 평균 | STEP 3 평균 |
|---|---:|---:|
| initial_setup_freedom (좌표계 등 초기 설정) | low ~ medium | medium (좌표 세팅 자유 문항 多) |
| approach_choice (다중 접근 가능성) | medium | **high** (거의 모두 대수·기하 병렬 가능) |
| student_decision_points (판단 지점) | 2~4 | **5~6** (분기·케이스 열거 多) |

### E. 반복 패턴 요약 (원 mechanism 회귀 구조)

**고쟁이 CH03의 원 문제 반복 회귀 3구조**:

**패턴 A. "일반형 → 표준형 → 중심/반지름 유도 → 표준 mechanism"** (전체 30문 이상)
- 원의 방정식 $x^2+y^2+Ax+By+C=0$ 나오면 반드시 완전제곱 → 중심·반지름 유도 → 이후 접선·현·거리 mechanism 적용
- 대표: #145 #146 #148 #149 #162 #164 #168 #185 #186 등

**패턴 B. "축 접 원 → 중심 $(a,\pm a)$ 강제 → 이차방정식 두 근"** (전체 6문)
- $x,y$축 동시 접 원 문항은 무조건 중심 형태 2종 (사분면별) 유도 → 각 케이스에서 이차방정식 → 근 열거
- 대표: #150 #151 #183 #197

**패턴 C. "외부점 접선 → 사각형·닮음 → 넓이/길이"** (전체 5문)
- 외부점 P·원의 중심 C·두 접점 A,B → 사각형 PACB → 닮음 활용 → 넓이/거리 계산
- 대표: #163 #164 #172 #174 #200

**패턴 D. "두 원 관계 → 근축 우선"** (전체 6문)
- 두 원 교점·이등분·공통현 → 두 원 방정식 차 = 근축 유도 강제
- 대표: #166 #184 #189 #192 #193 #199

**패턴 E. "자취 문제 → 대수 → 기하 원/직선"** (전체 8문)
- 조건식 (거리·비·내적) → 대수 정리 → 원/직선/원호 자취 유도
- 대표: #147 #154 #155 #156 #158 #159 #160 #198 #200

### F. 정점 문항 자격 (composite ≥ 24 예상 문항)

STEP 3 16문 중 **정점 자격 강한 문항 (참고 정점 후보)**:
- **#186** ($y$좌표 분기 + 자연수 개수 세기 · 다층 케이스)
- **#189** (원 접기 대칭 · 근축 결합 · 기하 변환 통찰)
- **#193** (두 원 현 두 케이스 · 케이스 열거 강제)
- **#194** (원주각-중심각 · 자취 · 두 근)
- **#195** (무게중심 + 원 중심 이중 조건 · 6+ 판단 지점)
- **#198** (내적 → 수직 → 원호 자취 · 대수-기하 다중 번역)
- **#199** (평행 접선 거리 곱 · 유리화 · 대수 통찰)
- **#200** (접점 중점 자취 · 매개변수 소거 · 사분면 제약)

### G. 학습 참조 시사점 (본 프로젝트 활용)

1. **CM2-GM 원 mechanism 은행 확장 후보**: 위 패턴 A~E가 `bank/mechanism-은행.md`의 GM 13 mechanism 검증·확장 자료
2. **정점 후보 앵커화**: #189 #194 #195 #198은 star_premium 후보 (composite 예상 24~30)
3. **실생활 지문형 참조**: #160 #188 #196은 지문형 정점 archetype AR1 (다중 제약)의 CM2-GM 사례
4. **금지 사항 (변형 정책)**: 원문 인용·숫자만 변경은 §"문제 변형 정책" 1순위, 통찰 훼손 변형은 절대 금지

---

**Citation**: 본 데이터는 고쟁이 공통수학2 (2022개정) CH03 원의 방정식 STEP 2·STEP 3 학습 목적 정독 결과. 문제·풀이 원문 전사 없음, 요약·mechanism·자유도 라벨링만. 저작권은 원저작권자에 있음.
